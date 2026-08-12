// القراءة الراشدة, volume one, chapter fourteen -- الصيد.
//
// Follows the shape of chapter-06.js/chapter-10.js -- see
// ../CHAPTER-FORMAT.md for the full specification. Hand-authored directly
// from the scanned pages (qiratur rashida/_al-qir`atur-rashida 1-2.pdf,
// printed pages 69-71); there is no JSON intermediate (see
// PROJECT_CONTEXT.md and QASAS_AGENT_BRIEF.md -- the pipeline no longer
// emits JSON).
//
// A first-person-plural hunting narrative (the narrator is later named
// Khalid, in the friends' congratulations) -- the same register as
// chapter-06's picnic outing, no new structural handling needed. The
// chapter models correct Islamic hunting/slaughter practice throughout: a
// downed-but-still-living animal is finished with a proper hand slaughter
// (ذبح) invoking God's name and takbir, exactly as classical fiqh requires
// for game brought down by a shot -- this is presented matter-of-factly, the
// same way chapter-02.js and others treat ordinary worship practice. Two
// footnoted book_notes are carried on ضل and مِرْصَاد and صَوَّبَ (three total),
// matching the established footnote-as-book_note convention.
//
// Vocabulary notes:
//   - رِجْلَيْهَا ("its legs," of the wounded cow thrashing) is a different
//     word from "رجل" already established (chapter-02.js onward) as "man" --
//     رَجُل ("man") and رِجْل ("leg, foot") are unrelated words that happen to
//     share a root spelling; كتب this chapter with a distinct "رجل-قدم" key,
//     following the ذهب/ذهب-معدن naming precedent (existing sense keeps the
//     bare key, the new unrelated sense takes a suffix).
//   - كَبَّرَ/كَبَّرْتُ ("to say Allāhu Akbar," Form II, said at each successful
//     kill) is a different word from "كبر" already established (chapter-08.js)
//     as a noun, "old age, adulthood" -- both trace to the same root ك ب ر
//     but are not the same word, so the verb gets its own "كبر-تكبير" entry
//     rather than overloading the noun's key.
//   - بُعْد ("distance, afar," e.g. بَرَزَ خَلِيْلٌ مِنْ بُعْدٍ) is a different word
//     from "بعد" already established as the preposition "after" -- kept as a
//     distinct "بعد-مسافة" entry for the same reason.
//   - بَقَرَة ("a cow," singulative) and بَقَر (already established in
//     chapter-13.js as the collective "cattle") are the standard Arabic
//     collective/singulative pair (اسم جنس جمعي وواحده), not a homograph --
//     both are kept as separate ordinary entries, same as حَمَام/حَمَامَة
//     ("pigeons" collective / "a pigeon") introduced together in this
//     chapter.
//   - غابة ("forest") was already introduced in an earlier chapter and is
//     reused here rather than counted as a newWord.
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch14",
  "number": 14,
  "title": {
    "ar": "اَلصَّيْدُ",
    "en": "The Hunt"
  },
  "pages": [
    69,
    70,
    71
  ],
  "register": "first_person_plural_narrative",
  "newWords": [
    "صياد",
    "بندقية",
    "مرصاد",
    "رصاصة",
    "وحش",
    "ذبح",
    "جرح",
    "صيد",
    "أخطأ",
    "حمامة",
    "بطة",
    "سكين"
  ],
  "lemmas": {
    "خرج": {
      "root": "خ ر ج",
      "pos": "verb",
      "gloss": "to go out",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "عطلة": {
      "root": "ع ط ل",
      "pos": "noun",
      "gloss": "holiday, day off",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "صياد": {
      "root": "ص ي د",
      "pos": "noun",
      "gloss": "hunter",
      "content": true
    },
    "عند": {
      "root": "ع ن د",
      "pos": "prep",
      "gloss": "at, by, with, in one's possession",
      "content": false
    },
    "بندقية": {
      "root": "ب ن د ق",
      "pos": "noun",
      "gloss": "rifle",
      "content": true
    },
    "سكين": {
      "root": "س ك ن",
      "pos": "noun",
      "gloss": "knife",
      "content": true
    },
    "بكر": {
      "root": "ب ك ر",
      "pos": "verb",
      "gloss": "to be early, rise early",
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
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (with jussive, past negation)",
      "content": false
    },
    "طلع": {
      "root": "ط ل ع",
      "pos": "verb",
      "gloss": "to rise, come up (of the sun)",
      "content": true
    },
    "شمس": {
      "root": "ش م س",
      "pos": "noun",
      "gloss": "sun",
      "content": true
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
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
    "أتراب": {
      "root": "ت ر ب",
      "pos": "noun",
      "gloss": "peers, those of the same age",
      "content": true,
      "book_note": "الأَتْرَاب جَمْعُ التِّرْب: الْمُمَاثِل فِي السِّنّ (لِلْمُذَكَّر وَالْمُؤَنَّث) (peers: one who matches another in age, for both masculine and feminine)"
    },
    "صديق": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friend",
      "content": true
    },
    "أخذ": {
      "root": "أ خ ذ",
      "pos": "verb",
      "gloss": "to take",
      "content": true
    },
    "غداء": {
      "root": "غ د و",
      "pos": "noun",
      "gloss": "lunch",
      "content": true
    },
    "تغدى": {
      "root": "غ د و",
      "pos": "verb",
      "gloss": "to have lunch",
      "content": true
    },
    "إذا": {
      "root": "—",
      "pos": "part",
      "gloss": "if, when",
      "content": false
    },
    "غلب": {
      "root": "غ ل ب",
      "pos": "verb",
      "gloss": "to overcome, defeat",
      "content": true
    },
    "جوع": {
      "root": "ج و ع",
      "pos": "noun",
      "gloss": "hunger",
      "content": true
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
      "gloss": "that",
      "content": false
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
    "نزل": {
      "root": "ن ز ل",
      "pos": "verb",
      "gloss": "to go down, come down",
      "content": true
    },
    "مشى": {
      "root": "م ش ي",
      "pos": "verb",
      "gloss": "to walk",
      "content": true
    },
    "حر-حرارة": {
      "root": "ح ر ر",
      "pos": "noun",
      "gloss": "heat",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until; so that",
      "content": false
    },
    "تعب": {
      "root": "ت ع ب",
      "pos": "adj",
      "gloss": "tired",
      "content": true
    },
    "ظمأ": {
      "root": "ظ م أ",
      "pos": "noun",
      "gloss": "thirst",
      "content": true
    },
    "خليل": {
      "root": "—",
      "pos": "proper",
      "gloss": "Khalīl (a name)",
      "content": false
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "ضل": {
      "root": "ض ل ل",
      "pos": "verb",
      "gloss": "to lose the way, go astray",
      "content": true,
      "book_note": "ضَلَّ يَضِلُّ ضَلَالاً فُلَانٌ الطَّرِيْقَ: غَابَ وَضَاعَ وَلَمْ يَهْتَدِ إِلَيْهِ (to lose the way: to vanish, become lost, and fail to find one's way)"
    },
    "طريق": {
      "root": "ط ر ق",
      "pos": "noun",
      "gloss": "road, way",
      "content": true
    },
    "ما": {
      "root": "—",
      "pos": "part",
      "gloss": "not; what",
      "content": false
    },
    "وجد": {
      "root": "و ج د",
      "pos": "verb",
      "gloss": "to find",
      "content": true
    },
    "طعام": {
      "root": "ط ع م",
      "pos": "noun",
      "gloss": "food",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "not; no",
      "content": false
    },
    "ماء": {
      "root": "م و ه",
      "pos": "noun",
      "gloss": "water",
      "content": true
    },
    "انتصف": {
      "root": "ن ص ف",
      "pos": "verb",
      "gloss": "to reach the midpoint",
      "content": true
    },
    "نهار": {
      "root": "ن ه ر",
      "pos": "noun",
      "gloss": "daytime",
      "content": true
    },
    "جلس": {
      "root": "ج ل س",
      "pos": "verb",
      "gloss": "to sit",
      "content": true
    },
    "ظل": {
      "root": "ظ ل ل",
      "pos": "noun",
      "gloss": "shade",
      "content": true
    },
    "شجرة": {
      "root": "ش ج ر",
      "pos": "noun",
      "gloss": "tree",
      "content": true
    },
    "انتظر": {
      "root": "ن ظ ر",
      "pos": "verb",
      "gloss": "to wait",
      "content": true
    },
    "برز": {
      "root": "ب ر ز",
      "pos": "verb",
      "gloss": "to appear, emerge",
      "content": true
    },
    "بعد-مسافة": {
      "root": "ب ع د",
      "pos": "noun",
      "gloss": "distance, afar",
      "content": true
    },
    "نادى": {
      "root": "ن د و",
      "pos": "verb",
      "gloss": "to call out",
      "content": true
    },
    "اسم": {
      "root": "س م و",
      "pos": "noun",
      "gloss": "name",
      "content": true
    },
    "حمد": {
      "root": "ح م د",
      "pos": "verb",
      "gloss": "to praise, thank",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "استراح": {
      "root": "ر و ح",
      "pos": "verb",
      "gloss": "to rest",
      "content": true
    },
    "قليل": {
      "root": "ق ل ل",
      "pos": "adv",
      "gloss": "a little, slightly",
      "content": true
    },
    "ثم": {
      "root": "—",
      "pos": "part",
      "gloss": "then",
      "content": false
    },
    "دخل": {
      "root": "د خ ل",
      "pos": "verb",
      "gloss": "to enter",
      "content": true
    },
    "غابة": {
      "root": "غ ي ب",
      "pos": "noun",
      "gloss": "forest, grove",
      "content": true
    },
    "أثر": {
      "root": "أ ث ر",
      "pos": "noun",
      "gloss": "trace, track",
      "content": true
    },
    "بقر": {
      "root": "ب ق ر",
      "pos": "noun",
      "gloss": "cattle",
      "content": true
    },
    "وحش": {
      "root": "و ح ش",
      "pos": "noun",
      "gloss": "wild; wild animal",
      "content": true
    },
    "تفرق": {
      "root": "ف ر ق",
      "pos": "verb",
      "gloss": "to disperse, scatter",
      "content": true
    },
    "مرصاد": {
      "root": "ر ص د",
      "pos": "noun",
      "gloss": "ambush spot, hunting blind",
      "content": true,
      "book_note": "الْمِرْصَادُ (ج) الْمَرَاصِيْد: طَرِيْقُ الرَّصْدِ وَالْمُرَاقَبَةِ (a place of watching and observation)"
    },
    "بقرة": {
      "root": "ب ق ر",
      "pos": "noun",
      "gloss": "a cow",
      "content": true
    },
    "بين": {
      "root": "ب ي ن",
      "pos": "prep",
      "gloss": "between, among",
      "content": false
    },
    "سيد": {
      "root": "س و د",
      "pos": "noun",
      "gloss": "master, sir",
      "content": true
    },
    "إسماعيل": {
      "root": "—",
      "pos": "proper",
      "gloss": "Ismāʿīl (a name)",
      "content": false
    },
    "مستعد": {
      "root": "ع د د",
      "pos": "adj",
      "gloss": "ready, prepared",
      "content": true
    },
    "صوب": {
      "root": "ص و ب",
      "pos": "verb",
      "gloss": "to aim",
      "content": true,
      "book_note": "صَوَّبَ يُصَوِّبُ تَصْوِيْباً: الْبُنْدُقِيَّةَ وَالسَّهْمَ وَنَحْوَهُمَا، وَجَّهَهَا إِلَى الْهَدَفِ (to aim a rifle, arrow, or the like: to point it toward the target)"
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, towards",
      "content": false
    },
    "أطلق": {
      "root": "ط ل ق",
      "pos": "verb",
      "gloss": "to release, fire (a shot)",
      "content": true
    },
    "رصاصة": {
      "root": "ر ص ص",
      "pos": "noun",
      "gloss": "bullet",
      "content": true
    },
    "أصاب": {
      "root": "ص و ب",
      "pos": "verb",
      "gloss": "to hit (a target)",
      "content": true
    },
    "صدر": {
      "root": "ص د ر",
      "pos": "noun",
      "gloss": "chest",
      "content": true
    },
    "سقط": {
      "root": "س ق ط",
      "pos": "verb",
      "gloss": "to fall",
      "content": true
    },
    "جرح": {
      "root": "ج ر ح",
      "pos": "verb",
      "gloss": "to wound",
      "content": true
    },
    "ضرب": {
      "root": "ض ر ب",
      "pos": "verb",
      "gloss": "to strike, hit; (pass.) be rung",
      "content": true
    },
    "رجل-قدم": {
      "root": "ر ج ل",
      "pos": "noun",
      "gloss": "leg, foot",
      "content": true
    },
    "سمع": {
      "root": "س م ع",
      "pos": "verb",
      "gloss": "to hear",
      "content": true
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "صوت": {
      "root": "ص و ت",
      "pos": "noun",
      "gloss": "voice, sound",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "ذبح": {
      "root": "ذ ب ح",
      "pos": "verb",
      "gloss": "to slaughter",
      "content": true
    },
    "ياقوت": {
      "root": "—",
      "pos": "proper",
      "gloss": "Yāqūt (a name)",
      "content": false
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big, large",
      "content": true
    },
    "حاد": {
      "root": "ح د د",
      "pos": "adj",
      "gloss": "sharp",
      "content": true
    },
    "سمى": {
      "root": "س م و",
      "pos": "verb",
      "gloss": "to name; to invoke (God's name)",
      "content": true
    },
    "كبر-تكبير": {
      "root": "ك ب ر",
      "pos": "verb",
      "gloss": "to say Allahu Akbar; to magnify (God)",
      "content": true
    },
    "تكلم": {
      "root": "ك ل م",
      "pos": "verb",
      "gloss": "to speak",
      "content": true
    },
    "اطمأن": {
      "root": "ط م أ ن",
      "pos": "verb",
      "gloss": "to be at ease, reassured",
      "content": true
    },
    "إذ": {
      "root": "—",
      "pos": "part",
      "gloss": "when, at the time when",
      "content": false
    },
    "آخر": {
      "root": "أ خ ر",
      "pos": "noun",
      "gloss": "end, last part; last, final; other",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "هاشم": {
      "root": "—",
      "pos": "proper",
      "gloss": "Hāshim (a name)",
      "content": false
    },
    "سرعة": {
      "root": "س ر ع",
      "pos": "noun",
      "gloss": "speed, quickness",
      "content": true
    },
    "قدر": {
      "root": "ق د ر",
      "pos": "verb",
      "gloss": "to be able",
      "content": true
    },
    "أخطأ": {
      "root": "خ ط أ",
      "pos": "verb",
      "gloss": "to miss, err",
      "content": true
    },
    "صاد": {
      "root": "ص ي د",
      "pos": "verb",
      "gloss": "to hunt",
      "content": true
    },
    "تأسف": {
      "root": "أ س ف",
      "pos": "verb",
      "gloss": "to regret, feel sorry",
      "content": true
    },
    "جماعة": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "congregation, group",
      "content": true
    },
    "حمامة": {
      "root": "ح م م",
      "pos": "noun",
      "gloss": "a pigeon, dove",
      "content": true
    },
    "بطة": {
      "root": "ب ط ط",
      "pos": "noun",
      "gloss": "a duck",
      "content": true
    },
    "صغير": {
      "root": "ص غ ر",
      "pos": "adj",
      "gloss": "young, small",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "أيضا": {
      "root": "—",
      "pos": "adv",
      "gloss": "also, too",
      "content": true
    },
    "أعطى": {
      "root": "ع ط و",
      "pos": "verb",
      "gloss": "to give",
      "content": true
    },
    "وضع": {
      "root": "و ض ع",
      "pos": "verb",
      "gloss": "to put, place",
      "content": true
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know, recognize",
      "content": true
    },
    "كيف": {
      "root": "ك ي ف",
      "pos": "part",
      "gloss": "how",
      "content": false
    },
    "لأن": {
      "root": "—",
      "pos": "part",
      "gloss": "because",
      "content": false
    },
    "أربعة": {
      "root": "أ ر ب ع",
      "pos": "num",
      "gloss": "four",
      "content": true
    },
    "مرة": {
      "root": "م ر ر",
      "pos": "noun",
      "gloss": "time, occurrence",
      "content": true
    },
    "أو": {
      "root": "—",
      "pos": "part",
      "gloss": "or",
      "content": false
    },
    "خمسة": {
      "root": "خ م س",
      "pos": "num",
      "gloss": "five",
      "content": true
    },
    "ذهب": {
      "root": "ذ ه ب",
      "pos": "verb",
      "gloss": "to go",
      "content": true
    },
    "حمام": {
      "root": "ح م م",
      "pos": "noun",
      "gloss": "pigeons, doves (collective)",
      "content": true
    },
    "وقع": {
      "root": "و ق ع",
      "pos": "verb",
      "gloss": "to fall, land, happen",
      "content": true
    },
    "قريب": {
      "root": "ق ر ب",
      "pos": "adj",
      "gloss": "near",
      "content": true
    },
    "نحو": {
      "root": "—",
      "pos": "prep",
      "gloss": "towards, in the direction of",
      "content": false
    },
    "فرح": {
      "root": "ف ر ح",
      "pos": "verb",
      "gloss": "to be glad, happy",
      "content": true
    },
    "جدا": {
      "root": "ج د د",
      "pos": "adv",
      "gloss": "very, greatly",
      "content": true
    },
    "لما": {
      "root": "—",
      "pos": "part",
      "gloss": "when (in the past)",
      "content": false
    },
    "مرحى": {
      "root": "م ر ح",
      "pos": "part",
      "gloss": "bravo!",
      "content": true,
      "book_note": "مَرْحَىٰ: كَلِمَةُ تَعَجُّبٍ وَاسْتِحْسَانٍ (an exclamation of praise and approval)"
    },
    "شاء": {
      "root": "ش ي أ",
      "pos": "verb",
      "gloss": "to will, wish",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed; that",
      "content": false
    },
    "خالد": {
      "root": "—",
      "pos": "proper",
      "gloss": "Khālid (a name)",
      "content": false
    },
    "رضي": {
      "root": "ر ض ي",
      "pos": "verb",
      "gloss": "to be pleased",
      "content": true
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "one, someone, anyone",
      "content": true
    },
    "قرية": {
      "root": "ق ر ي",
      "pos": "noun",
      "gloss": "village",
      "content": true
    },
    "صيد": {
      "root": "ص ي د",
      "pos": "noun",
      "gloss": "hunting; game, quarry",
      "content": true
    },
    "قطع": {
      "root": "ق ط ع",
      "pos": "verb",
      "gloss": "to cut",
      "content": true
    },
    "قطعة": {
      "root": "ق ط ع",
      "pos": "noun",
      "gloss": "piece, part",
      "content": true
    },
    "أهدى": {
      "root": "ه د ي",
      "pos": "verb",
      "gloss": "to give as a gift",
      "content": true
    },
    "لحم": {
      "root": "ل ح م",
      "pos": "noun",
      "gloss": "meat",
      "content": true
    },
    "جميع": {
      "root": "ج م ع",
      "pos": "noun",
      "gloss": "all, entirety",
      "content": true
    },
    "أقارب": {
      "root": "ق ر ب",
      "pos": "noun",
      "gloss": "relatives",
      "content": true
    },
    "أهل": {
      "root": "أ ه ل",
      "pos": "noun",
      "gloss": "people, family, folk",
      "content": true
    },
    "أكل": {
      "root": "أ ك ل",
      "pos": "verb",
      "gloss": "to eat",
      "content": true
    },
    "شبع": {
      "root": "ش ب ع",
      "pos": "verb",
      "gloss": "to be full, satiated",
      "content": true
    },
    "شكر": {
      "root": "ش ك ر",
      "pos": "verb",
      "gloss": "to thank",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "The narrator went out on a holiday with hunters early in the morning, many of his friends along, carrying lunch for later, meaning to return by evening.",
      "sentences": [
        {
          "id": "qr1-14-001",
          "page": 69,
          "ar": "خَرَجْتُ يَوْمَ عُطْلَةٍ مَعَ صَيَّادِيْنَ عِنْدَهُمْ بَنَادِقُ وَسَكَاكِيْنُ.",
          "en": "I went out on a holiday with hunters who had rifles and knives,",
          "tokens": [
            {
              "surface": "خَرَجْتُ",
              "lemma": "خرج",
              "features": "perf.1s",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "يَوْمَ",
              "lemma": "يوم",
              "features": "acc",
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
              "gloss": "holiday, day off"
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
              "surface": "صَيَّادِيْنَ",
              "lemma": "صياد",
              "features": "pl.indef.gen",
              "root": "ص ي د",
              "pos": "noun",
              "gloss": "hunter"
            },
            {
              "surface": "عِنْدَهُمْ",
              "lemma": "عند",
              "features": "prep+3mp",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "with, in the possession of"
            },
            {
              "surface": "بَنَادِقُ",
              "lemma": "بندقية",
              "features": "pl.indef.nom",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            },
            {
              "surface": "وَسَكَاكِيْنُ",
              "lemma": "سكين",
              "features": "conj+pl.indef.nom",
              "root": "س ك ن",
              "pos": "noun",
              "gloss": "knife"
            }
          ]
        },
        {
          "id": "qr1-14-002",
          "page": 69,
          "ar": "خَرَجْنَا مُبَكِّرِيْنَ فِي الصَّبَاحِ لَمْ تَطْلُعِ الشَّمْسُ.",
          "en": "we went out early in the morning before the sun had risen,",
          "tokens": [
            {
              "surface": "خَرَجْنَا",
              "lemma": "خرج",
              "features": "perf.1p",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "مُبَكِّرِيْنَ",
              "lemma": "بكر",
              "features": "pl.indef.acc",
              "root": "ب ك ر",
              "pos": "adj",
              "gloss": "early, early risers"
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
              "surface": "لَمْ",
              "lemma": "لم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "تَطْلُعِ",
              "lemma": "طلع",
              "features": "impf.3fs",
              "root": "ط ل ع",
              "pos": "verb",
              "gloss": "to rise, come up (of the sun)"
            },
            {
              "surface": "الشَّمْسُ",
              "lemma": "شمس",
              "features": "def.nom",
              "root": "ش م س",
              "pos": "noun",
              "gloss": "sun"
            }
          ]
        },
        {
          "id": "qr1-14-003",
          "page": 69,
          "ar": "وَكَانَ مَعِيْ كَثِيْرٌ مِنْ أَتْرَابِيْ وَأَصْدِقَائِيْ.",
          "en": "and I had many of my peers and friends with me,",
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
              "surface": "مَعِيْ",
              "lemma": "مع",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "with"
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
              "surface": "مِنْ",
              "lemma": "من",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "from"
            },
            {
              "surface": "أَتْرَابِيْ",
              "lemma": "أتراب",
              "features": "gen+1s",
              "root": "ت ر ب",
              "pos": "noun",
              "gloss": "peers, those of the same age"
            },
            {
              "surface": "وَأَصْدِقَائِيْ",
              "lemma": "صديق",
              "features": "conj+pl.gen+1s",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            }
          ]
        },
        {
          "id": "qr1-14-004",
          "page": 69,
          "ar": "وَأَخَذْنَا غَدَاءَنَا مَعَنَا لِنَتَغَدَّىٰ إِذَا غَلَبَنَا الْجُوْعُ.",
          "en": "and we took our lunch with us to eat when hunger overcame us,",
          "tokens": [
            {
              "surface": "وَأَخَذْنَا",
              "lemma": "أخذ",
              "features": "conj+perf.1p",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "غَدَاءَنَا",
              "lemma": "غداء",
              "features": "acc+1p",
              "root": "غ د و",
              "pos": "noun",
              "gloss": "lunch"
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
              "surface": "لِنَتَغَدَّىٰ",
              "lemma": "تغدى",
              "features": "prep+impf.1p",
              "root": "غ د و",
              "pos": "verb",
              "gloss": "to have lunch"
            },
            {
              "surface": "إِذَا",
              "lemma": "إذا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "if, when"
            },
            {
              "surface": "غَلَبَنَا",
              "lemma": "غلب",
              "features": "perf.3ms+1p",
              "root": "غ ل ب",
              "pos": "verb",
              "gloss": "to overcome, defeat"
            },
            {
              "surface": "الْجُوْعُ",
              "lemma": "جوع",
              "features": "def.nom",
              "root": "ج و ع",
              "pos": "noun",
              "gloss": "hunger"
            }
          ]
        },
        {
          "id": "qr1-14-005",
          "page": 69,
          "ar": "وَكُنَّا نُرِيْدُ أَنْ نَرْجِعَ فِي الْمَسَاءِ.",
          "en": "and we intended to return in the evening.",
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
              "gloss": "that"
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
        }
      ],
      "checks": [
        {
          "q": "مَتَىٰ خَرَجَ الرَّاوِيْ وَأَصْحَابُهُ لِلصَّيْدِ؟",
          "options": [
            "مُبَكِّرِيْنَ فِي الصَّبَاحِ قَبْلَ طُلُوْعِ الشَّمْسِ",
            "بَعْدَ صَلَاةِ الظُّهْرِ",
            "فِيْ مُنْتَصَفِ اللَّيْلِ"
          ],
          "answer": 0,
          "qEn": "When did the narrator and his companions set out to hunt?",
          "optionsEn": [
            "Early in the morning before sunrise",
            "After the noon prayer",
            "At midnight"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "They kept walking in the heat until they were exhausted, hungry, and thirsty -- and Khalil, who had the lunch, had lost his way, so they found neither food nor water.",
      "sentences": [
        {
          "id": "qr1-14-006",
          "page": 69,
          "ar": "وَلَمْ نَزَلْ نَمْشِيْ فِي الْحَرِّ وَالشَّمْسِ حَتَّىٰ تَعِبْنَا.",
          "en": "We kept walking in the heat and sun until we grew tired,",
          "tokens": [
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (with jussive, past negation)"
            },
            {
              "surface": "نَزَلْ",
              "lemma": "نزل",
              "features": "impf.1p",
              "root": "ن ز ل",
              "pos": "verb",
              "gloss": "to keep, continue (doing)"
            },
            {
              "surface": "نَمْشِيْ",
              "lemma": "مشى",
              "features": "impf.1p",
              "root": "م ش ي",
              "pos": "verb",
              "gloss": "to walk"
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
              "surface": "الْحَرِّ",
              "lemma": "حر-حرارة",
              "features": "def.gen",
              "root": "ح ر ر",
              "pos": "noun",
              "gloss": "heat"
            },
            {
              "surface": "وَالشَّمْسِ",
              "lemma": "شمس",
              "features": "conj+def.gen",
              "root": "ش م س",
              "pos": "noun",
              "gloss": "sun"
            },
            {
              "surface": "حَتَّىٰ",
              "lemma": "حتى",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "until; so that"
            },
            {
              "surface": "تَعِبْنَا",
              "lemma": "تعب",
              "features": "perf.1p",
              "root": "ت ع ب",
              "pos": "verb",
              "gloss": "to grow tired"
            }
          ]
        },
        {
          "id": "qr1-14-007",
          "page": 69,
          "ar": "وَغَلَبَنَا الْجُوْعُ وَالظَّمَأُ.",
          "en": "and hunger and thirst overcame us,",
          "tokens": [
            {
              "surface": "وَغَلَبَنَا",
              "lemma": "غلب",
              "features": "conj+perf.3ms+1p",
              "root": "غ ل ب",
              "pos": "verb",
              "gloss": "to overcome, defeat"
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
              "surface": "وَالظَّمَأُ",
              "lemma": "ظمأ",
              "features": "conj+def.nom",
              "root": "ظ م أ",
              "pos": "noun",
              "gloss": "thirst"
            }
          ]
        },
        {
          "id": "qr1-14-008",
          "page": 69,
          "ar": "وَكَانَ الْغَدَاءُ مَعَ خَلِيْلٍ وَقَدْ ضَلَّ الطَّرِيْقَ.",
          "en": "the lunch was with Khalil, and he had lost the way,",
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
              "surface": "الْغَدَاءُ",
              "lemma": "غداء",
              "features": "def.nom",
              "root": "غ د و",
              "pos": "noun",
              "gloss": "lunch"
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
              "surface": "خَلِيْلٍ",
              "lemma": "خليل",
              "features": "indef.gen",
              "root": "",
              "pos": "proper",
              "gloss": "Khalīl (a name)"
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
              "surface": "ضَلَّ",
              "lemma": "ضل",
              "features": "perf.3ms",
              "root": "ض ل ل",
              "pos": "verb",
              "gloss": "to lose the way, go astray"
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
          "id": "qr1-14-009",
          "page": 69,
          "ar": "وَمَا وَجَدْنَا طَعَامًا وَلَا مَاءً.",
          "en": "and we found neither food nor water.",
          "tokens": [
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "وَجَدْنَا",
              "lemma": "وجد",
              "features": "perf.1p",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "to find"
            },
            {
              "surface": "طَعَامًا",
              "lemma": "طعام",
              "features": "indef.acc",
              "root": "ط ع م",
              "pos": "noun",
              "gloss": "food"
            },
            {
              "surface": "وَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "مَاءً",
              "lemma": "ماء",
              "features": "indef.acc",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا مَا وَجَدَ الرَّاوِيْ وَأَصْحَابُهُ طَعَامًا وَلَا مَاءً؟",
          "options": [
            "لِأَنَّ خَلِيْلًا الَّذِيْ مَعَهُ الْغَدَاءُ ضَلَّ الطَّرِيْقَ",
            "لِأَنَّهُمْ نَسُوا الْغَدَاءَ فِي الْبَيْتِ",
            "لِأَنَّهُمْ أَكَلُوْهُ كُلَّهُ"
          ],
          "answer": 0,
          "qEn": "Why did they find neither food nor water?",
          "optionsEn": [
            "Because Khalil, who had the lunch, had lost the way",
            "Because they forgot the lunch at home",
            "Because they had already eaten it all"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "At midday they sat in the shade of a tree, waiting for Khalil; when he appeared in the distance they called out and praised God, then ate and rested before setting out again.",
      "sentences": [
        {
          "id": "qr1-14-010",
          "page": 69,
          "ar": "وَانْتَصَفَ النَّهَارُ وَجَلَسْنَا فِيْ ظِلِّ شَجَرَةٍ نَنْتَظِرُ خَلِيْلًا.",
          "en": "Midday came and we sat in the shade of a tree, waiting for Khalil,",
          "tokens": [
            {
              "surface": "وَانْتَصَفَ",
              "lemma": "انتصف",
              "features": "conj+perf.3ms",
              "root": "ن ص ف",
              "pos": "verb",
              "gloss": "to reach the midpoint"
            },
            {
              "surface": "النَّهَارُ",
              "lemma": "نهار",
              "features": "def.nom",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "daytime"
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
              "surface": "فِيْ",
              "lemma": "في",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "in"
            },
            {
              "surface": "ظِلِّ",
              "lemma": "ظل",
              "features": "gen.constr",
              "root": "ظ ل ل",
              "pos": "noun",
              "gloss": "shade"
            },
            {
              "surface": "شَجَرَةٍ",
              "lemma": "شجرة",
              "features": "indef.gen",
              "root": "ش ج ر",
              "pos": "noun",
              "gloss": "tree"
            },
            {
              "surface": "نَنْتَظِرُ",
              "lemma": "انتظر",
              "features": "impf.1p",
              "root": "ن ظ ر",
              "pos": "verb",
              "gloss": "to wait"
            },
            {
              "surface": "خَلِيْلًا",
              "lemma": "خليل",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Khalīl (a name)"
            }
          ]
        },
        {
          "id": "qr1-14-011",
          "page": 69,
          "ar": "وَبَرَزَ خَلِيْلٌ مِنْ بُعْدٍ فَنَادَيْنَاهُ بِاسْمِهِ وَحَمِدْنَا اللهَ.",
          "en": "and Khalil appeared in the distance, so we called out to him by name and praised God,",
          "tokens": [
            {
              "surface": "وَبَرَزَ",
              "lemma": "برز",
              "features": "conj+perf.3ms",
              "root": "ب ر ز",
              "pos": "verb",
              "gloss": "to appear, emerge"
            },
            {
              "surface": "خَلِيْلٌ",
              "lemma": "خليل",
              "features": "indef.nom",
              "root": "",
              "pos": "proper",
              "gloss": "Khalīl (a name)"
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
              "surface": "بُعْدٍ",
              "lemma": "بعد-مسافة",
              "features": "indef.gen",
              "root": "ب ع د",
              "pos": "noun",
              "gloss": "distance, afar"
            },
            {
              "surface": "فَنَادَيْنَاهُ",
              "lemma": "نادى",
              "features": "conj+perf.1p+3ms",
              "root": "ن د و",
              "pos": "verb",
              "gloss": "to call out"
            },
            {
              "surface": "بِاسْمِهِ",
              "lemma": "اسم",
              "features": "prep+gen+3ms",
              "root": "س م و",
              "pos": "noun",
              "gloss": "name"
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
          "id": "qr1-14-012",
          "page": 69,
          "ar": "وَتَغَدَّيْنَا وَاسْتَرَحْنَا قَلِيْلًا ثُمَّ خَرَجْنَا.",
          "en": "and we ate lunch and rested a little, then set out again.",
          "tokens": [
            {
              "surface": "وَتَغَدَّيْنَا",
              "lemma": "تغدى",
              "features": "conj+perf.1p",
              "root": "غ د و",
              "pos": "verb",
              "gloss": "to have lunch"
            },
            {
              "surface": "وَاسْتَرَحْنَا",
              "lemma": "استراح",
              "features": "conj+perf.1p",
              "root": "ر و ح",
              "pos": "verb",
              "gloss": "to rest"
            },
            {
              "surface": "قَلِيْلًا",
              "lemma": "قليل",
              "features": "acc",
              "root": "ق ل ل",
              "pos": "adv",
              "gloss": "a little, slightly"
            },
            {
              "surface": "ثُمَّ",
              "lemma": "ثم",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "then"
            },
            {
              "surface": "خَرَجْنَا",
              "lemma": "خرج",
              "features": "perf.1p",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلُوا لَمَّا بَرَزَ خَلِيْلٌ مِنْ بُعْدٍ؟",
          "options": [
            "نَادَوْهُ بِاسْمِهِ وَحَمِدُوا اللهَ",
            "غَضِبُوا مِنْهُ",
            "تَرَكُوهُ وَذَهَبُوا"
          ],
          "answer": 0,
          "qEn": "What did they do when Khalil appeared in the distance?",
          "optionsEn": [
            "They called out to him by name and praised God",
            "They got angry with him",
            "They left him and went on"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "They entered the forest, found the tracks of wild cattle, and sat in ambush; when a cow appeared, Mr. Isma'il was ready and shot it, wounding it.",
      "sentences": [
        {
          "id": "qr1-14-013",
          "page": 69,
          "ar": "وَدَخَلْنَا فِي الْغَابَةِ وَوَجَدْنَا آثَارَ بَقَرِ الْوَحْشِ فَتَفَرَّقْنَا وَجَلَسْنَا بِالْمِرْصَادِ.",
          "en": "We entered the forest and found tracks of wild cattle, so we split up and sat in ambush,",
          "tokens": [
            {
              "surface": "وَدَخَلْنَا",
              "lemma": "دخل",
              "features": "conj+perf.1p",
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
              "surface": "الْغَابَةِ",
              "lemma": "غابة",
              "features": "def.gen",
              "root": "غ ي ب",
              "pos": "noun",
              "gloss": "forest, grove"
            },
            {
              "surface": "وَوَجَدْنَا",
              "lemma": "وجد",
              "features": "conj+perf.1p",
              "root": "و ج د",
              "pos": "verb",
              "gloss": "to find"
            },
            {
              "surface": "آثَارَ",
              "lemma": "أثر",
              "features": "pl.acc.constr",
              "root": "أ ث ر",
              "pos": "noun",
              "gloss": "trace, track"
            },
            {
              "surface": "بَقَرِ",
              "lemma": "بقر",
              "features": "gen.constr",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "cattle"
            },
            {
              "surface": "الْوَحْشِ",
              "lemma": "وحش",
              "features": "def.gen",
              "root": "و ح ش",
              "pos": "noun",
              "gloss": "wild; wild animal"
            },
            {
              "surface": "فَتَفَرَّقْنَا",
              "lemma": "تفرق",
              "features": "conj+perf.1p",
              "root": "ف ر ق",
              "pos": "verb",
              "gloss": "to disperse, scatter"
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
              "surface": "بِالْمِرْصَادِ",
              "lemma": "مرصاد",
              "features": "prep+def.gen",
              "root": "ر ص د",
              "pos": "noun",
              "gloss": "ambush spot, hunting blind"
            }
          ]
        },
        {
          "id": "qr1-14-014",
          "page": 70,
          "ar": "وَخَرَجَتْ بَقَرَةٌ مِنْ بَيْنِ الْأَشْجَارِ.",
          "en": "and a cow came out from among the trees,",
          "tokens": [
            {
              "surface": "وَخَرَجَتْ",
              "lemma": "خرج",
              "features": "conj+perf.3fs",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "بَقَرَةٌ",
              "lemma": "بقرة",
              "features": "indef.nom",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "a cow"
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
              "surface": "بَيْنِ",
              "lemma": "بين",
              "features": "gen.constr",
              "root": "ب ي ن",
              "pos": "prep",
              "gloss": "between, among"
            },
            {
              "surface": "الْأَشْجَارِ",
              "lemma": "شجرة",
              "features": "def.pl.gen",
              "root": "ش ج ر",
              "pos": "noun",
              "gloss": "tree"
            }
          ]
        },
        {
          "id": "qr1-14-015",
          "page": 70,
          "ar": "وَكَانَ السَّيِّدُ إِسْمَاعِيْلُ مُسْتَعِدًّا فَصَوَّبَ إِلَيْهَا بُنْدُقِيَّتَهُ.",
          "en": "Mr. Isma'il was ready, and aimed his rifle at it,",
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
              "surface": "السَّيِّدُ",
              "lemma": "سيد",
              "features": "def.nom",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "إِسْمَاعِيْلُ",
              "lemma": "إسماعيل",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Ismāʿīl (a name)"
            },
            {
              "surface": "مُسْتَعِدًّا",
              "lemma": "مستعد",
              "features": "indef.acc",
              "root": "ع د د",
              "pos": "adj",
              "gloss": "ready, prepared"
            },
            {
              "surface": "فَصَوَّبَ",
              "lemma": "صوب",
              "features": "conj+perf.3ms",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to aim"
            },
            {
              "surface": "إِلَيْهَا",
              "lemma": "إلى",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            },
            {
              "surface": "بُنْدُقِيَّتَهُ",
              "lemma": "بندقية",
              "features": "acc+3ms",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            }
          ]
        },
        {
          "id": "qr1-14-016",
          "page": 70,
          "ar": "وَأَطْلَقَ الرَّصَاصَةَ وَأَصَابَ الْبَقَرَةَ فِيْ صَدْرِهَا.",
          "en": "and fired the bullet, and hit the cow in its chest,",
          "tokens": [
            {
              "surface": "وَأَطْلَقَ",
              "lemma": "أطلق",
              "features": "conj+perf.3ms",
              "root": "ط ل ق",
              "pos": "verb",
              "gloss": "to release, fire (a shot)"
            },
            {
              "surface": "الرَّصَاصَةَ",
              "lemma": "رصاصة",
              "features": "def.acc",
              "root": "ر ص ص",
              "pos": "noun",
              "gloss": "bullet"
            },
            {
              "surface": "وَأَصَابَ",
              "lemma": "أصاب",
              "features": "conj+perf.3ms",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to hit (a target)"
            },
            {
              "surface": "الْبَقَرَةَ",
              "lemma": "بقرة",
              "features": "def.acc",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "a cow"
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
              "surface": "صَدْرِهَا",
              "lemma": "صدر",
              "features": "gen+3fs",
              "root": "ص د ر",
              "pos": "noun",
              "gloss": "chest"
            }
          ]
        },
        {
          "id": "qr1-14-017",
          "page": 70,
          "ar": "فَسَقَطَتْ جَرِيْحًا تَضْرِبُ بِرِجْلَيْهَا.",
          "en": "so it fell, wounded, thrashing its legs.",
          "tokens": [
            {
              "surface": "فَسَقَطَتْ",
              "lemma": "سقط",
              "features": "conj+perf.3fs",
              "root": "س ق ط",
              "pos": "verb",
              "gloss": "to fall"
            },
            {
              "surface": "جَرِيْحًا",
              "lemma": "جرح",
              "features": "indef.acc",
              "root": "ج ر ح",
              "pos": "adj",
              "gloss": "wounded"
            },
            {
              "surface": "تَضْرِبُ",
              "lemma": "ضرب",
              "features": "impf.3fs",
              "root": "ض ر ب",
              "pos": "verb",
              "gloss": "to strike, kick"
            },
            {
              "surface": "بِرِجْلَيْهَا",
              "lemma": "رجل-قدم",
              "features": "prep+du.gen+3fs",
              "root": "ر ج ل",
              "pos": "noun",
              "gloss": "leg, foot"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا وَجَدُوا لَمَّا دَخَلُوا الْغَابَةَ؟",
          "options": [
            "آثَارَ بَقَرِ الْوَحْشِ",
            "بُيُوْتًا قَدِيْمَةً",
            "نَهْرًا كَبِيْرًا"
          ],
          "answer": 0,
          "qEn": "What did they find when they entered the forest?",
          "optionsEn": [
            "Tracks of wild cattle",
            "Old houses",
            "A large river"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "The others heard the shot and came; Yaqut slaughtered the cow properly. As they talked at ease, another cow appeared, but Hashim's hurried shot missed it, and both he and the group were sorry.",
      "sentences": [
        {
          "id": "qr1-14-018",
          "page": 70,
          "ar": "وَسَمِعَ الْإِخْوَانُ صَوْتَ الْبُنْدُقِيَّةِ فَجَاؤُوْا.",
          "en": "The others heard the sound of the rifle and came,",
          "tokens": [
            {
              "surface": "وَسَمِعَ",
              "lemma": "سمع",
              "features": "conj+perf.3ms",
              "root": "س م ع",
              "pos": "verb",
              "gloss": "to hear"
            },
            {
              "surface": "الْإِخْوَانُ",
              "lemma": "أخ",
              "features": "def.pl.nom",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brothers, companions"
            },
            {
              "surface": "صَوْتَ",
              "lemma": "صوت",
              "features": "acc.constr",
              "root": "ص و ت",
              "pos": "noun",
              "gloss": "voice, sound"
            },
            {
              "surface": "الْبُنْدُقِيَّةِ",
              "lemma": "بندقية",
              "features": "def.gen",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            },
            {
              "surface": "فَجَاؤُوْا",
              "lemma": "جاء",
              "features": "conj+perf.3mp",
              "root": "ج ي أ",
              "pos": "verb",
              "gloss": "to come"
            }
          ]
        },
        {
          "id": "qr1-14-019",
          "page": 70,
          "ar": "وَذَبَحَهَا يَاقُوْتُ بِسِكِّيْنٍ كَبِيْرٍ حَادٍّ وَسَمَّىٰ اللهَ وَكَبَّرَ.",
          "en": "and Yaqut slaughtered it with a large sharp knife, invoking God's name and saying Allahu Akbar,",
          "tokens": [
            {
              "surface": "وَذَبَحَهَا",
              "lemma": "ذبح",
              "features": "conj+perf.3ms+3fs",
              "root": "ذ ب ح",
              "pos": "verb",
              "gloss": "to slaughter"
            },
            {
              "surface": "يَاقُوْتُ",
              "lemma": "ياقوت",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Yāqūt (a name)"
            },
            {
              "surface": "بِسِكِّيْنٍ",
              "lemma": "سكين",
              "features": "prep+indef.gen",
              "root": "س ك ن",
              "pos": "noun",
              "gloss": "knife"
            },
            {
              "surface": "كَبِيْرٍ",
              "lemma": "كبير",
              "features": "indef.gen",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            },
            {
              "surface": "حَادٍّ",
              "lemma": "حاد",
              "features": "indef.gen",
              "root": "ح د د",
              "pos": "adj",
              "gloss": "sharp"
            },
            {
              "surface": "وَسَمَّىٰ",
              "lemma": "سمى",
              "features": "conj+perf.3ms",
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
              "surface": "وَكَبَّرَ",
              "lemma": "كبر-تكبير",
              "features": "conj+perf.3ms",
              "root": "ك ب ر",
              "pos": "verb",
              "gloss": "to say Allahu Akbar; to magnify (God)"
            }
          ]
        },
        {
          "id": "qr1-14-020",
          "page": 70,
          "ar": "وَكُنَّا نَتَكَلَّمُ وَكُنَّا مُطْمَئِنِّيْنَ إِذْ خَرَجَتْ بَقَرَةٌ أُخْرَىٰ.",
          "en": "and we were talking, at ease, when another cow came out,",
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
              "surface": "نَتَكَلَّمُ",
              "lemma": "تكلم",
              "features": "impf.1p",
              "root": "ك ل م",
              "pos": "verb",
              "gloss": "to speak"
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
              "surface": "مُطْمَئِنِّيْنَ",
              "lemma": "اطمأن",
              "features": "pl.indef.acc",
              "root": "ط م أ ن",
              "pos": "adj",
              "gloss": "at ease, reassured"
            },
            {
              "surface": "إِذْ",
              "lemma": "إذ",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "when, at the time when"
            },
            {
              "surface": "خَرَجَتْ",
              "lemma": "خرج",
              "features": "perf.3fs",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
            },
            {
              "surface": "بَقَرَةٌ",
              "lemma": "بقرة",
              "features": "indef.nom",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "a cow"
            },
            {
              "surface": "أُخْرَىٰ",
              "lemma": "آخر",
              "features": "indef.nom",
              "root": "أ خ ر",
              "pos": "noun",
              "gloss": "other"
            }
          ]
        },
        {
          "id": "qr1-14-021",
          "page": 70,
          "ar": "فَأَطْلَقَ عَلَيْهَا هَاشِمٌ بُنْدُقِيَّتَهُ بِسُرْعَةٍ.",
          "en": "so Hashim quickly fired his rifle at it,",
          "tokens": [
            {
              "surface": "فَأَطْلَقَ",
              "lemma": "أطلق",
              "features": "conj+perf.3ms",
              "root": "ط ل ق",
              "pos": "verb",
              "gloss": "to release, fire (a shot)"
            },
            {
              "surface": "عَلَيْهَا",
              "lemma": "على",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "هَاشِمٌ",
              "lemma": "هاشم",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Hāshim (a name)"
            },
            {
              "surface": "بُنْدُقِيَّتَهُ",
              "lemma": "بندقية",
              "features": "acc+3ms",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            },
            {
              "surface": "بِسُرْعَةٍ",
              "lemma": "سرعة",
              "features": "prep+indef.gen",
              "root": "س ر ع",
              "pos": "noun",
              "gloss": "speed, quickness"
            }
          ]
        },
        {
          "id": "qr1-14-022",
          "page": 70,
          "ar": "وَمَا قَدَرَ أَنْ يُصَوِّبَ الْبُنْدُقِيَّةَ فَأَخْطَأَتِ الرَّصَاصَةُ وَمَا صَادَتِ الْبَقَرَةَ.",
          "en": "but he could not aim the rifle properly, so the bullet missed and did not hit the cow,",
          "tokens": [
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "قَدَرَ",
              "lemma": "قدر",
              "features": "perf.3ms",
              "root": "ق د ر",
              "pos": "verb",
              "gloss": "to be able"
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
              "surface": "يُصَوِّبَ",
              "lemma": "صوب",
              "features": "impf.3ms",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to aim"
            },
            {
              "surface": "الْبُنْدُقِيَّةَ",
              "lemma": "بندقية",
              "features": "def.acc",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            },
            {
              "surface": "فَأَخْطَأَتِ",
              "lemma": "أخطأ",
              "features": "conj+perf.3fs",
              "root": "خ ط أ",
              "pos": "verb",
              "gloss": "to miss, err"
            },
            {
              "surface": "الرَّصَاصَةُ",
              "lemma": "رصاصة",
              "features": "def.nom",
              "root": "ر ص ص",
              "pos": "noun",
              "gloss": "bullet"
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
              "surface": "صَادَتِ",
              "lemma": "صاد",
              "features": "perf.3fs",
              "root": "ص ي د",
              "pos": "verb",
              "gloss": "to hunt"
            },
            {
              "surface": "الْبَقَرَةَ",
              "lemma": "بقرة",
              "features": "def.acc",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "a cow"
            }
          ]
        },
        {
          "id": "qr1-14-023",
          "page": 70,
          "ar": "وَتَأَسَّفَ هَاشِمٌ وَتَأَسَّفَتِ الْجَمَاعَةُ.",
          "en": "and Hashim was sorry, and the group was sorry.",
          "tokens": [
            {
              "surface": "وَتَأَسَّفَ",
              "lemma": "تأسف",
              "features": "conj+perf.3ms",
              "root": "أ س ف",
              "pos": "verb",
              "gloss": "to regret, feel sorry"
            },
            {
              "surface": "هَاشِمٌ",
              "lemma": "هاشم",
              "features": "nom",
              "root": "",
              "pos": "proper",
              "gloss": "Hāshim (a name)"
            },
            {
              "surface": "وَتَأَسَّفَتِ",
              "lemma": "تأسف",
              "features": "conj+perf.3fs",
              "root": "أ س ف",
              "pos": "verb",
              "gloss": "to regret, feel sorry"
            },
            {
              "surface": "الْجَمَاعَةُ",
              "lemma": "جماعة",
              "features": "def.nom",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "congregation, group"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا أَخْطَأَتْ رَصَاصَةُ هَاشِمٍ الْبَقَرَةَ الثَّانِيَةَ؟",
          "options": [
            "لِأَنَّهُ مَا قَدَرَ أَنْ يُصَوِّبَ الْبُنْدُقِيَّةَ بِسُرْعَةٍ",
            "لِأَنَّ بُنْدُقِيَّتَهُ كَانَتْ مُعَطَّلَةً",
            "لِأَنَّ الْبَقَرَةَ كَانَتْ بَعِيْدَةً جِدًّا"
          ],
          "answer": 0,
          "qEn": "Why did Hashim's shot miss the second cow?",
          "optionsEn": [
            "Because he could not aim the rifle properly in his haste",
            "Because his rifle was broken",
            "Because the cow was too far away"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "They hunted two pigeons with one bullet and two ducks with two bullets, and the narrator slaughtered the ducks himself with his small sharp knife.",
      "sentences": [
        {
          "id": "qr1-14-024",
          "page": 70,
          "ar": "وَصِدْنَا حَمَامَتَيْنِ بِرَصَاصَةٍ وَبَطَّتَيْنِ بِرَصَاصَتَيْنِ.",
          "en": "We hunted two pigeons with one bullet and two ducks with two bullets,",
          "tokens": [
            {
              "surface": "وَصِدْنَا",
              "lemma": "صاد",
              "features": "conj+perf.1p",
              "root": "ص ي د",
              "pos": "verb",
              "gloss": "to hunt"
            },
            {
              "surface": "حَمَامَتَيْنِ",
              "lemma": "حمامة",
              "features": "du.indef.acc",
              "root": "ح م م",
              "pos": "noun",
              "gloss": "a pigeon, dove"
            },
            {
              "surface": "بِرَصَاصَةٍ",
              "lemma": "رصاصة",
              "features": "prep+indef.gen",
              "root": "ر ص ص",
              "pos": "noun",
              "gloss": "bullet"
            },
            {
              "surface": "وَبَطَّتَيْنِ",
              "lemma": "بطة",
              "features": "conj+du.indef.acc",
              "root": "ب ط ط",
              "pos": "noun",
              "gloss": "a duck"
            },
            {
              "surface": "بِرَصَاصَتَيْنِ",
              "lemma": "رصاصة",
              "features": "prep+du.indef.gen",
              "root": "ر ص ص",
              "pos": "noun",
              "gloss": "bullet"
            }
          ]
        },
        {
          "id": "qr1-14-025",
          "page": 70,
          "ar": "وَكَانَ عِنْدِيْ سِكِّيْنٌ صَغِيْرٌ حَادٌّ فَذَبَحْتُ الْبَطَّتَيْنِ وَسَمَّيْتُ اللهَ وَكَبَّرْتُ.",
          "en": "and I had a small sharp knife, so I slaughtered the two ducks, invoking God's name and saying Allahu Akbar.",
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
              "surface": "عِنْدِيْ",
              "lemma": "عند",
              "features": "prep+1s",
              "root": "ع ن د",
              "pos": "prep",
              "gloss": "at, by, with, in one's possession"
            },
            {
              "surface": "سِكِّيْنٌ",
              "lemma": "سكين",
              "features": "indef.nom",
              "root": "س ك ن",
              "pos": "noun",
              "gloss": "knife"
            },
            {
              "surface": "صَغِيْرٌ",
              "lemma": "صغير",
              "features": "indef.nom",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            },
            {
              "surface": "حَادٌّ",
              "lemma": "حاد",
              "features": "indef.nom",
              "root": "ح د د",
              "pos": "adj",
              "gloss": "sharp"
            },
            {
              "surface": "فَذَبَحْتُ",
              "lemma": "ذبح",
              "features": "conj+perf.1s",
              "root": "ذ ب ح",
              "pos": "verb",
              "gloss": "to slaughter"
            },
            {
              "surface": "الْبَطَّتَيْنِ",
              "lemma": "بطة",
              "features": "def.du.acc",
              "root": "ب ط ط",
              "pos": "noun",
              "gloss": "a duck"
            },
            {
              "surface": "وَسَمَّيْتُ",
              "lemma": "سمى",
              "features": "conj+perf.1s",
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
              "surface": "وَكَبَّرْتُ",
              "lemma": "كبر-تكبير",
              "features": "conj+perf.1s",
              "root": "ك ب ر",
              "pos": "verb",
              "gloss": "to say Allahu Akbar; to magnify (God)"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَيْفَ صَادُوا الْحَمَامَتَيْنِ وَالْبَطَّتَيْنِ؟",
          "options": [
            "حَمَامَتَيْنِ بِرَصَاصَةٍ وَبَطَّتَيْنِ بِرَصَاصَتَيْنِ",
            "أَرْبَعَ رَصَاصَاتٍ لِكُلِّ طَائِرٍ",
            "بِأَيْدِيْهِمْ بِلَا بُنْدُقِيَّةٍ"
          ],
          "answer": 0,
          "qEn": "How did they hunt the two pigeons and two ducks?",
          "optionsEn": [
            "Two pigeons with one bullet, two ducks with two bullets",
            "Four bullets for each bird",
            "By hand, without a rifle"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "The narrator asked Mr. Isma'il to let him hunt too; given the loaded rifle, he already knew how to aim and fire it, having practiced four or five times before.",
      "sentences": [
        {
          "id": "qr1-14-026",
          "page": 70,
          "ar": "وَقُلْتُ لِلسَّيِّدِ إِسْمَاعِيْلَ: أَنَا أُرِيْدُ أَنْ أَصِيْدَ أَيْضًا.",
          "en": "I said to Mr. Isma'il: I want to hunt too,",
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
              "surface": "لِلسَّيِّدِ",
              "lemma": "سيد",
              "features": "prep+def.gen",
              "root": "س و د",
              "pos": "noun",
              "gloss": "master, sir"
            },
            {
              "surface": "إِسْمَاعِيْلَ",
              "lemma": "إسماعيل",
              "features": "gen",
              "root": "",
              "pos": "proper",
              "gloss": "Ismāʿīl (a name)"
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
              "gloss": "that"
            },
            {
              "surface": "أَصِيْدَ",
              "lemma": "صاد",
              "features": "impf.1s",
              "root": "ص ي د",
              "pos": "verb",
              "gloss": "to hunt"
            },
            {
              "surface": "أَيْضًا",
              "lemma": "أيضا",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "also, too"
            }
          ]
        },
        {
          "id": "qr1-14-027",
          "page": 70,
          "ar": "فَأَعْطَانِيْ بُنْدُقِيَّتَهُ وَوَضَعَ فِيْهَا رَصَاصَةً.",
          "en": "so he gave me his rifle and put a bullet in it,",
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
              "surface": "بُنْدُقِيَّتَهُ",
              "lemma": "بندقية",
              "features": "acc+3ms",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            },
            {
              "surface": "وَوَضَعَ",
              "lemma": "وضع",
              "features": "conj+perf.3ms",
              "root": "و ض ع",
              "pos": "verb",
              "gloss": "to put, place"
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
              "surface": "رَصَاصَةً",
              "lemma": "رصاصة",
              "features": "indef.acc",
              "root": "ر ص ص",
              "pos": "noun",
              "gloss": "bullet"
            }
          ]
        },
        {
          "id": "qr1-14-028",
          "page": 70,
          "ar": "وَكُنْتُ أَعْرِفُ كَيْفَ أُصَوِّبُ الْبُنْدُقِيَّةَ وَكَيْفَ أُطْلِقُهَا.",
          "en": "and I knew how to aim the rifle and how to fire it,",
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
              "surface": "أَعْرِفُ",
              "lemma": "عرف",
              "features": "impf.1s",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know, recognize"
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
              "surface": "أُصَوِّبُ",
              "lemma": "صوب",
              "features": "impf.1s",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to aim"
            },
            {
              "surface": "الْبُنْدُقِيَّةَ",
              "lemma": "بندقية",
              "features": "def.acc",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
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
              "surface": "أُطْلِقُهَا",
              "lemma": "أطلق",
              "features": "impf.1s+3fs",
              "root": "ط ل ق",
              "pos": "verb",
              "gloss": "to release, fire (a shot)"
            }
          ]
        },
        {
          "id": "qr1-14-029",
          "page": 70,
          "ar": "لِأَنِّيْ أَطْلَقْتُ الْبُنْدُقِيَّةَ أَرْبَعَ مَرَّاتٍ أَوْ خَمْسَ مَرَّاتٍ.",
          "en": "because I had fired the rifle four or five times before.",
          "tokens": [
            {
              "surface": "لِأَنِّيْ",
              "lemma": "لأن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "because"
            },
            {
              "surface": "أَطْلَقْتُ",
              "lemma": "أطلق",
              "features": "perf.1s",
              "root": "ط ل ق",
              "pos": "verb",
              "gloss": "to release, fire (a shot)"
            },
            {
              "surface": "الْبُنْدُقِيَّةَ",
              "lemma": "بندقية",
              "features": "def.acc",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            },
            {
              "surface": "أَرْبَعَ",
              "lemma": "أربعة",
              "features": "acc.constr",
              "root": "أ ر ب ع",
              "pos": "num",
              "gloss": "four"
            },
            {
              "surface": "مَرَّاتٍ",
              "lemma": "مرة",
              "features": "pl.indef.gen",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occurrence"
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
              "surface": "خَمْسَ",
              "lemma": "خمسة",
              "features": "acc.constr",
              "root": "خ م س",
              "pos": "num",
              "gloss": "five"
            },
            {
              "surface": "مَرَّاتٍ",
              "lemma": "مرة",
              "features": "pl.indef.gen",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occurrence"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا كَانَ الرَّاوِيْ يَعْرِفُ كَيْفَ يُصَوِّبُ الْبُنْدُقِيَّةَ وَيُطْلِقُهَا؟",
          "options": [
            "لِأَنَّهُ أَطْلَقَهَا مِنْ قَبْلُ أَرْبَعَ أَوْ خَمْسَ مَرَّاتٍ",
            "لِأَنَّهُ تَعَلَّمَ ذٰلِكَ فِي الْمَدْرَسَةِ",
            "لِأَنَّ أَبَاهُ عَلَّمَهُ فِي الْبَيْتِ"
          ],
          "answer": 0,
          "qEn": "Why did the narrator already know how to aim and fire the rifle?",
          "optionsEn": [
            "Because he had already fired it four or five times before",
            "Because he learned it at school",
            "Because his father taught him at home"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "He went and sat in ambush; pigeons landed on a nearby tree, and he aimed and fired, hitting two of them -- overjoyed, he said Allahu Akbar.",
      "sentences": [
        {
          "id": "qr1-14-030",
          "page": 70,
          "ar": "فَذَهَبْتُ وَجَلَسْتُ بِالْمِرْصَادِ.",
          "en": "So I went and sat in ambush,",
          "tokens": [
            {
              "surface": "فَذَهَبْتُ",
              "lemma": "ذهب",
              "features": "conj+perf.1s",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "وَجَلَسْتُ",
              "lemma": "جلس",
              "features": "conj+perf.1s",
              "root": "ج ل س",
              "pos": "verb",
              "gloss": "to sit"
            },
            {
              "surface": "بِالْمِرْصَادِ",
              "lemma": "مرصاد",
              "features": "prep+def.gen",
              "root": "ر ص د",
              "pos": "noun",
              "gloss": "ambush spot, hunting blind"
            }
          ]
        },
        {
          "id": "qr1-14-031",
          "page": 70,
          "ar": "وَجَاءَ حَمَامٌ وَوَقَعَ عَلَىٰ شَجَرَةٍ قَرِيْبَةٍ.",
          "en": "and pigeons came and landed on a nearby tree,",
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
              "surface": "حَمَامٌ",
              "lemma": "حمام",
              "features": "indef.nom",
              "root": "ح م م",
              "pos": "noun",
              "gloss": "pigeons, doves (collective)"
            },
            {
              "surface": "وَوَقَعَ",
              "lemma": "وقع",
              "features": "conj+perf.3ms",
              "root": "و ق ع",
              "pos": "verb",
              "gloss": "to fall, land, happen"
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
              "surface": "شَجَرَةٍ",
              "lemma": "شجرة",
              "features": "indef.gen",
              "root": "ش ج ر",
              "pos": "noun",
              "gloss": "tree"
            },
            {
              "surface": "قَرِيْبَةٍ",
              "lemma": "قريب",
              "features": "indef.gen",
              "root": "ق ر ب",
              "pos": "adj",
              "gloss": "near"
            }
          ]
        },
        {
          "id": "qr1-14-032",
          "page": 70,
          "ar": "وَصَوَّبْتُ بُنْدُقِيَّتِيْ نَحْوَ الْحَمَامِ وَأَطْلَقْتُ الْبُنْدُقِيَّةَ.",
          "en": "and I aimed my rifle at the pigeons and fired the rifle,",
          "tokens": [
            {
              "surface": "وَصَوَّبْتُ",
              "lemma": "صوب",
              "features": "conj+perf.1s",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to aim"
            },
            {
              "surface": "بُنْدُقِيَّتِيْ",
              "lemma": "بندقية",
              "features": "acc+1s",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            },
            {
              "surface": "نَحْوَ",
              "lemma": "نحو",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "towards, in the direction of"
            },
            {
              "surface": "الْحَمَامِ",
              "lemma": "حمام",
              "features": "def.gen",
              "root": "ح م م",
              "pos": "noun",
              "gloss": "pigeons, doves (collective)"
            },
            {
              "surface": "وَأَطْلَقْتُ",
              "lemma": "أطلق",
              "features": "conj+perf.1s",
              "root": "ط ل ق",
              "pos": "verb",
              "gloss": "to release, fire (a shot)"
            },
            {
              "surface": "الْبُنْدُقِيَّةَ",
              "lemma": "بندقية",
              "features": "def.acc",
              "root": "ب ن د ق",
              "pos": "noun",
              "gloss": "rifle"
            }
          ]
        },
        {
          "id": "qr1-14-033",
          "page": 71,
          "ar": "فَأَصَبْتُ حَمَامَتَيْنِ وَفَرِحْتُ جِدًّا لَمَّا أَصَبْتُ الْحَمَامَتَيْنِ وَكَبَّرْتُ مِنَ الْفَرَحِ.",
          "en": "and I hit two pigeons, and I was overjoyed when I hit the two pigeons, and I said Allahu Akbar out of joy.",
          "tokens": [
            {
              "surface": "فَأَصَبْتُ",
              "lemma": "أصاب",
              "features": "conj+perf.1s",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to hit (a target)"
            },
            {
              "surface": "حَمَامَتَيْنِ",
              "lemma": "حمامة",
              "features": "du.indef.acc",
              "root": "ح م م",
              "pos": "noun",
              "gloss": "a pigeon, dove"
            },
            {
              "surface": "وَفَرِحْتُ",
              "lemma": "فرح",
              "features": "conj+perf.1s",
              "root": "ف ر ح",
              "pos": "verb",
              "gloss": "to be glad, happy"
            },
            {
              "surface": "جِدًّا",
              "lemma": "جدا",
              "features": "acc",
              "root": "ج د د",
              "pos": "adv",
              "gloss": "very, greatly"
            },
            {
              "surface": "لَمَّا",
              "lemma": "لما",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "when (in the past)"
            },
            {
              "surface": "أَصَبْتُ",
              "lemma": "أصاب",
              "features": "perf.1s",
              "root": "ص و ب",
              "pos": "verb",
              "gloss": "to hit (a target)"
            },
            {
              "surface": "الْحَمَامَتَيْنِ",
              "lemma": "حمامة",
              "features": "def.du.acc",
              "root": "ح م م",
              "pos": "noun",
              "gloss": "a pigeon, dove"
            },
            {
              "surface": "وَكَبَّرْتُ",
              "lemma": "كبر-تكبير",
              "features": "conj+perf.1s",
              "root": "ك ب ر",
              "pos": "verb",
              "gloss": "to say Allahu Akbar; to magnify (God)"
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
              "surface": "الْفَرَحِ",
              "lemma": "فرح",
              "features": "def.gen",
              "root": "ف ر ح",
              "pos": "noun",
              "gloss": "joy"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الرَّاوِيْ لَمَّا أَصَابَ الْحَمَامَتَيْنِ؟",
          "options": [
            "فَرِحَ جِدًّا وَكَبَّرَ مِنَ الْفَرَحِ",
            "بَكَىٰ مِنَ الْفَرَحِ",
            "سَكَتَ وَلَمْ يَقُلْ شَيْئًا"
          ],
          "answer": 0,
          "qEn": "What did the narrator do when he hit the two pigeons?",
          "optionsEn": [
            "He was overjoyed and said Allahu Akbar out of joy",
            "He cried out of joy",
            "He fell silent and said nothing"
          ]
        }
      ]
    },
    {
      "id": "p9",
      "en": "The others came and cheered, saying: masha'Allah, Khalid is a hunter!",
      "sentences": [
        {
          "id": "qr1-14-034",
          "page": 71,
          "ar": "وَجَاءَ الْإِخْوَانُ وَقَالُوْا: مَرْحَىٰ مَرْحَىٰ مَرْحَىٰ.",
          "en": "The others came and said: Bravo, bravo, bravo!",
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
              "surface": "الْإِخْوَانُ",
              "lemma": "أخ",
              "features": "def.pl.nom",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brothers, companions"
            },
            {
              "surface": "وَقَالُوْا",
              "lemma": "قال",
              "features": "conj+perf.3mp",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
            },
            {
              "surface": "مَرْحَىٰ",
              "lemma": "مرحى",
              "features": "part",
              "root": "م ر ح",
              "pos": "part",
              "gloss": "bravo!"
            },
            {
              "surface": "مَرْحَىٰ",
              "lemma": "مرحى",
              "features": "part",
              "root": "م ر ح",
              "pos": "part",
              "gloss": "bravo!"
            },
            {
              "surface": "مَرْحَىٰ",
              "lemma": "مرحى",
              "features": "part",
              "root": "م ر ح",
              "pos": "part",
              "gloss": "bravo!"
            }
          ]
        },
        {
          "id": "qr1-14-035",
          "page": 71,
          "ar": "وَقَالُوْا: مَا شَاءَ اللهُ إِنَّ خَالِدًا صَيَّادٌ.",
          "en": "and said: Masha'Allah, Khalid is a hunter.",
          "tokens": [
            {
              "surface": "وَقَالُوْا",
              "lemma": "قال",
              "features": "conj+perf.3mp",
              "root": "ق و ل",
              "pos": "verb",
              "gloss": "to say"
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
              "surface": "إِنَّ",
              "lemma": "إن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "if; indeed; that"
            },
            {
              "surface": "خَالِدًا",
              "lemma": "خالد",
              "features": "acc",
              "root": "",
              "pos": "proper",
              "gloss": "Khālid (a name)"
            },
            {
              "surface": "صَيَّادٌ",
              "lemma": "صياد",
              "features": "indef.nom",
              "root": "ص ي د",
              "pos": "noun",
              "gloss": "hunter"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَالَ الْإِخْوَانُ لِخَالِدٍ لَمَّا أَصَابَ الْحَمَامَتَيْنِ؟",
          "options": [
            "مَا شَاءَ اللهُ إِنَّ خَالِدًا صَيَّادٌ",
            "لَمْ يُصِبْ شَيْئًا",
            "حَاوِلْ مَرَّةً أُخْرَىٰ"
          ],
          "answer": 0,
          "qEn": "What did the others say to Khalid when he hit the two pigeons?",
          "optionsEn": [
            "Masha'Allah, Khalid is a hunter",
            "He hit nothing",
            "Try again"
          ]
        }
      ]
    },
    {
      "id": "p10",
      "en": "The narrator insisted on slaughtering his own pigeons himself; that evening they returned to the village with plenty of game, cut up the cow, and gave its meat to friends, relatives, and the villagers, who ate their fill and thanked the hunters.",
      "sentences": [
        {
          "id": "qr1-14-036",
          "page": 71,
          "ar": "وَمَا رَضِيْتُ أَنْ يَذْبَحَهُمَا أَحَدٌ.",
          "en": "I was not willing for anyone else to slaughter them,",
          "tokens": [
            {
              "surface": "وَمَا",
              "lemma": "ما",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; what"
            },
            {
              "surface": "رَضِيْتُ",
              "lemma": "رضي",
              "features": "perf.1s",
              "root": "ر ض ي",
              "pos": "verb",
              "gloss": "to be pleased"
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
              "surface": "يَذْبَحَهُمَا",
              "lemma": "ذبح",
              "features": "impf.3ms+3md",
              "root": "ذ ب ح",
              "pos": "verb",
              "gloss": "to slaughter"
            },
            {
              "surface": "أَحَدٌ",
              "lemma": "أحد",
              "features": "indef.nom",
              "root": "أ ح د",
              "pos": "noun",
              "gloss": "one, someone, anyone"
            }
          ]
        },
        {
          "id": "qr1-14-037",
          "page": 71,
          "ar": "فَذَهَبْتُ وَسَمَّيْتُ اللهَ وَذَبَحْتُ الْحَمَامَتَيْنِ بِسِكِّيْنِيَ الصَّغِيْرِ الْحَادِّ.",
          "en": "so I went and invoked God's name and slaughtered the two pigeons with my small sharp knife,",
          "tokens": [
            {
              "surface": "فَذَهَبْتُ",
              "lemma": "ذهب",
              "features": "conj+perf.1s",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "وَسَمَّيْتُ",
              "lemma": "سمى",
              "features": "conj+perf.1s",
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
              "surface": "وَذَبَحْتُ",
              "lemma": "ذبح",
              "features": "conj+perf.1s",
              "root": "ذ ب ح",
              "pos": "verb",
              "gloss": "to slaughter"
            },
            {
              "surface": "الْحَمَامَتَيْنِ",
              "lemma": "حمامة",
              "features": "def.du.acc",
              "root": "ح م م",
              "pos": "noun",
              "gloss": "a pigeon, dove"
            },
            {
              "surface": "بِسِكِّيْنِيَ",
              "lemma": "سكين",
              "features": "prep+gen+1s",
              "root": "س ك ن",
              "pos": "noun",
              "gloss": "knife"
            },
            {
              "surface": "الصَّغِيْرِ",
              "lemma": "صغير",
              "features": "def.gen",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            },
            {
              "surface": "الْحَادِّ",
              "lemma": "حاد",
              "features": "def.gen",
              "root": "ح د د",
              "pos": "adj",
              "gloss": "sharp"
            }
          ]
        },
        {
          "id": "qr1-14-038",
          "page": 71,
          "ar": "وَرَجَعْنَا إِلَىٰ الْقَرْيَةِ فِي الْمَسَاءِ بِصَيْدٍ كَثِيْرٍ.",
          "en": "and we returned to the village in the evening with much game,",
          "tokens": [
            {
              "surface": "وَرَجَعْنَا",
              "lemma": "رجع",
              "features": "conj+perf.1p",
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
              "surface": "الْقَرْيَةِ",
              "lemma": "قرية",
              "features": "def.gen",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
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
            },
            {
              "surface": "بِصَيْدٍ",
              "lemma": "صيد",
              "features": "prep+indef.gen",
              "root": "ص ي د",
              "pos": "noun",
              "gloss": "hunting; game, quarry"
            },
            {
              "surface": "كَثِيْرٍ",
              "lemma": "كثير",
              "features": "indef.gen",
              "root": "ك ث ر",
              "pos": "adj",
              "gloss": "much, many"
            }
          ]
        },
        {
          "id": "qr1-14-039",
          "page": 71,
          "ar": "وَقُطِّعَتِ الْبَقَرَةُ قِطَعًا قِطَعًا.",
          "en": "and the cow was cut up into pieces,",
          "tokens": [
            {
              "surface": "وَقُطِّعَتِ",
              "lemma": "قطع",
              "features": "conj+perf.3fs",
              "root": "ق ط ع",
              "pos": "verb",
              "gloss": "to cut"
            },
            {
              "surface": "الْبَقَرَةُ",
              "lemma": "بقرة",
              "features": "def.nom",
              "root": "ب ق ر",
              "pos": "noun",
              "gloss": "a cow"
            },
            {
              "surface": "قِطَعًا",
              "lemma": "قطعة",
              "features": "pl.indef.acc",
              "root": "ق ط ع",
              "pos": "noun",
              "gloss": "piece, part"
            },
            {
              "surface": "قِطَعًا",
              "lemma": "قطعة",
              "features": "pl.indef.acc",
              "root": "ق ط ع",
              "pos": "noun",
              "gloss": "piece, part"
            }
          ]
        },
        {
          "id": "qr1-14-040",
          "page": 71,
          "ar": "وَأَهْدَيْنَا لَحْمَهَا إِلَىٰ جَمِيْعِ الْأَصْدِقَاءِ وَالْأَقَارِبِ وَأَهْلِ الْقَرْيَةِ.",
          "en": "and we gave its meat as gifts to all our friends, relatives, and the people of the village,",
          "tokens": [
            {
              "surface": "وَأَهْدَيْنَا",
              "lemma": "أهدى",
              "features": "conj+perf.1p",
              "root": "ه د ي",
              "pos": "verb",
              "gloss": "to give as a gift"
            },
            {
              "surface": "لَحْمَهَا",
              "lemma": "لحم",
              "features": "acc+3fs",
              "root": "ل ح م",
              "pos": "noun",
              "gloss": "meat"
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
              "surface": "جَمِيْعِ",
              "lemma": "جميع",
              "features": "gen.constr",
              "root": "ج م ع",
              "pos": "noun",
              "gloss": "all, entirety"
            },
            {
              "surface": "الْأَصْدِقَاءِ",
              "lemma": "صديق",
              "features": "def.pl.gen",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "وَالْأَقَارِبِ",
              "lemma": "أقارب",
              "features": "conj+def.gen",
              "root": "ق ر ب",
              "pos": "noun",
              "gloss": "relatives"
            },
            {
              "surface": "وَأَهْلِ",
              "lemma": "أهل",
              "features": "conj+gen.constr",
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
        },
        {
          "id": "qr1-14-041",
          "page": 71,
          "ar": "فَأَكَلُوْا وَشَبِعُوْا وَشَكَرُوْا الصَّيَّادِيْنَ.",
          "en": "and they ate, and were satisfied, and thanked the hunters.",
          "tokens": [
            {
              "surface": "فَأَكَلُوْا",
              "lemma": "أكل",
              "features": "conj+perf.3mp",
              "root": "أ ك ل",
              "pos": "verb",
              "gloss": "to eat"
            },
            {
              "surface": "وَشَبِعُوْا",
              "lemma": "شبع",
              "features": "conj+perf.3mp",
              "root": "ش ب ع",
              "pos": "verb",
              "gloss": "to be full, satiated"
            },
            {
              "surface": "وَشَكَرُوْا",
              "lemma": "شكر",
              "features": "conj+perf.3mp",
              "root": "ش ك ر",
              "pos": "verb",
              "gloss": "to thank"
            },
            {
              "surface": "الصَّيَّادِيْنَ",
              "lemma": "صياد",
              "features": "def.pl.acc",
              "root": "ص ي د",
              "pos": "noun",
              "gloss": "hunter"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلُوا بِلَحْمِ الْبَقَرَةِ لَمَّا رَجَعُوا إِلَى الْقَرْيَةِ؟",
          "options": [
            "أَهْدَوْهُ إِلَىٰ جَمِيْعِ الْأَصْدِقَاءِ وَالْأَقَارِبِ وَأَهْلِ الْقَرْيَةِ",
            "بَاعُوْهُ فِي السُّوْقِ",
            "احْتَفَظُوْا بِهِ لِأَنْفُسِهِمْ فَقَطْ"
          ],
          "answer": 0,
          "qEn": "What did they do with the cow's meat when they returned to the village?",
          "optionsEn": [
            "They gave it as gifts to all their friends, relatives, and the villagers",
            "They sold it in the market",
            "They kept it only for themselves"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "خَرَجْتُ يَوْمَ عُطْلَةٍ مَعَ",
        "post": "عِنْدَهُمْ بَنَادِقُ وَسَكَاكِيْنُ",
        "en": "I went out on a holiday with hunters who had rifles and knives.",
        "options": [
          "صَيَّادِيْنَ",
          "صَيَّادُوْنَ",
          "صَيَّادٍ",
          "الصَّيَّادِيْنَ"
        ],
        "answer": 0,
        "rationales": [
          "genitive plural indefinite -- object of the preposition مَعَ.",
          "nominative -- wrong case after a preposition.",
          "singular -- wrong number.",
          "definite -- wrong definiteness; unnamed hunters."
        ]
      },
      {
        "type": "cloze",
        "pre": "خَرَجْنَا مُبَكِّرِيْنَ فِي الصَّبَاحِ لَمْ تَطْلُعِ",
        "post": "",
        "en": "We went out early in the morning before the sun had risen.",
        "options": [
          "الشَّمْسُ",
          "الشَّمْسَ",
          "الشَّمْسِ",
          "شَمْسٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of تَطْلُعِ.",
          "accusative -- wrong case.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; the sun, unique."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَكَانَ الْغَدَاءُ مَعَ خَلِيْلٍ وَقَدْ ضَلَّ",
        "post": "",
        "en": "The lunch was with Khalil, and he had lost the way.",
        "options": [
          "الطَّرِيْقَ",
          "الطَّرِيْقُ",
          "الطَّرِيْقِ",
          "طَرِيْقًا"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- object of ضَلَّ.",
          "nominative -- wrong case.",
          "genitive -- wrong case.",
          "indefinite -- wrong definiteness; a specific road."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَبَرَزَ خَلِيْلٌ مِنْ بُعْدٍ فَنَادَيْنَاهُ بِاسْمِهِ وَحَمِدْنَا",
        "post": "",
        "en": "Khalil appeared in the distance, so we called out to him by name and praised God.",
        "options": [
          "اللهَ",
          "اللهُ",
          "اللهِ",
          "إِلٰه"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- object of حَمِدْنَا.",
          "nominative -- wrong case.",
          "genitive -- wrong case.",
          "a different, indefinite word entirely."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَخَرَجَتْ بَقَرَةٌ مِنْ بَيْنِ",
        "post": "",
        "en": "And a cow came out from among the trees.",
        "options": [
          "الْأَشْجَارِ",
          "الْأَشْجَارُ",
          "الْأَشْجَارَ",
          "أَشْجَارٌ"
        ],
        "answer": 0,
        "rationales": [
          "genitive plural -- object of the preposition بَيْنِ.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "indefinite -- wrong definiteness; the same trees just described."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَأَطْلَقَ الرَّصَاصَةَ وَأَصَابَ الْبَقَرَةَ فِيْ",
        "post": "",
        "en": "And he fired the bullet, and hit the cow in its chest.",
        "options": [
          "صَدْرِهَا",
          "صَدْرُهَا",
          "صَدْرَهَا",
          "صُدُوْرِهَا"
        ],
        "answer": 0,
        "rationales": [
          "genitive + 3fs -- object of the preposition فِيْ, \"her chest.\"",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "plural -- wrong number; one chest."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَكُنَّا نَتَكَلَّمُ وَكُنَّا مُطْمَئِنِّيْنَ إِذْ خَرَجَتْ",
        "post": "",
        "en": "And we were talking, at ease, when another cow came out.",
        "options": [
          "بَقَرَةٌ أُخْرَىٰ",
          "بَقَرَةً أُخْرَىٰ",
          "بَقَرَةٍ أُخْرَىٰ",
          "الْبَقَرَةُ الْأُخْرَىٰ"
        ],
        "answer": 0,
        "rationales": [
          "nominative indefinite -- subject of خَرَجَتْ, \"another cow.\"",
          "accusative -- wrong case.",
          "genitive -- wrong case.",
          "definite -- wrong definiteness; a new, unnamed cow."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَأَعْطَانِيْ بُنْدُقِيَّتَهُ وَوَضَعَ فِيْهَا",
        "post": "",
        "en": "So he gave me his rifle and put a bullet in it.",
        "options": [
          "رَصَاصَةً",
          "رَصَاصَةٌ",
          "رَصَاصَةٍ",
          "رَصَاصَاتٍ"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- object of وَضَعَ.",
          "nominative -- wrong case.",
          "genitive -- wrong case.",
          "plural -- wrong number; a single bullet."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَجَاءَ حَمَامٌ وَوَقَعَ عَلَىٰ",
        "post": "",
        "en": "And pigeons came and landed on a nearby tree.",
        "options": [
          "شَجَرَةٍ قَرِيْبَةٍ",
          "شَجَرَةٌ قَرِيْبَةٌ",
          "شَجَرَةً قَرِيْبَةً",
          "الشَّجَرَةِ الْقَرِيْبَةِ"
        ],
        "answer": 0,
        "rationales": [
          "genitive indefinite -- object of the preposition عَلَىٰ, agreeing adjective included.",
          "nominative -- wrong case after a preposition.",
          "accusative -- wrong case after a preposition.",
          "definite -- wrong definiteness; an unnamed nearby tree."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَالُوْا: مَا شَاءَ اللهُ إِنَّ",
        "post": "صَيَّادٌ",
        "en": "And they said: Masha'Allah, Khalid is a hunter.",
        "options": [
          "خَالِدًا",
          "خَالِدٌ",
          "خَالِدٍ",
          "خَالِدُ"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- ism of إِنَّ.",
          "nominative -- wrong case for ism inna.",
          "genitive -- wrong case.",
          "construct form with no case ending shown -- doesn't fit here."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "خَرَجْتُ يَوْمَ عُطْلَةٍ مَعَ صَيَّادِيْنَ",
        "pre": "",
        "post": "عِنْدَهُمْ بَنَادِقُ وَسَكَاكِيْنُ",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "خَرَجْنَا",
          "خَرَجْتُ",
          "خَرَجَ",
          "خَرَجُوا"
        ],
        "answer": 0,
        "rationales": [
          "1st plural perfect -- we went out.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَغَلَبَنَا الْجُوْعُ وَالظَّمَأُ",
        "pre": "",
        "post": "الْجُوْعُ وَالظَّمَأُ",
        "targetPerson": "هُمْ",
        "targetEn": "them (m.)",
        "options": [
          "وَغَلَبَهُمُ",
          "وَغَلَبَنَا",
          "وَغَلَبَكُمُ",
          "وَغَلَبَهَا"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular verb + 3mp object -- hunger and thirst overcame them.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَبَرَزَ خَلِيْلٌ مِنْ بُعْدٍ",
        "pre": "",
        "post": "فَنَادَيْنَاهُ بِاسْمِهِ",
        "targetPerson": "خَلِيْلَانِ",
        "targetEn": "two Khalils (dual)",
        "options": [
          "بَرَزَ خَلِيْلَانِ",
          "بَرَزَ خَلِيْلٌ",
          "بَرَزَتْ خَلِيْلَانِ",
          "بَرَزُوا خَلِيْلَانِ"
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
        "base": "وَكَانَ السَّيِّدُ إِسْمَاعِيْلُ مُسْتَعِدًّا",
        "pre": "",
        "post": "فَصَوَّبَ إِلَيْهَا بُنْدُقِيَّتَهُ",
        "targetPerson": "أَنْتُمْ",
        "targetEn": "you (m. pl.)",
        "options": [
          "كُنْتُمْ مُسْتَعِدِّيْنَ",
          "كُنْتَ مُسْتَعِدًّا",
          "كَانُوا مُسْتَعِدِّيْنَ",
          "كُنَّا مُسْتَعِدِّيْنَ"
        ],
        "answer": 0,
        "rationales": [
          "2nd masc. plural + plural predicate -- you all were ready.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَأَطْلَقَ عَلَيْهَا هَاشِمٌ بُنْدُقِيَّتَهُ بِسُرْعَةٍ",
        "pre": "",
        "post": "بِسُرْعَةٍ",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَطْلَقْتُ",
          "أَطْلَقَ",
          "أَطْلَقَتْ",
          "أَطْلَقْنَا"
        ],
        "answer": 0,
        "rationales": [
          "1st singular perfect -- I fired.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَتَأَسَّفَ هَاشِمٌ وَتَأَسَّفَتِ الْجَمَاعَةُ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتِ",
        "targetEn": "you (f. sg.)",
        "options": [
          "تَأَسَّفْتِ",
          "تَأَسَّفَ",
          "تَأَسَّفَتْ",
          "تَأَسَّفْنَ"
        ],
        "answer": 0,
        "rationales": [
          "2nd fem. singular perfect -- you were sorry.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَصِدْنَا حَمَامَتَيْنِ بِرَصَاصَةٍ",
        "pre": "",
        "post": "وَبَطَّتَيْنِ بِرَصَاصَتَيْنِ",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "صَادَ",
          "صِدْنَا",
          "صَادَتْ",
          "صَادُوا"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular perfect -- he hunted.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَأَصَبْتُ حَمَامَتَيْنِ وَفَرِحْتُ جِدًّا",
        "pre": "",
        "post": "لَمَّا أَصَبْتُ الْحَمَامَتَيْنِ",
        "targetPerson": "هُنَّ",
        "targetEn": "they (f.)",
        "options": [
          "فَأَصَبْنَ وَفَرِحْنَ",
          "فَأَصَبْتُ وَفَرِحْتُ",
          "فَأَصَابَتَا وَفَرِحَتَا",
          "فَأَصَابُوا وَفَرِحُوا"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. plural throughout -- they hit and were glad.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

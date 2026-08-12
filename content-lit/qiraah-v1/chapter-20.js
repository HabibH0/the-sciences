// القراءة الراشدة, volume one, chapter twenty -- قريتي.
//
// Follows the shape of chapter-01.js -- see ../CHAPTER-FORMAT.md for the
// full specification. Hand-authored directly from the scanned pages
// (qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed pages 83-85);
// there is no JSON intermediate (see PROJECT_CONTEXT.md and
// QASAS_AGENT_BRIEF.md -- the pipeline no longer emits JSON).
//
// A first-person descriptive essay about the narrator's village and the
// river running beneath it -- its clear, sandy-bottomed water, the fish
// and shells visible at its bottom, learning to swim there as children,
// teaching a frightened friend from town not to fear the water, the
// village nearly becoming an island when the river floods, the year of
// the great flood that emptied it for a month, its fame as a birthplace
// of scholars, and the three-hundred-year-old mosque on its bank that
// floods every year but has never weakened. Register matches
// chapter-01.js (first-person singular, largely non-narrative
// description) rather than the dialogue/hadith chapters that have
// dominated recent chapters.
//
// Vocabulary notes:
//   - جَرَى ("to run, flow") reuses the lemma already established in
//     chapter-01.js/chapter-08.js/chapter-10.js (there glossed "to run," of
//     a train or similar); here it is used of the river and the fish, so
//     several tokens carry gloss_override="to flow" / "to dart, move" for
//     the river/water sense while keeping the shared lemma key.
//   - تَعَالَ ("come!") reuses the irregular-imperative lemma already
//     established in chapter-04.js.
//   - الْغَرَقَ ("drowning") reuses the already-established verb lemma "غرق"
//     ("to drown, sink," chapter-09.js) via pos_override="noun" for its
//     verbal-noun sense -- the same technique chapter-19.js used for
//     صَلَاحِهِ/اجْتِهَادِهِ (adjective/verb -> abstract noun).
//   - وُلِدَ ("was born") reuses the already-established noun lemma "ولد"
//     ("child, boy") via pos_override="verb"/gloss_override="to be born" --
//     the same override technique run in the opposite direction (a noun
//     lemma standing in for a verb sense of the same root), since Arabic
//     "child" and "to give birth/be born" share the root و ل د.
//   - تَشَجَّعَ ("to take heart, become encouraged") is given its own new
//     "تشجع" lemma, distinct from the already-established "شجع" ("to
//     encourage," chapter-19.js) -- Form V (reflexive) vs. Form II
//     (causative) of the same root ش ج ع, the same verb-form-fork
//     treatment chapter-16.js gave أيقظ/استيقظ.
//   - Five words carry book_note from the source's own footnotes: صدف and
//     قعر and فاض (page 84), جهة and فيضان (page 85).
//
// number/pages/register at the top level are carried for documentation
// only; the reader takes them from this book's index.js entry instead
// (see CHAPTER-FORMAT.md, "Fields the app ignores").
export const CHAPTER = {
  "id": "ch20",
  "number": 20,
  "title": {
    "ar": "قَرْيَتِيْ",
    "en": "My Village"
  },
  "pages": [
    83,
    84,
    85
  ],
  "register": "first_person_singular_descriptive",
  "newWords": [
    "نهر",
    "جزيرة",
    "سبح",
    "سباحة",
    "صدف",
    "قعر",
    "فاض",
    "جهة",
    "فيضان",
    "عبر",
    "شاطئ",
    "حقل",
    "تشجع"
  ],
  "lemmas": {
    "قرية": {
      "root": "ق ر ي",
      "pos": "noun",
      "gloss": "village",
      "content": true
    },
    "جميل": {
      "root": "ج م ل",
      "pos": "adj",
      "gloss": "beautiful",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in",
      "content": false
    },
    "وسط": {
      "root": "و س ط",
      "pos": "noun",
      "gloss": "middle, midst",
      "content": true
    },
    "حقل": {
      "root": "ح ق ل",
      "pos": "noun",
      "gloss": "field",
      "content": true
    },
    "بستان": {
      "root": "—",
      "pos": "noun",
      "gloss": "garden",
      "content": true
    },
    "كأن": {
      "root": "—",
      "pos": "part",
      "gloss": "as if",
      "content": false
    },
    "جزيرة": {
      "root": "ج ز ر",
      "pos": "noun",
      "gloss": "island",
      "content": true
    },
    "بحر": {
      "root": "ب ح ر",
      "pos": "noun",
      "gloss": "sea",
      "content": true
    },
    "أخضر": {
      "root": "خ ض ر",
      "pos": "adj",
      "gloss": "green",
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
    "إلا": {
      "root": "—",
      "pos": "part",
      "gloss": "except, only",
      "content": false
    },
    "خضرة": {
      "root": "خ ض ر",
      "pos": "noun",
      "gloss": "greenery, greenness",
      "content": true
    },
    "ماء": {
      "root": "م و ه",
      "pos": "noun",
      "gloss": "water",
      "content": true
    },
    "أرض": {
      "root": "أ ر ض",
      "pos": "noun",
      "gloss": "earth, land, ground",
      "content": true
    },
    "دنيا": {
      "root": "د ن و",
      "pos": "noun",
      "gloss": "world, this life",
      "content": true
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every, all",
      "content": true
    },
    "جرى": {
      "root": "ج ر ي",
      "pos": "verb",
      "gloss": "to run",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from",
      "content": false
    },
    "تحت": {
      "root": "—",
      "pos": "prep",
      "gloss": "under, beneath",
      "content": false
    },
    "نهر": {
      "root": "ن ه ر",
      "pos": "noun",
      "gloss": "river",
      "content": true
    },
    "نقي": {
      "root": "ن ق ي",
      "pos": "adj",
      "gloss": "clean, pure",
      "content": true
    },
    "شفاف": {
      "root": "ش ف ف",
      "pos": "adj",
      "gloss": "transparent, clear",
      "content": true
    },
    "لأن": {
      "root": "—",
      "pos": "part",
      "gloss": "because",
      "content": false
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon, on",
      "content": false
    },
    "رمل": {
      "root": "ر م ل",
      "pos": "noun",
      "gloss": "sand",
      "content": true
    },
    "اغتسل": {
      "root": "غ س ل",
      "pos": "verb",
      "gloss": "to bathe, wash oneself",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "dem",
      "gloss": "this",
      "content": false
    },
    "سبح": {
      "root": "س ب ح",
      "pos": "verb",
      "gloss": "to swim",
      "content": true
    },
    "لعب": {
      "root": "ل ع ب",
      "pos": "verb",
      "gloss": "to play",
      "content": true
    },
    "شرب": {
      "root": "ش ر ب",
      "pos": "verb",
      "gloss": "to drink",
      "content": true
    },
    "سمك": {
      "root": "س م ك",
      "pos": "noun",
      "gloss": "fish",
      "content": true
    },
    "هنا": {
      "root": "—",
      "pos": "adv",
      "gloss": "here",
      "content": true
    },
    "صدف": {
      "root": "ص د ف",
      "pos": "noun",
      "gloss": "shells",
      "content": true,
      "book_note": "صَدَفٌ (ج) أَصْدَاف: غِطَاءُ الدُّرِّ (ṣadaf, pl. aṣdāf: the covering of a pearl)"
    },
    "قعر": {
      "root": "ق ع ر",
      "pos": "noun",
      "gloss": "bottom, depth",
      "content": true,
      "book_note": "قَعْرٌ (ج) قُعُوْر: مُنْتَهَى الْعُمْقِ، يُقَالُ: فِي قَعْرِ الْبِئْرِ (qaʿr, pl. quʿūr: the utmost depth, as in \"at the bottom of the well\")"
    },
    "قد": {
      "root": "—",
      "pos": "part",
      "gloss": "already, indeed",
      "content": false
    },
    "تعلم": {
      "root": "ع ل م",
      "pos": "verb",
      "gloss": "to learn",
      "content": true
    },
    "سباحة": {
      "root": "س ب ح",
      "pos": "noun",
      "gloss": "swimming",
      "content": true
    },
    "نحن": {
      "root": "—",
      "pos": "noun",
      "gloss": "we",
      "content": false
    },
    "صغير": {
      "root": "ص غ ر",
      "pos": "adj",
      "gloss": "young, small",
      "content": true
    },
    "إذا": {
      "root": "—",
      "pos": "part",
      "gloss": "when, if",
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
    "مطر": {
      "root": "م ط ر",
      "pos": "noun",
      "gloss": "rain",
      "content": true
    },
    "فاض": {
      "root": "ف ي ض",
      "pos": "verb",
      "gloss": "to overflow, flood",
      "content": true,
      "book_note": "فَاضَ يَفِيْضُ فَيْضاً وَفَيَضَاناً: النَّهْرُ وَنَحْوُهُ: امْتَلَأَ حَتَّى طَفَحَ وَسَالَ (fāḍa: [of a river or the like] to fill until it overflowed and ran)"
    },
    "عرض": {
      "root": "ع ر ض",
      "pos": "noun",
      "gloss": "width, breadth",
      "content": true
    },
    "كبير": {
      "root": "ك ب ر",
      "pos": "adj",
      "gloss": "big, large",
      "content": true
    },
    "عبر": {
      "root": "ع ب ر",
      "pos": "verb",
      "gloss": "to cross",
      "content": true
    },
    "سابق": {
      "root": "س ب ق",
      "pos": "verb",
      "gloss": "to race, compete against",
      "content": true
    },
    "كثير": {
      "root": "ك ث ر",
      "pos": "adj",
      "gloss": "much, many",
      "content": true
    },
    "أهل": {
      "root": "أ ه ل",
      "pos": "noun",
      "gloss": "people, family, folk",
      "content": true
    },
    "بلد": {
      "root": "ب ل د",
      "pos": "noun",
      "gloss": "town, country",
      "content": true
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know, recognize",
      "content": true
    },
    "هم": {
      "root": "—",
      "pos": "noun",
      "gloss": "they (m.)",
      "content": false
    },
    "خاف": {
      "root": "خ و ف",
      "pos": "verb",
      "gloss": "to fear",
      "content": true
    },
    "جدا": {
      "root": "—",
      "pos": "adv",
      "gloss": "very",
      "content": false
    },
    "دخل": {
      "root": "د خ ل",
      "pos": "verb",
      "gloss": "to enter",
      "content": true
    },
    "جاء": {
      "root": "ج ي أ",
      "pos": "verb",
      "gloss": "to come",
      "content": true
    },
    "مرة": {
      "root": "م ر ر",
      "pos": "noun",
      "gloss": "time, occasion",
      "content": true
    },
    "صديق": {
      "root": "ص د ق",
      "pos": "noun",
      "gloss": "friend",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "for, to; belonging to",
      "content": false
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "تعال": {
      "root": "—",
      "pos": "verb",
      "gloss": "come! (irregular imperative)",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
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
      "gloss": "indeed, verily",
      "content": false
    },
    "شجع": {
      "root": "ش ج ع",
      "pos": "verb",
      "gloss": "to encourage",
      "content": true
    },
    "مع": {
      "root": "—",
      "pos": "prep",
      "gloss": "with",
      "content": false
    },
    "تشجع": {
      "root": "ش ج ع",
      "pos": "verb",
      "gloss": "to take heart, become encouraged",
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
    "لكن": {
      "root": "—",
      "pos": "part",
      "gloss": "but",
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
      "gloss": "to, towards",
      "content": false
    },
    "أخذ": {
      "root": "أ خ ذ",
      "pos": "verb",
      "gloss": "to take",
      "content": true
    },
    "يد": {
      "root": "ي د ي",
      "pos": "noun",
      "gloss": "hand",
      "content": true
    },
    "رفع": {
      "root": "ر ف ع",
      "pos": "verb",
      "gloss": "to raise, lift",
      "content": true
    },
    "خرج": {
      "root": "خ ر ج",
      "pos": "verb",
      "gloss": "to go out",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until",
      "content": false
    },
    "نزل": {
      "root": "ن ز ل",
      "pos": "verb",
      "gloss": "to go down, come down",
      "content": true
    },
    "أصبح": {
      "root": "ص ب ح",
      "pos": "verb",
      "gloss": "to become",
      "content": true
    },
    "شبه": {
      "root": "ش ب ه",
      "pos": "noun",
      "gloss": "semblance of, quasi-",
      "content": true
    },
    "أحاط": {
      "root": "ح و ط",
      "pos": "verb",
      "gloss": "to surround, encircle",
      "content": true
    },
    "ب": {
      "root": "—",
      "pos": "prep",
      "gloss": "with, by",
      "content": false
    },
    "ثلاث": {
      "root": "ث ل ث",
      "pos": "num",
      "gloss": "three",
      "content": true
    },
    "جهة": {
      "root": "ج ه ة",
      "pos": "noun",
      "gloss": "side, direction",
      "content": true,
      "book_note": "جِهَاتٌ (ج) جِهَة: نَاحِيَةٌ وَجَانِبٌ (jihāt, sg. jihah: a side or direction)"
    },
    "بقي": {
      "root": "ب ق ي",
      "pos": "verb",
      "gloss": "to remain, be left",
      "content": true
    },
    "واحد": {
      "root": "و ح د",
      "pos": "adj",
      "gloss": "one, single",
      "content": true
    },
    "اشترى": {
      "root": "ش ر ي",
      "pos": "verb",
      "gloss": "to buy",
      "content": true
    },
    "حاجة": {
      "root": "ح و ج",
      "pos": "noun",
      "gloss": "need; (pl.) provisions",
      "content": true
    },
    "سوق": {
      "root": "س و ق",
      "pos": "noun",
      "gloss": "market",
      "content": true
    },
    "سنة": {
      "root": "س ن و",
      "pos": "noun",
      "gloss": "year",
      "content": true
    },
    "فيضان": {
      "root": "ف ي ض",
      "pos": "noun",
      "gloss": "flood",
      "content": true,
      "book_note": "فَيَضَانٌ (ج) فَيَضَانَات: سَيْلٌ (ج) سُيُوْل (fayaḍān, pl. fayaḍānāt: a flood, torrent)"
    },
    "عظيم": {
      "root": "ع ظ م",
      "pos": "adj",
      "gloss": "great, tremendous",
      "content": true
    },
    "بيت": {
      "root": "ب ي ت",
      "pos": "noun",
      "gloss": "house",
      "content": true
    },
    "ناس": {
      "root": "ن و س",
      "pos": "noun",
      "gloss": "people",
      "content": true
    },
    "غرق": {
      "root": "غ ر ق",
      "pos": "verb",
      "gloss": "to drown, sink",
      "content": true
    },
    "ترك": {
      "root": "ت ر ك",
      "pos": "verb",
      "gloss": "to leave, abandon",
      "content": true
    },
    "لم": {
      "root": "—",
      "pos": "part",
      "gloss": "not (+ jussive; past negation)",
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
    "شهر": {
      "root": "ش ه ر",
      "pos": "noun",
      "gloss": "month",
      "content": true
    },
    "زار": {
      "root": "ز و ر",
      "pos": "verb",
      "gloss": "to visit",
      "content": true
    },
    "عالم": {
      "root": "ع ل م",
      "pos": "noun",
      "gloss": "scholar",
      "content": true
    },
    "مشهور": {
      "root": "ش ه ر",
      "pos": "adj",
      "gloss": "famous, well-known",
      "content": true
    },
    "ولد": {
      "root": "و ل د",
      "pos": "noun",
      "gloss": "child, boy",
      "content": true
    },
    "صالح": {
      "root": "ص ل ح",
      "pos": "adj",
      "gloss": "righteous, good",
      "content": true
    },
    "شاطئ": {
      "root": "ش ط أ",
      "pos": "noun",
      "gloss": "bank, shore",
      "content": true
    },
    "مسجد": {
      "root": "س ج د",
      "pos": "noun",
      "gloss": "mosque",
      "content": true
    },
    "قديم": {
      "root": "ق د م",
      "pos": "adj",
      "gloss": "old, ancient",
      "content": true
    },
    "بنى": {
      "root": "ب ن ي",
      "pos": "verb",
      "gloss": "to build",
      "content": true
    },
    "جد": {
      "root": "ج د د",
      "pos": "noun",
      "gloss": "grandfather",
      "content": true
    },
    "مضى": {
      "root": "م ض ي",
      "pos": "verb",
      "gloss": "to pass, elapse",
      "content": true
    },
    "ثلاثمئة": {
      "root": "ث ل ث",
      "pos": "num",
      "gloss": "three hundred",
      "content": true
    },
    "مكث": {
      "root": "م ك ث",
      "pos": "verb",
      "gloss": "to stay, remain",
      "content": true
    },
    "طويل": {
      "root": "ط و ل",
      "pos": "adj",
      "gloss": "long, extended",
      "content": true
    },
    "ضعف": {
      "root": "ض ع ف",
      "pos": "verb",
      "gloss": "to weaken, become weak",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "The narrator's village is beautiful, lying amid fields and orchards like an island in a green sea -- nothing but greenery and water in sight -- with a clear, sand-bottomed river running under it that they bathe, swim, play, and drink from, watching fish and shells in its depths, and which they learned to swim in as children; when the rains swell it wide, they cross it and race each other swimming.",
      "sentences": [
        {
          "id": "qr1-20-001",
          "page": 83,
          "ar": "قَرْيَتِيْ جَمِيْلَةٌ فِيْ وَسَطِ حُقُولٍ وَبَسَاتِيْنَ كَأَنَّهَا جَزِيْرَةٌ فِي بَحْرٍ أَخْضَرَ ،",
          "en": "My village is beautiful, amid fields and orchards, as if it were an island in a green sea,",
          "tokens": [
            {
              "surface": "قَرْيَتِيْ",
              "lemma": "قرية",
              "features": "nom+1s",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            },
            {
              "surface": "جَمِيْلَةٌ",
              "lemma": "جميل",
              "features": "indef.nom.f",
              "root": "ج م ل",
              "pos": "adj",
              "gloss": "beautiful"
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
              "features": "constr.gen",
              "root": "و س ط",
              "pos": "noun",
              "gloss": "middle, midst"
            },
            {
              "surface": "حُقُولٍ",
              "lemma": "حقل",
              "features": "indef.gen.pl",
              "root": "ح ق ل",
              "pos": "noun",
              "gloss": "field"
            },
            {
              "surface": "وَبَسَاتِيْنَ",
              "lemma": "بستان",
              "features": "conj+indef.gen.pl",
              "root": "",
              "pos": "noun",
              "gloss": "garden"
            },
            {
              "surface": "كَأَنَّهَا",
              "lemma": "كأن",
              "features": "part+3fs",
              "root": "",
              "pos": "part",
              "gloss": "as if"
            },
            {
              "surface": "جَزِيْرَةٌ",
              "lemma": "جزيرة",
              "features": "indef.nom",
              "root": "ج ز ر",
              "pos": "noun",
              "gloss": "island"
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
              "surface": "بَحْرٍ",
              "lemma": "بحر",
              "features": "indef.gen",
              "root": "ب ح ر",
              "pos": "noun",
              "gloss": "sea"
            },
            {
              "surface": "أَخْضَرَ",
              "lemma": "أخضر",
              "features": "indef.gen",
              "root": "خ ض ر",
              "pos": "adj",
              "gloss": "green"
            }
          ]
        },
        {
          "id": "qr1-20-002",
          "page": 83,
          "ar": "لَا تَرَىٰ فِيْهَا إِلَّا خُضْرَةً وَمَاءً ،",
          "en": "you see nothing in it but greenery and water,",
          "tokens": [
            {
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "تَرَىٰ",
              "lemma": "رأى",
              "features": "impf.2ms",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except, only"
            },
            {
              "surface": "خُضْرَةً",
              "lemma": "خضرة",
              "features": "indef.acc",
              "root": "خ ض ر",
              "pos": "noun",
              "gloss": "greenery, greenness"
            },
            {
              "surface": "وَمَاءً",
              "lemma": "ماء",
              "features": "conj+indef.acc",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            }
          ]
        },
        {
          "id": "qr1-20-003",
          "page": 83,
          "ar": "فَالْأَرْضُ خَضْرَاءُ وَالْحُقُوْلُ خَضْرَاءُ ،",
          "en": "the ground is green and the fields are green,",
          "tokens": [
            {
              "surface": "فَالْأَرْضُ",
              "lemma": "أرض",
              "features": "conj+def.nom",
              "root": "أ ر ض",
              "pos": "noun",
              "gloss": "earth, land, ground"
            },
            {
              "surface": "خَضْرَاءُ",
              "lemma": "أخضر",
              "features": "indef.nom.f",
              "root": "خ ض ر",
              "pos": "adj",
              "gloss": "green"
            },
            {
              "surface": "وَالْحُقُوْلُ",
              "lemma": "حقل",
              "features": "conj+def.nom.pl",
              "root": "ح ق ل",
              "pos": "noun",
              "gloss": "field"
            },
            {
              "surface": "خَضْرَاءُ",
              "lemma": "أخضر",
              "features": "indef.nom.f",
              "root": "خ ض ر",
              "pos": "adj",
              "gloss": "green"
            }
          ]
        },
        {
          "id": "qr1-20-004",
          "page": 83,
          "ar": "وَالدُّنْيَا كُلُّهَا خَضْرَاءُ فِيْ قَرْيَتِيْ ،",
          "en": "the whole world is green in my village,",
          "tokens": [
            {
              "surface": "وَالدُّنْيَا",
              "lemma": "دنيا",
              "features": "conj+def.nom",
              "root": "د ن و",
              "pos": "noun",
              "gloss": "world, this life"
            },
            {
              "surface": "كُلُّهَا",
              "lemma": "كل",
              "features": "nom+3fs",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "خَضْرَاءُ",
              "lemma": "أخضر",
              "features": "indef.nom.f",
              "root": "خ ض ر",
              "pos": "adj",
              "gloss": "green"
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
              "surface": "قَرْيَتِيْ",
              "lemma": "قرية",
              "features": "gen+1s",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            }
          ]
        },
        {
          "id": "qr1-20-005",
          "page": 83,
          "ar": "وَيَجْرِيْ مِنْ تَحْتِ الْقَرْيَةِ نَهْرٌ مَاؤُهُ نَقِيٌّ شَفَّافٌ ،",
          "en": "and a river with clear, transparent water flows beneath the village,",
          "tokens": [
            {
              "surface": "وَيَجْرِيْ",
              "lemma": "جرى",
              "features": "conj+impf.3ms",
              "root": "ج ر ي",
              "pos": "verb",
              "gloss": "to flow"
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
              "surface": "تَحْتِ",
              "lemma": "تحت",
              "features": "constr.gen",
              "root": "",
              "pos": "prep",
              "gloss": "under, beneath"
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
              "surface": "نَهْرٌ",
              "lemma": "نهر",
              "features": "indef.nom",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            },
            {
              "surface": "مَاؤُهُ",
              "lemma": "ماء",
              "features": "nom+3ms",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            },
            {
              "surface": "نَقِيٌّ",
              "lemma": "نقي",
              "features": "indef.nom",
              "root": "ن ق ي",
              "pos": "adj",
              "gloss": "clean, pure"
            },
            {
              "surface": "شَفَّافٌ",
              "lemma": "شفاف",
              "features": "indef.nom",
              "root": "ش ف ف",
              "pos": "adj",
              "gloss": "transparent, clear"
            }
          ]
        },
        {
          "id": "qr1-20-006",
          "page": 83,
          "ar": "لِأَنَّهُ يَجْرِيْ عَلَىٰ الرَّمْلِ ،",
          "en": "because it runs over the sand,",
          "tokens": [
            {
              "surface": "لِأَنَّهُ",
              "lemma": "لأن",
              "features": "part+3ms",
              "root": "",
              "pos": "part",
              "gloss": "because"
            },
            {
              "surface": "يَجْرِيْ",
              "lemma": "جرى",
              "features": "impf.3ms",
              "root": "ج ر ي",
              "pos": "verb",
              "gloss": "to flow"
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
              "surface": "الرَّمْلِ",
              "lemma": "رمل",
              "features": "def.gen",
              "root": "ر م ل",
              "pos": "noun",
              "gloss": "sand"
            }
          ]
        },
        {
          "id": "qr1-20-007",
          "page": 84,
          "ar": "نَغْتَسِلُ فِيْ هٰذَا النَّهْرِ وَنَسْبَحُ وَنَلْعَبُ وَنَشْرَبُ مِنْ مَائِهِ النَّقِيِّ ،",
          "en": "we bathe in this river, swim, play, and drink from its clear water,",
          "tokens": [
            {
              "surface": "نَغْتَسِلُ",
              "lemma": "اغتسل",
              "features": "impf.1p",
              "root": "غ س ل",
              "pos": "verb",
              "gloss": "to bathe, wash oneself"
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
              "gloss": "this"
            },
            {
              "surface": "النَّهْرِ",
              "lemma": "نهر",
              "features": "def.gen",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            },
            {
              "surface": "وَنَسْبَحُ",
              "lemma": "سبح",
              "features": "conj+impf.1p",
              "root": "س ب ح",
              "pos": "verb",
              "gloss": "to swim"
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
              "surface": "وَنَشْرَبُ",
              "lemma": "شرب",
              "features": "conj+impf.1p",
              "root": "ش ر ب",
              "pos": "verb",
              "gloss": "to drink"
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
              "surface": "مَائِهِ",
              "lemma": "ماء",
              "features": "gen+3ms",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            },
            {
              "surface": "النَّقِيِّ",
              "lemma": "نقي",
              "features": "def.gen",
              "root": "ن ق ي",
              "pos": "adj",
              "gloss": "clean, pure"
            }
          ]
        },
        {
          "id": "qr1-20-008",
          "page": 84,
          "ar": "وَنَرَىٰ السَّمَكَ يَجْرِيْ مِنْ هُنَا وَهُنَا ،",
          "en": "and we see the fish darting here and there,",
          "tokens": [
            {
              "surface": "وَنَرَىٰ",
              "lemma": "رأى",
              "features": "conj+impf.1p",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "السَّمَكَ",
              "lemma": "سمك",
              "features": "def.acc",
              "root": "س م ك",
              "pos": "noun",
              "gloss": "fish"
            },
            {
              "surface": "يَجْرِيْ",
              "lemma": "جرى",
              "features": "impf.3ms",
              "root": "ج ر ي",
              "pos": "verb",
              "gloss": "to dart, move"
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
              "surface": "هُنَا",
              "lemma": "هنا",
              "features": "adv",
              "root": "",
              "pos": "adv",
              "gloss": "here"
            },
            {
              "surface": "وَهُنَا",
              "lemma": "هنا",
              "features": "conj+adv",
              "root": "",
              "pos": "adv",
              "gloss": "here"
            }
          ]
        },
        {
          "id": "qr1-20-009",
          "page": 84,
          "ar": "وَنَرَىٰ الصَّدَفَ فِيْ قَعْرِ النَّهْرِ لِأَنَّ الْمَاءَ نَقِيٌّ شَفَّافٌ ،",
          "en": "and we see the shells at the river's bottom, because the water is clear and transparent,",
          "tokens": [
            {
              "surface": "وَنَرَىٰ",
              "lemma": "رأى",
              "features": "conj+impf.1p",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
            },
            {
              "surface": "الصَّدَفَ",
              "lemma": "صدف",
              "features": "def.acc",
              "root": "ص د ف",
              "pos": "noun",
              "gloss": "shells"
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
              "surface": "قَعْرِ",
              "lemma": "قعر",
              "features": "constr.gen",
              "root": "ق ع ر",
              "pos": "noun",
              "gloss": "bottom, depth"
            },
            {
              "surface": "النَّهْرِ",
              "lemma": "نهر",
              "features": "def.gen",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            },
            {
              "surface": "لِأَنَّ",
              "lemma": "لأن",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "because"
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
              "surface": "نَقِيٌّ",
              "lemma": "نقي",
              "features": "indef.nom",
              "root": "ن ق ي",
              "pos": "adj",
              "gloss": "clean, pure"
            },
            {
              "surface": "شَفَّافٌ",
              "lemma": "شفاف",
              "features": "indef.nom",
              "root": "ش ف ف",
              "pos": "adj",
              "gloss": "transparent, clear"
            }
          ]
        },
        {
          "id": "qr1-20-010",
          "page": 84,
          "ar": "وَقَدْ تَعَلَّمْنَا السِّبَاحَةَ وَنَحْنُ صِغَارٌ ،",
          "en": "and we learned swimming while we were young,",
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
              "surface": "تَعَلَّمْنَا",
              "lemma": "تعلم",
              "features": "perf.1p",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to learn"
            },
            {
              "surface": "السِّبَاحَةَ",
              "lemma": "سباحة",
              "features": "def.acc",
              "root": "س ب ح",
              "pos": "noun",
              "gloss": "swimming"
            },
            {
              "surface": "وَنَحْنُ",
              "lemma": "نحن",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "we"
            },
            {
              "surface": "صِغَارٌ",
              "lemma": "صغير",
              "features": "indef.nom.pl",
              "root": "ص غ ر",
              "pos": "adj",
              "gloss": "young, small"
            }
          ]
        },
        {
          "id": "qr1-20-011",
          "page": 84,
          "ar": "فَإِذَا كَانَتْ أَيَّامُ الْمَطَرِ فَاضَ النَّهْرُ ،",
          "en": "and when the rainy days came, the river would flood,",
          "tokens": [
            {
              "surface": "فَإِذَا",
              "lemma": "إذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "when, if"
            },
            {
              "surface": "كَانَتْ",
              "lemma": "كان",
              "features": "perf.3fs",
              "root": "ك و ن",
              "pos": "verb",
              "gloss": "to be"
            },
            {
              "surface": "أَيَّامُ",
              "lemma": "يوم",
              "features": "nom.constr.pl",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "الْمَطَرِ",
              "lemma": "مطر",
              "features": "def.gen",
              "root": "م ط ر",
              "pos": "noun",
              "gloss": "rain"
            },
            {
              "surface": "فَاضَ",
              "lemma": "فاض",
              "features": "perf.3ms",
              "root": "ف ي ض",
              "pos": "verb",
              "gloss": "to overflow, flood"
            },
            {
              "surface": "النَّهْرُ",
              "lemma": "نهر",
              "features": "def.nom",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            }
          ]
        },
        {
          "id": "qr1-20-012",
          "page": 84,
          "ar": "وَكَانَ عَرْضٌ كَبِيْرٌ عَبَرْنَا هٰذَا النَّهْرَ وَتَسَابَقْنَا فِي السِّبَاحَةِ .",
          "en": "and its breadth would grow great, and we would cross this river and race each other swimming.",
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
              "surface": "عَرْضٌ",
              "lemma": "عرض",
              "features": "indef.nom",
              "root": "ع ر ض",
              "pos": "noun",
              "gloss": "width, breadth"
            },
            {
              "surface": "كَبِيْرٌ",
              "lemma": "كبير",
              "features": "indef.nom",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            },
            {
              "surface": "عَبَرْنَا",
              "lemma": "عبر",
              "features": "perf.1p",
              "root": "ع ب ر",
              "pos": "verb",
              "gloss": "to cross"
            },
            {
              "surface": "هٰذَا",
              "lemma": "هذا",
              "features": "dem",
              "root": "",
              "pos": "dem",
              "gloss": "this"
            },
            {
              "surface": "النَّهْرَ",
              "lemma": "نهر",
              "features": "def.acc",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            },
            {
              "surface": "وَتَسَابَقْنَا",
              "lemma": "سابق",
              "features": "conj+perf.1p",
              "root": "س ب ق",
              "pos": "verb",
              "gloss": "to race, compete against"
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
              "surface": "السِّبَاحَةِ",
              "lemma": "سباحة",
              "features": "def.gen",
              "root": "س ب ح",
              "pos": "noun",
              "gloss": "swimming"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "أَيْنَ يَجْرِيْ النَّهْرُ؟",
          "options": [
            "مِنْ تَحْتِ الْقَرْيَةِ",
            "فَوْقَ الْقَرْيَةِ",
            "بَعِيْداً عَنِ الْقَرْيَةِ"
          ],
          "answer": 0,
          "qEn": "Where does the river flow?",
          "optionsEn": [
            "Beneath the village",
            "Above the village",
            "Far from the village"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "The narrator observes that many townspeople, grown adults, cannot swim and are very afraid of the water -- they never go into the river.",
      "sentences": [
        {
          "id": "qr1-20-013",
          "page": 84,
          "ar": "وَأَرَىٰ كَثِيْراً مِنْ أَهْلِ الْبَلَدِ لَا يَعْرِفُوْنَ السِّبَاحَةَ وَهُمْ كِبَارٌ وَيَخَافُوْنَ الْمَاءَ جِدّاً ،",
          "en": "I see many of the townspeople -- grown adults -- who do not know how to swim and are very afraid of the water,",
          "tokens": [
            {
              "surface": "وَأَرَىٰ",
              "lemma": "رأى",
              "features": "conj+impf.1s",
              "root": "ر أ ي",
              "pos": "verb",
              "gloss": "to see"
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
              "features": "constr.gen",
              "root": "أ ه ل",
              "pos": "noun",
              "gloss": "people, family, folk"
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
              "gloss": "not; no"
            },
            {
              "surface": "يَعْرِفُوْنَ",
              "lemma": "عرف",
              "features": "impf.3mp",
              "root": "ع ر ف",
              "pos": "verb",
              "gloss": "to know, recognize"
            },
            {
              "surface": "السِّبَاحَةَ",
              "lemma": "سباحة",
              "features": "def.acc",
              "root": "س ب ح",
              "pos": "noun",
              "gloss": "swimming"
            },
            {
              "surface": "وَهُمْ",
              "lemma": "هم",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "they (m.)"
            },
            {
              "surface": "كِبَارٌ",
              "lemma": "كبير",
              "features": "indef.nom.pl",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            },
            {
              "surface": "وَيَخَافُوْنَ",
              "lemma": "خاف",
              "features": "conj+impf.3mp",
              "root": "خ و ف",
              "pos": "verb",
              "gloss": "to fear"
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
              "surface": "جِدّاً",
              "lemma": "جدا",
              "features": "acc",
              "root": "",
              "pos": "adv",
              "gloss": "very"
            }
          ]
        },
        {
          "id": "qr1-20-014",
          "page": 84,
          "ar": "وَلَا يَدْخُلُوْنَ النَّهْرَ .",
          "en": "and they never enter the river.",
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
              "surface": "يَدْخُلُوْنَ",
              "lemma": "دخل",
              "features": "impf.3mp",
              "root": "د خ ل",
              "pos": "verb",
              "gloss": "to enter"
            },
            {
              "surface": "النَّهْرَ",
              "lemma": "نهر",
              "features": "def.acc",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا لَا يَدْخُلُ بَعْضُ أَهْلِ الْبَلَدِ النَّهْرَ؟",
          "options": [
            "لِأَنَّهُمْ لَا يَعْرِفُوْنَ السِّبَاحَةَ وَيَخَافُوْنَ الْمَاءَ",
            "لِأَنَّ الْمَاءَ بَارِدٌ جِدّاً",
            "لِأَنَّ النَّهْرَ بَعِيْدٌ عَنِ الْبَلَدِ"
          ],
          "answer": 0,
          "qEn": "Why do some of the townspeople not enter the river?",
          "optionsEn": [
            "Because they don't know how to swim and are afraid of the water",
            "Because the water is very cold",
            "Because the river is far from town"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "Once a friend from town came, and the narrator and his companions invited him into the river to bathe and swim; he admitted he was afraid of the water and could not swim, so they encouraged him not to fear, since they were with him -- he took heart, went in, and tried to swim, but sank toward the bottom, so they took him by the hand and pulled him up, and he came out having swallowed some water.",
      "sentences": [
        {
          "id": "qr1-20-015",
          "page": 84,
          "ar": "جَاءَ مَرَّةً صَدِيْقٌ لِيْ مِنَ الْبَلَدِ وَدَخَلْنَا النَّهْرَ وَقُلْنَا لَهُ:",
          "en": "Once a friend of mine from town came, and we went into the river and said to him:",
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
              "surface": "مَرَّةً",
              "lemma": "مرة",
              "features": "indef.acc",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occasion"
            },
            {
              "surface": "صَدِيْقٌ",
              "lemma": "صديق",
              "features": "indef.nom",
              "root": "ص د ق",
              "pos": "noun",
              "gloss": "friend"
            },
            {
              "surface": "لِيْ",
              "lemma": "ل",
              "features": "prep+1s",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
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
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
            },
            {
              "surface": "وَدَخَلْنَا",
              "lemma": "دخل",
              "features": "conj+perf.1p",
              "root": "د خ ل",
              "pos": "verb",
              "gloss": "to enter"
            },
            {
              "surface": "النَّهْرَ",
              "lemma": "نهر",
              "features": "def.acc",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
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
              "surface": "لَهُ",
              "lemma": "ل",
              "features": "prep+3ms",
              "root": "",
              "pos": "prep",
              "gloss": "for, to; belonging to"
            }
          ]
        },
        {
          "id": "qr1-20-016",
          "page": 84,
          "ar": "تَعَالَ يَا أَخِيْ وَاغْتَسِلْ وَاسْبَحْ ،",
          "en": "Come, my brother, and bathe and swim,",
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
              "features": "nom+1s",
              "root": "أ خ و",
              "pos": "noun",
              "gloss": "brother"
            },
            {
              "surface": "وَاغْتَسِلْ",
              "lemma": "اغتسل",
              "features": "conj+imp.2ms",
              "root": "غ س ل",
              "pos": "verb",
              "gloss": "to bathe, wash oneself"
            },
            {
              "surface": "وَاسْبَحْ",
              "lemma": "سبح",
              "features": "conj+imp.2ms",
              "root": "س ب ح",
              "pos": "verb",
              "gloss": "to swim"
            }
          ]
        },
        {
          "id": "qr1-20-017",
          "page": 84,
          "ar": "فَقَالَ: إِنِّيْ أَخَافُ الْمَاءَ وَلَا أَعْرِفُ السِّبَاحَةَ ،",
          "en": "He said: I am afraid of the water and do not know how to swim,",
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
              "surface": "إِنِّيْ",
              "lemma": "إن",
              "features": "part+1s",
              "root": "",
              "pos": "part",
              "gloss": "indeed, verily"
            },
            {
              "surface": "أَخَافُ",
              "lemma": "خاف",
              "features": "impf.1s",
              "root": "خ و ف",
              "pos": "verb",
              "gloss": "to fear"
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
              "surface": "وَلَا",
              "lemma": "لا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
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
              "surface": "السِّبَاحَةَ",
              "lemma": "سباحة",
              "features": "def.acc",
              "root": "س ب ح",
              "pos": "noun",
              "gloss": "swimming"
            }
          ]
        },
        {
          "id": "qr1-20-018",
          "page": 84,
          "ar": "فَشَجَّعْنَاهُ وَقُلْنَا: لَا تَخَفْ وَنَحْنُ مَعَكَ ،",
          "en": "So we encouraged him and said: Don't be afraid, we are with you,",
          "tokens": [
            {
              "surface": "فَشَجَّعْنَاهُ",
              "lemma": "شجع",
              "features": "conj+perf.1p+3ms",
              "root": "ش ج ع",
              "pos": "verb",
              "gloss": "to encourage"
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
              "surface": "لَا",
              "lemma": "لا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "not; no"
            },
            {
              "surface": "تَخَفْ",
              "lemma": "خاف",
              "features": "jussive.2ms",
              "root": "خ و ف",
              "pos": "verb",
              "gloss": "to fear"
            },
            {
              "surface": "وَنَحْنُ",
              "lemma": "نحن",
              "features": "conj+nom",
              "root": "",
              "pos": "noun",
              "gloss": "we"
            },
            {
              "surface": "مَعَكَ",
              "lemma": "مع",
              "features": "prep+2ms",
              "root": "",
              "pos": "prep",
              "gloss": "with"
            }
          ]
        },
        {
          "id": "qr1-20-019",
          "page": 84,
          "ar": "فَتَشَجَّعَ وَدَخَلَ الْمَاءَ وَأَرَادَ أَنْ يَسْبَحَ ،",
          "en": "So he took heart, went into the water, and wanted to swim,",
          "tokens": [
            {
              "surface": "فَتَشَجَّعَ",
              "lemma": "تشجع",
              "features": "conj+perf.3ms",
              "root": "ش ج ع",
              "pos": "verb",
              "gloss": "to take heart, become encouraged"
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
              "surface": "الْمَاءَ",
              "lemma": "ماء",
              "features": "def.acc",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            },
            {
              "surface": "وَأَرَادَ",
              "lemma": "أراد",
              "features": "conj+perf.3ms",
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
              "surface": "يَسْبَحَ",
              "lemma": "سبح",
              "features": "subj.3ms",
              "root": "س ب ح",
              "pos": "verb",
              "gloss": "to swim"
            }
          ]
        },
        {
          "id": "qr1-20-020",
          "page": 84,
          "ar": "وَلٰكِنْ ذَهَبَ إِلَى الْقَعْرِ ،",
          "en": "but he went down to the bottom,",
          "tokens": [
            {
              "surface": "وَلٰكِنْ",
              "lemma": "لكن",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "but"
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
              "surface": "إِلَى",
              "lemma": "إلى",
              "features": "prep",
              "root": "",
              "pos": "prep",
              "gloss": "to, towards"
            },
            {
              "surface": "الْقَعْرِ",
              "lemma": "قعر",
              "features": "def.gen",
              "root": "ق ع ر",
              "pos": "noun",
              "gloss": "bottom, depth"
            }
          ]
        },
        {
          "id": "qr1-20-021",
          "page": 84,
          "ar": "فَأَخَذْنَا بِيَدِهِ وَرَفَعْنَاهُ فَخَرَجَ وَقَدْ شَرِبَ الْمَاءَ .",
          "en": "so we took him by the hand and pulled him up, and he came out having swallowed the water.",
          "tokens": [
            {
              "surface": "فَأَخَذْنَا",
              "lemma": "أخذ",
              "features": "conj+perf.1p",
              "root": "أ خ ذ",
              "pos": "verb",
              "gloss": "to take"
            },
            {
              "surface": "بِيَدِهِ",
              "lemma": "يد",
              "features": "prep+gen+3ms",
              "root": "ي د ي",
              "pos": "noun",
              "gloss": "hand"
            },
            {
              "surface": "وَرَفَعْنَاهُ",
              "lemma": "رفع",
              "features": "conj+perf.1p+3ms",
              "root": "ر ف ع",
              "pos": "verb",
              "gloss": "to raise, lift"
            },
            {
              "surface": "فَخَرَجَ",
              "lemma": "خرج",
              "features": "conj+perf.3ms",
              "root": "خ ر ج",
              "pos": "verb",
              "gloss": "to go out"
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
              "surface": "شَرِبَ",
              "lemma": "شرب",
              "features": "perf.3ms",
              "root": "ش ر ب",
              "pos": "verb",
              "gloss": "to drink"
            },
            {
              "surface": "الْمَاءَ",
              "lemma": "ماء",
              "features": "def.acc",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الْأَصْدِقَاءُ حِيْنَ ذَهَبَ صَدِيْقُهُمْ إِلَى الْقَعْرِ؟",
          "options": [
            "أَخَذُوا بِيَدِهِ وَرَفَعُوْهُ",
            "تَرَكُوْهُ وَخَرَجُوا",
            "ضَحِكُوا عَلَيْهِ"
          ],
          "answer": 0,
          "qEn": "What did the friends do when their friend went down to the bottom?",
          "optionsEn": [
            "They took him by the hand and pulled him up",
            "They left him and got out",
            "They laughed at him"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "After that he came to bathe with them every day and kept learning to swim until he mastered it, crossing the river and growing bold enough to cross it twice.",
      "sentences": [
        {
          "id": "qr1-20-022",
          "page": 84,
          "ar": "وَكَانَ يَغْتَسِلُ مَعَنَا كُلَّ يَوْمٍ ،",
          "en": "And he would bathe with us every day,",
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
              "surface": "يَغْتَسِلُ",
              "lemma": "اغتسل",
              "features": "impf.3ms",
              "root": "غ س ل",
              "pos": "verb",
              "gloss": "to bathe, wash oneself"
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
            }
          ]
        },
        {
          "id": "qr1-20-023",
          "page": 84,
          "ar": "وَيَتَعَلَّمُ السِّبَاحَةَ حَتَّىٰ تَعَلَّمَهَا وَعَبَرَ النَّهْرَ فَتَشَجَّعَ وَعَبَرَ مَرَّتَيْنِ .",
          "en": "and keep learning to swim, until he mastered it and crossed the river, then grew bold and crossed it twice.",
          "tokens": [
            {
              "surface": "وَيَتَعَلَّمُ",
              "lemma": "تعلم",
              "features": "conj+impf.3ms",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to learn"
            },
            {
              "surface": "السِّبَاحَةَ",
              "lemma": "سباحة",
              "features": "def.acc",
              "root": "س ب ح",
              "pos": "noun",
              "gloss": "swimming"
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
              "surface": "تَعَلَّمَهَا",
              "lemma": "تعلم",
              "features": "perf.3ms+3fs",
              "root": "ع ل م",
              "pos": "verb",
              "gloss": "to learn"
            },
            {
              "surface": "وَعَبَرَ",
              "lemma": "عبر",
              "features": "conj+perf.3ms",
              "root": "ع ب ر",
              "pos": "verb",
              "gloss": "to cross"
            },
            {
              "surface": "النَّهْرَ",
              "lemma": "نهر",
              "features": "def.acc",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            },
            {
              "surface": "فَتَشَجَّعَ",
              "lemma": "تشجع",
              "features": "conj+perf.3ms",
              "root": "ش ج ع",
              "pos": "verb",
              "gloss": "to take heart, become encouraged"
            },
            {
              "surface": "وَعَبَرَ",
              "lemma": "عبر",
              "features": "conj+perf.3ms",
              "root": "ع ب ر",
              "pos": "verb",
              "gloss": "to cross"
            },
            {
              "surface": "مَرَّتَيْنِ",
              "lemma": "مرة",
              "features": "dual.acc",
              "root": "م ر ر",
              "pos": "noun",
              "gloss": "time, occasion"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ مَرَّةً عَبَرَ الصَّدِيْقُ النَّهْرَ بَعْدَ أَنْ تَعَلَّمَ السِّبَاحَةَ؟",
          "options": [
            "مَرَّتَيْنِ",
            "مَرَّةً وَاحِدَةً",
            "ثَلَاثَ مَرَّاتٍ"
          ],
          "answer": 0,
          "qEn": "How many times did the friend cross the river after learning to swim?",
          "optionsEn": [
            "Twice",
            "Once",
            "Three times"
          ]
        }
      ]
    },
    {
      "id": "p5",
      "en": "When heavy rains fall and the river floods, the village becomes almost an island, surrounded by water on three sides, with only one side left by which they go to town and buy provisions from the market.",
      "sentences": [
        {
          "id": "qr1-20-024",
          "page": 84,
          "ar": "وَإِذَا نَزَلَتْ أَمْطَارٌ كَثِيْرَةٌ وَفَاضَ النَّهْرُ أَصْبَحَتْ قَرْيَتِيْ شِبْهَ جَزِيْرَةٍ يُحِيْطُ بِهَا الْمَاءُ مِنْ ثَلَاثِ جِهَاتٍ ،",
          "en": "And when heavy rains fall and the river floods, my village becomes almost an island, with water surrounding it on three sides,",
          "tokens": [
            {
              "surface": "وَإِذَا",
              "lemma": "إذا",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "when, if"
            },
            {
              "surface": "نَزَلَتْ",
              "lemma": "نزل",
              "features": "perf.3fs",
              "root": "ن ز ل",
              "pos": "verb",
              "gloss": "to go down, come down"
            },
            {
              "surface": "أَمْطَارٌ",
              "lemma": "مطر",
              "features": "indef.nom.pl",
              "root": "م ط ر",
              "pos": "noun",
              "gloss": "rain"
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
              "surface": "وَفَاضَ",
              "lemma": "فاض",
              "features": "conj+perf.3ms",
              "root": "ف ي ض",
              "pos": "verb",
              "gloss": "to overflow, flood"
            },
            {
              "surface": "النَّهْرُ",
              "lemma": "نهر",
              "features": "def.nom",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            },
            {
              "surface": "أَصْبَحَتْ",
              "lemma": "أصبح",
              "features": "perf.3fs",
              "root": "ص ب ح",
              "pos": "verb",
              "gloss": "to become"
            },
            {
              "surface": "قَرْيَتِيْ",
              "lemma": "قرية",
              "features": "nom+1s",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            },
            {
              "surface": "شِبْهَ",
              "lemma": "شبه",
              "features": "acc.constr",
              "root": "ش ب ه",
              "pos": "noun",
              "gloss": "semblance of, quasi-"
            },
            {
              "surface": "جَزِيْرَةٍ",
              "lemma": "جزيرة",
              "features": "indef.gen",
              "root": "ج ز ر",
              "pos": "noun",
              "gloss": "island"
            },
            {
              "surface": "يُحِيْطُ",
              "lemma": "أحاط",
              "features": "impf.3ms",
              "root": "ح و ط",
              "pos": "verb",
              "gloss": "to surround, encircle"
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
              "surface": "الْمَاءُ",
              "lemma": "ماء",
              "features": "def.nom",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
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
              "surface": "ثَلَاثِ",
              "lemma": "ثلاث",
              "features": "gen.constr",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three"
            },
            {
              "surface": "جِهَاتٍ",
              "lemma": "جهة",
              "features": "indef.gen.pl",
              "root": "ج ه ة",
              "pos": "noun",
              "gloss": "side, direction"
            }
          ]
        },
        {
          "id": "qr1-20-025",
          "page": 85,
          "ar": "وَتَبْقَىٰ جِهَةٌ وَاحِدَةٌ نَذْهَبُ مِنْهَا إِلَى الْبَلَدِ وَنَشْتَرِي الْحَوَائِجَ مِنَ السُّوْقِ .",
          "en": "and only one side remains, by which we go to town and buy our provisions from the market.",
          "tokens": [
            {
              "surface": "وَتَبْقَىٰ",
              "lemma": "بقي",
              "features": "conj+impf.3fs",
              "root": "ب ق ي",
              "pos": "verb",
              "gloss": "to remain, be left"
            },
            {
              "surface": "جِهَةٌ",
              "lemma": "جهة",
              "features": "indef.nom",
              "root": "ج ه ة",
              "pos": "noun",
              "gloss": "side, direction"
            },
            {
              "surface": "وَاحِدَةٌ",
              "lemma": "واحد",
              "features": "indef.nom.f",
              "root": "و ح د",
              "pos": "adj",
              "gloss": "one, single"
            },
            {
              "surface": "نَذْهَبُ",
              "lemma": "ذهب",
              "features": "impf.1p",
              "root": "ذ ه ب",
              "pos": "verb",
              "gloss": "to go"
            },
            {
              "surface": "مِنْهَا",
              "lemma": "من",
              "features": "prep+3fs",
              "root": "",
              "pos": "prep",
              "gloss": "from"
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
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
            },
            {
              "surface": "وَنَشْتَرِي",
              "lemma": "اشترى",
              "features": "conj+impf.1p",
              "root": "ش ر ي",
              "pos": "verb",
              "gloss": "to buy"
            },
            {
              "surface": "الْحَوَائِجَ",
              "lemma": "حاجة",
              "features": "def.acc.pl",
              "root": "ح و ج",
              "pos": "noun",
              "gloss": "need; (pl.) provisions"
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
              "surface": "السُّوْقِ",
              "lemma": "سوق",
              "features": "def.gen",
              "root": "س و ق",
              "pos": "noun",
              "gloss": "market"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا تُصْبِحُ الْقَرْيَةُ إِذَا فَاضَ النَّهْرُ؟",
          "options": [
            "شِبْهَ جَزِيْرَةٍ",
            "صَحْرَاءَ",
            "سُوْقاً كَبِيْراً"
          ],
          "answer": 0,
          "qEn": "What does the village become when the river floods?",
          "optionsEn": [
            "Almost an island",
            "A desert",
            "A great market"
          ]
        }
      ]
    },
    {
      "id": "p6",
      "en": "One year there was a great flood -- the water rose, entered the houses, and people feared drowning, so they left their village for the town and did not return for a month.",
      "sentences": [
        {
          "id": "qr1-20-026",
          "page": 85,
          "ar": "وَفِي سَنَةٍ كَانَ فَيَضَانٌ عَظِيْمٌ ،",
          "en": "One year there was a great flood,",
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
              "surface": "سَنَةٍ",
              "lemma": "سنة",
              "features": "indef.gen",
              "root": "س ن و",
              "pos": "noun",
              "gloss": "year"
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
              "surface": "فَيَضَانٌ",
              "lemma": "فيضان",
              "features": "indef.nom",
              "root": "ف ي ض",
              "pos": "noun",
              "gloss": "flood"
            },
            {
              "surface": "عَظِيْمٌ",
              "lemma": "عظيم",
              "features": "indef.nom",
              "root": "ع ظ م",
              "pos": "adj",
              "gloss": "great, tremendous"
            }
          ]
        },
        {
          "id": "qr1-20-027",
          "page": 85,
          "ar": "فَاضَ الْمَاءُ وَدَخَلَ الْبُيُوتَ وَخَافَ النَّاسُ الْغَرَقَ وَتَرَكْنَا قَرْيَتَنَا وَذَهَبْنَا إِلَى الْبَلَدِ وَلَمْ نَرْجِعْ إِلَّا بَعْدَ شَهْرٍ .",
          "en": "the water rose and entered the houses, and the people feared drowning, so we left our village and went to town, and did not return until after a month.",
          "tokens": [
            {
              "surface": "فَاضَ",
              "lemma": "فاض",
              "features": "perf.3ms",
              "root": "ف ي ض",
              "pos": "verb",
              "gloss": "to overflow, flood"
            },
            {
              "surface": "الْمَاءُ",
              "lemma": "ماء",
              "features": "def.nom",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
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
              "surface": "الْبُيُوتَ",
              "lemma": "بيت",
              "features": "def.acc.pl",
              "root": "ب ي ت",
              "pos": "noun",
              "gloss": "house"
            },
            {
              "surface": "وَخَافَ",
              "lemma": "خاف",
              "features": "conj+perf.3ms",
              "root": "خ و ف",
              "pos": "verb",
              "gloss": "to fear"
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
              "surface": "الْغَرَقَ",
              "lemma": "غرق",
              "features": "def.acc",
              "root": "غ ر ق",
              "pos": "noun",
              "gloss": "drowning"
            },
            {
              "surface": "وَتَرَكْنَا",
              "lemma": "ترك",
              "features": "conj+perf.1p",
              "root": "ت ر ك",
              "pos": "verb",
              "gloss": "to leave, abandon"
            },
            {
              "surface": "قَرْيَتَنَا",
              "lemma": "قرية",
              "features": "acc+1p",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            },
            {
              "surface": "وَذَهَبْنَا",
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
              "surface": "الْبَلَدِ",
              "lemma": "بلد",
              "features": "def.gen",
              "root": "ب ل د",
              "pos": "noun",
              "gloss": "town, country"
            },
            {
              "surface": "وَلَمْ",
              "lemma": "لم",
              "features": "conj+part",
              "root": "",
              "pos": "part",
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "نَرْجِعْ",
              "lemma": "رجع",
              "features": "jussive.1p",
              "root": "ر ج ع",
              "pos": "verb",
              "gloss": "to return"
            },
            {
              "surface": "إِلَّا",
              "lemma": "إلا",
              "features": "part",
              "root": "",
              "pos": "part",
              "gloss": "except, only"
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
              "surface": "شَهْرٍ",
              "lemma": "شهر",
              "features": "indef.gen",
              "root": "ش ه ر",
              "pos": "noun",
              "gloss": "month"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ مُدَّةً غَابَ أَهْلُ الْقَرْيَةِ عَنْهَا فِي سَنَةِ الْفَيَضَانِ الْعَظِيْمِ؟",
          "options": [
            "شَهْراً",
            "أُسْبُوْعاً",
            "سَنَةً"
          ],
          "answer": 0,
          "qEn": "How long were the villagers away from it in the year of the great flood?",
          "optionsEn": [
            "A month",
            "A week",
            "A year"
          ]
        }
      ]
    },
    {
      "id": "p7",
      "en": "Many people and scholars visit the narrator's village, since it is a famous village where many scholars and righteous people were born.",
      "sentences": [
        {
          "id": "qr1-20-028",
          "page": 85,
          "ar": "وَيَزُوْرُ قَرْيَتِيْ كَثِيْرٌ مِنَ النَّاسِ وَالْعُلَمَاءِ لِأَنَّهَا قَرْيَةٌ مَشْهُوْرَةٌ وُلِدَ فِيْهَا كَثِيْرٌ مِنَ الْعُلَمَاءِ وَالصَّالِحِيْنَ .",
          "en": "Many people and scholars visit my village, because it is a famous village where many scholars and righteous people were born.",
          "tokens": [
            {
              "surface": "وَيَزُوْرُ",
              "lemma": "زار",
              "features": "conj+impf.3ms",
              "root": "ز و ر",
              "pos": "verb",
              "gloss": "to visit"
            },
            {
              "surface": "قَرْيَتِيْ",
              "lemma": "قرية",
              "features": "acc+1s",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
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
              "surface": "النَّاسِ",
              "lemma": "ناس",
              "features": "def.gen",
              "root": "ن و س",
              "pos": "noun",
              "gloss": "people"
            },
            {
              "surface": "وَالْعُلَمَاءِ",
              "lemma": "عالم",
              "features": "conj+def.gen.pl",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "scholar"
            },
            {
              "surface": "لِأَنَّهَا",
              "lemma": "لأن",
              "features": "part+3fs",
              "root": "",
              "pos": "part",
              "gloss": "because"
            },
            {
              "surface": "قَرْيَةٌ",
              "lemma": "قرية",
              "features": "indef.nom",
              "root": "ق ر ي",
              "pos": "noun",
              "gloss": "village"
            },
            {
              "surface": "مَشْهُوْرَةٌ",
              "lemma": "مشهور",
              "features": "indef.nom.f",
              "root": "ش ه ر",
              "pos": "adj",
              "gloss": "famous, well-known"
            },
            {
              "surface": "وُلِدَ",
              "lemma": "ولد",
              "features": "pass.perf.3ms",
              "root": "و ل د",
              "pos": "verb",
              "gloss": "to be born"
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
              "surface": "الْعُلَمَاءِ",
              "lemma": "عالم",
              "features": "def.gen.pl",
              "root": "ع ل م",
              "pos": "noun",
              "gloss": "scholar"
            },
            {
              "surface": "وَالصَّالِحِيْنَ",
              "lemma": "صالح",
              "features": "conj+def.gen.pl",
              "root": "ص ل ح",
              "pos": "adj",
              "gloss": "righteous, good"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا يَزُوْرُ كَثِيْرٌ مِنَ النَّاسِ هٰذِهِ الْقَرْيَةَ؟",
          "options": [
            "لِأَنَّهَا قَرْيَةٌ مَشْهُوْرَةٌ وُلِدَ فِيْهَا كَثِيْرٌ مِنَ الْعُلَمَاءِ",
            "لِأَنَّ فِيْهَا سُوْقاً كَبِيْراً",
            "لِأَنَّهَا قَرِيْبَةٌ مِنَ الْمَدِيْنَةِ"
          ],
          "answer": 0,
          "qEn": "Why do many people visit this village?",
          "optionsEn": [
            "Because it is a famous village where many scholars were born",
            "Because it has a great market",
            "Because it is close to the city"
          ]
        }
      ]
    },
    {
      "id": "p8",
      "en": "By the riverbank stands an old mosque built by their great-grandfather three hundred years ago; floodwater enters it every flood and lingers for many days, but it has never weakened.",
      "sentences": [
        {
          "id": "qr1-20-029",
          "page": 85,
          "ar": "وَعَلَىٰ شَاطِیءِ النَّهْرِ مَسْجِدٌ قَدِيْمٌ بَنَاهُ جَدُّنَا الْكَبِيْرُ مَضَىٰ عَلَيْهِ ثَلَاثُمِئَةِ سَنَةٍ ،",
          "en": "By the riverbank is an old mosque, built by our great-grandfather three hundred years ago,",
          "tokens": [
            {
              "surface": "وَعَلَىٰ",
              "lemma": "على",
              "features": "conj+prep",
              "root": "",
              "pos": "prep",
              "gloss": "upon, on"
            },
            {
              "surface": "شَاطِیءِ",
              "lemma": "شاطئ",
              "features": "constr.gen",
              "root": "ش ط أ",
              "pos": "noun",
              "gloss": "bank, shore"
            },
            {
              "surface": "النَّهْرِ",
              "lemma": "نهر",
              "features": "def.gen",
              "root": "ن ه ر",
              "pos": "noun",
              "gloss": "river"
            },
            {
              "surface": "مَسْجِدٌ",
              "lemma": "مسجد",
              "features": "indef.nom",
              "root": "س ج د",
              "pos": "noun",
              "gloss": "mosque"
            },
            {
              "surface": "قَدِيْمٌ",
              "lemma": "قديم",
              "features": "indef.nom",
              "root": "ق د م",
              "pos": "adj",
              "gloss": "old, ancient"
            },
            {
              "surface": "بَنَاهُ",
              "lemma": "بنى",
              "features": "perf.3ms+3ms",
              "root": "ب ن ي",
              "pos": "verb",
              "gloss": "to build"
            },
            {
              "surface": "جَدُّنَا",
              "lemma": "جد",
              "features": "nom+1p",
              "root": "ج د د",
              "pos": "noun",
              "gloss": "grandfather"
            },
            {
              "surface": "الْكَبِيْرُ",
              "lemma": "كبير",
              "features": "def.nom",
              "root": "ك ب ر",
              "pos": "adj",
              "gloss": "big, large"
            },
            {
              "surface": "مَضَىٰ",
              "lemma": "مضى",
              "features": "perf.3ms",
              "root": "م ض ي",
              "pos": "verb",
              "gloss": "to pass, elapse"
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
              "surface": "ثَلَاثُمِئَةِ",
              "lemma": "ثلاثمئة",
              "features": "nom.constr",
              "root": "ث ل ث",
              "pos": "num",
              "gloss": "three hundred"
            },
            {
              "surface": "سَنَةٍ",
              "lemma": "سنة",
              "features": "indef.gen",
              "root": "س ن و",
              "pos": "noun",
              "gloss": "year"
            }
          ]
        },
        {
          "id": "qr1-20-030",
          "page": 85,
          "ar": "وَيَدْخُلُ فِيْهِ الْمَاءُ فِيْ كُلِّ فَيَضَانٍ وَيَمْكُثُ فِيْهِ الْمَاءُ أَيَّاماً طَوِيْلَةً ،",
          "en": "the water enters it in every flood and lingers there for many days,",
          "tokens": [
            {
              "surface": "وَيَدْخُلُ",
              "lemma": "دخل",
              "features": "conj+impf.3ms",
              "root": "د خ ل",
              "pos": "verb",
              "gloss": "to enter"
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
              "surface": "الْمَاءُ",
              "lemma": "ماء",
              "features": "def.nom",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
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
              "surface": "كُلِّ",
              "lemma": "كل",
              "features": "gen.constr",
              "root": "ك ل ل",
              "pos": "noun",
              "gloss": "each, every, all"
            },
            {
              "surface": "فَيَضَانٍ",
              "lemma": "فيضان",
              "features": "indef.gen",
              "root": "ف ي ض",
              "pos": "noun",
              "gloss": "flood"
            },
            {
              "surface": "وَيَمْكُثُ",
              "lemma": "مكث",
              "features": "conj+impf.3ms",
              "root": "م ك ث",
              "pos": "verb",
              "gloss": "to stay, remain"
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
              "surface": "الْمَاءُ",
              "lemma": "ماء",
              "features": "def.nom",
              "root": "م و ه",
              "pos": "noun",
              "gloss": "water"
            },
            {
              "surface": "أَيَّاماً",
              "lemma": "يوم",
              "features": "acc.pl",
              "root": "ي و م",
              "pos": "noun",
              "gloss": "day"
            },
            {
              "surface": "طَوِيْلَةً",
              "lemma": "طويل",
              "features": "indef.acc.f",
              "root": "ط و ل",
              "pos": "adj",
              "gloss": "long, extended"
            }
          ]
        },
        {
          "id": "qr1-20-031",
          "page": 85,
          "ar": "وَلٰكِنَّهُ لَمْ يَضْعُفْ .",
          "en": "but it has never weakened.",
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
              "gloss": "not (+ jussive; past negation)"
            },
            {
              "surface": "يَضْعُفْ",
              "lemma": "ضعف",
              "features": "jussive.3ms",
              "root": "ض ع ف",
              "pos": "verb",
              "gloss": "to weaken, become weak"
            }
          ]
        }
      ],
      "checks": [
        {
          "q": "كَمْ سَنَةً مَضَتْ عَلَى الْمَسْجِدِ الْقَدِيْمِ؟",
          "options": [
            "ثَلَاثُمِئَةِ سَنَةٍ",
            "مِئَةُ سَنَةٍ",
            "خَمْسُوْنَ سَنَةً"
          ],
          "answer": 0,
          "qEn": "How many years has passed for the old mosque?",
          "optionsEn": [
            "Three hundred years",
            "One hundred years",
            "Fifty years"
          ]
        }
      ]
    }
  ],
  "workshop": {
    "cloze": [
      {
        "type": "cloze",
        "pre": "قَرْيَتِيْ جَمِيْلَةٌ فِيْ وَسَطِ حُقُولٍ وَبَسَاتِيْنَ كَأَنَّهَا جَزِيْرَةٌ فِي بَحْرٍ",
        "post": "",
        "en": "My village is beautiful, amid fields and orchards, as if it were an island in a green sea.",
        "options": [
          "أَخْضَرَ",
          "أَخْضَرُ",
          "أَخْضَراً",
          "الْأَخْضَرِ"
        ],
        "answer": 0,
        "rationales": [
          "genitive indefinite -- adjective agreeing with بَحْرٍ after the preposition فِي.",
          "nominative -- wrong case for an adjective governed by a preposition.",
          "accusative -- wrong case; not a direct object or adverbial.",
          "definite -- wrong definiteness; the sea is unspecified."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَيَجْرِيْ مِنْ تَحْتِ الْقَرْيَةِ نَهْرٌ مَاؤُهُ",
        "post": "شَفَّافٌ",
        "en": "and a river with clear, transparent water flows beneath the village.",
        "options": [
          "نَقِيٌّ",
          "نَقِيّاً",
          "نَقِيٍّ",
          "النَّقِيُّ"
        ],
        "answer": 0,
        "rationales": [
          "nominative indefinite -- predicate adjective agreeing with the nominative subject مَاؤُهُ.",
          "accusative -- wrong case for a predicate adjective here.",
          "genitive -- wrong case; nothing governs a genitive here.",
          "definite -- wrong definiteness; a predicate describing an already-definite subject stays indefinite."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَقَدْ تَعَلَّمْنَا",
        "post": "وَنَحْنُ صِغَارٌ",
        "en": "and we learned swimming while we were young.",
        "options": [
          "السِّبَاحَةَ",
          "السِّبَاحَةُ",
          "السِّبَاحَةِ",
          "سِبَاحَةً"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- direct object of تَعَلَّمْنَا.",
          "nominative -- wrong case for a direct object.",
          "genitive -- wrong case; not governed by a preposition here.",
          "indefinite -- wrong definiteness; swimming as a known skill takes the article."
        ]
      },
      {
        "type": "cloze",
        "pre": "فَإِذَا كَانَتْ أَيَّامُ الْمَطَرِ فَاضَ",
        "post": "،",
        "en": "and when the rainy days came, the river would flood,",
        "options": [
          "النَّهْرُ",
          "النَّهْرَ",
          "النَّهْرِ",
          "نَهْرٌ"
        ],
        "answer": 0,
        "rationales": [
          "nominative -- subject of the verb فَاضَ.",
          "accusative -- wrong case for the subject.",
          "genitive -- wrong case; not governed by a preposition here.",
          "indefinite -- wrong definiteness; a specific, already-mentioned river."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَأَرَىٰ كَثِيْراً مِنْ أَهْلِ الْبَلَدِ لَا يَعْرِفُوْنَ",
        "post": "وَهُمْ كِبَارٌ",
        "en": "I see many of the townspeople -- grown adults -- who do not know how to swim.",
        "options": [
          "السِّبَاحَةَ",
          "السِّبَاحَةُ",
          "السِّبَاحَةِ",
          "سِبَاحَةً"
        ],
        "answer": 0,
        "rationales": [
          "accusative -- direct object of يَعْرِفُوْنَ.",
          "nominative -- wrong case for a direct object.",
          "genitive -- wrong case; not governed by a preposition here.",
          "indefinite -- wrong definiteness; swimming as a known skill takes the article."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَإِذَا نَزَلَتْ أَمْطَارٌ كَثِيْرَةٌ وَفَاضَ النَّهْرُ أَصْبَحَتْ قَرْيَتِيْ شِبْهَ جَزِيْرَةٍ يُحِيْطُ بِهَا الْمَاءُ مِنْ ثَلَاثِ",
        "post": "،",
        "en": "my village becomes almost an island, with water surrounding it on three sides,",
        "options": [
          "جِهَاتٍ",
          "جِهَاتٌ",
          "جِهَاتُ",
          "الْجِهَاتِ"
        ],
        "answer": 0,
        "rationales": [
          "genitive plural indefinite -- specifier after the construct ثَلَاثِ.",
          "nominative -- wrong case after a construct head.",
          "construct nominative -- wrong case and form after a construct head.",
          "definite -- wrong definiteness; an unspecified three of the sides."
        ]
      },
      {
        "type": "cloze",
        "pre": "وَعَلَىٰ شَاطِیءِ النَّهْرِ مَسْجِدٌ قَدِيْمٌ بَنَاهُ جَدُّنَا الْكَبِيْرُ مَضَىٰ عَلَيْهِ ثَلَاثُمِئَةِ",
        "post": "،",
        "en": "By the riverbank is an old mosque, built by our great-grandfather three hundred years ago,",
        "options": [
          "سَنَةٍ",
          "سَنَةٌ",
          "سَنَةً",
          "السَّنَةِ"
        ],
        "answer": 0,
        "rationales": [
          "genitive singular -- specifier after the hundreds-construct ثَلَاثُمِئَةِ.",
          "nominative -- wrong case for a construct specifier.",
          "accusative -- wrong case for a construct specifier.",
          "definite -- wrong definiteness; an unspecified count of years."
        ]
      }
    ],
    "shift": [
      {
        "type": "shift",
        "base": "نَغْتَسِلُ فِيْ هٰذَا النَّهْرِ وَنَسْبَحُ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنَا",
        "targetEn": "I",
        "options": [
          "أَغْتَسِلُ فِيْ هٰذَا النَّهْرِ وَأَسْبَحُ",
          "نَغْتَسِلُ فِيْ هٰذَا النَّهْرِ وَنَسْبَحُ",
          "تَغْتَسِلُ فِيْ هٰذَا النَّهْرِ وَتَسْبَحُ",
          "يَغْتَسِلُ فِيْ هٰذَا النَّهْرِ وَيَسْبَحُ"
        ],
        "answer": 0,
        "rationales": [
          "1st singular imperfect throughout -- I bathe in this river and swim.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَيَخَافُوْنَ الْمَاءَ جِدّاً",
        "pre": "",
        "post": "",
        "targetPerson": "هِيَ",
        "targetEn": "she",
        "options": [
          "وَتَخَافُ الْمَاءَ جِدّاً",
          "وَيَخَافُوْنَ الْمَاءَ جِدّاً",
          "وَيَخَافُ الْمَاءَ جِدّاً",
          "وَتَخَافِيْنَ الْمَاءَ جِدّاً"
        ],
        "answer": 0,
        "rationales": [
          "3rd fem. singular imperfect -- she is very afraid of the water.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "فَتَشَجَّعَ وَدَخَلَ الْمَاءَ",
        "pre": "",
        "post": "",
        "targetPerson": "هُمْ",
        "targetEn": "they (m.)",
        "options": [
          "فَتَشَجَّعُوا وَدَخَلُوا الْمَاءَ",
          "فَتَشَجَّعَ وَدَخَلَ الْمَاءَ",
          "فَتَشَجَّعَتْ وَدَخَلَتِ الْمَاءَ",
          "فَتَشَجَّعْنَا وَدَخَلْنَا الْمَاءَ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. plural perfect throughout -- they took heart and went into the water.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَكَانَ يَغْتَسِلُ مَعَنَا كُلَّ يَوْمٍ",
        "pre": "",
        "post": "",
        "targetPerson": "أَنْتِ",
        "targetEn": "you (f. sg.)",
        "options": [
          "وَكُنْتِ تَغْتَسِلِيْنَ مَعَنَا كُلَّ يَوْمٍ",
          "وَكَانَ يَغْتَسِلُ مَعَنَا كُلَّ يَوْمٍ",
          "وَكَانَتْ تَغْتَسِلُ مَعَنَا كُلَّ يَوْمٍ",
          "وَكُنْتَ تَغْتَسِلُ مَعَنَا كُلَّ يَوْمٍ"
        ],
        "answer": 0,
        "rationales": [
          "2nd fem. singular throughout, كان shifting to كُنْتِ -- you used to bathe with us every day.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَتَرَكْنَا قَرْيَتَنَا وَذَهَبْنَا إِلَى الْبَلَدِ",
        "pre": "",
        "post": "",
        "targetPerson": "هُوَ",
        "targetEn": "he",
        "options": [
          "وَتَرَكَ قَرْيَتَهُ وَذَهَبَ إِلَى الْبَلَدِ",
          "وَتَرَكْنَا قَرْيَتَنَا وَذَهَبْنَا إِلَى الْبَلَدِ",
          "وَتَرَكَتْ قَرْيَتَهَا وَذَهَبَتْ إِلَى الْبَلَدِ",
          "وَتَرَكُوا قَرْيَتَهُمْ وَذَهَبُوا إِلَى الْبَلَدِ"
        ],
        "answer": 0,
        "rationales": [
          "3rd masc. singular throughout, matching possessive and verb -- he left his village and went to town.",
          "",
          "",
          ""
        ]
      },
      {
        "type": "shift",
        "base": "وَأَرَىٰ كَثِيْراً مِنْ أَهْلِ الْبَلَدِ لَا يَعْرِفُوْنَ السِّبَاحَةَ",
        "pre": "",
        "post": "",
        "targetPerson": "نَحْنُ",
        "targetEn": "we",
        "options": [
          "وَنَرَىٰ كَثِيْراً مِنْ أَهْلِ الْبَلَدِ لَا يَعْرِفُوْنَ السِّبَاحَةَ",
          "وَأَرَىٰ كَثِيْراً مِنْ أَهْلِ الْبَلَدِ لَا يَعْرِفُوْنَ السِّبَاحَةَ",
          "وَتَرَىٰ كَثِيْراً مِنْ أَهْلِ الْبَلَدِ لَا يَعْرِفُوْنَ السِّبَاحَةَ",
          "وَرَأَيْنَا كَثِيْراً مِنْ أَهْلِ الْبَلَدِ لَا يَعْرِفُوْنَ السِّبَاحَةَ"
        ],
        "answer": 0,
        "rationales": [
          "1st plural imperfect -- we see many of the townspeople who do not know how to swim.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

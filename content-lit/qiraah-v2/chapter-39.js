// القراءة الراشدة, volume two, chapter 39 (printed heading "٣٩") --
// الْحَنِيْنُ إِلَىٰ الشَّهَادَةِ (٢) -- "Yearning for Martyrdom (2)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 139-140 (PDF page
// index == printed page number). Page 139 opens fresh with the "(٣٩)"
// heading; page 140 ends with the "✳ ✳ ✳" divider partway down, confirming
// the chapter is exactly two pages (139-140); chapter 40 "كُنْ أَحَدَ
// السَّبْعَةِ (١)" begins fresh on 141. Direct continuation of ch38: before
// the Battle of Uhud, the Prophet ﷺ turns away underage volunteers,
// including Rafi' ibn Khadij (who stands on tiptoe to look older; his
// father intercedes; he is accepted) and Samurah ibn Jundub (initially
// rejected for being the same age as Rafi'; he protests that he could
// beat Rafi' in a wrestling match; he does, and is accepted); both fight
// at Uhud.
//
// Eighth of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch38.
//
// No within-chapter homograph clashes this time -- each bare lemma spelling
// is used in only one sense throughout. Of note: "صِغَر" (a noun, "youth,
// smallness") and "صَغِيْر" (the adjective "young, small") are distinct
// spellings once diacritics are stripped ("صغر" vs "صغير"), so they do not
// collide as dictionary keys and need no suffix.
export const CHAPTER = {
  id: "ch39",
  title: {
    ar: "الْحَنِيْنُ إِلَىٰ الشَّهَادَةِ (٢)",
    en: "Yearning for Martyrdom (2)"
  },
  pages: [139, 140],
  newWords: [
    "قتال", "غلام", "جهاد", "سبيل", "صغير", "تجاوز", "خامس", "عشرة", "عمر", "رد",
    "بلغ", "سن", "متاع", "شغل", "كبير", "أيضا", "راقب", "حرس", "ولد", "دون",
    "تطاول", "شدة", "شوق", "ظن", "ناس", "صغر", "ضعف", "عرف", "شفع", "أب",
    "رام", "أذن", "فرح", "مجاهد", "مصلى", "عيد", "لباس", "جديد", "آخر", "عرض",
    "بعد", "لو", "صارع", "صرع", "أمر", "مصارعة", "استحق", "سمح", "دخول", "صف",
    "اتباع", "خروج", "أجاز", "رضي", "رزق"
  ],
  lemmas: {
    "لما": { root: "", pos: "part", gloss: "when" },
    "خرج": { root: "خ ر ج", pos: "verb", gloss: "to go out" },
    "رسول": { root: "ر س ل", pos: "noun", gloss: "a messenger" },
    "الله": { root: "", pos: "proper", gloss: "Allah" },
    "إلى": { root: "", pos: "prep", gloss: "to" },
    "أحد": { root: "", pos: "proper", gloss: "Uhud" },
    "ل": { root: "", pos: "prep", gloss: "to, for; in order to" },
    "قتال": { root: "ق ت ل", pos: "noun", gloss: "fighting, to fight" },
    "قريش": { root: "", pos: "proper", gloss: "Quraysh" },
    "مع": { root: "", pos: "prep", gloss: "with" },
    "من": { root: "", pos: "prep", gloss: "from, of" },
    "مدينة": { root: "م د ن", pos: "proper", gloss: "Madinah" },
    "غلام": { root: "غ ل م", pos: "noun", gloss: "a boy, young man" },
    "أحب": { root: "ح ب ب", pos: "verb", gloss: "to love" },
    "جهاد": { root: "ج ه د", pos: "noun", gloss: "striving, jihad" },
    "في": { root: "", pos: "prep", gloss: "in" },
    "سبيل": { root: "س ب ل", pos: "noun", gloss: "a way, path" },
    "كان": { root: "ك و ن", pos: "verb", gloss: "to be" },
    "صغير": { root: "ص غ ر", pos: "adj", gloss: "young, small" },
    "لم": { root: "", pos: "part", gloss: "not (past)" },
    "تجاوز": { root: "ج و ز", pos: "verb", gloss: "to exceed, pass beyond" },
    "خامس": { root: "خ م س", pos: "num", gloss: "fifth" },
    "عشرة": { root: "ع ش ر", pos: "num", gloss: "-teen, ten" },
    "عمر": { root: "ع م ر", pos: "noun", gloss: "age" },
    "رد": { root: "ر د د", pos: "verb", gloss: "to turn back, reject" },
    "لأن": { root: "", pos: "conj", gloss: "because" },
    "بلغ": { root: "ب ل غ", pos: "verb", gloss: "to reach" },
    "سن": { root: "س ن ن", pos: "noun", gloss: "age" },
    "متاع": { root: "م ت ع", pos: "noun", gloss: "baggage, encumbrance" },
    "شغل": { root: "ش غ ل", pos: "verb", gloss: "to occupy, keep busy" },
    "كبير": { root: "ك ب ر", pos: "adj", gloss: "great; grown, adult (pl.)" },
    "أيضا": { root: "أ ي ض", pos: "adv", gloss: "also, too" },
    "راقب": { root: "ر ق ب", pos: "verb", gloss: "to watch over, keep an eye on", book_note: "رَاقَبَ يُرَاقِبُ: حَرَسَ وَلَاحَظَ." },
    "حرس": { root: "ح ر س", pos: "verb", gloss: "to guard" },
    "هؤلاء": { root: "", pos: "dem", gloss: "these" },
    "ولد": { root: "و ل د", pos: "noun", gloss: "a boy" },
    "اسم": { root: "س م و", pos: "noun", gloss: "a name" },
    "رافع": { root: "", pos: "proper", gloss: "Rafi'" },
    "ابن": { root: "ب ن ي", pos: "noun", gloss: "son of" },
    "خديج": { root: "", pos: "proper", gloss: "Khadij" },
    "هو": { root: "", pos: "noun", gloss: "he" },
    "دون": { root: "", pos: "prep", gloss: "under, less than" },
    "تطاول": { root: "ط و ل", pos: "verb", gloss: "to stretch oneself up" },
    "شدة": { root: "ش د د", pos: "noun", gloss: "intensity" },
    "شوق": { root: "ش و ق", pos: "noun", gloss: "longing, yearning" },
    "ظن": { root: "ظ ن ن", pos: "verb", gloss: "to think, suppose" },
    "ناس": { root: "ن و س", pos: "noun", gloss: "people" },
    "أن": { root: "", pos: "part", gloss: "that" },
    "قد": { root: "", pos: "part", gloss: "indeed, already" },
    "لا": { root: "", pos: "part", gloss: "not" },
    "فطن": { root: "ف ط ن", pos: "verb", gloss: "to notice, be aware" },
    "صغر": { root: "ص غ ر", pos: "noun", gloss: "youth, smallness" },
    "ضعف": { root: "ض ع ف", pos: "noun", gloss: "weakness" },
    "لكن": { root: "", pos: "conj", gloss: "but" },
    "عرف": { root: "ع ر ف", pos: "verb", gloss: "to know" },
    "شفع": { root: "ش ف ع", pos: "verb", gloss: "to intercede", book_note: "شَفَعَ يَشْفَعُ لَهُ إِلَىٰ فُلَانٍ: سَأَلَ فُلاناً التَّجَاوُزَ عَنْ ذَنْبِهِ." },
    "أب": { root: "أ ب و", pos: "noun", gloss: "father" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "يا": { root: "", pos: "part", gloss: "O" },
    "إن": { root: "", pos: "part", gloss: "indeed" },
    "رام": { root: "ر م ي", pos: "noun", gloss: "an archer, marksman" },
    "أذن": { root: "أ ذ ن", pos: "verb", gloss: "to permit, give permission" },
    "فرح": { root: "ف ر ح", pos: "verb", gloss: "to rejoice" },
    "كثير": { root: "ك ث ر", pos: "adj", gloss: "much, greatly" },
    "مجاهد": { root: "ج ه د", pos: "noun", gloss: "a fighter" },
    "أكثر": { root: "ك ث ر", pos: "adj", gloss: "more" },
    "سرور": { root: "س ر ر", pos: "noun", gloss: "delight, happiness" },
    "مصلى": { root: "ص ل و", pos: "noun", gloss: "a prayer-ground" },
    "يوم": { root: "ي و م", pos: "noun", gloss: "a day" },
    "عيد": { root: "ع ي د", pos: "noun", gloss: "Eid, a festival" },
    "لباس": { root: "ل ب س", pos: "noun", gloss: "clothing" },
    "جديد": { root: "ج د د", pos: "adj", gloss: "new" },
    "آخر": { root: "أ خ ر", pos: "adj", gloss: "another" },
    "سمرة": { root: "", pos: "proper", gloss: "Samurah" },
    "جندب": { root: "", pos: "proper", gloss: "Jundub" },
    "عرض": { root: "ع ر ض", pos: "verb", gloss: "to present, offer" },
    "على": { root: "", pos: "prep", gloss: "to, before" },
    "عن": { root: "", pos: "prep", gloss: "with, about" },
    "بعد": { root: "ب ع د", pos: "prep", gloss: "after" },
    "لو": { root: "", pos: "part", gloss: "if (hypothetical)" },
    "صارع": { root: "ص ر ع", pos: "verb", gloss: "to wrestle", book_note: "صَارَعَ يُصَارِعُ: غَالَبَ فِي الْمُصَارَعَةِ." },
    "صرع": { root: "ص ر ع", pos: "verb", gloss: "to throw down, defeat" },
    "أمر": { root: "أ م ر", pos: "verb", gloss: "to order, command" },
    "مصارعة": { root: "ص ر ع", pos: "noun", gloss: "wrestling" },
    "كما": { root: "", pos: "conj", gloss: "as, just as" },
    "استحق": { root: "ح ق ق", pos: "verb", gloss: "to deserve, earn the right" },
    "سمح": { root: "س م ح", pos: "verb", gloss: "to permit, allow" },
    "دخول": { root: "د خ ل", pos: "noun", gloss: "entering" },
    "صف": { root: "ص ف ف", pos: "noun", gloss: "a row, rank" },
    "أجاز": { root: "ج و ز", pos: "verb", gloss: "to permit, allow" },
    "خروج": { root: "خ ر ج", pos: "noun", gloss: "going out" },
    "قاتل": { root: "ق ت ل", pos: "verb", gloss: "to fight" },
    "رضي": { root: "ر ض و", pos: "verb", gloss: "to be pleased" },
    "رزق": { root: "ر ز ق", pos: "verb", gloss: "to grant, provide" },
    "اتباع": { root: "ت ب ع", pos: "noun", gloss: "following, emulation" }
  },
  paragraphs: [
    {
      en: "When the Messenger of Allah ﷺ went out to Uhud to fight Quraysh, some young boys who loved jihad in the way of Allah went out with him from Madinah, and they were young, not having passed fifteen years of age, so the Messenger of Allah ﷺ turned them back, because they were young and had not reached the age of fighting, for they would be like baggage, occupying the adults as well, who would have to watch over them and guard them.",
      sentences: [
        {
          id: "qr2-39-001",
          ar: "وَلَمَّا خَرَجَ رَسُوْلُ اللهِ ﷺ إِلَىٰ أُحُدٍ لِقِتَالِ قُرَيْشٍ",
          en: "When the Messenger of Allah ﷺ went out to Uhud to fight Quraysh,",
          tokens: [
            { surface: "وَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "when" },
            { surface: "خَرَجَ", lemma: "خرج", pos: "verb", features: "perf.3ms", root: "خ ر ج", gloss: "went out" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "أُحُدٍ", lemma: "أحد", pos: "proper", features: "gen", root: "", gloss: "Uhud" },
            { surface: "لِقِتَالِ", lemma: "قتال", pos: "noun", features: "prep+gen.constr", root: "ق ت ل", gloss: "to fight" },
            { surface: "قُرَيْشٍ", lemma: "قريش", pos: "proper", features: "gen", root: "", gloss: "Quraysh" }
          ]
        },
        {
          id: "qr2-39-002",
          ar: "خَرَجَ مَعَهُ مِنَ الْمَدِيْنَةِ غِلْمَانٌ يُحِبُّوْنَ الْجِهَادَ فِيْ سَبِيْلِ اللهِ،",
          en: "some young boys who loved jihad in the way of Allah went out with him from Madinah,",
          tokens: [
            { surface: "خَرَجَ", lemma: "خرج", pos: "verb", features: "perf.3ms", root: "خ ر ج", gloss: "went out" },
            { surface: "مَعَهُ", lemma: "مع", pos: "prep", features: "prep+3ms", root: "", gloss: "with him" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "proper", features: "def.gen", root: "م د ن", gloss: "Madinah" },
            { surface: "غِلْمَانٌ", lemma: "غلام", pos: "noun", features: "pl.indef.nom", root: "غ ل م", gloss: "young boys" },
            { surface: "يُحِبُّوْنَ", lemma: "أحب", pos: "verb", features: "impf.3mp", root: "ح ب ب", gloss: "who loved" },
            { surface: "الْجِهَادَ", lemma: "جهاد", pos: "noun", features: "def.acc", root: "ج ه د", gloss: "jihad" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "سَبِيْلِ", lemma: "سبيل", pos: "noun", features: "gen.constr", root: "س ب ل", gloss: "the way of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-39-003",
          ar: "وَكَانُوا صِغَاراً، لَمْ يَتَجَاوَزُوا الْخَامِسَةَ عَشَرَةَ مِنْ عُمُرِهِمْ،",
          en: "and they were young, not having passed fifteen years of age,",
          tokens: [
            { surface: "وَكَانُوا", lemma: "كان", pos: "verb", features: "conj+perf.3mp", root: "ك و ن", gloss: "and they were" },
            { surface: "صِغَاراً", lemma: "صغير", pos: "adj", features: "indef.acc.pl", root: "ص غ ر", gloss: "young" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَتَجَاوَزُوا", lemma: "تجاوز", pos: "verb", features: "juss.3mp", root: "ج و ز", gloss: "having passed" },
            { surface: "الْخَامِسَةَ", lemma: "خامس", pos: "num", features: "def.acc.f", root: "خ م س", gloss: "the fifteenth" },
            { surface: "عَشَرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "عُمُرِهِمْ", lemma: "عمر", pos: "noun", features: "gen+3mp", root: "ع م ر", gloss: "their age" }
          ]
        },
        {
          id: "qr2-39-004",
          ar: "فَرَدَّهُمْ رَسُوْلُ اللهِ ﷺ، لِأَنَّهُمْ صِغَارٌ لَمْ يَبْلُغُوْا سِنَّ الْقِتَالِ،",
          en: "so the Messenger of Allah ﷺ turned them back, because they were young and had not reached the age of fighting,",
          tokens: [
            { surface: "فَرَدَّهُمْ", lemma: "رد", pos: "verb", features: "conj+perf.3ms+3mp", root: "ر د د", gloss: "so turned them back" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "لِأَنَّهُمْ", lemma: "لأن", pos: "conj", features: "conj+3mp", root: "", gloss: "because they" },
            { surface: "صِغَارٌ", lemma: "صغير", pos: "adj", features: "indef.nom.pl", root: "ص غ ر", gloss: "young" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "يَبْلُغُوْا", lemma: "بلغ", pos: "verb", features: "juss.3mp", root: "ب ل غ", gloss: "reached" },
            { surface: "سِنَّ", lemma: "سن", pos: "noun", features: "acc.constr", root: "س ن ن", gloss: "the age of" },
            { surface: "الْقِتَالِ", lemma: "قتال", pos: "noun", features: "def.gen", root: "ق ت ل", gloss: "fighting" }
          ]
        },
        {
          id: "qr2-39-005",
          ar: "فَيَكُوْنُوْنَ كَالْمَتَاعِ، وَيَشْغَلُوْنَ الْكِبَارَ أَيْضاً يُرَاقِبُوْنَهُمْ وَيَحْرِسُوْنَهُمْ.",
          en: "for they would be like baggage, occupying the adults as well, who would have to watch over them and guard them.",
          tokens: [
            { surface: "فَيَكُوْنُوْنَ", lemma: "كان", pos: "verb", features: "conj+impf.3mp", root: "ك و ن", gloss: "for they would be" },
            { surface: "كَالْمَتَاعِ", lemma: "متاع", pos: "noun", features: "prep+def.gen", root: "م ت ع", gloss: "like baggage" },
            { surface: "وَيَشْغَلُوْنَ", lemma: "شغل", pos: "verb", features: "conj+impf.3mp", root: "ش غ ل", gloss: "and occupying" },
            { surface: "الْكِبَارَ", lemma: "كبير", pos: "adj", features: "def.acc.pl", root: "ك ب ر", gloss: "the adults" },
            { surface: "أَيْضاً", lemma: "أيضا", pos: "adv", features: "acc", root: "أ ي ض", gloss: "also" },
            { surface: "يُرَاقِبُوْنَهُمْ", lemma: "راقب", pos: "verb", features: "impf.3mp+3mp", root: "ر ق ب", gloss: "who watch over them" },
            { surface: "وَيَحْرِسُوْنَهُمْ", lemma: "حرس", pos: "verb", features: "conj+impf.3mp+3mp", root: "ح ر س", gloss: "and guard them" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا رَدَّ رَسُوْلُ اللهِ ﷺ الْغِلْمَانَ الصِّغَارَ؟",
          options: ["لِأَنَّهُمْ لَمْ يَبْلُغُوْا سِنَّ الْقِتَالِ وَيَشْغَلُوْنَ الْكِبَارَ", "لِأَنَّهُمْ لَا يُحِبُّوْنَ الْجِهَادَ", "لِأَنَّ أُحُداً بَعِيْدَةٌ جِدّاً"],
          answer: 0,
          qEn: "Why did the Messenger of Allah ﷺ turn back the young boys?",
          optionsEn: ["Because they had not reached fighting age and would occupy the adults", "Because they didn't love jihad", "Because Uhud was very far"]
        }
      ]
    },
    {
      en: "Among these boys was one named Rafi' ibn Khadij, and he was under fifteen years of age, and he would stretch himself up out of intense longing, so that people would think he was grown, as though he had reached the age of fighting, so that no one would notice his young age and weakness.",
      sentences: [
        {
          id: "qr2-39-006",
          ar: "وَكَانَ فِيْ هٰؤُلَاءِ الْغِلْمَانِ وَلَدٌ، اسْمُهُ رَافِعُ بْنُ خَدِيْجٍ،",
          en: "Among these boys was one named Rafi' ibn Khadij,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "among" },
            { surface: "هٰؤُلَاءِ", lemma: "هؤلاء", pos: "dem", features: "dem", root: "", gloss: "these" },
            { surface: "الْغِلْمَانِ", lemma: "غلام", pos: "noun", features: "pl.def.gen", root: "غ ل م", gloss: "boys" },
            { surface: "وَلَدٌ", lemma: "ولد", pos: "noun", features: "indef.nom", root: "و ل د", gloss: "a boy" },
            { surface: "اسْمُهُ", lemma: "اسم", pos: "noun", features: "nom+3ms", root: "س م و", gloss: "whose name" },
            { surface: "رَافِعُ", lemma: "رافع", pos: "proper", features: "nom", root: "", gloss: "Rafi'" },
            { surface: "بْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "خَدِيْجٍ", lemma: "خديج", pos: "proper", features: "gen", root: "", gloss: "Khadij" }
          ]
        },
        {
          id: "qr2-39-007",
          ar: "وَهُوَ دُوْنَ الْخَامِسَةَ عَشَرَةَ مِنْ سِنِّهِ،",
          en: "and he was under fifteen years of age,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom", root: "", gloss: "and he" },
            { surface: "دُوْنَ", lemma: "دون", pos: "prep", features: "prep", root: "", gloss: "under" },
            { surface: "الْخَامِسَةَ", lemma: "خامس", pos: "num", features: "def.acc.f", root: "خ م س", gloss: "the fifteenth" },
            { surface: "عَشَرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "سِنِّهِ", lemma: "سن", pos: "noun", features: "gen+3ms", root: "س ن ن", gloss: "his age" }
          ]
        },
        {
          id: "qr2-39-008",
          ar: "وَكَانَ يَتَطَاوَلُ مِنْ شِدَّةِ الشَّوْقِ، لِيَظُنَّ النَّاسُ أَنَّهُ كَبِيْرٌ،",
          en: "and he would stretch himself up out of intense longing, so that people would think he was grown,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and he was" },
            { surface: "يَتَطَاوَلُ", lemma: "تطاول", pos: "verb", features: "impf.3ms", root: "ط و ل", gloss: "stretching himself up" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "out of" },
            { surface: "شِدَّةِ", lemma: "شدة", pos: "noun", features: "gen.constr", root: "ش د د", gloss: "the intensity of" },
            { surface: "الشَّوْقِ", lemma: "شوق", pos: "noun", features: "def.gen", root: "ش و ق", gloss: "the longing" },
            { surface: "لِيَظُنَّ", lemma: "ظن", pos: "verb", features: "prep+subj.3ms", root: "ظ ن ن", gloss: "so that ... would think" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "كَبِيْرٌ", lemma: "كبير", pos: "adj", features: "indef.nom", root: "ك ب ر", gloss: "grown" }
          ]
        },
        {
          id: "qr2-39-009",
          ar: "قَدْ بَلَغَ سِنَّ الْقِتَالِ، فَلَا يُفْطَنُ لِصِغَرِ سِنِّهِ وَضَعْفِهِ.",
          en: "as though he had reached the age of fighting, so that no one would notice his young age and weakness.",
          tokens: [
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "بَلَغَ", lemma: "بلغ", pos: "verb", features: "perf.3ms", root: "ب ل غ", gloss: "he had reached" },
            { surface: "سِنَّ", lemma: "سن", pos: "noun", features: "acc.constr", root: "س ن ن", gloss: "the age of" },
            { surface: "الْقِتَالِ", lemma: "قتال", pos: "noun", features: "def.gen", root: "ق ت ل", gloss: "fighting" },
            { surface: "فَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "so not" },
            { surface: "يُفْطَنُ", lemma: "فطن", pos: "verb", features: "pass.impf.3ms", root: "ف ط ن", gloss: "would be noticed" },
            { surface: "لِصِغَرِ", lemma: "صغر", pos: "noun", features: "prep+gen.constr", root: "ص غ ر", gloss: "the youth of" },
            { surface: "سِنِّهِ", lemma: "سن", pos: "noun", features: "gen+3ms", root: "س ن ن", gloss: "his age" },
            { surface: "وَضَعْفِهِ", lemma: "ضعف", pos: "noun", features: "conj+gen+3ms", root: "ض ع ف", gloss: "and his weakness" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ كَانَ رَافِعٌ يُحَاوِلُ أَنْ يَبْدُوَ كَبِيْراً؟",
          options: ["كَانَ يَتَطَاوَلُ مِنْ شِدَّةِ الشَّوْقِ", "كَانَ يَلْبَسُ ثِيَاباً كَبِيْرَةً", "كَانَ يَتَكَلَّمُ بِصَوْتٍ غَلِيْظٍ"],
          answer: 0,
          qEn: "How did Rafi' try to appear grown-up?",
          optionsEn: ["He would stretch himself up out of intense longing", "He wore adult-sized clothes", "He spoke in a deep voice"]
        }
      ]
    },
    {
      en: "But the Messenger of Allah ﷺ turned him back, because he knew he was young and that he was stretching himself up, so his father interceded for him and said, \"O Messenger of Allah! My son Rafi' is a skilled archer,\" so the Messenger of Allah ﷺ gave permission.",
      sentences: [
        {
          id: "qr2-39-010",
          ar: "وَلٰكِنَّ رَسُوْلَ اللهِ ﷺ رَدَّهُ، لِأَنَّهُ عَرَفَ أَنَّهُ صَغِيْرٌ، وَأَنَّهُ يَتَطَاوَلُ،",
          en: "But the Messenger of Allah ﷺ turned him back, because he knew he was young and that he was stretching himself up,",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "رَدَّهُ", lemma: "رد", pos: "verb", features: "perf.3ms+3ms", root: "ر د د", gloss: "turned him back" },
            { surface: "لِأَنَّهُ", lemma: "لأن", pos: "conj", features: "conj+3ms", root: "", gloss: "because he" },
            { surface: "عَرَفَ", lemma: "عرف", pos: "verb", features: "perf.3ms", root: "ع ر ف", gloss: "knew" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "صَغِيْرٌ", lemma: "صغير", pos: "adj", features: "indef.nom", root: "ص غ ر", gloss: "young" },
            { surface: "وَأَنَّهُ", lemma: "أن", pos: "part", features: "conj+part+3ms", root: "", gloss: "and that he" },
            { surface: "يَتَطَاوَلُ", lemma: "تطاول", pos: "verb", features: "impf.3ms", root: "ط و ل", gloss: "was stretching himself up" }
          ]
        },
        {
          id: "qr2-39-011",
          ar: "فَشَفَعَ لَهُ أَبُوْهُ، وَقَالَ: يَا رَسُوْلَ اللهِ! إِنَّ ابْنِيْ رَافِعاً رَامٍ،",
          en: "so his father interceded for him and said, \"O Messenger of Allah! My son Rafi' is a skilled archer,\"",
          tokens: [
            { surface: "فَشَفَعَ", lemma: "شفع", pos: "verb", features: "conj+perf.3ms", root: "ش ف ع", gloss: "so interceded" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "أَبُوْهُ", lemma: "أب", pos: "noun", features: "nom+3ms", root: "أ ب و", gloss: "his father" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "ابْنِيْ", lemma: "ابن", pos: "noun", features: "acc+1cs", root: "ب ن ي", gloss: "my son" },
            { surface: "رَافِعاً", lemma: "رافع", pos: "proper", features: "acc", root: "", gloss: "Rafi'" },
            { surface: "رَامٍ", lemma: "رام", pos: "noun", features: "indef.nom", root: "ر م ي", gloss: "an archer" }
          ]
        },
        {
          id: "qr2-39-012",
          ar: "فَأَذِنَ رَسُوْلُ اللهِ ﷺ.",
          en: "so the Messenger of Allah ﷺ gave permission.",
          tokens: [
            { surface: "فَأَذِنَ", lemma: "أذن", pos: "verb", features: "conj+perf.3ms", root: "أ ذ ن", gloss: "so gave permission" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ أَبُو رَافِعٍ لِرَسُوْلِ اللهِ ﷺ؟",
          options: ["إِنَّ ابْنِيْ رَافِعاً رَامٍ", "إِنَّ ابْنِيْ قَوِيٌّ جِدّاً", "إِنَّ ابْنِيْ يُرِيْدُ اللَّعِبَ فَقَطْ"],
          answer: 0,
          qEn: "What did Rafi's father say to the Messenger of Allah ﷺ?",
          optionsEn: ["My son Rafi' is a skilled archer", "My son is very strong", "My son just wants to play"]
        }
      ]
    },
    {
      en: "Rafi' rejoiced greatly when the Messenger of Allah ﷺ gave permission, and he went out with the fighters, more delighted than boys going out to the prayer-ground on the day of Eid in new clothes.",
      sentences: [
        {
          id: "qr2-39-013",
          ar: "فَفَرِحَ رَافِعٌ كَثِيْراً لَمَّا أَذِنَ رَسُوْلُ اللهِ ﷺ،",
          en: "Rafi' rejoiced greatly when the Messenger of Allah ﷺ gave permission,",
          tokens: [
            { surface: "فَفَرِحَ", lemma: "فرح", pos: "verb", features: "conj+perf.3ms", root: "ف ر ح", gloss: "so rejoiced" },
            { surface: "رَافِعٌ", lemma: "رافع", pos: "proper", features: "nom", root: "", gloss: "Rafi'" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adj", features: "acc", root: "ك ث ر", gloss: "greatly" },
            { surface: "لَمَّا", lemma: "لما", pos: "part", features: "part", root: "", gloss: "when" },
            { surface: "أَذِنَ", lemma: "أذن", pos: "verb", features: "perf.3ms", root: "أ ذ ن", gloss: "gave permission" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-39-014",
          ar: "وَخَرَجَ مَعَ الْمُجَاهِدِيْنَ،",
          en: "and he went out with the fighters,",
          tokens: [
            { surface: "وَخَرَجَ", lemma: "خرج", pos: "verb", features: "conj+perf.3ms", root: "خ ر ج", gloss: "and went out" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "الْمُجَاهِدِيْنَ", lemma: "مجاهد", pos: "noun", features: "pl.def.gen", root: "ج ه د", gloss: "the fighters" }
          ]
        },
        {
          id: "qr2-39-015",
          ar: "وَهُوَ أَكْثَرُ سُرُوْراً مِنْ غِلْمَانٍ يَخْرُجُوْنَ إِلَىٰ الْمُصَلَّىٰ يَوْمَ الْعِيْدِ فِيْ لِبَاسٍ جَدِيْدٍ.",
          en: "more delighted than boys going out to the prayer-ground on the day of Eid in new clothes.",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom", root: "", gloss: "and he" },
            { surface: "أَكْثَرُ", lemma: "أكثر", pos: "adj", features: "nom", root: "ك ث ر", gloss: "more" },
            { surface: "سُرُوْراً", lemma: "سرور", pos: "noun", features: "indef.acc", root: "س ر ر", gloss: "delighted" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "غِلْمَانٍ", lemma: "غلام", pos: "noun", features: "pl.indef.gen", root: "غ ل م", gloss: "boys" },
            { surface: "يَخْرُجُوْنَ", lemma: "خرج", pos: "verb", features: "impf.3mp", root: "خ ر ج", gloss: "going out" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْمُصَلَّىٰ", lemma: "مصلى", pos: "noun", features: "def.gen", root: "ص ل و", gloss: "the prayer-ground" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "on the day of" },
            { surface: "الْعِيْدِ", lemma: "عيد", pos: "noun", features: "def.gen", root: "ع ي د", gloss: "Eid" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "لِبَاسٍ", lemma: "لباس", pos: "noun", features: "indef.gen", root: "ل ب س", gloss: "clothing" },
            { surface: "جَدِيْدٍ", lemma: "جديد", pos: "adj", features: "indef.gen", root: "ج د د", gloss: "new" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا شُبِّهَ فَرَحُ رَافِعٍ لَمَّا أَذِنَ لَهُ رَسُوْلُ اللهِ ﷺ؟",
          options: ["بِفَرَحِ غِلْمَانٍ يَخْرُجُوْنَ إِلَىٰ الْمُصَلَّىٰ يَوْمَ الْعِيْدِ فِيْ لِبَاسٍ جَدِيْدٍ", "بِفَرَحِ مَنْ وَجَدَ كَنْزاً", "لَمْ يَذْكُرِ النَّصُّ ذٰلِكَ"],
          answer: 0,
          qEn: "What was Rafi's joy compared to when the Messenger of Allah ﷺ gave him permission?",
          optionsEn: ["The joy of boys going out to the prayer-ground on Eid day in new clothes", "The joy of someone who found treasure", "The text doesn't mention that"]
        }
      ]
    },
    {
      en: "There was another boy named Samurah ibn Jundub, the same age as Rafi', and he was presented to the Messenger of Allah ﷺ after his acceptance of Rafi', but the Messenger of Allah ﷺ turned him back too, for his youth, so Samurah said, \"You accepted Rafi' and turned me back, yet if I wrestled him, I would throw him down.\"",
      sentences: [
        {
          id: "qr2-39-016",
          ar: "وَكَانَ وَلَدٌ آخَرُ اسْمُهُ سَمُرَةُ بْنُ جُنْدُبٍ فِيْ سِنِّ رَافِعٍ،",
          en: "There was another boy named Samurah ibn Jundub, the same age as Rafi',",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "وَلَدٌ", lemma: "ولد", pos: "noun", features: "indef.nom", root: "و ل د", gloss: "a boy" },
            { surface: "آخَرُ", lemma: "آخر", pos: "adj", features: "indef.nom", root: "أ خ ر", gloss: "another" },
            { surface: "اسْمُهُ", lemma: "اسم", pos: "noun", features: "nom+3ms", root: "س م و", gloss: "whose name" },
            { surface: "سَمُرَةُ", lemma: "سمرة", pos: "proper", features: "nom", root: "", gloss: "Samurah" },
            { surface: "بْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "جُنْدُبٍ", lemma: "جندب", pos: "proper", features: "gen", root: "", gloss: "Jundub" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "سِنِّ", lemma: "سن", pos: "noun", features: "gen.constr", root: "س ن ن", gloss: "the age of" },
            { surface: "رَافِعٍ", lemma: "رافع", pos: "proper", features: "gen", root: "", gloss: "Rafi'" }
          ]
        },
        {
          id: "qr2-39-017",
          ar: "فَعُرِضَ عَلَىٰ رَسُوْلِ اللهِ ﷺ بَعْدَ رَدِّهِ رَافِعاً فَرَدَّهُ رَسُوْلُ اللهِ ﷺ لِصِغَرِهِ أَيْضاً،",
          en: "and he was presented to the Messenger of Allah ﷺ after his acceptance of Rafi', but the Messenger of Allah ﷺ turned him back too, for his youth,",
          tokens: [
            { surface: "فَعُرِضَ", lemma: "عرض", pos: "verb", features: "conj+pass.perf.3ms", root: "ع ر ض", gloss: "and was presented" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "prep", root: "ب ع د", gloss: "after" },
            { surface: "رَدِّهِ", lemma: "رد", pos: "verb", features: "masdar+gen+3ms", root: "ر د د", gloss: "his acceptance" },
            { surface: "رَافِعاً", lemma: "رافع", pos: "proper", features: "acc", root: "", gloss: "of Rafi'" },
            { surface: "فَرَدَّهُ", lemma: "رد", pos: "verb", features: "conj+perf.3ms+3ms", root: "ر د د", gloss: "but turned him back" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "لِصِغَرِهِ", lemma: "صغر", pos: "noun", features: "prep+gen+3ms", root: "ص غ ر", gloss: "for his youth" },
            { surface: "أَيْضاً", lemma: "أيضا", pos: "adv", features: "acc", root: "أ ي ض", gloss: "too" }
          ]
        },
        {
          id: "qr2-39-018",
          ar: "فَقَالَ سَمُرَةُ: لَقَدْ أَجَزْتَ رَافِعاً وَرَدَدْتَنِيْ،",
          en: "so Samurah said, \"You accepted Rafi' and turned me back,",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "so said" },
            { surface: "سَمُرَةُ", lemma: "سمرة", pos: "proper", features: "nom", root: "", gloss: "Samurah" },
            { surface: "لَقَدْ", lemma: "قد", pos: "part", features: "emph+part", root: "", gloss: "indeed" },
            { surface: "أَجَزْتَ", lemma: "أجاز", pos: "verb", features: "perf.2ms", root: "ج و ز", gloss: "you accepted" },
            { surface: "رَافِعاً", lemma: "رافع", pos: "proper", features: "acc", root: "", gloss: "Rafi'" },
            { surface: "وَرَدَدْتَنِيْ", lemma: "رد", pos: "verb", features: "conj+perf.2ms+1cs", root: "ر د د", gloss: "and turned me back" }
          ]
        },
        {
          id: "qr2-39-019",
          ar: "وَلَوْ صَارَعْتُهُ لَصَرَعْتُهُ.",
          en: "yet if I wrestled him, I would throw him down.\"",
          tokens: [
            { surface: "وَلَوْ", lemma: "لو", pos: "part", features: "conj+part", root: "", gloss: "yet if" },
            { surface: "صَارَعْتُهُ", lemma: "صارع", pos: "verb", features: "perf.1cs+3ms", root: "ص ر ع", gloss: "I wrestled him" },
            { surface: "لَصَرَعْتُهُ", lemma: "صرع", pos: "verb", features: "emph+perf.1cs+3ms", root: "ص ر ع", gloss: "I would throw him down" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ سَمُرَةُ لَمَّا رَدَّهُ رَسُوْلُ اللهِ ﷺ؟",
          options: ["لَقَدْ أَجَزْتَ رَافِعاً وَرَدَدْتَنِيْ، وَلَوْ صَارَعْتُهُ لَصَرَعْتُهُ", "لَا بَأْسَ، سَأَبْقَىٰ فِي الْمَدِيْنَةِ", "أَنَا صَغِيْرٌ حَقّاً"],
          answer: 0,
          qEn: "What did Samurah say when the Messenger of Allah ﷺ turned him back?",
          optionsEn: ["You accepted Rafi' and turned me back, yet if I wrestled him I would throw him down", "No matter, I'll stay in Madinah", "I really am young"]
        }
      ]
    },
    {
      en: "So the Messenger of Allah ﷺ ordered Samurah and Rafi' to wrestle, and Samurah threw Rafi' down just as he had said, and so he earned the right to be permitted to join the ranks of the fighters.",
      sentences: [
        {
          id: "qr2-39-020",
          ar: "فَأَمَرَ رَسُوْلُ اللهِ ﷺ سَمُرَةَ وَرَافِعاً بِالْمُصَارَعَةِ",
          en: "So the Messenger of Allah ﷺ ordered Samurah and Rafi' to wrestle,",
          tokens: [
            { surface: "فَأَمَرَ", lemma: "أمر", pos: "verb", features: "conj+perf.3ms", root: "أ م ر", gloss: "so ordered" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "سَمُرَةَ", lemma: "سمرة", pos: "proper", features: "acc", root: "", gloss: "Samurah" },
            { surface: "وَرَافِعاً", lemma: "رافع", pos: "proper", features: "conj+acc", root: "", gloss: "and Rafi'" },
            { surface: "بِالْمُصَارَعَةِ", lemma: "مصارعة", pos: "noun", features: "prep+def.gen", root: "ص ر ع", gloss: "to wrestle" }
          ]
        },
        {
          id: "qr2-39-021",
          ar: "فَصَرَعَ سَمُرَةُ رَافِعاً كَمَا قَالَ،",
          en: "and Samurah threw Rafi' down just as he had said,",
          tokens: [
            { surface: "فَصَرَعَ", lemma: "صرع", pos: "verb", features: "conj+perf.3ms", root: "ص ر ع", gloss: "and threw down" },
            { surface: "سَمُرَةُ", lemma: "سمرة", pos: "proper", features: "nom", root: "", gloss: "Samurah" },
            { surface: "رَافِعاً", lemma: "رافع", pos: "proper", features: "acc", root: "", gloss: "Rafi'" },
            { surface: "كَمَا", lemma: "كما", pos: "conj", features: "conj", root: "", gloss: "just as" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "he had said" }
          ]
        },
        {
          id: "qr2-39-022",
          ar: "وَاسْتَحَقَّ أَنْ يُسْمَحَ لَهُ بِالدُّخُوْلِ فِيْ صَفِّ الْمُجَاهِدِيْنَ.",
          en: "and so he earned the right to be permitted to join the ranks of the fighters.",
          tokens: [
            { surface: "وَاسْتَحَقَّ", lemma: "استحق", pos: "verb", features: "conj+perf.3ms", root: "ح ق ق", gloss: "and earned the right" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يُسْمَحَ", lemma: "سمح", pos: "verb", features: "pass.subj.3ms", root: "س م ح", gloss: "be permitted" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "بِالدُّخُوْلِ", lemma: "دخول", pos: "noun", features: "prep+def.gen", root: "د خ ل", gloss: "to enter" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "into" },
            { surface: "صَفِّ", lemma: "صف", pos: "noun", features: "gen.constr", root: "ص ف ف", gloss: "the ranks of" },
            { surface: "الْمُجَاهِدِيْنَ", lemma: "مجاهد", pos: "noun", features: "pl.def.gen", root: "ج ه د", gloss: "the fighters" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنْ فَازَ فِي الْمُصَارَعَةِ بَيْنَ سَمُرَةَ وَرَافِعٍ؟",
          options: ["سَمُرَةُ", "رَافِعٌ", "لَمْ يَفُزْ أَحَدٌ"],
          answer: 0,
          qEn: "Who won the wrestling match between Samurah and Rafi'?",
          optionsEn: ["Samurah", "Rafi'", "No one won"]
        }
      ]
    },
    {
      en: "So the Messenger of Allah ﷺ permitted Samurah to go out, and Samurah went out and fought on the day of Uhud in the way of Allah.",
      sentences: [
        {
          id: "qr2-39-023",
          ar: "فَأَجَازَ رَسُوْلُ اللهِ ﷺ سَمُرَةَ لِلْخُرُوْجِ،",
          en: "So the Messenger of Allah ﷺ permitted Samurah to go out,",
          tokens: [
            { surface: "فَأَجَازَ", lemma: "أجاز", pos: "verb", features: "conj+perf.3ms", root: "ج و ز", gloss: "so permitted" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "سَمُرَةَ", lemma: "سمرة", pos: "proper", features: "acc", root: "", gloss: "Samurah" },
            { surface: "لِلْخُرُوْجِ", lemma: "خروج", pos: "noun", features: "prep+def.gen", root: "خ ر ج", gloss: "to go out" }
          ]
        },
        {
          id: "qr2-39-024",
          ar: "فَخَرَجَ سَمُرَةُ وَقَاتَلَ يَوْمَ أُحُدٍ فِيْ سَبِيْلِ اللهِ.",
          en: "and Samurah went out and fought on the day of Uhud in the way of Allah.",
          tokens: [
            { surface: "فَخَرَجَ", lemma: "خرج", pos: "verb", features: "conj+perf.3ms", root: "خ ر ج", gloss: "and went out" },
            { surface: "سَمُرَةُ", lemma: "سمرة", pos: "proper", features: "nom", root: "", gloss: "Samurah" },
            { surface: "وَقَاتَلَ", lemma: "قاتل", pos: "verb", features: "conj+perf.3ms", root: "ق ت ل", gloss: "and fought" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "on the day of" },
            { surface: "أُحُدٍ", lemma: "أحد", pos: "proper", features: "gen", root: "", gloss: "Uhud" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "سَبِيْلِ", lemma: "سبيل", pos: "noun", features: "gen.constr", root: "س ب ل", gloss: "the way of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ سَمُرَةُ بَعْدَ أَنْ أَجَازَهُ رَسُوْلُ اللهِ ﷺ؟",
          options: ["خَرَجَ وَقَاتَلَ يَوْمَ أُحُدٍ فِيْ سَبِيْلِ اللهِ", "بَقِيَ فِي الْمَدِيْنَةِ", "رَجَعَ إِلَىٰ أَهْلِهِ"],
          answer: 0,
          qEn: "What did Samurah do after the Messenger of Allah ﷺ permitted him?",
          optionsEn: ["He went out and fought on the day of Uhud in the way of Allah", "He stayed in Madinah", "He returned to his family"]
        }
      ]
    },
    {
      en: "May Allah be pleased with Rafi' and Samurah, and grant us to follow their example.",
      sentences: [
        {
          id: "qr2-39-025",
          ar: "رَضِيَ اللهُ عَنْ رَافِعٍ وَسَمُرَةَ، وَرَزَقَنَا اتِّبَاعَهُمَا.",
          en: "May Allah be pleased with Rafi' and Samurah, and grant us to follow their example.",
          tokens: [
            { surface: "رَضِيَ", lemma: "رضي", pos: "verb", features: "perf.3ms", root: "ر ض و", gloss: "may be pleased" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "رَافِعٍ", lemma: "رافع", pos: "proper", features: "gen", root: "", gloss: "Rafi'" },
            { surface: "وَسَمُرَةَ", lemma: "سمرة", pos: "proper", features: "conj+gen", root: "", gloss: "and Samurah" },
            { surface: "وَرَزَقَنَا", lemma: "رزق", pos: "verb", features: "conj+perf.3ms+1cp", root: "ر ز ق", gloss: "and grant us" },
            { surface: "اتِّبَاعَهُمَا", lemma: "اتباع", pos: "noun", features: "acc+3md", root: "ت ب ع", gloss: "to follow the two of them" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا الدُّعَاءُ الَّذِيْ خُتِمَتْ بِهِ الْقِصَّةُ؟",
          options: ["رَضِيَ اللهُ عَنْ رَافِعٍ وَسَمُرَةَ وَرَزَقَنَا اتِّبَاعَهُمَا", "اللَّهُمَّ اغْفِرْ لَنَا", "رَحِمَ اللهُ الشُّهَدَاءَ"],
          answer: 0,
          qEn: "What is the prayer that closes the story?",
          optionsEn: ["May Allah be pleased with Rafi' and Samurah, and grant us to follow their example", "O Allah forgive us", "May Allah have mercy on the martyrs"]
        }
      ]
    }
  ]
};

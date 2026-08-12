// القراءة الراشدة, volume two, chapter 41 (printed heading "٤١") --
// كُنْ أَحَدَ السَّبْعَةِ (٢) -- "Be One of the Seven" (part 2 of 2).
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 144-146 (PDF page
// index == printed page number in this book). Part 1 is printed chapter 40
// (pp.141-143), not yet authored as of this writing -- this module stands
// alone but reads as the second half of one continuous father-son dialogue
// (Sulayman narrating the hadith of "the seven whom Allah will shade in
// the shade of His throne" -- سبعة يظلهم الله في ظله -- to his sons).
//
// Book placement: this is the FIRST chapter authored in a new "qiraah-v2"
// book. Printed chapter numbering in this source is continuous across both
// physical volumes (ch.1-31 = volume one = the existing qiraah-v1 book;
// ch.32+ = volume two, beginning at printed page 117 with a volume-two
// title page). Chapter 41 falls inside volume two, so per README.md's
// "Adding a book" convention (one book id per printed volume, mirroring
// qasas-v1/qasas-v2) it belongs in a *second* book, not appended to
// qiraah-v1. Chapters 32-40 of this same volume were, at the time of
// writing, being authored by other concurrent sessions and had not yet
// landed in content-lit/qiraah-v2/ -- to avoid any filename/id collision
// with that work, this chapter's module id and filename use the *printed*
// chapter number (ch41 / chapter-41.js) rather than resetting to ch1, and
// this book's own index.js chapters[] array currently starts at ch41.
// Whoever adds chapters 32-40 should splice their entries *before* this one
// (reading order = gating order, per CHAPTER-FORMAT.md's "Registering it").
//
// Numbered markers "(٢)".."(٧)" printed in the book before each man in the
// hadith's list are treated like the page's footnote markers: they are
// document furniture, not part of any clause, so they are not tokenized or
// included in `ar`. The list structure survives in the paragraph `en`
// prose instead.
//
// The closing line "«إِنَّ اللهَ لَا يُضِيْعُ أَجْرَ الْمُحْسِنِيْنَ، وَلَا
// تُظْلَمُ نَفْسٌ شَيْئًا»" echoes Qur'anic phrasing (cf. 9:120, 11:115,
// 21:47) but is printed in the book with the plain quotation guillemets
// «» it uses throughout for ordinary reported speech, not the ornamental
// Qur'an brackets ﴿﴾ it uses elsewhere for direct Qur'anic citation (see
// PROJECT_CONTEXT.md ​§2). Transcribed and tokenized as ordinary prose to
// match the source; flagging here per QASAS_AGENT_BRIEF.md §6/§9 in case
// Habib wants it handled differently once that open problem is resolved.
export const CHAPTER = {
  id: "ch41",
  title: {
    ar: "كُنْ أَحَدَ السَّبْعَةِ (٢)",
    en: "Be One of the Seven (2)"
  },
  pages: [144, 145, 146],
  newWords: [
    "شاب", "نشأ", "عبادة", "معلق", "ارتاح", "اقتدى", "عفة", "أمانة",
    "تصدق", "أخفى", "أرملة", "خالي", "فاض", "محسن"
  ],
  lemmas: {
    "شاب": { root: "ش ب ب", pos: "noun", gloss: "young man" },
    "نشأ": { root: "ن ش أ", pos: "verb", gloss: "to grow up, be raised" },
    "عبادة": { root: "ع ب د", pos: "noun", gloss: "worship" },
    "معلق": { root: "ع ل ق", pos: "adj", gloss: "attached, suspended" },
    "ارتاح": { root: "ر و ح", pos: "verb", gloss: "to feel at ease, be content" },
    "اقتدى": { root: "ق د و", pos: "verb", gloss: "to follow the example of" },
    "عفة": {
      root: "ع ف ف", pos: "noun", gloss: "chastity, self-restraint",
      book_note: "تَرْكُ الشَّهَوَاتِ وَالتَّجَنُّبُ مِنْهَا بِكُلِّ شَيْءٍ"
    },
    "أمانة": { root: "أ م ن", pos: "noun", gloss: "trustworthiness" },
    "تصدق": { root: "ص د ق", pos: "verb", gloss: "to give charity" },
    "أخفى": { root: "خ ف ي", pos: "verb", gloss: "to hide, conceal" },
    "رفقة": {
      root: "ر ف ق", pos: "noun", gloss: "companionship, company",
      book_note: "جَمَاعَةٌ مُتَرَافِقُوْنَ"
    },
    "أرملة": {
      root: "أ ر م ل", pos: "noun", gloss: "widow",
      book_note: "الَّتِيْ مَاتَ زَوْجُهَا"
    },
    "وصل": {
      root: "و ص ل", pos: "verb", gloss: "to aid, treat kindly, maintain ties",
      book_note: "بَرَّ وَأَحْسَنَ الْمُعَامَلَةَ"
    },
    "خالي": { root: "خ ل و", pos: "adj", gloss: "alone, in private, in solitude" },
    "فاض": { root: "ف ي ض", pos: "verb", gloss: "to overflow, brim over" },
    "محسن": { root: "ح س ن", pos: "noun", gloss: "doer of good, benefactor" }
  },
  paragraphs: [
    {
      en: "Sulayman continued the hadith of the seven whom Allah will shade: \"The second is a young man raised in the worship of Allah.\" The shaykh paused there and told the boys that any one of them could be that fortunate young man — but wasting the years of youth leaves nothing behind but regret.",
      sentences: [
        {
          id: "qr2-41-001",
          ar: "قَالَ سُلَيْمَانُ: وَالثَّانِيْ يَا أَوْلَادِيْ! شَابٌّ نَشَأَ فِيْ عِبَادَةِ اللهِ تَعَالَىٰ.",
          en: "Sulayman said: \"And the second, my sons, is a young man who grew up in the worship of Allah, the Exalted.\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman (name)" },
            { surface: "وَالثَّانِيْ", lemma: "ثاني", pos: "adj", features: "conj+def.nom", root: "ث ن ي", gloss: "second" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "ولد", pos: "noun", features: "pl+1s", root: "و ل د", gloss: "my children" },
            { surface: "شَابٌّ", lemma: "شاب", pos: "noun", features: "indef.nom", root: "ش ب ب", gloss: "young man" },
            { surface: "نَشَأَ", lemma: "نشأ", pos: "verb", features: "perf.3ms", root: "ن ش أ", gloss: "to grow up, be raised" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "عِبَادَةِ", lemma: "عبادة", pos: "noun", features: "gen.constr", root: "ع ب د", gloss: "worship" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "تَعَالَىٰ", lemma: "تعالى", pos: "verb", features: "perf.3ms", root: "ع ل و", gloss: "He is Exalted (epithet)" }
          ]
        },
        {
          id: "qr2-41-002",
          ar: "هُنَالِكَ وَقَفَ الشَّيْخُ، وَقَالَ: يُمْكِنُ كُلَّ وَاحِدٍ مِنْكُمْ يَا أَوْلَادِيْ! أَنْ يَكُوْنَ ذٰلِكَ الشَّابَّ السَّعِيْدَ،",
          en: "There the shaykh paused and said, \"Each one of you, my sons, could be that fortunate young man,",
          tokens: [
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", features: "adv", root: "", gloss: "there, at that point" },
            { surface: "وَقَفَ", lemma: "وقف", pos: "verb", features: "perf.3ms", root: "و ق ف", gloss: "to stand, pause" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "shaykh, elder" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "يُمْكِنُ", lemma: "أمكن", pos: "verb", features: "impf.3ms", root: "م ك ن", gloss: "to be possible" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "each, every" },
            { surface: "وَاحِدٍ", lemma: "واحد", pos: "noun", features: "indef.gen", root: "و ح د", gloss: "one (person)" },
            { surface: "مِنْكُمْ", lemma: "من", pos: "prep", features: "prep+2mp", root: "", gloss: "from you" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "ولد", pos: "noun", features: "pl+1s", root: "و ل د", gloss: "my children" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَكُوْنَ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "to be" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "الشَّابَّ", lemma: "شاب", pos: "noun", features: "def.acc", root: "ش ب ب", gloss: "young man" },
            { surface: "السَّعِيْدَ", lemma: "سعيد", pos: "adj", features: "def.acc", root: "س ع د", gloss: "fortunate, happy" }
          ]
        },
        {
          id: "qr2-41-003",
          ar: "وَلٰكِنْ إِذَا ضَيَّعْتُمْ فُرْصَةَ الشَّبَابِ، فَلَيْسَ لَكُمْ إِلَّا الْحَسْرَةُ وَالنَّدَامَةُ.",
          en: "but if you waste the opportunity of youth, nothing will be left for you but regret and remorse.\"",
          tokens: [
            { surface: "وَلٰكِنْ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if, when" },
            { surface: "ضَيَّعْتُمْ", lemma: "ضيع", pos: "verb", features: "perf.2mp", root: "ض ي ع", gloss: "to waste, lose" },
            { surface: "فُرْصَةَ", lemma: "فرصة", pos: "noun", features: "acc.constr", root: "ف ر ص", gloss: "opportunity" },
            { surface: "الشَّبَابِ", lemma: "شباب", pos: "noun", features: "def.gen", root: "ش ب ب", gloss: "youth" },
            { surface: "فَلَيْسَ", lemma: "ليس", pos: "verb", features: "conj+perf.3ms", root: "", gloss: "to not be, there is not" },
            { surface: "لَكُمْ", lemma: "ل", pos: "prep", features: "prep+2mp", root: "", gloss: "for you" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except, only" },
            { surface: "الْحَسْرَةُ", lemma: "حسرة", pos: "noun", features: "def.nom", root: "ح س ر", gloss: "regret, sorrow" },
            { surface: "وَالنَّدَامَةُ", lemma: "ندامة", pos: "noun", features: "conj+def.nom", root: "ن د م", gloss: "remorse" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَبْقَىٰ لِمَنْ يُضَيِّعُ فُرْصَةَ الشَّبَابِ؟",
          options: ["الْحَسْرَةُ وَالنَّدَامَةُ", "الْمَالُ وَالْجَاهُ", "الرَّاحَةُ وَالسَّعَادَةُ"],
          answer: 0,
          qEn: "What remains for one who wastes the opportunity of youth?",
          optionsEn: ["Regret and remorse", "Wealth and status", "Comfort and happiness"]
        }
      ]
    },
    {
      en: "The third is a man whose heart stays attached to the mosques. The children guessed he meant Shaykh Abd al-Ghani, who is never at ease anywhere but the mosque — but Sulayman explained that the real mark is one who guards every prayer in congregation without fail, as this man had done for ten years or more.",
      sentences: [
        {
          id: "qr2-41-004",
          ar: "رَجُلٌ قَلْبُهُ مُعَلَّقٌ فِي الْمَسَاجِدِ.",
          en: "A man whose heart is attached to the mosques.",
          tokens: [
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "indef.nom", root: "ر ج ل", gloss: "man" },
            { surface: "قَلْبُهُ", lemma: "قلب", pos: "noun", features: "nom+3ms", root: "ق ل ب", gloss: "heart" },
            { surface: "مُعَلَّقٌ", lemma: "معلق", pos: "adj", features: "indef.nom", root: "ع ل ق", gloss: "attached, suspended" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَسَاجِدِ", lemma: "مسجد", pos: "noun", features: "pl.def.gen", root: "س ج د", gloss: "mosque" }
          ]
        },
        {
          id: "qr2-41-005",
          ar: "قَالَ الأَوْلَادُ: هُوَ كَالشَّيْخِ عَبْدِ الْغَنِيِّ فِيْ حَيِّنَا،",
          en: "The children said, \"He is like Shaykh Abd al-Ghani in our neighborhood,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "الأَوْلَادُ", lemma: "ولد", pos: "noun", features: "pl.def.nom", root: "و ل د", gloss: "children, sons" },
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom.3ms", root: "", gloss: "he" },
            { surface: "كَالشَّيْخِ", lemma: "شيخ", pos: "noun", features: "prep+def.gen", root: "ش ي خ", gloss: "shaykh, elder" },
            { surface: "عَبْدِ", lemma: "عبد الغني", pos: "proper", features: "gen", root: "", gloss: "Abd al-Ghani (name)" },
            { surface: "الْغَنِيِّ", lemma: "عبد الغني", pos: "proper", features: "def.gen", root: "", gloss: "" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "حَيِّنَا", lemma: "حي", pos: "noun", features: "gen+1p", root: "ح ي ي", gloss: "our neighborhood" }
          ]
        },
        {
          id: "qr2-41-006",
          ar: "فَإِنَّهُ لَا يَرْتَاحُ إِلَّا إِلَىٰ الْمَسْجِدِ، وَلَا تَفُوْتُهُ جَمَاعَةٌ، وَلَا نَظُنُّهُ يَبِيْتُ إِلَّا فِي الْمَسْجِدِ.",
          en: "for he is at ease only at the mosque, no congregational prayer escapes him, and we do not think he sleeps anywhere but the mosque.\"",
          tokens: [
            { surface: "فَإِنَّهُ", lemma: "إن", pos: "part", features: "conj+3ms", root: "", gloss: "indeed (he)" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَرْتَاحُ", lemma: "ارتاح", pos: "verb", features: "impf.3ms", root: "ر و ح", gloss: "to feel at ease, rest" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except, only" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to, towards" },
            { surface: "الْمَسْجِدِ", lemma: "مسجد", pos: "noun", features: "def.gen", root: "س ج د", gloss: "mosque" },
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "تَفُوْتُهُ", lemma: "فات", pos: "verb", features: "impf.3fs+3ms", root: "ف و ت", gloss: "to pass, elude, be missed" },
            { surface: "جَمَاعَةٌ", lemma: "جماعة", pos: "noun", features: "indef.nom", root: "ج م ع", gloss: "congregation" },
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "نَظُنُّهُ", lemma: "ظن", pos: "verb", features: "impf.1p+3ms", root: "ظ ن ن", gloss: "to think, suppose" },
            { surface: "يَبِيْتُ", lemma: "بات", pos: "verb", features: "impf.3ms", root: "ب ي ت", gloss: "to spend the night" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except, only" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَسْجِدِ", lemma: "مسجد", pos: "noun", features: "def.gen", root: "س ج د", gloss: "mosque" }
          ]
        },
        {
          id: "qr2-41-007",
          ar: "قَالَ سُلَيْمَانُ: لَا يَا أَوْلَادِيْ! وَلٰكِنَّهُ مُحَافِظٌ عَلَىٰ الصَّلَاةِ وَالْجَمَاعَةِ،",
          en: "Sulayman said, \"No, my sons! But he keeps to the prayer and the congregation,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman (name)" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "no" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَوْلَادِيْ", lemma: "ولد", pos: "noun", features: "pl+1s", root: "و ل د", gloss: "my children" },
            { surface: "وَلٰكِنَّهُ", lemma: "لكن", pos: "part", features: "conj+3ms", root: "", gloss: "but he [is]" },
            { surface: "مُحَافِظٌ", lemma: "حافظ", pos: "noun", features: "indef.nom", root: "ح ف ظ", gloss: "one who keeps to, maintains" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "upon, regarding" },
            { surface: "الصَّلَاةِ", lemma: "صلاة", pos: "noun", features: "def.gen", root: "ص ل و", gloss: "prayer" },
            { surface: "وَالْجَمَاعَةِ", lemma: "جماعة", pos: "noun", features: "conj+def.gen", root: "ج م ع", gloss: "congregation" }
          ]
        },
        {
          id: "qr2-41-008",
          ar: "وَقَدْ أَخْبَرَنِيْ أَنَّهُ مَا فَاتَتْهُ صَلَاةٌ فِيْ جَمَاعَةٍ مُنْذُ عَشْرِ سَنَوَاتٍ أَوْ أَكْثَرَ.",
          en: "and he has told me that he has not missed a single congregational prayer for ten years or more.\"",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "indeed, already" },
            { surface: "أَخْبَرَنِيْ", lemma: "أخبر", pos: "verb", features: "perf.3ms+1s", root: "خ ب ر", gloss: "to inform" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "3ms", root: "", gloss: "that (he)" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "فَاتَتْهُ", lemma: "فات", pos: "verb", features: "perf.3fs+3ms", root: "ف و ت", gloss: "to pass, be missed" },
            { surface: "صَلَاةٌ", lemma: "صلاة", pos: "noun", features: "indef.nom", root: "ص ل و", gloss: "a prayer" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "جَمَاعَةٍ", lemma: "جماعة", pos: "noun", features: "indef.gen", root: "ج م ع", gloss: "congregation" },
            { surface: "مُنْذُ", lemma: "منذ", pos: "prep", features: "prep", root: "", gloss: "since" },
            { surface: "عَشْرِ", lemma: "عشر", pos: "num", features: "gen.constr", root: "ع ش ر", gloss: "ten" },
            { surface: "سَنَوَاتٍ", lemma: "سنة", pos: "noun", features: "pl.indef.gen", root: "س ن و", gloss: "years" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "أَكْثَرَ", lemma: "كثير", pos: "adj", features: "acc", root: "ك ث ر", gloss: "more" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ سَنَةً لَمْ تَفُتْ الرَّجُلَ صَلَاةٌ فِيْ جَمَاعَةٍ؟",
          options: ["عَشْرُ سَنَوَاتٍ أَوْ أَكْثَرُ", "سَنَةٌ وَاحِدَةٌ", "خَمْسُ سَنَوَاتٍ"],
          answer: 0,
          qEn: "For how many years had the man not missed a congregational prayer?",
          optionsEn: ["Ten years or more", "One year", "Five years"]
        }
      ]
    },
    {
      en: "The fourth are two men who love each other for Allah's sake alone, meeting and parting on that basis — like Shaykh Salih from India and Shaykh Hamza from Bukhara, brothers in faith though strangers by birth. Any of the children could earn this by choosing a righteous friend for the sake of religion.",
      sentences: [
        {
          id: "qr2-41-009",
          ar: "رَجُلَانِ تَحَابَّا فِي اللهِ، اجْتَمَعَا عَلَيْهِ، وَتَفَرَّقَا عَلَيْهِ.",
          en: "Two men who loved one another for the sake of Allah, met upon that, and parted upon that.",
          tokens: [
            { surface: "رَجُلَانِ", lemma: "رجل", pos: "noun", features: "du.indef.nom", root: "ر ج ل", gloss: "man" },
            { surface: "تَحَابَّا", lemma: "تحاب", pos: "verb", features: "perf.3d", root: "ح ب ب", gloss: "to love one another" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in, for the sake of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "اجْتَمَعَا", lemma: "اجتمع", pos: "verb", features: "perf.3d", root: "ج م ع", gloss: "to meet, come together" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "upon it" },
            { surface: "وَتَفَرَّقَا", lemma: "تفرق", pos: "verb", features: "conj+perf.3d", root: "ف ر ق", gloss: "to part ways" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "upon it" }
          ]
        },
        {
          id: "qr2-41-010",
          ar: "وَإِذَا أَرَدْتُّمْ أَنْ تَرَوْهُمَا، فَانْظُرُوا إِلَىٰ الشَّيْخِ صَالِحٍ وَالشَّيْخِ حَمْزَةَ،",
          en: "And if you wanted to see them, look at Shaykh Salih and Shaykh Hamza,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if, when" },
            { surface: "أَرَدْتُّمْ", lemma: "أراد", pos: "verb", features: "perf.2mp", root: "ر و د", gloss: "to want" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "تَرَوْهُمَا", lemma: "رأى", pos: "verb", features: "impf.2mp+3d", root: "ر أ ي", gloss: "to see" },
            { surface: "فَانْظُرُوا", lemma: "نظر", pos: "verb", features: "conj+imp.2mp", root: "ن ظ ر", gloss: "to look" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "at, towards" },
            { surface: "الشَّيْخِ", lemma: "شيخ", pos: "noun", features: "def.gen", root: "ش ي خ", gloss: "shaykh, elder" },
            { surface: "صَالِحٍ", lemma: "صالح", pos: "proper", features: "gen", root: "", gloss: "Salih (name)" },
            { surface: "وَالشَّيْخِ", lemma: "شيخ", pos: "noun", features: "conj+def.gen", root: "ش ي خ", gloss: "shaykh, elder" },
            { surface: "حَمْزَةَ", lemma: "حمزة", pos: "proper", features: "gen", root: "", gloss: "Hamza (name)" }
          ]
        },
        {
          id: "qr2-41-011",
          ar: "فَهٰذَا مِنَ الْهِنْدِ، وَذٰلِكَ مِنْ بُخَارَى، وَهُمَا أَخَوَانِ فِي اللهِ.",
          en: "for this one is from India, and that one is from Bukhara, yet they are two brothers for Allah's sake.",
          tokens: [
            { surface: "فَهٰذَا", lemma: "هذا", pos: "dem", features: "conj+dem", root: "", gloss: "this" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْهِنْدِ", lemma: "الهند", pos: "proper", features: "gen", root: "", gloss: "India" },
            { surface: "وَذٰلِكَ", lemma: "ذلك", pos: "dem", features: "conj+dem", root: "", gloss: "that" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "بُخَارَى", lemma: "بخارى", pos: "proper", features: "", root: "", gloss: "Bukhara" },
            { surface: "وَهُمَا", lemma: "هما", pos: "noun", features: "conj+nom.3d", root: "", gloss: "they (two)" },
            { surface: "أَخَوَانِ", lemma: "أخ", pos: "noun", features: "du.indef.nom", root: "أ خ و", gloss: "brother" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in, for" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-41-012",
          ar: "وَيُمْكِنُ كُلَّ وَاحِدٍ مِنْكُمْ أَنْ يَنَالَ هٰذِهِ الْفَضِيْلَةَ، وَذٰلِكَ بِأَنْ يَخْتَارَ مِنْ صَفِّهِ وَرُفْقَتِهِ الصَّالِحَ مِنَ الأَوْلَادِ فَيُصَادِقَهُ، وَيَجْتَهِدُ أَنْ تَكُوْنَ صَدَاقَتُهُ لِلدِّيْنِ.",
          en: "Each one of you can attain this virtue, by choosing the righteous one among the children from his class and company and befriending him, striving for his friendship to be for the sake of religion.",
          tokens: [
            { surface: "وَيُمْكِنُ", lemma: "أمكن", pos: "verb", features: "conj+impf.3ms", root: "م ك ن", gloss: "to be possible" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "each, every" },
            { surface: "وَاحِدٍ", lemma: "واحد", pos: "noun", features: "indef.gen", root: "و ح د", gloss: "one (person)" },
            { surface: "مِنْكُمْ", lemma: "من", pos: "prep", features: "prep+2mp", root: "", gloss: "from you" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَنَالَ", lemma: "نال", pos: "verb", features: "impf.3ms", root: "ن ي ل", gloss: "to attain" },
            { surface: "هٰذِهِ", lemma: "هذه", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "الْفَضِيْلَةَ", lemma: "فضيلة", pos: "noun", features: "def.acc", root: "ف ض ل", gloss: "virtue, merit" },
            { surface: "وَذٰلِكَ", lemma: "ذلك", pos: "dem", features: "conj+dem", root: "", gloss: "that (is)" },
            { surface: "بِأَنْ", lemma: "أن", pos: "part", features: "prep+part", root: "", gloss: "in that, by" },
            { surface: "يَخْتَارَ", lemma: "اختار", pos: "verb", features: "impf.3ms", root: "خ ي ر", gloss: "to choose" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from, among" },
            { surface: "صَفِّهِ", lemma: "صف", pos: "noun", features: "gen+3ms", root: "ص ف ف", gloss: "row, class" },
            { surface: "وَرُفْقَتِهِ", lemma: "رفقة", pos: "noun", features: "conj+gen+3ms", root: "ر ف ق", gloss: "companionship, company" },
            { surface: "الصَّالِحَ", lemma: "صالح", pos: "adj", features: "def.acc", root: "ص ل ح", gloss: "righteous, good" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from, among" },
            { surface: "الأَوْلَادِ", lemma: "ولد", pos: "noun", features: "pl.def.gen", root: "و ل د", gloss: "children" },
            { surface: "فَيُصَادِقَهُ", lemma: "صادق", pos: "verb", features: "conj+impf.3ms+3ms", root: "ص د ق", gloss: "to befriend" },
            { surface: "وَيَجْتَهِدُ", lemma: "اجتهد", pos: "verb", features: "conj+impf.3ms", root: "ج ه د", gloss: "to strive, endeavor" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "تَكُوْنَ", lemma: "كان", pos: "verb", features: "impf.3fs", root: "ك و ن", gloss: "to be" },
            { surface: "صَدَاقَتُهُ", lemma: "صداقة", pos: "noun", features: "nom+3ms", root: "ص د ق", gloss: "friendship" },
            { surface: "لِلدِّيْنِ", lemma: "دين", pos: "noun", features: "prep+def.gen", root: "د ي ن", gloss: "religion" }
          ]
        }
      ],
      checks: [
        {
          q: "مِنْ أَيْنَ الشَّيْخُ صَالِحٌ؟",
          options: ["مِنَ الْهِنْدِ", "مِنْ بُخَارَى", "مِنَ الشَّامِ"],
          answer: 0,
          qEn: "Where is Shaykh Salih from?",
          optionsEn: ["From India", "From Bukhara", "From Syria"]
        }
      ]
    },
    {
      en: "The fifth is a man who followed Prophet Yusuf's example in chastity and trustworthiness. The sixth gives charity so secretly that even his own left hand would not know what his right hand gave — like their late grandfather, whose kindness to the poor and needy among the Muslims only came to light after he died, when old women and widows came weeping over him and the dignitaries of the neighborhood told of the monthly help he had quietly given, unknown even to his own household.",
      sentences: [
        {
          id: "qr2-41-013",
          ar: "وَرَجُلٌ اقْتَدَىٰ بِيُوْسُفَ عَلَيْهِ الصَّلَاةُ وَالسَّلَامُ فِي الْعِفَّةِ وَالأَمَانَةِ، وَقَدْ سَمِعْتُمْ قِصَّتَهُ.",
          en: "And a man who followed the example of Yusuf, peace be upon him, in chastity and trustworthiness — and you have heard his story.",
          tokens: [
            { surface: "وَرَجُلٌ", lemma: "رجل", pos: "noun", features: "conj+indef.nom", root: "ر ج ل", gloss: "man" },
            { surface: "اقْتَدَىٰ", lemma: "اقتدى", pos: "verb", features: "perf.3ms", root: "ق د و", gloss: "to follow the example of" },
            { surface: "بِيُوْسُفَ", lemma: "يوسف", pos: "proper", features: "prep+gen", root: "", gloss: "Joseph (Prophet)" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "upon him" },
            { surface: "الصَّلَاةُ", lemma: "صلاة", pos: "noun", features: "def.nom", root: "ص ل و", gloss: "prayer, blessing" },
            { surface: "وَالسَّلَامُ", lemma: "سلام", pos: "noun", features: "conj+def.nom", root: "س ل م", gloss: "peace" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْعِفَّةِ", lemma: "عفة", pos: "noun", features: "def.gen", root: "ع ف ف", gloss: "chastity, self-restraint" },
            { surface: "وَالأَمَانَةِ", lemma: "أمانة", pos: "noun", features: "conj+def.gen", root: "أ م ن", gloss: "trustworthiness" },
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "سَمِعْتُمْ", lemma: "سمع", pos: "verb", features: "perf.2mp", root: "س م ع", gloss: "to hear" },
            { surface: "قِصَّتَهُ", lemma: "قصة", pos: "noun", features: "acc+3ms", root: "ق ص ص", gloss: "story" }
          ]
        },
        {
          id: "qr2-41-014",
          ar: "قَالَ الأَوْلَادُ: نَعَمْ!",
          en: "The children said, \"Yes!\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "الأَوْلَادُ", lemma: "ولد", pos: "noun", features: "pl.def.nom", root: "و ل د", gloss: "children, sons" },
            { surface: "نَعَمْ", lemma: "نعم", pos: "part", features: "part", root: "", gloss: "yes" }
          ]
        },
        {
          id: "qr2-41-015",
          ar: "وَرَجُلٌ تَصَدَّقَ بِصَدَقَةٍ فَأَخْفَاهَا حَتَّىٰ لَا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِيْنُهُ.",
          en: "And a man who gave charity and concealed it, such that his left hand does not know what his right hand spends.",
          tokens: [
            { surface: "وَرَجُلٌ", lemma: "رجل", pos: "noun", features: "conj+indef.nom", root: "ر ج ل", gloss: "man" },
            { surface: "تَصَدَّقَ", lemma: "تصدق", pos: "verb", features: "perf.3ms", root: "ص د ق", gloss: "to give charity" },
            { surface: "بِصَدَقَةٍ", lemma: "صدقة", pos: "noun", features: "prep+indef.gen", root: "ص د ق", gloss: "charity, alms" },
            { surface: "فَأَخْفَاهَا", lemma: "أخفى", pos: "verb", features: "conj+perf.3ms+3fs", root: "خ ف ي", gloss: "to hide, conceal" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "so that, until" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تَعْلَمَ", lemma: "علم", pos: "verb", features: "impf.3fs", root: "ع ل م", gloss: "to know" },
            { surface: "شِمَالُهُ", lemma: "شمال", pos: "noun", features: "nom+3ms", root: "ش م ل", gloss: "left hand" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "تُنْفِقُ", lemma: "أنفق", pos: "verb", features: "impf.3fs", root: "ن ف ق", gloss: "to spend" },
            { surface: "يَمِيْنُهُ", lemma: "يمين", pos: "noun", features: "nom+3ms", root: "ي م ن", gloss: "right hand" }
          ]
        },
        {
          id: "qr2-41-016",
          ar: "وَذٰلِكَ مِثْلُ جَدِّكُمْ، فَإِنَّا لَمْ نَعْرِفْ بِرَّهُ وَإِحْسَانَهُ إِلَىٰ الْمَسَاكِيْنِ وَالضَّعَفَةِ مِنَ الْمُسْلِمِيْنَ إِلَّا بَعْدَ وَفَاتِهِ،",
          en: "And that is like your grandfather, for we did not know of his piety and kindness towards the poor and the weak among the Muslims except after his death,",
          tokens: [
            { surface: "وَذٰلِكَ", lemma: "ذلك", pos: "dem", features: "conj+dem", root: "", gloss: "and that" },
            { surface: "مِثْلُ", lemma: "مثل", pos: "noun", features: "nom.constr", root: "م ث ل", gloss: "like, similar to" },
            { surface: "جَدِّكُمْ", lemma: "جد", pos: "noun", features: "gen+2mp", root: "ج د د", gloss: "grandfather" },
            { surface: "فَإِنَّا", lemma: "إن", pos: "part", features: "conj+1p", root: "", gloss: "for indeed we" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "did not" },
            { surface: "نَعْرِفْ", lemma: "عرف", pos: "verb", features: "impf.1p", root: "ع ر ف", gloss: "to know" },
            { surface: "بِرَّهُ", lemma: "بر", pos: "noun", features: "acc+3ms", root: "ب ر ر", gloss: "piety, dutifulness" },
            { surface: "وَإِحْسَانَهُ", lemma: "إحسان", pos: "noun", features: "conj+acc+3ms", root: "ح س ن", gloss: "kindness, excellence in doing good" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "towards" },
            { surface: "الْمَسَاكِيْنِ", lemma: "مسكين", pos: "noun", features: "pl.def.gen", root: "س ك ن", gloss: "poor person" },
            { surface: "وَالضَّعَفَةِ", lemma: "ضعيف", pos: "noun", features: "conj+pl.def.gen", root: "ض ع ف", gloss: "weak (person)" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "among, from" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "Muslim" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "prep", root: "", gloss: "after" },
            { surface: "وَفَاتِهِ", lemma: "وفاة", pos: "noun", features: "gen+3ms", root: "و ف ي", gloss: "death, passing" }
          ]
        },
        {
          id: "qr2-41-017",
          ar: "فَقَدْ جَاءَتِ الْعَجَائِزُ وَالأَرَامِلُ يَبْكِيْنَهُ، وَيَذْكُرْنَ خَيْرَهُ وَبِرَّهُ،",
          en: "for the old women and widows came weeping for him, mentioning his goodness and his piety,",
          tokens: [
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "indeed, so" },
            { surface: "جَاءَتِ", lemma: "جاء", pos: "verb", features: "perf.3fs", root: "ج ي أ", gloss: "to come" },
            { surface: "الْعَجَائِزُ", lemma: "عجوز", pos: "noun", features: "pl.def.nom", root: "ع ج ز", gloss: "old woman" },
            { surface: "وَالأَرَامِلُ", lemma: "أرملة", pos: "noun", features: "conj+pl.def.nom", root: "أ ر م ل", gloss: "widow" },
            { surface: "يَبْكِيْنَهُ", lemma: "بكى", pos: "verb", features: "impf.3fp+3ms", root: "ب ك ي", gloss: "to weep, cry" },
            { surface: "وَيَذْكُرْنَ", lemma: "ذكر", pos: "verb", features: "conj+impf.3fp", root: "ذ ك ر", gloss: "to mention, recall" },
            { surface: "خَيْرَهُ", lemma: "خير", pos: "noun", features: "acc+3ms", root: "خ ي ر", gloss: "good, goodness" },
            { surface: "وَبِرَّهُ", lemma: "بر", pos: "noun", features: "conj+acc+3ms", root: "ب ر ر", gloss: "piety, dutifulness" }
          ]
        },
        {
          id: "qr2-41-018",
          ar: "وَقَدْ أَخْبَرَنِيْ أَشْرَافٌ مِنْ أَهْلِ هٰذَا الْحَيِّ أَنَّهُ كَانَ يُوَاسِيْهِمْ، وَيَصِلُهُمْ بِمَعْرُوْفٍ كُلَّ شَهْرٍ، وَلَمْ نَعْلَمْ ذٰلِكَ أَهْلَ ذٰلِكَ الْبَيْتِ.",
          en: "and dignitaries from the people of this neighborhood told me that he used to console them and give them kindness every month, and the people of that house did not even know it.",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "أَخْبَرَنِيْ", lemma: "أخبر", pos: "verb", features: "perf.3ms+1s", root: "خ ب ر", gloss: "to inform" },
            { surface: "أَشْرَافٌ", lemma: "أشراف", pos: "noun", features: "indef.nom", root: "ش ر ف", gloss: "nobles, dignitaries" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from, among" },
            { surface: "أَهْلِ", lemma: "أهل", pos: "noun", features: "gen.constr", root: "أ ه ل", gloss: "people (of)" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "this" },
            { surface: "الْحَيِّ", lemma: "حي", pos: "noun", features: "def.gen", root: "ح ي ي", gloss: "neighborhood, quarter" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "3ms", root: "", gloss: "that he" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "to be" },
            { surface: "يُوَاسِيْهِمْ", lemma: "واسى", pos: "verb", features: "impf.3ms+3mp", root: "أ س و", gloss: "to console, share one's means with" },
            { surface: "وَيَصِلُهُمْ", lemma: "وصل", pos: "verb", features: "conj+impf.3ms+3mp", root: "و ص ل", gloss: "to aid, treat kindly" },
            { surface: "بِمَعْرُوْفٍ", lemma: "معروف", pos: "noun", features: "prep+indef.gen", root: "ع ر ف", gloss: "kindness, good treatment" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "شَهْرٍ", lemma: "شهر", pos: "noun", features: "indef.gen", root: "ش ه ر", gloss: "month" },
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and did not" },
            { surface: "نَعْلَمْ", lemma: "علم", pos: "verb", features: "impf.1p", root: "ع ل م", gloss: "to know" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "أَهْلَ", lemma: "أهل", pos: "noun", features: "acc.constr", root: "أ ه ل", gloss: "people (of)" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "الْبَيْتِ", lemma: "بيت", pos: "noun", features: "def.gen", root: "ب ي ت", gloss: "house" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا اقْتَدَىٰ الرَّجُلُ بِيُوْسُفَ عَلَيْهِ السَّلَامُ؟",
          options: ["فِي الْعِفَّةِ وَالأَمَانَةِ", "فِي الشَّجَاعَةِ", "فِي الْعِلْمِ"],
          answer: 0,
          qEn: "In what did the man follow Yusuf's (peace be upon him) example?",
          optionsEn: ["In chastity and trustworthiness", "In courage", "In knowledge"]
        },
        {
          q: "مَتَىٰ عَرَفَ الأَوْلَادُ بِرَّ جَدِّهِمْ وَإِحْسَانَهُ؟",
          options: ["بَعْدَ وَفَاتِهِ", "فِيْ طُفُوْلَتِهِمْ", "قَبْلَ وَفَاتِهِ بِسَنَةٍ"],
          answer: 0,
          qEn: "When did the children learn of their grandfather's piety and kindness?",
          optionsEn: ["After his death", "In their childhood", "A year before his death"]
        }
      ]
    },
    {
      en: "The seventh is a man who remembers Allah alone in private until his eyes fill with tears. The children resolved to strive for as many of the seven traits as they could, since one who gathers several virtues earns more than one who has only a single virtue — and Sulayman closed with the assurance that Allah never lets the reward of the good-doers go to waste.",
      sentences: [
        {
          id: "qr2-41-019",
          ar: "وَرَجُلٌ ذَكَرَ اللهَ خَالِيًا فَفَاضَتْ عَيْنَاهُ.",
          en: "And a man who remembered Allah in private, so his eyes overflowed with tears.",
          tokens: [
            { surface: "وَرَجُلٌ", lemma: "رجل", pos: "noun", features: "conj+indef.nom", root: "ر ج ل", gloss: "man" },
            { surface: "ذَكَرَ", lemma: "ذكر", pos: "verb", features: "perf.3ms", root: "ذ ك ر", gloss: "to remember, mention" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", root: "", gloss: "Allah" },
            { surface: "خَالِيًا", lemma: "خالي", pos: "adj", features: "indef.acc", root: "خ ل و", gloss: "alone, in private" },
            { surface: "فَفَاضَتْ", lemma: "فاض", pos: "verb", features: "conj+perf.3fs", root: "ف ي ض", gloss: "to overflow, brim" },
            { surface: "عَيْنَاهُ", lemma: "عين", pos: "noun", features: "du+3ms", root: "ع ي ن", gloss: "eye" }
          ]
        },
        {
          id: "qr2-41-020",
          ar: "قَالَ الأَوْلَادُ: أَمَّا نَحْنُ فَنَجْتَهِدُ جَمِيْعًا أَنْ نَكُوْنَ شُبَّانًا نَشَؤُوْا فِيْ عِبَادَةِ اللهِ تَعَالَىٰ، وَنَجْتَهِدُ فِيْ غَيْرِ ذٰلِكَ مِنَ الْفَضَائِلِ أَيْضًا،",
          en: "The children said, \"As for us, we shall all strive to be young men raised in the worship of Allah, the Exalted, and we shall strive in other virtues too,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "الأَوْلَادُ", lemma: "ولد", pos: "noun", features: "pl.def.nom", root: "و ل د", gloss: "children, sons" },
            { surface: "أَمَّا", lemma: "أما", pos: "part", features: "part", root: "", gloss: "as for" },
            { surface: "نَحْنُ", lemma: "نحن", pos: "noun", features: "nom.1p", root: "", gloss: "we" },
            { surface: "فَنَجْتَهِدُ", lemma: "اجتهد", pos: "verb", features: "conj+impf.1p", root: "ج ه د", gloss: "to strive, endeavor" },
            { surface: "جَمِيْعًا", lemma: "جميع", pos: "adv", features: "indef.acc", root: "ج م ع", gloss: "all, altogether" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "نَكُوْنَ", lemma: "كان", pos: "verb", features: "impf.1p", root: "ك و ن", gloss: "to be" },
            { surface: "شُبَّانًا", lemma: "شاب", pos: "noun", features: "pl.indef.acc", root: "ش ب ب", gloss: "young man" },
            { surface: "نَشَؤُوْا", lemma: "نشأ", pos: "verb", features: "perf.3mp", root: "ن ش أ", gloss: "to grow up, be raised" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "عِبَادَةِ", lemma: "عبادة", pos: "noun", features: "gen.constr", root: "ع ب د", gloss: "worship" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "تَعَالَىٰ", lemma: "تعالى", pos: "verb", features: "perf.3ms", root: "ع ل و", gloss: "He is Exalted (epithet)" },
            { surface: "وَنَجْتَهِدُ", lemma: "اجتهد", pos: "verb", features: "conj+impf.1p", root: "ج ه د", gloss: "to strive, endeavor" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "غَيْرِ", lemma: "غير", pos: "noun", features: "gen.constr", root: "غ ي ر", gloss: "other than" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from, among" },
            { surface: "الْفَضَائِلِ", lemma: "فضيلة", pos: "noun", features: "pl.def.gen", root: "ف ض ل", gloss: "virtue" },
            { surface: "أَيْضًا", lemma: "أيضا", pos: "adv", features: "indef.acc", root: "", gloss: "also" }
          ]
        },
        {
          id: "qr2-41-021",
          ar: "وَلَعَلَّنَا يَا أَبَانَا إِذَا جَمَعْنَا مِنْهَا خِصَالًا نَنَالُ بِهَا مَكَانًا خَاصًّا فِيْ ذٰلِكَ الظِّلِّ أَيْضًا، فَفَرْقٌ بَيْنَ مَنْ يَأْتِيْ بِفَضِيْلَةٍ، وَبَيْنَ مَنْ يَأْتِيْ بِفَضَائِلَ.",
          en: "and perhaps, father, if we gather traits from among them we may attain by them a special place in that shade too — for there is a difference between one who comes with a single virtue and one who comes with many virtues.\"",
          tokens: [
            { surface: "وَلَعَلَّنَا", lemma: "لعل", pos: "part", features: "conj+1p", root: "", gloss: "perhaps" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَبَانَا", lemma: "أب", pos: "noun", features: "acc+1p", root: "أ ب و", gloss: "father" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if, when" },
            { surface: "جَمَعْنَا", lemma: "جمع", pos: "verb", features: "perf.1p", root: "ج م ع", gloss: "to gather, collect" },
            { surface: "مِنْهَا", lemma: "من", pos: "prep", features: "prep+3fs", root: "", gloss: "from it" },
            { surface: "خِصَالًا", lemma: "خصلة", pos: "noun", features: "pl.indef.acc", root: "خ ص ل", gloss: "trait, quality" },
            { surface: "نَنَالُ", lemma: "نال", pos: "verb", features: "impf.1p", root: "ن ي ل", gloss: "to attain" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "by, with it" },
            { surface: "مَكَانًا", lemma: "مكان", pos: "noun", features: "indef.acc", root: "ك و ن", gloss: "place" },
            { surface: "خَاصًّا", lemma: "خاص", pos: "adj", features: "indef.acc", root: "خ ص ص", gloss: "special, particular" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "الظِّلِّ", lemma: "ظل", pos: "noun", features: "def.gen", root: "ظ ل ل", gloss: "shade" },
            { surface: "أَيْضًا", lemma: "أيضا", pos: "adv", features: "indef.acc", root: "", gloss: "also" },
            { surface: "فَفَرْقٌ", lemma: "فرق", pos: "noun", features: "conj+indef.nom", root: "ف ر ق", gloss: "difference" },
            { surface: "بَيْنَ", lemma: "بين", pos: "prep", features: "acc.constr", root: "", gloss: "between" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "rel", root: "", gloss: "whoever" },
            { surface: "يَأْتِيْ", lemma: "أتى", pos: "verb", features: "impf.3ms", root: "أ ت ي", gloss: "to come, bring" },
            { surface: "بِفَضِيْلَةٍ", lemma: "فضيلة", pos: "noun", features: "prep+indef.gen", root: "ف ض ل", gloss: "virtue" },
            { surface: "وَبَيْنَ", lemma: "بين", pos: "prep", features: "conj+acc.constr", root: "", gloss: "and between" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "rel", root: "", gloss: "whoever" },
            { surface: "يَأْتِيْ", lemma: "أتى", pos: "verb", features: "impf.3ms", root: "أ ت ي", gloss: "to come, bring" },
            { surface: "بِفَضَائِلَ", lemma: "فضيلة", pos: "noun", features: "prep+pl.indef.gen", root: "ف ض ل", gloss: "virtues" }
          ]
        },
        {
          id: "qr2-41-022",
          ar: "سُلَيْمَانُ: هُوَ كَذٰلِكَ «إِنَّ اللهَ لَا يُضِيْعُ أَجْرَ الْمُحْسِنِيْنَ، وَلَا تُظْلَمُ نَفْسٌ شَيْئًا».",
          en: "Sulayman: \"It is so — indeed Allah does not waste the reward of the doers of good, and no soul is wronged in anything.\"",
          tokens: [
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", root: "", gloss: "Sulayman (name)" },
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom.3ms", root: "", gloss: "it (is)" },
            { surface: "كَذٰلِكَ", lemma: "كذلك", pos: "adv", features: "adv", root: "", gloss: "thus, likewise" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", root: "", gloss: "Allah" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُضِيْعُ", lemma: "ضاع", pos: "verb", features: "impf.3ms", root: "ض ي ع", gloss: "to cause to be lost, waste" },
            { surface: "أَجْرَ", lemma: "أجر", pos: "noun", features: "acc.constr", root: "أ ج ر", gloss: "reward" },
            { surface: "الْمُحْسِنِيْنَ", lemma: "محسن", pos: "noun", features: "pl.def.gen", root: "ح س ن", gloss: "doer of good, benefactor" },
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "تُظْلَمُ", lemma: "ظلم", pos: "verb", features: "impf.pass.3fs", root: "ظ ل م", gloss: "to be wronged" },
            { surface: "نَفْسٌ", lemma: "نفس", pos: "noun", features: "indef.nom", root: "ن ف س", gloss: "soul, person" },
            { surface: "شَيْئًا", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "thing, anything" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَحْدُثُ لِمَنْ يَذْكُرُ اللهَ خَالِيًا كَمَا فِي الْحَدِيْثِ؟",
          options: ["تَفِيْضُ عَيْنَاهُ", "يَنَامُ بِسُرْعَةٍ", "يَنْسَىٰ كُلَّ شَيْءٍ"],
          answer: 0,
          qEn: "According to the hadith, what happens to one who remembers Allah alone in private?",
          optionsEn: ["His eyes overflow with tears", "He falls asleep quickly", "He forgets everything"]
        },
        {
          q: "لِمَاذَا يُرِيْدُ الأَوْلَادُ أَنْ يَجْمَعُوا أَكْثَرَ مِنْ خَصْلَةٍ وَاحِدَةٍ؟",
          options: [
            "لِأَنَّ مَنْ يَأْتِيْ بِفَضَائِلَ يَنَالُ أَكْثَرَ مِمَّنْ يَأْتِيْ بِفَضِيْلَةٍ وَاحِدَةٍ",
            "لِأَنَّ سُلَيْمَانَ أَمَرَهُمْ بِذٰلِكَ",
            "لِأَنَّ ذٰلِكَ أَسْهَلُ عَلَيْهِمْ"
          ],
          answer: 0,
          qEn: "Why do the children want to gather more than a single trait?",
          optionsEn: [
            "Because one who brings several virtues attains more than one who brings a single virtue",
            "Because Sulayman ordered them to",
            "Because that is easier for them"
          ]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "شَابٌّ",
        post: "فِيْ عِبَادَةِ اللهِ تَعَالَىٰ.",
        en: "a young man who grew up in the worship of Allah, the Exalted",
        options: ["نَشَأَ", "يَنْشَأُ", "نَشَأْتُ", "نَشَأْنَا"],
        answer: 0,
        rationales: [
          "Perfect 3rd person masculine singular — \"grew up\".",
          "Imperfect 3rd masculine singular — \"grows up\".",
          "Perfect 1st singular — \"I grew up\".",
          "Perfect 1st plural — \"we grew up\"."
        ]
      },
      {
        type: "cloze",
        pre: "وَرَجُلٌ",
        post: "بِصَدَقَةٍ فَأَخْفَاهَا حَتَّىٰ لَا تَعْلَمَ شِمَالُهُ مَا تُنْفِقُ يَمِيْنُهُ.",
        en: "and a man who gave charity and concealed it so that his left hand would not know what his right hand spends",
        options: ["تَصَدَّقَ", "يَتَصَدَّقُ", "تَصَدَّقْتُ", "تَصَدَّقُوا"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular — \"gave charity\".",
          "Imperfect 3rd masculine singular — \"gives charity\".",
          "Perfect 1st singular — \"I gave charity\".",
          "Perfect 3rd masculine plural — \"they gave charity\"."
        ]
      },
      {
        type: "cloze",
        pre: "وَرَجُلٌ",
        post: "اللهَ خَالِيًا فَفَاضَتْ عَيْنَاهُ.",
        en: "and a man who remembered Allah in private, so his eyes overflowed with tears",
        options: ["ذَكَرَ", "يَذْكُرُ", "ذَكَرْتُ", "ذَكَرُوا"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular — \"remembered\".",
          "Imperfect 3rd masculine singular — \"remembers\".",
          "Perfect 1st singular — \"I remembered\".",
          "Perfect 3rd masculine plural — \"they remembered\"."
        ]
      }
    ],
    shift: [
      {
        type: "shift",
        base: "نَجْتَهِدُ فِيْ عِبَادَةِ اللهِ",
        pre: "",
        post: "فِيْ عِبَادَةِ اللهِ",
        targetPerson: "هُوَ",
        targetEn: "he",
        options: ["يَجْتَهِدُ", "تَجْتَهِدُ", "نَجْتَهِدُ", "يَجْتَهِدُونَ"],
        answer: 0,
        rationales: [
          "3rd masculine singular takes the prefix يَـ.",
          "",
          "",
          ""
        ]
      },
      {
        type: "shift",
        base: "نَنَالُ بِهَا مَكَانًا خَاصًّا",
        pre: "",
        post: "بِهَا مَكَانًا خَاصًّا",
        targetPerson: "أَنْتُمْ",
        targetEn: "you (pl.)",
        options: ["تَنَالُونَ", "يَنَالُونَ", "نَنَالُ", "تَنَالُ"],
        answer: 0,
        rationales: [
          "2nd masculine plural: prefix تَـ plus the suffix ـونَ.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

// القراءة الراشدة, volume two, chapter 43 (printed heading "٤٣") --
// الْعَيْنُ (٢) -- "The Eye" (part 2 of 2; part 1 is chapter 42, pp.147-149).
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 150-151 (PDF page
// index == printed page number). Where part 1 was scientific/descriptive,
// part 2 turns devotional: the eye as a blessing worth Paradise, the blind
// scholars who excelled despite their loss, the right use of sight and
// tears, and two hadiths plus the Prophet's ﷺ own supplication. Ends the
// two-part "العين" unit with a "٭ ٭ ٭" divider.
//
// The ﷺ honorific is kept in `ar` but excluded from tokens and stripped
// for reconstruction, exactly as established in qiraah-v1/chapter-07.js
// and reused in chapter-41.js/42.js of this book; validate-chapter.mjs
// was updated alongside this chapter to strip ﷺ/ﷻ too.
//
// Two Qur'an/hadith-quotation notes:
//   - "«يَعْلَمُ خَائِنَةَ الأَعْيُنِ، وَمَا تُخْفِي الصُّدُوْرُ»" is a direct
//     Qur'anic quotation (Ghafir 40:19), but -- like the echoing line
//     flagged in chapter-41.js -- the book prints it with the same plain
//     guillemets «» it uses for ordinary quoted speech, not the ornamental
//     Qur'an brackets ﴿﴾ it uses elsewhere. Transcribed as printed;
//     same open question as chapter-41 (see QASAS_AGENT_BRIEF.md §6/§9).
//   - Both hadiths here (the "two beloved things" hadith qudsi, and the
//     "two drops and two marks" hadith) are transcribed exactly as
//     printed on the scanned page rather than from memorized standard
//     wording, including this book's own vocalization choices.
//
// This chapter is unusually proper-noun-dense (six blind scholars named
// in one sentence: Qatadah, Hammad ibn Zayd, Zubayr al-Basri, Abu
// Ja'far, Abu al-'Ala' al-Ma'arri, Bashar ibn Burd, al-Shatibi). Each
// name is tokenized as its own `proper` word (following the "بِنِ" =
// separate already-known lemma "ابن" convention from qiraah-v1/chapter-02
// rather than folding whole names into one multi-word lemma), so the
// build stage can use any of them individually as decoys/targets.
//
// Book placement: continues content-lit/qiraah-v2, third chapter
// authored there (after ch41, ch42). Chapters 32-40 still need splicing
// in before ch41 by whoever authors them.
export const CHAPTER = {
  id: "ch43",
  title: {
    ar: "الْعَيْنُ (٢)",
    en: "The Eye (2)"
  },
  pages: [150, 151],
  newWords: [
    "جليل", "ابتلى", "عوّض", "لزم", "فاق", "أعمى", "أقر", "مفسر", "محدث",
    "فقيه", "نحوي", "أديب", "تجويد", "ضنّ", "خائنة", "طاعة", "خشية",
    "خشع", "شبع", "استجاب"
  ],
  lemmas: {
    "جليل": { root: "ج ل ل", pos: "adj", gloss: "great, majestic" },
    "ابتلى": { root: "ب ل و", pos: "verb", gloss: "to test, try" },
    "عوّض": { root: "ع و ض", pos: "verb", gloss: "to compensate" },
    "لزم": { root: "ل ز م", pos: "verb", gloss: "to be necessary, incumbent" },
    "فاق": { root: "ف و ق", pos: "verb", gloss: "to surpass, excel" },
    "أعمى": { root: "ع م ي", pos: "noun", gloss: "blind (person)" },
    "أقر": { root: "ق ر ر", pos: "verb", gloss: "to acknowledge, concede" },
    "مفسر": { root: "ف س ر", pos: "noun", gloss: "exegete, Qur'an commentator" },
    "محدث": { root: "ح د ث", pos: "noun", gloss: "hadith scholar, narrator" },
    "فقيه": { root: "ف ق ه", pos: "noun", gloss: "jurist" },
    "نحوي": { root: "ن ح و", pos: "noun", gloss: "grammarian" },
    "أديب": { root: "أ د ب", pos: "noun", gloss: "man of letters, litterateur" },
    "تجويد": { root: "ج و د", pos: "noun", gloss: "tajwid (rules of Qur'an recitation)" },
    "ضنّ": {
      root: "ض ن ن", pos: "verb", gloss: "to withhold, be stingy (with)",
      book_note: "ضَنَّ يَضِنُّ ضَنّاً بِالشَّيْءِ عليه: بَخِلَ بُخْلاً شديداً."
    },
    "خائنة": { root: "خ و ن", pos: "noun", gloss: "treachery, a stealthy glance" },
    "طاعة": { root: "ط و ع", pos: "noun", gloss: "obedience" },
    "خشية": { root: "خ ش ي", pos: "noun", gloss: "fear, awe (of God)" },
    "خشع": { root: "خ ش ع", pos: "verb", gloss: "to be humble, reverent" },
    "شبع": { root: "ش ب ع", pos: "verb", gloss: "to be satisfied, full" },
    "استجاب": { root: "ج و ب", pos: "verb", gloss: "to be answered, responded to" },
    "دمع": {
      root: "د م ع", pos: "noun", gloss: "tears; to shed tears",
      book_note: "دَمَعَ يَدْمَعُ دَمْعاً: دَمَعَتِ الْعَيْنُ: سَال ماؤها."
    }
  },
  paragraphs: [
    {
      en: "That is why the eye is so precious and valuable, such a great blessing, that the Prophet ﷺ said: \"Allah, Mighty and Majestic, said: 'If I try My servant with his two beloved ones and he bears it patiently, I compensate him for them with Paradise' -- meaning his two eyes.\"",
      sentences: [
        {
          id: "qr2-43-001",
          ar: "وَلِذٰلِكَ كَانَتِ الْعَيْنُ ثَمِيْنَةً غَالِيَةً وَنِعْمَةً جَلِيْلَةً ،",
          en: "That is why the eye is precious and valuable, a great blessing,",
          tokens: [
            { surface: "وَلِذٰلِكَ", lemma: "لذلك", pos: "adv", features: "conj+adv", root: "", gloss: "and that is why" },
            { surface: "كَانَتِ", lemma: "كان", pos: "verb", features: "perf.3fs", root: "ك و ن", gloss: "to be" },
            { surface: "الْعَيْنُ", lemma: "عين", pos: "noun", features: "def.nom", root: "ع ي ن", gloss: "the eye" },
            { surface: "ثَمِيْنَةً", lemma: "ثمين", pos: "adj", features: "indef.acc.f", root: "ث م ن", gloss: "precious, valuable" },
            { surface: "غَالِيَةً", lemma: "غالي", pos: "adj", features: "indef.acc.f", root: "غ ل و", gloss: "precious, costly" },
            { surface: "وَنِعْمَةً", lemma: "نعمة", pos: "noun", features: "conj+indef.acc", root: "ن ع م", gloss: "and a blessing" },
            { surface: "جَلِيْلَةً", lemma: "جليل", pos: "adj", features: "indef.acc.f", root: "ج ل ل", gloss: "great, majestic" }
          ]
        },
        {
          id: "qr2-43-002",
          ar: "حَتَّىٰ قَالَ النَّبِيُّ ﷺ:",
          en: "so much so that the Prophet ﷺ said:",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "so much so that" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" }
          ]
        },
        {
          id: "qr2-43-003",
          ar: "إِنَّ اللهَ عَزَّ وَجَلَّ قَالَ:",
          en: "\"Allah, Mighty and Majestic, said:",
          tokens: [
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", root: "", gloss: "Allah" },
            { surface: "عَزَّ", lemma: "عز", pos: "verb", features: "perf.3ms", root: "ع ز ز", gloss: "to be mighty" },
            { surface: "وَجَلَّ", lemma: "جل", pos: "verb", features: "conj+perf.3ms", root: "ج ل ل", gloss: "and majestic" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "to say" }
          ]
        },
        {
          id: "qr2-43-004",
          ar: "إِذَا ابْتَلَيْتُ عَبْدِيْ بِحَبِيْبَتَيْهِ فَصَبَرَ ،",
          en: "'If I try My servant with his two beloved ones and he bears it patiently,",
          tokens: [
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if, when" },
            { surface: "ابْتَلَيْتُ", lemma: "ابتلى", pos: "verb", features: "perf.1s", root: "ب ل و", gloss: "to test, try" },
            { surface: "عَبْدِيْ", lemma: "عبد", pos: "noun", features: "acc+1s", root: "ع ب د", gloss: "My servant" },
            { surface: "بِحَبِيْبَتَيْهِ", lemma: "حبيبة", pos: "noun", features: "prep+du.gen+3ms", root: "ح ب ب", gloss: "with his two beloved things" },
            { surface: "فَصَبَرَ", lemma: "صبر", pos: "verb", features: "conj+perf.3ms", root: "ص ب ر", gloss: "to be patient" }
          ]
        },
        {
          id: "qr2-43-005",
          ar: "عَوَّضْتُهُ مِنْهُما الْجَنَّةَ ،",
          en: "I compensate him for them with Paradise,'",
          tokens: [
            { surface: "عَوَّضْتُهُ", lemma: "عوّض", pos: "verb", features: "perf.1s+3ms", root: "ع و ض", gloss: "to compensate" },
            { surface: "مِنْهُما", lemma: "من", pos: "prep", features: "prep+3d", root: "", gloss: "for the two of them" },
            { surface: "الْجَنَّةَ", lemma: "جنة", pos: "noun", features: "def.acc", root: "ج ن ن", gloss: "Paradise, garden" }
          ]
        },
        {
          id: "qr2-43-006",
          ar: "يُرِيْدُ عَيْنَيْهِ.",
          en: "meaning his two eyes.\"",
          tokens: [
            { surface: "يُرِيْدُ", lemma: "أراد", pos: "verb", features: "impf.3ms", root: "ر و د", gloss: "to mean, intend" },
            { surface: "عَيْنَيْهِ", lemma: "عين", pos: "noun", features: "du.acc+3ms", root: "ع ي ن", gloss: "his two eyes" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا وَعَدَ اللهُ مَنِ ابْتُلِيَ بِفَقْدِ عَيْنَيْهِ فَصَبَرَ؟",
          options: ["الْجَنَّةَ", "الْمَالَ الْكَثِيْرَ", "طُوْلَ الْعُمْرِ"],
          answer: 0,
          qEn: "What did Allah promise the one who is tried with the loss of his two eyes and bears it patiently?",
          optionsEn: ["Paradise", "Great wealth", "A long life"]
        }
      ]
    },
    {
      en: "It is not necessary that a person who loses his sight becomes idle and wasted -- many blind people have surpassed many sighted people in knowledge, and the world has acknowledged their excellence: scholars such as the exegete Qatadah, the hadith-scholar Hammad ibn Zayd, the jurist Zubayr al-Basri, the grammarian Abu Ja'far, the man of letters Abu al-'Ala' al-Ma'arri, the poet Bashar ibn Burd, and the imam of tajwid, Imam al-Shatibi.",
      sentences: [
        {
          id: "qr2-43-007",
          ar: "وَلَا يَلْزَمُ أَنْ يَكُوْنَ الإِنْسَانُ إِذَا فَقَدَ بَصَرَهُ عَاطِلاً ضَائِعاً ،",
          en: "It is not necessary that a person, if he loses his sight, becomes idle and wasted,",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَلْزَمُ", lemma: "لزم", pos: "verb", features: "impf.3ms", root: "ل ز م", gloss: "to be necessary" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَكُوْنَ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "to be" },
            { surface: "الإِنْسَانُ", lemma: "إنسان", pos: "noun", features: "def.nom", root: "أ ن س", gloss: "a person" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if" },
            { surface: "فَقَدَ", lemma: "فقد", pos: "verb", features: "perf.3ms", root: "ف ق د", gloss: "to lose" },
            { surface: "بَصَرَهُ", lemma: "بصر", pos: "noun", features: "acc+3ms", root: "ب ص ر", gloss: "his sight" },
            { surface: "عَاطِلاً", lemma: "عاطل", pos: "adj", features: "indef.acc", root: "ع ط ل", gloss: "idle, unemployed" },
            { surface: "ضَائِعاً", lemma: "ضائع", pos: "adj", features: "indef.acc", root: "ض ي ع", gloss: "lost, wasted" }
          ]
        },
        {
          id: "qr2-43-008",
          ar: "فَلَقَدْ فَاقَ كَثِيْرٌ مِنَ الْعُمْيَانِ كَثِيْراً مِنْ أَهْلِ الْبَصَرِ فِي الْعِلْمِ ،",
          en: "for many of the blind have surpassed many sighted people in knowledge,",
          tokens: [
            { surface: "فَلَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "فَاقَ", lemma: "فاق", pos: "verb", features: "perf.3ms", root: "ف و ق", gloss: "to surpass, excel" },
            { surface: "كَثِيْرٌ", lemma: "كثير", pos: "noun", features: "indef.nom", root: "ك ث ر", gloss: "many" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْعُمْيَانِ", lemma: "أعمى", pos: "noun", features: "pl.def.gen", root: "ع م ي", gloss: "the blind" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adj", features: "indef.acc", root: "ك ث ر", gloss: "many" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "أَهْلِ", lemma: "أهل", pos: "noun", features: "gen.constr", root: "أ ه ل", gloss: "people (of)" },
            { surface: "الْبَصَرِ", lemma: "بصر", pos: "noun", features: "def.gen", root: "ب ص ر", gloss: "sight" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْعِلْمِ", lemma: "علم", pos: "noun", features: "def.gen", root: "ع ل م", gloss: "knowledge" }
          ]
        },
        {
          id: "qr2-43-009",
          ar: "وَأَقَرَّتْ لَهُمُ الدُّنْيَا بِالْفَضْلِ ،",
          en: "and the world has acknowledged their excellence,",
          tokens: [
            { surface: "وَأَقَرَّتْ", lemma: "أقر", pos: "verb", features: "conj+perf.3fs", root: "ق ر ر", gloss: "to acknowledge, concede" },
            { surface: "لَهُمُ", lemma: "ل", pos: "prep", features: "prep+3mp", root: "", gloss: "to them" },
            { surface: "الدُّنْيَا", lemma: "دنيا", pos: "noun", features: "def.nom", root: "د ن و", gloss: "the world" },
            { surface: "بِالْفَضْلِ", lemma: "فضل", pos: "noun", features: "prep+def.gen", root: "ف ض ل", gloss: "with excellence" }
          ]
        },
        {
          id: "qr2-43-010",
          ar: "كَالْمُفَسِّرِ قَتَادَةَ ، وَالْمُحَدِّثِ حَمَّادِ بْنِ زَيْدٍ ، وَالْفَقِيْهِ زُبَيْرٍ الْبَصْرِيِّ؛",
          en: "such as the exegete Qatadah, the hadith-scholar Hammad ibn Zayd, the jurist Zubayr al-Basri;",
          tokens: [
            { surface: "كَالْمُفَسِّرِ", lemma: "مفسر", pos: "noun", features: "prep+def.gen", root: "ف س ر", gloss: "such as the exegete" },
            { surface: "قَتَادَةَ", lemma: "قتادة", pos: "proper", features: "gen", root: "", gloss: "Qatadah (name)" },
            { surface: "وَالْمُحَدِّثِ", lemma: "محدث", pos: "noun", features: "conj+def.gen", root: "ح د ث", gloss: "the hadith-scholar" },
            { surface: "حَمَّادِ", lemma: "حماد", pos: "proper", features: "gen", root: "", gloss: "Hammad (name)" },
            { surface: "بْنِ", lemma: "ابن", pos: "noun", features: "gen.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "زَيْدٍ", lemma: "زيد", pos: "proper", features: "gen", root: "", gloss: "Zayd (name)" },
            { surface: "وَالْفَقِيْهِ", lemma: "فقيه", pos: "noun", features: "conj+def.gen", root: "ف ق ه", gloss: "the jurist" },
            { surface: "زُبَيْرٍ", lemma: "زبير", pos: "proper", features: "gen", root: "", gloss: "Zubayr (name)" },
            { surface: "الْبَصْرِيِّ", lemma: "بصري", pos: "proper", features: "def.gen", root: "", gloss: "al-Basri (of Basra)" }
          ]
        },
        {
          id: "qr2-43-011",
          ar: "وَالنَّحْوِيِّ أَبِيْ جَعْفَرٍ ، وَالأَدِيْبِ أَبِي الْعَلَاءِ الْمَعَرِّيْ ، وَالشَّاعِرِ بَشَّارِ بْنِ بُرْدٍ ، وَإِمَامِ التَّجْوِيْدِ الإِمَام الشَّاطِبِيِّ.",
          en: "the grammarian Abu Ja'far, the man of letters Abu al-'Ala' al-Ma'arri, the poet Bashar ibn Burd, and the imam of tajwid, Imam al-Shatibi.",
          tokens: [
            { surface: "وَالنَّحْوِيِّ", lemma: "نحوي", pos: "noun", features: "conj+def.gen", root: "ن ح و", gloss: "and the grammarian" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "gen.constr", root: "أ ب و", gloss: "father of (i.e. Abu)" },
            { surface: "جَعْفَرٍ", lemma: "جعفر", pos: "proper", features: "gen", root: "", gloss: "Ja'far (name)" },
            { surface: "وَالأَدِيْبِ", lemma: "أديب", pos: "noun", features: "conj+def.gen", root: "أ د ب", gloss: "and the man of letters" },
            { surface: "أَبِي", lemma: "أب", pos: "noun", features: "gen.constr", root: "أ ب و", gloss: "father of (i.e. Abu)" },
            { surface: "الْعَلَاءِ", lemma: "علاء", pos: "proper", features: "def.gen", root: "", gloss: "al-'Ala' (name)" },
            { surface: "الْمَعَرِّيْ", lemma: "معري", pos: "proper", features: "def.gen", root: "", gloss: "al-Ma'arri (name)" },
            { surface: "وَالشَّاعِرِ", lemma: "شاعر", pos: "noun", features: "conj+def.gen", root: "ش ع ر", gloss: "and the poet" },
            { surface: "بَشَّارِ", lemma: "بشار", pos: "proper", features: "gen", root: "", gloss: "Bashar (name)" },
            { surface: "بْنِ", lemma: "ابن", pos: "noun", features: "gen.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "بُرْدٍ", lemma: "برد", pos: "proper", features: "gen", root: "", gloss: "Burd (name)" },
            { surface: "وَإِمَامِ", lemma: "إمام", pos: "noun", features: "conj+gen.constr", root: "أ م م", gloss: "and the imam (of)" },
            { surface: "التَّجْوِيْدِ", lemma: "تجويد", pos: "noun", features: "def.gen", root: "ج و د", gloss: "tajwid (Qur'an recitation)" },
            { surface: "الإِمَام", lemma: "إمام", pos: "noun", features: "def.gen", root: "أ م م", gloss: "Imam" },
            { surface: "الشَّاطِبِيِّ", lemma: "شاطبي", pos: "proper", features: "def.gen", root: "", gloss: "al-Shatibi (name)" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ كَثِيْرٌ مِنَ الْعُمْيَانِ رَغْمَ فَقْدِ بَصَرِهِمْ؟",
          options: ["فَاقُوا كَثِيْراً مِنْ أَهْلِ الْبَصَرِ فِي الْعِلْمِ", "عَاشُوا عَاطِلِيْنَ ضَائِعِيْنَ", "ابْتَعَدُوا عَنِ النَّاسِ"],
          answer: 0,
          qEn: "What did many blind people achieve despite losing their sight?",
          optionsEn: ["They surpassed many sighted people in knowledge", "They lived idle and wasted lives", "They withdrew from people"]
        }
      ]
    },
    {
      en: "Part of this blessing's due is that a person should guard it and withhold it from what Allah has forbidden, for He -- Glory be to Him, the Exalted -- \"knows the treachery of the eyes, and what the breasts conceal.\"",
      sentences: [
        {
          id: "qr2-43-012",
          ar: "وَمِنْ حَقِّ هٰذِهِ النِّعْمَةِ أَنْ يُحَافِظَ عَلَيْهَا الإِنْسَانُ وَأَنْ يَضِنَّ بِهَا عَنْ مَحَارِمِ اللهِ ،",
          en: "Part of the due of this blessing is that a person should guard it and withhold it from what Allah has forbidden,",
          tokens: [
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and part of" },
            { surface: "حَقِّ", lemma: "حق", pos: "noun", features: "gen.constr", root: "ح ق ق", gloss: "the due (of)" },
            { surface: "هٰذِهِ", lemma: "هذه", pos: "dem", features: "f.sg", root: "", gloss: "this" },
            { surface: "النِّعْمَةِ", lemma: "نعمة", pos: "noun", features: "def.gen", root: "ن ع م", gloss: "blessing" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يُحَافِظَ", lemma: "حافظ", pos: "verb", features: "impf.3ms", root: "ح ف ظ", gloss: "to guard, preserve" },
            { surface: "عَلَيْهَا", lemma: "على", pos: "prep", features: "prep+3fs", root: "", gloss: "it" },
            { surface: "الإِنْسَانُ", lemma: "إنسان", pos: "noun", features: "def.nom", root: "أ ن س", gloss: "a person" },
            { surface: "وَأَنْ", lemma: "أن", pos: "part", features: "conj+part", root: "", gloss: "and that" },
            { surface: "يَضِنَّ", lemma: "ضنّ", pos: "verb", features: "impf.3ms", root: "ض ن ن", gloss: "to withhold, be stingy (with)" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "it" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "مَحَارِمِ", lemma: "محرم", pos: "noun", features: "pl.gen.constr", root: "ح ر م", gloss: "the forbidden things (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-43-013",
          ar: "فَإِنَّهُ سُبْحَانَهُ وَتَعَالَىٰ «يَعْلَمُ خَائِنَةَ الأَعْيُنِ ،",
          en: "for He, Glory be to Him and Exalted is He, \"knows the treachery of the eyes,",
          tokens: [
            { surface: "فَإِنَّهُ", lemma: "إن", pos: "part", features: "conj+3ms", root: "", gloss: "for He" },
            { surface: "سُبْحَانَهُ", lemma: "سبحان", pos: "noun", features: "acc+3ms", root: "س ب ح", gloss: "Glory be to Him" },
            { surface: "وَتَعَالَىٰ", lemma: "تعالى", pos: "verb", features: "conj+perf.3ms", root: "ع ل و", gloss: "and He is Exalted" },
            { surface: "يَعْلَمُ", lemma: "علم", pos: "verb", features: "impf.3ms", root: "ع ل م", gloss: "to know" },
            { surface: "خَائِنَةَ", lemma: "خائنة", pos: "noun", features: "acc.constr", root: "خ و ن", gloss: "the treachery (of)" },
            { surface: "الأَعْيُنِ", lemma: "عين", pos: "noun", features: "pl.def.gen", root: "ع ي ن", gloss: "the eyes" }
          ]
        },
        {
          id: "qr2-43-014",
          ar: "وَمَا تُخْفِي الصُّدُوْرُ».",
          en: "and what the breasts conceal.\"",
          tokens: [
            { surface: "وَمَا", lemma: "ما", pos: "rel", features: "conj+part", root: "", gloss: "and what" },
            { surface: "تُخْفِي", lemma: "أخفى", pos: "verb", features: "impf.3fs", root: "خ ف ي", gloss: "to hide, conceal" },
            { surface: "الصُّدُوْرُ", lemma: "صدر", pos: "noun", features: "pl.def.nom", root: "ص د ر", gloss: "the breasts, hearts" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَعْلَمُ اللهُ سُبْحَانَهُ وَتَعَالَىٰ عَنِ الأَعْيُنِ؟",
          options: ["خَائِنَتَهَا (نَظْرَتَهَا الْخَفِيَّةَ)", "لَوْنَهَا فَقَط", "حَجْمَهَا فَقَط"],
          answer: 0,
          qEn: "What does Allah, Glorified and Exalted, know about the eyes?",
          optionsEn: ["Their treachery (their stealthy glance)", "Only their color", "Only their size"]
        }
      ]
    },
    {
      en: "Part of its due is that one uses it in obedience to Allah, and sheds its tears in awe of Him. It has come in the noble hadith: \"Nothing is more beloved to Allah than two drops and two marks: a drop of tears shed from fear of Allah, and a drop of blood shed in Allah's path; as for the two marks -- a mark made in Allah's path, and a mark made in fulfilling one of Allah's obligatory duties.\"",
      sentences: [
        {
          id: "qr2-43-015",
          ar: "وَمِنْ حَقِّهَا أَنْ يَسْتَعْمِلَهَا فِيْ طَاعَةِ اللهِ ،",
          en: "Part of its due is that he uses it in obedience to Allah,",
          tokens: [
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and part of" },
            { surface: "حَقِّهَا", lemma: "حق", pos: "noun", features: "gen+3fs", root: "ح ق ق", gloss: "its due" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَسْتَعْمِلَهَا", lemma: "استعمل", pos: "verb", features: "impf.3ms+3fs", root: "ع م ل", gloss: "to use" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "طَاعَةِ", lemma: "طاعة", pos: "noun", features: "gen.constr", root: "ط و ع", gloss: "obedience (to)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-43-016",
          ar: "وَأَنْ يُرِيْقَ دَمْعَهَا فِيْ خَشْيَةِ اللهِ ،",
          en: "and that he sheds its tears in awe of Allah,",
          tokens: [
            { surface: "وَأَنْ", lemma: "أن", pos: "part", features: "conj+part", root: "", gloss: "and that" },
            { surface: "يُرِيْقَ", lemma: "أراق", pos: "verb", features: "impf.3ms", root: "ر ي ق", gloss: "to shed, pour out" },
            { surface: "دَمْعَهَا", lemma: "دمع", pos: "noun", features: "acc+3fs", root: "د م ع", gloss: "its tears" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "خَشْيَةِ", lemma: "خشية", pos: "noun", features: "gen.constr", root: "خ ش ي", gloss: "fear, awe (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-43-017",
          ar: "وَقَدْ جَاءَ فِي الْحَدِيْثِ الشَّرِيْفِ:",
          en: "and it has come in the noble hadith:",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "جَاءَ", lemma: "جاء", pos: "verb", features: "perf.3ms", root: "ج ي أ", gloss: "to come" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْحَدِيْثِ", lemma: "حديث", pos: "noun", features: "def.gen", root: "ح د ث", gloss: "the hadith" },
            { surface: "الشَّرِيْفِ", lemma: "شريف", pos: "adj", features: "def.gen", root: "ش ر ف", gloss: "noble" }
          ]
        },
        {
          id: "qr2-43-018",
          ar: "«لَيْسَ شَيْءٌ أَحَبَّ إِلَىٰ اللهِ مِنْ قَطْرَتَيْنِ وَأَثَرَيْنِ:",
          en: "\"Nothing is more beloved to Allah than two drops and two marks:",
          tokens: [
            { surface: "لَيْسَ", lemma: "ليس", pos: "verb", features: "perf.3ms", root: "ل ي س", gloss: "is not" },
            { surface: "شَيْءٌ", lemma: "شيء", pos: "noun", features: "indef.nom", root: "ش ي أ", gloss: "a thing" },
            { surface: "أَحَبَّ", lemma: "أحب", pos: "adj", features: "acc", root: "ح ب ب", gloss: "more beloved" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "قَطْرَتَيْنِ", lemma: "قطرة", pos: "noun", features: "du.indef.gen", root: "ق ط ر", gloss: "two drops" },
            { surface: "وَأَثَرَيْنِ", lemma: "أثر", pos: "noun", features: "conj+du.indef.gen", root: "أ ث ر", gloss: "and two marks" }
          ]
        },
        {
          id: "qr2-43-019",
          ar: "قَطْرَةِ دُمُوعٍ مِنْ خَشْيَةِ اللهِ ،",
          en: "a drop of tears from fear of Allah,",
          tokens: [
            { surface: "قَطْرَةِ", lemma: "قطرة", pos: "noun", features: "gen.constr", root: "ق ط ر", gloss: "a drop (of)" },
            { surface: "دُمُوعٍ", lemma: "دمع", pos: "noun", features: "pl.indef.gen", root: "د م ع", gloss: "tears" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "خَشْيَةِ", lemma: "خشية", pos: "noun", features: "gen.constr", root: "خ ش ي", gloss: "fear (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-43-020",
          ar: "وَقَطْرَةِ دَمٍ تُهْرَاقُ فِيْ سَبِيْلِ اللهِ ،",
          en: "and a drop of blood shed in the path of Allah;",
          tokens: [
            { surface: "وَقَطْرَةِ", lemma: "قطرة", pos: "noun", features: "conj+gen.constr", root: "ق ط ر", gloss: "and a drop (of)" },
            { surface: "دَمٍ", lemma: "دم", pos: "noun", features: "indef.gen", root: "د م و", gloss: "blood" },
            { surface: "تُهْرَاقُ", lemma: "هراق", pos: "verb", features: "pass.impf.3fs", root: "ه ر ق", gloss: "to be shed, poured out" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "سَبِيْلِ", lemma: "سبيل", pos: "noun", features: "gen.constr", root: "س ب ل", gloss: "the path (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-43-021",
          ar: "وَأَمَّا الأَثَرَانِ:",
          en: "and as for the two marks:",
          tokens: [
            { surface: "وَأَمَّا", lemma: "أما", pos: "part", features: "conj+part", root: "", gloss: "and as for" },
            { surface: "الأَثَرَانِ", lemma: "أثر", pos: "noun", features: "du.def.nom", root: "أ ث ر", gloss: "the two marks" }
          ]
        },
        {
          id: "qr2-43-022",
          ar: "فَأَثَرٌ فِيْ سَبِيْلِ اللهِ ،",
          en: "a mark [made] in the path of Allah,",
          tokens: [
            { surface: "فَأَثَرٌ", lemma: "أثر", pos: "noun", features: "conj+indef.nom", root: "أ ث ر", gloss: "a mark" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "سَبِيْلِ", lemma: "سبيل", pos: "noun", features: "gen.constr", root: "س ب ل", gloss: "the path (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-43-023",
          ar: "وَأَثَرٌ فِيْ فَرِيْضَةٍ مِنْ فَرَائِضِ اللهِ».",
          en: "and a mark [made] in fulfilling one of Allah's obligatory duties.\"",
          tokens: [
            { surface: "وَأَثَرٌ", lemma: "أثر", pos: "noun", features: "conj+indef.nom", root: "أ ث ر", gloss: "and a mark" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "فَرِيْضَةٍ", lemma: "فريضة", pos: "noun", features: "indef.gen", root: "ف ر ض", gloss: "an obligatory duty" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "فَرَائِضِ", lemma: "فريضة", pos: "noun", features: "pl.gen.constr", root: "ف ر ض", gloss: "the obligatory duties (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا أَحَبُّ الْقَطَرَاتِ إِلَىٰ اللهِ بِحَسَبِ الْحَدِيْثِ؟",
          options: ["قَطْرَةُ دُمُوعٍ مِنْ خَشْيَةِ اللهِ وَقَطْرَةُ دَمٍ فِيْ سَبِيْلِ اللهِ", "قَطْرَةُ مَاءٍ فِي الصَّحْرَاءِ", "قَطْرَةُ عَسَلٍ"],
          answer: 0,
          qEn: "According to the hadith, what drops are most beloved to Allah?",
          optionsEn: ["A drop of tears from fear of Allah, and a drop of blood in Allah's path", "A drop of water in the desert", "A drop of honey"]
        }
      ]
    },
    {
      en: "The Prophet ﷺ used to say in his supplication: \"O Allah, I seek refuge in You from knowledge that does not benefit, from a heart that is not humbled, from a soul that is not satisfied, from an eye that does not weep, from a supplication that is not heard, and from a plea that is not answered.\"",
      sentences: [
        {
          id: "qr2-43-024",
          ar: "وَكَانَ النَّبِيُّ ﷺ يَقُوْلُ فِيْ دُعَائِهِ:",
          en: "The Prophet ﷺ used to say in his supplication:",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "to be, used to" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "يَقُوْلُ", lemma: "قال", pos: "verb", features: "impf.3ms", root: "ق و ل", gloss: "to say" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "دُعَائِهِ", lemma: "دعاء", pos: "noun", features: "gen+3ms", root: "د ع و", gloss: "his supplication" }
          ]
        },
        {
          id: "qr2-43-025",
          ar: "اللهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ ،",
          en: "\"O Allah, I seek refuge in You from knowledge that does not benefit,",
          tokens: [
            { surface: "اللهُمَّ", lemma: "اللهم", pos: "part", features: "part", root: "", gloss: "O Allah" },
            { surface: "إِنِّيْ", lemma: "إن", pos: "part", features: "1s", root: "", gloss: "indeed I" },
            { surface: "أَعُوْذُ", lemma: "عاذ", pos: "verb", features: "impf.1s", root: "ع و ذ", gloss: "to seek refuge" },
            { surface: "بِكَ", lemma: "ب", pos: "prep", features: "prep+2ms", root: "", gloss: "in You" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "عِلْمٍ", lemma: "علم", pos: "noun", features: "indef.gen", root: "ع ل م", gloss: "knowledge" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَنْفَعُ", lemma: "نفع", pos: "verb", features: "impf.3ms", root: "ن ف ع", gloss: "to benefit" }
          ]
        },
        {
          id: "qr2-43-026",
          ar: "وَمِنْ قَلْبٍ لَا يَخْشَعُ ،",
          en: "and from a heart that is not humbled,",
          tokens: [
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and from" },
            { surface: "قَلْبٍ", lemma: "قلب", pos: "noun", features: "indef.gen", root: "ق ل ب", gloss: "a heart" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَخْشَعُ", lemma: "خشع", pos: "verb", features: "impf.3ms", root: "خ ش ع", gloss: "to be humble, reverent" }
          ]
        },
        {
          id: "qr2-43-027",
          ar: "وَمِنْ نَفْسٍ لَا تَشْبَعُ ،",
          en: "and from a soul that is not satisfied,",
          tokens: [
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and from" },
            { surface: "نَفْسٍ", lemma: "نفس", pos: "noun", features: "indef.gen", root: "ن ف س", gloss: "a soul" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تَشْبَعُ", lemma: "شبع", pos: "verb", features: "impf.3fs", root: "ش ب ع", gloss: "to be satisfied, full" }
          ]
        },
        {
          id: "qr2-43-028",
          ar: "وَمِنْ عَيْنٍ لَا تَدْمَعُ ،",
          en: "and from an eye that does not weep,",
          tokens: [
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and from" },
            { surface: "عَيْنٍ", lemma: "عين", pos: "noun", features: "indef.gen", root: "ع ي ن", gloss: "an eye" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تَدْمَعُ", lemma: "دمع", pos: "verb", features: "impf.3fs", root: "د م ع", gloss: "to shed tears, weep" }
          ]
        },
        {
          id: "qr2-43-029",
          ar: "وَمِنْ دُعَاءٍ لَا يُسْمَعُ ،",
          en: "and from a supplication that is not heard,",
          tokens: [
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and from" },
            { surface: "دُعَاءٍ", lemma: "دعاء", pos: "noun", features: "indef.gen", root: "د ع و", gloss: "a supplication" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُسْمَعُ", lemma: "سمع", pos: "verb", features: "pass.impf.3ms", root: "س م ع", gloss: "to be heard" }
          ]
        },
        {
          id: "qr2-43-030",
          ar: "وَمِنْ دَعْوَةٍ لَا يُسْتَجَابُ لَهَا.",
          en: "and from a plea that is not answered.\"",
          tokens: [
            { surface: "وَمِنْ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and from" },
            { surface: "دَعْوَةٍ", lemma: "دعوة", pos: "noun", features: "indef.gen", root: "د ع و", gloss: "a plea, call" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُسْتَجَابُ", lemma: "استجاب", pos: "verb", features: "pass.impf.3ms", root: "ج و ب", gloss: "to be answered, responded to" },
            { surface: "لَهَا", lemma: "ل", pos: "prep", features: "prep+3fs", root: "", gloss: "to it" }
          ]
        }
      ],
      checks: [
        {
          q: "مِمَّ كَانَ النَّبِيُّ ﷺ يَسْتَعِيْذُ بِاللهِ فِيْ دُعَائِهِ؟",
          options: ["مِنْ عِلْمٍ لَا يَنْفَعُ وَقَلْبٍ لَا يَخْشَعُ وَعَيْنٍ لَا تَدْمَعُ", "مِنَ الْفَقْرِ فَقَط", "مِنَ الْمَرَضِ فَقَط"],
          answer: 0,
          qEn: "What did the Prophet ﷺ seek refuge in Allah from in his supplication?",
          optionsEn: ["Knowledge that doesn't benefit, a heart that isn't humbled, and an eye that doesn't weep", "Poverty alone", "Illness alone"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "اللهُمَّ إِنِّيْ أَعُوْذُ بِكَ مِنْ عِلْمٍ لَا",
        post: ".",
        en: "knowledge that does not benefit",
        options: ["يَنْفَعُ", "يَنْفَعُوْنَ", "نَفَعَ", "أَنْفَعُ"],
        answer: 0,
        rationales: [
          "Imperfect 3rd masculine singular — agrees with the masculine singular عِلْم — \"benefits\".",
          "Imperfect 3rd masculine plural — wrong, عِلْم is singular.",
          "Perfect 3rd masculine singular — wrong tense (a timeless description, not a past event).",
          "Imperfect 1st singular — \"I benefit\"."
        ]
      },
      {
        type: "cloze",
        pre: "وَمِنْ قَلْبٍ لَا",
        post: ".",
        en: "a heart that is not humbled",
        options: ["يَخْشَعُ", "تَخْشَعُ", "خَشَعْتُ", "يَخْشَعُوْنَ"],
        answer: 0,
        rationales: [
          "Imperfect 3rd masculine singular — agrees with the masculine singular قَلْب.",
          "Imperfect 3rd feminine singular — wrong gender for قَلْب.",
          "Perfect 1st singular — \"I was humbled\".",
          "Imperfect 3rd masculine plural — wrong, قَلْب is singular."
        ]
      },
      {
        type: "cloze",
        pre: "وَمِنْ نَفْسٍ لَا",
        post: ".",
        en: "a soul that is not satisfied",
        options: ["تَشْبَعُ", "يَشْبَعُ", "شَبِعْتُ", "نَشْبَعُ"],
        answer: 0,
        rationales: [
          "Imperfect 3rd feminine singular — agrees with the feminine noun نَفْس.",
          "Imperfect 3rd masculine singular — wrong gender for نَفْس.",
          "Perfect 1st singular — \"I was satisfied\".",
          "Imperfect 1st plural — \"we are satisfied\"."
        ]
      }
    ],
    shift: [
      {
        type: "shift",
        base: "نَسْتَعْمِلُهَا فِيْ طَاعَةِ اللهِ",
        pre: "",
        post: "فِيْ طَاعَةِ اللهِ",
        targetPerson: "هُوَ",
        targetEn: "he",
        options: ["يَسْتَعْمِلُهَا", "تَسْتَعْمِلُهَا", "نَسْتَعْمِلُهَا", "يَسْتَعْمِلُوْنَهَا"],
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
        base: "نَعُوْذُ بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ",
        pre: "",
        post: "بِكَ مِنْ عِلْمٍ لَا يَنْفَعُ",
        targetPerson: "أَنَا",
        targetEn: "I",
        options: ["أَعُوْذُ", "نَعُوْذُ", "يَعُوْذُ", "تَعُوْذُ"],
        answer: 0,
        rationales: [
          "1st singular takes the prefix أَـ.",
          "",
          "",
          ""
        ]
      }
    ]
  }
};

// القراءة الراشدة, volume two, chapter 42 (printed heading "٤٢") --
// الْعَيْنُ (١) -- "The Eye" (part 1 of 2; part 2 is printed chapter 43,
// pp.150-151, not yet authored as of this writing).
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 147-149 (PDF page
// index == printed page number in this book, verified against the
// qiraah-v1 ch.10/11 boundary). A short descriptive/scientific-religious
// essay on the eye as a sign of Allah's design, common eye ailments and
// their prevention, and the eye as an irreplaceable blessing. Ends with
// a "٭ ٭ ٭" divider in the book (part break, not a chapter end) before
// part 2 continues the same theme with the story of scholars who
// excelled despite blindness.
//
// Numbered footnote markers "(١)".."(٤)" on p.147 and "(١)".."(٢)" on
// p.148 (each page restarts its own footnote numbering) are treated as
// document furniture, exactly as in chapter 41: they are dropped from
// `ar` and not tokenized. Their contents are preserved as `book_note`
// entries on the matching lemma below instead. Footnoted words this
// chapter: جهة، جفن، هدب، سياج (p.147) and قذى، رائق (p.148).
//
// Two vocalization/orthography notes worth flagging for whoever reviews
// this next:
//   - "مِنْظَرَةٍ" (p.148, "so people ... resorted to using eyeglasses")
//     is the SAME lemma spelling already taught in qiraah-v1/chapter-08
//     with the gloss "waiting hall, lounge" -- a genuinely different word
//     sense (homograph), not a repeat of that vocabulary item. Tagged
//     here with its own token-level gloss "eyeglasses, spectacles",
//     which overrides the chapter-08 lemma-dict fallback per
//     CHAPTER-FORMAT.md, so display is correct either way -- flagging in
//     case a future pass wants to split these into distinct lemma keys.
//   - "قِصَرِ النَّظَرِ" ("shortness of sight" = nearsightedness) reuses
//     the rasm ق ص ر already taught in qasas-v1 as "قصر" = "palace"
//     (a different word, same skeleton). Also handled via token-level
//     gloss override; same flag applies.
//   - "كَلاًّ عَلَىٰ غَيْرِهِ" ("a burden/dependent on someone else") is
//     lemma "كل", already taught elsewhere as "every" (كُلّ) -- genuinely
//     the same root ك ل ل, different classical sense (kalla ʿalā = "to
//     be a burden on"). Token-level gloss override again; not added as
//     a duplicate lemmas-dict entry to avoid clobbering the "every"
//     definition other chapters rely on.
//
// Book placement: continues content-lit/qiraah-v2 (see that book's
// index.js header for the volume-split rationale) as the second chapter
// authored there, immediately after ch41. Chapters 32-40 still need
// splicing in before ch41 by whoever authors them.
export const CHAPTER = {
  id: "ch42",
  title: {
    ar: "الْعَيْنُ (١)",
    en: "The Eye (1)"
  },
  pages: [147, 148, 149],
  newWords: [
    "جهة", "جفن", "هدب", "سياج", "محجر", "صلب", "ذبّ", "بعوض", "غبار",
    "رمد", "قذى", "رائق", "مصباح", "معتدل", "ساطع", "جوهرة", "أظلم",
    "عيال", "عصا", "حقير"
  ],
  lemmas: {
    "جهة": {
      root: "و ج ه", pos: "noun", gloss: "direction, side",
      book_note: "جِهَةٌ ج جِهَات: نَاحِيَةٌ."
    },
    "جفن": {
      root: "ج ف ن", pos: "noun", gloss: "eyelid",
      book_note: "جَفْنٌ ج جُفُوْن وأَجْفَان: غِطَاءُ الْعَيْنِ مِنْ أَعْلَاهَا وَأَسْفَلِهَا."
    },
    "هدب": {
      root: "ه د ب", pos: "noun", gloss: "eyelash",
      book_note: "هُدْبٌ ج أَهْدَاب: شَعْرُ أَشْفَارِ الْعَيْنِ."
    },
    "سياج": {
      root: "س ي ج", pos: "noun", gloss: "fence",
      book_note: "سِيَاجٌ ج سِيَاجَات: سُوْرٌ مِنْ أَسْلَاكٍ أَوْ حِجَارَةٍ أَوْ غَيْرِهَا يُحِيْطُ بِمَنْزِلٍ أَوْ غَيْرِهِ."
    },
    "محجر": { root: "ح ج ر", pos: "noun", gloss: "socket (of the eye)" },
    "صلب": { root: "ص ل ب", pos: "adj", gloss: "solid, firm" },
    "ذبّ": { root: "ذ ب ب", pos: "verb", gloss: "to ward off, drive away" },
    "بعوض": { root: "ب ع ض", pos: "noun", gloss: "gnats, mosquitoes" },
    "غبار": { root: "غ ب ر", pos: "noun", gloss: "dust" },
    "رمد": { root: "ر م د", pos: "noun", gloss: "ophthalmia, pink eye" },
    "قذى": {
      root: "ق ذ ي", pos: "noun", gloss: "speck, mote (in the eye)",
      book_note: "قَذًى ج أَقْذَاء وقُذِيّ: مَا يَتَكَوَّنُ فِي الْعَيْنِ مِنْ وَسَخٍ أَبْيَض، وَمَا يَجْتَمِعُ فِيْهَا مِنْ تِبْنَةٍ وَغَيْرِهَا."
    },
    "رائق": {
      root: "ر و ق", pos: "adj", gloss: "pleasant, agreeable",
      book_note: "رَائِقٌ: طَيِّبٌ."
    },
    "مصباح": { root: "ص ب ح", pos: "noun", gloss: "lamp" },
    "معتدل": { root: "ع د ل", pos: "adj", gloss: "moderate" },
    "ساطع": { root: "س ط ع", pos: "adj", gloss: "bright, blazing" },
    "جوهرة": { root: "ج و ه ر", pos: "noun", gloss: "jewel, gem" },
    "أظلم": { root: "ظ ل م", pos: "verb", gloss: "to become dark" },
    "عيال": { root: "ع ي ل", pos: "noun", gloss: "dependent(s)" },
    "عصا": { root: "ع ص و", pos: "noun", gloss: "a stick, cane" },
    "حقير": { root: "ح ق ر", pos: "adj", gloss: "lowly, worthless" }
  },
  paragraphs: [
    {
      en: "The eye is one of the wonders of Allah's creation. Allah Most High made it a clear mirror that moves right, left, up, and down, letting a person look in every direction. He then set it in a solid bony socket, covered it with eyelids to protect it from harm, and fringed it with lashes to form a fence warding off the flies, gnats, and dust that get into the eye and cause it pain and disease. And He set flowing water over it to wash away whatever dirt enters it.",
      sentences: [
        {
          id: "qr2-42-001",
          ar: "الْعَيْنُ مِنْ عَجَائِبِ صُنْعِ اللهِ تَعَالَىٰ ،",
          en: "The eye is one of the wonders of Allah's creation,",
          tokens: [
            { surface: "الْعَيْنُ", lemma: "عين", pos: "noun", features: "def.nom", root: "ع ي ن", gloss: "the eye" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of, from" },
            { surface: "عَجَائِبِ", lemma: "عجيبة", pos: "noun", features: "pl.gen.constr", root: "ع ج ب", gloss: "wonders" },
            { surface: "صُنْعِ", lemma: "صنع", pos: "noun", features: "gen.constr", root: "ص ن ع", gloss: "making, creation" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "تَعَالَىٰ", lemma: "تعالى", pos: "verb", features: "perf.3ms", root: "ع ل و", gloss: "He is Exalted (epithet)" }
          ]
        },
        {
          id: "qr2-42-002",
          ar: "فَقَدْ خَلَقَهَا اللهُ تَعَالَىٰ مِرْآةً صَافِيَةً تَتَحَرَّكُ يَمِيْناً وَشِمَالاً ،",
          en: "for Allah Most High created it as a clear mirror that moves right and left,",
          tokens: [
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "indeed, for" },
            { surface: "خَلَقَهَا", lemma: "خلق", pos: "verb", features: "perf.3ms+3fs", root: "خ ل ق", gloss: "to create" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "تَعَالَىٰ", lemma: "تعالى", pos: "verb", features: "perf.3ms", root: "ع ل و", gloss: "He is Exalted (epithet)" },
            { surface: "مِرْآةً", lemma: "مرآة", pos: "noun", features: "indef.acc", root: "ر أ ي", gloss: "mirror" },
            { surface: "صَافِيَةً", lemma: "صافي", pos: "adj", features: "indef.acc.f", root: "ص ف و", gloss: "clear, pure" },
            { surface: "تَتَحَرَّكُ", lemma: "تحرك", pos: "verb", features: "impf.3fs", root: "ح ر ك", gloss: "to move" },
            { surface: "يَمِيْناً", lemma: "يمين", pos: "adv", features: "indef.acc", root: "ي م ن", gloss: "to the right" },
            { surface: "وَشِمَالاً", lemma: "شمال", pos: "adv", features: "conj+indef.acc", root: "ش م ل", gloss: "and to the left" }
          ]
        },
        {
          id: "qr2-42-003",
          ar: "وَفَوْقُ وَتَحْتُ ،",
          en: "and up and down,",
          tokens: [
            { surface: "وَفَوْقُ", lemma: "فوق", pos: "adv", features: "conj+adv", root: "ف و ق", gloss: "and above" },
            { surface: "وَتَحْتُ", lemma: "تحت", pos: "adv", features: "conj+adv", root: "ت ح ت", gloss: "and below" }
          ]
        },
        {
          id: "qr2-42-004",
          ar: "يَنْظُرُ بِهَا الإِنْسَانُ إِلَىٰ جَمِيْعِ الْجِهَاتِ ،",
          en: "with which a person looks in every direction,",
          tokens: [
            { surface: "يَنْظُرُ", lemma: "نظر", pos: "verb", features: "impf.3ms", root: "ن ظ ر", gloss: "to look" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "with it" },
            { surface: "الإِنْسَانُ", lemma: "إنسان", pos: "noun", features: "def.nom", root: "أ ن س", gloss: "a person" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to, towards" },
            { surface: "جَمِيْعِ", lemma: "جميع", pos: "noun", features: "gen.constr", root: "ج م ع", gloss: "all of" },
            { surface: "الْجِهَاتِ", lemma: "جهة", pos: "noun", features: "pl.def.gen", root: "و ج ه", gloss: "directions" }
          ]
        },
        {
          id: "qr2-42-005",
          ar: "ثُمَّ وَضَعَهَا فِيْ مِحْجَرٍ صُلْبٍ مِنَ الْعَظْمِ ،",
          en: "then He placed it in a solid socket of bone,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "وَضَعَهَا", lemma: "وضع", pos: "verb", features: "perf.3ms+3fs", root: "و ض ع", gloss: "to place, put" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مِحْجَرٍ", lemma: "محجر", pos: "noun", features: "indef.gen", root: "ح ج ر", gloss: "socket (of the eye)" },
            { surface: "صُلْبٍ", lemma: "صلب", pos: "adj", features: "indef.gen", root: "ص ل ب", gloss: "solid, firm" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْعَظْمِ", lemma: "عظم", pos: "noun", features: "def.gen", root: "ع ظ م", gloss: "bone" }
          ]
        },
        {
          id: "qr2-42-006",
          ar: "وَجَعَلَ عَلَيْهَا مِنَ الْجُفُوْنِ غِطَاءً يَحْفَظُهَا مِنَ الأَذَىٰ ،",
          en: "and made of the eyelids a cover that protects it from harm,",
          tokens: [
            { surface: "وَجَعَلَ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms", root: "ج ع ل", gloss: "to make, place" },
            { surface: "عَلَيْهَا", lemma: "على", pos: "prep", features: "prep+3fs", root: "", gloss: "upon it" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from, of" },
            { surface: "الْجُفُوْنِ", lemma: "جفن", pos: "noun", features: "pl.def.gen", root: "ج ف ن", gloss: "eyelids" },
            { surface: "غِطَاءً", lemma: "غطاء", pos: "noun", features: "indef.acc", root: "غ ط و", gloss: "cover" },
            { surface: "يَحْفَظُهَا", lemma: "حفظ", pos: "verb", features: "impf.3ms+3fs", root: "ح ف ظ", gloss: "to protect, guard" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الأَذَىٰ", lemma: "أذى", pos: "noun", features: "def.gen", root: "أ ذ ي", gloss: "harm" }
          ]
        },
        {
          id: "qr2-42-007",
          ar: "وَحَاطَهَا بِأَهْدَابٍ مِنَ الشَّعْرِ لِتَكُوْنَ سِيَاجاً يَذُبُّ عَنْهَا الذُّبَابَ",
          en: "and surrounded it with lashes of hair to be a fence warding off the flies from it,",
          tokens: [
            { surface: "وَحَاطَهَا", lemma: "حاط", pos: "verb", features: "conj+perf.3ms+3fs", root: "ح و ط", gloss: "to surround, encircle" },
            { surface: "بِأَهْدَابٍ", lemma: "هدب", pos: "noun", features: "prep+pl.indef.gen", root: "ه د ب", gloss: "with lashes" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الشَّعْرِ", lemma: "شعر", pos: "noun", features: "def.gen", root: "ش ع ر", gloss: "hair" },
            { surface: "لِتَكُوْنَ", lemma: "كان", pos: "verb", features: "prep+impf.3fs", root: "ك و ن", gloss: "so that it would be" },
            { surface: "سِيَاجاً", lemma: "سياج", pos: "noun", features: "indef.acc", root: "س ي ج", gloss: "fence" },
            { surface: "يَذُبُّ", lemma: "ذبّ", pos: "verb", features: "impf.3ms", root: "ذ ب ب", gloss: "to ward off, drive away" },
            { surface: "عَنْهَا", lemma: "عن", pos: "prep", features: "prep+3fs", root: "", gloss: "from it" },
            { surface: "الذُّبَابَ", lemma: "ذباب", pos: "noun", features: "def.acc", root: "ذ ب ب", gloss: "flies" }
          ]
        },
        {
          id: "qr2-42-008",
          ar: "وَالْبَعُوْضَ وَالْغُبَارَ الَّتِي تَدْخُلُ الْعَيْنَ ،",
          en: "and mosquitoes and dust that enter the eye,",
          tokens: [
            { surface: "وَالْبَعُوْضَ", lemma: "بعوض", pos: "noun", features: "conj+def.acc", root: "ب ع ض", gloss: "and gnats, mosquitoes" },
            { surface: "وَالْغُبَارَ", lemma: "غبار", pos: "noun", features: "conj+def.acc", root: "غ ب ر", gloss: "and dust" },
            { surface: "الَّتِي", lemma: "الذي", pos: "rel", features: "f", root: "", gloss: "that, which" },
            { surface: "تَدْخُلُ", lemma: "دخل", pos: "verb", features: "impf.3fs", root: "د خ ل", gloss: "to enter" },
            { surface: "الْعَيْنَ", lemma: "عين", pos: "noun", features: "def.acc", root: "ع ي ن", gloss: "the eye" }
          ]
        },
        {
          id: "qr2-42-009",
          ar: "فَتُسَبِّبُ لَهَا الأَلَمَ وَالْمَرَضَ",
          en: "causing it pain and disease,",
          tokens: [
            { surface: "فَتُسَبِّبُ", lemma: "سبب", pos: "verb", features: "conj+impf.3fs", root: "س ب ب", gloss: "to cause" },
            { surface: "لَهَا", lemma: "ل", pos: "prep", features: "prep+3fs", root: "", gloss: "for it" },
            { surface: "الأَلَمَ", lemma: "ألم", pos: "noun", features: "def.acc", root: "أ ل م", gloss: "pain" },
            { surface: "وَالْمَرَضَ", lemma: "مرض", pos: "noun", features: "conj+def.acc", root: "م ر ض", gloss: "and sickness" }
          ]
        },
        {
          id: "qr2-42-010",
          ar: "وَسَلَّطَ عَلَيْهَا مَاءً جَارِياً يَغْسِلُ مَا يَدْخُلُ فِيْهَا مِنَ الأَوْسَاخِ .",
          en: "and He set flowing water over it that washes away whatever dirt enters it.",
          tokens: [
            { surface: "وَسَلَّطَ", lemma: "سلط", pos: "verb", features: "conj+perf.3ms", root: "س ل ط", gloss: "to set, give power over" },
            { surface: "عَلَيْهَا", lemma: "على", pos: "prep", features: "prep+3fs", root: "", gloss: "over it" },
            { surface: "مَاءً", lemma: "ماء", pos: "noun", features: "indef.acc", root: "م و ه", gloss: "water" },
            { surface: "جَارِياً", lemma: "جار", pos: "adj", features: "indef.acc", root: "ج ر ي", gloss: "flowing, running" },
            { surface: "يَغْسِلُ", lemma: "غسل", pos: "verb", features: "impf.3ms", root: "غ س ل", gloss: "to wash" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "part", root: "", gloss: "what" },
            { surface: "يَدْخُلُ", lemma: "دخل", pos: "verb", features: "impf.3ms", root: "د خ ل", gloss: "to enter" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "into it" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الأَوْسَاخِ", lemma: "وسخ", pos: "noun", features: "pl.def.gen", root: "و س خ", gloss: "dirt" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَ شَبَّهَ الْكَاتِبُ الْعَيْنَ؟",
          options: ["مِرْآةٍ صَافِيَةٍ تَتَحَرَّكُ", "سِيَاجٍ مِنَ الشَّعْرِ", "مَاءٍ جَارٍ"],
          answer: 0,
          qEn: "What did the writer compare the eye to?",
          optionsEn: ["A clear mirror that moves", "A fence of hair", "Flowing water"]
        },
        {
          q: "مَاذَا يَحْمِيْ الْعَيْنَ مِنَ الذُّبَابِ وَالْبَعُوْضِ وَالْغُبَارِ؟",
          options: ["الأَهْدَابُ (سِيَاجُ الشَّعْرِ)", "الْمِحْجَرُ الْعَظْمِيُّ", "الْمَاءُ الْجَارِيْ"],
          answer: 0,
          qEn: "What protects the eye from flies, gnats, and dust?",
          optionsEn: ["The lashes (the fence of hair)", "The bony socket", "The flowing water"]
        }
      ]
    },
    {
      en: "The eye is exposed to many diseases, such as ophthalmia and nearsightedness. This latter disease has become so widespread nowadays that even children have had to resort to wearing eyeglasses. To avoid these diseases, it is good to keep away from dust and dirt, to walk about in open, spacious places, and to wash the face often with clear water, for that clarifies the eye and cleanses it of dirt and specks. That is why performing wuḍūʾ five times a day — especially in the morning upon rising — is so beneficial.",
      sentences: [
        {
          id: "qr2-42-011",
          ar: "وَالْعَيْنُ عُرْضَةٌ لِكَثِيْرٍ مِنَ الأَمْرَاضِ ،",
          en: "And the eye is prone to many diseases,",
          tokens: [
            { surface: "وَالْعَيْنُ", lemma: "عين", pos: "noun", features: "conj+def.nom", root: "ع ي ن", gloss: "and the eye" },
            { surface: "عُرْضَةٌ", lemma: "عرضة", pos: "noun", features: "indef.nom", root: "ع ر ض", gloss: "exposed, liable (to)" },
            { surface: "لِكَثِيْرٍ", lemma: "كثير", pos: "adj", features: "prep+indef.gen", root: "ك ث ر", gloss: "to many" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الأَمْرَاضِ", lemma: "مرض", pos: "noun", features: "pl.def.gen", root: "م ر ض", gloss: "diseases" }
          ]
        },
        {
          id: "qr2-42-012",
          ar: "كَالرَّمَدِ وَقِصَرِ النَّظَرِ ،",
          en: "such as ophthalmia and nearsightedness,",
          tokens: [
            { surface: "كَالرَّمَدِ", lemma: "رمد", pos: "noun", features: "prep+def.gen", root: "ر م د", gloss: "such as ophthalmia (pink eye)" },
            { surface: "وَقِصَرِ", lemma: "قصر", pos: "noun", features: "conj+gen.constr", root: "ق ص ر", gloss: "and shortness (of)" },
            { surface: "النَّظَرِ", lemma: "نظر", pos: "noun", features: "def.gen", root: "ن ظ ر", gloss: "sight (i.e. nearsightedness)" }
          ]
        },
        {
          id: "qr2-42-013",
          ar: "وَقَدْ عَمَّ هٰذَا الْمَرَضُ الأَخِيْرُ فِيْ هٰذَا الزَّمَانِ ،",
          en: "and this latter disease has become widespread in this age,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "عَمَّ", lemma: "عمّ", pos: "verb", features: "perf.3ms", root: "ع م م", gloss: "to become widespread" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "m.sg", root: "", gloss: "this" },
            { surface: "الْمَرَضُ", lemma: "مرض", pos: "noun", features: "def.nom", root: "م ر ض", gloss: "the disease" },
            { surface: "الأَخِيْرُ", lemma: "أخير", pos: "adj", features: "def.nom", root: "أ خ ر", gloss: "latter, last" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "m.sg", root: "", gloss: "this" },
            { surface: "الزَّمَانِ", lemma: "زمان", pos: "noun", features: "def.gen", root: "ز م ن", gloss: "time, age" }
          ]
        },
        {
          id: "qr2-42-014",
          ar: "فَلَجَأَ النَّاسُ حَتَّىٰ الأَطْفَالُ إِلَىٰ اسْتِعْمَالِ مِنْظَرَةٍ ،",
          en: "so people, even children, have resorted to using eyeglasses,",
          tokens: [
            { surface: "فَلَجَأَ", lemma: "لجأ", pos: "verb", features: "conj+perf.3ms", root: "ل ج أ", gloss: "to resort to, turn to" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "people" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "even" },
            { surface: "الأَطْفَالُ", lemma: "طفل", pos: "noun", features: "pl.def.nom", root: "ط ف ل", gloss: "children" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "اسْتِعْمَالِ", lemma: "استعمال", pos: "noun", features: "gen.constr", root: "ع م ل", gloss: "using, use (of)" },
            { surface: "مِنْظَرَةٍ", lemma: "منظرة", pos: "noun", features: "indef.gen", root: "ن ظ ر", gloss: "eyeglasses, spectacles" }
          ]
        },
        {
          id: "qr2-42-015",
          ar: "وَلِلاِجْتِنَابِ عَنْ هٰذِهِ الأَمْرَاضِ حُسْنُ الاِعْتِزَالِ عَنِ الْغُبَارِ وَالأَتْرِبَةِ ،",
          en: "and to avoid these diseases, it is good to keep away from dust and dirt,",
          tokens: [
            { surface: "وَلِلاِجْتِنَابِ", lemma: "اجتناب", pos: "noun", features: "conj+prep+def.gen", root: "ج ن ب", gloss: "and for avoidance (of)" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "هٰذِهِ", lemma: "هذه", pos: "dem", features: "f.sg", root: "", gloss: "these" },
            { surface: "الأَمْرَاضِ", lemma: "مرض", pos: "noun", features: "pl.def.gen", root: "م ر ض", gloss: "diseases" },
            { surface: "حُسْنُ", lemma: "حسن", pos: "noun", features: "nom.constr", root: "ح س ن", gloss: "the goodness (of)" },
            { surface: "الاِعْتِزَالِ", lemma: "اعتزال", pos: "noun", features: "def.gen", root: "ع ز ل", gloss: "withdrawing, keeping away" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْغُبَارِ", lemma: "غبار", pos: "noun", features: "def.gen", root: "غ ب ر", gloss: "dust" },
            { surface: "وَالأَتْرِبَةِ", lemma: "تربة", pos: "noun", features: "conj+pl.def.gen", root: "ت ر ب", gloss: "and dirt, soil" }
          ]
        },
        {
          id: "qr2-42-016",
          ar: "وَيَحْسُنُ التَّجَوُّلُ فِيْ الأَمَاكِنِ الْفَسِيْحَةِ ،",
          en: "and it is good to walk about in open, spacious places,",
          tokens: [
            { surface: "وَيَحْسُنُ", lemma: "حسن", pos: "verb", features: "conj+impf.3ms", root: "ح س ن", gloss: "to be good, be preferable" },
            { surface: "التَّجَوُّلُ", lemma: "تجول", pos: "noun", features: "def.nom", root: "ج و ل", gloss: "wandering about, strolling" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الأَمَاكِنِ", lemma: "مكان", pos: "noun", features: "pl.def.gen", root: "ك و ن", gloss: "places" },
            { surface: "الْفَسِيْحَةِ", lemma: "فسيح", pos: "adj", features: "def.gen.f", root: "ف س ح", gloss: "spacious" }
          ]
        },
        {
          id: "qr2-42-017",
          ar: "وَكَثْرَةُ غَسْلِ الْوَجْهِ بِالْمَاءِ الصَّافِيْ ،",
          en: "and to wash the face often with clear water,",
          tokens: [
            { surface: "وَكَثْرَةُ", lemma: "كثرة", pos: "noun", features: "conj+nom.constr", root: "ك ث ر", gloss: "and the frequency (of)" },
            { surface: "غَسْلِ", lemma: "غسل", pos: "noun", features: "gen.constr", root: "غ س ل", gloss: "washing" },
            { surface: "الْوَجْهِ", lemma: "وجه", pos: "noun", features: "def.gen", root: "و ج ه", gloss: "the face" },
            { surface: "بِالْمَاءِ", lemma: "ماء", pos: "noun", features: "prep+def.gen", root: "م و ه", gloss: "with water" },
            { surface: "الصَّافِيْ", lemma: "صافي", pos: "adj", features: "def.gen", root: "ص ف و", gloss: "clear, pure" }
          ]
        },
        {
          id: "qr2-42-018",
          ar: "فَإِنَّهُ جَلْوُ الْعَيْنَ ،",
          en: "for that clarifies the eye,",
          tokens: [
            { surface: "فَإِنَّهُ", lemma: "إن", pos: "part", features: "conj+3ms", root: "", gloss: "for it (is)" },
            { surface: "جَلْوُ", lemma: "جلا", pos: "noun", features: "nom.constr", root: "ج ل و", gloss: "a clarifying, polishing (of)" },
            { surface: "الْعَيْنَ", lemma: "عين", pos: "noun", features: "def.acc", root: "ع ي ن", gloss: "the eye" }
          ]
        },
        {
          id: "qr2-42-019",
          ar: "وَيُنَقِّيْهَا مِنَ الأَوْسَاخِ وَالْقَذَىٰ ،",
          en: "and cleanses it of dirt and specks,",
          tokens: [
            { surface: "وَيُنَقِّيْهَا", lemma: "نقى", pos: "verb", features: "conj+impf.3ms+3fs", root: "ن ق ي", gloss: "to cleanse, purify" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الأَوْسَاخِ", lemma: "وسخ", pos: "noun", features: "pl.def.gen", root: "و س خ", gloss: "dirt" },
            { surface: "وَالْقَذَىٰ", lemma: "قذى", pos: "noun", features: "conj+def.gen", root: "ق ذ ي", gloss: "and specks, motes" }
          ]
        },
        {
          id: "qr2-42-020",
          ar: "وَلِذٰلِكَ كَانَ وُضُوْءُ خَمْسَ مَرَّاتٍ كُلَّ يَوْمٍ ـ خُصُوْصاً فِي الصَّبَاحِ عِنْدَ الْقِيَامِ ـ نَافِعاً جِدّاً.",
          en: "and that is why performing wuḍūʾ five times each day — especially in the morning upon rising — is very beneficial.",
          tokens: [
            { surface: "وَلِذٰلِكَ", lemma: "لذلك", pos: "adv", features: "conj+adv", root: "", gloss: "and that is why" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "to be" },
            { surface: "وُضُوْءُ", lemma: "وضوء", pos: "noun", features: "nom.constr", root: "و ض أ", gloss: "ablution (wuḍūʾ)" },
            { surface: "خَمْسَ", lemma: "خمسة", pos: "num", features: "acc.constr", root: "خ م س", gloss: "five" },
            { surface: "مَرَّاتٍ", lemma: "مرة", pos: "noun", features: "pl.indef.gen", root: "م ر ر", gloss: "times" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "يَوْمٍ", lemma: "يوم", pos: "noun", features: "indef.gen", root: "ي و م", gloss: "day" },
            { surface: "خُصُوْصاً", lemma: "خصوصا", pos: "adv", features: "adv", root: "خ ص ص", gloss: "especially" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الصَّبَاحِ", lemma: "صباح", pos: "noun", features: "def.gen", root: "ص ب ح", gloss: "the morning" },
            { surface: "عِنْدَ", lemma: "عند", pos: "prep", features: "prep", root: "", gloss: "at, upon" },
            { surface: "الْقِيَامِ", lemma: "قيام", pos: "noun", features: "def.gen", root: "ق و م", gloss: "rising, getting up" },
            { surface: "نَافِعاً", lemma: "نافع", pos: "adj", features: "indef.acc", root: "ن ف ع", gloss: "beneficial" },
            { surface: "جِدّاً", lemma: "جدا", pos: "adv", features: "adv", root: "ج د د", gloss: "very" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا الْمَرَضُ الَّذِيْ عَمَّ فِيْ هٰذَا الزَّمَانِ حَتَّىٰ عِنْدَ الأَطْفَالِ؟",
          options: ["قِصَرُ النَّظَرِ", "الرَّمَدُ", "فَقْدُ الْبَصَرِ"],
          answer: 0,
          qEn: "Which disease has become widespread in this age, even among children?",
          optionsEn: ["Nearsightedness", "Ophthalmia (pink eye)", "Loss of sight"]
        },
        {
          q: "مَا الَّذِيْ يُنَقِّيْ الْعَيْنَ مِنَ الأَوْسَاخِ وَالْقَذَىٰ وَيَجْعَلُ الْوُضُوْءَ نَافِعاً لَهَا؟",
          options: ["كَثْرَةُ غَسْلِ الْوَجْهِ بِالْمَاءِ الصَّافِيْ", "اسْتِعْمَالُ الْمِنْظَرَةِ", "الاِعْتِزَالُ عَنِ النَّاسِ"],
          answer: 0,
          qEn: "What cleanses the eye of dirt and specks, and makes wuḍūʾ beneficial to it?",
          optionsEn: ["Washing the face often with clear water", "Wearing eyeglasses", "Keeping away from people"]
        }
      ]
    },
    {
      en: "Continuous reading at night in weak light greatly affects and seriously harms the eyesight. So whoever is compelled by necessity to do so should use a lamp whose light is pleasant and moderate — neither too bright nor too weak.",
      sentences: [
        {
          id: "qr2-42-021",
          ar: "وَمُوَاصَلَةُ الْقِرَاءَةِ لَيْلاً فِي النُّوْرِ الضَّعِيْفِ تُؤَثِّرُ فِي النَّظَرِ تَأْثِيْراً كَبِيْراً ،",
          en: "Continuous reading at night in weak light greatly affects the eyesight,",
          tokens: [
            { surface: "وَمُوَاصَلَةُ", lemma: "مواصلة", pos: "noun", features: "conj+nom.constr", root: "و ص ل", gloss: "and the continuing (of)" },
            { surface: "الْقِرَاءَةِ", lemma: "قراءة", pos: "noun", features: "def.gen", root: "ق ر أ", gloss: "reading" },
            { surface: "لَيْلاً", lemma: "ليل", pos: "adv", features: "indef.acc", root: "ل ي ل", gloss: "at night" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "النُّوْرِ", lemma: "نور", pos: "noun", features: "def.gen", root: "ن و ر", gloss: "light" },
            { surface: "الضَّعِيْفِ", lemma: "ضعيف", pos: "adj", features: "def.gen", root: "ض ع ف", gloss: "weak" },
            { surface: "تُؤَثِّرُ", lemma: "أثر", pos: "verb", features: "impf.3fs", root: "أ ث ر", gloss: "to affect" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "النَّظَرِ", lemma: "نظر", pos: "noun", features: "def.gen", root: "ن ظ ر", gloss: "the eyesight" },
            { surface: "تَأْثِيْراً", lemma: "تأثير", pos: "noun", features: "indef.acc", root: "أ ث ر", gloss: "an effect" },
            { surface: "كَبِيْراً", lemma: "كبير", pos: "adj", features: "indef.acc", root: "ك ب ر", gloss: "great" }
          ]
        },
        {
          id: "qr2-42-022",
          ar: "وَتَضُرُّ بِهِ ضَرَراً عَظِيْماً ،",
          en: "and harms it tremendously,",
          tokens: [
            { surface: "وَتَضُرُّ", lemma: "ضر", pos: "verb", features: "conj+impf.3fs", root: "ض ر ر", gloss: "to harm" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "it" },
            { surface: "ضَرَراً", lemma: "ضرر", pos: "noun", features: "indef.acc", root: "ض ر ر", gloss: "harm" },
            { surface: "عَظِيْماً", lemma: "عظيم", pos: "adj", features: "indef.acc", root: "ع ظ م", gloss: "tremendous, great" }
          ]
        },
        {
          id: "qr2-42-023",
          ar: "فَعَلَىٰ مَنْ أَلْجَأَتْهُ الضَّرُوْرَةُ إِلَىٰ ذٰلِكَ أَنْ يَسْتَعْمِلَ مِنَ الْمَصَابِيْحِ مَا كَانَ ذَا نُوْرٍ رَائِقٍ مُعْتَدِلٍ غَيْرِ سَاطِعٍ وَلَا ضَعِيْفٍ.",
          en: "so whoever is compelled by necessity to do so should use, among lamps, one whose light is pleasant and moderate — neither too bright nor too weak.",
          tokens: [
            { surface: "فَعَلَىٰ", lemma: "على", pos: "prep", features: "conj+prep", root: "", gloss: "so it is upon" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "part", root: "", gloss: "whoever" },
            { surface: "أَلْجَأَتْهُ", lemma: "ألجأ", pos: "verb", features: "perf.3fs+3ms", root: "ل ج أ", gloss: "to compel, force" },
            { surface: "الضَّرُوْرَةُ", lemma: "ضرورة", pos: "noun", features: "def.nom", root: "ض ر ر", gloss: "necessity" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "m.sg", root: "", gloss: "that" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَسْتَعْمِلَ", lemma: "استعمل", pos: "verb", features: "impf.3ms", root: "ع م ل", gloss: "to use" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "among" },
            { surface: "الْمَصَابِيْحِ", lemma: "مصباح", pos: "noun", features: "pl.def.gen", root: "ص ب ح", gloss: "lamps" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "part", root: "", gloss: "that which" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "to be" },
            { surface: "ذَا", lemma: "ذو", pos: "noun", features: "acc.constr", root: "ذ و", gloss: "possessing" },
            { surface: "نُوْرٍ", lemma: "نور", pos: "noun", features: "indef.gen.constr", root: "ن و ر", gloss: "light" },
            { surface: "رَائِقٍ", lemma: "رائق", pos: "adj", features: "indef.gen", root: "ر و ق", gloss: "pleasant, agreeable" },
            { surface: "مُعْتَدِلٍ", lemma: "معتدل", pos: "adj", features: "indef.gen", root: "ع د ل", gloss: "moderate" },
            { surface: "غَيْرِ", lemma: "غير", pos: "noun", features: "gen.constr", root: "غ ي ر", gloss: "not, other than" },
            { surface: "سَاطِعٍ", lemma: "ساطع", pos: "adj", features: "indef.gen", root: "س ط ع", gloss: "bright, blazing" },
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "ضَعِيْفٍ", lemma: "ضعيف", pos: "adj", features: "indef.gen", root: "ض ع ف", gloss: "weak" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيُّ نُوْرٍ يَنْبَغِيْ اسْتِعْمَالُهُ عِنْدَ الْقِرَاءَةِ لَيْلاً؟",
          options: ["نُوْرٌ رَائِقٌ مُعْتَدِلٌ، غَيْرُ سَاطِعٍ وَلَا ضَعِيْفٍ", "نُوْرٌ سَاطِعٌ جِدّاً", "نُوْرٌ ضَعِيْفٌ جِدّاً"],
          answer: 0,
          qEn: "What kind of light should be used when reading at night?",
          optionsEn: ["A pleasant, moderate light — neither too bright nor too weak", "A very bright light", "A very weak light"]
        }
      ]
    },
    {
      en: "The eye is a precious jewel that cannot be bought with money. Through it a person enjoys the beauty of nature, attends to needs of his own, and becomes a useful, active member of the human family. But if a person loses his sight, he is deprived of much of the world's blessings and beauties — it is as though the world has darkened for him. He becomes a burden on others, and perhaps ends up depending on a lowly stick, unable to walk without it.",
      sentences: [
        {
          id: "qr2-42-024",
          ar: "وَالْعَيْنُ جَوْهَرَةٌ غَالِيَةٌ لَا يُمْكِنُ أَنْ تُشْتَرَىٰ بِالْمَالِ ،",
          en: "The eye is a precious jewel that cannot be bought with money,",
          tokens: [
            { surface: "وَالْعَيْنُ", lemma: "عين", pos: "noun", features: "conj+def.nom", root: "ع ي ن", gloss: "and the eye" },
            { surface: "جَوْهَرَةٌ", lemma: "جوهرة", pos: "noun", features: "indef.nom", root: "ج و ه ر", gloss: "jewel, gem" },
            { surface: "غَالِيَةٌ", lemma: "غالي", pos: "adj", features: "indef.nom.f", root: "غ ل و", gloss: "precious, costly" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُمْكِنُ", lemma: "أمكن", pos: "verb", features: "impf.3ms", root: "م ك ن", gloss: "to be possible" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "تُشْتَرَىٰ", lemma: "اشترى", pos: "verb", features: "pass.impf.3fs", root: "ش ر ي", gloss: "to be bought" },
            { surface: "بِالْمَالِ", lemma: "مال", pos: "noun", features: "prep+def.gen", root: "م و ل", gloss: "with money" }
          ]
        },
        {
          id: "qr2-42-025",
          ar: "وَبِهَا يَتَمَتَّعُ الإِنْسَانُ بِجَمَالِ الطَّبِيْعَةِ ،",
          en: "and by it a person enjoys the beauty of nature,",
          tokens: [
            { surface: "وَبِهَا", lemma: "ب", pos: "prep", features: "conj+prep+3fs", root: "", gloss: "and through it" },
            { surface: "يَتَمَتَّعُ", lemma: "تمتع", pos: "verb", features: "impf.3ms", root: "م ت ع", gloss: "to enjoy" },
            { surface: "الإِنْسَانُ", lemma: "إنسان", pos: "noun", features: "def.nom", root: "أ ن س", gloss: "a person" },
            { surface: "بِجَمَالِ", lemma: "جمال", pos: "noun", features: "prep+gen.constr", root: "ج م ل", gloss: "with the beauty (of)" },
            { surface: "الطَّبِيْعَةِ", lemma: "طبيعة", pos: "noun", features: "def.gen", root: "ط ب ع", gloss: "nature" }
          ]
        },
        {
          id: "qr2-42-026",
          ar: "وَيَقْضِيْ بِهَا حَاجَاتٍ فِيْ نَفْسِهِ ،",
          en: "and through it he attends to needs of his own,",
          tokens: [
            { surface: "وَيَقْضِيْ", lemma: "قضى", pos: "verb", features: "conj+impf.3ms", root: "ق ض ي", gloss: "to attend to, fulfill" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "through it" },
            { surface: "حَاجَاتٍ", lemma: "حاجة", pos: "noun", features: "pl.indef.acc", root: "ح و ج", gloss: "needs" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "نَفْسِهِ", lemma: "نفس", pos: "noun", features: "gen+3ms", root: "ن ف س", gloss: "his own, himself" }
          ]
        },
        {
          id: "qr2-42-027",
          ar: "وَيَكُوْنُ عُضْواً عَامِلاً مُفِيْداً مِنْ أَعْضَاءِ الأُسْرَةِ الإِنْسَانِيَّةِ ،",
          en: "and becomes a working, useful member among the members of the human family,",
          tokens: [
            { surface: "وَيَكُوْنُ", lemma: "كان", pos: "verb", features: "conj+impf.3ms", root: "ك و ن", gloss: "to become, be" },
            { surface: "عُضْواً", lemma: "عضو", pos: "noun", features: "indef.acc", root: "ع ض و", gloss: "a member" },
            { surface: "عَامِلاً", lemma: "عامل", pos: "adj", features: "indef.acc", root: "ع م ل", gloss: "working, active" },
            { surface: "مُفِيْداً", lemma: "مفيد", pos: "adj", features: "indef.acc", root: "ف ي د", gloss: "useful" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "among" },
            { surface: "أَعْضَاءِ", lemma: "عضو", pos: "noun", features: "pl.gen.constr", root: "ع ض و", gloss: "members (of)" },
            { surface: "الأُسْرَةِ", lemma: "أسرة", pos: "noun", features: "def.gen", root: "أ س ر", gloss: "family" },
            { surface: "الإِنْسَانِيَّةِ", lemma: "إنساني", pos: "adj", features: "def.gen.f", root: "أ ن س", gloss: "human" }
          ]
        },
        {
          id: "qr2-42-028",
          ar: "وَإِذَا فَقَدَ الإِنْسَانُ بَصَرَهُ حُرِمَ شَيْئاً كَثِيْراً مِنْ نِعَمِ الدُّنْيَا وَمَحَاسِنِهَا ،",
          en: "but if a person loses his sight, he is deprived of much of the world's blessings and beauties,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and if" },
            { surface: "فَقَدَ", lemma: "فقد", pos: "verb", features: "perf.3ms", root: "ف ق د", gloss: "to lose" },
            { surface: "الإِنْسَانُ", lemma: "إنسان", pos: "noun", features: "def.nom", root: "أ ن س", gloss: "a person" },
            { surface: "بَصَرَهُ", lemma: "بصر", pos: "noun", features: "acc+3ms", root: "ب ص ر", gloss: "his sight" },
            { surface: "حُرِمَ", lemma: "حرم", pos: "verb", features: "pass.perf.3ms", root: "ح ر م", gloss: "to be deprived (of)" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "something" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adj", features: "indef.acc", root: "ك ث ر", gloss: "much" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "نِعَمِ", lemma: "نعمة", pos: "noun", features: "pl.gen.constr", root: "ن ع م", gloss: "the blessings (of)" },
            { surface: "الدُّنْيَا", lemma: "دنيا", pos: "noun", features: "def.gen", root: "د ن و", gloss: "this world" },
            { surface: "وَمَحَاسِنِهَا", lemma: "محاسن", pos: "noun", features: "conj+pl.gen+3fs", root: "ح س ن", gloss: "and its beauties" }
          ]
        },
        {
          id: "qr2-42-029",
          ar: "فَكَأَنَّمَا أَظْلَمَ لَهُ الْعَالَمُ ،",
          en: "as if the world had darkened for him,",
          tokens: [
            { surface: "فَكَأَنَّمَا", lemma: "كأنما", pos: "part", features: "conj+part", root: "", gloss: "as if" },
            { surface: "أَظْلَمَ", lemma: "أظلم", pos: "verb", features: "perf.3ms", root: "ظ ل م", gloss: "to become dark" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "الْعَالَمُ", lemma: "عالم", pos: "noun", features: "def.nom", root: "ع ل م", gloss: "the world" }
          ]
        },
        {
          id: "qr2-42-030",
          ar: "وَكَانَ كَلاًّ عَلَىٰ غَيْرِهِ ،",
          en: "and he becomes a burden upon others,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "to become, be" },
            { surface: "كَلاًّ", lemma: "كل", pos: "noun", features: "indef.acc", root: "ك ل ل", gloss: "a burden, dependent" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on, upon" },
            { surface: "غَيْرِهِ", lemma: "غير", pos: "noun", features: "gen+3ms", root: "غ ي ر", gloss: "others" }
          ]
        },
        {
          id: "qr2-42-031",
          ar: "وَرُبَّمَا كَانَ عِيَالاً عَلَىٰ عَصاً حَقِيْرَةٍ لَا يَمْشِيْ بِغَيْرِهَا.",
          en: "and perhaps becomes dependent on a lowly stick, unable to walk without it.",
          tokens: [
            { surface: "وَرُبَّمَا", lemma: "ربما", pos: "adv", features: "conj+adv", root: "", gloss: "and perhaps" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "to be" },
            { surface: "عِيَالاً", lemma: "عيال", pos: "noun", features: "indef.acc", root: "ع ي ل", gloss: "dependent" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "عَصاً", lemma: "عصا", pos: "noun", features: "indef.gen", root: "ع ص و", gloss: "a stick, cane" },
            { surface: "حَقِيْرَةٍ", lemma: "حقير", pos: "adj", features: "indef.gen.f", root: "ح ق ر", gloss: "lowly, worthless" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَمْشِيْ", lemma: "مشى", pos: "verb", features: "impf.3ms", root: "م ش ي", gloss: "to walk" },
            { surface: "بِغَيْرِهَا", lemma: "غير", pos: "noun", features: "prep+gen+3fs", root: "غ ي ر", gloss: "without it" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يُصِيْبُ الإِنْسَانَ إِذَا فَقَدَ بَصَرَهُ، بِحَسَبِ الْكَاتِبِ؟",
          options: ["يُحْرَمُ كَثِيْراً مِنْ نِعَمِ الدُّنْيَا وَقَدْ يَصِيْرُ عِيَالاً عَلَىٰ غَيْرِهِ", "لَا يَتَغَيَّرُ حَالُهُ شَيْئاً", "يَزْدَادُ اسْتِمْتَاعُهُ بِجَمَالِ الطَّبِيْعَةِ"],
          answer: 0,
          qEn: "According to the writer, what befalls a person who loses his sight?",
          optionsEn: ["He is deprived of much of the world's blessings, and may become dependent on others", "Nothing about his condition changes", "His enjoyment of nature's beauty increases"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "وَ",
        post: "عَلَيْهَا مِنَ الْجُفُوْنِ غِطَاءً يَحْفَظُهَا مِنَ الأَذَىٰ.",
        en: "and made of the eyelids a cover that protects it from harm",
        options: ["جَعَلَ", "يَجْعَلُ", "جَعَلْتُ", "جَعَلُوا"],
        answer: 0,
        rationales: [
          "Perfect 3rd person masculine singular — \"He made\".",
          "Imperfect 3rd masculine singular — \"He makes\".",
          "Perfect 1st singular — \"I made\".",
          "Perfect 3rd masculine plural — \"they made\"."
        ]
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "عَلَيْهَا مَاءً جَارِياً يَغْسِلُ مَا يَدْخُلُ فِيْهَا مِنَ الأَوْسَاخِ.",
        en: "and set flowing water over it that washes away whatever dirt enters it",
        options: ["سَلَّطَ", "يُسَلِّطُ", "سَلَّطْتُ", "سَلَّطُوا"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular — \"He set/gave power over\".",
          "Imperfect 3rd masculine singular — \"He sets\".",
          "Perfect 1st singular — \"I set\".",
          "Perfect 3rd masculine plural — \"they set\"."
        ]
      },
      {
        type: "cloze",
        pre: "وَمُوَاصَلَةُ الْقِرَاءَةِ لَيْلاً فِي النُّوْرِ الضَّعِيْفِ",
        post: "فِي النَّظَرِ تَأْثِيْراً كَبِيْراً.",
        en: "greatly affects the eyesight",
        options: ["تُؤَثِّرُ", "يُؤَثِّرُ", "أَثَّرَتْ", "نُؤَثِّرُ"],
        answer: 0,
        rationales: [
          "Imperfect 3rd feminine singular — agrees with the feminine subject مُوَاصَلَة.",
          "Imperfect 3rd masculine singular — wrong gender for a feminine subject.",
          "Perfect 3rd feminine singular — right gender, but the wrong tense here.",
          "Imperfect 1st plural — \"we affect\"."
        ]
      }
    ],
    shift: [
      {
        type: "shift",
        base: "نَنْظُرُ بِهَا إِلَىٰ جَمِيْعِ الْجِهَاتِ",
        pre: "",
        post: "بِهَا إِلَىٰ جَمِيْعِ الْجِهَاتِ",
        targetPerson: "هُوَ",
        targetEn: "he",
        options: ["يَنْظُرُ", "تَنْظُرُ", "نَنْظُرُ", "يَنْظُرُوْنَ"],
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
        base: "نَسْتَعْمِلُ مِنَ الْمَصَابِيْحِ مَا كَانَ مُعْتَدِلاً",
        pre: "",
        post: "مِنَ الْمَصَابِيْحِ مَا كَانَ مُعْتَدِلاً",
        targetPerson: "أَنْتُمْ",
        targetEn: "you (pl.)",
        options: ["تَسْتَعْمِلُوْنَ", "يَسْتَعْمِلُوْنَ", "نَسْتَعْمِلُ", "تَسْتَعْمِلُ"],
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

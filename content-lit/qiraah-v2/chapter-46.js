// قِرَاءَةٌ رَاشِدَةٌ, ch46 -- printed pages 158-160, "تَارِيْخُ الْقَمِيْصِ" ("The
// History of the Shirt"). A direct-address essay tracing a shirt's supply
// chain back from the reader's own body: the farmer sowing and tending the
// cotton field, the children picking the cotton, the ginner separating seed
// from fiber, the mill spinning it into thread, the weaver working it into
// cloth, the merchant selling it, the father earning the money to buy it
// "by the sweat of his brow," and the tailor cutting and sewing it into a
// shirt while the reader sleeps -- closing with the Prophetic supplication
// for putting on a new garment.
//
// Four distinct textile-trade professions appear as separate new lemmas and
// should not be conflated: الزَّرَّاع/الفَلاَّح (farmer, cultivator -- two
// near-synonyms the text itself uses for the same person at different
// points), الْحَلاَّج (ginner, who separates cotton fiber from seed), الْحَائِك
// (weaver, who spins and weaves the fiber into cloth), and الْخَيَّاط (tailor,
// who cuts and sews the finished cloth into a shirt).
//
// Homograph flag for future reconciliation: "خلق" already has two senses
// seeded elsewhere in this course -- a NOUN "creation, mankind" (qiraah-v1/
// chapter-09) and a VERB "to create" (this book's own ch42, خَلَقَهَا). This
// chapter's opening line "فَأَبْلِ وَأَخْلِقْ!" ("wear it out, let it fray!")
// uses a THIRD, unrelated verb sense of the same root/spelling -- خَلِقَ/أَخْلَقَ
// "to become worn out, threadbare" (the classical root sense "to wear
// smooth," from which "to create" is itself a later semantic extension).
// The lemma key "خلق" is reused rather than duplicated; the token here
// carries its own pos/gloss override and is deliberately left out of
// newWords, since the spelling itself was already "taught" via the other
// sense.
//
// Footnote markers like "(١)" are book furniture: excluded from `ar` and
// never tokenized; each footnote's text is transcribed verbatim into that
// lemma's `book_note` (nine footnotes here: القطن، عناء، بذر، نجم، عزق،
// حشيش، أروى، الحلاّج، حلج -- plus one on p.160 for the idiom بِعَرَقِ الْجَبِيْنِ,
// folded into "عرق"'s book_note). "عناء" is already taught (qiraah-v1) but
// keeps its book_note here since the book re-footnotes it on this page.
export const CHAPTER = {
  id: "ch46",
  number: 46,
  title: { ar: "تَارِيْخُ الْقَمِيْصِ", en: "The History of the Shirt" },
  pages: [158, 159, 160],
  newWords: [
    "قميص", "بلي", "تاريخ", "اشتغل", "زرّاع", "قطن", "تحمل", "زراعة", "شق",
    "جف", "حفر", "جنب", "بذر", "نقع", "نجم", "نبات", "عزق", "باطن", "ظاهر",
    "قلع", "حشيش", "أروى", "مرار", "حقل", "انبث", "بنت", "جنى", "حلاج",
    "حلج", "نقل", "مصنع", "غزل", "مد", "خيط", "متقارب", "نسج", "ثوب",
    "اكتسب", "عرق", "جبين", "حائك", "خياط", "فصل", "خاط", "سهر", "كسا",
    "حول", "قوة", "شر", "أرض", "أرسل",
  ],
  lemmas: {
    "قطن": {
      gloss: "cotton",
      book_note: "القُطْن: جنس نباتات زراعية ليفية ثمرتها مادة بيضاء ناعمة تُغزل وتُصنع منها الثياب ونحوها.",
    },
    "عناء": {
      gloss: "toil, weariness",
      book_note: "عَنَاءً: تعباً.",
    },
    "بذر": {
      gloss: "to scatter seed, sow",
      book_note: "بَذَرَ يَبْذُر بَذْراً: الحبَّ: ألقاه في الأرض متفرقاً للزراعة.",
    },
    "نجم": {
      gloss: "to sprout, emerge",
      book_note: "نَجَمَ يَنْجُمُ نَجْماً ونُجُوماً: طَلَعَ وظَهَر.",
    },
    "عزق": {
      gloss: "to hoe, turn over the soil",
      book_note: "عَزَقَ: شقّ.",
    },
    "حشيش": {
      gloss: "weeds, grass",
      book_note: "حَشِيْش جمع حَشَائِش واحدته حشيشة: العشب الذي يكسو الحدائق ونحوها.",
    },
    "أروى": {
      gloss: "to water abundantly, irrigate",
      book_note: "أَرْوَىٰ يُرْوِي إرْوَاءً: سَقَىٰ.",
    },
    "حلاج": {
      gloss: "cotton-ginner",
      book_note: "الحَلاَّج: الَّذي يخلِّص القطن من بذره.",
    },
    "حلج": {
      gloss: "to gin cotton",
      book_note: "حَلَجَ يَحْلُجُ حَلْجاً وحِلاَجَةً القطنَ: خَلَّصَه من بذره.",
    },
    "عرق": {
      gloss: "sweat",
      book_note: "بِعَرَقِ الْجَبِيْنِ: أي بالجهد والكدِّ.",
    },
  },
  paragraphs: [
    // Paragraph 1: the rhetorical opening -- do you know your shirt's history?
    {
      en: "You've worn a new shirt -- so wear it out, let it fray! But do you know anything of its history? Do you know how many hands worked on it, how many people were occupied with it, how much the workers toiled over it, and how it reached you?",
      sentences: [
        {
          id: "qr2-46-001",
          ar: "إِنَّكَ لَبِسْتَ قَمِيْصاً جَدِيْداً ،",
          en: "You've worn a new shirt,",
          tokens: [
            { surface: "إِنَّكَ", lemma: "إن", pos: "part", features: "part+2ms", gloss: "indeed you" },
            { surface: "لَبِسْتَ", lemma: "لبس", pos: "verb", features: "perf.2ms", root: "ل ب س", gloss: "you wore" },
            { surface: "قَمِيْصاً", lemma: "قميص", pos: "noun", features: "indef.acc", root: "ق م ص", gloss: "a shirt" },
            { surface: "جَدِيْداً", lemma: "جديد", pos: "adj", features: "indef.acc", root: "ج د د", gloss: "new" },
          ],
        },
        {
          id: "qr2-46-002",
          ar: "فَأَبْلِ وَأَخْلِقْ!",
          en: "so wear it out, let it fray!",
          tokens: [
            { surface: "فَأَبْلِ", lemma: "بلي", pos: "verb", features: "conj+imp.2ms", root: "ب ل ي", gloss: "so wear it out" },
            { surface: "وَأَخْلِقْ", lemma: "خلق", pos: "verb", features: "conj+imp.2ms", root: "خ ل ق", gloss: "and let it become worn thin, threadbare" },
          ],
        },
        {
          id: "qr2-46-003",
          ar: "وَلٰكِنْ هَلْ تَعْرِفُ مِنْ تَارِيْخِهِ شَيْئاً ،",
          en: "But do you know anything of its history,",
          tokens: [
            { surface: "وَلٰكِنْ", lemma: "لكن", pos: "part", features: "conj+part", gloss: "but" },
            { surface: "هَلْ", lemma: "هل", pos: "part", gloss: "[question particle]" },
            { surface: "تَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.2ms", root: "ع ر ف", gloss: "do you know" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "تَارِيْخِهِ", lemma: "تاريخ", pos: "noun", features: "gen.constr+3ms", root: "أ ر خ", gloss: "its history" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "anything" },
          ],
        },
        {
          id: "qr2-46-004",
          ar: "هَلْ تَعْرِفُ كَمْ عَمِلَ فِيْهِ مِنَ الأَيْدِيْ ،",
          en: "do you know how many hands worked on it,",
          tokens: [
            { surface: "هَلْ", lemma: "هل", pos: "part", gloss: "[question particle]" },
            { surface: "تَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.2ms", root: "ع ر ف", gloss: "do you know" },
            { surface: "كَمْ", lemma: "كم", pos: "part", gloss: "how many" },
            { surface: "عَمِلَ", lemma: "عمل", pos: "verb", features: "perf.3ms", root: "ع م ل", gloss: "worked" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "prep+3ms", gloss: "on it" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "الأَيْدِيْ", lemma: "يد", pos: "noun", features: "pl.def.gen", root: "ي د ي", gloss: "the hands" },
          ],
        },
        {
          id: "qr2-46-005",
          ar: "وَكَمِ اشْتَغَلَ بِهِ النَّاسُ ،",
          en: "how many people were occupied with it,",
          tokens: [
            { surface: "وَكَمِ", lemma: "كم", pos: "part", features: "conj+part", gloss: "and how many" },
            { surface: "اشْتَغَلَ", lemma: "اشتغل", pos: "verb", features: "perf.3ms", root: "ش غ ل", gloss: "were occupied" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", gloss: "with it" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
          ],
        },
        {
          id: "qr2-46-006",
          ar: "وَكَمْ تَعِبَ فِيْهِ الْعَامِلُوْنَ ،",
          en: "how much the workers toiled over it,",
          tokens: [
            { surface: "وَكَمْ", lemma: "كم", pos: "part", features: "conj+part", gloss: "and how much" },
            { surface: "تَعِبَ", lemma: "تعب", pos: "verb", features: "perf.3ms", root: "ت ع ب", gloss: "toiled" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "prep+3ms", gloss: "over it" },
            { surface: "الْعَامِلُوْنَ", lemma: "عامل", pos: "noun", features: "pl.def.nom", root: "ع م ل", gloss: "the workers" },
          ],
        },
        {
          id: "qr2-46-007",
          ar: "وَكَيْفَ وَصَلَ إِلَيْكَ؟",
          en: "and how it reached you?",
          tokens: [
            { surface: "وَكَيْفَ", lemma: "كيف", pos: "part", features: "conj+part", root: "ك ي ف", gloss: "and how" },
            { surface: "وَصَلَ", lemma: "وصل", pos: "verb", features: "perf.3ms", root: "و ص ل", gloss: "it reached" },
            { surface: "إِلَيْكَ", lemma: "إلى", pos: "prep", features: "prep+2ms", gloss: "to you" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا يَسْأَلُ الْكَاتِبُ الْقَارِئَ فِيْ بِدَايَةِ الدَّرْسِ؟",
          options: ["هَلْ يَعْرِفُ تَارِيْخَ قَمِيْصِهِ", "مَا اسْمُهُ", "كَمْ عُمْرُهُ"],
          answer: 0,
          qEn: "What does the writer ask the reader at the start of the lesson?",
          optionsEn: ["Whether he knows the history of his shirt", "What his name is", "How old he is"],
        },
        {
          q: "مَاذَا يَعْنِيْ قَوْلُهُ: أَبْلِ وَأَخْلِقْ؟",
          options: ["الْبَسْهُ حَتَّىٰ يَبْلَىٰ وَيَقْدَمَ", "اِشْتَرِ قَمِيْصاً آخَرَ", "لاَ تَلْبَسْهُ أَبَداً"],
          answer: 0,
          qEn: "What does 'wear it out, let it fray' mean?",
          optionsEn: ["Wear it until it becomes old and worn", "Buy another shirt", "Never wear it"],
        },
      ],
    },
    // Paragraph 2: growing the cotton, from plowing to picking.
    {
      en: "It began with the farmer sowing the cotton, bearing great toil in growing it -- for growing cotton means enormous hardship and long labor. He plowed the land three times or more, and cut furrows, and filled them with water, and left them until they dried, and dug pits along their side. Then he scattered cotton seeds into it, having soaked them in water overnight. When the plant sprouted, the farmer hoed the furrows, turning their inside out, and pulled up the weeds that harm the cotton, and watered it again and again. The farmer never stopped tending the field, laboring without rest for months, until the cotton appeared on it -- so the children, boys and girls, spread out into the field and picked the cotton.",
      sentences: [
        {
          id: "qr2-46-008",
          ar: "كَانَ أَوَّلُ أَمْرِهِ أَنَّ الزَّرَّاعَ زَرَعَ الْقُطْنَ وَتَحَمَّلَ فِيْ زِرَاعَتِهِ عَنَاءً شَدِيْداً ،",
          en: "It began with the farmer sowing the cotton, bearing great toil in growing it,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "it was" },
            { surface: "أَوَّلُ", lemma: "أول", pos: "adj", features: "nom.constr", root: "أ و ل", gloss: "the first of" },
            { surface: "أَمْرِهِ", lemma: "أمر", pos: "noun", features: "gen.constr+3ms", root: "أ م ر", gloss: "its matter" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "الزَّرَّاعَ", lemma: "زرّاع", pos: "noun", features: "def.acc", root: "ز ر ع", gloss: "the farmer" },
            { surface: "زَرَعَ", lemma: "زرع", pos: "verb", features: "perf.3ms", root: "ز ر ع", gloss: "sowed" },
            { surface: "الْقُطْنَ", lemma: "قطن", pos: "noun", features: "def.acc", root: "ق ط ن", gloss: "the cotton" },
            { surface: "وَتَحَمَّلَ", lemma: "تحمل", pos: "verb", features: "conj+perf.3ms", root: "ح م ل", gloss: "and bore" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "زِرَاعَتِهِ", lemma: "زراعة", pos: "noun", features: "gen.constr+3ms", root: "ز ر ع", gloss: "growing it" },
            { surface: "عَنَاءً", lemma: "عناء", pos: "noun", features: "indef.acc", root: "ع ن ي", gloss: "toil" },
            { surface: "شَدِيْداً", lemma: "شديد", pos: "adj", features: "indef.acc", root: "ش د د", gloss: "great, intense" },
          ],
        },
        {
          id: "qr2-46-009",
          ar: "فَإِنَّ زِرَاعَةَ الْقُطْنِ فِيْهَا تَعَبٌ عَظِيْمٌ ،",
          en: "for growing cotton means enormous hardship,",
          tokens: [
            { surface: "فَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", gloss: "for indeed" },
            { surface: "زِرَاعَةَ", lemma: "زراعة", pos: "noun", features: "acc.constr", root: "ز ر ع", gloss: "the growing of" },
            { surface: "الْقُطْنِ", lemma: "قطن", pos: "noun", features: "def.gen", root: "ق ط ن", gloss: "the cotton" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", gloss: "in it (there is)" },
            { surface: "تَعَبٌ", lemma: "تعب", pos: "noun", features: "indef.nom", root: "ت ع ب", gloss: "hardship" },
            { surface: "عَظِيْمٌ", lemma: "عظيم", pos: "adj", features: "indef.nom", root: "ع ظ م", gloss: "enormous" },
          ],
        },
        {
          id: "qr2-46-010",
          ar: "وَشُغْلٌ طَوِيْلٌ ،",
          en: "and long labor,",
          tokens: [
            { surface: "وَشُغْلٌ", lemma: "شغل", pos: "noun", features: "conj+indef.nom", root: "ش غ ل", gloss: "and labor" },
            { surface: "طَوِيْلٌ", lemma: "طويل", pos: "adj", features: "indef.nom", root: "ط و ل", gloss: "long" },
          ],
        },
        {
          id: "qr2-46-011",
          ar: "حَرَثَ الأَرْضَ ثَلاَثَ مَرَّاتٍ ،",
          en: "He plowed the land three times,",
          tokens: [
            { surface: "حَرَثَ", lemma: "حرث", pos: "verb", features: "perf.3ms", root: "ح ر ث", gloss: "he plowed" },
            { surface: "الأَرْضَ", lemma: "أرض", pos: "noun", features: "def.acc", root: "أ ر ض", gloss: "the land" },
            { surface: "ثَلاَثَ", lemma: "ثلاثة", pos: "num", features: "acc.constr", root: "ث ل ث", gloss: "three" },
            { surface: "مَرَّاتٍ", lemma: "مرة", pos: "noun", features: "pl.indef.gen", root: "م ر ر", gloss: "times" },
          ],
        },
        {
          id: "qr2-46-012",
          ar: "أَوْ أَكْثَرَ ،",
          en: "or more,",
          tokens: [
            { surface: "أَوْ", lemma: "أو", pos: "conj", gloss: "or" },
            { surface: "أَكْثَرَ", lemma: "أكثر", pos: "adj", features: "acc", root: "ك ث ر", gloss: "more" },
          ],
        },
        {
          id: "qr2-46-013",
          ar: "وَشَقَّ خُطُوْطاً ،",
          en: "and cut furrows,",
          tokens: [
            { surface: "وَشَقَّ", lemma: "شق", pos: "verb", features: "conj+perf.3ms", root: "ش ق ق", gloss: "and he cut" },
            { surface: "خُطُوْطاً", lemma: "خط", pos: "noun", features: "pl.indef.acc", root: "خ ط ط", gloss: "furrows, lines" },
          ],
        },
        {
          id: "qr2-46-014",
          ar: "وَمَلأَهَا بِالْمَاءِ ،",
          en: "and filled them with water,",
          tokens: [
            { surface: "وَمَلأَهَا", lemma: "ملأ", pos: "verb", features: "conj+perf.3ms+3fs", root: "م ل أ", gloss: "and he filled them" },
            { surface: "بِالْمَاءِ", lemma: "ماء", pos: "noun", features: "prep+def.gen", root: "م و ه", gloss: "with water" },
          ],
        },
        {
          id: "qr2-46-015",
          ar: "وَتَرَكَهَا حَتَّىٰ جَفَّتْ ،",
          en: "and left them until they dried,",
          tokens: [
            { surface: "وَتَرَكَهَا", lemma: "ترك", pos: "verb", features: "conj+perf.3ms+3fs", root: "ت ر ك", gloss: "and he left them" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", gloss: "until" },
            { surface: "جَفَّتْ", lemma: "جف", pos: "verb", features: "perf.3fs", root: "ج ف ف", gloss: "they dried" },
          ],
        },
        {
          id: "qr2-46-016",
          ar: "وَحَفَرَ فِيْ جَنْبِهَا حُفَراً ،",
          en: "and dug pits along their side,",
          tokens: [
            { surface: "وَحَفَرَ", lemma: "حفر", pos: "verb", features: "conj+perf.3ms", root: "ح ف ر", gloss: "and he dug" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in, along" },
            { surface: "جَنْبِهَا", lemma: "جنب", pos: "noun", features: "gen.constr+3fs", root: "ج ن ب", gloss: "their side" },
            { surface: "حُفَراً", lemma: "حفر", pos: "noun", features: "pl.indef.acc", root: "ح ف ر", gloss: "pits" },
          ],
        },
        {
          id: "qr2-46-017",
          ar: "ثُمَّ بَذَرَ فِيْهَا بُذُوْراً مِنَ الْقُطْنِ قَدْ نَقَعَهَا بِالْمَاءِ لَيْلَةً ،",
          en: "Then he scattered cotton seeds into it, having soaked them in water overnight,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "بَذَرَ", lemma: "بذر", pos: "verb", features: "perf.3ms", root: "ب ذ ر", gloss: "he scattered (seed)" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", gloss: "into it" },
            { surface: "بُذُوْراً", lemma: "بذر", pos: "noun", features: "pl.indef.acc", root: "ب ذ ر", gloss: "seeds" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "الْقُطْنِ", lemma: "قطن", pos: "noun", features: "def.gen", root: "ق ط ن", gloss: "the cotton" },
            { surface: "قَدْ", lemma: "قد", pos: "part", gloss: "having (already)" },
            { surface: "نَقَعَهَا", lemma: "نقع", pos: "verb", features: "perf.3ms+3fs", root: "ن ق ع", gloss: "he soaked them" },
            { surface: "بِالْمَاءِ", lemma: "ماء", pos: "noun", features: "prep+def.gen", root: "م و ه", gloss: "in water" },
            { surface: "لَيْلَةً", lemma: "ليلة", pos: "noun", features: "indef.acc", root: "ل ي ل", gloss: "overnight" },
          ],
        },
        {
          id: "qr2-46-018",
          ar: "وَلَمَّا نَجَمَ النَّبَاتُ عَزَقَ الْفَلاَّحُ الْخُطُوْطَ ،",
          en: "When the plant sprouted, the farmer hoed the furrows,",
          tokens: [
            { surface: "وَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", gloss: "and when" },
            { surface: "نَجَمَ", lemma: "نجم", pos: "verb", features: "perf.3ms", root: "ن ج م", gloss: "sprouted" },
            { surface: "النَّبَاتُ", lemma: "نبات", pos: "noun", features: "def.nom", root: "ن ب ت", gloss: "the plant" },
            { surface: "عَزَقَ", lemma: "عزق", pos: "verb", features: "perf.3ms", root: "ع ز ق", gloss: "hoed" },
            { surface: "الْفَلاَّحُ", lemma: "فلاح", pos: "noun", features: "def.nom", root: "ف ل ح", gloss: "the farmer" },
            { surface: "الْخُطُوْطَ", lemma: "خط", pos: "noun", features: "pl.def.acc", root: "خ ط ط", gloss: "the furrows" },
          ],
        },
        {
          id: "qr2-46-019",
          ar: "فَجَعَلَ بَاطِنَهَا ظَاهِرَهَا ،",
          en: "turning their inside out,",
          tokens: [
            { surface: "فَجَعَلَ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms", root: "ج ع ل", gloss: "and he made" },
            { surface: "بَاطِنَهَا", lemma: "باطن", pos: "noun", features: "acc.constr+3fs", root: "ب ط ن", gloss: "their inside" },
            { surface: "ظَاهِرَهَا", lemma: "ظاهر", pos: "noun", features: "acc.constr+3fs", root: "ظ ه ر", gloss: "their outside" },
          ],
        },
        {
          id: "qr2-46-020",
          ar: "وَقَلَعَ الْحَشَائِشَ الَّتِيْ تَضُرُّ بِالْقُطْنِ ،",
          en: "and pulled up the weeds that harm the cotton,",
          tokens: [
            { surface: "وَقَلَعَ", lemma: "قلع", pos: "verb", features: "conj+perf.3ms", root: "ق ل ع", gloss: "and he pulled up" },
            { surface: "الْحَشَائِشَ", lemma: "حشيش", pos: "noun", features: "pl.def.acc", root: "ح ش ش", gloss: "the weeds" },
            { surface: "الَّتِيْ", lemma: "الذي", pos: "rel", gloss: "that, which" },
            { surface: "تَضُرُّ", lemma: "ضر", pos: "verb", features: "impf.3fs", root: "ض ر ر", gloss: "harm" },
            { surface: "بِالْقُطْنِ", lemma: "قطن", pos: "noun", features: "prep+def.gen", root: "ق ط ن", gloss: "the cotton" },
          ],
        },
        {
          id: "qr2-46-021",
          ar: "وَأَرْوَاهَا مِرَاراً ،",
          en: "and watered it again and again,",
          tokens: [
            { surface: "وَأَرْوَاهَا", lemma: "أروى", pos: "verb", features: "conj+perf.3ms+3fs", root: "ر و ي", gloss: "and he watered it" },
            { surface: "مِرَاراً", lemma: "مرار", pos: "adv", features: "indef.acc", root: "م ر ر", gloss: "repeatedly" },
          ],
        },
        {
          id: "qr2-46-022",
          ar: "وَلَمْ يَزَلِ الْفَلاَّحُ يَخْدُمُ الْحَقْلَ ،",
          en: "The farmer never stopped tending the field,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "يَزَلِ", lemma: "زال", pos: "verb", features: "jussive.3ms", root: "ز ي ل", gloss: "did he cease" },
            { surface: "الْفَلاَّحُ", lemma: "فلاح", pos: "noun", features: "def.nom", root: "ف ل ح", gloss: "the farmer" },
            { surface: "يَخْدُمُ", lemma: "خدم", pos: "verb", features: "impf.3ms", root: "خ د م", gloss: "tending" },
            { surface: "الْحَقْلَ", lemma: "حقل", pos: "noun", features: "def.acc", root: "ح ق ل", gloss: "the field" },
          ],
        },
        {
          id: "qr2-46-023",
          ar: "وَيَتْعَبُ وَلاَ يَسْتَرِيْحُ شُهُوْراً ،",
          en: "laboring without rest for months,",
          tokens: [
            { surface: "وَيَتْعَبُ", lemma: "تعب", pos: "verb", features: "conj+impf.3ms", root: "ت ع ب", gloss: "and he labors" },
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "يَسْتَرِيْحُ", lemma: "استراح", pos: "verb", features: "impf.3ms", root: "ر و ح", gloss: "does he rest" },
            { surface: "شُهُوْراً", lemma: "شهر", pos: "noun", features: "pl.indef.acc", root: "ش ه ر", gloss: "for months" },
          ],
        },
        {
          id: "qr2-46-024",
          ar: "حَتَّىٰ ظَهَرَ فِيْهَا الْقُطْنُ ،",
          en: "until the cotton appeared on it,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", gloss: "until" },
            { surface: "ظَهَرَ", lemma: "ظهر", pos: "verb", features: "perf.3ms", root: "ظ ه ر", gloss: "appeared" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", gloss: "on it" },
            { surface: "الْقُطْنُ", lemma: "قطن", pos: "noun", features: "def.nom", root: "ق ط ن", gloss: "the cotton" },
          ],
        },
        {
          id: "qr2-46-025",
          ar: "فَانْبَثَّ الأَوْلاَدُ مِنَ الْبَنِيْنَ وَالْبَنَاتِ فِي الْحَقْلِ ،",
          en: "so the children, boys and girls, spread out into the field,",
          tokens: [
            { surface: "فَانْبَثَّ", lemma: "انبث", pos: "verb", features: "conj+perf.3ms", root: "ب ث ث", gloss: "so spread out" },
            { surface: "الأَوْلاَدُ", lemma: "ولد", pos: "noun", features: "pl.def.nom", root: "و ل د", gloss: "the children" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "الْبَنِيْنَ", lemma: "ابن", pos: "noun", features: "pl.def.gen", root: "ب ن ي", gloss: "the sons, boys" },
            { surface: "وَالْبَنَاتِ", lemma: "بنت", pos: "noun", features: "conj+pl.def.gen", root: "ب ن ت", gloss: "and the daughters, girls" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "into" },
            { surface: "الْحَقْلِ", lemma: "حقل", pos: "noun", features: "def.gen", root: "ح ق ل", gloss: "the field" },
          ],
        },
        {
          id: "qr2-46-026",
          ar: "وَجَنَوُا الْقُطْنَ.",
          en: "and picked the cotton.",
          tokens: [
            { surface: "وَجَنَوُا", lemma: "جنى", pos: "verb", features: "conj+perf.3mp", root: "ج ن ي", gloss: "and they picked" },
            { surface: "الْقُطْنَ", lemma: "قطن", pos: "noun", features: "def.acc", root: "ق ط ن", gloss: "the cotton" },
          ],
        },
      ],
      checks: [
        {
          q: "كَمْ مَرَّةً حَرَثَ الْفَلاَّحُ الأَرْضَ؟",
          options: ["ثَلاَثَ مَرَّاتٍ أَوْ أَكْثَرَ", "مَرَّةً وَاحِدَةً", "عَشْرَ مَرَّاتٍ"],
          answer: 0,
          qEn: "How many times did the farmer plow the land?",
          optionsEn: ["Three times or more", "Once", "Ten times"],
        },
        {
          q: "مَنِ انْبَثَّ فِي الْحَقْلِ لِيَجْنُوا الْقُطْنَ؟",
          options: ["الأَوْلاَدُ مِنَ الْبَنِيْنَ وَالْبَنَاتِ", "التُّجَّارُ", "الْمُعَلِّمُوْنَ"],
          answer: 0,
          qEn: "Who spread out into the field to pick the cotton?",
          optionsEn: ["The children, boys and girls", "The merchants", "The teachers"],
        },
      ],
    },
    // Paragraph 3: ginning, spinning, weaving, buying, and tailoring.
    {
      en: "When the cotton was gathered, it was sent to the ginner, who ginned it. Then it was moved to some of the mills and spun. Then the weaver took it, and drew it out into even threads, and kept working and laboring for days, until he wove it into a soft, sturdy cloth. A merchant bought that cloth and put it in his shop. Your father went to him with money he had earned by the sweat of his brow, having toiled over it for days -- you're at home, resting, eating and sleeping. That cloth went to a tailor, who cut a shirt out of it for you, then sewed it on the night before Eid while he stayed up -- and you were asleep in your bed.",
      sentences: [
        {
          id: "qr2-46-027",
          ar: "وَلَمَّا جُمِعَ الْقُطْنُ أُرْسِلَ إِلَىٰ الْحَلاَّجِ ،",
          en: "When the cotton was gathered, it was sent to the ginner,",
          tokens: [
            { surface: "وَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", gloss: "and when" },
            { surface: "جُمِعَ", lemma: "جمع", pos: "verb", features: "pass.perf.3ms", root: "ج م ع", gloss: "was gathered" },
            { surface: "الْقُطْنُ", lemma: "قطن", pos: "noun", features: "def.nom", root: "ق ط ن", gloss: "the cotton" },
            { surface: "أُرْسِلَ", lemma: "أرسل", pos: "verb", features: "pass.perf.3ms", root: "ر س ل", gloss: "was sent" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "الْحَلاَّجِ", lemma: "حلاج", pos: "noun", features: "def.gen", root: "ح ل ج", gloss: "the cotton-ginner" },
          ],
        },
        {
          id: "qr2-46-028",
          ar: "فَحَلَجَهُ ،",
          en: "who ginned it,",
          tokens: [
            { surface: "فَحَلَجَهُ", lemma: "حلج", pos: "verb", features: "conj+perf.3ms+3ms", root: "ح ل ج", gloss: "and he ginned it" },
          ],
        },
        {
          id: "qr2-46-029",
          ar: "ثُمَّ نُقِلَ إِلَىٰ بَعْضِ الْمَصَانِعِ فَغُزِلَ ،",
          en: "Then it was moved to some of the mills and spun,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "نُقِلَ", lemma: "نقل", pos: "verb", features: "pass.perf.3ms", root: "ن ق ل", gloss: "was moved" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "بَعْضِ", lemma: "بعض", pos: "noun", features: "gen.constr", root: "ب ع ض", gloss: "some of" },
            { surface: "الْمَصَانِعِ", lemma: "مصنع", pos: "noun", features: "pl.def.gen", root: "ص ن ع", gloss: "the factories, mills" },
            { surface: "فَغُزِلَ", lemma: "غزل", pos: "verb", features: "conj+pass.perf.3ms", root: "غ ز ل", gloss: "and was spun" },
          ],
        },
        {
          id: "qr2-46-030",
          ar: "ثُمَّ أَخَذَهُ الْحَائِكُ ،",
          en: "Then the weaver took it,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "أَخَذَهُ", lemma: "أخذ", pos: "verb", features: "perf.3ms+3ms", root: "أ خ ذ", gloss: "took it" },
            { surface: "الْحَائِكُ", lemma: "حائك", pos: "noun", features: "def.nom", root: "ح و ك", gloss: "the weaver" },
          ],
        },
        {
          id: "qr2-46-031",
          ar: "وَمَدَّهُ خُيُوْطاً مُتَقَارِبَةً ،",
          en: "and drew it out into even threads,",
          tokens: [
            { surface: "وَمَدَّهُ", lemma: "مد", pos: "verb", features: "conj+perf.3ms+3ms", root: "م د د", gloss: "and he drew it out" },
            { surface: "خُيُوْطاً", lemma: "خيط", pos: "noun", features: "pl.indef.acc", root: "خ ي ط", gloss: "into threads" },
            { surface: "مُتَقَارِبَةً", lemma: "متقارب", pos: "adj", features: "indef.acc.f", root: "ق ر ب", gloss: "even, uniform" },
          ],
        },
        {
          id: "qr2-46-032",
          ar: "وَلَمْ يَزَلْ يَشْتَغِلُ وَيَتْعَبُ أَيَاماً ،",
          en: "and kept working and laboring for days,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "يَزَلْ", lemma: "زال", pos: "verb", features: "jussive.3ms", root: "ز ي ل", gloss: "did he cease" },
            { surface: "يَشْتَغِلُ", lemma: "اشتغل", pos: "verb", features: "impf.3ms", root: "ش غ ل", gloss: "working" },
            { surface: "وَيَتْعَبُ", lemma: "تعب", pos: "verb", features: "conj+impf.3ms", root: "ت ع ب", gloss: "and laboring" },
            { surface: "أَيَاماً", lemma: "يوم", pos: "noun", features: "pl.indef.acc", root: "ي و م", gloss: "for days" },
          ],
        },
        {
          id: "qr2-46-033",
          ar: "حَتَّىٰ نَسَجَهُ ثَوْباً نَاعِماً مَتِيْناً ،",
          en: "until he wove it into a soft, sturdy cloth,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", gloss: "until" },
            { surface: "نَسَجَهُ", lemma: "نسج", pos: "verb", features: "perf.3ms+3ms", root: "ن س ج", gloss: "he wove it" },
            { surface: "ثَوْباً", lemma: "ثوب", pos: "noun", features: "indef.acc", root: "ث و ب", gloss: "into cloth" },
            { surface: "نَاعِماً", lemma: "ناعم", pos: "adj", features: "indef.acc", root: "ن ع م", gloss: "soft" },
            { surface: "مَتِيْناً", lemma: "متين", pos: "adj", features: "indef.acc", root: "م ت ن", gloss: "sturdy" },
          ],
        },
        {
          id: "qr2-46-034",
          ar: "وَاشْتَرَىٰ تَاجِرٌ ذٰلِكَ الثَّوْبَ وَوَضَعَهُ فِيْ دُكَّانِهِ ،",
          en: "A merchant bought that cloth and put it in his shop,",
          tokens: [
            { surface: "وَاشْتَرَىٰ", lemma: "اشترى", pos: "verb", features: "conj+perf.3ms", root: "ش ر ي", gloss: "and he bought" },
            { surface: "تَاجِرٌ", lemma: "تاجر", pos: "noun", features: "indef.nom", root: "ت ج ر", gloss: "a merchant" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", gloss: "that" },
            { surface: "الثَّوْبَ", lemma: "ثوب", pos: "noun", features: "def.acc", root: "ث و ب", gloss: "the cloth" },
            { surface: "وَوَضَعَهُ", lemma: "وضع", pos: "verb", features: "conj+perf.3ms+3ms", root: "و ض ع", gloss: "and put it" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "دُكَّانِهِ", lemma: "دكان", pos: "noun", features: "gen.constr+3ms", root: "د ك ن", gloss: "his shop" },
          ],
        },
        {
          id: "qr2-46-035",
          ar: "فَذَهَبَ إِلَيْهِ أَبُوْكَ بِمَالِهِ الَّذِيْ اكْتَسَبَهُ بِعَرَقِ الْجَبِيْنِ وَتَعِبَ فِيْهِ أَيَاماً ،",
          en: "Your father went to him with money he had earned by the sweat of his brow, having toiled over it for days,",
          tokens: [
            { surface: "فَذَهَبَ", lemma: "ذهب", pos: "verb", features: "conj+perf.3ms", root: "ذ ه ب", gloss: "and he went" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", gloss: "to him" },
            { surface: "أَبُوْكَ", lemma: "أب", pos: "noun", features: "nom.constr+2ms", root: "أ ب و", gloss: "your father" },
            { surface: "بِمَالِهِ", lemma: "مال", pos: "noun", features: "prep+gen.constr+3ms", root: "م و ل", gloss: "with his money" },
            { surface: "الَّذِيْ", lemma: "الذي", pos: "rel", gloss: "which" },
            { surface: "اكْتَسَبَهُ", lemma: "اكتسب", pos: "verb", features: "perf.3ms+3ms", root: "ك س ب", gloss: "he earned" },
            { surface: "بِعَرَقِ", lemma: "عرق", pos: "noun", features: "prep+gen.constr", root: "ع ر ق", gloss: "by the sweat of" },
            { surface: "الْجَبِيْنِ", lemma: "جبين", pos: "noun", features: "def.gen", root: "ج ب ن", gloss: "the brow" },
            { surface: "وَتَعِبَ", lemma: "تعب", pos: "verb", features: "conj+perf.3ms", root: "ت ع ب", gloss: "and toiled" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "prep+3ms", gloss: "over it" },
            { surface: "أَيَاماً", lemma: "يوم", pos: "noun", features: "pl.indef.acc", root: "ي و م", gloss: "for days" },
          ],
        },
        {
          id: "qr2-46-036",
          ar: "أَنْتَ مُسْتَرِيْحٌ فِي الْبَيْتِ تَأْكُلُ وَتَنَامُ ،",
          en: "you're at home, resting, eating and sleeping,",
          tokens: [
            { surface: "أَنْتَ", lemma: "أنت", pos: "dem", gloss: "you" },
            { surface: "مُسْتَرِيْحٌ", lemma: "استراح", pos: "adj", features: "indef.nom", root: "ر و ح", gloss: "resting" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "in, at" },
            { surface: "الْبَيْتِ", lemma: "بيت", pos: "noun", features: "def.gen", root: "ب ي ت", gloss: "the house" },
            { surface: "تَأْكُلُ", lemma: "أكل", pos: "verb", features: "impf.2ms", root: "أ ك ل", gloss: "eating" },
            { surface: "وَتَنَامُ", lemma: "نام", pos: "verb", features: "conj+impf.2ms", root: "ن و م", gloss: "and sleeping" },
          ],
        },
        {
          id: "qr2-46-037",
          ar: "وَذَهَبَ ذٰلِكَ الثَّوْبُ إِلَىٰ خَيَّاطٍ فَفَصَّلَ مِنْهُ لَكَ قَمِيْصاً ،",
          en: "That cloth went to a tailor, who cut a shirt out of it for you,",
          tokens: [
            { surface: "وَذَهَبَ", lemma: "ذهب", pos: "verb", features: "conj+perf.3ms", root: "ذ ه ب", gloss: "and it went" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", gloss: "that" },
            { surface: "الثَّوْبُ", lemma: "ثوب", pos: "noun", features: "def.nom", root: "ث و ب", gloss: "the cloth" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "خَيَّاطٍ", lemma: "خياط", pos: "noun", features: "indef.gen", root: "خ ي ط", gloss: "a tailor" },
            { surface: "فَفَصَّلَ", lemma: "فصل", pos: "verb", features: "conj+perf.3ms", root: "ف ص ل", gloss: "and he cut out" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "prep+3ms", gloss: "from it" },
            { surface: "لَكَ", lemma: "ل", pos: "prep", features: "prep+2ms", gloss: "for you" },
            { surface: "قَمِيْصاً", lemma: "قميص", pos: "noun", features: "indef.acc", root: "ق م ص", gloss: "a shirt" },
          ],
        },
        {
          id: "qr2-46-038",
          ar: "ثُمَّ خَاطَهُ لَيْلَةَ الْعِيْدِ وَهُوَ سَاهِرٌ ،",
          en: "then sewed it on the night before Eid while he stayed up,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "خَاطَهُ", lemma: "خاط", pos: "verb", features: "perf.3ms+3ms", root: "خ ي ط", gloss: "he sewed it" },
            { surface: "لَيْلَةَ", lemma: "ليلة", pos: "noun", features: "acc.constr", root: "ل ي ل", gloss: "the night of" },
            { surface: "الْعِيْدِ", lemma: "عيد", pos: "noun", features: "def.gen", root: "ع و د", gloss: "the Eid" },
            { surface: "وَهُوَ", lemma: "هو", pos: "dem", features: "conj+3ms", gloss: "while he (was)" },
            { surface: "سَاهِرٌ", lemma: "سهر", pos: "adj", features: "indef.nom", root: "س ه ر", gloss: "staying up" },
          ],
        },
        {
          id: "qr2-46-039",
          ar: "وَأَنْتَ فِيْ فِرَاشِكَ نَائِمٌ.",
          en: "and you were asleep in your bed.",
          tokens: [
            { surface: "وَأَنْتَ", lemma: "أنت", pos: "dem", features: "conj", gloss: "and you" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "فِرَاشِكَ", lemma: "فراش", pos: "noun", features: "gen.constr+2ms", root: "ف ر ش", gloss: "your bed" },
            { surface: "نَائِمٌ", lemma: "نام", pos: "adj", features: "indef.nom", root: "ن و م", gloss: "asleep" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ الْحَلاَّجُ بِالْقُطْنِ؟",
          options: ["حَلَجَهُ", "زَرَعَهُ", "نَسَجَهُ"],
          answer: 0,
          qEn: "What did the ginner do with the cotton?",
          optionsEn: ["He ginned it", "He planted it", "He wove it"],
        },
        {
          q: "بِمَاذَا اشْتَرَىٰ الأَبُ الثَّوْبَ؟",
          options: ["بِمَالٍ اكْتَسَبَهُ بِعَرَقِ الْجَبِيْنِ", "بِمَالِ غَيْرِهِ", "بِلاَ ثَمَنٍ"],
          answer: 0,
          qEn: "With what did the father buy the cloth?",
          optionsEn: ["With money he earned by the sweat of his brow", "With someone else's money", "For free"],
        },
      ],
    },
    // Paragraph 4: closing thought, and the supplication for new clothes.
    {
      en: "The shirt came to you without any toil or labor on your part -- shouldn't you say, when you wear it: 'O Allah, You have clothed me with it, and dressed me in it without any power or strength of my own. I ask You for its good and the good of what it was made for, and I seek refuge in You from its harm and the harm of what it was made for.'",
      sentences: [
        {
          id: "qr2-46-040",
          ar: "وَجَاءَ إِلَيْكَ الْقَمِيْصُ مِنْ غَيْرِ تَعَبٍ مِنْكَ وَشُغْلٍ ،",
          en: "The shirt came to you without any toil or labor on your part,",
          tokens: [
            { surface: "وَجَاءَ", lemma: "جاء", pos: "verb", features: "conj+perf.3ms", root: "ج ي أ", gloss: "and it came" },
            { surface: "إِلَيْكَ", lemma: "إلى", pos: "prep", features: "prep+2ms", gloss: "to you" },
            { surface: "الْقَمِيْصُ", lemma: "قميص", pos: "noun", features: "def.nom", root: "ق م ص", gloss: "the shirt" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "غَيْرِ", lemma: "غير", pos: "noun", features: "gen.constr", root: "غ ي ر", gloss: "without" },
            { surface: "تَعَبٍ", lemma: "تعب", pos: "noun", features: "indef.gen", root: "ت ع ب", gloss: "toil" },
            { surface: "مِنْكَ", lemma: "من", pos: "prep", features: "prep+2ms", gloss: "on your part" },
            { surface: "وَشُغْلٍ", lemma: "شغل", pos: "noun", features: "conj+indef.gen", root: "ش غ ل", gloss: "or labor" },
          ],
        },
        {
          id: "qr2-46-041",
          ar: "أَفَلاَ يَجِبُ عَلَيْكَ أَنْ تَقُوْلَ إِذَا لَبِسْتَهُ:",
          en: "shouldn't you say, when you wear it:",
          tokens: [
            { surface: "أَفَلاَ", lemma: "فلا", pos: "part", features: "part+neg", gloss: "should not" },
            { surface: "يَجِبُ", lemma: "وجب", pos: "verb", features: "impf.3ms", root: "و ج ب", gloss: "it is obligatory" },
            { surface: "عَلَيْكَ", lemma: "على", pos: "prep", features: "prep+2ms", gloss: "upon you" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "تَقُوْلَ", lemma: "قال", pos: "verb", features: "subj.2ms", root: "ق و ل", gloss: "you say" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "when" },
            { surface: "لَبِسْتَهُ", lemma: "لبس", pos: "verb", features: "perf.2ms+3ms", root: "ل ب س", gloss: "you wear it" },
          ],
        },
        {
          id: "qr2-46-042",
          ar: "«اللَّهُمَّ أَنْتَ كَسَوْتَنِيْهِ ،",
          en: "'O Allah, You have clothed me with it,",
          tokens: [
            { surface: "اللَّهُمَّ", lemma: "الله", pos: "proper", features: "voc", root: "", gloss: "O Allah" },
            { surface: "أَنْتَ", lemma: "أنت", pos: "dem", gloss: "You" },
            { surface: "كَسَوْتَنِيْهِ", lemma: "كسا", pos: "verb", features: "perf.2ms+1s+3ms", root: "ك س و", gloss: "You clothed me with it" },
          ],
        },
        {
          id: "qr2-46-043",
          ar: "وَأَلْبَسْتَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّيْ وَلاَ قُوَّةٍ ،",
          en: "and dressed me in it without any power or strength of my own,",
          tokens: [
            { surface: "وَأَلْبَسْتَنِيْهِ", lemma: "لبس", pos: "verb", features: "conj+perf.2ms+1s+3ms", root: "ل ب س", gloss: "and You dressed me in it" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "غَيْرِ", lemma: "غير", pos: "noun", features: "gen.constr", root: "غ ي ر", gloss: "without" },
            { surface: "حَوْلٍ", lemma: "حول", pos: "noun", features: "indef.gen", root: "ح و ل", gloss: "power, strength" },
            { surface: "مِنِّيْ", lemma: "من", pos: "prep", features: "prep+1s", gloss: "from myself" },
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", gloss: "and no" },
            { surface: "قُوَّةٍ", lemma: "قوة", pos: "noun", features: "indef.gen", root: "ق و ي", gloss: "strength" },
          ],
        },
        {
          id: "qr2-46-044",
          ar: "أَسْأَلُكَ خَيْرَهُ ،",
          en: "I ask You for its good,",
          tokens: [
            { surface: "أَسْأَلُكَ", lemma: "سأل", pos: "verb", features: "impf.1s+2ms", root: "س أ ل", gloss: "I ask You" },
            { surface: "خَيْرَهُ", lemma: "خير", pos: "noun", features: "acc.constr+3ms", root: "خ ي ر", gloss: "its good" },
          ],
        },
        {
          id: "qr2-46-045",
          ar: "وَخَيْرَ مَا صُنِعَ لَهُ ،",
          en: "and the good of what it was made for,",
          tokens: [
            { surface: "وَخَيْرَ", lemma: "خير", pos: "noun", features: "conj+acc.constr", root: "خ ي ر", gloss: "and the good of" },
            { surface: "مَا", lemma: "ما", pos: "rel", gloss: "what" },
            { surface: "صُنِعَ", lemma: "صنع", pos: "verb", features: "pass.perf.3ms", root: "ص ن ع", gloss: "was made" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", gloss: "for it" },
          ],
        },
        {
          id: "qr2-46-046",
          ar: "وَأَعُوذُ بِكَ مِنْ شَرِّهِ ،",
          en: "and I seek refuge in You from its harm,",
          tokens: [
            { surface: "وَأَعُوذُ", lemma: "عاذ", pos: "verb", features: "conj+impf.1s", root: "ع و ذ", gloss: "and I seek refuge" },
            { surface: "بِكَ", lemma: "ب", pos: "prep", features: "prep+2ms", gloss: "in You" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "شَرِّهِ", lemma: "شر", pos: "noun", features: "gen.constr+3ms", root: "ش ر ر", gloss: "its harm" },
          ],
        },
        {
          id: "qr2-46-047",
          ar: "وَشَرِّ مَا صُنِعَ لَهُ» .",
          en: "and the harm of what it was made for.'",
          tokens: [
            { surface: "وَشَرِّ", lemma: "شر", pos: "noun", features: "conj+gen.constr", root: "ش ر ر", gloss: "and the harm of" },
            { surface: "مَا", lemma: "ما", pos: "rel", gloss: "what" },
            { surface: "صُنِعَ", lemma: "صنع", pos: "verb", features: "pass.perf.3ms", root: "ص ن ع", gloss: "was made" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", gloss: "for it" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا يَنْبَغِيْ أَنْ تَقُوْلَ إِذَا لَبِسْتَ ثَوْباً جَدِيْداً؟",
          options: ["الدُّعَاءَ الْمَذْكُوْرَ فِي الدَّرْسِ", "لاَ شَيْءَ", "آيَةً مِنَ الْقُرْآنِ"],
          answer: 0,
          qEn: "What should you say when you wear a new garment?",
          optionsEn: ["The supplication mentioned in the lesson", "Nothing", "A verse from the Qur'an"],
        },
        {
          q: "مِمَّ يَسْتَعِيْذُ الْمُسْلِمُ فِيْ هٰذَا الدُّعَاءِ؟",
          options: ["مِنْ شَرِّ الثَّوْبِ وَشَرِّ مَا صُنِعَ لَهُ", "مِنَ الْمَرَضِ", "مِنَ الْفَقْرِ"],
          answer: 0,
          qEn: "What does the Muslim seek refuge from in this supplication?",
          optionsEn: ["The harm of the garment and the harm of what it was made for", "Illness", "Poverty"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "",
        post: "الْفَلاَّحُ الأَرْضَ ثَلاَثَ مَرَّاتٍ ،",
        en: "The farmer plowed the land three times,",
        options: ["حَرَثَ", "حَرَثْتُ", "تَحْرُثُ", "نَحْرُثُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he plowed.",
          "1st person singular -- I plowed.",
          "2nd masculine or 3rd feminine present -- you/she plow.",
          "1st person plural present -- we plow.",
        ],
      },
      {
        type: "cloze",
        pre: "حَتَّىٰ",
        post: "ثَوْباً نَاعِماً مَتِيْناً ،",
        en: "until he wove it into a soft, sturdy cloth,",
        options: ["نَسَجَهُ", "نَسَجْتُهُ", "تَنْسُجُهُ", "نَسَجُوْهُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular + object pronoun -- he wove it.",
          "1st person singular -- I wove it.",
          "2nd masculine or 3rd feminine present -- you/she weave it.",
          "3rd masculine plural -- they wove it.",
        ],
      },
      {
        type: "cloze",
        pre: "كَمْ",
        post: "فِيْهِ مِنَ الأَيْدِيْ؟",
        en: "how many hands worked on it?",
        options: ["عَمِلَ", "عَمِلْتُ", "تَعْمَلُ", "نَعْمَلُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- it worked.",
          "1st person singular -- I worked.",
          "2nd masculine or 3rd feminine present -- you/she work.",
          "1st person plural present -- we work.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "أَسْأَلُكَ خَيْرَهُ",
        pre: "",
        post: "خَيْرَهُ",
        targetPerson: "هُوَ",
        targetEn: "he",
        options: ["يَسْأَلُكَ", "تَسْأَلُكَ", "نَسْأَلُكَ", "يَسْأَلُوْنَكَ"],
        answer: 0,
        rationales: [
          "3rd masculine singular -- he asks you.",
          "2nd masculine or 3rd feminine -- you/she ask.",
          "1st person plural -- we ask.",
          "3rd masculine plural -- they ask.",
        ],
      },
      {
        type: "shift",
        base: "أَعُوذُ بِكَ",
        pre: "",
        post: "بِكَ",
        targetPerson: "نَحْنُ",
        targetEn: "we",
        options: ["نَعُوذُ", "يَعُوذُ", "تَعُوذُ", "يَعُوذُوْنَ"],
        answer: 0,
        rationales: [
          "1st person plural -- we seek refuge.",
          "3rd masculine singular -- he seeks refuge.",
          "2nd masculine or 3rd feminine -- you/she seek refuge.",
          "3rd masculine plural -- they seek refuge.",
        ],
      },
    ],
  },
};

// قِرَاءَةٌ رَاشِدَةٌ, ch47 -- printed pages 161-163, "الأَسَدُ" ("The Lion"). A
// short descriptive/natural-history essay: the lion's fearsome appearance
// and what happens to his body when he grows angry and attacks; his calm
// when chained versus his surge when provoked, and his greater boldness at
// night; what he hunts and preys on, including humans when provoked; the
// lioness and her cub; and closing measurements -- average length, height,
// lifespan, and the much longer lifespan possible in captivity.
//
// Homograph flag for future reconciliation: "مال" already has an
// established NOUN sense "wealth, money" (root م و ل, seeded in this book's
// own ch45/46). This chapter's "وَمَالَ إِلَىٰ الأَرْضِ" ("and he leans toward
// the ground") uses an unrelated VERB "مَالَ يَمِيْلُ" (root م ي ل, "to lean,
// incline") that happens to share the bare spelling. The lemma key is
// reused with its own root/pos/gloss override on the token rather than
// minting a duplicate entry; left out of newWords since the spelling was
// already "taught."
//
// Footnote markers like "(١)" are book furniture: excluded from `ar` and
// never tokenized; each footnote's text is transcribed verbatim into that
// lemma's `book_note` (thirteen footnotes across pp.161-162: مهيب، زئير،
// دوى، ركبة، تجعد، كشر، اختلج، أطبق، وثب، عرين، اختطاف، لبوءة، شبل).
export const CHAPTER = {
  id: "ch47",
  number: 47,
  title: { ar: "الأَسَدُ", en: "The Lion" },
  pages: [161, 162, 163],
  newWords: [
    "أسد", "ملك", "سباع", "هيئة", "مهيب", "زئير", "دوى", "شجاع", "جسم",
    "يكاد", "حجب", "ركبة", "تجعد", "جبهة", "خد", "كشر", "ناب", "أبرق",
    "اختلج", "حاجب", "بدن", "ذنب", "أطبق", "وثب", "فريسة", "صاعقة", "ظفر",
    "ملاعبة", "مزق", "تمزيق", "قيّد", "هدوء", "أفلت", "هيج", "اندفع",
    "عرين", "شجاعة", "مر", "تعرض", "ضرا", "هجم", "حيوان", "خيل", "جمل",
    "بقر", "صاد", "ظبي", "دفع", "جراءة", "اختطاف", "أنثى", "لبوءة", "جثة",
    "أخف", "أشد", "جرو", "شبل", "افتراس", "اهتم", "معدل", "ذراع", "علو",
    "خمس", "مئة",
  ],
  lemmas: {
    "مهيب": { gloss: "awe-inspiring, dreaded", book_note: "مَهِيْبٌ: مَن يخافه الناسُ." },
    "زئير": { gloss: "roar", book_note: "زَئِير: صَوْتُ الأسد." },
    "دوى": { gloss: "to resound, echo", book_note: "دَوَى يَدْوَى دَوَى المكانُ: ضَجَّ بهُتَافَاتٍ." },
    "ركبة": { gloss: "knee", book_note: "رُكْبَة جمع رُكَب: مَوْصِلُ أسفل الفخذ بأعلى الساق." },
    "تجعد": { gloss: "to wrinkle, crease up", book_note: "تَجَعَّدَ يَتَجَعَّدُ تجعُّداً: الجَبْهَةُ أو الشعرُ، أو الوجهُ، أو الخدُّ: اجتَمَعَ وتَقَبَّضَ والتوى." },
    "كشر": { gloss: "to bare the teeth, snarl", book_note: "كَشَّرَ يُكَشِّر تَكْشِيْراً: السبعُ: هَرَّ عند الوثوب." },
    "اختلج": { gloss: "to twitch", book_note: "اخْتَلَجَ يَخْتَلِجُ: تَحَرَّكَ واضْطَربَ." },
    "أطبق": { gloss: "to close, shut", book_note: "أَطْبَقَ يُطْبِقُ: عَيْنَيْهِ أو شَفَتَيْهِ: أَغْلَقَهما." },
    "وثب": { gloss: "to leap, pounce", book_note: "وَثَبَ يَثِبُ وَثْباً ووُثُوباً: قَفَزَ." },
    "عرين": { gloss: "lair, den", book_note: "عَرِيْن جمع عُرُن: مأوى الأسد." },
    "اختطاف": { gloss: "snatching, abduction", book_note: "اختِطَاف الشيء: أي انتزاعه بسرعة." },
    "لبوءة": { gloss: "lioness", book_note: "اللَّبْوْءَة جمع لُبُوء ولَبُؤَات: أُنثى الأسد." },
    "شبل": { gloss: "lion cub", book_note: "الشِّبْلُ جمع الأشبال: وَلَدُ الأسد." },
  },
  paragraphs: [
    // Paragraph 1: the lion's fearsome appearance, and what happens when he attacks.
    {
      en: "The lion is the king of the forest, and the lord of the wild beasts, and his form shows that. He has an awe-inspiring appearance, and a roar that makes the forests resound, and the brave man's heart races at it. Mighty in strength, great in body, a great mane surrounds his head, almost covering his knees. When he grows angry, his forehead and cheeks crease up, he bares his fangs, and his eyes flash, and his eyebrows twitch, and the hair of his body stands on end, and he strikes his sides with his tail, and closes his eyes, and leans toward the ground, and pounces on his prey like a thunderbolt -- until, once he catches it, he starts toying with it, then tears it apart utterly with his fangs.",
      sentences: [
        {
          id: "qr2-47-001",
          ar: "الأَسَدُ مَلِكُ الْغَابَةِ ،",
          en: "The lion is the king of the forest,",
          tokens: [
            { surface: "الأَسَدُ", lemma: "أسد", pos: "noun", features: "def.nom", root: "أ س د", gloss: "the lion" },
            { surface: "مَلِكُ", lemma: "ملك", pos: "noun", features: "nom.constr", root: "م ل ك", gloss: "the king of" },
            { surface: "الْغَابَةِ", lemma: "غابة", pos: "noun", features: "def.gen", root: "غ ي ب", gloss: "the forest" },
          ],
        },
        {
          id: "qr2-47-002",
          ar: "وَسَيِّدُ السِّبَاعِ ،",
          en: "and the lord of the wild beasts,",
          tokens: [
            { surface: "وَسَيِّدُ", lemma: "سيد", pos: "noun", features: "conj+nom.constr", root: "س و د", gloss: "and the lord of" },
            { surface: "السِّبَاعِ", lemma: "سباع", pos: "noun", features: "pl.def.gen", root: "س ب ع", gloss: "the wild beasts" },
          ],
        },
        {
          id: "qr2-47-003",
          ar: "وَهَيْئَتُهُ تَدُلُّ عَلَىٰ ذٰلِكَ ،",
          en: "and his form shows that,",
          tokens: [
            { surface: "وَهَيْئَتُهُ", lemma: "هيئة", pos: "noun", features: "conj+nom.constr+3ms", root: "ه ي أ", gloss: "and his form" },
            { surface: "تَدُلُّ", lemma: "دل", pos: "verb", features: "impf.3fs", root: "د ل ل", gloss: "shows" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "upon" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", gloss: "that" },
          ],
        },
        {
          id: "qr2-47-004",
          ar: "فَلَهُ مَنْظَرٌ مَهِيْبٌ ،",
          en: "He has an awe-inspiring appearance,",
          tokens: [
            { surface: "فَلَهُ", lemma: "ل", pos: "prep", features: "conj+prep+3ms", gloss: "and he has" },
            { surface: "مَنْظَرٌ", lemma: "منظر", pos: "noun", features: "indef.nom", root: "ن ظ ر", gloss: "an appearance" },
            { surface: "مَهِيْبٌ", lemma: "مهيب", pos: "adj", features: "indef.nom", root: "ه ي ب", gloss: "awe-inspiring" },
          ],
        },
        {
          id: "qr2-47-005",
          ar: "وَزَئِيْرٌ تَدْوِيْ لَهُ الْغَابَاتُ ،",
          en: "and a roar that makes the forests resound,",
          tokens: [
            { surface: "وَزَئِيْرٌ", lemma: "زئير", pos: "noun", features: "conj+indef.nom", root: "ز أ ر", gloss: "and a roar" },
            { surface: "تَدْوِيْ", lemma: "دوى", pos: "verb", features: "impf.3fs", root: "د و ي", gloss: "resound" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", gloss: "at it" },
            { surface: "الْغَابَاتُ", lemma: "غابة", pos: "noun", features: "pl.def.nom", root: "غ ي ب", gloss: "the forests" },
          ],
        },
        {
          id: "qr2-47-006",
          ar: "وَيَطِيْرُ لَهُ قَلْبُ الشُّجَاعِ ؛",
          en: "and the brave man's heart races at it;",
          tokens: [
            { surface: "وَيَطِيْرُ", lemma: "طار", pos: "verb", features: "conj+impf.3ms", root: "ط ي ر", gloss: "and races, flies" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", gloss: "at it" },
            { surface: "قَلْبُ", lemma: "قلب", pos: "noun", features: "nom.constr", root: "ق ل ب", gloss: "the heart of" },
            { surface: "الشُّجَاعِ", lemma: "شجاع", pos: "adj", features: "def.gen", root: "ش ج ع", gloss: "the brave (man)" },
          ],
        },
        {
          id: "qr2-47-007",
          ar: "قَوِيُّ الْبَأْسِ ،",
          en: "Mighty in strength,",
          tokens: [
            { surface: "قَوِيُّ", lemma: "قوي", pos: "adj", features: "nom.constr", root: "ق و ي", gloss: "strong of" },
            { surface: "الْبَأْسِ", lemma: "بأس", pos: "noun", features: "def.gen", root: "ب أ س", gloss: "might, valor" },
          ],
        },
        {
          id: "qr2-47-008",
          ar: "كَبِيْرُ الْجِسْمِ ،",
          en: "great in body,",
          tokens: [
            { surface: "كَبِيْرُ", lemma: "كبير", pos: "adj", features: "nom.constr", root: "ك ب ر", gloss: "great of" },
            { surface: "الْجِسْمِ", lemma: "جسم", pos: "noun", features: "def.gen", root: "ج س م", gloss: "the body" },
          ],
        },
        {
          id: "qr2-47-009",
          ar: "يُحِيْطُ بِرَأْسِهِ شَعْرٌ كَبِيْرٌ يَكَادُ يَحْجُبُ رُكْبَتَيْهِ ،",
          en: "a great mane surrounds his head, almost covering his knees,",
          tokens: [
            { surface: "يُحِيْطُ", lemma: "حاط", pos: "verb", features: "impf.3ms", root: "ح و ط", gloss: "surrounds" },
            { surface: "بِرَأْسِهِ", lemma: "رأس", pos: "noun", features: "prep+gen.constr+3ms", root: "ر أ س", gloss: "his head" },
            { surface: "شَعْرٌ", lemma: "شعر", pos: "noun", features: "indef.nom", root: "ش ع ر", gloss: "mane, hair" },
            { surface: "كَبِيْرٌ", lemma: "كبير", pos: "adj", features: "indef.nom", root: "ك ب ر", gloss: "great" },
            { surface: "يَكَادُ", lemma: "يكاد", pos: "verb", features: "impf.3ms", root: "ك و د", gloss: "almost, nearly" },
            { surface: "يَحْجُبُ", lemma: "حجب", pos: "verb", features: "impf.3ms", root: "ح ج ب", gloss: "covers, conceals" },
            { surface: "رُكْبَتَيْهِ", lemma: "ركبة", pos: "noun", features: "du.acc+3ms", root: "ر ك ب", gloss: "his two knees" },
          ],
        },
        {
          id: "qr2-47-010",
          ar: "إِذَا غَضِبَ تَجَعَّدَتْ جَبْهَتُهُ وَخَدَّاهُ ،",
          en: "When he grows angry, his forehead and cheeks crease up,",
          tokens: [
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "when" },
            { surface: "غَضِبَ", lemma: "غضب", pos: "verb", features: "perf.3ms", root: "غ ض ب", gloss: "he grows angry" },
            { surface: "تَجَعَّدَتْ", lemma: "تجعد", pos: "verb", features: "perf.3fs", root: "ج ع د", gloss: "crease up" },
            { surface: "جَبْهَتُهُ", lemma: "جبهة", pos: "noun", features: "nom.constr+3ms", root: "ج ب ه", gloss: "his forehead" },
            { surface: "وَخَدَّاهُ", lemma: "خد", pos: "noun", features: "conj+du.nom+3ms", root: "خ د د", gloss: "and his two cheeks" },
          ],
        },
        {
          id: "qr2-47-011",
          ar: "وَكَشَّرَ عَنْ أَنْيَابِهِ وَأَبْرَقَتْ عَيْنَاهُ ،",
          en: "he bares his fangs, and his eyes flash,",
          tokens: [
            { surface: "وَكَشَّرَ", lemma: "كشر", pos: "verb", features: "conj+perf.3ms", root: "ك ش ر", gloss: "and he bares his teeth" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", gloss: "[uncovering] from" },
            { surface: "أَنْيَابِهِ", lemma: "ناب", pos: "noun", features: "pl.gen.constr+3ms", root: "ن ي ب", gloss: "his fangs" },
            { surface: "وَأَبْرَقَتْ", lemma: "أبرق", pos: "verb", features: "conj+perf.3fs", root: "ب ر ق", gloss: "and flash" },
            { surface: "عَيْنَاهُ", lemma: "عين", pos: "noun", features: "du.nom+3ms", root: "ع ي ن", gloss: "his two eyes" },
          ],
        },
        {
          id: "qr2-47-012",
          ar: "وَاخْتَلَجَ حَاجِبَاهُ ،",
          en: "and his eyebrows twitch,",
          tokens: [
            { surface: "وَاخْتَلَجَ", lemma: "اختلج", pos: "verb", features: "conj+perf.3ms", root: "خ ل ج", gloss: "and twitch" },
            { surface: "حَاجِبَاهُ", lemma: "حاجب", pos: "noun", features: "du.nom+3ms", root: "ح ج ب", gloss: "his two eyebrows" },
          ],
        },
        {
          id: "qr2-47-013",
          ar: "وَوَقَفَ شَعْرُ بَدَنِهِ ،",
          en: "and the hair of his body stands on end,",
          tokens: [
            { surface: "وَوَقَفَ", lemma: "وقف", pos: "verb", features: "conj+perf.3ms", root: "و ق ف", gloss: "and stands" },
            { surface: "شَعْرُ", lemma: "شعر", pos: "noun", features: "nom.constr", root: "ش ع ر", gloss: "the hair of" },
            { surface: "بَدَنِهِ", lemma: "بدن", pos: "noun", features: "gen.constr+3ms", root: "ب د ن", gloss: "his body" },
          ],
        },
        {
          id: "qr2-47-014",
          ar: "وَضَرَبَ بِذَنَبِهِ جَنْبَيْهِ ،",
          en: "and he strikes his sides with his tail,",
          tokens: [
            { surface: "وَضَرَبَ", lemma: "ضرب", pos: "verb", features: "conj+perf.3ms", root: "ض ر ب", gloss: "and he strikes" },
            { surface: "بِذَنَبِهِ", lemma: "ذنب", pos: "noun", features: "prep+gen.constr+3ms", root: "ذ ن ب", gloss: "with his tail" },
            { surface: "جَنْبَيْهِ", lemma: "جنب", pos: "noun", features: "du.acc+3ms", root: "ج ن ب", gloss: "his two sides" },
          ],
        },
        {
          id: "qr2-47-015",
          ar: "وَأَطْبَقَ عَيْنَيْهِ ،",
          en: "and closes his eyes,",
          tokens: [
            { surface: "وَأَطْبَقَ", lemma: "أطبق", pos: "verb", features: "conj+perf.3ms", root: "ط ب ق", gloss: "and closes" },
            { surface: "عَيْنَيْهِ", lemma: "عين", pos: "noun", features: "du.acc+3ms", root: "ع ي ن", gloss: "his two eyes" },
          ],
        },
        {
          id: "qr2-47-016",
          ar: "وَمَالَ إِلَىٰ الأَرْضِ ،",
          en: "and leans toward the ground,",
          tokens: [
            { surface: "وَمَالَ", lemma: "مال", pos: "verb", features: "conj+perf.3ms", root: "م ي ل", gloss: "and he leans" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "toward" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the ground" },
          ],
        },
        {
          id: "qr2-47-017",
          ar: "وَوَثَبَ عَلَىٰ فَرِيْسَتِهِ كَالصَّاعِقَةِ ،",
          en: "and pounces on his prey like a thunderbolt,",
          tokens: [
            { surface: "وَوَثَبَ", lemma: "وثب", pos: "verb", features: "conj+perf.3ms", root: "و ث ب", gloss: "and he pounces" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "on" },
            { surface: "فَرِيْسَتِهِ", lemma: "فريسة", pos: "noun", features: "gen.constr+3ms", root: "ف ر س", gloss: "his prey" },
            { surface: "كَالصَّاعِقَةِ", lemma: "صاعقة", pos: "noun", features: "prep+def.gen", root: "ص ع ق", gloss: "like a thunderbolt" },
          ],
        },
        {
          id: "qr2-47-018",
          ar: "حَتَّىٰ إِذَا ظَفِرَ بِهَا أَخَذَ فِيْ مُلاَعَبَتِهَا ،",
          en: "until, once he catches it, he starts toying with it,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", gloss: "until" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "when, once" },
            { surface: "ظَفِرَ", lemma: "ظفر", pos: "verb", features: "perf.3ms", root: "ظ ف ر", gloss: "he catches, prevails" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", gloss: "over it" },
            { surface: "أَخَذَ", lemma: "أخذ", pos: "verb", features: "perf.3ms", root: "أ خ ذ", gloss: "he starts" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in, at" },
            { surface: "مُلاَعَبَتِهَا", lemma: "ملاعبة", pos: "noun", features: "gen.constr+3fs", root: "ل ع ب", gloss: "toying with it" },
          ],
        },
        {
          id: "qr2-47-019",
          ar: "ثُمَّ مَزَّقَهَا بِأَنْيَابِهِ تَمْزِيْقاً.",
          en: "then tears it apart utterly with his fangs.",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "مَزَّقَهَا", lemma: "مزق", pos: "verb", features: "perf.3ms+3fs", root: "م ز ق", gloss: "he tears it apart" },
            { surface: "بِأَنْيَابِهِ", lemma: "ناب", pos: "noun", features: "prep+pl.gen.constr+3ms", root: "ن ي ب", gloss: "with his fangs" },
            { surface: "تَمْزِيْقاً", lemma: "تمزيق", pos: "noun", features: "indef.acc", root: "م ز ق", gloss: "utterly (lit. a tearing)" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا يَفْعَلُ الأَسَدُ إِذَا غَضِبَ؟",
          options: ["تَتَجَعَّدُ جَبْهَتُهُ وَيُكَشِّرُ عَنْ أَنْيَابِهِ", "يَنَامُ", "يَهْرُبُ"],
          answer: 0,
          qEn: "What does the lion do when he grows angry?",
          optionsEn: ["His forehead creases and he bares his fangs", "He sleeps", "He flees"],
        },
        {
          q: "كَيْفَ يَنْقَضُّ الأَسَدُ عَلَىٰ فَرِيْسَتِهِ؟",
          options: ["كَالصَّاعِقَةِ", "بِبُطْءٍ شَدِيْدٍ", "بَعْدَ أَنْ يُنَادِيَهَا"],
          answer: 0,
          qEn: "How does the lion pounce on his prey?",
          optionsEn: ["Like a thunderbolt", "Very slowly", "After calling out to it"],
        },
      ],
    },
    // Paragraph 2: calm when chained, bolder at night, and when he confronts humans.
    {
      en: "When the lion is chained, his form shows calm, but if he's set loose and provoked, he surges out of his lair. He is braver at night than during the day. He passes by a human and does not confront him unless he is predatory, or a person provokes him.",
      sentences: [
        {
          id: "qr2-47-020",
          ar: "وَإِذَا كَانَ الأَسَدُ مُقَيَّداً دَلَّتْ هَيْئَتُهُ عَلَىٰ الْهُدُوْءِ ،",
          en: "When the lion is chained, his form shows calm,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", gloss: "and when" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "is" },
            { surface: "الأَسَدُ", lemma: "أسد", pos: "noun", features: "def.nom", root: "أ س د", gloss: "the lion" },
            { surface: "مُقَيَّداً", lemma: "قيّد", pos: "adj", features: "indef.acc", root: "ق ي د", gloss: "chained" },
            { surface: "دَلَّتْ", lemma: "دل", pos: "verb", features: "perf.3fs", root: "د ل ل", gloss: "shows" },
            { surface: "هَيْئَتُهُ", lemma: "هيئة", pos: "noun", features: "nom.constr+3ms", root: "ه ي أ", gloss: "his form" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "upon" },
            { surface: "الْهُدُوْءِ", lemma: "هدوء", pos: "noun", features: "def.gen", root: "ه د أ", gloss: "calm" },
          ],
        },
        {
          id: "qr2-47-021",
          ar: "فَإِذَا أُفْلِتَ وَهُيِّجَ انْدَفَعَ مِنْ عَرِيْنِهِ ،",
          en: "but if he's set loose and provoked, he surges out of his lair,",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", gloss: "but if" },
            { surface: "أُفْلِتَ", lemma: "أفلت", pos: "verb", features: "pass.perf.3ms", root: "ف ل ت", gloss: "he is set loose" },
            { surface: "وَهُيِّجَ", lemma: "هيج", pos: "verb", features: "conj+pass.perf.3ms", root: "ه ي ج", gloss: "and provoked" },
            { surface: "انْدَفَعَ", lemma: "اندفع", pos: "verb", features: "perf.3ms", root: "د ف ع", gloss: "he surges" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "out of" },
            { surface: "عَرِيْنِهِ", lemma: "عرين", pos: "noun", features: "gen.constr+3ms", root: "ع ر ن", gloss: "his lair" },
          ],
        },
        {
          id: "qr2-47-022",
          ar: "وَهُوَ أَكْثَرُ شَجَاعَةً فِي اللَّيْلِ مِنْهُ فِي النَّهَارِ ،",
          en: "and he is braver at night than during the day,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "dem", features: "conj+3ms", gloss: "and he" },
            { surface: "أَكْثَرُ", lemma: "أكثر", pos: "adj", features: "nom", root: "ك ث ر", gloss: "more" },
            { surface: "شَجَاعَةً", lemma: "شجاعة", pos: "noun", features: "indef.acc", root: "ش ج ع", gloss: "in bravery" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "اللَّيْلِ", lemma: "ليل", pos: "noun", features: "def.gen", root: "ل ي ل", gloss: "the night" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "prep+3ms", gloss: "than him" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "النَّهَارِ", lemma: "نهار", pos: "noun", features: "def.gen", root: "ن ه ر", gloss: "the day" },
          ],
        },
        {
          id: "qr2-47-023",
          ar: "وَيَمُرُّ بِالإِنْسَانِ ،",
          en: "He passes by a human,",
          tokens: [
            { surface: "وَيَمُرُّ", lemma: "مر", pos: "verb", features: "conj+impf.3ms", root: "م ر ر", gloss: "and he passes" },
            { surface: "بِالإِنْسَانِ", lemma: "إنسان", pos: "noun", features: "prep+def.gen", root: "أ ن س", gloss: "by a human" },
          ],
        },
        {
          id: "qr2-47-024",
          ar: "وَلاَ يَتَعَرَّضُ لَهُ إِلاَّ إِذَا كَانَ ضَارِياً أَوْ هَاجَهُ إِنْسَانٌ.",
          en: "and does not confront him unless he is predatory, or a person provokes him.",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "يَتَعَرَّضُ", lemma: "تعرض", pos: "verb", features: "impf.3ms", root: "ع ر ض", gloss: "does he confront" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", gloss: "him" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", gloss: "unless" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "when" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "he is" },
            { surface: "ضَارِياً", lemma: "ضرا", pos: "adj", features: "indef.acc", root: "ض ر و", gloss: "predatory, ferocious" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", gloss: "or" },
            { surface: "هَاجَهُ", lemma: "هيج", pos: "verb", features: "perf.3ms+3ms", root: "ه ي ج", gloss: "provokes him" },
            { surface: "إِنْسَانٌ", lemma: "إنسان", pos: "noun", features: "indef.nom", root: "أ ن س", gloss: "a person" },
          ],
        },
      ],
      checks: [
        {
          q: "مَتَىٰ يَكُوْنُ الأَسَدُ أَكْثَرَ شَجَاعَةً؟",
          options: ["فِي اللَّيْلِ", "فِي النَّهَارِ", "لاَ فَرْقَ"],
          answer: 0,
          qEn: "When is the lion braver?",
          optionsEn: ["At night", "During the day", "No difference"],
        },
        {
          q: "مَتَىٰ يَتَعَرَّضُ الأَسَدُ لِلإِنْسَانِ؟",
          options: ["إِذَا كَانَ ضَارِياً أَوْ هَاجَهُ إِنْسَانٌ", "دَائِماً", "أَبَداً"],
          answer: 0,
          qEn: "When does the lion confront a human?",
          optionsEn: ["If he is predatory or a person provokes him", "Always", "Never"],
        },
      ],
    },
    // Paragraph 3: what the lion hunts.
    {
      en: "He attacks animals like horses, camels, cattle, and others. He hunts the gazelle and eats it eagerly, and boldness drives him to snatch a human from among his people.",
      sentences: [
        {
          id: "qr2-47-025",
          ar: "وَيَهْجُمُ عَلَىٰ الْحَيَوَانَاتِ كَالْخَيْلِ وَالْجِمَالِ وَالْبَقَرِ وَغَيْرِهَا ،",
          en: "He attacks animals like horses, camels, cattle, and others,",
          tokens: [
            { surface: "وَيَهْجُمُ", lemma: "هجم", pos: "verb", features: "conj+impf.3ms", root: "ه ج م", gloss: "and he attacks" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "upon" },
            { surface: "الْحَيَوَانَاتِ", lemma: "حيوان", pos: "noun", features: "pl.def.gen", root: "ح ي و ن", gloss: "the animals" },
            { surface: "كَالْخَيْلِ", lemma: "خيل", pos: "noun", features: "prep+def.gen", root: "خ ي ل", gloss: "like the horses" },
            { surface: "وَالْجِمَالِ", lemma: "جمل", pos: "noun", features: "conj+pl.def.gen", root: "ج م ل", gloss: "and the camels" },
            { surface: "وَالْبَقَرِ", lemma: "بقر", pos: "noun", features: "conj+def.gen", root: "ب ق ر", gloss: "and the cattle" },
            { surface: "وَغَيْرِهَا", lemma: "غير", pos: "noun", features: "conj+gen.constr+3fs", root: "غ ي ر", gloss: "and others" },
          ],
        },
        {
          id: "qr2-47-026",
          ar: "وَيَصِيْدُ الظَّبْيَ وَيَأْكُلُهُ بِرَغْبَةٍ ،",
          en: "he hunts the gazelle and eats it eagerly,",
          tokens: [
            { surface: "وَيَصِيْدُ", lemma: "صاد", pos: "verb", features: "conj+impf.3ms", root: "ص ي د", gloss: "and he hunts" },
            { surface: "الظَّبْيَ", lemma: "ظبي", pos: "noun", features: "def.acc", root: "ظ ب ي", gloss: "the gazelle" },
            { surface: "وَيَأْكُلُهُ", lemma: "أكل", pos: "verb", features: "conj+impf.3ms+3ms", root: "أ ك ل", gloss: "and eats it" },
            { surface: "بِرَغْبَةٍ", lemma: "رغبة", pos: "noun", features: "prep+indef.gen", root: "ر غ ب", gloss: "eagerly" },
          ],
        },
        {
          id: "qr2-47-027",
          ar: "وَتَدْفَعُهُ الْجَرَاءَةُ إِلَىٰ اخْتِطَافِ الإِنْسَانِ مِنْ بَيْنِ قَوْمِهِ.",
          en: "and boldness drives him to snatch a human from among his people.",
          tokens: [
            { surface: "وَتَدْفَعُهُ", lemma: "دفع", pos: "verb", features: "conj+impf.3fs+3ms", root: "د ف ع", gloss: "and drives him" },
            { surface: "الْجَرَاءَةُ", lemma: "جراءة", pos: "noun", features: "def.nom", root: "ج ر أ", gloss: "boldness" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "اخْتِطَافِ", lemma: "اختطاف", pos: "noun", features: "gen.constr", root: "خ ط ف", gloss: "snatching" },
            { surface: "الإِنْسَانِ", lemma: "إنسان", pos: "noun", features: "def.gen", root: "أ ن س", gloss: "a human" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "بَيْنِ", lemma: "بين", pos: "noun", features: "gen.constr", root: "ب ي ن", gloss: "among" },
            { surface: "قَوْمِهِ", lemma: "قوم", pos: "noun", features: "gen.constr+3ms", root: "ق و م", gloss: "his people" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا يَصِيْدُ الأَسَدُ بِرَغْبَةٍ؟",
          options: ["الظَّبْيَ", "الأَسَدَ الآخَرَ", "الطُّيُوْرَ"],
          answer: 0,
          qEn: "What does the lion eagerly hunt?",
          optionsEn: ["The gazelle", "Another lion", "Birds"],
        },
        {
          q: "مَاذَا تَدْفَعُ الأَسَدَ إِلَىٰ اخْتِطَافِ الإِنْسَانِ؟",
          options: ["الْجَرَاءَةُ", "الْجُوْعُ فَقَطْ", "اللَّعِبُ"],
          answer: 0,
          qEn: "What drives the lion to snatch a human?",
          optionsEn: ["Boldness", "Hunger alone", "Play"],
        },
      ],
    },
    // Paragraph 4: the lioness and her cub.
    {
      en: "The female lion is known as the lioness; she is smaller in build, lighter in movement, and quicker to anger than him. Her cub is known as the 'shibl.' He starts hunting for prey and comes to rely on his strength once he reaches the second year of his age.",
      sentences: [
        {
          id: "qr2-47-028",
          ar: "وَأُنْثَىٰ الأَسَدِ تُعْرَفُ بِاللَّبْوَءَةِ ،",
          en: "The female lion is known as the lioness,",
          tokens: [
            { surface: "وَأُنْثَىٰ", lemma: "أنثى", pos: "noun", features: "conj+nom.constr", root: "أ ن ث", gloss: "and the female of" },
            { surface: "الأَسَدِ", lemma: "أسد", pos: "noun", features: "def.gen", root: "أ س د", gloss: "the lion" },
            { surface: "تُعْرَفُ", lemma: "عرف", pos: "verb", features: "pass.impf.3fs", root: "ع ر ف", gloss: "is known" },
            { surface: "بِاللَّبْوَءَةِ", lemma: "لبوءة", pos: "noun", features: "prep+def.gen", root: "ل ب أ", gloss: "as the lioness" },
          ],
        },
        {
          id: "qr2-47-029",
          ar: "وَهِيَ أَصْغَرُ جُثَّةً ،",
          en: "she is smaller in build,",
          tokens: [
            { surface: "وَهِيَ", lemma: "هي", pos: "dem", features: "conj+3fs", gloss: "and she" },
            { surface: "أَصْغَرُ", lemma: "أصغر", pos: "adj", features: "nom", root: "ص غ ر", gloss: "smaller" },
            { surface: "جُثَّةً", lemma: "جثة", pos: "noun", features: "indef.acc", root: "ج ث ث", gloss: "in build" },
          ],
        },
        {
          id: "qr2-47-030",
          ar: "وَأَخَفُّ حَرَكَةً ،",
          en: "lighter in movement,",
          tokens: [
            { surface: "وَأَخَفُّ", lemma: "أخف", pos: "adj", features: "conj+nom", root: "خ ف ف", gloss: "and lighter" },
            { surface: "حَرَكَةً", lemma: "حركة", pos: "noun", features: "indef.acc", root: "ح ر ك", gloss: "in movement" },
          ],
        },
        {
          id: "qr2-47-031",
          ar: "وَأَشَدُّ غَضَباً مِنْهُ ،",
          en: "and quicker to anger than him,",
          tokens: [
            { surface: "وَأَشَدُّ", lemma: "أشد", pos: "adj", features: "conj+nom", root: "ش د د", gloss: "and more intense" },
            { surface: "غَضَباً", lemma: "غضب", pos: "noun", features: "indef.acc", root: "غ ض ب", gloss: "in anger" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "prep+3ms", gloss: "than him" },
          ],
        },
        {
          id: "qr2-47-032",
          ar: "وَجَرْوُؤُهَا يُعْرَفُ بِالشِّبْلِ ،",
          en: "Her cub is known as the 'shibl,'",
          tokens: [
            { surface: "وَجَرْوُؤُهَا", lemma: "جرو", pos: "noun", features: "conj+nom.constr+3fs", root: "ج ر و", gloss: "and her cub" },
            { surface: "يُعْرَفُ", lemma: "عرف", pos: "verb", features: "pass.impf.3ms", root: "ع ر ف", gloss: "is known" },
            { surface: "بِالشِّبْلِ", lemma: "شبل", pos: "noun", features: "prep+def.gen", root: "ش ب ل", gloss: "as the lion cub" },
          ],
        },
        {
          id: "qr2-47-033",
          ar: "وَيَبْدَأُ فِي الاِفْتِرَاسِ ،",
          en: "He starts hunting for prey,",
          tokens: [
            { surface: "وَيَبْدَأُ", lemma: "بدأ", pos: "verb", features: "conj+impf.3ms", root: "ب د أ", gloss: "and he starts" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "at" },
            { surface: "الاِفْتِرَاسِ", lemma: "افتراس", pos: "noun", features: "def.gen", root: "ف ر س", gloss: "predation, hunting for prey" },
          ],
        },
        {
          id: "qr2-47-034",
          ar: "وَيَهْتَمُّ بِقُوَّتِهِ إِذَا بَلَغَ الثَّانِيَةَ مِنْ عُمُرِهِ.",
          en: "and comes to rely on his strength once he reaches the second year of his age.",
          tokens: [
            { surface: "وَيَهْتَمُّ", lemma: "اهتم", pos: "verb", features: "conj+impf.3ms", root: "ه م م", gloss: "and he relies" },
            { surface: "بِقُوَّتِهِ", lemma: "قوة", pos: "noun", features: "prep+gen.constr+3ms", root: "ق و ي", gloss: "on his strength" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "when" },
            { surface: "بَلَغَ", lemma: "بلغ", pos: "verb", features: "perf.3ms", root: "ب ل غ", gloss: "he reaches" },
            { surface: "الثَّانِيَةَ", lemma: "ثاني", pos: "adj", features: "def.acc.f", root: "ث ن ي", gloss: "the second (year)" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "عُمُرِهِ", lemma: "عمر", pos: "noun", features: "gen.constr+3ms", root: "ع م ر", gloss: "his age" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا تُسَمَّىٰ أُنْثَىٰ الأَسَدِ؟",
          options: ["اللَّبْوَءَةَ", "الشِّبْلَ", "الظَّبْيَ"],
          answer: 0,
          qEn: "What is the female lion called?",
          optionsEn: ["The lioness", "The cub", "The gazelle"],
        },
        {
          q: "مَتَىٰ يَبْدَأُ الشِّبْلُ فِي الاِفْتِرَاسِ؟",
          options: ["إِذَا بَلَغَ الثَّانِيَةَ مِنْ عُمُرِهِ", "مُنْذُ وِلاَدَتِهِ", "بَعْدَ عَشْرِ سَنَوَاتٍ"],
          answer: 0,
          qEn: "When does the cub start hunting for prey?",
          optionsEn: ["When he reaches the second year of his age", "From birth", "After ten years"],
        },
      ],
    },
    // Paragraph 5: measurements and lifespan.
    {
      en: "The average length of the lion is three cubits, and his height is a cubit and a quarter. The average of his lifespan is twenty-five years, and in a cage he may reach a hundred years or more.",
      sentences: [
        {
          id: "qr2-47-035",
          ar: "وَمُعَدَّلُ طُوْلِ الأَسَدِ ثَلاَثُ أَذْرُعٍ ،",
          en: "The average length of the lion is three cubits,",
          tokens: [
            { surface: "وَمُعَدَّلُ", lemma: "معدل", pos: "noun", features: "conj+nom.constr", root: "ع د ل", gloss: "and the average of" },
            { surface: "طُوْلِ", lemma: "طول", pos: "noun", features: "gen.constr", root: "ط و ل", gloss: "the length of" },
            { surface: "الأَسَدِ", lemma: "أسد", pos: "noun", features: "def.gen", root: "أ س د", gloss: "the lion" },
            { surface: "ثَلاَثُ", lemma: "ثلاثة", pos: "num", features: "nom.constr", root: "ث ل ث", gloss: "three" },
            { surface: "أَذْرُعٍ", lemma: "ذراع", pos: "noun", features: "pl.indef.gen", root: "ذ ر ع", gloss: "cubits" },
          ],
        },
        {
          id: "qr2-47-036",
          ar: "وَعُلُوُّهُ ذِرَاعٌ وَرُبُعٌ ،",
          en: "and his height is a cubit and a quarter,",
          tokens: [
            { surface: "وَعُلُوُّهُ", lemma: "علو", pos: "noun", features: "conj+nom.constr+3ms", root: "ع ل و", gloss: "and his height" },
            { surface: "ذِرَاعٌ", lemma: "ذراع", pos: "noun", features: "indef.nom", root: "ذ ر ع", gloss: "a cubit" },
            { surface: "وَرُبُعٌ", lemma: "ربع", pos: "noun", features: "conj+indef.nom", root: "ر ب ع", gloss: "and a quarter" },
          ],
        },
        {
          id: "qr2-47-037",
          ar: "وَمُعَدَّلُ مَا يَعِيْشُ خَمْسٌ وَعِشْرُوْنَ سَنَةً ،",
          en: "The average of his lifespan is twenty-five years,",
          tokens: [
            { surface: "وَمُعَدَّلُ", lemma: "معدل", pos: "noun", features: "conj+nom.constr", root: "ع د ل", gloss: "and the average of" },
            { surface: "مَا", lemma: "ما", pos: "rel", gloss: "what" },
            { surface: "يَعِيْشُ", lemma: "عاش", pos: "verb", features: "impf.3ms", root: "ع ي ش", gloss: "he lives" },
            { surface: "خَمْسٌ", lemma: "خمس", pos: "num", features: "indef.nom", root: "خ م س", gloss: "five" },
            { surface: "وَعِشْرُوْنَ", lemma: "عشرون", pos: "num", features: "conj+indef.nom", root: "ع ش ر", gloss: "and twenty" },
            { surface: "سَنَةً", lemma: "سنة", pos: "noun", features: "indef.acc", root: "س ن و", gloss: "years" },
          ],
        },
        {
          id: "qr2-47-038",
          ar: "وَقَدْ يَبْلُغُ فِيْ قَفَصِهِ مِئَةَ سَنَةٍ أَوْ أَكْثَرَ.",
          en: "and in a cage he may reach a hundred years or more.",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", gloss: "and indeed" },
            { surface: "يَبْلُغُ", lemma: "بلغ", pos: "verb", features: "impf.3ms", root: "ب ل غ", gloss: "he may reach" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "قَفَصِهِ", lemma: "قفص", pos: "noun", features: "gen.constr+3ms", root: "ق ف ص", gloss: "his cage" },
            { surface: "مِئَةَ", lemma: "مئة", pos: "num", features: "acc.constr", root: "م أ ي", gloss: "a hundred" },
            { surface: "سَنَةٍ", lemma: "سنة", pos: "noun", features: "indef.gen", root: "س ن و", gloss: "years" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", gloss: "or" },
            { surface: "أَكْثَرَ", lemma: "أكثر", pos: "adj", features: "acc", root: "ك ث ر", gloss: "more" },
          ],
        },
      ],
      checks: [
        {
          q: "كَمْ سَنَةً يَعِيْشُ الأَسَدُ فِي الْمُتَوَسِّطِ؟",
          options: ["خَمْساً وَعِشْرِيْنَ سَنَةً", "مِئَةَ سَنَةٍ دَائِماً", "سَنَةً وَاحِدَةً"],
          answer: 0,
          qEn: "On average, how many years does a lion live?",
          optionsEn: ["Twenty-five years", "Always a hundred years", "One year"],
        },
        {
          q: "كَمْ يَبْلُغُ طُوْلُ الأَسَدِ فِي الْمُتَوَسِّطِ؟",
          options: ["ثَلاَثَ أَذْرُعٍ", "ذِرَاعاً وَاحِداً", "عَشَرَ أَذْرُعٍ"],
          answer: 0,
          qEn: "What is the average length of a lion?",
          optionsEn: ["Three cubits", "One cubit", "Ten cubits"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "وَ",
        post: "عَلَىٰ فَرِيْسَتِهِ كَالصَّاعِقَةِ ،",
        en: "and he pounces on his prey like a thunderbolt,",
        options: ["وَثَبَ", "وَثَبْتُ", "تَثِبُ", "نَثِبُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he pounced.",
          "1st person singular -- I pounced.",
          "2nd masculine or 3rd feminine present -- you/she pounce.",
          "1st person plural present -- we pounce.",
        ],
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "عَلَىٰ الْحَيَوَانَاتِ كَالْخَيْلِ وَالْجِمَالِ ،",
        en: "and he attacks animals like horses and camels,",
        options: ["يَهْجُمُ", "هَجَمْتُ", "تَهْجُمُ", "يَهْجُمُوْنَ"],
        answer: 0,
        rationales: [
          "3rd masculine singular present -- he attacks.",
          "1st person singular perfect -- I attacked.",
          "2nd masculine or 3rd feminine present -- you/she attack.",
          "3rd masculine plural -- they attack.",
        ],
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "الظَّبْيَ وَيَأْكُلُهُ بِرَغْبَةٍ ،",
        en: "and he hunts the gazelle and eats it eagerly,",
        options: ["يَصِيْدُ", "صِدْتُ", "تَصِيْدُ", "نَصِيْدُ"],
        answer: 0,
        rationales: [
          "3rd masculine singular present -- he hunts.",
          "1st person singular perfect -- I hunted.",
          "2nd masculine or 3rd feminine present -- you/she hunt.",
          "1st person plural present -- we hunt.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "يَحْجُبُ رُكْبَتَيْهِ",
        pre: "",
        post: "رُكْبَتَيْهِ",
        targetPerson: "أَنَا",
        targetEn: "I",
        options: ["أَحْجُبُ", "تَحْجُبُ", "نَحْجُبُ", "يَحْجُبُوْنَ"],
        answer: 0,
        rationales: [
          "1st person singular -- I cover, conceal.",
          "2nd masculine or 3rd feminine -- you/she cover.",
          "1st person plural -- we cover.",
          "3rd masculine plural -- they cover.",
        ],
      },
      {
        type: "shift",
        base: "يَعِيْشُ خَمْساً وَعِشْرِيْنَ سَنَةً",
        pre: "",
        post: "خَمْساً وَعِشْرِيْنَ سَنَةً",
        targetPerson: "هِيَ",
        targetEn: "she",
        options: ["تَعِيْشُ", "يَعِيْشُوْنَ", "نَعِيْشُ", "أَعِيْشُ"],
        answer: 0,
        rationales: [
          "3rd feminine singular -- she lives.",
          "3rd masculine plural -- they live.",
          "1st person plural -- we live.",
          "1st person singular -- I live.",
        ],
      },
    ],
  },
};

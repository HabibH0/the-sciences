// القراءة الراشدة, volume two -- chapter 53, "الْجَمَل (١)" / "The Camel (1)",
// printed pages 179-180. A descriptive/scientific essay (like ch47's "الأسد"
// and ch42-43's "العين") on the camel's anatomy: its size and long neck,
// small head, padded feet, fatty hump, gentle dark eyes, chest callus
// ("kalkal"), and insensitive leg-patches (paragraph 1); its multi-chambered
// stomach and cud-chewing digestion, with the hump's fat as a reserve food
// supply (paragraph 2); and its water-skin-like internal reservoirs that let
// it go without drinking for long stretches (paragraph 3). Continues in
// part 2 (printed chapter 54, pp.181-182, already confirmed to begin a
// fresh page with its own "(٥٤) الْجَمَل (٢)" heading -- so ch53 is
// self-contained to pp.179-180).
//
// Sentence-segmentation note: this chapter is one long unbroken run of
// comma-spliced clauses (13 sentences in paragraph 1 alone, several
// spanning the p.179/p.180 page break mid-sentence -- "فِي رِمَالِ" ends
// p.179 and "الصَّحْرَاءِ الَّتِيْ ..." opens p.180 continuing the SAME
// sentence). Split strictly at every "،" and "." per the established rule
// (colons stay attached to their following clause -- see qr2-53-001's
// "انْظُرُوْا إِلَى الإِبِلِ: كَيْفَ خُلِقَتْ ،").
//
// Footnote-marker convention (as in ch45-52): markers "(١)"-"(٤)" on
// p.179 and "(١)"-"(٥)" on p.180 are book furniture, excluded from `ar`
// and not tokenized; each footnoted lemma carries the footnote's defining
// text in its `book_note`: مثيل، داجن، خف، سوخ on p.179؛ سنام، قتب، شف،
// كرش، زق on p.180. Two new words this chapter -- "كلكل" (qr2-53-011,
// the camel's chest callus) and "قفر" (qr2-53-024, "a barren place") --
// are NOT footnoted here despite being unusual/technical terms: "كلكل" is
// glossed in-line by the sentence itself ("قُرْصٌ غَلِيْظٌ يُسَمَّىٰ
// الْكَلْكَل", "a thick pad called the kalkal"), and "قفر" simply isn't
// marked, even though the SAME word recurs on p.181 (chapter 54, printed
// immediately after this one) where it IS footnoted -- see the note left
// for chapter 54's author below.
//
// NOTE FOR CHAPTER 54'S AUTHOR: "قفر" (qr2-53-024 here, "a barren place",
// root ق ف ر) is introduced as a `newWords` entry in THIS chapter without
// a `book_note` (not footnoted on p.180). It recurs on p.181 in chapter
// 54's opening paragraph, where the SAME word IS footnoted ("قَـفْر جمع
// قِفَار: أرض خالية من الماء والعُشب والناس."). Per the established
// re-footnote convention (ch45/46, reapplied in ch51's برز/رتع), chapter
// 54 should NOT re-list "قفر" in its own `newWords` (it's already taught),
// but SHOULD add a `lemmas` entry for it carrying that p.181 `book_note`
// text, exactly parallel to how ch51 handled "حجة".
//
// Two same-root/same-spelling homograph flags for future reconciliation
// (the "سار"/ch49, "قدر"/ch52 precedent: reuse the lemma key, override
// pos/root/gloss at the token level, do NOT add to `newWords`, no
// `lemmas` entry since neither is footnoted here): "رجل" (qr2-53-007/013,
// "أَرْجُلُهُ"/"أَرْجُلِهِ", "its legs") is the SAME spelling already
// taught as the noun "رَجُل" ("man," v1 ch02/own ch41) -- here it is the
// unrelated noun "رِجْل" ("leg, foot"). "ظهر" (qr2-53-008, "ظَهْرِهِ",
// "its back") is the SAME spelling already taught as the noun "ظُهْر"
// ("Ẓuhr, midday," v1 ch06) AND the verb "ظَهَرَ" ("to appear," own
// ch46) -- here it is a THIRD sense, the noun "ظَهْر" ("back," of an
// animal's body). All three senses share the root ظ ه ر but are distinct
// dictionary headwords.
//
// Several distinct-derived-form new entries (the "بلّغ"/ch49,
// "رمي"/"رمى"/"رامي"/ch52 precedent -- naturally different spellings for
// genuinely different headwords built on an already-taught root, each
// kept as its own new lemma): "خلقة" (qr2-53-002, "الْخِلْقَةِ", "the
// form, physique") is new despite the root خ ل ق already giving the noun
// "خَلْق" ("creation, mankind," v1 ch09) and the verb "خَلَقَ" ("to
// create," own ch42). "أكبر" and "أطول" (qr2-53-003, elatives "bigger"
// and "longer") are new despite "كبير" and "طويل" being already known --
// matching the established precedent that elative forms get their own
// `newWords` entries rather than being folded into the base adjective
// (see own ch45/46/47's treatment of "أكثر" vs. "كثير"). "أخرج"
// (qr2-53-018, Form IV "to bring/take out") is new despite "خرج" (Form I,
// "to go out") being already known -- a genuinely different, causative
// headword. "احتوى" (Form VIII "to contain"), "اجتر" (Form VIII "to chew
// the cud"), "امتلأ" (Form VIII "to become full"), and "أغنى" (Form IV
// "to make needless of, suffice") are likewise new despite their Form I
// relatives ("حوى" is not itself taught; "جر"/"ملأ"/"غني" are -- but each
// Form I/VIII or adj/verb pair is a distinct dictionary headword with its
// own distinct spelling, so no reuse applies). "مجتر" ("a ruminant,"
// active participle of "اجتر") is likewise its own new entry.
//
// One-lemma-two-pos reuse (the "فتح"/ch49/51 precedent: verb and its
// plain masdar/noun sharing IDENTICAL spelling reuse one lemma key with a
// per-token pos override): "حمل" (qr2-53-006, "الْحَمْلِ", "the load,
// the carrying") reuses the verb lemma already taught as "حَمَلَ" ("to
// carry," own ch49) with pos overridden to noun at the token level; no
// new `newWords`/`lemmas` entry.
//
// Plural-reuse and straightforward-reuse notes: "جمل" (qr2-53-003 and
// throughout, the singular "camel") reuses the plural lemma already
// taught as "الْجِمَال" ("the camels," own ch47) rather than getting its
// own entry, per the established plural/singular lemma-sharing
// convention (applied in reverse direction here: the SINGULAR reuses a
// lemma first introduced via its plural). "سار" (qr2-53-007, "يَسِيْرُ",
// "it travels") reuses the v1 ch08 verb sense "to travel, move along"
// (root س ي ر) -- distinct from own ch49's unrelated homograph "سار"
// ("pleasing," root س ر ر), which that chapter's own handling already
// covers, so not re-flagged here. "شرب" (qr2-53-025, "الشُّرْبِ", "the
// drinking") reuses the noun sense already established in own ch45
// ("and drinking"), alongside the separately-already-known verb sense
// (v1 ch01, "يَشْرَبُ" qr2-53-023) -- both under the same lemma key per
// the one-lemma-two-pos convention, already in place before this chapter.
//
// Vocabulary notes: "إلى"، "كيف"، "رأى"، "لا"، "إن"/"فإن"، "كبير"،
// "حيوان"، "جسم"، "طويل"، "لذلك"، "كان"، "حتى"، "أمكن"، "أن"، "من"،
// "الأرض"، "رأس"، "صغير"، "خفيف"، "على"، "التي"، "كثيرا"، "ما"، "كل"،
// "ركب"، "عين"، "واسع"، "وسط"، "سمى"، "متى"، "لأن"، "عظيم"، "جاع"،
// "وجد"، "أكل"، "شيء"، "إذا"، "مدة"، "ماء"، "مكان" were all already
// introduced and are reused here rather than re-listed as new words.
export const CHAPTER = {
  id: "ch53",
  title: {
    ar: "الْجَمَلُ",
    en: "The Camel"
  },
  pages: [179, 180],
  newWords: [
    "إبل", "مثيل", "خلقة", "داجن", "ساق", "رقبة", "رعى", "كلأ", "بدون",
    "برك", "خف", "سوخ", "رمل", "صحراء", "سنام", "شحم", "قتب", "أسود",
    "شف", "حلم", "دعة", "بطن", "قرص", "غليظ", "كلكل", "استند", "متى",
    "قطعة", "عديم", "حس", "موقع", "جوف", "عجيب", "تركيب", "احتوى",
    "جملة", "كرش", "خزن", "مقدار", "غذاء", "جرة", "اجتر", "مجتر", "فرغ",
    "تحلل", "غذا", "كفى", "زق", "امتلأ", "عندما", "عطش", "قفر", "أكبر",
    "أطول", "أخرج", "زمن", "أغنى"
  ],
  lemmas: {
    "مثيل": {
      root: "م ث ل", pos: "noun", gloss: "an equal, a match",
      book_note: "لاَ مَثِيْلَ لَهَا: لاَ نَظِيْرَ لَهَا."
    },
    "داجن": {
      root: "د ج ن", pos: "adj", gloss: "domestic, tame",
      book_note: "الدَّاجِن جمع الدَّوَاجِن: كل ما أَلِفَ البيوتَ وأقام بها من حيوان وطير."
    },
    "خف": {
      root: "خ ف ف", pos: "noun", gloss: "a soft foot-pad, hoof",
      book_note: "خف جمع أَخْفَاف: حافِر."
    },
    "سوخ": {
      root: "س و خ", pos: "noun", gloss: "sinking, subsiding into the ground",
      book_note: "سَوْخَهَا: غَوْصها."
    },
    "سنام": {
      root: "س ن م", pos: "noun", gloss: "a hump",
      book_note: "سَنَامٌ جمع أَسْنِمَة: كتلة كبيرة من الشَّحْم تكون محدَّبة على ظهر الجمل."
    },
    "قتب": {
      root: "ق ت ب", pos: "noun", gloss: "a saddle",
      book_note: "القَتَب جمع الأَقْتَاب: الرَّحْلُ الصغير يوضع على قدر سَنَام البَعِيْر."
    },
    "شف": {
      root: "ش ف ف", pos: "verb", gloss: "to show through, reveal",
      book_note: "تَشِفَّان أي: تَرِقَّانِ حتى يُرى ما خلف عينيه من حلم ودعة."
    },
    "كرش": {
      root: "ك ر ش", pos: "noun", gloss: "a stomach (of a ruminant)",
      book_note: "كِرْشٌ جمع كُرُوْش: مِعْدَة."
    },
    "زق": {
      root: "ز ق ق", pos: "noun", gloss: "a water-skin",
      book_note: "زِقٌّ جمع أَزْقاق: وعاء من جلد."
    },
    "إبل": { root: "أ ب ل", pos: "noun", gloss: "camels" },
    "خلقة": { root: "خ ل ق", pos: "noun", gloss: "form, physique, natural constitution" },
    "ساق": { root: "س و ق", pos: "noun", gloss: "a leg, shank" },
    "رقبة": { root: "ر ق ب", pos: "noun", gloss: "a neck" },
    "رعى": { root: "ر ع ي", pos: "verb", gloss: "to graze, pasture" },
    "كلأ": { root: "ك ل أ", pos: "noun", gloss: "herbage, pasture" },
    "بدون": { root: "د و ن", pos: "prep", gloss: "without" },
    "برك": { root: "ب ر ك", pos: "verb", gloss: "to kneel, couch (of a camel)" },
    "رمل": { root: "ر م ل", pos: "noun", gloss: "sand" },
    "صحراء": { root: "ص ح ر", pos: "noun", gloss: "a desert" },
    "شحم": { root: "ش ح م", pos: "noun", gloss: "fat" },
    "أسود": { root: "س و د", pos: "adj", gloss: "black, dark" },
    "حلم": { root: "ح ل م", pos: "noun", gloss: "forbearance, patience" },
    "دعة": { root: "و د ع", pos: "noun", gloss: "ease, calm, gentleness" },
    "بطن": { root: "ب ط ن", pos: "noun", gloss: "a belly" },
    "قرص": { root: "ق ر ص", pos: "noun", gloss: "a disc, pad" },
    "غليظ": { root: "غ ل ظ", pos: "adj", gloss: "thick, coarse" },
    "كلكل": { root: "ك ل ك ل", pos: "noun", gloss: "the kalkal (a camel's chest callus)" },
    "استند": { root: "س ن د", pos: "verb", gloss: "to lean on, rest against" },
    "متى": { root: "م ت ي", pos: "conj", gloss: "when, whenever" },
    "قطعة": { root: "ق ط ع", pos: "noun", gloss: "a piece, patch" },
    "عديم": { root: "ع د م", pos: "adj", gloss: "devoid of, lacking" },
    "حس": { root: "ح س س", pos: "noun", gloss: "feeling, sensation" },
    "موقع": { root: "و ق ع", pos: "noun", gloss: "a location, place" },
    "جوف": { root: "ج و ف", pos: "noun", gloss: "a belly, cavity, interior" },
    "عجيب": { root: "ع ج ب", pos: "adj", gloss: "amazing, strange" },
    "تركيب": { root: "ر ك ب", pos: "noun", gloss: "composition, structure" },
    "احتوى": { root: "ح و ي", pos: "verb", gloss: "to contain, comprise" },
    "جملة": { root: "ج م ل", pos: "noun", gloss: "a set, whole, group" },
    "خزن": { root: "خ ز ن", pos: "verb", gloss: "to store" },
    "مقدار": { root: "ق د ر", pos: "noun", gloss: "an amount, quantity" },
    "غذاء": { root: "غ ذ و", pos: "noun", gloss: "food, nourishment" },
    "جرة": { root: "ج ر ر", pos: "noun", gloss: "a cud, mouthful (regurgitated for chewing)" },
    "اجتر": { root: "ج ر ر", pos: "verb", gloss: "to chew the cud, ruminate" },
    "مجتر": { root: "ج ر ر", pos: "adj", gloss: "a ruminant (animal)" },
    "فرغ": { root: "ف ر غ", pos: "verb", gloss: "to become empty, run out" },
    "تحلل": { root: "ح ل ل", pos: "verb", gloss: "to dissolve, break down gradually" },
    "غذا": { root: "غ ذ و", pos: "verb", gloss: "to nourish, feed" },
    "كفى": { root: "ك ف ي", pos: "verb", gloss: "to suffice, be enough for" },
    "امتلأ": { root: "م ل أ", pos: "verb", gloss: "to become full, fill up" },
    "عندما": { root: "ع ن د", pos: "conj", gloss: "when" },
    "عطش": { root: "ع ط ش", pos: "verb", gloss: "to become thirsty" },
    "قفر": { root: "ق ف ر", pos: "adj", gloss: "barren, waterless" },
    "أكبر": { root: "ك ب ر", pos: "adj", gloss: "greater, bigger" },
    "أطول": { root: "ط و ل", pos: "adj", gloss: "longer, taller" },
    "أخرج": { root: "خ ر ج", pos: "verb", gloss: "to bring/take out, extract" },
    "زمن": { root: "ز م ن", pos: "noun", gloss: "time, a period" },
    "أغنى": { root: "غ ن ي", pos: "verb", gloss: "to make needless of, suffice, enrich" }
  },
  paragraphs: [
    {
      en: "Look at the camel and how it was created: it has no equal in form. It is the largest domestic animal in body and the longest in leg, so its neck is long enough to graze from the ground without kneeling, and its head is small to be a light burden on that neck. Its legs have pads that keep them from sinking into the desert sands it often crosses. On its back is a fatty hump on which the saddle is mounted; its two eyes are dark, wide, and gentle; in the middle of its belly is a thick pad called the 'kalkal' that it rests on when it kneels; and its legs have patches with no feeling where they touch the ground.",
      sentences: [
        {
          id: "qr2-53-001",
          ar: "انْظُرُوْا إِلَى الإِبِلِ: كَيْفَ خُلِقَتْ ،",
          en: "Look at the camels: how they were created,",
          tokens: [
            { surface: "انْظُرُوْا", lemma: "نظر", pos: "verb", features: "imp.2mpl", root: "ن ظ ر", gloss: "look!" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "الإِبِلِ", lemma: "إبل", pos: "noun", features: "def.gen", root: "أ ب ل", gloss: "the camels" },
            { surface: "كَيْفَ", lemma: "كيف", pos: "part", features: "part", root: "ك ي ف", gloss: "how" },
            { surface: "خُلِقَتْ", lemma: "خلق", pos: "verb", features: "pass.perf.3fs", root: "خ ل ق", gloss: "it was created" }
          ]
        },
        {
          id: "qr2-53-002",
          ar: "تَرَوْهَا لاَ مَثِيْلَ لَهَا فِي الْخِلْقَةِ ،",
          en: "you will see it has no equal in form,",
          tokens: [
            { surface: "تَرَوْهَا", lemma: "رأى", pos: "verb", features: "juss.2mpl+3fs", root: "ر أ ي", gloss: "you see it" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "no" },
            { surface: "مَثِيْلَ", lemma: "مثيل", pos: "noun", features: "acc", root: "م ث ل", gloss: "equal, match" },
            { surface: "لَهَا", lemma: "ل", pos: "prep", features: "prep+3fs", root: "", gloss: "for it" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْخِلْقَةِ", lemma: "خلقة", pos: "noun", features: "def.gen", root: "خ ل ق", gloss: "the form" }
          ]
        },
        {
          id: "qr2-53-003",
          ar: "فَإِنَّ الْجَمَلَ أَكْبَرُ الْحَيَوَانِ الدَّاجِنِ جِسْماً وَأَطْوَلُهُ سَاقاً ،",
          en: "for the camel is the biggest domestic animal in body, and the longest of it in leg,",
          tokens: [
            { surface: "فَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "الْجَمَلَ", lemma: "جمل", pos: "noun", features: "def.acc", root: "ج م ل", gloss: "the camel" },
            { surface: "أَكْبَرُ", lemma: "أكبر", pos: "adj", features: "nom.constr", root: "ك ب ر", gloss: "the biggest (of)" },
            { surface: "الْحَيَوَانِ", lemma: "حيوان", pos: "noun", features: "def.gen", root: "ح ي و ن", gloss: "the animal" },
            { surface: "الدَّاجِنِ", lemma: "داجن", pos: "adj", features: "def.gen", root: "د ج ن", gloss: "domestic" },
            { surface: "جِسْماً", lemma: "جسم", pos: "noun", features: "indef.acc", root: "ج س م", gloss: "in body" },
            { surface: "وَأَطْوَلُهُ", lemma: "أطول", pos: "adj", features: "conj+nom+3ms", root: "ط و ل", gloss: "and the longest of it" },
            { surface: "سَاقاً", lemma: "ساق", pos: "noun", features: "indef.acc", root: "س و ق", gloss: "in leg" }
          ]
        },
        {
          id: "qr2-53-004",
          ar: "وَلِذٰلِكَ كَانَتْ رَقَبَتُهُ طَوِيْلَةً ،",
          en: "and therefore its neck is long,",
          tokens: [
            { surface: "وَلِذٰلِكَ", lemma: "لذلك", pos: "adv", features: "conj+adv", root: "", gloss: "and therefore" },
            { surface: "كَانَتْ", lemma: "كان", pos: "verb", features: "perf.3fs", root: "ك و ن", gloss: "was" },
            { surface: "رَقَبَتُهُ", lemma: "رقبة", pos: "noun", features: "nom+3ms", root: "ر ق ب", gloss: "its neck" },
            { surface: "طَوِيْلَةً", lemma: "طويل", pos: "adj", features: "indef.acc.f", root: "ط و ل", gloss: "long" }
          ]
        },
        {
          id: "qr2-53-005",
          ar: "حَتَّىٰ يُمْكِنَهُ أَنْ يَرْعَىٰ الْكَلأَ مِنَ الأَرْضِ بِدُوْنِ أَنْ يَبْرُكَ ،",
          en: "so that it can graze on herbage from the ground without kneeling,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "so that" },
            { surface: "يُمْكِنَهُ", lemma: "أمكن", pos: "verb", features: "subj.3ms+3ms", root: "م ك ن", gloss: "it is possible for it" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَرْعَىٰ", lemma: "رعى", pos: "verb", features: "subj.3ms", root: "ر ع ي", gloss: "it grazes" },
            { surface: "الْكَلأَ", lemma: "كلأ", pos: "noun", features: "def.acc", root: "ك ل أ", gloss: "the herbage" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the ground" },
            { surface: "بِدُوْنِ", lemma: "بدون", pos: "prep", features: "prep", root: "د و ن", gloss: "without" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَبْرُكَ", lemma: "برك", pos: "verb", features: "subj.3ms", root: "ب ر ك", gloss: "it kneels" }
          ]
        },
        {
          id: "qr2-53-006",
          ar: "وَرَأْسُهُ صَغِيْرٌ لِيَكُوْنَ خَفِيْفَ الْحَمْلِ عَلَىٰ رَقَبَتِهِ ،",
          en: "and its head is small, so as to be a light burden on its neck,",
          tokens: [
            { surface: "وَرَأْسُهُ", lemma: "رأس", pos: "noun", features: "conj+nom+3ms", root: "ر أ س", gloss: "and its head" },
            { surface: "صَغِيْرٌ", lemma: "صغير", pos: "adj", features: "indef.nom", root: "ص غ ر", gloss: "small" },
            { surface: "لِيَكُوْنَ", lemma: "كان", pos: "verb", features: "prep+subj.3ms", root: "ك و ن", gloss: "so that it may be" },
            { surface: "خَفِيْفَ", lemma: "خفيف", pos: "adj", features: "acc.constr", root: "خ ف ف", gloss: "light (of)" },
            { surface: "الْحَمْلِ", lemma: "حمل", pos: "noun", features: "def.gen", root: "ح م ل", gloss: "the load" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "رَقَبَتِهِ", lemma: "رقبة", pos: "noun", features: "gen+3ms", root: "ر ق ب", gloss: "its neck" }
          ]
        },
        {
          id: "qr2-53-007",
          ar: "وَأَرْجُلُهُ فِيْهَا أَخْفَافٌ تَمْنَعُ سَوْخَهَا فِي رِمَالِ الصَّحْرَاءِ الَّتِيْ كَثِيْراً مَا يَسِيْرُ فِيْهَا ،",
          en: "and its legs have pads that keep them from sinking into the sands of the desert it often crosses,",
          tokens: [
            { surface: "وَأَرْجُلُهُ", lemma: "رجل", pos: "noun", features: "conj+pl.nom+3ms", root: "ر ج ل", gloss: "and its legs" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in it" },
            { surface: "أَخْفَافٌ", lemma: "خف", pos: "noun", features: "indef.nom", root: "خ ف ف", gloss: "pads" },
            { surface: "تَمْنَعُ", lemma: "منع", pos: "verb", features: "impf.3fs", root: "م ن ع", gloss: "prevents" },
            { surface: "سَوْخَهَا", lemma: "سوخ", pos: "noun", features: "acc+3fs", root: "س و خ", gloss: "its sinking" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "رِمَالِ", lemma: "رمل", pos: "noun", features: "gen.constr", root: "ر م ل", gloss: "the sands (of)" },
            { surface: "الصَّحْرَاءِ", lemma: "صحراء", pos: "noun", features: "def.gen", root: "ص ح ر", gloss: "the desert" },
            { surface: "الَّتِيْ", lemma: "الذي", pos: "rel", features: "fs", root: "", gloss: "which" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "often" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "part", root: "", gloss: "" },
            { surface: "يَسِيْرُ", lemma: "سار", pos: "verb", features: "impf.3ms", root: "س ي ر", gloss: "it travels" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "through it" }
          ]
        },
        {
          id: "qr2-53-008",
          ar: "وَعَلَىٰ ظَهْرِهِ سَنَامٌ كُلُّهُ شَحْمٌ ،",
          en: "and on its back is a hump, all of it fat,",
          tokens: [
            { surface: "وَعَلَىٰ", lemma: "على", pos: "prep", features: "conj+prep", root: "", gloss: "and on" },
            { surface: "ظَهْرِهِ", lemma: "ظهر", pos: "noun", features: "gen+3ms", root: "ظ ه ر", gloss: "its back" },
            { surface: "سَنَامٌ", lemma: "سنام", pos: "noun", features: "indef.nom", root: "س ن م", gloss: "a hump" },
            { surface: "كُلُّهُ", lemma: "كل", pos: "noun", features: "nom+3ms", root: "ك ل ل", gloss: "all of it" },
            { surface: "شَحْمٌ", lemma: "شحم", pos: "noun", features: "indef.nom", root: "ش ح م", gloss: "fat" }
          ]
        },
        {
          id: "qr2-53-009",
          ar: "يُرَكَّبُ عَلَيْهِ الْقَتَبُ ،",
          en: "the saddle is mounted upon it,",
          tokens: [
            { surface: "يُرَكَّبُ", lemma: "ركب", pos: "verb", features: "pass.impf.3ms", root: "ر ك ب", gloss: "is mounted" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "upon it" },
            { surface: "الْقَتَبُ", lemma: "قتب", pos: "noun", features: "def.nom", root: "ق ت ب", gloss: "the saddle" }
          ]
        },
        {
          id: "qr2-53-010",
          ar: "وَعَيْنَاهُ سَوْدَاوَانِ وَاسِعَتَانِ تَشِفَّانِ عَنْ حِلْمٍ وَدَعَةٍ ،",
          en: "and its two eyes are dark and wide, revealing forbearance and gentleness,",
          tokens: [
            { surface: "وَعَيْنَاهُ", lemma: "عين", pos: "noun", features: "conj+du.nom+3ms", root: "ع ي ن", gloss: "and its two eyes" },
            { surface: "سَوْدَاوَانِ", lemma: "أسود", pos: "adj", features: "du.nom.f", root: "س و د", gloss: "dark" },
            { surface: "وَاسِعَتَانِ", lemma: "واسع", pos: "adj", features: "conj+du.nom.f", root: "و س ع", gloss: "and wide" },
            { surface: "تَشِفَّانِ", lemma: "شف", pos: "verb", features: "impf.3fdu", root: "ش ف ف", gloss: "reveal" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "حِلْمٍ", lemma: "حلم", pos: "noun", features: "indef.gen", root: "ح ل م", gloss: "forbearance" },
            { surface: "وَدَعَةٍ", lemma: "دعة", pos: "noun", features: "conj+indef.gen", root: "و د ع", gloss: "and gentleness" }
          ]
        },
        {
          id: "qr2-53-011",
          ar: "وَلَهُ فِيْ وَسْطِ بَطْنِهِ قُرْصٌ غَلِيْظٌ يُسَمَّىٰ الْكَلْكَل ،",
          en: "and it has, in the middle of its belly, a thick pad called the 'kalkal',",
          tokens: [
            { surface: "وَلَهُ", lemma: "ل", pos: "prep", features: "conj+prep+3ms", root: "", gloss: "and it has" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "وَسْطِ", lemma: "وسط", pos: "noun", features: "gen.constr", root: "و س ط", gloss: "the middle (of)" },
            { surface: "بَطْنِهِ", lemma: "بطن", pos: "noun", features: "gen+3ms", root: "ب ط ن", gloss: "its belly" },
            { surface: "قُرْصٌ", lemma: "قرص", pos: "noun", features: "indef.nom", root: "ق ر ص", gloss: "a disc, pad" },
            { surface: "غَلِيْظٌ", lemma: "غليظ", pos: "adj", features: "indef.nom", root: "غ ل ظ", gloss: "thick" },
            { surface: "يُسَمَّىٰ", lemma: "سمى", pos: "verb", features: "pass.impf.3ms", root: "س م و", gloss: "is called" },
            { surface: "الْكَلْكَل", lemma: "كلكل", pos: "noun", features: "def.acc", root: "ك ل ك ل", gloss: "the kalkal" }
          ]
        },
        {
          id: "qr2-53-012",
          ar: "يَسْتَنِدُ عَلَيْهِ مَتَىٰ بَرَكَ ،",
          en: "it rests on it whenever it kneels,",
          tokens: [
            { surface: "يَسْتَنِدُ", lemma: "استند", pos: "verb", features: "impf.3ms", root: "س ن د", gloss: "it rests, leans" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "on it" },
            { surface: "مَتَىٰ", lemma: "متى", pos: "conj", features: "conj", root: "م ت ي", gloss: "whenever" },
            { surface: "بَرَكَ", lemma: "برك", pos: "verb", features: "perf.3ms", root: "ب ر ك", gloss: "it kneels" }
          ]
        },
        {
          id: "qr2-53-013",
          ar: "وَلَهُ فِيْ أَرْجُلِهِ قِطَعٌ عَدِيْمَةُ الْحِسِّ فِيْ مَوَاقِعِهَا عَلَىٰ الأَرْضِ.",
          en: "and it has, in its legs, patches devoid of feeling at their points of contact with the ground.",
          tokens: [
            { surface: "وَلَهُ", lemma: "ل", pos: "prep", features: "conj+prep+3ms", root: "", gloss: "and it has" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "أَرْجُلِهِ", lemma: "رجل", pos: "noun", features: "gen.pl+3ms", root: "ر ج ل", gloss: "its legs" },
            { surface: "قِطَعٌ", lemma: "قطعة", pos: "noun", features: "indef.pl.nom", root: "ق ط ع", gloss: "patches" },
            { surface: "عَدِيْمَةُ", lemma: "عديم", pos: "adj", features: "nom.constr.f", root: "ع د م", gloss: "devoid (of)" },
            { surface: "الْحِسِّ", lemma: "حس", pos: "noun", features: "def.gen", root: "ح س س", gloss: "feeling" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "مَوَاقِعِهَا", lemma: "موقع", pos: "noun", features: "gen.pl+3fs", root: "و ق ع", gloss: "their locations" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the ground" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَتْ رَقَبَةُ الْجَمَلِ طَوِيْلَةً؟",
          options: ["لِيَتَمَكَّنَ مِنَ الرَّعْيِ مِنَ الأَرْضِ بِدُوْنِ أَنْ يَبْرُكَ", "لِيَكُوْنَ أَجْمَلَ شَكْلاً", "لِيَحْمِلَ أَشْيَاءَ كَثِيْرَةً عَلَيْهَا"],
          answer: 0,
          qEn: "Why is the camel's neck long?",
          optionsEn: ["So that it can graze from the ground without kneeling", "To look more beautiful", "To carry many things on it"]
        },
        {
          q: "بِمَاذَا تُوْصَفُ عَيْنَا الْجَمَلِ؟",
          options: ["سَوْدَاوَانِ وَاسِعَتَانِ تَشِفَّانِ عَنْ حِلْمٍ وَدَعَةٍ", "صَغِيْرَتَانِ حَادَّتَانِ", "زَرْقَاوَانِ لاَمِعَتَانِ"],
          answer: 0,
          qEn: "How are the camel's two eyes described?",
          optionsEn: ["Dark and wide, revealing forbearance and gentleness", "Small and sharp", "Blue and shining"]
        }
      ]
    },
    {
      en: "The camel's interior is remarkable: it holds a set of stomachs storing a great quantity of food, so that when it grows hungry and finds nothing to eat, it brings up a cud and chews it -- which is why it is called a ruminant. And once what it stored is used up, the fat of its hump gradually dissolves to nourish it and sustain it for a long time.",
      sentences: [
        {
          id: "qr2-53-014",
          ar: "وَجَوْفُ الْجَمَلِ عَجِيْبٌ فِيْ تَرْكِيْبِهِ ،",
          en: "And the camel's interior is amazing in its structure,",
          tokens: [
            { surface: "وَجَوْفُ", lemma: "جوف", pos: "noun", features: "conj+nom.constr", root: "ج و ف", gloss: "and the interior (of)" },
            { surface: "الْجَمَلِ", lemma: "جمل", pos: "noun", features: "def.gen", root: "ج م ل", gloss: "the camel" },
            { surface: "عَجِيْبٌ", lemma: "عجيب", pos: "adj", features: "indef.nom", root: "ع ج ب", gloss: "amazing" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "تَرْكِيْبِهِ", lemma: "تركيب", pos: "noun", features: "gen+3ms", root: "ر ك ب", gloss: "its structure" }
          ]
        },
        {
          id: "qr2-53-015",
          ar: "لأَنَّهُ يَحْتَوِيْ عَلَىٰ جُمْلَةِ كُرُوْشٍ ،",
          en: "because it contains a set of stomachs,",
          tokens: [
            { surface: "لأَنَّهُ", lemma: "لأن", pos: "part", features: "part+3ms", root: "", gloss: "because it" },
            { surface: "يَحْتَوِيْ", lemma: "احتوى", pos: "verb", features: "impf.3ms", root: "ح و ي", gloss: "it contains" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "جُمْلَةِ", lemma: "جملة", pos: "noun", features: "gen.constr", root: "ج م ل", gloss: "a set (of)" },
            { surface: "كُرُوْشٍ", lemma: "كرش", pos: "noun", features: "indef.pl.gen", root: "ك ر ش", gloss: "stomachs" }
          ]
        },
        {
          id: "qr2-53-016",
          ar: "يَخْزُنُ فِيْهَا مِقْدَاراً عَظِيْماً مِنَ الْغِذَاءِ ،",
          en: "it stores in them a great quantity of food,",
          tokens: [
            { surface: "يَخْزُنُ", lemma: "خزن", pos: "verb", features: "impf.3ms", root: "خ ز ن", gloss: "it stores" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in them" },
            { surface: "مِقْدَاراً", lemma: "مقدار", pos: "noun", features: "indef.acc", root: "ق د ر", gloss: "a quantity" },
            { surface: "عَظِيْماً", lemma: "عظيم", pos: "adj", features: "indef.acc", root: "ع ظ م", gloss: "great" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْغِذَاءِ", lemma: "غذاء", pos: "noun", features: "def.gen", root: "غ ذ و", gloss: "the food" }
          ]
        },
        {
          id: "qr2-53-017",
          ar: "حَتَّىٰ إِذَا جَاعَ وَلَمْ يَجِدْ أَكْلاً ،",
          en: "so that when it becomes hungry and doesn't find food,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "so that" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "when" },
            { surface: "جَاعَ", lemma: "جاع", pos: "verb", features: "perf.3ms", root: "ج و ع", gloss: "it becomes hungry" },
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and did not" },
            { surface: "يَجِدْ", lemma: "وجد", pos: "verb", features: "juss.3ms", root: "و ج د", gloss: "it find" },
            { surface: "أَكْلاً", lemma: "أكل", pos: "noun", features: "indef.acc", root: "أ ك ل", gloss: "food" }
          ]
        },
        {
          id: "qr2-53-018",
          ar: "أَخْرَجَ مِنْ كِرْشِهِ جَرَّةً ،",
          en: "it brings up from its stomach a cud,",
          tokens: [
            { surface: "أَخْرَجَ", lemma: "أخرج", pos: "verb", features: "perf.3ms", root: "خ ر ج", gloss: "it brings out" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "كِرْشِهِ", lemma: "كرش", pos: "noun", features: "gen+3ms", root: "ك ر ش", gloss: "its stomach" },
            { surface: "جَرَّةً", lemma: "جرة", pos: "noun", features: "indef.acc", root: "ج ر ر", gloss: "a cud" }
          ]
        },
        {
          id: "qr2-53-019",
          ar: "وَاجْتَرَّهَا ،",
          en: "and chews it,",
          tokens: [
            { surface: "وَاجْتَرَّهَا", lemma: "اجتر", pos: "verb", features: "conj+perf.3ms+3fs", root: "ج ر ر", gloss: "and it chewed it" }
          ]
        },
        {
          id: "qr2-53-020",
          ar: "وَلِذٰلِكَ يُسَمَّىٰ حَيَوَاناً مُجْتَرَّاً ،",
          en: "and therefore it is called a ruminant animal,",
          tokens: [
            { surface: "وَلِذٰلِكَ", lemma: "لذلك", pos: "adv", features: "conj+adv", root: "", gloss: "and therefore" },
            { surface: "يُسَمَّىٰ", lemma: "سمى", pos: "verb", features: "pass.impf.3ms", root: "س م و", gloss: "it is called" },
            { surface: "حَيَوَاناً", lemma: "حيوان", pos: "noun", features: "indef.acc", root: "ح ي و ن", gloss: "an animal" },
            { surface: "مُجْتَرَّاً", lemma: "مجتر", pos: "adj", features: "indef.acc", root: "ج ر ر", gloss: "ruminant" }
          ]
        },
        {
          id: "qr2-53-021",
          ar: "وَإِذَا فَرَغَ مَا خَزَنَهُ فِيْ جَوْفِهِ ،",
          en: "and when what it stored in its belly runs out,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and when" },
            { surface: "فَرَغَ", lemma: "فرغ", pos: "verb", features: "perf.3ms", root: "ف ر غ", gloss: "it runs out" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "خَزَنَهُ", lemma: "خزن", pos: "verb", features: "perf.3ms+3ms", root: "خ ز ن", gloss: "it stored it" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "جَوْفِهِ", lemma: "جوف", pos: "noun", features: "gen+3ms", root: "ج و ف", gloss: "its belly" }
          ]
        },
        {
          id: "qr2-53-022",
          ar: "فَإِنَّ شَحْمَ سَنَامِهِ يَتَحَلَّلُ شَيْئاً فَشَيْئاً لِيَغْذُوَهُ وَيَكْفِيْهِ مُدَّةً طَوِيْلَةً.",
          en: "the fat of its hump dissolves little by little to nourish it and suffice it for a long period.",
          tokens: [
            { surface: "فَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", root: "", gloss: "then indeed" },
            { surface: "شَحْمَ", lemma: "شحم", pos: "noun", features: "acc.constr", root: "ش ح م", gloss: "the fat (of)" },
            { surface: "سَنَامِهِ", lemma: "سنام", pos: "noun", features: "gen+3ms", root: "س ن م", gloss: "its hump" },
            { surface: "يَتَحَلَّلُ", lemma: "تحلل", pos: "verb", features: "impf.3ms", root: "ح ل ل", gloss: "dissolves" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "little" },
            { surface: "فَشَيْئاً", lemma: "شيء", pos: "noun", features: "conj+indef.acc", root: "ش ي أ", gloss: "by little" },
            { surface: "لِيَغْذُوَهُ", lemma: "غذا", pos: "verb", features: "prep+subj.3ms+3ms", root: "غ ذ و", gloss: "so that it may nourish it" },
            { surface: "وَيَكْفِيْهِ", lemma: "كفى", pos: "verb", features: "conj+subj.3ms+3ms", root: "ك ف ي", gloss: "and suffice it" },
            { surface: "مُدَّةً", lemma: "مدة", pos: "noun", features: "indef.acc", root: "م د د", gloss: "a period" },
            { surface: "طَوِيْلَةً", lemma: "طويل", pos: "adj", features: "indef.acc.f", root: "ط و ل", gloss: "long" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا يُسَمَّى الْجَمَلُ حَيَوَاناً مُجْتَرّاً؟",
          options: ["لأَنَّهُ يُخْرِجُ مِنْ كِرْشِهِ جَرَّةً وَيَجْتَرُّهَا حِيْنَ لاَ يَجِدُ أَكْلاً", "لأَنَّهُ يَأْكُلُ مَرَّتَيْنِ فِي الْيَوْمِ", "لأَنَّهُ لاَ يَأْكُلُ أَبَداً"],
          answer: 0,
          qEn: "Why is the camel called a ruminant animal?",
          optionsEn: ["Because it brings up a cud from its stomach and chews it when it finds no food", "Because it eats twice a day", "Because it never eats"]
        }
      ]
    },
    {
      en: "The camel also has, in its belly, a set of water-skins that fill with water when it drinks, so that when it becomes thirsty in a barren, waterless place, what it stored spares it from drinking for a long time.",
      sentences: [
        {
          id: "qr2-53-023",
          ar: "وَلِلْجَمَلِ فِيْ جَوْفِهِ جُمْلَةُ أَزْقَاقٍ تَمْتَلِئُ بِالْمَاءِ عِنْدَمَا يَشْرَبُ ،",
          en: "And the camel has, in its belly, a set of water-skins that fill with water when it drinks,",
          tokens: [
            { surface: "وَلِلْجَمَلِ", lemma: "جمل", pos: "noun", features: "conj+prep+def.gen", root: "ج م ل", gloss: "and the camel has" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "جَوْفِهِ", lemma: "جوف", pos: "noun", features: "gen+3ms", root: "ج و ف", gloss: "its belly" },
            { surface: "جُمْلَةُ", lemma: "جملة", pos: "noun", features: "nom.constr", root: "ج م ل", gloss: "a set (of)" },
            { surface: "أَزْقَاقٍ", lemma: "زق", pos: "noun", features: "indef.pl.gen", root: "ز ق ق", gloss: "water-skins" },
            { surface: "تَمْتَلِئُ", lemma: "امتلأ", pos: "verb", features: "impf.3fs", root: "م ل أ", gloss: "fills up" },
            { surface: "بِالْمَاءِ", lemma: "ماء", pos: "noun", features: "prep+def.gen", root: "م و ه", gloss: "with water" },
            { surface: "عِنْدَمَا", lemma: "عندما", pos: "conj", features: "conj", root: "ع ن د", gloss: "when" },
            { surface: "يَشْرَبُ", lemma: "شرب", pos: "verb", features: "impf.3ms", root: "ش ر ب", gloss: "it drinks" }
          ]
        },
        {
          id: "qr2-53-024",
          ar: "حَتَّىٰ إِذَا عَطِشَ فِيْ مَكَانِ قَفْرٍ لاَ مَاءَ فِيْهِ ،",
          en: "so that when it becomes thirsty in a barren place with no water in it,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "so that" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "when" },
            { surface: "عَطِشَ", lemma: "عطش", pos: "verb", features: "perf.3ms", root: "ع ط ش", gloss: "it becomes thirsty" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مَكَانِ", lemma: "مكان", pos: "noun", features: "gen.constr", root: "ك و ن", gloss: "a place (of)" },
            { surface: "قَفْرٍ", lemma: "قفر", pos: "adj", features: "indef.gen", root: "ق ف ر", gloss: "barren" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "no" },
            { surface: "مَاءَ", lemma: "ماء", pos: "noun", features: "acc", root: "م و ه", gloss: "water" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "prep+3ms", root: "", gloss: "in it" }
          ]
        },
        {
          id: "qr2-53-025",
          ar: "أَغْنَاهُ مَا خَزَنَهُ عَنِ الشُّرْبِ زَمَناً طَوِيْلاً.",
          en: "what it stored suffices it, sparing it from drinking, for a long time.",
          tokens: [
            { surface: "أَغْنَاهُ", lemma: "أغنى", pos: "verb", features: "perf.3ms+3ms", root: "غ ن ي", gloss: "made it needless (of)" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "خَزَنَهُ", lemma: "خزن", pos: "verb", features: "perf.3ms+3ms", root: "خ ز ن", gloss: "it had stored" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الشُّرْبِ", lemma: "شرب", pos: "noun", features: "def.gen", root: "ش ر ب", gloss: "the drinking" },
            { surface: "زَمَناً", lemma: "زمن", pos: "noun", features: "indef.acc", root: "ز م ن", gloss: "a time" },
            { surface: "طَوِيْلاً", lemma: "طويل", pos: "adj", features: "indef.acc", root: "ط و ل", gloss: "long" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ يَتَحَمَّلُ الْجَمَلُ الْعَطَشَ فِيْ الصَّحْرَاءِ؟",
          options: ["بِمَا يَخْزُنُهُ مِنَ الْمَاءِ فِيْ أَزْقَاقٍ فِيْ جَوْفِهِ", "بِشُرْبِ مَاءِ الْبَحْرِ", "لأَنَّهُ لاَ يَعْطَشُ أَبَداً"],
          answer: 0,
          qEn: "How does the camel endure thirst in the desert?",
          optionsEn: ["By what it stores of water in water-skins in its belly", "By drinking sea water", "Because it never gets thirsty"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "",
        post: "الْجَمَلُ عِنْدَ الْمَاءِ لِيَشْرَبَ.",
        en: "The camel knelt by the water to drink.",
        options: ["بَرَكَ", "بَرَكْتُ", "تَبْرُكُ", "يَبْرُكُوْنَ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- it knelt.",
          "1st person singular perfect -- I knelt.",
          "2nd masculine or 3rd feminine present -- you/she kneel.",
          "3rd masculine plural present -- they kneel."
        ]
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "الْجَمَلُ مَاءً كَثِيْراً فِيْ جَوْفِهِ ،",
        en: "and the camel stored a lot of water in its belly,",
        options: ["خَزَنَ", "خَزَنْتُ", "تَخْزُنُ", "نَخْزُنُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- it stored.",
          "1st person singular perfect -- I stored.",
          "2nd masculine or 3rd feminine present -- you/she store.",
          "1st person plural present -- we store."
        ]
      },
      {
        type: "cloze",
        pre: "حَتَّىٰ إِذَا ",
        post: "فِيْ الصَّحْرَاءِ ، أَغْنَاهُ مَا خَزَنَهُ.",
        en: "so that when it becomes thirsty in the desert, what it had stored suffices it.",
        options: ["عَطِشَ", "عَطِشْتُ", "تَعْطَشُ", "يَعْطَشُوْنَ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- it became thirsty.",
          "1st person singular perfect -- I became thirsty.",
          "2nd masculine or 3rd feminine present -- you/she become thirsty.",
          "3rd masculine plural present -- they become thirsty."
        ]
      }
    ],
    shift: [
      {
        type: "shift",
        base: "يَرْعَى الْكَلأَ",
        pre: "",
        post: "الْكَلأَ",
        targetPerson: "أَنَا",
        targetEn: "I",
        options: ["أَرْعَى", "تَرْعَى", "نَرْعَى", "يَرْعَوْنَ"],
        answer: 0,
        rationales: [
          "1st person singular -- I graze.",
          "2nd masculine or 3rd feminine -- you/she graze.",
          "1st person plural -- we graze.",
          "3rd masculine plural -- they graze."
        ]
      },
      {
        type: "shift",
        base: "يَشْرَبُ الْمَاءَ",
        pre: "",
        post: "الْمَاءَ",
        targetPerson: "هُمْ",
        targetEn: "they",
        options: ["يَشْرَبُوْنَ", "تَشْرَبُ", "أَشْرَبُ", "نَشْرَبُ"],
        answer: 0,
        rationales: [
          "3rd masculine plural -- they drink.",
          "2nd masculine or 3rd feminine -- you/she drink.",
          "1st person singular -- I drink.",
          "1st person plural -- we drink."
        ]
      }
    ]
  }
};

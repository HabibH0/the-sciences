// القراءة الراشدة, volume two, chapter 58 (printed heading "٥٨") --
// الْخَلِيفَةُ عُمَرُ بْنُ عَبْدِ الْعَزِيزِ (٢) -- "The Caliph Umar bin
// Abdul Aziz (2)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 194-195 (PDF page
// index == printed page number). Continues own ch57's biography with a
// further run of short anecdotes -- his total personal austerity as
// caliph, the postal-mount dates episode, the lentils-and-onions episode
// with his daughters, his use of a personal lamp vs. public candle-wax,
// the general prosperity of his caliphate, and his relentless work
// ethic -- closing with his death date. Ends with a "٭ ٭ ٭" divider; this
// is the end of the two-part biography (own ch59, "فِي بَيْتِ أَبِي
// أَيُّوبَ الأَنْصَارِيِّ", pp.196-197, is an unrelated hadith narrative,
// not a further part).
//
// Paragraph granularity: as in own ch56/ch57, each blank-line-separated
// block on the printed page is its own `paragraphs[]` entry (7 total).
// Sentences are split at each ، and . (and ؟/!) throughout; colons do
// not split (the speech that follows one stays in the same sentence).
//
// Numeral "١٠١" and the "هـ" abbreviation are transcribed/tokenized the
// same way as own ch56/ch57's "٨٥٣ هـ"/"٦١ هـ" -- an established notation,
// not re-litigated here.
//
// Homographs / reused-with-extended-sense (existing lemma key, token-
// level pos/gloss override, no new `newWords`/`lemmas` entry):
//   - "عَهْدِ" (qr2-58-022, noun "the time, era (of)") reuses the lemma
//     key "عهد" already taught as a verb ("to designate," own ch57,
//     "وَعَهِدَ سُلَيْمَانُ") -- unrelated part of speech, same root/
//     spelling, matching the corpus's established one-lemma-two-pos
//     convention (see own ch57's "علف"-style precedent below).
//   - "عَلَفِ" (qr2-58-010, noun "fodder") reuses the lemma key "علف"
//     already taught as a verb ("to feed, give fodder," own ch45) --
//     same root/spelling, noun sense here instead of verb.
//   - "الأَلْوَانَ" (qr2-58-019, "fine varieties of food") reuses the
//     lemma key "لون" ("a color," own ch52), already extended to "food
//     varieties" once before in own ch57's "أَلْوَانَ الطَّعَامِ" --
//     reused again here without comment.
//
// Distinct-derived-form new entries (naturally different spelling from
// an already-known root-mate, so kept as their own `newWords` entries):
// "أَحْدَثَ" (qr2-58-001, Form IV "to acquire, bring about [something
// new]") is new despite the Form I verb "حدث" ("to tell, narrate," v1
// ch08) being known -- unrelated meaning and different measure, exactly
// the "differently-spelled measure" pattern used throughout this book
// (سيّر/سار, أمرّ/مر, etc.). "أَرْجَعَ" (qr2-58-022, Form IV "to restore,
// give back") is new despite "رجع" ("to return," intransitive, v1 ch01)
// being known -- Form IV is the transitive causative, a different
// headword. "تَرَوَّحْتَ" (qr2-58-031, Form V "to relax, take a stroll")
// is new; it happens to share a root (ر و ح) with own ch57's "رائحة"
// ("scent") but is a semantically unrelated derived verb, not treated as
// a reuse.
//
// Footnoted new entries: "دَابَّةً" (qr2-58-001, "a mount, riding
// animal") and "لِلْحَاضِنَةِ" (qr2-58-015, "the nanny") both carry a
// `book_note` transcribed from the page's own footnote.
//
// "عَلاَمَ" (qr2-58-006, fused عَلَى+مَا, "for what reason, why") is kept
// as its own single token/lemma, matching how the printed text fuses it
// into one graphic word -- parallel to the project's treatment of other
// attached-clitic interrogatives.
//
// "إِحْدَاهُمَا" (qr2-58-011, "one of the two [of them]") is entered as
// its own `newWords` item ("إحدى") since it is a distinct irregular
// numeral/pronoun form worth teaching, not a simple inflection of an
// already-known word.
//
// Proper name: "الأُرْدُنِّ" ("Jordan") is tokenized pos:"proper" inline
// like other place names (own ch57's "الْمَدِيْنَةِ" convention) -- no
// `newWords`/`lemmas` entry.
//
// Vocabulary notes: "لم"، "لا"، "امرأة"، "جارية"، "حتى"، "لحق"، "الله"،
// "رأى"، "ولي"، "خلافة"، "أتى"، "من"، "قال"، "هذا"، "جاء"، "على"، "ما"،
// "جعل"، "أحق" (elative of "حق", reused with a token-level pos override,
// own ch57's أن/كل precedent extended)، "مسلم"، "أخرج" (own ch53, reused
// directly -- not a new Form IV entry since the corpus already has it)،
// "باع"، "ثمن" (own ch04)، "في"، "اشترى"، "سوق"، "بن"، "أخ"، "أهدى"،
// "إلى"، "أكل"، "الآن"، "طاب"، "دخل"، "بنت"، "وضع"، "يد"، "فم"، "شأن"،
// "كان"، "عند"، "شيء"، "تعشى"، "إلا"، "شم"، "بكى"، "ثم"، "نفع"، "أب"،
// "نار"، "علا"، "صوت"، "بيت"، "مال"، "رسول"، "إذا"، "حاجة"، "كتب"، "صار"،
// "نفس"، "دعا"، "سراج"، "قد"، "أغنى"، "وجد"، "فقير"، "بلاد"، "أحد"، "أخذ"،
// "صدقة"، "كان"، "أخر"، "يوم"، "غد"، "عجز"، "بعض"، "إخوة"، "أمير"،
// "مؤمن"، "لو"، "ركب"، "من" (interrogative "who"), "قضى"، "شغل"، "كيف"،
// "واحد"، "اجتمع"، "مات"، "سنة" are all already known and reused per the
// notes above.
export const CHAPTER = {
  id: "ch58",
  title: {
    ar: "الْخَلِيْفَةُ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ (٢)",
    en: "The Caliph Umar bin Abdul Aziz (2)"
  },
  pages: [194, 195],
  newWords: [
    "أحدث", "دابة", "ضاحك", "لقي", "سلة", "رطب", "علام", "بريد", "إحدى",
    "حاضنة", "عدس", "بصل", "كره", "أرجع", "حلي", "زوجة", "مزرعة", "عامة",
    "شمع", "تروح", "ثقل"
  ],
  lemmas: {
    "أحدث": { root: "ح د ث", pos: "verb", gloss: "to acquire, bring about (something new)" },
    "دابة": {
      root: "د ب ب", pos: "noun", gloss: "a mount, riding animal",
      book_note: "دَابَّة جمع دَوَابّ: مَا يُرْكَبُ من الحيوان كالفرس والبغل."
    },
    "ضاحك": { root: "ض ح ك", pos: "adj", gloss: "laughing" },
    "لقي": { root: "ل ق ي", pos: "verb", gloss: "to meet" },
    "سلة": { root: "س ل ل", pos: "noun", gloss: "a basket" },
    "رطب": { root: "ر ط ب", pos: "noun", gloss: "fresh dates" },
    "علام": { pos: "adv", gloss: "for what reason, why" },
    "بريد": { root: "ب ر د", pos: "noun", gloss: "the postal service, courier post" },
    "إحدى": { pos: "num", gloss: "one (of two, feminine)" },
    "حاضنة": {
      root: "ح ض ن", pos: "noun", gloss: "a nanny, nurse",
      book_note: "حَاضِنَة جمع حَوَاضِن: المرأة التي تقوم على تربية الصغير."
    },
    "عدس": { root: "ع د س", pos: "noun", gloss: "lentils" },
    "بصل": { root: "ب ص ل", pos: "noun", gloss: "onion" },
    "كره": { root: "ك ر ه", pos: "verb", gloss: "to dislike, find distasteful" },
    "أرجع": { root: "ر ج ع", pos: "verb", gloss: "to restore, give back" },
    "حلي": { root: "ح ل ي", pos: "noun", gloss: "jewelry, ornaments" },
    "زوجة": { root: "ز و ج", pos: "noun", gloss: "wife" },
    "مزرعة": { root: "ز ر ع", pos: "noun", gloss: "a farm" },
    "عامة": { root: "ع م م", pos: "noun", gloss: "the public, the general people" },
    "شمع": { root: "ش م ع", pos: "noun", gloss: "wax, a candle" },
    "تروح": { root: "ر و ح", pos: "verb", gloss: "to relax, take a stroll" },
    "ثقل": { root: "ث ق ل", pos: "verb", gloss: "to become heavy, burdensome" },
  },
  paragraphs: [
    {
      en: "Umar never acquired a new mount, wife, or slave-girl from the time he assumed office until he met Allah, and he was never once seen laughing from the day he took the caliphate until the day he met his Lord.",
      sentences: [
        {
          id: "qr2-58-001",
          ar: "وَلَمْ يُحْدِثْ عُمَرُ مُنْذُ وَلِيَ دَابَّةً وَلاَ امْرَأَةً وَلاَ جَارِيَةً حَتَّىٰ لَحِقَ بِاللهِ،",
          en: "Umar never acquired a new mount, wife, or slave-girl from the time he assumed office until he met Allah,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "and not" },
            { surface: "يُحْدِثْ", lemma: "أحدث", pos: "verb", features: "impf.3ms", root: "ح د ث", gloss: "acquire, bring about (something new)" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "مُنْذُ", lemma: "منذ", pos: "prep", gloss: "since" },
            { surface: "وَلِيَ", lemma: "ولي", pos: "verb", features: "perf.3ms", gloss: "he assumed (office)" },
            { surface: "دَابَّةً", lemma: "دابة", pos: "noun", features: "indef.acc.f", root: "د ب ب", gloss: "a mount, riding animal" },
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "nor" },
            { surface: "امْرَأَةً", lemma: "امرأة", pos: "noun", features: "indef.acc.f", gloss: "a wife" },
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "nor" },
            { surface: "جَارِيَةً", lemma: "جارية", pos: "noun", features: "indef.acc.f", gloss: "a slave-girl" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "until" },
            { surface: "لَحِقَ", lemma: "لحق", pos: "verb", features: "perf.3ms", gloss: "he joined, met" },
            { surface: "بِاللهِ", lemma: "الله", pos: "proper", features: "prep.gen", gloss: "Allah" },
          ],
        },
        {
          id: "qr2-58-002",
          ar: "وَلَمْ يُرَ ضَاحِكاً مُنْذُ وَلِيَ الْخِلاَفَةَ حَتَّىٰ لَقِيَ اللهَ.",
          en: "and he was never once seen laughing from the time he assumed the caliphate until he met Allah.",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "and not" },
            { surface: "يُرَ", lemma: "رأى", pos: "verb", features: "pass.impf.3ms", gloss: "was seen" },
            { surface: "ضَاحِكاً", lemma: "ضاحك", pos: "adj", features: "indef.acc", root: "ض ح ك", gloss: "laughing" },
            { surface: "مُنْذُ", lemma: "منذ", pos: "prep", gloss: "since" },
            { surface: "وَلِيَ", lemma: "ولي", pos: "verb", features: "perf.3ms", gloss: "he assumed" },
            { surface: "الْخِلاَفَةَ", lemma: "خلافة", pos: "noun", features: "def.acc.f", gloss: "the caliphate" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "until" },
            { surface: "لَقِيَ", lemma: "لقي", pos: "verb", features: "perf.3ms", root: "ل ق ي", gloss: "he met" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", gloss: "Allah" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا لَمْ يُحْدِثْ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ مُنْذُ وَلِيَ الْخِلاَفَةَ؟",
          options: ["دَابَّةً وَلاَ امْرَأَةً وَلاَ جَارِيَةً", "كُتُباً وَلاَ عِلْماً", "أَصْدِقَاءَ جُدُداً", "بُيُوْتاً وَلاَ أَرَاضِيَ"],
          answer: 0,
          qEn: "What did Umar bin Abdul Aziz never acquire from the time he took the caliphate?",
          optionsEn: ["A new mount, wife, or slave-girl", "Books or knowledge", "New friends", "Houses or lands"],
        },
      ],
    },
    {
      lines: true,
      en: "Two baskets of fresh dates arrived for him from Jordan. He asked what they were, and was told they were dates from Jordan, brought on the postal service's mounts. He said that Allah had not made him more entitled to the postal mounts than the rest of the Muslims, so he had them taken out and sold, with the price put toward the mounts' fodder; his nephew bought them back in the market and gave him one basket as a gift, and only then did he eat, saying: 'Now it is pleasant to eat.'",
      sentences: [
        {
          id: "qr2-58-003",
          ar: "وَأَتَتْهُ سَلَّتَا رُطَبٍ مِنَ الأُرْدُنِّ،",
          en: "Two baskets of fresh dates arrived for him from Jordan,",
          tokens: [
            { surface: "وَأَتَتْهُ", lemma: "أتى", pos: "verb", features: "conj+perf.3fs+3ms", gloss: "and there came to him" },
            { surface: "سَلَّتَا", lemma: "سلة", pos: "noun", features: "nom.f.du", root: "س ل ل", gloss: "two baskets (of)" },
            { surface: "رُطَبٍ", lemma: "رطب", pos: "noun", features: "indef.gen", gloss: "fresh dates" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "الأُرْدُنِّ", lemma: "الأردن", pos: "proper", features: "def.gen", gloss: "Jordan" },
          ],
        },
        {
          id: "qr2-58-004",
          ar: "فَقَالَ: مَا هَذَا؟",
          en: "so he said: 'What is this?'",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "مَا", lemma: "ما", pos: "part", gloss: "what" },
            { surface: "هَذَا", lemma: "هذا", pos: "dem", features: "m", gloss: "(is) this" },
          ],
        },
        {
          id: "qr2-58-005",
          ar: "قَالُوا: رُطَبٌ مِنَ الأُرْدُنِّ،",
          en: "They said: 'Fresh dates, from Jordan,'",
          tokens: [
            { surface: "قَالُوا", lemma: "قال", pos: "verb", features: "perf.3mp", gloss: "they said" },
            { surface: "رُطَبٌ", lemma: "رطب", pos: "noun", features: "indef.nom", gloss: "fresh dates" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "الأُرْدُنِّ", lemma: "الأردن", pos: "proper", features: "def.gen", gloss: "Jordan" },
          ],
        },
        {
          id: "qr2-58-006",
          ar: "قَالَ: عَلاَمَ جِيْءَ بِهِ؟",
          en: "He said: 'On what were they brought here?'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "عَلاَمَ", lemma: "علام", pos: "adv", gloss: "for what reason" },
            { surface: "جِيْءَ", lemma: "جاء", pos: "verb", features: "pass.perf.3ms", gloss: "was it brought" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "here" },
          ],
        },
        {
          id: "qr2-58-007",
          ar: "قَالُوْا: عَلَىٰ دَوَابِّ الْبَرِيْدِ.",
          en: "They said: 'On the postal service's mounts.'",
          tokens: [
            { surface: "قَالُوْا", lemma: "قال", pos: "verb", features: "perf.3mp", gloss: "they said" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "on" },
            { surface: "دَوَابِّ", lemma: "دابة", pos: "noun", features: "gen.pl.constr", gloss: "the mounts (of)" },
            { surface: "الْبَرِيْدِ", lemma: "بريد", pos: "noun", features: "def.gen", gloss: "the postal service" },
          ],
        },
        {
          id: "qr2-58-008",
          ar: "قَالَ: فَمَا جَعَلَنِيَ اللهُ أَحَقَّ بِدَوَابِّ الْبَرِيْدِ مِنَ الْمُسْلِمِيْنَ،",
          en: "He said: 'Allah has not made me more entitled to the postal mounts than the rest of the Muslims,'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "فَمَا", lemma: "ما", pos: "part", features: "conj", gloss: "Allah has not" },
            { surface: "جَعَلَنِيَ", lemma: "جعل", pos: "verb", features: "perf.3ms+1s", gloss: "made me" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", gloss: "Allah" },
            { surface: "أَحَقَّ", lemma: "حق", pos: "adj", features: "acc", gloss: "more entitled" },
            { surface: "بِدَوَابِّ", lemma: "دابة", pos: "noun", features: "prep.gen.pl.constr", gloss: "to the mounts (of)" },
            { surface: "الْبَرِيْدِ", lemma: "بريد", pos: "noun", features: "def.gen", gloss: "the postal service" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "than" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "def.gen.pl", gloss: "the Muslims" },
          ],
        },
        {
          id: "qr2-58-009",
          ar: "أَخْرِجُوْهُمَا فَبِيْعُوْهُمَا،",
          en: "'take them both out and sell them,'",
          tokens: [
            { surface: "أَخْرِجُوْهُمَا", lemma: "أخرج", pos: "verb", features: "imp.2mp+3d", gloss: "take the two of them out" },
            { surface: "فَبِيْعُوْهُمَا", lemma: "باع", pos: "verb", features: "conj+imp.2mp+3d", gloss: "and sell the two of them" },
          ],
        },
        {
          id: "qr2-58-010",
          ar: "وَاجْعَلُوْا ثَمَنَهُمَا فِي عَلَفِ دَوَابِّ الْبَرِيْدِ،",
          en: "'and put their price toward the postal mounts' fodder,'",
          tokens: [
            { surface: "وَاجْعَلُوْا", lemma: "جعل", pos: "verb", features: "conj+imp.2mp", gloss: "and put" },
            { surface: "ثَمَنَهُمَا", lemma: "ثمن", pos: "noun", features: "acc+3d", gloss: "the price of the two of them" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "toward" },
            { surface: "عَلَفِ", lemma: "علف", pos: "noun", features: "gen.constr", gloss: "the fodder (of)" },
            { surface: "دَوَابِّ", lemma: "دابة", pos: "noun", features: "gen.pl.constr", gloss: "the mounts (of)" },
            { surface: "الْبَرِيْدِ", lemma: "بريد", pos: "noun", features: "def.gen", gloss: "the postal service" },
          ],
        },
        {
          id: "qr2-58-011",
          ar: "وَاشْتَرَاهُمَا فِي السُّوْقِ ابْنُ أَخِيْهِ وَأَهْدَىٰ إِحْدَاهُمَا إِلَيْهِ،",
          en: "his nephew bought them back in the market and gave one of them to him as a gift,",
          tokens: [
            { surface: "وَاشْتَرَاهُمَا", lemma: "اشترى", pos: "verb", features: "conj+perf.3ms+3d", gloss: "and ... bought the two of them" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "السُّوْقِ", lemma: "سوق", pos: "noun", features: "def.gen", gloss: "the market" },
            { surface: "ابْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "the son (of)" },
            { surface: "أَخِيْهِ", lemma: "أخ", pos: "noun", features: "gen+3ms", gloss: "his brother" },
            { surface: "وَأَهْدَىٰ", lemma: "أهدى", pos: "verb", features: "conj+perf.3ms", gloss: "and gave as a gift" },
            { surface: "إِحْدَاهُمَا", lemma: "إحدى", pos: "num", features: "acc.f+3d", gloss: "one of the two" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
          ],
        },
        {
          id: "qr2-58-012",
          ar: "فَأَكَلَ وَقَالَ: الآنَ طَابَ أَكْلُهُ.",
          en: "and only then did he eat, saying: 'Now it is pleasant to eat.'",
          tokens: [
            { surface: "فَأَكَلَ", lemma: "أكل", pos: "verb", features: "conj+perf.3ms", gloss: "and (only then) he ate" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "and said" },
            { surface: "الآنَ", lemma: "الآن", pos: "adv", gloss: "now" },
            { surface: "طَابَ", lemma: "طاب", pos: "verb", features: "perf.3ms", gloss: "became pleasant" },
            { surface: "أَكْلُهُ", lemma: "أكل", pos: "noun", features: "nom+3ms", gloss: "its eating" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا رَفَضَ عُمَرُ أَنْ يَأْكُلَ الرُّطَبَ أَوَّلاً؟",
          options: ["لِأَنَّهُ كَانَ لاَ يُحِبُّ الرُّطَبَ", "لِأَنَّهُ نُقِلَ عَلَى دَوَابِّ الْبَرِيدِ الَّتِي هِيَ لِلْمُسْلِمِيْنَ جَمِيْعاً", "لِأَنَّهُ كَانَ صَائِماً", "لِأَنَّهُ كَانَ فَاسِداً"],
          answer: 1,
          qEn: "Why did Umar refuse to eat the dates at first?",
          optionsEn: ["Because he did not like dates", "Because they had been carried on the postal mounts, which belong to all the Muslims", "Because he was fasting", "Because they had spoiled"],
        },
      ],
    },
    {
      en: "One night he went in to his daughters and found them covering their mouths with their hands. He asked the nanny what was wrong, and she said they had nothing to eat for supper but lentils and onions, and they were ashamed for their father to smell that on their breath. Umar wept, then said to them: 'My daughters, what good is it to you to eat fine foods while your father is led to the Fire because of it?' They wept until their voices rose, and Umar put his wife's jewelry into the public treasury and restored his farms to what they had been in the time of the Messenger ﷺ.",
      sentences: [
        {
          id: "qr2-58-013",
          ar: "وَدَخَلَ عَلَىٰ بَنَاتِهِ ذَاتَ لَيْلَةٍ،",
          en: "One night he went in to his daughters,",
          tokens: [
            { surface: "وَدَخَلَ", lemma: "دخل", pos: "verb", features: "conj+perf.3ms", gloss: "and he went in to" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "to" },
            { surface: "بَنَاتِهِ", lemma: "بنت", pos: "noun", features: "gen.pl+3ms", gloss: "his daughters" },
            { surface: "ذَاتَ", lemma: "ذات", pos: "noun", features: "acc.f", gloss: "one" },
            { surface: "لَيْلَةٍ", lemma: "ليلة", pos: "noun", features: "indef.gen.f", gloss: "night" },
          ],
        },
        {
          id: "qr2-58-014",
          ar: "فَوَضَعْنَ أَيْدِيَهُنَّ عَلَىٰ أَفْوَاهِهِنَّ،",
          en: "and he found them covering their mouths with their hands,",
          tokens: [
            { surface: "فَوَضَعْنَ", lemma: "وضع", pos: "verb", features: "conj+perf.3fp", gloss: "and they put" },
            { surface: "أَيْدِيَهُنَّ", lemma: "يد", pos: "noun", features: "acc.pl+3fp", gloss: "their hands" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "over" },
            { surface: "أَفْوَاهِهِنَّ", lemma: "فم", pos: "noun", features: "gen.pl+3fp", gloss: "their mouths" },
          ],
        },
        {
          id: "qr2-58-015",
          ar: "فَقَالَ لِلْحَاضِنَةِ: مَا شَأْنُهُنَّ؟",
          en: "'What is the matter with them?'",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "لِلْحَاضِنَةِ", lemma: "حاضنة", pos: "noun", features: "prep.def.gen", gloss: "to the nanny" },
            { surface: "مَا", lemma: "ما", pos: "part", gloss: "what" },
            { surface: "شَأْنُهُنَّ", lemma: "شأن", pos: "noun", features: "nom+3fp", gloss: "is the matter with them" },
          ],
        },
        {
          id: "qr2-58-016",
          ar: "قَالَتْ: لَمْ يَكُنْ عِنْدَهُنَّ شَيْءٌ يَتَعَشَّيْنَهُ إِلاَّ عَدَسٌ وَبَصَلٌ،",
          en: "She said: 'They had nothing to eat for supper but lentils and onion,",
          tokens: [
            { surface: "قَالَتْ", lemma: "قال", pos: "verb", features: "perf.3fs", gloss: "she said" },
            { surface: "لَمْ", lemma: "لم", pos: "part", gloss: "not" },
            { surface: "يَكُنْ", lemma: "كان", pos: "verb", features: "impf.3ms", gloss: "there was" },
            { surface: "عِنْدَهُنَّ", lemma: "عند", pos: "prep", features: "+3fp", gloss: "for them" },
            { surface: "شَيْءٌ", lemma: "شيء", pos: "noun", features: "indef.nom", gloss: "anything" },
            { surface: "يَتَعَشَّيْنَهُ", lemma: "تعشى", pos: "verb", features: "impf.3fp+3ms", gloss: "they could have for supper" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", gloss: "except" },
            { surface: "عَدَسٌ", lemma: "عدس", pos: "noun", features: "indef.nom", gloss: "lentils" },
            { surface: "وَبَصَلٌ", lemma: "بصل", pos: "noun", features: "conj+indef.nom", gloss: "and onion" },
          ],
        },
        {
          id: "qr2-58-017",
          ar: "فَكَرِهْنَ أَنْ تَشُمَّ ذٰلِكَ مِنْ أَفْوَاهِهِنَّ،",
          en: "and they hated for you to smell that on their breath,'",
          tokens: [
            { surface: "فَكَرِهْنَ", lemma: "كره", pos: "verb", features: "conj+perf.3fp", root: "ك ر ه", gloss: "and they disliked" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "تَشُمَّ", lemma: "شم", pos: "verb", features: "impf.2ms", gloss: "you would smell" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "m", gloss: "that" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "on" },
            { surface: "أَفْوَاهِهِنَّ", lemma: "فم", pos: "noun", features: "gen.pl+3fp", gloss: "their breath" },
          ],
        },
        {
          id: "qr2-58-018",
          ar: "فَبَكَىٰ عُمَرُ،",
          en: "So Umar wept,",
          tokens: [
            { surface: "فَبَكَىٰ", lemma: "بكى", pos: "verb", features: "conj+perf.3ms", gloss: "so he wept" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
          ],
        },
        {
          id: "qr2-58-019",
          ar: "ثُمَّ قَالَ لَهُنَّ: يَا بَنَاتِيْ مَا يَنْفَعُكُنَّ أَنْ تَعَشَّيْنَ الأَلْوَانَ وَيُمَرُّ بِأَبِيْكُنَّ إِلَىٰ النَّارِ،",
          en: "then said to them: 'My daughters, what good is it to you to eat fine food, while your father is led to the Fire because of it,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "لَهُنَّ", lemma: "ل", pos: "prep", features: "+3fp", gloss: "to them" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O" },
            { surface: "بَنَاتِيْ", lemma: "بنت", pos: "noun", features: "voc.pl+1s", gloss: "my daughters" },
            { surface: "مَا", lemma: "ما", pos: "part", gloss: "what" },
            { surface: "يَنْفَعُكُنَّ", lemma: "نفع", pos: "verb", features: "impf.3ms+2fp", gloss: "good does it do you" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "تَعَشَّيْنَ", lemma: "تعشى", pos: "verb", features: "impf.2fp", gloss: "you eat for supper" },
            { surface: "الأَلْوَانَ", lemma: "لون", pos: "noun", features: "def.acc.pl", gloss: "fine varieties (of food)" },
            { surface: "وَيُمَرُّ", lemma: "مر", pos: "verb", features: "conj+impf.3ms", gloss: "while ... is led" },
            { surface: "بِأَبِيْكُنَّ", lemma: "أب", pos: "noun", features: "prep.gen+2fp", gloss: "your father" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "النَّارِ", lemma: "نار", pos: "noun", features: "def.gen.f", gloss: "the Fire" },
          ],
        },
        {
          id: "qr2-58-020",
          ar: "فَبَكَيْنَ حَتَّىٰ عَلَتْ أَصْوَاتُهُنَّ،",
          en: "So they wept until their voices rose,",
          tokens: [
            { surface: "فَبَكَيْنَ", lemma: "بكى", pos: "verb", features: "conj+perf.3fp", gloss: "so they wept" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "until" },
            { surface: "عَلَتْ", lemma: "علا", pos: "verb", features: "perf.3fs", gloss: "rose" },
            { surface: "أَصْوَاتُهُنَّ", lemma: "صوت", pos: "noun", features: "nom.pl+3fp", gloss: "their voices" },
          ],
        },
        {
          id: "qr2-58-021",
          ar: "وَوَضَعَ عُمَرُ حَلْيَ زَوْجَتِهِ فِيْ بَيْتِ الْمَالِ،",
          en: "and Umar put his wife's jewelry into the public treasury,",
          tokens: [
            { surface: "وَوَضَعَ", lemma: "وضع", pos: "verb", features: "conj+perf.3ms", gloss: "and ... put" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "حَلْيَ", lemma: "حلي", pos: "noun", features: "acc.constr", root: "ح ل ي", gloss: "the jewelry (of)" },
            { surface: "زَوْجَتِهِ", lemma: "زوجة", pos: "noun", features: "gen+3ms", gloss: "his wife" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "into" },
            { surface: "بَيْتِ", lemma: "بيت", pos: "noun", features: "gen.constr", gloss: "the treasury (of)" },
            { surface: "الْمَالِ", lemma: "مال", pos: "noun", features: "def.gen", gloss: "the wealth" },
          ],
        },
        {
          id: "qr2-58-022",
          ar: "وَأَرْجَعَ مَزَارِعَهُ إِلَىٰ مَا كَانَتْ عَلَيْهِ فِيْ عَهْدِ الرَّسُوْلِ ﷺ.",
          en: "and restored his farms to what they had been in the time of the Messenger ﷺ.",
          tokens: [
            { surface: "وَأَرْجَعَ", lemma: "أرجع", pos: "verb", features: "conj+perf.3ms", root: "ر ج ع", gloss: "and restored" },
            { surface: "مَزَارِعَهُ", lemma: "مزرعة", pos: "noun", features: "acc.pl+3ms", gloss: "his farms" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "مَا", lemma: "ما", pos: "rel", gloss: "what" },
            { surface: "كَانَتْ", lemma: "كان", pos: "verb", features: "perf.3fs", gloss: "they had been" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "+3ms", gloss: "upon" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "عَهْدِ", lemma: "عهد", pos: "noun", features: "gen.constr", gloss: "the time (of)" },
            { surface: "الرَّسُوْلِ", lemma: "رسول", pos: "noun", features: "def.gen", gloss: "the Messenger" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَتْ بَنَاتُ عُمَرَ يُغَطِّيْنَ أَفْوَاهَهُنَّ؟",
          options: ["لِأَنَّهُنَّ كُنَّ مَرِيْضَاتٍ", "لِأَنَّهُنَّ لَمْ يَجِدْنَ لِلْعَشَاءِ إِلاَّ عَدَساً وَبَصَلاً وَكَرِهْنَ أَنْ يَشُمَّ أَبُوْهُنَّ ذٰلِكَ", "لِأَنَّهُنَّ كُنَّ خَجِلاَتٍ مِنْ ضُيُوْفٍ", "لِأَنَّهُنَّ كُنَّ يَضْحَكْنَ"],
          answer: 1,
          qEn: "Why were Umar's daughters covering their mouths?",
          optionsEn: ["Because they were ill", "Because they had had nothing for supper but lentils and onion, and hated for their father to smell it", "Because they were shy in front of guests", "Because they were laughing"],
        },
      ],
    },
    {
      en: "When it concerned the public's affairs he would write by the wax candle, but when it was his own personal need he would call for his own lamp.",
      sentences: [
        {
          id: "qr2-58-023",
          ar: "وَإِذَا كَانَ فِيْ حَوَائِجِ الْعَامَّةِ كَتَبَ عَلَىٰ الشَّمْعِ،",
          en: "When it concerned the public's affairs he would write by the wax candle,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj", gloss: "and when" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", gloss: "it was" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "concerning" },
            { surface: "حَوَائِجِ", lemma: "حاجة", pos: "noun", features: "gen.pl.constr", gloss: "the needs (of)" },
            { surface: "الْعَامَّةِ", lemma: "عامة", pos: "noun", features: "def.gen.f", root: "ع م م", gloss: "the public" },
            { surface: "كَتَبَ", lemma: "كتب", pos: "verb", features: "perf.3ms", gloss: "he would write" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "by" },
            { surface: "الشَّمْعِ", lemma: "شمع", pos: "noun", features: "def.gen", root: "ش م ع", gloss: "the wax candle" },
          ],
        },
        {
          id: "qr2-58-024",
          ar: "وَإِذَا صَارَ إِلَىٰ حَاجَةِ نَفْسِهِ دَعَا بِسِرَاجِهِ.",
          en: "but when it was his own personal need, he would call for his own lamp.",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "part", features: "conj", gloss: "but when" },
            { surface: "صَارَ", lemma: "صار", pos: "verb", features: "perf.3ms", gloss: "it turned to" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "حَاجَةِ", lemma: "حاجة", pos: "noun", features: "gen.constr", gloss: "the need (of)" },
            { surface: "نَفْسِهِ", lemma: "نفس", pos: "noun", features: "gen+3ms", gloss: "himself" },
            { surface: "دَعَا", lemma: "دعا", pos: "verb", features: "perf.3ms", gloss: "he called for" },
            { surface: "بِسِرَاجِهِ", lemma: "سراج", pos: "noun", features: "prep.gen+3ms", gloss: "his (own) lamp" },
          ],
        },
      ],
      checks: [
        {
          q: "بِأَيِّ ضَوْءٍ كَانَ عُمَرُ يَكْتُبُ فِيْ حَوَائِجِهِ الْخَاصَّةِ؟",
          options: ["الشَّمْعِ", "سِرَاجِهِ الْخَاصِّ", "ضَوْءِ الْقَمَرِ", "لاَ يَكْتُبُ لَيْلاً"],
          answer: 1,
          qEn: "By what light did Umar write for his own personal needs?",
          optionsEn: ["The wax candle", "His own private lamp", "Moonlight", "He did not write at night"],
        },
      ],
    },
    {
      en: "Umar bin Abdul Aziz made the people so wealthy that no poor person could be found in the lands of the Muslims, nor anyone left to receive charity.",
      sentences: [
        {
          id: "qr2-58-025",
          ar: "وَقَدْ أَغْنَىٰ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ النَّاسَ،",
          en: "Umar bin Abdul Aziz made the people so wealthy,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj", gloss: "and indeed" },
            { surface: "أَغْنَىٰ", lemma: "أغنى", pos: "verb", features: "perf.3ms", gloss: "made wealthy" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", gloss: "al-Aziz" },
            { surface: "النَّاسَ", lemma: "ناس", pos: "noun", features: "def.acc.pl", gloss: "the people" },
          ],
        },
        {
          id: "qr2-58-026",
          ar: "حَتَّىٰ لَمْ يُوْجَدْ فَقِيْرٌ فِيْ بِلاَدِ الْمُسْلِمِيْنَ،",
          en: "that no poor person could be found in the lands of the Muslims,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "that" },
            { surface: "لَمْ", lemma: "لم", pos: "part", gloss: "not" },
            { surface: "يُوْجَدْ", lemma: "وجد", pos: "verb", features: "pass.impf.3ms", gloss: "could be found" },
            { surface: "فَقِيْرٌ", lemma: "فقير", pos: "noun", features: "indef.nom", gloss: "a poor person" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "بِلاَدِ", lemma: "بلاد", pos: "noun", features: "gen.constr", gloss: "the lands (of)" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "def.gen.pl", gloss: "the Muslims" },
          ],
        },
        {
          id: "qr2-58-027",
          ar: "وَلَمْ يُوْجَدْ أَحَدٌ يَأْخُذُ الصَّدَقَاتِ.",
          en: "nor anyone left to receive charity.",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "nor" },
            { surface: "يُوْجَدْ", lemma: "وجد", pos: "verb", features: "pass.impf.3ms", gloss: "could be found" },
            { surface: "أَحَدٌ", lemma: "أحد", pos: "noun", features: "indef.nom", gloss: "anyone" },
            { surface: "يَأْخُذُ", lemma: "أخذ", pos: "verb", features: "impf.3ms", gloss: "who would take" },
            { surface: "الصَّدَقَاتِ", lemma: "صدقة", pos: "noun", features: "def.acc.pl", gloss: "the charity" },
          ],
        },
      ],
      checks: [
        {
          q: "مَا نَتِيْجَةُ عَدْلِ عُمَرَ بْنِ عَبْدِ الْعَزِيْزِ عَلَى النَّاسِ؟",
          options: ["زَادَتِ الْفَقْرُ", "لَمْ يُوْجَدْ فَقِيْرٌ وَلاَ مَنْ يَأْخُذُ الصَّدَقَاتِ", "هَرَبَ النَّاسُ مِنَ الْبِلاَدِ", "لَمْ يَتَغَيَّرْ شَيْءٌ"],
          answer: 1,
          qEn: "What was the result of Umar bin Abdul Aziz's justice for the people?",
          optionsEn: ["Poverty increased", "No poor person was found, nor anyone left to take charity", "The people fled the land", "Nothing changed"],
        },
      ],
    },
    {
      lines: true,
      en: "He never put off today's work for tomorrow, nor did he ever fall behind. One of his brothers said: 'O Commander of the Believers, if only you would ride out and take some rest.' He said: 'Then who would finish that day's business?' The brother said: 'You could finish it the next day.' He said: 'A single day's work is already heavy enough — how would it be if two days' work were combined?'",
      sentences: [
        {
          id: "qr2-58-028",
          ar: "وَكَانَ لاَ يُؤَخِّرُ عَمَلَ الْيَوْمِ لِلْغَدِّ،",
          en: "He never put off today's work for tomorrow,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and he never" },
            { surface: "لاَ", lemma: "لا", pos: "part", gloss: "not" },
            { surface: "يُؤَخِّرُ", lemma: "أخر", pos: "verb", features: "impf.3ms", gloss: "would delay" },
            { surface: "عَمَلَ", lemma: "عمل", pos: "noun", features: "acc.constr", gloss: "the work (of)" },
            { surface: "الْيَوْمِ", lemma: "يوم", pos: "noun", features: "def.gen", gloss: "today" },
            { surface: "لِلْغَدِّ", lemma: "غد", pos: "noun", features: "prep.def.gen", gloss: "to tomorrow" },
          ],
        },
        {
          id: "qr2-58-029",
          ar: "وَلاَ يَعْجَزُ،",
          en: "nor did he ever fall behind.",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj", gloss: "nor" },
            { surface: "يَعْجَزُ", lemma: "عجز", pos: "verb", features: "impf.3ms", gloss: "would he fall behind" },
          ],
        },
        {
          id: "qr2-58-030",
          ar: "قَالَ بَعْضُ إِخْوَتِهِ: يَا أَمِيْرَ الْمُؤْمِنِيْنَ!",
          en: "One of his brothers said: 'O Commander of the Believers!",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "said" },
            { surface: "بَعْضُ", lemma: "بعض", pos: "noun", features: "nom.constr", gloss: "one (of)" },
            { surface: "إِخْوَتِهِ", lemma: "إخوة", pos: "noun", features: "gen+3ms", gloss: "his brothers" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O" },
            { surface: "أَمِيْرَ", lemma: "أمير", pos: "noun", features: "voc.acc.constr", gloss: "Commander (of)" },
            { surface: "الْمُؤْمِنِيْنَ", lemma: "مؤمن", pos: "noun", features: "def.gen.pl", gloss: "the believers" },
          ],
        },
        {
          id: "qr2-58-031",
          ar: "لَوْ رَكِبْتَ فَتَرَوَّحْتَ،",
          en: "If only you would ride out and take some rest,'",
          tokens: [
            { surface: "لَوْ", lemma: "لو", pos: "part", gloss: "if only" },
            { surface: "رَكِبْتَ", lemma: "ركب", pos: "verb", features: "perf.2ms", gloss: "you rode out" },
            { surface: "فَتَرَوَّحْتَ", lemma: "تروح", pos: "verb", features: "conj+perf.2ms", root: "ر و ح", gloss: "and relaxed" },
          ],
        },
        {
          id: "qr2-58-032",
          ar: "قَالَ: فَمَنْ يَقْضِيْ شُغْلَ ذٰلِكَ الْيَوْمَ؟",
          en: "He said: 'Then who would finish that day's business?'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "فَمَنْ", lemma: "من", pos: "part", features: "conj", gloss: "then who" },
            { surface: "يَقْضِيْ", lemma: "قضى", pos: "verb", features: "impf.3ms", gloss: "would finish" },
            { surface: "شُغْلَ", lemma: "شغل", pos: "noun", features: "acc.constr", gloss: "the business (of)" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "m", gloss: "that" },
            { surface: "الْيَوْمَ", lemma: "يوم", pos: "noun", features: "def.acc", gloss: "day" },
          ],
        },
        {
          id: "qr2-58-033",
          ar: "قَالَ: تَقْضِيْهِ مِنَ الْغَدِ،",
          en: "He said: 'You could finish it the next day,'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "تَقْضِيْهِ", lemma: "قضى", pos: "verb", features: "impf.2ms+3ms", gloss: "you could finish it" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "on" },
            { surface: "الْغَدِ", lemma: "غد", pos: "noun", features: "def.gen", gloss: "the next day" },
          ],
        },
        {
          id: "qr2-58-034",
          ar: "قَالَ: لَقَدْ ثَقُلَ عَمَلُ يَوْمٍ وَاحِدٍ فَكَيْفَ إِذَا اجْتَمَعَ عَمَلُ يَوْمَيْنِ؟",
          en: "He said: 'A single day's work is already heavy — so how would it be if two days' work were combined?'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "لَقَدْ", lemma: "قد", pos: "part", gloss: "indeed" },
            { surface: "ثَقُلَ", lemma: "ثقل", pos: "verb", features: "perf.3ms", root: "ث ق ل", gloss: "is already heavy" },
            { surface: "عَمَلُ", lemma: "عمل", pos: "noun", features: "nom.constr", gloss: "the work (of)" },
            { surface: "يَوْمٍ", lemma: "يوم", pos: "noun", features: "indef.gen", gloss: "a day" },
            { surface: "وَاحِدٍ", lemma: "واحد", pos: "adj", features: "indef.gen", gloss: "single" },
            { surface: "فَكَيْفَ", lemma: "كيف", pos: "part", features: "conj", gloss: "so how" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "if" },
            { surface: "اجْتَمَعَ", lemma: "اجتمع", pos: "verb", features: "perf.3ms", gloss: "combined" },
            { surface: "عَمَلُ", lemma: "عمل", pos: "noun", features: "nom.constr", gloss: "the work (of)" },
            { surface: "يَوْمَيْنِ", lemma: "يوم", pos: "noun", features: "gen.du", gloss: "two days" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا رَفَضَ عُمَرُ اقْتِرَاحَ أَخِيْهِ بِأَنْ يَرْكَبَ وَيَتَرَوَّحَ؟",
          options: ["لِأَنَّهُ كَانَ يَكْرَهُ الرُّكُوْبَ", "لِأَنَّ ذٰلِكَ سَيُؤَخِّرُ عَمَلَ ذٰلِكَ الْيَوْمِ إِلَى الْغَدِ فَيَثْقُلُ", "لِأَنَّهُ كَانَ مَرِيْضاً", "لِأَنَّهُ لَمْ يَكُنْ يَثِقُ بِأَخِيْهِ"],
          answer: 1,
          qEn: "Why did Umar refuse his brother's suggestion to ride out and rest?",
          optionsEn: ["Because he disliked riding", "Because that would push that day's work to the next day and make it too heavy", "Because he was ill", "Because he did not trust his brother"],
        },
      ],
    },
    {
      en: "Umar bin Abdul Aziz died in the year 101 AH.",
      sentences: [
        {
          id: "qr2-58-035",
          ar: "مَاتَ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ سَنَةَ ١٠١ هـ.",
          en: "Umar bin Abdul Aziz died in the year 101 AH.",
          tokens: [
            { surface: "مَاتَ", lemma: "مات", pos: "verb", features: "perf.3ms", gloss: "died" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", gloss: "al-Aziz" },
            { surface: "سَنَةَ", lemma: "سنة", pos: "noun", features: "acc.f", gloss: "in the year (of)" },
            { surface: "١٠١", lemma: "١٠١", pos: "num", gloss: "101" },
            { surface: "هـ", lemma: "هـ", pos: "noun", gloss: "AH (of the Hijra)" },
          ],
        },
      ],
      checks: [
        {
          q: "فِيْ أَيِّ سَنَةٍ مَاتَ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ؟",
          options: ["سَنَةَ ٦١ هـ", "سَنَةَ ١٠١ هـ", "سَنَةَ ٨٥٣ هـ", "سَنَةَ ١١٠ هـ"],
          answer: 1,
          qEn: "In what year did Umar bin Abdul Aziz die?",
          optionsEn: ["61 AH", "101 AH", "853 AH", "110 AH"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "فَـ",
        post: "عُمَرُ",
        en: "So Umar wept.",
        options: ["بَكَى", "بَكَيْتُ", "بَكَتْ", "يَبْكِي"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — he wept.",
          "1st person singular — I wept.",
          "3rd person feminine singular — she wept.",
          "3rd person masculine singular, imperfect — he weeps.",
        ],
      },
      {
        type: "cloze",
        pre: "لَقَدْ",
        post: "عَمَلُ يَوْمٍ وَاحِدٍ",
        en: "A single day's work is already heavy.",
        options: ["ثَقُلَ", "ثَقُلْتُ", "ثَقُلَتْ", "يَثْقُلُ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — it became heavy.",
          "1st person singular — I became heavy.",
          "3rd person feminine singular — it (f.) became heavy.",
          "3rd person masculine singular, imperfect — it becomes heavy.",
        ],
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "مَزَارِعَهُ إِلَى مَا كَانَتْ عَلَيْهِ",
        en: "and he restored his farms to what they had been.",
        options: ["أَرْجَعَ", "أَرْجَعْتُ", "أَرْجَعَتْ", "يُرْجِعُ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — he restored.",
          "1st person singular — I restored.",
          "3rd person feminine singular — she restored.",
          "3rd person masculine singular, imperfect — he restores.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "بَكَى عُمَرُ",
        pre: "",
        post: "عُمَرُ",
        targetPerson: "هُنَّ",
        targetEn: "they (f.)",
        options: ["بَكَيْنَ", "بَكَتْ", "بَكَوْا", "تَبْكِي"],
        answer: 0,
        rationales: [
          "3rd person feminine plural, perfect — they (f.) wept.",
          "3rd person feminine singular — she wept.",
          "3rd person masculine plural — they (m.) wept.",
          "3rd person feminine singular, imperfect — she weeps.",
        ],
      },
      {
        type: "shift",
        base: "تَقْضِيْهِ مِنَ الْغَدِ",
        pre: "",
        post: "مِنَ الْغَدِ",
        targetPerson: "أَنَا",
        targetEn: "I",
        options: ["أَقْضِيْهِ", "تَقْضِيْهِ", "يَقْضِيْهِ", "نَقْضِيْهِ"],
        answer: 0,
        rationales: [
          "1st person singular, imperfect — I finish it.",
          "2nd person masculine singular — you finish it.",
          "3rd person masculine singular — he finishes it.",
          "1st person plural — we finish it.",
        ],
      },
    ],
  },
};

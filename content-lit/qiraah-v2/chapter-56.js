// القراءة الراشدة, volume two, chapter 56 (printed heading "٥٦") --
// سَفِيْنَةٌ عَلَى الْبَرِّ -- "A Ship on Land" (Mehmed II's famous overland
// portage of his fleet into the Golden Horn during the 1453 conquest of
// Constantinople).
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 187-190 (PDF page
// index == printed page number). Continues content-lit/qiraah-v2 after
// chapter-55.js.
//
// Paragraph granularity: the printed page lays this chapter out as many
// short, blank-line-separated one- or two-line blocks (a deliberately
// punchy narrative style -- rhetorical questions, twice-repeated "فَكَّرَ
// مُحَمَّدٌ، وَلَمْ يَعْجَزْ وَلَمْ يَيْأَسْ..." refrains building suspense
// before each of Mehmed's two engineering solutions). Each such block is
// treated as its own `paragraphs[]` entry (16 total) rather than merging
// them into fewer, larger paragraphs, since that block structure appears
// to be the author's own intended reading rhythm and each block reads as
// a complete beat. Every sentence is still split at each ، and . (and ؟/!)
// per the project's standing convention, so several of these paragraphs
// end up single-sentence.
//
// The refrain repeats near-verbatim twice (qr2-56-013..015 vs
// qr2-56-018..019) but is NOT transcribed identically -- the first
// occurrence has a comma before "وَوَجَدَ حِيْلَةً" (سَيَّرَ محمدٌ ، ولم
// يعجز ولم ييأس ، ووجد حيلةً!), the second does not (فَكَّرَ محمدٌ ، ولم
// يعجز ولم ييأس ووجد حيلةً!). Verified by side-by-side crop-zoom of both
// occurrences on p.189 -- transcribed exactly as printed, comma
// difference and all, rather than "corrected" to match.
//
// Two ﴿ ﴾-bracketed Qur'anic quotations appear (8:60 and 30:4) -- this is
// the first chapter in this book to actually contain one (chapter-41.js
// and chapter-43.js only *discuss* the ﴿﴾/«» distinction in their own
// header comments; neither has a real ﴿﴾ citation). Per
// QASAS_AGENT_BRIEF.md §9's documented workaround for the open
// "Qur'an-quotation tagging" problem (no schema field exists to mark a
// sentence as Qur'anic and exempt it from the build stage's decoy
// picker), each verse is kept as its own sentence for readability but
// deliberately tokenized into only 2 coarse (multi-word) tokens rather
// than one token per word, so the sentence has fewer than 3 tokens and is
// automatically disqualified from "at least 3-9 tokens" buildable-sentence
// eligibility regardless of its case-marked nouns. This trades hover-gloss
// granularity for safety against the verse being pulled into a build/drill
// frame -- flagged here per the brief's checklist item for whoever
// resolves §9 properly. validate-chapter.mjs was updated alongside this
// chapter to also strip the ornamental ﴿﴾ brackets themselves (treated as
// document furniture around the quotation, exactly like the «» guillemets
// it already stripped), since the brackets are kept in `ar` for visual
// fidelity but never tokenized.
//
// Homographs / one-lemma-two-pos reuses (existing lemma key, token-level
// pos/gloss override, no `newWords`/`lemmas` entry since none of these
// are footnoted on their page):
//   - "عُدَّةً" (qr2-56-023, noun "equipment, gear") reuses the lemma key
//     "عدة" already taught as an adjective ("several, a number of," own
//     ch54) -- same spelling, unrelated sense.
//   - "مُرَكَّباً" (qr2-56-030, adj/participle "composed of, made up of")
//     reuses the lemma key "مركب" already taught as a noun ("a vessel,
//     raft," own ch50) -- same root ر ك ب and same bare spelling, related
//     but distinct sense (the passive-participle pattern coincides with
//     the noun's own morphology).
//   - "الذَّهَبِ" (qr2-56-034, noun "gold," in "خَلِيْجَ قَرْنِ الذَّهَبِ" =
//     the Golden Horn) reuses the lemma key "ذهب" already taught
//     extensively as the verb "to go" -- classical Arabic's ذ-ه-ب root
//     genuinely covers both senses under one spelling.
//   - "الْعُظْمَى" (qr2-56-006, fem. elative "greatest/mightiest") reuses
//     the lemma key "أعظم" -- the masc. elative already introduced as its
//     own `newWords` entry in own ch55 -- rather than either "عظيم" (base
//     adjective, already known, ch09) or a fresh entry, matching how this
//     book's adjectives generally reuse one lemma across gender-inflected
//     surfaces (e.g. own ch53's "طَوِيْلَةً" reusing masc. "طويل").
//
// Re-footnote (lemma already known, footnoted again here with new
// information -- gets a `lemmas` entry carrying the new `book_note`
// without being re-added to `newWords`, per the convention established
// in own ch54/55): "سَقَطَ" (already known, "to fall," v1 ch02/ch07) is
// footnoted on p.189 in its idiomatic construction "سُقِطَ فِيْ أَيْدِيْهِمْ"
// ("they fell into their hands" = they were bewildered/confounded) --
// footnote (٧), transcribed verbatim below.
//
// Correction made during vocabulary cross-checking: "أَخْبَرَكَ" (qr2-56-002,
// "he told you") was initially assumed to need its own new `newWords`
// entry as a Form IV derivative of the already-known noun "خبر" ("news,
// report," own ch44) -- but the cross-check script found "أخبر" itself
// already has a global `lemmas` entry (verb, "to inform," v1
// ch02/ch08/ch11/ch22), so it was removed from `newWords`/`lemmas` here
// and the token below simply carries its own inline gloss, reusing that
// existing lemma key like any other already-known word.
//
// Distinct-derived-form new entries (naturally different spelling from an
// already-known root-mate, so kept as their own `newWords` entries per
// the ch52/53/55 precedent): "فَاتِحَ" (qr2-56-003, "conqueror") is new
// despite the verb "فتح" ("to
// conquer," own ch49) being known -- active-participle spelling adds a
// long alif. "سَيَّرَ" (qr2-56-004, "to dispatch, make travel") is new
// despite "سار" ("to travel," v1 ch08) being known -- Form II causative,
// differently spelled. "قَدَّرَ" (qr2-56-008, "to decree, ordain") is kept
// as its own entry distinguished from BOTH existing "قدر" senses already
// in the corpus (noun "pot," v1 ch06/own ch52/55; and Form I verb "to be
// able," v1 ch10) -- the doubled دّ of this Form II verb is a real
// spelling difference this project's lemma keys do track (cf. existing
// shadda-bearing keys like "حلّ"/"فرّق" elsewhere in the corpus), so
// "قدّر" (with shadda) avoids colliding with either. "مِدْفَعِيَّةٌ"
// (qr2-56-026, "artillery") is new despite "مدفع" ("a cannon," own ch52)
// being known -- the ـية collective/relational suffix is a distinct
// spelling. "قِيَادَتِهِ" (qr2-56-028, "his leadership/command") is new
// despite "قائد" ("a commander," own ch49) being known -- related root
// ق و د, differently spelled masdar. "مَرْمَاهُ" (qr2-56-032, "its range")
// is new despite "رمى" ("to shoot, throw," own ch52) being known --
// place-noun pattern, distinct spelling. "الْعُبُوْرُ" (qr2-56-051, noun
// "crossing") is new despite "عبر" ("to cross," own ch49) being known --
// masdar spelling distinct from the verb, per the same
// distinctly-spelled-derived-noun handling as own ch53's
// "احتوى"/unknown-حوى case. "مَدْخَلُ" (qr2-56-040, "entrance") is new
// despite "دخل" ("to enter," v1 ch08) being known -- place-noun pattern.
// "حَرْبِيَّةٍ" (qr2-56-021, adj "military, war-") is new despite "حرب"
// ("war," v1 ch48) being known -- ـية nisba suffix, distinct spelling.
// "الْمَنِيْعَةُ" (qr2-56-039, adj "impregnable") is new despite "منع" ("to
// prevent, withhold," v1 ch07) being known -- فعيل-pattern adjective,
// distinct spelling. "بِالسَّلاَسِلِ" (qr2-56-022, noun "chains") gets its
// own `newWords` entry "سلسلة" distinct from the verb "سلسل" ("to chain,"
// introduced earlier in the same sentence) -- discovered mid-tokenization
// that the noun hadn't been listed alongside the verb it's built from.
//
// Numbers this chapter introduces: "سَبْعِيْنَ" (seventy), "ثَلاَثُمِئَةِ"
// (three hundred, transcribed as printed -- one fused word), "مِئَةِ"
// (hundred, standalone) -- "سِتَّ" (six) and "الْعِشْرِيْنَ"/"الرَّابِعَةِ"
// (twentieth/fourth) were already known (v1 ch01/ch04, ch10/ch11).
//
// Proper names (Muhammad, Qasim, Uthman, "Pasha," Murad) are tokenized
// pos:"proper" inline with their own gloss and no root, per the
// established convention that bare personal names don't get global
// `lemmas`/`newWords` entries (own ch43's Qatadah/Hammad/Zayd precedent)
// -- "مُحَمَّدٌ" and "قَاسِم" specifically reuse the same lemma keys own
// ch51 already established for Muhammad bin Qasim ath-Thaqafi, now
// referring to different people of the same names (Mehmed II and Qasim
// Pasha respectively) -- proper-noun lemma keys track the *name*, not the
// referent, throughout this corpus. By contrast "قُسْطُنْطِيْنِيَّة"
// (Constantinople) and "تُرْكِيَّا" (Turkey) -- significant, repeatedly-
// occurring place names central to this chapter -- DO get `newWords`/
// `lemmas` entries, matching how own ch55 treated "دِجْلَة"/"فُرَات"
// (Tigris/Euphrates) as `newWords` while ch43 left personal names inline
// only.
//
// Vocabulary notes: "سَمِعْتَ"/"سمع"، "صدق"، "إذا"، "أحد"، "ظنّ"، "قال"،
// "حق"، "أول" (already known; reused for "الأَوَّلِيْنَ", "our forefathers")،
// "لكن"، "ثاني"، "عثماني"، "غزا"، "عرب"، "فتح" (reused both as the verb
// and, via the one-lemma-two-pos pattern, as the masdar noun "الْفَتْحُ")،
// "قدر"، "آل"، "رابع"، "عشرين"، "عمر"، "فضل"، "آتى" (reused for
// "يُؤْتِيْهِ")، "شاء"، "زحف"، "عدة"، "قوة"، "تحت"، "ثلاثمئة"، "مقاتل"،
// "مع"، "مدفع"، "أوروبا"، "أضخم"، "مرمى"، "ميل"، "أسطول"، "مركب"، "مئة"،
// "سلسل"، "خليج"، "قرن"، "ذهب"، "مدخل"، "عبر"، "فكر"، "عجز"، "يئس"،
// "حيلة"، "يمكن"، "عبور"، "جهة"، "نقل"، "تلك"، "أخشاب"، "شحم"، "طلى"،
// "أملس"، "أزلق"، "راع"، "أهل"، "أرسى"، "ساحل"، "أخذ"، "عاصمة"، "دولة"،
// "بيزنطية"، "نصرانية"، "أمام"، "قائد"، "زال"، "مدينة"، "تركيا"، "سنة"،
// "يوم"، "أمر"، "قبل"، "بعد"، "هكذا" are all newly introduced or reused
// per the notes above.
export const CHAPTER = {
  id: "ch56",
  title: {
    ar: "سَفِيْنَةٌ عَلَى الْبَرِّ",
    en: "A Ship on Land"
  },
  pages: [187, 188, 189, 190],
  newWords: [
    "ثاني", "فاتح", "سيّر", "سبعين", "عثماني", "قسطنطينية", "قدّر",
    "آل", "رابع", "أعد", "قوة", "قيادة", "ثلاثمئة", "مقاتل", "مدفعية",
    "أوروبا", "أضخم", "مرمى", "أسطول", "مئة", "حربية", "سلسل", "خليج",
    "قرن", "مدخل", "يئس", "حيلة", "عبور", "نقل", "أخشاب", "طلى", "أملس",
    "أزلق", "راع", "أرسى", "ساحل", "عاصمة", "بيزنطية", "نصرانية", "منيع",
    "تركيا", "هكذا", "سلسلة"
  ],
  lemmas: {
    "ثاني": { root: "ث ن ي", pos: "adj", gloss: "second" },
    "فاتح": { root: "ف ت ح", pos: "noun", gloss: "conqueror" },
    "سيّر": { root: "س ي ر", pos: "verb", gloss: "to dispatch, make travel" },
    "سبعين": { root: "س ب ع", pos: "num", gloss: "seventy" },
    "عثماني": { root: "", pos: "adj", gloss: "Ottoman" },
    "قسطنطينية": { root: "", pos: "proper", gloss: "Constantinople" },
    "قدّر": { root: "ق د ر", pos: "verb", gloss: "to decree, ordain, determine" },
    "آل": { root: "أ و ل", pos: "noun", gloss: "family, house (of)" },
    "رابع": { root: "ر ب ع", pos: "adj", gloss: "fourth" },
    "أعد": { root: "ع د د", pos: "verb", gloss: "to prepare, make ready" },
    "قوة": { root: "ق و ي", pos: "noun", gloss: "strength, power" },
    "قيادة": { root: "ق و د", pos: "noun", gloss: "leadership, command" },
    "ثلاثمئة": { root: "", pos: "num", gloss: "three hundred" },
    "مقاتل": { root: "ق ت ل", pos: "noun", gloss: "fighter, combatant" },
    "مدفعية": { root: "د ف ع", pos: "noun", gloss: "artillery" },
    "أوروبا": { root: "", pos: "proper", gloss: "Europe" },
    "أضخم": {
      root: "ض خ م", pos: "adj", gloss: "more massive, bigger",
      book_note: "أَضْخَمُ منه: أَعْظَمُ منه."
    },
    "مرمى": {
      root: "ر م ي", pos: "noun", gloss: "range, throwing distance",
      book_note: "مَرْمَى جمع مَرَام: مَا تُرْمَى إليه السهام ونحوها."
    },
    "أسطول": {
      root: "", pos: "noun", gloss: "fleet",
      book_note: "أُسْطُول جمع أَسَاطِيل: مجموعة من السُّفُنِ تُعَدُّ للحرب أو للنقل التجاري."
    },
    "مئة": { root: "م أ ي", pos: "num", gloss: "hundred" },
    "حربية": { root: "ح ر ب", pos: "adj", gloss: "military, war-related" },
    "سلسل": {
      root: "س ل س ل", pos: "verb", gloss: "to chain",
      book_note: "سَلْسَلَ يُسَلْسِلُ الأشياءَ: وَصَلَ بَعْضَها ببعضٍ كأنها سِلْسِلة."
    },
    "خليج": { root: "خ ل ج", pos: "noun", gloss: "gulf, bay" },
    "قرن": { root: "ق ر ن", pos: "noun", gloss: "horn" },
    "مدخل": { root: "د خ ل", pos: "noun", gloss: "entrance" },
    "يئس": { root: "ي أ س", pos: "verb", gloss: "to despair" },
    "حيلة": { root: "ح ي ل", pos: "noun", gloss: "trick, stratagem, way" },
    "عبور": { root: "ع ب ر", pos: "noun", gloss: "crossing" },
    "نقل": { root: "ن ق ل", pos: "verb", gloss: "to transport, move" },
    "أخشاب": { root: "خ ش ب", pos: "noun", gloss: "timbers, planks of wood" },
    "طلى": {
      root: "ط ل ي", pos: "verb", gloss: "to coat, smear",
      book_note: "طَلَى يَطلِي طَلْياً: دَهَنَ."
    },
    "أملس": {
      root: "م ل س", pos: "verb", gloss: "to become smooth",
      book_note: "أَمْلَسَ يُمْلِسُ إِمْلاَساً: لاَنَ ونَعِمَ."
    },
    "أزلق": {
      root: "ز ل ق", pos: "verb", gloss: "to slide, cause to slip",
      book_note: "أَزْلَقَ يُزْلِقُ إِزْلاَقاً عليه السفن: دَفَعَها ودَحْرَجَها."
    },
    "راع": {
      root: "ر و ع", pos: "verb", gloss: "to alarm, frighten",
      book_note: "مَا رَاعَ: ما أَفْزَعَ. والرَّوْع: الفَزَع والخوف."
    },
    "أرسى": {
      root: "ر س و", pos: "verb", gloss: "to anchor, moor",
      book_note: "أَرْسَى يُرْسِي إِرْسَاءً: تَوَقَّف (توقفت السفن عند الشاطئ)."
    },
    "ساحل": { root: "س ح ل", pos: "noun", gloss: "coast, shore" },
    "عاصمة": { root: "ع ص م", pos: "noun", gloss: "capital (city)" },
    "بيزنطية": { root: "", pos: "adj", gloss: "Byzantine" },
    "نصرانية": { root: "ن ص ر", pos: "adj", gloss: "Christian" },
    "منيع": { root: "م ن ع", pos: "adj", gloss: "impregnable, unassailable" },
    "تركيا": { root: "", pos: "proper", gloss: "Turkey" },
    "هكذا": { root: "", pos: "adv", gloss: "thus, in this way" },
    "سلسلة": { root: "س ل س ل", pos: "noun", gloss: "chain" },
    "سقط": {
      root: "س ق ط", pos: "verb", gloss: "to fall",
      book_note: "سُقِطَ فِي أَيْدِيهِمْ: تَحَيَّروا."
    }
  },
  paragraphs: [
    {
      en: "Have you heard of a ship that travels on land? Would you even believe it if someone told you about it?! I expect you'll say -- and you'd be right -- \"We never heard of this from our forefathers.\"",
      sentences: [
        {
          id: "qr2-56-001",
          ar: "هَلْ سَمِعْتَ بِسَفِيْنَةٍ تَسِيْرُ عَلَى الْبَرِّ؟",
          en: "Have you heard of a ship that travels on land?",
          tokens: [
            { surface: "هَلْ", lemma: "هل", pos: "part", features: "interrog", root: "", gloss: "?" },
            { surface: "سَمِعْتَ", lemma: "سمع", pos: "verb", features: "perf.2ms", root: "س م ع", gloss: "have you heard" },
            { surface: "بِسَفِيْنَةٍ", lemma: "سفينة", pos: "noun", features: "prep+indef.gen", root: "س ف ن", gloss: "of a ship" },
            { surface: "تَسِيْرُ", lemma: "سار", pos: "verb", features: "impf.3fs", root: "س ي ر", gloss: "that travels" },
            { surface: "عَلَى", lemma: "على", pos: "prep", root: "", gloss: "on" },
            { surface: "الْبَرِّ", lemma: "بر", pos: "noun", features: "def.gen", root: "ب ر ر", gloss: "the land" },
          ],
        },
        {
          id: "qr2-56-002",
          ar: "وَهَلْ تُصَدِّقُ إِذَا أَخْبَرَكَ بِهِ أَحَدٌ؟!",
          en: "And would you believe it if someone told you about it?!",
          tokens: [
            { surface: "وَهَلْ", lemma: "هل", pos: "part", features: "conj+interrog", root: "", gloss: "and would" },
            { surface: "تُصَدِّقُ", lemma: "صدق", pos: "verb", features: "impf.2ms", root: "ص د ق", gloss: "you believe" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", root: "", gloss: "if" },
            { surface: "أَخْبَرَكَ", lemma: "أخبر", pos: "verb", features: "perf.3ms+2ms", root: "خ ب ر", gloss: "he told you" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "about it" },
            { surface: "أَحَدٌ", lemma: "أحد", pos: "noun", features: "indef.nom", root: "أ ح د", gloss: "someone" },
          ],
        },
        {
          id: "qr2-56-003",
          ar: "أَظُنُّكَ تَقُوْلُ ـ وَلَكَ الْحَقُّ ـ: مَا سَمِعْنَا بِهَذَا فِيْ آبَائِنَا الأَوَّلِيْنَ.",
          en: "I expect you'll say -- and you'd be right -- \"We never heard of this from our forefathers.\"",
          tokens: [
            { surface: "أَظُنُّكَ", lemma: "ظن", pos: "verb", features: "impf.1cs+2ms", root: "ظ ن ن", gloss: "I suppose you" },
            { surface: "تَقُوْلُ", lemma: "قول", pos: "verb", features: "impf.2ms", root: "ق و ل", gloss: "say" },
            { surface: "وَلَكَ", lemma: "ل", pos: "prep", features: "conj+prep+2ms", root: "", gloss: "and you have" },
            { surface: "الْحَقُّ", lemma: "حق", pos: "noun", features: "def.nom", root: "ح ق ق", gloss: "the right (of it)" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "سَمِعْنَا", lemma: "سمع", pos: "verb", features: "perf.1cpl", root: "س م ع", gloss: "we heard" },
            { surface: "بِهَذَا", lemma: "هذا", pos: "dem", features: "prep+dem", root: "", gloss: "of this" },
            { surface: "فِيْ", lemma: "في", pos: "prep", root: "", gloss: "among" },
            { surface: "آبَائِنَا", lemma: "أب", pos: "noun", features: "gen.pl+1cpl", root: "أ ب و", gloss: "our fathers" },
            { surface: "الأَوَّلِيْنَ", lemma: "أول", pos: "adj", features: "def.gen.pl", root: "أ و ل", gloss: "the first, our forefathers" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا يَسْأَلُ الْكَاتِبُ فِيْ بِدَايَةِ الدَّرْسِ؟",
          options: ["هَلْ سَمِعْتَ بِسَفِيْنَةٍ تَسِيْرُ عَلَى الْبَرِّ", "هَلْ رَأَيْتَ سَفِيْنَةً فِيْ الْبَحْرِ", "هَلْ رَكِبْتَ سَفِيْنَةً"],
          answer: 0,
          qEn: "What does the author ask at the start of the lesson?",
          optionsEn: ["Have you heard of a ship that travels on land?", "Have you seen a ship at sea?", "Have you ridden a ship?"],
        },
      ],
    },
    {
      en: "But Muhammad the Second, the Ottoman, conqueror of Constantinople, sailed seventy ships over land.",
      sentences: [
        {
          id: "qr2-56-004",
          ar: "وَلَكِنَّ مُحَمَّداً الثَّانِيَ الْعُثْمَانِيَّ فَاتِحَ الْقُسْطُنْطِيْنِيَّةِ،",
          en: "But Muhammad the Second, the Ottoman, conqueror of Constantinople,",
          tokens: [
            { surface: "وَلَكِنَّ", lemma: "لكن", pos: "part", features: "conj+part", root: "", gloss: "but" },
            { surface: "مُحَمَّداً", lemma: "محمد", pos: "proper", features: "acc", root: "", gloss: "Muhammad" },
            { surface: "الثَّانِيَ", lemma: "ثاني", pos: "adj", features: "def.acc", root: "ث ن ي", gloss: "the second" },
            { surface: "الْعُثْمَانِيَّ", lemma: "عثماني", pos: "adj", features: "def.acc", root: "", gloss: "the Ottoman" },
            { surface: "فَاتِحَ", lemma: "فاتح", pos: "noun", features: "constr.acc", root: "ف ت ح", gloss: "conqueror of" },
            { surface: "الْقُسْطُنْطِيْنِيَّةِ", lemma: "قسطنطينية", pos: "proper", features: "def.gen", root: "", gloss: "Constantinople" },
          ],
        },
        {
          id: "qr2-56-005",
          ar: "سَيَّرَ سَبْعِيْنَ سَفِيْنَةً عَلَى الْبَرِّ.",
          en: "sailed seventy ships over land.",
          tokens: [
            { surface: "سَيَّرَ", lemma: "سيّر", pos: "verb", features: "perf.3ms", root: "س ي ر", gloss: "he dispatched" },
            { surface: "سَبْعِيْنَ", lemma: "سبعين", pos: "num", features: "acc", root: "س ب ع", gloss: "seventy" },
            { surface: "سَفِيْنَةً", lemma: "سفينة", pos: "noun", features: "indef.acc", root: "س ف ن", gloss: "ships" },
            { surface: "عَلَى", lemma: "على", pos: "prep", root: "", gloss: "over" },
            { surface: "الْبَرِّ", lemma: "بر", pos: "noun", features: "def.gen", root: "ب ر ر", gloss: "the land" },
          ],
        },
      ],
      checks: [
        {
          q: "مَنْ فَتَحَ الْقُسْطُنْطِيْنِيَّةَ؟",
          options: ["مُحَمَّدٌ الثَّانِيْ الْعُثْمَانِيُّ", "صَلاَحُ الدِّيْنِ", "مُحَمَّدُ بْنُ قَاسِمٍ"],
          answer: 0,
          qEn: "Who conquered Constantinople?",
          optionsEn: ["Muhammad the Second, the Ottoman", "Salah al-Din", "Muhammad bin Qasim"],
        },
      ],
    },
    {
      en: "Do you know how that happened?",
      sentences: [
        {
          id: "qr2-56-006",
          ar: "هَلْ تَعْرِفُ كَيْفَ كَانَ ذَلِكَ؟",
          en: "Do you know how that happened?",
          tokens: [
            { surface: "هَلْ", lemma: "هل", pos: "part", features: "interrog", root: "", gloss: "?" },
            { surface: "تَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.2ms", root: "ع ر ف", gloss: "do you know" },
            { surface: "كَيْفَ", lemma: "كيف", pos: "part", root: "", gloss: "how" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "it happened" },
            { surface: "ذَلِكَ", lemma: "ذلك", pos: "dem", root: "", gloss: "that" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا يَسْأَلُ الْكَاتِبُ بَعْدَ ذَلِكَ؟",
          options: ["هَلْ تَعْرِفُ كَيْفَ كَانَ ذَلِكَ", "مَتَى وُلِدَ مُحَمَّدٌ", "أَيْنَ الْقُسْطُنْطِيْنِيَّةُ"],
          answer: 0,
          qEn: "What does the author ask next?",
          optionsEn: ["Do you know how that happened?", "When was Muhammad born?", "Where is Constantinople?"],
        },
      ],
    },
    {
      en: "The Arabs besieged mighty Constantinople six times and never conquered it, and Allah had decreed that this great conquest would come by the hand of a young Muslim man of the House of Uthman, in his twenty-fourth year of age -- that is Allah's favor, which He grants to whom He wills.",
      sentences: [
        {
          id: "qr2-56-007",
          ar: "غَزَا الْعَرَبُ الْقُسْطُنْطِيْنِيَّةَ الْعُظْمَى سِتَّ مَرَّاتٍ،",
          en: "The Arabs besieged mighty Constantinople six times,",
          tokens: [
            { surface: "غَزَا", lemma: "غزا", pos: "verb", features: "perf.3ms", root: "غ ز و", gloss: "raided, besieged" },
            { surface: "الْعَرَبُ", lemma: "عرب", pos: "proper", features: "def.nom", root: "", gloss: "the Arabs" },
            { surface: "الْقُسْطُنْطِيْنِيَّةَ", lemma: "قسطنطينية", pos: "proper", features: "def.acc", root: "", gloss: "Constantinople" },
            { surface: "الْعُظْمَى", lemma: "أعظم", pos: "adj", features: "def.acc.f", root: "ع ظ م", gloss: "the mighty" },
            { surface: "سِتَّ", lemma: "ست", pos: "num", features: "acc.constr", root: "س ت ت", gloss: "six" },
            { surface: "مَرَّاتٍ", lemma: "مرة", pos: "noun", features: "indef.gen.pl", root: "م ر ر", gloss: "times" },
          ],
        },
        {
          id: "qr2-56-008",
          ar: "وَلَمْ يَفْتَحُوْهَا،",
          en: "and never conquered it,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَفْتَحُوْهَا", lemma: "فتح", pos: "verb", features: "juss.3mpl+3fs", root: "ف ت ح", gloss: "did they conquer it" },
          ],
        },
        {
          id: "qr2-56-009",
          ar: "وَقَدْ قَدَّرَ اللهُ أَنْ يَكُوْنَ هَذَا الْفَتْحُ الْعَظِيْمُ بِيَدِ شَابٍّ مُسْلِمٍ مِنْ آلِ عُثْمَانَ،",
          en: "and Allah had decreed that this great conquest would come by the hand of a young Muslim man of the House of Uthman,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "قَدَّرَ", lemma: "قدّر", pos: "verb", features: "perf.3ms", root: "ق د ر", gloss: "decreed" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "أَنْ", lemma: "أن", pos: "part", root: "", gloss: "that" },
            { surface: "يَكُوْنَ", lemma: "كان", pos: "verb", features: "subj.3ms", root: "ك و ن", gloss: "would be" },
            { surface: "هَذَا", lemma: "هذا", pos: "dem", root: "", gloss: "this" },
            { surface: "الْفَتْحُ", lemma: "فتح", pos: "noun", features: "def.nom", root: "ف ت ح", gloss: "the conquest" },
            { surface: "الْعَظِيْمُ", lemma: "عظيم", pos: "adj", features: "def.nom", root: "ع ظ م", gloss: "the great" },
            { surface: "بِيَدِ", lemma: "يد", pos: "noun", features: "prep+constr.gen", root: "ي د ي", gloss: "by the hand of" },
            { surface: "شَابٍّ", lemma: "شاب", pos: "noun", features: "indef.gen", root: "ش ب ب", gloss: "a young man" },
            { surface: "مُسْلِمٍ", lemma: "مسلم", pos: "adj", features: "indef.gen", root: "س ل م", gloss: "Muslim" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "from" },
            { surface: "آلِ", lemma: "آل", pos: "noun", features: "constr.gen", root: "أ و ل", gloss: "the family of" },
            { surface: "عُثْمَانَ", lemma: "عثمان", pos: "proper", features: "gen", root: "", gloss: "Uthman" },
          ],
        },
        {
          id: "qr2-56-010",
          ar: "وَهُوَ فِيْ الرَّابِعَةِ وَالْعِشْرِيْنَ مِنْ عُمُرِهِ،",
          en: "in his twenty-fourth year of age,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom.3ms", root: "", gloss: "and he (was)" },
            { surface: "فِيْ", lemma: "في", pos: "prep", root: "", gloss: "in" },
            { surface: "الرَّابِعَةِ", lemma: "رابع", pos: "adj", features: "def.gen.f", root: "ر ب ع", gloss: "the fourth" },
            { surface: "وَالْعِشْرِيْنَ", lemma: "عشرين", pos: "num", features: "conj+def.gen", root: "ع ش ر", gloss: "and twentieth" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "of" },
            { surface: "عُمُرِهِ", lemma: "عمر", pos: "noun", features: "gen+3ms", root: "ع م ر", gloss: "his age" },
          ],
        },
        {
          id: "qr2-56-011",
          ar: "وَذَلِكَ فَضْلُ اللهِ يُؤْتِيْهِ مَنْ يَشَاءُ.",
          en: "that is Allah's favor, which He grants to whom He wills.",
          tokens: [
            { surface: "وَذَلِكَ", lemma: "ذلك", pos: "dem", features: "conj", root: "", gloss: "and that (is)" },
            { surface: "فَضْلُ", lemma: "فضل", pos: "noun", features: "constr.nom", root: "ف ض ل", gloss: "the favor of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "يُؤْتِيْهِ", lemma: "آتى", pos: "verb", features: "impf.3ms+3ms", root: "أ ت ي", gloss: "He grants it" },
            { surface: "مَنْ", lemma: "من", pos: "rel", root: "", gloss: "to whom" },
            { surface: "يَشَاءُ", lemma: "شاء", pos: "verb", features: "impf.3ms", root: "ش ي أ", gloss: "He wills" },
          ],
        },
      ],
      checks: [
        {
          q: "كَمْ مَرَّةً غَزَا الْعَرَبُ الْقُسْطُنْطِيْنِيَّةَ وَلَمْ يَفْتَحُوْهَا؟",
          options: ["سِتَّ مَرَّاتٍ", "مَرَّةً وَاحِدَةً", "عَشْرَ مَرَّاتٍ"],
          answer: 0,
          qEn: "How many times did the Arabs besiege Constantinople without conquering it?",
          optionsEn: ["Six times", "Once", "Ten times"],
        },
      ],
    },
    {
      en: "Muhammad advanced on Constantinople and made great preparations for that, for Allah the Exalted had said: \"And prepare against them whatever you are able of power.\"",
      sentences: [
        {
          id: "qr2-56-012",
          ar: "زَحَفَ مُحَمَّدٌ إِلَى الْقُسْطُنْطِيْنِيَّةِ،",
          en: "Muhammad advanced on Constantinople,",
          tokens: [
            { surface: "زَحَفَ", lemma: "زحف", pos: "verb", features: "perf.3ms", root: "ز ح ف", gloss: "advanced" },
            { surface: "مُحَمَّدٌ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", root: "", gloss: "on, towards" },
            { surface: "الْقُسْطُنْطِيْنِيَّةِ", lemma: "قسطنطينية", pos: "proper", features: "def.gen", root: "", gloss: "Constantinople" },
          ],
        },
        {
          id: "qr2-56-013",
          ar: "وَأَعَدَّ لِذَلِكَ عُدَّةً عَظِيْمَةً،",
          en: "and made great preparations for that,",
          tokens: [
            { surface: "وَأَعَدَّ", lemma: "أعد", pos: "verb", features: "conj+perf.3ms", root: "ع د د", gloss: "and he prepared" },
            { surface: "لِذَلِكَ", lemma: "ذلك", pos: "dem", features: "prep+dem", root: "", gloss: "for that" },
            { surface: "عُدَّةً", lemma: "عدة", pos: "noun", features: "indef.acc", root: "ع د د", gloss: "equipment, gear" },
            { surface: "عَظِيْمَةً", lemma: "عظيم", pos: "adj", features: "indef.acc.f", root: "ع ظ م", gloss: "great" },
          ],
        },
        {
          id: "qr2-56-014",
          ar: "فَقَدْ قَالَ اللهُ تَعَالَى:",
          en: "for Allah the Exalted had said:",
          tokens: [
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "تَعَالَى", lemma: "تعالى", pos: "adj", root: "ع ل و", gloss: "the Exalted" },
          ],
        },
        {
          id: "qr2-56-015",
          ar: "﴿وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِن قُوَّةٍ﴾.",
          en: "\"And prepare against them whatever you are able of power.\"",
          tokens: [
            { surface: "وَأَعِدُّوا لَهُم مَّا اسْتَطَعْتُم مِن", lemma: "أعد", pos: "verb", features: "conj+imp.2mpl", root: "ع د د", gloss: "and prepare for them whatever you are able of" },
            { surface: "قُوَّةٍ", lemma: "قوة", pos: "noun", features: "indef.gen", root: "ق و ي", gloss: "power, strength" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ مُحَمَّدٌ بَعْدَ أَنْ زَحَفَ إِلَى الْقُسْطُنْطِيْنِيَّةِ؟",
          options: ["أَعَدَّ لِذَلِكَ عُدَّةً عَظِيْمَةً", "رَجَعَ إِلَى بَيْتِهِ", "نَامَ"],
          answer: 0,
          qEn: "What did Muhammad do after advancing on Constantinople?",
          optionsEn: ["He made great preparations for it", "He returned home", "He slept"],
        },
      ],
    },
    {
      en: "Under his command were three hundred thousand fighters, and with him a massive artillery corps, including a cannon unlike any found in Europe for its size -- he had prepared it for that purpose -- whose range was more than a mile. His fleet was made up of a hundred warships.",
      sentences: [
        {
          id: "qr2-56-016",
          ar: "فَكَانَ تَحْتَ قِيَادَتِهِ ثَلاَثُمِئَةِ أَلْفِ مُقَاتِلٍ،",
          en: "Under his command were three hundred thousand fighters,",
          tokens: [
            { surface: "فَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there were" },
            { surface: "تَحْتَ", lemma: "تحت", pos: "prep", root: "", gloss: "under" },
            { surface: "قِيَادَتِهِ", lemma: "قيادة", pos: "noun", features: "gen+3ms", root: "ق و د", gloss: "his command" },
            { surface: "ثَلاَثُمِئَةِ", lemma: "ثلاثمئة", pos: "num", features: "constr.gen", root: "", gloss: "three hundred" },
            { surface: "أَلْفِ", lemma: "ألف", pos: "num", features: "constr.gen", root: "أ ل ف", gloss: "thousand" },
            { surface: "مُقَاتِلٍ", lemma: "مقاتل", pos: "noun", features: "indef.gen", root: "ق ت ل", gloss: "fighters" },
          ],
        },
        {
          id: "qr2-56-017",
          ar: "وَمَعَهُ مِدْفَعِيَّةٌ هَائِلَةٌ،",
          en: "and with him a massive artillery corps,",
          tokens: [
            { surface: "وَمَعَهُ", lemma: "مع", pos: "prep", features: "conj+prep+3ms", root: "", gloss: "and with him" },
            { surface: "مِدْفَعِيَّةٌ", lemma: "مدفعية", pos: "noun", features: "indef.nom", root: "د ف ع", gloss: "artillery" },
            { surface: "هَائِلَةٌ", lemma: "هائل", pos: "adj", features: "indef.nom.f", root: "ه و ل", gloss: "massive" },
          ],
        },
        {
          id: "qr2-56-018",
          ar: "فِيْهَا مِدْفَعٌ لاَ يُوْجَدُ فِيْ أَوْرُبَّا أَضْخَمُ مِنْهُ،",
          en: "including a cannon unlike any found in Europe for its size,",
          tokens: [
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in it (there was)" },
            { surface: "مِدْفَعٌ", lemma: "مدفع", pos: "noun", features: "indef.nom", root: "د ف ع", gloss: "a cannon" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُوْجَدُ", lemma: "وجد", pos: "verb", features: "pass.impf.3ms", root: "و ج د", gloss: "is found" },
            { surface: "فِيْ", lemma: "في", pos: "prep", root: "", gloss: "in" },
            { surface: "أَوْرُبَّا", lemma: "أوروبا", pos: "proper", root: "", gloss: "Europe" },
            { surface: "أَضْخَمُ", lemma: "أضخم", pos: "adj", features: "nom", root: "ض خ م", gloss: "more massive" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "prep+3ms", root: "", gloss: "than it" },
          ],
        },
        {
          id: "qr2-56-019",
          ar: "أَعَدَّهُ لِذَلِكَ،",
          en: "he had prepared it for that purpose,",
          tokens: [
            { surface: "أَعَدَّهُ", lemma: "أعد", pos: "verb", features: "perf.3ms+3ms", root: "ع د د", gloss: "he prepared it" },
            { surface: "لِذَلِكَ", lemma: "ذلك", pos: "dem", features: "prep+dem", root: "", gloss: "for that" },
          ],
        },
        {
          id: "qr2-56-020",
          ar: "مَرْمَاهُ أَكْثَرُ مِنْ مِيْلٍ.",
          en: "its range was more than a mile.",
          tokens: [
            { surface: "مَرْمَاهُ", lemma: "مرمى", pos: "noun", features: "nom+3ms", root: "ر م ي", gloss: "its range" },
            { surface: "أَكْثَرُ", lemma: "أكثر", pos: "adj", features: "nom", root: "ك ث ر", gloss: "more" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "than" },
            { surface: "مِيْلٍ", lemma: "ميل", pos: "noun", features: "indef.gen", root: "م ي ل", gloss: "a mile" },
          ],
        },
        {
          id: "qr2-56-021",
          ar: "وَكَانَ أُسْطُوْلُهُ مُرَكَّباً مِنْ مِئَةِ سَفِيْنَةٍ حَرْبِيَّةٍ.",
          en: "His fleet was made up of a hundred warships.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "أُسْطُوْلُهُ", lemma: "أسطول", pos: "noun", features: "nom+3ms", root: "", gloss: "his fleet" },
            { surface: "مُرَكَّباً", lemma: "مركب", pos: "adj", features: "indef.acc", root: "ر ك ب", gloss: "composed" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "of" },
            { surface: "مِئَةِ", lemma: "مئة", pos: "num", features: "constr.gen", root: "م أ ي", gloss: "a hundred" },
            { surface: "سَفِيْنَةٍ", lemma: "سفينة", pos: "noun", features: "indef.gen", root: "س ف ن", gloss: "ship(s)" },
            { surface: "حَرْبِيَّةٍ", lemma: "حربية", pos: "adj", features: "indef.gen.f", root: "ح ر ب", gloss: "warlike, military" },
          ],
        },
      ],
      checks: [
        {
          q: "كَمْ كَانَ عَدَدُ الْمُقَاتِلِيْنَ تَحْتَ قِيَادَةِ مُحَمَّدٍ؟",
          options: ["ثَلاَثُمِئَةِ أَلْفِ مُقَاتِلٍ", "مِئَةَ أَلْفِ مُقَاتِلٍ", "أَلْفَ مُقَاتِلٍ"],
          answer: 0,
          qEn: "How many fighters were under Muhammad's command?",
          optionsEn: ["Three hundred thousand fighters", "A hundred thousand fighters", "A thousand fighters"],
        },
      ],
    },
    {
      en: "Muhammad had seen that the enemy had chained off the Golden Horn -- the entrance to Constantinople -- with chains, so how could he cross it with his fleet?",
      sentences: [
        {
          id: "qr2-56-022",
          ar: "وَكَانَ مُحَمَّدٌ رَأَى أَنَّ الْعَدُوَّ قَدْ سَلْسَلَ خَلِيْجَ قَرْنِ الذَّهَبِ ـ وَهُوَ مَدْخَلُ الْقُسْطُنْطِيْنِيَّةِ ـ بِالسَّلاَسِلِ،",
          en: "Muhammad had seen that the enemy had chained off the Golden Horn -- the entrance to Constantinople -- with chains,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and had" },
            { surface: "مُحَمَّدٌ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
            { surface: "رَأَى", lemma: "رأى", pos: "verb", features: "perf.3ms", root: "ر أ ي", gloss: "seen" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", root: "", gloss: "that" },
            { surface: "الْعَدُوَّ", lemma: "عدو", pos: "noun", features: "def.acc", root: "ع د و", gloss: "the enemy" },
            { surface: "قَدْ", lemma: "قد", pos: "part", root: "", gloss: "had" },
            { surface: "سَلْسَلَ", lemma: "سلسل", pos: "verb", features: "perf.3ms", root: "س ل س ل", gloss: "chained off" },
            { surface: "خَلِيْجَ", lemma: "خليج", pos: "noun", features: "constr.acc", root: "خ ل ج", gloss: "the gulf of" },
            { surface: "قَرْنِ", lemma: "قرن", pos: "noun", features: "constr.gen", root: "ق ر ن", gloss: "the horn of" },
            { surface: "الذَّهَبِ", lemma: "ذهب", pos: "noun", features: "def.gen", root: "", gloss: "gold" },
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom.3ms", root: "", gloss: "and it (is)" },
            { surface: "مَدْخَلُ", lemma: "مدخل", pos: "noun", features: "constr.nom", root: "د خ ل", gloss: "the entrance of" },
            { surface: "الْقُسْطُنْطِيْنِيَّةِ", lemma: "قسطنطينية", pos: "proper", features: "def.gen", root: "", gloss: "Constantinople" },
            { surface: "بِالسَّلاَسِلِ", lemma: "سلسلة", pos: "noun", features: "prep+def.gen.pl", root: "س ل س ل", gloss: "with chains" },
          ],
        },
        {
          id: "qr2-56-023",
          ar: "فَكَيْفَ يَعْبُرُهُ بِأُسْطُوْلِهِ؟",
          en: "so how could he cross it with his fleet?",
          tokens: [
            { surface: "فَكَيْفَ", lemma: "كيف", pos: "part", features: "conj", root: "", gloss: "so how" },
            { surface: "يَعْبُرُهُ", lemma: "عبر", pos: "verb", features: "impf.3ms+3ms", root: "ع ب ر", gloss: "could he cross it" },
            { surface: "بِأُسْطُوْلِهِ", lemma: "أسطول", pos: "noun", features: "prep+gen+3ms", root: "", gloss: "with his fleet" },
          ],
        },
      ],
      checks: [
        {
          q: "بِمَاذَا سَلْسَلَ الْعَدُوُّ خَلِيْجَ قَرْنِ الذَّهَبِ؟",
          options: ["بِالسَّلاَسِلِ", "بِالْحِبَالِ", "بِالْحَدِيْدِ"],
          answer: 0,
          qEn: "With what had the enemy chained off the Golden Horn?",
          optionsEn: ["With chains", "With ropes", "With iron"],
        },
      ],
    },
    {
      en: "Muhammad pondered, and he neither gave up nor despaired, and he found a trick!",
      sentences: [
        {
          id: "qr2-56-024",
          ar: "فَكَّرَ مُحَمَّدٌ،",
          en: "Muhammad pondered,",
          tokens: [
            { surface: "فَكَّرَ", lemma: "فكر", pos: "verb", features: "perf.3ms", root: "ف ك ر", gloss: "pondered" },
            { surface: "مُحَمَّدٌ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
          ],
        },
        {
          id: "qr2-56-025",
          ar: "وَلَمْ يَعْجَزْ وَلَمْ يَيْأَسْ،",
          en: "and he neither gave up nor despaired,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَعْجَزْ", lemma: "عجز", pos: "verb", features: "juss.3ms", root: "ع ج ز", gloss: "did he give up" },
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَيْأَسْ", lemma: "يئس", pos: "verb", features: "juss.3ms", root: "ي أ س", gloss: "did he despair" },
          ],
        },
        {
          id: "qr2-56-026",
          ar: "وَوَجَدَ حِيْلَةً!",
          en: "and he found a trick!",
          tokens: [
            { surface: "وَوَجَدَ", lemma: "وجد", pos: "verb", features: "conj+perf.3ms", root: "و ج د", gloss: "and he found" },
            { surface: "حِيْلَةً", lemma: "حيلة", pos: "noun", features: "indef.acc", root: "ح ي ل", gloss: "a trick" },
          ],
        },
      ],
      checks: [
        {
          q: "هَلْ يَئِسَ مُحَمَّدٌ مِنْ إِيْجَادِ حَلٍّ؟",
          options: ["لاَ، لَمْ يَعْجَزْ وَلَمْ يَيْأَسْ", "نَعَمْ، يَئِسَ", "تَرَكَ الْحِصَارَ"],
          answer: 0,
          qEn: "Did Muhammad despair of finding a solution?",
          optionsEn: ["No, he neither gave up nor despaired", "Yes, he despaired", "He abandoned the siege"],
        },
      ],
    },
    {
      en: "He realized that crossing to Constantinople was possible from the direction of Qasim Pasha.",
      sentences: [
        {
          id: "qr2-56-027",
          ar: "رَأَى أَنَّهُ يُمْكِنُ الْعُبُوْرُ إِلَى الْقُسْطُنْطِيْنِيَّةِ مِنْ جِهَةِ قَاسِمِ بَاشَا.",
          en: "He realized that crossing to Constantinople was possible from the direction of Qasim Pasha.",
          tokens: [
            { surface: "رَأَى", lemma: "رأى", pos: "verb", features: "perf.3ms", root: "ر أ ي", gloss: "he realized" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that" },
            { surface: "يُمْكِنُ", lemma: "يمكن", pos: "verb", features: "impf.3ms", root: "م ك ن", gloss: "is possible" },
            { surface: "الْعُبُوْرُ", lemma: "عبور", pos: "noun", features: "def.nom", root: "ع ب ر", gloss: "the crossing" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", root: "", gloss: "to" },
            { surface: "الْقُسْطُنْطِيْنِيَّةِ", lemma: "قسطنطينية", pos: "proper", features: "def.gen", root: "", gloss: "Constantinople" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "from" },
            { surface: "جِهَةِ", lemma: "جهة", pos: "noun", features: "constr.gen", root: "ج ه ه", gloss: "the direction of" },
            { surface: "قَاسِمِ", lemma: "قاسم", pos: "proper", features: "gen", root: "", gloss: "Qasim" },
            { surface: "بَاشَا", lemma: "باشا", pos: "proper", root: "", gloss: "Pasha" },
          ],
        },
      ],
      checks: [
        {
          q: "مِنْ أَيِّ جِهَةٍ رَأَى مُحَمَّدٌ أَنَّ الْعُبُوْرَ مُمْكِنٌ؟",
          options: ["مِنْ جِهَةِ قَاسِمِ بَاشَا", "مِنْ جِهَةِ الشَّمَالِ", "مِنَ الْبَحْرِ الأَسْوَدِ"],
          answer: 0,
          qEn: "From which direction did Muhammad see that crossing was possible?",
          optionsEn: ["From the direction of Qasim Pasha", "From the north", "From the Black Sea"],
        },
      ],
    },
    {
      en: "But this direction was far from his ships, so who would carry them and transport them from this side to that side, when the distance was so great?",
      sentences: [
        {
          id: "qr2-56-028",
          ar: "وَلَكِنَّ هَذِهِ الْجِهَةَ بَعِيْدَةٌ مِنْ سُفُنِهِ،",
          en: "But this direction was far from his ships,",
          tokens: [
            { surface: "وَلَكِنَّ", lemma: "لكن", pos: "part", features: "conj+part", root: "", gloss: "but" },
            { surface: "هَذِهِ", lemma: "هذا", pos: "dem", features: "f", root: "", gloss: "this" },
            { surface: "الْجِهَةَ", lemma: "جهة", pos: "noun", features: "def.acc", root: "ج ه ه", gloss: "the direction" },
            { surface: "بَعِيْدَةٌ", lemma: "بعد", pos: "adj", features: "indef.nom.f", root: "ب ع د", gloss: "far" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "from" },
            { surface: "سُفُنِهِ", lemma: "سفينة", pos: "noun", features: "gen.pl+3ms", root: "س ف ن", gloss: "his ships" },
          ],
        },
        {
          id: "qr2-56-029",
          ar: "فَمَنْ يَحْمِلُهَا وَمَنْ يَنْقُلُهَا مِنْ هَذِهِ الْجِهَةِ إِلَى تِلْكَ الْجِهَةِ،",
          en: "so who would carry them and transport them from this side to that side,",
          tokens: [
            { surface: "فَمَنْ", lemma: "من", pos: "rel", features: "conj", root: "", gloss: "so who" },
            { surface: "يَحْمِلُهَا", lemma: "حمل", pos: "verb", features: "impf.3ms+3fs", root: "ح م ل", gloss: "would carry them" },
            { surface: "وَمَنْ", lemma: "من", pos: "rel", features: "conj", root: "", gloss: "and who" },
            { surface: "يَنْقُلُهَا", lemma: "نقل", pos: "verb", features: "impf.3ms+3fs", root: "ن ق ل", gloss: "would transport them" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "from" },
            { surface: "هَذِهِ", lemma: "هذا", pos: "dem", features: "f", root: "", gloss: "this" },
            { surface: "الْجِهَةِ", lemma: "جهة", pos: "noun", features: "def.gen", root: "ج ه ه", gloss: "side" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", root: "", gloss: "to" },
            { surface: "تِلْكَ", lemma: "تلك", pos: "dem", root: "", gloss: "that" },
            { surface: "الْجِهَةِ", lemma: "جهة", pos: "noun", features: "def.gen", root: "ج ه ه", gloss: "side" },
          ],
        },
        {
          id: "qr2-56-030",
          ar: "وَالْمَسَافَةُ بَعِيْدَةٌ؟",
          en: "when the distance was so great?",
          tokens: [
            { surface: "وَالْمَسَافَةُ", lemma: "مسافة", pos: "noun", features: "conj+def.nom", root: "س و ف", gloss: "and the distance" },
            { surface: "بَعِيْدَةٌ", lemma: "بعد", pos: "adj", features: "indef.nom.f", root: "ب ع د", gloss: "far, great" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَتْ مُشْكِلَةُ نَقْلِ السُّفُنِ صَعْبَةً؟",
          options: ["لأَنَّ الْجِهَةَ بَعِيْدَةٌ وَالْمَسَافَةَ بَعِيْدَةٌ", "لأَنَّ السُّفُنَ ثَقِيْلَةٌ", "لأَنَّهُ لاَ يُوْجَدُ بَحَّارَةٌ"],
          answer: 0,
          qEn: "Why was the problem of moving the ships difficult?",
          optionsEn: ["Because the side was far and the distance was great", "Because the ships were heavy", "Because there were no sailors"],
        },
      ],
    },
    {
      en: "Muhammad pondered, and he neither gave up nor despaired, and found a trick!",
      sentences: [
        {
          id: "qr2-56-031",
          ar: "فَكَّرَ مُحَمَّدٌ،",
          en: "Muhammad pondered,",
          tokens: [
            { surface: "فَكَّرَ", lemma: "فكر", pos: "verb", features: "perf.3ms", root: "ف ك ر", gloss: "pondered" },
            { surface: "مُحَمَّدٌ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
          ],
        },
        {
          id: "qr2-56-032",
          ar: "وَلَمْ يَعْجَزْ وَلَمْ يَيْأَسْ وَوَجَدَ حِيْلَةً!",
          en: "and he neither gave up nor despaired, and found a trick!",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَعْجَزْ", lemma: "عجز", pos: "verb", features: "juss.3ms", root: "ع ج ز", gloss: "did he give up" },
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَيْأَسْ", lemma: "يئس", pos: "verb", features: "juss.3ms", root: "ي أ س", gloss: "did he despair" },
            { surface: "وَوَجَدَ", lemma: "وجد", pos: "verb", features: "conj+perf.3ms", root: "و ج د", gloss: "and he found" },
            { surface: "حِيْلَةً", lemma: "حيلة", pos: "noun", features: "indef.acc", root: "ح ي ل", gloss: "a trick" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ مُحَمَّدٌ لَمَّا وَجَدَ الطَّرِيْقَ الأَوَّلَ صَعْباً؟",
          options: ["فَكَّرَ مِنْ جَدِيْدٍ وَوَجَدَ حِيْلَةً أُخْرَى", "اسْتَسْلَمَ", "طَلَبَ الْمُسَاعَدَةَ مِنَ الأَعْدَاءِ"],
          answer: 0,
          qEn: "What did Muhammad do when he found the first path difficult?",
          optionsEn: ["He thought again and found another trick", "He surrendered", "He asked the enemy for help"],
        },
      ],
    },
    {
      en: "He coated the timbers with grease, and once they were smooth he slid the ships over them -- seventy ships.",
      sentences: [
        {
          id: "qr2-56-033",
          ar: "طَلَى الأَخْشَابَ بِالشَّحْمِ،",
          en: "He coated the timbers with grease,",
          tokens: [
            { surface: "طَلَى", lemma: "طلى", pos: "verb", features: "perf.3ms", root: "ط ل ي", gloss: "coated" },
            { surface: "الأَخْشَابَ", lemma: "أخشاب", pos: "noun", features: "def.acc", root: "خ ش ب", gloss: "the timbers" },
            { surface: "بِالشَّحْمِ", lemma: "شحم", pos: "noun", features: "prep+def.gen", root: "ش ح م", gloss: "with grease" },
          ],
        },
        {
          id: "qr2-56-034",
          ar: "فَلَمَّا أَمْلَسَتْ أَزْلَقَ عَلَيْهَا السُّفُنَ،",
          en: "and once they were smooth he slid the ships over them,",
          tokens: [
            { surface: "فَلَمَّا", lemma: "لما", pos: "conj", root: "", gloss: "and when" },
            { surface: "أَمْلَسَتْ", lemma: "أملس", pos: "verb", features: "perf.3fs", root: "م ل س", gloss: "they became smooth" },
            { surface: "أَزْلَقَ", lemma: "أزلق", pos: "verb", features: "perf.3ms", root: "ز ل ق", gloss: "he slid" },
            { surface: "عَلَيْهَا", lemma: "على", pos: "prep", features: "prep+3fs", root: "", gloss: "over them" },
            { surface: "السُّفُنَ", lemma: "سفينة", pos: "noun", features: "def.acc.pl", root: "س ف ن", gloss: "the ships" },
          ],
        },
        {
          id: "qr2-56-035",
          ar: "وَهِيَ سَبْعُوْنَ سَفِيْنَةً.",
          en: "seventy ships.",
          tokens: [
            { surface: "وَهِيَ", lemma: "هي", pos: "noun", features: "conj+nom.3fs", root: "", gloss: "and they (were)" },
            { surface: "سَبْعُوْنَ", lemma: "سبعين", pos: "num", features: "nom", root: "س ب ع", gloss: "seventy" },
            { surface: "سَفِيْنَةً", lemma: "سفينة", pos: "noun", features: "indef.acc", root: "س ف ن", gloss: "ships" },
          ],
        },
      ],
      checks: [
        {
          q: "بِمَاذَا طَلَى مُحَمَّدٌ الأَخْشَابَ؟",
          options: ["بِالشَّحْمِ", "بِالْمَاءِ", "بِالزَّيْتِ"],
          answer: 0,
          qEn: "With what did Muhammad coat the timbers?",
          optionsEn: ["With grease", "With water", "With oil"],
        },
      ],
    },
    {
      en: "And nothing alarmed the people of Constantinople, but that the Muslims' ships had anchored on the shore of Constantinople, and they were utterly bewildered.",
      sentences: [
        {
          id: "qr2-56-036",
          ar: "وَمَا رَاعَ أَهْلُ الْقُسْطُنْطِيْنِيَّةِ،",
          en: "And nothing alarmed the people of Constantinople,",
          tokens: [
            { surface: "وَمَا", lemma: "ما", pos: "part", features: "conj+neg", root: "", gloss: "and nothing" },
            { surface: "رَاعَ", lemma: "راع", pos: "verb", features: "perf.3ms", root: "ر و ع", gloss: "alarmed" },
            { surface: "أَهْلُ", lemma: "أهل", pos: "noun", features: "constr.nom", root: "أ ه ل", gloss: "the people of" },
            { surface: "الْقُسْطُنْطِيْنِيَّةِ", lemma: "قسطنطينية", pos: "proper", features: "def.gen", root: "", gloss: "Constantinople" },
          ],
        },
        {
          id: "qr2-56-037",
          ar: "إِلاَّ وَسُفُنُ الْمُسْلِمِيْنَ قَدْ أَرْسَتْ عَلَى سَاحِلِ الْقُسْطُنْطِيْنِيَّةِ،",
          en: "but that the Muslims' ships had anchored on the shore of Constantinople,",
          tokens: [
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", root: "", gloss: "except that" },
            { surface: "وَسُفُنُ", lemma: "سفينة", pos: "noun", features: "conj+constr.nom.pl", root: "س ف ن", gloss: "and the ships of" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "adj", features: "def.gen.pl", root: "س ل م", gloss: "the Muslims" },
            { surface: "قَدْ", lemma: "قد", pos: "part", root: "", gloss: "had" },
            { surface: "أَرْسَتْ", lemma: "أرسى", pos: "verb", features: "perf.3fs", root: "ر س و", gloss: "anchored" },
            { surface: "عَلَى", lemma: "على", pos: "prep", root: "", gloss: "on" },
            { surface: "سَاحِلِ", lemma: "ساحل", pos: "noun", features: "constr.gen", root: "س ح ل", gloss: "the shore of" },
            { surface: "الْقُسْطُنْطِيْنِيَّةِ", lemma: "قسطنطينية", pos: "proper", features: "def.gen", root: "", gloss: "Constantinople" },
          ],
        },
        {
          id: "qr2-56-038",
          ar: "وَسُقِطَ فِيْ أَيْدِيْهِمْ.",
          en: "and they were utterly bewildered.",
          tokens: [
            { surface: "وَسُقِطَ", lemma: "سقط", pos: "verb", features: "conj+pass.perf.3ms", root: "س ق ط", gloss: "and it fell" },
            { surface: "فِيْ", lemma: "في", pos: "prep", root: "", gloss: "into" },
            { surface: "أَيْدِيْهِمْ", lemma: "يد", pos: "noun", features: "gen.pl+3mpl", root: "ي د ي", gloss: "their hands" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا حَدَثَ لأَهْلِ الْقُسْطُنْطِيْنِيَّةِ عِنْدَمَا رَأَوْا سُفُنَ الْمُسْلِمِيْنَ عَلَى السَّاحِلِ؟",
          options: ["ارْتَاعُوا وَتَحَيَّرُوا", "فَرِحُوا", "لَمْ يَعْلَمُوا"],
          answer: 0,
          qEn: "What happened to the people of Constantinople when they saw the Muslims' ships on the shore?",
          optionsEn: ["They were alarmed and bewildered", "They rejoiced", "They didn't notice"],
        },
      ],
    },
    {
      en: "Thus did Muhammad take Constantinople -- the capital of the Byzantine state -- and the impregnable capital of Christendom fell before a young Muslim commander.",
      sentences: [
        {
          id: "qr2-56-039",
          ar: "وَهَكَذَا أَخَذَ مُحَمَّدٌ الْقُسْطُنْطِيْنِيَّةَ ـ عَاصِمَةَ الدَّوْلَةِ الْبِيْزَنْطِيَّةِ ـ وَسَقَطَتْ عَاصِمَةُ النَّصْرَانِيَّةِ الْمَنِيْعَةُ أَمَامَ قَائِدٍ مُسْلِمٍ شَابٍّ.",
          en: "Thus did Muhammad take Constantinople -- the capital of the Byzantine state -- and the impregnable capital of Christendom fell before a young Muslim commander.",
          tokens: [
            { surface: "وَهَكَذَا", lemma: "هكذا", pos: "adv", features: "conj", root: "", gloss: "and thus" },
            { surface: "أَخَذَ", lemma: "أخذ", pos: "verb", features: "perf.3ms", root: "أ خ ذ", gloss: "took" },
            { surface: "مُحَمَّدٌ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
            { surface: "الْقُسْطُنْطِيْنِيَّةَ", lemma: "قسطنطينية", pos: "proper", features: "def.acc", root: "", gloss: "Constantinople" },
            { surface: "عَاصِمَةَ", lemma: "عاصمة", pos: "noun", features: "constr.acc", root: "ع ص م", gloss: "the capital of" },
            { surface: "الدَّوْلَةِ", lemma: "دولة", pos: "noun", features: "def.gen", root: "د و ل", gloss: "the state" },
            { surface: "الْبِيْزَنْطِيَّةِ", lemma: "بيزنطية", pos: "adj", features: "def.gen.f", root: "", gloss: "the Byzantine" },
            { surface: "وَسَقَطَتْ", lemma: "سقط", pos: "verb", features: "conj+perf.3fs", root: "س ق ط", gloss: "and fell" },
            { surface: "عَاصِمَةُ", lemma: "عاصمة", pos: "noun", features: "constr.nom", root: "ع ص م", gloss: "the capital of" },
            { surface: "النَّصْرَانِيَّةِ", lemma: "نصرانية", pos: "adj", features: "def.gen.f", root: "ن ص ر", gloss: "Christendom" },
            { surface: "الْمَنِيْعَةُ", lemma: "منيع", pos: "adj", features: "def.nom.f", root: "م ن ع", gloss: "the impregnable" },
            { surface: "أَمَامَ", lemma: "أمام", pos: "prep", root: "", gloss: "before" },
            { surface: "قَائِدٍ", lemma: "قائد", pos: "noun", features: "indef.gen", root: "ق و د", gloss: "a commander" },
            { surface: "مُسْلِمٍ", lemma: "مسلم", pos: "adj", features: "indef.gen", root: "س ل م", gloss: "Muslim" },
            { surface: "شَابٍّ", lemma: "شاب", pos: "adj", features: "indef.gen", root: "ش ب ب", gloss: "young" },
          ],
        },
      ],
      checks: [
        {
          q: "كَيْفَ وَصَفَ الْكَاتِبُ عَاصِمَةَ النَّصْرَانِيَّةِ؟",
          options: ["الْمَنِيْعَةُ", "الصَّغِيْرَةُ", "الضَّعِيْفَةُ"],
          answer: 0,
          qEn: "How did the author describe the capital of Christendom?",
          optionsEn: ["Impregnable", "Small", "Weak"],
        },
      ],
    },
    {
      en: "This great city, and Turkey, has remained in the hands of the Muslims since the year 853 AH -- the day Muhammad ibn Murad conquered it -- until this very day.",
      sentences: [
        {
          id: "qr2-56-040",
          ar: "وَلاَ تَزَالُ هَذِهِ الْمَدِيْنَةُ الْعَظِيْمَةُ،",
          en: "This great city has remained,",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "تَزَالُ", lemma: "زال", pos: "verb", features: "impf.3fs", root: "ز ي ل", gloss: "has ceased (to be)" },
            { surface: "هَذِهِ", lemma: "هذا", pos: "dem", features: "f", root: "", gloss: "this" },
            { surface: "الْمَدِيْنَةُ", lemma: "مدينة", pos: "noun", features: "def.nom", root: "م د ن", gloss: "the city" },
            { surface: "الْعَظِيْمَةُ", lemma: "عظيم", pos: "adj", features: "def.nom.f", root: "ع ظ م", gloss: "the great" },
          ],
        },
        {
          id: "qr2-56-041",
          ar: "وَتُرْكِيَّا،",
          en: "and Turkey,",
          tokens: [
            { surface: "وَتُرْكِيَّا", lemma: "تركيا", pos: "proper", features: "conj", root: "", gloss: "and Turkey" },
          ],
        },
        {
          id: "qr2-56-042",
          ar: "فِيْ يَدِ الْمُسْلِمِيْنَ مِنْ سَنَةِ ٨٥٣ هـ ـ يَوْمَ فَتَحَهَا مُحَمَّدُ بْنُ مُرَادٍ ـ إِلَى يَوْمِ النَّاسِ هَذَا.",
          en: "in the hands of the Muslims since the year 853 AH -- the day Muhammad ibn Murad conquered it -- until this very day.",
          tokens: [
            { surface: "فِيْ", lemma: "في", pos: "prep", root: "", gloss: "in" },
            { surface: "يَدِ", lemma: "يد", pos: "noun", features: "constr.gen", root: "ي د ي", gloss: "the hand of" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "adj", features: "def.gen.pl", root: "س ل م", gloss: "the Muslims" },
            { surface: "مِنْ", lemma: "من", pos: "prep", root: "", gloss: "since" },
            { surface: "سَنَةِ", lemma: "سنة", pos: "noun", features: "constr.gen", root: "س ن و", gloss: "the year" },
            { surface: "٨٥٣", lemma: "٨٥٣", pos: "num", root: "", gloss: "853" },
            { surface: "هـ", lemma: "هـ", pos: "noun", root: "", gloss: "AH (of the Hijra)" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc", root: "ي و م", gloss: "the day" },
            { surface: "فَتَحَهَا", lemma: "فتح", pos: "verb", features: "perf.3ms+3fs", root: "ف ت ح", gloss: "conquered it" },
            { surface: "مُحَمَّدُ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
            { surface: "بْنُ", lemma: "ابن", pos: "noun", features: "constr.nom", root: "ب ن ي", gloss: "son of" },
            { surface: "مُرَادٍ", lemma: "مراد", pos: "proper", features: "gen", root: "", gloss: "Murad" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", root: "", gloss: "until" },
            { surface: "يَوْمِ", lemma: "يوم", pos: "noun", features: "constr.gen", root: "ي و م", gloss: "the day of" },
            { surface: "النَّاسِ", lemma: "ناس", pos: "noun", features: "def.gen", root: "ن و س", gloss: "the people" },
            { surface: "هَذَا", lemma: "هذا", pos: "dem", root: "", gloss: "this" },
          ],
        },
      ],
      checks: [
        {
          q: "مُنْذُ أَيِّ سَنَةٍ وَالْقُسْطُنْطِيْنِيَّةُ فِيْ يَدِ الْمُسْلِمِيْنَ؟",
          options: ["سَنَةَ ٨٥٣ هـ", "سَنَةَ ٩٠٠ هـ", "سَنَةَ ٧٠٠ هـ"],
          answer: 0,
          qEn: "Since which year has Constantinople been in Muslim hands?",
          optionsEn: ["853 AH", "900 AH", "700 AH"],
        },
      ],
    },
    {
      en: "\"And to Allah belongs the command, before and after.\"",
      sentences: [
        {
          id: "qr2-56-043",
          ar: "وَ﴿لِلَّهِ الأَمْرُ مِن قَبْلُ وَمِن بَعْدُ﴾.",
          en: "\"And to Allah belongs the command, before and after.\"",
          tokens: [
            { surface: "وَلِلَّهِ الأَمْرُ مِن قَبْلُ", lemma: "أمر", pos: "noun", features: "conj+prep+def.nom", root: "أ م ر", gloss: "and to Allah belongs the command, before," },
            { surface: "وَمِن بَعْدُ", lemma: "بعد", pos: "adv", features: "conj+prep", root: "ب ع د", gloss: "and after" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا يَقُوْلُ اللهُ تَعَالَى فِيْ خِتَامِ الدَّرْسِ؟",
          options: ["لِلَّهِ الأَمْرُ مِنْ قَبْلُ وَمِنْ بَعْدُ", "إِنَّ اللهَ مَعَ الصَّابِرِيْنَ", "وَاللهُ غَفُوْرٌ رَحِيْمٌ"],
          answer: 0,
          qEn: "What does Allah the Exalted say at the close of the lesson?",
          optionsEn: ["To Allah belongs the command, before and after", "Indeed Allah is with the patient", "And Allah is Forgiving, Merciful"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "وَقَدْ",
        post: "اللهُ أَنْ يَكُوْنَ هَذَا الْفَتْحُ الْعَظِيْمُ",
        en: "And Allah had decreed that this great conquest would be...",
        options: ["قَدَّرَ", "يُقَدِّرُ", "قَدَّرْتُ", "قَدَّرُوا"],
        answer: 0,
        rationales: [
          "Perfect 3rd person masculine -- he decreed.",
          "Present/future tense -- he decrees.",
          "1st person singular -- I decreed.",
          "3rd person plural -- they decreed.",
        ],
      },
      {
        type: "cloze",
        pre: "",
        post: "الأَخْشَابَ بِالشَّحْمِ،",
        en: "He coated the timbers with grease,",
        options: ["طَلَى", "يَطْلِي", "طَلَيْتُ", "طَلَوْا"],
        answer: 0,
        rationales: [
          "Perfect 3rd person masculine -- he coated.",
          "Present/future tense -- he coats.",
          "1st person singular -- I coated.",
          "3rd person plural -- they coated.",
        ],
      },
      {
        type: "cloze",
        pre: "",
        post: "سَبْعِيْنَ سَفِيْنَةً عَلَى الْبَرِّ.",
        en: "He made seventy ships travel over land.",
        options: ["سَيَّرَ", "يُسَيِّرُ", "سَيَّرْتُ", "سَيَّرُوا"],
        answer: 0,
        rationales: [
          "Perfect 3rd person masculine -- he dispatched.",
          "Present/future tense -- he dispatches.",
          "1st person singular -- I dispatched.",
          "3rd person plural -- they dispatched.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "زَحَفَ مُحَمَّدٌ إِلَى الْقُسْطُنْطِيْنِيَّةِ",
        pre: "",
        post: "مُحَمَّدٌ إِلَى الْقُسْطُنْطِيْنِيَّةِ",
        targetPerson: "هُم",
        targetEn: "they",
        options: ["زَحَفَتْ", "زَحَفُوا", "نَزْحَفُ", "تَزْحَفُ"],
        answer: 1,
        rationales: [
          "3rd feminine singular -- she advanced.",
          "3rd masculine plural takes the suffix ـُوا.",
          "1st person plural -- we advance.",
          "2nd masculine singular / 3rd feminine -- you advance / she advances.",
        ],
      },
      {
        type: "shift",
        base: "أَعَدَّ لِذَلِكَ عُدَّةً عَظِيْمَةً",
        pre: "",
        post: "لِذَلِكَ عُدَّةً عَظِيْمَةً",
        targetPerson: "أَنْتَ",
        targetEn: "you (m.)",
        options: ["أَعْدَدْتَ", "يُعِدُّ", "أَعْدَدْنَا", "أَعْدَدْتُمْ"],
        answer: 0,
        rationales: [
          "2nd masculine singular perfect of a doubled verb takes ـدْتَ.",
          "3rd masculine singular present -- he prepares.",
          "1st person plural -- we prepared.",
          "2nd masculine plural -- you (all) prepared.",
        ],
      },
    ],
  },
};

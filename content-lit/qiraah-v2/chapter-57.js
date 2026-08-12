// القراءة الراشدة, volume two, chapter 57 (printed heading "٥٧") --
// الْخَلِيْفَةُ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ رَحْمَةُ اللهِ عَلَيْهِ (١) --
// "The Caliph Umar bin Abdul Aziz, may Allah have mercy on him (1)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 191-193 (PDF page
// index == printed page number). A biographical chapter told through a
// sequence of short anecdotes rather than continuous narrative -- pages
// 191-192 sketch his upbringing, temperament, and unsought accession to
// the caliphate; page 193 gives two short scrupulousness anecdotes
// (ambergris, heated bathwater) and closes with a sermon vignette. Ends
// with a "٭ ٭ ٭" divider matching own ch43's usage for a chapter that
// continues into a numbered part 2 -- own ch58 ("...(٢)", pp.194-195)
// picks up the same biography.
//
// Paragraph granularity: as in own ch56, each blank-line-separated block
// on the printed page is treated as its own `paragraphs[]` entry (11
// total) rather than merged into fewer paragraphs -- this book's
// biographical/anecdotal chapters are laid out as short discrete beats,
// and that block structure reads as the intended unit. Sentences are
// still split at each ، and . (and ؟/!) throughout, per the project's
// standing convention; several of the anecdotes (P7 especially, an
// eleven-clause list of Umar's reforms) end up highly comma-fragmented.
//
// Numeral "٦١" and the "هـ" (Hijri-year) abbreviation are transcribed as
// printed Arabic-Indic digits/abbreviation and tokenized the same way
// own ch56 first did for "٨٥٣ هـ" -- reused here as an established
// notation rather than re-litigated.
//
// Homographs / reused-with-extended-sense (existing lemma key, token-
// level pos/gloss override, no new `newWords`/`lemmas` entry since none
// of these are footnoted on their page):
//   - "السُّنَّةَ" (qr2-57-034, noun "the Sunnah, prophetic practice")
//     reuses the lemma key "سنة" already taught as "year" (v1
//     ch02/ch10) -- unrelated sense, identical spelling.
//   - "مَرْكَبَ"/"الْمَرَاكِبِ" (qr2-57-025/026, noun "mount, riding
//     conveyance") reuses the lemma key "مركب" already taught as "a
//     vessel, raft" (own ch50) and used adjectivally as "composed" (own
//     ch56) -- broadened here to its more general core sense of "thing
//     for conveyance," not a raft specifically.
//   - "حَمَلَهُمْ" (qr2-57-032, "he directed/compelled them") and "سَارَ"
//     (qr2-57-035, "he conducted himself, proceeded") both reuse their
//     already-known literal senses ("to carry," own ch53; "to travel,"
//     v1 ch08) in their standard idiomatic extensions ("حمل فلاناً على
//     كذا" = to make someone follow something; "سار بالعدل" = to conduct
//     oneself justly) -- ordinary polysemy, not treated as new entries.
//   - "الْمَلِكِ" (qr2-57-022, in the proper name "عَبْدِ الْمَلِكِ" /
//     "Abdul Malik") is NOT reused from any noun "king" lemma -- no such
//     lemma exists yet in the corpus, so it is tokenized pos:"proper"
//     inline like the rest of that name, matching the personal-name
//     convention below.
//
// Transcription note: "أَمَرَ بِهَا حَتَّى فَرُفِعَتْ حَتَّى تُبَاعَ"
// (qr2-57-051) was carefully disambiguated via repeated crop-zoom --
// the ambiguous cluster ف-ر-ف-ع-ت only parses as فَ (the "so" conjunction)
// + رُفِعَتْ (passive perfect 3fs of "رفع", already known, v1 ch09,
// "to raise, lift/set aside"), confirmed by the fact that "رفع" is
// independently already an established lemma. Read as: "he gave an
// order about it, so it was set aside, until it would be sold." Also
// verified via crop-zoom: "خَاشِعاً مُتَدَيِّناً" (qr2-57-021) -- initially
// misread at a distance as "مترديا" (clad/wearing), corrected on
// close inspection to "مُتَدَيِّناً" ("devout," from دين), which fits
// context ("humble, devout") far better than the misread alternative.
//
// One-lemma-two-pos: "مُتَنَعِّمَاً" (qr2-57-011, adj "indulging in
// ease/luxury") and "التَّنَعُّمِ" (qr2-57-015, noun "indulgence, ease")
// share the single new entry "تنعم" (root ن ع م, Form V) even though the
// participle's extra prefixed م is a real spelling difference from the
// masdar -- both are transparently the same Form V verb-family word to a
// learner, so this extends the project's one-lemma-two-pos convention
// slightly further than its usual identical-spelling cases, in the same
// spirit as folding a verb and its masdar under one entry. Likewise
// "مُسَخَّنٍ" (qr2-57-055, adj "heated") and "تُسَخِّنُ" (qr2-57-056, verb
// "to heat") share the single entry "سخن" (Form II throughout).
//
// Distinct-derived-form new entries (naturally different spelling from
// an already-known root-mate, so kept as their own `newWords` entries):
// "أَمَرَّ" (qr2-57-052, Form IV "to pass [something] over/rub") is new
// despite the Form I verb "مر" ("to pass by," qr2-57-013) already being
// KNOWN -- caught during vocabulary cross-checking: an earlier draft of
// this chapter mistakenly listed "مر" itself as a new entry, but a
// token-level cross-check (see cross57_tokens.mjs) found it already used
// as a token (pos:"verb", gloss "he passes") in own ch47, with no
// `lemmas` entry ever created for it -- corrected the same way as "أنا"
// (ch55) and "أخبر" (ch56) before it: "مر" is reused via a token-level
// gloss only, not re-added to `newWords`/`lemmas`. "أَمَرَّ" itself remains
// a genuinely new, differently-spelled measure, following the سيّر/سار
// precedent from own ch56.
// "أَدْخَلَ" (qr2-57-060, Form IV "to bring in") is new despite "دخل"
// ("to enter," v1 ch08) being known. "أَفْسَدْتَّهُ" (qr2-57-058, Form IV
// "to spoil") is new and has no simple-verb root-mate yet in the corpus.
// The lemma "أفسد" is used directly (matching how own ch56 used "أعد"
// without a separate base-verb entry). "أَصْلَحَهُ" (qr2-57-044, Form IV
// "to fix, repair") likewise has no "صلح" base verb yet taught, so
// "أصلح" is entered directly as its own citation form. "وِلاَيَتِهِ"
// (qr2-57-018, noun "governorship") and "وَلِيَ" (qr2-57-016, verb "to
// assume [an office]") are kept as two separate entries ("ولاية"/"ولي")
// despite sharing a root, since they are genuinely different headwords
// (noun vs. verb) with different spellings -- likewise "خَلاَفَةَ"
// ("caliphate") and "خَلِيْفَةِ" ("caliph") are two separate entries.
//
// Proper names (Umar [reusing the already-established lemma key from
// v1 ch04/ch06 and own ch02's abstract-noun sense], Asim, al-Khattab,
// Sulayman [reusing v1 ch06/ch09's lemma key], Azhar) are tokenized
// pos:"proper" inline with their own gloss and no root, per the ch43/
// ch56 convention that bare personal names don't get global `lemmas`/
// `newWords` entries. "عُمَرِيَّة" (qr2-57-014, the name of a distinctive
// gait/walking style attributed to Umar) is the one exception kept as
// its own `newWords` entry despite being name-derived, since -- like
// own ch56's "بيزنطية"/"نصرانية" -- it is a descriptive adjective
// (nisba pattern), not a bare name, and worth teaching as vocabulary.
//
// Vocabulary notes: "ولد"، "بن"، "عبد"، "سنة"، "أم"، "بنت"، "جمع"،
// "قرآن"، "صغير"، "بعث"، "أدب"، "كثير"، "مكان"، "رجع"، "قول"، "حب"،
// "شباب" (reused -- already tokenized as a noun in own ch41, distinct
// from "شاب" "young man")، "أكثر" (its "more/bigger" elative sense from
// own ch56 is reused here with a token-level pos override for the verb
// "يُكْثِرُ", to do a lot of -- a lemma-key collision with no
// distinguishing spelling, per the أن/كل precedent from own ch54)،
// "وجد"، "الذي"، "سمى" (already used as a token in own ch45/53/54/55
// despite never having its own `lemmas` entry -- confirmed reusable via
// a token-level, not just `lemmas`-dict-level, cross-check this
// chapter)، "مشى" (own ch42)، "خاص" (own ch41)، "قيام" (own ch42, "rising,
// getting up")، "لون" (own ch52)، "ضر" (own ch42/45/46)، "غسل" (own
// ch42)، "جف" (own ch46)، "مر" (own ch47, "to pass by" -- reused via a
// token-level gloss only, no `lemmas` entry; see the correction noted
// in the distinct-derived-form section above)، "علم"، "لما"، "قال"، "إن"، "أمر"، "سأل"،
// "صاحب"، "الله"، "جلس"، "ناس"، "بعد"، "ثلاثة"، "شديد"، "مسجد"، "رسول"،
// "عالم" (reused for the plural "الْعُلَمَاءِ")، "كتاب"، "عدل"، "دنيا"،
// "نهى"، "سلام"، "ترك"، "طعام"، "خدم"، "عند"، "قوم"، "ليلة"، "قام"،
// "قيل"، "كفى"، "أنا"، "أخذ"، "يد"، "دعا" (its "to call, invite" sense
// from v1 ch04 covers "فَدَعَا بِوَضُوْءٍ", "he called for water")، "ماء"،
// "قال"، "نعم"، "أيام"، "حطب"، "جمعة"، "قليل"، "عتب"، "انتظر"،
// "قميص" (own ch46, reused directly)، "رأى"، "خطب" are all already
// known and reused per the notes above.
export const CHAPTER = {
  id: "ch57",
  title: {
    ar: "الْخَلِيْفَةُ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ (١)",
    en: "The Caliph Umar bin Abdul Aziz (1)"
  },
  pages: [191, 192, 193],
  newWords: [
    "تأدب", "خال", "تنعم", "رائحة", "مشية", "عمرية", "جارية", "ولي",
    "ولاية", "خلافة", "زهد", "رفض", "تعظيم", "إعظام", "خاشع", "متدين",
    "فزع", "قط", "خليفة", "أبى", "بغلة", "سرادق", "فرش", "دهن", "شريعة",
    "مظلمة", "أحيا", "ابتدأ", "سراج", "أصلح", "أمير", "مؤمن", "فيء",
    "عنبرة", "باع", "أنف", "قمقم", "سخن", "مطبخ", "أفسد", "حاسب",
    "أدخل", "مرقوع", "أمرّ"
  ],
  lemmas: {
    "تأدب": { root: "أ د ب", pos: "verb", gloss: "to be trained in manners, be educated" },
    "خال": { root: "خ و ل", pos: "noun", gloss: "maternal uncle" },
    "تنعم": { root: "ن ع م", pos: "verb", gloss: "to live in ease, indulge in luxury" },
    "رائحة": { root: "ر و ح", pos: "noun", gloss: "scent, smell" },
    "مشية": { root: "م ش ي", pos: "noun", gloss: "a gait, way of walking" },
    "عمرية": { root: "", pos: "adj", gloss: "Umari (a distinctive gait)" },
    "جارية": { root: "ج ر ي", pos: "noun", gloss: "slave-girl, young woman" },
    "ولي": { root: "و ل ي", pos: "verb", gloss: "to assume (an office), take charge of" },
    "ولاية": { root: "و ل ي", pos: "noun", gloss: "governorship, province" },
    "خلافة": { root: "خ ل ف", pos: "noun", gloss: "the caliphate" },
    "زهد": { root: "ز ه د", pos: "verb", gloss: "to renounce, be ascetic (about)" },
    "رفض": { root: "ر ف ض", pos: "verb", gloss: "to reject" },
    "تعظيم": { root: "ع ظ م", pos: "noun", gloss: "honoring, glorification" },
    "إعظام": { root: "ع ظ م", pos: "noun", gloss: "reverence, exaltation" },
    "خاشع": { root: "خ ش ع", pos: "adj", gloss: "humble, reverent" },
    "متدين": { root: "د ي ن", pos: "adj", gloss: "devout, religious" },
    "فزع": { root: "ف ز ع", pos: "verb", gloss: "to be alarmed, startled" },
    "قط": { root: "", pos: "adv", gloss: "ever, at all (with negation)" },
    "خليفة": { root: "خ ل ف", pos: "noun", gloss: "caliph" },
    "أبى": { root: "أ ب ي", pos: "verb", gloss: "to refuse" },
    "بغلة": { root: "ب غ ل", pos: "noun", gloss: "she-mule" },
    "سرادق": {
      root: "س ر د ق", pos: "noun", gloss: "tent, pavilion",
      book_note: "سُرَادِقٌ جمع سُرَادِقَات: خَيْمَة يجتمع فيها الناس لِعُرْسٍ ومأتم أو غيرهما."
    },
    "فرش": { root: "ف ر ش", pos: "noun", gloss: "furnishings, bedding" },
    "دهن": { root: "د ه ن", pos: "noun", gloss: "oil, perfumed oil" },
    "شريعة": { root: "ش ر ع", pos: "noun", gloss: "sharia, religious law" },
    "مظلمة": { root: "ظ ل م", pos: "noun", gloss: "grievance, injustice" },
    "أحيا": { root: "ح ي ي", pos: "verb", gloss: "to revive, bring back to life" },
    "ابتدأ": { root: "ب د أ", pos: "verb", gloss: "to begin, initiate" },
    "سراج": { root: "س ر ج", pos: "noun", gloss: "lamp" },
    "أصلح": { root: "ص ل ح", pos: "verb", gloss: "to fix, repair, set right" },
    "أمير": { root: "أ م ر", pos: "noun", gloss: "commander, prince" },
    "مؤمن": { root: "أ م ن", pos: "noun", gloss: "believer" },
    "فيء": {
      root: "ف ي أ", pos: "noun", gloss: "war-spoils, booty",
      book_note: "فَيْءٌ جمع أَفْيَاء: خَرَاج، غَنِيْمة."
    },
    "عنبرة": {
      root: "ع ن ب ر", pos: "noun", gloss: "a piece of ambergris",
      book_note: "عَنْبَرَة: مادة صُلْبَة لاَ طَعْمَ لها ولا رائحة، تُصْبِح نوعاً من الطِّيب إذا سُحِقَتْ أو أُحْرِقَتْ."
    },
    "باع": { root: "ب ي ع", pos: "verb", gloss: "to sell" },
    "أنف": { root: "أ ن ف", pos: "noun", gloss: "nose" },
    "قمقم": {
      root: "ق م ق م", pos: "noun", gloss: "a small vessel",
      book_note: "قُمْقُمٌ جـ قَمَاقِمُ: إناء صغير من نُحاسٍ أو فِضَّةٍ."
    },
    "سخن": { root: "س خ ن", pos: "verb", gloss: "heated, to heat" },
    "مطبخ": { root: "ط ب خ", pos: "noun", gloss: "kitchen" },
    "أفسد": { root: "ف س د", pos: "verb", gloss: "to spoil, ruin" },
    "حاسب": { root: "ح س ب", pos: "verb", gloss: "to hold accountable, calculate against" },
    "أدخل": { root: "د خ ل", pos: "verb", gloss: "to bring in, introduce" },
    "مرقوع": { root: "ر ق ع", pos: "adj", gloss: "patched, mended" },
    "أمرّ": { root: "م ر ر", pos: "verb", gloss: "to pass (something) over, rub" }
  },
  paragraphs: [
    {
      en: "Umar bin Abdul Aziz was born in 61 AH; his mother was Umm Asim, a descendant of Umar bin al-Khattab. He memorized the Qur'an while still young, and his father sent him to Madinah to be trained in manners, where he would often visit Abdullah bin Umar because of his mother's kinship to him, then return to her and say: 'Mother, I love to be like my maternal uncle.'",
      sentences: [
        {
          id: "qr2-57-001",
          ar: "وُلِدَ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ سَنَةَ ٦١ هـ.",
          en: "Umar bin Abdul Aziz was born in the year 61 AH.",
          tokens: [
            { surface: "وُلِدَ", lemma: "ولد", pos: "verb", features: "pass.perf.3ms", root: "و ل د", gloss: "was born" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", root: "ب ن و", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul (name component)" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", gloss: "al-Aziz" },
            { surface: "سَنَةَ", lemma: "سنة", pos: "noun", features: "acc.f", root: "س ن و", gloss: "in the year (of)" },
            { surface: "٦١", lemma: "٦١", pos: "num", gloss: "61" },
            { surface: "هـ", lemma: "هـ", pos: "noun", gloss: "AH (of the Hijra)" },
          ],
        },
        {
          id: "qr2-57-002",
          ar: "وَأُمُّهُ أُمُّ عَاصِمِ بِنْتُ عَاصِمِ بْنِ عُمَرَ بْنِ الْخَطَّابِ،",
          en: "and his mother was Umm Asim, daughter of Asim bin Umar bin al-Khattab,",
          tokens: [
            { surface: "وَأُمُّهُ", lemma: "أم", pos: "noun", features: "conj+nom.f+3ms", root: "أ م م", gloss: "and his mother" },
            { surface: "أُمُّ", lemma: "أم", pos: "noun", features: "nom.f.constr", gloss: "Umm (name component)" },
            { surface: "عَاصِمِ", lemma: "عاصم", pos: "proper", features: "gen", gloss: "Asim" },
            { surface: "بِنْتُ", lemma: "بنت", pos: "noun", features: "nom.f.constr", root: "ب ن ت", gloss: "daughter (of)" },
            { surface: "عَاصِمِ", lemma: "عاصم", pos: "proper", features: "gen", gloss: "Asim" },
            { surface: "بْنِ", lemma: "بن", pos: "noun", features: "gen.constr", gloss: "son (of)" },
            { surface: "عُمَرَ", lemma: "عمر", pos: "proper", features: "gen", gloss: "Umar" },
            { surface: "بْنِ", lemma: "بن", pos: "noun", features: "gen.constr", gloss: "son (of)" },
            { surface: "الْخَطَّابِ", lemma: "الخطاب", pos: "proper", features: "def.gen", gloss: "al-Khattab" },
          ],
        },
        {
          id: "qr2-57-003",
          ar: "جَمَعَ الْقُرْآنَ،",
          en: "he memorized the whole Qur'an,",
          tokens: [
            { surface: "جَمَعَ", lemma: "جمع", pos: "verb", features: "perf.3ms", root: "ج م ع", gloss: "he memorized" },
            { surface: "الْقُرْآنَ", lemma: "قرآن", pos: "noun", features: "def.acc", root: "ق ر أ", gloss: "the Qur'an" },
          ],
        },
        {
          id: "qr2-57-004",
          ar: "وَهُوَ صَغِيْرٌ،",
          en: "while he was young,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+3ms", gloss: "while he (was)" },
            { surface: "صَغِيْرٌ", lemma: "صغير", pos: "adj", features: "indef.nom", root: "ص غ ر", gloss: "young" },
          ],
        },
        {
          id: "qr2-57-005",
          ar: "وَبَعَثَهُ أَبُوْهُ إِلَىٰ الْمَدِيْنَةِ يَتَأَدَّبُ بِهَا،",
          en: "his father sent him to Madinah to be trained in manners there,",
          tokens: [
            { surface: "وَبَعَثَهُ", lemma: "بعث", pos: "verb", features: "conj+perf.3ms+3ms", root: "ب ع ث", gloss: "and ... sent him" },
            { surface: "أَبُوْهُ", lemma: "أب", pos: "noun", features: "nom+3ms", root: "أ ب و", gloss: "his father" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "proper", features: "def.gen", gloss: "Madinah" },
            { surface: "يَتَأَدَّبُ", lemma: "تأدب", pos: "verb", features: "impf.3ms", root: "أ د ب", gloss: "to be trained in manners" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "+3fs", gloss: "there" },
          ],
        },
        {
          id: "qr2-57-006",
          ar: "وَكَانَ يَأْتِيْ عَبْدَ اللهِ بْنَ عُمَرَ كَثِيْراً،",
          en: "he used to come to Abdullah bin Umar often,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and he used to" },
            { surface: "يَأْتِيْ", lemma: "أتى", pos: "verb", features: "impf.3ms", root: "أ ت ي", gloss: "come to" },
            { surface: "عَبْدَ", lemma: "عبد", pos: "proper", features: "acc", gloss: "Abdullah (name component)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
            { surface: "بْنَ", lemma: "بن", pos: "noun", features: "acc.constr", gloss: "son (of)" },
            { surface: "عُمَرَ", lemma: "عمر", pos: "proper", features: "gen", gloss: "Umar" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adv", features: "acc", root: "ك ث ر", gloss: "often" },
          ],
        },
        {
          id: "qr2-57-007",
          ar: "لِمَكَانِ أُمِّهِ مِنْهُ،",
          en: "because of his mother's kinship to him,",
          tokens: [
            { surface: "لِمَكَانِ", lemma: "مكان", pos: "noun", features: "prep.gen", root: "ك و ن", gloss: "because of the position of" },
            { surface: "أُمِّهِ", lemma: "أم", pos: "noun", features: "gen.f+3ms", gloss: "his mother" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "+3ms", gloss: "to him" },
          ],
        },
        {
          id: "qr2-57-008",
          ar: "ثُمَّ يَرْجِعُ إِلَىٰ أُمِّهِ،",
          en: "then he would return to his mother,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "يَرْجِعُ", lemma: "رجع", pos: "verb", features: "impf.3ms", root: "ر ج ع", gloss: "he returns" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "أُمِّهِ", lemma: "أم", pos: "noun", features: "gen.f+3ms", gloss: "his mother" },
          ],
        },
        {
          id: "qr2-57-009",
          ar: "فَيَقُوْلُ: يَا أُمَّهْ!",
          en: "and say: 'O Mother!'",
          tokens: [
            { surface: "فَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", root: "ق و ل", gloss: "and say" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O" },
            { surface: "أُمَّهْ", lemma: "أم", pos: "noun", features: "voc.f", gloss: "Mother!" },
          ],
        },
        {
          id: "qr2-57-010",
          ar: "أَنَا أُحِبُّ أَنْ أَكُوْنَ مِثْلَ خَالِيْ.",
          en: "'I love to be like my maternal uncle.'",
          tokens: [
            { surface: "أَنَا", lemma: "أنا", pos: "noun", features: "1s", gloss: "I" },
            { surface: "أُحِبُّ", lemma: "حب", pos: "verb", features: "impf.1s", root: "ح ب ب", gloss: "love" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "to" },
            { surface: "أَكُوْنَ", lemma: "كان", pos: "verb", features: "impf.1s", root: "ك و ن", gloss: "be" },
            { surface: "مِثْلَ", lemma: "مثل", pos: "noun", features: "acc", gloss: "like" },
            { surface: "خَالِيْ", lemma: "خال", pos: "noun", features: "gen+1s", root: "خ و ل", gloss: "my maternal uncle" },
          ],
        },
      ],
      checks: [
        {
          q: "أَيْنَ بَعَثَ أَبُو عُمَرَ بْنِ عَبْدِ الْعَزِيْزِ ابْنَهُ لِيَتَأَدَّبَ؟",
          options: ["إِلَى مَكَّةَ", "إِلَى الْمَدِيْنَةِ", "إِلَى دِمَشْقَ", "إِلَى بَغْدَادَ"],
          answer: 1,
          qEn: "Where did Umar bin Abdul Aziz's father send him to be trained in manners?",
          optionsEn: ["To Makkah", "To Madinah", "To Damascus", "To Baghdad"],
        },
      ],
    },
    {
      en: "In his youth Umar bin Abdul Aziz lived in comfort, wearing so much perfume that his scent lingered in any place he passed through, and walking with a distinctive gait called 'the Umari' that the slave-girls learned for its elegance. He remained this way until he became caliph, whereupon he renounced the world and rejected it.",
      sentences: [
        {
          id: "qr2-57-011",
          ar: "وَكَانَ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ فِيْ شَبَابِهِ مُتَنَعِّمَاً،",
          en: "Umar bin Abdul Aziz, in his youth, was given to comfort and luxury,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and ... was" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul (name component)" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", gloss: "al-Aziz" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "شَبَابِهِ", lemma: "شباب", pos: "noun", features: "gen+3ms", gloss: "his youth" },
            { surface: "مُتَنَعِّمَاً", lemma: "تنعم", pos: "adj", features: "indef.acc", root: "ن ع م", gloss: "indulging in ease" },
          ],
        },
        {
          id: "qr2-57-012",
          ar: "يُكْثِرُ مِنَ الطِّيْبِ،",
          en: "using a great deal of perfume,",
          tokens: [
            { surface: "يُكْثِرُ", lemma: "أكثر", pos: "verb", features: "impf.3ms", root: "ك ث ر", gloss: "using a lot of" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "الطِّيْبِ", lemma: "طيب", pos: "noun", features: "def.gen", root: "ط ي ب", gloss: "perfume" },
          ],
        },
        {
          id: "qr2-57-013",
          ar: "حَتَّىٰ تُوْجَدَ رَائِحَتُهُ فِي الْمَكَانِ الَّذِيْ يَمُرُّ بِهِ،",
          en: "so that his scent would still be found in the place he had passed through,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "so that" },
            { surface: "تُوْجَدَ", lemma: "وجد", pos: "verb", features: "pass.impf.3fs", root: "و ج د", gloss: "would be found" },
            { surface: "رَائِحَتُهُ", lemma: "رائحة", pos: "noun", features: "nom.f+3ms", gloss: "his scent" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "الْمَكَانِ", lemma: "مكان", pos: "noun", features: "def.gen", gloss: "the place" },
            { surface: "الَّذِيْ", lemma: "الذي", pos: "rel", gloss: "that" },
            { surface: "يَمُرُّ", lemma: "مر", pos: "verb", features: "impf.3ms", root: "م ر ر", gloss: "he passed" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "through" },
          ],
        },
        {
          id: "qr2-57-014",
          ar: "وَيَمْشِيْ مِشْيَةً تُسَمَّىٰ «الْعُمَرَيَّةَ» كَانَ الْجَوَارِيْ يَتَعَلَّمْنَهَا مِنْ حُسْنِهَا،",
          en: "walking a gait called 'the Umari,' which the slave-girls used to learn for its elegance,",
          tokens: [
            { surface: "وَيَمْشِيْ", lemma: "مشى", pos: "verb", features: "conj+impf.3ms", root: "م ش ي", gloss: "and he walked" },
            { surface: "مِشْيَةً", lemma: "مشية", pos: "noun", features: "indef.acc.f", gloss: "a gait" },
            { surface: "تُسَمَّىٰ", lemma: "سمى", pos: "verb", features: "pass.impf.3fs", root: "س م و", gloss: "called" },
            { surface: "الْعُمَرَيَّةَ", lemma: "عمرية", pos: "adj", features: "def.acc.f", gloss: "'the Umari (gait)'" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", gloss: "used to" },
            { surface: "الْجَوَارِيْ", lemma: "جارية", pos: "noun", features: "def.nom.pl", gloss: "the slave-girls" },
            { surface: "يَتَعَلَّمْنَهَا", lemma: "تعلم", pos: "verb", features: "impf.3fp+3fs", root: "ع ل م", gloss: "learn it" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "for" },
            { surface: "حُسْنِهَا", lemma: "حسن", pos: "noun", features: "gen+3fs", gloss: "its elegance" },
          ],
        },
        {
          id: "qr2-57-015",
          ar: "وَلَمْ يَزَلْ عَلَىٰ هٰذَا التَّنَعُّمِ،",
          en: "he remained in this state of comfort and luxury,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "and not" },
            { surface: "يَزَلْ", lemma: "زال", pos: "verb", features: "impf.3ms", root: "ز ي ل", gloss: "he ceased (to be)" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "in" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "m", gloss: "this" },
            { surface: "التَّنَعُّمِ", lemma: "تنعم", pos: "noun", features: "def.gen", gloss: "ease and luxury" },
          ],
        },
        {
          id: "qr2-57-016",
          ar: "حَتَّىٰ وَلِيَ الْخِلاَفَةَ،",
          en: "until he assumed the caliphate,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "until" },
            { surface: "وَلِيَ", lemma: "ولي", pos: "verb", features: "perf.3ms", root: "و ل ي", gloss: "he assumed" },
            { surface: "الْخِلاَفَةَ", lemma: "خلافة", pos: "noun", features: "def.acc.f", gloss: "the caliphate" },
          ],
        },
        {
          id: "qr2-57-017",
          ar: "فَزَهِدَ فِي الدُّنْيَا وَرَفَضَهَا.",
          en: "and renounced the world and rejected it.",
          tokens: [
            { surface: "فَزَهِدَ", lemma: "زهد", pos: "verb", features: "conj+perf.3ms", root: "ز ه د", gloss: "and he renounced" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "(regarding)" },
            { surface: "الدُّنْيَا", lemma: "دنيا", pos: "noun", features: "def.gen.f", root: "د ن و", gloss: "the world" },
            { surface: "وَرَفَضَهَا", lemma: "رفض", pos: "verb", features: "conj+perf.3ms+3fs", root: "ر ف ض", gloss: "and rejected it" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ حِيْنَ وَلِيَ الْخِلاَفَةَ؟",
          options: ["زَادَ فِيْ تَنَعُّمِهِ", "زَهِدَ فِي الدُّنْيَا وَرَفَضَهَا", "تَرَكَ الْحُكْمَ", "سَافَرَ إِلَى الشَّامِ"],
          answer: 1,
          qEn: "What happened to Umar bin Abdul Aziz when he assumed the caliphate?",
          optionsEn: ["He increased his luxury", "He renounced the world and rejected it", "He gave up rule", "He traveled to Syria"],
        },
      ],
    },
    {
      en: "In his youth, and while governor of Madinah, he greatly honored the scholars, held the Prophet's ﷺ mosque in deep reverence, and was humble and devout.",
      sentences: [
        {
          id: "qr2-57-018",
          ar: "وَكَانَ فِيْ شَبَابِهِ وَوِلاَيَتِهِ لِلْمَدِيْنَةِ،",
          en: "In his youth and during his governorship of Madinah, he was",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and he was" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "شَبَابِهِ", lemma: "شباب", pos: "noun", features: "gen+3ms", gloss: "his youth" },
            { surface: "وَوِلاَيَتِهِ", lemma: "ولاية", pos: "noun", features: "conj+gen.f+3ms", gloss: "and his governorship" },
            { surface: "لِلْمَدِيْنَةِ", lemma: "مدينة", pos: "proper", features: "prep.def.gen", gloss: "of Madinah" },
          ],
        },
        {
          id: "qr2-57-019",
          ar: "كَثِيْرَ التَّعْظِيْمِ لِلْعُلَمَاءِ،",
          en: "greatly honoring the scholars,",
          tokens: [
            { surface: "كَثِيْرَ", lemma: "كثير", pos: "adj", features: "acc", gloss: "abundant in" },
            { surface: "التَّعْظِيْمِ", lemma: "تعظيم", pos: "noun", features: "def.gen", gloss: "honoring" },
            { surface: "لِلْعُلَمَاءِ", lemma: "عالم", pos: "noun", features: "prep.def.gen.pl", gloss: "of the scholars" },
          ],
        },
        {
          id: "qr2-57-020",
          ar: "شَدِيْدَ الإِعْظَامِ لِمَسْجِدِ الرَّسُوْلِ ﷺ،",
          en: "deeply reverent toward the mosque of the Messenger ﷺ,",
          tokens: [
            { surface: "شَدِيْدَ", lemma: "شديد", pos: "adj", features: "acc", root: "ش د د", gloss: "intense in" },
            { surface: "الإِعْظَامِ", lemma: "إعظام", pos: "noun", features: "def.gen", gloss: "reverence" },
            { surface: "لِمَسْجِدِ", lemma: "مسجد", pos: "noun", features: "prep.gen.constr", root: "س ج د", gloss: "for the mosque (of)" },
            { surface: "الرَّسُوْلِ", lemma: "رسول", pos: "noun", features: "def.gen", root: "ر س ل", gloss: "the Messenger" },
          ],
        },
        {
          id: "qr2-57-021",
          ar: "خَاشِعاً مُتَدَيِّناً.",
          en: "humble and devout.",
          tokens: [
            { surface: "خَاشِعاً", lemma: "خاشع", pos: "adj", features: "indef.acc", root: "خ ش ع", gloss: "humble" },
            { surface: "مُتَدَيِّناً", lemma: "متدين", pos: "adj", features: "indef.acc", root: "د ي ن", gloss: "devout" },
          ],
        },
      ],
      checks: [
        {
          q: "كَيْفَ كَانَ عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ مَعَ الْعُلَمَاءِ فِيْ شَبَابِهِ؟",
          options: ["كَانَ كَثِيْرَ التَّعْظِيْمِ لَهُمْ", "كَانَ لاَ يَلْتَفِتُ إِلَيْهِمْ", "كَانَ يُجَادِلُهُمْ كَثِيْراً", "كَانَ يَبْتَعِدُ عَنْهُمْ"],
          answer: 0,
          qEn: "How was Umar bin Abdul Aziz with the scholars in his youth?",
          optionsEn: ["He greatly honored them", "He paid them no attention", "He argued with them often", "He kept away from them"],
        },
      ],
    },
    {
      en: "Sulayman bin Abdul Malik designated Umar for the caliphate without his knowledge, and when Umar learned of it, he was alarmed.",
      sentences: [
        {
          id: "qr2-57-022",
          ar: "وَعَهِدَ سُلَيْمَانُ بْنُ عَبْدِ الْمَلِكِ إِلَيْهِ بِالْخِلاَفَةِ وَعُمَرُ لاَ يَعْلَمُ،",
          en: "Sulayman bin Abdul Malik designated him for the caliphate while Umar did not know,",
          tokens: [
            { surface: "وَعَهِدَ", lemma: "عهد", pos: "verb", features: "conj+perf.3ms", root: "ع ه د", gloss: "and ... designated" },
            { surface: "سُلَيْمَانُ", lemma: "سليمان", pos: "proper", features: "nom", gloss: "Sulayman" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul (name component)" },
            { surface: "الْمَلِكِ", lemma: "الملك", pos: "proper", features: "def.gen", gloss: "al-Malik" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "بِالْخِلاَفَةِ", lemma: "خلافة", pos: "noun", features: "prep.def.gen.f", gloss: "with the caliphate" },
            { surface: "وَعُمَرُ", lemma: "عمر", pos: "proper", features: "conj+nom", gloss: "while Umar" },
            { surface: "لاَ", lemma: "لا", pos: "part", gloss: "not" },
            { surface: "يَعْلَمُ", lemma: "علم", pos: "verb", features: "impf.3ms", root: "ع ل م", gloss: "know" },
          ],
        },
        {
          id: "qr2-57-023",
          ar: "فَلَمَّا عَلِمَ فَزِعَ.",
          en: "so when he learned of it, he was alarmed.",
          tokens: [
            { surface: "فَلَمَّا", lemma: "لما", pos: "part", features: "conj", gloss: "and when" },
            { surface: "عَلِمَ", lemma: "علم", pos: "verb", features: "perf.3ms", gloss: "he learned" },
            { surface: "فَزِعَ", lemma: "فزع", pos: "verb", features: "conj+perf.3ms", root: "ف ز ع", gloss: "he was alarmed" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ عُمَرُ حِيْنَ عَلِمَ أَنَّ سُلَيْمَانَ عَهِدَ إِلَيْهِ بِالْخِلاَفَةِ؟",
          options: ["فَرِحَ كَثِيْراً", "فَزِعَ", "رَفَضَ فَوْراً", "اِبْتَسَمَ"],
          answer: 1,
          qEn: "What did Umar do when he learned that Sulayman had designated him for the caliphate?",
          optionsEn: ["He rejoiced greatly", "He was alarmed", "He refused at once", "He smiled"],
        },
      ],
    },
    {
      en: "He said: 'By Allah, I never once asked Allah for this matter.'",
      sentences: [
        {
          id: "qr2-57-024",
          ar: "وَقَالَ: وَاللهِ إِنَّ هٰذَا الأَمْرَ مَا سَأَلْتُ اللهَ قَطُّ.",
          en: "and he said: 'By Allah, I never once asked Allah for this matter.'",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "and he said" },
            { surface: "وَاللهِ", lemma: "الله", pos: "proper", features: "conj+gen", gloss: "by Allah" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", gloss: "indeed" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "m", gloss: "this" },
            { surface: "الأَمْرَ", lemma: "أمر", pos: "noun", features: "def.acc", root: "أ م ر", gloss: "matter" },
            { surface: "مَا", lemma: "ما", pos: "part", gloss: "not" },
            { surface: "سَأَلْتُ", lemma: "سأل", pos: "verb", features: "perf.1s", root: "س أ ل", gloss: "I asked" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", gloss: "Allah" },
            { surface: "قَطُّ", lemma: "قط", pos: "adv", gloss: "ever" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا قَالَ عُمَرُ عَنِ الْخِلاَفَةِ؟",
          options: ["إِنَّهُ سَأَلَ اللهَ إِيَّاهَا كَثِيْراً", "إِنَّهُ مَا سَأَلَ اللهَ هٰذَا الأَمْرَ قَطُّ", "إِنَّهُ كَانَ يَتَمَنَّاهَا", "إِنَّهُ أَعَدَّ لَهَا نَفْسَهُ"],
          answer: 1,
          qEn: "What did Umar say about the caliphate?",
          optionsEn: ["That he had often asked Allah for it", "That he had never once asked Allah for this matter", "That he used to wish for it", "That he had prepared himself for it"],
        },
      ],
    },
    {
      en: "The keeper of the mounts brought him the caliph's own conveyance, but he refused, asking instead for his she-mule, and he returned the mounts, the tents, the furnishings, the perfumed oils, and the garments reserved for the caliph to the treasury of the Muslims.",
      sentences: [
        {
          id: "qr2-57-025",
          ar: "وَقَدَّمَ إِلَيْهِ صَاحِبُ الْمَرَاكِبِ مَرْكَبَ الْخَلِيْفَةِ فَأَبَىٰ وَقَالَ: اِيْتُوْنِيْ بِبَغْلَتِيْ،",
          en: "The master of the mounts brought the caliph's mount to him, but he refused and said: 'Bring me my she-mule,'",
          tokens: [
            { surface: "وَقَدَّمَ", lemma: "قدم", pos: "verb", features: "conj+perf.3ms", root: "ق د م", gloss: "and ... brought forward" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "صَاحِبُ", lemma: "صاحب", pos: "noun", features: "nom.constr", root: "ص ح ب", gloss: "the master (of)" },
            { surface: "الْمَرَاكِبِ", lemma: "مركب", pos: "noun", features: "def.gen.pl", gloss: "the mounts" },
            { surface: "مَرْكَبَ", lemma: "مركب", pos: "noun", features: "acc.constr", gloss: "the mount (of)" },
            { surface: "الْخَلِيْفَةِ", lemma: "خليفة", pos: "noun", features: "def.gen", gloss: "the caliph" },
            { surface: "فَأَبَىٰ", lemma: "أبى", pos: "verb", features: "conj+perf.3ms", root: "أ ب ي", gloss: "but he refused" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "and said" },
            { surface: "اِيْتُوْنِيْ", lemma: "أتى", pos: "verb", features: "imp.2mp+1s", root: "أ ت ي", gloss: "bring me" },
            { surface: "بِبَغْلَتِيْ", lemma: "بغلة", pos: "noun", features: "prep.gen.f+1s", gloss: "my she-mule" },
          ],
        },
        {
          id: "qr2-57-026",
          ar: "وَرَدَّ الْمَرَاكِبَ،",
          en: "and he sent back the mounts,",
          tokens: [
            { surface: "وَرَدَّ", lemma: "رد", pos: "verb", features: "conj+perf.3ms", root: "ر د د", gloss: "and he sent back" },
            { surface: "الْمَرَاكِبَ", lemma: "مركب", pos: "noun", features: "def.acc.pl", gloss: "the mounts" },
          ],
        },
        {
          id: "qr2-57-027",
          ar: "وَالسُّرَادِقَاتِ وَالْفُرُشَ،",
          en: "the tents and the furnishings,",
          tokens: [
            { surface: "وَالسُّرَادِقَاتِ", lemma: "سرادق", pos: "noun", features: "conj+def.acc.pl", gloss: "and the tents" },
            { surface: "وَالْفُرُشَ", lemma: "فرش", pos: "noun", features: "conj+def.acc", gloss: "and the furnishings" },
          ],
        },
        {
          id: "qr2-57-028",
          ar: "وَالأَدْهَانَ،",
          en: "the oils,",
          tokens: [
            { surface: "وَالأَدْهَانَ", lemma: "دهن", pos: "noun", features: "conj+def.acc.pl", gloss: "and the perfumed oils" },
          ],
        },
        {
          id: "qr2-57-029",
          ar: "وَالثِّيَابَ الْخَاصَّةَ بِالْخَلِيْفَةِ،",
          en: "and the garments reserved for the caliph,",
          tokens: [
            { surface: "وَالثِّيَابَ", lemma: "ثياب", pos: "noun", features: "conj+def.acc.pl", gloss: "and the garments" },
            { surface: "الْخَاصَّةَ", lemma: "خاص", pos: "adj", features: "def.acc.f", root: "خ ص ص", gloss: "reserved, special" },
            { surface: "بِالْخَلِيْفَةِ", lemma: "خليفة", pos: "noun", features: "prep.def.gen", gloss: "for the caliph" },
          ],
        },
        {
          id: "qr2-57-030",
          ar: "إِلَىٰ بَيْتِ مَالِ الْمُسْلِمِيْنَ.",
          en: "back to the treasury of the Muslims.",
          tokens: [
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "بَيْتِ", lemma: "بيت", pos: "noun", features: "gen.constr", root: "ب ي ت", gloss: "the treasury (house of)" },
            { surface: "مَالِ", lemma: "مال", pos: "noun", features: "gen.constr", root: "م و ل", gloss: "wealth (of)" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "def.gen.pl", root: "س ل م", gloss: "the Muslims" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ عُمَرُ حِيْنَ قُدِّمَ إِلَيْهِ مَرْكَبُ الْخَلِيْفَةِ؟",
          options: ["رَكِبَهُ فَوْراً", "أَبَى وَطَلَبَ بَغْلَتَهُ", "أَمَرَ بِتَزْيِيْنِهِ", "شَكَرَ صَاحِبَ الْمَرَاكِبِ"],
          answer: 1,
          qEn: "What did Umar do when the caliph's mount was brought to him?",
          optionsEn: ["He rode it at once", "He refused and asked for his own mule", "He ordered it decorated", "He thanked the master of the mounts"],
        },
      ],
    },
    {
      en: "He held audience for the people after three days, directed them toward the Sharia, redressed grievances, revived the Book and the Sunnah, conducted himself with justice, rejected the world and renounced it, forbade people from standing in his honor, was the first to offer the greeting of peace, gave up fine foods, and gave up being personally served.",
      sentences: [
        {
          id: "qr2-57-031",
          ar: "وَجَلَسَ لِلنَّاسِ بَعْدَ ثَلاَثٍ،",
          en: "He held audience for the people after three days,",
          tokens: [
            { surface: "وَجَلَسَ", lemma: "جلس", pos: "verb", features: "conj+perf.3ms", root: "ج ل س", gloss: "and he sat" },
            { surface: "لِلنَّاسِ", lemma: "ناس", pos: "noun", features: "prep.def.gen.pl", root: "ن و س", gloss: "for the people" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "noun", features: "acc", root: "ب ع د", gloss: "after" },
            { surface: "ثَلاَثٍ", lemma: "ثلاثة", pos: "num", features: "indef.gen.f", root: "ث ل ث", gloss: "three (days)" },
          ],
        },
        {
          id: "qr2-57-032",
          ar: "وَحَمَلَهُمْ عَلَىٰ الشَّرِيْعَةِ،",
          en: "directed them to follow the Sharia,",
          tokens: [
            { surface: "وَحَمَلَهُمْ", lemma: "حمل", pos: "verb", features: "conj+perf.3ms+3mp", gloss: "and directed them" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "to" },
            { surface: "الشَّرِيْعَةِ", lemma: "شريعة", pos: "noun", features: "def.gen.f", gloss: "the Sharia" },
          ],
        },
        {
          id: "qr2-57-033",
          ar: "وَرَدَّ الْمَظَالِمَ،",
          en: "redressed the grievances,",
          tokens: [
            { surface: "وَرَدَّ", lemma: "رد", pos: "verb", features: "conj+perf.3ms", gloss: "and redressed" },
            { surface: "الْمَظَالِمَ", lemma: "مظلمة", pos: "noun", features: "def.acc.pl", gloss: "the grievances" },
          ],
        },
        {
          id: "qr2-57-034",
          ar: "وَأَحْيَا الْكِتَابَ وَالسُّنَّةَ،",
          en: "revived the Book and the Sunnah,",
          tokens: [
            { surface: "وَأَحْيَا", lemma: "أحيا", pos: "verb", features: "conj+perf.3ms", root: "ح ي ي", gloss: "and revived" },
            { surface: "الْكِتَابَ", lemma: "كتاب", pos: "noun", features: "def.acc", root: "ك ت ب", gloss: "the Book" },
            { surface: "وَالسُّنَّةَ", lemma: "سنة", pos: "noun", features: "conj+def.acc.f", gloss: "and the Sunnah" },
          ],
        },
        {
          id: "qr2-57-035",
          ar: "وَسَارَ بِالْعَدْلِ،",
          en: "conducted himself with justice,",
          tokens: [
            { surface: "وَسَارَ", lemma: "سار", pos: "verb", features: "conj+perf.3ms", gloss: "and conducted himself" },
            { surface: "بِالْعَدْلِ", lemma: "عدل", pos: "noun", features: "prep.def.gen", root: "ع د ل", gloss: "with justice" },
          ],
        },
        {
          id: "qr2-57-036",
          ar: "وَرَفَضَ الدُّنْيَا،",
          en: "rejected the world,",
          tokens: [
            { surface: "وَرَفَضَ", lemma: "رفض", pos: "verb", features: "conj+perf.3ms", gloss: "and rejected" },
            { surface: "الدُّنْيَا", lemma: "دنيا", pos: "noun", features: "def.acc.f", gloss: "the world" },
          ],
        },
        {
          id: "qr2-57-037",
          ar: "وَزَهِدَ فِيْهَا،",
          en: "renounced it,",
          tokens: [
            { surface: "وَزَهِدَ", lemma: "زهد", pos: "verb", features: "conj+perf.3ms", gloss: "and renounced" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "+3fs", gloss: "it" },
          ],
        },
        {
          id: "qr2-57-038",
          ar: "وَنَهَىٰ عَنِ الْقِيَامِ،",
          en: "forbade people from standing for him,",
          tokens: [
            { surface: "وَنَهَىٰ", lemma: "نهى", pos: "verb", features: "conj+perf.3ms", gloss: "and forbade" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", gloss: "against" },
            { surface: "الْقِيَامِ", lemma: "قيام", pos: "noun", features: "def.gen", gloss: "standing (in his honor)" },
          ],
        },
        {
          id: "qr2-57-039",
          ar: "وَابْتَدَأَ بِالسَّلاَمِ،",
          en: "was first to give the greeting of peace,",
          tokens: [
            { surface: "وَابْتَدَأَ", lemma: "ابتدأ", pos: "verb", features: "conj+perf.3ms", root: "ب د أ", gloss: "and initiated" },
            { surface: "بِالسَّلاَمِ", lemma: "سلام", pos: "noun", features: "prep.def.gen", gloss: "the greeting" },
          ],
        },
        {
          id: "qr2-57-040",
          ar: "وَتَرَكَ أَلْوَانَ الطَّعَامِ،",
          en: "gave up varieties of food,",
          tokens: [
            { surface: "وَتَرَكَ", lemma: "ترك", pos: "verb", features: "conj+perf.3ms", gloss: "and gave up" },
            { surface: "أَلْوَانَ", lemma: "لون", pos: "noun", features: "acc.pl", gloss: "varieties" },
            { surface: "الطَّعَامِ", lemma: "طعام", pos: "noun", features: "def.gen", root: "ط ع م", gloss: "of food" },
          ],
        },
        {
          id: "qr2-57-041",
          ar: "وَتَرَكَ أَنْ يُخْدَمَ.",
          en: "and gave up being served.",
          tokens: [
            { surface: "وَتَرَكَ", lemma: "ترك", pos: "verb", features: "conj+perf.3ms", gloss: "and gave up" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "being" },
            { surface: "يُخْدَمَ", lemma: "خدم", pos: "verb", features: "pass.impf.3ms", root: "خ د م", gloss: "served" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ عُمَرُ حِيْنَ جَلَسَ لِلنَّاسِ بَعْدَ الْخِلاَفَةِ؟",
          options: ["زَادَ فِيْ نَفَقَاتِ الْقَصْرِ", "رَدَّ الْمَظَالِمَ وَأَحْيَا الْكِتَابَ وَالسُّنَّةَ وَسَارَ بِالْعَدْلِ", "جَمَعَ الْجُيُوْشَ لِلْفَتْحِ", "بَنَى الْمَسَاجِدَ فَقَطْ"],
          answer: 1,
          qEn: "What did Umar do when he held audience for the people after becoming caliph?",
          optionsEn: ["He increased the palace's expenses", "He redressed grievances, revived the Book and Sunnah, and conducted himself justly", "He gathered armies for conquest", "He only built mosques"],
        },
      ],
    },
    {
      en: "One night he had guests with him, so he got up himself to fix the lamp; when told, 'O Commander of the Believers, we will do that for you,' he said: 'What harm has it done me? I got up as Umar bin Abdul Aziz, and I came back as Umar bin Abdul Aziz.'",
      sentences: [
        {
          id: "qr2-57-042",
          ar: "كَانَ عِنْدَهُ قَوْمٌ ذَاتَ لَيْلَةٍ،",
          en: "One night he had some people with him,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", gloss: "there was" },
            { surface: "عِنْدَهُ", lemma: "عند", pos: "prep", features: "+3ms", gloss: "with him" },
            { surface: "قَوْمٌ", lemma: "قوم", pos: "noun", features: "indef.nom", root: "ق و م", gloss: "a group of people" },
            { surface: "ذَاتَ", lemma: "ذات", pos: "noun", features: "acc.f", gloss: "one" },
            { surface: "لَيْلَةٍ", lemma: "ليلة", pos: "noun", features: "indef.gen.f", root: "ل ي ل", gloss: "night" },
          ],
        },
        {
          id: "qr2-57-043",
          ar: "فَقَامَ إِلَىٰ السِّرَاجِ،",
          en: "and he got up to see to the lamp,",
          tokens: [
            { surface: "فَقَامَ", lemma: "قام", pos: "verb", features: "conj+perf.3ms", root: "ق و م", gloss: "and he got up" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "السِّرَاجِ", lemma: "سراج", pos: "noun", features: "def.gen", gloss: "the lamp" },
          ],
        },
        {
          id: "qr2-57-044",
          ar: "فَأَصْلَحَهُ،",
          en: "and fixed it,",
          tokens: [
            { surface: "فَأَصْلَحَهُ", lemma: "أصلح", pos: "verb", features: "conj+perf.3ms+3ms", root: "ص ل ح", gloss: "and fixed it" },
          ],
        },
        {
          id: "qr2-57-045",
          ar: "فَقِيْلَ لَهُ: يَا أَمِيْرَ الْمُؤْمِنِيْنَ نَكْفِيْكَ،",
          en: "and it was said to him: 'O Commander of the Believers, we will take care of it for you,'",
          tokens: [
            { surface: "فَقِيْلَ", lemma: "قال", pos: "verb", features: "conj+pass.perf.3ms", gloss: "so it was said" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O" },
            { surface: "أَمِيْرَ", lemma: "أمير", pos: "noun", features: "voc.acc.constr", gloss: "Commander (of)" },
            { surface: "الْمُؤْمِنِيْنَ", lemma: "مؤمن", pos: "noun", features: "def.gen.pl", gloss: "the believers" },
            { surface: "نَكْفِيْكَ", lemma: "كفى", pos: "verb", features: "impf.1p+2ms", root: "ك ف ي", gloss: "we will do it for you" },
          ],
        },
        {
          id: "qr2-57-046",
          ar: "قَالَ: وَمَا ضَرَّنِيْ؟",
          en: "He said: 'What harm has it done me?",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "وَمَا", lemma: "ما", pos: "part", features: "conj", gloss: "and what" },
            { surface: "ضَرَّنِيْ", lemma: "ضر", pos: "verb", features: "perf.3ms+1s", root: "ض ر ر", gloss: "harmed me" },
          ],
        },
        {
          id: "qr2-57-047",
          ar: "قُمْتُ وَأَنَا عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ،",
          en: "I got up while still being Umar bin Abdul Aziz,",
          tokens: [
            { surface: "قُمْتُ", lemma: "قام", pos: "verb", features: "perf.1s", gloss: "I got up" },
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+1s", gloss: "while I am" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", gloss: "al-Aziz" },
          ],
        },
        {
          id: "qr2-57-048",
          ar: "وَرَجَعْتُ وَأَنَا عُمَرُ بْنُ عَبْدِ الْعَزِيْزِ.",
          en: "and I came back while still being Umar bin Abdul Aziz.'",
          tokens: [
            { surface: "وَرَجَعْتُ", lemma: "رجع", pos: "verb", features: "conj+perf.1s", gloss: "and I returned" },
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+1s", gloss: "while I am" },
            { surface: "عُمَرُ", lemma: "عمر", pos: "proper", features: "nom", gloss: "Umar" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", gloss: "al-Aziz" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا قَامَ عُمَرُ بِنَفْسِهِ إِلَى السِّرَاجِ لِيُصْلِحَهُ رَغْمَ أَنَّهُ أَمِيْرُ الْمُؤْمِنِيْنَ؟",
          options: ["لِأَنَّهُ لَمْ يَجِدْ خَادِماً", "لِأَنَّ الْقِيَامَ لِذٰلِكَ لَمْ يَنْقُصْ مِنْ قَدْرِهِ شَيْئاً", "لِأَنَّ الضُّيُوْفَ طَلَبُوا مِنْهُ ذٰلِكَ", "لِأَنَّهُ كَانَ غَاضِباً"],
          answer: 1,
          qEn: "Why did Umar get up himself to fix the lamp even though he was Commander of the Believers?",
          optionsEn: ["Because he could not find a servant", "Because doing so took nothing away from his standing", "Because the guests asked him to", "Because he was angry"],
        },
      ],
    },
    {
      en: "One day a piece of ambergris was brought to him from the public war-spoils; he took it in his hand and rubbed it, then ordered it set aside to be sold, then passed his hand over his nose and found its scent still there, so he called for water and performed ablution.",
      sentences: [
        {
          id: "qr2-57-049",
          ar: "وَأُتِيَ ذَاتَ يَوْمٍ مِنَ الْفَيْءِ بِعَنْبَرَةٍ،",
          en: "One day he was brought, from the war-spoils, a piece of ambergris,",
          tokens: [
            { surface: "وَأُتِيَ", lemma: "أتى", pos: "verb", features: "conj+pass.perf.3ms", gloss: "and he was brought" },
            { surface: "ذَاتَ", lemma: "ذات", pos: "noun", features: "acc.f", gloss: "one" },
            { surface: "يَوْمٍ", lemma: "يوم", pos: "noun", features: "indef.gen", root: "ي و م", gloss: "day" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "الْفَيْءِ", lemma: "فيء", pos: "noun", features: "def.gen", gloss: "the war-spoils" },
            { surface: "بِعَنْبَرَةٍ", lemma: "عنبرة", pos: "noun", features: "prep.indef.gen.f", gloss: "a piece of ambergris" },
          ],
        },
        {
          id: "qr2-57-050",
          ar: "فَأَخَذَ بِيَدِهِ فَمَسَحَهَا،",
          en: "and he took it in his hand and rubbed it,",
          tokens: [
            { surface: "فَأَخَذَ", lemma: "أخذ", pos: "verb", features: "conj+perf.3ms", root: "أ خ ذ", gloss: "and he took (it)" },
            { surface: "بِيَدِهِ", lemma: "يد", pos: "noun", features: "prep.gen.f+3ms", root: "ي د ي", gloss: "in his hand" },
            { surface: "فَمَسَحَهَا", lemma: "مسح", pos: "verb", features: "conj+perf.3ms+3fs", root: "م س ح", gloss: "and rubbed it" },
          ],
        },
        {
          id: "qr2-57-051",
          ar: "ثُمَّ أَمَرَ بِهَا حَتَّىٰ فَرُفِعَتْ حَتَّىٰ تُبَاعَ،",
          en: "then he gave an order about it, so it was set aside until it could be sold,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "أَمَرَ", lemma: "أمر", pos: "verb", features: "perf.3ms", gloss: "he ordered" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "+3fs", gloss: "about it" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "so that" },
            { surface: "فَرُفِعَتْ", lemma: "رفع", pos: "verb", features: "conj+pass.perf.3fs", gloss: "it was set aside" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "until" },
            { surface: "تُبَاعَ", lemma: "باع", pos: "verb", features: "pass.impf.3fs", root: "ب ي ع", gloss: "it would be sold" },
          ],
        },
        {
          id: "qr2-57-052",
          ar: "ثُمَّ أَمَرَّ يَدَهُ عَلَىٰ أَنْفِهِ،",
          en: "then he passed his hand over his nose,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "أَمَرَّ", lemma: "أمرّ", pos: "verb", features: "perf.3ms", root: "م ر ر", gloss: "he passed" },
            { surface: "يَدَهُ", lemma: "يد", pos: "noun", features: "acc.f+3ms", gloss: "his hand" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "over" },
            { surface: "أَنْفِهِ", lemma: "أنف", pos: "noun", features: "gen+3ms", gloss: "his nose" },
          ],
        },
        {
          id: "qr2-57-053",
          ar: "فَوَجَدَ رِيْحَهَا،",
          en: "and found its scent (on it),",
          tokens: [
            { surface: "فَوَجَدَ", lemma: "وجد", pos: "verb", features: "conj+perf.3ms", gloss: "and found" },
            { surface: "رِيْحَهَا", lemma: "ريح", pos: "noun", features: "acc.f+3fs", root: "ر و ح", gloss: "its scent" },
          ],
        },
        {
          id: "qr2-57-054",
          ar: "فَدَعَا بِوَضُوْءٍ فَتَوَضَّأَ.",
          en: "so he called for water and performed ablution.",
          tokens: [
            { surface: "فَدَعَا", lemma: "دعا", pos: "verb", features: "conj+perf.3ms", root: "د ع و", gloss: "so he called for" },
            { surface: "بِوَضُوْءٍ", lemma: "وضوء", pos: "noun", features: "prep.indef.gen", root: "و ض أ", gloss: "water for ablution" },
            { surface: "فَتَوَضَّأَ", lemma: "توضأ", pos: "verb", features: "conj+perf.3ms", root: "و ض أ", gloss: "and performed ablution" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا تَوَضَّأَ عُمَرُ بَعْدَ أَنْ مَسَحَ الْعَنْبَرَةَ؟",
          options: ["لِأَنَّهَا كَانَتْ نَجِسَةً", "لِأَنَّهُ وَجَدَ رِيْحَهَا فِيْ يَدِهِ وَلَمْ تَكُنْ مِلْكَهُ", "لِأَنَّ الْوَقْتَ حَانَ لِلصَّلاَةِ", "لِأَنَّ يَدَهُ اتَّسَخَتْ"],
          answer: 1,
          qEn: "Why did Umar perform ablution after touching the ambergris?",
          optionsEn: ["Because it was ritually impure", "Because he found its scent still on his hand, and it was not his property", "Because it was time for prayer", "Because his hand had gotten dirty"],
        },
      ],
    },
    {
      en: "He had a boy who used to bring him a vessel of heated water for ablution; one day he asked the boy, 'Do you heat this water in the Muslims' kitchen?' The boy said, 'Yes.' Umar said, 'You've cost us for it,' then paid back the cost of those days himself and had firewood brought in for the kitchen. Another time he was a little late to Friday prayer and was reproached for it, so he said: 'I was only waiting for my shirt, which I had washed, to dry.'",
      sentences: [
        {
          id: "qr2-57-055",
          ar: "وَكَانَ لَهُ غُلاَمٌ يَأْتِيْهِ بِقُمْقُمٍ مِنْ مَاءٍ مُسَخَّنٍ يَتَوَضَّأُ مِنْهُ،",
          en: "He had a servant-boy who used to bring him a small vessel of heated water to perform ablution with,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "and there was" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "for him" },
            { surface: "غُلاَمٌ", lemma: "غلام", pos: "noun", features: "indef.nom", root: "غ ل م", gloss: "a servant-boy" },
            { surface: "يَأْتِيْهِ", lemma: "أتى", pos: "verb", features: "impf.3ms+3ms", gloss: "would bring him" },
            { surface: "بِقُمْقُمٍ", lemma: "قمقم", pos: "noun", features: "prep.indef.gen", gloss: "a small vessel" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "مَاءٍ", lemma: "ماء", pos: "noun", features: "indef.gen", root: "م و ه", gloss: "water" },
            { surface: "مُسَخَّنٍ", lemma: "سخن", pos: "adj", features: "indef.gen", gloss: "heated" },
            { surface: "يَتَوَضَّأُ", lemma: "توضأ", pos: "verb", features: "impf.3ms", gloss: "he would perform ablution" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "+3ms", gloss: "with it" },
          ],
        },
        {
          id: "qr2-57-056",
          ar: "فَقَالَ لِلْغُلاَمِ يَوْماً: أَتُسَخِّنُ الْمَاءَ فِيْ مَطْبَخِ الْمُسْلِمِيْنَ؟",
          en: "So one day he said to the boy: 'Do you heat the water in the Muslims' kitchen?'",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "لِلْغُلاَمِ", lemma: "غلام", pos: "noun", features: "prep.def.gen", gloss: "to the servant-boy" },
            { surface: "يَوْماً", lemma: "يوم", pos: "noun", features: "indef.acc", gloss: "one day" },
            { surface: "أَتُسَخِّنُ", lemma: "سخن", pos: "verb", features: "impf.2ms", gloss: "do you heat" },
            { surface: "الْمَاءَ", lemma: "ماء", pos: "noun", features: "def.acc", gloss: "the water" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "مَطْبَخِ", lemma: "مطبخ", pos: "noun", features: "gen.constr", gloss: "the kitchen (of)" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "def.gen.pl", gloss: "the Muslims" },
          ],
        },
        {
          id: "qr2-57-057",
          ar: "قَالَ: نَعَمْ!",
          en: "He said: 'Yes!'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "نَعَمْ", lemma: "نعم", pos: "part", gloss: "Yes!" },
          ],
        },
        {
          id: "qr2-57-058",
          ar: "قَالَ: أَفْسَدْتَّهُ عَلَيْنَا،",
          en: "He said: 'You have spoiled it, to our loss,'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "أَفْسَدْتَّهُ", lemma: "أفسد", pos: "verb", features: "perf.2ms+3ms", root: "ف س د", gloss: "you have spoiled it" },
            { surface: "عَلَيْنَا", lemma: "على", pos: "prep", features: "+1p", gloss: "against us" },
          ],
        },
        {
          id: "qr2-57-059",
          ar: "ثُمَّ حَاسَبَ عَلَيْهِ تِلْكَ الأَيَّامَ،",
          en: "then he calculated and paid for those days himself,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "حَاسَبَ", lemma: "حاسب", pos: "verb", features: "perf.3ms", root: "ح س ب", gloss: "he charged (himself)" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "+3ms", gloss: "for it" },
            { surface: "تِلْكَ", lemma: "ذلك", pos: "dem", features: "f", gloss: "those" },
            { surface: "الأَيَّامَ", lemma: "يوم", pos: "noun", features: "def.acc.pl", gloss: "days" },
          ],
        },
        {
          id: "qr2-57-060",
          ar: "وَأَدْخَلَ الْحَطَبَ فِي الْمَطْبَخِ،",
          en: "and had firewood brought into the kitchen,",
          tokens: [
            { surface: "وَأَدْخَلَ", lemma: "أدخل", pos: "verb", features: "conj+perf.3ms", root: "د خ ل", gloss: "and had brought in" },
            { surface: "الْحَطَبَ", lemma: "حطب", pos: "noun", features: "def.acc", root: "ح ط ب", gloss: "the firewood" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "into" },
            { surface: "الْمَطْبَخِ", lemma: "مطبخ", pos: "noun", features: "def.gen", gloss: "the kitchen" },
          ],
        },
        {
          id: "qr2-57-061",
          ar: "وَأَبْطَأَ يَوْماً عَنِ الْجُمُعَةِ قَلِيْلاً فَعُوْتِبَ فِيْ ذٰلِكَ فَقَالَ: إِنَّمَا انْتَظَرْتُ قَمِيْصِيْ غَسَلْتُهُ أَنْ يَجِفَّ.",
          en: "and one day he was a little late for the Friday prayer, and when reproached for it he said: 'I was only waiting for my shirt, which I had washed, to dry.'",
          tokens: [
            { surface: "وَأَبْطَأَ", lemma: "أبطأ", pos: "verb", features: "conj+perf.3ms", root: "ب ط أ", gloss: "and he was late" },
            { surface: "يَوْماً", lemma: "يوم", pos: "noun", features: "indef.acc", gloss: "one day" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", gloss: "for" },
            { surface: "الْجُمُعَةِ", lemma: "جمعة", pos: "noun", features: "def.gen.f", root: "ج م ع", gloss: "Friday (prayer)" },
            { surface: "قَلِيْلاً", lemma: "قليل", pos: "adv", features: "acc", root: "ق ل ل", gloss: "a little" },
            { surface: "فَعُوْتِبَ", lemma: "عتب", pos: "verb", features: "conj+pass.perf.3ms", root: "ع ت ب", gloss: "and he was reproached" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "for" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "m", gloss: "that" },
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "so he said" },
            { surface: "إِنَّمَا", lemma: "إنما", pos: "part", gloss: "it was only that" },
            { surface: "انْتَظَرْتُ", lemma: "انتظر", pos: "verb", features: "perf.1s", root: "ن ظ ر", gloss: "I was waiting for" },
            { surface: "قَمِيْصِيْ", lemma: "قميص", pos: "noun", features: "acc+1s", root: "ق م ص", gloss: "my shirt" },
            { surface: "غَسَلْتُهُ", lemma: "غسل", pos: "verb", features: "perf.1s+3ms", gloss: "(which) I had washed" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "to" },
            { surface: "يَجِفَّ", lemma: "جف", pos: "verb", features: "impf.3ms", gloss: "dry" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ عُمَرُ حِيْنَ عَلِمَ أَنَّ الْغُلاَمَ يُسَخِّنُ الْمَاءَ فِيْ مَطْبَخِ الْمُسْلِمِيْنَ؟",
          options: ["تَجَاهَلَ الأَمْرَ", "حَاسَبَ نَفْسَهُ عَنْ تِلْكَ الأَيَّامِ وَأَدْخَلَ الْحَطَبَ لِلْمَطْبَخِ", "طَرَدَ الْغُلاَمَ", "أَمَرَ بِإِغْلاَقِ الْمَطْبَخِ"],
          answer: 1,
          qEn: "What did Umar do when he learned the boy was heating his water in the Muslims' kitchen?",
          optionsEn: ["He ignored the matter", "He charged himself for those days and had firewood brought to the kitchen", "He dismissed the boy", "He ordered the kitchen closed"],
        },
      ],
    },
    {
      en: "Azhar said: 'I saw Umar bin Abdul Aziz delivering a sermon to the people while wearing a patched shirt.'",
      sentences: [
        {
          id: "qr2-57-062",
          ar: "قَالَ أَزْهَرُ: رَأَيْتُ عُمَرَ بْنَ عَبْدِ الْعَزِيْزِ يَخْطُبُ النَّاسَ وَعَلَيْهِ قَمِيْصٌ مَرْقُوْعٌ.",
          en: "Azhar said: 'I saw Umar bin Abdul Aziz delivering a sermon to the people, wearing a patched shirt.'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "said" },
            { surface: "أَزْهَرُ", lemma: "أزهر", pos: "proper", features: "nom", gloss: "Azhar" },
            { surface: "رَأَيْتُ", lemma: "رأى", pos: "verb", features: "perf.1s", root: "ر أ ي", gloss: "I saw" },
            { surface: "عُمَرَ", lemma: "عمر", pos: "proper", features: "acc", gloss: "Umar" },
            { surface: "بْنَ", lemma: "بن", pos: "noun", features: "acc.constr", gloss: "son (of)" },
            { surface: "عَبْدِ", lemma: "عبد", pos: "proper", features: "gen", gloss: "Abdul" },
            { surface: "الْعَزِيْزِ", lemma: "عزيز", pos: "proper", features: "def.gen", gloss: "al-Aziz" },
            { surface: "يَخْطُبُ", lemma: "خطب", pos: "verb", features: "impf.3ms", root: "خ ط ب", gloss: "delivering a sermon to" },
            { surface: "النَّاسَ", lemma: "ناس", pos: "noun", features: "def.acc.pl", gloss: "the people" },
            { surface: "وَعَلَيْهِ", lemma: "على", pos: "prep", features: "conj+3ms", gloss: "while on him (was)" },
            { surface: "قَمِيْصٌ", lemma: "قميص", pos: "noun", features: "indef.nom", gloss: "a shirt" },
            { surface: "مَرْقُوْعٌ", lemma: "مرقوع", pos: "adj", features: "indef.nom", gloss: "patched" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا رَأَى أَزْهَرُ عَلَى عُمَرَ بْنِ عَبْدِ الْعَزِيْزِ وَهُوَ يَخْطُبُ النَّاسَ؟",
          options: ["ثِيَاباً فَاخِرَةً", "قَمِيْصاً مَرْقُوْعاً", "دِرْعاً", "لاَ شَيْءَ، كَانَ حَافِياً"],
          answer: 1,
          qEn: "What did Azhar see Umar bin Abdul Aziz wearing while delivering a sermon to the people?",
          optionsEn: ["Fine, luxurious clothes", "A patched shirt", "Armor", "Nothing — he was bare"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "حَتَّى",
        post: "الْخِلاَفَةَ",
        en: "...until he assumed the caliphate.",
        options: ["وَلِيَ", "وَلِيْتُ", "وَلِيَتْ", "يَلِيْ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — he assumed.",
          "1st person singular — I assumed.",
          "3rd person feminine singular — she assumed.",
          "3rd person masculine singular, imperfect — he assumes.",
        ],
      },
      {
        type: "cloze",
        pre: "وَسَارَ بِالْعَدْلِ، وَ",
        post: "الدُّنْيَا",
        en: "He conducted himself with justice, and rejected the world,",
        options: ["رَفَضَ", "رَفَضْتُ", "رَفَضَتْ", "يَرْفُضُ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — he rejected.",
          "1st person singular — I rejected.",
          "3rd person feminine singular — she rejected.",
          "3rd person masculine singular, imperfect — he rejects.",
        ],
      },
      {
        type: "cloze",
        pre: "وَرَدَّ الْمَظَالِمَ، وَ",
        post: "الْكِتَابَ وَالسُّنَّةَ",
        en: "He redressed the grievances, and revived the Book and the Sunnah,",
        options: ["أَحْيَا", "أَحْيَيْتُ", "أَحْيَتْ", "يُحْيِيْ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — he revived.",
          "1st person singular — I revived.",
          "3rd person feminine singular — she revived.",
          "3rd person masculine singular, imperfect — he revives.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "جَلَسَ لِلنَّاسِ بَعْدَ ثَلاَثٍ",
        pre: "",
        post: "لِلنَّاسِ بَعْدَ ثَلاَثٍ",
        targetPerson: "أَنْتَ",
        targetEn: "you (m.)",
        options: ["جَلَسْتَ", "جَلَسَتْ", "جَلَسْنَا", "يَجْلِسُ"],
        answer: 0,
        rationales: [
          "2nd person masculine singular, perfect — you sat.",
          "3rd person feminine singular — she sat.",
          "1st person plural — we sat.",
          "3rd person masculine singular, imperfect — he sits.",
        ],
      },
      {
        type: "shift",
        base: "زَهِدَ فِي الدُّنْيَا",
        pre: "",
        post: "فِي الدُّنْيَا",
        targetPerson: "هُمْ",
        targetEn: "they (m.)",
        options: ["زَهِدُوا", "زَهِدَتْ", "زَهِدْتُمْ", "يَزْهَدُ"],
        answer: 0,
        rationales: [
          "3rd person masculine plural, perfect — they renounced.",
          "3rd person feminine singular — she renounced.",
          "2nd person masculine plural — you (pl.) renounced.",
          "3rd person masculine singular, imperfect — he renounces.",
        ],
      },
    ],
  },
};

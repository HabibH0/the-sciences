// القراءة الراشدة, volume two, chapter 51 (printed heading "٥١") --
// فَتَى الإِسْلاَمِ -- "The Youth of Islam".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 173-175.
//
// An essay contrasting the shallow ambitions of ordinary youths (eating,
// playing, dressing up, and at best chasing exam certificates and a
// government salary) with the towering ambition of the Muslim youth in
// the age of the Islamic state, who aspired to jihad, conquest, or
// martyrdom. Illustrated by Muhammad bin Qasim ath-Thaqafi, who invaded
// India, defeated its armies, conquered Sindh and reached Multan, and
// won the love of the very people he conquered through his justice and
// generosity -- all before the age of seventeen, as the closing verse
// underscores by contrasting him with his idle age-mates.
//
// Sentence segmentation follows the established mechanical rule: split
// at every `،`، `.`، `؟`، `!` (not at colons). The single quoted bayt of
// poetry at the close (qr2-51-037/038) has no internal punctuation in
// the source at all (typical of unpunctuated verse quoted mid-prose);
// following the established verse convention (mid-bayt pause rendered
// as `،`, bayt-end as `.`), a comma was inserted at the hemistich break
// and a period at the bayt's end so the citation renders as two
// sentences rather than one unreadable run-on -- the introductory
// "وَفِيْ ذٰلِكَ قَالَ الشَّاعِرُ:" stays attached to the first
// hemistich per the colon-stays-attached rule (as in ch50's dialogue
// tags). The source sets off the parenthetical aside in qr2-51-022
// ("وَهِيَ بِلاَدٌ بَعِيْدَةٌ ... وَرَاءَ الْبِحَارِ") with a pair of
// typographic dashes rather than commas; since dashes are not part of
// the `،`/`.`/`؟`/`!` split set and the validator requires tokens to
// reconstruct `ar` exactly, the dashes are dropped from `ar` (the aside
// reads fine embedded plainly) -- the whole span up to the next `،` is
// one (long) sentence regardless.
//
// Footnote-marker convention (as in ch45-50): markers "(١)"-"(٦)" on
// p.173, "(١)"-"(٧)" on p.174, and "(١)"-"(٣)" on p.175 are book
// furniture, excluded from `ar` and not tokenized; each footnoted lemma
// carries the footnote's defining text in its `book_note`: فتى، تجمل
// (see note below on this one)، تأنق، هندام، عكف on p.173؛ برز، أحرز،
// وسامة، طمح، غزا، وظف، سبى on p.174 (برز is a RE-footnote of an
// already-known word, see homograph/reuse section below)؛ سند، بياس،
// حجة on p.175 (حجة is a homograph re-footnote, see below).
//
// Apparent print erratum: footnote (٣) on p.173, which glosses the body
// text's "وَيَتَجَمَّلُوْنَ" (root ج م ل, "to beautify/adorn oneself" --
// the ج clearly carries its dot in the body text), is itself printed as
// "تَحَمَّل يَتَحَمَّلُ تَحَمُّلاً" (root ح م ل, no dot) in the source
// PDF. The footnote's own definition ("ظَهَرَ بِمَا يَجْمُلُ" -- "to
// appear in a becoming/beautiful way") only makes sense as a gloss for
// "تجمّل", not "تحمّل" ("to bear/endure"), so this looks like a missing
// dot in the original book's typesetting rather than a real second verb.
// Transcribed verbatim as printed in `book_note` regardless, per the
// project's fidelity-to-source policy; the lemma key/root/gloss used
// for the actual body-text word are the correct "تجمل"/ج م ل ones.
//
// One same-chapter re-footnote of an ALREADY-KNOWN word to a NEW page
// (the "عناء"/"جهر" precedent from ch45/46, and "كل" from ch50):
// "رتع" (qr2-51-006, already known from v1 ch06 "to roam about, enjoy
// oneself") is footnoted again here with a fuller definition; the
// footnote text is recorded but the word is NOT re-added to `newWords`.
// Likewise "برز" (qr2-51-012, already known from v1 ch10 "to emerge,
// stand out") is re-footnoted here with a narrower definition ("to
// surpass one's peers"); same treatment.
//
// Two same-spelling homograph flags for future reconciliation (the
// "سار"/ch49 precedent: reuse the lemma key, override pos/root/gloss at
// the token level, do NOT add to `newWords`):
//   - "جد" (qr2-51-011, "وَجَدَّ") is the SAME spelling already taught
//     as the noun "grandfather" (own ch41) -- here it is the plain
//     Form I verb "جَدَّ يَجِدُّ" (root ج د د, "to strive, work hard,
//     be in earnest"), a genuine classical homograph of the noun rather
//     than a derived form of it. No `book_note` needed since this
//     sense is not footnoted in the source; documented here only.
//   - "حجة" (qr2-51-037, "حِجَّةً") is the SAME spelling already taught
//     as "the pilgrimage / Dhul-Hijjah" (own ch45) -- here, per its OWN
//     footnote on p.175 ("حِجَّة جَمْعُ حِجَجٍ: السَّنَةُ"), it is the
//     archaic/poetic sense "a year." Since it IS footnoted on this page
//     (unlike "جد" above), a `lemmas` entry carrying that `book_note`
//     is included below under the shared key "حجة", but -- per the
//     homograph convention -- it is NOT added to `newWords`.
//
// A distinct-derived-form case (the "بلّغ"/ch49 precedent: a Form II
// verb built on an already-taught root, kept as its OWN new lemma
// rather than folded into the known word): "عمّر" (qr2-51-003,
// "وَعَمَّرَكَ", "may He grant you long life") is Form II on the root
// ع م ر, already taught as the plain noun "عمر" ("age, life," own
// ch47) -- a genuinely different headword, so it gets its own new
// lemma entry (with the shadda kept in the lemma key itself, exactly
// as "بلّغ" was distinguished from "بلغ" in ch49). Note that the
// SAME-spelling verb "بَلَّغَكَ" earlier in qr2-51-003 is NOT new --
// it reuses ch49's own "بلّغ" ("to convey, cause to reach") in the
// same classical dua formula sense ("may Allah bring/convey you...").
//
// One-lemma-two-pos reuses (the "فتح"/ch49 precedent -- identical Form
// I spelling shared naturally between a verb and a related nominal
// sense, one lemma key, pos overridden per token, not re-added to
// `newWords`): "فتح" (already known, own ch49) is reused throughout
// this chapter for the verb "to conquer" (qr2-51-020/021/026/029) AND
// for two nominal senses built on the identical spelling -- the active
// participle "فَاتِحُ" ("the conqueror (of)," qr2-51-036) and the
// broken plural "الْفُتُوْحُ" ("the conquests," qr2-51-034).
//
// Plural-reuse note (the "جند"/ch49 precedent -- a broken plural
// reuses its singular/collective's lemma key rather than getting its
// own entry): "جند" (own ch49) covers "الْجُنُوْدَ" here; "ملك" (own
// ch47) covers "الْمُلُوْكَ"; "شغل" (own ch46) covers "أَشْغَالِ" in
// the closing verse; "همة" (new this chapter, see below) itself covers
// both the singular "هِمَّتُهُ" (qr2-51-009) and the plural "الْهِمَمُ"
// (qr2-51-018).
//
// Vocabulary notes: "هل"، "تعرف"، "في"، "من"، "الله"، "هذه"، "طويل"،
// "إنك"، "كثيرا"، "غير"، "أنهم"، "يأكلون"، "يشربون"، "يلعبون"، "إذا"،
// "فتى" (once introduced, reused for both "فِتْيَانًا" qr2-51-001 and
// "فَتًى" qr2-51-008)، "علم" (verb "to know", distinct from the new
// noun "أقصى أمانيهم")، "دراسته" wait -- "دراسة" is new (see below);
// "جدا"، "لكن"، "لما"، "الإسلام"، "المسلم"، "قوم"، "الجهاد"، "البلاد"،
// "قطر" wait -- "قطر" is new (see below); "مات"، "شهيدا"، "هذا"،
// "قاسم" (reused from v1 ch09 -- same personal name, different
// individual, not treated as a homograph)، "بعيدة"، "بلاد"، "العرب"،
// "البحار" (plural of known "بحر")، "هزم"، "الجنود"، "قتل"، "الملوك"،
// "قطع"، "أهل"، "أحبوه"/"يحب" (both from known "أحب")، "دينه"، "صنعوا"،
// "عادة"، "عظيمة"، "كلها"، "مدة"، "جدا"، "الشاعر"، "الرجال"، "سبع"،
// "عن"، "ذاك"، "في" were all already introduced and are reused here
// rather than re-listed as new words.
export const CHAPTER = {
  id: "ch51",
  title: {
    ar: "فَتَى الإِسْلاَمِ",
    en: "The Youth of Islam"
  },
  pages: [173, 174, 175],
  newWords: [
    "فتى", "عمّر", "تجمل", "ملابس", "تأنق", "هندام", "زينة", "امتاز",
    "علا", "همة", "عكف", "دراسة", "اختبار", "أحرز", "جائزة", "وسامة",
    "طمح", "وظيفة", "حكومة", "صار", "تقاضى", "راتب", "شهري", "مبلغ",
    "أقصى", "أمنية", "حياة", "دولة", "عالي", "إقامة", "قطر", "أسس",
    "ثقفي", "غزا", "هند", "وراء", "وظف", "خراج", "سبى", "ذرية", "سند",
    "توغل", "قطع", "بياس", "ملتان", "خضع", "كرم", "عدل", "عدو", "قاهر",
    "تمثال", "قصير", "تجاوز", "ساس", "لدة"
  ],
  lemmas: {
    "فتى": {
      root: "ف ت ي", pos: "noun", gloss: "a youth",
      book_note: "فَتًى جَمْعُ فِتْيَان وَفِتْيَة: شَابٌّ بَيْنَ الْمُرَاهَقَةِ وَالرُّجُوْلَةِ."
    },
    "تجمل": {
      root: "ج م ل", pos: "verb", gloss: "to adorn oneself, look becoming",
      book_note: "تَحَمَّل يَتَحَمَّلُ تَحَمُّلاً: ظَهَرَ بِمَا يَجْمُلُ. (كذا وردت الحاشيةُ بالحاء المهملة في الأصل المطبوع؛ ولعل الصواب \"تجمّل\" بالجيم، كما تقتضيه كلمة المتن \"وَيَتَجَمَّلُوْنَ\" وتعريفُ الحاشية نفسه.)"
    },
    "تأنق": {
      root: "أ ن ق", pos: "verb", gloss: "to look elegant, take care of one's appearance",
      book_note: "تَأَنَّقَ يَتَأَنَّقُ تَأَنُّقاً: اعْتَنَىٰ بِمَظْهَرِهِ وَبَدَا أَنِيْقاً."
    },
    "هندام": {
      root: "", pos: "noun", gloss: "neat dress, good tailoring",
      book_note: "الْهِنْدَامُ: حُسْنُ الْقَدِّ وَتَنْظِيْمُ الْمَلاَبِسِ."
    },
    "عكف": {
      root: "ع ك ف", pos: "verb", gloss: "to devote oneself to, apply oneself",
      book_note: "عَكَفَ يَعْكُفُ عُكُوْفاً: الرَّجُلُ عَلَىٰ الشَّيْءِ أَوِ الأَمْرِ: أَقْبَلَ عَلَيْهِ وَلَزِمَهُ."
    },
    "رتع": {
      root: "ر ت ع", pos: "verb", gloss: "to roam about, enjoy oneself",
      book_note: "يَرْتَعُوْنَ (مِنْ رَتَعَ يَرْتَعُ رَتْعاً) فِي الْمَكَانِ: أَيْ يُقِيْمُوْنَ وَيَتَنَعَّمُوْنَ وَيَأْكُلُوْنَ فِيْهِ وَيَشْرَبُوْنَ مَا يَشَاؤُوْنَ فِيْ خِصْبٍ وَسِعَةٍ."
    },
    "برز": {
      root: "ب ر ز", pos: "verb", gloss: "to excel, surpass one's peers",
      book_note: "بَرَزَ يُبَرَّزُ تَبْرِيْزاً: فَاقَ أَقْرَانَهُ."
    },
    "أحرز": {
      root: "ح ر ز", pos: "verb", gloss: "to win, attain",
      book_note: "أَحْرَزَ يُحْرِزُ إِحْرَازاً: الْجَائِزَةَ وَمَا نَحْوَهَا: حَصَلَ عَلَيْهَا."
    },
    "وسامة": {
      root: "و س م", pos: "noun", gloss: "a medal, decoration",
      book_note: "وِسَامَة جَمْعُ وِسَامَات: مَا يُعَلَّقُ عَلَىٰ صَدْرِ مَنْ أَحْسَنَ عَمَلاً مُكَافَأَةً لَهُ عَلَيْهِ."
    },
    "طمح": {
      root: "ط م ح", pos: "verb", gloss: "to aspire, aim at a distant goal",
      book_note: "طَمَحَ يَطْمَحُ طُمُوْحاً: تَطَلَّعَ إِلَىٰ تَحْقِيْقِ هَدَفٍ بَعِيْدٍ."
    },
    "غزا": {
      root: "غ ز و", pos: "verb", gloss: "to raid, campaign against",
      book_note: "غَزَا يَغْزُوْ غَزْواً: سَارَ إِلَىٰ قِتَالِ الْعَدُوِّ فِيْ أَرْضِهِ."
    },
    "وظف": {
      root: "و ظ ف", pos: "verb", gloss: "to levy, impose (a duty); to assign",
      book_note: "وَظَّفَ يُوَظِّفُ تَوْظِيْفاً: الرَّجُلُ فُلاَناً: أَسْنَدَ إِلَيْهِ وَظِيْفَةً. (وَرَدَتْ فِي الْمَتْنِ بِمَعْنَىٰ فَرَضَ الْخَرَاجَ عَلَىٰ أَهْلِ الْبِلاَدِ الْمَفْتُوْحَةِ، وَهُوَ اسْتِعْمَالٌ قَرِيْبٌ مِنَ التَّعْرِيْفِ الْمَذْكُوْرِ لَا مُبَايِنٌ لَهُ.)"
    },
    "سبى": {
      root: "س ب ي", pos: "verb", gloss: "to take captive",
      book_note: "سَبَىٰ يَسْبِي سَبْياً: عَدُوَّهُ: أَسَرَهُ."
    },
    "سند": {
      root: "", pos: "proper", gloss: "Sindh",
      book_note: "السِّنْدُ: اسْمُ مَكَانٍ يُطْلَقُ عَلَىٰ الْجُزْءِ الشَّمَالِيِّ الْغَرْبِيِّ مِنَ الْهِنْدِ، يَتَوَسَّطُهُ حَوْضُ نَهْرِ السِّنْدِ، وَأَكْثَرُهُ الآنَ يَقَعُ فِيْ بَاكِسْتَانَ الْغَرْبِيَّةِ."
    },
    "بياس": {
      root: "", pos: "proper", gloss: "the Beas river",
      book_note: "نَهْرُ بَيَاسَ: يُعَدُّ مِنْ أَكْبَرِ وَأَهَمِّ الأَنْهَارِ الَّتِيْ تَجْرِيْ فِيْ الْهِنْدِ."
    },
    "حجة": {
      root: "ح ج ج", pos: "noun", gloss: "a year (poetic/archaic)",
      book_note: "حِجَّة جَمْعُ حِجَجٍ: السَّنَةُ."
    },
    "عمّر": { root: "ع م ر", pos: "verb", gloss: "to grant a long life to, prolong the life of" },
    "ملابس": { root: "ل ب س", pos: "noun", gloss: "clothes, garments" },
    "زينة": { root: "ز ي ن", pos: "noun", gloss: "adornment, finery" },
    "امتاز": { root: "م ي ز", pos: "verb", gloss: "to be distinguished, stand out, excel" },
    "علا": { root: "ع ل و", pos: "verb", gloss: "to rise, become elevated, become lofty" },
    "همة": { root: "ه م م", pos: "noun", gloss: "ambition, resolve, aspiration" },
    "دراسة": { root: "د ر س", pos: "noun", gloss: "study, schooling" },
    "اختبار": { root: "خ ب ر", pos: "noun", gloss: "a test, examination" },
    "جائزة": { root: "ج و ز", pos: "noun", gloss: "a prize, award" },
    "وظيفة": { root: "و ظ ف", pos: "noun", gloss: "a job, position" },
    "حكومة": { root: "ح ك م", pos: "noun", gloss: "government" },
    "صار": { root: "ص ي ر", pos: "verb", gloss: "to become" },
    "تقاضى": { root: "ق ض ي", pos: "verb", gloss: "to draw, receive (a salary)" },
    "راتب": { root: "ر ت ب", pos: "noun", gloss: "a salary" },
    "شهري": { root: "ش ه ر", pos: "adj", gloss: "monthly" },
    "مبلغ": { root: "ب ل غ", pos: "noun", gloss: "extent, amount, level (reached)" },
    "أقصى": { root: "ق ص و", pos: "adj", gloss: "utmost, furthest" },
    "أمنية": { root: "م ن ي", pos: "noun", gloss: "a wish, aspiration" },
    "حياة": { root: "ح ي ي", pos: "noun", gloss: "life" },
    "دولة": { root: "د و ل", pos: "noun", gloss: "a state, nation" },
    "عالي": { root: "ع ل و", pos: "adj", gloss: "high, lofty" },
    "إقامة": { root: "ق و م", pos: "noun", gloss: "establishing, carrying out" },
    "قطر": { root: "ق ط ر", pos: "noun", gloss: "a region, tract of land" },
    "أسس": { root: "أ س س", pos: "verb", gloss: "to found, establish" },
    "ثقفي": { root: "ث ق ف", pos: "proper", gloss: "of the tribe of Thaqif" },
    "هند": { root: "", pos: "proper", gloss: "India" },
    "وراء": { root: "و ر ي", pos: "prep", gloss: "behind, beyond" },
    "خراج": { root: "خ ر ج", pos: "noun", gloss: "land tax, tribute" },
    "ذرية": { root: "ذ ر ر", pos: "noun", gloss: "offspring, dependents, family" },
    "توغل": { root: "و غ ل", pos: "verb", gloss: "to penetrate deeply" },
    "قطع": { root: "ق ط ع", pos: "verb", gloss: "to cross, cut across" },
    "ملتان": { root: "", pos: "proper", gloss: "Multan" },
    "خضع": { root: "خ ض ع", pos: "verb", gloss: "to submit, yield" },
    "كرم": { root: "ك ر م", pos: "noun", gloss: "generosity" },
    "عدل": { root: "ع د ل", pos: "noun", gloss: "justice, fairness" },
    "عدو": { root: "ع د و", pos: "noun", gloss: "an enemy" },
    "قاهر": { root: "ق ه ر", pos: "adj", gloss: "dominant, victorious, all-conquering" },
    "تمثال": { root: "م ث ل", pos: "noun", gloss: "a statue" },
    "قصير": { root: "ق ص ر", pos: "adj", gloss: "short" },
    "تجاوز": { root: "ج و ز", pos: "verb", gloss: "to exceed, go beyond" },
    "ساس": { root: "س و س", pos: "verb", gloss: "to rule, govern, lead" },
    "لدة": { root: "و ل د", pos: "noun", gloss: "an age-mate, one born at the same time" }
  },
  paragraphs: [
    {
      en: "Do you know some youths who are in their seventeenth or eighteenth year of age? May Allah bring you beyond this age and grant you a long life.",
      sentences: [
        {
          id: "qr2-51-001",
          ar: "هَلْ تَعْرِفُ فِتْيَانَاً هُمْ فِي السَّابِعَةَ عَشَرَةَ ،",
          en: "Do you know some youths who are in their seventeenth,",
          tokens: [
            { surface: "هَلْ", lemma: "هل", pos: "part", features: "interr", root: "", gloss: "do" },
            { surface: "تَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.2ms", root: "ع ر ف", gloss: "you know" },
            { surface: "فِتْيَانَاً", lemma: "فتى", pos: "noun", features: "indef.acc.pl", root: "ف ت ي", gloss: "some youths" },
            { surface: "هُمْ", lemma: "هو", pos: "noun", features: "3mpl", root: "", gloss: "who are" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "السَّابِعَةَ", lemma: "سابع", pos: "adj", features: "def.acc.f", root: "س ب ع", gloss: "the seventeenth" },
            { surface: "عَشَرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" }
          ]
        },
        {
          id: "qr2-51-002",
          ar: "أَوِ الثَّامِنَةَ عَشَرَةَ مِنْ عُمُرِهِمْ؟",
          en: "or eighteenth, of their age?",
          tokens: [
            { surface: "أَوِ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "الثَّامِنَةَ", lemma: "ثامن", pos: "adj", features: "def.acc.f", root: "ث م ن", gloss: "the eighteenth" },
            { surface: "عَشَرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "عُمُرِهِمْ", lemma: "عمر", pos: "noun", features: "gen+3mpl", root: "ع م ر", gloss: "their age" }
          ]
        },
        {
          id: "qr2-51-003",
          ar: "بَلَّغَكَ اللهُ فَوْقَ هٰذِهِ السِّنّ وَعَمَّرَكَ طَوِيْلاً.",
          en: "May Allah bring you beyond this age, and grant you a long life.",
          tokens: [
            { surface: "بَلَّغَكَ", lemma: "بلّغ", pos: "verb", features: "perf.3ms+2ms", root: "ب ل غ", gloss: "may He bring you" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "فَوْقَ", lemma: "فوق", pos: "prep", features: "acc.constr", root: "ف و ق", gloss: "beyond" },
            { surface: "هٰذِهِ", lemma: "هذا", pos: "dem", features: "dem.fs", root: "", gloss: "this" },
            { surface: "السِّنّ", lemma: "سن", pos: "noun", features: "def.gen", root: "س ن ن", gloss: "age" },
            { surface: "وَعَمَّرَكَ", lemma: "عمّر", pos: "verb", features: "conj+perf.3ms+2ms", root: "ع م ر", gloss: "and grant you long life" },
            { surface: "طَوِيْلاً", lemma: "طويل", pos: "adj", features: "indef.acc", root: "ط و ل", gloss: "long" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ كَانَ عُمُرُ الْفِتْيَانِ الَّذِيْنَ يَتَحَدَّثُ عَنْهُمُ الْكَاتِبُ؟",
          options: ["سَبْعَةَ عَشَرَ أَوْ ثَمَانِيَةَ عَشَرَ عَاماً", "عِشْرِيْنَ عَاماً", "عَشْرَةَ أَعْوَامٍ"],
          answer: 0,
          qEn: "How old were the youths the author is discussing?",
          optionsEn: ["Seventeen or eighteen years old", "Twenty years old", "Ten years old"]
        }
      ]
    },
    {
      en: "Indeed, you know many of them! But do you know anything about them other than that they eat and drink, roam about, play, and dress themselves up, and take care to look elegant and well turned out?",
      sentences: [
        {
          id: "qr2-51-004",
          ar: "إِنَّكَ لَتَعْرِفُ مِنْهُمْ كَثِيْراً!",
          en: "Indeed, you know many of them!",
          tokens: [
            { surface: "إِنَّكَ", lemma: "إن", pos: "part", features: "part+2ms", root: "", gloss: "indeed you" },
            { surface: "لَتَعْرِفُ", lemma: "عرف", pos: "verb", features: "part+impf.2ms", root: "ع ر ف", gloss: "surely know" },
            { surface: "مِنْهُمْ", lemma: "من", pos: "prep", features: "prep+3mpl", root: "", gloss: "of them" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adj", features: "indef.acc", root: "ك ث ر", gloss: "many" }
          ]
        },
        {
          id: "qr2-51-005",
          ar: "فَهَلْ تَعْرِفْ عَنْهُمْ غَيْرَ أَنَّهُمْ يَأْكُلُوْنَ وَيَشْرَبُوْنَ ،",
          en: "But do you know anything about them other than that they eat and drink,",
          tokens: [
            { surface: "فَهَلْ", lemma: "هل", pos: "part", features: "conj+interr", root: "", gloss: "but do" },
            { surface: "تَعْرِفْ", lemma: "عرف", pos: "verb", features: "juss.2ms", root: "ع ر ف", gloss: "you know" },
            { surface: "عَنْهُمْ", lemma: "عن", pos: "prep", features: "prep+3mpl", root: "", gloss: "about them" },
            { surface: "غَيْرَ", lemma: "غير", pos: "noun", features: "acc.constr", root: "غ ي ر", gloss: "other than" },
            { surface: "أَنَّهُمْ", lemma: "أن", pos: "part", features: "part+3mpl", root: "", gloss: "that they" },
            { surface: "يَأْكُلُوْنَ", lemma: "أكل", pos: "verb", features: "impf.3mpl", root: "أ ك ل", gloss: "eat" },
            { surface: "وَيَشْرَبُوْنَ", lemma: "شرب", pos: "verb", features: "conj+impf.3mpl", root: "ش ر ب", gloss: "and drink" }
          ]
        },
        {
          id: "qr2-51-006",
          ar: "وَيَرْتَعُوْنَ وَيَلْعَبُوْنَ وَيَتَجَمَّلُوْنَ فِي الْمَلاَبِسِ ،",
          en: "roam about, play, and dress themselves up,",
          tokens: [
            { surface: "وَيَرْتَعُوْنَ", lemma: "رتع", pos: "verb", features: "conj+impf.3mpl", root: "ر ت ع", gloss: "and roam about" },
            { surface: "وَيَلْعَبُوْنَ", lemma: "لعب", pos: "verb", features: "conj+impf.3mpl", root: "ل ع ب", gloss: "and play" },
            { surface: "وَيَتَجَمَّلُوْنَ", lemma: "تجمل", pos: "verb", features: "conj+impf.3mpl", root: "ج م ل", gloss: "and dress themselves up" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَلاَبِسِ", lemma: "ملابس", pos: "noun", features: "def.gen", root: "ل ب س", gloss: "clothes" }
          ]
        },
        {
          id: "qr2-51-007",
          ar: "وَيَتَأَنَّـقُوْنَ فِيْ الْهِنْدَامِ وَالزِّيْنَةِ.",
          en: "and take care to look elegant and well turned out.",
          tokens: [
            { surface: "وَيَتَأَنَّـقُوْنَ", lemma: "تأنق", pos: "verb", features: "conj+impf.3mpl", root: "أ ن ق", gloss: "and take care to look elegant" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْهِنْدَامِ", lemma: "هندام", pos: "noun", features: "def.gen", root: "", gloss: "dress, tailoring" },
            { surface: "وَالزِّيْنَةِ", lemma: "زينة", pos: "noun", features: "conj+def.gen", root: "ز ي ن", gloss: "and finery" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا يَنْشَغِلُ مُعْظَمُ هٰؤُلاَءِ الْفِتْيَانِ؟",
          options: ["بِالأَكْلِ وَالشُّرْبِ وَاللَّعِبِ وَالتَّجَمُّلِ فِيْ مَظْهَرِهِمْ", "بِطَلَبِ الْعِلْمِ لَيْلاً وَنَهَاراً", "بِخِدْمَةِ أُسَرِهِمْ وَحْدَهَا"],
          answer: 0,
          qEn: "What do most of these youths busy themselves with?",
          optionsEn: ["Eating, drinking, playing, and making themselves look good", "Seeking knowledge day and night", "Serving their families alone"]
        }
      ]
    },
    {
      en: "And if a youth is distinguished among them, and his ambition rises, he devotes himself to his study and reading, striving and working hard in them, until he excels in the examinations, and wins the prizes and medals.",
      sentences: [
        {
          id: "qr2-51-008",
          ar: "وَإِذَا امْتَازَ فِيْهِمْ فَتَىً ،",
          en: "And if a youth is distinguished among them,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and if" },
            { surface: "امْتَازَ", lemma: "امتاز", pos: "verb", features: "perf.3ms", root: "م ي ز", gloss: "is distinguished" },
            { surface: "فِيْهِمْ", lemma: "في", pos: "prep", features: "prep+3mpl", root: "", gloss: "among them" },
            { surface: "فَتَىً", lemma: "فتى", pos: "noun", features: "indef.nom", root: "ف ت ي", gloss: "a youth" }
          ]
        },
        {
          id: "qr2-51-009",
          ar: "وَعَلَتْ هِمَّتُهُ ،",
          en: "and his ambition rises,",
          tokens: [
            { surface: "وَعَلَتْ", lemma: "علا", pos: "verb", features: "conj+perf.3fs", root: "ع ل و", gloss: "and rises" },
            { surface: "هِمَّتُهُ", lemma: "همة", pos: "noun", features: "nom+3ms", root: "ه م م", gloss: "his ambition" }
          ]
        },
        {
          id: "qr2-51-010",
          ar: "عَكَفَ عَلَىٰ دِرَاسَتِهِ وَمُطَالَعَتِهِ ،",
          en: "he devotes himself to his study and reading,",
          tokens: [
            { surface: "عَكَفَ", lemma: "عكف", pos: "verb", features: "perf.3ms", root: "ع ك ف", gloss: "devotes himself" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "دِرَاسَتِهِ", lemma: "دراسة", pos: "noun", features: "gen+3ms", root: "د ر س", gloss: "his study" },
            { surface: "وَمُطَالَعَتِهِ", lemma: "مطالعة", pos: "noun", features: "conj+gen+3ms", root: "ط ل ع", gloss: "and his reading" }
          ]
        },
        {
          id: "qr2-51-011",
          ar: "وَجَدَّ فِيْهَا وَاجْتَهَدَ ،",
          en: "striving and working hard in them,",
          tokens: [
            { surface: "وَجَدَّ", lemma: "جد", pos: "verb", features: "conj+perf.3ms", root: "ج د د", gloss: "and strove" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in them" },
            { surface: "وَاجْتَهَدَ", lemma: "اجتهد", pos: "verb", features: "conj+perf.3ms", root: "ج ه د", gloss: "and worked hard" }
          ]
        },
        {
          id: "qr2-51-012",
          ar: "حَتَّىٰ بَرَزَ فِي الاِخْتِبَارَاتِ ،",
          en: "until he excels in the examinations,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "until" },
            { surface: "بَرَزَ", lemma: "برز", pos: "verb", features: "perf.3ms", root: "ب ر ز", gloss: "he excelled" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الاِخْتِبَارَاتِ", lemma: "اختبار", pos: "noun", features: "def.pl.gen", root: "خ ب ر", gloss: "the examinations" }
          ]
        },
        {
          id: "qr2-51-013",
          ar: "وَأَحْرَزَ الْجَوَائِزَ وَالْوِسَامَاتِ.",
          en: "and wins the prizes and medals.",
          tokens: [
            { surface: "وَأَحْرَزَ", lemma: "أحرز", pos: "verb", features: "conj+perf.3ms", root: "ح ر ز", gloss: "and won" },
            { surface: "الْجَوَائِزَ", lemma: "جائزة", pos: "noun", features: "def.pl.acc", root: "ج و ز", gloss: "the prizes" },
            { surface: "وَالْوِسَامَاتِ", lemma: "وسامة", pos: "noun", features: "conj+def.pl.acc", root: "و س م", gloss: "and the medals" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَفْعَلُ الْفَتَىٰ الْمُمْتَازُ فِيْهِمْ؟",
          options: ["يَعْكُفُ عَلَىٰ دِرَاسَتِهِ حَتَّىٰ يَبْرُزَ وَيُحْرِزَ الْجَوَائِزَ", "يَتْرُكُ الدِّرَاسَةَ وَيَشْتَغِلُ بِالتِّجَارَةِ", "يُسَافِرُ إِلَىٰ بَلَدٍ آخَرَ لِلَّهْوِ"],
          answer: 0,
          qEn: "What does the outstanding youth among them do?",
          optionsEn: ["He devotes himself to his studies until he excels and wins the prizes", "He abandons his studies and takes up trade", "He travels to another country for amusement"]
        }
      ]
    },
    {
      en: "And if a young man among them aspires to a position in one of the departments of the government, he strives for it and comes to draw a monthly salary.",
      sentences: [
        {
          id: "qr2-51-014",
          ar: "وَإِذَا طَمَحَ فِيْهِمْ شَابٌّ اجْتَهَدَ لِوَظِيْفَةٍ فِيْ مَصْلَحَةٍ مِنْ مَصَالِحِ الْحُكُوْمَةِ فَصَارَ يَتَقَاضَىٰ رَاتِباً شَهْرِيّاً.",
          en: "And if a young man among them aspires to a position in one of the departments of the government, he strives for it and comes to draw a monthly salary.",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and if" },
            { surface: "طَمَحَ", lemma: "طمح", pos: "verb", features: "perf.3ms", root: "ط م ح", gloss: "aspires" },
            { surface: "فِيْهِمْ", lemma: "في", pos: "prep", features: "prep+3mpl", root: "", gloss: "among them" },
            { surface: "شَابٌّ", lemma: "شاب", pos: "noun", features: "indef.nom", root: "ش ب ب", gloss: "a young man" },
            { surface: "اجْتَهَدَ", lemma: "اجتهد", pos: "verb", features: "perf.3ms", root: "ج ه د", gloss: "he strives" },
            { surface: "لِوَظِيْفَةٍ", lemma: "وظيفة", pos: "noun", features: "prep+indef.gen", root: "و ظ ف", gloss: "for a position" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "مَصْلَحَةٍ", lemma: "مصلحة", pos: "noun", features: "indef.gen", root: "ص ل ح", gloss: "a department" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "مَصَالِحِ", lemma: "مصلحة", pos: "noun", features: "pl.gen.constr", root: "ص ل ح", gloss: "the departments (of)" },
            { surface: "الْحُكُوْمَةِ", lemma: "حكومة", pos: "noun", features: "def.gen", root: "ح ك م", gloss: "the government" },
            { surface: "فَصَارَ", lemma: "صار", pos: "verb", features: "conj+perf.3ms", root: "ص ي ر", gloss: "and he comes" },
            { surface: "يَتَقَاضَىٰ", lemma: "تقاضى", pos: "verb", features: "impf.3ms", root: "ق ض ي", gloss: "to draw" },
            { surface: "رَاتِباً", lemma: "راتب", pos: "noun", features: "indef.acc", root: "ر ت ب", gloss: "a salary" },
            { surface: "شَهْرِيّاً", lemma: "شهري", pos: "adj", features: "indef.acc", root: "ش ه ر", gloss: "monthly" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا الَّذِيْ يَطْمَحُ إِلَيْهِ الشَّابُّ الَّذِيْ لَا يَبْرُزُ فِي الدِّرَاسَةِ؟",
          options: ["وَظِيْفَةٌ فِيْ الْحُكُوْمَةِ يَتَقَاضَىٰ عَلَيْهَا رَاتِباً شَهْرِيّاً", "أَنْ يُصْبِحَ عَالِماً كَبِيْراً", "أَنْ يُهَاجِرَ إِلَىٰ بِلَادٍ أُخْرَىٰ"],
          answer: 0,
          qEn: "What does such a young man aspire to instead?",
          optionsEn: ["A government job that pays him a monthly salary", "To become a great scholar", "To emigrate to another country"]
        }
      ]
    },
    {
      en: "That is the extent of their learning, and that is the utmost of their aspirations in life.",
      sentences: [
        {
          id: "qr2-51-015",
          ar: "ذٰلِكَ مَبْلَغُهُمْ مِنَ الْعِلْمِ ،",
          en: "That is the extent of their learning,",
          tokens: [
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem.ms", root: "", gloss: "that" },
            { surface: "مَبْلَغُهُمْ", lemma: "مبلغ", pos: "noun", features: "nom+3mpl", root: "ب ل غ", gloss: "their extent" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْعِلْمِ", lemma: "علم", pos: "noun", features: "def.gen", root: "ع ل م", gloss: "learning" }
          ]
        },
        {
          id: "qr2-51-016",
          ar: "وَتِلْكَ أَقْصَىٰ أَمَانِيْهِمْ فِي الْحَيَاةِ.",
          en: "and that is the utmost of their aspirations in life.",
          tokens: [
            { surface: "وَتِلْكَ", lemma: "ذلك", pos: "dem", features: "conj+dem.fs", root: "", gloss: "and that" },
            { surface: "أَقْصَىٰ", lemma: "أقصى", pos: "adj", features: "nom.constr", root: "ق ص و", gloss: "the utmost (of)" },
            { surface: "أَمَانِيْهِمْ", lemma: "أمنية", pos: "noun", features: "pl.gen+3mpl", root: "م ن ي", gloss: "their aspirations" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْحَيَاةِ", lemma: "حياة", pos: "noun", features: "def.gen", root: "ح ي ي", gloss: "life" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا مَبْلَغُ هٰؤُلاَءِ الْفِتْيَانِ مِنَ الْعِلْمِ وَأَمَانِيْهِمْ فِي الْحَيَاةِ، كَمَا يَصِفُ الْكَاتِبُ؟",
          options: ["مَحْدُوْدٌ جِدّاً وَلَا يَتَجَاوَزُ الشَّهَادَةَ وَالْوَظِيْفَةَ", "وَاسِعٌ يَشْمَلُ عُلُوْمَ الدِّيْنِ وَالدُّنْيَا", "مُنْعَدِمٌ فَلَا هَمَّ لَهُمْ عَلَىٰ الإِطْلَاقِ"],
          answer: 0,
          qEn: "How does the author describe the extent of these youths' learning and life-ambitions?",
          optionsEn: ["Very limited, not going beyond the certificate and the job", "Vast, encompassing both religious and worldly sciences", "Nonexistent -- they have no ambition at all"]
        }
      ]
    },
    {
      en: "But when the state of Islam existed, and ambitions were lofty, the Muslim youth would aspire to establishing jihad, and conquering lands, so he would conquer a region, or found a state, or die a martyr.",
      sentences: [
        {
          id: "qr2-51-017",
          ar: "وَلٰكِنْ لَمَّا كَانَتْ دَوْلَةُ الإِسْلاَمِ ،",
          en: "But when the state of Islam existed,",
          tokens: [
            { surface: "وَلٰكِنْ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "لَمَّا", lemma: "لما", pos: "part", features: "part", root: "", gloss: "when" },
            { surface: "كَانَتْ", lemma: "كان", pos: "verb", features: "perf.3fs", root: "ك و ن", gloss: "existed" },
            { surface: "دَوْلَةُ", lemma: "دولة", pos: "noun", features: "nom.constr", root: "د و ل", gloss: "the state (of)" },
            { surface: "الإِسْلاَمِ", lemma: "إسلام", pos: "proper", features: "def.gen", root: "", gloss: "Islam" }
          ]
        },
        {
          id: "qr2-51-018",
          ar: "وَكَانَتِ الْهِمَمُ عَالِيَةً ،",
          en: "and ambitions were lofty,",
          tokens: [
            { surface: "وَكَانَتِ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and were" },
            { surface: "الْهِمَمُ", lemma: "همة", pos: "noun", features: "def.pl.nom", root: "ه م م", gloss: "ambitions" },
            { surface: "عَالِيَةً", lemma: "عالي", pos: "adj", features: "indef.acc.f", root: "ع ل و", gloss: "lofty" }
          ]
        },
        {
          id: "qr2-51-019",
          ar: "كَانَ الشَّابُّ الْمُسْلِمُ يَطْمَحُ إِلَىٰ إِقَامَةِ الْجِهَادِ ،",
          en: "the Muslim youth would aspire to establishing jihad,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "was" },
            { surface: "الشَّابُّ", lemma: "شاب", pos: "noun", features: "def.nom", root: "ش ب ب", gloss: "the young man" },
            { surface: "الْمُسْلِمُ", lemma: "مسلم", pos: "noun", features: "def.nom", root: "س ل م", gloss: "the Muslim" },
            { surface: "يَطْمَحُ", lemma: "طمح", pos: "verb", features: "impf.3ms", root: "ط م ح", gloss: "would aspire" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "إِقَامَةِ", lemma: "إقامة", pos: "noun", features: "gen.constr", root: "ق و م", gloss: "establishing" },
            { surface: "الْجِهَادِ", lemma: "جهاد", pos: "noun", features: "def.gen", root: "ج ه د", gloss: "jihad" }
          ]
        },
        {
          id: "qr2-51-020",
          ar: "وَفَتْحِ الْبِلاَدِ ،",
          en: "and conquering lands,",
          tokens: [
            { surface: "وَفَتْحِ", lemma: "فتح", pos: "noun", features: "conj+gen.constr", root: "ف ت ح", gloss: "and conquering" },
            { surface: "الْبِلاَدِ", lemma: "بلاد", pos: "noun", features: "def.gen", root: "ب ل د", gloss: "the lands" }
          ]
        },
        {
          id: "qr2-51-021",
          ar: "فَيَفْتَحُ قُطْراً أَوْ يُؤَسِّسُ دَوْلَةً أَوْ يَمُوْتُ شَهِيْداً.",
          en: "so he would conquer a region, or found a state, or die a martyr.",
          tokens: [
            { surface: "فَيَفْتَحُ", lemma: "فتح", pos: "verb", features: "conj+impf.3ms", root: "ف ت ح", gloss: "so he conquers" },
            { surface: "قُطْراً", lemma: "قطر", pos: "noun", features: "indef.acc", root: "ق ط ر", gloss: "a region" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "يُؤَسِّسُ", lemma: "أسس", pos: "verb", features: "impf.3ms", root: "أ س س", gloss: "founds" },
            { surface: "دَوْلَةً", lemma: "دولة", pos: "noun", features: "indef.acc", root: "د و ل", gloss: "a state" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "يَمُوْتُ", lemma: "مات", pos: "verb", features: "impf.3ms", root: "م و ت", gloss: "dies" },
            { surface: "شَهِيْداً", lemma: "شهيد", pos: "noun", features: "indef.acc", root: "ش ه د", gloss: "a martyr" }
          ]
        }
      ],
      checks: [
        {
          q: "إِلَامَ كَانَ يَطْمَحُ الشَّابُّ الْمُسْلِمُ أَيَّامَ دَوْلَةِ الإِسْلَامِ؟",
          options: ["إِلَىٰ إِقَامَةِ الْجِهَادِ وَفَتْحِ الْبِلَادِ أَوِ الْمَوْتِ شَهِيْداً", "إِلَىٰ وَظِيْفَةٍ حُكُوْمِيَّةٍ بِرَاتِبٍ شَهْرِيٍّ", "إِلَىٰ جَمْعِ الْمَالِ وَالتِّجَارَةِ"],
          answer: 0,
          qEn: "What did the Muslim youth aspire to in the days of the Islamic state?",
          optionsEn: ["Establishing jihad and conquering lands, or dying a martyr", "A government job with a monthly salary", "Amassing wealth through trade"]
        }
      ]
    },
    {
      en: "This is Muhammad ibn Qasim ath-Thaqafi, who raided India -- a land far from the lands of the Arabs, beyond the seas -- and defeated the armies, and killed the kings, and levied the tax, and took captive the offspring, and Muhammad conquered Sindh, and penetrated deep into India, until he crossed the Beas river to Multan, and conquered it, and the people of India submitted to Muhammad, and they loved him for his religion, his generosity, and his justice, even though a conquering enemy is not loved, and they made a statue for him according to the custom of the people of India.",
      sentences: [
        {
          id: "qr2-51-022",
          ar: "هٰذَا مُحَمَّدُ بْنُ قَاسِمٍ الثَّقَفِيُّ قَدْ غَزَا الْهِنْدَ وَهِيَ بِلاَدٌ بَعِيْدَةٌ مِنْ بِلاَدِ الْعَرَبِ وَرَاءَ الْبِحَارِ فَهَزَمَ الْجُنُوْدَ ،",
          en: "This is Muhammad ibn Qasim ath-Thaqafi, who raided India -- a land far from the lands of the Arabs, beyond the seas -- and defeated the armies,",
          tokens: [
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "مُحَمَّدُ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
            { surface: "بْنُ", lemma: "بن", pos: "noun", features: "nom.constr", root: "", gloss: "son of" },
            { surface: "قَاسِمٍ", lemma: "قاسم", pos: "proper", features: "gen", root: "", gloss: "Qasim" },
            { surface: "الثَّقَفِيُّ", lemma: "ثقفي", pos: "proper", features: "def.nom", root: "ث ق ف", gloss: "ath-Thaqafi" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "غَزَا", lemma: "غزا", pos: "verb", features: "perf.3ms", root: "غ ز و", gloss: "raided" },
            { surface: "الْهِنْدَ", lemma: "هند", pos: "proper", features: "def.acc", root: "", gloss: "India" },
            { surface: "وَهِيَ", lemma: "هو", pos: "noun", features: "conj+3fs", root: "", gloss: "which is" },
            { surface: "بِلاَدٌ", lemma: "بلاد", pos: "noun", features: "indef.nom", root: "ب ل د", gloss: "a land" },
            { surface: "بَعِيْدَةٌ", lemma: "بعيد", pos: "adj", features: "indef.nom.f", root: "ب ع د", gloss: "far" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "بِلاَدِ", lemma: "بلاد", pos: "noun", features: "gen.constr", root: "ب ل د", gloss: "the lands (of)" },
            { surface: "الْعَرَبِ", lemma: "عرب", pos: "proper", features: "def.gen", root: "ع ر ب", gloss: "the Arabs" },
            { surface: "وَرَاءَ", lemma: "وراء", pos: "prep", features: "acc.constr", root: "و ر ي", gloss: "beyond" },
            { surface: "الْبِحَارِ", lemma: "بحر", pos: "noun", features: "def.pl.gen", root: "ب ح ر", gloss: "the seas" },
            { surface: "فَهَزَمَ", lemma: "هزم", pos: "verb", features: "conj+perf.3ms", root: "ه ز م", gloss: "and defeated" },
            { surface: "الْجُنُوْدَ", lemma: "جند", pos: "noun", features: "def.acc", root: "ج ن د", gloss: "the armies" }
          ]
        },
        {
          id: "qr2-51-023",
          ar: "وَقَتَلَ الْمُلُوْكَ ،",
          en: "and killed the kings,",
          tokens: [
            { surface: "وَقَتَلَ", lemma: "قتل", pos: "verb", features: "conj+perf.3ms", root: "ق ت ل", gloss: "and killed" },
            { surface: "الْمُلُوْكَ", lemma: "ملك", pos: "noun", features: "def.pl.acc", root: "م ل ك", gloss: "the kings" }
          ]
        },
        {
          id: "qr2-51-024",
          ar: "وَوَظَّفَ الْخِرَاجَ ،",
          en: "and levied the tax,",
          tokens: [
            { surface: "وَوَظَّفَ", lemma: "وظف", pos: "verb", features: "conj+perf.3ms", root: "و ظ ف", gloss: "and levied" },
            { surface: "الْخِرَاجَ", lemma: "خراج", pos: "noun", features: "def.acc", root: "خ ر ج", gloss: "the tax" }
          ]
        },
        {
          id: "qr2-51-025",
          ar: "وَسَبَىٰ الذُّرِّيَّةَ ،",
          en: "and took captive the offspring,",
          tokens: [
            { surface: "وَسَبَىٰ", lemma: "سبى", pos: "verb", features: "conj+perf.3ms", root: "س ب ي", gloss: "and took captive" },
            { surface: "الذُّرِّيَّةَ", lemma: "ذرية", pos: "noun", features: "def.acc", root: "ذ ر ر", gloss: "the offspring" }
          ]
        },
        {
          id: "qr2-51-026",
          ar: "وَفَتَحَ مُحَمَّدٌ السِّنْدَ ،",
          en: "and Muhammad conquered Sindh,",
          tokens: [
            { surface: "وَفَتَحَ", lemma: "فتح", pos: "verb", features: "conj+perf.3ms", root: "ف ت ح", gloss: "and conquered" },
            { surface: "مُحَمَّدٌ", lemma: "محمد", pos: "proper", features: "nom", root: "", gloss: "Muhammad" },
            { surface: "السِّنْدَ", lemma: "سند", pos: "proper", features: "def.acc", root: "", gloss: "Sindh" }
          ]
        },
        {
          id: "qr2-51-027",
          ar: "وَتَوَغَّلَ فِي الْهِنْدِ ،",
          en: "and penetrated deep into India,",
          tokens: [
            { surface: "وَتَوَغَّلَ", lemma: "توغل", pos: "verb", features: "conj+perf.3ms", root: "و غ ل", gloss: "and penetrated deep" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "into" },
            { surface: "الْهِنْدِ", lemma: "هند", pos: "proper", features: "def.gen", root: "", gloss: "India" }
          ]
        },
        {
          id: "qr2-51-028",
          ar: "حَتَّىٰ قَطَعَ نَهْرَ بَيَاسَ إِلَىٰ الْمُلْتَانِ ،",
          en: "until he crossed the Beas river to Multan,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "until" },
            { surface: "قَطَعَ", lemma: "قطع", pos: "verb", features: "perf.3ms", root: "ق ط ع", gloss: "he crossed" },
            { surface: "نَهْرَ", lemma: "نهر", pos: "noun", features: "acc.constr", root: "ن ه ر", gloss: "the river (of)" },
            { surface: "بَيَاسَ", lemma: "بياس", pos: "proper", features: "gen", root: "", gloss: "Beas" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْمُلْتَانِ", lemma: "ملتان", pos: "proper", features: "def.gen", root: "", gloss: "Multan" }
          ]
        },
        {
          id: "qr2-51-029",
          ar: "وَفَتَحَهَا ،",
          en: "and conquered it,",
          tokens: [
            { surface: "وَفَتَحَهَا", lemma: "فتح", pos: "verb", features: "conj+perf.3ms+3fs", root: "ف ت ح", gloss: "and conquered it" }
          ]
        },
        {
          id: "qr2-51-030",
          ar: "وَخَضَعَ أَهْلُ الْهِنْدِ لِمُحَمَّدٍ ،",
          en: "and the people of India submitted to Muhammad,",
          tokens: [
            { surface: "وَخَضَعَ", lemma: "خضع", pos: "verb", features: "conj+perf.3ms", root: "خ ض ع", gloss: "and submitted" },
            { surface: "أَهْلُ", lemma: "أهل", pos: "noun", features: "nom.constr", root: "أ ه ل", gloss: "the people (of)" },
            { surface: "الْهِنْدِ", lemma: "هند", pos: "proper", features: "def.gen", root: "", gloss: "India" },
            { surface: "لِمُحَمَّدٍ", lemma: "محمد", pos: "proper", features: "prep+gen", root: "", gloss: "to Muhammad" }
          ]
        },
        {
          id: "qr2-51-031",
          ar: "وَأَحَبُّوْهُ لِدِيْنِهِ وَكَرَمِهِ وَعَدْلِهِ ،",
          en: "and they loved him for his religion, his generosity, and his justice,",
          tokens: [
            { surface: "وَأَحَبُّوْهُ", lemma: "أحب", pos: "verb", features: "conj+perf.3mpl+3ms", root: "ح ب ب", gloss: "and they loved him" },
            { surface: "لِدِيْنِهِ", lemma: "دين", pos: "noun", features: "prep+gen+3ms", root: "د ي ن", gloss: "for his religion" },
            { surface: "وَكَرَمِهِ", lemma: "كرم", pos: "noun", features: "conj+gen+3ms", root: "ك ر م", gloss: "and his generosity" },
            { surface: "وَعَدْلِهِ", lemma: "عدل", pos: "noun", features: "conj+gen+3ms", root: "ع د ل", gloss: "and his justice" }
          ]
        },
        {
          id: "qr2-51-032",
          ar: "مَعَ أَنَّ الْعَدُوَّ الْقَاهِرَ لاَ يُحَبُّ ،",
          en: "even though a conquering enemy is not loved,",
          tokens: [
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "even though" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "الْعَدُوَّ", lemma: "عدو", pos: "noun", features: "def.acc", root: "ع د و", gloss: "the enemy" },
            { surface: "الْقَاهِرَ", lemma: "قاهر", pos: "adj", features: "def.acc", root: "ق ه ر", gloss: "the conquering" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُحَبُّ", lemma: "أحب", pos: "verb", features: "impf.pass.3ms", root: "ح ب ب", gloss: "is loved" }
          ]
        },
        {
          id: "qr2-51-033",
          ar: "وَصَنَعُوْا لَهُ تِمْثَالاً عَلَىٰ عَادَةِ أَهْلِ الْهِنْدِ.",
          en: "and they made a statue for him according to the custom of the people of India.",
          tokens: [
            { surface: "وَصَنَعُوْا", lemma: "صنع", pos: "verb", features: "conj+perf.3mpl", root: "ص ن ع", gloss: "and they made" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "تِمْثَالاً", lemma: "تمثال", pos: "noun", features: "indef.acc", root: "م ث ل", gloss: "a statue" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "according to" },
            { surface: "عَادَةِ", lemma: "عادة", pos: "noun", features: "gen.constr", root: "ع و د", gloss: "the custom (of)" },
            { surface: "أَهْلِ", lemma: "أهل", pos: "noun", features: "gen.constr", root: "أ ه ل", gloss: "the people (of)" },
            { surface: "الْهِنْدِ", lemma: "هند", pos: "proper", features: "def.gen", root: "", gloss: "India" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ مُحَمَّدُ بْنُ قَاسِمٍ الثَّقَفِيُّ فِي الْهِنْدِ؟",
          options: ["هَزَمَ جُنُوْدَهَا وَفَتَحَ السِّنْدَ وَبِلَاداً أُخْرَىٰ حَتَّىٰ أَحَبَّهُ أَهْلُهَا", "زَارَهَا لِلتِّجَارَةِ فَقَطْ", "هُزِمَ فِيْهَا وَعَادَ إِلَىٰ بِلَادِ الْعَرَبِ"],
          answer: 0,
          qEn: "What did Muhammad ibn Qasim ath-Thaqafi do in India?",
          optionsEn: ["He defeated its armies and conquered Sindh and other lands, until its people came to love him", "He merely visited it for trade", "He was defeated there and returned to the lands of the Arabs"]
        }
      ]
    },
    {
      en: "And all those great conquests took place within a very short span of time.",
      sentences: [
        {
          id: "qr2-51-034",
          ar: "وَتِلْكَ الْفُتُوْحُ الْعَظِيْمَةُ كُلُّهَا كَانَتْ فِيْ مُدَّةٍ قَصِيْرَةٍ جِدّاً.",
          en: "And all those great conquests took place within a very short span of time.",
          tokens: [
            { surface: "وَتِلْكَ", lemma: "ذلك", pos: "dem", features: "conj+dem.fs", root: "", gloss: "and those" },
            { surface: "الْفُتُوْحُ", lemma: "فتح", pos: "noun", features: "def.pl.nom", root: "ف ت ح", gloss: "the conquests" },
            { surface: "الْعَظِيْمَةُ", lemma: "عظيم", pos: "adj", features: "def.nom.f", root: "ع ظ م", gloss: "the great" },
            { surface: "كُلُّهَا", lemma: "كل", pos: "noun", features: "nom+3fs", root: "ك ل ل", gloss: "all of them" },
            { surface: "كَانَتْ", lemma: "كان", pos: "verb", features: "perf.3fs", root: "ك و ن", gloss: "were" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "within" },
            { surface: "مُدَّةٍ", lemma: "مدة", pos: "noun", features: "indef.gen", root: "م د د", gloss: "a period" },
            { surface: "قَصِيْرَةٍ", lemma: "قصير", pos: "adj", features: "indef.gen.f", root: "ق ص ر", gloss: "short" },
            { surface: "جِدّاً", lemma: "جدا", pos: "adv", features: "indef.acc", root: "", gloss: "very" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمِ اسْتَغْرَقَتْ تِلْكَ الْفُتُوْحُ الْعَظِيْمَةُ مِنَ الْوَقْتِ؟",
          options: ["مُدَّةً قَصِيْرَةً جِدّاً", "عِدَّةَ قُرُوْنٍ", "خَمْسِيْنَ عَاماً"],
          answer: 0,
          qEn: "How much time did those great conquests take?",
          optionsEn: ["A very short period", "Several centuries", "Fifty years"]
        }
      ]
    },
    {
      en: "Now, the conqueror of Sindh had not yet passed his seventeenth year of age, and of this the poet said: 'He led men at seventeen years, while his peers, apart from that, were occupied with other pursuits.'",
      sentences: [
        {
          id: "qr2-51-035",
          ar: "هٰذَا ،",
          en: "Now,",
          tokens: [
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "now" }
          ]
        },
        {
          id: "qr2-51-036",
          ar: "وَفَاتِحُ السِّنْدِ لَمْ يَتَجَاوَزِ السَّابِعَةَ عَشَرَةَ مِنْ عُمُرِهِ ،",
          en: "the conqueror of Sindh had not yet passed his seventeenth year of age,",
          tokens: [
            { surface: "وَفَاتِحُ", lemma: "فتح", pos: "noun", features: "conj+nom.constr", root: "ف ت ح", gloss: "and the conqueror (of)" },
            { surface: "السِّنْدِ", lemma: "سند", pos: "proper", features: "def.gen", root: "", gloss: "Sindh" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "يَتَجَاوَزِ", lemma: "تجاوز", pos: "verb", features: "juss.3ms", root: "ج و ز", gloss: "passed" },
            { surface: "السَّابِعَةَ", lemma: "سابع", pos: "adj", features: "def.acc.f", root: "س ب ع", gloss: "the seventeenth" },
            { surface: "عَشَرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "عُمُرِهِ", lemma: "عمر", pos: "noun", features: "gen+3ms", root: "ع م ر", gloss: "his age" }
          ]
        },
        {
          id: "qr2-51-037",
          ar: "وَفِيْ ذٰلِكَ قَالَ الشَّاعِرُ: سَاسَ الرِّجَالَ لِسَبْعَ عَشَرَةَ حِجَّةً ،",
          en: "and of this the poet said: 'He led men at seventeen years,",
          tokens: [
            { surface: "وَفِيْ", lemma: "في", pos: "prep", features: "conj+prep", root: "", gloss: "and of" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem.ms", root: "", gloss: "that" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "الشَّاعِرُ", lemma: "شاعر", pos: "noun", features: "def.nom", root: "ش ع ر", gloss: "the poet" },
            { surface: "سَاسَ", lemma: "ساس", pos: "verb", features: "perf.3ms", root: "س و س", gloss: "he led, governed" },
            { surface: "الرِّجَالَ", lemma: "رجل", pos: "noun", features: "def.pl.acc", root: "ر ج ل", gloss: "men" },
            { surface: "لِسَبْعَ", lemma: "سبع", pos: "num", features: "prep+acc", root: "س ب ع", gloss: "at seven" },
            { surface: "عَشَرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "حِجَّةً", lemma: "حجة", pos: "noun", features: "indef.acc", root: "ح ج ج", gloss: "years" }
          ]
        },
        {
          id: "qr2-51-038",
          ar: "وَلِدَاتُهُ عَنْ ذَاكَ فِيْ أَشْغَالِ.",
          en: "while his peers, apart from that, were occupied with other pursuits.'",
          tokens: [
            { surface: "وَلِدَاتُهُ", lemma: "لدة", pos: "noun", features: "conj+pl.nom+3ms", root: "و ل د", gloss: "while his peers" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "apart from" },
            { surface: "ذَاكَ", lemma: "ذاك", pos: "dem", features: "dem.ms", root: "", gloss: "that" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "أَشْغَالِ", lemma: "شغل", pos: "noun", features: "pl.gen", root: "ش غ ل", gloss: "occupations" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ كَانَ عُمُرُ فَاتِحِ السِّنْدِ حِيْنَ فَتَحَهَا؟",
          options: ["لَمْ يَتَجَاوَزِ السَّابِعَةَ عَشَرَةَ مِنْ عُمُرِهِ", "كَانَ فِيْ الثَّلَاثِيْنَ مِنْ عُمُرِهِ", "كَانَ شَيْخاً كَبِيْراً"],
          answer: 0,
          qEn: "How old was the conqueror of Sindh when he conquered it?",
          optionsEn: ["He had not yet passed his seventeenth year", "He was thirty years old", "He was an elderly man"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "وَإِذَا ",
        post: "فِيْهِمْ شَابٌّ اجْتَهَدَ لِوَظِيْفَةٍ ،",
        en: "and if a young man among them aspires, he strives for a position,",
        options: ["طَمَحَ", "طَمَحْتُ", "تَطْمَحُ", "نَطْمَحُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he aspired.",
          "1st person singular perfect -- I aspired.",
          "2nd masculine or 3rd feminine present -- you/she aspire.",
          "1st person plural present -- we aspire.",
        ],
      },
      {
        type: "cloze",
        pre: "",
        post: "عَلَىٰ دِرَاسَتِهِ وَمُطَالَعَتِهِ ،",
        en: "he devoted himself to his study and reading,",
        options: ["عَكَفَ", "عَكَفْتُ", "تَعْكُفُ", "نَعْكُفُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he devoted himself.",
          "1st person singular perfect -- I devoted myself.",
          "2nd masculine or 3rd feminine present -- you/she devote yourself/herself.",
          "1st person plural present -- we devote ourselves.",
        ],
      },
      {
        type: "cloze",
        pre: "قَدْ ",
        post: "الْهِنْدَ",
        en: "had raided India",
        options: ["غَزَا", "غَزَوْتُ", "تَغْزُوْ", "نَغْزُوْ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he raided.",
          "1st person singular perfect -- I raided.",
          "2nd masculine or 3rd feminine present -- you/she raid.",
          "1st person plural present -- we raid.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "أَحْرَزَ الْجَوَائِزَ",
        pre: "",
        post: "الْجَوَائِزَ",
        targetPerson: "أَنْتَ",
        targetEn: "you",
        options: ["أَحْرَزْتَ", "أَحْرَزْتُ", "أَحْرَزُوْا", "تُحْرِزُ"],
        answer: 0,
        rationales: [
          "2nd masculine singular perfect -- you won.",
          "1st person singular perfect -- I won.",
          "3rd masculine plural perfect -- they won.",
          "2nd masculine or 3rd feminine present -- you/she win.",
        ],
      },
      {
        type: "shift",
        base: "سَبَىٰ الذُّرِّيَّةَ",
        pre: "",
        post: "الذُّرِّيَّةَ",
        targetPerson: "هُمْ",
        targetEn: "they",
        options: ["سَبَوُا", "سَبَيْتُ", "سَبَيْتَ", "يَسْبِي"],
        answer: 0,
        rationales: [
          "3rd masculine plural perfect -- they took captive.",
          "1st person singular perfect -- I took captive.",
          "2nd masculine singular perfect -- you took captive.",
          "3rd masculine singular present -- he takes captive.",
        ],
      },
    ],
  },
};

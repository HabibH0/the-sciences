// القراءة الراشدة, volume two, chapter 59 (printed heading "٥٩") --
// فِيْ بَيْتِ أَبِيْ أَيُّوْبَ الأَنْصَارِيِّ رَضِيَ اللهُ عَنْهُ --
// "In the House of Abu Ayyub al-Ansari, may Allah be pleased with him".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 196-197 (PDF page
// index == printed page number). Unlike own ch41-58 (excerpted/adapted
// narrative prose), this chapter is a direct first-person hadith
// narration by Abu Ayyub al-Ansari, quoted almost verbatim and closing
// with an explicit source citation "(سِيْرَةُ ابْنِ هِشَامٍ)" (Ibn
// Hisham's Sira) after the final paragraph -- that citation line is
// bibliographic apparatus, not narrative content, so it is documented
// here rather than tokenized as a sentence, matching how the book's own
// URL header/page numbers are never tokenized either. Unrelated to own
// ch57/58's Umar bin Abdul Aziz biography -- own ch58's "٭ ٭ ٭" divider
// really did close that two-part story; this is simply the next chapter
// in reading order.
//
// Paragraph granularity: each blank-line-separated block on the printed
// page is its own `paragraphs[]` entry (6 total) -- P1 is the one-line
// narrator attribution ("قَالَ سَيِّدُنَا أَبُوْ أَيُّوْبَ..."), P2 is
// the opening exchange about which floor each would take, P3-P5 are the
// water-jar and garlic/onion-supper anecdotes, P6 is the closing line.
// Sentences are split at each ، and . (and ؟/!) throughout; colons do
// not split -- so "قَالَ:"/"فَقُلْتُ:"-style speech tags stay attached to
// the quotation that follows them in the same sentence, per the
// project's standing convention.
//
// Homographs / reused-with-extended-sense (existing lemma key, token-
// level pos/gloss override, no new `newWords`/`lemmas` entry -- several
// of these are the "lemma-key collision with no distinguishing spelling"
// pattern already used for "أكثر"/"يُكْثِرُ" in own ch57 and "عهد"/"علف"
// in own ch58):
//   - "حُبٌّ" (qr2-59-012, noun "a large [water] jar") reuses the lemma
//     key "حب" already taught as a verb ("to love," own ch57) -- same
//     bare spelling, unrelated meaning, no way to distinguish the two
//     without diacritics the corpus's lemma keys don't carry.
//   - "أُعْظِمُ" (qr2-59-006, verb "I consider it grave/serious") reuses
//     the lemma key "أعظم" already taught as an elative adjective
//     ("greater," own ch55) -- same spelling, Form IV verb sense here.
//   - "يَقْطُرَ" (qr2-59-015, verb "to drip") reuses the lemma key "قطر"
//     already taught as a noun ("a region, tract," own ch51).
//   - "اِظْهَرْ" (qr2-59-007, imperative verb "go up, be prominent")
//     reuses the lemma key "ظهر" already taught as a noun ("Ẓuhr,
//     midday," own ch06) -- same root ظ.ه.ر ("to appear, be visible"),
//     different derived sense.
//   - "الْعُلُوِّ" (qr2-59-003, noun "the upper floor") reuses the lemma
//     key "علو" already taught with the sense "height" (own ch47, of
//     the lion's stature) -- ordinary polysemy of "elevation," not
//     treated as a new entry.
//   - "الْعَشَاءَ"/"عَشَائِهِ" (qr2-59-016/019, noun "supper, the evening
//     meal") reuses the lemma key "عشاء" already taught in the sense
//     "ʿIshāʾ, the night prayer" (v1 ch01) -- same word family
//     (evening), the ordinary "meal eaten at that time" sense.
//   - "نَبْتَغِيْ" (qr2-59-018/029, "we seek") reuses the already-known
//     Form VIII lemma "ابتغى" (v1 ch09) directly -- not a new entry.
//
// Footnoted new entries: "السُّفْلْ" (qr2-59-002, "the lower floor") and
// "قَطِيْفَةٍ" (qr2-59-013, "a plush blanket") and "نُنَشِّفُ"
// (qr2-59-015, "we dry up, mop up") and "تَيَمَّمْتُ" (qr2-59-018, "I
// deliberately sought out") all carry a `book_note` transcribed from the
// page's own footnotes.
//
// "الأَنْصَارِيِّ" appears only in the printed title and in check-option
// text, never inside a tokenized paragraph sentence (the body's own
// narrator line, qr2-59-001, says only "أَبُوْ أَيُّوْبَ" with no nisba) --
// so, matching the standing convention that the book's own title/header/
// page-number apparatus is documented but never tokenized and therefore
// never contributes a `newWords` entry, it is NOT added as its own entry
// here despite being a genuinely new descriptive nisba adjective
// (contrast own ch56/57's "بيزنطية"/"نصرانية"/"عمرية", which DO get
// entries because they occur inside tokenized sentences). "أَيُّوْبَ"
// itself (Ayyub) is tokenized pos:"proper" inline with no `newWords`
// entry, per the ordinary personal-name convention.
//
// "أَنْتُمْ" (qr2-59-032, "you [pl.]") is entered as its own `newWords`
// item since none of the plural/dual independent pronouns have been
// taught yet in this book, even though "أَنَا"/"أَنْتَ"/"نَحْنُ" (v1)
// and "هُوَ" (own ch57) already have entries.
//
// Vocabulary notes: "قال"، "سيد"، "أب"، "أيوب" (proper, no entry)،
// "رضي"، "الله"، "نزل"، "على"، "رسول"، "في"، "بيت"، "أنا"، "أم"، "لما"،
// "أن" (subordinator)، "إن"، "نبي"، "أكره"/"كره" (Form I, reused directly
// from own ch58's new entry)، "فوق"، "تحت"، "كان"، "نحن"، "أنت"، "قد"،
// "ما"، "لنا"، "غير"، "آذى"، "شيء"، "من" (relative "who"), "صنع"، "بعث"،
// "رد"، "فضل"، "يد"، "أكل"، "ذلك"، "بركة"، "ليلة"، "جعل"، "بصل"، "أو"،
// "رأى"، "أثر"، "جاء"، "فزع"، "وجد"، "ريح"، "رجل"، "أما"، "بعد"، "لم"،
// "شديد"، "وجد" are all already known and reused per the notes above.
export const CHAPTER = {
  id: "ch59",
  title: {
    ar: "فِيْ بَيْتِ أَبِيْ أَيُّوْبَ الأَنْصَارِيِّ",
    en: "In the House of Abu Ayyub al-Ansari"
  },
  pages: [196, 197],
  newWords: [
    "سفل", "أرفق", "غشي", "مسكن", "انكسر", "قطيفة", "لحاف",
    "نشف", "تخوف", "تيمم", "موضع", "ثوم", "شجرة", "ناجى", "أنتم"
  ],
  lemmas: {
    "سفل": {
      root: "س ف ل", pos: "noun", gloss: "the lower floor, downstairs",
      book_note: "السُّفْل: تَحْت."
    },
    "أرفق": { root: "ر ف ق", pos: "adj", gloss: "more convenient, kinder" },
    "غشي": { root: "غ ش ي", pos: "verb", gloss: "to come often to, visit" },
    "مسكن": { root: "س ك ن", pos: "noun", gloss: "a dwelling, house" },
    "انكسر": { root: "ك س ر", pos: "verb", gloss: "to break, be broken" },
    "قطيفة": {
      root: "ق ط ف", pos: "noun", gloss: "a plush blanket, velvet cloth",
      book_note: "قَطِيْفَة: نَسِيْج من الحرير أو القُطن."
    },
    "لحاف": { root: "ل ح ف", pos: "noun", gloss: "a blanket, quilt" },
    "نشف": {
      root: "ن ش ف", pos: "verb", gloss: "to dry, soak up (moisture)",
      book_note: "نَشَفَ يُنَشِّفُ تَنْشِيْفاً: جَفَّفَ."
    },
    "تخوف": { root: "خ و ف", pos: "noun", gloss: "fear, dread" },
    "تيمم": {
      root: "ي م م", pos: "verb", gloss: "to deliberately seek out, aim for",
      book_note: "تَيَمَّمَ يَتَيَمَّمُ الشيء: تَوَخَّاه وتَعَمَّده."
    },
    "موضع": { root: "و ض ع", pos: "noun", gloss: "a place, spot" },
    "ثوم": { root: "ث و م", pos: "noun", gloss: "garlic" },
    "شجرة": { root: "ش ج ر", pos: "noun", gloss: "a tree" },
    "ناجى": { root: "ن ج و", pos: "verb", gloss: "to confide in, converse privately with" },
    "أنتم": { pos: "noun", gloss: "you (plural)" },
  },
  paragraphs: [
    {
      en: "Our master Abu Ayyub, may Allah be pleased with him, said:",
      sentences: [
        {
          id: "qr2-59-001",
          ar: "قَالَ سَيِّدُنَا أَبُوْ أَيُّوْبَ رَضِيَ اللهُ عَنْهُ:",
          en: "Our master Abu Ayyub, may Allah be pleased with him, said:",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "said" },
            { surface: "سَيِّدُنَا", lemma: "سيد", pos: "noun", features: "nom+1p", gloss: "our master" },
            { surface: "أَبُوْ", lemma: "أب", pos: "noun", features: "nom.constr", gloss: "Abu (father of)" },
            { surface: "أَيُّوْبَ", lemma: "أيوب", pos: "proper", features: "gen", gloss: "Ayyub" },
            { surface: "رَضِيَ", lemma: "رضي", pos: "verb", features: "perf.3ms", gloss: "was pleased" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", gloss: "Allah" },
            { surface: "عَنْهُ", lemma: "عن", pos: "prep", features: "+3ms", gloss: "with him" },
          ],
        },
      ],
      checks: [
        {
          q: "مَنْ رَوَى هٰذِهِ الْقِصَّةَ؟",
          options: ["أَبُو أَيُّوْبَ الأَنْصَارِيُّ", "عُمَرُ بْنُ الْخَطَّابِ", "أَبُو هُرَيْرَةَ", "عَبْدُ اللهِ بْنُ عُمَرَ"],
          answer: 0,
          qEn: "Who narrated this story?",
          optionsEn: ["Abu Ayyub al-Ansari", "Umar bin al-Khattab", "Abu Hurairah", "Abdullah bin Umar"],
        },
      ],
    },
    {
      en: "\"When the Messenger of Allah ﷺ stayed with me in my house, he stayed on the lower floor, while I and Umm Ayyub were on the upper floor. I said to him: 'O Prophet of Allah, may my father and mother be sacrificed for you! I truly hate and find it grave that I should be above you while you are beneath me — so you go up and be on the upper floor, and we will go down and be on the lower floor.' He said: 'O Abu Ayyub, it is more convenient for us, and for those who come to visit us, that we be on the lower floor of the house.'\"",
      sentences: [
        {
          id: "qr2-59-002",
          ar: "«لَمَّا نَزَلَ عَلَيَّ رَسُوْلُ اللهِ ﷺ فِيْ بَيْتِيْ نَزَلَ فِي السُّفْلْ،",
          en: "\"When the Messenger of Allah ﷺ stayed with me in my house, he stayed on the lower floor,",
          tokens: [
            { surface: "لَمَّا", lemma: "لما", pos: "part", gloss: "when" },
            { surface: "نَزَلَ", lemma: "نزل", pos: "verb", features: "perf.3ms", gloss: "stayed, came down" },
            { surface: "عَلَيَّ", lemma: "على", pos: "prep", features: "+1s", gloss: "with me" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", gloss: "the Messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "بَيْتِيْ", lemma: "بيت", pos: "noun", features: "gen+1s", gloss: "my house" },
            { surface: "نَزَلَ", lemma: "نزل", pos: "verb", features: "perf.3ms", gloss: "he stayed" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "on" },
            { surface: "السُّفْلْ", lemma: "سفل", pos: "noun", features: "def.gen", gloss: "the lower floor" },
          ],
        },
        {
          id: "qr2-59-003",
          ar: "وَأَنَا وَأُمُّ أَيُّوْبَ فِي الْعُلُوِّ،",
          en: "and I and Umm Ayyub were on the upper floor,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+1s", gloss: "while I" },
            { surface: "وَأُمُّ", lemma: "أم", pos: "noun", features: "conj+nom.constr", gloss: "and Umm (mother of)" },
            { surface: "أَيُّوْبَ", lemma: "أيوب", pos: "proper", features: "gen", gloss: "Ayyub" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "on" },
            { surface: "الْعُلُوِّ", lemma: "علو", pos: "noun", features: "def.gen", gloss: "the upper floor" },
          ],
        },
        {
          id: "qr2-59-004",
          ar: "فَقُلْتُ لَهُ: يَا نَبِيَّ اللهِ!",
          en: "so I said to him: 'O Prophet of Allah!",
          tokens: [
            { surface: "فَقُلْتُ", lemma: "قال", pos: "verb", features: "conj+perf.1s", gloss: "so I said" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O" },
            { surface: "نَبِيَّ", lemma: "نبي", pos: "noun", features: "voc.acc.constr", gloss: "Prophet (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
          ],
        },
        {
          id: "qr2-59-005",
          ar: "بِأَبِيْ أَنْتَ وَأُمِّيْ!",
          en: "May my father and mother be sacrificed for you!",
          tokens: [
            { surface: "بِأَبِيْ", lemma: "أب", pos: "noun", features: "prep.gen+1s", gloss: "with my father" },
            { surface: "أَنْتَ", lemma: "أنت", pos: "noun", features: "2ms", gloss: "(may) you (be ransomed)" },
            { surface: "وَأُمِّيْ", lemma: "أم", pos: "noun", features: "conj+gen.f+1s", gloss: "and my mother" },
          ],
        },
        {
          id: "qr2-59-006",
          ar: "إِنِّيْ لأَكْرَهُ وَأُعْظِمُ أَنْ أَكُوْنَ فَوْقَكَ وَتَكُوْنَ تَحْتِيْ،",
          en: "I truly hate and find it grave that I should be above you while you are beneath me,",
          tokens: [
            { surface: "إِنِّيْ", lemma: "إن", pos: "part", features: "+1s", gloss: "indeed I" },
            { surface: "لأَكْرَهُ", lemma: "كره", pos: "verb", features: "impf.1s", gloss: "truly dislike" },
            { surface: "وَأُعْظِمُ", lemma: "أعظم", pos: "verb", features: "conj+impf.1s", gloss: "and consider it grave" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "أَكُوْنَ", lemma: "كان", pos: "verb", features: "impf.1s", gloss: "I be" },
            { surface: "فَوْقَكَ", lemma: "فوق", pos: "adv", features: "acc+2ms", gloss: "above you" },
            { surface: "وَتَكُوْنَ", lemma: "كان", pos: "verb", features: "conj+impf.2ms", gloss: "and you be" },
            { surface: "تَحْتِيْ", lemma: "تحت", pos: "prep", features: "gen+1s", gloss: "beneath me" },
          ],
        },
        {
          id: "qr2-59-007",
          ar: "فَاظْهَرْ أَنْتَ فَكُنْ فِي الْعُلُوِّ،",
          en: "so you go up and be on the upper floor,",
          tokens: [
            { surface: "فَاظْهَرْ", lemma: "ظهر", pos: "verb", features: "conj+imp.2ms", gloss: "so you go up, be prominent" },
            { surface: "أَنْتَ", lemma: "أنت", pos: "noun", features: "2ms", gloss: "you" },
            { surface: "فَكُنْ", lemma: "كان", pos: "verb", features: "conj+imp.2ms", gloss: "and be" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "on" },
            { surface: "الْعُلُوِّ", lemma: "علو", pos: "noun", features: "def.gen", gloss: "the upper floor" },
          ],
        },
        {
          id: "qr2-59-008",
          ar: "وَنَنْزِلُ نَحْنُ فَنَكُوْنَ فِي السُّفْلْ،",
          en: "and we go down and be on the lower floor.'",
          tokens: [
            { surface: "وَنَنْزِلُ", lemma: "نزل", pos: "verb", features: "conj+impf.1p", gloss: "and we go down" },
            { surface: "نَحْنُ", lemma: "نحن", pos: "noun", features: "1p", gloss: "we" },
            { surface: "فَنَكُوْنَ", lemma: "كان", pos: "verb", features: "conj+impf.1p", gloss: "and be" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "on" },
            { surface: "السُّفْلْ", lemma: "سفل", pos: "noun", features: "def.gen", gloss: "the lower floor" },
          ],
        },
        {
          id: "qr2-59-009",
          ar: "فَقَالَ: يَا أَبَا أَيُّوْبَ!",
          en: "He said: 'O Abu Ayyub!",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", gloss: "he said" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O" },
            { surface: "أَبَا", lemma: "أب", pos: "noun", features: "voc.acc.constr", gloss: "Abu (father of)" },
            { surface: "أَيُّوْبَ", lemma: "أيوب", pos: "proper", features: "gen", gloss: "Ayyub" },
          ],
        },
        {
          id: "qr2-59-010",
          ar: "إِنَّ أَرْفَقَ بِنَا وَبِمَنْ يَغْشَانَا أَنْ نَكُوْنَ فِيْ سُفْلِ الْبَيْتِ.",
          en: "It is more convenient for us, and for those who come to visit us, that we be on the lower floor of the house.'\"",
          tokens: [
            { surface: "إِنَّ", lemma: "إن", pos: "part", gloss: "indeed" },
            { surface: "أَرْفَقَ", lemma: "أرفق", pos: "adj", features: "acc", root: "ر ف ق", gloss: "more convenient" },
            { surface: "بِنَا", lemma: "ب", pos: "prep", features: "+1p", gloss: "for us" },
            { surface: "وَبِمَنْ", lemma: "من", pos: "rel", features: "conj+prep", gloss: "and for those who" },
            { surface: "يَغْشَانَا", lemma: "غشي", pos: "verb", features: "impf.3ms+1p", root: "غ ش ي", gloss: "come to visit us" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "نَكُوْنَ", lemma: "كان", pos: "verb", features: "impf.1p", gloss: "we be" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "on" },
            { surface: "سُفْلِ", lemma: "سفل", pos: "noun", features: "gen.constr", gloss: "the lower floor (of)" },
            { surface: "الْبَيْتِ", lemma: "بيت", pos: "noun", features: "def.gen", gloss: "the house" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا أَرَادَ أَبُو أَيُّوْبَ أَنْ يَكُوْنَ هُوَ فِي السُّفْلِ وَالرَّسُوْلُ ﷺ فِي الْعُلُوِّ؟",
          options: ["لِأَنَّ السُّفْلَ كَانَ أَبْرَدَ", "لِأَنَّهُ كَرِهَ أَنْ يَكُوْنَ فَوْقَ النَّبِيِّ ﷺ", "لِضِيْقِ الْمَكَانِ فِي الْعُلُوِّ", "لِأَنَّ الرَّسُوْلَ ﷺ طَلَبَ ذٰلِكَ"],
          answer: 1,
          qEn: "Why did Abu Ayyub want himself to be on the lower floor and the Messenger ﷺ on the upper floor?",
          optionsEn: ["Because the lower floor was cooler", "Because he hated to be above the Prophet ﷺ", "Because the upper floor was too small", "Because the Messenger ﷺ asked for that"],
        },
      ],
    },
    {
      en: "He said: \"So the Messenger of Allah ﷺ was on its lower floor, while we were above him in the house, and one of our water-jars broke, so I and Umm Ayyub got up with a blanket of ours — we had no other blanket than it — and mopped up the water with it, fearing that any of it might drip onto the Messenger of Allah ﷺ and harm him.\"",
      sentences: [
        {
          id: "qr2-59-011",
          ar: "قَالَ: فَكَانَ رَسُوْلُ اللهِ ﷺ فِيْ سُفْلِهِ وَكُنَّا فَوْقَهُ فِي الْمَسْكَنِ،",
          en: "He said: \"So the Messenger of Allah ﷺ was on its lower floor, while we were above him in the house,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "فَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", gloss: "so ... was" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", gloss: "the Messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "on" },
            { surface: "سُفْلِهِ", lemma: "سفل", pos: "noun", features: "gen+3ms", gloss: "its lower floor" },
            { surface: "وَكُنَّا", lemma: "كان", pos: "verb", features: "conj+perf.1p", gloss: "and we were" },
            { surface: "فَوْقَهُ", lemma: "فوق", pos: "adv", features: "+3ms", gloss: "above him" },
            { surface: "فِي", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "الْمَسْكَنِ", lemma: "مسكن", pos: "noun", features: "def.gen", root: "س ك ن", gloss: "the dwelling" },
          ],
        },
        {
          id: "qr2-59-012",
          ar: "فَلَقَدِ انْكَسَرَ حُبٌّ لَنَا فِيْهِ مَاءٌ،",
          en: "and one of our jars, with water in it, broke,",
          tokens: [
            { surface: "فَلَقَدِ", lemma: "قد", pos: "part", features: "conj", gloss: "and indeed" },
            { surface: "انْكَسَرَ", lemma: "انكسر", pos: "verb", features: "perf.3ms", root: "ك س ر", gloss: "broke" },
            { surface: "حُبٌّ", lemma: "حب", pos: "noun", features: "indef.nom", gloss: "a large jar" },
            { surface: "لَنَا", lemma: "ل", pos: "prep", features: "+1p", gloss: "of ours" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "+3ms", gloss: "with" },
            { surface: "مَاءٌ", lemma: "ماء", pos: "noun", features: "indef.nom", gloss: "water in it" },
          ],
        },
        {
          id: "qr2-59-013",
          ar: "فَقُمْتُ أَنَا وَأُمُّ أَيُّوْبَ بِقَطِيْفَةٍ لَنَا،",
          en: "so I and Umm Ayyub got up with a blanket of ours,",
          tokens: [
            { surface: "فَقُمْتُ", lemma: "قام", pos: "verb", features: "conj+perf.1s", gloss: "so I got up" },
            { surface: "أَنَا", lemma: "أنا", pos: "noun", features: "1s", gloss: "I" },
            { surface: "وَأُمُّ", lemma: "أم", pos: "noun", features: "conj+nom.constr", gloss: "and Umm" },
            { surface: "أَيُّوْبَ", lemma: "أيوب", pos: "proper", features: "gen", gloss: "Ayyub" },
            { surface: "بِقَطِيْفَةٍ", lemma: "قطيفة", pos: "noun", features: "prep.indef.gen.f", gloss: "with a plush blanket" },
            { surface: "لَنَا", lemma: "ل", pos: "prep", features: "+1p", gloss: "of ours" },
          ],
        },
        {
          id: "qr2-59-014",
          ar: "مَا لَنَا لِحَافٌ غَيْرُهَا،",
          en: "we had no other blanket than it,",
          tokens: [
            { surface: "مَا", lemma: "ما", pos: "part", gloss: "we had no" },
            { surface: "لَنَا", lemma: "ل", pos: "prep", features: "+1p", gloss: "for us" },
            { surface: "لِحَافٌ", lemma: "لحاف", pos: "noun", features: "indef.nom", root: "ل ح ف", gloss: "a blanket" },
            { surface: "غَيْرُهَا", lemma: "غير", pos: "noun", features: "nom+3fs", gloss: "other than it" },
          ],
        },
        {
          id: "qr2-59-015",
          ar: "نُنَشِّفُ بِهَا الْمَاءَ تَخَوُّفاً أَنْ يَقْطُرَ عَلَىٰ رَسُوْلِ اللهِ ﷺ مِنْهُ شَيْءٌ فَيُؤْذِيْهِ.",
          en: "we mopped up the water with it, fearing that any of it might drip onto the Messenger of Allah ﷺ and harm him.\"",
          tokens: [
            { surface: "نُنَشِّفُ", lemma: "نشف", pos: "verb", features: "impf.1p", root: "ن ش ف", gloss: "we dried up" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "+3fs", gloss: "with it" },
            { surface: "الْمَاءَ", lemma: "ماء", pos: "noun", features: "def.acc", gloss: "the water" },
            { surface: "تَخَوُّفاً", lemma: "تخوف", pos: "noun", features: "indef.acc", root: "خ و ف", gloss: "out of fear" },
            { surface: "أَنْ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "يَقْطُرَ", lemma: "قطر", pos: "verb", features: "impf.3ms", gloss: "would drip" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "on" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", gloss: "the Messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "+3ms", gloss: "of it" },
            { surface: "شَيْءٌ", lemma: "شيء", pos: "noun", features: "indef.nom", gloss: "anything" },
            { surface: "فَيُؤْذِيْهِ", lemma: "آذى", pos: "verb", features: "conj+impf.3ms+3ms", gloss: "and harm him" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ أَبُو أَيُّوْبَ وَزَوْجَتُهُ حِيْنَ انْكَسَرَ الْحُبُّ وَانْسَكَبَ الْمَاءُ؟",
          options: ["تَرَكَاهُ حَتَّى جَفَّ", "نَشَّفَاهُ بِقَطِيْفَتِهِمَا خَوْفاً أَنْ يُؤْذِيَ الرَّسُوْلَ ﷺ", "نَادَيَا الْجِيْرَانَ لِلْمُسَاعَدَةِ", "نَزَلاَ إِلَى الرَّسُوْلِ ﷺ فَوْراً"],
          answer: 1,
          qEn: "What did Abu Ayyub and his wife do when the jar broke and the water spilled?",
          optionsEn: ["They left it until it dried", "They mopped it up with their blanket, fearing it would harm the Messenger ﷺ", "They called the neighbors for help", "They went down to the Messenger ﷺ at once"],
        },
      ],
    },
    {
      en: "He said: \"We used to prepare his supper, then send it to him, and whenever he sent back what remained of it, I and Umm Ayyub would seek out the spot his hand had touched and eat from it, seeking the blessing in that — until one night we sent him his supper having put onion or garlic in it, and the Messenger of Allah ﷺ sent it back, and I saw no trace of his hand in it. So I went to him, alarmed, and said: 'O Messenger of Allah, may my father and mother be sacrificed for you! You sent back your supper, and I saw in it no spot touched by your hand, and whenever you sent it back to us before, I and Umm Ayyub would seek out the spot touched by your hand, seeking the blessing in that.'\"",
      sentences: [
        {
          id: "qr2-59-016",
          ar: "قَالَ: وَكُنَّا نَصْنَعُ لَهُ الْعَشَاءَ،",
          en: "He said: \"We used to prepare his supper,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "وَكُنَّا", lemma: "كان", pos: "verb", features: "conj+perf.1p", gloss: "and we used to" },
            { surface: "نَصْنَعُ", lemma: "صنع", pos: "verb", features: "impf.1p", gloss: "prepare" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "for him" },
            { surface: "الْعَشَاءَ", lemma: "عشاء", pos: "noun", features: "def.acc", gloss: "the supper" },
          ],
        },
        {
          id: "qr2-59-017",
          ar: "ثُمَّ نَبْعَثُ بِهِ إِلَيْهِ،",
          en: "then send it to him,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", gloss: "then" },
            { surface: "نَبْعَثُ", lemma: "بعث", pos: "verb", features: "impf.1p", gloss: "we would send" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "+3ms", gloss: "it" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
          ],
        },
        {
          id: "qr2-59-018",
          ar: "فَإِذَا رَدَّ عَلَيْنَا فَضْلَهُ تَيَمَّمْتُ أَنَا وَأُمُّ أَيُّوْبَ مَوْضِعَ يَدِهِ فَأَكَلْنَا مِنْهُ نَبْتَغِيْ بِذٰلِكَ الْبَرَكَةَ،",
          en: "and whenever he sent back what remained of it, I and Umm Ayyub would seek out the spot his hand had touched and eat from it, seeking the blessing in that,",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "part", features: "conj", gloss: "and when" },
            { surface: "رَدَّ", lemma: "رد", pos: "verb", features: "perf.3ms", gloss: "he sent back" },
            { surface: "عَلَيْنَا", lemma: "على", pos: "prep", features: "+1p", gloss: "to us" },
            { surface: "فَضْلَهُ", lemma: "فضل", pos: "noun", features: "acc+3ms", gloss: "what remained of it" },
            { surface: "تَيَمَّمْتُ", lemma: "تيمم", pos: "verb", features: "perf.1s", root: "ي م م", gloss: "I sought out" },
            { surface: "أَنَا", lemma: "أنا", pos: "noun", features: "1s", gloss: "I" },
            { surface: "وَأُمُّ", lemma: "أم", pos: "noun", features: "conj+nom.constr", gloss: "and Umm" },
            { surface: "أَيُّوْبَ", lemma: "أيوب", pos: "proper", features: "gen", gloss: "Ayyub" },
            { surface: "مَوْضِعَ", lemma: "موضع", pos: "noun", features: "acc.constr", root: "و ض ع", gloss: "the spot (of)" },
            { surface: "يَدِهِ", lemma: "يد", pos: "noun", features: "gen+3ms", gloss: "his hand" },
            { surface: "فَأَكَلْنَا", lemma: "أكل", pos: "verb", features: "conj+perf.1p", gloss: "and we ate" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "+3ms", gloss: "from it" },
            { surface: "نَبْتَغِيْ", lemma: "ابتغى", pos: "verb", features: "impf.1p", gloss: "seeking" },
            { surface: "بِذٰلِكَ", lemma: "ذلك", pos: "dem", features: "prep.m", gloss: "through that" },
            { surface: "الْبَرَكَةَ", lemma: "بركة", pos: "noun", features: "def.acc", gloss: "the blessing" },
          ],
        },
        {
          id: "qr2-59-019",
          ar: "حَتَّىٰ بَعَثْنَا إِلَيْهِ لَيْلَةً بِعَشَائِهِ،",
          en: "until one night we sent him his supper,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", gloss: "until" },
            { surface: "بَعَثْنَا", lemma: "بعث", pos: "verb", features: "perf.1p", gloss: "we sent" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "+3ms", gloss: "to him" },
            { surface: "لَيْلَةً", lemma: "ليلة", pos: "noun", features: "indef.acc.f", gloss: "one night" },
            { surface: "بِعَشَائِهِ", lemma: "عشاء", pos: "noun", features: "prep.gen+3ms", gloss: "his supper" },
          ],
        },
        {
          id: "qr2-59-020",
          ar: "وَقَدْ جَعَلْنَا لَهُ فِيْهِ بَصَلاً أَوْ ثُوْماً،",
          en: "having put onion or garlic in it,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj", gloss: "and we had" },
            { surface: "جَعَلْنَا", lemma: "جعل", pos: "verb", features: "perf.1p", gloss: "put" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "in it for him" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "+3ms", gloss: "in it" },
            { surface: "بَصَلاً", lemma: "بصل", pos: "noun", features: "indef.acc", gloss: "onion" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", gloss: "or" },
            { surface: "ثُوْماً", lemma: "ثوم", pos: "noun", features: "indef.acc", root: "ث و م", gloss: "garlic" },
          ],
        },
        {
          id: "qr2-59-021",
          ar: "فَرَدَّهُ رَسُوْلُ اللهِ ﷺ،",
          en: "and the Messenger of Allah ﷺ sent it back,",
          tokens: [
            { surface: "فَرَدَّهُ", lemma: "رد", pos: "verb", features: "conj+perf.3ms+3ms", gloss: "and ... sent it back" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", gloss: "the Messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
          ],
        },
        {
          id: "qr2-59-022",
          ar: "وَلَمْ أَرَ لِيَدِهِ فِيْهِ أَثَراً،",
          en: "and I saw no trace of his hand in it.",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "and not" },
            { surface: "أَرَ", lemma: "رأى", pos: "verb", features: "impf.1s", gloss: "did I see" },
            { surface: "لِيَدِهِ", lemma: "يد", pos: "noun", features: "prep.gen+3ms", gloss: "of his hand" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "+3ms", gloss: "in it" },
            { surface: "أَثَراً", lemma: "أثر", pos: "noun", features: "indef.acc", gloss: "any trace" },
          ],
        },
        {
          id: "qr2-59-023",
          ar: "قَالَ: فَجِئْتُهُ فَزِعاً،",
          en: "So I went to him, alarmed,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "فَجِئْتُهُ", lemma: "جاء", pos: "verb", features: "conj+perf.1s+3ms", gloss: "so I came to him" },
            { surface: "فَزِعاً", lemma: "فزع", pos: "adj", features: "indef.acc", gloss: "alarmed" },
          ],
        },
        {
          id: "qr2-59-024",
          ar: "فَقُلْتُ: يَا رَسُوْلَ اللهِ!",
          en: "and said: 'O Messenger of Allah!",
          tokens: [
            { surface: "فَقُلْتُ", lemma: "قال", pos: "verb", features: "conj+perf.1s", gloss: "and said" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "voc.acc.constr", gloss: "Messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", gloss: "Allah" },
          ],
        },
        {
          id: "qr2-59-025",
          ar: "بِأَبِيْ أَنْتَ وَأُمِّيْ!",
          en: "May my father and mother be sacrificed for you!",
          tokens: [
            { surface: "بِأَبِيْ", lemma: "أب", pos: "noun", features: "prep.gen+1s", gloss: "with my father" },
            { surface: "أَنْتَ", lemma: "أنت", pos: "noun", features: "2ms", gloss: "(may) you (be ransomed)" },
            { surface: "وَأُمِّيْ", lemma: "أم", pos: "noun", features: "conj+gen.f+1s", gloss: "and my mother" },
          ],
        },
        {
          id: "qr2-59-026",
          ar: "رَدَدْتَ عَشَاءَكَ،",
          en: "You sent back your supper,",
          tokens: [
            { surface: "رَدَدْتَ", lemma: "رد", pos: "verb", features: "perf.2ms", gloss: "you sent back" },
            { surface: "عَشَاءَكَ", lemma: "عشاء", pos: "noun", features: "acc+2ms", gloss: "your supper" },
          ],
        },
        {
          id: "qr2-59-027",
          ar: "وَلَمْ أَرَ فِيْهِ مَوْضِعَ يَدِكَ،",
          en: "and I saw in it no spot touched by your hand,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "and not" },
            { surface: "أَرَ", lemma: "رأى", pos: "verb", features: "impf.1s", gloss: "did I see" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "+3ms", gloss: "in it" },
            { surface: "مَوْضِعَ", lemma: "موضع", pos: "noun", features: "acc.constr", gloss: "the spot (of)" },
            { surface: "يَدِكَ", lemma: "يد", pos: "noun", features: "gen+2ms", gloss: "your hand" },
          ],
        },
        {
          id: "qr2-59-028",
          ar: "وَكُنْتَ إِذَا رَدَدْتَّهُ عَلَيْنَا تَيَمَّمْتُ أَنَا وَأُمُّ أَيُّوْبَ مَوْضِعَ يَدِكَ،",
          en: "and whenever you sent it back to us before, I and Umm Ayyub would seek out the spot touched by your hand,",
          tokens: [
            { surface: "وَكُنْتَ", lemma: "كان", pos: "verb", features: "conj+perf.2ms", gloss: "and you used to be" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "when" },
            { surface: "رَدَدْتَّهُ", lemma: "رد", pos: "verb", features: "perf.2ms+3ms", gloss: "you sent it back" },
            { surface: "عَلَيْنَا", lemma: "على", pos: "prep", features: "+1p", gloss: "to us" },
            { surface: "تَيَمَّمْتُ", lemma: "تيمم", pos: "verb", features: "perf.1s", gloss: "I would seek out" },
            { surface: "أَنَا", lemma: "أنا", pos: "noun", features: "1s", gloss: "I" },
            { surface: "وَأُمُّ", lemma: "أم", pos: "noun", features: "conj+nom.constr", gloss: "and Umm" },
            { surface: "أَيُّوْبَ", lemma: "أيوب", pos: "proper", features: "gen", gloss: "Ayyub" },
            { surface: "مَوْضِعَ", lemma: "موضع", pos: "noun", features: "acc.constr", gloss: "the spot (of)" },
            { surface: "يَدِكَ", lemma: "يد", pos: "noun", features: "gen+2ms", gloss: "your hand" },
          ],
        },
        {
          id: "qr2-59-029",
          ar: "نَبْتَغِيْ بِذٰلِكَ الْبَرَكَةَ.",
          en: "seeking the blessing in that.'\"",
          tokens: [
            { surface: "نَبْتَغِيْ", lemma: "ابتغى", pos: "verb", features: "impf.1p", gloss: "seeking" },
            { surface: "بِذٰلِكَ", lemma: "ذلك", pos: "dem", features: "prep.m", gloss: "through that" },
            { surface: "الْبَرَكَةَ", lemma: "بركة", pos: "noun", features: "def.acc", gloss: "the blessing" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا رَدَّ رَسُوْلُ اللهِ ﷺ عَشَاءَهُ فِيْ تِلْكَ اللَّيْلَةِ؟",
          options: ["لِأَنَّهُ كَانَ صَائِماً", "لِأَنَّهُمْ جَعَلُوا فِيْهِ بَصَلاً أَوْ ثُوْماً", "لِأَنَّهُ لَمْ يَكُنْ جَائِعاً", "لِأَنَّ الطَّعَامَ كَانَ قَلِيْلاً"],
          answer: 1,
          qEn: "Why did the Messenger of Allah ﷺ send back his supper that night?",
          optionsEn: ["Because he was fasting", "Because they had put onion or garlic in it", "Because he was not hungry", "Because the food was too little"],
        },
      ],
    },
    {
      en: "He said: \"I found in it the smell of this plant, and I am one who confides closely with others, but as for you, eat it.\"",
      sentences: [
        {
          id: "qr2-59-030",
          ar: "قَالَ: إِنِّيْ وَجَدْتُ فِيْهِ رِيْحَ هٰذِهِ الشَّجَرَةِ،",
          en: "He said: \"I found in it the smell of this plant,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "إِنِّيْ", lemma: "إن", pos: "part", features: "+1s", gloss: "indeed I" },
            { surface: "وَجَدْتُ", lemma: "وجد", pos: "verb", features: "perf.1s", gloss: "found" },
            { surface: "فِيْهِ", lemma: "في", pos: "prep", features: "+3ms", gloss: "in it" },
            { surface: "رِيْحَ", lemma: "ريح", pos: "noun", features: "acc.constr", gloss: "the scent (of)" },
            { surface: "هٰذِهِ", lemma: "هذا", pos: "dem", features: "f", gloss: "this" },
            { surface: "الشَّجَرَةِ", lemma: "شجرة", pos: "noun", features: "def.gen.f", root: "ش ج ر", gloss: "plant" },
          ],
        },
        {
          id: "qr2-59-031",
          ar: "وَأَنَا رَجُلٌ أُنَاجِيْ،",
          en: "and I am one who confides closely with others,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+1s", gloss: "and I (am)" },
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "indef.nom", gloss: "a man" },
            { surface: "أُنَاجِيْ", lemma: "ناجى", pos: "verb", features: "impf.1s", root: "ن ج و", gloss: "who confides closely (with others)" },
          ],
        },
        {
          id: "qr2-59-032",
          ar: "فَأَمَّا أَنْتُمْ فَكُلُوْهُ.",
          en: "but as for you, eat it.\"",
          tokens: [
            { surface: "فَأَمَّا", lemma: "أما", pos: "part", features: "conj", gloss: "but as for" },
            { surface: "أَنْتُمْ", lemma: "أنتم", pos: "noun", features: "2mp", gloss: "you (all)" },
            { surface: "فَكُلُوْهُ", lemma: "أكل", pos: "verb", features: "conj+imp.2mp+3ms", gloss: "eat it" },
          ],
        },
      ],
      checks: [
        {
          q: "لِمَاذَا رَفَضَ الرَّسُوْلُ ﷺ أَكْلَ الطَّعَامِ الَّذِيْ فِيْهِ ثُوْمٌ أَوْ بَصَلٌ؟",
          options: ["لِأَنَّهُ كَانَ يَكْرَهُ طَعْمَهُ", "لِأَنَّهُ رَجُلٌ يُنَاجِيْ فَلاَ يُرِيْدُ رَائِحَةً كَرِيْهَةً", "لِأَنَّهُ كَانَ مَرِيْضاً", "لِأَنَّهُ حَرَّمَهُ عَلَى نَفْسِهِ"],
          answer: 1,
          qEn: "Why did the Messenger ﷺ decline to eat food that had garlic or onion in it?",
          optionsEn: ["Because he disliked its taste", "Because he is one who confides closely with others, and did not want an unpleasant smell", "Because he was ill", "Because he had forbidden it to himself"],
        },
      ],
    },
    {
      en: "He said: \"So we ate it, and we never prepared that plant for him again.\" (Ibn Hisham's Sira)",
      sentences: [
        {
          id: "qr2-59-033",
          ar: "قَالَ: فَأَكَلْنَاهُ،",
          en: "He said: \"So we ate it,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", gloss: "he said" },
            { surface: "فَأَكَلْنَاهُ", lemma: "أكل", pos: "verb", features: "conj+perf.1p+3ms", gloss: "so we ate it" },
          ],
        },
        {
          id: "qr2-59-034",
          ar: "وَلَمْ نَصْنَعْ لَهُ تِلْكَ الشَّجَرَةَ بَعْدُ.",
          en: "and we never prepared that plant for him again.\"",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj", gloss: "and not" },
            { surface: "نَصْنَعْ", lemma: "صنع", pos: "verb", features: "juss.1p", gloss: "did we prepare" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "+3ms", gloss: "for him" },
            { surface: "تِلْكَ", lemma: "ذلك", pos: "dem", features: "f", gloss: "that" },
            { surface: "الشَّجَرَةَ", lemma: "شجرة", pos: "noun", features: "def.acc.f", gloss: "plant" },
            { surface: "بَعْدُ", lemma: "بعد", pos: "adv", gloss: "again, thereafter" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ أَبُو أَيُّوْبَ وَزَوْجَتُهُ بَعْدَ ذٰلِكَ الْمَوْقِفِ؟",
          options: ["اسْتَمَرُّوا فِيْ وَضْعِ الثُّوْمِ وَالْبَصَلِ فِيْ طَعَامِهِ", "لَمْ يَصْنَعُوْا لَهُ تِلْكَ الشَّجَرَةَ (الثُّوْمَ أَوِ الْبَصَلَ) بَعْدَ ذٰلِكَ", "غَضِبُوا مِنَ الرَّسُوْلِ ﷺ", "تَوَقَّفُوا عَنْ إِرْسَالِ الطَّعَامِ لَهُ"],
          answer: 1,
          qEn: "What did Abu Ayyub and his wife do after that incident?",
          optionsEn: ["They kept putting garlic and onion in his food", "They never prepared that plant (garlic or onion) for him again", "They became angry with the Messenger ﷺ", "They stopped sending him food altogether"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "فَلَقَدْ",
        post: "حُبٌّ لَنَا فِيْهِ مَاءٌ",
        en: "and a jar of ours, with water in it, broke.",
        options: ["انْكَسَرَ", "انْكَسَرْتُ", "انْكَسَرَتْ", "يَنْكَسِرُ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — it broke.",
          "1st person singular — I broke.",
          "3rd person feminine singular — it (f.) broke.",
          "3rd person masculine singular, imperfect — it breaks.",
        ],
      },
      {
        type: "cloze",
        pre: "فَـ",
        post: "نَحْنُ فَنَكُوْنَ فِي السُّفْلِ",
        en: "and we go down and be on the lower floor.",
        options: ["نَنْزِلُ", "يَنْزِلُ", "نَزَلْتُ", "تَنْزِلُ"],
        answer: 0,
        rationales: [
          "1st person plural, imperfect — we go down.",
          "3rd person masculine singular — he goes down.",
          "1st person singular, perfect — I went down.",
          "2nd person masculine singular — you go down.",
        ],
      },
      {
        type: "cloze",
        pre: "فَإِذَا رَدَّ عَلَيْنَا فَضْلَهُ",
        post: "أَنَا وَأُمُّ أَيُّوْبَ مَوْضِعَ يَدِهِ",
        en: "and whenever he sent back what remained of it, I would seek out the spot his hand had touched.",
        options: ["تَيَمَّمْتُ", "تَيَمَّمَ", "تَيَمَّمَتْ", "نَتَيَمَّمُ"],
        answer: 0,
        rationales: [
          "1st person singular, perfect — I sought out.",
          "3rd person masculine singular — he sought out.",
          "3rd person feminine singular — she sought out.",
          "1st person plural, imperfect — we seek out.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "رَدَّ عَشَاءَهُ",
        pre: "",
        post: "عَشَاءَهُ",
        targetPerson: "أَنْتَ",
        targetEn: "you (m.)",
        options: ["رَدَدْتَ", "رَدَّ", "رَدَدْتُ", "رَدُّوا"],
        answer: 0,
        rationales: [
          "2nd person masculine singular, perfect — you sent back.",
          "3rd person masculine singular — he sent back.",
          "1st person singular — I sent back.",
          "3rd person masculine plural — they sent back.",
        ],
      },
      {
        type: "shift",
        base: "وَجَدْتُ فِيْهِ رِيْحَ هٰذِهِ الشَّجَرَةِ",
        pre: "",
        post: "فِيْهِ رِيْحَ هٰذِهِ الشَّجَرَةِ",
        targetPerson: "هُوَ",
        targetEn: "he",
        options: ["وَجَدَ", "وَجَدْتُ", "وَجَدَتْ", "نَجِدُ"],
        answer: 0,
        rationales: [
          "3rd person masculine singular, perfect — he found.",
          "1st person singular — I found.",
          "3rd person feminine singular — she found.",
          "1st person plural, imperfect — we find.",
        ],
      },
    ],
  },
};

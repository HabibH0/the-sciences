// القراءة الراشدة, volume two, chapter 44 (printed heading "٤٤") --
// أَدَبُ الْمُعَاشَرَةِ -- "The Etiquette of Companionship" (a poem).
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 152-153.
//
// THIS CHAPTER IS VERSE (nazm), same structural departure as
// qiraah-v1/chapter-03.js (النملة) and chapter-05.js (الطائر) -- reusing
// their already-agreed adaptations rather than inventing new ones:
//   - Each bayt (both hemistichs, printed side by side in two columns --
//     right column = صدر/first hemistich, left column = عجز/second
//     hemistich, per standard Arabic verse layout) is one `sentences[]`
//     entry. The mid-bayt pause is rendered as `،` and the bayt-end as
//     `.` in `ar`, matching print convention from chapter-03/05 (the
//     book itself marks these only by column layout).
//   - This poem is a "muzdawij"-style advice poem (نظم تعليمي): each
//     individual bayt has its own internal rhyme between its two
//     hemistichs, and the rhyme changes every bayt (أدب/عجب, نشب/نسب,
//     أمانة/فطانة, ...) rather than one rhyme running the whole poem.
//   - Like chapter-03.js's poem (and unlike chapter-05.js's), most
//     hemistich-final (rawi) words here are pausal -- spelled with سكون
//     or a bare tied-tā', no visible case ending -- while several
//     hemistich-internal words keep live case vowels. One exception
//     worth flagging: "الْجَمَاعَة" (qr2-44-008, mid-bayt, NOT the rawi
//     word) is also printed bare/unmarked, closer to chapter-03's fully
//     pausal style than chapter-05's fully-voweled one. `features`
//     records the underlying grammatical case throughout regardless of
//     what is/isn't visible on `surface`, per the precedent both earlier
//     poems set.
//   - Four hemistich-final words carry a poetic إطلاق (iṭlāq) -- a
//     "connecting" alif appended after the rhyme consonant that extends
//     a pausal accusative reading (الْجَلِيْسَا، الأَنِيْسَا، الْعِتَابَا،
//     الأَصْحَابَا, all otherwise plain accusative direct objects:
//     الجليسَ، الأنيسَ، العتابَ، الأصحابَ). Transcribed with the extra
//     alif exactly as printed; `features` still records plain `.acc`.
//   - `workshop` is omitted, for the same reason given in chapter-03.js/
//     chapter-05.js: cloze/shift by substituting a wrong conjugation
//     risks breaking metre/rhyme rather than testing grammar in a short
//     rhymed poem.
//   - `register` is "imperative_verse" (not "first_person_verse" like
//     chapter-03/05) -- this poem is a father/teacher's direct advice to
//     a "you" (mostly 2nd-person jussive/imperative), not a first-person
//     voice poem.
//
// Vocabulary notes: "شِعْر" (qr2-44-010, "poems") is the SAME lemma
// spelling already taught in chapter-42.js with the gloss "hair" -- a
// genuine homograph, handled the same way flagged there (token-level
// gloss override). "اجْتَنِبِ" (qr2-44-012, verb "to avoid") is a
// distinct lemma from "اجتناب" (the verbal-noun already used inline in
// chapter-42.js, "avoidance") -- related but not identical dictionary
// forms. "قَصْد", "غَضِبَ", "أَمَانَة", "رَائِق", "طَاعَة", "جَمَاعَة",
// "غُلاَم", "تَرَكَ", "كَثِيْر", "صَاحِب", "دَعَا", "كَانَ", "قَالَ", "نَوْع"
// were all already introduced earlier in this book or in qiraah-v1, and
// are reused here with the same (or a lightly adapted) gloss rather than
// re-listed as new words.
//
// The poem is followed in print by a "٭ ٭ ٭" divider (end of unit, not a
// source attribution this time -- unlike qiraah-v1's chapter-03/05
// poems, no reprint source is named here).
export const CHAPTER = {
  id: "ch44",
  title: {
    ar: "أَدَبُ الْمُعَاشَرَةِ",
    en: "The Etiquette of Companionship"
  },
  pages: [152, 153],
  register: "imperative_verse",
  newWords: [
    "سلك", "دهر", "عجب", "نشب", "طاول", "فاخر", "نسب", "كيس", "فطانة",
    "جليس", "وحش", "أنيس", "عتاب", "نفر", "معاتبة", "مجانبة", "حلّ",
    "مجلس", "سراة", "رئيس", "رضا", "كلام", "راق", "مقام", "طيب", "خبر",
    "سفلة", "نكتة", "مبتذل", "ملحاح", "اجتنب", "مزاح", "مجون", "جنون"
  ],
  lemmas: {
    "سلك": { root: "س ل ك", pos: "verb", gloss: "to conduct oneself, follow (a path)" },
    "دهر": { root: "د ه ر", pos: "noun", gloss: "time, fate" },
    "عجب": { root: "ع ج ب", pos: "noun", gloss: "wonder, marvel" },
    "نشب": {
      root: "ن ش ب", pos: "noun", gloss: "wealth, property",
      book_note: "نَشَب: مالٌ أَصِيل مِن نقود وماشية."
    },
    "طاول": { root: "ط و ل", pos: "verb", gloss: "to vie, compete (in stature)" },
    "فاخر": { root: "ف خ ر", pos: "verb", gloss: "to boast, vie in pride" },
    "نسب": { root: "ن س ب", pos: "noun", gloss: "lineage, ancestry" },
    "كيس": { root: "ك ي س", pos: "noun", gloss: "cleverness, shrewdness" },
    "فطانة": {
      root: "ف ط ن", pos: "noun", gloss: "intelligence, perceptiveness",
      book_note: "فَطَانَة: قوّة استعداد الذهن لإدراك ما يراد إليه."
    },
    "جليس": { root: "ج ل س", pos: "noun", gloss: "companion, one who sits with you" },
    "وحش": { root: "و ح ش", pos: "verb", gloss: "to alienate, make feel unwelcome" },
    "أنيس": { root: "أ ن س", pos: "noun", gloss: "companion, friend" },
    "عتاب": { root: "ع ت ب", pos: "noun", gloss: "reproach, blame" },
    "نفر": { root: "ن ف ر", pos: "verb", gloss: "to drive away, repel" },
    "معاتبة": {
      root: "ع ت ب", pos: "noun", gloss: "gentle reproach",
      book_note: "الْمُعَاتَبَة: الْمُلاَءَمَة بِرِفْقٍ."
    },
    "مجانبة": {
      root: "ج ن ب", pos: "noun", gloss: "estrangement, keeping distance",
      book_note: "الْمُجَانَبَة: الإبعاد عن الشيء."
    },
    "حلّ": { root: "ح ل ل", pos: "verb", gloss: "to alight, settle, take a seat" },
    "مجلس": { root: "ج ل س", pos: "noun", gloss: "a gathering, assembly" },
    "سراة": {
      root: "س ر و", pos: "noun", gloss: "nobles",
      book_note: "سَرِيّ ج أسرياء وسَرَاة: شريف، كريم الحسب."
    },
    "رئيس": { root: "ر أ س", pos: "noun", gloss: "chief, leader" },
    "رضا": { root: "ر ض ي", pos: "noun", gloss: "approval, satisfaction" },
    "كلام": { root: "ك ل م", pos: "noun", gloss: "speech" },
    "راق": {
      root: "ر و ق", pos: "verb", gloss: "to please, be fitting",
      book_note: "رَاقَ يَرُوْق رَوْقاً بالشيء: أعجبه."
    },
    "مقام": { root: "ق و م", pos: "noun", gloss: "occasion, setting, station" },
    "طيب": { root: "ط ي ب", pos: "adj", gloss: "good, pleasant" },
    "خبر": { root: "خ ب ر", pos: "noun", gloss: "news, report" },
    "سفلة": {
      root: "س ف ل", pos: "noun", gloss: "lowly people",
      book_note: "سَافِل ج سَفَلَة: سَيِّئ الخُلُق، والسَّفَلَة تقال لأراذل الناس أيضاً."
    },
    "نكتة": {
      root: "ن ك ت", pos: "noun", gloss: "a witty remark, joke",
      book_note: "نُكْتَة ج نُكَت ونِكَاتٌ: جملة لطيفة تؤثر في النفس انبساطاً."
    },
    "مبتذل": { root: "ب ذ ل", pos: "adj", gloss: "vulgar, cheapened" },
    "ملحاح": { root: "ل ح ح", pos: "adj", gloss: "insistent, pestering" },
    "اجتنب": { root: "ج ن ب", pos: "verb", gloss: "to avoid" },
    "مزاح": { root: "م ز ح", pos: "noun", gloss: "joking, jesting" },
    "مجون": { root: "م ج ن", pos: "noun", gloss: "levity, ribaldry" },
    "جنون": { root: "ج ن ن", pos: "noun", gloss: "madness" }
  },
  paragraphs: [
    {
      lines: true,
      en: "A short didactic poem of advice on the etiquette of good company: conduct yourself politely with people, and you will see wonders from how time repays you. Don't compete in wealth or boast in lineage -- true honor lies in trustworthiness, and true cleverness in perceptiveness. Don't anger your companion or make your friend feel unwelcome; don't be excessive in blaming others, or you will drive your friends away -- too much reproach leads only to estrangement. And if you take a seat among noble, eminent people, seek the group's good pleasure and be an obedient companion. Say only what suits the occasion -- fine poetry and good report -- and leave off the speech of lowly people and cheap jokes. Don't be a pest, and avoid excessive joking, for too much frivolity is a kind of madness.",
      sentences: [
        {
          id: "qr2-44-001",
          ar: "أُسْلُكْ مَعَ النَّاسِ الأَدَبْ، تَرَ مِنَ الدَّهْرِ الْعَجَبْ.",
          en: "Conduct yourself with people politely, and you will see wonders from time,",
          tokens: [
            { surface: "أُسْلُكْ", lemma: "سلك", pos: "verb", features: "imp.2ms", root: "س ل ك", gloss: "to conduct oneself, follow (a path)" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "النَّاسِ", lemma: "ناس", pos: "noun", features: "def.gen", root: "ن و س", gloss: "people" },
            { surface: "الأَدَبْ", lemma: "أدب", pos: "noun", features: "def.acc", root: "أ د ب", gloss: "good manners" },
            { surface: "تَرَ", lemma: "رأى", pos: "verb", features: "juss.2ms", root: "ر أ ي", gloss: "to see" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الدَّهْرِ", lemma: "دهر", pos: "noun", features: "def.gen", root: "د ه ر", gloss: "time, fate" },
            { surface: "الْعَجَبْ", lemma: "عجب", pos: "noun", features: "def.acc", root: "ع ج ب", gloss: "wonder, marvel" }
          ]
        },
        {
          id: "qr2-44-002",
          ar: "وَلاَ تُطَاوِلْ بِنَشَبْ، وَلاَ تُفَاخِرْ بِنَسَبْ.",
          en: "and do not vie by wealth, and do not boast by lineage.",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and do not" },
            { surface: "تُطَاوِلْ", lemma: "طاول", pos: "verb", features: "juss.2ms", root: "ط و ل", gloss: "to vie, compete (in stature)" },
            { surface: "بِنَشَبْ", lemma: "نشب", pos: "noun", features: "prep+indef.gen", root: "ن ش ب", gloss: "with wealth, property" },
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and do not" },
            { surface: "تُفَاخِرْ", lemma: "فاخر", pos: "verb", features: "juss.2ms", root: "ف خ ر", gloss: "to boast, vie in pride" },
            { surface: "بِنَسَبْ", lemma: "نسب", pos: "noun", features: "prep+indef.gen", root: "ن س ب", gloss: "with lineage" }
          ]
        },
        {
          id: "qr2-44-003",
          ar: "الْعِزُّ فِي الأَمَانَةْ، وَالْكَيْسُ فِي الْفَطَانَةْ.",
          en: "Honor lies in trustworthiness, and cleverness lies in perceptiveness.",
          tokens: [
            { surface: "الْعِزُّ", lemma: "عز", pos: "noun", features: "def.nom", root: "ع ز ز", gloss: "honor, might" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in, lies in" },
            { surface: "الأَمَانَةْ", lemma: "أمانة", pos: "noun", features: "def.gen", root: "أ م ن", gloss: "trustworthiness" },
            { surface: "وَالْكَيْسُ", lemma: "كيس", pos: "noun", features: "conj+def.nom", root: "ك ي س", gloss: "and cleverness, shrewdness" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in, lies in" },
            { surface: "الْفَطَانَةْ", lemma: "فطانة", pos: "noun", features: "def.gen", root: "ف ط ن", gloss: "intelligence, perceptiveness" }
          ]
        },
        {
          id: "qr2-44-004",
          ar: "لاَ تُغْضِبِ الْجَلِيْسَا، لاَ تُوْحِشِ الأَنِيْسَا.",
          en: "Do not anger your sitting-companion, do not alienate your friend.",
          tokens: [
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "do not" },
            { surface: "تُغْضِبِ", lemma: "غضب", pos: "verb", features: "juss.2ms", root: "غ ض ب", gloss: "to anger, make angry" },
            { surface: "الْجَلِيْسَا", lemma: "جليس", pos: "noun", features: "def.acc", root: "ج ل س", gloss: "companion, one who sits with you" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "do not" },
            { surface: "تُوْحِشِ", lemma: "وحش", pos: "verb", features: "juss.2ms", root: "و ح ش", gloss: "to alienate, make feel unwelcome" },
            { surface: "الأَنِيْسَا", lemma: "أنيس", pos: "noun", features: "def.acc", root: "أ ن س", gloss: "companion, friend" }
          ]
        },
        {
          id: "qr2-44-005",
          ar: "لاَ تُكْثِرِ الْعِتَابَا، تُنَفِّرِ الأَصْحَابَا.",
          en: "Do not be excessive in reproach, [or] you will drive your friends away.",
          tokens: [
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "do not" },
            { surface: "تُكْثِرِ", lemma: "كثير", pos: "verb", features: "juss.2ms", root: "ك ث ر", gloss: "to do much, be excessive in" },
            { surface: "الْعِتَابَا", lemma: "عتاب", pos: "noun", features: "def.acc", root: "ع ت ب", gloss: "reproach, blame" },
            { surface: "تُنَفِّرِ", lemma: "نفر", pos: "verb", features: "juss.2ms", root: "ن ف ر", gloss: "to drive away, repel" },
            { surface: "الأَصْحَابَا", lemma: "صاحب", pos: "noun", features: "pl.def.acc", root: "ص ح ب", gloss: "companions, friends" }
          ]
        },
        {
          id: "qr2-44-006",
          ar: "فَكَثْرَةُ الْمُعَاتَبَةْ، تَدْعُوْ إِلَى الْمُجَانَبَةْ.",
          en: "For too much reproach leads to estrangement.",
          tokens: [
            { surface: "فَكَثْرَةُ", lemma: "كثرة", pos: "noun", features: "conj+nom.constr", root: "ك ث ر", gloss: "for excess (of)" },
            { surface: "الْمُعَاتَبَةْ", lemma: "معاتبة", pos: "noun", features: "def.gen", root: "ع ت ب", gloss: "gentle reproach" },
            { surface: "تَدْعُوْ", lemma: "دعا", pos: "verb", features: "impf.3fs", root: "د ع و", gloss: "to lead to, call to" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْمُجَانَبَةْ", lemma: "مجانبة", pos: "noun", features: "def.gen", root: "ج ن ب", gloss: "estrangement, keeping distance" }
          ]
        },
        {
          id: "qr2-44-007",
          ar: "وَإِنْ حَلَلْتَ مَجْلِسَا، بَيْنَ سَرَاةٍ رُؤَسَا.",
          en: "And if you take a seat in a gathering, among noble leaders,",
          tokens: [
            { surface: "وَإِنْ", lemma: "إن", pos: "part", features: "conj+part", root: "", gloss: "and if" },
            { surface: "حَلَلْتَ", lemma: "حلّ", pos: "verb", features: "perf.2ms", root: "ح ل ل", gloss: "to alight, settle, take a seat" },
            { surface: "مَجْلِسَا", lemma: "مجلس", pos: "noun", features: "indef.acc", root: "ج ل س", gloss: "a gathering, assembly" },
            { surface: "بَيْنَ", lemma: "بين", pos: "prep", features: "prep", root: "ب ي ن", gloss: "among" },
            { surface: "سَرَاةٍ", lemma: "سراة", pos: "noun", features: "indef.gen", root: "س ر و", gloss: "nobles" },
            { surface: "رُؤَسَا", lemma: "رئيس", pos: "noun", features: "pl.indef.acc", root: "ر أ س", gloss: "chiefs, leaders" }
          ]
        },
        {
          id: "qr2-44-008",
          ar: "فَاقْصِدْ رِضَا الْجَمَاعَة، وَكُنْ غُلاَمَ الطَّاعَةْ.",
          en: "then seek the group's good pleasure, and be an obedient companion.",
          tokens: [
            { surface: "فَاقْصِدْ", lemma: "قصد", pos: "verb", features: "conj+imp.2ms", root: "ق ص د", gloss: "to aim for, seek" },
            { surface: "رِضَا", lemma: "رضا", pos: "noun", features: "acc.constr", root: "ر ض ي", gloss: "the approval (of)" },
            { surface: "الْجَمَاعَة", lemma: "جماعة", pos: "noun", features: "gen.constr", root: "ج م ع", gloss: "the group, company" },
            { surface: "وَكُنْ", lemma: "كان", pos: "verb", features: "conj+imp.2ms", root: "ك و ن", gloss: "to be" },
            { surface: "غُلاَمَ", lemma: "غلام", pos: "noun", features: "acc.constr", root: "غ ل م", gloss: "a servant (of)" },
            { surface: "الطَّاعَةْ", lemma: "طاعة", pos: "noun", features: "def.gen", root: "ط و ع", gloss: "obedience" }
          ]
        },
        {
          id: "qr2-44-009",
          ar: "وَقُلْ مِنَ الْكَلاَمِ، مَا رَاقَ بِالْمَقَامِ.",
          en: "And say, of speech, only what suits the occasion,",
          tokens: [
            { surface: "وَقُلْ", lemma: "قال", pos: "verb", features: "conj+imp.2ms", root: "ق و ل", gloss: "to say" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْكَلاَمِ", lemma: "كلام", pos: "noun", features: "def.gen", root: "ك ل م", gloss: "speech" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "part", root: "", gloss: "only what" },
            { surface: "رَاقَ", lemma: "راق", pos: "verb", features: "perf.3ms", root: "ر و ق", gloss: "to please, be fitting" },
            { surface: "بِالْمَقَامِ", lemma: "مقام", pos: "noun", features: "prep+def.gen", root: "ق و م", gloss: "the occasion, setting" }
          ]
        },
        {
          id: "qr2-44-010",
          ar: "كَرَائِقِ الأَشْعَارْ، وَطَيِّبِ الأَخْبَارْ.",
          en: "like fine poetry, and good report.",
          tokens: [
            { surface: "كَرَائِقِ", lemma: "رائق", pos: "adj", features: "prep+gen.constr", root: "ر و ق", gloss: "like the pleasant (of)" },
            { surface: "الأَشْعَارْ", lemma: "شعر", pos: "noun", features: "pl.def.gen", root: "ش ع ر", gloss: "poems" },
            { surface: "وَطَيِّبِ", lemma: "طيب", pos: "adj", features: "conj+gen.constr", root: "ط ي ب", gloss: "and the good (of)" },
            { surface: "الأَخْبَارْ", lemma: "خبر", pos: "noun", features: "pl.def.gen", root: "خ ب ر", gloss: "reports, anecdotes" }
          ]
        },
        {
          id: "qr2-44-011",
          ar: "وَاتْرُكْ كَلاَمَ السَّفَلَةْ، وَالنُّكْتَ الْمُبْتَذَلَةْ.",
          en: "And leave off the speech of lowly people, and cheap jokes.",
          tokens: [
            { surface: "وَاتْرُكْ", lemma: "ترك", pos: "verb", features: "conj+imp.2ms", root: "ت ر ك", gloss: "to leave, abandon" },
            { surface: "كَلاَمَ", lemma: "كلام", pos: "noun", features: "acc.constr", root: "ك ل م", gloss: "the speech (of)" },
            { surface: "السَّفَلَةْ", lemma: "سفلة", pos: "noun", features: "def.gen", root: "س ف ل", gloss: "lowly people" },
            { surface: "وَالنُّكْتَ", lemma: "نكتة", pos: "noun", features: "conj+pl.def.acc", root: "ن ك ت", gloss: "and the witty remarks" },
            { surface: "الْمُبْتَذَلَةْ", lemma: "مبتذل", pos: "adj", features: "def.acc.f", root: "ب ذ ل", gloss: "vulgar, cheapened" }
          ]
        },
        {
          id: "qr2-44-012",
          ar: "وَلاَ تَكُنْ مِلْحَاحَا، وَاجْتَنِبِ الْمِزَاحَا.",
          en: "And do not be a pest, and avoid [excessive] joking.",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and do not" },
            { surface: "تَكُنْ", lemma: "كان", pos: "verb", features: "juss.2ms", root: "ك و ن", gloss: "to be" },
            { surface: "مِلْحَاحَا", lemma: "ملحاح", pos: "adj", features: "indef.acc", root: "ل ح ح", gloss: "insistent, pestering" },
            { surface: "وَاجْتَنِبِ", lemma: "اجتنب", pos: "verb", features: "conj+imp.2ms", root: "ج ن ب", gloss: "to avoid" },
            { surface: "الْمِزَاحَا", lemma: "مزاح", pos: "noun", features: "def.acc", root: "م ز ح", gloss: "joking, jesting" }
          ]
        },
        {
          id: "qr2-44-013",
          ar: "فَكَثْرَةُ الْمُجُوْنِ، نَوْعٌ مِنَ الْجُنُوْنِ.",
          en: "For too much frivolity is a kind of madness.",
          tokens: [
            { surface: "فَكَثْرَةُ", lemma: "كثرة", pos: "noun", features: "conj+nom.constr", root: "ك ث ر", gloss: "for excess (of)" },
            { surface: "الْمُجُوْنِ", lemma: "مجون", pos: "noun", features: "def.gen", root: "م ج ن", gloss: "levity, ribaldry" },
            { surface: "نَوْعٌ", lemma: "نوع", pos: "noun", features: "indef.nom", root: "ن و ع", gloss: "a kind, type" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْجُنُوْنِ", lemma: "جنون", pos: "noun", features: "def.gen", root: "ج ن ن", gloss: "madness" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا يَكُوْنُ الْعِزُّ بِحَسَبِ الْقَصِيْدَةِ؟",
          options: ["بِالأَمَانَةِ", "بِكَثْرَةِ الْمَالِ", "بِشَرَفِ النَّسَبِ"],
          answer: 0,
          qEn: "According to the poem, what is honor found in?",
          optionsEn: ["Trustworthiness", "Abundant wealth", "Noble lineage"]
        },
        {
          q: "مَاذَا تُسَبِّبُ كَثْرَةُ الْمُعَاتَبَةِ؟",
          options: ["تَدْعُوْ إِلَى الْمُجَانَبَةِ (الْبُعْدِ عَنِ الأَصْحَابِ)", "تُقَرِّبُ الأَصْحَابَ أَكْثَرَ", "لَا تُؤَثِّرُ فِي الصَّدَاقَةِ"],
          answer: 0,
          qEn: "What does excessive reproach lead to?",
          optionsEn: ["It leads to estrangement (distance from friends)", "It brings friends closer together", "It has no effect on friendship"]
        },
        {
          q: "مَاذَا يَنْبَغِيْ أَنْ يَقُوْلَ الإِنْسَانُ مِنَ الْكَلاَمِ؟",
          options: ["مَا رَاقَ بِالْمَقَامِ، كَرَائِقِ الأَشْعَارِ وَطَيِّبِ الأَخْبَارِ", "كُلَّ مَا يَخْطُرُ بِبَالِهِ", "كَلاَمَ السَّفَلَةِ فَقَط"],
          answer: 0,
          qEn: "What kind of speech should a person say?",
          optionsEn: ["Only what suits the occasion, like fine poetry and good reports", "Whatever comes to mind", "Only the speech of lowly people"]
        }
      ]
    }
  ]
};

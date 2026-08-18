// القراءة الراشدة, volume two, chapter 48 (printed heading "٤٨") --
// غُرُوْرُ الدُّنْيَا -- "The World's Delusion" (a poem by أَبُو الْعَتَاهِيَة,
// Abu al-'Atahiya).
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 164-165.
//
// THIS CHAPTER IS VERSE (nazm), same structural departure as
// qiraah-v1/chapter-03.js (النملة), chapter-05.js (الطائر), and this
// book's own chapter-44.js (أدب المعاشرة) -- reusing their already-agreed
// adaptations:
//   - Each bayt (both hemistichs, printed side by side in two columns --
//     right column = صدر/first hemistich, left column = عجز/second
//     hemistich) is one `sentences[]` entry. The mid-bayt pause is
//     rendered as `،` and the bayt-end as `.` in `ar`, matching
//     chapter-44.js's convention exactly (applied uniformly here even to
//     bayts whose two hemistichs form one continuous clause with no
//     natural pause, e.g. qr2-48-003, qr2-48-009 -- print itself marks
//     the division only by column layout, so the comma is an editorial
//     convention, not a transcription of ink on the page).
//   - `register` is "gnomic_verse" -- a new value (neither chapter-44's
//     "imperative_verse", direct 2nd-person commands, nor qiraah-v1's
//     "first_person_verse"). This poem is a maxim/wisdom poem: mostly
//     3rd-person aphoristic statements about "the world" (bayts 2,
//     5-12), with one 2nd-person-plural aside ("دُنْيَاكُمْ", qr2-48-003)
//     and an unattributed "تَقُوْلُ" opening (qr2-48-001, glossed
//     impersonally "it is said" -- no explicit fem. antecedent is named
//     before "الدُّنْيَا" itself appears in bayt 3, so the subject of
//     تقول is left deliberately unresolved rather than invented).
//   - Two exclamative "مَا أَفْعَلَ" (tajub) constructions in qr2-48-002
//     ("مَا أَعَزَّ...", "مَا أَذَلَّ...") are tagged pos: "verb",
//     features "perf.3ms", with the exclamative sense folded into the
//     gloss ("how honored/dear (is)!", "how debased/lowly (is)!") since
//     "part"/"adv" would misrepresent their verbal morphology.
//   - Vowelling is a mix of pausal-bare (hemistich-final words mostly
//     drop tanwin/case in this printing -- e.g. غَدَّارَةْ, غَرَّارَةْ,
//     ذَلِيْلُ, قَلِيْلُ show bare damma or no ending mark at all) and
//     fully-cased (e.g. حَبِيْبٌ، قَرِيْبٌ، مَلُوْلَةٌ، خَوَّانَةٌ،
//     أَمَانَةٌ، حَرْبٌ keep visible tanwin) -- transcribed exactly as
//     printed word-by-word (re-verified via targeted crops, since this
//     bayt-by-bayt mix doesn't follow a single uniform rule the way
//     chapter-03/05's fully-pausal vs. fully-voweled styles did).
//     `features` records the underlying grammatical case throughout
//     regardless of what's visible on `surface`, per established
//     precedent. qr2-48-007's "الأَحْبَابَا"/"الأَتْرَابَا" carry the same
//     poetic إطلاق (connecting alif after an accusative rawi) chapter-44
//     already documented; `features` still records plain `.acc`.
//   - `workshop` is omitted, for the same reason given in chapter-03.js/
//     chapter-05.js/chapter-44.js: substituting a wrong conjugation for
//     cloze/shift risks breaking metre/rhyme rather than testing grammar
//     in a short rhymed poem.
//
// Footnote-marker convention (as in ch45/ch46/ch47): the seven markers
// "(١)".."(٥)" on p.164 and "(١)"-"(٢)" on p.165 are book furniture --
// excluded from `ar` and not tokenized; each footnoted lemma (مَاجِد،
// غَدَّار، غَرَّار، سَالَمَ، مَلَّ on p.164؛ نَذْل، لَبِيْب on p.165)
// carries the footnote's defining text verbatim in that lemma's
// `book_note`. "خَدَّاع" appears only inside footnote (٣)'s own
// definition text ("غَرَّارَة: خَدَّاعَة") rather than being itself
// footnoted, so it gets no book_note.
//
// The poem is followed in print by "(أبو العتاهية)" (the poet's name)
// and then a "٭ ٭ ٭" divider -- both excluded from `ar`/`tokens`, same
// treatment qiraah-v1/chapter-03.js and chapter-05.js gave their own
// source attributions.
//
// Two homograph flags for future reconciliation:
//   - "لازم" (qr2-48-008, "لاَزَمَهَا") is the SAME spelling already
//     taught in qiraah-v1/chapter-11.js as an adjective, "necessary"
//     (active participle of Form I لَزِمَ). Here it is a Form III verb,
//     "لاَزَمَ" -- "to remain closely attached to, cling to, keep
//     company with" -- same root ل ز م but a distinct dictionary
//     headword/part of speech. Handled via token-level pos/gloss
//     override on the existing lemma key; not re-added to `newWords`.
//   - "نعم" (qr2-48-011, "وَيَنْعَمُ") is a THREE-WAY collision on one
//     spelling-key, all sharing root ن ع م: qiraah-v1/chapter-03.js
//     already uses it for the تعجب/praise verb نِعْمَ ("how excellent
//     is...!"), and this book's own chapter-41.js already uses it for
//     the discourse particle نَعَمْ ("yes"). This chapter adds a third,
//     genuinely distinct sense -- the plain Form I verb نَعِمَ/يَنْعَمُ
//     ("to live in comfort, enjoy ease/prosperity") -- again via
//     token-level override, not a new `newWords` entry.
//   - Separately (not a homograph, since the spellings differ once the
//     Form II verb's shadda is written into the lemma key): "فَرَّق"
//     (qr2-48-007, "تُفَرِّقُ", Form II verb "to separate, scatter") is
//     kept as its own new lemma distinct from the already-known noun
//     "فرق" (own chapter-41.js, "difference") -- the same
//     related-but-distinct-dictionary-form treatment chapter-44.js gave
//     "اجتنب" (verb) vs. "اجتناب" (verbal noun, already used inline).
//
// Vocabulary notes: "دُنْيَا" (already qiraah-v1/ch09 and own ch42),
// "حُسْن" (own ch42, noun sense), "طَيِّب" (own ch44), "حَبِيْب" (v1
// ch21 -- reused here for both the noun "a beloved" and the fem.
// predicate-adjective "beloved", a light gloss extension rather than a
// true homograph, same treatment ch45 gave "دعا"), "قَرِيْب" (v1 ch01),
// "أَمَانَة" (own ch41), "تَعِبَ" (v1 ch03 noun sense; own ch46 verb
// sense -- reused here in the same verb sense already established),
// and "أَدِيْب" (own ch43) were all already introduced and are reused
// here rather than re-listed as new words.
export const CHAPTER = {
  id: "ch48",
  title: {
    ar: "غُرُوْرُ الدُّنْيَا",
    en: "The World's Delusion"
  },
  pages: [164, 165],
  register: "gnomic_verse",
  newWords: [
    "قنع", "قنوع", "زاهد", "ماجد", "أعزّ", "أذلّ", "طمع", "غدّار", "خدّاع",
    "غرّار", "زوال", "ملول", "خوّان", "فرّق", "شتّت", "ترب", "حرب", "سالم",
    "ملّ", "عزيز", "ذليل", "وصال", "صدود", "بلاء", "حظي", "جاهل", "نذل",
    "شقي", "لبيب"
  ],
  lemmas: {
    "ماجد": {
      root: "م ج د", pos: "noun", gloss: "the noble, eminent one",
      book_note: "مَاجِد جمع أَمَاجِد: شريف خَيِّرٌ."
    },
    "غدّار": {
      root: "غ د ر", pos: "adj", gloss: "treacherous",
      book_note: "غَدَّارَة: خَائِنَة."
    },
    "غرّار": {
      root: "غ ر ر", pos: "adj", gloss: "delusive, deceptive",
      book_note: "غَرَّارَة: خَدَّاعَة."
    },
    "خدّاع": { root: "خ د ع", pos: "adj", gloss: "deceitful" },
    "سالم": {
      root: "س ل م", pos: "verb", gloss: "to make peace with, reconcile with",
      book_note: "سَالَمَ يُسَالِمُ مُسَالَمَةً: صَالَحَ."
    },
    "ملّ": {
      root: "م ل ل", pos: "verb", gloss: "to grow weary/bored of",
      book_note: "مَلَّ يَمَلُّ مَلَلاً وَمَلاَلاً وَمَلاَلَةً: سَئِمَ وَضَجِرَ."
    },
    "نذل": {
      root: "ن ذ ل", pos: "noun", gloss: "a vile, base person",
      book_note: "نَذْل جمع أَنذَال: خَسِيْس سَاقِط فِي دِيْنٍ أَو حَسَبٍ."
    },
    "لبيب": {
      root: "ل ب ب", pos: "noun", gloss: "the wise, intelligent one",
      book_note: "اللَّبِيْبُ جمع الأَلِبَّاءُ: العاقل الذكي."
    },
    "قنوع": { root: "ق ن ع", pos: "adj", gloss: "contented, abstemious" },
    "قنع": { root: "ق ن ع", pos: "verb", gloss: "to be content, content oneself" },
    "زاهد": { root: "ز ه د", pos: "adj", gloss: "ascetic, one who renounces the world" },
    "أعزّ": { root: "ع ز ز", pos: "verb", gloss: "how honored/dear (is)!, more honored" },
    "أذلّ": { root: "ذ ل ل", pos: "verb", gloss: "how debased/lowly (is)!, more debased" },
    "طمع": { root: "ط م ع", pos: "verb", gloss: "to be greedy, covet" },
    "زوال": { root: "ز و ل", pos: "noun", gloss: "passing away, demise" },
    "ملول": { root: "م ل ل", pos: "adj", gloss: "fickle, quick to grow bored" },
    "خوّان": { root: "خ و ن", pos: "adj", gloss: "treacherous, betraying" },
    "فرّق": { root: "ف ر ق", pos: "verb", gloss: "to separate, part, divide" },
    "شتّت": { root: "ش ت ت", pos: "verb", gloss: "to scatter, disperse" },
    "ترب": { root: "ت ر ب", pos: "noun", gloss: "a companion of the same age, peer" },
    "حرب": { root: "ح ر ب", pos: "noun", gloss: "war" },
    "عزيز": { root: "ع ز ز", pos: "adj", gloss: "mighty, dear, precious" },
    "ذليل": { root: "ذ ل ل", pos: "adj", gloss: "lowly, abject" },
    "وصال": { root: "و ص ل", pos: "noun", gloss: "union, reunion" },
    "صدود": { root: "ص د د", pos: "noun", gloss: "aversion, turning away" },
    "بلاء": { root: "ب ل و", pos: "noun", gloss: "affliction, trial" },
    "حظي": { root: "ح ظ و", pos: "verb", gloss: "to attain good fortune, be favored" },
    "جاهل": { root: "ج ه ل", pos: "noun", gloss: "an ignorant person" },
    "شقي": { root: "ش ق ي", pos: "verb", gloss: "to be wretched, suffer" }
  },
  paragraphs: [
    {
      lines: true,
      en: "A short maxim-poem (by Abu al-'Atahiya) on the world's delusive nature: none is truly noble except the contented ascetic -- how honored is one who is content, and how debased is one who is greedy! Your world is beloved for its beauty and goodness, but it is treacherous, deceitful, delusive. It keeps no true beloved -- its passing is ever near; fickle and treacherous, it has no trustworthiness. It separates loved ones and scatters companions; it wars on whoever makes peace with it, and wearies of whoever clings to it. Its mighty one is in truth lowly, its abundance in truth scant; its union is toil, its aversion affliction. The ignorant attain fortune through it, and the vile find comfort through it -- while the wise suffer through it, and the cultured grow weary.",
      sentences: [
        {
          id: "qr2-48-001",
          ar: "تَقُوْلُ لَيْسَ الْمَاجِدُ، إِلاَّ الْقَنُوْعُ الزَّاهِدُ.",
          en: "It is said: none is truly noble except the contented ascetic,",
          tokens: [
            { surface: "تَقُوْلُ", lemma: "قال", pos: "verb", features: "impf.3fs", root: "ق و ل", gloss: "it says, it is said" },
            { surface: "لَيْسَ", lemma: "ليس", pos: "verb", features: "perf.3ms", root: "ل ي س", gloss: "is not" },
            { surface: "الْمَاجِدُ", lemma: "ماجد", pos: "noun", features: "def.nom", root: "م ج د", gloss: "the noble, eminent one" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except, only" },
            { surface: "الْقَنُوْعُ", lemma: "قنوع", pos: "adj", features: "def.nom", root: "ق ن ع", gloss: "the contented, abstemious one" },
            { surface: "الزَّاهِدُ", lemma: "زاهد", pos: "adj", features: "def.nom", root: "ز ه د", gloss: "the ascetic" }
          ]
        },
        {
          id: "qr2-48-002",
          ar: "فَمَا أَعَزَّ مَنْ قَنِعْ، وَمَا أَذَلَّ مَنْ طَمِعْ.",
          en: "how honored is one who is content, and how debased is one who is greedy!",
          tokens: [
            { surface: "فَمَا", lemma: "ما", pos: "part", features: "conj+part", root: "", gloss: "and how...!" },
            { surface: "أَعَزَّ", lemma: "أعزّ", pos: "verb", features: "perf.3ms", root: "ع ز ز", gloss: "how honored/dear (is)!" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "part", root: "", gloss: "one who, whoever" },
            { surface: "قَنِعْ", lemma: "قنع", pos: "verb", features: "perf.3ms", root: "ق ن ع", gloss: "was content" },
            { surface: "وَمَا", lemma: "ما", pos: "part", features: "conj+part", root: "", gloss: "and how...!" },
            { surface: "أَذَلَّ", lemma: "أذلّ", pos: "verb", features: "perf.3ms", root: "ذ ل ل", gloss: "how debased/lowly (is)!" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "part", root: "", gloss: "one who, whoever" },
            { surface: "طَمِعْ", lemma: "طمع", pos: "verb", features: "perf.3ms", root: "ط م ع", gloss: "was greedy, coveted" }
          ]
        },
        {
          id: "qr2-48-003",
          ar: "دُنْيَاكُمْ حَبِيْبَةْ، بِحُسْنِهَا وَالطَّيِّبَةْ.",
          en: "Your world is beloved, for its beauty and its goodness,",
          tokens: [
            { surface: "دُنْيَاكُمْ", lemma: "دنيا", pos: "noun", features: "nom+2mpl", root: "د ن و", gloss: "your world" },
            { surface: "حَبِيْبَةْ", lemma: "حبيب", pos: "adj", features: "indef.nom.f", root: "ح ب ب", gloss: "beloved, dear" },
            { surface: "بِحُسْنِهَا", lemma: "حسن", pos: "noun", features: "prep+gen+3fs", root: "ح س ن", gloss: "for its beauty" },
            { surface: "وَالطَّيِّبَةْ", lemma: "طيب", pos: "adj", features: "conj+prep+def.gen.f", root: "ط ي ب", gloss: "and the goodness" }
          ]
        },
        {
          id: "qr2-48-004",
          ar: "لٰكِنَّهَا غَدَّارَةْ، خَدَّاعَةٌ غَرَّارَةْ.",
          en: "but it is treacherous, deceitful, delusive.",
          tokens: [
            { surface: "لٰكِنَّهَا", lemma: "لكن", pos: "conj", features: "conj+3fs", root: "", gloss: "but it" },
            { surface: "غَدَّارَةْ", lemma: "غدّار", pos: "adj", features: "indef.nom.f", root: "غ د ر", gloss: "treacherous" },
            { surface: "خَدَّاعَةٌ", lemma: "خدّاع", pos: "adj", features: "indef.nom.f", root: "خ د ع", gloss: "deceitful" },
            { surface: "غَرَّارَةْ", lemma: "غرّار", pos: "adj", features: "indef.nom.f", root: "غ ر ر", gloss: "delusive, deceptive" }
          ]
        },
        {
          id: "qr2-48-005",
          ar: "لَيْسَ لَهَا حَبِيْبٌ، زَوَالُهَا قَرِيْبٌ.",
          en: "It keeps no true beloved -- its passing is ever near.",
          tokens: [
            { surface: "لَيْسَ", lemma: "ليس", pos: "verb", features: "perf.3ms", root: "ل ي س", gloss: "is not, has no" },
            { surface: "لَهَا", lemma: "ل", pos: "prep", features: "prep+3fs", root: "", gloss: "to/for it" },
            { surface: "حَبِيْبٌ", lemma: "حبيب", pos: "noun", features: "indef.nom", root: "ح ب ب", gloss: "a true beloved" },
            { surface: "زَوَالُهَا", lemma: "زوال", pos: "noun", features: "nom+3fs", root: "ز و ل", gloss: "its passing, demise" },
            { surface: "قَرِيْبٌ", lemma: "قريب", pos: "adj", features: "indef.nom", root: "ق ر ب", gloss: "near" }
          ]
        },
        {
          id: "qr2-48-006",
          ar: "مَلُوْلَةٌ خَوَّانَةٌ، لَيْسَ لَهَا أَمَانَةٌ.",
          en: "Fickle and treacherous, it has no trustworthiness.",
          tokens: [
            { surface: "مَلُوْلَةٌ", lemma: "ملول", pos: "adj", features: "indef.nom.f", root: "م ل ل", gloss: "fickle, quick to grow bored" },
            { surface: "خَوَّانَةٌ", lemma: "خوّان", pos: "adj", features: "indef.nom.f", root: "خ و ن", gloss: "treacherous, betraying" },
            { surface: "لَيْسَ", lemma: "ليس", pos: "verb", features: "perf.3ms", root: "ل ي س", gloss: "is not, has no" },
            { surface: "لَهَا", lemma: "ل", pos: "prep", features: "prep+3fs", root: "", gloss: "to/for it" },
            { surface: "أَمَانَةٌ", lemma: "أمانة", pos: "noun", features: "indef.nom", root: "أ م ن", gloss: "trustworthiness" }
          ]
        },
        {
          id: "qr2-48-007",
          ar: "تُفَرِّقُ الأَحْبَابَا، تُشَتِّتُ الأَتْرَابَا.",
          en: "It separates loved ones, it scatters companions.",
          tokens: [
            { surface: "تُفَرِّقُ", lemma: "فرّق", pos: "verb", features: "impf.3fs", root: "ف ر ق", gloss: "to separate, part" },
            { surface: "الأَحْبَابَا", lemma: "حبيب", pos: "noun", features: "pl.def.acc", root: "ح ب ب", gloss: "the loved ones" },
            { surface: "تُشَتِّتُ", lemma: "شتّت", pos: "verb", features: "impf.3fs", root: "ش ت ت", gloss: "to scatter, disperse" },
            { surface: "الأَتْرَابَا", lemma: "ترب", pos: "noun", features: "pl.def.acc", root: "ت ر ب", gloss: "the companions, peers" }
          ]
        },
        {
          id: "qr2-48-008",
          ar: "حَرْبٌ لِمَنْ سَالَمَهَا، تَمَلُّ مَنْ لاَزَمَهَا.",
          en: "It wars on whoever makes peace with it, and wearies of whoever clings to it.",
          tokens: [
            { surface: "حَرْبٌ", lemma: "حرب", pos: "noun", features: "indef.nom", root: "ح ر ب", gloss: "war" },
            { surface: "لِمَنْ", lemma: "من", pos: "rel", features: "prep+part", root: "", gloss: "upon whoever" },
            { surface: "سَالَمَهَا", lemma: "سالم", pos: "verb", features: "perf.3ms+3fs", root: "س ل م", gloss: "made peace with it" },
            { surface: "تَمَلُّ", lemma: "ملّ", pos: "verb", features: "impf.3fs", root: "م ل ل", gloss: "grows weary of" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "part", root: "", gloss: "whoever" },
            { surface: "لاَزَمَهَا", lemma: "لازم", pos: "verb", features: "perf.3ms+3fs", root: "ل ز م", gloss: "remained closely attached to it" }
          ]
        },
        {
          id: "qr2-48-009",
          ar: "عَزِيْزُهَا ذَلِيْلُ، كَثِيْرُهَا قَلِيْلُ.",
          en: "Its mighty one is in truth lowly, its abundance in truth scant.",
          tokens: [
            { surface: "عَزِيْزُهَا", lemma: "عزيز", pos: "adj", features: "nom+3fs", root: "ع ز ز", gloss: "its mighty one" },
            { surface: "ذَلِيْلُ", lemma: "ذليل", pos: "adj", features: "indef.nom", root: "ذ ل ل", gloss: "lowly, abject" },
            { surface: "كَثِيْرُهَا", lemma: "كثير", pos: "adj", features: "nom+3fs", root: "ك ث ر", gloss: "its abundance" },
            { surface: "قَلِيْلُ", lemma: "قليل", pos: "adj", features: "indef.nom", root: "ق ل ل", gloss: "little, scant" }
          ]
        },
        {
          id: "qr2-48-010",
          ar: "وَصَالُهَا عَنَاءُ، صُدُوْدُهَا بَلاَءُ.",
          en: "Its union is toil, its aversion is affliction.",
          tokens: [
            { surface: "وَصَالُهَا", lemma: "وصال", pos: "noun", features: "nom+3fs", root: "و ص ل", gloss: "its union, reunion" },
            { surface: "عَنَاءُ", lemma: "عناء", pos: "noun", features: "indef.nom", root: "ع ن ي", gloss: "toil, hardship" },
            { surface: "صُدُوْدُهَا", lemma: "صدود", pos: "noun", features: "nom+3fs", root: "ص د د", gloss: "its aversion, turning-away" },
            { surface: "بَلاَءُ", lemma: "بلاء", pos: "noun", features: "indef.nom", root: "ب ل و", gloss: "affliction, trial" }
          ]
        },
        {
          id: "qr2-48-011",
          ar: "يَحْظَىٰ بِهَا الْجُهَّالُ، وَيَنْعَمُ الأَنْذَالُ.",
          en: "The ignorant attain fortune through it, and the vile find comfort through it.",
          tokens: [
            { surface: "يَحْظَىٰ", lemma: "حظي", pos: "verb", features: "impf.3ms", root: "ح ظ و", gloss: "to attain good fortune, be favored" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "through it" },
            { surface: "الْجُهَّالُ", lemma: "جاهل", pos: "noun", features: "pl.def.nom", root: "ج ه ل", gloss: "the ignorant" },
            { surface: "وَيَنْعَمُ", lemma: "نعم", pos: "verb", features: "conj+impf.3ms", root: "ن ع م", gloss: "and lives in comfort, enjoys ease" },
            { surface: "الأَنْذَالُ", lemma: "نذل", pos: "noun", features: "pl.def.nom", root: "ن ذ ل", gloss: "the vile, base ones" }
          ]
        },
        {
          id: "qr2-48-012",
          ar: "يَشْقَىٰ بِهَا اللَّبِيْبُ، وَيَتْعَبُ الأَدِيْبُ.",
          en: "while the wise suffer through it, and the cultured grow weary.",
          tokens: [
            { surface: "يَشْقَىٰ", lemma: "شقي", pos: "verb", features: "impf.3ms", root: "ش ق ي", gloss: "to be wretched, suffer" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "through it" },
            { surface: "اللَّبِيْبُ", lemma: "لبيب", pos: "noun", features: "def.nom", root: "ل ب ب", gloss: "the wise, intelligent one" },
            { surface: "وَيَتْعَبُ", lemma: "تعب", pos: "verb", features: "conj+impf.3ms", root: "ت ع ب", gloss: "and grows weary" },
            { surface: "الأَدِيْبُ", lemma: "أديب", pos: "noun", features: "def.nom", root: "أ د ب", gloss: "the cultured one, man of letters" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَ وَصَفَ الشَّاعِرُ الدُّنْيَا فِيْ هَذِهِ الْقَصِيْدَةِ؟",
          options: ["بِأَنَّهَا غَدَّارَةٌ خَدَّاعَةٌ لَا أَمَانَةَ لَهَا", "بِأَنَّهَا صَادِقَةٌ أَمِيْنَةٌ دَائِمًا", "بِأَنَّهَا لَا تُفَرِّقُ بَيْنَ الأَحِبَّةِ"],
          answer: 0,
          qEn: "How does the poet describe the world in this poem?",
          optionsEn: ["That it is treacherous and deceitful, with no trustworthiness in it", "That it is always truthful and faithful", "That it never separates loved ones"]
        },
        {
          q: "مَنِ الَّذِيْ وَصَفَهُ الشَّاعِرُ بِأَنَّهُ الْمَاجِدُ الْحَقِيْقِيُّ؟",
          options: ["الْقَنُوْعُ الزَّاهِدُ", "الْغَنِيُّ صَاحِبُ الْمَالِ الْكَثِيْرِ", "الْمَلِكُ صَاحِبُ السُّلْطَانِ"],
          answer: 0,
          qEn: "Whom does the poet describe as the truly noble one?",
          optionsEn: ["The contented ascetic", "The wealthy one with abundant money", "The king who holds power"]
        },
        {
          q: "مَاذَا يَحْدُثُ لِمَنْ يُلاَزِمُ الدُّنْيَا وَيُسَالِمُهَا بِحَسَبِ الْقَصِيْدَةِ؟",
          options: ["تُحَارِبُهُ وَتَمَلُّ مِنْهُ", "تُكَافِئُهُ بِالسَّلَامِ الدَّائِمِ", "تَتْرُكُهُ فِيْ رَاحَةٍ تَامَّةٍ"],
          answer: 0,
          qEn: "What happens, according to the poem, to one who clings to the world and makes peace with it?",
          optionsEn: ["It wars against him and grows weary of him", "It rewards him with lasting peace", "It leaves him in complete comfort"]
        }
      ]
    }
  ]
};

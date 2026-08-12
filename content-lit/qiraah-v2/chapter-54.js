// القراءة الراشدة, volume two -- chapter 54, "الْجَمَل (٢)" / "The Camel (2)",
// printed pages 181-182. Continues directly from chapter 53 (same title,
// part 2): the camel's fitness for desert travel -- barren, waterless
// deserts that only camel caravans can cross (paragraph A-B, the longest
// stretch, ending in the epithet "ship of the desert"); how the camel
// sometimes saves lost travelers by smelling water from afar (paragraph
// C); its gentle, patient temperament that nonetheless turns vengeful
// under serious provocation (paragraph D); and the visible signs of a
// camel "fasting" at full strength -- refusing food and extending its
// "shiqshiqah" from its throat in anger (paragraph E). Ends with the
// "❋ ❋ ❋" ornament on p.182, confirming the chapter is self-contained to
// pp.181-182 (printed chapter 55, "أَنَا هُنَا فَاعْرِفُوْنِيْ!", begins
// fresh on p.183).
//
// Sentence-segmentation note: paragraph B is one 13-sentence run-on
// spanning the p.181/p.182 page break mid-sentence, exactly like ch53's
// paragraph 1 -- "...وَلاَ تَكِلُّ ،" ends p.181 and "فَتَرَىٰ الْجَمَلَ..."
// opens p.182 continuing the SAME sentence. The title-epithet
// "«سَفِيْنَةَ الصَّحْرَاءِ»" is set off with guillemets in the source;
// they are kept in `ar` (stripped automatically during validation, like
// the em-dashes ch51 established should simply be dropped when they
// break reconstruction -- guillemets don't, so no tokens are needed for
// them and none are added). Split strictly at every "،" and "." (colons
// stay attached to their following clause, e.g. qr2-54-006's
// "فَيَحْمِلُوْنَ زَادَهُمْ: مِنْ مَاءٍ وَطَعَامٍ").
//
// TWO re-footnotes of already-known words (the ch51 برز/رتع, ch53-header
// "قفر" precedent: a `lemmas` entry carrying the NEW book_note is added
// WITHOUT re-listing the word in `newWords`, since it's already taught):
// "قفر" (own ch53's "قِفَار", qr2-54-008 here as "الْقِفَارِ") is
// footnoted on p.181 ("قَـفْر جمع قِفَار: أرض خالية من الماء والعُشب
// والناس."), fulfilling the note ch53's own header comment left for this
// chapter's author. "اشتد" (own ch53's verb "to become strong,
// intense") is footnoted again on p.182 as part of the idiom "اشْتَدَّ
// بَأْسُهُ" (qr2-54-029) -- the footnote text is attached to "اشتد" as
// the idiom's headword.
//
// Several same-spelling homograph/one-lemma-two-pos flags for future
// reconciliation (reuse the lemma key, override pos/root/gloss at the
// token level, do NOT add to `newWords`; none are footnoted here so no
// `lemmas` entries beyond the two re-footnotes above): "بعد"
// (qr2-54-020, "مِنْ بُعْدٍ", "from a distance") is the SAME spelling as
// the already-known preposition "بَعْدَ" ("after," v1 ch01/own ch41) --
// here the unrelated noun "بُعْد" ("distance"). "قوي" (qr2-54-029,
// "قَوِيَ", "it grew strong") reuses the already-known ADJECTIVE "قَوِيّ"
// ("strong," v1 ch09/own ch47) with pos overridden to verb -- a
// one-lemma-two-pos case extended from noun/verb pairs to adj/verb
// pairs. "غضب" (qr2-54-031, "مِنَ الْغَضَبِ", "anger") similarly reuses
// the already-known VERB "غَضِبَ" ("to be angry," v1 ch08/own ch44) with
// pos overridden to noun. Two verbs collide at the bare lemma-key level
// with already-taught particles sharing the identical undiacritized
// skeleton, with no natural distinguishing spelling available (unlike
// ch52's رمي/رمى precedent): "تَئِنُّ" (qr2-54-014, "أَنَّ يَئِنُّ," "to
// groan, moan," root أ ن ن) reuses the lemma key "أن" already taught as
// the particle "that" (v1 ch02/own ch41), since both reduce to the same
// bare skeleton "أن". "تَكِلُّ" (qr2-54-014, "كَلَّ يَكِلُّ," "to grow
// weary," root ك ل ل) likewise reuses the lemma key "كل" already taught
// as "all, every" (v1 ch01/own ch41) for the same reason. Finally,
// "وَإِنَّ" (qr2-54-017) is printed with a shadda -- "إِنَّ" -- yet
// functions here as a CONDITIONAL "if" (confirmed by close inspection of
// the page image against a same-page "وَإِذَا" for comparison, ruling out
// misreading), a recognized but uncommon Classical usage distinct from
// the ordinary emphatic "إِنَّ" ("indeed," already taught); reused via
// the same lemma key "إن" with pos overridden to conj and gloss "if".
//
// Distinct-derived-form new entries (the ch52/53 precedent -- naturally
// different spellings for genuinely different headwords sharing a root
// with an already-taught word): "متجر" (qr2-54-013, "الْمَتَاجِرِ",
// "the merchandise, goods") is new despite "تاجر" ("merchant," v1
// ch04/own ch46) already being known -- a different derived noun, not a
// re-taught form of the same word. "ساكن" (qr2-54-010, "still, quiet")
// is new despite "سكن" ("dwelling, residing," v1 ch03) already being
// known -- the active-participle adjective is a distinct headword from
// the masdar noun. "طبع" (qr2-54-024, "nature, disposition") is new
// despite "طبيعة" ("nature," own ch42) already being known -- a related
// but separately-spelled word.
//
// Plural-reuse notes (already-known singular's lemma key reused for a
// natural plural, per the established convention): "صَحَارَىٰ"
// (qr2-54-001, plural of own ch53's "صحراء") and "أَحْيَاناً"
// (qr2-54-019, adverbial plural of own ch50's "حين", "sometimes") both
// reuse their singular's lemma key rather than getting new entries.
//
// Footnote-marker convention (as in ch45-53): marker "(١)" on p.181 and
// "(١)"-"(٥)" on p.182 are book furniture, excluded from `ar` and not
// tokenized; each footnoted lemma carries the footnote's defining text
// in its `book_note`: قفر (re-footnote, see above) on p.181؛ فتك،
// اشتد (re-footnote, see above)، عاف، شقشقة، شقشق on p.182.
//
// Vocabulary notes: "في"، "من"، "الدنيا"، "حيوان"، "أرض"، "رمال"، "لا"،
// "رأى"، "ماء"، "ناس"، "حمل"، "طعام"، "على"، "ظهر"، "جمل"، "سار"، "ذلك"،
// "إبل"، "كأن"، "هي"، "ب"، "صبر"، "جوع"، "عطش"، "معظم" (new)، "طريق"،
// "لأن"، "قد"، "خزن"، "جوف"، "قبل"، "فوق"، "أذى"، "متى"، "بلغ"، "عظيم"،
// "من" (rel)، "آذى"، "ترك"، "إلا"، "إذا"، "نفس"، "أكل"، "وضع"، "قال"،
// "أخرج"، "مسافر"، "أخذ"، "حياة"، "لكن"، "مات"، "خطر"، "استقى"، "صاحب"،
// "قال" were all already introduced and are reused here rather than
// re-listed as new words.
export const CHAPTER = {
  id: "ch54",
  title: {
    ar: "الْجَمَلُ",
    en: "The Camel"
  },
  pages: [181, 182],
  newWords: [
    "عدة", "قاحل", "جاف", "اضطرار", "مجتمع", "متتابع", "هادئ", "ساكن",
    "معظم", "مؤنة", "رحيل", "متجر", "ثقيل", "لذا", "سفينة", "ضل", "قلق",
    "مخافة", "نفد", "أنقذ", "شم", "نحو", "سهل", "قياد", "لين", "طبع",
    "ثار", "شدة", "انتقم", "ثأر", "فتك", "عاف", "فم", "صائم", "حالة",
    "شقشقة", "حلق", "شقشق"
  ],
  lemmas: {
    "قفر": {
      root: "ق ف ر", pos: "adj", gloss: "barren, waterless",
      book_note: "قَـفْر جمع قِفَار: أرض خالية من الماء والعُشب والناس."
    },
    "اشتد": {
      root: "ش د د", pos: "verb", gloss: "to become strong, intense",
      book_note: "اشْتَدَّ بَأْسُه: كَثُرَتْ شِدَّتُه وقوّتُه."
    },
    "فتك": {
      root: "ف ت ك", pos: "verb", gloss: "to strike down, kill violently",
      book_note: "فَتَكَ يَفْتِكُ فَتْكاً: بِه، قَتَلَهُ."
    },
    "عاف": {
      root: "ع و ف", pos: "verb", gloss: "to refuse, loathe, shun (food)",
      book_note: "عَافَ يَعَافُ عَيْفاً: الجملُ الأكلَ: كَرِهَه فَتَرَكَه."
    },
    "شقشقة": {
      root: "ش ق ش ق", pos: "noun", gloss: "the shiqshiqah (a camel's soft palate/vocal sac)",
      book_note: "شِقْشِقَة جمع شَقَاشِق: شيء كالرئة يُخرجه الجملُ من فيه إذا هَاجَ وَهَدَر."
    },
    "شقشق": {
      root: "ش ق ش ق", pos: "verb", gloss: "to make a gurgling, rattling sound",
      book_note: "شَقْشَقَ يُشَقْشِقُ: الجملُ: هَدَر."
    },
    "عدة": { root: "ع د د", pos: "adj", gloss: "several, a number of" },
    "قاحل": { root: "ق ح ل", pos: "adj", gloss: "barren, arid" },
    "جاف": { root: "ج ف ف", pos: "adj", gloss: "dry" },
    "اضطرار": { root: "ض ر ر", pos: "noun", gloss: "necessity, compulsion" },
    "مجتمع": { root: "ج م ع", pos: "adj", gloss: "gathered, assembled together" },
    "متتابع": { root: "ت ب ع", pos: "adj", gloss: "following one another, consecutive" },
    "هادئ": { root: "ه د أ", pos: "adj", gloss: "calm" },
    "ساكن": { root: "س ك ن", pos: "adj", gloss: "still, quiet, motionless" },
    "معظم": { root: "ع ظ م", pos: "noun", gloss: "most (of), the greater part" },
    "مؤنة": { root: "م ء ن", pos: "noun", gloss: "provisions, supplies" },
    "رحيل": { root: "ر ح ل", pos: "noun", gloss: "departure, setting out" },
    "متجر": { root: "ت ج ر", pos: "noun", gloss: "goods, merchandise, wares" },
    "ثقيل": { root: "ث ق ل", pos: "adj", gloss: "heavy" },
    "لذا": { root: "", pos: "adv", gloss: "therefore, that is why" },
    "سفينة": { root: "س ف ن", pos: "noun", gloss: "a ship, vessel" },
    "ضل": { root: "ض ل ل", pos: "verb", gloss: "to lose the way, go astray" },
    "قلق": { root: "ق ل ق", pos: "noun", gloss: "worry, anxiety" },
    "مخافة": { root: "خ و ف", pos: "noun", gloss: "fear, dread" },
    "نفد": { root: "ن ف د", pos: "verb", gloss: "to run out, be used up" },
    "أنقذ": { root: "ن ق ذ", pos: "verb", gloss: "to save, rescue" },
    "شم": { root: "ش م م", pos: "verb", gloss: "to smell" },
    "نحو": { root: "ن ح و", pos: "prep", gloss: "toward, in the direction of" },
    "سهل": { root: "س ه ل", pos: "adj", gloss: "easy" },
    "قياد": { root: "ق و د", pos: "noun", gloss: "leading, guidance" },
    "لين": { root: "ل ي ن", pos: "adj", gloss: "soft, gentle, pliant" },
    "طبع": { root: "ط ب ع", pos: "noun", gloss: "nature, disposition, temperament" },
    "ثار": { root: "ث و ر", pos: "verb", gloss: "to rage, erupt, revolt" },
    "شدة": { root: "ش د د", pos: "noun", gloss: "intensity, severity" },
    "انتقم": { root: "ن ق م", pos: "verb", gloss: "to take revenge" },
    "ثأر": { root: "ث أ ر", pos: "verb", gloss: "to avenge oneself, retaliate" },
    "فم": { root: "ف و ه", pos: "noun", gloss: "a mouth" },
    "صائم": { root: "ص و م", pos: "adj", gloss: "fasting" },
    "حالة": { root: "ح و ل", pos: "noun", gloss: "a state, condition" },
    "حلق": { root: "ح ل ق", pos: "noun", gloss: "a throat" }
  },
  paragraphs: [
    {
      en: "In several parts of the world there are barren deserts with no animal or plant in them, whose ground is dry sand.",
      sentences: [
        {
          id: "qr2-54-001",
          ar: "فِيْ عِدَّةِ جِهَاتٍ مِنَ الدُّنْيَا صَحَارَىٰ قَاحِلَةٌ لاَ حَيَوَانَ فِيْهَا ،",
          en: "In several parts of the world there are barren deserts with no animal in them,",
          tokens: [
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "عِدَّةِ", lemma: "عدة", pos: "adj", features: "gen.constr", root: "ع د د", gloss: "several (of)" },
            { surface: "جِهَاتٍ", lemma: "جهة", pos: "noun", features: "indef.pl.gen", root: "و ج ه", gloss: "directions, parts" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الدُّنْيَا", lemma: "دنيا", pos: "noun", features: "def.gen", root: "د ن و", gloss: "the world" },
            { surface: "صَحَارَىٰ", lemma: "صحراء", pos: "noun", features: "indef.pl.nom", root: "ص ح ر", gloss: "deserts" },
            { surface: "قَاحِلَةٌ", lemma: "قاحل", pos: "adj", features: "indef.nom.f", root: "ق ح ل", gloss: "barren" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "no" },
            { surface: "حَيَوَانَ", lemma: "حيوان", pos: "noun", features: "acc", root: "ح ي و ن", gloss: "animal" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in them" }
          ]
        },
        {
          id: "qr2-54-002",
          ar: "وَلاَ نَبَاتَ ،",
          en: "and no plant,",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and no" },
            { surface: "نَبَاتَ", lemma: "نبات", pos: "noun", features: "acc", root: "ن ب ت", gloss: "plant" }
          ]
        },
        {
          id: "qr2-54-003",
          ar: "أَرْضُهَا رِمَالٌ جَافَّةٌ.",
          en: "their ground is dry sand.",
          tokens: [
            { surface: "أَرْضُهَا", lemma: "أرض", pos: "noun", features: "nom+3fs", root: "أ ر ض", gloss: "their ground" },
            { surface: "رِمَالٌ", lemma: "رمل", pos: "noun", features: "indef.nom", root: "ر م ل", gloss: "sand" },
            { surface: "جَافَّةٌ", lemma: "جاف", pos: "adj", features: "indef.nom.f", root: "ج ف ف", gloss: "dry" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ تُوْصَفُ أَرْضُ الصَّحَارَىٰ الْقَاحِلَةِ؟",
          options: ["رِمَالٌ جَافَّةٌ لاَ حَيَوَانَ فِيْهَا وَلاَ نَبَاتَ", "أَرْضٌ خَضْرَاءُ مَلِيْئَةٌ بِالأَشْجَارِ", "جِبَالٌ عَالِيَةٌ مُغَطَّاةٌ بِالثَّلْجِ"],
          answer: 0,
          qEn: "How is the ground of the barren deserts described?",
          optionsEn: ["Dry sand with no animal or plant in it", "Green land full of trees", "High mountains covered in snow"]
        }
      ]
    },
    {
      en: "You see no water there, yet people cross it out of necessity, carrying their provisions on the camels' backs and traveling those wastes together, their camels following one another like a train, moving calmly and quietly, enduring hunger and thirst for most of the way, because they had stored their provisions before setting out and carry heavy loads of merchandise besides -- never groaning or growing weary -- so that the camel looks like a vessel cleaving through vast sands, which is why it is called 'the ship of the desert'.",
      sentences: [
        {
          id: "qr2-54-004",
          ar: "لاَ تَرَىٰ فِيْهَا قَطْرَةَ مَاءٍ ،",
          en: "You do not see in them a drop of water,",
          tokens: [
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تَرَىٰ", lemma: "رأى", pos: "verb", features: "impf.2ms", root: "ر أ ي", gloss: "you see" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in them" },
            { surface: "قَطْرَةَ", lemma: "قطرة", pos: "noun", features: "acc.constr", root: "ق ط ر", gloss: "a drop (of)" },
            { surface: "مَاءٍ", lemma: "ماء", pos: "noun", features: "indef.gen", root: "م و ه", gloss: "water" }
          ]
        },
        {
          id: "qr2-54-005",
          ar: "يَسْلُكُهَا النَّاسُ اضْطِرَاراً ،",
          en: "people traverse them out of necessity,",
          tokens: [
            { surface: "يَسْلُكُهَا", lemma: "سلك", pos: "verb", features: "impf.3ms+3fs", root: "س ل ك", gloss: "traverses them" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "اضْطِرَاراً", lemma: "اضطرار", pos: "noun", features: "indef.acc", root: "ض ر ر", gloss: "out of necessity" }
          ]
        },
        {
          id: "qr2-54-006",
          ar: "فَيَحْمِلُوْنَ زَادَهُمْ: مِنْ مَاءٍ وَطَعَامٍ ،",
          en: "so they carry their provisions: water and food,",
          tokens: [
            { surface: "فَيَحْمِلُوْنَ", lemma: "حمل", pos: "verb", features: "conj+impf.3mpl", root: "ح م ل", gloss: "so they carry" },
            { surface: "زَادَهُمْ", lemma: "زاد", pos: "noun", features: "acc+3mpl", root: "ز و د", gloss: "their provisions" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "مَاءٍ", lemma: "ماء", pos: "noun", features: "indef.gen", root: "م و ه", gloss: "water" },
            { surface: "وَطَعَامٍ", lemma: "طعام", pos: "noun", features: "conj+indef.gen", root: "ط ع م", gloss: "and food" }
          ]
        },
        {
          id: "qr2-54-007",
          ar: "عَلَىٰ ظُهُوْرِ الْجِمَالِ ،",
          en: "on the backs of the camels,",
          tokens: [
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "ظُهُوْرِ", lemma: "ظهر", pos: "noun", features: "pl.gen.constr", root: "ظ ه ر", gloss: "the backs (of)" },
            { surface: "الْجِمَالِ", lemma: "جمل", pos: "noun", features: "def.pl.gen", root: "ج م ل", gloss: "the camels" }
          ]
        },
        {
          id: "qr2-54-008",
          ar: "وَيَسِيْرُوْنَ فِيْ تِلْكَ الْقِفَارِ مُجْتَمِعِيْنَ ،",
          en: "and they travel through those barren wastes together,",
          tokens: [
            { surface: "وَيَسِيْرُوْنَ", lemma: "سار", pos: "verb", features: "conj+impf.3mpl", root: "س ي ر", gloss: "and they travel" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "through" },
            { surface: "تِلْكَ", lemma: "ذلك", pos: "dem", features: "dem.fs", root: "", gloss: "those" },
            { surface: "الْقِفَارِ", lemma: "قفر", pos: "noun", features: "def.pl.gen", root: "ق ف ر", gloss: "the barren wastes" },
            { surface: "مُجْتَمِعِيْنَ", lemma: "مجتمع", pos: "adj", features: "indef.pl.acc", root: "ج م ع", gloss: "gathered, together" }
          ]
        },
        {
          id: "qr2-54-009",
          ar: "وَإِبِلُهُمْ مُتَتَابِعَةٌ كَالْقِطَارِ ،",
          en: "their camels following one another like a train,",
          tokens: [
            { surface: "وَإِبِلُهُمْ", lemma: "إبل", pos: "noun", features: "conj+nom+3mpl", root: "أ ب ل", gloss: "and their camels" },
            { surface: "مُتَتَابِعَةٌ", lemma: "متتابع", pos: "adj", features: "indef.nom.f", root: "ت ب ع", gloss: "following one another" },
            { surface: "كَالْقِطَارِ", lemma: "قطار", pos: "noun", features: "prep+def.gen", root: "ق ط ر", gloss: "like the train" }
          ]
        },
        {
          id: "qr2-54-010",
          ar: "وَهِيَ تَسِيْرُ بِهِمْ هَادِئَةً سَاكِنَةً ،",
          en: "moving with them calmly and quietly,",
          tokens: [
            { surface: "وَهِيَ", lemma: "هي", pos: "dem", features: "conj+3fs", root: "", gloss: "and it" },
            { surface: "تَسِيْرُ", lemma: "سار", pos: "verb", features: "impf.3fs", root: "س ي ر", gloss: "travels" },
            { surface: "بِهِمْ", lemma: "ب", pos: "prep", features: "prep+3mpl", root: "", gloss: "with them" },
            { surface: "هَادِئَةً", lemma: "هادئ", pos: "adj", features: "indef.acc.f", root: "ه د أ", gloss: "calm" },
            { surface: "سَاكِنَةً", lemma: "ساكن", pos: "adj", features: "indef.acc.f", root: "س ك ن", gloss: "quiet, still" }
          ]
        },
        {
          id: "qr2-54-011",
          ar: "تَصْبِرُ عَلَىٰ الْجُوْعِ وَالْعَطَشِ مُعْظَمَ الطَّرِيْقِ ،",
          en: "enduring hunger and thirst for most of the way,",
          tokens: [
            { surface: "تَصْبِرُ", lemma: "صبر", pos: "verb", features: "impf.3fs", root: "ص ب ر", gloss: "endures" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "against" },
            { surface: "الْجُوْعِ", lemma: "جوع", pos: "noun", features: "def.gen", root: "ج و ع", gloss: "the hunger" },
            { surface: "وَالْعَطَشِ", lemma: "عطش", pos: "noun", features: "conj+def.gen", root: "ع ط ش", gloss: "and the thirst" },
            { surface: "مُعْظَمَ", lemma: "معظم", pos: "noun", features: "acc.constr", root: "ع ظ م", gloss: "most (of)" },
            { surface: "الطَّرِيْقِ", lemma: "طريق", pos: "noun", features: "def.gen", root: "ط ر ق", gloss: "the way" }
          ]
        },
        {
          id: "qr2-54-012",
          ar: "لأَنَّهَا قَدْ خَزَنَتْ مُؤَنَتَهَا فِيْ جَوْفِهَا قَبْلَ الرَّحِيْلِ ،",
          en: "because they had stored their provisions in their bellies before setting out,",
          tokens: [
            { surface: "لأَنَّهَا", lemma: "لأن", pos: "part", features: "part+3fs", root: "", gloss: "because they" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed, already" },
            { surface: "خَزَنَتْ", lemma: "خزن", pos: "verb", features: "perf.3fs", root: "خ ز ن", gloss: "stored" },
            { surface: "مُؤَنَتَهَا", lemma: "مؤنة", pos: "noun", features: "acc+3fs", root: "م ء ن", gloss: "their provisions" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "جَوْفِهَا", lemma: "جوف", pos: "noun", features: "gen+3fs", root: "ج و ف", gloss: "their bellies" },
            { surface: "قَبْلَ", lemma: "قبل", pos: "prep", features: "prep", root: "ق ب ل", gloss: "before" },
            { surface: "الرَّحِيْلِ", lemma: "رحيل", pos: "noun", features: "def.gen", root: "ر ح ل", gloss: "the departure" }
          ]
        },
        {
          id: "qr2-54-013",
          ar: "وَتَحْمِلُ فَوْقَ ذٰلِكَ مِنَ الْمَتَاجِرِ أَحْمَالاً ثِقَالاً ،",
          en: "and carry, besides that, heavy loads of merchandise,",
          tokens: [
            { surface: "وَتَحْمِلُ", lemma: "حمل", pos: "verb", features: "conj+impf.3fs", root: "ح م ل", gloss: "and carries" },
            { surface: "فَوْقَ", lemma: "فوق", pos: "adv", features: "acc", root: "ف و ق", gloss: "besides" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْمَتَاجِرِ", lemma: "متجر", pos: "noun", features: "def.pl.gen", root: "ت ج ر", gloss: "the merchandise" },
            { surface: "أَحْمَالاً", lemma: "حمل", pos: "noun", features: "indef.pl.acc", root: "ح م ل", gloss: "loads" },
            { surface: "ثِقَالاً", lemma: "ثقيل", pos: "adj", features: "indef.pl.acc", root: "ث ق ل", gloss: "heavy" }
          ]
        },
        {
          id: "qr2-54-014",
          ar: "لاَ تَئِنُّ مِنْهَا وَلاَ تَكِلُّ ،",
          en: "not groaning under them nor growing weary,",
          tokens: [
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "تَئِنُّ", lemma: "أن", pos: "verb", features: "impf.3fs", root: "أ ن ن", gloss: "moans, groans" },
            { surface: "مِنْهَا", lemma: "من", pos: "prep", features: "prep+3fs", root: "", gloss: "under them" },
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "تَكِلُّ", lemma: "كل", pos: "verb", features: "impf.3fs", root: "ك ل ل", gloss: "grows weary" }
          ]
        },
        {
          id: "qr2-54-015",
          ar: "فَتَرَىٰ الْجَمَلَ كَأَنَّهُ مَرْكَبٌ يَشُقُّ تِلْكَ الرِّمَالَ الْوَاسِعَةَ ،",
          en: "so you see the camel as if it were a vessel cleaving through those vast sands,",
          tokens: [
            { surface: "فَتَرَىٰ", lemma: "رأى", pos: "verb", features: "conj+impf.2ms", root: "ر أ ي", gloss: "so you see" },
            { surface: "الْجَمَلَ", lemma: "جمل", pos: "noun", features: "def.acc", root: "ج م ل", gloss: "the camel" },
            { surface: "كَأَنَّهُ", lemma: "كأن", pos: "part", features: "part+3ms", root: "", gloss: "as if it (were)" },
            { surface: "مَرْكَبٌ", lemma: "مركب", pos: "noun", features: "indef.nom", root: "ر ك ب", gloss: "a vessel" },
            { surface: "يَشُقُّ", lemma: "شق", pos: "verb", features: "impf.3ms", root: "ش ق ق", gloss: "cleaves" },
            { surface: "تِلْكَ", lemma: "ذلك", pos: "dem", features: "dem.fs", root: "", gloss: "those" },
            { surface: "الرِّمَالَ", lemma: "رمل", pos: "noun", features: "def.pl.acc", root: "ر م ل", gloss: "the sands" },
            { surface: "الْوَاسِعَةَ", lemma: "واسع", pos: "adj", features: "def.acc.f", root: "و س ع", gloss: "vast" }
          ]
        },
        {
          id: "qr2-54-016",
          ar: "وَلِذَا سُمِّيَ «سَفِيْنَةَ الصَّحْرَاءِ».",
          en: "and that is why it is called 'the ship of the desert'.",
          tokens: [
            { surface: "وَلِذَا", lemma: "لذا", pos: "adv", features: "conj+adv", root: "", gloss: "and therefore" },
            { surface: "سُمِّيَ", lemma: "سمى", pos: "verb", features: "pass.perf.3ms", root: "س م و", gloss: "it was called" },
            { surface: "سَفِيْنَةَ", lemma: "سفينة", pos: "noun", features: "acc.constr", root: "س ف ن", gloss: "the ship (of)" },
            { surface: "الصَّحْرَاءِ", lemma: "صحراء", pos: "noun", features: "def.gen", root: "ص ح ر", gloss: "the desert" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا يَحْمِلُ الْمُسَافِرُوْنَ زَادَهُمْ عَلَىٰ ظُهُوْرِ الْجِمَالِ؟",
          options: ["لأَنَّهُمْ يَسْلُكُوْنَ الصَّحْرَاءَ الَّتِيْ لاَ مَاءَ فِيْهَا اضْطِرَاراً", "لأَنَّ الْجِمَالَ أَسْرَعُ مِنَ السَّيَّارَاتِ", "لأَنَّهُمْ يُحِبُّوْنَ رُكُوْبَ الْجِمَالِ فَقَط"],
          answer: 0,
          qEn: "Why do travelers carry their provisions on the backs of camels?",
          optionsEn: ["Because they must cross the waterless desert out of necessity", "Because camels are faster than cars", "Because they simply enjoy riding camels"]
        },
        {
          q: "لِمَاذَا سُمِّيَ الْجَمَلُ «سَفِيْنَةَ الصَّحْرَاءِ»؟",
          options: ["لأَنَّهُ يَشُقُّ الرِّمَالَ الْوَاسِعَةَ حَامِلاً أَثْقَالاً وَلاَ يَتْعَبُ", "لأَنَّهُ يَسْبَحُ فِي الْمَاءِ", "لأَنَّهُ يُصْنَعُ مِنَ الْخَشَبِ"],
          answer: 0,
          qEn: "Why is the camel called 'the ship of the desert'?",
          optionsEn: ["Because it cleaves through the vast sands carrying heavy loads without tiring", "Because it swims in water", "Because it is made of wood"]
        }
      ]
    },
    {
      en: "If travelers lose their way in the desert, they grow anxious for their lives, fearing their provisions will run out and they will die of hunger and thirst -- but the camel sometimes saves them from such dangers, because it can smell water from afar and heads toward it with strange speed, so its owner can draw water.",
      sentences: [
        {
          id: "qr2-54-017",
          ar: "وَإِنَّ ضَلَّ الْمُسَافِرُوْنَ الطَّرِيْقَ فِي الصَّحْرَاءِ يَأْخُذُهُمُ الْقَلَقُ عَلَىٰ حَيَاتِهِمْ ،",
          en: "And if the travelers lose their way in the desert, worry seizes them for their lives,",
          tokens: [
            { surface: "وَإِنَّ", lemma: "إن", pos: "conj", features: "conj+conj", root: "", gloss: "and if" },
            { surface: "ضَلَّ", lemma: "ضل", pos: "verb", features: "perf.3ms", root: "ض ل ل", gloss: "lost the way" },
            { surface: "الْمُسَافِرُوْنَ", lemma: "مسافر", pos: "noun", features: "def.pl.nom", root: "س ف ر", gloss: "the travelers" },
            { surface: "الطَّرِيْقَ", lemma: "طريق", pos: "noun", features: "acc", root: "ط ر ق", gloss: "the way" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الصَّحْرَاءِ", lemma: "صحراء", pos: "noun", features: "def.gen", root: "ص ح ر", gloss: "the desert" },
            { surface: "يَأْخُذُهُمُ", lemma: "أخذ", pos: "verb", features: "impf.3ms+3mpl", root: "أ خ ذ", gloss: "seizes them" },
            { surface: "الْقَلَقُ", lemma: "قلق", pos: "noun", features: "def.nom", root: "ق ل ق", gloss: "the worry" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "حَيَاتِهِمْ", lemma: "حياة", pos: "noun", features: "gen+3mpl", root: "ح ي ي", gloss: "their lives" }
          ]
        },
        {
          id: "qr2-54-018",
          ar: "مَخَافَةَ أَنْ يَنْفَدَ زَادُهُمْ فَيَمُوْتُوْنَ جُوْعاً وَعَطَشاً ،",
          en: "for fear that their provisions run out and they die of hunger and thirst,",
          tokens: [
            { surface: "مَخَافَةَ", lemma: "مخافة", pos: "noun", features: "acc", root: "خ و ف", gloss: "for fear (of)" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَنْفَدَ", lemma: "نفد", pos: "verb", features: "subj.3ms", root: "ن ف د", gloss: "runs out" },
            { surface: "زَادُهُمْ", lemma: "زاد", pos: "noun", features: "nom+3mpl", root: "ز و د", gloss: "their provisions" },
            { surface: "فَيَمُوْتُوْنَ", lemma: "مات", pos: "verb", features: "conj+impf.3mpl", root: "م و ت", gloss: "and they die" },
            { surface: "جُوْعاً", lemma: "جوع", pos: "noun", features: "indef.acc", root: "ج و ع", gloss: "of hunger" },
            { surface: "وَعَطَشاً", lemma: "عطش", pos: "noun", features: "conj+indef.acc", root: "ع ط ش", gloss: "and thirst" }
          ]
        },
        {
          id: "qr2-54-019",
          ar: "وَلٰكِنَّ الْجَمَلَ يُنْقِذُهُمْ أَحْيَاناً مِنْ تِلْكَ الأَخْطَارِ ،",
          en: "but the camel sometimes saves them from those dangers,",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "part", features: "conj+part", root: "", gloss: "but" },
            { surface: "الْجَمَلَ", lemma: "جمل", pos: "noun", features: "def.acc", root: "ج م ل", gloss: "the camel" },
            { surface: "يُنْقِذُهُمْ", lemma: "أنقذ", pos: "verb", features: "impf.3ms+3mpl", root: "ن ق ذ", gloss: "saves them" },
            { surface: "أَحْيَاناً", lemma: "حين", pos: "noun", features: "indef.pl.acc", root: "ح ي ن", gloss: "sometimes" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "تِلْكَ", lemma: "ذلك", pos: "dem", features: "dem.fs", root: "", gloss: "those" },
            { surface: "الأَخْطَارِ", lemma: "خطر", pos: "noun", features: "def.pl.gen", root: "خ ط ر", gloss: "the dangers" }
          ]
        },
        {
          id: "qr2-54-020",
          ar: "لأَنَّهُ يَشُمُّ الْمَاءَ مِنْ بُعْدٍ ،",
          en: "because it smells water from afar,",
          tokens: [
            { surface: "لأَنَّهُ", lemma: "لأن", pos: "part", features: "part+3ms", root: "", gloss: "because it" },
            { surface: "يَشُمُّ", lemma: "شم", pos: "verb", features: "impf.3ms", root: "ش م م", gloss: "smells" },
            { surface: "الْمَاءَ", lemma: "ماء", pos: "noun", features: "def.acc", root: "م و ه", gloss: "the water" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "بُعْدٍ", lemma: "بعد", pos: "noun", features: "indef.gen", root: "ب ع د", gloss: "a distance" }
          ]
        },
        {
          id: "qr2-54-021",
          ar: "فَيَسِيْرُ نَحْوَهُ بِسُرْعَةٍ غَرِيْبَةٍ ،",
          en: "and heads toward it with strange speed,",
          tokens: [
            { surface: "فَيَسِيْرُ", lemma: "سار", pos: "verb", features: "conj+impf.3ms", root: "س ي ر", gloss: "and heads" },
            { surface: "نَحْوَهُ", lemma: "نحو", pos: "prep", features: "prep+3ms", root: "ن ح و", gloss: "toward it" },
            { surface: "بِسُرْعَةٍ", lemma: "سرعة", pos: "noun", features: "prep+indef.gen", root: "س ر ع", gloss: "with speed" },
            { surface: "غَرِيْبَةٍ", lemma: "غريب", pos: "adj", features: "indef.gen.f", root: "غ ر ب", gloss: "strange" }
          ]
        },
        {
          id: "qr2-54-022",
          ar: "لِيَسْتَقِيَ صَاحِبُهُ.",
          en: "so that its owner may draw water.",
          tokens: [
            { surface: "لِيَسْتَقِيَ", lemma: "استقى", pos: "verb", features: "prep+subj.3ms", root: "س ق ي", gloss: "so that he may draw water" },
            { surface: "صَاحِبُهُ", lemma: "صاحب", pos: "noun", features: "nom+3ms", root: "ص ح ب", gloss: "its owner" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ يُنْقِذُ الْجَمَلُ الْمُسَافِرِيْنَ الَّذِيْنَ ضَلُّوا الطَّرِيْقَ؟",
          options: ["يَشُمُّ الْمَاءَ مِنْ بُعْدٍ وَيَسِيْرُ نَحْوَهُ بِسُرْعَةٍ", "يَصْرُخُ لِيُنَبِّهَ النَّاسَ", "يَحْفِرُ بِئْراً فِي الرَّمْلِ"],
          answer: 0,
          qEn: "How does the camel save travelers who have lost their way?",
          optionsEn: ["It smells water from afar and heads toward it swiftly", "It cries out to alert people", "It digs a well in the sand"]
        }
      ]
    },
    {
      en: "The camel is easy to lead and gentle by nature, enduring much harm with patience -- but it rages when the harm becomes severe enough, taking revenge on whoever harmed it and not letting go until it has avenged itself and struck the offender down.",
      sentences: [
        {
          id: "qr2-54-023",
          ar: "وَالْجَمَلُ سَهْلُ الْقِيَادِ ،",
          en: "And the camel is easy to lead,",
          tokens: [
            { surface: "وَالْجَمَلُ", lemma: "جمل", pos: "noun", features: "conj+def.nom", root: "ج م ل", gloss: "and the camel" },
            { surface: "سَهْلُ", lemma: "سهل", pos: "adj", features: "nom.constr", root: "س ه ل", gloss: "easy (of)" },
            { surface: "الْقِيَادِ", lemma: "قياد", pos: "noun", features: "def.gen", root: "ق و د", gloss: "the leading" }
          ]
        },
        {
          id: "qr2-54-024",
          ar: "لَيِّنُ الطِّبَاعِ ،",
          en: "gentle in nature,",
          tokens: [
            { surface: "لَيِّنُ", lemma: "لين", pos: "adj", features: "nom.constr", root: "ل ي ن", gloss: "gentle (of)" },
            { surface: "الطِّبَاعِ", lemma: "طبع", pos: "noun", features: "def.pl.gen", root: "ط ب ع", gloss: "the natures, temperament" }
          ]
        },
        {
          id: "qr2-54-025",
          ar: "يَتَحَمَّلُ كَثِيْراً مِنَ الأَذَىٰ بِالصَّبْرِ ،",
          en: "it endures much harm with patience,",
          tokens: [
            { surface: "يَتَحَمَّلُ", lemma: "تحمل", pos: "verb", features: "impf.3ms", root: "ح م ل", gloss: "endures" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "much" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الأَذَىٰ", lemma: "أذى", pos: "noun", features: "def.gen", root: "أ ذ ي", gloss: "the harm" },
            { surface: "بِالصَّبْرِ", lemma: "صبر", pos: "noun", features: "prep+def.gen", root: "ص ب ر", gloss: "with patience" }
          ]
        },
        {
          id: "qr2-54-026",
          ar: "وَلٰكِنَّهُ يَثُوْرُ مَتَىٰ بَلَغَ الأَذَىٰ شِدَّةً عَظِيْمَةً ،",
          en: "but it rages whenever the harm reaches a great intensity,",
          tokens: [
            { surface: "وَلٰكِنَّهُ", lemma: "لكن", pos: "part", features: "conj+part+3ms", root: "", gloss: "but it" },
            { surface: "يَثُوْرُ", lemma: "ثار", pos: "verb", features: "impf.3ms", root: "ث و ر", gloss: "rages" },
            { surface: "مَتَىٰ", lemma: "متى", pos: "conj", features: "conj", root: "م ت ي", gloss: "whenever" },
            { surface: "بَلَغَ", lemma: "بلغ", pos: "verb", features: "perf.3ms", root: "ب ل غ", gloss: "reaches" },
            { surface: "الأَذَىٰ", lemma: "أذى", pos: "noun", features: "def.nom", root: "أ ذ ي", gloss: "the harm" },
            { surface: "شِدَّةً", lemma: "شدة", pos: "noun", features: "indef.acc", root: "ش د د", gloss: "an intensity" },
            { surface: "عَظِيْمَةً", lemma: "عظيم", pos: "adj", features: "indef.acc.f", root: "ع ظ م", gloss: "great" }
          ]
        },
        {
          id: "qr2-54-027",
          ar: "فَيَنْتَقِمُ مِمَّنْ آذَاهُ ،",
          en: "so it takes revenge on whoever harmed it,",
          tokens: [
            { surface: "فَيَنْتَقِمُ", lemma: "انتقم", pos: "verb", features: "conj+impf.3ms", root: "ن ق م", gloss: "so it takes revenge" },
            { surface: "مِمَّنْ", lemma: "من", pos: "rel", features: "prep+part", root: "", gloss: "on whoever" },
            { surface: "آذَاهُ", lemma: "آذى", pos: "verb", features: "perf.3ms+3ms", root: "أ ذ ي", gloss: "harmed it" }
          ]
        },
        {
          id: "qr2-54-028",
          ar: "وَلاَ يَتْرُكُهُ إِلاَّ إِذَا ثَأَرَ لِنَفْسِهِ وَفَتَكَ بِهِ.",
          en: "and does not leave him alone until it has avenged itself and struck him down.",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَتْرُكُهُ", lemma: "ترك", pos: "verb", features: "impf.3ms+3ms", root: "ت ر ك", gloss: "leaves him" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "when" },
            { surface: "ثَأَرَ", lemma: "ثأر", pos: "verb", features: "perf.3ms", root: "ث أ ر", gloss: "avenges himself" },
            { surface: "لِنَفْسِهِ", lemma: "نفس", pos: "noun", features: "prep+gen+3ms", root: "ن ف س", gloss: "for himself" },
            { surface: "وَفَتَكَ", lemma: "فتك", pos: "verb", features: "conj+perf.3ms", root: "ف ت ك", gloss: "and struck down" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "him" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَفْعَلُ الْجَمَلُ إِذَا بَلَغَ الأَذَىٰ شِدَّةً عَظِيْمَةً؟",
          options: ["يَثُوْرُ وَيَنْتَقِمُ مِمَّنْ آذَاهُ", "يَهْرُبُ بِصَمْتٍ", "يَنَامُ فِي الْحَالِ"],
          answer: 0,
          qEn: "What does the camel do when harm reaches a great intensity?",
          optionsEn: ["It rages and takes revenge on whoever harmed it", "It flees silently", "It falls asleep immediately"]
        }
      ]
    },
    {
      en: "And when the camel is at full strength, it refuses to eat unless food is placed directly in its mouth -- people say it is 'fasting' -- and in this state it brings its shiqshiqah out of its throat and gurgles with anger.",
      sentences: [
        {
          id: "qr2-54-029",
          ar: "وَإِذَا قَوِيَ الْجَمَلُ اشْتَدَّ بَأْسُهُ وَعَافَ الأَكْلَ مَا لَمْ يُوْضَعْ فِيْ فَمِهِ ،",
          en: "And when the camel grows strong, its might intensifies and it refuses to eat what is not placed in its mouth,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and when" },
            { surface: "قَوِيَ", lemma: "قوي", pos: "verb", features: "perf.3ms", root: "ق و ي", gloss: "grows strong" },
            { surface: "الْجَمَلُ", lemma: "جمل", pos: "noun", features: "def.nom", root: "ج م ل", gloss: "the camel" },
            { surface: "اشْتَدَّ", lemma: "اشتد", pos: "verb", features: "perf.3ms", root: "ش د د", gloss: "intensifies" },
            { surface: "بَأْسُهُ", lemma: "بأس", pos: "noun", features: "nom+3ms", root: "ب أ س", gloss: "its might" },
            { surface: "وَعَافَ", lemma: "عاف", pos: "verb", features: "conj+perf.3ms", root: "ع و ف", gloss: "and refuses" },
            { surface: "الأَكْلَ", lemma: "أكل", pos: "noun", features: "def.acc", root: "أ ك ل", gloss: "the food" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُوْضَعْ", lemma: "وضع", pos: "verb", features: "pass.juss.3ms", root: "و ض ع", gloss: "is placed" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "فَمِهِ", lemma: "فم", pos: "noun", features: "gen+3ms", root: "ف و ه", gloss: "its mouth" }
          ]
        },
        {
          id: "qr2-54-030",
          ar: "وَيَقُوْلُ النَّاسُ عَنْهُ: إِنَّهُ صَائِمٌ ،",
          en: "and people say of it: it is fasting,",
          tokens: [
            { surface: "وَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", root: "ق و ل", gloss: "and says" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "عَنْهُ", lemma: "عن", pos: "prep", features: "prep+3ms", root: "", gloss: "of it" },
            { surface: "إِنَّهُ", lemma: "إن", pos: "part", features: "part+3ms", root: "", gloss: "indeed it" },
            { surface: "صَائِمٌ", lemma: "صائم", pos: "adj", features: "indef.nom", root: "ص و م", gloss: "fasting" }
          ]
        },
        {
          id: "qr2-54-031",
          ar: "وَفِيْ هٰذِهِ الْحَالَةِ يُخْرِجُ شِقْشِقَتَهُ مِنْ حَلْقِهِ وَيُشَقْشِقُ مِنَ الْغَضَبِ.",
          en: "and in this state it brings its 'shiqshiqah' out from its throat and gurgles from anger.",
          tokens: [
            { surface: "وَفِيْ", lemma: "في", pos: "prep", features: "conj+prep", root: "", gloss: "and in" },
            { surface: "هٰذِهِ", lemma: "هذا", pos: "dem", features: "dem.fs", root: "", gloss: "this" },
            { surface: "الْحَالَةِ", lemma: "حالة", pos: "noun", features: "def.gen", root: "ح و ل", gloss: "the state" },
            { surface: "يُخْرِجُ", lemma: "أخرج", pos: "verb", features: "impf.3ms", root: "خ ر ج", gloss: "brings out" },
            { surface: "شِقْشِقَتَهُ", lemma: "شقشقة", pos: "noun", features: "acc+3ms", root: "ش ق ش ق", gloss: "its shiqshiqah" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "حَلْقِهِ", lemma: "حلق", pos: "noun", features: "gen+3ms", root: "ح ل ق", gloss: "its throat" },
            { surface: "وَيُشَقْشِقُ", lemma: "شقشق", pos: "verb", features: "conj+impf.3ms", root: "ش ق ش ق", gloss: "and gurgles" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْغَضَبِ", lemma: "غضب", pos: "noun", features: "def.gen", root: "غ ض ب", gloss: "the anger" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَحْدُثُ عِنْدَمَا يَقْوَى الْجَمَلُ وَيَعَافُ الأَكْلَ؟",
          options: ["يُخْرِجُ شِقْشِقَتَهُ مِنْ حَلْقِهِ وَيُشَقْشِقُ مِنَ الْغَضَبِ", "يَنَامُ طَوَالَ الْيَوْمِ", "يَشْرَبُ الْمَاءَ فَقَطْ"],
          answer: 0,
          qEn: "What happens when the camel becomes strong and refuses food?",
          optionsEn: ["Its shiqshiqah comes out of its throat and it gurgles from anger", "It sleeps all day", "It only drinks water"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "",
        post: "الْمُسَافِرُ الطَّرِيْقَ فِي الصَّحْرَاءِ.",
        en: "The traveler lost his way in the desert.",
        options: ["ضَلَّ", "ضَلَلْتُ", "تَضِلُّ", "يَضِلُّوْنَ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he lost the way.",
          "1st person singular perfect -- I lost the way.",
          "2nd masculine or 3rd feminine present -- you/she lose the way.",
          "3rd masculine plural present -- they lose the way."
        ]
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "الْجَمَلُ صَاحِبَهُ مِنَ الْخَطَرِ ،",
        en: "and the camel saved its owner from the danger,",
        options: ["أَنْقَذَ", "أَنْقَذْتُ", "تُنْقِذُ", "نُنْقِذُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he saved.",
          "1st person singular perfect -- I saved.",
          "2nd masculine or 3rd feminine present -- you/she save.",
          "1st person plural present -- we save."
        ]
      },
      {
        type: "cloze",
        pre: "",
        post: "الْجَمَلُ عِنْدَمَا آذَاهُ أَحَدٌ.",
        en: "The camel raged when someone harmed it.",
        options: ["ثَارَ", "ثُرْتُ", "تَثُوْرُ", "يَثُوْرُوْنَ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- it raged.",
          "1st person singular perfect -- I raged.",
          "2nd masculine or 3rd feminine present -- you/she rage.",
          "3rd masculine plural present -- they rage."
        ]
      }
    ],
    shift: [
      {
        type: "shift",
        base: "يَشُمُّ الْمَاءَ",
        pre: "",
        post: "الْمَاءَ",
        targetPerson: "أَنْتِ",
        targetEn: "you (fem.)",
        options: ["تَشُمِّيْنَ", "يَشُمُّ", "أَشُمُّ", "نَشُمُّ"],
        answer: 0,
        rationales: [
          "2nd feminine singular -- you (f.) smell.",
          "3rd masculine singular -- he smells.",
          "1st person singular -- I smell.",
          "1st person plural -- we smell."
        ]
      },
      {
        type: "shift",
        base: "يَتْرُكُ صَاحِبَهُ",
        pre: "",
        post: "صَاحِبَهُ",
        targetPerson: "نَحْنُ",
        targetEn: "we",
        options: ["نَتْرُكُ", "يَتْرُكُ", "تَتْرُكُ", "أَتْرُكُ"],
        answer: 0,
        rationales: [
          "1st person plural -- we leave.",
          "3rd masculine singular -- he leaves.",
          "2nd masculine or 3rd feminine -- you/she leave.",
          "1st person singular -- I leave."
        ]
      }
    ]
  }
};

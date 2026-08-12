// القراءة الراشدة, volume two -- chapter 55, "أَنَا هُنَا فَاعْرِفُوْنِيْ!" /
// "I Am Here, So Know Me!", printed pages 183-186. A riddle-style
// personification essay (with a waterfall/ocean photograph on p.183):
// water itself narrates its own journey through the water cycle in the
// first person, daring the reader to recognize it in each disguise --
// the sea (paragraph 1, no refrain yet, establishing identity), rain
// (paragraph 2, formed from evaporated sea-vapor carried by clouds),
// kettle-steam (paragraph 3), hail (paragraph 4), snow (paragraph 5),
// glacial ice/frost (paragraph 6), a waterfall (paragraph 7), a river --
// naming the Indus/Sindh, Tigris, Euphrates, and Nile (paragraph 8), fog
// (paragraph 9), light rain and dew (paragraph 10), and finally
// manufactured ice used to cool drinks in summer (paragraph 11). Each
// of paragraphs 2-11 ends with the refrain "وَأَنَا هُنَا ، فَاعْرِفُوْنِيْ"
// ("and I am here, so know/recognize me") or a close variant -- the
// same narrator (water) issuing the same challenge after every
// transformation. Ends with the "❋ ❋ ❋" ornament on p.186.
//
// Sentence-segmentation note: semicolons (؛) are treated as
// sentence-final splits exactly like commas and periods, per the
// existing precedent in ch43/ch47 (qr2-55-004 ends in "؛"). The refrain
// itself varies in its exact punctuation from paragraph to paragraph --
// most read "...، فَاعْرِفُوْنِيْ." but qr2-55-006/015/021/046 end in "!"
// instead of "." (matching the source's own exclamation marks), and
// qr2-55-055/056 (paragraph 10) uniquely use a PERIOD before the refrain
// ("وَأَنَا هُنَا. فَاعْرِفُوْنِيْ.") rather than the usual comma --
// transcribed faithfully as printed rather than normalized. Similarly,
// the repeated one-word exclamations that name each form of water
// (qr2-55-034/035 "الْبَرَدُ! الْبَرَدُ!", qr2-55-041/042 "الثَّلْجُ!
// الثَّلْجُ!") each carry their OWN "!" and so are split into two
// one-word sentences apiece -- EXCEPT qr2-55-046's "الْجَلِيْدُ
// الْجَلِيْدُ!" (paragraph 6), where the source places a footnote
// marker after the FIRST occurrence with no punctuation between the two
// repeated words and only the second carries "!" -- confirmed by close
// inspection of the page image -- so that pair stays as ONE sentence.
//
// Footnote-marker convention (as in ch45-54): markers "(١)"-"(٣)" on
// p.184 and "(١)"-"(٥)" on p.185 are book furniture, excluded from `ar`
// and not tokenized; each footnoted lemma carries the footnote's
// defining text in its `book_note`: صوف on p.184؛ جليد، زاحم، شلال، طل،
// ندى on p.185. One RE-footnote of an already-known word (the ch53/54
// قفر/اشتد precedent: a `lemmas` entry carrying the NEW book_note is
// added WITHOUT re-listing the word in `newWords`): "قدر" (own ch52's
// noun "pot," qr2-55-018 here as "قِدْراً") is footnoted again on p.184
// ("قِدْرٌ جمع قُدُوْر: إناء يُطْبَخُ فيه الطعام").
//
// Several same-spelling homograph/one-lemma-two-pos flags for future
// reconciliation (reuse the lemma key, override pos/root/gloss at the
// token level, do NOT add to `newWords`; none footnoted here beyond the
// "قدر" re-footnote above): "حر" (qr2-55-010, "الْحَرُّ", "the heat") is
// the SAME spelling as the already-known adjective "حُرّ" ("free," v1
// ch09) -- here the unrelated noun "حَرّ" ("heat"). "بر" (qr2-55-004,
// "أُمَّةِ الْبَرِّ", "the nation of the land") is the SAME spelling as
// the already-known noun "بِرّ" ("piety, dutifulness," own ch41) -- here
// the geographic noun "بَرّ" ("land, mainland," as opposed to sea);
// both plausibly trace to the same root ب ر ر but are distinct
// dictionary headwords. "شغل" (qr2-55-005, "شَغَلْنَا", "we occupied")
// reuses the already-known NOUN "شُغْل" ("work, occupation," v1
// ch02/own ch46) with pos overridden to verb -- a one-lemma-two-pos
// case. "جمد" is used as BOTH the new verb "to freeze, solidify"
// (qr2-55-032/047/067, "أَجْمُدُ"/"يَجْمُدُ") and, with identical
// spelling, the related noun "ice" (qr2-55-070, "هٰذَا الْجَمَدِ") --
// itself a one-lemma-two-pos pair introduced together in this chapter,
// so both uses share the single `newWords` entry "جمد". "نيل"
// (qr2-55-063, "وَالنِّيْلِ", "and the Nile") reuses the lemma key
// already taught as the abstract noun "نَيْل" ("attainment," v1 ch03)
// and the related verb "نَالَ" ("to attain," own ch41) -- here the
// unrelated proper noun "النِّيْل" (the Nile river), pos overridden to
// proper with an empty root.
//
// Distinct-derived-form new entries (naturally different spellings for
// related-root headwords already partly taught): "أعظم" (qr2-55-006,
// elative "greater") is new despite "عظيم" ("great") being well
// established, per the "أكثر"/own-ch45-47 precedent that elatives get
// their own `newWords` entries. "لامع" (qr2-55-039, active-participle
// adjective "shining") is new despite the verb "لمع" ("to shine," own
// ch52) already being known -- a distinctly-spelled derived form kept
// as its own entry per the ch52/53 precedent.
//
// Vocabulary notes: "أنا" (the independent 1st person pronoun) was
// initially assumed new to the corpus since prior chapters mostly
// expressed "I" through verb/pronoun suffixes, but a cross-check found
// it already has a `lemmas` entry (gloss "I", content:false) used as a
// token as far back as v1 ch04, and repeated in v1 ch06/09/10/11/22 --
// so it is reused here rather than re-listed in `newWords`, consistent
// with those chapters' precedent of not re-teaching it. "سمى"، "بحر"،
// "ابن"، "أمة"، "عظيم"، "قد"، "ثلاثة"، "ربع"، "من"، "لما"، "صيف"،
// "فارق" reused where the root matches own-ch-new "فارق" itself (new
// this chapter, see below)، "سار"، "الله"، "أمر"، "نزل"، "قطرة"، "على"،
// "قال"، "لعل"، "رأى"، "شمس" reused wherever repeated، "منظر"، "جميل"،
// "شتاء"، "اجتمع"، "خرج"، "كان"، "صغير"، "نهر"، "سند"، "صباح"، "ورق"
// (reused for "leaf" via the same word's existing "paper" sense --
// genuine polysemy, not a homograph)، "شجر"، "غير"، "هنا"، "عرف" were
// all already introduced and are reused here rather than re-listed as
// new words.
export const CHAPTER = {
  id: "ch55",
  title: {
    ar: "أَنَا هُنَا فَاعْرِفُوْنِيْ!",
    en: "I Am Here, So Know Me!"
  },
  pages: [183, 184, 185, 186],
  newWords: [
    "مولد", "امتد", "مسافة", "ألف", "ميل", "كرة", "يابس", "فارق",
    "تكون", "بخار", "ريح", "جبل", "سحاب", "مسخر", "حرارة", "نار", "غلا",
    "تصاعد", "دخان", "جمد", "وقع", "زجاج", "صوف", "أبيض", "لامع", "شمس",
    "لجين", "ثلج", "جليد", "هبط", "زاحم", "صخر", "حجر", "شلال", "هائل",
    "مبدأ", "عريض", "عميق", "دجلة", "فرات", "ضباب", "عشب", "زهر", "طل",
    "ندى", "صناعة", "حرص", "روي", "سماء", "أعظم"
  ],
  lemmas: {
    "قدر": {
      root: "ق د ر", pos: "noun", gloss: "a pot, cooking-pot",
      book_note: "قِدْرٌ جمع قُدُوْر: إناء يُطْبَخُ فيه الطعام."
    },
    "صوف": {
      root: "ص و ف", pos: "noun", gloss: "wool",
      book_note: "صُوف جمع أَصْوَاف: مَا يَنْبُتُ عَلَى جِسْمِ الشَّاةِ وَنَحْوِهَا مِمَّا لَيْسَ وَبَراً وَلاَ شَعَراً."
    },
    "جليد": {
      root: "ج ل د", pos: "noun", gloss: "ice, frost",
      book_note: "الْجَلِيْدُ: المياه المتجمِّدة بتأثير البرودة."
    },
    "زاحم": {
      root: "ز ح م", pos: "verb", gloss: "to jostle, push against, crowd",
      book_note: "زَاحَمَ يُزَاحِمُ مُزَاحَمةً: الشيءُ: دَفَعَه في مكانٍ ضيِّق."
    },
    "شلال": {
      root: "ش ل ل", pos: "noun", gloss: "a waterfall",
      book_note: "شَلاَّل جمع شَلاَّلاَت: انحدار فجائي في مجرى النهر."
    },
    "طل": {
      root: "ط ل ل", pos: "noun", gloss: "light rain, drizzle",
      book_note: "الطَّل: المطر الخفيف يكون له أثر قليل."
    },
    "ندى": {
      root: "ن د و", pos: "noun", gloss: "dew",
      book_note: "النَّدَى: قطرات ماء كالمطر تُرى عند الصباح على النبات وغيره."
    },
    "مولد": { root: "و ل د", pos: "noun", gloss: "a birthplace" },
    "امتد": { root: "م د د", pos: "verb", gloss: "to extend, stretch" },
    "مسافة": { root: "س و ف", pos: "noun", gloss: "a distance" },
    "ألف": { root: "أ ل ف", pos: "noun", gloss: "a thousand" },
    "ميل": { root: "م ي ل", pos: "noun", gloss: "a mile" },
    "كرة": { root: "ك ر و", pos: "noun", gloss: "a globe, sphere, ball" },
    "يابس": { root: "ي ب س", pos: "noun", gloss: "dry land" },
    "فارق": { root: "ف ر ق", pos: "verb", gloss: "to part from, leave" },
    "تكون": { root: "ك و ن", pos: "verb", gloss: "to form, come into being" },
    "بخار": { root: "ب خ ر", pos: "noun", gloss: "vapor, steam" },
    "ريح": { root: "ر و ح", pos: "noun", gloss: "wind" },
    "جبل": { root: "ج ب ل", pos: "noun", gloss: "a mountain" },
    "سحاب": { root: "س ح ب", pos: "noun", gloss: "cloud" },
    "مسخر": { root: "س خ ر", pos: "adj", gloss: "subjugated, made to serve" },
    "حرارة": { root: "ح ر ر", pos: "noun", gloss: "heat, temperature" },
    "نار": { root: "ن و ر", pos: "noun", gloss: "fire" },
    "غلا": { root: "غ ل ي", pos: "verb", gloss: "to boil" },
    "تصاعد": { root: "ص ع د", pos: "verb", gloss: "to rise, ascend" },
    "دخان": { root: "د خ ن", pos: "noun", gloss: "smoke" },
    "جمد": { root: "ج م د", pos: "verb", gloss: "to freeze, solidify; (as noun) ice" },
    "وقع": { root: "و ق ع", pos: "verb", gloss: "to fall, land" },
    "زجاج": { root: "ز ج ج", pos: "noun", gloss: "glass" },
    "أبيض": { root: "ب ي ض", pos: "adj", gloss: "white" },
    "لامع": { root: "ل م ع", pos: "adj", gloss: "shining, glittering" },
    "شمس": { root: "ش م س", pos: "noun", gloss: "the sun" },
    "لجين": { root: "ل ج ن", pos: "noun", gloss: "silver" },
    "ثلج": { root: "ث ل ج", pos: "noun", gloss: "snow" },
    "هبط": { root: "ه ب ط", pos: "verb", gloss: "to descend" },
    "صخر": { root: "ص خ ر", pos: "noun", gloss: "rock" },
    "حجر": { root: "ح ج ر", pos: "noun", gloss: "a stone" },
    "هائل": { root: "ه و ل", pos: "adj", gloss: "tremendous, terrifying" },
    "مبدأ": { root: "ب د أ", pos: "noun", gloss: "a beginning" },
    "عريض": { root: "ع ر ض", pos: "adj", gloss: "wide, broad" },
    "عميق": { root: "ع م ق", pos: "adj", gloss: "deep" },
    "دجلة": { root: "", pos: "proper", gloss: "the Tigris (river)" },
    "فرات": { root: "", pos: "proper", gloss: "the Euphrates (river)" },
    "ضباب": { root: "ض ب ب", pos: "noun", gloss: "fog, mist" },
    "عشب": { root: "ع ش ب", pos: "noun", gloss: "grass, herbage" },
    "زهر": { root: "ز ه ر", pos: "noun", gloss: "flowers, blossoms" },
    "صناعة": { root: "ص ن ع", pos: "noun", gloss: "industry, manufacturing" },
    "حرص": { root: "ح ر ص", pos: "verb", gloss: "to be keen, eager, careful about" },
    "روي": { root: "ر و ي", pos: "verb", gloss: "to quench one's thirst" },
    "سماء": { root: "س م و", pos: "noun", gloss: "sky, heaven" },
    "أعظم": { root: "ع ظ م", pos: "adj", gloss: "greater" }
  },
  paragraphs: [
    {
      en: "My birthplace and homeland is what you call 'the sea'! I am a son of a vast nation that stretches over thousands of miles -- people say my nation is greater than the nation of land, for we occupy three-quarters of the globe, while the dry land is only about a quarter.",
      sentences: [
        {
          id: "qr2-55-001",
          ar: "مَوْلِدِيْ وَوَطَنِيْ مَا تُسَمُّوْنَهُ الْبَحْرَ!",
          en: "My birthplace and homeland is what you call 'the sea'!",
          tokens: [
            { surface: "مَوْلِدِيْ", lemma: "مولد", pos: "noun", features: "nom+1cs", root: "و ل د", gloss: "my birthplace" },
            { surface: "وَوَطَنِيْ", lemma: "وطن", pos: "noun", features: "conj+nom+1cs", root: "و ط ن", gloss: "and my homeland" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "تُسَمُّوْنَهُ", lemma: "سمى", pos: "verb", features: "impf.2mpl+3ms", root: "س م و", gloss: "you call it" },
            { surface: "الْبَحْرَ", lemma: "بحر", pos: "noun", features: "def.acc", root: "ب ح ر", gloss: "the sea" }
          ]
        },
        {
          id: "qr2-55-002",
          ar: "أَنَا ابْنُ أُمَّةٍ عَظِيْمَةٍ ،",
          en: "I am a son of a great nation,",
          tokens: [
            { surface: "أَنَا", lemma: "أنا", pos: "noun", features: "nom.1cs", root: "", gloss: "I" },
            { surface: "ابْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "a son (of)" },
            { surface: "أُمَّةٍ", lemma: "أمة", pos: "noun", features: "indef.gen", root: "أ م م", gloss: "a nation" },
            { surface: "عَظِيْمَةٍ", lemma: "عظيم", pos: "adj", features: "indef.gen.f", root: "ع ظ م", gloss: "great" }
          ]
        },
        {
          id: "qr2-55-003",
          ar: "قَدِ امْتَدَّتْ عَلَىٰ مَسَافَةِ آلاَفِ الأَمْيَالِ ،",
          en: "that has stretched over a distance of thousands of miles,",
          tokens: [
            { surface: "قَدِ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "امْتَدَّتْ", lemma: "امتد", pos: "verb", features: "perf.3fs", root: "م د د", gloss: "extended" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "over" },
            { surface: "مَسَافَةِ", lemma: "مسافة", pos: "noun", features: "gen.constr", root: "س و ف", gloss: "a distance (of)" },
            { surface: "آلاَفِ", lemma: "ألف", pos: "noun", features: "indef.pl.gen.constr", root: "أ ل ف", gloss: "thousands (of)" },
            { surface: "الأَمْيَالِ", lemma: "ميل", pos: "noun", features: "def.pl.gen", root: "م ي ل", gloss: "the miles" }
          ]
        },
        {
          id: "qr2-55-004",
          ar: "وَيَقُوْلُوْنَ: إِنَّ أُمَّتِيْ أَعْظَمُ مِنْ أُمَّةِ الْبَرِّ؛",
          en: "and they say: my nation is greater than the nation of the land;",
          tokens: [
            { surface: "وَيَقُوْلُوْنَ", lemma: "قال", pos: "verb", features: "conj+impf.3mpl", root: "ق و ل", gloss: "and they say" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "أُمَّتِيْ", lemma: "أمة", pos: "noun", features: "nom+1cs", root: "أ م م", gloss: "my nation" },
            { surface: "أَعْظَمُ", lemma: "أعظم", pos: "adj", features: "nom", root: "ع ظ م", gloss: "greater" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "أُمَّةِ", lemma: "أمة", pos: "noun", features: "gen.constr", root: "أ م م", gloss: "the nation (of)" },
            { surface: "الْبَرِّ", lemma: "بر", pos: "noun", features: "def.gen", root: "ب ر ر", gloss: "the land" }
          ]
        },
        {
          id: "qr2-55-005",
          ar: "فَقَدْ شَغَلْنَا نَحْنُ ثَلاَثَةَ أَرْبَاعِ الْكُرَةِ ،",
          en: "for we occupy three-quarters of the globe,",
          tokens: [
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "شَغَلْنَا", lemma: "شغل", pos: "verb", features: "perf.1cpl", root: "ش غ ل", gloss: "we occupied" },
            { surface: "نَحْنُ", lemma: "نحن", pos: "noun", features: "nom.1p", root: "", gloss: "we" },
            { surface: "ثَلاَثَةَ", lemma: "ثلاثة", pos: "num", features: "acc.constr", root: "ث ل ث", gloss: "three (of)" },
            { surface: "أَرْبَاعِ", lemma: "ربع", pos: "noun", features: "def.pl.gen.constr", root: "ر ب ع", gloss: "quarters (of)" },
            { surface: "الْكُرَةِ", lemma: "كرة", pos: "noun", features: "def.gen", root: "ك ر و", gloss: "the globe" }
          ]
        },
        {
          id: "qr2-55-006",
          ar: "وَالْيَابِسُ مِنْهَا نَحْوُ رُبْعٍ.",
          en: "while the dry land of it is about a quarter.",
          tokens: [
            { surface: "وَالْيَابِسُ", lemma: "يابس", pos: "noun", features: "conj+def.nom", root: "ي ب س", gloss: "and the dry land" },
            { surface: "مِنْهَا", lemma: "من", pos: "prep", features: "prep+3fs", root: "", gloss: "of it" },
            { surface: "نَحْوُ", lemma: "نحو", pos: "noun", features: "nom", root: "ن ح و", gloss: "about, approximately" },
            { surface: "رُبْعٍ", lemma: "ربع", pos: "noun", features: "indef.gen", root: "ر ب ع", gloss: "a quarter" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ يَشْغَلُ الْبَحْرُ مِنَ الْكُرَةِ الأَرْضِيَّةِ؟",
          options: ["ثَلاَثَةَ أَرْبَاعِهَا", "نِصْفَهَا فَقَط", "رُبْعَهَا فَقَط"],
          answer: 0,
          qEn: "How much of the globe does the sea occupy?",
          optionsEn: ["Three-quarters of it", "Only half of it", "Only a quarter of it"]
        }
      ]
    },
    {
      en: "I left my sea homeland two months ago, when the heat intensified this summer: I formed into vapor, parted from the sea, and the winds carried me to the mountains as clouds suspended between sky and earth. When God's command came, this vapor broke down from the heat and fell drop by drop onto the earth, and people said: rain! rain! -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-007",
          ar: "وَقَدْ فَارَقْتُ وَطَنِيْ قَبْلَ شَهْرَيْنِ ،",
          en: "And I left my homeland two months ago,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "فَارَقْتُ", lemma: "فارق", pos: "verb", features: "perf.1cs", root: "ف ر ق", gloss: "I left, parted from" },
            { surface: "وَطَنِيْ", lemma: "وطن", pos: "noun", features: "acc+1cs", root: "و ط ن", gloss: "my homeland" },
            { surface: "قَبْلَ", lemma: "قبل", pos: "prep", features: "prep", root: "ق ب ل", gloss: "before" },
            { surface: "شَهْرَيْنِ", lemma: "شهر", pos: "noun", features: "du.gen", root: "ش ه ر", gloss: "two months" }
          ]
        },
        {
          id: "qr2-55-008",
          ar: "لَمَّا اشْتَدَّ الْحَرُّ فِيْ هٰذَا الصَّيْفِ ،",
          en: "when the heat intensified this summer,",
          tokens: [
            { surface: "لَمَّا", lemma: "لما", pos: "part", features: "part", root: "", gloss: "when" },
            { surface: "اشْتَدَّ", lemma: "اشتد", pos: "verb", features: "perf.3ms", root: "ش د د", gloss: "intensified" },
            { surface: "الْحَرُّ", lemma: "حر", pos: "noun", features: "def.nom", root: "ح ر ر", gloss: "the heat" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "الصَّيْفِ", lemma: "صيف", pos: "noun", features: "def.gen", root: "ص ي ف", gloss: "the summer" }
          ]
        },
        {
          id: "qr2-55-009",
          ar: "تَكَوَّنَ بُخَارٌ ،",
          en: "I formed into vapor,",
          tokens: [
            { surface: "تَكَوَّنَ", lemma: "تكون", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "formed" },
            { surface: "بُخَارٌ", lemma: "بخار", pos: "noun", features: "indef.nom", root: "ب خ ر", gloss: "vapor" }
          ]
        },
        {
          id: "qr2-55-010",
          ar: "وَفَارَقَ الْبَحْرَ ،",
          en: "and parted from the sea,",
          tokens: [
            { surface: "وَفَارَقَ", lemma: "فارق", pos: "verb", features: "conj+perf.3ms", root: "ف ر ق", gloss: "and left" },
            { surface: "الْبَحْرَ", lemma: "بحر", pos: "noun", features: "def.acc", root: "ب ح ر", gloss: "the sea" }
          ]
        },
        {
          id: "qr2-55-011",
          ar: "وَسَارَتْ بِهِ الرِّيَاحُ إِلَىٰ الْجِبَالِ ،",
          en: "and the winds carried it to the mountains,",
          tokens: [
            { surface: "وَسَارَتْ", lemma: "سار", pos: "verb", features: "conj+perf.3fs", root: "س ي ر", gloss: "and moved" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "with it" },
            { surface: "الرِّيَاحُ", lemma: "ريح", pos: "noun", features: "def.pl.nom", root: "ر و ح", gloss: "the winds" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْجِبَالِ", lemma: "جبل", pos: "noun", features: "def.pl.gen", root: "ج ب ل", gloss: "the mountains" }
          ]
        },
        {
          id: "qr2-55-012",
          ar: "وَهُوَ السَّحَابُ الْمُسَخَّرُ بَيْنَ السَّمَاءِ وَالأَرْضِ ،",
          en: "as clouds made subservient between sky and earth,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom.3ms", root: "", gloss: "and it (is)" },
            { surface: "السَّحَابُ", lemma: "سحاب", pos: "noun", features: "def.nom", root: "س ح ب", gloss: "the cloud" },
            { surface: "الْمُسَخَّرُ", lemma: "مسخر", pos: "adj", features: "def.nom", root: "س خ ر", gloss: "made subservient" },
            { surface: "بَيْنَ", lemma: "بين", pos: "prep", features: "prep", root: "", gloss: "between" },
            { surface: "السَّمَاءِ", lemma: "سماء", pos: "noun", features: "def.gen", root: "س م و", gloss: "the sky" },
            { surface: "وَالأَرْضِ", lemma: "أرض", pos: "noun", features: "conj+def.gen", root: "أ ر ض", gloss: "and the earth" }
          ]
        },
        {
          id: "qr2-55-013",
          ar: "فَلَمَّا جَاءَهُ الأَمْرُ مِنَ اللهِ ،",
          en: "and when the command came to it from Allah,",
          tokens: [
            { surface: "فَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "and when" },
            { surface: "جَاءَهُ", lemma: "جاء", pos: "verb", features: "perf.3ms+3ms", root: "ج ي أ", gloss: "came to it" },
            { surface: "الأَمْرُ", lemma: "أمر", pos: "noun", features: "def.nom", root: "أ م ر", gloss: "the command" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-55-014",
          ar: "تَحَلَّلَ هٰذَا الْبُخَارُ بِالْحَرَارَةِ ،",
          en: "this vapor broke down from the heat,",
          tokens: [
            { surface: "تَحَلَّلَ", lemma: "تحلل", pos: "verb", features: "perf.3ms", root: "ح ل ل", gloss: "broke down" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "الْبُخَارُ", lemma: "بخار", pos: "noun", features: "def.nom", root: "ب خ ر", gloss: "the vapor" },
            { surface: "بِالْحَرَارَةِ", lemma: "حرارة", pos: "noun", features: "prep+def.gen", root: "ح ر ر", gloss: "from the heat" }
          ]
        },
        {
          id: "qr2-55-015",
          ar: "وَنَزَلَ قَطَرَاتٍ قَطَرَاتٍ عَلَىٰ الأَرْضِ ،",
          en: "and fell drop by drop onto the earth,",
          tokens: [
            { surface: "وَنَزَلَ", lemma: "نزل", pos: "verb", features: "conj+perf.3ms", root: "ن ز ل", gloss: "and fell" },
            { surface: "قَطَرَاتٍ", lemma: "قطرة", pos: "noun", features: "indef.pl.acc", root: "ق ط ر", gloss: "drops" },
            { surface: "قَطَرَاتٍ", lemma: "قطرة", pos: "noun", features: "indef.pl.acc", root: "ق ط ر", gloss: "drops" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "onto" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the earth" }
          ]
        },
        {
          id: "qr2-55-016",
          ar: "وَقَالَ النَّاسُ: الْمَطَرُ!",
          en: "and people said: rain!",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "الْمَطَرُ", lemma: "مطر", pos: "noun", features: "def.nom", root: "م ط ر", gloss: "the rain" }
          ]
        },
        {
          id: "qr2-55-017",
          ar: "الْمَطَرُ!",
          en: "Rain!",
          tokens: [
            { surface: "الْمَطَرُ", lemma: "مطر", pos: "noun", features: "def.nom", root: "م ط ر", gloss: "the rain" }
          ]
        },
        {
          id: "qr2-55-018",
          ar: "وَأَنَا هُنَا ،",
          en: "And I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-019",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "so know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ يَتَحَوَّلُ مَاءُ الْبَحْرِ إِلَىٰ مَطَرٍ؟",
          options: ["يَتَكَوَّنُ بُخَاراً ، فَسَحَاباً ، ثُمَّ يَنْزِلُ قَطَرَاتٍ بِأَمْرِ اللهِ", "يَتَجَمَّدُ ثُمَّ يَذُوْبُ فَجْأَةً", "يَنْتَقِلُ مُبَاشَرَةً بِلاَ تَغَيُّرٍ"],
          answer: 0,
          qEn: "How does seawater turn into rain?",
          optionsEn: ["It forms into vapor, then clouds, then falls as drops by Allah's command", "It freezes, then suddenly melts", "It moves directly with no change at all"]
        }
      ]
    },
    {
      en: "You may have seen a pot with water on the fire; when the pot boils, something like smoke rises from it -- that is vapor, and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-020",
          ar: "لَعَلَّكُمْ رَأَيْتُمْ قِدْراً عَلَىٰ النَّارِ فِيْهَا مَاءٌ ،",
          en: "You may have seen a pot on the fire with water in it,",
          tokens: [
            { surface: "لَعَلَّكُمْ", lemma: "لعل", pos: "part", features: "part+2mpl", root: "", gloss: "perhaps you" },
            { surface: "رَأَيْتُمْ", lemma: "رأى", pos: "verb", features: "perf.2mpl", root: "ر أ ي", gloss: "you saw" },
            { surface: "قِدْراً", lemma: "قدر", pos: "noun", features: "indef.acc", root: "ق د ر", gloss: "a pot" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "النَّارِ", lemma: "نار", pos: "noun", features: "def.gen", root: "ن و ر", gloss: "the fire" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", root: "", gloss: "in it" },
            { surface: "مَاءٌ", lemma: "ماء", pos: "noun", features: "indef.nom", root: "م و ه", gloss: "water" }
          ]
        },
        {
          id: "qr2-55-021",
          ar: "فَإِذَا غَلَتِ الْقِدْرُ تَصَاعَدَ مِنْهَا مِثْلُ دُخَانٍ ،",
          en: "and when the pot boils, something like smoke rises from it,",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and when" },
            { surface: "غَلَتِ", lemma: "غلا", pos: "verb", features: "perf.3fs", root: "غ ل ي", gloss: "boils" },
            { surface: "الْقِدْرُ", lemma: "قدر", pos: "noun", features: "def.nom", root: "ق د ر", gloss: "the pot" },
            { surface: "تَصَاعَدَ", lemma: "تصاعد", pos: "verb", features: "perf.3ms", root: "ص ع د", gloss: "rises" },
            { surface: "مِنْهَا", lemma: "من", pos: "prep", features: "prep+3fs", root: "", gloss: "from it" },
            { surface: "مِثْلُ", lemma: "مثل", pos: "noun", features: "nom.constr", root: "م ث ل", gloss: "like" },
            { surface: "دُخَانٍ", lemma: "دخان", pos: "noun", features: "indef.gen", root: "د خ ن", gloss: "smoke" }
          ]
        },
        {
          id: "qr2-55-022",
          ar: "وَهُوَ الْبُخَارُ ،",
          en: "that is vapor,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom.3ms", root: "", gloss: "and it (is)" },
            { surface: "الْبُخَارُ", lemma: "بخار", pos: "noun", features: "def.nom", root: "ب خ ر", gloss: "the vapor" }
          ]
        },
        {
          id: "qr2-55-023",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-024",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "so know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "مَتَىٰ يَتَصَاعَدُ الْبُخَارُ مِنَ الْقِدْرِ؟",
          options: ["إِذَا غَلَتِ الْقِدْرُ عَلَىٰ النَّارِ", "إِذَا بَرَدَ الْمَاءُ", "إِذَا فَرَغَتِ الْقِدْرُ مِنَ الْمَاءِ"],
          answer: 0,
          qEn: "When does vapor rise from the pot?",
          optionsEn: ["When the pot boils on the fire", "When the water gets cold", "When the pot runs out of water"]
        }
      ]
    },
    {
      en: "When rain falls and its drops freeze from the cold, landing on the ground like glass, people say: hail! hail! -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-025",
          ar: "وَإِذَا نَزَلَ الْمَطَرُ ،",
          en: "And when rain falls,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and when" },
            { surface: "نَزَلَ", lemma: "نزل", pos: "verb", features: "perf.3ms", root: "ن ز ل", gloss: "falls" },
            { surface: "الْمَطَرُ", lemma: "مطر", pos: "noun", features: "def.nom", root: "م ط ر", gloss: "the rain" }
          ]
        },
        {
          id: "qr2-55-026",
          ar: "وَجَمَدَتْ قَطَرَاتِهْ مِنَ الْبَرْدِ ،",
          en: "and its drops freeze from the cold,",
          tokens: [
            { surface: "وَجَمَدَتْ", lemma: "جمد", pos: "verb", features: "conj+perf.3fs", root: "ج م د", gloss: "and freeze" },
            { surface: "قَطَرَاتِهْ", lemma: "قطرة", pos: "noun", features: "pl+3ms", root: "ق ط ر", gloss: "its drops" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْبَرْدِ", lemma: "برد", pos: "noun", features: "def.gen", root: "ب ر د", gloss: "the cold" }
          ]
        },
        {
          id: "qr2-55-027",
          ar: "وَوَقَعَتْ عَلَىٰ الأَرْضِ مِثْلَ الزُّجَاجِ ،",
          en: "and land on the ground like glass,",
          tokens: [
            { surface: "وَوَقَعَتْ", lemma: "وقع", pos: "verb", features: "conj+perf.3fs", root: "و ق ع", gloss: "and land" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the ground" },
            { surface: "مِثْلَ", lemma: "مثل", pos: "noun", features: "acc.constr", root: "م ث ل", gloss: "like" },
            { surface: "الزُّجَاجِ", lemma: "زجاج", pos: "noun", features: "def.gen", root: "ز ج ج", gloss: "the glass" }
          ]
        },
        {
          id: "qr2-55-028",
          ar: "قَالَ النَّاسُ: الْبَرَدُ!",
          en: "people say: hail!",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "say" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "الْبَرَدُ", lemma: "برد", pos: "noun", features: "def.nom", root: "ب ر د", gloss: "the hail" }
          ]
        },
        {
          id: "qr2-55-029",
          ar: "الْبَرَدُ!",
          en: "Hail!",
          tokens: [
            { surface: "الْبَرَدُ", lemma: "برد", pos: "noun", features: "def.nom", root: "ب ر د", gloss: "the hail" }
          ]
        },
        {
          id: "qr2-55-030",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-031",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "so know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ يَتَكَوَّنُ الْبَرَدُ؟",
          options: ["تَجْمُدُ قَطَرَاتُ الْمَطَرِ مِنَ الْبَرْدِ وَتَقَعُ مِثْلَ الزُّجَاجِ", "يَنْزِلُ مِنَ الْبَحْرِ مُبَاشَرَةً", "يَصْنَعُهُ النَّاسُ فِي الْمَصَانِعِ"],
          answer: 0,
          qEn: "How does hail form?",
          optionsEn: ["Rain drops freeze from the cold and land like glass", "It falls directly from the sea", "People manufacture it in factories"]
        }
      ]
    },
    {
      en: "I may fall on the mountains like shining white wool, glittering in the sun like silver, making a beautiful sight -- people say: snow! snow! -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-032",
          ar: "وَقَدْ أَسْقُطُ فِي الْجِبَالِ مِثْلَ الصُّوْفِ الأَبْيَض اللاَّمِع ،",
          en: "I may fall on the mountains like shining white wool,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "أَسْقُطُ", lemma: "سقط", pos: "verb", features: "impf.1cs", root: "س ق ط", gloss: "I fall" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الْجِبَالِ", lemma: "جبل", pos: "noun", features: "def.pl.gen", root: "ج ب ل", gloss: "the mountains" },
            { surface: "مِثْلَ", lemma: "مثل", pos: "noun", features: "acc.constr", root: "م ث ل", gloss: "like" },
            { surface: "الصُّوْفِ", lemma: "صوف", pos: "noun", features: "def.gen", root: "ص و ف", gloss: "the wool" },
            { surface: "الأَبْيَض", lemma: "أبيض", pos: "adj", features: "def.gen", root: "ب ي ض", gloss: "the white" },
            { surface: "اللاَّمِع", lemma: "لامع", pos: "adj", features: "def.gen", root: "ل م ع", gloss: "the shining" }
          ]
        },
        {
          id: "qr2-55-033",
          ar: "وَأَلْمَعُ فِي الشَّمْسِ مِثْلَ اللُّجَيْنِ ،",
          en: "and glitter in the sun like silver,",
          tokens: [
            { surface: "وَأَلْمَعُ", lemma: "لمع", pos: "verb", features: "conj+impf.1cs", root: "ل م ع", gloss: "and I glitter" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الشَّمْسِ", lemma: "شمس", pos: "noun", features: "def.gen", root: "ش م س", gloss: "the sun" },
            { surface: "مِثْلَ", lemma: "مثل", pos: "noun", features: "acc.constr", root: "م ث ل", gloss: "like" },
            { surface: "اللُّجَيْنِ", lemma: "لجين", pos: "noun", features: "def.gen", root: "ل ج ن", gloss: "the silver" }
          ]
        },
        {
          id: "qr2-55-034",
          ar: "فَيَكُوْنُ مَنْظَراً جَمِيْلاً ،",
          en: "making a beautiful sight,",
          tokens: [
            { surface: "فَيَكُوْنُ", lemma: "كان", pos: "verb", features: "conj+impf.3ms", root: "ك و ن", gloss: "so it is" },
            { surface: "مَنْظَراً", lemma: "منظر", pos: "noun", features: "indef.acc", root: "ن ظ ر", gloss: "a sight" },
            { surface: "جَمِيْلاً", lemma: "جميل", pos: "adj", features: "indef.acc", root: "ج م ل", gloss: "beautiful" }
          ]
        },
        {
          id: "qr2-55-035",
          ar: "وَيَقُوْلُ النَّاسُ: الثَّلْجُ!",
          en: "and people say: snow!",
          tokens: [
            { surface: "وَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", root: "ق و ل", gloss: "and says" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "الثَّلْجُ", lemma: "ثلج", pos: "noun", features: "def.nom", root: "ث ل ج", gloss: "the snow" }
          ]
        },
        {
          id: "qr2-55-036",
          ar: "الثَّلْجُ!",
          en: "Snow!",
          tokens: [
            { surface: "الثَّلْجُ", lemma: "ثلج", pos: "noun", features: "def.nom", root: "ث ل ج", gloss: "the snow" }
          ]
        },
        {
          id: "qr2-55-037",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-038",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "so know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا يُشَبَّهُ الثَّلْجُ فِي وَصْفِ الْكَاتِبِ؟",
          options: ["بِالصُّوْفِ الأَبْيَضِ اللاَّمِعِ وَاللُّجَيْنِ", "بِالرَّمَادِ الأَسْوَدِ", "بِالطِّيْنِ الأَحْمَرِ"],
          answer: 0,
          qEn: "What is snow compared to in the writer's description?",
          optionsEn: ["Shining white wool and silver", "Black ash", "Red clay"]
        }
      ]
    },
    {
      en: "The cold may intensify in winter, so whatever water there was freezes -- people say: ice! ice! -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-039",
          ar: "وَقَدْ يَشْتَدُّ الْبَرْدُ فِي الشِّتَاءِ ،",
          en: "The cold may intensify in winter,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "يَشْتَدُّ", lemma: "اشتد", pos: "verb", features: "impf.3ms", root: "ش د د", gloss: "intensifies" },
            { surface: "الْبَرْدُ", lemma: "برد", pos: "noun", features: "def.nom", root: "ب ر د", gloss: "the cold" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الشِّتَاءِ", lemma: "شتاء", pos: "noun", features: "def.gen", root: "ش ت و", gloss: "the winter" }
          ]
        },
        {
          id: "qr2-55-040",
          ar: "فَيَجْمُدُ مَا كَانَ مِنَ الْمَاءِ ،",
          en: "so whatever water there was freezes,",
          tokens: [
            { surface: "فَيَجْمُدُ", lemma: "جمد", pos: "verb", features: "conj+impf.3ms", root: "ج م د", gloss: "so freezes" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "rel", root: "", gloss: "what" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "was" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْمَاءِ", lemma: "ماء", pos: "noun", features: "def.gen", root: "م و ه", gloss: "the water" }
          ]
        },
        {
          id: "qr2-55-041",
          ar: "وَيَقُوْلُ النَّاسُ: الْجَلِيْدُ الْجَلِيْدُ!",
          en: "and people say: ice, ice!",
          tokens: [
            { surface: "وَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", root: "ق و ل", gloss: "and says" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "الْجَلِيْدُ", lemma: "جليد", pos: "noun", features: "def.nom", root: "ج ل د", gloss: "the ice" },
            { surface: "الْجَلِيْدُ", lemma: "جليد", pos: "noun", features: "def.nom", root: "ج ل د", gloss: "the ice" }
          ]
        },
        {
          id: "qr2-55-042",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-043",
          ar: "فَاعْرِفُوْنِيْ!",
          en: "so know me!",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "مَتَىٰ يَتَكَوَّنُ الْجَلِيْدُ؟",
          options: ["إِذَا اشْتَدَّ الْبَرْدُ فِي الشِّتَاءِ فَيَجْمُدُ الْمَاءُ", "إِذَا اشْتَدَّ الْحَرُّ فِي الصَّيْفِ", "عِنْدَمَا يَسْقُطُ الْمَطَرُ فَقَطْ"],
          answer: 0,
          qEn: "When does ice form?",
          optionsEn: ["When the cold intensifies in winter and water freezes", "When the heat intensifies in summer", "Only when rain falls"]
        }
      ]
    },
    {
      en: "When I come down from the mountains to the ground, jostled by rocks or stones, I become a waterfall, with a tremendous sound and a beautiful sight -- and I am here, so know me!",
      sentences: [
        {
          id: "qr2-55-044",
          ar: "وَإِذَا هَبَطْتُ مِنَ الْجِبَالِ إِلَىٰ الأَرْضِ ،",
          en: "And when I come down from the mountains to the ground,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and when" },
            { surface: "هَبَطْتُ", lemma: "هبط", pos: "verb", features: "perf.1cs", root: "ه ب ط", gloss: "I come down" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْجِبَالِ", lemma: "جبل", pos: "noun", features: "def.pl.gen", root: "ج ب ل", gloss: "the mountains" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the ground" }
          ]
        },
        {
          id: "qr2-55-045",
          ar: "وَزَاحَمَنِيْ صُخُوْرٌ أَوْ أَحْجَارٌ ،",
          en: "jostled by rocks or stones,",
          tokens: [
            { surface: "وَزَاحَمَنِيْ", lemma: "زاحم", pos: "verb", features: "conj+perf.3ms+1cs", root: "ز ح م", gloss: "and jostled me" },
            { surface: "صُخُوْرٌ", lemma: "صخر", pos: "noun", features: "indef.pl.nom", root: "ص خ ر", gloss: "rocks" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "أَحْجَارٌ", lemma: "حجر", pos: "noun", features: "indef.pl.nom", root: "ح ج ر", gloss: "stones" }
          ]
        },
        {
          id: "qr2-55-046",
          ar: "كَانَ شَلاَّلٌ ،",
          en: "I became a waterfall,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "there was" },
            { surface: "شَلاَّلٌ", lemma: "شلال", pos: "noun", features: "indef.nom", root: "ش ل ل", gloss: "a waterfall" }
          ]
        },
        {
          id: "qr2-55-047",
          ar: "يَكُوْنُ لَهُ صَوْتٌ هَائِلٌ وَمَنْظَرٌ جَمِيْلٌ ،",
          en: "with a tremendous sound and a beautiful sight,",
          tokens: [
            { surface: "يَكُوْنُ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "there is" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for it" },
            { surface: "صَوْتٌ", lemma: "صوت", pos: "noun", features: "indef.nom", root: "ص و ت", gloss: "a sound" },
            { surface: "هَائِلٌ", lemma: "هائل", pos: "adj", features: "indef.nom", root: "ه و ل", gloss: "tremendous" },
            { surface: "وَمَنْظَرٌ", lemma: "منظر", pos: "noun", features: "conj+indef.nom", root: "ن ظ ر", gloss: "and a sight" },
            { surface: "جَمِيْلٌ", lemma: "جميل", pos: "adj", features: "indef.nom", root: "ج م ل", gloss: "beautiful" }
          ]
        },
        {
          id: "qr2-55-048",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-049",
          ar: "فَاعْرِفُوْنِيْ!",
          en: "so know me!",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "مَتَىٰ يَتَكَوَّنُ الشَّلاَّلُ؟",
          options: ["عِنْدَمَا يَهْبِطُ الْمَاءُ مِنَ الْجِبَالِ وَتُزَاحِمُهُ الصُّخُوْرُ", "عِنْدَمَا يَجْمُدُ الْمَاءُ", "عِنْدَمَا يَتَبَخَّرُ الْمَاءُ"],
          answer: 0,
          qEn: "When does a waterfall form?",
          optionsEn: ["When water descends from the mountains and is jostled by rocks", "When water freezes", "When water evaporates"]
        }
      ]
    },
    {
      en: "When waterfalls gather, I emerge from the mountains as a river -- small at first, then broad and deep -- and people say: the river of Sindh, the river of Tigris, the Euphrates, the Nile -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-050",
          ar: "وَإِذَا اجْتَمَعَتْ شَلاَّلاَتٌ ،",
          en: "And when waterfalls gather,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and when" },
            { surface: "اجْتَمَعَتْ", lemma: "اجتمع", pos: "verb", features: "perf.3fs", root: "ج م ع", gloss: "gather" },
            { surface: "شَلاَّلاَتٌ", lemma: "شلال", pos: "noun", features: "indef.pl.nom", root: "ش ل ل", gloss: "waterfalls" }
          ]
        },
        {
          id: "qr2-55-051",
          ar: "خَرَجْتُ مِنَ الْجِبَالِ ،",
          en: "I emerge from the mountains,",
          tokens: [
            { surface: "خَرَجْتُ", lemma: "خرج", pos: "verb", features: "perf.1cs", root: "خ ر ج", gloss: "I emerged" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْجِبَالِ", lemma: "جبل", pos: "noun", features: "def.pl.gen", root: "ج ب ل", gloss: "the mountains" }
          ]
        },
        {
          id: "qr2-55-052",
          ar: "فَكُنْتُ نَهْراً ،",
          en: "so I became a river,",
          tokens: [
            { surface: "فَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1cs", root: "ك و ن", gloss: "so I became" },
            { surface: "نَهْراً", lemma: "نهر", pos: "noun", features: "indef.acc", root: "ن ه ر", gloss: "a river" }
          ]
        },
        {
          id: "qr2-55-053",
          ar: "يَكُوْنُ فِيْ مَبْدَئِهِ صَغِيْراً ،",
          en: "small at its beginning,",
          tokens: [
            { surface: "يَكُوْنُ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "it is" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "مَبْدَئِهِ", lemma: "مبدأ", pos: "noun", features: "gen+3ms", root: "ب د أ", gloss: "its beginning" },
            { surface: "صَغِيْراً", lemma: "صغير", pos: "adj", features: "indef.acc", root: "ص غ ر", gloss: "small" }
          ]
        },
        {
          id: "qr2-55-054",
          ar: "ثُمَّ يَكُوْنُ عَرِيْضاً عَمِيْقاً ،",
          en: "then broad and deep,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "يَكُوْنُ", lemma: "كان", pos: "verb", features: "impf.3ms", root: "ك و ن", gloss: "it is" },
            { surface: "عَرِيْضاً", lemma: "عريض", pos: "adj", features: "indef.acc", root: "ع ر ض", gloss: "broad" },
            { surface: "عَمِيْقاً", lemma: "عميق", pos: "adj", features: "indef.acc", root: "ع م ق", gloss: "deep" }
          ]
        },
        {
          id: "qr2-55-055",
          ar: "وَقَالَ النَّاسُ: نَهْرُ السِّنْدِ وَنَهْرُ دِجْلَةَ ،",
          en: "and people said: the river of Sindh, and the river Tigris,",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "نَهْرُ", lemma: "نهر", pos: "noun", features: "nom.constr", root: "ن ه ر", gloss: "the river (of)" },
            { surface: "السِّنْدِ", lemma: "سند", pos: "proper", features: "def.gen", root: "", gloss: "Sindh" },
            { surface: "وَنَهْرُ", lemma: "نهر", pos: "noun", features: "conj+nom.constr", root: "ن ه ر", gloss: "and the river (of)" },
            { surface: "دِجْلَةَ", lemma: "دجلة", pos: "proper", features: "gen", root: "", gloss: "Tigris" }
          ]
        },
        {
          id: "qr2-55-056",
          ar: "وَالْفُرَاتِ ،",
          en: "and the Euphrates,",
          tokens: [
            { surface: "وَالْفُرَاتِ", lemma: "فرات", pos: "proper", features: "conj+def.gen", root: "", gloss: "and the Euphrates" }
          ]
        },
        {
          id: "qr2-55-057",
          ar: "وَالنِّيْلِ ،",
          en: "and the Nile,",
          tokens: [
            { surface: "وَالنِّيْلِ", lemma: "نيل", pos: "proper", features: "conj+def.gen", root: "", gloss: "and the Nile" }
          ]
        },
        {
          id: "qr2-55-058",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-059",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "so know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيُّ الأَنْهَارِ ذَكَرَهَا الْكَاتِبُ؟",
          options: ["نَهْرُ السِّنْدِ وَدِجْلَةَ وَالْفُرَاتِ وَالنِّيْلِ", "نَهْرُ الأَمَازُوْنِ فَقَط", "بُحَيْرَاتُ إِفْرِيْقِيَا"],
          answer: 0,
          qEn: "Which rivers does the writer mention?",
          optionsEn: ["The Sindh (Indus), Tigris, Euphrates, and Nile", "Only the Amazon river", "The lakes of Africa"]
        }
      ]
    },
    {
      en: "You may have seen, in the mornings of winter days, something like smoke -- people call it fog -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-060",
          ar: "لَعَلَّكَ رَأَيْتَ فِي الصَّبَاحِ أَيَّامَ الشِّتَاءِ مِثْلَ الدُّخَانِ ،",
          en: "You may have seen, in the morning of winter days, something like smoke,",
          tokens: [
            { surface: "لَعَلَّكَ", lemma: "لعل", pos: "part", features: "part+2ms", root: "", gloss: "perhaps you" },
            { surface: "رَأَيْتَ", lemma: "رأى", pos: "verb", features: "perf.2ms", root: "ر أ ي", gloss: "you saw" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الصَّبَاحِ", lemma: "صباح", pos: "noun", features: "def.gen", root: "ص ب ح", gloss: "the morning" },
            { surface: "أَيَّامَ", lemma: "يوم", pos: "noun", features: "acc.pl.constr", root: "ي و م", gloss: "the days (of)" },
            { surface: "الشِّتَاءِ", lemma: "شتاء", pos: "noun", features: "def.gen", root: "ش ت و", gloss: "the winter" },
            { surface: "مِثْلَ", lemma: "مثل", pos: "noun", features: "acc.constr", root: "م ث ل", gloss: "like" },
            { surface: "الدُّخَانِ", lemma: "دخان", pos: "noun", features: "def.gen", root: "د خ ن", gloss: "the smoke" }
          ]
        },
        {
          id: "qr2-55-061",
          ar: "وَيُسَمِّيْهِ النَّاسُ الضَّبَابَ ،",
          en: "and people call it fog,",
          tokens: [
            { surface: "وَيُسَمِّيْهِ", lemma: "سمى", pos: "verb", features: "conj+impf.3ms+3ms", root: "س م و", gloss: "and calls it" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "الضَّبَابَ", lemma: "ضباب", pos: "noun", features: "def.acc", root: "ض ب ب", gloss: "the fog" }
          ]
        },
        {
          id: "qr2-55-062",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-063",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "so know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يُسَمِّي النَّاسُ مَا يُشْبِهُ الدُّخَانَ فِيْ صَبَاحِ الشِّتَاءِ؟",
          options: ["الضَّبَابَ", "الْغُبَارَ", "الرَّمَادَ"],
          answer: 0,
          qEn: "What do people call what resembles smoke in the winter morning?",
          optionsEn: ["Fog", "Dust", "Ash"]
        }
      ]
    },
    {
      en: "You may also have seen drops on the leaves of trees, and on grass and flowers, in the days of winter -- people call it light rain and dew -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-064",
          ar: "وَلَعَلَّكَ رَأَيْتَ قَطَرَاتٍ عَلَىٰ أَوْرَاقِ الأَشْجَارِ ،",
          en: "And you may have seen drops on the leaves of trees,",
          tokens: [
            { surface: "وَلَعَلَّكَ", lemma: "لعل", pos: "part", features: "conj+part+2ms", root: "", gloss: "and perhaps you" },
            { surface: "رَأَيْتَ", lemma: "رأى", pos: "verb", features: "perf.2ms", root: "ر أ ي", gloss: "you saw" },
            { surface: "قَطَرَاتٍ", lemma: "قطرة", pos: "noun", features: "indef.pl.acc", root: "ق ط ر", gloss: "drops" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "أَوْرَاقِ", lemma: "ورق", pos: "noun", features: "pl.gen.constr", root: "و ر ق", gloss: "the leaves (of)" },
            { surface: "الأَشْجَارِ", lemma: "شجر", pos: "noun", features: "def.pl.gen", root: "ش ج ر", gloss: "the trees" }
          ]
        },
        {
          id: "qr2-55-065",
          ar: "وَعَلَىٰ الْعُشْبِ وَالأَزْهَارِ ،",
          en: "and on grass and flowers,",
          tokens: [
            { surface: "وَعَلَىٰ", lemma: "على", pos: "prep", features: "conj+prep", root: "", gloss: "and on" },
            { surface: "الْعُشْبِ", lemma: "عشب", pos: "noun", features: "def.gen", root: "ع ش ب", gloss: "the grass" },
            { surface: "وَالأَزْهَارِ", lemma: "زهر", pos: "noun", features: "conj+def.pl.gen", root: "ز ه ر", gloss: "and the flowers" }
          ]
        },
        {
          id: "qr2-55-066",
          ar: "فِيْ أَيَّامِ الشِّتَاءِ ،",
          en: "in the days of winter,",
          tokens: [
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "أَيَّامِ", lemma: "يوم", pos: "noun", features: "gen.pl.constr", root: "ي و م", gloss: "the days (of)" },
            { surface: "الشِّتَاءِ", lemma: "شتاء", pos: "noun", features: "def.gen", root: "ش ت و", gloss: "the winter" }
          ]
        },
        {
          id: "qr2-55-067",
          ar: "وَيُسَمِّيْهَا النَّاسُ الطَّلَّ وَالنَّدَىٰ ،",
          en: "and people call it light rain and dew,",
          tokens: [
            { surface: "وَيُسَمِّيْهَا", lemma: "سمى", pos: "verb", features: "conj+impf.3ms+3fs", root: "س م و", gloss: "and calls it" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "الطَّلَّ", lemma: "طل", pos: "noun", features: "def.acc", root: "ط ل ل", gloss: "the light rain" },
            { surface: "وَالنَّدَىٰ", lemma: "ندى", pos: "noun", features: "conj+def.acc", root: "ن د و", gloss: "and the dew" }
          ]
        },
        {
          id: "qr2-55-068",
          ar: "وَأَنَا هُنَا.",
          en: "And I am here.",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-069",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "So know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يُسَمِّي النَّاسُ الْقَطَرَاتِ الَّتِيْ تُرَىٰ عَلَىٰ أَوْرَاقِ الأَشْجَارِ وَالْعُشْبِ فِي الشِّتَاءِ؟",
          options: ["الطَّلَّ وَالنَّدَىٰ", "الْمَطَرَ وَالْبَرَدَ", "الثَّلْجَ وَالْجَلِيْدَ"],
          answer: 0,
          qEn: "What do people call the drops seen on the leaves of trees and grass in winter?",
          optionsEn: ["Light rain (ṭall) and dew (nadā)", "Rain and hail", "Snow and ice"]
        }
      ]
    },
    {
      en: "I may freeze artificially in factories, and people are keen to have me in summer, refusing to drink water without this ice and not quenching their thirst except with it -- and I am here, so know me.",
      sentences: [
        {
          id: "qr2-55-070",
          ar: "وَقَدْ أَجْمُدُ بِالصِّنَاعَةِ فِي الْمَصَانِعِ ،",
          en: "I may freeze artificially in the factories,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "أَجْمُدُ", lemma: "جمد", pos: "verb", features: "impf.1cs", root: "ج م د", gloss: "I freeze" },
            { surface: "بِالصِّنَاعَةِ", lemma: "صناعة", pos: "noun", features: "prep+def.gen", root: "ص ن ع", gloss: "artificially" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَصَانِعِ", lemma: "مصنع", pos: "noun", features: "def.pl.gen", root: "ص ن ع", gloss: "the factories" }
          ]
        },
        {
          id: "qr2-55-071",
          ar: "وَيَحْرِصُ عَلَيَّ النَّاسُ أَيَّامَ الصَّيْفِ ،",
          en: "and people are keen to have me in summer days,",
          tokens: [
            { surface: "وَيَحْرِصُ", lemma: "حرص", pos: "verb", features: "conj+impf.3ms", root: "ح ر ص", gloss: "and is keen" },
            { surface: "عَلَيَّ", lemma: "على", pos: "prep", features: "prep+1cs", root: "", gloss: "about me" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "أَيَّامَ", lemma: "يوم", pos: "noun", features: "acc.pl.constr", root: "ي و م", gloss: "the days (of)" },
            { surface: "الصَّيْفِ", lemma: "صيف", pos: "noun", features: "def.gen", root: "ص ي ف", gloss: "the summer" }
          ]
        },
        {
          id: "qr2-55-072",
          ar: "فَلاَ يَشْرَبُوْنَ الْمَاءَ بِغَيْرِ هٰذَا الْجَمَدِ ،",
          en: "not drinking water without this ice,",
          tokens: [
            { surface: "فَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَشْرَبُوْنَ", lemma: "شرب", pos: "verb", features: "impf.3mpl", root: "ش ر ب", gloss: "they drink" },
            { surface: "الْمَاءَ", lemma: "ماء", pos: "noun", features: "def.acc", root: "م و ه", gloss: "the water" },
            { surface: "بِغَيْرِ", lemma: "غير", pos: "noun", features: "prep+gen", root: "غ ي ر", gloss: "without" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "الْجَمَدِ", lemma: "جمد", pos: "noun", features: "def.gen", root: "ج م د", gloss: "the ice" }
          ]
        },
        {
          id: "qr2-55-073",
          ar: "وَلاَ يَرْوَوْنَ إِلاَّ بِهِ ،",
          en: "and not quenching their thirst except with it,",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَرْوَوْنَ", lemma: "روي", pos: "verb", features: "impf.3mpl", root: "ر و ي", gloss: "they quench thirst" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "with it" }
          ]
        },
        {
          id: "qr2-55-074",
          ar: "وَأَنَا هُنَا ،",
          en: "and I am here,",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom.1cs", root: "", gloss: "and I" },
            { surface: "هُنَا", lemma: "هنا", pos: "adv", features: "adv", root: "", gloss: "here" }
          ]
        },
        {
          id: "qr2-55-075",
          ar: "فَاعْرِفُوْنِيْ.",
          en: "so know me.",
          tokens: [
            { surface: "فَاعْرِفُوْنِيْ", lemma: "عرف", pos: "verb", features: "conj+imp.2mpl+1cs", root: "ع ر ف", gloss: "so know me" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا يَحْرِصُ النَّاسُ عَلَىٰ الْجَمَدِ فِيْ أَيَّامِ الصَّيْفِ؟",
          options: ["لأَنَّهُمْ لاَ يَشْرَبُوْنَ الْمَاءَ وَلاَ يَرْوَوْنَ إِلاَّ بِهِ", "لأَنَّهُ رَخِيْصُ الثَّمَنِ", "لأَنَّهُ يُضِيْءُ الْبَيْتَ"],
          answer: 0,
          qEn: "Why are people keen to have ice in summer days?",
          optionsEn: ["Because they won't drink water or quench their thirst except with it", "Because it is cheap", "Because it lights the house"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "",
        post: "الْمَاءُ فِي الْقِدْرِ عَلَى النَّارِ.",
        en: "The water boiled in the pot on the fire.",
        options: ["غَلَا", "غَلَوْتُ", "تَغْلِي", "يَغْلُوْنَ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- it boiled.",
          "1st person singular perfect -- I boiled.",
          "2nd masculine or 3rd feminine present -- you/it boils.",
          "3rd masculine plural present -- they boil."
        ]
      },
      {
        type: "cloze",
        pre: "",
        post: "الْمَاءُ مِنْ شِدَّةِ الْبَرْدِ.",
        en: "The water froze from the intensity of the cold.",
        options: ["جَمَدَ", "جَمَدْتُ", "تَجْمُدُ", "يَجْمُدُوْنَ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- it froze.",
          "1st person singular perfect -- I froze.",
          "2nd masculine or 3rd feminine present -- it/she freezes.",
          "3rd masculine plural present -- they freeze."
        ]
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "النَّاسُ عَلَى الْجَمَدِ فِيْ أَيَّامِ الصَّيْفِ ،",
        en: "and people are keen to have ice in summer days,",
        options: ["يَحْرِصُ", "حَرَصْتُ", "تَحْرِصُ", "نَحْرِصُ"],
        answer: 0,
        rationales: [
          "3rd masculine singular present -- he is keen.",
          "1st person singular perfect -- I was keen.",
          "2nd masculine or 3rd feminine present -- you/she is keen.",
          "1st person plural present -- we are keen."
        ]
      }
    ],
    shift: [
      {
        type: "shift",
        base: "أَهْبِطُ مِنَ الْجِبَالِ",
        pre: "",
        post: "مِنَ الْجِبَالِ",
        targetPerson: "هِيَ",
        targetEn: "she/it",
        options: ["تَهْبِطُ", "أَهْبِطُ", "يَهْبِطُوْنَ", "نَهْبِطُ"],
        answer: 0,
        rationales: [
          "3rd feminine singular -- she/it descends.",
          "1st person singular -- I descend.",
          "3rd masculine plural -- they descend.",
          "1st person plural -- we descend."
        ]
      },
      {
        type: "shift",
        base: "أَعْرِفُ الْمَطَرَ",
        pre: "",
        post: "الْمَطَرَ",
        targetPerson: "أَنْتُمْ",
        targetEn: "you (m. pl.)",
        options: ["تَعْرِفُوْنَ", "أَعْرِفُ", "يَعْرِفُ", "نَعْرِفُ"],
        answer: 0,
        rationales: [
          "2nd masculine plural -- you (pl.) know.",
          "1st person singular -- I know.",
          "3rd masculine singular -- he knows.",
          "1st person plural -- we know."
        ]
      }
    ]
  }
};

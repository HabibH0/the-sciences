// القراءة الراشدة, volume two, chapter 52 (printed heading "٥٢") --
// الرِّمَايَةُ -- "Marksmanship".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 176-178.
//
// A first-person narrative: a boy asks his father for a small air rifle
// to hunt nuisance birds and practice shooting; he starts out missing
// every shot, then gradually improves until he can hit a coin-sized
// target once in three rounds. He describes a rich man's mechanical
// target -- a metal plate with a coin-like disc that, when struck,
// releases a spring-loaded iron soldier figure that raises its cap in
// salute, powered by a gunpowder charge sealed with cartridge-paper.
// After months of practice he graduates to a full-size rifle for real
// hunting, then hears his teacher relate the hadith in which the
// Prophet ﷺ urged the Companions to practice archery ("Shoot, O sons of
// Ishmael, for your father was an archer" / "Indeed, strength is
// archery") -- leaving him satisfied that his hobby was not idle time
// wasted.
//
// Sentence segmentation follows the established mechanical rule: split
// at every `،`، `.`، `؟`، `!` (not at colons). The quoted hadith
// (qr2-52-043/044/045) is handled the same way as ch50's dialogue tags:
// the colon before each «...» quotation stays attached to what follows,
// but the `!` after "إِسْمَاعِيْلَ" and the `،`/`.` inside the quoted
// text itself DO split, exactly per the mechanical rule -- producing
// three sentences out of what is one continuous quotation in the
// source.
//
// The source sets off the mechanical target's inner workings with a
// colon before an itemized description ("رَسْمٌ مِنْ حَدِيْدٍ:
// جُنْدِيٌّ فِيْ لِبَاسِ جُنْدِيٍّ ،" qr2-52-023) -- colon stays
// attached per the established rule, same as the dialogue tags above.
//
// Footnote-marker convention (as in ch45-51): markers "(١)"-"(٢)" on
// p.176, "(١)"-"(٢)" on p.177, and "(١)" on p.178 are book furniture,
// excluded from `ar` and not tokenized; each footnoted lemma carries
// the footnote's defining text in its `book_note`: ولغ، حقة on p.176؛
// بارى (footnoted as "اشتد" is too, but that word is NOT a `newWords`
// entry -- see below) on p.177؛ مناضلة on p.178.
//
// Two same-spelling homograph flags for future reconciliation (the
// "سار"/ch49 precedent: reuse the lemma key, override pos/root/gloss at
// the token level, do NOT add to `newWords`): "قدر" (qr2-52-038,
// "قَدَرْتُ", "I became able") is the SAME spelling already taught as
// the noun "قِدْر" ("pot, cooking-pot," v1 ch06) -- here it is the
// plain Form I verb "قَدَرَ يَقْدِرُ" (root ق د ر, "to be able, have
// the power to"). "ساعد" (qr2-52-014, "سَاعِدَيَّ", "my two forearms")
// is the SAME spelling already taught as the Form III verb "ساعد" ("to
// help," v1 ch06) -- here it is the primitive noun "سَاعِد" (pl.
// "سَوَاعِد", "forearm, upper arm"). Neither is footnoted in this
// chapter (p.176's footnotes are only ولغ and حقة, checked directly
// against the page image), so no `lemmas` entry is added for either --
// documented here only, with the token-level pos/root/gloss override
// carrying the correct noun sense.
//
// Two related-root reuses already resolved in earlier chapters, so NOT
// re-flagged here: "ظهر" (qr2-52-019/032, "to appear") reuses the verb
// sense of "ظهر" already established in own ch46 (distinct from the
// noun "Ẓuhr, midday" from v1 ch06, which that chapter's own homograph
// handling covers); "صاد"/"صيد" are naturally distinct spellings (the
// verb root ص ي د realized as عين-الفعل alif in "صَادَ" vs. the masdar
// "صَيْد") rather than a true homograph, so "صيد" (qr2-52-039, "the
// hunt") is simply added as its own new noun below alongside the
// already-known verb "صاد" (own ch47).
//
// Several distinct-derived-form cases (the "بلّغ"/ch49 precedent --
// new nominal/verbal forms built on an already-taught root, kept as
// their OWN new lemma entries): "رمي" (the masdar "archery, shooting")
// and "رمى" (the plain verb "to shoot, throw") are both new despite
// being the chapter's central theme -- neither had been tokenized
// before in this book. "رامي" (qr2-52-044, the active participle "an
// archer, marksman") and "مصيب" (qr2-52-032, "one who hits the mark")
// are likewise kept as their own new entries rather than folded into
// "رمى"/"أصاب", as is "رافع" (qr2-52-032, "raising," from the
// already-known verb "رفع" v1 ch09) and "آذى" (qr2-52-002, Form IV "to
// harm, annoy," distinct from the already-known noun "أذى", "harm,"
// own ch42) and "إصابة" (qr2-52-031, the verbal noun "a hit, a strike,"
// alongside the new verb "أصاب").
//
// Vocabulary notes: "سأل"، "أبي"، "أن"، "اشترى" (reused for both
// "يَشْتَرِيَ" qr2-52-001 and "فَاشْتَرَىٰ" qr2-52-004)، "لي"، "الذي"،
// "كثيرا"، "في"، "الماء"، "على"، "كنت"، "إذا"، "رجع"، "من"، "المدرسة"،
// "أو"، "كان"، "يوم"، "عطلة"، "أخذ"، "عدد"، "ذهب"، "إلى"، "البستان"،
// "الأول"، "لا"، "كل"، "مرة"، "ثم"، "صار"، "ثلاث"، "حتى"، "شهر"
// (reused for the dual "شَهْرَيْنِ" qr2-52-013 and the plural
// "أَشْهُرٍ" qr2-52-038)، "رأى"، "عند"، "رجل"، "الأغنياء"، "شيئا"،
// "غريبا"، "وجه"، "مثل"، "له"، "بجانب"، "هذا"، "بعض"، "يد"، "أشار"،
// "أخبر"، "كأن"، "نجاح"، "الناس"، "لم"، "يكن"، "شيء"، "تحرك"، "مكان"،
// "أني"، "المرة"، "الثالثة"، "دائما"، "سر"/"سرور"، "عظيما"، "بعد"،
// "أستعمل"، "الكبيرة"، "الأخضر"، "نوع"، "الطيور" (plural of the new
// "طائر", reused throughout)، "المعلم"، "يقول"، "إن"، "النبي"، "قال"،
// "بن" (reused for the construct plural "بَنِيْ" qr2-52-043)، "أب"،
// "ألا"، "القوة"، "علمت"، "عملي"، "أضيع"، "وقتي" were all already
// introduced and are reused here rather than re-listed as new words.
export const CHAPTER = {
  id: "ch52",
  title: {
    ar: "الرِّمَايَةُ",
    en: "Marksmanship"
  },
  pages: [176, 177, 178],
  newWords: [
    "بندقية", "صغير", "طائر", "يمام", "حمام", "غراب", "آذى", "ولغ",
    "تمرن", "رمي", "حقة", "رشاش", "رمى", "أصاب", "أخطأ", "طلقة",
    "اشتد", "صفيحة", "فلس", "لون", "لمع", "جراب", "شحن",
    "بارود", "سد", "قرطاس", "رسم", "حديد", "قبعة", "بارى", "انطلق",
    "مدفع", "انفتح", "باب", "علامة", "هدف", "إصابة", "رافع", "مصيب",
    "هنأ", "صيد", "بط", "حث", "شارك", "مناضلة", "إسماعيل", "رامي", "عبث"
  ],
  lemmas: {
    "ولغ": {
      root: "و ل غ", pos: "verb", gloss: "to lap up (water)",
      book_note: "وَلَغَ يَلَغُ وُلُوْغاً: الْحَيَوَانُ الإِنَاءَ وَفِيْهِ: شَرِبَ مَا فِيْهِ بِطَرَفِ لِسَانِهِ. وَالطُّيُوْرُ: شَرِبَتْ مَا فِيْهِ مِنْ مِنْقَارِهَا."
    },
    "حقة": {
      root: "ح ق ق", pos: "noun", gloss: "a small box, case",
      book_note: "حُقَّة جَمْعُ حُقَقٍ وَحِقَاقٍ: وِعَاءٌ صَغِيْرٌ ذُوْ غِطَاءٍ يُتَّخَذُ مِنْ عَاجٍ أَوْ زُجَاجٍ أَوْ غَيْرِهِمَا."
    },
    "بارى": {
      root: "ب ر ي", pos: "verb", gloss: "to compete, vie with",
      book_note: "بَارَىٰ يُبَارِيْ مُبَارَاةً: فُلاَنٌ فِي الأَمْرِ: عَارَضَهُ فِيْهِ أَوْ فَعَلَ مِثْلَ فِعْلِهِ."
    },
    "مناضلة": {
      root: "ن ض ل", pos: "noun", gloss: "a contest, competition (in archery)",
      book_note: "الْمُنَاضَلَةُ: الْمُقَاوَمَةُ وَالْمُنَافَسَةُ."
    },
    "بندقية": { root: "ب ن د ق", pos: "noun", gloss: "a rifle" },
    "صغير": { root: "ص غ ر", pos: "adj", gloss: "small" },
    "طائر": { root: "ط ي ر", pos: "noun", gloss: "a bird" },
    "يمام": { root: "ي م م", pos: "noun", gloss: "wild pigeons, ring-doves" },
    "حمام": { root: "ح م م", pos: "noun", gloss: "pigeons, doves" },
    "غراب": { root: "غ ر ب", pos: "noun", gloss: "a crow, raven" },
    "آذى": { root: "أ ذ ي", pos: "verb", gloss: "to harm, annoy" },
    "تمرن": { root: "م ر ن", pos: "verb", gloss: "to train, practice" },
    "رمي": { root: "ر م ي", pos: "noun", gloss: "archery, shooting" },
    "رشاش": { root: "ر ش ش", pos: "noun", gloss: "pellets, buckshot" },
    "رمى": { root: "ر م ي", pos: "verb", gloss: "to shoot, throw" },
    "أصاب": { root: "ص و ب", pos: "verb", gloss: "to hit (a target)" },
    "أخطأ": { root: "خ ط أ", pos: "verb", gloss: "to miss, err" },
    "طلقة": { root: "ط ل ق", pos: "noun", gloss: "a shot, round" },
    "اشتد": { root: "ش د د", pos: "verb", gloss: "to become strong, intense" },
    "صفيحة": { root: "ص ف ح", pos: "noun", gloss: "a metal plate, sheet" },
    "فلس": { root: "ف ل س", pos: "noun", gloss: "a coin, penny" },
    "لون": { root: "ل و ن", pos: "noun", gloss: "a color" },
    "لمع": { root: "ل م ع", pos: "verb", gloss: "to shine, gleam" },
    "جراب": { root: "ج ر ب", pos: "noun", gloss: "a sack, pouch" },
    "شحن": { root: "ش ح ن", pos: "verb", gloss: "to load, charge" },
    "بارود": { root: "", pos: "noun", gloss: "gunpowder" },
    "سد": { root: "س د د", pos: "verb", gloss: "to plug, stop up" },
    "قرطاس": { root: "", pos: "noun", gloss: "paper, cartridge-paper" },
    "رسم": { root: "ر س م", pos: "noun", gloss: "a figure, image" },
    "حديد": { root: "ح د د", pos: "noun", gloss: "iron" },
    "قبعة": { root: "ق ب ع", pos: "noun", gloss: "a cap" },
    "انطلق": { root: "ط ل ق", pos: "verb", gloss: "to be released, go off" },
    "مدفع": { root: "د ف ع", pos: "noun", gloss: "a cannon, gun" },
    "انفتح": { root: "ف ت ح", pos: "verb", gloss: "to open (intransitive)" },
    "باب": { root: "ب و ب", pos: "noun", gloss: "a door" },
    "علامة": { root: "ع ل م", pos: "noun", gloss: "a sign, mark" },
    "هدف": { root: "ه د ف", pos: "noun", gloss: "a target" },
    "إصابة": { root: "ص و ب", pos: "noun", gloss: "a hit, a strike" },
    "رافع": { root: "ر ف ع", pos: "adj", gloss: "raising" },
    "مصيب": { root: "ص و ب", pos: "noun", gloss: "one who hits the mark" },
    "هنأ": { root: "ه ن أ", pos: "verb", gloss: "to congratulate" },
    "صيد": { root: "ص ي د", pos: "noun", gloss: "hunting" },
    "بط": { root: "ب ط ط", pos: "noun", gloss: "ducks" },
    "حث": { root: "ح ث ث", pos: "verb", gloss: "to urge, encourage" },
    "شارك": { root: "ش ر ك", pos: "verb", gloss: "to participate, take part" },
    "إسماعيل": { root: "", pos: "proper", gloss: "Ishmael" },
    "رامي": { root: "ر م ي", pos: "noun", gloss: "an archer, marksman" },
    "عبث": { root: "ع ب ث", pos: "noun", gloss: "frivolity, futility" }
  },
  paragraphs: [
    {
      en: "I asked my father to buy me a small rifle, so I could hunt birds -- like ring-doves, pigeons, and the crow that annoys me a lot and laps water from it -- and practice shooting, so he bought me a rifle and a small case of pellets.",
      sentences: [
        {
          id: "qr2-52-001",
          ar: "سَأَلْتُ أَبِيْ أَنْ يَشْتَرِيَ لِيْ بُنْدُقِيَّةً صَغِيْرَةً ،",
          en: "I asked my father to buy me a small rifle,",
          tokens: [
            { surface: "سَأَلْتُ", lemma: "سأل", pos: "verb", features: "perf.1cs", root: "س أ ل", gloss: "I asked" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "acc+1cs", root: "أ ب و", gloss: "my father" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَشْتَرِيَ", lemma: "اشترى", pos: "verb", features: "subj.3ms", root: "ش ر ي", gloss: "buy" },
            { surface: "لِيْ", lemma: "ل", pos: "prep", features: "prep+1cs", root: "", gloss: "for me" },
            { surface: "بُنْدُقِيَّةً", lemma: "بندقية", pos: "noun", features: "indef.acc", root: "ب ن د ق", gloss: "a rifle" },
            { surface: "صَغِيْرَةً", lemma: "صغير", pos: "adj", features: "indef.acc.f", root: "ص غ ر", gloss: "small" }
          ]
        },
        {
          id: "qr2-52-002",
          ar: "لأَصِيْدَ الطُّيُوْرَ: كَالْيَمَامِ وَالْحَمَامِ وَالْغُرَابِ الَّذِيْ يُؤْذِيْنِيْ كَثِيْراً وَيَلِغُ فِي الْمَاءِ ،",
          en: "so I could hunt birds -- like ring-doves, pigeons, and the crow that annoys me a lot and laps water from it,",
          tokens: [
            { surface: "لأَصِيْدَ", lemma: "صاد", pos: "verb", features: "prep+subj.1cs", root: "ص ي د", gloss: "so I hunt" },
            { surface: "الطُّيُوْرَ", lemma: "طائر", pos: "noun", features: "def.pl.acc", root: "ط ي ر", gloss: "the birds" },
            { surface: "كَالْيَمَامِ", lemma: "يمام", pos: "noun", features: "prep+def.gen", root: "ي م م", gloss: "like ring-doves" },
            { surface: "وَالْحَمَامِ", lemma: "حمام", pos: "noun", features: "conj+def.gen", root: "ح م م", gloss: "and pigeons" },
            { surface: "وَالْغُرَابِ", lemma: "غراب", pos: "noun", features: "conj+def.gen", root: "غ ر ب", gloss: "and the crow" },
            { surface: "الَّذِيْ", lemma: "الذي", pos: "rel", features: "rel.ms", root: "", gloss: "which" },
            { surface: "يُؤْذِيْنِيْ", lemma: "آذى", pos: "verb", features: "impf.3ms+1cs", root: "أ ذ ي", gloss: "annoys me" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "a lot" },
            { surface: "وَيَلِغُ", lemma: "ولغ", pos: "verb", features: "conj+impf.3ms", root: "و ل غ", gloss: "and laps" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْمَاءِ", lemma: "ماء", pos: "noun", features: "def.gen", root: "م و ه", gloss: "the water" }
          ]
        },
        {
          id: "qr2-52-003",
          ar: "وَأَتَمَرَّنَ عَلَىٰ الرَّمْيِ ،",
          en: "and practice shooting,",
          tokens: [
            { surface: "وَأَتَمَرَّنَ", lemma: "تمرن", pos: "verb", features: "conj+subj.1cs", root: "م ر ن", gloss: "and I practice" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "الرَّمْيِ", lemma: "رمي", pos: "noun", features: "def.gen", root: "ر م ي", gloss: "shooting" }
          ]
        },
        {
          id: "qr2-52-004",
          ar: "فَاشْتَرَىٰ لِيْ بُنْدُقِيَّةً وَحُقَّةً مِنَ الرَّشَاشِ.",
          en: "so he bought me a rifle and a small case of pellets.",
          tokens: [
            { surface: "فَاشْتَرَىٰ", lemma: "اشترى", pos: "verb", features: "conj+perf.3ms", root: "ش ر ي", gloss: "so he bought" },
            { surface: "لِيْ", lemma: "ل", pos: "prep", features: "prep+1cs", root: "", gloss: "for me" },
            { surface: "بُنْدُقِيَّةً", lemma: "بندقية", pos: "noun", features: "indef.acc", root: "ب ن د ق", gloss: "a rifle" },
            { surface: "وَحُقَّةً", lemma: "حقة", pos: "noun", features: "conj+indef.acc", root: "ح ق ق", gloss: "and a small case" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الرَّشَاشِ", lemma: "رشاش", pos: "noun", features: "def.gen", root: "ر ش ش", gloss: "the pellets" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا طَلَبَ الرَّاوِيْ مِنْ أَبِيْهِ أَنْ يَشْتَرِيَ لَهُ بُنْدُقِيَّةً؟",
          options: ["لِيَصِيْدَ الطُّيُوْرَ الْمُؤْذِيَةَ وَيَتَمَرَّنَ عَلَىٰ الرَّمْيِ", "لِيَبِيْعَهَا وَيَكْسِبَ الْمَالَ", "لِيُهْدِيَهَا إِلَىٰ صَدِيْقِهِ"],
          answer: 0,
          qEn: "Why did the narrator ask his father to buy him a rifle?",
          optionsEn: ["To hunt the annoying birds and practice shooting", "To sell it and earn money", "To give it as a gift to his friend"]
        }
      ]
    },
    {
      en: "Whenever he returned from school, or it was a holiday, he would take the rifle and a number of pellets and go to the garden to shoot at the birds.",
      sentences: [
        {
          id: "qr2-52-005",
          ar: "وَكُنْتُ إِذَا رَجَعْتُ مِنَ الْمَدْرَسَةِ ،",
          en: "Whenever I returned from school,",
          tokens: [
            { surface: "وَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1cs", root: "ك و ن", gloss: "and I would" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "whenever" },
            { surface: "رَجَعْتُ", lemma: "رجع", pos: "verb", features: "perf.1cs", root: "ر ج ع", gloss: "I returned" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْمَدْرَسَةِ", lemma: "مدرسة", pos: "noun", features: "def.gen", root: "د ر س", gloss: "school" }
          ]
        },
        {
          id: "qr2-52-006",
          ar: "أَوْ كَانَ يَوْمُ عُطْلَةٍ أَخَذْتُ الْبُنْدُقِيَّةَ ،",
          en: "or it was a holiday, I would take the rifle,",
          tokens: [
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "it was" },
            { surface: "يَوْمُ", lemma: "يوم", pos: "noun", features: "nom.constr", root: "ي و م", gloss: "a day (of)" },
            { surface: "عُطْلَةٍ", lemma: "عطلة", pos: "noun", features: "indef.gen", root: "ع ط ل", gloss: "holiday" },
            { surface: "أَخَذْتُ", lemma: "أخذ", pos: "verb", features: "perf.1cs", root: "أ خ ذ", gloss: "I took" },
            { surface: "الْبُنْدُقِيَّةَ", lemma: "بندقية", pos: "noun", features: "def.acc", root: "ب ن د ق", gloss: "the rifle" }
          ]
        },
        {
          id: "qr2-52-007",
          ar: "وَعَدَداً مِنَ الرَّشَاشِ ،",
          en: "and a number of pellets,",
          tokens: [
            { surface: "وَعَدَداً", lemma: "عدد", pos: "noun", features: "conj+indef.acc", root: "ع د د", gloss: "and a number" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الرَّشَاشِ", lemma: "رشاش", pos: "noun", features: "def.gen", root: "ر ش ش", gloss: "the pellets" }
          ]
        },
        {
          id: "qr2-52-008",
          ar: "وَذَهَبْتُ إِلَىٰ الْبُسْتَانِ أَرْمِي الطُّيُوْرَ.",
          en: "and go to the garden to shoot at the birds.",
          tokens: [
            { surface: "وَذَهَبْتُ", lemma: "ذهب", pos: "verb", features: "conj+perf.1cs", root: "ذ ه ب", gloss: "and I went" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْبُسْتَانِ", lemma: "بستان", pos: "noun", features: "def.gen", root: "", gloss: "the garden" },
            { surface: "أَرْمِي", lemma: "رمى", pos: "verb", features: "impf.1cs", root: "ر م ي", gloss: "shooting at" },
            { surface: "الطُّيُوْرَ", lemma: "طائر", pos: "noun", features: "def.pl.acc", root: "ط ي ر", gloss: "the birds" }
          ]
        }
      ],
      checks: [
        {
          q: "مَتَىٰ كَانَ الرَّاوِيْ يَذْهَبُ إِلَىٰ الْبُسْتَانِ لِيَرْمِيَ الطُّيُوْرَ؟",
          options: ["إِذَا رَجَعَ مِنَ الْمَدْرَسَةِ أَوْ كَانَ يَوْمَ عُطْلَةٍ", "كُلَّ صَبَاحٍ قَبْلَ الْمَدْرَسَةِ", "فِيْ اللَّيْلِ فَقَطْ"],
          answer: 0,
          qEn: "When did the narrator go to the garden to shoot at the birds?",
          optionsEn: ["Whenever he returned from school or it was a holiday", "Every morning before school", "Only at night"]
        }
      ]
    },
    {
      en: "At first I didn't hit a single bird, and I missed every time; then I came to hit once in three shots, and hunt some birds, until I had trained for two months and my forearms grew strong.",
      sentences: [
        {
          id: "qr2-52-009",
          ar: "وَفِي الأَوَّلِ لاَ أُصِيْبُ طَائِراً ،",
          en: "At first I didn't hit a single bird,",
          tokens: [
            { surface: "وَفِي", lemma: "في", pos: "prep", features: "conj+prep", root: "", gloss: "and in" },
            { surface: "الأَوَّلِ", lemma: "أول", pos: "adj", features: "def.gen", root: "أ و ل", gloss: "the beginning" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "أُصِيْبُ", lemma: "أصاب", pos: "verb", features: "impf.1cs", root: "ص و ب", gloss: "I hit" },
            { surface: "طَائِراً", lemma: "طائر", pos: "noun", features: "indef.acc", root: "ط ي ر", gloss: "a bird" }
          ]
        },
        {
          id: "qr2-52-010",
          ar: "وَأُخْطِىءُ كُلَّ مَرَّةٍ ،",
          en: "and I missed every time;",
          tokens: [
            { surface: "وَأُخْطِىءُ", lemma: "أخطأ", pos: "verb", features: "conj+impf.1cs", root: "خ ط أ", gloss: "and I missed" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "مَرَّةٍ", lemma: "مرة", pos: "noun", features: "indef.gen", root: "م ر ر", gloss: "time" }
          ]
        },
        {
          id: "qr2-52-011",
          ar: "ثُمَّ صِرْتُ أُصِيْبُ مَرَّةً فِيْ ثَلاَثِ طَلَقَاتٍ ،",
          en: "then I came to hit once in three shots,",
          tokens: [
            { surface: "ثُمَّ", lemma: "ثم", pos: "conj", features: "conj", root: "", gloss: "then" },
            { surface: "صِرْتُ", lemma: "صار", pos: "verb", features: "perf.1cs", root: "ص ي ر", gloss: "I came to" },
            { surface: "أُصِيْبُ", lemma: "أصاب", pos: "verb", features: "impf.1cs", root: "ص و ب", gloss: "hit" },
            { surface: "مَرَّةً", lemma: "مرة", pos: "noun", features: "indef.acc", root: "م ر ر", gloss: "once" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "ثَلاَثِ", lemma: "ثلاث", pos: "num", features: "gen.constr", root: "ث ل ث", gloss: "three" },
            { surface: "طَلَقَاتٍ", lemma: "طلقة", pos: "noun", features: "indef.pl.gen", root: "ط ل ق", gloss: "shots" }
          ]
        },
        {
          id: "qr2-52-012",
          ar: "وَأُصِيْدُ بَعْضَ الطُّيُوْرِ ،",
          en: "and hunt some birds,",
          tokens: [
            { surface: "وَأُصِيْدُ", lemma: "صاد", pos: "verb", features: "conj+impf.1cs", root: "ص ي د", gloss: "and I hunt" },
            { surface: "بَعْضَ", lemma: "بعض", pos: "noun", features: "acc.constr", root: "ب ع ض", gloss: "some (of)" },
            { surface: "الطُّيُوْرِ", lemma: "طائر", pos: "noun", features: "def.pl.gen", root: "ط ي ر", gloss: "the birds" }
          ]
        },
        {
          id: "qr2-52-013",
          ar: "حَتَّىٰ تَمَرَّنْتُ فِيْ شَهْرَيْنِ ،",
          en: "until I had trained for two months,",
          tokens: [
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "until" },
            { surface: "تَمَرَّنْتُ", lemma: "تمرن", pos: "verb", features: "perf.1cs", root: "م ر ن", gloss: "I trained" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "شَهْرَيْنِ", lemma: "شهر", pos: "noun", features: "du.gen", root: "ش ه ر", gloss: "two months" }
          ]
        },
        {
          id: "qr2-52-014",
          ar: "وَاشْتَدَّ سَاعِدَيَّ.",
          en: "and my forearms grew strong.",
          tokens: [
            { surface: "وَاشْتَدَّ", lemma: "اشتد", pos: "verb", features: "conj+perf.3ms", root: "ش د د", gloss: "and grew strong" },
            { surface: "سَاعِدَيَّ", lemma: "ساعد", pos: "noun", features: "du.nom+1cs", root: "س ع د", gloss: "my two forearms" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ تَطَوَّرَتْ مَهَارَةُ الرَّاوِيْ فِي الرَّمْيِ؟",
          options: ["مِنْ عَدَمِ الإِصَابَةِ إِلَىٰ الإِصَابَةِ مَرَّةً فِيْ ثَلاَثِ طَلَقَاتٍ بَعْدَ شَهْرَيْنِ مِنَ التَّمَرُّنِ", "كَانَ مَاهِراً مُنْذُ الْمَرَّةِ الأُوْلَىٰ", "لَمْ يَتَحَسَّنْ أَبَداً فَتَرَكَ الرَّمْيَ"],
          answer: 0,
          qEn: "How did the narrator's shooting skill develop?",
          optionsEn: ["From missing entirely to hitting once in three shots after two months of practice", "He was skilled from the very first time", "It never improved, so he gave up shooting"]
        }
      ]
    },
    {
      en: "And I saw at a rich man's house something strange: there was a metal plate, and on its face was something like a coin, having a color that shone and could be seen from afar.",
      sentences: [
        {
          id: "qr2-52-015",
          ar: "وَرَأَيْتُ عِنْدَ رَجُلٍ مِنَ الأَغْنِيَاءِ شَيْئاً غَرِيْباً ،",
          en: "And I saw at a rich man's house something strange,",
          tokens: [
            { surface: "وَرَأَيْتُ", lemma: "رأى", pos: "verb", features: "conj+perf.1cs", root: "ر أ ي", gloss: "and I saw" },
            { surface: "عِنْدَ", lemma: "عند", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "رَجُلٍ", lemma: "رجل", pos: "noun", features: "indef.gen", root: "ر ج ل", gloss: "a man" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الأَغْنِيَاءِ", lemma: "غني", pos: "noun", features: "def.pl.gen", root: "غ ن ي", gloss: "the rich" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "something" },
            { surface: "غَرِيْباً", lemma: "غريب", pos: "adj", features: "indef.acc", root: "غ ر ب", gloss: "strange" }
          ]
        },
        {
          id: "qr2-52-016",
          ar: "كَانَتْ عِنْدَهُ صَفِيْحَةٌ ،",
          en: "there was a metal plate,",
          tokens: [
            { surface: "كَانَتْ", lemma: "كان", pos: "verb", features: "perf.3fs", root: "ك و ن", gloss: "there was" },
            { surface: "عِنْدَهُ", lemma: "عند", pos: "prep", features: "prep+3ms", root: "", gloss: "at his (place)" },
            { surface: "صَفِيْحَةٌ", lemma: "صفيحة", pos: "noun", features: "indef.nom", root: "ص ف ح", gloss: "a metal plate" }
          ]
        },
        {
          id: "qr2-52-017",
          ar: "وَكَانَ عَلَىٰ وَجْهِ الصَّفِيْحَةِ مِثْلُ فَلْسٍ ،",
          en: "and on its face was something like a coin,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "وَجْهِ", lemma: "وجه", pos: "noun", features: "gen.constr", root: "و ج ه", gloss: "the face (of)" },
            { surface: "الصَّفِيْحَةِ", lemma: "صفيحة", pos: "noun", features: "def.gen", root: "ص ف ح", gloss: "the plate" },
            { surface: "مِثْلُ", lemma: "مثل", pos: "noun", features: "nom.constr", root: "م ث ل", gloss: "the like (of)" },
            { surface: "فَلْسٍ", lemma: "فلس", pos: "noun", features: "indef.gen", root: "ف ل س", gloss: "a coin" }
          ]
        },
        {
          id: "qr2-52-018",
          ar: "لَهُ لَوْنٌ يَلْمَعُ ،",
          en: "having a color that shone,",
          tokens: [
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "having" },
            { surface: "لَوْنٌ", lemma: "لون", pos: "noun", features: "indef.nom", root: "ل و ن", gloss: "a color" },
            { surface: "يَلْمَعُ", lemma: "لمع", pos: "verb", features: "impf.3ms", root: "ل م ع", gloss: "that shone" }
          ]
        },
        {
          id: "qr2-52-019",
          ar: "وَيَظْهَرُ مِنْ بَعِيْدٍ.",
          en: "and could be seen from afar.",
          tokens: [
            { surface: "وَيَظْهَرُ", lemma: "ظهر", pos: "verb", features: "conj+impf.3ms", root: "ظ ه ر", gloss: "and appeared" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "بَعِيْدٍ", lemma: "بعيد", pos: "adj", features: "indef.gen", root: "ب ع د", gloss: "afar" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا رَأَىٰ الرَّاوِيْ عِنْدَ رَجُلٍ مِنَ الأَغْنِيَاءِ؟",
          options: ["صَفِيْحَةً عَلَىٰ وَجْهِهَا مِثْلُ فَلْسٍ لاَمِعٍ يَظْهَرُ مِنْ بَعِيْدٍ", "بُنْدُقِيَّةً ذَهَبِيَّةً", "سَيَّارَةً حَدِيْثَةً"],
          answer: 0,
          qEn: "What did the narrator see at a rich man's house?",
          optionsEn: ["A metal plate with something like a shining coin on its face, visible from afar", "A golden rifle", "A modern car"]
        }
      ]
    },
    {
      en: "Beside this coin was something like a pouch, which he would load with gunpowder and seal with cartridge-paper, and on this plate was an iron figure: a soldier in a soldier's uniform, holding a cap in his hand.",
      sentences: [
        {
          id: "qr2-52-020",
          ar: "وَكَانَ بِجَانِبِ هٰذَا الْفَلْسِ مِثْلُ جِرَابٍ ،",
          en: "Beside this coin was something like a pouch,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "بِجَانِبِ", lemma: "جانب", pos: "noun", features: "prep+gen.constr", root: "ج ن ب", gloss: "beside" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "الْفَلْسِ", lemma: "فلس", pos: "noun", features: "def.gen", root: "ف ل س", gloss: "coin" },
            { surface: "مِثْلُ", lemma: "مثل", pos: "noun", features: "nom.constr", root: "م ث ل", gloss: "the like (of)" },
            { surface: "جِرَابٍ", lemma: "جراب", pos: "noun", features: "indef.gen", root: "ج ر ب", gloss: "a pouch" }
          ]
        },
        {
          id: "qr2-52-021",
          ar: "كَانَ يَشْحَنُهُ بِالْبَارُوْدِ ،",
          en: "which he would load with gunpowder,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "he would" },
            { surface: "يَشْحَنُهُ", lemma: "شحن", pos: "verb", features: "impf.3ms+3ms", root: "ش ح ن", gloss: "load it" },
            { surface: "بِالْبَارُوْدِ", lemma: "بارود", pos: "noun", features: "prep+def.gen", root: "", gloss: "with gunpowder" }
          ]
        },
        {
          id: "qr2-52-022",
          ar: "وَيَسُدُّهُ بِالْقِرْطَاسِ ،",
          en: "and seal with cartridge-paper,",
          tokens: [
            { surface: "وَيَسُدُّهُ", lemma: "سد", pos: "verb", features: "conj+impf.3ms+3ms", root: "س د د", gloss: "and plug it" },
            { surface: "بِالْقِرْطَاسِ", lemma: "قرطاس", pos: "noun", features: "prep+def.gen", root: "", gloss: "with cartridge-paper" }
          ]
        },
        {
          id: "qr2-52-023",
          ar: "وَكَانَ فِيْ هٰذِهِ الصَّفِيْحَةِ رَسْمٌ مِنْ حَدِيْدٍ: جُنْدِيٌّ فِيْ لِبَاسِ جُنْدِيٍّ ،",
          en: "and on this plate was an iron figure: a soldier in a soldier's uniform,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "هٰذِهِ", lemma: "هذا", pos: "dem", features: "dem.fs", root: "", gloss: "this" },
            { surface: "الصَّفِيْحَةِ", lemma: "صفيحة", pos: "noun", features: "def.gen", root: "ص ف ح", gloss: "the plate" },
            { surface: "رَسْمٌ", lemma: "رسم", pos: "noun", features: "indef.nom", root: "ر س م", gloss: "a figure" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "حَدِيْدٍ", lemma: "حديد", pos: "noun", features: "indef.gen", root: "ح د د", gloss: "iron" },
            { surface: "جُنْدِيٌّ", lemma: "جندي", pos: "noun", features: "indef.nom", root: "ج ن د", gloss: "a soldier" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "لِبَاسِ", lemma: "لباس", pos: "noun", features: "gen.constr", root: "ل ب س", gloss: "the uniform (of)" },
            { surface: "جُنْدِيٍّ", lemma: "جندي", pos: "noun", features: "indef.gen", root: "ج ن د", gloss: "a soldier" }
          ]
        },
        {
          id: "qr2-52-024",
          ar: "فِيْ يَدِهِ قُبَّعَةٌ.",
          en: "holding a cap in his hand.",
          tokens: [
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "يَدِهِ", lemma: "يد", pos: "noun", features: "gen+3ms", root: "ي د ي", gloss: "his hand" },
            { surface: "قُبَّعَةٌ", lemma: "قبعة", pos: "noun", features: "indef.nom", root: "ق ب ع", gloss: "a cap" }
          ]
        }
      ],
      checks: [
        {
          q: "صِفِ الرَّسْمَ الَّذِيْ كَانَ فِيْ الصَّفِيْحَةِ.",
          options: ["جُنْدِيٌّ مِنْ حَدِيْدٍ فِيْ لِبَاسِ جُنْدِيٍّ، فِيْ يَدِهِ قُبَّعَةٌ", "أَسَدٌ يَزْأَرُ", "شَجَرَةٌ خَضْرَاءُ"],
          answer: 0,
          qEn: "Describe the figure that was on the plate.",
          optionsEn: ["An iron soldier in a soldier's uniform, holding a cap in his hand", "A roaring lion", "A green tree"]
        }
      ]
    },
    {
      en: "We used to compete in shooting, and shoot pellets at this coin; if a person hit the coin, the gun would go off, and people would hear its sound from afar, and the door would open, and an iron man would come out, holding a marker in his hand to point at the target and announce the hit.",
      sentences: [
        {
          id: "qr2-52-025",
          ar: "وَكُنَّا نُبَارِيْ فِي الرَّمْيِ ،",
          en: "We used to compete in shooting,",
          tokens: [
            { surface: "وَكُنَّا", lemma: "كان", pos: "verb", features: "conj+perf.1cpl", root: "ك و ن", gloss: "and we would" },
            { surface: "نُبَارِيْ", lemma: "بارى", pos: "verb", features: "impf.1cpl", root: "ب ر ي", gloss: "compete" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الرَّمْيِ", lemma: "رمي", pos: "noun", features: "def.gen", root: "ر م ي", gloss: "shooting" }
          ]
        },
        {
          id: "qr2-52-026",
          ar: "وَنَرْمِيْ هٰذَا الْفَلْسَ بِالرَّشَّاشِ ،",
          en: "and shoot pellets at this coin;",
          tokens: [
            { surface: "وَنَرْمِيْ", lemma: "رمى", pos: "verb", features: "conj+impf.1cpl", root: "ر م ي", gloss: "and we shoot" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "الْفَلْسَ", lemma: "فلس", pos: "noun", features: "def.acc", root: "ف ل س", gloss: "coin" },
            { surface: "بِالرَّشَّاشِ", lemma: "رشاش", pos: "noun", features: "prep+def.gen", root: "ر ش ش", gloss: "with pellets" }
          ]
        },
        {
          id: "qr2-52-027",
          ar: "فَإِذَا أَصَابَ إِنْسَانٌ الْفَلْسَ انْطَلَقَ الْمِدْفَعُ ،",
          en: "if a person hit the coin, the gun would go off,",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if" },
            { surface: "أَصَابَ", lemma: "أصاب", pos: "verb", features: "perf.3ms", root: "ص و ب", gloss: "hit" },
            { surface: "إِنْسَانٌ", lemma: "إنسان", pos: "noun", features: "indef.nom", root: "أ ن س", gloss: "a person" },
            { surface: "الْفَلْسَ", lemma: "فلس", pos: "noun", features: "def.acc", root: "ف ل س", gloss: "the coin" },
            { surface: "انْطَلَقَ", lemma: "انطلق", pos: "verb", features: "perf.3ms", root: "ط ل ق", gloss: "went off" },
            { surface: "الْمِدْفَعُ", lemma: "مدفع", pos: "noun", features: "def.nom", root: "د ف ع", gloss: "the gun" }
          ]
        },
        {
          id: "qr2-52-028",
          ar: "وَسَمِعَ النَّاسُ صَوْتَهُ مِنْ بَعِيْدٍ ،",
          en: "and people would hear its sound from afar,",
          tokens: [
            { surface: "وَسَمِعَ", lemma: "سمع", pos: "verb", features: "conj+perf.3ms", root: "س م ع", gloss: "and heard" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "صَوْتَهُ", lemma: "صوت", pos: "noun", features: "acc+3ms", root: "ص و ت", gloss: "its sound" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "بَعِيْدٍ", lemma: "بعيد", pos: "adj", features: "indef.gen", root: "ب ع د", gloss: "afar" }
          ]
        },
        {
          id: "qr2-52-029",
          ar: "وَانْفَتَحَ الْبَابُ ،",
          en: "and the door would open,",
          tokens: [
            { surface: "وَانْفَتَحَ", lemma: "انفتح", pos: "verb", features: "conj+perf.3ms", root: "ف ت ح", gloss: "and opened" },
            { surface: "الْبَابُ", lemma: "باب", pos: "noun", features: "def.nom", root: "ب و ب", gloss: "the door" }
          ]
        },
        {
          id: "qr2-52-030",
          ar: "وَخَرَجَ رَجُلٌ مِنْ حَدِيْدٍ ،",
          en: "and an iron man would come out,",
          tokens: [
            { surface: "وَخَرَجَ", lemma: "خرج", pos: "verb", features: "conj+perf.3ms", root: "خ ر ج", gloss: "and came out" },
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "indef.nom", root: "ر ج ل", gloss: "a man" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "حَدِيْدٍ", lemma: "حديد", pos: "noun", features: "indef.gen", root: "ح د د", gloss: "iron" }
          ]
        },
        {
          id: "qr2-52-031",
          ar: "فِيْ يَدِهِ عَلاَمَةٌ يُشِيْرُ بِهَا إِلَىٰ الْهَدَفِ وَيُخْبِرُ بِالإِصَابَةِ.",
          en: "holding a marker in his hand to point at the target and announce the hit.",
          tokens: [
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "يَدِهِ", lemma: "يد", pos: "noun", features: "gen+3ms", root: "ي د ي", gloss: "his hand" },
            { surface: "عَلاَمَةٌ", lemma: "علامة", pos: "noun", features: "indef.nom", root: "ع ل م", gloss: "a marker" },
            { surface: "يُشِيْرُ", lemma: "أشار", pos: "verb", features: "impf.3ms", root: "ش و ر", gloss: "pointing" },
            { surface: "بِهَا", lemma: "ب", pos: "prep", features: "prep+3fs", root: "", gloss: "with it" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "الْهَدَفِ", lemma: "هدف", pos: "noun", features: "def.gen", root: "ه د ف", gloss: "the target" },
            { surface: "وَيُخْبِرُ", lemma: "أخبر", pos: "verb", features: "conj+impf.3ms", root: "خ ب ر", gloss: "and announcing" },
            { surface: "بِالإِصَابَةِ", lemma: "إصابة", pos: "noun", features: "prep+def.gen", root: "ص و ب", gloss: "the hit" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ يَحْدُثُ إِذَا أَصَابَ أَحَدُهُمُ الْفَلْسَ؟",
          options: ["يَنْطَلِقُ الْمِدْفَعُ وَيَخْرُجُ رَجُلٌ مِنْ حَدِيْدٍ يُشِيْرُ إِلَىٰ الْهَدَفِ", "لَا يَحْدُثُ شَيْءٌ عَلَىٰ الإِطْلَاقِ", "تَنْطَفِئُ الأَنْوَارُ"],
          answer: 0,
          qEn: "What would happen if one of them hit the coin?",
          optionsEn: ["The gun would go off and an iron man would come out and point at the target", "Nothing would happen at all", "The lights would go out"]
        }
      ]
    },
    {
      en: "And the soldier would appear, raising his cap, saluting the one who hit it, as if congratulating him on his success.",
      sentences: [
        {
          id: "qr2-52-032",
          ar: "وَظَهَرَ الْجُنْدِيُّ رَافِعاً قُبَّعَتَهُ يُسَلِّمُ عَلَىٰ الْمُصِيْبِ ،",
          en: "And the soldier would appear, raising his cap, saluting the one who hit it,",
          tokens: [
            { surface: "وَظَهَرَ", lemma: "ظهر", pos: "verb", features: "conj+perf.3ms", root: "ظ ه ر", gloss: "and appeared" },
            { surface: "الْجُنْدِيُّ", lemma: "جندي", pos: "noun", features: "def.nom", root: "ج ن د", gloss: "the soldier" },
            { surface: "رَافِعاً", lemma: "رافع", pos: "adj", features: "indef.acc", root: "ر ف ع", gloss: "raising" },
            { surface: "قُبَّعَتَهُ", lemma: "قبعة", pos: "noun", features: "acc+3ms", root: "ق ب ع", gloss: "his cap" },
            { surface: "يُسَلِّمُ", lemma: "سلم", pos: "verb", features: "impf.3ms", root: "س ل م", gloss: "saluting" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "upon" },
            { surface: "الْمُصِيْبِ", lemma: "مصيب", pos: "noun", features: "def.gen", root: "ص و ب", gloss: "the one who hit it" }
          ]
        },
        {
          id: "qr2-52-033",
          ar: "وَكَأَنَّهُ يُهَنِّئُهُ بِنَجَاحِهِ.",
          en: "as if congratulating him on his success.",
          tokens: [
            { surface: "وَكَأَنَّهُ", lemma: "كأن", pos: "part", features: "conj+part+3ms", root: "", gloss: "as if he" },
            { surface: "يُهَنِّئُهُ", lemma: "هنأ", pos: "verb", features: "impf.3ms+3ms", root: "ه ن أ", gloss: "congratulates him" },
            { surface: "بِنَجَاحِهِ", lemma: "نجاح", pos: "noun", features: "prep+gen+3ms", root: "ن ج ح", gloss: "on his success" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ يَفْعَلُ الْجُنْدِيُّ الْحَدِيْدِيُّ عِنْدَ إِصَابَةِ الْهَدَفِ؟",
          options: ["يَظْهَرُ رَافِعاً قُبَّعَتَهُ كَأَنَّهُ يُهَنِّئُ الْمُصِيْبَ", "يَخْتَفِيْ تَحْتَ الصَّفِيْحَةِ", "يُطْلِقُ صَوْتاً عَالِياً فَقَطْ"],
          answer: 0,
          qEn: "What would the iron soldier do when the target was hit?",
          optionsEn: ["He would appear raising his cap, as if congratulating the one who hit it", "He would hide under the plate", "He would only make a loud sound"]
        }
      ]
    },
    {
      en: "But if people missed, nothing would happen: the gun would not go off, and the soldier would not move from his place; and strangely, I always used to hit the coin on the third shot, and whenever the gun went off I was overjoyed.",
      sentences: [
        {
          id: "qr2-52-034",
          ar: "وَإِذَا أَخْطَأَ النَّاسُ لَمْ يَكُنْ شَيْءٌ: لَمْ يَنْطَلِقِ الْمِدْفَعُ ،",
          en: "But if people missed, nothing would happen: the gun would not go off,",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and if" },
            { surface: "أَخْطَأَ", lemma: "أخطأ", pos: "verb", features: "perf.3ms", root: "خ ط أ", gloss: "missed" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَكُنْ", lemma: "كان", pos: "verb", features: "juss.3ms", root: "ك و ن", gloss: "there was" },
            { surface: "شَيْءٌ", lemma: "شيء", pos: "noun", features: "indef.nom", root: "ش ي أ", gloss: "anything" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَنْطَلِقِ", lemma: "انطلق", pos: "verb", features: "juss.3ms", root: "ط ل ق", gloss: "went off" },
            { surface: "الْمِدْفَعُ", lemma: "مدفع", pos: "noun", features: "def.nom", root: "د ف ع", gloss: "the gun" }
          ]
        },
        {
          id: "qr2-52-035",
          ar: "وَلَمْ يَتَحَرَّكِ الْجُنْدِيُّ مِنْ مَكَانِهِ ،",
          en: "and the soldier would not move from his place;",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَتَحَرَّكِ", lemma: "تحرك", pos: "verb", features: "juss.3ms", root: "ح ر ك", gloss: "moved" },
            { surface: "الْجُنْدِيُّ", lemma: "جندي", pos: "noun", features: "def.nom", root: "ج ن د", gloss: "the soldier" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "مَكَانِهِ", lemma: "مكان", pos: "noun", features: "gen+3ms", root: "ك و ن", gloss: "his place" }
          ]
        },
        {
          id: "qr2-52-036",
          ar: "وَمِنَ الْغَرِيْبِ أَنِّي كُنْتُ أُصِيْبُ الْفَلْسَ فِي الْمَرَّةِ الثَّالِثَةِ دَائِماً ،",
          en: "and strangely, I always used to hit the coin on the third shot,",
          tokens: [
            { surface: "وَمِنَ", lemma: "من", pos: "prep", features: "conj+prep", root: "", gloss: "and of" },
            { surface: "الْغَرِيْبِ", lemma: "غريب", pos: "adj", features: "def.gen", root: "غ ر ب", gloss: "the strange" },
            { surface: "أَنِّي", lemma: "أن", pos: "part", features: "part+1cs", root: "", gloss: "that I" },
            { surface: "كُنْتُ", lemma: "كان", pos: "verb", features: "perf.1cs", root: "ك و ن", gloss: "used to" },
            { surface: "أُصِيْبُ", lemma: "أصاب", pos: "verb", features: "impf.1cs", root: "ص و ب", gloss: "hit" },
            { surface: "الْفَلْسَ", lemma: "فلس", pos: "noun", features: "def.acc", root: "ف ل س", gloss: "the coin" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الْمَرَّةِ", lemma: "مرة", pos: "noun", features: "def.gen", root: "م ر ر", gloss: "the time" },
            { surface: "الثَّالِثَةِ", lemma: "ثالث", pos: "adj", features: "def.gen.f", root: "ث ل ث", gloss: "the third" },
            { surface: "دَائِماً", lemma: "دائما", pos: "adv", features: "indef.acc", root: "د و م", gloss: "always" }
          ]
        },
        {
          id: "qr2-52-037",
          ar: "وَإِذَا انْطَلَقَ الْمِدْفَعُ سُرِرْتُ سُرُوْراً عَظِيْماً.",
          en: "and whenever the gun went off I was overjoyed.",
          tokens: [
            { surface: "وَإِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "and whenever" },
            { surface: "انْطَلَقَ", lemma: "انطلق", pos: "verb", features: "perf.3ms", root: "ط ل ق", gloss: "went off" },
            { surface: "الْمِدْفَعُ", lemma: "مدفع", pos: "noun", features: "def.nom", root: "د ف ع", gloss: "the gun" },
            { surface: "سُرِرْتُ", lemma: "سر", pos: "verb", features: "perf.pass.1cs", root: "س ر ر", gloss: "I was gladdened" },
            { surface: "سُرُوْراً", lemma: "سرور", pos: "noun", features: "indef.acc", root: "س ر ر", gloss: "with joy" },
            { surface: "عَظِيْماً", lemma: "عظيم", pos: "adj", features: "indef.acc", root: "ع ظ م", gloss: "great" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ يَحْدُثُ إِذَا أَخْطَأَ الرَّامِيْ الْهَدَفَ؟",
          options: ["لَا يَنْطَلِقُ الْمِدْفَعُ وَلَا يَتَحَرَّكُ الْجُنْدِيُّ مِنْ مَكَانِهِ", "يَنْطَلِقُ الْمِدْفَعُ مَرَّتَيْنِ", "يَسْقُطُ الْجُنْدِيُّ أَرْضاً"],
          answer: 0,
          qEn: "What would happen if the shooter missed the target?",
          optionsEn: ["The gun wouldn't go off and the soldier wouldn't move from his place", "The gun would go off twice", "The soldier would fall to the ground"]
        }
      ]
    },
    {
      en: "And after some months I became able to use the large rifle, so I would go out hunting, and hunt green pigeons, ducks, and various kinds of birds.",
      sentences: [
        {
          id: "qr2-52-038",
          ar: "وَبَعْدَ أَشْهُرٍ قَدَرْتُ أَنْ أَسْتَعْمِلَ الْبُنْدُقِيَّةَ الْكَبِيْرَةَ ،",
          en: "And after some months I became able to use the large rifle,",
          tokens: [
            { surface: "وَبَعْدَ", lemma: "بعد", pos: "prep", features: "conj+prep", root: "ب ع د", gloss: "and after" },
            { surface: "أَشْهُرٍ", lemma: "شهر", pos: "noun", features: "indef.pl.gen", root: "ش ه ر", gloss: "months" },
            { surface: "قَدَرْتُ", lemma: "قدر", pos: "verb", features: "perf.1cs", root: "ق د ر", gloss: "I became able" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "أَسْتَعْمِلَ", lemma: "استعمل", pos: "verb", features: "subj.1cs", root: "ع م ل", gloss: "use" },
            { surface: "الْبُنْدُقِيَّةَ", lemma: "بندقية", pos: "noun", features: "def.acc", root: "ب ن د ق", gloss: "the rifle" },
            { surface: "الْكَبِيْرَةَ", lemma: "كبير", pos: "adj", features: "def.acc.f", root: "ك ب ر", gloss: "the large" }
          ]
        },
        {
          id: "qr2-52-039",
          ar: "فَكُنْتُ أَخْرُجُ فِي الصَّيْدِ ،",
          en: "so I would go out hunting,",
          tokens: [
            { surface: "فَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1cs", root: "ك و ن", gloss: "so I would" },
            { surface: "أَخْرُجُ", lemma: "خرج", pos: "verb", features: "impf.1cs", root: "خ ر ج", gloss: "go out" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الصَّيْدِ", lemma: "صيد", pos: "noun", features: "def.gen", root: "ص ي د", gloss: "hunting" }
          ]
        },
        {
          id: "qr2-52-040",
          ar: "وَأُصِيْدُ الْحَمَامَ الأَخْضَرَ وَالْبَطَّ وَأَنْوَاعاً مِنَ الطُّيُوْرِ.",
          en: "and hunt green pigeons, ducks, and various kinds of birds.",
          tokens: [
            { surface: "وَأُصِيْدُ", lemma: "صاد", pos: "verb", features: "conj+impf.1cs", root: "ص ي د", gloss: "and I hunt" },
            { surface: "الْحَمَامَ", lemma: "حمام", pos: "noun", features: "def.acc", root: "ح م م", gloss: "pigeons" },
            { surface: "الأَخْضَرَ", lemma: "أخضر", pos: "adj", features: "def.acc", root: "خ ض ر", gloss: "green" },
            { surface: "وَالْبَطَّ", lemma: "بط", pos: "noun", features: "conj+def.acc", root: "ب ط ط", gloss: "and ducks" },
            { surface: "وَأَنْوَاعاً", lemma: "نوع", pos: "noun", features: "conj+indef.pl.acc", root: "ن و ع", gloss: "and kinds" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الطُّيُوْرِ", lemma: "طائر", pos: "noun", features: "def.pl.gen", root: "ط ي ر", gloss: "the birds" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ الرَّاوِيْ بَعْدَ أَنِ اسْتَطَاعَ اسْتِعْمَالَ الْبُنْدُقِيَّةِ الْكَبِيْرَةِ؟",
          options: ["كَانَ يَخْرُجُ فِي الصَّيْدِ وَيَصِيْدُ الْحَمَامَ الأَخْضَرَ وَالْبَطَّ", "بَاعَ الْبُنْدُقِيَّةَ الصَّغِيْرَةَ", "تَوَقَّفَ عَنِ الرَّمْيِ نِهَائِيّاً"],
          answer: 0,
          qEn: "What did the narrator do after he became able to use the large rifle?",
          optionsEn: ["He would go out hunting and hunt green pigeons and ducks", "He sold the small rifle", "He stopped shooting entirely"]
        }
      ]
    },
    {
      en: "And I heard the teacher say: The Prophet ﷺ strongly urged archery and took part in the contest, and said: 'Shoot, O sons of Ishmael! For your father was an archer' and said: 'Indeed, strength is archery, indeed, strength is archery.'",
      sentences: [
        {
          id: "qr2-52-041",
          ar: "وَسَمِعْتُ الْمُعَلِّمَ يَقُوْلُ: إِنَّ النَّبِيَّ ﷺ حَثَّ عَلَىٰ الرَّمْيِ كَثِيْراً ،",
          en: "And I heard the teacher say: The Prophet ﷺ strongly urged archery,",
          tokens: [
            { surface: "وَسَمِعْتُ", lemma: "سمع", pos: "verb", features: "conj+perf.1cs", root: "س م ع", gloss: "and I heard" },
            { surface: "الْمُعَلِّمَ", lemma: "معلم", pos: "noun", features: "def.acc", root: "ع ل م", gloss: "the teacher" },
            { surface: "يَقُوْلُ", lemma: "قال", pos: "verb", features: "impf.3ms", root: "ق و ل", gloss: "say" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "النَّبِيَّ", lemma: "نبي", pos: "noun", features: "def.acc", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "ﷺ", lemma: "صلى الله عليه وسلم", pos: "part", features: "invoc", root: "", gloss: "peace be upon him" },
            { surface: "حَثَّ", lemma: "حث", pos: "verb", features: "perf.3ms", root: "ح ث ث", gloss: "urged" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الرَّمْيِ", lemma: "رمي", pos: "noun", features: "def.gen", root: "ر م ي", gloss: "archery" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "greatly" }
          ]
        },
        {
          id: "qr2-52-042",
          ar: "وَشَارَكَ فِي الْمُنَاضَلَةِ ،",
          en: "and took part in the contest,",
          tokens: [
            { surface: "وَشَارَكَ", lemma: "شارك", pos: "verb", features: "conj+perf.3ms", root: "ش ر ك", gloss: "and took part" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمُنَاضَلَةِ", lemma: "مناضلة", pos: "noun", features: "def.gen", root: "ن ض ل", gloss: "the contest" }
          ]
        },
        {
          id: "qr2-52-043",
          ar: "وَقَالَ: «ارْمُوْا يَا بَنِيْ إِسْمَاعِيْلَ!",
          en: "and said: 'Shoot, O sons of Ishmael!",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "ارْمُوْا", lemma: "رمى", pos: "verb", features: "imp.2mpl", root: "ر م ي", gloss: "shoot" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "بَنِيْ", lemma: "بن", pos: "noun", features: "voc.pl.constr", root: "", gloss: "sons (of)" },
            { surface: "إِسْمَاعِيْلَ", lemma: "إسماعيل", pos: "proper", features: "gen", root: "", gloss: "Ishmael" }
          ]
        },
        {
          id: "qr2-52-044",
          ar: "فَإِنَّ أَبَاكُمْ كَانَ رَامِياً» وَقَالَ: «أَلاَ إِنَّ الْقُوَّةَ الرَّمْيُ ،",
          en: "For your father was an archer' and said: 'Indeed, strength is archery,",
          tokens: [
            { surface: "فَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "أَبَاكُمْ", lemma: "أب", pos: "noun", features: "acc+2mpl", root: "أ ب و", gloss: "your father" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "was" },
            { surface: "رَامِياً", lemma: "رامي", pos: "noun", features: "indef.acc", root: "ر م ي", gloss: "an archer" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "أَلاَ", lemma: "ألا", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "الْقُوَّةَ", lemma: "قوة", pos: "noun", features: "def.acc", root: "ق و ي", gloss: "strength" },
            { surface: "الرَّمْيُ", lemma: "رمي", pos: "noun", features: "def.nom", root: "ر م ي", gloss: "is archery" }
          ]
        },
        {
          id: "qr2-52-045",
          ar: "أَلاَ إِنَّ الْقُوَّةَ الرَّمْيُ».",
          en: "indeed, strength is archery.'",
          tokens: [
            { surface: "أَلاَ", lemma: "ألا", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "الْقُوَّةَ", lemma: "قوة", pos: "noun", features: "def.acc", root: "ق و ي", gloss: "strength" },
            { surface: "الرَّمْيُ", lemma: "رمي", pos: "noun", features: "def.nom", root: "ر م ي", gloss: "is archery" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا حَثَّ النَّبِيُّ ﷺ أَصْحَابَهُ فِيْمَا يَتَعَلَّقُ بِالرَّمْيِ؟",
          options: ["حَثَّهُمْ عَلَىٰ الرَّمْيِ وَقَالَ: «أَلَا إِنَّ الْقُوَّةَ الرَّمْيُ»", "نَهَاهُمْ عَنِ الرَّمْيِ", "لَمْ يَتَحَدَّثْ عَنِ الرَّمْيِ قَطُّ"],
          answer: 0,
          qEn: "What did the Prophet ﷺ urge his Companions regarding archery?",
          optionsEn: ["He urged them to practice archery and said: 'Indeed, strength is archery'", "He forbade them from archery", "He never spoke about archery at all"]
        }
      ]
    },
    {
      en: "So I was very pleased, and I knew that my effort had not been idle, and that I had not wasted my time.",
      sentences: [
        {
          id: "qr2-52-046",
          ar: "فَسُرِرْتُ كَثِيْراً ،",
          en: "So I was very pleased,",
          tokens: [
            { surface: "فَسُرِرْتُ", lemma: "سر", pos: "verb", features: "conj+perf.pass.1cs", root: "س ر ر", gloss: "so I was gladdened" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "very" }
          ]
        },
        {
          id: "qr2-52-047",
          ar: "وَعَلِمْتُ أَنَّ عَمَلِيْ لَمْ يَكُنْ عَبَثاً ،",
          en: "and I knew that my effort had not been idle,",
          tokens: [
            { surface: "وَعَلِمْتُ", lemma: "علم", pos: "verb", features: "conj+perf.1cs", root: "ع ل م", gloss: "and I knew" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "عَمَلِيْ", lemma: "عمل", pos: "noun", features: "nom+1cs", root: "ع م ل", gloss: "my effort" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "يَكُنْ", lemma: "كان", pos: "verb", features: "juss.3ms", root: "ك و ن", gloss: "been" },
            { surface: "عَبَثاً", lemma: "عبث", pos: "noun", features: "indef.acc", root: "ع ب ث", gloss: "idle, futile" }
          ]
        },
        {
          id: "qr2-52-048",
          ar: "وَأَنِّيْ لَمْ أُضَيِّعْ وَقْتِيْ.",
          en: "and that I had not wasted my time.",
          tokens: [
            { surface: "وَأَنِّيْ", lemma: "أن", pos: "part", features: "conj+part+1cs", root: "", gloss: "and that I" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "أُضَيِّعْ", lemma: "ضيع", pos: "verb", features: "juss.1cs", root: "ض ي ع", gloss: "wasted" },
            { surface: "وَقْتِيْ", lemma: "وقت", pos: "noun", features: "acc+1cs", root: "و ق ت", gloss: "my time" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا أَدْرَكَ الرَّاوِيْ بَعْدَ سَمَاعِهِ حَدِيْثَ النَّبِيِّ ﷺ عَنِ الرَّمْيِ؟",
          options: ["أَنَّ وَقْتَهُ فِيْ تَعَلُّمِ الرَّمْيِ لَمْ يَكُنْ عَبَثاً وَلَا إِضَاعَةً لِلْوَقْتِ", "أَنَّهُ يَجِبُ أَنْ يَتْرُكَ الرَّمْيَ", "أَنَّهُ لَمْ يَفْهَمِ الْحَدِيْثَ"],
          answer: 0,
          qEn: "What did the narrator realize after hearing the Prophet's ﷺ hadith about archery?",
          optionsEn: ["That his time learning archery had not been idle or wasted", "That he must give up archery", "That he had not understood the hadith"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "ثُمَّ صِرْتُ ",
        post: "مَرَّةً فِيْ ثَلاَثِ طَلَقَاتٍ ،",
        en: "then I came to hit once in three shots,",
        options: ["أُصِيْبُ", "أَصَابَ", "تُصِيْبُ", "نُصِيْبُ"],
        answer: 0,
        rationales: [
          "1st person singular present -- I hit (the target).",
          "3rd masculine singular perfect -- he hit.",
          "2nd masculine or 3rd feminine present -- you/she hit.",
          "1st person plural present -- we hit.",
        ],
      },
      {
        type: "cloze",
        pre: "كَانَ ",
        post: "هُ بِالْبَارُوْدِ ،",
        en: "he used to load it with gunpowder,",
        options: ["يَشْحَنُ", "شَحَنْتُ", "تَشْحَنُ", "نَشْحَنُ"],
        answer: 0,
        rationales: [
          "3rd masculine singular present -- he loads.",
          "1st person singular perfect -- I loaded.",
          "2nd masculine or 3rd feminine present -- you/she load.",
          "1st person plural present -- we load.",
        ],
      },
      {
        type: "cloze",
        pre: "وَكَأَنَّهُ ",
        post: "هُ بِنَجَاحِهِ.",
        en: "as if congratulating him on his success.",
        options: ["يُهَنِّئُ", "هَنَّأْتُ", "تُهَنِّئُ", "نُهَنِّئُ"],
        answer: 0,
        rationales: [
          "3rd masculine singular present -- he congratulates.",
          "1st person singular perfect -- I congratulated.",
          "2nd masculine or 3rd feminine present -- you/she congratulate.",
          "1st person plural present -- we congratulate.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "أُصِيْبُ الْفَلْسَ",
        pre: "",
        post: "الْفَلْسَ",
        targetPerson: "هُوَ",
        targetEn: "he",
        options: ["يُصِيْبُ", "أُصِيْبُ", "تُصِيْبُ", "نُصِيْبُ"],
        answer: 0,
        rationales: [
          "3rd masculine singular present -- he hits.",
          "1st person singular present -- I hit.",
          "2nd masculine or 3rd feminine present -- you/she hit.",
          "1st person plural present -- we hit.",
        ],
      },
      {
        type: "shift",
        base: "أَخْطَأَ النَّاسُ الْهَدَفَ",
        pre: "",
        post: "الْهَدَفَ",
        targetPerson: "أَنْتَ",
        targetEn: "you",
        options: ["أَخْطَأْتَ", "أَخْطَأْتُ", "أَخْطَأُوْا", "تُخْطِئُ"],
        answer: 0,
        rationales: [
          "2nd masculine singular perfect -- you missed.",
          "1st person singular perfect -- I missed.",
          "3rd masculine plural perfect -- they missed.",
          "2nd masculine or 3rd feminine present -- you/she miss.",
        ],
      },
    ],
  },
};

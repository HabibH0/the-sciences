// القراءة الراشدة, volume two, chapter 36 (printed heading "٣٦") --
// يَوْمٌ صَائِفٌ -- "A Summer Day".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 131-132 (PDF page
// index == printed page number). Page 131 opens fresh with the "(٣٦)"
// heading; page 132 ends with the "✳ ✳ ✳" divider partway down, confirming
// the chapter is exactly two pages (131-132); chapter 37 "النَّظَافَةُ"
// begins fresh on 133. A descriptive essay with no named characters or
// dialogue, unlike the surrounding narrative chapters.
//
// Fifth of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch35.
//
// Two within-chapter homograph clashes, resolved with the established
// suffix conventions:
//   - "صبر" is used both as the noun "patience" (صَبْرُ النَّاسِ) and as the
//     verb "to be patient" (يَصْبِرُوْنَ لِلسَّمُوْمِ) -- the verb sense takes
//     "صبر-فعل".
//   - "من" is used throughout as the ordinary preposition "from", but once
//     as the indefinite/conditional relative "whoever" (وَمَنْ حَبَسَهُ شُغْلٌ
//     أَوْ مَرَضٌ..., "and whoever was kept back by work or illness...") --
//     a genuine pos clash (prep vs. a nominal/relative use), so that one
//     token takes a new suffix pattern, "من-شرط" (marking it as the
//     conditional/relative "من", pos "rel"), extending the family of
//     disambiguating suffixes (-فعل, -اسم, -صفة) to a function-word clash
//     rather than a content-word one.
export const CHAPTER = {
  id: "ch36",
  title: {
    ar: "يَوْمٌ صَائِفٌ",
    en: "A Summer Day"
  },
  pages: [131, 132],
  newWords: [
    "أشد", "حر", "لطيف", "خوف", "سموم", "اتخذ", "ستار", "حشيش", "رش", "حرك",
    "مروحة", "سد", "نافذة", "لئلا", "تقلب", "جمر", "كوخ", "حقير", "خص", "مبني",
    "لبن", "أنعم", "صيف", "قصر", "جص", "آجر", "جدار", "هب", "لفحة", "تحول",
    "نفحة", "نسيم", "حسب", "جنة", "نعيم", "ارتفع", "درجة", "مئة", "ثماني", "عشرة",
    "نقطة", "عيل", "صبر", "سافر", "قلة", "جبل", "حيث", "اصطاف", "قضى", "شهر",
    "لطف", "هبط", "مدينة", "سهل", "وسط", "شغل", "صبر-فعل", "ركد", "مال", "طاب",
    "انتشر", "بستان", "ميدان", "شاطئ", "نهر", "تروح", "تنزه", "هرم", "امرأة", "عاجز",
    "من-شرط", "حبس", "مرض", "استمر", "استراح", "فراش", "احتبس", "تحرك", "طار", "نوم"
  ],
  lemmas: {
    "أشد": { root: "ش د د", pos: "adj", gloss: "more/most severe" },
    "ما-استفهام": { root: "", pos: "part", gloss: "how, what" },
    "حر": { root: "ح ر ر", pos: "noun", gloss: "heat" },
    "يا": { root: "", pos: "part", gloss: "O" },
    "لطيف": { root: "ل ط ف", pos: "adj", gloss: "gentle, kind (here: an exclamation of distress)" },
    "ناس": { root: "ن و س", pos: "noun", gloss: "people" },
    "في": { root: "", pos: "prep", gloss: "in" },
    "بيت": { root: "ب ي ت", pos: "noun", gloss: "house" },
    "لا": { root: "", pos: "part", gloss: "not" },
    "خرج": { root: "خ ر ج", pos: "verb", gloss: "to go out" },
    "خوف": { root: "خ و ف", pos: "noun", gloss: "fear of" },
    "سموم": { root: "س م م", pos: "noun", gloss: "a severe hot wind", book_note: "سَمُوْم: حَرٌّ شَدِيْدٌ." },
    "قد": { root: "", pos: "part", gloss: "indeed, already" },
    "اتخذ": { root: "أ خ ذ", pos: "verb", gloss: "to take, adopt" },
    "ستار": { root: "س ت ر", pos: "noun", gloss: "a curtain, screen" },
    "من": { root: "", pos: "prep", gloss: "from" },
    "حشيش": { root: "ح ش ش", pos: "noun", gloss: "grass, hay" },
    "رش": { root: "ر ش ش", pos: "verb", gloss: "to sprinkle", book_note: "رَشَّ يَرُشُّ عَلَى الأَرْضِ: نَضَحَهَا وَبَلَّهَا." },
    "على": { root: "", pos: "prep", gloss: "on, over" },
    "ماء": { root: "م و ه", pos: "noun", gloss: "water" },
    "حرك": { root: "ح ر ك", pos: "verb", gloss: "to move (something)" },
    "مروحة": { root: "ر و ح", pos: "noun", gloss: "a fan" },
    "سد": { root: "س د د", pos: "verb", gloss: "to block, close" },
    "نافذة": { root: "ن ف ذ", pos: "noun", gloss: "a window" },
    "لئلا": { root: "", pos: "part", gloss: "so that not, lest" },
    "دخل": { root: "د خ ل", pos: "verb", gloss: "to enter" },
    "مع": { root: "", pos: "prep", gloss: "with" },
    "ذلك": { root: "", pos: "dem", gloss: "that" },
    "تقلب": { root: "ق ل ب", pos: "verb", gloss: "to toss and turn" },
    "مثل": { root: "م ث ل", pos: "noun", gloss: "the like of" },
    "جمر": { root: "ج م ر", pos: "noun", gloss: "embers, live coals" },
    "هذا": { root: "", pos: "dem", gloss: "this, now" },
    "أهل": { root: "أ ه ل", pos: "noun", gloss: "people, dwellers (of)" },
    "كوخ": { root: "ك و خ", pos: "noun", gloss: "a hut" },
    "حقير": { root: "ح ق ر", pos: "adj", gloss: "wretched, humble" },
    "خص": { root: "خ ص ص", pos: "noun", gloss: "a reed hut", book_note: "خُصّ جمع خُصَص وأَخْصَاص: بَيْت مِن شَجَر أَوْ قَصَب." },
    "مبني": { root: "ب ن ي", pos: "adj", gloss: "built (of)" },
    "لبن": { root: "ل ب ن", pos: "noun", gloss: "mudbrick, adobe" },
    "أنعم": { root: "ن ع م", pos: "adj", gloss: "more comfortable, more pleasant" },
    "صيف": { root: "ص ي ف", pos: "noun", gloss: "summer" },
    "قصر": { root: "ق ص ر", pos: "noun", gloss: "a palace" },
    "جص": { root: "ج ص ص", pos: "noun", gloss: "plaster, gypsum", book_note: "جَصّ: مَادَّة كِلْسِيَّة بَيْضَاء تُطْلَىٰ بِهَا الْبُيُوْتُ." },
    "آجر": { root: "أ ج ر", pos: "noun", gloss: "baked brick" },
    "إذا": { root: "", pos: "part", gloss: "if, when" },
    "أرض": { root: "أ ر ض", pos: "noun", gloss: "the ground" },
    "جدار": { root: "ج د ر", pos: "noun", gloss: "a wall" },
    "هب": { root: "ه ب ب", pos: "verb", gloss: "to blow (of wind)" },
    "لفحة": { root: "ل ف ح", pos: "noun", gloss: "a blast (of hot air)" },
    "تحول": { root: "ح و ل", pos: "verb", gloss: "to turn into, become" },
    "نفحة": { root: "ن ف ح", pos: "noun", gloss: "a whiff, waft (of breeze)", book_note: "نَفْحَة جَمْع نَفَحَات: لَسْعَة النَّارِ." },
    "نسيم": { root: "ن س م", pos: "noun", gloss: "a breeze" },
    "حسب": { root: "ح س ب", pos: "verb", gloss: "to think, suppose" },
    "أن": { root: "", pos: "part", gloss: "that" },
    "جنة": { root: "ج ن ن", pos: "noun", gloss: "a garden, paradise" },
    "نعيم": { root: "ن ع م", pos: "noun", gloss: "bliss, comfort" },
    "ارتفع": { root: "ر ف ع", pos: "verb", gloss: "to rise, go up" },
    "درجة": { root: "د ر ج", pos: "noun", gloss: "a degree" },
    "حرارة": { root: "ح ر ر", pos: "noun", gloss: "temperature" },
    "إلى": { root: "", pos: "prep", gloss: "to" },
    "مئة": { root: "", pos: "num", gloss: "a hundred" },
    "ثماني": { root: "ث م ن", pos: "num", gloss: "eight" },
    "عشرة": { root: "ع ش ر", pos: "num", gloss: "-teen, ten" },
    "نقطة": { root: "ن ق ط", pos: "noun", gloss: "a point, degree" },
    "عيل": { root: "ع ي ل", pos: "verb", gloss: "to be exhausted, overcome" },
    "صبر": { root: "ص ب ر", pos: "noun", gloss: "patience" },
    "سافر": { root: "س ف ر", pos: "verb", gloss: "to travel" },
    "غني": { root: "غ ن ي", pos: "adj", gloss: "rich, wealthy" },
    "قلة": { root: "ق ل ل", pos: "noun", gloss: "a peak, summit", book_note: "قُلَّة جَمْع قُلَل: قِمَّة." },
    "جبل": { root: "ج ب ل", pos: "noun", gloss: "a mountain" },
    "حيث": { root: "", pos: "adv", gloss: "where" },
    "اصطاف": { root: "ص ي ف", pos: "verb", gloss: "to spend the summer", book_note: "اصْطَافَ يَصْطَافُ بِالْمَكَانِ: أَمْضَىٰ صَيْفَهُ فِيْهِ." },
    "قضى": { root: "ق ض ي", pos: "verb", gloss: "to spend (time)" },
    "شهر": { root: "ش ه ر", pos: "noun", gloss: "a month" },
    "مايو": { root: "", pos: "proper", gloss: "May" },
    "يونيه": { root: "", pos: "proper", gloss: "June" },
    "حتى": { root: "", pos: "part", gloss: "until" },
    "نزل": { root: "ن ز ل", pos: "verb", gloss: "to come down, descend" },
    "مطر": { root: "م ط ر", pos: "noun", gloss: "rain" },
    "لطف": { root: "ل ط ف", pos: "verb", gloss: "to become mild, gentle" },
    "هبط": { root: "ه ب ط", pos: "verb", gloss: "to descend, go down" },
    "مدينة": { root: "م د ن", pos: "noun", gloss: "a city" },
    "سهل": { root: "س ه ل", pos: "noun", gloss: "a plain, flatland" },
    "بقي": { root: "ب ق ي", pos: "verb", gloss: "to remain, stay" },
    "وسط": { root: "و س ط", pos: "noun", gloss: "the middle, average" },
    "شغل": { root: "ش غ ل", pos: "noun", gloss: "work, occupation" },
    "تحمل": { root: "ح م ل", pos: "verb", gloss: "to bear, endure" },
    "صبر-فعل": { root: "ص ب ر", pos: "verb", gloss: "to be patient" },
    "الآن": { root: "", pos: "adv", gloss: "now" },
    "ركد": { root: "ر ك د", pos: "verb", gloss: "to settle, subside", book_note: "رَكَدَ يَرْكُدُ السَّمُوْمُ: سَكَنَ وَهَدَأَ وَثَبَتَ." },
    "مال": { root: "م ي ل", pos: "verb", gloss: "to incline, lean (toward setting)" },
    "شمس": { root: "ش م س", pos: "noun", gloss: "the sun" },
    "طاب": { root: "ط ي ب", pos: "verb", gloss: "to become pleasant" },
    "خروج": { root: "خ ر ج", pos: "noun", gloss: "going out" },
    "انتشر": { root: "ن ش ر", pos: "verb", gloss: "to spread out, disperse" },
    "بستان": { root: "ب س ت ن", pos: "noun", gloss: "a garden, orchard" },
    "ميدان": { root: "م ي د", pos: "noun", gloss: "a square, plaza" },
    "شاطئ": { root: "ش ط أ", pos: "noun", gloss: "a shore, bank" },
    "نهر": { root: "ن ه ر", pos: "noun", gloss: "a river" },
    "تروح": { root: "ر و ح", pos: "verb", gloss: "to take the air, refresh oneself" },
    "تنزه": { root: "ن ز ه", pos: "verb", gloss: "to stroll, go for a walk" },
    "وجد": { root: "و ج د", pos: "verb", gloss: "to find" },
    "إلا": { root: "", pos: "part", gloss: "except" },
    "شيخ": { root: "ش ي خ", pos: "noun", gloss: "an old man" },
    "هرم": { root: "ه ر م", pos: "adj", gloss: "decrepit, very old" },
    "أو": { root: "", pos: "conj", gloss: "or" },
    "امرأة": { root: "م ر أ", pos: "noun", gloss: "a woman" },
    "عاجز": { root: "ع ج ز", pos: "adj", gloss: "incapable, infirm" },
    "من-شرط": { root: "", pos: "rel", gloss: "whoever" },
    "حبس": { root: "ح ب س", pos: "verb", gloss: "to keep back, detain" },
    "مرض": { root: "م ر ض", pos: "noun", gloss: "sickness" },
    "حاجة": { root: "ح و ج", pos: "noun", gloss: "a need" },
    "استمر": { root: "م ر ر", pos: "verb", gloss: "to continue, persist" },
    "ليل": { root: "ل ي ل", pos: "noun", gloss: "night" },
    "استراح": { root: "ر و ح", pos: "verb", gloss: "to rest" },
    "فراش": { root: "ف ر ش", pos: "noun", gloss: "a bed" },
    "احتبس": { root: "ح ب س", pos: "verb", gloss: "to become still, stagnant" },
    "هواء": { root: "ه و ي", pos: "noun", gloss: "air" },
    "سيل": { root: "س ي ل", pos: "verb", gloss: "to flow" },
    "عرق": { root: "ع ر ق", pos: "noun", gloss: "sweat" },
    "تحرك": { root: "ح ر ك", pos: "verb", gloss: "to move, stir" },
    "طار": { root: "ط ي ر", pos: "verb", gloss: "to fly off, vanish" },
    "نوم": { root: "ن و م", pos: "noun", gloss: "sleep" }
  },
  paragraphs: [
    {
      en: "How severe the heat is! Oh my! People stay in their houses, not going out for fear of the scorching heat. They have taken up screens of grass, sprinkling water on them, and they turn the fans. They have shut the windows so the hot wind won't come in through them, and even so they toss and turn as if on live coals.",
      sentences: [
        {
          id: "qr2-36-001",
          ar: "مَا أَشَدَّ الْحَرَّ!",
          en: "How severe the heat is!",
          tokens: [
            { surface: "مَا", lemma: "ما-استفهام", pos: "part", features: "part", root: "", gloss: "how" },
            { surface: "أَشَدَّ", lemma: "أشد", pos: "adj", features: "acc", root: "ش د د", gloss: "severe" },
            { surface: "الْحَرَّ", lemma: "حر", pos: "noun", features: "def.acc", root: "ح ر ر", gloss: "the heat" }
          ]
        },
        {
          id: "qr2-36-002",
          ar: "يَا لَطِيْفُ!",
          en: "Oh my!",
          tokens: [
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "لَطِيْفُ", lemma: "لطيف", pos: "adj", features: "voc", root: "ل ط ف", gloss: "Gentle One" }
          ]
        },
        {
          id: "qr2-36-003",
          ar: "النَّاسُ فِيْ بُيُوْتِهِمْ لَا يَخْرُجُوْنَ خَوْفَ السَّمُوْمِ،",
          en: "People stay in their houses, not going out for fear of the scorching heat,",
          tokens: [
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "بُيُوْتِهِمْ", lemma: "بيت", pos: "noun", features: "pl.gen+3mp", root: "ب ي ت", gloss: "their houses" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَخْرُجُوْنَ", lemma: "خرج", pos: "verb", features: "impf.3mp", root: "خ ر ج", gloss: "going out" },
            { surface: "خَوْفَ", lemma: "خوف", pos: "noun", features: "acc.constr", root: "خ و ف", gloss: "for fear of" },
            { surface: "السَّمُوْمِ", lemma: "سموم", pos: "noun", features: "def.gen", root: "س م م", gloss: "the scorching heat" }
          ]
        },
        {
          id: "qr2-36-004",
          ar: "وَقَدِ اتَّخَذُوْا سُتُوْرًا مِنَ الْحَشِيْشِ يَرُشُّوْنَ عَلَيْهَا الْمَاءَ،",
          en: "They have taken up screens of grass, sprinkling water on them,",
          tokens: [
            { surface: "وَقَدِ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "اتَّخَذُوْا", lemma: "اتخذ", pos: "verb", features: "perf.3mp", root: "أ خ ذ", gloss: "took up" },
            { surface: "سُتُوْرًا", lemma: "ستار", pos: "noun", features: "pl.indef.acc", root: "س ت ر", gloss: "screens" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْحَشِيْشِ", lemma: "حشيش", pos: "noun", features: "def.gen", root: "ح ش ش", gloss: "grass" },
            { surface: "يَرُشُّوْنَ", lemma: "رش", pos: "verb", features: "impf.3mp", root: "ر ش ش", gloss: "sprinkling" },
            { surface: "عَلَيْهَا", lemma: "على", pos: "prep", features: "prep+3fs", root: "", gloss: "on them" },
            { surface: "الْمَاءَ", lemma: "ماء", pos: "noun", features: "def.acc", root: "م و ه", gloss: "the water" }
          ]
        },
        {
          id: "qr2-36-005",
          ar: "وَيُحَرِّكُوْنَ الْمَرَاوِحَ،",
          en: "and they turn the fans,",
          tokens: [
            { surface: "وَيُحَرِّكُوْنَ", lemma: "حرك", pos: "verb", features: "conj+impf.3mp", root: "ح ر ك", gloss: "and move" },
            { surface: "الْمَرَاوِحَ", lemma: "مروحة", pos: "noun", features: "pl.def.acc", root: "ر و ح", gloss: "the fans" }
          ]
        },
        {
          id: "qr2-36-006",
          ar: "وَقَدْ سَدُّوا النَّوَافِذَ لِئَلَّا تَدْخُلَ مِنْهَا السَّمُوْمُ،",
          en: "They have shut the windows so the hot wind won't come in through them,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "سَدُّوا", lemma: "سد", pos: "verb", features: "perf.3mp", root: "س د د", gloss: "shut" },
            { surface: "النَّوَافِذَ", lemma: "نافذة", pos: "noun", features: "pl.def.acc", root: "ن ف ذ", gloss: "the windows" },
            { surface: "لِئَلَّا", lemma: "لئلا", pos: "part", features: "part", root: "", gloss: "so that not" },
            { surface: "تَدْخُلَ", lemma: "دخل", pos: "verb", features: "subj.3fs", root: "د خ ل", gloss: "come in" },
            { surface: "مِنْهَا", lemma: "من", pos: "prep", features: "prep+3fs", root: "", gloss: "through them" },
            { surface: "السَّمُوْمُ", lemma: "سموم", pos: "noun", features: "def.nom", root: "س م م", gloss: "the scorching heat" }
          ]
        },
        {
          id: "qr2-36-007",
          ar: "وَمَعَ ذٰلِكَ يَتَقَلَّبُوْنَ عَلَىٰ مِثْلِ الْجَمْرِ.",
          en: "and even so they toss and turn as if on live coals.",
          tokens: [
            { surface: "وَمَعَ", lemma: "مع", pos: "prep", features: "conj+prep", root: "", gloss: "and with" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "dem", root: "", gloss: "that" },
            { surface: "يَتَقَلَّبُوْنَ", lemma: "تقلب", pos: "verb", features: "impf.3mp", root: "ق ل ب", gloss: "toss and turn" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "مِثْلِ", lemma: "مثل", pos: "noun", features: "gen.constr", root: "م ث ل", gloss: "the like of" },
            { surface: "الْجَمْرِ", lemma: "جمر", pos: "noun", features: "def.gen", root: "ج م ر", gloss: "live coals" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا لَا يَخْرُجُ النَّاسُ مِنْ بُيُوْتِهِمْ؟",
          options: ["خَوْفَ السَّمُوْمِ", "لِأَنَّهُ يَوْمُ عُطْلَةٍ", "لِأَنَّ الْمَطَرَ يَنْزِلُ"],
          answer: 0,
          qEn: "Why don't people leave their houses?",
          optionsEn: ["For fear of the scorching heat", "Because it is a holiday", "Because rain is falling"]
        }
      ]
    },
    {
      en: "Now, the dwellers of humble huts, reed huts, and mudbrick houses are more comfortable in summer than the dwellers of palaces built of plaster and baked brick. When they sprinkle water on the ground and the walls, and a blast of hot wind blows and turns into a waft of breeze, they suppose themselves in a garden of bliss.",
      sentences: [
        {
          id: "qr2-36-008",
          ar: "هٰذَا، وَأَهْلُ الْأَكْوَاخِ الْحَقِيْرَةِ وَالْخُصَصِ وَالْبُيُوْتِ الْمَبْنِيَّةِ مِنَ اللَّبِنِ أَنْعَمُ فِي الصَّيْفِ مِنْ أَهْلِ الْقُصُوْرِ الْمَبْنِيَّةِ مِنَ الْجَصِّ وَالآجُرِّ،",
          en: "Now, the dwellers of humble huts, reed huts, and mudbrick houses are more comfortable in summer than the dwellers of palaces built of plaster and baked brick,",
          tokens: [
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem", root: "", gloss: "now" },
            { surface: "وَأَهْلُ", lemma: "أهل", pos: "noun", features: "conj+nom.constr", root: "أ ه ل", gloss: "and the dwellers of" },
            { surface: "الْأَكْوَاخِ", lemma: "كوخ", pos: "noun", features: "pl.def.gen", root: "ك و خ", gloss: "the huts" },
            { surface: "الْحَقِيْرَةِ", lemma: "حقير", pos: "adj", features: "def.gen.f", root: "ح ق ر", gloss: "humble" },
            { surface: "وَالْخُصَصِ", lemma: "خص", pos: "noun", features: "conj+pl.def.gen", root: "خ ص ص", gloss: "and reed huts" },
            { surface: "وَالْبُيُوْتِ", lemma: "بيت", pos: "noun", features: "conj+pl.def.gen", root: "ب ي ت", gloss: "and the houses" },
            { surface: "الْمَبْنِيَّةِ", lemma: "مبني", pos: "adj", features: "def.gen.f", root: "ب ن ي", gloss: "built" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "اللَّبِنِ", lemma: "لبن", pos: "noun", features: "def.gen", root: "ل ب ن", gloss: "mudbrick" },
            { surface: "أَنْعَمُ", lemma: "أنعم", pos: "adj", features: "nom", root: "ن ع م", gloss: "more comfortable" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الصَّيْفِ", lemma: "صيف", pos: "noun", features: "def.gen", root: "ص ي ف", gloss: "the summer" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "than" },
            { surface: "أَهْلِ", lemma: "أهل", pos: "noun", features: "gen.constr", root: "أ ه ل", gloss: "the dwellers of" },
            { surface: "الْقُصُوْرِ", lemma: "قصر", pos: "noun", features: "pl.def.gen", root: "ق ص ر", gloss: "the palaces" },
            { surface: "الْمَبْنِيَّةِ", lemma: "مبني", pos: "adj", features: "def.gen.f", root: "ب ن ي", gloss: "built" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْجَصِّ", lemma: "جص", pos: "noun", features: "def.gen", root: "ج ص ص", gloss: "plaster" },
            { surface: "وَالآجُرِّ", lemma: "آجر", pos: "noun", features: "conj+def.gen", root: "أ ج ر", gloss: "and baked brick" }
          ]
        },
        {
          id: "qr2-36-009",
          ar: "فَإِذَا رَشُّوا الْمَاءَ عَلَىٰ الأَرْضِ وَالْجُدْرَانِ،",
          en: "When they sprinkle water on the ground and the walls,",
          tokens: [
            { surface: "فَإِذَا", lemma: "إذا", pos: "part", features: "conj+part", root: "", gloss: "so when" },
            { surface: "رَشُّوا", lemma: "رش", pos: "verb", features: "perf.3mp", root: "ر ش ش", gloss: "sprinkle" },
            { surface: "الْمَاءَ", lemma: "ماء", pos: "noun", features: "def.acc", root: "م و ه", gloss: "the water" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الأَرْضِ", lemma: "أرض", pos: "noun", features: "def.gen", root: "أ ر ض", gloss: "the ground" },
            { surface: "وَالْجُدْرَانِ", lemma: "جدار", pos: "noun", features: "conj+pl.def.gen", root: "ج د ر", gloss: "and the walls" }
          ]
        },
        {
          id: "qr2-36-010",
          ar: "وَهَبَّتْ لَفْحَةٌ مِنْ سَمُوْمٍ تَحَوَّلَتْ نَفْحَةً مِنْ نَسِيْمٍ،",
          en: "and a blast of hot wind blows and turns into a waft of breeze,",
          tokens: [
            { surface: "وَهَبَّتْ", lemma: "هب", pos: "verb", features: "conj+perf.3fs", root: "ه ب ب", gloss: "and blew" },
            { surface: "لَفْحَةٌ", lemma: "لفحة", pos: "noun", features: "indef.nom", root: "ل ف ح", gloss: "a blast" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "سَمُوْمٍ", lemma: "سموم", pos: "noun", features: "indef.gen", root: "س م م", gloss: "hot wind" },
            { surface: "تَحَوَّلَتْ", lemma: "تحول", pos: "verb", features: "perf.3fs", root: "ح و ل", gloss: "turned into" },
            { surface: "نَفْحَةً", lemma: "نفحة", pos: "noun", features: "indef.acc", root: "ن ف ح", gloss: "a whiff" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "نَسِيْمٍ", lemma: "نسيم", pos: "noun", features: "indef.gen", root: "ن س م", gloss: "a breeze" }
          ]
        },
        {
          id: "qr2-36-011",
          ar: "وَحَسِبُوْا أَنَّهُمْ فِيْ جَنَّةٍ وَنَعِيْمٍ.",
          en: "they suppose themselves in a garden of bliss.",
          tokens: [
            { surface: "وَحَسِبُوْا", lemma: "حسب", pos: "verb", features: "conj+perf.3mp", root: "ح س ب", gloss: "and supposed" },
            { surface: "أَنَّهُمْ", lemma: "أن", pos: "part", features: "part+3mp", root: "", gloss: "that they" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "جَنَّةٍ", lemma: "جنة", pos: "noun", features: "indef.gen", root: "ج ن ن", gloss: "a garden" },
            { surface: "وَنَعِيْمٍ", lemma: "نعيم", pos: "noun", features: "conj+indef.gen", root: "ن ع م", gloss: "and bliss" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنْ كَانَ أَنْعَمَ فِي الصَّيْفِ، أَهْلُ الْأَكْوَاخِ أَمْ أَهْلُ الْقُصُوْرِ؟",
          options: ["أَهْلُ الْأَكْوَاخِ وَالْبُيُوْتِ الْمَبْنِيَّةِ مِنَ اللَّبِنِ", "أَهْلُ الْقُصُوْرِ الْمَبْنِيَّةِ مِنَ الْجَصِّ", "كِلَاهُمَا سَوَاءٌ"],
          answer: 0,
          qEn: "Who was more comfortable in summer, the hut-dwellers or the palace-dwellers?",
          optionsEn: ["The dwellers of huts and mudbrick houses", "The dwellers of plaster palaces", "Both the same"]
        }
      ]
    },
    {
      en: "The temperature rose to a hundred and eighteen degrees, and people's patience was exhausted. The wealthy traveled to mountain peaks where they summer, spending the months of May and June, until, when the rains came down and the heat grew mild, they went down to the cities and plains.",
      sentences: [
        {
          id: "qr2-36-012",
          ar: "اِرْتَفَعَتْ دَرَجَةُ الْحَرَارَةِ إِلَىٰ مِئَةٍ وَثَمَانِيَ عَشَرَةَ نُقْطَةً،",
          en: "The temperature rose to a hundred and eighteen degrees,",
          tokens: [
            { surface: "اِرْتَفَعَتْ", lemma: "ارتفع", pos: "verb", features: "perf.3fs", root: "ر ف ع", gloss: "rose" },
            { surface: "دَرَجَةُ", lemma: "درجة", pos: "noun", features: "nom.constr", root: "د ر ج", gloss: "the degree of" },
            { surface: "الْحَرَارَةِ", lemma: "حرارة", pos: "noun", features: "def.gen", root: "ح ر ر", gloss: "the temperature" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "مِئَةٍ", lemma: "مئة", pos: "num", features: "indef.gen", root: "", gloss: "a hundred" },
            { surface: "وَثَمَانِيَ", lemma: "ثماني", pos: "num", features: "conj+acc", root: "ث م ن", gloss: "and eight" },
            { surface: "عَشَرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "نُقْطَةً", lemma: "نقطة", pos: "noun", features: "indef.acc", root: "ن ق ط", gloss: "degrees" }
          ]
        },
        {
          id: "qr2-36-013",
          ar: "فَعِيْلَ صَبْرُ النَّاسِ،",
          en: "and people's patience was exhausted,",
          tokens: [
            { surface: "فَعِيْلَ", lemma: "عيل", pos: "verb", features: "conj+pass.perf.3ms", root: "ع ي ل", gloss: "was exhausted" },
            { surface: "صَبْرُ", lemma: "صبر", pos: "noun", features: "nom.constr", root: "ص ب ر", gloss: "the patience of" },
            { surface: "النَّاسِ", lemma: "ناس", pos: "noun", features: "def.gen", root: "ن و س", gloss: "the people" }
          ]
        },
        {
          id: "qr2-36-014",
          ar: "وَسَافَرَ الْأَغْنِيَاءُ إِلَىٰ قُلَلِ الْجِبَالِ حَيْثُ يَصْطَافُوْنَ،",
          en: "The wealthy traveled to mountain peaks where they summer,",
          tokens: [
            { surface: "وَسَافَرَ", lemma: "سافر", pos: "verb", features: "conj+perf.3ms", root: "س ف ر", gloss: "and traveled" },
            { surface: "الْأَغْنِيَاءُ", lemma: "غني", pos: "adj", features: "pl.def.nom", root: "غ ن ي", gloss: "the wealthy" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "قُلَلِ", lemma: "قلة", pos: "noun", features: "pl.gen.constr", root: "ق ل ل", gloss: "the peaks of" },
            { surface: "الْجِبَالِ", lemma: "جبل", pos: "noun", features: "pl.def.gen", root: "ج ب ل", gloss: "the mountains" },
            { surface: "حَيْثُ", lemma: "حيث", pos: "adv", features: "adv", root: "", gloss: "where" },
            { surface: "يَصْطَافُوْنَ", lemma: "اصطاف", pos: "verb", features: "impf.3mp", root: "ص ي ف", gloss: "they summer" }
          ]
        },
        {
          id: "qr2-36-015",
          ar: "وَيَقْضُوْنَ شَهْرَيْ مَايُوْ وَيُوْنِيَه حَتَّىٰ إِذَا نَزَلَتِ الْأَمْطَارُ،",
          en: "spending the months of May and June, until, when the rains came down,",
          tokens: [
            { surface: "وَيَقْضُوْنَ", lemma: "قضى", pos: "verb", features: "conj+impf.3mp", root: "ق ض ي", gloss: "and spend" },
            { surface: "شَهْرَيْ", lemma: "شهر", pos: "noun", features: "du.acc.constr", root: "ش ه ر", gloss: "the two months of" },
            { surface: "مَايُوْ", lemma: "مايو", pos: "proper", features: "gen", root: "", gloss: "May" },
            { surface: "وَيُوْنِيَه", lemma: "يونيه", pos: "proper", features: "conj+gen", root: "", gloss: "and June" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "part", root: "", gloss: "when" },
            { surface: "نَزَلَتِ", lemma: "نزل", pos: "verb", features: "perf.3fs", root: "ن ز ل", gloss: "came down" },
            { surface: "الْأَمْطَارُ", lemma: "مطر", pos: "noun", features: "pl.def.nom", root: "م ط ر", gloss: "the rains" }
          ]
        },
        {
          id: "qr2-36-016",
          ar: "وَلَطَفَ الْحَرُّ هَبَطُوْا إِلَىٰ الْمُدُنِ وَالسُّهُوْلِ.",
          en: "and the heat grew mild, they went down to the cities and plains.",
          tokens: [
            { surface: "وَلَطَفَ", lemma: "لطف", pos: "verb", features: "conj+perf.3ms", root: "ل ط ف", gloss: "and became mild" },
            { surface: "الْحَرُّ", lemma: "حر", pos: "noun", features: "def.nom", root: "ح ر ر", gloss: "the heat" },
            { surface: "هَبَطُوْا", lemma: "هبط", pos: "verb", features: "perf.3mp", root: "ه ب ط", gloss: "they went down" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْمُدُنِ", lemma: "مدينة", pos: "noun", features: "pl.def.gen", root: "م د ن", gloss: "the cities" },
            { surface: "وَالسُّهُوْلِ", lemma: "سهل", pos: "noun", features: "conj+pl.def.gen", root: "س ه ل", gloss: "and the plains" }
          ]
        }
      ],
      checks: [
        {
          q: "إِلَىٰ أَيْنَ سَافَرَ الْأَغْنِيَاءُ لِيَصْطَافُوْا؟",
          options: ["إِلَىٰ قُلَلِ الْجِبَالِ", "إِلَىٰ شَوَاطِئِ الْبَحْرِ", "إِلَىٰ بِلَادٍ بَارِدَةٍ بَعِيْدَةٍ"],
          answer: 0,
          qEn: "Where did the wealthy travel to spend the summer?",
          optionsEn: ["To mountain peaks", "To sea shores", "To distant cold countries"]
        }
      ]
    },
    {
      en: "The middle class and working people stayed behind, enduring the heat and bearing the scorching wind patiently.",
      sentences: [
        {
          id: "qr2-36-017",
          ar: "وَبَقِيَ أَوْسَاطُ النَّاسِ، وَأَهْلُ الْأَشْغَالِ يَتَحَمَّلُوْنَ الْحَرَّ،",
          en: "The middle class and working people stayed behind, enduring the heat,",
          tokens: [
            { surface: "وَبَقِيَ", lemma: "بقي", pos: "verb", features: "conj+perf.3ms", root: "ب ق ي", gloss: "and remained" },
            { surface: "أَوْسَاطُ", lemma: "وسط", pos: "noun", features: "pl.nom.constr", root: "و س ط", gloss: "the middle class of" },
            { surface: "النَّاسِ", lemma: "ناس", pos: "noun", features: "def.gen", root: "ن و س", gloss: "the people" },
            { surface: "وَأَهْلُ", lemma: "أهل", pos: "noun", features: "conj+nom.constr", root: "أ ه ل", gloss: "and the people of" },
            { surface: "الْأَشْغَالِ", lemma: "شغل", pos: "noun", features: "pl.def.gen", root: "ش غ ل", gloss: "occupations" },
            { surface: "يَتَحَمَّلُوْنَ", lemma: "تحمل", pos: "verb", features: "impf.3mp", root: "ح م ل", gloss: "endure" },
            { surface: "الْحَرَّ", lemma: "حر", pos: "noun", features: "def.acc", root: "ح ر ر", gloss: "the heat" }
          ]
        },
        {
          id: "qr2-36-018",
          ar: "وَيَصْبِرُوْنَ لِلسَّمُوْمِ.",
          en: "and bearing the scorching wind patiently.",
          tokens: [
            { surface: "وَيَصْبِرُوْنَ", lemma: "صبر-فعل", pos: "verb", features: "conj+impf.3mp", root: "ص ب ر", gloss: "and are patient" },
            { surface: "لِلسَّمُوْمِ", lemma: "سموم", pos: "noun", features: "prep+def.gen", root: "س م م", gloss: "with the scorching heat" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ أَوْسَاطُ النَّاسِ وَأَهْلُ الْأَشْغَالِ؟",
          options: ["بَقُوْا يَتَحَمَّلُوْنَ الْحَرَّ وَيَصْبِرُوْنَ لِلسَّمُوْمِ", "سَافَرُوْا مَعَ الْأَغْنِيَاءِ إِلَى الْجِبَالِ", "أَغْلَقُوْا مَحَالَّهُمْ وَنَامُوْا"],
          answer: 0,
          qEn: "What did the middle class and working people do?",
          optionsEn: ["They stayed, enduring the heat and bearing the scorching wind patiently", "They traveled with the wealthy to the mountains", "They closed their shops and slept"]
        }
      ]
    },
    {
      en: "Now the scorching wind has settled, the sun has leaned toward setting, and going out has become pleasant. People have spread out in the gardens, squares, and riverbanks, taking the air and strolling, so you find no one at home except a decrepit old man, a woman, or someone infirm, and whoever was kept back by work, illness, or need. The scorching heat may continue into the night, so people cannot rest and toss and turn on their beds, and the air may become still, so sweat flows, the fans stir, and sleep flees.",
      sentences: [
        {
          id: "qr2-36-019",
          ar: "الآنَ رَكَدَتِ السَّمُوْمُ، وَمَالَتِ الشَّمْسُ، وَطَابَ الْخُرُوْجُ،",
          en: "Now the scorching wind has settled, the sun has leaned toward setting, and going out has become pleasant,",
          tokens: [
            { surface: "الآنَ", lemma: "الآن", pos: "adv", features: "adv", root: "", gloss: "now" },
            { surface: "رَكَدَتِ", lemma: "ركد", pos: "verb", features: "perf.3fs", root: "ر ك د", gloss: "settled" },
            { surface: "السَّمُوْمُ", lemma: "سموم", pos: "noun", features: "def.nom", root: "س م م", gloss: "the scorching heat" },
            { surface: "وَمَالَتِ", lemma: "مال", pos: "verb", features: "conj+perf.3fs", root: "م ي ل", gloss: "and leaned" },
            { surface: "الشَّمْسُ", lemma: "شمس", pos: "noun", features: "def.nom", root: "ش م س", gloss: "the sun" },
            { surface: "وَطَابَ", lemma: "طاب", pos: "verb", features: "conj+perf.3ms", root: "ط ي ب", gloss: "and became pleasant" },
            { surface: "الْخُرُوْجُ", lemma: "خروج", pos: "noun", features: "def.nom", root: "خ ر ج", gloss: "going out" }
          ]
        },
        {
          id: "qr2-36-020",
          ar: "وَانْتَشَرَ النَّاسُ فِي الْبَسَاتِيْنِ وَالْمَيَادِيْنِ وَشَوَاطِئِ الْأَنْهَارِ يَتَرَوَّحُوْنَ وَيَتَنَزَّهُوْنَ،",
          en: "People have spread out in the gardens, squares, and riverbanks, taking the air and strolling,",
          tokens: [
            { surface: "وَانْتَشَرَ", lemma: "انتشر", pos: "verb", features: "conj+perf.3ms", root: "ن ش ر", gloss: "and spread out" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْبَسَاتِيْنِ", lemma: "بستان", pos: "noun", features: "pl.def.gen", root: "ب س ت ن", gloss: "the gardens" },
            { surface: "وَالْمَيَادِيْنِ", lemma: "ميدان", pos: "noun", features: "conj+pl.def.gen", root: "م ي د", gloss: "and the squares" },
            { surface: "وَشَوَاطِئِ", lemma: "شاطئ", pos: "noun", features: "conj+pl.gen.constr", root: "ش ط أ", gloss: "and the shores of" },
            { surface: "الْأَنْهَارِ", lemma: "نهر", pos: "noun", features: "pl.def.gen", root: "ن ه ر", gloss: "the rivers" },
            { surface: "يَتَرَوَّحُوْنَ", lemma: "تروح", pos: "verb", features: "impf.3mp", root: "ر و ح", gloss: "taking the air" },
            { surface: "وَيَتَنَزَّهُوْنَ", lemma: "تنزه", pos: "verb", features: "conj+impf.3mp", root: "ن ز ه", gloss: "and strolling" }
          ]
        },
        {
          id: "qr2-36-021",
          ar: "فَلَا تَجِدُ فِي الْبَيْتِ إِلَّا شَيْخًا هَرِمًا أَوِ امْرَأَةً أَوْ عَاجِزًا،",
          en: "so you find no one at home except a decrepit old man, a woman, or someone infirm,",
          tokens: [
            { surface: "فَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "so not" },
            { surface: "تَجِدُ", lemma: "وجد", pos: "verb", features: "impf.2ms", root: "و ج د", gloss: "you find" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْبَيْتِ", lemma: "بيت", pos: "noun", features: "def.gen", root: "ب ي ت", gloss: "the house" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "شَيْخًا", lemma: "شيخ", pos: "noun", features: "indef.acc", root: "ش ي خ", gloss: "an old man" },
            { surface: "هَرِمًا", lemma: "هرم", pos: "adj", features: "indef.acc", root: "ه ر م", gloss: "decrepit" },
            { surface: "أَوِ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "امْرَأَةً", lemma: "امرأة", pos: "noun", features: "indef.acc", root: "م ر أ", gloss: "a woman" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "عَاجِزًا", lemma: "عاجز", pos: "adj", features: "indef.acc", root: "ع ج ز", gloss: "infirm" }
          ]
        },
        {
          id: "qr2-36-022",
          ar: "وَمَنْ حَبَسَهُ شُغْلٌ أَوْ مَرَضٌ أَوْ حَاجَةٌ،",
          en: "and whoever was kept back by work, illness, or need.",
          tokens: [
            { surface: "وَمَنْ", lemma: "من-شرط", pos: "rel", features: "conj+rel", root: "", gloss: "and whoever" },
            { surface: "حَبَسَهُ", lemma: "حبس", pos: "verb", features: "perf.3ms+3ms", root: "ح ب س", gloss: "was kept back by" },
            { surface: "شُغْلٌ", lemma: "شغل", pos: "noun", features: "indef.nom", root: "ش غ ل", gloss: "work" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "مَرَضٌ", lemma: "مرض", pos: "noun", features: "indef.nom", root: "م ر ض", gloss: "illness" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "حَاجَةٌ", lemma: "حاجة", pos: "noun", features: "indef.nom", root: "ح و ج", gloss: "need" }
          ]
        },
        {
          id: "qr2-36-023",
          ar: "وَقَدْ تَسْتَمِرُّ السَّمُوْمُ إِلَىٰ اللَّيْلِ،",
          en: "The scorching heat may continue into the night,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and may" },
            { surface: "تَسْتَمِرُّ", lemma: "استمر", pos: "verb", features: "impf.3fs", root: "م ر ر", gloss: "continue" },
            { surface: "السَّمُوْمُ", lemma: "سموم", pos: "noun", features: "def.nom", root: "س م م", gloss: "the scorching heat" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "into" },
            { surface: "اللَّيْلِ", lemma: "ليل", pos: "noun", features: "def.gen", root: "ل ي ل", gloss: "the night" }
          ]
        },
        {
          id: "qr2-36-024",
          ar: "فَلَا يَسْتَرِيْحُ النَّاسُ وَيَتَقَلَّبُوْنَ عَلَىٰ الْفِرَاشِ،",
          en: "so people cannot rest and toss and turn on their beds,",
          tokens: [
            { surface: "فَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "so not" },
            { surface: "يَسْتَرِيْحُ", lemma: "استراح", pos: "verb", features: "impf.3ms", root: "ر و ح", gloss: "rest" },
            { surface: "النَّاسُ", lemma: "ناس", pos: "noun", features: "def.nom", root: "ن و س", gloss: "the people" },
            { surface: "وَيَتَقَلَّبُوْنَ", lemma: "تقلب", pos: "verb", features: "conj+impf.3mp", root: "ق ل ب", gloss: "and toss and turn" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الْفِرَاشِ", lemma: "فراش", pos: "noun", features: "def.gen", root: "ف ر ش", gloss: "the bed" }
          ]
        },
        {
          id: "qr2-36-025",
          ar: "وَقَدْ يَحْتَبِسُ الْهَوَاءُ، فَيَسِيْلُ الْعَرَقُ،",
          en: "and the air may become still, so sweat flows,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and may" },
            { surface: "يَحْتَبِسُ", lemma: "احتبس", pos: "verb", features: "impf.3ms", root: "ح ب س", gloss: "become still" },
            { surface: "الْهَوَاءُ", lemma: "هواء", pos: "noun", features: "def.nom", root: "ه و ي", gloss: "the air" },
            { surface: "فَيَسِيْلُ", lemma: "سيل", pos: "verb", features: "conj+impf.3ms", root: "س ي ل", gloss: "so flows" },
            { surface: "الْعَرَقُ", lemma: "عرق", pos: "noun", features: "def.nom", root: "ع ر ق", gloss: "the sweat" }
          ]
        },
        {
          id: "qr2-36-026",
          ar: "وَتَتَحَرَّكُ الْمَرَاوِحُ، وَيَطِيْرُ النَّوْمُ.",
          en: "the fans stir, and sleep flees.",
          tokens: [
            { surface: "وَتَتَحَرَّكُ", lemma: "تحرك", pos: "verb", features: "conj+impf.3fs", root: "ح ر ك", gloss: "and stir" },
            { surface: "الْمَرَاوِحُ", lemma: "مروحة", pos: "noun", features: "pl.def.nom", root: "ر و ح", gloss: "the fans" },
            { surface: "وَيَطِيْرُ", lemma: "طار", pos: "verb", features: "conj+impf.3ms", root: "ط ي ر", gloss: "and flees" },
            { surface: "النَّوْمُ", lemma: "نوم", pos: "noun", features: "def.nom", root: "ن و م", gloss: "sleep" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنِ الَّذِيْ يَبْقَىٰ فِي الْبَيْتِ حِيْنَ يَخْرُجُ النَّاسُ لِلتَّنَزُّهِ عَصْرًا؟",
          options: ["الشَّيْخُ الْهَرِمُ وَالْمَرْأَةُ وَالْعَاجِزُ وَمَنْ حَبَسَهُ شُغْلٌ أَوْ مَرَضٌ", "الْأَطْفَالُ فَقَطْ", "لَا أَحَدَ يَبْقَىٰ فِي الْبَيْتِ"],
          answer: 0,
          qEn: "Who stays home when people go out to stroll in the evening?",
          optionsEn: ["The decrepit old man, the woman, the infirm, and whoever is kept back by work or illness", "Only the children", "No one stays home"]
        }
      ]
    }
  ]
};

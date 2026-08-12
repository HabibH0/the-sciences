// قِرَاءَةٌ رَاشِدَةٌ, ch45 -- printed pages 154-157, "عِيْدُ الأَضْحَىٰ" ("The Feast
// of Sacrifice"). A first-person narrative: the boy watches his father sight
// the new moon of Dhul-Hijjah and learns the Prophet's ﷺ hilal-supplication,
// tracks the Hajj-day sequence (Tarwiyah/ʿArafah/Muzdalifah/Nahr) his teacher
// explains, watches his father buy and raise a shared-share sacrificial cow,
// and narrates the three days of Eid: new clothes, the prayer and khutbah,
// the sacrifice, meat distribution and drying into qadeed, a family feast,
// a neighbor's banquet, and the imam's takbir/tahlil through the 13th.
//
// Conventions carried over from ch41-44 (see their header comments for the
// fuller rationale):
//  - Footnote markers like "(١)" are book furniture: excluded from `ar` and
//    never tokenized. Each footnote's defining text is transcribed verbatim
//    into that lemma's `book_note`. This chapter has twelve footnotes across
//    pp.155-156 (منى، يوم التروية، المزدلفة، نحر [x2], علف، كبّر، هلّل، جهراً،
//    أضحية، قديد، مأدبة) -- all folded into the `lemmas` dict below. "نحر" is
//    footnoted twice (once for the verb يَنْحَرُوْنَ, once for the noun
//    يَوْمُ النَّحْرِ) -- both footnote texts are combined into one book_note
//    since they share one lemma key.
//  - The ﷺ honorific after "النَّبِيَّ" is kept verbatim in `ar` but excluded
//    from `tokens` (matches qiraah-v1/chapter-07.js and the app's own
//    reconstruction behavior; validate-chapter.mjs strips it).
//  - The Prophet's ﷺ hilal-supplication is transcribed with the book's own
//    plain guillemets «» (kept in `ar`, stripped like other punctuation for
//    reconstruction -- same treatment as the Qur'an quote in ch43).
//
// Vocabulary provenance: newWords below is cross-checked against every
// lemma already taught in qiraah-v1 (this book's volume one, chapters 1-31)
// AND against this book's own ch41-44, so nothing here duplicates a word
// the learner already met earlier in *either* half of the course. Reused
// words keep their established root/pos/gloss from wherever they were first
// taught (mostly qiraah-v1): e.g. أب، أم، والد، اجتهاد، دقيق، بعد، إذا، حيث
// (new here), هنالك، ذكر، نبي، الله، يوم، صلى، صباح، بيت، كثير، صنع، واحد،
// اثنان، أربعة، شهر، أجر، مسكين، ضر، إمام (established in this book's own
// ch43), جهر (established in qiraah-v1/ch09 -- reused here with its own
// book_note since the word happens to be footnoted again on p.156).
//
// Two homograph flags for future reconciliation:
//  - "جار": this chapter's "جَارِنَا الْكَرِيْمِ" (our generous *neighbor*,
//    p.157) reuses the lemma key already seeded by ch42's "جَارِياً" (*flowing*
//    water, an adjective from جرى/يجري, root ج ر ي). The neighbor sense here
//    is an unrelated root (جاوَرَ/جِوَار, root ج و ر) that happens to share the
//    bare spelling "جار". Per the established homograph practice, the lemma
//    key is reused but this chapter's tokens carry their own root (ج و ر)
//    and gloss ("neighbor") rather than minting a second "جار" entry that
//    would collide.
//  - "دعا": already taught in qiraah-v1/chapter-02.js as "to pray for, invoke
//    blessing upon". This chapter uses the same verb (same root د ع و, same
//    lemma) twice: once in that original devotional sense (وَيَدْعُوْنَ,
//    "supplicating" at ʿArafāt) and once in the ordinary social sense "to
//    invite" (دَعَا أَبِيْ ... جَمَاعَةً, "father invited a group ..."). Both
//    tokens carry their own contextual gloss; no separate lemma was needed
//    since it's the same core verb, not a different root.
export const CHAPTER = {
  id: "ch45",
  number: 45,
  title: { ar: "عِيْدُ الأَضْحَىٰ", en: "The Feast of Sacrifice (ʿĪd al-Aḍḥā)" },
  pages: [154, 155, 156, 157],
  newWords: [
    "هلال", "أهلّ", "بحث", "إيمان", "سلامة", "رشد", "تسعة", "ثامن", "تاسع",
    "عطل", "حاج", "عرفة", "بقرة", "سمين", "ذبح", "سهم", "سقى", "لباس", "أعد",
    "حكم", "سمى", "وزع", "توفر", "مدة", "طويل", "ضيف", "فجر", "مصلى", "دبر",
    "تشريق", "ثالث", "قعدة", "حجة", "أضحى", "نحر", "علف", "أضحية", "قديد",
    "مأدبة", "تروية", "مزدلفة", "منى", "عشرون", "هلّل", "كبّر", "كأن", "لأن",
    "أخو", "أخت", "احتفظ", "أيبس", "توسخ", "تطيب", "أكثر", "أطاب", "عنى",
    "حيث", "طول", "ملون", "سبعة",
  ],
  lemmas: {
    "منى": {
      gloss: "Minā (a place near Makkah)",
      book_note: "مِنَى: بلدة قرب مكة ينزلها الحجاج أيام التشريق.",
    },
    "تروية": {
      gloss: "watering, providing water; the Day of Tarwiyah",
      book_note: "يوم التَّرْوِيَة: أي الثامن من ذي الحجة.",
    },
    "مزدلفة": {
      gloss: "Muzdalifah (a place between ʿArafah and Minā)",
      book_note: "الْمُزْدَلِفَة: موضع بين عرفات ومِنَى.",
    },
    "نحر": {
      gloss: "to slaughter, sacrifice; the Day of Sacrifice",
      book_note: "نَحَرَ يَنْحَرُ نَحْراً: ذَبَحَ. — النَّحْرُ: عاشر ذي الحجة.",
    },
    "علف": {
      gloss: "to feed (an animal), give fodder",
      book_note: "عَلَفَ يَعْلِفُ عَلَفاً الْحَيَوَانَ: أَطْعَمَهُ.",
    },
    "كبّر": {
      gloss: "to say 'Allāhu akbar'",
      book_note: "كَبَّرَ يُكَبِّرُ تَكْبِيْراً: قال: اللهُ أكبر.",
    },
    "هلّل": {
      gloss: "to say 'lā ilāha illā Allāh'",
      book_note: "هَلَّلَ يُهَلِّلُ تَهْلِيلاً: قال: لا إله إلا الله.",
    },
    "جهر": {
      gloss: "openly, publicly",
      book_note: "جَهْراً: إعلاناً بصوت عالٍ.",
    },
    "أضحية": {
      gloss: "sacrificial animal",
      book_note: "أُضْحِيَّة جمع أضاحٍ: شاة ونحوها يضحّي بها في عيد الأضحى.",
    },
    "قديد": {
      gloss: "dried, salted meat",
      book_note: "قَدِيْد: لحم مقطَّع مملَّح، مجفَّف في الشمس.",
    },
    "مأدبة": {
      gloss: "banquet, feast",
      book_note: "مَأْدَبَة جمع مآدِب: الطعام الذي يُصنع لدعوة.",
    },
  },
  paragraphs: [
    // Paragraph 1: hilal-sighting, the Prophet's ﷺ supplication, and the
    // teacher's news about the pilgrims' departure to Minā.
    {
      en: "It was the last day of Dhul-Qa'dah, the twenty-ninth of the month. My father looked for the crescent moon, and it was very faint -- I only made it out with real effort and searching. I saw my father saying something and supplicating. I asked him, 'What do you say in your supplication, father?' My father said, 'When the Prophet ﷺ saw the crescent, he would say: «O Allah, bring it upon us with security and faith, safety and Islam. My Lord and your Lord is Allah -- a crescent of right guidance and good.»' So I learned it from my father and memorized it. I thought the Eid would be tomorrow, but my father told me the Eid was nine days away, since Eid al-Adha is the tenth day of Dhul-Hijjah. On the eighth day of the month, school was suspended, and my teacher told me that the pilgrims go that day to Minā, where they spend the night -- this day is called the Day of Tarwiyah.",
      sentences: [
        {
          id: "qr2-45-001",
          ar: "كَانَ الْيَوْمُ الأَخِيْرُ مِنْ شَهْرِ ذِي الْقَعْدَةِ ،",
          en: "It was the last day of Dhul-Qa'dah,",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "it was" },
            { surface: "الْيَوْمُ", lemma: "يوم", pos: "noun", features: "def.nom", root: "ي و م", gloss: "the day" },
            { surface: "الأَخِيْرُ", lemma: "أخير", pos: "adj", features: "def.nom", root: "أ خ ر", gloss: "the last" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "from, of" },
            { surface: "شَهْرِ", lemma: "شهر", pos: "noun", features: "gen.constr", root: "ش ه ر", gloss: "the month of" },
            { surface: "ذِي", lemma: "ذو", pos: "noun", features: "gen.constr", root: "ذ و ي", gloss: "possessor of" },
            { surface: "الْقَعْدَةِ", lemma: "قعدة", pos: "noun", features: "def.gen", root: "ق ع د", gloss: "the sitting (Dhul-Qa'dah)" },
          ],
        },
        {
          id: "qr2-45-002",
          ar: "وَكَانَ الْيَوْمُ التَّاسِعُ وَالْعِشْرُوْنَ مِنَ الشَّهْرِ ،",
          en: "and it was the twenty-ninth day of the month,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "الْيَوْمُ", lemma: "يوم", pos: "noun", features: "def.nom", root: "ي و م", gloss: "the day" },
            { surface: "التَّاسِعُ", lemma: "تاسع", pos: "adj", features: "def.nom", root: "ت س ع", gloss: "the ninth" },
            { surface: "وَالْعِشْرُوْنَ", lemma: "عشرون", pos: "num", features: "conj+def.nom", root: "ع ش ر", gloss: "and twentieth" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "from, of" },
            { surface: "الشَّهْرِ", lemma: "شهر", pos: "noun", features: "def.gen", root: "ش ه ر", gloss: "the month" },
          ],
        },
        {
          id: "qr2-45-003",
          ar: "رَأَىٰ وَالِدِيْ الْهِلاَلَ ،",
          en: "my father spotted the crescent moon,",
          tokens: [
            { surface: "رَأَىٰ", lemma: "رأى", pos: "verb", features: "perf.3ms", root: "ر أ ي", gloss: "he saw" },
            { surface: "وَالِدِيْ", lemma: "والد", pos: "noun", features: "nom.constr+1s", root: "و ل د", gloss: "my father" },
            { surface: "الْهِلاَلَ", lemma: "هلال", pos: "noun", features: "def.acc", root: "ه ل ل", gloss: "the crescent moon" },
          ],
        },
        {
          id: "qr2-45-004",
          ar: "وَكَانَ دَقِيْقاً جِدّاً ،",
          en: "and it was very faint,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "دَقِيْقاً", lemma: "دقيق", pos: "adj", features: "indef.acc", root: "د ق ق", gloss: "faint, hard to make out" },
            { surface: "جِدّاً", lemma: "جدا", pos: "adv", features: "indef.acc", root: "ج د د", gloss: "very" },
          ],
        },
        {
          id: "qr2-45-005",
          ar: "وَمَا رَأَيْتُهُ إِلاَّ بِاجْتِهَادٍ وَبَحْثٍ ،",
          en: "and I only made it out with real effort and searching,",
          tokens: [
            { surface: "وَمَا", lemma: "ما", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "رَأَيْتُهُ", lemma: "رأى", pos: "verb", features: "perf.1s+3ms", root: "ر أ ي", gloss: "I saw it" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", gloss: "except, only" },
            { surface: "بِاجْتِهَادٍ", lemma: "اجتهاد", pos: "noun", features: "prep+indef.gen", root: "ج ه د", gloss: "with effort" },
            { surface: "وَبَحْثٍ", lemma: "بحث", pos: "noun", features: "conj+indef.gen", root: "ب ح ث", gloss: "and searching" },
          ],
        },
        {
          id: "qr2-45-006",
          ar: "وَرَأَيْتُ وَالِدِيْ يَقُوْلُ وَيَدْعُوْ ،",
          en: "and I saw my father saying something and supplicating,",
          tokens: [
            { surface: "وَرَأَيْتُ", lemma: "رأى", pos: "verb", features: "conj+perf.1s", root: "ر أ ي", gloss: "and I saw" },
            { surface: "وَالِدِيْ", lemma: "والد", pos: "noun", features: "acc.constr+1s", root: "و ل د", gloss: "my father" },
            { surface: "يَقُوْلُ", lemma: "قال", pos: "verb", features: "impf.3ms", root: "ق و ل", gloss: "saying" },
            { surface: "وَيَدْعُوْ", lemma: "دعا", pos: "verb", features: "conj+impf.3ms", root: "د ع و", gloss: "and supplicating" },
          ],
        },
        {
          id: "qr2-45-007",
          ar: "قُلْتُ لَهُ: مَاذَا تَقُوْلُ فِيْ دُعَائِكَ يَا أَبِيْ؟",
          en: "I said to him, 'What do you say in your supplication, father?'",
          tokens: [
            { surface: "قُلْتُ", lemma: "قال", pos: "verb", features: "perf.1s", root: "ق و ل", gloss: "I said" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", gloss: "to him" },
            { surface: "مَاذَا", lemma: "ماذا", pos: "rel", gloss: "what" },
            { surface: "تَقُوْلُ", lemma: "قال", pos: "verb", features: "impf.2ms", root: "ق و ل", gloss: "you say" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "دُعَائِكَ", lemma: "دعاء", pos: "noun", features: "gen.constr+2ms", root: "د ع و", gloss: "your supplication" },
            { surface: "يَا", lemma: "يا", pos: "part", gloss: "O (vocative)" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "voc.constr+1s", root: "أ ب و", gloss: "my father" },
          ],
        },
        {
          id: "qr2-45-008",
          ar: "قَالَ وَالِدِيْ: إِنَّ النَّبِيَّ ﷺ كَانَ إِذَا رَأَىٰ الْهِلاَلَ قَالَ:",
          en: "My father said, 'When the Prophet ﷺ saw the crescent, he would say:'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "he said" },
            { surface: "وَالِدِيْ", lemma: "والد", pos: "noun", features: "nom.constr+1s", root: "و ل د", gloss: "my father" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", gloss: "indeed" },
            { surface: "النَّبِيَّ", lemma: "نبي", pos: "noun", features: "def.acc", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "he used to" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", gloss: "when, whenever" },
            { surface: "رَأَىٰ", lemma: "رأى", pos: "verb", features: "perf.3ms", root: "ر أ ي", gloss: "he saw" },
            { surface: "الْهِلاَلَ", lemma: "هلال", pos: "noun", features: "def.acc", root: "ه ل ل", gloss: "the crescent moon" },
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "he would say" },
          ],
        },
        {
          id: "qr2-45-009",
          ar: "«اللهُمَّ أَهِلَّهُ عَلَيْنَا بِالأَمْنِ وَالإِيْمَانِ وَالسَّلاَمَةِ وَالإِسْلاَمِ ،",
          en: "'O Allah, bring it upon us with security and faith, safety and Islam,",
          tokens: [
            { surface: "اللهُمَّ", lemma: "الله", pos: "proper", features: "voc", root: "", gloss: "O Allah" },
            { surface: "أَهِلَّهُ", lemma: "أهلّ", pos: "verb", features: "imp.2ms+3ms", root: "ه ل ل", gloss: "bring it in (as a new moon)" },
            { surface: "عَلَيْنَا", lemma: "على", pos: "prep", features: "prep+1p", gloss: "upon us" },
            { surface: "بِالأَمْنِ", lemma: "أمن", pos: "noun", features: "prep+def.gen", root: "أ م ن", gloss: "with security" },
            { surface: "وَالإِيْمَانِ", lemma: "إيمان", pos: "noun", features: "conj+def.gen", root: "أ م ن", gloss: "and faith" },
            { surface: "وَالسَّلاَمَةِ", lemma: "سلامة", pos: "noun", features: "conj+def.gen", root: "س ل م", gloss: "and safety" },
            { surface: "وَالإِسْلاَمِ", lemma: "إسلام", pos: "proper", features: "conj+def.gen", root: "س ل م", gloss: "and Islam" },
          ],
        },
        {
          id: "qr2-45-010",
          ar: "رَبِّيْ وَرَبُّكَ اللهُ ،",
          en: "my Lord and your Lord is Allah,",
          tokens: [
            { surface: "رَبِّيْ", lemma: "رب", pos: "noun", features: "nom.constr+1s", root: "ر ب ب", gloss: "my Lord" },
            { surface: "وَرَبُّكَ", lemma: "رب", pos: "noun", features: "conj+nom.constr+2ms", root: "ر ب ب", gloss: "and your Lord" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
          ],
        },
        {
          id: "qr2-45-011",
          ar: "هِلاَلَ رُشْدٍ وَخَيْرٍ» .",
          en: "a crescent of right guidance and good.'",
          tokens: [
            { surface: "هِلاَلَ", lemma: "هلال", pos: "noun", features: "acc.constr", root: "ه ل ل", gloss: "a crescent of" },
            { surface: "رُشْدٍ", lemma: "رشد", pos: "noun", features: "indef.gen", root: "ر ش د", gloss: "right guidance" },
            { surface: "وَخَيْرٍ", lemma: "خير", pos: "noun", features: "conj+indef.gen", root: "خ ي ر", gloss: "and good" },
          ],
        },
        {
          id: "qr2-45-012",
          ar: "فَتَعَلَّمْتُهُ مِنْ وَالِدِيْ وَحَفِظْتُهُ.",
          en: "So I learned it from my father and memorized it.",
          tokens: [
            { surface: "فَتَعَلَّمْتُهُ", lemma: "تعلم", pos: "verb", features: "conj+perf.1s+3ms", root: "ع ل م", gloss: "so I learned it" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "وَالِدِيْ", lemma: "والد", pos: "noun", features: "gen.constr+1s", root: "و ل د", gloss: "my father" },
            { surface: "وَحَفِظْتُهُ", lemma: "حفظ", pos: "verb", features: "conj+perf.1s+3ms", root: "ح ف ظ", gloss: "and I memorized it" },
          ],
        },
        {
          id: "qr2-45-013",
          ar: "وَظَنَنْتُ أَنَّ الْعِيْدَ غَداً ،",
          en: "I thought the Eid would be tomorrow,",
          tokens: [
            { surface: "وَظَنَنْتُ", lemma: "ظن", pos: "verb", features: "conj+perf.1s", root: "ظ ن ن", gloss: "and I thought" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "الْعِيْدَ", lemma: "عيد", pos: "noun", features: "def.acc", root: "ع و د", gloss: "the Eid" },
            { surface: "غَداً", lemma: "غد", pos: "noun", features: "indef.acc", root: "غ د و", gloss: "tomorrow" },
          ],
        },
        {
          id: "qr2-45-014",
          ar: "فَأَخْبَرَنِيْ أَبِيْ أَنَّ الْعِيْدَ بَعْدَ تِسْعَةِ أَيَّامٍ ،",
          en: "but my father told me the Eid was nine days away,",
          tokens: [
            { surface: "فَأَخْبَرَنِيْ", lemma: "أخبر", pos: "verb", features: "conj+perf.3ms+1s", root: "خ ب ر", gloss: "but he told me" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom.constr+1s", root: "أ ب و", gloss: "my father" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "الْعِيْدَ", lemma: "عيد", pos: "noun", features: "def.acc", root: "ع و د", gloss: "the Eid" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", gloss: "after" },
            { surface: "تِسْعَةِ", lemma: "تسعة", pos: "num", features: "gen.constr", root: "ت س ع", gloss: "nine" },
            { surface: "أَيَّامٍ", lemma: "يوم", pos: "noun", features: "pl.indef.gen", root: "ي و م", gloss: "days" },
          ],
        },
        {
          id: "qr2-45-015",
          ar: "فَإِنَّ عِيْدَ الأَضْحَىٰ الْيَوْمُ الْعَاشِرُ مِنْ شَهْرِ ذِي الْحِجَّةِ.",
          en: "since Eid al-Adha is the tenth day of Dhul-Hijjah.",
          tokens: [
            { surface: "فَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", gloss: "for indeed" },
            { surface: "عِيْدَ", lemma: "عيد", pos: "noun", features: "acc.constr", root: "ع و د", gloss: "the feast of" },
            { surface: "الأَضْحَىٰ", lemma: "أضحى", pos: "proper", features: "def.gen", root: "ض ح ي", gloss: "al-Adha (the sacrifice)" },
            { surface: "الْيَوْمُ", lemma: "يوم", pos: "noun", features: "def.nom", root: "ي و م", gloss: "the day" },
            { surface: "الْعَاشِرُ", lemma: "عاشر", pos: "adj", features: "def.nom", root: "ع ش ر", gloss: "the tenth" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "شَهْرِ", lemma: "شهر", pos: "noun", features: "gen.constr", root: "ش ه ر", gloss: "the month of" },
            { surface: "ذِي", lemma: "ذو", pos: "noun", features: "gen.constr", root: "ذ و ي", gloss: "possessor of" },
            { surface: "الْحِجَّةِ", lemma: "حجة", pos: "noun", features: "def.gen", root: "ح ج ج", gloss: "the pilgrimage (Dhul-Hijjah)" },
          ],
        },
        {
          id: "qr2-45-016",
          ar: "وَفِي الْيَوْمِ الثَّامِنِ مِنَ الشَّهْرِ عُطِّلَتِ الْمَدْرَسَةُ ،",
          en: "On the eighth day of the month, school was suspended,",
          tokens: [
            { surface: "وَفِي", lemma: "في", pos: "prep", features: "conj+prep", gloss: "and on" },
            { surface: "الْيَوْمِ", lemma: "يوم", pos: "noun", features: "def.gen", root: "ي و م", gloss: "the day" },
            { surface: "الثَّامِنِ", lemma: "ثامن", pos: "adj", features: "def.gen", root: "ث م ن", gloss: "the eighth" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "الشَّهْرِ", lemma: "شهر", pos: "noun", features: "def.gen", root: "ش ه ر", gloss: "the month" },
            { surface: "عُطِّلَتِ", lemma: "عطل", pos: "verb", features: "pass.perf.3fs", root: "ع ط ل", gloss: "was suspended, closed" },
            { surface: "الْمَدْرَسَةُ", lemma: "مدرسة", pos: "noun", features: "def.nom", root: "د ر س", gloss: "the school" },
          ],
        },
        {
          id: "qr2-45-017",
          ar: "وَأَخْبَرَنِيَ الْمُعَلِّمُ أَنَّ الْحُجَّاجَ يَذْهَبُوْنَ الْيَوْمَ إِلَىٰ مِنَىٰ حَيْثُ يَبِيْتُوْنَ ،",
          en: "and my teacher told me that the pilgrims go that day to Minā, where they spend the night,",
          tokens: [
            { surface: "وَأَخْبَرَنِيَ", lemma: "أخبر", pos: "verb", features: "conj+perf.3ms+1s", root: "خ ب ر", gloss: "and he told me" },
            { surface: "الْمُعَلِّمُ", lemma: "معلم", pos: "noun", features: "def.nom", root: "ع ل م", gloss: "the teacher" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", gloss: "that" },
            { surface: "الْحُجَّاجَ", lemma: "حاج", pos: "noun", features: "pl.def.acc", root: "ح ج ج", gloss: "the pilgrims" },
            { surface: "يَذْهَبُوْنَ", lemma: "ذهب", pos: "verb", features: "impf.3mp", root: "ذ ه ب", gloss: "they go" },
            { surface: "الْيَوْمَ", lemma: "يوم", pos: "noun", features: "def.acc", root: "ي و م", gloss: "that day" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "مِنَىٰ", lemma: "منى", pos: "proper", features: "gen", gloss: "Minā" },
            { surface: "حَيْثُ", lemma: "حيث", pos: "adv", gloss: "where" },
            { surface: "يَبِيْتُوْنَ", lemma: "بات", pos: "verb", features: "impf.3mp", root: "ب ي ت", gloss: "they spend the night" },
          ],
        },
        {
          id: "qr2-45-018",
          ar: "وَهَذَا الْيَوْمُ يُسَمَّىٰ يَوْمَ التَّرْوِيَةِ.",
          en: "This day is called the Day of Tarwiyah.",
          tokens: [
            { surface: "وَهَذَا", lemma: "هذا", pos: "dem", features: "conj+dem", gloss: "and this" },
            { surface: "الْيَوْمُ", lemma: "يوم", pos: "noun", features: "def.nom", root: "ي و م", gloss: "day" },
            { surface: "يُسَمَّىٰ", lemma: "سمى", pos: "verb", features: "pass.impf.3ms", root: "س م و", gloss: "is called" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "the Day of" },
            { surface: "التَّرْوِيَةِ", lemma: "تروية", pos: "noun", features: "def.gen", root: "ر و ي", gloss: "Tarwiyah (provisioning)" },
          ],
        },
      ],
      checks: [
        {
          q: "مَا اسْمُ الْيَوْمِ الثَّامِنِ مِنْ ذِي الْحِجَّةِ؟",
          options: ["يَوْمُ التَّرْوِيَةِ", "يَوْمُ عَرَفَةَ", "يَوْمُ النَّحْرِ"],
          answer: 0,
          qEn: "What is the name of the eighth day of Dhul-Hijjah?",
          optionsEn: ["The Day of Tarwiyah", "The Day of ʿArafah", "The Day of Sacrifice"],
        },
        {
          q: "مَاذَا كَانَ النَّبِيُّ ﷺ يَقُوْلُ إِذَا رَأَىٰ الْهِلاَلَ؟",
          options: ["الدُّعَاءَ الْمَذْكُوْرَ فِي الدَّرْسِ", "لاَ شَيْءَ", "آيَةً مِنَ الْقُرْآنِ"],
          answer: 0,
          qEn: "What did the Prophet ﷺ say when he saw the crescent moon?",
          optionsEn: ["The supplication mentioned in the lesson", "Nothing", "A verse from the Qur'an"],
        },
      ],
    },
    // Paragraph 2: the Hajj-day sequence, and the shared-share sacrificial cow.
    {
      en: "On the morning of the ninth day -- the Day of ʿArafah -- the pilgrims go to ʿArafāt, and remain there supplicating and remembering Allah. From there they go to Muzdalifah and spend the night. On the morning of the tenth day they return to Minā and sacrifice -- that is the Day of Sacrifice, the day of the Eid. My father had bought a fat cow for the sacrifice. He said, 'It has seven shares: two for me and your mother, one for you, and four for your two brothers and two sisters.' My father used to feed it and water it himself, saying, 'In that is virtue and reward.'",
      sentences: [
        {
          id: "qr2-45-019",
          ar: "وَفِي صَبَاحِ الْيَوْمِ التَّاسِعِ ،",
          en: "On the morning of the ninth day,",
          tokens: [
            { surface: "وَفِي", lemma: "في", pos: "prep", features: "conj+prep", gloss: "and on" },
            { surface: "صَبَاحِ", lemma: "صباح", pos: "noun", features: "gen.constr", root: "ص ب ح", gloss: "the morning of" },
            { surface: "الْيَوْمِ", lemma: "يوم", pos: "noun", features: "def.gen", root: "ي و م", gloss: "the day" },
            { surface: "التَّاسِعِ", lemma: "تاسع", pos: "adj", features: "def.gen", root: "ت س ع", gloss: "the ninth" },
          ],
        },
        {
          id: "qr2-45-020",
          ar: "وَهُوَ يَوْمُ عَرَفَةَ ،",
          en: "which is the Day of ʿArafah,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "dem", features: "conj+3ms", gloss: "and it (is)" },
            { surface: "يَوْمُ", lemma: "يوم", pos: "noun", features: "nom.constr", root: "ي و م", gloss: "the day of" },
            { surface: "عَرَفَةَ", lemma: "عرفة", pos: "proper", features: "gen", root: "ع ر ف", gloss: "ʿArafah" },
          ],
        },
        {
          id: "qr2-45-021",
          ar: "يَذْهَبُ الْحُجَّاجُ إِلَىٰ عَرَفَاتٍ ،",
          en: "the pilgrims go to ʿArafāt,",
          tokens: [
            { surface: "يَذْهَبُ", lemma: "ذهب", pos: "verb", features: "impf.3ms", root: "ذ ه ب", gloss: "go" },
            { surface: "الْحُجَّاجُ", lemma: "حاج", pos: "noun", features: "pl.def.nom", root: "ح ج ج", gloss: "the pilgrims" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "عَرَفَاتٍ", lemma: "عرفات", pos: "proper", features: "indef.gen", root: "ع ر ف", gloss: "ʿArafāt" },
          ],
        },
        {
          id: "qr2-45-022",
          ar: "وَيَظَلُّوْنَ هُنَالِكَ يَدْعُوْنَ وَيَذْكُرُوْنَ اللهَ ،",
          en: "and remain there supplicating and remembering Allah,",
          tokens: [
            { surface: "وَيَظَلُّوْنَ", lemma: "ظل", pos: "verb", features: "conj+impf.3mp", root: "ظ ل ل", gloss: "and they remain" },
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", root: "", gloss: "there" },
            { surface: "يَدْعُوْنَ", lemma: "دعا", pos: "verb", features: "impf.3mp", root: "د ع و", gloss: "supplicating" },
            { surface: "وَيَذْكُرُوْنَ", lemma: "ذكر", pos: "verb", features: "conj+impf.3mp", root: "ذ ك ر", gloss: "and remembering" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", root: "", gloss: "Allah" },
          ],
        },
        {
          id: "qr2-45-023",
          ar: "وَيَذْهَبُوْنَ مِنْهَا إِلَىٰ الْمُزْدَلِفَةِ وَيَبِيْتُوْنَ هُنَالِكَ ،",
          en: "then they go from there to Muzdalifah and spend the night there,",
          tokens: [
            { surface: "وَيَذْهَبُوْنَ", lemma: "ذهب", pos: "verb", features: "conj+impf.3mp", root: "ذ ه ب", gloss: "and they go" },
            { surface: "مِنْهَا", lemma: "من", pos: "prep", features: "prep+3fs", gloss: "from it (ʿArafāt)" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "الْمُزْدَلِفَةِ", lemma: "مزدلفة", pos: "proper", features: "def.gen", root: "ز ل ف", gloss: "Muzdalifah" },
            { surface: "وَيَبِيْتُوْنَ", lemma: "بات", pos: "verb", features: "conj+impf.3mp", root: "ب ي ت", gloss: "and they spend the night" },
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", root: "", gloss: "there" },
          ],
        },
        {
          id: "qr2-45-024",
          ar: "وَفِيْ صَبَاحِ الْيَوْمِ الْعَاشِرِ يَرْجِعُوْنَ إِلَىٰ مِنَىٰ وَيَنْحَرُوْنَ ،",
          en: "and on the morning of the tenth day they return to Minā and sacrifice,",
          tokens: [
            { surface: "وَفِيْ", lemma: "في", pos: "prep", features: "conj+prep", gloss: "and on" },
            { surface: "صَبَاحِ", lemma: "صباح", pos: "noun", features: "gen.constr", root: "ص ب ح", gloss: "the morning of" },
            { surface: "الْيَوْمِ", lemma: "يوم", pos: "noun", features: "def.gen", root: "ي و م", gloss: "the day" },
            { surface: "الْعَاشِرِ", lemma: "عاشر", pos: "adj", features: "def.gen", root: "ع ش ر", gloss: "the tenth" },
            { surface: "يَرْجِعُوْنَ", lemma: "رجع", pos: "verb", features: "impf.3mp", root: "ر ج ع", gloss: "they return" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "مِنَىٰ", lemma: "منى", pos: "proper", features: "acc", gloss: "Minā" },
            { surface: "وَيَنْحَرُوْنَ", lemma: "نحر", pos: "verb", features: "conj+impf.3mp", root: "ن ح ر", gloss: "and they sacrifice" },
          ],
        },
        {
          id: "qr2-45-025",
          ar: "وَذَلِكَ يَوْمُ النَّحْرِ وَهُوَ يَوْمُ الْعِيْدِ.",
          en: "That is the Day of Sacrifice, the day of the Eid.",
          tokens: [
            { surface: "وَذَلِكَ", lemma: "ذلك", pos: "dem", features: "conj+dem", gloss: "and that" },
            { surface: "يَوْمُ", lemma: "يوم", pos: "noun", features: "nom.constr", root: "ي و م", gloss: "the day of" },
            { surface: "النَّحْرِ", lemma: "نحر", pos: "noun", features: "def.gen", root: "ن ح ر", gloss: "the Sacrifice" },
            { surface: "وَهُوَ", lemma: "هو", pos: "dem", features: "conj+3ms", gloss: "and it (is)" },
            { surface: "يَوْمُ", lemma: "يوم", pos: "noun", features: "nom.constr", root: "ي و م", gloss: "the day of" },
            { surface: "الْعِيْدِ", lemma: "عيد", pos: "noun", features: "def.gen", root: "ع و د", gloss: "the Eid" },
          ],
        },
        {
          id: "qr2-45-026",
          ar: "وَكَانَ أَبِيْ اشْتَرَىٰ بَقَرَةً سَمِيْنَةً لِلذَّبْحِ ،",
          en: "My father had bought a fat cow for the sacrifice,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and had" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom.constr+1s", root: "أ ب و", gloss: "my father" },
            { surface: "اشْتَرَىٰ", lemma: "اشترى", pos: "verb", features: "perf.3ms", root: "ش ر ي", gloss: "bought" },
            { surface: "بَقَرَةً", lemma: "بقرة", pos: "noun", features: "indef.acc", root: "ب ق ر", gloss: "a cow" },
            { surface: "سَمِيْنَةً", lemma: "سمين", pos: "adj", features: "indef.acc.f", root: "س م ن", gloss: "fat" },
            { surface: "لِلذَّبْحِ", lemma: "ذبح", pos: "noun", features: "prep+def.gen", root: "ذ ب ح", gloss: "for the sacrifice" },
          ],
        },
        {
          id: "qr2-45-027",
          ar: "قَالَ: فِيْهَا سَبْعَةُ سِهَامٍ: اثْنَانِ لِيْ وَلأُمِّكَ ،",
          en: "He said, 'It has seven shares: two for me and your mother,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "he said" },
            { surface: "فِيْهَا", lemma: "في", pos: "prep", features: "prep+3fs", gloss: "it has" },
            { surface: "سَبْعَةُ", lemma: "سبعة", pos: "num", features: "nom.constr", root: "س ب ع", gloss: "seven" },
            { surface: "سِهَامٍ", lemma: "سهم", pos: "noun", features: "pl.indef.gen", root: "س ه م", gloss: "shares" },
            { surface: "اثْنَانِ", lemma: "اثنان", pos: "num", features: "nom", root: "ث ن ي", gloss: "two" },
            { surface: "لِيْ", lemma: "ل", pos: "prep", features: "prep+1s", gloss: "for me" },
            { surface: "وَلأُمِّكَ", lemma: "أم", pos: "noun", features: "conj+prep+gen+2ms", root: "أ م م", gloss: "and for your mother" },
          ],
        },
        {
          id: "qr2-45-028",
          ar: "وَوَاحِدٌ لَكَ ،",
          en: "one for you,",
          tokens: [
            { surface: "وَوَاحِدٌ", lemma: "واحد", pos: "adj", features: "conj+indef.nom", root: "و ح د", gloss: "and one" },
            { surface: "لَكَ", lemma: "ل", pos: "prep", features: "prep+2ms", gloss: "for you" },
          ],
        },
        {
          id: "qr2-45-029",
          ar: "وَأَرْبَعَةٌ لأَخَوَيْكَ وَأُخْتَيْكَ.",
          en: "and four for your two brothers and two sisters.'",
          tokens: [
            { surface: "وَأَرْبَعَةٌ", lemma: "أربعة", pos: "num", features: "conj+indef.nom", root: "أ ر ب ع", gloss: "and four" },
            { surface: "لأَخَوَيْكَ", lemma: "أخو", pos: "noun", features: "prep+du.gen+2ms", root: "أ خ و", gloss: "for your two brothers" },
            { surface: "وَأُخْتَيْكَ", lemma: "أخت", pos: "noun", features: "conj+du.gen+2ms", root: "أ خ ت", gloss: "and your two sisters" },
          ],
        },
        {
          id: "qr2-45-030",
          ar: "وَكَانَ أَبِيْ يَعْلِفُهَا وَيَسْقِيْهَا بِنَفْسِهِ ،",
          en: "My father used to feed it and water it himself,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and used to" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom.constr+1s", root: "أ ب و", gloss: "my father" },
            { surface: "يَعْلِفُهَا", lemma: "علف", pos: "verb", features: "impf.3ms+3fs", root: "ع ل ف", gloss: "he feeds it" },
            { surface: "وَيَسْقِيْهَا", lemma: "سقى", pos: "verb", features: "conj+impf.3ms+3fs", root: "س ق ي", gloss: "and waters it" },
            { surface: "بِنَفْسِهِ", lemma: "نفس", pos: "noun", features: "prep+gen+3ms", root: "ن ف س", gloss: "himself" },
          ],
        },
        {
          id: "qr2-45-031",
          ar: "وَقَالَ: فِيْ ذَلِكَ فَضِيْلَةٌ وَأَجْرٌ.",
          en: "saying, 'In that is virtue and reward.'",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and he said" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "ذَلِكَ", lemma: "ذلك", pos: "dem", gloss: "that" },
            { surface: "فَضِيْلَةٌ", lemma: "فضيلة", pos: "noun", features: "indef.nom", root: "ف ض ل", gloss: "virtue" },
            { surface: "وَأَجْرٌ", lemma: "أجر", pos: "noun", features: "conj+indef.nom", root: "أ ج ر", gloss: "and reward" },
          ],
        },
      ],
      checks: [
        {
          q: "أَيْنَ يَبِيْتُ الْحُجَّاجُ لَيْلَةَ الْيَوْمِ الْعَاشِرِ؟",
          options: ["فِي الْمُزْدَلِفَةِ", "فِي مِنَىٰ", "فِي عَرَفَاتٍ"],
          answer: 0,
          qEn: "Where do the pilgrims spend the night before the tenth day?",
          optionsEn: ["In Muzdalifah", "In Minā", "In ʿArafāt"],
        },
        {
          q: "كَمْ سَهْماً فِي الْبَقَرَةِ الَّتِيْ اشْتَرَاهَا الأَبُ؟",
          options: ["سَبْعَةُ سِهَامٍ", "خَمْسَةُ سِهَامٍ", "عَشَرَةُ سِهَامٍ"],
          answer: 0,
          qEn: "How many shares were in the cow the father bought?",
          optionsEn: ["Seven shares", "Five shares", "Ten shares"],
        },
      ],
    },
    // Paragraph 3: Eid morning -- new clothes, the prayer and khutbah, and the sacrifice.
    {
      en: "On the tenth day we changed our clothes. My father had prepared new clothes for me. As for the shoes, they were my Eid shoes -- clean, not worn out, as if new, because I had only worn them a little. My father perfumed himself and changed his clothes, and we went out with the congregation to the prayer ground. He said 'Allahu Akbar' and 'Lā ilāha illā Allāh' aloud. The imam led the people in prayer and gave the sermon, and mentioned the rulings of the sacrifice. We returned from the prayer ground by another road, and my father slaughtered the cow, saying Allah's name and 'Allahu Akbar.'",
      sentences: [
        {
          id: "qr2-45-032",
          ar: "وَالْيَوْمُ الْعَاشِرُ غَيَّرْنَا اللِّبَاسَ ،",
          en: "On the tenth day we changed our clothes,",
          tokens: [
            { surface: "وَالْيَوْمُ", lemma: "يوم", pos: "noun", features: "conj+def.nom", root: "ي و م", gloss: "and [on] the day" },
            { surface: "الْعَاشِرُ", lemma: "عاشر", pos: "adj", features: "def.nom", root: "ع ش ر", gloss: "the tenth" },
            { surface: "غَيَّرْنَا", lemma: "غيّر", pos: "verb", features: "perf.1p", root: "غ ي ر", gloss: "we changed" },
            { surface: "اللِّبَاسَ", lemma: "لباس", pos: "noun", features: "def.acc", root: "ل ب س", gloss: "the clothing" },
          ],
        },
        {
          id: "qr2-45-033",
          ar: "وَكَانَ أَبِيْ قَدْ أَعَدَّ لِيْ لِبَاساً جَدِيْداً ،",
          en: "My father had prepared new clothes for me,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and had" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom.constr+1s", root: "أ ب و", gloss: "my father" },
            { surface: "قَدْ", lemma: "قد", pos: "part", gloss: "already" },
            { surface: "أَعَدَّ", lemma: "أعد", pos: "verb", features: "perf.3ms", root: "ع د د", gloss: "prepared" },
            { surface: "لِيْ", lemma: "ل", pos: "prep", features: "prep+1s", gloss: "for me" },
            { surface: "لِبَاساً", lemma: "لباس", pos: "noun", features: "indef.acc", root: "ل ب س", gloss: "clothing" },
            { surface: "جَدِيْداً", lemma: "جديد", pos: "adj", features: "indef.acc", root: "ج د د", gloss: "new" },
          ],
        },
        {
          id: "qr2-45-034",
          ar: "أَمَّا الْحِذَاءُ ،",
          en: "As for the shoes,",
          tokens: [
            { surface: "أَمَّا", lemma: "أما", pos: "part", gloss: "as for" },
            { surface: "الْحِذَاءُ", lemma: "حذاء", pos: "noun", features: "def.nom", root: "ح ذ و", gloss: "the shoes" },
          ],
        },
        {
          id: "qr2-45-035",
          ar: "فَكَانَ حِذَاءَ الْعِيْدِ ،",
          en: "they were the Eid shoes,",
          tokens: [
            { surface: "فَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "then it was" },
            { surface: "حِذَاءَ", lemma: "حذاء", pos: "noun", features: "acc.constr", root: "ح ذ و", gloss: "the shoes of" },
            { surface: "الْعِيْدِ", lemma: "عيد", pos: "noun", features: "def.gen", root: "ع و د", gloss: "the Eid" },
          ],
        },
        {
          id: "qr2-45-036",
          ar: "وَكَانَ نَظِيْفاً لَمْ يَتَوَسَّخْ ،",
          en: "and they were clean, not soiled,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "نَظِيْفاً", lemma: "نظيف", pos: "adj", features: "indef.acc", root: "ن ظ ف", gloss: "clean" },
            { surface: "لَمْ", lemma: "لم", pos: "part", gloss: "not" },
            { surface: "يَتَوَسَّخْ", lemma: "توسخ", pos: "verb", features: "jussive.3ms", root: "و س خ", gloss: "become soiled" },
          ],
        },
        {
          id: "qr2-45-037",
          ar: "كَأَنَّهُ جَدِيْدٌ ،",
          en: "as if it were new,",
          tokens: [
            { surface: "كَأَنَّهُ", lemma: "كأن", pos: "part", features: "part+3ms", gloss: "as if it (were)" },
            { surface: "جَدِيْدٌ", lemma: "جديد", pos: "adj", features: "indef.nom", root: "ج د د", gloss: "new" },
          ],
        },
        {
          id: "qr2-45-038",
          ar: "لأَنِّيْ مَا كُنْتُ أَلْبَسُهُ إِلاَّ قَلِيْلاً ،",
          en: "because I had only worn it a little,",
          tokens: [
            { surface: "لأَنِّيْ", lemma: "لأن", pos: "part", features: "part+1s", gloss: "because I" },
            { surface: "مَا", lemma: "ما", pos: "part", gloss: "not" },
            { surface: "كُنْتُ", lemma: "كان", pos: "verb", features: "perf.1s", root: "ك و ن", gloss: "I was" },
            { surface: "أَلْبَسُهُ", lemma: "لبس", pos: "verb", features: "impf.1s+3ms", root: "ل ب س", gloss: "I wear it" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", gloss: "except, only" },
            { surface: "قَلِيْلاً", lemma: "قليل", pos: "adv", features: "indef.acc", root: "ق ل ل", gloss: "a little" },
          ],
        },
        {
          id: "qr2-45-039",
          ar: "وَتَطَيَّبَ أَبِيْ وَغَيَّرَ اللِّبَاسَ ،",
          en: "My father perfumed himself and changed his clothes,",
          tokens: [
            { surface: "وَتَطَيَّبَ", lemma: "تطيب", pos: "verb", features: "conj+perf.3ms", root: "ط ي ب", gloss: "and he perfumed himself" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom.constr+1s", root: "أ ب و", gloss: "my father" },
            { surface: "وَغَيَّرَ", lemma: "غيّر", pos: "verb", features: "conj+perf.3ms", root: "غ ي ر", gloss: "and changed" },
            { surface: "اللِّبَاسَ", lemma: "لباس", pos: "noun", features: "def.acc", root: "ل ب س", gloss: "the clothing" },
          ],
        },
        {
          id: "qr2-45-040",
          ar: "وَخَرَجْنَا مَعَ الْجَمَاعَةِ إِلَىٰ الْمُصَلَّىٰ ،",
          en: "and we went out with the congregation to the prayer ground,",
          tokens: [
            { surface: "وَخَرَجْنَا", lemma: "خرج", pos: "verb", features: "conj+perf.1p", root: "خ ر ج", gloss: "and we went out" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", gloss: "with" },
            { surface: "الْجَمَاعَةِ", lemma: "جماعة", pos: "noun", features: "def.gen", root: "ج م ع", gloss: "the congregation" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "الْمُصَلَّىٰ", lemma: "مصلى", pos: "noun", features: "def.gen", root: "ص ل و", gloss: "the prayer ground" },
          ],
        },
        {
          id: "qr2-45-041",
          ar: "فَكَبَّرَ وَهَلَّلَ جَهْراً ،",
          en: "and he said 'Allahu Akbar' and 'Lā ilāha illā Allāh' aloud,",
          tokens: [
            { surface: "فَكَبَّرَ", lemma: "كبّر", pos: "verb", features: "conj+perf.3ms", root: "ك ب ر", gloss: "and he said 'Allāhu akbar'" },
            { surface: "وَهَلَّلَ", lemma: "هلّل", pos: "verb", features: "conj+perf.3ms", root: "ه ل ل", gloss: "and said 'lā ilāha illā Allāh'" },
            { surface: "جَهْراً", lemma: "جهر", pos: "noun", features: "indef.acc", root: "ج ه ر", gloss: "aloud" },
          ],
        },
        {
          id: "qr2-45-042",
          ar: "وَصَلَّىٰ الإِمَامُ بِالنَّاسِ وَخَطَبَ ،",
          en: "The imam led the people in prayer and gave the sermon,",
          tokens: [
            { surface: "وَصَلَّىٰ", lemma: "صلى", pos: "verb", features: "conj+perf.3ms", root: "ص ل و", gloss: "and he led in prayer" },
            { surface: "الإِمَامُ", lemma: "إمام", pos: "noun", features: "def.nom", root: "أ م م", gloss: "the imam" },
            { surface: "بِالنَّاسِ", lemma: "ناس", pos: "noun", features: "prep+def.gen", root: "ن و س", gloss: "with the people" },
            { surface: "وَخَطَبَ", lemma: "خطب", pos: "verb", features: "conj+perf.3ms", root: "خ ط ب", gloss: "and gave the sermon" },
          ],
        },
        {
          id: "qr2-45-043",
          ar: "وَذَكَرَ أَحْكَامَ الأُضْحِيَّةِ ،",
          en: "and mentioned the rulings of the sacrifice,",
          tokens: [
            { surface: "وَذَكَرَ", lemma: "ذكر", pos: "verb", features: "conj+perf.3ms", root: "ذ ك ر", gloss: "and he mentioned" },
            { surface: "أَحْكَامَ", lemma: "حكم", pos: "noun", features: "pl.acc.constr", root: "ح ك م", gloss: "the rulings of" },
            { surface: "الأُضْحِيَّةِ", lemma: "أضحية", pos: "noun", features: "def.gen", root: "ض ح ي", gloss: "the sacrificial animal" },
          ],
        },
        {
          id: "qr2-45-044",
          ar: "وَرَجَعْنَا مِنَ الْمُصَلَّىٰ بِطَرِيْقٍ آخَرَ ،",
          en: "We returned from the prayer ground by another road,",
          tokens: [
            { surface: "وَرَجَعْنَا", lemma: "رجع", pos: "verb", features: "conj+perf.1p", root: "ر ج ع", gloss: "and we returned" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "الْمُصَلَّىٰ", lemma: "مصلى", pos: "noun", features: "def.gen", root: "ص ل و", gloss: "the prayer ground" },
            { surface: "بِطَرِيْقٍ", lemma: "طريق", pos: "noun", features: "prep+indef.gen", root: "ط ر ق", gloss: "by a road" },
            { surface: "آخَرَ", lemma: "آخر", pos: "adj", features: "indef.gen", root: "أ خ ر", gloss: "another" },
          ],
        },
        {
          id: "qr2-45-045",
          ar: "وَذَبَحَ أَبِيْ الْبَقَرَةَ ،",
          en: "and my father slaughtered the cow,",
          tokens: [
            { surface: "وَذَبَحَ", lemma: "ذبح", pos: "verb", features: "conj+perf.3ms", root: "ذ ب ح", gloss: "and he slaughtered" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom.constr+1s", root: "أ ب و", gloss: "my father" },
            { surface: "الْبَقَرَةَ", lemma: "بقرة", pos: "noun", features: "def.acc", root: "ب ق ر", gloss: "the cow" },
          ],
        },
        {
          id: "qr2-45-046",
          ar: "وَسَمَّىٰ اللهَ وَكَبَّرَ.",
          en: "saying Allah's name and 'Allahu Akbar.'",
          tokens: [
            { surface: "وَسَمَّىٰ", lemma: "سمى", pos: "verb", features: "conj+perf.3ms", root: "س م و", gloss: "and he said Allah's name" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", root: "", gloss: "Allah" },
            { surface: "وَكَبَّرَ", lemma: "كبّر", pos: "verb", features: "conj+perf.3ms", root: "ك ب ر", gloss: "and said 'Allāhu akbar'" },
          ],
        },
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ أَبِيْ قَبْلَ أَنْ يَذْبَحَ الْبَقَرَةَ؟",
          options: ["سَمَّىٰ اللهَ وَكَبَّرَ", "صَامَ", "سَافَرَ"],
          answer: 0,
          qEn: "What did the father do before slaughtering the cow?",
          optionsEn: ["He said Allah's name and 'Allahu Akbar'", "He fasted", "He traveled"],
        },
        {
          q: "إِلَىٰ أَيْنَ خَرَجُوا صَبَاحَ الْعِيْدِ؟",
          options: ["إِلَىٰ الْمُصَلَّىٰ", "إِلَىٰ السُّوْقِ", "إِلَىٰ الْمَسْجِدِ الْحَرَامِ"],
          answer: 0,
          qEn: "Where did they go on Eid morning?",
          optionsEn: ["To the prayer ground", "To the market", "To the Sacred Mosque"],
        },
      ],
    },
    // Paragraph 4: distributing the meat and drying the surplus into qadeed.
    {
      en: "My mother distributed the meat to the poor, relatives, and friends, and cooked for us too -- we ate lunch from nothing but the meat of our sacrifice. A lot of meat remained in surplus, so my mother kept it and dried it, and we kept eating from this dried meat for a long time.",
      sentences: [
        {
          id: "qr2-45-047",
          ar: "وَوَزَّعَتْ أُمِّيْ اللَّحْمَ عَلَىٰ الْمَسَاكِيْنِ وَالأَقَارِبِ وَالأَصْدِقَاءِ ،",
          en: "My mother distributed the meat to the poor, relatives, and friends,",
          tokens: [
            { surface: "وَوَزَّعَتْ", lemma: "وزع", pos: "verb", features: "conj+perf.3fs", root: "و ز ع", gloss: "and she distributed" },
            { surface: "أُمِّيْ", lemma: "أم", pos: "noun", features: "nom.constr+1s", root: "أ م م", gloss: "my mother" },
            { surface: "اللَّحْمَ", lemma: "لحم", pos: "noun", features: "def.acc", root: "ل ح م", gloss: "the meat" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", gloss: "upon, to" },
            { surface: "الْمَسَاكِيْنِ", lemma: "مسكين", pos: "noun", features: "pl.def.gen", root: "س ك ن", gloss: "the poor" },
            { surface: "وَالأَقَارِبِ", lemma: "أقارب", pos: "noun", features: "conj+def.gen", root: "ق ر ب", gloss: "and the relatives" },
            { surface: "وَالأَصْدِقَاءِ", lemma: "صديق", pos: "noun", features: "conj+pl.def.gen", root: "ص د ق", gloss: "and the friends" },
          ],
        },
        {
          id: "qr2-45-048",
          ar: "وَطَبَخَتْ لَنَا أَيْضاً ،",
          en: "and cooked for us too,",
          tokens: [
            { surface: "وَطَبَخَتْ", lemma: "طبخ", pos: "verb", features: "conj+perf.3fs", root: "ط ب خ", gloss: "and she cooked" },
            { surface: "لَنَا", lemma: "ل", pos: "prep", features: "prep+1p", gloss: "for us" },
            { surface: "أَيْضاً", lemma: "أيضا", pos: "adv", features: "indef.acc", gloss: "also" },
          ],
        },
        {
          id: "qr2-45-049",
          ar: "فَمَا تَغَدَّيْنَا إِلاَّ بِلَحْمِ أُضْحِيَّتِنَا.",
          en: "and we ate lunch from nothing but the meat of our sacrifice.",
          tokens: [
            { surface: "فَمَا", lemma: "ما", pos: "part", features: "conj+neg", gloss: "so not" },
            { surface: "تَغَدَّيْنَا", lemma: "تغدى", pos: "verb", features: "perf.1p", root: "غ د و", gloss: "we ate lunch" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", gloss: "except" },
            { surface: "بِلَحْمِ", lemma: "لحم", pos: "noun", features: "prep+gen.constr", root: "ل ح م", gloss: "with the meat of" },
            { surface: "أُضْحِيَّتِنَا", lemma: "أضحية", pos: "noun", features: "gen.constr+1p", root: "ض ح ي", gloss: "our sacrifice" },
          ],
        },
        {
          id: "qr2-45-050",
          ar: "وَتَوَفَّرَ كَثِيْرٌ مِنَ اللَّحْمِ ،",
          en: "A lot of meat remained in surplus,",
          tokens: [
            { surface: "وَتَوَفَّرَ", lemma: "توفر", pos: "verb", features: "conj+perf.3ms", root: "و ف ر", gloss: "and there remained in surplus" },
            { surface: "كَثِيْرٌ", lemma: "كثير", pos: "adj", features: "indef.nom", root: "ك ث ر", gloss: "much, a lot" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "اللَّحْمِ", lemma: "لحم", pos: "noun", features: "def.gen", root: "ل ح م", gloss: "the meat" },
          ],
        },
        {
          id: "qr2-45-051",
          ar: "فَاحْتَفَظَتْ بِهِ أُمِّيْ وَأَيْبَسَتْهُ ،",
          en: "so my mother kept it and dried it,",
          tokens: [
            { surface: "فَاحْتَفَظَتْ", lemma: "احتفظ", pos: "verb", features: "conj+perf.3fs", root: "ح ف ظ", gloss: "so she kept" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", gloss: "it" },
            { surface: "أُمِّيْ", lemma: "أم", pos: "noun", features: "nom.constr+1s", root: "أ م م", gloss: "my mother" },
            { surface: "وَأَيْبَسَتْهُ", lemma: "أيبس", pos: "verb", features: "conj+perf.3fs+3ms", root: "ي ب س", gloss: "and dried it" },
          ],
        },
        {
          id: "qr2-45-052",
          ar: "وَلَمْ نَزَلْ نَأْكُلُ مِنْ هَذَا الْقَدِيْدِ مُدَّةً طَوِيْلَةً.",
          en: "and we kept eating from this dried meat for a long time.",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "نَزَلْ", lemma: "زال", pos: "verb", features: "jussive.1p", root: "ز ي ل", gloss: "we ceased (lam nazal = we kept on)" },
            { surface: "نَأْكُلُ", lemma: "أكل", pos: "verb", features: "impf.1p", root: "أ ك ل", gloss: "we eat" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "هَذَا", lemma: "هذا", pos: "dem", gloss: "this" },
            { surface: "الْقَدِيْدِ", lemma: "قديد", pos: "noun", features: "def.gen", root: "ق د د", gloss: "the dried meat" },
            { surface: "مُدَّةً", lemma: "مدة", pos: "noun", features: "indef.acc", root: "م د د", gloss: "a period" },
            { surface: "طَوِيْلَةً", lemma: "طويل", pos: "adj", features: "indef.acc.f", root: "ط و ل", gloss: "long" },
          ],
        },
      ],
      checks: [
        {
          q: "عَلَىٰ مَنْ وَزَّعَتِ الأُمُّ اللَّحْمَ؟",
          options: ["عَلَىٰ الْمَسَاكِيْنِ وَالأَقَارِبِ وَالأَصْدِقَاءِ", "عَلَىٰ الْجِيْرَانِ فَقَطْ", "عَلَىٰ التُّجَّارِ"],
          answer: 0,
          qEn: "To whom did the mother distribute the meat?",
          optionsEn: ["To the poor, relatives, and friends", "To the neighbors only", "To the merchants"],
        },
        {
          q: "مَاذَا فَعَلَتِ الأُمُّ بِالَّذِيْ تَوَفَّرَ مِنَ اللَّحْمِ؟",
          options: ["احْتَفَظَتْ بِهِ وَأَيْبَسَتْهُ قَدِيْداً", "رَمَتْهُ", "بَاعَتْهُ"],
          answer: 0,
          qEn: "What did the mother do with the surplus meat?",
          optionsEn: ["She kept it and dried it into qadeed", "She threw it away", "She sold it"],
        },
      ],
    },
    // Paragraph 5: three days of banquets, and the father's own gathering.
    {
      en: "During the three days of Eid there were many banquets -- they were days of eating and drinking. My father invited a group of his friends and neighbors on the night of Eid day, and my mother made colorful food, making plenty of it and making it delicious.",
      sentences: [
        {
          id: "qr2-45-053",
          ar: "وَكَانَتْ فِيْ أَيَّامِ الْعِيْدِ الثَّلاَثَةِ مَآدِبُ كَثِيْرَةٌ ،",
          en: "During the three days of Eid there were many banquets,",
          tokens: [
            { surface: "وَكَانَتْ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and there were" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in, during" },
            { surface: "أَيَّامِ", lemma: "يوم", pos: "noun", features: "pl.gen.constr", root: "ي و م", gloss: "the days of" },
            { surface: "الْعِيْدِ", lemma: "عيد", pos: "noun", features: "def.gen", root: "ع و د", gloss: "the Eid" },
            { surface: "الثَّلاَثَةِ", lemma: "ثلاثة", pos: "num", features: "def.gen", root: "ث ل ث", gloss: "the three" },
            { surface: "مَآدِبُ", lemma: "مأدبة", pos: "noun", features: "pl.indef.nom", root: "أ د ب", gloss: "banquets" },
            { surface: "كَثِيْرَةٌ", lemma: "كثير", pos: "adj", features: "indef.nom.f", root: "ك ث ر", gloss: "many" },
          ],
        },
        {
          id: "qr2-45-054",
          ar: "وَكَانَتْ أَيَّامَ أَكْلٍ وَشُرْبٍ ،",
          en: "they were days of eating and drinking,",
          tokens: [
            { surface: "وَكَانَتْ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and they were" },
            { surface: "أَيَّامَ", lemma: "يوم", pos: "noun", features: "pl.acc.constr", root: "ي و م", gloss: "days of" },
            { surface: "أَكْلٍ", lemma: "أكل", pos: "noun", features: "indef.gen", root: "أ ك ل", gloss: "eating" },
            { surface: "وَشُرْبٍ", lemma: "شرب", pos: "noun", features: "conj+indef.gen", root: "ش ر ب", gloss: "and drinking" },
          ],
        },
        {
          id: "qr2-45-055",
          ar: "وَقَدْ دَعَا أَبِيْ لَيْلَةَ يَوْمِ الْعِيْدِ جَمَاعَةً مِنْ أَصْدِقَائِهِ وَجِيْرَانِهِ ،",
          en: "My father invited a group of his friends and neighbors on the night of Eid day,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", gloss: "and indeed" },
            { surface: "دَعَا", lemma: "دعا", pos: "verb", features: "perf.3ms", root: "د ع و", gloss: "he invited" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "nom.constr+1s", root: "أ ب و", gloss: "my father" },
            { surface: "لَيْلَةَ", lemma: "ليلة", pos: "noun", features: "acc.constr", root: "ل ي ل", gloss: "the night of" },
            { surface: "يَوْمِ", lemma: "يوم", pos: "noun", features: "gen.constr", root: "ي و م", gloss: "the day of" },
            { surface: "الْعِيْدِ", lemma: "عيد", pos: "noun", features: "def.gen", root: "ع و د", gloss: "the Eid" },
            { surface: "جَمَاعَةً", lemma: "جماعة", pos: "noun", features: "indef.acc", root: "ج م ع", gloss: "a group" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "أَصْدِقَائِهِ", lemma: "صديق", pos: "noun", features: "pl.gen.constr+3ms", root: "ص د ق", gloss: "his friends" },
            { surface: "وَجِيْرَانِهِ", lemma: "جار", pos: "noun", features: "conj+pl.gen.constr+3ms", root: "ج و ر", gloss: "and his neighbors" },
          ],
        },
        {
          id: "qr2-45-056",
          ar: "وَصَنَعَتْ أُمِّيْ طَعَاماً مُلَوَّناً ،",
          en: "and my mother made colorful food,",
          tokens: [
            { surface: "وَصَنَعَتْ", lemma: "صنع", pos: "verb", features: "conj+perf.3fs", root: "ص ن ع", gloss: "and she made" },
            { surface: "أُمِّيْ", lemma: "أم", pos: "noun", features: "nom.constr+1s", root: "أ م م", gloss: "my mother" },
            { surface: "طَعَاماً", lemma: "طعام", pos: "noun", features: "indef.acc", root: "ط ع م", gloss: "food" },
            { surface: "مُلَوَّناً", lemma: "ملون", pos: "adj", features: "indef.acc", root: "ل و ن", gloss: "colorful" },
          ],
        },
        {
          id: "qr2-45-057",
          ar: "فَأَكْثَرَتْ وَأَطَابَتْ.",
          en: "making plenty of it and making it delicious.",
          tokens: [
            { surface: "فَأَكْثَرَتْ", lemma: "أكثر", pos: "verb", features: "conj+perf.3fs", root: "ك ث ر", gloss: "so she made much" },
            { surface: "وَأَطَابَتْ", lemma: "أطاب", pos: "verb", features: "conj+perf.3fs", root: "ط ي ب", gloss: "and made it delicious" },
          ],
        },
      ],
      checks: [
        {
          q: "مَنْ دَعَا أَبِي لَيْلَةَ يَوْمِ الْعِيْدِ؟",
          options: ["جَمَاعَةً مِنْ أَصْدِقَائِهِ وَجِيْرَانِهِ", "التُّجَّارَ", "الْغُرَبَاءَ"],
          answer: 0,
          qEn: "Whom did the father invite on the night of Eid day?",
          optionsEn: ["A group of his friends and neighbors", "Merchants", "Strangers"],
        },
        {
          q: "كَيْفَ كَانَ الطَّعَامُ الَّذِيْ صَنَعَتْهُ الأُمُّ؟",
          options: ["مُلَوَّناً وَلَذِيْذاً", "بَسِيْطاً", "بَارِداً"],
          answer: 0,
          qEn: "What was the food the mother made like?",
          optionsEn: ["Colorful and delicious", "Simple", "Cold"],
        },
      ],
    },
    // Paragraph 6: the neighbor's banquet, and the imam's takbir through the 13th.
    {
      en: "On the second day we were guests at the home of our generous neighbor, Sayyid Husayn the physician, and it was a magnificent banquet -- I did not eat as much meat in the whole length of the month as I ate in three days, and it did not harm me at all. I used to hear the imam, from the dawn of the Day of ʿArafah to the afternoon of the last day of the Days of Tashrīq -- that is, the thirteenth of Dhul-Hijjah -- saying 'Allahu Akbar' and 'Lā ilāha illā Allāh' right after every prescribed prayer.",
      sentences: [
        {
          id: "qr2-45-058",
          ar: "وَالْيَوْمَ الثَّانِيْ كُنَّا ضُيُوْفاً عِنْدَ جَارِنَا الْكَرِيْمِ: السَّيِّدِ حُسَيْنِ الطَّبِيْبِ ،",
          en: "On the second day we were guests at the home of our generous neighbor: Sayyid Husayn the physician,",
          tokens: [
            { surface: "وَالْيَوْمَ", lemma: "يوم", pos: "noun", features: "conj+def.acc", root: "ي و م", gloss: "and on the day" },
            { surface: "الثَّانِيْ", lemma: "ثاني", pos: "adj", features: "def.acc", root: "ث ن ي", gloss: "the second" },
            { surface: "كُنَّا", lemma: "كان", pos: "verb", features: "perf.1p", root: "ك و ن", gloss: "we were" },
            { surface: "ضُيُوْفاً", lemma: "ضيف", pos: "noun", features: "pl.indef.acc", root: "ض ي ف", gloss: "guests" },
            { surface: "عِنْدَ", lemma: "عند", pos: "noun", features: "acc", root: "ع ن د", gloss: "at, with" },
            { surface: "جَارِنَا", lemma: "جار", pos: "noun", features: "gen.constr+1p", root: "ج و ر", gloss: "our neighbor" },
            { surface: "الْكَرِيْمِ", lemma: "كريم", pos: "adj", features: "def.gen", root: "ك ر م", gloss: "the generous" },
            { surface: "السَّيِّدِ", lemma: "سيد", pos: "noun", features: "def.gen", root: "س و د", gloss: "Sayyid, Mr." },
            { surface: "حُسَيْنِ", lemma: "حسين", pos: "proper", features: "gen", root: "ح س ن", gloss: "Husayn" },
            { surface: "الطَّبِيْبِ", lemma: "طبيب", pos: "noun", features: "def.gen", root: "ط ب ب", gloss: "the physician" },
          ],
        },
        {
          id: "qr2-45-059",
          ar: "وَكَانَتْ مَأْدُبَةً عَظِيْمَةً ،",
          en: "and it was a magnificent banquet,",
          tokens: [
            { surface: "وَكَانَتْ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and it was" },
            { surface: "مَأْدُبَةً", lemma: "مأدبة", pos: "noun", features: "indef.acc", root: "أ د ب", gloss: "a banquet" },
            { surface: "عَظِيْمَةً", lemma: "عظيم", pos: "adj", features: "indef.acc.f", root: "ع ظ م", gloss: "magnificent" },
          ],
        },
        {
          id: "qr2-45-060",
          ar: "وَلَمْ آكُلْ مِنَ اللَّحْمِ فِيْ طُوْلِ الشَّهْرِ مَا أَكَلْتُ فِيْ ثَلاَثَةِ أَيَّامٍ وَلَمْ يَضُرَّ شَيْئاً.",
          en: "I did not eat as much meat in the whole length of the month as I ate in three days, and it did not harm me at all.",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "آكُلْ", lemma: "أكل", pos: "verb", features: "jussive.1s", root: "أ ك ل", gloss: "did I eat" },
            { surface: "مِنَ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "اللَّحْمِ", lemma: "لحم", pos: "noun", features: "def.gen", root: "ل ح م", gloss: "the meat" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "طُوْلِ", lemma: "طول", pos: "noun", features: "gen.constr", root: "ط و ل", gloss: "the length of" },
            { surface: "الشَّهْرِ", lemma: "شهر", pos: "noun", features: "def.gen", root: "ش ه ر", gloss: "the month" },
            { surface: "مَا", lemma: "ما", pos: "rel", gloss: "[as much as] what" },
            { surface: "أَكَلْتُ", lemma: "أكل", pos: "verb", features: "perf.1s", root: "أ ك ل", gloss: "I ate" },
            { surface: "فِيْ", lemma: "في", pos: "prep", gloss: "in" },
            { surface: "ثَلاَثَةِ", lemma: "ثلاثة", pos: "num", features: "gen.constr", root: "ث ل ث", gloss: "three" },
            { surface: "أَيَّامٍ", lemma: "يوم", pos: "noun", features: "pl.indef.gen", root: "ي و م", gloss: "days" },
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", gloss: "and not" },
            { surface: "يَضُرَّ", lemma: "ضر", pos: "verb", features: "jussive.3ms", root: "ض ر ر", gloss: "did it harm" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "anything" },
          ],
        },
        {
          id: "qr2-45-061",
          ar: "وَكُنْتُ أَسْمَعُ الإِمَامَ مِنْ فَجْرِ يَوْمِ عَرَفَةَ إِلَىٰ عَصْرِ الْيَوْمِ الأَخِيْرِ مِنْ أَيَّامِ التَّشْرِيْقِ يَعْنِيْ الثَّالِثَ عَشَرَ مِنْ ذِي الْحِجَّةِ يُكَبِّرُ وَيُهَلِّلُ دُبُرَ كُلِّ صَلاَةٍ مَكْتُوْبَةٍ.",
          en: "I used to hear the imam, from the dawn of the Day of ʿArafah to the afternoon of the last day of the Days of Tashrīq -- that is, the thirteenth of Dhul-Hijjah -- saying 'Allahu Akbar' and 'Lā ilāha illā Allāh' right after every prescribed prayer.",
          tokens: [
            { surface: "وَكُنْتُ", lemma: "كان", pos: "verb", features: "conj+perf.1s", root: "ك و ن", gloss: "and I used to" },
            { surface: "أَسْمَعُ", lemma: "سمع", pos: "verb", features: "impf.1s", root: "س م ع", gloss: "hear" },
            { surface: "الإِمَامَ", lemma: "إمام", pos: "noun", features: "def.acc", root: "أ م م", gloss: "the imam" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "from" },
            { surface: "فَجْرِ", lemma: "فجر", pos: "noun", features: "gen.constr", root: "ف ج ر", gloss: "the dawn of" },
            { surface: "يَوْمِ", lemma: "يوم", pos: "noun", features: "gen.constr", root: "ي و م", gloss: "the day of" },
            { surface: "عَرَفَةَ", lemma: "عرفة", pos: "proper", features: "gen", root: "ع ر ف", gloss: "ʿArafah" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", gloss: "to" },
            { surface: "عَصْرِ", lemma: "عصر", pos: "noun", features: "gen.constr", root: "ع ص ر", gloss: "the afternoon of" },
            { surface: "الْيَوْمِ", lemma: "يوم", pos: "noun", features: "def.gen", root: "ي و م", gloss: "the day" },
            { surface: "الأَخِيْرِ", lemma: "أخير", pos: "adj", features: "def.gen", root: "أ خ ر", gloss: "the last" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "أَيَّامِ", lemma: "يوم", pos: "noun", features: "pl.gen.constr", root: "ي و م", gloss: "the days of" },
            { surface: "التَّشْرِيْقِ", lemma: "تشريق", pos: "noun", features: "def.gen", root: "ش ر ق", gloss: "Tashrīq" },
            { surface: "يَعْنِيْ", lemma: "عنى", pos: "verb", features: "impf.3ms", root: "ع ن ي", gloss: "that is, meaning" },
            { surface: "الثَّالِثَ", lemma: "ثالث", pos: "adj", features: "acc", root: "ث ل ث", gloss: "the third" },
            { surface: "عَشَرَ", lemma: "عشر", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen (thirteenth)" },
            { surface: "مِنْ", lemma: "من", pos: "prep", gloss: "of" },
            { surface: "ذِي", lemma: "ذو", pos: "noun", features: "gen.constr", root: "ذ و ي", gloss: "possessor of" },
            { surface: "الْحِجَّةِ", lemma: "حجة", pos: "noun", features: "def.gen", root: "ح ج ج", gloss: "the pilgrimage (Dhul-Hijjah)" },
            { surface: "يُكَبِّرُ", lemma: "كبّر", pos: "verb", features: "impf.3ms", root: "ك ب ر", gloss: "saying 'Allāhu akbar'" },
            { surface: "وَيُهَلِّلُ", lemma: "هلّل", pos: "verb", features: "conj+impf.3ms", root: "ه ل ل", gloss: "and saying 'lā ilāha illā Allāh'" },
            { surface: "دُبُرَ", lemma: "دبر", pos: "noun", features: "acc.constr", root: "د ب ر", gloss: "right after" },
            { surface: "كُلِّ", lemma: "كل", pos: "noun", features: "gen.constr", root: "ك ل ل", gloss: "every" },
            { surface: "صَلاَةٍ", lemma: "صلاة", pos: "noun", features: "indef.gen", root: "ص ل و", gloss: "prayer" },
            { surface: "مَكْتُوْبَةٍ", lemma: "مكتوب", pos: "adj", features: "indef.gen.f", root: "ك ت ب", gloss: "prescribed" },
          ],
        },
      ],
      checks: [
        {
          q: "عِنْدَ مَنْ كَانُوا ضُيُوْفاً فِي الْيَوْمِ الثَّانِي مِنَ الْعِيْدِ؟",
          options: ["عِنْدَ جَارِهِمُ السَّيِّدِ حُسَيْنِ الطَّبِيْبِ", "عِنْدَ عَمِّهِمْ", "عِنْدَ الْمُعَلِّمِ"],
          answer: 0,
          qEn: "At whose home were they guests on the second day of Eid?",
          optionsEn: ["At their neighbor Sayyid Husayn the physician's home", "At their uncle's home", "At the teacher's home"],
        },
        {
          q: "إِلَىٰ مَتَىٰ كَانَ الإِمَامُ يُكَبِّرُ وَيُهَلِّلُ دُبُرَ كُلِّ صَلاَةٍ؟",
          options: ["إِلَىٰ عَصْرِ الثَّالِثَ عَشَرَ مِنْ ذِي الْحِجَّةِ", "إِلَىٰ آخِرِ الشَّهْرِ", "لَيْلَةً وَاحِدَةً فَقَطْ"],
          answer: 0,
          qEn: "Until when did the imam say the takbir and tahlil after every prayer?",
          optionsEn: ["Until the afternoon of the thirteenth of Dhul-Hijjah", "Until the end of the month", "Only one night"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "وَ",
        post: "أَبِيْ الْبَقَرَةَ ،",
        en: "And my father slaughtered the cow,",
        options: ["ذَبَحَ", "ذَبَحْتُ", "تَذْبَحُ", "نَذْبَحُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he slaughtered.",
          "1st person singular -- I slaughtered.",
          "2nd masculine or 3rd feminine present -- you/she slaughter.",
          "1st person plural present -- we slaughter.",
        ],
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "أُمِّيْ اللَّحْمَ عَلَىٰ الْمَسَاكِيْنِ ،",
        en: "And my mother distributed the meat to the poor,",
        options: ["وَزَّعَتْ", "وَزَّعْتُ", "يُوَزِّعُ", "وَزَّعُوْا"],
        answer: 0,
        rationales: [
          "Perfect 3rd feminine singular -- she distributed.",
          "1st person singular -- I distributed.",
          "3rd masculine singular present -- he distributes.",
          "3rd masculine plural -- they distributed.",
        ],
      },
      {
        type: "cloze",
        pre: "الْحُجَّاجُ",
        post: "إِلَىٰ عَرَفَاتٍ ،",
        en: "The pilgrims go to ʿArafāt,",
        options: ["يَذْهَبُوْنَ", "يَذْهَبُ", "ذَهَبْتُ", "نَذْهَبُ"],
        answer: 0,
        rationales: [
          "3rd person masculine plural present -- they go.",
          "3rd person masculine singular -- he goes.",
          "1st person singular perfect -- I went.",
          "1st person plural present -- we go.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "أَسْمَعُ الإِمَامَ",
        pre: "",
        post: "الإِمَامَ",
        targetPerson: "هِيَ",
        targetEn: "she",
        options: ["تَسْمَعُ", "يَسْمَعُ", "نَسْمَعُ", "يَسْمَعُوْنَ"],
        answer: 0,
        rationales: [
          "3rd feminine singular -- she hears.",
          "3rd masculine singular -- he hears.",
          "1st person plural -- we hear.",
          "3rd masculine plural -- they hear.",
        ],
      },
      {
        type: "shift",
        base: "يَذْكُرُوْنَ اللهَ",
        pre: "",
        post: "اللهَ",
        targetPerson: "أَنَا",
        targetEn: "I",
        options: ["أَذْكُرُ", "تَذْكُرُ", "نَذْكُرُ", "يَذْكُرُ"],
        answer: 0,
        rationales: [
          "1st person singular -- I remember.",
          "2nd masculine / 3rd feminine -- you/she remember.",
          "1st person plural -- we remember.",
          "3rd masculine singular -- he remembers.",
        ],
      },
    ],
  },
};

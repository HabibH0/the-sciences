// القراءة الراشدة, volume two, chapter 38 (printed heading "٣٨") --
// الْحَنِيْنُ إِلَىٰ الشَّهَادَةِ (١) -- "Yearning for Martyrdom (1)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 136-138 (PDF page
// index == printed page number). Page 136 opens fresh with the "(٣٨)"
// heading; page 138 ends with the "✳ ✳ ✳" divider partway down, confirming
// the chapter is exactly three pages (136-138); chapter 39 "الْحَنِيْنُ
// إِلَىٰ الشَّهَادَةِ (٢)" begins fresh on 139. A historical narrative: the
// young Companion 'Umayr ibn Abi Waqqas, sixteen years old, hides from the
// Prophet ﷺ before the Battle of Badr for fear of being turned away as too
// young; his elder brother Sa'd notices; the Prophet ﷺ does at first judge
// him too young, but relents when Umayr weeps, and Umayr is martyred at
// Badr.
//
// Seventh of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch37. Directly
// continues into ch39 (also authored in this pass), which covers the
// parallel stories of Rafi' ibn Khadij and Samurah ibn Jundub at Uhud.
//
// One within-chapter homograph clash, resolved with the established
// suffix convention: "مَا" is used as the ordinary negation particle
// ("مَا أَحَبَّ أَنْ يَنْصَرِفَ", "he did not want to turn away") but also as
// the interrogative "what" (embedded in "مَالَكَ", "what is the matter
// with you", and in "وَمَا يَصْنَعُوْنَ فِي الْحَرْبِ", "and what would they
// do in war") -- the bare lemma "ما" (pos "part") is kept for the negation
// sense, and the interrogative sense takes "ما-استفهام" (pos "part"),
// matching the convention introduced in ch35/ch36.
export const CHAPTER = {
  id: "ch38",
  title: {
    ar: "الْحَنِيْنُ إِلَىٰ الشَّهَادَةِ (١)",
    en: "Yearning for Martyrdom (1)"
  },
  pages: [136, 137, 138],
  newWords: [
    "خروج", "قاتل", "مشرك", "غلام", "عمر", "ست", "عشرة", "سنة", "خاف", "ألا",
    "قبل", "نبي", "صغير", "اجتهد", "أحد", "توارى", "أخ", "أكبر", "ما-استفهام", "أي",
    "شيء", "رد", "أحب", "لعل", "رزق", "شهادة", "نظر", "حرب", "ليس", "شغل",
    "طفل", "صنع", "كبير", "رجل", "انصرف", "قعد", "بيت", "لعب", "ترب", "صديق",
    "سبيل", "عصى", "عاند", "رضاء", "نال", "أبدا", "حيرة", "حزن", "شديد", "بلغ",
    "سن", "قتال", "حن", "موت", "جنة", "بعيد", "غير", "كيف", "وصل", "ثقل",
    "قلب", "بكى", "رق", "رقيق", "رفيق", "أجاز", "سأل", "فرح", "سرور", "كأنما",
    "تذكرة", "مسلم", "سبق", "كثير", "شاب", "شيخ", "غزوة", "رضي", "أرضى", "قتل",
    "شهيد"
  ],
  lemmas: {
    "لما": { root: "", pos: "part", gloss: "when" },
    "أراد": { root: "ر و د", pos: "verb", gloss: "to want" },
    "رسول": { root: "ر س ل", pos: "noun", gloss: "a messenger" },
    "الله": { root: "", pos: "proper", gloss: "Allah" },
    "خروج": { root: "خ ر ج", pos: "noun", gloss: "going out" },
    "إلى": { root: "", pos: "prep", gloss: "to" },
    "بدر": { root: "", pos: "proper", gloss: "Badr" },
    "قاتل": { root: "ق ت ل", pos: "verb", gloss: "to fight" },
    "مشرك": { root: "ش ر ك", pos: "noun", gloss: "a polytheist" },
    "خرج": { root: "خ ر ج", pos: "verb", gloss: "to go out" },
    "غلام": { root: "غ ل م", pos: "noun", gloss: "a boy, young man" },
    "اسم": { root: "س م و", pos: "noun", gloss: "a name" },
    "عمير": { root: "", pos: "proper", gloss: "Umayr" },
    "ابن": { root: "ب ن ي", pos: "noun", gloss: "son (of)" },
    "أب": { root: "أ ب و", pos: "noun", gloss: "father" },
    "وقاص": { root: "", pos: "proper", gloss: "Waqqas" },
    "عمر": { root: "ع م ر", pos: "noun", gloss: "age" },
    "ست": { root: "س ت ت", pos: "num", gloss: "six" },
    "عشرة": { root: "ع ش ر", pos: "num", gloss: "-teen, ten" },
    "سنة": { root: "س ن و", pos: "noun", gloss: "a year" },
    "كان": { root: "ك و ن", pos: "verb", gloss: "to be" },
    "خاف": { root: "خ و ف", pos: "verb", gloss: "to fear" },
    "ألا": { root: "", pos: "part", gloss: "that ... not" },
    "قبل": { root: "ق ب ل", pos: "verb", gloss: "to accept" },
    "نبي": { root: "ن ب أ", pos: "noun", gloss: "the Prophet" },
    "لأن": { root: "", pos: "conj", gloss: "because" },
    "هو": { root: "", pos: "noun", gloss: "he, it" },
    "صغير": { root: "ص غ ر", pos: "adj", gloss: "young, small" },
    "اجتهد": { root: "ج ه د", pos: "verb", gloss: "to strive, try hard" },
    "رأى": { root: "ر أ ي", pos: "verb", gloss: "to see" },
    "أحد": { root: "أ ح د", pos: "noun", gloss: "someone, anyone" },
    "توارى": { root: "و ر ي", pos: "verb", gloss: "to hide oneself", book_note: "تَوَارَىٰ يَتَوَارَىٰ: اسْتَتَرَ وَاخْتَفَىٰ." },
    "لكن": { root: "", pos: "conj", gloss: "but" },
    "أخ": { root: "أ خ و", pos: "noun", gloss: "brother" },
    "أكبر": { root: "ك ب ر", pos: "adj", gloss: "elder, older" },
    "سعد": { root: "", pos: "proper", gloss: "Sa'd" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "ما-استفهام": { root: "", pos: "part", gloss: "what" },
    "أي": { root: "أ ي ي", pos: "noun", gloss: "which" },
    "شيء": { root: "ش ي أ", pos: "noun", gloss: "a thing" },
    "يا": { root: "", pos: "part", gloss: "O" },
    "ل": { root: "", pos: "prep", gloss: "to, for" },
    "رد": { root: "ر د د", pos: "verb", gloss: "to turn back, send back" },
    "إن": { root: "", pos: "part", gloss: "indeed" },
    "أنا": { root: "", pos: "noun", gloss: "I" },
    "أحب": { root: "ح ب ب", pos: "verb", gloss: "to love, like" },
    "لعل": { root: "", pos: "part", gloss: "perhaps" },
    "رزق": { root: "ر ز ق", pos: "verb", gloss: "to grant, provide" },
    "شهادة": { root: "ش ه د", pos: "noun", gloss: "martyrdom" },
    "كما": { root: "", pos: "conj", gloss: "as, just as" },
    "نظر": { root: "ن ظ ر", pos: "verb", gloss: "to look" },
    "أن": { root: "", pos: "part", gloss: "that" },
    "حرب": { root: "ح ر ب", pos: "noun", gloss: "war" },
    "ليس": { root: "ل ي س", pos: "verb", gloss: "to not be" },
    "من": { root: "", pos: "prep", gloss: "of, from" },
    "شغل": { root: "ش غ ل", pos: "noun", gloss: "the business, concern (of)" },
    "طفل": { root: "ط ف ل", pos: "noun", gloss: "a child" },
    "ما": { root: "", pos: "part", gloss: "not" },
    "صنع": { root: "ص ن ع", pos: "verb", gloss: "to do, make" },
    "في": { root: "", pos: "prep", gloss: "in" },
    "كبير": { root: "ك ب ر", pos: "adj", gloss: "great, serious; grown, big (pl.)" },
    "على": { root: "", pos: "prep", gloss: "on, for" },
    "رجل": { root: "ر ج ل", pos: "noun", gloss: "a man" },
    "انصرف": { root: "ص ر ف", pos: "verb", gloss: "to turn away, leave" },
    "قعد": { root: "ق ع د", pos: "verb", gloss: "to sit, stay" },
    "بيت": { root: "ب ي ت", pos: "noun", gloss: "a house" },
    "أو": { root: "", pos: "conj", gloss: "or" },
    "لعب": { root: "ل ع ب", pos: "verb", gloss: "to play" },
    "مع": { root: "", pos: "prep", gloss: "with" },
    "ترب": { root: "ت ر ب", pos: "noun", gloss: "a peer, contemporary" },
    "صديق": { root: "ص د ق", pos: "noun", gloss: "a friend" },
    "مدينة": { root: "م د ن", pos: "proper", gloss: "Madinah" },
    "سبيل": { root: "س ب ل", pos: "noun", gloss: "a way, path" },
    "لا": { root: "", pos: "part", gloss: "not" },
    "إلا": { root: "", pos: "part", gloss: "except" },
    "عصى": { root: "ع ص ي", pos: "verb", gloss: "to disobey" },
    "عاند": { root: "ع ن د", pos: "verb", gloss: "to defy, oppose obstinately" },
    "رضاء": { root: "ر ض و", pos: "noun", gloss: "pleasure, approval" },
    "هل": { root: "", pos: "part", gloss: "is it that" },
    "نال": { root: "ن ي ل", pos: "verb", gloss: "to attain, obtain" },
    "إذا": { root: "", pos: "part", gloss: "if, when" },
    "أبدا": { root: "أ ب د", pos: "adv", gloss: "never, ever" },
    "حيرة": { root: "ح ي ر", pos: "noun", gloss: "bewilderment, confusion" },
    "حزن": { root: "ح ز ن", pos: "noun", gloss: "sorrow, grief" },
    "شديد": { root: "ش د د", pos: "adj", gloss: "severe, intense" },
    "لم": { root: "", pos: "part", gloss: "not (past)" },
    "بلغ": { root: "ب ل غ", pos: "verb", gloss: "to reach" },
    "سن": { root: "س ن ن", pos: "noun", gloss: "age" },
    "قتال": { root: "ق ت ل", pos: "noun", gloss: "fighting, combat" },
    "حن": { root: "ح ن ن", pos: "verb", gloss: "to yearn, long for", book_note: "حَنَّ يَحِنُّ إِلَيْهِ: اشْتَاقَ، وَعَلَيْهِ: عَطَفَ." },
    "موت": { root: "م و ت", pos: "noun", gloss: "death" },
    "جنة": { root: "ج ن ن", pos: "noun", gloss: "Paradise, garden" },
    "بعيد": { root: "ب ع د", pos: "adj", gloss: "far" },
    "غير": { root: "غ ي ر", pos: "noun", gloss: "not, other than" },
    "كيف": { root: "", pos: "adv", gloss: "how" },
    "وصل": { root: "و ص ل", pos: "verb", gloss: "to reach, arrive" },
    "كل": { root: "ك ل ل", pos: "noun", gloss: "all, every" },
    "ذلك": { root: "", pos: "dem", gloss: "that" },
    "ثقل": { root: "ث ق ل", pos: "verb", gloss: "to weigh heavily, be difficult", book_note: "ثَقُلَ يَثْقُلُ عَلَيْهِ: صَعُبَ عَلَيْهِ." },
    "قلب": { root: "ق ل ب", pos: "noun", gloss: "heart" },
    "بكى": { root: "ب ك ي", pos: "verb", gloss: "to weep, cry" },
    "رق": { root: "ر ق ق", pos: "verb", gloss: "to be moved with tenderness", book_note: "رَقَّ يَرِقُّ لَهُ: رَحِمَهُ." },
    "رقيق": { root: "ر ق ق", pos: "adj", gloss: "gentle, tender" },
    "رفيق": { root: "ر ف ق", pos: "adj", gloss: "kind, gentle" },
    "أجاز": { root: "ج و ز", pos: "verb", gloss: "to permit, allow" },
    "سأل": { root: "س أ ل", pos: "verb", gloss: "to ask" },
    "عن": { root: "", pos: "prep", gloss: "about" },
    "فرح": { root: "ف ر ح", pos: "noun", gloss: "joy" },
    "سرور": { root: "س ر ر", pos: "noun", gloss: "delight, happiness" },
    "كأنما": { root: "", pos: "part", gloss: "as if" },
    "تذكرة": { root: "ذ ك ر", pos: "noun", gloss: "a ticket" },
    "مسلم": { root: "س ل م", pos: "noun", gloss: "a Muslim" },
    "قوي": { root: "ق و ي", pos: "adj", gloss: "strong" },
    "قد": { root: "", pos: "part", gloss: "indeed, already" },
    "قتل": { root: "ق ت ل", pos: "verb", gloss: "to be killed, slain" },
    "شهيد": { root: "ش ه د", pos: "noun", gloss: "a martyr" },
    "غزوة": { root: "غ ز و", pos: "noun", gloss: "a battle, military expedition" },
    "سبق": { root: "س ب ق", pos: "verb", gloss: "to precede, outstrip" },
    "كثير": { root: "ك ث ر", pos: "adj", gloss: "much, many" },
    "شاب": { root: "ش ب ب", pos: "noun", gloss: "a young man" },
    "شيخ": { root: "ش ي خ", pos: "noun", gloss: "an old man" },
    "رضي": { root: "ر ض و", pos: "verb", gloss: "to be pleased" },
    "أرضى": { root: "ر ض و", pos: "verb", gloss: "to please, make pleased" }
  },
  paragraphs: [
    {
      en: "When the Messenger of Allah ﷺ wanted to go out to Badr to fight the polytheists, a boy named Umayr ibn Abi Waqqas, sixteen years old, went out too.",
      sentences: [
        {
          id: "qr2-38-001",
          ar: "لَمَّا أَرَادَ رَسُوْلُ اللهِ ﷺ الْخُرُوْجَ إِلَىٰ بَدْرٍ لِيُقَاتِلَ الْمُشْرِكِيْنَ،",
          en: "When the Messenger of Allah ﷺ wanted to go out to Badr to fight the polytheists,",
          tokens: [
            { surface: "لَمَّا", lemma: "لما", pos: "part", features: "part", root: "", gloss: "when" },
            { surface: "أَرَادَ", lemma: "أراد", pos: "verb", features: "perf.3ms", root: "ر و د", gloss: "wanted" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "الْخُرُوْجَ", lemma: "خروج", pos: "noun", features: "def.acc", root: "خ ر ج", gloss: "going out" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "بَدْرٍ", lemma: "بدر", pos: "proper", features: "gen", root: "", gloss: "Badr" },
            { surface: "لِيُقَاتِلَ", lemma: "قاتل", pos: "verb", features: "prep+subj.3ms", root: "ق ت ل", gloss: "in order to fight" },
            { surface: "الْمُشْرِكِيْنَ", lemma: "مشرك", pos: "noun", features: "pl.def.acc", root: "ش ر ك", gloss: "the polytheists" }
          ]
        },
        {
          id: "qr2-38-002",
          ar: "خَرَجَ غُلَامٌ اسْمُهُ عُمَيْرُ بْنُ أَبِيْ وَقَّاصٍ وَعُمُرُهُ سِتَّ عَشْرَةَ سَنَةً.",
          en: "a boy named Umayr ibn Abi Waqqas, sixteen years old, went out too.",
          tokens: [
            { surface: "خَرَجَ", lemma: "خرج", pos: "verb", features: "perf.3ms", root: "خ ر ج", gloss: "went out" },
            { surface: "غُلَامٌ", lemma: "غلام", pos: "noun", features: "indef.nom", root: "غ ل م", gloss: "a boy" },
            { surface: "اسْمُهُ", lemma: "اسم", pos: "noun", features: "nom+3ms", root: "س م و", gloss: "whose name" },
            { surface: "عُمَيْرُ", lemma: "عمير", pos: "proper", features: "nom", root: "", gloss: "Umayr" },
            { surface: "بْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "gen.constr", root: "أ ب و", gloss: "Abu" },
            { surface: "وَقَّاصٍ", lemma: "وقاص", pos: "proper", features: "gen", root: "", gloss: "Waqqas" },
            { surface: "وَعُمُرُهُ", lemma: "عمر", pos: "noun", features: "conj+nom+3ms", root: "ع م ر", gloss: "and his age" },
            { surface: "سِتَّ", lemma: "ست", pos: "num", features: "acc.constr", root: "س ت ت", gloss: "six" },
            { surface: "عَشْرَةَ", lemma: "عشرة", pos: "num", features: "acc", root: "ع ش ر", gloss: "-teen" },
            { surface: "سَنَةً", lemma: "سنة", pos: "noun", features: "indef.acc", root: "س ن و", gloss: "years" }
          ]
        }
      ],
      checks: [
        {
          q: "كَمْ كَانَ عُمُرُ عُمَيْرٍ حِيْنَ أَرَادَ الْخُرُوْجَ إِلَىٰ بَدْرٍ؟",
          options: ["سِتَّ عَشْرَةَ سَنَةً", "عِشْرِيْنَ سَنَةً", "عَشْرَ سَنَوَاتٍ"],
          answer: 0,
          qEn: "How old was Umayr when he wanted to go out to Badr?",
          optionsEn: ["Sixteen years old", "Twenty years old", "Ten years old"]
        }
      ]
    },
    {
      en: "Umayr was afraid the Prophet ﷺ would not accept him because he was young, so he tried hard to make sure no one saw him, and he would hide.",
      sentences: [
        {
          id: "qr2-38-003",
          ar: "وَكَانَ عُمَيْرٌ يَخَافُ أَلَّا يَقْبَلَهُ النَّبِيُّ ﷺ لِأَنَّهُ صَغِيْرٌ،",
          en: "Umayr was afraid the Prophet ﷺ would not accept him because he was young,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "عُمَيْرٌ", lemma: "عمير", pos: "proper", features: "nom", root: "", gloss: "Umayr" },
            { surface: "يَخَافُ", lemma: "خاف", pos: "verb", features: "impf.3ms", root: "خ و ف", gloss: "afraid" },
            { surface: "أَلَّا", lemma: "ألا", pos: "part", features: "part", root: "", gloss: "that ... not" },
            { surface: "يَقْبَلَهُ", lemma: "قبل", pos: "verb", features: "subj.3ms+3ms", root: "ق ب ل", gloss: "would accept him" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "لِأَنَّهُ", lemma: "لأن", pos: "conj", features: "conj+3ms", root: "", gloss: "because he" },
            { surface: "صَغِيْرٌ", lemma: "صغير", pos: "adj", features: "indef.nom", root: "ص غ ر", gloss: "young" }
          ]
        },
        {
          id: "qr2-38-004",
          ar: "فَكَانَ يَجْتَهِدُ أَلَّا يَرَاهُ أَحَدٌ، وَكَانَ يَتَوَارَىٰ.",
          en: "so he tried hard to make sure no one saw him, and he would hide.",
          tokens: [
            { surface: "فَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "so he was" },
            { surface: "يَجْتَهِدُ", lemma: "اجتهد", pos: "verb", features: "impf.3ms", root: "ج ه د", gloss: "trying hard" },
            { surface: "أَلَّا", lemma: "ألا", pos: "part", features: "part", root: "", gloss: "that ... not" },
            { surface: "يَرَاهُ", lemma: "رأى", pos: "verb", features: "subj.3ms+3ms", root: "ر أ ي", gloss: "would see him" },
            { surface: "أَحَدٌ", lemma: "أحد", pos: "noun", features: "indef.nom", root: "أ ح د", gloss: "anyone" },
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and he was" },
            { surface: "يَتَوَارَىٰ", lemma: "توارى", pos: "verb", features: "impf.3ms", root: "و ر ي", gloss: "hiding" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَ عُمَيْرٌ يَتَوَارَىٰ؟",
          options: ["لِأَنَّهُ يَخَافُ أَلَّا يَقْبَلَهُ النَّبِيُّ ﷺ لِصِغَرِهِ", "لِأَنَّهُ يَخَافُ مِنَ الْمُشْرِكِيْنَ", "لِأَنَّهُ مَرِيْضٌ"],
          answer: 0,
          qEn: "Why was Umayr hiding?",
          optionsEn: ["Because he feared the Prophet ﷺ would not accept him for being young", "Because he feared the polytheists", "Because he was sick"]
        }
      ]
    },
    {
      en: "But his elder brother Sa'd ibn Abi Waqqas saw him and said to him, \"What is the matter with you, my brother? Why are you hiding?\"",
      sentences: [
        {
          id: "qr2-38-005",
          ar: "وَلٰكِنْ رَآهُ أَخُوْهُ الْأَكْبَرُ سَعْدُ بْنُ أَبِيْ وَقَّاصٍ فَقَالَ لَهُ:",
          en: "But his elder brother Sa'd ibn Abi Waqqas saw him and said to him,",
          tokens: [
            { surface: "وَلٰكِنْ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "رَآهُ", lemma: "رأى", pos: "verb", features: "perf.3ms+3ms", root: "ر أ ي", gloss: "saw him" },
            { surface: "أَخُوْهُ", lemma: "أخ", pos: "noun", features: "nom+3ms", root: "أ خ و", gloss: "his brother" },
            { surface: "الْأَكْبَرُ", lemma: "أكبر", pos: "adj", features: "def.nom", root: "ك ب ر", gloss: "the elder" },
            { surface: "سَعْدُ", lemma: "سعد", pos: "proper", features: "nom", root: "", gloss: "Sa'd" },
            { surface: "بْنُ", lemma: "ابن", pos: "noun", features: "nom.constr", root: "ب ن ي", gloss: "son of" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "gen.constr", root: "أ ب و", gloss: "Abu" },
            { surface: "وَقَّاصٍ", lemma: "وقاص", pos: "proper", features: "gen", root: "", gloss: "Waqqas" },
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" }
          ]
        },
        {
          id: "qr2-38-006",
          ar: "مَالَكَ يَا أَخِيْ؟ لِأَيِّ شَيْءٍ تَتَوَارَىٰ؟",
          en: "\"What is the matter with you, my brother? Why are you hiding?\"",
          tokens: [
            { surface: "مَالَكَ", lemma: "ما-استفهام", pos: "part", features: "idiom+2ms", root: "", gloss: "what is the matter with you" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَخِيْ", lemma: "أخ", pos: "noun", features: "nom+1cs", root: "أ خ و", gloss: "my brother" },
            { surface: "لِأَيِّ", lemma: "أي", pos: "noun", features: "prep+gen.constr", root: "أ ي ي", gloss: "for what" },
            { surface: "شَيْءٍ", lemma: "شيء", pos: "noun", features: "indef.gen", root: "ش ي أ", gloss: "thing" },
            { surface: "تَتَوَارَىٰ", lemma: "توارى", pos: "verb", features: "impf.2ms", root: "و ر ي", gloss: "are you hiding" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنْ سَأَلَ عُمَيْراً: لِأَيِّ شَيْءٍ تَتَوَارَىٰ؟",
          options: ["أَخُوْهُ الْأَكْبَرُ سَعْدٌ", "أَبُوْهُ", "رَسُوْلُ اللهِ ﷺ"],
          answer: 0,
          qEn: "Who asked Umayr, \"Why are you hiding?\"",
          optionsEn: ["His elder brother Sa'd", "His father", "The Messenger of Allah ﷺ"]
        }
      ]
    },
    {
      en: "Umayr said, \"I am afraid the Messenger of Allah ﷺ will turn me back, for I am young, and I love to go out -- perhaps Allah will grant me martyrdom.\"",
      sentences: [
        {
          id: "qr2-38-007",
          ar: "قَالَ عُمَيْرٌ: أَخَافُ أَنْ يَرُدَّنِيْ رَسُوْلُ اللهِ ﷺ فَإِنِّيْ صَغِيْرٌ،",
          en: "Umayr said, \"I am afraid the Messenger of Allah ﷺ will turn me back, for I am young,",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "عُمَيْرٌ", lemma: "عمير", pos: "proper", features: "nom", root: "", gloss: "Umayr" },
            { surface: "أَخَافُ", lemma: "خاف", pos: "verb", features: "impf.1cs", root: "خ و ف", gloss: "I fear" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَرُدَّنِيْ", lemma: "رد", pos: "verb", features: "subj.3ms+1cs", root: "ر د د", gloss: "he will turn me back" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "فَإِنِّيْ", lemma: "إن", pos: "part", features: "conj+part+1cs", root: "", gloss: "for I" },
            { surface: "صَغِيْرٌ", lemma: "صغير", pos: "adj", features: "indef.nom", root: "ص غ ر", gloss: "young" }
          ]
        },
        {
          id: "qr2-38-008",
          ar: "وَأَنَا أُحِبُّ الْخُرُوْجَ، لَعَلَّ اللهَ يَرْزُقُنِيَ الشَّهَادَةَ.",
          en: "and I love to go out -- perhaps Allah will grant me martyrdom.\"",
          tokens: [
            { surface: "وَأَنَا", lemma: "أنا", pos: "noun", features: "conj+nom", root: "", gloss: "and I" },
            { surface: "أُحِبُّ", lemma: "أحب", pos: "verb", features: "impf.1cs", root: "ح ب ب", gloss: "love" },
            { surface: "الْخُرُوْجَ", lemma: "خروج", pos: "noun", features: "def.acc", root: "خ ر ج", gloss: "going out" },
            { surface: "لَعَلَّ", lemma: "لعل", pos: "part", features: "part", root: "", gloss: "perhaps" },
            { surface: "اللهَ", lemma: "الله", pos: "proper", features: "acc", root: "", gloss: "Allah" },
            { surface: "يَرْزُقُنِيَ", lemma: "رزق", pos: "verb", features: "impf.3ms+1cs", root: "ر ز ق", gloss: "will grant me" },
            { surface: "الشَّهَادَةَ", lemma: "شهادة", pos: "noun", features: "def.acc", root: "ش ه د", gloss: "martyrdom" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ عُمَيْرٌ لِأَخِيْهِ؟",
          options: ["أَخَافُ أَنْ يَرُدَّنِيْ رَسُوْلُ اللهِ ﷺ وَأُحِبُّ الْخُرُوْجَ", "لَا شَيْءَ، أَنَا سَعِيْدٌ", "أُرِيْدُ أَنْ أَلْعَبَ فَقَطْ"],
          answer: 0,
          qEn: "What did Umayr say to his brother?",
          optionsEn: ["I fear the Messenger of Allah ﷺ will turn me back, and I love to go out", "Nothing, I'm happy", "I just want to play"]
        }
      ]
    },
    {
      en: "And it was as Umayr feared, for when the Messenger of Allah ﷺ looked at him, he saw that he was young, and war is not the business of children and young boys, and what would they do in war, when it is a grave matter even for grown men?",
      sentences: [
        {
          id: "qr2-38-009",
          ar: "وَكَانَ كَمَا خَافَ عُمَيْرٌ،",
          en: "And it was as Umayr feared,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "كَمَا", lemma: "كما", pos: "conj", features: "conj", root: "", gloss: "as" },
            { surface: "خَافَ", lemma: "خاف", pos: "verb", features: "perf.3ms", root: "خ و ف", gloss: "feared" },
            { surface: "عُمَيْرٌ", lemma: "عمير", pos: "proper", features: "nom", root: "", gloss: "Umayr" }
          ]
        },
        {
          id: "qr2-38-010",
          ar: "فَلَمَّا نَظَرَ إِلَيْهِ رَسُوْلُ اللهِ ﷺ رَأَىٰ أَنَّهُ صَغِيْرٌ،",
          en: "for when the Messenger of Allah ﷺ looked at him, he saw that he was young,",
          tokens: [
            { surface: "فَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "for when" },
            { surface: "نَظَرَ", lemma: "نظر", pos: "verb", features: "perf.3ms", root: "ن ظ ر", gloss: "looked" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "at him" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "رَأَىٰ", lemma: "رأى", pos: "verb", features: "perf.3ms", root: "ر أ ي", gloss: "saw" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "صَغِيْرٌ", lemma: "صغير", pos: "adj", features: "indef.nom", root: "ص غ ر", gloss: "young" }
          ]
        },
        {
          id: "qr2-38-011",
          ar: "وَالْحَرْبُ لَيْسَتْ مِنْ شُغْلِ الْأَطْفَالِ وَالْغِلْمَانِ،",
          en: "and war is not the business of children and young boys,",
          tokens: [
            { surface: "وَالْحَرْبُ", lemma: "حرب", pos: "noun", features: "conj+def.nom", root: "ح ر ب", gloss: "and war" },
            { surface: "لَيْسَتْ", lemma: "ليس", pos: "verb", features: "perf.3fs", root: "ل ي س", gloss: "is not" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "شُغْلِ", lemma: "شغل", pos: "noun", features: "gen.constr", root: "ش غ ل", gloss: "the concern of" },
            { surface: "الْأَطْفَالِ", lemma: "طفل", pos: "noun", features: "pl.def.gen", root: "ط ف ل", gloss: "children" },
            { surface: "وَالْغِلْمَانِ", lemma: "غلام", pos: "noun", features: "conj+pl.def.gen", root: "غ ل م", gloss: "and young boys" }
          ]
        },
        {
          id: "qr2-38-012",
          ar: "وَمَا يَصْنَعُوْنَ فِي الْحَرْبِ، وَإِنَّهَا لَكَبِيْرَةٌ عَلَىٰ الرِّجَالِ؟",
          en: "and what would they do in war, when it is a grave matter even for grown men?",
          tokens: [
            { surface: "وَمَا", lemma: "ما-استفهام", pos: "part", features: "conj+part", root: "", gloss: "and what" },
            { surface: "يَصْنَعُوْنَ", lemma: "صنع", pos: "verb", features: "impf.3mp", root: "ص ن ع", gloss: "would they do" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْحَرْبِ", lemma: "حرب", pos: "noun", features: "def.gen", root: "ح ر ب", gloss: "the war" },
            { surface: "وَإِنَّهَا", lemma: "إن", pos: "part", features: "conj+part+3fs", root: "", gloss: "when it" },
            { surface: "لَكَبِيْرَةٌ", lemma: "كبير", pos: "adj", features: "part+indef.nom.f", root: "ك ب ر", gloss: "is indeed a grave matter" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "الرِّجَالِ", lemma: "رجل", pos: "noun", features: "pl.def.gen", root: "ر ج ل", gloss: "grown men" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا رَأَىٰ رَسُوْلُ اللهِ ﷺ أَنَّ عُمَيْراً صَغِيْرٌ عَلَىٰ الْقِتَالِ؟",
          options: ["لِأَنَّ الْحَرْبَ لَيْسَتْ مِنْ شُغْلِ الْأَطْفَالِ وَهِيَ كَبِيْرَةٌ حَتَّىٰ عَلَىٰ الرِّجَالِ", "لِأَنَّهُ لَا يَعْرِفُ الْقِتَالَ", "لِأَنَّهُ مَرِيْضٌ"],
          answer: 0,
          qEn: "Why did the Messenger of Allah ﷺ see Umayr as too young for battle?",
          optionsEn: ["Because war is not children's business and is a grave matter even for grown men", "Because he doesn't know how to fight", "Because he was sick"]
        }
      ]
    },
    {
      en: "But Umayr did not want to turn away and sit at home, or play with his peers and friends in Madinah; he truly wanted martyrdom in the way of Allah!",
      sentences: [
        {
          id: "qr2-38-013",
          ar: "وَلٰكِنَّ عُمَيْراً مَا أَحَبَّ أَنْ يَنْصَرِفَ، وَيَقْعُدَ فِي الْبَيْتِ،",
          en: "But Umayr did not want to turn away and sit at home,",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "عُمَيْراً", lemma: "عمير", pos: "proper", features: "acc", root: "", gloss: "Umayr" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "أَحَبَّ", lemma: "أحب", pos: "verb", features: "perf.3ms", root: "ح ب ب", gloss: "wanted" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَنْصَرِفَ", lemma: "انصرف", pos: "verb", features: "subj.3ms", root: "ص ر ف", gloss: "turn away" },
            { surface: "وَيَقْعُدَ", lemma: "قعد", pos: "verb", features: "conj+subj.3ms", root: "ق ع د", gloss: "and sit" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْبَيْتِ", lemma: "بيت", pos: "noun", features: "def.gen", root: "ب ي ت", gloss: "the house" }
          ]
        },
        {
          id: "qr2-38-014",
          ar: "أَوْ يَلْعَبَ مَعَ أَتْرَابِهِ وَأَصْدِقَائِهِ فِي الْمَدِيْنَةِ،",
          en: "or play with his peers and friends in Madinah;",
          tokens: [
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "يَلْعَبَ", lemma: "لعب", pos: "verb", features: "subj.3ms", root: "ل ع ب", gloss: "play" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "أَتْرَابِهِ", lemma: "ترب", pos: "noun", features: "pl.gen+3ms", root: "ت ر ب", gloss: "his peers" },
            { surface: "وَأَصْدِقَائِهِ", lemma: "صديق", pos: "noun", features: "conj+pl.gen+3ms", root: "ص د ق", gloss: "and his friends" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَدِيْنَةِ", lemma: "مدينة", pos: "proper", features: "def.gen", root: "م د ن", gloss: "Madinah" }
          ]
        },
        {
          id: "qr2-38-015",
          ar: "وَإِنَّهُ لَيُرِيْدُ الشَّهَادَةَ فِيْ سَبِيْلِ اللهِ!",
          en: "he truly wanted martyrdom in the way of Allah!",
          tokens: [
            { surface: "وَإِنَّهُ", lemma: "إن", pos: "part", features: "conj+part+3ms", root: "", gloss: "indeed he" },
            { surface: "لَيُرِيْدُ", lemma: "أراد", pos: "verb", features: "part+impf.3ms", root: "ر و د", gloss: "truly wants" },
            { surface: "الشَّهَادَةَ", lemma: "شهادة", pos: "noun", features: "def.acc", root: "ش ه د", gloss: "martyrdom" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "سَبِيْلِ", lemma: "سبيل", pos: "noun", features: "gen.constr", root: "س ب ل", gloss: "the way of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ عُمَيْرٌ يُرِيْدُ؟",
          options: ["الشَّهَادَةَ فِيْ سَبِيْلِ اللهِ لَا أَنْ يَقْعُدَ فِي الْبَيْتِ", "أَنْ يَلْعَبَ مَعَ أَصْدِقَائِهِ فَقَطْ", "أَنْ يَرْجِعَ إِلَىٰ بَيْتِهِ"],
          answer: 0,
          qEn: "What did Umayr want?",
          optionsEn: ["Martyrdom in the way of Allah, not to stay home", "Only to play with his friends", "To go back home"]
        }
      ]
    },
    {
      en: "But Umayr would not disobey the Messenger of Allah ﷺ, nor defy him, for he wanted nothing but Allah's pleasure, and could he attain Allah's pleasure by disobeying the Messenger of Allah ﷺ? Never!",
      sentences: [
        {
          id: "qr2-38-016",
          ar: "وَلٰكِنَّ عُمَيْراً لَا يَعْصِيْ رَسُوْلَ اللهِ ﷺ، وَلَا يُعَانِدُ،",
          en: "But Umayr would not disobey the Messenger of Allah ﷺ, nor defy him,",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "عُمَيْراً", lemma: "عمير", pos: "proper", features: "acc", root: "", gloss: "Umayr" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَعْصِيْ", lemma: "عصى", pos: "verb", features: "impf.3ms", root: "ع ص ي", gloss: "disobey" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "nor" },
            { surface: "يُعَانِدُ", lemma: "عاند", pos: "verb", features: "impf.3ms", root: "ع ن د", gloss: "defy" }
          ]
        },
        {
          id: "qr2-38-017",
          ar: "فَإِنَّهُ لَا يُرِيْدُ إِلَّا رِضَاءَ اللهِ،",
          en: "for he wanted nothing but Allah's pleasure,",
          tokens: [
            { surface: "فَإِنَّهُ", lemma: "إن", pos: "part", features: "conj+part+3ms", root: "", gloss: "for he" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يُرِيْدُ", lemma: "أراد", pos: "verb", features: "impf.3ms", root: "ر و د", gloss: "wants" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "رِضَاءَ", lemma: "رضاء", pos: "noun", features: "acc.constr", root: "ر ض و", gloss: "the pleasure of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-38-018",
          ar: "وَهَلْ يَنَالُ رِضَاءَ اللهِ إِذَا عَصَىٰ رَسُوْلَ اللهِ ﷺ؟ أَبَداً!",
          en: "and could he attain Allah's pleasure by disobeying the Messenger of Allah ﷺ? Never!",
          tokens: [
            { surface: "وَهَلْ", lemma: "هل", pos: "part", features: "conj+part", root: "", gloss: "and would" },
            { surface: "يَنَالُ", lemma: "نال", pos: "verb", features: "impf.3ms", root: "ن ي ل", gloss: "he attain" },
            { surface: "رِضَاءَ", lemma: "رضاء", pos: "noun", features: "acc.constr", root: "ر ض و", gloss: "the pleasure of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "عَصَىٰ", lemma: "عصى", pos: "verb", features: "perf.3ms", root: "ع ص ي", gloss: "he disobeyed" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "أَبَداً", lemma: "أبدا", pos: "adv", features: "acc", root: "أ ب د", gloss: "never" }
          ]
        }
      ],
      checks: [
        {
          q: "هَلْ كَانَ عُمَيْرٌ يُفَكِّرُ فِيْ عِصْيَانِ رَسُوْلِ اللهِ ﷺ؟",
          options: ["لَا، فَهُوَ لَا يُرِيْدُ إِلَّا رِضَاءَ اللهِ", "نَعَمْ، كَانَ يُرِيْدُ أَنْ يُعَانِدَهُ", "لَمْ يَذْكُرِ النَّصُّ ذٰلِكَ"],
          answer: 0,
          qEn: "Was Umayr thinking of disobeying the Messenger of Allah ﷺ?",
          optionsEn: ["No, he wanted nothing but Allah's pleasure", "Yes, he wanted to defy him", "The text doesn't mention that"]
        }
      ]
    },
    {
      en: "Umayr was in a state of bewilderment and deep sorrow; he had not reached the age of fighting, yet he yearned for martyrdom, and for death in the way of Allah, and he yearned for Paradise, seeing it as not far off, but how could he reach it, when he had not reached the age of fighting?!",
      sentences: [
        {
          id: "qr2-38-019",
          ar: "كَانَ عُمَيْرٌ فِيْ حَيْرَةٍ وَحُزْنٍ شَدِيْدٍ،",
          en: "Umayr was in a state of bewilderment and deep sorrow;",
          tokens: [
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "was" },
            { surface: "عُمَيْرٌ", lemma: "عمير", pos: "proper", features: "nom", root: "", gloss: "Umayr" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "حَيْرَةٍ", lemma: "حيرة", pos: "noun", features: "indef.gen", root: "ح ي ر", gloss: "bewilderment" },
            { surface: "وَحُزْنٍ", lemma: "حزن", pos: "noun", features: "conj+indef.gen", root: "ح ز ن", gloss: "and grief" },
            { surface: "شَدِيْدٍ", lemma: "شديد", pos: "adj", features: "indef.gen", root: "ش د د", gloss: "severe" }
          ]
        },
        {
          id: "qr2-38-020",
          ar: "هُوَ لَمْ يَبْلُغْ سِنَّ الْقِتَالِ،",
          en: "he had not reached the age of fighting,",
          tokens: [
            { surface: "هُوَ", lemma: "هو", pos: "noun", features: "nom", root: "", gloss: "he" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "يَبْلُغْ", lemma: "بلغ", pos: "verb", features: "juss.3ms", root: "ب ل غ", gloss: "reached" },
            { surface: "سِنَّ", lemma: "سن", pos: "noun", features: "acc.constr", root: "س ن ن", gloss: "the age of" },
            { surface: "الْقِتَالِ", lemma: "قتال", pos: "noun", features: "def.gen", root: "ق ت ل", gloss: "fighting" }
          ]
        },
        {
          id: "qr2-38-021",
          ar: "وَلٰكِنَّهُ يَحِنُّ إِلَىٰ الشَّهَادَةِ، وَإِلَىٰ الْمَوْتِ فِيْ سَبِيْلِ اللهِ،",
          en: "yet he yearned for martyrdom, and for death in the way of Allah,",
          tokens: [
            { surface: "وَلٰكِنَّهُ", lemma: "لكن", pos: "conj", features: "conj+3ms", root: "", gloss: "yet he" },
            { surface: "يَحِنُّ", lemma: "حن", pos: "verb", features: "impf.3ms", root: "ح ن ن", gloss: "yearned" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "الشَّهَادَةِ", lemma: "شهادة", pos: "noun", features: "def.gen", root: "ش ه د", gloss: "martyrdom" },
            { surface: "وَإِلَىٰ", lemma: "إلى", pos: "prep", features: "conj+prep", root: "", gloss: "and for" },
            { surface: "الْمَوْتِ", lemma: "موت", pos: "noun", features: "def.gen", root: "م و ت", gloss: "death" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "سَبِيْلِ", lemma: "سبيل", pos: "noun", features: "gen.constr", root: "س ب ل", gloss: "the way of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-38-022",
          ar: "وَيَحِنُّ إِلَىٰ الْجَنَّةِ، وَيَرَاهَا غَيْرَ بَعِيْدَةٍ،",
          en: "and he yearned for Paradise, seeing it as not far off,",
          tokens: [
            { surface: "وَيَحِنُّ", lemma: "حن", pos: "verb", features: "conj+impf.3ms", root: "ح ن ن", gloss: "and yearned" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "الْجَنَّةِ", lemma: "جنة", pos: "noun", features: "def.gen", root: "ج ن ن", gloss: "Paradise" },
            { surface: "وَيَرَاهَا", lemma: "رأى", pos: "verb", features: "conj+impf.3ms+3fs", root: "ر أ ي", gloss: "and saw it" },
            { surface: "غَيْرَ", lemma: "غير", pos: "noun", features: "acc.constr", root: "غ ي ر", gloss: "not" },
            { surface: "بَعِيْدَةٍ", lemma: "بعيد", pos: "adj", features: "indef.gen.f", root: "ب ع د", gloss: "far" }
          ]
        },
        {
          id: "qr2-38-023",
          ar: "وَلٰكِنْ كَيْفَ يَصِلُ إِلَيْهَا، وَهُوَ لَمْ يَبْلُغْ سِنَّ الْقِتَالِ؟!",
          en: "but how could he reach it, when he had not reached the age of fighting?!",
          tokens: [
            { surface: "وَلٰكِنْ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "كَيْفَ", lemma: "كيف", pos: "adv", features: "adv", root: "", gloss: "how" },
            { surface: "يَصِلُ", lemma: "وصل", pos: "verb", features: "impf.3ms", root: "و ص ل", gloss: "could he reach" },
            { surface: "إِلَيْهَا", lemma: "إلى", pos: "prep", features: "prep+3fs", root: "", gloss: "it" },
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+nom", root: "", gloss: "when he" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "يَبْلُغْ", lemma: "بلغ", pos: "verb", features: "juss.3ms", root: "ب ل غ", gloss: "reached" },
            { surface: "سِنَّ", lemma: "سن", pos: "noun", features: "acc.constr", root: "س ن ن", gloss: "the age of" },
            { surface: "الْقِتَالِ", lemma: "قتال", pos: "noun", features: "def.gen", root: "ق ت ل", gloss: "fighting" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ عُمَيْرٌ يَحِنُّ إِلَيْهِ؟",
          options: ["الشَّهَادَةُ وَالْجَنَّةُ", "اللَّعِبُ مَعَ أَصْدِقَائِهِ", "الرُّجُوْعُ إِلَىٰ الْمَدِيْنَةِ"],
          answer: 0,
          qEn: "What did Umayr yearn for?",
          optionsEn: ["Martyrdom and Paradise", "Playing with his friends", "Returning to Madinah"]
        }
      ]
    },
    {
      en: "All of that weighed heavily on Umayr, and his heart was tender, so he wept, and when Umayr wept, the heart of the Messenger of Allah ﷺ was moved with compassion for him, and the Messenger of Allah ﷺ was gentle and kind, so he permitted him to go.",
      sentences: [
        {
          id: "qr2-38-024",
          ar: "كُلُّ ذٰلِكَ ثَقُلَ عَلَىٰ عُمَيْرٍ،",
          en: "All of that weighed heavily on Umayr,",
          tokens: [
            { surface: "كُلُّ", lemma: "كل", pos: "noun", features: "nom.constr", root: "ك ل ل", gloss: "all" },
            { surface: "ذٰلِكَ", lemma: "ذلك", pos: "dem", features: "gen", root: "", gloss: "that" },
            { surface: "ثَقُلَ", lemma: "ثقل", pos: "verb", features: "perf.3ms", root: "ث ق ل", gloss: "weighed heavily" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "عُمَيْرٍ", lemma: "عمير", pos: "proper", features: "gen", root: "", gloss: "Umayr" }
          ]
        },
        {
          id: "qr2-38-025",
          ar: "وَكَانَ قَلْبُهُ صَغِيْراً فَبَكَىٰ،",
          en: "and his heart was tender, so he wept,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "قَلْبُهُ", lemma: "قلب", pos: "noun", features: "nom+3ms", root: "ق ل ب", gloss: "his heart" },
            { surface: "صَغِيْراً", lemma: "صغير", pos: "adj", features: "indef.acc", root: "ص غ ر", gloss: "tender" },
            { surface: "فَبَكَىٰ", lemma: "بكى", pos: "verb", features: "conj+perf.3ms", root: "ب ك ي", gloss: "so he wept" }
          ]
        },
        {
          id: "qr2-38-026",
          ar: "وَلَمَّا بَكَىٰ عُمَيْرٌ رَقَّ لَهُ قَلْبُ رَسُوْلِ اللهِ ﷺ،",
          en: "and when Umayr wept, the heart of the Messenger of Allah ﷺ was moved with compassion for him,",
          tokens: [
            { surface: "وَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "and when" },
            { surface: "بَكَىٰ", lemma: "بكى", pos: "verb", features: "perf.3ms", root: "ب ك ي", gloss: "wept" },
            { surface: "عُمَيْرٌ", lemma: "عمير", pos: "proper", features: "nom", root: "", gloss: "Umayr" },
            { surface: "رَقَّ", lemma: "رق", pos: "verb", features: "perf.3ms", root: "ر ق ق", gloss: "was moved with tenderness" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "قَلْبُ", lemma: "قلب", pos: "noun", features: "nom.constr", root: "ق ل ب", gloss: "the heart of" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-38-027",
          ar: "وَكَانَ رَسُوْلُ اللهِ ﷺ رَقِيْقاً رَفِيْقاً فَأَجَازَهُ.",
          en: "and the Messenger of Allah ﷺ was gentle and kind, so he permitted him to go.",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "رَسُوْلُ", lemma: "رسول", pos: "noun", features: "nom.constr", root: "ر س ل", gloss: "the Messenger of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "رَقِيْقاً", lemma: "رقيق", pos: "adj", features: "indef.acc", root: "ر ق ق", gloss: "gentle" },
            { surface: "رَفِيْقاً", lemma: "رفيق", pos: "adj", features: "indef.acc", root: "ر ف ق", gloss: "kind" },
            { surface: "فَأَجَازَهُ", lemma: "أجاز", pos: "verb", features: "conj+perf.3ms+3ms", root: "ج و ز", gloss: "so he permitted him" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا أَجَازَ رَسُوْلُ اللهِ ﷺ عُمَيْراً لِلْخُرُوْجِ؟",
          options: ["لِأَنَّ عُمَيْراً بَكَىٰ فَرَقَّ لَهُ قَلْبُهُ الرَّقِيْقُ", "لِأَنَّ عُمَيْراً كَانَ قَوِيّاً جِدّاً", "لِأَنَّ أَبَاهُ طَلَبَ ذٰلِكَ"],
          answer: 0,
          qEn: "Why did the Messenger of Allah ﷺ permit Umayr to go out?",
          optionsEn: ["Because Umayr wept and his gentle heart was moved with compassion", "Because Umayr was very strong", "Because his father requested it"]
        }
      ]
    },
    {
      en: "Do not ask about Umayr's joy and delight when the Prophet ﷺ permitted him -- it was as if he had obtained a ticket to Paradise.",
      sentences: [
        {
          id: "qr2-38-028",
          ar: "لَا تَسْأَلُوْا عَنْ فَرَحِ عُمَيْرٍ وَسُرُوْرِهِ لَمَّا أَجَازَهُ النَّبِيُّ ﷺ،",
          en: "Do not ask about Umayr's joy and delight when the Prophet ﷺ permitted him,",
          tokens: [
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "do not" },
            { surface: "تَسْأَلُوْا", lemma: "سأل", pos: "verb", features: "juss.2mp", root: "س أ ل", gloss: "ask" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "about" },
            { surface: "فَرَحِ", lemma: "فرح", pos: "noun", features: "gen.constr", root: "ف ر ح", gloss: "the joy of" },
            { surface: "عُمَيْرٍ", lemma: "عمير", pos: "proper", features: "gen", root: "", gloss: "Umayr" },
            { surface: "وَسُرُوْرِهِ", lemma: "سرور", pos: "noun", features: "conj+gen+3ms", root: "س ر ر", gloss: "and his delight" },
            { surface: "لَمَّا", lemma: "لما", pos: "part", features: "part", root: "", gloss: "when" },
            { surface: "أَجَازَهُ", lemma: "أجاز", pos: "verb", features: "perf.3ms+3ms", root: "ج و ز", gloss: "permitted him" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" }
          ]
        },
        {
          id: "qr2-38-029",
          ar: "فَكَأَنَّمَا نَالَ تَذْكِرَةَ الْجَنَّةِ.",
          en: "it was as if he had obtained a ticket to Paradise.",
          tokens: [
            { surface: "فَكَأَنَّمَا", lemma: "كأنما", pos: "part", features: "conj+part", root: "", gloss: "it was as if" },
            { surface: "نَالَ", lemma: "نال", pos: "verb", features: "perf.3ms", root: "ن ي ل", gloss: "he had obtained" },
            { surface: "تَذْكِرَةَ", lemma: "تذكرة", pos: "noun", features: "acc.constr", root: "ذ ك ر", gloss: "a ticket to" },
            { surface: "الْجَنَّةِ", lemma: "جنة", pos: "noun", features: "def.gen", root: "ج ن ن", gloss: "Paradise" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ كَانَ شُعُوْرُ عُمَيْرٍ لَمَّا أَجَازَهُ النَّبِيُّ ﷺ؟",
          options: ["فَرِحاً جِدّاً كَأَنَّهُ نَالَ تَذْكِرَةَ الْجَنَّةِ", "حَزِيْناً", "غَاضِباً"],
          answer: 0,
          qEn: "How did Umayr feel when the Prophet ﷺ permitted him?",
          optionsEn: ["Extremely joyful, as if he had obtained a ticket to Paradise", "Sad", "Angry"]
        }
      ]
    },
    {
      en: "So Umayr went out with his brother and with the Muslims, all of them grown and strong, and it happened as he wished, for he was killed a martyr in the battle, outstripping many of the young men and the old.",
      sentences: [
        {
          id: "qr2-38-030",
          ar: "وَخَرَجَ عُمَيْرٌ مَعَ أَخِيْهِ وَمَعَ الْمُسْلِمِيْنَ،",
          en: "So Umayr went out with his brother and with the Muslims,",
          tokens: [
            { surface: "وَخَرَجَ", lemma: "خرج", pos: "verb", features: "conj+perf.3ms", root: "خ ر ج", gloss: "so went out" },
            { surface: "عُمَيْرٌ", lemma: "عمير", pos: "proper", features: "nom", root: "", gloss: "Umayr" },
            { surface: "مَعَ", lemma: "مع", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "أَخِيْهِ", lemma: "أخ", pos: "noun", features: "gen+3ms", root: "أ خ و", gloss: "his brother" },
            { surface: "وَمَعَ", lemma: "مع", pos: "prep", features: "conj+prep", root: "", gloss: "and with" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "the Muslims" }
          ]
        },
        {
          id: "qr2-38-031",
          ar: "وَكُلُّهُمْ كِبَارٌ وَأَقْوِيَاءُ،",
          en: "all of them grown and strong,",
          tokens: [
            { surface: "وَكُلُّهُمْ", lemma: "كل", pos: "noun", features: "conj+nom+3mp", root: "ك ل ل", gloss: "and all of them" },
            { surface: "كِبَارٌ", lemma: "كبير", pos: "adj", features: "indef.nom.pl", root: "ك ب ر", gloss: "grown" },
            { surface: "وَأَقْوِيَاءُ", lemma: "قوي", pos: "adj", features: "conj+indef.nom.pl", root: "ق و ي", gloss: "and strong" }
          ]
        },
        {
          id: "qr2-38-032",
          ar: "وَكَانَ كَمَا أَرَادَ، فَقَدْ قُتِلَ شَهِيْداً فِي الْغَزْوَةِ،",
          en: "and it happened as he wished, for he was killed a martyr in the battle,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it happened" },
            { surface: "كَمَا", lemma: "كما", pos: "conj", features: "conj", root: "", gloss: "as" },
            { surface: "أَرَادَ", lemma: "أراد", pos: "verb", features: "perf.3ms", root: "ر و د", gloss: "he wished" },
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "قُتِلَ", lemma: "قتل", pos: "verb", features: "pass.perf.3ms", root: "ق ت ل", gloss: "he was killed" },
            { surface: "شَهِيْداً", lemma: "شهيد", pos: "noun", features: "indef.acc", root: "ش ه د", gloss: "a martyr" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْغَزْوَةِ", lemma: "غزوة", pos: "noun", features: "def.gen", root: "غ ز و", gloss: "the battle" }
          ]
        },
        {
          id: "qr2-38-033",
          ar: "وَسَبَقَ كَثِيْراً مِنَ الشُّبَّانِ وَالشُّيُوْخِ.",
          en: "outstripping many of the young men and the old.",
          tokens: [
            { surface: "وَسَبَقَ", lemma: "سبق", pos: "verb", features: "conj+perf.3ms", root: "س ب ق", gloss: "outstripping" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adj", features: "acc", root: "ك ث ر", gloss: "many" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الشُّبَّانِ", lemma: "شاب", pos: "noun", features: "pl.def.gen", root: "ش ب ب", gloss: "the young men" },
            { surface: "وَالشُّيُوْخِ", lemma: "شيخ", pos: "noun", features: "conj+pl.def.gen", root: "ش ي خ", gloss: "and the old" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا حَدَثَ لِعُمَيْرٍ فِي الْغَزْوَةِ؟",
          options: ["قُتِلَ شَهِيْداً وَسَبَقَ كَثِيْراً مِنَ الشُّبَّانِ وَالشُّيُوْخِ", "رَجَعَ سَالِماً إِلَىٰ الْمَدِيْنَةِ", "أُصِيْبَ بِجُرْحٍ بَسِيْطٍ فَقَطْ"],
          answer: 0,
          qEn: "What happened to Umayr in the battle?",
          optionsEn: ["He was killed a martyr, outstripping many young and old men", "He returned safely to Madinah", "He was only slightly wounded"]
        }
      ]
    },
    {
      en: "May Allah be pleased with Umayr and make him pleased.",
      sentences: [
        {
          id: "qr2-38-034",
          ar: "رَضِيَ اللهُ عَنْ عُمَيْرٍ وَأَرْضَاهُ.",
          en: "May Allah be pleased with Umayr and make him pleased.",
          tokens: [
            { surface: "رَضِيَ", lemma: "رضي", pos: "verb", features: "perf.3ms", root: "ر ض و", gloss: "may be pleased" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "with" },
            { surface: "عُمَيْرٍ", lemma: "عمير", pos: "proper", features: "gen", root: "", gloss: "Umayr" },
            { surface: "وَأَرْضَاهُ", lemma: "أرضى", pos: "verb", features: "conj+perf.3ms+3ms", root: "ر ض و", gloss: "and make him pleased" }
          ]
        }
      ],
      checks: [
        {
          q: "مَا مَعْنَىٰ 'رَضِيَ اللهُ عَنْ عُمَيْرٍ وَأَرْضَاهُ'؟",
          options: ["دُعَاءٌ بِأَنْ يَرْضَىٰ اللهُ عَنْهُ وَيَرْضَىٰ هُوَ بِمَا قَسَمَهُ اللهُ لَهُ", "أَمْرٌ بِالصَّلَاةِ عَلَيْهِ", "سُؤَالٌ عَنْ حَالِهِ"],
          answer: 0,
          qEn: "What does \"May Allah be pleased with Umayr and make him pleased\" mean?",
          optionsEn: ["A prayer that Allah be pleased with him and that he be content with what Allah has decreed for him", "A command to pray for him", "A question about his condition"]
        }
      ]
    }
  ]
};

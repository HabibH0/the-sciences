// القراءة الراشدة, volume two, chapter 49 (printed heading "٤٩") --
// رِسَالَةٌ إِلَىٰ رَسُوْلِ اللهِ ﷺ -- "A Message to the Messenger of
// Allah ﷺ".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 166-168.
//
// Structure: six paragraphs. (A) an everyday framing scenario -- if a
// relative or friend is traveling home and will meet your father, you
// send greetings and news of your wellbeing through him. (B) likewise,
// the early Muslims believed death is a bridge to the Hereafter, and
// every Muslim who crosses it meets the Messenger of Allah ﷺ there, who
// will surely ask after his community. (C) this holds even if the human
// messenger never reaches the homeland or never meets the father -- the
// Muslims never doubted the martyr's meeting with the Messenger ﷺ
// regardless. (D) historical illustration: the Prophet ﷺ had promised
// the Muslims, advancing on Syria, that they would conquer the
// treasures of Khosrow and Caesar, and so it happened, city after city,
// army after army. (E)-(F) a battlefield anecdote at Yarmouk: a man who
// has prepared himself for martyrdom asks Abu Ubaydah (may Allah be
// pleased with him), the Muslims' commander, whether he has any message
// for the Messenger of Allah ﷺ; Abu Ubaydah answers yes -- convey my
// greeting, and tell him we have found what our Lord promised us to be
// true.
//
// Sentence segmentation follows the established mechanical rule: split
// at every `،`، `.`، `؟`، `!` (not at colons, which stay attached to the
// clause that follows, e.g. qr2-49-002's "وَقَالَ: إِنِّيْ ..."). This is
// applied uniformly even inside quoted/reported speech, splitting a
// single continuous hadith quotation across sentence entries at its own
// internal commas -- same treatment chapter-45.js gave the crescent-
// moon supplication (qr2-45-013/014). Two hadith quotations are given in
// «» guillemets (qr2-49-024's "«لَتُفْتَحُنَّ ...»" and qr2-49-025/026's
// two-part "«وَإِنَّ جُنْدَنَا ...»"), kept in `ar` and excluded from
// `tokens` reconstruction per stripPunct's existing handling of «».
// The parenthetical aside "ـ رَضِيَ اللهُ عَنْهُ ، قَائِدِ الْمُسْلِمِيْنَ ـ"
// (qr2-49-030/031) keeps its tatweel-dashes in `ar` for the same reason
// (also stripped by stripPunct, so reconstruction is unaffected).
//
// Footnote-marker convention (as in ch45-48): markers "(١)"-"(٢)" on
// p.166 and "(١)"-"(٤)" on p.167 are book furniture, excluded from `ar`
// and not tokenized; each footnoted lemma (جسر، عبر on p.166؛ زحف،
// كسرى، قيصر، اليرموك on p.167) carries the footnote's defining text in
// its `book_note`. p.168's footnote "(١)" is different in kind -- not a
// vocabulary gloss but a SOURCE CITATION for the closing quotation
// ("حَقًّا(١)"): "انظر: «البداية والنهاية» لابن كثير ، ج ٧ ، ص ١٢."
// (see "al-Bidayah wan-Nihayah" by Ibn Kathir, vol. 7, p. 12). Excluded
// from `ar`/`tokens` like the other markers, but documented here rather
// than forced into a lemma's `book_note` since it doesn't define a word.
//
// One homograph flag for future reconciliation: "سار" (qr2-49-008,
// "سَارّاً") is the SAME spelling already taught in qiraah-v1/chapter-
// 08.js as a verb, "to travel, set off, move along" (root س ي ر). Here
// it is the active participle of a *different*, geminate root (سَرَّ,
// س ر ر, "to please, gladden"), spelled "سَارّ" -- undiacritized, still
// just "سار". Handled via token-level pos/gloss/root override on the
// existing lemma key ("pleasing, joyful"); not re-added to `newWords`.
//
// Several new lemmas here are Form II/IV/V verbs (or verbal nouns)
// built on an already-taught root, kept as their own distinct dictionary
// entries rather than folded into the known word -- the same treatment
// chapter-44.js gave "اجتنب" (verb) vs. the already-used "اجتناب"
// (verbal noun): "بلّغ" (Form II, "to convey/deliver") vs. already-known
// "بلغ" (Form I, "to reach, attain"); "تشرف" (Form V, "to be honored")
// vs. already-known "شرف" (noun, "honour"); "تهيأ" (Form V, "to prepare
// oneself") vs. already-known "هيأ" (Form II, "to prepare [something]");
// "أقرأ" (Form IV, idiomatic "convey a greeting via recitation") vs.
// already-known "قرأ" (Form I, "to read"); and the verbal nouns "وصول"
// (arrival) and "اجتماع" (meeting) vs. already-known "وصل"/"اجتمع".
//
// Vocabulary notes: "قريب" (already qiraah-v1/ch01, gloss already
// covers both "near" and "relative") is reused here in its noun sense,
// "أب"/"والد" (both already known) for "father", "خبر" (own ch44),
// "صحة"/"قرأ"/"وصل"/"هنالك"/"زيارة"/"أمة"/"عالم" (the "world" sense,
// own ch42)/"نبي"/"أخبر"/"مدينة"/"يوم"/"رضي"/"مسلم"/"أمر"/"حاجة"/"وجد"/
// "رب"/"حق"/"رسول"/"جند"/"مسافر"/"قابل" were all already introduced and
// are reused here rather than re-listed as new words. "فتح" covers both
// the verb (qr2-49-028, "فَتَحُوْا", "to conquer") and the related noun
// (qr2-49-026, "الْفَتْحِ", "conquest") under one lemma, since Form I
// verb and its plain masdar share the same spelling.
export const CHAPTER = {
  id: "ch49",
  title: {
    ar: "رِسَالَةٌ إِلَىٰ رَسُوْلِ اللهِ ﷺ",
    en: "A Message to the Messenger of Allah ﷺ"
  },
  pages: [166, 167, 168],
  newWords: [
    "وطن", "أوصى", "رسالة", "حمل", "شك", "بلّغ", "بشرى", "سرور", "اعتقد",
    "موت", "جسر", "آخرة", "عبر", "تشرف", "بد", "سائل", "يمكن", "مانع",
    "حادثة", "ميت", "شهيد", "زحف", "شام", "فتح", "كنز", "كسرى", "قيصر",
    "وعد", "نصر", "منصور", "غالب", "واثق", "هزم", "يرموك", "عبيدة",
    "قائد", "تهيأ", "شهادة", "أقرأ", "وصول", "اجتماع"
  ],
  lemmas: {
    "جسر": {
      root: "ج س ر", pos: "noun", gloss: "a bridge",
      book_note: "جَسْر جمع جُسُوْر: القنطرة ونحوها مما يعبر عليه، وما يربط بين طرفين، وسيلة اتصال وتفاهم."
    },
    "عبر": {
      root: "ع ب ر", pos: "verb", gloss: "to cross",
      book_note: "عَبَرَ يَعْبُرُ عُبُوراً وعَبْراً - النَّهْرَ والطريقَ أو الجِسْرَ: قَطَعَه من جانبٍ إلى جانبٍ."
    },
    "زحف": {
      root: "ز ح ف", pos: "verb", gloss: "to advance, march",
      book_note: "زَحَفَ يَزْحَفُ زَحْفاً: تَقَدَّمَ في ثِقَلٍ."
    },
    "كسرى": {
      root: "", pos: "proper", gloss: "Khosrow (title of the Persian kings)",
      book_note: "كِسْرَىٰ: لقبُ ملوكِ الفُرس."
    },
    "قيصر": {
      root: "", pos: "proper", gloss: "Caesar (title of the Byzantine kings)",
      book_note: "قَيْصَر: لقبُ ملوكِ الرُّوم."
    },
    "يرموك": {
      root: "", pos: "proper", gloss: "the Yarmouk (river and battle)",
      book_note: "الْيَرْمُوْك: من روافد الأردن، ينبع في هضبة حوران ويجري في حدود سورية، ويصبُّ في الأردن، عنده انتصر سيدنا خالد بن الوليد رضي الله عنه على البيزنطيين سنة ١٥ هـ."
    },
    "وطن": { root: "و ط ن", pos: "noun", gloss: "homeland" },
    "أوصى": { root: "و ص ي", pos: "verb", gloss: "to instruct, entrust (someone) with" },
    "رسالة": { root: "ر س ل", pos: "noun", gloss: "a letter, message" },
    "حمل": { root: "ح م ل", pos: "verb", gloss: "to carry" },
    "شك": { root: "ش ك ك", pos: "verb", gloss: "to doubt" },
    "بلّغ": { root: "ب ل غ", pos: "verb", gloss: "to convey, deliver, make reach" },
    "بشرى": { root: "ب ش ر", pos: "noun", gloss: "glad tidings, good news" },
    "سرور": { root: "س ر ر", pos: "noun", gloss: "joy, happiness" },
    "اعتقد": { root: "ع ق د", pos: "verb", gloss: "to believe" },
    "موت": { root: "م و ت", pos: "noun", gloss: "death" },
    "آخرة": { root: "أ خ ر", pos: "noun", gloss: "the Hereafter" },
    "تشرف": { root: "ش ر ف", pos: "verb", gloss: "to be honored" },
    "بد": { root: "ب د د", pos: "noun", gloss: "escape, avoiding (it) -- used in the idiom لا بدّ, 'there is no avoiding, it is inevitable'" },
    "سائل": { root: "س أ ل", pos: "noun", gloss: "one who asks, questioner" },
    "يمكن": { root: "م ك ن", pos: "verb", gloss: "it is possible" },
    "مانع": { root: "م ن ع", pos: "noun", gloss: "an obstacle, preventer" },
    "حادثة": { root: "ح د ث", pos: "noun", gloss: "an accident, incident" },
    "ميت": { root: "م و ت", pos: "noun", gloss: "the deceased" },
    "شهيد": { root: "ش ه د", pos: "noun", gloss: "a martyr" },
    "شام": { root: "", pos: "proper", gloss: "Syria (al-Sham)" },
    "فتح": { root: "ف ت ح", pos: "verb", gloss: "to conquer, open" },
    "كنز": { root: "ك ن ز", pos: "noun", gloss: "a treasure" },
    "وعد": { root: "و ع د", pos: "verb", gloss: "to promise" },
    "نصر": { root: "ن ص ر", pos: "noun", gloss: "victory, help" },
    "منصور": { root: "ن ص ر", pos: "adj", gloss: "made victorious" },
    "غالب": { root: "غ ل ب", pos: "adj", gloss: "triumphant, victor" },
    "واثق": { root: "و ث ق", pos: "adj", gloss: "confident, certain" },
    "هزم": { root: "ه ز م", pos: "verb", gloss: "to defeat" },
    "عبيدة": { root: "", pos: "proper", gloss: "Ubaydah (part of the name Abu Ubaydah)" },
    "قائد": { root: "ق و د", pos: "noun", gloss: "a commander, leader" },
    "تهيأ": { root: "ه ي أ", pos: "verb", gloss: "to prepare oneself" },
    "شهادة": { root: "ش ه د", pos: "noun", gloss: "martyrdom, testimony" },
    "أقرأ": { root: "ق ر أ", pos: "verb", gloss: "to convey (a greeting), make (someone) recite" },
    "وصول": { root: "و ص ل", pos: "noun", gloss: "arrival" },
    "اجتماع": { root: "ج م ع", pos: "noun", gloss: "meeting, gathering" }
  },
  paragraphs: [
    {
      en: "If a relative or friend comes to you and says he is traveling to the homeland and will meet your father, and asks whether you have anything to entrust or a message he can carry and deliver -- you have no doubt he will indeed meet your father, and that your father may well ask him for pleasing news and glad tidings of your health. So you say: 'Convey my greetings to my father, and tell him: your son is well, with the health and happiness you would wish for.'",
      sentences: [
        {
          id: "qr2-49-001",
          ar: "إِذَا جَاءَكَ قَرِيْبٌ أَوْ صَدِيْقٌ ،",
          en: "If a relative or friend comes to you,",
          tokens: [
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if" },
            { surface: "جَاءَكَ", lemma: "جاء", pos: "verb", features: "perf.3ms+2ms", root: "ج ي أ", gloss: "comes to you" },
            { surface: "قَرِيْبٌ", lemma: "قريب", pos: "noun", features: "indef.nom", root: "ق ر ب", gloss: "a relative" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "صَدِيْقٌ", lemma: "صديق", pos: "noun", features: "indef.nom", root: "ص د ق", gloss: "a friend" }
          ]
        },
        {
          id: "qr2-49-002",
          ar: "وَقَالَ: إِنِّيْ مُسَافِرٌ إِلَىٰ الْوَطَنِ ،",
          en: "and says: 'I am traveling to the homeland,",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and says" },
            { surface: "إِنِّيْ", lemma: "إن", pos: "part", features: "part+1cs", root: "", gloss: "indeed I" },
            { surface: "مُسَافِرٌ", lemma: "مسافر", pos: "noun", features: "indef.nom", root: "س ف ر", gloss: "a traveler" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْوَطَنِ", lemma: "وطن", pos: "noun", features: "def.gen", root: "و ط ن", gloss: "the homeland" }
          ]
        },
        {
          id: "qr2-49-003",
          ar: "وَسَأُقَابِلُ أَبَاكَ ،",
          en: "and I will meet your father,",
          tokens: [
            { surface: "وَسَأُقَابِلُ", lemma: "قابل", pos: "verb", features: "conj+fut.1cs", root: "ق ب ل", gloss: "and I will meet" },
            { surface: "أَبَاكَ", lemma: "أب", pos: "noun", features: "acc+2ms", root: "أ ب و", gloss: "your father" }
          ]
        },
        {
          id: "qr2-49-004",
          ar: "فَهَلْ تُوْصِيْ بِشَيْءٍ؟",
          en: "so is there anything you'd like to entrust to me?",
          tokens: [
            { surface: "فَهَلْ", lemma: "هل", pos: "part", features: "conj+part", root: "", gloss: "so is there" },
            { surface: "تُوْصِيْ", lemma: "أوصى", pos: "verb", features: "impf.2ms", root: "و ص ي", gloss: "do you instruct/entrust" },
            { surface: "بِشَيْءٍ", lemma: "شيء", pos: "noun", features: "prep+indef.gen", root: "ش ي أ", gloss: "with anything" }
          ]
        },
        {
          id: "qr2-49-005",
          ar: "وَهَلْ لَكَ رِسَالَةٌ إِلَيْهِ أَحْمِلُهَا مِنْكَ ،",
          en: "and do you have a message to him that I may carry from you,",
          tokens: [
            { surface: "وَهَلْ", lemma: "هل", pos: "part", features: "conj+part", root: "", gloss: "and is there" },
            { surface: "لَكَ", lemma: "ل", pos: "prep", features: "prep+2ms", root: "", gloss: "for you" },
            { surface: "رِسَالَةٌ", lemma: "رسالة", pos: "noun", features: "indef.nom", root: "ر س ل", gloss: "a message" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "أَحْمِلُهَا", lemma: "حمل", pos: "verb", features: "impf.1cs+3fs", root: "ح م ل", gloss: "that I may carry it" },
            { surface: "مِنْكَ", lemma: "من", pos: "prep", features: "prep+2ms", root: "", gloss: "from you" }
          ]
        },
        {
          id: "qr2-49-006",
          ar: "وَأُبَلِّغُهَا إِلَيْهِ؟",
          en: "and deliver it to him?'",
          tokens: [
            { surface: "وَأُبَلِّغُهَا", lemma: "بلّغ", pos: "verb", features: "conj+impf.1cs+3fs", root: "ب ل غ", gloss: "and deliver it" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" }
          ]
        },
        {
          id: "qr2-49-007",
          ar: "فَلاَ تَشُكُّ أَنَّهُ سَيَجْتَمِعُ بِأَبِيْكَ ،",
          en: "You have no doubt that he will indeed meet your father,",
          tokens: [
            { surface: "فَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "so do not" },
            { surface: "تَشُكُّ", lemma: "شك", pos: "verb", features: "impf.2ms", root: "ش ك ك", gloss: "you doubt" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "سَيَجْتَمِعُ", lemma: "اجتمع", pos: "verb", features: "fut.3ms", root: "ج م ع", gloss: "will meet" },
            { surface: "بِأَبِيْكَ", lemma: "أب", pos: "noun", features: "prep+gen+2ms", root: "أ ب و", gloss: "with your father" }
          ]
        },
        {
          id: "qr2-49-008",
          ar: "وَرُبَّمَا يَسْأَلُ أَبُوْكَ عَنْكَ خَبَراً سَارّاً ،",
          en: "and perhaps your father will ask him about you for pleasing news,",
          tokens: [
            { surface: "وَرُبَّمَا", lemma: "ربما", pos: "adv", features: "conj+adv", root: "", gloss: "and perhaps" },
            { surface: "يَسْأَلُ", lemma: "سأل", pos: "verb", features: "impf.3ms", root: "س أ ل", gloss: "will ask" },
            { surface: "أَبُوْكَ", lemma: "أب", pos: "noun", features: "nom+2ms", root: "أ ب و", gloss: "your father" },
            { surface: "عَنْكَ", lemma: "عن", pos: "prep", features: "prep+2ms", root: "", gloss: "about you" },
            { surface: "خَبَراً", lemma: "خبر", pos: "noun", features: "indef.acc", root: "خ ب ر", gloss: "for news" },
            { surface: "سَارّاً", lemma: "سار", pos: "adj", features: "indef.acc", root: "س ر ر", gloss: "pleasing" }
          ]
        },
        {
          id: "qr2-49-009",
          ar: "وَبُشْرَىٰ صِحَّتِكَ.",
          en: "and glad tidings of your health.",
          tokens: [
            { surface: "وَبُشْرَىٰ", lemma: "بشرى", pos: "noun", features: "conj+acc.constr", root: "ب ش ر", gloss: "and glad tidings (of)" },
            { surface: "صِحَّتِكَ", lemma: "صحة", pos: "noun", features: "gen+2ms", root: "ص ح ح", gloss: "your health" }
          ]
        },
        {
          id: "qr2-49-010",
          ar: "فَتَقُوْلُ: تَقْرَأُ عَلَىٰ وَالِدِيْ مِنِّيْ السَّلاَمَ ،",
          en: "So you say: 'Convey my greetings to my father,",
          tokens: [
            { surface: "فَتَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.2ms", root: "ق و ل", gloss: "so you say" },
            { surface: "تَقْرَأُ", lemma: "قرأ", pos: "verb", features: "impf.2ms", root: "ق ر أ", gloss: "convey, recite" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "وَالِدِيْ", lemma: "والد", pos: "noun", features: "gen+1cs", root: "و ل د", gloss: "my father" },
            { surface: "مِنِّيْ", lemma: "من", pos: "prep", features: "prep+1cs", root: "", gloss: "from me" },
            { surface: "السَّلاَمَ", lemma: "سلام", pos: "noun", features: "def.acc", root: "س ل م", gloss: "the greeting" }
          ]
        },
        {
          id: "qr2-49-011",
          ar: "وَقُلْ لَهُ: إِنَّ ابْنَكَ بِخَيْرٍ ،",
          en: "and tell him: your son is well,",
          tokens: [
            { surface: "وَقُلْ", lemma: "قال", pos: "verb", features: "conj+imp.2ms", root: "ق و ل", gloss: "and say" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "ابْنَكَ", lemma: "ابن", pos: "noun", features: "acc+2ms", root: "ب ن ي", gloss: "your son" },
            { surface: "بِخَيْرٍ", lemma: "خير", pos: "noun", features: "prep+indef.gen", root: "خ ي ر", gloss: "is well" }
          ]
        },
        {
          id: "qr2-49-012",
          ar: "وَكَمَا تُحِبُّ مِنْ صِحَّةٍ وَسُرُوْرٍ.",
          en: "with the health and happiness you would wish for.'",
          tokens: [
            { surface: "وَكَمَا", lemma: "كما", pos: "conj", features: "conj+part", root: "", gloss: "just as, in the way" },
            { surface: "تُحِبُّ", lemma: "أحب", pos: "verb", features: "impf.2ms", root: "ح ب ب", gloss: "you would wish/love" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "صِحَّةٍ", lemma: "صحة", pos: "noun", features: "indef.gen", root: "ص ح ح", gloss: "health" },
            { surface: "وَسُرُوْرٍ", lemma: "سرور", pos: "noun", features: "conj+indef.gen", root: "س ر ر", gloss: "and happiness" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا يَطْلُبُ الشَّخْصُ مِنْ قَرِيْبِهِ أَوِ الْمُسَافِرِ إِلَىٰ الْوَطَنِ؟",
          options: ["أَنْ يُوْصِلَ رِسَالَةَ سَلَامٍ إِلَىٰ وَالِدِهِ", "أَنْ يُحْضِرَ لَهُ هَدِيَّةً مِنَ الْوَطَنِ", "أَنْ يَبْقَىٰ مَعَهُ فِي السَّفَرِ"],
          answer: 0,
          qEn: "What does the person ask of his relative or friend traveling to the homeland?",
          optionsEn: ["To carry a message of greeting to his father", "To bring him a gift from the homeland", "To stay with him during the journey"]
        },
        {
          q: "بِمَاذَا يُخْبِرُ الْمُسَافِرُ وَالِدَ الشَّخْصِ؟",
          options: ["إِنَّ ابْنَهُ بِخَيْرٍ وَصِحَّةٍ وَسُرُوْرٍ", "إِنَّ ابْنَهُ مَرِيْضٌ وَيَحْتَاجُ إِلَىٰ مَالٍ", "إِنَّ ابْنَهُ لَا يُرِيْدُ الْعَوْدَةَ"],
          answer: 0,
          qEn: "What does the traveler tell the person's father?",
          optionsEn: ["That his son is well, healthy, and happy", "That his son is sick and needs money", "That his son doesn't want to return"]
        }
      ]
    },
    {
      en: "Likewise, the Muslims used to believe that death is a bridge to the Hereafter, and every Muslim who crosses this bridge arrives at the Hereafter and meets the Messenger of Allah ﷺ there, honored by visiting him -- and the Messenger of Allah ﷺ will surely ask about his community.",
      sentences: [
        {
          id: "qr2-49-013",
          ar: "كَذٰلِكَ كَانَ الْمُسْلِمُوْنَ يَعْتَقِدُوْنَ أَنَّ الْمَوْتَ جِسْرٌ إِلَىٰ الآخِرَةِ ،",
          en: "Likewise, the Muslims used to believe that death is a bridge to the Hereafter,",
          tokens: [
            { surface: "كَذٰلِكَ", lemma: "كذلك", pos: "adv", features: "adv", root: "", gloss: "likewise" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "were (used to)" },
            { surface: "الْمُسْلِمُوْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.nom", root: "س ل م", gloss: "the Muslims" },
            { surface: "يَعْتَقِدُوْنَ", lemma: "اعتقد", pos: "verb", features: "impf.3mpl", root: "ع ق د", gloss: "believe" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "الْمَوْتَ", lemma: "موت", pos: "noun", features: "def.acc", root: "م و ت", gloss: "death" },
            { surface: "جِسْرٌ", lemma: "جسر", pos: "noun", features: "indef.nom", root: "ج س ر", gloss: "a bridge" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الآخِرَةِ", lemma: "آخرة", pos: "noun", features: "def.gen", root: "أ خ ر", gloss: "the Hereafter" }
          ]
        },
        {
          id: "qr2-49-014",
          ar: "وَكُلُّ مَنْ عَبَرَ هٰذَا الْجِسْرَ مِنَ الْمُسْلِمِيْنَ وَصَلَ إِلَىٰ الآخِرَةِ ،",
          en: "and every Muslim who crosses this bridge arrives at the Hereafter,",
          tokens: [
            { surface: "وَكُلُّ", lemma: "كل", pos: "noun", features: "conj+nom.constr", root: "ك ل ل", gloss: "and every" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "part", root: "", gloss: "who" },
            { surface: "عَبَرَ", lemma: "عبر", pos: "verb", features: "perf.3ms", root: "ع ب ر", gloss: "crosses" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "الْجِسْرَ", lemma: "جسر", pos: "noun", features: "def.acc", root: "ج س ر", gloss: "bridge" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "the Muslims" },
            { surface: "وَصَلَ", lemma: "وصل", pos: "verb", features: "perf.3ms", root: "و ص ل", gloss: "arrives" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الآخِرَةِ", lemma: "آخرة", pos: "noun", features: "def.gen", root: "أ خ ر", gloss: "the Hereafter" }
          ]
        },
        {
          id: "qr2-49-015",
          ar: "وَاجْتَمَعَ هُنَالِكَ بِرَسُوْلِ اللهِ ﷺ ،",
          en: "and meets the Messenger of Allah ﷺ there,",
          tokens: [
            { surface: "وَاجْتَمَعَ", lemma: "اجتمع", pos: "verb", features: "conj+perf.3ms", root: "ج م ع", gloss: "and meets" },
            { surface: "هُنَالِكَ", lemma: "هنالك", pos: "adv", features: "adv", root: "", gloss: "there" },
            { surface: "بِرَسُوْلِ", lemma: "رسول", pos: "noun", features: "prep+gen.constr", root: "ر س ل", gloss: "with the messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-49-016",
          ar: "وَتَشَرَّفَ بِزِيَارَتِهِ ،",
          en: "honored by visiting him,",
          tokens: [
            { surface: "وَتَشَرَّفَ", lemma: "تشرف", pos: "verb", features: "conj+perf.3ms", root: "ش ر ف", gloss: "and is honored" },
            { surface: "بِزِيَارَتِهِ", lemma: "زيارة", pos: "noun", features: "prep+gen+3ms", root: "ز و ر", gloss: "by visiting him" }
          ]
        },
        {
          id: "qr2-49-017",
          ar: "وَلاَ بُدَّ أَنَّ رَسُوْلَ اللهِ ﷺ سَائِلٌ عَنْ أُمَّتِهِ.",
          en: "and the Messenger of Allah ﷺ will surely ask about his community.",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and there is no" },
            { surface: "بُدَّ", lemma: "بد", pos: "noun", features: "acc", root: "ب د د", gloss: "avoiding [it is inevitable]" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "the messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" },
            { surface: "سَائِلٌ", lemma: "سائل", pos: "noun", features: "indef.nom", root: "س أ ل", gloss: "will ask" },
            { surface: "عَنْ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "about" },
            { surface: "أُمَّتِهِ", lemma: "أمة", pos: "noun", features: "gen+3ms", root: "أ م م", gloss: "his community" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا كَانَ الْمُسْلِمُوْنَ يَعْتَقِدُوْنَ فِيْمَا يَتَعَلَّقُ بِالْمَوْتِ؟",
          options: ["أَنَّهُ جِسْرٌ إِلَى الآخِرَةِ يُوْصِلُ إِلَىٰ لِقَاءِ رَسُوْلِ اللهِ ﷺ", "أَنَّهُ نِهَايَةُ كُلِّ شَيْءٍ وَلَا حَيَاةَ بَعْدَهُ", "أَنَّهُ أَمْرٌ يَجِبُ الْخَوْفُ مِنْهُ فَقَط"],
          answer: 0,
          qEn: "What did the Muslims believe regarding death?",
          optionsEn: ["That it is a bridge to the Hereafter leading to meeting the Messenger of Allah ﷺ", "That it is the end of everything, with no life after it", "That it is something to only be feared"]
        }
      ]
    },
    {
      en: "It is possible that your relative or friend might not reach the homeland, due to some obstacle or accident, or might reach it yet not meet your father -- but the Muslims never doubted the deceased's arrival in the world of the Hereafter, nor the martyr's meeting with the Messenger of Allah ﷺ.",
      sentences: [
        {
          id: "qr2-49-018",
          ar: "وَيُمْكِنُ أَلاَّ يَصِلَ قَرِيْبُكَ أَوْ صَدِيْقُكَ إِلَىٰ الْوَطَنِ لِمَانِعٍ أَوْ حَادِثَةٍ ،",
          en: "It is possible that your relative or friend might not reach the homeland, due to some obstacle or accident,",
          tokens: [
            { surface: "وَيُمْكِنُ", lemma: "يمكن", pos: "verb", features: "conj+impf.3ms", root: "م ك ن", gloss: "and it is possible" },
            { surface: "أَلاَّ", lemma: "لا", pos: "part", features: "part+neg", root: "", gloss: "that...not" },
            { surface: "يَصِلَ", lemma: "وصل", pos: "verb", features: "subj.3ms", root: "و ص ل", gloss: "reaches" },
            { surface: "قَرِيْبُكَ", lemma: "قريب", pos: "noun", features: "nom+2ms", root: "ق ر ب", gloss: "your relative" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "صَدِيْقُكَ", lemma: "صديق", pos: "noun", features: "nom+2ms", root: "ص د ق", gloss: "your friend" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْوَطَنِ", lemma: "وطن", pos: "noun", features: "def.gen", root: "و ط ن", gloss: "the homeland" },
            { surface: "لِمَانِعٍ", lemma: "مانع", pos: "noun", features: "prep+indef.gen", root: "م ن ع", gloss: "due to some obstacle" },
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "حَادِثَةٍ", lemma: "حادثة", pos: "noun", features: "indef.gen", root: "ح د ث", gloss: "an accident" }
          ]
        },
        {
          id: "qr2-49-019",
          ar: "أَوْ يَصِلَ إِلَىٰ الْوَطَنِ ،",
          en: "or might reach the homeland,",
          tokens: [
            { surface: "أَوْ", lemma: "أو", pos: "conj", features: "conj", root: "", gloss: "or" },
            { surface: "يَصِلَ", lemma: "وصل", pos: "verb", features: "subj.3ms", root: "و ص ل", gloss: "reaches" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْوَطَنِ", lemma: "وطن", pos: "noun", features: "def.gen", root: "و ط ن", gloss: "the homeland" }
          ]
        },
        {
          id: "qr2-49-020",
          ar: "وَلاَ يَجْتَمِعْ بِأَبِيْكَ ،",
          en: "yet not meet your father,",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and does not" },
            { surface: "يَجْتَمِعْ", lemma: "اجتمع", pos: "verb", features: "juss.3ms", root: "ج م ع", gloss: "meet" },
            { surface: "بِأَبِيْكَ", lemma: "أب", pos: "noun", features: "prep+gen+2ms", root: "أ ب و", gloss: "with your father" }
          ]
        },
        {
          id: "qr2-49-021",
          ar: "وَلٰكِنَّ الْمُسْلِمِيْنَ مَا كَانُوْا يَشُكُّوْنَ فِيْ وُصُوْلِ الْمَيِّتِ إِلَىٰ عَالَمِ الآخِرَةِ ،",
          en: "but the Muslims never doubted the deceased's arrival in the world of the Hereafter,",
          tokens: [
            { surface: "وَلٰكِنَّ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.acc", root: "س ل م", gloss: "the Muslims" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "neg", root: "", gloss: "never" },
            { surface: "كَانُوْا", lemma: "كان", pos: "verb", features: "perf.3mpl", root: "ك و ن", gloss: "used to" },
            { surface: "يَشُكُّوْنَ", lemma: "شك", pos: "verb", features: "impf.3mpl", root: "ش ك ك", gloss: "doubt" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in, about" },
            { surface: "وُصُوْلِ", lemma: "وصول", pos: "noun", features: "gen.constr", root: "و ص ل", gloss: "the arrival (of)" },
            { surface: "الْمَيِّتِ", lemma: "ميت", pos: "noun", features: "def.gen", root: "م و ت", gloss: "the deceased" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "عَالَمِ", lemma: "عالم", pos: "noun", features: "gen.constr", root: "ع ل م", gloss: "the world (of)" },
            { surface: "الآخِرَةِ", lemma: "آخرة", pos: "noun", features: "def.gen", root: "أ خ ر", gloss: "the Hereafter" }
          ]
        },
        {
          id: "qr2-49-022",
          ar: "وَاجْتِمَاعِ الشَّهِيْدِ بِرَسُوْلِ اللهِ ﷺ.",
          en: "nor the martyr's meeting with the Messenger of Allah ﷺ.",
          tokens: [
            { surface: "وَاجْتِمَاعِ", lemma: "اجتماع", pos: "noun", features: "conj+gen.constr", root: "ج م ع", gloss: "and the meeting (of)" },
            { surface: "الشَّهِيْدِ", lemma: "شهيد", pos: "noun", features: "def.gen", root: "ش ه د", gloss: "the martyr" },
            { surface: "بِرَسُوْلِ", lemma: "رسول", pos: "noun", features: "prep+gen.constr", root: "ر س ل", gloss: "with the messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "هَلْ كَانَ الْمُسْلِمُوْنَ يَشُكُّوْنَ فِيْ وُصُوْلِ الشَّهِيْدِ إِلَىٰ رَسُوْلِ اللهِ ﷺ حَتَّىٰ لَوْ لَمْ يَصِلِ الرَّسُوْلُ الْبَشَرِيُّ إِلَىٰ الْوَطَنِ؟",
          options: ["لَا ، لَمْ يَكُوْنُوْا يَشُكُّوْنَ فِيْ ذٰلِكَ أَبَداً", "نَعَمْ ، كَانُوْا يَشُكُّوْنَ كَثِيْراً", "كَانُوْا غَيْرَ مُبَالِيْنَ بِهٰذَا الأَمْرِ"],
          answer: 0,
          qEn: "Did the Muslims doubt the martyr's arrival to the Messenger of Allah ﷺ even if the human messenger never reached the homeland?",
          optionsEn: ["No, they never doubted that at all", "Yes, they doubted it a great deal", "They were indifferent to this matter"]
        }
      ]
    },
    {
      en: "The Muslims advanced towards Syria, and the Prophet ﷺ had told them: 'You shall surely conquer the treasures of Khosrow and Caesar' -- Allah had promised them both victory, and had said: 'Indeed Our soldiers, they will be the ones made victorious, and indeed Our soldiers, they will be the ones triumphant' -- and they were certain of victory and conquest, and so it was: they conquered city after city, and defeated army after army.",
      sentences: [
        {
          id: "qr2-49-023",
          ar: "زَحَفَ الْمُسْلِمُوْنَ إِلَىٰ الشَّامِ ،",
          en: "The Muslims advanced towards Syria,",
          tokens: [
            { surface: "زَحَفَ", lemma: "زحف", pos: "verb", features: "perf.3ms", root: "ز ح ف", gloss: "advanced" },
            { surface: "الْمُسْلِمُوْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.nom", root: "س ل م", gloss: "the Muslims" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "towards" },
            { surface: "الشَّامِ", lemma: "شام", pos: "proper", features: "def.gen", root: "", gloss: "Syria (al-Sham)" }
          ]
        },
        {
          id: "qr2-49-024",
          ar: "وَكَانَ النَّبِيُّ ﷺ أَخْبَرَهُمْ: «لَتُفْتَحُنَّ كُنُوْزَ كِسْرَىٰ وَقَيْصَرَ» وَقَدْ وَعَدَهُمَا اللهُ بِالنَّصْرِ ،",
          en: "and the Prophet ﷺ had told them: 'You shall surely conquer the treasures of Khosrow and Caesar' -- Allah had promised them both victory,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and had" },
            { surface: "النَّبِيُّ", lemma: "نبي", pos: "noun", features: "def.nom", root: "ن ب أ", gloss: "the Prophet" },
            { surface: "أَخْبَرَهُمْ", lemma: "أخبر", pos: "verb", features: "perf.3ms+3mpl", root: "خ ب ر", gloss: "told them" },
            { surface: "لَتُفْتَحُنَّ", lemma: "فتح", pos: "verb", features: "emph+impf.2mpl.pass", root: "ف ت ح", gloss: "you shall surely conquer" },
            { surface: "كُنُوْزَ", lemma: "كنز", pos: "noun", features: "pl.acc.constr", root: "ك ن ز", gloss: "the treasures (of)" },
            { surface: "كِسْرَىٰ", lemma: "كسرى", pos: "proper", features: "gen", root: "", gloss: "Khosrow" },
            { surface: "وَقَيْصَرَ", lemma: "قيصر", pos: "proper", features: "conj+gen", root: "", gloss: "and Caesar" },
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "وَعَدَهُمَا", lemma: "وعد", pos: "verb", features: "perf.3ms+3md", root: "و ع د", gloss: "promised them both" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "بِالنَّصْرِ", lemma: "نصر", pos: "noun", features: "prep+def.gen", root: "ن ص ر", gloss: "victory" }
          ]
        },
        {
          id: "qr2-49-025",
          ar: "وَقَالَ: «وَإِنَّ جُنْدَنَا لَهُمُ الْمَنْصُوْرُوْنَ ،",
          en: "and had said: 'Indeed Our soldiers, they will be the ones made victorious,",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and He said" },
            { surface: "وَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "جُنْدَنَا", lemma: "جند", pos: "noun", features: "acc+1cpl", root: "ج ن د", gloss: "our soldiers" },
            { surface: "لَهُمُ", lemma: "ل", pos: "prep", features: "prep+3mpl", root: "", gloss: "they [emphatic]" },
            { surface: "الْمَنْصُوْرُوْنَ", lemma: "منصور", pos: "adj", features: "pl.def.nom", root: "ن ص ر", gloss: "the ones made victorious" }
          ]
        },
        {
          id: "qr2-49-026",
          ar: "وَإِنَّ جُنْدَنَا لَهُمُ الْغَالِبُوْنَ» وَكَانُوْا وَاثِقِيْنَ بِالنَّصْرِ وَالْفَتْحِ ،",
          en: "and indeed Our soldiers, they will be the ones triumphant' -- and they were certain of victory and conquest,",
          tokens: [
            { surface: "وَإِنَّ", lemma: "إن", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "جُنْدَنَا", lemma: "جند", pos: "noun", features: "acc+1cpl", root: "ج ن د", gloss: "our soldiers" },
            { surface: "لَهُمُ", lemma: "ل", pos: "prep", features: "prep+3mpl", root: "", gloss: "they [emphatic]" },
            { surface: "الْغَالِبُوْنَ", lemma: "غالب", pos: "adj", features: "pl.def.nom", root: "غ ل ب", gloss: "the triumphant ones" },
            { surface: "وَكَانُوْا", lemma: "كان", pos: "verb", features: "conj+perf.3mpl", root: "ك و ن", gloss: "and they were" },
            { surface: "وَاثِقِيْنَ", lemma: "واثق", pos: "adj", features: "pl.acc", root: "و ث ق", gloss: "confident, certain" },
            { surface: "بِالنَّصْرِ", lemma: "نصر", pos: "noun", features: "prep+def.gen", root: "ن ص ر", gloss: "of victory" },
            { surface: "وَالْفَتْحِ", lemma: "فتح", pos: "noun", features: "conj+prep+def.gen", root: "ف ت ح", gloss: "and conquest" }
          ]
        },
        {
          id: "qr2-49-027",
          ar: "وَكَذٰلِكَ كَانَ ،",
          en: "and so it was:",
          tokens: [
            { surface: "وَكَذٰلِكَ", lemma: "كذلك", pos: "adv", features: "conj+adv", root: "", gloss: "and so" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "it was" }
          ]
        },
        {
          id: "qr2-49-028",
          ar: "فَقَدْ فَتَحُوْا مَدِيْنَةً بَعْدَ مَدِيْنَةٍ ،",
          en: "they conquered city after city,",
          tokens: [
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "فَتَحُوْا", lemma: "فتح", pos: "verb", features: "perf.3mpl", root: "ف ت ح", gloss: "they conquered" },
            { surface: "مَدِيْنَةً", lemma: "مدينة", pos: "noun", features: "indef.acc", root: "م د ن", gloss: "city" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "prep", root: "ب ع د", gloss: "after" },
            { surface: "مَدِيْنَةٍ", lemma: "مدينة", pos: "noun", features: "indef.gen", root: "م د ن", gloss: "city" }
          ]
        },
        {
          id: "qr2-49-029",
          ar: "وَهَزَمُوْا جُنْداً بَعْدَ جُنْدٍ.",
          en: "and defeated army after army.",
          tokens: [
            { surface: "وَهَزَمُوْا", lemma: "هزم", pos: "verb", features: "conj+perf.3mpl", root: "ه ز م", gloss: "and they defeated" },
            { surface: "جُنْداً", lemma: "جند", pos: "noun", features: "indef.acc", root: "ج ن د", gloss: "army" },
            { surface: "بَعْدَ", lemma: "بعد", pos: "prep", features: "prep", root: "ب ع د", gloss: "after" },
            { surface: "جُنْدٍ", lemma: "جند", pos: "noun", features: "indef.gen", root: "ج ن د", gloss: "army" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا وَعَدَ النَّبِيُّ ﷺ الْمُسْلِمِيْنَ قَبْلَ زَحْفِهِمْ إِلَىٰ الشَّامِ؟",
          options: ["بِأَنَّهُمْ سَيَفْتَحُوْنَ كُنُوْزَ كِسْرَىٰ وَقَيْصَرَ", "بِأَنَّهُمْ سَيَعُوْدُوْنَ إِلَىٰ الْمَدِيْنَةِ فَوْراً", "بِأَنَّهُمْ لَنْ يُلَاقُوا أَيَّ صُعُوْبَةٍ"],
          answer: 0,
          qEn: "What did the Prophet ﷺ promise the Muslims before their advance to Syria?",
          optionsEn: ["That they would conquer the treasures of Khosrow and Caesar", "That they would return to Medina immediately", "That they would face no difficulty at all"]
        },
        {
          q: "مَاذَا كَانَتْ نَتِيْجَةُ زَحْفِ الْمُسْلِمِيْنَ إِلَىٰ الشَّامِ؟",
          options: ["فَتَحُوْا مَدِيْنَةً بَعْدَ مَدِيْنَةٍ وَهَزَمُوْا جُنْداً بَعْدَ جُنْدٍ", "لَمْ يُحَقِّقُوْا أَيَّ نَصْرٍ", "انْسَحَبُوْا بَعْدَ أَوَّلِ مَعْرَكَةٍ"],
          answer: 0,
          qEn: "What was the result of the Muslims' advance into Syria?",
          optionsEn: ["They conquered city after city and defeated army after army", "They achieved no victory at all", "They withdrew after their first battle"]
        }
      ]
    },
    {
      en: "A man came, on the day of the Battle of Yarmouk, to Abu Ubaydah -- may Allah be pleased with him, the commander of the Muslims -- and said: 'I have indeed prepared myself for my matter, that is, for martyrdom, so is there anything you need conveyed to the Messenger of Allah ﷺ?'",
      sentences: [
        {
          id: "qr2-49-030",
          ar: "وَجَاءَ رَجُلٌ يَوْمَ الْيَرْمُوْكِ إِلَىٰ أَبِيْ عُبَيْدَةَ ـ رَضِيَ اللهُ عَنْهُ ،",
          en: "A man came, on the day of the Battle of Yarmouk, to Abu Ubaydah -- may Allah be pleased with him,",
          tokens: [
            { surface: "وَجَاءَ", lemma: "جاء", pos: "verb", features: "conj+perf.3ms", root: "ج ي أ", gloss: "and came" },
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "indef.nom", root: "ر ج ل", gloss: "a man" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "on the day (of)" },
            { surface: "الْيَرْمُوْكِ", lemma: "يرموك", pos: "proper", features: "def.gen", root: "", gloss: "Yarmouk" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "أَبِيْ", lemma: "أب", pos: "noun", features: "gen.constr", root: "أ ب و", gloss: "the father (of)" },
            { surface: "عُبَيْدَةَ", lemma: "عبيدة", pos: "proper", features: "gen", root: "", gloss: "Ubaydah" },
            { surface: "رَضِيَ", lemma: "رضي", pos: "verb", features: "perf.3ms", root: "ر ض ي", gloss: "may [Allah] be pleased" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" },
            { surface: "عَنْهُ", lemma: "عن", pos: "prep", features: "prep+3ms", root: "", gloss: "with him" }
          ]
        },
        {
          id: "qr2-49-031",
          ar: "قَائِدِ الْمُسْلِمِيْنَ ـ فَقَالَ: إِنَّنِيْ قَدْ تَهَيَّأْتُ لأَمْرِيْ أَيْ لِلشَّهَادَةِ ،",
          en: "the commander of the Muslims -- and said: 'I have indeed prepared myself for my matter, that is, for martyrdom,",
          tokens: [
            { surface: "قَائِدِ", lemma: "قائد", pos: "noun", features: "gen.constr", root: "ق و د", gloss: "the commander (of)" },
            { surface: "الْمُسْلِمِيْنَ", lemma: "مسلم", pos: "noun", features: "pl.def.gen", root: "س ل م", gloss: "the Muslims" },
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "إِنَّنِيْ", lemma: "إن", pos: "part", features: "part+1cs", root: "", gloss: "indeed I" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "have" },
            { surface: "تَهَيَّأْتُ", lemma: "تهيأ", pos: "verb", features: "perf.1cs", root: "ه ي أ", gloss: "prepared myself" },
            { surface: "لأَمْرِيْ", lemma: "أمر", pos: "noun", features: "prep+gen+1cs", root: "أ م ر", gloss: "for my matter" },
            { surface: "أَيْ", lemma: "أي", pos: "part", features: "part", root: "", gloss: "that is" },
            { surface: "لِلشَّهَادَةِ", lemma: "شهادة", pos: "noun", features: "prep+def.gen", root: "ش ه د", gloss: "for martyrdom" }
          ]
        },
        {
          id: "qr2-49-032",
          ar: "فَهَلْ لَكَ مِنْ حَاجَةٍ إِلَىٰ رَسُوْلِ اللهِ ﷺ.",
          en: "so is there anything you need conveyed to the Messenger of Allah ﷺ?",
          tokens: [
            { surface: "فَهَلْ", lemma: "هل", pos: "part", features: "conj+part", root: "", gloss: "so is there" },
            { surface: "لَكَ", lemma: "ل", pos: "prep", features: "prep+2ms", root: "", gloss: "for you" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "any" },
            { surface: "حَاجَةٍ", lemma: "حاجة", pos: "noun", features: "indef.gen", root: "ح و ج", gloss: "need" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "رَسُوْلِ", lemma: "رسول", pos: "noun", features: "gen.constr", root: "ر س ل", gloss: "the messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا طَلَبَ الرَّجُلُ الَّذِيْ تَهَيَّأَ لِلشَّهَادَةِ يَوْمَ الْيَرْمُوْكِ مِنْ أَبِيْ عُبَيْدَةَ؟",
          options: ["سَأَلَهُ إِنْ كَانَتْ لَهُ حَاجَةٌ إِلَىٰ رَسُوْلِ اللهِ ﷺ", "طَلَبَ مِنْهُ الْمَالَ لِأُسْرَتِهِ", "طَلَبَ مِنْهُ الإِذْنَ بِالانْسِحَابِ"],
          answer: 0,
          qEn: "What did the man who had prepared himself for martyrdom on the day of Yarmouk ask of Abu Ubaydah?",
          optionsEn: ["He asked him whether he had any need conveyed to the Messenger of Allah ﷺ", "He asked him for money for his family", "He asked him for permission to withdraw"]
        }
      ]
    },
    {
      en: "Abu Ubaydah said: 'Yes! Convey to him my greeting on my behalf, and say: O Messenger of Allah! Indeed we have found what our Lord promised us to be true.'",
      sentences: [
        {
          id: "qr2-49-033",
          ar: "قَالَ أَبُوْ عُبَيْدَةَ: نَعَمْ!",
          en: "Abu Ubaydah said: 'Yes!",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "أَبُوْ", lemma: "أب", pos: "noun", features: "nom.constr", root: "أ ب و", gloss: "the father (of)" },
            { surface: "عُبَيْدَةَ", lemma: "عبيدة", pos: "proper", features: "gen", root: "", gloss: "Ubaydah" },
            { surface: "نَعَمْ", lemma: "نعم", pos: "part", features: "part", root: "", gloss: "yes" }
          ]
        },
        {
          id: "qr2-49-034",
          ar: "تُقْرِئُهُ عَنِّيْ السَّلاَمَ ،",
          en: "Convey to him my greeting on my behalf,",
          tokens: [
            { surface: "تُقْرِئُهُ", lemma: "أقرأ", pos: "verb", features: "impf.2ms+3ms", root: "ق ر أ", gloss: "convey to him" },
            { surface: "عَنِّيْ", lemma: "عن", pos: "prep", features: "prep+1cs", root: "", gloss: "on my behalf" },
            { surface: "السَّلاَمَ", lemma: "سلام", pos: "noun", features: "def.acc", root: "س ل م", gloss: "the greeting" }
          ]
        },
        {
          id: "qr2-49-035",
          ar: "وَتَقُوْلُ: يَا رَسُوْلَ اللهِ!",
          en: "and say: O Messenger of Allah!",
          tokens: [
            { surface: "وَتَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.2ms", root: "ق و ل", gloss: "and say" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "رَسُوْلَ", lemma: "رسول", pos: "noun", features: "acc.constr", root: "ر س ل", gloss: "Messenger (of)" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-49-036",
          ar: "إِنَّا قَدْ وَجَدْنَا مَا وَعَدَنَا رَبُّنَا حَقّاً.",
          en: "Indeed we have found what our Lord promised us to be true.'",
          tokens: [
            { surface: "إِنَّا", lemma: "إن", pos: "part", features: "part+1cpl", root: "", gloss: "indeed we" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "have" },
            { surface: "وَجَدْنَا", lemma: "وجد", pos: "verb", features: "perf.1cpl", root: "و ج د", gloss: "found" },
            { surface: "مَا", lemma: "ما", pos: "rel", features: "part", root: "", gloss: "what" },
            { surface: "وَعَدَنَا", lemma: "وعد", pos: "verb", features: "perf.3ms+1cpl", root: "و ع د", gloss: "promised us" },
            { surface: "رَبُّنَا", lemma: "رب", pos: "noun", features: "nom+1cpl", root: "ر ب ب", gloss: "our Lord" },
            { surface: "حَقّاً", lemma: "حق", pos: "noun", features: "indef.acc", root: "ح ق ق", gloss: "[to be] true" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا رَدَّ أَبُوْ عُبَيْدَةَ عَلَىٰ الرَّجُلِ؟",
          options: ["طَلَبَ مِنْهُ أَنْ يُقْرِئَ رَسُوْلَ اللهِ ﷺ السَّلَامَ وَيُخْبِرَهُ أَنَّهُمْ وَجَدُوْا وَعْدَ رَبِّهِمْ حَقّاً", "رَفَضَ أَنْ يُرْسِلَ لَهُ أَيَّ رِسَالَةٍ", "طَلَبَ مِنْهُ أَنْ يَنْتَظِرَ حَتَّىٰ نِهَايَةِ الْمَعْرَكَةِ"],
          answer: 0,
          qEn: "How did Abu Ubaydah respond to the man?",
          optionsEn: ["He asked him to convey his greeting to the Messenger of Allah ﷺ and tell him they found their Lord's promise to be true", "He refused to send any message with him", "He asked him to wait until the end of the battle"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "",
        post: "الْمُسْلِمُوْنَ إِلَى الشَّامِ ،",
        en: "the Muslims advanced towards Syria,",
        options: ["زَحَفَ", "زَحَفْتُ", "تَزْحَفُ", "نَزْحَفُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- advanced (agreeing loosely with the following plural subject, common in verb-initial clauses).",
          "1st person singular perfect -- I advanced.",
          "2nd masculine or 3rd feminine present -- you/she advance.",
          "1st person plural present -- we advance.",
        ],
      },
      {
        type: "cloze",
        pre: "وَقَدْ ",
        post: "هُمَا اللهُ بِالنَّصْرِ ،",
        en: "Allah had promised them both victory,",
        options: ["وَعَدَ", "وَعَدْتُ", "تَعِدُ", "نَعِدُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he promised.",
          "1st person singular perfect -- I promised.",
          "2nd masculine or 3rd feminine present -- you/she promise.",
          "1st person plural present -- we promise.",
        ],
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "جُنْداً بَعْدَ جُنْدٍ.",
        en: "and they defeated army after army.",
        options: ["هَزَمُوْا", "هَزَمْتُ", "تَهْزِمُ", "نَهْزِمُ"],
        answer: 0,
        rationales: [
          "3rd masculine plural perfect -- they defeated.",
          "1st person singular perfect -- I defeated.",
          "2nd masculine or 3rd feminine present -- you/she defeat.",
          "1st person plural present -- we defeat.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "تَهَيَّأْتُ لأَمْرِيْ",
        pre: "",
        post: "لأَمْرِهِ",
        targetPerson: "هُوَ",
        targetEn: "he",
        options: ["تَهَيَّأَ", "تَهَيَّأْتَ", "تَهَيَّأْنَا", "يَتَهَيَّأُوْنَ"],
        answer: 0,
        rationales: [
          "3rd masculine singular perfect -- he prepared himself.",
          "2nd masculine singular perfect -- you prepared yourself.",
          "1st person plural perfect -- we prepared ourselves.",
          "3rd masculine plural present -- they prepare themselves.",
        ],
      },
      {
        type: "shift",
        base: "وَجَدْنَا مَا وَعَدَنَا رَبُّنَا حَقّاً",
        pre: "",
        post: "مَا وَعَدَكَ رَبُّكَ حَقّاً",
        targetPerson: "أَنْتَ",
        targetEn: "you",
        options: ["وَجَدْتَ", "وَجَدْتُ", "وَجَدُوْا", "تَجِدُ"],
        answer: 0,
        rationales: [
          "2nd masculine singular perfect -- you found.",
          "1st person singular perfect -- I found.",
          "3rd masculine plural perfect -- they found.",
          "2nd masculine or 3rd feminine present -- you/she find.",
        ],
      },
    ],
  },
};

// القراءة الراشدة, volume two, chapter 50 (printed heading "٥٠") --
// حَادِثَةٌ -- "An Incident".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 169-172.
//
// A first-person narrative: a guest (an elderly teacher, "الشيخ"/
// "الأستاذ") stays the night and, the next (Friday) morning, insists on
// bathing in the river rather than the bathhouse. Though he once knew
// how to swim, he hasn't practiced in a long time; the flooding river
// quickly exhausts him and sweeps him into its current. The household
// panics; a strong-swimming relative wades in but -- being experienced --
// refuses to let the drowning man grab him directly (which would drown
// them both), instead pushing him from below toward the shore. A
// fisherman on the bank extends his stick; the barely-conscious elder
// is struck by it repeatedly before he manages to hold on and reach
// land. He has swallowed a great deal of water and is made to vomit
// before recovering. He is ferried back across on a raft of jars,
// escorted by expert swimmers. Shaken, he thereafter warns every future
// visitor to the narrator's village never to enter the river -- yet
// still privately resents the rescuer for not simply grabbing his hand.
//
// Sentence segmentation follows the established mechanical rule: split
// at every `،`، `.`، `؟`، `!` (not at colons). Applied uniformly even to
// short back-to-back exclamations, e.g. qr2-50-023/024's two separate
// "اللهُ!" sentences (the drowning man repeating the Name), matching how
// chapter-45's crescent-moon supplication was split at its own internal
// punctuation.
//
// Footnote-marker convention (as in ch45-49): markers "(١)"-"(٢)" on
// p.169, "(١)"-"(٤)" on p.170, "(١)"-"(٥)" on p.171, and "(١)"-"(٢)" on
// p.172 are book furniture, excluded from `ar` and not tokenized; each
// footnoted lemma (استحم، مغتسل on p.169؛ كل [the "grow weary" sense]،
// خار، تلابيب، غطس on p.170؛ عقل، عود، نكس، قاء، أفاق on p.171؛ ذعر،
// عتب on p.172) carries the footnote's defining text in its `book_note`.
//
// Two same-spelling homograph flags for future reconciliation, BOTH
// colliding with a sense already used earlier in THIS SAME chapter (not
// just an earlier chapter):
//   - "كل" (qr2-50-014, "كَلَّتْ") is the SAME spelling already taught
//     as the noun "every, all" (qiraah-v1/ch01, own ch41+) -- here it is
//     the footnoted verb "to grow weary, become exhausted" (still root
//     ك ل ل, a genuine different dictionary headword). The very same
//     chapter also uses the already-known "every" sense later
//     (qr2-50-059, "كُلَّ مَنْ"), so both senses of "كل" appear side by
//     side; each token carries its own pos/gloss override, and the
//     footnote text is attached to the shared lemma key's `book_note`
//     (the "عناء"/"جهر" precedent from ch45/46 -- re-footnoting an
//     already-known spelling is still recorded).
//   - "ملك" (qr2-50-017, "يَمْلِكُ") is the SAME spelling already taught
//     as the noun "king" (own ch47, "the king of" the beasts) -- here it
//     is the plain Form I verb "to possess, have control over" (also
//     root م ل ك). Token-level override; not re-added to `newWords`.
//
// A third, three-way collision (extending an already-flagged one):
// "شعر" (qr2-50-045, "يَشْعُرُ") adds a THIRD sense to a spelling this
// book has now used for "hair" (own ch42) and, already flagged as a
// homograph there, "poems" (own ch44) -- here it is the plain Form I
// verb "to feel, perceive, be aware," the etymological root sense all
// three nominal/verbal uses ultimately share. Same treatment as "نعم"
// in ch48: token-level override, not a new `newWords` entry. The
// related verbal noun "شُعُوْر" ("consciousness, awareness,"
// qr2-50-051) is kept as its own distinct new lemma rather than folded
// into "شعر", per the "اجتنب"/"اجتناب" precedent.
//
// Two lighter reuses (not full homographs -- same core sense, different
// context/valence, so just a per-token gloss adjustment, no header-level
// flag needed beyond this note): "أمكن" (qr2-50-036, "فَلَمْ يُمْكِنْهُ
// مِنْ نَفْسِهِ") reuses the already-known "to be possible/enable" verb
// (own ch41/ch49) in its causative-with-مِن sense, "to give someone
// power/control over"; "دون" (qr2-50-029, "دُوْنَكَ") reuses the
// already-known preposition/particle (v1 ch22) in the classical
// idiomatic exclamation دُوْنَكَ + accusative, "here, go to.../take...".
//
// Vocabulary notes: "زار"، "ضيف"، "كريم"، "بات"، "عند"، "ليلة"، "صباح"،
// "سيد"، "بل"، "شيخ"، "عرف"، "مدة"، "طويل"، "سمع"، "إنسان"، "نسي"،
// "تعلم"، "تعب"، "سريع"، "جرى"، "قوة"، "بدأ"، "دفع"، "شر"، "رجل"، "أخذ"،
// "يد"، "ذكر"، "آخر"، "عهد"، "دنيا"، "سقط"، "خاف"، "غرق" (reused for
// both the already-known noun "drowning" and, here, the plain verb "to
// drown" -- qr2-50-035's "يَغْرَقَانِ" -- one lemma, two parts of
// speech, same treatment "فتح" got in ch49)، "أحد"، "قريب"، "أحسن"،
// "أستاذ"، "تقدم"، "سرعة"، "لما"، "رأى"، "أراد"، "لكن"، "ركب"، "جميع"
// (qr2-50-035's "جَمِيْعاً" -- confirmed via cross-check to be the exact
// same adv "all, altogether" already taught in own ch41, not a new
// headword, so it is correctly reused here and NOT re-listed in
// `newWords`/`lemmas`, unlike an earlier draft note in this comment
// mistakenly suggested)، "نفس"، "اجتهد"، "حتى"، "وصل"،
// "صاد"، "ضرب"، "رأس"، "حين"، "شرب"، "رجع"، "صنع"، "حول"، "حادثة"،
// "أوصى"، "قرية"، "دخل"، "تمتع"، "مرة"، "ماء"، "جعل"، "كأن", and "هو"
// were all already introduced and are reused here rather than
// re-listed as new words.
export const CHAPTER = {
  id: "ch50",
  title: {
    ar: "حَادِثَةٌ",
    en: "An Incident"
  },
  pages: [169, 170, 171, 172],
  newWords: [
    "استحم", "مغتسل", "جمعة", "نهر", "سباحة", "اتفق", "سبح", "فائض", "خاض", "لبث",
    "عضد", "خار", "أعيا", "تيار", "أيقن", "صرخ", "استغاث", "غطس", "طفا",
    "اغتسل", "تشجع", "أمسك", "عاقل", "مجرب", "غريق", "أنجد", "تلابيب",
    "أسفل", "شاطئ", "مغمى", "عقل", "سمك", "أشار", "عود", "صياد",
    "حين", "نكس", "قاء", "أفاق", "شعور", "مركب", "جرار", "حبل", "عدد",
    "فارس", "بطل", "موكب", "ذعر", "عتب", "معذور", "أمام", "أوصل", "إياك"
  ],
  lemmas: {
    "استحم": {
      root: "ح م م", pos: "verb", gloss: "to bathe",
      book_note: "اسْتَحَمَّ يَسْتَحِمُّ: اغْتَسَلَ."
    },
    "مغتسل": {
      root: "غ س ل", pos: "noun", gloss: "a bathing place",
      book_note: "مُغْتَسَل: مكان الغسل."
    },
    "كل": {
      root: "ك ل ل", pos: "verb", gloss: "to grow weary, become exhausted",
      book_note: "كَلَّ يَكَلُّ كُلُوْلاً وَكَلاَلَةً: العَضُدُ: ضَعُفَتْ."
    },
    "خار": {
      root: "خ و ر", pos: "verb", gloss: "to weaken, lose strength",
      book_note: "خَارَ يَخُوْرُ خُؤُوْراً: القوةُ ونحوها: انكَسَرَتْ وَضَعُفَتْ. يُقال خَارَتْ قواه: أي مَرِضَ أو ضَعُفَ جِسْمَانِيّاً."
    },
    "تلابيب": {
      root: "ل ب ب", pos: "noun", gloss: "the collar (of a garment)",
      book_note: "تَلاَبِيْب: طَوْق الثَّوْب. «أَخَذَ بِتَلاَبِيْبِهِ» أي: أَمْسَكَهُ مِنْ أَعْلَىٰ ثَوْبِهِ."
    },
    "غطس": {
      root: "غ ط س", pos: "verb", gloss: "to sink under, duck under water",
      book_note: "غَطَّسَ يُغَطِّسُ غَطْساً في الماء ونحوه: أَيْ انْغَمَسَ فيه."
    },
    "عقل": {
      root: "ع ق ل", pos: "verb", gloss: "to understand, be aware, have one's wits",
      book_note: "عَقَلَ يَعْقِلُ عَقْلاً: أَدْرَكَ، مَيَّزَ."
    },
    "عود": {
      root: "ع و د", pos: "noun", gloss: "a stick, branch",
      book_note: "عُوْد جمع عِيْدَان وأَعْوَاد: كل خشبة، دقيقة كانت أو غليظة، رطبة كانت أو يابسة."
    },
    "نكس": {
      root: "ن ك س", pos: "verb", gloss: "to turn (someone) upside down",
      book_note: "نَكَسَ يَنْكُسُ نَكْساً: الرجلَ: قلبه وجعل أعلاه أسفله أو جعل مقدمه مؤخره."
    },
    "قاء": {
      root: "ق ي أ", pos: "verb", gloss: "to vomit",
      book_note: "قَاءَ يَقِيْءُ قَيْئاً: أَلْقَىٰ القَيْءَ مِن فَمِهِ."
    },
    "أفاق": {
      root: "ف ي ق", pos: "verb", gloss: "to regain consciousness, come to",
      book_note: "أَفَاقَ يُفِيْقُ إِفَاقَةً: الرجلُ: عَادَ إِلَىٰ طَبِيعَتِهِ، اسْتَيْقَظَ."
    },
    "ذعر": {
      root: "ذ ع ر", pos: "verb", gloss: "to be terrified",
      book_note: "ذُعِرَ يُذْعَرُ مَذْعُوْرٌ: فَزِعَ."
    },
    "عتب": {
      root: "ع ت ب", pos: "verb", gloss: "to blame, hold something against (someone)",
      book_note: "عَتَبَ يَعْتِبُ عَتْباً عِتَاباً: الرَّجُلُ على فُلانٍ: لاَمَهُ برفقٍ على قيامه بعمل ما، أو عدم قيامه به."
    },
    "جمعة": { root: "ج م ع", pos: "noun", gloss: "Friday" },
    "نهر": { root: "ن ه ر", pos: "noun", gloss: "a river" },
    "سباحة": { root: "س ب ح", pos: "noun", gloss: "swimming" },
    "اتفق": { root: "و ف ق", pos: "verb", gloss: "to happen, occur (that)" },
    "سبح": { root: "س ب ح", pos: "verb", gloss: "to swim" },
    "فائض": { root: "ف ي ض", pos: "adj", gloss: "overflowing, in flood" },
    "خاض": { root: "خ و ض", pos: "verb", gloss: "to wade into" },
    "لبث": { root: "ل ب ث", pos: "verb", gloss: "to tarry, linger" },
    "عضد": { root: "ع ض د", pos: "noun", gloss: "the upper arm" },
    "أعيا": { root: "ع ي ي", pos: "verb", gloss: "to become exhausted" },
    "تيار": { root: "ت ي ر", pos: "noun", gloss: "a current (of water)" },
    "أيقن": { root: "ي ق ن", pos: "verb", gloss: "to become certain" },
    "صرخ": { root: "ص ر خ", pos: "verb", gloss: "to scream, shout" },
    "استغاث": { root: "غ و ث", pos: "verb", gloss: "to cry for help" },
    "طفا": { root: "ط ف و", pos: "verb", gloss: "to float" },
    "اغتسل": { root: "غ س ل", pos: "verb", gloss: "to wash oneself" },
    "تشجع": { root: "ش ج ع", pos: "verb", gloss: "to take courage" },
    "أمسك": { root: "م س ك", pos: "verb", gloss: "to grasp, hold onto" },
    "عاقل": { root: "ع ق ل", pos: "adj", gloss: "sensible, wise" },
    "مجرب": { root: "ج ر ب", pos: "adj", gloss: "experienced" },
    "غريق": { root: "غ ر ق", pos: "noun", gloss: "a drowning person" },
    "أنجد": { root: "ن ج د", pos: "verb", gloss: "to rescue, come to the aid of" },
    "أسفل": { root: "س ف ل", pos: "noun", gloss: "below, underneath" },
    "شاطئ": { root: "ش ط أ", pos: "noun", gloss: "a shore, bank" },
    "مغمى": { root: "غ م ي", pos: "adj", gloss: "fainted, unconscious" },
    "سمك": { root: "س م ك", pos: "noun", gloss: "fish" },
    "أشار": { root: "ش و ر", pos: "verb", gloss: "to signal, point" },
    "صياد": { root: "ص ي د", pos: "noun", gloss: "a fisherman, hunter" },
    "حين": { root: "ح ي ن", pos: "noun", gloss: "a while, a time" },
    "شعور": { root: "ش ع ر", pos: "noun", gloss: "consciousness, awareness" },
    "مركب": { root: "ر ك ب", pos: "noun", gloss: "a vessel, raft" },
    "جرار": { root: "ج ر ر", pos: "noun", gloss: "jars" },
    "حبل": { root: "ح ب ل", pos: "noun", gloss: "a rope" },
    "عدد": { root: "ع د د", pos: "noun", gloss: "a number" },
    "فارس": { root: "ف ر س", pos: "noun", gloss: "a champion, horseman" },
    "بطل": { root: "ب ط ل", pos: "noun", gloss: "a hero, champion" },
    "موكب": { root: "و ك ب", pos: "noun", gloss: "a procession" },
    "معذور": { root: "ع ذ ر", pos: "adj", gloss: "excused" },
    "أمام": { root: "", pos: "noun", gloss: "in front, forward" },
    "أوصل": { root: "و ص ل", pos: "verb", gloss: "to bring, deliver (someone) to" },
    "إياك": { root: "", pos: "part", gloss: "beware of..." }
  },
  paragraphs: [
    {
      en: "A generous guest once visited us and spent the night, and in the morning I asked him: 'Will you bathe, sir?'",
      sentences: [
        {
          id: "qr2-50-001",
          ar: "زَارَنَا مَرَّةً ضَيْفٌ كَرِيْمٌ ،",
          en: "A generous guest once visited us,",
          tokens: [
            { surface: "زَارَنَا", lemma: "زار", pos: "verb", features: "perf.3ms+1cpl", root: "ز و ر", gloss: "visited us" },
            { surface: "مَرَّةً", lemma: "مرة", pos: "noun", features: "indef.acc", root: "م ر ر", gloss: "once" },
            { surface: "ضَيْفٌ", lemma: "ضيف", pos: "noun", features: "indef.nom", root: "ض ي ف", gloss: "a guest" },
            { surface: "كَرِيْمٌ", lemma: "كريم", pos: "adj", features: "indef.nom", root: "ك ر م", gloss: "generous" }
          ]
        },
        {
          id: "qr2-50-002",
          ar: "وَبَاتَ عِنْدَنَا لَيْلَةً ،",
          en: "and spent the night with us,",
          tokens: [
            { surface: "وَبَاتَ", lemma: "بات", pos: "verb", features: "conj+perf.3ms", root: "ب ي ت", gloss: "and spent the night" },
            { surface: "عِنْدَنَا", lemma: "عند", pos: "prep", features: "prep+1cpl", root: "", gloss: "with us" },
            { surface: "لَيْلَةً", lemma: "ليلة", pos: "noun", features: "indef.acc", root: "ل ي ل", gloss: "a night" }
          ]
        },
        {
          id: "qr2-50-003",
          ar: "وَفِي الصَّبَاحِ قُلْتُ لَهُ: أَتَسْتَحِمُّ يَاسَيِّدِيْ؟",
          en: "and in the morning I asked him: 'Will you bathe, sir?'",
          tokens: [
            { surface: "وَفِي", lemma: "في", pos: "prep", features: "conj+prep", root: "", gloss: "and in" },
            { surface: "الصَّبَاحِ", lemma: "صباح", pos: "noun", features: "def.gen", root: "ص ب ح", gloss: "the morning" },
            { surface: "قُلْتُ", lemma: "قال", pos: "verb", features: "perf.1cs", root: "ق و ل", gloss: "I said" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "أَتَسْتَحِمُّ", lemma: "استحم", pos: "verb", features: "interr+impf.2ms", root: "ح م م", gloss: "will you bathe" },
            { surface: "يَاسَيِّدِيْ", lemma: "سيد", pos: "noun", features: "voc+gen+1cs", root: "س و د", gloss: "O my sir" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا سَأَلَ الرَّاوِيْ ضَيْفَهُ فِيْ الصَّبَاحِ؟",
          options: ["سَأَلَهُ إِنْ كَانَ يُرِيْدُ أَنْ يَسْتَحِمَّ", "سَأَلَهُ عَنْ رَأْيِهِ فِي الطَّعَامِ", "سَأَلَهُ مَتَىٰ يُرِيْدُ أَنْ يُغَادِرَ"],
          answer: 0,
          qEn: "What did the narrator ask his guest in the morning?",
          optionsEn: ["He asked him whether he wanted to bathe", "He asked him his opinion of the food", "He asked him when he wanted to leave"]
        }
      ]
    },
    {
      lines: true,
      en: "It was a Friday. He said: 'Yes!' I said: 'This is the bathing place.' He said: 'No, I will bathe in the river.'",
      sentences: [
        {
          id: "qr2-50-004",
          ar: "وَكَانَ يَوْمُ جُمُعَةٍ ،",
          en: "It was a Friday,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and it was" },
            { surface: "يَوْمُ", lemma: "يوم", pos: "noun", features: "nom.constr", root: "ي و م", gloss: "the day (of)" },
            { surface: "جُمُعَةٍ", lemma: "جمعة", pos: "noun", features: "indef.gen", root: "ج م ع", gloss: "Friday" }
          ]
        },
        {
          id: "qr2-50-005",
          ar: "قَالَ: نَعَمْ!",
          en: "He said: 'Yes!'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "he said" },
            { surface: "نَعَمْ", lemma: "نعم", pos: "part", features: "part", root: "", gloss: "yes" }
          ]
        },
        {
          id: "qr2-50-006",
          ar: "قُلْتُ: هٰذَا مُغْتَسَلٌ ،",
          en: "I said: 'This is the bathing place,'",
          tokens: [
            { surface: "قُلْتُ", lemma: "قال", pos: "verb", features: "perf.1cs", root: "ق و ل", gloss: "I said" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "مُغْتَسَلٌ", lemma: "مغتسل", pos: "noun", features: "indef.nom", root: "غ س ل", gloss: "a bathing place" }
          ]
        },
        {
          id: "qr2-50-007",
          ar: "قَالَ: بَلْ أَسْتَحِمُّ فِي النَّهْرِ.",
          en: "he said: 'No, I will bathe in the river.'",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "he said" },
            { surface: "بَلْ", lemma: "بل", pos: "part", features: "part", root: "", gloss: "rather" },
            { surface: "أَسْتَحِمُّ", lemma: "استحم", pos: "verb", features: "impf.1cs", root: "ح م م", gloss: "I will bathe" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "النَّهْرِ", lemma: "نهر", pos: "noun", features: "def.gen", root: "ن ه ر", gloss: "the river" }
          ]
        }
      ],
      checks: [
        {
          q: "أَيْنَ فَضَّلَ الضَّيْفُ أَنْ يَسْتَحِمَّ؟",
          options: ["فِي النَّهْرِ لَا فِي الْمُغْتَسَلِ", "فِي الْمُغْتَسَلِ لَا فِي النَّهْرِ", "لَمْ يُرِدِ الاسْتِحْمَامَ أَصْلاً"],
          answer: 0,
          qEn: "Where did the guest prefer to bathe?",
          optionsEn: ["In the river, not the bathing place", "In the bathing place, not the river", "He didn't want to bathe at all"]
        }
      ]
    },
    {
      en: "The elder knew how to swim, but it had not happened for him to swim in a long time, and I had heard that a person does not forget swimming once he has learned it, except that he tires quickly.",
      sentences: [
        {
          id: "qr2-50-008",
          ar: "وَكَانَ الشَّيْخُ يَعْرِفُ السِّبَاحَةَ إِلاَّ أَنَّهُ لَمْ يَتَّفِقْ لَهُ أَنْ يَسْبَحَ مِنْ مُدَّةٍ طَوِيْلَةٍ ،",
          en: "The elder knew how to swim, but it had not happened for him to swim in a long time,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" },
            { surface: "يَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.3ms", root: "ع ر ف", gloss: "knew" },
            { surface: "السِّبَاحَةَ", lemma: "سباحة", pos: "noun", features: "def.acc", root: "س ب ح", gloss: "swimming" },
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except that" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "يَتَّفِقْ", lemma: "اتفق", pos: "verb", features: "juss.3ms", root: "و ف ق", gloss: "happened" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يَسْبَحَ", lemma: "سبح", pos: "verb", features: "subj.3ms", root: "س ب ح", gloss: "swim" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "for" },
            { surface: "مُدَّةٍ", lemma: "مدة", pos: "noun", features: "indef.gen", root: "م د د", gloss: "a period" },
            { surface: "طَوِيْلَةٍ", lemma: "طويل", pos: "adj", features: "indef.gen.f", root: "ط و ل", gloss: "long" }
          ]
        },
        {
          id: "qr2-50-009",
          ar: "وَسَمِعْتُ أَنَّ الإِنْسَانَ لاَ يَنْسَىٰ السِّبَاحَةَ إِذَا تَعَلَّمَهَا ،",
          en: "and I had heard that a person does not forget swimming once he has learned it,",
          tokens: [
            { surface: "وَسَمِعْتُ", lemma: "سمع", pos: "verb", features: "conj+perf.1cs", root: "س م ع", gloss: "and I heard" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "الإِنْسَانَ", lemma: "إنسان", pos: "noun", features: "def.acc", root: "أ ن س", gloss: "the human being" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "does not" },
            { surface: "يَنْسَىٰ", lemma: "نسي", pos: "verb", features: "impf.3ms", root: "ن س ي", gloss: "forget" },
            { surface: "السِّبَاحَةَ", lemma: "سباحة", pos: "noun", features: "def.acc", root: "س ب ح", gloss: "swimming" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "once" },
            { surface: "تَعَلَّمَهَا", lemma: "تعلم", pos: "verb", features: "perf.3ms+3fs", root: "ع ل م", gloss: "he learns it" }
          ]
        },
        {
          id: "qr2-50-010",
          ar: "إِلاَّ أَنَّهُ يَتْعَبُ سَرِيْعاً.",
          en: "except that he tires quickly.",
          tokens: [
            { surface: "إِلاَّ", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except that" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "he" },
            { surface: "يَتْعَبُ", lemma: "تعب", pos: "verb", features: "impf.3ms", root: "ت ع ب", gloss: "grows tired" },
            { surface: "سَرِيْعاً", lemma: "سريع", pos: "adv", features: "indef.acc", root: "س ر ع", gloss: "quickly" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا كَانَ مِنَ الْخَطَرِ أَنْ يَسْبَحَ الشَّيْخُ؟",
          options: ["لِأَنَّهُ لَمْ يَسْبَحْ مُنْذُ مُدَّةٍ طَوِيْلَةٍ فَيَتْعَبُ سَرِيْعاً", "لِأَنَّهُ لَمْ يَتَعَلَّمِ السِّبَاحَةَ قَطُّ", "لِأَنَّ النَّهْرَ كَانَ قَرِيْباً مِنَ الْبَيْتِ"],
          answer: 0,
          qEn: "Why was it dangerous for the elder to swim?",
          optionsEn: ["Because he hadn't swum in a long time, so he would tire quickly", "Because he had never learned to swim at all", "Because the river was close to the house"]
        }
      ]
    },
    {
      en: "The river was in flood, flowing with force. The elder waded in and began to swim, but before long his arm grew weary and his strength failed and he became exhausted; the water pushed him forcefully, and he found himself swept along in its current, with no control over his situation, and he became certain of harm.",
      sentences: [
        {
          id: "qr2-50-011",
          ar: "وَكَانَ النَّهْرُ فَائِضاً وَكَانَ يَجْرِيْ بِقُوَّةٍ ،",
          en: "The river was in flood, flowing with force,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "النَّهْرُ", lemma: "نهر", pos: "noun", features: "def.nom", root: "ن ه ر", gloss: "the river" },
            { surface: "فَائِضاً", lemma: "فائض", pos: "adj", features: "indef.acc", root: "ف ي ض", gloss: "overflowing, in flood" },
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "يَجْرِيْ", lemma: "جرى", pos: "verb", features: "impf.3ms", root: "ج ر ي", gloss: "flowing" },
            { surface: "بِقُوَّةٍ", lemma: "قوة", pos: "noun", features: "prep+indef.gen", root: "ق و ي", gloss: "with force" }
          ]
        },
        {
          id: "qr2-50-012",
          ar: "فَخَاضَ الشَّيْخُ النَّهْرَ ،",
          en: "The elder waded into the river,",
          tokens: [
            { surface: "فَخَاضَ", lemma: "خاض", pos: "verb", features: "conj+perf.3ms", root: "خ و ض", gloss: "waded into" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" },
            { surface: "النَّهْرَ", lemma: "نهر", pos: "noun", features: "def.acc", root: "ن ه ر", gloss: "the river" }
          ]
        },
        {
          id: "qr2-50-013",
          ar: "وَبَدَأَ يَسْبَحُ ،",
          en: "and began to swim,",
          tokens: [
            { surface: "وَبَدَأَ", lemma: "بدأ", pos: "verb", features: "conj+perf.3ms", root: "ب د أ", gloss: "and began" },
            { surface: "يَسْبَحُ", lemma: "سبح", pos: "verb", features: "impf.3ms", root: "س ب ح", gloss: "to swim" }
          ]
        },
        {
          id: "qr2-50-014",
          ar: "فَمَا لَبِثَ أَنْ كَلَّتْ عَضُدُهُ ،",
          en: "but before long his arm grew weary,",
          tokens: [
            { surface: "فَمَا", lemma: "ما", pos: "part", features: "conj+neg", root: "", gloss: "and no sooner" },
            { surface: "لَبِثَ", lemma: "لبث", pos: "verb", features: "perf.3ms", root: "ل ب ث", gloss: "did he tarry" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "than" },
            { surface: "كَلَّتْ", lemma: "كل", pos: "verb", features: "perf.3fs", root: "ك ل ل", gloss: "grew weary" },
            { surface: "عَضُدُهُ", lemma: "عضد", pos: "noun", features: "nom+3ms", root: "ع ض د", gloss: "his upper arm" }
          ]
        },
        {
          id: "qr2-50-015",
          ar: "وَخَارَتْ قُوَاهُ وَأَعْيَا ،",
          en: "and his strength failed and he became exhausted,",
          tokens: [
            { surface: "وَخَارَتْ", lemma: "خار", pos: "verb", features: "conj+perf.3fs", root: "خ و ر", gloss: "and weakened" },
            { surface: "قُوَاهُ", lemma: "قوة", pos: "noun", features: "pl.nom+3ms", root: "ق و ي", gloss: "his strength" },
            { surface: "وَأَعْيَا", lemma: "أعيا", pos: "verb", features: "conj+perf.3ms", root: "ع ي ي", gloss: "and he became exhausted" }
          ]
        },
        {
          id: "qr2-50-016",
          ar: "وَدَفَعَهُ الْمَاءُ بِقُوَّةٍ ،",
          en: "the water pushed him forcefully,",
          tokens: [
            { surface: "وَدَفَعَهُ", lemma: "دفع", pos: "verb", features: "conj+perf.3ms+3ms", root: "د ف ع", gloss: "and pushed him" },
            { surface: "الْمَاءُ", lemma: "ماء", pos: "noun", features: "def.nom", root: "م و ه", gloss: "the water" },
            { surface: "بِقُوَّةٍ", lemma: "قوة", pos: "noun", features: "prep+indef.gen", root: "ق و ي", gloss: "with force" }
          ]
        },
        {
          id: "qr2-50-017",
          ar: "فَجَعَلَ يَجْرِيْ فِيْ تَيَّارِهِ لاَ يَمْلِكُ مِنْ أَمْرِهِ شَيْئاً ،",
          en: "and he found himself swept along in its current, with no control over his situation,",
          tokens: [
            { surface: "فَجَعَلَ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms", root: "ج ع ل", gloss: "and he began" },
            { surface: "يَجْرِيْ", lemma: "جرى", pos: "verb", features: "impf.3ms", root: "ج ر ي", gloss: "to be swept along" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "تَيَّارِهِ", lemma: "تيار", pos: "noun", features: "gen+3ms", root: "ت ي ر", gloss: "its current" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَمْلِكُ", lemma: "ملك", pos: "verb", features: "impf.3ms", root: "م ل ك", gloss: "possessing, controlling" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "أَمْرِهِ", lemma: "أمر", pos: "noun", features: "gen+3ms", root: "أ م ر", gloss: "his situation" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "anything" }
          ]
        },
        {
          id: "qr2-50-018",
          ar: "وَأَيْقَنَ بِالشَّرِّ.",
          en: "and he became certain of harm.",
          tokens: [
            { surface: "وَأَيْقَنَ", lemma: "أيقن", pos: "verb", features: "conj+perf.3ms", root: "ي ق ن", gloss: "and he became certain" },
            { surface: "بِالشَّرِّ", lemma: "شر", pos: "noun", features: "prep+def.gen", root: "ش ر ر", gloss: "of harm" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا حَدَثَ لِلشَّيْخِ بَعْدَ أَنْ بَدَأَ يَسْبَحُ فِي النَّهْرِ الْفَائِضِ؟",
          options: ["كَلَّتْ عَضُدُهُ وَخَارَتْ قُوَاهُ فَجَرَفَهُ التَّيَّارُ", "سَبَحَ بِسُهُوْلَةٍ إِلَىٰ الضَّفَّةِ الأُخْرَىٰ", "عَادَ فَوْراً إِلَىٰ الشَّاطِئِ دُوْنَ مُشْكِلَةٍ"],
          answer: 0,
          qEn: "What happened to the elder after he began swimming in the flooding river?",
          optionsEn: ["His arm grew weary and his strength failed, so the current swept him away", "He swam easily to the other bank", "He returned to the shore immediately without any problem"]
        }
      ]
    },
    {
      en: "He began to scream and cry for help, saying: 'O man! Take my hand!' and began to invoke Allah's name repeatedly, as though at the very end of his time in this world, sinking under and floating up.",
      sentences: [
        {
          id: "qr2-50-019",
          ar: "فَجَعَلَ يَصْرُخُ وَيَسْتَغِيْثُ ،",
          en: "He began to scream and cry for help,",
          tokens: [
            { surface: "فَجَعَلَ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms", root: "ج ع ل", gloss: "and he began" },
            { surface: "يَصْرُخُ", lemma: "صرخ", pos: "verb", features: "impf.3ms", root: "ص ر خ", gloss: "to scream" },
            { surface: "وَيَسْتَغِيْثُ", lemma: "استغاث", pos: "verb", features: "conj+impf.3ms", root: "غ و ث", gloss: "and cry for help" }
          ]
        },
        {
          id: "qr2-50-020",
          ar: "وَيَقُوْلُ: يَا رَجُلاً!",
          en: "saying: 'O man!",
          tokens: [
            { surface: "وَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", root: "ق و ل", gloss: "and saying" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "رَجُلاً", lemma: "رجل", pos: "noun", features: "indef.acc", root: "ر ج ل", gloss: "man" }
          ]
        },
        {
          id: "qr2-50-021",
          ar: "خُذْ بِيَدَيْ ،",
          en: "Take my hand!'",
          tokens: [
            { surface: "خُذْ", lemma: "أخذ", pos: "verb", features: "imp.2ms", root: "أ خ ذ", gloss: "take" },
            { surface: "بِيَدَيْ", lemma: "يد", pos: "noun", features: "prep+du+1cs", root: "ي د ي", gloss: "my hand" }
          ]
        },
        {
          id: "qr2-50-022",
          ar: "وَجَعَلَ يَذْكُرُ ،",
          en: "and began to invoke [Allah's name] repeatedly,",
          tokens: [
            { surface: "وَجَعَلَ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms", root: "ج ع ل", gloss: "and he began" },
            { surface: "يَذْكُرُ", lemma: "ذكر", pos: "verb", features: "impf.3ms", root: "ذ ك ر", gloss: "to say dhikr" }
          ]
        },
        {
          id: "qr2-50-023",
          ar: "وَيَقُوْلُ: اللهُ!",
          en: "saying: 'Allah!",
          tokens: [
            { surface: "وَيَقُوْلُ", lemma: "قال", pos: "verb", features: "conj+impf.3ms", root: "ق و ل", gloss: "and saying" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-50-024",
          ar: "اللهُ!",
          en: "Allah!'",
          tokens: [
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "nom", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-50-025",
          ar: "كَأَنَّهُ فِيْ آخِرِ عَهْدِهِ بِالدُّنْيَا ،",
          en: "as though at the very end of his time in this world,",
          tokens: [
            { surface: "كَأَنَّهُ", lemma: "كأن", pos: "part", features: "part+3ms", root: "", gloss: "as though he were" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "آخِرِ", lemma: "آخر", pos: "noun", features: "gen.constr", root: "أ خ ر", gloss: "the last (of)" },
            { surface: "عَهْدِهِ", lemma: "عهد", pos: "noun", features: "gen+3ms", root: "ع ه د", gloss: "his time" },
            { surface: "بِالدُّنْيَا", lemma: "دنيا", pos: "noun", features: "prep+def.gen", root: "د ن و", gloss: "with this world" }
          ]
        },
        {
          id: "qr2-50-026",
          ar: "وَجَعَلَ يَغْطِسُ وَيَطْفُوْ.",
          en: "sinking under and floating up.",
          tokens: [
            { surface: "وَجَعَلَ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms", root: "ج ع ل", gloss: "and he began" },
            { surface: "يَغْطِسُ", lemma: "غطس", pos: "verb", features: "impf.3ms", root: "غ ط س", gloss: "to sink under" },
            { surface: "وَيَطْفُوْ", lemma: "طفا", pos: "verb", features: "conj+impf.3ms", root: "ط ف و", gloss: "and float up" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ الشَّيْخُ يَفْعَلُ وَهُوَ يَغْرَقُ؟",
          options: ["كَانَ يَصْرُخُ وَيَسْتَغِيْثُ وَيَذْكُرُ اللهَ", "كَانَ صَامِتاً لَا يَتَحَرَّكُ", "كَانَ يَضْحَكُ ظَنّاً مِنْهُ أَنَّهَا لُعْبَةٌ"],
          answer: 0,
          qEn: "What was the elder doing as he was drowning?",
          optionsEn: ["He was screaming, crying for help, and invoking Allah", "He was silent and motionless", "He was laughing, thinking it was a game"]
        }
      ]
    },
    {
      en: "We were dumbfounded, and feared he would drown. One of our relatives, among those skilled at swimming, was washing in the river, so we said: 'Go to him, teacher!' He advanced towards him quickly, and when the elder saw a rescuer he took a little courage and wanted to grab hold of him.",
      sentences: [
        {
          id: "qr2-50-027",
          ar: "فَسُقِطَ فِيْ أَيْدِيْنَا ،",
          en: "We were dumbfounded,",
          tokens: [
            { surface: "فَسُقِطَ", lemma: "سقط", pos: "verb", features: "conj+perf.pass.3ms", root: "س ق ط", gloss: "we were dumbfounded" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "أَيْدِيْنَا", lemma: "يد", pos: "noun", features: "pl.gen+1cpl", root: "ي د ي", gloss: "our hands" }
          ]
        },
        {
          id: "qr2-50-028",
          ar: "وَخِفْنَا عَلَيْهِ الْغَرَقَ ،",
          en: "and feared he would drown,",
          tokens: [
            { surface: "وَخِفْنَا", lemma: "خاف", pos: "verb", features: "conj+perf.1cpl", root: "خ و ف", gloss: "and we feared" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "الْغَرَقَ", lemma: "غرق", pos: "noun", features: "def.acc", root: "غ ر ق", gloss: "drowning" }
          ]
        },
        {
          id: "qr2-50-029",
          ar: "وَكَانَ أَحَدُ أَقَارِبِنَا مِمَّنْ يُحْسِنُوْنَ السِّبَاحَةَ يَغْتَسِلُ فِي النَّهْرِ فَقُلْنَا: دُوْنَكَ الأُسْتَاذَ ،",
          en: "One of our relatives, among those skilled at swimming, was washing in the river, so we said: 'Go to him, teacher!'",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "أَحَدُ", lemma: "أحد", pos: "noun", features: "nom.constr", root: "أ ح د", gloss: "one (of)" },
            { surface: "أَقَارِبِنَا", lemma: "قريب", pos: "noun", features: "pl.gen+1cpl", root: "ق ر ب", gloss: "our relatives" },
            { surface: "مِمَّنْ", lemma: "من", pos: "rel", features: "prep+part", root: "", gloss: "among those who" },
            { surface: "يُحْسِنُوْنَ", lemma: "أحسن", pos: "verb", features: "impf.3mpl", root: "ح س ن", gloss: "are good at" },
            { surface: "السِّبَاحَةَ", lemma: "سباحة", pos: "noun", features: "def.acc", root: "س ب ح", gloss: "swimming" },
            { surface: "يَغْتَسِلُ", lemma: "اغتسل", pos: "verb", features: "impf.3ms", root: "غ س ل", gloss: "washing himself" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "النَّهْرِ", lemma: "نهر", pos: "noun", features: "def.gen", root: "ن ه ر", gloss: "the river" },
            { surface: "فَقُلْنَا", lemma: "قال", pos: "verb", features: "conj+perf.1cpl", root: "ق و ل", gloss: "so we said" },
            { surface: "دُوْنَكَ", lemma: "دون", pos: "part", features: "part+2ms", root: "د و ن", gloss: "here, go to" },
            { surface: "الأُسْتَاذَ", lemma: "أستاذ", pos: "noun", features: "def.acc", root: "", gloss: "the teacher" }
          ]
        },
        {
          id: "qr2-50-030",
          ar: "فَتَقَدَّمَ إِلَيْهِ بِسُرْعَةٍ ،",
          en: "He advanced towards him quickly,",
          tokens: [
            { surface: "فَتَقَدَّمَ", lemma: "تقدم", pos: "verb", features: "conj+perf.3ms", root: "ق د م", gloss: "so he stepped forward" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "towards him" },
            { surface: "بِسُرْعَةٍ", lemma: "سرعة", pos: "noun", features: "prep+indef.gen", root: "س ر ع", gloss: "quickly" }
          ]
        },
        {
          id: "qr2-50-031",
          ar: "وَلَمَّا رَأَىٰ الشَّيْخُ مُنْجِداً تَشَجَّعَ قَلِيْلاً ،",
          en: "and when the elder saw a rescuer he took a little courage,",
          tokens: [
            { surface: "وَلَمَّا", lemma: "لما", pos: "part", features: "conj+part", root: "", gloss: "and when" },
            { surface: "رَأَىٰ", lemma: "رأى", pos: "verb", features: "perf.3ms", root: "ر أ ي", gloss: "saw" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" },
            { surface: "مُنْجِداً", lemma: "أنجد", pos: "noun", features: "indef.acc", root: "ن ج د", gloss: "a rescuer" },
            { surface: "تَشَجَّعَ", lemma: "تشجع", pos: "verb", features: "perf.3ms", root: "ش ج ع", gloss: "took courage" },
            { surface: "قَلِيْلاً", lemma: "قليل", pos: "adv", features: "indef.acc", root: "ق ل ل", gloss: "a little" }
          ]
        },
        {
          id: "qr2-50-032",
          ar: "وَأَرَادَ أَنْ يُمْسِكَهُ.",
          en: "and wanted to grab hold of him.",
          tokens: [
            { surface: "وَأَرَادَ", lemma: "أراد", pos: "verb", features: "conj+perf.3ms", root: "ر و د", gloss: "and he wanted" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يُمْسِكَهُ", lemma: "أمسك", pos: "verb", features: "subj.3ms+3ms", root: "م س ك", gloss: "grab hold of him" }
          ]
        }
      ],
      checks: [
        {
          q: "مَنِ الَّذِيْ تَقَدَّمَ لِإِنْقَاذِ الشَّيْخِ؟",
          options: ["أَحَدُ الأَقَارِبِ مِمَّنْ يُحْسِنُوْنَ السِّبَاحَةَ", "طَبِيْبُ الْقَرْيَةِ", "وَالِدُ الرَّاوِيْ"],
          answer: 0,
          qEn: "Who came forward to save the elder?",
          optionsEn: ["One of the relatives who was skilled at swimming", "The village doctor", "The narrator's father"]
        }
      ]
    },
    {
      en: "But the man was sensible and experienced -- he knew that a drowning person climbs onto whoever rescues him and grabs his collar, and they both drown together -- so he did not let him gain control over him, but rather pushed him under and drove him from below toward the shore; the elder kept struggling to grab hold of him, while the man kept pushing him forward until he brought him to the shore.",
      sentences: [
        {
          id: "qr2-50-033",
          ar: "وَلٰكِنْ كَانَ الرَّجُلُ عَاقِلاً مُجَرَّباً ،",
          en: "But the man was sensible and experienced,",
          tokens: [
            { surface: "وَلٰكِنْ", lemma: "لكن", pos: "conj", features: "conj", root: "", gloss: "but" },
            { surface: "كَانَ", lemma: "كان", pos: "verb", features: "perf.3ms", root: "ك و ن", gloss: "was" },
            { surface: "الرَّجُلُ", lemma: "رجل", pos: "noun", features: "def.nom", root: "ر ج ل", gloss: "the man" },
            { surface: "عَاقِلاً", lemma: "عاقل", pos: "adj", features: "indef.acc", root: "ع ق ل", gloss: "sensible, wise" },
            { surface: "مُجَرَّباً", lemma: "مجرب", pos: "adj", features: "indef.acc", root: "ج ر ب", gloss: "experienced" }
          ]
        },
        {
          id: "qr2-50-034",
          ar: "وَكَانَ يَعْرِفُ أَنَّ الْغَرِيْقَ يَرْكَبُ مَنْ يُنْجِدُ وَيَأْخُذُ بِتَلاَبِيْبِهِ ،",
          en: "he knew that a drowning person climbs onto whoever rescues him and grabs his collar,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and he knew" },
            { surface: "يَعْرِفُ", lemma: "عرف", pos: "verb", features: "impf.3ms", root: "ع ر ف", gloss: "knew" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "الْغَرِيْقَ", lemma: "غريق", pos: "noun", features: "def.acc", root: "غ ر ق", gloss: "the drowning person" },
            { surface: "يَرْكَبُ", lemma: "ركب", pos: "verb", features: "impf.3ms", root: "ر ك ب", gloss: "climbs onto" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "part", root: "", gloss: "whoever" },
            { surface: "يُنْجِدُ", lemma: "أنجد", pos: "verb", features: "impf.3ms", root: "ن ج د", gloss: "rescues" },
            { surface: "وَيَأْخُذُ", lemma: "أخذ", pos: "verb", features: "conj+impf.3ms", root: "أ خ ذ", gloss: "and grabs" },
            { surface: "بِتَلاَبِيْبِهِ", lemma: "تلابيب", pos: "noun", features: "prep+gen+3ms", root: "ل ب ب", gloss: "his collar" }
          ]
        },
        {
          id: "qr2-50-035",
          ar: "وَيَغْرَقَانِ جَمِيْعاً ،",
          en: "and they both drown together,",
          tokens: [
            { surface: "وَيَغْرَقَانِ", lemma: "غرق", pos: "verb", features: "conj+impf.3md", root: "غ ر ق", gloss: "and they both drown" },
            { surface: "جَمِيْعاً", lemma: "جميع", pos: "adv", features: "indef.acc", root: "ج م ع", gloss: "together" }
          ]
        },
        {
          id: "qr2-50-036",
          ar: "فَلَمْ يُمْكِنْهُ مِنْ نَفْسِهِ ،",
          en: "so he did not let him gain control over him,",
          tokens: [
            { surface: "فَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "so he did not" },
            { surface: "يُمْكِنْهُ", lemma: "أمكن", pos: "verb", features: "juss.3ms+3ms", root: "م ك ن", gloss: "let him have power" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "over" },
            { surface: "نَفْسِهِ", lemma: "نفس", pos: "noun", features: "gen+3ms", root: "ن ف س", gloss: "himself" }
          ]
        },
        {
          id: "qr2-50-037",
          ar: "بَلْ غَطَّسَهُ وَدَفَعَهُ مِنْ أَسْفَلَ إِلَىٰ الشَّاطِئِ ،",
          en: "but rather pushed him under and drove him from below toward the shore,",
          tokens: [
            { surface: "بَلْ", lemma: "بل", pos: "part", features: "part", root: "", gloss: "rather" },
            { surface: "غَطَّسَهُ", lemma: "غطس", pos: "verb", features: "perf.3ms+3ms", root: "غ ط س", gloss: "he ducked him under" },
            { surface: "وَدَفَعَهُ", lemma: "دفع", pos: "verb", features: "conj+perf.3ms+3ms", root: "د ف ع", gloss: "and pushed him" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "أَسْفَلَ", lemma: "أسفل", pos: "noun", features: "gen", root: "س ف ل", gloss: "below" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "towards" },
            { surface: "الشَّاطِئِ", lemma: "شاطئ", pos: "noun", features: "def.gen", root: "ش ط أ", gloss: "the shore" }
          ]
        },
        {
          id: "qr2-50-038",
          ar: "وَلَمْ يَزَلِ الشَّيْخُ يَجْتَهِدُ أَنْ يُمْسِكَهُ ،",
          en: "the elder kept struggling to grab hold of him,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and did not" },
            { surface: "يَزَلِ", lemma: "زال", pos: "verb", features: "juss.3ms", root: "ز ي ل", gloss: "cease" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" },
            { surface: "يَجْتَهِدُ", lemma: "اجتهد", pos: "verb", features: "impf.3ms", root: "ج ه د", gloss: "striving" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "يُمْسِكَهُ", lemma: "أمسك", pos: "verb", features: "subj.3ms+3ms", root: "م س ك", gloss: "grab hold of him" }
          ]
        },
        {
          id: "qr2-50-039",
          ar: "وَالرَّجُلُ يَدْفَعُهُ إِلَىٰ الأَمَامِ حَتَّىٰ أَوْصَلَهُ إِلَىٰ الشَّاطِئِ.",
          en: "while the man kept pushing him forward until he brought him to the shore.",
          tokens: [
            { surface: "وَالرَّجُلُ", lemma: "رجل", pos: "noun", features: "conj+def.nom", root: "ر ج ل", gloss: "while the man" },
            { surface: "يَدْفَعُهُ", lemma: "دفع", pos: "verb", features: "impf.3ms+3ms", root: "د ف ع", gloss: "kept pushing him" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "towards" },
            { surface: "الأَمَامِ", lemma: "أمام", pos: "noun", features: "def.gen", root: "", gloss: "the front, forward" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "until" },
            { surface: "أَوْصَلَهُ", lemma: "أوصل", pos: "verb", features: "perf.3ms+3ms", root: "و ص ل", gloss: "he brought him" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الشَّاطِئِ", lemma: "شاطئ", pos: "noun", features: "def.gen", root: "ش ط أ", gloss: "the shore" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا لَمْ يَدَعِ الرَّجُلُ الشَّيْخَ يُمْسِكُ بِهِ مُبَاشَرَةً؟",
          options: ["لِأَنَّ الْغَرِيْقَ يَرْكَبُ مُنْقِذَهُ وَيَأْخُذُ بِتَلاَبِيْبِهِ فَيَغْرَقَانِ مَعاً", "لِأَنَّهُ كَانَ غَاضِباً مِنَ الشَّيْخِ", "لِأَنَّهُ لَمْ يَكُنْ يَعْرِفُ السِّبَاحَةَ جَيِّداً"],
          answer: 0,
          qEn: "Why didn't the man let the elder grab him directly?",
          optionsEn: ["Because a drowning person climbs onto his rescuer and grabs his collar, drowning them both together", "Because he was angry with the elder", "Because he himself wasn't a very good swimmer"]
        }
      ]
    },
    {
      en: "The elder was like one fainted, aware of nothing. There was a man on the shore fishing, so the rescuer signaled to him and said: 'Extend your stick so the elder can grab it!' The fisherman extended his stick, and it began to strike him on the head -- he neither felt it nor grasped it -- and after a while he took hold of the stick and reached the shore.",
      sentences: [
        {
          id: "qr2-50-040",
          ar: "وَكَانَ الشَّيْخُ كَالْمُغْمَىٰ عَلَيْهِ لاَ يَعْقِلُ شَيْئاً ،",
          en: "The elder was like one fainted, aware of nothing,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" },
            { surface: "كَالْمُغْمَىٰ", lemma: "مغمى", pos: "adj", features: "prep+def", root: "غ م ي", gloss: "like one fainted" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "upon him" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَعْقِلُ", lemma: "عقل", pos: "verb", features: "impf.3ms", root: "ع ق ل", gloss: "aware of" },
            { surface: "شَيْئاً", lemma: "شيء", pos: "noun", features: "indef.acc", root: "ش ي أ", gloss: "anything" }
          ]
        },
        {
          id: "qr2-50-041",
          ar: "وَكَانَ عَلَىٰ الشَّاطِئِ رَجُلٌ يَصِيْدُ السَّمَكَ ،",
          en: "There was a man on the shore fishing,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and there was" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "الشَّاطِئِ", lemma: "شاطئ", pos: "noun", features: "def.gen", root: "ش ط أ", gloss: "the shore" },
            { surface: "رَجُلٌ", lemma: "رجل", pos: "noun", features: "indef.nom", root: "ر ج ل", gloss: "a man" },
            { surface: "يَصِيْدُ", lemma: "صاد", pos: "verb", features: "impf.3ms", root: "ص ي د", gloss: "fishing" },
            { surface: "السَّمَكَ", lemma: "سمك", pos: "noun", features: "def.acc", root: "س م ك", gloss: "fish" }
          ]
        },
        {
          id: "qr2-50-042",
          ar: "فَأَشَارَ إِلَيْهِ الرَّجُلُ وَقَالَ: مُدَّ عُوْدَكَ لِيُمْسِكَهُ الشَّيْخُ ،",
          en: "so the rescuer signaled to him and said: 'Extend your stick so the elder can grab it!'",
          tokens: [
            { surface: "فَأَشَارَ", lemma: "أشار", pos: "verb", features: "conj+perf.3ms", root: "ش و ر", gloss: "so signaled" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "الرَّجُلُ", lemma: "رجل", pos: "noun", features: "def.nom", root: "ر ج ل", gloss: "the man" },
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "مُدَّ", lemma: "مد", pos: "verb", features: "imp.2ms", root: "م د د", gloss: "extend" },
            { surface: "عُوْدَكَ", lemma: "عود", pos: "noun", features: "acc+2ms", root: "ع و د", gloss: "your stick" },
            { surface: "لِيُمْسِكَهُ", lemma: "أمسك", pos: "verb", features: "prep+subj.3ms+3ms", root: "م س ك", gloss: "so that he may grab it" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" }
          ]
        },
        {
          id: "qr2-50-043",
          ar: "فَمَدَّ الصَّيَّادُ عُوْدَهُ ،",
          en: "The fisherman extended his stick,",
          tokens: [
            { surface: "فَمَدَّ", lemma: "مد", pos: "verb", features: "conj+perf.3ms", root: "م د د", gloss: "so extended" },
            { surface: "الصَّيَّادُ", lemma: "صياد", pos: "noun", features: "def.nom", root: "ص ي د", gloss: "the fisherman" },
            { surface: "عُوْدَهُ", lemma: "عود", pos: "noun", features: "acc+3ms", root: "ع و د", gloss: "his stick" }
          ]
        },
        {
          id: "qr2-50-044",
          ar: "وَجَعَلَ يَضْرِبُ بِهِ عَلَىٰ رَأْسِهِ ،",
          en: "and it began to strike him on the head,",
          tokens: [
            { surface: "وَجَعَلَ", lemma: "جعل", pos: "verb", features: "conj+perf.3ms", root: "ج ع ل", gloss: "and began" },
            { surface: "يَضْرِبُ", lemma: "ضرب", pos: "verb", features: "impf.3ms", root: "ض ر ب", gloss: "to strike" },
            { surface: "بِهِ", lemma: "ب", pos: "prep", features: "prep+3ms", root: "", gloss: "with it" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "رَأْسِهِ", lemma: "رأس", pos: "noun", features: "gen+3ms", root: "ر أ س", gloss: "his head" }
          ]
        },
        {
          id: "qr2-50-045",
          ar: "وَهُوَ لاَ يَشْعُرُ وَلاَ يُمْسِكُهُ ،",
          en: "he neither felt it nor grasped it,",
          tokens: [
            { surface: "وَهُوَ", lemma: "هو", pos: "noun", features: "conj+3ms", root: "", gloss: "while he" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَشْعُرُ", lemma: "شعر", pos: "verb", features: "impf.3ms", root: "ش ع ر", gloss: "feeling, aware" },
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يُمْسِكُهُ", lemma: "أمسك", pos: "verb", features: "impf.3ms+3ms", root: "م س ك", gloss: "grasping it" }
          ]
        },
        {
          id: "qr2-50-046",
          ar: "وَبَعْدَ حِيْنٍ أَمْسَكَ بِالْعُوْدِ ،",
          en: "and after a while he took hold of the stick,",
          tokens: [
            { surface: "وَبَعْدَ", lemma: "بعد", pos: "prep", features: "conj+prep", root: "ب ع د", gloss: "and after" },
            { surface: "حِيْنٍ", lemma: "حين", pos: "noun", features: "indef.gen", root: "ح ي ن", gloss: "a while" },
            { surface: "أَمْسَكَ", lemma: "أمسك", pos: "verb", features: "perf.3ms", root: "م س ك", gloss: "he grasped" },
            { surface: "بِالْعُوْدِ", lemma: "عود", pos: "noun", features: "prep+def.gen", root: "ع و د", gloss: "the stick" }
          ]
        },
        {
          id: "qr2-50-047",
          ar: "وَوَصَلَ إِلَىٰ الشَّاطِئِ.",
          en: "and reached the shore.",
          tokens: [
            { surface: "وَوَصَلَ", lemma: "وصل", pos: "verb", features: "conj+perf.3ms", root: "و ص ل", gloss: "and reached" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الشَّاطِئِ", lemma: "شاطئ", pos: "noun", features: "def.gen", root: "ش ط أ", gloss: "the shore" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ تَمَكَّنَ الشَّيْخُ أَخِيْراً مِنَ الْوُصُوْلِ إِلَىٰ الشَّاطِئِ؟",
          options: ["بِالتَّشَبُّثِ بِعُوْدِ الصَّيَّادِ بَعْدَ أَنْ مَدَّهُ إِلَيْهِ", "بِأَنَّهُ عَادَ إِلَىٰ السِّبَاحَةِ بِقُوَّةٍ", "بِأَنَّ قَارِباً أَتَىٰ لِإِنْقَاذِهِ"],
          answer: 0,
          qEn: "How did the elder finally manage to reach the shore?",
          optionsEn: ["By holding onto the fisherman's stick after he extended it to him", "By swimming powerfully again", "By a boat coming to rescue him"]
        }
      ]
    },
    {
      en: "The elder had swallowed a great deal of water, so they turned him upside down until he vomited, and he regained consciousness, and his awareness and strength returned to him.",
      sentences: [
        {
          id: "qr2-50-048",
          ar: "وَكَانَ الشَّيْخُ قَدْ شَرِبَ كَثِيْراً مِنَ الْمَاءِ ،",
          en: "The elder had swallowed a great deal of water,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and had" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "شَرِبَ", lemma: "شرب", pos: "verb", features: "perf.3ms", root: "ش ر ب", gloss: "drunk" },
            { surface: "كَثِيْراً", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "much" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْمَاءِ", lemma: "ماء", pos: "noun", features: "def.gen", root: "م و ه", gloss: "the water" }
          ]
        },
        {
          id: "qr2-50-049",
          ar: "فَنَكَّسُوْهُ حَتَّىٰ قَاءَ ،",
          en: "so they turned him upside down until he vomited,",
          tokens: [
            { surface: "فَنَكَّسُوْهُ", lemma: "نكس", pos: "verb", features: "conj+perf.3mpl+3ms", root: "ن ك س", gloss: "so they turned him upside down" },
            { surface: "حَتَّىٰ", lemma: "حتى", pos: "conj", features: "conj", root: "", gloss: "until" },
            { surface: "قَاءَ", lemma: "قاء", pos: "verb", features: "perf.3ms", root: "ق ي أ", gloss: "he vomited" }
          ]
        },
        {
          id: "qr2-50-050",
          ar: "وَأَفَاقَ ،",
          en: "and he regained consciousness,",
          tokens: [
            { surface: "وَأَفَاقَ", lemma: "أفاق", pos: "verb", features: "conj+perf.3ms", root: "ف ي ق", gloss: "and regained consciousness" }
          ]
        },
        {
          id: "qr2-50-051",
          ar: "وَرَجَعَ إِلَيْهِ الشُّعُوْرُ وَالْقُوَّةُ.",
          en: "and his awareness and strength returned to him.",
          tokens: [
            { surface: "وَرَجَعَ", lemma: "رجع", pos: "verb", features: "conj+perf.3ms", root: "ر ج ع", gloss: "and returned" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "الشُّعُوْرُ", lemma: "شعور", pos: "noun", features: "def.nom", root: "ش ع ر", gloss: "consciousness" },
            { surface: "وَالْقُوَّةُ", lemma: "قوة", pos: "noun", features: "conj+def.nom", root: "ق و ي", gloss: "and strength" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ عَادَ الشُّعُوْرُ إِلَىٰ الشَّيْخِ؟",
          options: ["نَكَّسُوْهُ حَتَّىٰ قَاءَ الْمَاءَ الَّذِيْ شَرِبَهُ فَأَفَاقَ", "أَعْطَوْهُ دَوَاءً خَاصّاً", "نَامَ سَاعَةً ثُمَّ اسْتَيْقَظَ مِنْ تِلْقَاءِ نَفْسِهِ"],
          answer: 0,
          qEn: "How did the elder's awareness return?",
          optionsEn: ["They turned him upside down until he vomited the water he had swallowed, and he came to", "They gave him special medicine", "He slept for an hour then woke up on his own"]
        }
      ]
    },
    {
      en: "He was on a different bank of the river, so they made him a raft of jars; the elder boarded it and held onto the rope, surrounded by a number of champion swimmers and masters of the water, and he returned in procession to the shore.",
      sentences: [
        {
          id: "qr2-50-052",
          ar: "وَكَانَ عَلَىٰ شَاطِئٍ آخَرَ مِنَ النَّهْرِ ،",
          en: "He was on a different bank of the river,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and he was" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "on" },
            { surface: "شَاطِئٍ", lemma: "شاطئ", pos: "noun", features: "indef.gen", root: "ش ط أ", gloss: "a shore" },
            { surface: "آخَرَ", lemma: "آخر", pos: "adj", features: "indef.gen", root: "أ خ ر", gloss: "other, different" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "النَّهْرِ", lemma: "نهر", pos: "noun", features: "def.gen", root: "ن ه ر", gloss: "the river" }
          ]
        },
        {
          id: "qr2-50-053",
          ar: "فَصَنَعُوْا لَهُ مَرْكَباً مِنَ الْجِرَارِ ،",
          en: "so they made him a raft of jars,",
          tokens: [
            { surface: "فَصَنَعُوْا", lemma: "صنع", pos: "verb", features: "conj+perf.3mpl", root: "ص ن ع", gloss: "so they made" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "مَرْكَباً", lemma: "مركب", pos: "noun", features: "indef.acc", root: "ر ك ب", gloss: "a raft" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "الْجِرَارِ", lemma: "جرار", pos: "noun", features: "pl.def.gen", root: "ج ر ر", gloss: "the jars" }
          ]
        },
        {
          id: "qr2-50-054",
          ar: "وَرَكِبَهُ الشَّيْخُ ،",
          en: "the elder boarded it,",
          tokens: [
            { surface: "وَرَكِبَهُ", lemma: "ركب", pos: "verb", features: "conj+perf.3ms+3ms", root: "ر ك ب", gloss: "and boarded it" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" }
          ]
        },
        {
          id: "qr2-50-055",
          ar: "وَأَمْسَكَ بِالْحَبْلِ ،",
          en: "and held onto the rope,",
          tokens: [
            { surface: "وَأَمْسَكَ", lemma: "أمسك", pos: "verb", features: "conj+perf.3ms", root: "م س ك", gloss: "and held onto" },
            { surface: "بِالْحَبْلِ", lemma: "حبل", pos: "noun", features: "prep+def.gen", root: "ح ب ل", gloss: "the rope" }
          ]
        },
        {
          id: "qr2-50-056",
          ar: "وَحَوْلَهُ عَدَدٌ مِنْ فُرْسَانِ السِّبَاحَةِ وَأَبْطَالِ الْمَاءِ ،",
          en: "surrounded by a number of champion swimmers and masters of the water,",
          tokens: [
            { surface: "وَحَوْلَهُ", lemma: "حول", pos: "noun", features: "conj+prep+3ms", root: "ح و ل", gloss: "and around him" },
            { surface: "عَدَدٌ", lemma: "عدد", pos: "noun", features: "indef.nom", root: "ع د د", gloss: "a number" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "of" },
            { surface: "فُرْسَانِ", lemma: "فارس", pos: "noun", features: "pl.gen.constr", root: "ف ر س", gloss: "champions (of)" },
            { surface: "السِّبَاحَةِ", lemma: "سباحة", pos: "noun", features: "def.gen", root: "س ب ح", gloss: "swimming" },
            { surface: "وَأَبْطَالِ", lemma: "بطل", pos: "noun", features: "conj+pl.gen.constr", root: "ب ط ل", gloss: "and heroes (of)" },
            { surface: "الْمَاءِ", lemma: "ماء", pos: "noun", features: "def.gen", root: "م و ه", gloss: "the water" }
          ]
        },
        {
          id: "qr2-50-057",
          ar: "وَرَجَعَ فِي الْمَوْكِبِ إِلَىٰ الشَّاطِئِ.",
          en: "and he returned in procession to the shore.",
          tokens: [
            { surface: "وَرَجَعَ", lemma: "رجع", pos: "verb", features: "conj+perf.3ms", root: "ر ج ع", gloss: "and he returned" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْمَوْكِبِ", lemma: "موكب", pos: "noun", features: "def.gen", root: "و ك ب", gloss: "the procession" },
            { surface: "إِلَىٰ", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الشَّاطِئِ", lemma: "شاطئ", pos: "noun", features: "def.gen", root: "ش ط أ", gloss: "the shore" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ عَبَرَ الشَّيْخُ النَّهْرَ لِلْعَوْدَةِ إِلَىٰ الشَّاطِئِ الأَصْلِيِّ؟",
          options: ["عَلَىٰ مَرْكَبٍ صَنَعُوْهُ مِنَ الْجِرَارِ، مُحَاطاً بِفُرْسَانِ السِّبَاحَةِ", "سَبَحَ بِنَفْسِهِ مِنْ غَيْرِ مُسَاعَدَةٍ", "بَقِيَ عَلَىٰ الشَّاطِئِ الآخَرِ وَلَمْ يَعُدْ"],
          answer: 0,
          qEn: "How did the elder cross the river to return to the original shore?",
          optionsEn: ["On a raft they made from jars, surrounded by champion swimmers", "He swam back himself without help", "He stayed on the other shore and never returned"]
        }
      ]
    },
    {
      en: "The teacher was terrified by this incident, so he would advise everyone who visits our village never to enter the river, and he would say: 'If you want to enjoy this world, then beware of the river.'",
      sentences: [
        {
          id: "qr2-50-058",
          ar: "وَقَدْ ذُعِرَ الأُسْتَاذُ بِهٰذِهِ الْحَادِثَةِ ،",
          en: "The teacher was terrified by this incident,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "ذُعِرَ", lemma: "ذعر", pos: "verb", features: "perf.pass.3ms", root: "ذ ع ر", gloss: "was terrified" },
            { surface: "الأُسْتَاذُ", lemma: "أستاذ", pos: "noun", features: "def.nom", root: "", gloss: "the teacher" },
            { surface: "بِهٰذِهِ", lemma: "هذا", pos: "dem", features: "prep+dem.fs", root: "", gloss: "by this" },
            { surface: "الْحَادِثَةِ", lemma: "حادثة", pos: "noun", features: "def.gen", root: "ح د ث", gloss: "incident" }
          ]
        },
        {
          id: "qr2-50-059",
          ar: "فَكَانَ يُوْصِيْ كُلَّ مَنْ يَزُوْرُ قَرْيَتَنَا أَلاَّ يَدْخُلَ النَّهْرَ ،",
          en: "so he would advise everyone who visits our village never to enter the river,",
          tokens: [
            { surface: "فَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "so he would" },
            { surface: "يُوْصِيْ", lemma: "أوصى", pos: "verb", features: "impf.3ms", root: "و ص ي", gloss: "instruct" },
            { surface: "كُلَّ", lemma: "كل", pos: "noun", features: "acc.constr", root: "ك ل ل", gloss: "every" },
            { surface: "مَنْ", lemma: "من", pos: "rel", features: "part", root: "", gloss: "who" },
            { surface: "يَزُوْرُ", lemma: "زار", pos: "verb", features: "impf.3ms", root: "ز و ر", gloss: "visits" },
            { surface: "قَرْيَتَنَا", lemma: "قرية", pos: "noun", features: "acc+1cpl", root: "ق ر ي", gloss: "our village" },
            { surface: "أَلاَّ", lemma: "لا", pos: "part", features: "part+neg", root: "", gloss: "not to" },
            { surface: "يَدْخُلَ", lemma: "دخل", pos: "verb", features: "subj.3ms", root: "د خ ل", gloss: "enter" },
            { surface: "النَّهْرَ", lemma: "نهر", pos: "noun", features: "def.acc", root: "ن ه ر", gloss: "the river" }
          ]
        },
        {
          id: "qr2-50-060",
          ar: "وَكَانَ يَقُوْلُ: إِذَا أَرَدْتَّ أَنْ تَتَمَتَّعَ بِالدُّنْيَا ،",
          en: "and he would say: 'If you want to enjoy this world,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and he would" },
            { surface: "يَقُوْلُ", lemma: "قال", pos: "verb", features: "impf.3ms", root: "ق و ل", gloss: "say" },
            { surface: "إِذَا", lemma: "إذا", pos: "conj", features: "conj", root: "", gloss: "if" },
            { surface: "أَرَدْتَّ", lemma: "أراد", pos: "verb", features: "perf.2ms", root: "ر و د", gloss: "you want" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "تَتَمَتَّعَ", lemma: "تمتع", pos: "verb", features: "subj.2ms", root: "م ت ع", gloss: "enjoy" },
            { surface: "بِالدُّنْيَا", lemma: "دنيا", pos: "noun", features: "prep+def.gen", root: "د ن و", gloss: "this world" }
          ]
        },
        {
          id: "qr2-50-061",
          ar: "فَإِيَّاكَ وَالنَّهْرَ.",
          en: "then beware of the river.'",
          tokens: [
            { surface: "فَإِيَّاكَ", lemma: "إياك", pos: "part", features: "conj+part.2ms", root: "", gloss: "then beware of" },
            { surface: "وَالنَّهْرَ", lemma: "نهر", pos: "noun", features: "conj+def.acc", root: "ن ه ر", gloss: "the river" }
          ]
        }
      ],
      checks: [
        {
          q: "بِمَاذَا كَانَ الأُسْتَاذُ يُوْصِيْ كُلَّ زَائِرٍ لِلْقَرْيَةِ بَعْدَ الْحَادِثَةِ؟",
          options: ["أَلَّا يَدْخُلَ النَّهْرَ أَبَداً", "أَنْ يَتَعَلَّمَ السِّبَاحَةَ جَيِّداً أَوَّلاً", "أَنْ يُحْضِرَ مَعَهُ حَبْلاً دَائِماً"],
          answer: 0,
          qEn: "What did the teacher advise every visitor to the village, after the incident?",
          optionsEn: ["Never to enter the river", "To learn to swim well first", "To always bring a rope with him"]
        }
      ]
    },
    {
      en: "Yet the elder still held it against the man that he had not rescued him and had not extended his hand to him, and did not consider him excused in this matter.",
      sentences: [
        {
          id: "qr2-50-062",
          ar: "وَكَانَ الشَّيْخُ لاَ يَزَالُ يَعْتِبُ عَلَىٰ الرَّجُلِ أَنَّهُ لَمْ يُنْجِدْهُ ،",
          en: "Yet the elder still held it against the man that he had not rescued him,",
          tokens: [
            { surface: "وَكَانَ", lemma: "كان", pos: "verb", features: "conj+perf.3ms", root: "ك و ن", gloss: "and was" },
            { surface: "الشَّيْخُ", lemma: "شيخ", pos: "noun", features: "def.nom", root: "ش ي خ", gloss: "the elder" },
            { surface: "لاَ", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "يَزَالُ", lemma: "زال", pos: "verb", features: "impf.3ms", root: "ز ي ل", gloss: "ceasing" },
            { surface: "يَعْتِبُ", lemma: "عتب", pos: "verb", features: "impf.3ms", root: "ع ت ب", gloss: "blaming" },
            { surface: "عَلَىٰ", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "upon" },
            { surface: "الرَّجُلِ", lemma: "رجل", pos: "noun", features: "def.gen", root: "ر ج ل", gloss: "the man" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "لَمْ", lemma: "لم", pos: "part", features: "neg", root: "", gloss: "had not" },
            { surface: "يُنْجِدْهُ", lemma: "أنجد", pos: "verb", features: "juss.3ms+3ms", root: "ن ج د", gloss: "rescued him" }
          ]
        },
        {
          id: "qr2-50-063",
          ar: "وَلَمْ يَمُدَّ إِلَيْهِ يَدَهُ ،",
          en: "and had not extended his hand to him,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and had not" },
            { surface: "يَمُدَّ", lemma: "مد", pos: "verb", features: "juss.3ms", root: "م د د", gloss: "extended" },
            { surface: "إِلَيْهِ", lemma: "إلى", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "يَدَهُ", lemma: "يد", pos: "noun", features: "acc+3ms", root: "ي د ي", gloss: "his hand" }
          ]
        },
        {
          id: "qr2-50-064",
          ar: "وَلاَ يَرَاهُ مَعْذُوْراً فِيْ هٰذَا الأَمْرِ.",
          en: "and did not consider him excused in this matter.",
          tokens: [
            { surface: "وَلاَ", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and does not" },
            { surface: "يَرَاهُ", lemma: "رأى", pos: "verb", features: "impf.3ms+3ms", root: "ر أ ي", gloss: "consider him" },
            { surface: "مَعْذُوْراً", lemma: "معذور", pos: "adj", features: "indef.acc", root: "ع ذ ر", gloss: "excused" },
            { surface: "فِيْ", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "هٰذَا", lemma: "هذا", pos: "dem", features: "dem.ms", root: "", gloss: "this" },
            { surface: "الأَمْرِ", lemma: "أمر", pos: "noun", features: "def.gen", root: "أ م ر", gloss: "matter" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا كَانَ يَعِيْبُ الشَّيْخُ عَلَىٰ الرَّجُلِ الَّذِيْ أَنْقَذَهُ؟",
          options: ["أَنَّهُ لَمْ يُمْسِكْ بِيَدِهِ مُبَاشَرَةً بَلْ دَفَعَهُ مِنْ أَسْفَلَ", "أَنَّهُ تَأَخَّرَ كَثِيْراً فِي إِنْقَاذِهِ", "أَنَّهُ طَلَبَ مِنْهُ مَالاً مُقَابِلَ إِنْقَاذِهِ"],
          answer: 0,
          qEn: "What did the elder still hold against the man who saved him?",
          optionsEn: ["That he hadn't grabbed his hand directly but pushed him from below instead", "That he had taken too long to rescue him", "That he had asked him for money in exchange for saving him"]
        }
      ]
    }
  ],
  workshop: {
    cloze: [
      {
        type: "cloze",
        pre: "فَ",
        post: "الشَّيْخُ النَّهْرَ ،",
        en: "the elder waded into the river,",
        options: ["خَاضَ", "خُضْتُ", "تَخُوْضُ", "نَخُوْضُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he waded in.",
          "1st person singular perfect -- I waded in.",
          "2nd masculine or 3rd feminine present -- you/she wade in.",
          "1st person plural present -- we wade in.",
        ],
      },
      {
        type: "cloze",
        pre: "فَنَكَّسُوْهُ حَتَّىٰ ",
        post: "،",
        en: "so they turned him upside down until he vomited,",
        options: ["قَاءَ", "قِئْتُ", "تَقِيْءُ", "نَقِيْءُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he vomited.",
          "1st person singular perfect -- I vomited.",
          "2nd masculine or 3rd feminine present -- you/she vomit.",
          "1st person plural present -- we vomit.",
        ],
      },
      {
        type: "cloze",
        pre: "وَ",
        post: "،",
        en: "and he regained consciousness,",
        options: ["أَفَاقَ", "أَفَقْتُ", "تُفِيْقُ", "نُفِيْقُ"],
        answer: 0,
        rationales: [
          "Perfect 3rd masculine singular -- he regained consciousness.",
          "1st person singular perfect -- I regained consciousness.",
          "2nd masculine or 3rd feminine present -- you/she regain consciousness.",
          "1st person plural present -- we regain consciousness.",
        ],
      },
    ],
    shift: [
      {
        type: "shift",
        base: "أَمْسَكَ بِالْعُوْدِ",
        pre: "",
        post: "بِالْعُوْدِ",
        targetPerson: "أَنْتَ",
        targetEn: "you",
        options: ["أَمْسَكْتَ", "أَمْسَكْتُ", "أَمْسَكُوْا", "تُمْسِكُ"],
        answer: 0,
        rationales: [
          "2nd masculine singular perfect -- you grasped.",
          "1st person singular perfect -- I grasped.",
          "3rd masculine plural perfect -- they grasped.",
          "2nd masculine or 3rd feminine present -- you/she grasp.",
        ],
      },
      {
        type: "shift",
        base: "وَصَلَ إِلَى الشَّاطِئِ",
        pre: "",
        post: "إِلَى الشَّاطِئِ",
        targetPerson: "هُمْ",
        targetEn: "they",
        options: ["وَصَلُوْا", "وَصَلْتُ", "وَصَلْتَ", "يَصِلُ"],
        answer: 0,
        rationales: [
          "3rd masculine plural perfect -- they reached.",
          "1st person singular perfect -- I reached.",
          "2nd masculine singular perfect -- you reached.",
          "3rd masculine singular present -- he reaches.",
        ],
      },
    ],
  },
};

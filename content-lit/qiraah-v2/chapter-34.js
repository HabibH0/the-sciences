// القراءة الراشدة, volume two, chapter 34 (printed heading "٣٤") --
// عِيَادَةُ الْمَرِيْضِ -- "Visiting the Sick".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 124-126 (PDF page
// index == printed page number). Page 124 opens fresh with the "(٣٤)"
// heading; page 126 ends with the "✳ ✳ ✳" divider partway down, confirming
// the chapter is exactly three pages (124-126); chapter 35 "الْكِيْمِيَاء"
// begins fresh on 127.
//
// Third of the nine chapters (32-40) filling the gap flagged in
// qiraah-v2/index.js's header comment. Spliced in after ch33.
//
// Lemma/homograph decisions:
//   - "عاد" appears in TWO distinct verb senses in this very chapter: the
//     idiomatic transitive "to visit (a sick person)" (يَعُوْدَهُ, أَعُوْدَ
//     صَدِيْقِيْ, تَعُوْدَهُ, عَادَكَ, عَادَنِيْ -- all with a direct object) and
//     the ordinary intransitive "to return, come back" (وَأَعُوْدُ ... غَدًا,
//     the closing line). Both are pos "verb", so the tooling would not
//     flag a clash either way, but conflating them under one lemma would
//     give the word card a wrong gloss half the time -- so the
//     sick-visiting sense gets its own key "عاد-عيادة" (echoing the
//     chapter's own title word عِيَادَة), leaving bare "عاد" for the plain
//     "return" sense. "عَائِد" (the noun "a visitor [of the sick]",
//     الْعَائِدَ) likewise gets its own lemma rather than being folded into
//     either verb, following the participle-as-own-lemma pattern used for
//     "نازل"/"مدفون"/"مسرور" in ch32-33.
//   - "حُمَّى" ("fever", noun) and "يَحْمِيَ" ("to keep [someone] away from,
//     protect", verb) strip to the same bare spelling "حمى" and are BOTH
//     used in this chapter (the fever itself, and the doctor's
//     instruction to keep Husayn away from cold water etc.) -- a genuine
//     within-chapter pos clash, so the verb sense takes the established
//     "-فعل" suffix: "حمى-فعل".
//   - Per the per-chapter (not book-wide) consistency-check discovery
//     documented in chapter-33.js's header, several bare spellings here
//     reuse a sense that carries a *different* pos or gloss elsewhere in
//     the book, with no suffix needed since this chapter never uses the
//     other sense internally: "حمى" (here "fever", noun; qiraah-v1
//     ch21's "حمى" is "protection, refuge", also noun -- different sense,
//     same pos, so even that one would not have clashed); "بارئ" (here
//     "recovering, well again", adj; qiraah-v1 ch21's "بارئ" is "creator",
//     noun); "تعب" (here "exertion, fatigue", noun -- one of the things
//     the doctor says to avoid; qiraah-v2 ch33's "تعب" is the verb "to
//     toil, tire oneself"); "شق" (here "to become burdensome upon", verb;
//     ch33's "شق" is "to split, crack", also verb but a different sense).
//   - "بارئ" ("recovering") and "أوصى" ("to instruct, entrust") reuse
//     qiraah-v1/chapter-21.js's and qiraah-v2/chapter-49.js's roots and
//     pos respectively; "صدر" ("chest") reuses qiraah-v1/chapter-14.js's
//     noun sense directly; "طبيب" ("doctor") reuses qiraah-v1/chapter-09.js
//     and qiraah-v2/chapter-45.js's noun sense directly.
//   - "إن" is used for both emphatic إِنَّ/إِنَّهُ ("indeed, that") and
//     conditional إِنْ ("if", in "إِنْ شَاءَ اللهُ"). Both strip to the same
//     bare "إن" and share pos "part", so the tooling sees no clash; each
//     token still carries its own accurate per-token gloss ("indeed" vs
//     "if"), which is what the reader actually displays.
export const CHAPTER = {
  id: "ch34",
  title: {
    ar: "عِيَادَةُ الْمَرِيْضِ",
    en: "Visiting the Sick"
  },
  pages: [124, 125, 126],
  newWords: [
    "مريض", "حضر", "سبب", "محموم", "عزم", "عاد-عيادة", "استأذن", "أخبر", "أصاب", "حمى",
    "أمكن", "مضطجع", "لطف", "دنا", "حال", "عافى", "شديد", "صداع", "دوار", "ضعف",
    "كأن", "اشتهى", "بأس", "طهور", "شاء", "طبيب", "جس", "قاس", "حرارة", "امتحن",
    "صدر", "سماعة", "أبدى", "ارتياح", "غير", "وصفة", "بارئ", "أوصى", "حمى-فعل", "بارد",
    "زيت", "خروج", "هواء", "تعب", "سقى", "لبن", "شعير", "فواكه", "طال", "عائد",
    "جلوس", "شق", "أهل"
  ],
  lemmas: {
    "ذهب": { root: "ذ ه ب", pos: "verb", gloss: "to go" },
    "حامد": { root: "", pos: "proper", gloss: "Hamid" },
    "إلى": { root: "", pos: "prep", gloss: "to" },
    "مدرسة": { root: "د ر س", pos: "noun", gloss: "school" },
    "يوم": { root: "ي و م", pos: "noun", gloss: "a day" },
    "سبت": { root: "س ب ت", pos: "noun", gloss: "Saturday" },
    "وجد": { root: "و ج د", pos: "verb", gloss: "to find" },
    "أن": { root: "", pos: "part", gloss: "that" },
    "صديق": { root: "ص د ق", pos: "noun", gloss: "a friend" },
    "حسين": { root: "", pos: "proper", gloss: "Husayn" },
    "ما": { root: "", pos: "part", gloss: "not" },
    "حضر": { root: "ح ض ر", pos: "verb", gloss: "to be present, attend, come" },
    "في": { root: "", pos: "prep", gloss: "in, at" },
    "سأل": { root: "س أ ل", pos: "verb", gloss: "to ask" },
    "أخ": { root: "أ خ و", pos: "noun", gloss: "a brother" },
    "علي": { root: "", pos: "proper", gloss: "Ali" },
    "عن": { root: "", pos: "prep", gloss: "about" },
    "سبب": { root: "س ب ب", pos: "noun", gloss: "a reason, cause" },
    "قال": { root: "ق و ل", pos: "verb", gloss: "to say" },
    "إن": { root: "", pos: "part", gloss: "indeed; if" },
    "محموم": { root: "ح م ي", pos: "adj", gloss: "feverish, afflicted with fever", book_note: "مَحْمُوْمٌ: مُصَابٌ بِالحُمَّىٰ." },
    "من": { root: "", pos: "prep", gloss: "from, since" },
    "خميس": { root: "خ م س", pos: "noun", gloss: "Thursday" },
    "عزم": { root: "ع ز م", pos: "verb", gloss: "to resolve, determine" },
    "على": { root: "", pos: "prep", gloss: "on, to" },
    "عاد-عيادة": { root: "ع و د", pos: "verb", gloss: "to visit (a sick person)" },
    "رجوع": { root: "ر ج ع", pos: "noun", gloss: "returning, coming back" },
    "بيت": { root: "ب ي ت", pos: "noun", gloss: "house" },
    "سلم": { root: "س ل م", pos: "verb", gloss: "to greet" },
    "استأذن": { root: "أ ذ ن", pos: "verb", gloss: "to ask permission" },
    "خرج": { root: "خ ر ج", pos: "verb", gloss: "to go out, come out" },
    "أب": { root: "أ ب و", pos: "noun", gloss: "father" },
    "أراد": { root: "ر و د", pos: "verb", gloss: "to want" },
    "أخبر": { root: "خ ب ر", pos: "verb", gloss: "to inform, tell" },
    "مريض": { root: "م ر ض", pos: "noun", gloss: "sick, a sick person" },
    "أصاب": { root: "ص و ب", pos: "verb", gloss: "to strike, afflict, befall" },
    "إذا": { root: "", pos: "part", gloss: "if, when" },
    "عند": { root: "", pos: "prep", gloss: "with, at" },
    "حمى": { root: "ح م ي", pos: "noun", gloss: "fever", book_note: "حُمَّىٰ: عِلَّة يَسْتَحِرُّ بِهَا الجِسْمُ." },
    "أمكن": { root: "م ك ن", pos: "verb", gloss: "to be possible (for)" },
    "صعد": { root: "ص ع د", pos: "verb", gloss: "to go up, ascend" },
    "سطح": { root: "س ط ح", pos: "noun", gloss: "roof" },
    "دخل": { root: "د خ ل", pos: "verb", gloss: "to enter" },
    "غرفة": { root: "غ ر ف", pos: "noun", gloss: "a room" },
    "رأى": { root: "ر أ ي", pos: "verb", gloss: "to see" },
    "مضطجع": { root: "ض ج ع", pos: "adj", gloss: "lying down, reclining" },
    "لطف": { root: "ل ط ف", pos: "noun", gloss: "gentleness, kindness" },
    "دنا": { root: "د ن و", pos: "verb", gloss: "to draw near" },
    "ل": { root: "", pos: "prep", gloss: "to, for" },
    "كيف": { root: "", pos: "adv", gloss: "how" },
    "حال": { root: "ح و ل", pos: "noun", gloss: "condition, state" },
    "يا": { root: "", pos: "part", gloss: "O" },
    "عافى": { root: "ع ف و", pos: "verb", gloss: "to grant well-being, heal" },
    "الله": { root: "", pos: "proper", gloss: "Allah" },
    "كان": { root: "ك و ن", pos: "verb", gloss: "to be" },
    "شديد": { root: "ش د د", pos: "adj", gloss: "severe, intense" },
    "جمعة": { root: "ج م ع", pos: "noun", gloss: "Friday" },
    "خف": { root: "خ ف ف", pos: "verb", gloss: "to subside, become light" },
    "ليل": { root: "ل ي ل", pos: "noun", gloss: "night" },
    "لكن": { root: "", pos: "conj", gloss: "but" },
    "شكا": { root: "ش ك و", pos: "verb", gloss: "to complain of" },
    "صداع": { root: "ص د ع", pos: "noun", gloss: "headache", book_note: "صُدَاع: وَجَعُ الرَّأْسِ." },
    "دوار": { root: "د و ر", pos: "noun", gloss: "dizziness", book_note: "دُوَار: دَوَرَان يَأْخُذ بِالرَّأْسِ لِمَرَضٍ أَوْ سَفَرٍ." },
    "قد": { root: "", pos: "part", gloss: "indeed, already" },
    "ضعف": { root: "ض ع ف", pos: "verb", gloss: "to become weak" },
    "كثير": { root: "ك ث ر", pos: "adv", gloss: "much, greatly" },
    "كأن": { root: "", pos: "part", gloss: "as if" },
    "منذ": { root: "", pos: "prep", gloss: "since" },
    "اشتهى": { root: "ش ه و", pos: "verb", gloss: "to desire, crave" },
    "طعام": { root: "ط ع م", pos: "noun", gloss: "food" },
    "لا": { root: "", pos: "part", gloss: "no, not" },
    "بأس": { root: "ب أ س", pos: "noun", gloss: "harm" },
    "طهور": { root: "ط ه ر", pos: "noun", gloss: "a purification" },
    "شاء": { root: "ش ي أ", pos: "verb", gloss: "to will, wish" },
    "طبيب": { root: "ط ب ب", pos: "noun", gloss: "doctor, physician" },
    "هل": { root: "", pos: "part", gloss: "has..? (question particle)" },
    "نعم": { root: "", pos: "part", gloss: "yes" },
    "أمس": { root: "", pos: "adv", gloss: "yesterday" },
    "موعد": { root: "و ع د", pos: "noun", gloss: "an appointment" },
    "الآن": { root: "", pos: "adv", gloss: "now" },
    "لم": { root: "", pos: "part", gloss: "not (+ jussive, past negation)" },
    "جلس": { root: "ج ل س", pos: "verb", gloss: "to sit" },
    "إلا": { root: "", pos: "part", gloss: "except" },
    "قليل": { root: "ق ل ل", pos: "adv", gloss: "a little" },
    "حتى": { root: "", pos: "part", gloss: "until, when" },
    "جس": { root: "ج س س", pos: "verb", gloss: "to feel, palpate", book_note: "جَسَّ يَجُسُّ اليَدَ: مَسَّهَا." },
    "يد": { root: "ي د ي", pos: "noun", gloss: "hand" },
    "قاس": { root: "ق ي س", pos: "verb", gloss: "to measure, gauge" },
    "حرارة": { root: "ح ر ر", pos: "noun", gloss: "temperature, heat" },
    "امتحن": { root: "م ح ن", pos: "verb", gloss: "to examine, test" },
    "صدر": { root: "ص د ر", pos: "noun", gloss: "chest" },
    "سماعة": { root: "س م ع", pos: "noun", gloss: "a stethoscope", book_note: "السَّمَّاعَة: آلَة يَسْمَعُ بِهَا الطَّبِيْبُ نَبْضَ القَلْبِ." },
    "أبدى": { root: "ب د و", pos: "verb", gloss: "to show, express" },
    "ارتياح": { root: "ر و ح", pos: "noun", gloss: "relief, satisfaction" },
    "غير": { root: "غ ي ر", pos: "verb", gloss: "to change (something)" },
    "وصفة": { root: "و ص ف", pos: "noun", gloss: "a prescription" },
    "بارئ": { root: "ب ر أ", pos: "adj", gloss: "recovering, well again" },
    "حمد": { root: "ح م د", pos: "noun", gloss: "praise" },
    "أوصى": { root: "و ص ي", pos: "verb", gloss: "to instruct, entrust (someone) with", book_note: "أَوْصَاهُ يُوْصِيْ بِأَمْرٍ: أَمَرَهُ بِهِ." },
    "حمى-فعل": { root: "ح م ي", pos: "verb", gloss: "to keep away, protect (from)" },
    "ماء": { root: "م و ه", pos: "noun", gloss: "water" },
    "بارد": { root: "ب ر د", pos: "adj", gloss: "cold" },
    "زيت": { root: "ز ي ت", pos: "noun", gloss: "oil" },
    "خروج": { root: "خ ر ج", pos: "noun", gloss: "going out" },
    "هواء": { root: "ه و ي", pos: "noun", gloss: "open air" },
    "تعب": { root: "ت ع ب", pos: "noun", gloss: "exertion, fatigue" },
    "سقى": { root: "س ق ي", pos: "verb", gloss: "to give to drink" },
    "لبن": { root: "ل ب ن", pos: "noun", gloss: "milk" },
    "شعير": { root: "ش ع ر", pos: "noun", gloss: "barley" },
    "فواكه": { root: "ف ك ه", pos: "noun", gloss: "fruits" },
    "طال": { root: "ط و ل", pos: "verb", gloss: "to prolong, be long" },
    "عائد": { root: "ع و د", pos: "noun", gloss: "a visitor (of the sick)" },
    "جلوس": { root: "ج ل س", pos: "noun", gloss: "sitting" },
    "شق": { root: "ش ق ق", pos: "verb", gloss: "to become burdensome upon" },
    "أهل": { root: "أ ه ل", pos: "noun", gloss: "people, family (of)" },
    "انصرف": { root: "ص ر ف", pos: "verb", gloss: "to depart, leave" },
    "عاد": { root: "ع و د", pos: "verb", gloss: "to return, come back" },
    "غدا": { root: "غ د و", pos: "adv", gloss: "tomorrow" }
  },
  paragraphs: [
    {
      en: "Hamid went to school on Saturday and found that his friend Husayn had not come to school. He asked his brother Ali the reason, and Ali said Husayn had had a fever since Thursday. So Hamid resolved to visit him on his way back from school.",
      sentences: [
        {
          id: "qr2-34-001",
          ar: "ذَهَبَ حَامِدٌ إِلَى الْمَدْرَسَةِ يَوْمَ السَّبْتِ فَوَجَدَ أَنَّ صَدِيْقَهُ حُسَيْنًا مَا حَضَرَ فِي الْمَدْرَسَةِ،",
          en: "Hamid went to school on Saturday and found that his friend Husayn had not attended school,",
          tokens: [
            { surface: "ذَهَبَ", lemma: "ذهب", pos: "verb", features: "perf.3ms", root: "ذ ه ب", gloss: "went" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "الْمَدْرَسَةِ", lemma: "مدرسة", pos: "noun", features: "def.gen", root: "د ر س", gloss: "the school" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "on the day of" },
            { surface: "السَّبْتِ", lemma: "سبت", pos: "noun", features: "def.gen", root: "س ب ت", gloss: "Saturday" },
            { surface: "فَوَجَدَ", lemma: "وجد", pos: "verb", features: "conj+perf.3ms", root: "و ج د", gloss: "and found" },
            { surface: "أَنَّ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "صَدِيْقَهُ", lemma: "صديق", pos: "noun", features: "acc+3ms", root: "ص د ق", gloss: "his friend" },
            { surface: "حُسَيْنًا", lemma: "حسين", pos: "proper", features: "indef.acc", root: "", gloss: "Husayn" },
            { surface: "مَا", lemma: "ما", pos: "part", features: "neg", root: "", gloss: "not" },
            { surface: "حَضَرَ", lemma: "حضر", pos: "verb", features: "perf.3ms", root: "ح ض ر", gloss: "attend" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "الْمَدْرَسَةِ", lemma: "مدرسة", pos: "noun", features: "def.gen", root: "د ر س", gloss: "school" }
          ]
        },
        {
          id: "qr2-34-002",
          ar: "فَسَأَلَ أَخَاهُ عَلِيًّا عَنِ السَّبَبِ،",
          en: "so he asked his brother Ali about the reason,",
          tokens: [
            { surface: "فَسَأَلَ", lemma: "سأل", pos: "verb", features: "conj+perf.3ms", root: "س أ ل", gloss: "so he asked" },
            { surface: "أَخَاهُ", lemma: "أخ", pos: "noun", features: "acc+3ms", root: "أ خ و", gloss: "his brother" },
            { surface: "عَلِيًّا", lemma: "علي", pos: "proper", features: "indef.acc", root: "", gloss: "Ali" },
            { surface: "عَنِ", lemma: "عن", pos: "prep", features: "prep", root: "", gloss: "about" },
            { surface: "السَّبَبِ", lemma: "سبب", pos: "noun", features: "def.gen", root: "س ب ب", gloss: "the reason" }
          ]
        },
        {
          id: "qr2-34-003",
          ar: "فَقَالَ: إِنَّهُ مَحْمُوْمٌ مِنْ يَوْمِ الْخَمِيْسِ،",
          en: "and he said: \"He has had a fever since Thursday,\"",
          tokens: [
            { surface: "فَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and he said" },
            { surface: "إِنَّهُ", lemma: "إن", pos: "part", features: "part+3ms", root: "", gloss: "he is" },
            { surface: "مَحْمُوْمٌ", lemma: "محموم", pos: "adj", features: "indef.nom", root: "ح م ي", gloss: "feverish" },
            { surface: "مِنْ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "since" },
            { surface: "يَوْمِ", lemma: "يوم", pos: "noun", features: "gen.constr", root: "ي و م", gloss: "the day of" },
            { surface: "الْخَمِيْسِ", lemma: "خميس", pos: "noun", features: "def.gen", root: "خ م س", gloss: "Thursday" }
          ]
        },
        {
          id: "qr2-34-004",
          ar: "فَعَزَمَ حَامِدٌ عَلَى أَنْ يَعُوْدَهُ فِي الرُّجُوْعِ مِنَ الْمَدْرَسَةِ.",
          en: "so Hamid resolved to visit him on his way back from school.",
          tokens: [
            { surface: "فَعَزَمَ", lemma: "عزم", pos: "verb", features: "conj+perf.3ms", root: "ع ز م", gloss: "so resolved" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "عَلَى", lemma: "على", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "that" },
            { surface: "يَعُوْدَهُ", lemma: "عاد-عيادة", pos: "verb", features: "subj.3ms+3ms", root: "ع و د", gloss: "he visit him" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "upon" },
            { surface: "الرُّجُوْعِ", lemma: "رجوع", pos: "noun", features: "def.gen", root: "ر ج ع", gloss: "the returning" },
            { surface: "مِنَ", lemma: "من", pos: "prep", features: "prep", root: "", gloss: "from" },
            { surface: "الْمَدْرَسَةِ", lemma: "مدرسة", pos: "noun", features: "def.gen", root: "د ر س", gloss: "the school" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا وَجَدَ حَامِدٌ عِنْدَمَا ذَهَبَ إِلَى الْمَدْرَسَةِ يَوْمَ السَّبْتِ؟",
          options: ["أَنَّ صَدِيْقَهُ حُسَيْنًا لَمْ يَحْضُرْ", "أَنَّ الْمَدْرَسَةَ مُغْلَقَةٌ", "أَنَّ عَلِيًّا مَرِيْضٌ"],
          answer: 0,
          qEn: "What did Hamid find when he went to school on Saturday?",
          optionsEn: ["That his friend Husayn had not come", "That the school was closed", "That Ali was sick"]
        }
      ]
    },
    {
      en: "Hamid went to Husayn's house, greeted, and asked permission. Husayn's father came out. Hamid said: \"I want to visit my friend Husayn, for Ali told me he is sick.\" His father said: \"Yes! The fever struck him on Thursday, and you may visit him.\"",
      sentences: [
        {
          id: "qr2-34-005",
          ar: "ذَهَبَ حَامِدٌ إِلَى بَيْتِ حُسَيْنٍ فَسَلَّمَ وَاسْتَأْذَنَ،",
          en: "Hamid went to Husayn's house, greeted, and asked permission,",
          tokens: [
            { surface: "ذَهَبَ", lemma: "ذهب", pos: "verb", features: "perf.3ms", root: "ذ ه ب", gloss: "went" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "بَيْتِ", lemma: "بيت", pos: "noun", features: "gen.constr", root: "ب ي ت", gloss: "the house of" },
            { surface: "حُسَيْنٍ", lemma: "حسين", pos: "proper", features: "indef.gen", root: "", gloss: "Husayn" },
            { surface: "فَسَلَّمَ", lemma: "سلم", pos: "verb", features: "conj+perf.3ms", root: "س ل م", gloss: "and greeted" },
            { surface: "وَاسْتَأْذَنَ", lemma: "استأذن", pos: "verb", features: "conj+perf.3ms", root: "أ ذ ن", gloss: "and asked permission" }
          ]
        },
        {
          id: "qr2-34-006",
          ar: "فَخَرَجَ أَبُو حُسَيْنٍ،",
          en: "so Husayn's father came out,",
          tokens: [
            { surface: "فَخَرَجَ", lemma: "خرج", pos: "verb", features: "conj+perf.3ms", root: "خ ر ج", gloss: "so came out" },
            { surface: "أَبُو", lemma: "أب", pos: "noun", features: "nom.constr", root: "أ ب و", gloss: "the father of" },
            { surface: "حُسَيْنٍ", lemma: "حسين", pos: "proper", features: "indef.gen", root: "", gloss: "Husayn" }
          ]
        },
        {
          id: "qr2-34-007",
          ar: "قَالَ حَامِدٌ: إِنِّي أُرِيْدُ أَنْ أَعُوْدَ صَدِيْقِيْ حُسَيْنًا فَقَدْ أَخْبَرَنِيْ عَلِيٌّ أَنَّهُ مَرِيْضٌ،",
          en: "Hamid said: \"I want to visit my friend Husayn, for Ali told me he is sick,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "إِنِّي", lemma: "إن", pos: "part", features: "part+1s", root: "", gloss: "indeed I" },
            { surface: "أُرِيْدُ", lemma: "أراد", pos: "verb", features: "impf.1s", root: "ر و د", gloss: "want" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "أَعُوْدَ", lemma: "عاد-عيادة", pos: "verb", features: "subj.1s", root: "ع و د", gloss: "visit" },
            { surface: "صَدِيْقِيْ", lemma: "صديق", pos: "noun", features: "acc+1s", root: "ص د ق", gloss: "my friend" },
            { surface: "حُسَيْنًا", lemma: "حسين", pos: "proper", features: "indef.acc", root: "", gloss: "Husayn" },
            { surface: "فَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "for indeed" },
            { surface: "أَخْبَرَنِيْ", lemma: "أخبر", pos: "verb", features: "perf.3ms+1s", root: "خ ب ر", gloss: "told me" },
            { surface: "عَلِيٌّ", lemma: "علي", pos: "proper", features: "indef.nom", root: "", gloss: "Ali" },
            { surface: "أَنَّهُ", lemma: "أن", pos: "part", features: "part+3ms", root: "", gloss: "that he" },
            { surface: "مَرِيْضٌ", lemma: "مريض", pos: "noun", features: "indef.nom", root: "م ر ض", gloss: "sick" }
          ]
        },
        {
          id: "qr2-34-008",
          ar: "قَالَ أَبُوْهُ: نَعَمْ! إِنَّهُ أَصَابَتْهُ الْحُمَّى يَوْمَ الْخَمِيْسِ،",
          en: "His father said: \"Yes! The fever struck him on Thursday,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "أَبُوْهُ", lemma: "أب", pos: "noun", features: "nom+3ms", root: "أ ب و", gloss: "his father" },
            { surface: "نَعَمْ", lemma: "نعم", pos: "part", features: "part", root: "", gloss: "yes" },
            { surface: "إِنَّهُ", lemma: "إن", pos: "part", features: "part+3ms", root: "", gloss: "indeed he" },
            { surface: "أَصَابَتْهُ", lemma: "أصاب", pos: "verb", features: "perf.3fs+3ms", root: "ص و ب", gloss: "struck him" },
            { surface: "الْحُمَّى", lemma: "حمى", pos: "noun", features: "def.nom", root: "ح م ي", gloss: "the fever" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "on the day of" },
            { surface: "الْخَمِيْسِ", lemma: "خميس", pos: "noun", features: "def.gen", root: "خ م س", gloss: "Thursday" }
          ]
        },
        {
          id: "qr2-34-009",
          ar: "وَيُمْكِنُكَ أَنْ تَعُوْدَهُ.",
          en: "and you may visit him.\"",
          tokens: [
            { surface: "وَيُمْكِنُكَ", lemma: "أمكن", pos: "verb", features: "conj+impf.3ms+2ms", root: "م ك ن", gloss: "and it is possible for you" },
            { surface: "أَنْ", lemma: "أن", pos: "part", features: "part", root: "", gloss: "to" },
            { surface: "تَعُوْدَهُ", lemma: "عاد-عيادة", pos: "verb", features: "subj.2ms+3ms", root: "ع و د", gloss: "you visit him" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا قَالَ أَبُو حُسَيْنٍ لِحَامِدٍ؟",
          options: ["إِنَّ حُسَيْنًا مُصَابٌ بِالْحُمَّىٰ وَيُمْكِنُهُ أَنْ يَعُوْدَهُ", "إِنَّ حُسَيْنًا نَائِمٌ وَلَا يُمْكِنُ زِيَارَتُهُ", "إِنَّ حُسَيْنًا ذَهَبَ إِلَى الطَّبِيْبِ"],
          answer: 0,
          qEn: "What did Husayn's father tell Hamid?",
          optionsEn: ["That Husayn has a fever and he may visit him", "That Husayn is asleep and cannot be visited", "That Husayn has gone to the doctor"]
        }
      ]
    },
    {
      en: "Hamid went up to the roof and entered Husayn's room, and saw Husayn lying down. He greeted him gently and drew near him, and said to him: \"How are you, my brother! May Allah restore you to health.\"",
      sentences: [
        {
          id: "qr2-34-010",
          ar: "صَعِدَ حَامِدٌ إِلَى السَّطْحِ،",
          en: "Hamid went up to the roof,",
          tokens: [
            { surface: "صَعِدَ", lemma: "صعد", pos: "verb", features: "perf.3ms", root: "ص ع د", gloss: "went up" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "إِلَى", lemma: "إلى", pos: "prep", features: "prep", root: "", gloss: "to" },
            { surface: "السَّطْحِ", lemma: "سطح", pos: "noun", features: "def.gen", root: "س ط ح", gloss: "the roof" }
          ]
        },
        {
          id: "qr2-34-011",
          ar: "وَدَخَلَ غُرْفَةَ حُسَيْنٍ،",
          en: "and entered Husayn's room,",
          tokens: [
            { surface: "وَدَخَلَ", lemma: "دخل", pos: "verb", features: "conj+perf.3ms", root: "د خ ل", gloss: "and entered" },
            { surface: "غُرْفَةَ", lemma: "غرفة", pos: "noun", features: "acc.constr", root: "غ ر ف", gloss: "the room of" },
            { surface: "حُسَيْنٍ", lemma: "حسين", pos: "proper", features: "indef.gen", root: "", gloss: "Husayn" }
          ]
        },
        {
          id: "qr2-34-012",
          ar: "فَرَأَى حُسَيْنًا مُضْطَجِعًا،",
          en: "and saw Husayn lying down,",
          tokens: [
            { surface: "فَرَأَى", lemma: "رأى", pos: "verb", features: "conj+perf.3ms", root: "ر أ ي", gloss: "and saw" },
            { surface: "حُسَيْنًا", lemma: "حسين", pos: "proper", features: "indef.acc", root: "", gloss: "Husayn" },
            { surface: "مُضْطَجِعًا", lemma: "مضطجع", pos: "adj", features: "indef.acc", root: "ض ج ع", gloss: "lying down" }
          ]
        },
        {
          id: "qr2-34-013",
          ar: "فَسَلَّمَ عَلَيْهِ بِلُطْفٍ،",
          en: "He greeted him gently,",
          tokens: [
            { surface: "فَسَلَّمَ", lemma: "سلم", pos: "verb", features: "conj+perf.3ms", root: "س ل م", gloss: "so greeted" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "him" },
            { surface: "بِلُطْفٍ", lemma: "لطف", pos: "noun", features: "prep+indef.gen", root: "ل ط ف", gloss: "with gentleness" }
          ]
        },
        {
          id: "qr2-34-014",
          ar: "وَدَنَا مِنْهُ،",
          en: "and drew near him,",
          tokens: [
            { surface: "وَدَنَا", lemma: "دنا", pos: "verb", features: "conj+perf.3ms", root: "د ن و", gloss: "and drew near" },
            { surface: "مِنْهُ", lemma: "من", pos: "prep", features: "prep+3ms", root: "", gloss: "him" }
          ]
        },
        {
          id: "qr2-34-015",
          ar: "وَقَالَ لَهُ: كَيْفَ حَالُكَ يَا أَخِيْ! عَافَاكَ اللهُ.",
          en: "and said to him: \"How are you, my brother! May Allah restore you to health.\"",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "لَهُ", lemma: "ل", pos: "prep", features: "prep+3ms", root: "", gloss: "to him" },
            { surface: "كَيْفَ", lemma: "كيف", pos: "adv", features: "adv", root: "", gloss: "how" },
            { surface: "حَالُكَ", lemma: "حال", pos: "noun", features: "nom+2ms", root: "ح و ل", gloss: "your condition" },
            { surface: "يَا", lemma: "يا", pos: "part", features: "part", root: "", gloss: "O" },
            { surface: "أَخِيْ", lemma: "أخ", pos: "noun", features: "nom+1s", root: "أ خ و", gloss: "my brother" },
            { surface: "عَافَاكَ", lemma: "عافى", pos: "verb", features: "perf.3ms+2ms", root: "ع ف و", gloss: "restore you to health" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "def.nom", root: "", gloss: "Allah" }
          ]
        }
      ],
      checks: [
        {
          q: "كَيْفَ وَجَدَ حَامِدٌ حُسَيْنًا فِيْ غُرْفَتِهِ؟",
          options: ["مُضْطَجِعًا", "قَائِمًا يَلْعَبُ", "جَالِسًا يَقْرَأُ"],
          answer: 0,
          qEn: "How did Hamid find Husayn in his room?",
          optionsEn: ["Lying down", "Standing and playing", "Sitting and reading"]
        }
      ]
    },
    {
      en: "Husayn said: \"The fever struck me on Thursday. It was severe on Friday, and subsided at night, but I complain of headache and dizziness, and I have grown very weak. I feel as if I have been sick for days, and I have no appetite for food.\"",
      sentences: [
        {
          id: "qr2-34-016",
          ar: "قَالَ حُسَيْنٌ: قَدْ أَصَابَتْنِيْ الْحُمَّى يَوْمَ الْخَمِيْسِ،",
          en: "Husayn said: \"The fever struck me on Thursday,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "حُسَيْنٌ", lemma: "حسين", pos: "proper", features: "indef.nom", root: "", gloss: "Husayn" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "أَصَابَتْنِيْ", lemma: "أصاب", pos: "verb", features: "perf.3fs+1s", root: "ص و ب", gloss: "struck me" },
            { surface: "الْحُمَّى", lemma: "حمى", pos: "noun", features: "def.nom", root: "ح م ي", gloss: "the fever" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "on the day of" },
            { surface: "الْخَمِيْسِ", lemma: "خميس", pos: "noun", features: "def.gen", root: "خ م س", gloss: "Thursday" }
          ]
        },
        {
          id: "qr2-34-017",
          ar: "وَكَانَتْ شَدِيْدَةً يَوْمَ الْجُمُعَةِ،",
          en: "it was severe on Friday,",
          tokens: [
            { surface: "وَكَانَتْ", lemma: "كان", pos: "verb", features: "conj+perf.3fs", root: "ك و ن", gloss: "and it was" },
            { surface: "شَدِيْدَةً", lemma: "شديد", pos: "adj", features: "indef.acc.f", root: "ش د د", gloss: "severe" },
            { surface: "يَوْمَ", lemma: "يوم", pos: "noun", features: "acc.constr", root: "ي و م", gloss: "on the day of" },
            { surface: "الْجُمُعَةِ", lemma: "جمعة", pos: "noun", features: "def.gen", root: "ج م ع", gloss: "Friday" }
          ]
        },
        {
          id: "qr2-34-018",
          ar: "وَخَفَّتْ فِي اللَّيْلِ،",
          en: "and subsided at night,",
          tokens: [
            { surface: "وَخَفَّتْ", lemma: "خف", pos: "verb", features: "conj+perf.3fs", root: "خ ف ف", gloss: "and subsided" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "at" },
            { surface: "اللَّيْلِ", lemma: "ليل", pos: "noun", features: "def.gen", root: "ل ي ل", gloss: "night" }
          ]
        },
        {
          id: "qr2-34-019",
          ar: "وَلٰكِنِّي أَشْكُو الصُّدَاعَ وَالدُّوَارَ،",
          en: "but I complain of headache and dizziness,",
          tokens: [
            { surface: "وَلٰكِنِّي", lemma: "لكن", pos: "conj", features: "conj+1s", root: "", gloss: "but I" },
            { surface: "أَشْكُو", lemma: "شكا", pos: "verb", features: "impf.1s", root: "ش ك و", gloss: "complain of" },
            { surface: "الصُّدَاعَ", lemma: "صداع", pos: "noun", features: "def.acc", root: "ص د ع", gloss: "the headache" },
            { surface: "وَالدُّوَارَ", lemma: "دوار", pos: "noun", features: "conj+def.acc", root: "د و ر", gloss: "and the dizziness" }
          ]
        },
        {
          id: "qr2-34-020",
          ar: "وَقَدْ ضَعُفْتُ كَثِيْرًا،",
          en: "and I have grown very weak,",
          tokens: [
            { surface: "وَقَدْ", lemma: "قد", pos: "part", features: "conj+part", root: "", gloss: "and indeed" },
            { surface: "ضَعُفْتُ", lemma: "ضعف", pos: "verb", features: "perf.1s", root: "ض ع ف", gloss: "I grew weak" },
            { surface: "كَثِيْرًا", lemma: "كثير", pos: "adv", features: "indef.acc", root: "ك ث ر", gloss: "much, greatly" }
          ]
        },
        {
          id: "qr2-34-021",
          ar: "كَأَنِّي مَرِيْضٌ مُنْذُ أَيَّامٍ،",
          en: "as if I have been sick for days,",
          tokens: [
            { surface: "كَأَنِّي", lemma: "كأن", pos: "part", features: "part+1s", root: "", gloss: "as if I" },
            { surface: "مَرِيْضٌ", lemma: "مريض", pos: "noun", features: "indef.nom", root: "م ر ض", gloss: "sick" },
            { surface: "مُنْذُ", lemma: "منذ", pos: "prep", features: "prep", root: "", gloss: "since" },
            { surface: "أَيَّامٍ", lemma: "يوم", pos: "noun", features: "pl.indef.gen", root: "ي و م", gloss: "days" }
          ]
        },
        {
          id: "qr2-34-022",
          ar: "وَلَا أَشْتَهِي الطَّعَامَ.",
          en: "and I have no appetite for food.\"",
          tokens: [
            { surface: "وَلَا", lemma: "لا", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "أَشْتَهِي", lemma: "اشتهى", pos: "verb", features: "impf.1s", root: "ش ه و", gloss: "I desire, crave" },
            { surface: "الطَّعَامَ", lemma: "طعام", pos: "noun", features: "def.acc", root: "ط ع م", gloss: "the food" }
          ]
        }
      ],
      checks: [
        {
          q: "مِمَّ كَانَ حُسَيْنٌ يَشْكُوْ؟",
          options: ["الصُّدَاعِ وَالدُّوَارِ وَضَعْفٍ شَدِيْدٍ", "أَلَمِ الْأَسْنَانِ فَقَطْ", "لَا شَيْءَ، كَانَ بِخَيْرٍ"],
          answer: 0,
          qEn: "What was Husayn complaining of?",
          optionsEn: ["Headache, dizziness, and severe weakness", "Toothache only", "Nothing, he was fine"]
        }
      ]
    },
    {
      en: "Hamid said: \"No harm, it is a purification, God willing. Has a doctor visited you?\"",
      sentences: [
        {
          id: "qr2-34-023",
          ar: "قَالَ حَامِدٌ: لَا بَأْسَ طَهُوْرٌ إِنْ شَاءَ اللهُ،",
          en: "Hamid said: \"No harm, it is a purification, God willing,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "لَا", lemma: "لا", pos: "part", features: "neg", root: "", gloss: "no" },
            { surface: "بَأْسَ", lemma: "بأس", pos: "noun", features: "acc", root: "ب أ س", gloss: "harm" },
            { surface: "طَهُوْرٌ", lemma: "طهور", pos: "noun", features: "indef.nom", root: "ط ه ر", gloss: "a purification" },
            { surface: "إِنْ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "شَاءَ", lemma: "شاء", pos: "verb", features: "perf.3ms", root: "ش ي أ", gloss: "wills" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "def.nom", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-34-024",
          ar: "وَهَلْ عَادَكَ طَبِيْبٌ؟",
          en: "Has a doctor visited you?\"",
          tokens: [
            { surface: "وَهَلْ", lemma: "هل", pos: "part", features: "conj+part", root: "", gloss: "and has" },
            { surface: "عَادَكَ", lemma: "عاد-عيادة", pos: "verb", features: "perf.3ms+2ms", root: "ع و د", gloss: "visited you" },
            { surface: "طَبِيْبٌ", lemma: "طبيب", pos: "noun", features: "indef.nom", root: "ط ب ب", gloss: "a doctor" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا سَأَلَ حَامِدٌ حُسَيْنًا بَعْدَ دُعَائِهِ لَهُ؟",
          options: ["هَلْ عَادَهُ طَبِيْبٌ", "هَلْ أَكَلَ الطَّعَامَ", "هَلْ نَامَ جَيِّدًا"],
          answer: 0,
          qEn: "What did Hamid ask Husayn after praying for him?",
          optionsEn: ["Whether a doctor had visited him", "Whether he had eaten", "Whether he had slept well"]
        }
      ]
    },
    {
      en: "Husayn said: \"Yes! A doctor visited me yesterday, and his appointment is now.\"",
      sentences: [
        {
          id: "qr2-34-025",
          ar: "قَالَ حُسَيْنٌ: نَعَمْ! قَدْ عَادَنِيْ طَبِيْبٌ أَمْسِ،",
          en: "Husayn said: \"Yes! A doctor visited me yesterday,\"",
          tokens: [
            { surface: "قَالَ", lemma: "قال", pos: "verb", features: "perf.3ms", root: "ق و ل", gloss: "said" },
            { surface: "حُسَيْنٌ", lemma: "حسين", pos: "proper", features: "indef.nom", root: "", gloss: "Husayn" },
            { surface: "نَعَمْ", lemma: "نعم", pos: "part", features: "part", root: "", gloss: "yes" },
            { surface: "قَدْ", lemma: "قد", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "عَادَنِيْ", lemma: "عاد-عيادة", pos: "verb", features: "perf.3ms+1s", root: "ع و د", gloss: "visited me" },
            { surface: "طَبِيْبٌ", lemma: "طبيب", pos: "noun", features: "indef.nom", root: "ط ب ب", gloss: "a doctor" },
            { surface: "أَمْسِ", lemma: "أمس", pos: "adv", features: "adv", root: "", gloss: "yesterday" }
          ]
        },
        {
          id: "qr2-34-026",
          ar: "وَمَوْعِدُهُ الآنَ.",
          en: "and his appointment is now.\"",
          tokens: [
            { surface: "وَمَوْعِدُهُ", lemma: "موعد", pos: "noun", features: "conj+nom+3ms", root: "و ع د", gloss: "and his appointment" },
            { surface: "الآنَ", lemma: "الآن", pos: "adv", features: "adv", root: "", gloss: "now" }
          ]
        }
      ],
      checks: [
        {
          q: "مَتَىٰ عَادَ الطَّبِيْبُ حُسَيْنًا، وَمَتَىٰ مَوْعِدُهُ الْقَادِمُ؟",
          options: ["عَادَهُ أَمْسِ، وَمَوْعِدُهُ الْآنَ", "لَمْ يَعُدْهُ بَعْدُ", "عَادَهُ مُنْذُ أُسْبُوْعٍ"],
          answer: 0,
          qEn: "When did the doctor visit Husayn, and when is his next appointment?",
          optionsEn: ["He visited him yesterday, and his appointment is now", "He has not visited him yet", "He visited him a week ago"]
        }
      ]
    },
    {
      en: "Hamid had sat only a little while when the doctor arrived and felt Husayn's hand, took his temperature, and examined his chest with the stethoscope. He showed relief and changed the prescription slightly, and said: \"He is recovering, praise be to Allah,\" and instructed his father to keep Husayn away from cold water, oil, going out in the open air, and exertion, and to give him milk, barley water, and fruit juice to drink.",
      sentences: [
        {
          id: "qr2-34-027",
          ar: "وَلَمْ يَجْلِسْ حَامِدٌ إِلَّا قَلِيْلًا،",
          en: "Hamid had sat only a little while,",
          tokens: [
            { surface: "وَلَمْ", lemma: "لم", pos: "part", features: "conj+neg", root: "", gloss: "and not" },
            { surface: "يَجْلِسْ", lemma: "جلس", pos: "verb", features: "juss.3ms", root: "ج ل س", gloss: "did sit" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "إِلَّا", lemma: "إلا", pos: "part", features: "part", root: "", gloss: "except" },
            { surface: "قَلِيْلًا", lemma: "قليل", pos: "adv", features: "indef.acc", root: "ق ل ل", gloss: "a little" }
          ]
        },
        {
          id: "qr2-34-028",
          ar: "حَتَّى حَضَرَ الطَّبِيْبُ فَجَسَّ يَدَ حُسَيْنٍ،",
          en: "when the doctor arrived and felt Husayn's hand,",
          tokens: [
            { surface: "حَتَّى", lemma: "حتى", pos: "part", features: "part", root: "", gloss: "until, when" },
            { surface: "حَضَرَ", lemma: "حضر", pos: "verb", features: "perf.3ms", root: "ح ض ر", gloss: "arrived" },
            { surface: "الطَّبِيْبُ", lemma: "طبيب", pos: "noun", features: "def.nom", root: "ط ب ب", gloss: "the doctor" },
            { surface: "فَجَسَّ", lemma: "جس", pos: "verb", features: "conj+perf.3ms", root: "ج س س", gloss: "and felt" },
            { surface: "يَدَ", lemma: "يد", pos: "noun", features: "acc.constr", root: "ي د ي", gloss: "the hand of" },
            { surface: "حُسَيْنٍ", lemma: "حسين", pos: "proper", features: "indef.gen", root: "", gloss: "Husayn" }
          ]
        },
        {
          id: "qr2-34-029",
          ar: "وَقَاسَ الْحَرَارَةَ،",
          en: "took his temperature,",
          tokens: [
            { surface: "وَقَاسَ", lemma: "قاس", pos: "verb", features: "conj+perf.3ms", root: "ق ي س", gloss: "and measured" },
            { surface: "الْحَرَارَةَ", lemma: "حرارة", pos: "noun", features: "def.acc", root: "ح ر ر", gloss: "the temperature" }
          ]
        },
        {
          id: "qr2-34-030",
          ar: "وَامْتَحَنَ الصَّدْرَ بِالسَّمَّاعَةِ،",
          en: "and examined his chest with the stethoscope,",
          tokens: [
            { surface: "وَامْتَحَنَ", lemma: "امتحن", pos: "verb", features: "conj+perf.3ms", root: "م ح ن", gloss: "and examined" },
            { surface: "الصَّدْرَ", lemma: "صدر", pos: "noun", features: "def.acc", root: "ص د ر", gloss: "the chest" },
            { surface: "بِالسَّمَّاعَةِ", lemma: "سماعة", pos: "noun", features: "prep+def.gen", root: "س م ع", gloss: "with the stethoscope" }
          ]
        },
        {
          id: "qr2-34-031",
          ar: "وَأَبْدَى الِارْتِيَاحَ،",
          en: "He showed relief,",
          tokens: [
            { surface: "وَأَبْدَى", lemma: "أبدى", pos: "verb", features: "conj+perf.3ms", root: "ب د و", gloss: "and showed" },
            { surface: "الِارْتِيَاحَ", lemma: "ارتياح", pos: "noun", features: "def.acc", root: "ر و ح", gloss: "the relief" }
          ]
        },
        {
          id: "qr2-34-032",
          ar: "وَغَيَّرَ فِي الْوَصْفَةِ قَلِيْلًا،",
          en: "and changed the prescription slightly,",
          tokens: [
            { surface: "وَغَيَّرَ", lemma: "غير", pos: "verb", features: "conj+perf.3ms", root: "غ ي ر", gloss: "and changed" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْوَصْفَةِ", lemma: "وصفة", pos: "noun", features: "def.gen", root: "و ص ف", gloss: "the prescription" },
            { surface: "قَلِيْلًا", lemma: "قليل", pos: "adv", features: "indef.acc", root: "ق ل ل", gloss: "a little" }
          ]
        },
        {
          id: "qr2-34-033",
          ar: "وَقَالَ: إِنَّهُ بَارِئٌ بِحَمْدِ اللهِ،",
          en: "and said: \"He is recovering, praise be to Allah,\"",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "إِنَّهُ", lemma: "إن", pos: "part", features: "part+3ms", root: "", gloss: "he is" },
            { surface: "بَارِئٌ", lemma: "بارئ", pos: "adj", features: "indef.nom", root: "ب ر أ", gloss: "recovering" },
            { surface: "بِحَمْدِ", lemma: "حمد", pos: "noun", features: "prep+gen.constr", root: "ح م د", gloss: "by the praise of" },
            { surface: "اللهِ", lemma: "الله", pos: "proper", features: "def.gen", root: "", gloss: "Allah" }
          ]
        },
        {
          id: "qr2-34-034",
          ar: "وَأَوْصَى أَبَاهُ بِأَنْ يَحْمِيَ حُسَيْنًا الْمَاءَ الْبَارِدَ وَالزَّيْتَ وَالْخُرُوْجَ فِي الْهَوَاءِ وَالتَّعَبَ،",
          en: "and instructed his father to keep Husayn away from cold water, oil, going out in the open air, and exertion,",
          tokens: [
            { surface: "وَأَوْصَى", lemma: "أوصى", pos: "verb", features: "conj+perf.3ms", root: "و ص ي", gloss: "and instructed" },
            { surface: "أَبَاهُ", lemma: "أب", pos: "noun", features: "acc+3ms", root: "أ ب و", gloss: "his father" },
            { surface: "بِأَنْ", lemma: "أن", pos: "part", features: "prep+part", root: "", gloss: "to" },
            { surface: "يَحْمِيَ", lemma: "حمى-فعل", pos: "verb", features: "subj.3ms", root: "ح م ي", gloss: "keep away, protect" },
            { surface: "حُسَيْنًا", lemma: "حسين", pos: "proper", features: "indef.acc", root: "", gloss: "Husayn" },
            { surface: "الْمَاءَ", lemma: "ماء", pos: "noun", features: "def.acc", root: "م و ه", gloss: "the water" },
            { surface: "الْبَارِدَ", lemma: "بارد", pos: "adj", features: "def.acc", root: "ب ر د", gloss: "the cold" },
            { surface: "وَالزَّيْتَ", lemma: "زيت", pos: "noun", features: "conj+def.acc", root: "ز ي ت", gloss: "and the oil" },
            { surface: "وَالْخُرُوْجَ", lemma: "خروج", pos: "noun", features: "conj+def.acc", root: "خ ر ج", gloss: "and the going out" },
            { surface: "فِي", lemma: "في", pos: "prep", features: "prep", root: "", gloss: "in" },
            { surface: "الْهَوَاءِ", lemma: "هواء", pos: "noun", features: "def.gen", root: "ه و ي", gloss: "the open air" },
            { surface: "وَالتَّعَبَ", lemma: "تعب", pos: "noun", features: "conj+def.acc", root: "ت ع ب", gloss: "and exertion" }
          ]
        },
        {
          id: "qr2-34-035",
          ar: "وَيَسْقِيَهُ اللَّبَنَ وَمَاءَ الشَّعِيْرِ وَمَاءَ الْفَوَاكِهِ.",
          en: "and to give him milk, barley water, and fruit juice to drink.",
          tokens: [
            { surface: "وَيَسْقِيَهُ", lemma: "سقى", pos: "verb", features: "conj+subj.3ms+3ms", root: "س ق ي", gloss: "and give him to drink" },
            { surface: "اللَّبَنَ", lemma: "لبن", pos: "noun", features: "def.acc", root: "ل ب ن", gloss: "the milk" },
            { surface: "وَمَاءَ", lemma: "ماء", pos: "noun", features: "conj+acc.constr", root: "م و ه", gloss: "and the water of" },
            { surface: "الشَّعِيْرِ", lemma: "شعير", pos: "noun", features: "def.gen", root: "ش ع ر", gloss: "the barley" },
            { surface: "وَمَاءَ", lemma: "ماء", pos: "noun", features: "conj+acc.constr", root: "م و ه", gloss: "and the water of" },
            { surface: "الْفَوَاكِهِ", lemma: "فواكه", pos: "noun", features: "def.gen", root: "ف ك ه", gloss: "the fruits" }
          ]
        }
      ],
      checks: [
        {
          q: "مَاذَا فَعَلَ الطَّبِيْبُ عِنْدَ فَحْصِ حُسَيْنٍ؟",
          options: ["جَسَّ يَدَهُ وَقَاسَ الْحَرَارَةَ وَامْتَحَنَ الصَّدْرَ", "أَعْطَاهُ حُقْنَةً فَقَطْ", "أَخَذَهُ إِلَى الْمُسْتَشْفَىٰ"],
          answer: 0,
          qEn: "What did the doctor do when examining Husayn?",
          optionsEn: ["Felt his hand, took his temperature, and examined his chest", "Just gave him an injection", "Took him to the hospital"]
        }
      ]
    },
    {
      en: "Hamid sat a little while, then said: \"If a visitor prolongs his sitting with the sick person, it becomes burdensome for him and for his household, so I ask permission and take my leave, and I will come back tomorrow, God willing.\"",
      sentences: [
        {
          id: "qr2-34-036",
          ar: "وَجَلَسَ حَامِدٌ قَلِيْلًا،",
          en: "Hamid sat a little while,",
          tokens: [
            { surface: "وَجَلَسَ", lemma: "جلس", pos: "verb", features: "conj+perf.3ms", root: "ج ل س", gloss: "and sat" },
            { surface: "حَامِدٌ", lemma: "حامد", pos: "proper", features: "indef.nom", root: "", gloss: "Hamid" },
            { surface: "قَلِيْلًا", lemma: "قليل", pos: "adv", features: "indef.acc", root: "ق ل ل", gloss: "a little" }
          ]
        },
        {
          id: "qr2-34-037",
          ar: "وَقَالَ: إِنَّ الْعَائِدَ إِذَا أَطَالَ الْجُلُوْسَ عِنْدَ الْمَرِيْضِ،",
          en: "then said: \"If a visitor prolongs his sitting with the sick person,\"",
          tokens: [
            { surface: "وَقَالَ", lemma: "قال", pos: "verb", features: "conj+perf.3ms", root: "ق و ل", gloss: "and said" },
            { surface: "إِنَّ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "indeed" },
            { surface: "الْعَائِدَ", lemma: "عائد", pos: "noun", features: "def.acc", root: "ع و د", gloss: "the visitor" },
            { surface: "إِذَا", lemma: "إذا", pos: "part", features: "part", root: "", gloss: "if, when" },
            { surface: "أَطَالَ", lemma: "طال", pos: "verb", features: "perf.3ms", root: "ط و ل", gloss: "prolongs" },
            { surface: "الْجُلُوْسَ", lemma: "جلوس", pos: "noun", features: "def.acc", root: "ج ل س", gloss: "the sitting" },
            { surface: "عِنْدَ", lemma: "عند", pos: "prep", features: "prep", root: "", gloss: "with, at" },
            { surface: "الْمَرِيْضِ", lemma: "مريض", pos: "noun", features: "def.gen", root: "م ر ض", gloss: "the sick person" }
          ]
        },
        {
          id: "qr2-34-038",
          ar: "شَقَّ عَلَيْهِ وَعَلَى أَهْلِ بَيْتِهِ،",
          en: "it becomes burdensome for him and for his household,",
          tokens: [
            { surface: "شَقَّ", lemma: "شق", pos: "verb", features: "perf.3ms", root: "ش ق ق", gloss: "became burdensome" },
            { surface: "عَلَيْهِ", lemma: "على", pos: "prep", features: "prep+3ms", root: "", gloss: "for him" },
            { surface: "وَعَلَى", lemma: "على", pos: "prep", features: "conj+prep", root: "", gloss: "and for" },
            { surface: "أَهْلِ", lemma: "أهل", pos: "noun", features: "gen.constr", root: "أ ه ل", gloss: "the people of" },
            { surface: "بَيْتِهِ", lemma: "بيت", pos: "noun", features: "gen+3ms", root: "ب ي ت", gloss: "his house" }
          ]
        },
        {
          id: "qr2-34-039",
          ar: "فَأَسْتَأْذِنُ وَأَنْصَرِفُ،",
          en: "so I ask permission and take my leave,",
          tokens: [
            { surface: "فَأَسْتَأْذِنُ", lemma: "استأذن", pos: "verb", features: "conj+impf.1s", root: "أ ذ ن", gloss: "so I ask permission" },
            { surface: "وَأَنْصَرِفُ", lemma: "انصرف", pos: "verb", features: "conj+impf.1s", root: "ص ر ف", gloss: "and I depart" }
          ]
        },
        {
          id: "qr2-34-040",
          ar: "وَأَعُوْدُ إِنْ شَاءَ اللهُ غَدًا.",
          en: "and I will come back tomorrow, God willing.\"",
          tokens: [
            { surface: "وَأَعُوْدُ", lemma: "عاد", pos: "verb", features: "conj+impf.1s", root: "ع و د", gloss: "and I will return" },
            { surface: "إِنْ", lemma: "إن", pos: "part", features: "part", root: "", gloss: "if" },
            { surface: "شَاءَ", lemma: "شاء", pos: "verb", features: "perf.3ms", root: "ش ي أ", gloss: "wills" },
            { surface: "اللهُ", lemma: "الله", pos: "proper", features: "def.nom", root: "", gloss: "Allah" },
            { surface: "غَدًا", lemma: "غدا", pos: "adv", features: "indef.acc", root: "غ د و", gloss: "tomorrow" }
          ]
        }
      ],
      checks: [
        {
          q: "لِمَاذَا لَمْ يُطِلِ الْجُلُوْسَ حَامِدٌ عِنْدَ صَدِيْقِهِ الْمَرِيْضِ؟",
          options: ["لِأَنَّ إِطَالَةَ الْجُلُوْسِ تَشُقُّ عَلَى الْمَرِيْضِ وَأَهْلِهِ", "لِأَنَّهُ كَانَ مُتْعَبًا", "لِأَنَّ الطَّبِيْبَ طَلَبَ مِنْهُ ذٰلِكَ"],
          answer: 0,
          qEn: "Why didn't Hamid prolong his sitting with his sick friend?",
          optionsEn: ["Because prolonging the visit is burdensome for the patient and his family", "Because he was tired", "Because the doctor asked him to leave"]
        }
      ]
    }
  ]
};

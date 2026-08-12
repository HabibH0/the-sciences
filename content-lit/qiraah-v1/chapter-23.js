// القراءة الراشدة, volume one, chapter twenty-three -- جَزَاءُ الْوَالِدَيْنِ.
//
// Follows the shape of chapter-01.js/chapter-22.js -- see
// ../CHAPTER-FORMAT.md. Hand-authored (vision-model OCR, checked against
// the scan) from qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed
// pages 90-91. No JSON intermediate. newWords is checked only against
// chapters 1-10 and 21-22, the sibling modules on disk at the time of
// writing -- re-check against 11-20 once they exist.
//
// First-person retrospective narrative -- a grown son recalling his
// mother's and father's care from infancy onward, closing on the duʿāʾ
// echoing Qur'an 17:24 ("رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِيْ صَغِيْرًا"). The ﷺ
// honorific (sentence 023) is excluded from tokens and stripped for
// reconstruction, same convention as chapter-07.js/chapter-22.js.
//
// Homograph notes (same pattern as chapter-05.js/-21.js/-22.js): three
// verbs here share a root/skeleton with an already-established NOUN
// lemma of a different sense, so each is keyed with a "-فعل" suffix to
// avoid overwriting that noun entry:
//   - "ولد-فعل" (verb, "to be born") vs. "ولد" (chapter-02.js's noun,
//     "child, boy").
//   - "قدر-فعل" (verb, "to be able") vs. "قدر" (chapter-06.js's noun,
//     "cooking-pot" -- unrelated word, same bare consonant skeleton).
//   - "مرض-فعل" (verb, "to fall ill") vs. "مرض" (chapter-02.js's noun,
//     "sickness, illness").
// Separately, "سكت" (verb, "to fall silent", sentence 011/012) and
// "أسكت" (verb, "to silence someone", sentence 011) are form-I/form-IV
// pairs on the same root and are kept as two distinct lemmas since both
// appear in this chapter -- not a collision, just two real words.
//
// "بُنَيَّ" (sentence 011, the mother's "يَا بُنَيَّ" -- "O my little son!")
// is kept as its own lemma "بني" rather than folded into the existing
// "ابن" ("son"): the diminutive pattern is different enough in form and
// register (an endearment, not the plain noun) that treating it as the
// same headword would be misleading in the word card.
export const CHAPTER = {
  "id": "ch23",
  "number": 23,
  "title": {
    "ar": "جَزَاءُ الْوَالِدَيْنِ",
    "en": "The Reward of Parents"
  },
  "pages": [
    90,
    91,
    92
  ],
  "register": "first_person_retrospective_narrative",
  "newWords": [
    "ولد-فعل",
    "ضعيف",
    "قدر-فعل",
    "اكل",
    "فهم",
    "حنا",
    "ارضع",
    "هجر",
    "راحة",
    "سهر",
    "بني",
    "اهتم",
    "بال",
    "سكت",
    "أسكت",
    "شكا",
    "وجع",
    "أغضب",
    "بكى",
    "ضاحك",
    "خامس",
    "ابراهيم",
    "القى",
    "نار",
    "صار",
    "برد",
    "نشأ",
    "موسى",
    "فرعون",
    "حليمة",
    "سعدية",
    "اية",
    "كرسي",
    "اخير",
    "بقرة",
    "اب",
    "مرض-فعل",
    "أصاب",
    "ضرر",
    "الم",
    "خبر",
    "هم",
    "حزن",
    "امكن",
    "أجازي",
    "بدن",
    "أقارب",
    "بر",
    "ذاق",
    "اغتبط",
    "غبط",
    "توج",
    "شهيد",
    "شهادة",
    "شفع",
    "رزق",
    "فلان",
    "فلانة",
    "سعيد"
  ],
  "lemmas": {
    "ولد-فعل": { "root": "و ل د", "pos": "verb", "gloss": "to give birth to; (pass.) to be born", "content": true },
    "ضعيف": { "root": "ض ع ف", "pos": "adj", "gloss": "weak", "content": true },
    "قدر-فعل": { "root": "ق د ر", "pos": "verb", "gloss": "to be able", "content": true },
    "على": { "root": "—", "pos": "prep", "gloss": "upon, to", "content": false },
    "عمل": { "root": "ع م ل", "pos": "noun", "gloss": "work, deed", "content": true },
    "لا": { "root": "—", "pos": "part", "gloss": "not", "content": false },
    "اكل": { "root": "أ ك ل", "pos": "verb", "gloss": "to eat", "content": true },
    "نفس": { "root": "ن ف س", "pos": "noun", "gloss": "self, soul", "content": true },
    "شرب": { "root": "ش ر ب", "pos": "verb", "gloss": "to drink", "content": true },
    "تكلم": { "root": "ك ل م", "pos": "verb", "gloss": "to speak", "content": true },
    "فهم": { "root": "ف ه م", "pos": "verb", "gloss": "to understand", "content": true },
    "حنا": { "root": "ح ن و", "pos": "verb", "gloss": "to be tender, compassionate towards", "content": true, "book_note": "حَنَا يَحْنُوْ: الأم على ابنها: عَطَفت عليه." },
    "أم": { "root": "أ م م", "pos": "noun", "gloss": "mother", "content": true },
    "ارضع": { "root": "ر ض ع", "pos": "verb", "gloss": "to nurse, breastfeed", "content": true },
    "نسي": { "root": "ن س ي", "pos": "verb", "gloss": "to forget", "content": true },
    "هجر": { "root": "ه ج ر", "pos": "verb", "gloss": "to abandon, leave", "content": true },
    "راحة": { "root": "ر و ح", "pos": "noun", "gloss": "rest, comfort", "content": true },
    "كم": { "root": "—", "pos": "part", "gloss": "how much, how many", "content": true },
    "سهر": { "root": "س ه ر", "pos": "verb", "gloss": "to stay up at night, be sleepless", "content": true },
    "ليلة": { "root": "ل ي ل", "pos": "noun", "gloss": "a night", "content": true },
    "تعب": { "root": "ت ع ب", "pos": "verb", "gloss": "to grow tired, toil", "content": true },
    "نهار": { "root": "ن ه ر", "pos": "noun", "gloss": "daytime", "content": true },
    "كان": { "root": "ك و ن", "pos": "verb", "gloss": "to be", "content": true },
    "شغل": { "root": "ش غ ل", "pos": "noun", "gloss": "occupation, preoccupation", "content": true },
    "حديث": { "root": "ح د ث", "pos": "noun", "gloss": "talk, account, story", "content": true },
    "مرض-فعل": { "root": "م ر ض", "pos": "verb", "gloss": "to fall ill", "content": true },
    "طار": { "root": "ط ي ر", "pos": "verb", "gloss": "to fly; (fig.) to flee, vanish", "content": true },
    "عن": { "root": "—", "pos": "prep", "gloss": "from", "content": false },
    "نوم": { "root": "ن و م", "pos": "noun", "gloss": "sleep", "content": true },
    "ما": { "root": "—", "pos": "part", "gloss": "not", "content": false },
    "ذاق": { "root": "ذ و ق", "pos": "verb", "gloss": "to taste", "content": true },
    "طعام": { "root": "ط ع م", "pos": "noun", "gloss": "food", "content": true },
    "شراب": { "root": "ش ر ب", "pos": "noun", "gloss": "drink", "content": true },
    "سكت": { "root": "س ك ت", "pos": "verb", "gloss": "to fall silent", "content": true },
    "اهتم": { "root": "ه م م", "pos": "verb", "gloss": "to become anxious, concerned", "content": true },
    "قال": { "root": "ق و ل", "pos": "verb", "gloss": "to say", "content": true },
    "بال": { "root": "ب و ل", "pos": "noun", "gloss": "state, mind", "content": true },
    "بني": { "root": "ب ن ي", "pos": "noun", "gloss": "my little son, my dear son", "content": true },
    "أسكت": { "root": "س ك ت", "pos": "verb", "gloss": "to silence, make fall quiet", "content": true },
    "لماذا": { "root": "—", "pos": "adv", "gloss": "why", "content": true },
    "شكا": { "root": "ش ك و", "pos": "verb", "gloss": "to complain of", "content": true },
    "وجع": { "root": "و ج ع", "pos": "noun", "gloss": "pain, ache", "content": true, "book_note": "وَجَع جمع أَوْجَاع: أَلَم (اسم جامع لكل مَرَض وَأَلَمٍ)" },
    "أو": { "root": "—", "pos": "conj", "gloss": "or", "content": false },
    "أغضب": { "root": "غ ض ب", "pos": "verb", "gloss": "to anger, make angry", "content": true },
    "أحد": { "root": "أ ح د", "pos": "noun", "gloss": "someone, anyone", "content": true },
    "بكى": { "root": "ب ك ي", "pos": "verb", "gloss": "to cry, weep", "content": true },
    "جاء": { "root": "ج ي أ", "pos": "verb", "gloss": "to come", "content": true },
    "جرى": { "root": "ج ر ي", "pos": "verb", "gloss": "to run", "content": true },
    "ليل": { "root": "ل ي ل", "pos": "noun", "gloss": "night", "content": true },
    "مع": { "root": "—", "pos": "prep", "gloss": "with", "content": false },
    "ضاحك": { "root": "ض ح ك", "pos": "verb", "gloss": "to joke with, make laugh", "content": true },
    "لما": { "root": "—", "pos": "part", "gloss": "when", "content": false },
    "دخل": { "root": "د خ ل", "pos": "verb", "gloss": "to enter", "content": true },
    "سنة": { "root": "س ن و", "pos": "noun", "gloss": "year", "content": true },
    "خامس": { "root": "خ م س", "pos": "num", "gloss": "fifth", "content": true },
    "تحدث": { "root": "ح د ث", "pos": "verb", "gloss": "to converse, talk", "content": true },
    "قد": { "root": "—", "pos": "part", "gloss": "already, indeed", "content": false },
    "عرف": { "root": "ع ر ف", "pos": "verb", "gloss": "to know", "content": true },
    "الله": { "root": "—", "pos": "proper", "gloss": "Allah", "content": true },
    "رسول": { "root": "ر س ل", "pos": "noun", "gloss": "messenger", "content": true },
    "في": { "root": "—", "pos": "prep", "gloss": "in", "content": false },
    "سمع": { "root": "س م ع", "pos": "verb", "gloss": "to hear, listen to", "content": true },
    "قصة": { "root": "ق ص ص", "pos": "noun", "gloss": "story", "content": true },
    "كثير": { "root": "ك ث ر", "pos": "adj", "gloss": "much, many", "content": true },
    "أنا": { "root": "—", "pos": "noun", "gloss": "I", "content": false },
    "فراش": { "root": "ف ر ش", "pos": "noun", "gloss": "bedding, mattress", "content": true },
    "ابراهيم": { "root": "—", "pos": "proper", "gloss": "Ibrahim (Abraham)", "content": true },
    "كيف": { "root": "ك ي ف", "pos": "part", "gloss": "how", "content": true },
    "القى": { "root": "ل ق ي", "pos": "verb", "gloss": "to throw; (pass.) be thrown", "content": true },
    "نار": { "root": "ن و ر", "pos": "noun", "gloss": "fire", "content": true },
    "صار": { "root": "ص ي ر", "pos": "verb", "gloss": "to become", "content": true },
    "برد": { "root": "ب ر د", "pos": "noun", "gloss": "coolness", "content": true },
    "سلام": { "root": "س ل م", "pos": "noun", "gloss": "peace", "content": true },
    "نشأ": { "root": "ن ش أ", "pos": "verb", "gloss": "to grow up", "content": true },
    "موسى": { "root": "—", "pos": "proper", "gloss": "Musa (Moses)", "content": true },
    "قصر": { "root": "ق ص ر", "pos": "noun", "gloss": "palace", "content": true },
    "فرعون": { "root": "—", "pos": "proper", "gloss": "Pharaoh", "content": true },
    "حليمة": { "root": "—", "pos": "proper", "gloss": "Halimah (a name)", "content": true },
    "سعدية": { "root": "—", "pos": "proper", "gloss": "as-Sa'diyyah (Halimah's tribal name)", "content": true },
    "جميل": { "root": "ج م ل", "pos": "adj", "gloss": "beautiful, nice", "content": true },
    "حفظ": { "root": "ح ف ظ", "pos": "verb", "gloss": "to memorise", "content": true },
    "اية": { "root": "أ ي ي", "pos": "noun", "gloss": "verse (of the Qur'an)", "content": true },
    "كرسي": { "root": "ك ر س", "pos": "noun", "gloss": "chair, throne", "content": true },
    "اخير": { "root": "أ خ ر", "pos": "adj", "gloss": "last, final", "content": true },
    "من": { "root": "—", "pos": "prep", "gloss": "from, of", "content": false },
    "سورة": { "root": "س و ر", "pos": "noun", "gloss": "chapter (of the Qur'an)", "content": true },
    "بقرة": { "root": "—", "pos": "proper", "gloss": "al-Baqarah (\"The Cow\", a Surah)", "content": true },
    "دعاء": { "root": "د ع و", "pos": "noun", "gloss": "supplication", "content": true },
    "عالم": { "root": "ع ل م", "pos": "noun", "gloss": "scholar", "content": true },
    "طفل": { "root": "ط ف ل", "pos": "noun", "gloss": "child", "content": true },
    "اب": { "root": "أ ب و", "pos": "noun", "gloss": "father", "content": true },
    "أحب": { "root": "ح ب ب", "pos": "verb", "gloss": "to like, love", "content": true },
    "صغر": { "root": "ص غ ر", "pos": "adj", "gloss": "small, young", "content": true },
    "أخ": { "root": "أ خ و", "pos": "noun", "gloss": "brother", "content": true },
    "بات": { "root": "ب ي ت", "pos": "verb", "gloss": "to spend the night", "content": true },
    "سفر": { "root": "س ف ر", "pos": "noun", "gloss": "travel, a journey", "content": true },
    "اشترى": { "root": "ش ر ي", "pos": "verb", "gloss": "to buy", "content": true },
    "هدية": { "root": "ه د ي", "pos": "noun", "gloss": "gift", "content": true },
    "ناس": { "root": "ن و س", "pos": "noun", "gloss": "people", "content": true },
    "قرب": { "root": "ق ر ب", "pos": "verb", "gloss": "to bring near, draw close", "content": true },
    "الى": { "root": "—", "pos": "prep", "gloss": "to", "content": false },
    "مكان": { "root": "ك و ن", "pos": "noun", "gloss": "place, standing", "content": true },
    "قرأ": { "root": "ق ر أ", "pos": "verb", "gloss": "to read", "content": true },
    "ايضا": { "root": "—", "pos": "adv", "gloss": "also", "content": true },
    "هو": { "root": "—", "pos": "noun", "gloss": "he, it", "content": false },
    "معلم": { "root": "ع ل م", "pos": "noun", "gloss": "teacher", "content": true },
    "وصى": { "root": "و ص ي", "pos": "verb", "gloss": "to instruct, charge (someone) to do", "content": true },
    "كسا": { "root": "ك س و", "pos": "verb", "gloss": "to clothe, dress", "content": true, "book_note": "كَسَا يَكْسُو: أَلْبَسَه ثَوْبًا" },
    "يوم": { "root": "ي و م", "pos": "noun", "gloss": "day", "content": true },
    "عيد": { "root": "ع و د", "pos": "noun", "gloss": "festival, 'Eid", "content": true },
    "لباس": { "root": "ل ب س", "pos": "noun", "gloss": "clothing", "content": true },
    "جديد": { "root": "ج د د", "pos": "adj", "gloss": "new", "content": true },
    "سقط": { "root": "س ق ط", "pos": "verb", "gloss": "to fall", "content": true },
    "أصاب": { "root": "ص و ب", "pos": "verb", "gloss": "to afflict, befall", "content": true },
    "ضرر": { "root": "ض ر ر", "pos": "noun", "gloss": "harm", "content": true },
    "الم": { "root": "أ ل م", "pos": "noun", "gloss": "pain", "content": true },
    "خبر": { "root": "خ ب ر", "pos": "noun", "gloss": "news, word (of something)", "content": true },
    "هم": { "root": "ه م م", "pos": "noun", "gloss": "worry, care", "content": true },
    "حزن": { "root": "ح ز ن", "pos": "noun", "gloss": "grief, sorrow", "content": true },
    "أجازي": { "root": "ج ز ي", "pos": "verb", "gloss": "to repay, recompense", "content": true, "book_note": "أَجَازَ يُجَازِي: أعطى جائزة." },
    "هذه": { "root": "—", "pos": "dem", "gloss": "this (f.)", "content": false },
    "نعمة": { "root": "ن ع م", "pos": "noun", "gloss": "blessing, favour", "content": true },
    "هل": { "root": "—", "pos": "part", "gloss": "[yes/no question particle]", "content": false },
    "امكن": { "root": "م ك ن", "pos": "verb", "gloss": "to be possible", "content": true },
    "أن": { "root": "—", "pos": "part", "gloss": "that", "content": false },
    "مال": { "root": "م و ل", "pos": "noun", "gloss": "wealth, money", "content": true },
    "كلا": { "root": "—", "pos": "part", "gloss": "no, certainly not", "content": true },
    "والد": { "root": "و ل د", "pos": "noun", "gloss": "parent", "content": true },
    "نعم": { "root": "—", "pos": "part", "gloss": "yes", "content": false },
    "خدم": { "root": "خ د م", "pos": "verb", "gloss": "to serve", "content": true },
    "بدن": { "root": "ب د ن", "pos": "noun", "gloss": "body", "content": true },
    "بل": { "root": "—", "pos": "part", "gloss": "rather", "content": false },
    "وصل": { "root": "و ص ل", "pos": "verb", "gloss": "to keep ties with, stay connected to", "content": true },
    "صديق": { "root": "ص د ق", "pos": "noun", "gloss": "friend", "content": true },
    "أقارب": { "root": "ق ر ب", "pos": "noun", "gloss": "relatives, kin", "content": true },
    "بر": { "root": "ب ر ر", "pos": "noun", "gloss": "devotion, kindness, piety", "content": true },
    "معروف": { "root": "ع ر ف", "pos": "noun", "gloss": "what is right, good conduct", "content": true },
    "لكن": { "root": "—", "pos": "part", "gloss": "but", "content": false },
    "دعا": { "root": "د ع و", "pos": "verb", "gloss": "to pray for, invoke blessing upon", "content": true },
    "دائما": { "root": "د و م", "pos": "adv", "gloss": "always", "content": true },
    "رب": { "root": "ر ب ب", "pos": "noun", "gloss": "Lord", "content": true },
    "رحم": { "root": "ر ح م", "pos": "verb", "gloss": "to have mercy on", "content": true },
    "ربى": { "root": "ر ب و", "pos": "verb", "gloss": "to raise, bring up", "content": true },
    "اغتبط": { "root": "غ ب ط", "pos": "verb", "gloss": "to take joy, be delighted", "content": true, "book_note": "اغْتَبَطَ يَغْتَبِطُ: فَرِحَ بِالنعمة." },
    "غبط": { "root": "غ ب ط", "pos": "verb", "gloss": "to envy", "content": true },
    "فلان": { "root": "—", "pos": "noun", "gloss": "so-and-so", "content": true },
    "فلانة": { "root": "—", "pos": "noun", "gloss": "so-and-so (fem.)", "content": true },
    "سعيد": { "root": "س ع د", "pos": "adj", "gloss": "fortunate, happy", "content": true },
    "شاهد": { "root": "ش ه د", "pos": "noun", "gloss": "witness", "content": true },
    "قرآن": { "root": "ق ر أ", "pos": "proper", "gloss": "the Quran", "content": true },
    "توج": { "root": "ت و ج", "pos": "verb", "gloss": "to crown", "content": true, "book_note": "تُوِّجَ يُتَوَّجُ: أَلْبَسَهُ التَّاجَ." },
    "شهيد": { "root": "ش ه د", "pos": "noun", "gloss": "martyr", "content": true },
    "شهادة": { "root": "ش ه د", "pos": "noun", "gloss": "martyrdom", "content": true },
    "شفع": { "root": "ش ف ع", "pos": "verb", "gloss": "to intercede", "content": true },
    "رزق": { "root": "ر ز ق", "pos": "verb", "gloss": "to grant, provide", "content": true },
    "ذلك": { "root": "—", "pos": "noun", "gloss": "that", "content": false },
    "قبل": { "root": "—", "pos": "prep", "gloss": "before", "content": false },
    "اجتهد": { "root": "ج ه د", "pos": "verb", "gloss": "to strive, try hard", "content": true },
    "شاء": { "root": "ش ي أ", "pos": "verb", "gloss": "to will, wish", "content": true },
    "إن": { "root": "—", "pos": "part", "gloss": "if; indeed, verily", "content": false },
    "أن": { "root": "—", "pos": "part", "gloss": "that, because", "content": false },
    "قيامة": { "root": "ق و م", "pos": "noun", "gloss": "Resurrection", "content": true },
    "امام": { "root": "—", "pos": "prep", "gloss": "before, in front of", "content": false },
    "صاحب": { "root": "ص ح ب", "pos": "noun", "gloss": "owner, possessor", "content": true },
    "مثل": { "root": "م ث ل", "pos": "noun", "gloss": "the like of", "content": true },
    "ليت": { "root": "—", "pos": "part", "gloss": "if only, would that", "content": false },
    "آتى": { "root": "أ ت ي", "pos": "verb", "gloss": "to give", "content": true },
    "عمل-فعل": { "root": "ع م ل", "pos": "verb", "gloss": "to do, perform", "content": true },
    "نادى": { "root": "ن د و", "pos": "verb", "gloss": "to call out", "content": true },
    "من-اسم": { "root": "—", "pos": "noun", "gloss": "who, whoever", "content": false },
    "نعم-فعل": { "root": "ن ع م", "pos": "verb", "gloss": "to be at ease, be blessed", "content": true },
    "حفظ-اسم": { "root": "ح ف ظ", "pos": "noun", "gloss": "memorization, memorizing", "content": true },
    "لعل": { "root": "—", "pos": "part", "gloss": "perhaps", "content": false },
    "اهل": { "root": "أ ه ل", "pos": "noun", "gloss": "people, family", "content": true },
    "سبعون": { "root": "س ب ع", "pos": "num", "gloss": "seventy", "content": true },
    "بيت": { "root": "ب ي ت", "pos": "noun", "gloss": "house, household", "content": true },
    "ولد": { "root": "و ل د", "pos": "noun", "gloss": "child, boy", "content": true },
    "ابن": { "root": "ب ن ي", "pos": "noun", "gloss": "son", "content": true },
    "رأس": { "root": "ر أ س", "pos": "noun", "gloss": "head", "content": true },
    "بعض": { "root": "ب ع ض", "pos": "noun", "gloss": "some", "content": true },
    "ب": { "root": "—", "pos": "prep", "gloss": "with, by, through", "content": false },
    "ما-موصول": { "root": "—", "pos": "rel", "gloss": "what, that which", "content": false }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "I was born small and weak, unable to do anything -- I could not feed myself or drink for myself, and I could not speak or understand. So my mother was tender towards me: she nursed me, forgot herself for my sake, and gave up her own rest for mine. How many nights she stayed up, how she wore herself out by day! I was her whole occupation and her whole conversation. Whenever I fell ill, sleep fled from her, and she tasted no food and no drink. And whenever I fell silent, she grew anxious and said: \"What is wrong with you, my little one! What has silenced you? Why aren't you speaking -- are you complaining of some pain, or has someone upset you?\" And whenever I cried she came running, and at night she would talk with me and make me laugh.",
      "sentences": [
        { "id": "qr1-23-001", "page": 90, "ar": "وُلِدْتُ صَغِيْرًا ضَعِيْفًا لَا أَقْدِرُ عَلَىٰ عَمَلٍ،", "en": "I was born small and weak, unable to do anything,",
          "tokens": [
            { "surface": "وُلِدْتُ", "lemma": "ولد-فعل", "features": "pass.perf.1s", "root": "و ل د", "pos": "verb", "gloss": "I was born" },
            { "surface": "صَغِيْرًا", "lemma": "صغر", "features": "indef.acc", "root": "ص غ ر", "pos": "adj", "gloss": "small" },
            { "surface": "ضَعِيْفًا", "lemma": "ضعيف", "features": "indef.acc", "root": "ض ع ف", "pos": "adj", "gloss": "weak" },
            { "surface": "لَا", "lemma": "لا", "features": "part", "root": "—", "pos": "part", "gloss": "not" },
            { "surface": "أَقْدِرُ", "lemma": "قدر-فعل", "features": "impf.1s", "root": "ق د ر", "pos": "verb", "gloss": "I am able" },
            { "surface": "عَلَىٰ", "lemma": "على", "features": "prep", "root": "—", "pos": "prep", "gloss": "to" },
            { "surface": "عَمَلٍ", "lemma": "عمل", "features": "indef.gen", "root": "ع م ل", "pos": "noun", "gloss": "work, deed" }
          ]
        },
        { "id": "qr1-23-002", "page": 90, "ar": "لَا آكُلُ بِنَفْسِيْ وَلَا أَشْرَبُ بِنَفْسِيْ،", "en": "I could not feed myself or drink for myself,",
          "tokens": [
            { "surface": "لَا", "lemma": "لا", "features": "part", "root": "—", "pos": "part", "gloss": "not" },
            { "surface": "آكُلُ", "lemma": "اكل", "features": "impf.1s", "root": "أ ك ل", "pos": "verb", "gloss": "I eat" },
            { "surface": "بِنَفْسِيْ", "lemma": "نفس", "features": "prep+gen+1s", "root": "ن ف س", "pos": "noun", "gloss": "by myself" },
            { "surface": "وَلَا", "lemma": "لا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and not" },
            { "surface": "أَشْرَبُ", "lemma": "شرب", "features": "impf.1s", "root": "ش ر ب", "pos": "verb", "gloss": "I drink" },
            { "surface": "بِنَفْسِيْ", "lemma": "نفس", "features": "prep+gen+1s", "root": "ن ف س", "pos": "noun", "gloss": "for myself" }
          ]
        },
        { "id": "qr1-23-003", "page": 90, "ar": "وَلَا أَتَكَلَّمُ وَلَا أَفْهَمُ،", "en": "and I could not speak or understand,",
          "tokens": [
            { "surface": "وَلَا", "lemma": "لا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and not" },
            { "surface": "أَتَكَلَّمُ", "lemma": "تكلم", "features": "impf.1s", "root": "ك ل م", "pos": "verb", "gloss": "I speak" },
            { "surface": "وَلَا", "lemma": "لا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and not" },
            { "surface": "أَفْهَمُ", "lemma": "فهم", "features": "impf.1s", "root": "ف ه م", "pos": "verb", "gloss": "I understand" }
          ]
        },
        { "id": "qr1-23-004", "page": 90, "ar": "فَحَنَتْ عَلَيَّ أُمِّيْ وَأَرْضَعَتْنِيْ وَنَسِيَتْ نَفْسَهَا لِنَفْسِيْ،", "en": "so my mother was tender towards me, nursed me, and forgot herself for my sake,",
          "tokens": [
            { "surface": "فَحَنَتْ", "lemma": "حنا", "features": "conj+perf.3fs", "root": "ح ن و", "pos": "verb", "gloss": "and she was tender" },
            { "surface": "عَلَيَّ", "lemma": "على", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "towards me" },
            { "surface": "أُمِّيْ", "lemma": "أم", "features": "nom+1s", "root": "أ م م", "pos": "noun", "gloss": "my mother" },
            { "surface": "وَأَرْضَعَتْنِيْ", "lemma": "ارضع", "features": "conj+perf.3fs+1s", "root": "ر ض ع", "pos": "verb", "gloss": "and she nursed me" },
            { "surface": "وَنَسِيَتْ", "lemma": "نسي", "features": "conj+perf.3fs", "root": "ن س ي", "pos": "verb", "gloss": "and she forgot" },
            { "surface": "نَفْسَهَا", "lemma": "نفس", "features": "acc+3fs", "root": "ن ف س", "pos": "noun", "gloss": "herself" },
            { "surface": "لِنَفْسِيْ", "lemma": "نفس", "features": "prep+gen+1s", "root": "ن ف س", "pos": "noun", "gloss": "for my sake" }
          ]
        },
        { "id": "qr1-23-005", "page": 90, "ar": "وَهَجَرَتْ رَاحَتَهَا لِرَاحَتِيْ،", "en": "and gave up her own rest for mine,",
          "tokens": [
            { "surface": "وَهَجَرَتْ", "lemma": "هجر", "features": "conj+perf.3fs", "root": "ه ج ر", "pos": "verb", "gloss": "and she gave up" },
            { "surface": "رَاحَتَهَا", "lemma": "راحة", "features": "acc+3fs", "root": "ر و ح", "pos": "noun", "gloss": "her rest" },
            { "surface": "لِرَاحَتِيْ", "lemma": "راحة", "features": "prep+gen+1s", "root": "ر و ح", "pos": "noun", "gloss": "for my rest" }
          ]
        },
        { "id": "qr1-23-006", "page": 90, "ar": "فَكَمْ سَهِرَتِ اللَّيَالِيَ،", "en": "how many nights she stayed up,",
          "tokens": [
            { "surface": "فَكَمْ", "lemma": "كم", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and how many" },
            { "surface": "سَهِرَتِ", "lemma": "سهر", "features": "perf.3fs", "root": "س ه ر", "pos": "verb", "gloss": "she stayed up" },
            { "surface": "اللَّيَالِيَ", "lemma": "ليلة", "features": "pl.def.acc", "root": "ل ي ل", "pos": "noun", "gloss": "the nights" }
          ]
        },
        { "id": "qr1-23-007", "page": 90, "ar": "وَكَمْ تَعِبَتْ فِي النَّهَارِ،", "en": "and how she wore herself out by day,",
          "tokens": [
            { "surface": "وَكَمْ", "lemma": "كم", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and how much" },
            { "surface": "تَعِبَتْ", "lemma": "تعب", "features": "perf.3fs", "root": "ت ع ب", "pos": "verb", "gloss": "she toiled" },
            { "surface": "فِي", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "in" },
            { "surface": "النَّهَارِ", "lemma": "نهار", "features": "def.gen", "root": "ن ه ر", "pos": "noun", "gloss": "the daytime" }
          ]
        },
        { "id": "qr1-23-008", "page": 90, "ar": "وَكُنْتُ لَهَا شُغْلًا وَحَدِيْثًا،", "en": "I was her whole occupation and her whole conversation,",
          "tokens": [
            { "surface": "وَكُنْتُ", "lemma": "كان", "features": "conj+perf.1s", "root": "ك و ن", "pos": "verb", "gloss": "and I was" },
            { "surface": "لَهَا", "lemma": "ل", "features": "prep+3fs", "root": "—", "pos": "prep", "gloss": "to her" },
            { "surface": "شُغْلًا", "lemma": "شغل", "features": "indef.acc", "root": "ش غ ل", "pos": "noun", "gloss": "an occupation" },
            { "surface": "وَحَدِيْثًا", "lemma": "حديث", "features": "conj+indef.acc", "root": "ح د ث", "pos": "noun", "gloss": "and a talking-point" }
          ]
        },
        { "id": "qr1-23-009", "page": 90, "ar": "وَإِذَا مَرِضْتُ طَارَ عَنْهَا النَّوْمُ،", "en": "Whenever I fell ill, sleep fled from her,",
          "tokens": [
            { "surface": "وَإِذَا", "lemma": "اذا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and whenever" },
            { "surface": "مَرِضْتُ", "lemma": "مرض-فعل", "features": "perf.1s", "root": "م ر ض", "pos": "verb", "gloss": "I fell ill" },
            { "surface": "طَارَ", "lemma": "طار", "features": "perf.3ms", "root": "ط ي ر", "pos": "verb", "gloss": "it fled" },
            { "surface": "عَنْهَا", "lemma": "عن", "features": "prep+3fs", "root": "—", "pos": "prep", "gloss": "from her" },
            { "surface": "النَّوْمُ", "lemma": "نوم", "features": "def.nom", "root": "ن و م", "pos": "noun", "gloss": "the sleep" }
          ]
        },
        { "id": "qr1-23-010", "page": 90, "ar": "وَمَا ذَاقَتْ طَعَامًا وَلَا شَرَابًا،", "en": "and she tasted no food and no drink,",
          "tokens": [
            { "surface": "وَمَا", "lemma": "ما", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and not" },
            { "surface": "ذَاقَتْ", "lemma": "ذاق", "features": "perf.3fs", "root": "ذ و ق", "pos": "verb", "gloss": "she tasted" },
            { "surface": "طَعَامًا", "lemma": "طعام", "features": "indef.acc", "root": "ط ع م", "pos": "noun", "gloss": "food" },
            { "surface": "وَلَا", "lemma": "لا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and not" },
            { "surface": "شَرَابًا", "lemma": "شراب", "features": "indef.acc", "root": "ش ر ب", "pos": "noun", "gloss": "drink" }
          ]
        },
        { "id": "qr1-23-011", "page": 90, "ar": "وَإِذَا سَكَتُّ اهْتَمَّتْ وَقَالَتْ: مَا بَالُكَ يَا بُنَيَّ! مَاذَا أَسْكَتَكَ؟", "en": "And whenever I fell silent, she grew anxious and said: \"What is wrong with you, my little one! What has silenced you?",
          "tokens": [
            { "surface": "وَإِذَا", "lemma": "اذا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and whenever" },
            { "surface": "سَكَتُّ", "lemma": "سكت", "features": "perf.1s", "root": "س ك ت", "pos": "verb", "gloss": "I fell silent" },
            { "surface": "اهْتَمَّتْ", "lemma": "اهتم", "features": "perf.3fs", "root": "ه م م", "pos": "verb", "gloss": "she grew anxious" },
            { "surface": "وَقَالَتْ", "lemma": "قال", "features": "conj+perf.3fs", "root": "ق و ل", "pos": "verb", "gloss": "and she said" },
            { "surface": "مَا", "lemma": "ما", "features": "part", "root": "—", "pos": "part", "gloss": "what" },
            { "surface": "بَالُكَ", "lemma": "بال", "features": "nom+2ms", "root": "ب و ل", "pos": "noun", "gloss": "your state" },
            { "surface": "يَا", "lemma": "يا", "features": "part", "root": "—", "pos": "part", "gloss": "O" },
            { "surface": "بُنَيَّ", "lemma": "بني", "features": "voc+1s", "root": "ب ن ي", "pos": "noun", "gloss": "my little son" },
            { "surface": "مَاذَا", "lemma": "ماذا", "features": "part", "root": "—", "pos": "part", "gloss": "what" },
            { "surface": "أَسْكَتَكَ", "lemma": "أسكت", "features": "perf.3ms+2ms", "root": "س ك ت", "pos": "verb", "gloss": "has silenced you" }
          ]
        },
        { "id": "qr1-23-012", "page": 90, "ar": "لِمَاذَا لَا تَتَكَلَّمُ،", "en": "Why aren't you speaking --",
          "tokens": [
            { "surface": "لِمَاذَا", "lemma": "لماذا", "features": "adv", "root": "—", "pos": "adv", "gloss": "why" },
            { "surface": "لَا", "lemma": "لا", "features": "part", "root": "—", "pos": "part", "gloss": "not" },
            { "surface": "تَتَكَلَّمُ", "lemma": "تكلم", "features": "impf.2ms", "root": "ك ل م", "pos": "verb", "gloss": "you speak" }
          ]
        },
        { "id": "qr1-23-013", "page": 90, "ar": "أَتَشْكُوْ وَجَعًا أَوْ أَغْضَبَكَ أَحَدٌ؟", "en": "are you complaining of some pain, or has someone upset you?\"",
          "tokens": [
            { "surface": "أَتَشْكُوْ", "lemma": "شكا", "features": "impf.2ms", "root": "ش ك و", "pos": "verb", "gloss": "do you complain of" },
            { "surface": "وَجَعًا", "lemma": "وجع", "features": "indef.acc", "root": "و ج ع", "pos": "noun", "gloss": "a pain" },
            { "surface": "أَوْ", "lemma": "أو", "features": "conj", "root": "—", "pos": "conj", "gloss": "or" },
            { "surface": "أَغْضَبَكَ", "lemma": "أغضب", "features": "perf.3ms+2ms", "root": "غ ض ب", "pos": "verb", "gloss": "has angered you" },
            { "surface": "أَحَدٌ", "lemma": "أحد", "features": "indef.nom", "root": "أ ح د", "pos": "noun", "gloss": "someone" }
          ]
        },
        { "id": "qr1-23-014", "page": 90, "ar": "وَإِذَا بَكَيْتُ جَاءَتْ تَجْرِيْ،", "en": "And whenever I cried she came running,",
          "tokens": [
            { "surface": "وَإِذَا", "lemma": "اذا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and whenever" },
            { "surface": "بَكَيْتُ", "lemma": "بكى", "features": "perf.1s", "root": "ب ك ي", "pos": "verb", "gloss": "I cried" },
            { "surface": "جَاءَتْ", "lemma": "جاء", "features": "perf.3fs", "root": "ج ي أ", "pos": "verb", "gloss": "she came" },
            { "surface": "تَجْرِيْ", "lemma": "جرى", "features": "impf.3fs", "root": "ج ر ي", "pos": "verb", "gloss": "running" }
          ]
        },
        { "id": "qr1-23-015", "page": 90, "ar": "وَفِيْ اللَّيْلِ تَتَكَلَّمُ مَعِيْ وَتُضَاحِكُنِيْ.", "en": "and at night she would talk with me and make me laugh.",
          "tokens": [
            { "surface": "وَفِيْ", "lemma": "في", "features": "conj+prep", "root": "—", "pos": "prep", "gloss": "and in" },
            { "surface": "اللَّيْلِ", "lemma": "ليل", "features": "def.gen", "root": "ل ي ل", "pos": "noun", "gloss": "the night" },
            { "surface": "تَتَكَلَّمُ", "lemma": "تكلم", "features": "impf.3fs", "root": "ك ل م", "pos": "verb", "gloss": "she speaks" },
            { "surface": "مَعِيْ", "lemma": "مع", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "with me" },
            { "surface": "وَتُضَاحِكُنِيْ", "lemma": "ضاحك", "features": "conj+impf.3fs+1s", "root": "ض ح ك", "pos": "verb", "gloss": "and she makes me laugh" }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا كَانَتْ تَفْعَلُ الأُمُّ إِذَا مَرِضَ ابْنُهَا؟",
          "options": [ "طَارَ عَنْهَا النَّوْمُ، وَمَا ذَاقَتْ طَعَامًا وَلَا شَرَابًا", "كَانَتْ تَنَامُ مُبَكِّرَةً", "كَانَتْ تَخْرُجُ إِلَى السُّوْقِ" ],
          "answer": 0,
          "qEn": "What would the mother do if her son fell ill?",
          "optionsEn": [ "Sleep would flee from her, and she would taste no food or drink", "She would go to sleep early", "She would go out to the market" ]
        },
        {
          "q": "مَاذَا كَانَتْ تَقُوْلُ الأُمُّ إِذَا سَكَتَ ابْنُهَا؟",
          "options": [ "«مَا بَالُكَ يَا بُنَيَّ! مَاذَا أَسْكَتَكَ؟»", "«اِذْهَبْ إِلَى الْمَدْرَسَةِ»", "«لَا شَيْءَ عِنْدِيْ لَكَ»" ],
          "answer": 0,
          "qEn": "What would the mother say if her son fell silent?",
          "optionsEn": [ "\"What is wrong with you, my little one! What has silenced you?\"", "\"Go to school\"", "\"I have nothing for you\"" ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "When I reached the age of five, she would talk with me at night, and I came to know Allah and His Messenger through her stories -- I heard many tales. I heard from her, as I lay on my bed, the story of Ibrahim and how he was thrown into the fire, and it became coolness and peace; how Musa grew up in Pharaoh's palace; the story of the Messenger of Allah ﷺ, the story of Halimah as-Sa'diyyah, and other beautiful tales. I memorized Ayat al-Kursi, the last verses of Surat al-Baqarah, and many supplications, so I became the little scholar of the children. My father loved me dearly, and being the youngest of my siblings, I would spend the night with him and eat with him. Whenever he came back from a journey he would buy me a beautiful gift, and people loved me and drew me close to them for my closeness to my father. I read to my father too, so he was to me both a father and a teacher.",
      "sentences": [
        { "id": "qr1-23-016", "page": 90, "ar": "وَلَمَّا دَخَلْتُ فِي السَّنَةِ الْخَامِسَةِ كَانَتْ تَتَحَدَّثُ مَعِيْ فِي اللَّيْلِ،", "en": "When I reached the age of five, she would talk with me at night,",
          "tokens": [
            { "surface": "وَلَمَّا", "lemma": "لما", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and when" },
            { "surface": "دَخَلْتُ", "lemma": "دخل", "features": "perf.1s", "root": "د خ ل", "pos": "verb", "gloss": "I entered" },
            { "surface": "فِي", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "into" },
            { "surface": "السَّنَةِ", "lemma": "سنة", "features": "def.gen", "root": "س ن و", "pos": "noun", "gloss": "the year" },
            { "surface": "الْخَامِسَةِ", "lemma": "خامس", "features": "def.gen", "root": "خ م س", "pos": "num", "gloss": "the fifth" },
            { "surface": "كَانَتْ", "lemma": "كان", "features": "perf.3fs", "root": "ك و ن", "pos": "verb", "gloss": "she was" },
            { "surface": "تَتَحَدَّثُ", "lemma": "تحدث", "features": "impf.3fs", "root": "ح د ث", "pos": "verb", "gloss": "conversing" },
            { "surface": "مَعِيْ", "lemma": "مع", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "with me" },
            { "surface": "فِي", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "in" },
            { "surface": "اللَّيْلِ", "lemma": "ليل", "features": "def.gen", "root": "ل ي ل", "pos": "noun", "gloss": "the night" }
          ]
        },
        { "id": "qr1-23-017", "page": 90, "ar": "وَقَدْ عَرَفْتُ اللهَ وَرَسُوْلَهُ فِيْ حَدِيْثِهَا،", "en": "and I came to know Allah and His Messenger through her stories,",
          "tokens": [
            { "surface": "وَقَدْ", "lemma": "قد", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and indeed" },
            { "surface": "عَرَفْتُ", "lemma": "عرف", "features": "perf.1s", "root": "ع ر ف", "pos": "verb", "gloss": "I came to know" },
            { "surface": "اللهَ", "lemma": "الله", "features": "acc", "root": "—", "pos": "proper", "gloss": "Allah" },
            { "surface": "وَرَسُوْلَهُ", "lemma": "رسول", "features": "conj+acc+3ms", "root": "ر س ل", "pos": "noun", "gloss": "and His Messenger" },
            { "surface": "فِيْ", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "in" },
            { "surface": "حَدِيْثِهَا", "lemma": "حديث", "features": "gen+3fs", "root": "ح د ث", "pos": "noun", "gloss": "her talk" }
          ]
        },
        { "id": "qr1-23-018", "page": 90, "ar": "وَسَمِعْتُ قَصَصًا كَثِيْرَةً،", "en": "and I heard many tales.",
          "tokens": [
            { "surface": "وَسَمِعْتُ", "lemma": "سمع", "features": "conj+perf.1s", "root": "س م ع", "pos": "verb", "gloss": "and I heard" },
            { "surface": "قَصَصًا", "lemma": "قصة", "features": "pl.indef.acc", "root": "ق ص ص", "pos": "noun", "gloss": "tales" },
            { "surface": "كَثِيْرَةً", "lemma": "كثير", "features": "indef.acc", "root": "ك ث ر", "pos": "adj", "gloss": "many" }
          ]
        },
        { "id": "qr1-23-019", "page": 91, "ar": "سَمِعْتُ مِنْهَا وَأَنَا عَلَىٰ فِرَاشِيْ قِصَّةَ إِبْرَاهِيْمَ،", "en": "I heard from her, as I lay on my bed, the story of Ibrahim,",
          "tokens": [
            { "surface": "سَمِعْتُ", "lemma": "سمع", "features": "perf.1s", "root": "س م ع", "pos": "verb", "gloss": "I heard" },
            { "surface": "مِنْهَا", "lemma": "من", "features": "prep+3fs", "root": "—", "pos": "prep", "gloss": "from her" },
            { "surface": "وَأَنَا", "lemma": "أنا", "features": "conj+nom.1s", "root": "—", "pos": "noun", "gloss": "while I" },
            { "surface": "عَلَىٰ", "lemma": "على", "features": "prep", "root": "—", "pos": "prep", "gloss": "on" },
            { "surface": "فِرَاشِيْ", "lemma": "فراش", "features": "gen+1s", "root": "ف ر ش", "pos": "noun", "gloss": "my bed" },
            { "surface": "قِصَّةَ", "lemma": "قصة", "features": "acc.constr", "root": "ق ص ص", "pos": "noun", "gloss": "the story of" },
            { "surface": "إِبْرَاهِيْمَ", "lemma": "ابراهيم", "features": "gen", "root": "—", "pos": "proper", "gloss": "Ibrahim" }
          ]
        },
        { "id": "qr1-23-020", "page": 91, "ar": "وَكَيْفَ أُلْقِيَ فِي النَّارِ،", "en": "and how he was thrown into the fire,",
          "tokens": [
            { "surface": "وَكَيْفَ", "lemma": "كيف", "features": "conj+part", "root": "ك ي ف", "pos": "part", "gloss": "and how" },
            { "surface": "أُلْقِيَ", "lemma": "القى", "features": "pass.perf.3ms", "root": "ل ق ي", "pos": "verb", "gloss": "he was thrown" },
            { "surface": "فِي", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "into" },
            { "surface": "النَّارِ", "lemma": "نار", "features": "def.gen", "root": "ن و ر", "pos": "noun", "gloss": "the fire" }
          ]
        },
        { "id": "qr1-23-021", "page": 91, "ar": "فَصَارَتْ بَرْدًا وَسَلَامًا،", "en": "and it became coolness and peace,",
          "tokens": [
            { "surface": "فَصَارَتْ", "lemma": "صار", "features": "conj+perf.3fs", "root": "ص ي ر", "pos": "verb", "gloss": "and it became" },
            { "surface": "بَرْدًا", "lemma": "برد", "features": "indef.acc", "root": "ب ر د", "pos": "noun", "gloss": "coolness" },
            { "surface": "وَسَلَامًا", "lemma": "سلام", "features": "conj+indef.acc", "root": "س ل م", "pos": "noun", "gloss": "and peace" }
          ]
        },
        { "id": "qr1-23-022", "page": 91, "ar": "وَكَيْفَ نَشَأَ مُوْسَىٰ فِيْ قَصْرِ فِرْعَوْنَ،", "en": "how Musa grew up in Pharaoh's palace,",
          "tokens": [
            { "surface": "وَكَيْفَ", "lemma": "كيف", "features": "conj+part", "root": "ك ي ف", "pos": "part", "gloss": "and how" },
            { "surface": "نَشَأَ", "lemma": "نشأ", "features": "perf.3ms", "root": "ن ش أ", "pos": "verb", "gloss": "he grew up" },
            { "surface": "مُوْسَىٰ", "lemma": "موسى", "features": "nom", "root": "—", "pos": "proper", "gloss": "Musa" },
            { "surface": "فِيْ", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "in" },
            { "surface": "قَصْرِ", "lemma": "قصر", "features": "gen.constr", "root": "ق ص ر", "pos": "noun", "gloss": "the palace of" },
            { "surface": "فِرْعَوْنَ", "lemma": "فرعون", "features": "gen", "root": "—", "pos": "proper", "gloss": "Pharaoh" }
          ]
        },
        { "id": "qr1-23-023", "page": 91, "ar": "وَسَمِعْتُ قِصَّةَ رَسُوْلِ اللهِ ﷺ وَقِصَّةَ حَلِيْمَةَ السَّعْدِيَّةِ وَقَصَصًا جَمِيْلَةً،", "en": "the story of the Messenger of Allah ﷺ, the story of Halimah as-Sa'diyyah, and other beautiful tales,",
          "tokens": [
            { "surface": "وَسَمِعْتُ", "lemma": "سمع", "features": "conj+perf.1s", "root": "س م ع", "pos": "verb", "gloss": "and I heard" },
            { "surface": "قِصَّةَ", "lemma": "قصة", "features": "acc.constr", "root": "ق ص ص", "pos": "noun", "gloss": "the story of" },
            { "surface": "رَسُوْلِ", "lemma": "رسول", "features": "gen.constr", "root": "ر س ل", "pos": "noun", "gloss": "the Messenger of" },
            { "surface": "اللهِ", "lemma": "الله", "features": "gen", "root": "—", "pos": "proper", "gloss": "Allah" },
            { "surface": "وَقِصَّةَ", "lemma": "قصة", "features": "conj+acc.constr", "root": "ق ص ص", "pos": "noun", "gloss": "and the story of" },
            { "surface": "حَلِيْمَةَ", "lemma": "حليمة", "features": "gen", "root": "—", "pos": "proper", "gloss": "Halimah" },
            { "surface": "السَّعْدِيَّةِ", "lemma": "سعدية", "features": "def.gen", "root": "—", "pos": "proper", "gloss": "as-Sa'diyyah" },
            { "surface": "وَقَصَصًا", "lemma": "قصة", "features": "conj+pl.indef.acc", "root": "ق ص ص", "pos": "noun", "gloss": "and tales" },
            { "surface": "جَمِيْلَةً", "lemma": "جميل", "features": "indef.acc", "root": "ج م ل", "pos": "adj", "gloss": "beautiful" }
          ]
        },
        { "id": "qr1-23-024", "page": 91, "ar": "وَحَفِظْتُ آيَةَ الْكُرْسِيِّ وَالآيَاتِ الأَخِيْرَةَ مِنْ سُوْرَةِ الْبَقَرَةِ وَأَدْعِيَةً كَثِيْرَةً،", "en": "I memorized Ayat al-Kursi, the last verses of Surat al-Baqarah, and many supplications,",
          "tokens": [
            { "surface": "وَحَفِظْتُ", "lemma": "حفظ", "features": "conj+perf.1s", "root": "ح ف ظ", "pos": "verb", "gloss": "and I memorized" },
            { "surface": "آيَةَ", "lemma": "اية", "features": "acc.constr", "root": "أ ي ي", "pos": "noun", "gloss": "the verse of" },
            { "surface": "الْكُرْسِيِّ", "lemma": "كرسي", "features": "def.gen", "root": "ك ر س", "pos": "noun", "gloss": "the Throne" },
            { "surface": "وَالآيَاتِ", "lemma": "اية", "features": "conj+pl.def.acc", "root": "أ ي ي", "pos": "noun", "gloss": "and the verses" },
            { "surface": "الأَخِيْرَةَ", "lemma": "اخير", "features": "def.acc", "root": "أ خ ر", "pos": "adj", "gloss": "the last" },
            { "surface": "مِنْ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "of" },
            { "surface": "سُوْرَةِ", "lemma": "سورة", "features": "gen.constr", "root": "س و ر", "pos": "noun", "gloss": "Surat" },
            { "surface": "الْبَقَرَةِ", "lemma": "بقرة", "features": "def.gen", "root": "—", "pos": "proper", "gloss": "al-Baqarah" },
            { "surface": "وَأَدْعِيَةً", "lemma": "دعاء", "features": "conj+pl.indef.acc", "root": "د ع و", "pos": "noun", "gloss": "and supplications" },
            { "surface": "كَثِيْرَةً", "lemma": "كثير", "features": "indef.acc", "root": "ك ث ر", "pos": "adj", "gloss": "many" }
          ]
        },
        { "id": "qr1-23-025", "page": 91, "ar": "فَكُنْتُ عَالِمَ الأَطْفَالِ وَكَانَ أَبِيْ يُحِبُّنِيْ كَثِيْرًا،", "en": "so I became the little scholar of the children, and my father loved me dearly,",
          "tokens": [
            { "surface": "فَكُنْتُ", "lemma": "كان", "features": "conj+perf.1s", "root": "ك و ن", "pos": "verb", "gloss": "so I became" },
            { "surface": "عَالِمَ", "lemma": "عالم", "features": "acc.constr", "root": "ع ل م", "pos": "noun", "gloss": "the scholar of" },
            { "surface": "الأَطْفَالِ", "lemma": "طفل", "features": "pl.def.gen", "root": "ط ف ل", "pos": "noun", "gloss": "the children" },
            { "surface": "وَكَانَ", "lemma": "كان", "features": "conj+perf.3ms", "root": "ك و ن", "pos": "verb", "gloss": "and was" },
            { "surface": "أَبِيْ", "lemma": "اب", "features": "nom+1s", "root": "أ ب و", "pos": "noun", "gloss": "my father" },
            { "surface": "يُحِبُّنِيْ", "lemma": "أحب", "features": "impf.3ms+1s", "root": "ح ب ب", "pos": "verb", "gloss": "loving me" },
            { "surface": "كَثِيْرًا", "lemma": "كثير", "features": "acc", "root": "ك ث ر", "pos": "adj", "gloss": "much" }
          ]
        },
        { "id": "qr1-23-026", "page": 91, "ar": "وَكُنْتُ أَصْغَرَ إِخْوَتِيْ أَبِيْتُ مَعَهُ وَآكُلُ مَعَهُ،", "en": "and being the youngest of my siblings, I would spend the night with him and eat with him,",
          "tokens": [
            { "surface": "وَكُنْتُ", "lemma": "كان", "features": "conj+perf.1s", "root": "ك و ن", "pos": "verb", "gloss": "and I was" },
            { "surface": "أَصْغَرَ", "lemma": "صغر", "features": "acc.constr", "root": "ص غ ر", "pos": "adj", "gloss": "the youngest of" },
            { "surface": "إِخْوَتِيْ", "lemma": "أخ", "features": "pl.gen+1s", "root": "أ خ و", "pos": "noun", "gloss": "my siblings" },
            { "surface": "أَبِيْتُ", "lemma": "بات", "features": "impf.1s", "root": "ب ي ت", "pos": "verb", "gloss": "I spend the night" },
            { "surface": "مَعَهُ", "lemma": "مع", "features": "prep+3ms", "root": "—", "pos": "prep", "gloss": "with him" },
            { "surface": "وَآكُلُ", "lemma": "اكل", "features": "conj+impf.1s", "root": "أ ك ل", "pos": "verb", "gloss": "and I eat" },
            { "surface": "مَعَهُ", "lemma": "مع", "features": "prep+3ms", "root": "—", "pos": "prep", "gloss": "with him" }
          ]
        },
        { "id": "qr1-23-027", "page": 91, "ar": "وَإِذَا جَاءَ مِنْ سَفَرٍ اشْتَرَىٰ لِيْ هَدِيَّةً جَمِيْلَةً،", "en": "Whenever he came back from a journey he would buy me a beautiful gift,",
          "tokens": [
            { "surface": "وَإِذَا", "lemma": "اذا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and whenever" },
            { "surface": "جَاءَ", "lemma": "جاء", "features": "perf.3ms", "root": "ج ي أ", "pos": "verb", "gloss": "he came" },
            { "surface": "مِنْ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "from" },
            { "surface": "سَفَرٍ", "lemma": "سفر", "features": "indef.gen", "root": "س ف ر", "pos": "noun", "gloss": "a journey" },
            { "surface": "اشْتَرَىٰ", "lemma": "اشترى", "features": "perf.3ms", "root": "ش ر ي", "pos": "verb", "gloss": "he bought" },
            { "surface": "لِيْ", "lemma": "ل", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "for me" },
            { "surface": "هَدِيَّةً", "lemma": "هدية", "features": "indef.acc", "root": "ه د ي", "pos": "noun", "gloss": "a gift" },
            { "surface": "جَمِيْلَةً", "lemma": "جميل", "features": "indef.acc", "root": "ج م ل", "pos": "adj", "gloss": "beautiful" }
          ]
        },
        { "id": "qr1-23-028", "page": 91, "ar": "وَكَانَ النَّاسُ يُحِبُّوْنَنِيْ وَيُقَرِّبُوْنَنِيْ إِلَيْهِمْ لِمَكَانِيْ مِنْ أَبِيْ،", "en": "and people loved me and drew me close to them, for my closeness to my father,",
          "tokens": [
            { "surface": "وَكَانَ", "lemma": "كان", "features": "conj+perf.3ms", "root": "ك و ن", "pos": "verb", "gloss": "and were" },
            { "surface": "النَّاسُ", "lemma": "ناس", "features": "def.nom", "root": "ن و س", "pos": "noun", "gloss": "the people" },
            { "surface": "يُحِبُّوْنَنِيْ", "lemma": "أحب", "features": "impf.3mp+1s", "root": "ح ب ب", "pos": "verb", "gloss": "loving me" },
            { "surface": "وَيُقَرِّبُوْنَنِيْ", "lemma": "قرب", "features": "conj+impf.3mp+1s", "root": "ق ر ب", "pos": "verb", "gloss": "and drawing me close" },
            { "surface": "إِلَيْهِمْ", "lemma": "الى", "features": "prep+3mp", "root": "—", "pos": "prep", "gloss": "to them" },
            { "surface": "لِمَكَانِيْ", "lemma": "مكان", "features": "prep+gen+1s", "root": "ك و ن", "pos": "noun", "gloss": "for my standing" },
            { "surface": "مِنْ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "with" },
            { "surface": "أَبِيْ", "lemma": "اب", "features": "gen+1s", "root": "أ ب و", "pos": "noun", "gloss": "my father" }
          ]
        },
        { "id": "qr1-23-029", "page": 91, "ar": "وَقَدْ قَرَأْتُ عَلَىٰ أَبِيْ أَيْضًا،", "en": "I read to my father too,",
          "tokens": [
            { "surface": "وَقَدْ", "lemma": "قد", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and indeed" },
            { "surface": "قَرَأْتُ", "lemma": "قرأ", "features": "perf.1s", "root": "ق ر أ", "pos": "verb", "gloss": "I read" },
            { "surface": "عَلَىٰ", "lemma": "على", "features": "prep", "root": "—", "pos": "prep", "gloss": "to" },
            { "surface": "أَبِيْ", "lemma": "اب", "features": "gen+1s", "root": "أ ب و", "pos": "noun", "gloss": "my father" },
            { "surface": "أَيْضًا", "lemma": "ايضا", "features": "acc", "root": "—", "pos": "adv", "gloss": "also" }
          ]
        },
        { "id": "qr1-23-030", "page": 91, "ar": "فَهُوَ لِيْ أَبٌ وَمُعَلِّمٌ.", "en": "so he was to me both a father and a teacher.",
          "tokens": [
            { "surface": "فَهُوَ", "lemma": "هو", "features": "conj+nom.3ms", "root": "—", "pos": "noun", "gloss": "so he" },
            { "surface": "لِيْ", "lemma": "ل", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "to me" },
            { "surface": "أَبٌ", "lemma": "اب", "features": "indef.nom", "root": "أ ب و", "pos": "noun", "gloss": "a father" },
            { "surface": "وَمُعَلِّمٌ", "lemma": "معلم", "features": "conj+indef.nom", "root": "ع ل م", "pos": "noun", "gloss": "and a teacher" }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا كَانَتِ الأُمُّ تُحَدِّثُ ابْنَهَا فِي اللَّيْلِ؟",
          "options": [ "قِصَصَ الأَنْبِيَاءِ، كَقِصَّةِ إِبْرَاهِيْمَ وَمُوْسَىٰ", "أَخْبَارَ السُّوْقِ", "قَوَاعِدَ اللُّغَةِ" ],
          "answer": 0,
          "qEn": "What did the mother tell her son about at night?",
          "optionsEn": [ "The stories of the prophets, like Ibrahim and Musa", "News from the market", "Grammar rules" ]
        },
        {
          "q": "مَاذَا حَفِظَ الْوَلَدُ؟",
          "options": [ "آيَةَ الْكُرْسِيِّ وَالآيَاتِ الأَخِيْرَةَ مِنْ سُوْرَةِ الْبَقَرَةِ وَأَدْعِيَةً كَثِيْرَةً", "أَسْمَاءَ الْمُلُوْكِ", "جَدْوَلَ الضَّرْبِ فَقَطْ" ],
          "answer": 0,
          "qEn": "What did the boy memorize?",
          "optionsEn": [ "Ayat al-Kursi, the last verses of Surat al-Baqarah, and many supplications", "The names of kings", "Only the multiplication table" ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "My father would instruct my mother to dress me in new clothes for the 'Eid. Whenever I fell ill, or fell from somewhere, or harm or pain befell me, the news would reach him and sleep would flee from him, and he would stay up the whole night worried and grieving. How can I repay these blessings? Can I possibly repay the two of them with money? Certainly not! I and my wealth belong to my parents. Yes -- I serve them with my wealth and my body; more than that, I keep up ties with their friends and relatives with devotion and kindness. But above all I will pray for them, and I always say in my prayer: \"My Lord, have mercy on them as they raised me when I was small.\"",
      "sentences": [
        { "id": "qr1-23-031", "page": 91, "ar": "وَكَانَ يُوْصِيْ أُمِّيْ أَنْ تَكْسُوَنِيْ يَوْمَ الْعِيْدِ لِبَاسًا جَدِيْدًا،", "en": "My father would instruct my mother to dress me in new clothes for the 'Eid,",
          "tokens": [
            { "surface": "وَكَانَ", "lemma": "كان", "features": "conj+perf.3ms", "root": "ك و ن", "pos": "verb", "gloss": "and he would" },
            { "surface": "يُوْصِيْ", "lemma": "وصى", "features": "impf.3ms", "root": "و ص ي", "pos": "verb", "gloss": "instruct" },
            { "surface": "أُمِّيْ", "lemma": "أم", "features": "acc+1s", "root": "أ م م", "pos": "noun", "gloss": "my mother" },
            { "surface": "أَنْ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "to" },
            { "surface": "تَكْسُوَنِيْ", "lemma": "كسا", "features": "impf.3fs+1s", "root": "ك س و", "pos": "verb", "gloss": "she dress me" },
            { "surface": "يَوْمَ", "lemma": "يوم", "features": "acc.constr", "root": "ي و م", "pos": "noun", "gloss": "on the day of" },
            { "surface": "الْعِيْدِ", "lemma": "عيد", "features": "def.gen", "root": "ع و د", "pos": "noun", "gloss": "the 'Eid" },
            { "surface": "لِبَاسًا", "lemma": "لباس", "features": "indef.acc", "root": "ل ب س", "pos": "noun", "gloss": "clothing" },
            { "surface": "جَدِيْدًا", "lemma": "جديد", "features": "indef.acc", "root": "ج د د", "pos": "adj", "gloss": "new" }
          ]
        },
        { "id": "qr1-23-032", "page": 91, "ar": "وَإِذَا مَرِضْتُ أَوْ سَقَطْتُ مِنْ مَكَانٍ أَوْ أَصَابَنِيْ ضَرَرٌ أَوْ أَلَمٌ جَاءَهُ الْخَبَرُ طَارَ نَوْمُهُ،", "en": "Whenever I fell ill, or fell from somewhere, or harm or pain befell me, the news would reach him and sleep would flee from him,",
          "tokens": [
            { "surface": "وَإِذَا", "lemma": "اذا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and whenever" },
            { "surface": "مَرِضْتُ", "lemma": "مرض-فعل", "features": "perf.1s", "root": "م ر ض", "pos": "verb", "gloss": "I fell ill" },
            { "surface": "أَوْ", "lemma": "أو", "features": "conj", "root": "—", "pos": "conj", "gloss": "or" },
            { "surface": "سَقَطْتُ", "lemma": "سقط", "features": "perf.1s", "root": "س ق ط", "pos": "verb", "gloss": "I fell" },
            { "surface": "مِنْ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "from" },
            { "surface": "مَكَانٍ", "lemma": "مكان", "features": "indef.gen", "root": "ك و ن", "pos": "noun", "gloss": "a place" },
            { "surface": "أَوْ", "lemma": "أو", "features": "conj", "root": "—", "pos": "conj", "gloss": "or" },
            { "surface": "أَصَابَنِيْ", "lemma": "أصاب", "features": "perf.3ms+1s", "root": "ص و ب", "pos": "verb", "gloss": "befell me" },
            { "surface": "ضَرَرٌ", "lemma": "ضرر", "features": "indef.nom", "root": "ض ر ر", "pos": "noun", "gloss": "harm" },
            { "surface": "أَوْ", "lemma": "أو", "features": "conj", "root": "—", "pos": "conj", "gloss": "or" },
            { "surface": "أَلَمٌ", "lemma": "الم", "features": "indef.nom", "root": "أ ل م", "pos": "noun", "gloss": "pain" },
            { "surface": "جَاءَهُ", "lemma": "جاء", "features": "perf.3ms+3ms", "root": "ج ي أ", "pos": "verb", "gloss": "reached him" },
            { "surface": "الْخَبَرُ", "lemma": "خبر", "features": "def.nom", "root": "خ ب ر", "pos": "noun", "gloss": "the news" },
            { "surface": "طَارَ", "lemma": "طار", "features": "perf.3ms", "root": "ط ي ر", "pos": "verb", "gloss": "fled" },
            { "surface": "نَوْمُهُ", "lemma": "نوم", "features": "nom+3ms", "root": "ن و م", "pos": "noun", "gloss": "his sleep" }
          ]
        },
        { "id": "qr1-23-033", "page": 91, "ar": "وَسَهِرَ اللَّيْلَ هَمًّا وَحُزْنًا،", "en": "and he would stay up the whole night, worried and grieving,",
          "tokens": [
            { "surface": "وَسَهِرَ", "lemma": "سهر", "features": "conj+perf.3ms", "root": "س ه ر", "pos": "verb", "gloss": "and he stayed up" },
            { "surface": "اللَّيْلَ", "lemma": "ليل", "features": "def.acc", "root": "ل ي ل", "pos": "noun", "gloss": "the whole night" },
            { "surface": "هَمًّا", "lemma": "هم", "features": "indef.acc", "root": "ه م م", "pos": "noun", "gloss": "worried" },
            { "surface": "وَحُزْنًا", "lemma": "حزن", "features": "conj+indef.acc", "root": "ح ز ن", "pos": "noun", "gloss": "and grieving" }
          ]
        },
        { "id": "qr1-23-034", "page": 91, "ar": "كَيْفَ أُجَازِيْ هٰذِهِ النِّعَمَ،", "en": "How can I repay these blessings?",
          "tokens": [
            { "surface": "كَيْفَ", "lemma": "كيف", "features": "part", "root": "ك ي ف", "pos": "part", "gloss": "how" },
            { "surface": "أُجَازِيْ", "lemma": "أجازي", "features": "impf.1s", "root": "ج ز ي", "pos": "verb", "gloss": "I repay" },
            { "surface": "هٰذِهِ", "lemma": "هذه", "features": "dem", "root": "—", "pos": "dem", "gloss": "these" },
            { "surface": "النِّعَمَ", "lemma": "نعمة", "features": "pl.def.acc", "root": "ن ع م", "pos": "noun", "gloss": "the blessings" }
          ]
        },
        { "id": "qr1-23-035", "page": 91, "ar": "هَلْ يُمْكِنُ أَنْ أُجَازِيَهُمَا بِمَالٍ؟", "en": "Can I possibly repay the two of them with money?",
          "tokens": [
            { "surface": "هَلْ", "lemma": "هل", "features": "part", "root": "—", "pos": "part", "gloss": "[question]" },
            { "surface": "يُمْكِنُ", "lemma": "امكن", "features": "impf.3ms", "root": "م ك ن", "pos": "verb", "gloss": "is it possible" },
            { "surface": "أَنْ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "that" },
            { "surface": "أُجَازِيَهُمَا", "lemma": "أجازي", "features": "impf.1s+3d", "root": "ج ز ي", "pos": "verb", "gloss": "I repay the two of them" },
            { "surface": "بِمَالٍ", "lemma": "مال", "features": "prep+indef.gen", "root": "م و ل", "pos": "noun", "gloss": "with money" }
          ]
        },
        { "id": "qr1-23-036", "page": 91, "ar": "كَلَّا!", "en": "Certainly not!",
          "tokens": [
            { "surface": "كَلَّا", "lemma": "كلا", "features": "part", "root": "—", "pos": "part", "gloss": "certainly not" }
          ]
        },
        { "id": "qr1-23-037", "page": 91, "ar": "فَأَنَا وَمَالِيْ لِوَالِدَيَّ،", "en": "I and my wealth belong to my parents.",
          "tokens": [
            { "surface": "فَأَنَا", "lemma": "أنا", "features": "conj+nom.1s", "root": "—", "pos": "noun", "gloss": "for I" },
            { "surface": "وَمَالِيْ", "lemma": "مال", "features": "conj+nom+1s", "root": "م و ل", "pos": "noun", "gloss": "and my wealth" },
            { "surface": "لِوَالِدَيَّ", "lemma": "والد", "features": "prep+du.gen+1s", "root": "و ل د", "pos": "noun", "gloss": "belong to my parents" }
          ]
        },
        { "id": "qr1-23-038", "page": 91, "ar": "نَعَمْ! أَنَا أَخْدِمُهُمَا بِالْمَالِ وَالْبَدَنِ،", "en": "Yes -- I serve them with my wealth and my body;",
          "tokens": [
            { "surface": "نَعَمْ", "lemma": "نعم", "features": "part", "root": "—", "pos": "part", "gloss": "yes" },
            { "surface": "أَنَا", "lemma": "أنا", "features": "nom.1s", "root": "—", "pos": "noun", "gloss": "I" },
            { "surface": "أَخْدِمُهُمَا", "lemma": "خدم", "features": "impf.1s+3d", "root": "خ د م", "pos": "verb", "gloss": "I serve the two of them" },
            { "surface": "بِالْمَالِ", "lemma": "مال", "features": "prep+def.gen", "root": "م و ل", "pos": "noun", "gloss": "with wealth" },
            { "surface": "وَالْبَدَنِ", "lemma": "بدن", "features": "conj+def.gen", "root": "ب د ن", "pos": "noun", "gloss": "and body" }
          ]
        },
        { "id": "qr1-23-039", "page": 91, "ar": "بَلْ أَصِلُ أَصْدِقَاءَهُمَا وَأَقَارِبَهُمَا بِالْبِرِّ وَالْمَعْرُوْفِ،", "en": "more than that, I keep up ties with their friends and relatives with devotion and kindness,",
          "tokens": [
            { "surface": "بَلْ", "lemma": "بل", "features": "part", "root": "—", "pos": "part", "gloss": "rather" },
            { "surface": "أَصِلُ", "lemma": "وصل", "features": "impf.1s", "root": "و ص ل", "pos": "verb", "gloss": "I keep ties with" },
            { "surface": "أَصْدِقَاءَهُمَا", "lemma": "صديق", "features": "pl.acc+3d", "root": "ص د ق", "pos": "noun", "gloss": "their two friends" },
            { "surface": "وَأَقَارِبَهُمَا", "lemma": "أقارب", "features": "conj+pl.acc+3d", "root": "ق ر ب", "pos": "noun", "gloss": "and their two relatives" },
            { "surface": "بِالْبِرِّ", "lemma": "بر", "features": "prep+def.gen", "root": "ب ر ر", "pos": "noun", "gloss": "with devotion" },
            { "surface": "وَالْمَعْرُوْفِ", "lemma": "معروف", "features": "conj+def.gen", "root": "ع ر ف", "pos": "noun", "gloss": "and kindness" }
          ]
        },
        { "id": "qr1-23-040", "page": 91, "ar": "وَلٰكِنِّيْ سَأَدْعُوْ لَهُمَا،", "en": "But above all I will pray for them,",
          "tokens": [
            { "surface": "وَلٰكِنِّيْ", "lemma": "لكن", "features": "conj+part+1s", "root": "—", "pos": "part", "gloss": "but I" },
            { "surface": "سَأَدْعُوْ", "lemma": "دعا", "features": "fut+impf.1s", "root": "د ع و", "pos": "verb", "gloss": "I will pray" },
            { "surface": "لَهُمَا", "lemma": "ل", "features": "prep+3d", "root": "—", "pos": "prep", "gloss": "for the two of them" }
          ]
        },
        { "id": "qr1-23-041", "page": 91, "ar": "وَأَقُوْلُ دَائِمًا فِيْ دُعَائِيْ: «رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِيْ صَغِيْرًا».", "en": "and I always say in my prayer: \"My Lord, have mercy on them as they raised me when I was small.\"",
          "tokens": [
            { "surface": "وَأَقُوْلُ", "lemma": "قال", "features": "conj+impf.1s", "root": "ق و ل", "pos": "verb", "gloss": "and I say" },
            { "surface": "دَائِمًا", "lemma": "دائما", "features": "acc", "root": "د و م", "pos": "adv", "gloss": "always" },
            { "surface": "فِيْ", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "in" },
            { "surface": "دُعَائِيْ", "lemma": "دعاء", "features": "gen+1s", "root": "د ع و", "pos": "noun", "gloss": "my prayer" },
            { "surface": "رَبِّ", "lemma": "رب", "features": "voc+1s", "root": "ر ب ب", "pos": "noun", "gloss": "my Lord" },
            { "surface": "ارْحَمْهُمَا", "lemma": "رحم", "features": "imp.2ms+3d", "root": "ر ح م", "pos": "verb", "gloss": "have mercy on the two of them" },
            { "surface": "كَمَا", "lemma": "كما", "features": "part", "root": "—", "pos": "part", "gloss": "as" },
            { "surface": "رَبَّيَانِيْ", "lemma": "ربى", "features": "perf.3d+1s", "root": "ر ب و", "pos": "verb", "gloss": "the two of them raised me" },
            { "surface": "صَغِيْرًا", "lemma": "صغر", "features": "indef.acc", "root": "ص غ ر", "pos": "adj", "gloss": "small" }
          ]
        }
      ],
      "checks": [
        {
          "q": "هَلْ اسْتَطَاعَ الْوَلَدُ أَنْ يُجَازِيَ وَالِدَيْهِ بِالْمَالِ؟",
          "options": [ "لَا، فَقَالَ: «فَأَنَا وَمَالِيْ لِوَالِدَيَّ»", "نَعَمْ، وَدَفَعَ لَهُمَا مَالاً كَثِيْرًا", "لَمْ يُفَكِّرْ فِي ذٰلِكَ" ],
          "answer": 0,
          "qEn": "Could the son repay his parents with money?",
          "optionsEn": [ "No -- he said: \"I and my wealth belong to my parents\"", "Yes, and he paid them a great deal of money", "He never thought about it" ]
        },
        {
          "q": "بِمَاذَا كَانَ يَدْعُوْ الْوَلَدُ لِوَالِدَيْهِ؟",
          "options": [ "«رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِيْ صَغِيْرًا»", "«رَبِّ اغْفِرْ لِيْ ذَنْبِيْ»", "لَمْ يَكُنْ يَدْعُوْ لَهُمَا" ],
          "answer": 0,
          "qEn": "What did the son pray for his parents?",
          "optionsEn": [ "\"My Lord, have mercy on them as they raised me when I was small\"", "\"My Lord, forgive me my sin\"", "He never prayed for them" ]
        }
      ]
    },
    {
      "en": "I will strive, Allah willing, that the two of them take joy in me on the Day of Judgment before the people and before all fathers and mothers, and that those who have children envy them, saying: \"If only we had been given children like so-and-so was given -- he is truly fortunate!\"",
      "sentences": [
        { "id": "qr1-23-042", "page": 92, "ar": "وَسَأَجْتَهِدُ إِنْ شَاءَ اللهُ أَنْ يَغْتَبِطَا بِيْ يَوْمَ الْقِيَامَةِ أَمَامَ النَّاسِ وَأَمَامَ الآبَاءِ وَالأُمَّهَاتِ وَيَغْبِطُهُمَا أَصْحَابُ الأَوْلَادِ وَيَقُوْلُوْنَ:", "en": "I will strive, Allah willing, that the two of them take joy in me on the Day of Judgment before the people and before all fathers and mothers, and that those who have children envy them, saying:",
          "tokens": [
            { "surface": "وَسَأَجْتَهِدُ", "lemma": "اجتهد", "features": "conj+fut+impf.1s", "root": "ج ه د", "pos": "verb", "gloss": "and I will strive" },
            { "surface": "إِنْ", "lemma": "إن", "features": "part", "root": "—", "pos": "part", "gloss": "if" },
            { "surface": "شَاءَ", "lemma": "شاء", "features": "perf.3ms", "root": "ش ي أ", "pos": "verb", "gloss": "wills" },
            { "surface": "اللهُ", "lemma": "الله", "features": "nom", "root": "—", "pos": "proper", "gloss": "Allah" },
            { "surface": "أَنْ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "that" },
            { "surface": "يَغْتَبِطَا", "lemma": "اغتبط", "features": "impf.3d", "root": "غ ب ط", "pos": "verb", "gloss": "the two of them take joy" },
            { "surface": "بِيْ", "lemma": "ب", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "in me" },
            { "surface": "يَوْمَ", "lemma": "يوم", "features": "acc.constr", "root": "ي و م", "pos": "noun", "gloss": "on the day of" },
            { "surface": "الْقِيَامَةِ", "lemma": "قيامة", "features": "def.gen", "root": "ق و م", "pos": "noun", "gloss": "the Resurrection" },
            { "surface": "أَمَامَ", "lemma": "امام", "features": "acc", "root": "—", "pos": "prep", "gloss": "before" },
            { "surface": "النَّاسِ", "lemma": "ناس", "features": "def.gen", "root": "ن و س", "pos": "noun", "gloss": "the people" },
            { "surface": "وَأَمَامَ", "lemma": "امام", "features": "conj+acc", "root": "—", "pos": "prep", "gloss": "and before" },
            { "surface": "الآبَاءِ", "lemma": "اب", "features": "pl.def.gen", "root": "أ ب و", "pos": "noun", "gloss": "the fathers" },
            { "surface": "وَالأُمَّهَاتِ", "lemma": "أم", "features": "conj+pl.def.gen", "root": "أ م م", "pos": "noun", "gloss": "and the mothers" },
            { "surface": "وَيَغْبِطُهُمَا", "lemma": "غبط", "features": "conj+impf.3ms+3d", "root": "غ ب ط", "pos": "verb", "gloss": "and envies the two of them" },
            { "surface": "أَصْحَابُ", "lemma": "صاحب", "features": "pl.nom.constr", "root": "ص ح ب", "pos": "noun", "gloss": "the possessors of" },
            { "surface": "الأَوْلَادِ", "lemma": "ولد", "features": "pl.def.gen", "root": "و ل د", "pos": "noun", "gloss": "children" },
            { "surface": "وَيَقُوْلُوْنَ", "lemma": "قال", "features": "conj+impf.3mp", "root": "ق و ل", "pos": "verb", "gloss": "and they say" }
          ]
        },
        { "id": "qr1-23-043", "page": 92, "ar": "يَا لَيْتَ لَنَا مِنَ الأَوْلَادِ مِثْلَ مَا أُوْتِيَ فُلَانٌ،", "en": "\"If only we had been given children like so-and-so was given,",
          "tokens": [
            { "surface": "يَا", "lemma": "يا", "features": "part", "root": "—", "pos": "part", "gloss": "oh" },
            { "surface": "لَيْتَ", "lemma": "ليت", "features": "part", "root": "—", "pos": "part", "gloss": "if only" },
            { "surface": "لَنَا", "lemma": "ل", "features": "prep+1p", "root": "—", "pos": "prep", "gloss": "we had" },
            { "surface": "مِنَ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "of" },
            { "surface": "الأَوْلَادِ", "lemma": "ولد", "features": "pl.def.gen", "root": "و ل د", "pos": "noun", "gloss": "children" },
            { "surface": "مِثْلَ", "lemma": "مثل", "features": "acc.constr", "root": "م ث ل", "pos": "noun", "gloss": "the like of" },
            { "surface": "مَا", "lemma": "ما-موصول", "features": "rel", "root": "—", "pos": "rel", "gloss": "what" },
            { "surface": "أُوْتِيَ", "lemma": "آتى", "features": "pass.perf.3ms", "root": "أ ت ي", "pos": "verb", "gloss": "was given" },
            { "surface": "فُلَانٌ", "lemma": "فلان", "features": "indef.nom", "root": "—", "pos": "noun", "gloss": "so-and-so" }
          ]
        },
        { "id": "qr1-23-044", "page": 92, "ar": "إِنَّهُ لَسَعِيْدٌ.", "en": "he is truly fortunate!\"",
          "tokens": [
            { "surface": "إِنَّهُ", "lemma": "إن", "features": "part+3ms", "root": "—", "pos": "part", "gloss": "indeed he" },
            { "surface": "لَسَعِيْدٌ", "lemma": "سعيد", "features": "part+indef.nom", "root": "س ع د", "pos": "adj", "gloss": "is truly fortunate" }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا يَقُوْلُ أَصْحَابُ الأَوْلَادِ عِنْدَمَا يَغْبِطُوْنَ وَالِدَيِ الْوَلَدِ؟",
          "options": [ "«يَا لَيْتَ لَنَا مِنَ الأَوْلَادِ مِثْلَ مَا أُوْتِيَ فُلَانٌ، إِنَّهُ لَسَعِيْدٌ»", "«لَا نُرِيْدُ أَوْلَادًا مِثْلَهُ»", "لَا يَقُوْلُوْنَ شَيْئًا" ],
          "answer": 0,
          "qEn": "What do those who have children say when they envy the boy's parents?",
          "optionsEn": [ "\"If only we had been given children like so-and-so was given -- he is truly fortunate!\"", "\"We don't want children like him\"", "They say nothing" ]
        }
      ]
    },
    {
      "en": "And I will strive to do a deed that will have me called out before all witnesses on the Day of Judgment, so that the people will ask: \"Who is he?\" and it will be said, \"He is the son of so-and-so and so-and-so,\" so my two parents will take joy, and my heart will be at ease.",
      "sentences": [
        { "id": "qr1-23-045", "page": 92, "ar": "وَسَأَجْتَهِدُ أَنْ أَعْمَلَ عَمَلًا يُنَادِيْ بِيْ يَوْمَ الْقِيَامَةِ عَلَىٰ رُؤُوْسِ الأَشْهَادِ فَيَقُوْلُ النَّاسُ:", "en": "And I will strive to do a deed that will have me called out before all witnesses on the Day of Judgment, so that the people will ask:",
          "tokens": [
            { "surface": "وَسَأَجْتَهِدُ", "lemma": "اجتهد", "features": "conj+fut+impf.1s", "root": "ج ه د", "pos": "verb", "gloss": "and I will strive" },
            { "surface": "أَنْ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "to" },
            { "surface": "أَعْمَلَ", "lemma": "عمل-فعل", "features": "subj.1s", "root": "ع م ل", "pos": "verb", "gloss": "I do" },
            { "surface": "عَمَلًا", "lemma": "عمل", "features": "indef.acc", "root": "ع م ل", "pos": "noun", "gloss": "a deed" },
            { "surface": "يُنَادِيْ", "lemma": "نادى", "features": "impf.3ms", "root": "ن د و", "pos": "verb", "gloss": "that calls out" },
            { "surface": "بِيْ", "lemma": "ب", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "to me" },
            { "surface": "يَوْمَ", "lemma": "يوم", "features": "acc.constr", "root": "ي و م", "pos": "noun", "gloss": "on the day of" },
            { "surface": "الْقِيَامَةِ", "lemma": "قيامة", "features": "def.gen", "root": "ق و م", "pos": "noun", "gloss": "the Resurrection" },
            { "surface": "عَلَىٰ", "lemma": "على", "features": "prep", "root": "—", "pos": "prep", "gloss": "before" },
            { "surface": "رُؤُوْسِ", "lemma": "رأس", "features": "pl.gen.constr", "root": "ر أ س", "pos": "noun", "gloss": "the heads of" },
            { "surface": "الأَشْهَادِ", "lemma": "شاهد", "features": "pl.def.gen", "root": "ش ه د", "pos": "noun", "gloss": "the witnesses" },
            { "surface": "فَيَقُوْلُ", "lemma": "قال", "features": "conj+impf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "so say" },
            { "surface": "النَّاسُ", "lemma": "ناس", "features": "def.nom", "root": "ن و س", "pos": "noun", "gloss": "the people" }
          ]
        },
        { "id": "qr1-23-046", "page": 92, "ar": "مَنْ هُوَ؟", "en": "\"Who is he?\"",
          "tokens": [
            { "surface": "مَنْ", "lemma": "من-اسم", "features": "nom", "root": "—", "pos": "noun", "gloss": "who" },
            { "surface": "هُوَ", "lemma": "هو", "features": "nom", "root": "—", "pos": "noun", "gloss": "is he" }
          ]
        },
        { "id": "qr1-23-047", "page": 92, "ar": "فَيُقَالُ: ابْنُ فُلَانٍ وَفُلَانَةٍ،", "en": "and it will be said, \"He is the son of so-and-so and so-and-so,\"",
          "tokens": [
            { "surface": "فَيُقَالُ", "lemma": "قال", "features": "conj+pass.impf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "and it is said" },
            { "surface": "ابْنُ", "lemma": "ابن", "features": "nom.constr", "root": "ب ن ي", "pos": "noun", "gloss": "the son of" },
            { "surface": "فُلَانٍ", "lemma": "فلان", "features": "indef.gen", "root": "—", "pos": "noun", "gloss": "so-and-so" },
            { "surface": "وَفُلَانَةٍ", "lemma": "فلانة", "features": "conj+indef.gen", "root": "—", "pos": "noun", "gloss": "and so-and-so" }
          ]
        },
        { "id": "qr1-23-048", "page": 92, "ar": "فَيَغْتَبِطُ وَالِدَايَ وَيَنْعَمُ بَالِيْ.", "en": "so my two parents will take joy, and my heart will be at ease.",
          "tokens": [
            { "surface": "فَيَغْتَبِطُ", "lemma": "اغتبط", "features": "conj+impf.3ms", "root": "غ ب ط", "pos": "verb", "gloss": "so takes joy" },
            { "surface": "وَالِدَايَ", "lemma": "والد", "features": "du.nom+1s", "root": "و ل د", "pos": "noun", "gloss": "my two parents" },
            { "surface": "وَيَنْعَمُ", "lemma": "نعم-فعل", "features": "conj+impf.3ms", "root": "ن ع م", "pos": "verb", "gloss": "and is at ease" },
            { "surface": "بَالِيْ", "lemma": "بال", "features": "nom+1s", "root": "ب و ل", "pos": "noun", "gloss": "my heart, my mind" }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا يَحْدُثُ عِنْدَمَا يَسْأَلُ النَّاسُ: مَنْ هُوَ؟",
          "options": [ "يُقَالُ: ابْنُ فُلَانٍ وَفُلَانَةٍ، فَيَغْتَبِطُ وَالِدَايَ", "لَا أَحَدَ يُجِيْبُ", "يَقُوْلُوْنَ: لَا نَعْرِفُهُ" ],
          "answer": 0,
          "qEn": "What happens when the people ask, \"Who is he?\"",
          "optionsEn": [ "It is said, \"He is the son of so-and-so and so-and-so,\" and my two parents take joy", "No one answers", "They say, \"We do not know him\"" ]
        }
      ]
    },
    {
      "en": "I have heard that if a child memorizes the Quran, his two parents will be crowned on the Day of Judgment, so I will strive to memorize the Quran, so that my own two parents may be crowned on the Day of Judgment.",
      "sentences": [
        { "id": "qr1-23-049", "page": 92, "ar": "وَقَدْ سَمِعْتُ أَنَّ الْوَلَدَ إِذَا حَفِظَ الْقُرْآنَ تُوِّجَ وَالِدَاهُ يَوْمَ الْقِيَامَةِ،", "en": "I have heard that if a child memorizes the Quran, his two parents will be crowned on the Day of Judgment,",
          "tokens": [
            { "surface": "وَقَدْ", "lemma": "قد", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and indeed" },
            { "surface": "سَمِعْتُ", "lemma": "سمع", "features": "perf.1s", "root": "س م ع", "pos": "verb", "gloss": "I heard" },
            { "surface": "أَنَّ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "that" },
            { "surface": "الْوَلَدَ", "lemma": "ولد", "features": "def.acc", "root": "و ل د", "pos": "noun", "gloss": "the child" },
            { "surface": "إِذَا", "lemma": "اذا", "features": "part", "root": "—", "pos": "part", "gloss": "if, when" },
            { "surface": "حَفِظَ", "lemma": "حفظ", "features": "perf.3ms", "root": "ح ف ظ", "pos": "verb", "gloss": "memorizes" },
            { "surface": "الْقُرْآنَ", "lemma": "قرآن", "features": "def.acc", "root": "ق ر أ", "pos": "proper", "gloss": "the Quran" },
            { "surface": "تُوِّجَ", "lemma": "توج", "features": "pass.perf.3ms", "root": "ت و ج", "pos": "verb", "gloss": "were crowned" },
            { "surface": "وَالِدَاهُ", "lemma": "والد", "features": "du.nom+3ms", "root": "و ل د", "pos": "noun", "gloss": "his two parents" },
            { "surface": "يَوْمَ", "lemma": "يوم", "features": "acc.constr", "root": "ي و م", "pos": "noun", "gloss": "on the day of" },
            { "surface": "الْقِيَامَةِ", "lemma": "قيامة", "features": "def.gen", "root": "ق و م", "pos": "noun", "gloss": "the Resurrection" }
          ]
        },
        { "id": "qr1-23-050", "page": 92, "ar": "فَسَأَجْتَهِدُ فِيْ حِفْظِ الْقُرْآنِ لِيُتَوَّجَ وَالِدَايَ يَوْمَ الْقِيَامَةِ.", "en": "so I will strive to memorize the Quran, so that my own two parents may be crowned on the Day of Judgment.",
          "tokens": [
            { "surface": "فَسَأَجْتَهِدُ", "lemma": "اجتهد", "features": "conj+fut+impf.1s", "root": "ج ه د", "pos": "verb", "gloss": "so I will strive" },
            { "surface": "فِيْ", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "in" },
            { "surface": "حِفْظِ", "lemma": "حفظ-اسم", "features": "gen.constr", "root": "ح ف ظ", "pos": "noun", "gloss": "memorizing" },
            { "surface": "الْقُرْآنِ", "lemma": "قرآن", "features": "def.gen", "root": "ق ر أ", "pos": "proper", "gloss": "the Quran" },
            { "surface": "لِيُتَوَّجَ", "lemma": "توج", "features": "prep+pass.subj.3ms", "root": "ت و ج", "pos": "verb", "gloss": "so that may be crowned" },
            { "surface": "وَالِدَايَ", "lemma": "والد", "features": "du.nom+1s", "root": "و ل د", "pos": "noun", "gloss": "my two parents" },
            { "surface": "يَوْمَ", "lemma": "يوم", "features": "acc.constr", "root": "ي و م", "pos": "noun", "gloss": "on the day of" },
            { "surface": "الْقِيَامَةِ", "lemma": "قيامة", "features": "def.gen", "root": "ق و م", "pos": "noun", "gloss": "the Resurrection" }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا يَحْدُثُ لِوَالِدَيِ الْوَلَدِ إِذَا حَفِظَ الْقُرْآنَ؟",
          "options": [ "يُتَوَّجَانِ يَوْمَ الْقِيَامَةِ", "لَا يَحْدُثُ شَيْءٌ", "يُعْطَيَانِ مَالًا" ],
          "answer": 0,
          "qEn": "What happens to a child's parents if he memorizes the Quran?",
          "optionsEn": [ "The two of them are crowned on the Day of Judgment", "Nothing happens", "They are given money" ]
        }
      ]
    },
    {
      "en": "And I have heard that the martyr intercedes for seventy of the people of his household, so perhaps Allah will grant me martyrdom, and I will intercede for my two parents before all people, and thereby repay some part of their favor upon me.",
      "sentences": [
        { "id": "qr1-23-051", "page": 92, "ar": "وَقَدْ سَمِعْتُ أَنَّ الشَّهِيْدَ يَشْفَعُ لِسَبْعِيْنَ مِنْ أَهْلِ بَيْتِهِ،", "en": "And I have heard that the martyr intercedes for seventy of the people of his household,",
          "tokens": [
            { "surface": "وَقَدْ", "lemma": "قد", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and indeed" },
            { "surface": "سَمِعْتُ", "lemma": "سمع", "features": "perf.1s", "root": "س م ع", "pos": "verb", "gloss": "I heard" },
            { "surface": "أَنَّ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "that" },
            { "surface": "الشَّهِيْدَ", "lemma": "شهيد", "features": "def.acc", "root": "ش ه د", "pos": "noun", "gloss": "the martyr" },
            { "surface": "يَشْفَعُ", "lemma": "شفع", "features": "impf.3ms", "root": "ش ف ع", "pos": "verb", "gloss": "intercedes" },
            { "surface": "لِسَبْعِيْنَ", "lemma": "سبعون", "features": "prep+gen", "root": "س ب ع", "pos": "num", "gloss": "for seventy" },
            { "surface": "مِنْ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "of" },
            { "surface": "أَهْلِ", "lemma": "اهل", "features": "gen.constr", "root": "أ ه ل", "pos": "noun", "gloss": "the people of" },
            { "surface": "بَيْتِهِ", "lemma": "بيت", "features": "gen+3ms", "root": "ب ي ت", "pos": "noun", "gloss": "his household" }
          ]
        },
        { "id": "qr1-23-052", "page": 92, "ar": "وَلَعَلَّ اللهَ يَرْزُقُنِيْ الشَّهَادَةَ،", "en": "so perhaps Allah will grant me martyrdom,",
          "tokens": [
            { "surface": "وَلَعَلَّ", "lemma": "لعل", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and perhaps" },
            { "surface": "اللهَ", "lemma": "الله", "features": "acc", "root": "—", "pos": "proper", "gloss": "Allah" },
            { "surface": "يَرْزُقُنِيْ", "lemma": "رزق", "features": "impf.3ms+1s", "root": "ر ز ق", "pos": "verb", "gloss": "grants me" },
            { "surface": "الشَّهَادَةَ", "lemma": "شهادة", "features": "def.acc", "root": "ش ه د", "pos": "noun", "gloss": "martyrdom" }
          ]
        },
        { "id": "qr1-23-053", "page": 92, "ar": "فَأَشْفَعُ لِوَالِدَيَّ قَبْلَ النَّاسِ،", "en": "and I will intercede for my two parents before all people,",
          "tokens": [
            { "surface": "فَأَشْفَعُ", "lemma": "شفع", "features": "conj+impf.1s", "root": "ش ف ع", "pos": "verb", "gloss": "so I intercede" },
            { "surface": "لِوَالِدَيَّ", "lemma": "والد", "features": "prep+du.gen+1s", "root": "و ل د", "pos": "noun", "gloss": "for my two parents" },
            { "surface": "قَبْلَ", "lemma": "قبل", "features": "acc", "root": "—", "pos": "prep", "gloss": "before" },
            { "surface": "النَّاسِ", "lemma": "ناس", "features": "def.gen", "root": "ن و س", "pos": "noun", "gloss": "the people" }
          ]
        },
        { "id": "qr1-23-054", "page": 92, "ar": "وَبِذٰلِكَ أُجَازِيْ بَعْضَ نِعَمِهِمَا.", "en": "and thereby repay some part of their favor upon me.",
          "tokens": [
            { "surface": "وَبِذٰلِكَ", "lemma": "ذلك", "features": "conj+prep+nom", "root": "—", "pos": "noun", "gloss": "and thereby" },
            { "surface": "أُجَازِيْ", "lemma": "أجازي", "features": "impf.1s", "root": "ج ز ي", "pos": "verb", "gloss": "I repay" },
            { "surface": "بَعْضَ", "lemma": "بعض", "features": "acc.constr", "root": "ب ع ض", "pos": "noun", "gloss": "some of" },
            { "surface": "نِعَمِهِمَا", "lemma": "نعمة", "features": "pl.gen+3d", "root": "ن ع م", "pos": "noun", "gloss": "their two favors" }
          ]
        }
      ],
      "checks": [
        {
          "q": "بِمَاذَا يَشْفَعُ الشَّهِيْدُ يَوْمَ الْقِيَامَةِ؟",
          "options": [ "يَشْفَعُ لِسَبْعِيْنَ مِنْ أَهْلِ بَيْتِهِ", "لَا يَشْفَعُ لِأَحَدٍ", "يَشْفَعُ لِلنَّاسِ كُلِّهِمْ" ],
          "answer": 0,
          "qEn": "For whom does the martyr intercede on the Day of Judgment?",
          "optionsEn": [ "He intercedes for seventy of the people of his household", "He intercedes for no one", "He intercedes for all people" ]
        }
      ]
    }
  ]
};

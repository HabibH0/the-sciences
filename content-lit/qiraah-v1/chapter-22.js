// القراءة الراشدة, volume one, chapter twenty-two -- مُسَابَقَةٌ بَيْنَ شَقِيْقَيْنِ.
//
// Follows the shape of chapter-01.js/chapter-07.js -- see
// ../CHAPTER-FORMAT.md. Hand-authored (vision-model OCR, checked against
// the scan) from qiratur rashida/_al-qir`atur-rashida 1-2.pdf, printed
// pages 88-89. No JSON intermediate (see PROJECT_CONTEXT.md /
// QASAS_AGENT_BRIEF.md). newWords is checked only against chapters 1-10
// and 21, the sibling modules on disk at the time of writing -- re-check
// against 11-20 once they exist.
//
// THIS CHAPTER IS A THIRD-PERSON SIRAH NARRATIVE, the book's second after
// chapter-07.js -- the well-known hadith (Sahih al-Bukhari) of 'Abd
// ar-Rahman ibn 'Awf narrating how the two young Ansari brothers Mu'adh
// and Mu'awwidh, the sons of 'Afra', each secretly resolved to kill Abu
// Jahl at Badr, then both struck him down, each independently telling the
// Prophet ﷺ "I killed him." The ﷺ honorific is excluded from tokens and
// stripped for reconstruction, exactly as chapter-07.js does; dialogue
// tags ("قَالَ:") stay folded into their sentence rather than becoming a
// separate token, same convention.
//
// Homograph notes (same situation as chapter-05.js's ذهب/ذهب-معدن and
// chapter-21.js's من/من-موصول):
//   - "بن" (the name-linker inside "عبد الرحمن بن عوف" etc.) reuses the
//     lemma chapter-09.js already established for it (pos noun, "son
//     of"). "ابن" (the *common* noun in "يَا بْنَ أَخِيْ" -- "O son of my
//     brother!", i.e. "nephew") is chapter-02.js's separate, already
//     -established lemma for the word as real vocabulary. Kept distinct
//     on purpose, matching how the book already treats them as two
//     entries.
//   - "أَيْ" the vocative ("أَيْ عَمِّ!" -- "O uncle!") is keyed "أي-نداء"
//     so it doesn't collide with "أَيُّ" the interrogative ("أَيُّكُمَا
//     قَتَلَهُ؟" -- "which of you two killed him?"), keyed plain "أي".
//     Both appear in this chapter.
//
// Proper names: multi-word name chains ("عَبْدُ الرَّحْمٰنِ", "عَبْدُ" +
// "الرَّحْمٰنِ" both lemma "عبد الرحمن") are tokenized one surface word per
// name-part, all `pos: 'proper'` so none of them is ever offered as a
// build-stage decoy (CHAPTER-FORMAT.md: "proper also excludes the word
// from being used as a decoy"). "أَبُوْ جَهْلٍ" (Abu Jahl) is likewise two
// proper tokens, "أبو"+"جهل", even though "جهل" is also the ordinary word
// for "ignorance" -- here it is purely the second half of a kunya, not
// the common noun, so it is not tokenized as the vocabulary word.
//
// Two-object imperative note: "أَرِنِيْهِ" (form-IV imperative "show!" +
// 1s object "me" + 3ms object "him/it") stacks two pronoun suffixes.
// CHAPTER-FORMAT.md's feature grammar only documents a single trailing
// person-segment; QASAS_AGENT_BRIEF.md §4 flags this exact situation
// ("compound cases like an object pronoun attached to a verb" aren't
// fully spec'd) and says to use best judgement. Extended here to
// "imp.2ms+1s+3ms" (mood/person, then object 1, then object 2) as the
// most legible reading; flagging for a second pair of eyes.
//
// Dual person forms ("سَيْفَيْكُمَا" -- "your(dual) two swords",
// "مَسَحْتُمَا" -- "did you(dual) wipe") use an ad hoc "2d" person code.
// The documented list (1s 1p 2ms 2fs 3ms 3fs 3mp 3fp) has no dual slot;
// QASAS_AGENT_BRIEF.md §4 explicitly sanctions this ("if you need 2mp,
// 3d, etc., use them anyway; they'll just print literally... a safe
// degradation, not a validation failure").
export const CHAPTER = {
  "id": "ch22",
  "number": 22,
  "title": {
    "ar": "مُسَابَقَةٌ بَيْنَ شَقِيْقَيْنِ",
    "en": "A Race Between Two Brothers"
  },
  "pages": [
    88,
    89
  ],
  "register": "third_person_sirah_narrative",
  "newWords": [
    "غلام",
    "التفت",
    "سب",
    "أعطى",
    "عهد",
    "قتل",
    "دون",
    "عاين",
    "بين",
    "إذ",
    "ألا",
    "شد",
    "صقر",
    "انصرف",
    "أي",
    "أي-نداء",
    "مسح",
    "كلا",
    "سيد",
    "أبو",
    "جهل",
    "أنصار",
    "شمال"
  ],
  "lemmas": {
    "سيد": {
      "root": "س و د",
      "pos": "noun",
      "gloss": "master, liege-lord (honorific for a Companion)",
      "content": true
    },
    "عبد الرحمن": {
      "root": "ع ب د / ر ح م",
      "pos": "proper",
      "gloss": "'Abd ar-Rahman (a name)",
      "content": true
    },
    "بن": {
      "root": "ب ن و",
      "pos": "noun",
      "gloss": "son of",
      "content": true
    },
    "عوف": {
      "root": "—",
      "pos": "proper",
      "gloss": "'Awf (a name)",
      "content": true
    },
    "رضي": {
      "root": "ر ض ي",
      "pos": "verb",
      "gloss": "to be pleased with",
      "content": true
    },
    "الله": {
      "root": "—",
      "pos": "proper",
      "gloss": "Allah",
      "content": true
    },
    "عن": {
      "root": "—",
      "pos": "prep",
      "gloss": "about, from; with",
      "content": false
    },
    "كان": {
      "root": "ك و ن",
      "pos": "verb",
      "gloss": "to be",
      "content": true
    },
    "وقف": {
      "root": "و ق ف",
      "pos": "adj",
      "gloss": "standing",
      "content": true
    },
    "يوم": {
      "root": "ي و م",
      "pos": "noun",
      "gloss": "day",
      "content": true
    },
    "بدر": {
      "root": "—",
      "pos": "proper",
      "gloss": "Badr (the battle)",
      "content": true
    },
    "غلام": {
      "root": "غ ل م",
      "pos": "noun",
      "gloss": "boy, young man",
      "content": true
    },
    "من": {
      "root": "—",
      "pos": "prep",
      "gloss": "from, of",
      "content": false
    },
    "أنصار": {
      "root": "ن ص ر",
      "pos": "proper",
      "gloss": "the Ansar (the Medinan Helpers)",
      "content": true
    },
    "معاذ": {
      "root": "—",
      "pos": "proper",
      "gloss": "Mu'adh (a name)",
      "content": true
    },
    "عفراء": {
      "root": "—",
      "pos": "proper",
      "gloss": "'Afra' (a name, their mother's)",
      "content": true
    },
    "معوذ": {
      "root": "—",
      "pos": "proper",
      "gloss": "Mu'awwidh (a name)",
      "content": true
    },
    "يمين": {
      "root": "ي م ن",
      "pos": "noun",
      "gloss": "right (side)",
      "content": true
    },
    "شمال": {
      "root": "ش م ل",
      "pos": "noun",
      "gloss": "left (side)",
      "content": true
    },
    "التفت": {
      "root": "ل ف ت",
      "pos": "verb",
      "gloss": "to turn towards",
      "content": true
    },
    "إلى": {
      "root": "—",
      "pos": "prep",
      "gloss": "to",
      "content": false
    },
    "أحد": {
      "root": "أ ح د",
      "pos": "noun",
      "gloss": "one, one of",
      "content": true
    },
    "قال": {
      "root": "ق و ل",
      "pos": "verb",
      "gloss": "to say",
      "content": true
    },
    "ل": {
      "root": "—",
      "pos": "prep",
      "gloss": "to, for",
      "content": false
    },
    "سر": {
      "root": "س ر ر",
      "pos": "noun",
      "gloss": "secret; secretly",
      "content": true
    },
    "صاحب": {
      "root": "ص ح ب",
      "pos": "noun",
      "gloss": "companion",
      "content": true
    },
    "أي-نداء": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "عم": {
      "root": "ع م م",
      "pos": "noun",
      "gloss": "paternal uncle",
      "content": true
    },
    "هل": {
      "root": "—",
      "pos": "part",
      "gloss": "[yes/no question particle]",
      "content": false
    },
    "عرف": {
      "root": "ع ر ف",
      "pos": "verb",
      "gloss": "to know",
      "content": true
    },
    "أبو": {
      "root": "أ ب و",
      "pos": "proper",
      "gloss": "Abu (\"father of\", in a kunya)",
      "content": true
    },
    "جهل": {
      "root": "ج ه ل",
      "pos": "proper",
      "gloss": "Jahl (in the kunya Abu Jahl)",
      "content": true
    },
    "نعم": {
      "root": "—",
      "pos": "part",
      "gloss": "yes",
      "content": false
    },
    "ماذا": {
      "root": "—",
      "pos": "part",
      "gloss": "what",
      "content": false
    },
    "أراد": {
      "root": "ر و د",
      "pos": "verb",
      "gloss": "to want",
      "content": true
    },
    "يا": {
      "root": "—",
      "pos": "part",
      "gloss": "O (vocative)",
      "content": false
    },
    "ابن": {
      "root": "ب ن ي",
      "pos": "noun",
      "gloss": "son",
      "content": true
    },
    "أخ": {
      "root": "أ خ و",
      "pos": "noun",
      "gloss": "brother",
      "content": true
    },
    "أخبر": {
      "root": "خ ب ر",
      "pos": "verb",
      "gloss": "to inform",
      "content": true
    },
    "أن": {
      "root": "—",
      "pos": "part",
      "gloss": "that",
      "content": false
    },
    "سب": {
      "root": "س ب ب",
      "pos": "verb",
      "gloss": "to insult, revile",
      "content": true
    },
    "رسول": {
      "root": "ر س ل",
      "pos": "noun",
      "gloss": "messenger",
      "content": true
    },
    "أرى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to show",
      "content": true
    },
    "أعطى": {
      "root": "ع ط و",
      "pos": "verb",
      "gloss": "to give",
      "content": true
    },
    "عهد": {
      "root": "ع ه د",
      "pos": "noun",
      "gloss": "covenant, solemn word",
      "content": true
    },
    "إن": {
      "root": "—",
      "pos": "part",
      "gloss": "if; indeed, verily",
      "content": false
    },
    "رأى": {
      "root": "ر أ ي",
      "pos": "verb",
      "gloss": "to see",
      "content": true
    },
    "قتل": {
      "root": "ق ت ل",
      "pos": "verb",
      "gloss": "to kill",
      "content": true
    },
    "أو": {
      "root": "—",
      "pos": "conj",
      "gloss": "or",
      "content": false
    },
    "مات": {
      "root": "م و ت",
      "pos": "verb",
      "gloss": "to die",
      "content": true
    },
    "دون": {
      "root": "د و ن",
      "pos": "prep",
      "gloss": "short of, rather than fail; without",
      "content": true
    },
    "آخر": {
      "root": "أ خ ر",
      "pos": "adj",
      "gloss": "other, another",
      "content": true
    },
    "عاهد": {
      "root": "ع ه د",
      "pos": "verb",
      "gloss": "to pledge, make a covenant",
      "content": true
    },
    "عاين": {
      "root": "ع ي ن",
      "pos": "verb",
      "gloss": "to see with one's own eyes, lay eyes on",
      "content": true,
      "book_note": "عَايَنَ يُعَايِنُ الرَّجُلُ فُلَاناً: أَيْ رَآهُ بِعَيْنِهِ"
    },
    "ضرب": {
      "root": "ض ر ب",
      "pos": "verb",
      "gloss": "to strike",
      "content": true
    },
    "سيف": {
      "root": "س ي ف",
      "pos": "noun",
      "gloss": "sword",
      "content": true
    },
    "حتى": {
      "root": "—",
      "pos": "part",
      "gloss": "until",
      "content": false
    },
    "بين": {
      "root": "ب ي ن",
      "pos": "adv",
      "gloss": "while",
      "content": true
    },
    "أنا": {
      "root": "—",
      "pos": "noun",
      "gloss": "I",
      "content": false
    },
    "كذلك": {
      "root": "—",
      "pos": "adv",
      "gloss": "thus, like that",
      "content": true
    },
    "إذ": {
      "root": "—",
      "pos": "part",
      "gloss": "when, just then",
      "content": true
    },
    "برز": {
      "root": "ب ر ز",
      "pos": "verb",
      "gloss": "to emerge, come to the fore",
      "content": true
    },
    "ألا": {
      "root": "—",
      "pos": "part",
      "gloss": "do you not...?, verily",
      "content": true
    },
    "هذا": {
      "root": "—",
      "pos": "dem",
      "gloss": "this (m.)",
      "content": false
    },
    "شد": {
      "root": "ش د د",
      "pos": "verb",
      "gloss": "to set upon, charge at",
      "content": true
    },
    "على": {
      "root": "—",
      "pos": "prep",
      "gloss": "upon",
      "content": false
    },
    "مثل": {
      "root": "م ث ل",
      "pos": "noun",
      "gloss": "the like of",
      "content": true
    },
    "صقر": {
      "root": "ص ق ر",
      "pos": "noun",
      "gloss": "falcon",
      "content": true
    },
    "ثم": {
      "root": "—",
      "pos": "conj",
      "gloss": "then",
      "content": false
    },
    "انصرف": {
      "root": "ص ر ف",
      "pos": "verb",
      "gloss": "to turn away, depart",
      "content": true,
      "book_note": "انْصَرَفَ يَنْصَرِفُ: ذَهَبَ"
    },
    "نبي": {
      "root": "ن ب أ",
      "pos": "noun",
      "gloss": "prophet",
      "content": true
    },
    "أي": {
      "root": "—",
      "pos": "part",
      "gloss": "which",
      "content": false
    },
    "كل": {
      "root": "ك ل ل",
      "pos": "noun",
      "gloss": "each, every",
      "content": true
    },
    "مسح": {
      "root": "م س ح",
      "pos": "verb",
      "gloss": "to wipe",
      "content": true
    },
    "لا": {
      "root": "—",
      "pos": "part",
      "gloss": "no; not",
      "content": false
    },
    "نظر": {
      "root": "ن ظ ر",
      "pos": "verb",
      "gloss": "to look",
      "content": true
    },
    "في": {
      "root": "—",
      "pos": "prep",
      "gloss": "in, at",
      "content": false
    },
    "كلا": {
      "root": "ك ل و",
      "pos": "noun",
      "gloss": "both (of the two)",
      "content": true
    }
  },
  "paragraphs": [
    {
      "id": "p1",
      "en": "Our master 'Abd ar-Rahman ibn 'Awf, may Allah be pleased with him, said: I was standing on the day of Badr, with two young men of the Ansar, Mu'adh ibn 'Afra' and Mu'awwidh ibn 'Afra', on my right and my left. One of them turned to me and said to me, secretly from his companion: \"O uncle! Do you know Abu Jahl?\" I said: \"Yes! And what do you want with him, nephew?\"",
      "sentences": [
        {
          "id": "qr1-22-001",
          "page": 88,
          "ar": "قَالَ سَيِّدُنَا عَبْدُ الرَّحْمٰنِ بْنُ عَوْفٍ رَضِيَ اللهُ عَنْهُ: كُنْتُ وَاقِفاً يَوْمَ بَدْرٍ وَغُلاَمَانِ مِنَ الْأَنْصَارِ مُعَاذُ بْنُ عَفْرَاءَ وَمُعَوَّذُ بْنُ عَفْرَاءَ عَنْ يَمِيْنِيْ وَشِمَالِيْ.",
          "en": "Our master 'Abd ar-Rahman ibn 'Awf, may Allah be pleased with him, said: I was standing on the day of Badr, with two young men of the Ansar -- Mu'adh ibn 'Afra' and Mu'awwidh ibn 'Afra' -- on my right and my left.",
          "tokens": [
            { "surface": "قَالَ", "lemma": "قال", "features": "perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "he said" },
            { "surface": "سَيِّدُنَا", "lemma": "سيد", "features": "nom+1p", "root": "س و د", "pos": "noun", "gloss": "our master" },
            { "surface": "عَبْدُ", "lemma": "عبد الرحمن", "features": "nom", "root": "ع ب د / ر ح م", "pos": "proper", "gloss": "'Abd" },
            { "surface": "الرَّحْمٰنِ", "lemma": "عبد الرحمن", "features": "gen", "root": "ع ب د / ر ح م", "pos": "proper", "gloss": "ar-Rahman" },
            { "surface": "بْنُ", "lemma": "بن", "features": "nom.constr", "root": "ب ن و", "pos": "noun", "gloss": "son of" },
            { "surface": "عَوْفٍ", "lemma": "عوف", "features": "gen", "root": "—", "pos": "proper", "gloss": "'Awf" },
            { "surface": "رَضِيَ", "lemma": "رضي", "features": "perf.3ms", "root": "ر ض ي", "pos": "verb", "gloss": "was pleased" },
            { "surface": "اللهُ", "lemma": "الله", "features": "nom", "root": "—", "pos": "proper", "gloss": "Allah" },
            { "surface": "عَنْهُ", "lemma": "عن", "features": "prep+3ms", "root": "—", "pos": "prep", "gloss": "with him" },
            { "surface": "كُنْتُ", "lemma": "كان", "features": "perf.1s", "root": "ك و ن", "pos": "verb", "gloss": "I was" },
            { "surface": "وَاقِفاً", "lemma": "وقف", "features": "indef.acc", "root": "و ق ف", "pos": "adj", "gloss": "standing" },
            { "surface": "يَوْمَ", "lemma": "يوم", "features": "acc.constr", "root": "ي و م", "pos": "noun", "gloss": "the day of" },
            { "surface": "بَدْرٍ", "lemma": "بدر", "features": "gen", "root": "—", "pos": "proper", "gloss": "Badr" },
            { "surface": "وَغُلاَمَانِ", "lemma": "غلام", "features": "conj+du.nom", "root": "غ ل م", "pos": "noun", "gloss": "and two young men" },
            { "surface": "مِنَ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "of" },
            { "surface": "الْأَنْصَارِ", "lemma": "أنصار", "features": "def.gen", "root": "ن ص ر", "pos": "proper", "gloss": "the Ansar" },
            { "surface": "مُعَاذُ", "lemma": "معاذ", "features": "nom", "root": "—", "pos": "proper", "gloss": "Mu'adh" },
            { "surface": "بْنُ", "lemma": "بن", "features": "nom.constr", "root": "ب ن و", "pos": "noun", "gloss": "son of" },
            { "surface": "عَفْرَاءَ", "lemma": "عفراء", "features": "gen", "root": "—", "pos": "proper", "gloss": "'Afra'" },
            { "surface": "وَمُعَوَّذُ", "lemma": "معوذ", "features": "conj+nom", "root": "—", "pos": "proper", "gloss": "and Mu'awwidh" },
            { "surface": "بْنُ", "lemma": "بن", "features": "nom.constr", "root": "ب ن و", "pos": "noun", "gloss": "son of" },
            { "surface": "عَفْرَاءَ", "lemma": "عفراء", "features": "gen", "root": "—", "pos": "proper", "gloss": "'Afra'" },
            { "surface": "عَنْ", "lemma": "عن", "features": "prep", "root": "—", "pos": "prep", "gloss": "on" },
            { "surface": "يَمِيْنِيْ", "lemma": "يمين", "features": "gen+1s", "root": "ي م ن", "pos": "noun", "gloss": "my right" },
            { "surface": "وَشِمَالِيْ", "lemma": "شمال", "features": "conj+gen+1s", "root": "ش م ل", "pos": "noun", "gloss": "and my left" }
          ]
        },
        {
          "id": "qr1-22-002",
          "page": 88,
          "ar": "وَالْتَفَتَ إِلَيَّ أَحَدُهُمَا،",
          "en": "One of them turned to me,",
          "tokens": [
            { "surface": "وَالْتَفَتَ", "lemma": "التفت", "features": "conj+perf.3ms", "root": "ل ف ت", "pos": "verb", "gloss": "and he turned" },
            { "surface": "إِلَيَّ", "lemma": "إلى", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "to me" },
            { "surface": "أَحَدُهُمَا", "lemma": "أحد", "features": "nom+3d", "root": "أ ح د", "pos": "noun", "gloss": "one of the two of them" }
          ]
        },
        {
          "id": "qr1-22-003",
          "page": 88,
          "ar": "وَقَالَ لِيْ سِرًّا مِنْ صَاحِبِهِ: «أَيْ عَمِّ! هَلْ تَعْرِفُ أَبَا جَهْلٍ؟»",
          "en": "and said to me, secretly from his companion: \"O uncle! Do you know Abu Jahl?\"",
          "tokens": [
            { "surface": "وَقَالَ", "lemma": "قال", "features": "conj+perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "and he said" },
            { "surface": "لِيْ", "lemma": "ل", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "to me" },
            { "surface": "سِرًّا", "lemma": "سر", "features": "indef.acc", "root": "س ر ر", "pos": "noun", "gloss": "secretly" },
            { "surface": "مِنْ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "from" },
            { "surface": "صَاحِبِهِ", "lemma": "صاحب", "features": "gen+3ms", "root": "ص ح ب", "pos": "noun", "gloss": "his companion" },
            { "surface": "أَيْ", "lemma": "أي-نداء", "features": "part", "root": "—", "pos": "part", "gloss": "O" },
            { "surface": "عَمِّ", "lemma": "عم", "features": "nom+1s", "root": "ع م م", "pos": "noun", "gloss": "my uncle" },
            { "surface": "هَلْ", "lemma": "هل", "features": "part", "root": "—", "pos": "part", "gloss": "[question]" },
            { "surface": "تَعْرِفُ", "lemma": "عرف", "features": "impf.2ms", "root": "ع ر ف", "pos": "verb", "gloss": "do you know" },
            { "surface": "أَبَا", "lemma": "أبو", "features": "acc.constr", "root": "أ ب و", "pos": "proper", "gloss": "Abu" },
            { "surface": "جَهْلٍ", "lemma": "جهل", "features": "gen", "root": "ج ه ل", "pos": "proper", "gloss": "Jahl" }
          ]
        },
        {
          "id": "qr1-22-004",
          "page": 88,
          "ar": "فَقُلْتُ: نَعَمْ! وَمَاذَا تُرِيْدُ مِنْهُ يَا بْنَ أَخِيْ؟",
          "en": "I said: \"Yes! And what do you want with him, nephew?\"",
          "tokens": [
            { "surface": "فَقُلْتُ", "lemma": "قال", "features": "conj+perf.1s", "root": "ق و ل", "pos": "verb", "gloss": "and I said" },
            { "surface": "نَعَمْ", "lemma": "نعم", "features": "part", "root": "—", "pos": "part", "gloss": "yes" },
            { "surface": "وَمَاذَا", "lemma": "ماذا", "features": "conj+part", "root": "—", "pos": "part", "gloss": "and what" },
            { "surface": "تُرِيْدُ", "lemma": "أراد", "features": "impf.2ms", "root": "ر و د", "pos": "verb", "gloss": "do you want" },
            { "surface": "مِنْهُ", "lemma": "من", "features": "prep+3ms", "root": "—", "pos": "prep", "gloss": "from him" },
            { "surface": "يَا", "lemma": "يا", "features": "part", "root": "—", "pos": "part", "gloss": "O" },
            { "surface": "بْنَ", "lemma": "ابن", "features": "acc.constr", "root": "ب ن ي", "pos": "noun", "gloss": "son of" },
            { "surface": "أَخِيْ", "lemma": "أخ", "features": "gen+1s", "root": "أ خ و", "pos": "noun", "gloss": "my brother" }
          ]
        }
      ],
      "checks": [
        {
          "q": "أَيْنَ كَانَ عَبْدُ الرَّحْمٰنِ بْنُ عَوْفٍ وَاقِفاً؟",
          "options": [
            "يَوْمَ بَدْرٍ، بَيْنَ غُلاَمَيْنِ مِنَ الْأَنْصَارِ",
            "فِيْ الْمَدِيْنَةِ وَحْدَهُ",
            "فِيْ السُّوْقِ"
          ],
          "answer": 0,
          "qEn": "Where was 'Abd ar-Rahman ibn 'Awf standing?",
          "optionsEn": [
            "On the day of Badr, between two young men of the Ansar",
            "In Madinah, alone",
            "In the market"
          ]
        }
      ]
    },
    {
      "id": "p2",
      "en": "He said: \"I have been told that he insults the Messenger of Allah ﷺ -- show him to me, uncle! For I have given Allah my word that if I see him, I will kill him or die rather than fail.\" And the other said to me, secretly from his companion: \"Show him to me, uncle! For I have pledged to Allah that if I lay eyes on him, I will strike him with my sword until I kill him.\"",
      "sentences": [
        {
          "id": "qr1-22-005",
          "page": 88,
          "ar": "قَالَ: أُخْبِرْتُ أَنَّهُ يَسُبُّ رَسُوْلَ اللهِ ﷺ،",
          "en": "He said: \"I have been told that he insults the Messenger of Allah ﷺ,\"",
          "tokens": [
            { "surface": "قَالَ", "lemma": "قال", "features": "perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "he said" },
            { "surface": "أُخْبِرْتُ", "lemma": "أخبر", "features": "perf.pass.1s", "root": "خ ب ر", "pos": "verb", "gloss": "I have been told" },
            { "surface": "أَنَّهُ", "lemma": "أن", "features": "part+3ms", "root": "—", "pos": "part", "gloss": "that he" },
            { "surface": "يَسُبُّ", "lemma": "سب", "features": "impf.3ms", "root": "س ب ب", "pos": "verb", "gloss": "he insults" },
            { "surface": "رَسُوْلَ", "lemma": "رسول", "features": "acc.constr", "root": "ر س ل", "pos": "noun", "gloss": "the Messenger of" },
            { "surface": "اللهِ", "lemma": "الله", "features": "gen", "root": "—", "pos": "proper", "gloss": "Allah" }
          ]
        },
        {
          "id": "qr1-22-006",
          "page": 88,
          "ar": "أَرِنِيْهِ يَا عَمِّ! فَإِنِّيْ أَعْطَيْتُ اللهَ عَهْدًا إِنْ رَأَيْتُهُ أَنْ أَقْتُلَهُ أَوْ أَمُوْتَ دُوْنَهُ.",
          "en": "\"show him to me, uncle! For I have given Allah my word that if I see him, I will kill him or die rather than fail.\"",
          "tokens": [
            { "surface": "أَرِنِيْهِ", "lemma": "أرى", "features": "imp.2ms+1s+3ms", "root": "ر أ ي", "pos": "verb", "gloss": "show me him" },
            { "surface": "يَا", "lemma": "يا", "features": "part", "root": "—", "pos": "part", "gloss": "O" },
            { "surface": "عَمِّ", "lemma": "عم", "features": "nom+1s", "root": "ع م م", "pos": "noun", "gloss": "my uncle" },
            { "surface": "فَإِنِّيْ", "lemma": "إن", "features": "conj+part+1s", "root": "—", "pos": "part", "gloss": "for indeed I" },
            { "surface": "أَعْطَيْتُ", "lemma": "أعطى", "features": "perf.1s", "root": "ع ط و", "pos": "verb", "gloss": "I have given" },
            { "surface": "اللهَ", "lemma": "الله", "features": "acc", "root": "—", "pos": "proper", "gloss": "Allah" },
            { "surface": "عَهْدًا", "lemma": "عهد", "features": "indef.acc", "root": "ع ه د", "pos": "noun", "gloss": "a covenant" },
            { "surface": "إِنْ", "lemma": "إن", "features": "part", "root": "—", "pos": "part", "gloss": "if" },
            { "surface": "رَأَيْتُهُ", "lemma": "رأى", "features": "perf.1s+3ms", "root": "ر أ ي", "pos": "verb", "gloss": "I see him" },
            { "surface": "أَنْ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "that" },
            { "surface": "أَقْتُلَهُ", "lemma": "قتل", "features": "impf.1s+3ms", "root": "ق ت ل", "pos": "verb", "gloss": "I kill him" },
            { "surface": "أَوْ", "lemma": "أو", "features": "conj", "root": "—", "pos": "conj", "gloss": "or" },
            { "surface": "أَمُوْتَ", "lemma": "مات", "features": "impf.1s", "root": "م و ت", "pos": "verb", "gloss": "I die" },
            { "surface": "دُوْنَهُ", "lemma": "دون", "features": "prep+3ms", "root": "د و ن", "pos": "prep", "gloss": "rather than fail him" }
          ]
        },
        {
          "id": "qr1-22-007",
          "page": 88,
          "ar": "وَقَالَ لِيَ الْآخَرُ سِرًّا مِنْ صَاحِبِهِ: أَرِنِيْهِ يَا عَمِّ! فَإِنِّيْ عَاهَدْتُ اللهَ إِنْ عَايَنْتُهُ أَنْ أَضْرِبَهُ بِسَيْفِيْ حَتَّىٰ أَقْتُلَهُ.",
          "en": "And the other said to me, secretly from his companion: \"Show him to me, uncle! For I have pledged to Allah that if I lay eyes on him, I will strike him with my sword until I kill him.\"",
          "tokens": [
            { "surface": "وَقَالَ", "lemma": "قال", "features": "conj+perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "and he said" },
            { "surface": "لِيَ", "lemma": "ل", "features": "prep+1s", "root": "—", "pos": "prep", "gloss": "to me" },
            { "surface": "الْآخَرُ", "lemma": "آخر", "features": "def.nom", "root": "أ خ ر", "pos": "adj", "gloss": "the other" },
            { "surface": "سِرًّا", "lemma": "سر", "features": "indef.acc", "root": "س ر ر", "pos": "noun", "gloss": "secretly" },
            { "surface": "مِنْ", "lemma": "من", "features": "prep", "root": "—", "pos": "prep", "gloss": "from" },
            { "surface": "صَاحِبِهِ", "lemma": "صاحب", "features": "gen+3ms", "root": "ص ح ب", "pos": "noun", "gloss": "his companion" },
            { "surface": "أَرِنِيْهِ", "lemma": "أرى", "features": "imp.2ms+1s+3ms", "root": "ر أ ي", "pos": "verb", "gloss": "show me him" },
            { "surface": "يَا", "lemma": "يا", "features": "part", "root": "—", "pos": "part", "gloss": "O" },
            { "surface": "عَمِّ", "lemma": "عم", "features": "nom+1s", "root": "ع م م", "pos": "noun", "gloss": "my uncle" },
            { "surface": "فَإِنِّيْ", "lemma": "إن", "features": "conj+part+1s", "root": "—", "pos": "part", "gloss": "for indeed I" },
            { "surface": "عَاهَدْتُ", "lemma": "عاهد", "features": "perf.1s", "root": "ع ه د", "pos": "verb", "gloss": "I have pledged" },
            { "surface": "اللهَ", "lemma": "الله", "features": "acc", "root": "—", "pos": "proper", "gloss": "Allah" },
            { "surface": "إِنْ", "lemma": "إن", "features": "part", "root": "—", "pos": "part", "gloss": "if" },
            { "surface": "عَايَنْتُهُ", "lemma": "عاين", "features": "perf.1s+3ms", "root": "ع ي ن", "pos": "verb", "gloss": "I lay eyes on him" },
            { "surface": "أَنْ", "lemma": "أن", "features": "part", "root": "—", "pos": "part", "gloss": "that" },
            { "surface": "أَضْرِبَهُ", "lemma": "ضرب", "features": "impf.1s+3ms", "root": "ض ر ب", "pos": "verb", "gloss": "I strike him" },
            { "surface": "بِسَيْفِيْ", "lemma": "سيف", "features": "prep+gen+1s", "root": "س ي ف", "pos": "noun", "gloss": "with my sword" },
            { "surface": "حَتَّىٰ", "lemma": "حتى", "features": "part", "root": "—", "pos": "part", "gloss": "until" },
            { "surface": "أَقْتُلَهُ", "lemma": "قتل", "features": "impf.1s+3ms", "root": "ق ت ل", "pos": "verb", "gloss": "I kill him" }
          ]
        }
      ],
      "checks": [
        {
          "q": "لِمَاذَا أَرَادَ الْغُلَامَانِ أَنْ يَرَيَا أَبَا جَهْلٍ؟",
          "options": [
            "لِأَنَّهُمَا عَاهَدَا اللهَ أَنْ يَقْتُلَاهُ لِأَنَّهُ يَسُبُّ رَسُوْلَ اللهِ ﷺ",
            "لِأَنَّهُمَا أَرَادَا التَّعَرُّفَ عَلَيْهِ فَقَطْ",
            "لِأَنَّ أَبَاهُمَا أَمَرَهُمَا بِذٰلِكَ"
          ],
          "answer": 0,
          "qEn": "Why did the two young men want to see Abu Jahl?",
          "optionsEn": [
            "Because they had each pledged to Allah to kill him, since he insulted the Messenger of Allah ﷺ",
            "Because they only wanted to be introduced to him",
            "Because their father had ordered them to"
          ]
        }
      ]
    },
    {
      "id": "p3",
      "en": "While I was like that, Abu Jahl appeared, so I said: \"Do you two not see? This is Abu Jahl, this is your man.\" So the two of them set upon him like two falcons, until they struck him down. Then the two of them turned back to the Prophet ﷺ and told him.",
      "sentences": [
        {
          "id": "qr1-22-008",
          "page": 89,
          "ar": "فَبَيْنَا أَنَا كَذٰلِكَ إِذْ بَرَزَ أَبُوْ جَهْلٍ،",
          "en": "While I was like that, Abu Jahl appeared,",
          "tokens": [
            { "surface": "فَبَيْنَا", "lemma": "بين", "features": "conj+adv", "root": "ب ي ن", "pos": "adv", "gloss": "and while" },
            { "surface": "أَنَا", "lemma": "أنا", "features": "nom.1s", "root": "—", "pos": "noun", "gloss": "I" },
            { "surface": "كَذٰلِكَ", "lemma": "كذلك", "features": "adv", "root": "—", "pos": "adv", "gloss": "like that" },
            { "surface": "إِذْ", "lemma": "إذ", "features": "part", "root": "—", "pos": "part", "gloss": "when, just then" },
            { "surface": "بَرَزَ", "lemma": "برز", "features": "perf.3ms", "root": "ب ر ز", "pos": "verb", "gloss": "he appeared" },
            { "surface": "أَبُوْ", "lemma": "أبو", "features": "nom.constr", "root": "أ ب و", "pos": "proper", "gloss": "Abu" },
            { "surface": "جَهْلٍ", "lemma": "جهل", "features": "gen", "root": "ج ه ل", "pos": "proper", "gloss": "Jahl" }
          ]
        },
        {
          "id": "qr1-22-009",
          "page": 89,
          "ar": "فَقُلْتُ: أَلَا تَرَيَانِ؟ هٰذَا أَبُوْ جَهْلٍ،",
          "en": "so I said: \"Do you two not see? This is Abu Jahl,",
          "tokens": [
            { "surface": "فَقُلْتُ", "lemma": "قال", "features": "conj+perf.1s", "root": "ق و ل", "pos": "verb", "gloss": "and I said" },
            { "surface": "أَلَا", "lemma": "ألا", "features": "part", "root": "—", "pos": "part", "gloss": "do you not...?" },
            { "surface": "تَرَيَانِ", "lemma": "رأى", "features": "impf.2d", "root": "ر أ ي", "pos": "verb", "gloss": "do you two see" },
            { "surface": "هٰذَا", "lemma": "هذا", "features": "dem", "root": "—", "pos": "dem", "gloss": "this" },
            { "surface": "أَبُوْ", "lemma": "أبو", "features": "nom.constr", "root": "أ ب و", "pos": "proper", "gloss": "Abu" },
            { "surface": "جَهْلٍ", "lemma": "جهل", "features": "gen", "root": "ج ه ل", "pos": "proper", "gloss": "Jahl" }
          ]
        },
        {
          "id": "qr1-22-010",
          "page": 89,
          "ar": "هٰذَا صَاحِبُكُمْ،",
          "en": "this is your man\" --",
          "tokens": [
            { "surface": "هٰذَا", "lemma": "هذا", "features": "dem", "root": "—", "pos": "dem", "gloss": "this" },
            { "surface": "صَاحِبُكُمْ", "lemma": "صاحب", "features": "nom+2mp", "root": "ص ح ب", "pos": "noun", "gloss": "your man" }
          ]
        },
        {
          "id": "qr1-22-011",
          "page": 89,
          "ar": "فَشَدَّا عَلَيْهِ مِثْلَ الصَّقْرَيْنِ حَتَّىٰ ضَرَبَاهُ.",
          "en": "So the two of them set upon him like two falcons, until they struck him down.",
          "tokens": [
            { "surface": "فَشَدَّا", "lemma": "شد", "features": "conj+perf.3d", "root": "ش د د", "pos": "verb", "gloss": "and the two of them set upon" },
            { "surface": "عَلَيْهِ", "lemma": "على", "features": "prep+3ms", "root": "—", "pos": "prep", "gloss": "upon him" },
            { "surface": "مِثْلَ", "lemma": "مثل", "features": "acc.constr", "root": "م ث ل", "pos": "noun", "gloss": "like" },
            { "surface": "الصَّقْرَيْنِ", "lemma": "صقر", "features": "du.def.gen", "root": "ص ق ر", "pos": "noun", "gloss": "the two falcons" },
            { "surface": "حَتَّىٰ", "lemma": "حتى", "features": "part", "root": "—", "pos": "part", "gloss": "until" },
            { "surface": "ضَرَبَاهُ", "lemma": "ضرب", "features": "perf.3d+3ms", "root": "ض ر ب", "pos": "verb", "gloss": "the two of them struck him" }
          ]
        },
        {
          "id": "qr1-22-012",
          "page": 89,
          "ar": "ثُمَّ انْصَرَفَا إِلَى النَّبِيِّ ﷺ فَأَخْبَرَاهُ.",
          "en": "Then the two of them turned back to the Prophet ﷺ and told him.",
          "tokens": [
            { "surface": "ثُمَّ", "lemma": "ثم", "features": "conj", "root": "—", "pos": "conj", "gloss": "then" },
            { "surface": "انْصَرَفَا", "lemma": "انصرف", "features": "perf.3d", "root": "ص ر ف", "pos": "verb", "gloss": "the two of them turned back" },
            { "surface": "إِلَى", "lemma": "إلى", "features": "prep", "root": "—", "pos": "prep", "gloss": "to" },
            { "surface": "النَّبِيِّ", "lemma": "نبي", "features": "def.gen", "root": "ن ب أ", "pos": "noun", "gloss": "the Prophet" },
            { "surface": "فَأَخْبَرَاهُ", "lemma": "أخبر", "features": "conj+perf.3d+3ms", "root": "خ ب ر", "pos": "verb", "gloss": "and the two of them told him" }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا فَعَلَ الْغُلَامَانِ لَمَّا بَرَزَ أَبُوْ جَهْلٍ؟",
          "options": [
            "شَدَّا عَلَيْهِ مِثْلَ الصَّقْرَيْنِ حَتَّىٰ ضَرَبَاهُ",
            "هَرَبَا مِنْهُ",
            "سَأَلَاهُ عَنِ اسْمِهِ"
          ],
          "answer": 0,
          "qEn": "What did the two young men do when Abu Jahl appeared?",
          "optionsEn": [
            "They set upon him like two falcons, until they struck him down",
            "They fled from him",
            "They asked him his name"
          ]
        }
      ]
    },
    {
      "id": "p4",
      "en": "He said: \"Which of you two killed him?\" Each of them said: \"I killed him.\" He said: \"Have you two wiped your swords?\" They said: \"No!\" The Prophet ﷺ looked at the two swords, and said: \"You both killed him.\"",
      "sentences": [
        {
          "id": "qr1-22-013",
          "page": 89,
          "ar": "فَقَالَ: «أَيُّكُمَا قَتَلَهُ؟»",
          "en": "He said: \"Which of you two killed him?\"",
          "tokens": [
            { "surface": "فَقَالَ", "lemma": "قال", "features": "conj+perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "and he said" },
            { "surface": "أَيُّكُمَا", "lemma": "أي", "features": "nom+2d", "root": "—", "pos": "part", "gloss": "which of you two" },
            { "surface": "قَتَلَهُ", "lemma": "قتل", "features": "perf.3ms+3ms", "root": "ق ت ل", "pos": "verb", "gloss": "killed him" }
          ]
        },
        {
          "id": "qr1-22-014",
          "page": 89,
          "ar": "قَالَ كُلٌّ مِنْهُمَا: أَنَا قَتَلْتُهُ.",
          "en": "Each of them said: \"I killed him.\"",
          "tokens": [
            { "surface": "قَالَ", "lemma": "قال", "features": "perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "said" },
            { "surface": "كُلٌّ", "lemma": "كل", "features": "indef.nom", "root": "ك ل ل", "pos": "noun", "gloss": "each" },
            { "surface": "مِنْهُمَا", "lemma": "من", "features": "prep+3d", "root": "—", "pos": "prep", "gloss": "of the two of them" },
            { "surface": "أَنَا", "lemma": "أنا", "features": "nom.1s", "root": "—", "pos": "noun", "gloss": "I" },
            { "surface": "قَتَلْتُهُ", "lemma": "قتل", "features": "perf.1s+3ms", "root": "ق ت ل", "pos": "verb", "gloss": "killed him" }
          ]
        },
        {
          "id": "qr1-22-015",
          "page": 89,
          "ar": "قَالَ: «هَلْ مَسَحْتُمَا سَيْفَيْكُمَا؟»",
          "en": "He said: \"Have you two wiped your swords?\"",
          "tokens": [
            { "surface": "قَالَ", "lemma": "قال", "features": "perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "he said" },
            { "surface": "هَلْ", "lemma": "هل", "features": "part", "root": "—", "pos": "part", "gloss": "[question]" },
            { "surface": "مَسَحْتُمَا", "lemma": "مسح", "features": "perf.2d", "root": "م س ح", "pos": "verb", "gloss": "did you two wipe" },
            { "surface": "سَيْفَيْكُمَا", "lemma": "سيف", "features": "du.acc+2d", "root": "س ي ف", "pos": "noun", "gloss": "your two swords" }
          ]
        },
        {
          "id": "qr1-22-016",
          "page": 89,
          "ar": "قَالَا: لَا!",
          "en": "They said: \"No!\"",
          "tokens": [
            { "surface": "قَالَا", "lemma": "قال", "features": "perf.3d", "root": "ق و ل", "pos": "verb", "gloss": "the two of them said" },
            { "surface": "لَا", "lemma": "لا", "features": "part", "root": "—", "pos": "part", "gloss": "no" }
          ]
        },
        {
          "id": "qr1-22-017",
          "page": 89,
          "ar": "فَنَظَرَ النَّبِيُّ ﷺ فِي السَّيْفَيْنِ.",
          "en": "The Prophet ﷺ looked at the two swords.",
          "tokens": [
            { "surface": "فَنَظَرَ", "lemma": "نظر", "features": "conj+perf.3ms", "root": "ن ظ ر", "pos": "verb", "gloss": "and he looked" },
            { "surface": "النَّبِيُّ", "lemma": "نبي", "features": "def.nom", "root": "ن ب أ", "pos": "noun", "gloss": "the Prophet" },
            { "surface": "فِي", "lemma": "في", "features": "prep", "root": "—", "pos": "prep", "gloss": "at" },
            { "surface": "السَّيْفَيْنِ", "lemma": "سيف", "features": "du.def.gen", "root": "س ي ف", "pos": "noun", "gloss": "the two swords" }
          ]
        },
        {
          "id": "qr1-22-018",
          "page": 89,
          "ar": "فَقَالَ: «كِلَاهُمَا قَتَلَهُ».",
          "en": "and said: \"You both killed him.\"",
          "tokens": [
            { "surface": "فَقَالَ", "lemma": "قال", "features": "conj+perf.3ms", "root": "ق و ل", "pos": "verb", "gloss": "and he said" },
            { "surface": "كِلَاهُمَا", "lemma": "كلا", "features": "nom+3d", "root": "ك ل و", "pos": "noun", "gloss": "both of them" },
            { "surface": "قَتَلَهُ", "lemma": "قتل", "features": "perf.3ms+3ms", "root": "ق ت ل", "pos": "verb", "gloss": "killed him" }
          ]
        }
      ],
      "checks": [
        {
          "q": "مَاذَا قَالَ النَّبِيُّ ﷺ لَمَّا نَظَرَ فِي السَّيْفَيْنِ؟",
          "options": [
            "«كِلَاهُمَا قَتَلَهُ»",
            "«أَحَدُكُمَا كَاذِبٌ»",
            "«لَمْ يَقْتُلْهُ أَحَدٌ مِنْكُمَا»"
          ],
          "answer": 0,
          "qEn": "What did the Prophet ﷺ say when he looked at the two swords?",
          "optionsEn": [
            "\"You both killed him\"",
            "\"One of you is lying\"",
            "\"Neither of you killed him\""
          ]
        }
      ]
    }
  ]
};

// القراءة الراشدة, volume two, chapter 63 (printed heading "٦٣") --
// جِسْمُ النَّبَاتِ (١) -- "The Body of the Plant (1)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 208-211. Opens a new,
// unrelated topic after own ch62 (the locomotive). Part 2 ("جِسْمُ النَّبَاتِ
// (٢)", own ch64) continues directly on printed page 212, opening with the
// gardener still at work ("حَفَرَ الْبُسْتَانِيُّ الأَرْضَ حَوْلَ الْفَسِيْلِ
// بِاحْتِرَاسٍ..."), so this chapter is cut off mid-scene on purpose at the
// printed "٭ ٭ ٭" divider on p.211 (the gardener has just gone to fetch a
// sapling to plant; own ch64 opens with him already planting it).
//
// Characters: Abbas (عَبَّاسٌ) and his father Umar (عُمَرُ) -- both
// pre-existing recurring characters (their lemmas "عباس"/"عمر" are already
// in the corpus-wide lemma index) -- and an unnamed gardener (الْبُسْتَانِيُّ).
//
// Paragraph granularity: 11 blank-line-separated blocks on the printed
// pages. P1-P2 (Umar's question, Abbas's reply) on p.208-209; P3-P4 (Umar's
// invitation to study the garden, the gardener seen clearing the plot) on
// p.209; P5 (Umar's long first explanation of soil preparation, spanning
// p.209-210) is itself one printed block despite covering several distinct
// steps; P6-P7 (Abbas's interruption about sunlight, Umar's answer) and
// P8-P10 (Umar's speech resumed, marked with « » guillemets after "وَاسْتَمَرَّ
// عُمَرُ فِيْ حَدِيْثِهِ" to show it picks the explanation back up after the
// interruption) on p.210; P11 (the gardener finishes and goes for a
// sapling) on p.211.
//
// Sentence segmentation follows the project's standing convention of
// splitting at every ، . ؛ ! and ؟ (never at a colon before reported
// speech). This book's own punctuation places a "!" right after a vocative
// even mid-question -- e.g. qr2-63-002 "... هَلْ رَأَيْتَ يَا عَبَّاسُ!" is
// split off from qr2-63-003 "حَدِيْقَةَ الدَّارِ؟" at the printed "!", even
// though the two together form one grammatical question ("Have you seen,
// Abbas, the house's garden?"); qr2-63-026/027 do the same after "يَا
// عَبَّاسُ!". This is a literal-punctuation split, not a grammatical one.
// No Qur'an or hadith quotation occurs in this excerpt.
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// تَرَدَّدَ, نَحَّى, هَيَّأَ, فَسِيْلَة, بَاطِن, سَمَاد (p.209, fn.1-6) and
// رِخْوَة, عَزَقَ (p.210, fn.1-2).
//
// Homographs / reused lemmas (existing lemma key, no new newWords entry):
// "بَيْت", "مَرَّة", "يَوْم", "رَأَى", "دَار", "ظَنَّ", "مَشَى", "طَالَعَ",
// "خَرَجَ", "حَجَر", "أَب", "رَجُل", "تَرَكَ", "سَقَى", "مَكَان", "شَمْس",
// "حَيّ", "مَاء", "حَدِيْث", "أَمْكَنَ", "وَاحِد", "سِنّ", "زَالَ", "فَرَغَ",
// "ذَهَبَ", "نَقَلَ", "جَانِب", "شَيْطَان", "عَام", and "صَبَاح" all reuse
// already-known lemma keys (confirmed against the corpus-wide lemma index
// before drafting). "الْمُجْتَهِدُ" reuses the root of "اِجْتَهَدَ" (own
// ch61 newWords) rather than being taught separately, and "يَسْهَرُ" reuses
// "سَهِرَ" (own ch62 newWords) directly. "وَقَفَا" (they two stood) uses the
// lemma "وقف", which -- like "قِطَارٌ"/"مَحَطَّةٌ" reused in own ch61 --
// is treated as already known even though it postdates the 536-lemma index,
// following the precedent set by own ch62 (which used "وَقَفَ"/"تَقِفُ"
// freely, unflagged, throughout). "الأَرْضِ" is likewise treated as already
// known: the older index spells this lemma "ارض" (no hamza) while own
// ch61/ch62 spell it "أَرْض" (with hamza); this chapter follows the more
// recent spelling, matching own ch61/62, without re-teaching it either way.
//
// Buildable sentences (3-9 tokens, non-proper token with a visible case
// ending): qr2-63-001, 004, 005, 008, 009, 010, 016, 025, 028, 030, and
// several more among the shorter clauses in P5/P10 -- well over the
// required five.
export const CHAPTER = {
  id: 'ch63',
  title: { ar: 'جِسْمُ النَّبَاتِ', en: 'The Body of the Plant' },
  newWords: [
    'حديقة', 'تردد', 'مساء',
    'وجب', 'بستاني', 'نحى', 'خزف',
    'حشيشة', 'هيأ', 'غرس', 'فسيلة', 'ثبت',
    'جذر', 'شيطاني', 'امتص', 'ذوى', 'ناصح', 'سماد', 'رخوة', 'كريم',
    'قاطع', 'فسحة', 'ذات', 'زهرة', 'جمال', 'تبع', 'نام٢'
  ],
  lemmas: {
    'حديقة': { gloss: 'garden' },
    'تردد': { gloss: 'to go back and forth, frequent (a place)', book_note: 'تَرَدَّدَ يَتَرَدَّدُ: إِلَى الْمَكَانِ: اخْتَلَفَ إِلَيْهِ.' },
    'مساء': { gloss: 'evening' },
    'وجب': { gloss: 'to be necessary, obligatory' },
    'بستاني': { gloss: 'gardener' },
    'نحى': { gloss: 'to move aside, remove', book_note: 'نَحَّى يُنَحِّي تَنْحِيَةً: الشَّيْءَ: أَبْعَدَهُ وَأَزَالَهُ عَنْ مَكَانِهِ.' },
    'خزف': { gloss: 'pottery, potsherds' },
    'حشيشة': { gloss: 'weed, wild grass (pl. حَشَائِش)' },
    'هيأ': { gloss: 'to prepare', book_note: 'هَيَّأَ يُهَيِّئُ تَهْيِئَةً: الشَّيْءَ: أَعَدَّهُ.' },
    'غرس': { gloss: 'to plant' },
    'فسيلة': { gloss: 'a sapling, cutting for planting (pl. فَسِيْل/فَسَائِل)', book_note: 'فَسِيْلَة جَمْعُ فَسِيْل وَفَسَائِل: غُصْنٌ يُفْصَلُ لِلْغَرْسِ.' },
    'ثبت': { gloss: 'to become firm, take root' },
    'جذر': { gloss: 'root (of a plant)' },
    'باطن': { gloss: 'interior, inside', book_note: 'بَاطِنُ الأَرْضِ: دَاخِلُ الأَرْضِ.' },
    'شيطاني': { gloss: 'devilish, satanic' },
    'امتص': { gloss: 'to absorb, suck up' },
    'ذوى': { gloss: 'to wither' },
    'ناصح': { gloss: 'sincere, well-advising' },
    'سماد': { gloss: 'fertilizer', book_note: 'السَّمَادُ جَمْعُ الأَسْمِدَة: مَادَّةٌ تُوْضَعُ فِي الأَرْضِ لِإِخْصَابِهَا.' },
    'رخوة': { gloss: 'soft, loose', book_note: 'رِخْوَةٌ: سَهْلَةٌ لَيِّنَةٌ.' },
    'كريم': { gloss: 'generous; (of soil) fertile, productive' },
    'قاطع': { gloss: 'to interrupt' },
    'فسحة': { gloss: 'space, gap, room' },
    'ذات': { gloss: 'possessor of, having (f.)' },
    'زهرة': { gloss: 'flower (pl. أَزْهَار)' },
    'جمال': { gloss: 'beauty' },
    'عزق': { gloss: 'to hoe, dig around', book_note: 'عَزَقَ يَعْزِقُ عَزْقاً: الأَرْضَ: شَقَّهَا.' },
    'تبع': { gloss: 'to follow' },
    'نام٢': { gloss: 'growing (active participle; unrelated homograph of نام "to sleep")' }
  },
  paragraphs: [
    {
      en: 'In front of Abbas’s house was a garden with various kinds of trees and plants. His father Umar said to him once, on a day off: "Have you seen, Abbas, the house’s garden?"',
      sentences: [
        {
          id: 'qr2-63-001',
          ar: 'كَانَ أَمَامَ بَيْتِ عَبَّاسٍ حَدِيْقَةٌ فِيْهَا أَنْوَاعُ الشَّجَرِ وَالنَّبَاتِ،',
          en: 'In front of Abbas’s house was a garden with various kinds of trees and plants,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'أَمَامَ', lemma: 'أمام', pos: 'adv', gloss: 'in front of' },
            { surface: 'بَيْتِ', lemma: 'بيت', pos: 'noun', features: 'gen.constr', gloss: 'the house of' },
            { surface: 'عَبَّاسٍ', lemma: 'عباس', pos: 'proper', features: 'gen', gloss: 'Abbas' },
            { surface: 'حَدِيْقَةٌ', lemma: 'حديقة', pos: 'noun', features: 'indef.nom', root: 'ح د ق', gloss: 'a garden' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'in it' },
            { surface: 'أَنْوَاعُ', lemma: 'نوع', pos: 'noun', features: 'nom.constr.pl', gloss: 'kinds, types of' },
            { surface: 'الشَّجَرِ', lemma: 'شجر', pos: 'noun', features: 'def.gen', root: 'ش ج ر', gloss: 'the trees' },
            { surface: 'وَالنَّبَاتِ', lemma: 'نبات', pos: 'noun', features: 'conj+def.gen', root: 'ن ب ت', gloss: 'and the plants' },
          ],
        },
        {
          id: 'qr2-63-002',
          ar: 'قَالَ لَهُ أَبُوْهُ عُمَرُ مَرَّةً فِيْ يَوْمِ عُطْلَةٍ: هَلْ رَأَيْتَ يَا عَبَّاسُ!',
          en: 'his father Umar said to him once, on a day off: "Have you seen, Abbas --',
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'لَهُ', lemma: 'ل', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'أَبُوْهُ', lemma: 'أب', pos: 'noun', features: 'nom+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'عُمَرُ', lemma: 'عمر', pos: 'proper', features: 'nom', gloss: 'Umar' },
            { surface: 'مَرَّةً', lemma: 'مرة', pos: 'noun', features: 'indef.acc', gloss: 'once, one time' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'on, in' },
            { surface: 'يَوْمِ', lemma: 'يوم', pos: 'noun', features: 'gen.constr', gloss: 'a day of' },
            { surface: 'عُطْلَةٍ', lemma: 'عطلة', pos: 'noun', features: 'indef.gen', gloss: 'a holiday, day off' },
            { surface: 'هَلْ', lemma: 'هل', pos: 'part', gloss: '(question particle)' },
            { surface: 'رَأَيْتَ', lemma: 'رأى', pos: 'verb', features: 'perf.2ms', gloss: 'to see' },
            { surface: 'يَا', lemma: 'يا', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'عَبَّاسُ', lemma: 'عباس', pos: 'proper', gloss: 'Abbas' },
          ],
        },
        {
          id: 'qr2-63-003',
          ar: 'حَدِيْقَةَ الدَّارِ؟',
          en: 'the house’s garden?"',
          tokens: [
            { surface: 'حَدِيْقَةَ', lemma: 'حديقة', pos: 'noun', features: 'acc.constr', gloss: 'the garden of' },
            { surface: 'الدَّارِ', lemma: 'دار', pos: 'noun', features: 'def.gen', gloss: 'the house' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ عُمَرُ ابْنَهُ عَبَّاساً؟',
          options: ['هَلْ رَأَى حَدِيْقَةَ الدَّارِ', 'هَلْ ذَهَبَ إِلَى الْمَدْرَسَةِ', 'هَلْ أَكَلَ طَعَامَهُ'],
          answer: 0,
          qEn: 'What did Umar ask his son Abbas?',
          optionsEn: ['Whether he had seen the house’s garden', 'Whether he had gone to school', 'Whether he had eaten his food'],
        },
      ],
    },
    {
      en: 'Abbas said: "How could I not, father! Isn’t it our house’s garden? I play in it every day and go back and forth to it morning and evening."',
      sentences: [
        {
          id: 'qr2-63-004',
          ar: 'قَالَ عَبَّاسٌ: كَيْفَ لاَ يَا أَبِيْ!',
          en: 'Abbas said: "How could I not, father!',
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'عَبَّاسٌ', lemma: 'عباس', pos: 'proper', features: 'nom', gloss: 'Abbas' },
            { surface: 'كَيْفَ', lemma: 'كيف', pos: 'adv', gloss: 'how' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَا', lemma: 'يا', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'أَبِيْ', lemma: 'أب', pos: 'noun', features: '1s', root: 'أ ب و', gloss: 'my father' },
          ],
        },
        {
          id: 'qr2-63-005',
          ar: 'وَهِيَ حَدِيْقَةُ دَارِنَا؟',
          en: 'Isn’t it our house’s garden?',
          tokens: [
            { surface: 'وَهِيَ', lemma: 'هي', pos: 'part', features: 'conj', gloss: 'and it (is)' },
            { surface: 'حَدِيْقَةُ', lemma: 'حديقة', pos: 'noun', features: 'nom.constr', gloss: 'the garden of' },
            { surface: 'دَارِنَا', lemma: 'دار', pos: 'noun', features: 'gen+1p', gloss: 'our house' },
          ],
        },
        {
          id: 'qr2-63-006',
          ar: 'أَلْعَبُ فِيْهَا كُلَّ يَوْمٍ وَأَتَرَدَّدُ إِلَيْهَا صَبَاحَ مَسَاءَ.',
          en: 'I play in it every day and go back and forth to it morning and evening."',
          tokens: [
            { surface: 'أَلْعَبُ', lemma: 'لعب', pos: 'verb', features: 'impf.1s', root: 'ل ع ب', gloss: 'to play' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'in it' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
            { surface: 'وَأَتَرَدَّدُ', lemma: 'تردد', pos: 'verb', features: 'conj+impf.1s', root: 'ر د د', gloss: 'to go back and forth, frequent' },
            { surface: 'إِلَيْهَا', lemma: 'إلى', pos: 'prep', features: '3fs', gloss: 'to it' },
            { surface: 'صَبَاحَ', lemma: 'صباح', pos: 'noun', features: 'acc', gloss: 'morning' },
            { surface: 'مَسَاءَ', lemma: 'مساء', pos: 'noun', features: 'acc', root: 'م س و', gloss: 'evening' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَفْعَلُ عَبَّاسٌ فِي الْحَدِيْقَةِ كُلَّ يَوْمٍ؟',
          options: ['يَلْعَبُ فِيْهَا وَيَتَرَدَّدُ إِلَيْهَا', 'يَنَامُ فِيْهَا', 'يَقْرَأُ فِيْهَا فَقَطْ'],
          answer: 0,
          qEn: 'What does Abbas do in the garden every day?',
          optionsEn: ['He plays in it and goes back and forth to it', 'He sleeps in it', 'He only reads in it'],
        },
      ],
    },
    {
      en: 'Umar said: "I don’t think you have really seen it! Come with me, let’s stroll in the garden and study the plants, for they are among the wonders of God’s creation, a book you must read."',
      sentences: [
        {
          id: 'qr2-63-007',
          ar: 'قَالَ عُمَرُ: مَا أَظُنُّكَ رَأَيْتَهَا!',
          en: 'Umar said: "I don’t think you have really seen it!',
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'عُمَرُ', lemma: 'عمر', pos: 'proper', features: 'nom', gloss: 'Umar' },
            { surface: 'مَا', lemma: 'ما', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَظُنُّكَ', lemma: 'ظن', pos: 'verb', features: 'impf.1s+2ms', gloss: 'I think you' },
            { surface: 'رَأَيْتَهَا', lemma: 'رأى', pos: 'verb', features: 'perf.2ms+3fs', gloss: 'you saw it' },
          ],
        },
        {
          id: 'qr2-63-008',
          ar: 'فَتَعَالَ مَعِيَ نَتَمَشَّ فِي الْحَدِيْقَةِ وَنَدْرُسُ النَّبَاتَ،',
          en: 'Come with me, let’s stroll in the garden and study the plants,',
          tokens: [
            { surface: 'فَتَعَالَ', lemma: 'تعال', pos: 'verb', features: 'conj+imp.2ms', gloss: 'come!' },
            { surface: 'مَعِيَ', lemma: 'مع', pos: 'prep', features: '1s', gloss: 'with me' },
            { surface: 'نَتَمَشَّ', lemma: 'مشى', pos: 'verb', features: 'juss.1p', gloss: 'let us stroll' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الْحَدِيْقَةِ', lemma: 'حديقة', pos: 'noun', features: 'def.gen', root: 'ح د ق', gloss: 'the garden' },
            { surface: 'وَنَدْرُسُ', lemma: 'درس', pos: 'verb', features: 'conj+impf.1p', gloss: 'and let us study' },
            { surface: 'النَّبَاتَ', lemma: 'نبات', pos: 'noun', features: 'def.acc', root: 'ن ب ت', gloss: 'the plants' },
          ],
        },
        {
          id: 'qr2-63-009',
          ar: 'فَإِنَّهُ مِنْ عَجَائِبِ خَلْقِ اللهِ،',
          en: 'for they are among the wonders of God’s creation,',
          tokens: [
            { surface: 'فَإِنَّهُ', lemma: 'إن', pos: 'part', features: '3ms', gloss: 'for indeed it (is)' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'عَجَائِبِ', lemma: 'عجيبة', pos: 'noun', features: 'gen.constr.pl', gloss: 'the wonders of' },
            { surface: 'خَلْقِ', lemma: 'خلق', pos: 'noun', features: 'gen.constr', root: 'خ ل ق', gloss: 'the creation of' },
            { surface: 'اللهِ', lemma: 'الله', pos: 'proper', features: 'gen', gloss: 'Allah, God' },
          ],
        },
        {
          id: 'qr2-63-010',
          ar: 'وَكِتَابٌ يَجِبُ أَنْ تُطَالِعَهُ.',
          en: 'a book you must read."',
          tokens: [
            { surface: 'وَكِتَابٌ', lemma: 'كتاب', pos: 'noun', features: 'conj+indef.nom', gloss: 'and a book' },
            { surface: 'يَجِبُ', lemma: 'وجب', pos: 'verb', features: 'impf.3ms', root: 'و ج ب', gloss: 'to be necessary' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that, to' },
            { surface: 'تُطَالِعَهُ', lemma: 'طالع', pos: 'verb', features: 'subj.2ms+3ms', gloss: 'you read, peruse it' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا يَدْعُو عُمَرُ عَبَّاساً إِلَى دِرَاسَةِ النَّبَاتِ؟',
          options: ['لِأَنَّهُ مِنْ عَجَائِبِ خَلْقِ اللهِ', 'لِأَنَّهُ سَهْلٌ جِدّاً', 'لِأَنَّ الْمُعَلِّمَ طَلَبَ ذٰلِكَ'],
          answer: 0,
          qEn: 'Why does Umar invite Abbas to study plants?',
          optionsEn: ['Because they are among the wonders of God’s creation', 'Because it is very easy', 'Because the teacher asked for it'],
        },
      ],
    },
    {
      en: 'Umar and Abbas went out to the garden. Abbas saw the gardener repairing a plot of the ground, moving aside the stones and the pottery, and pulling out the weeds and the grasses, so Abbas asked his father about that.',
      sentences: [
        {
          id: 'qr2-63-011',
          ar: 'خَرَجَ عُمَرُ وَعَبَّاسٌ إِلَى الْحَدِيْقَةِ،',
          en: 'Umar and Abbas went out to the garden,',
          tokens: [
            { surface: 'خَرَجَ', lemma: 'خرج', pos: 'verb', features: 'perf.3ms', root: 'خ ر ج', gloss: 'to go out' },
            { surface: 'عُمَرُ', lemma: 'عمر', pos: 'proper', features: 'nom', gloss: 'Umar' },
            { surface: 'وَعَبَّاسٌ', lemma: 'عباس', pos: 'proper', features: 'conj+nom', gloss: 'and Abbas' },
            { surface: 'إِلَى', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الْحَدِيْقَةِ', lemma: 'حديقة', pos: 'noun', features: 'def.gen', root: 'ح د ق', gloss: 'the garden' },
          ],
        },
        {
          id: 'qr2-63-012',
          ar: 'فَرَأَى عَبَّاسٌ الْبُسْتَانِيَّ يُصْلِحُ قِطْعَةً مِنَ الأَرْضِ،',
          en: 'Abbas saw the gardener repairing a plot of the ground,',
          tokens: [
            { surface: 'فَرَأَى', lemma: 'رأى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see' },
            { surface: 'عَبَّاسٌ', lemma: 'عباس', pos: 'proper', features: 'nom', gloss: 'Abbas' },
            { surface: 'الْبُسْتَانِيَّ', lemma: 'بستاني', pos: 'noun', features: 'def.acc', gloss: 'the gardener' },
            { surface: 'يُصْلِحُ', lemma: 'أصلح', pos: 'verb', features: 'impf.3ms', root: 'ص ل ح', gloss: 'to fix, cultivate' },
            { surface: 'قِطْعَةً', lemma: 'قطعة', pos: 'noun', features: 'indef.acc', root: 'ق ط ع', gloss: 'a piece, plot' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'الأَرْضِ', lemma: 'أرض', pos: 'noun', features: 'def.gen', gloss: 'the ground' },
          ],
        },
        {
          id: 'qr2-63-013',
          ar: 'وَيُنَحِّي الْحَجَرَ وَالْخَزَفَ،',
          en: 'moving aside the stones and the pottery,',
          tokens: [
            { surface: 'وَيُنَحِّي', lemma: 'نحى', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ح ي', gloss: 'to move aside, remove' },
            { surface: 'الْحَجَرَ', lemma: 'حجر', pos: 'noun', features: 'def.acc', gloss: 'the stone(s)' },
            { surface: 'وَالْخَزَفَ', lemma: 'خزف', pos: 'noun', features: 'conj+def.acc', gloss: 'and the pottery' },
          ],
        },
        {
          id: 'qr2-63-014',
          ar: 'وَيَقْلَعُ الْحَشَائِشَ وَالأَعْشَابَ،',
          en: 'and pulling out the weeds and the grasses,',
          tokens: [
            { surface: 'وَيَقْلَعُ', lemma: 'قلع', pos: 'verb', features: 'conj+impf.3ms', root: 'ق ل ع', gloss: 'to uproot, pull out' },
            { surface: 'الْحَشَائِشَ', lemma: 'حشيشة', pos: 'noun', features: 'def.acc.pl', root: 'ح ش ش', gloss: 'the weeds' },
            { surface: 'وَالأَعْشَابَ', lemma: 'عشب', pos: 'noun', features: 'conj+def.acc.pl', root: 'ع ش ب', gloss: 'and the grasses' },
          ],
        },
        {
          id: 'qr2-63-015',
          ar: 'فَسَأَلَ عَبَّاسٌ أَبَاهُ عَنْ ذٰلِكَ.',
          en: 'so Abbas asked his father about that.',
          tokens: [
            { surface: 'فَسَأَلَ', lemma: 'سأل', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to ask' },
            { surface: 'عَبَّاسٌ', lemma: 'عباس', pos: 'proper', features: 'nom', gloss: 'Abbas' },
            { surface: 'أَبَاهُ', lemma: 'أب', pos: 'noun', features: 'acc+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'عَنْ', lemma: 'عن', pos: 'prep', gloss: 'about' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ الْبُسْتَانِيُّ يَفْعَلُ فِي الْحَدِيْقَةِ؟',
          options: ['يُصْلِحُ الأَرْضَ وَيُنَحِّي الْحِجَارَةَ وَيَقْلَعُ الْحَشَائِشَ', 'يَقْرَأُ كِتَاباً', 'يَنَامُ تَحْتَ شَجَرَةٍ'],
          answer: 0,
          qEn: 'What was the gardener doing in the garden?',
          optionsEn: ['Preparing the ground, moving aside stones, and pulling weeds', 'Reading a book', 'Sleeping under a tree'],
        },
      ],
    },
    {
      en: 'Umar said: "The man cultivates the ground and prepares it for planting the trees; for if the stones and pottery remain, the sapling will not take root in the ground, and its roots will not extend into the ground’s interior; and if these devilish weeds are left, they absorb the sapling’s nourishment and the sapling withers. The sincere, diligent gardener plows the ground just as the farmer plows the field, puts fertilizer into it, and waters it every day, until the ground becomes soft and fertile, accepting everything cast into it. Then he plants the saplings in a place the sun reaches every day."',
      sentences: [
        {
          id: 'qr2-63-016',
          ar: 'قَالَ عُمَرُ: الرَّجُلُ يُصْلِحُ الأَرْضَ وَيُهَيِّئُهَا لِغَرْسِ الأَشْجَارِ،',
          en: 'Umar said: "The man cultivates the ground and prepares it for planting the trees,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'عُمَرُ', lemma: 'عمر', pos: 'proper', features: 'nom', gloss: 'Umar' },
            { surface: 'الرَّجُلُ', lemma: 'رجل', pos: 'noun', features: 'def.nom', gloss: 'the man' },
            { surface: 'يُصْلِحُ', lemma: 'أصلح', pos: 'verb', features: 'impf.3ms', root: 'ص ل ح', gloss: 'to fix, cultivate' },
            { surface: 'الأَرْضَ', lemma: 'أرض', pos: 'noun', features: 'def.acc', gloss: 'the ground' },
            { surface: 'وَيُهَيِّئُهَا', lemma: 'هيأ', pos: 'verb', features: 'conj+impf.3ms+3fs', root: 'ه ي أ', gloss: 'to prepare it' },
            { surface: 'لِغَرْسِ', lemma: 'غرس', pos: 'noun', features: 'gen.constr', root: 'غ ر س', gloss: 'for planting' },
            { surface: 'الأَشْجَارِ', lemma: 'شجر', pos: 'noun', features: 'def.gen.pl', gloss: 'the trees' },
          ],
        },
        {
          id: 'qr2-63-017',
          ar: 'فَإِذَا بَقِيَتِ الأَحْجَارُ وَالْخَزَفُ لَمْ يَثْبُتِ الْفَسِيْلُ فِي الأَرْضِ،',
          en: 'for if the stones and pottery remain, the sapling will not take root in the ground,',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إذا', pos: 'part', features: 'conj', gloss: 'for if' },
            { surface: 'بَقِيَتِ', lemma: 'بقي', pos: 'verb', features: 'perf.3fs', gloss: 'to remain' },
            { surface: 'الأَحْجَارُ', lemma: 'حجر', pos: 'noun', features: 'def.nom.pl', gloss: 'the stones' },
            { surface: 'وَالْخَزَفُ', lemma: 'خزف', pos: 'noun', features: 'conj+def.nom', gloss: 'and the pottery' },
            { surface: 'لَمْ', lemma: 'لم', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَثْبُتِ', lemma: 'ثبت', pos: 'verb', features: 'juss.3ms', root: 'ث ب ت', gloss: 'to take root, be firm' },
            { surface: 'الْفَسِيْلُ', lemma: 'فسيلة', pos: 'noun', features: 'def.nom', root: 'ف س ل', gloss: 'the sapling' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أرض', pos: 'noun', features: 'def.gen', gloss: 'the ground' },
          ],
        },
        {
          id: 'qr2-63-018',
          ar: 'وَلَمْ تَمْتَدَّ جُذُوْرُهُ فِيْ بَاطِنِ الأَرْضِ،',
          en: 'and its roots will not extend into the ground’s interior,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لم', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَمْتَدَّ', lemma: 'امتد', pos: 'verb', features: 'juss.3fs', root: 'م د د', gloss: 'to extend' },
            { surface: 'جُذُوْرُهُ', lemma: 'جذر', pos: 'noun', features: 'nom.pl+3ms', root: 'ج ذ ر', gloss: 'its roots' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'into' },
            { surface: 'بَاطِنِ', lemma: 'باطن', pos: 'noun', features: 'gen.constr', root: 'ب ط ن', gloss: 'the interior of' },
            { surface: 'الأَرْضِ', lemma: 'أرض', pos: 'noun', features: 'def.gen', gloss: 'the ground' },
          ],
        },
        {
          id: 'qr2-63-019',
          ar: 'وَإِذَا تُرِكَتْ هٰذِهِ الْحَشَائِشُ الشَّيْطَانِيَّةُ امْتَصَّتْ غِذَاءَ الْفَسِيْلِ وَذَوَى الْفَسِيْلُ،',
          en: 'and if these devilish weeds are left, they absorb the sapling’s nourishment and the sapling withers,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إذا', pos: 'part', features: 'conj', gloss: 'and if' },
            { surface: 'تُرِكَتْ', lemma: 'ترك', pos: 'verb', features: 'perf.pass.3fs', gloss: 'to be left' },
            { surface: 'هٰذِهِ', lemma: 'هذه', pos: 'dem', gloss: 'these' },
            { surface: 'الْحَشَائِشُ', lemma: 'حشيشة', pos: 'noun', features: 'def.nom.pl', gloss: 'the weeds' },
            { surface: 'الشَّيْطَانِيَّةُ', lemma: 'شيطاني', pos: 'adj', features: 'def.nom', root: 'ش ط ن', gloss: 'devilish' },
            { surface: 'امْتَصَّتْ', lemma: 'امتص', pos: 'verb', features: 'perf.3fs', root: 'م ص ص', gloss: 'to absorb' },
            { surface: 'غِذَاءَ', lemma: 'غذاء', pos: 'noun', features: 'acc.constr', root: 'غ ذ و', gloss: 'the nourishment of' },
            { surface: 'الْفَسِيْلِ', lemma: 'فسيلة', pos: 'noun', features: 'def.gen', gloss: 'the sapling' },
            { surface: 'وَذَوَى', lemma: 'ذوى', pos: 'verb', features: 'conj+perf.3ms', root: 'ذ و ي', gloss: 'to wither' },
            { surface: 'الْفَسِيْلُ', lemma: 'فسيلة', pos: 'noun', features: 'def.nom', gloss: 'the sapling' },
          ],
        },
        {
          id: 'qr2-63-020',
          ar: 'وَالْبُسْتَانِيُّ النَّاصِحُ الْمُجْتَهِدُ يَحْرُثُ الأَرْضَ كَمَا يَحْرُثُ الْفَلاَّحُ الْحَقْلَ،',
          en: 'The sincere, diligent gardener plows the ground just as the farmer plows the field,',
          tokens: [
            { surface: 'وَالْبُسْتَانِيُّ', lemma: 'بستاني', pos: 'noun', features: 'conj+def.nom', gloss: 'and the gardener' },
            { surface: 'النَّاصِحُ', lemma: 'ناصح', pos: 'adj', features: 'def.nom', root: 'ن ص ح', gloss: 'sincere, well-advising' },
            { surface: 'الْمُجْتَهِدُ', lemma: 'مجتهد', pos: 'adj', features: 'def.nom', root: 'ج ه د', gloss: 'diligent, hardworking' },
            { surface: 'يَحْرُثُ', lemma: 'حرث', pos: 'verb', features: 'impf.3ms', root: 'ح ر ث', gloss: 'to plow' },
            { surface: 'الأَرْضَ', lemma: 'أرض', pos: 'noun', features: 'def.acc', gloss: 'the ground' },
            { surface: 'كَمَا', lemma: 'كما', pos: 'part', gloss: 'just as' },
            { surface: 'يَحْرُثُ', lemma: 'حرث', pos: 'verb', features: 'impf.3ms', gloss: 'to plow' },
            { surface: 'الْفَلاَّحُ', lemma: 'فلاح', pos: 'noun', features: 'def.nom', root: 'ف ل ح', gloss: 'the farmer' },
            { surface: 'الْحَقْلَ', lemma: 'حقل', pos: 'noun', features: 'def.acc', root: 'ح ق ل', gloss: 'the field' },
          ],
        },
        {
          id: 'qr2-63-021',
          ar: 'وَيُلْقِيْ فِيْهَا السَّمَادَ وَيَسْقِيْهَا كُلَّ يَوْمٍ،',
          en: 'puts fertilizer into it, and waters it every day,',
          tokens: [
            { surface: 'وَيُلْقِيْ', lemma: 'ألقى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to cast, put' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'into it' },
            { surface: 'السَّمَادَ', lemma: 'سماد', pos: 'noun', features: 'def.acc', root: 'س م د', gloss: 'the fertilizer' },
            { surface: 'وَيَسْقِيْهَا', lemma: 'سقى', pos: 'verb', features: 'conj+impf.3ms+3fs', gloss: 'to water it' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
          ],
        },
        {
          id: 'qr2-63-022',
          ar: 'حَتَّى تُصْبِحَ الأَرْضُ رِخْوَةً كَرِيْمَةً،',
          en: 'until the ground becomes soft and fertile,',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'تُصْبِحَ', lemma: 'أصبح', pos: 'verb', features: 'subj.3fs', root: 'ص ب ح', gloss: 'to become' },
            { surface: 'الأَرْضُ', lemma: 'أرض', pos: 'noun', features: 'def.nom', gloss: 'the ground' },
            { surface: 'رِخْوَةً', lemma: 'رخوة', pos: 'adj', features: 'indef.acc', root: 'ر خ و', gloss: 'soft, loose' },
            { surface: 'كَرِيْمَةً', lemma: 'كريم', pos: 'adj', features: 'indef.acc', root: 'ك ر م', gloss: 'generous; fertile' },
          ],
        },
        {
          id: 'qr2-63-023',
          ar: 'تَقْبَلُ كُلَّ مَا يُلْقَى فِيْهَا.',
          en: 'accepting everything cast into it.',
          tokens: [
            { surface: 'تَقْبَلُ', lemma: 'قبل', pos: 'verb', features: 'impf.3fs', root: 'ق ب ل', gloss: 'to accept' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every, all' },
            { surface: 'مَا', lemma: 'ما', pos: 'rel', gloss: 'what, that which' },
            { surface: 'يُلْقَى', lemma: 'ألقى', pos: 'verb', features: 'impf.pass.3ms', gloss: 'to be cast' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'into it' },
          ],
        },
        {
          id: 'qr2-63-024',
          ar: 'ثُمَّ يَغْرِسُ الْفَسَائِلَ فِيْ مَكَانٍ تَصِلُ إِلَيْهِ الشَّمْسُ كُلَّ يَوْمٍ.',
          en: 'Then he plants the saplings in a place the sun reaches every day."',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'conj', gloss: 'then' },
            { surface: 'يَغْرِسُ', lemma: 'غرس', pos: 'verb', features: 'impf.3ms', root: 'غ ر س', gloss: 'to plant' },
            { surface: 'الْفَسَائِلَ', lemma: 'فسيلة', pos: 'noun', features: 'def.acc.pl', gloss: 'the saplings' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'مَكَانٍ', lemma: 'مكان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'تَصِلُ', lemma: 'وصل', pos: 'verb', features: 'impf.3fs', gloss: 'to reach, arrive' },
            { surface: 'إِلَيْهِ', lemma: 'إلى', pos: 'prep', features: '3ms', gloss: 'to it' },
            { surface: 'الشَّمْسُ', lemma: 'شمس', pos: 'noun', features: 'def.nom', gloss: 'the sun' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَحْدُثُ لِلْفَسِيْلِ إِذَا بَقِيَتِ الأَحْجَارُ فِي الأَرْضِ؟',
          options: ['لاَ يَثْبُتُ فِيْهَا وَلاَ تَمْتَدُّ جُذُوْرُهُ', 'يَكْبُرُ بِسُرْعَةٍ أَكْبَرَ', 'يُزْهِرُ فِي الْحَالِ'],
          answer: 0,
          qEn: 'What happens to the sapling if the stones remain in the ground?',
          optionsEn: ['It does not take root and its roots do not extend', 'It grows faster', 'It flowers immediately'],
        },
        {
          q: 'مَاذَا يَفْعَلُ الْبُسْتَانِيُّ النَّاصِحُ الْمُجْتَهِدُ؟',
          options: ['يَحْرُثُ الأَرْضَ وَيُسَمِّدُهَا وَيَسْقِيْهَا', 'يَتْرُكُ الأَرْضَ كَمَا هِيَ', 'يَغْرِسُ الْفَسَائِلَ بِلاَ إِعْدَادٍ لِلأَرْضِ'],
          answer: 0,
          qEn: 'What does the sincere, diligent gardener do?',
          optionsEn: ['He plows the ground, fertilizes it, and waters it', 'He leaves the ground as it is', 'He plants saplings without preparing the ground'],
        },
      ],
    },
    {
      en: 'Here Abbas interrupted him and said: "Does the plant also need the sun?"',
      sentences: [
        {
          id: 'qr2-63-025',
          ar: 'هُنَا قَاطَعَهُ عَبَّاسٌ وَقَالَ: وَهَلْ يَحْتَاجُ النَّبَاتُ أَيْضاً إِلَى الشَّمْسِ؟',
          en: 'Here Abbas interrupted him and said: "Does the plant also need the sun?"',
          tokens: [
            { surface: 'هُنَا', lemma: 'هنا', pos: 'adv', gloss: 'here' },
            { surface: 'قَاطَعَهُ', lemma: 'قاطع', pos: 'verb', features: 'perf.3ms+3ms', root: 'ق ط ع', gloss: 'to interrupt (him)' },
            { surface: 'عَبَّاسٌ', lemma: 'عباس', pos: 'proper', features: 'nom', gloss: 'Abbas' },
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'وَهَلْ', lemma: 'هل', pos: 'part', features: 'conj', gloss: 'and (question particle)' },
            { surface: 'يَحْتَاجُ', lemma: 'احتاج', pos: 'verb', features: 'impf.3ms', root: 'ح و ج', gloss: 'to need' },
            { surface: 'النَّبَاتُ', lemma: 'نبات', pos: 'noun', features: 'def.nom', gloss: 'the plant' },
            { surface: 'أَيْضاً', lemma: 'أيضا', pos: 'adv', features: 'indef.acc', gloss: 'also' },
            { surface: 'إِلَى', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الشَّمْسِ', lemma: 'شمس', pos: 'noun', features: 'def.gen', gloss: 'the sun' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ عَبَّاسٌ عُمَرَ؟',
          options: ['هَلْ يَحْتَاجُ النَّبَاتُ إِلَى الشَّمْسِ', 'مَتَى يُثْمِرُ الشَّجَرُ', 'كَمْ ثَمَنُ الْفَسِيْلِ'],
          answer: 0,
          qEn: 'What did Abbas ask Umar?',
          optionsEn: ['Whether the plant also needs the sun', 'When the tree will bear fruit', 'How much the sapling costs'],
        },
      ],
    },
    {
      en: 'Umar said: "Yes, Abbas! For the plant is a living, growing body that needs the sun, the air, and the water."',
      sentences: [
        {
          id: 'qr2-63-026',
          ar: 'قَالَ عُمَرُ: نَعَمْ!',
          en: 'Umar said: "Yes!',
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'عُمَرُ', lemma: 'عمر', pos: 'proper', features: 'nom', gloss: 'Umar' },
            { surface: 'نَعَمْ', lemma: 'نعم', pos: 'part', gloss: 'yes' },
          ],
        },
        {
          id: 'qr2-63-027',
          ar: 'يَا عَبَّاسُ!',
          en: 'Abbas!',
          tokens: [
            { surface: 'يَا', lemma: 'يا', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'عَبَّاسُ', lemma: 'عباس', pos: 'proper', gloss: 'Abbas' },
          ],
        },
        {
          id: 'qr2-63-028',
          ar: 'فَالنَّبَاتُ جِسْمٌ حَيٌّ نَامٍ يَحْتَاجُ إِلَى الشَّمْسِ وَالْهَوَاءِ وَالْمَاءِ.',
          en: 'For the plant is a living, growing body that needs the sun, the air, and the water."',
          tokens: [
            { surface: 'فَالنَّبَاتُ', lemma: 'نبات', pos: 'noun', features: 'conj+def.nom', gloss: 'for the plant' },
            { surface: 'جِسْمٌ', lemma: 'جسم', pos: 'noun', features: 'indef.nom', root: 'ج س م', gloss: 'a body' },
            { surface: 'حَيٌّ', lemma: 'حي', pos: 'adj', features: 'indef.nom', gloss: 'living' },
            { surface: 'نَامٍ', lemma: 'نام٢', pos: 'adj', features: 'indef.nom', root: 'ن م و', gloss: 'growing' },
            { surface: 'يَحْتَاجُ', lemma: 'احتاج', pos: 'verb', features: 'impf.3ms', gloss: 'to need' },
            { surface: 'إِلَى', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الشَّمْسِ', lemma: 'شمس', pos: 'noun', features: 'def.gen', gloss: 'the sun' },
            { surface: 'وَالْهَوَاءِ', lemma: 'هواء', pos: 'noun', features: 'conj+def.gen', root: 'ه و ي', gloss: 'and the air' },
            { surface: 'وَالْمَاءِ', lemma: 'ماء', pos: 'noun', features: 'conj+def.gen', gloss: 'and the water' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَحْتَاجُ النَّبَاتُ كَمَا قَالَ عُمَرُ؟',
          options: ['الشَّمْسَ وَالْهَوَاءَ وَالْمَاءَ', 'الذَّهَبَ وَالْفِضَّةَ', 'الْكُتُبَ وَالأَقْلاَمَ'],
          answer: 0,
          qEn: 'What does the plant need, as Umar said?',
          optionsEn: ['The sun, the air, and the water', 'Gold and silver', 'Books and pens'],
        },
      ],
    },
    {
      en: 'And Umar continued his talk: "Then he plants the saplings in a row, leaving between every two saplings a gap that lets each one of them extend into it, without crowding one another."',
      sentences: [
        {
          id: 'qr2-63-029',
          ar: 'وَاسْتَمَرَّ عُمَرُ فِيْ حَدِيْثِهِ «ثُمَّ يَغْرِسُ الْفَسَائِلَ فِيْ صَفٍّ وَيَتْرُكُ بَيْنَ فَسِيْلَيْنِ فُسْحَةً يُمْكِنُ لِكُلِّ وَاحِدٍ مِنْهُمَا أَنْ يَمْتَدَّ فِيْهَا،',
          en: 'And Umar continued his talk: "Then he plants the saplings in a row, leaving between every two saplings a gap that lets each one of them extend into it,',
          tokens: [
            { surface: 'وَاسْتَمَرَّ', lemma: 'استمر', pos: 'verb', features: 'conj+perf.3ms', root: 'م ر ر', gloss: 'to continue' },
            { surface: 'عُمَرُ', lemma: 'عمر', pos: 'proper', features: 'nom', gloss: 'Umar' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'حَدِيْثِهِ', lemma: 'حديث', pos: 'noun', features: 'gen+3ms', gloss: 'his talk, speech' },
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'conj', gloss: 'then' },
            { surface: 'يَغْرِسُ', lemma: 'غرس', pos: 'verb', features: 'impf.3ms', gloss: 'to plant' },
            { surface: 'الْفَسَائِلَ', lemma: 'فسيلة', pos: 'noun', features: 'def.acc.pl', gloss: 'the saplings' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'صَفٍّ', lemma: 'صف', pos: 'noun', features: 'indef.gen', root: 'ص ف ف', gloss: 'a row' },
            { surface: 'وَيَتْرُكُ', lemma: 'ترك', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to leave' },
            { surface: 'بَيْنَ', lemma: 'بين', pos: 'prep', gloss: 'between' },
            { surface: 'فَسِيْلَيْنِ', lemma: 'فسيلة', pos: 'noun', features: 'indef.gen.du', gloss: 'two saplings' },
            { surface: 'فُسْحَةً', lemma: 'فسحة', pos: 'noun', features: 'indef.acc', root: 'ف س ح', gloss: 'a space, gap' },
            { surface: 'يُمْكِنُ', lemma: 'أمكن', pos: 'verb', features: 'impf.3ms', gloss: 'to be possible (for)' },
            { surface: 'لِكُلِّ', lemma: 'كل', pos: 'noun', features: 'gen.constr', gloss: 'for each' },
            { surface: 'وَاحِدٍ', lemma: 'واحد', pos: 'num', features: 'indef.gen', gloss: 'one' },
            { surface: 'مِنْهُمَا', lemma: 'من', pos: 'prep', features: '3md', gloss: 'of the two of them' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that, to' },
            { surface: 'يَمْتَدَّ', lemma: 'امتد', pos: 'verb', features: 'subj.3ms', gloss: 'to extend' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'into it' },
          ],
        },
        {
          id: 'qr2-63-030',
          ar: 'وَلاَ يُضَايِقُ بَعْضُهَا بَعْضاً.',
          en: 'without crowding one another."',
          tokens: [
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُضَايِقُ', lemma: 'ضايق', pos: 'verb', features: 'impf.3ms', root: 'ض ي ق', gloss: 'to crowd, inconvenience' },
            { surface: 'بَعْضُهَا', lemma: 'بعض', pos: 'noun', features: 'nom+3fs', gloss: 'some of them, one another' },
            { surface: 'بَعْضاً', lemma: 'بعض', pos: 'noun', features: 'indef.acc', gloss: 'some, another' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ يَغْرِسُ الْبُسْتَانِيُّ الْفَسَائِلَ؟',
          options: ['فِيْ صَفٍّ مَعَ فُسْحَةٍ بَيْنَ كُلِّ فَسِيْلَيْنِ', 'مُتَقَارِبَةً بِلاَ فُسْحَةٍ', 'فِيْ حُفْرَةٍ وَاحِدَةٍ'],
          answer: 0,
          qEn: 'How does the gardener plant the saplings?',
          optionsEn: ['In a row, with a gap between every two saplings', 'Crowded together with no gap', 'In a single hole'],
        },
      ],
    },
    {
      en: '"And it is best for the saplings to be of the same age, at a single stage of growth; and if they have flowers, their flowers should have one appointed time, so that the beauty of each of its rows may be complete."',
      sentences: [
        {
          id: 'qr2-63-031',
          ar: 'وَيَحْسُنُ أَنْ تَكُوْنَ الْفَسَائِلُ أَتْرَاباً فِي سِنٍّ وَاحِدَةٍ،',
          en: 'And it is best for the saplings to be of the same age, at a single stage of growth,',
          tokens: [
            { surface: 'وَيَحْسُنُ', lemma: 'حسن', pos: 'verb', features: 'conj+impf.3ms', root: 'ح س ن', gloss: 'to be good, preferable' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that, to' },
            { surface: 'تَكُوْنَ', lemma: 'كان', pos: 'verb', features: 'subj.3fs', gloss: 'to be' },
            { surface: 'الْفَسَائِلُ', lemma: 'فسيلة', pos: 'noun', features: 'def.nom.pl', gloss: 'the saplings' },
            { surface: 'أَتْرَاباً', lemma: 'ترب', pos: 'noun', features: 'indef.acc.pl', root: 'ت ر ب', gloss: 'peers, of the same age' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'at, in' },
            { surface: 'سِنٍّ', lemma: 'سن', pos: 'noun', features: 'indef.gen', gloss: 'an age, stage' },
            { surface: 'وَاحِدَةٍ', lemma: 'واحد', pos: 'adj', features: 'indef.gen', gloss: 'one, single' },
          ],
        },
        {
          id: 'qr2-63-032',
          ar: 'وَإِذَا كَانَتْ ذَاتَ أَزْهَارٍ فَلأَزْهَارِهَا مِيْعَادٌ وَاحِدٌ،',
          en: 'and if they have flowers, their flowers should have one appointed time,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إذا', pos: 'part', features: 'conj', gloss: 'and if' },
            { surface: 'كَانَتْ', lemma: 'كان', pos: 'verb', features: 'perf.3fs', gloss: 'to be' },
            { surface: 'ذَاتَ', lemma: 'ذات', pos: 'noun', features: 'acc.constr', root: 'ذ و', gloss: 'possessor of, having' },
            { surface: 'أَزْهَارٍ', lemma: 'زهرة', pos: 'noun', features: 'indef.gen.pl', root: 'ز ه ر', gloss: 'flowers' },
            { surface: 'فَلأَزْهَارِهَا', lemma: 'زهرة', pos: 'noun', features: 'conj+gen.pl+3fs', gloss: 'then for its flowers' },
            { surface: 'مِيْعَادٌ', lemma: 'ميعاد', pos: 'noun', features: 'indef.nom', root: 'و ع د', gloss: 'an appointed time' },
            { surface: 'وَاحِدٌ', lemma: 'واحد', pos: 'adj', features: 'indef.nom', gloss: 'one, single' },
          ],
        },
        {
          id: 'qr2-63-033',
          ar: 'لِيَتِمَّ جَمَالُ كُلِّ صَفٍّ مِنْ صُفُوْفِهَا.',
          en: 'so that the beauty of each of its rows may be complete."',
          tokens: [
            { surface: 'لِيَتِمَّ', lemma: 'تم', pos: 'verb', features: 'subj.3ms', root: 'ت م م', gloss: 'so that it may be complete' },
            { surface: 'جَمَالُ', lemma: 'جمال', pos: 'noun', features: 'nom.constr', root: 'ج م ل', gloss: 'the beauty of' },
            { surface: 'كُلِّ', lemma: 'كل', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'صَفٍّ', lemma: 'صف', pos: 'noun', features: 'indef.gen', gloss: 'a row' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'of, among' },
            { surface: 'صُفُوْفِهَا', lemma: 'صف', pos: 'noun', features: 'gen.pl+3fs', gloss: 'its rows' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا يَحْسُنُ أَنْ تَكُوْنَ الْفَسَائِلُ فِيْ سِنٍّ وَاحِدَةٍ؟',
          options: ['لِيَتِمَّ جَمَالُ كُلِّ صَفٍّ مِنْ صُفُوْفِهَا', 'لِتَكْبُرَ بِسُرْعَةٍ أَكْبَرَ', 'لِتُثْمِرَ فِيْ فَصْلِ الشِّتَاءِ'],
          answer: 0,
          qEn: 'Why is it best for the saplings to be of the same age?',
          optionsEn: ['So that the beauty of each row may be complete', 'So they grow faster', 'So they bear fruit in winter'],
        },
      ],
    },
    {
      en: '"And the gardener does not rest after that; rather he stays up watchfully over these saplings, never ceasing to water them once or twice every day, pulling out the weeds, and hoeing the ground around them, turning its inside to its outside."',
      sentences: [
        {
          id: 'qr2-63-034',
          ar: 'وَلاَ يَسْتَرِيْحُ الْبُسْتَانِيُّ بَعْدَ ذٰلِكَ،',
          en: 'And the gardener does not rest after that,',
          tokens: [
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَسْتَرِيْحُ', lemma: 'استراح', pos: 'verb', features: 'impf.3ms', root: 'ر و ح', gloss: 'to rest' },
            { surface: 'الْبُسْتَانِيُّ', lemma: 'بستاني', pos: 'noun', features: 'def.nom', gloss: 'the gardener' },
            { surface: 'بَعْدَ', lemma: 'بعد', pos: 'adv', gloss: 'after' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
          ],
        },
        {
          id: 'qr2-63-035',
          ar: 'بَلْ يَسْهَرُ عَلَىٰ هٰذِهِ الْفَسَائِلِ،',
          en: 'rather he stays up watchfully over these saplings,',
          tokens: [
            { surface: 'بَلْ', lemma: 'بل', pos: 'part', gloss: 'rather' },
            { surface: 'يَسْهَرُ', lemma: 'سهر', pos: 'verb', features: 'impf.3ms', gloss: 'to stay up watchfully' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'over' },
            { surface: 'هٰذِهِ', lemma: 'هذه', pos: 'dem', gloss: 'these' },
            { surface: 'الْفَسَائِلِ', lemma: 'فسيلة', pos: 'noun', features: 'def.gen.pl', gloss: 'the saplings' },
          ],
        },
        {
          id: 'qr2-63-036',
          ar: 'فَلاَ يَزَالُ يَسْقِيْهَا مَرَّةً أَوْ مَرَّتَيْنِ كُلَّ يَوْمٍ،',
          en: 'never ceasing to water them once or twice every day,',
          tokens: [
            { surface: 'فَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَزَالُ', lemma: 'زال', pos: 'verb', features: 'impf.3ms', gloss: 'to cease, stop' },
            { surface: 'يَسْقِيْهَا', lemma: 'سقى', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to water it' },
            { surface: 'مَرَّةً', lemma: 'مرة', pos: 'noun', features: 'indef.acc', gloss: 'once' },
            { surface: 'أَوْ', lemma: 'أو', pos: 'conj', gloss: 'or' },
            { surface: 'مَرَّتَيْنِ', lemma: 'مرة', pos: 'noun', features: 'indef.acc.du', gloss: 'twice' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
          ],
        },
        {
          id: 'qr2-63-037',
          ar: 'وَيَقْلَعُ الْحَشَائِشَ،',
          en: 'pulling out the weeds,',
          tokens: [
            { surface: 'وَيَقْلَعُ', lemma: 'قلع', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to uproot, pull out' },
            { surface: 'الْحَشَائِشَ', lemma: 'حشيشة', pos: 'noun', features: 'def.acc.pl', gloss: 'the weeds' },
          ],
        },
        {
          id: 'qr2-63-038',
          ar: 'وَيَعْزِقُ الأَرْضَ حَوْلَهَا،',
          en: 'and hoeing the ground around them,',
          tokens: [
            { surface: 'وَيَعْزِقُ', lemma: 'عزق', pos: 'verb', features: 'conj+impf.3ms', root: 'ع ز ق', gloss: 'to hoe, dig' },
            { surface: 'الأَرْضَ', lemma: 'أرض', pos: 'noun', features: 'def.acc', gloss: 'the ground' },
            { surface: 'حَوْلَهَا', lemma: 'حول', pos: 'adv', features: '3fs', gloss: 'around them' },
          ],
        },
        {
          id: 'qr2-63-039',
          ar: 'فَيَجْعَلُ بَاطِنَهَا ظَاهِرَهَا».',
          en: 'turning its inside to its outside."',
          tokens: [
            { surface: 'فَيَجْعَلُ', lemma: 'جعل', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to make, turn (into)' },
            { surface: 'بَاطِنَهَا', lemma: 'باطن', pos: 'noun', features: 'acc+3fs', gloss: 'its interior' },
            { surface: 'ظَاهِرَهَا', lemma: 'ظاهر', pos: 'noun', features: 'acc+3fs', root: 'ظ ه ر', gloss: 'its exterior' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَفْعَلُ الْبُسْتَانِيُّ بَعْدَ غَرْسِ الْفَسَائِلِ؟',
          options: ['يَسْهَرُ عَلَيْهَا وَيَسْقِيْهَا وَيَقْلَعُ الْحَشَائِشَ وَيَعْزِقُ الأَرْضَ', 'يَتْرُكُهَا وَلاَ يَعُوْدُ إِلَيْهَا', 'يَبِيْعُهَا فَوْراً'],
          answer: 0,
          qEn: 'What does the gardener do after planting the saplings?',
          optionsEn: ['He watches over them, waters them, weeds, and hoes the ground', 'He leaves them and never returns to them', 'He sells them immediately'],
        },
      ],
    },
    {
      en: 'Here the gardener finished cultivating the ground and went to move a sapling, so Umar and Abbas followed him and stood by his side.',
      sentences: [
        {
          id: 'qr2-63-040',
          ar: 'هُنَا فَرَغَ الْبُسْتَانِيُّ مِنْ إِصْلاَحِ الأَرْضِ وَذَهَبَ يَنْقُلُ فَسِيْلاً،',
          en: 'Here the gardener finished cultivating the ground and went to move a sapling,',
          tokens: [
            { surface: 'هُنَا', lemma: 'هنا', pos: 'adv', gloss: 'here' },
            { surface: 'فَرَغَ', lemma: 'فرغ', pos: 'verb', features: 'perf.3ms', gloss: 'to finish' },
            { surface: 'الْبُسْتَانِيُّ', lemma: 'بستاني', pos: 'noun', features: 'def.nom', gloss: 'the gardener' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'إِصْلاَحِ', lemma: 'إصلاح', pos: 'noun', features: 'gen.constr', root: 'ص ل ح', gloss: 'cultivating, repairing' },
            { surface: 'الأَرْضِ', lemma: 'أرض', pos: 'noun', features: 'def.gen', gloss: 'the ground' },
            { surface: 'وَذَهَبَ', lemma: 'ذهب', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go' },
            { surface: 'يَنْقُلُ', lemma: 'نقل', pos: 'verb', features: 'impf.3ms', gloss: 'to move, transfer' },
            { surface: 'فَسِيْلاً', lemma: 'فسيلة', pos: 'noun', features: 'indef.acc', gloss: 'a sapling' },
          ],
        },
        {
          id: 'qr2-63-041',
          ar: 'فَتَبِعَهُ عُمَرُ وَعَبَّاسٌ،',
          en: 'so Umar and Abbas followed him,',
          tokens: [
            { surface: 'فَتَبِعَهُ', lemma: 'تبع', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ت ب ع', gloss: 'to follow (him)' },
            { surface: 'عُمَرُ', lemma: 'عمر', pos: 'proper', features: 'nom', gloss: 'Umar' },
            { surface: 'وَعَبَّاسٌ', lemma: 'عباس', pos: 'proper', features: 'conj+nom', gloss: 'and Abbas' },
          ],
        },
        {
          id: 'qr2-63-042',
          ar: 'وَوَقَفَا بِجَانِبِهِ.',
          en: 'and stood by his side.',
          tokens: [
            { surface: 'وَوَقَفَا', lemma: 'وقف', pos: 'verb', features: 'conj+perf.3md', gloss: 'to stand' },
            { surface: 'بِجَانِبِهِ', lemma: 'جانب', pos: 'noun', features: '3ms', gloss: 'by his side' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ عُمَرُ وَعَبَّاسٌ بَعْدَ أَنْ فَرَغَ الْبُسْتَانِيُّ مِنْ إِصْلاَحِ الأَرْضِ؟',
          options: ['تَبِعَاهُ وَوَقَفَا بِجَانِبِهِ', 'عَادَا إِلَى الْبَيْتِ', 'نَامَا تَحْتَ شَجَرَةٍ'],
          answer: 0,
          qEn: 'What did Umar and Abbas do after the gardener finished cultivating the ground?',
          optionsEn: ['They followed him and stood by his side', 'They returned home', 'They slept under a tree'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'فِيْهَا كُلَّ يَوْمٍ.',
        en: 'I play in it every day.',
        options: ['أَلْعَبُ', 'لَعِبَ', 'تَلْعَبِيْنَ', 'نَلْعَبُ'],
        answer: 0,
        rationales: [
          '1st person singular present.',
          'Perfect 3rd person — he played.',
          '2nd feminine singular — you (f.) play.',
          '1st person plural — we play.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَالنَّبَاتُ جِسْمٌ حَيٌّ نَامٍ',
        post: 'إِلَى الشَّمْسِ وَالْهَوَاءِ وَالْمَاءِ.',
        en: 'The plant is a living, growing body that needs the sun, the air, and the water.',
        options: ['يَحْتَاجُ', 'اِحْتَجْتُ', 'تَحْتَاجِيْنَ', 'نَحْتَاجُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular present (النَّبَات is masculine).',
          '1st person singular past — I needed.',
          '2nd feminine singular — you (f.) need.',
          '1st person plural — we need.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَغْرِسُ الْفَسَائِلَ فِيْ صَفٍّ',
        pre: '',
        post: 'الْفَسَائِلَ فِيْ صَفٍّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَغْرِسُ', 'تَغْرِسُ', 'نَغْرِسُ', 'يَغْرِسُوْنَ'],
        answer: 0,
        rationales: ['1st person singular takes the prefix أَـ.', '', '', ''],
      },
      {
        type: 'shift',
        base: 'يُنَحِّي الْحَجَرَ وَالْخَزَفَ',
        pre: '',
        post: 'الْحَجَرَ وَالْخَزَفَ',
        targetPerson: 'هُنَّ',
        targetEn: 'they (f.)',
        options: ['يُنَحِّيْنَ', 'يُنَحُّوْنَ', 'تُنَحِّي', 'نُنَحِّي'],
        answer: 0,
        rationales: ['3rd feminine plural takes the suffix ـْيْنَ.', '3rd masculine plural, wrong gender.', '3rd feminine singular, wrong number.', '1st person plural, wrong person.'],
      },
    ],
  },
};

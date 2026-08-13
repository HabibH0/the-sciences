// قَصَصُ النَّبِيِّينَ, volume 11 «زَكَرِيَّا», chapter 2 -- نَذْرُ امْرَأَةِ
// عِمْرَانَ. Printed page 244 only -- the whole chapter is the single short
// paragraph between the "١" and "٣" chapter-heading boxes. Transcribed from
// the hand-transcribed source text supplied for this task (already
// cross-checked against the 300dpi scan) against ../CHAPTER-FORMAT.md.
//
// This is the Qur'anic-narrative account of Maryam's mother (traditionally
// named Hannah), related by marriage to Zakariyyā's household, vowing to
// dedicate her unborn child to Allah's service -- set up here just before
// the story (chapter 3, written by a parallel agent) reveals the child was
// a girl and pivots back to Zakariyyā. No Qur'an quotation on this page.
//
// A small "ﷺ"-style honorific ligature follows زَكَرِيَّا in the print;
// per the task brief this is a decorative liturgical mark, not a word, and
// has been dropped from the transcribed `ar` (not tokenized).
//
// Segmentation note: the printed text has only 4 commas + 1 final period
// (5 clauses), short of CHAPTER-FORMAT.md's 5-buildable-sentence floor --
// two of the five printed clauses run to 10 tokens each, over the 3-9
// buildable window. Rather than force those two 10-token clauses through
// as unbuildable, I split each at its natural internal syntactic seam
// (qs-v11-c02-003/004 at the إِذَا-protasis boundary; qs-v11-c02-005/006 at
// the coordinating وَ between the two أَنْ-subjunctive verbs) per
// CHAPTER-FORMAT.md's "split *roughly* where the Arabic punctuates"
// allowance. This yields 7 sentences, all buildable (well past the floor
// of 5), at the cost of two sentence boundaries (003/005) that carry no
// printed punctuation in their own `ar` -- flagging this deviation for
// review since it wasn't a plain comma-split.
//
// Grammar / lexical notes:
//   -- أَنَّهَا (qs-v11-c02-003) is أَنَّ ("that", already taught) + هَا (3fs)
//      fused, tagged pos:'part', features:'part+3fs', lemma أَنَّ, per the
//      corpus's existing أَنَّهُ precedent (e.g. qasas-v1 ch14).
//   -- تَهَبُ (qs-v11-c02-004, impf.3fs of وَهَبَ "to grant/dedicate") is
//      introduced as new here per the task brief's note that this lemma
//      (and its imperative هَبْ) recurs in chapters 3, 5 and 7 of this
//      volume -- it should NOT be re-added as new there.
//   -- يَتَقَبَّلَ (qs-v11-c02-005) reuses the already-taught تَقَبَّلَ (qasas-v1
//      ch15, root ق ب ل) -- confirmed via corpus grep, not re-listed here.
//   -- نَفَعَ (qs-v11-c02-006) is already taught (qasas-v1 ch2, root ن ف ع)
//      -- confirmed via corpus grep, not re-listed here.
//   -- Neither يَتَقَبَّلَ nor يَنْفَعَ nor يَكُونَ carries a separate subjunctive/
//      jussive mood tag -- CHAPTER-FORMAT.md has no mood atom, matching the
//      corpus's existing practice of leaving mood untracked on verbs after
//      أَنْ (e.g. qasas-v2 ch4's precedent note on جزم after لَا).
//   -- REVIEW-PASS CORRECTION: وَلَدَتْ (qs-v11-c02-003, perf.3fs "she gave
//      birth") was originally added here as an 8th new word beyond this
//      chapter's briefed list of 7, since the corpus so far only teaches
//      the *nominal* family of هذا الجذر (وَلَد "child/son", وَالِد
//      "father"). On the full-volume review pass it turned out
//      qasas-v11/chapter-01.js (this volume's own chapter 1, earlier in
//      reading order) already introduces this exact verb lemma at its
//      qs-v11-c01-011 (تَلِدَ). Removed from newWords/lemmas here to avoid
//      teaching it twice; the token below keeps its own inline gloss.
//   -- دَاعِياً (qs-v11-c02-007) is tagged pos:'noun' (substantivized active
//      participle), matching the corpus's existing treatment of active
//      participles like مُشْرِك (qasas-v2 ch11) rather than 'adj'.
//   -- أَئِمَّةِ (qs-v11-c02-007) is the broken plural of إِمَام, sharing its
//      lemma (not listed separately in newWords), tagged 'pl.gen.constr'
//      matching the corpus's majority pl+case+constr ordering (e.g.
//      qasas-v1 ch16's أَوْلَادِ, qasas-v3 ch4's رُءُوسِ).
//   -- Shared lexicon check (CHAPTER-FORMAT.md corpus grep): اِمْرَأَة
//      (qasas-v2 ch7/8), سَيِّد (qasas-v1 ch12), زَكَرِيَّا/عِمْرَان (proper,
//      not re-listed regardless), كَانَ، أَحَبَّ (qasas-v1 ch14 etc.), اللَّه،
//      دِين (qasas-v2 ch11), إِذَا (qasas-v1 ch3), ذَكَر (qasas-v3 ch19),
//      هَذَا (qasas-v1 ch1), وَلَد (qasas-v1 ch2), سَأَلَ (qasas-v1 ch2),
//      أَنْ (qasas-v2 ch4), تَقَبَّلَ (qasas-v1 ch15), نَفَعَ (qasas-v1 ch2), بِ،
//      عَبْد (qasas-v2 ch9), مِنْ, إِلَى, صَالِح (qasas-v2 ch25) are all
//      already taught and are NOT re-listed in newWords here.
//
// 7 new words (نَذَرَ، أُسْرَة، وَهَبَ، خِدْمَة، دَاعِي، إِمَام، هُدَى). وَلَدَ was
// removed on review -- see note above; it belongs to chapter 1.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'نَذْرُ امْرَأَةِ عِمْرَانَ', en: "The Vow of ʿImrān's Wife" },
  newWords: ['نَذَرَ', 'أُسْرَة', 'وَهَبَ', 'خِدْمَة', 'دَاعِي', 'إِمَام', 'هُدَى'],
  lemmas: {
    'نَذَرَ': { gloss: 'to vow' },
    'أُسْرَة': { gloss: 'family, household' },
    'وَهَبَ': { gloss: 'to grant, bestow, dedicate' },
    'خِدْمَة': { gloss: 'service' },
    'دَاعِي': { gloss: 'one who calls, caller (to the truth); preacher' },
    'إِمَام': { gloss: 'leader, exemplar (in religion)' },
    'هُدَى': { gloss: 'guidance, right guidance' },
  },
  paragraphs: [
    {
      en: "ʿImrān's wife -- of the family of our master Zakariyyā -- was a righteous woman who loved Allah and loved His religion. She had vowed that if she gave birth to a boy, she would dedicate that child to Allah for the service of His religion. She asked Allah to accept this child, to benefit His religion and His servants through him, and to make him a caller to Allah and a leader among the leaders of right guidance.",
      sentences: [
        {
          id: 'qs-v11-c02-001',
          ar: 'وَقَدْ نَذَرَتِ امْرَأَةُ عِمْرَانَ مِنْ أُسْرَةِ سَيِّدِنَا زَكَرِيَّا،',
          en: "ʿImrān's wife, of the family of our master Zakariyyā, made a vow --",
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'نَذَرَتِ', lemma: 'نَذَرَ', pos: 'verb', features: 'perf.3fs', root: 'ن ذ ر', gloss: 'to vow; vowed' },
            { surface: 'امْرَأَةُ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'nom.constr', root: 'م ر أ', gloss: 'the wife of' },
            { surface: 'عِمْرَانَ', lemma: 'عِمْرَان', pos: 'proper', features: 'gen', gloss: 'ʿImrān' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, of' },
            { surface: 'أُسْرَةِ', lemma: 'أُسْرَة', pos: 'noun', features: 'constr.gen', root: 'أ س ر', gloss: 'the family of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', root: 'س و د', gloss: 'our master' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'gen', gloss: 'Zakariyyā' },
          ],
        },
        {
          id: 'qs-v11-c02-002',
          ar: 'وَكَانَتِ امْرَأَةً صَالِحَةً تُحِبُّ اللَّهَ وَتُحِبُّ دِينَهُ،',
          en: 'she was a righteous woman who loved Allah and loved His religion --',
          tokens: [
            { surface: 'وَكَانَتِ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'امْرَأَةً', lemma: 'اِمْرَأَة', pos: 'noun', features: 'indef.acc', root: 'م ر أ', gloss: 'a woman' },
            { surface: 'صَالِحَةً', lemma: 'صَالِح', pos: 'adj', features: 'indef.acc.f', root: 'ص ل ح', gloss: 'righteous' },
            { surface: 'تُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3fs', root: 'ح ب ب', gloss: 'to love; loves' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَتُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'conj+impf.3fs', root: 'ح ب ب', gloss: 'to love; and loves' },
            { surface: 'دِينَهُ', lemma: 'دِين', pos: 'noun', features: 'acc+3ms', root: 'د ي ن', gloss: 'His religion' },
          ],
        },
        {
          id: 'qs-v11-c02-003',
          ar: 'أَنَّهَا إِذَا وَلَدَتْ ذَكَراً',
          en: 'that if she gave birth to a boy,',
          tokens: [
            { surface: 'أَنَّهَا', lemma: 'أَنَّ', pos: 'part', features: 'part+3fs', gloss: 'that she' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'when, if' },
            { surface: 'وَلَدَتْ', lemma: 'وَلَدَ', pos: 'verb', features: 'perf.3fs', root: 'و ل د', gloss: 'to give birth; gave birth (to)' },
            { surface: 'ذَكَراً', lemma: 'ذَكَر', pos: 'noun', features: 'indef.acc', root: 'ذ ك ر', gloss: 'a male' },
          ],
        },
        {
          id: 'qs-v11-c02-004',
          ar: 'تَهَبُ هَذَا الْوَلَدَ لِلَّهِ لِخِدْمَةِ دِينِهِ،',
          en: 'she would dedicate this child to Allah for the service of His religion.',
          tokens: [
            { surface: 'تَهَبُ', lemma: 'وَهَبَ', pos: 'verb', features: 'impf.3fs', root: 'و ه ب', gloss: 'to grant, dedicate; she would dedicate' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْوَلَدَ', lemma: 'وَلَد', pos: 'noun', features: 'def.acc', root: 'و ل د', gloss: 'the child' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'to Allah' },
            { surface: 'لِخِدْمَةِ', lemma: 'خِدْمَة', pos: 'noun', features: 'prep+constr.gen', root: 'خ د م', gloss: 'for the service of' },
            { surface: 'دِينِهِ', lemma: 'دِين', pos: 'noun', features: 'gen+3ms', root: 'د ي ن', gloss: 'His religion' },
          ],
        },
        {
          id: 'qs-v11-c02-005',
          ar: 'وَسَأَلَتِ اللَّهَ أَنْ يَتَقَبَّلَ هَذَا الْوَلَدَ',
          en: 'And she asked Allah to accept this child,',
          tokens: [
            { surface: 'وَسَأَلَتِ', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3fs', root: 'س أ ل', gloss: 'to ask; and asked' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يَتَقَبَّلَ', lemma: 'تَقَبَّلَ', pos: 'verb', features: 'impf.3ms', root: 'ق ب ل', gloss: 'to accept; would accept' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْوَلَدَ', lemma: 'وَلَد', pos: 'noun', features: 'def.acc', root: 'و ل د', gloss: 'the child' },
          ],
        },
        {
          id: 'qs-v11-c02-006',
          ar: 'وَيَنْفَعَ بِهِ دِينَهُ وَعِبَادَهُ،',
          en: 'and benefit, through him, His religion and His servants,',
          tokens: [
            { surface: 'وَيَنْفَعَ', lemma: 'نَفَعَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ن ف ع', gloss: 'to benefit; and would benefit' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by/through him' },
            { surface: 'دِينَهُ', lemma: 'دِين', pos: 'noun', features: 'acc+3ms', root: 'د ي ن', gloss: 'His religion' },
            { surface: 'وَعِبَادَهُ', lemma: 'عَبْد', pos: 'noun', features: 'conj+pl.acc+3ms', root: 'ع ب د', gloss: 'and His servants' },
          ],
        },
        {
          id: 'qs-v11-c02-007',
          ar: 'وَأَنْ يَكُونَ دَاعِياً إِلَى اللَّهِ وَإِمَاماً مِنْ أَئِمَّةِ الْهُدَى.',
          en: 'and to make him a caller to Allah and a leader among the leaders of right guidance.',
          tokens: [
            { surface: 'وَأَنْ', lemma: 'أَنْ', pos: 'part', features: 'conj+part', gloss: 'and that, and to' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; would be' },
            { surface: 'دَاعِياً', lemma: 'دَاعِي', pos: 'noun', features: 'indef.acc', root: 'د ع و', gloss: 'a caller, one who calls (to)' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَإِمَاماً', lemma: 'إِمَام', pos: 'noun', features: 'conj+indef.acc', root: 'أ م م', gloss: 'and a leader' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, among' },
            { surface: 'أَئِمَّةِ', lemma: 'إِمَام', pos: 'noun', features: 'pl.gen.constr', root: 'أ م م', gloss: 'the leaders of' },
            { surface: 'الْهُدَى', lemma: 'هُدَى', pos: 'noun', features: 'def.gen', root: 'ه د ي', gloss: 'guidance' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا نَذَرَتِ امْرَأَةُ عِمْرَانَ إِذَا وَلَدَتْ ذَكَراً؟',
          options: ['أَنْ تَهَبَ هَذَا الْوَلَدَ لِلَّهِ لِخِدْمَةِ دِينِهِ', 'أَنْ تُسَمِّيَهُ بِاسْمِ أَبِيهِ عِمْرَانَ', 'أَنْ تُرْسِلَهُ لِيَتَعَلَّمَ التِّجَارَةَ'],
          answer: 0,
          qEn: "What did ʿImrān's wife vow to do if she gave birth to a boy?",
          optionsEn: ['To dedicate the child to Allah for the service of His religion', 'To name him after his father ʿImrān', 'To send him away to learn trade'],
        },
        {
          q: 'مَاذَا سَأَلَتِ اللَّهَ أَنْ يَكُونَ هَذَا الْوَلَدُ؟',
          options: ['دَاعِياً إِلَى اللَّهِ وَإِمَاماً مِنْ أَئِمَّةِ الْهُدَى', 'مَلِكاً عَظِيماً فِي قَوْمِهِ', 'تَاجِراً غَنِيّاً مَشْهُوراً'],
          answer: 0,
          qEn: 'What did she ask Allah for this child to become?',
          optionsEn: ['A caller to Allah and a leader among the leaders of right guidance', 'A great king over his people', 'A rich and famous merchant'],
        },
        {
          q: 'مِنْ أُسْرَةِ مَنْ كَانَتِ امْرَأَةُ عِمْرَانَ؟',
          options: ['مِنْ أُسْرَةِ سَيِّدِنَا زَكَرِيَّا', 'مِنْ أُسْرَةِ سَيِّدِنَا مُوسَى', 'مِنْ أُسْرَةِ سَيِّدِنَا دَاوُدَ'],
          answer: 0,
          qEn: "ʿImrān's wife belonged to whose family?",
          optionsEn: ['The family of our master Zakariyyā', 'The family of our master Mūsā', 'The family of our master Dāwūd'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَأَنْ يَكُونَ',
        post: 'إِلَى اللَّهِ وَإِمَاماً مِنْ أَئِمَّةِ الْهُدَى.',
        en: 'and that he would be a caller to Allah and a leader among the leaders of right guidance.',
        options: ['دَاعِياً', 'دَاعٍ', 'دَاعِيَةً', 'دُعَاةً'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of يَكُونَ, matching the taught pattern.',
          'Nominative -- wrong case; the predicate of كَانَ/يَكُونَ takes the accusative (and this defective noun drops its ى in the nominative/genitive).',
          'Feminine -- wrong gender; the child being described (a son) is masculine.',
          'Plural -- wrong number; a single caller is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَنْ يَكُونَ دَاعِياً إِلَى اللَّهِ وَ',
        post: 'مِنْ أَئِمَّةِ الْهُدَى.',
        en: 'and a leader among the leaders of right guidance.',
        options: ['إِمَاماً', 'إِمَامٌ', 'إِمَامٍ', 'أَئِمَّةً'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- the second predicate of يَكُونَ, coordinated with دَاعِياً.',
          'Nominative -- wrong case for a predicate of يَكُونَ.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single leader (paired with دَاعِياً) is meant, not "leaders."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تُحِبُّ اللَّهَ',
        pre: '',
        post: 'اللَّهَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُحِبُّ', 'تُحِبُّ', 'يُحِبُّ', 'نُحِبُّ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '2nd masculine singular or 3rd feminine singular -- you or she love, the form already given.',
          '3rd masculine singular -- he loves.',
          '1st plural -- we love.',
        ],
      },
      {
        type: 'shift',
        base: 'تُحِبُّ اللَّهَ',
        pre: '',
        post: 'اللَّهَ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يُحِبُّ', 'تُحِبُّ', 'أُحِبُّ', 'نُحِبُّ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '2nd masculine singular or 3rd feminine singular -- you or she love, the form already given.',
          '1st singular -- I love.',
          '1st plural -- we love.',
        ],
      },
      {
        type: 'shift',
        base: 'تُحِبُّ اللَّهَ',
        pre: '',
        post: 'اللَّهَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُحِبُّ', 'تُحِبُّ', 'يُحِبُّ', 'أُحِبُّ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '2nd masculine singular or 3rd feminine singular -- you or she love, the form already given.',
          '3rd masculine singular -- he loves.',
          '1st singular -- I love.',
        ],
      },
    ],
  },
};

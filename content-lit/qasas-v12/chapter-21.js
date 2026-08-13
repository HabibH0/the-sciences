// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 21. Printed page 264 only -- the chapter is
// a single paragraph sitting at the top of the page, ending where ch22's
// heading الْقُرْآنُ يَحْكِي الْقِصَّةَ begins partway down the same page.
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// TITLE CORRECTION (verified against the scan, not the printed index):
// the book's own topical index (pp.286-288) prints this chapter's title as
// «إِلْحَاحٌ وَإِصْرَارٌ» (ṣād -- "Persistence and Insistence"), but the
// chapter-heading box on the actual page-264 scan clearly reads
// «إِلْحَاحٌ وَإِضْرَارٌ» (ḍād -- "Persistence and Harm/Imposition", from
// ضَرَّ "to harm"). This module follows the scan, per instruction: the
// index's ص is treated as a printing/index error.
//
// Content: this is the second half of the disciples' request for the
// heavenly table (see ch22, which follows immediately with the Qur'anic
// text itself). The author defends the disciples' persistence -- they held
// fast to their question not to test Isa, but sincerely wanting reassurance,
// so that the episode would become a remembrance for later generations and
// a story handed down through the ages, standing as proof of the
// religion's truth and of the rank of the first believers and disciples.
// The whole chapter is one long periodic sentence in the original, split
// here at its natural clause boundaries per house convention (see
// qasas-v3/chapter-14.js's header note).
//
// Grammar / lexical notes:
//   -- الْحَوَارِيِّينَ (qs-v12-c21-001) is accusative as the ism of
//      لَكِنَّ (sisters-of-inna construction), not as an object -- the verb
//      تَشَبَّثُوا carries its own implied subject pronoun (هم) referring
//      back to it, serving as لكنّ's predicate clause.
//   -- جَادّ (new) is the active-participle-as-noun of جَدَّ ("to be
//      serious"), a distinct lemma from the already-taught nouns جَدّ
//      ("grandfather") and جِدّ ("earnestness") that share the same root,
//      per the corpus's participle/noun-vs-verb distinct-lemma convention
//      (qasas-v3 ch14's header note, طَارِد vs طَرَدَ).
//   -- اِطْمِئْنَان (new, verbal noun "reassurance") is a distinct lemma
//      from the already-taught verb اِطْمَأَنَّ, matching the corpus's
//      verb-vs-verbal-noun convention (كِبْر vs كَبِير, qasas-v3 ch14).
//   -- تُحْكَى (qs-v12-c21-006) is the passive imperfect of the
//      already-taught حَكَى ("to narrate") -- same lemma, 'pass' atom added.
//   -- وَلِيَكُونَ / فَتَكُونَ (005, 007) are both purpose-clause subjunctive
//      forms of the already-taught كَانَ, tagged with a fused لِ/فَ
//      particle segment ahead of the person segment, matching qasas-v3
//      ch14's وَيَعْبُدُوا-style tagging for subjunctive clauses after أَنْ.
//   -- ذِكْرَى (005) is a defective (maqṣūrah) noun -- it never shows a
//      visible case ending on the page, so it is not counted toward this
//      chapter's buildable-sentence total even though it is tagged
//      indef.acc for its grammatical role (predicate of لِيَكُونَ).
//   -- مَرّ (006, "the passing of," as in عَلَى مَرِّ الْأَيَّامِ) matches an
//      unvocalized "مر" entry already present in the known-lemmas list, so
//      it is treated as already taught and not re-listed here.
//   -- فَرَّقَ-style ambiguity: N/A this chapter (see ch23/ch24's header for
//      that call).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, against
//      known-lemmas.txt): لَكِنَّ، فِي، هَذَا، لَا، قَصَدَ، اِمْتِحَان، إِنَّمَا (kept
//      here despite being a discourse particle, see note **), أَرَادَ، ذَلِكَ،
//      عَلَى، دِين، مُؤْمِن، أَوَّل، صَادِق، مَرّ
//      are all already taught and are NOT re-listed in newWords here.
//      ** إِنَّمَا was checked against known-lemmas.txt and is genuinely
//      absent, but as a closed-class restrictive particle it is treated
//      like the corpus's other function words (لَا، هَلْ، مِنْ، …) and left
//      out of newWords/lemmas -- only glossed inline on its token -- to
//      match the precedent set by qasas-v3/chapter-01.js and chapter-14.js,
//      where such particles are never listed as vocabulary even when the
//      grep comes back empty. Content words (nouns/verbs/adjectives/
//      proper nouns) are the only class actually tracked in newWords here.
//
// 14 new words (تَشَبَّثَ، سُؤَال، جَادّ، اِطْمِئْنَان، ذِكْرَى، جِيل، قَادِم، رَوَى،
// دَلِيل، صِدْق، مَنْزِلَة، حَوَارِيّ، يَوْم) -- عِيسَى/مَرْيَم/إِسْرَائِيل/يَهُود, this
// volume's other core proper nouns, do not happen to occur in this
// particular chapter's text.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch21',
  title: { ar: 'إِلْحَاحٌ وَإِضْرَارٌ', en: 'Persistence and Harm' },
  newWords: [
    'تَشَبَّثَ', 'جَادّ', 'اِطْمِئْنَان', 'ذِكْرَى', 'جِيل', 'قَادِم',
    'رَوَى', 'دَلِيل', 'صِدْق',
  ],
  lemmas: {
    تَشَبَّثَ: { gloss: 'to cling to, hold fast to' },
    سُؤَال: { gloss: 'question' },
    جَادّ: { gloss: 'serious, earnest' },
    اِطْمِئْنَان: { gloss: 'reassurance, peace of mind' },
    ذِكْرَى: { gloss: 'a remembrance, reminder' },
    جِيل: { gloss: 'generation' },
    قَادِم: { gloss: 'coming, forthcoming' },
    رَوَى: { gloss: 'to relate, narrate, transmit' },
    دَلِيل: { gloss: 'evidence, proof' },
    صِدْق: { gloss: 'truthfulness' },
    مَنْزِلَة: { gloss: 'rank, standing' },
    حَوَارِيّ: { gloss: 'disciple' },
    يَوْم: { gloss: 'day' },
  },
  paragraphs: [
    {
      en: "But the disciples held fast to their question, and made clear that they were in earnest about it -- they did not mean it as a test, but only wanted reassurance -- so that it would become a remembrance for coming generations, a story told and retold across the ages, standing as proof of the truthfulness of this religion, and of the rank of the first believers and the truthful disciples.",
      sentences: [
        {
          id: 'qs-v12-c21-001',
          ar: 'وَلَكِنَّ الْحَوَارِيِّينَ تَشَبَّثُوا بِسُؤَالِهِمْ،',
          en: 'But the disciples held fast to their question,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'الْحَوَارِيِّينَ', lemma: 'حَوَارِيّ', pos: 'noun', features: 'def.acc.pl', root: 'ح و ر', gloss: 'the disciples' },
            { surface: 'تَشَبَّثُوا', lemma: 'تَشَبَّثَ', pos: 'verb', features: 'perf.3mp', gloss: 'to cling to, hold fast to; clung to' },
            { surface: 'بِسُؤَالِهِمْ', lemma: 'سُؤَال', pos: 'noun', features: 'prep+gen+3mp', gloss: 'to their question' },
          ],
        },
        {
          id: 'qs-v12-c21-002',
          ar: 'وَذَكَرُوا أَنَّهُمْ جَادُّونَ فِي هَذَا السُّؤَالِ،',
          en: 'and mentioned that they were in earnest about this question,',
          tokens: [
            { surface: 'وَذَكَرُوا', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to mention; and mentioned' },
            { surface: 'أَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+3mp', gloss: 'that they' },
            { surface: 'جَادُّونَ', lemma: 'جَادّ', pos: 'noun', features: 'indef.nom.pl', root: 'ج د د', gloss: 'serious, earnest ones' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'السُّؤَالِ', lemma: 'سُؤَال', pos: 'noun', features: 'def.gen', gloss: 'the question' },
          ],
        },
        {
          id: 'qs-v12-c21-003',
          ar: 'لَا يَقْصِدُونَ امْتِحَانًا',
          en: 'they did not intend a test --',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقْصِدُونَ', lemma: 'قَصَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to intend; intend' },
            { surface: 'امْتِحَانًا', lemma: 'اِمْتِحَان', pos: 'noun', features: 'indef.acc', gloss: 'a test' },
          ],
        },
        {
          id: 'qs-v12-c21-004',
          ar: 'إِنَّمَا يُرِيدُونَ اطْمِئْنَانًا،',
          en: 'they only wanted reassurance,',
          tokens: [
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'rather, only' },
            { surface: 'يُرِيدُونَ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3mp', gloss: 'to want; want' },
            { surface: 'اطْمِئْنَانًا', lemma: 'اِطْمِئْنَان', pos: 'noun', features: 'indef.acc', root: 'ط م أ ن', gloss: 'reassurance' },
          ],
        },
        {
          id: 'qs-v12-c21-005',
          ar: 'وَلِيَكُونَ ذَلِكَ ذِكْرَى لِلْأَجْيَالِ الْقَادِمَةِ،',
          en: 'and so that it would be a remembrance for the coming generations,',
          tokens: [
            { surface: 'وَلِيَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+part+impf.3ms', gloss: 'to be; and so that it would be' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'ذِكْرَى', lemma: 'ذِكْرَى', pos: 'noun', features: 'indef.acc', gloss: 'a remembrance' },
            { surface: 'لِلْأَجْيَالِ', lemma: 'جِيل', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'for the generations' },
            { surface: 'الْقَادِمَةِ', lemma: 'قَادِم', pos: 'adj', features: 'def.gen.f', root: 'ق د م', gloss: 'coming, forthcoming' },
          ],
        },
        {
          id: 'qs-v12-c21-006',
          ar: 'وَقِصَّةً تُحْكَى وَتُرْوَى عَلَى مَرِّ الْأَيَّامِ،',
          en: 'and a story told and retold across the passing of the days,',
          tokens: [
            { surface: 'وَقِصَّةً', lemma: 'قِصَّة', pos: 'noun', features: 'conj+indef.acc', gloss: 'and a story' },
            { surface: 'تُحْكَى', lemma: 'حَكَى', pos: 'verb', features: 'pass+impf.3fs', gloss: 'to narrate; to be narrated' },
            { surface: 'وَتُرْوَى', lemma: 'رَوَى', pos: 'verb', features: 'conj+pass+impf.3fs', gloss: 'to relate, transmit; and to be related' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'مَرِّ', lemma: 'مَرّ', pos: 'noun', features: 'constr.gen', gloss: 'the passing of' },
            { surface: 'الْأَيَّامِ', lemma: 'يَوْم', pos: 'noun', features: 'def.gen.pl', gloss: 'the days' },
          ],
        },
        {
          id: 'qs-v12-c21-007',
          ar: 'فَتَكُونَ دَلِيلًا عَلَى صِدْقِ هَذَا الدِّينِ،',
          en: 'so that it would be proof of the truthfulness of this religion,',
          tokens: [
            { surface: 'فَتَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to be; so that it would be' },
            { surface: 'دَلِيلًا', lemma: 'دَلِيل', pos: 'noun', features: 'indef.acc', gloss: 'evidence, proof' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'صِدْقِ', lemma: 'صِدْق', pos: 'noun', features: 'constr.gen', gloss: 'the truthfulness of' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الدِّينِ', lemma: 'دِين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
          ],
        },
        {
          id: 'qs-v12-c21-008',
          ar: 'وَمَنْزِلَةِ الْمُؤْمِنِينَ الْأَوَّلِينَ وَالْحَوَارِيِّينَ الصَّادِقِينَ.',
          en: 'and of the rank of the first believers and the truthful disciples.',
          tokens: [
            { surface: 'وَمَنْزِلَةِ', lemma: 'مَنْزِلَة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the rank of' },
            { surface: 'الْمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'def.gen.pl', gloss: 'the believers' },
            { surface: 'الْأَوَّلِينَ', lemma: 'أَوَّل', pos: 'adj', features: 'def.gen.pl', gloss: 'the first, early' },
            { surface: 'وَالْحَوَارِيِّينَ', lemma: 'حَوَارِيّ', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the disciples' },
            { surface: 'الصَّادِقِينَ', lemma: 'صَادِق', pos: 'adj', features: 'def.gen.pl', gloss: 'truthful, sincere' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا تَشَبَّثَ الْحَوَارِيُّونَ بِسُؤَالِهِمْ؟',
          options: ['لِأَنَّهُمْ كَانُوا جَادِّينَ وَيُرِيدُونَ اطْمِئْنَانًا لَا امْتِحَانًا', 'لِأَنَّهُمْ كَانُوا يَشُكُّونَ فِي عِيسَى', 'لِأَنَّهُمْ كَانُوا جَائِعِينَ فَقَطْ'],
          answer: 0,
          qEn: 'Why did the disciples persist with their question?',
          optionsEn: ['Because they were in earnest and wanted reassurance, not a test', 'Because they doubted Isa', 'Because they were simply hungry'],
        },
        {
          q: 'مَا الَّذِي أَرَادَ الْحَوَارِيُّونَ أَنْ تَكُونَ هَذِهِ الْقِصَّةُ لِلْأَجْيَالِ الْقَادِمَةِ؟',
          options: ['ذِكْرَى وَدَلِيلًا عَلَى صِدْقِ الدِّينِ', 'قِصَّةً لِلتَّسْلِيَةِ فَقَطْ', 'سِرًّا لَا يُرْوَى'],
          answer: 0,
          qEn: 'What did the disciples want this story to be for later generations?',
          optionsEn: ['A remembrance and proof of the truth of the religion', 'Just an entertaining tale', 'A secret never to be told'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ الْحَوَارِيِّينَ',
        post: 'بِسُؤَالِهِمْ.',
        en: 'But the disciples clung to their question.',
        options: ['تَشَبَّثُوا', 'يَتَشَبَّثُونَ', 'تَشَبَّثَتْ', 'تَشَبَّثْتُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- a completed action, agreeing with الْحَوَارِيِّينَ.',
          'Imperfect -- wrong tense; the sentence narrates a completed act.',
          '3rd feminine singular -- wrong number/gender for the plural الْحَوَارِيِّينَ.',
          '1st singular -- wrong person entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَا يَقْصِدُونَ امْتِحَانًا',
        post: 'يُرِيدُونَ اطْمِئْنَانًا.',
        en: 'They do not intend a test, but rather they want reassurance.',
        options: ['إِنَّمَا', 'لَكِنَّ', 'فَإِنَّ', 'أَمَّا'],
        answer: 0,
        rationales: [
          'The restrictive particle "rather, only" -- matches the printed contrast between the two clauses.',
          'Takes an accusative noun after it (sister of إِنَّ) -- wrong construction; this position needs a plain adverbial particle.',
          '"then indeed" -- wrong sense; nothing here is a conditional response.',
          '"as for" -- wrong sense; nothing is being singled out as a topic.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقِصَّةً',
        post: 'وَتُرْوَى عَلَى مَرِّ الْأَيَّامِ.',
        en: 'and a story that is told and retold across the ages.',
        options: ['تُحْكَى', 'يُحْكَى', 'حَكَى', 'حَاكٍ'],
        answer: 0,
        rationales: [
          'Passive imperfect, 3rd feminine singular -- agrees with the feminine قِصَّة it describes.',
          '3rd masculine -- wrong gender; قِصَّة is feminine.',
          'Active perfect -- wrong voice and tense; the story is the one being told, not the teller.',
          'Active participle ("one who narrates") -- wrong voice; a story does not narrate, it is narrated.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقْصِدُونَ امْتِحَانًا',
        pre: '',
        post: 'امْتِحَانًا',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَقْصِدُ', 'يَقْصِدُونَ', 'تَقْصِدُ', 'نَقْصِدُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '3rd masculine plural -- the base form, not shifted to "he."',
          '2nd masculine singular / 3rd feminine singular -- wrong person.',
          '1st plural -- wrong person.',
        ],
      },
      {
        type: 'shift',
        base: 'يَقْصِدُونَ امْتِحَانًا',
        pre: '',
        post: 'امْتِحَانًا',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقْصِدُ', 'يَقْصِدُ', 'تَقْصِدُ', 'نَقْصِدُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, not "I."',
          '2nd masculine singular -- you, not "I."',
          '1st plural -- we, not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَقْصِدُونَ امْتِحَانًا',
        pre: '',
        post: 'امْتِحَانًا',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَقْصِدُ', 'يَقْصِدُ', 'أَقْصِدُ', 'نَقْصِدُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, not "she."',
          '1st singular -- I, not "she."',
          '1st plural -- we, not "she."',
        ],
      },
    ],
  },
};

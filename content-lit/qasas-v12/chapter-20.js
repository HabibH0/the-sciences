// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 20 -- تَحْذِيرُ قَوْمِهِ مِنْ سُوءِ الْعَاقِبَةِ.
// Printed page 263 only -- the whole chapter sits between ch19's closing
// line and the very top of page 264, which (re-checked carefully against
// the scan) begins directly with ch21's heading إِلْحَاحٌ وَإِضْرَارٌ and no
// further prose before it. Transcribed by hand from the scan (vision OCR,
// 150dpi render) against ../CHAPTER-FORMAT.md.
//
// A short bridging paragraph: Isa, having disliked the disciples' impolite
// demand (ch19), now fears for them and warns them against a "bad end",
// forbidding them from testing Allah outright -- Allah being far too
// exalted for that. This sets up ch21 (another agent's), where the
// disciples nonetheless persist.
//
// *** FLAG FOR A SECOND LOOK ***: this chapter's entire printed content is
// only 4 clauses / ~19 Arabic words (لِذَلِكَ خَافَ سَيِّدُنَا عِيسَى عَلَيْهِمْ،
// وَحَذَّرَهُمْ مِنْ سُوءِ الْعَاقِبَةِ، وَنَهَاهُمْ عَنِ امْتِحَانِ اللَّهِ تَعَالَى، فَهُوَ
// أَعْلَى وَأَجَلُّ مِنْ ذَلِكَ .) -- confirmed complete by re-reading the scan
// twice, including a check that nothing from ch20 spills onto p.264 (it
// begins directly with ch21's heading box). All 4 natural clause-sentences
// below ARE buildable (each contains one non-proper case-marked word:
// سَيِّدُنَا / سُوءِ+الْعَاقِبَةِ / امْتِحَانِ / أَجَلُّ), but that is only 4, one
// short of CHAPTER-FORMAT.md's "at least five buildable sentences" rule.
// I checked whether further splitting could add a 5th: the two qualifying
// words in sentence 002 (سُوءِ, الْعَاقِبَةِ) are adjacent within a single
// 4-token mudaf/mudaf-ilayh clause that cannot be split into two ≥3-token
// pieces without either falling under 3 tokens or severing a construct
// phrase mid-idafa (which would misrepresent the printed text). I chose
// not to fabricate additional Arabic to pad the count, since the task
// brief is explicit that fidelity to the printed page is paramount. This
// chapter should either be reviewed for an exception, or reconsidered
// together with an adjacent chapter at the book-assembly stage.
//
// Grammar / lexical notes:
//   -- تَعَالَى (already known -- introduced by me in this volume's own
//      ch16) is reused here as the fixed epithet "the Exalted"; NOT
//      re-listed in newWords.
//   -- أَعْلَى and اِمْتِحَان are already known (known-lemmas.txt); NOT
//      re-listed. خَافَ is likewise already known.
//   -- أَجَلّ (new, elative "greater, more majestic") is a diptote:
//      its nominative here is the bare damma with no tanween (أَجَلُّ),
//      which I count as a "visible case mark" for buildability purposes
//      even though there is no tanween, since the vowel itself is written.
//   -- Shared lexicon check (known-lemmas.txt): لِ، ذَلِكَ، سَيِّد، عِيسَى
//      (this volume's own ch16, mine)، مِنْ، اللَّه، تَعَالَى (this volume's
//      own ch16, mine)، أَعْلَى، خَافَ، اِمْتِحَان
//      are all already taught and are NOT re-listed in newWords here.
//
// 5 new words (حَذَّرَ، سُوء، عَاقِبَة، نَهَى، أَجَلّ).
//
// No page footnotes (book_note) on this page for this chapter.
export const CHAPTER = {
  id: 'ch20',
  title: { ar: 'تَحْذِيرُ قَوْمِهِ مِنْ سُوءِ الْعَاقِبَةِ', en: 'Warning His People of a Bad End' },
  newWords: [
    'حَذَّرَ', 'سُوء', 'عَاقِبَة', 'نَهَى', 'أَجَلّ',
  ],
  lemmas: {
    حَذَّرَ: { gloss: 'to warn' },
    سُوء: { gloss: 'evil, bad (state); harm' },
    عَاقِبَة: { gloss: 'consequence, outcome, end' },
    نَهَى: { gloss: 'to forbid' },
    أَجَلّ: { gloss: 'greater, more majestic' },
  },
  paragraphs: [
    {
      en: 'For that reason our master Isa feared for them and warned them against a bad end, forbidding them from testing Allah the Exalted -- for He is far too high and too great for that.',
      sentences: [
        {
          id: 'qs-v12-c20-001',
          ar: 'لِذَلِكَ خَافَ سَيِّدُنَا عِيسَى عَلَيْهِمْ،',
          en: 'For that reason, our master Isa feared for them,',
          tokens: [
            { surface: 'لِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem.m', gloss: 'for that, therefore' },
            { surface: 'خَافَ', lemma: 'خَافَ', pos: 'verb', features: 'perf.3ms', gloss: 'to fear; feared' },
            { surface: 'سَيِّدُنَا', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa (Jesus)' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for them, over them' },
          ],
        },
        {
          id: 'qs-v12-c20-002',
          ar: 'وَحَذَّرَهُمْ مِنْ سُوءِ الْعَاقِبَةِ،',
          en: 'and warned them against a bad end,',
          tokens: [
            { surface: 'وَحَذَّرَهُمْ', lemma: 'حَذَّرَ', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ح ذ ر', gloss: 'to warn; and he warned them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'سُوءِ', lemma: 'سُوء', pos: 'noun', features: 'gen.constr', root: 'س و أ', gloss: 'the evil of, badness of' },
            { surface: 'الْعَاقِبَةِ', lemma: 'عَاقِبَة', pos: 'noun', features: 'def.gen', root: 'ع ق ب', gloss: 'the outcome, end' },
          ],
        },
        {
          id: 'qs-v12-c20-003',
          ar: 'وَنَهَاهُمْ عَنِ امْتِحَانِ اللَّهِ تَعَالَى،',
          en: 'and forbade them from testing Allah the Exalted,',
          tokens: [
            { surface: 'وَنَهَاهُمْ', lemma: 'نَهَى', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ن ه ي', gloss: 'to forbid; and he forbade them' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'امْتِحَانِ', lemma: 'اِمْتِحَان', pos: 'noun', features: 'gen.constr', gloss: 'the testing of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'adj', gloss: 'the Exalted, Most High' },
          ],
        },
        {
          id: 'qs-v12-c20-004',
          ar: 'فَهُوَ أَعْلَى وَأَجَلُّ مِنْ ذَلِكَ.',
          en: 'for He is too high and too great for that.',
          tokens: [
            { surface: 'فَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'for He' },
            { surface: 'أَعْلَى', lemma: 'أَعْلَى', pos: 'adj', features: 'nom', gloss: 'higher, too high' },
            { surface: 'وَأَجَلُّ', lemma: 'أَجَلّ', pos: 'adj', features: 'conj+nom', root: 'ج ل ل', gloss: 'and greater, more majestic' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّ حَذَّرَ عِيسَى الْحَوَارِيِّينَ؟',
          options: ['مِنْ سُوءِ الْعَاقِبَةِ وَامْتِحَانِ اللَّهِ تَعَالَى', 'مِنَ الْجُوعِ وَالْفَقْرِ', 'مِنَ الْأَعْدَاءِ وَالْحَرْبِ'],
          answer: 0,
          qEn: 'What did Isa warn the disciples against?',
          optionsEn: ['A bad end, and testing Allah the Exalted', 'Hunger and poverty', 'Enemies and war'],
        },
        {
          q: 'لِمَاذَا نَهَاهُمْ عَنِ امْتِحَانِ اللَّهِ؟',
          options: ['لِأَنَّ اللَّهَ أَعْلَى وَأَجَلُّ مِنْ ذَلِكَ', 'لِأَنَّهُ كَانَ يَخَافُ غَضَبَ قَوْمِهِ', 'لِأَنَّ الشَّرِيعَةَ تَمْنَعُ السُّؤَالَ مُطْلَقاً'],
          answer: 0,
          qEn: 'Why did he forbid them from testing Allah?',
          optionsEn: ['Because Allah is far too high and great for that', "Because he feared his people's anger", 'Because the law forbids questions altogether'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'لِذَلِكَ',
        post: 'سَيِّدُنَا عِيسَى عَلَيْهِمْ.',
        en: 'For that reason, our master Isa feared for them.',
        options: ['خَافَ', 'يَخَافُ', 'خِفْ', 'خَائِف'],
        answer: 0,
        rationales: [
          'Perfect 3rd masculine singular -- a completed past action, matching the narration.',
          'Imperfect -- wrong tense for this completed narration.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَنَهَاهُمْ عَنِ امْتِحَانِ اللَّهِ',
        post: '، فَهُوَ أَعْلَى وَأَجَلُّ مِنْ ذَلِكَ.',
        en: 'and forbade them from testing Allah the Exalted, for He is too high and too great for that.',
        options: ['تَعَالَى', 'تَعَالِي', 'مُتَعَالٍ', 'عَالٍ'],
        answer: 0,
        rationales: [
          'The fixed epithet تَعَالَى, "the Exalted" -- matches the taught phrase.',
          'Not an attested form of this word here.',
          'A different word choice, not the one printed.',
          '"High" -- close in sense but not the phrase as printed.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'حَذَّرَ عِيسَى قَوْمَهُ',
        pre: '',
        post: 'قَوْمَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['حَذَّرْتُ', 'حَذَّرَ', 'حَذَّرْتَ', 'حَذَّرُوا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'حَذَّرَ عِيسَى قَوْمَهُ',
        pre: '',
        post: 'قَوْمَهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['حَذَّرُوا', 'حَذَّرَ', 'حَذَّرْتُ', 'حَذَّرْتَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'حَذَّرَ عِيسَى قَوْمَهُ',
        pre: '',
        post: 'قَوْمَهُ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['حَذَّرْتَ', 'حَذَّرَ', 'حَذَّرْتُ', 'حَذَّرُوا'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
    ],
  },
};

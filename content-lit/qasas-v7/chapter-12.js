// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 12 -- ١٢ - الْبَقَرَةُ ("The Cow"). Starts at the heading
// box that appears partway down page 188 (right after ch11's closing
// "...وَادْعُ اللَّهَ يُبَيِّنْ لَنَا الْقَاتِلَ"), continues through pages 189 and 190,
// and ends on page 191 just before the ch13 heading box "١٣ - الشَّرِيعَـةُ"
// (right after "وَهَكَذَا كَانَ . . . ."). Transcribed by hand from the scan
// (vision-read, not OCR software) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md, working from a prior verified transcription pass
// (transcript-187-199.txt).
//
// This chapter is built almost entirely from direct quotation of Sūrat
// al-Baqarah's cow narrative (2:67-71), with only light narrator framing
// between the āyāt. Per the task brief's guidance, every quotation is
// transcribed in full and tokenized normally, without artificial
// fragmentation -- long āyāt are automatically safe from the build stage's
// 3-9 token window, and the handful of short quotations here that fall
// inside that window and carry a case-marked common noun (e.g.
// qs-v7-c12-005, qs-v7-c12-010) are left as ordinary sentences rather than
// engineered around, per instruction. `workshop.cloze`/`workshop.shift`
// are built exclusively from the narrator's own connective prose -- chiefly
// the repeated وَإِمَّا بَقَرَةٌ... enumeration on pages 190-191 (the near-miss
// cows) and the doubled وَفَتَّشُوا وَفَتَّشُوا -- never from a Qur'anic
// quotation.
//
// One correction applied against the supplied transcript: qs-v7-c12-014's
// "فَأَظَلَقُوا السُّؤَالَ" is not a real word (ظ ل ق is not an attested Arabic
// root in this sense); corrected to "فَأَطْلَقُوا السُّؤَالَ" (أَطْلَقَ, "to
// release, throw open [a question/topic]" -- root ط ل ق, a natural,
// idiomatic collocation and a plausible ط/ظ visual mis-scan), flagged here
// rather than silently kept.
//
// One further verbatim-but-suspect spot, NOT corrected: qs-v7-c12-001's
// narrator paraphrase "أَنْ يَذْبَحُوا بَقَرَةٍ" prints بَقَرَةٍ in the genitive,
// where the transitive verb يَذْبَحُوا ("that they slaughter") calls for an
// accusative direct object (compare the Qur'anic quotation two lines later,
// qs-v7-c12-004, which correctly has the accusative "تَذْبَحُوا۟ بَقَرَةً"). This
// looks like a printing slip in the original rather than a transcription
// artifact of this pass; transcribed and tagged exactly as printed
// (indef.gen) and flagged here for a second pair of eyes.
//
// Grammar / lexical notes:
//   -- فَارِض ("old, aged" of a cow), بِكْر ("young, unbred"), عَوَان
//      ("middle-aged, in between") are the three Qurʾānic technical terms
//      for cattle age at 2:68 -- all new, each its own lemma.
//   -- لَوْن ("color") and أَصْفَر/صَفْرَاء ("yellow") turned out to already be
//      taught (qirāʾah-v1 ch28/qirāʾah-v2 ch52, and qirāʾah-v2 ch33
//      respectively) once checked against the shared lexicon on a
//      diacritic-stripped basis -- see the cross-check note below. Only
//      فَاقِع ("bright, vivid [of color]") is new alongside them.
//   -- ذَلُول ("docile, broken in [for plowing]") and أَثَارَ ("to stir up,
//      plow") are both new, from 2:71's description of the cow NOT being
//      ذَلُول.
//   -- شِيَة ("blemish, marking") is new, from the same āyah's "لَا شِيَةَ
//      فِيهَا".
//   -- الَّتِي (feminine relative "which/who") is tagged as its own new
//      lemma, distinct from the already-taught masculine الَّذِي, by the
//      same logic this corpus already applies to gendered demonstrative
//      pairs (هَذَا/هَذِهِ, kept as separate lemmas per qasas-v7 ch1's own
//      header) -- a judgment call, flagged for a second pair of eyes, since
//      no earlier chapter in this corpus was found explicitly addressing
//      التي one way or the other.
//   -- إِمَّا ("either... or", the repeated وَإِمَّا enumeration on pp. 190-191)
//      is new and kept distinct from the superficially similar already-known
//      أَمَّا ("as for") / أَمَا (interrogative "is it not") -- different
//      particles, not a derivational family.
//   -- الْبَقَرَ (qs-v7-c12-015, unmarked by ة, "cattle" as a kind/collective)
//      is tagged under the same lemma بَقَرَة as the already-known singulative
//      "a cow", per this corpus's convention of citing a singulative/
//      collective pair under one dictionary entry (no separate 'collective'
//      feature atom exists in the schema, so the plain def.acc segment is
//      used without a plural atom).
//   -- مُسَلَّمَة ("sound, unblemished", 2:71) and الْمُسَلَّمَةِ (qs-v7-c12-023c)
//      reuse the already-taught verb lemma سَلَّمَ as their participle,
//      per-token gloss overridden to the contextual sense ("sound,
//      unblemished") rather than "to hand over".
//   -- حَيِيَ ("to live, come back to life", qs-v7-c12-041b) turned out to
//      already be taught (qirāʾah-v2 ch64) and is deliberately distinct
//      from the unrelated already-known عَاشَ ("to live, dwell", qasas-v3
//      ch1) -- the miracle here is specifically "coming back to life", not
//      "dwelling".
//
// A shared-lexicon cross-check (§6 of the task brief) done purely by
// vocalized-string matching against lexicon.txt initially produced several
// FALSE "new" calls, because lexicon.txt mixes fully-vocalized qasas-course
// entries with bare, unvocalized qirāʾah-course entries. Re-running the
// check on a diacritic-stripped basis caught this and reversed several
// calls -- حَلَّ، اِتَّخَذَ، لَوْن، أَصْفَر، وُجُود، تَعِبَ، يَتِيم، جُزْء، حَيِيَ، هَكَذَا all
// turned out to already be taught in qirāʾah-v1/v2, NOT re-listed in
// newWords here (a genuinely useful catch: the task brief's own vocabulary
// hints flagged صَفْرَاء/لَوْن/يَتِيم as "likely new", but the shared-lexicon
// check shows they are already covered).
//
// عِنْدَ ("at, with") and جِدّاً ("very") are treated as bedrock and not
// re-taught, following the precedent qasas-v7 ch1's own header sets for
// similarly ultra-common function words (هَذَا، جَاءَ، ذَلِكَ) that are used
// unflagged from the corpus's earliest chapters without ever appearing in
// a lexicon export or a chapter's own newWords -- جِدّاً specifically
// appears unflagged in the task brief's own reference chapter
// (qasas-v3/ch4, "وَفَرِحَ الإِخْوَةُ جِدًّا").
//
// A second cross-check, run once chapters 1-10 of this same volume had
// landed on disk (written in parallel by other agents), caught two more
// words that were independently already introduced earlier in volume 7
// itself and so are NOT re-listed in newWords here even though nothing in
// the qasas/qirāʾah shared lexicon export flags them: بَلْ (qasas-v7 ch5),
// غَرِيب (qasas-v7 ch8, also ch10). This dropped the new-word count from an
// initial 22 to 20.
//
// Shared lexicon check (qasas-v1/2/3, qiraah-v1/2, plus qasas-v7 ch1/2/11's
// own newWords, which count as already taught within this volume):
// دَعَا (qasas-v1 ch8)، مُوسَى (qasas-v7 ch1)، رَبّ (qasas-v1 ch7)، أَوْحَى
// (qasas-v3 ch11)، إِلَى، أَنْ، أَمَرَ (qasas-v1 ch8)، ذَبَحَ (qasas-v1 ch14)،
// بَقَرَة (qasas-v2 ch13)، هُنَالِكَ (qiraah-v2 ch40)، حَلَّ (qiraah-v2 ch44)،
// مُصِيبَة (qasas-v2 ch21)، بَدَأَ (qasas-v2 ch10)، اِبْن (qasas-v1 ch14)،
// إِسْرَائِيل (qasas-v7, earlier chapter)، سَأَلَ (qiraah-v2 ch38)، سَخِرَ
// (qasas-v3 ch18)، إِذْ (qasas-v1 ch9)، قَالَ، لِ، إِنَّ (qasas-v1 ch2)، اللَّه،
// قَوْم (qasas-v1 ch3/8)، اِتَّخَذَ (qiraah-v2 ch36)، هُزْء (qasas-v7 ch11)،
// عَاذَ (qasas-v3 ch21)، بِ، كَانَ، مِنَ، جَاهِل (qasas-v2 ch22)، هُنَا (qasas-v1
// ch11)، أَرْسَلَ (qasas-v1 ch14)، سُؤَال (qasas-v7 ch11)، مَا، هِيَ (bedrock,
// qasas-v7 ch2)، بَيَّنَ (qasas-v7 ch11)، فَعَلَ (qasas-v7 ch1)، بَيْنَ (qasas-v3
// ch20)، ذَلِكَ (bedrock)، لَمْ، وَقَفَ (qasas-v2 ch11)، عَلَى، عَنْ (bedrock)،
// لَوْن (qiraah-v1 ch28/qiraah-v2 ch52)، سَرَّ (qasas-v2 ch21)، نَظَرَ (qasas-v1
// ch14)، وَجَدَ (qasas-v1 ch9)، تَشَابَهَ->new (see newWords)، شَاءَ (qasas-v1
// ch14)، اِهْتَدَى (qiraah-v2 ch35)، أَرْض (qasas-v1 ch13)، سَقَى (qasas-v1
// ch9)، حَرْث (qasas-v3 ch8)، سَلَّمَ (qasas-v1 ch14)، مَرَّة (qasas-v1 ch13)،
// لَأَنَّ->أَنَّ (qasas-v1 ch2)، لَكِنَّ (qasas-v1 ch6/14)، ضَيَّقَ (qasas-v3 ch8)،
// أَمْر (qasas-v2 ch2)، أَيّ (qiraah-v2 ch38)، أَصْفَر (qiraah-v2 ch33)، عَاقِبَة
// (qasas-v7 ch1)، تَنْقِير (qasas-v7 ch11)، عَلِمَ (qasas-v1 ch5)، تَعِبَ
// (qiraah-v2 ch34)، أَرَادَ (qasas-v1 ch5)، يَتِيم (qiraah-v1 ch24)، خَيْر
// (qasas-v2 ch9)، اِشْتَرَى (qasas-v2 ch7)، ثَمَن (qasas-v2 ch19)، جِدّاً
// (bedrock)، كَادَ->new (see newWords)، ضَرَبَ (qasas-v1 ch4/11)، جُزْء
// (qiraah-v2 ch64)، حَيِيَ (qiraah-v2 ch64)، أَخْبَرَ (qasas-v2 ch1)، اِسْم
// (qasas-v2 ch11)، قَاتِل (qiraah-v2 ch38)، هَكَذَا (qiraah-v1/2)، عِنْدَ
// (bedrock)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 20 new words (فَارِض، بِكْر، عَوَان، فَاقِع، أَطْلَقَ، تَشَابَهَ، ذَلُول، أَثَارَ، شِيَة،
// وَفَّقَ، كَافٍ، شَدَّدَ، فَتَّشَ، الَّتِي، نَدَرَ، إِمَّا، وَصَفَ، غَالٍ، كَادَ، مَقْتُول).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch12',
  title: { ar: 'الْبَقَرَةُ', en: 'The Cow' },
  newWords: [
    'فَارِض', 'بِكْر', 'عَوَان', 'فَاقِع', 'أَطْلَقَ', 'تَشَابَهَ', 'ذَلُول',
    'أَثَارَ', 'شِيَة', 'وَفَّقَ', 'كَافٍ', 'شَدَّدَ', 'فَتَّشَ', 'الَّتِي', 'نَدَرَ',
    'إِمَّا', 'وَصَفَ', 'غَالٍ', 'كَادَ', 'مَقْتُول',
  ],
  lemmas: {
    'فَارِض': { gloss: 'old, aged (of a cow)' },
    'بِكْر': { gloss: 'young, unbred (of a cow)' },
    'عَوَان': { gloss: 'middle-aged, in between' },
    'بَلْ': { gloss: 'rather, but' },
    'فَاقِع': { gloss: 'bright, vivid (of color)' },
    'أَطْلَقَ': { gloss: 'to release, let loose, throw open (a topic)' },
    'تَشَابَهَ': { gloss: 'to resemble each other, be alike' },
    'ذَلُول': { gloss: 'docile, broken in, trained' },
    'أَثَارَ': { gloss: 'to stir up, plow' },
    'شِيَة': { gloss: 'blemish, marking' },
    'وَفَّقَ': { gloss: 'to grant success' },
    'كَافٍ': { gloss: 'sufficient, enough' },
    'شَدَّدَ': { gloss: 'to be strict, make difficult' },
    'فَتَّشَ': { gloss: 'to search, look for' },
    'الَّتِي': { gloss: 'which, who (feminine relative pronoun)' },
    'نَدَرَ': { gloss: 'to be rare' },
    'غَرِيب': { gloss: 'strange, rare' },
    'إِمَّا': { gloss: 'either... or' },
    'وَصَفَ': { gloss: 'to describe' },
    'غَالٍ': { gloss: 'expensive' },
    'كَادَ': { gloss: 'to nearly do, be about to' },
    'مَقْتُول': { gloss: 'the slain, the murder victim' },
  },
  paragraphs: [
    {
      en: 'Mūsā called upon his Lord, and He revealed to him that he should command them to slaughter a cow. There the calamity began, and the Children of Israel started to question and mock.',
      sentences: [
        {
          id: 'qs-v7-c12-001',
          ar: 'وَدَعَا مُوسَى رَبَّهُ فَأَوْحَى إِلَيْهِ أَنْ يَأْمُرَهُمْ أَنْ يَذْبَحُوا بَقَرَةٍ.',
          en: 'Mūsā called upon his Lord, and He revealed to him that he should command them to slaughter a cow.',
          tokens: [
            { surface: 'وَدَعَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call upon, pray to; and called upon' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'رَبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', gloss: 'his Lord' },
            { surface: 'فَأَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to reveal; so revealed' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَأْمُرَهُمْ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to command; he command them' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَذْبَحُوا', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.3mp', gloss: 'to slaughter; they slaughter' },
            { surface: 'بَقَرَةٍ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.gen', gloss: 'a cow (genitive as printed; see header note)' },
          ],
        },
        {
          id: 'qs-v7-c12-002',
          ar: 'هُنَالِكَ حَلَّتِ الْمُصِيبَةُ،',
          en: 'There the calamity began,',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there, at that point' },
            { surface: 'حَلَّتِ', lemma: 'حَلَّ', pos: 'verb', features: 'perf.3fs', gloss: 'to befall, alight; befell' },
            { surface: 'الْمُصِيبَةُ', lemma: 'مُصِيبَة', pos: 'noun', features: 'def.nom', gloss: 'the calamity' },
          ],
        },
        {
          id: 'qs-v7-c12-003',
          ar: 'وَبَدَأَ بَنُو إِسْرَائِيلَ يَسْأَلُونَ وَيَسْخَرُونَ.',
          en: 'and the Children of Israel began to question and mock.',
          tokens: [
            { surface: 'وَبَدَأَ', lemma: 'بَدَأَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to begin; and began' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', gloss: 'the sons/children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'يَسْأَلُونَ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to ask; asking' },
            { surface: 'وَيَسْخَرُونَ', lemma: 'سَخِرَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to mock; and mocking' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَمَرَ اللَّهُ مُوسَى أَنْ يَأْمُرَ بَنِي إِسْرَائِيلَ؟',
          options: ['أَنْ يَذْبَحُوا بَقَرَةً', 'أَنْ يَصُومُوا شَهْراً', 'أَنْ يَبْنُوا مَسْجِداً'],
          answer: 0,
          qEn: 'What did Allah command Mūsā to order the Children of Israel to do?',
          optionsEn: ['To slaughter a cow', 'To fast for a month', 'To build a mosque'],
        },
      ],
    },
    {
      lines: true,
      en: '[Qurʾān, al-Baqarah 2:67: "And [recall] when Mūsā said to his people, \'Indeed, Allah commands you to slaughter a cow.\' They said, \'Do you take us in mockery?\' He said, \'I seek refuge in Allah from being among the ignorant.\'"]',
      sentences: [
        {
          // Al-Baqarah 2:67a.
          id: 'qs-v7-c12-004',
          ar: '﴿وَإِذْ قَالَ مُوسَىٰ لِقَوْمِهِۦٓ إِنَّ ٱللَّهَ يَأْمُرُكُمْ أَن تَذْبَحُوا۟ بَقَرَةً﴾.',
          en: '"And [recall] when Mūsā said to his people, \'Indeed, Allah commands you to slaughter a cow.\'"',
          tokens: [
            { surface: 'وَإِذْ', lemma: 'إِذْ', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'said' },
            { surface: 'مُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'لِقَوْمِهِۦٓ', lemma: 'قَوْم', pos: 'noun', features: 'prep+gen+3ms', gloss: 'to his people' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ٱللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يَأْمُرُكُمْ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.3ms+2mp', gloss: 'to command; commands you' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'تَذْبَحُوا۟', lemma: 'ذَبَحَ', pos: 'verb', features: 'impf.2mp', gloss: 'you slaughter' },
            { surface: 'بَقَرَةً', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.acc', gloss: 'a cow' },
          ],
        },
        {
          // Al-Baqarah 2:67b.
          id: 'qs-v7-c12-005',
          ar: '﴿قَالُوٓا۟ أَتَتَّخِذُنَا هُزُوًا﴾.',
          en: '"They said, \'Do you take us in mockery?\'"',
          tokens: [
            { surface: 'قَالُوٓا۟', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'they said' },
            { surface: 'أَتَتَّخِذُنَا', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'part+impf.2ms+1p', gloss: 'to take; do you take us' },
            { surface: 'هُزُوًا', lemma: 'هُزْء', pos: 'noun', features: 'indef.acc', gloss: 'in mockery' },
          ],
        },
        {
          // Al-Baqarah 2:67c.
          id: 'qs-v7-c12-006',
          ar: '﴿قَالَ أَعُوذُ بِٱللَّهِ أَنْ أَكُونَ مِنَ ٱلْجَـٰهِلِينَ﴾.',
          en: '"He said, \'I seek refuge in Allah from being among the ignorant.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'he said' },
            { surface: 'أَعُوذُ', lemma: 'عَاذَ', pos: 'verb', features: 'impf.1s', gloss: 'to seek refuge; I seek refuge' },
            { surface: 'بِٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'from' },
            { surface: 'أَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.1s', gloss: 'to be; I be' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'ٱلْجَـٰهِلِينَ', lemma: 'جَاهِل', pos: 'noun', features: 'pl.def.gen', gloss: 'the ignorant' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ رَدَّ قَوْمُ مُوسَى عَلَى أَمْرِ اللَّهِ بِذَبْحِ الْبَقَرَةِ؟',
          options: ['قَالُوا أَتَتَّخِذُنَا هُزُواً', 'أَطَاعُوا فَوْراً بِلا سُؤَالٍ', 'رَفَضُوا الأَمْرَ عَلَناً'],
          answer: 0,
          qEn: "How did Mūsā's people respond to Allah's command to slaughter the cow?",
          optionsEn: ['They said, "Do you take us in mockery?"', 'They obeyed at once without question', 'They openly refused the command'],
        },
      ],
    },
    {
      lines: true,
      en: 'And here they sent forth their questions. [Qurʾān, al-Baqarah 2:68: "They said, \'Call upon your Lord for us to make clear to us what it is.\' He said, \'He says: it is a cow neither old nor young, middling between that; so do what you are commanded.\'"] But they did not stop at this question -- rather they began to ask about its color.',
      sentences: [
        {
          id: 'qs-v7-c12-007',
          ar: 'وَهُنَا أَرْسَلُوا الْأَسْئِلَةَ.',
          en: 'And here they sent forth their questions.',
          tokens: [
            { surface: 'وَهُنَا', lemma: 'هُنَا', pos: 'adv', features: 'conj+adv', gloss: 'and here' },
            { surface: 'أَرْسَلُوا', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3mp', gloss: 'to send; they sent' },
            { surface: 'الْأَسْئِلَةَ', lemma: 'سُؤَال', pos: 'noun', features: 'pl.def.acc', gloss: 'the questions' },
          ],
        },
        {
          // Al-Baqarah 2:68a.
          id: 'qs-v7-c12-008',
          ar: '﴿قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ﴾؟',
          en: '"They said, \'Call upon your Lord for us to make clear to us what it is.\'"',
          tokens: [
            { surface: 'قَالُوا۟', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'they said' },
            { surface: 'ٱدْعُ', lemma: 'دَعَا', pos: 'verb', features: 'imp.2ms', gloss: 'to call upon; Call!' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'رَبَّكَ', lemma: 'رَبّ', pos: 'noun', features: 'acc+2ms', gloss: 'your Lord' },
            { surface: 'يُبَيِّن', lemma: 'بَيَّنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to make clear; may he clarify' },
            { surface: 'لَّنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'هِىَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'it (f.)' },
          ],
        },
        {
          // Al-Baqarah 2:68b.
          id: 'qs-v7-c12-009',
          ar: '﴿قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا فَارِضٌ وَلَا بِكْرٌ عَوَانٌۢ بَيْنَ ذَٰلِكَ فَٱفْعَلُوا۟ مَا تُؤْمَرُونَ﴾.',
          en: '"He said, \'He says: it is a cow neither old nor young, middling between that; so do what you are commanded.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'he said' },
            { surface: 'إِنَّهُۥ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'he says' },
            { surface: 'إِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'part+3fs', gloss: 'indeed it' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'لَّا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'فَارِضٌ', lemma: 'فَارِض', pos: 'adj', features: 'indef.nom', gloss: 'old' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'بِكْرٌ', lemma: 'بِكْر', pos: 'noun', features: 'indef.nom', gloss: 'young, unbred' },
            { surface: 'عَوَانٌۢ', lemma: 'عَوَان', pos: 'noun', features: 'indef.nom', gloss: 'middle-aged' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'ذَٰلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'فَٱفْعَلُوا۟', lemma: 'فَعَلَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to do; so do!' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تُؤْمَرُونَ', lemma: 'أَمَرَ', pos: 'verb', features: 'pass+impf.2mp', gloss: 'you are commanded' },
          ],
        },
        {
          id: 'qs-v7-c12-010',
          ar: 'وَلَمْ يَقِفُوا على هذَا السُّؤَالِ،',
          en: 'But they did not stop at this question,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَقِفُوا', lemma: 'وَقَفَ', pos: 'verb', features: 'impf.3mp', gloss: 'to stop, halt' },
            { surface: 'على', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'السُّؤَالِ', lemma: 'سُؤَال', pos: 'noun', features: 'def.gen', gloss: 'the question' },
          ],
        },
        {
          id: 'qs-v7-c12-011',
          ar: 'بَلْ بَدَأُوا يَسْأَلُونَ عَنْ لَوْنِهَا.',
          en: 'rather they began to ask about its color.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'بَدَأُوا', lemma: 'بَدَأَ', pos: 'verb', features: 'perf.3mp', gloss: 'they began' },
            { surface: 'يَسْأَلُونَ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'asking' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'لَوْنِهَا', lemma: 'لَوْن', pos: 'noun', features: 'gen+3fs', gloss: 'its color' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ اللَّهُ الْبَقَرَةَ فِي الْجَوَابِ الأَوَّلِ؟',
          options: ['بَقَرَةٌ لا فَارِضٌ وَلا بِكْرٌ عَوَانٌ بَيْنَ ذَلِكَ', 'بَقَرَةٌ صَغِيرَةٌ جِدّاً', 'بَقَرَةٌ سَوْدَاءُ اللَّوْنِ'],
          answer: 0,
          qEn: "How did Allah describe the cow in His first answer?",
          optionsEn: ['A cow neither old nor young, middling between that', 'A very small cow', 'A black-colored cow'],
        },
      ],
    },
    {
      lines: true,
      en: '[Qurʾān, al-Baqarah 2:69: "They said, \'Call upon your Lord for us to make clear to us what its color is.\' He said, \'He says: it is a bright yellow cow, pleasing to those who look at it.\'"] They found no [further] question, so they threw the question wide open.',
      sentences: [
        {
          // Al-Baqarah 2:69a.
          id: 'qs-v7-c12-012',
          ar: '﴿قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا لَوْنُهَا﴾.',
          en: '"They said, \'Call upon your Lord for us to make clear to us what its color is.\'"',
          tokens: [
            { surface: 'قَالُوا۟', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'they said' },
            { surface: 'ٱدْعُ', lemma: 'دَعَا', pos: 'verb', features: 'imp.2ms', gloss: 'Call!' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'رَبَّكَ', lemma: 'رَبّ', pos: 'noun', features: 'acc+2ms', gloss: 'your Lord' },
            { surface: 'يُبَيِّن', lemma: 'بَيَّنَ', pos: 'verb', features: 'impf.3ms', gloss: 'may he clarify' },
            { surface: 'لَّنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَوْنُهَا', lemma: 'لَوْن', pos: 'noun', features: 'nom+3fs', gloss: 'its color' },
          ],
        },
        {
          // Al-Baqarah 2:69b.
          id: 'qs-v7-c12-013',
          ar: '﴿قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ صَفْرَاءُ فَاقِعٌ لَّوْنُهَا تَسُرُّ ٱلنَّـٰظِرِينَ﴾.',
          en: '"He said, \'He says: it is a bright yellow cow, pleasing to those who look at it.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'he said' },
            { surface: 'إِنَّهُۥ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'he says' },
            { surface: 'إِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'part+3fs', gloss: 'indeed it' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'صَفْرَاءُ', lemma: 'أَصْفَر', pos: 'adj', features: 'indef.nom.f', gloss: 'yellow' },
            { surface: 'فَاقِعٌ', lemma: 'فَاقِع', pos: 'adj', features: 'indef.nom', gloss: 'bright, vivid' },
            { surface: 'لَّوْنُهَا', lemma: 'لَوْن', pos: 'noun', features: 'nom+3fs', gloss: 'its color' },
            { surface: 'تَسُرُّ', lemma: 'سَرَّ', pos: 'verb', features: 'impf.3fs', gloss: 'to please, gladden; pleasing' },
            { surface: 'ٱلنَّـٰظِرِينَ', lemma: 'نَظَرَ', pos: 'noun', features: 'pl.def.acc', gloss: 'those who look, the beholders' },
          ],
        },
        {
          id: 'qs-v7-c12-014',
          ar: 'وَلَمْ يَجِدُوا سُؤَالاً فَأَطْلَقُوا السُّؤَالَ.',
          en: 'They found no [further] question, so they threw the question wide open.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُوا', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'they found' },
            { surface: 'سُؤَالاً', lemma: 'سُؤَال', pos: 'noun', features: 'indef.acc', gloss: 'a question' },
            { surface: 'فَأَطْلَقُوا', lemma: 'أَطْلَقَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ط ل ق', gloss: 'to release, throw open; so they threw open (corrected from فَأَظَلَقُوا; see header note)' },
            { surface: 'السُّؤَالَ', lemma: 'سُؤَال', pos: 'noun', features: 'def.acc', gloss: 'the question' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا لَوْنُ الْبَقَرَةِ كَمَا وَصَفَهُ اللَّهُ؟',
          options: ['صَفْرَاءُ فَاقِعٌ لَوْنُهَا تَسُرُّ النَّاظِرِينَ', 'بَيْضَاءُ نَاصِعَةٌ', 'حَمْرَاءُ دَاكِنَةٌ'],
          answer: 0,
          qEn: 'What color was the cow, as Allah described it?',
          optionsEn: ['Bright yellow, pleasing to those who look at it', 'Pure white', 'Dark red'],
        },
      ],
    },
    {
      lines: true,
      en: '[Qurʾān, al-Baqarah 2:70: "They said, \'Call upon your Lord for us to make clear to us what it is; indeed the cows are all alike to us, and indeed we, Allah willing, will be guided.\'" 2:71: "He said, \'He says: it is a cow not broken to plow the earth or water the crops, sound and without blemish.\'"] And this time they were granted success, because they said, "and indeed we, Allah willing, will be guided" -- so they were guided.',
      sentences: [
        {
          // Al-Baqarah 2:70.
          id: 'qs-v7-c12-015',
          ar: '﴿قَالُوا۟ ٱدْعُ لَنَا رَبَّكَ يُبَيِّن لَّنَا مَا هِىَ إِنَّ ٱلْبَقَرَ تَشَـٰبَهَ عَلَيْنَا وَإِنَّآ إِن شَآءَ ٱللَّهُ لَمُهْتَدُونَ﴾.',
          en: '"They said, \'Call upon your Lord for us to make clear to us what it is; indeed the cows are all alike to us, and indeed we, Allah willing, will be guided.\'"',
          tokens: [
            { surface: 'قَالُوا۟', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'they said' },
            { surface: 'ٱدْعُ', lemma: 'دَعَا', pos: 'verb', features: 'imp.2ms', gloss: 'Call!' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'رَبَّكَ', lemma: 'رَبّ', pos: 'noun', features: 'acc+2ms', gloss: 'your Lord' },
            { surface: 'يُبَيِّن', lemma: 'بَيَّنَ', pos: 'verb', features: 'impf.3ms', gloss: 'may he clarify' },
            { surface: 'لَّنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'هِىَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'it (f.)' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ٱلْبَقَرَ', lemma: 'بَقَرَة', pos: 'noun', features: 'def.acc', gloss: 'the cows, the cattle' },
            { surface: 'تَشَـٰبَهَ', lemma: 'تَشَابَهَ', pos: 'verb', features: 'perf.3ms', root: 'ش ب ه', gloss: 'to resemble each other; are alike' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'وَإِنَّآ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'شَآءَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'he wills' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَمُهْتَدُونَ', lemma: 'اِهْتَدَى', pos: 'noun', features: 'part+pl.indef.nom', gloss: 'surely guided ones' },
          ],
        },
        {
          // Al-Baqarah 2:71a.
          id: 'qs-v7-c12-016',
          ar: '﴿قَالَ إِنَّهُۥ يَقُولُ إِنَّهَا بَقَرَةٌ لَّا ذَلُولٌ تُثِيرُ ٱلْأَرْضَ وَلَا تَسْقِى ٱلْحَرْثَ مُسَلَّمَةٌ لَّا شِيَةَ فِيهَا﴾.',
          en: '"He said, \'He says: it is a cow not broken to plow the earth or water the crops, sound and without blemish.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'he said' },
            { surface: 'إِنَّهُۥ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'he says' },
            { surface: 'إِنَّهَا', lemma: 'إِنَّ', pos: 'part', features: 'part+3fs', gloss: 'indeed it' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'لَّا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'ذَلُولٌ', lemma: 'ذَلُول', pos: 'adj', features: 'indef.nom', gloss: 'docile, broken in' },
            { surface: 'تُثِيرُ', lemma: 'أَثَارَ', pos: 'verb', features: 'impf.3fs', root: 'ث و ر', gloss: 'to stir up, plow; she plows' },
            { surface: 'ٱلْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the earth' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'تَسْقِى', lemma: 'سَقَى', pos: 'verb', features: 'impf.3fs', gloss: 'she waters' },
            { surface: 'ٱلْحَرْثَ', lemma: 'حَرْث', pos: 'noun', features: 'def.acc', gloss: 'the crops, tillage' },
            { surface: 'مُسَلَّمَةٌ', lemma: 'سَلَّمَ', pos: 'adj', features: 'indef.nom.f', gloss: 'sound, unblemished' },
            { surface: 'لَّا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'شِيَةَ', lemma: 'شِيَة', pos: 'noun', features: 'acc', root: 'و ش ي', gloss: 'blemish' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
          ],
        },
        {
          id: 'qs-v7-c12-017',
          ar: 'وَوُفِّقُوا فِي هذِهِ الْمَرَّةِ لِأَنَّهُمْ قَالُوا',
          en: 'And this time they were granted success, because they said:',
          tokens: [
            { surface: 'وَوُفِّقُوا', lemma: 'وَفَّقَ', pos: 'verb', features: 'conj+pass+perf.3mp', root: 'و ف ق', gloss: 'to grant success; and they were granted success' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْمَرَّةِ', lemma: 'مَرَّة', pos: 'noun', features: 'def.gen', gloss: 'the time, instance' },
            { surface: 'لِأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+3mp', gloss: 'because they' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'said' },
          ],
        },
        {
          // Al-Baqarah 2:70's response clause, repeated.
          id: 'qs-v7-c12-018',
          ar: '﴿وَإِنَّآ إِن شَآءَ ٱللَّهُ لَمُهْتَدُونَ﴾',
          en: '"and indeed we, Allah willing, will be guided,"',
          tokens: [
            { surface: 'وَإِنَّآ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'شَآءَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'he wills' },
            { surface: 'ٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَمُهْتَدُونَ', lemma: 'اِهْتَدَى', pos: 'noun', features: 'part+pl.indef.nom', gloss: 'surely guided ones' },
          ],
        },
        {
          id: 'qs-v7-c12-019',
          ar: 'فَاهْتَدَوْا.',
          en: 'so they were guided.',
          tokens: [
            { surface: 'فَاهْتَدَوْا', lemma: 'اِهْتَدَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'so they were guided' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا وُفِّقَ بَنُو إِسْرَائِيلَ فِي هَذِهِ الْمَرَّةِ؟',
          options: ['لِأَنَّهُمْ قَالُوا وَإِنَّا إِنْ شَاءَ اللَّهُ لَمُهْتَدُونَ', 'لِأَنَّهُمْ تَابُوا عَنْ كُلِّ ذَنْبٍ', 'لِأَنَّهُمْ أَطَاعُوا مُوسَى مِنَ الْبِدَايَةِ'],
          answer: 0,
          qEn: 'Why were the Children of Israel granted success this time?',
          optionsEn: ['Because they said, "and indeed we, Allah willing, will be guided"', 'Because they repented of every sin', 'Because they had obeyed Mūsā from the start'],
        },
      ],
    },
    {
      en: "But their questions narrowed the matter upon them; for had they slaughtered any cow, it would have sufficed -- but they made it difficult for themselves, so Allah made it difficult for them. So they searched for the middle-aged, bright yellow cow, whose color was vivid, which did not plow the earth or water the crops, sound and without blemish.",
      sentences: [
        {
          id: 'qs-v7-c12-020',
          ar: 'وَلَكِنَّ أَسْئِلَتَهُمْ ضَيَّقَتْ عَلَيْهِمُ الْأَمْرَ،',
          en: 'But their questions narrowed the matter upon them,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'أَسْئِلَتَهُمْ', lemma: 'سُؤَال', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their questions' },
            { surface: 'ضَيَّقَتْ', lemma: 'ضَيَّقَ', pos: 'verb', features: 'perf.3fs', gloss: 'to narrow; narrowed' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الْأَمْرَ', lemma: 'أَمْر', pos: 'noun', features: 'def.acc', gloss: 'the matter' },
          ],
        },
        {
          id: 'qs-v7-c12-021',
          ar: 'فَلَوْ ذَبَحُوا أَيَّ بَقَرَةٍ لَكَانَتْ كَافِيَةً،',
          en: 'for had they slaughtered any cow, it would have sufficed,',
          tokens: [
            { surface: 'فَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj+conj', gloss: 'for if' },
            { surface: 'ذَبَحُوا', lemma: 'ذَبَحَ', pos: 'verb', features: 'perf.3mp', gloss: 'they slaughtered' },
            { surface: 'أَيَّ', lemma: 'أَيّ', pos: 'noun', features: 'acc.constr', gloss: 'any' },
            { surface: 'بَقَرَةٍ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.gen', gloss: 'cow' },
            { surface: 'لَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'part+perf.3fs', gloss: 'to be; it would have been' },
            { surface: 'كَافِيَةً', lemma: 'كَافٍ', pos: 'adj', features: 'indef.acc.f', root: 'ك ف ي', gloss: 'sufficient' },
          ],
        },
        {
          id: 'qs-v7-c12-022',
          ar: 'وَلَكِنَّهُمْ شَدَّدُوا فَشَدَّدَ اللَّهُ عَلَيْهِمْ.',
          en: 'but they made it difficult for themselves, so Allah made it difficult for them.',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'شَدَّدُوا', lemma: 'شَدَّدَ', pos: 'verb', features: 'perf.3mp', root: 'ش د د', gloss: 'to be strict, make difficult' },
            { surface: 'فَشَدَّدَ', lemma: 'شَدَّدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'so was strict, made difficult' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
          ],
        },
        {
          id: 'qs-v7-c12-023',
          ar: 'وَفَتَّشُوا عَنِ الْبَقَرَةِ الْعَوَانِ الصَّفْرَاءِ الْفَاقِعِ لَوْنُهَا الَّتِي لا تُثِيرُ الْأَرْضَ،',
          en: 'So they searched for the middle-aged, bright yellow cow, whose color was vivid, which did not plow the earth,',
          tokens: [
            { surface: 'وَفَتَّشُوا', lemma: 'فَتَّشَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ف ت ش', gloss: 'to search; and they searched' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'الْبَقَرَةِ', lemma: 'بَقَرَة', pos: 'noun', features: 'def.gen', gloss: 'the cow' },
            { surface: 'الْعَوَانِ', lemma: 'عَوَان', pos: 'adj', features: 'def.gen', gloss: 'the middle-aged' },
            { surface: 'الصَّفْرَاءِ', lemma: 'أَصْفَر', pos: 'adj', features: 'def.gen.f', gloss: 'the yellow' },
            { surface: 'الْفَاقِعِ', lemma: 'فَاقِع', pos: 'adj', features: 'def.gen', gloss: 'vivid [in]' },
            { surface: 'لَوْنُهَا', lemma: 'لَوْن', pos: 'noun', features: 'nom+3fs', gloss: 'its color' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُثِيرُ', lemma: 'أَثَارَ', pos: 'verb', features: 'impf.3fs', gloss: 'she plows' },
            { surface: 'الْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v7-c12-024',
          ar: 'وَلا تَسْقِي الْحَرْثَ،',
          en: 'nor water the crops,',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'تَسْقِي', lemma: 'سَقَى', pos: 'verb', features: 'impf.3fs', gloss: 'she waters' },
            { surface: 'الْحَرْثَ', lemma: 'حَرْث', pos: 'noun', features: 'def.acc', gloss: 'the crops' },
          ],
        },
        {
          id: 'qs-v7-c12-025',
          ar: 'الْمُسَلَّمَةِ الَّتِي لا شِيَةَ فِيهَا.',
          en: 'sound, having no blemish in it.',
          tokens: [
            { surface: 'الْمُسَلَّمَةِ', lemma: 'سَلَّمَ', pos: 'adj', features: 'def.gen.f', gloss: 'the sound, unblemished' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'شِيَةَ', lemma: 'شِيَة', pos: 'noun', features: 'acc', gloss: 'blemish' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ سَيَحْدُثُ لَوْ ذَبَحُوا أَيَّ بَقَرَةٍ مِنَ الْبِدَايَةِ؟',
          options: ['لَكَانَتْ كَافِيَةً وَلَمَا احْتَاجُوا إِلَى كُلِّ هَذِهِ الأَسْئِلَةِ', 'لَكَانَ اللَّهُ غَاضِباً عَلَيْهِمْ أَكْثَرَ', 'لَمَا قَبِلَ اللَّهُ ذَبْحَهُمْ'],
          answer: 0,
          qEn: 'What would have happened had they slaughtered any cow from the start?',
          optionsEn: ['It would have sufficed, and they would not have needed all these questions', 'Allah would have been even more angry with them', 'Allah would not have accepted their sacrifice'],
        },
      ],
    },
    {
      en: 'The existence of this strange cow was rare: either an old cow, or a young one; or middle-aged but not yellow; or a middle-aged yellow cow whose color was not vivid; or a middle-aged, vividly yellow cow, but a docile one that plowed the earth; or a middle-aged, vividly yellow cow that did not plow the earth, but watered the crops.',
      sentences: [
        {
          id: 'qs-v7-c12-026',
          ar: 'وَنَدَرَ وُجُودُ هَذِهِ الْبَقَرَةِ الْغَرِيبَةِ',
          en: 'The existence of this strange cow was rare,',
          tokens: [
            { surface: 'وَنَدَرَ', lemma: 'نَدَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن د ر', gloss: 'to be rare; and was rare' },
            { surface: 'وُجُودُ', lemma: 'وُجُود', pos: 'noun', features: 'nom.constr', gloss: 'the existence of' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْبَقَرَةِ', lemma: 'بَقَرَة', pos: 'noun', features: 'def.gen', gloss: 'the cow' },
            { surface: 'الْغَرِيبَةِ', lemma: 'غَرِيب', pos: 'adj', features: 'def.gen.f', root: 'غ ر ب', gloss: 'the strange' },
          ],
        },
        {
          id: 'qs-v7-c12-027',
          ar: 'فَإِمَّا بَقَرَةٌ فَارِضٌ وَإِمَّا بَقَرَةٌ بِكْرٌ.',
          en: 'so either an old cow, or a young cow,',
          tokens: [
            { surface: 'فَإِمَّا', lemma: 'إِمَّا', pos: 'conj', features: 'conj+conj', root: 'ا م م', gloss: 'so either' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'فَارِضٌ', lemma: 'فَارِض', pos: 'adj', features: 'indef.nom', gloss: 'old' },
            { surface: 'وَإِمَّا', lemma: 'إِمَّا', pos: 'conj', features: 'conj+conj', gloss: 'or' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'بِكْرٌ', lemma: 'بِكْر', pos: 'noun', features: 'indef.nom', gloss: 'young, unbred' },
          ],
        },
        {
          id: 'qs-v7-c12-028',
          ar: 'وَإِمَّا عَوَانٌ وَلَكِنْ غَيْرُ صَفْرَاءَ.',
          en: 'or middle-aged, but not yellow,',
          tokens: [
            { surface: 'وَإِمَّا', lemma: 'إِمَّا', pos: 'conj', features: 'conj+conj', gloss: 'or' },
            { surface: 'عَوَانٌ', lemma: 'عَوَان', pos: 'noun', features: 'indef.nom', gloss: 'middle-aged' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'غَيْرُ', lemma: 'غَيْر', pos: 'noun', features: 'nom.constr', gloss: 'not, other than' },
            { surface: 'صَفْرَاءَ', lemma: 'أَصْفَر', pos: 'adj', features: 'gen.f', gloss: 'yellow' },
          ],
        },
        {
          id: 'qs-v7-c12-029',
          ar: 'وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ وَلَكِنْ لَوْنُهَا غَيْرُ فَاقِعٍ.',
          en: 'or a middle-aged yellow cow, but its color not vivid,',
          tokens: [
            { surface: 'وَإِمَّا', lemma: 'إِمَّا', pos: 'conj', features: 'conj+conj', gloss: 'or' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'عَوَانٌ', lemma: 'عَوَان', pos: 'adj', features: 'indef.nom', gloss: 'middle-aged' },
            { surface: 'صَفْرَاءُ', lemma: 'أَصْفَر', pos: 'adj', features: 'indef.nom.f', gloss: 'yellow' },
            { surface: 'وَلَكِنْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'لَوْنُهَا', lemma: 'لَوْن', pos: 'noun', features: 'nom+3fs', gloss: 'its color' },
            { surface: 'غَيْرُ', lemma: 'غَيْر', pos: 'noun', features: 'nom.constr', gloss: 'not' },
            { surface: 'فَاقِعٍ', lemma: 'فَاقِع', pos: 'adj', features: 'indef.gen', gloss: 'vivid' },
          ],
        },
        {
          id: 'qs-v7-c12-030',
          ar: 'وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا',
          en: 'or a middle-aged, vividly yellow cow,',
          tokens: [
            { surface: 'وَإِمَّا', lemma: 'إِمَّا', pos: 'conj', features: 'conj+conj', gloss: 'or' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'عَوَانٌ', lemma: 'عَوَان', pos: 'adj', features: 'indef.nom', gloss: 'middle-aged' },
            { surface: 'صَفْرَاءُ', lemma: 'أَصْفَر', pos: 'adj', features: 'indef.nom.f', gloss: 'yellow' },
            { surface: 'فَاقِعٌ', lemma: 'فَاقِع', pos: 'adj', features: 'indef.nom', gloss: 'vivid' },
            { surface: 'لَوْنُهَا', lemma: 'لَوْن', pos: 'noun', features: 'nom+3fs', gloss: 'its color' },
          ],
        },
        {
          id: 'qs-v7-c12-031',
          ar: 'وَلَكِنَّهَا بَقَرَةٌ ذَلُولٌ تُثِيرُ الْأَرْضَ.',
          en: 'but it was a docile cow that plowed the earth.',
          tokens: [
            { surface: 'وَلَكِنَّهَا', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'but it' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'ذَلُولٌ', lemma: 'ذَلُول', pos: 'adj', features: 'indef.nom', gloss: 'docile, broken in' },
            { surface: 'تُثِيرُ', lemma: 'أَثَارَ', pos: 'verb', features: 'impf.3fs', gloss: 'she plows' },
            { surface: 'الْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v7-c12-032',
          ar: 'وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ فَاقِعٌ لَوْنُهَا لا تُثِيرُ الأَرْضَ',
          en: 'or a middle-aged, vividly yellow cow that did not plow the earth,',
          tokens: [
            { surface: 'وَإِمَّا', lemma: 'إِمَّا', pos: 'conj', features: 'conj+conj', gloss: 'or' },
            { surface: 'بَقَرَةٌ', lemma: 'بَقَرَة', pos: 'noun', features: 'indef.nom', gloss: 'a cow' },
            { surface: 'عَوَانٌ', lemma: 'عَوَان', pos: 'adj', features: 'indef.nom', gloss: 'middle-aged' },
            { surface: 'صَفْرَاءُ', lemma: 'أَصْفَر', pos: 'adj', features: 'indef.nom.f', gloss: 'yellow' },
            { surface: 'فَاقِعٌ', lemma: 'فَاقِع', pos: 'adj', features: 'indef.nom', gloss: 'vivid' },
            { surface: 'لَوْنُهَا', lemma: 'لَوْن', pos: 'noun', features: 'nom+3fs', gloss: 'its color' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُثِيرُ', lemma: 'أَثَارَ', pos: 'verb', features: 'impf.3fs', gloss: 'she plows' },
            { surface: 'الأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v7-c12-033',
          ar: 'وَلَكِنَّهَا تَسْقِي الْحَرْثَ.',
          en: 'but it watered the crops.',
          tokens: [
            { surface: 'وَلَكِنَّهَا', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3fs', gloss: 'but it' },
            { surface: 'تَسْقِي', lemma: 'سَقَى', pos: 'verb', features: 'impf.3fs', gloss: 'she waters' },
            { surface: 'الْحَرْثَ', lemma: 'حَرْث', pos: 'noun', features: 'def.acc', gloss: 'the crops' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ وُجُودُ الْبَقَرَةِ الَّتِي وُصِفَتْ نَادِراً؟',
          options: ['لِأَنَّ كُلَّ بَقَرَةٍ وُجِدَتْ كَانَتْ تَنْقُصُهَا صِفَةٌ وَاحِدَةٌ مِنَ الصِّفَاتِ الْمَطْلُوبَةِ', 'لِأَنَّ الْبَقَرَ كَانَ قَلِيلاً جِدّاً فِي تِلْكَ الأَرْضِ', 'لِأَنَّ بَنِي إِسْرَائِيلَ لَمْ يَبْحَثُوا جَيِّداً'],
          answer: 0,
          qEn: 'Why was the existence of the described cow rare?',
          optionsEn: ['Because every cow they found was missing one of the required qualities', 'Because cattle were very few in that land', 'Because the Children of Israel did not search well'],
        },
      ],
    },
    {
      en: "They searched and searched, and learned the outcome of this excessive probing -- 'What is it? What is its color? What is it?!' -- and they grew weary.",
      sentences: [
        {
          id: 'qs-v7-c12-034',
          ar: 'وَفَتَّشُوا وَفَتَّشُوا وَعَلِمُوا عَاقِبَةَ هَذَا التَّنْقِيرِ،',
          en: 'They searched and searched, and learned the outcome of this probing,',
          tokens: [
            { surface: 'وَفَتَّشُوا', lemma: 'فَتَّشَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'and they searched' },
            { surface: 'وَفَتَّشُوا', lemma: 'فَتَّشَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'and searched (again, emphatic)' },
            { surface: 'وَعَلِمُوا', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to know; and they learned' },
            { surface: 'عَاقِبَةَ', lemma: 'عَاقِبَة', pos: 'noun', features: 'acc.constr', gloss: 'the outcome of' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'التَّنْقِيرِ', lemma: 'تَنْقِير', pos: 'noun', features: 'def.gen', gloss: 'the probing' },
          ],
        },
        {
          id: 'qs-v7-c12-035',
          ar: 'مَا هِيَ؟ مَا لَوْنُهَا؟ مَا هِيَ! وَتَعِبُوا.',
          en: '"What is it? What is its color? What is it?!" -- and they grew weary.',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'is it' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'لَوْنُهَا', lemma: 'لَوْن', pos: 'noun', features: 'nom+3fs', gloss: 'is its color' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'is it' },
            { surface: 'وَتَعِبُوا', lemma: 'تَعِبَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to grow weary; and they grew weary' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِبَنِي إِسْرَائِيلَ بَعْدَ طُولِ الْبَحْثِ وَالتَّنْقِيرِ؟',
          options: ['تَعِبُوا', 'وَجَدُوا الْبَقَرَةَ بِسُهُولَةٍ', 'يَئِسُوا وَتَرَكُوا الْبَحْثَ نِهَائِيّاً'],
          answer: 0,
          qEn: 'What happened to the Children of Israel after so much searching and probing?',
          optionsEn: ['They grew weary', 'They found the cow easily', 'They despaired and gave up the search entirely'],
        },
      ],
    },
    {
      en: '"And Allah intended good for an orphan, so they found this cow, which Allah had described, in his possession, and they bought it for a very high price. [Qurʾān, al-Baqarah 2:71: \'So they slaughtered it, though they could hardly do so.\']"',
      sentences: [
        {
          id: 'qs-v7-c12-036',
          ar: 'وَأَرَادَ اللَّهُ بِيَتِيمٍ خَيْراً',
          en: 'And Allah intended good for an orphan,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and intended' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'بِيَتِيمٍ', lemma: 'يَتِيم', pos: 'noun', features: 'prep+indef.gen', gloss: 'for an orphan' },
            { surface: 'خَيْراً', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'good' },
          ],
        },
        {
          id: 'qs-v7-c12-037',
          ar: 'فَوَجَدُوا هَذِهِ الْبَقَرَةَ الَّتِي وَصَفَهَا اللَّهُ عِنْدَهُ',
          en: 'so they found this cow, which Allah had described, in his possession,',
          tokens: [
            { surface: 'فَوَجَدُوا', lemma: 'وَجَدَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'so they found' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْبَقَرَةَ', lemma: 'بَقَرَة', pos: 'noun', features: 'def.acc', gloss: 'the cow' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'وَصَفَهَا', lemma: 'وَصَفَ', pos: 'verb', features: 'perf.3ms+3fs', root: 'و ص ف', gloss: 'to describe; he described it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عِنْدَهُ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3ms', gloss: 'with him, in his possession' },
          ],
        },
        {
          id: 'qs-v7-c12-038',
          ar: 'فَاشْتَرَوْهَا بِثَمَنٍ غَالٍ جِدّاً',
          en: 'and they bought it for a very high price,',
          tokens: [
            { surface: 'فَاشْتَرَوْهَا', lemma: 'اِشْتَرَى', pos: 'verb', features: 'conj+perf.3mp+3fs', gloss: 'and they bought it' },
            { surface: 'بِثَمَنٍ', lemma: 'ثَمَن', pos: 'noun', features: 'prep+indef.gen', gloss: 'for a price' },
            { surface: 'غَالٍ', lemma: 'غَالٍ', pos: 'adj', features: 'indef.gen', root: 'غ ل و', gloss: 'expensive' },
            { surface: 'جِدّاً', lemma: 'جِدّاً', pos: 'adv', features: 'adv', gloss: 'very' },
          ],
        },
        {
          // Al-Baqarah 2:71c.
          id: 'qs-v7-c12-039',
          ar: '﴿فَذَبَحُوهَا وَمَا كَادُوا۟ يَفْعَلُونَ﴾.',
          en: '"So they slaughtered it, though they could hardly do so."',
          tokens: [
            { surface: 'فَذَبَحُوهَا', lemma: 'ذَبَحَ', pos: 'verb', features: 'conj+perf.3mp+3fs', gloss: 'so they slaughtered it' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'though not' },
            { surface: 'كَادُوا۟', lemma: 'كَادَ', pos: 'verb', features: 'perf.3mp', root: 'ك و د', gloss: 'to nearly do, be about to; they nearly (did not)' },
            { surface: 'يَفْعَلُونَ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.3mp', gloss: 'do [it]' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ وَجَدَ بَنُو إِسْرَائِيلَ الْبَقَرَةَ الَّتِي وَصَفَهَا اللَّهُ؟',
          options: ['عِنْدَ يَتِيمٍ أَرَادَ اللَّهُ بِهِ خَيْراً', 'عِنْدَ فِرْعَوْنَ', 'فِي السُّوقِ الْعَامِّ بِسِعْرٍ رَخِيصٍ'],
          answer: 0,
          qEn: 'Where did the Children of Israel find the cow that Allah had described?',
          optionsEn: ['With an orphan for whom Allah intended good', 'With Pharaoh', 'In the public market at a cheap price'],
        },
      ],
    },
    {
      en: 'And Allah commanded that the slain man be struck with a part of the cow, so that he would come back to life and tell the name of the killer. And so it was...',
      sentences: [
        {
          id: 'qs-v7-c12-040',
          ar: 'وَأَمَرَ اللَّهُ أَنْ يُضْرَبَ الْمَقْتُولُ بِجُزْءٍ مِنْ أَجْزَاءِ الْبَقَرَةِ',
          en: "And Allah commanded that the slain man be struck with a part of the cow's parts,",
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and commanded' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُضْرَبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to strike; he be struck' },
            { surface: 'الْمَقْتُولُ', lemma: 'مَقْتُول', pos: 'noun', features: 'def.nom', root: 'ق ت ل', gloss: 'the slain [man]' },
            { surface: 'بِجُزْءٍ', lemma: 'جُزْء', pos: 'noun', features: 'prep+indef.gen', gloss: 'with a part' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'أَجْزَاءِ', lemma: 'جُزْء', pos: 'noun', features: 'pl.constr.gen', gloss: 'the parts of' },
            { surface: 'الْبَقَرَةِ', lemma: 'بَقَرَة', pos: 'noun', features: 'def.gen', gloss: 'the cow' },
          ],
        },
        {
          id: 'qs-v7-c12-041',
          ar: 'فَيَحْيَا وَيُخْبِرَ بِاسْمِ الْقَاتِلِ.',
          en: 'so that he would come back to life and tell the name of the killer.',
          tokens: [
            { surface: 'فَيَحْيَا', lemma: 'حَيِيَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to live, come to life; so he lives' },
            { surface: 'وَيُخْبِرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and informs' },
            { surface: 'بِاسْمِ', lemma: 'اِسْم', pos: 'noun', features: 'prep+constr.gen', gloss: 'with the name of' },
            { surface: 'الْقَاتِلِ', lemma: 'قَاتِل', pos: 'noun', features: 'def.gen', gloss: 'the killer' },
          ],
        },
        {
          id: 'qs-v7-c12-042',
          ar: 'وَهَكَذَا كَانَ. . . .',
          en: 'And so it was...',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'it was' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلْمَقْتُولِ عِنْدَمَا ضُرِبَ بِجُزْءٍ مِنَ الْبَقَرَةِ؟',
          options: ['حَيِيَ وَأَخْبَرَ بِاسْمِ الْقَاتِلِ', 'بَقِيَ مَيِّتاً وَلَمْ يَتَحَرَّكْ', 'تَحَوَّلَ إِلَى بَقَرَةٍ أُخْرَى'],
          answer: 0,
          qEn: 'What happened to the slain man when he was struck with a part of the cow?',
          optionsEn: ['He came back to life and told the name of the killer', 'He remained dead and did not move', 'He turned into another cow'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَنَدَرَ وُجُودُ هَذِهِ الْبَقَرَةِ الْغَرِيبَةِ فَإِمَّا بَقَرَةٌ',
        post: 'وَإِمَّا بَقَرَةٌ بِكْرٌ.',
        en: 'The existence of this strange cow was rare: either an old cow, or a young cow.',
        options: ['فَارِضٌ', 'بِكْرٌ', 'عَوَانٌ', 'ذَلُولٌ'],
        answer: 0,
        rationales: [
          'Correct -- "old" is the first alternative named, before "young" (بِكْر) in the second half.',
          'Repeats the second alternative already given -- redundant here.',
          '"Middle-aged" -- introduced only in the next line, not this one.',
          '"Docile, trained" -- describes temperament, not age; wrong slot.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِمَّا بَقَرَةٌ عَوَانٌ صَفْرَاءُ',
        post: 'لَوْنُهَا وَلَكِنَّهَا بَقَرَةٌ ذَلُولٌ تُثِيرُ الْأَرْضِ.',
        en: 'Or a middle-aged, vividly-colored yellow cow -- but a docile one that plowed the earth.',
        options: ['فَاقِعٌ', 'غَيْرُ فَاقِعٍ', 'فَارِضٌ', 'بِكْرٌ'],
        answer: 0,
        rationales: [
          'Correct -- "vivid" describing the color, the indefinite nominative predicate agreeing with بَقَرَة.',
          '"Not vivid" is the earlier failed alternative, not this one.',
          'Wrong slot -- "old" is an age-term, already excluded earlier in the enumeration.',
          'Wrong slot -- "young" is an age-term, already excluded earlier.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'عَنِ الْبَقَرَةِ الْعَوَانِ الصَّفْرَاءِ.',
        en: 'And they searched for the middle-aged, yellow cow.',
        options: ['فَتَّشُوا', 'فَتَّشَ', 'تُفَتِّشُ', 'نُفَتِّشُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches the plural subject (the Children of Israel).',
          '3rd masculine singular -- wrong number.',
          '2nd/3rd feminine singular imperfect -- wrong aspect and number.',
          '1st plural imperfect -- wrong person and aspect.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'فَتَّشَ الرَّجُلُ عَنِ الْبَقَرَةِ',
        pre: '',
        post: 'الرَّجُلُ عَنِ الْبَقَرَةِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['فَتَّشُوا', 'فَتَّشَ', 'فَتَّشَتْ', 'فَتَّشْتُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'فَتَّشَ الرَّجُلُ عَنِ الْبَقَرَةِ',
        pre: '',
        post: 'الرَّجُلُ عَنِ الْبَقَرَةِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['فَتَّشَتْ', 'فَتَّشَ', 'فَتَّشُوا', 'فَتَّشْنَا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd masculine plural -- they (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'فَتَّشَ الرَّجُلُ عَنِ الْبَقَرَةِ',
        pre: '',
        post: 'الرَّجُلُ عَنِ الْبَقَرَةِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['فَتَّشْنَا', 'فَتَّشَ', 'فَتَّشُوا', 'فَتَّشَتْ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd masculine plural -- they (m.).',
          '3rd feminine singular -- she.',
        ],
      },
    ],
  },
};

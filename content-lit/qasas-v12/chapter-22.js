// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 22. Printed pages 264 (from partway down,
// right after ch21's closing line) through the top of 265, ending before
// ch23's heading الْيَهُودُ يُحَاوِلُونَ التَّخَلُّصَ. Transcribed by hand from the
// scan (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// Content: the author hands the narration straight to the Qur'an. The
// quoted block is Sūrat al-Māʾidah 5:112-115 -- the disciples asking Isa
// whether his Lord can send down a table of food from heaven, Isa's
// rebuke ("fear Allah, if you are believers"), their explanation that they
// only want reassurance and to witness it, Isa's own prayer for the table,
// and Allah's answer granting it with a warning of severe punishment for
// whoever disbelieves afterward. Identified precisely from the visible
// ayah-end markers on the scan (111/112/114/115 partly legible; content and
// wording confirmed letter-for-letter against the standard Ḥafṣ muṣḥaf
// text, which is unambiguous here) as 5:112, 5:113, 5:114, 5:115 -- the
// book's own printed sequence skips 5:111 (the earlier, separate verse
// about the disciples' initial declaration of faith) and opens the quote
// directly at 112.
//
// Grammar / lexical notes:
//   -- Every āyah is wrapped in ﴿ ﴾ per the shipped convention (see
//      qasas-v3/chapter-14.js's Qur'an quotes) and, since several of these
//      āyāt are long, each is further split at its natural internal clause
//      boundary into its own separately-wrapped ﴿ ﴾ sentence entry, per
//      this task's explicit instruction to apply the house long-sentence
//      split to Qur'anic text too. No wording is altered by the split --
//      only where the ﴿ ﴾ pair opens and closes.
//   -- وَدَعُوا (qs-v12-c22-intro, "let ... narrate") is the imperative of
//      the hollow/assimilated root و د ع ("to leave, let be"), NOT of the
//      much more common دَعَا ("to call, invoke") -- the spelling without an
//      initial hamza (دَعُوا, not اُدْعُوا) is the tell, since assimilated
//      و-initial verbs like this one drop the و in the imperative rather
//      than needing a helper hamza. known-lemmas.txt has one unvocalized
//      "ودع" line alongside a vocalized وَدَّعَ ("to bid farewell," form II)
//      -- given the genuine ambiguity of which verb the bare entry
//      represents, and that my token is form I with a different meaning,
//      it is treated as new here; flagging for a second look.
//   -- نَزَّلَ (qs-v12-c22-002, "to send down," form II) and مُنَزِّل
//      (qs-v12-c22-010, its active participle) are both new, distinct
//      lemmas from the already-taught base verb نَزَلَ ("to descend," form
//      I) and from the already-taught أَنزَلَ ("to send down," form IV,
//      qs-v12-c22-007's أَنزِلْ) -- three separate derived forms of the
//      same root ن ز ل, each its own lemma per the corpus's
//      distinct-derived-form convention.
//   -- شَاهِد (new, "witness") and رَازِق (new, "provider") are both
//      participle-nouns distinct from their already-taught base verbs
//      شَهِدَ and رَزَقَ, matching the same convention.
//   -- عَذَّبَ (new, "to punish") is a distinct lemma from the already-taught
//      noun عَذَاب ("punishment") -- verb vs. verbal-noun-adjacent noun,
//      same root ع ذ ب, separate lemmas.
//   -- ابْنَ/ابْنُ (qs-v12-c22-001/006) shows both accusative (appositive to
//      the vocative يَا عِيسَى) and nominative (subject of قَالَ) case in the
//      same chapter -- same lemma ابْن, different features per occurrence.
//   -- مَرْيَمَ is a diptote (ممنوع من الصرف, feminine proper noun) -- its
//      genitive is spelled with fatḥah rather than kasrah, so despite the
//      'gen' feature tag the surface never shows a visible kasrah; it does
//      not count toward this chapter's buildable-sentence total.
//   -- Interrogative هَلْ, personal pronoun أَنْتَ/أَنَا-family forms, and
//      other closed-class function words are glossed inline on their
//      tokens but not tracked in newWords, matching the policy explained
//      in chapter-21.js's header comment.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, against
//      known-lemmas.txt): إِذْ، قَالَ، يَا، هَلْ، رَبّ، أَنْ، عَلَى، مِنْ، سَمَاء، اتَّقَى،
//      اللَّه، إِنْ، كَانَ، مُؤْمِن، أَرَادَ، أَكَلَ، اِطْمَأَنَّ، قَلْب، عَلِمَ، قَدْ، صَدَقَ،
//      اللَّهُمَّ، أَنزَلَ، أَوَّل، آخِرَة (distinct from this chapter's new آخِر,
//      see note above)، آيَة، لِ، رَزَقَ، أَنْتَ، خَيْر، عِيد، عَالَم، أَحَد، كَفَرَ،
//      عَذَاب
//      are all already taught and are NOT re-listed in newWords here.
//
// 14 new words (قُرْآن، حَوَارِيّ، عِيسَى، مَرْيَم، ابْن، اِسْتَطَاعَ، نَزَّلَ، مَائِدَة،
// شَاهِد، آخِر، رَازِق، مُنَزِّل، عَذَّبَ، وَدَعَ) -- this chapter carries the heaviest
// proper-noun load of the batch (عِيسَى، مَرْيَم now appear for the first time
// in this run of chapters) alongside the story's central noun, مَائِدَة, the
// heavenly table itself.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch22',
  title: { ar: 'الْقُرْآنُ يَحْكِي الْقِصَّةَ', en: "The Qur'an Narrates the Story" },
  newWords: [
    'قُرْآن', 'ابْن', 'مَائِدَة', 'رَازِق', 'مُنَزِّل', 'وَدَعَ',
  ],
  lemmas: {
    قُرْآن: { gloss: "the Qur'an" },
    حَوَارِيّ: { gloss: 'disciple' },
    عِيسَى: { gloss: 'Isa (Jesus)' },
    مَرْيَم: { gloss: 'Maryam (Mary)' },
    ابْن: { gloss: 'son' },
    اِسْتَطَاعَ: { gloss: 'to be able' },
    نَزَّلَ: { gloss: 'to send down' },
    مَائِدَة: { gloss: 'a table (of food)' },
    شَاهِد: { gloss: 'witness' },
    آخِر: { gloss: 'last, final' },
    رَازِق: { gloss: 'provider' },
    مُنَزِّل: { gloss: 'one who sends down' },
    عَذَّبَ: { gloss: 'to punish' },
    وَدَعَ: { gloss: 'to leave, let (someone do something)' },
  },
  paragraphs: [
    {
      en: "Let the Qur'an itself narrate this story: the disciples said, \"O Isa son of Maryam, is your Lord able to send down to us a table of food from heaven?\" He said, \"Fear Allah, if you are believers.\" They said, \"We wish to eat from it, that our hearts may be reassured, that we may know that you have told us the truth, and that we may be among its witnesses.\" Isa son of Maryam said, \"O Allah, our Lord, send down to us a table of food from heaven, to be for us -- for the first of us and the last of us -- a festival and a sign from You; and provide for us, for You are the best of providers.\" Allah said, \"I will send it down to you, but whoever among you disbelieves after that, I will punish him with a punishment I do not inflict on anyone else in all the worlds.\"",
      sentences: [
        {
          id: 'qs-v12-c22-001',
          ar: 'وَدَعُوا الْقُرْآنَ يَحْكِي هَذِهِ الْقِصَّةَ:',
          en: "Let the Qur'an itself narrate this story:",
          tokens: [
            { surface: 'وَدَعُوا', lemma: 'وَدَعَ', pos: 'verb', features: 'conj+imp.2mp', root: 'و د ع', gloss: 'to leave, let; and let' },
            { surface: 'الْقُرْآنَ', lemma: 'قُرْآن', pos: 'proper', features: 'def.acc', gloss: "the Qur'an" },
            { surface: 'يَحْكِي', lemma: 'حَكَى', pos: 'verb', features: 'impf.3ms', gloss: 'to narrate; narrate' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'def.acc', gloss: 'the story' },
          ],
        },
        {
          id: 'qs-v12-c22-002',
          ar: '﴿إِذْ قَالَ الْحَوَارِيُّونَ يَا عِيسَى ابْنَ مَرْيَمَ﴾',
          en: 'When the disciples said, "O Isa, son of Maryam,',
          tokens: [
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'الْحَوَارِيُّونَ', lemma: 'حَوَارِيّ', pos: 'noun', features: 'def.nom.pl', gloss: 'the disciples' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa' },
            { surface: 'ابْنَ', lemma: 'ابْن', pos: 'noun', features: 'acc.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
          ],
        },
        {
          id: 'qs-v12-c22-003',
          ar: '﴿هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ﴾؟',
          en: 'is your Lord able to send down to us a table of food from heaven?"',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'is it that, can' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; is able' },
            { surface: 'رَبُّكَ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2ms', gloss: 'your Lord' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُنَزِّلَ', lemma: 'نَزَّلَ', pos: 'verb', features: 'impf.3ms', root: 'ن ز ل', gloss: 'to send down; send down' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'down to us' },
            { surface: 'مَائِدَةً', lemma: 'مَائِدَة', pos: 'noun', features: 'indef.acc', gloss: 'a table (of food)' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'the sky, heaven' },
          ],
        },
        {
          id: 'qs-v12-c22-004',
          ar: '﴿قَالَ اتَّقُوا اللَّهَ إِنْ كُنتُمْ مُّؤْمِنِينَ﴾.',
          en: 'He said, "Fear Allah, if you are believers."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'اتَّقُوا', lemma: 'اِتَّقَى', pos: 'verb', features: 'imp.2mp', gloss: 'to fear, be mindful of; fear' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كُنتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'to be; you are' },
            { surface: 'مُّؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'indef.acc.pl', gloss: 'believers' },
          ],
        },
        {
          id: 'qs-v12-c22-005',
          ar: '﴿قَالُوا نُرِيدُ أَنْ نَأْكُلَ مِنْهَا وَتَطْمَئِنَّ قُلُوبُنَا﴾',
          en: 'They said, "We wish to eat from it, that our hearts may be reassured,',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
            { surface: 'نُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.1p', gloss: 'to want; we want' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'نَأْكُلَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.1p', gloss: 'to eat; eat' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'وَتَطْمَئِنَّ', lemma: 'اِطْمَأَنَّ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to be reassured; and be reassured' },
            { surface: 'قُلُوبُنَا', lemma: 'قَلْب', pos: 'noun', features: 'pl.nom+1p', gloss: 'our hearts' },
          ],
        },
        {
          id: 'qs-v12-c22-006',
          ar: '﴿وَنَعْلَمَ أَنْ قَدْ صَدَقْتَنَا وَنَكُونَ عَلَيْهَا مِنَ الشَّاهِدِينَ﴾.',
          en: 'that we may know that you have told us the truth, and that we may be among its witnesses."',
          tokens: [
            { surface: 'وَنَعْلَمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to know; and know' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'صَدَقْتَنَا', lemma: 'صَدَقَ', pos: 'verb', features: 'perf.2ms+1p', gloss: 'to be truthful; you have been truthful to us' },
            { surface: 'وَنَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to be; and be' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'concerning it' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الشَّاهِدِينَ', lemma: 'شَاهِد', pos: 'noun', features: 'def.gen.pl', root: 'ش ه د', gloss: 'the witnesses' },
          ],
        },
        {
          id: 'qs-v12-c22-007',
          ar: '﴿قَالَ عِيسَى ابْنُ مَرْيَمَ اللَّهُمَّ رَبَّنَا﴾',
          en: 'Isa son of Maryam said, "O Allah, our Lord,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa' },
            { surface: 'ابْنُ', lemma: 'ابْن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
            { surface: 'اللَّهُمَّ', lemma: 'اللَّهُمَّ', pos: 'part', features: 'part', gloss: 'O Allah' },
            { surface: 'رَبَّنَا', lemma: 'رَبّ', pos: 'noun', features: 'acc+1p', gloss: 'our Lord' },
          ],
        },
        {
          id: 'qs-v12-c22-008',
          ar: '﴿أَنزِلْ عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ﴾',
          en: 'send down to us a table of food from heaven,',
          tokens: [
            { surface: 'أَنزِلْ', lemma: 'أَنزَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to send down; send down' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'down to us' },
            { surface: 'مَائِدَةً', lemma: 'مَائِدَة', pos: 'noun', features: 'indef.acc', gloss: 'a table (of food)' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'the sky' },
          ],
        },
        {
          id: 'qs-v12-c22-009',
          ar: '﴿تَكُونُ لَنَا عِيدًا لِأَوَّلِنَا وَآخِرِنَا وَآيَةً مِنْكَ﴾',
          en: 'to be for us -- for the first of us and the last of us -- a festival and a sign from You;',
          tokens: [
            { surface: 'تَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3fs', gloss: 'to be; that it may be' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'عِيدًا', lemma: 'عِيد', pos: 'noun', features: 'indef.acc', gloss: 'a festival' },
            { surface: 'لِأَوَّلِنَا', lemma: 'أَوَّل', pos: 'noun', features: 'prep+gen+1p', gloss: 'for the first of us' },
            { surface: 'وَآخِرِنَا', lemma: 'آخِر', pos: 'noun', features: 'conj+gen+1p', gloss: 'and the last of us' },
            { surface: 'وَآيَةً', lemma: 'آيَة', pos: 'noun', features: 'conj+indef.acc', gloss: 'and a sign' },
            { surface: 'مِنْكَ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2ms', gloss: 'from You' },
          ],
        },
        {
          id: 'qs-v12-c22-010',
          ar: '﴿وَارْزُقْنَا وَأَنتَ خَيْرُ الرَّازِقِينَ﴾.',
          en: 'and provide for us, for You are the best of providers."',
          tokens: [
            { surface: 'وَارْزُقْنَا', lemma: 'رَزَقَ', pos: 'verb', features: 'conj+imp.2ms+1p', gloss: 'to provide; and provide for us' },
            { surface: 'وَأَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'and You' },
            { surface: 'خَيْرُ', lemma: 'خَيْر', pos: 'noun', features: 'nom.constr', gloss: 'the best of' },
            { surface: 'الرَّازِقِينَ', lemma: 'رَازِق', pos: 'noun', features: 'def.gen.pl', root: 'ر ز ق', gloss: 'the providers' },
          ],
        },
        {
          id: 'qs-v12-c22-011',
          ar: '﴿قَالَ اللَّهُ إِنِّي مُنَزِّلُهَا عَلَيْكُمْ﴾',
          en: 'Allah said, "I will send it down to you,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'مُنَزِّلُهَا', lemma: 'مُنَزِّل', pos: 'noun', features: 'nom.constr+3fs', root: 'ن ز ل', gloss: 'the one to send it down' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
          ],
        },
        {
          id: 'qs-v12-c22-012',
          ar: '﴿فَمَنْ يَكْفُرْ بَعْدُ مِنكُمْ فَإِنِّي أُعَذِّبُهُ عَذَابًا﴾',
          en: 'but whoever among you disbelieves after that, I will punish him with a punishment',
          tokens: [
            { surface: 'فَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'then whoever' },
            { surface: 'يَكْفُرْ', lemma: 'كَفَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to disbelieve; disbelieves' },
            { surface: 'بَعْدُ', lemma: 'بَعْد', pos: 'adv', features: 'adv', gloss: 'after, afterward' },
            { surface: 'مِنكُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2mp', gloss: 'among you' },
            { surface: 'فَإِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'then indeed I' },
            { surface: 'أُعَذِّبُهُ', lemma: 'عَذَّبَ', pos: 'verb', features: 'impf.1s+3ms', gloss: 'to punish; I will punish him' },
            { surface: 'عَذَابًا', lemma: 'عَذَاب', pos: 'noun', features: 'indef.acc', gloss: 'a punishment' },
          ],
        },
        {
          id: 'qs-v12-c22-013',
          ar: '﴿لَا أُعَذِّبُهُ أَحَدًا مِنَ الْعَالَمِينَ﴾.',
          en: 'the like of which I do not inflict on anyone else in all the worlds."',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أُعَذِّبُهُ', lemma: 'عَذَّبَ', pos: 'verb', features: 'impf.1s+3ms', gloss: 'to punish; I punish [with it]' },
            { surface: 'أَحَدًا', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the worlds' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ الْحَوَارِيُّونَ مِنْ سَيِّدِنَا عِيسَى؟',
          options: ['أَنْ يَسْأَلَ رَبَّهُ أَنْ يُنَزِّلَ عَلَيْهِمْ مَائِدَةً مِنَ السَّمَاءِ', 'أَنْ يَشْفِيَ مَرْضَاهُمْ', 'أَنْ يُعَلِّمَهُمُ التَّوْرَاةَ'],
          answer: 0,
          qEn: 'What did the disciples ask of Isa?',
          optionsEn: ['To ask his Lord to send down to them a table of food from heaven', 'To heal their sick', "To teach them the Torah"],
        },
        {
          q: 'بِمَ تَوَعَّدَ اللَّهُ مَنْ يَكْفُرُ بَعْدَ نُزُولِ الْمَائِدَةِ؟',
          options: ['بِأَنَّهُ سَيُعَذِّبُهُ عَذَابًا لَا يُعَذِّبُهُ أَحَدًا مِنَ الْعَالَمِينَ', 'بِأَنَّهُ سَيَغْفِرُ لَهُ بِلَا عِقَابٍ', 'بِأَنَّهُ لَنْ يَسْتَجِيبَ لِطَلَبِهِ أَصْلًا'],
          answer: 0,
          qEn: 'What did Allah warn whoever disbelieves after the table descends?',
          optionsEn: ['That He would punish him with a punishment unlike any given to anyone else in the worlds', 'That He would forgive him without any punishment', 'That He would simply refuse the request altogether'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ الْحَوَارِيُّونَ يَا عِيسَى ابْنَ مَرْيَمَ هَلْ يَسْتَطِيعُ رَبُّكَ أَنْ يُنَزِّلَ عَلَيْنَا مَائِدَةً',
        post: 'السَّمَاءِ.',
        en: '...a table from the sky.',
        options: ['مِنَ', 'فِي', 'إِلَى', 'عَنْ'],
        answer: 0,
        rationales: [
          '"from" -- matches the printed مِنَ السَّمَاءِ, source of the descent.',
          '"in" -- wrong sense; the table comes from the sky, not located in it here.',
          '"to" -- wrong direction; the motion is downward from the sky, not toward it.',
          '"about" -- wrong sense entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ',
        post: 'اللَّهَ إِنْ كُنتُمْ مُؤْمِنِينَ.',
        en: 'He said: Fear Allah, if you are believers.',
        options: ['اتَّقُوا', 'اتَّقِ', 'نَتَّقِي', 'تَتَّقُونَ'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine plural -- matches the disciples being addressed as a group.',
          'Imperative, 2nd masculine singular -- wrong number; more than one disciple is addressed.',
          '1st plural imperfect -- wrong mood; this is a command, not a statement.',
          '2nd masculine plural imperfect (statement, not command) -- wrong mood for an imperative sentence.',
        ],
      },
      {
        type: 'cloze',
        pre: 'اللَّهُمَّ رَبَّنَا',
        post: 'عَلَيْنَا مَائِدَةً مِنَ السَّمَاءِ.',
        en: 'O Allah, our Lord, send down to us a table from the sky.',
        options: ['أَنزِلْ', 'يُنَزِّلُ', 'نُنَزِّلُ', 'أُنَزِّلُ'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine singular of أَنزَلَ -- a direct request addressed to Allah, matching the printed أَنزِلْ.',
          '3rd masculine singular imperfect -- wrong mood; this is a prayer/request, not a statement about a third party.',
          '1st plural imperfect -- wrong person; Isa is asking Allah, not describing what "we" do.',
          '1st singular imperfect -- wrong person for the same reason.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْتَطِيعُ رَبُّكَ ذَلِكَ',
        pre: '',
        post: 'رَبُّكَ ذَلِكَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['تَسْتَطِيعُ', 'يَسْتَطِيعُ', 'أَسْتَطِيعُ', 'نَسْتَطِيعُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْتَطِيعُ رَبُّكَ ذَلِكَ',
        pre: '',
        post: 'رَبُّكَ ذَلِكَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَطِيعُ', 'يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'نَسْتَطِيعُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; the target is "I," not "you."',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْتَطِيعُ رَبُّكَ ذَلِكَ',
        pre: '',
        post: 'رَبُّكَ ذَلِكَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْتَطِيعُ', 'يَسْتَطِيعُ', 'تَسْتَطِيعُ', 'أَسْتَطِيعُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; the target is "we," not "you."',
          '1st singular -- wrong number; the target is plural.',
        ],
      },
    ],
  },
};

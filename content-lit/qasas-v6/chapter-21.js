// قَصَصُ النَّبِيِّينَ, volume 6 «مُوسَى» (part 1), chapter 21 -- الدَّعْوَةُ
// إِلَى اللَّهِ. Printed pages 146 (from the heading, mid-page) - 147 - 148
// (top only, ending right before ch22's heading «مُعْجِزَاتُ مُوسَى» which
// opens partway down page 148). Transcribed by hand from the scan (vision
// OCR, 200dpi render) against ../CHAPTER-FORMAT.md.
//
// This chapter continues directly out of ch20 (Mūsā's bold reply to
// Pharaoh's accusation of ingratitude, tail end visible on pp.145-146
// before this chapter's title box) and covers the courtroom exchange of
// Sūrat ash-Shuʿarāʾ 26:23-29 -- Pharaoh's "what is the Lord of the
// worlds?", Mūsā's three-part answer (worlds / your fathers' Lord / east
// and west), and Pharaoh's two escalating threats (madman, then prison).
// Nadwi frames each Qur'an exchange with his own narrative bridge
// ("Pharaoh struck a second blow", "Pharaoh wanted to stir up his
// assembly's anger"), then breaks into an unusual first-person aside
// (qs-v6-c21-016 "قُلْتُ") voicing Pharaoh's own imagined interior
// monologue about the "generations of old" trap question (26:18-19) --
// flagged below since it is a distinctive authorial technique, not a
// transcription error.
//
// Grammar / lexical notes:
//   -- qs-v6-c21-002's "الَّذِي أَسْمَعُكَ تَذْكُرُهُ" sits OUTSIDE the ﴿ ﴾
//      bracket even though it's glued onto the end of the Qur'an fragment
//      "وَمَا رَبُّ الْعَالَمِينَ" on the same printed line -- it is Nadwi's
//      own explanatory continuation of Pharaoh's question, not part of
//      26:23. Bracket placement transcribed exactly as printed.
//   -- qs-v6-c21-006/010's repeated "ضَرَبَ فِرْعَوْنُ ضَرْبَةً
//      ثَانِيَةً/ثَالِثَةً" ("Pharaoh struck a second/third blow") is
//      idiomatic for a rhetorical jab in the exchange, not literal
//      striking -- read with فِرْعَوْنُ as subject both times, matching what
//      is printed; flagged since a reader might expect مُوسَى given he is
//      the one who keeps "not cutting off the speech," but the printed
//      subject both times is فِرْعَوْنُ.
//   -- قُلْتُ (qs-v6-c21-016) is tagged 1st-singular perfect on lemma قَالَ
//      as printed -- it is Pharaoh's own reported interior monologue
//      ("if Mūsā says X, [I'd say]: but they worshiped idols!"), not the
//      author breaking narrative voice.
//   -- مَوْضُوع (qs-v6-c21-012) reuses the lemma spelling already taught in
//      qasas-v2 ch5 ("fabricated, invented") but is used here in its
//      other ordinary sense "topic, subject" (مفعول of وَضَعَ) -- same
//      lemma, context-appropriate token gloss supplied.
//   -- مُوسَى and فِرْعَوْنَ are NOT included in newWords: they are the
//      title figures of this entire volume and are certain to have been
//      taught in this volume's chapters 1-20 (a concurrent batch, not yet
//      merged into known_lemmas.json, which per the brief only covers
//      volumes 1-3). Flagged for the central reconciler to confirm against
//      the actual qasas-v6 ch1-20 files once available.
//   -- ثُمَّ ("then") and عِنْدَ ("at, with") are not found in
//      known_lemmas.json despite being basic closed-class words that would
//      ordinarily have appeared very early; included in newWords per the
//      letter of the cross-check rule, flagged here in case this just
//      reflects incomplete extraction rather than a genuine gap.
//   -- Qur'anic quotations (Sūrat ash-Shuʿarāʾ 26:23-29, plus 20:52-53 on
//      Musa's "my Lord neither errs nor forgets" reply) are transcribed in
//      full with ﴿ ﴾ preserved exactly as printed, split at natural pause
//      points into ordinary sentence entries -- same convention as
//      qasas-v2/chapter-22.js, not specially flagged or excluded.
//
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): وَلَمْ/لَمْ, يَجِدْ/وَجَدَ,
//      جَوَاباً/جَوَاب, أَرَادَ, فَقَالَ/قَالَ, رَبُّ/رَبّ, الْأَرْضِ/أَرْض,
//      إِنْ, كُنتُم/كَانَ, غَضِبَ, هَذَا, بَيْنَهُمَا/بَيْنَ, إِلَيْكُمْ/إِلَى,
//      حَوْلَهُ/حَوْلَ, بَلْ, ضَرَبَ, رَبُّكُمْ/رَبّ, آبَائِكُمُ/أَب,
//      الْأَوَّلِينَ/أَوَّل, اِشْتَدَّ, يَصْبِرْ/صَبَرَ, إِنَّ, رَسُولَكُمُ/رَسُول,
//      الَّذِي, أُرْسِلَ/أَرْسَلَ, الْمَشْرِقِ/مَشْرِق, الْمَغْرِبِ/مَغْرِب,
//      تَعْقِلُونَ/عَقَلَ, يَشْغَلَ/شَغَلَ, مَلَئِهِ/مَلَأ, نَفْسِهِ/نَفْس, إِذَا,
//      عَلَى, الْحَقِّ/حَقّ, يَعْبُدُونَ/عَبَدَ, الْأَصْنَامَ/صَنَم, ضَلَالَةٍ/
//      ضَلَالَة, سَفَاهَةٍ/سَفَاهَة, أَهْلُ/أَهْل, لَكِنَّ, أَعْقَلَ, عِلْمُهَا/عِلْم,
//      وَلَا, يَنسَى/نَسِيَ, جَعَلَ, سُبُلًا/سَبِيل, السَّمَاءِ/سَمَاء, مَاءً/مَاء,
//      تَحَيَّرَ, غَضِبُوا/غَضِبَ, الْمُلُوكُ/مَلِك, كُلُّهُمْ/كُلّ, فَرَّ, إِلَٰهًا/
//      إِلَٰه, غَيْرِي/غَيْر, جَعَلَنَّكَ/جَعَلَ, نُورٍ/نُور, رَبِّهِ/رَبّ,
//      كَلَامَ/كَلَام, سَمَاوَاتِ/سَمَاء, مَنْ (qasas-v6/chapter-12.js)
//      are all already taught and are NOT re-listed in newWords here.
//
// 28 new words (عَجِزَ، تَخَلَّصَ، مُوقِن، مَجْلِس، اِسْتَمَعَ، قَطَعَ، مَجْنُون،
// مُرّ، أَثَارَ، بَال، قَرْن، سَبَّ، ضَلَّ، دَرَى، أَنشَأَ، مَهْد، سَلَكَ، أَنزَلَ،
// بَهَتَ، اتَّخَذَ، مَسْجُون، ثَانِي، أَغْضَبَ، أَلَا، كِتَاب، لَئِنْ، ثُمَّ، عِنْدَ).
//
// OPEN-ISSUE FIX (resumption, 2026-08-12): the prior pass on this chapter
// had flagged qs-v6-c21-005's لِمَنْ (lemma مَنْ, "who, whoever") as
// possibly-new because it wasn't found in known_lemmas.json at the time,
// and provisionally added it to newWords/lemmas without finishing the
// cross-check. Re-checked now against known_lemmas.json (which has since
// been regenerated to include this volume's own chapters 1-20): مَنْ is
// already taught in qasas-v6/chapter-12.js (qs-v6-c12-020's وَمَنْ,
// interrogative "who," same lemma spelling, same gloss "who, whoever").
// Resolution: RECONCILED to the existing lemma, not a new word. Removed
// مَنْ from this chapter's newWords array and lemmas{} object; the token
// at qs-v6-c21-005 keeps lemma: 'مَنْ' (correct spelling, matches
// chapter-12.js's own lemma exactly) with its own token-level gloss, so
// nothing else about that token needed to change. مَنْ now appears in the
// "already taught" shared-lexicon list below instead.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch21',
  title: { ar: 'الدَّعْوَةُ إِلَى اللَّهِ', en: 'The Call to Allah' },
  newWords: [
    'عَجِزَ', 'تَخَلَّصَ', 'مُوقِن', 'مَجْلِس', 'قَطَعَ', 'مَجْنُون',
    'مُرّ', 'أَثَارَ', 'بَال', 'قَرْن', 'سَبَّ', 'ضَلَّ', 'دَرَى', 'أَنشَأَ',
    'مَهْد', 'سَلَكَ', 'أَنزَلَ', 'بَهَتَ', 'اتَّخَذَ', 'مَسْجُون', 'أَغْضَبَ', 'كِتَاب', 'لَئِنْ', 'ثُمَّ', 'عِنْدَ',
  ],
  lemmas: {
    عَجِزَ: { gloss: 'to be unable, fail' },
    تَخَلَّصَ: { gloss: 'to get free, extricate oneself, escape' },
    مُوقِن: { gloss: 'certain, convinced' },
    مَجْلِس: { gloss: 'assembly, sitting, council' },
    قَطَعَ: { gloss: 'to cut, cut off' },
    مَجْنُون: { gloss: 'mad, crazy' },
    مُرّ: { gloss: 'bitter' },
    أَثَارَ: { gloss: 'to stir up, provoke' },
    بَال: { gloss: 'state, mind, condition (idiom: مَا بَالُ = "what is the matter with")' },
    قَرْن: { gloss: 'century, generation' },
    سَبَّ: { gloss: 'to insult, revile' },
    ضَلَّ: { gloss: 'to go astray, err' },
    دَرَى: { gloss: 'to know, perceive' },
    أَنشَأَ: { gloss: 'to begin, start (doing something)' },
    مَهْد: { gloss: 'cradle, bed spread out' },
    سَلَكَ: { gloss: 'to trace out, make (a path)' },
    أَنزَلَ: { gloss: 'to send down' },
    بَهَتَ: { gloss: 'to astonish, dumbfound (pass. to be astonished)' },
    اتَّخَذَ: { gloss: 'to take (for oneself)' },
    مَسْجُون: { gloss: 'imprisoned' },
    أَغْضَبَ: { gloss: 'to anger, make angry' },
    كِتَاب: { gloss: 'record, book' },
    لَئِنْ: { gloss: 'if indeed' },
    ثُمَّ: { gloss: 'then' },
    عِنْدَ: { gloss: 'with, at, in the possession of' },
  },
  paragraphs: [
    {
      lines: true,
      en: "Unable to answer Mūsā's rebuke, Pharaoh tried to change the subject: 'And what is this Lord of the worlds you keep mentioning?' Mūsā answered plainly -- Lord of the heavens and earth, if you would only be certain -- and Pharaoh, furious, turned to mock him before the court, calling him mad. Musa did not stop; he answered again -- Lord of the east and the west. Pharaoh grew more desperate with each exchange.",
      sentences: [
        {
          id: 'qs-v6-c21-001',
          ar: 'وَعَجِزَ فِرْعَوْنُ وَلَمْ يَجِدْ جَوَاباً، فَأَرَادَ أَنْ يَتَخَلَّصَ فَقَالَ:',
          en: 'Pharaoh was unable to answer and found no response, so he wanted to extricate himself and said:',
          tokens: [
            { surface: 'وَعَجِزَ', lemma: 'عَجِزَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ج ز', gloss: 'to be unable; and was unable' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدْ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to find; he find' },
            { surface: 'جَوَاباً', lemma: 'جَوَاب', pos: 'noun', features: 'indef.acc', gloss: 'an answer' },
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; so wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَتَخَلَّصَ', lemma: 'تَخَلَّصَ', pos: 'verb', features: 'impf.3ms', gloss: 'to extricate oneself; escape' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
          ],
        },
        {
          id: 'qs-v6-c21-002',
          ar: '﴿وَمَا رَبُّ الْعَالَمِينَ﴾ الَّذِي أَسْمَعُكَ تَذْكُرُهُ؟',
          en: '"And what is this Lord of the worlds that I hear you mention?"',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.nom', gloss: 'Lord of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'that, which' },
            { surface: 'أَسْمَعُكَ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.1s+2ms', gloss: 'to hear; I hear you' },
            { surface: 'تَذْكُرُهُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.2ms+3ms', gloss: 'to mention; you mention it' },
          ],
        },
        {
          id: 'qs-v6-c21-003',
          ar: '﴿قَالَ رَبُّ السَّمَاوَاتِ وَالْأَرْضِ وَمَا بَيْنَهُمَا إِن كُنتُم مُّوقِنِينَ﴾.',
          en: '"He said: Lord of the heavens and the earth and what is between them, if you would be certain."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.nom', gloss: 'Lord of' },
            { surface: 'السَّمَاوَاتِ', lemma: 'سَمَاء', pos: 'noun', features: 'pl.def.gen', gloss: 'the heavens' },
            { surface: 'وَالْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'conj+def.gen', gloss: 'and the earth' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'بَيْنَهُمَا', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+3d', gloss: 'between them both' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كُنتُم', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', root: 'ك و ن', gloss: 'to be; you all were' },
            { surface: 'مُّوقِنِينَ', lemma: 'مُوقِن', pos: 'adj', features: 'pl.acc', gloss: 'certain, convinced' },
          ],
        },
        {
          id: 'qs-v6-c21-004',
          ar: 'غَضِبَ فِرْعَوْنُ مِنْ هَذَا الْجَوَابِ وَأَرَادَ أَنْ يُغْضِبَ أَهْلَ الْمَجْلِسِ وَيَتَعَجَّبُوا.',
          en: 'Pharaoh grew angry at this answer, and wanted to anger the assembly and make them mock.',
          tokens: [
            { surface: 'غَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become angry; grew angry' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْجَوَابِ', lemma: 'جَوَاب', pos: 'noun', features: 'def.gen', gloss: 'the answer' },
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; and wanted' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُغْضِبَ', lemma: 'أَغْضَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to anger; he anger' },
            { surface: 'أَهْلَ', lemma: 'أَهْل', pos: 'noun', features: 'constr.acc', gloss: 'people of' },
            { surface: 'الْمَجْلِسِ', lemma: 'مَجْلِس', pos: 'noun', features: 'def.gen', gloss: 'the assembly' },
            { surface: 'وَيَتَعَجَّبُوا', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to be amazed, mock; and mock' },
          ],
        },
        {
          id: 'qs-v6-c21-005',
          ar: '﴿قَالَ لِمَنْ حَوْلَهُ أَلَا تَسْتَمِعُونَ﴾؟!',
          en: '"He said to those around him: Do you not listen?!"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'لِمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'prep+rel', gloss: 'to whoever, to those who' },
            { surface: 'حَوْلَهُ', lemma: 'حَوْلَ', pos: 'adv', features: 'adv+3ms', gloss: 'around him' },
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: 'do...not?' },
            { surface: 'تَسْتَمِعُونَ', lemma: 'اِسْتَمَعَ', pos: 'verb', features: 'impf.2mp', gloss: 'to listen; you all listen' },
          ],
        },
        {
          id: 'qs-v6-c21-006',
          ar: 'وَلَمْ يَقْطَعْ مُوسَى الْكَلَامَ بَلْ ضَرَبَ فِرْعَوْنُ ضَرْبَةً ثَانِيَةً.',
          en: 'Mūsā did not cut off his speech; rather Pharaoh struck a second blow.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَقْطَعْ', lemma: 'قَطَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to cut off; he cut off' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'الْكَلَامَ', lemma: 'كَلَام', pos: 'noun', features: 'def.acc', gloss: 'the speech' },
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'ضَرَبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to strike; struck' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'ضَرْبَةً', lemma: 'ضَرْبَة', pos: 'noun', features: 'indef.acc', gloss: 'a blow' },
            { surface: 'ثَانِيَةً', lemma: 'ثَانِي', pos: 'adj', features: 'indef.acc.f', gloss: 'second' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ فِرْعَوْنُ مُوسَى؟',
          options: ['مَا رَبُّ الْعَالَمِينَ', 'مَنْ أَنْتَ', 'أَيْنَ وُلِدْتَ'],
          answer: 0,
          qEn: 'What did Pharaoh ask Mūsā?',
          optionsEn: ['What is the Lord of the worlds?', 'Who are you?', 'Where were you born?'],
        },
      ],
    },
    {
      lines: true,
      en: "Pharaoh's anger only deepened -- he called Mūsā's messenger-hood madness, and Mūsā answered a third time: Lord of the east and the west. Cornered, Pharaoh tried a different trap, mocking the fate of \"earlier generations\" -- reasoning privately that whichever way Mūsā answered, he could turn the crowd against him. But Mūsā, wiser and guided by his Lord's light, deflected the trap entirely: that knowledge belongs to Allah alone, who never errs or forgets, who spread the earth and sent water from the sky. Baffled and humiliated before his own court, Pharaoh fell back on the oldest threat of kings -- he threatened to imprison Mūsā for worshiping any god but himself.",
      sentences: [
        {
          id: 'qs-v6-c21-007',
          ar: '﴿قَالَ رَبُّكُمْ وَرَبُّ آبَائِكُمُ الْأَوَّلِينَ﴾.',
          en: '"He said: Your Lord, and the Lord of your forefathers."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'رَبُّكُمْ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2mp', gloss: 'your Lord' },
            { surface: 'وَرَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'conj+constr.nom', gloss: 'and Lord of' },
            { surface: 'آبَائِكُمُ', lemma: 'أَب', pos: 'noun', features: 'pl.gen+2mp', root: 'أ ب و', gloss: 'your fathers' },
            { surface: 'الْأَوَّلِينَ', lemma: 'أَوَّل', pos: 'adj', features: 'pl.def.gen', gloss: 'the former, the first' },
          ],
        },
        {
          id: 'qs-v6-c21-008',
          ar: 'وَاشْتَدَّ غَضَبُ فِرْعَوْنَ وَلَمْ يَصْبِرْ وَقَالَ:',
          en: "Pharaoh's anger intensified and he could not be patient, and said:",
          tokens: [
            { surface: 'وَاشْتَدَّ', lemma: 'اِشْتَدَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to intensify; and intensified' },
            { surface: 'غَضَبُ', lemma: 'غَضَب', pos: 'noun', features: 'constr.nom', gloss: 'anger of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَصْبِرْ', lemma: 'صَبَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be patient; he be patient' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v6-c21-009',
          ar: '﴿إِنَّ رَسُولَكُمُ الَّذِي أُرْسِلَ إِلَيْكُمْ لَمَجْنُونٌ﴾.',
          en: '"Indeed your messenger who was sent to you is surely mad."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'رَسُولَكُمُ', lemma: 'رَسُول', pos: 'noun', features: 'acc+2mp', gloss: 'your messenger' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'أُرْسِلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to send; was sent' },
            { surface: 'إِلَيْكُمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+2mp', gloss: 'to you all' },
            { surface: 'لَمَجْنُونٌ', lemma: 'مَجْنُون', pos: 'adj', features: 'part+indef.nom', gloss: 'surely mad' },
          ],
        },
        {
          id: 'qs-v6-c21-010',
          ar: 'وَلَمْ يَقْطَعْ مُوسَى الْكَلَامَ وَضَرَبَ فِرْعَوْنُ ضَرْبَةً ثَالِثَةً.',
          en: 'Mūsā did not cut off his speech, and Pharaoh struck a third blow.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَقْطَعْ', lemma: 'قَطَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to cut off; he cut off' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'الْكَلَامَ', lemma: 'كَلَام', pos: 'noun', features: 'def.acc', gloss: 'the speech' },
            { surface: 'وَضَرَبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to strike; and struck' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'ضَرْبَةً', lemma: 'ضَرْبَة', pos: 'noun', features: 'indef.acc', gloss: 'a blow' },
            { surface: 'ثَالِثَةً', lemma: 'ثَالِث', pos: 'adj', features: 'indef.acc.f', gloss: 'third' },
          ],
        },
        {
          id: 'qs-v6-c21-011',
          ar: '﴿قَالَ رَبُّ الْمَشْرِقِ وَالْمَغْرِبِ وَمَا بَيْنَهُمَا إِن كُنتُمْ تَعْقِلُونَ﴾.',
          en: '"He said: Lord of the east and the west and what is between them, if you understand."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'رَبُّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.nom', gloss: 'Lord of' },
            { surface: 'الْمَشْرِقِ', lemma: 'مَشْرِق', pos: 'noun', features: 'def.gen', gloss: 'the east' },
            { surface: 'وَالْمَغْرِبِ', lemma: 'مَغْرِب', pos: 'noun', features: 'conj+def.gen', gloss: 'and the west' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'بَيْنَهُمَا', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+3d', gloss: 'between them both' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كُنتُمْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', root: 'ك و ن', gloss: 'to be; you all were' },
            { surface: 'تَعْقِلُونَ', lemma: 'عَقَلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to reason; you all reason' },
          ],
        },
        {
          id: 'qs-v6-c21-012',
          ar: 'وَأَرَادَ فِرْعَوْنُ أَنْ يَشْغَلَ مُوسَى عَنْ هَذَا الْمَوْضُوعِ الْمُرِّ.',
          en: 'Pharaoh wanted to distract Mūsā from this bitter subject.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; and wanted' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَشْغَلَ', lemma: 'شَغَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to distract; he distract' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْمَوْضُوعِ', lemma: 'مَوْضُوع', pos: 'noun', features: 'def.gen', gloss: 'the topic, subject' },
            { surface: 'الْمُرِّ', lemma: 'مُرّ', pos: 'adj', features: 'def.gen', gloss: 'bitter' },
          ],
        },
        {
          id: 'qs-v6-c21-013',
          ar: 'وَأَرَادَ فِرْعَوْنُ أَنْ يُثِيرَ غَضَبَ مَلَئِهِ.',
          en: "Pharaoh wanted to stir up his assembly's anger.",
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; and wanted' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُثِيرَ', lemma: 'أَثَارَ', pos: 'verb', features: 'impf.3ms', gloss: 'to stir up; he stir up' },
            { surface: 'غَضَبَ', lemma: 'غَضَب', pos: 'noun', features: 'constr.acc', gloss: 'anger of' },
            { surface: 'مَلَئِهِ', lemma: 'مَلَأ', pos: 'noun', features: 'gen+3ms', gloss: 'his assembly' },
          ],
        },
        {
          id: 'qs-v6-c21-014',
          ar: 'فَقَالَ: ﴿فَمَا بَالُ الْقُرُونِ الْأُولَى﴾؟!',
          en: '"So he said: Then what is the state of the earlier generations?!"',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'فَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'so what' },
            { surface: 'بَالُ', lemma: 'بَال', pos: 'noun', features: 'constr.nom', gloss: 'the state of' },
            { surface: 'الْقُرُونِ', lemma: 'قَرْن', pos: 'noun', features: 'pl.def.gen', gloss: 'the generations' },
            { surface: 'الْأُولَى', lemma: 'أَوَّل', pos: 'adj', features: 'def.f', gloss: 'the earlier, the first' },
          ],
        },
        {
          id: 'qs-v6-c21-015',
          ar: 'قَالَ فِرْعَوْنُ فِي نَفْسِهِ: إِذَا قَالَ مُوسَى إِنَّهُمْ كَانُوا عَلَى الْحَقِّ.',
          en: "Pharaoh said to himself: 'If Mūsā says they were upon the truth --",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, to' },
            { surface: 'نَفْسِهِ', lemma: 'نَفْس', pos: 'noun', features: 'gen+3ms', gloss: 'himself' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; says' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; they were' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'الْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'def.gen', gloss: 'the truth' },
          ],
        },
        {
          id: 'qs-v6-c21-016',
          ar: 'قُلْتُ: فَإِنَّهُمْ كَانُوا يَعْبُدُونَ الْأَصْنَامَ!',
          en: "-- I would say: but they used to worship idols!'",
          tokens: [
            { surface: 'قُلْتُ', lemma: 'قَالَ', pos: 'verb', features: 'perf.1s', root: 'ق و ل', gloss: 'to say; I would say' },
            { surface: 'فَإِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'then indeed they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; they were' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; they worship' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v6-c21-017',
          ar: 'وَإِذَا قَالَ مُوسَى إِنَّهُمْ كَانُوا فِي ضَلَالَةٍ وَسَفَاهَةٍ،',
          en: 'And if Mūsā says they were in error and folly,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj+conj', gloss: 'and if' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; says' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; they were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ضَلَالَةٍ', lemma: 'ضَلَالَة', pos: 'noun', features: 'indef.gen', gloss: 'error' },
            { surface: 'وَسَفَاهَةٍ', lemma: 'سَفَاهَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and folly' },
          ],
        },
        {
          id: 'qs-v6-c21-018',
          ar: 'غَضِبَ أَهْلُ الْمَجْلِسِ وَقَالُوا إِنَّ مُوسَى سَبَّ آبَاءَنَا.',
          en: 'the assembly grows angry and says Mūsā insulted our fathers.',
          tokens: [
            { surface: 'غَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become angry; grows angry' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'constr.nom', gloss: 'people of' },
            { surface: 'الْمَجْلِسِ', lemma: 'مَجْلِس', pos: 'noun', features: 'def.gen', gloss: 'the assembly' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'to say; and say' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'سَبَّ', lemma: 'سَبَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to insult; insulted' },
            { surface: 'آبَاءَنَا', lemma: 'أَب', pos: 'noun', features: 'pl.acc+1p', root: 'أ ب و', gloss: 'our fathers' },
          ],
        },
        {
          id: 'qs-v6-c21-019',
          ar: 'وَلَكِنَّ مُوسَى كَانَ أَعْقَلَ مِنْ فِرْعَوْنَ وَكَانَ مُوسَى عَلَى نُورٍ مِنْ رَبِّهِ،',
          en: 'But Mūsā was wiser than Pharaoh, and Mūsā was upon light from his Lord,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'أَعْقَلَ', lemma: 'أَعْقَلَ', pos: 'adj', features: 'acc', gloss: 'more sensible' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'نُورٍ', lemma: 'نُور', pos: 'noun', features: 'indef.gen', gloss: 'a light' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v6-c21-020',
          ar: 'فَقَالَ:',
          en: 'so he said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
          ],
        },
        {
          id: 'qs-v6-c21-021',
          ar: '﴿عِلْمُهَا عِندَ رَبِّي فِي كِتَابٍ لَا يَضِلُّ رَبِّي وَلَا يَنسَى﴾.',
          en: '"Its knowledge is with my Lord in a Record; my Lord neither errs nor forgets."',
          tokens: [
            { surface: 'عِلْمُهَا', lemma: 'عِلْم', pos: 'noun', features: 'nom+3fs', gloss: 'knowledge of it' },
            { surface: 'عِندَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كِتَابٍ', lemma: 'كِتَاب', pos: 'noun', features: 'indef.gen', gloss: 'a record' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَضِلُّ', lemma: 'ضَلَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to err; he err' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَنسَى', lemma: 'نَسِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to forget; he forget' },
          ],
        },
        {
          id: 'qs-v6-c21-022',
          ar: 'ثُمَّ أَنشَأَ مُوسَى يَقُولُ مَا كَانَ فِرْعَوْنُ يَفِرُّ مِنْهُ وَيَتَخَلَّصُ:',
          en: 'Then Mūsā began speaking of what Pharaoh kept fleeing from and trying to escape:',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'أَنشَأَ', lemma: 'أَنشَأَ', pos: 'verb', features: 'perf.3ms', gloss: 'to begin; began' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; saying' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'يَفِرُّ', lemma: 'فَرَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to flee; he flee' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from it' },
            { surface: 'وَيَتَخَلَّصُ', lemma: 'تَخَلَّصَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to escape; and escape' },
          ],
        },
        {
          id: 'qs-v6-c21-023',
          ar: '﴿لَا يَضِلُّ رَبِّي وَلَا يَنسَى الَّذِي جَعَلَ لَكُمُ الْأَرْضَ مَهْدًا وَسَلَكَ لَكُمْ فِيهَا سُبُلًا وَأَنزَلَ مِنَ السَّمَاءِ مَاءً﴾.',
          en: '"My Lord neither errs nor forgets -- He who made the earth for you a bed, traced for you paths in it, and sent down water from the sky."',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَضِلُّ', lemma: 'ضَلَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to err; he err' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَنسَى', lemma: 'نَسِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to forget; he forget' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'جَعَلَ', lemma: 'جَعَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to make; made' },
            { surface: 'لَكُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you all' },
            { surface: 'الْأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the earth' },
            { surface: 'مَهْدًا', lemma: 'مَهْد', pos: 'noun', features: 'indef.acc', gloss: 'a cradle, a bed' },
            { surface: 'وَسَلَكَ', lemma: 'سَلَكَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to trace; and traced' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you all' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'سُبُلًا', lemma: 'سَبِيل', pos: 'noun', features: 'pl.indef.acc', gloss: 'paths' },
            { surface: 'وَأَنزَلَ', lemma: 'أَنزَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send down; and sent down' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'the sky' },
            { surface: 'مَاءً', lemma: 'مَاء', pos: 'noun', features: 'indef.acc', gloss: 'water' },
          ],
        },
        {
          id: 'qs-v6-c21-024',
          ar: 'وَتَحَيَّرَ فِرْعَوْنُ وَبُهِتَ وَلَمْ يَدْرِ مَا يَقُولُ فَقَالَ مَا تَقُولُهُ الْمُلُوكُ كُلُّهُمْ إِذَا عَجَزُوا وَغَضِبُوا.',
          en: 'Pharaoh grew bewildered and dumbfounded and did not know what to say, so he said what all kings say when they are helpless and angry.',
          tokens: [
            { surface: 'وَتَحَيَّرَ', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be bewildered; and was bewildered' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَبُهِتَ', lemma: 'بَهَتَ', pos: 'verb', features: 'conj+pass+perf.3ms', gloss: 'to dumbfound; and was dumbfounded' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَدْرِ', lemma: 'دَرَى', pos: 'verb', features: 'impf.3ms', gloss: 'to know; he know' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', root: 'ق و ل', gloss: 'to say; to say' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَقُولُهُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3fs+3ms', root: 'ق و ل', gloss: 'to say; it say it' },
            { surface: 'الْمُلُوكُ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.nom', gloss: 'the kings' },
            { surface: 'كُلُّهُمْ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3mp', gloss: 'all of them' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'عَجَزُوا', lemma: 'عَجِزَ', pos: 'verb', features: 'perf.3mp', root: 'ع ج ز', gloss: 'to be unable; they fail' },
            { surface: 'وَغَضِبُوا', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to become angry; and become angry' },
          ],
        },
        {
          id: 'qs-v6-c21-025',
          ar: '﴿قَالَ لَئِنِ اتَّخَذْتَ إِلَٰهًا غَيْرِي لَأَجْعَلَنَّكَ مِنَ الْمَسْجُونِينَ﴾.',
          en: '"He said: If indeed you take a god other than me, I will surely make you among the imprisoned."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'لَئِنِ', lemma: 'لَئِنْ', pos: 'conj', features: 'conj', gloss: 'if indeed' },
            { surface: 'اتَّخَذْتَ', lemma: 'اتَّخَذَ', pos: 'verb', features: 'perf.2ms', gloss: 'to take; you took' },
            { surface: 'إِلَٰهًا', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.acc', gloss: 'a god' },
            { surface: 'غَيْرِي', lemma: 'غَيْر', pos: 'noun', features: 'gen+1s', gloss: 'other than me' },
            { surface: 'لَأَجْعَلَنَّكَ', lemma: 'جَعَلَ', pos: 'verb', features: 'part+impf.1s+2ms', gloss: 'to make; I will surely make you' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْمَسْجُونِينَ', lemma: 'مَسْجُون', pos: 'adj', features: 'pl.def.gen', gloss: 'the imprisoned' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا هَدَّدَ فِرْعَوْنُ مُوسَى فِي آخِرِ الْمَجْلِسِ؟',
          options: ['أَنْ يَجْعَلَهُ مِنَ الْمَسْجُونِينَ', 'أَنْ يَقْتُلَهُ', 'أَنْ يَطْرُدَهُ مِنْ مِصْرَ'],
          answer: 0,
          qEn: 'What did Pharaoh threaten Mūsā with at the end of the council?',
          optionsEn: ['To make him one of the imprisoned', 'To kill him', 'To expel him from Egypt'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَاشْتَدَّ',
        post: 'فِرْعَوْنَ وَلَمْ يَصْبِرْ.',
        en: "Pharaoh's anger intensified and he could not be patient.",
        options: ['غَضَبُ', 'غَضَبَ', 'غَضَبٍ', 'غَاضِبُ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of اِشْتَدَّ, first term of the construct غَضَبُ فِرْعَوْنَ.',
          'Accusative -- wrong case; the subject of a verb takes the nominative.',
          'Genitive -- wrong case for the same reason.',
          'A different word entirely ("angry") -- not the noun "anger" needed here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَمْ يَقْطَعْ مُوسَى الْكَلَامَ بَلْ ضَرَبَ',
        post: 'ضَرْبَةً ثَانِيَةً.',
        en: 'Mūsā did not cut off his speech; rather Pharaoh struck a second blow.',
        options: ['فِرْعَوْنُ', 'فِرْعَوْنَ', 'فِرْعَوْنٍ', 'لِفِرْعَوْنَ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of ضَرَبَ, matching the taught pattern.',
          'Accusative -- wrong case; the subject of a verb takes the nominative.',
          'Genitive -- wrong case for the same reason.',
          'With a preposition -- wrong; there is no preposition governing the subject here.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'غَضِبَ فِرْعَوْنُ',
        pre: '',
        post: '',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['غَضِبْتُ', 'غَضِبَ', 'غَضِبْتَ', 'غَضِبْنَا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'غَضِبَ فِرْعَوْنُ',
        pre: '',
        post: '',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['غَضِبُوا', 'غَضِبَ', 'غَضِبْتُ', 'غَضِبْتُمْ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd masculine plural -- you all (m.).',
        ],
      },
    ],
  },
};

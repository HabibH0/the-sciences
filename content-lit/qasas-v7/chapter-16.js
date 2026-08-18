// قَصَصُ النَّبِيِّينَ, volume 7 (Mūsā vs. Pharaoh through the Exodus), chapter
// 16 -- ١٦ - الْعِقَابُ ("The Punishment"). Starts at the ch16 heading box
// that appears near the bottom of page 199 (chapter-15.js ends immediately
// before it); only that heading's very first sentence
// (qs-v7-c16-001, "وَلَمَّا أَخْبَرَ اللَّهُ مُوسَى...") is itself on page 199 --
// the rest of the chapter runs through page 200 and page 201, ending
// immediately before the ch17 heading box "١٧ - جُبْنُ بَنِي إِسْرَائِيلَ" that
// appears at the top of page 202. Transcribed by hand from the scan
// (vision OCR) against ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// Qur'anic quotations, transcribed in full and tokenized normally per the
// current task brief (no fragmentation): Ta-Ha 20:92-93 (qs-v7-c16-003/004
// -- the source prints these as two separate ayah-closed quotations back to
// back, with verse-number glyphs ٩٢/٩٣ between them; those glyphs are not
// transcribed, matching this corpus's established convention, and the two
// ayat are kept as two separate sentence entries rather than merged), Ta-Ha
// 20:94 (006), cf. al-A'raf 7:150 (007), al-A'raf 7:151 (008), Ta-Ha 20:96
// (012), Ta-Ha 20:97 (013), al-Baqarah 2:54 (024). Several of these are
// short (4-5 tokens) and carry a case-marked common noun -- left as
// ordinary sentences per instruction rather than fragmented
// (qs-v7-c16-004, 007, 012).
//
// `workshop.cloze`/`workshop.shift` are built from this chapter's own
// striking anaphoric pattern -- "ثُمَّ الْتَفَتَ مُوسَى إِلَى..." recurs three
// times on page 201 (qs-v7-c16-009, 020, 023), redirected at three
// different targets in turn: al-Sāmirī, the cursed calf, and the Children
// of Israel. cloze blanks the target noun (case-ending focus, one item per
// target); shift reconjugates the verb الْتَفَتَ across persons on a single
// base clause. Neither drill touches a Qur'anic quotation.
//
// Grammar / lexical notes:
//   -- عِجْل and السَّامِرِيّ, both introduced in chapter-15.js (this same
//      volume, the immediately preceding chapter), are NOT re-listed in
//      this chapter's newWords even though both recur heavily here --
//      they are simply reused lemmas, matching the base rule that newWords
//      records introduction, not every occurrence.
//   -- يَاهَارُونُ (qs-v7-c16-003) and يَٰقَوْمِ (024) are each tokenized as
//      ONE fused token (particle + noun), following the precedent already
//      established for يَٰقَوْمِ in qasas-v7/chapter-01.js (features
//      'part+gen+1s' there). يَاهَارُونُ has no attached pronoun, so it is
//      tagged 'part+nom' instead -- the vocative of a bare proper noun
//      takes the nominative ending, with no separate "vocative" atom
//      available in CHAPTER-FORMAT.md's feature grammar.
//   -- يَا سَامِرِيُّ (qs-v7-c16-010), by contrast, drops the definite
//      article that السَّامِرِيّ normally carries -- a genuine feature of
//      Arabic vocative syntax for a nisba-epithet used as a name (compare
//      يا رَجُلُ vs. الرَّجُلُ). The lemma stays 'السَّامِرِيّ' (the form used
//      everywhere else in the story) even though this one surface token
//      lacks the article; lemma normalization does not require the surface
//      to carry every morpheme the citation form does.
//   -- رَبِّ (qs-v7-c16-008, "O my Lord") reuses the already-taught lemma
//      رَبّ with features 'acc+1s', matching the exact precedent already
//      set across qasas-v4/ch7, v6/ch24, v9/ch13, v11/ch3/5/6/7 for this
//      same vocative-by-omission construction (no separate يَا, the
//      construct's own -ي is elided and the kasra alone signals "my").
//   -- كَذَلِكَ/هَكَذَا (qs-v7-c16-012, 025, 027) are each their OWN already-
//      taught adverb lemma (qasas-v7 ch1's own كَذَلِكَ; qasas-v6 ch3/8/11
//      etc.'s هَكَذَا) -- not folded under the demonstrative ذَلِكَ, which
//      the corpus keeps structurally distinct even though كَذَلِكَ is
//      historically كَ + ذَلِكَ. Confirmed by direct grep before assuming.
//   -- كَادَ (qs-v7-c16-007's وَكَادُوا) is lemmatized here in its standard
//      dictionary (3ms perfect) citation form, not reusing the only prior
//      instance's non-standard lemma spelling ('يكاد', qiraah-v2 ch47,
//      which cites the word under its own 3ms-imperfect surface form
//      instead of a normalized lemma). Treated as already encountered
//      pedagogically and NOT re-added to newWords, but flagging the
//      mismatch rather than silently asserting the two spellings are
//      guaranteed to resolve to "the same lemma" for the app's own
//      unknown-word tracking, since that tracking matches on the literal
//      lemma string.
//   -- إِحْرَاق (qs-v7-c16-021, the masdar "burning") is tagged as its own
//      new nominal lemma, kept distinct from the new verb أَحْرَقَ, matching
//      this corpus's general practice of giving a verb's masdar its own
//      lemma (e.g. ذَبَحَ/ذَبْح, qasas-v1 ch14) rather than collapsing verb
//      and noun together.
//   -- اِتِّخَاذ (qs-v7-c16-024's بِٱتِّخَاذِكُمُ) is likewise tagged as its own
//      new nominal lemma, distinct from the already-taught verb اِتَّخَذَ,
//      matching the precedent of اِتِّبَاع kept distinct from اتَّبَعَ
//      (qiraah-v2 ch39 vs. qasas-v2 ch11).
//   -- عِقَاب, this chapter's own title word, turns out to already be
//      taught (qasas-v1 ch6, qasas-v4 ch3) -- confirmed by direct grep
//      before assuming a title word is automatically new.
//
// Shared lexicon check (grepped against lexicon.txt AND directly against
// the live content-lit/ tree, since vols 4-12 are being transcribed in
// parallel and are not yet reflected in the lexicon.txt snapshot):
// لَمَّا، أَخْبَرَ (qasas-v2 ch1)، اللَّه، مُوسَى/فِرْعَوْن (qasas-v7 ch1)، أَنَّ،
// أَضَلَّ (qasas-v7 ch1)، السَّامِرِيّ/عِجْل (qasas-v7 ch15, this volume)، رَجَعَ
// (qasas-v1 ch5)، إِلى، قَوْم، غَضِبَ (qasas-v1 ch3/10)، عَلَى، لِ، أَخ
// (qiraah-v1 ch26)، هَارُون (qasas-v6 ch19)، قَالَ، يَا، مَا، مَنَعَ (qasas-v1
// ch2)، إِذْ (qasas-v1 ch9)، رَأَى، ضَلَّ (qiraah-v2 ch54)، اتَّبَعَ (qasas-v2
// ch11)، عَصَى (qiraah-v2 ch38)، أَمْر (qasas-v2 ch2)، اِعْتَذَرَ (qasas-v6
// ch20)، خَشِيَ (qasas-v6 ch19)، أَنْ، بَيْنَ (qasas-v3 ch20)، لَمْ، إِنَّ،
// اِسْتَضْعَفَ (qasas-v6 ch5)، كَادَ (qiraah-v2 ch47 -- see note above)،
// قَتَلَ (qasas-v1 ch10)، رَبّ، غَفَرَ (qasas-v2 ch22, v6 ch12/25, v3
// ch3/16/21, v12 ch41)، رَحْمَة (qasas-v2 ch9)، أَنْتَ، أَرْحَمُ/رَاحِم (qasas-v2
// ch19)، ثُمَّ، اِلْتَفَتَ (qasas-v2 ch20)، فَتَنَ (qasas-v12 ch23)، نَفْس (qasas-v1
// ch2 and many others)، ذَهَبَ (qasas-v1 ch11)، حَيَاة (qiraah-v2 ch51)،
// عَاقَبَ->new (see newWords)، وَحْدَ (qasas-v6 ch17, v9 ch7, v12 ch41)،
// مَشَى (qasas-v1 ch5, qasas-v3 ch8/18/22)، عَاشَ (qasas-v3 ch1)، أَيّ
// (qiraah-v2 ch38)، أَكْبَر (qasas-v1 ch4)، هَذَا، الَّذِي (qasas-v1 ch9)، مِنَ،
// النَّاس، أَلْف (qasas-v3 ch17)، شِرْك (qasas-v2 ch11)، عَبْد (qasas-v2 ch9)،
// دَعَا (qasas-v1 ch8)، أَرْض (qasas-v1 ch13)، كَانَ، كُلّ (qasas-v1 ch10)،
// سِجْن (qasas-v2 ch8)، أَمَرَ (qasas-v1 ch8)، بَحْر (qasas-v2 ch9)، رَأَى،
// مَصِير (qasas-v7 ch1)، عَبَدَ، ضَعْف (qasas-v8 ch9, v12 ch4/36)، عَجْز
// (qasas-v10 ch3, v8 ch9, v12 ch3)، ظَلَمَ (qasas-v6 ch2, v5 ch3/9/13, v4
// ch3, v9 ch13/14)، أَنفُس/نَفْس، تَابَ (qasas-v3 ch8)، بَارِئ (qيraah-v2
// ch34)، خَيْر (qasas-v2 ch9)، عِنْدَ، كَذَلِكَ/هَكَذَا (see note above)، فَعَلَ
// (qasas-v7 ch1)، فَرَّقَ (qasas-v12 ch8/23, v10 ch5)، وَجَبَ->new (see
// newWords)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 22 new words (غَضْبَان، أَسِف، خَطْب، اِعْتَرَفَ، جُرْم، سَوَّلَ، مِسَاس، عَاقَبَ،
// اِنْفِرَاد، وَحْشِيّ، أَلِفَ، نَجَّسَ، وَجَبَ، تَقَذَّرَ، نَبَذَ، مُذْنِب، نَفَضَ، أَحْرَقَ،
// إِحْرَاق، أَدْخَلَ، رَقَبَ، اِتِّخَاذ) -- unusually high, but this chapter is
// genuinely vocabulary-dense: it turns over its whole cast (Hārūn's
// defense, the Sāmirī's punishment, the calf's burning) inside three pages
// dense with two extended Qur'anic passages.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch16',
  title: { ar: 'الْعِقَابُ', en: 'The Punishment' },
  newWords: [
    'غَضْبَان', 'أَسِف', 'خَطْب', 'اِعْتَرَفَ', 'جُرْم', 'سَوَّلَ', 'مِسَاس', 'عَاقَبَ',
    'اِنْفِرَاد', 'وَحْشِيّ', 'أَلِفَ', 'نَجَّسَ', 'وَجَبَ', 'تَقَذَّرَ', 'نَبَذَ', 'مُذْنِب',
    'نَفَضَ', 'أَحْرَقَ', 'إِحْرَاق', 'أَدْخَلَ', 'رَقَبَ', 'اِتِّخَاذ',
  ],
  lemmas: {
    'غَضْبَان': { gloss: 'angry' },
    'أَسِف': { gloss: 'grieved, sorrowful' },
    'خَطْب': { gloss: 'matter, affair, business ("مَا خَطْبُكَ؟" = "what is the matter with you?")' },
    'اِعْتَرَفَ': { gloss: 'to confess, admit' },
    'جُرْم': { gloss: 'crime, guilt' },
    'سَوَّلَ': { gloss: 'to entice, make seem attractive' },
    'مِسَاس': { gloss: 'touching, contact (idiom لَا مِسَاسَ "no touching")' },
    'عَاقَبَ': { gloss: 'to punish' },
    'اِنْفِرَاد': { gloss: 'isolation, solitude' },
    'وَحْشِيّ': { gloss: 'wild, beast-like' },
    'أَلِفَ': { gloss: 'to be familiar with, grow accustomed to' },
    'نَجَّسَ': { gloss: 'to defile, make impure' },
    'وَجَبَ': { gloss: 'to be obligatory, necessary' },
    'تَقَذَّرَ': { gloss: 'to find disgusting, loathe' },
    'نَبَذَ': { gloss: 'to cast off, reject' },
    'مُذْنِب': { gloss: 'guilty one, sinner' },
    'نَفَضَ': { gloss: 'to shake off, scatter' },
    'أَحْرَقَ': { gloss: 'to burn' },
    'إِحْرَاق': { gloss: 'burning (masdar of أَحْرَقَ)' },
    'أَدْخَلَ': { gloss: 'to admit, bring in' },
    'رَقَبَ': { gloss: 'to watch over, heed' },
    'اِتِّخَاذ': { gloss: 'the taking up, adopting (masdar of اِتَّخَذَ)' },
  },
  paragraphs: [
    {
      en: "When Allah told Mūsā that al-Sāmirī had led the Children of Israel astray, he returned to his people angry and grieved. He was angry with his people, and angry for Allah's sake with his brother Hārūn: 'He said: O Hārūn, what kept you, when you saw them going astray, from following me? Did you then disobey my order?'",
      sentences: [
        {
          id: 'qs-v7-c16-001',
          ar: 'وَلَمَّا أَخْبَرَ اللَّهُ مُوسَى أَنَّ بَنِي إِسْرَائِيلَ أَضَلَّهُمُ السَّامِرِيُّ رَجَعَ إِلى قَوْمِهِ غَضْبَانَ أَسِفاً.',
          en: 'When Allah told Mūsā that al-Sāmirī had led the Children of Israel astray, he returned to his people angry and grieved.',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'أَخْبَرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to inform, tell; told' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'أَضَلَّهُمُ', lemma: 'أَضَلَّ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to lead astray; led them astray' },
            { surface: 'السَّامِرِيُّ', lemma: 'السَّامِرِيّ', pos: 'proper', features: 'nom', gloss: 'al-Sāmirī' },
            { surface: 'رَجَعَ', lemma: 'رَجَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to return; returned' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'غَضْبَانَ', lemma: 'غَضْبَان', pos: 'adj', features: 'indef.acc', root: 'غ ض ب', gloss: 'angry' },
            { surface: 'أَسِفاً', lemma: 'أَسِف', pos: 'adj', features: 'indef.acc', root: 'أ س ف', gloss: 'grieved' },
          ],
        },
        {
          id: 'qs-v7-c16-002',
          ar: 'وَغَضِبَ عَلى قَوْمِهِ وَغَضِبَ لِلَّهِ عَلى أَخِيهِ هَارُونَ.',
          en: 'He was angry with his people, and angry for Allah\'s sake with his brother Hārūn.',
          tokens: [
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become angry; and was angry' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'وَغَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and was angry' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: "for Allah's sake" },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'أَخِيهِ', lemma: 'أَخ', pos: 'noun', features: 'gen+3ms', gloss: 'his brother' },
            { surface: 'هَارُونَ', lemma: 'هَارُون', pos: 'proper', features: 'gen', gloss: 'Hārūn' },
          ],
        },
        {
          // Ta-Ha 20:92.
          id: 'qs-v7-c16-003',
          ar: '﴿قَالَ يَاهَارُونُ مَا مَنَعَكَ إِذْ رَأَيْتَهُمْ ضَلُّوٓاْ﴾',
          en: '"He said: O Hārūn, what kept you, when you saw them going astray,"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'يَاهَارُونُ', lemma: 'هَارُون', pos: 'proper', features: 'part+nom', gloss: 'O Hārūn' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'مَنَعَكَ', lemma: 'مَنَعَ', pos: 'verb', features: 'perf.3ms+2ms', gloss: 'to prevent, keep; kept you' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'رَأَيْتَهُمْ', lemma: 'رَأَى', pos: 'verb', features: 'perf.2ms+3mp', root: 'ر أ ي', gloss: 'to see; you saw them' },
            { surface: 'ضَلُّوٓاْ', lemma: 'ضَلَّ', pos: 'verb', features: 'perf.3mp', gloss: 'to go astray; going astray' },
          ],
        },
        {
          // Ta-Ha 20:93.
          id: 'qs-v7-c16-004',
          ar: '﴿أَلَّا تَتَّبِعَنِ أَفَعَصَيْتَ أَمْرِي﴾.',
          en: '"from following me? Did you then disobey my order?"',
          tokens: [
            { surface: 'أَلَّا', lemma: 'أَنْ', pos: 'part', features: 'part+neg', gloss: 'that...not' },
            { surface: 'تَتَّبِعَنِ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.2ms+1s', gloss: 'to follow; you follow me' },
            { surface: 'أَفَعَصَيْتَ', lemma: 'عَصَى', pos: 'verb', features: 'part+conj+perf.2ms', gloss: 'to disobey; did you then disobey' },
            { surface: 'أَمْرِي', lemma: 'أَمْر', pos: 'noun', features: 'acc+1s', gloss: 'my order' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا رَجَعَ مُوسَى إِلى قَوْمِهِ غَضْبَانَ أَسِفاً؟',
          options: ['لِأَنَّ اللَّهَ أَخْبَرَهُ أَنَّ السَّامِرِيَّ أَضَلَّ بَنِي إِسْرَائِيلَ', 'لِأَنَّهُ نَسِيَ الْأَلْوَاحَ عِنْدَ اللَّهِ', 'لِأَنَّ فِرْعَوْنَ طَارَدَهُ'],
          answer: 0,
          qEn: 'Why did Mūsā return to his people angry and grieved?',
          optionsEn: ['Because Allah told him that al-Sāmirī had led the Children of Israel astray', 'Because he had forgotten the Tablets before Allah', 'Because Pharaoh was pursuing him'],
        },
      ],
    },
    {
      en: "Hārūn excused himself and said: 'I feared you would say, You have caused division among the Children of Israel, and you did not heed my word. The people overpowered me and almost killed me.' He said: 'My Lord, forgive me and my brother, and admit us into Your mercy -- You are the most merciful of the merciful.'",
      sentences: [
        {
          id: 'qs-v7-c16-005',
          ar: 'وَاعْتَذَرَ هَارُونُ وَقَالَ',
          en: 'Hārūn excused himself and said:',
          tokens: [
            { surface: 'وَاعْتَذَرَ', lemma: 'اِعْتَذَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to apologize, excuse oneself; and excused himself' },
            { surface: 'هَارُونُ', lemma: 'هَارُون', pos: 'proper', features: 'nom', gloss: 'Hārūn' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
          ],
        },
        {
          // Ta-Ha 20:94.
          id: 'qs-v7-c16-006',
          ar: '﴿إِنِّي خَشِيتُ أَنْ تَقُولَ فَرَّقْتَ بَيْنَ بَنِيٓ إِسْرَٰءِيلَ وَلَمْ تَرْقُبْ قَوْلِي﴾.',
          en: '"I feared you would say: You have caused division among the Children of Israel, and you did not heed my word."',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'خَشِيتُ', lemma: 'خَشِيَ', pos: 'verb', features: 'perf.1s', gloss: 'to fear; I feared' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تَقُولَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.2ms', gloss: 'to say; you say' },
            { surface: 'فَرَّقْتَ', lemma: 'فَرَّقَ', pos: 'verb', features: 'perf.2ms', gloss: 'to divide, cause division; you caused division' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'بَنِيٓ', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَٰءِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَرْقُبْ', lemma: 'رَقَبَ', pos: 'verb', features: 'impf.2ms', root: 'ر ق ب', gloss: 'to watch over, heed; heed' },
            { surface: 'قَوْلِي', lemma: 'قَوْل', pos: 'noun', features: 'acc+1s', gloss: 'my word' },
          ],
        },
        {
          // cf. al-A'raf 7:150.
          id: 'qs-v7-c16-007',
          ar: '﴿إِنَّ ٱلْقَوْمَ ٱسْتَضْعَفُونِي وَكَادُوا۟ يَقْتُلُونَنِي﴾.',
          en: '"The people overpowered me and almost killed me."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ٱلْقَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'def.acc', root: 'ق و م', gloss: 'the people' },
            { surface: 'ٱسْتَضْعَفُونِي', lemma: 'اِسْتَضْعَفَ', pos: 'verb', features: 'perf.3mp+1s', gloss: 'to overpower, consider weak; overpowered me' },
            { surface: 'وَكَادُوا۟', lemma: 'كَادَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to almost (do); and almost' },
            { surface: 'يَقْتُلُونَنِي', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3mp+1s', gloss: 'to kill; kill me' },
          ],
        },
        {
          // al-A'raf 7:151.
          id: 'qs-v7-c16-008',
          ar: '﴿قَالَ رَبِّ ٱغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ وَأَنتَ أَرْحَمُ ٱلرَّٰحِمِينَ﴾.',
          en: '"He said: My Lord, forgive me and my brother, and admit us into Your mercy -- You are the most merciful of the merciful."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'O my Lord' },
            { surface: 'ٱغْفِرْ', lemma: 'غَفَرَ', pos: 'verb', features: 'imp.2ms', gloss: 'to forgive; forgive!' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'me' },
            { surface: 'وَلِأَخِي', lemma: 'أَخ', pos: 'noun', features: 'conj+prep+gen+1s', gloss: 'and my brother' },
            { surface: 'وَأَدْخِلْنَا', lemma: 'أَدْخَلَ', pos: 'verb', features: 'conj+imp.2ms+1p', root: 'د خ ل', gloss: 'to admit, bring in; and admit us' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'رَحْمَتِكَ', lemma: 'رَحْمَة', pos: 'noun', features: 'gen+2ms', gloss: 'Your mercy' },
            { surface: 'وَأَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'and You' },
            { surface: 'أَرْحَمُ', lemma: 'أَرْحَمُ', pos: 'adj', features: 'nom.constr', gloss: 'the most merciful of' },
            { surface: 'ٱلرَّٰحِمِينَ', lemma: 'رَاحِم', pos: 'noun', features: 'pl.def.gen', gloss: 'the merciful' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا اعْتَذَرَ هَارُونُ لِمُوسَى؟',
          options: ['خَشِيَ أَنْ يُفَرِّقَ بَيْنَ بَنِي إِسْرَائِيلَ وَقَدِ اسْتَضْعَفَهُ الْقَوْمُ وَكَادُوا يَقْتُلُونَهُ', 'قَالَ إِنَّهُ كَانَ نَائِماً', 'قَالَ إِنَّهُ لَمْ يَرَ شَيْئاً'],
          answer: 0,
          qEn: 'What excuse did Hārūn give Mūsā?',
          optionsEn: ['He feared causing division among the Children of Israel, and the people had overpowered him and almost killed him', 'He said he had been asleep', 'He said he saw nothing'],
        },
        {
          q: 'مَاذَا طَلَبَ هَارُونُ مِنَ اللَّهِ فِي دُعَائِهِ؟',
          options: ['أَنْ يَغْفِرَ لَهُ وَلِأَخِيهِ وَيُدْخِلَهُمَا فِي رَحْمَتِهِ', 'أَنْ يُهْلِكَ بَنِي إِسْرَائِيلَ', 'أَنْ يُعِيدَ إِلَيْهِ سُلْطَانَهُ'],
          answer: 0,
          qEn: 'What did Hārūn ask Allah for in his supplication?',
          optionsEn: ['That He forgive him and his brother, and admit them both into His mercy', 'That He destroy the Children of Israel', 'That He restore his authority to him'],
        },
      ],
    },
    {
      lines: true,
      en: "Then Mūsā turned to al-Sāmirī and said: 'What is your business, O Sāmirī?' Al-Sāmirī confessed his crime and said: 'Thus did my soul entice me.' He said: 'Then go, for it is your lot in this life to say: No touching!' Mūsā punished him with isolation -- he walks alone and lives alone, like a wild creature, neither growing familiar with others nor they with him.",
      sentences: [
        {
          id: 'qs-v7-c16-009',
          ar: 'ثُمَّ الْتَفَتَ مُوسى إِلى السَّامِرِيِّ قَالَ:',
          en: 'Then Mūsā turned to al-Sāmirī and said:',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'الْتَفَتَ', lemma: 'اِلْتَفَتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to turn toward; turned' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'السَّامِرِيِّ', lemma: 'السَّامِرِيّ', pos: 'proper', features: 'gen', gloss: 'al-Sāmirī' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v7-c16-010',
          ar: 'فَمَا خَطْبُكَ يَا سَامِرِيُّ؟',
          en: 'What is your business, O Sāmirī?',
          tokens: [
            { surface: 'فَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'so what' },
            { surface: 'خَطْبُكَ', lemma: 'خَطْب', pos: 'noun', features: 'nom+2ms', root: 'خ ط ب', gloss: 'your business, matter' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'سَامِرِيُّ', lemma: 'السَّامِرِيّ', pos: 'proper', features: 'nom', gloss: 'Sāmirī' },
          ],
        },
        {
          id: 'qs-v7-c16-011',
          ar: 'وَاعْتَرَفَ السَّامِرِيُّ بِجُرْمِهِ وَقَالَ:',
          en: 'Al-Sāmirī confessed his crime and said:',
          tokens: [
            { surface: 'وَاعْتَرَفَ', lemma: 'اِعْتَرَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ر ف', gloss: 'to confess, admit; and confessed' },
            { surface: 'السَّامِرِيُّ', lemma: 'السَّامِرِيّ', pos: 'proper', features: 'nom', gloss: 'al-Sāmirī' },
            { surface: 'بِجُرْمِهِ', lemma: 'جُرْم', pos: 'noun', features: 'prep+gen+3ms', root: 'ج ر م', gloss: 'his crime' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
          ],
        },
        {
          // Ta-Ha 20:96.
          id: 'qs-v7-c16-012',
          ar: '﴿وَكَذَٰلِكَ سَوَّلَتْ لِي نَفْسِي﴾.',
          en: '"Thus did my soul entice me."',
          tokens: [
            { surface: 'وَكَذَٰلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus, likewise' },
            { surface: 'سَوَّلَتْ', lemma: 'سَوَّلَ', pos: 'verb', features: 'perf.3fs', root: 'س و ل', gloss: 'to entice; enticed' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'me' },
            { surface: 'نَفْسِي', lemma: 'نَفْس', pos: 'noun', features: 'nom+1s', gloss: 'my soul' },
          ],
        },
        {
          // Ta-Ha 20:97.
          id: 'qs-v7-c16-013',
          ar: '﴿قَالَ فَٱذْهَبْ فَإِنَّ لَكَ فِي ٱلْحَيَوٰةِ أَن تَقُولَ لَا مِسَاسَ﴾.',
          en: '"He said: Then go, for it is your lot in this life to say: No touching!"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'فَٱذْهَبْ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to go; then go!' },
            { surface: 'فَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'for indeed' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'you have' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ٱلْحَيَوٰةِ', lemma: 'حَيَاة', pos: 'noun', features: 'def.gen', gloss: 'life' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تَقُولَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.2ms', gloss: 'to say; you say' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'مِسَاسَ', lemma: 'مِسَاس', pos: 'noun', features: 'acc', root: 'م س س', gloss: 'touching, contact' },
          ],
        },
        {
          id: 'qs-v7-c16-014',
          ar: 'وَعَاقَبَهُ مُوسى بِالِانْفِرَادِ،',
          en: 'Mūsā punished him with isolation,',
          tokens: [
            { surface: 'وَعَاقَبَهُ', lemma: 'عَاقَبَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ع ق ب', gloss: 'to punish; and punished him' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'بِالِانْفِرَادِ', lemma: 'اِنْفِرَاد', pos: 'noun', features: 'prep+def.gen', root: 'ف ر د', gloss: 'with isolation' },
          ],
        },
        {
          id: 'qs-v7-c16-015',
          ar: 'يَمْشِي وَحْدَهُ وَيَعِيشُ وَحْدَهُ كَالْوَحْشِيِّ لَا يَأْلَفُ وَلَا يُؤْلَفُ.',
          en: 'he walks alone and lives alone, like a wild creature, neither growing familiar with others nor they with him.',
          tokens: [
            { surface: 'يَمْشِي', lemma: 'مَشَى', pos: 'verb', features: 'impf.3ms', gloss: 'to walk; walks' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْدَ', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
            { surface: 'وَيَعِيشُ', lemma: 'عَاشَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to live; and lives' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْدَ', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
            { surface: 'كَالْوَحْشِيِّ', lemma: 'وَحْشِيّ', pos: 'adj', features: 'prep+def.gen', root: 'و ح ش', gloss: 'like a wild creature' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَأْلَفُ', lemma: 'أَلِفَ', pos: 'verb', features: 'impf.3ms', root: 'أ ل ف', gloss: 'to grow familiar with; he grows familiar' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'يُؤْلَفُ', lemma: 'أَلِفَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to be grown familiar with; is he grown familiar with' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا عَاقَبَ مُوسَى السَّامِرِيَّ؟',
          options: ['بِالِانْفِرَادِ، فَيَمْشِي وَحْدَهُ وَيَعِيشُ وَحْدَهُ كَالْوَحْشِيِّ', 'بِالسِّجْنِ فِي مِصْرَ', 'بِالطَّرْدِ إِلى بِلَادٍ بَعِيدَةٍ'],
          answer: 0,
          qEn: 'How did Mūsā punish al-Sāmirī?',
          optionsEn: ['With isolation -- he walks alone and lives alone, like a wild creature', 'With imprisonment in Egypt', 'With banishment to a distant land'],
        },
        {
          q: 'مَاذَا قَالَ السَّامِرِيُّ حِينَ اعْتَرَفَ بِجُرْمِهِ؟',
          options: ['وَكَذَلِكَ سَوَّلَتْ لِي نَفْسِي', 'أَنْكَرَ أَنَّهُ فَعَلَ شَيْئاً', 'اِتَّهَمَ هَارُونَ بِذَلِكَ'],
          answer: 0,
          qEn: 'What did al-Sāmirī say when he confessed his crime?',
          optionsEn: ['Thus did my soul entice me', 'He denied doing anything', 'He blamed Hārūn for it'],
        },
      ],
    },
    {
      en: "And what punishment is greater than this? Whoever defiles thousands of people with shirk deserves that people find him loathsome and cast him off. Whoever divides between Allah and His servants deserves to be divided from other people. Whoever calls to shirk in Allah's earth is a guilty man, deserving that the whole earth become a prison for him.",
      sentences: [
        {
          id: 'qs-v7-c16-016',
          ar: 'وَأَيُّ عِقَابٍ أَكْبَرُ مِنْ هذا؟!',
          en: 'And what punishment is greater than this?!',
          tokens: [
            { surface: 'وَأَيُّ', lemma: 'أَيّ', pos: 'noun', features: 'conj+nom.constr', root: 'ا ي ي', gloss: 'and what' },
            { surface: 'عِقَابٍ', lemma: 'عِقَاب', pos: 'noun', features: 'indef.gen', gloss: 'punishment' },
            { surface: 'أَكْبَرُ', lemma: 'أَكْبَر', pos: 'adj', features: 'nom', gloss: 'greater' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'هذا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
          ],
        },
        {
          id: 'qs-v7-c16-017',
          ar: 'إِنَّ الَّذِي نَجَّسَ أُلُوفاً مِنَ النَّاسِ بِالشِّرْكِ يَجِبُ أَنْ يَتَقَذَّرَهُ النَّاسُ وَيَنْبِذُوهُ.',
          en: 'Whoever defiles thousands of people with shirk deserves that people find him loathsome and cast him off.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'نَجَّسَ', lemma: 'نَجَّسَ', pos: 'verb', features: 'perf.3ms', root: 'ن ج س', gloss: 'to defile; defiled' },
            { surface: 'أُلُوفاً', lemma: 'أَلْف', pos: 'noun', features: 'pl.indef.acc', gloss: 'thousands' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'people' },
            { surface: 'بِالشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'prep+def.gen', gloss: 'with shirk' },
            { surface: 'يَجِبُ', lemma: 'وَجَبَ', pos: 'verb', features: 'impf.3ms', root: 'و ج ب', gloss: 'to be necessary; it is necessary' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَتَقَذَّرَهُ', lemma: 'تَقَذَّرَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ق ذ ر', gloss: 'to find disgusting; find him loathsome' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'people' },
            { surface: 'وَيَنْبِذُوهُ', lemma: 'نَبَذَ', pos: 'verb', features: 'conj+impf.3mp+3ms', root: 'ن ب ذ', gloss: 'to cast off, reject; and cast him off' },
          ],
        },
        {
          id: 'qs-v7-c16-018',
          ar: 'إِنَّ الَّذِي فَرَّقَ بَيْنَ اللَّهِ وَعِبَادِهِ يَجِبُ أَنْ يُفَرَّقَ بَيْنَهُ وَبَيْنَ النَّاسِ.',
          en: 'Whoever divides between Allah and His servants deserves to be divided from other people.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'فَرَّقَ', lemma: 'فَرَّقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to divide; divided' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَعِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'conj+pl.gen+3ms', gloss: 'and His servants' },
            { surface: 'يَجِبُ', lemma: 'وَجَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be necessary; it is necessary' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يُفَرَّقَ', lemma: 'فَرَّقَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to divide; he be divided' },
            { surface: 'بَيْنَهُ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+3ms', gloss: 'between him' },
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'people' },
          ],
        },
        {
          id: 'qs-v7-c16-019',
          ar: 'إِنَّ الَّذِي دَعَا إِلى الشِّرْكِ فِي أَرْضِ اللَّهِ مُذْنِبٌ يَجِبُ أَنْ تَكُونَ الْأَرْضُ كُلُّهَا سِجْناً لَهُ.',
          en: "Whoever calls to shirk in Allah's earth is a guilty man, deserving that the whole earth become a prison for him.",
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'دَعَا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms', gloss: 'to call; called' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', gloss: 'shirk' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'constr.gen', gloss: 'the earth of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مُذْنِبٌ', lemma: 'مُذْنِب', pos: 'noun', features: 'indef.nom', root: 'ذ ن ب', gloss: 'a guilty man, sinner' },
            { surface: 'يَجِبُ', lemma: 'وَجَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be necessary; it is necessary' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'تَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3fs', root: 'ك و ن', gloss: 'to be; become' },
            { surface: 'الْأَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'def.nom', gloss: 'the earth' },
            { surface: 'كُلُّهَا', lemma: 'كُلّ', pos: 'noun', features: 'nom+3fs', gloss: 'all of it' },
            { surface: 'سِجْناً', lemma: 'سِجْن', pos: 'noun', features: 'indef.acc', gloss: 'a prison' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ النَّدْوِيُّ عِقَابَ السَّامِرِيِّ بِالِانْفِرَادِ؟',
          options: ['أَيُّ عِقَابٍ أَكْبَرُ مِنْ هَذَا؟ فَمَنْ نَجَّسَ النَّاسَ بِالشِّرْكِ يَجِبُ أَنْ يَتَقَذَّرَهُ النَّاسُ', 'قَالَ إِنَّهُ عِقَابٌ قَاسٍ لَا مُبَرِّرَ لَهُ', 'قَالَ إِنَّهُ عِقَابٌ خَفِيفٌ لَا يَكْفِي'],
          answer: 0,
          qEn: "How does the author describe the fitness of al-Sāmirī's punishment by isolation?",
          optionsEn: ['What punishment is greater than this? Whoever defiles people with shirk deserves that people find him loathsome', 'He said it was a harsh punishment with no justification', 'He said it was too light a punishment'],
        },
      ],
    },
    {
      en: "Then Mūsā turned to the accursed calf, and ordered it burned; so it was burned, then he scattered it into the sea. The Children of Israel saw the fate of the worshiped calf, and saw its weakness and helplessness. Then Mūsā turned to the Children of Israel and said: 'O my people, you have wronged yourselves by taking up the calf, so turn in repentance to your Maker and slay yourselves -- that is better for you in your Maker's sight.' And so they did: those who had not worshiped the calf killed those who had worshiped it, and thus did Allah relent toward them.",
      sentences: [
        {
          id: 'qs-v7-c16-020',
          ar: 'ثُمَّ الْتَفَتَ مُوسى إِلى الْعِجْلِ الْمَلْعُونِ',
          en: 'Then Mūsā turned to the accursed calf,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'الْتَفَتَ', lemma: 'اِلْتَفَتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to turn toward; turned' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْعِجْلِ', lemma: 'عِجْل', pos: 'noun', features: 'def.gen', gloss: 'the calf' },
            { surface: 'الْمَلْعُونِ', lemma: 'لَعَنَ', pos: 'adj', features: 'def.gen', gloss: 'the accursed' },
          ],
        },
        {
          id: 'qs-v7-c16-021',
          ar: 'فَأَمَرَ بِإِحْرَاقِهِ فَأُحْرِقَ ثُمَّ نَفَضَهُ فِي الْبَحْرِ.',
          en: 'and ordered it burned; so it was burned, then he scattered it into the sea.',
          tokens: [
            { surface: 'فَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to order; and ordered' },
            { surface: 'بِإِحْرَاقِهِ', lemma: 'إِحْرَاق', pos: 'noun', features: 'prep+gen+3ms', root: 'ح ر ق', gloss: 'its burning' },
            { surface: 'فَأُحْرِقَ', lemma: 'أَحْرَقَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ح ر ق', gloss: 'to burn; so it was burned' },
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'نَفَضَهُ', lemma: 'نَفَضَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ن ف ض', gloss: 'to shake off, scatter; scattered it' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v7-c16-022',
          ar: 'وَرَأى بَنُو إِسْرَائِيلَ مَصِيرَ الْعِجْلِ الْمَعْبُودِ وَرَأَوْا ضَعْفَهُ وَعَجْزَهُ.',
          en: 'The Children of Israel saw the fate of the worshiped calf, and saw its weakness and helplessness.',
          tokens: [
            { surface: 'وَرَأى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'to see; and saw' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مَصِيرَ', lemma: 'مَصِير', pos: 'noun', features: 'acc.constr', gloss: 'the fate of' },
            { surface: 'الْعِجْلِ', lemma: 'عِجْل', pos: 'noun', features: 'def.gen', gloss: 'the calf' },
            { surface: 'الْمَعْبُودِ', lemma: 'عَبَدَ', pos: 'adj', features: 'def.gen', gloss: 'the worshiped' },
            { surface: 'وَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ر أ ي', gloss: 'and saw' },
            { surface: 'ضَعْفَهُ', lemma: 'ضَعْف', pos: 'noun', features: 'acc+3ms', gloss: 'its weakness' },
            { surface: 'وَعَجْزَهُ', lemma: 'عَجْز', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and its helplessness' },
          ],
        },
        {
          id: 'qs-v7-c16-023',
          ar: 'ثُمَّ الْتَفَتَ مُوسى إِلى بَنِي إِسْرَائِيلَ وَقَالَ:',
          en: 'Then Mūsā turned to the Children of Israel and said:',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'الْتَفَتَ', lemma: 'اِلْتَفَتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to turn toward; turned' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
          ],
        },
        {
          // al-Baqarah 2:54.
          id: 'qs-v7-c16-024',
          ar: '﴿يَٰقَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنفُسَكُم بِٱتِّخَاذِكُمُ ٱلْعِجْلَ فَتُوبُوٓا۟ إِلَىٰ بَارِئِكُمْ فَٱقْتُلُوٓا۟ أَنفُسَكُمْ ذَٰلِكُمْ خَيْرٌ لَّكُمْ عِندَ بَارِئِكُمْ﴾.',
          en: '"O my people, you have wronged yourselves by taking up the calf, so turn in repentance to your Maker and slay yourselves -- that is better for you in your Maker\'s sight."',
          tokens: [
            { surface: 'يَٰقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+gen+1s', root: 'ق و م', gloss: 'O my people' },
            { surface: 'إِنَّكُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+2mp', gloss: 'indeed you' },
            { surface: 'ظَلَمْتُمْ', lemma: 'ظَلَمَ', pos: 'verb', features: 'perf.2mp', gloss: 'to wrong; you have wronged' },
            { surface: 'أَنفُسَكُم', lemma: 'نَفْس', pos: 'noun', features: 'pl.acc+2mp', gloss: 'yourselves' },
            { surface: 'بِٱتِّخَاذِكُمُ', lemma: 'اِتِّخَاذ', pos: 'noun', features: 'prep+constr.gen+2mp', root: 'أ خ ذ', gloss: 'by your taking up' },
            { surface: 'ٱلْعِجْلَ', lemma: 'عِجْل', pos: 'noun', features: 'def.acc', gloss: 'the calf' },
            { surface: 'فَتُوبُوٓا۟', lemma: 'تَابَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to repent; so repent' },
            { surface: 'إِلَىٰ', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَارِئِكُمْ', lemma: 'بَارِئ', pos: 'noun', features: 'gen+2mp', gloss: 'your Maker' },
            { surface: 'فَٱقْتُلُوٓا۟', lemma: 'قَتَلَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to kill; and slay' },
            { surface: 'أَنفُسَكُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.acc+2mp', gloss: 'yourselves' },
            { surface: 'ذَٰلِكُمْ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'adj', features: 'indef.nom', gloss: 'better' },
            { surface: 'لَّكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'عِندَ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep', gloss: 'in the sight of' },
            { surface: 'بَارِئِكُمْ', lemma: 'بَارِئ', pos: 'noun', features: 'gen+2mp', gloss: 'your Maker' },
          ],
        },
        {
          id: 'qs-v7-c16-025',
          ar: 'وَكَذَلِكَ فَعَلُوا،',
          en: 'And so they did,',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus, so' },
            { surface: 'فَعَلُوا', lemma: 'فَعَلَ', pos: 'verb', features: 'perf.3mp', gloss: 'to do; they did' },
          ],
        },
        {
          id: 'qs-v7-c16-026',
          ar: 'وَقَتَلَ الَّذِينَ لَمْ يَعْبُدُوا الْعِجْلَ الَّذِينَ عَبَدُوهُ',
          en: 'those who had not worshiped the calf killed those who had worshiped it,',
          tokens: [
            { surface: 'وَقَتَلَ', lemma: 'قَتَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to kill; and killed' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worship' },
            { surface: 'الْعِجْلَ', lemma: 'عِجْل', pos: 'noun', features: 'def.acc', gloss: 'the calf' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'عَبَدُوهُ', lemma: 'عَبَدَ', pos: 'verb', features: 'perf.3mp+3ms', gloss: 'to worship; worshiped it' },
          ],
        },
        {
          id: 'qs-v7-c16-027',
          ar: 'وَهَكَذَا تَابَ اللَّهُ عَلَيْهِمْ.',
          en: 'and thus did Allah relent toward them.',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'تَابَ', lemma: 'تَابَ', pos: 'verb', features: 'perf.3ms', gloss: 'to relent, turn (in mercy); relented' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'toward them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ مُوسَى بِالْعِجْلِ بَعْدَ مُعَاقَبَةِ السَّامِرِيِّ؟',
          options: ['أَمَرَ بِإِحْرَاقِهِ فَأُحْرِقَ ثُمَّ نَفَضَهُ فِي الْبَحْرِ', 'تَرَكَهُ كَمَا هُوَ لِيَتَذَكَّرُوا خَطَأَهُمْ', 'أَعَادَهُ إِلى السَّامِرِيِّ'],
          answer: 0,
          qEn: 'What did Mūsā do with the calf after punishing al-Sāmirī?',
          optionsEn: ['He ordered it burned; it was burned, and he scattered it into the sea', 'He left it as it was so they would remember their mistake', 'He gave it back to al-Sāmirī'],
        },
        {
          q: 'مَاذَا أَمَرَ مُوسَى بَنِي إِسْرَائِيلَ أَنْ يَفْعَلُوا تَوْبَةً مِنْ عِبَادَةِ الْعِجْلِ؟',
          options: ['أَنْ يَقْتُلَ الَّذِينَ لَمْ يَعْبُدُوا الْعِجْلَ الَّذِينَ عَبَدُوهُ', 'أَنْ يَصُومُوا أَرْبَعِينَ يَوْماً', 'أَنْ يَتْرُكُوا مِصْرَ فَوْراً'],
          answer: 0,
          qEn: 'What did Mūsā command the Children of Israel to do in repentance for worshiping the calf?',
          optionsEn: ['That those who had not worshiped the calf should kill those who had', 'That they should fast for forty days', 'That they should leave Egypt immediately'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'ثُمَّ الْتَفَتَ مُوسَى إِلَى',
        post: 'قَالَ: فَمَا خَطْبُكَ يَا سَامِرِيُّ؟',
        en: 'Then Mūsā turned to al-Sāmirī and said: "What is your business, O Sāmirī?"',
        options: ['السَّامِرِيِّ', 'السَّامِرِيُّ', 'السَّامِرِيَّ', 'سَامِرِيّاً'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition إِلَى, matching the taught pattern.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Indefinite -- wrong; this is the specific person already named in the story.',
        ],
      },
      {
        type: 'cloze',
        pre: 'ثُمَّ الْتَفَتَ مُوسَى إِلَى',
        post: 'الْمَلْعُونِ فَأَمَرَ بِإِحْرَاقِهِ.',
        en: 'Then Mūsā turned to the accursed calf and ordered it burned.',
        options: ['الْعِجْلِ', 'الْعِجْلُ', 'الْعِجْلَ', 'عِجْلٍ'],
        answer: 0,
        rationales: [
          'Genitive -- object of إِلَى, matching the taught pattern.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Indefinite -- wrong; this is the specific calf already introduced in the story.',
        ],
      },
      {
        type: 'cloze',
        pre: 'ثُمَّ الْتَفَتَ مُوسَى إِلَى',
        post: 'وَقَالَ: يَاقَوْمِ إِنَّكُمْ ظَلَمْتُمْ أَنْفُسَكُمْ.',
        en: 'Then Mūsā turned to the Children of Israel and said: "O my people, you have wronged yourselves."',
        options: ['بَنِي إِسْرَائِيلَ', 'بَنُو إِسْرَائِيلَ', 'اِبْنِ إِسْرَائِيلَ', 'أَبْنَاءِ إِسْرَائِيلَ'],
        answer: 0,
        rationales: [
          'Oblique plural construct بَنِي -- object of إِلَى, matching the taught pattern.',
          'Nominative بَنُو -- wrong case; a preposition requires the oblique form.',
          'Singular "the son of Israel" -- wrong number.',
          'A different (non-idiomatic) plural of اِبْن -- not the fixed phrase used throughout the story.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'اِلْتَفَتَ مُوسَى إِلَى السَّامِرِيِّ',
        pre: '',
        post: 'مُوسَى إِلَى السَّامِرِيِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['اِلْتَفَتُّ', 'اِلْتَفَتَ', 'اِلْتَفَتَتْ', 'اِلْتَفَتُوا'],
        answer: 0,
        rationales: [
          '1st person singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'اِلْتَفَتَ مُوسَى إِلَى السَّامِرِيِّ',
        pre: '',
        post: 'مُوسَى إِلَى السَّامِرِيِّ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['اِلْتَفَتَتْ', 'اِلْتَفَتَ', 'اِلْتَفَتُّ', 'اِلْتَفَتُوا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'اِلْتَفَتَ مُوسَى إِلَى السَّامِرِيِّ',
        pre: '',
        post: 'مُوسَى إِلَى السَّامِرِيِّ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['اِلْتَفَتُوا', 'اِلْتَفَتَ', 'اِلْتَفَتَتْ', 'اِلْتَفَتْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

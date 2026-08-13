// قَصَصُ النَّبِيِّينَ, volume 11 «زَكَرِيَّا», chapter 7 -- آيَاتُ اللَّهِ
// وَقُدْرَتُهُ. Printed page 248 only -- from just after ch6's closing
// rosette divider down to just above ch8's heading يَحْيَى. Transcribed by
// hand from the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
// The Qur'anic quotation (Al-Anbiyāʾ 21:89-90) was cross-checked against the
// canonical Uthmani text rather than re-read from the scan.
//
// Two short prose paragraphs -- Allah's signs appearing in Zakariyyā's body
// and then in his household with Yaḥyā's birth -- followed directly by the
// Qur'an's own telling of the same event (21:89-90).
//
// Qur'an-fragmentation convention (documented project-wide workaround, same
// as qasas-v1 ch5/ch6 etc.): the "build a sentence" drill stage has no way
// to mark Qur'anic wording as undrillable, so every Qur'an-quote sentence
// here is split into fragments of AT MOST 2 tokens at natural pause points,
// which keeps every one of them under the 3-token floor the build stage
// requires (CHAPTER-FORMAT.md's BUILD_MIN_TOKENS = 3) without altering a
// single diacritic. Sentences qs-v11-c07-010 through -027 are these
// fragments (18 of them, one ayah-boundary crossing silently since 21:89
// ends mid-fragment at ٱلْوَٰرِثِينَ with no pause mark to split on). Per
// house style (qasas-v1 ch5/ch6), the Qur'anic bracket ﴿ opens the first
// fragment and ﴾ closes the last; the ۚ/ۖ pause marks and circled verse
// numbers of the printed muṣḥaf are omitted from ar/tokens entirely (cited
// here instead). Surfaces keep full Uthmani orthography (madda on
// وَزَكَرِيَّآ, small waw on رَبَّهُۥ/لَهُۥ, ى for alif maqṣūra in تَذَرْنِى/فِى,
// dagger alif in ٱلْوَٰرِثِينَ/يُسَـٰرِعُونَ/ٱلْخَيْرَٰتِ/خَـٰشِعِينَ, the small
// circle on كَانُوا۟); lemmas are normalized to plain orthography per
// CHAPTER-FORMAT.md (e.g. وَزَكَرِيَّآ -> زَكَرِيَّا, يُسَـٰرِعُونَ -> سَارَعَ).
// Do not merge these fragments back together, and do not pull any of them
// into a workshop cloze/shift frame -- the workshop's shift pair below
// (اسْتَجَبْنَا -> اسْتَجَابَ/اسْتَجَبْتُ) is built fresh in plain orthography,
// referencing the pattern without reusing a Qur'an sentence itself.
//
// Grammar / lexical notes:
//   -- رَبِّ (qs-v11-c07-012) is the vocative "O my Lord" with the ياء
//      المتكلم elided (Qur'anic رَبِّ for رَبِّي) -- tagged noun, lemma رَبّ,
//      features acc+1s, gloss 'O my Lord', matching the exact convention
//      already used for رَبِّي (qasas-v1 ch11's qs-v1-c11-248, tagged the
//      same acc+1s for the vocative-of-address use).
//   -- تَذَرْنِى (qs-v11-c07-013) is ذَرَ, a defective verb with no attested
//      perfect (classical Arabic supplies its perfect meaning from تَرَكَ
//      instead) -- tagged plainly impf.2ms+1s per the brief; the لَا before
//      it is its own token (part, features neg), no separate jussive/mood
//      atom used, consistent with the prohibitive-جزم precedent already
//      established for لَا + jussive (qasas-v1 ch11's header note).
//   -- فَٱسْتَجَبْنَا / وَوَهَبْنَا / وَأَصْلَحْنَا (qs-v11-c07-{016,017,019}) are
//      God's majestic-plural "We" -- tagged perf.1p, not a special divine
//      atom (the format has none).
//   -- ٱلْخَيْرَٰتِ (qs-v11-c07-023) is kept under the same lemma خَيْر as
//      خَيْرُ (qs-v11-c07-014, "best of") rather than splitting into a
//      separate خَيْرَة/خَيْرَات entry -- both are the one root's dictionary
//      headword already taught (qasas-v2 ch9/11/19), just an elative use
//      and a substantive-plural use of it; judgment call, flagged here.
//   -- تَارَة's root is left out (root omitted per CHAPTER-FORMAT.md's
//      "omit and the card drops that row") -- classical sources trace it
//      variously and I was not confident enough to commit to one spelling.
//   -- Shared lexicon check: قُدْرَة، آيَة، دُعَاء (qasas-v11 ch1, per brief --
//      not re-listed even though ch1's own file isn't present yet to
//      verify against directly), وَهَبَ (qasas-v11 ch2, likewise taken on
//      the brief's word), ظَهَرَ (qasas-v2 ch23)، ثُمَّ (qasas-v1 ch9)، قَرَّ
//      وَعَيْن (qasas-v2 ch23)، عَاشَ (qasas-v3 ch1)، دَعْوَة (qasas-v3 ch18)،
//      بَيْت (qasas-v1 ch1)، قُرْآن (qasas-v1 ch16، pos:'proper')، حَكَى
//      (qasas-v2 ch1/2)، هَذِهِ (qasas-v1 ch1)، قِصَّة (qasas-v1 ch16)، إِذْ
//      (qasas-v1 ch9)، نَادَى (qasas-v2 ch7)، لَا، أَنْتَ، فَرْد (qasas-v3 ch14 --
//      NOT new here, despite the brief flagging it "verify")، إِنَّ، كَانَ،
//      فِي، دَعَا (qasas-v1 ch8/9)، لِ، رَبّ
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here. أَصْلَحَ was flagged "likely already
//      known, verify" in the brief but a corpus grep found no prior
//      instance -- listed as new below.
//
// 14 new words (اشْتَدَّ، أَزْر، تَارَة، إِيجَاز، طَوْر،
// تَفْصِيل، ذَرَ، وَارِث، اسْتَجَابَ، أَصْلَحَ، سَارَعَ، رَغَب، رَهَب، خَاشِع).
// REVIEW-PASS CORRECTION: وَلَدَ، أُسْرَة، and جِسْم were originally listed here
// too, but all three are already claimed new earlier in this volume's own
// reading order (وَلَدَ at qasas-v11/chapter-01.js's qs-v11-c01-011, أُسْرَة
// at qasas-v11/chapter-02.js's qs-v11-c02-001, جِسْم at
// qasas-v11/chapter-01.js's qs-v11-c01-023) -- removed here to avoid
// teaching any of them twice; each token keeps its own inline gloss.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'آيَاتُ اللَّهِ وَقُدْرَتُهُ', en: 'The Signs and Power of Allah' },
  newWords: [
    'اشْتَدَّ', 'أَزْر', 'تَارَة', 'إِيجَاز', 'طَوْر',
    'تَفْصِيل', 'ذَرَ', 'وَارِث', 'اسْتَجَابَ', 'أَصْلَحَ', 'سَارَعَ', 'رَغَب', 'رَهَب', 'خَاشِع',
  ],
  lemmas: {
    'اشْتَدَّ': { gloss: 'to become strong, intensify' },
    'أَزْر': { gloss: 'strength, support' },
    'تَارَة': { gloss: 'at times, sometimes' },
    'إِيجَاز': { gloss: 'concision, brevity' },
    'طَوْر': { gloss: 'a time, a turn (in a series); at other times' },
    'تَفْصِيل': { gloss: 'detail, elaboration' },
    'ذَرَ': { gloss: 'to leave, let be' },
    'وَارِث': { gloss: 'heir, inheritor' },
    'اسْتَجَابَ': { gloss: 'to respond, answer (a prayer)' },
    'أَصْلَحَ': { gloss: 'to set right, make fit, reform' },
    'سَارَعَ': { gloss: 'to hasten' },
    'رَغَب': { gloss: 'longing, hope' },
    'رَهَب': { gloss: 'fear, dread' },
    'خَاشِع': { gloss: 'humbly submissive, reverent' },
  },
  paragraphs: [
    {
      en: "And Allah's signs and His power appeared in his body, then in his house and family: Yaḥyā was born, so his eye was comforted through him, his strength was intensified through him, and his mission lived on through him.",
      sentences: [
        {
          id: 'qs-v11-c07-001',
          ar: 'وَظَهَرَتْ آيَاتُ اللَّهِ وَقُدْرَتُهُ فِي جِسْمِهِ',
          en: "And Allah's signs and His power appeared in his body,",
          tokens: [
            { surface: 'وَظَهَرَتْ', lemma: 'ظَهَرَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ظ ه ر', gloss: 'to appear, become manifest; and appeared' },
            { surface: 'آيَاتُ', lemma: 'آيَة', pos: 'noun', features: 'pl.nom.constr', root: 'أ ي ي', gloss: 'the signs of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَقُدْرَتُهُ', lemma: 'قُدْرَة', pos: 'noun', features: 'conj+nom+3ms', root: 'ق د ر', gloss: 'and his power' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'جِسْمِهِ', lemma: 'جِسْم', pos: 'noun', features: 'gen+3ms', root: 'ج س م', gloss: 'his body' },
          ],
        },
        {
          id: 'qs-v11-c07-002',
          ar: 'ثُمَّ فِي بَيْتِهِ وَأُسْرَتِهِ،',
          en: 'then in his house and family,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَيْتِهِ', lemma: 'بَيْت', pos: 'noun', features: 'gen+3ms', root: 'ب ي ت', gloss: 'his house' },
            { surface: 'وَأُسْرَتِهِ', lemma: 'أُسْرَة', pos: 'noun', features: 'conj+gen+3ms', root: 'أ س ر', gloss: 'and his family' },
          ],
        },
        {
          id: 'qs-v11-c07-003',
          ar: 'وَوُلِدَ يَحْيَى،',
          en: 'and Yaḥyā was born,',
          tokens: [
            { surface: 'وَوُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'و ل د', gloss: 'to give birth to; and was born' },
            { surface: 'يَحْيَى', lemma: 'يَحْيَى', pos: 'proper', features: 'nom', gloss: 'Yaḥyā' },
          ],
        },
        {
          id: 'qs-v11-c07-004',
          ar: 'فَقَرَّتْ بِهِ عَيْنُهُ،',
          en: 'so his eye was comforted through him,',
          tokens: [
            { surface: 'فَقَرَّتْ', lemma: 'قَرَّ', pos: 'verb', features: 'conj+perf.3fs', root: 'ق ر ر', gloss: 'to be cool, settled; so was comforted' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'through him' },
            { surface: 'عَيْنُهُ', lemma: 'عَيْن', pos: 'noun', features: 'nom+3ms', root: 'ع ي ن', gloss: 'his eye' },
          ],
        },
        {
          id: 'qs-v11-c07-005',
          ar: 'وَاشْتَدَّ بِهِ أَزْرُهُ،',
          en: 'and his strength was intensified through him,',
          tokens: [
            { surface: 'وَاشْتَدَّ', lemma: 'اشْتَدَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش د د', gloss: 'to become strong, intensify; and was intensified' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'through him' },
            { surface: 'أَزْرُهُ', lemma: 'أَزْر', pos: 'noun', features: 'nom+3ms', root: 'أ ز ر', gloss: 'his strength' },
          ],
        },
        {
          id: 'qs-v11-c07-006',
          ar: 'وَعَاشَتْ بِهِ دَعْوَتُهُ.',
          en: 'and his mission lived on through him.',
          tokens: [
            { surface: 'وَعَاشَتْ', lemma: 'عَاشَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ع ي ش', gloss: 'to live; and lived on' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'through him' },
            { surface: 'دَعْوَتُهُ', lemma: 'دَعْوَة', pos: 'noun', features: 'nom+3ms', root: 'د ع و', gloss: 'his mission, his call' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا ظَهَرَ فِي جِسْمِ زَكَرِيَّا ثُمَّ فِي بَيْتِهِ وَأُسْرَتِهِ؟',
          options: ['آيَاتُ اللَّهِ وَقُدْرَتُهُ', 'الْمَرَضُ وَالضَّعْفُ', 'الْغِنَى وَالْجَاهُ'],
          answer: 0,
          qEn: "What appeared in Zakariyyā's body, then in his house and family?",
          optionsEn: ["Allah's signs and His power", 'Illness and weakness', 'Wealth and status'],
        },
        {
          q: 'مَاذَا حَدَثَ لِزَكَرِيَّا عِنْدَمَا وُلِدَ يَحْيَى؟',
          options: [
            'قَرَّتْ بِهِ عَيْنُهُ وَاشْتَدَّ بِهِ أَزْرُهُ وَعَاشَتْ بِهِ دَعْوَتُهُ',
            'حَزِنَ زَكَرِيَّا حُزْنًا شَدِيدًا',
            'نَسِيَ زَكَرِيَّا دَعْوَتَهُ',
          ],
          answer: 0,
          qEn: 'What happened to Zakariyyā when Yaḥyā was born?',
          optionsEn: [
            'His eye was comforted, his strength was intensified through him, and his mission lived on through him',
            'Zakariyyā grieved deeply',
            'Zakariyyā forgot his mission',
          ],
        },
      ],
    },
    {
      en: "Listen to the Qur'an narrate this story, sometimes briefly and sometimes in detail, as it says: 'And [mention] Zakariyyā, when he called out to his Lord: My Lord, do not leave me alone, while You are the best of inheritors. So We answered him and granted him Yaḥyā, and made fit for him his wife. Indeed, they used to hasten to good deeds, and call upon Us in hope and fear, and they were humbly submissive to Us.' (Al-Anbiyāʾ 21:89-90)",
      sentences: [
        {
          id: 'qs-v11-c07-007',
          ar: 'وَاسْمَعُوا الْقُرْآنَ يَحْكِي هَذِهِ الْقِصَّةَ',
          en: "And listen to the Qur'an narrate this story,",
          tokens: [
            { surface: 'وَاسْمَعُوا', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+imp.2mp', root: 'س م ع', gloss: 'to hear, listen; listen!' },
            { surface: 'الْقُرْآنَ', lemma: 'قُرْآن', pos: 'proper', features: 'def.acc', root: 'ق ر أ', gloss: "the Qur'an" },
            { surface: 'يَحْكِي', lemma: 'حَكَى', pos: 'verb', features: 'impf.3ms', root: 'ح ك ي', gloss: 'to narrate, tell; narrates' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'def.acc', root: 'ق ص ص', gloss: 'the story' },
          ],
        },
        {
          id: 'qs-v11-c07-008',
          ar: 'تَارَةً فِي إِيجَازٍ وَطَوْراً فِي تَفْصِيلٍ،',
          en: 'sometimes briefly and sometimes in detail,',
          tokens: [
            { surface: 'تَارَةً', lemma: 'تَارَة', pos: 'noun', features: 'indef.acc', gloss: 'at times, sometimes' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'إِيجَازٍ', lemma: 'إِيجَاز', pos: 'noun', features: 'indef.gen', root: 'و ج ز', gloss: 'concision, brevity' },
            { surface: 'وَطَوْراً', lemma: 'طَوْر', pos: 'noun', features: 'conj+indef.acc', root: 'ط و ر', gloss: 'and at other times' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'تَفْصِيلٍ', lemma: 'تَفْصِيل', pos: 'noun', features: 'indef.gen', root: 'ف ص ل', gloss: 'detail, elaboration' },
          ],
        },
        {
          id: 'qs-v11-c07-009',
          ar: 'فَيَقُولُ:',
          en: 'as it says:',
          tokens: [
            { surface: 'فَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ق و ل', gloss: 'to say; and it says' },
          ],
        },
        {
          id: 'qs-v11-c07-010',
          ar: '﴿وَزَكَرِيَّآ إِذْ',
          en: 'And [mention] Zakariyyā, when',
          tokens: [
            { surface: 'وَزَكَرِيَّآ', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'conj+acc', gloss: 'Zakariyyā' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
          ],
        },
        {
          id: 'qs-v11-c07-011',
          ar: 'نَادَىٰ رَبَّهُۥ',
          en: 'he called out to his Lord:',
          tokens: [
            { surface: 'نَادَىٰ', lemma: 'نَادَى', pos: 'verb', features: 'perf.3ms', root: 'ن د ي', gloss: 'to call out; called out' },
            { surface: 'رَبَّهُۥ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', root: 'ر ب ب', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v11-c07-012',
          ar: 'رَبِّ لَا',
          en: "'My Lord, do not",
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', root: 'ر ب ب', gloss: 'O my Lord' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
          ],
        },
        {
          id: 'qs-v11-c07-013',
          ar: 'تَذَرْنِى فَرْدًا',
          en: 'leave me alone,',
          tokens: [
            { surface: 'تَذَرْنِى', lemma: 'ذَرَ', pos: 'verb', features: 'impf.2ms+1s', root: 'و ذ ر', gloss: 'to leave, let be; do not leave me' },
            { surface: 'فَرْدًا', lemma: 'فَرْد', pos: 'noun', features: 'indef.acc', root: 'ف ر د', gloss: 'alone, a solitary one' },
          ],
        },
        {
          id: 'qs-v11-c07-014',
          ar: 'وَأَنتَ خَيْرُ',
          en: 'while You are the best of',
          tokens: [
            { surface: 'وَأَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'and you' },
            { surface: 'خَيْرُ', lemma: 'خَيْر', pos: 'noun', features: 'nom.constr', root: 'خ ي ر', gloss: 'best of' },
          ],
        },
        {
          id: 'qs-v11-c07-015',
          ar: 'ٱلْوَٰرِثِينَ',
          en: "the inheritors.'",
          tokens: [
            { surface: 'ٱلْوَٰرِثِينَ', lemma: 'وَارِث', pos: 'noun', features: 'def.gen.pl', root: 'و ر ث', gloss: 'the heirs, inheritors' },
          ],
        },
        {
          id: 'qs-v11-c07-016',
          ar: 'فَٱسْتَجَبْنَا لَهُۥ',
          en: 'So We answered him',
          tokens: [
            { surface: 'فَٱسْتَجَبْنَا', lemma: 'اسْتَجَابَ', pos: 'verb', features: 'conj+perf.1p', root: 'ج و ب', gloss: 'to respond, answer; so We answered' },
            { surface: 'لَهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v11-c07-017',
          ar: 'وَوَهَبْنَا لَهُۥ',
          en: 'and granted him',
          tokens: [
            { surface: 'وَوَهَبْنَا', lemma: 'وَهَبَ', pos: 'verb', features: 'conj+perf.1p', root: 'و ه ب', gloss: 'to grant, bestow; and We granted' },
            { surface: 'لَهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v11-c07-018',
          ar: 'يَحْيَىٰ',
          en: 'Yaḥyā,',
          tokens: [
            { surface: 'يَحْيَىٰ', lemma: 'يَحْيَى', pos: 'proper', features: 'acc', gloss: 'Yaḥyā' },
          ],
        },
        {
          id: 'qs-v11-c07-019',
          ar: 'وَأَصْلَحْنَا لَهُۥ',
          en: 'and made fit for him',
          tokens: [
            { surface: 'وَأَصْلَحْنَا', lemma: 'أَصْلَحَ', pos: 'verb', features: 'conj+perf.1p', root: 'ص ل ح', gloss: 'to set right, make fit; and We made fit' },
            { surface: 'لَهُۥ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v11-c07-020',
          ar: 'زَوْجَهُۥٓ',
          en: 'his wife.',
          tokens: [
            { surface: 'زَوْجَهُۥٓ', lemma: 'زَوْج', pos: 'noun', features: 'acc+3ms', root: 'ز و ج', gloss: 'his wife' },
          ],
        },
        {
          id: 'qs-v11-c07-021',
          ar: 'إِنَّهُمْ كَانُوا۟',
          en: 'Indeed, they used to',
          tokens: [
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'كَانُوا۟', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; they were, used to' },
          ],
        },
        {
          id: 'qs-v11-c07-022',
          ar: 'يُسَـٰرِعُونَ فِى',
          en: 'hasten in',
          tokens: [
            { surface: 'يُسَـٰرِعُونَ', lemma: 'سَارَعَ', pos: 'verb', features: 'impf.3mp', root: 'س ر ع', gloss: 'to hasten; they hasten' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
          ],
        },
        {
          id: 'qs-v11-c07-023',
          ar: 'ٱلْخَيْرَٰتِ',
          en: 'good deeds,',
          tokens: [
            { surface: 'ٱلْخَيْرَٰتِ', lemma: 'خَيْر', pos: 'noun', features: 'def.gen.pl', root: 'خ ي ر', gloss: 'the good deeds' },
          ],
        },
        {
          id: 'qs-v11-c07-024',
          ar: 'وَيَدْعُونَنَا رَغَبًا',
          en: 'and call upon Us in hope',
          tokens: [
            { surface: 'وَيَدْعُونَنَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+impf.3mp+1p', root: 'د ع و', gloss: 'to call, supplicate; and they call upon Us' },
            { surface: 'رَغَبًا', lemma: 'رَغَب', pos: 'noun', features: 'indef.acc', root: 'ر غ ب', gloss: 'in longing, hope' },
          ],
        },
        {
          id: 'qs-v11-c07-025',
          ar: 'وَرَهَبًا',
          en: 'and fear,',
          tokens: [
            { surface: 'وَرَهَبًا', lemma: 'رَهَب', pos: 'noun', features: 'conj+indef.acc', root: 'ر ه ب', gloss: 'and in fear' },
          ],
        },
        {
          id: 'qs-v11-c07-026',
          ar: 'وَكَانُوا۟ لَنَا',
          en: 'and they were to Us',
          tokens: [
            { surface: 'وَكَانُوا۟', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
          ],
        },
        {
          id: 'qs-v11-c07-027',
          ar: 'خَـٰشِعِينَ﴾.',
          en: "humbly submissive.' (Al-Anbiyāʾ 21:89-90)",
          tokens: [
            { surface: 'خَـٰشِعِينَ', lemma: 'خَاشِع', pos: 'noun', features: 'acc.pl', root: 'خ ش ع', gloss: 'humbly submissive, reverent' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ يَحْكِي الْقُرْآنُ هَذِهِ الْقِصَّةَ؟',
          options: ['تَارَةً فِي إِيجَازٍ وَطَوْرًا فِي تَفْصِيلٍ', 'دَائِمًا بِإِيجَازٍ فَقَط', 'دَائِمًا بِتَفْصِيلٍ فَقَط'],
          answer: 0,
          qEn: "How does the Qur'an narrate this story?",
          optionsEn: ['Sometimes briefly and sometimes in detail', 'Always briefly only', 'Always in detail only'],
        },
        {
          q: 'لِمَاذَا اسْتَجَابَ اللَّهُ لِزَكَرِيَّا وَأَهْلِهِ كَمَا يَقُولُ الْقُرْآنُ؟',
          options: [
            'لِأَنَّهُمْ كَانُوا يُسَارِعُونَ فِي الْخَيْرَاتِ وَيَدْعُونَ اللَّهَ رَغَبًا وَرَهَبًا وَكَانُوا خَاشِعِينَ',
            'لِأَنَّهُمْ كَانُوا أَغْنِيَاءَ',
            'لِأَنَّهُمْ كَانُوا مِنْ أَشْرَافِ قَوْمِهِمْ',
          ],
          answer: 0,
          qEn: "Why does the Qur'an say Allah answered Zakariyyā and his family's prayer?",
          optionsEn: [
            'Because they hastened to good deeds, called upon Allah in hope and fear, and were humbly submissive',
            'Because they were wealthy',
            'Because they were among the nobles of their people',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَقَرَّتْ بِهِ عَيْنُهُ، وَاشْتَدَّ بِهِ أَزْرُهُ، وَ',
        post: 'بِهِ دَعْوَتُهُ.',
        en: 'His eye was comforted through him, his strength was intensified through him, and his mission lived on through him.',
        options: ['عَاشَتْ', 'عَاشَ', 'عِشْتُ', 'عَاشُوا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the feminine subject دَعْوَتُهُ (his mission).',
          '3rd masculine singular -- wrong gender; دَعْوَتُهُ is feminine.',
          '1st person singular -- I lived; wrong person entirely.',
          '3rd masculine plural -- they lived; wrong number.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَرَّتْ بِهِ عَيْنُهُ، وَ',
        post: 'بِهِ أَزْرُهُ، وَعَاشَتْ بِهِ دَعْوَتُهُ.',
        en: 'His eye was comforted through him, his strength was intensified through him, and his mission lived on through him.',
        options: ['اشْتَدَّ', 'اشْتَدَّتْ', 'اشْتَدَدْتُ', 'اشْتَدُّوا'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- agrees with the masculine subject أَزْرُهُ (his strength).',
          '3rd feminine singular -- wrong gender; أَزْرُهُ is masculine.',
          '1st person singular -- I intensified; wrong person.',
          '3rd masculine plural -- they intensified; wrong number.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'اسْتَجَبْنَا لَهُ',
        pre: '',
        post: 'لَهُ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['اسْتَجَابَ', 'اسْتَجَبْنَا', 'أَسْتَجِيبُ', 'يَسْتَجِيبُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular, perfect -- matches هُوَ.',
          '1st plural -- we, the form already given.',
          '1st singular, imperfect -- wrong person and tense.',
          '3rd masculine plural, imperfect -- wrong number and tense.',
        ],
      },
      {
        type: 'shift',
        base: 'اسْتَجَبْنَا لَهُ',
        pre: '',
        post: 'لَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['اسْتَجَبْتُ', 'اسْتَجَبْنَا', 'اسْتَجَابَ', 'تَسْتَجِيبُ'],
        answer: 0,
        rationales: [
          '1st singular, perfect -- matches أَنَا.',
          '1st plural -- we, the form already given.',
          '3rd masculine singular, perfect -- he.',
          '2nd masculine singular, imperfect -- wrong person and tense.',
        ],
      },
    ],
  },
};

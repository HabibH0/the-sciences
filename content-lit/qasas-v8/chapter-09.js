// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 9 --
// شُعَيْبٌ يَتَعَجَّبُ مِنْ قَوْمِهِ. Printed pages 220 (bottom, right after
// ch8's closing lines and the heading box) through 221 (top, ending right
// before ch10's heading السَّهْمُ الأَخِيرُ partway down the same page).
// Source text verified against the scan by the lead session; transcribed
// here against ../CHAPTER-FORMAT.md.
//
// His people excuse their threats by his weakness and small clan -- were it
// not for his kinsmen, they would have stoned him -- and Shuʿayb marvels
// that they hold his clan dearer than Allah Himself. The chapter closes on
// two consecutive verses of Hūd 11:91-92 quoted word for word: the people's
// own excuse of incomprehension and their لَوْلَا-threat, then Shuʿayb's
// reply asking whether his tribe truly outweighs Allah in their eyes.
//
// Grammar / lexical notes:
//   -- The لَوْلَا construction (qs-v8-c09-002/003, وَأَنَّهُ لَوْلَا عَشِيرَتُهُ
//      وَقَرَابَتُهُمْ لَهُ لَرَجَمُوهُ بِالْحِجَارَةِ) is a جواب لولا: the response
//      clause takes the emphatic لَ fused onto the perfect (لَرَجَمُوهُ,
//      features 'part+perf.3mp+3ms'), the same fused-لَ-onto-perfect pattern
//      already used for qasas-v3/chapter-01.js's لَمَا عَرَفَ (there fused
//      with the negator instead) and qasas-v3/chapter-03.js's لَشَتَمَهُ
//      ('part+perf.3ms+3ms'). The Qurʾān quote's own لَوْلَا رَهْطُكَ
//      لَرَجَمْنَاكَ (qs-v8-c09-010) repeats the identical pattern
//      ('part+perf.1p+2ms').
//   -- Both ﴿﴾-bracketed verses (Hūd 11:91-92) are split into three
//      fragments apiece and annotated with full tokens exactly like
//      ordinary narration, per this volume's established convention (see
//      index.js and ch1-ch8's header comments) and qasas-v3/chapter-16.js's
//      precedent for splitting one long ayah run into several ﴿﴾-wrapped
//      pieces.
//   -- قَادِر، قَاهِر (qs-v8-c09-006) and أَهْوَن (qs-v8-c09-007, elative of
//      هَيِّن) are tagged as their own lemmas rather than folded into a verb
//      root, matching the corpus's established participle/elative-as-
//      distinct-lemma convention (صَالِح، سَاجِد، نَاصِح، مُسَمّى -- qasas-v3
//      ch16's header comment; مُؤْمِن as its own noun-lemma distinct from
//      آمَنَ, qasas-v8 ch4/ch5).
//   -- أَعَزُّ (qs-v8-c09-012, elative "dearer") is likewise a distinct
//      lemma from the adjective عَزِيز, matching the same elative-as-its-
//      own-lemma treatment as أَهْوَن above -- same root ع ز ز, different
//      word class.
//   -- اِتَّخَذَ (qs-v8-c09-013, form VIII "to take, adopt") is a distinct
//      lemma from the already-taught أَخَذَ (form I "to take", qasas-v8
//      ch4) -- different measure, matching the corpus's existing practice
//      of giving each derived-measure verb its own lemma (cf.
//      خَافَ/أَخَافَ, ch3; رَضِيَ/أَرْضَى, ch4).
//   -- مَرَض (qs-v8-c09-008, noun "sickness, disease") bare-matches an
//      existing corpus entry مَرِضَ ("to be sick," a verb), but the two are
//      different lemmas of different parts of speech sharing a root, not
//      the same word -- tagged fresh here as its own noun lemma, per the
//      corpus's homograph convention (cf. qasas-v8 ch3's header comment on
//      أَخَافَ vs. أَخَافُ).
//   -- عَزِيز، حِجَارَة، تَعَجَّبَ، ضَعِيف، لَوْلَا، and عَمِلَ (used for
//      تَعْمَلُونَ) all bare-match already-taught corpus lemmas with the
//      identical sense needed here and so are glossed inline rather than
//      re-declared in newWords, even though عَزِيز and تَعَجَّبَ were
//      floated as candidates before checking.
//   -- يَاشُعَيْبُ (qs-v8-c09-009/019) is tagged as one fused token on the
//      proper-noun lemma شُعَيْب with features 'voc', matching the
//      proper-noun vocative precedent already in the corpus (يَامُوسَى,
//      qasas-v6 ch18) rather than this volume's own يَاقَوْمِ pattern
//      (fused onto the common noun قَوْم with a 1s-suffix segment) -- the
//      two differ because قَوْمِ carries a hidden "my" that شُعَيْب does not.
//   -- لَنَرَاكَ (qs-v8-c09-010) reuses the exact fused-لَ-onto-imperfect
//      pattern already attested for the identical Qurʾānic phrase at
//      qasas-v3/chapter-13.js ('part+impf.1p+2ms').
//   -- وَرَاء (qs-v8-c09-013, "behind") is tagged pos 'prep' on the pattern
//      already used for this corpus's other place-adverbs functioning
//      prepositionally (بَيْنَ، حَوْلَ) rather than pos 'noun', though its
//      root (و ر ي) is given tentatively.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لِ، أَنَّ، لَوْلَا، مِنْ،
//      قَدْ، ذَلِكَ، شُعَيْب، حِجَارَة، تَعَجَّبَ، كَانَ، اللَّه، عَزِيز، قَوِيّ، عَلَى،
//      قَالَ، يَا، مَا، كَثِير، إِنَّ، رَأَى، فِي، ضَعِيف، أَنْتَ، قَوْم، اِتَّخَذَ (new,
//      see above)، رَبّ، عَمِلَ، مُحِيط are all already taught and are NOT
//      re-listed in newWords here.
//
// 21 new words (تَعَلَّلَ، وَحْدَة، عَشِيرَة، قَرَابَة، رَجَمَ، تَخَلَّصَ، اِسْتَنْكَرَ،
// قَادِر، قَاهِر، أَهْوَن، عُرْضَة، مَرَض، هَلَاك، عَجْز، فَقِهَ، رَهْط، ظِهْرِيّ، ضَعْف،
// أَعَزُّ، اِتَّخَذَ، وَرَاء).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'شُعَيْبٌ يَتَعَجَّبُ مِنْ قَوْمِهِ', en: 'Shuʿayb Is Astonished at His People' },
  newWords: ['تَعَلَّلَ', 'وَحْدَة', 'عَشِيرَة', 'قَرَابَة', 'رَجَمَ', 'تَخَلَّصَ', 'اِسْتَنْكَرَ', 'قَادِر', 'قَاهِر', 'أَهْوَن', 'عُرْضَة', 'مَرَض', 'هَلَاك', 'عَجْز', 'فَقِهَ', 'رَهْط', 'ظِهْرِيّ', 'ضَعْف', 'أَعَزُّ', 'اِتَّخَذَ', 'وَرَاء'],
  lemmas: {
    تَعَلَّلَ: { gloss: 'to make excuse, find pretext' },
    وَحْدَة: { gloss: 'solitude, being alone' },
    عَشِيرَة: { gloss: 'clan, tribe' },
    قَرَابَة: { gloss: 'kinship, relations' },
    رَجَمَ: { gloss: 'to stone' },
    تَخَلَّصَ: { gloss: 'to rid oneself, escape' },
    اِسْتَنْكَرَ: { gloss: 'to disapprove, find objectionable' },
    قَادِر: { gloss: 'able, powerful' },
    قَاهِر: { gloss: 'the Subduer, all-compelling' },
    أَهْوَن: { gloss: 'more insignificant, easier' },
    عُرْضَة: { gloss: 'liable, exposed to' },
    مَرَض: { gloss: 'sickness, disease' },
    هَلَاك: { gloss: 'ruin, destruction' },
    عَجْز: { gloss: 'incapacity, weakness' },
    فَقِهَ: { gloss: 'to understand, comprehend' },
    رَهْط: { gloss: 'clan, small band of kinsmen' },
    ظِهْرِيّ: { gloss: 'cast behind, disregarded' },
    ضَعْف: { gloss: 'weakness' },
    أَعَزُّ: { gloss: 'dearer, more precious' },
    اِتَّخَذَ: { gloss: 'to take, adopt' },
    وَرَاء: { gloss: 'behind' },
  },
  paragraphs: [
    {
      en: "They made excuse of his weakness and his solitude, claiming that were it not for his clan and their kinship with him, they would have stoned him with stones and rid themselves of him. Shuʿayb disapproved of that, and marveled that Allah -- the Mighty, the Able, the Strong, the Subduer -- should be more insignificant to them than a clan exposed to sicknesses, ruin, weakness, and incapacity.",
      sentences: [
        {
          id: 'qs-v8-c09-001',
          ar: 'وَتَعَلَّلُوا بِضَعْفِهِ وَوَحْدَتِهِ',
          en: 'And they made excuse of his weakness and his solitude',
          tokens: [
            { surface: 'وَتَعَلَّلُوا', lemma: 'تَعَلَّلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ع ل ل', gloss: 'to make excuse, find pretext; and they made excuse' },
            { surface: 'بِضَعْفِهِ', lemma: 'ضَعْف', pos: 'noun', features: 'prep+gen+3ms', root: 'ض ع ف', gloss: 'his weakness' },
            { surface: 'وَوَحْدَتِهِ', lemma: 'وَحْدَة', pos: 'noun', features: 'conj+gen+3ms', root: 'و ح د', gloss: 'and his solitude' },
          ],
        },
        {
          id: 'qs-v8-c09-002',
          ar: 'وَأَنَّهُ لَوْلَا عَشِيرَتُهُ وَقَرَابَتُهُمْ لَهُ',
          en: 'and that were it not for his clan and their kinship with him',
          tokens: [
            { surface: 'وَأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and that (it)' },
            { surface: 'لَوْلَا', lemma: 'لَوْلَا', pos: 'part', features: 'part', gloss: 'were it not for' },
            { surface: 'عَشِيرَتُهُ', lemma: 'عَشِيرَة', pos: 'noun', features: 'nom+3ms', root: 'ع ش ر', gloss: 'his clan' },
            { surface: 'وَقَرَابَتُهُمْ', lemma: 'قَرَابَة', pos: 'noun', features: 'conj+nom+3mp', root: 'ق ر ب', gloss: 'and their kinship' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v8-c09-003',
          ar: 'لَرَجَمُوهُ بِالْحِجَارَةِ،',
          en: 'they would have stoned him with stones,',
          tokens: [
            { surface: 'لَرَجَمُوهُ', lemma: 'رَجَمَ', pos: 'verb', features: 'part+perf.3mp+3ms', root: 'ر ج م', gloss: 'to stone; they would have stoned him' },
            { surface: 'بِالْحِجَارَةِ', lemma: 'حِجَارَة', pos: 'noun', features: 'prep+def.gen', gloss: 'with the stones' },
          ],
        },
        {
          id: 'qs-v8-c09-004',
          ar: 'وَتَخَلَّصُوا مِنْهُ،',
          en: 'and rid themselves of him,',
          tokens: [
            { surface: 'وَتَخَلَّصُوا', lemma: 'تَخَلَّصَ', pos: 'verb', features: 'conj+perf.3mp', root: 'خ ل ص', gloss: 'to rid oneself, escape; and rid themselves' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'of him' },
          ],
        },
        {
          id: 'qs-v8-c09-005',
          ar: 'وَقَدِ اسْتَنكَرَ ذَلِكَ شُعَيْبٌ،',
          en: 'Shuʿayb disapproved of that,',
          tokens: [
            { surface: 'وَقَدِ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'اسْتَنكَرَ', lemma: 'اِسْتَنْكَرَ', pos: 'verb', features: 'perf.3ms', root: 'ن ك ر', gloss: 'to disapprove, find objectionable; disapproved of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'شُعَيْبٌ', lemma: 'شُعَيْب', pos: 'proper', features: 'nom', gloss: 'Shuʿayb' },
          ],
        },
        {
          id: 'qs-v8-c09-006',
          ar: 'وَتَعَجَّبَ مِنْ أَنْ يَكُونَ اللَّهُ الْعَزِيزُ الْقَادِرُ وَالْقَوِيُّ الْقَاهِرُ،',
          en: "and marveled that Allah -- the Mighty, the Able, and the Strong, the Subduer --",
          tokens: [
            { surface: 'وَتَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to marvel, be astonished; and marveled' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; should be' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْعَزِيزُ', lemma: 'عَزِيز', pos: 'adj', features: 'def.nom', gloss: 'the Mighty' },
            { surface: 'الْقَادِرُ', lemma: 'قَادِر', pos: 'adj', features: 'def.nom', root: 'ق د ر', gloss: 'the Able, All-Powerful' },
            { surface: 'وَالْقَوِيُّ', lemma: 'قَوِيّ', pos: 'adj', features: 'conj+def.nom', gloss: 'and the Strong' },
            { surface: 'الْقَاهِرُ', lemma: 'قَاهِر', pos: 'adj', features: 'def.nom', root: 'ق ه ر', gloss: 'the Subduer' },
          ],
        },
        {
          id: 'qs-v8-c09-007',
          ar: 'أَهْوَنَ عَلَيْهِمْ مِنْ عَشِيرَةٍ',
          en: 'should be more insignificant to them than a clan',
          tokens: [
            { surface: 'أَهْوَنَ', lemma: 'أَهْوَن', pos: 'adj', features: 'acc', root: 'ه و ن', gloss: 'more insignificant' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'عَشِيرَةٍ', lemma: 'عَشِيرَة', pos: 'noun', features: 'indef.gen', root: 'ع ش ر', gloss: 'a clan' },
          ],
        },
        {
          id: 'qs-v8-c09-008',
          ar: 'هِيَ عُرْضَةٌ لِلْأَمْرَاضِ وَالْهَلَاكِ وَالضَّعْفِ وَالْعَجْزِ.',
          en: 'that is exposed to sicknesses, ruin, weakness, and incapacity.',
          tokens: [
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'it (is)' },
            { surface: 'عُرْضَةٌ', lemma: 'عُرْضَة', pos: 'noun', features: 'indef.nom', root: 'ع ر ض', gloss: 'exposed, liable' },
            { surface: 'لِلْأَمْرَاضِ', lemma: 'مَرَض', pos: 'noun', features: 'prep+pl.def.gen', root: 'م ر ض', gloss: 'to the sicknesses' },
            { surface: 'وَالْهَلَاكِ', lemma: 'هَلَاك', pos: 'noun', features: 'conj+def.gen', root: 'ه ل ك', gloss: 'and ruin' },
            { surface: 'وَالضَّعْفِ', lemma: 'ضَعْف', pos: 'noun', features: 'conj+def.gen', root: 'ض ع ف', gloss: 'and weakness' },
            { surface: 'وَالْعَجْزِ', lemma: 'عَجْز', pos: 'noun', features: 'conj+def.gen', root: 'ع ج ز', gloss: 'and incapacity' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَرْجُمْ قَوْمُ شُعَيْبٍ نَبِيَّهُمْ رَغْمَ تَهْدِيدِهِمْ؟',
          options: ['لِأَنَّ عَشِيرَتَهُ وَقَرَابَتَهُمْ لَهُ كَانَتْ تَمْنَعُهُمْ', 'لِأَنَّهُمْ كَانُوا يَخَافُونَ اللَّهَ', 'لِأَنَّ شُعَيْباً كَانَ قَوِيّاً جِسْمِيّاً'],
          answer: 0,
          qEn: "Why didn't Shuʿayb's people stone their prophet despite their threats?",
          optionsEn: ['Because his clan and their kinship with him held them back', 'Because they feared Allah', 'Because Shuʿayb was physically strong'],
        },
      ],
    },
    {
      en: '"They said: O Shuʿayb, we do not understand much of what you say, and we surely see you as weak among us. Were it not for your clan, we would have stoned you, and you are not dear to us."',
      sentences: [
        {
          id: 'qs-v8-c09-009',
          ar: '﴿قَالُوا يَاشُعَيْبُ مَا نَفْقَهُ كَثِيرًا مِّمَّا تَقُولُ﴾',
          en: '"They said: O Shuʿayb, we do not understand much of what you say,',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
            { surface: 'يَاشُعَيْبُ', lemma: 'شُعَيْب', pos: 'proper', features: 'voc', gloss: 'O Shuʿayb' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَفْقَهُ', lemma: 'فَقِهَ', pos: 'verb', features: 'impf.1p', root: 'ف ق ه', gloss: 'to understand, comprehend; we understand' },
            { surface: 'كَثِيرًا', lemma: 'كَثِير', pos: 'noun', features: 'indef.acc', gloss: 'much' },
            { surface: 'مِّمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'تَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.2ms', gloss: 'to say; you say' },
          ],
        },
        {
          id: 'qs-v8-c09-010',
          ar: '﴿وَإِنَّا لَنَرَاكَ فِينَا ضَعِيفًا وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ﴾',
          en: 'and we surely see you as weak among us. Were it not for your clan, we would have stoned you,',
          tokens: [
            { surface: 'وَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'لَنَرَاكَ', lemma: 'رَأَى', pos: 'verb', features: 'part+impf.1p+2ms', gloss: 'to see; we surely see you' },
            { surface: 'فِينَا', lemma: 'فِي', pos: 'prep', features: 'prep+1p', gloss: 'among us' },
            { surface: 'ضَعِيفًا', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.acc', gloss: 'weak' },
            { surface: 'وَلَوْلَا', lemma: 'لَوْلَا', pos: 'part', features: 'conj+part', gloss: 'and were it not for' },
            { surface: 'رَهْطُكَ', lemma: 'رَهْط', pos: 'noun', features: 'nom+2ms', root: 'ر ه ط', gloss: 'your clan' },
            { surface: 'لَرَجَمْنَاكَ', lemma: 'رَجَمَ', pos: 'verb', features: 'part+perf.1p+2ms', root: 'ر ج م', gloss: 'to stone; we would have stoned you' },
          ],
        },
        {
          id: 'qs-v8-c09-011',
          ar: '﴿وَمَا أَنتَ عَلَيْنَا بِعَزِيزٍ﴾.',
          en: 'and you are not dear to us."',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'بِعَزِيزٍ', lemma: 'عَزِيز', pos: 'adj', features: 'prep+indef.gen', gloss: 'dear, esteemed' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا زَعَمَ قَوْمُ شُعَيْبٍ أَنَّهُمْ لَا يَفْقَهُونَ؟',
          options: ['كَثِيرًا مِمَّا يَقُولُهُ شُعَيْبٌ', 'لُغَةَ شُعَيْبٍ الْأَصْلِيَّةَ', 'الْكِتَابَةَ وَالْقِرَاءَةَ'],
          answer: 0,
          qEn: "What did Shuʿayb's people claim they did not understand?",
          optionsEn: ["Much of what Shuʿayb says", "Shuʿayb's native language", 'Reading and writing'],
        },
      ],
    },
    {
      en: '"He said: O my people, is my clan dearer to you than Allah, that you have cast Him behind your backs? Indeed my Lord encompasses all that you do."',
      sentences: [
        {
          id: 'qs-v8-c09-012',
          ar: '﴿قَالَ يَاقَوْمِ أَرَهْطِي أَعَزُّ عَلَيْكُم مِّنَ اللَّهِ﴾',
          en: '"He said: O my people, is my clan dearer to you than Allah,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'يَاقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+1s', gloss: 'O my people' },
            { surface: 'أَرَهْطِي', lemma: 'رَهْط', pos: 'noun', features: 'part+nom+1s', root: 'ر ه ط', gloss: 'is my clan' },
            { surface: 'أَعَزُّ', lemma: 'أَعَزُّ', pos: 'adj', features: 'nom', root: 'ع ز ز', gloss: 'dearer' },
            { surface: 'عَلَيْكُم', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'مِّنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v8-c09-013',
          ar: '﴿وَاتَّخَذْتُمُوهُ وَرَاءَكُمْ ظِهْرِيًّا﴾',
          en: 'that you have cast Him behind your backs?',
          tokens: [
            { surface: 'وَاتَّخَذْتُمُوهُ', lemma: 'اِتَّخَذَ', pos: 'verb', features: 'conj+perf.2mp+3ms', root: 'أ خ ذ', gloss: 'to take, adopt; and you have taken Him' },
            { surface: 'وَرَاءَكُمْ', lemma: 'وَرَاء', pos: 'prep', features: 'prep+2mp', root: 'و ر ي', gloss: 'behind you' },
            { surface: 'ظِهْرِيًّا', lemma: 'ظِهْرِيّ', pos: 'noun', features: 'indef.acc', root: 'ظ ه ر', gloss: 'cast behind, disregarded' },
          ],
        },
        {
          id: 'qs-v8-c09-014',
          ar: '﴿إِنَّ رَبِّي بِمَا تَعْمَلُونَ مُحِيطٌ﴾.',
          en: 'Indeed my Lord encompasses all that you do."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'my Lord' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'تَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.2mp', gloss: 'to do; you do' },
            { surface: 'مُحِيطٌ', lemma: 'مُحِيط', pos: 'adj', features: 'indef.nom', gloss: 'all-encompassing' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا وَبَّخَ شُعَيْبٌ قَوْمَهُ فِي رَدِّهِ؟',
          options: ['بِأَنَّهُمْ جَعَلُوا رَهْطَهُ أَعَزَّ عَلَيْهِمْ مِنَ اللَّهِ وَاتَّخَذُوهُ وَرَاءَهُمْ', 'بِأَنَّهُمْ لَمْ يُؤَدُّوا الزَّكَاةَ', 'بِأَنَّهُمْ سَافَرُوا كَثِيراً'],
          answer: 0,
          qEn: "What did Shuʿayb rebuke his people for in his reply?",
          optionsEn: ['That they held his clan dearer to them than Allah, and cast Him behind their backs', 'That they did not pay zakat', 'That they traveled too much'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'تَعَجَّبَ شُعَيْبٌ مِنْ أَنْ يَكُونَ اللَّهُ',
        post: 'عَلَيْهِمْ مِنْ عَشِيرَةٍ ضَعِيفَةٍ.',
        en: 'Shuʿayb marveled that Allah should be more insignificant to them than a weak clan.',
        options: ['أَهْوَنَ', 'أَهْوَنُ', 'أَهْوَنٍ', 'هَيِّنًا'],
        answer: 0,
        rationales: [
          'Accusative -- the predicate of يَكُونَ, which takes the accusative like كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ/يَكُونَ is accusative, not nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          '"easy" (positive, not elative) -- wrong word; the sentence needs the comparative "more insignificant."',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَوْلَا عَشِيرَتُهُ',
        post: 'بِالْحِجَارَةِ.',
        en: 'Were it not for his clan, they would have stoned him with stones.',
        options: ['لَرَجَمُوهُ', 'رَجَمُوهُ', 'يَرْجُمُوهُ', 'لِيَرْجُمُوهُ'],
        answer: 0,
        rationales: [
          'Emphatic لَ + perfect -- the required جواب لولا (response clause) marker fused onto the perfect verb.',
          'Plain perfect, no لَ -- missing the required جواب لولا marker.',
          'Imperfect -- wrong tense; the response to لَوْلَا takes the perfect.',
          'لِ + subjunctive -- wrong particle; this is not a purpose clause.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدِ',
        post: 'ذَلِكَ شُعَيْبٌ.',
        en: 'Shuʿayb disapproved of that.',
        options: ['اسْتَنكَرَ', 'يَسْتَنكِرُ', 'اسْتَنكَرُوا', 'مُسْتَنكِرٌ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- matches the completed action and singular subject شُعَيْبٌ.',
          'Imperfect -- wrong tense after قَدْ + a completed narration.',
          '3rd masculine plural -- wrong number; the subject شُعَيْبٌ is singular.',
          'Active participle (noun) -- wrong part of speech for the main verb of this clause.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَفْقَهُ الرَّجُلُ كَلَامَ شُعَيْبٍ',
        pre: '',
        post: 'كَلَامَ شُعَيْبٍ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَفْقَهُ', 'يَفْقَهُ', 'تَفْقَهُ', 'أَفْقَهُ'],
        answer: 0,
        rationales: [
          '1st plural imperfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; the target is "we," not "you."',
          '1st singular -- wrong number; the target is "we," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَفْقَهُ الرَّجُلُ كَلَامَ شُعَيْبٍ',
        pre: '',
        post: 'كَلَامَ شُعَيْبٍ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you all (m)',
        options: ['تَفْقَهُونَ', 'يَفْقَهُ', 'نَفْقَهُ', 'أَفْقَهُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st plural -- wrong person; the target is "you all," not "we."',
          '1st singular -- wrong person; the target is "you all," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَفْقَهُ الرَّجُلُ كَلَامَ شُعَيْبٍ',
        pre: '',
        post: 'كَلَامَ شُعَيْبٍ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَفْقَهُونَ', 'يَفْقَهُ', 'تَفْقَهُونَ', 'نَفْقَهُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine plural -- wrong person; this is "they," not "you all."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

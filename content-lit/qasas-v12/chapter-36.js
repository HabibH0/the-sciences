// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 36 -- بِشَارَتُهُ بِبَعْثَةِ سَيِّدِنَا مُحَمَّدٍ ﷺ.
// Printed page 272 only (top half, right after ch35's closing text and its
// own heading box; ends before ch37's heading box further down the same
// page). Transcribed by hand from the scan (vision OCR, 150dpi render)
// against ../CHAPTER-FORMAT.md.
//
// Isa did not live to complete his mission in person -- the intensity of
// the Jews' hostility and plotting against him, his own human weakness,
// and the fewness of his supporters cut it short. So before his departure
// he complied with Allah's command and gave the people the glad tidings of
// a messenger yet to come who would complete what he had begun and make
// universal what had until then been particular (to the Children of
// Israel) -- perfecting Allah's favor on His servants and establishing His
// proof against His creation. The chapter closes by quoting the Qur'an's
// own record of Isa's words to this effect (Sūrat aṣ-Ṣaff 61:6), which the
// chapter's title directly echoes.
//
// Grammar / lexical notes:
//   -- The Qur'an quote (qs-v12-c36-009/010) is Sūrat aṣ-Ṣaff 61:6, quoted
//      by the book only as far as "اسْمُهُ أَحْمَدُ" -- the ayah's remainder
//      ("فَلَمَّا جَاءَهُم بِالْبَيِّنَاتِ...") is not printed on this page and is
//      not transcribed here. Split into two sentence entries at its own
//      internal وَ-clause boundary (address clause vs. the two participial
//      clauses مُصَدِّقًا/وَمُبَشِّرًا), wrapped in ﴿ ﴾ on the `ar` string per the
//      qasas-v3/chapter-14.js precedent; the bracket glyphs are not their
//      own tokens. Tokenized and translated in full, with no shortening,
//      per the house convention (Qur'an quotes are real drillable prose in
//      the shipped corpus, not deliberately truncated).
//   -- أَكْمَلَ (qs-v12-c36-001's يُكْمِلْ, form IV "to complete, perfect") and
//      كَمَّلَ (qs-v12-c36-005's يُكَمِّلُ, form II, same meaning) are two
//      distinct printed words in this same chapter, same root ك م ل,
//      tagged as two distinct lemmas per the derived-verb-form convention
//      (qasas-v3 ch14's آمَنَ vs مُؤْمِن note). Likewise عَمَّمَ ("to make
//      universal") and خَصَّصَ ("to specify") are their own form-II lemmas.
//   -- مُصَدِّق (qs-v12-c36-009, active participle of the already-taught
//      صَدَّقَ) and مُبَشِّر (qs-v12-c36-010, active participle of the
//      already-taught بَشَّرَ) are each tagged as their own lemma, distinct
//      from the underlying verb, per the same participle-as-distinct-lemma
//      convention.
//   -- نَاصِر (qs-v12-c36-002's plural أَنْصَارِهِ) is tagged with the singular
//      as lemma, per the corpus's plural-lemma-is-singular convention
//      (رِجَال→رَجُل, أَوْلَاد→وَلَد in qasas-v3/chapter-01.js).
//   -- Judgment call, flagged for review: the closed set of the most basic
//      function words and near-universal names/verbs -- مِنْ، فِي، بِ، لِ،
//      عَلَى، مَا، يَا، إِلَى، إِنَّ، اللَّه، قَالَ، النَّاس (lemma نَاس)، ابْن،
//      بَعْد -- do not appear anywhere in the consolidated known-lemmas
//      list, yet qasas-v3/chapter-01.js and chapter-14.js's own header
//      comments both treat an equivalent set as "already taught" without
//      being in newWords. Treated here the same way: used with inline
//      token gloss, not added to newWords/lemmas. Flagging بَعْد
//      specifically, since it is less obviously primer-level than the
//      prepositions -- a second pass may want it added properly if it
//      truly has never been taught.
//   -- Per the task brief, عِيسَى، الْمَسِيح، مَرْيَم، إِسْرَائِيل، يَهُود are this
//      volume's own core proper nouns (absent from the known-lemmas list
//      by design, per the instructions) and are marked new here at their
//      first occurrence within this agent's four chapters (36-39); a
//      centralized pass will deduplicate against wherever volume 12's own
//      earlier chapters (1-35) actually first introduced them.
//
// No page footnotes (book_note) on this page.
//
// 25 new words (الْمَسِيح، مُهِمَّة، شِدَّة، مُحَارَبَة، يَهُود، كَيْد، ضَعْف، قِلَّة،
// نَاصِر، امْتَثَلَ، أَكْمَلَ، كَمَّلَ، عَمَّمَ، خَصَّصَ، تَمَّ، نِعْمَة، حُجَّة، عِيسَى،
// مَرْيَم، إِسْرَائِيل، مُصَدِّق، بَيْن، تَوْرَاة، مُبَشِّر، أَحْمَد).
export const CHAPTER = {
  id: 'ch36',
  title: { ar: 'بِشَارَتُهُ بِبَعْثَةِ سَيِّدِنَا مُحَمَّدٍ ﷺ', en: "His Glad Tiding of Muhammad's ﷺ Mission" },
  newWords: [
    'مُهِمَّة', 'شِدَّة', 'مُحَارَبَة', 'قِلَّة', 'امْتَثَلَ', 'أَكْمَلَ',
    'كَمَّلَ', 'عَمَّمَ', 'خَصَّصَ', 'تَمَّ', 'بَيْن', 'مُبَشِّر',
    'أَحْمَد',
  ],
  lemmas: {
    الْمَسِيح: { gloss: 'the Messiah (Isa)' },
    مُهِمَّة: { gloss: 'mission, task' },
    شِدَّة: { gloss: 'intensity, severity' },
    مُحَارَبَة: { gloss: 'fighting, waging hostility against' },
    يَهُود: { gloss: 'Jews' },
    كَيْد: { gloss: 'scheming, plotting' },
    ضَعْف: { gloss: 'weakness' },
    قِلَّة: { gloss: 'fewness, scarcity' },
    نَاصِر: { gloss: 'helper, supporter' },
    امْتَثَلَ: { gloss: 'to comply with, obey exactly' },
    أَكْمَلَ: { gloss: 'to complete, perfect' },
    كَمَّلَ: { gloss: 'to complete, finish off' },
    عَمَّمَ: { gloss: 'to generalize, make universal' },
    خَصَّصَ: { gloss: 'to specify, make particular' },
    تَمَّ: { gloss: 'to be complete, be perfected' },
    نِعْمَة: { gloss: 'favor, blessing' },
    حُجَّة: { gloss: 'proof, argument' },
    عِيسَى: { gloss: 'Isa (Jesus)' },
    مَرْيَم: { gloss: 'Maryam (Mary)' },
    إِسْرَائِيل: { gloss: 'Israel' },
    مُصَدِّق: { gloss: 'confirming' },
    بَيْن: { gloss: 'between' },
    تَوْرَاة: { gloss: 'the Torah' },
    مُبَشِّر: { gloss: 'bringing good tidings of' },
    أَحْمَد: { gloss: 'Ahmad (a name of the Prophet Muhammad ﷺ)' },
  },
  paragraphs: [
    {
      en: "Our master al-Masih did not complete his mission of calling people, because of the intensity of the Jews' hostility, their scheming against him, his weakness, and the fewness of his supporters. So he bade the people farewell, complied with his Lord's command, and gave the people the glad tidings of a messenger who would come after him to complete what he had begun and make universal what he had made specific -- through whom Allah's favor upon His servants would be perfected and His proof against His creation established: \"And when Isa, son of Maryam, said: O Children of Israel, I am the messenger of Allah to you, confirming what came before me of the Torah, and bringing good tidings of a messenger to come after me whose name is Ahmad.\"",
      sentences: [
        {
          id: 'qs-v12-c36-001',
          ar: 'وَلَمْ يُكْمِلْ سَيِّدُنَا الْمَسِيحُ مُهِمَّتَهُ فِي الدَّعْوَةِ لِشِدَّةِ مُحَارَبَةِ الْيَهُودِ وَكَيْدِهِمْ لَهُ،',
          en: "Our master al-Masih did not complete his mission of calling people, owing to the intensity of the Jews' hostility and their scheming against him,",
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُكْمِلْ', lemma: 'أَكْمَلَ', pos: 'verb', features: 'impf.3ms', root: 'ك م ل', gloss: 'to complete, perfect; did not complete' },
            { surface: 'سَيِّدُنَا', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1p', gloss: 'our master' },
            { surface: 'الْمَسِيحُ', lemma: 'الْمَسِيح', pos: 'proper', features: 'nom', gloss: 'al-Masih' },
            { surface: 'مُهِمَّتَهُ', lemma: 'مُهِمَّة', pos: 'noun', features: 'acc+3ms', gloss: 'his mission' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'def.gen', gloss: 'the calling, the mission' },
            { surface: 'لِشِدَّةِ', lemma: 'شِدَّة', pos: 'noun', features: 'prep+constr.gen', gloss: 'due to the intensity of' },
            { surface: 'مُحَارَبَةِ', lemma: 'مُحَارَبَة', pos: 'noun', features: 'constr.gen', root: 'ح ر ب', gloss: 'the fighting of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'noun', features: 'def.gen', gloss: 'the Jews' },
            { surface: 'وَكَيْدِهِمْ', lemma: 'كَيْد', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their scheming' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'against him' },
          ],
        },
        {
          id: 'qs-v12-c36-002',
          ar: 'وَضَعْفِهِ وَقِلَّةِ أَنْصَارِهِ،',
          en: 'his weakness, and the fewness of his supporters,',
          tokens: [
            { surface: 'وَضَعْفِهِ', lemma: 'ضَعْف', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his weakness' },
            { surface: 'وَقِلَّةِ', lemma: 'قِلَّة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and the fewness of' },
            { surface: 'أَنْصَارِهِ', lemma: 'نَاصِر', pos: 'noun', features: 'pl.gen+3ms', gloss: 'his supporters' },
          ],
        },
        {
          id: 'qs-v12-c36-003',
          ar: 'فَوَدَّعَ النَّاسَ،',
          en: 'so he bade the people farewell,',
          tokens: [
            { surface: 'فَوَدَّعَ', lemma: 'وَدَّعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bid farewell; so he bade farewell' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v12-c36-004',
          ar: 'وَامْتَثَلَ أَمْرَ رَبِّهِ،',
          en: 'complied with his Lord\'s command,',
          tokens: [
            { surface: 'وَامْتَثَلَ', lemma: 'امْتَثَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'م ث ل', gloss: 'to comply with; and complied with' },
            { surface: 'أَمْرَ', lemma: 'أَمْر', pos: 'noun', features: 'acc.constr', gloss: 'the command of' },
            { surface: 'رَبِّهِ', lemma: 'رَبّ', pos: 'noun', features: 'gen+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v12-c36-005',
          ar: 'وَبَشَّرَ الناسَ بِرَسُولٍ يَأْتِي مِنْ بَعْدِهِ يُكَمِّلُ مَا بَدَأَهُ،',
          en: 'and gave the people the glad tidings of a messenger who would come after him, completing what he had begun,',
          tokens: [
            { surface: 'وَبَشَّرَ', lemma: 'بَشَّرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to give glad tidings; and gave glad tidings' },
            { surface: 'الناسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'بِرَسُولٍ', lemma: 'رَسُول', pos: 'noun', features: 'prep+indef.gen', gloss: 'of a messenger' },
            { surface: 'يَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', gloss: 'to come; who comes' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَعْدِهِ', lemma: 'بَعْد', pos: 'noun', features: 'gen+3ms', gloss: 'after him' },
            { surface: 'يُكَمِّلُ', lemma: 'كَمَّلَ', pos: 'verb', features: 'impf.3ms', root: 'ك م ل', gloss: 'to complete; completing' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'بَدَأَهُ', lemma: 'بَدَأَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to begin; he began it' },
          ],
        },
        {
          id: 'qs-v12-c36-006',
          ar: 'وَيُعَمِّمُ مَا خَصَّصَهُ،',
          en: 'and making universal what he had made particular,',
          tokens: [
            { surface: 'وَيُعَمِّمُ', lemma: 'عَمَّمَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ع م م', gloss: 'to generalize; and making universal' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'خَصَّصَهُ', lemma: 'خَصَّصَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'خ ص ص', gloss: 'to specify; he had specified it' },
          ],
        },
        {
          id: 'qs-v12-c36-007',
          ar: 'وَبِهِ تَتِمُّ نِعْمَةُ اللَّهِ عَلَى عِبَادِهِ،',
          en: "and through whom Allah's favor upon His servants is perfected,",
          tokens: [
            { surface: 'وَبِهِ', lemma: 'بِ', pos: 'prep', features: 'conj+prep+3ms', gloss: 'and through him' },
            { surface: 'تَتِمُّ', lemma: 'تَمَّ', pos: 'verb', features: 'impf.3fs', root: 'ت م م', gloss: 'to be complete; is perfected' },
            { surface: 'نِعْمَةُ', lemma: 'نِعْمَة', pos: 'noun', features: 'constr.nom', gloss: 'the favor of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'عِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'pl.gen+3ms', gloss: 'His servants' },
          ],
        },
        {
          id: 'qs-v12-c36-008',
          ar: 'وَتَقُومُ حُجَّتُهُ عَلَى خَلْقِهِ:',
          en: 'and His proof against His creation is established:',
          tokens: [
            { surface: 'وَتَقُومُ', lemma: 'قَامَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to stand, be established; and is established' },
            { surface: 'حُجَّتُهُ', lemma: 'حُجَّة', pos: 'noun', features: 'nom+3ms', gloss: 'His proof' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'خَلْقِهِ', lemma: 'خَلْق', pos: 'noun', features: 'gen+3ms', gloss: 'His creation' },
          ],
        },
        {
          id: 'qs-v12-c36-009',
          ar: '﴿وَإِذْ قَالَ عِيسَى ابْنُ مَرْيَمَ يَابَنِي إِسْرَآئِيلَ إِنِّي رَسُولُ اللَّهِ إِلَيْكُم مُّصَدِّقًا لِّمَا بَيْنَ يَدَيَّ مِنَ التَّوْرَاةِ',
          en: 'And [remember] when Isa, son of Maryam, said: O Children of Israel, indeed I am the messenger of Allah to you, confirming what came before me of the Torah,',
          tokens: [
            { surface: 'وَإِذْ', lemma: 'إِذْ', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa' },
            { surface: 'ابْنُ', lemma: 'ابْن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
            { surface: 'يَابَنِي', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'إِسْرَآئِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'رَسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'nom.constr', gloss: 'the messenger of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِلَيْكُم', lemma: 'إِلَى', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'مُّصَدِّقًا', lemma: 'مُصَدِّق', pos: 'noun', features: 'indef.acc', root: 'ص د ق', gloss: 'confirming' },
            { surface: 'لِّمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'what' },
            { surface: 'بَيْنَ', lemma: 'بَيْن', pos: 'noun', features: 'acc', gloss: 'between' },
            { surface: 'يَدَيَّ', lemma: 'يَد', pos: 'noun', features: 'du.gen+1s', gloss: 'my two hands (before me)' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'التَّوْرَاةِ', lemma: 'تَوْرَاة', pos: 'proper', features: 'def.gen', gloss: 'the Torah' },
          ],
        },
        {
          id: 'qs-v12-c36-010',
          ar: 'وَمُبَشِّرًا بِرَسُولٍ يَأْتِي مِن بَعْدِي اسْمُهُ أَحْمَدُ﴾.',
          en: 'and bringing good tidings of a messenger to come after me, whose name is Ahmad."',
          tokens: [
            { surface: 'وَمُبَشِّرًا', lemma: 'مُبَشِّر', pos: 'noun', features: 'conj+indef.acc', root: 'ب ش ر', gloss: 'and bringing good tidings of' },
            { surface: 'بِرَسُولٍ', lemma: 'رَسُول', pos: 'noun', features: 'prep+indef.gen', gloss: 'of a messenger' },
            { surface: 'يَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', gloss: 'to come; who comes' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَعْدِي', lemma: 'بَعْد', pos: 'noun', features: 'gen+1s', gloss: 'after me' },
            { surface: 'اسْمُهُ', lemma: 'اسْم', pos: 'noun', features: 'nom+3ms', gloss: 'his name' },
            { surface: 'أَحْمَدُ', lemma: 'أَحْمَد', pos: 'proper', features: 'nom', gloss: 'Ahmad' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِسَيِّدِنَا الْمَسِيحِ فِي دَعْوَتِهِ بِسَبَبِ الْيَهُودِ؟',
          options: [
            'لَمْ يُكْمِلْ مُهِمَّتَهُ لِشِدَّةِ مُحَارَبَةِ الْيَهُودِ وَكَيْدِهِمْ لَهُ',
            'أَكْمَلَ دَعْوَتَهُ بِلَا أَيِّ عَائِقٍ',
            'انْضَمَّ إِلَى الْيَهُودِ',
          ],
          answer: 0,
          qEn: 'What happened to our master al-Masih in his mission because of the Jews?',
          optionsEn: [
            "He did not complete his mission, owing to the intensity of the Jews' hostility and scheming against him",
            'He completed his mission without any obstacle',
            'He joined the Jews',
          ],
        },
        {
          q: 'بِمَاذَا بَشَّرَ عِيسَى النَّاسَ؟',
          options: [
            'بِرَسُولٍ يَأْتِي مِنْ بَعْدِهِ يُكَمِّلُ مَا بَدَأَهُ وَيُعَمِّمُ مَا خَصَّصَهُ',
            'بِنَبِيٍّ آخَرَ مِنْ بَنِي إِسْرَائِيلَ',
            'بِأَنَّهُ سَيَبْقَى إِلَى الْأَبَدِ',
          ],
          answer: 0,
          qEn: 'What did Isa give the people the glad tidings of?',
          optionsEn: [
            'Of a messenger who would come after him, completing what he had begun and making universal what he had made particular',
            'Of another prophet from the Children of Israel',
            'That he himself would remain forever',
          ],
        },
        {
          q: 'مَا اسْمُ الرَّسُولِ الَّذِي بَشَّرَ بِهِ عِيسَى فِي الْآيَةِ الْقُرْآنِيَّةِ؟',
          options: ['أَحْمَدُ', 'مُوسَى', 'إِلْيَاس'],
          answer: 0,
          qEn: "What is the name of the messenger Isa gave glad tidings of in the Qur'anic verse?",
          optionsEn: ['Ahmad', 'Musa', 'Ilyas'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'يُكَمِّلُ مَا',
        post: '.',
        en: 'He completes what he began.',
        options: ['بَدَأَهُ', 'يَبْدَأُهُ', 'ابْدَأْهُ', 'بَادِئُهُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular + object suffix -- a completed action, matching the recurring "مَا + perfect verb" relative-clause frame.',
          'Imperfect -- wrong tense; the relative clause narrates something already begun.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَوَدَّعَ النَّاسَ، وَ',
        post: 'أَمْرَ رَبِّهِ.',
        en: "So he bade the people farewell, and complied with his Lord's command.",
        options: ['امْتَثَلَ', 'يَمْتَثِلُ', 'امْتَثِلْ', 'مُمْتَثِل'],
        answer: 0,
        rationales: [
          'Perfect 3rd masculine singular -- continues the chain of وَ + perfect verbs (وَدَّعَ ... امْتَثَلَ ... بَشَّرَ) narrating what he did.',
          'Imperfect -- breaks the perfect-tense narrative chain.',
          'Imperative -- wrong mood; this is narration, not a command.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَبِهِ تَتِمُّ',
        post: 'اللَّهِ عَلَى عِبَادِهِ.',
        en: "Through him Allah's favor upon His servants is perfected.",
        options: ['نِعْمَةُ', 'نِعْمَةَ', 'نِعْمَةِ', 'نِعْمَتُهُ'],
        answer: 0,
        rationales: [
          'Nominative, construct -- subject of تَتِمُّ and first term of an إضافة with اللَّهِ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case for the same reason.',
          'With a possessive suffix -- wrong; the construct here takes اللَّهِ directly as the second term.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَأْتِي الرَّسُولُ مِن بَعْدِهِ',
        pre: '',
        post: 'مِن بَعْدِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['آتِي', 'يَأْتِي', 'تَأْتِي', 'نَأْتِي'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَأْتِي الرَّسُولُ مِن بَعْدِهِ',
        pre: '',
        post: 'مِن بَعْدِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَأْتُونَ', 'يَأْتِي', 'تَأْتِي', 'نَأْتِي'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَأْتِي الرَّسُولُ مِن بَعْدِهِ',
        pre: '',
        post: 'مِن بَعْدِهِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['تَأْتِي', 'يَأْتِي', 'آتِي', 'نَأْتِي'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

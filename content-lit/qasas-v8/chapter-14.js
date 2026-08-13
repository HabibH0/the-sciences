// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 14 (FINAL
// CHAPTER of this volume) -- بَلَّغَ الرِّسَالَةَ وَأَدَّى الأَمَانَةَ. Printed page
// 222 only -- the very bottom of the same crowded page as ch12 and ch13,
// continuing directly after ch13's closing Qurʾān quote and this
// chapter's own heading box, down to the bottom of the page. Transcribed
// by hand from the scan (vision OCR, 200-400dpi renders) against
// ../CHAPTER-FORMAT.md.
//
// IMPORTANT for future maintainers: page 223 begins an entirely
// DIFFERENT book, «قِصَّةُ سَيِّدِنَا دَاوُدَ، وَسَيِّدِنَا سُلَيْمَانَ» (volume 9),
// with its own chapter numbering restarting at 1 -- confirmed against
// qasas-v8/index.js's own header comment and QASAS_VOLUME_MAP.md. That
// book is NOT part of «قِصَّةُ سَيِّدِنَا شُعَيْبٍ» (volume 8) and is out of
// scope for this shell -- per the standing instruction for this project,
// work stops here once volume 8's 14 chapters are complete.
//
// Shuʿayb's own end is the end of every prophet who delivers his
// message, fulfills his trust, and establishes the proof against his
// people, closing the volume on his own words, quoted straight from the
// Qurʾān (al-Aʿrāf 7:93): he turns away from his ruined people and says
// -- I conveyed to you my Lord's messages and gave you sincere counsel,
// so how could I grieve for a disbelieving people?
//
// Grammar / lexical notes:
//   -- The Qurʾān's single long printed sentence is split into three
//      ﴿﴾-wrapped fragments (qs-v8-c14-004 through -006) at its natural
//      clause breaks -- after the initial turning-away-and-address, after
//      the conveying-and-counsel clause, and the closing rhetorical
//      question -- per the house convention of splitting a long ayah run
//      (cf. qasas-v8 ch5's header comment, qasas-v3 ch16's header
//      comment).
//   -- أَبْلَغَ (qs-v8-c14-005, form IV "to convey, deliver [a message]")
//      is a distinct lemma from the already-taught elative adjective
//      أَبْلَغ ("more eloquent," qasas-v9 ch12) -- same root ب ل غ, but one
//      is a verb and the other an adjective of comparison, a different
//      part of speech entirely, matching the corpus's standing practice
//      of tagging by part of speech and measure rather than surface
//      resemblance (cf. qasas-v8 ch3's أَخَافُ/أَخَافَ note). It is likewise
//      distinct from the already-taught synonym بَلَّغَ (form II, "to
//      convey, deliver," reused plainly in qs-v8-c14-002 below) -- two
//      different measures of the same root, both meaning roughly "to
//      convey," each its own lemma per the corpus's derived-measure
//      convention.
//   -- أَدَّى (qs-v8-c14-003, "to fulfill, discharge [a duty or trust]")
//      shares its root و د ي with أَمَانَة ("trust") only by coincidence of
//      collocation, not derivation -- tagged as an ordinary new verb
//      lemma, not connected to any already-taught word.
//   -- أَقَامَ (qs-v8-c14-003) is used here in its "to establish, set up [a
//      proof]" sense, distinct from the sense already taught elsewhere in
//      the corpus ("to reside, remain") -- same lemma, same measure, two
//      senses of one root verb, not split into separate lemmas, matching
//      the corpus's existing same-spelling-different-sense convention
//      (cf. حَلَّ, qasas-v8 ch4's header comment).
//   -- تَوَلَّى (qs-v8-c14-004, "to turn away") and حُجَّة (qs-v8-c14-003,
//      "the proof") both LOOK like natural candidates for this chapter's
//      newWords -- checked by hand and confirmed already taught (تَوَلَّى:
//      qasas-v9 ch14, same "to turn away" sense; حُجَّة: qasas-v12 ch19/
//      ch35/ch36, and separately drafted for this volume's own ch10) --
//      so neither is re-listed in newWords here, only glossed inline.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، شَأْن، شُعَيْب،
//      كُلّ، نَبِيّ، بَلَّغَ، رِسَالَة، أَمَانَة، أَقَامَ، حُجَّة، عَنْ، قَالَ، يَا، قَوْم، قَدْ،
//      رَبّ، نَصَحَ، لِ، كَيْفَ، عَلَى، كَافِر، تَوَلَّى are all already taught and
//      are NOT re-listed in newWords here.
//
// 3 new words (أَدَّى، أَبْلَغَ، آسَى) -- the volume's last word-list, closing
// on the same modest scale as its last three chapters.
//
// No page footnotes (book_note) on this page. This is the last chapter
// of volume 8; do NOT create a qasas-v9 shell or begin transcribing the
// Dāwūd/Sulaymān volume without being explicitly asked.
export const CHAPTER = {
  id: 'ch14',
  title: { ar: 'بَلَّغَ الرِّسَالَةَ وَأَدَّى الأَمَانَةَ', en: 'He Delivered the Message and Fulfilled the Trust' },
  newWords: ['أَدَّى', 'أَبْلَغَ', 'آسَى'],
  lemmas: {
    أَدَّى: { gloss: 'to fulfill, discharge (a duty, a trust)' },
    أَبْلَغَ: { gloss: 'to convey, deliver (a message)' },
    آسَى: { gloss: 'to grieve, mourn (for someone)' },
  },
  paragraphs: [
    {
      en: "And Shuʿayb's own end was the end of every prophet who delivered the message, fulfilled the trust, and established the proof:",
      sentences: [
        {
          id: 'qs-v8-c14-001',
          ar: 'وَكَانَ شَأْنُ شُعَيْبٍ،',
          en: "And Shuʿayb's own end was,",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'شَأْنُ', lemma: 'شَأْن', pos: 'noun', features: 'nom.constr', gloss: 'the way, the case of' },
            { surface: 'شُعَيْبٍ', lemma: 'شُعَيْب', pos: 'proper', features: 'gen', gloss: 'Shuʿayb' },
          ],
        },
        {
          id: 'qs-v8-c14-002',
          ar: 'شَأْنَ كُلِّ نَبِيٍّ بَلَّغَ الرِّسَالَةَ،',
          en: 'the way of every prophet who delivered the message,',
          tokens: [
            { surface: 'شَأْنَ', lemma: 'شَأْن', pos: 'noun', features: 'acc', gloss: 'the way of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'نَبِيٍّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.gen', gloss: 'a prophet' },
            { surface: 'بَلَّغَ', lemma: 'بَلَّغَ', pos: 'verb', features: 'perf.3ms', gloss: 'to convey, deliver; delivered' },
            { surface: 'الرِّسَالَةَ', lemma: 'رِسَالَة', pos: 'noun', features: 'def.acc', gloss: 'the message' },
          ],
        },
        {
          id: 'qs-v8-c14-003',
          ar: 'وَأَدَّى الأَمَانَةَ وَأَقَامَ الْحُجَّةَ:',
          en: 'fulfilled the trust, and established the proof:',
          tokens: [
            { surface: 'وَأَدَّى', lemma: 'أَدَّى', pos: 'verb', features: 'conj+perf.3ms', root: 'و د ي', gloss: 'to fulfill, discharge; and fulfilled' },
            { surface: 'الأَمَانَةَ', lemma: 'أَمَانَة', pos: 'noun', features: 'def.acc', gloss: 'the trust' },
            { surface: 'وَأَقَامَ', lemma: 'أَقَامَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to establish, set up; and established' },
            { surface: 'الْحُجَّةَ', lemma: 'حُجَّة', pos: 'noun', features: 'def.acc', gloss: 'the proof' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ شَأْنَ شُعَيْبٍ فِي نِهَايَةِ قِصَّتِهِ؟',
          options: ['شَأْنَ كُلِّ نَبِيٍّ بَلَّغَ الرِّسَالَةَ وَأَدَّى الأَمَانَةَ وَأَقَامَ الْحُجَّةَ', 'شَأْنَ رَجُلٍ فَشِلَ فِي دَعْوَتِهِ', 'شَأْنَ مَلِكٍ عَادِلٍ'],
          answer: 0,
          qEn: "How did the author describe Shuʿayb's end, closing his story?",
          optionsEn: ['The way of every prophet who delivered the message, fulfilled the trust, and established the proof', 'The way of a man who failed in his call', 'The way of a just king'],
        },
      ],
    },
    {
      en: '"So he turned away from them and said: O my people, I have certainly conveyed to you my Lord\'s messages and given you sincere counsel, so how could I grieve for a disbelieving people?"',
      sentences: [
        {
          id: 'qs-v8-c14-004',
          ar: '﴿فَتَوَلَّى عَنْهُمْ وَقَالَ يَاقَوْمِ﴾',
          en: '"So he turned away from them and said: O my people,',
          tokens: [
            { surface: 'فَتَوَلَّى', lemma: 'تَوَلَّى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to turn away; so turned away' },
            { surface: 'عَنْهُمْ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'يَاقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'part+1s', gloss: 'O my people' },
          ],
        },
        {
          id: 'qs-v8-c14-005',
          ar: '﴿لَقَدْ أَبْلَغْتُكُمْ رِسَالَاتِ رَبِّي وَنَصَحْتُ لَكُمْ﴾',
          en: "I have certainly conveyed to you my Lord's messages and given you sincere counsel,",
          tokens: [
            { surface: 'لَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'part+part', gloss: 'indeed, certainly' },
            { surface: 'أَبْلَغْتُكُمْ', lemma: 'أَبْلَغَ', pos: 'verb', features: 'perf.1s+2mp', root: 'ب ل غ', gloss: 'to convey, deliver; I conveyed to you' },
            { surface: 'رِسَالَاتِ', lemma: 'رِسَالَة', pos: 'noun', features: 'pl.acc.constr', gloss: 'the messages of' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'وَنَصَحْتُ', lemma: 'نَصَحَ', pos: 'verb', features: 'conj+perf.1s', gloss: 'to advise, counsel; and I gave counsel' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
          ],
        },
        {
          id: 'qs-v8-c14-006',
          ar: '﴿فَكَيْفَ آسَى عَلَى قَوْمٍ كَافِرِينَ﴾.',
          en: 'so how could I grieve for a disbelieving people?"',
          tokens: [
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'so how' },
            { surface: 'آسَى', lemma: 'آسَى', pos: 'verb', features: 'impf.1s', root: 'أ س ي', gloss: 'to grieve, mourn; should I grieve' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for, over' },
            { surface: 'قَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'indef.gen', gloss: 'a people' },
            { surface: 'كَافِرِينَ', lemma: 'كَافِر', pos: 'noun', features: 'pl.gen', gloss: 'disbelieving' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ شُعَيْبٌ بَعْدَ أَنْ يَئِسَ مِنْ إِيمَانِ قَوْمِهِ؟',
          options: ['تَوَلَّى عَنْهُمْ وَقَالَ لَهُمْ إِنَّهُ أَبْلَغَهُمْ رِسَالَاتِ رَبِّهِ وَنَصَحَ لَهُمْ', 'دَعَا عَلَيْهِمْ بِالْهَلَاكِ الْفَوْرِيِّ', 'بَقِيَ صَامِتاً وَلَمْ يَقُلْ شَيْئاً'],
          answer: 0,
          qEn: "What did Shuʿayb do once he despaired of his people believing?",
          optionsEn: ["He turned away from them and told them he had conveyed his Lord's messages and given them counsel", 'He prayed for their immediate destruction', 'He stayed silent and said nothing'],
        },
        {
          q: 'لِمَاذَا قَالَ شُعَيْبٌ إِنَّهُ لَنْ يَأْسَى عَلَى قَوْمِهِ؟',
          options: ['لِأَنَّهُ أَبْلَغَهُمْ رِسَالَةَ رَبِّهِ وَنَصَحَ لَهُمْ، فَلَا لَوْمَ عَلَيْهِ فِي كُفْرِهِمْ', 'لِأَنَّهُ لَمْ يُحِبَّهُمْ يَوْماً', 'لِأَنَّهُمْ كَانُوا أَغْنِيَاءَ لَا يَحْتَاجُونَ إِلَى شَفَقَتِهِ'],
          answer: 0,
          qEn: 'Why did Shuʿayb say he would not grieve for his people?',
          optionsEn: ["Because he had conveyed his Lord's message and counseled them, so their disbelief was no fault of his", 'Because he had never loved them', 'Because they were wealthy and needed no pity'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'شَأْنَ كُلِّ نَبِيٍّ',
        post: 'الرِّسَالَةَ.',
        en: 'the way of every prophet who delivered the message.',
        options: ['بَلَّغَ', 'يُبَلِّغُ', 'بَلَّغْتُ', 'مُبَلِّغٌ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- matches the printed بَلَّغَ, describing a completed act.',
          'Imperfect -- less natural here; the sentence narrates something already accomplished, in the perfect.',
          '1st singular -- wrong person; the subject is نَبِيٍّ ("a prophet"), not "I."',
          'Active participle (noun) -- wrong part of speech for the main verb of a relative clause.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَقَدْ',
        post: 'رِسَالَاتِ رَبِّي وَنَصَحْتُ لَكُمْ.',
        en: "I have certainly conveyed to you my Lord's messages and given you sincere counsel.",
        options: ['أَبْلَغْتُكُمْ', 'أَبْلَغَكُمْ', 'يُبْلِغُكُمْ', 'مُبْلِغٌ'],
        answer: 0,
        rationales: [
          '1st singular perfect + 2nd masculine plural object -- matches إِنِّي ("I") speaking to قَوْمِ ("you all"), as printed.',
          '3rd masculine singular -- wrong person; the speaker is "I," not "he."',
          'Imperfect -- wrong tense; this reports something already done.',
          'Active participle (noun) -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَكَيْفَ',
        post: 'عَلَى قَوْمٍ كَافِرِينَ؟',
        en: 'so how could I grieve for a disbelieving people?',
        options: ['آسَى', 'آسَيْتُ', 'يَأْسَى', 'تَأْسَى'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches the speaker "I," as printed.',
          'Perfect -- wrong tense; the rhetorical question is about an ongoing state, not a completed one.',
          '3rd masculine singular -- wrong person; the speaker is "I," not "he."',
          '2nd masculine singular / 3rd feminine singular -- wrong person for the speaker "I."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُبَلِّغُ الرَّجُلُ الرِّسَالَةَ',
        pre: '',
        post: 'الرِّسَالَةَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُبَلِّغُ', 'يُبَلِّغُ', 'تُبَلِّغُ', 'نُبَلِّغُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is "I," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يُؤَدِّي الرَّجُلُ الأَمَانَةَ',
        pre: '',
        post: 'الأَمَانَةَ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you all (m)',
        options: ['تُؤَدُّونَ', 'يُؤَدِّي', 'أُؤَدِّي', 'نُؤَدِّي'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st singular -- wrong person; the target is "you all," not "I."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَأْسَى الرَّجُلُ عَلَى قَوْمِهِ',
        pre: '',
        post: 'عَلَى قَوْمِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَأْسَوْنَ', 'يَأْسَى', 'تَأْسَى', 'نَأْسَى'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

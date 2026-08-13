// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 11 --
// حُجَّةٌ قَاطِعَةٌ. Printed pages 221 (bottom, right after ch10's closing
// line and the heading box) through 222 (top, ending right before ch12's
// heading بَلْ قَالُوا مِثْلَ مَا قَالَ الأَوَّلُونَ further down the same page).
// Source text verified against the scan by the lead session; transcribed
// here against ../CHAPTER-FORMAT.md.
//
// Shuʿayb answers as a man jealous for his own faith and conscience,
// quoted word for word from the Qurʾān (al-Aʿrāf 7:89): returning to their
// religion would be inventing a lie against Allah after He saved them from
// it, and it will never happen unless Allah wills it -- their Lord's
// knowledge encompasses everything, on Him alone they rely, and the
// chapter closes on Shuʿayb's own prayer that Allah judge between him and
// his people in truth.
//
// Grammar / lexical notes:
//   -- The first ﴿﴾-bracketed line (qs-v8-c11-003 through -006) is split
//      into four fragments rather than the two a first pass at this
//      chapter's outline suggested -- at 26 tokens it runs far past the
//      3-9 token buildable-fragment ceiling in ../CHAPTER-FORMAT.md even
//      split in half, so it is split more generously at its natural clause
//      boundaries instead, the same call made for this volume's own ch10
//      (see that chapter's header comment). The second and third lines
//      (qs-v8-c11-007, -008) are each kept as one fragment, both already
//      within the 3-9 token range.
//   -- رَبُّنَا (qs-v8-c11-006, إِلَّا أَن يَشَاءَ اللَّهُ رَبُّنَا) is apposition
//      (بدل) to اللَّهُ, both nominative -- tagged 'nom+1p' accordingly, not
//      as a separate governed noun.
//   -- فَتَحَ (qs-v8-c11-008, verb "to open; to judge, decide") and its
//      participle الْفَاتِحِينَ bare-match only an existing corpus entry
//      tagged pos 'proper' (the second half of the kunya "Abu al-Fath," an
//      unrelated honorific), not the plain verb -- so both are declared
//      fresh here as this chapter's own new words, per the corpus's
//      homograph convention already used in this volume for أَخَافَ vs.
//      أَخَافُ (ch3) and مَرَض vs. مَرِضَ (ch9).
//   -- كَذِب، وَسِعَ، جَوَاب، دِين، شَاءَ، حَقّ، and مِلَّة all bare-match already-
//      taught corpus lemmas with the identical sense needed here (several
//      were floated as candidates for this chapter's newWords before
//      checking) and so are glossed inline rather than re-declared.
//   -- نَجَّى (qs-v8-c11-004, form II "to save, rescue") does not bare-match
//      any existing corpus entry despite being a common enough word that it
//      might already have been taught -- confirmed new by lookup and
//      declared fresh here. اِفْتَرَى and تَوَكَّلَ were originally drafted as
//      new for this chapter too, on the same reasoning, but a later
//      cross-chapter pass found both already introduced earlier in this
//      same volume (اِفْتَرَى in ch2's qs-v8-c02-016 يُفْتَرَى، تَوَكَّلَ in ch7's
//      qs-v8-c07's تَوَكَّلْتُ) -- an artifact of ch2/ch7/ch11 being drafted
//      concurrently by different agents without a shared live index. Both
//      are reused here rather than re-declared.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، عَلَى، بِ، قَالَ،
//      قَدْ، اللَّه، كَذِب، إِنْ، عَادَ، فِي، مِلَّة، بَعْدَ، إِذْ، اللَّه، مِنْ، مَا، يَكُونُ،
//      لِ، أَنْ، فِي، إِلَّا، شَاءَ، رَبّ، كُلّ، شَيْء، عِلْم، أَنتَ، خَيْر، بَيْنَ، حَقّ،
//      اِفْتَرَى، تَوَكَّلَ are all already taught and are NOT re-listed in
//      newWords here.
//
// 7 new words (فَخُور، غَيُور، عَقِيدَة، ضَمِير، فَاتِح، نَجَّى، فَتَحَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'حُجَّةٌ قَاطِعَةٌ', en: 'A Decisive Argument' },
  newWords: ['فَخُور', 'غَيُور', 'عَقِيدَة', 'ضَمِير', 'فَاتِح', 'نَجَّى', 'فَتَحَ'],
  lemmas: {
    فَخُور: { gloss: 'one proud, boastful' },
    غَيُور: { gloss: 'jealous, protective' },
    عَقِيدَة: { gloss: 'creed, belief' },
    ضَمِير: { gloss: 'conscience' },
    فَاتِح: { gloss: 'one who opens, judges, decides' },
    نَجَّى: { gloss: 'to save, rescue' },
    فَتَحَ: { gloss: 'to open; to judge, decide' },
  },
  paragraphs: [
    {
      en: "So his answer was the answer of one proud of his faith, jealous for his creed and his conscience:",
      sentences: [
        {
          id: 'qs-v8-c11-001',
          ar: 'فَكَانَ جَوَابُهُ جَوَابَ فَخُورٍ بِدِينِهِ،',
          en: 'So his answer was the answer of one proud of his faith,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; so was' },
            { surface: 'جَوَابُهُ', lemma: 'جَوَاب', pos: 'noun', features: 'nom+3ms', gloss: 'his answer' },
            { surface: 'جَوَابَ', lemma: 'جَوَاب', pos: 'noun', features: 'acc.constr', gloss: 'the answer of' },
            { surface: 'فَخُورٍ', lemma: 'فَخُور', pos: 'noun', features: 'indef.gen', root: 'ف خ ر', gloss: 'one proud, boastful' },
            { surface: 'بِدِينِهِ', lemma: 'دِين', pos: 'noun', features: 'prep+gen+3ms', gloss: 'of his faith' },
          ],
        },
        {
          id: 'qs-v8-c11-002',
          ar: 'غَيُورٍ عَلَى عَقِيدَتِهِ وَضَمِيرِهِ:',
          en: 'jealous for his creed and his conscience:',
          tokens: [
            { surface: 'غَيُورٍ', lemma: 'غَيُور', pos: 'noun', features: 'indef.gen', root: 'غ ي ر', gloss: 'jealous, protective' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'عَقِيدَتِهِ', lemma: 'عَقِيدَة', pos: 'noun', features: 'gen+3ms', root: 'ع ق د', gloss: 'his creed' },
            { surface: 'وَضَمِيرِهِ', lemma: 'ضَمِير', pos: 'noun', features: 'conj+gen+3ms', root: 'ض م ر', gloss: 'and his conscience' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ جَوَابُ شُعَيْبٍ عَلَى تَهْدِيدِ قَوْمِهِ؟',
          options: ['جَوَابَ فَخُورٍ بِدِينِهِ، غَيُورٍ عَلَى عَقِيدَتِهِ وَضَمِيرِهِ', 'جَوَابَ خَائِفٍ مُتَرَدِّدٍ', 'لَمْ يُجِبْهُمْ بِشَيْءٍ'],
          answer: 0,
          qEn: "How did Shuʿayb answer his people's threat?",
          optionsEn: ['The answer of one proud of his faith, jealous for his creed and conscience', 'The answer of a fearful, hesitant man', 'He did not answer them at all'],
        },
      ],
    },
    {
      en: '"He said: We would indeed have fabricated a lie against Allah if we returned to your religion after Allah had saved us from it, and it is not for us to return to it, except that Allah, our Lord, should will it."',
      sentences: [
        {
          id: 'qs-v8-c11-003',
          ar: '﴿قَالَ قَدِ افْتَرَيْنَا عَلَى اللَّهِ كَذِبًا﴾',
          en: '"He said: We would indeed have fabricated a lie against Allah',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'قَدِ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'افْتَرَيْنَا', lemma: 'اِفْتَرَى', pos: 'verb', features: 'perf.1p', root: 'ف ر ي', gloss: 'to invent, fabricate (a lie); we would have fabricated' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'against' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'كَذِبًا', lemma: 'كَذِب', pos: 'noun', features: 'indef.acc', gloss: 'a lie' },
          ],
        },
        {
          id: 'qs-v8-c11-004',
          ar: '﴿إِنْ عُدْنَا فِي مِلَّتِكُم بَعْدَ إِذْ نَجَّانَا اللَّهُ مِنْهَا﴾',
          en: 'if we returned to your religion after Allah had saved us from it,',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'عُدْنَا', lemma: 'عَادَ', pos: 'verb', features: 'perf.1p', gloss: 'to return; we returned' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِلَّتِكُم', lemma: 'مِلَّة', pos: 'noun', features: 'gen+2mp', gloss: 'your religion' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'نَجَّانَا', lemma: 'نَجَّى', pos: 'verb', features: 'perf.3ms+1p', root: 'ن ج و', gloss: 'to save, rescue; saved us' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
          ],
        },
        {
          id: 'qs-v8-c11-005',
          ar: '﴿وَمَا يَكُونُ لَنَا أَن نَّعُودَ فِيهَا﴾',
          en: 'and it is not for us to return to it,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be; is fitting' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'نَّعُودَ', lemma: 'عَادَ', pos: 'verb', features: 'impf.1p', gloss: 'to return; we return' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'to it' },
          ],
        },
        {
          id: 'qs-v8-c11-006',
          ar: '﴿إِلَّا أَن يَشَاءَ اللَّهُ رَبُّنَا﴾',
          en: 'except that Allah, our Lord, should will it."',
          tokens: [
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'يَشَاءَ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', gloss: 'to will, wish; wills' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'رَبُّنَا', lemma: 'رَبّ', pos: 'noun', features: 'nom+1p', gloss: 'our Lord' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ شُعَيْبٌ عَنِ الْعَوْدَةِ إِلَى مِلَّةِ قَوْمِهِ؟',
          options: ['إِنَّهَا افْتِرَاءٌ عَلَى اللَّهِ، وَلَا تَكُونُ إِلَّا أَنْ يَشَاءَ اللَّهُ رَبُّهُمْ', 'إِنَّهَا مُمْكِنَةٌ إِذَا رَضِيَ أَهْلُهُ', 'إِنَّهَا وَاجِبَةٌ عَلَيْهِ'],
          answer: 0,
          qEn: "What did Shuʿayb say about returning to his people's religion?",
          optionsEn: ['That it would be a lie against Allah, and could not happen unless Allah their Lord willed it', 'That it was possible if his family agreed', 'That it was obligatory upon him'],
        },
      ],
    },
    {
      en: '"Our Lord encompasses all things in knowledge; in Allah we trust. Our Lord, judge between us and our people in truth, for You are the best of judges."',
      sentences: [
        {
          id: 'qs-v8-c11-007',
          ar: '﴿وَسِعَ رَبُّنَا كُلَّ شَيْءٍ عِلْمًا عَلَى اللَّهِ تَوَكَّلْنَا﴾',
          en: '"Our Lord encompasses all things in knowledge; in Allah we trust.',
          tokens: [
            { surface: 'وَسِعَ', lemma: 'وَسِعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to encompass, embrace; encompasses' },
            { surface: 'رَبُّنَا', lemma: 'رَبّ', pos: 'noun', features: 'nom+1p', gloss: 'our Lord' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'عِلْمًا', lemma: 'عِلْم', pos: 'noun', features: 'indef.acc', gloss: 'in knowledge' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in, upon' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَوَكَّلْنَا', lemma: 'تَوَكَّلَ', pos: 'verb', features: 'perf.1p', root: 'و ك ل', gloss: 'to rely, trust; we rely' },
          ],
        },
        {
          id: 'qs-v8-c11-008',
          ar: '﴿رَبَّنَا افْتَحْ بَيْنَنَا وَبَيْنَ قَوْمِنَا بِالْحَقِّ وَأَنتَ خَيْرُ الْفَاتِحِينَ﴾.',
          en: 'Our Lord, judge between us and our people in truth, for You are the best of judges."',
          tokens: [
            { surface: 'رَبَّنَا', lemma: 'رَبّ', pos: 'noun', features: 'acc+1p', gloss: 'Our Lord' },
            { surface: 'افْتَحْ', lemma: 'فَتَحَ', pos: 'verb', features: 'imp.2ms', root: 'ف ت ح', gloss: 'to open; to judge, decide; judge!' },
            { surface: 'بَيْنَنَا', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+1p', gloss: 'between us' },
            { surface: 'وَبَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'conj+prep', gloss: 'and between' },
            { surface: 'قَوْمِنَا', lemma: 'قَوْم', pos: 'noun', features: 'gen+1p', gloss: 'our people' },
            { surface: 'بِالْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'prep+def.gen', gloss: 'in truth' },
            { surface: 'وَأَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'and you' },
            { surface: 'خَيْرُ', lemma: 'خَيْر', pos: 'noun', features: 'nom.constr', gloss: 'the best of' },
            { surface: 'الْفَاتِحِينَ', lemma: 'فَاتِح', pos: 'noun', features: 'pl.def.gen', root: 'ف ت ح', gloss: 'those who judge, deciders' },
          ],
        },
      ],
      checks: [
        {
          q: 'عَلَامَ اعْتَمَدَ شُعَيْبٌ وَبِمَاذَا خَتَمَ دُعَاءَهُ؟',
          options: ['اعْتَمَدَ عَلَى اللَّهِ وَخَتَمَ بِطَلَبِ الْفَتْحِ بَيْنَهُ وَبَيْنَ قَوْمِهِ بِالْحَقِّ', 'اعْتَمَدَ عَلَى قُوَّةِ عَشِيرَتِهِ', 'خَتَمَ بِطَلَبِ الْمَالِ'],
          answer: 0,
          qEn: 'What did Shuʿayb rely on, and how did he close his prayer?',
          optionsEn: ['He relied on Allah and closed by asking for judgment between him and his people in truth', 'He relied on the strength of his clan', 'He closed by asking for wealth'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ: قَدْ',
        post: 'عَلَى اللَّهِ كَذِبًا إِنْ عُدْنَا فِي مِلَّتِكُمْ.',
        en: 'He said: We would indeed have fabricated a lie against Allah if we returned to your religion.',
        options: ['افْتَرَيْنَا', 'يَفْتَرِي', 'مُفْتَرُونَ', 'افْتَرَى'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches the speakers "we" and the completed, hypothetical sense قَدْ + the perfect gives here.',
          '3rd masculine singular imperfect -- wrong person and tense.',
          'Active participle (noun) -- wrong part of speech for the main verb of this clause.',
          '3rd masculine singular perfect -- wrong person; the speakers are "we," not "he."',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنْ عُدْنَا فِي مِلَّتِكُمْ بَعْدَ إِذْ',
        post: 'اللَّهُ مِنْهَا.',
        en: 'if we returned to your religion after Allah had saved us from it.',
        options: ['نَجَّانَا', 'يُنَجِّينَا', 'أَنْجَانَا', 'نَاجِينَا'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- matches اللَّهُ as subject and the completed past act narrated after بَعْدَ إِذْ.',
          'Imperfect -- wrong tense; the saving already happened.',
          'Different (unattested) causative form -- not the verb the passage uses.',
          'Active participle (noun) -- wrong part of speech for the main verb of this clause.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَسِعَ رَبُّنَا كُلَّ شَيْءٍ عِلْمًا عَلَى اللَّهِ',
        post: '.',
        en: 'Our Lord encompasses all things in knowledge; in Allah we trust.',
        options: ['تَوَكَّلْنَا', 'يَتَوَكَّلُ', 'تَوَكَّلَ', 'مُتَوَكِّلُونَ'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches the speakers "we rely."',
          '3rd masculine singular imperfect -- wrong person and tense.',
          '3rd masculine singular perfect -- wrong person; the speakers are "we," not "he."',
          'Active participle (noun) -- wrong part of speech for the main verb of this clause.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتَوَكَّلُ الرَّجُلُ عَلَى اللَّهِ',
        pre: '',
        post: 'عَلَى اللَّهِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَتَوَكَّلُ', 'يَتَوَكَّلُ', 'تَتَوَكَّلُ', 'أَتَوَكَّلُ'],
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
        base: 'يَتَوَكَّلُ الرَّجُلُ عَلَى اللَّهِ',
        pre: '',
        post: 'عَلَى اللَّهِ',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you all (m)',
        options: ['تَتَوَكَّلُونَ', 'يَتَوَكَّلُ', 'نَتَوَكَّلُ', 'أَتَوَكَّلُ'],
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
        base: 'يَتَوَكَّلُ الرَّجُلُ عَلَى اللَّهِ',
        pre: '',
        post: 'عَلَى اللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَتَوَكَّلُونَ', 'يَتَوَكَّلُ', 'تَتَوَكَّلُونَ', 'نَتَوَكَّلُ'],
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

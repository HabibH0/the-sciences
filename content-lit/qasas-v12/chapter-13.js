// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 13 -- سِيرَتُهُ وَدَعْوَتُهُ فِي الْقُرْآنِ.
// Printed page 260 (top, right after ch12's closing line), ending before
// ch14's heading صِرَاعٌ قَدِيمٌ, which opens later the same page.
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// A short narrating frame introduces a direct Qur'anic quotation: Sūrat
// Maryam 19:30-33, ʿĪsā's own words from the cradle, describing himself
// plainly as Allah's servant and a prophet given the Scripture, enjoined
// with prayer, almsgiving, and devotion to his mother, and closing with the
// Qur'an's own threefold declaration of peace upon him at birth, death, and
// resurrection.
//
// Grammar / lexical notes:
//   -- Āyah 19:31 (وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنتُ وَأَوْصَانِي بِالصَّلَاةِ
//      وَالزَّكَاةِ مَا دُمْتُ حَيًّا) carries no printed waqf mark but runs to
//      11 tokens, over this app's 9-token buildable-sentence cap; split
//      into two entries at its own internal coordinate-clause boundary
//      (وَأَوْصَانِي...), the same documented exception used in this volume's
//      chapter-05.js for a short chapter that needs the extra buildable
//      count -- flagged the same way for the centralized QA pass.
//   -- وُلِدتُّ (s006, "I was born") reuses the lemma وَلَدَ already
//      introduced in ch4 of this volume (form I, "to be born"), now tagged
//      pass+perf.1s -- first passive-perfect instance of this exact lemma
//      in the volume, matching the documented pass-atom convention (see
//      qasas-v3 ch1's قِيلَ).
//   -- بَرًّا (s005, "dutiful, devoted") is a distinct lemma/pattern from
//      the abstract noun بِرّ ("righteousness") already introduced in ch4
//      of this volume -- same root ب ر ر, adjective vs. verbal-noun
//      pattern, per the corpus's same-root-different-pattern convention;
//      already attested as a known lemma elsewhere in the corpus, so not
//      re-added to newWords here.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَرَأَ (ch1)، سِيرَة
//      (ch4)، دَعْوَة، عَبْد، اللَّه، آتَى، جَعَلَ، كِتَاب (ch12)، نَبِيّ، مُبَارَك،
//      أَيْنَ، دَامَ (ch3)، حَيّ، بَرّ، سَلَام، مَاتَ، تَعَالَى (ch1)
//      are all already taught and are NOT re-listed in newWords here.
//
// 9 new words: وَصْف، قَوْل، أَوْصَى، صَلَاة، زَكَاة، وَالِدَة، جَبَّار، شَقِيّ، بَعَثَ.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch13',
  title: { ar: 'سِيرَتُهُ وَدَعْوَتُهُ فِي الْقُرْآنِ', en: 'His Biography and Call in the Qur’an' },
  newWords: [
    'وَصْف', 'أَوْصَى', 'صَلَاة', 'زَكَاة', 'وَالِدَة', 'جَبَّار',
    'شَقِيّ', 'بَعَثَ',
  ],
  lemmas: {
    وَصْف: { gloss: 'a description' },
    قَوْل: { gloss: 'a saying, statement' },
    أَوْصَى: { gloss: 'to enjoin, command' },
    صَلَاة: { gloss: 'prayer' },
    زَكَاة: { gloss: 'almsgiving, zakat' },
    وَالِدَة: { gloss: 'mother' },
    جَبَّار: { gloss: 'tyrannical, domineering' },
    شَقِيّ: { gloss: 'wretched, miserable' },
    بَعَثَ: { gloss: 'to raise, resurrect' },
  },
  paragraphs: [
    {
      en: 'Read His, Most High\'s, description of his biography and his call, in His saying: "He said: Indeed, I am the servant of Allah; He has given me the Scripture and made me a prophet, and made me blessed wherever I am, and has enjoined upon me prayer and almsgiving as long as I remain alive, and dutiful to my mother, and He has not made me domineering, wretched. And peace be upon me the day I was born, the day I die, and the day I am raised alive."',
      sentences: [
        {
          id: 'qs-v12-c13-001',
          ar: 'وَاقْرَؤُوا وَصْفَهُ تَعَالَى لِسِيرَتِهِ وَدَعْوَتِهِ فِي قَوْلِهِ:',
          en: 'Read His, Most High\'s, description of his biography and his call, in His saying:',
          tokens: [
            { surface: 'وَاقْرَؤُوا', lemma: 'قَرَأَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'to read; and read' },
            { surface: 'وَصْفَهُ', lemma: 'وَصْف', pos: 'noun', features: 'acc+3ms', gloss: 'His description' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Most High' },
            { surface: 'لِسِيرَتِهِ', lemma: 'سِيرَة', pos: 'noun', features: 'prep+gen+3ms', gloss: 'of his biography' },
            { surface: 'وَدَعْوَتِهِ', lemma: 'دَعْوَة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his call' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قَوْلِهِ', lemma: 'قَوْل', pos: 'noun', features: 'gen+3ms', gloss: 'His saying' },
          ],
        },
        {
          id: 'qs-v12-c13-002',
          ar: '﴿قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا﴾',
          en: '"He said: Indeed, I am the servant of Allah; He has given me the Scripture and made me a prophet,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he said' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'عَبْدُ', lemma: 'عَبْد', pos: 'noun', features: 'nom.constr', gloss: 'the servant of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'آتَانِيَ', lemma: 'آتَى', pos: 'verb', features: 'perf.3ms+1s', gloss: 'to give; He has given me' },
            { surface: 'الْكِتَابَ', lemma: 'كِتَاب', pos: 'noun', features: 'def.acc', gloss: 'the Scripture' },
            { surface: 'وَجَعَلَنِي', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3ms+1s', gloss: 'to make; and made me' },
            { surface: 'نَبِيًّا', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.acc', gloss: 'a prophet' },
          ],
        },
        {
          id: 'qs-v12-c13-003',
          ar: '﴿وَجَعَلَنِي مُبَارَكًا أَيْنَ مَا كُنتُ﴾',
          en: 'and made me blessed wherever I am,',
          tokens: [
            { surface: 'وَجَعَلَنِي', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3ms+1s', gloss: 'to make; and made me' },
            { surface: 'مُبَارَكًا', lemma: 'مُبَارَك', pos: 'adj', features: 'indef.acc', gloss: 'blessed' },
            { surface: 'أَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'adv', gloss: 'wherever' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: '(ever)' },
            { surface: 'كُنتُ', lemma: 'كَانَ', pos: 'verb', features: 'perf.1s', gloss: 'to be; I am' },
          ],
        },
        {
          id: 'qs-v12-c13-004',
          ar: '﴿وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا﴾',
          en: 'and has enjoined upon me prayer and almsgiving as long as I remain alive,',
          tokens: [
            { surface: 'وَأَوْصَانِي', lemma: 'أَوْصَى', pos: 'verb', features: 'conj+perf.3ms+1s', gloss: 'to enjoin; and enjoined upon me' },
            { surface: 'بِالصَّلَاةِ', lemma: 'صَلَاة', pos: 'noun', features: 'prep+def.gen', gloss: 'prayer' },
            { surface: 'وَالزَّكَاةِ', lemma: 'زَكَاة', pos: 'noun', features: 'conj+def.gen', gloss: 'and almsgiving' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'as long as' },
            { surface: 'دُمْتُ', lemma: 'دَامَ', pos: 'verb', features: 'perf.1s', gloss: 'to last, remain; I remain' },
            { surface: 'حَيًّا', lemma: 'حَيّ', pos: 'adj', features: 'indef.acc', gloss: 'alive' },
          ],
        },
        {
          id: 'qs-v12-c13-005',
          ar: '﴿وَبَرًّا بِوَالِدَتِي وَلَمْ يَجْعَلْنِي جَبَّارًا شَقِيًّا﴾',
          en: 'and dutiful to my mother, and He has not made me domineering, wretched.',
          tokens: [
            { surface: 'وَبَرًّا', lemma: 'بَرّ', pos: 'adj', features: 'conj+indef.acc', gloss: 'dutiful, devoted' },
            { surface: 'بِوَالِدَتِي', lemma: 'وَالِدَة', pos: 'noun', features: 'prep+gen+1s', gloss: 'to my mother' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجْعَلْنِي', lemma: 'جَعَلَ', pos: 'verb', features: 'impf.3ms+1s', gloss: 'to make; has made me' },
            { surface: 'جَبَّارًا', lemma: 'جَبَّار', pos: 'adj', features: 'indef.acc', gloss: 'domineering' },
            { surface: 'شَقِيًّا', lemma: 'شَقِيّ', pos: 'adj', features: 'indef.acc', gloss: 'wretched' },
          ],
        },
        {
          id: 'qs-v12-c13-006',
          ar: '﴿وَالسَّلَامُ عَلَيَّ يَوْمَ وُلِدتُّ وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا﴾.',
          en: 'And peace be upon me the day I was born, the day I die, and the day I am raised alive."',
          tokens: [
            { surface: 'وَالسَّلَامُ', lemma: 'سَلَام', pos: 'noun', features: 'conj+def.nom', gloss: 'and peace' },
            { surface: 'عَلَيَّ', lemma: 'عَلَى', pos: 'prep', features: 'prep+1s', gloss: 'upon me' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc', gloss: 'the day' },
            { surface: 'وُلِدتُّ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+perf.1s', gloss: 'to be born; I was born' },
            { surface: 'وَيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'conj+acc', gloss: 'and the day' },
            { surface: 'أَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.1s', gloss: 'to die; I die' },
            { surface: 'وَيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'conj+acc', gloss: 'and the day' },
            { surface: 'أُبْعَثُ', lemma: 'بَعَثَ', pos: 'verb', features: 'pass+impf.1s', gloss: 'to raise, resurrect; I am raised' },
            { surface: 'حَيًّا', lemma: 'حَيّ', pos: 'adj', features: 'indef.acc', gloss: 'alive' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ عِيسَى عَنْ نَفْسِهِ فِي هَذِهِ الْآيَاتِ؟',
          options: ['إِنَّهُ عَبْدُ اللَّهِ آتَاهُ الْكِتَابَ وَجَعَلَهُ نَبِيًّا وَمُبَارَكًا', 'إِنَّهُ ابْنُ اللَّهِ', 'إِنَّهُ مَلِكٌ عَظِيمٌ عَلَى بَنِي إِسْرَائِيلَ'],
          answer: 0,
          qEn: 'What did Isa say about himself in these āyāt?',
          optionsEn: ['That he is the servant of Allah, given the Scripture and made a prophet and blessed', 'That he is the son of Allah', 'That he is a great king over the Children of Israel'],
        },
        {
          q: 'بِمَاذَا أَوْصَى اللَّهُ عِيسَى؟',
          options: ['بِالصَّلَاةِ وَالزَّكَاةِ مَا دَامَ حَيًّا، وَبِرِّ وَالِدَتِهِ', 'بِجَمْعِ الْمَالِ', 'بِمُحَارَبَةِ أَعْدَائِهِ'],
          answer: 0,
          qEn: 'What did Allah enjoin upon Isa?',
          optionsEn: ['Prayer and almsgiving for as long as he lived, and dutifulness to his mother', 'Amassing wealth', 'Fighting his enemies'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَالسَّلَامُ عَلَيَّ يَوْمَ',
        post: 'وَيَوْمَ أَمُوتُ وَيَوْمَ أُبْعَثُ حَيًّا.',
        en: 'And peace be upon me the day I was born, the day I die, and the day I am raised alive.',
        options: ['وُلِدتُّ', 'وَلَدْتُ', 'يُولَدُ', 'وَلَدَ'],
        answer: 0,
        rationales: [
          'Passive perfect, 1st singular -- "I was born," matching the printed وُلِدتُّ.',
          'Active perfect, 1st singular -- wrong voice; ʿĪsā did not do the bearing, he was born.',
          'Passive imperfect, 3rd masculine -- wrong tense and person.',
          'Active perfect, 3rd masculine -- wrong voice and person entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي',
        post: '.',
        en: 'He said: I am the servant of Allah; He has given me the Scripture and made me a prophet.',
        options: ['نَبِيًّا', 'نَبِيٌّ', 'نَبِيٍّ', 'الْأَنْبِيَاءَ'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- second object of جَعَلَنِي ("made me [a prophet]").',
          'Nominative -- wrong case; the second object of جَعَلَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite plural -- wrong number and state; a single prophet is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا',
        post: 'حَيًّا.',
        en: 'and enjoined upon me prayer and almsgiving as long as I remain alive.',
        options: ['دُمْتُ', 'دَامَ', 'أَدُومُ', 'دَامَتْ'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches the speaker "I," the required form after مَا الظرفية.',
          '3rd masculine singular -- wrong person.',
          'Imperfect -- wrong tense for this fixed مَا دُمْتُ construction.',
          '3rd feminine singular -- wrong person and gender.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَمُوتُ فِي بَلَدِي',
        pre: '',
        post: 'فِي بَلَدِي',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَمُوتُ', 'أَمُوتُ', 'تَمُوتُ', 'نَمُوتُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st singular -- the base form, not shifted.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'أَمُوتُ فِي بَلَدِي',
        pre: '',
        post: 'فِي بَلَدِي',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَمُوتُ', 'يَمُوتُ', 'أَمُوتُ', 'نَمُوتُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- wrong gender.',
          '1st singular -- the base form, not shifted.',
          '1st plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'أَمُوتُ فِي بَلَدِي',
        pre: '',
        post: 'فِي بَلَدِي',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَمُوتُ', 'يَمُوتُ', 'تَمُوتُ', 'أَمُوتُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- wrong person and number.',
          '3rd feminine singular -- wrong person, gender, and number.',
          '1st singular -- the base form, not shifted.',
        ],
      },
    ],
  },
};

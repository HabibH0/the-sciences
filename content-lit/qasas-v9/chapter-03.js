// قَصَصُ النَّبِيِّينَ, volume 9, chapter 3 -- شُكْرُهُ عَلَى هَذِهِ النِّعْمَةِ.
// Printed page 225, from its own heading box to the middle of the page,
// ending right before ch4's heading نِعْمَةُ اللَّهِ عَلَى سُلَيْمَانَ further
// down the same page. Transcribed by hand from the scan (vision OCR, 200dpi
// render) against ../CHAPTER-FORMAT.md. Title verified against the book's
// own topical index (p.285): شُكْرُهُ, not QASAS_VOLUME_MAP.md's شُكْرَةٌ.
//
// Despite his wide dominion and skilled, mighty hand, Dāwūd remained a
// humble, penitent, ever-remembering, long-praying servant, and a just
// ruler who judged people by truth without favouritism -- quoting Sūrat Ṣād
// 38:26, Allah's own address making him a khalīfah on earth on the express
// condition of judging by truth and never following desire.
//
// Grammar / lexical notes:
//   -- أَوَّاب (unit 002, "one who often turns back to Allah") shares the
//      root أ و ب with ch2's new verb أَوَّبَ ("to echo, repeat") but is kept
//      as its own distinct participle-noun lemma, per the established
//      participle-as-distinct-lemma convention (صَالِح، سَاجِد، كَافِر, etc.).
//   -- أَضَلَّ (unit 011, causative "to lead astray") and ضَلَّ (unit 012,
//      "to go astray" oneself) are kept as two separate lemmas though same
//      root ض ل ل and same āyah -- matching the already-attested
//      distinct-lemma-per-derived-verb-form convention (qasas-v3 ch17's
//      آمَنَ/أَمِنَ note).
//   -- The Qur'an quote (Ṣād 38:26) is wrapped in its own ﴿﴾ sentences and
//      split at natural clause breaks to stay at or under nine tokens each.
//   -- يَادَاوُودُ is printed fused with no space exactly as the mushaf
//      gives it; tokenized as يَا + دَاوُودُ (vocative nominative), matching
//      the already-attested يَانُوحُ precedent (qasas-v3 ch17).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، دَاوُد، مَعَ، مُلْك،
//      يَد، قَوِيّ، عَبْد، ذِكْر، دُعَاء، تَسْبِيح، حَكَمَ، بَيْنَ، نَاس، حَقّ، قَالَ،
//      اللَّه، جَعَلَ، فِي، الْأَرْض، سَبِيل، عَذَاب، نَسِيَ، يَوْم، شَدِيد، حَاكِم
//      are all already taught and are NOT re-listed in newWords here.
//
// 12 new words (وَاسِع، خَاشِع، أَوَّاب، دَائِم، مُقْسِط، حَابَى، خَلِيفَة، هَوَى،
// أَضَلَّ، ضَلَّ، حِسَاب، تَعَالَى).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'شُكْرُهُ عَلَى هَذِهِ النِّعْمَةِ', en: 'His Gratitude for This Blessing' },
  newWords: ['وَاسِع', 'خَاشِع', 'أَوَّاب', 'دَائِم', 'مُقْسِط', 'حَابَى', 'خَلِيفَة', 'هَوَى', 'أَضَلَّ', 'ضَلَّ', 'حِسَاب', 'تَعَالَى'],
  lemmas: {
    وَاسِع: { gloss: 'wide, vast' },
    خَاشِع: { gloss: 'humble, submissive' },
    أَوَّاب: { gloss: 'ever-turning back to Allah, penitent' },
    دَائِم: { gloss: 'constant, continual' },
    مُقْسِط: { gloss: 'just, equitable' },
    حَابَى: { gloss: 'to show favouritism' },
    خَلِيفَة: { gloss: 'a successor, vicegerent' },
    هَوَى: { gloss: 'desire, whim' },
    أَضَلَّ: { gloss: 'to lead astray' },
    ضَلَّ: { gloss: 'to go astray' },
    حِسَاب: { gloss: 'a reckoning, account' },
    تَعَالَى: { gloss: '(Allah) exalted is He' },
  },
  paragraphs: [
    {
      en: 'And Dāwūd, with this wide dominion and skilled, mighty hand, was a humble, penitent servant, ever-remembering, long in prayer and glorification, a just ruler who judged between people by truth and did not show favouritism. Allah, exalted is He, says: "O Dāwūd, indeed We have made you a successor on the earth, so judge between people by truth, and do not follow desire, for it will lead you astray from the path of Allah. Indeed those who go astray from the path of Allah will have a severe punishment for having forgotten the Day of Reckoning."',
      sentences: [
        {
          id: 'qs-v9-c03-001',
          ar: 'وَكَانَ دَاوُدُ مَعَ هَذَا الْمُلْكِ الْوَاسِعِ وَالْيَدِ الْحَاذِقَةِ الْقَوِيَّةِ',
          en: 'And Dāwūd, with this wide dominion and skilled, mighty hand,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'دَاوُدُ', lemma: 'دَاوُد', pos: 'proper', features: 'nom', gloss: 'Dāwūd' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'الْمُلْكِ', lemma: 'مُلْك', pos: 'noun', features: 'def.gen', gloss: 'dominion' },
            { surface: 'الْوَاسِعِ', lemma: 'وَاسِع', pos: 'adj', features: 'def.gen', gloss: 'wide' },
            { surface: 'وَالْيَدِ', lemma: 'يَد', pos: 'noun', features: 'conj+def.gen', gloss: 'and the hand' },
            { surface: 'الْحَاذِقَةِ', lemma: 'حَاذِق', pos: 'adj', features: 'def.gen.f', gloss: 'skilled' },
            { surface: 'الْقَوِيَّةِ', lemma: 'قَوِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'mighty' },
          ],
        },
        {
          id: 'qs-v9-c03-002',
          ar: 'كَانَ عَبْداً خَاشِعاً أَوَّاباً،',
          en: 'was a humble, penitent servant,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'عَبْداً', lemma: 'عَبْد', pos: 'noun', features: 'indef.acc', gloss: 'a servant' },
            { surface: 'خَاشِعاً', lemma: 'خَاشِع', pos: 'adj', features: 'indef.acc', gloss: 'humble' },
            { surface: 'أَوَّاباً', lemma: 'أَوَّاب', pos: 'adj', features: 'indef.acc', root: 'أ و ب', gloss: 'penitent' },
          ],
        },
        {
          id: 'qs-v9-c03-003',
          ar: 'دَائِمَ الذِّكْرِ،',
          en: 'ever-remembering,',
          tokens: [
            { surface: 'دَائِمَ', lemma: 'دَائِم', pos: 'adj', features: 'acc.constr', gloss: 'constant in' },
            { surface: 'الذِّكْرِ', lemma: 'ذِكْر', pos: 'noun', features: 'def.gen', gloss: 'remembrance' },
          ],
        },
        {
          id: 'qs-v9-c03-004',
          ar: 'طَوِيلَ الدُّعَاءِ وَالتَّسْبِيحِ،',
          en: 'long in prayer and glorification,',
          tokens: [
            { surface: 'طَوِيلَ', lemma: 'طَوِيل', pos: 'adj', features: 'acc.constr', gloss: 'long in' },
            { surface: 'الدُّعَاءِ', lemma: 'دُعَاء', pos: 'noun', features: 'def.gen', gloss: 'prayer' },
            { surface: 'وَالتَّسْبِيحِ', lemma: 'تَسْبِيح', pos: 'noun', features: 'conj+def.gen', gloss: 'and glorification' },
          ],
        },
        {
          id: 'qs-v9-c03-005',
          ar: 'حَاكِماً مُقْسِطاً،',
          en: 'a just ruler,',
          tokens: [
            { surface: 'حَاكِماً', lemma: 'حَاكِم', pos: 'noun', features: 'indef.acc', gloss: 'a ruler' },
            { surface: 'مُقْسِطاً', lemma: 'مُقْسِط', pos: 'adj', features: 'indef.acc', root: 'ق س ط', gloss: 'just' },
          ],
        },
        {
          id: 'qs-v9-c03-006',
          ar: 'يَحْكُمُ بَيْنَ النَّاسِ بِالْحَقِّ',
          en: 'who judged between people by truth',
          tokens: [
            { surface: 'يَحْكُمُ', lemma: 'حَكَمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to judge; judged' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'people' },
            { surface: 'بِالْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'prep+def.gen', gloss: 'by truth' },
          ],
        },
        {
          id: 'qs-v9-c03-007',
          ar: 'وَلَا يُحَابِي،',
          en: 'and did not show favouritism.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُحَابِي', lemma: 'حَابَى', pos: 'verb', features: 'impf.3ms', root: 'ح ب و', gloss: 'to show favouritism; show favouritism' },
          ],
        },
        {
          id: 'qs-v9-c03-008',
          ar: 'يَقُولُ اللَّهُ تَعَالَى:',
          en: 'Allah, exalted is He, says:',
          tokens: [
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v9-c03-009',
          ar: '﴿يَادَاوُودُ إِنَّا جَعَلْنَاكَ خَلِيفَةً فِي الْأَرْضِ﴾',
          en: '"O Dāwūd, indeed We have made you a successor on the earth,',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'دَاوُودُ', lemma: 'دَاوُد', pos: 'proper', features: 'nom', gloss: 'Dāwūd' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed We' },
            { surface: 'جَعَلْنَاكَ', lemma: 'جَعَلَ', pos: 'verb', features: 'perf.1p+2ms', gloss: 'to make; We made you' },
            { surface: 'خَلِيفَةً', lemma: 'خَلِيفَة', pos: 'noun', features: 'indef.acc', gloss: 'a successor' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v9-c03-010',
          ar: '﴿فَاحْكُمْ بَيْنَ النَّاسِ بِالْحَقِّ﴾',
          en: 'so judge between people by truth,',
          tokens: [
            { surface: 'فَاحْكُمْ', lemma: 'حَكَمَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to judge; so judge' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'people' },
            { surface: 'بِالْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'prep+def.gen', gloss: 'by truth' },
          ],
        },
        {
          id: 'qs-v9-c03-011',
          ar: '﴿وَلَا تَتَّبِعِ الْهَوَى فَيُضِلَّكَ عَنْ سَبِيلِ اللَّهِ﴾',
          en: 'and do not follow desire, for it will lead you astray from the path of Allah.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَتَّبِعِ', lemma: 'اِتَّبَعَ', pos: 'verb', features: 'impf.2ms', gloss: 'to follow; follow' },
            { surface: 'الْهَوَى', lemma: 'هَوَى', pos: 'noun', features: 'def.acc', gloss: 'desire' },
            { surface: 'فَيُضِلَّكَ', lemma: 'أَضَلَّ', pos: 'verb', features: 'conj+impf.3ms+2ms', root: 'ض ل ل', gloss: 'to lead astray; for it leads you astray' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَبِيلِ', lemma: 'سَبِيل', pos: 'noun', features: 'constr.gen', gloss: 'the path of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c03-012',
          ar: '﴿إِنَّ الَّذِينَ يَضِلُّونَ عَنْ سَبِيلِ اللَّهِ لَهُمْ عَذَابٌ شَدِيدٌ﴾',
          en: 'Indeed those who go astray from the path of Allah will have a severe punishment',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'يَضِلُّونَ', lemma: 'ضَلَّ', pos: 'verb', features: 'impf.3mp', root: 'ض ل ل', gloss: 'to go astray; go astray' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَبِيلِ', lemma: 'سَبِيل', pos: 'noun', features: 'constr.gen', gloss: 'the path of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'عَذَابٌ', lemma: 'عَذَاب', pos: 'noun', features: 'indef.nom', gloss: 'a punishment' },
            { surface: 'شَدِيدٌ', lemma: 'شَدِيد', pos: 'adj', features: 'indef.nom', gloss: 'severe' },
          ],
        },
        {
          id: 'qs-v9-c03-013',
          ar: '﴿بِمَا نَسُوا يَوْمَ الْحِسَابِ﴾.',
          en: 'for having forgotten the Day of Reckoning."',
          tokens: [
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'for what' },
            { surface: 'نَسُوا', lemma: 'نَسِيَ', pos: 'verb', features: 'perf.3mp', gloss: 'to forget; they forgot' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the Day of' },
            { surface: 'الْحِسَابِ', lemma: 'حِسَاب', pos: 'noun', features: 'def.gen', root: 'ح س ب', gloss: 'the Reckoning' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ دَاوُدُ رَغْمَ مُلْكِهِ الْوَاسِعِ؟',
          options: ['كَانَ عَبْداً خَاشِعاً أَوَّاباً دَائِمَ الذِّكْرِ', 'كَانَ مُتَكَبِّراً عَلَى النَّاسِ', 'كَانَ لَا يُصَلِّي وَلَا يَذْكُرُ اللَّهَ'],
          answer: 0,
          qEn: 'How was Dāwūd despite his wide dominion?',
          optionsEn: ['A humble, penitent servant, ever-remembering', 'Arrogant towards people', 'One who neither prayed nor remembered Allah'],
        },
        {
          q: 'كَيْفَ كَانَ دَاوُدُ يَحْكُمُ بَيْنَ النَّاسِ؟',
          options: ['بِالْحَقِّ وَلَا يُحَابِي أَحَداً', 'يُحَابِي الْأَغْنِيَاءَ', 'لَا يَحْكُمُ بَيْنَهُمْ أَصْلاً'],
          answer: 0,
          qEn: 'How did Dāwūd judge between people?',
          optionsEn: ['By truth, without favouring anyone', 'He favoured the wealthy', 'He did not judge between them at all'],
        },
        {
          q: 'مَاذَا نَهَى اللَّهُ دَاوُدَ عَنْهُ فِي الْآيَةِ؟',
          options: ['أَنْ يَتَّبِعَ الْهَوَى فَيُضِلَّهُ عَنْ سَبِيلِ اللَّهِ', 'أَنْ يَحْكُمَ بَيْنَ النَّاسِ', 'أَنْ يَذْكُرَ اللَّهَ كَثِيراً'],
          answer: 0,
          qEn: 'What did Allah forbid Dāwūd from in the āyah?',
          optionsEn: ["Following desire, which would lead him astray from Allah's path", 'Judging between people', 'Remembering Allah often'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ دَاوُدُ عَبْداً',
        post: 'أَوَّاباً.',
        en: 'Dāwūd was a humble, penitent servant.',
        options: ['خَاشِعاً', 'خَاشِعٌ', 'خَاشِعِ', 'الْخَاشِعُ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- second predicate noun after كَانَ, matching the printed عَبْداً خَاشِعاً.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong; the predicate here is indefinite like عَبْداً beside it.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ اللَّهُ: يَادَاوُودُ إِنَّا جَعَلْنَاكَ',
        post: 'فِي الْأَرْضِ.',
        en: 'Allah said: O Dāwūd, indeed We have made you a successor on the earth.',
        options: ['خَلِيفَةً', 'خَلِيفَةٌ', 'خَلِيفَةِ', 'خُلَفَاءَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- second object of جَعَلْنَاكَ, matching the printed جَعَلْنَاكَ خَلِيفَةً.',
          'Nominative -- wrong case; the second object of جَعَلَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural ("successors") -- wrong number; the āyah addresses Dāwūd alone.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا تَتَّبِعِ الْهَوَى فَيُضِلَّكَ عَنْ سَبِيلِ',
        post: '.',
        en: "and do not follow desire, for it will lead you astray from the path of Allah.",
        options: ['اللَّهِ', 'اللَّهُ', 'اللَّهَ', 'لِلَّهِ'],
        answer: 0,
        rationales: [
          'Genitive -- second term of the إضافة with سَبِيل, matching the printed سَبِيلِ اللَّهِ.',
          'Nominative -- wrong case; the second term of an إضافة is always genitive.',
          'Accusative -- wrong case for the same reason.',
          'With a fused preposition -- wrong; no separate preposition governs this word here.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَحْكُمُ الْقَاضِي بَيْنَ النَّاسِ بِالْحَقِّ',
        pre: '',
        post: 'بَيْنَ النَّاسِ بِالْحَقِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَحْكُمُ', 'يَحْكُمُ', 'تَحْكُمُ', 'نَحْكُمُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَّبِعُ الرَّجُلُ الْهَوَى',
        pre: '',
        post: 'الْهَوَى',
        targetPerson: 'أَنتُمْ',
        targetEn: 'you (pl.)',
        options: ['تَتَّبِعُونَ', 'يَتَّبِعُ', 'أَتَّبِعُ', 'نَتَّبِعُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you (pl.)."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَضِلُّ الرَّجُلُ عَنْ سَبِيلِ اللَّهِ',
        pre: '',
        post: 'عَنْ سَبِيلِ اللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَضِلُّونَ', 'يَضِلُّ', 'تَضِلُّ', 'نَضِلُّ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

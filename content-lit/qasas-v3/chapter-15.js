// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 15 -- حُجَّةُ
// الأَغْنِيَاءِ. Printed pages 74 (bottom, right after ch14's closing line
// and the heading) through 75 (top, ending before ch16's heading دَعْوَةُ
// نُوحٍ partway down the same page). Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// The rich lay out their actual argument: what Nūḥ calls to isn't truth
// or good at all -- and why? Because, they reason, they themselves are
// proof: they're first in every good thing already, with the best food,
// the best clothes, everyone else following their lead, and in their own
// experience good fortune never misses them or passes them by in the
// city. So if this religion were really good, it would have reached
// people like them before it reached these poor believers -- a self-
// serving logic the chapter quotes directly from the Qur'an (Sūrat
// al-Aḥqāf 46:11): "If it had been good, they would not have beaten us
// to it."
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention,
//      ch7/ch9/ch10/ch12-14) -- no rewording, same printed text and
//      order. The closing Qur'an quote (46:11) is kept in its own
//      ﴿﴾-wrapped sentence, separated from its narrating clause.
//   -- لَأَتَانَا (qs-v3-c15-010) fuses the jawāb-of-لَوْ emphatic لَ onto
//      the already-taught verb أَتَى, tagged 'part+perf.3ms+1p' -- same
//      fusion pattern as qasas-v2 ch15's لَأَسْرَعَ and ch13's لَأَنزَلَ.
//   -- لِأَنَّا (qs-v3-c15-004) fuses لِ ("because") onto أَنَّ + 1p, tagged
//      'prep+part+1p' -- same fusion convention already used for
//      لِأَنَّهُ/لِأَنَّهَا (qasas-v1 ch5/ch7). The second, unprefixed أَنَّا
//      later in the same sentence ("جَرَّبْنَا أَنَّا نَحْنُ السَّابِقُونَ") is
//      just أَنَّ + 1p on its own, matching the already-attested إِنَّا
//      fusion pattern.
//   -- سَابِق (new, "foremost, preceding one") is the active-participle
//      counterpart of the new verb سَبَقَ ("to precede") used later in the
//      same chapter's closing Qur'an quote -- tagged as its own lemma per
//      the established participle-as-distinct-lemma convention (صَالِح،
//      سَاجِد، نَاصِح، طَارِد).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ، غَنِيّ، الَّذِي،
//      دَعَا، إِلَى، نُوح، لَيْسَ، حَقّ، خَيْر، لِمَاذَا، كُلّ، فِي، طَيِّب، مِنْ،
//      طَعَام، جَمِيل، إِنَّ، رَأَى، أَنَّ، لَا، نَاس، شَيْء، هَذَا، دِين، قَبْلَ،
//      هَؤُلَاءِ، مِسْكِين، لَوْ، كَانَ، مَا، نَحْنُ
//      are all already taught and are NOT re-listed in newWords here.
//
// 7 new words (لِبَاس، تَبَع، جَرَّبَ، سَابِق، سَبَقَ، أَخْطَأَ، جَاوَزَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch15',
  title: { ar: 'حُجَّةُ الأَغْنِيَاءِ', en: "The Rich Men's Argument" },
  newWords: ['لِبَاس', 'تَبَع', 'جَرَّبَ', 'سَابِق', 'سَبَقَ', 'أَخْطَأَ', 'جَاوَزَ'],
  lemmas: {
    لِبَاس: { gloss: 'clothing, dress' },
    تَبَع: { gloss: 'follower(s), subordinate' },
    جَرَّبَ: { gloss: 'to test, try, find by experience' },
    سَابِق: { gloss: 'foremost, preceding one' },
    سَبَقَ: { gloss: 'to precede, be first' },
    أَخْطَأَ: { gloss: 'to miss, wrong, err against' },
    جَاوَزَ: { gloss: 'to bypass, pass over, overtake' },
  },
  paragraphs: [
    {
      en: "The rich said: what Nūḥ calls to isn't truth and isn't good. Why? Because, they said, we have found by experience that we are the foremost in every good thing -- we have the best of food and the best of clothes, and people follow our lead in everything. And we have seen that good fortune never misses us or passes us by in the city. So if this religion were really good, it would have reached us before it reached these poor believers -- \"If it had been good, they would not have beaten us to it.\"",
      sentences: [
        {
          id: 'qs-v3-c15-001',
          ar: 'وَقَالَ الأَغْنِيَاءُ: الَّذِي يَدْعُو إِلَيْهِ نُوحٌ',
          en: 'The rich said: what Nūḥ calls to',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'الأَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'adj', features: 'def.nom.pl', gloss: 'the rich' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'that which' },
            { surface: 'يَدْعُو', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms', gloss: 'to call, invite; calls' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c15-002',
          ar: 'لَيْسَ بِحَقٍّ وَلَيْسَ بِخَيْرٍ.',
          en: "isn't truth and isn't good.",
          tokens: [
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'بِحَقٍّ', lemma: 'حَقّ', pos: 'noun', features: 'prep+indef.gen', gloss: 'truth' },
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'is not; and is not' },
            { surface: 'بِخَيْرٍ', lemma: 'خَيْر', pos: 'noun', features: 'prep+indef.gen', gloss: 'good' },
          ],
        },
        {
          id: 'qs-v3-c15-003',
          ar: 'لِمَاذَا؟.',
          en: 'Why?',
          tokens: [
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
          ],
        },
        {
          id: 'qs-v3-c15-004',
          ar: 'لِأَنَّا جَرَّبْنَا أَنَّا نَحْنُ السَّابِقُونَ فِي كُلِّ خَيْرٍ.',
          en: 'Because, they said, we have found by experience that we are the foremost in every good thing.',
          tokens: [
            { surface: 'لِأَنَّا', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+1p', gloss: 'because we' },
            { surface: 'جَرَّبْنَا', lemma: 'جَرَّبَ', pos: 'verb', features: 'perf.1p', root: 'ج ر ب', gloss: 'to test, find by experience; we have found by experience' },
            { surface: 'أَنَّا', lemma: 'أَنَّ', pos: 'part', features: 'part+1p', gloss: 'that we' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'السَّابِقُونَ', lemma: 'سَابِق', pos: 'noun', features: 'def.nom.pl', root: 'س ب ق', gloss: 'the foremost' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'خَيْرٍ', lemma: 'خَيْر', pos: 'noun', features: 'indef.gen', gloss: 'good thing' },
          ],
        },
        {
          id: 'qs-v3-c15-005',
          ar: 'لَنَا كُلُّ طَيِّبٍ مِنَ الطَّعَامِ،',
          en: 'We have the best of food,',
          tokens: [
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us, we have' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every, all the' },
            { surface: 'طَيِّبٍ', lemma: 'طَيِّب', pos: 'adj', features: 'indef.gen', gloss: 'good, wholesome' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الطَّعَامِ', lemma: 'طَعَام', pos: 'noun', features: 'def.gen', gloss: 'the food' },
          ],
        },
        {
          id: 'qs-v3-c15-006',
          ar: 'وَلَنَا كُلُّ جَمِيلٍ مِنَ اللِّبَاسِ.',
          en: 'and we have the best of clothes.',
          tokens: [
            { surface: 'وَلَنَا', lemma: 'لِ', pos: 'prep', features: 'conj+prep+1p', gloss: 'and for us, and we have' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every, all the' },
            { surface: 'جَمِيلٍ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.gen', gloss: 'beautiful, fine' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'اللِّبَاسِ', lemma: 'لِبَاس', pos: 'noun', features: 'def.gen', root: 'ل ب س', gloss: 'the clothing' },
          ],
        },
        {
          id: 'qs-v3-c15-007',
          ar: 'وَالنَّاسُ فِي كُلِّ شَيْءٍ لَنَا تَبَعٌ.',
          en: 'and people follow our lead in everything.',
          tokens: [
            { surface: 'وَالنَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'conj+def.nom', gloss: 'and the people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'تَبَعٌ', lemma: 'تَبَع', pos: 'noun', features: 'indef.nom', root: 'ت ب ع', gloss: 'followers' },
          ],
        },
        {
          id: 'qs-v3-c15-008',
          ar: 'وَإِنَّا رَأَيْنَا أَنَّ الخَيْرَ لَا يُخْطِئُنَا',
          en: 'And we have seen that good fortune never misses us',
          tokens: [
            { surface: 'وَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'رَأَيْنَا', lemma: 'رَأَى', pos: 'verb', features: 'perf.1p', gloss: 'to see; we have seen' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الخَيْرَ', lemma: 'خَيْر', pos: 'noun', features: 'def.acc', gloss: 'good fortune' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُخْطِئُنَا', lemma: 'أَخْطَأَ', pos: 'verb', features: 'impf.3ms+1p', root: 'خ ط أ', gloss: 'to miss, err against; misses us' },
          ],
        },
        {
          id: 'qs-v3-c15-009',
          ar: 'وَلا يُجَاوِزُنَا فِي الْمَدِينَةِ.',
          en: 'or passes us by in the city.',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُجَاوِزُنَا', lemma: 'جَاوَزَ', pos: 'verb', features: 'impf.3ms+1p', root: 'ج و ز', gloss: 'to bypass, pass over; bypasses us' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَدِينَةِ', lemma: 'مَدِينَة', pos: 'noun', features: 'def.gen', gloss: 'the city' },
          ],
        },
        {
          id: 'qs-v3-c15-010',
          ar: 'فَلَوْ كَانَ هَذَا الدِّينُ خَيْراً لَأَتَانَا قَبْلَ هَؤُلَاءِ المَسَاكِينِ',
          en: 'So if this religion were really good, it would have reached us before these poor believers',
          tokens: [
            { surface: 'فَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj+conj', gloss: 'so if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; were' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الدِّينُ', lemma: 'دِين', pos: 'noun', features: 'def.nom', gloss: 'the religion' },
            { surface: 'خَيْراً', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'good' },
            { surface: 'لَأَتَانَا', lemma: 'أَتَى', pos: 'verb', features: 'part+perf.3ms+1p', gloss: 'to come; would have come to us' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'acc.constr', gloss: 'before' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'المَسَاكِينِ', lemma: 'مِسْكِين', pos: 'noun', features: 'def.gen.pl', gloss: 'the poor' },
          ],
        },
        {
          id: 'qs-v3-c15-011',
          ar: '﴿لَوْ كَانَ خَيْراً مَا سَبَقُونَا إِلَيْهِ﴾.',
          en: '"If it had been good, they would not have beaten us to it."',
          tokens: [
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; had been' },
            { surface: 'خَيْراً', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'good' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'سَبَقُونَا', lemma: 'سَبَقَ', pos: 'verb', features: 'perf.3mp+1p', root: 'س ب ق', gloss: 'to precede; they preceded us' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا حُجَّةُ الأَغْنِيَاءِ فِي رَفْضِ دَعْوَةِ نُوحٍ؟',
          options: [
            'أَنَّهُمُ السَّابِقُونَ فِي كُلِّ خَيْرٍ، فَلَوْ كَانَ الدِّينُ خَيْراً لَأَتَاهُمْ قَبْلَ الْمَسَاكِينِ',
            'أَنَّهُمْ لَمْ يَسْمَعُوا بِدَعْوَةِ نُوحٍ أَصْلًا',
            'أَنَّهُمْ كَانُوا مَشْغُولِينَ بِالسَّفَرِ',
          ],
          answer: 0,
          qEn: "What was the rich men's argument for rejecting Nūḥ's call?",
          optionsEn: [
            'That they are the foremost in every good thing, so if the religion were good it would have reached them before the poor',
            "That they had never even heard of Nūḥ's call",
            'That they were busy traveling',
          ],
        },
        {
          q: 'بِمَاذَا وَصَفَ الأَغْنِيَاءُ أَنفُسَهُمْ؟',
          options: [
            'أَنَّ لَهُمْ كُلَّ طَيِّبٍ مِنَ الطَّعَامِ وَكُلَّ جَمِيلٍ مِنَ اللِّبَاسِ، وَأَنَّ النَّاسَ لَهُمْ تَبَعٌ',
            'أَنَّهُمْ أَفْقَرُ النَّاسِ وَأَقَلُّهُمْ حَظًّا',
            'أَنَّهُمْ لَا يَهْتَمُّونَ بِالطَّعَامِ وَلَا اللِّبَاسِ',
          ],
          answer: 0,
          qEn: 'How did the rich describe themselves?',
          optionsEn: [
            'That they have the best of food and the best of clothes, and that people follow their lead',
            'That they are the poorest of people with the least luck',
            'That they care nothing for food or clothing',
          ],
        },
        {
          q: 'مَا الآيَةُ الَّتِي اسْتَشْهَدَ بِهَا الْكِتَابُ لِتَلْخِيصِ مَنْطِقِ الأَغْنِيَاءِ؟',
          options: [
            '﴿لَوْ كَانَ خَيْراً مَا سَبَقُونَا إِلَيْهِ﴾',
            '﴿إِنِّي لَكُمْ رَسُولٌ أَمِينٌ﴾',
            '﴿مَا هَذَا إِلَّا بَشَرٌ مِثْلُكُمْ﴾',
          ],
          answer: 0,
          qEn: "Which verse does the book quote to sum up the rich men's logic?",
          optionsEn: [
            '"If it had been good, they would not have beaten us to it."',
            '"I am to you a trustworthy messenger."',
            '"This is nothing but a human being like you."',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ الأَغْنِيَاءُ: نَحْنُ',
        post: 'فِي كُلِّ خَيْرٍ.',
        en: 'The rich said: we are the foremost in every good thing.',
        options: ['السَّابِقُونَ', 'السَّابِقُ', 'سَبَقُوا', 'سَبْق'],
        answer: 0,
        rationales: [
          'Definite nominative plural -- agrees with the plural subject نَحْنُ.',
          'Singular -- wrong number; the subject نَحْنُ is plural.',
          'Perfect verb -- wrong part of speech; this position needs a predicate noun after نَحْنُ.',
          'Verbal noun -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'رَأَيْنَا أَنَّ الْخَيْرَ لَا',
        post: 'وَلَا يُجَاوِزُنَا.',
        en: 'We have seen that good fortune never misses us or passes us by.',
        options: ['يُخْطِئُنَا', 'أَخْطَأَ', 'يُخْطِئُ', 'خَطَأ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect + 1p object -- "it misses us," matching وَلَا يُجَاوِزُنَا\'s parallel structure.',
          'Perfect -- wrong tense; this is an ongoing claim, not a one-time past event.',
          'Imperfect without the 1p object suffix -- missing "us," incomplete for this sentence.',
          'Noun ("mistake") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَوْ كَانَ خَيْراً مَا',
        post: 'إِلَيْهِ.',
        en: 'If it had been good, they would not have beaten us to it.',
        options: ['سَبَقُونَا', 'سَبَقَ', 'يَسْبِقُونَنَا', 'سَابِقُونَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect + 1p object -- "they preceded us," matching the printed ﴿مَا سَبَقُونَا إِلَيْهِ﴾.',
          'Missing the 1p object suffix -- incomplete, doesn\'t match "beaten US to it."',
          'Imperfect -- wrong tense; the Qur\'an quote uses the perfect after مَا here.',
          'Not a valid verb form -- السَّابِقُونَ is the participle/noun, not an inflected verb.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَجْتَهِدُ الرَّجُلُ فِي كُلِّ خَيْرٍ',
        pre: '',
        post: 'فِي كُلِّ خَيْرٍ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَجْتَهِدُ', 'يَجْتَهِدُ', 'تَجْتَهِدُ', 'أَجْتَهِدُ'],
        answer: 0,
        rationales: [
          '1st plural imperfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; this is "we," not "you."',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَجْتَهِدُ الرَّجُلُ فِي كُلِّ خَيْرٍ',
        pre: '',
        post: 'فِي كُلِّ خَيْرٍ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَجْتَهِدُونَ', 'يَجْتَهِدُ', 'تَجْتَهِدُ', 'نَجْتَهِدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'الْغَنِيُّ يَعْرِفُ أَنَّ النَّاسَ لَهُ تَبَعٌ',
        pre: '',
        post: 'أَنَّ النَّاسَ لَهُ تَبَعٌ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَعْرِفُ', 'يَعْرِفُ', 'تَعْرِفُ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

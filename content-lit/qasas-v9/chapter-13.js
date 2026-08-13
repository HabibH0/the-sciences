// قَصَصُ النَّبِيِّينَ, volume 9, chapter 13 -- وَأَسْلَمَتْ مَعَ سُلَيْمَانَ لِلَّهِ
// رَبِّ الْعَالَمِينَ. Printed pages 232 (from its own heading box, right
// after ch12's closing sentence) through 233 (top few lines only), ending
// right before ch14's heading الْقُرْآنُ يَحْكِي قِصَّةَ سُلَيْمَانَ on that page.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Exactly as planned: despite her shrewdness and intelligence, the Queen
// falls into the very trap, mistaking the glass for rippling water and
// lifting her hem to wade through. Sulaymān alerts her to her error --
// quoting the mushaf's own line, "it is a palace paved smooth with glass"
// -- and the veil lifts from her eyes: she recognises her own folly in
// judging outward appearance as reality and in worshipping and prostrating
// to the sun. She hastens to speak the Qur'an's own closing words of the
// story (an-Naml 27:44b): "My Lord, I have wronged myself, and I submit
// with Sulaymān to Allah, Lord of the worlds."
//
// Grammar / lexical notes:
//   -- The chapter's own title recasts the closing āyah's first-person
//      وَأَسْلَمْتُ ("and I have submitted") as third-person narration,
//      وَأَسْلَمَتْ ("and she submitted") -- the quoted āyah itself (unit 013)
//      keeps the Qur'an's actual first-person wording, unaltered.
//   -- صَرْحٌ مُمَرَّدٌ مِّن قَوَارِيرَ ("a palace paved smooth with glass," unit
//      007) is Sulaymān's own direct speech quoted from Sūrat an-Naml
//      27:44a, printed without ﴿﴾ brackets here (unlike unit 013's closing
//      line) -- kept exactly as the scan shows it, mid-narration.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): نَبَّهَ، عَالَم، رَبّ، اللَّه،
//      سُلَيْمَان، نَبِيّ، شَمْس، سَجَدَ، عِبَادَة، مَظْهَر، غِطَاء، زُجَاج، سَاق،
//      كَشَفَ، تَوَهَّمَ، مَاء، أَرَادَ، هَكَذَا
//      are all already taught and are NOT re-listed in newWords here.
//
// 14 new words (تَوَرَّطَ، رَغْمَ، فَاحِش، زُجَاجَة، رَقْرَاق، مَاجَ، خَاضَ، صَرْح،
// مُمَرَّد، قَارُورَة، قِيَاس، ظَاهِر، اِبْتَدَرَ، ظَلَمَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch13',
  title: { ar: 'وَأَسْلَمَتْ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ', en: 'And She Submitted with Sulaymān to Allah, Lord of the Worlds' },
  newWords: ['تَوَرَّطَ', 'رَغْمَ', 'فَاحِش', 'زُجَاجَة', 'رَقْرَاق', 'مَاجَ', 'خَاضَ', 'صَرْح', 'مُمَرَّد', 'قَارُورَة', 'قِيَاس', 'ظَاهِر', 'اِبْتَدَرَ', 'ظَلَمَ'],
  lemmas: {
    تَوَرَّطَ: { gloss: 'to fall into (a trap, error)' },
    رَغْمَ: { gloss: 'despite' },
    فَاحِش: { gloss: 'gross, flagrant' },
    زُجَاجَة: { gloss: 'a pane of glass' },
    رَقْرَاق: { gloss: 'rippling, shimmering' },
    مَاجَ: { gloss: 'to ripple, surge' },
    خَاضَ: { gloss: 'to wade through' },
    صَرْح: { gloss: 'a lofty palace, edifice' },
    مُمَرَّد: { gloss: 'smoothed, paved' },
    قَارُورَة: { gloss: 'glass, a glass vessel' },
    قِيَاس: { gloss: 'measuring, judging by comparison' },
    ظَاهِر: { gloss: 'the outward, apparent' },
    اِبْتَدَرَ: { gloss: 'to hasten to' },
    ظَلَمَ: { gloss: 'to wrong' },
  },
  paragraphs: [
    {
      en: 'And so it was: despite her shrewdness and intelligence, she fell into this gross error, and mistook the glass pane for rippling, surging water, and lifted the hem from her legs, and meant to wade through it. There, the Prophet of Allah Sulaymān alerted her to her error, and said: it is a palace paved smooth with glass. The veil lifted from her eyes, and she knew her own folly in judging outward appearance as reality, and in worshipping and prostrating to the sun. And she hastened to say: "My Lord, indeed I have wronged myself, and I submit with Sulaymān to Allah, Lord of the worlds."',
      sentences: [
        {
          id: 'qs-v9-c13-001',
          ar: 'وَهَكَذَا كَانَ،',
          en: 'And so it was:',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and so, thus' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
          ],
        },
        {
          id: 'qs-v9-c13-002',
          ar: 'فَقَدْ تَوَرَّطَتْ رَغْمَ دَهَائِهَا وَذَكَائِهَا فِي هَذَا الْخَطَإِ الْفَاحِشِ،',
          en: 'despite her shrewdness and intelligence, she fell into this gross error,',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'indeed' },
            { surface: 'تَوَرَّطَتْ', lemma: 'تَوَرَّطَ', pos: 'verb', features: 'perf.3fs', root: 'و ر ط', gloss: 'to fall into; fell into' },
            { surface: 'رَغْمَ', lemma: 'رَغْمَ', pos: 'prep', features: 'prep', gloss: 'despite' },
            { surface: 'دَهَائِهَا', lemma: 'دَهَاء', pos: 'noun', features: 'gen+3fs', gloss: 'her shrewdness' },
            { surface: 'وَذَكَائِهَا', lemma: 'ذَكَاء', pos: 'noun', features: 'conj+gen+3fs', gloss: 'and her intelligence' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'الْخَطَإِ', lemma: 'خَطَأ', pos: 'noun', features: 'def.gen', gloss: 'the error' },
            { surface: 'الْفَاحِشِ', lemma: 'فَاحِش', pos: 'adj', features: 'def.gen', gloss: 'the gross' },
          ],
        },
        {
          id: 'qs-v9-c13-003',
          ar: 'وَتَوَهَّمَتِ الزُّجَاجَةَ مَاءً رَقْرَاقاً يَسِيلُ وَيَمُوجُ،',
          en: 'and mistook the glass pane for rippling, surging water,',
          tokens: [
            { surface: 'وَتَوَهَّمَتِ', lemma: 'تَوَهَّمَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to imagine; and mistook' },
            { surface: 'الزُّجَاجَةَ', lemma: 'زُجَاجَة', pos: 'noun', features: 'def.acc', root: 'ز ج ج', gloss: 'the glass pane' },
            { surface: 'مَاءً', lemma: 'مَاء', pos: 'noun', features: 'indef.acc', gloss: 'water' },
            { surface: 'رَقْرَاقاً', lemma: 'رَقْرَاق', pos: 'adj', features: 'indef.acc', root: 'ر ق ق', gloss: 'rippling' },
            { surface: 'يَسِيلُ', lemma: 'سَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to flow; flowing' },
            { surface: 'وَيَمُوجُ', lemma: 'مَاجَ', pos: 'verb', features: 'conj+impf.3ms', root: 'م و ج', gloss: 'to ripple, surge; and surging' },
          ],
        },
        {
          id: 'qs-v9-c13-004',
          ar: 'فَكَشَفَتْ عَنْ سَاقَيْهَا،',
          en: 'and lifted the hem from her legs,',
          tokens: [
            { surface: 'فَكَشَفَتْ', lemma: 'كَشَفَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to uncover; and uncovered' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سَاقَيْهَا', lemma: 'سَاق', pos: 'noun', features: 'du.gen+3fs', gloss: 'her legs' },
          ],
        },
        {
          id: 'qs-v9-c13-005',
          ar: 'وَأَرَادَتْ أَنْ تَخُوضَهُ.',
          en: 'and meant to wade through it.',
          tokens: [
            { surface: 'وَأَرَادَتْ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to want, mean; and meant' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'تَخُوضَهُ', lemma: 'خَاضَ', pos: 'verb', features: 'impf.3fs+3ms', root: 'خ و ض', gloss: 'to wade through; wade through it' },
          ],
        },
        {
          id: 'qs-v9-c13-006',
          ar: 'هُنَالِكَ نَبَّهَهَا نَبِيُّ اللَّهِ سُلَيْمَانُ عَلَى خَطَئِهَا،',
          en: 'There, the Prophet of Allah Sulaymān alerted her to her error,',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'نَبَّهَهَا', lemma: 'نَبَّهَ', pos: 'verb', features: 'perf.3ms+3fs', gloss: 'to alert; alerted her' },
            { surface: 'نَبِيُّ', lemma: 'نَبِيّ', pos: 'noun', features: 'constr.nom', gloss: 'the Prophet of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'خَطَئِهَا', lemma: 'خَطَأ', pos: 'noun', features: 'gen+3fs', gloss: 'her error' },
          ],
        },
        {
          id: 'qs-v9-c13-007',
          ar: 'وَقَالَ: إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ،',
          en: 'and said: it is a palace paved smooth with glass.',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed it' },
            { surface: 'صَرْحٌ', lemma: 'صَرْح', pos: 'noun', features: 'indef.nom', gloss: 'a lofty palace' },
            { surface: 'مُمَرَّدٌ', lemma: 'مُمَرَّد', pos: 'adj', features: 'indef.nom', root: 'م ر د', gloss: 'smoothed, paved' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'قَوَارِيرَ', lemma: 'قَارُورَة', pos: 'noun', features: 'pl.indef.gen', gloss: 'glass' },
          ],
        },
        {
          id: 'qs-v9-c13-008',
          ar: 'وَانْكَشَفَ الْغِطَاءُ عَنْ عَيْنَيْهَا،',
          en: 'The veil lifted from her eyes,',
          tokens: [
            { surface: 'وَانْكَشَفَ', lemma: 'اِنْكَشَفَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be lifted; and was lifted' },
            { surface: 'الْغِطَاءُ', lemma: 'غِطَاء', pos: 'noun', features: 'def.nom', gloss: 'the veil' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عَيْنَيْهَا', lemma: 'عَيْن', pos: 'noun', features: 'du.gen+3fs', gloss: 'her eyes' },
          ],
        },
        {
          id: 'qs-v9-c13-009',
          ar: 'وَعَرَفَتْ جَهْلَهَا فِي قِيَاسِ الْمَظْهَرِ عَلَى الظَّاهِرِ',
          en: 'and she knew her own folly in judging outward appearance as reality,',
          tokens: [
            { surface: 'وَعَرَفَتْ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to know; and knew' },
            { surface: 'جَهْلَهَا', lemma: 'جَهَالَة', pos: 'noun', features: 'acc+3fs', gloss: 'her folly' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'قِيَاسِ', lemma: 'قِيَاس', pos: 'noun', features: 'constr.gen', root: 'ق ي س', gloss: 'judging' },
            { surface: 'الْمَظْهَرِ', lemma: 'مَظْهَر', pos: 'noun', features: 'def.gen', gloss: 'outward appearance' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'as' },
            { surface: 'الظَّاهِرِ', lemma: 'ظَاهِر', pos: 'noun', features: 'def.gen', root: 'ظ ه ر', gloss: 'the reality' },
          ],
        },
        {
          id: 'qs-v9-c13-010',
          ar: 'وَعِبَادَةِ الشَّمْسِ وَالسُّجُودِ لَهَا،',
          en: 'and in worshipping and prostrating to the sun.',
          tokens: [
            { surface: 'وَعِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'conj+constr.gen', gloss: 'and worshipping' },
            { surface: 'الشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'def.gen', gloss: 'the sun' },
            { surface: 'وَالسُّجُودِ', lemma: 'سُجُود', pos: 'noun', features: 'conj+def.gen', gloss: 'and prostrating' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to it' },
          ],
        },
        {
          id: 'qs-v9-c13-011',
          ar: 'وَابْتَدَرَتْ تَقُولُ:',
          en: 'And she hastened to say:',
          tokens: [
            { surface: 'وَابْتَدَرَتْ', lemma: 'اِبْتَدَرَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ب د ر', gloss: 'to hasten to; and hastened to' },
            { surface: 'تَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3fs', gloss: 'to say; say' },
          ],
        },
        {
          id: 'qs-v9-c13-012',
          ar: '﴿رَبِّ إِنِّي ظَلَمْتُ نَفْسِي﴾',
          en: '"My Lord, indeed I have wronged myself,',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'ظَلَمْتُ', lemma: 'ظَلَمَ', pos: 'verb', features: 'perf.1s', root: 'ظ ل م', gloss: 'to wrong; I have wronged' },
            { surface: 'نَفْسِي', lemma: 'نَفْس', pos: 'noun', features: 'acc+1s', gloss: 'myself' },
          ],
        },
        {
          id: 'qs-v9-c13-013',
          ar: '﴿وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ﴾.',
          en: 'and I submit with Sulaymān to Allah, Lord of the worlds."',
          tokens: [
            { surface: 'وَأَسْلَمْتُ', lemma: 'أَسْلَمَ', pos: 'verb', features: 'conj+perf.1s', root: 'س ل م', gloss: 'to submit; and I submit' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'gen', gloss: 'Sulaymān' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'to Allah' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.gen', gloss: 'Lord of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلْمَلِكَةِ رَغْمَ ذَكَائِهَا؟',
          options: ['تَوَهَّمَتِ الزُّجَاجَةَ مَاءً وَكَشَفَتْ عَنْ سَاقَيْهَا لِتَخُوضَهُ', 'عَرَفَتِ الزُّجَاجَ مِنْ أَوَّلِ لَحْظَةٍ', 'رَفَضَتْ دُخُولَ الْقَصْرِ'],
          answer: 0,
          qEn: 'What happened to the queen despite her intelligence?',
          optionsEn: ['She mistook the glass for water and lifted her hem to wade through it', 'She recognized the glass from the first moment', 'She refused to enter the palace'],
        },
        {
          q: 'مَاذَا قَالَ سُلَيْمَانُ لِلْمَلِكَةِ حِينَ نَبَّهَهَا؟',
          options: ['إِنَّهُ صَرْحٌ مُمَرَّدٌ مِنْ قَوَارِيرَ', 'إِنَّهُ بُسْتَانٌ مِنَ الْوَرْدِ', 'إِنَّهُ طَرِيقٌ مُظْلِمٌ'],
          answer: 0,
          qEn: 'What did Sulaymān say to the queen when he alerted her?',
          optionsEn: ['That it is a palace paved smooth with glass', 'That it is a garden of roses', 'That it is a dark road'],
        },
        {
          q: 'بِمَاذَا خَتَمَتِ الْمَلِكَةُ اعْتِرَافَهَا بِخَطَئِهَا؟',
          options: ['رَبِّ إِنِّي ظَلَمْتُ نَفْسِي وَأَسْلَمْتُ مَعَ سُلَيْمَانَ لِلَّهِ رَبِّ الْعَالَمِينَ', 'بِطَلَبِ الصَّفْحِ مِنْ قَوْمِهَا فَقَطْ', 'بِالصَّمْتِ التَّامِّ'],
          answer: 0,
          qEn: 'How did the queen conclude her admission of her mistake?',
          optionsEn: ['"My Lord, indeed I have wronged myself, and I submit with Sulaymān to Allah, Lord of the worlds"', 'By asking pardon from her people only', 'With total silence'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'تَوَرَّطَتِ الْمَلِكَةُ رَغْمَ',
        post: 'وَذَكَائِهَا فِي هَذَا الْخَطَإِ.',
        en: 'The queen fell, despite her shrewdness and intelligence, into this error.',
        options: ['دَهَائِهَا', 'دَهَاؤُهَا', 'دَهَاءَهَا', 'الدَّهَاءُ'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition رَغْمَ, matching the printed رَغْمَ دَهَائِهَا.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'Definite without a suffix -- wrong; the printed word carries the possessive "her."',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ سُلَيْمَانُ: إِنَّهُ صَرْحٌ',
        post: 'مِنْ قَوَارِيرَ.',
        en: 'Sulaymān said: it is a palace paved smooth with glass.',
        options: ['مُمَرَّدٌ', 'مُمَرَّدٍ', 'مُمَرَّداً', 'الْمُمَرَّدُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- an adjective agreeing with صَرْحٌ, the predicate of إِنَّ, matching the printed صَرْحٌ مُمَرَّدٌ.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Accusative -- wrong case; this word agrees with the nominative صَرْحٌ.',
          'Definite -- wrong; the printed word is indefinite, agreeing with the indefinite صَرْحٌ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَتِ الْمَلِكَةُ: رَبِّ إِنِّي',
        post: 'نَفْسِي.',
        en: 'The queen said: My Lord, indeed I have wronged myself.',
        options: ['ظَلَمْتُ', 'ظَلَمَتْ', 'ظَلَمَ', 'تَظْلِمُ'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches the speaker إِنِّي ("indeed I"), matching the printed ظَلَمْتُ.',
          '3rd feminine singular -- wrong person; the queen speaks of herself as "I," not "she."',
          '3rd masculine singular -- wrong person and gender.',
          'Imperfect -- wrong tense; this recounts a completed wrong, not an ongoing one.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَخُوضُ الْمَاءَ الرَّقْرَاقَ',
        pre: '',
        post: 'الْمَاءَ الرَّقْرَاقَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخُوضُ', 'أَخُوضُ', 'يَخُوضُ', 'نَخُوضُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '1st singular -- the base form, not shifted to "she."',
          '3rd masculine singular -- wrong gender; the target is "she," not "he."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَظْلِمُ الرَّجُلُ نَفْسَهُ',
        pre: '',
        post: 'نَفْسَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَظْلِمُ', 'يَظْلِمُ', 'تَظْلِمُ', 'نَظْلِمُ'],
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
        base: 'يُنَبِّهُ الْمُعَلِّمُ الطَّالِبَ عَلَى خَطَئِهِ',
        pre: '',
        post: 'الطَّالِبَ عَلَى خَطَئِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يُنَبِّهُونَ', 'يُنَبِّهُ', 'تُنَبِّهُ', 'نُنَبِّهُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

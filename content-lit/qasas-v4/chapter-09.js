// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 9 -- إِيمَانُ هُودٍ.
// Printed pages 91 (after ch8's closing لِيُنْذِرَكُمْ؟) - 92 (top, ending
// before ch10's heading عِنَادُ عَادٍ). Transcribed by hand from a 200dpi
// render against ../CHAPTER-FORMAT.md.
//
// Unable to answer Hūd's reasoning, ʿĀd falls back on claiming their gods
// have driven him mad -- and Hūd answers with an escalating declaration of
// disbelief in idols (repeated لَا تَمْلِكُ / لَا تَمْلِكُونَ frame), open
// defiance quoted twice from the Qur'an, and total trust in Allah alone.
//
// Grammar / lexical notes:
//   -- Three short Qur'anic quotations this chapter (6:78/11:54-56 excerpt
//      style) are split into ≤2-token fragments per the house convention
//      (see this volume's ch6 header note) -- qs-v4-c09-{017,018} (فَكِيدُونِي
//      جَمِيعاً) is kept as one 2-token fragment despite both words having
//      visible case-like marks, since 2 tokens is under BUILD_MIN_TOKENS
//      regardless.
//   -- مِمَّا (qs-v4-c09-018) is مِنْ fused onto the relative مَا -- tagged
//      lemma مَا, pos 'rel', features 'prep+rel', matching the treatment of
//      other prep+rel fusions already in the corpus.
//   -- نَفْع and ضَرّ (the nouns 'benefit' and 'harm') are tagged as new
//      lemmas distinct from the already-taught verbs نَفَعَ/ضَرَّ they are
//      built on -- CHAPTER-FORMAT.md lemmas are exact dictionary forms, not
//      shared roots.
//   -- The four-times-repeated لَا تَمْلِكُ / لَا تَمْلِكُونَ خَيْراً وَلَا شَرًّا /
//      نَفْعاً وَلَا ضَرًّا frame (qs-v4-c09-{012,013,014,015}) is this
//      chapter's recycled construction, built into the workshop below.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمْ، وَجَدَ، عَادٍ، مَا،
//      عَلِمَ، كَيْفَ، هُود، لَكِنَّ، قَالَ، لَمَّا، غَضِبَ، عَلَى، إِلَه، قَدْ، عَقْل، في،
//      وَبَال، مِنْ، هَذِهِ، صَنَم، حِجَارَة، لَا، أَحَد، إِنَّ، مَلَكَ، خَيْر، شَرّ، لِ،
//      أَيْضاً (=إذن wait, actually أَيْضاً itself is new -- see list)، آمَنَ، بِ،
//      خَافَ، بَرِيء، أَشْرَكَ، جَمِيع، اللَّه، رَبّ، كُلّ، شَيْء، يَد، إِذْن are all
//      already taught and NOT re-listed (أَيْضاً is new -- see below).
//
// 11 new words this chapter: عَجَزَ، أَصَابَ، مَرَض، أَيْضاً، كَادَ، تَوَكَّلَ، سَقَطَ،
// إِذْن، تَحْتَ، نَفْع، ضَرّ.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'إِيمَانُ هُودٍ', en: 'The Faith of Hūd' },
  newWords: [
    'عَجَزَ', 'أَصَابَ', 'مَرَض', 'أَيْضاً', 'كَادَ', 'تَوَكَّلَ', 'سَقَطَ', 'إِذْن', 'تَحْتَ', 'نَفْع', 'ضَرّ',
  ],
  lemmas: {
    'عَجَزَ': { gloss: 'to be unable, incapable' },
    'أَصَابَ': { gloss: 'to afflict, strike' },
    'مَرَض': { gloss: 'sickness, illness' },
    'أَيْضاً': { gloss: 'also, too' },
    'كَادَ': { gloss: 'to plot, scheme' },
    'تَوَكَّلَ': { gloss: 'to put one’s trust (in)' },
    'سَقَطَ': { gloss: 'to fall' },
    'إِذْن': { gloss: 'permission' },
    'تَحْتَ': { gloss: 'under' },
    'نَفْع': { gloss: 'benefit' },
    'ضَرّ': { gloss: 'harm' },
  },
  paragraphs: [
    {
      lines: true,
      en: "ʿĀd could not find an answer, and they did not know how to answer Hūd! But when they grew unable, they said: 'Our gods have become angry with you, so a sickness has afflicted your mind!' A curse from the gods has befallen you. Hūd said: 'Indeed these idols are stones that benefit no one and do not harm! And indeed these idols are stones that do not speak, do not hear, and do not see! Indeed these idols possess no good and no harm. They possess no benefit or harm for anyone. And you too do not possess good or harm. You possess no benefit or harm for me. Indeed I do not believe in your gods, nor do I fear them. Indeed I am innocent of what you associate with Allah. Nor do I fear you either -- so plot against me, all of you together. Indeed I have put my trust in Allah, my Lord and your Lord. Everything is under His hand, and no leaf falls except by His permission.'",
      sentences: [
        {
          id: 'qs-v4-c09-001',
          ar: 'وَلَمْ تَجِدْ عَادٌ جَوَاباً!',
          en: 'ʿĀd could not find an answer,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَجِدْ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3fs', gloss: 'to find; did not find' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'جَوَاباً', lemma: 'جَوَاب', pos: 'noun', features: 'indef.acc', gloss: 'an answer' },
          ],
        },
        {
          id: 'qs-v4-c09-002',
          ar: 'وَمَا عَلِمُوا كَيْفَ يُجِيبُونَ هُوداً!',
          en: 'and they did not know how to answer Hūd!',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'عَلِمُوا', lemma: 'عَلِمَ', pos: 'verb', features: 'perf.3mp', gloss: 'to know; knew' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يُجِيبُونَ', lemma: 'أَجَابَ', pos: 'verb', features: 'impf.3mp', gloss: 'to answer; to answer' },
            { surface: 'هُوداً', lemma: 'هُود', pos: 'proper', features: 'acc', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c09-003',
          ar: 'وَلَكِنَّهُمْ قَالُوا لَمَّا عَجَزُوا:',
          en: 'But when they grew unable, they said:',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'عَجَزُوا', lemma: 'عَجَزَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be unable; grew unable' },
          ],
        },
        {
          id: 'qs-v4-c09-004',
          ar: 'قَدْ غَضِبَتْ عَلَيْكَ آلِهَتُنَا',
          en: "'Our gods have become angry with you,",
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'غَضِبَتْ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3fs', gloss: 'to become angry; have become angry' },
            { surface: 'عَلَيْكَ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2ms', gloss: 'with you' },
            { surface: 'آلِهَتُنَا', lemma: 'إِلَه', pos: 'noun', features: 'pl.nom+1p', gloss: 'our gods' },
          ],
        },
        {
          id: 'qs-v4-c09-005',
          ar: 'فَأَصَابَكَ مَرَضٌ فِي عَقْلِكَ!',
          en: "so a sickness has afflicted your mind!'",
          tokens: [
            { surface: 'فَأَصَابَكَ', lemma: 'أَصَابَ', pos: 'verb', features: 'conj+perf.3ms+2ms', gloss: 'to afflict; so has afflicted you' },
            { surface: 'مَرَضٌ', lemma: 'مَرَض', pos: 'noun', features: 'indef.nom', gloss: 'a sickness' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عَقْلِكَ', lemma: 'عَقْل', pos: 'noun', features: 'gen+2ms', gloss: 'your mind' },
          ],
        },
        {
          id: 'qs-v4-c09-006',
          ar: 'وَقَدْ وَقَعَ عَلَيْكَ وَبَالٌ مِنَ الآلِهَةِ.',
          en: 'A curse from the gods has befallen you.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'وَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to fall, befall; has befallen' },
            { surface: 'عَلَيْكَ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2ms', gloss: 'upon you' },
            { surface: 'وَبَالٌ', lemma: 'وَبَال', pos: 'noun', features: 'indef.nom', gloss: 'a curse' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الآلِهَةِ', lemma: 'إِلَه', pos: 'noun', features: 'pl.def.gen', gloss: 'the gods' },
          ],
        },
        {
          id: 'qs-v4-c09-007',
          ar: 'قَالَ هُودٌ:',
          en: 'Hūd said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c09-008',
          ar: 'إِنَّ هَذِهِ الأَصْنَامَ حِجَارَةٌ لَا تَنْفَعُ أَحَداً',
          en: "'Indeed these idols are stones that benefit no one",
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'idols' },
            { surface: 'حِجَارَةٌ', lemma: 'حِجَارَة', pos: 'noun', features: 'indef.nom', gloss: 'stones' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to benefit; benefit' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v4-c09-009',
          ar: 'وَلَا تَضُرُّ!',
          en: 'and do not harm!',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَضُرُّ', lemma: 'ضَرَّ', pos: 'verb', features: 'impf.3fs', gloss: 'to harm; harm' },
          ],
        },
        {
          id: 'qs-v4-c09-010',
          ar: 'وَإِنَّ هَذِهِ الأَصْنَامَ حِجَارَةٌ لَا تَتَكَلَّمُ',
          en: 'And indeed these idols are stones that do not speak,',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'idols' },
            { surface: 'حِجَارَةٌ', lemma: 'حِجَارَة', pos: 'noun', features: 'indef.nom', gloss: 'stones' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَتَكَلَّمُ', lemma: 'تَكَلَّمَ', pos: 'verb', features: 'impf.3fs', gloss: 'to speak; speak' },
          ],
        },
        {
          id: 'qs-v4-c09-011',
          ar: 'وَلَا تَسْمَعُ وَلَا تَنْظُرُ!',
          en: 'do not hear, and do not see!',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَسْمَعُ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to hear; hear' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَنْظُرُ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3fs', gloss: 'to look, see; see' },
          ],
        },
        {
          id: 'qs-v4-c09-012',
          ar: 'إِنَّ هَذِهِ الأَصْنَامَ لَا تَمْلِكُ خَيْراً وَلَا شَرًّا.',
          en: 'Indeed these idols possess no good and no harm.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'idols' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3fs', gloss: 'to possess; possess' },
            { surface: 'خَيْراً', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'good' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'شَرًّا', lemma: 'شَرّ', pos: 'noun', features: 'indef.acc', gloss: 'harm' },
          ],
        },
        {
          id: 'qs-v4-c09-013',
          ar: 'وَلَا تَمْلِكُ لِأَحَدٍ نَفْعاً وَلَا ضَرًّا.',
          en: 'They possess no benefit or harm for anyone.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَمْلِكُ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.3fs', gloss: 'to possess; possess' },
            { surface: 'لِأَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'prep+indef.gen', gloss: 'for anyone' },
            { surface: 'نَفْعاً', lemma: 'نَفْع', pos: 'noun', features: 'indef.acc', gloss: 'benefit' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'ضَرًّا', lemma: 'ضَرّ', pos: 'noun', features: 'indef.acc', gloss: 'harm' },
          ],
        },
        {
          id: 'qs-v4-c09-014',
          ar: 'وَإِنَّكُمْ أَيْضاً لَا تَمْلِكُونَ خَيْراً وَلَا شَرًّا.',
          en: 'And you too do not possess good or harm.',
          tokens: [
            { surface: 'وَإِنَّكُمْ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+2mp', gloss: 'and indeed you' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'indef.acc', gloss: 'also' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَمْلِكُونَ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.2mp', gloss: 'to possess; possess' },
            { surface: 'خَيْراً', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'good' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'شَرًّا', lemma: 'شَرّ', pos: 'noun', features: 'indef.acc', gloss: 'harm' },
          ],
        },
        {
          id: 'qs-v4-c09-015',
          ar: 'وَلَا تَمْلِكُونَ لِي نَفْعاً وَلَا ضَرًّا.',
          en: 'You possess no benefit or harm for me.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَمْلِكُونَ', lemma: 'مَلَكَ', pos: 'verb', features: 'impf.2mp', gloss: 'to possess; possess' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'for me' },
            { surface: 'نَفْعاً', lemma: 'نَفْع', pos: 'noun', features: 'indef.acc', gloss: 'benefit' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'ضَرًّا', lemma: 'ضَرّ', pos: 'noun', features: 'indef.acc', gloss: 'harm' },
          ],
        },
        {
          id: 'qs-v4-c09-016',
          ar: 'إِنِّي لَا أُومِنُ بِآلِهَتِكُمْ وَلَا أَخَافُهُمْ.',
          en: 'Indeed I do not believe in your gods, nor do I fear them.',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أُومِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.1s', gloss: 'to believe; believe' },
            { surface: 'بِآلِهَتِكُمْ', lemma: 'إِلَه', pos: 'noun', features: 'prep+pl.gen+2mp', gloss: 'in your gods' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَخَافُهُمْ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s+3mp', gloss: 'to fear; do I fear them' },
          ],
        },
        {
          id: 'qs-v4-c09-017',
          ar: '﴿إِنِّي بَرِيءٌ',
          en: "'Indeed I am innocent",
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'بَرِيءٌ', lemma: 'بَرِيء', pos: 'adj', features: 'indef.nom', gloss: 'innocent' },
          ],
        },
        {
          id: 'qs-v4-c09-018',
          ar: 'مِمَّا تُشْرِكُونَ﴾.',
          en: "of what you associate.'",
          tokens: [
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'تُشْرِكُونَ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.2mp', gloss: 'to associate partners; you associate' },
          ],
        },
        {
          id: 'qs-v4-c09-019',
          ar: 'وَلَا أَخَافُكُمْ أَيْضاً',
          en: 'Nor do I fear you either --',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَخَافُكُمْ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s+2mp', gloss: 'to fear; do I fear you' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'indef.acc', gloss: 'also' },
          ],
        },
        {
          id: 'qs-v4-c09-020',
          ar: '﴿فَكِيدُونِي جَمِيعاً﴾.',
          en: "'so plot against me, all of you together.'",
          tokens: [
            { surface: 'فَكِيدُونِي', lemma: 'كَادَ', pos: 'verb', features: 'conj+imp.2mp+1s', gloss: 'to plot; so plot against me' },
            { surface: 'جَمِيعاً', lemma: 'جَمِيع', pos: 'adv', features: 'indef.acc', gloss: 'all together' },
          ],
        },
        {
          id: 'qs-v4-c09-021',
          ar: '﴿إِنِّي تَوَكَّلْتُ',
          en: "'Indeed I have put my trust",
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'تَوَكَّلْتُ', lemma: 'تَوَكَّلَ', pos: 'verb', features: 'perf.1s', gloss: 'to put trust; I have put my trust' },
          ],
        },
        {
          id: 'qs-v4-c09-022',
          ar: 'عَلَى اللَّهِ',
          en: 'in Allah,',
          tokens: [
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in, upon' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v4-c09-023',
          ar: 'رَبِّي وَرَبِّكُمْ﴾.',
          en: "my Lord and your Lord.'",
          tokens: [
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'وَرَبِّكُمْ', lemma: 'رَبّ', pos: 'noun', features: 'conj+gen+2mp', gloss: 'and your Lord' },
          ],
        },
        {
          id: 'qs-v4-c09-024',
          ar: 'كُلُّ شَيْءٍ تَحْتَ يَدِهِ،',
          en: 'Everything is under His hand,',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'تَحْتَ', lemma: 'تَحْتَ', pos: 'adv', features: 'adv', gloss: 'under' },
            { surface: 'يَدِهِ', lemma: 'يَد', pos: 'noun', features: 'gen+3ms', gloss: 'His hand' },
          ],
        },
        {
          id: 'qs-v4-c09-025',
          ar: 'وَلَا تَسْقُطُ وَرَقَةٌ إِلَّا بِإِذْنِهِ.',
          en: 'and no leaf falls except by His permission.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَسْقُطُ', lemma: 'سَقَطَ', pos: 'verb', features: 'impf.3fs', gloss: 'to fall; falls' },
            { surface: 'وَرَقَةٌ', lemma: 'وَرَقَة', pos: 'noun', features: 'indef.nom', gloss: 'a leaf' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'بِإِذْنِهِ', lemma: 'إِذْن', pos: 'noun', features: 'prep+gen+3ms', gloss: 'by His permission' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ تَجِدْ عَادٌ جَوَاباً لِهُودٍ؟',
          options: ['لأَنَّهُمْ عَجَزُوا عَنِ الرَّدِّ عَلَيْهِ', 'لأَنَّهُمْ آمَنُوا بِهِ فَوْراً', 'لأَنَّ هُوداً سَكَتَ وَلَمْ يَتَكَلَّمْ'],
          answer: 0,
          qEn: 'Why could ʿĀd not find an answer for Hūd?',
          optionsEn: ['Because they were unable to respond to him', 'Because they believed him at once', 'Because Hūd fell silent and did not speak'],
        },
        {
          q: 'مَاذَا قَالَتْ عَادٌ عَنْ سَبَبِ كَلَامِ هُودٍ؟',
          options: ['قَالُوا غَضِبَتْ عَلَيْهِ آلِهَتُهُمْ فَأَصَابَهُ مَرَضٌ في عَقْلِهِ', 'قَالُوا إِنَّهُ نَبِيٌّ صَادِقٌ', 'قَالُوا إِنَّهُ سَاحِرٌ مَاهِرٌ'],
          answer: 0,
          qEn: 'What did ʿĀd say about the cause of Hūd\'s speech?',
          optionsEn: ['They said their gods were angry with him and had afflicted his mind', 'They said he was a truthful prophet', 'They said he was a skilled sorcerer'],
        },
        {
          q: 'عَلَى مَنْ تَوَكَّلَ هُودٌ؟',
          options: ['عَلَى اللَّهِ رَبِّهِ وَرَبِّ قَوْمِهِ', 'عَلَى قُوَّتِهِ الشَّخْصِيَّةِ', 'عَلَى أَصْدِقَائِهِ الْمُؤْمِنِينَ'],
          answer: 0,
          qEn: 'Whom did Hūd put his trust in?',
          optionsEn: ['In Allah, his Lord and the Lord of his people', 'In his own personal strength', 'In his believing friends'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'إِنَّ هَذِهِ الأَصْنَامَ لَا',
        post: 'خَيْراً وَلَا شَرًّا.',
        en: 'Indeed these idols possess no good and no harm.',
        options: ['تَمْلِكُ', 'يَمْلِكُ', 'تَمْلِكُونَ', 'أَمْلِكُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the non-human plural هَذِهِ الأَصْنَامَ.',
          '3rd masculine singular -- wrong gender.',
          '2nd masculine plural -- wrong; the idols are being described, not addressed.',
          '1st singular -- wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِنَّكُمْ أَيْضاً لَا',
        post: 'خَيْراً وَلَا شَرًّا.',
        en: 'And you too do not possess good or harm.',
        options: ['تَمْلِكُونَ', 'تَمْلِكُ', 'يَمْلِكُونَ', 'نَمْلِكُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- agrees with the addressed كُمْ in وَإِنَّكُمْ.',
          '3rd feminine singular -- wrong; this line addresses "you", not "it".',
          '3rd masculine plural -- wrong person; the idols are being addressed as "you" here, not described as "they".',
          '1st plural -- wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا تَسْقُطُ',
        post: 'إِلَّا بِإِذْنِهِ.',
        en: 'and no leaf falls except by His permission.',
        options: ['وَرَقَةٌ', 'وَرَقَةً', 'وَرَقَةٍ', 'أَوْرَاقٌ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- the subject of the intransitive تَسْقُطُ.',
          'Accusative -- wrong case; the subject of a verbal sentence takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; the sweeping claim is stated about a single leaf.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تَمْلِكُ نَفْعاً وَلَا ضَرًّا',
        pre: '',
        post: 'نَفْعاً وَلَا ضَرًّا',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['تَمْلِكُونَ', 'تَمْلِكُ', 'يَمْلِكُونَ', 'نَمْلِكُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd feminine singular -- she/it, the form already given.',
          '3rd masculine plural -- they (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'تَمْلِكُ نَفْعاً وَلَا ضَرًّا',
        pre: '',
        post: 'نَفْعاً وَلَا ضَرًّا',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَمْلِكُونَ', 'تَمْلِكُ', 'نَمْلِكُ', 'أَمْلِكُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd feminine singular -- she/it, the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'تَمْلِكُ نَفْعاً وَلَا ضَرًّا',
        pre: '',
        post: 'نَفْعاً وَلَا ضَرًّا',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَمْلِكُ', 'تَمْلِكُ', 'يَمْلِكُونَ', 'أَمْلِكُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd feminine singular -- she/it, the form already given.',
          '3rd masculine plural -- they (m.).',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

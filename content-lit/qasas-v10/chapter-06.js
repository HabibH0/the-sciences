// قَصَصُ النَّبِيِّينَ, volume 10 «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»,
// chapter 6 -- يُونُسُ فِي بَطْنِ الْحُوتِ. Printed page 240 (bottom box)
// through the top of page 241, ending before ch7's heading وَاسْتَجَابَ
// اللَّهُ دُعَاءَهُ further down page 241. Transcribed by hand from the
// scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// One continuous narrative: Yūnus boards a ship that runs into trouble;
// the passengers draw lots to lighten it and the lot falls on Yūnus
// three times running -- quoted directly from the Qur'an, Sūrat
// aṣ-Ṣāffāt 37:141 -- until he finally throws himself into the sea,
// where a whale Allah had already sent swallows him whole, commanded not
// to harm him at all.
//
// Grammar / lexical notes:
//   -- The prose is a long chain of short وَ/فَ/ثُمَّ-coordinated clauses;
//      split here at natural clause boundaries (house convention,
//      matching qasas-v3 ch7/ch9/ch10/ch12/ch13); no rewording, same
//      printed words and order throughout.
//   -- ﷺ after يُونُسُ in the scan (printed honorific glyph, not a word) is
//      not tokenized -- matching how the book's own basmala/rosette
//      graphics are never given tokens.
//   -- تَأْكُلَ / تَهْشِمْ (qs-v10-c06-019/020) are both tagged impf.2ms:
//      Allah's revelation to the whale (أَوْحَى إِلَى) is direct address, so
//      the prohibition is 2nd person ("you, whale, must not..."), even
//      though the two verbs show different jussive/subjunctive endings in
//      print (mood is not tracked in this feature grammar, so both
//      degrade to the same impf.2ms).
//   -- الْمُدْحَضِينَ (qs-v10-c06-011, new) is the Qur'an's own word for
//      "those who lose the casting of lots" -- tagged as its own lemma
//      مُدْحَض, a passive participle with no plain-prose synonym taught
//      elsewhere in the corpus.
//   -- The Qur'an fragment (37:141) is short enough to need no splitting,
//      tokenized like ordinary prose and wrapped in ﴿﴾, mushaf text.
//   -- Footnote (١) at the bottom of page 241 -- "العبارة لابن كثير في
//      تفسيره" -- is the same Ibn Kathīr source citation seen at ch1 and
//      ch4-6's shared source page; not a vocabulary gloss, recorded here
//      for provenance only.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): يُونُس (this volume,
//      ch4)، سَلَام، إِنَّ، ذَهَبَ، رَكِبَ، مَعَ، قَوْم، سَفِينَة، خَافَ، أَنْ، غَرِقَ،
//      رَجُل، أَلْقَى، بَيْنَ، وَقَعَ، أَبَى، أَيْضاً (this volume, ch1)، قَالَ،
//      تَعَالَى (this volume, ch3)، كَانَ، مِنْ، قَامَ، أَرْسَلَ، سُبْحَانَ، شَقَّ،
//      بَحْر، جَاءَ، أَوْحَى، لَا، أَكَلَ، لِ، أَمَّا، حَتَّى، حِين (this volume,
//      ch4)، نَفْس
//      are all already taught and are NOT re-listed in newWords here.
//
// 15 new words (جَنَحَ، اِقْتَرَعَ، تَخَفَّفَ، قُرْعَة، أَعَادَ، سَاهَمَ، مُدْحَض، أَيْ،
// تَجَرَّدَ، ثِيَاب، حُوت، اِلْتَقَمَ، لَحْم، هَشَمَ، عَظْم).
//
// One footnote on page 241 (source citation, see note above) -- no
// vocabulary book_note on either page.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'يُونُسُ فِي بَطْنِ الْحُوتِ', en: 'Yūnus in the Belly of the Whale' },
  newWords: [
    'جَنَحَ', 'اِقْتَرَعَ', 'تَخَفَّفَ', 'قُرْعَة', 'أَعَادَ', 'سَاهَمَ', 'مُدْحَض', 'أَيْ',
    'تَجَرَّدَ', 'ثِيَاب', 'حُوت', 'اِلْتَقَمَ', 'لَحْم', 'هَشَمَ', 'عَظْم',
  ],
  lemmas: {
    'جَنَحَ': { gloss: 'to veer off course, run aground' },
    'اِقْتَرَعَ': { gloss: 'to draw lots' },
    'تَخَفَّفَ': { gloss: 'to lighten one’s load' },
    'قُرْعَة': { gloss: 'lot, drawing of lots' },
    'أَعَادَ': { gloss: 'to repeat, do again' },
    'سَاهَمَ': { gloss: 'to draw lots, cast lots' },
    'مُدْحَض': { gloss: 'one who loses the casting of lots' },
    'أَيْ': { gloss: 'that is, namely' },
    'تَجَرَّدَ': { gloss: 'to strip off, divest oneself' },
    'ثِيَاب': { gloss: 'clothes' },
    'حُوت': { gloss: 'whale, large fish' },
    'اِلْتَقَمَ': { gloss: 'to swallow, gulp down' },
    'لَحْم': { gloss: 'flesh, meat' },
    'هَشَمَ': { gloss: 'to break, crush' },
    'عَظْم': { gloss: 'bone' },
  },
  paragraphs: [
    {
      en: 'As for Yūnus, peace be upon him, he went and boarded a ship with some people, and it veered off course with them, and they feared they would drown, so they drew lots over a man to throw from among them, to lighten their load of him. The lot fell upon Yūnus, but they refused to throw him; then they repeated it, and it fell on him again, but they refused; then they repeated it again, and it fell on him again. Allah, exalted is He, says: "So he drew lots, and he was among the losers." That is, the lot fell upon him, so Yūnus stood up and stripped off his clothes, then threw himself into the sea. Allah, glory be to Him, had already sent a whale that cleaves the seas, until it came and swallowed Yūnus when he threw himself from the ship. Then Allah revealed to that whale not to eat his flesh, and not to break his bone.',
      sentences: [
        {
          id: 'qs-v10-c06-001',
          ar: 'وَأَمَّا يُونُسُ عَلَيْهِ السَّلَامُ فَإِنَّهُ ذَهَبَ',
          en: 'As for Yūnus, peace be upon him, he went',
          tokens: [
            { surface: 'وَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'as for' },
            { surface: 'يُونُسُ', lemma: 'يُونُس', pos: 'proper', features: 'nom', gloss: 'Yūnus' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'السَّلَامُ', lemma: 'سَلَام', pos: 'noun', features: 'def.nom', gloss: 'peace' },
            { surface: 'فَإِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'indeed he' },
            { surface: 'ذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to go; went' },
          ],
        },
        {
          id: 'qs-v10-c06-002',
          ar: 'فَرَكِبَ مَعَ قَوْمٍ فِي سَفِينَةٍ،',
          en: 'and boarded a ship with some people,',
          tokens: [
            { surface: 'فَرَكِبَ', lemma: 'رَكِبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to ride, board; and boarded' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'قَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'indef.gen', gloss: 'some people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'سَفِينَةٍ', lemma: 'سَفِينَة', pos: 'noun', features: 'indef.gen', gloss: 'a ship' },
          ],
        },
        {
          id: 'qs-v10-c06-003',
          ar: 'فَجَنَحَتْ بِهِمْ،',
          en: 'and it veered off course with them,',
          tokens: [
            { surface: 'فَجَنَحَتْ', lemma: 'جَنَحَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to veer off course, run aground; and it veered' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
          ],
        },
        {
          id: 'qs-v10-c06-004',
          ar: 'وَخَافُوا أَنْ يَغْرَقُوا،',
          en: 'and they feared they would drown,',
          tokens: [
            { surface: 'وَخَافُوا', lemma: 'خَافَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to fear; and they feared' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَغْرَقُوا', lemma: 'غَرِقَ', pos: 'verb', features: 'impf.3mp', gloss: 'to drown; they would drown' },
          ],
        },
        {
          id: 'qs-v10-c06-005',
          ar: 'فَاقْتَرَعُوا عَلَى رَجُلٍ يُلْقُونَهُ مِنْ بَيْنِهِمْ يَتَخَفَّفُونَ مِنْهُ،',
          en: 'so they drew lots over a man to throw from among them, to lighten their load of him,',
          tokens: [
            { surface: 'فَاقْتَرَعُوا', lemma: 'اِقْتَرَعَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق ر ع', gloss: 'to draw lots; so they drew lots' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'رَجُلٍ', lemma: 'رَجُل', pos: 'noun', features: 'indef.gen', gloss: 'a man' },
            { surface: 'يُلْقُونَهُ', lemma: 'أَلْقَى', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to throw; to throw him' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَيْنِهِمْ', lemma: 'بَيْنَ', pos: 'noun', features: 'gen+3mp', gloss: 'among them' },
            { surface: 'يَتَخَفَّفُونَ', lemma: 'تَخَفَّفَ', pos: 'verb', features: 'impf.3mp', root: 'خ ف ف', gloss: 'to lighten one’s load; to lighten their load' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'of him' },
          ],
        },
        {
          id: 'qs-v10-c06-006',
          ar: 'فَوَقَعَتِ الْقُرْعَةُ عَلَى يُونُسَ،',
          en: 'The lot fell upon Yūnus,',
          tokens: [
            { surface: 'فَوَقَعَتِ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to fall; and fell' },
            { surface: 'الْقُرْعَةُ', lemma: 'قُرْعَة', pos: 'noun', features: 'def.nom', gloss: 'the lot' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'يُونُسَ', lemma: 'يُونُس', pos: 'proper', features: 'acc', gloss: 'Yūnus' },
          ],
        },
        {
          id: 'qs-v10-c06-007',
          ar: 'فَأَبَوْا أَنْ يُلْقُوهُ،',
          en: 'but they refused to throw him;',
          tokens: [
            { surface: 'فَأَبَوْا', lemma: 'أَبَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to refuse; but they refused' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُلْقُوهُ', lemma: 'أَلْقَى', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to throw; throw him' },
          ],
        },
        {
          id: 'qs-v10-c06-008',
          ar: 'ثُمَّ أَعَادُوهَا فَوَقَعَتْ عَلَيْهِ أَيْضاً فَأَبَوْا،',
          en: 'then they repeated it, and it fell on him again, but they refused,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'أَعَادُوهَا', lemma: 'أَعَادَ', pos: 'verb', features: 'perf.3mp+3fs', gloss: 'to repeat; they repeated it' },
            { surface: 'فَوَقَعَتْ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to fall; and it fell' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'on him' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'indef.acc', gloss: 'again' },
            { surface: 'فَأَبَوْا', lemma: 'أَبَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to refuse; but they refused' },
          ],
        },
        {
          id: 'qs-v10-c06-009',
          ar: 'ثُمَّ أَعَادُوهَا فَوَقَعَتْ عَلَيْهِ أَيْضاً،',
          en: 'then they repeated it again, and it fell on him again,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'أَعَادُوهَا', lemma: 'أَعَادَ', pos: 'verb', features: 'perf.3mp+3fs', gloss: 'to repeat; they repeated it' },
            { surface: 'فَوَقَعَتْ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to fall; and it fell' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'on him' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'indef.acc', gloss: 'again' },
          ],
        },
        {
          id: 'qs-v10-c06-010',
          ar: 'قَالَ اللَّهُ تَعَالَى:',
          en: 'Allah, exalted is He, says:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v10-c06-011',
          ar: '﴿فَسَاهَمَ فَكَانَ مِنَ الْمُدْحَضِينَ﴾.',
          en: '"So he drew lots, and he was among the losers."',
          tokens: [
            { surface: 'فَسَاهَمَ', lemma: 'سَاهَمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'س ه م', gloss: 'to draw lots, cast lots; so he drew lots' },
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and he was' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْمُدْحَضِينَ', lemma: 'مُدْحَض', pos: 'noun', features: 'def.gen.pl', gloss: 'the losers (of the draw)' },
          ],
        },
        {
          id: 'qs-v10-c06-012',
          ar: 'أَيْ فَوَقَعَتْ عَلَيْهِ الْقُرْعَةُ،',
          en: 'That is, the lot fell upon him,',
          tokens: [
            { surface: 'أَيْ', lemma: 'أَيْ', pos: 'part', features: 'part', gloss: 'that is' },
            { surface: 'فَوَقَعَتْ', lemma: 'وَقَعَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to fall; fell' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'الْقُرْعَةُ', lemma: 'قُرْعَة', pos: 'noun', features: 'def.nom', gloss: 'the lot' },
          ],
        },
        {
          id: 'qs-v10-c06-013',
          ar: 'فَقَامَ يُونُسُ وَتَجَرَّدَ مِنْ ثِيَابِهِ،',
          en: 'so Yūnus stood up and stripped off his clothes,',
          tokens: [
            { surface: 'فَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to stand; so stood up' },
            { surface: 'يُونُسُ', lemma: 'يُونُس', pos: 'proper', features: 'nom', gloss: 'Yūnus' },
            { surface: 'وَتَجَرَّدَ', lemma: 'تَجَرَّدَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ر د', gloss: 'to strip off, divest; and stripped off' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ثِيَابِهِ', lemma: 'ثِيَاب', pos: 'noun', features: 'gen+3ms', gloss: 'his clothes' },
          ],
        },
        {
          id: 'qs-v10-c06-014',
          ar: 'ثُمَّ أَلْقَى نَفْسَهُ فِي الْبَحْرِ،',
          en: 'then threw himself into the sea,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'أَلْقَى', lemma: 'أَلْقَى', pos: 'verb', features: 'perf.3ms', gloss: 'to throw; threw' },
            { surface: 'نَفْسَهُ', lemma: 'نَفْس', pos: 'noun', features: 'acc+3ms', gloss: 'himself' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'into' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v10-c06-015',
          ar: 'وَقَدْ أَرْسَلَ اللَّهُ سُبْحَانَهُ حُوتاً يَشُقُّ الْبِحَارَ',
          en: 'Allah, glory be to Him, had already sent a whale that cleaves the seas,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'أَرْسَلَ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to send; had sent' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'سُبْحَانَهُ', lemma: 'سُبْحَانَ', pos: 'noun', features: 'acc+3ms', gloss: 'glory be to Him' },
            { surface: 'حُوتاً', lemma: 'حُوت', pos: 'noun', features: 'indef.acc', gloss: 'a whale' },
            { surface: 'يَشُقُّ', lemma: 'شَقَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to cleave, cut through; cleaves' },
            { surface: 'الْبِحَارَ', lemma: 'بَحْر', pos: 'noun', features: 'def.acc.pl', gloss: 'the seas' },
          ],
        },
        {
          id: 'qs-v10-c06-016',
          ar: 'حَتَّى جَاءَ فَالْتَقَمَ يُونُسَ',
          en: 'until it came and swallowed Yūnus',
          tokens: [
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come; it came' },
            { surface: 'فَالْتَقَمَ', lemma: 'اِلْتَقَمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ل ق م', gloss: 'to swallow, gulp down; and swallowed' },
            { surface: 'يُونُسَ', lemma: 'يُونُس', pos: 'proper', features: 'acc', gloss: 'Yūnus' },
          ],
        },
        {
          id: 'qs-v10-c06-017',
          ar: 'حِينَ أَلْقَى نَفْسَهُ مِنَ السَّفِينَةِ،',
          en: 'when he threw himself from the ship,',
          tokens: [
            { surface: 'حِينَ', lemma: 'حِين', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'أَلْقَى', lemma: 'أَلْقَى', pos: 'verb', features: 'perf.3ms', gloss: 'to throw; threw' },
            { surface: 'نَفْسَهُ', lemma: 'نَفْس', pos: 'noun', features: 'acc+3ms', gloss: 'himself' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّفِينَةِ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.gen', gloss: 'the ship' },
          ],
        },
        {
          id: 'qs-v10-c06-018',
          ar: 'فَأَوْحَى اللَّهُ إِلَى ذَلِكَ الْحُوتِ',
          en: 'Then Allah revealed to that whale',
          tokens: [
            { surface: 'فَأَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to reveal; then He revealed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الْحُوتِ', lemma: 'حُوت', pos: 'noun', features: 'def.gen', gloss: 'the whale' },
          ],
        },
        {
          id: 'qs-v10-c06-019',
          ar: 'أَنْ لَا تَأْكُلَ لَهُ لَحْماً،',
          en: 'not to eat his flesh,',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَأْكُلَ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.2ms', gloss: 'to eat; you (whale) should not eat' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'his' },
            { surface: 'لَحْماً', lemma: 'لَحْم', pos: 'noun', features: 'indef.acc', gloss: 'flesh' },
          ],
        },
        {
          id: 'qs-v10-c06-020',
          ar: 'وَلَا تَهْشِمْ لَهُ عَظْماً.',
          en: 'and not to break his bone.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَهْشِمْ', lemma: 'هَشَمَ', pos: 'verb', features: 'impf.2ms', root: 'ه ش م', gloss: 'to break, crush; you (whale) should not break' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'his' },
            { surface: 'عَظْماً', lemma: 'عَظْم', pos: 'noun', features: 'indef.acc', gloss: 'a bone' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا اقْتَرَعَ الرُّكَّابُ عَلَى إِلْقَاءِ رَجُلٍ مِنَ السَّفِينَةِ؟',
          options: ['لِأَنَّهُمْ خَافُوا أَنْ يَغْرَقُوا فَأَرَادُوا أَنْ يَتَخَفَّفُوا', 'لِأَنَّ الرَّجُلَ كَانَ لِصّاً', 'لِأَنَّهُمْ أَرَادُوا اللَّعِبَ فَقَط'],
          answer: 0,
          qEn: 'Why did the passengers draw lots to throw a man from the ship?',
          optionsEn: ['Because they feared drowning and wanted to lighten the ship', 'Because the man was a thief', 'Because they simply wanted to play a game'],
        },
        {
          q: 'مَاذَا فَعَلَ يُونُسُ حِينَ وَقَعَتِ الْقُرْعَةُ عَلَيْهِ؟',
          options: ['قَامَ وَتَجَرَّدَ مِنْ ثِيَابِهِ ثُمَّ أَلْقَى نَفْسَهُ فِي الْبَحْرِ', 'رَفَضَ وَاخْتَبَأَ فِي السَّفِينَةِ', 'طَلَبَ مِنْهُمْ إِعَادَةَ الْقُرْعَةِ مَرَّةً أُخْرَى'],
          answer: 0,
          qEn: 'What did Yūnus do when the lot fell on him?',
          optionsEn: ['He stood, stripped off his clothes, then threw himself into the sea', 'He refused and hid in the ship', 'He asked them to redraw the lots again'],
        },
        {
          q: 'مَاذَا أَوْحَى اللَّهُ إِلَى الْحُوتِ الَّذِي الْتَقَمَ يُونُسَ؟',
          options: ['أَنْ لَا تَأْكُلَ لَهُ لَحْماً وَلَا تَهْشِمَ لَهُ عَظْماً', 'أَنِ ابْتَلِعْهُ وَلَا تُخْرِجْهُ أَبَداً', 'أَنِ اذْهَبْ بِهِ إِلَى قَعْرِ الْبَحْرِ'],
          answer: 0,
          qEn: 'What did Allah reveal to the whale that swallowed Yūnus?',
          optionsEn: ['Not to eat his flesh and not to break his bone', 'To swallow him and never release him', 'To take him to the depths of the sea'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'ثُمَّ',
        post: 'فَوَقَعَتْ عَلَيْهِ أَيْضاً.',
        en: 'Then they repeated it, and it fell on him again.',
        options: ['أَعَادُوهَا', 'عَادَ', 'يُعِيدُونَهَا', 'مُعِيد'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect + 3fs object -- "they repeated it," matching the printed أَعَادُوهَا.',
          'Form I, no object -- wrong verb form, missing the pronoun object.',
          'Imperfect -- wrong tense; the narration is in the perfect.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَأَوْحَى اللَّهُ إِلَى ذَلِكَ الْحُوتِ أَنْ لَا',
        post: 'لَهُ لَحْماً.',
        en: 'Allah revealed to that whale not to eat his flesh.',
        options: ['تَأْكُلَ', 'أَكَلَ', 'يَأْكُلُ', 'آكِل'],
        answer: 0,
        rationales: [
          '2nd person imperfect -- direct address to the whale, matching the printed تَأْكُلَ.',
          'Perfect -- wrong tense; the revelation is a command about future action.',
          '3rd masculine singular -- wrong person; Allah is addressing the whale directly.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَامَ يُونُسُ وَ',
        post: 'مِنْ ثِيَابِهِ.',
        en: 'So Yūnus stood up and stripped off his clothes.',
        options: ['تَجَرَّدَ', 'جَرَّدَ', 'يَتَجَرَّدُ', 'مُتَجَرِّد'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches the printed وَتَجَرَّدَ.',
          'Form II ("to strip someone else") -- wrong voice for this reflexive sense.',
          'Imperfect -- wrong tense; the narration is in the perfect.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ أَنْ يَغْرَقَ',
        pre: '',
        post: 'أَنْ يَغْرَقَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَخَافُونَ', 'يَخَافُ', 'تَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ أَنْ يَغْرَقَ',
        pre: '',
        post: 'أَنْ يَغْرَقَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخَافُ', 'يَخَافُ', 'تَخَافُ', 'يَخَافُونَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُ الرَّجُلُ أَنْ يَغْرَقَ',
        pre: '',
        post: 'أَنْ يَغْرَقَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخَافُ', 'يَخَافُ', 'نَخَافُ', 'يَخَافُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '3rd masculine plural -- they.',
        ],
      },
    ],
  },
};

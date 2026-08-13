// قَصَصُ النَّبِيِّينَ, volume 9, chapter 7 -- قِصَّةُ هُدْهُدٍ.
// Printed page 228, from its own heading box (right after ch6's closing
// sentence) to the middle of the page, ending right before ch8's heading
// سُلَيْمَانُ يَدْعُو مَلِكَةَ سَبَإٍ إِلَى دِينِهِ further down that page.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// The hoopoe -- Sulaymān's own scout, tasked with locating water sources
// and the army's stops -- goes missing from the review, and Sulaymān
// threatens him; he returns after a short absence with news of Sabaʾ and
// its queen: a great, wide kingdom, but a people of intelligence and
// statecraft who are nonetheless steeped in folly and ignorance --
// prostrating to the sun instead of Allah, not understanding it, and not
// guided to worshipping Allah alone.
//
// Grammar / lexical notes:
//   -- رَائِدَهُ وَعَيْنَهُ (unit 001, "his scout and his eye") are both
//      accusative predicates of كَانَ, agreeing with the established rule
//      that كَانَ's predicate takes the accusative even when, as here, both
//      terms bear a 3ms possessive suffix rather than tanwīn.
//   -- وَاسِع ("wide, vast") was used but not listed as new in qasas-v9 ch3
//      -- corrected there; it does not reappear in this chapter's own
//      newWords for that reason.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): دَلَّ، مَاء، وَجَدَ، أَنْكَرَ،
//      غَابَ، جَاءَ، خَبَر، عَقْل، رِيَاسَة، سَفَاهَة، دُونَ، هَدَى، عِبَادَة، اللَّه،
//      سُلَيْمَان، مُلْك، عَظِيم، سَجَدَ، شَمْس، أَنْتَ، ثُمَّ
//      are all already taught and are NOT re-listed in newWords here.
//
// 17 new words (هُدْهُد، رَائِد، مَوْضِع، مَنْزِل، جَيْش، تَوَعَّدَ، يَسِير، اِطَّلَعَ،
// صِدْق، سَبَأ، مَلِكَة، دَوْلَة، كِيَاسَة، جَهَالَة، فَقِهَ، اِهْتَدَى، وَحْدَ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'قِصَّةُ هُدْهُدٍ', en: 'The Story of a Hoopoe' },
  newWords: ['هُدْهُد', 'رَائِد', 'مَوْضِع', 'مَنْزِل', 'جَيْش', 'تَوَعَّدَ', 'يَسِير', 'اِطَّلَعَ', 'صِدْق', 'سَبَأ', 'مَلِكَة', 'دَوْلَة', 'كِيَاسَة', 'جَهَالَة', 'فَقِهَ', 'اِهْتَدَى', 'وَحْدَ'],
  lemmas: {
    هُدْهُد: { gloss: 'a hoopoe' },
    رَائِد: { gloss: 'a scout' },
    مَوْضِع: { gloss: 'a location, place' },
    مَنْزِل: { gloss: 'a stopping place, campsite' },
    جَيْش: { gloss: 'an army' },
    تَوَعَّدَ: { gloss: 'to threaten' },
    يَسِير: { gloss: 'brief, little' },
    اِطَّلَعَ: { gloss: 'to learn of, become informed of' },
    صِدْق: { gloss: 'truthfulness' },
    سَبَأ: { gloss: 'Sabaʾ (Sheba)' },
    مَلِكَة: { gloss: 'a queen' },
    دَوْلَة: { gloss: 'a state, realm' },
    كِيَاسَة: { gloss: 'shrewdness, statecraft' },
    جَهَالَة: { gloss: 'ignorance' },
    فَقِهَ: { gloss: 'to understand deeply' },
    اِهْتَدَى: { gloss: 'to be guided' },
    وَحْدَ: { gloss: 'alone' },
  },
  paragraphs: [
    {
      en: 'The hoopoe was his scout and his eye, guiding him to the locations of water and the army\'s stops, but he did not find him, so he was displeased at that and threatened him. He was absent a short while, then came, and said to Sulaymān: I have learned of what neither you nor your troops have learned of, and I have brought you truthful news of Sabaʾ and their queen: they have a great kingdom and a wide realm, and I found them, for all this intelligence and statecraft, dominion and leadership, to be people of folly and ignorance. They prostrate to the sun instead of Allah, and do not understand that, and are not guided to worshipping Allah alone.',
      sentences: [
        {
          id: 'qs-v9-c07-001',
          ar: 'وَكَانَ الْهُدْهُدُ رَائِدَهُ وَعَيْنَهُ',
          en: 'The hoopoe was his scout and his eye,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'الْهُدْهُدُ', lemma: 'هُدْهُد', pos: 'noun', features: 'def.nom', gloss: 'the hoopoe' },
            { surface: 'رَائِدَهُ', lemma: 'رَائِد', pos: 'noun', features: 'acc+3ms', gloss: 'his scout' },
            { surface: 'وَعَيْنَهُ', lemma: 'عَيْن', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and his eye' },
          ],
        },
        {
          id: 'qs-v9-c07-002',
          ar: 'يَدُلُّهُ عَلَى مَوَاضِعِ الْمِيَاهِ،',
          en: 'guiding him to the locations of water,',
          tokens: [
            { surface: 'يَدُلُّهُ', lemma: 'دَلَّ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to guide; guiding him' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَوَاضِعِ', lemma: 'مَوْضِع', pos: 'noun', features: 'pl.constr.gen', gloss: 'the locations of' },
            { surface: 'الْمِيَاهِ', lemma: 'مَاء', pos: 'noun', features: 'pl.def.gen', gloss: 'water' },
          ],
        },
        {
          id: 'qs-v9-c07-003',
          ar: 'وَمَنَازِلِ الْجَيْشِ،',
          en: "and the army's stops,",
          tokens: [
            { surface: 'وَمَنَازِلِ', lemma: 'مَنْزِل', pos: 'noun', features: 'conj+pl.constr.gen', gloss: 'and the stops of' },
            { surface: 'الْجَيْشِ', lemma: 'جَيْش', pos: 'noun', features: 'def.gen', gloss: 'the army' },
          ],
        },
        {
          id: 'qs-v9-c07-004',
          ar: 'فَلَمْ يَجِدْهُ،',
          en: 'but he did not find him,',
          tokens: [
            { surface: 'فَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'but did not' },
            { surface: 'يَجِدْهُ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to find; find him' },
          ],
        },
        {
          id: 'qs-v9-c07-005',
          ar: 'فَأَنْكَرَ ذَلِكَ وَتَوَعَّدَهُ،',
          en: 'so he was displeased at that and threatened him.',
          tokens: [
            { surface: 'فَأَنْكَرَ', lemma: 'أَنْكَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to disapprove of; so he was displeased at' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'وَتَوَعَّدَهُ', lemma: 'تَوَعَّدَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'و ع د', gloss: 'to threaten; and threatened him' },
          ],
        },
        {
          id: 'qs-v9-c07-006',
          ar: 'فَغَابَ زَمَاناً يَسِيراً ثُمَّ جَاءَ،',
          en: 'He was absent a short while, then came,',
          tokens: [
            { surface: 'فَغَابَ', lemma: 'غَابَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be absent; and was absent' },
            { surface: 'زَمَاناً', lemma: 'زَمَن', pos: 'noun', features: 'indef.acc', gloss: 'a while' },
            { surface: 'يَسِيراً', lemma: 'يَسِير', pos: 'adj', features: 'indef.acc', gloss: 'short' },
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come; came' },
          ],
        },
        {
          id: 'qs-v9-c07-007',
          ar: 'فَقَالَ لِسُلَيْمَانَ: اطَّلَعْتُ عَلَى مَا لَمْ تَطَّلِعْ عَلَيْهِ أَنْتَ وَلَا جُنُودُكَ',
          en: 'and said to Sulaymān: I have learned of what neither you nor your troops have learned of,',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'لِسُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'prep+gen', gloss: 'to Sulaymān' },
            { surface: 'اطَّلَعْتُ', lemma: 'اِطَّلَعَ', pos: 'verb', features: 'perf.1s', root: 'ط ل ع', gloss: 'to learn of; I have learned of' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَطَّلِعْ', lemma: 'اِطَّلَعَ', pos: 'verb', features: 'impf.2ms', gloss: 'to learn of; you learned of' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'أَنْتَ', lemma: 'أَنْتَ', pos: 'part', features: 'part', gloss: 'you' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'جُنُودُكَ', lemma: 'جُنْد', pos: 'noun', features: 'pl.nom+2ms', gloss: 'your troops' },
          ],
        },
        {
          id: 'qs-v9-c07-008',
          ar: 'وَجِئْتُكَ بِخَبَرِ صِدْقٍ عَنْ سَبَإٍ وَمَلِكَتِهِمْ:',
          en: 'and I have brought you truthful news of Sabaʾ and their queen:',
          tokens: [
            { surface: 'وَجِئْتُكَ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.1s+2ms', gloss: 'to bring; and I have brought you' },
            { surface: 'بِخَبَرِ', lemma: 'خَبَر', pos: 'noun', features: 'prep+constr.gen', gloss: 'with news of' },
            { surface: 'صِدْقٍ', lemma: 'صِدْق', pos: 'noun', features: 'indef.gen', gloss: 'truthfulness' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'سَبَإٍ', lemma: 'سَبَأ', pos: 'proper', features: 'indef.gen', gloss: 'Sabaʾ' },
            { surface: 'وَمَلِكَتِهِمْ', lemma: 'مَلِكَة', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their queen' },
          ],
        },
        {
          id: 'qs-v9-c07-009',
          ar: 'لَهُمْ مُلْكٌ عَظِيمٌ،',
          en: 'they have a great kingdom,',
          tokens: [
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'they have' },
            { surface: 'مُلْكٌ', lemma: 'مُلْك', pos: 'noun', features: 'indef.nom', gloss: 'a kingdom' },
            { surface: 'عَظِيمٌ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.nom', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v9-c07-010',
          ar: 'وَدَوْلَةٌ وَاسِعَةٌ،',
          en: 'and a wide realm,',
          tokens: [
            { surface: 'وَدَوْلَةٌ', lemma: 'دَوْلَة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and a realm' },
            { surface: 'وَاسِعَةٌ', lemma: 'وَاسِع', pos: 'adj', features: 'indef.nom.f', gloss: 'wide' },
          ],
        },
        {
          id: 'qs-v9-c07-011',
          ar: 'وَقَدْ وَجَدْتُهُمْ عَلَى هَذَا الْعَقْلِ وَالْكِيَاسَةِ،',
          en: 'and I found them, for all this intelligence and statecraft,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'وَجَدْتُهُمْ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.1s+3mp', gloss: 'to find; I found them' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'الْعَقْلِ', lemma: 'عَقْل', pos: 'noun', features: 'def.gen', gloss: 'intelligence' },
            { surface: 'وَالْكِيَاسَةِ', lemma: 'كِيَاسَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and statecraft' },
          ],
        },
        {
          id: 'qs-v9-c07-012',
          ar: 'وَالْمُلْكِ وَالرِّيَاسَةِ،',
          en: 'dominion and leadership,',
          tokens: [
            { surface: 'وَالْمُلْكِ', lemma: 'مُلْك', pos: 'noun', features: 'conj+def.gen', gloss: 'and dominion' },
            { surface: 'وَالرِّيَاسَةِ', lemma: 'رِيَاسَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and leadership' },
          ],
        },
        {
          id: 'qs-v9-c07-013',
          ar: 'أَصْحَابَ سَفَاهَةٍ وَجَهَالَةٍ.',
          en: 'to be people of folly and ignorance.',
          tokens: [
            { surface: 'أَصْحَابَ', lemma: 'صَاحِب', pos: 'noun', features: 'pl.acc.constr', gloss: 'people of' },
            { surface: 'سَفَاهَةٍ', lemma: 'سَفَاهَة', pos: 'noun', features: 'indef.gen', gloss: 'folly' },
            { surface: 'وَجَهَالَةٍ', lemma: 'جَهَالَة', pos: 'noun', features: 'conj+indef.gen', root: 'ج ه ل', gloss: 'and ignorance' },
          ],
        },
        {
          id: 'qs-v9-c07-014',
          ar: 'وَهُمْ يَسْجُدُونَ لِلشَّمْسِ مِنْ دُونِ اللَّهِ،',
          en: 'They prostrate to the sun instead of Allah,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُوَ', pos: 'part', features: 'conj+part.3mp', gloss: 'and they' },
            { surface: 'يَسْجُدُونَ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to prostrate; prostrate' },
            { surface: 'لِلشَّمْسِ', lemma: 'شَمْس', pos: 'noun', features: 'prep+def.gen', gloss: 'to the sun' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'instead' },
            { surface: 'دُونِ', lemma: 'دُونَ', pos: 'prep', features: 'gen', gloss: 'of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v9-c07-015',
          ar: 'وَلَا يَفْقَهُونَ ذَلِكَ،',
          en: 'and do not understand that,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَفْقَهُونَ', lemma: 'فَقِهَ', pos: 'verb', features: 'impf.3mp', root: 'ف ق ه', gloss: 'to understand deeply; understand' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v9-c07-016',
          ar: 'وَلَا يَهْتَدُونَ إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ.',
          en: 'and are not guided to worshipping Allah alone.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَهْتَدُونَ', lemma: 'اِهْتَدَى', pos: 'verb', features: 'impf.3mp', root: 'ه د ي', gloss: 'to be guided; are guided' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'worshipping' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْدَ', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَتْ وَظِيفَةُ الْهُدْهُدِ فِي جَيْشِ سُلَيْمَانَ؟',
          options: ['كَانَ رَائِدَهُ يَدُلُّهُ عَلَى مَوَاضِعِ الْمِيَاهِ وَمَنَازِلِ الْجَيْشِ', 'كَانَ يُقَاتِلُ فِي الْجَيْشِ', 'لَمْ تَكُنْ لَهُ وَظِيفَةٌ'],
          answer: 0,
          qEn: "What was the hoopoe's job in Sulaymān's army?",
          optionsEn: ['He was his scout, guiding him to water sources and the army\'s stops', 'He fought in the army', 'He had no job'],
        },
        {
          q: 'بِمَاذَا جَاءَ الْهُدْهُدُ إِلَى سُلَيْمَانَ؟',
          options: ['بِخَبَرِ صِدْقٍ عَنْ سَبَإٍ وَمَلِكَتِهِمْ', 'بِهَدِيَّةٍ مِنَ الذَّهَبِ', 'بِلَا شَيْءٍ'],
          answer: 0,
          qEn: 'What did the hoopoe bring to Sulaymān?',
          optionsEn: ["Truthful news of Sabaʾ and their queen", "A gift of gold", "Nothing"],
        },
        {
          q: 'كَيْفَ وَصَفَ الْهُدْهُدُ قَوْمَ سَبَإٍ مِنْ حَيْثُ الدِّينِ؟',
          options: ['يَسْجُدُونَ لِلشَّمْسِ مِنْ دُونِ اللَّهِ وَلَا يَهْتَدُونَ إِلَى عِبَادَتِهِ وَحْدَهُ', 'كَانُوا مُوَحِّدِينَ خَالِصِينَ', 'لَمْ يَكُنْ لَهُمْ أَيُّ دِينٍ'],
          answer: 0,
          qEn: "How did the hoopoe describe the people of Sabaʾ religiously?",
          optionsEn: ['They prostrate to the sun instead of Allah and are not guided to worshipping Him alone', 'They were purely monotheistic', 'They had no religion at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَ الْهُدْهُدُ',
        post: 'وَعَيْنَهُ.',
        en: 'The hoopoe was his scout and his eye.',
        options: ['رَائِدَهُ', 'رَائِدُهُ', 'رَائِدٍ', 'الرَّائِدُ'],
        answer: 0,
        rationales: [
          'Accusative -- predicate of كَانَ, matching the printed كَانَ ... رَائِدَهُ وَعَيْنَهُ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive, indefinite -- wrong case and wrong definiteness.',
          'Definite without a suffix -- wrong; the printed word carries the possessive "his."',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ الْهُدْهُدُ: اطَّلَعْتُ عَلَى مَا لَمْ',
        post: 'عَلَيْهِ أَنْتَ.',
        en: 'The hoopoe said: I have learned of what you have not learned of.',
        options: ['تَطَّلِعْ', 'اطَّلَعْتَ', 'يَطَّلِعْ', 'تَطَّلِعُ'],
        answer: 0,
        rationales: [
          'Jussive after لَمْ, 2nd masculine singular -- matches أَنْتَ, matching the printed لَمْ تَطَّلِعْ.',
          'Perfect -- wrong; لَمْ requires the jussive imperfect, not the perfect.',
          '3rd masculine singular -- wrong person; the sentence addresses "you" (أَنْتَ), not "he."',
          'Indicative imperfect -- wrong mood; لَمْ requires the jussive.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهُمْ يَسْجُدُونَ لِلشَّمْسِ مِنْ دُونِ',
        post: '.',
        en: 'They prostrate to the sun instead of Allah.',
        options: ['اللَّهِ', 'اللَّهُ', 'اللَّهَ', 'لِلَّهِ'],
        answer: 0,
        rationales: [
          'Genitive -- object of the compound preposition مِنْ دُونِ, matching the printed مِنْ دُونِ اللَّهِ.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'With a fused preposition -- wrong; no separate preposition governs this word here.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَجِدُ الْمَاءَ فِي الْوَادِي',
        pre: '',
        post: 'الْمَاءَ فِي الْوَادِي',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَجِدُ', 'أَجِدُ', 'تَجِدُ', 'نَجِدُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st singular -- the base form, not shifted to "he."',
          '2nd masculine singular -- wrong person; the target is "he," not "you."',
          '1st plural -- wrong person; the target is "he," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'تَسْجُدُ الْمَلِكَةُ لِلشَّمْسِ',
        pre: '',
        post: 'لِلشَّمْسِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَسْجُدُونَ', 'تَسْجُدُ', 'أَسْجُدُ', 'نَسْجُدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd feminine singular -- the base form, not shifted to "they."',
          '1st singular -- wrong person; the target is "they," not "I."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'تَهْتَدِي الْمَرْأَةُ إِلَى الْحَقِّ',
        pre: '',
        post: 'إِلَى الْحَقِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَهْتَدِي', 'تَهْتَدِي', 'يَهْتَدِي', 'نَهْتَدِي'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd feminine singular -- the base form, not shifted to "I."',
          '3rd masculine singular -- wrong person and gender.',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

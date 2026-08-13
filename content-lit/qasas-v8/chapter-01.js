// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 1 --
// نَظْرَةٌ عَلَى الْقَصَصِ السَّابِقَةِ. Printed page 213 (top, right after the
// chapter-1 heading box that opens the volume -- no title graphic yet, see
// index.js's header comment). Transcribed by hand from the scan (vision OCR,
// 200-350dpi renders) against ../CHAPTER-FORMAT.md.
//
// One long, breathless paragraph in the author's own literary voice --
// unlike the plain past-tense narration of vols 1-3, this recap addresses
// the reader directly in the 2nd person plural, looking back on the six
// prophets already read (Ibrāhīm, Yūsuf, Nūḥ, Hūd, Ṣāliḥ, and Mūsā "at some
// length") and how eagerly their stories were read, retained, and retold.
//
// Grammar / lexical notes:
//   -- The single printed sentence is split at each of its comma-marked
//      clause boundaries into shorter entries (house convention, cf.
//      qasas-v3/chapter-16.js's header comment), except where a comma only
//      separates two paired nouns inside one clause rather than starting a
//      new one (qs-v8-c01-004's بِشَوْقٍ وَرَغْبَةٍ وَإِجْلاَلٍ وَتَقْدِيرٍ stays a
//      single entry for this reason).
//   -- هُود، مُوسَى، وصَالِح (qs-v8-c01-002/003, the prophets' proper names)
//      are tagged new here since only vols 1-3 (Ibrāhīm، Yūسُف، Nūḥ) are
//      transcribed so far; vols 4-7 (Hūd، Ṣāliḥ، Mūsā) are mapped but being
//      transcribed by other agents in parallel and may introduce these names
//      first once merged -- harmless either way, since the app computes
//      "known" from actual reading history, not from newWords flags.
//      صَالِح is a second, distinct lemma from the already-taught adjective
//      صَالِح "righteous" (qasas-v2) -- same spelling, different pos
//      (proper vs. adj), so it is re-declared here as its own homograph per
//      the corpus's existing noun/adj-vs-proper-noun convention.
//   -- ذَلَّتْ بِهَا أَلْسِنَتُكُمْ (qs-v8-c01-007) uses ذَلَّ idiomatically of the
//      tongue -- not its ordinary "to be lowly, humbled" sense, but "to
//      become fluent, practiced, tractable" (لسانه ذلول بكذا), tagged with
//      that sense-specific gloss on the lemma.
//   -- تَطْوِيل (qs-v8-c01-003, "lengthening, elaboration") is a distinct
//      verbal-noun lemma from the already-taught adjective طَوِيل "long" --
//      same root ط و ل, two separate printed words, matching the corpus's
//      existing noun/participle-vs-adjective same-root convention (cf.
//      qasas-v3/chapter-16.js's نَصِيحَة/نَصَحَ/نَاصِح note).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَرَأَ، قِصَّة، سَيِّد،
//      إِبْرَاهِيم، يُوسُف، نُوح، شَيْء، مِنْ، تَفْصِيل، كُلّ، ذَلِكَ، بِ، فِي، نَفْس،
//      قَلْب، لِسَان، قَدْ، رَأَى، نَاس، حَكَى، أَخ، صَغِير، أَب، أُمّ (dual أَبَوَيْنِ),
//      كَبِير، أَنْتُمْ are all already taught and are NOT re-listed in
//      newWords here.
//
// 19 new words (هُود، مُوسَى، صَالِح، شَوْق، رَغْبَة، إِجْلاَل، تَقْدِير، تَطْوِيل،
// حَلَّ، مَحَلّ، حَبِيب، أَثِير، وَعَى، ذَاكِرَة، ذَلَّ، رَدَّدَ، تَذَوَّقَ، تَحَمَّسَ، حِكَايَة).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'نَظْرَةٌ عَلَى الْقَصَصِ السَّابِقَةِ', en: 'A Look Back at the Previous Stories' },
  newWords: ['هُود', 'مُوسَى', 'صَالِح', 'شَوْق', 'رَغْبَة', 'إِجْلاَل', 'تَقْدِير', 'تَطْوِيل', 'حَلَّ', 'مَحَلّ', 'حَبِيب', 'أَثِير', 'وَعَى', 'ذَاكِرَة', 'ذَلَّ', 'رَدَّدَ', 'تَذَوَّقَ', 'تَحَمَّسَ', 'حِكَايَة'],
  lemmas: {
    هُود: { gloss: 'Hūd' },
    مُوسَى: { gloss: 'Mūsā (Moses)' },
    صَالِح: { gloss: 'Ṣāliḥ' },
    شَوْق: { gloss: 'longing, eagerness' },
    رَغْبَة: { gloss: 'desire, keenness' },
    إِجْلاَل: { gloss: 'reverence, veneration' },
    تَقْدِير: { gloss: 'appreciation, esteem' },
    تَطْوِيل: { gloss: 'lengthening, elaboration' },
    حَلَّ: { gloss: 'to settle, take up residence, hold (a place)' },
    مَحَلّ: { gloss: 'place, position' },
    حَبِيب: { gloss: 'beloved, dear' },
    أَثِير: { gloss: 'favored, cherished, chosen' },
    وَعَى: { gloss: 'to retain, be conscious of, take to memory' },
    ذَاكِرَة: { gloss: 'memory' },
    ذَلَّ: { gloss: 'to become easy, tractable, fluent (of the tongue)' },
    رَدَّدَ: { gloss: 'to repeat' },
    تَذَوَّقَ: { gloss: 'to taste, savor' },
    تَحَمَّسَ: { gloss: 'to grow enthusiastic, excited' },
    حِكَايَة: { gloss: 'narrating, storytelling' },
  },
  paragraphs: [
    {
      en: "You have read the story of our master Ibrāhīm and our master Yūsuf, and you have read the story of our master Nūḥ, our master Hūd, and our master Ṣāliḥ; you have read the story of our master Mūsā at some length and elaboration. You read all of that with longing and keenness, with reverence and appreciation, and it settled in your souls and hearts as beloved, cherished stories. Your memory retained it and your tongues grew fluent with it, and people have seen you narrating it to your younger siblings and repeating it to your parents and older siblings, while you yourselves savored it and grew excited in telling it.",
      sentences: [
        {
          id: 'qs-v8-c01-001',
          ar: 'قَرَأْتُمْ قِصَّةَ سَيِّدِنَا إِبْرَاهِيمَ وَسَيِّدِنَا يُوسُفَ،',
          en: 'You have read the story of our master Ibrāhīm and our master Yūsuf,',
          tokens: [
            { surface: 'قَرَأْتُمْ', lemma: 'قَرَأَ', pos: 'verb', features: 'perf.2mp', gloss: 'to read; you all have read' },
            { surface: 'قِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'acc.constr', gloss: 'the story of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', root: 'س و د', gloss: 'our master' },
            { surface: 'إِبْرَاهِيمَ', lemma: 'إِبْرَاهِيم', pos: 'proper', features: 'gen', gloss: 'Ibrāhīm' },
            { surface: 'وَسَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'conj+gen+1p', root: 'س و د', gloss: 'and our master' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v8-c01-002',
          ar: 'وَقَرَأْتُمْ قِصَّةَ سَيِّدِنَا نُوحٍ وَسَيِّدِنَا هُودٍ وَسَيِّدِنَا صَالِحٍ،',
          en: 'and you have read the story of our master Nūḥ, our master Hūd, and our master Ṣāliḥ,',
          tokens: [
            { surface: 'وَقَرَأْتُمْ', lemma: 'قَرَأَ', pos: 'verb', features: 'conj+perf.2mp', gloss: 'to read; and you all have read' },
            { surface: 'قِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'acc.constr', gloss: 'the story of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', root: 'س و د', gloss: 'our master' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'وَسَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'conj+gen+1p', root: 'س و د', gloss: 'and our master' },
            { surface: 'هُودٍ', lemma: 'هُود', pos: 'proper', features: 'gen', gloss: 'Hūd' },
            { surface: 'وَسَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'conj+gen+1p', root: 'س و د', gloss: 'and our master' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'proper', features: 'gen', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v8-c01-003',
          ar: 'قَرَأْتُمْ قِصَّةَ سَيِّدِنَا مُوسَى فِي شَيْءٍ مِنَ التَّفْصِيلِ وَالتَّطْوِيلِ،',
          en: 'you have read the story of our master Mūsā at some length and elaboration,',
          tokens: [
            { surface: 'قَرَأْتُمْ', lemma: 'قَرَأَ', pos: 'verb', features: 'perf.2mp', gloss: 'to read; you all have read' },
            { surface: 'قِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'acc.constr', gloss: 'the story of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', root: 'س و د', gloss: 'our master' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, at' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'some (amount)' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'التَّفْصِيلِ', lemma: 'تَفْصِيل', pos: 'noun', features: 'def.gen', gloss: 'the detail' },
            { surface: 'وَالتَّطْوِيلِ', lemma: 'تَطْوِيل', pos: 'noun', features: 'conj+def.gen', root: 'ط و ل', gloss: 'and the elaboration' },
          ],
        },
        {
          id: 'qs-v8-c01-004',
          ar: 'قَرَأْتُمْ كُلَّ ذَلِكَ بِشَوْقٍ وَرَغْبَةٍ وَإِجْلاَلٍ وَتَقْدِيرٍ،',
          en: 'you have read all of that with longing and keenness, with reverence and appreciation,',
          tokens: [
            { surface: 'قَرَأْتُمْ', lemma: 'قَرَأَ', pos: 'verb', features: 'perf.2mp', gloss: 'to read; you all have read' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'بِشَوْقٍ', lemma: 'شَوْق', pos: 'noun', features: 'prep+indef.gen', root: 'ش و ق', gloss: 'with longing' },
            { surface: 'وَرَغْبَةٍ', lemma: 'رَغْبَة', pos: 'noun', features: 'conj+indef.gen', root: 'ر غ ب', gloss: 'and keenness' },
            { surface: 'وَإِجْلاَلٍ', lemma: 'إِجْلاَل', pos: 'noun', features: 'conj+indef.gen', root: 'ج ل ل', gloss: 'and reverence' },
            { surface: 'وَتَقْدِيرٍ', lemma: 'تَقْدِير', pos: 'noun', features: 'conj+indef.gen', root: 'ق د ر', gloss: 'and appreciation' },
          ],
        },
        {
          id: 'qs-v8-c01-005',
          ar: 'وَحَلَّتْ فِي نُفُوسِكُمْ وَقُلُوبِكُمْ مَحَلَّ الْقَصَصِ الْحَبِيبَةِ الأَثِيرَةِ،',
          en: 'and it settled in your souls and hearts as beloved, cherished stories,',
          tokens: [
            { surface: 'وَحَلَّتْ', lemma: 'حَلَّ', pos: 'verb', features: 'conj+perf.3fs', root: 'ح ل ل', gloss: 'to settle; and it settled' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'نُفُوسِكُمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.gen+2mp', gloss: 'your souls' },
            { surface: 'وَقُلُوبِكُمْ', lemma: 'قَلْب', pos: 'noun', features: 'conj+pl.gen+2mp', gloss: 'and your hearts' },
            { surface: 'مَحَلَّ', lemma: 'مَحَلّ', pos: 'noun', features: 'acc.constr', root: 'ح ل ل', gloss: 'the place of' },
            { surface: 'الْقَصَصِ', lemma: 'قِصَّة', pos: 'noun', features: 'pl.def.gen', gloss: 'the stories' },
            { surface: 'الْحَبِيبَةِ', lemma: 'حَبِيب', pos: 'adj', features: 'def.gen.f', gloss: 'the beloved' },
            { surface: 'الأَثِيرَةِ', lemma: 'أَثِير', pos: 'adj', features: 'def.gen.f', gloss: 'the cherished' },
          ],
        },
        {
          id: 'qs-v8-c01-006',
          ar: 'وَوَعَتْهَا ذَاكِرَتُكُمْ،',
          en: 'Your memory retained it,',
          tokens: [
            { surface: 'وَوَعَتْهَا', lemma: 'وَعَى', pos: 'verb', features: 'conj+perf.3fs+3fs', gloss: 'to retain; and retained it' },
            { surface: 'ذَاكِرَتُكُمْ', lemma: 'ذَاكِرَة', pos: 'noun', features: 'nom+2mp', root: 'ذ ك ر', gloss: 'your memory' },
          ],
        },
        {
          id: 'qs-v8-c01-007',
          ar: 'وَذَلَّتْ بِهَا أَلْسِنَتُكُمْ،',
          en: 'and your tongues grew fluent with it,',
          tokens: [
            { surface: 'وَذَلَّتْ', lemma: 'ذَلَّ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become fluent; and grew fluent' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'with it' },
            { surface: 'أَلْسِنَتُكُمْ', lemma: 'لِسَان', pos: 'noun', features: 'pl.nom+2mp', gloss: 'your tongues' },
          ],
        },
        {
          id: 'qs-v8-c01-008',
          ar: 'وَقَدْ رَآكُمُ النَّاسُ تَحْكُونَهَا لإِخْوَتِكُمُ الصِّغَارِ،',
          en: 'and people have seen you narrating it to your younger siblings,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'رَآكُمُ', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms+2mp', gloss: 'to see; has seen you' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'تَحْكُونَهَا', lemma: 'حَكَى', pos: 'verb', features: 'impf.2mp+3fs', gloss: 'to narrate; you all narrating it' },
            { surface: 'لإِخْوَتِكُمُ', lemma: 'أَخ', pos: 'noun', features: 'prep+pl.gen+2mp', gloss: 'to your siblings' },
            { surface: 'الصِّغَارِ', lemma: 'صَغِير', pos: 'adj', features: 'pl.def.gen', gloss: 'the young' },
          ],
        },
        {
          id: 'qs-v8-c01-009',
          ar: 'وَتُرَدِّدُونَهَا لِلأَبَوَيْنِ وَالإِخْوَةِ الْكِبَارِ،',
          en: 'and repeating it to your parents and older siblings,',
          tokens: [
            { surface: 'وَتُرَدِّدُونَهَا', lemma: 'رَدَّدَ', pos: 'verb', features: 'conj+impf.2mp+3fs', root: 'ر د د', gloss: 'to repeat; and you all repeating it' },
            { surface: 'لِلأَبَوَيْنِ', lemma: 'أَب', pos: 'noun', features: 'prep+du.def.gen', gloss: 'to the two parents' },
            { surface: 'وَالإِخْوَةِ', lemma: 'أَخ', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the siblings' },
            { surface: 'الْكِبَارِ', lemma: 'كَبِير', pos: 'adj', features: 'pl.def.gen', gloss: 'the older' },
          ],
        },
        {
          id: 'qs-v8-c01-010',
          ar: 'وَأَنْتُمْ تَتَذَوَّقُونَهَا،',
          en: 'while you yourselves savored it,',
          tokens: [
            { surface: 'وَأَنْتُمْ', lemma: 'أَنْتُمْ', pos: 'noun', features: 'conj+2mp', gloss: 'and you all' },
            { surface: 'تَتَذَوَّقُونَهَا', lemma: 'تَذَوَّقَ', pos: 'verb', features: 'impf.2mp+3fs', root: 'ذ و ق', gloss: 'to savor; you all savoring it' },
          ],
        },
        {
          id: 'qs-v8-c01-011',
          ar: 'وَقَدْ تَتَحَمَّسُونَ فِي حِكَايَتِهَا.',
          en: 'and grew excited in telling it.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'تَتَحَمَّسُونَ', lemma: 'تَحَمَّسَ', pos: 'verb', features: 'impf.2mp', root: 'ح م س', gloss: 'to grow excited; you all grow excited' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'حِكَايَتِهَا', lemma: 'حِكَايَة', pos: 'noun', features: 'gen+3fs', root: 'ح ك ي', gloss: 'telling it' },
          ],
        },
      ],
      checks: [
        {
          q: 'قِصَصَ أَيِّ الأَنْبِيَاءِ ذَكَرَ الْكَاتِبُ أَنَّكُمْ قَرَأْتُمُوهَا؟',
          options: ['إِبْرَاهِيمَ وَيُوسُفَ وَنُوحٍ وَهُودٍ وَصَالِحٍ وَمُوسَى', 'دَاوُدَ وَسُلَيْمَانَ فَقَطْ', 'قِصَصاً لَمْ تُقْرَأْ مِنْ قَبْلُ'],
          answer: 0,
          qEn: 'Which prophets\' stories does the author say you have already read?',
          optionsEn: ['Ibrāhīm, Yūsuf, Nūḥ, Hūd, Ṣāliḥ, and Mūsā', 'Dāwūd and Sulaymān only', 'Stories never read before'],
        },
        {
          q: 'بِأَيِّ رُوحٍ قَرَأْتُمْ هَذِهِ الْقَصَصَ، كَمَا يَصِفُ الْكَاتِبُ؟',
          options: ['بِشَوْقٍ وَرَغْبَةٍ وَإِجْلاَلٍ وَتَقْدِيرٍ', 'بِمَلَلٍ وَإِهْمَالٍ', 'بِسُرْعَةٍ دُونَ فَهْمٍ'],
          answer: 0,
          qEn: 'In what spirit does the author say you read these stories?',
          optionsEn: ['With longing and keenness, with reverence and appreciation', 'With boredom and neglect', 'Hastily, without understanding'],
        },
        {
          q: 'مَاذَا رَأَى النَّاسُ مِنْكُمْ فِعْلَهُ بِهَذِهِ الْقَصَصِ؟',
          options: ['رَأَوْكُمْ تَحْكُونَهَا لإِخْوَتِكُمُ الصِّغَارِ وَتُرَدِّدُونَهَا لِلأَبَوَيْنِ وَالإِخْوَةِ الْكِبَارِ', 'رَأَوْكُمْ تَنْسَوْنَهَا سَرِيعاً', 'رَأَوْكُمْ تَكْرَهُونَ سَمَاعَهَا'],
          answer: 0,
          qEn: 'What did people see you doing with these stories?',
          optionsEn: ['They saw you narrating it to your younger siblings and repeating it to your parents and older siblings', 'They saw you forgetting it quickly', 'They saw you hating to hear it'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَرَأْتُمْ قِصَّةَ سَيِّدِنَا نُوحٍ وَسَيِّدِنَا',
        post: 'وَسَيِّدِنَا صَالِحٍ.',
        en: 'You have read the story of our master Nūḥ, our master Hūd, and our master Ṣāliḥ.',
        options: ['هُودٍ', 'هُودٌ', 'هُوداً', 'الْهُودِ'],
        answer: 0,
        rationales: [
          'Genitive with tanwin -- a triptote proper noun in apposition to سَيِّدِنَا, which is itself genitive here.',
          'Nominative -- wrong case for this position.',
          'Accusative -- wrong case for this position.',
          'Proper nouns never take the definite article.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَحَلَّتْ',
        post: 'نُفُوسِكُمْ وَقُلُوبِكُمْ مَحَلَّ الْقَصَصِ الْحَبِيبَةِ.',
        en: 'and it settled in your souls and hearts as beloved stories.',
        options: ['فِي', 'مِنْ', 'إِلَى', 'عَلَى'],
        answer: 0,
        rationales: [
          '"in" -- matches حَلَّتْ فِي "settled in," the printed preposition.',
          '"from" -- wrong preposition; nothing is coming from the souls here.',
          '"to" -- wrong preposition; حَلَّ does not take إِلَى.',
          '"on" -- wrong preposition for settling within something.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدْ رَآكُمُ النَّاسُ',
        post: 'لإِخْوَتِكُمُ الصِّغَارِ.',
        en: 'and people have seen you narrating it to your younger siblings.',
        options: ['تَحْكُونَهَا', 'حَكَيْتُمُوهَا', 'يَحْكُونَهَا', 'نَحْكِيهَا'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- the state رَأَى describes you in, matching أَنْتُمْ.',
          'Perfect -- wrong form; رَأَى + a following verb describes an ongoing state, which takes the imperfect.',
          '3rd masculine plural -- wrong person; the people saw "you," not "them."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'قَرَأَ الْوَلَدُ الْقِصَّةَ',
        pre: '',
        post: 'الْقِصَّةَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['قَرَأْتُمُ', 'قَرَأَ', 'قَرَأْتُ', 'قَرَأْنَا'],
        answer: 0,
        rationales: [
          '2nd masculine plural perfect -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st singular -- wrong person; the target is "you all," not "I."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'قَرَأَ الْوَلَدُ الْقِصَّةَ',
        pre: '',
        post: 'الْقِصَّةَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['قَرَأْتُ', 'قَرَأَ', 'قَرَأْتَ', 'قَرَأْنَا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'قَرَأَ الْوَلَدُ الْقِصَّةَ',
        pre: '',
        post: 'الْقِصَّةَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['قَرَأُوا', 'قَرَأَ', 'قَرَأْتَ', 'قَرَأْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine singular -- wrong person; this is "they," not "you."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 10 «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»,
// chapter 3 -- مِحْنَةٌ وَمِنْحَةٌ. Printed page 238, middle box through the
// bottom of the page (ending with the closing triple-rosette divider,
// which marks the end of the Ayyūb portion of the story before ch4 opens
// the Yūnus portion on page 239). Transcribed by hand from the scan
// (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// One paragraph: Ayyūb's trial completes its purpose (perfection, raised
// rank, contentment with the decree) and Allah inspires him with the
// answered prayer -- quoted directly from the Qur'an, Sūrat al-Anbiyāʾ
// 21:83-84 -- after which Allah restores his health, his wealth, and
// multiplies his blessings manifold.
//
// Grammar / lexical notes:
//   -- The prose sentence is one long chain coordinated by وَ.../مِنْ...;
//      split here at each printed comma (house convention, matching
//      qasas-v3 ch7/ch9/ch10/ch12/ch13) -- qs-v10-c03-003/004 stay short
//      (2 tokens each) because they are genuinely just coordinated nouns
//      under the earlier مِنْ, not full clauses; not build-eligible on
//      their own, but the chapter clears the five-buildable-sentence floor
//      comfortably from its other sentences and the Qur'an fragments.
//   -- The two Qur'an āyāt (21:83, 21:84) are tokenized like ordinary
//      prose, each split into fragments of at most 7 tokens (the
//      established convention for long āyāt, per qasas-v2 ch14 and
//      qasas-v3 ch13's own note) -- each fragment independently wrapped
//      in ﴿﴾, no rewording, mushaf text throughout.
//   -- تَبَارَكَ (qs-v10-c03-012, new) is form VI, a distinct lemma from the
//      already-known بَارَكَ (form III, qs-v10-c03-010 here) -- same
//      distinct-lemma-per-derived-verb-form convention noted in qasas-v3
//      ch13 (بَلَّغَ vs. بَلَغَ, اِسْتَجَابَ vs. أَجَابَ).
//   -- مُضَاعَفَةً (qs-v10-c03-011) is feminine singular agreeing with the
//      broken plural أَضْعَافاً -- a broken plural's adjective agrees
//      feminine-singular regardless of the noun's own gender (same rule
//      as qs-v10-c01-005's مَرْضِيَّةٌ agreeing with أَوْلَاد; see
//      CHAPTER-FORMAT.md §4's دُرُوس example).
//   -- أَضْعَافاً is tagged as its own lemma (not folded into a singular)
//      since it functions here as a set idiom ("manifold, redoubled"),
//      matching how أَنْعَام (ch1) is treated as its own lexical item
//      rather than derived from a singular in this corpus so far.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا، مَا، أَرَادَهُ،
//      اللَّه، لِ، مِنْ، أَنَّ، إِلَّا، إِنَّ، الَّذِي، فِي، كُلّ، ذَلِكَ، كَانَ،
//      رَدَّ، مَال، بَارَكَ، يَقُولُ (قَالَ)، إِذْ، نَادَى، رَبّ، أَهْل، مِثْل، مَعَ،
//      رَحْمَة، رَاحِم، اِسْتَجَابَ، آتَى، دُعَاء، مَلْجَأ، أَنْتَ، أَيُّوب (this
//      volume, ch1)
//      are all already taught and are NOT re-listed in newWords here.
//
// 26 new words (تَمَّ، اِبْتِلَاء، تَكْمِيل، رَفْع، دَرَجَة، رِضَا، قَضَاء، أَلْهَمَ،
// مُسْتَجَاب، تَجَلَّى، عَجْز، بُؤْس، قَادِر، عَافَى، بَدَن، أَضْعَاف، مُضَاعَف،
// تَبَارَكَ، تَعَالَى، مَسَّ، ضُرّ، أَرْحَم، كَشَفَ، عِنْد، ذِكْرَى، عَابِد).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'مِحْنَةٌ وَمِنْحَةٌ', en: 'A Trial and a Gift' },
  newWords: [
    'تَمَّ', 'اِبْتِلَاء', 'تَكْمِيل', 'رَفْع', 'دَرَجَة', 'رِضَا', 'قَضَاء', 'أَلْهَمَ',
    'مُسْتَجَاب', 'تَجَلَّى', 'عَجْز', 'بُؤْس', 'قَادِر', 'عَافَى', 'بَدَن', 'أَضْعَاف',
    'مُضَاعَف', 'تَبَارَكَ', 'تَعَالَى', 'مَسَّ', 'ضُرّ', 'أَرْحَم', 'كَشَفَ', 'عِنْد',
    'ذِكْرَى', 'عَابِد',
  ],
  lemmas: {
    'تَمَّ': { gloss: 'to be complete, be finished' },
    'اِبْتِلَاء': { gloss: 'trial, testing' },
    'تَكْمِيل': { gloss: 'perfection, completion' },
    'رَفْع': { gloss: 'raising, elevation' },
    'دَرَجَة': { gloss: 'rank, degree' },
    'رِضَا': { gloss: 'contentment, satisfaction' },
    'قَضَاء': { gloss: 'divine decree, judgment' },
    'أَلْهَمَ': { gloss: 'to inspire' },
    'مُسْتَجَاب': { gloss: 'answered (of a prayer)' },
    'تَجَلَّى': { gloss: 'to become manifest, appear clearly' },
    'عَجْز': { gloss: 'powerlessness, incapacity' },
    'بُؤْس': { gloss: 'misery, distress' },
    'قَادِر': { gloss: 'capable, able' },
    'عَافَى': { gloss: 'to restore to health' },
    'بَدَن': { gloss: 'body' },
    'أَضْعَاف': { gloss: 'manifold, multiples' },
    'مُضَاعَف': { gloss: 'redoubled, multiplied' },
    'تَبَارَكَ': { gloss: 'to be blessed (of Allah)' },
    'تَعَالَى': { gloss: 'to be exalted (of Allah)' },
    'مَسَّ': { gloss: 'to touch, afflict' },
    'ضُرّ': { gloss: 'affliction, harm' },
    'أَرْحَم': { gloss: 'most merciful' },
    'كَشَفَ': { gloss: 'to remove, uncover' },
    'عِنْد': { gloss: 'with, in the possession of' },
    'ذِكْرَى': { gloss: 'reminder, remembrance' },
    'عَابِد': { gloss: 'worshipper' },
  },
  paragraphs: [
    {
      en: 'When what Allah willed for him of trial was complete -- of perfection, of raised rank, and of contentment with the decree -- He inspired him with the answered prayer in which his powerlessness and his misery became manifest, and that there is no refuge from Allah except in Him, and that He is capable over everything. Allah restored him to health in his body and his family, returned his wealth to him, and blessed him in all of that, so it became manifold, redoubled. Allah, blessed and exalted is He, says: "And Ayyūb, when he called out to his Lord: Indeed affliction has touched me, and You are the Most Merciful of the merciful. So We answered him and removed the affliction that was upon him, and We gave him back his family, and the like of them with them, as a mercy from Us and a reminder for the worshippers."',
      sentences: [
        {
          id: 'qs-v10-c03-001',
          ar: 'وَلَمَّا تَمَّ مَا أَرَادَهُ اللَّهُ لَهُ مِنِ ابْتِلَاءٍ،',
          en: 'When what Allah willed for him of trial was complete,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'تَمَّ', lemma: 'تَمَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to be complete; was complete' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَرَادَهُ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to want; He willed it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'مِنِ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ابْتِلَاءٍ', lemma: 'اِبْتِلَاء', pos: 'noun', features: 'indef.gen', root: 'ب ل و', gloss: 'trial, testing' },
          ],
        },
        {
          id: 'qs-v10-c03-002',
          ar: 'وَمَا أَرَادَ بِهِ مِنْ تَكْمِيلٍ،',
          en: 'and what He willed by it of perfection,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want; He willed' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'تَكْمِيلٍ', lemma: 'تَكْمِيل', pos: 'noun', features: 'indef.gen', gloss: 'perfection, completion' },
          ],
        },
        {
          id: 'qs-v10-c03-003',
          ar: 'وَرَفْعِ دَرَجَاتٍ،',
          en: 'and raising of ranks,',
          tokens: [
            { surface: 'وَرَفْعِ', lemma: 'رَفْع', pos: 'noun', features: 'conj+gen.constr', gloss: 'and raising of' },
            { surface: 'دَرَجَاتٍ', lemma: 'دَرَجَة', pos: 'noun', features: 'pl.indef.gen', gloss: 'ranks, degrees' },
          ],
        },
        {
          id: 'qs-v10-c03-004',
          ar: 'وَالرِّضَا بِالْقَضَاءِ،',
          en: 'and contentment with the divine decree,',
          tokens: [
            { surface: 'وَالرِّضَا', lemma: 'رِضَا', pos: 'noun', features: 'conj+def.gen', gloss: 'and the contentment' },
            { surface: 'بِالْقَضَاءِ', lemma: 'قَضَاء', pos: 'noun', features: 'prep+def.gen', gloss: 'with the divine decree' },
          ],
        },
        {
          id: 'qs-v10-c03-005',
          ar: 'أَلْهَمَهُ الدُّعَاءَ الْمُسْتَجَابَ الَّذِي تَجَلَّى فِيهِ عَجْزُهُ وَبُؤْسُهُ،',
          en: 'He inspired him with the answered prayer, in which his powerlessness and his misery became manifest,',
          tokens: [
            { surface: 'أَلْهَمَهُ', lemma: 'أَلْهَمَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ل ه م', gloss: 'to inspire; He inspired him' },
            { surface: 'الدُّعَاءَ', lemma: 'دُعَاء', pos: 'noun', features: 'def.acc', gloss: 'the prayer' },
            { surface: 'الْمُسْتَجَابَ', lemma: 'مُسْتَجَاب', pos: 'adj', features: 'def.acc', gloss: 'answered' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'which' },
            { surface: 'تَجَلَّى', lemma: 'تَجَلَّى', pos: 'verb', features: 'perf.3ms', root: 'ج ل و', gloss: 'to become manifest; became manifest' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in which' },
            { surface: 'عَجْزُهُ', lemma: 'عَجْز', pos: 'noun', features: 'nom+3ms', gloss: 'his powerlessness' },
            { surface: 'وَبُؤْسُهُ', lemma: 'بُؤْس', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his misery' },
          ],
        },
        {
          id: 'qs-v10-c03-006',
          ar: 'وَأَنْ لَا مَلْجَأَ مِنَ اللَّهِ إِلَّا إِلَيْهِ،',
          en: 'and that there is no refuge from Allah except in Him,',
          tokens: [
            { surface: 'وَأَنْ', lemma: 'أَنْ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'مَلْجَأَ', lemma: 'مَلْجَأ', pos: 'noun', features: 'acc', gloss: 'refuge' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'in Him' },
          ],
        },
        {
          id: 'qs-v10-c03-007',
          ar: 'وَأَنَّهُ الْقَادِرُ عَلَى كُلِّ شَيْءٍ،',
          en: 'and that He is capable over everything,',
          tokens: [
            { surface: 'وَأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and that He' },
            { surface: 'الْقَادِرُ', lemma: 'قَادِر', pos: 'noun', features: 'def.nom', gloss: 'the All-Capable' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'everything' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'a thing' },
          ],
        },
        {
          id: 'qs-v10-c03-008',
          ar: 'وَعَافَاهُ اللَّهُ فِي بَدَنِهِ وَأَهْلِهِ،',
          en: 'Allah restored him to health in his body and his family,',
          tokens: [
            { surface: 'وَعَافَاهُ', lemma: 'عَافَى', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to restore to health; and He restored him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَدَنِهِ', lemma: 'بَدَن', pos: 'noun', features: 'gen+3ms', gloss: 'his body' },
            { surface: 'وَأَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his family' },
          ],
        },
        {
          id: 'qs-v10-c03-009',
          ar: 'وَرَدَّ عَلَيْهِ مَالَهُ،',
          en: 'returned his wealth to him,',
          tokens: [
            { surface: 'وَرَدَّ', lemma: 'رَدَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to return; and He returned' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'مَالَهُ', lemma: 'مَال', pos: 'noun', features: 'acc+3ms', gloss: 'his wealth' },
          ],
        },
        {
          id: 'qs-v10-c03-010',
          ar: 'وَبَارَكَ لَهُ فِي كُلِّ ذَلِكَ،',
          en: 'and blessed him in all of that,',
          tokens: [
            { surface: 'وَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bless; and He blessed' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v10-c03-011',
          ar: 'فَكَانَ أَضْعَافاً مُضَاعَفَةً،',
          en: 'so it became manifold, redoubled,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; so it became' },
            { surface: 'أَضْعَافاً', lemma: 'أَضْعَاف', pos: 'noun', features: 'indef.acc', gloss: 'manifold, multiples' },
            { surface: 'مُضَاعَفَةً', lemma: 'مُضَاعَف', pos: 'adj', features: 'indef.acc.f', root: 'ض ع ف', gloss: 'redoubled, multiplied' },
          ],
        },
        {
          id: 'qs-v10-c03-012',
          ar: 'يَقُولُ اللَّهُ تَبَارَكَ وَتَعَالَى:',
          en: 'Allah, blessed and exalted is He, says:',
          tokens: [
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَبَارَكَ', lemma: 'تَبَارَكَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be blessed; blessed is He' },
            { surface: 'وَتَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be exalted; and exalted is He' },
          ],
        },
        {
          id: 'qs-v10-c03-013',
          ar: '﴿وَأَيُّوبَ إِذْ نَادَىٰ رَبَّهُ أَنِّي مَسَّنِيَ الضُّرُّ﴾',
          en: '"And Ayyūb, when he called out to his Lord: Indeed affliction has touched me,',
          tokens: [
            { surface: 'وَأَيُّوبَ', lemma: 'أَيُّوب', pos: 'proper', features: 'conj+acc', gloss: 'and Ayyūb' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'نَادَىٰ', lemma: 'نَادَى', pos: 'verb', features: 'perf.3ms', gloss: 'to call out; called out' },
            { surface: 'رَبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', gloss: 'his Lord' },
            { surface: 'أَنِّي', lemma: 'أَنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'مَسَّنِيَ', lemma: 'مَسَّ', pos: 'verb', features: 'perf.3ms+1s', gloss: 'to touch, afflict; has touched me' },
            { surface: 'الضُّرُّ', lemma: 'ضُرّ', pos: 'noun', features: 'def.nom', gloss: 'affliction, harm' },
          ],
        },
        {
          id: 'qs-v10-c03-014',
          ar: '﴿وَأَنتَ أَرْحَمُ الرَّاحِمِينَ﴾',
          en: 'and You are the Most Merciful of the merciful."',
          tokens: [
            { surface: 'وَأَنتَ', lemma: 'أَنْتَ', pos: 'part', features: 'conj+part', gloss: 'and you (are)' },
            { surface: 'أَرْحَمُ', lemma: 'أَرْحَم', pos: 'adj', features: 'nom.constr', gloss: 'most merciful of' },
            { surface: 'الرَّاحِمِينَ', lemma: 'رَاحِم', pos: 'noun', features: 'def.gen.pl', gloss: 'the merciful ones' },
          ],
        },
        {
          id: 'qs-v10-c03-015',
          ar: '﴿فَاسْتَجَبْنَا لَهُ فَكَشَفْنَا مَا بِهِ مِن ضُرٍّ﴾',
          en: '"So We answered him and removed the affliction that was upon him,',
          tokens: [
            { surface: 'فَاسْتَجَبْنَا', lemma: 'اِسْتَجَابَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to answer, respond; so We answered' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
            { surface: 'فَكَشَفْنَا', lemma: 'كَشَفَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to remove, uncover; and We removed' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'was upon him' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ضُرٍّ', lemma: 'ضُرّ', pos: 'noun', features: 'indef.gen', gloss: 'affliction, harm' },
          ],
        },
        {
          id: 'qs-v10-c03-016',
          ar: '﴿وَآتَيْنَاهُ أَهْلَهُ وَمِثْلَهُم مَّعَهُمْ رَحْمَةً مِّنْ عِندِنَا﴾',
          en: 'and We gave him back his family, and the like of them with them, as a mercy from Us,',
          tokens: [
            { surface: 'وَآتَيْنَاهُ', lemma: 'آتَى', pos: 'verb', features: 'conj+perf.1p+3ms', gloss: 'to give; and We gave him' },
            { surface: 'أَهْلَهُ', lemma: 'أَهْل', pos: 'noun', features: 'acc+3ms', gloss: 'his family' },
            { surface: 'وَمِثْلَهُم', lemma: 'مِثْل', pos: 'noun', features: 'conj+acc+3mp', gloss: 'and the like of them' },
            { surface: 'مَّعَهُمْ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
            { surface: 'رَحْمَةً', lemma: 'رَحْمَة', pos: 'noun', features: 'indef.acc', gloss: 'as a mercy' },
            { surface: 'مِّنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِندِنَا', lemma: 'عِنْد', pos: 'noun', features: 'gen+1p', gloss: 'with Us' },
          ],
        },
        {
          id: 'qs-v10-c03-017',
          ar: '﴿وَذِكْرَىٰ لِلْعَابِدِينَ﴾.',
          en: 'and a reminder for the worshippers."',
          tokens: [
            { surface: 'وَذِكْرَىٰ', lemma: 'ذِكْرَى', pos: 'noun', features: 'conj+indef', gloss: 'and a reminder' },
            { surface: 'لِلْعَابِدِينَ', lemma: 'عَابِد', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'for the worshippers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَلْهَمَ اللَّهُ أَيُّوبَ بَعْدَ أَنْ تَمَّ الابْتِلَاءُ؟',
          options: ['الدُّعَاءَ الْمُسْتَجَابَ', 'الْغَضَبَ وَالْيَأْسَ', 'تَرْكَ الصَّلَاةِ'],
          answer: 0,
          qEn: 'What did Allah inspire Ayyūb with after the trial was complete?',
          optionsEn: ['The answered prayer', 'Anger and despair', 'Abandoning prayer'],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بِأَيُّوبَ بَعْدَ دُعَائِهِ؟',
          options: ['عَافَاهُ وَرَدَّ عَلَيْهِ مَالَهُ وَبَارَكَ لَهُ فَكَانَ أَضْعَافاً مُضَاعَفَةً', 'تَرَكَهُ فِي مِحْنَتِهِ', 'أَعْطَاهُ مَالاً قَلِيلاً فَقَط'],
          answer: 0,
          qEn: "What did Allah do for Ayyūb after his prayer?",
          optionsEn: ['Restored his health, returned his wealth, and blessed him so it multiplied manifold', 'Left him in his trial', 'Gave him only a little wealth'],
        },
        {
          q: 'مَاذَا قَالَ أَيُّوبُ فِي دُعَائِهِ كَمَا حَكَى الْقُرْآنُ؟',
          options: ['أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ', 'لِمَاذَا تَرَكْتَنِي يَا رَبِّ؟', 'لَنْ أَصْبِرَ أَكْثَرَ مِنْ هَذَا'],
          answer: 0,
          qEn: "What did Ayyūb say in his prayer, as the Qur'an narrates?",
          optionsEn: ['Indeed affliction has touched me, and You are the Most Merciful of the merciful', 'Why have You forsaken me, my Lord?', 'I will not be patient any longer'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'لَهُ فَكَشَفْنَا مَا بِهِ مِنْ ضُرٍّ.',
        en: 'So We answered him and removed what affliction was upon him.',
        options: ['فَاسْتَجَبْنَا', 'اِسْتَجَابَ', 'يَسْتَجِيبُ', 'مُسْتَجَاب'],
        answer: 0,
        rationales: [
          '1st plural perfect -- "We answered," matching the printed فَاسْتَجَبْنَا.',
          '3rd masculine singular perfect -- wrong person.',
          '3rd masculine singular imperfect -- wrong tense and person.',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أَلْهَمَهُ الدُّعَاءَ',
        post: 'الَّذِي تَجَلَّى فِيهِ عَجْزُهُ وَبُؤْسُهُ.',
        en: 'He inspired him with the answered prayer, in which his powerlessness and misery became manifest.',
        options: ['الْمُسْتَجَابَ', 'الْمُسْتَجِيبَ', 'اسْتَجَابَ', 'مُسْتَجَابٌ'],
        answer: 0,
        rationales: [
          'Definite accusative passive participle -- "answered," object of أَلْهَمَهُ, matching the printed case and definiteness.',
          'Active participle ("answering") -- wrong voice; the prayer is answered, not answering.',
          'Verb -- wrong part of speech; an adjective is needed here.',
          'Indefinite -- wrong definiteness; الدعاء is already definite so its adjective must be too.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَبَارَكَ لَهُ فِي كُلِّ ذَلِكَ، فَكَانَ',
        post: 'مُضَاعَفَةً.',
        en: 'And He blessed him in all of that, so it became manifold, redoubled.',
        options: ['أَضْعَافاً', 'ضِعْفاً', 'أَضْعَافٌ', 'الْأَضْعَافَ'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- predicate of كَانَ, matching the printed case.',
          'Singular -- wrong number; the sentence uses the plural.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Definite -- wrong definiteness; the printed predicate is indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُرِيدُ الرَّجُلُ الْخَيْرَ',
        pre: '',
        post: 'الْخَيْرَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُرِيدُ', 'يُرِيدُ', 'تُرِيدُ', 'نُرِيدُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يُرِيدُ الرَّجُلُ الْخَيْرَ',
        pre: '',
        post: 'الْخَيْرَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُرِيدُ', 'يُرِيدُ', 'تُرِيدُ', 'أُرِيدُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'يُرِيدُ الرَّجُلُ الْخَيْرَ',
        pre: '',
        post: 'الْخَيْرَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تُرِيدُ', 'يُرِيدُ', 'أُرِيدُ', 'نُرِيدُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

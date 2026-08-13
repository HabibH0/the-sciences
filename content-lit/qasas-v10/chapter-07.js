// قَصَصُ النَّبِيِّينَ, volume 10 «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»,
// chapter 7 -- وَاسْتَجَابَ اللَّهُ دُعَاءَهُ. Printed page 241 (bottom box)
// through page 242, closing the volume with the triple-rosette divider
// (volume 11, «قِصَّةُ سَيِّدِنَا زَكَرِيَّا», opens fresh on page 243 -- see
// QASAS_VOLUME_MAP.md). Transcribed by hand from the scan (vision OCR,
// 300dpi render) against ../CHAPTER-FORMAT.md.
//
// One paragraph, the volume's emotional peak: three darknesses stacked on
// Yūnus at once (the whale's belly, the sea, the night), until Allah
// inspires him with the prayer that scatters them -- quoted directly from
// the Qur'an, Sūrat al-Anbiyāʾ 21:87-88, the āyah every reader of this
// corpus will already half-know from qasas-v3 ch1's very first sentence
// echoing its closing formula. The narrator's own aside (qs-v10-c07-010
// through -015) frames the āyah before it is quoted: this is the one
// story in the whole Qur'an that comforts every wretched, despairing soul
// who has nowhere left to turn but Allah.
//
// Grammar / lexical notes:
//   -- The prose is one long chain of short coordinated clauses; split
//      here at natural clause boundaries (house convention, matching
//      qasas-v3 ch7/ch9/ch10/ch12/ch13) -- qs-v10-c07-009 folds two short
//      coordinate phrases into one entry (وَتَكْشِفُ الْكُرُبَاتِ +
//      وَتَسْتَنْزِلُ...) since each half alone is only 2 tokens, below the
//      build floor -- no rewording, same printed words and order.
//   -- أَشَدَّ / أَبْعَدَ (qs-v10-c07-005/006, both new) are elatives inside
//      the مَا أَفْعَلَ exclamatory (تعجب) construction -- tagged as their
//      own lemmas distinct from شَدِيد/بَعِيد, same convention as أَرْحَم
//      (ch3) kept distinct from رَحِيم.
//   -- ذُو النُّونِ (qs-v10-c07-016, both new) is the Qur'an's own epithet
//      for Yūnus, "the one of the fish" -- نُون is tokenized as its own
//      lemma, a near-synonym of the already-taught حُوت (ch6) but a
//      distinct printed word, matching the corpus's practice of not
//      merging distinct surface words into one lemma even when close in
//      meaning (see qasas-v3 ch1's ضَلَالَة/ضَلَال note for the reverse
//      case).
//   -- The two Qur'an āyāt (21:87, 21:88) are tokenized like ordinary
//      prose, 21:87 split into four fragments of at most 8 tokens
//      (established long-āyah convention, qasas-v2 ch14 / qasas-v3
//      ch13), each independently wrapped in ﴿﴾, mushaf text throughout,
//      including the assimilated-dāl spelling ذَّهَبَ as printed.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، فِي، بَطْن، الْحُوت
//      (this volume, ch6)، بَعْض، مَا، الظَّلَام (this volume, ch4)، السَّلَام
//      (this volume, ch6)، مَكَثَ، شَاءَ، اللَّه، أَنْ، أَلْهَمَ، الَّتِي، كَشَفَ
//      (this volume, ch3)، الرَّحْمَة، سَبْع، سَمَاء، سَمِعَ، الْقُرْآن، يَحْكِي (حَكَى)،
//      هَذِهِ، قِصَّة، كُلّ، الْأَرْض، نَفْس، رَأَى، لَا، مَلْجَأ، إِلَّا، إِذْ، ذَهَبَ،
//      مُغَاضِب (this volume, ch5)، ظَنَّ، قَدَرَ، نَادَى (this volume، ch3)،
//      إِلٰه، أَنْتَ (this volume, ch3)، سُبْحَانَ، إِنَّ، كَانَ، ظَالِم، اِسْتَجَابَ
//      (this volume, ch3)، كَذَلِكَ، مُؤْمِن، لَنْ، لَيْل
//      are all already taught and are NOT re-listed in newWords here.
//
// 22 new words (ظُلْمَة، فَوْقَ، أَشَدَّ، أَبْعَدَ، كَلِمَة، بَدَّدَ، كُرْبَة، اِسْتَنْزَلَ،
// غَرِيب، فَرِيد، سَلْوَى، بَائِس، مَلْهُوف، يَائِس، مُضْطَرِب، ضَاقَ، رَحُبَ، عِيَان،
// ذُو، نُون، نَجَّى، غَمّ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'وَاسْتَجَابَ اللَّهُ دُعَاءَهُ', en: 'And Allah Answered His Prayer' },
  newWords: [
    'ظُلْمَة', 'فَوْقَ', 'أَشَدَّ', 'أَبْعَدَ', 'كَلِمَة', 'بَدَّدَ', 'كُرْبَة', 'اِسْتَنْزَلَ',
    'غَرِيب', 'فَرِيد', 'سَلْوَى', 'بَائِس', 'مَلْهُوف', 'يَائِس', 'مُضْطَرِب', 'ضَاقَ',
    'رَحُبَ', 'عِيَان', 'ذُو', 'نُون', 'نَجَّى', 'غَمّ',
  ],
  lemmas: {
    'ظُلْمَة': { gloss: 'darkness' },
    'فَوْقَ': { gloss: 'above, atop' },
    'أَشَدَّ': { gloss: 'more/most intense' },
    'أَبْعَدَ': { gloss: 'farther, more distant' },
    'كَلِمَة': { gloss: 'word' },
    'بَدَّدَ': { gloss: 'to scatter, dispel' },
    'كُرْبَة': { gloss: 'distress, anguish' },
    'اِسْتَنْزَلَ': { gloss: 'to bring down' },
    'غَرِيب': { gloss: 'strange' },
    'فَرِيد': { gloss: 'unique' },
    'سَلْوَى': { gloss: 'comfort, solace' },
    'بَائِس': { gloss: 'distressed, wretched' },
    'مَلْهُوف': { gloss: 'grieving, distressed' },
    'يَائِس': { gloss: 'despairing' },
    'مُضْطَرِب': { gloss: 'troubled, agitated' },
    'ضَاقَ': { gloss: 'to become narrow, constricted' },
    'رَحُبَ': { gloss: 'to be vast, spacious' },
    'عِيَان': { gloss: 'plain sight, direct witnessing' },
    'ذُو': { gloss: 'possessor of, one of' },
    'نُون': { gloss: 'fish, whale' },
    'نَجَّى': { gloss: 'to save, rescue' },
    'غَمّ': { gloss: 'distress, grief' },
  },
  paragraphs: [
    {
      en: 'So he was in the darkness of the whale\'s belly, in the darkness of the sea, in the darkness of the night -- darknesses, one atop another. How intense the darkness is! And how far away peace is. He remained as long as Allah willed him to remain, then Allah inspired him with the words that scatter the darknesses, remove distresses, and bring down mercy from above seven heavens. And hear the Qur\'an narrate this strange, unique story, in which is comfort for every distressed, grieving wretch, and every despairing, troubled soul, for whom the earth has become narrow despite its vastness, whose soul has become constricted, and who has seen with his own eyes that there is no refuge from Allah except in Him: "And the man of the fish, when he went off in anger and thought that We would not decree hardship upon him, so he called out in the darknesses: There is no god but You, glory be to You -- indeed I have been among the wrongdoers. So We answered him and saved him from the distress, and thus do We save the believers."',
      sentences: [
        {
          id: 'qs-v10-c07-001',
          ar: 'فَكَانَ فِي ظُلْمَةِ بَطْنِ الْحُوتِ،',
          en: "So he was in the darkness of the whale's belly,",
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; so he was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ظُلْمَةِ', lemma: 'ظُلْمَة', pos: 'noun', features: 'gen.constr', gloss: 'the darkness of' },
            { surface: 'بَطْنِ', lemma: 'بَطْن', pos: 'noun', features: 'gen.constr', gloss: 'the belly of' },
            { surface: 'الْحُوتِ', lemma: 'حُوت', pos: 'noun', features: 'def.gen', gloss: 'the whale' },
          ],
        },
        {
          id: 'qs-v10-c07-002',
          ar: 'فِي ظُلْمَةِ الْبَحْرِ،',
          en: 'in the darkness of the sea,',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ظُلْمَةِ', lemma: 'ظُلْمَة', pos: 'noun', features: 'gen.constr', gloss: 'the darkness of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qs-v10-c07-003',
          ar: 'فِي ظُلْمَةِ اللَّيْلِ،',
          en: 'in the darkness of the night --',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ظُلْمَةِ', lemma: 'ظُلْمَة', pos: 'noun', features: 'gen.constr', gloss: 'the darkness of' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', gloss: 'the night' },
          ],
        },
        {
          id: 'qs-v10-c07-004',
          ar: 'ظُلُمَاتٌ بَعْضُهَا فَوْقَ بَعْضٍ،',
          en: 'darknesses, one atop another,',
          tokens: [
            { surface: 'ظُلُمَاتٌ', lemma: 'ظُلْمَة', pos: 'noun', features: 'pl.indef.nom', gloss: 'darknesses' },
            { surface: 'بَعْضُهَا', lemma: 'بَعْض', pos: 'noun', features: 'nom+3fs', gloss: 'some of it' },
            { surface: 'فَوْقَ', lemma: 'فَوْقَ', pos: 'prep', features: 'prep', gloss: 'above, atop' },
            { surface: 'بَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'indef.gen', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v10-c07-005',
          ar: 'فَمَا أَشَدَّ الظَّلَامَ!',
          en: 'How intense the darkness is!',
          tokens: [
            { surface: 'فَمَا', lemma: 'مَا', pos: 'part', features: 'conj+part', gloss: 'so how' },
            { surface: 'أَشَدَّ', lemma: 'أَشَدَّ', pos: 'adj', features: 'acc', gloss: 'more/most intense' },
            { surface: 'الظَّلَامَ', lemma: 'ظَلَام', pos: 'noun', features: 'def.acc', gloss: 'the darkness' },
          ],
        },
        {
          id: 'qs-v10-c07-006',
          ar: 'وَمَا أَبْعَدَ السَّلَامَ،',
          en: 'and how far away peace is,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+part', gloss: 'and how' },
            { surface: 'أَبْعَدَ', lemma: 'أَبْعَدَ', pos: 'adj', features: 'acc', gloss: 'farther, more distant' },
            { surface: 'السَّلَامَ', lemma: 'سَلَام', pos: 'noun', features: 'def.acc', gloss: 'peace' },
          ],
        },
        {
          id: 'qs-v10-c07-007',
          ar: 'وَمَكَثَ مَا شَاءَ اللَّهُ أَنْ يَمْكُثَ،',
          en: 'He remained as long as Allah willed him to remain,',
          tokens: [
            { surface: 'وَمَكَثَ', lemma: 'مَكَثَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to remain; and he remained' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'as long as' },
            { surface: 'شَاءَ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to will; willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَمْكُثَ', lemma: 'مَكَثَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remain; he remain' },
          ],
        },
        {
          id: 'qs-v10-c07-008',
          ar: 'ثُمَّ أَلْهَمَهُ اللَّهُ الْكَلِمَاتِ الَّتِي تُبَدِّدُ الظُّلُمَاتِ',
          en: 'then Allah inspired him with the words that scatter the darknesses',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'أَلْهَمَهُ', lemma: 'أَلْهَمَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to inspire; inspired him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْكَلِمَاتِ', lemma: 'كَلِمَة', pos: 'noun', features: 'def.acc.pl', gloss: 'the words' },
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'that' },
            { surface: 'تُبَدِّدُ', lemma: 'بَدَّدَ', pos: 'verb', features: 'impf.3fs', root: 'ب د د', gloss: 'to scatter, dispel; scatter' },
            { surface: 'الظُّلُمَاتِ', lemma: 'ظُلْمَة', pos: 'noun', features: 'def.acc.pl', gloss: 'the darknesses' },
          ],
        },
        {
          id: 'qs-v10-c07-009',
          ar: 'وَتَكْشِفُ الْكُرُبَاتِ وَتَسْتَنْزِلُ الرَّحْمَةَ مِنْ فَوْقِ سَبْعِ سَمَاوَاتٍ،',
          en: 'remove distresses, and bring down mercy from above seven heavens,',
          tokens: [
            { surface: 'وَتَكْشِفُ', lemma: 'كَشَفَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to remove, uncover; and remove' },
            { surface: 'الْكُرُبَاتِ', lemma: 'كُرْبَة', pos: 'noun', features: 'def.acc.pl', gloss: 'the distresses' },
            { surface: 'وَتَسْتَنْزِلُ', lemma: 'اِسْتَنْزَلَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ن ز ل', gloss: 'to bring down; and bring down' },
            { surface: 'الرَّحْمَةَ', lemma: 'رَحْمَة', pos: 'noun', features: 'def.acc', gloss: 'mercy' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'فَوْقِ', lemma: 'فَوْقَ', pos: 'noun', features: 'gen.constr', gloss: 'above' },
            { surface: 'سَبْعِ', lemma: 'سَبْع', pos: 'num', features: 'gen.constr', gloss: 'seven' },
            { surface: 'سَمَاوَاتٍ', lemma: 'سَمَاء', pos: 'noun', features: 'pl.indef.gen', gloss: 'heavens' },
          ],
        },
        {
          id: 'qs-v10-c07-010',
          ar: 'وَاسْمَعِ الْقُرْآنَ يَحْكِي هَذِهِ الْقِصَّةَ الْغَرِيبَةَ الْفَرِيدَةَ',
          en: 'And hear the Qur\'an narrate this strange, unique story,',
          tokens: [
            { surface: 'وَاسْمَعِ', lemma: 'سَمِعَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to hear; and hear!' },
            { surface: 'الْقُرْآنَ', lemma: 'قُرْآن', pos: 'proper', features: 'def.acc', gloss: "the Qur'an" },
            { surface: 'يَحْكِي', lemma: 'حَكَى', pos: 'verb', features: 'impf.3ms', gloss: 'to narrate; narrating' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقِصَّةَ', lemma: 'قِصَّة', pos: 'noun', features: 'def.acc', gloss: 'the story' },
            { surface: 'الْغَرِيبَةَ', lemma: 'غَرِيب', pos: 'adj', features: 'def.acc.f', gloss: 'strange' },
            { surface: 'الْفَرِيدَةَ', lemma: 'فَرِيد', pos: 'adj', features: 'def.acc.f', gloss: 'unique' },
          ],
        },
        {
          id: 'qs-v10-c07-011',
          ar: 'الَّتِي فِيهَا سَلْوَى لِكُلِّ بَائِسٍ مَلْهُوفٍ،',
          en: 'in which is comfort for every distressed, grieving wretch,',
          tokens: [
            { surface: 'الَّتِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.f', gloss: 'in which' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'سَلْوَى', lemma: 'سَلْوَى', pos: 'noun', features: 'nom', gloss: 'comfort, solace' },
            { surface: 'لِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+gen.constr', gloss: 'for every' },
            { surface: 'بَائِسٍ', lemma: 'بَائِس', pos: 'noun', features: 'indef.gen', gloss: 'distressed, wretched' },
            { surface: 'مَلْهُوفٍ', lemma: 'مَلْهُوف', pos: 'adj', features: 'indef.gen', gloss: 'grieving, distressed' },
          ],
        },
        {
          id: 'qs-v10-c07-012',
          ar: 'وَيَائِسٍ مُضْطَرِبٍ',
          en: 'and every despairing, troubled soul,',
          tokens: [
            { surface: 'وَيَائِسٍ', lemma: 'يَائِس', pos: 'noun', features: 'conj+indef.gen', gloss: 'and despairing' },
            { surface: 'مُضْطَرِبٍ', lemma: 'مُضْطَرِب', pos: 'adj', features: 'indef.gen', root: 'ض ر ب', gloss: 'troubled, agitated' },
          ],
        },
        {
          id: 'qs-v10-c07-013',
          ar: 'قَدْ ضَاقَتْ عَلَيْهِ الْأَرْضُ بِمَا رَحُبَتْ،',
          en: 'for whom the earth has become narrow despite its vastness,',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ضَاقَتْ', lemma: 'ضَاقَ', pos: 'verb', features: 'perf.3fs', gloss: 'to become narrow; has become narrow' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'الْأَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'def.nom', gloss: 'the earth' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'prep', features: 'prep+rel', gloss: 'despite, for all' },
            { surface: 'رَحُبَتْ', lemma: 'رَحُبَ', pos: 'verb', features: 'perf.3fs', root: 'ر ح ب', gloss: 'to be vast, spacious; it is vast' },
          ],
        },
        {
          id: 'qs-v10-c07-014',
          ar: 'وَضَاقَتْ عَلَيْهِ نَفْسُهُ،',
          en: 'whose soul has become constricted,',
          tokens: [
            { surface: 'وَضَاقَتْ', lemma: 'ضَاقَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become narrow; and has become constricted' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'نَفْسُهُ', lemma: 'نَفْس', pos: 'noun', features: 'nom+3ms', gloss: 'his soul' },
          ],
        },
        {
          id: 'qs-v10-c07-015',
          ar: 'وَرَأَى عَيَاناً أَنْ لَا مَلْجَأَ مِنَ اللَّهِ إِلَّا إِلَيْهِ.',
          en: 'and who has seen with his own eyes that there is no refuge from Allah except in Him.',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and has seen' },
            { surface: 'عَيَاناً', lemma: 'عِيَان', pos: 'noun', features: 'indef.acc', gloss: 'with his own eyes, clearly' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'مَلْجَأَ', lemma: 'مَلْجَأ', pos: 'noun', features: 'acc', gloss: 'refuge' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'in Him' },
          ],
        },
        {
          id: 'qs-v10-c07-016',
          ar: '﴿وَذَا النُّونِ إِذ ذَّهَبَ مُغَاضِبًا﴾',
          en: '"And the man of the fish, when he went off in anger,',
          tokens: [
            { surface: 'وَذَا', lemma: 'ذُو', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the possessor of' },
            { surface: 'النُّونِ', lemma: 'نُون', pos: 'noun', features: 'def.gen', gloss: 'the fish, the whale' },
            { surface: 'إِذ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'ذَّهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to go; went off' },
            { surface: 'مُغَاضِبًا', lemma: 'مُغَاضِب', pos: 'adj', features: 'indef.acc', gloss: 'angry' },
          ],
        },
        {
          id: 'qs-v10-c07-017',
          ar: '﴿فَظَنَّ أَن لَّن نَّقْدِرَ عَلَيْهِ﴾',
          en: 'and thought that We would not decree hardship upon him,',
          tokens: [
            { surface: 'فَظَنَّ', lemma: 'ظَنَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to think, suppose; and thought' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَّن', lemma: 'لَنْ', pos: 'part', features: 'neg', gloss: 'would not' },
            { surface: 'نَّقْدِرَ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.1p', gloss: 'to have power, decree; We would decree hardship' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
          ],
        },
        {
          id: 'qs-v10-c07-018',
          ar: '﴿فَنَادَىٰ فِي الظُّلُمَاتِ أَن لَّا إِلَٰهَ إِلَّا أَنتَ﴾',
          en: 'so he called out in the darknesses: There is no god but You,',
          tokens: [
            { surface: 'فَنَادَىٰ', lemma: 'نَادَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call out; so he called out' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الظُّلُمَاتِ', lemma: 'ظُلْمَة', pos: 'noun', features: 'def.gen.pl', gloss: 'the darknesses' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَّا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'إِلَٰهَ', lemma: 'إِلَٰه', pos: 'noun', features: 'acc', gloss: 'a god' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'أَنتَ', lemma: 'أَنْتَ', pos: 'part', features: 'part', gloss: 'You' },
          ],
        },
        {
          id: 'qs-v10-c07-019',
          ar: '﴿سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ﴾',
          en: 'Glory be to You -- indeed I have been among the wrongdoers."',
          tokens: [
            { surface: 'سُبْحَانَكَ', lemma: 'سُبْحَانَ', pos: 'noun', features: 'acc+2ms', gloss: 'glory be to You' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'كُنتُ', lemma: 'كَانَ', pos: 'verb', features: 'perf.1s', gloss: 'to be; have been' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الظَّالِمِينَ', lemma: 'ظَالِم', pos: 'noun', features: 'def.gen.pl', gloss: 'the wrongdoers' },
          ],
        },
        {
          id: 'qs-v10-c07-020',
          ar: '﴿فَاسْتَجَبْنَا لَهُ وَنَجَّيْنَاهُ مِنَ الْغَمِّ﴾',
          en: '"So We answered him and saved him from the distress,',
          tokens: [
            { surface: 'فَاسْتَجَبْنَا', lemma: 'اِسْتَجَابَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to answer, respond; so We answered' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
            { surface: 'وَنَجَّيْنَاهُ', lemma: 'نَجَّى', pos: 'verb', features: 'conj+perf.1p+3ms', root: 'ن ج و', gloss: 'to save, rescue; and We saved him' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْغَمِّ', lemma: 'غَمّ', pos: 'noun', features: 'def.gen', gloss: 'the distress, grief' },
          ],
        },
        {
          id: 'qs-v10-c07-021',
          ar: '﴿وَكَذَٰلِكَ نُنجِي الْمُؤْمِنِينَ﴾.',
          en: 'and thus do We save the believers."',
          tokens: [
            { surface: 'وَكَذَٰلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'نُنجِي', lemma: 'نَجَّى', pos: 'verb', features: 'impf.1p', gloss: 'to save; We save' },
            { surface: 'الْمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'def.acc.pl', gloss: 'the believers' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ كَانَتِ الظُّلُمَاتُ الَّتِي وَجَدَ يُونُسُ نَفْسَهُ فِيهَا؟',
          options: ['ظُلْمَةُ بَطْنِ الْحُوتِ وَظُلْمَةُ الْبَحْرِ وَظُلْمَةُ اللَّيْلِ', 'ظُلْمَةٌ وَاحِدَةٌ فَقَطْ', 'لَمْ يَكُنْ هُنَاكَ ظَلَامٌ إِطْلَاقاً'],
          answer: 0,
          qEn: 'How many darknesses did Yūnus find himself in?',
          optionsEn: ["The darkness of the whale's belly, the darkness of the sea, and the darkness of the night", 'Just one darkness', 'There was no darkness at all'],
        },
        {
          q: 'بِمَاذَا أَلْهَمَ اللَّهُ يُونُسَ فِي ظُلُمَاتِهِ؟',
          options: ['الْكَلِمَاتِ الَّتِي تُبَدِّدُ الظُّلُمَاتِ وَتَكْشِفُ الْكُرُبَاتِ', 'بِأَنْ يَصْبِرَ فَقَطْ دُونَ دُعَاءٍ', 'بِأَنَّهُ لَنْ يَنْجُوَ أَبَداً'],
          answer: 0,
          qEn: 'What did Allah inspire Yūnus with in his darknesses?',
          optionsEn: ['The words that scatter the darknesses and remove distresses', 'Just to be patient without any prayer', 'That he would never be saved'],
        },
        {
          q: 'مَاذَا قَالَ يُونُسُ فِي دُعَائِهِ كَمَا حَكَى الْقُرْآنُ؟',
          options: ['لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ', 'يَا رَبِّ أَخْرِجْنِي فَوْراً وَإِلَّا كَفَرْتُ', 'لَا أَسْتَحِقُّ أَنْ أُنَادِيَكَ'],
          answer: 0,
          qEn: "What did Yūnus say in his prayer, as the Qur'an narrates?",
          optionsEn: ['There is no god but You, glory be to You; indeed I have been among the wrongdoers', 'My Lord, get me out immediately or else I will disbelieve', 'I do not deserve to call upon You'],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بَعْدَ دُعَاءِ يُونُسَ؟',
          options: ['اسْتَجَابَ لَهُ وَنَجَّاهُ مِنَ الْغَمِّ', 'تَرَكَهُ فِي بَطْنِ الْحُوتِ إِلَى الأَبَدِ', 'زَادَهُ عَذَاباً'],
          answer: 0,
          qEn: "What did Allah do after Yūnus's prayer?",
          optionsEn: ['Answered him and saved him from the distress', "Left him in the whale's belly forever", 'Increased his punishment'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَكَانَ فِي ظُلْمَةِ بَطْنِ الْحُوتِ، فِي ظُلْمَةِ الْبَحْرِ، فِي ظُلْمَةِ',
        post: '.',
        en: "So he was in the darkness of the whale's belly, the darkness of the sea, the darkness of the night.",
        options: ['اللَّيْلِ', 'النَّهَارِ', 'الصُّبْحِ', 'الْغُرُوبِ'],
        answer: 0,
        rationales: [
          'Definite genitive -- matches the printed اللَّيْلِ, completing the third of the three darknesses.',
          '"the day" -- wrong meaning; the text lists three domains of darkness.',
          '"the morning" -- wrong meaning entirely.',
          '"the sunset" -- wrong meaning entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَمَا',
        post: 'الظَّلَامَ!',
        en: 'How intense the darkness is!',
        options: ['أَشَدَّ', 'شَدِيدٌ', 'أَشَدُّ', 'شَدَّ'],
        answer: 0,
        rationales: [
          'Elative accusative in the مَا أَفْعَلَ exclamatory construction -- matching the printed أَشَدَّ.',
          'Plain adjective, nominative -- wrong form for this exclamatory construction.',
          'Nominative elative -- wrong case; the تعجب pattern requires the accusative.',
          'Plain verb -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَلْهَمَهُ اللَّهُ',
        post: 'الَّتِي تُبَدِّدُ الظُّلُمَاتِ.',
        en: 'And Allah inspired him with the words that scatter the darknesses.',
        options: ['الْكَلِمَاتِ', 'الْكَلِمَةَ', 'كَلِمَاتٍ', 'الْكَلَامَ'],
        answer: 0,
        rationales: [
          'Definite accusative plural -- object of أَلْهَمَهُ, matching the printed case, number, and definiteness.',
          'Singular -- wrong number; the sentence uses the plural.',
          'Indefinite -- wrong definiteness; the printed noun is definite (referred to by الَّتِي next).',
          'Different word ("speech") -- wrong lemma for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْمَعُ الرَّجُلُ الْقُرْآنَ',
        pre: '',
        post: 'الْقُرْآنَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْمَعُ', 'يَسْمَعُ', 'تَسْمَعُ', 'نَسْمَعُ'],
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
        base: 'يَسْمَعُ الرَّجُلُ الْقُرْآنَ',
        pre: '',
        post: 'الْقُرْآنَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْمَعُ', 'يَسْمَعُ', 'تَسْمَعُ', 'أَسْمَعُ'],
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
        base: 'يَسْمَعُ الرَّجُلُ الْقُرْآنَ',
        pre: '',
        post: 'الْقُرْآنَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَسْمَعُ', 'يَسْمَعُ', 'نَسْمَعُ', 'أَسْمَعُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

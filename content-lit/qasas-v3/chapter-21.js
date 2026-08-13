// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 21 -- لَيْسَ مِنْ أَهْلِكَ.
// Printed pages 81 (from its own heading, right after ch20's closing
// line, down to the bottom) through 82 (top sentence only, the closing
// Qur'an supplication, ending right before ch22's heading بَعْدَ الطُّوفَانِ
// on the same page). Transcribed by hand from the scan (vision OCR,
// 300dpi render) against ../CHAPTER-FORMAT.md.
//
// Nūḥ calls out to his Lord in the Qur'an's own words (Sūrat Hūd
// 11:45): my son is of my family, and Your promise is true, and You
// are the most just of judges! But Allah does not look at lineage,
// only at deeds -- He does not accept intercession for those who
// associate partners with Him, and a polytheist is not of a prophet's
// family even if he is the prophet's own son. Allah alerts Nūḥ to this
// directly, quoting Sūrat Hūd 11:46: O Nūḥ, he is not of your family --
// it was an unrighteous deed, so do not ask Me about what you have no
// knowledge of; I admonish you lest you be among the ignorant. Nūḥ
// takes heed at once, turns back to Allah, and prays the Qur'an's own
// closing supplication (Hūd 11:47): my Lord, I seek refuge in You from
// asking You about what I have no knowledge of, and if You do not
// forgive me and have mercy on me, I will be among the losers.
//
// Grammar / lexical notes:
//   -- Both long Qur'an ayahs here (Hūd 11:46, qs-v3-c21-010 through
//      013; and Hūd 11:47, qs-v3-c21-015 through 018) are split across
//      several sentence entries at their natural clause boundaries, the
//      opening ﴿ on the first fragment and the closing ﴾ on the last --
//      this already has ample precedent across the corpus (e.g.
//      qasas-v2 ch19-21/22/23/24, where single long ayahs are broken
//      the same way), so it is not a new convention, just the first
//      time volume 3 needed it for an ayah this long. No rewording,
//      same printed text and order throughout.
//   -- يَانُوحُ (qs-v3-c21-010) tokenizes as ordinary يَا (full vocative
//      particle) + نُوحُ (nominative), NOT the alif-dropped pattern --
//      matches the already-documented fused-but-full-alif proper-noun
//      vocative convention from ch17 (يَاإِبْرَاهِيمُ, qasas-v1 ch5), since
//      نُوحُ is a proper noun rather than a common one.
//   -- نَبَّهَ (new, form II "to alert, make someone aware") and تَنَبَّهَ
//      (new, form V "to take heed, become alert, come to one's senses")
//      are tagged as two distinct lemmas despite sharing a root --
//      matches the corpus's distinct-lemma-per-derived-verb-form
//      convention already used for اِنْتَظَرَ beside نَظَرَ (ch17). The
//      first describes Allah alerting Nūḥ; the second describes Nūḥ's
//      own response.
//   -- شَفَاعَة (new, "intercession," a verbal noun) is a distinct lemma
//      from the already-taught verb شَفَعَ (ch20, "to intercede"),
//      matching the corpus's noun-beside-verb-same-root convention
//      already used for دَعْوَة/دَعَا and وَعْد/وَعَدَ.
//   -- أَحْكَم (new, elative "most just, wisest of judges") and حَاكِم
//      (new, "a judge") are both tagged directly, without deriving from
//      any already-taught base verb (none exists in the corpus yet for
//      this root) -- the same situation as أَشَقّ (ch20), standing alone
//      as an elative. خَاسِر (new, "a loser," an active participle) is
//      likewise tagged on its own, with no already-taught base verb
//      خَسِرَ anywhere in the corpus.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): نَادَى، رَبّ، إِنَّ،
//      ابْن، مِنْ، أَهْل، وَعْد، الْحَقّ، أَنْتَ، لَكِنَّ، اللَّه، لَا، نَظَرَ، إِلَى، بَلْ،
//      عَمَل، مُشْرِك، نَبِيّ، إِنْ، كَانَ، عَلَى، ذَلِكَ، قَالَ، لَيْسَ، غَيْر، صَالِح،
//      سَأَلَ، مَا، بِ، عِلْم، أَنْ، تَكُونَ، جَاهِل، تَابَ، غَفَرَ، رَحِمَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 10 new words (أَحْكَم، حَاكِم، نَسَب، قَبِلَ، شَفَاعَة، نَبَّهَ، تَنَبَّهَ، وَعَظَ،
// عَاذَ، خَاسِر) -- a dense chapter of abstract, near-legalistic
// vocabulary around judgment, lineage, and intercession, on top of two
// long Qur'an quotations back to back.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch21',
  title: { ar: 'لَيْسَ مِنْ أَهْلِكَ', en: 'He Is Not of Your Family' },
  newWords: ['أَحْكَم', 'حَاكِم', 'نَسَب', 'قَبِلَ', 'شَفَاعَة', 'نَبَّهَ', 'تَنَبَّهَ', 'وَعَظَ', 'عَاذَ', 'خَاسِر'],
  lemmas: {
    أَحْكَم: { gloss: 'most just, wisest (of judges)' },
    حَاكِم: { gloss: 'a judge, a ruler' },
    نَسَب: { gloss: 'lineage, kinship, ancestry' },
    قَبِلَ: { gloss: 'to accept' },
    شَفَاعَة: { gloss: 'intercession' },
    نَبَّهَ: { gloss: 'to alert, make aware' },
    تَنَبَّهَ: { gloss: 'to take heed, become alert, come to one\'s senses' },
    وَعَظَ: { gloss: 'to admonish, warn, advise' },
    عَاذَ: { gloss: 'to seek refuge' },
    خَاسِر: { gloss: 'a loser' },
  },
  paragraphs: [
    {
      en: 'And Nūḥ called out to his Lord, and said: "My Lord, my son is indeed of my family," "and Your promise is indeed true," "and You are the most just of judges." But Allah does not look at lineage, rather He looks at deeds. And Allah does not accept intercession for those who associate partners with Him.',
      sentences: [
        {
          id: 'qs-v3-c21-001',
          ar: 'وَنَادَى نُوحٌ رَّبَّهُ فَقَالَ',
          en: 'And Nūḥ called out to his Lord, and said:',
          tokens: [
            { surface: 'وَنَادَى', lemma: 'نَادَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call out; and called out' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'رَّبَّهُ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', root: 'ر ب ب', gloss: 'his Lord' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v3-c21-002',
          ar: 'رَبِّ إِنَّ ابْنِي مِنْ أَهْلِي',
          en: '"My Lord, my son is indeed of my family,"',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'my Lord (O)' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ابْنِي', lemma: 'اِبْن', pos: 'noun', features: 'acc+1s', gloss: 'my son' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'أَهْلِي', lemma: 'أَهْل', pos: 'noun', features: 'gen+1s', gloss: 'my family' },
          ],
        },
        {
          id: 'qs-v3-c21-003',
          ar: 'وَإِنَّ وَعْدَكَ الْحَقُّ',
          en: '"and Your promise is indeed true,"',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'وَعْدَكَ', lemma: 'وَعْد', pos: 'noun', features: 'acc+2ms', gloss: 'your promise' },
            { surface: 'الْحَقُّ', lemma: 'حَقّ', pos: 'noun', features: 'def.nom', gloss: 'the truth, true' },
          ],
        },
        {
          id: 'qs-v3-c21-004',
          ar: 'وَأَنتَ أَحْكَمُ الْحَاكِمِينَ﴾.',
          en: '"and You are the most just of judges."',
          tokens: [
            { surface: 'وَأَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'and you' },
            { surface: 'أَحْكَمُ', lemma: 'أَحْكَم', pos: 'noun', features: 'nom.constr', root: 'ح ك م', gloss: 'the most just of' },
            { surface: 'الْحَاكِمِينَ', lemma: 'حَاكِم', pos: 'noun', features: 'pl.def.gen', root: 'ح ك م', gloss: 'the judges' },
          ],
        },
        {
          id: 'qs-v3-c21-005',
          ar: 'وَلَكِنَّ اللَّهَ لَا يَنْظُرُ إِلَى الأَنْسَابِ',
          en: 'But Allah does not look at lineage,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْظُرُ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to look; looks' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'الأَنْسَابِ', lemma: 'نَسَب', pos: 'noun', features: 'pl.def.gen', root: 'ن س ب', gloss: 'the lineages' },
          ],
        },
        {
          id: 'qs-v3-c21-006',
          ar: 'بَلْ يَنْظُرُ إِلَى الأَعْمَالِ.',
          en: 'rather He looks at deeds.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'يَنْظُرُ', lemma: 'نَظَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to look; looks' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'الأَعْمَالِ', lemma: 'عَمَل', pos: 'noun', features: 'pl.def.gen', gloss: 'the deeds' },
          ],
        },
        {
          id: 'qs-v3-c21-007',
          ar: 'وَاللَّهُ لَا يَقْبَلُ الشَّفَاعَةَ فِي الْمُشْرِكِينَ.',
          en: 'And Allah does not accept intercession for those who associate partners with Him.',
          tokens: [
            { surface: 'وَاللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'conj+nom', gloss: 'and Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقْبَلُ', lemma: 'قَبِلَ', pos: 'verb', features: 'impf.3ms', root: 'ق ب ل', gloss: 'to accept; accepts' },
            { surface: 'الشَّفَاعَةَ', lemma: 'شَفَاعَة', pos: 'noun', features: 'def.acc', root: 'ش ف ع', gloss: 'intercession' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'الْمُشْرِكِينَ', lemma: 'مُشْرِك', pos: 'noun', features: 'pl.def.gen', gloss: 'those who associate partners with Allah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ نُوحٌ لِرَبِّهِ عَنِ ابْنِهِ؟',
          options: [
            'قَالَ: رَبِّ إِنَّ ابْنِي مِنْ أَهْلِي وَإِنَّ وَعْدَكَ الْحَقُّ وَأَنتَ أَحْكَمُ الْحَاكِمِينَ',
            'قَالَ: رَبِّ لَقَدْ نَسِيتُ ابْنِي فَاغْفِرْ لِي',
            'قَالَ: رَبِّ لا أُرِيدُ أَنْ أَرَى ابْنِي مَرَّةً أُخْرَى'
          ],
          answer: 0,
          qEn: 'What did Nūḥ say to his Lord about his son?',
          optionsEn: [
            'He said: my Lord, my son is of my family, and Your promise is true, and You are the most just of judges',
            'He said: my Lord, I forgot my son, so forgive me',
            'He said: my Lord, I do not want to see my son again'
          ],
        },
        {
          q: 'لِمَاذَا لَمْ يَكُنِ ابْنُ نُوحٍ مِنْ أَهْلِهِ عِنْدَ اللَّهِ؟',
          options: [
            'لِأَنَّ اللَّهَ لا يَنْظُرُ إِلَى الأَنْسَابِ بَلْ يَنْظُرُ إِلَى الأَعْمَالِ، وَابْنُهُ كَانَ مُشْرِكاً',
            'لِأَنَّ نُوحاً تَبَرَّأَ مِنْهُ قَبْلَ الطُّوفَانِ',
            'لِأَنَّ ابْنَ نُوحٍ عَاشَ فِي بَلَدٍ بَعِيدٍ'
          ],
          answer: 0,
          qEn: "Why was Nūḥ's son not counted among his family in Allah's sight?",
          optionsEn: [
            'Because Allah does not look at lineage, only at deeds, and his son was a polytheist',
            'Because Nūḥ disowned him before the Flood',
            'Because Nūḥ\'s son lived in a distant land'
          ],
        },
      ],
    },
    {
      en: 'And the polytheist is not of a prophet\'s family, even if he is his own son. So Allah alerted Nūḥ to that, and said: "O Nūḥ, he is not of your family;" "it was an unrighteous deed," "so do not ask Me about what you have no knowledge of;" "I admonish you lest you be among the ignorant."',
      sentences: [
        {
          id: 'qs-v3-c21-008',
          ar: 'وَلَيْسَ الْمُشْرِكُ مِنْ أَهْلِ النَّبِيِّ وَإِنْ كَانَ ابْنَهُ.',
          en: "And the polytheist is not of a prophet's family, even if he is his own son.",
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'is not; and is not' },
            { surface: 'الْمُشْرِكُ', lemma: 'مُشْرِك', pos: 'noun', features: 'def.nom', gloss: 'the polytheist' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'أَهْلِ', lemma: 'أَهْل', pos: 'noun', features: 'gen.constr', gloss: 'the family of' },
            { surface: 'النَّبِيِّ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.gen', gloss: 'the prophet' },
            { surface: 'وَإِنْ', lemma: 'إِنْ', pos: 'part', features: 'conj+part', gloss: 'even if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; he is' },
            { surface: 'ابْنَهُ', lemma: 'اِبْن', pos: 'noun', features: 'acc+3ms', gloss: 'his own son' },
          ],
        },
        {
          id: 'qs-v3-c21-009',
          ar: 'فَنَبَّهَ اللَّهُ نُوحاً عَلَى ذَلِكَ وَقَالَ:',
          en: 'So Allah alerted Nūḥ to that, and said:',
          tokens: [
            { surface: 'فَنَبَّهَ', lemma: 'نَبَّهَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ب ه', gloss: 'to alert; so alerted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'نُوحاً', lemma: 'نُوح', pos: 'proper', features: 'acc', gloss: 'Nūḥ' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v3-c21-010',
          ar: '﴿يَانُوحُ إِنَّهُ لَيْسَ مِنْ أَهْلِكَ',
          en: '"O Nūḥ, he is not of your family;"',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'نُوحُ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'أَهْلِكَ', lemma: 'أَهْل', pos: 'noun', features: 'gen+2ms', gloss: 'your family' },
          ],
        },
        {
          id: 'qs-v3-c21-011',
          ar: 'إِنَّهُ عَمَلٌ غَيْرُ صَالِحٍ',
          en: '"it was an unrighteous deed,"',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed it (was)' },
            { surface: 'عَمَلٌ', lemma: 'عَمَل', pos: 'noun', features: 'indef.nom', gloss: 'a deed' },
            { surface: 'غَيْرُ', lemma: 'غَيْر', pos: 'noun', features: 'nom.constr', gloss: 'other than, un-' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'adj', features: 'indef.gen', gloss: 'righteous' },
          ],
        },
        {
          id: 'qs-v3-c21-012',
          ar: 'فَلَا تَسْأَلْنِ مَا لَيْسَ لَكَ بِهِ عِلْمٌ',
          en: '"so do not ask Me about what you have no knowledge of;"',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so do not' },
            { surface: 'تَسْأَلْنِ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.2ms+1s', gloss: 'to ask; ask (me)' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'for you' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'عِلْمٌ', lemma: 'عِلْم', pos: 'noun', features: 'indef.nom', gloss: 'knowledge' },
          ],
        },
        {
          id: 'qs-v3-c21-013',
          ar: 'إِنِّي أَعِظُكَ أَن تَكُونَ مِنَ الْجَاهِلِينَ﴾.',
          en: '"I admonish you lest you be among the ignorant."',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَعِظُكَ', lemma: 'وَعَظَ', pos: 'verb', features: 'impf.1s+2ms', root: 'و ع ظ', gloss: 'to admonish; I admonish you' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'lest, that' },
            { surface: 'تَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.2ms', gloss: 'to be; you be' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْجَاهِلِينَ', lemma: 'جَاهِل', pos: 'noun', features: 'pl.def.gen', gloss: 'the ignorant' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'And Nūḥ took heed, and turned back to Allah, and said: "My Lord, I seek refuge in You" "from asking You about what I have no knowledge of," "and if You do not forgive me and have mercy on me," "I will be among the losers."',
      sentences: [
        {
          id: 'qs-v3-c21-014',
          ar: 'وَتَنَبَّهَ نُوحٌ وَتَابَ إِلَى اللَّهِ وَقَالَ:',
          en: 'And Nūḥ took heed, and turned back to Allah, and said:',
          tokens: [
            { surface: 'وَتَنَبَّهَ', lemma: 'تَنَبَّهَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ب ه', gloss: 'to take heed, become alert; and took heed' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'وَتَابَ', lemma: 'تَابَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to turn back, repent; and turned back' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v3-c21-015',
          ar: '﴿رَبِّ إِنِّي أَعُوذُ بِكَ',
          en: '"My Lord, I seek refuge in You"',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'my Lord (O)' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَعُوذُ', lemma: 'عَاذَ', pos: 'verb', features: 'impf.1s', root: 'ع و ذ', gloss: 'to seek refuge; I seek refuge' },
            { surface: 'بِكَ', lemma: 'بِ', pos: 'prep', features: 'prep+2ms', gloss: 'in you' },
          ],
        },
        {
          id: 'qs-v3-c21-016',
          ar: 'أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ',
          en: '"from asking You about what I have no knowledge of,"',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'from, to' },
            { surface: 'أَسْأَلَكَ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.1s+2ms', gloss: 'to ask; I ask you' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'for me' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'of it' },
            { surface: 'عِلْمٌ', lemma: 'عِلْم', pos: 'noun', features: 'indef.nom', gloss: 'knowledge' },
          ],
        },
        {
          id: 'qs-v3-c21-017',
          ar: 'وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي',
          en: '"and if You do not forgive me and have mercy on me,"',
          tokens: [
            { surface: 'وَإِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'conj+part', gloss: 'and if not' },
            { surface: 'تَغْفِرْ', lemma: 'غَفَرَ', pos: 'verb', features: 'impf.2ms', gloss: 'to forgive; You forgive' },
            { surface: 'لِي', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'me' },
            { surface: 'وَتَرْحَمْنِي', lemma: 'رَحِمَ', pos: 'verb', features: 'conj+impf.2ms+1s', gloss: 'to have mercy; and have mercy on me' },
          ],
        },
        {
          id: 'qs-v3-c21-018',
          ar: 'أَكُن مِّنَ الْخَاسِرِينَ﴾.',
          en: '"I will be among the losers."',
          tokens: [
            { surface: 'أَكُن', lemma: 'كَانَ', pos: 'verb', features: 'impf.1s', gloss: 'to be; I will be' },
            { surface: 'مِّنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْخَاسِرِينَ', lemma: 'خَاسِر', pos: 'noun', features: 'pl.def.gen', root: 'خ س ر', gloss: 'the losers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ نُوحٌ بَعْدَ أَنْ نَبَّهَهُ اللَّهُ؟',
          options: [
            'تَنَبَّهَ وَتَابَ إِلَى اللَّهِ وَقَالَ: رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ',
            'أَنْكَرَ كَلَامَ اللَّهِ وَأَصَرَّ عَلَى طَلَبِهِ',
            'تَرَكَ الدَّعْوَةَ إِلَى اللَّهِ حُزْناً عَلَى ابْنِهِ'
          ],
          answer: 0,
          qEn: 'What did Nūḥ do after Allah alerted him?',
          optionsEn: [
            'He took heed and turned back to Allah, saying: my Lord, I seek refuge in You from asking You about what I have no knowledge of',
            'He denied Allah\'s words and insisted on his request',
            'He abandoned calling people to Allah out of grief for his son'
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ نُوحٌ: رَبِّ إِنَّ ابْنِي مِنْ أَهْلِي وَإِنَّ',
        post: 'الْحَقُّ وَأَنتَ أَحْكَمُ الْحَاكِمِينَ.',
        en: 'Nūḥ said: my Lord, my son is of my family, and Your promise is true, and You are the most just of judges.',
        options: ['وَعْدَكَ', 'وَعْدَهُ', 'وَعْدِي', 'وَعْدُكَ'],
        answer: 0,
        rationales: [
          '"your promise" (accusative, subject of إِنَّ) -- matches the printed وَإِنَّ وَعْدَكَ, Nūḥ addressing Allah directly as "you."',
          '"his promise" -- wrong person; Nūḥ is speaking directly to Allah, not about a third party.',
          '"my promise" -- wrong person; it is Allah\'s promise being described, not Nūḥ\'s.',
          'Nominative form -- wrong case; اِسْمُ إِنَّ is accusative, so it must be وَعْدَكَ not وَعْدُكَ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ اللَّهَ لا يَنْظُرُ إِلَى الأَنْسَابِ بَلْ',
        post: 'إِلَى الأَعْمَالِ.',
        en: 'But Allah does not look at lineage, rather He looks at deeds.',
        options: ['يَنْظُرُ', 'نَظَرَ', 'يَنْظُرُونَ', 'انْظُرْ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- matches the printed بَلْ يَنْظُرُ, describing Allah\'s ongoing way of judging.',
          'Perfect -- wrong tense; this is a general, ongoing truth, which needs the imperfect.',
          '3rd masculine plural -- wrong number; the subject اللَّه is singular.',
          'Imperative -- wrong mood; this is a statement of fact, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ نُوحٌ: رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ، وَإِلَّا تَغْفِرْ لِي وَتَرْحَمْنِي',
        post: 'مِنَ الْخَاسِرِينَ.',
        en: 'Nūḥ said: my Lord, I seek refuge in You from asking You about what I have no knowledge of, and if You do not forgive me and have mercy on me, I will be among the losers.',
        options: ['أَكُن', 'كُنتُ', 'يَكُونُ', 'كَانَ'],
        answer: 0,
        rationales: [
          '1st singular imperfect (jawāb of the conditional) -- "I will be," matching the printed أَكُن مِّنَ الْخَاسِرِينَ.',
          'Perfect -- wrong tense/mood; the jawāb of a conditional here needs the imperfect, not the perfect.',
          '3rd masculine singular -- wrong person; Nūḥ is speaking about himself, "I," not "he."',
          '3rd masculine singular perfect -- wrong person and tense.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَنْظُرُ اللَّهُ إِلَى الأَعْمَالِ',
        pre: '',
        post: 'إِلَى الأَعْمَالِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m)',
        options: ['تَنْظُرُ', 'يَنْظُرُ', 'أَنْظُرُ', 'نَنْظُرُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَقْبَلُ اللَّهُ تَوْبَةَ الْمُؤْمِنِينَ',
        pre: '',
        post: 'تَوْبَةَ الْمُؤْمِنِينَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَقْبَلُ', 'يَقْبَلُ', 'تَقْبَلُ', 'أَقْبَلُ'],
        answer: 0,
        rationales: [
          '1st plural imperfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'تَنَبَّهَ نُوحٌ وَتَابَ إِلَى اللَّهِ',
        pre: '',
        post: 'إِلَى اللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['تَنَبَّهْتُ وَتُبْتُ', 'تَنَبَّهَ وَتَابَ', 'تَنَبَّهْتَ وَتُبْتَ', 'تَنَبَّهْنَا وَتُبْنَا'],
        answer: 0,
        rationales: [
          '1st singular perfect on both verbs -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 5 -- دَعْوَةُ صَالِحٍ.
// Printed pages 101 (from ch5's own heading box, right after ch4's closing
// rhetorical questions) - 102 (top portion only, ending before ch6's own
// box دِعَايَةُ الأَغْنِيَاءِ partway down that page). Transcribed by hand from
// the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md and
// QASAS_VOLUME_MAP.md's volume 5 table.
//
// Ṣāliḥ rises among his people and calls them, in the Qur'an's own words, to
// worship Allah alone -- but the wealthy, absorbed in eating, drinking, and
// idle amusement, are devoted to their idols and unmoved by his call. Word
// spreads among Thamūd's elite of this stranger calling to Allah and warning
// of resurrection and reckoning; when they learn he claims to be a
// messenger, they mock him outright -- a real messenger, they reason, would
// have a palace, an orchard, crops, and palm trees, none of which Ṣāliḥ has.
//
// Grammar / lexical notes:
//   -- The bracketed ﴿يَقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَٰهٍ غَيْرُهُ﴾
//      (qs-v5-c05-002, Qur'an 11:61/7:73-style) keeps the mushaf's own
//      contracted vocative spelling يَقَوْمِ (not يَا قَوْمِ), tokenized exactly
//      as qasas-v3 ch16's own precedent for this identical phrase: surface
//      'يَ' / lemma 'يَا' / features 'part', then surface 'قَوْمِ' / lemma
//      'قَوْم' / features '1s' (no case atom -- matching that file's own
//      choice for the bare munādā-muḍāf-with-elided-ي form). The LATER,
//      unbracketed occurrence of the same imperative (qs-v5-c05-011,
//      "قَالُوا: يَقُولُ: اعْبُدُوا اللَّهَ...") is plain narration reporting what
//      Ṣāliḥ says, with no vocative at all in the print -- tokenized without
//      inventing one, per the shared brief's explicit instruction on this
//      exact pair of occurrences.
//   -- مِنْ إِلَٰهٍ (qs-v5-c05-002) is مِنْ zāʾidah (the "extra" مِنْ that
//      reinforces a negation) -- still tagged pos 'prep', features 'prep',
//      since the format has no separate atom for grammatically-emphatic
//      "extra" particles; it still governs the following noun's genitive.
//      غَيْرُهُ is the (fronted) nominative predicate of the negated nominal
//      sentence مَا لَكُمْ مِنْ إِلَٰهٍ غَيْرُهُ, "you have no god other than Him."
//   -- شُغْل / أَكْل / شُرْب / لَهْو / لَعِب (qs-v5-c05-003/004) are five
//      abstract/verbal nouns introduced together in one descriptive
//      sentence; لَعِب is a distinct lemma from the already-taught verb
//      لَعِبَ despite the identical consonant skeleton (same
//      same-root-different-lemma convention as زَرْع/زِرَاعَة, ch1/ch8).
//   -- خُدَّام (qs-v5-c05-009, "the servants") is the plural of the
//      already-taught خَادِم (qasas-v5 ch4) -- not re-listed as new.
//   -- زَرْعٌ and نَخِيلٌ (qs-v5-c05-017) are introduced HERE, chapter 5, which
//      precedes chapter 8 in reading order even though chapter 8 was
//      authored first in this session -- chapter 8's own newWords list has
//      been corrected to drop both, since by the time a reader reaches
//      chapter 8 they were already taught here.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَامَ، فِي، قَوْم، قَالَ،
//      عَالٍ (أَعْلَى)، اللَّه، غَنِيّ، كَانَ، عَبَدَ، صَنَم، لَا، رَأَى، مَا، أَعْجَبَ،
//      دَعْوَة، صَالِح (qasas-v5 ch4)، غَضِبَ، ثَمُود، مَنْ، هَذَا، خَادِم (qasas-v5
//      ch4)، مَاذَا، إِنَّ، بَعَثَ، بَعْدَ، مَوْت، أَنَا، رَسُول، أَرْسَلَ، إِلَى، ضَحِكَ،
//      مِسْكِين، هَلْ، عِنْدَ، قَصْر، بُسْتَان، لِ، كَيْفَ، إِلَٰه، غَيْر
//      are all already taught and are NOT re-listed in newWords here.
//
// 9 new words (صَوْت، شُغْل، أَكْل، شُرْب، لَهْو، لَعِب، جَزَى، زَرْع، نَخِيل).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'دَعْوَةُ صَالِحٍ', en: 'The Call of Ṣāliḥ' },
  newWords: ['صَوْت', 'شُغْل', 'أَكْل', 'شُرْب', 'لَهْو', 'لَعِب', 'جَزَى', 'زَرْع', 'نَخِيل'],
  lemmas: {
    صَوْت: { gloss: 'voice, sound' },
    شُغْل: { gloss: 'business, preoccupation' },
    أَكْل: { gloss: 'eating' },
    شُرْب: { gloss: 'drinking' },
    لَهْو: { gloss: 'amusement, diversion' },
    لَعِب: { gloss: 'play' },
    جَزَى: { gloss: 'to reward, repay' },
    زَرْع: { gloss: 'a crop, planted field' },
    نَخِيل: { gloss: 'palm trees, date palms' },
  },
  paragraphs: [
    {
      en: "Ṣāliḥ stood up among his people, saying in his loudest voice: \"O my people, worship Allah -- you have no god other than Him.\" The wealthy were absorbed in eating and drinking, engrossed in amusement and play. They worshiped idols and recognized no god besides them, so Ṣāliḥ's call did not please them at all. Thamūd's wealthy grew angry and said: \"Who is this?\" The servants said: \"This is Ṣāliḥ.\" They said: \"What does he say?\" They said: \"He says: Worship Allah -- you have no god other than Him. And he says Allah will raise you after your death and repay you. And he says: I am the messenger of Allah, He has sent me to my people.\" The wealthy laughed and said: \"Poor wretch! Can this be a messenger? He has no palace and no orchard, and he has no crops and no palm trees! So how can this be a messenger?\"",
      sentences: [
        {
          id: 'qs-v5-c05-001',
          ar: 'وَقَامَ صَالِحٌ فِي قَوْمِهِ يَقُولُ بِأَعْلَى صَوْتِهِ:',
          en: 'Ṣāliḥ stood up among his people, saying in his loudest voice:',
          tokens: [
            { surface: 'وَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و م', gloss: 'to stand, rise; and rose' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; saying' },
            { surface: 'بِأَعْلَى', lemma: 'أَعْلَى', pos: 'adj', features: 'prep+constr', root: 'ع ل و', gloss: 'in the loudest of' },
            { surface: 'صَوْتِهِ', lemma: 'صَوْت', pos: 'noun', features: 'gen+3ms', root: 'ص و ت', gloss: 'his voice' },
          ],
        },
        {
          id: 'qs-v5-c05-002',
          ar: '﴿يَقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَٰهٍ غَيْرُهُ﴾.',
          en: '"O my people, worship Allah -- you have no god other than Him."',
          tokens: [
            { surface: 'يَ', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'اعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', root: 'ع ب د', gloss: 'to worship; worship!' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you, you have' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'إِلَٰهٍ', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.gen', gloss: 'a god' },
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v5-c05-003',
          ar: 'وَكَانَ الْأَغْنِيَاءُ فِي شُغْلٍ مِنَ الْأَكْلِ وَالشُّرْبِ',
          en: 'The wealthy were absorbed in eating and drinking,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'الْأَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'noun', features: 'pl.def.nom', gloss: 'the wealthy' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, absorbed in' },
            { surface: 'شُغْلٍ', lemma: 'شُغْل', pos: 'noun', features: 'indef.gen', root: 'ش غ ل', gloss: 'business, preoccupation' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'الْأَكْلِ', lemma: 'أَكْل', pos: 'noun', features: 'def.gen', root: 'أ ك ل', gloss: 'eating' },
            { surface: 'وَالشُّرْبِ', lemma: 'شُرْب', pos: 'noun', features: 'conj+def.gen', root: 'ش ر ب', gloss: 'and drinking' },
          ],
        },
        {
          id: 'qs-v5-c05-004',
          ar: 'وَكَانُوا فِي لَهْوٍ وَلَعِبٍ.',
          en: 'engrossed in amusement and play.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'لَهْوٍ', lemma: 'لَهْو', pos: 'noun', features: 'indef.gen', root: 'ل ه و', gloss: 'amusement, diversion' },
            { surface: 'وَلَعِبٍ', lemma: 'لَعِب', pos: 'noun', features: 'conj+indef.gen', root: 'ل ع ب', gloss: 'and play' },
          ],
        },
        {
          id: 'qs-v5-c05-005',
          ar: 'وَكَانُوا يَعْبُدُونَ الْأَصْنَامَ',
          en: 'They worshiped idols',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', root: 'ع ب د', gloss: 'to worship; worshiping' },
            { surface: 'الْأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v5-c05-006',
          ar: 'وَلَا يَرَوْنَ إِلَٰهاً غَيْرَهَا،',
          en: 'and recognized no god besides them,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', gloss: 'to see, regard; regard' },
            { surface: 'إِلَٰهاً', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.acc', gloss: 'a god' },
            { surface: 'غَيْرَهَا', lemma: 'غَيْر', pos: 'noun', features: 'acc+3fs', gloss: 'other than them' },
          ],
        },
        {
          id: 'qs-v5-c05-007',
          ar: 'فَمَا أَعْجَبَتْهُمْ دَعْوَةُ صَالِحٍ.',
          en: "so Ṣāliḥ's call did not please them at all.",
          tokens: [
            { surface: 'فَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'so...not' },
            { surface: 'أَعْجَبَتْهُمْ', lemma: 'أَعْجَبَ', pos: 'verb', features: 'perf.3fs+3mp', gloss: 'to please, amaze; pleased them' },
            { surface: 'دَعْوَةُ', lemma: 'دَعْوَة', pos: 'noun', features: 'constr.nom', gloss: 'the call of' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'proper', features: 'gen', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c05-008',
          ar: 'غَضِبَ أَغْنِيَاءُ ثَمُودَ',
          en: "Thamūd's wealthy grew angry",
          tokens: [
            { surface: 'غَضِبَ', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become angry; grew angry' },
            { surface: 'أَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'noun', features: 'pl.constr.nom', gloss: 'the wealthy of' },
            { surface: 'ثَمُودَ', lemma: 'ثَمُود', pos: 'proper', features: 'gen', gloss: 'Thamūd' },
          ],
        },
        {
          id: 'qs-v5-c05-009',
          ar: 'وَقَالُوا: مَنْ هَذَا؟',
          en: 'and said: "Who is this?"',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
          ],
        },
        {
          id: 'qs-v5-c05-010',
          ar: 'قَالَ الْخُدَّامُ: هَذَا صَالِحٌ.',
          en: 'The servants said: "This is Ṣāliḥ."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'الْخُدَّامُ', lemma: 'خَادِم', pos: 'noun', features: 'pl.def.nom', root: 'خ د م', gloss: 'the servants' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c05-011',
          ar: 'قَالُوا: مَاذَا يَقُولُ؟',
          en: 'They said: "What does he say?"',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; does he say' },
          ],
        },
        {
          id: 'qs-v5-c05-012',
          ar: 'قَالُوا: يَقُولُ: اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَٰهٍ غَيْرُهُ،',
          en: 'They said: "He says: Worship Allah -- you have no god other than Him.',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; he says' },
            { surface: 'اعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', root: 'ع ب د', gloss: 'to worship; worship!' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you, you have' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'إِلَٰهٍ', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.gen', gloss: 'a god' },
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v5-c05-013',
          ar: 'وَيَقُولُ إِنَّ اللَّهَ يَبْعَثُكُمْ بَعْدَ مَوْتِكُمْ وَيَجْزِيكُمْ.',
          en: 'And he says Allah will raise you after your death and repay you.',
          tokens: [
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say; and he says' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'that, indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يَبْعَثُكُمْ', lemma: 'بَعَثَ', pos: 'verb', features: 'impf.3ms+2mp', root: 'ب ع ث', gloss: 'to raise, resurrect; raises you' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'adv', features: 'adv', gloss: 'after' },
            { surface: 'مَوْتِكُمْ', lemma: 'مَوْت', pos: 'noun', features: 'gen+2mp', gloss: 'your death' },
            { surface: 'وَيَجْزِيكُمْ', lemma: 'جَزَى', pos: 'verb', features: 'conj+impf.3ms+2mp', root: 'ج ز ي', gloss: 'to reward, repay; and repays you' },
          ],
        },
        {
          id: 'qs-v5-c05-014',
          ar: 'وَيَقُولُ: أَنَا رَسُولُ اللَّهِ أَرْسَلَنِي إِلَى قَوْمِي.',
          en: 'And he says: I am the messenger of Allah, He has sent me to my people."',
          tokens: [
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say; and he says' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'رَسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'constr.nom', gloss: 'the messenger of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'أَرْسَلَنِي', lemma: 'أَرْسَلَ', pos: 'verb', features: 'perf.3ms+1s', root: 'ر س ل', gloss: 'to send; sent me' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قَوْمِي', lemma: 'قَوْم', pos: 'noun', features: 'gen+1s', gloss: 'my people' },
          ],
        },
        {
          id: 'qs-v5-c05-015',
          ar: 'ضَحِكَ الْأَغْنِيَاءُ وَقَالُوا: مِسْكِينٌ!',
          en: 'The wealthy laughed and said: "Poor wretch!',
          tokens: [
            { surface: 'ضَحِكَ', lemma: 'ضَحِكَ', pos: 'verb', features: 'perf.3ms', gloss: 'to laugh; laughed' },
            { surface: 'الْأَغْنِيَاءُ', lemma: 'غَنِيّ', pos: 'noun', features: 'pl.def.nom', gloss: 'the wealthy' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
            { surface: 'مِسْكِينٌ', lemma: 'مِسْكِين', pos: 'noun', features: 'indef.nom', gloss: 'poor wretch' },
          ],
        },
        {
          id: 'qs-v5-c05-016',
          ar: 'هَلْ يَكُونُ هَذَا رَسُولاً؟',
          en: 'Can this be a messenger?',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'is it that' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; can be' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'رَسُولاً', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', gloss: 'a messenger' },
          ],
        },
        {
          id: 'qs-v5-c05-017',
          ar: 'مَا عِنْدَهُ قَصْرٌ وَلَا بُسْتَانٌ،',
          en: 'He has no palace and no orchard,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'عِنْدَهُ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv+3ms', gloss: 'he has, with him' },
            { surface: 'قَصْرٌ', lemma: 'قَصْر', pos: 'noun', features: 'indef.nom', gloss: 'a palace' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'بُسْتَانٌ', lemma: 'بُسْتَان', pos: 'noun', features: 'indef.nom', gloss: 'an orchard' },
          ],
        },
        {
          id: 'qs-v5-c05-018',
          ar: 'وَمَا لَهُ زَرْعٌ وَلَا نَخِيلٌ!',
          en: 'and he has no crops and no palm trees!',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he has' },
            { surface: 'زَرْعٌ', lemma: 'زَرْع', pos: 'noun', features: 'indef.nom', root: 'ز ر ع', gloss: 'a crop, planted field' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَخِيلٌ', lemma: 'نَخِيل', pos: 'noun', features: 'indef.nom', root: 'ن خ ل', gloss: 'palm trees' },
          ],
        },
        {
          id: 'qs-v5-c05-019',
          ar: 'فَكَيْفَ يَكُونُ هَذَا رَسُولاً؟',
          en: 'So how can this be a messenger?"',
          tokens: [
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'so how' },
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; can be' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'رَسُولاً', lemma: 'رَسُول', pos: 'noun', features: 'indef.acc', gloss: 'a messenger' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا دَعَا صَالِحٌ قَوْمَهُ؟',
          options: ['دَعَاهُمْ إِلَى عِبَادَةِ اللَّهِ وَحْدَهُ لَا شَرِيكَ لَهُ', 'دَعَاهُمْ إِلَى عِبَادَةِ الْأَصْنَامِ', 'دَعَاهُمْ إِلَى تَرْكِ بِلَادِهِمْ'],
          answer: 0,
          qEn: 'What did Ṣāliḥ call his people to?',
          optionsEn: ['He called them to worship Allah alone, with no partner', 'He called them to worship idols', 'He called them to leave their land'],
        },
        {
          q: 'كَيْفَ كَانَ الْأَغْنِيَاءُ مَشْغُولِينَ؟',
          options: ['كَانُوا فِي شُغْلٍ مِنَ الْأَكْلِ وَالشُّرْبِ وَفِي لَهْوٍ وَلَعِبٍ', 'كَانُوا مَشْغُولِينَ بِبِنَاءِ الْمَسَاجِدِ', 'كَانُوا مَشْغُولِينَ بِنَصِيحَةِ النَّاسِ'],
          answer: 0,
          qEn: 'What were the wealthy absorbed in?',
          optionsEn: ['They were absorbed in eating, drinking, amusement, and play', 'They were busy building mosques', 'They were busy advising people'],
        },
        {
          q: 'لِمَاذَا سَخِرَ الْأَغْنِيَاءُ مِنْ صَالِحٍ حِينَ سَمِعُوا أَنَّهُ رَسُولٌ؟',
          options: ['لِأَنَّهُ لَمْ يَكُنْ عِنْدَهُ قَصْرٌ وَلَا بُسْتَانٌ وَلَا زَرْعٌ وَلَا نَخِيلٌ', 'لِأَنَّهُ كَانَ صَغِيرَ السِّنِّ جِدّاً', 'لِأَنَّهُ لَمْ يَتَكَلَّمْ بِلُغَتِهِمْ'],
          answer: 0,
          qEn: 'Why did the wealthy mock Ṣāliḥ when they heard he was a messenger?',
          optionsEn: ['Because he had no palace, no orchard, no crops, and no palm trees', 'Because he was very young', "Because he did not speak their language"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '﴿يَقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ',
        post: 'غَيْرُهُ﴾.',
        en: '"O my people, worship Allah -- you have no god other than Him."',
        options: ['إِلَٰهٍ', 'إِلَٰهٌ', 'إِلَٰهاً', 'آلِهَة'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- object of the (emphatic) preposition مِنْ, matching the printed مِنْ إِلَٰهٍ.',
          'Nominative -- wrong case for the object of a preposition.',
          'Accusative -- wrong case for the same reason.',
          'Plural -- wrong number; a single god (Allah) is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'غَضِبَ',
        post: 'ثَمُودَ وَقَالُوا: مَنْ هَذَا؟',
        en: '"Thamūd\'s wealthy grew angry and said: Who is this?"',
        options: ['أَغْنِيَاءُ', 'أَغْنِيَاءَ', 'أَغْنِيَاءِ', 'غَنِيّ'],
        answer: 0,
        rationales: [
          'Nominative, construct -- subject of غَضِبَ and first term of an إضافة with ثَمُودَ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case for the same reason.',
          'Singular -- wrong number; the text names "the wealthy" (plural).',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَمَا لَهُ',
        post: 'وَلَا نَخِيلٌ!',
        en: 'and he has no crops and no palm trees!',
        options: ['زَرْعٌ', 'زَرْعاً', 'زَرْعٍ', 'الزَّرْعُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- the delayed subject of the negated لَهُ construction, matching the printed زَرْعٌ.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong definiteness; the text introduces it indefinitely.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقُومُ الرَّجُلُ فِي قَوْمِهِ',
        pre: '',
        post: 'فِي قَوْمِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقُومُ', 'يَقُومُ', 'تَقُومُ', 'نَقُومُ'],
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
        base: 'يَقُومُ الرَّجُلُ فِي قَوْمِهِ',
        pre: '',
        post: 'فِي قَوْمِهِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَقُومُ', 'يَقُومُ', 'أَقُومُ', 'نَقُومُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَقُومُ الرَّجُلُ فِي قَوْمِهِ',
        pre: '',
        post: 'فِي قَوْمِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَقُومُونَ', 'يَقُومُ', 'تَقُومُ', 'نَقُومُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

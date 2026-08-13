// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 6 -- دَعْوَةُ هُودٍ.
// Printed pages 88 (after ch5's closing وَنَشَأَ عَلَى عَقْلٍ وَصَلَاحٍ) - 89
// (top, ending before ch7's heading جَوَابُ الْقَوْمِ). Transcribed by hand
// from a 200dpi render against ../CHAPTER-FORMAT.md.
//
// Hūd's first public address: a short direct Qur'anic quotation opens it
// (7:65/11:50), then Nadwi's own prose carries the reasoning forward --
// stones ʿĀd carved with their own hands yesterday cannot deserve worship
// today, Allah's own favors (creation, provision, wealth, succession,
// physical strength) are owed worship in return, and the closing dog/animal
// comparison argues that even unthinking creatures show more loyalty and
// sense than idol-worship does.
//
// Grammar / lexical notes:
//   -- ﴿يَاقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ﴾ (qs-v4-c06-
//      {002..006}) is split into ≤2-token fragments, the same workaround
//      already used for the 12-word quotation in qasas-v2 ch1 (see
//      QASAS_AGENT_BRIEF.md §6) -- every fragment falls under
//      BUILD_MIN_TOKENS (3), so none can enter the build stage regardless
//      of the visible case mark on إِلَهٍ. يَاقَوْمِ is split يَا + قَوْمِ,
//      the frozen construct-with-elided-1st-person-pronoun vocative already
//      tagged '1s' for يَا أَبَتِ in qasas-v2 ch1.
//   -- The same «يَا قَوْمِ» vocative recurs twice more in plain prose
//      (qs-v4-c06-{008,010}, NOT bracketed ﴿ ﴾ in the scan) -- Nadwi's own
//      paraphrase of Hūd's address, not a second Qur'anic quotation, so
//      tokenized as ordinary narrative prose like everything else.
//   -- أَفَرَأَيْتُمْ / أَوَرَأَيْتُمْ (qs-v4-c06-{020,021,022}) fuse the
//      interrogative hamza onto فَ/وَ + رَأَيْتُمْ. CHAPTER-FORMAT.md has no
//      atom for the interrogative hamza itself (see qasas-v3 ch2's header
//      note on أَلَا/أَلَمْ/أَئِنَّكَ for the general precedent), so it is
//      folded into the plain conj+perf.2mp tag with the interrogative sense
//      carried only by the gloss.
//   -- غَيْرُهُ (qs-v4-c06-006) is nominative, not genitive: «مَا لَكُمْ مِنْ
//      إِلَهٍ» is grammatically مبتدأ مؤخّر in the position of رفع despite the
//      extra مِنْ, so its بدل غَيْرُ follows that positional case -- matches
//      the visible ضمة on the page.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَامَ، هُود، في، قَوْم،
//      دَعَا، قَالَ، عَبَدَ، اللَّه، لَا، كَيْفَ، حِجَارَة، الَّذِي، هَذِهِ، نَحَتَ،
//      خَلَقَ، إِنَّ، رَزَقَ، بَارَكَ، لِ، أَمْوَال، أَوْلَاد، حَرْث، نَسْل، جَعَلَ،
//      بَعْدَ، نُوح، قُوَّة، جِسْم، كَانَ، مِنْ، حَقّ، نِعْمَة، أَنْ، كَلْب، فَارَقَ،
//      بَيْت، ظِلّ، رَأَى، تَرَكَ، سَيِّد، ذَهَبَ، حَجَر، سَجَدَ، صَنَم، هَلْ، إِنْسَان،
//      هُوَ are all already taught and NOT re-listed. يَوْم and حِجَارَة (both
//      already taught) are reused in their idiomatic/plain senses here.
//
// 7 new words this chapter: إِلَه، خَلِيفَة، رَمَى، عَظْم، تَبِعَ، أَذَلّ، أَجَلّ.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch6',
  title: { ar: 'دَعْوَةُ هُودٍ', en: 'The Call of Hūd' },
  newWords: ['إِلَه', 'خَلِيفَة', 'رَمَى', 'عَظْم', 'تَبِعَ', 'أَذَلّ', 'أَجَلّ'],
  lemmas: {
    'إِلَه': { gloss: 'god, deity' },
    'خَلِيفَة': { gloss: 'successor' },
    'رَمَى': { gloss: 'to throw' },
    'عَظْم': { gloss: 'bone' },
    'تَبِعَ': { gloss: 'to follow' },
    'أَذَلّ': { gloss: 'baser, more lowly' },
    'أَجَلّ': { gloss: 'nobler, greater' },
  },
  paragraphs: [
    {
      en: "Hūd rose among his people, calling and saying: 'O my people, worship Allah -- you have no god other than Him.' Hūd said: 'O my people, how can you worship stones and not worship the One who created you? O my people, this stone which you carved yesterday -- how can you worship it today? Indeed Allah created you and provided for you, and blessed you with wealth, children, crops, and offspring. He made you successors after Nūḥ's people, and gave you strength of body. It was the due of these blessings that you worship Allah and worship nothing besides Him. This dog, to which you throw a bone, does not leave your house and follows you like a shadow. Have you seen a dog leave its master and go to another? Have you seen an animal worship a stone, or an animal prostrate to an idol? Is man baser than the animal, or is he nobler than the animal?'",
      sentences: [
        {
          id: 'qs-v4-c06-001',
          ar: 'وَقَامَ هُودٌ فِي قَوْمِهِ يَدْعُو وَيَقُولُ:',
          en: 'Hūd rose among his people, calling and saying:',
          tokens: [
            { surface: 'وَقَامَ', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to stand, rise; and rose' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'يَدْعُو', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms', gloss: 'to call; calling' },
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say; and saying' },
          ],
        },
        {
          id: 'qs-v4-c06-002',
          ar: '﴿يَا قَوْمِ',
          en: "'O my people,",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people (frozen vocative form)' },
          ],
        },
        {
          id: 'qs-v4-c06-003',
          ar: 'اعْبُدُوا اللَّهَ',
          en: 'worship Allah;',
          tokens: [
            { surface: 'اعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', gloss: 'to worship; worship!' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v4-c06-004',
          ar: 'مَا لَكُمْ',
          en: 'you have',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
          ],
        },
        {
          id: 'qs-v4-c06-005',
          ar: 'مِنْ إِلَهٍ',
          en: 'any god',
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: '(emphatic, before a negated noun)' },
            { surface: 'إِلَهٍ', lemma: 'إِلَه', pos: 'noun', features: 'indef.gen', gloss: 'a god' },
          ],
        },
        {
          id: 'qs-v4-c06-006',
          ar: 'غَيْرُهُ﴾.',
          en: "other than Him.'",
          tokens: [
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v4-c06-007',
          ar: 'وَقَالَ هُودٌ:',
          en: 'Hūd said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c06-008',
          ar: 'يَا قَوْمِ كَيْفَ تَعْبُدُونَ الْحِجَارَةَ',
          en: "'O my people, how can you worship stones",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'تَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; do you worship' },
            { surface: 'الْحِجَارَةَ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.acc', gloss: 'stones' },
          ],
        },
        {
          id: 'qs-v4-c06-009',
          ar: 'وَلَا تَعْبُدُونَ الَّذِي خَلَقَكُمْ؟!',
          en: 'and not worship the One who created you?',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; worship' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the One who' },
            { surface: 'خَلَقَكُمْ', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+2mp', gloss: 'to create; created you' },
          ],
        },
        {
          id: 'qs-v4-c06-010',
          ar: 'يَا قَوْمِ هَذِهِ الْحِجَارَةُ الَّتِي نَحَتُّمُوهَا أَمْسِ',
          en: 'O my people, this stone which you carved yesterday --',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْحِجَارَةُ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.nom', gloss: 'stone' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'نَحَتُّمُوهَا', lemma: 'نَحَتَ', pos: 'verb', features: 'perf.2mp+3fs', gloss: 'to carve; you carved it' },
            { surface: 'أَمْسِ', lemma: 'أَمْس', pos: 'adv', features: 'adv', gloss: 'yesterday' },
          ],
        },
        {
          id: 'qs-v4-c06-011',
          ar: 'كَيْفَ تَعْبُدُونَهَا الْيَوْمَ',
          en: 'how can you worship it today?',
          tokens: [
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'تَعْبُدُونَهَا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp+3fs', gloss: 'to worship; do you worship it' },
            { surface: 'الْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'def.acc', gloss: 'today' },
          ],
        },
        {
          id: 'qs-v4-c06-012',
          ar: 'إِنَّ اللَّهَ خَلَقَكُمْ وَرَزَقَكُمْ،',
          en: 'Indeed Allah created you and provided for you,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'خَلَقَكُمْ', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+2mp', gloss: 'to create; created you' },
            { surface: 'وَرَزَقَكُمْ', lemma: 'رَزَقَ', pos: 'verb', features: 'conj+perf.3ms+2mp', gloss: 'to provide; and provided for you' },
          ],
        },
        {
          id: 'qs-v4-c06-013',
          ar: 'وَبَارَكَ لَكُمْ فِي الأَمْوَالِ وَالأَوْلَادِ وَالْحَرْثِ وَالنَّسْلِ.',
          en: 'and blessed you with wealth, children, crops, and offspring.',
          tokens: [
            { surface: 'وَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bless; and blessed' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَمْوَالِ', lemma: 'مَال', pos: 'noun', features: 'pl.def.gen', gloss: 'wealth' },
            { surface: 'وَالأَوْلَادِ', lemma: 'وَلَد', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and children' },
            { surface: 'وَالْحَرْثِ', lemma: 'حَرْث', pos: 'noun', features: 'conj+def.gen', gloss: 'and crops' },
            { surface: 'وَالنَّسْلِ', lemma: 'نَسْل', pos: 'noun', features: 'conj+def.gen', gloss: 'and offspring' },
          ],
        },
        {
          id: 'qs-v4-c06-014',
          ar: 'وَجَعَلَكُمْ خُلَفَاءَ مِنْ بَعْدِ قَوْمِ نُوحٍ',
          en: "He made you successors after Nūḥ's people,",
          tokens: [
            { surface: 'وَجَعَلَكُمْ', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3ms+2mp', gloss: 'to make; and made you' },
            { surface: 'خُلَفَاءَ', lemma: 'خَلِيفَة', pos: 'noun', features: 'pl.indef.acc', gloss: 'successors' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَعْدِ', lemma: 'بَعْد', pos: 'noun', features: 'constr.gen', gloss: 'after' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'constr.gen', gloss: 'the people of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v4-c06-015',
          ar: 'وَرَزَقَكُمْ قُوَّةً فِي الْجِسْمِ.',
          en: 'and gave you strength of body.',
          tokens: [
            { surface: 'وَرَزَقَكُمْ', lemma: 'رَزَقَ', pos: 'verb', features: 'conj+perf.3ms+2mp', gloss: 'to provide; and gave you' },
            { surface: 'قُوَّةً', lemma: 'قُوَّة', pos: 'noun', features: 'indef.acc', gloss: 'strength' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْجِسْمِ', lemma: 'جِسْم', pos: 'noun', features: 'def.gen', gloss: 'body' },
          ],
        },
        {
          id: 'qs-v4-c06-016',
          ar: 'كَانَ مِنْ حَقِّ هَذِهِ النِّعَمِ أَنْ تَعْبُدُوا اللَّهَ',
          en: 'It was the due of these blessings that you worship Allah',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; it was' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, part of' },
            { surface: 'حَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'constr.gen', gloss: 'the due of' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'النِّعَمِ', lemma: 'نِعْمَة', pos: 'noun', features: 'pl.def.gen', gloss: 'blessings' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; you worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v4-c06-017',
          ar: 'وَلَا تَعْبُدُوا غَيْرَهُ.',
          en: 'and worship nothing besides Him.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; worship' },
            { surface: 'غَيْرَهُ', lemma: 'غَيْر', pos: 'noun', features: 'acc+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v4-c06-018',
          ar: 'إِنَّ هَذَا الْكَلْبَ الَّذِي تَرْمُونَ إِلَيْهِ بِعَظْمٍ',
          en: 'This dog, to which you throw a bone,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْكَلْبَ', lemma: 'كَلْب', pos: 'noun', features: 'def.acc', gloss: 'dog' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'تَرْمُونَ', lemma: 'رَمَى', pos: 'verb', features: 'impf.2mp', gloss: 'to throw; you throw' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
            { surface: 'بِعَظْمٍ', lemma: 'عَظْم', pos: 'noun', features: 'prep+indef.gen', gloss: 'with a bone' },
          ],
        },
        {
          id: 'qs-v4-c06-019',
          ar: 'لَا يُفَارِقُ بَيْتَكُمْ وَيَتْبَعُكُمْ كَالظِّلِّ.',
          en: 'does not leave your house and follows you like a shadow.',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُفَارِقُ', lemma: 'فَارَقَ', pos: 'verb', features: 'impf.3ms', gloss: 'to leave, part from; does not leave' },
            { surface: 'بَيْتَكُمْ', lemma: 'بَيْت', pos: 'noun', features: 'acc+2mp', gloss: 'your house' },
            { surface: 'وَيَتْبَعُكُمْ', lemma: 'تَبِعَ', pos: 'verb', features: 'conj+impf.3ms+2mp', gloss: 'to follow; and follows you' },
            { surface: 'كَالظِّلِّ', lemma: 'ظِلّ', pos: 'noun', features: 'prep+def.gen', gloss: 'like the shadow' },
          ],
        },
        {
          id: 'qs-v4-c06-020',
          ar: 'أَفَرَأَيْتُمْ كَلْباً يَتْرُكُ سَيِّدَهُ وَيَذْهَبُ إِلَى غَيْرِهِ؟',
          en: 'Have you seen a dog leave its master and go to another?',
          tokens: [
            { surface: 'أَفَرَأَيْتُمْ', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.2mp', gloss: 'to see; have you seen' },
            { surface: 'كَلْباً', lemma: 'كَلْب', pos: 'noun', features: 'indef.acc', gloss: 'a dog' },
            { surface: 'يَتْرُكُ', lemma: 'تَرَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to leave; leave' },
            { surface: 'سَيِّدَهُ', lemma: 'سَيِّد', pos: 'noun', features: 'acc+3ms', gloss: 'its master' },
            { surface: 'وَيَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to go; and go' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'غَيْرِهِ', lemma: 'غَيْر', pos: 'noun', features: 'gen+3ms', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v4-c06-021',
          ar: 'أَوَرَأَيْتُمْ حَيَواناً يَعْبُدُ حَجَراً،',
          en: 'Have you seen an animal worship a stone,',
          tokens: [
            { surface: 'أَوَرَأَيْتُمْ', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.2mp', gloss: 'to see; have you (also) seen' },
            { surface: 'حَيَواناً', lemma: 'حَيَوَان', pos: 'noun', features: 'indef.acc', gloss: 'an animal' },
            { surface: 'يَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to worship; worship' },
            { surface: 'حَجَراً', lemma: 'حَجَر', pos: 'noun', features: 'indef.acc', gloss: 'a stone' },
          ],
        },
        {
          id: 'qs-v4-c06-022',
          ar: 'أَوَرَأَيْتُمْ حَيَواناً يَسْجُدُ لِصَنَمٍ؟',
          en: 'or an animal prostrate to an idol?',
          tokens: [
            { surface: 'أَوَرَأَيْتُمْ', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.2mp', gloss: 'to see; have you (also) seen' },
            { surface: 'حَيَواناً', lemma: 'حَيَوَان', pos: 'noun', features: 'indef.acc', gloss: 'an animal' },
            { surface: 'يَسْجُدُ', lemma: 'سَجَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to prostrate; prostrate' },
            { surface: 'لِصَنَمٍ', lemma: 'صَنَم', pos: 'noun', features: 'prep+indef.gen', gloss: 'to an idol' },
          ],
        },
        {
          id: 'qs-v4-c06-023',
          ar: 'هَلِ الإِنْسَانُ أَذَلُّ مِنَ الْحَيَوَانِ،',
          en: 'Is man baser than the animal,',
          tokens: [
            { surface: 'هَلِ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '(question particle) is' },
            { surface: 'الإِنْسَانُ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.nom', gloss: 'man' },
            { surface: 'أَذَلُّ', lemma: 'أَذَلّ', pos: 'adj', features: 'nom', gloss: 'baser, more lowly' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'الْحَيَوَانِ', lemma: 'حَيَوَان', pos: 'noun', features: 'def.gen', gloss: 'the animal' },
          ],
        },
        {
          id: 'qs-v4-c06-024',
          ar: 'أَمْ هُوَ أَجَلُّ مِنَ الْحَيَوَانِ؟',
          en: "or is he nobler than the animal?'",
          tokens: [
            { surface: 'أَمْ', lemma: 'أَمْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
            { surface: 'أَجَلُّ', lemma: 'أَجَلّ', pos: 'adj', features: 'nom', gloss: 'nobler, greater' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'الْحَيَوَانِ', lemma: 'حَيَوَان', pos: 'noun', features: 'def.gen', gloss: 'the animal' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَ أَمَرَ هُودٌ قَوْمَهُ في دَعْوَتِهِ؟',
          options: ['أَنْ يَعْبُدُوا اللَّهَ وَلَا يَعْبُدُوا غَيْرَهُ', 'أَنْ يَتْرُكُوا بِلَادَهُمْ', 'أَنْ يُحَارِبُوا الْأُمَمَ الْأُخْرَى'],
          answer: 0,
          qEn: 'What did Hūd command his people in his call?',
          optionsEn: ['To worship Allah alone and worship nothing besides Him', 'To leave their land', 'To fight other nations'],
        },
        {
          q: 'بِمَاذَا شَبَّهَ هُودٌ إِخْلَاصَ الْكَلْبِ لِسَيِّدِهِ؟',
          options: ['لَا يُفَارِقُ بَيْتَهُ وَيَتْبَعُهُ كَالظِّلِّ', 'يَنَامُ طَوَالَ الْيَوْمِ', 'يَخَافُ مِنْ كُلِّ أَحَدٍ'],
          answer: 0,
          qEn: "How did Hūd describe a dog's loyalty to its master?",
          optionsEn: ['It never leaves his house and follows him like a shadow', 'It sleeps all day', 'It is afraid of everyone'],
        },
        {
          q: 'مَاذَا سَأَلَ هُودٌ قَوْمَهُ عَنِ الإِنْسَانِ وَالْحَيَوَانِ؟',
          options: ['هَلِ الإِنْسَانُ أَذَلُّ مِنَ الْحَيَوَانِ أَمْ أَجَلُّ مِنْهُ', 'كَمْ عَدَدُ الْحَيَوَانَاتِ في الأَرْضِ', 'أَيُّ حَيَوَانٍ أَقْوَى'],
          answer: 0,
          qEn: 'What did Hūd ask his people about man and the animal?',
          optionsEn: ['Whether man is baser or nobler than the animal', 'How many animals are on the earth', 'Which animal is strongest'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'إِنَّ اللَّهَ',
        post: 'وَرَزَقَكُمْ.',
        en: 'Indeed Allah created you and provided for you.',
        options: ['خَلَقَكُمْ', 'خَلَقَنَا', 'خَلَقْتُمْ', 'يَخْلُقُكُمْ'],
        answer: 0,
        rationales: [
          '3rd masculine singular + "you (pl.)" -- matches اللَّهَ as subject and قَوْمِ هُودٍ as object, in the perfect like the following وَرَزَقَكُمْ.',
          '"created us" -- wrong object; the address is to ʿĀd (you), not the speaker.',
          '"you created" -- wrong subject; the verb belongs to Allah, not to the addressees.',
          'Imperfect -- wrong tense; this is a completed, foundational act, matching the perfect وَرَزَقَكُمْ beside it.',
        ],
      },
      {
        type: 'cloze',
        pre: 'يَا قَوْمِ كَيْفَ',
        post: 'الْحِجَارَةَ وَلَا تَعْبُدُونَ الَّذِي خَلَقَكُمْ؟',
        en: 'O my people, how can you worship stones and not worship the One who created you?',
        options: ['تَعْبُدُونَ', 'يَعْبُدُونَ', 'تَعْبُدُ', 'نَعْبُدُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches the addressed قَوْم (Hūd speaking directly to his people).',
          '3rd masculine plural -- wrong person; this is direct address, not a report about "them".',
          '2nd masculine singular -- wrong number; Hūd addresses the whole people.',
          '1st plural -- wrong person; Hūd is not including himself among the idol-worshipers.',
        ],
      },
      {
        type: 'cloze',
        pre: 'هَلِ الإِنْسَانُ أَذَلُّ مِنَ الْحَيَوَانِ، أَمْ هُوَ',
        post: 'مِنَ الْحَيَوَانِ؟',
        en: 'Is man baser than the animal, or is he nobler than the animal?',
        options: ['أَجَلُّ', 'أَذَلُّ', 'أَجْمَلُ', 'أَقْوَى'],
        answer: 0,
        rationales: [
          '"Nobler" -- completes the rhetorical either/or pair against أَذَلُّ ("baser") already used in the first half.',
          "Repeats 'baser' -- wrong; the sentence's أَمْ (\"or\") signals the opposite extreme, not a repeat.",
          '"More beautiful" -- wrong meaning; not the contrast Hūd is drawing.',
          '"Stronger" -- wrong meaning; the passage contrasts dignity/baseness, not physical strength.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تَعْبُدُ الْحِجَارَةَ',
        pre: '',
        post: 'الْحِجَارَةَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['تَعْبُدُونَ', 'تَعْبُدُ', 'يَعْبُدُ', 'نَعْبُدُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '2nd masculine singular -- you (sg.), the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'تَعْبُدُ الْحِجَارَةَ',
        pre: '',
        post: 'الْحِجَارَةَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَعْبُدُونَ', 'تَعْبُدُ', 'نَعْبُدُ', 'أَعْبُدُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '2nd masculine singular -- you (sg.), the form already given.',
          '1st plural -- we.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'تَعْبُدُ الْحِجَارَةَ',
        pre: '',
        post: 'الْحِجَارَةَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَعْبُدُ', 'تَعْبُدُ', 'يَعْبُدُونَ', 'أَعْبُدُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '2nd masculine singular -- you (sg.), the form already given.',
          '3rd masculine plural -- they.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

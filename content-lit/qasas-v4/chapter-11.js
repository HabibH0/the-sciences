// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 11 -- الْعَذَابُ.
// Printed pages 93 (after ch10's closing سَفَاهَتِهِمْ) - 95 (closing with a
// triple-rosette divider after this chapter -- the last chapter of the
// volume). Transcribed by hand from a 200dpi render against
// ../CHAPTER-FORMAT.md.
//
// The climax and the volume's title-giving chapter: a long-awaited rain
// cloud turns out to be the promised punishment itself. An eight-day,
// seven-night storm (الْعَاصِفَةُ) uproots trees, flattens houses, and drives
// everyone into hiding, closing on a direct Qur'anic quotation (11:43) as
// the storm rages, then the aftermath -- ʿĀd's dead scattered like fallen
// palm trunks -- and Hūd and the believers alone saved, sealed by a second,
// longer Qur'anic quotation (11:60) that closes both the chapter and the
// volume.
//
// Grammar / lexical notes:
//   -- سَحَاب (collective 'cloud(s)') and سَحَابَة (the singular-of-unity
//      'a cloud') are tagged as two distinct new lemmas even though they
//      share a root -- CHAPTER-FORMAT.md lemmas are exact dictionary forms,
//      matching how this volume's ch2 already separated نِعْمَة from its
//      plural النِّعَم as the same lemma, but keeps unrelated derivational
//      pairs (like ch9's نَفَعَ/نَفْع) apart.
//   -- Repeated lines (qs-v4-c11-{008,009} هَذِهِ سَحَابَةُ مَطَرٍ!, qs-v4-c11-
//      {012,013} سَحَابَةُ مَطَرٍ!) are each kept as their own sentence entry,
//      verbatim, matching the repeated-line precedent already documented in
//      qasas-v3 ch2's header note.
//   -- ﴿لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ﴾ (11:43) and the closing ﴿أَلَا إِنَّ
//      عَاداً كَفَرُوا رَبَّهُمْ أَلَا بُعْداً لِعَادٍ قَوْمِ هُودٍ﴾ (11:60) are both split
//      into ≤2-token fragments per the house convention (this volume's ch6
//      header note). عَاصِمَ in the first is لَا النَّافِيَةُ لِلْجِنْسِ's mabnī noun,
//      tagged indef.acc like the volume's other لَا شُغْلَ / لَا سَاكِنَ instances
//      (ch4's header note).
//   -- أَلَا (qs-v4-c11-{018 fragments}) is tagged part+neg both times per
//      the mechanical hamza+لَا fusion convention already established
//      (qasas-v3 ch2), even though its function here is the attention-
//      getting استفتاحية particle "Indeed!" rather than a rhetorical
//      question -- the gloss carries the real sense.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، عَادٍ، اِنْتَظَرَ،
//      مَطَر، كُلّ، يَوْم، نَظَرَ، إِلَى، سَمَاء، لَا، رَأَى، قِطْعَة، في، حَاجَة، عَظِيم،
//      ذَات، أَتَى، فَرِحَ، جِدًّا، هَذِهِ، لَكِنَّ، هُود، فَهِمَ، أَنَّ، عَذَاب، قَدْ، جَاءَ،
//      قَالَ، لَيْسَ، هَذَا، رَحْمَة، بَلْ، هُوَ، رِيح، أَلِيم، شَدِيد، مِثْل، سَمِعَ، بَاب،
//      أُمّ، بَكَى، نِسَاء، رَجُل، دَعَا، عَاصِم، أَمْر، اللَّه، سَبْع، لَيْلَة، أَيَّام، مَاتَ،
//      الْقَوْم، الأَرْض، مَنْظَر، طَيْر، أَكَلَ، سَكَنَ، نَجَا، مُؤْمِن، هَلَكَ، كُفْر، دَخَلَ،
//      بَعِيد، نَادَى are all already taught and NOT re-listed.
//
// 28 new words this chapter: هَبَّ، شَجَرَة، هَدَمَ، دَابَّة، طَارَ، رَمَل، صَحْرَاء،
// أَظْلَمَ، رُعْب، أَغْلَقَ، اِعْتَنَقَ، جِدَار، حُجْرَة، صَاحَ، اِسْتَغَاثَ، نَخِيل، غَرِيب،
// مَيِّت، خَرَاب، بُومَة، إِيمَان، شَوْق، قَلَعَ، عَاصِفَة، رَقَصَ، سَحَابَة، ثَمَانِيَة،
// عِنَاد، سَحَاب.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'الْعَذَابُ', en: 'The Punishment' },
  newWords: [
    'هَبَّ', 'شَجَرَة', 'هَدَمَ', 'دَابَّة', 'طَارَ', 'رَمَل', 'صَحْرَاء', 'أَظْلَمَ', 'رُعْب', 'أَغْلَقَ',
    'اِعْتَنَقَ', 'جِدَار', 'حُجْرَة', 'صَاحَ', 'اِسْتَغَاثَ', 'نَخِيل', 'غَرِيب', 'مَيِّت', 'خَرَاب', 'بُومَة',
    'إِيمَان', 'شَوْق', 'قَلَعَ', 'عَاصِفَة', 'رَقَصَ', 'سَحَابَة', 'ثَمَانِيَة', 'عِنَاد', 'سَحَاب',
  ],
  lemmas: {
    'هَبَّ': { gloss: 'to blow (of wind)' },
    'شَجَرَة': { gloss: 'tree' },
    'هَدَمَ': { gloss: 'to demolish' },
    'دَابَّة': { gloss: 'animal, beast' },
    'طَارَ': { gloss: 'to fly' },
    'رَمَل': { gloss: 'sand' },
    'صَحْرَاء': { gloss: 'desert' },
    'أَظْلَمَ': { gloss: 'to grow dark' },
    'رُعْب': { gloss: 'terror' },
    'أَغْلَقَ': { gloss: 'to close, lock' },
    'اِعْتَنَقَ': { gloss: 'to embrace, cling to' },
    'جِدَار': { gloss: 'wall' },
    'حُجْرَة': { gloss: 'room' },
    'صَاحَ': { gloss: 'to shout, cry out' },
    'اِسْتَغَاثَ': { gloss: 'to cry for help' },
    'نَخِيل': { gloss: 'palm trees' },
    'غَرِيب': { gloss: 'strange' },
    'مَيِّت': { gloss: 'dead' },
    'خَرَاب': { gloss: 'ruin' },
    'بُومَة': { gloss: 'owl' },
    'إِيمَان': { gloss: 'faith' },
    'شَوْق': { gloss: 'longing' },
    'قَلَعَ': { gloss: 'to uproot' },
    'عَاصِفَة': { gloss: 'storm' },
    'رَقَصَ': { gloss: 'to dance' },
    'سَحَابَة': { gloss: 'a cloud' },
    'ثَمَانِيَة': { gloss: 'eight' },
    'عِنَاد': { gloss: 'obstinacy' },
    'سَحَاب': { gloss: 'clouds' },
  },
  paragraphs: [
    {
      en: "ʿĀd used to await the rain every day and look at the sky, yet see no piece of cloud. They were in need of rain, and had a great longing for rain. One day they saw a cloud coming toward them, and they rejoiced greatly. They shouted: 'This is a rain cloud! This is a rain cloud!' The people danced with joy, and called to one another, saying: 'A rain cloud! A rain cloud!' But Hūd understood that the punishment had come. Hūd said to them: 'This is not a cloud of mercy, rather it is a wind carrying a painful punishment.' And so it was, for a severe wind blew, the like of which people had never seen, nor had people heard of its like. The storm blew, uprooting trees, demolishing houses, carrying off animals, and throwing them to a distant place. The sands of the desert flew up, and the world grew dark, so that man could see nothing. Terror entered them, so they entered their houses and locked their doors. The children clung to their mothers, the people clung to the walls, and the people went into the inner rooms. The children were crying, the women were screaming, and the men were calling out and crying for help. And it was as if a voice were saying: 'There is no protector today from the command of Allah.' That lasted seven nights and eight days. The people died, and became like fallen palm trees on the ground, and it was a very strange sight -- the people lying dead, eaten by the birds, and the houses in ruins, inhabited by owls. Hūd and the believers were saved by their faith, and ʿĀd perished through their disbelief and obstinacy. 'Indeed! ʿĀd disbelieved in their Lord. Indeed! Away with ʿĀd, the people of Hūd.'",
      sentences: [
        {
          id: 'qs-v4-c11-001',
          ar: 'وَكَانَ عَادٌ يَنْتَظِرُونَ الْمَطَرَ كُلَّ يَوْمٍ',
          en: 'ʿĀd used to await the rain every day',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'يَنْتَظِرُونَ', lemma: 'اِنْتَظَرَ', pos: 'verb', features: 'impf.3mp', gloss: 'to await; awaited' },
            { surface: 'الْمَطَرَ', lemma: 'مَطَر', pos: 'noun', features: 'def.acc', gloss: 'the rain' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
          ],
        },
        {
          id: 'qs-v4-c11-002',
          ar: 'وَيَنْظُرُونَ إِلَى السَّمَاءِ',
          en: 'and look at the sky,',
          tokens: [
            { surface: 'وَيَنْظُرُونَ', lemma: 'نَظَرَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to look; and look' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'the sky' },
          ],
        },
        {
          id: 'qs-v4-c11-003',
          ar: 'فَلَا يَرَوْنَ قِطْعَةَ سَحَابٍ.',
          en: 'yet see no piece of cloud.',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'yet not' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', gloss: 'to see; see' },
            { surface: 'قِطْعَةَ', lemma: 'قِطْعَة', pos: 'noun', features: 'acc.constr', gloss: 'a piece of' },
            { surface: 'سَحَابٍ', lemma: 'سَحَاب', pos: 'noun', features: 'indef.gen', gloss: 'cloud' },
          ],
        },
        {
          id: 'qs-v4-c11-004',
          ar: 'وَكَانُوا فِي حَاجَةٍ إِلَى الْمَطَرِ،',
          en: 'They were in need of rain,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'حَاجَةٍ', lemma: 'حَاجَة', pos: 'noun', features: 'indef.gen', gloss: 'need' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْمَطَرِ', lemma: 'مَطَر', pos: 'noun', features: 'def.gen', gloss: 'the rain' },
          ],
        },
        {
          id: 'qs-v4-c11-005',
          ar: 'وَكَانَ لَهُمْ شَوْقٌ عَظِيمٌ إِلَى الْمَطَرِ.',
          en: 'and had a great longing for rain.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them, they had' },
            { surface: 'شَوْقٌ', lemma: 'شَوْق', pos: 'noun', features: 'indef.nom', gloss: 'a longing' },
            { surface: 'عَظِيمٌ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.nom', gloss: 'great' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'الْمَطَرِ', lemma: 'مَطَر', pos: 'noun', features: 'def.gen', gloss: 'the rain' },
          ],
        },
        {
          id: 'qs-v4-c11-006',
          ar: 'ذَاتَ يَوْمٍ رَأَوْا سَحَابَةً تَأْتِي إِلَيْهِمْ،',
          en: 'One day they saw a cloud coming toward them,',
          tokens: [
            { surface: 'ذَاتَ', lemma: 'ذَات', pos: 'noun', features: 'acc.constr', gloss: 'one (day)' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
            { surface: 'رَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'perf.3mp', gloss: 'to see; they saw' },
            { surface: 'سَحَابَةً', lemma: 'سَحَابَة', pos: 'noun', features: 'indef.acc', gloss: 'a cloud' },
            { surface: 'تَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3fs', gloss: 'to come; coming' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'toward them' },
          ],
        },
        {
          id: 'qs-v4-c11-007',
          ar: 'فَفَرِحُوا جِدًّا.',
          en: 'and they rejoiced greatly.',
          tokens: [
            { surface: 'فَفَرِحُوا', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to rejoice; and rejoiced' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'greatly' },
          ],
        },
        {
          id: 'qs-v4-c11-008',
          ar: 'وَصَاحُوا:',
          en: 'They shouted:',
          tokens: [
            { surface: 'وَصَاحُوا', lemma: 'صَاحَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to shout; and shouted' },
          ],
        },
        {
          id: 'qs-v4-c11-009',
          ar: 'هَذِهِ سَحَابَةُ مَطَرٍ!',
          en: "'This is a rain cloud!",
          tokens: [
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'سَحَابَةُ', lemma: 'سَحَابَة', pos: 'noun', features: 'constr.nom', gloss: 'a cloud of' },
            { surface: 'مَطَرٍ', lemma: 'مَطَر', pos: 'noun', features: 'indef.gen', gloss: 'rain' },
          ],
        },
        {
          id: 'qs-v4-c11-010',
          ar: 'هَذِهِ سَحَابَةُ مَطَرٍ!',
          en: "This is a rain cloud!'",
          tokens: [
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'سَحَابَةُ', lemma: 'سَحَابَة', pos: 'noun', features: 'constr.nom', gloss: 'a cloud of' },
            { surface: 'مَطَرٍ', lemma: 'مَطَر', pos: 'noun', features: 'indef.gen', gloss: 'rain' },
          ],
        },
        {
          id: 'qs-v4-c11-011',
          ar: 'وَرَقَصَ النَّاسُ فَرَحاً،',
          en: 'The people danced with joy,',
          tokens: [
            { surface: 'وَرَقَصَ', lemma: 'رَقَصَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to dance; and danced' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'فَرَحاً', lemma: 'فَرَح', pos: 'noun', features: 'indef.acc', gloss: 'in joy' },
          ],
        },
        {
          id: 'qs-v4-c11-012',
          ar: 'وَنَادَى بَعْضُهُمْ بَعْضاً وَقَالُوا:',
          en: 'and called to one another, saying:',
          tokens: [
            { surface: 'وَنَادَى', lemma: 'نَادَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to call out; and called' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', gloss: 'some of them' },
            { surface: 'بَعْضاً', lemma: 'بَعْض', pos: 'noun', features: 'indef.acc', gloss: 'others' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v4-c11-013',
          ar: 'سَحَابَةُ مَطَرٍ!',
          en: "'A rain cloud!",
          tokens: [
            { surface: 'سَحَابَةُ', lemma: 'سَحَابَة', pos: 'noun', features: 'constr.nom', gloss: 'a cloud of' },
            { surface: 'مَطَرٍ', lemma: 'مَطَر', pos: 'noun', features: 'indef.gen', gloss: 'rain' },
          ],
        },
        {
          id: 'qs-v4-c11-014',
          ar: 'سَحَابَةُ مَطَرٍ!',
          en: "A rain cloud!'",
          tokens: [
            { surface: 'سَحَابَةُ', lemma: 'سَحَابَة', pos: 'noun', features: 'constr.nom', gloss: 'a cloud of' },
            { surface: 'مَطَرٍ', lemma: 'مَطَر', pos: 'noun', features: 'indef.gen', gloss: 'rain' },
          ],
        },
        {
          id: 'qs-v4-c11-015',
          ar: 'وَلَكِنَّ هُوداً فَهِمَ أَنَّ الْعَذَابَ قَدْ جَاءَ.',
          en: 'But Hūd understood that the punishment had come.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'هُوداً', lemma: 'هُود', pos: 'proper', features: 'acc', gloss: 'Hūd' },
            { surface: 'فَهِمَ', lemma: 'فَهِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to understand; understood' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْعَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'def.acc', gloss: 'the punishment' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', gloss: 'to come; had come' },
          ],
        },
        {
          id: 'qs-v4-c11-016',
          ar: 'وَقَالَ لَهُمْ هُودٌ:',
          en: 'Hūd said to them:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c11-017',
          ar: 'لَيْسَ هَذَا سَحَابَ رَحْمَةٍ،',
          en: "'This is not a cloud of mercy,",
          tokens: [
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'سَحَابَ', lemma: 'سَحَاب', pos: 'noun', features: 'acc.constr', gloss: 'a cloud of' },
            { surface: 'رَحْمَةٍ', lemma: 'رَحْمَة', pos: 'noun', features: 'indef.gen', gloss: 'mercy' },
          ],
        },
        {
          id: 'qs-v4-c11-018',
          ar: 'بَلْ هُوَ رِيحٌ فِيهَا عَذَابٌ أَلِيمٌ.',
          en: "rather it is a wind carrying a painful punishment.'",
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'رِيحٌ', lemma: 'رِيح', pos: 'noun', features: 'indef.nom', gloss: 'a wind' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'عَذَابٌ', lemma: 'عَذَاب', pos: 'noun', features: 'indef.nom', gloss: 'a punishment' },
            { surface: 'أَلِيمٌ', lemma: 'أَلِيم', pos: 'adj', features: 'indef.nom', gloss: 'painful' },
          ],
        },
        {
          id: 'qs-v4-c11-019',
          ar: 'وَكَانَ كَذَلِكَ،',
          en: 'And so it was,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'كَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'adv', gloss: 'so, thus' },
          ],
        },
        {
          id: 'qs-v4-c11-020',
          ar: 'فَقَدْ هَبَّتْ رِيحٌ شَدِيدَةٌ مَا رَأَى النَّاسُ مِثْلَهَا،',
          en: 'for a severe wind blew, the like of which people had never seen,',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'for indeed' },
            { surface: 'هَبَّتْ', lemma: 'هَبَّ', pos: 'verb', features: 'perf.3fs', gloss: 'to blow; blew' },
            { surface: 'رِيحٌ', lemma: 'رِيح', pos: 'noun', features: 'indef.nom', gloss: 'a wind' },
            { surface: 'شَدِيدَةٌ', lemma: 'شَدِيد', pos: 'adj', features: 'indef.nom.f', gloss: 'severe' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', gloss: 'to see; had seen' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'people' },
            { surface: 'مِثْلَهَا', lemma: 'مِثْل', pos: 'noun', features: 'acc+3fs', gloss: 'the like of it' },
          ],
        },
        {
          id: 'qs-v4-c11-021',
          ar: 'وَمَا سَمِعَ النَّاسُ بِمِثْلِهَا.',
          en: 'nor had people heard of its like.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'سَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to hear; had heard' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'people' },
            { surface: 'بِمِثْلِهَا', lemma: 'مِثْل', pos: 'noun', features: 'prep+gen+3fs', gloss: 'of the like of it' },
          ],
        },
        {
          id: 'qs-v4-c11-022',
          ar: 'وَهَبَّتِ الْعَاصِفَةُ تَقْلَعُ الأَشْجَارَ،',
          en: 'The storm blew, uprooting trees,',
          tokens: [
            { surface: 'وَهَبَّتِ', lemma: 'هَبَّ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to blow; and blew' },
            { surface: 'الْعَاصِفَةُ', lemma: 'عَاصِفَة', pos: 'noun', features: 'def.nom', gloss: 'the storm' },
            { surface: 'تَقْلَعُ', lemma: 'قَلَعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to uproot; uprooting' },
            { surface: 'الأَشْجَارَ', lemma: 'شَجَرَة', pos: 'noun', features: 'pl.def.acc', gloss: 'the trees' },
          ],
        },
        {
          id: 'qs-v4-c11-023',
          ar: 'وَتَهْدِمُ الْبُيُوتَ،',
          en: 'demolishing houses,',
          tokens: [
            { surface: 'وَتَهْدِمُ', lemma: 'هَدَمَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to demolish; demolishing' },
            { surface: 'الْبُيُوتَ', lemma: 'بَيْت', pos: 'noun', features: 'pl.def.acc', gloss: 'houses' },
          ],
        },
        {
          id: 'qs-v4-c11-024',
          ar: 'وَتَحْمِلُ الدَّوَابَّ،',
          en: 'carrying off animals,',
          tokens: [
            { surface: 'وَتَحْمِلُ', lemma: 'حَمَلَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to carry; carrying' },
            { surface: 'الدَّوَابَّ', lemma: 'دَابَّة', pos: 'noun', features: 'pl.def.acc', gloss: 'animals' },
          ],
        },
        {
          id: 'qs-v4-c11-025',
          ar: 'وَتَرْمِيهَا إِلَى مَكَانٍ بَعِيدٍ.',
          en: 'and throwing them to a distant place.',
          tokens: [
            { surface: 'وَتَرْمِيهَا', lemma: 'رَمَى', pos: 'verb', features: 'conj+impf.3fs+3fs', gloss: 'to throw; and throwing them' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'بَعِيدٍ', lemma: 'بَعِيد', pos: 'adj', features: 'indef.gen', gloss: 'far, distant' },
          ],
        },
        {
          id: 'qs-v4-c11-026',
          ar: 'وَطَارَتْ رِمَالُ الصَّحْرَاءِ،',
          en: 'The sands of the desert flew up,',
          tokens: [
            { surface: 'وَطَارَتْ', lemma: 'طَارَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to fly; and flew' },
            { surface: 'رِمَالُ', lemma: 'رَمَل', pos: 'noun', features: 'pl.constr.nom', gloss: 'the sands of' },
            { surface: 'الصَّحْرَاءِ', lemma: 'صَحْرَاء', pos: 'noun', features: 'def.gen', gloss: 'the desert' },
          ],
        },
        {
          id: 'qs-v4-c11-027',
          ar: 'وَأَظْلَمَتِ الدُّنْيَا فَلَا يَرَى الإِنْسَانُ شَيْئاً.',
          en: 'and the world grew dark, so that man could see nothing.',
          tokens: [
            { surface: 'وَأَظْلَمَتِ', lemma: 'أَظْلَمَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to grow dark; and grew dark' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'def.nom', gloss: 'the world' },
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so not' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', gloss: 'to see; could see' },
            { surface: 'الإِنْسَانُ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.nom', gloss: 'man' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v4-c11-028',
          ar: 'وَدَخَلَهُمُ الرُّعْبُ',
          en: 'Terror entered them,',
          tokens: [
            { surface: 'وَدَخَلَهُمُ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to enter; and entered them' },
            { surface: 'الرُّعْبُ', lemma: 'رُعْب', pos: 'noun', features: 'def.nom', gloss: 'terror' },
          ],
        },
        {
          id: 'qs-v4-c11-029',
          ar: 'فَدَخَلُوا بُيُوتَهُمْ وَأَغْلَقُوا أَبْوَابَهَا.',
          en: 'so they entered their houses and locked their doors.',
          tokens: [
            { surface: 'فَدَخَلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to enter; so they entered' },
            { surface: 'بُيُوتَهُمْ', lemma: 'بَيْت', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their houses' },
            { surface: 'وَأَغْلَقُوا', lemma: 'أَغْلَقَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to close, lock; and locked' },
            { surface: 'أَبْوَابَهَا', lemma: 'بَاب', pos: 'noun', features: 'pl.acc+3fs', gloss: 'their doors' },
          ],
        },
        {
          id: 'qs-v4-c11-030',
          ar: 'وَاعْتَنَقَ الأَطْفَالُ بِالأُمَّهَاتِ،',
          en: 'The children clung to their mothers,',
          tokens: [
            { surface: 'وَاعْتَنَقَ', lemma: 'اِعْتَنَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to cling, embrace; and clung' },
            { surface: 'الأَطْفَالُ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.nom', gloss: 'the children' },
            { surface: 'بِالأُمَّهَاتِ', lemma: 'أُمّ', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'to their mothers' },
          ],
        },
        {
          id: 'qs-v4-c11-031',
          ar: 'وَاعْتَنَقَ النَّاسُ بِالْجُدْرَانِ،',
          en: 'the people clung to the walls,',
          tokens: [
            { surface: 'وَاعْتَنَقَ', lemma: 'اِعْتَنَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to cling, embrace; and clung' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'بِالْجُدْرَانِ', lemma: 'جِدَار', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'to the walls' },
          ],
        },
        {
          id: 'qs-v4-c11-032',
          ar: 'وَدَخَلَ النَّاسُ الْحُجُرَاتِ.',
          en: 'and the people went into the inner rooms.',
          tokens: [
            { surface: 'وَدَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to enter; and entered' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'الْحُجُرَاتِ', lemma: 'حُجْرَة', pos: 'noun', features: 'pl.def.acc', gloss: 'the rooms' },
          ],
        },
        {
          id: 'qs-v4-c11-033',
          ar: 'الأَطْفَالُ يَبْكُونَ،',
          en: 'The children were crying,',
          tokens: [
            { surface: 'الأَطْفَالُ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.nom', gloss: 'the children' },
            { surface: 'يَبْكُونَ', lemma: 'بَكَى', pos: 'verb', features: 'impf.3mp', gloss: 'to weep; were weeping' },
          ],
        },
        {
          id: 'qs-v4-c11-034',
          ar: 'وَالنِّسَاءُ يَصِحْنَ،',
          en: 'the women were screaming,',
          tokens: [
            { surface: 'وَالنِّسَاءُ', lemma: 'نِسَاء', pos: 'noun', features: 'conj+def.nom', gloss: 'and the women' },
            { surface: 'يَصِحْنَ', lemma: 'صَاحَ', pos: 'verb', features: 'impf.3fp', gloss: 'to shout, cry out; were crying out' },
          ],
        },
        {
          id: 'qs-v4-c11-035',
          ar: 'وَالرِّجَالُ يَدْعُونَ وَيَسْتَغِيثُونَ.',
          en: 'and the men were calling out and crying for help.',
          tokens: [
            { surface: 'وَالرِّجَالُ', lemma: 'رَجُل', pos: 'noun', features: 'conj+pl.def.nom', gloss: 'and the men' },
            { surface: 'يَدْعُونَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3mp', gloss: 'to call out; were calling out' },
            { surface: 'وَيَسْتَغِيثُونَ', lemma: 'اِسْتَغَاثَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to cry for help; and crying for help' },
          ],
        },
        {
          id: 'qs-v4-c11-036',
          ar: 'وَكَأَنَّ قَائِلاً يَقُولُ:',
          en: 'And it was as if a voice were saying:',
          tokens: [
            { surface: 'وَكَأَنَّ', lemma: 'كَأَنَّ', pos: 'part', features: 'conj+part', gloss: 'and as if' },
            { surface: 'قَائِلاً', lemma: 'قَائِل', pos: 'noun', features: 'indef.acc', gloss: 'a speaker' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; were saying' },
          ],
        },
        {
          id: 'qs-v4-c11-037',
          ar: '﴿لَا عَاصِمَ',
          en: "'There is no protector",
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'عَاصِمَ', lemma: 'عَاصِم', pos: 'noun', features: 'indef.acc', gloss: 'protector' },
          ],
        },
        {
          id: 'qs-v4-c11-038',
          ar: 'الْيَوْمَ مِنْ',
          en: 'today from',
          tokens: [
            { surface: 'الْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'def.acc', gloss: 'today' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
          ],
        },
        {
          id: 'qs-v4-c11-039',
          ar: 'أَمْرِ اللَّهِ﴾.',
          en: "the command of Allah.'",
          tokens: [
            { surface: 'أَمْرِ', lemma: 'أَمْر', pos: 'noun', features: 'constr.gen', gloss: 'the command of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v4-c11-040',
          ar: 'كَانَ ذَلِكَ سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ.',
          en: 'That lasted seven nights and eight days.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'سَبْعَ', lemma: 'سَبْع', pos: 'num', features: 'acc.constr', gloss: 'seven' },
            { surface: 'لَيَالٍ', lemma: 'لَيْلَة', pos: 'noun', features: 'pl.indef.gen', gloss: 'nights' },
            { surface: 'وَثَمَانِيَةَ', lemma: 'ثَمَانِيَة', pos: 'num', features: 'conj+acc.constr', gloss: 'and eight' },
            { surface: 'أَيَّامٍ', lemma: 'يَوْم', pos: 'noun', features: 'pl.indef.gen', gloss: 'days' },
          ],
        },
        {
          id: 'qs-v4-c11-041',
          ar: 'وَمَاتَ الْقَوْمُ',
          en: 'The people died,',
          tokens: [
            { surface: 'وَمَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to die; and died' },
            { surface: 'الْقَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v4-c11-042',
          ar: 'فَكَانُوا كَأَشْجَارِ النَّخِيلِ سَقَطَتْ عَلَى الأَرْضِ',
          en: 'and became like fallen palm trees on the ground,',
          tokens: [
            { surface: 'فَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and became' },
            { surface: 'كَأَشْجَارِ', lemma: 'شَجَرَة', pos: 'noun', features: 'prep+pl.constr.gen', gloss: 'like the trees of' },
            { surface: 'النَّخِيلِ', lemma: 'نَخِيل', pos: 'noun', features: 'def.gen', gloss: 'the palms' },
            { surface: 'سَقَطَتْ', lemma: 'سَقَطَ', pos: 'verb', features: 'perf.3fs', gloss: 'to fall; fallen' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the ground' },
          ],
        },
        {
          id: 'qs-v4-c11-043',
          ar: 'وَكَانَ مَنْظَراً غَرِيباً جِدًّا،',
          en: 'and it was a very strange sight --',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'مَنْظَراً', lemma: 'مَنْظَر', pos: 'noun', features: 'indef.acc', gloss: 'a sight' },
            { surface: 'غَرِيباً', lemma: 'غَرِيب', pos: 'adj', features: 'indef.acc', gloss: 'strange' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v4-c11-044',
          ar: 'النَّاسُ أَمْوَاتٌ يَأْكُلُهُمُ الطَّيْرُ،',
          en: 'the people lying dead, eaten by the birds,',
          tokens: [
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'أَمْوَاتٌ', lemma: 'مَيِّت', pos: 'noun', features: 'pl.indef.nom', gloss: 'dead' },
            { surface: 'يَأْكُلُهُمُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to eat; the birds ate them' },
            { surface: 'الطَّيْرُ', lemma: 'طَيْر', pos: 'noun', features: 'def.nom', gloss: 'the birds' },
          ],
        },
        {
          id: 'qs-v4-c11-045',
          ar: 'وَالْبُيُوتُ خَرَابٌ يَسْكُنُهَا الْبُومُ.',
          en: 'and the houses in ruins, inhabited by owls.',
          tokens: [
            { surface: 'وَالْبُيُوتُ', lemma: 'بَيْت', pos: 'noun', features: 'conj+pl.def.nom', gloss: 'and the houses' },
            { surface: 'خَرَابٌ', lemma: 'خَرَاب', pos: 'noun', features: 'indef.nom', gloss: 'ruin' },
            { surface: 'يَسْكُنُهَا', lemma: 'سَكَنَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to dwell; inhabited by' },
            { surface: 'الْبُومُ', lemma: 'بُومَة', pos: 'noun', features: 'def.nom', gloss: 'the owls' },
          ],
        },
        {
          id: 'qs-v4-c11-046',
          ar: 'وَنَجَا هُودٌ وَالْمُؤْمِنُونَ بِإِيمَانِهِمْ،',
          en: 'Hūd and the believers were saved by their faith,',
          tokens: [
            { surface: 'وَنَجَا', lemma: 'نَجَا', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be saved; and were saved' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'وَالْمُؤْمِنُونَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'conj+pl.def.nom', gloss: 'and the believers' },
            { surface: 'بِإِيمَانِهِمْ', lemma: 'إِيمَان', pos: 'noun', features: 'prep+gen+3mp', gloss: 'by their faith' },
          ],
        },
        {
          id: 'qs-v4-c11-047',
          ar: 'وَهَلَكَتْ عَادٌ بِكُفْرِهَا وَعِنَادِهَا.',
          en: 'and ʿĀd perished through their disbelief and obstinacy.',
          tokens: [
            { surface: 'وَهَلَكَتْ', lemma: 'هَلَكَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to perish; and perished' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'بِكُفْرِهَا', lemma: 'كُفْر', pos: 'noun', features: 'prep+gen+3fs', gloss: 'through their disbelief' },
            { surface: 'وَعِنَادِهَا', lemma: 'عِنَاد', pos: 'noun', features: 'conj+gen+3fs', gloss: 'and their obstinacy' },
          ],
        },
        {
          id: 'qs-v4-c11-048',
          ar: '﴿أَلَا إِنَّ',
          en: "'Indeed!",
          tokens: [
            { surface: 'أَلَا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: 'indeed (attention-getting particle)' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
          ],
        },
        {
          id: 'qs-v4-c11-049',
          ar: 'عَاداً كَفَرُوا',
          en: 'ʿĀd disbelieved in',
          tokens: [
            { surface: 'عَاداً', lemma: 'عَاد', pos: 'proper', features: 'acc', gloss: 'ʿĀd' },
            { surface: 'كَفَرُوا', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3mp', gloss: 'to disbelieve; disbelieved' },
          ],
        },
        {
          id: 'qs-v4-c11-050',
          ar: 'رَبَّهُمْ أَلَا',
          en: 'their Lord. Indeed!',
          tokens: [
            { surface: 'رَبَّهُمْ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3mp', gloss: 'their Lord' },
            { surface: 'أَلَا', lemma: 'لَا', pos: 'part', features: 'part+neg', gloss: 'indeed (attention-getting particle)' },
          ],
        },
        {
          id: 'qs-v4-c11-051',
          ar: 'بُعْداً لِعَادٍ',
          en: 'away with ʿĀd,',
          tokens: [
            { surface: 'بُعْداً', lemma: 'بُعْد', pos: 'noun', features: 'indef.acc', gloss: 'destruction, away (with)' },
            { surface: 'لِعَادٍ', lemma: 'عَاد', pos: 'proper', features: 'prep+gen', gloss: 'for ʿĀd' },
          ],
        },
        {
          id: 'qs-v4-c11-052',
          ar: 'قَوْمِ هُودٍ﴾.',
          en: "the people of Hūd.'",
          tokens: [
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'constr.gen', gloss: 'the people of' },
            { surface: 'هُودٍ', lemma: 'هُود', pos: 'proper', features: 'gen', gloss: 'Hūd' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا ظَنَّ النَّاسُ عِنْدَمَا رَأَوُا السَّحَابَةَ؟',
          options: ['ظَنُّوهَا سَحَابَةَ مَطَرٍ فَفَرِحُوا', 'عَرَفُوا فَوْراً أَنَّهَا الْعَذَابُ', 'لَمْ يَنْتَبِهُوا لَهَا'],
          answer: 0,
          qEn: 'What did the people think when they saw the cloud?',
          optionsEn: ['They thought it a rain cloud and rejoiced', 'They knew at once it was the punishment', 'They paid no attention to it'],
        },
        {
          q: 'كَمِ اسْتَمَرَّتِ الْعَاصِفَةُ؟',
          options: ['سَبْعَ لَيَالٍ وَثَمَانِيَةَ أَيَّامٍ', 'يَوْماً وَاحِداً فَقَطْ', 'شَهْراً كَامِلاً'],
          answer: 0,
          qEn: 'How long did the storm last?',
          optionsEn: ['Seven nights and eight days', 'Only one day', 'A full month'],
        },
        {
          q: 'مَنْ نَجَا مِنَ الْعَذَابِ وَلِمَاذَا؟',
          options: ['هُودٌ وَالْمُؤْمِنُونَ بِإِيمَانِهِمْ', 'الأَغْنِيَاءُ لِأَنَّ لَهُمْ قُصُوراً حَصِينَةً', 'كُلُّ عَادٍ نَجَتْ'],
          answer: 0,
          qEn: 'Who was saved from the punishment, and why?',
          optionsEn: ['Hūd and the believers, by their faith', 'The rich, because they had fortified palaces', 'All of ʿĀd was saved'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَهَبَّتِ الْعَاصِفَةُ',
        post: 'الأَشْجَارَ.',
        en: 'The storm blew, uprooting trees.',
        options: ['تَقْلَعُ', 'يَقْلَعُ', 'تَقْلَعَانِ', 'يَقْلَعُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the feminine subject الْعَاصِفَةُ.',
          '3rd masculine singular -- wrong gender.',
          'Dual -- wrong number.',
          '3rd masculine plural -- wrong gender and number.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَيْسَ هَذَا سَحَابَ رَحْمَةٍ، بَلْ هُوَ رِيحٌ فِيهَا عَذَابٌ',
        post: '.',
        en: 'This is not a cloud of mercy, rather it is a wind carrying a painful punishment.',
        options: ['أَلِيمٌ', 'أَلِيمَةٌ', 'أَلِيماً', 'أَلِيمِينَ'],
        answer: 0,
        rationales: [
          'Nominative, masculine -- agrees with عَذَابٌ as its adjective.',
          'Feminine -- wrong gender; عَذَابٌ is masculine.',
          'Accusative -- wrong case; the adjective must match عَذَابٌ\'s nominative.',
          'Plural -- wrong number; عَذَابٌ is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَانَ ذَلِكَ سَبْعَ لَيَالٍ',
        post: 'أَيَّامٍ.',
        en: 'That lasted seven nights and eight days.',
        options: ['وَثَمَانِيَةَ', 'وَثَمَانِيَةٌ', 'وَثَمَانِيَةِ', 'وَثَمَانُونَ'],
        answer: 0,
        rationales: [
          'Accusative, construct -- parallels سَبْعَ as a matching duration phrase before أَيَّامٍ.',
          'Nominative -- wrong case; the whole phrase is an accusative of duration, like سَبْعَ before it.',
          'Genitive -- wrong case for the same reason.',
          '"Eighty" -- wrong number entirely.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْتَغِيثُ الرَّجُلُ',
        pre: '',
        post: 'الرَّجُلُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَغِيثُ', 'يَسْتَغِيثُ', 'تَسْتَغِيثُ', 'نَسْتَغِيثُ'],
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
        base: 'يَسْتَغِيثُ الرَّجُلُ',
        pre: '',
        post: 'الرَّجُلُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَسْتَغِيثُ', 'يَسْتَغِيثُ', 'تَسْتَغِيثُ', 'أَسْتَغِيثُ'],
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
        base: 'يَسْتَغِيثُ الرَّجُلُ',
        pre: '',
        post: 'الرَّجُلُ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَسْتَغِيثُ', 'يَسْتَغِيثُ', 'نَسْتَغِيثُ', 'أَسْتَغِيثُ'],
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

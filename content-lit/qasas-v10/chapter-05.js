// قَصَصُ النَّبِيِّينَ, volume 10 «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»,
// chapter 5 -- يُونُسُ بَيْنَ قَوْمِهِ. Printed page 239 (bottom box) through
// the top of page 240, ending before ch6's heading يُونُسُ فِي بَطْنِ الْحُوتِ
// further down page 240. Transcribed by hand from the scan (vision OCR,
// 300dpi render) against ../CHAPTER-FORMAT.md.
//
// One paragraph: Yūnus is sent to Nineveh, his people refuse and persist
// in disbelief, he leaves them angry after promising punishment in three
// days: once they confirm this and realize a prophet cannot lie, the
// whole town -- people, children, and every kind of livestock separated
// from their young -- goes out to the desert crying out to Allah, who
// lifts the punishment from them. Closes with the Qur'an's own telling of
// this, the one people in the whole Qur'an whose belief came in time to
// save them (Sūrat Yūnus 10:98).
//
// Grammar / lexical notes:
//   -- The prose paragraph is one long chain of short وَ/فَ-coordinated
//      clauses; split here at each printed comma/semicolon (house
//      convention, matching qasas-v3 ch7/ch9/ch10/ch12/ch13) -- no
//      rewording, same printed text and order.
//   -- The three parallel animal-cry clauses (qs-v10-c05-014/015/016:
//      رَغَتِ الإِبِلُ وَفِصْلَانُهَا / خَارَتِ الْبَقَرُ وَأَوْلَادُهَا / ثَغَتِ الْغَنَمُ
//      وَسِخَالُهَا) are the chapter's recycled frame -- three feminine
//      collective subjects each taking a distinct animal-specific verb of
//      crying out, all perfect 3fs. Built into workshop below.
//   -- «نَيْنَوَى» (Nineveh) keeps its printed guillemets as part of the
//      surface, matching how the book itself typography-marks this one
//      place name; not listed in newWords, same convention as protagonist
//      proper nouns (أَيُّوب ch1, يُونُس ch4).
//   -- مَوَاشِيهِمْ (qs-v10-c05-010) is the broken plural of the new
//      مَاشِيَة ("head of cattle, livestock animal") -- tagged lemma
//      مَاشِيَة, features pl.gen+3mp.
//   -- The Qur'an āyah (10:98) is tokenized like ordinary prose, split
//      into three fragments of at most 8 tokens each (established
//      long-āyah convention, qasas-v2 ch14 / qasas-v3 ch13), each
//      independently wrapped in ﴿﴾, mushaf text throughout.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): هَذِهِ، قِصَّة، يُونُس
//      (this volume, ch4)، اللَّه، إِلَى، أَهْل، قَرْيَة، تَعَالَى، أَبَى، كُفْر،
//      خَرَجَ، بَيْنَ، وَعَدَ، عَذَاب، بَعْدَ، لَمَّا، عَلِمَ، أَنَّ، النَّبِيّ، إِلَّا،
//      طِفْل، أَنْعَام (this volume, ch1)، أُمّ، وَلَد، ثُمَّ، عَزَّ، جَلَّ (this
//      volume, ch1)، رَفَعَ، قَالَ، لَوْ، آمَنَ، نَفَعَ، قَوْم، كَشَفَ (this volume,
//      ch3)، حَيَاة (this volume, ch4)، الدُّنْيَا، حِين (this volume, ch4)،
//      دَعَا
//      are all already taught and are NOT re-listed in newWords here.
//
// 24 new words (بَعَثَ، تَمَادَى، مُغَاضِب، ظَهْر، ثَلَاث، تَحَقَّقَ، كَذَبَ، صَحْرَاء،
// مَاشِيَة، فَرَّقَ، تَضَرَّعَ، جَأَرَ، رَغَا، إِبِل، فَصِيل، خَارَ، بَقَر، ثَغَا، غَنَم،
// سَخْلَة، إِيمَان، لَوْلَا، خِزْي، مَتَّعَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'يُونُسُ بَيْنَ قَوْمِهِ', en: 'Yūnus Among His People' },
  newWords: [
    'بَعَثَ', 'تَمَادَى', 'مُغَاضِب', 'ظَهْر', 'ثَلَاث', 'تَحَقَّقَ', 'كَذَبَ', 'صَحْرَاء',
    'مَاشِيَة', 'فَرَّقَ', 'تَضَرَّعَ', 'جَأَرَ', 'رَغَا', 'إِبِل', 'فَصِيل', 'خَارَ',
    'بَقَر', 'ثَغَا', 'غَنَم', 'سَخْلَة', 'إِيمَان', 'لَوْلَا', 'خِزْي', 'مَتَّعَ',
  ],
  lemmas: {
    'بَعَثَ': { gloss: 'to send' },
    'تَمَادَى': { gloss: 'to persist, continue heedlessly' },
    'مُغَاضِب': { gloss: 'angry, resentful' },
    'ظَهْر': { gloss: 'back' },
    'ثَلَاث': { gloss: 'three' },
    'تَحَقَّقَ': { gloss: 'to confirm, verify' },
    'كَذَبَ': { gloss: 'to lie' },
    'صَحْرَاء': { gloss: 'desert' },
    'مَاشِيَة': { gloss: 'head of cattle, livestock animal' },
    'فَرَّقَ': { gloss: 'to separate' },
    'تَضَرَّعَ': { gloss: 'to entreat, supplicate humbly' },
    'جَأَرَ': { gloss: 'to cry out loudly' },
    'رَغَا': { gloss: 'to bray, bellow (of a camel)' },
    'إِبِل': { gloss: 'camels' },
    'فَصِيل': { gloss: 'young weaned camel' },
    'خَارَ': { gloss: 'to low, bellow (of cattle)' },
    'بَقَر': { gloss: 'cattle, cows' },
    'ثَغَا': { gloss: 'to bleat' },
    'غَنَم': { gloss: 'sheep, goats' },
    'سَخْلَة': { gloss: 'lamb, kid' },
    'إِيمَان': { gloss: 'faith, belief' },
    'لَوْلَا': { gloss: 'if not for, why not' },
    'خِزْي': { gloss: 'disgrace, humiliation' },
    'مَتَّعَ': { gloss: 'to let enjoy, grant enjoyment' },
  },
  paragraphs: [
    {
      en: 'And this is the story of Yūnus: Allah sent him to the people of the town of Nineveh, and he called them to Allah, exalted is He, but they refused him and persisted in their disbelief, so he went out from among them, angry at them, and promised them the punishment after three days. When they confirmed that and knew that a prophet does not lie, they went out to the desert with their children, their livestock, and their cattle, and separated the mothers from their young; then they entreated Allah, mighty and majestic is He, and cried out to Him -- the camels and their young brayed, the cattle and their calves lowed, and the sheep and their lambs bleated -- so Allah lifted the punishment from them. Allah, exalted is He, says: "So why was there not a town that believed, so its faith benefited it, except the people of Yūnus -- when they believed, We removed from them the punishment of disgrace in the life of this world, and We let them enjoy life for a while."',
      sentences: [
        {
          id: 'qs-v10-c05-001',
          ar: 'وَهَذِهِ قِصَّةُ يُونُسَ:',
          en: 'And this is the story of Yūnus:',
          tokens: [
            { surface: 'وَهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'conj+dem.f', gloss: 'and this' },
            { surface: 'قِصَّةُ', lemma: 'قِصَّة', pos: 'noun', features: 'nom.constr', gloss: 'the story of' },
            { surface: 'يُونُسَ', lemma: 'يُونُس', pos: 'proper', features: 'gen', gloss: 'Yūnus' },
          ],
        },
        {
          id: 'qs-v10-c05-002',
          ar: 'بَعَثَهُ اللَّهُ إِلَى أَهْلِ قَرْيَةِ «نَيْنَوَى»',
          en: 'Allah sent him to the people of the town of Nineveh,',
          tokens: [
            { surface: 'بَعَثَهُ', lemma: 'بَعَثَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to send; sent him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَهْلِ', lemma: 'أَهْل', pos: 'noun', features: 'gen.constr', gloss: 'the people of' },
            { surface: 'قَرْيَةِ', lemma: 'قَرْيَة', pos: 'noun', features: 'gen.constr', gloss: 'the town of' },
            { surface: '«نَيْنَوَى»', lemma: 'نَيْنَوَى', pos: 'proper', features: 'gen', gloss: 'Nineveh' },
          ],
        },
        {
          id: 'qs-v10-c05-003',
          ar: 'فَدَعَاهُمْ إِلَى اللَّهِ تَعَالَى،',
          en: 'and called them to Allah, exalted is He,',
          tokens: [
            { surface: 'فَدَعَاهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to call, invite; and called them' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v10-c05-004',
          ar: 'فَأَبَوْا عَلَيْهِ،',
          en: 'but they refused him,',
          tokens: [
            { surface: 'فَأَبَوْا', lemma: 'أَبَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to refuse; but they refused' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
          ],
        },
        {
          id: 'qs-v10-c05-005',
          ar: 'وَتَمَادَوْا فِي كُفْرِهِمْ،',
          en: 'and persisted in their disbelief,',
          tokens: [
            { surface: 'وَتَمَادَوْا', lemma: 'تَمَادَى', pos: 'verb', features: 'conj+perf.3mp', root: 'م د ي', gloss: 'to persist; and persisted' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُفْرِهِمْ', lemma: 'كُفْر', pos: 'noun', features: 'gen+3mp', gloss: 'their disbelief' },
          ],
        },
        {
          id: 'qs-v10-c05-006',
          ar: 'فَخَرَجَ مِنْ بَيْنِ أَظْهُرِهِمْ مُغَاضِباً لَهُمْ',
          en: 'so he went out from among them, angry at them,',
          tokens: [
            { surface: 'فَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go out; so he went out' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'بَيْنِ', lemma: 'بَيْنَ', pos: 'noun', features: 'gen.constr', gloss: 'among' },
            { surface: 'أَظْهُرِهِمْ', lemma: 'ظَهْر', pos: 'noun', features: 'pl.gen+3mp', gloss: 'them (lit. their backs)' },
            { surface: 'مُغَاضِباً', lemma: 'مُغَاضِب', pos: 'adj', features: 'indef.acc', root: 'غ ض ب', gloss: 'angry' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'at them' },
          ],
        },
        {
          id: 'qs-v10-c05-007',
          ar: 'وَوَعَدَهُمْ بِالْعَذَابِ بَعْدَ ثَلَاثٍ،',
          en: 'and promised them the punishment after three days,',
          tokens: [
            { surface: 'وَوَعَدَهُمْ', lemma: 'وَعَدَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to promise; and promised them' },
            { surface: 'بِالْعَذَابِ', lemma: 'عَذَاب', pos: 'noun', features: 'prep+def.gen', gloss: 'the punishment' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'ثَلَاثٍ', lemma: 'ثَلَاث', pos: 'num', features: 'indef.gen', gloss: 'three' },
          ],
        },
        {
          id: 'qs-v10-c05-008',
          ar: 'فَلَمَّا تَحَقَّقُوا مِنْهُ ذَلِكَ',
          en: 'When they confirmed that from him',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'تَحَقَّقُوا', lemma: 'تَحَقَّقَ', pos: 'verb', features: 'perf.3mp', root: 'ح ق ق', gloss: 'to confirm, verify; confirmed' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from him' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v10-c05-009',
          ar: 'وَعَلِمُوا أَنَّ النَّبِيَّ لَا يَكْذِبُ',
          en: 'and knew that a prophet does not lie,',
          tokens: [
            { surface: 'وَعَلِمُوا', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to know; and knew' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'النَّبِيَّ', lemma: 'نَبِيّ', pos: 'noun', features: 'def.acc', gloss: 'the prophet' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَكْذِبُ', lemma: 'كَذَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to lie; lies' },
          ],
        },
        {
          id: 'qs-v10-c05-010',
          ar: 'خَرَجُوا إِلَى الصَّحْرَاءِ بِأَطْفَالِهِمْ وَأَنْعَامِهِمْ وَمَوَاشِيهِمْ،',
          en: 'they went out to the desert with their children, their livestock, and their cattle,',
          tokens: [
            { surface: 'خَرَجُوا', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3mp', gloss: 'to go out; went out' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الصَّحْرَاءِ', lemma: 'صَحْرَاء', pos: 'noun', features: 'def.gen', gloss: 'the desert' },
            { surface: 'بِأَطْفَالِهِمْ', lemma: 'طِفْل', pos: 'noun', features: 'prep+pl.gen+3mp', gloss: 'with their children' },
            { surface: 'وَأَنْعَامِهِمْ', lemma: 'أَنْعَام', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their livestock' },
            { surface: 'وَمَوَاشِيهِمْ', lemma: 'مَاشِيَة', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their cattle' },
          ],
        },
        {
          id: 'qs-v10-c05-011',
          ar: 'وَفَرَّقُوا بَيْنَ الْأُمَّهَاتِ وَأَوْلَادِهَا،',
          en: 'and separated the mothers from their young,',
          tokens: [
            { surface: 'وَفَرَّقُوا', lemma: 'فَرَّقَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to separate; and separated' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'الْأُمَّهَاتِ', lemma: 'أُمّ', pos: 'noun', features: 'def.gen.pl', gloss: 'the mothers' },
            { surface: 'وَأَوْلَادِهَا', lemma: 'وَلَد', pos: 'noun', features: 'conj+pl.gen+3fs', gloss: 'and their young' },
          ],
        },
        {
          id: 'qs-v10-c05-012',
          ar: 'ثُمَّ تَضَرَّعُوا إِلَى اللَّهِ عَزَّ وَجَلَّ،',
          en: 'then they entreated Allah, mighty and majestic is He,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'تَضَرَّعُوا', lemma: 'تَضَرَّعَ', pos: 'verb', features: 'perf.3mp', root: 'ض ر ع', gloss: 'to entreat, supplicate humbly; entreated' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَزَّ', lemma: 'عَزَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to be mighty; mighty is He' },
            { surface: 'وَجَلَّ', lemma: 'جَلَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be majestic; and majestic' },
          ],
        },
        {
          id: 'qs-v10-c05-013',
          ar: 'وَجَأَرُوا إِلَيْهِ،',
          en: 'and cried out to Him,',
          tokens: [
            { surface: 'وَجَأَرُوا', lemma: 'جَأَرَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to cry out loudly; and cried out' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to Him' },
          ],
        },
        {
          id: 'qs-v10-c05-014',
          ar: 'وَرَغَتِ الْإِبِلُ وَفِصْلَانُهَا،',
          en: 'the camels and their young brayed,',
          tokens: [
            { surface: 'وَرَغَتِ', lemma: 'رَغَا', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to bray, bellow; and brayed' },
            { surface: 'الْإِبِلُ', lemma: 'إِبِل', pos: 'noun', features: 'def.nom', gloss: 'the camels' },
            { surface: 'وَفِصْلَانُهَا', lemma: 'فَصِيل', pos: 'noun', features: 'conj+pl.nom+3fs', gloss: 'and their young' },
          ],
        },
        {
          id: 'qs-v10-c05-015',
          ar: 'وَخَارَتِ الْبَقَرُ وَأَوْلَادُهَا،',
          en: 'the cattle and their calves lowed,',
          tokens: [
            { surface: 'وَخَارَتِ', lemma: 'خَارَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to low, bellow; and lowed' },
            { surface: 'الْبَقَرُ', lemma: 'بَقَر', pos: 'noun', features: 'def.nom', gloss: 'the cattle' },
            { surface: 'وَأَوْلَادُهَا', lemma: 'وَلَد', pos: 'noun', features: 'conj+pl.nom+3fs', gloss: 'and their young' },
          ],
        },
        {
          id: 'qs-v10-c05-016',
          ar: 'وَثَغَتِ الْغَنَمُ وَسِخَالُهَا؛',
          en: 'and the sheep and their lambs bleated;',
          tokens: [
            { surface: 'وَثَغَتِ', lemma: 'ثَغَا', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to bleat; and bleated' },
            { surface: 'الْغَنَمُ', lemma: 'غَنَم', pos: 'noun', features: 'def.nom', gloss: 'the sheep' },
            { surface: 'وَسِخَالُهَا', lemma: 'سَخْلَة', pos: 'noun', features: 'conj+pl.nom+3fs', gloss: 'and their lambs' },
          ],
        },
        {
          id: 'qs-v10-c05-017',
          ar: 'فَرَفَعَ اللَّهُ عَنْهُمُ الْعَذَابَ،',
          en: 'so Allah lifted the punishment from them,',
          tokens: [
            { surface: 'فَرَفَعَ', lemma: 'رَفَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to lift, raise; so He lifted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَنْهُمُ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
            { surface: 'الْعَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'def.acc', gloss: 'the punishment' },
          ],
        },
        {
          id: 'qs-v10-c05-018',
          ar: 'قَالَ اللَّهُ تَعَالَى:',
          en: 'Allah, exalted is He, says:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v10-c05-019',
          ar: '﴿فَلَوْلَا كَانَتْ قَرْيَةٌ آمَنَتْ فَنَفَعَهَا إِيمَانُهَا﴾',
          en: '"So why was there not a town that believed, so its faith benefited it,',
          tokens: [
            { surface: 'فَلَوْلَا', lemma: 'لَوْلَا', pos: 'part', features: 'conj+part', gloss: 'so why not, if not for' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; there was' },
            { surface: 'قَرْيَةٌ', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.nom', gloss: 'a town' },
            { surface: 'آمَنَتْ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3fs', gloss: 'to believe; that believed' },
            { surface: 'فَنَفَعَهَا', lemma: 'نَفَعَ', pos: 'verb', features: 'conj+perf.3ms+3fs', gloss: 'to benefit; so it benefited it' },
            { surface: 'إِيمَانُهَا', lemma: 'إِيمَان', pos: 'noun', features: 'nom+3fs', gloss: 'its faith' },
          ],
        },
        {
          id: 'qs-v10-c05-020',
          ar: '﴿إِلَّا قَوْمَ يُونُسَ لَمَّا آمَنُوا كَشَفْنَا عَنْهُمْ﴾',
          en: 'except the people of Yūnus -- when they believed, We removed from them',
          tokens: [
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'قَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'يُونُسَ', lemma: 'يُونُس', pos: 'proper', features: 'gen', gloss: 'Yūnus' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'آمَنُوا', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3mp', gloss: 'to believe; they believed' },
            { surface: 'كَشَفْنَا', lemma: 'كَشَفَ', pos: 'verb', features: 'perf.1p', gloss: 'to remove, uncover; We removed' },
            { surface: 'عَنْهُمْ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
          ],
        },
        {
          id: 'qs-v10-c05-021',
          ar: '﴿عَذَابَ الْخِزْيِ فِي الْحَيَاةِ الدُّنْيَا وَمَتَّعْنَاهُمْ إِلَىٰ حِينٍ﴾.',
          en: 'the punishment of disgrace in the life of this world, and We let them enjoy life for a while."',
          tokens: [
            { surface: 'عَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'acc.constr', gloss: 'the punishment of' },
            { surface: 'الْخِزْيِ', lemma: 'خِزْي', pos: 'noun', features: 'def.gen', gloss: 'disgrace' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْحَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'def.gen', gloss: 'the life' },
            { surface: 'الدُّنْيَا', lemma: 'دُنْيَا', pos: 'adj', features: 'def.gen.f', gloss: 'of this world' },
            { surface: 'وَمَتَّعْنَاهُمْ', lemma: 'مَتَّعَ', pos: 'verb', features: 'conj+perf.1p+3mp', root: 'م ت ع', gloss: 'to let enjoy; and We let them enjoy' },
            { surface: 'إِلَىٰ', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'for, until' },
            { surface: 'حِينٍ', lemma: 'حِين', pos: 'noun', features: 'indef.gen', gloss: 'a while' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا خَرَجَ يُونُسُ مِنْ بَيْنِ قَوْمِهِ غَاضِباً؟',
          options: ['لِأَنَّهُمْ أَبَوْا دَعْوَتَهُ وَتَمَادَوْا فِي كُفْرِهِمْ', 'لِأَنَّهُمْ آذَوْهُ بِالضَّرْبِ', 'لِأَنَّهُ أَرَادَ السَّفَرَ فَقَط'],
          answer: 0,
          qEn: 'Why did Yūnus leave his people angry?',
          optionsEn: ['Because they refused his call and persisted in their disbelief', 'Because they beat him', 'Because he simply wanted to travel'],
        },
        {
          q: 'مَاذَا فَعَلَ قَوْمُ يُونُسَ لَمَّا تَحَقَّقُوا مِنَ الْعَذَابِ؟',
          options: ['خَرَجُوا إِلَى الصَّحْرَاءِ وَفَرَّقُوا بَيْنَ الْأُمَّهَاتِ وَأَوْلَادِهَا وَتَضَرَّعُوا إِلَى اللَّهِ', 'اسْتَمَرُّوا فِي حَيَاتِهِمِ الْعَادِيَّةِ', 'هَرَبُوا مِنَ الْقَرْيَةِ إِلَى الأَبَدِ'],
          answer: 0,
          qEn: 'What did the people of Yūnus do when they confirmed the punishment was near?',
          optionsEn: ['They went out to the desert, separated the mothers from their young, and entreated Allah', 'They continued their normal life', 'They fled the town forever'],
        },
        {
          q: 'مَاذَا حَدَثَ بَعْدَ تَضَرُّعِهِمْ إِلَى اللَّهِ؟',
          options: ['رَفَعَ اللَّهُ عَنْهُمُ الْعَذَابَ', 'نَزَلَ عَلَيْهِمُ الْعَذَابُ فَوْراً', 'لَمْ يَحْدُثْ شَيْءٌ'],
          answer: 0,
          qEn: 'What happened after they entreated Allah?',
          optionsEn: ['Allah lifted the punishment from them', 'The punishment fell upon them immediately', 'Nothing happened'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'الإِبِلُ وَفِصْلَانُهَا.',
        en: 'And the camels and their young brayed.',
        options: ['رَغَتِ', 'رَغَا', 'يَرْغُو', 'رَاغٍ'],
        answer: 0,
        rationales: [
          '3rd feminine singular perfect -- agreeing with the feminine collective الإِبِلُ, matching the printed رَغَتِ.',
          'Masculine form -- wrong gender; الإِبِل takes feminine agreement.',
          'Imperfect -- wrong tense; the narration is in the perfect.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَلَمَّا تَحَقَّقُوا مِنْهُ ذَلِكَ وَعَلِمُوا أَنَّ النَّبِيَّ لَا',
        post: 'خَرَجُوا إِلَى الصَّحْرَاءِ.',
        en: 'When they confirmed that and knew that a prophet does not lie, they went out to the desert.',
        options: ['يَكْذِبُ', 'كَذَبَ', 'تَكْذِبُ', 'كَاذِب'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- negated by لَا, matching the printed لَا يَكْذِبُ.',
          'Perfect -- wrong tense; the sentence states a general truth.',
          '2nd/3rd feminine singular -- wrong person and gender; the subject is النَّبِيّ.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَوَعَدَهُمْ بِالْعَذَابِ بَعْدَ',
        post: '.',
        en: 'and promised them the punishment after three days.',
        options: ['ثَلَاثٍ', 'ثَلَاثَةٍ', 'الثَّلَاثِ', 'ثَلَاثٌ'],
        answer: 0,
        rationales: [
          'Indefinite genitive -- object of the preposition بَعْدَ, matching the printed case and form.',
          'Wrong counted-noun gender form for this context.',
          'Definite -- wrong definiteness; the printed noun is indefinite.',
          'Nominative -- wrong case; بَعْدَ requires the genitive.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْرُجُ الرَّجُلُ إِلَى الصَّحْرَاءِ',
        pre: '',
        post: 'إِلَى الصَّحْرَاءِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَخْرُجُونَ', 'يَخْرُجُ', 'تَخْرُجُ', 'نَخْرُجُ'],
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
        base: 'يَخْرُجُ الرَّجُلُ إِلَى الصَّحْرَاءِ',
        pre: '',
        post: 'إِلَى الصَّحْرَاءِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخْرُجُ', 'يَخْرُجُ', 'تَخْرُجُ', 'يَخْرُجُونَ'],
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
        base: 'يَخْرُجُ الرَّجُلُ إِلَى الصَّحْرَاءِ',
        pre: '',
        post: 'إِلَى الصَّحْرَاءِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخْرُجُ', 'يَخْرُجُ', 'نَخْرُجُ', 'يَخْرُجُونَ'],
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

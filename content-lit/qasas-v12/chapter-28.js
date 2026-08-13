// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ», chapter 28 --
// القَانُونُ الْجِنَائِيُّ فِي ذَلِكَ الْعَصْرِ. Printed pages 267 (bottom, right
// after ch27's closing line and the heading) through 268 (ending before
// ch29's heading عِيسَى يَتَحَمَّلُ الْأَذَى further down the same page).
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md. Printed as a single unbroken paragraph -- no blank
// line separates any of it on either page.
//
// A step back from the verdict itself to describe the surrounding
// machinery: the era's criminal law made the condemned man carry his own
// cross to a distant execution ground; the Roman/foreign police on duty
// were indifferent hired functionaries who could not even tell one
// Israelite from another; and as darkness began to fall, a mob of Jews
// and reckless young zealots closed in on the Messiah himself, jostling,
// cursing, and taunting him.
//
// Grammar / lexical notes:
//   -- Every printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention, see
//      qasas-v3 ch14). No rewording, same printed text and order. No
//      Qur'anic quotations on these pages. The printed em-dash aside
//      "-- وَأَكْثَرُهُمْ مِنَ الْأَجَانِبِ --" (qs-v12-c28-005) is treated as a
//      clause boundary exactly like a comma and split into its own two
//      short entries, since it serves the same syntactic function.
//   -- يُوجِبُ (qs-v12-c28-001, "requires, makes obligatory") is tagged
//      lemma أَوْجَبَ, form IV -- a distinct lemma from the already-taught
//      وَجَبَ (form I, "to be obligatory, due"), per the
//      distinct-lemma-per-derived-verb-form convention; the two share a
//      root but not a lemma, exactly like آمَنَ vs أَمِنَ in qasas-v3 ch14.
//   -- شَنَق ("hanging, execution," qs-v12-c28-001's بِالشَّنَقِ) never occurs
//      as a finite verb on this page -- only this maṣdar/verbal-noun form
//      does -- so it is tagged pos 'noun', lemma شَنَق, distinct from
//      الْمَشْنَقُ ("the gallows, place of execution," qs-v12-c28-002), a
//      separate noun-of-place lemma مَشْنَق built on the same root.
//      Nadwī uses شَنَق here as the era's generic legal term for capital
//      punishment even though the method actually carried out is
//      crucifixion (صَلَبَ) -- glossed 'hanging, execution' to keep both
//      senses visible.
//   -- الْمَحْكُومَ (qs-v12-c28-001, "the one sentenced," passive participle)
//      is tagged its own lemma مَحْكُوم, distinct from the already-taught
//      verb حَكَمَ, per the participle-as-distinct-lemma convention.
//      مَأْمُورِينَ/مُوَظَّفِينَ (qs-v12-c28-006, "subordinates/officials") are
//      likewise tagged as their own passive-participle-as-noun lemmas.
//   -- جَمْع ("crowd," qs-v12-c28-003) is a distinct lemma from the
//      already-taught verb جَمَعَ ("to gather"), matching the corpus's
//      noun-beside-verb-same-root convention (cf. قَتْل vs قَتَلَ, both
//      already independently attested as known).
//   -- الْإِسْرَائِيلِيُّونَ (qs-v12-c28-005, "the Israelites") is this
//      volume's third core proper-noun-adjacent term (after عِيسَى/الْمَسِيح
//      and يَهُود in ch26); tagged new at its first occurrence within this
//      batch here and not re-tagged when it recurs in ch30 below.
//   -- مَدَّ ("to stretch, spread," qs-v12-c28-008, of darkness spreading
//      its canopy -- a fixed idiom for nightfall) is tagged its own verb
//      lemma, root م د د.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, via the consolidated
//      known-lemmas list): كَانَ (bedrock)، فِي، ذَلِكَ، عَصْر، أَنْ، حَمَلَ،
//      الَّذِي، صَلَبَ (يُصْلَبُ)، عَلَى، كَمَا، بَلَد، أَكْثَر، مِنْ، أَجْنَبِيّ
//      (introduced qasas-v12 ch26)، لَا، رَغْبَة (introduced qasas-v12
//      ch27)، هَذِهِ، قَضِيَّة، عِنْدَ، بِ، أَمْر، بَيْنَ، شَأْن، قَدْ، بَعْض، يَهُود
//      (introduced qasas-v12 ch26)، سَيِّد، الْمَسِيح (introduced qasas-v12
//      ch26)، أَرَادَ، عَلَيْهِ
//      are all already taught (or bedrock/function words) and are NOT
//      re-listed in newWords here.
//
// 32 new words (جِنَائِيّ، قَانُون، مَحْكُوم، شَنَق، صَلِيب، مَشْنَق، عَادَة، مُتَمَدِّن،
// جَمْع، حَاشِد، تَسَاقَطَ، شُرْطَة، مَأْمُور، مُوَظَّف، إِسْرَائِيلِيّ، شِبْه، اِلْتَبَسَ،
// مَيَّزَ، نَظَر، مَدَّ، ظَلَام، رِوَاق، مُتَحَمِّس، سَفِيه، شَبَاب، اِنْهَالَ، تَدَافَعَ، سَبَّ،
// عَيَّرَ، إِيذَاء، إِهَانَة، أَوْجَبَ) -- again unusually dense: this chapter
// closes out the courtroom/mob word set that ch27 opened.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch28',
  title: { ar: 'الْقَانُونُ الْجِنَائِيُّ فِي ذَلِكَ الْعَصْرِ', en: 'Criminal Law in That Era' },
  newWords: [
    'جِنَائِيّ', 'شَنَق', 'صَلِيب', 'مَشْنَق', 'مُتَمَدِّن', 'جَمْع',
    'حَاشِد', 'تَسَاقَطَ', 'شُرْطَة', 'مَأْمُور', 'مُوَظَّف', 'شِبْه',
    'اِلْتَبَسَ', 'مَيَّزَ', 'نَظَر', 'مَدَّ', 'ظَلَام', 'رِوَاق',
    'مُتَحَمِّس', 'سَفِيه', 'اِنْهَالَ', 'تَدَافَعَ', 'سَبَّ', 'عَيَّرَ',
    'إِيذَاء', 'إِهَانَة', 'أَوْجَبَ',
  ],
  lemmas: {
    جِنَائِيّ: { gloss: 'criminal, penal' },
    قَانُون: { gloss: 'law' },
    مَحْكُوم: { gloss: 'one sentenced, condemned' },
    شَنَق: { gloss: 'hanging, execution' },
    صَلِيب: { gloss: 'cross' },
    مَشْنَق: { gloss: 'gallows, place of execution' },
    عَادَة: { gloss: 'custom' },
    مُتَمَدِّن: { gloss: 'civilized' },
    جَمْع: { gloss: 'crowd, gathering' },
    حَاشِد: { gloss: 'dense, thronging' },
    تَسَاقَطَ: { gloss: 'to jostle, fall on one another' },
    شُرْطَة: { gloss: 'police' },
    مَأْمُور: { gloss: 'subordinate, agent' },
    مُوَظَّف: { gloss: 'employee, official' },
    إِسْرَائِيلِيّ: { gloss: 'Israelite' },
    شِبْه: { gloss: 'likeness, similar one' },
    اِلْتَبَسَ: { gloss: 'to become confused, mixed up' },
    مَيَّزَ: { gloss: 'to distinguish, tell apart' },
    نَظَر: { gloss: 'view, sight' },
    مَدَّ: { gloss: 'to stretch, spread' },
    ظَلَام: { gloss: 'darkness' },
    رِوَاق: { gloss: 'canopy, awning' },
    مُتَحَمِّس: { gloss: 'zealous, overzealous' },
    سَفِيه: { gloss: 'foolish' },
    شَبَاب: { gloss: 'youth, young men' },
    اِنْهَالَ: { gloss: 'to rush at, pour down upon' },
    تَدَافَعَ: { gloss: 'to push one another' },
    سَبَّ: { gloss: 'to curse, revile' },
    عَيَّرَ: { gloss: 'to taunt, reproach' },
    إِيذَاء: { gloss: 'harming' },
    إِهَانَة: { gloss: 'insulting, humiliating' },
    أَوْجَبَ: { gloss: 'to require, make obligatory' },
  },
  paragraphs: [
    {
      en: "The criminal law of that era required the condemned man to carry the very cross on which he would be crucified. The place of execution was kept far off, as was customary in civilized lands. The crowd was thick, jostling against itself. The police -- most of them foreigners -- were mere subordinate officials with no personal stake in the case; the Israelites all looked alike to them, and they could not tell one from another -- the way of foreigners, in the eyes of foreigners. By now night was falling, and some of the Jews and the foolish, overzealous youths rushed at the Master Messiah, pushing against him, cursing him, taunting him, wanting to harm and insult him.",
      sentences: [
        {
          id: 'qs-v12-c28-001',
          ar: 'وَكَانَ الْقَانُونُ الْجِنَائِيُّ فِي ذَلِكَ الْعَصْرِ يُوجِبُ أَنْ يَحْمِلَ الْمَحْكُومَ عَلَيْهِ بِالشَّنَقِ صَلِيبَهُ الَّذِي يُصْلَبُ عَلَيْهِ،',
          en: 'The criminal law of that era required that the one sentenced to execution carry his own cross, the one on which he would be crucified,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'الْقَانُونُ', lemma: 'قَانُون', pos: 'noun', features: 'def.nom', gloss: 'the law' },
            { surface: 'الْجِنَائِيُّ', lemma: 'جِنَائِيّ', pos: 'adj', features: 'def.nom', gloss: 'criminal, penal' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'الْعَصْرِ', lemma: 'عَصْر', pos: 'noun', features: 'def.gen', gloss: 'the era' },
            { surface: 'يُوجِبُ', lemma: 'أَوْجَبَ', pos: 'verb', features: 'impf.3ms', root: 'و ج ب', gloss: 'to require; requires' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَحْمِلَ', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to carry; carry' },
            { surface: 'الْمَحْكُومَ', lemma: 'مَحْكُوم', pos: 'noun', features: 'def.acc', root: 'ح ك م', gloss: 'the one sentenced' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'against him' },
            { surface: 'بِالشَّنَقِ', lemma: 'شَنَق', pos: 'noun', features: 'prep+def.gen', gloss: 'to execution' },
            { surface: 'صَلِيبَهُ', lemma: 'صَلِيب', pos: 'noun', features: 'acc+3ms', gloss: 'his cross' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'm.rel', gloss: 'which' },
            { surface: 'يُصْلَبُ', lemma: 'صَلَبَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to crucify; is crucified' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'on it' },
          ],
        },
        {
          id: 'qs-v12-c28-002',
          ar: 'وَكَانَ الْمَشْنَقُ بَعِيداً كَمَا هِيَ الْعَادَةُ فِي الْبِلَادِ الْمُتَمَدِّنَةِ،',
          en: 'The place of execution was far off, as is customary in civilized lands,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'الْمَشْنَقُ', lemma: 'مَشْنَق', pos: 'noun', features: 'def.nom', root: 'ش ن ق', gloss: 'the gallows, place of execution' },
            { surface: 'بَعِيداً', lemma: 'بَعِيد', pos: 'adj', features: 'indef.acc', gloss: 'far, distant' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'it (is)' },
            { surface: 'الْعَادَةُ', lemma: 'عَادَة', pos: 'noun', features: 'def.nom', gloss: 'the custom' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِلَادِ', lemma: 'بَلَد', pos: 'noun', features: 'def.gen.pl', gloss: 'the countries' },
            { surface: 'الْمُتَمَدِّنَةِ', lemma: 'مُتَمَدِّن', pos: 'adj', features: 'def.gen.f', gloss: 'civilized' },
          ],
        },
        {
          id: 'qs-v12-c28-003',
          ar: 'وَكَانَ الْجَمْعُ حَاشِداً يَتَسَاقَطُ بَعْضُهُ عَلَى بَعْضٍ،',
          en: 'the crowd was thick, jostling against itself,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'الْجَمْعُ', lemma: 'جَمْع', pos: 'noun', features: 'def.nom', gloss: 'the crowd' },
            { surface: 'حَاشِداً', lemma: 'حَاشِد', pos: 'adj', features: 'indef.acc', gloss: 'dense, thronging' },
            { surface: 'يَتَسَاقَطُ', lemma: 'تَسَاقَطَ', pos: 'verb', features: 'impf.3ms', gloss: 'to jostle, fall on one another; jostles' },
            { surface: 'بَعْضُهُ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3ms', gloss: 'some of it' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on, against' },
            { surface: 'بَعْضٍ', lemma: 'بَعْض', pos: 'noun', features: 'indef.gen', gloss: 'another' },
          ],
        },
        {
          id: 'qs-v12-c28-004',
          ar: 'وَكَانَ رِجَالُ الشُّرْطَةِ',
          en: 'The police officers were',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'رِجَالُ', lemma: 'رَجُل', pos: 'noun', features: 'pl.constr.nom', gloss: 'the men of' },
            { surface: 'الشُّرْطَةِ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.gen', gloss: 'the police' },
          ],
        },
        {
          id: 'qs-v12-c28-005',
          ar: 'وَأَكْثَرُهُمْ مِنَ الْأَجَانِبِ',
          en: '-- most of them foreigners --',
          tokens: [
            { surface: 'وَأَكْثَرُهُمْ', lemma: 'أَكْثَر', pos: 'noun', features: 'conj+nom+3mp', gloss: 'and most of them' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, from among' },
            { surface: 'الْأَجَانِبِ', lemma: 'أَجْنَبِيّ', pos: 'adj', features: 'pl.def.gen', gloss: 'foreigners' },
          ],
        },
        {
          id: 'qs-v12-c28-006',
          ar: 'مَأْمُورِينَ مُوَظَّفِينَ لَا رَغْبَةَ لَهُمْ فِي هَذِهِ الْقَضِيَّةِ،',
          en: 'mere subordinate officials with no interest of their own in this case,',
          tokens: [
            { surface: 'مَأْمُورِينَ', lemma: 'مَأْمُور', pos: 'noun', features: 'acc.pl', root: 'أ م ر', gloss: 'subordinates, agents' },
            { surface: 'مُوَظَّفِينَ', lemma: 'مُوَظَّف', pos: 'noun', features: 'acc.pl', root: 'و ظ ف', gloss: 'employees, officials' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'رَغْبَةَ', lemma: 'رَغْبَة', pos: 'noun', features: 'acc', gloss: 'desire' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقَضِيَّةِ', lemma: 'قَضِيَّة', pos: 'noun', features: 'def.gen', gloss: 'the case' },
          ],
        },
        {
          id: 'qs-v12-c28-007',
          ar: 'وَكَانَ الْإِسْرَائِيلِيُّونَ أَشْبَاهاً عِنْدَهُمْ يَلْتَبِسُ عَلَيْهِمْ أَمْرُهُمْ،',
          en: 'the Israelites all looked alike to them, their identities blurred together,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'الْإِسْرَائِيلِيُّونَ', lemma: 'إِسْرَائِيلِيّ', pos: 'noun', features: 'pl.def.nom', gloss: 'the Israelites' },
            { surface: 'أَشْبَاهاً', lemma: 'شِبْه', pos: 'noun', features: 'pl.indef.acc', gloss: 'similar ones, lookalikes' },
            { surface: 'عِنْدَهُمْ', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+3mp', gloss: 'to them, in their view' },
            { surface: 'يَلْتَبِسُ', lemma: 'اِلْتَبَسَ', pos: 'verb', features: 'impf.3ms', gloss: 'to become confused, mixed up; is confused' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'أَمْرُهُمْ', lemma: 'أَمْر', pos: 'noun', features: 'nom+3mp', gloss: 'their matter, identity' },
          ],
        },
        {
          id: 'qs-v12-c28-008',
          ar: 'فَلَا يُمَيِّزُونَ بَيْنَهُمْ،',
          en: 'so they could not tell them apart,',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so not' },
            { surface: 'يُمَيِّزُونَ', lemma: 'مَيَّزَ', pos: 'verb', features: 'impf.3mp', gloss: 'to distinguish; distinguish' },
            { surface: 'بَيْنَهُمْ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep+3mp', gloss: 'between them' },
          ],
        },
        {
          id: 'qs-v12-c28-009',
          ar: 'شَأْنُ الْأَجَانِبِ فِي نَظَرِ الْأَجَانِبِ،',
          en: '-- the way of foreigners, in the eyes of foreigners.',
          tokens: [
            { surface: 'شَأْنُ', lemma: 'شَأْن', pos: 'noun', features: 'constr.nom', gloss: 'the way, manner of' },
            { surface: 'الْأَجَانِبِ', lemma: 'أَجْنَبِيّ', pos: 'adj', features: 'pl.def.gen', gloss: 'foreigners' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'نَظَرِ', lemma: 'نَظَر', pos: 'noun', features: 'constr.gen', gloss: 'the view of' },
            { surface: 'الْأَجَانِبِ', lemma: 'أَجْنَبِيّ', pos: 'adj', features: 'pl.def.gen', gloss: 'foreigners' },
          ],
        },
        {
          id: 'qs-v12-c28-010',
          ar: 'وَكَانَ الْوَقْتُ قَدْ مَدَّ الظَّلَامُ رِوَاقَهُ،',
          en: 'By now night had already spread its canopy,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'الْوَقْتُ', lemma: 'وَقْت', pos: 'noun', features: 'def.nom', gloss: 'the time' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'already' },
            { surface: 'مَدَّ', lemma: 'مَدَّ', pos: 'verb', features: 'perf.3ms', root: 'م د د', gloss: 'to stretch, spread; had spread' },
            { surface: 'الظَّلَامُ', lemma: 'ظَلَام', pos: 'noun', features: 'def.nom', gloss: 'the darkness' },
            { surface: 'رِوَاقَهُ', lemma: 'رِوَاق', pos: 'noun', features: 'acc+3ms', gloss: 'its canopy' },
          ],
        },
        {
          id: 'qs-v12-c28-011',
          ar: 'وَكَانَ بَعْضُ الْيَهُودِ وَالْمُتَحَمِّسِينَ السُّفَهَاءِ مِنَ الشَّبَابِ يَنْهَالُونَ عَلَى السَّيِّدِ الْمَسِيحِ،',
          en: 'and some of the Jews, and the foolish, overzealous youths, rushed at the Master Messiah,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'constr.nom', gloss: 'some of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'proper', features: 'def.gen', gloss: 'the Jews' },
            { surface: 'وَالْمُتَحَمِّسِينَ', lemma: 'مُتَحَمِّس', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the zealous ones' },
            { surface: 'السُّفَهَاءِ', lemma: 'سَفِيه', pos: 'adj', features: 'def.gen.pl', gloss: 'foolish' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, among' },
            { surface: 'الشَّبَابِ', lemma: 'شَبَاب', pos: 'noun', features: 'def.gen', gloss: 'the youth' },
            { surface: 'يَنْهَالُونَ', lemma: 'اِنْهَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to rush at, pour upon; rush' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at, upon' },
            { surface: 'السَّيِّدِ', lemma: 'سَيِّد', pos: 'noun', features: 'def.gen', gloss: 'the Master' },
            { surface: 'الْمَسِيحِ', lemma: 'مَسِيح', pos: 'proper', features: 'def.gen', gloss: 'the Messiah' },
          ],
        },
        {
          id: 'qs-v12-c28-012',
          ar: 'وَيَتَدَافَعُونَ عَلَيْهِ،',
          en: 'pushing against him,',
          tokens: [
            { surface: 'وَيَتَدَافَعُونَ', lemma: 'تَدَافَعَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to push one another; and pushing' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'against him' },
          ],
        },
        {
          id: 'qs-v12-c28-013',
          ar: 'يَسُبُّونَهُ،',
          en: 'cursing him,',
          tokens: [
            { surface: 'يَسُبُّونَهُ', lemma: 'سَبَّ', pos: 'verb', features: 'impf.3mp+3ms', gloss: 'to curse, revile; curse him' },
          ],
        },
        {
          id: 'qs-v12-c28-014',
          ar: 'وَيُعَيِّرُونَهُ،',
          en: 'taunting him,',
          tokens: [
            { surface: 'وَيُعَيِّرُونَهُ', lemma: 'عَيَّرَ', pos: 'verb', features: 'conj+impf.3mp+3ms', gloss: 'to taunt, reproach; and taunting him' },
          ],
        },
        {
          id: 'qs-v12-c28-015',
          ar: 'وَيُرِيدُونَ إِيذَاءَهُ وَإِهَانَتَهُ.',
          en: 'wanting to harm him and insult him.',
          tokens: [
            { surface: 'وَيُرِيدُونَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to want; and wanting' },
            { surface: 'إِيذَاءَهُ', lemma: 'إِيذَاء', pos: 'noun', features: 'acc+3ms', gloss: 'harming him' },
            { surface: 'وَإِهَانَتَهُ', lemma: 'إِهَانَة', pos: 'noun', features: 'conj+acc+3ms', gloss: 'and insulting him' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَكُنْ رِجَالُ الشُّرْطَةِ يُمَيِّزُونَ بَيْنَ الْإِسْرَائِيلِيِّينَ؟',
          options: ['لِأَنَّ أَكْثَرَهُمْ كَانُوا مِنَ الْأَجَانِبِ وَكَانَ الْإِسْرَائِيلِيُّونَ أَشْبَاهاً عِنْدَهُمْ', 'لِأَنَّهُمْ كَانُوا يَجْهَلُونَ الْقَانُونَ', 'لِأَنَّهُمْ كَانُوا نَائِمِينَ'],
          answer: 0,
          qEn: 'Why could the police not tell the Israelites apart?',
          optionsEn: ['Because most of them were foreigners, and the Israelites all looked alike to them', 'Because they did not know the law', 'Because they were asleep'],
        },
        {
          q: 'مَاذَا كَانَ يَفْعَلُ بَعْضُ الْيَهُودِ وَالشَّبَابِ الْمُتَحَمِّسِينَ بِالسَّيِّدِ الْمَسِيحِ؟',
          options: ['كَانُوا يَنْهَالُونَ عَلَيْهِ وَيَتَدَافَعُونَ وَيَسُبُّونَهُ وَيُعَيِّرُونَهُ', 'كَانُوا يُدَافِعُونَ عَنْهُ أَمَامَ الْحَاكِمِ', 'كَانُوا يَطْلُبُونَ الْعَفْوَ عَنْهُ'],
          answer: 0,
          qEn: 'What were some of the Jews and the zealous youths doing to the Master Messiah?',
          optionsEn: ['They were rushing at him, pushing him, cursing him, and taunting him', 'They were defending him before the ruler', 'They were asking for him to be pardoned'],
        },
        {
          q: 'مَاذَا كَانَ يُوجِبُ الْقَانُونُ الْجِنَائِيُّ عَلَى الْمَحْكُومِ عَلَيْهِ بِالشَّنَقِ؟',
          options: ['أَنْ يَحْمِلَ صَلِيبَهُ الَّذِي يُصْلَبُ عَلَيْهِ', 'أَنْ يَدْفَعَ غَرَامَةً مَالِيَّةً', 'أَنْ يَعْتَرِفَ بِذَنْبِهِ عَلَناً'],
          answer: 0,
          qEn: 'What did the criminal law require of the one condemned to execution?',
          optionsEn: ['To carry the very cross on which he would be crucified', 'To pay a monetary fine', 'To publicly confess his guilt'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ الْمَشْنَقُ',
        post: 'كَمَا هِيَ الْعَادَةُ فِي الْبِلَادِ الْمُتَمَدِّنَةِ.',
        en: 'The place of execution was far off, as is customary in civilized lands.',
        options: ['بَعِيداً', 'بَعِيدٌ', 'بَعِيدٍ', 'بَعِيدَة'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Feminine -- wrong gender; الْمَشْنَقُ is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ الْجَمْعُ',
        post: 'يَتَسَاقَطُ بَعْضُهُ عَلَى بَعْضٍ.',
        en: 'The crowd was thick, jostling against itself.',
        options: ['حَاشِداً', 'حَاشِدٌ', 'حَاشِدٍ', 'حَاشِدُونَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Sound masculine plural -- wrong number; الْجَمْعُ is a singular collective noun here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَلَا',
        post: 'بَيْنَهُمْ.',
        en: 'So they could not tell them apart.',
        options: ['يُمَيِّزُونَ', 'يُمَيِّزُ', 'مَيَّزُوا', 'تُمَيِّزُونَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine plural -- matches the plural subject رِجَالُ الشُّرْطَةِ.',
          '3rd masculine singular -- wrong number.',
          'Perfect -- wrong tense; the negation لَا with an imperfect meaning is required here.',
          '2nd masculine plural -- wrong person; the sentence is about "they," not "you."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَنْهَالُ الشَّابُّ عَلَى الْمَسِيحِ',
        pre: '',
        post: 'عَلَى الْمَسِيحِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَنْهَالُونَ', 'يَنْهَالُ', 'تَنْهَالُ', 'أَنْهَالُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine singular / 3rd feminine singular -- wrong person or gender.',
          '1st singular -- wrong person entirely.',
        ],
      },
      {
        type: 'shift',
        base: 'يَنْهَالُ الشَّابُّ عَلَى الْمَسِيحِ',
        pre: '',
        post: 'عَلَى الْمَسِيحِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['تَنْهَالُ', 'يَنْهَالُ', 'أَنْهَالُ', 'نَنْهَالُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'يَنْهَالُ الشَّابُّ عَلَى الْمَسِيحِ',
        pre: '',
        post: 'عَلَى الْمَسِيحِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَنْهَالُ', 'يَنْهَالُ', 'تَنْهَالُ', 'أَنْهَالُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person.',
          '1st singular -- wrong number; the target is "we," not "I."',
        ],
      },
    ],
  },
};

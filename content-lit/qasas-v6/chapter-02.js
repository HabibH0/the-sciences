// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 2 -- بَعْدَ يُوسُفَ.
// Printed pages 112-113, ending at the top of p.114 right before ch3's
// title box «بَنُو إِسْرَائِيلَ فِي مِصْرَ» opens partway down that page.
// Transcribed by hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// The deaths of Yaʿqūb and then Yūsuf, and the long eulogy the Egyptians
// give Yūsuf's brothers and nephews -- a direct-speech set piece built
// almost entirely on the anaphoric frame هُوَ الَّذِي ("he is the one who..."),
// six clauses running, which pairs well with this chapter's dense run of
// كَانَ/لَيْسَ clauses for workshop purposes.
//
// Grammar / lexical notes:
//   -- The eulogy's speech-introducing colon (qs-v6-c02-010, وَيَقُولُونَ
//      لَهُمْ:) and the vocative exclamation (qs-v6-c02-011, أَيُّهَا
//      السَّادَةُ!) are each split into their own short sentence entries,
//      matching the precedent already set at qasas-v2/chapter-22.js's قَالَ
//      يَعْقُوبُ: -- a colon or exclamation point is treated as a pause
//      point the same way a comma is.
//   -- هُوَ الَّذِي (qs-v6-c02-015, -017, -019, -022, -024) repeats six
//      times as the eulogy's spine; هُوَ is tagged pos:'noun',
//      features:'nom.3ms' throughout, matching the convention already
//      fixed at qasas-v2/chapter-22.js's هُوَ الَّذِي عَلَى خَزَائِنِ الأَرْضِ.
//   -- دَفِينِ الْيَوْمِ (qs-v6-c02-013, "today's buried one," i.e. the man
//      buried today) is tagged under a new standalone participle-noun
//      lemma دَفِين, the same convention already used for other
//      participles like نَاصِح/شَفِيق/جَاهِل -- not folded into the verb
//      دَفَنَ.
//   -- مَظْلُوم (qs-v6-c02-019, "the wronged one") is likewise a new
//      standalone participle lemma, the passive counterpart of the new
//      verb ظَلَمَ taught two clauses earlier (qs-v6-c02-017) -- both are
//      listed separately in newWords since neither reduces to the other.
//   -- أَبَدًا (qs-v6-c02-026) keeps the frozen lemma spelling already
//      fixed at qasas-v2/chapter-03.js/chapter-20.js (lemma 'أَبَدًا',
//      features 'indef.acc') even though this page's surface form
//      prints the tanwīn-alif as أَبَداً -- same word, house spelling.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): بَعْدَ (qasas-v1
//      ch14), مُدَّة (qasas-v1 ch14), مَاتَ (qasas-v2 ch22), حَزِنَ (qasas-v2
//      ch5), عَلَى، يُوسُف، أَهْل (qasas-v2 ch9), مِصْر (qasas-v2 ch7)، شَيْخ
//      (qasas-v2 ch1), فِي، كَأَنَّ (qasas-v3 ch19)، فَقَدَ (qasas-v2 ch20)،
//      أَب، أَيْضًا (qasas-v1 ch5)، كَانَ، يَوْم (qasas-v1 ch1)، شَدِيد (qasas-v2
//      ch2)، حُزْن، بَكَى (qasas-v2 ch9)، بُكَاء (qasas-v2 ch23)، طَوِيل
//      (qasas-v2 ch20)، نَسِيَ (qasas-v2 ch6)، النَّاس، لَمْ، مُصِيبَة (qasas-v2
//      ch21)، قَبْلَ (qasas-v1 ch1)، هَذَا، بَعْض (qasas-v2 ch2)، كُلّ، صَغِير
//      (qasas-v1 ch14)، كَبِير، مَشَى (qasas-v1 ch5)، أَخ، اِبْن، أَيُّهَا (qasas-v2
//      ch20)، سَيِّد، لَيْسَ (qasas-v1 ch7)، أَكْبَر (qasas-v1 ch4)، مِنْ، نَحْنُ
//      (qasas-v2 ch22)، قَدْ، شَفِيق، رَحِيم (qasas-v2 ch9)، مَلِك، الَّذِي، عَبْد،
//      ظُلْم (qasas-v2 ch20)، مِنَ، بَلَد، مَنَعَ (qasas-v1 ch9)، قَوِيّ (qasas-v1
//      ch7)، أَكَلَ، ضَعِيف (qasas-v1 ch7)، أَطْعَمَ (qasas-v1 ch9)، هَدَى (qasas-v1
//      ch9)، إِلَى، حَقّ (qasas-v2 ch9)، دَعَا (qasas-v1 ch8)، اللَّه، عَرَفَ
//      (qasas-v1 ch2)، آخِرَة (qasas-v2 ch25)، مَجَاعَة (qasas-v2 ch17)، آخَر
//      (qasas-v1 ch16)، إِنَّ، مَلِك، الْكَرِيم، أَنَّ، بَيْت، بِ، فَرِحَ، فَرَح، كَمَا
//      (qasas-v1 ch16)
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 20 new words (دَفَنَ، عَزَّى، عَادِل، أَرَاحَ، أَزَالَ، ظَلَمَ، مَظْلُوم، أَغَاثَ،
// أَجَارَ، خَائِف، جَائِع، بَهِيمَة، شَبِعَ، كَمْ، قُدُوم، خَسَارَة، دَفِين، سَوَاء،
// أَصَابَ، حَيَاة).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'بَعْدَ يُوسُفَ', en: 'After Yūsuf' },
  newWords: [
    'دَفَنَ', 'عَزَّى', 'عَادِل', 'أَرَاحَ', 'أَزَالَ', 'ظَلَمَ', 'مَظْلُوم', 'أَغَاثَ',
    'أَجَارَ', 'خَائِف', 'جَائِع', 'بَهِيمَة', 'شَبِعَ', 'كَمْ', 'قُدُوم', 'خَسَارَة',
    'دَفِين', 'سَوَاء', 'أَصَابَ', 'حَيَاة',
  ],
  lemmas: {
    دَفَنَ: { gloss: 'to bury' },
    عَزَّى: { gloss: 'to console' },
    عَادِل: { gloss: 'just, fair' },
    أَرَاحَ: { gloss: 'to give rest, relieve' },
    أَزَالَ: { gloss: 'to remove' },
    ظَلَمَ: { gloss: 'to wrong, oppress' },
    مَظْلُوم: { gloss: 'wronged, oppressed one' },
    أَغَاثَ: { gloss: 'to relieve, come to the aid of' },
    أَجَارَ: { gloss: 'to protect, grant refuge to' },
    خَائِف: { gloss: 'fearful, one who is afraid' },
    جَائِع: { gloss: 'hungry' },
    بَهِيمَة: { gloss: 'beast, dumb animal' },
    شَبِعَ: { gloss: 'to be sated, eat one’s fill' },
    كَمْ: { gloss: 'how much, how many; how greatly' },
    قُدُوم: { gloss: 'arrival, coming' },
    خَسَارَة: { gloss: 'loss' },
    دَفِين: { gloss: 'the buried one, the deceased' },
    سَوَاء: { gloss: 'equal, alike' },
    أَصَابَ: { gloss: 'to befall, afflict' },
    حَيَاة: { gloss: 'life' },
  },
  paragraphs: [
    {
      en: "After a time Yaʿqūb died, and Yūsuf and the people of Egypt grieved for him; they buried the elder in Egypt as though they had lost their own father. After another time Yūsuf himself died, and it was a hard day for the people of Egypt -- they grieved for him bitterly and wept long for him, forgetting their earlier griefs as though no calamity had ever touched them before that day. They buried Yūsuf too, and people consoled one another, for they were all equal in losing him: every young person had lost a father, every elder had lost a brother. People went out to Yūsuf's brothers and their sons to console them,",
      sentences: [
        {
          id: 'qs-v6-c02-001',
          ar: 'وَبَعْدَ مُدَّةٍ مَاتَ يَعْقُوبُ فَحَزِنَ عَلَيْهِ يُوسُفُ وَحَزِنَ عَلَيْهِ أَهْلُ مِصْرَ.',
          en: 'After a time Yaʿqūb died, and Yūsuf grieved for him, and the people of Egypt grieved for him.',
          tokens: [
            { surface: 'وَبَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'conj+prep', gloss: 'and after' },
            { surface: 'مُدَّةٍ', lemma: 'مُدَّة', pos: 'noun', features: 'indef.gen', gloss: 'a time, a while' },
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to die; died' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'فَحَزِنَ', lemma: 'حَزِنَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grieve; so grieved' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'وَحَزِنَ', lemma: 'حَزِنَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grieve; and grieved' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
          ],
        },
        {
          id: 'qs-v6-c02-002',
          ar: 'وَدَفَنُوا الشَّيْخَ فِي مِصْرَ وَكَأَنَّهُمْ فَقَدُوا أَبَاهُمْ.',
          en: 'They buried the elder in Egypt, as though they had lost their own father.',
          tokens: [
            { surface: 'وَدَفَنُوا', lemma: 'دَفَنَ', pos: 'verb', features: 'conj+perf.3mp', root: 'د ف ن', gloss: 'to bury; and buried' },
            { surface: 'الشَّيْخَ', lemma: 'شَيْخ', pos: 'noun', features: 'def.acc', gloss: 'the elder' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَكَأَنَّهُمْ', lemma: 'كَأَنَّ', pos: 'part', features: 'conj+part+3mp', root: 'ك أ ن', gloss: 'as though they' },
            { surface: 'فَقَدُوا', lemma: 'فَقَدَ', pos: 'verb', features: 'perf.3mp', gloss: 'to lose; had lost' },
            { surface: 'أَبَاهُمْ', lemma: 'أَب', pos: 'noun', features: 'acc+3mp', root: 'أ ب و', gloss: 'their father' },
          ],
        },
        {
          id: 'qs-v6-c02-003',
          ar: 'وَبَعْدَ مُدَّةٍ مَاتَ يُوسُفُ أَيْضاً فَكَانَ يَوْماً عَلَى أَهْلِ مِصْرَ شَدِيداً.',
          en: 'After a time Yūsuf died too, and it was a hard day for the people of Egypt.',
          tokens: [
            { surface: 'وَبَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'conj+prep', gloss: 'and after' },
            { surface: 'مُدَّةٍ', lemma: 'مُدَّة', pos: 'noun', features: 'indef.gen', gloss: 'a time, a while' },
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to die; died' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'أَيْضاً', lemma: 'أَيْضًا', pos: 'adv', features: 'indef.acc', gloss: 'also, too' },
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; so it was' },
            { surface: 'يَوْماً', lemma: 'يَوْم', pos: 'noun', features: 'indef.acc', gloss: 'a day' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon, for' },
            { surface: 'أَهْلِ', lemma: 'أَهْل', pos: 'noun', features: 'gen.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'شَدِيداً', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', gloss: 'severe, hard' },
          ],
        },
        {
          id: 'qs-v6-c02-004',
          ar: 'وَحَزِنَ عَلَيْهِ أَهْلُ مِصْرَ حُزْناً شَدِيداً وَبَكَوْا عَلَيْهِ بُكَاءً طَوِيلاً.',
          en: 'The people of Egypt grieved for him bitterly and wept long for him.',
          tokens: [
            { surface: 'وَحَزِنَ', lemma: 'حَزِنَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grieve; and grieved' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'nom.constr', gloss: 'the people of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'حُزْناً', lemma: 'حُزْن', pos: 'noun', features: 'indef.acc', gloss: 'grief (intensely)' },
            { surface: 'شَدِيداً', lemma: 'شَدِيد', pos: 'adj', features: 'indef.acc', gloss: 'severe, bitter' },
            { surface: 'وَبَكَوْا', lemma: 'بَكَى', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to weep; and wept' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'بُكَاءً', lemma: 'بُكَاء', pos: 'noun', features: 'indef.acc', gloss: 'weeping' },
            { surface: 'طَوِيلاً', lemma: 'طَوِيل', pos: 'adj', features: 'indef.acc', gloss: 'long' },
          ],
        },
        {
          id: 'qs-v6-c02-005',
          ar: 'وَنَسِيَ النَّاسُ أَحْزَانَهُمْ وَكَأَنَّهُمْ لَمْ تُصِبْهُمْ مُصِيبَةٌ قَبْلَ هَذَا الْيَوْمِ.',
          en: 'People forgot their earlier griefs, as though no calamity had ever touched them before this day.',
          tokens: [
            { surface: 'وَنَسِيَ', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to forget; and forgot' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'أَحْزَانَهُمْ', lemma: 'حُزْن', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their griefs' },
            { surface: 'وَكَأَنَّهُمْ', lemma: 'كَأَنَّ', pos: 'part', features: 'conj+part+3mp', root: 'ك أ ن', gloss: 'as though they' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُصِبْهُمْ', lemma: 'أَصَابَ', pos: 'verb', features: 'impf.3fs+3mp', root: 'ص و ب', gloss: 'to befall; had touched them' },
            { surface: 'مُصِيبَةٌ', lemma: 'مُصِيبَة', pos: 'noun', features: 'indef.nom', gloss: 'a calamity' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'acc.constr', gloss: 'before' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْيَوْمِ', lemma: 'يَوْم', pos: 'noun', features: 'def.gen', gloss: 'the day' },
          ],
        },
        {
          id: 'qs-v6-c02-006',
          ar: 'وَدَفَنُوا يُوسُفَ أَيْضاً وَعَزَّى بَعْضُهُمْ بَعْضاً،',
          en: 'They buried Yūsuf too, and people consoled one another,',
          tokens: [
            { surface: 'وَدَفَنُوا', lemma: 'دَفَنَ', pos: 'verb', features: 'conj+perf.3mp', root: 'د ف ن', gloss: 'to bury; and buried' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'أَيْضاً', lemma: 'أَيْضًا', pos: 'adv', features: 'indef.acc', gloss: 'also, too' },
            { surface: 'وَعَزَّى', lemma: 'عَزَّى', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ز و', gloss: 'to console; and consoled' },
            { surface: 'بَعْضُهُمْ', lemma: 'بَعْض', pos: 'noun', features: 'nom+3mp', gloss: 'some of them' },
            { surface: 'بَعْضاً', lemma: 'بَعْض', pos: 'noun', features: 'indef.acc', gloss: 'some (others)' },
          ],
        },
        {
          id: 'qs-v6-c02-007',
          ar: 'فَكَانُوا فِي يُوسُفَ سَوَاءً.',
          en: 'for they were all equal in losing him.',
          tokens: [
            { surface: 'فَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; for they were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'concerning, in' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'سَوَاءً', lemma: 'سَوَاء', pos: 'adj', features: 'indef.acc', root: 'س و ي', gloss: 'equal, alike' },
          ],
        },
        {
          id: 'qs-v6-c02-008',
          ar: 'كُلُّ صَغِيرٍ فَقَدَ أَبَاهُ وَكُلُّ كَبِيرٍ فَقَدَ أَخَاهُ.',
          en: 'Every young person had lost a father, and every elder had lost a brother.',
          tokens: [
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'صَغِيرٍ', lemma: 'صَغِير', pos: 'adj', features: 'indef.gen', root: 'ص غ ر', gloss: 'young one' },
            { surface: 'فَقَدَ', lemma: 'فَقَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to lose; lost' },
            { surface: 'أَبَاهُ', lemma: 'أَب', pos: 'noun', features: 'acc+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'وَكُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and every' },
            { surface: 'كَبِيرٍ', lemma: 'كَبِير', pos: 'adj', features: 'indef.gen', gloss: 'elder one' },
            { surface: 'فَقَدَ', lemma: 'فَقَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to lose; lost' },
            { surface: 'أَخَاهُ', lemma: 'أَخ', pos: 'noun', features: 'acc+3ms', root: 'أ خ و', gloss: 'his brother' },
          ],
        },
        {
          id: 'qs-v6-c02-009',
          ar: 'وَمَشَى النَّاسُ إِلَى إِخْوَةِ يُوسُفَ وَأَبْنَائِهِمْ يُعَزُّونَهُمْ.',
          en: "People went out to Yūsuf's brothers and their sons, consoling them.",
          tokens: [
            { surface: 'وَمَشَى', lemma: 'مَشَى', pos: 'verb', features: 'conj+perf.3ms', root: 'م ش ي', gloss: 'to walk; and went' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'إِخْوَةِ', lemma: 'أَخ', pos: 'noun', features: 'pl.constr.gen', root: 'أ خ و', gloss: 'the brothers of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'وَأَبْنَائِهِمْ', lemma: 'اِبْن', pos: 'noun', features: 'conj+pl.gen+3mp', root: 'ب ن و', gloss: 'and their sons' },
            { surface: 'يُعَزُّونَهُمْ', lemma: 'عَزَّى', pos: 'verb', features: 'impf.3mp+3mp', root: 'ع ز و', gloss: 'to console; consoling them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ بَعْدَ مَوْتِ يَعْقُوبَ؟',
          options: ['حَزِنَ عَلَيْهِ يُوسُفُ وَأَهْلُ مِصْرَ وَدَفَنُوهُ فِي مِصْرَ', 'رَجَعَ أَهْلُهُ إِلَى كَنْعَانَ فَوْراً', 'لَمْ يَحْزَنْ عَلَيْهِ أَحَدٌ'],
          answer: 0,
          qEn: "What happened after Yaʿqūb's death?",
          optionsEn: ['Yūsuf and the people of Egypt grieved for him and buried him in Egypt', 'His family returned to Canaan immediately', 'No one grieved for him'],
        },
        {
          q: 'لِمَاذَا كَانَ يَوْمُ مَوْتِ يُوسُفَ شَدِيداً عَلَى أَهْلِ مِصْرَ؟',
          options: ['لِأَنَّهُمْ حَزِنُوا عَلَيْهِ حُزْناً شَدِيداً وَبَكَوْا عَلَيْهِ بُكَاءً طَوِيلاً', 'لِأَنَّ فِرْعَوْنَ غَضِبَ', 'لِأَنَّ الْمَجَاعَةَ بَدَأَتْ'],
          answer: 0,
          qEn: "Why was the day of Yūsuf's death hard for the people of Egypt?",
          optionsEn: ['Because they grieved for him bitterly and wept long for him', 'Because Pharaoh grew angry', 'Because a famine began'],
        },
      ],
    },
    {
      en: "and said to them: 'O masters! Your loss today is no greater than our own loss. In today's burial we have lost a caring brother, a merciful lord, and a just king. He is the one who gave the servants of Allah rest and removed injustice from the land; he is the one who stopped the strong from wronging the weak, and the powerful from devouring the weak; he is the one who relieved the wronged, protected the fearful, and fed the hungry; he is the one who guided us to the truth and called us to Allah -- before his coming we were like dumb beasts, knowing neither Allah nor the Hereafter; he is the one who relieved us in the days of famine, so that we ate our fill while people in other lands were dying. We will never forget our noble king, and we will never forget, O masters, that you are his brothers and his household. How greatly our master rejoiced on the day of your arrival in Egypt, and how greatly we rejoiced at our master's joy! So the land is your land, and we belong to you, O masters, just as we did in our master's lifetime.'",
      sentences: [
        {
          id: 'qs-v6-c02-010',
          ar: 'وَيَقُولُونَ لَهُمْ:',
          en: 'and said to them:',
          tokens: [
            { surface: 'وَيَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v6-c02-011',
          ar: 'أَيُّهَا السَّادَةُ!',
          en: 'O masters!',
          tokens: [
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'noun', features: 'nom', root: 'أ ي ي', gloss: 'O (vocative)' },
            { surface: 'السَّادَةُ', lemma: 'سَيِّد', pos: 'noun', features: 'pl.def.nom', gloss: 'the masters' },
          ],
        },
        {
          id: 'qs-v6-c02-012',
          ar: 'لَيْسَتْ خَسَارَتُكُمُ الْيَوْمَ أَكْبَرَ مِنْ خَسَارَتِنَا نَحْنُ.',
          en: 'Your loss today is no greater than our own loss.',
          tokens: [
            { surface: 'لَيْسَتْ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3fs', root: 'ل ي س', gloss: 'is not' },
            { surface: 'خَسَارَتُكُمُ', lemma: 'خَسَارَة', pos: 'noun', features: 'nom+2mp', root: 'خ س ر', gloss: 'your loss' },
            { surface: 'الْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'def.acc', gloss: 'today' },
            { surface: 'أَكْبَرَ', lemma: 'أَكْبَر', pos: 'adj', features: 'acc', gloss: 'greater' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'خَسَارَتِنَا', lemma: 'خَسَارَة', pos: 'noun', features: 'gen+1p', gloss: 'our loss' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'nom', gloss: 'we ourselves' },
          ],
        },
        {
          id: 'qs-v6-c02-013',
          ar: 'فَقَدْ فَقَدْنَا فِي دَفِينِ الْيَوْمِ أَخاً شَفِيقاً،',
          en: "In today's burial we have lost a caring brother,",
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: '(emphasis) indeed' },
            { surface: 'فَقَدْنَا', lemma: 'فَقَدَ', pos: 'verb', features: 'perf.1p', gloss: 'to lose; we have lost' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'دَفِينِ', lemma: 'دَفِين', pos: 'noun', features: 'constr.gen', root: 'د ف ن', gloss: 'the buried one of' },
            { surface: 'الْيَوْمِ', lemma: 'يَوْم', pos: 'noun', features: 'def.gen', gloss: 'the day' },
            { surface: 'أَخاً', lemma: 'أَخ', pos: 'noun', features: 'indef.acc', root: 'أ خ و', gloss: 'a brother' },
            { surface: 'شَفِيقاً', lemma: 'شَفِيق', pos: 'adj', features: 'indef.acc', gloss: 'caring, compassionate' },
          ],
        },
        {
          id: 'qs-v6-c02-014',
          ar: 'وَسَيِّداً رَحِيماً وَمَلِكاً عَادِلاً.',
          en: 'a merciful lord, and a just king.',
          tokens: [
            { surface: 'وَسَيِّداً', lemma: 'سَيِّد', pos: 'noun', features: 'conj+indef.acc', gloss: 'and a lord' },
            { surface: 'رَحِيماً', lemma: 'رَحِيم', pos: 'adj', features: 'indef.acc', gloss: 'merciful' },
            { surface: 'وَمَلِكاً', lemma: 'مَلِك', pos: 'noun', features: 'conj+indef.acc', gloss: 'and a king' },
            { surface: 'عَادِلاً', lemma: 'عَادِل', pos: 'adj', features: 'indef.acc', root: 'ع د ل', gloss: 'just' },
          ],
        },
        {
          id: 'qs-v6-c02-015',
          ar: 'هُوَ الَّذِي أَرَاحَ الْعِبَادَ،',
          en: 'He is the one who gave the servants of Allah rest,',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'أَرَاحَ', lemma: 'أَرَاحَ', pos: 'verb', features: 'perf.3ms', root: 'ر و ح', gloss: 'to give rest; gave rest' },
            { surface: 'الْعِبَادَ', lemma: 'عَبْد', pos: 'noun', features: 'pl.def.acc', gloss: 'the servants (of Allah)' },
          ],
        },
        {
          id: 'qs-v6-c02-016',
          ar: 'وَأَزَالَ الظُّلْمَ مِنَ الْبِلَادِ.',
          en: 'and removed injustice from the land.',
          tokens: [
            { surface: 'وَأَزَالَ', lemma: 'أَزَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ز ي ل', gloss: 'to remove; and removed' },
            { surface: 'الظُّلْمَ', lemma: 'ظُلْم', pos: 'noun', features: 'def.acc', gloss: 'the injustice' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْبِلَادِ', lemma: 'بَلَد', pos: 'noun', features: 'pl.def.gen', root: 'ب ل د', gloss: 'the land' },
          ],
        },
        {
          id: 'qs-v6-c02-017',
          ar: 'هُوَ الَّذِي مَنَعَ الْكَبِيرَ يَظْلِمُ الصَّغِيرَ،',
          en: 'He is the one who stopped the strong from wronging the weak,',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'مَنَعَ', lemma: 'مَنَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to prevent; stopped' },
            { surface: 'الْكَبِيرَ', lemma: 'كَبِير', pos: 'noun', features: 'def.acc', gloss: 'the big one, the strong' },
            { surface: 'يَظْلِمُ', lemma: 'ظَلَمَ', pos: 'verb', features: 'impf.3ms', root: 'ظ ل م', gloss: 'to wrong; from wronging' },
            { surface: 'الصَّغِيرَ', lemma: 'صَغِير', pos: 'noun', features: 'def.acc', gloss: 'the small one, the weak' },
          ],
        },
        {
          id: 'qs-v6-c02-018',
          ar: 'وَمَنَعَ الْقَوِيَّ يَأْكُلُ الضَّعِيفَ.',
          en: 'and the powerful from devouring the weak.',
          tokens: [
            { surface: 'وَمَنَعَ', lemma: 'مَنَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to prevent; and stopped' },
            { surface: 'الْقَوِيَّ', lemma: 'قَوِيّ', pos: 'noun', features: 'def.acc', gloss: 'the strong, the powerful' },
            { surface: 'يَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to eat; from devouring' },
            { surface: 'الضَّعِيفَ', lemma: 'ضَعِيف', pos: 'noun', features: 'def.acc', gloss: 'the weak' },
          ],
        },
        {
          id: 'qs-v6-c02-019',
          ar: 'هُوَ الَّذِي أَغَاثَ الْمَظْلُومَ،',
          en: 'He is the one who relieved the wronged,',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'أَغَاثَ', lemma: 'أَغَاثَ', pos: 'verb', features: 'perf.3ms', root: 'غ و ث', gloss: 'to relieve, aid; relieved' },
            { surface: 'الْمَظْلُومَ', lemma: 'مَظْلُوم', pos: 'noun', features: 'def.acc', root: 'ظ ل م', gloss: 'the wronged one' },
          ],
        },
        {
          id: 'qs-v6-c02-020',
          ar: 'وَأَجَارَ الْخَائِفَ،',
          en: 'protected the fearful,',
          tokens: [
            { surface: 'وَأَجَارَ', lemma: 'أَجَارَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج و ر', gloss: 'to protect; and protected' },
            { surface: 'الْخَائِفَ', lemma: 'خَائِف', pos: 'noun', features: 'def.acc', root: 'خ و ف', gloss: 'the fearful one' },
          ],
        },
        {
          id: 'qs-v6-c02-021',
          ar: 'وَأَطْعَمَ الْجَائِعَ.',
          en: 'and fed the hungry.',
          tokens: [
            { surface: 'وَأَطْعَمَ', lemma: 'أَطْعَمَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to feed; and fed' },
            { surface: 'الْجَائِعَ', lemma: 'جَائِع', pos: 'noun', features: 'def.acc', root: 'ج و ع', gloss: 'the hungry one' },
          ],
        },
        {
          id: 'qs-v6-c02-022',
          ar: 'هُوَ الَّذِي هَدَانَا إِلَى الْحَقِّ،',
          en: 'He is the one who guided us to the truth,',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'هَدَانَا', lemma: 'هَدَى', pos: 'verb', features: 'perf.3ms+1p', gloss: 'to guide; guided us' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'def.gen', gloss: 'the truth' },
          ],
        },
        {
          id: 'qs-v6-c02-023',
          ar: 'وَدَعَانَا إِلَى اللَّهِ وَكُنَّا قَبْلَ قُدُومِهِ بَهَائِمَ لَا نَعْرِفُ اللَّهَ وَلَا نَعْرِفُ الْآخِرَةَ.',
          en: 'and called us to Allah -- before his coming we were like dumb beasts, knowing neither Allah nor the Hereafter.',
          tokens: [
            { surface: 'وَدَعَانَا', lemma: 'دَعَا', pos: 'verb', features: 'conj+perf.3ms+1p', gloss: 'to call; and called us' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', root: 'ك و ن', gloss: 'to be; and we were' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'adv', features: 'acc.constr', gloss: 'before' },
            { surface: 'قُدُومِهِ', lemma: 'قُدُوم', pos: 'noun', features: 'gen+3ms', root: 'ق د م', gloss: 'his coming' },
            { surface: 'بَهَائِمَ', lemma: 'بَهِيمَة', pos: 'noun', features: 'pl.indef.acc', root: 'ب ه م', gloss: 'dumb beasts' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.1p', gloss: 'to know; we know' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.1p', gloss: 'to know; we know' },
            { surface: 'الْآخِرَةَ', lemma: 'آخِرَة', pos: 'noun', features: 'def.acc', gloss: 'the Hereafter' },
          ],
        },
        {
          id: 'qs-v6-c02-024',
          ar: 'هُوَ الَّذِي أَغَاثَنَا أَيَّامَ الْمَجَاعَةِ فَكُنَّا نَأْكُلُ وَنَشْبَعُ،',
          en: 'He is the one who relieved us in the days of famine, so that we ate our fill,',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'the one who' },
            { surface: 'أَغَاثَنَا', lemma: 'أَغَاثَ', pos: 'verb', features: 'perf.3ms+1p', root: 'غ و ث', gloss: 'to relieve; relieved us' },
            { surface: 'أَيَّامَ', lemma: 'يَوْم', pos: 'noun', features: 'pl.acc.constr', gloss: 'the days of' },
            { surface: 'الْمَجَاعَةِ', lemma: 'مَجَاعَة', pos: 'noun', features: 'def.gen', gloss: 'the famine' },
            { surface: 'فَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', root: 'ك و ن', gloss: 'to be; so we were' },
            { surface: 'نَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.1p', gloss: 'to eat; eating' },
            { surface: 'وَنَشْبَعُ', lemma: 'شَبِعَ', pos: 'verb', features: 'conj+impf.1p', root: 'ش ب ع', gloss: 'to be sated; and eating our fill' },
          ],
        },
        {
          id: 'qs-v6-c02-025',
          ar: 'وَالنَّاسُ يَمُوتُونَ فِي الْبِلَادِ الْأُخْرَى.',
          en: 'while people in other lands were dying.',
          tokens: [
            { surface: 'وَالنَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'conj+def.nom', gloss: 'while the people' },
            { surface: 'يَمُوتُونَ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3mp', gloss: 'to die; were dying' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبِلَادِ', lemma: 'بَلَد', pos: 'noun', features: 'pl.def.gen', gloss: 'the lands' },
            { surface: 'الْأُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'def.gen.f', gloss: 'other' },
          ],
        },
        {
          id: 'qs-v6-c02-026',
          ar: 'إِنَّا لَا نَنْسَى مَلِكَنَا الْكَرِيمَ أَبَداً وَلَا نَنْسَى أَيُّهَا السَّادَةُ أَنَّكُمْ إِخْوَتُهُ وَأَهْلُ بَيْتِهِ.',
          en: 'We will never forget our noble king, and we will never forget, O masters, that you are his brothers and his household.',
          tokens: [
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَنْسَى', lemma: 'نَسِيَ', pos: 'verb', features: 'impf.1p', gloss: 'to forget; we forget' },
            { surface: 'مَلِكَنَا', lemma: 'مَلِك', pos: 'noun', features: 'acc+1p', gloss: 'our king' },
            { surface: 'الْكَرِيمَ', lemma: 'كَرِيم', pos: 'adj', features: 'def.acc', gloss: 'the noble' },
            { surface: 'أَبَداً', lemma: 'أَبَدًا', pos: 'adv', features: 'indef.acc', gloss: 'ever, never' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَنْسَى', lemma: 'نَسِيَ', pos: 'verb', features: 'impf.1p', gloss: 'to forget; we forget' },
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'noun', features: 'nom', gloss: 'O (vocative)' },
            { surface: 'السَّادَةُ', lemma: 'سَيِّد', pos: 'noun', features: 'pl.def.nom', gloss: 'the masters' },
            { surface: 'أَنَّكُمْ', lemma: 'أَنَّ', pos: 'conj', features: 'conj+2mp', gloss: 'that you' },
            { surface: 'إِخْوَتُهُ', lemma: 'أَخ', pos: 'noun', features: 'pl.nom+3ms', root: 'أ خ و', gloss: 'his brothers' },
            { surface: 'وَأَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the household of' },
            { surface: 'بَيْتِهِ', lemma: 'بَيْت', pos: 'noun', features: 'gen+3ms', gloss: 'his house' },
          ],
        },
        {
          id: 'qs-v6-c02-027',
          ar: 'وَكَمْ فَرِحَ بِكُمْ سَيِّدُنَا يَوْمَ قُدُومِكُمْ إِلَى مِصْرَ وَكَمْ فَرِحْنَا بِفَرَحِ سَيِّدِنَا.',
          en: 'How greatly our master rejoiced on the day of your arrival in Egypt, and how greatly we rejoiced at our master’s joy!',
          tokens: [
            { surface: 'وَكَمْ', lemma: 'كَمْ', pos: 'adv', features: 'conj+adv', root: 'ك م م', gloss: 'and how greatly' },
            { surface: 'فَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'perf.3ms', gloss: 'to rejoice; rejoiced' },
            { surface: 'بِكُمْ', lemma: 'بِ', pos: 'prep', features: 'prep+2mp', gloss: 'at you' },
            { surface: 'سَيِّدُنَا', lemma: 'سَيِّد', pos: 'noun', features: 'nom+1p', gloss: 'our master' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', gloss: 'on the day of' },
            { surface: 'قُدُومِكُمْ', lemma: 'قُدُوم', pos: 'noun', features: 'gen+2mp', root: 'ق د م', gloss: 'your arrival' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'وَكَمْ', lemma: 'كَمْ', pos: 'adv', features: 'conj+adv', gloss: 'and how greatly' },
            { surface: 'فَرِحْنَا', lemma: 'فَرِحَ', pos: 'verb', features: 'perf.1p', gloss: 'to rejoice; we rejoiced' },
            { surface: 'بِفَرَحِ', lemma: 'فَرَح', pos: 'noun', features: 'prep+constr.gen', gloss: 'at the joy of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
          ],
        },
        {
          id: 'qs-v6-c02-028',
          ar: 'فَالْبِلَادُ بِلَادُكُمْ،',
          en: 'So the land is your land,',
          tokens: [
            { surface: 'فَالْبِلَادُ', lemma: 'بَلَد', pos: 'noun', features: 'conj+pl.def.nom', gloss: 'so the land' },
            { surface: 'بِلَادُكُمْ', lemma: 'بَلَد', pos: 'noun', features: 'pl.nom+2mp', gloss: 'your land' },
          ],
        },
        {
          id: 'qs-v6-c02-029',
          ar: 'وَإِنَّا لَكُمْ أَيُّهَا السَّادَةُ كَمَا كُنَّا فِي حَيَاةِ سَيِّدِنَا.',
          en: 'and we belong to you, O masters, just as we did in our master’s lifetime.',
          tokens: [
            { surface: 'وَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'belong to you' },
            { surface: 'أَيُّهَا', lemma: 'أَيُّهَا', pos: 'noun', features: 'nom', gloss: 'O (vocative)' },
            { surface: 'السَّادَةُ', lemma: 'سَيِّد', pos: 'noun', features: 'pl.def.nom', gloss: 'the masters' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'كُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'perf.1p', root: 'ك و ن', gloss: 'to be; we were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'حَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'constr.gen', root: 'ح ي ي', gloss: 'the life of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ النَّاسُ لِإِخْوَةِ يُوسُفَ عَنْ خَسَارَتِهِمْ؟',
          options: ['قَالُوا: لَيْسَتْ خَسَارَتُكُمُ الْيَوْمَ أَكْبَرَ مِنْ خَسَارَتِنَا نَحْنُ', 'قَالُوا: خَسَارَتُكُمْ أَكْبَرُ مِنْ خَسَارَتِنَا', 'لَمْ يَقُولُوا شَيْئاً'],
          answer: 0,
          qEn: "What did the people say to Yūsuf's brothers about their loss?",
          optionsEn: ["They said: 'Your loss today is no greater than our own loss'", "They said: 'Your loss is greater than ours'", 'They said nothing'],
        },
        {
          q: 'مَاذَا فَعَلَ يُوسُفُ لِلنَّاسِ فِي أَيَّامِ الْمَجَاعَةِ؟',
          options: ['أَغَاثَهُمْ فَكَانُوا يَأْكُلُونَ وَيَشْبَعُونَ', 'تَرَكَهُمْ يَمُوتُونَ مِنَ الْجُوعِ', 'بَاعَ لَهُمُ الطَّعَامَ بِثَمَنٍ غَالٍ'],
          answer: 0,
          qEn: 'What did Yūsuf do for the people during the days of famine?',
          optionsEn: ['He relieved them so they ate their fill', 'He left them to die of hunger', 'He sold them food at a high price'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَبَعْدَ مُدَّةٍ مَاتَ يُوسُفُ أَيْضاً فَكَانَ',
        post: 'عَلَى أَهْلِ مِصْرَ شَدِيداً.',
        en: 'After a time Yūsuf died too, and it was a hard day for the people of Egypt.',
        options: ['يَوْماً', 'يَوْمٌ', 'يَوْمٍ', 'الْيَوْمَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ, matching the pattern already taught.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          '"today" (definite) -- wrong word; the sentence needs "a day", not "today".',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَكَانُوا فِي يُوسُفَ',
        post: '.',
        en: 'for they were all equal in losing him.',
        options: ['سَوَاءً', 'سَوَاءٌ', 'سَوَاءٍ', 'سَوَاءَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ, matching the taught pattern.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative, not nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Accusative without tanwīn -- wrong; the word is indefinite here and needs tanwīn.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'فَرِحَ سَيِّدُنَا بِقُدُومِكُمْ',
        pre: '',
        post: 'بِقُدُومِكُمْ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['فَرِحْنَا', 'فَرِحَ', 'فَرِحْتَ', 'فَرِحُوا'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you.',
          '3rd masculine plural -- they.',
        ],
      },
      {
        type: 'shift',
        base: 'فَرِحَ سَيِّدُنَا بِقُدُومِكُمْ',
        pre: '',
        post: 'بِقُدُومِكُمْ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['فَرِحَتْ', 'فَرِحَ', 'فَرِحْنَا', 'فَرِحُوا'],
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

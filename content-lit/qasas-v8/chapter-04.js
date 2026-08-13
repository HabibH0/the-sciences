// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 4 --
// دَعْوَةُ شُعَيْبٍ. Printed pages 216 (bottom, right after ch3's closing
// Qurʾān quote and the chapter heading box) through 217 (ending right before
// ch5's heading box). Transcribed by hand from the scan (vision OCR,
// 200-400dpi renders) against ../CHAPTER-FORMAT.md.
//
// Despite its title, this chapter is NOT the founding call itself (that
// Qurʾān quote, Hūd 11:84-85, closes ch3 instead per the scan's own layout
// -- see qasas-v8/index.js's header comment). Here Shuʿayb unravels the
// real knot behind his people's fraud -- love of money -- reasoning that
// what remains lawful is better than any profit built on cheating, and that
// the little that benefits outweighs the abundance that does not, closing
// with a Qurʾān fragment (al-Māʾidah 5:100) and then his own sincere,
// gentle counsel sealed with Hūd 11:86.
//
// Grammar / lexical notes:
//   -- Both Qurʾān fragments (qs-v8-c04-014/015 and -019/020) are annotated
//      with full tokens exactly like ordinary narration, per this volume's
//      established convention (see ch1/ch2/ch3's header comments).
//   -- حَلَّ (qs-v8-c04-002, "to loosen, undo [a knot]") reuses ch1's
//      already-taught lemma حَلَّ, but in its literal sense rather than ch1's
//      "to settle" -- both senses share the root ح ل ل and the corpus does
//      not split same-root, same-spelling verb senses into separate lemmas
//      unless the part of speech changes, so this is glossed inline rather
//      than re-declared in newWords.
//   -- تَطْفِيف and بَخْس (qs-v8-c04-009, verbal nouns "short-measuring" and
//      "defrauding") are distinct lemmas from the already-taught verbs
//      طَفَّفَ and بَخَسَ (qasas-v8 ch3) -- same roots, different parts of
//      speech, matching the corpus's noun-vs-verb same-root convention.
//   -- أَرْضَى (qs-v8-c04-011, form IV "to please, satisfy") is a distinct
//      lemma from the already-taught رَضِيَ (form I "to be content") --
//      different measure, causative sense, same pattern already used for
//      خَافَ/أَخَافَ in ch3.
//   -- وَحْد (qs-v8-c04-017, "alone," only ever used accusative with a
//      pronoun suffix: وَحْدَهُ/وَحْدِي/وَحْدَكَ) is a distinct lemma from the
//      already-taught adjective وَحِيد "solitary."
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لِ، فِي، حُبّ، مَال، كَلَام،
//      إِنَّ، مَا، مِنْ، أَخْذ، النَّاس، بِ، خِيَانَة، إِذَا، نَظَرَ، حَيَاة، هَؤُلَاءِ،
//      الَّذِي، جَمَعَ، وَجَدَ، أَنَّ، عَنْ، طَرِيق، كَانَ، إِلَى، فَسَاد، أَوْ، سَرَقَ،
//      غَيْر، اللَّه، عَلَى، مَنْ، بِ، قَلِيل، كَثِير، نَفَعَ، خَيْر، قَالَ، لَا، اِسْتَوَى،
//      خَبِيث، طَيِّب، لَوْ، أَعْجَبَ، كَثْرَة، نَصِيحَة، خَالِص، مُخْلِص، اللَّه، هُوَ،
//      عَلَيْكُمْ، حِكْمَة، عِلْم، اللَّه، إِنْ، كَانَ، مُؤْمِن، حَفِيظ are all already
//      taught and are NOT re-listed in newWords here.
//
// 22 new words (بَسَطَ، عُقْدَة، رِبْح، وَفَاء، أَثْرَى، اِكْتَسَبَ، تَطْفِيف، بَخْس،
// تَلَف، ضَيَاع، بَلَاء، نَهَبَ، أَنْفَقَ، أَرْضَى، سَلَّطَ، أَتْلَفَ، عَبِثَ، رَقِيب، وَحْد،
// رِفْق، بَصِيرَة، بَقِيَّة، مَصِير).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'دَعْوَةُ شُعَيْبٍ', en: 'The Call of Shuʿayb' },
  newWords: ['بَسَطَ', 'عُقْدَة', 'رِبْح', 'وَفَاء', 'أَثْرَى', 'اِكْتَسَبَ', 'تَطْفِيف', 'بَخْس', 'تَلَف', 'ضَيَاع', 'بَلَاء', 'نَهَبَ', 'أَنْفَقَ', 'أَرْضَى', 'سَلَّطَ', 'أَتْلَفَ', 'عَبِثَ', 'رَقِيب', 'وَحْد', 'رِفْق', 'بَصِيرَة', 'بَقِيَّة', 'مَصِير'],
  lemmas: {
    بَسَطَ: { gloss: 'to spread out, speak plainly' },
    عُقْدَة: { gloss: 'a knot' },
    رِبْح: { gloss: 'profit' },
    وَفَاء: { gloss: 'fulfilling, giving in full' },
    أَثْرَى: { gloss: 'to become wealthy' },
    اِكْتَسَبَ: { gloss: 'to earn, acquire' },
    تَطْفِيف: { gloss: 'giving short measure' },
    بَخْس: { gloss: 'defrauding, shortchanging' },
    تَلَف: { gloss: 'ruin, loss' },
    ضَيَاع: { gloss: 'loss, waste' },
    بَلَاء: { gloss: 'affliction, trial' },
    نَهَبَ: { gloss: 'to plunder' },
    أَنْفَقَ: { gloss: 'to spend' },
    أَرْضَى: { gloss: 'to please, satisfy' },
    سَلَّطَ: { gloss: 'to give power over' },
    أَتْلَفَ: { gloss: 'to ruin, destroy' },
    عَبِثَ: { gloss: 'to toy with, meddle' },
    رَقِيب: { gloss: 'watcher, overseer' },
    وَحْد: { gloss: 'alone' },
    رِفْق: { gloss: 'gentleness' },
    بَصِيرَة: { gloss: 'insight' },
    بَقِيَّة: { gloss: 'what remains' },
    مَصِير: { gloss: 'fate, destination' },
  },
  paragraphs: [
    {
      en: 'He speaks plainly to them and loosens a knot in their hearts -- the knot of love of money and gain -- and says:',
      sentences: [
        {
          id: 'qs-v8-c04-001',
          ar: 'وَيَبْسُطُ لَهُمْ فِي الْكَلَامِ',
          en: 'He speaks plainly to them',
          tokens: [
            { surface: 'وَيَبْسُطُ', lemma: 'بَسَطَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ب س ط', gloss: 'to speak plainly; and speaks plainly' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْكَلَامِ', lemma: 'كَلَام', pos: 'noun', features: 'def.gen', gloss: 'the speech' },
          ],
        },
        {
          id: 'qs-v8-c04-002',
          ar: 'وَيَحُلُّ عُقْدَةً فِي أَنْفُسِهِمْ،',
          en: 'and loosens a knot in their hearts,',
          tokens: [
            { surface: 'وَيَحُلُّ', lemma: 'حَلَّ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to loosen, undo; and loosens' },
            { surface: 'عُقْدَةً', lemma: 'عُقْدَة', pos: 'noun', features: 'indef.acc', root: 'ع ق د', gloss: 'a knot' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَنْفُسِهِمْ', lemma: 'نَفْس', pos: 'noun', features: 'pl.gen+3mp', gloss: 'themselves' },
          ],
        },
        {
          id: 'qs-v8-c04-003',
          ar: 'وَهِيَ عُقْدَةُ حُبِّ الْمَالِ وَالزِّيَادَةِ',
          en: 'the knot of love of money and gain,',
          tokens: [
            { surface: 'وَهِيَ', lemma: 'هِيَ', pos: 'noun', features: 'conj+3fs', gloss: 'and it (is)' },
            { surface: 'عُقْدَةُ', lemma: 'عُقْدَة', pos: 'noun', features: 'nom.constr', root: 'ع ق د', gloss: 'the knot of' },
            { surface: 'حُبِّ', lemma: 'حُبّ', pos: 'noun', features: 'gen.constr', gloss: 'love of' },
            { surface: 'الْمَالِ', lemma: 'مَال', pos: 'noun', features: 'def.gen', gloss: 'wealth' },
            { surface: 'وَالزِّيَادَةِ', lemma: 'زِيَادَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and increase' },
          ],
        },
        {
          id: 'qs-v8-c04-004',
          ar: 'فَيَقُولُ:',
          en: 'and says:',
          tokens: [
            { surface: 'فَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say; and says' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا هِيَ الْعُقْدَةُ الَّتِي أَرَادَ شُعَيْبٌ أَنْ يَحُلَّهَا فِي أَنْفُسِ قَوْمِهِ؟',
          options: ['عُقْدَةُ حُبِّ الْمَالِ وَالزِّيَادَةِ', 'عُقْدَةُ الْخَوْفِ مِنَ السَّفَرِ', 'عُقْدَةُ كَرَاهِيَةِ الْغُرَبَاءِ'],
          answer: 0,
          qEn: 'What knot did Shuʿayb want to loosen in his people\'s hearts?',
          optionsEn: ['The knot of love of money and gain', 'The knot of fear of travel', 'The knot of hatred of strangers'],
        },
      ],
    },
    {
      en: 'Indeed, what remains lawful to you of profit after giving the measure and scale in full is better for you than taking people\'s wealth through injustice and treachery. And if you look at your own lives, and at the lives of those who grew rich and amassed wealth, you will find that what you gained through short-measuring, fraud, and treachery met its fate in ruin and loss, or corruption and affliction -- stolen, or plundered, or spent in a way that does not please Allah, or given over to someone who destroyed it and squandered it.',
      sentences: [
        {
          id: 'qs-v8-c04-005',
          ar: 'إِنَّ مَا يَفْضُلُ لَكُمْ مِنَ الرِّبْحِ بَعْدَ وَفَاءِ الْكَيْلِ وَالْمِيزَانِ',
          en: 'Indeed, what remains lawful to you of profit after giving the measure and scale in full',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَفْضُلُ', lemma: 'فَضَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remain, be surplus; remains' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الرِّبْحِ', lemma: 'رِبْح', pos: 'noun', features: 'def.gen', root: 'ر ب ح', gloss: 'the profit' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'وَفَاءِ', lemma: 'وَفَاء', pos: 'noun', features: 'gen.constr', root: 'و ف ي', gloss: 'the giving in full of' },
            { surface: 'الْكَيْلِ', lemma: 'كَيْل', pos: 'noun', features: 'def.gen', gloss: 'the measure' },
            { surface: 'وَالْمِيزَانِ', lemma: 'مِيزَان', pos: 'noun', features: 'conj+def.gen', gloss: 'and the scale' },
          ],
        },
        {
          id: 'qs-v8-c04-006',
          ar: 'خَيْرٌ لَكُمْ مِنْ أَخْذِ أَمْوَالِ النَّاسِ بِالظُّلْمِ وَالْخِيَانَةِ،',
          en: 'is better for you than taking people\'s wealth through injustice and treachery.',
          tokens: [
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'noun', features: 'indef.nom', gloss: 'better' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'أَخْذِ', lemma: 'أَخَذَ', pos: 'noun', features: 'gen.constr', gloss: 'the taking of' },
            { surface: 'أَمْوَالِ', lemma: 'مَال', pos: 'noun', features: 'pl.gen.constr', gloss: 'the wealth of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'بِالظُّلْمِ', lemma: 'ظُلْم', pos: 'noun', features: 'prep+def.gen', gloss: 'through injustice' },
            { surface: 'وَالْخِيَانَةِ', lemma: 'خِيَانَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and treachery' },
          ],
        },
        {
          id: 'qs-v8-c04-007',
          ar: 'وَإِذَا نَظَرْتُمْ فِي حَيَاتِكُمْ،',
          en: 'And if you look at your own lives,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and if' },
            { surface: 'نَظَرْتُمْ', lemma: 'نَظَرَ', pos: 'verb', features: 'perf.2mp', gloss: 'to look; you look' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'حَيَاتِكُمْ', lemma: 'حَيَاة', pos: 'noun', features: 'gen+2mp', gloss: 'your life' },
          ],
        },
        {
          id: 'qs-v8-c04-008',
          ar: 'وَفِي حَيَاةِ هَؤُلَاءِ الَّذِينَ أَثْرَوْا وَجَمَعُوا الأَمْوَالَ،',
          en: 'and at the lives of those who grew rich and amassed wealth,',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and at' },
            { surface: 'حَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'gen.constr', gloss: 'the life of' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'those' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'who' },
            { surface: 'أَثْرَوْا', lemma: 'أَثْرَى', pos: 'verb', features: 'perf.3mp', root: 'ث ر و', gloss: 'to grow rich; grew rich' },
            { surface: 'وَجَمَعُوا', lemma: 'جَمَعَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to gather; and amassed' },
            { surface: 'الأَمْوَالَ', lemma: 'مَال', pos: 'noun', features: 'pl.def.acc', gloss: 'the wealth' },
          ],
        },
        {
          id: 'qs-v8-c04-009',
          ar: 'وَجَدْتُمْ أَنَّ مَا اكْتَسَبْتُمُوهُ عَنْ طَرِيقِ التَّطْفِيفِ وَالْبَخْسِ وَالْخِيَانَةِ،',
          en: 'you will find that what you gained through short-measuring, fraud, and treachery',
          tokens: [
            { surface: 'وَجَدْتُمْ', lemma: 'وَجَدَ', pos: 'verb', features: 'conj+perf.2mp', gloss: 'to find; you found' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'اكْتَسَبْتُمُوهُ', lemma: 'اِكْتَسَبَ', pos: 'verb', features: 'perf.2mp+3ms', root: 'ك س ب', gloss: 'to earn, acquire; you acquired it' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'via' },
            { surface: 'طَرِيقِ', lemma: 'طَرِيق', pos: 'noun', features: 'gen.constr', gloss: 'the way of' },
            { surface: 'التَّطْفِيفِ', lemma: 'تَطْفِيف', pos: 'noun', features: 'def.gen', root: 'ط ف ف', gloss: 'the short-measuring' },
            { surface: 'وَالْبَخْسِ', lemma: 'بَخْس', pos: 'noun', features: 'conj+def.gen', root: 'ب خ س', gloss: 'and the defrauding' },
            { surface: 'وَالْخِيَانَةِ', lemma: 'خِيَانَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and the treachery' },
          ],
        },
        {
          id: 'qs-v8-c04-010',
          ar: 'كَانَ مَصِيرُهُ إِلَى التَّلَفِ وَالضَّيَاعِ أَوِ الْفَسَادِ وَالْبَلَاءِ،',
          en: 'met its fate in ruin and loss, or corruption and affliction,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'مَصِيرُهُ', lemma: 'مَصِير', pos: 'noun', features: 'nom+3ms', root: 'ص ي ر', gloss: 'its fate' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'التَّلَفِ', lemma: 'تَلَف', pos: 'noun', features: 'def.gen', gloss: 'ruin' },
            { surface: 'وَالضَّيَاعِ', lemma: 'ضَيَاع', pos: 'noun', features: 'conj+def.gen', root: 'ض ي ع', gloss: 'and loss' },
            { surface: 'أَوِ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'الْفَسَادِ', lemma: 'فَسَاد', pos: 'noun', features: 'def.gen', gloss: 'corruption' },
            { surface: 'وَالْبَلَاءِ', lemma: 'بَلَاء', pos: 'noun', features: 'conj+def.gen', gloss: 'and affliction' },
          ],
        },
        {
          id: 'qs-v8-c04-011',
          ar: 'فَسُرِقَ أَوْ نُهِبَ أَوْ أُنْفِقَ فِي غَيْرِ مَا يُرْضِي اللَّهَ',
          en: 'stolen, or plundered, or spent in a way that does not please Allah,',
          tokens: [
            { surface: 'فَسُرِقَ', lemma: 'سَرَقَ', pos: 'verb', features: 'conj+pass+perf.3ms', gloss: 'to steal; and it was stolen' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'نُهِبَ', lemma: 'نَهَبَ', pos: 'verb', features: 'pass+perf.3ms', root: 'ن ه ب', gloss: 'to plunder; was plundered' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'أُنْفِقَ', lemma: 'أَنْفَقَ', pos: 'verb', features: 'pass+perf.3ms', root: 'ن ف ق', gloss: 'to spend; was spent' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'gen.constr', gloss: 'other than' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يُرْضِي', lemma: 'أَرْضَى', pos: 'verb', features: 'impf.3ms', root: 'ر ض ي', gloss: 'to please, satisfy; pleases' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v8-c04-012',
          ar: 'أَوْ سُلِّطَ عَلَيْهِ مَنْ أَتْلَفَهُ وَعَبَثَ بِهِ،',
          en: 'or given over to someone who destroyed it and squandered it.',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'سُلِّطَ', lemma: 'سَلَّطَ', pos: 'verb', features: 'pass+perf.3ms', root: 'س ل ط', gloss: 'to give power over; was given power' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'over it' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'one who' },
            { surface: 'أَتْلَفَهُ', lemma: 'أَتْلَفَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'ت ل ف', gloss: 'to destroy; destroyed it' },
            { surface: 'وَعَبَثَ', lemma: 'عَبِثَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ب ث', gloss: 'to toy with, squander; and squandered' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَحْدُثُ عَادَةً لِلْمَالِ الَّذِي يُكْتَسَبُ بِالتَّطْفِيفِ وَالْبَخْسِ وَالْخِيَانَةِ؟',
          options: ['يَكُونُ مَصِيرُهُ إِلَى التَّلَفِ وَالضَّيَاعِ أَوِ الْفَسَادِ وَالْبَلَاءِ', 'يَبْقَى وَيَزْدَادُ بَرَكَةً لِصَاحِبِهِ', 'يَتَحَوَّلُ إِلَى ذَهَبٍ خَالِصٍ'],
          answer: 0,
          qEn: 'What usually happens to wealth gained through short-measuring, fraud, and treachery?',
          optionsEn: ['Its fate is ruin and loss, or corruption and affliction', 'It stays and grows in blessing for its owner', 'It turns into pure gold'],
        },
      ],
    },
    {
      en: 'And the little that benefits is better than the abundance that does not: "Say: the foul and the good are not equal, even if the abundance of the foul impresses you."',
      sentences: [
        {
          id: 'qs-v8-c04-013',
          ar: 'وَالْقَلِيلُ الَّذِي يَنْفَعُ خَيْرٌ مِنَ الْكَثِيرِ الَّذِي لَا يَنْفَعُ:',
          en: 'And the little that benefits is better than the abundance that does not:',
          tokens: [
            { surface: 'وَالْقَلِيلُ', lemma: 'قَلِيل', pos: 'noun', features: 'conj+def.nom', gloss: 'and the little' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'that which' },
            { surface: 'يَنْفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to benefit; benefits' },
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'noun', features: 'indef.nom', gloss: 'better' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'الْكَثِيرِ', lemma: 'كَثِير', pos: 'adj', features: 'def.gen', gloss: 'the much' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'that which' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to benefit; benefit' },
          ],
        },
        {
          id: 'qs-v8-c04-014',
          ar: '﴿قُلْ لَا يَسْتَوِي الْخَبِيثُ وَالطَّيِّبُ﴾',
          en: '"Say: the foul and the good are not equal,',
          tokens: [
            { surface: 'قُلْ', lemma: 'قَالَ', pos: 'verb', features: 'imp.2ms', gloss: 'to say; say!' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَوِي', lemma: 'اِسْتَوَى', pos: 'verb', features: 'impf.3ms', root: 'س و ي', gloss: 'to be equal; are equal' },
            { surface: 'الْخَبِيثُ', lemma: 'خَبِيث', pos: 'noun', features: 'def.nom', gloss: 'the foul' },
            { surface: 'وَالطَّيِّبُ', lemma: 'طَيِّب', pos: 'noun', features: 'conj+def.nom', gloss: 'and the good' },
          ],
        },
        {
          id: 'qs-v8-c04-015',
          ar: '﴿وَلَوْ أَعْجَبَكَ كَثْرَةُ الْخَبِيثِ﴾.',
          en: 'even if the abundance of the foul impresses you."',
          tokens: [
            { surface: 'وَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj+conj', gloss: 'even if' },
            { surface: 'أَعْجَبَكَ', lemma: 'أَعْجَبَ', pos: 'verb', features: 'perf.3ms+2ms', gloss: 'to impress, please; impresses you' },
            { surface: 'كَثْرَةُ', lemma: 'كَثْرَة', pos: 'noun', features: 'nom.constr', gloss: 'the abundance of' },
            { surface: 'الْخَبِيثِ', lemma: 'خَبِيث', pos: 'noun', features: 'def.gen', gloss: 'the foul' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيُّهُمَا خَيْرٌ بِحَسَبِ الآيَةِ الَّتِي ذَكَرَهَا شُعَيْبٌ: الْقَلِيلُ الطَّيِّبُ أَمِ الْكَثِيرُ الْخَبِيثُ؟',
          options: ['الْقَلِيلُ الطَّيِّبُ، لِأَنَّ الْخَبِيثَ وَالطَّيِّبَ لَا يَسْتَوِيَانِ', 'الْكَثِيرُ الْخَبِيثُ، لِأَنَّ الْكَثْرَةَ هِيَ الْمِعْيَارُ', 'كِلَاهُمَا سَوَاءٌ عِنْدَ اللَّهِ'],
          answer: 0,
          qEn: 'According to the verse Shuʿayb quotes, which is better: the little that is good, or the abundant that is foul?',
          optionsEn: ['The little that is good -- for the foul and the good are not equal', 'The abundant that is foul, since abundance is the standard', 'Both are the same before Allah'],
        },
      ],
    },
    {
      en: 'And my counsel to you is purely, sincerely given, and Allah alone is the watcher over you -- he speaks with gentleness and wisdom, out of knowledge and insight: "What remains lawful with Allah is better for you, if you are believers, and I am not a guardian over you."',
      sentences: [
        {
          id: 'qs-v8-c04-016',
          ar: 'وَنَصِيحَتِي لَكُمْ خَالِصَةٌ مُخْلِصَةً،',
          en: 'And my counsel to you is purely, sincerely given,',
          tokens: [
            { surface: 'وَنَصِيحَتِي', lemma: 'نَصِيحَة', pos: 'noun', features: 'conj+nom+1s', gloss: 'and my counsel' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'خَالِصَةٌ', lemma: 'خَالِص', pos: 'adj', features: 'indef.nom.f', gloss: 'pure' },
            { surface: 'مُخْلِصَةً', lemma: 'مُخْلِص', pos: 'adj', features: 'indef.acc.f', gloss: 'sincerely given' },
          ],
        },
        {
          id: 'qs-v8-c04-017',
          ar: 'وَاللَّهُ هُوَ الرَّقِيبُ عَلَيْكُمْ وَحْدَهُ،',
          en: 'and Allah alone is the watcher over you,',
          tokens: [
            { surface: 'وَاللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'conj+nom', gloss: 'and Allah' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'He' },
            { surface: 'الرَّقِيبُ', lemma: 'رَقِيب', pos: 'noun', features: 'def.nom', root: 'ر ق ب', gloss: 'the watcher' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'over you' },
            { surface: 'وَحْدَهُ', lemma: 'وَحْد', pos: 'noun', features: 'acc+3ms', gloss: 'alone' },
          ],
        },
        {
          id: 'qs-v8-c04-018',
          ar: 'يَقُولُ فِي رِفْقٍ وَحِكْمَةٍ وَعَنْ عِلْمٍ وَبَصِيرَةٍ:',
          en: 'he speaks with gentleness and wisdom, out of knowledge and insight:',
          tokens: [
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; speaks' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'رِفْقٍ', lemma: 'رِفْق', pos: 'noun', features: 'indef.gen', root: 'ر ف ق', gloss: 'gentleness' },
            { surface: 'وَحِكْمَةٍ', lemma: 'حِكْمَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and wisdom' },
            { surface: 'وَعَنْ', lemma: 'عَنْ', pos: 'prep', features: 'conj+prep', gloss: 'and out of' },
            { surface: 'عِلْمٍ', lemma: 'عِلْم', pos: 'noun', features: 'indef.gen', gloss: 'knowledge' },
            { surface: 'وَبَصِيرَةٍ', lemma: 'بَصِيرَة', pos: 'noun', features: 'conj+indef.gen', root: 'ب ص ر', gloss: 'and insight' },
          ],
        },
        {
          id: 'qs-v8-c04-019',
          ar: '﴿بَقِيَّتُ اللَّهِ خَيْرٌ لَّكُمْ إِن كُنتُم مُّؤْمِنِينَ﴾',
          en: '"What remains lawful with Allah is better for you, if you are believers,',
          tokens: [
            { surface: 'بَقِيَّتُ', lemma: 'بَقِيَّة', pos: 'noun', features: 'nom.constr', root: 'ب ق ي', gloss: 'what remains of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'noun', features: 'indef.nom', gloss: 'better' },
            { surface: 'لَّكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كُنتُم', lemma: 'كَانَ', pos: 'verb', features: 'perf.2mp', gloss: 'to be; you are' },
            { surface: 'مُّؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'pl.acc', gloss: 'believers' },
          ],
        },
        {
          id: 'qs-v8-c04-020',
          ar: '﴿وَمَا أَنَا عَلَيْكُم بِحَفِيظٍ﴾.',
          en: 'and I am not a guardian over you."',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'عَلَيْكُم', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'over you' },
            { surface: 'بِحَفِيظٍ', lemma: 'حَفِيظ', pos: 'noun', features: 'prep+indef.gen', root: 'ح ف ظ', gloss: 'a guardian' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ شُعَيْبٌ نَصِيحَتَهُ لِقَوْمِهِ؟',
          options: ['خَالِصَةٌ مُخْلِصَةٌ، يَقُولُهَا فِي رِفْقٍ وَحِكْمَةٍ وَعَنْ عِلْمٍ وَبَصِيرَةٍ', 'نَصِيحَةٌ قَاسِيَةٌ لَا رَحْمَةَ فِيهَا', 'كَلَامٌ قَالَهُ دُونَ تَفْكِيرٍ'],
          answer: 0,
          qEn: 'How did Shuʿayb describe his counsel to his people?',
          optionsEn: ['Pure and sincere, spoken with gentleness and wisdom, out of knowledge and insight', 'Harsh counsel with no mercy in it', 'Words spoken without any thought'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'إِنَّ مَا يَفْضُلُ لَكُمْ مِنَ الرِّبْحِ',
        post: 'وَفَاءِ الْكَيْلِ وَالْمِيزَانِ خَيْرٌ لَكُمْ.',
        en: 'What remains lawful to you of profit after giving the measure and scale in full is better for you.',
        options: ['بَعْدَ', 'قَبْلَ', 'مَعَ', 'دُونَ'],
        answer: 0,
        rationales: [
          '"after" -- matches the meaning: profit that remains once the measure has already been given in full.',
          '"before" -- wrong; the sentence is about profit remaining after fair dealing, not before it.',
          '"with" -- wrong preposition for a sequence of events.',
          '"without" -- wrong meaning entirely; the point is fair dealing already occurred.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَجَدْتُمْ أَنَّ مَا اكْتَسَبْتُمُوهُ عَنْ طَرِيقِ التَّطْفِيفِ',
        post: 'مَصِيرُهُ إِلَى التَّلَفِ وَالضَّيَاعِ.',
        en: 'you will find that what you gained through short-measuring met its fate in ruin and loss.',
        options: ['كَانَ', 'يَكُونُ', 'كُنَّ', 'كَائِنٌ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- matches the completed-fate narration of the passage.',
          'Imperfect -- less natural here; the passage reports what always turned out to be true, in the perfect.',
          '3rd feminine plural -- wrong number/gender; the subject مَصِيرُهُ is masculine singular.',
          'Active participle -- wrong part of speech for the main verb of this clause.',
        ],
      },
      {
        type: 'cloze',
        pre: 'بَقِيَّتُ اللَّهِ خَيْرٌ لَّكُمْ إِن كُنتُم',
        post: '.',
        en: 'What remains lawful with Allah is better for you, if you are believers.',
        options: ['مُّؤْمِنِينَ', 'مُّؤْمِنُونَ', 'آمَنُوا', 'يُؤْمِنُونَ'],
        answer: 0,
        rationales: [
          'Accusative plural -- the predicate of كُنتُم, which takes the accusative.',
          'Nominative plural -- wrong case; the predicate of كَانَ is accusative, not nominative.',
          'Perfect verb -- wrong part of speech; كَانَ needs a noun/adjective predicate here.',
          'Imperfect verb -- wrong part of speech for the same reason.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَجِدُ الرَّجُلُ الْمَالَ',
        pre: '',
        post: 'الْمَالَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['تَجِدُونَ', 'يَجِدُ', 'أَجِدُ', 'نَجِدُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st singular -- wrong person; the target is "you all," not "I."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَجِدُ الرَّجُلُ الْمَالَ',
        pre: '',
        post: 'الْمَالَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَجِدُ', 'يَجِدُ', 'تَجِدُونَ', 'أَجِدُ'],
        answer: 0,
        rationales: [
          '1st plural imperfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine plural -- wrong person; the target is "we," not "you all."',
          '1st singular -- wrong number; the target is "we," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'يَجِدُ الرَّجُلُ الْمَالَ',
        pre: '',
        post: 'الْمَالَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَجِدُ', 'يَجِدُ', 'أَجِدُ', 'نَجِدُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular imperfect -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '1st singular -- wrong person; the target is "she," not "I."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
    ],
  },
};

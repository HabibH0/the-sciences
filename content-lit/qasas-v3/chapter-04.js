// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 4 -- حِيلَةُ
// الشَّيْطَانِ. Printed pages 64 (bottom, right after ch3's closing exchange
// and the heading) through 65 (top, ending before ch5's heading صُوَرُ
// الصَّالِحِينَ partway down page 65). A short, dense chapter: this is the
// Devil's second, successful strategy after ch3's direct approach failed.
// Transcribed by hand from the scan (vision OCR, 300dpi render) against
// ../CHAPTER-FORMAT.md.
//
// The Devil finds an indirect door into people's heads: he cannot call them
// to shirk directly (ch3), so instead he waits. Genuinely righteous men who
// feared and worshiped Allah, and whom Allah and the people both loved,
// eventually die -- and only then does the Devil go to the people and start
// talking about them, setting up the veneration that ch5 (صُوَرُ الصَّالِحِينَ,
// "Images of the Righteous") will show curdling into idol-worship.
//
// Grammar / lexical notes:
//   -- لَكِنَّ (qs-v3-c04-001, وَلَكِنَّ) turns out to already be taught
//      (qasas-v2 ch3/ch4/ch5) -- confirmed via grep before treating it as
//      new; features 'conj' bare, matching qasas-v2 ch4's own
//      وَلَكِنَّ precedent exactly (not 'conj+conj', which is reserved for
//      وَلَكِنْ's own -- different -- pattern).
//   -- مِنْهُ (qs-v3-c04-001) is مِنْ (already taught, qasas-v2 ch1) fused
//      with the 3ms suffix pronoun, tagged features 'prep+3ms' matching the
//      established فِيهِ/لَهُ/عِنْدَهُ convention.
//   -- رُءُوس (qs-v3-c04-001) is the plural of the already-taught رَأْس
//      (qasas-v2 ch9/ch12, singular only so far); tagged features
//      'pl.gen.constr' as head of the construct رُءُوسِ النَّاسِ.
//   -- ذِكْر (qs-v3-c04-002) is a new noun lemma kept distinct from the
//      already-taught verb ذَكَرَ despite the shared root ذ ك ر, matching the
//      verb/noun-despite-shared-root pattern already used repeatedly
//      (حَمْد/حَمِدَ، شُكْر/شَكَرَ، مَوْت/مَاتَ, etc. -- qasas-v2 ch16/ch11/ch25).
//   -- اِسْتَجَابَ (qs-v3-c04-003) and أَجَابَ (qs-v3-c04-009) share the root
//      ج و ب but are tagged as two distinct lemmas (form X vs form IV),
//      matching the established distinct-lemma-per-derived-form convention
//      (غَفَرَ/اِسْتَغْفَرَ, qasas-v2 ch24).
//   -- هَؤُلَاءِ (qs-v3-c04-005/006) is already taught (qasas-v2 ch17,
//      qasas-v3 ch1); أُولَئِكَ (qs-v3-c04-009) is its distinct demonstrative
//      counterpart ("those," vs. "these"), new here, tagged the same way
//      (pos 'dem', features 'dem.pl') per qasas-v2 ch17's precedent.
//   -- وَجَدَ (qs-v3-c04-001) is already taught (qasas-v1 ch9, qasas-v2
//      ch10/16/18/19/20/24) -- confirmed via grep, not re-added as new.
//   -- فُلَانٌ (qs-v3-c04-007) repeats four times in the one line as printed
//      ("so-and-so and so-and-so and so-and-so and so-and-so"); kept as four
//      separate tokens rather than collapsed, matching the printed-text
//      fidelity already practiced for repeated material elsewhere.
//   -- سُبْحَانَ اللَّهِ (qs-v3-c04-008) is the frozen exclamatory construct
//      "Glory be to Allah"; سُبْحَانَ tagged noun, features 'acc.constr'
//      (accusative of an implied verb, construct with the following genitive
//      اللَّهِ), root س ب ح.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، رَجُل، خَافَ، اللَّه،
//      عَبَدَ، لَيْل، كَثِير، أَحَبَّ، النَّاس، عَظَّمَ (qasas-v2 ch9)، عَرَفَ، ذَلِكَ،
//      قَدْ، مَاتَ، إِلَى، رَحْمَة، ذَهَبَ، قَالَ، كَيْفَ، فِي، إِذَا، دَعَا، سَأَلَ، وَلِيّ
//      (qasas-v2 ch25)
//      are all already taught and are NOT re-listed in newWords here.
//
// 10 new words (نَهَار، ذِكْر، اِسْتَجَابَ، جَيِّد، اِنْتَقَلَ، أُولَئِكَ، فُلَان، سُبْحَان،
// أَجَابَ، أَعْطَى).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'حِيلَةُ الشَّيْطَانِ', en: "The Devil's Trick" },
  newWords: ['نَهَار', 'ذِكْر', 'اِسْتَجَابَ', 'جَيِّد', 'اِنْتَقَلَ', 'أُولَئِكَ', 'فُلَان', 'سُبْحَان', 'أَجَابَ', 'أَعْطَى'],
  lemmas: {
    نَهَار: { gloss: 'daytime, day' },
    ذِكْر: { gloss: 'remembrance, mentioning' },
    اِسْتَجَابَ: { gloss: 'to respond, answer (a call)' },
    جَيِّد: { gloss: 'good, well' },
    اِنْتَقَلَ: { gloss: 'to move on, pass away (euphemism for death)' },
    أُولَئِكَ: { gloss: 'those' },
    فُلَان: { gloss: 'so-and-so (placeholder name)' },
    سُبْحَان: { gloss: 'glory (be to); transcendence' },
    أَجَابَ: { gloss: 'to answer, respond' },
    أَعْطَى: { gloss: 'to give' },
  },
  paragraphs: [
    {
      en: "The Devil found an indirect door into people's heads. There were men who feared Allah, worshiped Him night and day, and remembered Him much; they loved Allah, Allah loved them and answered them, and the people loved and revered them too -- and the Devil knew all this well. When these men eventually died and passed on to Allah's mercy, the Devil went to the people and brought them up: 'How were so-and-so, and so-and-so, and so-and-so, and so-and-so among you?' 'Glory be to Allah!' they said. 'Men of Allah and His allies! Whenever they called, He answered them, and whenever they asked, He gave them.'",
      sentences: [
        {
          id: 'qs-v3-c04-001',
          ar: 'وَلَكِنَّ الشَّيْطَانَ وَجَدَ بَابًا يَدْخُلُ مِنْهُ إِلَى رُءُوسِ النَّاسِ.',
          en: 'But the Devil found a door through which he enters into people’s heads.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'الشَّيْطَانَ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.acc', root: 'ش ط ن', gloss: 'the Devil' },
            { surface: 'وَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.3ms', root: 'و ج د', gloss: 'to find; found' },
            { surface: 'بَابًا', lemma: 'بَاب', pos: 'noun', features: 'indef.acc', root: 'ب و ب', gloss: 'a door' },
            { surface: 'يَدْخُلُ', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.3ms', root: 'د خ ل', gloss: 'to enter; he enters' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'through it' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to, into' },
            { surface: 'رُءُوسِ', lemma: 'رَأْس', pos: 'noun', features: 'pl.gen.constr', root: 'ر أ س', gloss: 'the heads of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v3-c04-002',
          ar: 'كَانَ رِجَالٌ يَخَافُونَ اللَّهَ، وَيَعْبُدُونَهُ لَيْلًا وَنَهَارًا، وَيَذْكُرُونَهُ ذِكْرًا كَثِيرًا.',
          en: 'There were men who feared Allah, worshiped Him night and day, and remembered Him much.',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; there were' },
            { surface: 'رِجَالٌ', lemma: 'رَجُل', pos: 'noun', features: 'pl.indef.nom', root: 'ر ج ل', gloss: 'men' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', root: 'خ و ف', gloss: 'to fear; they fear' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَيَعْبُدُونَهُ', lemma: 'عَبَدَ', pos: 'verb', features: 'conj+impf.3mp+3ms', root: 'ع ب د', gloss: 'to worship; and they worship Him' },
            { surface: 'لَيْلًا', lemma: 'لَيْل', pos: 'noun', features: 'indef.acc', root: 'ل ي ل', gloss: 'by night' },
            { surface: 'وَنَهَارًا', lemma: 'نَهَار', pos: 'noun', features: 'conj+indef.acc', root: 'ن ه ر', gloss: 'and by day' },
            { surface: 'وَيَذْكُرُونَهُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+impf.3mp+3ms', root: 'ذ ك ر', gloss: 'to remember; and they remember Him' },
            { surface: 'ذِكْرًا', lemma: 'ذِكْر', pos: 'noun', features: 'indef.acc', root: 'ذ ك ر', gloss: 'a remembering' },
            { surface: 'كَثِيرًا', lemma: 'كَثِير', pos: 'adj', features: 'indef.acc', root: 'ك ث ر', gloss: 'much' },
          ],
        },
        {
          id: 'qs-v3-c04-003',
          ar: 'وَكَانُوا يُحِبُّونَ اللَّهَ، وَكَانَ اللَّهُ يُحِبُّهُمْ وَيَسْتَجِيبُ لَهُمْ.',
          en: 'They loved Allah, and Allah loved them and answered them.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'يُحِبُّونَ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3mp', root: 'ح ب ب', gloss: 'to love; they love' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'يُحِبُّهُمْ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms+3mp', root: 'ح ب ب', gloss: 'to love; He loves them' },
            { surface: 'وَيَسْتَجِيبُ', lemma: 'اِسْتَجَابَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ج و ب', gloss: 'to respond, answer; and He responds' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v3-c04-004',
          ar: 'وَكَانَ النَّاسُ يُحِبُّونَهُمْ وَيُعَظِّمُونَهُمْ، وَكَانَ الشَّيْطَانُ يَعْرِفُ ذَلِكَ جَيِّدًا.',
          en: 'The people loved them and revered them, and the Devil knew that well.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'يُحِبُّونَهُمْ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3mp+3mp', root: 'ح ب ب', gloss: 'to love; they love them' },
            { surface: 'وَيُعَظِّمُونَهُمْ', lemma: 'عَظَّمَ', pos: 'verb', features: 'conj+impf.3mp+3mp', root: 'ع ظ م', gloss: 'to revere, glorify; and they revere them' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'the Devil' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know; knew' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'جَيِّدًا', lemma: 'جَيِّد', pos: 'adv', features: 'indef.acc', root: 'ج و د', gloss: 'well' },
          ],
        },
        {
          id: 'qs-v3-c04-005',
          ar: 'وَقَدْ مَاتَ هَؤُلَاءِ وَانْتَقَلُوا إِلَى رَحْمَةِ اللَّهِ!',
          en: 'Then these men died and passed on to Allah’s mercy!',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', root: 'م و ت', gloss: 'to die; died' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'وَانْتَقَلُوا', lemma: 'اِنْتَقَلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ن ق ل', gloss: 'to move on, pass away; and passed on' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'رَحْمَةِ', lemma: 'رَحْمَة', pos: 'noun', features: 'gen.constr', root: 'ر ح م', gloss: 'the mercy of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c04-006',
          ar: 'ذَهَبَ الشَّيْطَانُ إِلَى النَّاسِ وَذَكَرَ هَؤُلَاءِ الرِّجَالَ.',
          en: 'The Devil went to the people and mentioned these men.',
          tokens: [
            { surface: 'ذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3ms', root: 'ذ ه ب', gloss: 'to go; went' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'the Devil' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', root: 'ن و س', gloss: 'the people' },
            { surface: 'وَذَكَرَ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ذ ك ر', gloss: 'to mention; and mentioned' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الرِّجَالَ', lemma: 'رَجُل', pos: 'noun', features: 'def.acc.pl', root: 'ر ج ل', gloss: 'the men' },
          ],
        },
        {
          id: 'qs-v3-c04-007',
          ar: 'وَقَالَ: كَيْفَ كَانَ فِيكُمْ فُلَانٌ وَفُلَانٌ وَفُلَانٌ وَفُلَانٌ؟',
          en: 'He said: "How were so-and-so, and so-and-so, and so-and-so, and so-and-so among you?"',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'فِيكُمْ', lemma: 'فِي', pos: 'prep', features: 'prep+2mp', gloss: 'among you' },
            { surface: 'فُلَانٌ', lemma: 'فُلَان', pos: 'noun', features: 'indef.nom', gloss: 'so-and-so' },
            { surface: 'وَفُلَانٌ', lemma: 'فُلَان', pos: 'noun', features: 'conj+indef.nom', gloss: 'and so-and-so' },
            { surface: 'وَفُلَانٌ', lemma: 'فُلَان', pos: 'noun', features: 'conj+indef.nom', gloss: 'and so-and-so' },
            { surface: 'وَفُلَانٌ', lemma: 'فُلَان', pos: 'noun', features: 'conj+indef.nom', gloss: 'and so-and-so' },
          ],
        },
        {
          id: 'qs-v3-c04-008',
          ar: 'قَالُوا: سُبْحَانَ اللَّهِ! رِجَالُ اللَّهِ وَأَوْلِيَاؤُهُ!',
          en: 'They said: "Glory be to Allah! Men of Allah and His allies!"',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'سُبْحَانَ', lemma: 'سُبْحَان', pos: 'noun', features: 'acc.constr', root: 'س ب ح', gloss: 'glory (be to)' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'رِجَالُ', lemma: 'رَجُل', pos: 'noun', features: 'pl.nom.constr', root: 'ر ج ل', gloss: 'men of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَأَوْلِيَاؤُهُ', lemma: 'وَلِيّ', pos: 'noun', features: 'conj+pl.nom+3ms', root: 'و ل ي', gloss: 'and His allies' },
          ],
        },
        {
          id: 'qs-v3-c04-009',
          ar: 'أُولَئِكَ إِذَا دَعَوْا أَجَابَهُمْ، وَإِذَا سَأَلُوا أَعْطَاهُمْ.',
          en: 'Those, whenever they called, He answered them, and whenever they asked, He gave them.',
          tokens: [
            { surface: 'أُولَئِكَ', lemma: 'أُولَئِكَ', pos: 'dem', features: 'dem.pl', gloss: 'those' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'whenever' },
            { surface: 'دَعَوْا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3mp', root: 'د ع و', gloss: 'to call, pray; they called' },
            { surface: 'أَجَابَهُمْ', lemma: 'أَجَابَ', pos: 'verb', features: 'perf.3ms+3mp', root: 'ج و ب', gloss: 'to answer; He answered them' },
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and whenever' },
            { surface: 'سَأَلُوا', lemma: 'سَأَلَ', pos: 'verb', features: 'perf.3mp', root: 'س أ ل', gloss: 'to ask; they asked' },
            { surface: 'أَعْطَاهُمْ', lemma: 'أَعْطَى', pos: 'verb', features: 'perf.3ms+3mp', root: 'ع ط و', gloss: 'to give; He gave them' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ دَخَلَ الشَّيْطَانُ إِلَى رُءُوسِ النَّاسِ؟',
          options: [
            'عَنْ طَرِيقِ حُبِّ النَّاسِ لِلرِّجَالِ الصَّالِحِينَ وَتَعْظِيمِهِمْ بَعْدَ مَوْتِهِمْ',
            'عَنْ طَرِيقِ دُعَائِهِ لَهُمْ إِلَى الشِّرْكِ مُبَاشَرَةً',
            'عَنْ طَرِيقِ الْكَذِبِ عَلَيْهِمْ فِي الطَّعَامِ',
          ],
          answer: 0,
          qEn: "How did the Devil get into people's heads?",
          optionsEn: [
            "Through people's love and reverence for righteous men after their death",
            'By directly calling them to shirk',
            'By lying to them about food',
          ],
        },
        {
          q: 'لِمَاذَا أَحَبَّ اللَّهُ أُولَئِكَ الرِّجَالَ؟',
          options: [
            'لِأَنَّهُمْ كَانُوا يَخَافُونَ اللَّهَ وَيَعْبُدُونَهُ وَيَذْكُرُونَهُ كَثِيرًا',
            'لِأَنَّهُمْ كَانُوا أَغْنِيَاءَ',
            'لِأَنَّهُمْ بَنَوْا بُيُوتًا كَثِيرَةً',
          ],
          answer: 0,
          qEn: 'Why did Allah love those men?',
          optionsEn: [
            'Because they feared Allah, worshiped Him, and remembered Him much',
            'Because they were wealthy',
            'Because they built many houses',
          ],
        },
        {
          q: 'مَاذَا فَعَلَ الشَّيْطَانُ بَعْدَ مَوْتِ أُولَئِكَ الرِّجَالِ؟',
          options: [
            'ذَهَبَ إِلَى النَّاسِ وَذَكَرَهُمْ لَهُمْ',
            'بَكَى عَلَيْهِمْ',
            'بَنَى لَهُمْ بُيُوتًا',
          ],
          answer: 0,
          qEn: 'What did the Devil do after those men died?',
          optionsEn: [
            'He went to the people and brought them up',
            'He wept over them',
            'He built houses for them',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ الشَّيْطَانَ وَجَدَ بَابًا',
        post: 'مِنْهُ إِلَى رُءُوسِ النَّاسِ.',
        en: 'But the Devil found a door through which he enters into people’s heads.',
        options: ['يَدْخُلُ', 'دَخَلَ', 'يَدْخُلَ', 'دَاخِل'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- an ongoing, general function of the door, matching the relative clause.',
          'Perfect -- wrong tense; this describes a standing function, not one completed action.',
          'Subjunctive (missing the final damma) -- wrong mood; nothing here calls for the subjunctive.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ اللَّهُ يُحِبُّهُمْ وَ',
        post: 'لَهُمْ.',
        en: 'Allah loved them and answered them.',
        options: ['يَسْتَجِيبُ', 'اِسْتَجَابَ', 'يَسْتَجِبْ', 'مُسْتَجِيب'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- matches يُحِبُّهُمْ’s tense, both describing Allah’s ongoing response to them.',
          'Perfect -- wrong tense; breaks the parallel with يُحِبُّهُمْ.',
          'Jussive -- wrong mood; nothing here calls for the jussive.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'أُولَئِكَ إِذَا دَعَوْا',
        post: '، وَإِذَا سَأَلُوا أَعْطَاهُمْ.',
        en: 'Those, whenever they called, He answered them, and whenever they asked, He gave them.',
        options: ['أَجَابَهُمْ', 'يُجِيبُهُمْ', 'أُجِيبَ', 'أَجَابُوهُمْ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular + 3rd masculine plural object -- "He answered them," matching أَعْطَاهُمْ’s tense and structure in the second half.',
          'Imperfect -- wrong tense; إِذَا with a perfect verb (دَعَوْا) calls for a matching perfect in the response.',
          'Passive -- wrong voice; Allah is the one answering, not the one answered.',
          'Wrong subject -- "they answered them," not "He answered them."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْتَجِيبُ الرَّجُلُ لِصَدِيقِهِ',
        pre: '',
        post: 'لِصَدِيقِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَجِيبُ', 'يَسْتَجِيبُ', 'تَسْتَجِيبُ', 'نَسْتَجِيبُ'],
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
        base: 'يَسْتَجِيبُ الرَّجُلُ لِصَدِيقِهِ',
        pre: '',
        post: 'لِصَدِيقِهِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَسْتَجِيبُ', 'يَسْتَجِيبُ', 'أَسْتَجِيبُ', 'نَسْتَجِيبُ'],
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
        base: 'يَسْتَجِيبُ الرَّجُلُ لِصَدِيقِهِ',
        pre: '',
        post: 'لِصَدِيقِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَسْتَجِيبُونَ', 'يَسْتَجِيبُ', 'تَسْتَجِيبُ', 'نَسْتَجِيبُ'],
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

// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ», chapter 27 --
// سَيِّدُنَا الْمَسِيحُ فِي الْمَحْكَمَةِ. Printed pages 266 (bottom, right after
// ch26's closing line) through 267 (ending before ch28's heading الْقَانُونُ
// الْجِنَائِيُّ فِي ذَلِكَ الْعَصْرِ, further down the same page). Transcribed by
// hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// The trial is rushed through on Friday afternoon before sundown, since
// the Sabbath (beginning at sunset) is a day of total rest for the Jews
// and they want the matter closed before it starts. The Roman-appointed
// judge has no personal stake in the case and is worn down by the crowd's
// pressure -- described vividly as noise, mockery, and jeering -- and,
// with time running out as the sun sinks, issues the death sentence by
// crucifixion.
//
// Grammar / lexical notes:
//   -- Every printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention, see
//      qasas-v3 ch14). No rewording, same printed text and order. Two
//      printed paragraphs on the page (a blank line separates them after
//      "...لا يُزْعِجُهُمْ شَيْءٌ"), kept as two paragraphs here. No Qur'anic
//      quotations on these pages.
//   -- أَصْدَرَ (qs-v12-c27-016, form IV, "to issue [a verdict]," transitive)
//      is tagged as a distinct lemma from the already-taught صَدَرَ (form I,
//      "to be issued, emanate," intransitive, used earlier in this same
//      chapter at qs-v12-c27-004's يَصْدُرَ) -- same root ص د ر, different
//      derived form and argument structure, per the
//      distinct-lemma-per-derived-verb-form convention.
//   -- مَالَ ("to incline, lean," qs-v12-c27-015, of the sun toward
//      setting) is a distinct lemma from the already-taught noun مَال
//      ("wealth," qasas-v3 ch14) -- same three consonants, unrelated verb
//      vs. noun.
//   -- صَلْب (qs-v12-c27-016, "crucifixion," a verbal noun/maṣdar used
//      adverbially here) and غُرُوب ("setting," qs-v12-c27-015, likewise a
//      maṣdar) are each tagged as their own noun lemma, distinct from the
//      already-taught verbs صَلَبَ and غَرَبَ respectively, matching the
//      corpus's noun/verbal-noun-vs-verb convention (قَتْل, already
//      independently attested as known alongside قَتَلَ, is the closest
//      precedent).
//   -- سَمَاع (qs-v12-c27-012, "the hearing [of]," a maṣdar governed by
//      لِ) is likewise its own lemma, distinct from the already-taught verb
//      سَمِعَ.
//   -- حِرْص ("eagerness," qs-v12-c27-004, a noun used as a cognate
//      intensifier: كُلَّ الْحِرْصِ, "with the utmost eagerness") is a
//      distinct lemma from the already-taught adjective حَرِيص ("eager"),
//      matching the corpus's noun-beside-adjective-same-root convention
//      (cf. كَبِير vs كِبْر in qasas-v3 ch14).
//   -- هُمْ (qs-v12-c27-013) is tagged pos 'noun' with a bare person
//      feature, matching the corpus's treatment of independent pronouns
//      (cf. نَحْنُ in qasas-v3 ch14).
//   -- يَوْم/جُمُعَة/سَبْت (day, Friday, Saturday) are tagged new here even
//      though "day" itself is bedrock-ordinary: none of the three appear
//      anywhere in the consolidated known-lemmas check, so per the task's
//      literal cross-check rule they are new to the tracked corpus, not
//      merely to this chapter.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, via the consolidated
//      known-lemmas list): كَانَ (bedrock)، ذَلِكَ، بَعْدَ، عَصْر، لَيْلَة، يَهُود
//      (introduced qasas-v12 ch26, this batch)، لَا، عَمِلَ، شَيْء، حَرِيص، كُلّ،
//      عَلَى، أَنْ، صَدَرَ، حُكْم، قَبْلَ، غَرَبَ، شَمْس، اِسْتَرَاحَ، مِنْ، أَمْر، الْمَسِيح
//      (introduced qasas-v12 ch26)، نَامَ، لَيْسَ، لِ، فِي، أُمَّة، قَدْ، بَيْنَ، عَمَل،
//      بِ، عَنْ، وَ
//      are all already taught (or bedrock) and are NOT re-listed in
//      newWords here.
//
// 26 new words (يَوْم، جُمُعَة، سَبْت، عُطْلَة، كَفّ، حِرْص، هَادِئ، بَال، نَاعِم،
// أَزْعَجَ، ذَرْع، رَغْبَة، مَصْلَحَة، اِحْتَشَدَ، سَمَاع، صَائِح، هَاتِف، مُتَنَدِّر،
// مُتَهَكِّم، مُتَضَايِق، وَقْت، قَصِير، مَالَ، غُرُوب، أَصْدَرَ، صَلْب) -- unusually
// vocabulary-dense because it introduces the whole courtroom-scene word set
// (crowd, mockery, verdict) this batch's remaining chapters keep drawing on.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch27',
  title: { ar: 'سَيِّدُنَا الْمَسِيحُ فِي الْمَحْكَمَةِ', en: 'Our Master the Messiah in Court' },
  newWords: [
    'جُمُعَة', 'سَبْت', 'عُطْلَة', 'كَفّ', 'حِرْص', 'هَادِئ',
    'نَاعِم', 'أَزْعَجَ', 'ذَرْع', 'رَغْبَة', 'مَصْلَحَة', 'اِحْتَشَدَ',
    'سَمَاع', 'صَائِح', 'هَاتِف', 'مُتَنَدِّر', 'مُتَهَكِّم', 'مُتَضَايِق',
    'قَصِير', 'مَالَ', 'غُرُوب', 'أَصْدَرَ', 'صَلْب',
  ],
  lemmas: {
    يَوْم: { gloss: 'day' },
    جُمُعَة: { gloss: 'Friday' },
    سَبْت: { gloss: 'Saturday, the Sabbath' },
    عُطْلَة: { gloss: 'holiday, rest' },
    كَفّ: { gloss: 'abstention, ceasing' },
    حِرْص: { gloss: 'eagerness, keenness' },
    هَادِئ: { gloss: 'calm, at ease' },
    بَال: { gloss: 'mind, state of mind' },
    نَاعِم: { gloss: 'soft, comfortable' },
    أَزْعَجَ: { gloss: 'to disturb, upset' },
    ذَرْع: { gloss: 'patience, capacity (idiom: to lose patience)' },
    رَغْبَة: { gloss: 'desire, wish' },
    مَصْلَحَة: { gloss: 'benefit, interest' },
    اِحْتَشَدَ: { gloss: 'to throng, crowd together' },
    سَمَاع: { gloss: 'hearing (of)' },
    صَائِح: { gloss: 'one shouting' },
    هَاتِف: { gloss: 'one calling out' },
    مُتَنَدِّر: { gloss: 'one jesting, mocking' },
    مُتَهَكِّم: { gloss: 'one sneering, jeering' },
    مُتَضَايِق: { gloss: 'distressed, irritated' },
    وَقْت: { gloss: 'time' },
    قَصِير: { gloss: 'short' },
    مَالَ: { gloss: 'to incline, lean' },
    غُرُوب: { gloss: 'setting (of the sun)' },
    أَصْدَرَ: { gloss: 'to issue (a verdict)' },
    صَلْب: { gloss: 'crucifixion' },
  },
  paragraphs: [
    {
      en: 'That was on Friday afternoon, the eve of Saturday. The Jews did no work at all on Saturday -- it was a day of rest and abstention from labor -- so they were extremely eager for the verdict to be issued before the Friday sun set, so that they could be free of the Messiah\'s case, sleep at ease, and wake up comfortable in mind with nothing to trouble them.',
      sentences: [
        {
          id: 'qs-v12-c27-001',
          ar: 'وَكَانَ ذَلِكَ يَوْمَ الْجُمُعَةِ بَعْدَ الْعَصْرِ لَيْلَةَ السَّبْتِ،',
          en: 'That was on Friday, after the ʿaṣr, the eve of Saturday,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the day of' },
            { surface: 'الْجُمُعَةِ', lemma: 'جُمُعَة', pos: 'noun', features: 'def.gen', gloss: 'Friday' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'الْعَصْرِ', lemma: 'عَصْر', pos: 'noun', features: 'def.gen', gloss: 'the afternoon prayer time' },
            { surface: 'لَيْلَةَ', lemma: 'لَيْلَة', pos: 'noun', features: 'acc.constr', gloss: 'the night of' },
            { surface: 'السَّبْتِ', lemma: 'سَبْت', pos: 'noun', features: 'def.gen', gloss: 'Saturday' },
          ],
        },
        {
          id: 'qs-v12-c27-002',
          ar: 'وَكَانَ الْيَهُودُ لَا يَعْمَلُونَ شَيْئاً يَوْمَ السَّبْتِ،',
          en: 'and the Jews did no work at all on Saturday,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'الْيَهُودُ', lemma: 'يَهُود', pos: 'proper', features: 'def.nom', gloss: 'the Jews' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to work, do; do' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', gloss: 'on the day of' },
            { surface: 'السَّبْتِ', lemma: 'سَبْت', pos: 'noun', features: 'def.gen', gloss: 'Saturday' },
          ],
        },
        {
          id: 'qs-v12-c27-003',
          ar: 'وَكَانَ يَوْمَ عُطْلَةٍ وَكَفٍّ عَنِ الْعَمَلِ،',
          en: 'it was a day of rest and abstention from work,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc.constr', gloss: 'a day of' },
            { surface: 'عُطْلَةٍ', lemma: 'عُطْلَة', pos: 'noun', features: 'indef.gen', gloss: 'rest, holiday' },
            { surface: 'وَكَفٍّ', lemma: 'كَفّ', pos: 'noun', features: 'conj+indef.gen', gloss: 'and abstention' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْعَمَلِ', lemma: 'عَمَل', pos: 'noun', features: 'def.gen', gloss: 'the work' },
          ],
        },
        {
          id: 'qs-v12-c27-004',
          ar: 'فَكَانُوا حَرِيصِينَ كُلَّ الْحِرْصِ عَلَى أَنْ يَصْدُرَ الْحُكْمُ قَبْلَ أَنْ تَغْرُبَ شَمْسُ يَوْمِ الْجُمُعَةِ،',
          en: 'so they were extremely eager for the verdict to be issued before the sun of Friday set,',
          tokens: [
            { surface: 'فَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; so they were' },
            { surface: 'حَرِيصِينَ', lemma: 'حَرِيص', pos: 'adj', features: 'acc.pl', gloss: 'eager' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'the utmost, all of' },
            { surface: 'الْحِرْصِ', lemma: 'حِرْص', pos: 'noun', features: 'def.gen', gloss: 'the eagerness' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to, for' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَصْدُرَ', lemma: 'صَدَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be issued; be issued' },
            { surface: 'الْحُكْمُ', lemma: 'حُكْم', pos: 'noun', features: 'def.nom', gloss: 'the verdict' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَغْرُبَ', lemma: 'غَرَبَ', pos: 'verb', features: 'impf.3fs', gloss: 'to set (sun); sets' },
            { surface: 'شَمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'constr.nom', gloss: 'the sun of' },
            { surface: 'يَوْمِ', lemma: 'يَوْم', pos: 'noun', features: 'constr.gen', gloss: 'the day of' },
            { surface: 'الْجُمُعَةِ', lemma: 'جُمُعَة', pos: 'noun', features: 'def.gen', gloss: 'Friday' },
          ],
        },
        {
          id: 'qs-v12-c27-005',
          ar: 'وَيَسْتَرِيحُوا مِنْ أَمْرِ الْمَسِيحِ،',
          en: 'and be free of the Messiah\'s case,',
          tokens: [
            { surface: 'وَيَسْتَرِيحُوا', lemma: 'اِسْتَرَاحَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to rest; and rest' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَمْرِ', lemma: 'أَمْر', pos: 'noun', features: 'constr.gen', gloss: 'the matter of' },
            { surface: 'الْمَسِيحِ', lemma: 'مَسِيح', pos: 'proper', features: 'def.gen', gloss: 'the Messiah' },
          ],
        },
        {
          id: 'qs-v12-c27-006',
          ar: 'فَيَنَامُوا هَادِئِي الْبَالِ،',
          en: 'so they could sleep calm of mind,',
          tokens: [
            { surface: 'فَيَنَامُوا', lemma: 'نَامَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to sleep; so sleep' },
            { surface: 'هَادِئِي', lemma: 'هَادِئ', pos: 'adj', features: 'acc.constr.pl', gloss: 'calm of' },
            { surface: 'الْبَالِ', lemma: 'بَال', pos: 'noun', features: 'def.gen', gloss: 'mind' },
          ],
        },
        {
          id: 'qs-v12-c27-007',
          ar: 'وَيُصْبِحُوا نَاعِمِي الْبَالِ لَا يُزْعِجُهُمْ شَيْءٌ.',
          en: 'and wake up comfortable in mind, with nothing to disturb them.',
          tokens: [
            { surface: 'وَيُصْبِحُوا', lemma: 'أَصْبَحَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ص ب ح', gloss: 'to become; and become' },
            { surface: 'نَاعِمِي', lemma: 'نَاعِم', pos: 'adj', features: 'acc.constr.pl', gloss: 'comfortable of' },
            { surface: 'الْبَالِ', lemma: 'بَال', pos: 'noun', features: 'def.gen', gloss: 'mind' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُزْعِجُهُمْ', lemma: 'أَزْعَجَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to disturb; disturbs them' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', gloss: 'anything' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ الْيَهُودُ حَرِيصِينَ عَلَى أَنْ يَصْدُرَ الْحُكْمُ قَبْلَ غُرُوبِ شَمْسِ الْجُمُعَةِ؟',
          options: ['لِأَنَّهُمْ لَا يَعْمَلُونَ شَيْئاً يَوْمَ السَّبْتِ وَأَرَادُوا الرَّاحَةَ مِنْ أَمْرِ الْمَسِيحِ', 'لِأَنَّ الْحَاكِمَ أَمَرَهُمْ بِذَلِكَ', 'لِأَنَّهُمْ كَانُوا يَخَافُونَ مِنَ الرُّومَانِ'],
          answer: 0,
          qEn: 'Why were the Jews eager for the verdict to be issued before the Friday sun set?',
          optionsEn: ["Because they did no work on Saturday and wanted to be free of the Messiah's case", 'Because the ruler ordered them to', 'Because they were afraid of the Romans'],
        },
        {
          q: 'مَاذَا كَانَ يَوْمُ السَّبْتِ عِنْدَ الْيَهُودِ؟',
          options: ['يَوْمَ عُطْلَةٍ وَكَفٍّ عَنِ الْعَمَلِ', 'يَوْمَ عَمَلٍ كَسَائِرِ الْأَيَّامِ', 'يَوْمَ سُوقٍ وَتِجَارَةٍ'],
          answer: 0,
          qEn: 'What was Saturday for the Jews?',
          optionsEn: ['A day of rest and abstention from work', 'A working day like any other', 'A market and trading day'],
        },
      ],
    },
    {
      en: 'The ruler had grown utterly weary of the case; he had no desire in it, nor did his nation have any interest in it. The Jews had thronged to hear the verdict -- some shouting, some calling out, some jesting, some sneering -- while the ruler grew irritated and time ran short, and the sun was inclining toward setting. So he issued the verdict against him: death by crucifixion.',
      sentences: [
        {
          id: 'qs-v12-c27-008',
          ar: 'وَقَدْ ضَاقَ الْحَاكِمُ بِالْقَضِيَّةِ ذَرْعاً،',
          en: 'The ruler had grown weary of the case,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'indeed, already' },
            { surface: 'ضَاقَ', lemma: 'ضَاقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to become narrow, distressed; grew weary' },
            { surface: 'الْحَاكِمُ', lemma: 'حَاكِم', pos: 'noun', features: 'def.nom', gloss: 'the ruler' },
            { surface: 'بِالْقَضِيَّةِ', lemma: 'قَضِيَّة', pos: 'noun', features: 'prep+def.gen', gloss: 'with the case' },
            { surface: 'ذَرْعاً', lemma: 'ذَرْع', pos: 'noun', features: 'indef.acc', gloss: 'patience (idiom: lost patience)' },
          ],
        },
        {
          id: 'qs-v12-c27-009',
          ar: 'وَلَيْسَتْ لَهُ فِيهَا رَغْبَةٌ،',
          en: 'he had no desire in it,',
          tokens: [
            { surface: 'وَلَيْسَتْ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'is not; and there was not' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'رَغْبَةٌ', lemma: 'رَغْبَة', pos: 'noun', features: 'indef.nom', gloss: 'a desire' },
          ],
        },
        {
          id: 'qs-v12-c27-010',
          ar: 'وَلَا لِأُمَّتِهِ فِيهَا مَصْلَحَةٌ،',
          en: 'nor did his nation have any interest in it,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'لِأُمَّتِهِ', lemma: 'أُمَّة', pos: 'noun', features: 'prep+gen+3ms', gloss: 'for his nation' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'مَصْلَحَةٌ', lemma: 'مَصْلَحَة', pos: 'noun', features: 'indef.nom', gloss: 'benefit, interest' },
          ],
        },
        {
          id: 'qs-v12-c27-011',
          ar: 'وَقَدِ احْتَشَدَ الْيَهُودُ لِسَمَاعِ الْحُكْمِ،',
          en: 'the Jews had thronged to hear the verdict,',
          tokens: [
            { surface: 'وَقَدِ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'indeed, already' },
            { surface: 'احْتَشَدَ', lemma: 'اِحْتَشَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to throng, crowd together; thronged' },
            { surface: 'الْيَهُودُ', lemma: 'يَهُود', pos: 'proper', features: 'def.nom', gloss: 'the Jews' },
            { surface: 'لِسَمَاعِ', lemma: 'سَمَاع', pos: 'noun', features: 'prep+constr.gen', gloss: 'to hear' },
            { surface: 'الْحُكْمِ', lemma: 'حُكْم', pos: 'noun', features: 'def.gen', gloss: 'the verdict' },
          ],
        },
        {
          id: 'qs-v12-c27-012',
          ar: 'وَهُمْ بَيْنَ صَائِحٍ وَهَاتِفٍ،',
          en: 'some of them shouting, some calling out,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'and they' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between, among' },
            { surface: 'صَائِحٍ', lemma: 'صَائِح', pos: 'noun', features: 'indef.gen', gloss: 'one shouting' },
            { surface: 'وَهَاتِفٍ', lemma: 'هَاتِف', pos: 'noun', features: 'conj+indef.gen', gloss: 'and one calling out' },
          ],
        },
        {
          id: 'qs-v12-c27-013',
          ar: 'وَمُتَنَدِّرٍ وَمُتَهَكِّمٍ،',
          en: 'some jesting, some sneering,',
          tokens: [
            { surface: 'وَمُتَنَدِّرٍ', lemma: 'مُتَنَدِّر', pos: 'noun', features: 'conj+indef.gen', gloss: 'one jesting' },
            { surface: 'وَمُتَهَكِّمٍ', lemma: 'مُتَهَكِّم', pos: 'noun', features: 'conj+indef.gen', gloss: 'and one sneering' },
          ],
        },
        {
          id: 'qs-v12-c27-014',
          ar: 'وَالْحَاكِمُ مُتَضَايِقٌ وَالْوَقْتُ قَصِيرٌ،',
          en: 'the ruler was irritated and the time was short,',
          tokens: [
            { surface: 'وَالْحَاكِمُ', lemma: 'حَاكِم', pos: 'noun', features: 'conj+def.nom', gloss: 'and the ruler' },
            { surface: 'مُتَضَايِقٌ', lemma: 'مُتَضَايِق', pos: 'adj', features: 'indef.nom', gloss: 'distressed, irritated' },
            { surface: 'وَالْوَقْتُ', lemma: 'وَقْت', pos: 'noun', features: 'conj+def.nom', gloss: 'and the time' },
            { surface: 'قَصِيرٌ', lemma: 'قَصِير', pos: 'adj', features: 'indef.nom', gloss: 'short' },
          ],
        },
        {
          id: 'qs-v12-c27-015',
          ar: 'وَالشَّمْسُ قَدْ مَالَتْ لِلْغُرُوبِ،',
          en: 'and the sun was already inclining toward setting,',
          tokens: [
            { surface: 'وَالشَّمْسُ', lemma: 'شَمْس', pos: 'noun', features: 'conj+def.nom', gloss: 'and the sun' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'already, indeed' },
            { surface: 'مَالَتْ', lemma: 'مَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to incline, lean; had inclined' },
            { surface: 'لِلْغُرُوبِ', lemma: 'غُرُوب', pos: 'noun', features: 'prep+def.gen', gloss: 'toward setting' },
          ],
        },
        {
          id: 'qs-v12-c27-016',
          ar: 'فَأَصْدَرَ الْحُكْمَ عَلَيْهِ بِالْقَتْلِ صَلْباً.',
          en: 'so he issued the verdict against him: death by crucifixion.',
          tokens: [
            { surface: 'فَأَصْدَرَ', lemma: 'أَصْدَرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ص د ر', gloss: 'to issue; so he issued' },
            { surface: 'الْحُكْمَ', lemma: 'حُكْم', pos: 'noun', features: 'def.acc', gloss: 'the verdict' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'against him' },
            { surface: 'بِالْقَتْلِ', lemma: 'قَتْل', pos: 'noun', features: 'prep+def.gen', gloss: 'with death' },
            { surface: 'صَلْباً', lemma: 'صَلْب', pos: 'noun', features: 'indef.acc', gloss: 'by crucifixion' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ حَالُ الْحَاكِمِ وَهُوَ يَنْتَظِرُ صُدُورَ الْحُكْمِ؟',
          options: ['كَانَ ضَائِقَ الذَّرْعِ، لَا رَغْبَةَ لَهُ وَلَا مَصْلَحَةَ لِأُمَّتِهِ فِي الْقَضِيَّةِ', 'كَانَ فَرِحاً مُسْرِعاً فِي إِصْدَارِ الْحُكْمِ', 'كَانَ غَائِباً عَنِ الْمَحْكَمَةِ تَماماً'],
          answer: 0,
          qEn: "What was the ruler's state as he waited on the verdict?",
          optionsEn: ['He had lost patience with it -- he had no desire in it, nor any benefit for his nation', 'He was happy and eager to issue the verdict', 'He was entirely absent from the court'],
        },
        {
          q: 'بِمَاذَا أَصْدَرَ الْحَاكِمُ الْحُكْمَ عَلَى الْمَسِيحِ؟',
          options: ['بِالْقَتْلِ صَلْباً', 'بِالسِّجْنِ الْمُؤَبَّدِ', 'بِالنَّفْيِ مِنَ الْبَلَدِ'],
          answer: 0,
          qEn: 'What verdict did the ruler issue against the Messiah?',
          optionsEn: ['Death by crucifixion', 'Life imprisonment', 'Exile from the country'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ ذَلِكَ',
        post: 'الْجُمُعَةِ بَعْدَ الْعَصْرِ لَيْلَةَ السَّبْتِ.',
        en: 'That was on Friday, after the ʿaṣr, the eve of Saturday.',
        options: ['يَوْمَ', 'يَوْمُ', 'يَوْمٍ', 'الْيَوْمَ'],
        answer: 0,
        rationales: [
          'Accusative, construct -- predicate of كَانَ and first term of an إضافة with الْجُمُعَةِ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Definite with the article -- wrong; a construct head cannot itself carry ال.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَكَانُوا',
        post: 'كُلَّ الْحِرْصِ عَلَى أَنْ يَصْدُرَ الْحُكْمُ.',
        en: 'So they were extremely eager for the verdict to be issued.',
        options: ['حَرِيصِينَ', 'حَرِيصُونَ', 'حَرِيصاً', 'حَرِيصٍ'],
        answer: 0,
        rationales: [
          'Accusative, sound masculine plural -- predicate of كَانَ, agreeing with the plural subject.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Singular accusative -- wrong number; the subject هُمْ is plural.',
          'Genitive -- wrong case entirely for a predicate of كَانَ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالشَّمْسُ قَدْ',
        post: 'لِلْغُرُوبِ.',
        en: 'And the sun had already inclined toward setting.',
        options: ['مَالَتْ', 'مَالَ', 'يَمِيلُ', 'مَائِلَةٌ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd feminine singular -- agrees with the feminine subject الشَّمْسُ.',
          '3rd masculine singular -- wrong gender.',
          'Imperfect -- wrong tense; the sun had already begun to set.',
          'Active participle (adjective) -- wrong part of speech for this position after قَدْ.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'ضَاقَ الْحَاكِمُ ذَرْعاً',
        pre: '',
        post: 'ذَرْعاً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['ضَاقَتْ', 'ضَاقَ', 'ضَاقُوا', 'ضِقْتُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '3rd masculine plural -- wrong number.',
          '1st singular -- wrong person entirely.',
        ],
      },
      {
        type: 'shift',
        base: 'ضَاقَ الْحَاكِمُ ذَرْعاً',
        pre: '',
        post: 'ذَرْعاً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['ضَاقُوا', 'ضَاقَ', 'ضَاقَتْ', 'ضِقْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'ضَاقَ الْحَاكِمُ ذَرْعاً',
        pre: '',
        post: 'ذَرْعاً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['ضِقْتُ', 'ضَاقَ', 'ضَاقَتْ', 'ضِقْنَا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا (hollow-verb perfect stem ضِقْ- before a vowel-initial suffix).',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

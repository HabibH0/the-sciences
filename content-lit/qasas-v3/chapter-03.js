// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 3 -- فِكْرَةُ
// الشَّيْطَانِ. Printed pages 63 (from the heading, partway down the page,
// right after ch2's closing lines higher up) - 64 (top portion only,
// ending before ch4's heading حِيلَةُ الشَّيْطَانِ partway down the same
// page). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against ../CHAPTER-FORMAT.md. The Devil settles on shirk (associating
// partners with Allah) as his weapon -- knowing it is the one sin Allah
// never forgives -- but finds he cannot simply ask people to commit it
// outright; they curse him for even suggesting it.
//
// Grammar / lexical notes:
//   -- أَبَدًا (qs-v3-c03-003/007) reuses the already-taught lemma exactly
//      as spelled at qasas-v2 ch20 (tanween before the alif) rather than
//      the alternate tanween-after-alif ordering, per the corpus's
//      established match-the-prior-occurrence rule.
//   -- شَيْطَان (qasas-v1 ch11) is the common-noun epithet "the Devil,
//      Satan" and stays distinct from إِبْلِيس (qasas-v3 ch2), the proper
//      name -- the author alternates between the two exactly as the source
//      does, and both lemmas already coexist in the corpus.
//   -- لَشَتَمَهُ (qs-v3-c03-013) fuses the جواب لَوْ emphatic لَ onto the new
//      verb شَتَمَ, tagged features 'part+perf.3ms+3ms' -- same
//      fused-لَ-onto-perfect pattern as ch1's لَتَعَجَّبَ.
//   -- لَشَيْطَانٌ (qs-v3-c03-018/019) fuses the emphatic لَ onto the
//      already-taught noun شَيْطَان after إِنَّ, tagged 'part+indef.nom' --
//      same pattern as qs-v2-c22-038's لَأَنتَ.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): رَأَى، أَنْ، دَعَا، نَاس،
//      إِلَى، عِبَادَة (qasas-v1 ch8)، صَنَم (qasas-v1 ch1)، دَخَلَ، النَّار،
//      لَا، الْجَنَّة، كَانَ، عَرَفَ، أَنَّ، اللَّه، غَفَرَ (qasas-v2 ch22)، شِرْك
//      (qasas-v2 ch11)، كُلّ، شَيْء، إِذَا (qasas-v1 ch3/9)، أَرَادَ، لَكِنْ،
//      كَيْفَ، طَرِيق (qasas-v2 ch2)، ذَلِكَ، لَوْ، ذَهَبَ، قَالَ، لِ، عَبَدَ،
//      ضَرَبَ (qasas-v1 ch4/11)، أَشْرَكَ، رَبّ، إِنَّ
//      are all already taught (or reused per the notes above) and are NOT
//      re-listed in newWords here.
//
// 4 new words (شَتَمَ، مَعَاذ، رَجِيم، خَبِيث).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'فِكْرَةُ الشَّيْطَانِ', en: "The Devil's Idea" },
  newWords: ['شَتَمَ', 'مَعَاذ', 'رَجِيم', 'خَبِيث'],
  lemmas: {
    شَتَمَ: { gloss: 'to insult, curse' },
    مَعَاذ: { gloss: 'refuge (idiom مَعَاذَ اللَّهِ: God forbid!)' },
    رَجِيم: { gloss: 'accursed, cast out (lit. stoned)' },
    خَبِيث: { gloss: 'wicked, foul' },
  },
  paragraphs: [
    {
      en: 'The Devil resolved to call people to worship idols, so that they would enter the Fire and never enter Paradise. The Devil knew that Allah does not forgive shirk, but forgives everything else if He wills. So the Devil decided to call them to shirk, so that they would never enter Paradise. But how [was he to find] the way to that, when people [still] worship Allah? If he were to go to the people',
      sentences: [
        {
          id: 'qs-v3-c03-001',
          ar: 'وَرَأَى الشَّيْطَانُ أَنْ يَدْعُوَ النَّاسَ إِلَى عِبَادَةِ الأَصْنَامِ',
          en: 'The Devil resolved to call people to worship idols,',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ر أ ي', gloss: 'to see, resolve; and resolved' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'the Devil' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَدْعُوَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms', gloss: 'to call, invite; call' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the worship of' },
            { surface: 'الأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v3-c03-002',
          ar: 'فَيَدْخُلُوا النَّارَ',
          en: 'so that they would enter the Fire',
          tokens: [
            { surface: 'فَيَدْخُلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+impf.3mp', root: 'د خ ل', gloss: 'to enter; so that they enter' },
            { surface: 'النَّارَ', lemma: 'نَار', pos: 'noun', features: 'def.acc', gloss: 'the Fire' },
          ],
        },
        {
          id: 'qs-v3-c03-003',
          ar: 'وَلَا يَدْخُلُوا الْجَنَّةَ أَبَدًا.',
          en: 'and never enter Paradise.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَدْخُلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.3mp', root: 'د خ ل', gloss: 'to enter; enter' },
            { surface: 'الْجَنَّةَ', lemma: 'جَنَّة', pos: 'noun', features: 'def.acc', gloss: 'Paradise' },
            { surface: 'أَبَدًا', lemma: 'أَبَدًا', pos: 'adv', features: 'indef.acc', gloss: 'never, at all' },
          ],
        },
        {
          id: 'qs-v3-c03-004',
          ar: 'وَكَانَ الشَّيْطَانُ يَعْرِفُ أَنَّ اللَّهَ لَا يَغْفِرُ الشِّرْكَ،',
          en: 'The Devil knew that Allah does not forgive shirk,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'the Devil' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; knows' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَغْفِرُ', lemma: 'غَفَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to forgive; forgive' },
            { surface: 'الشِّرْكَ', lemma: 'شِرْك', pos: 'noun', features: 'def.acc', gloss: 'shirk, associating partners' },
          ],
        },
        {
          id: 'qs-v3-c03-005',
          ar: 'وَيَغْفِرُ كُلَّ شَيْءٍ إِذَا أَرَادَ.',
          en: 'but forgives everything else if He wills.',
          tokens: [
            { surface: 'وَيَغْفِرُ', lemma: 'غَفَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to forgive; and forgives' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.acc', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want, will; He wills' },
          ],
        },
        {
          id: 'qs-v3-c03-006',
          ar: 'فَأَرَادَ الشَّيْطَانُ أَنْ يَدْعُوَهُمْ إِلَى الشِّرْكِ.',
          en: 'So the Devil decided to call them to shirk,',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want, intend; so decided' },
            { surface: 'الشَّيْطَانُ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.nom', root: 'ش ط ن', gloss: 'the Devil' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَدْعُوَهُمْ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to call, invite; call them' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'def.gen', gloss: 'shirk' },
          ],
        },
        {
          id: 'qs-v3-c03-007',
          ar: 'فَلَا يَدْخُلُوا الْجَنَّةَ أَبَدًا.',
          en: 'so that they would never enter Paradise.',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so that not' },
            { surface: 'يَدْخُلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.3mp', root: 'د خ ل', gloss: 'to enter; enter' },
            { surface: 'الْجَنَّةَ', lemma: 'جَنَّة', pos: 'noun', features: 'def.acc', gloss: 'Paradise' },
            { surface: 'أَبَدًا', lemma: 'أَبَدًا', pos: 'adv', features: 'indef.acc', gloss: 'never, at all' },
          ],
        },
        {
          id: 'qs-v3-c03-008',
          ar: 'وَلَكِنْ كَيْفَ الطَّرِيقُ إِلَى ذَلِكَ،',
          en: 'But how [was he to find] the way to that,',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'الطَّرِيقُ', lemma: 'طَرِيق', pos: 'noun', features: 'def.nom', gloss: 'the way' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v3-c03-009',
          ar: 'وَالنَّاسُ يَعْبُدُونَ اللَّهَ؟',
          en: 'when people [still] worship Allah?',
          tokens: [
            { surface: 'وَالنَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'conj+def.nom', gloss: 'and the people' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c03-010',
          ar: 'إِنَّهُ لَوْ ذَهَبَ إِلَى النَّاسِ',
          en: 'If he were to go to the people',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'ذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to go; went' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا اخْتَارَ الشَّيْطَانُ الشِّرْكَ بِالذَّاتِ لِيَدْعُوَ النَّاسَ إِلَيْهِ؟',
          options: ['لِأَنَّهُ يَعْرِفُ أَنَّ اللَّهَ لَا يَغْفِرُ الشِّرْكَ', 'لِأَنَّهُ أَسْهَلُ الذُّنُوبِ', 'لِأَنَّ النَّاسَ كَانُوا يُحِبُّونَهُ بِالْفِعْلِ'],
          answer: 0,
          qEn: 'Why did the Devil choose shirk specifically to call people to?',
          optionsEn: ['Because he knew Allah never forgives shirk', 'Because it is the easiest sin', 'Because people already loved him'],
        },
      ],
    },
    {
      lines: true,
      en: 'and said to them: "Worship the idols and do not worship Allah," the people would surely have cursed him and struck him. "They said: \'God forbid! Should we associate partners with our Lord? Should we worship idols? You are truly a cursed devil! You are truly a wicked devil!"',
      sentences: [
        {
          id: 'qs-v3-c03-011',
          ar: 'وَقَالَ لَهُمْ: «اُعْبُدُوا الأَصْنَامَ',
          en: 'and said to them: "Worship the idols',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'اُعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', gloss: 'to worship; worship!' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v3-c03-012',
          ar: 'وَلَا تَعْبُدُوا اللَّهَ»',
          en: 'and do not worship Allah,"',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.2mp', gloss: 'to worship; you worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c03-013',
          ar: 'لَشَتَمَهُ النَّاسُ',
          en: 'the people would surely have cursed him',
          tokens: [
            { surface: 'لَشَتَمَهُ', lemma: 'شَتَمَ', pos: 'verb', features: 'part+perf.3ms+3ms', root: 'ش ت م', gloss: 'to insult, curse; would have insulted him' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v3-c03-014',
          ar: 'وَضَرَبُوهُ.',
          en: 'and struck him.',
          tokens: [
            { surface: 'وَضَرَبُوهُ', lemma: 'ضَرَبَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ض ر ب', gloss: 'to strike, hit; and struck him' },
          ],
        },
        {
          id: 'qs-v3-c03-015',
          ar: 'قَالُوا: مَعَاذَ اللَّهِ،',
          en: '"They said: \'God forbid!',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'مَعَاذَ', lemma: 'مَعَاذ', pos: 'noun', features: 'acc.constr', root: 'ع و ذ', gloss: 'refuge of (idiom: God forbid!)' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c03-016',
          ar: 'أَنُشْرِكُ بِرَبِّنَا؟',
          en: 'Should we associate partners with our Lord?',
          tokens: [
            { surface: 'أَنُشْرِكُ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.1p', gloss: 'to associate partners; should we associate' },
            { surface: 'بِرَبِّنَا', lemma: 'رَبّ', pos: 'noun', features: 'prep+gen+1p', gloss: 'with our Lord' },
          ],
        },
        {
          id: 'qs-v3-c03-017',
          ar: 'أَنَعْبُدُ الأَصْنَامَ؟',
          en: 'Should we worship idols?',
          tokens: [
            { surface: 'أَنَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.1p', gloss: 'to worship; should we worship' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.acc', gloss: 'idols' },
          ],
        },
        {
          id: 'qs-v3-c03-018',
          ar: 'إِنَّكَ لَشَيْطَانٌ رَجِيمٌ!',
          en: 'You are truly a cursed devil!',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَشَيْطَانٌ', lemma: 'شَيْطَان', pos: 'noun', features: 'part+indef.nom', root: 'ش ط ن', gloss: 'truly a devil' },
            { surface: 'رَجِيمٌ', lemma: 'رَجِيم', pos: 'adj', features: 'indef.nom', root: 'ر ج م', gloss: 'accursed, cast out' },
          ],
        },
        {
          id: 'qs-v3-c03-019',
          ar: 'إِنَّكَ لَشَيْطَانٌ خَبِيثٌ!',
          en: 'You are truly a wicked devil!"',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَشَيْطَانٌ', lemma: 'شَيْطَان', pos: 'noun', features: 'part+indef.nom', root: 'ش ط ن', gloss: 'truly a devil' },
            { surface: 'خَبِيثٌ', lemma: 'خَبِيث', pos: 'adj', features: 'indef.nom', root: 'خ ب ث', gloss: 'wicked, foul' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ سَيَحْدُثُ لَوْ ذَهَبَ الشَّيْطَانُ إِلَى النَّاسِ وَدَعَاهُمْ إِلَى الشِّرْكِ مُبَاشَرَةً؟',
          options: ['لَشَتَمَهُ النَّاسُ وَضَرَبُوهُ', 'لَقَبِلُوا كَلَامَهُ فَوْراً', 'لَمْ يَكُونُوا لِيَنْتَبِهُوا لَهُ'],
          answer: 0,
          qEn: 'What would have happened if the Devil went directly to people and called them to shirk?',
          optionsEn: ['The people would have cursed and struck him', 'They would have accepted his words at once', 'They would not have paid him any attention'],
        },
        {
          q: 'كَيْفَ وَصَفَ النَّاسُ الشَّيْطَانَ فِي رَدِّهِمْ؟',
          options: ['شَيْطَانٌ رَجِيمٌ وَشَيْطَانٌ خَبِيثٌ', 'صَدِيقٌ أَمِينٌ', 'رَجُلٌ حَكِيمٌ'],
          answer: 0,
          qEn: 'How did the people describe the Devil in their response?',
          optionsEn: ['A cursed devil and a wicked devil', 'A trustworthy friend', 'A wise man'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ الشَّيْطَانُ يَعْرِفُ أَنَّ اللَّهَ لَا',
        post: 'الشِّرْكَ.',
        en: 'The Devil knew that Allah does not forgive shirk.',
        options: ['يَغْفِرُ', 'غَفَرَ', 'يُغْفَرُ', 'غَافِرٌ'],
        answer: 0,
        rationales: [
          'Imperfect indicative -- a timeless, general truth, matching لَا + imperfect.',
          'Perfect -- wrong tense; this is a general, ongoing truth.',
          'Passive -- wrong voice; Allah is the one who forgives, not the one forgiven.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّهُ لَوْ ذَهَبَ إِلَى النَّاسِ وَقَالَ لَهُمُ اعْبُدُوا الأَصْنَامَ',
        post: 'النَّاسُ وَضَرَبُوهُ.',
        en: 'If he had gone to the people and told them to worship idols, the people would have cursed him and struck him.',
        options: ['لَشَتَمَهُ', 'شَتَمَهُ', 'يَشْتِمُهُ', 'لَشَتَمَتْهُ'],
        answer: 0,
        rationales: [
          'لَ (جواب لَوْ) + perfect, 3rd masculine singular + object -- the required response-clause marker with the completed hypothetical action, matching وَضَرَبُوهُ.',
          'Missing the جواب لَوْ لَ -- incomplete for this construction.',
          'Imperfect -- wrong tense; the جواب لَوْ takes a perfect-tense verb here.',
          'Wrong subject gender -- "she cursed him."',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالُوا: مَعَاذَ اللَّهِ، أَنُشْرِكُ بِرَبِّنَا؟ إِنَّكَ',
        post: 'رَجِيمٌ!',
        en: '"They said: \'God forbid, should we associate partners with our Lord? You are truly a cursed devil!\'"',
        options: ['لَشَيْطَانٌ', 'شَيْطَانٌ', 'لَشَيْطَانَ', 'الشَّيْطَانُ'],
        answer: 0,
        rationales: [
          'لَ (تَوْكِيد) + indefinite nominative -- emphatic predicate of إِنَّ, matching the taught pattern لَأَنتَ/لَخَاطِئِينَ.',
          'Missing the emphatic لَ -- grammatically fine but not what the sentence uses.',
          'Accusative -- wrong case; the predicate of إِنَّ is nominative.',
          'Definite -- wrong; the insult describes him as "a devil," indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْتِمُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشْتِمُ', 'يَشْتِمُ', 'تَشْتِمُ', 'نَشْتِمُ'],
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
        base: 'يَشْتِمُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَشْتِمُ', 'يَشْتِمُ', 'أَشْتِمُ', 'نَشْتِمُ'],
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
        base: 'يَشْتِمُ الرَّجُلُ صَدِيقَهُ',
        pre: '',
        post: 'صَدِيقَهُ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَشْتِمُونَ', 'يَشْتِمُ', 'تَشْتِمُ', 'نَشْتِمُ'],
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

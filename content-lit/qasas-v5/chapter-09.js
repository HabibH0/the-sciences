// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 9 --
// مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ.
// Printed page 105 (the chapter's own box, at the top of the page, ending
// before ch10's box نَاقَةُ اللَّهِ further down the same page). Transcribed
// by hand from the scan (vision OCR, 300dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_VOLUME_MAP.md's volume 5 table.
//
// Ṣāliḥ presses his people further: why do they flee him and fear him, when
// he takes nothing from them and asks for no reward -- his reward is with
// the Lord of the worlds alone (Qur'an 26:109)? He is a trustworthy
// advisor, yet they obey the very people who wrong others, devour their
// wealth, and spread corruption instead. Unable to answer him, the people
// fall back on dismissal and a demand for a miracle (Qur'an 26:153-154).
//
// Grammar / lexical notes:
//   -- Both bracketed lines are Qur'an quotations from Sūrat ash-Shuʿarāʾ:
//      qs-v5-c09-006/007 is 26:109, qs-v5-c09-013 is 26:153, and
//      qs-v5-c09-014/015 is 26:154 -- each long ayah is split into two
//      ﴿﴾-wrapped fragments at its natural phrase boundary, matching the
//      qasas-v3 ch16 precedent for splitting a long ayah run. The exact
//      phrase مَا أَنْتَ إِلَّا بَشَرٌ مِثْلُنَا فَأْتِ بِآيَةٍ إِنْ كُنتَ مِنَ الصَّادِقِينَ
//      recurs almost verbatim across the Ash-Shuʿarāʾ prophets' stories, so
//      its tokenization here follows the already-established precedents for
//      بَشَرٌ مِثْلُ- (qasas-v3 ch12) and الصَّادِقِينَ (qasas-v3 ch17) exactly.
//   -- The bare vocative وَيَا إِخْوَانِي at the head of qs-v5-c09-001 and
//      -008 has no predicate of its own, so it is kept in the same sentence
//      entry as the question that follows it, per the same house convention
//      already applied in ch8 of this volume.
//   -- قَوْمَهُ-type أَتَظُنُّونَ is not repeated here, but إِخْوَانِي again is
//      tagged 'pl.acc+1s' (a مُنَادًى مُضَاف, grammatically accusative though
//      not visibly marked), matching ch8's own established tag.
//   -- وَالَّذِينَ يَفْجُرُونَ وَيُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ! (-010) is
//      kept as its own sentence despite being an elliptical continuation of
//      the previous line's implied تُطِيعُونَ ("[and why do you obey] those
//      who transgress...") -- it has its own internal subject-verb content
//      (three coordinated verbs) even without repeating the governing verb,
//      so it is not a bare fragment requiring a merge.
//   -- أُنْقِصُ (new, form IV of ن ق ص "to diminish, decrease") and
//      أَصْلَحَ (new, form IV of ص ل ح "to set right, reform") are each the
//      causative counterpart of an already/soon-taught root; أَصْلَحَ here
//      is also the direct antonym of the already-taught أَفْسَدَ ("to
//      corrupt," qasas-v2 ch20) within the very same sentence.
//   -- الْمُسَحَّرِينَ (new, "the bewitched") is tagged as its own lemma
//      مُسَحَّر -- a Form II passive participle -- rather than decomposed to
//      a verb سَحَرَ, since only the participle itself appears on the page;
//      this matches the already-established participle-as-distinct-lemma
//      convention (مُسَمّى, qasas-v3 ch16).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): يَا، أَخ، لِمَاذَا، فَرَّ،
//      مِنْ، خَافَ، أَنَا، لَا، مَال، شَيْء، طَلَبَ، نَصَحَ، لِ، بَلَّغَ، رِسَالَة، رَبّ،
//      مَا، سَأَلَ، عَلَى، أَجْر، إِنْ، إِلَّا، عَالَم، أَطَاعَ، نَاصِح، أَمِين، تُطِيعُ (from
//      أَطَاعَ)، الَّذِي، ظَلَمَ، النَّاس، أَكَلَ، أَفْسَدَ، فِي، أَرْض، الْقَوْم، لَمْ،
//      وَجَدَ، ذَلِكَ، جَوَاب، قَالَ، إِنَّمَا، أَنْتَ، بَشَر، مِثْل، أَتَى، آيَة، كَانَ،
//      صَادِق، صَالِح (qasas-v5 ch4/5/8)
//      are all already taught and are NOT re-listed in newWords here.
//
// 5 new words (أَنْقَصَ، فَجَرَ، أَصْلَحَ، عَجَزَ، مُسَحَّر).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ', en: '"I Ask No Reward of You For It"' },
  newWords: ['أَنْقَصَ', 'فَجَرَ', 'أَصْلَحَ', 'عَجَزَ', 'مُسَحَّر'],
  lemmas: {
    أَنْقَصَ: { gloss: 'to diminish, decrease (something)' },
    فَجَرَ: { gloss: 'to transgress grossly, commit gross sin' },
    أَصْلَحَ: { gloss: 'to set right, reform' },
    عَجَزَ: { gloss: 'to be unable, incapable' },
    مُسَحَّر: { gloss: 'bewitched, affected by magic' },
  },
  paragraphs: [
    {
      lines: true,
      en: 'And O my brothers, why do you flee from me? What do you fear? I do not diminish any of your wealth, I do not ask anything of you. I advise you and convey to you the messages of my Lord. "And I do not ask you for it any reward -- my reward is only upon the Lord of the worlds." And O my brothers, why do you not obey me, when I am to you a trustworthy advisor? And why do you obey those who wrong the people and eat their wealth, and those who transgress and cause corruption in the earth and do not set it right! And the people were unable, and could not find an answer to that. So they said: "You are but one of the bewitched." "You are nothing but a human being like us -- so bring a sign, if you are among the truthful."',
      sentences: [
        {
          id: 'qs-v5-c09-001',
          ar: 'وَيَا إِخْوَانِي لِمَاذَا تَفِرُّونَ مِنِّي؟',
          en: 'And O my brothers, why do you flee from me?',
          tokens: [
            { surface: 'وَيَا', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: 'and O' },
            { surface: 'إِخْوَانِي', lemma: 'أَخ', pos: 'noun', features: 'pl.acc+1s', root: 'أ خ و', gloss: 'my brothers' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'تَفِرُّونَ', lemma: 'فَرَّ', pos: 'verb', features: 'impf.2mp', root: 'ف ر ر', gloss: 'to flee; do you flee' },
            { surface: 'مِنِّي', lemma: 'مِنْ', pos: 'prep', features: 'prep+1s', gloss: 'from me' },
          ],
        },
        {
          id: 'qs-v5-c09-002',
          ar: 'مَاذَا تَخَافُونَ؟',
          en: 'What do you fear?',
          tokens: [
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.2mp', root: 'خ و ف', gloss: 'to fear; do you fear' },
          ],
        },
        {
          id: 'qs-v5-c09-003',
          ar: 'أَنَا لَا أُنْقِصُ مِنْ مَالِكُمْ شَيْئاً،',
          en: 'I do not diminish any of your wealth,',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أُنْقِصُ', lemma: 'أَنْقَصَ', pos: 'verb', features: 'impf.1s', root: 'ن ق ص', gloss: 'to diminish, decrease; I diminish' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, from' },
            { surface: 'مَالِكُمْ', lemma: 'مَال', pos: 'noun', features: 'gen+2mp', root: 'م و ل', gloss: 'your wealth' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', root: 'ش ي أ', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v5-c09-004',
          ar: 'أَنَا لَا أَطْلُبُ مِنْكُمْ شَيْئاً.',
          en: 'I do not ask anything of you.',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَطْلُبُ', lemma: 'طَلَبَ', pos: 'verb', features: 'impf.1s', root: 'ط ل ب', gloss: 'to seek, ask for; I ask' },
            { surface: 'مِنْكُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2mp', gloss: 'of you' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', root: 'ش ي أ', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v5-c09-005',
          ar: 'أَنَا أَنْصَحُ لَكُمْ وَأُبَلِّغُكُمْ رِسَالَاتِ رَبِّي.',
          en: 'I advise you and convey to you the messages of my Lord.',
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أَنْصَحُ', lemma: 'نَصَحَ', pos: 'verb', features: 'impf.1s', root: 'ن ص ح', gloss: 'to advise; I advise' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'you' },
            { surface: 'وَأُبَلِّغُكُمْ', lemma: 'بَلَّغَ', pos: 'verb', features: 'conj+impf.1s+2mp', root: 'ب ل غ', gloss: 'to convey, deliver; and I convey to you' },
            { surface: 'رِسَالَاتِ', lemma: 'رِسَالَة', pos: 'noun', features: 'pl.constr.acc', root: 'ر س ل', gloss: 'the messages of' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', root: 'ر ب ب', gloss: 'my Lord' },
          ],
        },
        {
          id: 'qs-v5-c09-006',
          ar: '﴿وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ',
          en: 'And I do not ask you for it any reward --',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَسْأَلُكُمْ', lemma: 'سَأَلَ', pos: 'verb', features: 'impf.1s+2mp', root: 'س أ ل', gloss: 'to ask; I ask you' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'for it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, any' },
            { surface: 'أَجْرٍ', lemma: 'أَجْر', pos: 'noun', features: 'indef.gen', root: 'أ ج ر', gloss: 'a reward, wage' },
          ],
        },
        {
          id: 'qs-v5-c09-007',
          ar: 'إِنْ أَجْرِيَ إِلَّا عَلَى رَبِّ الْعَالَمِينَ﴾.',
          en: 'my reward is only upon the Lord of the worlds."',
          tokens: [
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَجْرِيَ', lemma: 'أَجْر', pos: 'noun', features: 'nom+1s', root: 'أ ج ر', gloss: 'my reward' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.gen', root: 'ر ب ب', gloss: 'the Lord of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', root: 'ع ل م', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v5-c09-008',
          ar: 'وَيَا إِخْوَانِي لِمَاذَا لَا تُطِيعُونَنِي وَأَنَا لَكُمْ نَاصِحٌ أَمِينٌ؟',
          en: 'And O my brothers, why do you not obey me, when I am to you a trustworthy advisor?',
          tokens: [
            { surface: 'وَيَا', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: 'and O' },
            { surface: 'إِخْوَانِي', lemma: 'أَخ', pos: 'noun', features: 'pl.acc+1s', root: 'أ خ و', gloss: 'my brothers' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُطِيعُونَنِي', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.2mp+1s', root: 'ط و ع', gloss: 'to obey; you obey me' },
            { surface: 'وَأَنَا', lemma: 'أَنَا', pos: 'noun', features: 'conj+1s', gloss: 'and I (am)' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'to you' },
            { surface: 'نَاصِحٌ', lemma: 'نَاصِح', pos: 'noun', features: 'indef.nom', root: 'ن ص ح', gloss: 'an advisor, a counselor' },
            { surface: 'أَمِينٌ', lemma: 'أَمِين', pos: 'adj', features: 'indef.nom', root: 'أ م ن', gloss: 'trustworthy' },
          ],
        },
        {
          id: 'qs-v5-c09-009',
          ar: 'وَلِمَاذَا تُطِيعُونَ الَّذِينَ يَظْلِمُونَ النَّاسَ وَيَأْكُلُونَ أَمْوَالَهُمْ؟',
          en: 'And why do you obey those who wrong the people and eat their wealth?',
          tokens: [
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'and why' },
            { surface: 'تُطِيعُونَ', lemma: 'أَطَاعَ', pos: 'verb', features: 'impf.2mp', root: 'ط و ع', gloss: 'to obey; do you obey' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'يَظْلِمُونَ', lemma: 'ظَلَمَ', pos: 'verb', features: 'impf.3mp', root: 'ظ ل م', gloss: 'to wrong, oppress; wrong' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'وَيَأْكُلُونَ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3mp', root: 'أ ك ل', gloss: 'to eat; and eat' },
            { surface: 'أَمْوَالَهُمْ', lemma: 'مَال', pos: 'noun', features: 'pl.acc+3mp', root: 'م و ل', gloss: 'their wealth' },
          ],
        },
        {
          id: 'qs-v5-c09-010',
          ar: 'وَالَّذِينَ يَفْجُرُونَ وَيُفْسِدُونَ فِي الْأَرْضِ وَلَا يُصْلِحُونَ!',
          en: 'and those who transgress and cause corruption in the earth and do not set it right!',
          tokens: [
            { surface: 'وَالَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'conj+pl.rel', gloss: 'and those who' },
            { surface: 'يَفْجُرُونَ', lemma: 'فَجَرَ', pos: 'verb', features: 'impf.3mp', root: 'ف ج ر', gloss: 'to transgress grossly; transgress' },
            { surface: 'وَيُفْسِدُونَ', lemma: 'أَفْسَدَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ف س د', gloss: 'to corrupt, cause corruption; and cause corruption' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُصْلِحُونَ', lemma: 'أَصْلَحَ', pos: 'verb', features: 'impf.3mp', root: 'ص ل ح', gloss: 'to set right, reform; set it right' },
          ],
        },
        {
          id: 'qs-v5-c09-011',
          ar: 'وَعَجَزَ الْقَوْمُ وَلَمْ يَجِدُوا عَلَى ذَلِكَ جَوَاباً.',
          en: 'And the people were unable, and could not find an answer to that.',
          tokens: [
            { surface: 'وَعَجَزَ', lemma: 'عَجَزَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ج ز', gloss: 'to be unable, incapable; and was unable' },
            { surface: 'الْقَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'def.nom', root: 'ق و م', gloss: 'the people' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُوا', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3mp', root: 'و ج د', gloss: 'to find; find' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'جَوَاباً', lemma: 'جَوَاب', pos: 'noun', features: 'indef.acc', root: 'ج و ب', gloss: 'an answer' },
          ],
        },
        {
          id: 'qs-v5-c09-012',
          ar: 'فَقَالُوا:',
          en: 'So they said:',
          tokens: [
            { surface: 'فَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و ل', gloss: 'to say; so they said' },
          ],
        },
        {
          id: 'qs-v5-c09-013',
          ar: '﴿إِنَّمَا أَنْتَ مِنَ الْمُسَحَّرِينَ﴾.',
          en: '"You are but one of the bewitched."',
          tokens: [
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'only, indeed' },
            { surface: 'أَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, among' },
            { surface: 'الْمُسَحَّرِينَ', lemma: 'مُسَحَّر', pos: 'adj', features: 'pl.def.gen', root: 'س ح ر', gloss: 'bewitched, affected by magic' },
          ],
        },
        {
          id: 'qs-v5-c09-014',
          ar: '﴿مَا أَنْتَ إِلَّا بَشَرٌ مِثْلُنَا',
          en: '"You are nothing but a human being like us --',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, only' },
            { surface: 'بَشَرٌ', lemma: 'بَشَر', pos: 'noun', features: 'indef.nom', root: 'ب ش ر', gloss: 'a human being' },
            { surface: 'مِثْلُنَا', lemma: 'مِثْل', pos: 'noun', features: 'nom+1p', root: 'م ث ل', gloss: 'like us' },
          ],
        },
        {
          id: 'qs-v5-c09-015',
          ar: 'فَأْتِ بِآيَةٍ إِنْ كُنْتَ مِنَ الصَّادِقِينَ﴾.',
          en: 'so bring a sign, if you are among the truthful."',
          tokens: [
            { surface: 'فَأْتِ', lemma: 'أَتَى', pos: 'verb', features: 'conj+imp.2ms', root: 'أ ت ي', gloss: 'to come, bring; so bring' },
            { surface: 'بِآيَةٍ', lemma: 'آيَة', pos: 'noun', features: 'prep+indef.gen', root: 'أ ي ي', gloss: 'a sign' },
            { surface: 'إِنْ', lemma: 'إِنْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كُنْتَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2ms', root: 'ك و ن', gloss: 'to be; you are' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الصَّادِقِينَ', lemma: 'صَادِق', pos: 'adj', features: 'pl.def.gen', root: 'ص د ق', gloss: 'the truthful' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ صَالِحٌ عَنْ نَفْسِهِ لِقَوْمِهِ؟',
          options: [
            'أَنَا لَا أُنْقِصُ مِنْ مَالِكُمْ شَيْئاً وَلَا أَطْلُبُ مِنْكُمْ شَيْئاً، وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ',
            'أَنَا أُرِيدُ مِنْكُمْ نِصْفَ أَمْوَالِكُمْ',
            'أَنَا أَطْلُبُ مِنْكُمْ أَنْ تَخْدُمُونِي',
          ],
          answer: 0,
          qEn: 'What did Ṣāliḥ say about himself to his people?',
          optionsEn: [
            'I do not diminish any of your wealth and I ask nothing of you, and I ask you no reward for it',
            'I want half of your wealth from you',
            'I ask you to serve me',
          ],
        },
        {
          q: 'لِمَاذَا عَجَزَ قَوْمُ صَالِحٍ وَلَمْ يَجِدُوا جَوَاباً؟',
          options: [
            'لِأَنَّهُمْ لَمْ يَجِدُوا رَدّاً عَلَى سُؤَالِهِ عَنْ طَاعَتِهِمْ لِلظَّالِمِينَ الْمُفْسِدِينَ',
            'لِأَنَّهُمْ كَانُوا نَائِمِينَ',
            'لِأَنَّهُمْ لَمْ يَسْمَعُوهُ',
          ],
          answer: 0,
          qEn: "Why were Ṣāliḥ's people unable to find an answer?",
          optionsEn: [
            'Because they had no reply to his question about why they obeyed the wrongdoers who spread corruption',
            'Because they were asleep',
            'Because they did not hear him',
          ],
        },
        {
          q: 'مَاذَا قَالَ الْقَوْمُ لِصَالِحٍ بَعْدَ أَنْ عَجَزُوا؟',
          options: [
            'إِنَّمَا أَنْتَ مِنَ الْمُسَحَّرِينَ، مَا أَنْتَ إِلَّا بَشَرٌ مِثْلُنَا فَأْتِ بِآيَةٍ إِنْ كُنْتَ مِنَ الصَّادِقِينَ',
            'قَالُوا: صَدَقْتَ يَا صَالِحُ فَخُذْ أَمْوَالَنَا',
            'قَالُوا: نَحْنُ مَعَكَ يَا صَالِحُ',
          ],
          answer: 0,
          qEn: 'What did the people say to Ṣāliḥ after they were unable to answer him?',
          optionsEn: [
            'You are but one of the bewitched; you are nothing but a human being like us, so bring a sign if you are among the truthful',
            'They said: You are right, Ṣāliḥ, so take our wealth',
            'They said: We are with you, Ṣāliḥ',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'أَنَا لَا',
        post: 'مِنْ مَالِكُمْ شَيْئاً.',
        en: 'I do not diminish any of your wealth.',
        options: ['أُنْقِصُ', 'نَقَصَ', 'يُنْقِصُ', 'أُنْقِصُوا'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          'Perfect, 3rd masculine singular -- wrong person and tense.',
          '3rd masculine singular imperfect -- wrong person; the speaker refers to himself.',
          'Plural form -- wrong person and number for أَنَا.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَعَجَزَ الْقَوْمُ وَلَمْ',
        post: 'عَلَى ذَلِكَ جَوَاباً.',
        en: 'And the people were unable, and could not find an answer to that.',
        options: ['يَجِدُوا', 'وَجَدُوا', 'يَجِدُونَ', 'وَاجِدُونَ'],
        answer: 0,
        rationales: [
          'Jussive-form imperfect, 3rd masculine plural -- matches the negating لَمْ, which always pairs with this form.',
          'Perfect -- wrong form after لَمْ, which requires the (jussive) imperfect.',
          'Indicative imperfect (with نَ) -- wrong mood; لَمْ drops the نَ from plural imperfect verbs.',
          'Active participle (noun, "finders") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَنَا لَكُمْ',
        post: 'أَمِينٌ؟',
        en: 'when I am to you a trustworthy advisor?',
        options: ['نَاصِحٌ', 'نَاصِحاً', 'نَاصِحٍ', 'النَّاصِحُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- predicate of the implied أَنَا, matching the printed نَاصِحٌ أَمِينٌ.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong definiteness; the text describes him indefinitely as "a trustworthy advisor."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَفِرُّ الرَّجُلُ مِنِّي',
        pre: '',
        post: 'مِنِّي',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m.)',
        options: ['تَفِرُّونَ', 'يَفِرُّ', 'تَفِرُّ', 'نَفِرُّ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong number.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَفِرُّ الرَّجُلُ مِنِّي',
        pre: '',
        post: 'مِنِّي',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَفِرُّ', 'يَفِرُّ', 'أَفِرُّ', 'نَفِرُّ'],
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
        base: 'يَفِرُّ الرَّجُلُ مِنِّي',
        pre: '',
        post: 'مِنِّي',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَفِرُّونَ', 'يَفِرُّ', 'تَفِرُّ', 'نَفِرُّ'],
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

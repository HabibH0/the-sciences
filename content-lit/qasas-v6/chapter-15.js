// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 15 -- فِي مَدْيَنَ.
// Printed pages 134 (heading, partway down, right after ch14's closing
// Qur'an citation 28:22) - 135 - 136 (top only), ending right before
// ch16's heading «الطَّلَبُ» which opens partway down page 136 (already
// transcribed, see qasas-v6/chapter-16.js). Transcribed by hand from the
// scan (vision OCR, 200dpi render) against ../CHAPTER-FORMAT.md. Covers
// Q28:23-24: Mūsā at the well of Madyan, watering the two shepherd-girls'
// flock, and his prayer in the shade.
//
// Grammar / lexical notes:
//   -- تَذُودَانِ / تَنْتَظِرَانِ / تَسْقِيَانِ / قَالَتَا / سَبَقَتَا / ذَهَبَتَا (and
//      their subjunctive/dual counterparts) are all dual verb forms for
//      the two women -- no dedicated dual atom exists in
//      CHAPTER-FORMAT.md's feature grammar (only sg/pl are documented for
//      person-number), so these are tagged with the nearest documented
//      shape (impf.3fd / perf.3fd) per the "degrades gracefully, print as
//      written" allowance in the format doc's feature-string section.
//   -- حَنَانُ الْكَرِيمِ (qs-v6-c15-006/011) reuses the already-established
//      idiom pairing (see qasas-v6/ch17's own حَنَان entry) -- "the
//      tenderness of a noble/generous soul," Mūsā's own compassion, not a
//      third party's.
//   -- Shared lexicon check (cross-checked against known_lemmas.json,
//      volumes 1-3 + this volume's chapters so far): وَصَلَ, مُوسَى, إِلَى,
//      مَدْيَن, لا, عَرَفَ, أَحَد, مَنْ, أَوَى (qasas-v3/ch20), فِي, لَيْل,
//      أَيْنَ, بَاتَ (qasas-v6/ch16), تَحَيَّرَ (qasas-v1/ch6), لَكِنَّ, اللَّه,
//      أَضَاعَ (qasas-v2/ch22), كَانَ, هُنَالِكَ (qasas-v6/ch7), بِئْر
//      (qasas-v1/ch12), سَقَى (qasas-v1/ch9), عَلَى, نَاس, غَنَم (qasas-v6/ch1),
//      وَجَدَ (qasas-v1/ch9), اِمْرَأَة, اِنْتَظَرَ (qasas-v2/ch15), أَنْ, رَأَى,
//      ذَلِكَ, قَلْب (qasas-v2/ch4), حَنَان (qasas-v6/ch17), كَرِيم, شَفَقَة
//      (qasas-v6/ch17), أَب, رَحِيم (qasas-v2/ch9), قَالَ, لِمَاذَا, يُمْكِنُ,
//      حَتَّى, لِأَنَّ, قَوِيّ (qasas-v1/ch7), نَحْنُ, ضَعِيف (qasas-v1/ch7),
//      رَجُل, أُنْثَى (qasas-v3/ch19), كَأَنَّ (qasas-v3/ch19), سَأَلَ
//      (qasas-v1/ch2), بَيْت (qasas-v1/ch1), سَبَقَ (qasas-v3/ch15), شَيْخ
//      (qasas-v2/ch1), كَبِير (qasas-v1/ch1), هَاجَ (qasas-v2/ch22), ذَهَبَ,
//      رَبّ, خَيْر (qasas-v2/ch9), فَقِير (qasas-v2/ch9)
//      are all already taught and are NOT re-listed in newWords here.
//
// 8 new words (مَاشِيَة، ذَادَ، أَمْكَنَ، أَيْقَنَ، ظِلّ، أَنْزَلَ، تَوَلَّى، آن). No
// page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch15',
  title: { ar: 'فِي مَدْيَنَ', en: 'In Madyan' },
  newWords: ['مَاشِيَة', 'ذَادَ', 'أَمْكَنَ', 'أَيْقَنَ', 'ظِلّ', 'أَنْزَلَ', 'تَوَلَّى', 'آن'],
  lemmas: {
    مَاشِيَة: { gloss: 'livestock' },
    ذَادَ: { gloss: 'to hold back, drive away' },
    أَمْكَنَ: { gloss: 'to be possible (for someone)' },
    أَيْقَنَ: { gloss: 'to be certain' },
    ظِلّ: { gloss: 'shade' },
    أَنْزَلَ: { gloss: 'to send down' },
    تَوَلَّى: { gloss: 'to turn away, withdraw' },
    آن: { gloss: 'now (الآن)' },
  },
  paragraphs: [
    {
      en: 'Mūsā arrived at Madyan, knowing no one and known by no one. Who would shelter him at night? And where would he spend the night? Mūsā was bewildered, but he was certain that Allah would not let him go to waste.',
      sentences: [
        {
          id: 'qs-v6-c15-001',
          ar: 'وَصَلَ مُوسَى إِلَى مَدْيَنَ، لا يَعْرِفُ أَحَداً وَلا يَعْرِفُهُ أَحَدٌ.',
          en: 'Mūsā arrived at Madyan, knowing no one and known by no one.',
          tokens: [
            { surface: 'وَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to arrive; arrived' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'مَدْيَنَ', lemma: 'مَدْيَن', pos: 'proper', features: 'gen', gloss: 'Madyan' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'knowing' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْرِفُهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'known by; knows him' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v6-c15-002',
          ar: 'فَمَنْ يَأْوِي إِلَيْهِ فِي اللَّيْلِ؟ وَأَيْنَ يَبِيتُ؟',
          en: 'Who would shelter him at night? And where would he spend the night?',
          tokens: [
            { surface: 'فَمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'so who' },
            { surface: 'يَأْوِي', lemma: 'أَوَى', pos: 'verb', features: 'impf.3ms', gloss: 'to shelter; shelters' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', gloss: 'the night' },
            { surface: 'وَأَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'يَبِيتُ', lemma: 'بَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'spends the night' },
          ],
        },
        {
          id: 'qs-v6-c15-003',
          ar: 'تَحَيَّرَ مُوسَى وَلَكِنَّهُ أَيْقَنَ أَنَّ اللَّهَ لا يُضِيعُهُ.',
          en: 'Mūsā was bewildered, but he was certain that Allah would not let him go to waste.',
          tokens: [
            { surface: 'تَحَيَّرَ', lemma: 'تَحَيَّرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be bewildered; was bewildered' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'أَيْقَنَ', lemma: 'أَيْقَنَ', pos: 'verb', features: 'perf.3ms', root: 'ي ق ن', gloss: 'to be certain; was certain' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُضِيعُهُ', lemma: 'أَضَاعَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to waste, lose; would let him go to waste' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَلَ مُوسَى إِلَى مَدْيَنَ؟',
          options: ['لَا يَعْرِفُ أَحَداً وَلَا يَعْرِفُهُ أَحَدٌ', 'وَمَعَهُ أَصْدِقَاءُ كَثِيرُونَ', 'وَهُوَ يَعْرِفُ كُلَّ أَهْلِ الْبَلَدِ'],
          answer: 0,
          qEn: 'How did Mūsā arrive at Madyan?',
          optionsEn: ['Knowing no one and known by no one', 'With many friends', 'Knowing everyone in the town'],
        },
      ],
    },
    {
      en: "There was a well there, at which people watered their sheep and livestock. He found two women holding back their sheep, waiting for the people to finish watering so they could water theirs. Mūsā saw this, and in his heart was a noble soul's tenderness and a merciful father's compassion.",
      sentences: [
        {
          id: 'qs-v6-c15-004',
          ar: 'وَكَانَ هُنَالِكَ بِئْرٌ يَسْقِي عَلَيْهَا النَّاسُ غَنَمَهُمْ وَمَاشِيَتَهُمْ.',
          en: 'There was a well there, at which people watered their sheep and livestock.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and there was' },
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'بِئْرٌ', lemma: 'بِئْر', pos: 'noun', features: 'indef.nom', gloss: 'a well' },
            { surface: 'يَسْقِي', lemma: 'سَقَى', pos: 'verb', features: 'impf.3ms', gloss: 'to water; watered' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'at it' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'people' },
            { surface: 'غَنَمَهُمْ', lemma: 'غَنَم', pos: 'noun', features: 'acc+3mp', gloss: 'their sheep' },
            { surface: 'وَمَاشِيَتَهُمْ', lemma: 'مَاشِيَة', pos: 'noun', features: 'conj+acc+3mp', root: 'م ش ي', gloss: 'and their livestock' },
          ],
        },
        {
          id: 'qs-v6-c15-005',
          ar: 'وَوَجَدَ اِمْرَأَتَيْنِ تَذُودَانِ غَنَمَهُمَا وَتَنْتَظِرَانَ أَنْ يَسْقِيَ النَّاسُ فَتَسْقِيَا.',
          en: 'He found two women holding back their sheep, waiting for the people to finish watering so they could water theirs.',
          tokens: [
            { surface: 'وَوَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to find; and found' },
            { surface: 'اِمْرَأَتَيْنِ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'indef.acc.du', gloss: 'two women' },
            { surface: 'تَذُودَانِ', lemma: 'ذَادَ', pos: 'verb', features: 'impf.3fd', root: 'ذ و د', gloss: 'to hold back; holding back' },
            { surface: 'غَنَمَهُمَا', lemma: 'غَنَم', pos: 'noun', features: 'acc+3fd', gloss: 'their [two] sheep' },
            { surface: 'وَتَنْتَظِرَانَ', lemma: 'اِنْتَظَرَ', pos: 'verb', features: 'conj+impf.3fd', gloss: 'to wait; and waiting' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'for' },
            { surface: 'يَسْقِيَ', lemma: 'سَقَى', pos: 'verb', features: 'subj.3ms', gloss: 'to finish watering' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'فَتَسْقِيَا', lemma: 'سَقَى', pos: 'verb', features: 'conj+subj.3fd', gloss: 'so they could water' },
          ],
        },
        {
          id: 'qs-v6-c15-006',
          ar: 'رَأَى مُوسَى ذَلِكَ وَفِي قَلْبِهِ حَنَانُ الْكَرِيمِ وَشَفَقَةُ الْأَبِ الرَّحِيمِ.',
          en: "Mūsā saw this, and in his heart was a noble soul's tenderness and a merciful father's compassion.",
          tokens: [
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', root: 'ر أ ي', gloss: 'to see; saw' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'this' },
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'قَلْبِهِ', lemma: 'قَلْب', pos: 'noun', features: 'gen+3ms', gloss: 'his heart' },
            { surface: 'حَنَانُ', lemma: 'حَنَان', pos: 'noun', features: 'nom.constr', gloss: 'the tenderness of' },
            { surface: 'الْكَرِيمِ', lemma: 'كَرِيم', pos: 'noun', features: 'def.gen', gloss: 'the noble one' },
            { surface: 'وَشَفَقَةُ', lemma: 'شَفَقَة', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the compassion of' },
            { surface: 'الْأَبِ', lemma: 'أَب', pos: 'noun', features: 'def.gen', gloss: 'the father' },
            { surface: 'الرَّحِيمِ', lemma: 'رَحِيم', pos: 'adj', features: 'def.gen', gloss: 'the merciful' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا وَجَدَ مُوسَى عِنْدَ الْبِئْرِ؟',
          options: ['اِمْرَأَتَيْنِ تَنْتَظِرَانِ لِتَسْقِيَا غَنَمَهُمَا بَعْدَ النَّاسِ', 'رِجَالاً يَتَقَاتَلُونَ', 'بِئْراً جَافَّةً لَا مَاءَ فِيهَا'],
          answer: 0,
          qEn: 'What did Mūsā find at the well?',
          optionsEn: ['Two women waiting to water their sheep after the people', 'Men fighting', 'A dry well with no water'],
        },
      ],
    },
    {
      lines: true,
      en: '"So he said: Why don\'t you two water your flock?" "They said: We cannot water our flock until the people finish, because they are strong and we are weak, and because they are men and we are women." And as if they knew Mūsā would ask them why one of the men of their household didn\'t water for them, they spoke first and said, "And our father is a very old man."',
      sentences: [
        {
          id: 'qs-v6-c15-007',
          ar: 'فَقَالَ: لِمَاذَا لا تَسْقِيَانِ؟',
          en: "So he said: Why don't you two water your flock?",
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so he said' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَسْقِيَانِ', lemma: 'سَقَى', pos: 'verb', features: 'impf.2fd', gloss: "don't you two water" },
          ],
        },
        {
          id: 'qs-v6-c15-008',
          ar: 'قَالَتَا: لا يُمْكِنُ لَنَا أَنْ نَسْقِيَ غَنَمَنَا حَتَّى يَسْقِيَ النَّاسُ، لِأَنَّهُمْ أَقْوِيَاءُ، وَنَحْنُ ضُعَفَاءُ، وَلِأَنَّهُمْ رِجَالٌ وَنَحْنُ إِنَاثٌ.',
          en: 'They said: We cannot water our flock until the people finish, because they are strong and we are weak, and because they are men and we are women.',
          tokens: [
            { surface: 'قَالَتَا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fd', root: 'ق و ل', gloss: 'to say; they two said' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُمْكِنُ', lemma: 'أَمْكَنَ', pos: 'verb', features: 'impf.3ms', root: 'م ك ن', gloss: 'to be possible; is possible' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'نَسْقِيَ', lemma: 'سَقَى', pos: 'verb', features: 'subj.1p', gloss: 'we water' },
            { surface: 'غَنَمَنَا', lemma: 'غَنَم', pos: 'noun', features: 'acc+1p', gloss: 'our sheep' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'يَسْقِيَ', lemma: 'سَقَى', pos: 'verb', features: 'subj.3ms', gloss: 'finishes watering' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'لِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3mp', gloss: 'because they' },
            { surface: 'أَقْوِيَاءُ', lemma: 'قَوِيّ', pos: 'adj', features: 'indef.nom.pl', gloss: 'strong' },
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'conj+1p', gloss: 'and we' },
            { surface: 'ضُعَفَاءُ', lemma: 'ضَعِيف', pos: 'adj', features: 'indef.nom.pl', gloss: 'weak' },
            { surface: 'وَلِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'and because they' },
            { surface: 'رِجَالٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom.pl', gloss: 'men' },
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'conj+1p', gloss: 'and we' },
            { surface: 'إِنَاثٌ', lemma: 'أُنْثَى', pos: 'noun', features: 'indef.nom.pl', gloss: 'women' },
          ],
        },
        {
          id: 'qs-v6-c15-009',
          ar: 'وَكَأَنَّمَا عَرَفَتَا أَنَّ مُوسَى سَيَسْأَلُهُمَا: فَلِمَاذَا لا يَسْقِي أَحَدٌ مِنْ رِجَالِ بَيْتِكُنَّ؟',
          en: "And as if they knew Mūsā would ask them: Then why doesn't one of the men of your household water for you?",
          tokens: [
            { surface: 'وَكَأَنَّمَا', lemma: 'كَأَنَّ', pos: 'part', features: 'conj+part', gloss: 'and as if' },
            { surface: 'عَرَفَتَا', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3fd', gloss: 'to know; they two knew' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'سَيَسْأَلُهُمَا', lemma: 'سَأَلَ', pos: 'verb', features: 'fut+impf.3ms+3fd', gloss: 'to ask; would ask them two' },
            { surface: 'فَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'so why' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْقِي', lemma: 'سَقَى', pos: 'verb', features: 'impf.3ms', gloss: 'waters' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'one' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'رِجَالِ', lemma: 'رَجُل', pos: 'noun', features: 'constr.gen.pl', gloss: 'the men of' },
            { surface: 'بَيْتِكُنَّ', lemma: 'بَيْت', pos: 'noun', features: 'gen+2fp', gloss: 'your household' },
          ],
        },
        {
          id: 'qs-v6-c15-010',
          ar: 'فَسَبَقَتَا وَقَالَتَا: ﴿وَأَبُونَا شَيْخٌ كَبِيرٌ﴾.',
          en: 'So they spoke first and said, "And our father is a very old man."',
          tokens: [
            { surface: 'فَسَبَقَتَا', lemma: 'سَبَقَ', pos: 'verb', features: 'conj+perf.3fd', gloss: 'to precede; so they two spoke first' },
            { surface: 'وَقَالَتَا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3fd', root: 'ق و ل', gloss: 'and said' },
            { surface: 'وَأَبُونَا', lemma: 'أَب', pos: 'noun', features: 'conj+nom+1p', gloss: 'and our father' },
            { surface: 'شَيْخٌ', lemma: 'شَيْخ', pos: 'noun', features: 'indef.nom', gloss: 'an old man' },
            { surface: 'كَبِيرٌ', lemma: 'كَبِير', pos: 'adj', features: 'indef.nom', gloss: 'very old' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَتِ الْمَرْأَتَانِ تَنْتَظِرَانِ عِنْدَ الْبِئْرِ؟',
          options: ['لِأَنَّهُمَا ضَعِيفَتَانِ وَلَا تَسْتَطِيعَانِ أَنْ تَسْقِيَا قَبْلَ الرِّجَالِ الْأَقْوِيَاءِ', 'لِأَنَّهُمَا كَانَتَا تَنْتَظِرَانِ أَبَاهُمَا', 'لِأَنَّ الْبِئْرَ كَانَتْ مُغْلَقَةً'],
          answer: 0,
          qEn: 'Why were the two women waiting at the well?',
          optionsEn: ['Because they were weak and could not water before the strong men', 'Because they were waiting for their father', 'Because the well was closed'],
        },
      ],
    },
    {
      en: "A noble soul's tenderness stirred in Mūsā, and he watered for them, and they left. And where would Mūsā go now?! And where would he take shelter at night, and where would he spend the night?! He knew no one, and no one knew him! \"Then he withdrew to the shade and said, 'My Lord, indeed I am in need of whatever good You send down to me.'\"",
      sentences: [
        {
          id: 'qs-v6-c15-011',
          ar: 'وَهَاجَ فِي مُوسَى حَنَانُ الْكَرِيمِ وَسَقَى لَهُمَا وَذَهَبَتَا.',
          en: "A noble soul's tenderness stirred in Mūsā, and he watered for them, and they left.",
          tokens: [
            { surface: 'وَهَاجَ', lemma: 'هَاجَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to stir, surge; and stirred' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'حَنَانُ', lemma: 'حَنَان', pos: 'noun', features: 'nom.constr', gloss: 'the tenderness of' },
            { surface: 'الْكَرِيمِ', lemma: 'كَرِيم', pos: 'noun', features: 'def.gen', gloss: 'the noble one' },
            { surface: 'وَسَقَى', lemma: 'سَقَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to water; and watered' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fd', gloss: 'for them two' },
            { surface: 'وَذَهَبَتَا', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3fd', gloss: 'to go; and they two left' },
          ],
        },
        {
          id: 'qs-v6-c15-012',
          ar: 'وَأَيْنَ يَذْهَبُ مُوسَى الْآنَ؟!',
          en: 'And where would Mūsā go now?!',
          tokens: [
            { surface: 'وَأَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'يَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'would go' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'الْآنَ', lemma: 'آن', pos: 'adv', features: 'def.acc', root: 'أ و ن', gloss: 'now' },
          ],
        },
        {
          id: 'qs-v6-c15-013',
          ar: 'وَإِلَى أَيْنَ يَأْوِي فِي اللَّيْلِ وَأَيْنَ يَبِيتُ؟! إِنَّهُ لا يَعْرِفُ أَحَداً وَلا يَعْرِفُهُ أَحَدٌ!',
          en: 'And where would he take shelter at night, and where would he spend the night?! He knew no one, and no one knew him!',
          tokens: [
            { surface: 'وَإِلَى', lemma: 'إِلَى', pos: 'prep', features: 'conj+prep', gloss: 'and to' },
            { surface: 'أَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'adv', gloss: 'where' },
            { surface: 'يَأْوِي', lemma: 'أَوَى', pos: 'verb', features: 'impf.3ms', gloss: 'takes shelter' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', gloss: 'the night' },
            { surface: 'وَأَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'يَبِيتُ', lemma: 'بَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'spends the night' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'knew' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْرِفُهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'knew him' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v6-c15-014',
          ar: 'ثُمَّ تَوَلَّى إِلَى الظِّلِّ فَقَالَ رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ﴾.',
          en: 'Then he withdrew to the shade and said, "My Lord, indeed I am in need of whatever good You send down to me."',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'تَوَلَّى', lemma: 'تَوَلَّى', pos: 'verb', features: 'perf.3ms', root: 'و ل ي', gloss: 'to turn away; withdrew' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الظِّلِّ', lemma: 'ظِلّ', pos: 'noun', features: 'def.gen', root: 'ظ ل ل', gloss: 'the shade' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'لِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'for whatever' },
            { surface: 'أَنزَلْتَ', lemma: 'أَنْزَلَ', pos: 'verb', features: 'perf.2ms', root: 'ن ز ل', gloss: 'to send down; You send down' },
            { surface: 'إِلَيَّ', lemma: 'إِلَى', pos: 'prep', features: 'prep+1s', gloss: 'to me' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'خَيْرٍ', lemma: 'خَيْر', pos: 'noun', features: 'indef.gen', gloss: 'good' },
            { surface: 'فَقِيرٌ', lemma: 'فَقِير', pos: 'noun', features: 'indef.nom', gloss: 'in need of' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ مُوسَى بَعْدَ أَنْ سَقَى لِلْمَرْأَتَيْنِ وَتَوَلَّى إِلَى الظِّلِّ؟',
          options: ['رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ', 'رَبِّ اِرْزُقْنِي مُلْكاً عَظِيماً', 'رَبِّ أَرِنِي فِرْعَوْنَ مَهْزُوماً'],
          answer: 0,
          qEn: 'What did Mūsā say after watering for the two women and withdrawing to the shade?',
          optionsEn: ['My Lord, indeed I am in need of whatever good You send down to me', 'My Lord, grant me a great kingdom', 'My Lord, show me Pharaoh defeated'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَتَا: لا يُمْكِنُ لَنَا أَنْ نَسْقِيَ غَنَمَنَا',
        post: 'يَسْقِيَ النَّاسُ.',
        en: 'They said: We cannot water our flock until the people finish.',
        options: ['حَتَّى', 'لِأَنَّ', 'إِذَا', 'كَيْ'],
        answer: 0,
        rationales: [
          'حَتَّى -- "until," matching the taught pattern of waiting for a condition to be met.',
          'لِأَنَّ -- "because," wrong meaning; this is not giving a reason but a time limit.',
          'إِذَا -- "if/when," wrong; too weak for the sense of waiting until a point is reached.',
          'كَيْ -- "so that," wrong meaning; this expresses purpose, not a waiting-until condition.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنِّي لِمَا',
        post: 'إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ.',
        en: 'Indeed I am in need of whatever good You send down to me.',
        options: ['أَنزَلْتَ', 'تُنْزِلُ', 'أُنْزِلُ', 'نَزَلَ'],
        answer: 0,
        rationales: [
          '2nd masculine singular perfect -- addressing Allah directly ("You have sent down"), matching the taught pattern.',
          'Imperfect -- wrong tense for this prayer, which refers to what Allah has already granted.',
          '1st singular -- wrong person; Mūsā is addressing Allah, not speaking of himself sending something down.',
          '3rd masculine singular, intransitive -- wrong verb (نَزَلَ "to descend" vs. أَنْزَلَ "to send down") and wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَعْرِفُ الرَّجُلُ أَحَداً هُنَا',
        pre: '',
        post: 'أَحَداً هُنَا',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['تَعْرِفُونَ', 'يَعْرِفُ', 'تَعْرِفُ', 'نَعْرِفُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular / 3rd feminine singular -- wrong number.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَعْرِفُ الرَّجُلُ أَحَداً هُنَا',
        pre: '',
        post: 'أَحَداً هُنَا',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَعْرِفُ', 'يَعْرِفُ', 'أَعْرِفُ', 'يَعْرِفُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 9 -- مَنْ يُرْضِعُ
// الطِّفْلَ؟؟. Printed pages 123 (heading, partway down, right after ch8's
// closing Qur'an citation 28:8) - 124 - 125 (top only), ending right
// before ch10's heading «فِي حِجْرِ أُمِّهِ» which opens partway down page
// 125. Transcribed by hand from the scan (vision OCR, 200dpi render)
// against ../CHAPTER-FORMAT.md. The printed title box itself carries a
// double question mark («؟؟»), kept as `؟` in title.ar per the reader's
// plain-text title field (the doubling is a print flourish, not a second
// distinct mark to reproduce).
//
// The whole palace dotes on the beautiful new foundling -- until every
// wet-nurse in turn fails: the baby cries and refuses every one of them.
// Nadwi closes the mystery on a bare narrative fact (Allah has forbidden
// him the wet-nurses) and then dramatizes it as overheard servants'
// gossip, foreshadowing ch10 where Mūsā's own sister is the one who
// "just happens" to know a woman he'll nurse from.
//
// Grammar / lexical notes:
//   -- قَبَّلَ (qs-v6-c09-002/004) reuses the already-taught lemma ("to
//      kiss"); يُقَبِّلُهُ throughout keeps that established form II
//      pattern.
//   -- ثَالِثَةً (qs-v6-c09-007) reuses the already-taught ordinal lemma
//      ثَالِث; رَابِعَة and خَامِسَة are newly taught in the same elliptical
//      list (each standing for a further مُرْضِعاً, "[a] third/fourth/
//      fifth [wet-nurse]").
//   -- عَجَباً (qs-v6-c09-008) is an exclamatory accusative ("how
//      strange!"), tagged as its own interjection-like noun lemma rather
//      than folded into an existing entry.
//   -- Shared lexicon check (cross-checked against known_lemmas.json,
//      volumes 1-3 + this volume's chapters so far): كَانَ, طِفْل
//      (qasas-v1/ch4), جَدِيد, جَمِيل, قَصْر (qasas-v2/ch7), لَهْو
//      (qasas-v6/ch12), كُلّ (qasas-v1/ch10), أَخَذَ (qasas-v1/ch4), قَبَّلَ
//      (qasas-v3/ch7), أَحَبَّ, لِأَنَّ, مَلِكَة, حُبّ, عَظِيم (qasas-v2/ch9),
//      كَيْفَ, لَا, سَيِّدَة (qasas-v6/ch16), خَادِم (qasas-v6/ch1), طَلَبَ,
//      أَرْضَعَ (qasas-v6/ch7), جَاءَ, لَكِنَّ, بَكَى, أَبَى (qasas-v2/ch8), آخَر,
//      حَضَرَ (qasas-v2/ch4), لِمَاذَا, شَيْء (qasas-v1/ch3), اِجْتَهَدَ
//      (qasas-v2/ch22), بَشَّرَ (qasas-v2/ch4), نَالَ (qasas-v3/ch12), اللَّه,
//      أَصْبَحَ (qasas-v6/ch12), حَدِيث (qasas-v2/ch25), شُغْل
//      (qasas-v3/ch18), هَلْ, رَأَى (qasas-v1/ch2), يَا, أُخْت, نَعَمْ, قَدْ,
//      لَيْسَ, إِنَّ, إِذَا, مِسْكِين (qasas-v3/ch14), مَاتَ, مَضَى
//      (qasas-v3/ch7), يَوْم, لَمْ
//      are all already taught and are NOT re-listed in newWords here.
//
// 10 new words (لُعْبَة، دَار، مَدَحَ، مُرْضِع، رَابِع، خَامِس، عَجَباً،
// اِرْتَضَعَ، جَائِزَة، حَرَّمَ). No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch9',
  title: { ar: 'مَنْ يُرْضِعُ الطِّفْلَ؟', en: 'Who Will Nurse the Child?' },
  newWords: ['لُعْبَة', 'دَار', 'مَدَحَ', 'مُرْضِع', 'رَابِع', 'خَامِس', 'عَجَباً', 'اِرْتَضَعَ', 'جَائِزَة', 'حَرَّمَ'],
  lemmas: {
    لُعْبَة: { gloss: 'toy, plaything' },
    دَار: { gloss: 'house, home, abode' },
    مَدَحَ: { gloss: 'to praise' },
    مُرْضِع: { gloss: 'wet-nurse' },
    رَابِع: { gloss: 'fourth' },
    خَامِس: { gloss: 'fifth' },
    عَجَباً: { gloss: 'how strange! amazing!' },
    اِرْتَضَعَ: { gloss: 'to nurse, suckle' },
    جَائِزَة: { gloss: 'prize, reward' },
    حَرَّمَ: { gloss: 'to forbid, make unlawful' },
  },
  paragraphs: [
    {
      en: "The new child, the beautiful child, was the toy of the palace and the delight of the house. Everyone took him up and kissed him, and everyone loved him and praised him, because the queen loved him with a great love -- how could the ladies of the palace not love him, and how could the palace servants not love him? Everyone took him up and kissed him, because the child was beautiful.",
      sentences: [
        {
          id: 'qs-v6-c09-001',
          ar: 'وَكَانَ الطِّفْلُ الْجَدِيدُ وَكَانَ الطِّفْلُ الْجَمِيلُ لُعْبَةَ الْقَصْرِ وَلَهْوَ الدَّارِ.',
          en: 'The new child, the beautiful child, was the toy of the palace and the delight of the house.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الطِّفْلُ', lemma: 'طِفْل', pos: 'noun', features: 'def.nom', gloss: 'the child' },
            { surface: 'الْجَدِيدُ', lemma: 'جَدِيد', pos: 'adj', features: 'def.nom', gloss: 'the new' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'الطِّفْلُ', lemma: 'طِفْل', pos: 'noun', features: 'def.nom', gloss: 'the child' },
            { surface: 'الْجَمِيلُ', lemma: 'جَمِيل', pos: 'adj', features: 'def.nom', gloss: 'the beautiful' },
            { surface: 'لُعْبَةَ', lemma: 'لُعْبَة', pos: 'noun', features: 'acc.constr', root: 'ل ع ب', gloss: 'the toy of' },
            { surface: 'الْقَصْرِ', lemma: 'قَصْر', pos: 'noun', features: 'def.gen', gloss: 'the palace' },
            { surface: 'وَلَهْوَ', lemma: 'لَهْو', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the delight of' },
            { surface: 'الدَّارِ', lemma: 'دَار', pos: 'noun', features: 'def.gen', root: 'د و ر', gloss: 'the house' },
          ],
        },
        {
          id: 'qs-v6-c09-002',
          ar: 'كُلٌّ يَأْخُذُهُ وَيُقَبِّلُهُ، وَكُلٌّ يُحِبُّهُ وَيَمْدَحُهُ، لِأَنَّ الْمَلِكَةَ تُحِبُّهُ حُبّاً عَظِيماً.',
          en: 'Everyone took him up and kissed him, and everyone loved him and praised him, because the queen loved him with a great love.',
          tokens: [
            { surface: 'كُلٌّ', lemma: 'كُلّ', pos: 'noun', features: 'indef.nom', gloss: 'everyone' },
            { surface: 'يَأْخُذُهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to take; takes him up' },
            { surface: 'وَيُقَبِّلُهُ', lemma: 'قَبَّلَ', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'to kiss; and kisses him' },
            { surface: 'وَكُلٌّ', lemma: 'كُلّ', pos: 'noun', features: 'conj+indef.nom', gloss: 'and everyone' },
            { surface: 'يُحِبُّهُ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to love; loves him' },
            { surface: 'وَيَمْدَحُهُ', lemma: 'مَدَحَ', pos: 'verb', features: 'conj+impf.3ms+3ms', root: 'م د ح', gloss: 'to praise; and praises him' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', gloss: 'because' },
            { surface: 'الْمَلِكَةَ', lemma: 'مَلِكَة', pos: 'noun', features: 'def.acc', gloss: 'the queen' },
            { surface: 'تُحِبُّهُ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3fs+3ms', gloss: 'to love; loves him' },
            { surface: 'حُبّاً', lemma: 'حُبّ', pos: 'noun', features: 'indef.acc', gloss: 'a love' },
            { surface: 'عَظِيماً', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v6-c09-003',
          ar: 'فَكَيْفَ لا تُحِبُّهُ سَيِّدَاتُ الْقَصْرِ وَكَيْفَ لا يُحِبُّهُ خَدَمُ الْقَصْرِ.',
          en: 'How could the ladies of the palace not love him, and how could the palace servants not love him?',
          tokens: [
            { surface: 'فَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'so how' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُحِبُّهُ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3fs+3ms', gloss: 'to love; loves him' },
            { surface: 'سَيِّدَاتُ', lemma: 'سَيِّدَة', pos: 'noun', features: 'def.pl.nom.constr', gloss: 'the ladies of' },
            { surface: 'الْقَصْرِ', lemma: 'قَصْر', pos: 'noun', features: 'def.gen', gloss: 'the palace' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّهُ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to love; loves him' },
            { surface: 'خَدَمُ', lemma: 'خَادِم', pos: 'noun', features: 'constr.nom', gloss: 'the servants of' },
            { surface: 'الْقَصْرِ', lemma: 'قَصْر', pos: 'noun', features: 'def.gen', gloss: 'the palace' },
          ],
        },
        {
          id: 'qs-v6-c09-004',
          ar: 'وَكُلٌّ يَأْخُذُهُ وَيُقَبِّلُهُ، لِأَنَّ الطِّفْلَ جَمِيلٌ.',
          en: 'Everyone took him up and kissed him, because the child was beautiful.',
          tokens: [
            { surface: 'وَكُلٌّ', lemma: 'كُلّ', pos: 'noun', features: 'conj+indef.nom', gloss: 'and everyone' },
            { surface: 'يَأْخُذُهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'takes him up' },
            { surface: 'وَيُقَبِّلُهُ', lemma: 'قَبَّلَ', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'and kisses him' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'part', features: 'part', gloss: 'because' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'جَمِيلٌ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.nom', gloss: 'beautiful' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ الْجَمِيعُ يُحِبُّونَ الطِّفْلَ الْجَدِيدَ؟',
          options: ['لِأَنَّهُ جَمِيلٌ وَلِأَنَّ الْمَلِكَةَ تُحِبُّهُ حُبّاً عَظِيماً', 'لِأَنَّهُ اِبْنُ فِرْعَوْنَ', 'لِأَنَّهُ كَانَ يَتَكَلَّمُ مُنْذُ وِلَادَتِهِ'],
          answer: 0,
          qEn: 'Why did everyone love the new child?',
          optionsEn: ["Because he was beautiful and the queen loved him with a great love", "Because he was Pharaoh's son", 'Because he could speak from birth'],
        },
      ],
    },
    {
      en: 'The queen requested a wet-nurse to nurse the child; she came and took the child, but the child cried and refused. The queen requested another wet-nurse; she came and took the child, but the child cried and refused. And a third, and a fourth, and a fifth -- but the child cried and refused.',
      sentences: [
        {
          id: 'qs-v6-c09-005',
          ar: 'وَطَلَبَتِ الْمَلِكَةُ مُرْضِعاً تُرْضِعُ الطِّفْلَ، وَجَاءَتْ وَأَخَذَتِ الطِّفْلَ وَلَكِنَّ الطِّفْلَ يَبْكِي وَيَأْبَى.',
          en: 'The queen requested a wet-nurse to nurse the child; she came and took the child, but the child cried and refused.',
          tokens: [
            { surface: 'وَطَلَبَتِ', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to request; requested' },
            { surface: 'الْمَلِكَةُ', lemma: 'مَلِكَة', pos: 'noun', features: 'def.nom', gloss: 'the queen' },
            { surface: 'مُرْضِعاً', lemma: 'مُرْضِع', pos: 'noun', features: 'indef.acc', root: 'ر ض ع', gloss: 'a wet-nurse' },
            { surface: 'تُرْضِعُ', lemma: 'أَرْضَعَ', pos: 'verb', features: 'impf.3fs', gloss: 'to nurse; nurses' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'وَجَاءَتْ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to come; and came' },
            { surface: 'وَأَخَذَتِ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and took' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'يَبْكِي', lemma: 'بَكَى', pos: 'verb', features: 'impf.3ms', gloss: 'to cry; cried' },
            { surface: 'وَيَأْبَى', lemma: 'أَبَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to refuse; and refused' },
          ],
        },
        {
          id: 'qs-v6-c09-006',
          ar: 'وَطَلَبَتِ الْمَلِكَةُ مُرْضِعاً أُخْرَى، وَحَضَرَتْ وَأَخَذَتِ الطِّفْلَ، وَلَكِنَّ الطِّفْلَ يَبْكِي وَيَأْبَى.',
          en: 'The queen requested another wet-nurse; she came and took the child, but the child cried and refused.',
          tokens: [
            { surface: 'وَطَلَبَتِ', lemma: 'طَلَبَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and requested' },
            { surface: 'الْمَلِكَةُ', lemma: 'مَلِكَة', pos: 'noun', features: 'def.nom', gloss: 'the queen' },
            { surface: 'مُرْضِعاً', lemma: 'مُرْضِع', pos: 'noun', features: 'indef.acc', root: 'ر ض ع', gloss: 'a wet-nurse' },
            { surface: 'أُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'indef.acc.f', gloss: 'another' },
            { surface: 'وَحَضَرَتْ', lemma: 'حَضَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to come, be present; and came' },
            { surface: 'وَأَخَذَتِ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and took' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'يَبْكِي', lemma: 'بَكَى', pos: 'verb', features: 'impf.3ms', gloss: 'cried' },
            { surface: 'وَيَأْبَى', lemma: 'أَبَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and refused' },
          ],
        },
        {
          id: 'qs-v6-c09-007',
          ar: 'وَثَالِثَةً وَرَابِعَةً وَخَامِسَةً وَلَكِنَّ الطِّفْلَ يَبْكِي وَيَأْبَى.',
          en: 'And a third, and a fourth, and a fifth -- but the child cried and refused.',
          tokens: [
            { surface: 'وَثَالِثَةً', lemma: 'ثَالِث', pos: 'adj', features: 'conj+indef.acc.f', gloss: 'and a third [wet-nurse]' },
            { surface: 'وَرَابِعَةً', lemma: 'رَابِع', pos: 'adj', features: 'conj+indef.acc.f', root: 'ر ب ع', gloss: 'and a fourth' },
            { surface: 'وَخَامِسَةً', lemma: 'خَامِس', pos: 'adj', features: 'conj+indef.acc.f', root: 'خ م س', gloss: 'and a fifth' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'يَبْكِي', lemma: 'بَكَى', pos: 'verb', features: 'impf.3ms', gloss: 'cried' },
            { surface: 'وَيَأْبَى', lemma: 'أَبَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and refused' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ مُرْضِعَةً حَاوَلَتْ أَنْ تُرْضِعَ الطِّفْلَ فِي هَذِهِ الْفِقْرَةِ؟',
          options: ['خَمْسَ مُرْضِعَاتٍ', 'مُرْضِعَةً وَاحِدَةً', 'عَشْرَ مُرْضِعَاتٍ'],
          answer: 0,
          qEn: 'How many wet-nurses tried to nurse the child in this passage?',
          optionsEn: ['Five wet-nurses', 'One wet-nurse', 'Ten wet-nurses'],
        },
      ],
    },
    {
      en: 'How strange! Why won\'t the child nurse -- for what reason does he cry? The wet-nurses strove hard to nurse the child so as to bring the queen good news and gain a reward from her, but Allah had forbidden the wet-nurses to him. The child became the talk of the palace and the preoccupation of the house.',
      sentences: [
        {
          id: 'qs-v6-c09-008',
          ar: 'عَجَباً! لِمَاذَا لا يَرْتَضِعُ الطِّفْلُ، لِأَيِّ شَيْءٍ يَبْكِي؟',
          en: "How strange! Why won't the child nurse -- for what reason does he cry?",
          tokens: [
            { surface: 'عَجَباً', lemma: 'عَجَباً', pos: 'noun', features: 'indef.acc', root: 'ع ج ب', gloss: 'how strange!' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرْتَضِعُ', lemma: 'اِرْتَضَعَ', pos: 'verb', features: 'impf.3ms', root: 'ر ض ع', gloss: 'to nurse, suckle' },
            { surface: 'الطِّفْلُ', lemma: 'طِفْل', pos: 'noun', features: 'def.nom', gloss: 'the child' },
            { surface: 'لِأَيِّ', lemma: 'أَيّ', pos: 'noun', features: 'prep+constr', gloss: 'for what' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'reason, thing' },
            { surface: 'يَبْكِي', lemma: 'بَكَى', pos: 'verb', features: 'impf.3ms', gloss: 'does he cry' },
          ],
        },
        {
          id: 'qs-v6-c09-009',
          ar: 'اِجْتَهَدَتِ الْمَرَاضِعُ أَنْ تُرْضِعَ الطِّفْلَ لِتُبَشِّرَ الْمَلِكَةَ وَتَنَالَ مِنْهَا جَائِزَةً، وَلَكِنَّ اللَّهَ حَرَّمَ عَلَيْهِ الْمَرَاضِعَ.',
          en: 'The wet-nurses strove hard to nurse the child so as to bring the queen good news and gain a reward from her, but Allah had forbidden the wet-nurses to him.',
          tokens: [
            { surface: 'اِجْتَهَدَتِ', lemma: 'اِجْتَهَدَ', pos: 'verb', features: 'perf.3fs', gloss: 'to strive; strove hard' },
            { surface: 'الْمَرَاضِعُ', lemma: 'مُرْضِع', pos: 'noun', features: 'def.pl.nom', root: 'ر ض ع', gloss: 'the wet-nurses' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'تُرْضِعَ', lemma: 'أَرْضَعَ', pos: 'verb', features: 'subj.3fs', gloss: 'nurse' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'لِتُبَشِّرَ', lemma: 'بَشَّرَ', pos: 'verb', features: 'prep+subj.3fs', gloss: 'to give glad tidings; so as to bring good news to' },
            { surface: 'الْمَلِكَةَ', lemma: 'مَلِكَة', pos: 'noun', features: 'def.acc', gloss: 'the queen' },
            { surface: 'وَتَنَالَ', lemma: 'نَالَ', pos: 'verb', features: 'conj+subj.3fs', gloss: 'to attain; and attain' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from her' },
            { surface: 'جَائِزَةً', lemma: 'جَائِزَة', pos: 'noun', features: 'indef.acc', root: 'ج و ز', gloss: 'a reward' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'حَرَّمَ', lemma: 'حَرَّمَ', pos: 'verb', features: 'perf.3ms', root: 'ح ر م', gloss: 'to forbid; had forbidden' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الْمَرَاضِعَ', lemma: 'مُرْضِع', pos: 'noun', features: 'def.acc.pl', root: 'ر ض ع', gloss: 'the wet-nurses' },
          ],
        },
        {
          id: 'qs-v6-c09-010',
          ar: 'وَأَصْبَحَ الطِّفْلُ حَدِيثَ الْقَصْرِ وَشُغْلَ الدَّارِ.',
          en: 'The child became the talk of the palace and the preoccupation of the house.',
          tokens: [
            { surface: 'وَأَصْبَحَ', lemma: 'أَصْبَحَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become; and became' },
            { surface: 'الطِّفْلُ', lemma: 'طِفْل', pos: 'noun', features: 'def.nom', gloss: 'the child' },
            { surface: 'حَدِيثَ', lemma: 'حَدِيث', pos: 'noun', features: 'acc.constr', gloss: 'the talk of' },
            { surface: 'الْقَصْرِ', lemma: 'قَصْر', pos: 'noun', features: 'def.gen', gloss: 'the palace' },
            { surface: 'وَشُغْلَ', lemma: 'شُغْل', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the preoccupation of' },
            { surface: 'الدَّارِ', lemma: 'دَار', pos: 'noun', features: 'def.gen', root: 'د و ر', gloss: 'the house' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا حَرَّمَ اللَّهُ عَلَى مُوسَى الْمَرَاضِعَ؟',
          options: ['لِيَرُدَّهُ اللَّهُ إِلَى أُمِّهِ الْحَقِيقِيَّةِ', 'لِأَنَّهُ كَانَ مَرِيضاً', 'لِأَنَّ الْمَلِكَةَ لَمْ تُرِدْ ذَلِكَ'],
          answer: 0,
          qEn: 'Why did Allah forbid Mūsā the wet-nurses?',
          optionsEn: ['So that Allah would return him to his real mother', 'Because he was sick', "Because the queen didn't want it"],
        },
      ],
    },
    {
      en: '"Have you seen, my sister, the new child?!" "Yes, I have seen him -- a very beautiful child. But he is a strange child, not like other children! He does not nurse. Whenever a wet-nurse takes him he cries and refuses to nurse -- poor thing, how will he live? He will die!" "Yes, days have passed over him and he has not nursed."',
      sentences: [
        {
          id: 'qs-v6-c09-011',
          ar: 'هَلْ رَأَيْتِ يا أُخْتِي الطِّفْلَ الْجَدِيدَ؟!',
          en: 'Have you seen, my sister, the new child?!',
          tokens: [
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: '(question)' },
            { surface: 'رَأَيْتِ', lemma: 'رَأَى', pos: 'verb', features: 'perf.2fs', root: 'ر أ ي', gloss: 'to see; have you (f.) seen' },
            { surface: 'يا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أُخْتِي', lemma: 'أُخْت', pos: 'noun', features: 'nom+1s', gloss: 'my sister' },
            { surface: 'الطِّفْلَ', lemma: 'طِفْل', pos: 'noun', features: 'def.acc', gloss: 'the child' },
            { surface: 'الْجَدِيدَ', lemma: 'جَدِيد', pos: 'adj', features: 'def.acc', gloss: 'the new' },
          ],
        },
        {
          id: 'qs-v6-c09-012',
          ar: 'نَعَمْ قَدْ رَأَيْتُهُ؛ طِفْلٌ جَمِيلٌ جِدّاً.',
          en: 'Yes, I have seen him; a very beautiful child.',
          tokens: [
            { surface: 'نَعَمْ', lemma: 'نَعَمْ', pos: 'part', features: 'part', gloss: 'yes' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'رَأَيْتُهُ', lemma: 'رَأَى', pos: 'verb', features: 'perf.1s+3ms', root: 'ر أ ي', gloss: 'to see; I have seen him' },
            { surface: 'طِفْلٌ', lemma: 'طِفْل', pos: 'noun', features: 'indef.nom', gloss: 'a child' },
            { surface: 'جَمِيلٌ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.nom', gloss: 'beautiful' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v6-c09-013',
          ar: 'وَلَكِنَّهُ طِفْلٌ غَرِيبٌ لَيْسَ كَالْأَطْفَالِ! إِنَّهُ لا يَرْتَضِعُ.',
          en: 'But he is a strange child, not like other children! He does not nurse.',
          tokens: [
            { surface: 'وَلَكِنَّهُ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'but he' },
            { surface: 'طِفْلٌ', lemma: 'طِفْل', pos: 'noun', features: 'indef.nom', gloss: 'a child' },
            { surface: 'غَرِيبٌ', lemma: 'غَرِيب', pos: 'adj', features: 'indef.nom', gloss: 'strange' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'to not be; is not' },
            { surface: 'كَالْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'like the [other] children' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرْتَضِعُ', lemma: 'اِرْتَضَعَ', pos: 'verb', features: 'impf.3ms', root: 'ر ض ع', gloss: 'nurses' },
          ],
        },
        {
          id: 'qs-v6-c09-014',
          ar: 'وَإِذَا أَخَذَتْهُ مُرْضِعٌ يَبْكِي وَيَأْبَى أَنْ يَرْتَضِعَ؛ مِسْكِينْ كَيْفَ يَعِيشُ؟ إِنَّهُ يَمُوتُ.',
          en: 'Whenever a wet-nurse takes him he cries and refuses to nurse -- poor thing, how will he live? He will die!',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and whenever' },
            { surface: 'أَخَذَتْهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'perf.3fs+3ms', gloss: 'takes him' },
            { surface: 'مُرْضِعٌ', lemma: 'مُرْضِع', pos: 'noun', features: 'indef.nom', root: 'ر ض ع', gloss: 'a wet-nurse' },
            { surface: 'يَبْكِي', lemma: 'بَكَى', pos: 'verb', features: 'impf.3ms', gloss: 'he cries' },
            { surface: 'وَيَأْبَى', lemma: 'أَبَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and refuses' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَرْتَضِعَ', lemma: 'اِرْتَضَعَ', pos: 'verb', features: 'subj.3ms', root: 'ر ض ع', gloss: 'nurse' },
            { surface: 'مِسْكِينْ', lemma: 'مِسْكِين', pos: 'noun', features: 'indef.nom', gloss: 'poor thing' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يَعِيشُ', lemma: 'عَاشَ', pos: 'verb', features: 'impf.3ms', gloss: 'will he live' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'to die; will die' },
          ],
        },
        {
          id: 'qs-v6-c09-015',
          ar: 'نَعَمْ قَدْ مَضَى عَلَيْهِ أَيَّامٌ وَلَمْ يَرْتَضِعْ.',
          en: 'Yes, days have passed over him and he has not nursed.',
          tokens: [
            { surface: 'نَعَمْ', lemma: 'نَعَمْ', pos: 'part', features: 'part', gloss: 'yes' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'مَضَى', lemma: 'مَضَى', pos: 'verb', features: 'perf.3ms', gloss: 'to pass; have passed' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'over him' },
            { surface: 'أَيَّامٌ', lemma: 'يَوْم', pos: 'noun', features: 'indef.nom.pl', gloss: 'days' },
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَرْتَضِعْ', lemma: 'اِرْتَضَعَ', pos: 'verb', features: 'juss.3ms', root: 'ر ض ع', gloss: 'he has nursed' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَتِ الْمَرْأَةُ الطِّفْلَ لِأُخْتِهَا؟',
          options: ['طِفْلٌ غَرِيبٌ لَيْسَ كَالْأَطْفَالِ، لا يَرْتَضِعُ', 'طِفْلٌ عَادِيٌّ كَبَاقِي الْأَطْفَالِ', 'طِفْلٌ مَرِيضٌ جِدّاً'],
          answer: 0,
          qEn: 'How did the woman describe the child to her sister?',
          optionsEn: ['A strange child, not like other children, who does not nurse', 'An ordinary child like any other', 'A very sick child'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ الطِّفْلُ الْجَدِيدُ',
        post: 'الْقَصْرِ وَلَهْوَ الدَّارِ.',
        en: 'The new child was the toy of the palace and the delight of the house.',
        options: ['لُعْبَةَ', 'لُعْبَةٌ', 'لُعْبَةُ', 'لُعْبَةً'],
        answer: 0,
        rationales: [
          'Accusative, construct -- predicate of كَانَ and first term of an إضافة with الْقَصْرِ, matching the taught pattern.',
          'Nominative, indefinite with tanwīn -- wrong case and wrong state; a construct noun cannot take tanwīn.',
          'Nominative, construct -- wrong case; the predicate of كَانَ is accusative.',
          'Accusative with tanwīn -- wrong state; a construct noun cannot take tanwīn.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنَّ اللَّهَ',
        post: 'عَلَيْهِ الْمَرَاضِعَ.',
        en: 'But Allah had forbidden the wet-nurses to him.',
        options: ['حَرَّمَ', 'يُحَرِّمُ', 'حَرَّمَتْ', 'مُحَرَّمٌ'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches the narrative past tense used throughout, and اللَّه as subject.',
          'Imperfect -- wrong tense; the narration is in the perfect throughout this passage.',
          '3rd feminine singular -- wrong gender; اللَّه takes masculine agreement.',
          'Passive participle -- wrong; a finite verb is needed here, not an adjective.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تَأْخُذُ الْمَلِكَةُ الطِّفْلَ',
        pre: '',
        post: 'الطِّفْلَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَأْخُذُونَ', 'تَأْخُذُ', 'يَأْخُذُ', 'نَأْخُذُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd feminine singular -- she, the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'تَأْخُذُ الْمَلِكَةُ الطِّفْلَ',
        pre: '',
        post: 'الطِّفْلَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['آخُذُ', 'تَأْخُذُ', 'يَأْخُذُ', 'نَأْخُذُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd feminine singular -- she, the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

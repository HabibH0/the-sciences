// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ», chapter 40
// -- مَنْزِلَةُ التَّوْحِيدِ فِي دَعْوَتِهِ. Printed page 275 (from its own
// heading box, partway down the page right after ch39's closing Qur'an
// quote, Nisā' 4:171) through the top of page 276, ending right before
// ch41's heading مَشْهَدٌ رَائِعٌ مِنْ مَشَاهِدِ الْقِيَامَةِ partway down that
// same page. Transcribed by hand from the scan (vision OCR, 150dpi render)
// against ../CHAPTER-FORMAT.md. Title cross-checked against the scan's own
// heading box -- matches the given title exactly, no discrepancy.
//
// A very short chapter: one narrating sentence introduces the passage, then
// the whole rest of the chapter is a single Qur'an quotation (Sūrat an-Nisā'
// 4:172-173) that Nadwī presents as the Qur'an's own eloquent statement of
// where monotheism sits in Sayyidnā ʿĪsā's message -- the Messiah himself,
// and even the angels nearest to Allah, would never disdain to be Allah's
// servants; whoever does disdain and is arrogant will be gathered and
// punished, while believers who do good are rewarded in full and increased
// from Allah's bounty.
//
// Grammar / lexical notes:
//   -- The subject of وَقَالَ (qs-v12-c40-001) is not named in this
//      fragment; it continues the implicit topic already running across the
//      chapter boundary from ch39 (القرآن) -- ch39 closes page 275's top
//      half with its own القرآن-subject sentence and Qur'an quote, and ch40
//      opens with the same elided subject before its own Qur'an quote,
//      matching this author's habit of carrying a subject silently across a
//      short heading break (cf. qasas-v9 ch1's own وَقَالَ-headed quote).
//   -- Long printed sentences are split at their natural clause/comma
//      boundary into multiple shorter entries here (house convention, see
//      qasas-v3 ch14/ch22). The Qur'an quotation (Nisā' 4:172-173) is a
//      single continuous printed block with no internal ﴿﴾ marks inside it
//      in the source -- but per house practice (qasas-v9 ch1, its own
//      header note) it is still split at each natural clause/pause boundary
//      into multiple sentence entries, and each entry is independently
//      re-wrapped in its own ﴿ ﴾ pair rather than opening/closing brackets
//      only once across the whole block. No rewording, no shortening --
//      every word of both verses is transcribed, matching the standing
//      instruction that Qur'an quotes in this corpus are tokenized and
//      translated exactly like ordinary prose. Ayah-end number circles
//      (١٧٢), (١٧٣) are typographic verse-end marks, not part of the
//      sentence text, and are dropped from `ar` -- matching how qasas-v3
//      ch14/ch22 already omit them.
//   -- اِسْتَنكَفَ (new, form X, "to disdain, refuse out of pride") and
//      اِسْتَكْبَرَ (new, form X, "to be arrogant") are two distinct new
//      lemmas from two distinct roots (ن ك ف and ك ب ر respectively) even
//      though both appear back-to-back in the same verse -- not variants of
//      one another.
//   -- الْمَسِيحُ (new, "the Messiah") is tagged pos 'proper' with no `def`
//      atom despite carrying الـ, matching the corpus's existing treatment
//      of proper nouns that are grammatically always-definite (اللَّه,
//      الْقُرْآن in qasas-v9 ch1) -- the article is baked into the lemma's
//      reference, not a separable state.
//   -- الْمُقَرَّبُونَ (new lemma مُقَرَّب, "brought near, close to Allah") is
//      tagged pos 'adj' as the participial modifier of الْمَلَائِكَةُ -- a
//      distinct lemma from the verb it derives from (root ق ر ب), per the
//      corpus's participle-as-distinct-lemma convention.
//   -- الْمَلَائِكَةُ reuses the already-taught lemma مَلَك ("angel"),
//      established at qasas-v3 ch12 (مَلَائِكَةً, indef.acc.pl there) -- NOT
//      re-listed here as new.
//   -- طُبِعُوا (qs-v12-c40-002) is passive perfect of the new lemma طَبَعَ
//      ("to imprint, instill innately"), tagged pass+perf.3mp, matching the
//      corpus's established perfect-passive convention.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): قَالَ، فِي، كُلّ، مَنْ،
//      عَرَفَ، التَّوْحِيد، الْأَنْبِيَاء (نَبِيّ)، مَا، عَلَى، مِنْ، اللَّه، لِ،
//      عَبْد، أَنْ، كَانَ، عِبَادَة، جَمِيع، إِلَى، الَّذِي، آمَنَ، عَمِلَ، صَالِح،
//      أَجْر، زَادَ، فَضْل، عَذَاب، أَلِيم، وَجَدَ، دُون، وَلِيّ، لَا، جَمِيل،
//      حَشَرَ، أَمَّا، لَنْ، إِنَّ
//      are all already taught and are NOT re-listed in newWords here.
//
// 17 new words (أُسْلُوب، بَلِيغ، تَذَوَّقَ، مَنْزِلَة، سِيرَة، مُرْسَل، طَبَعَ،
// مَعْرِفَة، خُضُوع، رَهْبَة، اِسْتَنكَفَ، مَسِيح، مُقَرَّب، اِسْتَكْبَرَ، وَفَّى،
// عَذَّبَ، نَصِير) -- vocabulary-dense for its length, since almost the
// whole chapter is a single unbroken Qur'an quotation.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch40',
  title: { ar: 'مَنْزِلَةُ التَّوْحِيدِ فِي دَعْوَتِهِ', en: 'The Place of Monotheism in His Call' },
  newWords: [
    'بَلِيغ', 'تَذَوَّقَ', 'مُرْسَل', 'طَبَعَ', 'مَعْرِفَة', 'خُضُوع',
    'رَهْبَة', 'اِسْتَنكَفَ', 'اِسْتَكْبَرَ',
  ],
  lemmas: {
    أُسْلُوب: { gloss: 'a style, manner' },
    بَلِيغ: { gloss: 'eloquent' },
    تَذَوَّقَ: { gloss: 'to savor, relish' },
    مَنْزِلَة: { gloss: 'rank, standing, place' },
    سِيرَة: { gloss: 'way of life, biography' },
    مُرْسَل: { gloss: 'a messenger (one who is sent)' },
    طَبَعَ: { gloss: 'to imprint, instill innately' },
    مَعْرِفَة: { gloss: 'knowledge' },
    خُضُوع: { gloss: 'submission, humility' },
    رَهْبَة: { gloss: 'awe, dread' },
    اِسْتَنكَفَ: { gloss: 'to disdain, refuse out of pride' },
    مَسِيح: { gloss: 'the Messiah' },
    مُقَرَّب: { gloss: 'brought near, close (to Allah)' },
    اِسْتَكْبَرَ: { gloss: 'to be arrogant' },
    وَفَّى: { gloss: 'to pay in full' },
    عَذَّبَ: { gloss: 'to punish, torment' },
    نَصِير: { gloss: 'a helper' },
  },
  paragraphs: [
    {
      en: "He spoke in a beautiful, eloquent style -- one that anyone who knows the place of monotheism, the way of the prophets and messengers, and what they were instilled with of the knowledge of Allah, submission to Him, and awe of Him, can appreciate: \"The Messiah would never disdain to be a servant of Allah, nor would the angels nearest to Him. Whoever disdains His worship and is arrogant -- He will gather them all to Himself. As for those who believed and did righteous deeds, He will pay them their rewards in full and increase them from His bounty; but as for those who disdained and were arrogant, He will punish them with a painful punishment, and they will not find for themselves, besides Allah, any protector or helper.\"",
      sentences: [
        {
          id: 'qs-v12-c40-001',
          ar: 'وَقَالَ فِي أُسْلُوبٍ جَمِيلٍ بَلِيغٍ يَتَذَوَّقُهُ كُلُّ مَنْ عَرَفَ مَنْزِلَةَ التَّوْحِيدِ وَسِيرَةَ الْأَنْبِيَاءِ وَالْمُرْسَلِينَ،',
          en: 'And it spoke in a beautiful, eloquent style that everyone who knows the place of monotheism and the way of the prophets and messengers can savor,',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and it spoke' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أُسْلُوبٍ', lemma: 'أُسْلُوب', pos: 'noun', features: 'indef.gen', root: 'س ل ب', gloss: 'a style, manner' },
            { surface: 'جَمِيلٍ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.gen', gloss: 'beautiful' },
            { surface: 'بَلِيغٍ', lemma: 'بَلِيغ', pos: 'adj', features: 'indef.gen', root: 'ب ل غ', gloss: 'eloquent' },
            { surface: 'يَتَذَوَّقُهُ', lemma: 'تَذَوَّقَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ذ و ق', gloss: 'to savor, relish; savors it' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom', gloss: 'every, all' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'عَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3ms', gloss: 'to know; knows' },
            { surface: 'مَنْزِلَةَ', lemma: 'مَنْزِلَة', pos: 'noun', features: 'acc.constr', root: 'ن ز ل', gloss: 'the place, standing of' },
            { surface: 'التَّوْحِيدِ', lemma: 'تَوْحِيد', pos: 'noun', features: 'def.gen', gloss: 'monotheism' },
            { surface: 'وَسِيرَةَ', lemma: 'سِيرَة', pos: 'noun', features: 'conj+acc.constr', root: 'س ي ر', gloss: 'and the way of' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the prophets' },
            { surface: 'وَالْمُرْسَلِينَ', lemma: 'مُرْسَل', pos: 'noun', features: 'conj+pl.def.gen', root: 'ر س ل', gloss: 'and the messengers' },
          ],
        },
        {
          id: 'qs-v12-c40-002',
          ar: 'وَمَا طُبِعُوا عَلَيْهِ مِنْ مَعْرِفَةِ اللَّهِ وَالْخُضُوعِ لَهُ،',
          en: 'and what they were instilled with of the knowledge of Allah and submission to Him,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'طُبِعُوا', lemma: 'طَبَعَ', pos: 'verb', features: 'pass+perf.3mp', root: 'ط ب ع', gloss: 'to imprint, instill; they were instilled' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon, with it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'مَعْرِفَةِ', lemma: 'مَعْرِفَة', pos: 'noun', features: 'constr.gen', root: 'ع ر ف', gloss: 'the knowledge of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَالْخُضُوعِ', lemma: 'خُضُوع', pos: 'noun', features: 'conj+def.gen', root: 'خ ض ع', gloss: 'and submission' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to Him' },
          ],
        },
        {
          id: 'qs-v12-c40-003',
          ar: 'وَالرَّهْبَةِ مِنْهُ:',
          en: 'and awe of Him:',
          tokens: [
            { surface: 'وَالرَّهْبَةِ', lemma: 'رَهْبَة', pos: 'noun', features: 'conj+def.gen', root: 'ر ه ب', gloss: 'and awe, dread' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'of Him' },
          ],
        },
        {
          id: 'qs-v12-c40-004',
          ar: '﴿لَنْ يَسْتَنكِفَ الْمَسِيحُ أَنْ يَكُونَ عَبْدًا لِلَّهِ﴾',
          en: '"The Messiah would never disdain to be a servant of Allah,',
          tokens: [
            { surface: 'لَنْ', lemma: 'لَنْ', pos: 'part', features: 'neg', gloss: 'never, will not' },
            { surface: 'يَسْتَنكِفَ', lemma: 'اِسْتَنكَفَ', pos: 'verb', features: 'impf.3ms', root: 'ن ك ف', gloss: 'to disdain, refuse out of pride; disdain' },
            { surface: 'الْمَسِيحُ', lemma: 'مَسِيح', pos: 'proper', features: 'nom', gloss: 'the Messiah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be' },
            { surface: 'عَبْدًا', lemma: 'عَبْد', pos: 'noun', features: 'indef.acc', gloss: 'a servant' },
            { surface: 'لِلَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'of Allah' },
          ],
        },
        {
          id: 'qs-v12-c40-005',
          ar: '﴿وَلَا الْمَلَائِكَةُ الْمُقَرَّبُونَ﴾',
          en: 'nor would the angels nearest to Him.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor, and not' },
            { surface: 'الْمَلَائِكَةُ', lemma: 'مَلَك', pos: 'noun', features: 'pl.def.nom', gloss: 'the angels' },
            { surface: 'الْمُقَرَّبُونَ', lemma: 'مُقَرَّب', pos: 'adj', features: 'pl.def.nom', root: 'ق ر ب', gloss: 'the ones brought near' },
          ],
        },
        {
          id: 'qs-v12-c40-006',
          ar: '﴿وَمَن يَسْتَنكِفْ عَنْ عِبَادَتِهِ وَيَسْتَكْبِرْ فَسَيَحْشُرُهُمْ إِلَيْهِ جَمِيعًا﴾',
          en: 'Whoever disdains His worship and is arrogant -- He will gather them all to Himself."',
          tokens: [
            { surface: 'وَمَن', lemma: 'مَنْ', pos: 'rel', features: 'conj+rel', gloss: 'and whoever' },
            { surface: 'يَسْتَنكِفْ', lemma: 'اِسْتَنكَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to disdain; disdains' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from, against' },
            { surface: 'عِبَادَتِهِ', lemma: 'عِبَادَة', pos: 'noun', features: 'gen+3ms', gloss: 'His worship' },
            { surface: 'وَيَسْتَكْبِرْ', lemma: 'اِسْتَكْبَرَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ك ب ر', gloss: 'to be arrogant; and is arrogant' },
            { surface: 'فَسَيَحْشُرُهُمْ', lemma: 'حَشَرَ', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'to gather; then He will gather them' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to Himself' },
            { surface: 'جَمِيعًا', lemma: 'جَمِيع', pos: 'adv', features: 'indef.acc', gloss: 'all together' },
          ],
        },
        {
          id: 'qs-v12-c40-007',
          ar: '﴿فَأَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ﴾',
          en: '"As for those who believed and did righteous deeds,',
          tokens: [
            { surface: 'فَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'as for' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'آمَنُوا', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3mp', gloss: 'to believe; believed' },
            { surface: 'وَعَمِلُوا', lemma: 'عَمِلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to do; and did' },
            { surface: 'الصَّالِحَاتِ', lemma: 'صَالِح', pos: 'noun', features: 'pl.def.acc.f', gloss: 'righteous deeds' },
          ],
        },
        {
          id: 'qs-v12-c40-008',
          ar: '﴿فَيُوَفِّيهِمْ أُجُورَهُمْ وَيَزِيدُهُم مِّن فَضْلِهِ﴾',
          en: 'He will pay them their rewards in full and increase them from His bounty;',
          tokens: [
            { surface: 'فَيُوَفِّيهِمْ', lemma: 'وَفَّى', pos: 'verb', features: 'conj+impf.3ms+3mp', root: 'و ف ي', gloss: 'to pay in full; He will pay them in full' },
            { surface: 'أُجُورَهُمْ', lemma: 'أَجْر', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their rewards' },
            { surface: 'وَيَزِيدُهُم', lemma: 'زَادَ', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'to increase; and increase them' },
            { surface: 'مِّن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'فَضْلِهِ', lemma: 'فَضْل', pos: 'noun', features: 'gen+3ms', gloss: 'His bounty' },
          ],
        },
        {
          id: 'qs-v12-c40-009',
          ar: '﴿وَأَمَّا الَّذِينَ اسْتَنكَفُوا وَاسْتَكْبَرُوا فَيُعَذِّبُهُمْ عَذَابًا أَلِيمًا﴾',
          en: 'but as for those who disdained and were arrogant, He will punish them with a painful punishment,',
          tokens: [
            { surface: 'وَأَمَّا', lemma: 'أَمَّا', pos: 'part', features: 'conj+part', gloss: 'and as for' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'اسْتَنكَفُوا', lemma: 'اِسْتَنكَفَ', pos: 'verb', features: 'perf.3mp', gloss: 'to disdain; disdained' },
            { surface: 'وَاسْتَكْبَرُوا', lemma: 'اِسْتَكْبَرَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be arrogant; and were arrogant' },
            { surface: 'فَيُعَذِّبُهُمْ', lemma: 'عَذَّبَ', pos: 'verb', features: 'conj+impf.3ms+3mp', root: 'ع ذ ب', gloss: 'to punish; He will punish them' },
            { surface: 'عَذَابًا', lemma: 'عَذَاب', pos: 'noun', features: 'indef.acc', gloss: 'a punishment' },
            { surface: 'أَلِيمًا', lemma: 'أَلِيم', pos: 'adj', features: 'indef.acc', gloss: 'painful' },
          ],
        },
        {
          id: 'qs-v12-c40-010',
          ar: '﴿وَلَا يَجِدُونَ لَهُم مِّن دُونِ اللَّهِ وَلِيًّا وَلَا نَصِيرًا﴾.',
          en: 'and they will not find for themselves, besides Allah, any protector or helper."',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُونَ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to find; they find' },
            { surface: 'لَهُم', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for themselves' },
            { surface: 'مِّن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, besides' },
            { surface: 'دُونِ', lemma: 'دُون', pos: 'noun', features: 'gen.constr', gloss: 'other than' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'وَلِيًّا', lemma: 'وَلِيّ', pos: 'noun', features: 'indef.acc', gloss: 'a protector' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'نَصِيرًا', lemma: 'نَصِير', pos: 'noun', features: 'indef.acc', root: 'ن ص ر', gloss: 'a helper' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ اللَّهُ عَنِ الْمَسِيحِ وَالْمَلَائِكَةِ الْمُقَرَّبِينَ؟',
          options: [
            'لَنْ يَسْتَنكِفَ الْمَسِيحُ وَلَا الْمَلَائِكَةُ الْمُقَرَّبُونَ أَنْ يَكُونُوا عَبِيدًا لِلَّهِ',
            'إِنَّ الْمَسِيحَ يَأْبَى أَنْ يَكُونَ عَبْدًا لِلَّهِ',
            'إِنَّ الْمَلَائِكَةَ لَا تَعْرِفُ اللَّهَ',
          ],
          answer: 0,
          qEn: 'What did Allah say about the Messiah and the angels nearest to Him?',
          optionsEn: [
            'Neither the Messiah nor the angels nearest to Him would ever disdain to be servants of Allah',
            'The Messiah refuses to be a servant of Allah',
            'The angels do not know Allah',
          ],
        },
        {
          q: 'مَاذَا يَحْدُثُ لِمَنْ يَسْتَنكِفُ عَنْ عِبَادَةِ اللَّهِ وَيَسْتَكْبِرُ؟',
          options: [
            'سَيَحْشُرُهُمُ اللَّهُ إِلَيْهِ جَمِيعًا وَيُعَذِّبُهُمْ عَذَابًا أَلِيمًا',
            'لَنْ يُحَاسِبَهُمُ اللَّهُ عَلَى ذَلِكَ',
            'سَيُكَافِئُهُمُ اللَّهُ عَلَى كِبْرِهِمْ',
          ],
          answer: 0,
          qEn: 'What happens to whoever disdains worshiping Allah and is arrogant?',
          optionsEn: [
            'Allah will gather them all to Himself and punish them with a painful punishment',
            'Allah will never hold them to account for it',
            'Allah will reward them for their pride',
          ],
        },
        {
          q: 'مَاذَا وَعَدَ اللَّهُ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ؟',
          options: [
            'أَنْ يُوَفِّيَهُمْ أُجُورَهُمْ وَيَزِيدَهُمْ مِنْ فَضْلِهِ',
            'أَنْ يَتْرُكَهُمْ بِلَا أَجْرٍ',
            'أَنْ يُسَاوِيَهُمْ بِالْمُسْتَنكِفِينَ',
          ],
          answer: 0,
          qEn: 'What did Allah promise those who believed and did righteous deeds?',
          optionsEn: [
            'To pay them their rewards in full and increase them from His bounty',
            'To leave them without any reward',
            'To treat them the same as those who disdained',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَأَمَّا الَّذِينَ',
        post: 'وَعَمِلُوا الصَّالِحَاتِ فَيُوَفِّيهِمْ أُجُورَهُمْ.',
        en: 'As for those who believed and did righteous deeds, He will pay them their rewards in full.',
        options: ['آمَنُوا', 'يُؤْمِنُونَ', 'آمِنُوا', 'مُؤْمِنُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- a completed act of faith, matching the printed الَّذِينَ آمَنُوا.',
          'Imperfect -- wrong tense; the clause narrates a completed act, not an ongoing one.',
          'Imperative -- wrong mood; this is a relative clause, not a command.',
          'Active participle (noun, "believers") -- wrong part of speech for this position after الَّذِينَ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لَنْ يَسْتَنكِفَ',
        post: 'أَنْ يَكُونَ عَبْدًا لِلَّهِ.',
        en: 'The Messiah would never disdain to be a servant of Allah.',
        options: ['الْمَسِيحُ', 'الْمَسِيحَ', 'الْمَسِيحِ', 'لِلْمَسِيحِ'],
        answer: 0,
        rationales: [
          'Nominative -- subject of يَسْتَنكِفَ, matching the printed لَنْ يَسْتَنكِفَ الْمَسِيحُ.',
          'Accusative -- wrong case; the subject of a verb is nominative, not accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'With a fused preposition -- wrong; no preposition governs this word here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا يَجِدُونَ لَهُم مِّن دُونِ اللَّهِ',
        post: 'وَلَا نَصِيرًا.',
        en: 'and they will not find for themselves, besides Allah, any protector or helper.',
        options: ['وَلِيًّا', 'وَلِيٌّ', 'وَلِيِّ', 'الْوَلِيَّ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- object of يَجِدُونَ, matching the printed يَجِدُونَ ... وَلِيًّا.',
          'Nominative -- wrong case; the object of a verb is accusative, not nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite -- wrong state; the parallel نَصِيرًا that follows is indefinite too.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَسْتَنكِفُ الرَّجُلُ عَنِ الْعِبَادَةِ',
        pre: '',
        post: 'عَنِ الْعِبَادَةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَسْتَنكِفُ', 'يَسْتَنكِفُ', 'تَسْتَنكِفُ', 'نَسْتَنكِفُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَسْتَنكِفُ الرَّجُلُ عَنِ الْعِبَادَةِ',
        pre: '',
        post: 'عَنِ الْعِبَادَةِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَسْتَنكِفُونَ', 'يَسْتَنكِفُ', 'تَسْتَنكِفُ', 'نَسْتَنكِفُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَحْشُرُ اللَّهُ النَّاسَ إِلَيْهِ جَمِيعًا',
        pre: '',
        post: 'النَّاسَ إِلَيْهِ جَمِيعًا',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَحْشُرُ', 'يَحْشُرُ', 'تَحْشُرُ', 'أَحْشُرُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; this is "we," not "you."',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
    ],
  },
};

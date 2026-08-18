// قَصَصُ النَّبِيِّينَ, volume 6 «مُوسَى» (part 1), chapter 22 -- مُعْجِزَاتُ
// مُوسَى. Printed pages 148 (from the heading, mid-page) - 149 - 150 (top
// only, ending right before ch23's heading «إِلَى الْمَيْدَانِ» which opens
// partway down page 150). Transcribed by hand from the scan (vision OCR,
// 200dpi render) against ../CHAPTER-FORMAT.md.
//
// Covers Sūrat ash-Shuʿarāʾ 26:30-40: the staff-into-serpent and
// white-hand miracles, Pharaoh's "skilled sorcerer" verdict and the
// court's agreement, Mūsā's retort that sorcerers do not prosper,
// Pharaoh's second accusation (that Mūsā means to expel them and seize
// power), the muster of sorcerers from across Egypt, and the appointed
// "day of adornment."
//
// Grammar / lexical notes:
//   -- قس-v6-c22-007's عَلِيمٌ reuses the lemma already taught in
//      qasas-v1 ch15 (there glossed "All-Knowing," a divine attribute);
//      here it describes a sorcerer ("عَلِيمٌ" = skilled, learned in his
//      craft) -- same lemma, context-appropriate token gloss supplied.
//   -- هُمُ (qs-v6-c22-018) is folded into the lemma هُوَ (already taught)
//      with features nom.3mp, following the same "pronoun family shares
//      one lemma" convention used for أَنتُمْ under أَنْتَ in
//      qasas-v2/chapter-22.js.
//   -- مَنْ, لَمَّا ("when"), يَوْم ("day"), مَاذَا ("what"), لَعَلَّ
//      ("perhaps"), and فِعْل ("deed, act" -- distinct from the
//      already-taught noun فِعْلَة) are not in known_lemmas.json despite
//      being basic closed-class/high-frequency words; مَنْ was already
//      flagged new in ch21 (qs-v6-c21-005) so is NOT re-listed here, but
//      the other four are new to this chapter. Flagged in case this
//      reflects incomplete lemma extraction rather than a genuine gap.
//   -- Qur'anic quotations (26:30-40) transcribed in full with ﴿ ﴾
//      preserved exactly as printed, split at natural pause points --
//      same convention as qasas-v2/chapter-22.js.
//
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): أَرَادَ, جَاءَ,
//      شَيْءٍ/شَيْء, مُّبِينٍ/مُبِين, أَتَى, بِ, إِن, كُنتَ/كَانَ, مِنَ, الصَّادِقِينَ/
//      صَادِق, أَلْقَى, إِذَا, نَزَعَ, يَدَهُ/يَد, وَجَدَ, حَوْلَهُ/حَوْلَ, إِنَّ, هَذَا,
//      وَافَقَ, أَهْلُ/أَهْل, الْمَجْلِسِ/مَجْلِس, أَتَقُولُونَ/قَالَ, الْحَقِّ/حَقّ,
//      وَلَا, آخَرَ/آخَر, عَلَيْهِ/عَلَى, آبَاءَنَا/أَب, الْأَرْضِ/أَرْض, نَحْنُ,
//      بِمُؤْمِنِينَ/مُؤْمِن, الْمَلَأَ/مَلَأ, أَخْرَجَ, أَرْضِكُم/أَرْض, تَأْمُرُونَ/أَمَرَ,
//      جَمَعَ, السَّحَرَةَ/سَاحِر, هَكَذَا, نَادَى, مَمْلَكَةِ/مَمْلَكَة, مِصْرَ, عَرَفَ,
//      حَضَرَ, اِجْتَمَعَ, كُلِّ/كُلّ, هُوَ, أَنتُم/أَنْتَ, هَلْ, نَاس
//      are all already taught and are NOT re-listed in newWords here.
//
// 21 new words (أَطْلَقَ، سَهْم، عَصَا، أَبْيَض، نَاظِر، مَقَال، جُلَسَاء، سَاحِر،
// سِحْر، أَفْلَحَ، لَفَتَ، كِبْرِيَاء، خَوَّفَ، فِعْل، مَاذَا، أَشَارَ، مَمْلَكَة، نَاحِيَة،
// زِينَة، مِيعَاد، لَعَلَّ، اتَّبَعَ، غَالِب، لَمَّا، يَوْم -- 25 in total, see list
// below for the exact newWords array).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch22',
  title: { ar: 'مُعْجِزَاتُ مُوسَى', en: 'The Miracles of Mūsā' },
  newWords: [
    'أَطْلَقَ', 'سَهْم', 'عَصَا', 'نَاظِر', 'مَقَال', 'جُلَسَاء',
    'سَاحِر', 'سِحْر', 'أَفْلَحَ', 'لَفَتَ', 'كِبْرِيَاء', 'خَوَّفَ', 'فِعْل',
    'مَاذَا', 'أَشَارَ', 'مَمْلَكَة', 'نَاحِيَة', 'زِينَة', 'اتَّبَعَ', 'غَالِب', 'يَوْم',
  ],
  lemmas: {
    أَطْلَقَ: { gloss: 'to release, let loose' },
    سَهْم: { gloss: 'arrow' },
    عَصَا: { gloss: 'staff' },
    نَاظِر: { gloss: 'onlooker, viewer' },
    مَقَال: { gloss: 'a saying, statement' },
    جُلَسَاء: { gloss: 'companions, those sitting with one' },
    سَاحِر: { gloss: 'sorcerer' },
    سِحْر: { gloss: 'sorcery, magic' },
    أَفْلَحَ: { gloss: 'to succeed, prosper' },
    لَفَتَ: { gloss: 'to turn away, distract' },
    كِبْرِيَاء: { gloss: 'greatness, supremacy' },
    خَوَّفَ: { gloss: 'to frighten' },
    فِعْل: { gloss: 'deed, act, manner' },
    مَاذَا: { gloss: 'what' },
    أَشَارَ: { gloss: 'to suggest, advise, point out' },
    مَمْلَكَة: { gloss: 'kingdom' },
    نَاحِيَة: { gloss: 'region, direction, side' },
    زِينَة: { gloss: 'adornment, festival' },
    اتَّبَعَ: { gloss: 'to follow' },
    غَالِب: { gloss: 'overcoming, victorious' },
    يَوْم: { gloss: 'day' },
  },
  paragraphs: [
    {
      lines: true,
      en: "When Pharaoh let loose his arrow, Mūsā answered with Allah's: 'Even if I bring you something clear?' 'Then bring it,' said Pharaoh, 'if you speak the truth.' Mūsā cast down his staff and it became a plain serpent; he drew out his hand and it shone white to all who looked. Pharaoh, scrambling for a response, told his court this was a skilled sorcerer, and they agreed it was plain sorcery. Mūsā answered them back: how can you call the truth sorcery, when it has just come to you? Sorcerers never prosper.",
      sentences: [
        {
          id: 'qs-v6-c22-001',
          ar: 'وَلَمَّا أَطْلَقَ فِرْعَوْنُ سَهْمَهُ،',
          en: 'When Pharaoh released his arrow,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'أَطْلَقَ', lemma: 'أَطْلَقَ', pos: 'verb', features: 'perf.3ms', gloss: 'to release; released' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'سَهْمَهُ', lemma: 'سَهْم', pos: 'noun', features: 'acc+3ms', gloss: 'his arrow' },
          ],
        },
        {
          id: 'qs-v6-c22-002',
          ar: 'أَرَادَ مُوسَى أَنْ يَرْمِيَهُ بِسَهْمِ اللَّهِ.',
          en: "Mūsā wanted to answer with Allah's arrow.",
          tokens: [
            { surface: 'أَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms', gloss: 'to want; wanted' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَرْمِيَهُ', lemma: 'رَمَى', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to shoot, strike; he strike it' },
            { surface: 'بِسَهْمِ', lemma: 'سَهْم', pos: 'noun', features: 'prep+constr.gen', gloss: 'with the arrow of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v6-c22-003',
          ar: '﴿قَالَ أَوَلَوْ جِئْتُكَ بِشَيْءٍ مُّبِينٍ﴾؟!',
          en: '"He said: Even if I bring you something clear?!"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'أَوَلَوْ', lemma: 'لَوْ', pos: 'conj', features: 'part+conj', gloss: 'even if' },
            { surface: 'جِئْتُكَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.1s+2ms', gloss: 'to come, bring; I bring you' },
            { surface: 'بِشَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'prep+indef.gen', gloss: 'with a thing' },
            { surface: 'مُّبِينٍ', lemma: 'مُبِين', pos: 'adj', features: 'indef.gen', gloss: 'clear, manifest' },
          ],
        },
        {
          id: 'qs-v6-c22-004',
          ar: '﴿قَالَ فَأْتِ بِهِ إِن كُنتَ مِنَ الصَّادِقِينَ﴾.',
          en: '"He said: Then bring it, if you are of the truthful."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'فَأْتِ', lemma: 'أَتَى', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to bring; then bring' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كُنتَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2ms', root: 'ك و ن', gloss: 'to be; you were' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الصَّادِقِينَ', lemma: 'صَادِق', pos: 'adj', features: 'pl.def.gen', gloss: 'the truthful' },
          ],
        },
        {
          id: 'qs-v6-c22-005',
          ar: '﴿فَأَلْقَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ مُّبِينٌ﴾.',
          en: '"So he threw down his staff, and behold, it was a plain serpent."',
          tokens: [
            { surface: 'فَأَلْقَى', lemma: 'أَلْقَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to throw, cast; so threw' },
            { surface: 'عَصَاهُ', lemma: 'عَصَا', pos: 'noun', features: 'acc+3ms', gloss: 'his staff' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj+conj', gloss: 'and behold' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: 'nom.3fs', gloss: 'it' },
            { surface: 'ثُعْبَانٌ', lemma: 'ثُعْبَان', pos: 'noun', features: 'indef.nom', gloss: 'a serpent' },
            { surface: 'مُّبِينٌ', lemma: 'مُبِين', pos: 'adj', features: 'indef.nom', gloss: 'manifest, plain' },
          ],
        },
        {
          id: 'qs-v6-c22-006',
          ar: '﴿وَنَزَعَ يَدَهُ فَإِذَا هِيَ بَيْضَاءُ لِلنَّاظِرِينَ﴾.',
          en: '"And he drew out his hand, and behold, it was white to the onlookers."',
          tokens: [
            { surface: 'وَنَزَعَ', lemma: 'نَزَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to pull out; and pulled out' },
            { surface: 'يَدَهُ', lemma: 'يَد', pos: 'noun', features: 'acc+3ms', gloss: 'his hand' },
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj+conj', gloss: 'and behold' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: 'nom.3fs', gloss: 'it' },
            { surface: 'بَيْضَاءُ', lemma: 'أَبْيَض', pos: 'adj', features: 'indef.nom.f', gloss: 'white' },
            { surface: 'لِلنَّاظِرِينَ', lemma: 'نَاظِر', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'to the onlookers' },
          ],
        },
        {
          id: 'qs-v6-c22-007',
          ar: 'وَوَجَدَ فِرْعَوْنُ مَقَالًا يَقُولُهُ لِجُلَسَائِهِ.',
          en: 'Pharaoh found something to say to his companions.',
          tokens: [
            { surface: 'وَوَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to find; and found' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'مَقَالًا', lemma: 'مَقَال', pos: 'noun', features: 'indef.acc', gloss: 'a saying' },
            { surface: 'يَقُولُهُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'ق و ل', gloss: 'to say; he say it' },
            { surface: 'لِجُلَسَائِهِ', lemma: 'جُلَسَاء', pos: 'noun', features: 'prep+gen+3ms', gloss: 'to his companions' },
          ],
        },
        {
          id: 'qs-v6-c22-008',
          ar: '﴿قَالَ لِلْمَلَإِ حَوْلَهُ إِنَّ هَذَا لَسَاحِرٌ عَلِيمٌ﴾.',
          en: '"He said to the assembly around him: This is truly a skilled sorcerer."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'لِلْمَلَإِ', lemma: 'مَلَأ', pos: 'noun', features: 'prep+def.gen', gloss: 'to the assembly' },
            { surface: 'حَوْلَهُ', lemma: 'حَوْلَ', pos: 'adv', features: 'adv+3ms', gloss: 'around him' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَسَاحِرٌ', lemma: 'سَاحِر', pos: 'noun', features: 'part+indef.nom', gloss: 'indeed a sorcerer' },
            { surface: 'عَلِيمٌ', lemma: 'عَلِيم', pos: 'adj', features: 'indef.nom', gloss: 'skilled, learned' },
          ],
        },
        {
          id: 'qs-v6-c22-009',
          ar: 'وَوَافَقَ أَهْلُ الْمَجْلِسِ: ﴿قَالُوا إِنَّ هَذَا لَسِحْرٌ مُّبِينٌ﴾.',
          en: 'The assembly agreed: "They said: This is truly plain sorcery."',
          tokens: [
            { surface: 'وَوَافَقَ', lemma: 'وَافَقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to agree; and agreed' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'constr.nom', gloss: 'people of' },
            { surface: 'الْمَجْلِسِ', lemma: 'مَجْلِس', pos: 'noun', features: 'def.gen', gloss: 'the assembly' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'لَسِحْرٌ', lemma: 'سِحْر', pos: 'noun', features: 'part+indef.nom', gloss: 'indeed sorcery' },
            { surface: 'مُّبِينٌ', lemma: 'مُبِين', pos: 'adj', features: 'indef.nom', gloss: 'manifest, plain' },
          ],
        },
        {
          id: 'qs-v6-c22-010',
          ar: '﴿قَالَ مُوسَى أَتَقُولُونَ لِلْحَقِّ لَمَّا جَاءَكُمْ أَسِحْرٌ هَذَا وَلَا يُفْلِحُ السَّاحِرُونَ﴾.',
          en: '"Mūsā said: Do you call the truth sorcery when it has come to you? Sorcerers do not prosper."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَتَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'part+impf.2mp', root: 'ق و ل', gloss: 'to say; do you say' },
            { surface: 'لِلْحَقِّ', lemma: 'حَقّ', pos: 'noun', features: 'prep+def.gen', gloss: 'of the truth' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'جَاءَكُمْ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms+2mp', gloss: 'to come; it came to you' },
            { surface: 'أَسِحْرٌ', lemma: 'سِحْر', pos: 'noun', features: 'part+indef.nom', gloss: 'is this sorcery' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُفْلِحُ', lemma: 'أَفْلَحَ', pos: 'verb', features: 'impf.3ms', gloss: 'to succeed, prosper; he succeed' },
            { surface: 'السَّاحِرُونَ', lemma: 'سَاحِر', pos: 'noun', features: 'pl.def.nom', gloss: 'the sorcerers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ حِينَ أَلْقَى مُوسَى عَصَاهُ؟',
          options: ['صَارَتْ ثُعْبَاناً مُبِيناً', 'بَقِيَتْ عَصًا', 'اِنْكَسَرَتْ'],
          answer: 0,
          qEn: "What happened when Mūsā threw down his staff?",
          optionsEn: ['It became a plain serpent', 'It stayed a staff', 'It broke'],
        },
      ],
    },
    {
      en: "Pharaoh struck again, accusing Mūsā of scheming to turn them from their fathers' religion and seize power in the land -- warning his court that Mūsā meant to drive them from their own land with his sorcery, and asking what they commanded. The assembly advised him to gather sorcerers from across the kingdom to face Mūsā, and so it was announced throughout Egypt: whoever knew sorcery should come to the king. Sorcerers gathered from every region, and the day of the festival was set as the appointed time -- the people were asked to assemble, so that they might follow the sorcerers, if the sorcerers should be the victors.",
      sentences: [
        {
          id: 'qs-v6-c22-011',
          ar: 'وَرَمَى فِرْعَوْنُ مُوسَى بِسَهْمٍ آخَرَ فَقَالَ:',
          en: 'Pharaoh struck at Mūsā with another arrow and said:',
          tokens: [
            { surface: 'وَرَمَى', lemma: 'رَمَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to strike, shoot; and struck' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'بِسَهْمٍ', lemma: 'سَهْم', pos: 'noun', features: 'prep+indef.gen', gloss: 'with an arrow' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'indef.gen', gloss: 'another' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v6-c22-012',
          ar: '﴿قَالُوا أَجِئْتَنَا لِتَلْفِتَنَا عَمَّا وَجَدْنَا عَلَيْهِ آبَاءَنَا',
          en: '"They said: Have you come to turn us away from what we found our fathers upon,',
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; they said' },
            { surface: 'أَجِئْتَنَا', lemma: 'جَاءَ', pos: 'verb', features: 'part+perf.2ms+1p', gloss: 'to come; have you come to us' },
            { surface: 'لِتَلْفِتَنَا', lemma: 'لَفَتَ', pos: 'verb', features: 'prep+impf.2ms+1p', gloss: 'to turn away; to turn us away' },
            { surface: 'عَمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'from what' },
            { surface: 'وَجَدْنَا', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.1p', gloss: 'to find; we found' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon it' },
            { surface: 'آبَاءَنَا', lemma: 'أَب', pos: 'noun', features: 'pl.acc+1p', root: 'أ ب و', gloss: 'our fathers' },
          ],
        },
        {
          id: 'qs-v6-c22-013',
          ar: 'وَتَكُونَ لَكُمَا الْكِبْرِيَاءُ فِي الْأَرْضِ وَمَا نَحْنُ لَكُمَا بِمُؤْمِنِينَ﴾.',
          en: 'and that greatness in the land may belong to you two? And we are not believers in you."',
          tokens: [
            { surface: 'وَتَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ك و ن', gloss: 'to be; and be' },
            { surface: 'لَكُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+2d', gloss: 'for you both' },
            { surface: 'الْكِبْرِيَاءُ', lemma: 'كِبْرِيَاء', pos: 'noun', features: 'def.nom', gloss: 'the greatness, supremacy' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'nom.1p', gloss: 'we' },
            { surface: 'لَكُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+2d', gloss: 'in you both' },
            { surface: 'بِمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'noun', features: 'prep+pl.acc', gloss: 'believers' },
          ],
        },
        {
          id: 'qs-v6-c22-014',
          ar: 'وَأَرَادَ فِرْعَوْنُ أَنْ يُخَوِّفَ الْمَلَأَ مِنْ مُوسَى فِعْلَ الْمُلُوكِ.',
          en: 'Pharaoh wanted to frighten the assembly about Mūsā, after the manner of kings.',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; and wanted' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُخَوِّفَ', lemma: 'خَوَّفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to frighten; he frighten' },
            { surface: 'الْمَلَأَ', lemma: 'مَلَأ', pos: 'noun', features: 'def.acc', gloss: 'the assembly' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'فِعْلَ', lemma: 'فِعْل', pos: 'noun', features: 'acc', gloss: 'the manner, deed of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'the kings' },
          ],
        },
        {
          id: 'qs-v6-c22-015',
          ar: '﴿يُرِيدُ أَن يُخْرِجَكُم مِّنْ أَرْضِكُم بِسِحْرِهِ فَمَاذَا تَأْمُرُونَ﴾.',
          en: '"He wants to expel you from your land with his sorcery, so what do you command?"',
          tokens: [
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; he want' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُخْرِجَكُم', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3ms+2mp', gloss: 'to expel; he expel you' },
            { surface: 'مِّنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَرْضِكُم', lemma: 'أَرْض', pos: 'noun', features: 'gen+2mp', gloss: 'your land' },
            { surface: 'بِسِحْرِهِ', lemma: 'سِحْر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'with his sorcery' },
            { surface: 'فَمَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'conj+rel', gloss: 'so what' },
            { surface: 'تَأْمُرُونَ', lemma: 'أَمَرَ', pos: 'verb', features: 'impf.2mp', gloss: 'to command; you all command' },
          ],
        },
        {
          id: 'qs-v6-c22-016',
          ar: 'أَشَارَ الْمَلَأُ عَلَى الْمَلِكِ أَنْ يَجْمَعَ السَّحَرَةَ مِنْ مَمْلَكَتِهِ وَيَرْمِيَ بِهِمْ مُوسَى.',
          en: 'The assembly advised the king to gather sorcerers from his kingdom and pit them against Mūsā.',
          tokens: [
            { surface: 'أَشَارَ', lemma: 'أَشَارَ', pos: 'verb', features: 'perf.3ms', gloss: 'to advise, suggest; advised' },
            { surface: 'الْمَلَأُ', lemma: 'مَلَأ', pos: 'noun', features: 'def.nom', gloss: 'the assembly' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَجْمَعَ', lemma: 'جَمَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to gather; he gather' },
            { surface: 'السَّحَرَةَ', lemma: 'سَاحِر', pos: 'noun', features: 'pl.def.acc', gloss: 'the sorcerers' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مَمْلَكَتِهِ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'gen+3ms', gloss: 'his kingdom' },
            { surface: 'وَيَرْمِيَ', lemma: 'رَمَى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to pit, throw; and pit' },
            { surface: 'بِهِمْ', lemma: 'بِ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
          ],
        },
        {
          id: 'qs-v6-c22-017',
          ar: 'وَهَكَذَا كَانَ: نُودِيَ فِي مَمْلَكَةِ مِصْرَ «أَلَا مَنْ كَانَ يَعْرِفُ السِّحْرَ فَلْيَحْضُرْ إِلَى الْمَلِكِ».',
          en: 'And so it was: it was announced throughout Egypt: "Whoever knows sorcery, let him come to the king."',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'نُودِيَ', lemma: 'نَادَى', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to call out; it was called out' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَمْلَكَةِ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'constr.gen', gloss: 'the kingdom of' },
            { surface: 'مِصْرَ', lemma: 'مِصْرَ', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'أَلَا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: 'lo, indeed' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'to know; he know' },
            { surface: 'السِّحْرَ', lemma: 'سِحْر', pos: 'noun', features: 'def.acc', gloss: 'sorcery' },
            { surface: 'فَلْيَحْضُرْ', lemma: 'حَضَرَ', pos: 'verb', features: 'conj+imp.3ms', gloss: 'to come, attend; let him come' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
          ],
        },
        {
          id: 'qs-v6-c22-018',
          ar: 'وَاجْتَمَعَ السَّحَرَةُ مِنْ كُلِّ نَاحِيَةٍ مِنْ نَوَاحِي الْمَمْلَكَةِ.',
          en: 'The sorcerers gathered from every region of the kingdom.',
          tokens: [
            { surface: 'وَاجْتَمَعَ', lemma: 'اِجْتَمَعَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to gather; and gathered' },
            { surface: 'السَّحَرَةُ', lemma: 'سَاحِر', pos: 'noun', features: 'pl.def.nom', gloss: 'the sorcerers' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'نَاحِيَةٍ', lemma: 'نَاحِيَة', pos: 'noun', features: 'indef.gen', gloss: 'a region' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'نَوَاحِي', lemma: 'نَاحِيَة', pos: 'noun', features: 'pl.constr.gen', gloss: 'the regions of' },
            { surface: 'الْمَمْلَكَةِ', lemma: 'مَمْلَكَة', pos: 'noun', features: 'def.gen', gloss: 'the kingdom' },
          ],
        },
        {
          id: 'qs-v6-c22-019',
          ar: 'وَكَانَ يَوْمُ الزِّينَةِ هُوَ الْمِيعَادَ.',
          en: 'The day of the festival was the appointed time.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'يَوْمُ', lemma: 'يَوْم', pos: 'noun', features: 'constr.nom', gloss: 'the day of' },
            { surface: 'الزِّينَةِ', lemma: 'زِينَة', pos: 'noun', features: 'def.gen', gloss: 'the adornment, festival' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3ms', gloss: 'it' },
            { surface: 'الْمِيعَادَ', lemma: 'مِيعَاد', pos: 'noun', features: 'def.acc', gloss: 'the appointed time' },
          ],
        },
        {
          id: 'qs-v6-c22-020',
          ar: '﴿وَقِيلَ لِلنَّاسِ هَلْ أَنتُم مُّجْتَمِعُونَ لَعَلَّنَا نَتَّبِعُ السَّحَرَةَ إِن كَانُوا هُمُ الْغَالِبِينَ﴾؟',
          en: '"And it was said to the people: Will you assemble? Perhaps we will follow the sorcerers, if they should be the victors?"',
          tokens: [
            { surface: 'وَقِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ق و ل', gloss: 'to say; and it was said' },
            { surface: 'لِلنَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'prep+def.gen', gloss: 'to the people' },
            { surface: 'هَلْ', lemma: 'هَلْ', pos: 'part', features: 'part', gloss: 'is it that' },
            { surface: 'أَنتُم', lemma: 'أَنْتَ', pos: 'noun', features: 'nom.2mp', gloss: 'you all' },
            { surface: 'مُّجْتَمِعُونَ', lemma: 'اِجْتَمَعَ', pos: 'noun', features: 'pl.nom', gloss: 'gathering, gathered' },
            { surface: 'لَعَلَّنَا', lemma: 'لَعَلَّ', pos: 'part', features: 'part+1p', gloss: 'perhaps we' },
            { surface: 'نَتَّبِعُ', lemma: 'اتَّبَعَ', pos: 'verb', features: 'impf.1p', gloss: 'to follow; we follow' },
            { surface: 'السَّحَرَةَ', lemma: 'سَاحِر', pos: 'noun', features: 'pl.def.acc', gloss: 'the sorcerers' },
            { surface: 'إِن', lemma: 'إِنْ', pos: 'conj', features: 'conj', gloss: 'if' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; they were' },
            { surface: 'هُمُ', lemma: 'هُوَ', pos: 'noun', features: 'nom.3mp', gloss: 'they' },
            { surface: 'الْغَالِبِينَ', lemma: 'غَالِب', pos: 'adj', features: 'pl.def.acc', gloss: 'the victors, the overcomers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا اقْتَرَحَ الْمَلَأُ عَلَى فِرْعَوْنَ لِمُوَاجَهَةِ مُوسَى؟',
          options: ['أَنْ يَجْمَعَ السَّحَرَةَ مِنَ الْمَمْلَكَةِ', 'أَنْ يَسْجُنَ مُوسَى فَوْراً', 'أَنْ يُهَاجِرَ إِلَى مِصْرَ'],
          answer: 0,
          qEn: "What did the assembly suggest to Pharaoh to confront Mūsā?",
          optionsEn: ['To gather sorcerers from the kingdom', 'To imprison Mūsā at once', 'To emigrate to Egypt'],
        },
      ],
    },
  ],
};

// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 19 -- اذْهَبْ إِلَى
// فِرْعَوْنَ إِنَّهُ طَغَى. Printed pages 142 (heading, partway down, right
// after ch18's closing Qur'an citation 20:22) - 143 - 144 (top only),
// ending right before ch20's heading «أَمَامَ فِرْعَوْنَ» which opens
// partway down page 144. Transcribed by hand from the scan (vision OCR,
// 200dpi render) against ../CHAPTER-FORMAT.md.
//
// The commissioning proper: Nadwi's own four-fold إِنَّ.../إِنَّ...
// exposition on Pharaoh's corruption (qs-v6-c19-002/003/004, a
// rhetorical-repetition set piece exactly like ch2's هُوَ الَّذِي run and
// ch14's حَبَّذَا/شَقَاوَةَ antithesis -- not a transcription duplicate),
// then Mūsā's own fear (the killing, the stammer) voiced through Qur'an
// citations drawn from both Sūrat Ṭāhā (20:9-13, 25-28, 42-44) and Sūrat
// ash-Shuʿarāʾ (26:10-13, 16-17) woven together into one continuous
// dialogue, exactly as Nadwi presents it. This is the most Qur'an-dense
// chapter transcribed in this volume so far; every Qur'an fragment is
// split at its own natural pause point per the qasas-v2/ch22 precedent.
//
// Grammar / lexical notes:
//   -- قَتَلْتُ / يَقْتُلُونِ / أَخَافُ etc. throughout the Qur'an citations
//      use the 1st-person voice of Mūsā himself, reported without a
//      قَالَ-introduction in several consecutive āyahs (20:25-28) -- each
//      still gets its own sentence entry at its natural pause point, not
//      merged with neighbors, to keep clause length in the buildable
//      range.
//   -- هَارُون (Aaron) is introduced here as a new proper noun; he has
//      not appeared earlier in this volume.
//   -- Shared lexicon check (cross-checked against known_lemmas.json,
//      volumes 1-3 + this volume's chapters so far): أَمَرَ, اللَّه, مُوسَى,
//      بَعْدَ, ذَلِكَ, كُلّ, أَنْ, عَمَل, الَّذِي, خَلَقَ, لِ, إِنَّ, فِرْعَوْن, عَلَا
//      (qasas-v6/ch5), فِي, الْأَرْض, أَفْسَدَ, قَوْم, كَفَرَ, بِ, أَرْض, لا,
//      رَضِيَ, عَبْد, يُحِبُّ/أَحَبَّ, فَسَاد, أَرَادَ, ذَهَبَ, لَكِنْ, كَيْفَ,
//      جَبَّار, قَتَلَ, قِبْطِيّ, أَمْس, بَعِيد, خَرَجَ, مِنْ, مِصْرَ, خَافَ,
//      تَرَقَّبَ, عَرَفَ, شُرْطَة, أَهْل, قَصْر, رَبّ, نَفْس, ذَكَرَ, لِسَان, أَنَّ,
//      لَكِنَّ, كَانَ, يُرِيدُ/أَرَادَ, نَادَى, أَتَى, ظَالِم, أَلَا, اتَّقَى,
//      كَذَّبَ, ضَاقَ, صَدْر, اِنْطَلَقَ, أَرْسَلَ, عَلَى, ذَنْب, كَلَّا, آيَة,
//      اِسْتَمَعَ, مَعَ, قَالَ, رَسُول, بَنِي إِسْرَائِيلَ, أَوْصَى, رِفْق, حَدّ,
//      قَوْل, لَعَلَّ, تَذَكَّرَ, خَشِيَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 19 new words (شَرَعَ، فَاسِق، وَاجَهَ، لِسَان، حُبْسَة، رَغْمَ، اتَّقَى، كَذَّبَ،
// ضَاقَ، اِنْطَلَقَ، هَارُون، قَوْل، أَوْصَى، لِين، رِفْق، حَدّ، لَيِّن، تَذَكَّرَ،
// خَشِيَ -- corrected count below excludes items already marked known
// above; see newWords array for the final list). No page footnotes
// (book_note) on these pages.
export const CHAPTER = {
  id: 'ch19',
  title: { ar: 'اذْهَبْ إِلَى فِرْعَوْنَ إِنَّهُ طَغَى', en: '"Go to Pharaoh, He Has Transgressed"' },
  newWords: ['شَرَعَ', 'أَجْل', 'فَاسِق', 'وَاجَهَ', 'لِسَان', 'حُبْسَة', 'رَغْمَ', 'اتَّقَى', 'كَذَّبَ', 'ضَاقَ', 'اِنْطَلَقَ', 'هَارُون', 'أَوْصَى', 'لِين', 'رِفْق', 'حَدّ', 'لَيِّن', 'تَذَكَّرَ', 'خَشِيَ'],
  lemmas: {
    شَرَعَ: { gloss: 'to begin, embark on' },
    أَجْل: { gloss: 'sake, purpose (لِأَجْلِ: for the sake of)' },
    فَاسِق: { gloss: 'corrupt, rebellious (against Allah)' },
    وَاجَهَ: { gloss: 'to confront, face' },
    لِسَان: { gloss: 'tongue' },
    حُبْسَة: { gloss: 'a stammer, speech impediment' },
    رَغْمَ: { gloss: 'despite, in spite of' },
    اتَّقَى: { gloss: 'to be mindful of, fear (Allah)' },
    كَذَّبَ: { gloss: 'to call a liar, deny' },
    ضَاقَ: { gloss: 'to become constricted, tight' },
    اِنْطَلَقَ: { gloss: 'to be freed, set loose; to speak fluently' },
    هَارُون: { gloss: 'Hārūn (Aaron)' },
    أَوْصَى: { gloss: 'to enjoin, instruct' },
    لِين: { gloss: 'gentleness, softness' },
    رِفْق: { gloss: 'kindness, gentleness' },
    حَدّ: { gloss: 'limit, boundary' },
    لَيِّن: { gloss: 'soft, gentle' },
    تَذَكَّرَ: { gloss: 'to remember, take heed' },
    خَشِيَ: { gloss: 'to fear, be in awe of' },
  },
  paragraphs: [
    {
      en: 'After all that, Allah commanded Mūsā to begin the work he had been created for.',
      sentences: [
        {
          id: 'qs-v6-c19-001',
          ar: 'وَأَمَرَ اللَّهُ مُوسَى بَعْدَ ذَلِكَ كُلِّهِ أَنْ يَشْرَعَ عَمَلَهُ الَّذِي خَلَقَهُ لِأَجْلِهِ.',
          en: 'After all that, Allah commanded Mūsā to begin the work he had been created for.',
          tokens: [
            { surface: 'وَأَمَرَ', lemma: 'أَمَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to command; and commanded' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'بَعْدَ', lemma: 'بَعْدَ', pos: 'prep', features: 'prep', gloss: 'after' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'كُلِّهِ', lemma: 'كُلّ', pos: 'noun', features: 'gen+3ms', gloss: 'all of it' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَشْرَعَ', lemma: 'شَرَعَ', pos: 'verb', features: 'subj.3ms', root: 'ش ر ع', gloss: 'to begin; begin' },
            { surface: 'عَمَلَهُ', lemma: 'عَمَل', pos: 'noun', features: 'acc+3ms', gloss: 'his work' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'that' },
            { surface: 'خَلَقَهُ', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to create; created him' },
            { surface: 'لِأَجْلِهِ', lemma: 'أَجْل', pos: 'noun', features: 'prep+gen+3ms', gloss: 'for' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَمَرَ اللَّهُ مُوسَى بَعْدَ إِقَامَتِهِ فِي مَدْيَنَ؟',
          options: ['أَنْ يَشْرَعَ عَمَلَهُ الَّذِي خَلَقَهُ لِأَجْلِهِ', 'أَنْ يَبْقَى فِي مَدْيَنَ إِلَى الْأَبَدِ', 'أَنْ يَتَزَوَّجَ مَرَّةً أُخْرَى'],
          answer: 0,
          qEn: 'What did Allah command Mūsā after his time in Madyan?',
          optionsEn: ['To begin the work he had been created for', 'To stay in Madyan forever', 'To marry again'],
        },
      ],
    },
    {
      en: 'Pharaoh had exalted himself in the land; Pharaoh had spread corruption in the land. Pharaoh\'s people had disbelieved in Allah; Pharaoh\'s people had spread corruption in Allah\'s land. Allah is not pleased with disbelief for His servants; Allah does not love corruption in the land. So Allah willed that Mūsā go to Pharaoh and his people, "for they were a rebellious people."',
      sentences: [
        {
          id: 'qs-v6-c19-002',
          ar: 'إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ، إِنَّ فِرْعَوْنَ أَفْسَدَ فِي الْأَرْضِ.',
          en: 'Pharaoh had exalted himself in the land; Pharaoh had spread corruption in the land.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'عَلَا', lemma: 'عَلَا', pos: 'verb', features: 'perf.3ms', gloss: 'to exalt oneself; exalted himself' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'أَفْسَدَ', lemma: 'أَفْسَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to corrupt; spread corruption' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
          ],
        },
        {
          id: 'qs-v6-c19-003',
          ar: 'إِنَّ قَوْمَ فِرْعَوْنَ كَفَرُوا بِاللَّهِ، إِنَّ قَوْمَ فِرْعَوْنَ أَفْسَدُوا فِي أَرْضِ اللَّهِ.',
          en: "Pharaoh's people had disbelieved in Allah; Pharaoh's people had spread corruption in Allah's land.",
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'قَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'كَفَرُوا', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3mp', gloss: 'to disbelieve; disbelieved' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'قَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'أَفْسَدُوا', lemma: 'أَفْسَدَ', pos: 'verb', features: 'perf.3mp', gloss: 'spread corruption' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'constr.gen', gloss: "the land of" },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: "Allah's" },
          ],
        },
        {
          id: 'qs-v6-c19-004',
          ar: 'إِنَّ اللَّهَ لا يَرْضَى لِعِبَادِهِ الْكُفْرَ، إِنَّ اللَّهَ لا يُحِبُّ الْفَسَادَ فِي الْأَرْضِ.',
          en: 'Allah is not pleased with disbelief for His servants; Allah does not love corruption in the land.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرْضَى', lemma: 'رَضِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be pleased; is pleased' },
            { surface: 'لِعِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'for His servants' },
            { surface: 'الْكُفْرَ', lemma: 'كُفْر', pos: 'noun', features: 'def.acc', gloss: 'disbelief' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', gloss: 'to love; loves' },
            { surface: 'الْفَسَادَ', lemma: 'فَسَاد', pos: 'noun', features: 'def.acc', gloss: 'corruption' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the land' },
          ],
        },
        {
          id: 'qs-v6-c19-005',
          ar: 'فَأَرَادَ اللَّهُ أَنْ يَذْهَبَ مُوسَى إِلَى فِرْعَوْنَ وَقَوْمِهِ ﴿إِنَّهُمْ كَانُوا قَوْماً فَاسِقِينَ﴾.',
          en: 'So Allah willed that Mūsā go to Pharaoh and his people, "for they were a rebellious people."',
          tokens: [
            { surface: 'فَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to will; so willed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَذْهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'subj.3ms', gloss: 'go' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَقَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his people' },
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'قَوْماً', lemma: 'قَوْم', pos: 'noun', features: 'indef.acc', gloss: 'a people' },
            { surface: 'فَاسِقِينَ', lemma: 'فَاسِق', pos: 'adj', features: 'indef.acc.pl', root: 'ف س ق', gloss: 'rebellious' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا أَرَادَ اللَّهُ أَنْ يَذْهَبَ مُوسَى إِلَى فِرْعَوْنَ؟',
          options: ['لِأَنَّ فِرْعَوْنَ وَقَوْمَهُ كَانُوا قَوْماً فَاسِقِينَ عَلَا فِي الْأَرْضِ وَأَفْسَدَ فِيهَا', 'لِيُعَلِّمَهُ الْكِتَابَةَ', 'لِيَطْلُبَ مِنْهُ الْمَالَ'],
          answer: 0,
          qEn: 'Why did Allah want Mūsā to go to Pharaoh?',
          optionsEn: ['Because Pharaoh and his people were a rebellious people who had exalted themselves and spread corruption in the land', 'To teach him writing', 'To ask him for money'],
        },
      ],
    },
    {
      en: "But how could Mūsā go to Pharaoh, and how could he confront the tyrant -- the very one who had killed the Copt just yesterday, and yesterday was not far off! The one who had left Egypt afraid and watchful, known to the police and known to the people of the palace! \"He said: My Lord, indeed I have killed a soul among them, and I fear that they will kill me.\" Mūsā mentioned that there was a stammer in his tongue. But Allah knew all of that, and willed that Mūsā go despite all of it.",
      sentences: [
        {
          id: 'qs-v6-c19-006',
          ar: 'لَكِنْ كَيْفَ يَذْهَبُ مُوسَى إِلَى فِرْعَوْنَ وَكَيْفَ يُوَاجِهُ الْجَبَّارَ.',
          en: 'But how could Mūsā go to Pharaoh, and how could he confront the tyrant?',
          tokens: [
            { surface: 'لَكِنْ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'could go' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يُوَاجِهُ', lemma: 'وَاجَهَ', pos: 'verb', features: 'impf.3ms', root: 'و ج ه', gloss: 'to confront; confront' },
            { surface: 'الْجَبَّارَ', lemma: 'جَبَّار', pos: 'noun', features: 'def.acc', gloss: 'the tyrant' },
          ],
        },
        {
          id: 'qs-v6-c19-007',
          ar: 'وَهُوَ الَّذِي قَتَلَ الْقِبْطِيَّ بِالْأَمْسِ وَمَا أَمْسِ بِبَعِيدٍ!',
          en: 'The very one who had killed the Copt just yesterday, and yesterday was not far off!',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'is the one who' },
            { surface: 'قَتَلَ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to kill; killed' },
            { surface: 'الْقِبْطِيَّ', lemma: 'قِبْطِيّ', pos: 'noun', features: 'def.acc', gloss: 'the Copt' },
            { surface: 'بِالْأَمْسِ', lemma: 'أَمْس', pos: 'noun', features: 'prep+def.gen', gloss: 'yesterday' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'أَمْسِ', lemma: 'أَمْس', pos: 'noun', features: 'nom', gloss: 'yesterday' },
            { surface: 'بِبَعِيدٍ', lemma: 'بَعِيد', pos: 'adj', features: 'prep+indef.gen', gloss: 'far off' },
          ],
        },
        {
          id: 'qs-v6-c19-008',
          ar: 'وَهُوَ الَّذِي خَرَجَ مِنْ مِصْرَ خَائِفاً يَتَرَقَّبُ، وَيَعْرِفُهُ الشُّرْطَةُ وَيَعْرِفُهُ أَهْلُ الْقَصْرِ.',
          en: 'The one who had left Egypt afraid and watchful, known to the police and known to the people of the palace!',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'is the one who' },
            { surface: 'خَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3ms', gloss: 'to leave; left' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'خَائِفاً', lemma: 'خَافَ', pos: 'adj', features: 'indef.acc', gloss: 'afraid' },
            { surface: 'يَتَرَقَّبُ', lemma: 'تَرَقَّبَ', pos: 'verb', features: 'impf.3ms', gloss: 'watchful' },
            { surface: 'وَيَعْرِفُهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'to know; and known to' },
            { surface: 'الشُّرْطَةُ', lemma: 'شُرْطَة', pos: 'noun', features: 'def.nom', gloss: 'the police' },
            { surface: 'وَيَعْرِفُهُ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'and known to' },
            { surface: 'أَهْلُ', lemma: 'أَهْل', pos: 'noun', features: 'constr.nom', gloss: 'the people of' },
            { surface: 'الْقَصْرِ', lemma: 'قَصْر', pos: 'noun', features: 'def.gen', gloss: 'the palace' },
          ],
        },
        {
          id: 'qs-v6-c19-009',
          ar: '﴿قَالَ رَبِّ إِنِّي قَتَلْتُ مِنْهُمْ نَفْساً فَأَخَافُ أَن يَقْتُلُونِ﴾.',
          en: '"He said: My Lord, indeed I have killed a soul among them, and I fear that they will kill me."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'قَتَلْتُ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.1s', gloss: 'have killed' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'نَفْساً', lemma: 'نَفْس', pos: 'noun', features: 'indef.acc', gloss: 'a soul' },
            { surface: 'فَأَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to fear; and I fear' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَقْتُلُونِ', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3mp+1s', gloss: 'will kill me' },
          ],
        },
        {
          id: 'qs-v6-c19-010',
          ar: 'وَذَكَرَ مُوسَى أَنَّ فِي لِسَانِهِ حُبْسَةً.',
          en: 'Mūsā mentioned that there was a stammer in his tongue.',
          tokens: [
            { surface: 'وَذَكَرَ', lemma: 'ذَكَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to mention; and mentioned' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'لِسَانِهِ', lemma: 'لِسَان', pos: 'noun', features: 'gen+3ms', root: 'ل س ن', gloss: 'his tongue' },
            { surface: 'حُبْسَةً', lemma: 'حُبْسَة', pos: 'noun', features: 'indef.acc', root: 'ح ب س', gloss: 'a stammer' },
          ],
        },
        {
          id: 'qs-v6-c19-011',
          ar: 'وَلَكِنَّ اللَّهَ كَانَ يَعْرِفُ ذَلِكَ كُلَّهُ وَيُرِيدُ أَنْ يَذْهَبَ مُوسَى رَغْمَ ذَلِكَ كُلِّهِ.',
          en: 'But Allah knew all of that, and willed that Mūsā go despite all of it.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', gloss: 'knowing' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'كُلَّهُ', lemma: 'كُلّ', pos: 'noun', features: 'acc+3ms', gloss: 'all of it' },
            { surface: 'وَيُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to will; and willing' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَذْهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'subj.3ms', gloss: 'go' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'رَغْمَ', lemma: 'رَغْمَ', pos: 'prep', features: 'prep', root: 'ر غ م', gloss: 'despite' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'كُلِّهِ', lemma: 'كُلّ', pos: 'noun', features: 'gen+3ms', gloss: 'all of it' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا هِيَ أَسْبَابُ خَوْفِ مُوسَى مِنَ الذَّهَابِ إِلَى فِرْعَوْنَ؟',
          options: ['أَنَّهُ قَتَلَ نَفْساً مِنْهُمْ وَفِي لِسَانِهِ حُبْسَةٌ', 'أَنَّهُ لَا يَعْرِفُ الطَّرِيقَ إِلَى مِصْرَ', 'أَنَّهُ كَانَ مَرِيضاً'],
          answer: 0,
          qEn: 'What were the reasons for Mūsā\'s fear of going to Pharaoh?',
          optionsEn: ['That he had killed a soul among them and had a stammer in his tongue', "That he didn't know the way to Egypt", 'That he was sick'],
        },
      ],
    },
    {
      en: '"And when your Lord called out to Mūsā: Go to the wrongdoing people -- the people of Pharaoh -- will they not fear? He said: My Lord, indeed I fear that they will deny me, and my chest will tighten and my tongue will not speak fluently, so send to Hārūn. And they have a charge against me, so I fear that they will kill me. He said: No indeed -- so go, both of you, with Our signs; indeed We are with you, listening. So go to Pharaoh and say: Indeed we are messengers of the Lord of the worlds -- send with us the Children of Israel."',
      sentences: [
        {
          id: 'qs-v6-c19-012',
          ar: '﴿وَإِذْ نَادَى رَبُّكَ مُوسَى أَنِ ائْتِ الْقَوْمَ الظَّالِمِينَ. قَوْمَ فِرْعَوْنَ أَلا يَتَّقُونَ﴾.',
          en: 'And when your Lord called out to Mūsā: Go to the wrongdoing people -- the people of Pharaoh -- will they not fear?',
          tokens: [
            { surface: 'وَإِذْ', lemma: 'إِذْ', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'نَادَى', lemma: 'نَادَى', pos: 'verb', features: 'perf.3ms', gloss: 'to call out; called out' },
            { surface: 'رَبُّكَ', lemma: 'رَبّ', pos: 'noun', features: 'nom+2ms', gloss: 'your Lord' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'to Mūsā' },
            { surface: 'أَنِ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: '[saying]' },
            { surface: 'ائْتِ', lemma: 'أَتَى', pos: 'verb', features: 'imp.2ms', gloss: 'to come, go; go' },
            { surface: 'الْقَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'الظَّالِمِينَ', lemma: 'ظَالِم', pos: 'adj', features: 'def.acc.pl', gloss: 'wrongdoing' },
            { surface: 'قَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'acc.constr', gloss: 'the people of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'أَلا', lemma: 'أَلَا', pos: 'part', features: 'part', gloss: 'will they not' },
            { surface: 'يَتَّقُونَ', lemma: 'اتَّقَى', pos: 'verb', features: 'impf.3mp', root: 'و ق ي', gloss: 'to fear, be mindful; fear' },
          ],
        },
        {
          id: 'qs-v6-c19-013',
          ar: '﴿قَالَ رَبِّ إِنِّي أَخَافُ أَن يُكَذِّبُونِ. وَيَضِيقُ صَدْرِي وَلا يَنطَلِقُ لِسَانِي فَأَرْسِلْ إِلَى هَارُونَ﴾.',
          en: 'He said: My Lord, indeed I fear that they will deny me, and my chest will tighten and my tongue will not speak fluently, so send to Hārūn.',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'nom+1s', gloss: 'my Lord' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s', gloss: 'fear' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُكَذِّبُونِ', lemma: 'كَذَّبَ', pos: 'verb', features: 'impf.3mp+1s', root: 'ك ذ ب', gloss: 'to deny; will deny me' },
            { surface: 'وَيَضِيقُ', lemma: 'ضَاقَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ض ي ق', gloss: 'to tighten; and will tighten' },
            { surface: 'صَدْرِي', lemma: 'صَدْر', pos: 'noun', features: 'nom+1s', gloss: 'my chest' },
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَنطَلِقُ', lemma: 'اِنْطَلَقَ', pos: 'verb', features: 'impf.3ms', root: 'ط ل ق', gloss: 'to speak fluently; will speak fluently' },
            { surface: 'لِسَانِي', lemma: 'لِسَان', pos: 'noun', features: 'nom+1s', gloss: 'my tongue' },
            { surface: 'فَأَرْسِلْ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to send; so send' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'هَارُونَ', lemma: 'هَارُون', pos: 'proper', features: 'gen', gloss: 'Hārūn' },
          ],
        },
        {
          id: 'qs-v6-c19-014',
          ar: '﴿وَلَهُمْ عَلَيَّ ذَنبٌ فَأَخَافُ أَن يَقْتُلُونِ﴾.',
          en: 'And they have a charge against me, so I fear that they will kill me.',
          tokens: [
            { surface: 'وَلَهُمْ', lemma: 'لِ', pos: 'prep', features: 'conj+prep+3mp', gloss: 'and they have' },
            { surface: 'عَلَيَّ', lemma: 'عَلَى', pos: 'prep', features: 'prep+1s', gloss: 'against me' },
            { surface: 'ذَنبٌ', lemma: 'ذَنْب', pos: 'noun', features: 'indef.nom', gloss: 'a charge, sin' },
            { surface: 'فَأَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'so I fear' },
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَقْتُلُونِ', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3mp+1s', gloss: 'will kill me' },
          ],
        },
        {
          id: 'qs-v6-c19-015',
          ar: '﴿قَالَ كَلَّا فَاذْهَبَا بِآيَاتِنَآ إِنَّا مَعَكُم مُّسْتَمِعُونَ﴾.',
          en: 'He said: No indeed -- so go, both of you, with Our signs; indeed We are with you, listening.',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'كَلَّا', lemma: 'كَلَّا', pos: 'part', features: 'part', gloss: 'no indeed' },
            { surface: 'فَاذْهَبَا', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+imp.2md', gloss: 'to go; so go, both of you' },
            { surface: 'بِآيَاتِنَآ', lemma: 'آيَة', pos: 'noun', features: 'prep+pl.gen+1p', gloss: 'with Our signs' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed We' },
            { surface: 'مَعَكُم', lemma: 'مَعَ', pos: 'prep', features: 'prep+2mp', gloss: 'with you' },
            { surface: 'مُّسْتَمِعُونَ', lemma: 'اِسْتَمَعَ', pos: 'noun', features: 'indef.nom.pl', gloss: 'listening' },
          ],
        },
        {
          id: 'qs-v6-c19-016',
          ar: '﴿فَأْتِيَا فِرْعَوْنَ فَقُولا إِنَّا رَسُولُ رَبِّ الْعَالَمِينَ﴾.',
          en: 'So go to Pharaoh and say: Indeed we are messengers of the Lord of the worlds --',
          tokens: [
            { surface: 'فَأْتِيَا', lemma: 'أَتَى', pos: 'verb', features: 'conj+imp.2md', gloss: 'to come, go to; so go to' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'فَقُولا', lemma: 'قَالَ', pos: 'verb', features: 'conj+imp.2md', root: 'ق و ل', gloss: 'to say; and say' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'رَسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'nom.constr', gloss: 'the messengers of' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'constr.gen', gloss: 'the Lord of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v6-c19-017',
          ar: '﴿أَن أَرْسِلْ مَعَنَا بَنِي إِسْرَائِيلَ﴾.',
          en: 'send with us the Children of Israel."',
          tokens: [
            { surface: 'أَن', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: '[saying]' },
            { surface: 'أَرْسِلْ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'imp.2ms', gloss: 'to send; send' },
            { surface: 'مَعَنَا', lemma: 'مَعَ', pos: 'prep', features: 'prep+1p', gloss: 'with us' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', root: 'ب ن و', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَ مُوسَى مِنْ رَبِّهِ خَوْفاً مِنْ عَدَمِ الطَّلَاقَةِ فِي الْكَلَامِ؟',
          options: ['أَنْ يُرْسِلَ مَعَهُ هَارُونَ', 'أَنْ يُؤَجِّلَ الرِّسَالَةَ', 'أَنْ يُرْسِلَ مَلَاكاً بَدَلاً مِنْهُ'],
          answer: 0,
          qEn: 'What did Mūsā ask his Lord for, fearing his lack of fluency in speech?',
          optionsEn: ['That He send Hārūn with him', 'That He delay the message', 'That He send an angel instead of him'],
        },
      ],
    },
    {
      en: 'Allah instructed Mūsā and Hārūn to be gentle and kind with Pharaoh. Allah loves kindness even with His enemies, up to a point, and so said, "So speak to him gently -- perhaps he will take heed or fear."',
      sentences: [
        {
          id: 'qs-v6-c19-018',
          ar: 'وَأَوْصَى اللَّهُ مُوسَى وَهَارُونَ بِاللِّينِ وَالرِّفْقِ مَعَ فِرْعَوْنَ.',
          en: 'Allah instructed Mūsā and Hārūn to be gentle and kind with Pharaoh.',
          tokens: [
            { surface: 'وَأَوْصَى', lemma: 'أَوْصَى', pos: 'verb', features: 'conj+perf.3ms', root: 'و ص ي', gloss: 'to instruct; and instructed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'acc', gloss: 'Mūsā' },
            { surface: 'وَهَارُونَ', lemma: 'هَارُون', pos: 'proper', features: 'conj+acc', gloss: 'and Hārūn' },
            { surface: 'بِاللِّينِ', lemma: 'لِين', pos: 'noun', features: 'prep+def.gen', root: 'ل ي ن', gloss: 'with gentleness' },
            { surface: 'وَالرِّفْقِ', lemma: 'رِفْق', pos: 'noun', features: 'conj+def.gen', root: 'ر ف ق', gloss: 'and kindness' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
          ],
        },
        {
          id: 'qs-v6-c19-019',
          ar: 'إِنَّ اللَّهَ يُحِبُّ الرِّفْقَ مَعَ أَعْدَائِهِ إِلَى حَدٍّ فَقَالَ: ﴿فَقُولَا لَهُ قَوْلاً لَّيِّناً لَّعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَى﴾.',
          en: 'Allah loves kindness even with His enemies, up to a point, and so said, "So speak to him gently -- perhaps he will take heed or fear."',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', gloss: 'loves' },
            { surface: 'الرِّفْقَ', lemma: 'رِفْق', pos: 'noun', features: 'def.acc', root: 'ر ف ق', gloss: 'kindness' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'أَعْدَائِهِ', lemma: 'عَدُوّ', pos: 'noun', features: 'pl.gen+3ms', gloss: 'His enemies' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'up to' },
            { surface: 'حَدٍّ', lemma: 'حَدّ', pos: 'noun', features: 'indef.gen', root: 'ح د د', gloss: 'a point' },
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'فَقُولَا', lemma: 'قَالَ', pos: 'verb', features: 'conj+imp.2md', root: 'ق و ل', gloss: 'to say; so speak' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'قَوْلاً', lemma: 'قَوْل', pos: 'noun', features: 'indef.acc', gloss: 'a saying' },
            { surface: 'لَّيِّناً', lemma: 'لَيِّن', pos: 'adj', features: 'indef.acc', root: 'ل ي ن', gloss: 'gentle' },
            { surface: 'لَّعَلَّهُ', lemma: 'لَعَلَّ', pos: 'part', features: 'part+3ms', gloss: 'perhaps he' },
            { surface: 'يَتَذَكَّرُ', lemma: 'تَذَكَّرَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ك ر', gloss: 'to take heed; take heed' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'يَخْشَى', lemma: 'خَشِيَ', pos: 'verb', features: 'impf.3ms', root: 'خ ش ي', gloss: 'to fear; fear' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ أَمَرَ اللَّهُ مُوسَى وَهَارُونَ أَنْ يُخَاطِبَا فِرْعَوْنَ؟',
          options: ['بِاللِّينِ وَالرِّفْقِ، قَوْلاً لَيِّناً لَعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَى', 'بِالشِّدَّةِ وَالْغِلْظَةِ مُنْذُ الْبِدَايَةِ', 'بِالصَّمْتِ التَّامِّ دُونَ كَلَامٍ'],
          answer: 0,
          qEn: 'How did Allah command Mūsā and Hārūn to address Pharaoh?',
          optionsEn: ['With gentleness and kindness, a gentle word so he might take heed or fear', 'With harshness and severity from the start', 'With complete silence and no speech'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'إِنَّ فِرْعَوْنَ عَلَا فِي الْأَرْضِ، إِنَّ فِرْعَوْنَ',
        post: 'فِي الْأَرْضِ.',
        en: 'Pharaoh had exalted himself in the land; Pharaoh had spread corruption in the land.',
        options: ['أَفْسَدَ', 'يُفْسِدُ', 'فَاسِدٌ', 'أَفْسَدُوا'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- parallels عَلَا exactly, matching the taught repeated-إِنَّ pattern.',
          'Imperfect -- wrong tense; the whole passage narrates completed past corruption.',
          'Adjective, not a verb -- wrong part of speech for this slot.',
          'Plural -- wrong; the subject فِرْعَوْنَ is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقُولَا لَهُ قَوْلاً',
        post: 'لَّعَلَّهُ يَتَذَكَّرُ أَوْ يَخْشَى.',
        en: 'So speak to him gently -- perhaps he will take heed or fear.',
        options: ['لَّيِّناً', 'لَّيِّنٌ', 'لَّيِّنٍ', 'الْلَّيِّنَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- adjective agreeing with قَوْلاً, matching the taught pattern.',
          'Nominative -- wrong case; it must agree with the accusative قَوْلاً.',
          'Genitive -- wrong case for the same reason.',
          'Definite -- wrong; قَوْلاً is indefinite, so its adjective must be too.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخَافُ مُوسَى أَن يَقْتُلُوهُ',
        pre: '',
        post: 'أَن يَقْتُلُوهُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخَافُ', 'يَخَافُ', 'تَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا, and the same form Mūsā himself uses in the Qur\'an citations (أَخَافُ).',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular / 3rd feminine singular -- wrong person.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُ مُوسَى أَن يَقْتُلُوهُ',
        pre: '',
        post: 'أَن يَقْتُلُوهُ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخَافُ', 'يَخَافُ', 'أَخَافُ', 'تَخَافُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular / 3rd feminine singular -- wrong person.',
        ],
      },
    ],
  },
};

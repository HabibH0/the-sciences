// قَصَصُ النَّبِيِّينَ, volume 9, chapter 15 (final chapter of the volume) --
// وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا. Printed pages 235 (from
// its own heading box, right after ch14's closing sentence) through 236,
// closing the volume with a triple-rosette divider -- nothing left to
// transcribe of Dāwūd and Sulaymān's story after this page. Transcribed by
// hand from the scan (vision OCR, 200dpi render) against
// ../CHAPTER-FORMAT.md.
//
// A closing polemical note: the Jews attributed to Sulaymān what does not
// befit an ordinary monotheist believer, let alone a Messenger-Prophet
// whom Allah had granted wisdom, honoured with prophethood, and
// distinguished with vicegerency -- namely magic, disbelief, appeasing
// polytheism, and confusion in monotheism because of his wives. Allah
// cleared him of all of it, quoting three āyāt: Sūrat al-Baqarah 2:102
// (Sulaymān did not disbelieve; it was the devils who taught people magic),
// and Sūrat Ṣād 38:30 and 38:40 (Allah's own gift of Sulaymān to Dāwūd,
// "an excellent servant, ever-turning back," and Sulaymān's own nearness
// and good return to his Lord).
//
// Grammar / lexical notes:
//   -- نِعْمَ (unit 014, "how excellent") is an exclamatory/praise verb
//      (فِعْلُ مَدْحٍ) with no ordinary conjugation; tagged pos verb,
//      features perf.3ms as the nearest documented approximation, since
//      the feature grammar has no dedicated atom for this construction.
//   -- Three separate āyāt (Baqarah 2:102, Ṣād 38:30, Ṣād 38:40) are each
//      wrapped in their own ﴿﴾ sentences, kept at or under nine tokens.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): مُؤْمِن، صَدْر، أَكْرَمَ،
//      كُفْر، شِرْك، سَبَب، زَوْج، اللَّه، سُلَيْمَان، دَاوُد، نَبِيّ، حِكْمَة، عَبْد،
//      أَوَّاب، رَبّ، عِنْدَ، قَالَ، عَلَّمَ، نَاس، ذَلِكَ، كُلّ، فِي، إِلَى
//      are all already taught and are NOT re-listed in newWords here.
//
// 18 new words (نَسَبَ، يَهُود، لَاقَ، مُوَحِّد، شَرَحَ، إِيمَان، مُرْسَل، شَرَّفَ،
// خِلَافَة، سِحْر، مُدَاهَنَة، اِضْطِرَاب، بَرَّأَ، وَهَبَ، نِعْمَ، زُلْفَى، حُسْن، مَآب).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch15',
  title: { ar: 'وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا', en: 'Sulaymān Did Not Disbelieve, But the Devils Disbelieved' },
  newWords: ['نَسَبَ', 'يَهُود', 'لَاقَ', 'مُوَحِّد', 'شَرَحَ', 'إِيمَان', 'مُرْسَل', 'شَرَّفَ', 'خِلَافَة', 'سِحْر', 'مُدَاهَنَة', 'اِضْطِرَاب', 'بَرَّأَ', 'وَهَبَ', 'نِعْمَ', 'زُلْفَى', 'حُسْن', 'مَآب'],
  lemmas: {
    نَسَبَ: { gloss: 'to attribute' },
    يَهُود: { gloss: 'the Jews' },
    لَاقَ: { gloss: 'to befit, suit' },
    مُوَحِّد: { gloss: 'a monotheist' },
    شَرَحَ: { gloss: 'to open, expand' },
    إِيمَان: { gloss: 'faith, belief' },
    مُرْسَل: { gloss: 'sent, a Messenger' },
    شَرَّفَ: { gloss: 'to honour, ennoble' },
    خِلَافَة: { gloss: 'vicegerency, succession' },
    سِحْر: { gloss: 'magic, sorcery' },
    مُدَاهَنَة: { gloss: 'appeasement, currying favour' },
    اِضْطِرَاب: { gloss: 'confusion, disorder' },
    بَرَّأَ: { gloss: 'to clear, absolve' },
    وَهَبَ: { gloss: 'to grant, bestow' },
    نِعْمَ: { gloss: 'how excellent (is)' },
    زُلْفَى: { gloss: 'nearness (to Allah)' },
    حُسْن: { gloss: 'a goodness, excellence' },
    مَآب: { gloss: 'a return, place of return' },
  },
  paragraphs: [
    {
      en: "The Jews attributed to him what does not befit an ordinary monotheist believer whose heart Allah has opened to faith, let alone a Messenger-Prophet whom Allah had granted wisdom, and honoured with prophethood, and distinguished with vicegerency -- so they attributed to him magic, disbelief, appeasing polytheism, and confusion in the matter of monotheism because of his wives. Allah cleared him of all of that, and said: \"Sulaymān did not disbelieve, but the devils disbelieved, teaching people magic.\" And He said: \"And We granted to Dāwūd, Sulaymān -- how excellent a servant! Indeed, he was one who turned back (to Allah).\" And He said: \"And indeed, for him is nearness with Us and a good place of return.\"",
      sentences: [
        {
          id: 'qs-v9-c15-001',
          ar: 'نَسَبَ إِلَيْهِ الْيَهُودُ مَا لَا يَلِيقُ بِمُؤْمِنٍ مُوَحِّدٍ شَرَحَ اللَّهُ صَدْرَهُ لِلْإِيمَانِ،',
          en: 'The Jews attributed to him what does not befit an ordinary monotheist believer whose heart Allah has opened to faith,',
          tokens: [
            { surface: 'نَسَبَ', lemma: 'نَسَبَ', pos: 'verb', features: 'perf.3ms', root: 'ن س ب', gloss: 'to attribute; attributed' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الْيَهُودُ', lemma: 'يَهُود', pos: 'noun', features: 'def.nom', gloss: 'the Jews' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَلِيقُ', lemma: 'لَاقَ', pos: 'verb', features: 'impf.3ms', root: 'ل ي ق', gloss: 'to befit; befits' },
            { surface: 'بِمُؤْمِنٍ', lemma: 'مُؤْمِن', pos: 'noun', features: 'prep+indef.gen', gloss: 'a believer' },
            { surface: 'مُوَحِّدٍ', lemma: 'مُوَحِّد', pos: 'adj', features: 'indef.gen', root: 'و ح د', gloss: 'monotheist' },
            { surface: 'شَرَحَ', lemma: 'شَرَحَ', pos: 'verb', features: 'perf.3ms', gloss: 'to open, expand; has opened' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'صَدْرَهُ', lemma: 'صَدْر', pos: 'noun', features: 'acc+3ms', gloss: 'his heart' },
            { surface: 'لِلْإِيمَانِ', lemma: 'إِيمَان', pos: 'noun', features: 'prep+def.gen', gloss: 'to faith' },
          ],
        },
        {
          id: 'qs-v9-c15-002',
          ar: 'فَضْلاً عَنْ نَبِيٍّ مُرْسَلٍ آتَاهُ اللَّهُ الْحِكْمَةَ،',
          en: 'let alone a Messenger-Prophet whom Allah had granted wisdom,',
          tokens: [
            { surface: 'فَضْلاً', lemma: 'فَضْل', pos: 'adv', features: 'indef.acc', gloss: 'let alone' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'نَبِيٍّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.gen', gloss: 'a Prophet' },
            { surface: 'مُرْسَلٍ', lemma: 'مُرْسَل', pos: 'adj', features: 'indef.gen', gloss: 'sent' },
            { surface: 'آتَاهُ', lemma: 'آتَى', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to give; gave him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'الْحِكْمَةَ', lemma: 'حِكْمَة', pos: 'noun', features: 'def.acc', gloss: 'wisdom' },
          ],
        },
        {
          id: 'qs-v9-c15-003',
          ar: 'وَأَكْرَمَهُ بِالنُّبُوَّةِ،',
          en: 'and honoured him with prophethood,',
          tokens: [
            { surface: 'وَأَكْرَمَهُ', lemma: 'أَكْرَمَ', pos: 'verb', features: 'conj+perf.3ms+3ms', gloss: 'to honour; and honoured him' },
            { surface: 'بِالنُّبُوَّةِ', lemma: 'نُبُوَّة', pos: 'noun', features: 'prep+def.gen', gloss: 'with prophethood' },
          ],
        },
        {
          id: 'qs-v9-c15-004',
          ar: 'وَشَرَّفَهُ بِالْخِلَافَةِ،',
          en: 'and distinguished him with vicegerency --',
          tokens: [
            { surface: 'وَشَرَّفَهُ', lemma: 'شَرَّفَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ش ر ف', gloss: 'to honour, ennoble; and honoured him' },
            { surface: 'بِالْخِلَافَةِ', lemma: 'خِلَافَة', pos: 'noun', features: 'prep+def.gen', root: 'خ ل ف', gloss: 'with vicegerency' },
          ],
        },
        {
          id: 'qs-v9-c15-005',
          ar: 'فَنَسَبُوا إِلَيْهِ السِّحْرَ وَالْكُفْرَ',
          en: 'so they attributed to him magic and disbelief,',
          tokens: [
            { surface: 'فَنَسَبُوا', lemma: 'نَسَبَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to attribute; so they attributed' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'السِّحْرَ', lemma: 'سِحْر', pos: 'noun', features: 'def.acc', gloss: 'the magic' },
            { surface: 'وَالْكُفْرَ', lemma: 'كُفْر', pos: 'noun', features: 'conj+def.acc', gloss: 'and the disbelief' },
          ],
        },
        {
          id: 'qs-v9-c15-006',
          ar: 'وَالْمُدَاهَنَةَ لِلشِّرْكِ',
          en: 'and appeasing polytheism,',
          tokens: [
            { surface: 'وَالْمُدَاهَنَةَ', lemma: 'مُدَاهَنَة', pos: 'noun', features: 'conj+def.acc', root: 'د ه ن', gloss: 'and the appeasement' },
            { surface: 'لِلشِّرْكِ', lemma: 'شِرْك', pos: 'noun', features: 'prep+def.gen', gloss: 'of polytheism' },
          ],
        },
        {
          id: 'qs-v9-c15-007',
          ar: 'وَالِاضْطِرَابَ فِي أَمْرِ التَّوْحِيدِ بِسَبَبِ أَزْوَاجِهِ،',
          en: 'and confusion in the matter of monotheism because of his wives.',
          tokens: [
            { surface: 'وَالِاضْطِرَابَ', lemma: 'اِضْطِرَاب', pos: 'noun', features: 'conj+def.acc', root: 'ض ر ب', gloss: 'and the confusion' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَمْرِ', lemma: 'أَمْر', pos: 'noun', features: 'constr.gen', gloss: 'the matter of' },
            { surface: 'التَّوْحِيدِ', lemma: 'تَوْحِيد', pos: 'noun', features: 'def.gen', gloss: 'monotheism' },
            { surface: 'بِسَبَبِ', lemma: 'سَبَب', pos: 'noun', features: 'prep+constr.gen', gloss: 'because of' },
            { surface: 'أَزْوَاجِهِ', lemma: 'زَوْج', pos: 'noun', features: 'pl.gen+3ms', gloss: 'his wives' },
          ],
        },
        {
          id: 'qs-v9-c15-008',
          ar: 'فَبَرَّأَهُ اللَّهُ مِنْ كُلِّ ذَلِكَ',
          en: 'Allah cleared him of all of that,',
          tokens: [
            { surface: 'فَبَرَّأَهُ', lemma: 'بَرَّأَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ب ر أ', gloss: 'to clear, absolve; and cleared him' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'all' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'of that' },
          ],
        },
        {
          id: 'qs-v9-c15-009',
          ar: 'فَقَالَ:',
          en: 'and said:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v9-c15-010',
          ar: '﴿وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا﴾',
          en: '"Sulaymān did not disbelieve, but the devils disbelieved,',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and did not' },
            { surface: 'كَفَرَ', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to disbelieve; disbelieved' },
            { surface: 'سُلَيْمَانُ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'nom', gloss: 'Sulaymān' },
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'الشَّيَاطِينَ', lemma: 'شَيْطَان', pos: 'noun', features: 'pl.acc', gloss: 'the devils' },
            { surface: 'كَفَرُوا', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3mp', gloss: 'to disbelieve; disbelieved' },
          ],
        },
        {
          id: 'qs-v9-c15-011',
          ar: '﴿يُعَلِّمُونَ النَّاسَ السِّحْرَ﴾.',
          en: 'teaching people magic."',
          tokens: [
            { surface: 'يُعَلِّمُونَ', lemma: 'عَلَّمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to teach; teaching' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'السِّحْرَ', lemma: 'سِحْر', pos: 'noun', features: 'def.acc', gloss: 'the magic' },
          ],
        },
        {
          id: 'qs-v9-c15-012',
          ar: 'وَقَالَ:',
          en: 'And He said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v9-c15-013',
          ar: '﴿وَوَهَبْنَا لِدَاوُودَ سُلَيْمَانَ﴾',
          en: '"And We granted to Dāwūd, Sulaymān --',
          tokens: [
            { surface: 'وَوَهَبْنَا', lemma: 'وَهَبَ', pos: 'verb', features: 'conj+perf.1p', root: 'و ه ب', gloss: 'to grant; and We granted' },
            { surface: 'لِدَاوُودَ', lemma: 'دَاوُد', pos: 'proper', features: 'prep+gen', gloss: 'to Dāwūd' },
            { surface: 'سُلَيْمَانَ', lemma: 'سُلَيْمَان', pos: 'proper', features: 'acc', gloss: 'Sulaymān' },
          ],
        },
        {
          id: 'qs-v9-c15-014',
          ar: '﴿نِعْمَ الْعَبْدُ إِنَّهُ أَوَّابٌ﴾.',
          en: 'how excellent a servant! Indeed, he was one who turned back (to Allah)."',
          tokens: [
            { surface: 'نِعْمَ', lemma: 'نِعْمَ', pos: 'verb', features: 'perf.3ms', gloss: 'how excellent (is)' },
            { surface: 'الْعَبْدُ', lemma: 'عَبْد', pos: 'noun', features: 'def.nom', gloss: 'the servant' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'أَوَّابٌ', lemma: 'أَوَّاب', pos: 'adj', features: 'indef.nom', gloss: 'ever-turning back' },
          ],
        },
        {
          id: 'qs-v9-c15-015',
          ar: 'وَقَالَ:',
          en: 'And He said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v9-c15-016',
          ar: '﴿وَإِنَّ لَهُ عِنْدَنَا لَزُلْفَى وَحُسْنَ مَآبٍ﴾.',
          en: '"And indeed, for him is nearness with Us and a good place of return."',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'عِنْدَنَا', lemma: 'عِنْدَ', pos: 'prep', features: 'prep+1p', gloss: 'with Us' },
            { surface: 'لَزُلْفَى', lemma: 'زُلْفَى', pos: 'noun', features: 'part+indef.nom', root: 'ز ل ف', gloss: 'surely nearness' },
            { surface: 'وَحُسْنَ', lemma: 'حُسْن', pos: 'noun', features: 'conj+acc.constr', gloss: 'and a good' },
            { surface: 'مَآبٍ', lemma: 'مَآب', pos: 'noun', features: 'indef.gen', root: 'أ و ب', gloss: 'place of return' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا نَسَبَ الْيَهُودُ إِلَى سُلَيْمَانَ؟',
          options: ['السِّحْرَ وَالْكُفْرَ وَالْمُدَاهَنَةَ لِلشِّرْكِ وَالِاضْطِرَابَ فِي التَّوْحِيدِ', 'الْكَذِبَ عَلَى النَّاسِ فِي التِّجَارَةِ', 'الْجُبْنَ فِي الْحُرُوبِ'],
          answer: 0,
          qEn: 'What did the Jews attribute to Sulaymān?',
          optionsEn: ['Magic, disbelief, appeasing polytheism, and confusion in monotheism', 'Lying to people in trade', 'Cowardice in wars'],
        },
        {
          q: 'كَيْفَ بَرَّأَ اللَّهُ سُلَيْمَانَ مِمَّا نُسِبَ إِلَيْهِ؟',
          options: ['بِقَوْلِهِ: وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا', 'بِإِرْسَالِ مَلَاكٍ يُدَافِعُ عَنْهُ', 'لَمْ يُبَرِّئْهُ اللَّهُ'],
          answer: 0,
          qEn: 'How did Allah clear Sulaymān of what was attributed to him?',
          optionsEn: ['By saying: "Sulaymān did not disbelieve, but the devils disbelieved"', 'By sending an angel to defend him', 'Allah did not clear him'],
        },
        {
          q: 'بِمَاذَا وَصَفَ اللَّهُ سُلَيْمَانَ فِي قَوْلِهِ نِعْمَ الْعَبْدُ؟',
          options: ['بِأَنَّهُ أَوَّابٌ وَلَهُ عِنْدَ اللَّهِ زُلْفَى وَحُسْنُ مَآبٍ', 'بِأَنَّهُ أَضْعَفُ الْأَنْبِيَاءِ', 'بِأَنَّهُ لَمْ يَكُنْ صَالِحاً'],
          answer: 0,
          qEn: 'How did Allah describe Sulaymān in saying "how excellent a servant"?',
          optionsEn: ['As one who turned back to Allah, with nearness to Him and a good place of return', 'As the weakest of the Prophets', 'As one who was not righteous'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ اللَّهُ: وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ',
        post: 'كَفَرُوا يُعَلِّمُونَ النَّاسَ السِّحْرَ.',
        en: 'Allah said: Sulaymān did not disbelieve, but the devils disbelieved, teaching people magic.',
        options: ['الشَّيَاطِينَ', 'الشَّيَاطِينُ', 'الشَّيَاطِينِ', 'شَيْطَانٌ'],
        answer: 0,
        rationales: [
          'Accusative -- the subject of لَكِنَّ (a sister of إِنَّ, which takes an accusative subject), matching the printed وَلَكِنَّ الشَّيَاطِينَ.',
          'Nominative -- wrong case; لَكِنَّ requires an accusative subject, like إِنَّ.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Singular, indefinite -- wrong number and definiteness; the printed word is plural and definite.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ اللَّهُ: وَوَهَبْنَا لِدَاوُودَ سُلَيْمَانَ نِعْمَ',
        post: 'إِنَّهُ أَوَّابٌ.',
        en: 'Allah said: And We granted to Dāwūd, Sulaymān -- how excellent a servant! Indeed, he was one who turned back.',
        options: ['الْعَبْدُ', 'الْعَبْدَ', 'الْعَبْدِ', 'عَبْدٌ'],
        answer: 0,
        rationales: [
          'Nominative, definite -- the subject of the praise-verb نِعْمَ, matching the printed نِعْمَ الْعَبْدُ.',
          'Accusative -- wrong case; the subject of نِعْمَ takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong; the subject of نِعْمَ is definite (or definite-equivalent) here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِنَّ لَهُ عِنْدَنَا لَزُلْفَى وَحُسْنَ',
        post: '.',
        en: 'And indeed, for him is nearness with Us and a good place of return.',
        options: ['مَآبٍ', 'مَآبٌ', 'مَآباً', 'الْمَآبُ'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- second term of the إضافة with حُسْنَ, matching the printed حُسْنَ مَآبٍ.',
          'Nominative -- wrong case; the second term of an إضافة is always genitive.',
          'Accusative -- wrong case for the same reason.',
          'Definite -- wrong; the printed word is indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَنْسِبُ الْخَطَأَ إِلَى نَفْسِي',
        pre: '',
        post: 'الْخَطَأَ إِلَى نَفْسِي',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَنْسِبُونَ', 'أَنْسِبُ', 'تَنْسِبُ', 'نَنْسِبُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '1st singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَشْرَحُ اللَّهُ صَدْرَ الْمُؤْمِنِ',
        pre: '',
        post: 'صَدْرَ الْمُؤْمِنِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَشْرَحُ', 'يَشْرَحُ', 'تَشْرَحُ', 'أَشْرَحُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; this is "we," not "you."',
          '1st singular -- wrong number; the target is plural نَحْنُ, not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'أَهَبُ الْمَالَ لِلْفَقِيرِ',
        pre: '',
        post: 'الْمَالَ لِلْفَقِيرِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَهَبُ', 'أَهَبُ', 'يَهَبُ', 'نَهَبُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '1st singular -- the base form, not shifted to "she."',
          '3rd masculine singular -- wrong gender; the target is "she," not "he."',
          '1st plural -- wrong person; the target is "she," not "we."',
        ],
      },
    ],
  },
};

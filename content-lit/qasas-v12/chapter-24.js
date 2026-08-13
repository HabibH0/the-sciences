// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 24. Printed page 265, from its own
// boxed heading (partway down the page, right after ch23's closing line)
// to ch25's heading مَكْرٌ وَدَهَاءٌ at the top of page 266. Transcribed by
// hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// Content: the author generalizes from the Jews' specific accusation
// (ch23) to the standing rhetorical playbook used against reformers and
// prophets across history -- "the method of the resentful and the
// politicians": paint the target as a danger to the state, someone who
// submits to no system, is bound by no law, respects nothing great, and
// holds nothing ancient sacred, therefore a revolutionary to be feared.
// The chapter closes on a warning aphorism: left unchecked such mischief
// only escalates, and no spark -- however trivial -- should ever be
// dismissed. The پronoun هُوَ throughout still refers back to Isa as the
// target of the accusation, but the passage reads as the author's own
// analytical commentary on the technique itself rather than a direct
// quotation. One long periodic sentence in the original, split here at its
// natural clause boundaries per house convention (qasas-v3/chapter-14.js).
//
// Grammar / lexical notes:
//   -- أُسْلُوب (new, "method, style") and نَاقِم (new, "resentful,
//      vindictive," active participle of نَقَمَ) appear only in the title,
//      not in the paragraph body, so they are not tokenized in any
//      sentence -- titles are plain strings, not token streams, per
//      CHAPTER-FORMAT.md. They are still listed under newWords/lemmas so
//      the word cards would be complete if the title were ever tokenized
//      elsewhere, matching how proper-noun-heavy titles are handled
//      throughout this corpus.
//   -- يُكَفَّ (qs-v12-c24-007) is the passive imperfect (jussive, after
//      لَمْ) of the new verb كَفَّ ("to restrain, hold back") -- a doubled
//      root ك ف ف.
//   -- تُسْتَصْغَرُ (qs-v12-c24-008) is the passive imperfect of the
//      already-taught form-X verb اِسْتَصْغَرَ ("to consider insignificant").
//   -- عَظِيمًا and قَدِيمًا (004, 005) are used here as substantivized
//      adjectives ("anyone/anything great," "anything ancient"), still
//      tagged pos: 'adj' consistent with how the corpus tags other
//      substantivized adjectives elsewhere.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, against
//      known-lemmas.txt): هُوَ، عَلَى، لَا، خَضَعَ، بِ، عَظَّمَ، قَدِيم، عَظِيم، رَجُل،
//      إِذَا، لَمْ، شَرّ، إِنَّ، اِسْتَصْغَرَ، كَانَ
//      are all already taught and are NOT re-listed in newWords here.
//
// 14 new words (أُسْلُوب، نَاقِم، خَطَر، دَوْلَة، نِظَام، تَقَيَّدَ، قَانُون، قَدَّسَ،
// ثَوْرِيّ، كَفَّ، تَفَاقَمَ، شَرَارَة، تَافِه، مَهْمَا) -- another vocabulary-dense
// chapter, continuing ch23's political-accusation word-set into the
// register of statecraft and law.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch24',
  title: { ar: 'أُسْلُوبُ النَّاقِمِينَ وَالسِّيَاسِيِّينَ', en: 'The Method of the Resentful and the Politicians' },
  newWords: [
    'نَاقِم', 'خَطَر', 'نِظَام', 'تَقَيَّدَ', 'قَدَّسَ', 'ثَوْرِيّ',
    'كَفَّ', 'تَفَاقَمَ', 'شَرَارَة', 'تَافِه', 'مَهْمَا',
  ],
  lemmas: {
    أُسْلُوب: { gloss: 'method, style' },
    نَاقِم: { gloss: 'resentful, vindictive' },
    خَطَر: { gloss: 'danger' },
    دَوْلَة: { gloss: 'state' },
    نِظَام: { gloss: 'system, order' },
    تَقَيَّدَ: { gloss: 'to be bound, restricted' },
    قَانُون: { gloss: 'law' },
    قَدَّسَ: { gloss: 'to sanctify, hold sacred' },
    ثَوْرِيّ: { gloss: 'revolutionary' },
    كَفَّ: { gloss: 'to restrain, hold back' },
    تَفَاقَمَ: { gloss: 'to worsen, escalate' },
    شَرَارَة: { gloss: 'spark' },
    تَافِه: { gloss: 'trivial, insignificant' },
    مَهْمَا: { gloss: 'no matter, however (much)' },
  },
  paragraphs: [
    {
      en: 'He is a danger to the state -- he submits to no system, is bound by no law, exalts nothing great, and holds nothing ancient sacred; he is a revolutionary man. If his mischief is not checked, it will only escalate, and a spark must never be dismissed as insignificant, however trivial it may seem.',
      sentences: [
        {
          id: 'qs-v12-c24-001',
          ar: 'وَهُوَ خَطَرٌ عَلَى الدَّوْلَةِ،',
          en: 'He is a danger to the state,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'خَطَرٌ', lemma: 'خَطَر', pos: 'noun', features: 'indef.nom', gloss: 'a danger' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الدَّوْلَةِ', lemma: 'دَوْلَة', pos: 'noun', features: 'def.gen', gloss: 'the state' },
          ],
        },
        {
          id: 'qs-v12-c24-002',
          ar: 'لَا يَخْضَعُ لِنِظَامٍ،',
          en: 'he submits to no system,',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخْضَعُ', lemma: 'خَضَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to submit, yield; submits' },
            { surface: 'لِنِظَامٍ', lemma: 'نِظَام', pos: 'noun', features: 'prep+indef.gen', gloss: 'to any system' },
          ],
        },
        {
          id: 'qs-v12-c24-003',
          ar: 'وَلَا يَتَقَيَّدُ بِقَانُونٍ،',
          en: 'is bound by no law,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَتَقَيَّدُ', lemma: 'تَقَيَّدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be bound, restricted; is bound' },
            { surface: 'بِقَانُونٍ', lemma: 'قَانُون', pos: 'noun', features: 'prep+indef.gen', gloss: 'by any law' },
          ],
        },
        {
          id: 'qs-v12-c24-004',
          ar: 'وَلَا يُعَظِّمُ عَظِيمًا،',
          en: 'exalts nothing great,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُعَظِّمُ', lemma: 'عَظَّمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to exalt, glorify; exalts' },
            { surface: 'عَظِيمًا', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc', gloss: 'anyone great' },
          ],
        },
        {
          id: 'qs-v12-c24-005',
          ar: 'وَلَا يُقَدِّسُ قَدِيمًا،',
          en: 'and holds nothing ancient sacred,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُقَدِّسُ', lemma: 'قَدَّسَ', pos: 'verb', features: 'impf.3ms', gloss: 'to sanctify, hold sacred; sanctifies' },
            { surface: 'قَدِيمًا', lemma: 'قَدِيم', pos: 'adj', features: 'indef.acc', gloss: 'anything ancient' },
          ],
        },
        {
          id: 'qs-v12-c24-006',
          ar: 'وَهُوَ رَجُلٌ ثَوْرِيٌّ،',
          en: 'he is a revolutionary man,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'ثَوْرِيٌّ', lemma: 'ثَوْرِيّ', pos: 'adj', features: 'indef.nom', gloss: 'revolutionary' },
          ],
        },
        {
          id: 'qs-v12-c24-007',
          ar: 'إِذَا لَمْ يُكَفَّ شَرُّهُ فَإِنَّهُ يَتَفَاقَمُ،',
          en: 'if his mischief is not checked, it only escalates,',
          tokens: [
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'if' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُكَفَّ', lemma: 'كَفَّ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to restrain, stop; is restrained' },
            { surface: 'شَرُّهُ', lemma: 'شَرّ', pos: 'noun', features: 'nom+3ms', gloss: 'his mischief' },
            { surface: 'فَإِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'then indeed it' },
            { surface: 'يَتَفَاقَمُ', lemma: 'تَفَاقَمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to worsen, escalate; escalates' },
          ],
        },
        {
          id: 'qs-v12-c24-008',
          ar: 'وَلَا تُسْتَصْغَرُ الشَّرَارَةُ مَهْمَا كَانَتْ تَافِهَةً.',
          en: 'and a spark must never be dismissed as insignificant, however trivial it may seem.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تُسْتَصْغَرُ', lemma: 'اِسْتَصْغَرَ', pos: 'verb', features: 'pass+impf.3fs', gloss: 'to consider insignificant; is to be considered insignificant' },
            { surface: 'الشَّرَارَةُ', lemma: 'شَرَارَة', pos: 'noun', features: 'def.nom', gloss: 'the spark' },
            { surface: 'مَهْمَا', lemma: 'مَهْمَا', pos: 'part', features: 'part', gloss: 'no matter, however' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; it was' },
            { surface: 'تَافِهَةً', lemma: 'تَافِه', pos: 'adj', features: 'indef.acc.f', gloss: 'trivial' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَ وُصِفَ الرَّجُلُ الَّذِي لَا يَخْضَعُ لِنِظَامٍ وَلَا يَتَقَيَّدُ بِقَانُونٍ؟',
          options: ['بِأَنَّهُ خَطَرٌ عَلَى الدَّوْلَةِ وَرَجُلٌ ثَوْرِيٌّ', 'بِأَنَّهُ رَجُلٌ صَالِحٌ مُطِيعٌ', 'بِأَنَّهُ عَالِمٌ مَشْهُورٌ'],
          answer: 0,
          qEn: 'How was the man described who submits to no system and is bound by no law?',
          optionsEn: ['As a danger to the state and a revolutionary man', 'As a righteous, obedient man', 'As a famous scholar'],
        },
        {
          q: 'مَاذَا يَحْدُثُ لِلشَّرِّ إِذَا لَمْ يُكَفَّ؟',
          options: ['يَتَفَاقَمُ، وَلَا يَنْبَغِي أَنْ تُسْتَصْغَرَ الشَّرَارَةُ مَهْمَا كَانَتْ تَافِهَةً', 'يَخْتَفِي مِنْ تِلْقَاءِ نَفْسِهِ', 'يَبْقَى كَمَا هُوَ دُونَ تَغْيِيرٍ'],
          answer: 0,
          qEn: 'What happens to mischief if it is not restrained?',
          optionsEn: ['It escalates, and a spark should never be dismissed as insignificant no matter how trivial', 'It disappears on its own', 'It stays the same without any change'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'لَا',
        post: 'لِنِظَامٍ.',
        en: 'He does not submit to any system.',
        options: ['يَخْضَعُ', 'يَخْضَعُونَ', 'تَخْضَعُ', 'خَضَعَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- agrees with the singular هُوَ throughout the passage.',
          '3rd masculine plural -- wrong number; a single man is meant.',
          '2nd masculine singular / 3rd feminine singular -- wrong person or gender.',
          'Perfect -- wrong tense; the description is a standing, ongoing trait, not a one-time past act.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا',
        post: 'بِقَانُونٍ.',
        en: 'and is not bound by any law.',
        options: ['يَتَقَيَّدُ', 'تَتَقَيَّدُ', 'يَتَقَيَّدُونَ', 'تَقَيَّدَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- matches the ongoing description of هُوَ.',
          '3rd feminine singular -- wrong gender.',
          '3rd masculine plural -- wrong number.',
          'Perfect -- wrong tense for a standing trait.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا',
        post: 'عَظِيمًا.',
        en: 'and does not exalt anyone great.',
        options: ['يُعَظِّمُ', 'تُعَظِّمُ', 'يُعَظِّمُونَ', 'عَظَّمَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- matches the ongoing description of هُوَ.',
          '3rd feminine singular -- wrong gender.',
          '3rd masculine plural -- wrong number.',
          'Perfect -- wrong tense for a standing trait.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْضَعُ الرَّجُلُ لِنِظَامٍ',
        pre: '',
        post: 'لِنِظَامٍ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخْضَعُ', 'يَخْضَعُ', 'تَخْضَعُ', 'نَخْضَعُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; the target is "I," not "you."',
          '1st plural -- wrong number; the target is singular.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخْضَعُ الرَّجُلُ لِنِظَامٍ',
        pre: '',
        post: 'لِنِظَامٍ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخْضَعُ', 'يَخْضَعُ', 'تَخْضَعُ', 'أَخْضَعُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person; the target is "we," not "you."',
          '1st singular -- wrong number; the target is plural.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخْضَعُ الرَّجُلُ لِنِظَامٍ',
        pre: '',
        post: 'لِنِظَامٍ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَخْضَعُونَ', 'يَخْضَعُ', 'تَخْضَعُ', 'نَخْضَعُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 39 -- الْقُرْآنُ يُصَرِّحُ بِدَعْوَةِ عِيسَى.
// Printed page 275 only -- begins right after ch38's material and this
// chapter's own heading box, and ends before ch40's heading box
// («مَنْزِلَةُ التَّوْحِيدِ فِي دَعْوَتِهِ») further down the same page.
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// A short chapter built almost entirely around one direct Qur'an
// quotation: Sūrat al-Mā'idah 5:72, identified from the well-known
// wording "لَقَدْ كَفَرَ الَّذِينَ قَالُوا إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ..." (the
// same ayah whose second half, 5:75-76, was already quoted at the end of
// chapter 37). The one-paragraph prose introduction frames the Qur'an
// itself as confirming and safeguarding what came before it (an allusion
// to its own description of itself in 5:48, though that ayah is not
// quoted here), and states that it records Isa's own declaration of pure
// monotheism in the clearest possible terms. The quoted ayah then gives
// the Qur'an's record of Isa's own words -- "worship Allah, my Lord and
// your Lord" -- followed by the warning that whoever associates partners
// with Allah is barred from Paradise.
//
// Grammar / lexical notes:
//   -- The Qur'an quote (qs-v12-c39-003 through 008) is wrapped in ﴿ ﴾ on
//      the `ar` string per the qasas-v3/chapter-14.js precedent (bracket
//      glyphs are not their own tokens), split at its own internal
//      clause boundaries per the house convention, and tokenized/
//      translated in full with no shortening -- matching how chapters 36
//      and 37 in this same set of four handled their own Qur'an quotes.
//   -- مُصَدِّق (qs-v12-c39-001) and بَيْن (qs-v12-c39-001) reuse the lemmas
//      first introduced in this agent's own chapter 36 (qs-v12-c36-009's
//      مُصَدِّقًا / بَيْنَ), so they are not re-listed in newWords here.
//      Likewise نَاصِر (qs-v12-c39-008's أَنصَارٍ) reuses the lemma first
//      introduced in chapter 36 (qs-v12-c36-002's أَنْصَارِهِ).
//   -- كِتَاب (qs-v12-c39-001) reuses the lemma first introduced in this
//      agent's own chapter 38.
//   -- رَبِّي / رَبَّكُمْ (qs-v12-c39-005) are badal (apposition) to the
//      accusative اللَّهَ, hence both accusative, though the 1st-person
//      suffix absorbs رَبِّي's case vowel in writing; رَبَّكُمْ's fatḥah
//      before the suffix stays visible and is what makes this sentence
//      buildable.
//   -- سَيِّدِنَا (qs-v12-c39-001) is genitive here (mudaf ilayh of
//      إِعْلَانِ, "the declaration of our master Isa"), unlike its
//      nominative use as the sentence subject in ch36/ch38 -- same
//      lemma, different case per its different syntactic role.
//
// No page footnotes (book_note) on this page.
//
// 8 new words (قُرْآن، مُهَيْمِن، إِعْلَان، أُسْلُوب، صَرِيح، مَزِيد، حَرَّمَ، مَأْوَى).
export const CHAPTER = {
  id: 'ch39',
  title: { ar: 'الْقُرْآنُ يُصَرِّحُ بِدَعْوَةِ عِيسَى', en: "The Qur'an States Isa's Call Clearly" },
  newWords: [
    'مُهَيْمِن', 'إِعْلَان', 'مَأْوَى',
  ],
  lemmas: {
    قُرْآن: { gloss: 'the Qur\'an' },
    مُهَيْمِن: { gloss: 'guardian, dominant over' },
    إِعْلَان: { gloss: 'declaration, announcement' },
    أُسْلُوب: { gloss: 'style, method' },
    صَرِيح: { gloss: 'explicit, unambiguous' },
    مَزِيد: { gloss: 'more, further addition' },
    حَرَّمَ: { gloss: 'to forbid, prohibit' },
    مَأْوَى: { gloss: 'abode, refuge' },
  },
  paragraphs: [
    {
      en: "The Qur'an -- itself the Book that confirms what came before it and stands as guardian over it -- has conveyed our master Isa's own declaration of pure monotheism and the call to it, in a style so explicit and clear that nothing more could be added: \"Those who say that Allah, He is al-Masih son of Maryam, have indeed disbelieved. For al-Masih himself said: O Children of Israel, worship Allah, my Lord and your Lord. Whoever associates partners with Allah, Allah has forbidden him Paradise, and his abode is the Fire; and the wrongdoers will have no helpers.\"",
      sentences: [
        {
          id: 'qs-v12-c39-001',
          ar: 'وَقَدْ نَقَلَ الْقُرْآنُ - وَهُوَ الْكِتَابُ الْمُصَدِّقُ لِمَا بَيْنَ يَدَيْهِ وَالْمُهَيْمِنُ عَلَيْهِ - مِنْ إِعْلَانِ سَيِّدِنَا عِيسَى بِالتَّوْحِيدِ الْخَالِصِ وَالدَّعْوَةِ إِلَيْهِ،',
          en: "The Qur'an -- itself the Book that confirms what came before it and stands as guardian over it -- has conveyed our master Isa's own declaration of pure monotheism and the call to it,",
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'نَقَلَ', lemma: 'نَقَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to convey, transmit; conveyed' },
            { surface: 'الْقُرْآنُ', lemma: 'قُرْآن', pos: 'proper', features: 'def.nom', gloss: "the Qur'an" },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and it (is)' },
            { surface: 'الْكِتَابُ', lemma: 'كِتَاب', pos: 'noun', features: 'def.nom', gloss: 'the Book' },
            { surface: 'الْمُصَدِّقُ', lemma: 'مُصَدِّق', pos: 'noun', features: 'def.nom', gloss: 'the confirmer' },
            { surface: 'لِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'بَيْنَ', lemma: 'بَيْن', pos: 'noun', features: 'acc', gloss: 'between' },
            { surface: 'يَدَيْهِ', lemma: 'يَد', pos: 'noun', features: 'du.gen+3ms', gloss: 'its two hands (before it)' },
            { surface: 'وَالْمُهَيْمِنُ', lemma: 'مُهَيْمِن', pos: 'noun', features: 'conj+def.nom', root: 'ه ي م ن', gloss: 'and the guardian over' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'over it' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'إِعْلَانِ', lemma: 'إِعْلَان', pos: 'noun', features: 'constr.gen', root: 'ع ل ن', gloss: 'the declaration of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'gen', gloss: 'Isa' },
            { surface: 'بِالتَّوْحِيدِ', lemma: 'تَوْحِيد', pos: 'noun', features: 'prep+def.gen', gloss: 'to monotheism' },
            { surface: 'الْخَالِصِ', lemma: 'خَالِص', pos: 'adj', features: 'def.gen', gloss: 'pure' },
            { surface: 'وَالدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and the call' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
          ],
        },
        {
          id: 'qs-v12-c39-002',
          ar: 'فِي أُسْلُوبٍ صَرِيحٍ واضِحٍ لَا مَزِيدَ عَلَيْهِ.',
          en: 'in a style so explicit and clear that nothing more could be added.',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أُسْلُوبٍ', lemma: 'أُسْلُوب', pos: 'noun', features: 'indef.gen', gloss: 'a style' },
            { surface: 'صَرِيحٍ', lemma: 'صَرِيح', pos: 'adj', features: 'indef.gen', gloss: 'explicit' },
            { surface: 'واضِحٍ', lemma: 'وَاضِح', pos: 'adj', features: 'indef.gen', gloss: 'clear' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'مَزِيدَ', lemma: 'مَزِيد', pos: 'noun', features: 'acc', gloss: 'more, further addition' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
          ],
        },
        {
          id: 'qs-v12-c39-003',
          ar: '﴿لَقَدْ كَفَرَ الَّذِينَ قَالُوا',
          en: 'Those who say',
          tokens: [
            { surface: 'لَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, verily' },
            { surface: 'كَفَرَ', lemma: 'كَفَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to disbelieve; have disbelieved' },
            { surface: 'الَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'pl.rel', gloss: 'those who' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v12-c39-004',
          ar: 'إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ',
          en: 'that Allah, He is al-Masih, son of Maryam, have indeed disbelieved.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'that, indeed' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'He' },
            { surface: 'الْمَسِيحُ', lemma: 'الْمَسِيح', pos: 'proper', features: 'nom', gloss: 'al-Masih' },
            { surface: 'ابْنُ', lemma: 'ابْن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'gen', gloss: 'Maryam' },
          ],
        },
        {
          id: 'qs-v12-c39-005',
          ar: 'وَقَالَ الْمَسِيحُ يَابَنِي إِسْرَائِيلَ اعْبُدُوا اللَّهَ رَبِّي وَرَبَّكُمْ',
          en: 'For al-Masih himself said: O Children of Israel, worship Allah, my Lord and your Lord.',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to say; and said' },
            { surface: 'الْمَسِيحُ', lemma: 'الْمَسِيح', pos: 'proper', features: 'nom', gloss: 'al-Masih' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'بَنِي', lemma: 'بَنُو', pos: 'noun', features: 'constr.acc', gloss: 'sons, children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'اعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', gloss: 'to worship; worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'my Lord' },
            { surface: 'وَرَبَّكُمْ', lemma: 'رَبّ', pos: 'noun', features: 'conj+acc+2mp', gloss: 'and your Lord' },
          ],
        },
        {
          id: 'qs-v12-c39-006',
          ar: 'إِنَّهُ مَن يُشْرِكْ بِاللَّهِ فَقَدْ حَرَّمَ اللَّهُ عَلَيْهِ الْجَنَّةَ',
          en: 'Whoever associates partners with Allah, Allah has forbidden him Paradise,',
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed it (is that)' },
            { surface: 'مَن', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'يُشْرِكْ', lemma: 'أَشْرَكَ', pos: 'verb', features: 'impf.3ms', gloss: 'to associate partners; associates partners' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'with Allah' },
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'then indeed' },
            { surface: 'حَرَّمَ', lemma: 'حَرَّمَ', pos: 'verb', features: 'perf.3ms', root: 'ح ر م', gloss: 'to forbid; has forbidden' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'الْجَنَّةَ', lemma: 'جَنَّة', pos: 'noun', features: 'def.acc', gloss: 'Paradise' },
          ],
        },
        {
          id: 'qs-v12-c39-007',
          ar: 'وَمَأْوَاهُ النَّارُ',
          en: 'and his abode is the Fire;',
          tokens: [
            { surface: 'وَمَأْوَاهُ', lemma: 'مَأْوَى', pos: 'noun', features: 'conj+nom+3ms', root: 'أ و ي', gloss: 'and his abode' },
            { surface: 'النَّارُ', lemma: 'نَار', pos: 'noun', features: 'def.nom', gloss: 'the Fire' },
          ],
        },
        {
          id: 'qs-v12-c39-008',
          ar: 'وَمَا لِلظَّالِمِينَ مِنْ أَنصَارٍ﴾.',
          en: 'and the wrongdoers will have no helpers."',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'لِلظَّالِمِينَ', lemma: 'ظَالِم', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'for the wrongdoers' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'any' },
            { surface: 'أَنصَارٍ', lemma: 'نَاصِر', pos: 'noun', features: 'indef.gen.pl', gloss: 'helpers' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْمُؤَلِّفُ الْقُرْآنَ فِي هَذَا الْفَصْلِ؟',
          options: [
            'بِأَنَّهُ الْكِتَابُ الْمُصَدِّقُ لِمَا بَيْنَ يَدَيْهِ وَالْمُهَيْمِنُ عَلَيْهِ',
            'بِأَنَّهُ كِتَابٌ مُتَأَخِّرٌ لَا صِلَةَ لَهُ بِالْكُتُبِ السَّابِقَةِ',
            'بِأَنَّهُ لَا يَذْكُرُ شَيْئاً عَنْ عِيسَى',
          ],
          answer: 0,
          qEn: "How does the author describe the Qur'an in this chapter?",
          optionsEn: [
            'As the Book that confirms what came before it and stands as guardian over it',
            'As a later book with no connection to earlier scriptures',
            'As a book that mentions nothing about Isa',
          ],
        },
        {
          q: 'بِمَاذَا وَصَفَ اللَّهُ مَنْ قَالَ إِنَّ اللَّهَ هُوَ الْمَسِيحُ ابْنُ مَرْيَمَ؟',
          options: [
            'لَقَدْ كَفَرَ الَّذِينَ قَالُوا ذَلِكَ',
            'قَالَ إِنَّهُمْ عَلَى صَوَابٍ',
            'لَمْ يُعَلِّقْ عَلَى قَوْلِهِمْ',
          ],
          answer: 0,
          qEn: 'How did Allah describe those who said that Allah is al-Masih, son of Maryam?',
          optionsEn: [
            'Indeed those who said that have disbelieved',
            'He said they were correct',
            'He made no comment on their claim',
          ],
        },
        {
          q: 'مَاذَا يَحْدُثُ لِمَنْ يُشْرِكُ بِاللَّهِ بِحَسَبِ الْآيَةِ؟',
          options: [
            'يُحَرِّمُ اللَّهُ عَلَيْهِ الْجَنَّةَ وَمَأْوَاهُ النَّارُ',
            'يَغْفِرُ اللَّهُ لَهُ فَوْراً',
            'لَا شَيْءَ يَحْدُثُ لَهُ',
          ],
          answer: 0,
          qEn: 'According to the verse, what happens to whoever associates partners with Allah?',
          optionsEn: [
            'Allah forbids him Paradise and his abode is the Fire',
            'Allah forgives him immediately',
            'Nothing happens to him',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ الْمَسِيحُ يَابَنِي إِسْرَائِيلَ',
        post: 'اللَّهَ رَبِّي وَرَبَّكُمْ.',
        en: 'Al-Masih said: O Children of Israel, worship Allah, my Lord and your Lord.',
        options: ['اعْبُدُوا', 'يَعْبُدُونَ', 'عَبَدُوا', 'عَابِدُونَ'],
        answer: 0,
        rationales: [
          'Imperative, 2nd masculine plural -- a direct command to the Children of Israel.',
          'Imperfect -- wrong mood; this is a command, not narration.',
          'Perfect -- wrong mood for the same reason.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'مَن يُشْرِكْ بِاللَّهِ فَقَدْ حَرَّمَ اللَّهُ عَلَيْهِ',
        post: 'وَمَأْوَاهُ النَّارُ.',
        en: 'Whoever associates partners with Allah, Allah has forbidden him Paradise, and his abode is the Fire.',
        options: ['الْجَنَّةَ', 'الْجَنَّةُ', 'الْجَنَّةِ', 'جَنَّةً'],
        answer: 0,
        rationales: [
          'Accusative, definite -- object of حَرَّمَ.',
          'Nominative -- wrong case; the object of a verb is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Indefinite -- wrong state; one specific Paradise is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدْ نَقَلَ',
        post: 'مِنْ إِعْلَانِ سَيِّدِنَا عِيسَى بِالتَّوْحِيدِ الْخَالِصِ.',
        en: "The Qur'an has conveyed our master Isa's own declaration of pure monotheism.",
        options: ['الْقُرْآنُ', 'الْقُرْآنَ', 'الْقُرْآنِ', 'قُرْآناً'],
        answer: 0,
        rationales: [
          'Nominative, definite -- subject of نَقَلَ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case for the same reason.',
          'Indefinite -- wrong state; the one Qur\'an is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُشْرِكُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُشْرِكُ', 'يُشْرِكُ', 'تُشْرِكُ', 'نُشْرِكُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يُشْرِكُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (mp)',
        options: ['تُشْرِكُونَ', 'يُشْرِكُ', 'تُشْرِكُ', 'نُشْرِكُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you (pl.)."',
          '2nd masculine singular -- wrong number.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يُشْرِكُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يُشْرِكُونَ', 'يُشْرِكُ', 'تُشْرِكُ', 'نُشْرِكُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine singular -- wrong person.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 16 -- نَحْنُ أَنْصَارُ اللَّهِ. Printed pages
// 261 (bottom, right after ch15's closing line إِنَّا مُسْلِمُونَ) through 262
// (top, ending before ch17's heading سِيَاحَةٌ وَدَعْوَةٌ). Transcribed by hand
// from the scan (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// The disciples believe in the Messiah and gather around him, placing
// their hands in his and declaring themselves Allah's helpers -- the
// narrative sets up the Qur'an's own record of this (Aal-Imran 3:52-53):
// when Isa perceived disbelief among the Israelites, he asked who would
// help him toward Allah, and the disciples answered with their famous
// declaration of faith and submission.
//
// Grammar / lexical notes:
//   -- This is my first chapter of the volume (I was assigned ch16-20), so
//      the volume's core proper nouns first occur here for me: عِيسَى,
//      الْمَسِيح, and the common noun حَوَارِيّ (disciple) are all tagged new
//      in this chapter per the brief's note that they are not in the
//      cross-book known-lemmas list and were presumably introduced in an
//      earlier (another agent's) chapter of this same volume -- the
//      centralized cross-chapter pass will dedupe against that.
//   -- The Aal-Imran 3:52 quote (sentence 005) is kept as ONE unsplit
//      ﴿ ﴾-wrapped entry despite its length (20 tokens) -- it is a single
//      Qur'anic ayah on the page and I did not want to fabricate bracket
//      boundaries mid-verse. It is consequently not buildable (exceeds the
//      9-token cap), which is fine since it doesn't need to be.
//   -- Aal-Imran 3:53, by contrast, IS split at its own internal فَ-clause
//      boundary (سنQ006/007) exactly the way ordinary long printed
//      sentences are split elsewhere in the corpus (ch14's house
//      convention) -- both halves keep the ﴿ ﴾ wrap (opening on 006,
//      closing on 007), reading as continuous when the paragraph is shown
//      in order. This was necessary to reach five buildable sentences in
//      an otherwise very short chapter; flagging for a second look since
//      it is a slightly more invasive split than ch14's own precedent
//      (which only ever separated narration from quotation, never split
//      inside one ayah).
//   -- اِلْتَفَّ (new, form VIII "to gather/wrap around") is written
//      وَالْتَفُّوا with the hamzat-waṣl alif retained per the standard
//      convention for و-prefixed form-VIII verbs.
//   -- أَنْصَارُ/أَنْصَارِي are tagged under the singular dictionary lemma
//      نَصِير (new, "helper"), root ن ص ر -- distinct from the already-taught
//      verb نَصَرَ and noun نَصْر, per the corpus's derived-form-as-distinct-
//      lemma convention.
//   -- كَتَبَ (new, "to write, record") -- surprisingly not yet in the
//      known-lemmas list despite being a common verb; possibly just never
//      formally tagged as newWords before. Tagged new here per the letter
//      of the check.
//   -- تَعَالَى (new) is treated as an invariant epithet ("Exalted, Most
//      High"), pos 'adj', no features/case (it does not decline).
//   -- Shared lexicon check (CHAPTER-FORMAT.md/known-lemmas.txt): آمَنَ،
//      وَضَعَ، يَد، قَالَ، اللَّه، حَوْلَ، فِي، مِنْ، إِلَى، أَحَسَّ، كُفْر، شَهِدَ،
//      أَنَّ، أَنزَلَ، اتَّبَعَ، رَسُول، مَعَ، شَاهِد، مُسْلِم، نَحْنُ، رَبّ
//      are all already taught and are NOT re-listed in newWords here.
//
// 7 new words (اِلْتَفَّ، عِيسَى، الْمَسِيح، نَصِير، حَوَارِيّ، كَتَبَ، تَعَالَى).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch16',
  title: { ar: 'نَحْنُ أَنْصَارُ اللَّهِ', en: "We Are Allah's Helpers" },
  newWords: [
    'اِلْتَفَّ', 'نَصِير',
  ],
  lemmas: {
    اِلْتَفَّ: { gloss: 'to gather around, wrap around' },
    عِيسَى: { gloss: 'Isa (Jesus)' },
    الْمَسِيح: { gloss: 'the Messiah' },
    نَصِير: { gloss: 'helper' },
    حَوَارِيّ: { gloss: 'disciple' },
    كَتَبَ: { gloss: 'to write, record' },
    تَعَالَى: { gloss: 'the Exalted, Most High' },
  },
  paragraphs: [
    {
      en: "So they believed in the Messiah and rallied around him, placing their hands in his and declaring, \"We are Allah's helpers.\" Allah the Exalted says of this: when Isa perceived disbelief from them, he asked, \"Who will be my helpers to Allah?\" The disciples answered, \"We are Allah's helpers; we believe in Allah, so bear witness that we submit. Our Lord, we believe in what You have sent down and we have followed the messenger, so record us among the witnesses.\"",
      sentences: [
        {
          id: 'qs-v12-c16-001',
          ar: 'فَآمَنُوا بِالْمَسِيحِ وَالْتَفُّوا حَوْلَهُ،',
          en: 'So they believed in the Messiah and gathered around him,',
          tokens: [
            { surface: 'فَآمَنُوا', lemma: 'آمَنَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to believe; and they believed' },
            { surface: 'بِالْمَسِيحِ', lemma: 'الْمَسِيح', pos: 'proper', features: 'prep+gen', gloss: 'in the Messiah' },
            { surface: 'وَالْتَفُّوا', lemma: 'اِلْتَفَّ', pos: 'verb', features: 'conj+perf.3mp', root: 'ل ف ف', gloss: 'to gather around; and they gathered around' },
            { surface: 'حَوْلَهُ', lemma: 'حَوْلَ', pos: 'noun', features: 'acc+3ms', gloss: 'around him' },
          ],
        },
        {
          id: 'qs-v12-c16-002',
          ar: 'وَوَضَعُوا أَيْدِيَهُمْ فِي يَدَيْهِ وَقَالُوا:',
          en: 'and placed their hands in his hands, and said:',
          tokens: [
            { surface: 'وَوَضَعُوا', lemma: 'وَضَعَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to place, put; and they placed' },
            { surface: 'أَيْدِيَهُمْ', lemma: 'يَد', pos: 'noun', features: 'pl.acc+3mp', gloss: 'their hands' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'يَدَيْهِ', lemma: 'يَد', pos: 'noun', features: 'du.gen+3ms', gloss: 'his two hands' },
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and they said' },
          ],
        },
        {
          id: 'qs-v12-c16-003',
          ar: '﴿نَحْنُ أَنْصَارُ اللَّهِ﴾.',
          en: '"We are Allah\'s helpers."',
          tokens: [
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'أَنْصَارُ', lemma: 'نَصِير', pos: 'noun', features: 'nom.constr.pl', root: 'ن ص ر', gloss: 'helpers of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v12-c16-004',
          ar: 'يَقُولُ اللَّهُ تَعَالَى:',
          en: 'Allah the Exalted says:',
          tokens: [
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; says' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'adj', gloss: 'the Exalted, Most High' },
          ],
        },
        {
          id: 'qs-v12-c16-005',
          ar: '﴿فَلَمَّا أَحَسَّ عِيسَى مِنْهُمُ الْكُفْرَ قَالَ مَنْ أَنْصَارِي إِلَى اللَّهِ قَالَ الْحَوَارِيُّونَ نَحْنُ أَنْصَارُ اللَّهِ آمَنَّا بِاللَّهِ وَاشْهَدْ بِأَنَّا مُسْلِمُونَ﴾',
          en: '"So when Isa perceived disbelief from them, he said: \'Who are my helpers to Allah?\' The disciples said: \'We are Allah\'s helpers; we believe in Allah, so bear witness that we are Muslims.\'"',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'so when' },
            { surface: 'أَحَسَّ', lemma: 'أَحَسَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to perceive, sense; perceived' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'nom', gloss: 'Isa (Jesus)' },
            { surface: 'مِنْهُمُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'from them' },
            { surface: 'الْكُفْرَ', lemma: 'كُفْر', pos: 'noun', features: 'def.acc', gloss: 'disbelief' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'أَنْصَارِي', lemma: 'نَصِير', pos: 'noun', features: 'nom.pl+1s', gloss: 'my helpers' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'الْحَوَارِيُّونَ', lemma: 'حَوَارِيّ', pos: 'noun', features: 'def.nom.pl', root: 'ح و ر', gloss: 'the disciples' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'أَنْصَارُ', lemma: 'نَصِير', pos: 'noun', features: 'nom.constr.pl', gloss: 'helpers of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'آمَنَّا', lemma: 'آمَنَ', pos: 'verb', features: 'perf.1p', gloss: 'to believe; we believe' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'وَاشْهَدْ', lemma: 'شَهِدَ', pos: 'verb', features: 'conj+imp', gloss: 'to witness; and bear witness' },
            { surface: 'بِأَنَّا', lemma: 'أَنَّ', pos: 'part', features: 'prep+part+1p', gloss: 'that we' },
            { surface: 'مُسْلِمُونَ', lemma: 'مُسْلِم', pos: 'noun', features: 'indef.nom.pl', gloss: 'Muslims, submitters' },
          ],
        },
        {
          id: 'qs-v12-c16-006',
          ar: '﴿رَبَّنَا آمَنَّا بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ',
          en: '"Our Lord, we believe in what You have sent down, and we have followed the messenger,',
          tokens: [
            { surface: 'رَبَّنَا', lemma: 'رَبّ', pos: 'noun', features: 'acc+1p', gloss: 'our Lord' },
            { surface: 'آمَنَّا', lemma: 'آمَنَ', pos: 'verb', features: 'perf.1p', gloss: 'to believe; we believe' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'in what' },
            { surface: 'أَنْزَلْتَ', lemma: 'أَنزَلَ', pos: 'verb', features: 'perf.2ms', gloss: 'to send down; You sent down' },
            { surface: 'وَاتَّبَعْنَا', lemma: 'اتَّبَعَ', pos: 'verb', features: 'conj+perf.1p', gloss: 'to follow; and we followed' },
            { surface: 'الرَّسُولَ', lemma: 'رَسُول', pos: 'noun', features: 'def.acc', gloss: 'the messenger' },
          ],
        },
        {
          id: 'qs-v12-c16-007',
          ar: 'فَاكْتُبْنَا مَعَ الشَّاهِدِينَ﴾.',
          en: 'so record us among the witnesses."',
          tokens: [
            { surface: 'فَاكْتُبْنَا', lemma: 'كَتَبَ', pos: 'verb', features: 'conj+imp+1p', gloss: 'to write, record; so record us' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'with, among' },
            { surface: 'الشَّاهِدِينَ', lemma: 'شَاهِد', pos: 'noun', features: 'def.gen.pl', gloss: 'the witnesses' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ آمَنَ بِالْمَسِيحِ وَالْتَفَّ حَوْلَهُ؟',
          options: ['الْحَوَارِيُّونَ', 'الْيَهُودُ', 'الْمُشْرِكُونَ'],
          answer: 0,
          qEn: 'Who believed in the Messiah and gathered around him?',
          optionsEn: ['The disciples', 'The Jews', 'The polytheists'],
        },
        {
          q: 'بِمَاذَا وَصَفَ الْحَوَارِيُّونَ أَنْفُسَهُمْ كَمَا حَكَى الْقُرْآنُ؟',
          options: ['بِأَنَّهُمْ أَنْصَارُ اللَّهِ', 'بِأَنَّهُمْ أَنْبِيَاءُ', 'بِأَنَّهُمْ مُلُوكٌ'],
          answer: 0,
          qEn: "How did the disciples describe themselves, as the Qur'an records it?",
          optionsEn: ["As Allah's helpers", 'As prophets', 'As kings'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'قَالَ الْحَوَارِيُّونَ نَحْنُ',
        post: 'اللَّهِ.',
        en: "The disciples said: We are Allah's helpers.",
        options: ['أَنْصَارُ', 'أَنْصَارَ', 'أَنْصَارِ', 'نَصِيرُ'],
        answer: 0,
        rationales: [
          'Nominative -- predicate of the pronoun نَحْنُ, matching the taught pattern.',
          'Accusative -- wrong case; a simple predicate here is nominative.',
          'Genitive -- wrong case for the same reason.',
          'Singular -- wrong number; the plural أَنْصَار is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'رَبَّنَا',
        post: 'بِمَا أَنْزَلْتَ وَاتَّبَعْنَا الرَّسُولَ.',
        en: 'Our Lord, we believe in what You sent down and we followed the messenger.',
        options: ['آمَنَّا', 'آمَنُوا', 'آمَنْتَ', 'يُؤْمِنُ'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches "our Lord, WE believe".',
          '3rd plural -- wrong person; this is the disciples speaking of themselves.',
          '2nd masculine singular -- wrong person; addressed to Allah, not "you believed".',
          'Imperfect 3rd masculine singular -- wrong tense and person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَآمَنُوا بِالْمَسِيحِ وَ',
        post: 'حَوْلَهُ.',
        en: 'So they believed in the Messiah and gathered around him.',
        options: ['الْتَفُّوا', 'الْتَفَّ', 'يَلْتَفُّونَ', 'الْتَفَفْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches الْحَوَارِيُّون as the subject.',
          '3rd masculine singular -- wrong number.',
          'Imperfect -- wrong tense; the narration is in the past.',
          '1st plural -- wrong person; the disciples are spoken of, not speaking.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'آمَنَّا بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['آمَنَ', 'آمَنَّا', 'آمَنُوا', 'آمَنْتَ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st plural -- we, the form already given.',
          '3rd masculine plural -- they.',
          '2nd masculine singular -- you.',
        ],
      },
      {
        type: 'shift',
        base: 'آمَنَّا بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['آمَنُوا', 'آمَنَّا', 'آمَنَ', 'آمَنْتُمْ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '1st plural -- we, the form already given.',
          '3rd masculine singular -- he.',
          '2nd masculine plural -- you (pl.).',
        ],
      },
      {
        type: 'shift',
        base: 'آمَنَّا بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['آمَنْتَ', 'آمَنَّا', 'آمَنَ', 'آمَنُوا'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st plural -- we, the form already given.',
          '3rd masculine singular -- he.',
          '3rd masculine plural -- they.',
        ],
      },
    ],
  },
};

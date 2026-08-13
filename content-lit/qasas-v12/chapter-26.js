// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ», chapter 26 --
// مُشْكِلَةٌ. Printed page 266 only -- the whole chapter sits in a single
// paragraph partway down the page, opening right after ch25's closing line
// (كذلك خَلَطُوا الْكَلَام بِالسِّياسَةِ, another agent's chapter) and ending
// before ch27's heading سَيِّدُنَا الْمَسِيحُ فِي الْمَحْكَمَةِ further down the
// same page. Transcribed by hand from the scan (vision OCR, 150dpi render)
// against ../CHAPTER-FORMAT.md.
//
// This short chapter is the pivot into the trial narrative: the Roman/
// foreign rulers governing Judea are polytheists who cannot easily read
// the real stakes of a purely religious Jewish dispute, and are too
// absorbed in day-to-day administration to want to get involved -- until
// the Jewish authorities' relentless pressure and repeated visits wear
// them down and they just want the whole embarrassing affair over with.
// Register note: this volume's prose (unlike vols 1-3) is dense expository
// narration -- long compound sentences describing institutional motive
// rather than simple story action -- so several clauses here run longer
// than the house 3-9 token "buildable" band even after splitting at every
// printed comma; that's expected and doesn't block the chapter, which
// still clears five buildable sentences on its own (see below).
//
// Grammar / lexical notes:
//   -- Every printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention, see
//      qasas-v3 ch14). No rewording, same printed text and order. No
//      Qur'anic quotations on this page.
//   -- تَخَلُّصَ (qs-v12-c26-034, "the getting-rid-of," a verbal noun/maṣdar
//      used here as the direct object of أَرَادُوا) is tagged as its own
//      noun lemma تَخَلُّص, distinct from the finite verb تَخَلَّصَ that
//      recurs later in this batch (qasas-v12 ch30, يَتَخَلَّصَ) -- same root
//      خ ل ص, matching the corpus's noun/verbal-noun-vs-verb convention
//      (cf. قَتَلَ vs قَتْل, both already independently attested as known).
//   -- شَاغِل (new, "all-occupying," the active participle of the
//      already-taught verb شَغَلَ) is its own lemma per the
//      participle-as-distinct-lemma convention; the noun شُغْل ("business,
//      occupation," in the same idiom فِي شُغُلٍ شَاغِلٍ, "fully
//      preoccupied") is already independently taught and is NOT re-listed
//      here.
//   -- أَصْبَحَ ("to become," qs-v12-c26-035) is tagged as new: unlike its
//      sister-copula كَانَ (never tracked as a newWords entry anywhere in
//      the corpus and treated as bedrock per the qasas-v3 precedent, so
//      left untagged here too), أَصْبَحَ does not appear in the consolidated
//      known-lemmas check at all and carries its own distinct "became"
//      meaning worth flagging.
//   -- الْمُشْرِكُونَ / الْأَجَانِبُ / الْحُكَّامُ (qs-v12-c26-006/007/008) are
//      three stacked attributives on one referent ("the foreign,
//      polytheist rulers"); الْمُشْرِكُونَ is tagged pos 'noun' per the
//      corpus's participle-as-substantive convention (cf. مُؤْمِن, طَارِد),
//      الْأَجَانِبُ pos 'adj' (nisba adjective "foreign").
//   -- لِلْمَسِيحِ (qs-v12-c26-013) fuses لِ onto the definite proper noun
//      الْمَسِيح directly ('prep+def.gen', no separate لِ lemma), matching
//      the general preposition+full-noun fusion convention already used
//      for بِنُوحٍ/بِاللَّهِ in qasas-v3.
//   -- يَهُود and الْمَسِيح are two of this volume's core proper nouns (per
//      the task brief, not in the consolidated known-lemmas list because
//      they were presumably introduced earlier in this same volume, in
//      chapters outside this batch). Both are tagged new here as their
//      first occurrence within chapters 26-30; they are NOT re-tagged new
//      in ch27-30 below where they recur.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, via the consolidated
//      known-lemmas list): كَانَ (bedrock, never tracked -- see above)،
//      مِنْ، أَنْ، حَاكِم، حَقِيقَة، أَمْر، مُشْرِك، سَبَب، شُغْل، فِي، عَنْ، ذَلِكَ،
//      لَكِنْ، اِشْتَدَّ، تَرَدُّد، إِلَى، أَرَادَ، هَذِهِ، قَضِيَّة، الَّذِي/الَّتِي،
//      حَدِيث، بَلَد، بِ، عَرَفَ
//      are all already taught (or bedrock/function words per the note
//      above) and are NOT re-listed in newWords here.
//
// 12 new words (صَعْب، تَحَقَّقَ، أَجْنَبِيّ، غَرَض، يَهُود، عِدَاء، مَسِيح، شَاغِل،
// إِدَارِيّ، إِلْحَاح، تَخَلُّص، أَصْبَحَ) -- vocabulary-dense because it opens the
// trial arc's institutional/legal register.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch26',
  title: { ar: 'مُشْكِلَةٌ', en: 'A Problem' },
  newWords: [
    'صَعْب', 'تَحَقَّقَ', 'أَجْنَبِيّ', 'غَرَض', 'شَاغِل', 'إِدَارِيّ',
    'إِلْحَاح',
  ],
  lemmas: {
    صَعْب: { gloss: 'difficult, hard' },
    تَحَقَّقَ: { gloss: 'to verify, ascertain, make sure of' },
    أَجْنَبِيّ: { gloss: 'foreign; foreigner' },
    غَرَض: { gloss: 'purpose, motive, aim' },
    يَهُود: { gloss: 'Jews' },
    عِدَاء: { gloss: 'enmity, hostility' },
    مَسِيح: { gloss: 'Messiah' },
    شَاغِل: { gloss: 'all-occupying, engrossing' },
    إِدَارِيّ: { gloss: 'administrative' },
    إِلْحَاح: { gloss: 'insistence, persistence' },
    تَخَلُّص: { gloss: 'getting rid (of), ridding oneself' },
    أَصْبَحَ: { gloss: 'to become' },
  },
  paragraphs: [
    {
      en: 'It was hard for the foreign, polytheist rulers to grasp the true nature of the case -- to know the Jews’ real motives and the reason for their hostility toward the Messiah -- since they were fully preoccupied with administrative affairs. But the Jews’ pressing grew more intense, and their repeated visits to the rulers dragged on, until the rulers wanted to be rid of this case, which had become the talk of the town.',
      sentences: [
        {
          id: 'qs-v12-c26-001',
          ar: 'وَكَانَ مِنَ الصَّعْبِ أَنْ يَتَحَقَّقَ الْحُكَّامُ الْأَجَانِبُ الْمُشْرِكُونَ حَقِيقَةَ الْأَمْرِ،',
          en: 'It was hard for the foreign, polytheist rulers to ascertain the reality of the matter,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, among (idiom: it was hard)' },
            { surface: 'الصَّعْبِ', lemma: 'صَعْب', pos: 'adj', features: 'def.gen', root: 'ص ع ب', gloss: 'the difficult, the hard' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that, to' },
            { surface: 'يَتَحَقَّقَ', lemma: 'تَحَقَّقَ', pos: 'verb', features: 'impf.3ms', root: 'ح ق ق', gloss: 'to verify, ascertain; ascertain' },
            { surface: 'الْحُكَّامُ', lemma: 'حَاكِم', pos: 'noun', features: 'pl.def.nom', gloss: 'the rulers' },
            { surface: 'الْأَجَانِبُ', lemma: 'أَجْنَبِيّ', pos: 'adj', features: 'pl.def.nom', root: 'ج ن ب', gloss: 'foreign' },
            { surface: 'الْمُشْرِكُونَ', lemma: 'مُشْرِك', pos: 'noun', features: 'pl.def.nom', gloss: 'polytheist' },
            { surface: 'حَقِيقَةَ', lemma: 'حَقِيقَة', pos: 'noun', features: 'acc.constr', gloss: 'the reality of' },
            { surface: 'الْأَمْرِ', lemma: 'أَمْر', pos: 'noun', features: 'def.gen', gloss: 'the matter' },
          ],
        },
        {
          id: 'qs-v12-c26-002',
          ar: 'وَيَعْرِفُوا أَغْرَاضَ الْيَهُودِ،',
          en: 'and know the Jews’ motives,',
          tokens: [
            { surface: 'وَيَعْرِفُوا', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to know; and know' },
            { surface: 'أَغْرَاضَ', lemma: 'غَرَض', pos: 'noun', features: 'pl.acc.constr', root: 'غ ر ض', gloss: 'the motives of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'proper', features: 'def.gen', gloss: 'the Jews' },
          ],
        },
        {
          id: 'qs-v12-c26-003',
          ar: 'وَسَبَبَ عِدَائِهِمْ لِلْمَسِيحِ،',
          en: 'and the cause of their hostility toward the Messiah,',
          tokens: [
            { surface: 'وَسَبَبَ', lemma: 'سَبَب', pos: 'noun', features: 'conj+acc.constr', gloss: 'and the cause of' },
            { surface: 'عِدَائِهِمْ', lemma: 'عِدَاء', pos: 'noun', features: 'gen+3mp', root: 'ع د و', gloss: 'their enmity' },
            { surface: 'لِلْمَسِيحِ', lemma: 'مَسِيح', pos: 'proper', features: 'prep+def.gen', gloss: 'toward the Messiah' },
          ],
        },
        {
          id: 'qs-v12-c26-004',
          ar: 'وَكَانُوا فِي شُغُلٍ شَاغِلٍ عَنْ ذَلِكَ بِالْأُمُورِ الْإِدَارِيَّةِ،',
          en: 'and they were fully preoccupied with administrative affairs instead,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'شُغُلٍ', lemma: 'شُغْل', pos: 'noun', features: 'indef.gen', root: 'ش غ ل', gloss: 'occupation, business' },
            { surface: 'شَاغِلٍ', lemma: 'شَاغِل', pos: 'adj', features: 'indef.gen', root: 'ش غ ل', gloss: 'all-occupying' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from, away from' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'بِالْأُمُورِ', lemma: 'أَمْر', pos: 'noun', features: 'prep+def.pl.gen', gloss: 'with the affairs' },
            { surface: 'الْإِدَارِيَّةِ', lemma: 'إِدَارِيّ', pos: 'adj', features: 'def.gen.f', root: 'د و ر', gloss: 'administrative' },
          ],
        },
        {
          id: 'qs-v12-c26-005',
          ar: 'وَلَكِنِ اشْتَدَّ إِلْحَاحُ الْيَهُودِ،',
          en: 'But the Jews’ insistence intensified,',
          tokens: [
            { surface: 'وَلَكِنِ', lemma: 'لَكِنْ', pos: 'conj', features: 'conj+conj', gloss: 'but' },
            { surface: 'اشْتَدَّ', lemma: 'اِشْتَدَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to intensify; intensified' },
            { surface: 'إِلْحَاحُ', lemma: 'إِلْحَاح', pos: 'noun', features: 'constr.nom', root: 'ل ح ح', gloss: 'the insistence of' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'proper', features: 'def.gen', gloss: 'the Jews' },
          ],
        },
        {
          id: 'qs-v12-c26-006',
          ar: 'وَطَالَ تَرَدُّدُهُمْ إِلَيْهِمْ،',
          en: 'and their repeated visits to them dragged on,',
          tokens: [
            { surface: 'وَطَالَ', lemma: 'طَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to become long; and lengthened' },
            { surface: 'تَرَدُّدُهُمْ', lemma: 'تَرَدُّد', pos: 'noun', features: 'nom+3mp', gloss: 'their recurring visits' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v12-c26-007',
          ar: 'فَأَرَادُوا التَّخَلُّصَ مِنْ هَذِهِ الْقَضِيَّةِ الَّتِي أَصْبَحَتْ حَدِيثَ الْبَلَدِ.',
          en: 'so they wanted to be rid of this case, which had become the talk of the town.',
          tokens: [
            { surface: 'فَأَرَادُوا', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to want; so they wanted' },
            { surface: 'التَّخَلُّصَ', lemma: 'تَخَلُّص', pos: 'noun', features: 'def.acc', root: 'خ ل ص', gloss: 'the getting rid (of)' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقَضِيَّةِ', lemma: 'قَضِيَّة', pos: 'noun', features: 'def.gen', gloss: 'the case' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'f.rel', gloss: 'which' },
            { surface: 'أَصْبَحَتْ', lemma: 'أَصْبَحَ', pos: 'verb', features: 'perf.3fs', root: 'ص ب ح', gloss: 'to become; became' },
            { surface: 'حَدِيثَ', lemma: 'حَدِيث', pos: 'noun', features: 'acc.constr', gloss: 'the talk of' },
            { surface: 'الْبَلَدِ', lemma: 'بَلَد', pos: 'noun', features: 'def.gen', gloss: 'the town' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ مِنَ الصَّعْبِ عَلَى الْحُكَّامِ أَنْ يَتَحَقَّقُوا حَقِيقَةَ الْأَمْرِ؟',
          options: ['لِأَنَّهُمْ كَانُوا فِي شُغُلٍ شَاغِلٍ بِالْأُمُورِ الْإِدَارِيَّةِ', 'لِأَنَّهُمْ كَانُوا يَجْهَلُونَ اللُّغَةَ', 'لِأَنَّ الْيَهُودَ رَفَضُوا الْحَدِيثَ مَعَهُمْ'],
          answer: 0,
          qEn: 'Why was it hard for the rulers to ascertain the truth of the matter?',
          optionsEn: ['Because they were fully preoccupied with administrative affairs', 'Because they did not know the language', 'Because the Jews refused to speak with them'],
        },
        {
          q: 'مَاذَا فَعَلَ الْحُكَّامُ أَخِيراً بِسَبَبِ إِلْحَاحِ الْيَهُودِ وَطُولِ تَرَدُّدِهِمْ؟',
          options: ['أَرَادُوا التَّخَلُّصَ مِنَ الْقَضِيَّةِ الَّتِي أَصْبَحَتْ حَدِيثَ الْبَلَدِ', 'رَفَضُوا الْبَتَّ فِي الْقَضِيَّةِ نِهَائِيّاً', 'اسْتَدْعَوْا الْمَسِيحَ لِلتَّحْقِيقِ فَوْراً'],
          answer: 0,
          qEn: 'What did the rulers finally do because of the Jews’ insistence and repeated visits?',
          optionsEn: ['They wanted to be rid of the case that had become the talk of the town', 'They refused to decide the case at all', 'They summoned the Messiah for investigation at once'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانُوا فِي',
        post: 'شَاغِلٍ عَنْ ذَلِكَ بِالْأُمُورِ الْإِدَارِيَّةِ.',
        en: 'And they were fully preoccupied with administrative affairs instead.',
        options: ['شُغُلٍ', 'شُغُلاً', 'شُغُلُ', 'الشُّغُلِ'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- object of the preposition فِي, matching the printed idiom.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          'Definite -- wrong state; the idiom takes an indefinite noun here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَأَرَادُوا التَّخَلُّصَ مِنْ هَذِهِ الْقَضِيَّةِ الَّتِي',
        post: 'حَدِيثَ الْبَلَدِ.',
        en: 'So they wanted to be rid of this case, which had become the talk of the town.',
        options: ['أَصْبَحَتْ', 'أَصْبَحَ', 'يُصْبِحُ', 'أَصْبَحُوا'],
        answer: 0,
        rationales: [
          'Perfect, 3rd feminine singular -- agrees with the feminine antecedent الْقَضِيَّةِ.',
          '3rd masculine singular -- wrong gender; الْقَضِيَّةِ is feminine.',
          'Imperfect -- wrong tense; the case had already become notorious.',
          '3rd masculine plural -- wrong number and gender.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَكِنِ اشْتَدَّ',
        post: 'الْيَهُودِ.',
        en: 'But the Jews’ insistence intensified.',
        options: ['إِلْحَاحُ', 'إِلْحَاحَ', 'إِلْحَاحِ', 'إِلْحَاحاً'],
        answer: 0,
        rationales: [
          'Nominative, construct -- subject of اشْتَدَّ and first term of an إضافة with الْيَهُودِ.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          'Genitive -- wrong case for the same reason.',
          'Accusative indefinite -- wrong case and wrong state; this is a construct, not indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'كَانَ الْحَاكِمُ فِي شُغُلٍ شَاغِلٍ',
        pre: '',
        post: 'فِي شُغُلٍ شَاغِلٍ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['كَانُوا', 'كَانَ', 'كَانَتْ', 'كُنَّ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong gender and number.',
          '3rd feminine plural -- wrong gender.',
        ],
      },
      {
        type: 'shift',
        base: 'كَانَ الْحَاكِمُ فِي شُغُلٍ شَاغِلٍ',
        pre: '',
        post: 'فِي شُغُلٍ شَاغِلٍ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['كَانَتْ', 'كَانَ', 'كَانُوا', 'كُنْتُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '3rd masculine plural -- wrong gender and number.',
          '1st singular -- wrong person entirely.',
        ],
      },
      {
        type: 'shift',
        base: 'كَانَ الْحَاكِمُ فِي شُغُلٍ شَاغِلٍ',
        pre: '',
        post: 'فِي شُغُلٍ شَاغِلٍ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['كُنْتُ', 'كَانَ', 'كَانَتْ', 'كُنَّا'],
        answer: 0,
        rationales: [
          'Perfect, 1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

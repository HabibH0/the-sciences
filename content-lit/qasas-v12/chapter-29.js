// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ», chapter 29 --
// عِيسَى يَتَحَمَّلُ الْأَذَى. Printed page 268 only -- the whole chapter sits
// in a single short paragraph, opening right after ch28's closing line and
// ending before ch30's heading تَدْبِيرٌ إِلَهِيٌّ further down the same page.
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md.
//
// A brief, physical pause in the narration: after the ordeal of the trial
// and the mob's abuse, the Messiah is simply exhausted -- worn out by the
// exertion, the long standing in court, and bearing the harm done to him
// -- and now must carry a heavy cross, so heavy that he cannot even walk
// quickly under its weight.
//
// Grammar / lexical notes:
//   -- Every printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention, see
//      qasas-v3 ch14). No rewording, same printed text and order. No
//      Qur'anic quotations on this page.
//   -- تَحَمُّلِ (qs-v12-c29-003, "the enduring/bearing [of]," a
//      maṣdar/verbal noun conjoined as a second genitive complement of
//      طُولُ) is tagged its own noun lemma تَحَمُّل. Note this is the noun
//      form only -- the finite verb تَحَمَّلَ (as in the chapter's own title
//      يَتَحَمَّلُ) never actually occurs as a token in the body text of this
//      batch (ch26-30), so تَحَمَّلَ itself is not tagged anywhere here; only
//      the printed noun تَحَمُّل is, per the corpus's
//      noun/verbal-noun-vs-verb convention (cf. غُرُوب vs غَرَبَ, already
//      attested in qasas-v12 ch27).
//   -- حَمْلَهُ (qs-v12-c29-005, "to carry it," object complement of the
//      passive كُلِّفَ) is tagged lemma حَمْل, "carrying" (a maṣdar,
//      fatḥa-sukūn) -- a distinct lemma from the already-taught noun حِمْل,
//      "a load, burden" (kasra-sukūn), which is a different word sharing
//      only the same three root letters.
//   -- أَضْنَى (qs-v12-c29-002, "to exhaust, wear out," form IV, hollow
//      root ض ن ي) is new and takes a direct object pronoun (أَضْنَاهُ, "it
//      exhausted him").
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, via the consolidated
//      known-lemmas list): كَانَ (bedrock)، سَيِّد، الْمَسِيح (introduced
//      qasas-v12 ch26)، قَدْ، طُول، فِي، أَذَى، صَلِيب (introduced qasas-v12
//      ch28)، ثَقِيل، كَلَّفَ، لَا، اِسْتَطَاعَ، أَنْ، أَسْرَعَ، مَشْي
//      are all already taught (or bedrock) and are NOT re-listed in
//      newWords here.
//
// 7 new words (لَاغِب، أَضْنَى، جَهْد، وُقُوف، مَحْكَمَة، تَحَمُّل، حَمْل) -- a much
// lighter vocabulary load than ch27/ch28, since this chapter mostly reuses
// their courtroom and cross vocabulary and adds only the exhaustion/
// bearing-up word set proper to its own short scene.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch29',
  title: { ar: 'عِيسَى يَتَحَمَّلُ الْأَذَى', en: 'Isa Bears the Harm' },
  newWords: [
    'لَاغِب', 'أَضْنَى', 'جَهْد', 'مَحْكَمَة', 'تَحَمُّل', 'حَمْل',
  ],
  lemmas: {
    لَاغِب: { gloss: 'weary, fatigued' },
    أَضْنَى: { gloss: 'to exhaust, wear out' },
    جَهْد: { gloss: 'exertion, effort' },
    وُقُوف: { gloss: 'standing' },
    مَحْكَمَة: { gloss: 'court' },
    تَحَمُّل: { gloss: 'enduring, bearing' },
    حَمْل: { gloss: 'carrying' },
  },
  paragraphs: [
    {
      en: 'The Master Messiah was weary: the exertion had worn him out, along with the long hours standing in court and enduring the harm done to him. The cross itself was heavy, and he had been made to carry it, so that he could not walk quickly.',
      sentences: [
        {
          id: 'qs-v12-c29-001',
          ar: 'وَكَانَ السَّيِّدُ الْمَسِيحُ لَاغِباً،',
          en: 'The Master Messiah was weary,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and he was' },
            { surface: 'السَّيِّدُ', lemma: 'سَيِّد', pos: 'noun', features: 'def.nom', gloss: 'the Master' },
            { surface: 'الْمَسِيحُ', lemma: 'مَسِيح', pos: 'proper', features: 'def.nom', gloss: 'the Messiah' },
            { surface: 'لَاغِباً', lemma: 'لَاغِب', pos: 'adj', features: 'indef.acc', gloss: 'weary, fatigued' },
          ],
        },
        {
          id: 'qs-v12-c29-002',
          ar: 'قَدْ أَضْنَاهُ الْجَهْدُ،',
          en: 'exertion had worn him out,',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'already, indeed' },
            { surface: 'أَضْنَاهُ', lemma: 'أَضْنَى', pos: 'verb', features: 'perf.3ms+3ms', root: 'ض ن ي', gloss: 'to exhaust; had exhausted him' },
            { surface: 'الْجَهْدُ', lemma: 'جَهْد', pos: 'noun', features: 'def.nom', gloss: 'the exertion' },
          ],
        },
        {
          id: 'qs-v12-c29-003',
          ar: 'وَطُولُ الْوُقُوفِ فِي الْمَحْكَمَةِ وَتَحَمُّلِ الْأَذَى،',
          en: 'and the long standing in court and enduring the harm,',
          tokens: [
            { surface: 'وَطُولُ', lemma: 'طُول', pos: 'noun', features: 'conj+constr.nom', gloss: 'and the length of' },
            { surface: 'الْوُقُوفِ', lemma: 'وُقُوف', pos: 'noun', features: 'def.gen', gloss: 'the standing' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَحْكَمَةِ', lemma: 'مَحْكَمَة', pos: 'noun', features: 'def.gen', root: 'ح ك م', gloss: 'the court' },
            { surface: 'وَتَحَمُّلِ', lemma: 'تَحَمُّل', pos: 'noun', features: 'conj+constr.gen', root: 'ح م ل', gloss: 'and enduring' },
            { surface: 'الْأَذَى', lemma: 'أَذَى', pos: 'noun', features: 'def.gen', gloss: 'the harm' },
          ],
        },
        {
          id: 'qs-v12-c29-004',
          ar: 'وَكَانَ الصَّلِيبُ ثَقِيلاً،',
          en: 'the cross was heavy,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and it was' },
            { surface: 'الصَّلِيبُ', lemma: 'صَلِيب', pos: 'noun', features: 'def.nom', gloss: 'the cross' },
            { surface: 'ثَقِيلاً', lemma: 'ثَقِيل', pos: 'adj', features: 'indef.acc', gloss: 'heavy' },
          ],
        },
        {
          id: 'qs-v12-c29-005',
          ar: 'وَقَدْ كُلِّفَ حَمْلَهُ،',
          en: 'and he had been made to carry it,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and already, indeed' },
            { surface: 'كُلِّفَ', lemma: 'كَلَّفَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to assign, task; he was assigned' },
            { surface: 'حَمْلَهُ', lemma: 'حَمْل', pos: 'noun', features: 'acc+3ms', root: 'ح م ل', gloss: 'carrying it' },
          ],
        },
        {
          id: 'qs-v12-c29-006',
          ar: 'فَكَانَ لَا يَسْتَطِيعُ أَنْ يُسْرِعَ فِي الْمَشْيِ.',
          en: 'so he could not walk quickly.',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; so he was' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْتَطِيعُ', lemma: 'اِسْتَطَاعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُسْرِعَ', lemma: 'أَسْرَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to hurry; hurry' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَشْيِ', lemma: 'مَشْي', pos: 'noun', features: 'def.gen', gloss: 'the walking' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ السَّيِّدُ الْمَسِيحُ لَاغِباً؟',
          options: ['لِأَنَّ الْجَهْدَ وَطُولَ الْوُقُوفِ فِي الْمَحْكَمَةِ وَتَحَمُّلَ الْأَذَى قَدْ أَضْنَاهُ', 'لِأَنَّهُ لَمْ يَأْكُلْ طَعَاماً مُنْذُ أَيَّامٍ', 'لِأَنَّهُ كَانَ مَرِيضاً مِنْ قَبْلُ'],
          answer: 0,
          qEn: 'Why was the Master Messiah weary?',
          optionsEn: ['Because the exertion, the long standing in court, and enduring the harm had worn him out', 'Because he had not eaten food for days', 'Because he had been sick before'],
        },
        {
          q: 'مَاذَا حَدَثَ لِلسَّيِّدِ الْمَسِيحِ بِسَبَبِ ثِقَلِ الصَّلِيبِ؟',
          options: ['كَانَ لَا يَسْتَطِيعُ أَنْ يُسْرِعَ فِي الْمَشْيِ', 'سَقَطَ عَلَى الْأَرْضِ وَلَمْ يَقُمْ', 'رَفَضَ حَمْلَ الصَّلِيبِ نِهَائِيّاً'],
          answer: 0,
          qEn: "What happened to the Master Messiah because of the cross's weight?",
          optionsEn: ['He could not walk quickly', 'He fell to the ground and did not get up', 'He refused to carry the cross at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ السَّيِّدُ الْمَسِيحُ',
        post: '، قَدْ أَضْنَاهُ الْجَهْدُ.',
        en: 'The Master Messiah was weary; exertion had worn him out.',
        options: ['لَاغِباً', 'لَاغِبٌ', 'لَاغِبٍ', 'لَاغِبَة'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Feminine -- wrong gender; السَّيِّدُ الْمَسِيحُ is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ الصَّلِيبُ',
        post: 'وَقَدْ كُلِّفَ حَمْلَهُ.',
        en: 'The cross was heavy, and he had been made to carry it.',
        options: ['ثَقِيلاً', 'ثَقِيلٌ', 'ثَقِيلٍ', 'ثِقَال'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَ.',
          'Nominative -- wrong case; the predicate of كَانَ is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Broken plural -- wrong number; الصَّلِيبُ is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَكَانَ لَا',
        post: 'أَنْ يُسْرِعَ فِي الْمَشْيِ.',
        en: 'So he could not manage to walk quickly.',
        options: ['يَسْتَطِيعُ', 'اسْتَطَاعَ', 'تَسْتَطِيعُ', 'يَسْتَطِيعُونَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- the tense required after كَانَ لَا for an ongoing inability.',
          'Perfect -- wrong tense for this construction.',
          '2nd masculine singular / 3rd feminine singular -- wrong person or gender; the subject is "he."',
          '3rd masculine plural -- wrong number; the subject is singular.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'كَانَ الرَّجُلُ لَاغِباً',
        pre: '',
        post: 'لَاغِباً',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (ms)',
        options: ['كُنْتَ', 'كَانَ', 'كَانَتْ', 'كُنْتُ'],
        answer: 0,
        rationales: [
          'Perfect, 2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '3rd feminine singular -- wrong person and gender.',
          '1st singular -- wrong person; the target is "you," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'كَانَ الرَّجُلُ لَاغِباً',
        pre: '',
        post: 'لَاغِباً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['كَانَتْ', 'كَانَ', 'كُنْتَ', 'كَانُوا'],
        answer: 0,
        rationales: [
          'Perfect, 3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '2nd masculine singular -- wrong person.',
          '3rd masculine plural -- wrong number and gender.',
        ],
      },
      {
        type: 'shift',
        base: 'كَانَ الرَّجُلُ لَاغِباً',
        pre: '',
        post: 'لَاغِباً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['كَانُوا', 'كَانَ', 'كَانَتْ', 'كُنَّا'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd feminine singular -- wrong gender and number.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

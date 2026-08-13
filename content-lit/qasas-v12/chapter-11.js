// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 11 -- الْيَهُودُ يَنْصُبُونَ لَهُ الْحَرْبَ.
// Printed page 257 (bottom, right after ch10's closing line and heading)
// through the first line of page 258 (before ch12's heading قِصَّةُ عِيسَى فِي
// الْقُرْآنِ). Transcribed by hand from the scan (vision OCR, 150dpi render)
// against ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// One short paragraph of dense apologetic-register prose describing the
// escalating Jewish opposition to ʿĪsā: they wage war on him, unite against
// him, pelt him with accusations, abuse him and his mother Maryam with foul
// speech and slander, oppose and hound him, incite a mob against him, and
// block his way. Sets up ch12's Qur'anic quotation of their plot to kill him.
//
// Grammar / lexical notes:
//   -- Every printed clause here is already short (comma-delimited), so the
//      split into sentences[] follows the printed commas one-to-one -- no
//      further subdivision needed.
//   -- شَقَّ (qs-v12-c11-001) is used impersonally/statively ("شَقَّ عَلَى
//      فُلَانٍ" = "it was hard/distressing for so-and-so"), tagged as an
//      ordinary perf.3ms verb with كُلَّ ذَلِكَ as its subject.
//   -- رَمَوْهُ عَنْ قَوْسٍ وَاحِدَةٍ (qs-v12-c11-003) is a set idiom, "they
//      shot at him from a single bow" = they united as one against him;
//      translated for sense.
//   -- طَارَدُوهُ (verb طَارَدَ, Form III "to chase, hound") is tagged as a
//      lemma distinct from both the already-taught verb طَرَدَ ("to drive
//      away," vol3 ch14) and the already-taught participle-noun طَارِد ("one
//      who drives away," same chapter) -- same root ط ر د, three separate
//      printed/derived forms, three separate lemmas, per the corpus's
//      per-derived-form convention (see vol3 ch14's own header for the
//      worked precedent on آمَنَ/مُؤْمِن and طَرَدَ/طَارِد).
//   -- قَذْف (qs-v12-c11-006, verbal noun "slander, calumny") and قَذِيفَة
//      (qs-v12-c11-004, "a slander, a hurled accusation" -- lit. "missile")
//      share the root ق ذ ف but are tagged as distinct lemmas, matching the
//      corpus's noun-pattern-vs-noun-pattern convention for same-root words
//      with different derived meanings.
//   -- Demonstrative ذَلِكَ (qs-v12-c11-001) is tagged as its own lemma,
//      distinct from the already-taught هَذِهِ (qasas-v1 ch1) and هَؤُلَاءِ
//      (qasas-v2 ch17); it is not itself in the consolidated known-lemmas
//      list, so it is treated as new here despite being a very basic
//      demonstrative -- flagged for a second look, since قَصَص vol.1-3 must
//      have used ذَلِكَ somewhere without it ending up in a chapter's
//      newWords (possibly folded into a chapter's "already taught" prose
//      note the way vol3 ch1 folded هَذِهِ/هَؤُلَاءِ). Following the letter of
//      the cross-check instruction here rather than assuming.
//   -- Ordinary prepositions/particles with no dedicated newWords history
//      anywhere in the worked examples (عَلَى، عَنْ، فِي، لِ، وَ) are treated
//      as background/always-known per the precedent set by qasas-v3 ch1 and
//      ch14's own header comments (both explicitly list bare prepositions
//      as "already taught" without citing a lemma-file entry) -- these are
//      not re-listed in newWords here and are not counted as new.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, against known-lemmas.txt):
//      شَقَّ، كُلّ، وَاحِد، تَنَاوَلَ، أُمّ، أَوْبَاش، وَجْه، طَرِيق
//      are all already taught and are NOT re-listed in newWords here.
//
// 19 new words (ذَلِكَ، يَهُود، نَصَبَ، رَمَى، قَوْس، رَشَقَ، تُهْمَة، قَذِيفَة، سَبّ،
// قَبِيح، قَوْل، بَذِيء، مَرْيَم، بَتُول، قَذْف، طَعْن، عَاكَسَ، طَارَدَ، سَدَّ) -- this
// chapter is vocabulary-dense despite its brevity, being the reader's first
// encounter with several of this volume's core proper nouns (يَهُود، مَرْيَم)
// and with the apologetic-register vocabulary of verbal conflict that
// recurs through the rest of the volume.
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'الْيَهُودُ يَنْصُبُونَ لَهُ الْحَرْبَ', en: 'The Jews Wage War Against Him' },
  newWords: [
    'ذَلِكَ', 'نَصَبَ', 'رَمَى', 'قَوْس', 'رَشَقَ', 'تُهْمَة',
    'قَذِيفَة', 'سَبّ', 'قَبِيح', 'قَوْل', 'بَذِيء', 'مَرْيَم',
    'بَتُول', 'قَذْف', 'عَاكَسَ', 'طَارَدَ', 'سَدَّ',
  ],
  lemmas: {
    ذَلِكَ: { gloss: 'that' },
    يَهُود: { gloss: 'the Jews' },
    نَصَبَ: { gloss: 'to set up, erect, wage' },
    رَمَى: { gloss: 'to throw, shoot' },
    قَوْس: { gloss: 'a bow' },
    رَشَقَ: { gloss: 'to pelt, hurl at' },
    تُهْمَة: { gloss: 'accusation' },
    قَذِيفَة: { gloss: 'a hurled slander, missile' },
    سَبّ: { gloss: 'cursing, abuse' },
    قَبِيح: { gloss: 'vile, ugly' },
    قَوْل: { gloss: 'speech, words' },
    بَذِيء: { gloss: 'obscene, foul-mouthed' },
    مَرْيَم: { gloss: 'Maryam (Mary)' },
    بَتُول: { gloss: 'the pure, chaste one (epithet of Maryam)' },
    قَذْف: { gloss: 'slander, calumny' },
    طَعْن: { gloss: 'defamation, aspersion' },
    عَاكَسَ: { gloss: 'to oppose, thwart' },
    طَارَدَ: { gloss: 'to chase, hound' },
    سَدَّ: { gloss: 'to block, close off' },
  },
  paragraphs: [
    {
      en: 'All this weighed heavily on the Jews, and they waged war against him. They rallied against him as one, pelting him with accusations and slanders, and assailing him with foul abuse and obscene speech. They slandered and defamed his mother Maryam the pure, opposed him and hounded him, stirred up the rabble against him, and blocked the roads before him.',
      sentences: [
        {
          id: 'qs-v12-c11-001',
          ar: 'وَشَقَّ كُلَّ ذَلِكَ عَلَى الْيَهُودِ،',
          en: 'All that weighed heavily upon the Jews,',
          tokens: [
            { surface: 'وَشَقَّ', lemma: 'شَقَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ش ق ق', gloss: 'to be hard, distressing (upon); and it was hard for' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'all (of)' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem', gloss: 'that' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'الْيَهُودِ', lemma: 'يَهُود', pos: 'noun', features: 'def.gen', root: 'ي ه د', gloss: 'the Jews' },
          ],
        },
        {
          id: 'qs-v12-c11-002',
          ar: 'وَنَصَبُوا لَهُ الْحَرْبَ،',
          en: 'and they waged war against him,',
          tokens: [
            { surface: 'وَنَصَبُوا', lemma: 'نَصَبَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ن ص ب', gloss: 'to set up, wage; and they waged' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'against him' },
            { surface: 'الْحَرْبَ', lemma: 'حَرْب', pos: 'noun', features: 'def.acc', gloss: 'the war' },
          ],
        },
        {
          id: 'qs-v12-c11-003',
          ar: 'وَرَمَوْهُ عَنْ قَوْسٍ وَاحِدَةٍ،',
          en: 'and they rallied against him as one,',
          tokens: [
            { surface: 'وَرَمَوْهُ', lemma: 'رَمَى', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ر م ي', gloss: 'to shoot, throw; and they shot at him' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَوْسٍ', lemma: 'قَوْس', pos: 'noun', features: 'indef.gen', gloss: 'a bow' },
            { surface: 'وَاحِدَةٍ', lemma: 'وَاحِد', pos: 'adj', features: 'indef.gen.f', gloss: 'one, single' },
          ],
        },
        {
          id: 'qs-v12-c11-004',
          ar: 'وَرَشَقُوهُ بِالتُّهَمِ وَالْقَذَائِفِ،',
          en: 'pelting him with accusations and slanders,',
          tokens: [
            { surface: 'وَرَشَقُوهُ', lemma: 'رَشَقَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ر ش ق', gloss: 'to pelt, hurl at; and they pelted him' },
            { surface: 'بِالتُّهَمِ', lemma: 'تُهْمَة', pos: 'noun', features: 'prep+def.gen.pl', root: 'ت ه م', gloss: 'with accusations' },
            { surface: 'وَالْقَذَائِفِ', lemma: 'قَذِيفَة', pos: 'noun', features: 'conj+def.gen.pl', root: 'ق ذ ف', gloss: 'and slanders' },
          ],
        },
        {
          id: 'qs-v12-c11-005',
          ar: 'وَتَنَاوَلُوهُ بِالسَّبِّ الْقَبِيحِ وَالْقَوْلِ الْبَذِيءِ،',
          en: 'and assailing him with foul abuse and obscene speech,',
          tokens: [
            { surface: 'وَتَنَاوَلُوهُ', lemma: 'تَنَاوَلَ', pos: 'verb', features: 'conj+perf.3mp+3ms', gloss: 'to assail, attack (verbally); and they assailed him' },
            { surface: 'بِالسَّبِّ', lemma: 'سَبّ', pos: 'noun', features: 'prep+def.gen', root: 'س ب ب', gloss: 'with cursing, abuse' },
            { surface: 'الْقَبِيحِ', lemma: 'قَبِيح', pos: 'adj', features: 'def.gen', gloss: 'vile, ugly' },
            { surface: 'وَالْقَوْلِ', lemma: 'قَوْل', pos: 'noun', features: 'conj+def.gen', gloss: 'and the speech' },
            { surface: 'الْبَذِيءِ', lemma: 'بَذِيء', pos: 'adj', features: 'def.gen', root: 'ب ذ أ', gloss: 'obscene, foul-mouthed' },
          ],
        },
        {
          id: 'qs-v12-c11-006',
          ar: 'وَتَنَاوَلُوا أُمَّهُ مَرْيَمَ الْبَتُولَ بِالْقَذْفِ وَالطَّعْنِ،',
          en: 'They slandered and defamed his mother Maryam the pure,',
          tokens: [
            { surface: 'وَتَنَاوَلُوا', lemma: 'تَنَاوَلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to assail; and they assailed' },
            { surface: 'أُمَّهُ', lemma: 'أُمّ', pos: 'noun', features: 'acc+3ms', gloss: 'his mother' },
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'acc', gloss: 'Maryam' },
            { surface: 'الْبَتُولَ', lemma: 'بَتُول', pos: 'noun', features: 'def.acc', root: 'ب ت ل', gloss: 'the pure, chaste one' },
            { surface: 'بِالْقَذْفِ', lemma: 'قَذْف', pos: 'noun', features: 'prep+def.gen', root: 'ق ذ ف', gloss: 'with slander' },
            { surface: 'وَالطَّعْنِ', lemma: 'طَعْن', pos: 'noun', features: 'conj+def.gen', root: 'ط ع ن', gloss: 'and defamation' },
          ],
        },
        {
          id: 'qs-v12-c11-007',
          ar: 'وَعَاكَسُوهُ وَطَارَدُوهُ،',
          en: 'opposed him and hounded him,',
          tokens: [
            { surface: 'وَعَاكَسُوهُ', lemma: 'عَاكَسَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ع ك س', gloss: 'to oppose, thwart; and they opposed him' },
            { surface: 'وَطَارَدُوهُ', lemma: 'طَارَدَ', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'ط ر د', gloss: 'to chase, hound; and they hounded him' },
          ],
        },
        {
          id: 'qs-v12-c11-008',
          ar: 'وَأَهَاجُوا لَهُ الأَوْبَاشَ،',
          en: 'stirred up the rabble against him,',
          tokens: [
            { surface: 'وَأَهَاجُوا', lemma: 'أَهَاجَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ه ي ج', gloss: 'to incite, stir up; and they stirred up' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'against him' },
            { surface: 'الأَوْبَاشَ', lemma: 'أَوْبَاش', pos: 'noun', features: 'def.acc.pl', gloss: 'the rabble, riffraff' },
          ],
        },
        {
          id: 'qs-v12-c11-009',
          ar: 'وَسَدُّوا فِي وَجْهِهِ الطُّرُقَ.',
          en: 'and blocked the roads before him.',
          tokens: [
            { surface: 'وَسَدُّوا', lemma: 'سَدَّ', pos: 'verb', features: 'conj+perf.3mp', root: 'س د د', gloss: 'to block, close off; and they blocked' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'وَجْهِهِ', lemma: 'وَجْه', pos: 'noun', features: 'gen+3ms', gloss: 'his face' },
            { surface: 'الطُّرُقَ', lemma: 'طَرِيق', pos: 'noun', features: 'def.acc.pl', gloss: 'the roads' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ الْيَهُودُ حِينَ شَقَّ عَلَيْهِمْ أَمْرُ عِيسَى؟',
          options: ['نَصَبُوا لَهُ الْحَرْبَ وَرَمَوْهُ بِالتُّهَمِ وَالْقَذَائِفِ', 'آمَنُوا بِهِ جَمِيعاً', 'تَرَكُوهُ وَشَأْنَهُ بِلَا اهْتِمَامٍ'],
          answer: 0,
          qEn: 'What did the Jews do when the matter of ʿĪsā became distressing to them?',
          optionsEn: ['They waged war against him and pelted him with accusations and slanders', 'They all believed in him', 'They left him alone, unconcerned'],
        },
        {
          q: 'بِمَاذَا تَنَاوَلَ الْيَهُودُ مَرْيَمَ أُمَّ عِيسَى؟',
          options: ['بِالْقَذْفِ وَالطَّعْنِ', 'بِالْمَدْحِ وَالثَّنَاءِ', 'لَمْ يَذْكُرُوهَا أَصْلاً'],
          answer: 0,
          qEn: 'How did the Jews treat Maryam, the mother of ʿĪsā?',
          optionsEn: ['With slander and defamation', 'With praise and commendation', 'They never mentioned her at all'],
        },
        {
          q: 'كَيْفَ حَاوَلَ الْيَهُودُ مَنْعَ النَّاسِ عَنْ عِيسَى؟',
          options: ['أَهَاجُوا لَهُ الأَوْبَاشَ وَسَدُّوا فِي وَجْهِهِ الطُّرُقَ', 'دَعَوُا النَّاسَ إِلَى اتِّبَاعِهِ', 'بَنَوْا لَهُ الْمَسَاجِدَ'],
          answer: 0,
          qEn: 'How did the Jews try to keep people away from ʿĪsā?',
          optionsEn: ['They stirred up the rabble against him and blocked the roads before him', 'They called people to follow him', 'They built him places of worship'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَرَمَوْهُ عَنْ',
        post: 'وَاحِدَةٍ.',
        en: 'They rallied against him as one (lit. shot from a single bow).',
        options: ['قَوْسٍ', 'قَوْسٌ', 'قَوْساً', 'قِيَاسٍ'],
        answer: 0,
        rationales: [
          'Genitive, indefinite -- object of the preposition عَنْ.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative -- wrong case for the same reason.',
          'A different word entirely ("measure/analogy") -- wrong meaning.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَتَنَاوَلُوهُ بِ',
        post: 'الْقَبِيحِ.',
        en: 'They assailed him with foul abuse.',
        options: ['السَّبِّ', 'السَّبُّ', 'السَّبَّ', 'السَّبَب'],
        answer: 0,
        rationales: [
          'Genitive, definite -- object of the preposition بِ.',
          'Nominative -- wrong case for the same reason.',
          'Accusative -- wrong case for the same reason.',
          'A different word ("the reason") -- wrong meaning entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَسَدُّوا فِي وَجْهِهِ',
        post: '.',
        en: 'And they blocked the roads before him.',
        options: ['الطُّرُقَ', 'الطُّرُقُ', 'الطُّرُقِ', 'الطَّرِيق'],
        answer: 0,
        rationales: [
          'Accusative, plural -- direct object of سَدُّوا.',
          'Nominative -- wrong case; the object of a verb is accusative.',
          'Genitive -- wrong case for the same reason.',
          'Singular -- wrong number; several roads are meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'طَارَدَ الرَّجُلُ عِيسَى',
        pre: '',
        post: 'عِيسَى',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['طَارَدْتُ', 'طَارَدَ', 'طَارَدْتَ', 'طَارَدْنَا'],
        answer: 0,
        rationales: [
          '1st singular perfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- "you," wrong person.',
          '1st plural -- "we," wrong number.',
        ],
      },
      {
        type: 'shift',
        base: 'طَارَدَ الرَّجُلُ عِيسَى',
        pre: '',
        post: 'عِيسَى',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['طَارَدُوا', 'طَارَدَ', 'طَارَدْتُ', 'طَارَدَتْ'],
        answer: 0,
        rationales: [
          '3rd masculine plural perfect -- matches هُمْ, and is the form actually printed (طَارَدُوهُ).',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '1st singular -- wrong person; "I," not "they."',
          '3rd feminine singular -- wrong gender and number.',
        ],
      },
      {
        type: 'shift',
        base: 'سَدَّ الرَّجُلُ الطَّرِيقَ',
        pre: '',
        post: 'الطَّرِيقَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['سَدَدْنَا', 'سَدَّ', 'سَدَدْتَ', 'سَدُّوا'],
        answer: 0,
        rationales: [
          '1st plural perfect -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- "you," wrong person.',
          '3rd masculine plural -- "they," wrong person.',
        ],
      },
    ],
  },
};

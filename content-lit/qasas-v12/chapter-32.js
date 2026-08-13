// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ»,
// chapter 32 -- تَنْفِيذُ حُكْمٍ. Printed pages 269 (bottom, right after ch31's
// closing line and heading) through 270 (top, ending before ch33's heading
// رَفْعُ عِيسَى إِلَى السَّمَاءِ partway down the same page). Transcribed by
// hand from the scan (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// A short, deliberately generic-sounding paragraph: every condemned man
// disclaims his crime and cries out, and this one was no different -- they
// seized him and carried out the sentence while the Jews stood off at a
// distance. The world, Nadwi writes, was "night and darkness," and everyone
// present was utterly certain the man crucified was the Messiah. The
// author's own footnote (below) signals that this whole narrative
// reconstruction -- the mix-up in ch31, the distant Jewish onlookers here --
// is deliberately built from later Christian historical/legal source
// material, not asserted as Qur'anic detail; the Qur'an's own, much sparer
// statement of the matter is saved for ch34.
//
// Grammar / lexical notes:
//   -- صِيَاح (qs-v12-c32-002, noun "crying out") is kept distinct from the
//      verb صَاحَ introduced in ch31, and عَوِيل is a new, unrelated noun
//      "wailing" -- both nouns for the same scene's sound, paired as in the
//      printed text.
//   -- وَاقِف (qs-v12-c32-004) is the active participle of the already-taught
//      verb وَقَفَ, kept as its own lemma per the participle-as-distinct-
//      lemma convention used throughout this volume.
//   -- مَصْلُوب (qs-v12-c32-006) is the passive participle of the
//      already-taught verb صَلَبَ, likewise its own lemma -- distinct from
//      صَلِيب/صَلْب, both introduced in ch31 from the same root.
//   -- الْيَهُودُ and الْمَسِيحُ: الْيَهُودُ ("the Jews") is tagged pos:'noun'
//      per ch31's header-comment rationale (a fully-declining common/
//      collective noun for a people, not a single unique name); الْمَسِيحُ
//      ("the Messiah") is tagged pos:'proper' since it functions as ʿĪsā's
//      own title/name within the narrative, parallel to عِيسَى itself.
//   -- The footnote (١) at the foot of p.270, attached to قِصَّة الْمَصْلُوب
//      via الْمَسِيح here, is captured as lemmas['مَسِيح'].book_note below --
//      it is Nadwi's own methodological remark, not a vocabulary gloss.
//   -- Known-lemmas.txt discrepancy carried over from ch31 (see that file's
//      header): مِنْ، فِي، عَلَى، كَانَ، أَنَّ، هُوَ، هُمْ etc. are treated as
//      already known even though absent from the supplied consolidated list,
//      per direct precedent in qasas-v3/chapter-01.js, -06.js, -14.js.
//   -- Shared lexicon check (beyond the basics just noted): كُلّ، أَخَذَ،
//      نَفَّذَ، فِي، حُكْم، دُنْيَا، لَيْل، ظَنَّ، ظَنّ are all already taught and
//      are NOT re-listed in newWords here.
//
// 10 new words (مُجْرِم، تَنَصَّلَ، جَرِيمَة، صِيَاح، عَوِيل، يَهُود، وَاقِف، ظَلَام،
// مَصْلُوب، مَسِيح).
export const CHAPTER = {
  id: 'ch32',
  title: { ar: 'تَنْفِيذُ حُكْمٍ', en: 'Execution of a Verdict' },
  newWords: [
    'مُجْرِم', 'تَنَصَّلَ', 'جَرِيمَة', 'صِيَاح', 'عَوِيل', 'وَاقِف',
    'مَصْلُوب',
  ],
  lemmas: {
    مُجْرِم: { gloss: 'criminal, wrongdoer' },
    تَنَصَّلَ: { gloss: 'to disclaim, deny responsibility (for)' },
    جَرِيمَة: { gloss: 'crime' },
    صِيَاح: { gloss: 'crying out, shouting (noun)' },
    عَوِيل: { gloss: 'wailing, lamentation' },
    يَهُود: { gloss: 'the Jews' },
    وَاقِف: { gloss: 'standing (participle)' },
    ظَلَام: { gloss: 'darkness' },
    مَصْلُوب: { gloss: 'the crucified one (passive participle)' },
    مَسِيح: {
      gloss: 'the Messiah',
      book_note: "Author's footnote (p.270): \"We have relied, for the details of this story and the circumstances and atmosphere surrounding it, on the historical and legal Christian documents that have come to light and been recorded in the modern era.\"",
    },
  },
  paragraphs: [
    {
      en: 'Every criminal disclaims his crime, and every criminal has his cries and his wailing -- so they seized him and carried out the sentence on him, while the Jews stood off at a distance. The world was night and darkness, and they were utterly certain that the one crucified was the Messiah.',
      sentences: [
        {
          id: 'qs-v12-c32-001',
          ar: 'وَكُلُّ مُجْرِمٍ يَتَنَصَّلُ مِنْ جَرِيمَتِهِ،',
          en: 'Every criminal disclaims his crime,',
          tokens: [
            { surface: 'وَكُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and every' },
            { surface: 'مُجْرِمٍ', lemma: 'مُجْرِم', pos: 'noun', features: 'indef.gen', root: 'ج ر م', gloss: 'criminal' },
            { surface: 'يَتَنَصَّلُ', lemma: 'تَنَصَّلَ', pos: 'verb', features: 'impf.3ms', root: 'ن ص ل', gloss: 'to disclaim; disclaims' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'جَرِيمَتِهِ', lemma: 'جَرِيمَة', pos: 'noun', features: 'gen+3ms', root: 'ج ر م', gloss: 'his crime' },
          ],
        },
        {
          id: 'qs-v12-c32-002',
          ar: 'وَكُلُّ مُجْرِمٍ لَهُ صِيَاحٌ وَعَوِيلٌ،',
          en: 'and every criminal has his cries and his wailing,',
          tokens: [
            { surface: 'وَكُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and every' },
            { surface: 'مُجْرِمٍ', lemma: 'مُجْرِم', pos: 'noun', features: 'indef.gen', gloss: 'criminal' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'has (lit. to him)' },
            { surface: 'صِيَاحٌ', lemma: 'صِيَاح', pos: 'noun', features: 'indef.nom', root: 'ص ي ح', gloss: 'crying out' },
            { surface: 'وَعَوِيلٌ', lemma: 'عَوِيل', pos: 'noun', features: 'conj+indef.nom', root: 'ع و ل', gloss: 'and wailing' },
          ],
        },
        {
          id: 'qs-v12-c32-003',
          ar: 'وَأَخَذُوهُ وَنَفَّذُوا فِيهِ الْحُكْمَ،',
          en: 'so they seized him and carried out the sentence on him,',
          tokens: [
            { surface: 'وَأَخَذُوهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+perf.3mp+3ms', gloss: 'to take; and took him' },
            { surface: 'وَنَفَّذُوا', lemma: 'نَفَّذَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to execute; and executed' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'on him' },
            { surface: 'الْحُكْمَ', lemma: 'حُكْم', pos: 'noun', features: 'def.acc', gloss: 'the sentence' },
          ],
        },
        {
          id: 'qs-v12-c32-004',
          ar: 'وَالْيَهُودُ وَاقِفُونَ عَلَى بُعْدٍ،',
          en: 'while the Jews stood off at a distance,',
          tokens: [
            { surface: 'وَالْيَهُودُ', lemma: 'يَهُود', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the Jews' },
            { surface: 'وَاقِفُونَ', lemma: 'وَاقِف', pos: 'noun', features: 'indef.nom.pl', root: 'و ق ف', gloss: 'standing' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'بُعْدٍ', lemma: 'بُعْد', pos: 'noun', features: 'indef.gen', gloss: 'a distance' },
          ],
        },
        {
          id: 'qs-v12-c32-005',
          ar: 'وَالدُّنْيَا لَيْلٌ وَظَلَامٌ،',
          en: 'The world was night and darkness,',
          tokens: [
            { surface: 'وَالدُّنْيَا', lemma: 'دُنْيَا', pos: 'noun', features: 'conj+def.nom', gloss: 'and the world' },
            { surface: 'لَيْلٌ', lemma: 'لَيْل', pos: 'noun', features: 'indef.nom', gloss: 'night' },
            { surface: 'وَظَلَامٌ', lemma: 'ظَلَام', pos: 'noun', features: 'conj+indef.nom', root: 'ظ ل م', gloss: 'and darkness' },
          ],
        },
        {
          id: 'qs-v12-c32-006',
          ar: 'وَهُمْ يَظُنُّونَ كُلَّ الظَّنِّ أَنَّ الْمَصْلُوبَ هُوَ الْمَسِيحُ.',
          en: 'and they were utterly certain that the one crucified was the Messiah.',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'and they' },
            { surface: 'يَظُنُّونَ', lemma: 'ظَنَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to think, suppose; suppose' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'the whole of' },
            { surface: 'الظَّنِّ', lemma: 'ظَنّ', pos: 'noun', features: 'def.gen', gloss: 'the supposition' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْمَصْلُوبَ', lemma: 'مَصْلُوب', pos: 'noun', features: 'def.acc', root: 'ص ل ب', gloss: 'the one crucified' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
            { surface: 'الْمَسِيحُ', lemma: 'مَسِيح', pos: 'proper', features: 'def.nom', gloss: 'the Messiah' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَفْعَلُ كُلُّ مُجْرِمٍ عِنْدَ تَنْفِيذِ الْحُكْمِ؟',
          options: ['يَتَنَصَّلُ مِنْ جَرِيمَتِهِ وَلَهُ صِيَاحٌ وَعَوِيلٌ', 'كَانَ يَعْتَرِفُ بِجَرِيمَتِهِ بِهُدُوءٍ', 'كَانَ يَضْحَكُ وَلَا يُبَالِي'],
          answer: 0,
          qEn: 'What did every criminal do when the sentence was carried out?',
          optionsEn: ['He disclaimed his crime and cried out and wailed', 'He calmly confessed his crime', 'He laughed and paid no mind'],
        },
        {
          q: 'أَيْنَ كَانَ الْيَهُودُ حِينَ نُفِّذَ الْحُكْمُ؟',
          options: ['وَاقِفِينَ عَلَى بُعْدٍ', 'وَاقِفِينَ بِجَانِبِ الصَّلِيبِ مُبَاشَرَةً', 'لَمْ يَحْضُرُوا أَصْلاً'],
          answer: 0,
          qEn: 'Where were the Jews when the sentence was carried out?',
          optionsEn: ['Standing off at a distance', 'Standing right beside the cross', 'They did not attend at all'],
        },
        {
          q: 'مَاذَا كَانَ يَظُنُّ الْحَاضِرُونَ عَنِ الْمَصْلُوبِ؟',
          options: ['أَنَّهُ الْمَسِيحُ', 'أَنَّهُ لِصٌّ مَشْهُورٌ', 'أَنَّهُ أَحَدُ جُنُودِ الرُّومِ'],
          answer: 0,
          qEn: 'What did those present suppose about the one crucified?',
          optionsEn: ['That he was the Messiah', 'That he was a notorious thief', 'That he was one of the Roman soldiers'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكُلُّ مُجْرِمٍ',
        post: 'مِنْ جَرِيمَتِهِ.',
        en: 'And every criminal disclaims his crime.',
        options: ['يَتَنَصَّلُ', 'تَنَصَّلَ', 'مُتَنَصِّل', 'يَتَنَصَّلُونَ'],
        answer: 0,
        rationales: [
          'Imperfect, 3rd masculine singular -- agrees with the singular كُلُّ مُجْرِمٍ, matching the printed generalization.',
          'Perfect -- wrong tense; the sentence states a general, ongoing truth, not a single past event.',
          'Active participle -- wrong part of speech for this position.',
          'Plural -- wrong number; كُلُّ مُجْرِمٍ takes a singular verb.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالدُّنْيَا',
        post: 'وَظَلَامٌ.',
        en: 'The world was night and darkness.',
        options: ['لَيْلٌ', 'لَيْلاً', 'لَيْلِ', 'لَيْلَةٌ'],
        answer: 0,
        rationales: [
          'Indefinite nominative -- predicate of the equational sentence, agreeing with وَظَلَامٌ.',
          'Accusative -- wrong case; no verb here governs the accusative.',
          'Genitive, construct -- wrong case and state for a bare predicate.',
          '"a night" (single occasion) -- wrong sense; the text means night itself as a state, not one night.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهُمْ يَظُنُّونَ كُلَّ الظَّنِّ أَنَّ الْمَصْلُوبَ هُوَ',
        post: '.',
        en: 'and they were utterly certain that the one crucified was the Messiah.',
        options: ['الْمَسِيحُ', 'الْمَسِيحَ', 'الْمَسِيحِ', 'مَسِيحاً'],
        answer: 0,
        rationales: [
          'Nominative -- predicate of the pronoun هُوَ within أَنَّ\'s clause, matching the printed text.',
          'Accusative -- wrong case; nothing here governs the accusative on this word.',
          'Genitive -- wrong case; no preposition or construct governs it here.',
          'Indefinite accusative -- wrong case and state; the Messiah here is a specific, definite figure.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتَنَصَّلُ الْمُجْرِمُ مِنْ جَرِيمَتِهِ',
        pre: '',
        post: 'مِنْ جَرِيمَتِهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَتَنَصَّلُ', 'يَتَنَصَّلُ', 'تَتَنَصَّلُ', 'نَتَنَصَّلُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَنَصَّلُ الْمُجْرِمُ مِنْ جَرِيمَتِهِ',
        pre: '',
        post: 'مِنْ جَرِيمَتِهِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَتَنَصَّلُ', 'يَتَنَصَّلُ', 'أَتَنَصَّلُ', 'نَتَنَصَّلُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَنَصَّلُ الْمُجْرِمُ مِنْ جَرِيمَتِهِ',
        pre: '',
        post: 'مِنْ جَرِيمَتِهِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَتَنَصَّلُونَ', 'يَتَنَصَّلُ', 'تَتَنَصَّلُ', 'نَتَنَصَّلُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

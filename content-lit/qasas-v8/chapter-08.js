// قَصَصُ النَّبِيِّينَ, volume 8 «قِصَّةُ سَيِّدِنَا شُعَيْبٍ», chapter 8 --
// ما نَفْقَهُ كَثِيراً مِمَّا تَقُولُ. Printed page 220 (right after ch7's
// closing Qurʾān quote and the chapter heading box, ending before ch9's
// heading box). Transcribed from the verified source text against
// ../CHAPTER-FORMAT.md.
//
// The people feign incomprehension, as if their own brother -- the
// clearest speaker among them -- were talking in a foreign tongue: the same
// excuse people always make once advice grows heavy and obedience grows
// hard.
//
// Grammar / lexical notes:
//   -- كَبُرَ (qs-v8-c08-007, "to grow heavy, burdensome") and شَقَّ
//      (qs-v8-c08-008, "to be difficult, weigh heavily [on someone]") both
//      reuse already-taught corpus-wide lemmas (كَبُرَ "to grow great,"
//      شَقَّ "to tear, split") in their standard idiomatic extension --
//      كَبُرَ عَلَيْهِ / شَقَّ عَلَيْهِ, "it grew hard/heavy on him" -- rather
//      than new lemmas, matching the corpus's existing practice of glossing
//      a sense-shift inline on the same verb rather than re-declaring it
//      (cf. ch4's header note on حَلَّ, ch7's on حَمَلَ).
//   -- لُغَة and بَلَد were flagged as candidate new words for this chapter
//      in the draft assignment table, but lookup against the wider corpus
//      shows both already taught elsewhere with the senses used here --
//      dropped from newWords per CHAPTER-FORMAT.md's shared-lexicon rule
//      and reused with their existing lemma spellings.
//   -- أَبْلَغ and أَنْصَع (qs-v8-c08-006) are elative (تَفْضِيل) adjectives,
//      "most eloquent" and "clearest," each governing its following
//      accusative of specification (كَلَاماً، بَيَاناً).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): الْقَوْم، مَا، أَرَادَ،
//      شُعَيْب، كَأَنَّ، كَانَ، تَكَلَّمَ، مَعَ، لُغَة، اِبْن، بَلَد، أَخ، غَيْر، مُبِين،
//      فِي، كَلَام، هَكَذَا، قَالَ، النَّاس، إِذَا، النَّصِيحَة، عَمَل are all already
//      taught and are NOT re-listed in newWords here.
//
// 6 new words (تَجَاهَلَ، أَجْنَبِيّ، مُفْصِح، أَبْلَغ، أَنْصَع، بَيَان).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'ما نَفْقَهُ كَثِيراً مِمَّا تَقُولُ', en: '"We Do Not Understand Much of What You Say"' },
  newWords: ['تَجَاهَلَ', 'أَجْنَبِيّ', 'مُفْصِح', 'أَبْلَغ', 'أَنْصَع', 'بَيَان'],
  lemmas: {
    تَجَاهَلَ: { gloss: 'to feign ignorance, pretend not to understand' },
    أَجْنَبِيّ: { gloss: 'foreign' },
    مُفْصِح: { gloss: 'eloquent, clear-spoken' },
    أَبْلَغ: { gloss: 'most eloquent (elative)' },
    أَنْصَع: { gloss: 'clearest, purest (elative)' },
    بَيَان: { gloss: 'clarity, exposition' },
  },
  paragraphs: [
    {
      en: "The people pretended not to understand what Shuʿayb meant, as if he were speaking with them in a foreign language, even though he was a son of their own land and their own brother; as if he were not clear in his speech, not eloquent, even though he was among the most eloquent of them in speech and the clearest of them in exposition. And so people always speak when advice grows heavy on them and work grows hard on them.",
      sentences: [
        {
          id: 'qs-v8-c08-001',
          ar: 'وَتَجَاهَلَ الْقَوْمُ مَا أَرَادَهُ شُعَيْبٌ،',
          en: 'The people pretended not to understand what Shuʿayb meant,',
          tokens: [
            { surface: 'وَتَجَاهَلَ', lemma: 'تَجَاهَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ه ل', gloss: 'to feign ignorance, pretend not to understand; and feigned not to understand' },
            { surface: 'الْقَوْمُ', lemma: 'قَوْم', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَرَادَهُ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to want, mean; he meant' },
            { surface: 'شُعَيْبٌ', lemma: 'شُعَيْب', pos: 'proper', features: 'nom', gloss: 'Shuʿayb' },
          ],
        },
        {
          id: 'qs-v8-c08-002',
          ar: 'كَأَنَّهُ كَانَ يَتَكَلَّمُ مَعَهُمْ فِي لُغَةٍ أَجْنَبِيَّةٍ،',
          en: 'as if he were speaking with them in a foreign language,',
          tokens: [
            { surface: 'كَأَنَّهُ', lemma: 'كَأَنَّ', pos: 'part', features: 'part+3ms', gloss: 'as if he' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'يَتَكَلَّمُ', lemma: 'تَكَلَّمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to speak; speaking' },
            { surface: 'مَعَهُمْ', lemma: 'مَعَ', pos: 'prep', features: 'prep+3mp', gloss: 'with them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'لُغَةٍ', lemma: 'لُغَة', pos: 'noun', features: 'indef.gen', gloss: 'a language' },
            { surface: 'أَجْنَبِيَّةٍ', lemma: 'أَجْنَبِيّ', pos: 'adj', features: 'indef.gen.f', root: 'ج ن ب', gloss: 'foreign' },
          ],
        },
        {
          id: 'qs-v8-c08-003',
          ar: 'مَعَ أَنَّهُ ابْنُ الْبَلَدِ وَأَخُو الْقَوْمِ،',
          en: 'even though he was a son of their own land and their own brother,',
          tokens: [
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'even though (lit. with)' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'ابْنُ', lemma: 'اِبْن', pos: 'noun', features: 'nom.constr', gloss: 'a son of' },
            { surface: 'الْبَلَدِ', lemma: 'بَلَد', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'وَأَخُو', lemma: 'أَخ', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the brother of' },
            { surface: 'الْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v8-c08-004',
          ar: 'وَكَأَنَّهُ كَانَ غَيْرَ مُبِينٍ فِي كَلَامِهِ،',
          en: 'as if he were not clear in his speech,',
          tokens: [
            { surface: 'وَكَأَنَّهُ', lemma: 'كَأَنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and as if he' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'not' },
            { surface: 'مُبِينٍ', lemma: 'مُبِين', pos: 'adj', features: 'indef.gen', gloss: 'clear, plain' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كَلَامِهِ', lemma: 'كَلَام', pos: 'noun', features: 'gen+3ms', gloss: 'his speech' },
          ],
        },
        {
          id: 'qs-v8-c08-005',
          ar: 'غَيْرَ مُفْصِحٍ،',
          en: 'not eloquent,',
          tokens: [
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'not' },
            { surface: 'مُفْصِحٍ', lemma: 'مُفْصِح', pos: 'adj', features: 'indef.gen', root: 'ف ص ح', gloss: 'eloquent, clear-spoken' },
          ],
        },
        {
          id: 'qs-v8-c08-006',
          ar: 'مَعَ أَنَّهُ مِنْ أَبْلَغِهِمْ كَلَاماً وَأَنْصَعِهِمْ بَيَاناً،',
          en: 'even though he was among the most eloquent of them in speech and the clearest of them in exposition.',
          tokens: [
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'prep', features: 'prep', gloss: 'even though' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that he' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among, one of' },
            { surface: 'أَبْلَغِهِمْ', lemma: 'أَبْلَغ', pos: 'adj', features: 'gen+3mp', root: 'ب ل غ', gloss: 'the most eloquent of them' },
            { surface: 'كَلَاماً', lemma: 'كَلَام', pos: 'noun', features: 'indef.acc', gloss: 'in speech' },
            { surface: 'وَأَنْصَعِهِمْ', lemma: 'أَنْصَع', pos: 'adj', features: 'conj+gen+3mp', root: 'ن ص ع', gloss: 'and the clearest of them' },
            { surface: 'بَيَاناً', lemma: 'بَيَان', pos: 'noun', features: 'indef.acc', root: 'ب ي ن', gloss: 'in exposition' },
          ],
        },
        {
          id: 'qs-v8-c08-007',
          ar: 'وَهَكَذَا يَقُولُ النَّاسُ إِذَا كَبُرَتْ عَلَيْهِمُ النَّصِيحَةُ',
          en: 'And so people always speak when advice grows heavy on them',
          tokens: [
            { surface: 'وَهَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'conj+adv', gloss: 'and thus' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; speaks' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'people' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'كَبُرَتْ', lemma: 'كَبُرَ', pos: 'verb', features: 'perf.3fs', gloss: 'to become great, heavy, burdensome; grows heavy' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'النَّصِيحَةُ', lemma: 'نَصِيحَة', pos: 'noun', features: 'def.nom', gloss: 'the counsel, advice' },
          ],
        },
        {
          id: 'qs-v8-c08-008',
          ar: 'وَشَقَّ عَلَيْهِمُ الْعَمَلُ.',
          en: 'and work grows hard on them.',
          tokens: [
            { surface: 'وَشَقَّ', lemma: 'شَقَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be difficult, weigh heavily (idiom: شَقَّ عَلَيْهِ); and grew hard' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'الْعَمَلُ', lemma: 'عَمَل', pos: 'noun', features: 'def.nom', gloss: 'the work, deed' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا تَجَاهَلَ الْقَوْمُ كَلَامَ شُعَيْبٍ مَعَ أَنَّهُ ابْنُ بَلَدِهِمْ؟',
          options: ['تَظَاهَرُوا بِأَنَّهُمْ لَا يَفْهَمُونَهُ، كَأَنَّهُ يَتَكَلَّمُ بِلُغَةٍ أَجْنَبِيَّةٍ، مَعَ أَنَّهُ مِنْ أَبْلَغِهِمْ كَلَاماً', 'لِأَنَّهُ كَانَ يَتَكَلَّمُ بِلُغَةٍ لَا يَعْرِفُونَهَا حَقّاً', 'لِأَنَّهُ كَانَ أَخْرَسَ لَا يُحْسِنُ الْكَلَامَ'],
          answer: 0,
          qEn: "Why did the people pretend not to understand Shuʿayb's words, even though he was a son of their own land?",
          optionsEn: ["They pretended they could not understand him, as if he spoke a foreign language, even though he was the most eloquent of them in speech", "Because he really did speak a language they did not know", "Because he was mute and could not speak well"],
        },
        {
          q: 'مَاذَا يَفْعَلُ النَّاسُ عَادَةً بِحَسَبِ خَاتِمَةِ الْفَصْلِ إِذَا كَبُرَتْ عَلَيْهِمُ النَّصِيحَةُ؟',
          options: ['يَتَجَاهَلُونَ كَلَامَ النَّاصِحِ وَيَدَّعُونَ عَدَمَ الْفَهْمِ', 'يَشْكُرُونَ النَّاصِحَ وَيَعْمَلُونَ بِنَصِيحَتِهِ فَوْراً', 'يَطْلُبُونَ مِنَ النَّاصِحِ الْمَزِيدَ مِنَ التَّفْصِيلِ'],
          answer: 0,
          qEn: "According to the chapter's closing line, what do people usually do when advice grows heavy on them?",
          optionsEn: ["They pretend not to understand the advisor's words, claiming not to understand", "They thank the advisor and act on the advice at once", "They ask the advisor for more detail"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَأَنَّهُ كَانَ يَتَكَلَّمُ مَعَهُمْ فِي',
        post: 'أَجْنَبِيَّةٍ.',
        en: 'As if he were speaking with them in a foreign language.',
        options: ['لُغَةٍ', 'لُغَةً', 'اللُّغَةُ', 'لُغَاتٍ'],
        answer: 0,
        rationales: [
          'Indefinite genitive -- governed by فِي.',
          'Accusative -- wrong case; فِي governs the genitive.',
          'Definite nominative -- wrong definiteness and case for this position.',
          'Plural -- wrong number; the sentence names a single foreign tongue.',
        ],
      },
      {
        type: 'cloze',
        pre: 'مَعَ أَنَّهُ مِنْ',
        post: 'كَلَاماً وَأَنْصَعِهِمْ بَيَاناً.',
        en: 'Even though he was the most eloquent of them in speech and the clearest of them in exposition.',
        options: ['أَبْلَغِهِمْ', 'بَلِيغٌ', 'يُبَلِّغُهُمْ', 'بَلَاغَتُهُمْ'],
        answer: 0,
        rationales: [
          'Elative, genitive with attached pronoun -- "the most eloquent of them," matching the comparative frame مِنْ...',
          'Plain adjective, nominative, no comparison -- wrong form for a superlative sense.',
          'Verb -- wrong part of speech for this position.',
          'Verbal noun ("their eloquence") -- wrong part of speech.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهَكَذَا يَقُولُ النَّاسُ إِذَا',
        post: 'عَلَيْهِمُ النَّصِيحَةُ وَشَقَّ عَلَيْهِمُ الْعَمَلُ.',
        en: 'And so people speak when advice grows heavy on them and work grows hard on them.',
        options: ['كَبُرَتْ', 'كَبُرَ', 'يَكْبُرُ', 'أَكْبَرُ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd feminine singular -- agrees with the feminine subject النَّصِيحَةُ.',
          'Perfect, 3rd masculine singular -- wrong gender; النَّصِيحَةُ is feminine.',
          'Imperfect -- wrong tense; the clause narrates a general truth in the perfect after إِذَا.',
          'Elative ("greater") -- wrong part of speech for the main verb of the clause.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَتَجَاهَلُ الرَّجُلُ النَّصِيحَةَ',
        pre: '',
        post: 'النَّصِيحَةَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَتَجَاهَلُ', 'يَتَجَاهَلُ', 'تَتَجَاهَلُ', 'نَتَجَاهَلُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَجَاهَلُ الرَّجُلُ النَّصِيحَةَ',
        pre: '',
        post: 'النَّصِيحَةَ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you all (m)',
        options: ['تَتَجَاهَلُونَ', 'يَتَجَاهَلُ', 'أَتَجَاهَلُ', 'نَتَجَاهَلُ'],
        answer: 0,
        rationales: [
          '2nd masculine plural imperfect -- matches أَنْتُمْ.',
          '3rd masculine singular -- the base form, not shifted to "you all."',
          '1st singular -- wrong person; the target is "you all," not "I."',
          '1st plural -- wrong person; the target is "you all," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَتَجَاهَلُ الرَّجُلُ النَّصِيحَةَ',
        pre: '',
        post: 'النَّصِيحَةَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَتَجَاهَلُونَ', 'يَتَجَاهَلُ', 'تَتَجَاهَلُونَ', 'نَتَجَاهَلُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd masculine plural -- wrong person; this is "they," not "you all."',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
    ],
  },
};

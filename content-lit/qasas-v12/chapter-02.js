// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 2 -- أَمْرٌ كُلُّهُ عَجَبٌ. Printed page 251
// only -- the heading sits partway down the page (right after ch1's
// closing Qur'an quotation) and the whole chapter ends before ch3's
// heading خُضُوعُ الْيَهُودِ لِلْأَسْبَابِ الظَّاهِرَةِ, which opens page 252.
// Transcribed by hand from the scan (vision OCR, 150dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// The shortest chapter of this cluster: just three printed sentences
// situating ʿĪsā's birth historically -- it fell in an age when Greek
// rational and mathematical learning had reached its peak, and medicine
// as a discipline held real prestige and authority.
//
// Grammar / lexical notes:
//   -- بَلَغَتْ (qs-v12-c02-003) agrees feminine with يُونَانُ (Greece/the
//      Greek nation), treated as grammatically feminine here as a
//      collective/place name, matching Arabic's normal treatment of
//      country and nation names.
//   -- The one printed sentence spanning "وَقَدْ كَانَتْ وِلَادَتُهُ فِي عَصْرٍ
//      بَلَغَتْ فِيهِ «يُونَانُ» أَوْجَهَا فِي الْعُلُومِ الْعَقْلِيَّةِ وَالرِّيَاضِيَّةِ"
//      carries no internal comma but is split at two natural clause
//      boundaries (qs-v12-c02-002/003/004) purely for length, matching
//      the precedent set in qasas-v3/chapter-14.js (its own s004/s005
//      split a relative clause with no punctuation for the same reason).
//      This also lets this very short chapter clear the five-buildable-
//      sentence minimum in CHAPTER-FORMAT.md without inventing content.
//   -- أَوْج ("zenith, peak," an astronomical/rhetorical term for
//      "high point") is new; عَقْلِيّ and رِيَاضِيّ are new adjectives built
//      on the already-known nouns عَقْل and (unrelated to it) a root not
//      otherwise seen yet in this volume.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): أَمْر، سَيِّد، عِيسَى
//      (both introduced ch1), كُلّ، عَجَب، كَانَ، فِي، عِلْم، طِبّ (introduced
//      ch1) are all already known and are NOT re-listed in newWords here.
//
// 7 new words: عَصْر، يُونَان، أَوْج، عَقْلِيّ، رِيَاضِيّ، دَوْلَة، صَوْلَة.
// يُونَان (Greece/the Hellenistic world) is a new proper noun.
//
// No page footnotes (book_note) on page 251.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'أَمْرٌ كُلُّهُ عَجَبٌ', en: 'A Matter Wholly Wondrous' },
  newWords: [
    'عَصْر', 'يُونَان', 'أَوْج', 'عَقْلِيّ', 'رِيَاضِيّ', 'دَوْلَة',
    'صَوْلَة',
  ],
  lemmas: {
    عَصْر: { gloss: 'era, age' },
    يُونَان: { gloss: 'Greece, the Greek/Hellenistic world' },
    أَوْج: { gloss: 'zenith, peak, apex' },
    عَقْلِيّ: { gloss: 'rational, intellectual' },
    رِيَاضِيّ: { gloss: 'mathematical' },
    دَوْلَة: { gloss: 'dominion, sway, ascendancy' },
    صَوْلَة: { gloss: 'might, authority' },
  },
  paragraphs: [
    {
      en: "Our master ʿĪsā's whole affair is a wonder: his birth came in an age when Greece had reached its zenith in the rational and mathematical sciences, and medicine held real sway and authority.",
      sentences: [
        {
          id: 'qs-v12-c02-001',
          ar: 'وَأَمْرُ سَيِّدِنَا عِيسَى كُلُّهُ عَجَبٌ،',
          en: "Our master ʿĪsā's whole affair is a wonder,",
          tokens: [
            { surface: 'وَأَمْرُ', lemma: 'أَمْر', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the affair of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
            { surface: 'عِيسَى', lemma: 'عِيسَى', pos: 'proper', features: 'gen', gloss: 'Isa' },
            { surface: 'كُلُّهُ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3ms', gloss: 'all of it' },
            { surface: 'عَجَبٌ', lemma: 'عَجَب', pos: 'noun', features: 'indef.nom', gloss: 'a wonder' },
          ],
        },
        {
          id: 'qs-v12-c02-002',
          ar: 'وَقَدْ كَانَتْ وِلَادَتُهُ فِي عَصْرٍ',
          en: 'and his birth came in an age',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; was' },
            { surface: 'وِلَادَتُهُ', lemma: 'وِلَادَة', pos: 'noun', features: 'nom+3ms', gloss: 'his birth' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'عَصْرٍ', lemma: 'عَصْر', pos: 'noun', features: 'indef.gen', gloss: 'an age, era' },
          ],
        },
        {
          id: 'qs-v12-c02-003',
          ar: 'بَلَغَتْ فِيهِ «يُونَانُ» أَوْجَهَا',
          en: 'when Greece had reached its zenith',
          tokens: [
            { surface: 'بَلَغَتْ', lemma: 'بَلَغَ', pos: 'verb', features: 'perf.3fs', gloss: 'to reach; reached' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in which' },
            { surface: 'يُونَانُ', lemma: 'يُونَان', pos: 'proper', features: 'nom', gloss: 'Greece' },
            { surface: 'أَوْجَهَا', lemma: 'أَوْج', pos: 'noun', features: 'acc+3fs', gloss: 'its zenith' },
          ],
        },
        {
          id: 'qs-v12-c02-004',
          ar: 'فِي الْعُلُومِ الْعَقْلِيَّةِ وَالرِّيَاضِيَّةِ،',
          en: 'in the rational and mathematical sciences,',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْعُلُومِ', lemma: 'عِلْم', pos: 'noun', features: 'def.gen.pl', gloss: 'the sciences' },
            { surface: 'الْعَقْلِيَّةِ', lemma: 'عَقْلِيّ', pos: 'adj', features: 'def.gen.f', root: 'ع ق ل', gloss: 'rational, intellectual' },
            { surface: 'وَالرِّيَاضِيَّةِ', lemma: 'رِيَاضِيّ', pos: 'adj', features: 'conj+def.gen.f', root: 'ر و ض', gloss: 'and mathematical' },
          ],
        },
        {
          id: 'qs-v12-c02-005',
          ar: 'وَكَانَتْ لِلطِّبِّ دَوْلَةٌ وَصَوْلَةٌ.',
          en: 'and medicine held real sway and authority.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and there was' },
            { surface: 'لِلطِّبِّ', lemma: 'طِبّ', pos: 'noun', features: 'prep+def.gen', gloss: 'for medicine' },
            { surface: 'دَوْلَةٌ', lemma: 'دَوْلَة', pos: 'noun', features: 'indef.nom', gloss: 'dominion, sway' },
            { surface: 'وَصَوْلَةٌ', lemma: 'صَوْلَة', pos: 'noun', features: 'conj+indef.nom', gloss: 'and might, authority' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَتَى كَانَتْ وِلَادَةُ سَيِّدِنَا عِيسَى؟',
          options: ['فِي عَصْرٍ بَلَغَتْ فِيهِ يُونَانُ أَوْجَهَا فِي الْعُلُومِ الْعَقْلِيَّةِ وَالرِّيَاضِيَّةِ', 'قَبْلَ ظُهُورِ أَيِّ عِلْمٍ عَقْلِيٍّ', 'بَعْدَ سُقُوطِ الْحَضَارَةِ الْيُونَانِيَّةِ بِزَمَنٍ طَوِيلٍ'],
          answer: 0,
          qEn: 'When was the birth of our master ʿĪsā?',
          optionsEn: ['In an age when Greece had reached its zenith in the rational and mathematical sciences', 'Before any rational science had appeared', 'Long after the fall of Greek civilization'],
        },
        {
          q: 'مَاذَا كَانَ لِلطِّبِّ فِي ذَلِكَ الْعَصْرِ؟',
          options: ['دَوْلَةٌ وَصَوْلَةٌ', 'إِهْمَالٌ وَضَعْفٌ', 'مَنْعٌ مِنَ السُّلْطَاتِ'],
          answer: 0,
          qEn: 'What did medicine have in that age?',
          optionsEn: ['Dominance and sway', 'Neglect and weakness', 'A ban from the authorities'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَقَدْ',
        post: 'وِلَادَتُهُ فِي عَصْرٍ.',
        en: 'And his birth was in an age.',
        options: ['كَانَتْ', 'كَانَ', 'كَانُوا', 'يَكُونُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular perfect -- agrees with feminine وِلَادَتُهُ.',
          '3rd masculine singular -- wrong gender for وِلَادَتُهُ.',
          '3rd masculine plural -- wrong number and gender.',
          'Imperfect -- wrong tense; the sentence narrates a past state.',
        ],
      },
      {
        type: 'cloze',
        pre: 'عَصْرٍ فِيهِ',
        post: 'يُونَانُ أَوْجَهَا فِي الْعُلُومِ.',
        en: 'An age in which Greece reached its zenith in the sciences.',
        options: ['بَلَغَتْ', 'بَلَغَ', 'بَلَغُوا', 'يَبْلُغُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular perfect -- agrees with feminine يُونَانُ.',
          '3rd masculine singular -- wrong gender for يُونَانُ.',
          '3rd masculine plural -- wrong number and gender.',
          'Imperfect -- wrong tense; the sentence narrates a past event.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَأَمْرُ سَيِّدِنَا عِيسَى كُلُّهُ',
        post: '.',
        en: "Our master ʿĪsā's whole affair is a wonder.",
        options: ['عَجَبٌ', 'عَجَبًا', 'عَجَبٍ', 'عَجِيب'],
        answer: 0,
        rationales: [
          'Indefinite nominative -- predicate of the nominal sentence.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive -- wrong case; no preposition or construct governs this word.',
          'Adjective form -- wrong part of speech for this predicate position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَبْلُغُ الطَّالِبُ أَوْجَهُ فِي الْعِلْمِ',
        pre: '',
        post: 'أَوْجَهُ فِي الْعِلْمِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَبْلُغُ', 'يَبْلُغُ', 'تَبْلُغُ', 'نَبْلُغُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person.',
          '1st plural -- wrong number; the target is singular أَنَا.',
        ],
      },
      {
        type: 'shift',
        base: 'يَبْلُغُ الطَّالِبُ أَوْجَهُ فِي الْعِلْمِ',
        pre: '',
        post: 'أَوْجَهُ فِي الْعِلْمِ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَبْلُغُ', 'يَبْلُغُ', 'أَبْلُغُ', 'نَبْلُغُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular imperfect -- matches هِيَ.',
          '3rd masculine singular -- the base form, not shifted to "she."',
          '1st singular -- wrong person.',
          '1st plural -- wrong person and number.',
        ],
      },
      {
        type: 'shift',
        base: 'يَبْلُغُ الطَّالِبُ أَوْجَهُ فِي الْعِلْمِ',
        pre: '',
        post: 'أَوْجَهُ فِي الْعِلْمِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَبْلُغُونَ', 'يَبْلُغُ', 'تَبْلُغُ', 'نَبْلُغُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- wrong person.',
        ],
      },
    ],
  },
};

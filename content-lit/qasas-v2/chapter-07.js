// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 7 -- مِنَ الْبِئْرِ
// إِلَى الْقَصْرِ. Printed page 34 (from the divider, after ch6's closing
// وَكَانَ اللَّيْلُ مُظْلِماً) - 35 (ending before ch8's heading الْوَفَاءُ
// وَالأَمَانَةُ). Transcribed by hand from the scan (vision OCR, 300dpi
// render, plus targeted PIL crops to confirm several lines) against
// ../CHAPTER-FORMAT.md.
//
// A caravan stops at the well, draws Yūsuf up in its bucket, and sells him
// in Egypt's market to al-ʿAzīz. One short Qur'anic fragment (Sūrat Yūsuf
// 12:19 partial, «يَا بُشْرَى هَذَا غُلَامٌ») is split into <=2-token pieces
// per the house workaround (qasas-v1 ch11's header note).
//
// Grammar / lexical notes:
//   -- qs-v2-c07-014: as with qs-v2-c05-{003,004}'s يَاأَبَانَا, the printed
//      page kerns يَبُشْرَى with no visible gap (mirroring the Qur'an's own
//      convention of writing يا + the following word as one connected
//      unit). Tokenized here as two ordinary tokens (يَا + بُشْرَى) for the
//      same consistency reasons documented in qasas-v2 ch5's header.
//   -- qs-v2-c07-005 (لِيَأْتِيَ) is this course's first لَامُ التَّعْلِيل
//      (purpose لِ + subjunctive verb, "so that he might bring") -- distinct
//      from لِ+noun (tagged prep+case elsewhere in this course). Tagged
//      with a leading part+ segment on the verb itself (features
//      'part+impf.3ms'), following the same "single leading atom = fused
//      proclitic" pattern already used for the لام التوكيد in qasas-v2 ch3
//      -- CHAPTER-FORMAT.md has no dedicated atom for either لام, so both
//      degrade the same safe way.
//   -- qs-v2-c07-{009,011}: فَإِذَا here is إِذَا الْفُجَائِيَّة ("the إِذَا of
//      sudden surprise": "and suddenly..."), a different sense from the
//      conditional/temporal إِذَا already taught (qasas-v1 ch3, qasas-v2
//      ch5) -- same lemma reused, gloss adjusted per-token rather than
//      re-listed in newWords, matching how this course handles polysemous
//      particles elsewhere (e.g. مَا as both rel and neg).
//   -- qs-v2-c07-{021,024,025}: الْعَزِيزُ ("the ʿAzīz", Potiphar's title in
//      this story) reuses the root of عَزِيز (already taught as a plain
//      adjective "dear, precious" in qasas-v2 ch3) but functions here as a
//      recurring character's proper title -- permanently definite, unlike
//      an ordinary noun that merely happens to be definite in one clause.
//      Given a learner encountering الْعَزِيزُ needs "the chief minister of
//      Egypt," not "dear, precious," it's tagged with its own lemma
//      الْعَزِيز (article baked in) rather than reusing the bare adjective
//      lemma -- the same reasoning already applied to اللَّه (a name that
//      is inherently definite, not a common noun tagged def in this one
//      instance), and a deliberate, considered exception to this course's
//      usual "bare lemma + def atom" rule for ordinary definite nouns.
//   -- qs-v2-c07-{022,023} (بَاعَهُ التُّجَّارُ): verb precedes its plural
//      subject التُّجَّارُ, so agreement stays singular (perf.3ms), matching
//      the same rule already applied throughout this course (فَرِحَ
//      الإِخْوَةُ, etc.).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): سَافَرَ, عَطِشَ, طَرِيق,
//      رَأَى, أَرْسَلَ, أَتَى, مَاء, رَجُل, غُلَام, دَهِشَ, وَصَلَ, بَاعَ, عَرَفَ,
//      رَشِيد, نَاس, جِدّ, وَلَد are all already taught and NOT re-listed in
//      newWords here.
//
// 21 new words (جَمَاعَة، بَحَثَ، أَدْلَى، دَلْو، نَزَعَ، ثَقِيل، أَخْرَجَ، نَادَى،
// بُشْرَى، أَخْفَى، قَامَ، سُوق، اِشْتَرَى، دِرْهَم، مَعْدُود، تَاجِر، قَصْر، اِمْرَأَة،
// أَكْرَمَ، مِصْر، الْعَزِيز).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'مِنَ الْبِئْرِ إِلَى الْقَصْرِ', en: 'From the Well to the Palace' },
  newWords: [
    'جَمَاعَة', 'بَحَثَ', 'أَدْلَى', 'دَلْو', 'نَزَعَ', 'ثَقِيل', 'أَخْرَجَ', 'نَادَى',
    'بُشْرَى', 'أَخْفَى', 'قَامَ', 'سُوق', 'اِشْتَرَى', 'دِرْهَم', 'مَعْدُود', 'تَاجِر',
    'قَصْر', 'اِمْرَأَة', 'أَكْرَمَ', 'مِصْر', 'الْعَزِيز',
  ],
  lemmas: {
    'جَمَاعَة': { gloss: 'a group, party' },
    'بَحَثَ': { gloss: 'to search (for)' },
    'أَدْلَى': { gloss: 'to lower, let down' },
    'دَلْو': { gloss: 'bucket' },
    'نَزَعَ': { gloss: 'to pull out, remove' },
    'ثَقِيل': { gloss: 'heavy' },
    'أَخْرَجَ': { gloss: 'to take out, extract' },
    'نَادَى': { gloss: 'to call out' },
    'بُشْرَى': { gloss: 'good news, glad tidings' },
    'أَخْفَى': { gloss: 'to hide, conceal' },
    'قَامَ': { gloss: 'to stand, rise' },
    'سُوق': { gloss: 'market' },
    'اِشْتَرَى': { gloss: 'to buy' },
    'دِرْهَم': { gloss: 'dirham (a coin)' },
    'مَعْدُود': { gloss: 'counted, limited (in number)' },
    'تَاجِر': { gloss: 'merchant' },
    'قَصْر': { gloss: 'palace' },
    'اِمْرَأَة': { gloss: 'woman, wife' },
    'أَكْرَمَ': { gloss: 'to honor, treat generously' },
    'مِصْر': { gloss: 'Egypt' },
    'الْعَزِيز': { gloss: 'the ʿAzīz (chief minister of Egypt)' },
  },
  paragraphs: [
    {
      en: 'There was a group traveling in this forest. They grew thirsty on the road, and searched for a well. They saw a well, so they sent a man to bring them water. The man came to the well,',
      sentences: [
        {
          id: 'qs-v2-c07-001',
          ar: 'وَكَانَتْ جَمَاعَةٌ تُسَافِرُ فِي هَذِهِ الْغَابَةِ.',
          en: 'There was a group traveling in this forest.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'جَمَاعَةٌ', lemma: 'جَمَاعَة', pos: 'noun', features: 'indef.nom', root: 'ج م ع', gloss: 'a group' },
            { surface: 'تُسَافِرُ', lemma: 'سَافَرَ', pos: 'verb', features: 'impf.3fs', root: 'س ف ر', gloss: 'to travel; travels' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْغَابَةِ', lemma: 'غَابَة', pos: 'noun', features: 'def.gen', root: 'غ ي ب', gloss: 'the forest' },
          ],
        },
        {
          id: 'qs-v2-c07-002',
          ar: 'وَعَطِشُوا فِي الطَّرِيقِ،',
          en: 'They grew thirsty on the road,',
          tokens: [
            { surface: 'وَعَطِشُوا', lemma: 'عَطِشَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ع ط ش', gloss: 'to be thirsty; and grew thirsty' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الطَّرِيقِ', lemma: 'طَرِيق', pos: 'noun', features: 'def.gen', root: 'ط ر ق', gloss: 'the road' },
          ],
        },
        {
          id: 'qs-v2-c07-003',
          ar: 'وَبَحَثُوا عَنْ بِئْرٍ.',
          en: 'and searched for a well.',
          tokens: [
            { surface: 'وَبَحَثُوا', lemma: 'بَحَثَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ب ح ث', gloss: 'to search; and searched' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'بِئْرٍ', lemma: 'بِئْر', pos: 'noun', features: 'indef.gen', root: 'ب أ ر', gloss: 'a well' },
          ],
        },
        {
          id: 'qs-v2-c07-004',
          ar: 'وَرَأَوْا بِئْراً،',
          en: 'They saw a well,',
          tokens: [
            { surface: 'وَرَأَوْا', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ر أ ي', gloss: 'to see; and they saw' },
            { surface: 'بِئْراً', lemma: 'بِئْر', pos: 'noun', features: 'indef.acc', root: 'ب أ ر', gloss: 'a well' },
          ],
        },
        {
          id: 'qs-v2-c07-005',
          ar: 'فَأَرْسَلُوا إِلَيْهَا رَجُلاً لِيَأْتِيَ لَهُمْ بِالْمَاءِ.',
          en: 'so they sent a man to bring them water.',
          tokens: [
            { surface: 'فَأَرْسَلُوا', lemma: 'أَرْسَلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ر س ل', gloss: 'to send; so they sent' },
            { surface: 'إِلَيْهَا', lemma: 'إِلَى', pos: 'prep', features: 'prep+3fs', gloss: 'to it' },
            { surface: 'رَجُلاً', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', root: 'ر ج ل', gloss: 'a man' },
            { surface: 'لِيَأْتِيَ', lemma: 'أَتَى', pos: 'verb', features: 'part+impf.3ms', root: 'أ ت ي', gloss: 'to come, bring; so that he might bring' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'بِالْمَاءِ', lemma: 'مَاء', pos: 'noun', features: 'prep+def.gen', root: 'م و ه', gloss: 'with the water' },
          ],
        },
        {
          id: 'qs-v2-c07-006',
          ar: 'جَاءَ الرَّجُلُ إِلَى الْبِئْرِ،',
          en: 'The man came to the well,',
          tokens: [
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', root: 'ج ي أ', gloss: 'to come; came' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْبِئْرِ', lemma: 'بِئْر', pos: 'noun', features: 'def.gen', root: 'ب أ ر', gloss: 'the well' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'and lowered his bucket. and pulled out the bucket, and suddenly the bucket was heavy! He took it out, and suddenly, in the bucket was a boy! The man was astonished',
      sentences: [
        {
          id: 'qs-v2-c07-007',
          ar: 'وَأَدْلَى دَلْوَهُ.',
          en: 'and lowered his bucket.',
          tokens: [
            { surface: 'وَأَدْلَى', lemma: 'أَدْلَى', pos: 'verb', features: 'conj+perf.3ms', root: 'د ل و', gloss: 'to lower, let down; and lowered' },
            { surface: 'دَلْوَهُ', lemma: 'دَلْو', pos: 'noun', features: 'acc+3ms', root: 'د ل و', gloss: 'his bucket' },
          ],
        },
        {
          id: 'qs-v2-c07-008',
          ar: 'وَنَزَعَ الدَّلْوَ،',
          en: 'and pulled out the bucket,',
          tokens: [
            { surface: 'وَنَزَعَ', lemma: 'نَزَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ز ع', gloss: 'to pull out, remove; and pulled out' },
            { surface: 'الدَّلْوَ', lemma: 'دَلْو', pos: 'noun', features: 'def.acc', root: 'د ل و', gloss: 'the bucket' },
          ],
        },
        {
          id: 'qs-v2-c07-009',
          ar: 'فَإِذَا الدَّلْوُ ثَقِيلَةٌ!',
          en: 'and suddenly the bucket was heavy!',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and suddenly, and lo' },
            { surface: 'الدَّلْوُ', lemma: 'دَلْو', pos: 'noun', features: 'def.nom', root: 'د ل و', gloss: 'the bucket' },
            { surface: 'ثَقِيلَةٌ', lemma: 'ثَقِيل', pos: 'adj', features: 'indef.nom.f', root: 'ث ق ل', gloss: 'heavy' },
          ],
        },
        {
          id: 'qs-v2-c07-010',
          ar: 'وَأَخْرَجَهَا',
          en: 'He took it out,',
          tokens: [
            { surface: 'وَأَخْرَجَهَا', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+perf.3ms+3fs', root: 'خ ر ج', gloss: 'to take out, extract; and he took it out' },
          ],
        },
        {
          id: 'qs-v2-c07-011',
          ar: 'فَإِذَا فِي الدَّلْوِ غُلَامٌ!',
          en: 'and suddenly, in the bucket was a boy!',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and suddenly, and lo' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الدَّلْوِ', lemma: 'دَلْو', pos: 'noun', features: 'def.gen', root: 'د ل و', gloss: 'the bucket' },
            { surface: 'غُلَامٌ', lemma: 'غُلَام', pos: 'noun', features: 'indef.nom', root: 'غ ل م', gloss: 'a boy, young man' },
          ],
        },
        {
          id: 'qs-v2-c07-012',
          ar: 'دَهِشَ الرَّجُلُ',
          en: 'The man was astonished',
          tokens: [
            { surface: 'دَهِشَ', lemma: 'دَهِشَ', pos: 'verb', features: 'perf.3ms', root: 'د ه ش', gloss: 'to be astonished; was astonished' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ خَرَجَ يُوسُفُ مِنَ الْبِئْرِ؟',
          options: ['رَجُلٌ مِنَ الْمُسَافِرِينَ أَدْلَى دَلْوَهُ فَوَجَدَهُ', 'خَرَجَ بِنَفْسِهِ', 'أَنْزَلَ لَهُ يَعْقُوبُ حَبْلاً'],
          answer: 0,
          qEn: 'How did Yūsuf get out of the well?',
          optionsEn: ['A traveler lowered his bucket and found him', 'He climbed out by himself', 'Yaʿqūb lowered a rope for him'],
        },
      ],
    },
    {
      en: 'and called out: \'Good news! This is a boy.\' The people rejoiced greatly and hid him. They arrived in Egypt,',
      sentences: [
        {
          id: 'qs-v2-c07-013',
          ar: 'وَنَادَى.',
          en: 'and called out:',
          tokens: [
            { surface: 'وَنَادَى', lemma: 'نَادَى', pos: 'verb', features: 'conj+perf.3ms', root: 'ن د ي', gloss: 'to call out; and called out' },
          ],
        },
        {
          id: 'qs-v2-c07-014',
          ar: '﴿يَا بُشْرَى',
          en: "'Good news!",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'بُشْرَى', lemma: 'بُشْرَى', pos: 'noun', features: 'indef.nom', root: 'ب ش ر', gloss: 'good news, glad tidings' },
          ],
        },
        {
          id: 'qs-v2-c07-015',
          ar: 'هَذَا غُلَامٌ﴾.',
          en: "This is a boy.'",
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'غُلَامٌ', lemma: 'غُلَام', pos: 'noun', features: 'indef.nom', root: 'غ ل م', gloss: 'a boy, young man' },
          ],
        },
        {
          id: 'qs-v2-c07-016',
          ar: 'وَفَرِحَ النَّاسُ جِدًّا',
          en: 'The people rejoiced greatly',
          tokens: [
            { surface: 'وَفَرِحَ', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ر ح', gloss: 'to rejoice; and rejoiced' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', root: 'ج د د', gloss: 'very, greatly' },
          ],
        },
        {
          id: 'qs-v2-c07-017',
          ar: 'وَأَخْفَوْهُ.',
          en: 'and hid him.',
          tokens: [
            { surface: 'وَأَخْفَوْهُ', lemma: 'أَخْفَى', pos: 'verb', features: 'conj+perf.3mp+3ms', root: 'خ ف ي', gloss: 'to hide, conceal; and they hid him' },
          ],
        },
        {
          id: 'qs-v2-c07-018',
          ar: 'وَوَصَلُوا إِلَى مِصْرَ،',
          en: 'They arrived in Egypt,',
          tokens: [
            { surface: 'وَوَصَلُوا', lemma: 'وَصَلَ', pos: 'verb', features: 'conj+perf.3mp', root: 'و ص ل', gloss: 'to arrive; and they arrived' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'in, to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'acc', gloss: 'Egypt' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'and stood in the market and called out: \'Who will buy this boy? Who will buy this boy?\' Al-ʿAzīz bought Yūsuf for a few dirhams. The merchants sold him and did not know who Yūsuf was. Al-ʿAzīz took him to his palace, and said to his wife: \'Honor Yūsuf, he is a right-minded boy.\'',
      sentences: [
        {
          id: 'qs-v2-c07-019',
          ar: 'وَقَامُوا فِي السُّوقِ',
          en: 'and stood in the market',
          tokens: [
            { surface: 'وَقَامُوا', lemma: 'قَامَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ق و م', gloss: 'to stand, rise; and they stood' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السُّوقِ', lemma: 'سُوق', pos: 'noun', features: 'def.gen', root: 'س و ق', gloss: 'the market' },
          ],
        },
        {
          id: 'qs-v2-c07-020',
          ar: 'وَنَادَوْا: مَنْ يَشْتَرِي هَذَا الْغُلَامَ؟',
          en: "and called out: 'Who will buy this boy?",
          tokens: [
            { surface: 'وَنَادَوْا', lemma: 'نَادَى', pos: 'verb', features: 'conj+perf.3mp', root: 'ن د ي', gloss: 'to call out; and they called out' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يَشْتَرِي', lemma: 'اِشْتَرَى', pos: 'verb', features: 'impf.3ms', root: 'ش ر ي', gloss: 'to buy; buys' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْغُلَامَ', lemma: 'غُلَام', pos: 'noun', features: 'def.acc', root: 'غ ل م', gloss: 'the boy' },
          ],
        },
        {
          id: 'qs-v2-c07-021',
          ar: 'مَنْ يَشْتَرِي هَذَا الْغُلَامَ؟',
          en: "Who will buy this boy?'",
          tokens: [
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'يَشْتَرِي', lemma: 'اِشْتَرَى', pos: 'verb', features: 'impf.3ms', root: 'ش ر ي', gloss: 'to buy; buys' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْغُلَامَ', lemma: 'غُلَام', pos: 'noun', features: 'def.acc', root: 'غ ل م', gloss: 'the boy' },
          ],
        },
        {
          id: 'qs-v2-c07-022',
          ar: 'اشْتَرَى الْعَزِيزُ يُوسُفَ بِدَرَاهِمَ مَعْدُودَةٍ.',
          en: 'Al-ʿAzīz bought Yūsuf for a few dirhams.',
          tokens: [
            { surface: 'اشْتَرَى', lemma: 'اِشْتَرَى', pos: 'verb', features: 'perf.3ms', root: 'ش ر ي', gloss: 'to buy; bought' },
            { surface: 'الْعَزِيزُ', lemma: 'الْعَزِيز', pos: 'proper', features: 'nom', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'بِدَرَاهِمَ', lemma: 'دِرْهَم', pos: 'noun', features: 'prep+pl.indef.gen', root: 'د ر ه م', gloss: 'with dirhams' },
            { surface: 'مَعْدُودَةٍ', lemma: 'مَعْدُود', pos: 'adj', features: 'indef.gen.f', root: 'ع د د', gloss: 'counted, few in number' },
          ],
        },
        {
          id: 'qs-v2-c07-023',
          ar: 'وَبَاعَهُ التُّجَّارُ',
          en: 'The merchants sold him',
          tokens: [
            { surface: 'وَبَاعَهُ', lemma: 'بَاعَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ب ي ع', gloss: 'to sell; and sold him' },
            { surface: 'التُّجَّارُ', lemma: 'تَاجِر', pos: 'noun', features: 'pl.def.nom', root: 'ت ج ر', gloss: 'the merchants' },
          ],
        },
        {
          id: 'qs-v2-c07-024',
          ar: 'وَمَا عَرَفُوا يُوسُفَ.',
          en: 'and did not know who Yūsuf was.',
          tokens: [
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'عَرَفُوا', lemma: 'عَرَفَ', pos: 'verb', features: 'perf.3mp', root: 'ع ر ف', gloss: 'to know; they knew' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c07-025',
          ar: 'وَذَهَبَ بِهِ الْعَزِيزُ إِلَى قَصْرِهِ،',
          en: 'Al-ʿAzīz took him to his palace,',
          tokens: [
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ذ ه ب', gloss: 'to go; and went, took' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with him' },
            { surface: 'الْعَزِيزُ', lemma: 'الْعَزِيز', pos: 'proper', features: 'nom', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قَصْرِهِ', lemma: 'قَصْر', pos: 'noun', features: 'gen+3ms', root: 'ق ص ر', gloss: 'his palace' },
          ],
        },
        {
          id: 'qs-v2-c07-026',
          ar: 'وَقَالَ لِامْرَأَتِهِ أَكْرِمِي يُوسُفَ،',
          en: "and said to his wife: 'Honor Yūsuf,",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لِامْرَأَتِهِ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'prep+gen+3ms', root: 'م ر أ', gloss: 'to his wife' },
            { surface: 'أَكْرِمِي', lemma: 'أَكْرَمَ', pos: 'verb', features: 'imp.2fs', root: 'ك ر م', gloss: 'to honor, be generous to; honor! (f.)' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c07-027',
          ar: 'إِنَّهُ وَلَدٌ رَشِيدٌ.',
          en: "he is a right-minded boy.'",
          tokens: [
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'وَلَدٌ', lemma: 'وَلَد', pos: 'noun', features: 'indef.nom', root: 'و ل د', gloss: 'a boy' },
            { surface: 'رَشِيدٌ', lemma: 'رَشِيد', pos: 'adj', features: 'indef.nom', root: 'ر ش د', gloss: 'mature, of sound judgement' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ النَّاسُ لَمَّا وَصَلُوا إِلَى مِصْرَ؟',
          options: ['قَامُوا فِي السُّوقِ وَنَادَوْا مَنْ يَشْتَرِي هَذَا الْغُلَامَ', 'ذَهَبُوا مُبَاشَرَةً إِلَى قَصْرِ الْعَزِيزِ', 'أَعَادُوا يُوسُفَ إِلَى أَبِيهِ'],
          answer: 0,
          qEn: 'What did the people do when they arrived in Egypt?',
          optionsEn: ['They stood in the market and called out, who will buy this boy', "They went straight to al-ʿAzīz's palace", 'They returned Yūsuf to his father'],
        },
        {
          q: 'مَاذَا قَالَ الْعَزِيزُ لِامْرَأَتِهِ عَنْ يُوسُفَ؟',
          options: ['أَكْرِمِي يُوسُفَ إِنَّهُ وَلَدٌ رَشِيدٌ', 'لَا تَقْتَرِبِي مِنْهُ', 'بِيعِيهِ فِي السُّوقِ'],
          answer: 0,
          qEn: "What did al-ʿAzīz tell his wife about Yūsuf?",
          optionsEn: ['Honor Yūsuf, he is a right-minded boy', "Don't go near him", 'Sell him in the market'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَنَزَعَ الدَّلْوَ، فَإِذَا الدَّلْوُ',
        post: '!',
        en: 'and pulled out the bucket, and suddenly the bucket was heavy!',
        options: ['ثَقِيلَةٌ', 'ثَقِيلٌ', 'ثَقِيلَةً', 'ثِقَال'],
        answer: 0,
        rationales: [
          'Nominative, feminine -- agrees with الدَّلْوُ (feminine) as predicate of this nominal (verbless) sentence.',
          'Masculine -- wrong gender; الدَّلْوُ (the bucket) is feminine.',
          'Accusative, feminine -- wrong case; no verb here governs the accusative, this is an equational sentence.',
          "Broken plural 'heavy (pl.)' -- wrong number; الدَّلْوُ is singular.",
        ],
      },
      {
        type: 'cloze',
        pre: 'اشْتَرَى الْعَزِيزُ',
        post: 'بِدَرَاهِمَ مَعْدُودَةٍ.',
        en: 'Al-ʿAzīz bought Yūsuf for a few dirhams.',
        options: ['يُوسُفَ', 'يُوسُفُ', 'يُوسُفٍ', 'لِيُوسُفَ'],
        answer: 0,
        rationales: [
          'Accusative -- Yūsuf is the direct object of اشْتَرَى.',
          'Nominative -- wrong case; the object of a verb takes the accusative.',
          'Genitive -- nothing here governs the genitive.',
          "'to Yūsuf' -- wrong; اشْتَرَى takes a direct object, not a prepositional one.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَالَ',
        post: 'أَكْرِمِي يُوسُفَ.',
        en: 'and said to his wife: Honor Yūsuf.',
        options: ['لِامْرَأَتِهِ', 'امْرَأَتُهُ', 'امْرَأَتَهُ', 'لِامْرَأَتِهَا'],
        answer: 0,
        rationales: [
          "'to his wife' -- the preposition لِ plus the genitive noun and 3ms possessive, matching قَالَ لِـ ('said to').",
          'Nominative, no preposition -- wrong; قَالَ needs لِ before the person addressed.',
          'Accusative, no preposition -- wrong case and missing the preposition.',
          "'to her wife' -- wrong possessive pronoun; it should be 'his', not 'her'.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'وَصَلُوا إِلَى مِصْرَ',
        pre: '',
        post: 'إِلَى مِصْرَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['وَصَلْتُ', 'وَصَلُوا', 'وَصَلْتَ', 'وَصَلْنَا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine plural -- they, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'وَصَلُوا إِلَى مِصْرَ',
        pre: '',
        post: 'إِلَى مِصْرَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['وَصَلْتَ', 'وَصَلُوا', 'وَصَلْتُ', 'وَصَلْنَا'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine plural -- they, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'وَصَلُوا إِلَى مِصْرَ',
        pre: '',
        post: 'إِلَى مِصْرَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['وَصَلْنَا', 'وَصَلُوا', 'وَصَلْتُ', 'وَصَلْتَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine plural -- they, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
        ],
      },
    ],
  },
};

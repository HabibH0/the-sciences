// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 15 -- يُوسُفُ
// يَسْأَلُ التَّفْتِيشَ. Printed page 44 (from the heading, immediately after
// ch14's closing quote) - 45 (ending before ch16's heading عَلَى خَزَائِنِ
// الأَرْضِ). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against ../CHAPTER-FORMAT.md.
//
// Grammar / lexical notes:
//   -- The book's own periods run several clauses together into single long
//      sentences (e.g. the لَوْ...لَـ conditional spanning qs-v2-c15-{008,
//      009,010} below is ONE sentence on the page). These are split at
//      natural clause boundaries into shorter teaching sentences, same
//      practice as ch11/ch12 -- no content added or removed, just finer
//      sentence breaks. qs-v2-c15-008 (10 tokens) stays outside the 3-9
//      buildable window by itself, but the chapter has 16 other buildable
//      sentences, well past the >=5 floor.
//   -- لَوْ (qs-v2-c15-008, "if") introduces a full counterfactual
//      conditional -- new to the corpus. Its جواب (apodosis) marker لَ on
//      لَأَسْرَعَ (qs-v2-c15-010) is fused onto the verb as a leading `part`
//      atom (features: 'part+perf.3ms'), same fusion convention already
//      used for single-letter proclitics elsewhere (prep+, conj+, etc.) --
//      distinct from the ordinary preposition لِ.
//   -- يُوسُفَ takes the accusative after إِنَّ/لَكِنَّ (qs-v2-c15-{006,007,
//      011,012}), consistent with qasas-v2 ch10's "وَلَكِنَّ يُوسُفَ لَمْ
//      يَسْتَعْجِلْ" (same clause, reused almost verbatim here as this
//      chapter's own patience motif).
//   -- كَبِيرَ النَّفْسِ / كَبِيرَ الْعَقْلِ (qs-v2-c15-{006,007}) are construct
//      predicates of كَانَ ("great of self", "great of intellect"), tagged
//      acc.constr, with أَبِيًّا/ذَكِيًّا as the following indef.acc
//      adjectives -- same apposition-after-construct pattern used
//      elsewhere in this course.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا, جَاءَ, إِلَى, يُوسُف,
//      قَالَ, لِ, إِنَّ, مَلِك, دَعَا, مَا, أَنْ, خَرَجَ, مِنْ, سِجْن, هَكَذَا, يَقُولُ/
//      قَالَ, نَاس, هَذَا, كَانَ, خَانَ, الْعَزِيز, نَفْس, ذَكِيّ, أَحَد, مَكَان, لَكِنَّ,
//      لَمْ, اِسْتَعْجَلَ, بَلْ, أَرَادَ, أَنَا, سَأَلَ, عَلِمَ, بَرِيء, أَكْرَمَ, رَجُل
//      are all already taught and NOT re-listed in newWords here.
//
// 12 new words (رَسُول، رَضِيَ، أَمْس، أَبِيّ، عَقْل، اِنْتَظَرَ، أَسْرَعَ، بَاب، بَحْث،
// تَفْتِيش، قَضِيَّة، لَوْ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch15',
  title: { ar: 'يُوسُفُ يَسْأَلُ التَّفْتِيشَ', en: 'Yūsuf Asks for an Investigation' },
  newWords: [
    'رَسُول', 'رَضِيَ', 'أَمْس', 'أَبِيّ', 'عَقْل', 'اِنْتَظَرَ', 'أَسْرَعَ', 'بَاب',
    'بَحْث', 'تَفْتِيش', 'قَضِيَّة', 'لَوْ',
  ],
  lemmas: {
    'رَسُول': { gloss: 'messenger' },
    'رَضِيَ': { gloss: 'to be content, agree, consent' },
    'أَمْس': { gloss: 'yesterday' },
    'أَبِيّ': { gloss: 'dignified, self-respecting' },
    'عَقْل': { gloss: 'mind, intellect' },
    'اِنْتَظَرَ': { gloss: 'to wait, wait for' },
    'أَسْرَعَ': { gloss: 'to hurry, hasten' },
    'بَاب': { gloss: 'door, gate' },
    'بَحْث': { gloss: 'search, investigation' },
    'تَفْتِيش': { gloss: 'investigation, inspection' },
    'قَضِيَّة': { gloss: 'case, matter' },
    'لَوْ': { gloss: 'if' },
  },
  paragraphs: [
    {
      en: 'When the messenger came to Yūsuf and said to him: \'The king summons you!\' Yūsuf did not agree to leave the prison just like that, for the people would say: \'This is Yūsuf! This one was in prison yesterday -- he betrayed al-ʿAzīz.\' Yūsuf was of great self-respect, dignified, Yūsuf was of great intellect, clever. If someone else had been in Yūsuf\'s place in prison, and the king\'s messenger had come to him,',
      sentences: [
        {
          id: 'qs-v2-c15-001',
          ar: 'وَلَمَّا جَاءَ الرَّسُولُ إِلَى يُوسُفَ وَقَالَ لَهُ:',
          en: 'When the messenger came to Yūsuf and said to him:',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'جَاءَ', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3ms', root: 'ج ي أ', gloss: 'to come; came' },
            { surface: 'الرَّسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'def.nom', root: 'ر س ل', gloss: 'the messenger' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v2-c15-002',
          ar: 'إِنَّ الْمَلِكَ يَدْعُوكَ!',
          en: "'The king summons you!'",
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْمَلِكَ', lemma: 'مَلِك', pos: 'noun', features: 'def.acc', gloss: 'the king' },
            { surface: 'يَدْعُوكَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms+2ms', root: 'د ع و', gloss: 'to call, summon; summons you' },
          ],
        },
        {
          id: 'qs-v2-c15-003',
          ar: 'مَا رَضِيَ يُوسُفُ أَنْ يَخْرُجَ مِنَ السِّجْنِ هَكَذَا.',
          en: 'Yūsuf did not agree to leave the prison just like that,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'رَضِيَ', lemma: 'رَضِيَ', pos: 'verb', features: 'perf.3ms', root: 'ر ض ي', gloss: 'to be content, agree; agreed' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَخْرُجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.3ms', root: 'خ ر ج', gloss: 'to go out; go out' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'هَكَذَا', lemma: 'هَكَذَا', pos: 'adv', features: 'adv', gloss: 'thus, like this' },
          ],
        },
        {
          id: 'qs-v2-c15-004',
          ar: 'وَيَقُولُ النَّاسُ: هَذَا يُوسُفُ!',
          en: "for the people would say: 'This is Yūsuf!",
          tokens: [
            { surface: 'وَيَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ق و ل', gloss: 'to say; and would say' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c15-005',
          ar: 'هَذَا كَانَ أَمْسِ فِي السِّجْنِ، إِنَّهُ خَانَ الْعَزِيزَ.',
          en: "This one was in prison yesterday -- he betrayed al-ʿAzīz.'",
          tokens: [
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this one' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'أَمْسِ', lemma: 'أَمْس', pos: 'adv', features: 'adv', gloss: 'yesterday' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'إِنَّهُ', lemma: 'إِنَّ', pos: 'part', features: 'part+3ms', gloss: 'indeed he' },
            { surface: 'خَانَ', lemma: 'خَانَ', pos: 'verb', features: 'perf.3ms', root: 'خ و ن', gloss: 'to betray; betrayed' },
            { surface: 'الْعَزِيزَ', lemma: 'الْعَزِيز', pos: 'proper', features: 'acc', root: 'ع ز ز', gloss: 'al-ʿAzīz' },
          ],
        },
        {
          id: 'qs-v2-c15-006',
          ar: 'إِنَّ يُوسُفَ كَانَ كَبِيرَ النَّفْسِ أَبِيًّا،',
          en: 'Yūsuf was of great self-respect, dignified,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'كَبِيرَ', lemma: 'كَبِير', pos: 'adj', features: 'acc.constr', gloss: 'great (of)' },
            { surface: 'النَّفْسِ', lemma: 'نَفْس', pos: 'noun', features: 'def.gen', root: 'ن ف س', gloss: 'the self, soul' },
            { surface: 'أَبِيًّا', lemma: 'أَبِيّ', pos: 'adj', features: 'indef.acc', root: 'أ ب ي', gloss: 'dignified, self-respecting' },
          ],
        },
        {
          id: 'qs-v2-c15-007',
          ar: 'إِنَّ يُوسُفَ كَانَ كَبِيرَ الْعَقْلِ ذَكِيًّا.',
          en: 'Yūsuf was of great intellect, clever.',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'كَبِيرَ', lemma: 'كَبِير', pos: 'adj', features: 'acc.constr', gloss: 'great (of)' },
            { surface: 'الْعَقْلِ', lemma: 'عَقْل', pos: 'noun', features: 'def.gen', root: 'ع ق ل', gloss: 'mind, intellect' },
            { surface: 'ذَكِيًّا', lemma: 'ذَكِيّ', pos: 'adj', features: 'indef.acc', root: 'ذ ك و', gloss: 'intelligent, clever' },
          ],
        },
        {
          id: 'qs-v2-c15-008',
          ar: 'لَوْ كَانَ أَحَدٌ مَكَانَ يُوسُفَ فِي السِّجْنِ وَجَاءَهُ رَسُولُ الْمَلِكِ،',
          en: "If someone else had been in Yūsuf's place in prison, and the king's messenger had come to him,",
          tokens: [
            { surface: 'لَوْ', lemma: 'لَوْ', pos: 'part', features: 'part', gloss: 'if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', root: 'أ ح د', gloss: 'someone, anyone' },
            { surface: 'مَكَانَ', lemma: 'مَكَان', pos: 'noun', features: 'acc.constr', root: 'ك و ن', gloss: 'in the place of' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'وَجَاءَهُ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ج ي أ', gloss: 'to come; and came to him' },
            { surface: 'رَسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'nom.constr', root: 'ر س ل', gloss: 'messenger of' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْكَاتِبُ يُوسُفَ؟',
          options: ['كَبِيرَ النَّفْسِ أَبِيًّا وَكَبِيرَ الْعَقْلِ ذَكِيًّا', 'ضَعِيفَ الرَّأْيِ خَائِفًا', 'بَخِيلًا كَسُولًا'],
          answer: 0,
          qEn: 'How did the author describe Yūsuf?',
          optionsEn: ['Great of self-respect and dignified, great of intellect and clever', 'Weak-minded and fearful', 'Stingy and lazy'],
        },
      ],
    },
    {
      en: 'and the king\'s messenger had said to him, \'The king summons you, he is waiting for you,\' that man would have rushed to the prison door and gone straight out. But Yūsuf did not hurry. And Yūsuf did not rush. Rather he said to the king\'s messenger: \'I want an investigation, I want a search into my case.\' So the king inquired about Yūsuf, and the king and the people came to know that Yūsuf was innocent. And Yūsuf came out innocent, and the king honored him.',
      sentences: [
        {
          id: 'qs-v2-c15-009',
          ar: 'وَقَالَ لَهُ رَسُولُ الْمَلِكِ: إِنَّ الْمَلِكَ يَدْعُوكَ يَنْتَظِرُكَ،',
          en: "and the king's messenger had said to him, 'The king summons you, he is waiting for you,'",
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'رَسُولُ', lemma: 'رَسُول', pos: 'noun', features: 'nom.constr', root: 'ر س ل', gloss: 'messenger of' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'الْمَلِكَ', lemma: 'مَلِك', pos: 'noun', features: 'def.acc', gloss: 'the king' },
            { surface: 'يَدْعُوكَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms+2ms', root: 'د ع و', gloss: 'to call, summon; summons you' },
            { surface: 'يَنْتَظِرُكَ', lemma: 'اِنْتَظَرَ', pos: 'verb', features: 'impf.3ms+2ms', root: 'ن ظ ر', gloss: 'to wait, wait for; awaits you' },
          ],
        },
        {
          id: 'qs-v2-c15-010',
          ar: 'لَأَسْرَعَ هَذَا الرَّجُلُ إِلَى بَابِ السِّجْنِ وَخَرَجَ.',
          en: 'that man would have rushed to the prison door and gone straight out.',
          tokens: [
            { surface: 'لَأَسْرَعَ', lemma: 'أَسْرَعَ', pos: 'verb', features: 'part+perf.3ms', root: 'س ر ع', gloss: 'to hurry, hasten; would hurry' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الرَّجُلُ', lemma: 'رَجُل', pos: 'noun', features: 'def.nom', root: 'ر ج ل', gloss: 'the man' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'بَابِ', lemma: 'بَاب', pos: 'noun', features: 'gen.constr', root: 'ب و ب', gloss: 'door of' },
            { surface: 'السِّجْنِ', lemma: 'سِجْن', pos: 'noun', features: 'def.gen', root: 'س ج ن', gloss: 'the prison' },
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to go out; and went out' },
          ],
        },
        {
          id: 'qs-v2-c15-011',
          ar: 'وَلَكِنَّ يُوسُفَ لَمْ يُسْرِعْ.',
          en: 'But Yūsuf did not hurry.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يُسْرِعْ', lemma: 'أَسْرَعَ', pos: 'verb', features: 'impf.3ms', root: 'س ر ع', gloss: 'to hurry, hasten; hurried' },
          ],
        },
        {
          id: 'qs-v2-c15-012',
          ar: 'وَلَكِنَّ يُوسُفَ لَمْ يَسْتَعْجِلْ.',
          en: 'And Yūsuf did not rush.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part', gloss: 'but' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَسْتَعْجِلْ', lemma: 'اِسْتَعْجَلَ', pos: 'verb', features: 'impf.3ms', root: 'ع ج ل', gloss: 'to hasten, hurry; hastened' },
          ],
        },
        {
          id: 'qs-v2-c15-013',
          ar: 'بَلْ قَالَ لِرَسُولِ الْمَلِكِ: أَنَا أُرِيدُ التَّفْتِيشَ،',
          en: "Rather he said to the king's messenger: 'I want an investigation,",
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'لِرَسُولِ', lemma: 'رَسُول', pos: 'noun', features: 'prep+gen.constr', root: 'ر س ل', gloss: 'to the messenger of' },
            { surface: 'الْمَلِكِ', lemma: 'مَلِك', pos: 'noun', features: 'def.gen', gloss: 'the king' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.1s', gloss: 'to want; I want' },
            { surface: 'التَّفْتِيشَ', lemma: 'تَفْتِيش', pos: 'noun', features: 'def.acc', root: 'ف ت ش', gloss: 'the investigation' },
          ],
        },
        {
          id: 'qs-v2-c15-014',
          ar: 'أَنَا أُرِيدُ الْبَحْثَ عَنْ قَضِيَّتِي.',
          en: "I want a search into my case.'",
          tokens: [
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
            { surface: 'أُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.1s', gloss: 'to want; I want' },
            { surface: 'الْبَحْثَ', lemma: 'بَحْث', pos: 'noun', features: 'def.acc', root: 'ب ح ث', gloss: 'the search, investigation' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about, into' },
            { surface: 'قَضِيَّتِي', lemma: 'قَضِيَّة', pos: 'noun', features: 'gen+1s', root: 'ق ض ي', gloss: 'my case, matter' },
          ],
        },
        {
          id: 'qs-v2-c15-015',
          ar: 'وَسَأَلَ الْمَلِكُ عَنْ يُوسُفَ،',
          en: 'So the king inquired about Yūsuf,',
          tokens: [
            { surface: 'وَسَأَلَ', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to ask; and asked' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'gen', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c15-016',
          ar: 'وَعَلِمَ الْمَلِكُ وَعَلِمَ النَّاسُ أَنَّ يُوسُفَ بَرِيءٌ.',
          en: 'and the king and the people came to know that Yūsuf was innocent.',
          tokens: [
            { surface: 'وَعَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ل م', gloss: 'to know; and knew' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
            { surface: 'وَعَلِمَ', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ل م', gloss: 'to know; and knew' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', root: 'ن و س', gloss: 'the people' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'بَرِيءٌ', lemma: 'بَرِيء', pos: 'adj', features: 'indef.nom', root: 'ب ر أ', gloss: 'innocent' },
          ],
        },
        {
          id: 'qs-v2-c15-017',
          ar: 'وَخَرَجَ يُوسُفُ بَرِيئاً وَأَكْرَمَهُ الْمَلِكُ.',
          en: 'And Yūsuf came out innocent, and the king honored him.',
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', root: 'خ ر ج', gloss: 'to go out; and went out' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'بَرِيئاً', lemma: 'بَرِيء', pos: 'adj', features: 'indef.acc', root: 'ب ر أ', gloss: 'innocent' },
            { surface: 'وَأَكْرَمَهُ', lemma: 'أَكْرَمَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ك ر م', gloss: 'to honor, be generous to; and honored him' },
            { surface: 'الْمَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'def.nom', gloss: 'the king' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا لَمْ يَخْرُجْ يُوسُفُ مِنَ السِّجْنِ حِينَ دَعَاهُ الْمَلِكُ أَوَّلَ مَرَّةٍ؟',
          options: ['لِأَنَّهُ أَرَادَ التَّفْتِيشَ وَالْبَحْثَ عَنْ قَضِيَّتِهِ أَوَّلاً', 'لِأَنَّهُ كَانَ نَائِمًا', 'لِأَنَّ السَّاقِيَ مَنَعَهُ'],
          answer: 0,
          qEn: "Why didn't Yūsuf leave the prison when the king first summoned him?",
          optionsEn: ['Because he wanted an investigation and a search into his case first', 'Because he was asleep', 'Because the cupbearer stopped him'],
        },
        {
          q: 'مَاذَا حَدَثَ بَعْدَ أَنْ سَأَلَ الْمَلِكُ عَنْ يُوسُفَ؟',
          options: ['عَلِمَ الْمَلِكُ وَالنَّاسُ أَنَّ يُوسُفَ بَرِيءٌ فَأَكْرَمَهُ', 'أَمَرَ بِسَجْنِهِ مِنْ جَدِيدٍ', 'نَفَاهُ مِنْ مِصْرَ'],
          answer: 0,
          qEn: 'What happened after the king asked about Yūsuf?',
          optionsEn: ['The king and the people learned Yūsuf was innocent, so he honored him', 'He ordered him imprisoned again', 'He exiled him from Egypt'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'مَا رَضِيَ يُوسُفُ أَنْ يَخْرُجَ مِنَ السِّجْنِ',
        post: '.',
        en: 'Yūsuf did not agree to leave the prison just like that.',
        options: ['هَكَذَا', 'غَدًا', 'سَرِيعًا', 'وَحْدَهُ'],
        answer: 0,
        rationales: [
          'Correct -- "thus, just like that," matching the text: he refused to leave without clearing his name first.',
          '"Tomorrow" -- wrong meaning; the text is about manner, not timing.',
          '"Quickly" -- wrong meaning, and it contradicts the story (he did not hurry).',
          '"Alone" -- not the meaning here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّ يُوسُفَ كَانَ كَبِيرَ',
        post: 'أَبِيًّا.',
        en: 'Yūsuf was of great self-respect, dignified.',
        options: ['النَّفْسِ', 'الْجِسْمِ', 'الْمَالِ', 'السِّنِّ'],
        answer: 0,
        rationales: [
          'Genitive, construct -- "great of self/soul," matching the text\'s praise of his character.',
          '"the body" -- wrong meaning; the text praises his character, not his physique.',
          '"wealth" -- wrong meaning; not mentioned here.',
          '"age" -- wrong meaning; not mentioned here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'بَلْ قَالَ لِرَسُولِ الْمَلِكِ: أَنَا أُرِيدُ',
        post: '.',
        en: "Rather he said to the king's messenger: 'I want an investigation.'",
        options: ['التَّفْتِيشَ', 'الطَّعَامَ', 'الْمَالَ', 'الْحُرِّيَّةَ'],
        answer: 0,
        rationales: [
          'Accusative -- "the investigation," direct object of أُرِيدُ, matching what Yūsuf actually asked for.',
          '"the food" -- wrong meaning; not what Yūsuf asked for.',
          '"the money" -- wrong meaning; not what Yūsuf asked for.',
          '"the freedom" -- tempting but wrong; he asks for an investigation, not simply for freedom.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُسْرِعُ إِلَى الْبَابِ',
        pre: '',
        post: 'إِلَى الْبَابِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُسْرِعُ', 'يُسْرِعُ', 'تُسْرِعُ', 'نُسْرِعُ'],
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
        base: 'يُسْرِعُ إِلَى الْبَابِ',
        pre: '',
        post: 'إِلَى الْبَابِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُسْرِعُ', 'أُسْرِعُ', 'تُسْرِعُ', 'يُسْرِعُونَ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine plural -- they (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'يُسْرِعُ إِلَى الْبَابِ',
        pre: '',
        post: 'إِلَى الْبَابِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يُسْرِعُونَ', 'يُسْرِعُ', 'نُسْرِعُ', 'تُسْرِعُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
          '2nd masculine plural -- you all (m.).',
        ],
      },
    ],
  },
};

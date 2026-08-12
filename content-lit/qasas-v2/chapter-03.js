// قَصَصُ النَّبِيِّينَ, volume 2 «أَحْسَنُ الْقَصَصِ», chapter 3 -- وَفْدٌ إِلَى
// يَعْقُوبَ. Printed pages 30 (all) - 31 (top, before ch4's heading إِلَى
// الْغَابَةِ). Transcribed by hand from the scan (vision OCR, 300dpi
// render) against QASAS_AGENT_BRIEF.md and ../CHAPTER-FORMAT.md.
//
// The brothers lobby Yaʿqūb directly for permission to take Yūsuf out with
// them; he resists, then relents. Two bracketed groups are direct Qur'anic
// quotation (12:12, the brothers' request; 12:13, Yaʿqūb's fear), each
// split into fragments of at most 2 tokens (same workaround as qasas-v1
// ch4-16 / qasas-v2 ch1):
//   -- qs-v2-c03-{016..020}: ﴿أَرْسِلْهُ مَعَنَا غَدًا يَرْتَعْ وَيَلْعَبْ وَإِنَّا لَهُ
//      لَحَافِظُونَ﴾ (8 words -- 5 fragments).
//   -- qs-v2-c03-{026..030}: ﴿وَأَخَافُ أَنْ يَأْكُلَهُ الذِّئْبُ وَأَنتُمْ عَنْهُ
//      غَافِلُونَ﴾ (7 words -- 5 fragments).
//
// Grammar notes:
//   -- qs-v2-c03-023 (وَكَانَ يَعْقُوبُ لَا يُحِبُّ أَنْ يَبْعُدَ مِنْهُ يُوسُفُ)
//      was double-checked against a zoomed crop of the scan after an
//      initial misreading: the verb is بَعُدَ (Form I, intransitive, 'to be
//      far'), not أَبْعَدَ (Form IV, transitive) as first drafted, and
//      يُوسُفُ is NOMINATIVE (subject of يَبْعُدَ), not accusative -- the
//      sentence is "that Yūsuf be far from him", not "that [something]
//      distance Yūsuf from him". Flagging the correction here per
//      QASAS_AGENT_BRIEF.md's acceptance checklist (spot-check ḥarakāt
//      against the scan).
//   -- لَحَافِظُونَ (qs-v2-c03-020) carries لَام التوكيد (the lām of
//      emphasis) prefixed to a plural predicate noun -- tagged as its own
//      leading `part` segment before `pl.nom`, the same "single leading
//      atom = fused proclitic" pattern used for وَ/فَ/بِ/لِ elsewhere,
//      extended here to a particle with no atom of its own (degrades to
//      literal 'حَرْفٌ' on the word card, a safe degradation).
//   -- Shared lexicon check (QASAS_AGENT_BRIEF.md §6): جَاءَ، خَافَ، حَلِيم،
//      أَكَلَ، أَرْسَلَ، لَعِبَ، ذَهَبَ، عَرَفَ، حَسَدَ، أَحَبَّ، لِمَاذَا، شَابّ/قَوِيّ
//      are all already taught (qasas-v1 or qasas-v2 ch1/2) and so are NOT
//      re-listed in newWords here.
//
// 15 new words (اِتَّفَقَ، رَأْي، عَزَمَ، شَرّ، عَزِيز، دَائِمًا، غَدًا، رَتَعَ، حَافِظ،
// عَاقِل، بَعُدَ، ذِئْب، غَافِل، أَبَدًا، حَاضِر).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'وَفْدٌ إِلَى يَعْقُوبَ', en: 'A Delegation to Yaʿqūb' },
  newWords: [
    'اِتَّفَقَ', 'رَأْي', 'عَزَمَ', 'شَرّ', 'عَزِيز', 'دَائِمًا', 'غَدًا', 'رَتَعَ', 'حَافِظ',
    'عَاقِل', 'بَعُدَ', 'ذِئْب', 'غَافِل', 'أَبَدًا', 'حَاضِر',
  ],
  lemmas: {
    'اِتَّفَقَ': { gloss: 'to agree' },
    'رَأْي': { gloss: 'opinion, view' },
    'عَزَمَ': { gloss: 'to resolve, determine' },
    'شَرّ': { gloss: 'evil' },
    'عَزِيز': { gloss: 'dear, precious' },
    'دَائِمًا': { gloss: 'always' },
    'غَدًا': { gloss: 'tomorrow' },
    'رَتَعَ': { gloss: 'to graze, frolic' },
    'حَافِظ': { gloss: 'guardian, protector' },
    'عَاقِل': { gloss: 'wise, sensible' },
    'بَعُدَ': { gloss: 'to be far' },
    'ذِئْب': { gloss: 'wolf' },
    'غَافِل': { gloss: 'heedless, unaware' },
    'أَبَدًا': { gloss: 'never, at all' },
    'حَاضِر': { gloss: 'present' },
  },
  paragraphs: [
    {
      en: 'And when they agreed on this plan, they came to Yaʿqūb. And Yaʿqūb feared greatly for Yūsuf, and he knew that the brothers envied him and did not love him. And Yaʿqūb would not send Yūsuf with the brothers. And Yūsuf would play with his brother and not go far.',
      sentences: [
        {
          id: 'qs-v2-c03-001',
          ar: 'وَلَمَّا اتَّفَقُوا عَلَى هَذَا الرَّأْيِ',
          en: 'And when they agreed on this plan,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'اتَّفَقُوا', lemma: 'اِتَّفَقَ', pos: 'verb', features: 'perf.3mp', root: 'و ف ق', gloss: 'to agree; agreed' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الرَّأْيِ', lemma: 'رَأْي', pos: 'noun', features: 'def.gen', root: 'ر أ ي', gloss: 'the opinion, plan' },
          ],
        },
        {
          id: 'qs-v2-c03-002',
          ar: 'جَاؤُوا إِلَى يَعْقُوبَ.',
          en: 'they came to Yaʿqūb.',
          tokens: [
            { surface: 'جَاؤُوا', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3mp', root: 'ج ي أ', gloss: 'to come; came' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v2-c03-003',
          ar: 'وَكَانَ يَعْقُوبُ يَخَافُ عَلَى يُوسُفَ كَثِيرًا،',
          en: 'And Yaʿqūb feared greatly for Yūsuf,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', root: 'خ و ف', gloss: 'to fear; fears' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'كَثِيرًا', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', root: 'ك ث ر', gloss: 'greatly' },
          ],
        },
        {
          id: 'qs-v2-c03-004',
          ar: 'وَكَانَ يَعْرِفُ أَنَّ الْإِخْوَةَ يَحْسُدُونَهُ وَلَا يُحِبُّونَهُ.',
          en: 'and he knew that the brothers envied him and did not love him.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْرِفُ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3ms', root: 'ع ر ف', gloss: 'to know; knew' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْإِخْوَةَ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.acc', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'يَحْسُدُونَهُ', lemma: 'حَسَدَ', pos: 'verb', features: 'impf.3mp+3ms', root: 'ح س د', gloss: 'to envy; envy him' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُحِبُّونَهُ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3mp+3ms', root: 'ح ب ب', gloss: 'to love; love him' },
          ],
        },
        {
          id: 'qs-v2-c03-005',
          ar: 'وَكَانَ يَعْقُوبُ لَا يُرْسِلُ يُوسُفَ مَعَ الْإِخْوَةِ.',
          en: 'And Yaʿqūb would not send Yūsuf with the brothers.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُرْسِلُ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.3ms', root: 'ر س ل', gloss: 'to send; sends' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'الْإِخْوَةِ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.gen', root: 'أ خ و', gloss: 'the brothers' },
          ],
        },
        {
          id: 'qs-v2-c03-006',
          ar: 'وَكَانَ يُوسُفُ يَلْعَبُ مَعَ أَخِيهِ وَلَا يَذْهَبُ بَعِيدًا.',
          en: 'And Yūsuf would play with his brother and not go far.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
            { surface: 'يَلْعَبُ', lemma: 'لَعِبَ', pos: 'verb', features: 'impf.3ms', root: 'ل ع ب', gloss: 'to play; plays' },
            { surface: 'مَعَ', lemma: 'مَعَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'أَخِيهِ', lemma: 'أَخ', pos: 'noun', features: 'gen+3ms', root: 'أ خ و', gloss: 'his brother' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.3ms', root: 'ذ ه ب', gloss: 'to go; goes' },
            { surface: 'بَعِيدًا', lemma: 'بَعِيد', pos: 'adv', features: 'indef.acc', root: 'ب ع د', gloss: 'far' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ يَعْقُوبُ لَا يُرْسِلُ يُوسُفَ مَعَ الْإِخْوَةِ؟',
          options: ['لِأَنَّهُ كَانَ يَعْرِفُ أَنَّهُمْ يَحْسُدُونَهُ وَلَا يُحِبُّونَهُ', 'لِأَنَّ يُوسُفَ كَانَ مَرِيضًا', 'لِأَنَّهُ كَانَ بَعِيدًا عَنِ الْبَيْتِ'],
          answer: 0,
          qEn: 'Why would Yaʿqūb not send Yūsuf with the brothers?',
          optionsEn: ['Because he knew they envied him and did not love him', 'Because Yūsuf was sick', 'Because he was far from home'],
        },
      ],
    },
    {
      en: 'And the brothers knew this, but they were resolved on evil. They said: \'O our father, why do you not send Yūsuf with us? What do you fear? He is our dear brother, and our little brother, \'and we are sons of one father. And brothers always play together,',
      sentences: [
        {
          id: 'qs-v2-c03-007',
          ar: 'وَكَانَ الْإِخْوَةُ يَعْرِفُونَ ذَلِكَ،',
          en: 'And the brothers knew this,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'الْإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'pl.def.nom', root: 'أ خ و', gloss: 'the brothers' },
            { surface: 'يَعْرِفُونَ', lemma: 'عَرَفَ', pos: 'verb', features: 'impf.3mp', root: 'ع ر ف', gloss: 'to know; knew' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'this, that' },
          ],
        },
        {
          id: 'qs-v2-c03-008',
          ar: 'وَلَكِنَّهُمْ عَزَمُوا عَلَى الشَّرِّ.',
          en: 'but they were resolved on evil.',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'عَزَمُوا', lemma: 'عَزَمَ', pos: 'verb', features: 'perf.3mp', root: 'ع ز م', gloss: 'to resolve, determine; resolved' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الشَّرِّ', lemma: 'شَرّ', pos: 'noun', features: 'def.gen', root: 'ش ر ر', gloss: 'evil' },
          ],
        },
        {
          id: 'qs-v2-c03-009',
          ar: 'قَالُوا يَا أَبَانَا لِمَاذَا لَا تُرْسِلُ مَعَنَا يُوسُفَ؟',
          en: "They said: 'O our father, why do you not send Yūsuf with us?",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'أَبَانَا', lemma: 'أَب', pos: 'noun', features: 'acc+1p', root: 'أ ب و', gloss: 'our father' },
            { surface: 'لِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'adv', gloss: 'why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُرْسِلُ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'impf.2ms', root: 'ر س ل', gloss: 'to send; you send' },
            { surface: 'مَعَنَا', lemma: 'مَعَ', pos: 'adv', features: 'adv+1p', gloss: 'with us' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c03-010',
          ar: 'مَاذَا تَخَافُ؟',
          en: 'What do you fear?',
          tokens: [
            { surface: 'مَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.2ms', root: 'خ و ف', gloss: 'to fear; you fear' },
          ],
        },
        {
          id: 'qs-v2-c03-011',
          ar: 'هُوَ أَخُونَا الْعَزِيزُ،',
          en: 'He is our dear brother,',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'he' },
            { surface: 'أَخُونَا', lemma: 'أَخ', pos: 'noun', features: 'nom+1p', root: 'أ خ و', gloss: 'our brother' },
            { surface: 'الْعَزِيزُ', lemma: 'عَزِيز', pos: 'adj', features: 'def.nom', root: 'ع ز ز', gloss: 'dear, precious' },
          ],
        },
        {
          id: 'qs-v2-c03-012',
          ar: 'وَأَخُونَا الصَّغِيرُ،',
          en: 'and our little brother,',
          tokens: [
            { surface: 'وَأَخُونَا', lemma: 'أَخ', pos: 'noun', features: 'conj+nom+1p', root: 'أ خ و', gloss: 'and our brother' },
            { surface: 'الصَّغِيرُ', lemma: 'صَغِير', pos: 'adj', features: 'def.nom', root: 'ص غ ر', gloss: 'the little, young' },
          ],
        },
        {
          id: 'qs-v2-c03-013',
          ar: 'وَنَحْنُ أَبْنَاءُ أَبٍ.',
          en: "'and we are sons of one father.",
          tokens: [
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'conj+1p', gloss: 'and we' },
            { surface: 'أَبْنَاءُ', lemma: 'اِبْن', pos: 'noun', features: 'pl.nom.constr', root: 'ب ن ي', gloss: 'sons (of)' },
            { surface: 'أَبٍ', lemma: 'أَب', pos: 'noun', features: 'indef.gen', root: 'أ ب و', gloss: 'a father' },
          ],
        },
        {
          id: 'qs-v2-c03-014',
          ar: 'وَالْإِخْوَةُ دَائِمًا يَلْعَبُونَ جَمِيعًا،',
          en: 'And brothers always play together,',
          tokens: [
            { surface: 'وَالْإِخْوَةُ', lemma: 'أَخ', pos: 'noun', features: 'conj+pl.def.nom', root: 'أ خ و', gloss: 'and the brothers' },
            { surface: 'دَائِمًا', lemma: 'دَائِمًا', pos: 'adv', features: 'adv', gloss: 'always' },
            { surface: 'يَلْعَبُونَ', lemma: 'لَعِبَ', pos: 'verb', features: 'impf.3mp', root: 'ل ع ب', gloss: 'to play; play' },
            { surface: 'جَمِيعًا', lemma: 'جَمِيع', pos: 'adv', features: 'indef.acc', root: 'ج م ع', gloss: 'all together' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'so why do we not go and play together?\' \'Send him with us tomorrow, let him frolic and play, and indeed we, for him, will surely be guardians.\' (Qur\'an 12:12)',
      sentences: [
        {
          id: 'qs-v2-c03-015',
          ar: 'فَلِمَاذَا لَا نَذْهَبُ نَحْنُ وَنَلْعَبُ جَمِيعًا؟',
          en: "so why do we not go and play together?'",
          tokens: [
            { surface: 'فَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'so why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَذْهَبُ', lemma: 'ذَهَبَ', pos: 'verb', features: 'impf.1p', root: 'ذ ه ب', gloss: 'to go; we go' },
            { surface: 'نَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: '1p', gloss: 'we' },
            { surface: 'وَنَلْعَبُ', lemma: 'لَعِبَ', pos: 'verb', features: 'conj+impf.1p', root: 'ل ع ب', gloss: 'to play; and we play' },
            { surface: 'جَمِيعًا', lemma: 'جَمِيع', pos: 'adv', features: 'indef.acc', root: 'ج م ع', gloss: 'all together' },
          ],
        },
        {
          id: 'qs-v2-c03-016',
          ar: '﴿أَرْسِلْهُ مَعَنَا',
          en: "'Send him with us",
          tokens: [
            { surface: 'أَرْسِلْهُ', lemma: 'أَرْسَلَ', pos: 'verb', features: 'imp.2ms+3ms', root: 'ر س ل', gloss: 'to send; send him!' },
            { surface: 'مَعَنَا', lemma: 'مَعَ', pos: 'adv', features: 'adv+1p', gloss: 'with us' },
          ],
        },
        {
          id: 'qs-v2-c03-017',
          ar: 'غَدًا يَرْتَعْ',
          en: 'tomorrow, let him frolic',
          tokens: [
            { surface: 'غَدًا', lemma: 'غَدًا', pos: 'adv', features: 'indef.acc', gloss: 'tomorrow' },
            { surface: 'يَرْتَعْ', lemma: 'رَتَعَ', pos: 'verb', features: 'impf.3ms', root: 'ر ت ع', gloss: 'to graze, frolic; let him frolic' },
          ],
        },
        {
          id: 'qs-v2-c03-018',
          ar: 'وَيَلْعَبْ',
          en: 'and play,',
          tokens: [
            { surface: 'وَيَلْعَبْ', lemma: 'لَعِبَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ل ع ب', gloss: 'to play; and play' },
          ],
        },
        {
          id: 'qs-v2-c03-019',
          ar: 'وَإِنَّا لَهُ',
          en: 'and indeed we, for him,',
          tokens: [
            { surface: 'وَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
          ],
        },
        {
          id: 'qs-v2-c03-020',
          ar: 'لَحَافِظُونَ﴾.',
          en: "will surely be guardians.' (Qur'an 12:12)",
          tokens: [
            { surface: 'لَحَافِظُونَ', lemma: 'حَافِظ', pos: 'noun', features: 'part+pl.nom', root: 'ح ف ظ', gloss: 'indeed guardians, protectors' },
          ],
        },
      ],
      checks: [],
    },
    {
      en: 'And Yaʿqūb was a great elder, and Yaʿqūb was wise and forbearing. And Yaʿqūb did not like Yūsuf to be far from him. And he feared greatly for Yūsuf. So he said to his sons: \'And I fear that it will eat him -- the wolf -- while you, of him, are heedless.\' (Qur\'an 12:13)',
      sentences: [
        {
          id: 'qs-v2-c03-021',
          ar: 'وَكَانَ يَعْقُوبُ شَيْخًا كَبِيرًا،',
          en: 'And Yaʿqūb was a great elder,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'شَيْخًا', lemma: 'شَيْخ', pos: 'noun', features: 'indef.acc', root: 'ش ي خ', gloss: 'an elder, old man' },
            { surface: 'كَبِيرًا', lemma: 'كَبِير', pos: 'adj', features: 'indef.acc', root: 'ك ب ر', gloss: 'great, old' },
          ],
        },
        {
          id: 'qs-v2-c03-022',
          ar: 'وَكَانَ يَعْقُوبُ عَاقِلًا حَلِيمًا.',
          en: 'and Yaʿqūb was wise and forbearing.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'عَاقِلًا', lemma: 'عَاقِل', pos: 'adj', features: 'indef.acc', root: 'ع ق ل', gloss: 'wise, sensible' },
            { surface: 'حَلِيمًا', lemma: 'حَلِيم', pos: 'adj', features: 'indef.acc', root: 'ح ل م', gloss: 'forbearing, gentle' },
          ],
        },
        {
          id: 'qs-v2-c03-023',
          ar: 'وَكَانَ يَعْقُوبُ لَا يُحِبُّ أَنْ يَبْعُدَ مِنْهُ يُوسُفُ.',
          en: 'And Yaʿqūb did not like Yūsuf to be far from him.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُحِبُّ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3ms', root: 'ح ب ب', gloss: 'to love, like; likes' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَبْعُدَ', lemma: 'بَعُدَ', pos: 'verb', features: 'impf.3ms', root: 'ب ع د', gloss: 'to be far; be far' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from him' },
            { surface: 'يُوسُفُ', lemma: 'يُوسُف', pos: 'proper', features: 'nom', gloss: 'Yūsuf' },
          ],
        },
        {
          id: 'qs-v2-c03-024',
          ar: 'وَكَانَ يَخَافُ عَلَى يُوسُفَ كَثِيرًا.',
          en: 'And he feared greatly for Yūsuf.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', root: 'خ و ف', gloss: 'to fear; fears' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'يُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'acc', gloss: 'Yūsuf' },
            { surface: 'كَثِيرًا', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', root: 'ك ث ر', gloss: 'greatly' },
          ],
        },
        {
          id: 'qs-v2-c03-025',
          ar: 'فَقَالَ لِأَبْنَائِهِ:',
          en: 'So he said to his sons:',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; so said' },
            { surface: 'لِأَبْنَائِهِ', lemma: 'اِبْن', pos: 'noun', features: 'prep+pl.gen+3ms', root: 'ب ن ي', gloss: 'to his sons' },
          ],
        },
        {
          id: 'qs-v2-c03-026',
          ar: '﴿وَأَخَافُ',
          en: "'And I fear",
          tokens: [
            { surface: 'وَأَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'conj+impf.1s', root: 'خ و ف', gloss: 'to fear; and I fear' },
          ],
        },
        {
          id: 'qs-v2-c03-027',
          ar: 'أَنْ يَأْكُلَهُ',
          en: 'that it will eat him --',
          tokens: [
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'يَأْكُلَهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'أ ك ل', gloss: 'to eat; it eats him' },
          ],
        },
        {
          id: 'qs-v2-c03-028',
          ar: 'الذِّئْبُ',
          en: 'the wolf --',
          tokens: [
            { surface: 'الذِّئْبُ', lemma: 'ذِئْب', pos: 'noun', features: 'def.nom', root: 'ذ أ ب', gloss: 'the wolf' },
          ],
        },
        {
          id: 'qs-v2-c03-029',
          ar: 'وَأَنتُمْ عَنْهُ',
          en: 'while you, of him,',
          tokens: [
            { surface: 'وَأَنتُمْ', lemma: 'أَنتُمْ', pos: 'noun', features: 'conj+2mp', gloss: 'and you all' },
            { surface: 'عَنْهُ', lemma: 'عَنْ', pos: 'prep', features: 'prep+3ms', gloss: 'of him' },
          ],
        },
        {
          id: 'qs-v2-c03-030',
          ar: 'غَافِلُونَ﴾.',
          en: "are heedless.' (Qur'an 12:13)",
          tokens: [
            { surface: 'غَافِلُونَ', lemma: 'غَافِل', pos: 'adj', features: 'pl.nom', root: 'غ ف ل', gloss: 'heedless, unaware' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ يَعْقُوبُ إِنَّهُ يَخَافُ؟',
          options: ['أَنْ يَأْكُلَ الذِّئْبُ يُوسُفَ وَهُمْ غَافِلُونَ', 'أَنْ يَضِيعَ يُوسُفُ فِي الطَّرِيقِ', 'أَنْ يَمْرَضَ يُوسُفُ'],
          answer: 0,
          qEn: 'What did Yaʿqūb say he feared?',
          optionsEn: ['That the wolf would eat Yūsuf while they were heedless', 'That Yūsuf would get lost on the road', 'That Yūsuf would fall ill'],
        },
      ],
    },
    {
      en: 'They said: \'Never! How could the wolf eat him while we are present? And how could it eat him, when we are strong young men?\' And Yaʿqūb gave Yūsuf permission.',
      sentences: [
        {
          id: 'qs-v2-c03-031',
          ar: 'قَالُوا: أَبَدًا!',
          en: "They said: 'Never!",
          tokens: [
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'أَبَدًا', lemma: 'أَبَدًا', pos: 'adv', features: 'indef.acc', gloss: 'never, at all' },
          ],
        },
        {
          id: 'qs-v2-c03-032',
          ar: 'كَيْفَ يَأْكُلُهُ الذِّئْبُ وَنَحْنُ حَاضِرُونَ؟',
          en: 'How could the wolf eat him while we are present?',
          tokens: [
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'adv', gloss: 'how' },
            { surface: 'يَأْكُلُهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'أ ك ل', gloss: 'to eat; eats him' },
            { surface: 'الذِّئْبُ', lemma: 'ذِئْب', pos: 'noun', features: 'def.nom', root: 'ذ أ ب', gloss: 'the wolf' },
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'conj+1p', gloss: 'while we' },
            { surface: 'حَاضِرُونَ', lemma: 'حَاضِر', pos: 'adj', features: 'pl.nom', root: 'ح ض ر', gloss: 'present' },
          ],
        },
        {
          id: 'qs-v2-c03-033',
          ar: 'وَكَيْفَ يَأْكُلُهُ،',
          en: 'And how could it eat him,',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'يَأْكُلُهُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'أ ك ل', gloss: 'to eat; eats him' },
          ],
        },
        {
          id: 'qs-v2-c03-034',
          ar: 'وَنَحْنُ شُبَّانٌ أَقْوِيَاءُ؟',
          en: "when we are strong young men?'",
          tokens: [
            { surface: 'وَنَحْنُ', lemma: 'نَحْنُ', pos: 'noun', features: 'conj+1p', gloss: 'and we, while we' },
            { surface: 'شُبَّانٌ', lemma: 'شَابّ', pos: 'noun', features: 'pl.indef.nom', root: 'ش ب ب', gloss: 'young men' },
            { surface: 'أَقْوِيَاءُ', lemma: 'قَوِيّ', pos: 'adj', features: 'pl.indef.nom', root: 'ق و ي', gloss: 'strong' },
          ],
        },
        {
          id: 'qs-v2-c03-035',
          ar: 'وَأَذِنَ يَعْقُوبُ لِيُوسُفَ.',
          en: 'And Yaʿqūb gave Yūsuf permission.',
          tokens: [
            { surface: 'وَأَذِنَ', lemma: 'أَذِنَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ ذ ن', gloss: 'to permit, give leave; and gave permission' },
            { surface: 'يَعْقُوبُ', lemma: 'يَعْقُوب', pos: 'proper', features: 'nom', gloss: 'Yaʿqūb' },
            { surface: 'لِيُوسُفَ', lemma: 'يُوسُف', pos: 'proper', features: 'prep+gen', gloss: 'to Yūsuf' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ رَدَّ الْإِخْوَةُ عَلَى خَوْفِ يَعْقُوبَ مِنَ الذِّئْبِ؟',
          options: ['قَالُوا أَبَدًا، كَيْفَ يَأْكُلُهُ وَنَحْنُ حَاضِرُونَ أَقْوِيَاءُ؟', 'وَعَدُوا أَنْ يَحْمِلُوا سِلَاحًا', 'رَفَضُوا الذَّهَابَ بِدُونِ يُوسُفَ'],
          answer: 0,
          qEn: "How did the brothers respond to Yaʿqūb's fear of the wolf?",
          optionsEn: ['They said "Never -- how could it eat him while we are present and strong?"', 'They promised to carry a weapon', 'They refused to go without Yūsuf'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ يَعْقُوبُ لَا يُحِبُّ أَنْ',
        post: 'مِنْهُ يُوسُفُ.',
        en: 'And Yaʿqūb did not like Yūsuf to be far from him.',
        options: ['يَبْعُدَ', 'بَعُدَ', 'يُبْعِدَ', 'أَبْعَدَ'],
        answer: 0,
        rationales: [
          'Subjunctive after أَنْ -- "that he be far", intransitive بَعُدَ with يُوسُفُ as its subject.',
          'Perfect "was far" -- wrong tense/mood after أَنْ, which needs the subjunctive.',
          'Form IV imperfect "distances (something)" -- wrong verb; the text uses intransitive بَعُدَ, not transitive أَبْعَدَ.',
          'Form IV perfect "distanced (something)" -- wrong verb and wrong mood.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالُوا: أَبَدًا! كَيْفَ',
        post: 'الذِّئْبُ وَنَحْنُ حَاضِرُونَ؟',
        en: 'They said: "Never! How could the wolf eat him while we are present?"',
        options: ['يَأْكُلُهُ', 'أَكَلَهُ', 'تَأْكُلُهُ', 'آكُلُهُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular, object suffix -- matches الذِّئْبُ (the wolf) as subject, يُوسُف understood as the object.',
          'Perfect "it ate him" -- wrong tense; the brothers are arguing about a hypothetical, not report a past event.',
          '3rd feminine singular / 2nd masculine -- wrong agreement; الذِّئْبُ is masculine.',
          '1st singular "I eat him" -- wrong person entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ يَعْقُوبُ',
        post: 'كَبِيرًا، وَكَانَ يَعْقُوبُ عَاقِلًا حَلِيمًا.',
        en: 'And Yaʿqūb was a great elder, and Yaʿqūb was wise and forbearing.',
        options: ['شَيْخًا', 'شَيْخٌ', 'شَيْخٍ', 'شُيُوخًا'],
        answer: 0,
        rationales: [
          'Accusative -- خَبَرُ كَانَ (predicate of كَانَ), matching the parallel عَاقِلًا حَلِيمًا in the next clause.',
          'Nominative -- wrong case for the predicate of كَانَ.',
          'Genitive -- nothing here governs the genitive.',
          "Plural 'elders' -- wrong number; يَعْقُوبُ is one person.",
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخَافُ عَلَى يُوسُفَ كَثِيرًا',
        pre: '',
        post: 'عَلَى يُوسُفَ كَثِيرًا',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخَافُ', 'يَخَافُ', 'تَخَافُ', 'نَخَافُ'],
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
        base: 'يَخَافُ عَلَى يُوسُفَ كَثِيرًا',
        pre: '',
        post: 'عَلَى يُوسُفَ كَثِيرًا',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَخَافُ', 'أَخَافُ', 'يَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st singular -- I.',
          '3rd masculine singular -- he, the form already given.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُ عَلَى يُوسُفَ كَثِيرًا',
        pre: '',
        post: 'عَلَى يُوسُفَ كَثِيرًا',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخَافُ', 'أَخَافُ', 'تَخَافُ', 'يَخَافُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine singular -- he, the form already given.',
        ],
      },
    ],
  },
};

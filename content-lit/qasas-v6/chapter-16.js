// قَصَصُ النَّبِيِّينَ, volume 6 (Mūsā, part 1), chapter 16 -- الطَّلَبُ.
// Printed page 136 (from the heading, mid-page) through the top of page 138,
// ending right before ch17's heading «١٧ - الزَّوَاجُ» which opens partway
// down page 138. Transcribed by hand from the scan (vision OCR, 200dpi
// render) against ../CHAPTER-FORMAT.md. Page 135 (the tail of ch15, outside
// this batch) ends with Mūsā arriving, alone and unknown, at Madyan; ch16
// opens with the two shepherd-girls he helped returning home early and
// their father asking why -- the scene that leads to Mūsā being brought in
// as a guest.
//
// Grammar / lexical notes:
//   -- Proper nouns مُوسَى ("Mūsā"), فِرْعَوْنَ ("Pharaoh"), مَدْيَنَ ("Madyan")
//      are NOT in known_lemmas.json (which only covers vols 1-3, where none
//      of them appear) but are obviously already established well before
//      this chapter by vol.6's own chapters 1-15 (Mūsā's birth, infancy on
//      the Nile, youth in Pharaoh's household, the killing of the Egyptian,
//      and the flight to Madyan are all necessarily covered before ch16
//      picks up mid-story at the well in Madyan). Per the brief's guidance
//      on preserving established conventions, these are treated as already
//      known and are NOT re-taught in newWords here, though they are outside
//      this agent's visibility (chapters 1-15 are a sibling batch) -- a
//      human reviewer should confirm they were in fact introduced there.
//   -- قَدَّرَ (qs-v6-c16-006, "to decree, ordain") is a new Form II lemma,
//      distinct from the already-taught Form I قَدَرَ ("to be able",
//      qasas-v1 ch5) despite the shared root ق د ر.
//   -- سَيِّدَة (qs-v6-c16-005, "lady") is new but shares its root with the
//      already-taught سَيِّد ("master, lord", qasas-v1 ch12).
//   -- مَأْوَى (qs-v6-c16-012, "shelter, refuge", a noun) is new, though its
//      root is shared with the verb أَوَى ("to take shelter"), already
//      attested in qasas-v3 ch20 (سَآوِي).
//   -- بِنْت (qs-v6-c16-002, "daughter") is transcribed as its own lemma,
//      distinct in spelling from اِبْنَة (which appears as a separate new
//      lemma in ch17's Qur'an quote) -- both mean "daughter" from the same
//      root but are different written forms, so kept as separate lemma
//      entries per the corpus's spelling-based lemma convention.
//   -- مَشْي (qs-v6-c16-025, "gait, manner of walking") is the verbal noun
//      of the already-taught مَشَى ("to walk", qasas-v1 ch5); the idiom
//      مَشْيَ الْكِرَامِ ("walked with the gait of the noble/dignified") is
//      translated for sense rather than word-for-word.
//   -- The final sentence of this chapter is the tail of Qur'an 28:25
//      (Sūrat al-Qaṣaṣ), quoted with its ﴿ ﴾ brackets exactly as printed;
//      the earlier quoted fragment (qs-v6-c16-021/022/023) is the middle of
//      the same ayah, split at natural pause points into three sentence
//      entries per the corpus's established Qur'an-quotation convention
//      (see qasas-v2/chapter-22.js) -- the ﴿ opens on the first fragment
//      and the ﴾ closes on the last, with no brackets on the middle
//      fragment, exactly mirroring where the printed brackets fall.
//   -- No footnotes (book_note) observed on pages 136-138.
//
// Shared lexicon check (CHAPTER-FORMAT.md §6): وَصَلَ (qasas-v1 ch12), إِلَى,
// بَيْت (qasas-v1 ch1), قَبْلَ (qasas-v1 ch1), فَ-, تَعَجَّبَ (qasas-v1 ch5), أَب
// (qasas-v1 ch3), سَأَلَ (qasas-v1 ch2), عَنْ, سَبَب (qasas-v2 ch20), قَالَ, لِ,
// مَا, يَا, كَيْفَ (qasas-v1 ch5), يَوْم (qasas-v1 ch1, as token though never
// formally listed in a newWords array -- see known_lemmas gap noted below),
// قَدْ (qasas-v2 ch1), اللَّه, رَجُل (qasas-v1 ch1), كَرِيم (qasas-v2 ch8), سَقَى
// (qasas-v1 ch9), شَيْخ (qasas-v2 ch1), عَرَفَ (qasas-v1 ch2), أَنَّ (qasas-v1
// ch2, likewise a known_lemmas.json gap -- confirmed by direct grep of the
// shipped chapter files, not just the compiled index), لِأَنَّ (qasas-v3
// ch1), أَحَد (qasas-v1 ch9), لَمْ (qasas-v2 ch4), رَحِمَ (qasas-v2 ch4), تَرَكَ
// (qasas-v1 ch10), مَكَان (qasas-v2 ch9), لَيْسَ (qasas-v1 ch7), أَحْسَنَ
// (qasas-v2 ch8), لَيْل (qasas-v1 ch7), إِنَّ (qasas-v1 ch3), أَوَى (qasas-v3
// ch20, as the verb; مَأْوَى the noun is new here -- see above), ذَهَبَ
// (qasas-v1 ch11), أَخَذَ (qasas-v1 ch4), مَعَ (qasas-v1 ch4), جَاءَ (qasas-v1
// ch4), مَشَى (qasas-v1 ch5), دَعَا (qasas-v1 ch8), أَجْر (qasas-v2 ch22), أَبَى
// (qasas-v2 ch8), خَرَجَ (qasas-v1 ch4), نَظَرَ (qasas-v1 ch14), كَرِيم, لَمَّا
// (qasas-v1 ch7), اِسْم (qasas-v1 ch1), أَخْبَرَ (qasas-v2 ch1), قَصَّ (qasas-v2
// ch9), قِصَّة (qasas-v1 ch16), سَمِعَ (qasas-v1 ch2), كُلّ (qasas-v1 ch10),
// ذَلِكَ (qasas-v1 ch9), صَبْر (qasas-v2 ch5), خَافَ (qasas-v1 ch10), نَجَا
// (qasas-v3 ch18), قَوْم (qasas-v1 ch3), ظَالِم (qasas-v1 ch10), خَبَر (qasas-v2
// ch19) are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 20 new words (جَارِيَة، مِيعَاد، أَعْجَلَ، بِنْت، سَيِّدَة، قَدَّرَ، غَرِيب، مَأْوَى،
// بَاتَ، ضِيَافَة، إِحْسَان، إِحْدَى، اِسْتِحْيَاء، بَوَّأَ، أَمَام، لِئَلَّا، مَشْي، وَطَن،
// هُدُوء، اِنْتَهَى).
export const CHAPTER = {
  id: 'ch16',
  title: { ar: 'الطَّلَبُ', en: 'The Request' },
  newWords: [
    'جَارِيَة', 'مِيعَاد', 'أَعْجَلَ', 'بِنْت', 'سَيِّدَة', 'غَرِيب', 'مَأْوَى',
    'بَاتَ', 'ضِيَافَة', 'إِحْدَى', 'اِسْتِحْيَاء', 'بَوَّأَ', 'أَمَام', 'لِئَلَّا',
    'مَشْي', 'هُدُوء', 'اِنْتَهَى',
  ],
  lemmas: {
    جَارِيَة: { gloss: 'young girl, maiden' },
    مِيعَاد: { gloss: 'appointed time, appointment' },
    أَعْجَلَ: { gloss: 'to hasten, hurry (someone)' },
    بِنْت: { gloss: 'daughter' },
    سَيِّدَة: { gloss: 'lady, mistress' },
    غَرِيب: { gloss: 'stranger, strange, foreign' },
    مَأْوَى: { gloss: 'shelter, refuge' },
    بَاتَ: { gloss: 'to spend the night' },
    ضِيَافَة: { gloss: 'hospitality' },
    إِحْدَى: { gloss: 'one (of), a certain one (f.)' },
    اِسْتِحْيَاء: { gloss: 'shyness, modesty' },
    بَوَّأَ: { gloss: 'to settle, grant a dwelling to' },
    أَمَام: { gloss: 'in front of, ahead of' },
    لِئَلَّا: { gloss: 'lest, so that not' },
    مَشْي: { gloss: 'gait, manner of walking' },
    هُدُوء: { gloss: 'calm, quiet' },
    اِنْتَهَى: { gloss: 'to finish, come to an end' },
  },
  paragraphs: [
    {
      en: "The two girls reached home before the appointed time, and their father, surprised, asked them why. He asked how they had managed to arrive early. They told him Allah had provided a noble man who had watered their flock for them. The old man was astonished -- he knew it was strange, since no one had ever shown them such mercy before -- and asked where they had left him. They said they had left him where he was, a stranger with nowhere to stay.",
      sentences: [
        {
          id: 'qs-v6-c16-001',
          ar: 'وَوَصَلَتِ الْجَارِيَتَانِ إِلَى الْبَيْتِ قَبْلَ الْمِيعَادِ فَتَعَجَّبَ أَبُوهُمَا وَسَأَلَهُمَا عَنِ السَّبَبِ.',
          en: 'The two girls reached home before the appointed time, so their father was surprised and asked them the reason.',
          tokens: [
            { surface: 'وَوَصَلَتِ', lemma: 'وَصَلَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to arrive; and arrived' },
            { surface: 'الْجَارِيَتَانِ', lemma: 'جَارِيَة', pos: 'noun', features: 'du.def.nom', root: 'ج ر ي', gloss: 'the two girls' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْبَيْتِ', lemma: 'بَيْت', pos: 'noun', features: 'def.gen', gloss: 'the house' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'الْمِيعَادِ', lemma: 'مِيعَاد', pos: 'noun', features: 'def.gen', root: 'و ع د', gloss: 'the appointed time' },
            { surface: 'فَتَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be amazed; so was amazed' },
            { surface: 'أَبُوهُمَا', lemma: 'أَب', pos: 'noun', features: 'nom+3md', gloss: 'their father' },
            { surface: 'وَسَأَلَهُمَا', lemma: 'سَأَلَ', pos: 'verb', features: 'conj+perf.3ms+3fd', gloss: 'to ask; and asked them (f.)' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'السَّبَبِ', lemma: 'سَبَب', pos: 'noun', features: 'def.gen', root: 'س ب ب', gloss: 'the reason' },
          ],
        },
        {
          id: 'qs-v6-c16-002',
          ar: 'وَقَالَ لَهُمَا:',
          en: 'He said to them:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'to say; and said' },
            { surface: 'لَهُمَا', lemma: 'لِ', pos: 'prep', features: 'prep+3md', gloss: 'to them (two)' },
          ],
        },
        {
          id: 'qs-v6-c16-003',
          ar: 'مَا أَعْجَلَكُمَا يَا بِنْتَيَّ،',
          en: 'what has hurried you two, my daughters,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'part', gloss: 'what' },
            { surface: 'أَعْجَلَكُمَا', lemma: 'أَعْجَلَ', pos: 'verb', features: 'perf.3ms+2fd', root: 'ع ج ل', gloss: 'to hasten; has hastened you two' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'بِنْتَيَّ', lemma: 'بِنْت', pos: 'noun', features: 'du+1s', root: 'ب ن و', gloss: 'my two daughters' },
          ],
        },
        {
          id: 'qs-v6-c16-004',
          ar: 'وَكَيْفَ وَصَلْتُمَا الْيَوْمَ قَبْلَ الْمِيعَادِ؟',
          en: 'and how have you two arrived today before the appointed time?',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كَيْفَ', pos: 'adv', features: 'conj+adv', gloss: 'and how' },
            { surface: 'وَصَلْتُمَا', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.2fd', gloss: 'to arrive; you two arrived' },
            { surface: 'الْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'def.acc', root: 'ي و م', gloss: 'today' },
            { surface: 'قَبْلَ', lemma: 'قَبْلَ', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'الْمِيعَادِ', lemma: 'مِيعَاد', pos: 'noun', features: 'def.gen', gloss: 'the appointed time' },
          ],
        },
        {
          id: 'qs-v6-c16-005',
          ar: 'قَالَتِ السَّيِّدَتَانِ:',
          en: 'The two ladies said:',
          tokens: [
            { surface: 'قَالَتِ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fd', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'السَّيِّدَتَانِ', lemma: 'سَيِّدَة', pos: 'noun', features: 'du.def.nom', root: 'س و د', gloss: 'the two ladies' },
          ],
        },
        {
          id: 'qs-v6-c16-006',
          ar: 'قَدْ قَدَّرَ اللَّهُ لَنَا رَجُلاً كَرِيماً سَقَى لَنَا.',
          en: 'Allah decreed for us a noble man who watered our flock for us.',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '(emphasis on completed action)' },
            { surface: 'قَدَّرَ', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ق د ر', gloss: 'to decree, ordain; decreed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'رَجُلاً', lemma: 'رَجُل', pos: 'noun', features: 'indef.acc', gloss: 'a man' },
            { surface: 'كَرِيماً', lemma: 'كَرِيم', pos: 'adj', features: 'indef.acc', gloss: 'noble' },
            { surface: 'سَقَى', lemma: 'سَقَى', pos: 'verb', features: 'perf.3ms', gloss: 'to give to drink, water; watered' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
          ],
        },
        {
          id: 'qs-v6-c16-007',
          ar: 'تَعَجَّبَ الشَّيْخُ وَعَرَفَ أَنَّهُ رَجُلٌ غَرِيبٌ لِأَنَّ أَحَداً لَمْ يَرْحَمْهُنَّ يَوْماً.',
          en: 'The old man was surprised and understood he was a stranger, since no one had ever shown them mercy before.',
          tokens: [
            { surface: 'تَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be amazed; was amazed' },
            { surface: 'الشَّيْخُ', lemma: 'شَيْخ', pos: 'noun', features: 'def.nom', gloss: 'the old man' },
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to know; and knew' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'conj', features: 'conj+3ms', gloss: 'that he' },
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'غَرِيبٌ', lemma: 'غَرِيب', pos: 'adj', features: 'indef.nom', root: 'غ ر ب', gloss: 'a stranger' },
            { surface: 'لِأَنَّ', lemma: 'لِأَنَّ', pos: 'conj', features: 'conj', gloss: 'because' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَرْحَمْهُنَّ', lemma: 'رَحِمَ', pos: 'verb', features: 'impf.3ms+3fp', gloss: 'to have mercy; show mercy to them' },
            { surface: 'يَوْماً', lemma: 'يَوْم', pos: 'noun', features: 'indef.acc', gloss: 'ever, one day' },
          ],
        },
        {
          id: 'qs-v6-c16-008',
          ar: 'قَالَ الشَّيْخُ:',
          en: 'The old man said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'الشَّيْخُ', lemma: 'شَيْخ', pos: 'noun', features: 'def.nom', gloss: 'the old man' },
          ],
        },
        {
          id: 'qs-v6-c16-009',
          ar: 'وَأَيْنَ تَرَكْتُمَا الرَّجُلَ؟',
          en: 'And where did you two leave the man?',
          tokens: [
            { surface: 'وَأَيْنَ', lemma: 'أَيْن', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'تَرَكْتُمَا', lemma: 'تَرَكَ', pos: 'verb', features: 'perf.2fd', gloss: 'to leave; you two left' },
            { surface: 'الرَّجُلَ', lemma: 'رَجُل', pos: 'noun', features: 'def.acc', gloss: 'the man' },
          ],
        },
        {
          id: 'qs-v6-c16-010',
          ar: 'قَالَتَا:',
          en: 'They two said:',
          tokens: [
            { surface: 'قَالَتَا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fd', root: 'ق و ل', gloss: 'to say; they two said' },
          ],
        },
        {
          id: 'qs-v6-c16-011',
          ar: 'تَرَكْنَاهُ فِي مَكَانِهِ،',
          en: 'We left him in his place,',
          tokens: [
            { surface: 'تَرَكْنَاهُ', lemma: 'تَرَكَ', pos: 'verb', features: 'perf.1p+3ms', gloss: 'to leave; we left him' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'مَكَانِهِ', lemma: 'مَكَان', pos: 'noun', features: 'gen+3ms', gloss: 'his place' },
          ],
        },
        {
          id: 'qs-v6-c16-012',
          ar: 'رَجُلٌ غَرِيبٌ لَيْسَ لَهُ مَأْوَى!',
          en: 'a stranger with no shelter!',
          tokens: [
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'غَرِيبٌ', lemma: 'غَرِيب', pos: 'adj', features: 'indef.nom', gloss: 'a stranger' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: 'is not; has not' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'مَأْوَى', lemma: 'مَأْوَى', pos: 'noun', features: 'indef.nom', root: 'أ و ي', gloss: 'a shelter' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا وَصَلَتِ الْجَارِيَتَانِ إِلَى الْبَيْتِ قَبْلَ الْمِيعَادِ؟',
          options: ['لِأَنَّ رَجُلاً كَرِيماً سَقَى لَهُمَا', 'لِأَنَّهُمَا لَمْ تَذْهَبَا إِلَى الْبِئْرِ', 'لِأَنَّ أَبَاهُمَا طَلَبَهُمَا'],
          answer: 0,
          qEn: 'Why did the two girls reach home before the appointed time?',
          optionsEn: ['Because a noble man had watered their flock for them', "Because they hadn't gone to the well", 'Because their father had summoned them'],
        },
        {
          q: 'أَيْنَ تَرَكَتِ الْجَارِيَتَانِ الرَّجُلَ الْغَرِيبَ؟',
          options: ['فِي مَكَانِهِ عِنْدَ الْبِئْرِ', 'فِي بَيْتِهِمَا', 'فِي مَدِينَةٍ بَعِيدَةٍ'],
          answer: 0,
          qEn: 'Where did the two girls leave the stranger?',
          optionsEn: ['In his place by the well', 'In their own house', 'In a distant city'],
        },
      ],
    },
    {
      en: "The old man was moved -- a stranger who had done them good deserved hospitality and kindness, and he had nowhere to stay. He told one daughter to go and bring him. She came to Mūsā walking shyly and told him her father was inviting him to reward him for watering their flock. Mūsā understood this as Allah answering his prayer and settling him, so he agreed and walked ahead of her to avoid looking at her, with dignified steps. When he reached the old man, he was asked his name, his homeland, and his story, and he told it in full. The old man listened patiently and calmly, and when Mūsā finished, he told him not to be afraid: he had escaped the wrongdoing people.",
      sentences: [
        {
          id: 'qs-v6-c16-013',
          ar: 'قَالَ الشَّيْخُ:',
          en: 'The old man said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; said' },
            { surface: 'الشَّيْخُ', lemma: 'شَيْخ', pos: 'noun', features: 'def.nom', gloss: 'the old man' },
          ],
        },
        {
          id: 'qs-v6-c16-014',
          ar: 'مَا أَحْسَنْتُمَا يَا بِنْتَيَّ،',
          en: 'You two have not done well, my daughters,',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'أَحْسَنْتُمَا', lemma: 'أَحْسَنَ', pos: 'verb', features: 'perf.2fd', gloss: 'to do good, do well; you two did well' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'بِنْتَيَّ', lemma: 'بِنْت', pos: 'noun', features: 'du+1s', gloss: 'my two daughters' },
          ],
        },
        {
          id: 'qs-v6-c16-015',
          ar: 'رَجُلٌ غَرِيبٌ قَدْ أَحْسَنَ إِلَيْنَا وَلَيْسَ لَهُ مَأْوَى فِي الْبَلَدِ.',
          en: 'A stranger has done us a kindness, and he has no shelter in the town.',
          tokens: [
            { surface: 'رَجُلٌ', lemma: 'رَجُل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'غَرِيبٌ', lemma: 'غَرِيب', pos: 'adj', features: 'indef.nom', gloss: 'a stranger' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '(emphasis on completed action)' },
            { surface: 'أَحْسَنَ', lemma: 'أَحْسَنَ', pos: 'verb', features: 'perf.3ms', gloss: 'to do good (to); has done good' },
            { surface: 'إِلَيْنَا', lemma: 'إِلَى', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'is not; and has not' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
            { surface: 'مَأْوَى', lemma: 'مَأْوَى', pos: 'noun', features: 'indef.nom', gloss: 'a shelter' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَلَدِ', lemma: 'بَلَد', pos: 'noun', features: 'def.gen', gloss: 'the town' },
          ],
        },
        {
          id: 'qs-v6-c16-016',
          ar: 'إِلَى مَنْ يَأْوِي فِي اللَّيْلِ،',
          en: 'To whom will he take shelter at night,',
          tokens: [
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whom' },
            { surface: 'يَأْوِي', lemma: 'أَوَى', pos: 'verb', features: 'impf.3ms', gloss: 'to take shelter; he takes shelter' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'اللَّيْلِ', lemma: 'لَيْل', pos: 'noun', features: 'def.gen', gloss: 'the night' },
          ],
        },
        {
          id: 'qs-v6-c16-017',
          ar: 'وَأَيْنَ يَبِيتُ؟!',
          en: 'and where will he spend the night?!',
          tokens: [
            { surface: 'وَأَيْنَ', lemma: 'أَيْن', pos: 'adv', features: 'conj+adv', gloss: 'and where' },
            { surface: 'يَبِيتُ', lemma: 'بَاتَ', pos: 'verb', features: 'impf.3ms', root: 'ب ي ت', gloss: 'to spend the night; he spends the night' },
          ],
        },
        {
          id: 'qs-v6-c16-018',
          ar: 'إِنَّ لَهُ عَلَيْنَا حَقَّ الضِّيَافَةِ،',
          en: 'He has upon us the right of hospitality,',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he has' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'upon us' },
            { surface: 'حَقَّ', lemma: 'حَقّ', pos: 'noun', features: 'constr.acc', gloss: 'the right of' },
            { surface: 'الضِّيَافَةِ', lemma: 'ضِيَافَة', pos: 'noun', features: 'def.gen', root: 'ض ي ف', gloss: 'the hospitality' },
          ],
        },
        {
          id: 'qs-v6-c16-019',
          ar: 'وَإِنَّ لَهُ عَلَيْنَا حَقَّ الإِحْسَانِ!',
          en: 'and he has upon us the right of kindness!',
          tokens: [
            { surface: 'وَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'he has' },
            { surface: 'عَلَيْنَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+1p', gloss: 'upon us' },
            { surface: 'حَقَّ', lemma: 'حَقّ', pos: 'noun', features: 'constr.acc', gloss: 'the right of' },
            { surface: 'الإِحْسَانِ', lemma: 'إِحْسَان', pos: 'noun', features: 'def.gen', root: 'ح س ن', gloss: 'the kindness' },
          ],
        },
        {
          id: 'qs-v6-c16-020',
          ar: 'لِتَذْهَبْ إِحْدَاكُمَا وَتَأْخُذْهُ مَعَهَا.',
          en: 'Let one of you two go and bring him with her.',
          tokens: [
            { surface: 'لِتَذْهَبْ', lemma: 'ذَهَبَ', pos: 'verb', features: 'prep+impf.3fs', gloss: 'to go; let her go' },
            { surface: 'إِحْدَاكُمَا', lemma: 'إِحْدَى', pos: 'noun', features: 'nom+2fd', root: 'و ح د', gloss: 'one of you two' },
            { surface: 'وَتَأْخُذْهُ', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+impf.3fs+3ms', gloss: 'to take; and bring him' },
            { surface: 'مَعَهَا', lemma: 'مَعَ', pos: 'prep', features: 'prep+3fs', gloss: 'with her' },
          ],
        },
        {
          id: 'qs-v6-c16-021',
          ar: '﴿فَجَاءَتْهُ إِحْدَاهُمَا تَمْشِي عَلَى اسْتِحْيَاءٍ',
          en: '"Then one of the two came to him, walking shyly,',
          tokens: [
            { surface: 'فَجَاءَتْهُ', lemma: 'جَاءَ', pos: 'verb', features: 'conj+perf.3fs+3ms', gloss: 'to come; then came to him' },
            { surface: 'إِحْدَاهُمَا', lemma: 'إِحْدَى', pos: 'noun', features: 'nom+3fd', gloss: 'one of the two' },
            { surface: 'تَمْشِي', lemma: 'مَشَى', pos: 'verb', features: 'impf.3fs', gloss: 'to walk; walking' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in (a manner of)' },
            { surface: 'اسْتِحْيَاءٍ', lemma: 'اِسْتِحْيَاء', pos: 'noun', features: 'indef.gen', root: 'ح ي ي', gloss: 'shyness' },
          ],
        },
        {
          id: 'qs-v6-c16-022',
          ar: 'قَالَتْ إِنَّ أَبِي يَدْعُوكَ',
          en: 'she said, "My father is calling you',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', root: 'ق و ل', gloss: 'to say; she said' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'أَبِي', lemma: 'أَب', pos: 'noun', features: 'acc+1s', gloss: 'my father' },
            { surface: 'يَدْعُوكَ', lemma: 'دَعَا', pos: 'verb', features: 'impf.3ms+2ms', gloss: 'to call, invite; is calling you' },
          ],
        },
        {
          id: 'qs-v6-c16-023',
          ar: 'لِيَجْزِيَكَ أَجْرَ مَا سَقَيْتَ لَنَا﴾.',
          en: 'to reward you for what you watered for us."',
          tokens: [
            { surface: 'لِيَجْزِيَكَ', lemma: 'جَزَى', pos: 'verb', features: 'prep+impf.3ms+2ms', gloss: 'to reward; so that he reward you' },
            { surface: 'أَجْرَ', lemma: 'أَجْر', pos: 'noun', features: 'constr.acc', gloss: 'the reward of' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'سَقَيْتَ', lemma: 'سَقَى', pos: 'verb', features: 'perf.2ms', gloss: 'to give to drink, water; you watered' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
          ],
        },
        {
          id: 'qs-v6-c16-024',
          ar: 'وَعَرَفَ مُوسَى أَنَّ اللَّهَ قَدْ أَجَابَ دُعَاءَهُ وَبَوَّأَ لَهُ،',
          en: 'Mūsā understood that Allah had answered his prayer and settled him,',
          tokens: [
            { surface: 'وَعَرَفَ', lemma: 'عَرَفَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to know; and knew' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: '(emphasis on completed action)' },
            { surface: 'أَجَابَ', lemma: 'أَجَابَ', pos: 'verb', features: 'perf.3ms', gloss: 'to answer, respond to; answered' },
            { surface: 'دُعَاءَهُ', lemma: 'دُعَاء', pos: 'noun', features: 'acc+3ms', gloss: 'his prayer' },
            { surface: 'وَبَوَّأَ', lemma: 'بَوَّأَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب و أ', gloss: 'to settle, grant a dwelling; and settled' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'for him' },
          ],
        },
        {
          id: 'qs-v6-c16-025',
          ar: 'فَمَا أَبَى.',
          en: 'so he did not refuse.',
          tokens: [
            { surface: 'فَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'so not' },
            { surface: 'أَبَى', lemma: 'أَبَى', pos: 'verb', features: 'perf.3ms', gloss: 'to refuse; refused' },
          ],
        },
        {
          id: 'qs-v6-c16-026',
          ar: 'وَخَرَجَ مُوسَى أَمَامَهَا لِئَلَّا يَقَعَ نَظَرُهُ عَلَيْهَا،',
          en: "Mūsā walked out ahead of her so that his gaze would not fall on her,",
          tokens: [
            { surface: 'وَخَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go out; and went out' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَمَامَهَا', lemma: 'أَمَام', pos: 'prep', features: 'prep+3fs', gloss: 'ahead of her' },
            { surface: 'لِئَلَّا', lemma: 'لِئَلَّا', pos: 'conj', features: 'conj+neg', gloss: 'lest, so that not' },
            { surface: 'يَقَعَ', lemma: 'وَقَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to fall, occur; fall' },
            { surface: 'نَظَرُهُ', lemma: 'نَظَرَ', pos: 'noun', features: 'nom+3ms', gloss: 'his gaze' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'upon her' },
          ],
        },
        {
          id: 'qs-v6-c16-027',
          ar: 'وَمَشَى مُوسَى مَشْيَ الْكِرَامِ.',
          en: 'and Mūsā walked with the gait of the dignified.',
          tokens: [
            { surface: 'وَمَشَى', lemma: 'مَشَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to walk; and walked' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مَشْيَ', lemma: 'مَشْي', pos: 'noun', features: 'constr.acc', root: 'م ش ي', gloss: 'the gait of' },
            { surface: 'الْكِرَامِ', lemma: 'كَرِيم', pos: 'noun', features: 'pl.def.gen', gloss: 'the dignified ones' },
          ],
        },
        {
          id: 'qs-v6-c16-028',
          ar: 'وَلَمَّا وَصَلَ إِلَى الشَّيْخِ سَأَلَهُ عَنِ اسْمِهِ وَوَطَنِهِ وَخَبَرِهِ.',
          en: 'When he reached the old man, he asked him his name, his homeland, and his story.',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'وَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to arrive; he arrived' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الشَّيْخِ', lemma: 'شَيْخ', pos: 'noun', features: 'def.gen', gloss: 'the old man' },
            { surface: 'سَأَلَهُ', lemma: 'سَأَلَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to ask; he asked him' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'اسْمِهِ', lemma: 'اِسْم', pos: 'noun', features: 'gen+3ms', gloss: 'his name' },
            { surface: 'وَوَطَنِهِ', lemma: 'وَطَن', pos: 'noun', features: 'conj+gen+3ms', root: 'و ط ن', gloss: 'and his homeland' },
            { surface: 'وَخَبَرِهِ', lemma: 'خَبَر', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his story' },
          ],
        },
        {
          id: 'qs-v6-c16-029',
          ar: 'وَأَخْبَرَ مُوسَى خَبَرَهُ،',
          en: 'Mūsā told him his story,',
          tokens: [
            { surface: 'وَأَخْبَرَ', lemma: 'أَخْبَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to inform, tell; and told' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'خَبَرَهُ', lemma: 'خَبَر', pos: 'noun', features: 'acc+3ms', gloss: 'his story' },
          ],
        },
        {
          id: 'qs-v6-c16-030',
          ar: 'وَقَصَّ عَلَيْهِ قِصَّتَهُ.',
          en: 'and related to him his tale.',
          tokens: [
            { surface: 'وَقَصَّ', lemma: 'قَصَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to narrate, relate; and related' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'قِصَّتَهُ', lemma: 'قِصَّة', pos: 'noun', features: 'acc+3ms', gloss: 'his tale' },
          ],
        },
        {
          id: 'qs-v6-c16-031',
          ar: 'سَمِعَ الشَّيْخُ كُلَّ ذَلِكَ بِصَبْرٍ وَهُدُوءٍ،',
          en: 'The old man heard all of that with patience and calm,',
          tokens: [
            { surface: 'سَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to hear; heard' },
            { surface: 'الشَّيْخُ', lemma: 'شَيْخ', pos: 'noun', features: 'def.nom', gloss: 'the old man' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.acc', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'بِصَبْرٍ', lemma: 'صَبْر', pos: 'noun', features: 'prep+indef.gen', gloss: 'with patience' },
            { surface: 'وَهُدُوءٍ', lemma: 'هُدُوء', pos: 'noun', features: 'conj+indef.gen', root: 'ه د أ', gloss: 'and calm' },
          ],
        },
        {
          id: 'qs-v6-c16-032',
          ar: 'وَلَمَّا انْتَهَى مُوسَى مِنْ قِصَّتِهِ.',
          en: 'and when Mūsā finished his story.',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'انْتَهَى', lemma: 'اِنْتَهَى', pos: 'verb', features: 'perf.3ms', root: 'ن ه ي', gloss: 'to finish, end; finished' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قِصَّتِهِ', lemma: 'قِصَّة', pos: 'noun', features: 'gen+3ms', gloss: 'his story' },
          ],
        },
        {
          id: 'qs-v6-c16-033',
          ar: '﴿قَالَ لَا تَخَفْ نَجَوْتَ مِنَ الْقَوْمِ الظَّالِمِينَ﴾.',
          en: '"He said, \'Fear not, you have escaped from the wrongdoing people.\'"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَخَفْ', lemma: 'خَافَ', pos: 'verb', features: 'impf.2ms', gloss: 'to fear; you fear' },
            { surface: 'نَجَوْتَ', lemma: 'نَجَا', pos: 'verb', features: 'perf.2ms', gloss: 'to be saved, escape; you escaped' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'الظَّالِمِينَ', lemma: 'ظَالِم', pos: 'adj', features: 'pl.def.gen', gloss: 'the wrongdoing' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ الشَّيْخُ عِنْدَمَا عَرَفَ أَنَّ الرَّجُلَ الْغَرِيبَ لَيْسَ لَهُ مَأْوَى؟',
          options: ['أَرْسَلَ إِحْدَى بِنْتَيْهِ لِتَدْعُوَهُ', 'تَرَكَهُ فِي مَكَانِهِ', 'أَرْسَلَ رِجَالاً لِيَبْحَثُوا عَنْهُ'],
          answer: 0,
          qEn: 'What did the old man do when he learned the stranger had nowhere to stay?',
          optionsEn: ['He sent one of his daughters to invite him', 'He left him where he was', 'He sent men to search for him'],
        },
        {
          q: 'مَاذَا قَالَ الشَّيْخُ لِمُوسَى بَعْدَ أَنْ سَمِعَ قِصَّتَهُ؟',
          options: ['لَا تَخَفْ نَجَوْتَ مِنَ الْقَوْمِ الظَّالِمِينَ', 'اِذْهَبْ إِلَى مِصْرَ الآنَ', 'لَا أُصَدِّقُ قِصَّتَكَ'],
          answer: 0,
          qEn: 'What did the old man say to Mūsā after hearing his story?',
          optionsEn: ['Fear not, you have escaped the wrongdoing people', 'Go back to Egypt now', "I don't believe your story"],
        },
      ],
    },
  ],
};

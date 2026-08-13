// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 10 -- ١٠ - كُفْرَانُ بَنِي إِسْرَائِيلَ ("The Ingratitude of
// the Children of Israel"). Starts at the heading box that appears partway
// down page 185 (right after ch9's closing line "ضِيَافَةُ اللَّهِ لِبَنِي
// إِسْرَائِيلَ فِي الْبَرِّيَّةِ" -- see chapter-09.js's header), continues
// through page 186, where it ends: chapter 11's heading appears at the very
// top of page 187 (not transcribed here, out of this chapter's range), and
// the transcript notes no chapter-divider ornament on page 186 itself, so
// the underlying story continues past this page -- but per the assignment,
// this chapter's content stops at the end of page 186 as printed.
// Transcribed by hand from the scan (vision OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md.
//
// One correction applied against the transcript: qs-v7-c10-011's "يَدُ
// إِنْسَان" is printed in the supplied transcript without a final tanwin
// mark on إِنْسَان; grammar requires the genitive tanwin (إِنْسَانٍ) as the
// second term of the construct يَدُ إِنْسَانٍ, so it is transcribed here with
// the tanwin restored. Flagging this as a probable transcription gap rather
// than a deliberate orthographic choice.
//
// Grammar / lexical notes:
//   -- بَنُو/بَنِي إِسْرَائِيلَ again tokenized as two tokens throughout (see
//      chapter-09.js's header for the convention); both إِسْرَائِيل and the
//      combination itself are treated as already known from earlier in the
//      volume, not re-added to newWords.
//   -- مِصْرٍ / مِصْرًا at qs-v7-c10-017/018 is a genuine homograph of the
//      proper noun مِصْر "Egypt" (already known, used elsewhere unflagged
//      in this chapter and the last as pos:'proper'): here, in Mūsā's
//      answer and the Qur'anic verse that follows (Al-Baqarah 2:61), مِصْر
//      is used as an ordinary common noun meaning "a city, a settled land"
//      (compare English "go down to Egypt/a town"), not the country. Tagged
//      pos:'noun' (not 'proper') in both places and added to newWords for
//      this sense specifically -- flagging the homograph rather than
//      silently conflating it with the already-known place name.
//   -- قَلِيلي التَّشَكُّرِ كَثِيري التَّشَكِّي سَرِيعِي السَّآمَةِ (qs-v7-c10-004) is a
//      construct-adjective chain: each of قَلِيلي / كَثِيري / سَرِيعِي is an
//      adjective in the accusative construct state (predicate of كَانُوا,
//      the sound-masculine-plural accusative/genitive ending ـِينَ losing
//      its ن in construct, hence ـِي) governing a following definite
//      genitive noun (التَّشَكُّرِ / التَّشَكِّي / السَّآمَةِ). Tokenized as three
//      adj+noun pairs per the task's guidance.
//   -- تَشَكُّر ("gratitude", masdar of tashakkara, form V) and تَشَكِّي
//      ("complaining", from the root of the already-taught شَكَا) are each
//      tagged as their own new noun lemmas distinct from the already-taught
//      base verbs شَكَرَ (qiraah-v2/ch35) and شَكَا -- a distinct derivational
//      pattern given its own gloss, following this corpus's established
//      precedent (e.g. qasas-v7-c01/c02's سَكْرَة vs. سَكْرَان).
//   -- عِتَاب ("reproach", qs-v7-c10-009) is already taught (qiraah-v2/ch44)
//      and NOT re-added to newWords, even though its neighbors إِنْكَار and
//      اِسْتِعْجَاب in the same list are new -- flagging this rather than
//      marking the whole three-item list new by default.
//   -- تُنۢبِتُ (qs-v7-c10-008, in the Qur'anic quotation) is form IV (from
//      the root of the already-taught نَبَتَ, "to sprout"), transitive "to
//      make grow, produce" -- tagged as its own new lemma أَنْبَتَ rather
//      than reusing the intransitive base verb.
//   -- كُفْرَان, this chapter's own title word ("ingratitude", distinct
//      derivational pattern from the already-taught كُفْر "disbelief",
//      qasas-v3/ch8), does not itself appear as a token in any sentence
//      below -- per CHAPTER-FORMAT.md, newWords only has effect when it
//      matches an actual token.lemma, so it is deliberately NOT added to
//      newWords or lemmas here (doing so would be inert).
//   -- بَدَل (qs-v7-c10-012, "instead of") and مَكَان (qs-v7-c10-011, "in
//      place of", already known) are near-synonyms used side by side in
//      the source's own rhetorical parallelism -- kept as distinct lemmas
//      per the source, not conflated.
//
// No page footnotes (book_note) on these pages.
//
// 28 new words (ذَوْق، عُبُودِيَّة، قَرَّ، قَلِيل، تَشَكُّر، تَشَكِّي، سَآمَة، لَحْم، خُضْرَة،
// بَقْل، أَنْبَتَ، قِثَّاء، فُوم، سُؤَال، غَرِيب، إِنْكَار، اِسْتِعْجَاب، اِسْتَبْدَلَ، مَسَّ،
// يَد، فَلَّاح، بَدَل، فَسَاد، اِخْتِيَار، تَنَازَلَ، سَأَلَ، وَجَدَ، مِصْر [common-noun
// sense, "a city"]).
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'كُفْرانُ بَنِي إِسْرَائِيلَ', en: 'The Ingratitude of the Children of Israel' },
  newWords: [
    'ذَوْق', 'عُبُودِيَّة', 'قَرَّ', 'قَلِيل', 'تَشَكُّر', 'تَشَكِّي', 'سَآمَة', 'لَحْم',
    'خُضْرَة', 'بَقْل', 'أَنْبَتَ', 'قِثَّاء', 'فُوم', 'سُؤَال', 'إِنْكَار',
    'اِسْتِعْجَاب', 'اِسْتَبْدَلَ', 'مَسَّ', 'يَد', 'فَلَّاح', 'بَدَل', 'فَسَاد', 'اِخْتِيَار',
    'تَنَازَلَ', 'سَأَلَ', 'وَجَدَ', 'مِصْر',
  ],
  lemmas: {
    'ذَوْق': { gloss: 'taste' },
    'عُبُودِيَّة': { gloss: 'servitude, slavery' },
    'قَرَّ': { gloss: 'to settle, be still, be at rest' },
    'قَلِيل': { gloss: 'little, few, sparing' },
    'تَشَكُّر': { gloss: 'gratitude, giving thanks' },
    'تَشَكِّي': { gloss: 'complaining' },
    'سَآمَة': { gloss: 'weariness, boredom' },
    'لَحْم': { gloss: 'meat' },
    'خُضْرَة': { gloss: 'vegetables, greens' },
    'بَقْل': { gloss: 'legumes, herbs, greens' },
    'أَنْبَتَ': { gloss: 'to bring forth, make grow, produce' },
    'قِثَّاء': { gloss: 'cucumber' },
    'فُوم': { gloss: 'garlic (or wheat)' },
    'سُؤَال': { gloss: 'question, request' },
    'إِنْكَار': { gloss: 'disapproval, denial' },
    'اِسْتِعْجَاب': { gloss: 'astonishment' },
    'اِسْتَبْدَلَ': { gloss: 'to exchange, substitute' },
    'مَسَّ': { gloss: 'to touch' },
    'يَد': { gloss: 'hand' },
    'فَلَّاح': { gloss: 'farmer, peasant' },
    'بَدَل': { gloss: 'instead of, in exchange for' },
    'فَسَاد': { gloss: 'ruin, corruption' },
    'اِخْتِيَار': { gloss: 'choice' },
    'تَنَازَلَ': { gloss: 'to give up, concede' },
    'سَأَلَ': { gloss: 'to ask, ask for' },
    'وَجَدَ': { gloss: 'to find; (passive) to be found' },
    'مِصْر': { gloss: 'a city, a settled land (here a common noun; distinct from the proper noun Egypt)' },
  },
  paragraphs: [
    {
      en: 'But long servitude had corrupted the taste and character of the Children of Israel. They would not settle on anything, nor would they be content with anything, and in their nature they were like children. They were sparing in gratitude, abundant in complaint, quick to weary -- loving what they were denied and hating what they were given.',
      sentences: [
        {
          id: 'qs-v7-c10-001',
          ar: 'وَلكِنَّ بَنِي إِسْرَائِيلَ قَدْ أَفْسَدَ ذَوْقَهُمْ وَخُلُقَهُمُ الْعُبُودِيَّةُ الطَّوِيلَةُ.',
          en: 'But long servitude had corrupted the taste and character of the Children of Israel.',
          tokens: [
            { surface: 'وَلكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, had' },
            { surface: 'أَفْسَدَ', lemma: 'أَفْسَدَ', pos: 'verb', features: 'perf.3ms', gloss: 'to corrupt, ruin; had corrupted' },
            { surface: 'ذَوْقَهُمْ', lemma: 'ذَوْق', pos: 'noun', features: 'acc+3mp', root: 'ذ و ق', gloss: 'their taste' },
            { surface: 'وَخُلُقَهُمُ', lemma: 'خُلُق', pos: 'noun', features: 'conj+acc+3mp', gloss: 'and their character' },
            { surface: 'الْعُبُودِيَّةُ', lemma: 'عُبُودِيَّة', pos: 'noun', features: 'def.nom', root: 'ع ب د', gloss: 'the servitude' },
            { surface: 'الطَّوِيلَةُ', lemma: 'طَوِيل', pos: 'adj', features: 'def.nom.f', gloss: 'long' },
          ],
        },
        {
          id: 'qs-v7-c10-002',
          ar: 'وَكَانُوا لا يَقِرُّونَ عَلى شَيْءٍ،',
          en: 'They would not settle on anything,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'and were' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقِرُّونَ', lemma: 'قَرَّ', pos: 'verb', features: 'impf.3mp', root: 'ق ر ر', gloss: 'to settle, be still; settle' },
            { surface: 'عَلى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v7-c10-003',
          ar: 'وَكَانُوا لا يَسْكُنُونَ إِلى شَيْءٍ وَكَانُوا في طِبَاعِهِمْ أَطْفَالاً.',
          en: 'nor would they be content with anything, and in their nature they were like children.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'nor were' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَسْكُنُونَ', lemma: 'سَكَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to settle, be content; be content' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'with' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'anything' },
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'and were' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'طِبَاعِهِمْ', lemma: 'طَبْع', pos: 'noun', features: 'gen+3mp', gloss: 'their nature' },
            { surface: 'أَطْفَالاً', lemma: 'طِفْل', pos: 'noun', features: 'indef.acc', gloss: 'children' },
          ],
        },
        {
          id: 'qs-v7-c10-004',
          ar: 'وَكَانُوا قَلِيلي التَّشَكُّرِ كَثِيري التَّشَكِّي سَرِيعِي السَّآمَةِ يُحِبُّونَ مَا مُنِعُوا وَيَكْرَهُونَ مَا أُعْطُوا.',
          en: 'They were sparing in gratitude, abundant in complaint, quick to weary -- loving what they were denied and hating what they were given.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'and were' },
            { surface: 'قَلِيلي', lemma: 'قَلِيل', pos: 'adj', features: 'pl.constr.acc', root: 'ق ل ل', gloss: 'sparing in' },
            { surface: 'التَّشَكُّرِ', lemma: 'تَشَكُّر', pos: 'noun', features: 'def.gen', root: 'ش ك ر', gloss: 'gratitude' },
            { surface: 'كَثِيري', lemma: 'كَثِير', pos: 'adj', features: 'pl.constr.acc', gloss: 'abundant in' },
            { surface: 'التَّشَكِّي', lemma: 'تَشَكِّي', pos: 'noun', features: 'def.gen', root: 'ش ك و', gloss: 'complaint' },
            { surface: 'سَرِيعِي', lemma: 'سَرِيع', pos: 'adj', features: 'pl.constr.acc', gloss: 'quick to' },
            { surface: 'السَّآمَةِ', lemma: 'سَآمَة', pos: 'noun', features: 'def.gen', root: 'س أ م', gloss: 'weariness' },
            { surface: 'يُحِبُّونَ', lemma: 'أَحَبَّ', pos: 'verb', features: 'impf.3mp', gloss: 'to love; loving' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'مُنِعُوا', lemma: 'مَنَعَ', pos: 'verb', features: 'pass+perf.3mp', gloss: 'to deny; they were denied' },
            { surface: 'وَيَكْرَهُونَ', lemma: 'كَرِهَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to hate; and hating' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أُعْطُوا', lemma: 'أَعْطَى', pos: 'verb', features: 'pass+perf.3mp', gloss: 'to give; they were given' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَفْسَدَتِ الْعُبُودِيَّةُ الطَّوِيلَةُ فِي بَنِي إِسْرَائِيلَ؟',
          options: ['ذَوْقَهُمْ وَخُلُقَهُمْ', 'أَجْسَادَهُمْ فَقَطْ', 'لُغَتَهُمْ'],
          answer: 0,
          qEn: 'What did long servitude corrupt in the Children of Israel?',
          optionsEn: ['Their taste and their character', 'Only their bodies', 'Their language'],
        },
        {
          q: 'كَيْفَ وَصَفَ الرَّاوِي طِبَاعَ بَنِي إِسْرَائِيلَ؟',
          options: ['قَلِيلِي التَّشَكُّرِ كَثِيرِي التَّشَكِّي سَرِيعِي السَّآمَةِ', 'صَابِرِينَ رَاضِينَ دَائِماً', 'شَاكِرِينَ لِكُلِّ نِعْمَةٍ'],
          answer: 0,
          qEn: "How did the narrator describe the Children of Israel's nature?",
          optionsEn: ['Sparing in gratitude, abundant in complaint, quick to weary', 'Always patient and content', 'Thankful for every blessing'],
        },
      ],
    },
    {
      en: '"They had not long remained before they said to Mūsā: \'We have grown weary of this one food, and we have grown weary of this meat and these sweets. And we have craved vegetables and greens.\' [Qur\'an: \'O Mūsā, we will never endure one kind of food, so call upon your Lord for us that He may bring forth for us of what the earth grows -- of its herbs, its cucumbers, its garlic, its lentils, and its onions.\']"',
      sentences: [
        {
          id: 'qs-v7-c10-005',
          ar: 'وَلَمْ يَلْبَثُوا قَليلاً أَنْ قَالُوا لِمُوسى قَدْ سَئِمْنَا هَذَا الطَّعَامَ الْوَاحِدَ،',
          en: 'They had not long remained before they said to Mūsā: "We have grown weary of this one food,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَلْبَثُوا', lemma: 'لَبِثَ', pos: 'verb', features: 'impf.3mp', gloss: 'to remain, tarry' },
            { surface: 'قَليلاً', lemma: 'قَلِيل', pos: 'adv', features: 'indef.acc', gloss: 'a little, long' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'that' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'they said' },
            { surface: 'لِمُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'prep+gen', gloss: 'to Mūsā' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed, already' },
            { surface: 'سَئِمْنَا', lemma: 'سَئِمَ', pos: 'verb', features: 'perf.1p', gloss: 'to grow weary; we have grown weary' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الطَّعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'def.acc', gloss: 'the food' },
            { surface: 'الْوَاحِدَ', lemma: 'وَاحِد', pos: 'adj', features: 'def.acc', gloss: 'the one, single' },
          ],
        },
        {
          id: 'qs-v7-c10-006',
          ar: 'وَقَدْ سَئِمْنَا هَذَا اللَّحْمَ وَهَذِهِ الْحَلْوَى.',
          en: 'and we have grown weary of this meat and these sweets."',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'سَئِمْنَا', lemma: 'سَئِمَ', pos: 'verb', features: 'perf.1p', gloss: 'we have grown weary' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'اللَّحْمَ', lemma: 'لَحْم', pos: 'noun', features: 'def.acc', root: 'ل ح م', gloss: 'the meat' },
            { surface: 'وَهَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'conj+dem.f', gloss: 'and these' },
            { surface: 'الْحَلْوَى', lemma: 'حَلْوَى', pos: 'noun', features: 'def.acc', gloss: 'the sweets' },
          ],
        },
        {
          id: 'qs-v7-c10-007',
          ar: 'وَقَدِ اشْتَهَيْنَا الْخُضَرَ وَالْبُقُولَ.',
          en: 'And we have craved vegetables and greens.',
          tokens: [
            { surface: 'وَقَدِ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'اشْتَهَيْنَا', lemma: 'اِشْتَهَى', pos: 'verb', features: 'perf.1p', gloss: 'to crave; we have craved' },
            { surface: 'الْخُضَرَ', lemma: 'خُضْرَة', pos: 'noun', features: 'pl.def.acc', root: 'خ ض ر', gloss: 'vegetables' },
            { surface: 'وَالْبُقُولَ', lemma: 'بَقْل', pos: 'noun', features: 'conj+pl.def.acc', root: 'ب ق ل', gloss: 'and greens, legumes' },
          ],
        },
        {
          // Al-Baqarah 2:61a.
          id: 'qs-v7-c10-008',
          ar: '﴿يَٰمُوسَىٰ لَن نَّصْبِرَ عَلَىٰ طَعَامٍ وَٰحِدٍ فَٱدْعُ لَنَا رَبَّكَ يُخْرِجْ لَنَا مِمَّا تُنۢبِتُ ٱلْأَرْضُ مِنۢ بَقْلِهَا وَقِثَّآئِهَا وَفُومِهَا وَعَدَسِهَا وَبَصَلِهَا﴾.',
          en: '"O Mūsā, we will never endure one [kind of] food, so call upon your Lord for us that He may bring forth for us of what the earth grows -- of its herbs, its cucumbers, its garlic, its lentils, and its onions."',
          tokens: [
            { surface: 'يَٰمُوسَىٰ', lemma: 'مُوسَى', pos: 'proper', features: 'part', gloss: 'O Mūsā' },
            { surface: 'لَن', lemma: 'لَنْ', pos: 'part', features: 'part', gloss: 'will never' },
            { surface: 'نَّصْبِرَ', lemma: 'صَبَرَ', pos: 'verb', features: 'impf.1p', gloss: 'to endure, be patient; we will endure' },
            { surface: 'عَلَىٰ', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'طَعَامٍ', lemma: 'طَعَام', pos: 'noun', features: 'indef.gen', gloss: 'food' },
            { surface: 'وَٰحِدٍ', lemma: 'وَاحِد', pos: 'adj', features: 'indef.gen', gloss: 'one, single' },
            { surface: 'فَٱدْعُ', lemma: 'دَعَا', pos: 'verb', features: 'conj+imp.2ms', gloss: 'to call upon; so call upon' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'رَبَّكَ', lemma: 'رَبّ', pos: 'noun', features: 'acc+2ms', gloss: 'your Lord' },
            { surface: 'يُخْرِجْ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3ms', gloss: 'to bring forth; that He bring forth' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'for us' },
            { surface: 'مِمَّا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'تُنۢبِتُ', lemma: 'أَنْبَتَ', pos: 'verb', features: 'impf.3fs', root: 'ن ب ت', gloss: 'to bring forth, produce; produces' },
            { surface: 'ٱلْأَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'def.nom', gloss: 'the earth' },
            { surface: 'مِنۢ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'بَقْلِهَا', lemma: 'بَقْل', pos: 'noun', features: 'gen+3fs', gloss: 'its herbs' },
            { surface: 'وَقِثَّآئِهَا', lemma: 'قِثَّاء', pos: 'noun', features: 'conj+gen+3fs', root: 'ق ث أ', gloss: 'and its cucumbers' },
            { surface: 'وَفُومِهَا', lemma: 'فُوم', pos: 'noun', features: 'conj+gen+3fs', root: 'ف و م', gloss: 'and its garlic' },
            { surface: 'وَعَدَسِهَا', lemma: 'عَدَس', pos: 'noun', features: 'conj+gen+3fs', gloss: 'and its lentils' },
            { surface: 'وَبَصَلِهَا', lemma: 'بَصَل', pos: 'noun', features: 'conj+gen+3fs', gloss: 'and its onions' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّ سَئِمَ بَنُو إِسْرَائِيلَ؟',
          options: ['مِنَ الطَّعَامِ الْوَاحِدِ وَاللَّحْمِ وَالْحَلْوَى', 'مِنَ السَّفَرِ فِي الْبَرِّيَّةِ', 'مِنِ اتِّبَاعِ مُوسَى'],
          answer: 0,
          qEn: 'What did the Children of Israel grow weary of?',
          optionsEn: ['The one food, the meat, and the sweets', 'Traveling in the wilderness', 'Following Mūsā'],
        },
        {
          q: 'مَاذَا طَلَبَ بَنُو إِسْرَائِيلَ مِنْ مُوسَى فِي الآيَةِ الْقُرْآنِيَّةِ؟',
          options: ['أَنْ يَدْعُوَ رَبَّهُ لِيُخْرِجَ لَهُمْ مِنَ الْبَقْلِ وَالْقِثَّاءِ وَالْفُومِ وَالْعَدَسِ وَالْبَصَلِ', 'أَنْ يَرُدَّهُمْ إِلَى مِصْرَ فَوْراً', 'أَنْ يُعْطِيَهُمْ ذَهَباً'],
          answer: 0,
          qEn: 'What did the Children of Israel ask Mūsā for in the Qurʾānic verse?',
          optionsEn: ['To call upon his Lord to bring forth for them herbs, cucumbers, garlic, lentils, and onions', 'To return them to Egypt at once', 'To give them gold'],
        },
      ],
    },
    {
      en: '"Mūsā was astonished at this strange request, and spoke in a voice filled with disapproval, astonishment, and reproach. [Qur\'an: \'Would you exchange that which is inferior for that which is better?\'] Legumes and vegetables in place of birds and sweets that no human hand had touched? The food of farmers, instead of the food of kings? What a ruin of taste! What poor choice!"',
      sentences: [
        {
          id: 'qs-v7-c10-009',
          ar: 'تَعَجَّبَ مُوسى مِنْ هَذَا السُّؤَالِ الْغَرِيبِ وَقَالَ بِصَوْتٍ فِيهِ الإِنْكَارُ وَفِيهِ الاسْتِعْجَابُ وَفِيهِ الْعِتَابُ.',
          en: 'Mūsā was astonished at this strange request, and spoke in a voice filled with disapproval, astonishment, and reproach.',
          tokens: [
            { surface: 'تَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be astonished' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'السُّؤَالِ', lemma: 'سُؤَال', pos: 'noun', features: 'def.gen', root: 'س أ ل', gloss: 'the question, request' },
            { surface: 'الْغَرِيبِ', lemma: 'غَرِيب', pos: 'adj', features: 'def.gen', root: 'غ ر ب', gloss: 'strange' },
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'بِصَوْتٍ', lemma: 'صَوْت', pos: 'noun', features: 'prep+indef.gen', gloss: 'in a voice' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in it' },
            { surface: 'الإِنْكَارُ', lemma: 'إِنْكَار', pos: 'noun', features: 'def.nom', root: 'ن ك ر', gloss: 'disapproval, denial' },
            { surface: 'وَفِيهِ', lemma: 'فِي', pos: 'prep', features: 'conj+prep+3ms', gloss: 'and in it' },
            { surface: 'الاسْتِعْجَابُ', lemma: 'اِسْتِعْجَاب', pos: 'noun', features: 'def.nom', root: 'ع ج ب', gloss: 'astonishment' },
            { surface: 'وَفِيهِ', lemma: 'فِي', pos: 'prep', features: 'conj+prep+3ms', gloss: 'and in it' },
            { surface: 'الْعِتَابُ', lemma: 'عِتَاب', pos: 'noun', features: 'def.nom', gloss: 'reproach' },
          ],
        },
        {
          // Al-Baqarah 2:61b.
          id: 'qs-v7-c10-010',
          ar: '﴿أَتَسْتَبْدِلُونَ ٱلَّذِى هُوَ أَدْنَىٰ بِٱلَّذِى هُوَ خَيْرٌ﴾؟!',
          en: '"Would you exchange that which is inferior for that which is better?"',
          tokens: [
            { surface: 'أَتَسْتَبْدِلُونَ', lemma: 'اِسْتَبْدَلَ', pos: 'verb', features: 'part+impf.2mp', root: 'ب د ل', gloss: 'to exchange, substitute; would you exchange?' },
            { surface: 'ٱلَّذِى', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'أَدْنَىٰ', lemma: 'أَدْنَى', pos: 'adj', features: 'nom', gloss: 'lower, inferior' },
            { surface: 'بِٱلَّذِى', lemma: 'الَّذِي', pos: 'rel', features: 'prep+rel', gloss: 'for that which' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'خَيْرٌ', lemma: 'خَيْر', pos: 'noun', features: 'indef.nom', gloss: 'better' },
          ],
        },
        {
          id: 'qs-v7-c10-011',
          ar: 'أَبُقُولاً وَخُضَرَ مَكَانَ طُيُورٍ وَحَلْوَى لَمْ تَمَسَّهَا يَدُ إِنْسَانٍ؟!',
          en: 'Legumes and vegetables in place of birds and sweets that no human hand had touched?!',
          tokens: [
            { surface: 'أَبُقُولاً', lemma: 'بَقْل', pos: 'noun', features: 'part+indef.acc', gloss: 'legumes?' },
            { surface: 'وَخُضَرَ', lemma: 'خُضْرَة', pos: 'noun', features: 'conj+indef.acc', gloss: 'and vegetables' },
            { surface: 'مَكَانَ', lemma: 'مَكَان', pos: 'noun', features: 'acc', gloss: 'in place of' },
            { surface: 'طُيُورٍ', lemma: 'طَيْر', pos: 'noun', features: 'pl.indef.gen', gloss: 'birds' },
            { surface: 'وَحَلْوَى', lemma: 'حَلْوَى', pos: 'noun', features: 'conj+indef.gen', gloss: 'and sweets' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَمَسَّهَا', lemma: 'مَسَّ', pos: 'verb', features: 'impf.3fs+3fs', root: 'م س س', gloss: 'to touch; had touched it' },
            { surface: 'يَدُ', lemma: 'يَد', pos: 'noun', features: 'constr.nom', root: 'ي د ي', gloss: 'the hand of' },
            { surface: 'إِنْسَانٍ', lemma: 'إِنْسَان', pos: 'noun', features: 'indef.gen', gloss: 'a human' },
          ],
        },
        {
          id: 'qs-v7-c10-012',
          ar: 'أَطَعَامَ الْفَلَّاحِينَ بَدَلَ طَعَامِ الْمُلُوكِ؟',
          en: 'The food of farmers, instead of the food of kings?',
          tokens: [
            { surface: 'أَطَعَامَ', lemma: 'طَعَام', pos: 'noun', features: 'part+acc.constr', gloss: 'the food of?' },
            { surface: 'الْفَلَّاحِينَ', lemma: 'فَلَّاح', pos: 'noun', features: 'pl.def.gen', root: 'ف ل ح', gloss: 'the farmers' },
            { surface: 'بَدَلَ', lemma: 'بَدَل', pos: 'noun', features: 'acc', root: 'ب د ل', gloss: 'instead of' },
            { surface: 'طَعَامِ', lemma: 'طَعَام', pos: 'noun', features: 'constr.gen', gloss: 'the food of' },
            { surface: 'الْمُلُوكِ', lemma: 'مَلِك', pos: 'noun', features: 'pl.def.gen', gloss: 'the kings' },
          ],
        },
        {
          id: 'qs-v7-c10-013',
          ar: 'يَا لَفَسَادِ الذَّوْقِ!',
          en: 'What a ruin of taste!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'what a...!' },
            { surface: 'لَفَسَادِ', lemma: 'فَسَاد', pos: 'noun', features: 'prep+constr.gen', root: 'ف س د', gloss: 'the ruin of' },
            { surface: 'الذَّوْقِ', lemma: 'ذَوْق', pos: 'noun', features: 'def.gen', gloss: 'the taste' },
          ],
        },
        {
          id: 'qs-v7-c10-014',
          ar: 'يَا لَسُوءِ الاخْتِيَارِ!',
          en: 'What poor choice!',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'what a...!' },
            { surface: 'لَسُوءِ', lemma: 'سُوء', pos: 'noun', features: 'prep+constr.gen', gloss: 'the evil, poorness of' },
            { surface: 'الاخْتِيَارِ', lemma: 'اِخْتِيَار', pos: 'noun', features: 'def.gen', root: 'خ ي ر', gloss: 'the choice' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَتْ رَدَّةُ فِعْلِ مُوسَى عَلَى طَلَبِهِمْ؟',
          options: ['تَعَجَّبَ وَقَالَ بِصَوْتٍ فِيهِ الْإِنْكَارُ وَالِاسْتِعْجَابُ وَالْعِتَابُ', 'وَافَقَهُمْ فَوْراً', 'سَكَتَ وَلَمْ يُجِبْ'],
          answer: 0,
          qEn: 'How did Mūsā react to their request?',
          optionsEn: ['He was astonished and spoke in a voice of disapproval, astonishment, and reproach', 'He agreed with them at once', 'He remained silent and did not answer'],
        },
        {
          q: 'مَا رَأْيُ الرَّاوِي فِي طَلَبِ بَنِي إِسْرَائِيلَ؟',
          options: ['يَا لَفَسَادِ الذَّوْقِ وَيَا لَسُوءِ الِاخْتِيَارِ', 'كَانَ طَلَباً حَكِيماً', 'كَانَ طَلَباً مَشْرُوعاً تَمَاماً'],
          answer: 0,
          qEn: "What is the narrator's judgment of the Children of Israel's request?",
          optionsEn: ['What a ruin of taste, and what poor choice!', 'It was a wise request', 'It was a perfectly legitimate request'],
        },
      ],
    },
    {
      en: '"But the Children of Israel would not give up their request, and they kept demanding vegetables and greens. So Mūsā said: \'What you have asked for can be found in every village and city.\' [Qur\'an: \'Go down to a city, for you shall have what you have asked for.\']"',
      sentences: [
        {
          id: 'qs-v7-c10-015',
          ar: 'وَلَكِنَّ بَنِي إِسْرَائِيلَ لَمْ يَتَنَازَلُوا عَنْ سُؤَالِهِمْ،',
          en: 'But the Children of Israel would not give up their request,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', gloss: 'the Children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتَنَازَلُوا', lemma: 'تَنَازَلَ', pos: 'verb', features: 'impf.3mp', root: 'ن ز ل', gloss: 'to give up, concede' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'سُؤَالِهِمْ', lemma: 'سُؤَال', pos: 'noun', features: 'gen+3mp', gloss: 'their request' },
          ],
        },
        {
          id: 'qs-v7-c10-016',
          ar: 'وَلَمْ يَزَالُوا يَطْلُبُونَ الْخُضَرَ وَالْبُقُولَ.',
          en: 'and they kept demanding vegetables and greens.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَزَالُوا', lemma: 'زَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to cease; kept (on)' },
            { surface: 'يَطْلُبُونَ', lemma: 'طَلَبَ', pos: 'verb', features: 'impf.3mp', gloss: 'to demand; demanding' },
            { surface: 'الْخُضَرَ', lemma: 'خُضْرَة', pos: 'noun', features: 'pl.def.acc', gloss: 'vegetables' },
            { surface: 'وَالْبُقُولَ', lemma: 'بَقْل', pos: 'noun', features: 'conj+pl.def.acc', gloss: 'and greens' },
          ],
        },
        {
          id: 'qs-v7-c10-017',
          ar: 'فَقَالَ مُوسى إِنَّ مَا سَأَلْتُمْ يُوجَدُ في كُلِّ قَرْيَةٍ وَمِصْرٍ.',
          en: 'So Mūsā said: "What you have asked for can be found in every village and city."',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'so said' },
            { surface: 'مُوسى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'سَأَلْتُمْ', lemma: 'سَأَلَ', pos: 'verb', features: 'perf.2mp', root: 'س أ ل', gloss: 'to ask for; you have asked for' },
            { surface: 'يُوجَدُ', lemma: 'وَجَدَ', pos: 'verb', features: 'pass+impf.3ms', root: 'و ج د', gloss: 'to find; is found' },
            { surface: 'في', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'قَرْيَةٍ', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.gen', gloss: 'village' },
            { surface: 'وَمِصْرٍ', lemma: 'مِصْر', pos: 'noun', features: 'conj+indef.gen', gloss: 'and city' },
          ],
        },
        {
          // Al-Baqarah 2:61c.
          id: 'qs-v7-c10-018',
          ar: '﴿ٱهْبِطُوا۟ مِصْرًا فَإِنَّ لَكُم مَّا سَأَلْتُمْ﴾.',
          en: '"Go down to a city, for you shall have what you have asked for."',
          tokens: [
            { surface: 'ٱهْبِطُوا۟', lemma: 'هَبَطَ', pos: 'verb', features: 'imp.2mp', gloss: 'to go down; go down!' },
            { surface: 'مِصْرًا', lemma: 'مِصْر', pos: 'noun', features: 'indef.acc', gloss: 'a city' },
            { surface: 'فَإِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part', gloss: 'for indeed' },
            { surface: 'لَكُم', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'مَّا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'سَأَلْتُمْ', lemma: 'سَأَلَ', pos: 'verb', features: 'perf.2mp', gloss: 'you have asked for' },
          ],
        },
      ],
      checks: [
        {
          q: 'هَلْ تَنَازَلَ بَنُو إِسْرَائِيلَ عَنْ طَلَبِهِمْ؟',
          options: ['لا، لَمْ يَتَنَازَلُوا وَظَلُّوا يَطْلُبُونَ الْخُضَرَ وَالْبُقُولَ', 'نَعَمْ، تَنَازَلُوا فَوْراً', 'لَمْ يُكَرِّرُوا الطَّلَبَ'],
          answer: 0,
          qEn: 'Did the Children of Israel give up their request?',
          optionsEn: ['No, they did not give up, and kept demanding vegetables and greens', 'Yes, they gave it up at once', 'They never repeated the request'],
        },
        {
          q: 'بِمَاذَا أَجَابَ مُوسَى طَلَبَهُمْ؟',
          options: ['إِنَّ مَا سَأَلُوا يُوجَدُ فِي كُلِّ قَرْيَةٍ وَمِصْرٍ', 'رَفَضَ الْإِجَابَةَ', 'وَعَدَهُمْ بِإِحْضَارِهِ مِنَ السَّمَاءِ'],
          answer: 0,
          qEn: 'How did Mūsā answer their request?',
          optionsEn: ['What they asked for can be found in every village and city', 'He refused to answer', 'He promised to bring it down from the sky'],
        },
      ],
    },
  ],
  workshop: {
    // Recycled frame: the repeated كَانُوا لا يَقِرُّونَ... / وَكَانُوا لا
    // يَسْكُنُونَ... habitual-past construction (كَانَ + negated imperfect)
    // in qs-v7-c10-002/003, built entirely from the narrator's own prose.
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانُوا لا',
        post: 'عَلى شَيْءٍ.',
        en: 'They would not settle on anything.',
        options: ['يَقِرُّونَ', 'قَرُّوا', 'تَقِرُّ', 'نَقِرُّ'],
        answer: 0,
        rationales: [
          '3rd masc. plural imperfect -- correct, agrees with هُمْ as the negated verbal predicate of كَانُوا.',
          'Perfect -- wrong; كَانَ + imperfect gives the habitual past reading required here.',
          '3rd/2nd fem. singular -- wrong number and gender.',
          '1st plural -- we; wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانُوا لا',
        post: 'إِلى شَيْءٍ.',
        en: 'nor would they be content with anything.',
        options: ['يَسْكُنُونَ', 'سَكَنُوا', 'تَسْكُنُ', 'أَسْكُنُ'],
        answer: 0,
        rationales: [
          '3rd masc. plural imperfect -- correct, matching the same كَانُوا لا + imperfect frame.',
          'Perfect -- wrong tense for the habitual reading.',
          '3rd fem. singular -- wrong number and gender.',
          '1st singular -- I; wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَمْ',
        post: 'بَنُو إِسْرَائِيلَ عَنْ سُؤَالِهِمْ.',
        en: 'The Children of Israel would not give up their request.',
        options: ['يَتَنَازَلُوا', 'تَنَازَلُوا', 'يَتَنَازَلْنَ', 'أَتَنَازَلُ'],
        answer: 0,
        rationales: [
          'Jussive after لَمْ, 3rd masc. plural -- correct.',
          'Perfect -- wrong; لَمْ requires the jussive imperfect.',
          '3rd fem. plural -- wrong gender; بَنُو إِسْرَائِيلَ takes masculine plural agreement.',
          '1st singular -- I; wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'كَانُوا لا يَقِرُّونَ عَلى شَيْءٍ',
        pre: '',
        post: 'لا يَقِرُّونَ عَلى شَيْءٍ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['كَانَتْ', 'كَانُوا', 'كُنْتُ', 'كُنَّا'],
        answer: 0,
        rationales: [
          '3rd fem. singular perfect of كَانَ -- matches هِيَ.',
          '3rd masc. plural -- they (m.), the form given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'كَانُوا لا يَقِرُّونَ عَلى شَيْءٍ',
        pre: '',
        post: 'لا يَقِرُّونَ عَلى شَيْءٍ',
        targetPerson: 'أَنْتُمْ',
        targetEn: 'you (m. pl.)',
        options: ['كُنْتُمْ', 'كَانُوا', 'كُنْتَ', 'كُنَّا'],
        answer: 0,
        rationales: [
          '2nd masc. plural perfect of كَانَ -- matches أَنْتُمْ.',
          '3rd masc. plural -- they (m.), the form given.',
          '2nd masc. singular -- you (m. sing.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'كَانُوا لا يَقِرُّونَ عَلى شَيْءٍ',
        pre: '',
        post: 'لا يَقِرُّونَ عَلى شَيْءٍ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['كُنَّا', 'كَانُوا', 'كُنْتُ', 'كَانَتْ'],
        answer: 0,
        rationales: [
          '1st plural perfect of كَانَ -- matches نَحْنُ.',
          '3rd masc. plural -- they (m.), the form given.',
          '1st singular -- I.',
          '3rd fem. singular -- she.',
        ],
      },
    ],
  },
};

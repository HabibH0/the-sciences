// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 8 -- ٨ - غَرَقُ فِرْعَوْنَ ("The Drowning of Pharaoh").
// Starts at the heading box that appears partway down page 180 (right
// after ch7 closes with "وَسَارَ الْقَوْمُ آمِنِينَ وَوَصَلُوا إِلَى بَرِّ الأَمْنِ
// وَالسَّلَامِ"), continues through page 181 and page 182, and ends just
// before the ch9 heading box that appears at the very top of page 183
// (after an opening Qur'anic quote belonging to ch9, not reproduced
// here). Transcribed by hand from the scan (vision OCR) against
// ../CHAPTER-FORMAT.md and QASAS_AGENT_BRIEF.md. No corrections applied
// against the supplied transcript for this chapter's pages.
//
// Page 181 carries four short Qur'anic quotations in close sequence (from
// Sūrat Yūnus 10:90-91, and two further verses on the futility of
// last-minute repentance -- An-Nisā' 4:18a and Al-An'ām 6:158), plus a
// fifth occurrence repeating the Yūnus 10:91 quotation verbatim
// (qs-v7-c08-021, after "فَقِيلَ لَهُ:") exactly as the source repeats it for
// rhetorical effect. Each is transcribed and tokenized as its own
// sentence entry, per instruction -- none merged or fragmented. All are
// short (3-9 tokens is common here) and several carry a case-marked
// common noun, which per instruction is left as ordinary prose rather
// than artificially shortened to dodge the build stage's decoy pool.
// `workshop.cloze`/`workshop.shift` are built only from the narrator's
// own prose (never the Qur'anic quotations): the page 182 anaphora
// "مَاتَ الْجَبَّارُ.../مَاتَ الطَّاغِيَةُ.../مَاتَ مَلِكُ مِصْرَ..." and a
// person-shift on مَاتَ itself.
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- Nadwī's own parenthetical aside on page 181, "(وَهُوَ بَرٌّ)" ("which
//      was [now] dry land"), is kept inline in qs-v7-c08-013's `ar` field
//      with its parentheses (matching the corpus's existing convention of
//      keeping such decorative punctuation in `ar` but not in any token's
//      `surface`, the same way ﴿ ﴾ are dropped from token surfaces
//      elsewhere in this volume).
//   -- Several derived nominal/verbal forms sharing a root with an
//      already-taught word are tagged new as their own lemma, following
//      this volume's ch1 precedent (see chapter-07.js's header for the
//      fuller discussion): غَرَق ("drowning," distinct from the
//      already-taught verb غَرِقَ, qasas-v3/ch22) most notably -- it is
//      also this chapter's own title word. نَجَّى (form II, "to save,"
//      qs-v7-c08-032) is likewise kept distinct from the already-taught
//      form-I نَجَا ("to be saved, escape," qasas-v3/ch18): different
//      valency/sense (causative vs. intransitive), not a copy-paste of
//      the same root.
//   -- عِبْرَة ("lesson, moral") and اِعْتَبَرَ ("to take heed") are both
//      tagged new although obviously related (root ع ب ر, shared with
//      عَبَرَ "to cross," also new here) -- three distinct dictionary
//      words from one root, each glossed on its own rather than folded
//      together, since a learner hovering over مُعْتَبِر needs "one who
//      takes heed," not "to cross."
//   -- كَيْفَ ("how") is tagged new despite being a very basic
//      interrogative, on the grounds that -- unlike qasas-v7/ch1's
//      bedrock exceptions (هَذَا, ذَلِكَ, جَاءَ, يَوْم) -- the parallel
//      interrogatives أَيْنَ and مَتَى ARE independently attested in the
//      shared lexicon export, suggesting basic interrogatives generally
//      ARE tracked rather than being an export gap; كَيْفَ's absence is
//      treated as a real gap in what has been taught, not a lexicon
//      export artifact.
//
// Shared lexicon check (grepped against the supplied lexicon.txt export,
// plus qasas-v7/ch1-2's and this volume's own chapter-07.js newWords so
// far -- جَبَّار, سَكْرَة, نَجَاة, بَحْر, عَصَا, أَحَمَر [see ch7], هُنَالِكَ, أَمَام,
// وَرَاء, آمِن, أَمْن already new/known and NOT re-listed here):
// رَأَى، فِرْعَوْن، سَارَ، اِبْن، إِسْرَائِيل (ch7)، عَبَرُوا->new (see newWords)،
// الْبَحْر، قَالَ، جُنْد، اُنْظُرُوا (نَظَرَ)، أَخَذَ، هَؤُلَاءِ، فَرَّ، مَرَّة، آخَر، أَرَادَ،
// الظَّالِم، الطَّرِيق، إِلَى، لَا، مَنَعَ، شَيْء، أَوْ (bedrock)، مِصْر، مَاتَ، عَيْن،
// عَدُوّ، هَذِهِ، ضَرَبَ، بِ، إِنَّ، لَا إِلَٰه، الَّذِي، ءَامَنَ، مُسْلِم، حَتَّى، تَابَ، حَضَرَ،
// نَفْس، نَفَعَ، قَدْ، وَصَلَ، جِدّ، زَالَ، سَكْرَة (v7ch1/2)، آيَة، مَاذَا، قَتَلَ، رَجُل،
// طِفْل، رِجَال، ذَبَحَ، ذَبْح، صَبَرَ، صَبْر، مَلِك، بَعِيداً عَن (عَن known)، سُلْطَان،
// صَدِيق، عَرْش، قَصْر، عَيْن، بَكَى، شَكّ، مَوْت، يَوْم، أَكَلَ، شَرِبَ (bedrock,
// paired with known أَكَلَ)، نَجَا، نَظَرَ، اسْم، وَجَدَ، أَرْض، اللَّه، تَعَالَى (v7ch2)،
// كَانَ، لِ، وَقَى (v7ch2)، أَحَد
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 39 new words (see notes above for the reasoning behind several of
// these):
// طَوْع، كَيْفَ، عَبَرَ، تَقَدَّمَ، جَزِعَ، لَحِقَ، أَسَرَ، ذَلِيل، بَرِّيَّة، غَرِيب، عَرْض،
// اِنْطَبَقَ، هَيْهَاتَ، دَاوَى، وَاسَى، طَبِيب، خَلَّفَ، ذِرَاع، مَدْفَن، قَذَفَ، جُثَّة،
// أَيْقَنَ، بَدَن، غَرَق، طَاغِيَة، قَضَى، آخِر، خَنَقَ، شَنَقَ، عِبْرَة، اِعْتَبَرَ، سَاكِن،
// أَدْرَكَ، فَسَدَ، كَسَبَ، نَجَّى، خَلْف، عَصَى، تَوْبَة
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'غَرَقُ فِرْعَوْنَ', en: 'The Drowning of Pharaoh' },
  newWords: [
    'طَوْع', 'كَيْفَ', 'عَبَرَ', 'تَقَدَّمَ', 'لَحِقَ', 'أَسَرَ', 'ذَلِيل', 'بَرِّيَّة',
    'غَرِيب', 'عَرْض', 'اِنْطَبَقَ', 'هَيْهَاتَ', 'دَاوَى', 'وَاسَى', 'طَبِيب', 'خَلَّفَ', 'ذِرَاع',
    'مَدْفَن', 'قَذَفَ', 'جُثَّة', 'أَيْقَنَ', 'بَدَن', 'غَرَق', 'طَاغِيَة', 'قَضَى', 'آخِر',
    'خَنَقَ', 'شَنَقَ', 'سَاكِن', 'أَدْرَكَ', 'فَسَدَ', 'كَسَبَ', 'خَلْف', 'عَصَى', 'تَوْبَة',
  ],
  lemmas: {
    'طَوْع': { gloss: 'compliance, obedience' },
    'كَيْفَ': { gloss: 'how' },
    'عَبَرَ': { gloss: 'to cross' },
    'تَقَدَّمَ': { gloss: 'to advance, come forward' },
    'لَحِقَ': { gloss: 'to catch up with, overtake' },
    'أَسَرَ': { gloss: 'to capture, take prisoner' },
    'ذَلِيل': { gloss: 'lowly, abased, disgraced (pl. أَذِلَّاء)' },
    'بَرِّيَّة': { gloss: 'wilderness, desert' },
    'غَرِيب': { gloss: 'stranger, foreigner (pl. غُرَبَاء)' },
    'عَرْض': { gloss: 'width, breadth, the middle of' },
    'اِنْطَبَقَ': { gloss: 'to close up, clamp shut' },
    'هَيْهَاتَ': { gloss: 'how far off! alas!' },
    'دَاوَى': { gloss: 'to treat, cure (medically)' },
    'وَاسَى': { gloss: 'to console, comfort' },
    'طَبِيب': { gloss: 'doctor, physician' },
    'خَلَّفَ': { gloss: 'to leave behind' },
    'ذِرَاع': { gloss: "cubit, forearm's length" },
    'مَدْفَن': { gloss: 'burial place, grave' },
    'قَذَفَ': { gloss: 'to cast, throw up' },
    'جُثَّة': { gloss: 'corpse' },
    'أَيْقَنَ': { gloss: 'to become certain' },
    'بَدَن': { gloss: 'body' },
    'غَرَق': { gloss: 'drowning' },
    'طَاغِيَة': { gloss: 'tyrant, transgressor' },
    'قَضَى': { gloss: 'to spend (time); to decree' },
    'آخِر': { gloss: 'last, end' },
    'خَنَقَ': { gloss: 'to strangle, choke' },
    'شَنَقَ': { gloss: 'to hang (execute)' },
    'سَاكِن': { gloss: 'still, motionless, calm' },
    'أَدْرَكَ': { gloss: 'to overtake, catch up with, reach' },
    'فَسَدَ': { gloss: 'to be corrupt' },
    'كَسَبَ': { gloss: 'to earn, acquire' },
    'خَلْف': { gloss: 'behind, after' },
    'عَصَى': { gloss: 'to disobey' },
    'تَوْبَة': { gloss: 'repentance' },
  },
  paragraphs: [
    {
      en: 'Pharaoh saw how the Israelites had walked and crossed the sea in safety. Pharaoh said to his troops: "Look at the sea, how it split open in obedience to my command, so that I may seize these fugitives!" Pharaoh advanced with his troops, and the Israelites panicked once again.',
      sentences: [
        {
          id: 'qs-v7-c08-001',
          ar: 'وَرَأَى فِرْعَوْنُ كَيْفَ سَارَ بَنُو إِسْرَائِيلَ وَعَبَرُوا الْبَحْرَ آمِنِينَ.',
          en: 'Pharaoh saw how the Israelites had walked and crossed the sea in safety.',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to see; and saw' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'سَارَ', lemma: 'سَارَ', pos: 'verb', features: 'perf.3ms', gloss: 'to walk, march; walked' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'وَعَبَرُوا', lemma: 'عَبَرَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ع ب ر', gloss: 'to cross; and crossed' },
            { surface: 'الْبَحْرَ', lemma: 'بَحْر', pos: 'noun', features: 'def.acc', gloss: 'the sea' },
            { surface: 'آمِنِينَ', lemma: 'آمِن', pos: 'adj', features: 'pl.acc', gloss: 'safe, secure' },
          ],
        },
        {
          id: 'qs-v7-c08-002',
          ar: 'وَقَالَ فِرْعَوْنُ لِجُنُودِهِ:',
          en: 'Pharaoh said to his troops:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'لِجُنُودِهِ', lemma: 'جُنْد', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'to his troops' },
          ],
        },
        {
          id: 'qs-v7-c08-003',
          ar: 'اُنْظُرُوا إِلَى الْبَحْرِ كَيْفَ انْفَلَقَ طَوْعاً لِأَمْرِي حَتَّى آخُذَ هَؤُلَاءِ الْفَارِّينَ.',
          en: '"Look at the sea, how it split open in obedience to my command, so that I may seize these fugitives!"',
          tokens: [
            { surface: 'اُنْظُرُوا', lemma: 'نَظَرَ', pos: 'verb', features: 'imp.2mp', gloss: 'to look; look!' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'كَيْفَ', lemma: 'كَيْفَ', pos: 'part', features: 'part', gloss: 'how' },
            { surface: 'انْفَلَقَ', lemma: 'اِنْفَلَقَ', pos: 'verb', features: 'perf.3ms', root: 'ف ل ق', gloss: 'to split open; split open' },
            { surface: 'طَوْعاً', lemma: 'طَوْع', pos: 'noun', features: 'indef.acc', root: 'ط و ع', gloss: 'compliance, obedience' },
            { surface: 'لِأَمْرِي', lemma: 'أَمْر', pos: 'noun', features: 'prep+gen+1s', gloss: 'to my command' },
            { surface: 'حَتَّى', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'so that' },
            { surface: 'آخُذَ', lemma: 'أَخَذَ', pos: 'verb', features: 'impf.1s', gloss: 'to take, seize; I may seize' },
            { surface: 'هَؤُلَاءِ', lemma: 'هَؤُلَاءِ', pos: 'dem', features: 'dem.pl', gloss: 'these' },
            { surface: 'الْفَارِّينَ', lemma: 'فَرَّ', pos: 'noun', features: 'pl.def.acc', gloss: 'the fleeing ones, fugitives' },
          ],
        },
        {
          id: 'qs-v7-c08-004',
          ar: 'وَتَقَدَّمَ فِرْعَوْنُ بِجُنُودِهِ،',
          en: 'Pharaoh advanced with his troops,',
          tokens: [
            { surface: 'وَتَقَدَّمَ', lemma: 'تَقَدَّمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق د م', gloss: 'to advance; and advanced' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'بِجُنُودِهِ', lemma: 'جُنْد', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'with his troops' },
          ],
        },
        {
          id: 'qs-v7-c08-005',
          ar: 'فَجَزِعَ بَنُو إِسْرَائِيلَ مَرَّةً أُخْرَى.',
          en: 'and the Israelites panicked once again.',
          tokens: [
            { surface: 'فَجَزِعَ', lemma: 'جَزِعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ز ع', gloss: 'to panic, be distressed; so panicked' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'مَرَّةً', lemma: 'مَرَّة', pos: 'noun', features: 'indef.acc', gloss: 'a time, once' },
            { surface: 'أُخْرَى', lemma: 'آخَر', pos: 'adj', features: 'indef.acc.f', gloss: 'another' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ فِرْعَوْنُ لِجُنُودِهِ عِنْدَمَا رَأَى الْبَحْرَ مُنْفَلِقاً؟',
          options: ['اُنْظُرُوا إِلَى الْبَحْرِ كَيْفَ انْفَلَقَ طَوْعاً لِأَمْرِي حَتَّى آخُذَ هَؤُلَاءِ الْفَارِّينَ', 'اُتْرُكُوا بَنِي إِسْرَائِيلَ وَشَأْنَهُمْ', 'اِرْجِعُوا إِلَى مِصْرَ فَوْراً'],
          answer: 0,
          qEn: 'What did Pharaoh say to his troops when he saw the sea split open?',
          optionsEn: ['"Look at the sea, how it split open in obedience to my command, so that I may seize these fugitives!"', '"Leave the Israelites and their affair alone"', '"Return to Egypt at once"'],
        },
        {
          q: 'مَاذَا حَدَثَ لِبَنِي إِسْرَائِيلَ عِنْدَمَا تَقَدَّمَ فِرْعَوْنُ بِجُنُودِهِ؟',
          options: ['جَزِعُوا مَرَّةً أُخْرَى', 'فَرِحُوا لِأَنَّهُمْ آمِنُونَ', 'لَمْ يَشْعُرُوا بِشَيْءٍ'],
          answer: 0,
          qEn: 'What happened to the Israelites when Pharaoh advanced with his troops?',
          optionsEn: ['They panicked once again', 'They rejoiced, feeling safe', 'They felt nothing at all'],
        },
      ],
    },
    {
      en: '"Here is the enemy, here is the tyrant, wanting to cross the road to reach us! And nothing holds him back from us -- he will catch up with us and take us back to Egypt as captives in disgrace, or kill us here in this wilderness, as strangers far from home."',
      sentences: [
        {
          id: 'qs-v7-c08-006',
          ar: 'هَا هُوَ الْعَدُوُّ هَا هُوَ الظَّالِمُ يُرِيدُ أَنْ يَعْبُرَ الطَّرِيقَ إِلَيْنَا.',
          en: 'Here is the enemy, here is the tyrant, wanting to cross the road to reach us.',
          tokens: [
            { surface: 'هَا', lemma: 'هَا', pos: 'part', features: 'part', gloss: 'here (is)' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'الْعَدُوُّ', lemma: 'عَدُوّ', pos: 'noun', features: 'def.nom', gloss: 'the enemy' },
            { surface: 'هَا', lemma: 'هَا', pos: 'part', features: 'part', gloss: 'here (is)' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'الظَّالِمُ', lemma: 'ظَالِم', pos: 'noun', features: 'def.nom', gloss: 'the wrongdoer, tyrant' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'to want; wanting' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَعْبُرَ', lemma: 'عَبَرَ', pos: 'verb', features: 'impf.3ms', root: 'ع ب ر', gloss: 'to cross' },
            { surface: 'الطَّرِيقَ', lemma: 'طَرِيق', pos: 'noun', features: 'def.acc', gloss: 'the road' },
            { surface: 'إِلَيْنَا', lemma: 'إِلَى', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
          ],
        },
        {
          id: 'qs-v7-c08-007',
          ar: 'وَلَا يَمْنَعُهُ مِنَّا شَيْءٌ،',
          en: 'And nothing holds him back from us,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَمْنَعُهُ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to prevent, hold back; holds him back' },
            { surface: 'مِنَّا', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'from us' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', gloss: 'anything' },
          ],
        },
        {
          id: 'qs-v7-c08-008',
          ar: 'وَسَيَلْحَقُنَا وَيَأْخُذُنَا إِلَى مِصْرَ مَأْسُورِينَ أَذِلَّاءَ أَوْ يَقْتُلُنَا فِي هَذِهِ الْبَرِّيَّةِ غُرَبَاءَ.',
          en: 'he will catch up with us and take us back to Egypt as captives in disgrace, or kill us here in this wilderness, as strangers far from home.',
          tokens: [
            { surface: 'وَسَيَلْحَقُنَا', lemma: 'لَحِقَ', pos: 'verb', features: 'conj+part+impf.3ms+1p', root: 'ل ح ق', gloss: 'to catch up with; and will overtake us' },
            { surface: 'وَيَأْخُذُنَا', lemma: 'أَخَذَ', pos: 'verb', features: 'conj+impf.3ms+1p', gloss: 'to take; and will take us' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'مَأْسُورِينَ', lemma: 'أَسَرَ', pos: 'noun', features: 'pl.acc', root: 'أ س ر', gloss: 'captives, taken prisoner' },
            { surface: 'أَذِلَّاءَ', lemma: 'ذَلِيل', pos: 'adj', features: 'pl.acc', root: 'ذ ل ل', gloss: 'lowly, disgraced' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'يَقْتُلُنَا', lemma: 'قَتَلَ', pos: 'verb', features: 'impf.3ms+1p', gloss: 'to kill; will kill us' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْبَرِّيَّةِ', lemma: 'بَرِّيَّة', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'wilderness, desert' },
            { surface: 'غُرَبَاءَ', lemma: 'غَرِيب', pos: 'noun', features: 'pl.acc', root: 'غ ر ب', gloss: 'strangers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّ خَافَ بَنُو إِسْرَائِيلَ عِنْدَمَا رَأَوْا فِرْعَوْنَ يَتَقَدَّمُ؟',
          options: ['أَنْ يَأْخُذَهُمْ إِلَى مِصْرَ مَأْسُورِينَ أَذِلَّاءَ أَوْ يَقْتُلَهُمْ فِي الْبَرِّيَّةِ غُرَبَاءَ', 'أَنْ يَتْرُكَهُمْ فِي الصَّحْرَاءِ بِلَا طَعَامٍ', 'أَنْ يُغَرِّقَ سُفُنَهُمْ'],
          answer: 0,
          qEn: 'What did the Israelites fear when they saw Pharaoh advancing?',
          optionsEn: ['That he would take them to Egypt as captives in disgrace, or kill them in the wilderness as strangers', 'That he would leave them in the desert without food', 'That he would sink their ships'],
        },
      ],
    },
    {
      en: 'Mūsā wanted to strike the dry land with his staff, so that it would become sea again as it had been, but Allah revealed to him: "Leave the sea still -- indeed, they are an army [destined] to be drowned."',
      sentences: [
        {
          id: 'qs-v7-c08-009',
          ar: 'وَأَرَادَ مُوسَى أَنْ يَضْرِبَ بِعَصَاهُ الْبَرَّ فَيَعُودُ بَحْراً كَمَا كَانَ',
          en: 'Mūsā wanted to strike the dry land with his staff, so that it would become sea again as it had been,',
          tokens: [
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to want; and wanted' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'nom', gloss: 'Mūsā' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَضْرِبَ', lemma: 'ضَرَبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to strike' },
            { surface: 'بِعَصَاهُ', lemma: 'عَصَا', pos: 'noun', features: 'prep+gen+3ms', root: 'ع ص و', gloss: 'with his staff' },
            { surface: 'الْبَرَّ', lemma: 'بَرّ', pos: 'noun', features: 'def.acc', gloss: 'the dry land' },
            { surface: 'فَيَعُودُ', lemma: 'عَادَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to return, become again; so that it becomes' },
            { surface: 'بَحْراً', lemma: 'بَحْر', pos: 'noun', features: 'indef.acc', gloss: 'a sea' },
            { surface: 'كَمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'as' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; it had been' },
          ],
        },
        {
          id: 'qs-v7-c08-010',
          ar: 'وَلَكِنْ أَوْحَى اللَّهُ إِلَيْهِ:',
          en: 'but Allah revealed to him:',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'أَوْحَى', lemma: 'أَوْحَى', pos: 'verb', features: 'perf.3ms', gloss: 'to reveal; revealed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'إِلَيْهِ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v7-c08-011',
          ar: 'اتْرُكِ الْبَحْرَ سَاكِناً',
          en: '"Leave the sea still --"',
          tokens: [
            { surface: 'اتْرُكِ', lemma: 'تَرَكَ', pos: 'verb', features: 'imp.2ms', gloss: 'to leave; leave!' },
            { surface: 'الْبَحْرَ', lemma: 'بَحْر', pos: 'noun', features: 'def.acc', gloss: 'the sea' },
            { surface: 'سَاكِناً', lemma: 'سَاكِن', pos: 'adj', features: 'indef.acc', root: 'س ك ن', gloss: 'still, motionless' },
          ],
        },
        {
          id: 'qs-v7-c08-012',
          ar: '﴿إِنَّهُمْ جُندٌ مُّغْرَقُونَ﴾.',
          en: '"indeed, they are an army [destined] to be drowned."',
          tokens: [
            { surface: 'إِنَّهُمْ', lemma: 'إِنَّ', pos: 'part', features: 'part+3mp', gloss: 'indeed they' },
            { surface: 'جُندٌ', lemma: 'جُنْد', pos: 'noun', features: 'indef.nom', gloss: 'an army' },
            { surface: 'مُّغْرَقُونَ', lemma: 'غَرِقَ', pos: 'noun', features: 'pass+pl.indef.nom', gloss: 'to be drowned; [destined] to be drowned' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا أَرَادَ مُوسَى أَنْ يَفْعَلَ بِالْبَرِّ، وَبِمَاذَا أَوْحَى اللَّهُ إِلَيْهِ؟',
          options: ['أَرَادَ أَنْ يَضْرِبَهُ فَيَعُودَ بَحْراً، فَأَوْحَى اللَّهُ أَنْ يَتْرُكَ الْبَحْرَ سَاكِناً', 'أَرَادَ أَنْ يَبْنِيَ عَلَيْهِ بُيُوتاً', 'أَرَادَ أَنْ يَزْرَعَهُ'],
          answer: 0,
          qEn: 'What did Mūsā want to do with the dry land, and what did Allah reveal to him instead?',
          optionsEn: ['He wanted to strike it so it would become sea again, but Allah told him to leave the sea still', 'He wanted to build houses on it', 'He wanted to farm it'],
        },
      ],
    },
    {
      en: 'And when Pharaoh and his troops reached the middle of the sea -- which was [now] dry land -- it closed in upon them. And when Pharaoh saw how serious it was, his stupor left him.',
      sentences: [
        {
          id: 'qs-v7-c08-013',
          ar: 'وَلَمَّا وَصَلَ فِرْعَوْنُ وَجُنُودُهُ إِلَى عَرْضِ الْبَحْرِ (وَهُوَ بَرٌّ) انْطَبَقَ عَلَيْهِمْ.',
          en: 'And when Pharaoh and his troops reached the middle of the sea -- which was [now] dry land -- it closed in upon them.',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'وَصَلَ', lemma: 'وَصَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to arrive; arrived' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'وَجُنُودُهُ', lemma: 'جُنْد', pos: 'noun', features: 'conj+pl.nom+3ms', gloss: 'and his troops' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'عَرْضِ', lemma: 'عَرْض', pos: 'noun', features: 'constr.gen', root: 'ع ر ض', gloss: 'the middle, breadth of' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'which was' },
            { surface: 'بَرٌّ', lemma: 'بَرّ', pos: 'noun', features: 'indef.nom', gloss: 'dry land' },
            { surface: 'انْطَبَقَ', lemma: 'اِنْطَبَقَ', pos: 'verb', features: 'perf.3ms', root: 'ط ب ق', gloss: 'to close up, clamp shut; closed in' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
          ],
        },
        {
          id: 'qs-v7-c08-014',
          ar: 'وَلَمَّا رَأَى فِرْعَوْنُ الْجِدَّ زَالَتْ سَكْرَتُهُ.',
          en: 'And when Pharaoh saw how serious it was, his stupor left him.',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', gloss: 'to see; saw' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'الْجِدَّ', lemma: 'جِدّ', pos: 'noun', features: 'def.acc', gloss: 'the seriousness' },
            { surface: 'زَالَتْ', lemma: 'زَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to leave, depart; left' },
            { surface: 'سَكْرَتُهُ', lemma: 'سَكْرَة', pos: 'noun', features: 'nom+3ms', gloss: 'his stupor' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ عِنْدَمَا وَصَلَ فِرْعَوْنُ وَجُنُودُهُ إِلَى عَرْضِ الْبَحْرِ؟',
          options: ['انْطَبَقَ الْبَحْرُ عَلَيْهِمْ', 'عَبَرُوا بِسَلَامٍ مِثْلَ بَنِي إِسْرَائِيلَ', 'رَجَعُوا إِلَى مِصْرَ فَوْراً'],
          answer: 0,
          qEn: 'What happened when Pharaoh and his troops reached the middle of the sea?',
          optionsEn: ['The sea closed in upon them', 'They crossed safely, like the Israelites', 'They returned to Egypt at once'],
        },
      ],
    },
    {
      en: '"...until, when drowning overtook him, he said: \'I believe that there is no god except He in whom the Children of Israel believe, and I am of the Muslims.\'" But how far off [was that]! "Now?! When you disobeyed before and were among the corrupters!" "Repentance is not for those who do evil deeds until, when death confronts one of them, he says: \'Now I repent.\'" "On the Day when some of the signs of your Lord come, no soul will benefit from its faith if it did not believe before, or earn some good through its faith." So it was said to him: "Now?! When you disobeyed before and were among the corrupters!"',
      sentences: [
        {
          id: 'qs-v7-c08-015',
          ar: '﴿حَتَّىٰ إِذَآ أَدْرَكَهُ ٱلْغَرَقُ قَالَ ءَامَنتُ أَنَّهُ لَآ إِلَٰهَ إِلَّا ٱلَّذِى ءَامَنَتْ بِهِۦ بَنُوٓاْ إِسْرَٰٓءِيلَ وَأَنَا۟ مِنَ ٱلْمُسْلِمِينَ﴾.',
          en: '"...until, when drowning overtook him, he said: \'I believe that there is no god except He in whom the Children of Israel believe, and I am of the Muslims.\'"',
          tokens: [
            { surface: 'حَتَّىٰ', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'إِذَآ', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'أَدْرَكَهُ', lemma: 'أَدْرَكَ', pos: 'verb', features: 'perf.3ms+3ms', root: 'د ر ك', gloss: 'to overtake; overtook him' },
            { surface: 'ٱلْغَرَقُ', lemma: 'غَرَق', pos: 'noun', features: 'def.nom', gloss: 'drowning' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'ءَامَنتُ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.1s', gloss: 'to believe; I believe' },
            { surface: 'أَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'part+3ms', gloss: 'that' },
            { surface: 'لَآ', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'there is no' },
            { surface: 'إِلَٰهَ', lemma: 'إِلَٰه', pos: 'noun', features: 'acc', gloss: 'god, deity' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'ٱلَّذِى', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'He whom' },
            { surface: 'ءَامَنَتْ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3fs', gloss: 'to believe; believed' },
            { surface: 'بِهِۦ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in Him' },
            { surface: 'بَنُوٓاْ', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَٰٓءِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'وَأَنَا۟', lemma: 'أَنَا', pos: 'noun', features: 'conj+1s', gloss: 'and I' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'ٱلْمُسْلِمِينَ', lemma: 'مُسْلِم', pos: 'noun', features: 'pl.def.gen', gloss: 'the Muslims, those who submit' },
          ],
        },
        {
          id: 'qs-v7-c08-016',
          ar: 'وَلَكِنْ هَيْهَاتَ!',
          en: 'But how far off [was that]!',
          tokens: [
            { surface: 'وَلَكِنْ', lemma: 'لَكِنْ', pos: 'part', features: 'conj+part', gloss: 'but' },
            { surface: 'هَيْهَاتَ', lemma: 'هَيْهَاتَ', pos: 'part', features: 'part', gloss: 'how far off! alas!' },
          ],
        },
        {
          id: 'qs-v7-c08-017',
          ar: '﴿ءَآلْـَٔـٰنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنتَ مِنَ ٱلْمُفْسِدِينَ﴾.',
          en: '"Now?! When you disobeyed before and were among the corrupters!"',
          tokens: [
            { surface: 'ءَآلْـَٔـٰنَ', lemma: 'الْآن', pos: 'adv', features: 'part+adv', gloss: 'now?!' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'when indeed' },
            { surface: 'عَصَيْتَ', lemma: 'عَصَى', pos: 'verb', features: 'perf.2ms', root: 'ع ص ي', gloss: 'to disobey; you disobeyed' },
            { surface: 'قَبْلُ', lemma: 'قَبْلُ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'وَكُنتَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.2ms', gloss: 'to be; and were' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'ٱلْمُفْسِدِينَ', lemma: 'فَسَدَ', pos: 'noun', features: 'pl.def.gen', root: 'ف س د', gloss: 'the corrupters' },
          ],
        },
        {
          id: 'qs-v7-c08-018',
          ar: '﴿وَلَيْسَتِ ٱلتَّوْبَةُ لِلَّذِينَ يَعْمَلُونَ ٱلسَّيِّـَٔاتِ حَتَّىٰ إِذَا حَضَرَ أَحَدَهُمُ ٱلْمَوْتُ قَالَ إِنِّي تُبْتُ ٱلْـَٔـٰنَ﴾.',
          en: '"Repentance is not for those who do evil deeds until, when death confronts one of them, he says: \'Now I repent.\'"',
          tokens: [
            { surface: 'وَلَيْسَتِ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to not be; and is not' },
            { surface: 'ٱلتَّوْبَةُ', lemma: 'تَوْبَة', pos: 'noun', features: 'def.nom', root: 'ت و ب', gloss: 'the repentance' },
            { surface: 'لِلَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'prep+rel.pl', gloss: 'for those who' },
            { surface: 'يَعْمَلُونَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3mp', gloss: 'to do; do' },
            { surface: 'ٱلسَّيِّـَٔاتِ', lemma: 'سَيِّئَة', pos: 'noun', features: 'pl.def.acc', gloss: 'the evil deeds' },
            { surface: 'حَتَّىٰ', lemma: 'حَتَّى', pos: 'part', features: 'part', gloss: 'until' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'part', features: 'part', gloss: 'when' },
            { surface: 'حَضَرَ', lemma: 'حَضَرَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be present, confront; confronts' },
            { surface: 'أَحَدَهُمُ', lemma: 'أَحَد', pos: 'noun', features: 'acc+3mp', gloss: 'one of them' },
            { surface: 'ٱلْمَوْتُ', lemma: 'مَوْت', pos: 'noun', features: 'def.nom', gloss: 'death' },
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; he says' },
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'تُبْتُ', lemma: 'تَابَ', pos: 'verb', features: 'perf.1s', gloss: 'to repent; I repent' },
            { surface: 'ٱلْـَٔـٰنَ', lemma: 'الْآن', pos: 'adv', features: 'adv', gloss: 'now' },
          ],
        },
        {
          id: 'qs-v7-c08-019',
          ar: '﴿يَوْمَ يَأْتِي بَعْضُ ءَايَٰتِ رَبِّكَ لَا يَنفَعُ نَفْسًا إِيمَٰنُهَا لَمْ تَكُنْ ءَامَنَتْ مِن قَبْلُ أَوْ كَسَبَتْ فِىٓ إِيمَٰنِهَا خَيْرًا﴾.',
          en: '"On the Day when some of the signs of your Lord come, no soul will benefit from its faith if it did not believe before, or earn some good through its faith."',
          tokens: [
            { surface: 'يَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'acc', gloss: 'the day when' },
            { surface: 'يَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'impf.3ms', gloss: 'to come' },
            { surface: 'بَعْضُ', lemma: 'بَعْض', pos: 'noun', features: 'constr.nom', gloss: 'some of' },
            { surface: 'ءَايَٰتِ', lemma: 'آيَة', pos: 'noun', features: 'pl.constr.gen', gloss: 'the signs of' },
            { surface: 'رَبِّكَ', lemma: 'رَبّ', pos: 'noun', features: 'gen+2ms', gloss: 'your Lord' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنفَعُ', lemma: 'نَفَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to benefit' },
            { surface: 'نَفْسًا', lemma: 'نَفْس', pos: 'noun', features: 'indef.acc', gloss: 'a soul' },
            { surface: 'إِيمَٰنُهَا', lemma: 'إِيمَان', pos: 'noun', features: 'nom+3fs', gloss: 'its faith' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَكُنْ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3fs', gloss: 'to be' },
            { surface: 'ءَامَنَتْ', lemma: 'آمَنَ', pos: 'verb', features: 'perf.3fs', gloss: 'to believe; believed' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'before' },
            { surface: 'قَبْلُ', lemma: 'قَبْلُ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'كَسَبَتْ', lemma: 'كَسَبَ', pos: 'verb', features: 'perf.3fs', root: 'ك س ب', gloss: 'to earn; earned' },
            { surface: 'فِىٓ', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'through' },
            { surface: 'إِيمَٰنِهَا', lemma: 'إِيمَان', pos: 'noun', features: 'gen+3fs', gloss: 'its faith' },
            { surface: 'خَيْرًا', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'good' },
          ],
        },
        {
          id: 'qs-v7-c08-020',
          ar: 'فَقِيلَ لَهُ :',
          en: 'So it was said to him:',
          tokens: [
            { surface: 'فَقِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+pass+perf.3ms', gloss: 'to say; so it was said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v7-c08-021',
          ar: '﴿ءَآلْـَٔـٰنَ وَقَدْ عَصَيْتَ قَبْلُ وَكُنتَ مِنَ ٱلْمُفْسِدِينَ﴾.',
          en: '"Now?! When you disobeyed before and were among the corrupters!"',
          tokens: [
            { surface: 'ءَآلْـَٔـٰنَ', lemma: 'الْآن', pos: 'adv', features: 'part+adv', gloss: 'now?!' },
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'when indeed' },
            { surface: 'عَصَيْتَ', lemma: 'عَصَى', pos: 'verb', features: 'perf.2ms', root: 'ع ص ي', gloss: 'to disobey; you disobeyed' },
            { surface: 'قَبْلُ', lemma: 'قَبْلُ', pos: 'adv', features: 'adv', gloss: 'before' },
            { surface: 'وَكُنتَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.2ms', gloss: 'to be; and were' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'ٱلْمُفْسِدِينَ', lemma: 'فَسَدَ', pos: 'noun', features: 'pl.def.gen', root: 'ف س د', gloss: 'the corrupters' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ فِرْعَوْنُ حِينَ أَدْرَكَهُ الْغَرَقُ؟',
          options: ['آمَنتُ أَنَّهُ لَا إِلَٰهَ إِلَّا الَّذِي آمَنَتْ بِهِ بَنُو إِسْرَائِيلَ وَأَنَا مِنَ الْمُسْلِمِينَ', 'نَادَى مُوسَى لِيُنْقِذَهُ', 'صَمَتَ وَلَمْ يَقُلْ شَيْئاً'],
          answer: 0,
          qEn: 'What did Pharaoh say when drowning overtook him?',
          optionsEn: ['"I believe that there is no god except He in whom the Children of Israel believe, and I am of the Muslims"', 'He called out to Mūsā to save him', 'He was silent and said nothing'],
        },
        {
          q: 'لِمَاذَا لَمْ تُقْبَلْ تَوْبَةُ فِرْعَوْنَ؟',
          options: ['لِأَنَّهُ آمَنَ فَقَطْ بَعْدَ أَنْ أَدْرَكَهُ الْغَرَقُ، وَقَدْ عَصَى قَبْلُ وَكَانَ مِنَ الْمُفْسِدِينَ', 'لِأَنَّهُ لَمْ يَقُلِ الشَّهَادَةَ بِشَكْلٍ صَحِيحٍ', 'لِأَنَّ اللَّهَ لَا يَقْبَلُ تَوْبَةَ أَحَدٍ أَبَداً'],
          answer: 0,
          qEn: "Why was Pharaoh's repentance not accepted?",
          optionsEn: ['Because he only believed after drowning had overtaken him, when he had already disobeyed before and been among the corrupters', 'Because he did not say the declaration of faith correctly', "Because Allah never accepts anyone's repentance"],
        },
      ],
    },
    {
      en: 'And Pharaoh died in the sea, drowned. The tyrant died -- who had killed thousands of children and men by slaughter and by strangling. The despot died -- who had killed thousands upon thousands by confinement and by hanging. The king of Egypt died, far from his throne, far from his palace, far from his dominion, with no doctor to treat him and no friend to console him, and no eye to weep for him.',
      sentences: [
        {
          id: 'qs-v7-c08-022',
          ar: 'وَمَاتَ فِرْعَوْنُ فِي الْبَحْرِ غَرَقاً.',
          en: 'And Pharaoh died in the sea, drowned.',
          tokens: [
            { surface: 'وَمَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to die; and died' },
            { surface: 'فِرْعَوْنُ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'nom', gloss: 'Pharaoh' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْبَحْرِ', lemma: 'بَحْر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'غَرَقاً', lemma: 'غَرَق', pos: 'noun', features: 'indef.acc', root: 'غ ر ق', gloss: 'drowning, by drowning' },
          ],
        },
        {
          id: 'qs-v7-c08-023',
          ar: 'مَاتَ الْجَبَّارُ الَّذِي قَتَلَ أُلُوفاً مِنَ الأَطْفَالِ وَالرِّجَالِ ذَبْحاً وَخَنْقاً.',
          en: 'The tyrant died -- who had killed thousands of children and men by slaughter and by strangling.',
          tokens: [
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to die; died' },
            { surface: 'الْجَبَّارُ', lemma: 'جَبَّار', pos: 'noun', features: 'def.nom', gloss: 'the tyrant, compeller' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'قَتَلَ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to kill; killed' },
            { surface: 'أُلُوفاً', lemma: 'أَلْف', pos: 'noun', features: 'pl.indef.acc', gloss: 'thousands' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.gen', gloss: 'the children' },
            { surface: 'وَالرِّجَالِ', lemma: 'رَجُل', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the men' },
            { surface: 'ذَبْحاً', lemma: 'ذَبْح', pos: 'noun', features: 'indef.acc', gloss: 'by slaughter' },
            { surface: 'وَخَنْقاً', lemma: 'خَنَقَ', pos: 'noun', features: 'conj+indef.acc', root: 'خ ن ق', gloss: 'and by strangling' },
          ],
        },
        {
          id: 'qs-v7-c08-024',
          ar: 'مَاتَ الطَّاغِيَةُ الَّذِي قَتَلَ أُلُوفَ آلَافٍ صَبْراً وَشَنْقاً.',
          en: 'The despot died -- who had killed thousands upon thousands by confinement and by hanging.',
          tokens: [
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to die; died' },
            { surface: 'الطَّاغِيَةُ', lemma: 'طَاغِيَة', pos: 'noun', features: 'def.nom', root: 'ط غ ي', gloss: 'the despot, transgressor' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'قَتَلَ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to kill; killed' },
            { surface: 'أُلُوفَ', lemma: 'أَلْف', pos: 'noun', features: 'pl.constr.acc', gloss: 'thousands of' },
            { surface: 'آلَافٍ', lemma: 'أَلْف', pos: 'noun', features: 'pl.indef.gen', gloss: 'thousands' },
            { surface: 'صَبْراً', lemma: 'صَبْر', pos: 'noun', features: 'indef.acc', gloss: 'by confinement (until death)' },
            { surface: 'وَشَنْقاً', lemma: 'شَنَقَ', pos: 'noun', features: 'conj+indef.acc', root: 'ش ن ق', gloss: 'and by hanging' },
          ],
        },
        {
          id: 'qs-v7-c08-025',
          ar: 'مَاتَ مَلِكُ مِصْرَ بَعِيداً عَنْ عَرْشِهِ بَعِيداً عَنْ قَصْرِهِ،',
          en: 'The king of Egypt died, far from his throne, far from his palace,',
          tokens: [
            { surface: 'مَاتَ', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3ms', gloss: 'to die; died' },
            { surface: 'مَلِكُ', lemma: 'مَلِك', pos: 'noun', features: 'nom.constr', gloss: 'the king of' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'gen', gloss: 'Egypt' },
            { surface: 'بَعِيداً', lemma: 'بَعِيد', pos: 'adj', features: 'indef.acc', gloss: 'far' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عَرْشِهِ', lemma: 'عَرْش', pos: 'noun', features: 'gen+3ms', gloss: 'his throne' },
            { surface: 'بَعِيداً', lemma: 'بَعِيد', pos: 'adj', features: 'indef.acc', gloss: 'far' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قَصْرِهِ', lemma: 'قَصْر', pos: 'noun', features: 'gen+3ms', gloss: 'his palace' },
          ],
        },
        {
          id: 'qs-v7-c08-026',
          ar: 'بَعِيداً عَنْ سُلْطَانِهِ لَا طَبِيبَ يُدَاوِيهِ وَلَا صَدِيقَ يُوَاسِيهِ،',
          en: 'far from his dominion, with no doctor to treat him and no friend to console him,',
          tokens: [
            { surface: 'بَعِيداً', lemma: 'بَعِيد', pos: 'adj', features: 'indef.acc', gloss: 'far' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'سُلْطَانِهِ', lemma: 'سُلْطَان', pos: 'noun', features: 'gen+3ms', gloss: 'his dominion' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'no' },
            { surface: 'طَبِيبَ', lemma: 'طَبِيب', pos: 'noun', features: 'acc', root: 'ط ب ب', gloss: 'doctor' },
            { surface: 'يُدَاوِيهِ', lemma: 'دَاوَى', pos: 'verb', features: 'impf.3ms+3ms', root: 'د و ي', gloss: 'to treat, cure; to treat him' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'صَدِيقَ', lemma: 'صَدِيق', pos: 'noun', features: 'acc', gloss: 'friend' },
            { surface: 'يُوَاسِيهِ', lemma: 'وَاسَى', pos: 'verb', features: 'impf.3ms+3ms', root: 'أ س و', gloss: 'to console; to console him' },
          ],
        },
        {
          id: 'qs-v7-c08-027',
          ar: 'وَلَا عَيْنَ تَبْكِيهِ.',
          en: 'and no eye to weep for him.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'عَيْنَ', lemma: 'عَيْن', pos: 'noun', features: 'acc', gloss: 'eye' },
            { surface: 'تَبْكِيهِ', lemma: 'بَكَى', pos: 'verb', features: 'impf.3fs+3ms', gloss: 'to weep; to weep for him' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا وَصَفَ الْكَاتِبُ مَوْتَ فِرْعَوْنَ فِي هَذَا الْمَقْطَعِ؟',
          options: ['مَاتَ بَعِيداً عَنْ عَرْشِهِ وَقَصْرِهِ وَسُلْطَانِهِ، لَا طَبِيبَ يُدَاوِيهِ وَلَا صَدِيقَ يُوَاسِيهِ وَلَا عَيْنَ تَبْكِيهِ', 'مَاتَ مُحَاطاً بِأَهْلِهِ وَجُنُودِهِ', 'مَاتَ فِي قَصْرِهِ بِسَلَامٍ'],
          answer: 0,
          qEn: "How did the author describe Pharaoh's death in this passage?",
          optionsEn: ['He died far from his throne, his palace, and his dominion -- no doctor to treat him, no friend to console him, and no eye to weep for him', 'He died surrounded by his family and troops', 'He died peacefully in his palace'],
        },
      ],
    },
    {
      en: 'The Israelites were in doubt about his death, saying that Pharaoh does not die. "Did we not use to see him go for days without eating or drinking?" But the sea cast up his corpse, and so they became certain of his death. And Allah, Exalted is He, said to Pharaoh: "So today We shall save your body, that you may be a sign for those who come after you." And Pharaoh\'s corpse became a sign for those who saw it, and a lesson for those who took heed. And Pharaoh\'s army drowned to the very last one, and not one of them survived. They left Egypt behind them, and did not find, in all its wide land, so much as a single cubit for a grave.',
      sentences: [
        {
          id: 'qs-v7-c08-028',
          ar: 'وَكَانَ بَنُو إِسْرَائِيلَ فِي شَكٍّ عَنْ مَوْتِهِ يَقُولُونَ إِنَّ فِرْعَوْنَ لَا يَمُوتُ.',
          en: 'The Israelites were in doubt about his death, saying that Pharaoh does not die.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and were' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'the sons of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'شَكٍّ', lemma: 'شَكّ', pos: 'noun', features: 'indef.gen', gloss: 'doubt' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'مَوْتِهِ', lemma: 'مَوْت', pos: 'noun', features: 'gen+3ms', gloss: 'his death' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; saying' },
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'that, indeed' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'acc', gloss: 'Pharaoh' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمُوتُ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3ms', gloss: 'to die' },
          ],
        },
        {
          id: 'qs-v7-c08-029',
          ar: 'أَمَا كُنَّا نَرَاهُ يَقْضِي أَيَّاماً وَلَا يَأْكُلُ وَلَا يَشْرَبُ؟!',
          en: '"Did we not use to see him go for days without eating or drinking?"',
          tokens: [
            { surface: 'أَمَا', lemma: 'مَا', pos: 'part', features: 'part+neg', gloss: 'did not' },
            { surface: 'كُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'perf.1p', gloss: 'to be; we used to' },
            { surface: 'نَرَاهُ', lemma: 'رَأَى', pos: 'verb', features: 'impf.1p+3ms', gloss: 'to see; we see him' },
            { surface: 'يَقْضِي', lemma: 'قَضَى', pos: 'verb', features: 'impf.3ms', root: 'ق ض ي', gloss: 'to spend (time)' },
            { surface: 'أَيَّاماً', lemma: 'يَوْم', pos: 'noun', features: 'pl.indef.acc', gloss: 'days' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to eat' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَشْرَبُ', lemma: 'شَرِبَ', pos: 'verb', features: 'impf.3ms', gloss: 'to drink' },
          ],
        },
        {
          id: 'qs-v7-c08-030',
          ar: 'وَقَذَفَ الْبَحْرُ جُثَّتَهُ فَأَيْقَنُوا بِمَوْتِهِ.',
          en: 'But the sea cast up his corpse, and so they became certain of his death.',
          tokens: [
            { surface: 'وَقَذَفَ', lemma: 'قَذَفَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ذ ف', gloss: 'to cast, throw up; but cast up' },
            { surface: 'الْبَحْرُ', lemma: 'بَحْر', pos: 'noun', features: 'def.nom', gloss: 'the sea' },
            { surface: 'جُثَّتَهُ', lemma: 'جُثَّة', pos: 'noun', features: 'acc+3ms', root: 'ج ث ث', gloss: 'his corpse' },
            { surface: 'فَأَيْقَنُوا', lemma: 'أَيْقَنَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ي ق ن', gloss: 'to become certain; and so they became certain' },
            { surface: 'بِمَوْتِهِ', lemma: 'مَوْت', pos: 'noun', features: 'prep+gen+3ms', gloss: 'of his death' },
          ],
        },
        {
          id: 'qs-v7-c08-031',
          ar: 'وَقَالَ اللَّهُ تَعَالَى لِفِرْعَوْنَ',
          en: 'And Allah, Exalted is He, said to Pharaoh:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; Exalted is He' },
            { surface: 'لِفِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'prep+gen', gloss: 'to Pharaoh' },
          ],
        },
        {
          id: 'qs-v7-c08-032',
          ar: '﴿فَٱلْيَوْمَ نُنَجِّيكَ بِبَدَنِكَ لِتَكُونَ لِمَنْ خَلْفَكَ ءَايَةً﴾',
          en: '"So today We shall save your body, that you may be a sign for those who come after you."',
          tokens: [
            { surface: 'فَٱلْيَوْمَ', lemma: 'يَوْم', pos: 'noun', features: 'conj+def.acc', gloss: 'so today' },
            { surface: 'نُنَجِّيكَ', lemma: 'نَجَّى', pos: 'verb', features: 'impf.1p+2ms', root: 'ن ج و', gloss: 'to save, rescue; We shall save you' },
            { surface: 'بِبَدَنِكَ', lemma: 'بَدَن', pos: 'noun', features: 'prep+gen+2ms', root: 'ب د ن', gloss: 'with your body' },
            { surface: 'لِتَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'prep+impf.2ms', gloss: 'to be; that you may be' },
            { surface: 'لِمَنْ', lemma: 'مَنْ', pos: 'rel', features: 'prep+rel', gloss: 'for whoever' },
            { surface: 'خَلْفَكَ', lemma: 'خَلْف', pos: 'noun', features: 'acc+2ms', root: 'خ ل ف', gloss: '(comes) after you' },
            { surface: 'ءَايَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
          ],
        },
        {
          id: 'qs-v7-c08-033',
          ar: 'وَكَانَتْ جُثَّةُ فِرْعَوْنَ آيَةً لِلنَّاظِرِينَ وَعِبْرَةً لِلْمُعْتَبِرِينَ.',
          en: "And Pharaoh's corpse became a sign for those who saw it, and a lesson for those who took heed.",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and became' },
            { surface: 'جُثَّةُ', lemma: 'جُثَّة', pos: 'noun', features: 'nom.constr', root: 'ج ث ث', gloss: 'the corpse of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'آيَةً', lemma: 'آيَة', pos: 'noun', features: 'indef.acc', gloss: 'a sign' },
            { surface: 'لِلنَّاظِرِينَ', lemma: 'نَظَرَ', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'for those who see it' },
            { surface: 'وَعِبْرَةً', lemma: 'عِبْرَة', pos: 'noun', features: 'conj+indef.acc', root: 'ع ب ر', gloss: 'and a lesson' },
            { surface: 'لِلْمُعْتَبِرِينَ', lemma: 'اِعْتَبَرَ', pos: 'noun', features: 'prep+pl.def.gen', root: 'ع ب ر', gloss: 'for those who take heed' },
          ],
        },
        {
          id: 'qs-v7-c08-034',
          ar: 'وَغَرِقَ جُنْدُ فِرْعَوْنَ عَنْ آخِرِهِ وَمَا نَجَا مِنْهُمْ أَحَدٌ.',
          en: "And Pharaoh's army drowned to the very last one, and not one of them survived.",
          tokens: [
            { surface: 'وَغَرِقَ', lemma: 'غَرِقَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to drown; and drowned' },
            { surface: 'جُنْدُ', lemma: 'جُنْد', pos: 'noun', features: 'nom.constr', gloss: 'the army of' },
            { surface: 'فِرْعَوْنَ', lemma: 'فِرْعَوْن', pos: 'proper', features: 'gen', gloss: 'Pharaoh' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'آخِرِهِ', lemma: 'آخِر', pos: 'noun', features: 'gen+3ms', root: 'أ خ ر', gloss: 'its last one' },
            { surface: 'وَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَجَا', lemma: 'نَجَا', pos: 'verb', features: 'perf.3ms', gloss: 'to be saved, escape; survived' },
            { surface: 'مِنْهُمْ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'of them' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v7-c08-035',
          ar: 'وَخَلَّفُوا مِصْرَ وَرَاءَهُمْ',
          en: 'They left Egypt behind them,',
          tokens: [
            { surface: 'وَخَلَّفُوا', lemma: 'خَلَّفَ', pos: 'verb', features: 'conj+perf.3mp', root: 'خ ل ف', gloss: 'to leave behind; and left behind' },
            { surface: 'مِصْرَ', lemma: 'مِصْر', pos: 'proper', features: 'acc', gloss: 'Egypt' },
            { surface: 'وَرَاءَهُمْ', lemma: 'وَرَاء', pos: 'noun', features: 'acc+3mp', root: 'و ر ي', gloss: 'behind them' },
          ],
        },
        {
          id: 'qs-v7-c08-036',
          ar: 'وَلَمْ يَجِدُوا فِي أَرْضِهَا الْوَاسِعَةِ ذِرَاعاً لِمَدْفَنٍ.',
          en: 'and did not find, in all its wide land, so much as a single cubit for a grave.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُوا', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to find' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَرْضِهَا', lemma: 'أَرْض', pos: 'noun', features: 'gen+3fs', gloss: 'its land' },
            { surface: 'الْوَاسِعَةِ', lemma: 'وَاسِع', pos: 'adj', features: 'def.gen.f', gloss: 'the wide, spacious' },
            { surface: 'ذِرَاعاً', lemma: 'ذِرَاع', pos: 'noun', features: 'indef.acc', root: 'ذ ر ع', gloss: 'a cubit' },
            { surface: 'لِمَدْفَنٍ', lemma: 'مَدْفَن', pos: 'noun', features: 'prep+indef.gen', root: 'د ف ن', gloss: 'for a grave' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا شَكَّ بَنُو إِسْرَائِيلَ فِي مَوْتِ فِرْعَوْنَ فِي الْبِدَايَةِ؟',
          options: ['لِأَنَّهُمْ كَانُوا يَقُولُونَ إِنَّ فِرْعَوْنَ لَا يَمُوتُ، فَقَدْ رَأَوْهُ يَقْضِي أَيَّاماً بِلَا أَكْلٍ وَلَا شُرْبٍ', 'لِأَنَّهُمْ لَمْ يَرَوْا جُثَّتَهُ أَبَداً', 'لِأَنَّهُمْ كَانُوا يُحِبُّونَهُ'],
          answer: 0,
          qEn: "Why did the Israelites doubt Pharaoh's death at first?",
          optionsEn: ['Because they used to say Pharaoh does not die -- they had seen him go for days without eating or drinking', 'Because they never saw his corpse at all', 'Because they loved him'],
        },
        {
          q: 'مَاذَا حَدَثَ لِجُنْدِ فِرْعَوْنَ، وَمَاذَا وَجَدُوا فِي مِصْرَ بَعْدَ عَوْدَتِهِمْ؟',
          options: ['غَرِقُوا عَنْ آخِرِهِمْ، وَلَمْ يَجِدُوا فِي أَرْضِهَا الْوَاسِعَةِ ذِرَاعاً لِمَدْفَنٍ', 'نَجَا جَمِيعُهُمْ وَعَادُوا سَالِمِينَ', 'وَجَدُوا مَكَاناً وَاسِعاً لِدَفْنِهِمْ'],
          answer: 0,
          qEn: "What happened to Pharaoh's army, and what did they find upon return?",
          optionsEn: ['They all drowned to the last one, and did not find, in all its wide land, so much as a cubit for a grave', 'They all survived and returned safely', 'They found plenty of room to bury their dead'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'الْجَبَّارُ الَّذِي قَتَلَ أُلُوفاً مِنَ الأَطْفَالِ وَالرِّجَالِ ذَبْحاً وَخَنْقاً.',
        en: 'The tyrant died -- who had killed thousands of children and men by slaughter and by strangling.',
        options: ['مَاتَ', 'يَمُوتُ', 'مَاتَتْ', 'مُتْ'],
        answer: 0,
        rationales: [
          'Perfect 3rd masculine singular -- the narrative past tense used throughout this anaphora.',
          'Imperfect -- wrong tense for a completed narrative event.',
          'Perfect 3rd feminine singular -- wrong gender; الجبار is masculine.',
          'Imperative -- wrong mood entirely; this is a statement, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'مَاتَ مَلِكُ مِصْرَ بَعِيداً عَنْ',
        post: 'بَعِيداً عَنْ قَصْرِهِ.',
        en: 'The king of Egypt died, far from his throne, far from his palace.',
        options: ['عَرْشِهِ', 'عَرْشَهُ', 'عَرْشُهُ', 'عَرْشٌ'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition عَنْ, matching the taught pattern.',
          'Accusative -- wrong case; a preposition requires the genitive.',
          'Nominative -- wrong case for the same reason.',
          "Indefinite nominative -- wrong case, and wrong; the throne is his own and needs the possessive suffix.",
        ],
      },
      {
        type: 'cloze',
        pre: 'وَغَرِقَ جُنْدُ فِرْعَوْنَ عَنْ آخِرِهِ وَمَا نَجَا مِنْهُمْ',
        post: '.',
        en: "And Pharaoh's army drowned to the very last one, and not one of them survived.",
        options: ['أَحَدٌ', 'أَحَداً', 'أَحَدٍ', 'الأَحَدُ'],
        answer: 0,
        rationales: [
          'Nominative, indefinite -- subject of the negated verb نَجَا, matching the taught pattern.',
          'Accusative -- wrong case; the subject of a verb takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Definite with ال -- wrong; "anyone" here is indefinite.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'مَاتَ فِرْعَوْنُ فِي الْبَحْرِ غَرَقاً',
        pre: '',
        post: 'فِي الْبَحْرِ غَرَقاً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['مُتُّ', 'مَاتَ', 'مَاتَتْ', 'مُتْنَا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- she.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'مَاتَ فِرْعَوْنُ فِي الْبَحْرِ غَرَقاً',
        pre: '',
        post: 'فِي الْبَحْرِ غَرَقاً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['مَاتَتْ', 'مَاتَ', 'مُتُّ', 'مُتْنَا'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'مَاتَ فِرْعَوْنُ فِي الْبَحْرِ غَرَقاً',
        pre: '',
        post: 'فِي الْبَحْرِ غَرَقاً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['مَاتُوا', 'مَاتَ', 'مَاتَتْ', 'مُتُّ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '3rd feminine singular -- wrong gender.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

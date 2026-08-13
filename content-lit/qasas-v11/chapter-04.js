// قَصَصُ النَّبِيِّينَ, volume 11 «قِصَّةُ سَيِّدِنَا زَكَرِيَّا», chapter 4 --
// عِنَايَةُ اللَّهِ بِالْفَتَاةِ الصَّالِحَةِ. Printed pages 245 (bottom, picking
// up right after ch3's closing) - 247 (top, ending before ch5's heading
// إِلْهَاماً مِنَ الرَّبِّ الرَّحِيمِ). Transcribed by hand from text supplied in
// the task brief (already cross-checked against the canonical Uthmani text
// for the Qur'an portion) against ../CHAPTER-FORMAT.md. No scan re-reading
// needed for this chapter.
//
// One prose paragraph -- Maryam in Zakariyyā's guardianship, honored by
// Allah with out-of-season fruit -- followed by the Qur'anic quotation this
// honors: Āl ʿImrān 3:37 (فَتَقَبَّلَهَا رَبُّهَا ... بِغَيْرِ حِسَابٍ), transcribed
// without the ۖ pause mark or the circled verse number.
//
// Qur'an-fragmentation convention (see qasas-v11/index.js and
// QASAS_AGENT_BRIEF.md §6/§9): the reader's "build a sentence" drill pulls
// any 3-9 token sentence with a visible ending, with no filter separating
// invented prose from real Qur'anic wording. Workaround used here (as in
// every other chapter of this volume): the ayah is split into sentence
// units of AT MOST 2 tokens each (qs-v11-c04-{006..026}), so none of them
// can ever be long enough to be pulled into that drill. The prose clauses
// (qs-v11-c04-{001..005}) are split normally at commas/colon, 3-9 tokens,
// and ARE eligible -- they supply this chapter's 5 required buildable
// sentences (counted below).
//
// Grammar / segmentation notes:
//   -- The brief's own fragment grouping lists `قَالَ يَـٰمَرْيَمُ` as one unit,
//      but يَـٰمَرْيَمُ un-fuses into two tokens per the brief's own
//      instruction (يَا the vocative particle + مَرْيَمُ the name, surfaces
//      'يَـٰ' + 'مَرْيَمُ'). The Mushaf writes the two with no space, but this
//      sentence's `ar` inserts one so that joining tokens[].surface with a
//      space reproduces `ar` exactly, per the token/ar self-check every
//      other sentence in this chapter (and corpus) follows. That makes
//      `قَالَ يَـٰمَرْيَمُ` three tokens, over the 2-token cap,
//      so it is split into two sentences here: qs-v11-c04-016 (قَالَ alone)
//      and -017 (يَـٰ + مَرْيَمُ). Same treatment applies nowhere else in this
//      ayah.
//   -- Qur'anic Uthmani orthography reproduced faithfully in `surface`
//      (ٱلْمِحْرَابَ with wasla, وَأَنۢبَتَهَا with the small-high-seen, هَـٰذَا /
//      أَنَّىٰ / يَـٰمَرْيَمُ with dagger alif); `lemma` normalized to plain
//      orthography throughout (مِحْرَاب، هَذَا، أَنَّى، اللَّه) per
//      CHAPTER-FORMAT.md.
//   -- فَتَقَبَّلَهَا (qs-v11-c04-006) reuses the already-taught تَقَبَّلَ
//      (qasas-v1 ch15) with a trailing 3fs object suffix, tagged
//      perf.3ms+3fs per the documented two-suffix-segment pattern.
//   -- هُوَ (qs-v11-c04-020) is tagged pos:'part' per the qasas-v3 ch10/13
//      precedent for the independent pronoun (format has no dedicated
//      'pron' atom); glossed 'it' here, referring back to رِزْقًا.
//   -- عِندَهَا / عِندِ (qs-v11-c04-014/021) keep the already-taught عِنْدَ as
//      pos:'adv', matching its most common tagging in qasas-v2/v3 (e.g.
//      qasas-v3 ch7's عِنْدَهَا, qasas-v2 ch9's عِنْدِ) over the less common
//      pos:'prep' variant seen once in qasas-v3 ch20.
//   -- مَكَانَتِهَا (qs-v11-c04-001, lemma مَكَانَة, "her standing") is kept
//      distinct from the already-taught مَكَان ("place") that recurs later
//      in the same paragraph (مَكَانِهَا, qs-v11-c04-004) -- different words,
//      same root ك و ن.
//   -- Shared lexicon check (QASAS_AGENT_BRIEF.md §6, grepped directly
//      against content-lit/qasas-v*/chapter-*.js since qasas-v11 ch1-3 did
//      not yet exist as chapter files at the time of writing -- only
//      qasas-v11/index.js was present): كَانَ، فِي، اللَّه، سَيِّد (qasas-v8
//      ch1), زَكَرِيَّا (qasas-v9 ch1), مَكَان (qasas-v2/v9), غَيْر، رِزْق، دَخَلَ،
//      وَجَدَ، عِنْدَ، أَكَلَ، شَاءَ، مِنْ، مَا، قَالَ، يَا، هَذَا، عَلَى، إِنَّ، رَزَقَ، مَن، رَبّ،
//      حِسَاب (qasas-v9 ch3), تَقَبَّلَ (qasas-v1 ch15) are all already taught
//      and NOT re-listed in newWords here. حَسَن was checked carefully: the
//      only prior occurrence of the string anywhere in the corpus
//      (qasas-v3 ch13) is inside a check's free-text option, never an
//      actual tagged token, so it does NOT count as already-taught and IS
//      listed as new below.
//   -- REVIEW-PASS CORRECTIONS: (1) وَهَبَ (تَهَبُ, qs-v11-c04-005) is
//      removed from newWords/lemmas here -- qasas-v11/chapter-02.js
//      (earlier in this volume's reading order) already claims it as new;
//      it simply wasn't present on disk yet when this chapter was first
//      authored. (2) ثَمَر، فَاكِهَة، أَنْبَتَ، نَبَات were originally excluded
//      citing qasas-v5 ch1 -- a volume this project cannot verify or pin
//      the state of, being authored by another, concurrent session. Only
//      qasas-v1/-v2/-v3 are a reliable "already known" baseline here, so
//      all four are put back as new vocabulary, introduced at their first
//      use in this volume. (3) تَعَالَى's token tag is changed from
//      pos:'verb'/features:'perf.3ms' to pos:'adv'/features:'adv',
//      matching the convention qasas-v11/chapter-01.js sets for this same
//      recurring epithet (not re-added to newWords -- ch1 already teaches
//      it).
//
// 15 new words (كَفَالَة، مَكَانَة، رِعَايَة، كَرَّمَ، أَوَان، قَبُول، كَفَّلَ، مِحْرَاب،
// أَنَّى، كُلَّمَا، حَسَن، ثَمَر، فَاكِهَة، أَنْبَتَ، نَبَات). عِنَايَة and فَتَاة from the
// chapter's own title are NOT included -- titles aren't tokenized and
// neither word recurs in the transcribed body text, so they have no
// sentence to anchor a newWords entry to.
//
// Minor uncertainty flagged: root ح ر ب given for مِحْرَاب (classical
// derivation via حَرْب/حَرَبَ, "a place of striving" in prayer) and root
// أ و ن for أَوَان (from آنَ/أَوَان, "the time [for something] came") --
// both traditional but less commonly drilled roots than the rest of this
// chapter's vocabulary; flagging in case a stricter root is preferred.
//
// REVIEW-PASS FIX: the prose here only supplies 5 comma-delimited clauses,
// and one of them (تَأْكُلُ مِنْهَا مَا تَشَاءُ وَتَهَبُ مِنْهَا مَا تَشَاءُ) is built
// entirely from verbs, particles and pronoun-suffixed prepositions -- no
// non-proper word anywhere in it carries a visible case ending, so it can
// never count as "buildable" no matter how it's segmented. That left the
// chapter with only 4 buildable sentences against CHAPTER-FORMAT.md's
// 5-minimum floor. Rather than make a Qur'anic clause buildable to make up
// the difference (defeating the whole point of the fragmentation
// convention), qs-v11-c04-004 (فِي غَيْرِ أَوَانِهَا وَفِي غَيْرِ مَكَانِهَا) was
// split at its internal coordinating وَ into two sentences (004 and 004b),
// each of which independently has a genitive case mark (غَيْرِ...أَوَانِهَا /
// غَيْرِ...مَكَانِهَا) and so is buildable on its own -- bringing the count to
// 5 without touching the Qur'an quotation. Same non-comma-boundary split
// technique qasas-v11/chapter-02.js and chapter-03.js already used
// elsewhere in this volume.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'عِنَايَةُ اللَّهِ بِالْفَتَاةِ الصَّالِحَةِ', en: "Allah's Care for the Righteous Girl" },
  newWords: [
    'كَفَالَة', 'مَكَانَة', 'رِعَايَة', 'كَرَّمَ', 'أَوَان', 'قَبُول', 'كَفَّلَ', 'مِحْرَاب',
    'أَنَّى', 'كُلَّمَا', 'حَسَن', 'ثَمَر', 'فَاكِهَة', 'أَنْبَتَ', 'نَبَات',
  ],
  lemmas: {
    'كَفَالَة': { gloss: 'guardianship, custody' },
    'مَكَانَة': { gloss: 'standing, status' },
    'رِعَايَة': { gloss: 'care, patronage' },
    'كَرَّمَ': { gloss: 'to honor, favor' },
    'أَوَان': { gloss: 'time, season' },
    'قَبُول': { gloss: 'acceptance' },
    'كَفَّلَ': { gloss: 'to place in the care of, appoint as guardian of' },
    'مِحْرَاب': { gloss: 'prayer chamber, sanctuary' },
    'أَنَّى': { gloss: 'how, whence' },
    'كُلَّمَا': { gloss: 'every time, whenever' },
    'حَسَن': { gloss: 'good, goodly, fine' },
    'ثَمَر': { gloss: 'fruit, produce' },
    'فَاكِهَة': { gloss: 'fruit, delicacy' },
    'أَنْبَتَ': { gloss: 'to cause to grow, make sprout' },
    'نَبَات': { gloss: 'growth, plant' },
  },
  paragraphs: [
    {
      en: "She was in the guardianship of our master Zakariyyā, owing to her close standing with him, and in the care of Allah, Most High. Allah would honor her with fruits and delicacies out of season and out of place: she would eat from them what she wished, and give away from them what she wished. As the Qur'an puts it (Āl ʿImrān 3:37): So her Lord accepted her with a good acceptance, and made her grow in a good manner, and placed her in the care of Zakariyyā. Every time Zakariyyā entered the sanctuary upon her, he found provision with her. He said, 'O Maryam, how do you have this?' She said, 'It is from Allah. Indeed, Allah provides for whom He wills without reckoning.'",
      sentences: [
        {
          id: 'qs-v11-c04-001',
          ar: 'وَكَانَتْ فِي كَفَالَةِ سَيِّدِنَا زَكَرِيَّا لِمَكَانَتِهَا مِنْهُ،',
          en: 'She was in the guardianship of our master Zakariyyā, owing to her close standing with him,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كَفَالَةِ', lemma: 'كَفَالَة', pos: 'noun', features: 'constr.gen', root: 'ك ف ل', gloss: 'the guardianship, custody of' },
            { surface: 'سَيِّدِنَا', lemma: 'سَيِّد', pos: 'noun', features: 'gen+1p', root: 'س و د', gloss: 'our master' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'gen', gloss: 'Zakariyyā' },
            { surface: 'لِمَكَانَتِهَا', lemma: 'مَكَانَة', pos: 'noun', features: 'prep+gen+3fs', root: 'ك و ن', gloss: 'because of her standing, position' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from him' },
          ],
        },
        {
          id: 'qs-v11-c04-002',
          ar: 'وَفِي رِعَايَةِ اللَّهِ تَعَالَى،',
          en: 'and in the care of Allah, Most High,',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'رِعَايَةِ', lemma: 'رِعَايَة', pos: 'noun', features: 'constr.gen', root: 'ر ع ي', gloss: 'the care of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'adv', features: 'adv', gloss: 'Exalted is He, Most High' },
          ],
        },
        {
          id: 'qs-v11-c04-003',
          ar: 'فَكَانَ اللَّهُ يُكَرِّمُهَا بِالْأَثْمَارِ وَالْفَوَاكِهِ',
          en: 'Allah would honor her with fruits and delicacies',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; so He used to' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'يُكَرِّمُهَا', lemma: 'كَرَّمَ', pos: 'verb', features: 'impf.3ms+3fs', root: 'ك ر م', gloss: 'to honor, favor; He honors her' },
            { surface: 'بِالْأَثْمَارِ', lemma: 'ثَمَر', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'with the fruits, produce' },
            { surface: 'وَالْفَوَاكِهِ', lemma: 'فَاكِهَة', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and the delicacies, fruits' },
          ],
        },
        {
          id: 'qs-v11-c04-004',
          ar: 'فِي غَيْرِ أَوَانِهَا',
          en: 'out of season',
          tokens: [
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'constr.gen', root: 'غ ي ر', gloss: 'other than' },
            { surface: 'أَوَانِهَا', lemma: 'أَوَان', pos: 'noun', features: 'gen+3fs', root: 'أ و ن', gloss: 'its (proper) time, season' },
          ],
        },
        {
          id: 'qs-v11-c04-004b',
          ar: 'وَفِي غَيْرِ مَكَانِهَا،',
          en: 'and out of place,',
          tokens: [
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'constr.gen', root: 'غ ي ر', gloss: 'other than' },
            { surface: 'مَكَانِهَا', lemma: 'مَكَان', pos: 'noun', features: 'gen+3fs', root: 'ك و ن', gloss: 'its place' },
          ],
        },
        {
          id: 'qs-v11-c04-005',
          ar: 'تَأْكُلُ مِنْهَا مَا تَشَاءُ وَتَهَبُ مِنْهَا مَا تَشَاءُ:',
          en: 'she would eat from them what she wished, and give away from them what she wished:',
          tokens: [
            { surface: 'تَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'impf.3fs', root: 'أ ك ل', gloss: 'to eat; she eats' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from them' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3fs', root: 'ش ي أ', gloss: 'to will, wish; she wishes' },
            { surface: 'وَتَهَبُ', lemma: 'وَهَبَ', pos: 'verb', features: 'conj+impf.3fs', root: 'و ه ب', gloss: 'to give, bestow; and she gives' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from them' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'تَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3fs', root: 'ش ي أ', gloss: 'to will, wish; she wishes' },
          ],
        },
        {
          id: 'qs-v11-c04-006',
          ar: 'فَتَقَبَّلَهَا رَبُّهَا',
          en: 'So her Lord accepted her',
          tokens: [
            { surface: 'فَتَقَبَّلَهَا', lemma: 'تَقَبَّلَ', pos: 'verb', features: 'conj+perf.3ms+3fs', root: 'ق ب ل', gloss: 'to accept; and He accepted her' },
            { surface: 'رَبُّهَا', lemma: 'رَبّ', pos: 'noun', features: 'nom+3fs', gloss: 'her Lord' },
          ],
        },
        {
          id: 'qs-v11-c04-007',
          ar: 'بِقَبُولٍ حَسَنٍ',
          en: 'with a good acceptance',
          tokens: [
            { surface: 'بِقَبُولٍ', lemma: 'قَبُول', pos: 'noun', features: 'prep+indef.gen', root: 'ق ب ل', gloss: 'acceptance' },
            { surface: 'حَسَنٍ', lemma: 'حَسَن', pos: 'adj', features: 'indef.gen', root: 'ح س ن', gloss: 'good, goodly' },
          ],
        },
        {
          id: 'qs-v11-c04-008',
          ar: 'وَأَنۢبَتَهَا',
          en: 'and made her grow',
          tokens: [
            { surface: 'وَأَنۢبَتَهَا', lemma: 'أَنْبَتَ', pos: 'verb', features: 'conj+perf.3ms+3fs', root: 'ن ب ت', gloss: 'to grow, sprout (something); and made her grow' },
          ],
        },
        {
          id: 'qs-v11-c04-009',
          ar: 'نَبَاتًا حَسَنًا',
          en: 'in a good manner',
          tokens: [
            { surface: 'نَبَاتًا', lemma: 'نَبَات', pos: 'noun', features: 'indef.acc', gloss: 'a growth' },
            { surface: 'حَسَنًا', lemma: 'حَسَن', pos: 'adj', features: 'indef.acc', root: 'ح س ن', gloss: 'good, goodly' },
          ],
        },
        {
          id: 'qs-v11-c04-010',
          ar: 'وَكَفَّلَهَا زَكَرِيَّا',
          en: 'and placed her in the care of Zakariyyā',
          tokens: [
            { surface: 'وَكَفَّلَهَا', lemma: 'كَفَّلَ', pos: 'verb', features: 'conj+perf.3ms+3fs', root: 'ك ف ل', gloss: 'to place in the care of; and placed her in the care of' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'nom', gloss: 'Zakariyyā' },
          ],
        },
        {
          id: 'qs-v11-c04-011',
          ar: 'كُلَّمَا دَخَلَ',
          en: 'Every time ... entered',
          tokens: [
            { surface: 'كُلَّمَا', lemma: 'كُلَّمَا', pos: 'conj', features: 'conj', gloss: 'every time, whenever' },
            { surface: 'دَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.3ms', root: 'د خ ل', gloss: 'to enter; entered' },
          ],
        },
        {
          id: 'qs-v11-c04-012',
          ar: 'عَلَيْهَا زَكَرِيَّا',
          en: 'upon her, Zakariyyā,',
          tokens: [
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'upon her' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'nom', gloss: 'Zakariyyā' },
          ],
        },
        {
          id: 'qs-v11-c04-013',
          ar: 'ٱلْمِحْرَابَ',
          en: 'the sanctuary,',
          tokens: [
            { surface: 'ٱلْمِحْرَابَ', lemma: 'مِحْرَاب', pos: 'noun', features: 'def.acc', root: 'ح ر ب', gloss: 'sanctuary, prayer chamber' },
          ],
        },
        {
          id: 'qs-v11-c04-014',
          ar: 'وَجَدَ عِندَهَا',
          en: 'he found with her',
          tokens: [
            { surface: 'وَجَدَ', lemma: 'وَجَدَ', pos: 'verb', features: 'perf.3ms', root: 'و ج د', gloss: 'to find; he found' },
            { surface: 'عِندَهَا', lemma: 'عِنْدَ', pos: 'adv', features: 'adv+3fs', gloss: 'with her' },
          ],
        },
        {
          id: 'qs-v11-c04-015',
          ar: 'رِزْقًا',
          en: 'provision.',
          tokens: [
            { surface: 'رِزْقًا', lemma: 'رِزْق', pos: 'noun', features: 'indef.acc', gloss: 'provision' },
          ],
        },
        {
          id: 'qs-v11-c04-016',
          ar: 'قَالَ',
          en: 'He said,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
          ],
        },
        {
          id: 'qs-v11-c04-017',
          ar: 'يَـٰ مَرْيَمُ',
          en: 'O Maryam,',
          tokens: [
            { surface: 'يَـٰ', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'مَرْيَمُ', lemma: 'مَرْيَم', pos: 'proper', features: 'nom', gloss: 'Maryam' },
          ],
        },
        {
          id: 'qs-v11-c04-018',
          ar: 'أَنَّىٰ لَكِ',
          en: 'how do you have',
          tokens: [
            { surface: 'أَنَّىٰ', lemma: 'أَنَّى', pos: 'adv', features: 'adv', gloss: 'how, whence' },
            { surface: 'لَكِ', lemma: 'لِ', pos: 'prep', features: 'prep+2fs', gloss: 'for you (f.)' },
          ],
        },
        {
          id: 'qs-v11-c04-019',
          ar: 'هَـٰذَا',
          en: 'this?',
          tokens: [
            { surface: 'هَـٰذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
          ],
        },
        {
          id: 'qs-v11-c04-020',
          ar: 'قَالَتْ هُوَ',
          en: 'She said, It is',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', root: 'ق و ل', gloss: 'to say; she said' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'part', features: 'part', gloss: 'it' },
          ],
        },
        {
          id: 'qs-v11-c04-021',
          ar: 'مِنْ عِندِ',
          en: 'from the presence of',
          tokens: [
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِندِ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'the presence of' },
          ],
        },
        {
          id: 'qs-v11-c04-022',
          ar: 'ٱللَّهِ',
          en: 'Allah.',
          tokens: [
            { surface: 'ٱللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v11-c04-023',
          ar: 'إِنَّ ٱللَّهَ',
          en: 'Indeed, Allah',
          tokens: [
            { surface: 'إِنَّ', lemma: 'إِنَّ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ٱللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v11-c04-024',
          ar: 'يَرْزُقُ مَن',
          en: 'provides for whom',
          tokens: [
            { surface: 'يَرْزُقُ', lemma: 'رَزَقَ', pos: 'verb', features: 'impf.3ms', root: 'ر ز ق', gloss: 'to provide; He provides' },
            { surface: 'مَن', lemma: 'مَن', pos: 'rel', features: 'rel', gloss: 'whom' },
          ],
        },
        {
          id: 'qs-v11-c04-025',
          ar: 'يَشَاءُ',
          en: 'He wills,',
          tokens: [
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', root: 'ش ي أ', gloss: 'to will, wish; He wills' },
          ],
        },
        {
          id: 'qs-v11-c04-026',
          ar: 'بِغَيْرِ حِسَابٍ',
          en: 'without reckoning.',
          tokens: [
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+constr.gen', root: 'غ ي ر', gloss: 'without' },
            { surface: 'حِسَابٍ', lemma: 'حِسَاب', pos: 'noun', features: 'indef.gen', gloss: 'reckoning, account' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ كَفَلَ الْفَتَاةَ الصَّالِحَةَ، وَلِمَاذَا؟',
          options: ['كَفَلَهَا سَيِّدُنَا زَكَرِيَّا لِمَكَانَتِهَا مِنْهُ', 'كَفَلَهَا رَجُلٌ غَرِيبٌ لَا تَعْرِفُهُ', 'بَقِيَتْ بِلَا كَفِيلٍ'],
          answer: 0,
          qEn: 'Who took the righteous girl into his care, and why?',
          optionsEn: ['Our master Zakariyyā took her into his care, owing to her close standing with him', 'A stranger she did not know took her into his care', 'She remained without any guardian'],
        },
        {
          q: 'بِمَاذَا كَانَ اللَّهُ يُكَرِّمُ الْفَتَاةَ؟',
          options: ['بِالْأَثْمَارِ وَالْفَوَاكِهِ فِي غَيْرِ أَوَانِهَا وَفِي غَيْرِ مَكَانِهَا', 'بِالْمَالِ وَالذَّهَبِ', 'بِالثِّيَابِ الْجَمِيلَةِ'],
          answer: 0,
          qEn: 'With what did Allah honor the girl?',
          optionsEn: ['With fruits and delicacies out of season and out of place', 'With money and gold', 'With beautiful clothes'],
        },
        {
          q: 'مَاذَا كَانَ يَجِدُ زَكَرِيَّا كُلَّمَا دَخَلَ عَلَيْهَا الْمِحْرَابَ، وَمِنْ أَيْنَ قَالَتْ إِنَّهُ؟',
          options: ['كَانَ يَجِدُ عِنْدَهَا رِزْقًا، وَقَالَتْ إِنَّهُ مِنْ عِنْدِ اللَّهِ', 'كَانَ يَجِدُ كُتُبًا، وَقَالَتْ إِنَّهَا مِنْ عِنْدِ صَدِيقَةٍ', 'كَانَ لَا يَجِدُ شَيْئًا أَبَدًا'],
          answer: 0,
          qEn: 'What did Zakariyyā find every time he entered the sanctuary upon her, and where did she say it was from?',
          optionsEn: ['He found provision with her, and she said it was from Allah', 'He found books, and she said they were from a friend', 'He never found anything at all'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'تَأْكُلُ مِنْهَا مَا تَشَاءُ وَتَهَبُ مِنْهَا مَا',
        post: '',
        en: 'She eats from them what she wishes, and gives away from them what she wishes.',
        options: ['تَشَاءُ', 'أَشَاءُ', 'يَشَاءُ', 'نَشَاءُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches "she", repeating the verb already used for the first half of the pair.',
          '1st singular -- "I wish"; wrong person.',
          '3rd masculine singular -- "he wishes"; wrong gender for the girl.',
          '1st plural -- "we wish"; wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فِي غَيْرِ أَوَانِهَا وَفِي غَيْرِ',
        post: '.',
        en: 'out of season and out of place.',
        options: ['مَكَانِهَا', 'مَكَانُهَا', 'مَكَانَهَا', 'أَمْكِنَتِهَا'],
        answer: 0,
        rationales: [
          'Genitive -- object of the construct غَيْرِ, matching the parallel أَوَانِهَا exactly.',
          'Nominative -- wrong case; a construct with غَيْرِ requires the genitive.',
          'Accusative -- wrong case, for the same reason.',
          'Plural "its places" -- wrong number; the parallel أَوَانِهَا is singular.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تَأْكُلُ مِنْهَا مَا تَشَاءُ',
        pre: '',
        post: 'مِنْهَا مَا تَشَاءُ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['آكُلُ', 'تَأْكُلُ', 'يَأْكُلُ', 'نَأْكُلُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd feminine singular -- she, the form already given.',
          '3rd masculine singular -- he.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'تَأْكُلُ مِنْهَا مَا تَشَاءُ',
        pre: '',
        post: 'مِنْهَا مَا تَشَاءُ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَأْكُلُ', 'تَأْكُلُ', 'آكُلُ', 'نَأْكُلُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '3rd feminine singular -- she, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

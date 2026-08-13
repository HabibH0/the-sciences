// قَصَصُ النَّبِيِّينَ, volume 11 «زَكَرِيَّا», chapter 3 -- قَالَتْ رَبِّ إِنِّي
// وَضَعْتُهَا أُنْثَى. Printed pages 244 (bottom, right after chapter 2's
// closing) - 245 (ending before ch4's heading "٤ ـ عِنَايَةُ"). Transcribed
// from the hand-transcribed source text supplied for this task (already
// cross-checked against the 300dpi scan and the canonical Uthmani Qur'an
// text) against ../CHAPTER-FORMAT.md.
//
// One prose paragraph -- the vow of ch2 meets reality: ʿImrān's wife bears
// a girl, not the son she had vowed, yet Nadwī frames this as its own
// mercy: the girl surpasses many young men in devotion, and God's decree
// for her turns out to be the greater one -- mother of a prophet. The
// paragraph culminates in the genuine Qur'anic quotation the chapter is
// named after (Āl ʿImrān 3:35-36), given here in full Uthmani orthography.
//
// QUR'AN-QUOTE HANDLING (house convention, see QASAS_AGENT_BRIEF.md §6/§9
// and qasas-v11/index.js's header note): the build stage pulls any 3-9
// token sentence with a visible case ending as "buildable" drill material,
// with no filter excluding Qur'anic wording -- and we do not want the app
// quizzing "reassemble this āyah from its words" the way it would quiz
// ordinary narrative prose. Workaround followed here: the whole quotation
// (Āl ʿImrān 3:35-36) is chopped into 26 tiny sentence units of AT MOST 2
// tokens each (qs-v11-c03-012 .. 037), breaking at natural pause points.
// A 2-token cap makes every one of them structurally ineligible for the
// build stage regardless of case-marking. Each fragment still carries its
// own accurate ar/en/tokens so the hover-gloss works word by word; the
// full connected English translation of both verses lives in this
// paragraph's own `en` field below (smooth prose, not fragmented). Per
// the task instructions, the small Qur'anic pause marks (ۖ etc.) and the
// circled verse-number glyphs (﴿٣٥﴾ ﴿٣٦﴾) are not transcribed into any
// `ar` string or tokenized -- noted here instead for provenance: Āl
// ʿImrān 3:35-36.
//
// Judgment calls / things flagged for a second pair of eyes:
//   -- اِمْرَأَة: the task brief's own worked example suggested lemma
//      "امْرَأَة" (bare alif) for the Qur'anic ٱمْرَأَتُ token, but the
//      sibling chapter already in this volume (qasas-v11/chapter-02.js,
//      qs-v11-c02-001) spells this lemma "اِمْرَأَة" (hamza-kasra alif),
//      matching qasas-v2 ch7/ch8's own established spelling. To keep this
//      genuinely-already-known word resolving as "known" rather than as a
//      spurious new lemma, I matched the corpus's established spelling
//      here instead of the brief's literal example string. Likewise
//      "عِمْرَٰنَ" is normalized to lemma "عِمْرَان", matching ch2 exactly.
//   -- أَعْلَمُ (qs-v11-c03-002, "وَاللَّهُ أَعْلَمُ بِمَصْلَحَةِ..."; recurs in the
//      Qur'an quote at 027) is the fixed "Allah knows best" elative idiom,
//      not the 1st-person verb "I know" the corpus already tags under
//      lemma عَلِمَ (qasas-v2 ch22/24, qasas-v3 ch13). Tagged here instead
//      as its own elative adjective lemma أَعْلَم (pos:'adj'), on the same
//      pattern the corpus already uses for other elatives with their own
//      lemma entries (أَكْبَر, أَعْلَى -- qasas-v1 ch7, qasas-v3 ch13).
//   -- Maqṣūra/diptote forms with no visible case ending (أُنْثَى in its
//      several inflections, أَقْوَى, أَعْلَى) are still given an explicit case
//      atom in `features` (their grammatical role), rather than the bare
//      'indecl' qasas-v3 ch19 used for its one occurrence -- more
//      informative for the word card, and doesn't affect build-stage
//      eligibility (that check runs on the surface spelling itself, not
//      on this string). Flagging the deviation from the one existing
//      precedent for consistency review.
//   -- غَشِيَ (qs-v11-c03-004, تَغْشَاهَا "gloom overcomes her") shares its
//      root/lemma spelling only loosely with qiraah-v2 ch59's "غشي" (there
//      glossed "to come often to, visit" -- a frequentative-type sense,
//      lower-case unvowelled lemma per that course's older convention).
//      Different sense, different vowelling convention, and no exact
//      string match, so treated as new here per the task's own pre-check
//      list -- flagging the near-miss rather than asserting confidently.
//   -- The printed text sets "لِحِكْمَةٍ يَعْلَمُهَا" off with em-dashes
//      (ـ ... ـ) as a typographic parenthetical. Simplified to plain
//      running text (dashes dropped, all words kept) in qs-v11-c03-008's
//      `ar`/tokens for a clean sentence unit -- content unaffected.
//   -- The printed clause "فَقَدْ قَدَّرَ اللَّهُ أَنْ تَكُونَ أُمّاً لِنَبِيٍّ صَالِحٍ
//      يَكُونُ لَهُ شَأْنٌ" carries no internal comma but runs 11 tokens, over
//      the 3-9 buildable window -- split at its relative-clause seam into
//      qs-v11-c03-010/011, the same kind of non-comma editorial split the
//      sibling ch2 file already used (and flagged) for its own two
//      over-length clauses.
//   -- The Arabic narrative briefly shifts from perfect to imperfect for
//      vividness at "فَإِذَا هِيَ تَلِدُ... فَتَحْزَنُ... وَتَغْشَاهَا" (qs-v11-c03-
//      003/004) -- translated as an English historical present ("gives
//      birth", "grieves", "overcomes") to preserve that shift rather than
//      flattening it to past tense.
//
// Shared lexicon check (grep across content-lit/*/chapter-*.js): أَرَادَ
// (throughout), أَمْر (qasas-v2 ch2/11), أُنْثَى (qasas-v3 ch19), حَزِنَ
// (qasas-v2 ch4), قَوِيّ (qasas-v1 ch7/8), هِمَّة (qiraah-v2 ch68), طَاعَة
// (qiraah-v2 ch43/44), فَتَى/فِتْيَان (qiraah-v2 ch51), قَدَّرَ ("to decree,
// ordain" -- qiraah-v2 ch56/71), نُبُوَّة (qasas-v2 ch1, qasas-v3 ch12),
// سَمِيع (qasas-v1), أَعْلَى (qasas-v3 ch13), شَيْطَان (qasas-v1 ch11 etc.),
// رَجِيم (qasas-v3 ch3), ذُرِّيَّة (qasas-v3 ch1 etc.), عَلِيم (throughout),
// مَصْلَحَة (qiraah-v1 ch7, qiraah-v2 ch51), عِبَادَة (qasas-v1 ch8/9), أُمّ
// (qasas-v1 ch13), وَضَعَ (qasas-v1 ch3/14, qasas-v2 ch5), لَيْسَ (qasas-v1
// ch12), سَمَّى (qasas-v2 ch11, qasas-v3 ch6), تَقَبَّلَ (qasas-v1 ch15), إِذَا
// (qasas-v1 ch3/9), لَمَّا (qasas-v1 ch7), ذَكَر (qasas-v3 ch19), إِنَّ/أَنَّ
// (qasas-v1 ch2), كُلّ (qasas-v1 ch10/15), بَلْ (qasas-v1 ch5), لَكِنَّ (qasas-
// v1 ch6/14), إِلَّا (qasas-v1 ch10), قَدْ (qasas-v10/11), أَنْ (qasas-v1 ch5),
// عَبْد (qasas-v2 ch9), رَجُل، نَبِيّ، اللَّه، لِ، مِنْ، فِي/فِى، بِ are all
// already taught (or reused per ch2's own precedent) and are NOT
// re-listed in newWords here. نَذَرَ and وَهَبَ are already claimed as new
// in the sibling qasas-v11/chapter-02.js -- also not re-listed, per that
// file's own explicit note that they recur here. اِضْطَلَعَ is new *here*
// (first occurrence in reading order); qasas-v11/chapter-08's title reuses
// it and should not re-teach it.
//
// 8 new words (كَآبَة، وَلِيدَة، غَشِيَ، اِضْطَلَعَ، عِبْء، بَطْن، مُحَرَّر، أَعَاذَ).
// بَطْن is added beyond the task's own pre-vetted candidate list -- it
// surfaces only inside the Qur'an quote (بَطْنِى) but is ordinary,
// previously-untaught vocabulary the learner will want glossed.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'قَالَتْ رَبِّ إِنِّي وَضَعْتُهَا أُنْثَى', en: '"She Said: My Lord, I Have Delivered a Female"' },
  newWords: ['كَآبَة', 'وَلِيدَة', 'غَشِيَ', 'اِضْطَلَعَ', 'عِبْء', 'بَطْن', 'مُحَرَّر', 'أَعَاذَ'],
  lemmas: {
    'كَآبَة': { gloss: 'gloom, dejection' },
    'وَلِيدَة': { gloss: 'newborn girl' },
    'غَشِيَ': { gloss: 'to cover, envelop, overcome' },
    'اِضْطَلَعَ': { gloss: 'to shoulder, undertake (a burden)' },
    'عِبْء': { gloss: 'burden, responsibility (pl. أَعْبَاء)' },
    'بَطْن': { gloss: 'belly, womb' },
    'مُحَرَّر': { gloss: 'dedicated, set free (for religious service)' },
    'أَعَاذَ': { gloss: 'to grant refuge to, protect' },
  },
  paragraphs: [
    {
      en: 'The righteous woman had wanted one thing, and Allah had willed another -- and Allah knows best the welfare of His servants. And behold, she gives birth to a girl, and she grieves over that, and gloom overcomes her. Yet the newborn girl was not like every other female: rather, she was stronger in worship, and possessed of higher resolve in obedience and good deeds than many young men. And when Allah decreed -- for a wisdom that He alone knows -- that she be female, though none but men can shoulder the burdens of prophethood, He had in truth decreed that she become the mother of a righteous prophet who would have a great standing: "[Remember] when the wife of ʿImrān said, ‘My Lord, indeed I have vowed to You what is in my womb, dedicated [to Your service], so accept this from me. Indeed, You are the All-Hearing, the All-Knowing.’ Then when she delivered her, she said, ‘My Lord, I have delivered a female’ -- and Allah knew best what she had delivered, for the male is not like the female -- ‘and I have named her Maryam, and I seek refuge for her and her offspring in You, from Satan, the accursed.’"',
      sentences: [
        {
          id: 'qs-v11-c03-001',
          ar: 'وَأَرَادَتِ الْمَرْأَةُ الصَّالِحَةُ أَمْراً وَأَرَادَ اللَّهُ أَمْراً،',
          en: 'The righteous woman wanted one thing, and Allah wanted another,',
          tokens: [
            { surface: 'وَأَرَادَتِ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ر و د', gloss: 'to want, intend; and wanted' },
            { surface: 'الْمَرْأَةُ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'def.nom', root: 'م ر أ', gloss: 'the woman' },
            { surface: 'الصَّالِحَةُ', lemma: 'صَالِح', pos: 'adj', features: 'def.nom', root: 'ص ل ح', gloss: 'the righteous' },
            { surface: 'أَمْراً', lemma: 'أَمْر', pos: 'noun', features: 'indef.acc', root: 'أ م ر', gloss: 'a matter, thing' },
            { surface: 'وَأَرَادَ', lemma: 'أَرَادَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر و د', gloss: 'to want, intend; and wanted' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَمْراً', lemma: 'أَمْر', pos: 'noun', features: 'indef.acc', root: 'أ م ر', gloss: 'a matter, thing' },
          ],
        },
        {
          id: 'qs-v11-c03-002',
          ar: 'وَاللَّهُ أَعْلَمُ بِمَصْلَحَةِ عِبَادِهِ،',
          en: 'and Allah knows best the welfare of His servants,',
          tokens: [
            { surface: 'وَاللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'conj+nom', gloss: 'and Allah' },
            { surface: 'أَعْلَمُ', lemma: 'أَعْلَم', pos: 'adj', features: 'nom', root: 'ع ل م', gloss: 'most knowing, knows best' },
            { surface: 'بِمَصْلَحَةِ', lemma: 'مَصْلَحَة', pos: 'noun', features: 'prep+constr.gen', root: 'ص ل ح', gloss: 'the welfare, interest of' },
            { surface: 'عِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'pl.gen+3ms', root: 'ع ب د', gloss: 'His servants' },
          ],
        },
        {
          id: 'qs-v11-c03-003',
          ar: 'فَإِذَا هِيَ تَلِدُ أُنْثَى،',
          en: 'and behold, she gives birth to a female,',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and behold' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'she' },
            { surface: 'تَلِدُ', lemma: 'وَلَدَ', pos: 'verb', features: 'impf.3fs', root: 'و ل د', gloss: 'to give birth; gives birth to' },
            { surface: 'أُنْثَى', lemma: 'أُنْثَى', pos: 'noun', features: 'acc', root: 'أ ن ث', gloss: 'a female' },
          ],
        },
        {
          id: 'qs-v11-c03-004',
          ar: 'فَتَحْزَنُ لِذَلِكَ وَتَغْشَاهَا الْكَآبَةُ،',
          en: 'so she grieves over that, and gloom overcomes her,',
          tokens: [
            { surface: 'فَتَحْزَنُ', lemma: 'حَزِنَ', pos: 'verb', features: 'conj+impf.3fs', root: 'ح ز ن', gloss: 'to grieve; so she grieves' },
            { surface: 'لِذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'prep+dem.m', gloss: 'over that' },
            { surface: 'وَتَغْشَاهَا', lemma: 'غَشِيَ', pos: 'verb', features: 'conj+impf.3fs+3fs', root: 'غ ش ي', gloss: 'to cover, overcome; and overcomes her' },
            { surface: 'الْكَآبَةُ', lemma: 'كَآبَة', pos: 'noun', features: 'def.nom', root: 'ك أ ب', gloss: 'the gloom, dejection' },
          ],
        },
        {
          id: 'qs-v11-c03-005',
          ar: 'وَلَكِنَّ الْوَلِيدَةَ لَمْ تَكُنْ كَكُلِّ أُنْثَى،',
          en: 'but the newborn girl was not like every [other] female,',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'الْوَلِيدَةَ', lemma: 'وَلِيدَة', pos: 'noun', features: 'def.acc', root: 'و ل د', gloss: 'the newborn girl' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَكُنْ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'كَكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+constr.gen', root: 'ك ل ل', gloss: 'like every' },
            { surface: 'أُنْثَى', lemma: 'أُنْثَى', pos: 'noun', features: 'gen', root: 'أ ن ث', gloss: '[other] female' },
          ],
        },
        {
          id: 'qs-v11-c03-006',
          ar: 'بَلْ كَانَتْ أَقْوَى عَلَى الْعِبَادَةِ،',
          en: 'rather, she was stronger in worship,',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'أَقْوَى', lemma: 'أَقْوَى', pos: 'adj', features: 'acc', root: 'ق و ي', gloss: 'stronger' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'in, at' },
            { surface: 'الْعِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'def.gen', root: 'ع ب د', gloss: 'worship' },
          ],
        },
        {
          id: 'qs-v11-c03-007',
          ar: 'وَأَعْلَى هِمَّةً فِي الطَّاعَاتِ وَالْخَيْرَاتِ مِنْ كَثِيرٍ مِنَ الْفِتْيَانِ،',
          en: 'and possessed of higher resolve in obedience and good deeds than many young men,',
          tokens: [
            { surface: 'وَأَعْلَى', lemma: 'أَعْلَى', pos: 'adj', features: 'conj+acc', root: 'ع ل و', gloss: 'higher, more elevated' },
            { surface: 'هِمَّةً', lemma: 'هِمَّة', pos: 'noun', features: 'indef.acc', root: 'هـ م م', gloss: 'in resolve, ambition' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الطَّاعَاتِ', lemma: 'طَاعَة', pos: 'noun', features: 'pl.def.gen', root: 'ط و ع', gloss: 'the acts of obedience' },
            { surface: 'وَالْخَيْرَاتِ', lemma: 'خَيْر', pos: 'noun', features: 'conj+pl.def.gen', root: 'خ ي ر', gloss: 'and the good deeds' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'than' },
            { surface: 'كَثِيرٍ', lemma: 'كَثِير', pos: 'noun', features: 'indef.gen', root: 'ك ث ر', gloss: 'many' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, among' },
            { surface: 'الْفِتْيَانِ', lemma: 'فَتَى', pos: 'noun', features: 'pl.def.gen', root: 'ف ت ي', gloss: 'the young men' },
          ],
        },
        {
          id: 'qs-v11-c03-008',
          ar: 'وَإِذَا قَدَّرَ اللَّهُ لِحِكْمَةٍ يَعْلَمُهَا أَنْ تَكُونَ أُنْثَى،',
          en: 'and when Allah decreed -- for a wisdom that He alone knows -- that she be female,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'قَدَّرَ', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ق د ر', gloss: 'to decree, ordain; decreed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لِحِكْمَةٍ', lemma: 'حِكْمَة', pos: 'noun', features: 'prep+indef.gen', root: 'ح ك م', gloss: 'for a wisdom' },
            { surface: 'يَعْلَمُهَا', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.3ms+3fs', root: 'ع ل م', gloss: 'to know; He knows it' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3fs', root: 'ك و ن', gloss: 'to be; she be' },
            { surface: 'أُنْثَى', lemma: 'أُنْثَى', pos: 'noun', features: 'acc', root: 'أ ن ث', gloss: 'female' },
          ],
        },
        {
          id: 'qs-v11-c03-009',
          ar: 'وَالنُّبُوَّةُ لَا يَضْطَلِعُ بِأَعْبَائِهَا إِلَّا الرِّجَالُ،',
          en: 'and prophethood -- none but men can shoulder its burdens --',
          tokens: [
            { surface: 'وَالنُّبُوَّةُ', lemma: 'نُبُوَّة', pos: 'noun', features: 'conj+def.nom', root: 'ن ب أ', gloss: 'and prophethood' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَضْطَلِعُ', lemma: 'اِضْطَلَعَ', pos: 'verb', features: 'impf.3ms', root: 'ض ل ع', gloss: 'to shoulder, undertake; shoulders' },
            { surface: 'بِأَعْبَائِهَا', lemma: 'عِبْء', pos: 'noun', features: 'prep+pl.gen+3fs', root: 'ع ب أ', gloss: 'its burdens' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except, but' },
            { surface: 'الرِّجَالُ', lemma: 'رَجُل', pos: 'noun', features: 'pl.def.nom', root: 'ر ج ل', gloss: 'the men' },
          ],
        },
        {
          id: 'qs-v11-c03-010',
          ar: 'فَقَدْ قَدَّرَ اللَّهُ أَنْ تَكُونَ أُمّاً لِنَبِيٍّ صَالِحٍ',
          en: 'He had in truth decreed that she become the mother of a righteous prophet',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'so indeed' },
            { surface: 'قَدَّرَ', lemma: 'قَدَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ق د ر', gloss: 'to decree, ordain; decreed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَكُونَ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3fs', root: 'ك و ن', gloss: 'to be; she be' },
            { surface: 'أُمّاً', lemma: 'أُمّ', pos: 'noun', features: 'indef.acc', root: 'أ م م', gloss: 'a mother' },
            { surface: 'لِنَبِيٍّ', lemma: 'نَبِيّ', pos: 'noun', features: 'prep+indef.gen', root: 'ن ب أ', gloss: 'of a prophet' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'adj', features: 'indef.gen', root: 'ص ل ح', gloss: 'righteous' },
          ],
        },
        {
          id: 'qs-v11-c03-011',
          ar: 'يَكُونُ لَهُ شَأْنٌ:',
          en: 'who would have a great standing:',
          tokens: [
            { surface: 'يَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'impf.3ms', root: 'ك و ن', gloss: 'to be; would have' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him, he would have' },
            { surface: 'شَأْنٌ', lemma: 'شَأْن', pos: 'noun', features: 'indef.nom', root: 'ش أ ن', gloss: 'a standing, importance' },
          ],
        },
        {
          id: 'qs-v11-c03-012',
          ar: 'إِذْ قَالَتِ',
          en: '[Remember] when ... said,',
          tokens: [
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'when, [remember] when' },
            { surface: 'قَالَتِ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v11-c03-013',
          ar: 'ٱمْرَأَتُ عِمْرَٰنَ',
          en: 'the wife of ʿImrān,',
          tokens: [
            { surface: 'ٱمْرَأَتُ', lemma: 'اِمْرَأَة', pos: 'noun', features: 'nom.constr', root: 'م ر أ', gloss: 'the wife of' },
            { surface: 'عِمْرَٰنَ', lemma: 'عِمْرَان', pos: 'proper', features: 'gen', gloss: 'ʿImrān' },
          ],
        },
        {
          id: 'qs-v11-c03-014',
          ar: 'رَبِّ إِنِّى',
          en: 'My Lord, indeed I',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', root: 'ر ب ب', gloss: 'O my Lord' },
            { surface: 'إِنِّى', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
          ],
        },
        {
          id: 'qs-v11-c03-015',
          ar: 'نَذَرْتُ لَكَ',
          en: 'have vowed to You',
          tokens: [
            { surface: 'نَذَرْتُ', lemma: 'نَذَرَ', pos: 'verb', features: 'perf.1s', root: 'ن ذ ر', gloss: 'to vow; I have vowed' },
            { surface: 'لَكَ', lemma: 'لِ', pos: 'prep', features: 'prep+2ms', gloss: 'to You' },
          ],
        },
        {
          id: 'qs-v11-c03-016',
          ar: 'مَا فِى',
          en: 'what is in',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'فِى', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
          ],
        },
        {
          id: 'qs-v11-c03-017',
          ar: 'بَطْنِى',
          en: 'my womb,',
          tokens: [
            { surface: 'بَطْنِى', lemma: 'بَطْن', pos: 'noun', features: 'gen+1s', root: 'ب ط ن', gloss: 'my belly, my womb' },
          ],
        },
        {
          id: 'qs-v11-c03-018',
          ar: 'مُحَرَّرًا',
          en: 'dedicated [to Your service],',
          tokens: [
            { surface: 'مُحَرَّرًا', lemma: 'مُحَرَّر', pos: 'adj', features: 'indef.acc', root: 'ح ر ر', gloss: 'dedicated, set free (for religious service)' },
          ],
        },
        {
          id: 'qs-v11-c03-019',
          ar: 'فَتَقَبَّلْ مِنِّى',
          en: 'so accept [this] from me.',
          tokens: [
            { surface: 'فَتَقَبَّلْ', lemma: 'تَقَبَّلَ', pos: 'verb', features: 'conj+imp.2ms', root: 'ق ب ل', gloss: 'to accept; so accept' },
            { surface: 'مِنِّى', lemma: 'مِنْ', pos: 'prep', features: 'prep+1s', gloss: 'from me' },
          ],
        },
        {
          id: 'qs-v11-c03-020',
          ar: 'إِنَّكَ أَنتَ',
          en: 'Indeed, You are',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'أَنتَ', lemma: 'أَنْتَ', pos: 'noun', features: '2ms', gloss: 'you' },
          ],
        },
        {
          id: 'qs-v11-c03-021',
          ar: 'ٱلسَّمِيعُ',
          en: 'the All-Hearing,',
          tokens: [
            { surface: 'ٱلسَّمِيعُ', lemma: 'سَمِيع', pos: 'adj', features: 'def.nom', root: 'س م ع', gloss: 'the All-Hearing' },
          ],
        },
        {
          id: 'qs-v11-c03-022',
          ar: 'ٱلْعَلِيمُ',
          en: 'the All-Knowing."',
          tokens: [
            { surface: 'ٱلْعَلِيمُ', lemma: 'عَلِيم', pos: 'adj', features: 'def.nom', root: 'ع ل م', gloss: 'the All-Knowing' },
          ],
        },
        {
          id: 'qs-v11-c03-023',
          ar: 'فَلَمَّا وَضَعَتْهَا',
          en: 'Then when she delivered her,',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'then when' },
            { surface: 'وَضَعَتْهَا', lemma: 'وَضَعَ', pos: 'verb', features: 'perf.3fs+3fs', root: 'و ض ع', gloss: 'to deliver, bear; she delivered her' },
          ],
        },
        {
          id: 'qs-v11-c03-024',
          ar: 'قَالَتْ',
          en: 'she said,',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', root: 'ق و ل', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v11-c03-025',
          ar: 'رَبِّ إِنِّى',
          en: 'My Lord, indeed I',
          tokens: [
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', root: 'ر ب ب', gloss: 'O my Lord' },
            { surface: 'إِنِّى', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
          ],
        },
        {
          id: 'qs-v11-c03-026',
          ar: 'وَضَعْتُهَآ أُنثَىٰ',
          en: 'have delivered her, a female.',
          tokens: [
            { surface: 'وَضَعْتُهَآ', lemma: 'وَضَعَ', pos: 'verb', features: 'perf.1s+3fs', root: 'و ض ع', gloss: 'to deliver, bear; I have delivered her' },
            { surface: 'أُنثَىٰ', lemma: 'أُنْثَى', pos: 'noun', features: 'acc', root: 'أ ن ث', gloss: 'a female' },
          ],
        },
        {
          id: 'qs-v11-c03-027',
          ar: 'وَٱللَّهُ أَعْلَمُ',
          en: 'And Allah knew best',
          tokens: [
            { surface: 'وَٱللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'conj+nom', gloss: 'and Allah' },
            { surface: 'أَعْلَمُ', lemma: 'أَعْلَم', pos: 'adj', features: 'nom', root: 'ع ل م', gloss: 'most knowing, knows best' },
          ],
        },
        {
          id: 'qs-v11-c03-028',
          ar: 'بِمَا وَضَعَتْ',
          en: 'what she had delivered,',
          tokens: [
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'of what' },
            { surface: 'وَضَعَتْ', lemma: 'وَضَعَ', pos: 'verb', features: 'perf.3fs', root: 'و ض ع', gloss: 'to deliver, bear; she delivered' },
          ],
        },
        {
          id: 'qs-v11-c03-029',
          ar: 'وَلَيْسَ ٱلذَّكَرُ',
          en: 'and the male is not',
          tokens: [
            { surface: 'وَلَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'is not; and is not' },
            { surface: 'ٱلذَّكَرُ', lemma: 'ذَكَر', pos: 'noun', features: 'def.nom', root: 'ذ ك ر', gloss: 'the male' },
          ],
        },
        {
          id: 'qs-v11-c03-030',
          ar: 'كَٱلْأُنثَىٰ',
          en: 'like the female.',
          tokens: [
            { surface: 'كَٱلْأُنثَىٰ', lemma: 'أُنْثَى', pos: 'noun', features: 'prep+def.gen', root: 'أ ن ث', gloss: 'like the female' },
          ],
        },
        {
          id: 'qs-v11-c03-031',
          ar: 'وَإِنِّى سَمَّيْتُهَا',
          en: 'And I have named her',
          tokens: [
            { surface: 'وَإِنِّى', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'and indeed I' },
            { surface: 'سَمَّيْتُهَا', lemma: 'سَمَّى', pos: 'verb', features: 'perf.1s+3fs', root: 'س م و', gloss: 'to name; I have named her' },
          ],
        },
        {
          id: 'qs-v11-c03-032',
          ar: 'مَرْيَمَ',
          en: 'Maryam,',
          tokens: [
            { surface: 'مَرْيَمَ', lemma: 'مَرْيَم', pos: 'proper', features: 'acc', gloss: 'Maryam' },
          ],
        },
        {
          id: 'qs-v11-c03-033',
          ar: 'وَإِنِّىٓ أُعِيذُهَا',
          en: 'and I seek refuge for her',
          tokens: [
            { surface: 'وَإِنِّىٓ', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1s', gloss: 'and indeed I' },
            { surface: 'أُعِيذُهَا', lemma: 'أَعَاذَ', pos: 'verb', features: 'impf.1s+3fs', root: 'ع و ذ', gloss: 'to grant refuge to; I seek refuge for her' },
          ],
        },
        {
          id: 'qs-v11-c03-034',
          ar: 'بِكَ',
          en: 'in You,',
          tokens: [
            { surface: 'بِكَ', lemma: 'بِ', pos: 'prep', features: 'prep+2ms', gloss: 'in, by You' },
          ],
        },
        {
          id: 'qs-v11-c03-035',
          ar: 'وَذُرِّيَّتَهَا',
          en: 'and her offspring,',
          tokens: [
            { surface: 'وَذُرِّيَّتَهَا', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'conj+acc+3fs', root: 'ذ ر أ', gloss: 'and her offspring' },
          ],
        },
        {
          id: 'qs-v11-c03-036',
          ar: 'مِنَ ٱلشَّيْطَـٰنِ',
          en: 'from Satan,',
          tokens: [
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'ٱلشَّيْطَـٰنِ', lemma: 'شَيْطَان', pos: 'noun', features: 'def.gen', root: 'ش ط ن', gloss: 'Satan, the devil' },
          ],
        },
        {
          id: 'qs-v11-c03-037',
          ar: 'ٱلرَّجِيمِ',
          en: 'the accursed.',
          tokens: [
            { surface: 'ٱلرَّجِيمِ', lemma: 'رَجِيم', pos: 'adj', features: 'def.gen', root: 'ر ج م', gloss: 'the accursed, cast out' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لَمَّا وَلَدَتِ الْمَرْأَةُ الصَّالِحَةُ؟',
          options: ['وَلَدَتْ أُنْثَى فَحَزِنَتْ لِذَلِكَ', 'وَلَدَتْ ذَكَراً كَمَا أَرَادَتْ', 'لَمْ تَلِدْ شَيْئاً'],
          answer: 0,
          qEn: 'What happened when the righteous woman gave birth?',
          optionsEn: ['She gave birth to a female and grieved over that', 'She gave birth to a boy as she had wanted', 'She did not give birth at all'],
        },
        {
          q: 'بِمَ تَمَيَّزَتِ الْوَلِيدَةُ عَنْ كُلِّ أُنْثَى؟',
          options: ['كَانَتْ أَقْوَى عَلَى الْعِبَادَةِ وَأَعْلَى هِمَّةً مِنْ كَثِيرٍ مِنَ الْفِتْيَانِ', 'كَانَتْ أَضْعَفَ مِنْ كُلِّ أُنْثَى', 'لَمْ يَكُنْ لَهَا أَيُّ مَيْزَةٍ'],
          answer: 0,
          qEn: 'How was the newborn girl distinguished from every [other] female?',
          optionsEn: ['She was stronger in worship and had higher resolve in obedience and good deeds than many young men', 'She was weaker than every other female', 'She had no distinction at all'],
        },
        {
          q: 'لِمَاذَا قَدَّرَ اللَّهُ أَنْ تَكُونَ أُنْثَى مَعَ أَنَّ النُّبُوَّةَ لَا يَضْطَلِعُ بِأَعْبَائِهَا إِلَّا الرِّجَالُ؟',
          options: ['لِأَنَّهُ قَدَّرَ أَنْ تَكُونَ أُمّاً لِنَبِيٍّ صَالِحٍ يَكُونُ لَهُ شَأْنٌ', 'لِأَنَّ اللَّهَ نَسِيَ وَعْدَهُ', 'لِأَنَّ الْمَرْأَةَ طَلَبَتْ ذَلِكَ'],
          answer: 0,
          qEn: 'Why did Allah decree that she be female, even though only men can shoulder the burdens of prophethood?',
          optionsEn: ['Because He decreed that she become the mother of a righteous prophet who would have a great standing', 'Because Allah forgot His promise', 'Because the woman requested it'],
        },
        {
          q: 'بِمَاذَا سَمَّتِ امْرَأَةُ عِمْرَانَ ابْنَتَهَا، وَمِمَّنْ أَعَاذَتْهَا وَذُرِّيَّتَهَا؟',
          options: ['سَمَّتْهَا مَرْيَمَ وَأَعَاذَتْهَا وَذُرِّيَّتَهَا مِنَ الشَّيْطَانِ الرَّجِيمِ', 'سَمَّتْهَا زَيْنَبَ وَلَمْ تَدْعُ لَهَا بِشَيْءٍ', 'لَمْ تُسَمِّهَا وَتَرَكَتِ الاِسْمَ لِزَوْجِهَا'],
          answer: 0,
          qEn: "What did ʿImrān's wife name her daughter, and from whom did she seek refuge for her and her offspring?",
          optionsEn: ['She named her Maryam and sought refuge for her and her offspring from Satan, the accursed', 'She named her Zaynab and made no prayer for her at all', 'She did not name her and left the naming to her husband'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَأَرَادَتِ الْمَرْأَةُ الصَّالِحَةُ أَمْراً وَ',
        post: 'اللَّهُ أَمْراً،',
        en: 'The righteous woman wanted one thing, and Allah wanted another,',
        options: ['أَرَادَ', 'أَرَادَتْ', 'يُرِيدُ', 'أَرَدْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches اللَّهُ (masculine) as the second subject in this parallel construction.',
          '3rd feminine singular perfect -- wrong gender; اللَّهُ takes a masculine verb.',
          '3rd masculine singular imperfect -- wrong tense; the narrative here is in the perfect.',
          '1st plural perfect -- wrong person; the subject is اللَّهُ, not "we".',
        ],
      },
      {
        type: 'cloze',
        pre: 'بَلْ كَانَتْ',
        post: 'عَلَى الْعِبَادَةِ،',
        en: 'rather, she was stronger in worship,',
        options: ['أَقْوَى', 'قَوِيَّةً', 'أَقْوِيَاءَ', 'قَوِيٌّ'],
        answer: 0,
        rationales: [
          'Elative "stronger" -- the comparative predicate of كَانَتْ, matching the taught pattern (بَلْ كَانَتْ أَقْوَى).',
          'Plain adjective "strong" (f.) -- grammatically possible but not the elative sense the passage uses to rank her above others.',
          'Plural "strong (pl.)" -- wrong number.',
          'Plain adjective "strong" (m.) -- wrong gender, and not the elative form used here.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَقَدْ قَدَّرَ اللَّهُ أَنْ',
        post: 'أُمّاً لِنَبِيٍّ صَالِحٍ',
        en: 'He had in truth decreed that she become the mother of a righteous prophet',
        options: ['تَكُونَ', 'كَانَتْ', 'يَكُونُ', 'تَكُونِينَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular after أَنْ -- matches the taught pattern (أَنْ تَكُونَ).',
          '"she was" (perfect) -- wrong mood; أَنْ requires the following imperfect form.',
          '3rd masculine singular -- wrong gender; the subject (she) is feminine.',
          '2nd feminine singular "you (f.) are" -- wrong person; the subject is "she", not "you".',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'أَرَادَتِ الْمَرْأَةُ أَمْراً',
        pre: '',
        post: 'الْمَرْأَةُ أَمْراً',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['أَرَادَ', 'أَرَادَتْ', 'أَرَدْتُ', 'أَرَادُوا'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '3rd feminine singular -- she, the form already given.',
          '1st singular -- I.',
          '3rd masculine plural -- they (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'أَرَادَتِ الْمَرْأَةُ أَمْراً',
        pre: '',
        post: 'الْمَرْأَةُ أَمْراً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَرَدْتُ', 'أَرَادَتْ', 'أَرَادَ', 'أَرَادُوا'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd feminine singular -- she, the form already given.',
          '3rd masculine singular -- he.',
          '3rd masculine plural -- they (m.).',
        ],
      },
      {
        type: 'shift',
        base: 'أَرَادَتِ الْمَرْأَةُ أَمْراً',
        pre: '',
        post: 'الْمَرْأَةُ أَمْراً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['أَرَادُوا', 'أَرَادَتْ', 'أَرَادَ', 'أَرَدْتُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd feminine singular -- she, the form already given.',
          '3rd masculine singular -- he.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

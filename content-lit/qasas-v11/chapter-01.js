// قَصَصُ النَّبِيِّينَ, volume 11 «زَكَرِيَّا», chapter 1 -- دُعَاءُ زَكَرِيَّا
// لِوَلَدٍ صَالِحٍ. Printed pages 243 (from the volume-title page, after the
// basmala/title graphic) - 244 (top, ending right before ch2's heading
// ٢ ـ نَذْرُ). Transcribed by hand from the scan (vision OCR, 300dpi render)
// against ../CHAPTER-FORMAT.md. Hand-transcribed source text supplied
// directly (already cross-checked); no re-read of the scan was needed.
//
// The whole chapter is one long periodic sentence -- classical literary
// framing, not narrative prose -- so it is all one paragraph, split at
// every printed ، and . per CHAPTER-FORMAT.md's clause rule. That produces
// three single-word clauses (رَضِيٍّ، تَقِيٍّ، بَرٍّ -- an asyndetic list of
// adjectives describing the hoped-for son) that are each their own sentence
// entry; this is correct, not a segmentation error. No Qur'anic quotation
// on these pages.
//
// Grammar / lexical notes:
//   -- تَعَالَى (qs-v11-c01-012), the epithet after اللَّه ("Exalted is He"),
//      is tagged pos:'adv', features:'adv' per the brief for this chapter.
//   -- خُصَّ (qs-v11-c01-018) is passive -- tagged 'conj+pass+perf.3ms'
//      (pass ordered before perf), matching the precedent already
//      established for قِيلَ in qasas-v3/chapter-01.js's header note, over
//      CHAPTER-FORMAT.md's own illustrative 'conj+perf.pass.3ms' ordering.
//   -- بَرٍّ (qs-v11-c01-005, "dutiful") reuses the lemma بَرّ, which is
//      already taught -- but only in the unrelated sense "the (dry) land"
//      (qasas-v2 ch9/11, qasas-v3 ch22). Classical بَرّ is genuinely two
//      words under one spelling (land / dutiful-and-devoted); tagged here
//      as pos:'adj' with its own contextual gloss, not added to newWords
//      since the spelling itself is already known to the app's tracker.
//      Flagging this collision plainly since it's the kind of thing a
//      reviewer should double-check. بِرِّ (qs-v11-c01-018, "dutifulness",
//      kasra not fatha) is a different lemma spelling and IS new.
//   -- حِينَ (qs-v11-c01-008) is tagged pos:'noun', features:'acc' -- a
//      ظرف زمان (accusative time-noun) rather than a true particle, which
//      also gives that clause a visible non-proper case ending.
//   -- Construct (إضافة) feature strings in this file consistently order
//      case before the constr atom (e.g. gen.constr, pl.gen.constr),
//      following CHAPTER-FORMAT.md's own canonical example ("gen.constr")
//      rather than the reversed constr.gen ordering some earlier chapters
//      use (e.g. qasas-v3 ch1's ذُرِّيَّةِ). One exception: آلَاءِ
//      (qs-v11-c01-001) keeps the exact 'constr.gen' tagging already used
//      for this same word in qasas-v9/chapter-01.js, for consistency with
//      that specific precedent. Ordering has no functional effect per the
//      format doc (unrecognised/reordered atoms just degrade gracefully).
//   -- Shared lexicon check: اللَّه، عَلَى، مِنْ، فِي، شَيْء، الَّتِي، إِلَى، ذَلِكَ،
//      أَنْ، أَنَّ، مَا، مَنْ، كُلّ، غَيْر، يَد، حَيّ، دُعَاء (v2 ch25)، دَعْوَة
//      (v3 ch18)، آل، يَعْقُوب، زَكَرِيَّا (v9 ch1)، وَلَد، زَوْج، رَجَاء، صَالِح،
//      قَدِيم، وَاسِع، جِسْم (v4 ch1)، عَبْد، آيَة، قَلْب، حِكْمَة، عِلْم، نَاس،
//      قَامَ، رَزَقَ، شَاءَ، خَلَقَ، فَعَلَ، أَخْرَجَ، وَالِد are all already taught
//      and are NOT re-listed in newWords here.
//   -- REVIEW-PASS CORRECTION: three words the sibling chapters' agents
//      excluded from newWords by citing qasas-v4/-v5/-v9 as "already
//      taught" are put BACK here. Those volumes are being authored by
//      other, concurrent sessions this project has no way to verify or
//      pin the state of from within this task -- only qasas-v1/-v2/-v3
//      (and qiraah-v1/-v2) were complete and stable before this volume was
//      started, so only those count as a reliable "already known" baseline.
//      Re-added: آلَاءِ (previously excluded citing qasas-v9 ch1), وَرِثَ
//      (previously excluded citing qasas-v5/v9), جِسْم (qs-v11-c01-023,
//      previously excluded citing qasas-v4 ch1 -- also fixes a cross-
//      chapter inconsistency: qasas-v11/chapter-07.js uses جِسْم too and
//      correctly treats it as new, so it needs to be taught somewhere
//      first -- here, its first occurrence in this volume's reading
//      order). اِنْقَطَعَ and صِغَر remain excluded since qasas-v3 (ch10/ch12
//      respectively) is a genuinely stable v1-3 source.
//
// 46 new words (لَوْن، تَجَلَّى، رَضِيّ، تَقِيّ، حِين، تَقَدَّمَ، سِنّ، وَهَنَ، عَظْم،
// لَجَّ، شَيْب، وَلَدَ، كَذَّبَ، ظَنّ، أَبْطَلَ، تَجْرِبَة، رَاشِد، بَكَّرَ، نُبُوغ، حِلْم،
// كِتَاب، خَصَّ، حَنَان، صَلَاح، تَقْوَى، بِرّ، رِقَّة، لِين، كَنَف، خَفْض، جَنَاح، رَبَطَ،
// تَصَرُّف، عُضْو، حَرَّكَ، عَطَّلَ، تَحَقَّقَ، كَوْن، مَيِّت، حِسَاب، قُدْرَة، تَعَالَى، أَرَى،
// آلَاء، وَرِثَ، جِسْم).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'دُعَاءُ زَكَرِيَّا لِوَلَدٍ صَالِحٍ', en: "Zakariyyā's Prayer for a Righteous Child" },
  newWords: [
    'لَوْن', 'تَجَلَّى', 'رَضِيّ', 'تَقِيّ', 'حِين', 'تَقَدَّمَ', 'سِنّ', 'وَهَنَ', 'عَظْم',
    'لَجَّ', 'شَيْب', 'وَلَدَ', 'كَذَّبَ', 'ظَنّ', 'أَبْطَلَ', 'تَجْرِبَة', 'رَاشِد', 'بَكَّرَ',
    'نُبُوغ', 'حِلْم', 'كِتَاب', 'خَصَّ', 'حَنَان', 'صَلَاح', 'تَقْوَى', 'بِرّ', 'رِقَّة', 'لِين',
    'كَنَف', 'خَفْض', 'جَنَاح', 'رَبَطَ', 'تَصَرُّف', 'عُضْو', 'حَرَّكَ', 'عَطَّلَ', 'تَحَقَّقَ',
    'كَوْن', 'مَيِّت', 'حِسَاب', 'قُدْرَة', 'تَعَالَى', 'أَرَى', 'آلَاء', 'وَرِثَ', 'جِسْم',
  ],
  lemmas: {
    'لَوْن': { gloss: 'kind, type' },
    'تَجَلَّى': { gloss: 'to be manifested, revealed' },
    'رَضِيّ': { gloss: 'content, well-pleasing' },
    'تَقِيّ': { gloss: 'God-fearing, pious' },
    'حِين': { gloss: 'when, at the time (that)' },
    'تَقَدَّمَ': { gloss: 'to advance, grow old' },
    'سِنّ': { gloss: 'age' },
    'وَهَنَ': { gloss: 'to grow weak' },
    'عَظْم': { gloss: 'bone' },
    'لَجَّ': { gloss: 'to persist, take firm hold' },
    'شَيْب': { gloss: 'gray hair, old age' },
    'وَلَدَ': { gloss: 'to give birth' },
    'كَذَّبَ': { gloss: 'to give the lie to, disprove' },
    'ظَنّ': { gloss: 'supposition, assumption' },
    'أَبْطَلَ': { gloss: 'to nullify, invalidate' },
    'تَجْرِبَة': { gloss: 'experience, trial, precedent' },
    'رَاشِد': { gloss: 'rightly-guided, mature' },
    'بَكَّرَ': { gloss: 'to come early' },
    'نُبُوغ': { gloss: 'brilliance, genius' },
    'حِلْم': { gloss: 'forbearance, clemency' },
    'كِتَاب': { gloss: 'book, scripture' },
    'خَصَّ': { gloss: 'to single out, distinguish' },
    'حَنَان': { gloss: 'tenderness, compassion' },
    'صَلَاح': { gloss: 'righteousness' },
    'تَقْوَى': { gloss: 'piety, godfearingness' },
    'بِرّ': { gloss: 'dutifulness, piety' },
    'رِقَّة': { gloss: 'gentleness, tenderness' },
    'لِين': { gloss: 'softness, gentle disposition' },
    'كَنَف': { gloss: 'side, shelter, protection' },
    'خَفْض': { gloss: 'lowering' },
    'جَنَاح': { gloss: 'wing' },
    'رَبَطَ': { gloss: 'to bind, strengthen' },
    'تَصَرُّف': { gloss: 'control, management, disposal' },
    'عُضْو': { gloss: 'organ, limb, member' },
    'حَرَّكَ': { gloss: 'to move, set in motion' },
    'عَطَّلَ': { gloss: 'to disable, deactivate' },
    'تَحَقَّقَ': { gloss: 'to become confirmed, be realized' },
    'كَوْن': { gloss: 'universe, existence' },
    'مَيِّت': { gloss: 'dead, deceased' },
    'حِسَاب': { gloss: 'account, reckoning' },
    'قُدْرَة': { gloss: 'power, ability' },
    'تَعَالَى': { gloss: 'Exalted is He, Most High' },
    'أَرَى': { gloss: 'to show, cause to see' },
    'آلَاء': { gloss: 'blessings, bounties, favors' },
    'وَرِثَ': { gloss: 'to inherit' },
    'جِسْم': { gloss: 'body' },
  },
  paragraphs: [
    {
      en: "Yet another kind of Allah's bounties upon His servants, and of the signs of His power that have encompassed all things, was made manifest in Zakariyyā's prayer for a righteous child -- content, God-fearing, dutiful -- who would inherit from him and inherit from the family of Yaʿqūb, and take up the call to Allah. That was when his age had advanced, his bones had grown weak, his hair had gone entirely gray, and all hope that his wife would bear him a child had been cut off. So Allah, Exalted is He, answered his prayer, disproved the assumptions of the people, and nullified the lessons of past experience: He granted him a rightly-guided son, in whom brilliance, wisdom, forbearance, knowledge, and scripture all came early -- in his very childhood -- and who was singled out for tenderness, righteousness, piety, dutifulness to his parents, gentleness, a gentle disposition, and humility. Allah steadied Zakariyyā's heart, and showed him signs pointing to His vast power -- that He does what He wills and creates what He wills -- and showed him His control over His creation and over the very organs of his own body, moving what He wills and disabling what He wills; and it became certain to him that the whole universe lies in His hand: He brings forth the living from the dead, and the dead from the living, and provides for whom He wills without reckoning.",
      sentences: [
        {
          id: 'qs-v11-c01-001',
          ar: 'وَلَوْنٌ آخَرُ مِنْ آلَاءِ اللَّهِ عَلَى عِبَادِهِ وَآيَاتِ قُدْرَتِهِ الَّتِي أَحَاطَتْ بِكُلِّ شَيْءٍ،',
          en: "Yet another kind of Allah's bounties upon His servants, and of the signs of His power that have encompassed all things,",
          tokens: [
            { surface: 'وَلَوْنٌ', lemma: 'لَوْن', pos: 'noun', features: 'conj+indef.nom', root: 'ل و ن', gloss: 'and a kind, type' },
            { surface: 'آخَرُ', lemma: 'آخَر', pos: 'adj', features: 'indef.nom', gloss: 'other, another' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, of' },
            { surface: 'آلَاءِ', lemma: 'آلَاء', pos: 'noun', features: 'constr.gen', root: 'أ ل و', gloss: 'the bounties of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'عِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'pl.gen+3ms', root: 'ع ب د', gloss: 'His servants' },
            { surface: 'وَآيَاتِ', lemma: 'آيَة', pos: 'noun', features: 'conj+pl.gen.constr', root: 'أ ي ي', gloss: 'and the signs of' },
            { surface: 'قُدْرَتِهِ', lemma: 'قُدْرَة', pos: 'noun', features: 'gen+3ms', root: 'ق د ر', gloss: 'His power' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'أَحَاطَتْ', lemma: 'أَحَاطَ', pos: 'verb', features: 'perf.3fs', root: 'ح و ط', gloss: 'to encompass; encompassed' },
            { surface: 'بِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+gen.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v11-c01-002',
          ar: 'تَجَلَّى فِي دُعَاءِ زَكَرِيَّا لِوَلَدٍ صَالِحٍ،',
          en: "was made manifest in Zakariyyā's prayer for a righteous child --",
          tokens: [
            { surface: 'تَجَلَّى', lemma: 'تَجَلَّى', pos: 'verb', features: 'perf.3ms', root: 'ج ل و', gloss: 'to be manifested, revealed; was manifested' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'دُعَاءِ', lemma: 'دُعَاء', pos: 'noun', features: 'gen.constr', root: 'د ع و', gloss: 'the prayer of' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'gen', gloss: 'Zakariyyā' },
            { surface: 'لِوَلَدٍ', lemma: 'وَلَد', pos: 'noun', features: 'prep+indef.gen', gloss: 'for a child' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'adj', features: 'indef.gen', root: 'ص ل ح', gloss: 'righteous' },
          ],
        },
        {
          id: 'qs-v11-c01-003',
          ar: 'رَضِيٍّ،',
          en: 'content,',
          tokens: [
            { surface: 'رَضِيٍّ', lemma: 'رَضِيّ', pos: 'adj', features: 'indef.gen', root: 'ر ض و', gloss: 'content, well-pleasing' },
          ],
        },
        {
          id: 'qs-v11-c01-004',
          ar: 'تَقِيٍّ،',
          en: 'God-fearing,',
          tokens: [
            { surface: 'تَقِيٍّ', lemma: 'تَقِيّ', pos: 'adj', features: 'indef.gen', root: 'و ق ي', gloss: 'God-fearing, pious' },
          ],
        },
        {
          id: 'qs-v11-c01-005',
          ar: 'بَرٍّ،',
          en: 'dutiful --',
          tokens: [
            { surface: 'بَرٍّ', lemma: 'بَرّ', pos: 'adj', features: 'indef.gen', root: 'ب ر ر', gloss: 'dutiful, devoted (to his parents)' },
          ],
        },
        {
          id: 'qs-v11-c01-006',
          ar: 'يَرِثُهُ وَيَرِثُ مِنْ آلِ يَعْقُوبَ،',
          en: 'who would inherit from him and inherit from the family of Yaʿqūb,',
          tokens: [
            { surface: 'يَرِثُهُ', lemma: 'وَرِثَ', pos: 'verb', features: 'impf.3ms+3ms', root: 'و ر ث', gloss: 'to inherit; he would inherit him' },
            { surface: 'وَيَرِثُ', lemma: 'وَرِثَ', pos: 'verb', features: 'conj+impf.3ms', root: 'و ر ث', gloss: 'to inherit; and inherit' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آلِ', lemma: 'آل', pos: 'noun', features: 'gen.constr', root: 'أ و ل', gloss: 'the family of' },
            { surface: 'يَعْقُوبَ', lemma: 'يَعْقُوب', pos: 'proper', features: 'gen', gloss: 'Yaʿqūb' },
          ],
        },
        {
          id: 'qs-v11-c01-007',
          ar: 'وَيَقُومُ بِالدَّعْوَةِ إِلَى اللَّهِ،',
          en: 'and take up the call to Allah.',
          tokens: [
            { surface: 'وَيَقُومُ', lemma: 'قَامَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ق و م', gloss: 'to rise, undertake; and undertake' },
            { surface: 'بِالدَّعْوَةِ', lemma: 'دَعْوَة', pos: 'noun', features: 'prep+def.gen', root: 'د ع و', gloss: 'the call, invitation' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v11-c01-008',
          ar: 'وَذَلِكَ حِينَ تَقَدَّمَتْ بِهِ السِّنُّ،',
          en: 'That was when his age had advanced upon him,',
          tokens: [
            { surface: 'وَذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'conj+dem.m', gloss: 'and that' },
            { surface: 'حِينَ', lemma: 'حِين', pos: 'noun', features: 'acc', root: 'ح ي ن', gloss: 'when, at the time' },
            { surface: 'تَقَدَّمَتْ', lemma: 'تَقَدَّمَ', pos: 'verb', features: 'perf.3fs', root: 'ق د م', gloss: 'to advance; advanced' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'السِّنُّ', lemma: 'سِنّ', pos: 'noun', features: 'def.nom', root: 'س ن ن', gloss: 'the age' },
          ],
        },
        {
          id: 'qs-v11-c01-009',
          ar: 'وَوَهَنَ مِنْهُ الْعَظْمُ،',
          en: 'his bones had grown weak,',
          tokens: [
            { surface: 'وَوَهَنَ', lemma: 'وَهَنَ', pos: 'verb', features: 'conj+perf.3ms', root: 'و ه ن', gloss: 'to grow weak; and grew weak' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'of him' },
            { surface: 'الْعَظْمُ', lemma: 'عَظْم', pos: 'noun', features: 'def.nom', root: 'ع ظ م', gloss: 'the bone' },
          ],
        },
        {
          id: 'qs-v11-c01-010',
          ar: 'وَلَجَّ بِهِ الشَّيْبُ،',
          en: 'his gray hair had taken firm hold,',
          tokens: [
            { surface: 'وَلَجَّ', lemma: 'لَجَّ', pos: 'verb', features: 'conj+perf.3ms', root: 'ل ج ج', gloss: 'to persist, take firm hold; and took firm hold' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'الشَّيْبُ', lemma: 'شَيْب', pos: 'noun', features: 'def.nom', root: 'ش ي ب', gloss: 'the gray hair, old age' },
          ],
        },
        {
          id: 'qs-v11-c01-011',
          ar: 'وَانْقَطَعَ الرَّجَاءُ مِنْ أَنْ تَلِدَ زَوْجُهُ،',
          en: 'and all hope that his wife would bear him a child had been cut off.',
          tokens: [
            { surface: 'وَانْقَطَعَ', lemma: 'اِنْقَطَعَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ق ط ع', gloss: 'to be cut off; and was cut off' },
            { surface: 'الرَّجَاءُ', lemma: 'رَجَاء', pos: 'noun', features: 'def.nom', root: 'ر ج و', gloss: 'the hope' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, that' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'تَلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'impf.3fs', root: 'و ل د', gloss: 'to give birth; she would give birth' },
            { surface: 'زَوْجُهُ', lemma: 'زَوْج', pos: 'noun', features: 'nom+3ms', root: 'ز و ج', gloss: 'his wife' },
          ],
        },
        {
          id: 'qs-v11-c01-012',
          ar: 'فَأَجَابَ اللَّهُ تَعَالَى دُعَاءَهُ وَكَذَّبَ ظُنُونَ النَّاسِ،',
          en: 'So Allah, Exalted is He, answered his prayer, disproved the assumptions of the people,',
          tokens: [
            { surface: 'فَأَجَابَ', lemma: 'أَجَابَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ج و ب', gloss: 'to answer, respond; so answered' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'adv', features: 'adv', root: 'ع ل و', gloss: 'Exalted is He, Most High' },
            { surface: 'دُعَاءَهُ', lemma: 'دُعَاء', pos: 'noun', features: 'acc+3ms', root: 'د ع و', gloss: 'his prayer' },
            { surface: 'وَكَذَّبَ', lemma: 'كَذَّبَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك ذ ب', gloss: 'to give the lie to; and gave the lie to' },
            { surface: 'ظُنُونَ', lemma: 'ظَنّ', pos: 'noun', features: 'pl.acc.constr', root: 'ظ ن ن', gloss: 'the assumptions of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v11-c01-013',
          ar: 'وَأَبْطَلَ التَّجَارِبَ الْقَدِيمَةَ،',
          en: 'and nullified the lessons of past experience:',
          tokens: [
            { surface: 'وَأَبْطَلَ', lemma: 'أَبْطَلَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ب ط ل', gloss: 'to nullify, invalidate; and nullified' },
            { surface: 'التَّجَارِبَ', lemma: 'تَجْرِبَة', pos: 'noun', features: 'pl.def.acc', root: 'ج ر ب', gloss: 'the experiences, precedents' },
            { surface: 'الْقَدِيمَةَ', lemma: 'قَدِيم', pos: 'adj', features: 'def.acc.f', gloss: 'old' },
          ],
        },
        {
          id: 'qs-v11-c01-014',
          ar: 'فَرَزَقَهُ وَلَداً رَاشِداً،',
          en: 'He granted him a rightly-guided son,',
          tokens: [
            { surface: 'فَرَزَقَهُ', lemma: 'رَزَقَ', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ر ز ق', gloss: 'to provide, grant; and granted him' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', gloss: 'a son' },
            { surface: 'رَاشِداً', lemma: 'رَاشِد', pos: 'adj', features: 'indef.acc', root: 'ر ش د', gloss: 'rightly-guided, mature' },
          ],
        },
        {
          id: 'qs-v11-c01-015',
          ar: 'بَكَّرَ بِهِ النُّبُوغُ وَالْحِكْمَةُ،',
          en: 'in whom brilliance and wisdom came early,',
          tokens: [
            { surface: 'بَكَّرَ', lemma: 'بَكَّرَ', pos: 'verb', features: 'perf.3ms', root: 'ب ك ر', gloss: 'to come early; came early' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'النُّبُوغُ', lemma: 'نُبُوغ', pos: 'noun', features: 'def.nom', root: 'ن ب غ', gloss: 'the brilliance, genius' },
            { surface: 'وَالْحِكْمَةُ', lemma: 'حِكْمَة', pos: 'noun', features: 'conj+def.nom', gloss: 'and the wisdom' },
          ],
        },
        {
          id: 'qs-v11-c01-016',
          ar: 'وَالْحِلْمُ وَالْعِلْمُ،',
          en: 'forbearance and knowledge,',
          tokens: [
            { surface: 'وَالْحِلْمُ', lemma: 'حِلْم', pos: 'noun', features: 'conj+def.nom', root: 'ح ل م', gloss: 'and the forbearance, clemency' },
            { surface: 'وَالْعِلْمُ', lemma: 'عِلْم', pos: 'noun', features: 'conj+def.nom', gloss: 'and the knowledge' },
          ],
        },
        {
          id: 'qs-v11-c01-017',
          ar: 'وَالْكِتَابُ فِي الصِّغَرِ،',
          en: 'and scripture -- in his very childhood --',
          tokens: [
            { surface: 'وَالْكِتَابُ', lemma: 'كِتَاب', pos: 'noun', features: 'conj+def.nom', root: 'ك ت ب', gloss: 'and the book, scripture' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الصِّغَرِ', lemma: 'صِغَر', pos: 'noun', features: 'def.gen', root: 'ص غ ر', gloss: 'the youth, childhood' },
          ],
        },
        {
          id: 'qs-v11-c01-018',
          ar: 'وَخُصَّ بِالْحَنَانِ وَالصَّلَاحِ وَالتَّقْوَى وَالْبِرِّ بِالْوَالِدَيْنِ،',
          en: 'and who was singled out for tenderness, righteousness, piety, and dutifulness to his parents,',
          tokens: [
            { surface: 'وَخُصَّ', lemma: 'خَصَّ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'خ ص ص', gloss: 'to single out; and was singled out' },
            { surface: 'بِالْحَنَانِ', lemma: 'حَنَان', pos: 'noun', features: 'prep+def.gen', root: 'ح ن ن', gloss: 'for the tenderness, compassion' },
            { surface: 'وَالصَّلَاحِ', lemma: 'صَلَاح', pos: 'noun', features: 'conj+def.gen', root: 'ص ل ح', gloss: 'and the righteousness' },
            { surface: 'وَالتَّقْوَى', lemma: 'تَقْوَى', pos: 'noun', features: 'conj+def.gen', root: 'و ق ي', gloss: 'and the piety, godfearingness' },
            { surface: 'وَالْبِرِّ', lemma: 'بِرّ', pos: 'noun', features: 'conj+def.gen', root: 'ب ر ر', gloss: 'and the dutifulness' },
            { surface: 'بِالْوَالِدَيْنِ', lemma: 'وَالِد', pos: 'noun', features: 'prep+du.def.gen', root: 'و ل د', gloss: 'to the two parents' },
          ],
        },
        {
          id: 'qs-v11-c01-019',
          ar: 'وَالرِّقَّةِ وَلِينِ الْكَنَفِ وَخَفْضِ الْجَنَاحِ،',
          en: 'gentleness, a gentle disposition, and humility.',
          tokens: [
            { surface: 'وَالرِّقَّةِ', lemma: 'رِقَّة', pos: 'noun', features: 'conj+def.gen', root: 'ر ق ق', gloss: 'and the gentleness, tenderness' },
            { surface: 'وَلِينِ', lemma: 'لِين', pos: 'noun', features: 'conj+gen.constr', root: 'ل ي ن', gloss: 'and the softness of' },
            { surface: 'الْكَنَفِ', lemma: 'كَنَف', pos: 'noun', features: 'def.gen', root: 'ك ن ف', gloss: 'the disposition, shelter' },
            { surface: 'وَخَفْضِ', lemma: 'خَفْض', pos: 'noun', features: 'conj+gen.constr', root: 'خ ف ض', gloss: 'and the lowering of' },
            { surface: 'الْجَنَاحِ', lemma: 'جَنَاح', pos: 'noun', features: 'def.gen', root: 'ج ن ح', gloss: 'the wing' },
          ],
        },
        {
          id: 'qs-v11-c01-020',
          ar: 'وَرَبَطَ اللَّهُ عَلَى قَلْبِ زَكَرِيَّا،',
          en: "Allah steadied Zakariyyā's heart,",
          tokens: [
            { surface: 'وَرَبَطَ', lemma: 'رَبَطَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ر ب ط', gloss: 'to bind, steady; and steadied' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'قَلْبِ', lemma: 'قَلْب', pos: 'noun', features: 'gen.constr', gloss: 'the heart of' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', features: 'gen', gloss: 'Zakariyyā' },
          ],
        },
        {
          id: 'qs-v11-c01-021',
          ar: 'وَأَرَاهُ آيَاتٍ تَدُلُّ عَلَى قُدْرَةِ اللَّهِ الْوَاسِعَةِ،',
          en: "and showed him signs pointing to His vast power --",
          tokens: [
            { surface: 'وَأَرَاهُ', lemma: 'أَرَى', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ر أ ي', gloss: 'to show; and showed him' },
            { surface: 'آيَاتٍ', lemma: 'آيَة', pos: 'noun', features: 'pl.indef.acc', root: 'أ ي ي', gloss: 'signs' },
            { surface: 'تَدُلُّ', lemma: 'دَلَّ', pos: 'verb', features: 'impf.3fs', root: 'د ل ل', gloss: 'to indicate, point to; pointing to' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'قُدْرَةِ', lemma: 'قُدْرَة', pos: 'noun', features: 'gen.constr', root: 'ق د ر', gloss: 'the power of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'الْوَاسِعَةِ', lemma: 'وَاسِع', pos: 'adj', features: 'def.gen.f', gloss: 'the vast' },
          ],
        },
        {
          id: 'qs-v11-c01-022',
          ar: 'وَأَنَّهُ يَفْعَلُ مَا يَشَاءُ وَيَخْلُقُ مَا يَشَاءُ،',
          en: 'that He does what He wills and creates what He wills --',
          tokens: [
            { surface: 'وَأَنَّهُ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+3ms', gloss: 'and that He' },
            { surface: 'يَفْعَلُ', lemma: 'فَعَلَ', pos: 'verb', features: 'impf.3ms', root: 'ف ع ل', gloss: 'to do; He does' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', root: 'ش ي أ', gloss: 'to will; He wills' },
            { surface: 'وَيَخْلُقُ', lemma: 'خَلَقَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ل ق', gloss: 'to create; and creates' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', root: 'ش ي أ', gloss: 'to will; He wills' },
          ],
        },
        {
          id: 'qs-v11-c01-023',
          ar: 'وَأَرَاهُ تَصَرُّفَهُ فِي خَلْقِهِ وَفِي أَعْضَاءِ جِسْمِهِ يُحَرِّكُ مَا يَشَاءُ وَيُعَطِّلُ مَا يَشَاءُ،',
          en: 'and showed him His control over His creation and over the very organs of his own body, moving what He wills and disabling what He wills;',
          tokens: [
            { surface: 'وَأَرَاهُ', lemma: 'أَرَى', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ر أ ي', gloss: 'to show; and showed him' },
            { surface: 'تَصَرُّفَهُ', lemma: 'تَصَرُّف', pos: 'noun', features: 'acc+3ms', root: 'ص ر ف', gloss: 'His control, management' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'خَلْقِهِ', lemma: 'خَلْق', pos: 'noun', features: 'gen+3ms', gloss: 'His creation' },
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and over' },
            { surface: 'أَعْضَاءِ', lemma: 'عُضْو', pos: 'noun', features: 'pl.gen.constr', root: 'ع ض و', gloss: 'the parts, members of' },
            { surface: 'جِسْمِهِ', lemma: 'جِسْم', pos: 'noun', features: 'gen+3ms', gloss: 'his body' },
            { surface: 'يُحَرِّكُ', lemma: 'حَرَّكَ', pos: 'verb', features: 'impf.3ms', root: 'ح ر ك', gloss: 'to move, set in motion; moving' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', root: 'ش ي أ', gloss: 'He wills' },
            { surface: 'وَيُعَطِّلُ', lemma: 'عَطَّلَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ع ط ل', gloss: 'to disable, deactivate; and disabling' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', root: 'ش ي أ', gloss: 'He wills' },
          ],
        },
        {
          id: 'qs-v11-c01-024',
          ar: 'وَتَحَقَّقَ لَهُ أَنَّ الْكَوْنَ كُلَّهُ بِيَدِهِ،',
          en: 'and it became certain to him that the whole universe lies in His hand:',
          tokens: [
            { surface: 'وَتَحَقَّقَ', lemma: 'تَحَقَّقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ق ق', gloss: 'to become confirmed, be realized; and it was confirmed' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْكَوْنَ', lemma: 'كَوْن', pos: 'noun', features: 'def.acc', root: 'ك و ن', gloss: 'the universe, existence' },
            { surface: 'كُلَّهُ', lemma: 'كُلّ', pos: 'noun', features: 'acc+3ms', gloss: 'all of it' },
            { surface: 'بِيَدِهِ', lemma: 'يَد', pos: 'noun', features: 'prep+gen+3ms', root: 'ي د ي', gloss: 'in His hand' },
          ],
        },
        {
          id: 'qs-v11-c01-025',
          ar: 'يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ،',
          en: 'He brings forth the living from the dead,',
          tokens: [
            { surface: 'يُخْرِجُ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'impf.3ms', root: 'خ ر ج', gloss: 'to bring out; He brings forth' },
            { surface: 'الْحَيَّ', lemma: 'حَيّ', pos: 'adj', features: 'def.acc', root: 'ح ي ي', gloss: 'the living' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْمَيِّتِ', lemma: 'مَيِّت', pos: 'adj', features: 'def.gen', root: 'م و ت', gloss: 'the dead' },
          ],
        },
        {
          id: 'qs-v11-c01-026',
          ar: 'وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ،',
          en: 'and the dead from the living,',
          tokens: [
            { surface: 'وَيُخْرِجُ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ر ج', gloss: 'to bring out; and brings forth' },
            { surface: 'الْمَيِّتَ', lemma: 'مَيِّت', pos: 'adj', features: 'def.acc', root: 'م و ت', gloss: 'the dead' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْحَيِّ', lemma: 'حَيّ', pos: 'adj', features: 'def.gen', root: 'ح ي ي', gloss: 'the living' },
          ],
        },
        {
          id: 'qs-v11-c01-027',
          ar: 'وَيَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ.',
          en: 'and provides for whom He wills without reckoning.',
          tokens: [
            { surface: 'وَيَرْزُقُ', lemma: 'رَزَقَ', pos: 'verb', features: 'conj+impf.3ms', root: 'ر ز ق', gloss: 'to provide for; and provides for' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whom' },
            { surface: 'يَشَاءُ', lemma: 'شَاءَ', pos: 'verb', features: 'impf.3ms', root: 'ش ي أ', gloss: 'He wills' },
            { surface: 'بِغَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'prep+gen.constr', root: 'غ ي ر', gloss: 'without' },
            { surface: 'حِسَابٍ', lemma: 'حِسَاب', pos: 'noun', features: 'indef.gen', root: 'ح س ب', gloss: 'reckoning, account' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنِ الَّذِي دَعَا رَبَّهُ فِي هَذَا الدُّعَاءِ؟',
          options: ['زَكَرِيَّا', 'يَعْقُوب', 'يُوسُف'],
          answer: 0,
          qEn: 'Who prayed to his Lord in this prayer?',
          optionsEn: ['Zakariyyā', 'Yaʿqūb', 'Yūsuf'],
        },
        {
          q: 'بِمَاذَا دَعَا زَكَرِيَّا رَبَّهُ؟',
          options: [
            'بِوَلَدٍ صَالِحٍ يَرِثُهُ وَيَرِثُ مِنْ آلِ يَعْقُوبَ وَيَقُومُ بِالدَّعْوَةِ إِلَى اللَّهِ',
            'بِالْمَالِ وَالْجَاهِ',
            'بِطُولِ الْعُمُرِ لِنَفْسِهِ',
          ],
          answer: 0,
          qEn: 'What did Zakariyyā pray to his Lord for?',
          optionsEn: [
            'A righteous son who would inherit from him and from the family of Yaʿqūb and take up the call to Allah',
            'Wealth and status',
            'A long life for himself',
          ],
        },
        {
          q: 'لِمَاذَا انْقَطَعَ رَجَاءُ زَكَرِيَّا فِي وَلَدٍ قَبْلَ دُعَائِهِ؟',
          options: [
            'لِأَنَّ السِّنَّ تَقَدَّمَتْ بِهِ وَوَهَنَ عَظْمُهُ وَلَمْ تَلِدْ زَوْجُهُ',
            'لِأَنَّهُ كَانَ فَقِيراً',
            'لِأَنَّ قَوْمَهُ رَفَضُوا دَعْوَتَهُ',
          ],
          answer: 0,
          qEn: "Why had Zakariyyā's hope for a child been cut off before his prayer?",
          optionsEn: [
            'Because his age had advanced, his bones had grown weak, and his wife had not borne a child',
            'Because he was poor',
            'Because his people rejected his call',
          ],
        },
        {
          q: 'مَاذَا أَظْهَرَ اللَّهُ لِزَكَرِيَّا مِنْ آيَاتٍ بَعْدَ أَنِ اسْتَجَابَ لَهُ؟',
          options: [
            'آيَاتٍ تَدُلُّ عَلَى أَنَّهُ يَفْعَلُ مَا يَشَاءُ وَيُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَالْمَيِّتَ مِنَ الْحَيِّ',
            'آيَةً وَاحِدَةً فَقَطْ عَنِ السَّمَاءِ',
            'لَمْ يُرِهِ شَيْئاً',
          ],
          answer: 0,
          qEn: 'What signs did Allah show Zakariyyā after answering his prayer?',
          optionsEn: [
            'Signs showing that He does what He wills and brings forth the living from the dead and the dead from the living',
            'Only one sign about the sky',
            'He showed him nothing',
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَأَنَّهُ يَفْعَلُ مَا',
        post: 'وَيَخْلُقُ مَا يَشَاءُ.',
        en: 'and that He does what He wills and creates what He wills,',
        options: ['يَشَاءُ', 'شَاءَ', 'تَشَاءُ', 'نَشَاءُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- matches هُوَ (Allah), the ongoing "wills".',
          'Perfect tense -- wrong tense; the recurring "He does/wills" needs the imperfect.',
          '2nd masculine or 3rd feminine singular -- wrong person.',
          '1st person plural -- we will; wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَرَزَقَهُ',
        post: 'رَاشِداً،',
        en: 'He granted him a rightly-guided son,',
        options: ['وَلَداً', 'وَلَدٌ', 'وَلَدٍ', 'أَوْلَاداً'],
        answer: 0,
        rationales: [
          'Accusative, indefinite, singular -- object of رَزَقَهُ, matching the singular adjective رَاشِداً.',
          'Nominative -- wrong case; the object of a verb takes the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single son is meant, and رَاشِداً is singular.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَوَهَنَ مِنْهُ',
        post: '،',
        en: 'his bones had grown weak,',
        options: ['الْعَظْمُ', 'الْعَظْمَ', 'الْعَظْمِ', 'الْعِظَامُ'],
        answer: 0,
        rationales: [
          'Nominative, definite -- subject of the verb وَهَنَ.',
          'Accusative -- wrong case; the subject of a verb takes the nominative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          '"The bones" (plural) -- wrong number; the singular الْعَظْمُ is meant.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشَاءُ الْخَيْرَ لِلنَّاسِ',
        pre: '',
        post: 'الْخَيْرَ لِلنَّاسِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشَاءُ', 'يَشَاءُ', 'تَشَاءُ', 'نَشَاءُ'],
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
        base: 'يَشَاءُ الْخَيْرَ لِلنَّاسِ',
        pre: '',
        post: 'الْخَيْرَ لِلنَّاسِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَشَاءُ', 'يَشَاءُ', 'أَشَاءُ', 'نَشَاءُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَشَاءُ الْخَيْرَ لِلنَّاسِ',
        pre: '',
        post: 'الْخَيْرَ لِلنَّاسِ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَشَاءُ', 'يَشَاءُ', 'أَشَاءُ', 'تَشَاءُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- he, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
        ],
      },
    ],
  },
};

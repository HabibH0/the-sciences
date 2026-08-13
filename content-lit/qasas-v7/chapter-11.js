// قَصَصُ النَّبِيِّينَ, volume 7 (the story of Mūsā vs. Pharaoh through the
// Exodus), chapter 11 -- ١١ - عِنَادُ بَنِي إِسْرَائِيلَ ("The Obstinacy of
// the Children of Israel"). Pages 187-188, from the chapter heading at the
// very top of page 187 through the end of page 188, ending just before the
// ch12 heading box "١٢ - الْبَقَرَة" that appears partway down page 188 (right
// after "...وَادْعُ اللَّهَ يُبَيِّنْ لَنَا الْقَاتِلَ"). Transcribed by hand from the
// scan (vision-read, not OCR software) against ../CHAPTER-FORMAT.md and
// QASAS_AGENT_BRIEF.md, working from a prior verified transcription pass
// (transcript-187-199.txt).
//
// Two small vowelling gaps in the supplied transcript, filled in by grammar
// rather than left as guesses, flagged here rather than silently asserted:
//   -- qs-v7-c11-010's "الأمر الإِلهيّ" was under-vowelled in the transcript
//      (no case endings shown); supplied "الْأَمْرِ الْإِلَهِيِّ" (genitive,
//      governed by مِنْ, both terms agreeing) as the only grammatical
//      reading.
//   -- qs-v7-c11-011's "وَدَخَلوا" was similarly under-vowelled; supplied the
//      expected "وَدَخَلُوا" (3mp perfect, matching the sentence's other verbs).
//   -- qs-v7-c11-005's second "يُقَالُ" is printed in the source as "وَيُقَالَ"
//      (fatḥa ending, not the expected ḍamma of an indicative passive
//      "يُقَالُ"). This looks like a printing slip in the original rather
//      than a live grammatical distinction -- there is no أَنْ or other
//      subjunctive/jussive trigger here -- so it is transcribed verbatim
//      (surface carries the fatḥa exactly as scanned) but tagged
//      functionally as pass+impf.3ms like its three sibling instances,
//      flagged rather than silently corrected.
//
// Grammar / lexical notes:
//   -- qs-v7-c11-001's وَكَانَتْ takes a FEMININE verb even though بَنُو
//      إِسْرَائِيلَ denotes a plural of rational beings (which would normally
//      take masculine plural agreement, and does everywhere else in this
//      volume, e.g. كَانُوا، بَدَأَ بَنُو إِسْرَائِيلَ). This is not a transcription
//      error: tribal/national collective names are a well-attested classical
//      exception, taking feminine singular agreement by implicit reference
//      to a feminine noun like الْقَبِيلَة or الطَّائِفَة (compare Qur'anic/
//      classical "قَالَتْ قُرَيْشٌ"). Tagged as an ordinary perf.3fs.
//   -- بَنُو / بَنِي إِسْرَائِيلَ tokenized as two tokens throughout, per the
//      task brief: بَنُو/بَنِي under lemma اِبْن (pos noun, pl.constr + case
//      matching the true syntactic case even though بَنِي is used for both
//      accusative and genitive), إِسْرَائِيلَ as its own proper noun (gen).
//   -- عَنِيد (adj, "stubborn"), عِنَاد (noun, "obstinacy") and عَانَدَ (verb
//      "to be obstinate, oppose stubbornly", surfacing as the participle
//      مُعَانِدِينَ) are three distinct lemmas sharing one root ع ن د, tagged
//      separately per this corpus's established convention for splitting
//      derivational patterns/POS (see qasas-v7 ch1/ch2 headers). عَانَدَ
//      itself turned out to already be taught (qiraah-v2 ch38) once checked
//      against the shared lexicon on a diacritic-stripped basis -- see note
//      below -- so only عَنِيد and عِنَاد are new here.
//   -- هُزْء (noun, "mockery") and اِسْتَهْزَأَ (verb, "to mock") are likewise
//      kept as two lemmas from one root ه ز أ, both new.
//   -- قَوْل (qs-v7-c11-012, "a statement/saying", inside the Qur'anic
//      quotation) is tagged new as a nominal lemma distinct from the
//      already-known verb قَالَ, matching the corpus's derivational-split
//      convention (e.g. قَاتِل vs. قَتَلَ elsewhere).
//   -- حَدَثَ (verb, "to happen") and حَادِث (noun, "an incident") are two
//      new, distinct lemmas from one root ح د ث, kept apart from the
//      already-known noun حَدِيث ("talk, discourse" -- a different word,
//      not a form of the same root's derivational family here).
//   -- سَتَه/اِسْت ("buttock, backside" -- qs-v7-c11-011's plural أَسْتَاهِهِمْ,
//      from the Qur'anic tradition that Banū Isrāʾīl entered the town
//      crawling on their backsides rather than prostrating as commanded)
//      is cited under the classical dictionary form اِسْت (root س ت ه);
//      new.
//   -- طِبَاعِهِمْ (qs-v7-c11-001, "their natures") is tagged under lemma طَبْع
//      (singular, "nature/character/temperament") rather than the surface
//      plural طِبَاع, since طَبْع turned out to already be taught (qiraah-v2
//      ch54) -- following this corpus's convention of citing broken
//      plurals under their singular dictionary lemma. NOT new.
//   -- سَـ+imperfect (qs-v7-c11-009's Qur'anic سَنَزِيدُ, "We will increase")
//      has no dedicated atom in CHAPTER-FORMAT.md's feature grammar (which
//      lists perf/impf/imp but no future marker). Tagged as a fused
//      proclitic 'part' (the closest available generic atom) + impf.1p,
//      i.e. 'part+impf.1p' -- flagging this as inferred rather than
//      documented, same spirit as the format doc's own guidance for
//      under-specified compounds.
//
// A shared-lexicon cross-check (§6 of the task brief) done purely by
// vocalized-string matching against lexicon.txt initially produced several
// FALSE "new" calls, because lexicon.txt mixes fully-vocalized qasas-course
// entries with bare, unvocalized qirāʾah-course entries (e.g. "عاند" for
// qiraah-v2/ch38, no diacritics at all). Re-running the check on a
// diacritic-stripped basis caught this and reversed several calls
// (عَانَدَ، خَالَفَ، ضِدّ، وَاجِب، كُرْه، زَحَفَ، ظَلَمَ، بَلاء، اِهْتَدَى، قَاتِل all turned
// out to already be taught in qirāʾah-v2, NOT re-listed in newWords here).
// Two matches from that same stripped check were judged FALSE POSITIVES
// and kept as new/distinct rather than folded in:
//   -- بَيَّنَ (qs-v7-c11-022, verb "to make clear") strips to the same bare
//      skeleton "بين" as the already-known preposition بَيْنَ ("between",
//      qasas-v3 ch20) once shadda/sukūn are removed -- a genuine
//      consonantal collision, not the same word. Kept as its own new verb
//      lemma.
//   -- أَهَمَّ (qs-v7-c11-017, verb "to concern/trouble greatly") matches a
//      bare "أهم" entry at qiraah-v2/ch72 that plausibly represents the
//      elative adjective أَهَمّ ("more important") rather than this verb.
//      Given the app's newWords matching is purely lemma-string based,
//      this is treated as already covered (not re-listed as new), but the
//      possible homograph is flagged here for a second pair of eyes.
//
// A second cross-check, run once chapters 1-10 of this same volume had
// landed on disk (written in parallel by other agents), caught five more
// words that were independently already introduced earlier in volume 7
// itself and so are NOT re-listed in newWords here even though nothing in
// the qasas/qirāʾah shared lexicon export flags them: عِنَاد (qasas-v7 ch5),
// كُلَّمَا (qasas-v7 ch6), خُضْرَة، بَقْل، سُؤَال (all three qasas-v7 ch10). This
// dropped the new-word count from an initial 24 to 19.
//
// Shared lexicon check (qasas-v1/2/3, qiraah-v1/2, plus qasas-v7 ch1/2's
// own newWords, which count as already taught within this volume):
// كَانَ، فِي، أَطْفَال=طِفْل (qasas-v1 ch4)، أُمِرَ->أَمَرَ (qasas-v1 ch8)، بِ،
// خَالَفَ (qiraah-v2 ch66)، إِلى، ضِدّ (qiraah-v2 ch37)، كَأَنَّ (qasas-v3
// ch19)، رَأَى (qasas-v1 ch2)، مِنْ، وَاجِب (qiraah-v2 ch62)، أَنْ، مَا، قَالَ،
// لِ، طِفْل (qasas-v1 ch4)، قَامَ (qasas-v2 ch7)، جَلَسَ (qasas-v1 ch2)، سَكَتَ
// (qasas-v1 ch4/10)، تَكَلَّمَ (qasas-v1 ch2)، عَانَدَ (qiraah-v2 ch38)، طَبْع
// (qiraah-v2 ch54)، سَفَاهَة (qasas-v3 ch13)، عَدُوّ (qasas-v1 ch9)، أَرَادَ
// (qasas-v1 ch5)، سَكَنَ (qasas-v1 ch16)، قَرْيَة (qasas-v1 ch1)، أَكَلَ (qasas-v1
// ch2)، طَعَام (qasas-v1 ch2)، لَكِنَّ (qasas-v1 ch6/14)، لَمَّا (qasas-v1 ch7)،
// هَذِهِ (bedrock, qasas-v1 ch1)، حَيْثُ (qiraah-v2 ch36)، شَاءَ (qasas-v1
// ch14)، دَخَلَ (qasas-v1 ch5)، بَاب (qasas-v2 ch15)، سَجَدَ (qasas-v1 ch1)،
// غَفَرَ (qasas-v2 ch22)، زَادَ (qasas-v3 ch7)، أَحْسَنَ (qasas-v2 ch8)، غَضِبَ
// (qasas-v1 ch3/10)، هَذَا (bedrock)، ذَلِكَ (bedrock)، أَمْر (qasas-v2 ch2)،
// كُرْه (qiraah-v1 ch24/qiraah-v2 ch58)، زَحَفَ (qiraah-v2 ch49)، عَلَى،
// ظَلَمَ (qiraah-v2 ch72)، غَيْر (qasas-v2 ch9)، أَنْزَلَ (qasas-v3 ch12)،
// اللَّه، بَلاء (qiraah-v2 ch48)، بَعَثَ (qasas-v7 ch1)، مَاتَ (qasas-v1 ch7)،
// فَأْر (qasas-v1 ch2)، أَكْثَرَ (qasas-v3 ch17)، شَأْن (qasas-v2 ch1)، رَجُل
// (qasas-v1 ch1)، لا، عَمِلَ (qasas-v3 ch5)، قَتْل (qasas-v2 ch17)، وَلَمْ
// (qasas-v2 ch4)، اِهْتَدَى (qiraah-v2 ch35)، قَاتِل (qiraah-v2 ch38)، حَدِيث
// (qasas-v2 ch25)، نَاس (qasas-v1 ch1)، جَاءَ (bedrock)، مُوسَى (qasas-v7
// ch1)، صَلاة (qasas-v7 ch1)، سَلام (qasas-v1 ch6)، دَعَا (qasas-v1 ch8)،
// نَبِيّ (qasas-v1 ch8)، قَضِيَّة (qasas-v2 ch15)
// are all already taught (or reused per the notes above) and are NOT
// re-listed in newWords here.
//
// 19 new words (اِسْتَهْزَأَ، بَدَّلَ، عَنِيد، خُبْث، شِرِّير، هُزْء، مَجْنُون، شَهِيّ، حِطَّة،
// خَطِيئَة، إِلَهِيّ، اِسْت، قَوْل، وَبَاء، تَنْقِير، حَدَثَ، حَادِث، أَعَانَ، بَيَّنَ).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch11',
  title: { ar: 'عِنَادُ بَنِي إِسْرَائِيلَ', en: 'The Obstinacy of the Children of Israel' },
  newWords: [
    'اِسْتَهْزَأَ', 'بَدَّلَ', 'عَنِيد', 'خُبْث', 'شِرِّير', 'هُزْء',
    'مَجْنُون', 'شَهِيّ', 'حِطَّة', 'خَطِيئَة', 'إِلَهِيّ', 'اِسْت',
    'قَوْل', 'وَبَاء', 'تَنْقِير', 'حَدَثَ', 'حَادِث', 'أَعَانَ', 'بَيَّنَ',
  ],
  lemmas: {
    'كُلَّمَا': { gloss: 'whenever, every time' },
    'اِسْتَهْزَأَ': { gloss: 'to mock, ridicule' },
    'بَدَّلَ': { gloss: 'to alter, substitute, change' },
    'عَنِيد': { gloss: 'obstinate, stubborn' },
    'عِنَاد': { gloss: 'obstinacy, stubbornness' },
    'خُبْث': { gloss: 'wickedness, malice' },
    'شِرِّير': { gloss: 'wicked, an evildoer' },
    'هُزْء': { gloss: 'mockery, derision' },
    'مَجْنُون': { gloss: 'mad, insane' },
    'شَهِيّ': { gloss: 'delicious, appetizing' },
    'خُضْرَة': { gloss: 'vegetables, greens' },
    'بَقْل': { gloss: 'legumes, potherbs' },
    'حِطَّة': { gloss: '"relieve us [of our burdens]" (a Qurʾānic word of repentance)' },
    'خَطِيئَة': { gloss: 'sin, misdeed' },
    'إِلَهِيّ': { gloss: 'divine' },
    'اِسْت': { gloss: 'backside, buttock' },
    'قَوْل': { gloss: 'statement, saying' },
    'وَبَاء': { gloss: 'plague, pestilence' },
    'سُؤَال': { gloss: 'question, questioning' },
    'تَنْقِير': { gloss: 'probing, prying, scrutinizing' },
    'حَدَثَ': { gloss: 'to happen, occur' },
    'حَادِث': { gloss: 'incident, event' },
    'أَعَانَ': { gloss: 'to help, assist' },
    'بَيَّنَ': { gloss: 'to make clear, clarify' },
  },
  paragraphs: [
    {
      en: "The Children of Israel were, by their nature, children -- obstinate children. Whenever they were commanded to do something, they would oppose it, going to its very opposite, and mock it. It was as though they saw it as their duty to change whatever they were told -- like a stubborn child who is told 'Stand!' and sits, told 'Sit!' and stands, told 'Be quiet!' and talks, told 'Talk!' and falls silent.",
      sentences: [
        {
          id: 'qs-v7-c11-001',
          ar: 'وَكَانَتْ بَنُو إِسْرَائِيلَ فِي طِبَاعِهِمْ أَطْفَالاً، وَأَطْفَالاً مُعَانِدِينَ.',
          en: 'The Children of Israel were, by their nature, children -- and obstinate children.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was (tribal-collective feminine agreement)' },
            { surface: 'بَنُو', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.nom', root: 'ب ن و', gloss: 'sons/children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'طِبَاعِهِمْ', lemma: 'طَبْع', pos: 'noun', features: 'pl.gen+3mp', root: 'ط ب ع', gloss: 'their natures, temperaments' },
            { surface: 'أَطْفَالاً', lemma: 'طِفْل', pos: 'noun', features: 'pl.indef.acc', gloss: 'children' },
            { surface: 'وَأَطْفَالاً', lemma: 'طِفْل', pos: 'noun', features: 'conj+pl.indef.acc', gloss: 'and children' },
            { surface: 'مُعَانِدِينَ', lemma: 'عَانَدَ', pos: 'adj', features: 'pl.indef.acc', root: 'ع ن د', gloss: 'opposing, obstinate' },
          ],
        },
        {
          id: 'qs-v7-c11-002',
          ar: 'وَكُلَّمَا أُمِرُوا بِأَمْرٍ يُخَالِفُونَهُ إِلى ضِدِّهِ وَيَسْتَهْزِئُونَ بِهِ.',
          en: 'Whenever they were commanded with something, they would oppose it, to its very opposite, and mock it.',
          tokens: [
            { surface: 'وَكُلَّمَا', lemma: 'كُلَّمَا', pos: 'conj', features: 'conj+conj', gloss: 'and whenever' },
            { surface: 'أُمِرُوا', lemma: 'أَمَرَ', pos: 'verb', features: 'pass+perf.3mp', gloss: 'to command; they were commanded' },
            { surface: 'بِأَمْرٍ', lemma: 'أَمْر', pos: 'noun', features: 'prep+indef.gen', gloss: 'with a command' },
            { surface: 'يُخَالِفُونَهُ', lemma: 'خَالَفَ', pos: 'verb', features: 'impf.3mp+3ms', root: 'خ ل ف', gloss: 'to oppose, contradict; they oppose it' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'ضِدِّهِ', lemma: 'ضِدّ', pos: 'noun', features: 'gen+3ms', root: 'ض د د', gloss: 'its opposite' },
            { surface: 'وَيَسْتَهْزِئُونَ', lemma: 'اِسْتَهْزَأَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ه ز أ', gloss: 'to mock; and they mock' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'at it' },
          ],
        },
        {
          id: 'qs-v7-c11-003',
          ar: 'كَأَنَّهُمْ يَرَوْنَ مِنَ الْوَاجِبِ أَنْ يُبَدِّلُوا مَا يُقَالُ لَهُمْ.',
          en: 'It was as though they saw it as their duty to alter whatever they were told.',
          tokens: [
            { surface: 'كَأَنَّهُمْ', lemma: 'كَأَنَّ', pos: 'part', features: 'part+3mp', gloss: 'as if they' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', gloss: 'to see, consider; they consider' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, among' },
            { surface: 'الْوَاجِبِ', lemma: 'وَاجِب', pos: 'noun', features: 'def.gen', root: 'و ج ب', gloss: 'the obligatory, the duty' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يُبَدِّلُوا', lemma: 'بَدَّلَ', pos: 'verb', features: 'impf.3mp', root: 'ب د ل', gloss: 'to alter, change' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'whatever' },
            { surface: 'يُقَالُ', lemma: 'قَالَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'to say; is said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v7-c11-004',
          ar: 'كَطِفْلٍ عَنِيدٍ يُقَالُ لَهُ قُمْ فَيَجْلِسُ وَيُقَالُ لَهُ اجْلِسْ فَيَقُومُ،',
          en: "Like a stubborn child: he is told 'Stand!' and he sits; he is told 'Sit!' and he stands,",
          tokens: [
            { surface: 'كَطِفْلٍ', lemma: 'طِفْل', pos: 'noun', features: 'prep+indef.gen', gloss: 'like a child' },
            { surface: 'عَنِيدٍ', lemma: 'عَنِيد', pos: 'adj', features: 'indef.gen', gloss: 'stubborn, obstinate' },
            { surface: 'يُقَالُ', lemma: 'قَالَ', pos: 'verb', features: 'pass+impf.3ms', gloss: 'it is said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'قُمْ', lemma: 'قَامَ', pos: 'verb', features: 'imp.2ms', gloss: 'to stand; Stand!' },
            { surface: 'فَيَجْلِسُ', lemma: 'جَلَسَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to sit; and he sits' },
            { surface: 'وَيُقَالُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+pass+impf.3ms', gloss: 'and it is said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'اجْلِسْ', lemma: 'جَلَسَ', pos: 'verb', features: 'imp.2ms', gloss: 'to sit; Sit!' },
            { surface: 'فَيَقُومُ', lemma: 'قَامَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to stand; and he stands' },
          ],
        },
        {
          id: 'qs-v7-c11-005',
          ar: 'وَيُقَالَ لَهُ اسْكُتْ فَيَتَكَلَّمُ وَيُقَالُ لَهُ تَكَلَّمْ فَيَسْكُتُ.',
          en: "He is told 'Be quiet!' and he talks; he is told 'Talk!' and he falls silent.",
          tokens: [
            { surface: 'وَيُقَالَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+pass+impf.3ms', gloss: 'and it is said (surface fatḥa as printed; see header note)' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'اسْكُتْ', lemma: 'سَكَتَ', pos: 'verb', features: 'imp.2ms', gloss: 'to be quiet; Be quiet!' },
            { surface: 'فَيَتَكَلَّمُ', lemma: 'تَكَلَّمَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to speak; and he talks' },
            { surface: 'وَيُقَالُ', lemma: 'قَالَ', pos: 'verb', features: 'conj+pass+impf.3ms', gloss: 'and it is said' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
            { surface: 'تَكَلَّمْ', lemma: 'تَكَلَّمَ', pos: 'verb', features: 'imp.2ms', gloss: 'to speak; Talk!' },
            { surface: 'فَيَسْكُتُ', lemma: 'سَكَتَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to be quiet; and he falls silent' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ بَنُو إِسْرَائِيلَ يَتَصَرَّفُونَ إِذَا أُمِرُوا بِأَمْرٍ؟',
          options: ['يُخَالِفُونَهُ إِلَى ضِدِّهِ وَيَسْتَهْزِئُونَ بِهِ', 'يُنَفِّذُونَهُ فَوْراً بِلا سُؤَالٍ', 'يَسْأَلُونَ عَنْ سَبَبِهِ ثُمَّ يُطِيعُونَ'],
          answer: 0,
          qEn: 'How did the Children of Israel behave when commanded to do something?',
          optionsEn: ['They would oppose it, to its very opposite, and mock it', 'They would carry it out at once without question', 'They would ask its reason, then obey'],
        },
      ],
    },
    {
      en: 'In them was combined the obstinacy of children, the wickedness of the wicked, the mockery of enemies, and the folly of madmen. They wanted only to settle in a village and eat their delicious food of vegetables and legumes.',
      sentences: [
        {
          id: 'qs-v7-c11-006',
          ar: 'وَكَانَ فِيهِمْ عِنَادُ الْأَطْفَالِ فِي خُبْثِ الْأَشْرَارِ فِي هُزْءِ الْأَعْدَاءِ فِي سَفَاهَةِ الْمَجَانِينَ.',
          en: 'In them was combined the obstinacy of children, the wickedness of the wicked, the mockery of enemies, and the folly of madmen.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'in them' },
            { surface: 'عِنَادُ', lemma: 'عِنَاد', pos: 'noun', features: 'nom.constr', root: 'ع ن د', gloss: 'the obstinacy of' },
            { surface: 'الْأَطْفَالِ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.gen', gloss: 'the children' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'combined with' },
            { surface: 'خُبْثِ', lemma: 'خُبْث', pos: 'noun', features: 'constr.gen', root: 'خ ب ث', gloss: 'the wickedness of' },
            { surface: 'الْأَشْرَارِ', lemma: 'شِرِّير', pos: 'noun', features: 'pl.def.gen', root: 'ش ر ر', gloss: 'the wicked' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'combined with' },
            { surface: 'هُزْءِ', lemma: 'هُزْء', pos: 'noun', features: 'constr.gen', root: 'ه ز أ', gloss: 'the mockery of' },
            { surface: 'الْأَعْدَاءِ', lemma: 'عَدُوّ', pos: 'noun', features: 'pl.def.gen', gloss: 'the enemies' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'combined with' },
            { surface: 'سَفَاهَةِ', lemma: 'سَفَاهَة', pos: 'noun', features: 'constr.gen', gloss: 'the folly of' },
            { surface: 'الْمَجَانِينَ', lemma: 'مَجْنُون', pos: 'noun', features: 'pl.def.gen', root: 'ج ن ن', gloss: 'the mad, insane ones' },
          ],
        },
        {
          id: 'qs-v7-c11-007',
          ar: 'كَانُوا يُرِيدُونَ أَنْ يَسْكُنُوا قَرْيَةً وَيَأْكُلُوا طَعَامَهُمْ الشَّهِيَّ مِنَ الْخُضَرِ وَالْبُقُولِ.',
          en: 'They wanted only to settle in a village and eat their delicious food of vegetables and legumes.',
          tokens: [
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; they were' },
            { surface: 'يُرِيدُونَ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3mp', gloss: 'to want; wanting' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَسْكُنُوا', lemma: 'سَكَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to settle, dwell' },
            { surface: 'قَرْيَةً', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.acc', gloss: 'a village' },
            { surface: 'وَيَأْكُلُوا', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to eat; and eat' },
            { surface: 'طَعَامَهُمْ', lemma: 'طَعَام', pos: 'noun', features: 'acc+3mp', gloss: 'their food' },
            { surface: 'الشَّهِيَّ', lemma: 'شَهِيّ', pos: 'adj', features: 'def.acc', root: 'ش ه و', gloss: 'the delicious, appetizing' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْخُضَرِ', lemma: 'خُضْرَة', pos: 'noun', features: 'pl.def.gen', root: 'خ ض ر', gloss: 'the vegetables, greens' },
            { surface: 'وَالْبُقُولِ', lemma: 'بَقْل', pos: 'noun', features: 'conj+pl.def.gen', root: 'ب ق ل', gloss: 'and the legumes' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا الَّذِي كَانَ بَنُو إِسْرَائِيلَ يُرِيدُونَ أَنْ يَفْعَلُوهُ فِي الْقَرْيَةِ؟',
          options: ['أَنْ يَسْكُنُوا فِيهَا وَيَأْكُلُوا طَعَامَهُمُ الشَّهِيَّ', 'أَنْ يُقَاتِلُوا أَهْلَهَا', 'أَنْ يَبْنُوا فِيهَا مَسْجِداً'],
          answer: 0,
          qEn: 'What did the Children of Israel want to do in the village?',
          optionsEn: ['Settle there and eat their delicious food', 'Fight its people', 'Build a mosque there'],
        },
      ],
    },
    {
      en: 'But when they were told, [Qurʾān, al-Baqarah 2:58: "Enter this town and eat freely from it wherever you wish, and say, \'Relieve us [of our burdens],\' and enter the gate prostrating; We will forgive you your sins, and We will increase the good-doers [in reward]"] -- they grew angry at this divine command, and entered the town reluctantly and mockingly, crawling on their backsides.',
      sentences: [
        {
          id: 'qs-v7-c11-008',
          ar: 'وَلَكِنَّهُمْ لَمَّا قِيلَ لَهُمْ',
          en: 'But when they were told,',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'لَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj', gloss: 'when' },
            { surface: 'قِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to say; it was said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          // Al-Baqarah 2:58.
          id: 'qs-v7-c11-009',
          ar: '﴿اسْكُنُوا هَـٰذِهِ ٱلْقَرْيَةَ وَكُلُوا مِنْهَا حَيْثُ شِئْتُمْ وَقُولُوا حِطَّةٌ وَٱدْخُلُوا ٱلْبَابَ سُجَّدًا نَغْفِرْ لَكُمْ خَطِيٓـٰٔتِكُمْ سَنَزِيدُ ٱلْمُحْسِنِينَ﴾.',
          en: '"Enter this town and eat freely from it wherever you wish, and say, \'Relieve us [of our burdens],\' and enter the gate prostrating; We will forgive you your sins, and We will increase the good-doers [in reward]."',
          tokens: [
            { surface: 'اسْكُنُوا', lemma: 'سَكَنَ', pos: 'verb', features: 'imp.2mp', gloss: 'to dwell; Dwell!' },
            { surface: 'هَـٰذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'ٱلْقَرْيَةَ', lemma: 'قَرْيَة', pos: 'noun', features: 'def.acc', gloss: 'the town' },
            { surface: 'وَكُلُوا', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'and eat!' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it' },
            { surface: 'حَيْثُ', lemma: 'حَيْثُ', pos: 'adv', features: 'adv', gloss: 'wherever' },
            { surface: 'شِئْتُمْ', lemma: 'شَاءَ', pos: 'verb', features: 'perf.2mp', gloss: 'to wish; you wish' },
            { surface: 'وَقُولُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'and say!' },
            { surface: 'حِطَّةٌ', lemma: 'حِطَّة', pos: 'noun', features: 'indef.nom', root: 'ح ط ط', gloss: '"relieve us [of our burdens]"' },
            { surface: 'وَٱدْخُلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+imp.2mp', gloss: 'and enter!' },
            { surface: 'ٱلْبَابَ', lemma: 'بَاب', pos: 'noun', features: 'def.acc', gloss: 'the gate' },
            { surface: 'سُجَّدًا', lemma: 'سَجَدَ', pos: 'noun', features: 'pl.indef.acc', gloss: 'prostrating' },
            { surface: 'نَغْفِرْ', lemma: 'غَفَرَ', pos: 'verb', features: 'impf.1p', gloss: 'to forgive; We will forgive' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'you' },
            { surface: 'خَطِيٓـٰٔتِكُمْ', lemma: 'خَطِيئَة', pos: 'noun', features: 'pl.acc+2mp', root: 'خ ط أ', gloss: 'your sins' },
            { surface: 'سَنَزِيدُ', lemma: 'زَادَ', pos: 'verb', features: 'part+impf.1p', gloss: 'to increase; We will increase' },
            { surface: 'ٱلْمُحْسِنِينَ', lemma: 'أَحْسَنَ', pos: 'noun', features: 'pl.def.acc', gloss: 'the good-doers' },
          ],
        },
        {
          id: 'qs-v7-c11-010',
          ar: 'غَضِبُوا مِنْ هَذَا الْأَمْرِ الْإِلَهِيِّ،',
          en: 'they grew angry at this divine command,',
          tokens: [
            { surface: 'غَضِبُوا', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3mp', gloss: 'to become angry; they grew angry' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْأَمْرِ', lemma: 'أَمْر', pos: 'noun', features: 'def.gen', gloss: 'the command' },
            { surface: 'الْإِلَهِيِّ', lemma: 'إِلَهِيّ', pos: 'adj', features: 'def.gen', root: 'ا ل ه', gloss: 'the divine' },
          ],
        },
        {
          id: 'qs-v7-c11-011',
          ar: 'وَدَخَلُوا الْقَرْيَةَ كُرْهاً وَهُزُواً يَزْحَفُونَ عَلَى أَسْتَاهِهِمْ.',
          en: 'and entered the town reluctantly and mockingly, crawling on their backsides.',
          tokens: [
            { surface: 'وَدَخَلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'and they entered' },
            { surface: 'الْقَرْيَةَ', lemma: 'قَرْيَة', pos: 'noun', features: 'def.acc', gloss: 'the town' },
            { surface: 'كُرْهاً', lemma: 'كُرْه', pos: 'noun', features: 'indef.acc', gloss: 'reluctantly' },
            { surface: 'وَهُزُواً', lemma: 'هُزْء', pos: 'noun', features: 'conj+indef.acc', gloss: 'and mockingly' },
            { surface: 'يَزْحَفُونَ', lemma: 'زَحَفَ', pos: 'verb', features: 'impf.3mp', gloss: 'to crawl; crawling' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'أَسْتَاهِهِمْ', lemma: 'اِسْت', pos: 'noun', features: 'pl.gen+3mp', root: 'س ت ه', gloss: 'their backsides' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ دَخَلَ بَنُو إِسْرَائِيلَ الْقَرْيَةَ بَدَلَ السُّجُودِ كَمَا أُمِرُوا؟',
          options: ['دَخَلُوهَا كُرْهاً وَهُزُواً يَزْحَفُونَ عَلَى أَسْتَاهِهِمْ', 'دَخَلُوهَا سَاجِدِينَ شَاكِرِينَ كَمَا أُمِرُوا', 'رَفَضُوا دُخُولَهَا بِالْكُلِّيَّةِ'],
          answer: 0,
          qEn: 'How did the Children of Israel enter the town instead of prostrating as commanded?',
          optionsEn: ['They entered it reluctantly and mockingly, crawling on their backsides', 'They entered it prostrating and thankful, as commanded', 'They refused to enter it at all'],
        },
      ],
    },
    {
      en: '[Qurʾān, al-Baqarah 2:59: "But those who wronged changed the words to something other than what had been said to them."] So Allah sent down upon them a calamity, and sent upon them a plague from which they died, dying as mice die.',
      sentences: [
        {
          // Al-Baqarah 2:59a.
          id: 'qs-v7-c11-012',
          ar: '﴿فَبَدَّلَ ٱلَّذِينَ ظَلَمُوا۟ قَوْلًا غَيْرَ ٱلَّذِى قِيلَ لَهُمْ﴾.',
          en: '"But those who wronged changed the words to something other than what had been said to them."',
          tokens: [
            { surface: 'فَبَدَّلَ', lemma: 'بَدَّلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to alter, change; then changed' },
            { surface: 'ٱلَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'rel.pl', gloss: 'those who' },
            { surface: 'ظَلَمُوا۟', lemma: 'ظَلَمَ', pos: 'verb', features: 'perf.3mp', gloss: 'to wrong, do injustice; wronged' },
            { surface: 'قَوْلًا', lemma: 'قَوْل', pos: 'noun', features: 'indef.acc', gloss: 'a statement, saying' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc.constr', gloss: 'other than' },
            { surface: 'ٱلَّذِى', lemma: 'الَّذِي', pos: 'rel', features: 'rel', gloss: 'that which' },
            { surface: 'قِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'pass+perf.3ms', gloss: 'was said' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v7-c11-013',
          ar: 'فَأَنْزَلَ اللَّهُ عَلَيْهِمْ بَلاءً وَبَعَثَ عَلَيْهِمْ وَبَاءً مَاتُوا مِنْهُ مَوْتَ الفِئْرَانِ.',
          en: 'So Allah sent down upon them a calamity, and sent upon them a plague from which they died, dying as mice die.',
          tokens: [
            { surface: 'فَأَنْزَلَ', lemma: 'أَنْزَلَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send down; so sent down' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'بَلاءً', lemma: 'بَلاء', pos: 'noun', features: 'indef.acc', gloss: 'a calamity, affliction' },
            { surface: 'وَبَعَثَ', lemma: 'بَعَثَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to send; and sent' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'وَبَاءً', lemma: 'وَبَاء', pos: 'noun', features: 'conj+indef.acc', root: 'و ب أ', gloss: 'and a plague' },
            { surface: 'مَاتُوا', lemma: 'مَاتَ', pos: 'verb', features: 'perf.3mp', gloss: 'to die; they died' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from it' },
            { surface: 'مَوْتَ', lemma: 'مَوْت', pos: 'noun', features: 'acc.constr', gloss: 'the death of' },
            { surface: 'الفِئْرَانِ', lemma: 'فَأْر', pos: 'noun', features: 'pl.def.gen', gloss: 'the mice' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بِبَنِي إِسْرَائِيلَ بَعْدَ أَنْ بَدَّلُوا الْقَوْلَ؟',
          options: ['أَنْزَلَ عَلَيْهِمْ بَلاءً وَبَعَثَ عَلَيْهِمْ وَبَاءً مَاتُوا مِنْهُ', 'غَفَرَ لَهُمْ فَوْراً', 'أَرْسَلَ إِلَيْهِمْ نَبِيّاً آخَرَ'],
          answer: 0,
          qEn: 'What did Allah do to the Children of Israel after they had changed the words?',
          optionsEn: ['He sent down upon them a calamity, and a plague from which they died', 'He forgave them at once', 'He sent them another prophet'],
        },
      ],
    },
    {
      en: 'And whenever they were commanded with something, they would multiply questioning and probing -- like a man who does not want to work, so he multiplies questions and probing.',
      sentences: [
        {
          id: 'qs-v7-c11-014',
          ar: 'وَإِذَا أُمِرُوا بِأَمْرٍ أَكْثَرُوا السُّؤَالَ وَالتَّنْقِيرَ.',
          en: 'Whenever they were commanded with something, they would multiply questioning and probing.',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'part', features: 'conj+part', gloss: 'and whenever' },
            { surface: 'أُمِرُوا', lemma: 'أَمَرَ', pos: 'verb', features: 'pass+perf.3mp', gloss: 'they were commanded' },
            { surface: 'بِأَمْرٍ', lemma: 'أَمْر', pos: 'noun', features: 'prep+indef.gen', gloss: 'with a command' },
            { surface: 'أَكْثَرُوا', lemma: 'أَكْثَرَ', pos: 'verb', features: 'perf.3mp', gloss: 'to multiply, increase; they multiplied' },
            { surface: 'السُّؤَالَ', lemma: 'سُؤَال', pos: 'noun', features: 'def.acc', root: 'س أ ل', gloss: 'the questioning' },
            { surface: 'وَالتَّنْقِيرَ', lemma: 'تَنْقِير', pos: 'noun', features: 'conj+def.acc', root: 'ن ق ر', gloss: 'and the probing' },
          ],
        },
        {
          id: 'qs-v7-c11-015',
          ar: 'شَأْنَ رَجُلٍ لا يُرِيدُ أَنْ يَعْمَلَ فَيُكْثِرُ السُّؤَالَ وَالتَّنْقِيرَ.',
          en: 'Like the way of a man who does not want to work, so he multiplies questions and probing.',
          tokens: [
            { surface: 'شَأْنَ', lemma: 'شَأْن', pos: 'noun', features: 'acc.constr', gloss: 'the way, manner of' },
            { surface: 'رَجُلٍ', lemma: 'رَجُل', pos: 'noun', features: 'indef.gen', gloss: 'a man' },
            { surface: 'لا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُرِيدُ', lemma: 'أَرَادَ', pos: 'verb', features: 'impf.3ms', gloss: 'he wants' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'conj', features: 'conj', gloss: 'to' },
            { surface: 'يَعْمَلَ', lemma: 'عَمِلَ', pos: 'verb', features: 'impf.3ms', gloss: 'to work' },
            { surface: 'فَيُكْثِرُ', lemma: 'أَكْثَرَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'so he multiplies' },
            { surface: 'السُّؤَالَ', lemma: 'سُؤَال', pos: 'noun', features: 'def.acc', gloss: 'the questioning' },
            { surface: 'وَالتَّنْقِيرَ', lemma: 'تَنْقِير', pos: 'noun', features: 'conj+def.acc', gloss: 'and the probing' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا شَبَّهَ الْكَاتِبُ كَثْرَةَ أَسْئِلَةِ بَنِي إِسْرَائِيلَ؟',
          options: ['بِرَجُلٍ لا يُرِيدُ أَنْ يَعْمَلَ فَيُكْثِرُ السُّؤَالَ وَالتَّنْقِيرَ', 'بِطِفْلٍ يُحِبُّ التَّعَلُّمَ', 'بِعَالِمٍ يَبْحَثُ عَنِ الْحَقِيقَةِ'],
          answer: 0,
          qEn: "What did the author compare the Children of Israel's excessive questioning to?",
          optionsEn: ['A man who does not want to work, so he multiplies questions and probing', 'A child who loves learning', 'A scholar searching for the truth'],
        },
      ],
    },
    {
      en: 'A case of murder occurred among the Children of Israel, and it troubled them greatly. They could not find the killer, and the question of who the killer was became the talk of the people. They came to Mūsā, peace and blessings be upon him, and said, "Help us, O Prophet of Allah, in this matter, and pray to Allah to make clear to us the killer."',
      sentences: [
        {
          id: 'qs-v7-c11-016',
          ar: 'حَدَثَ فِي بَنِي إِسْرَائِيلَ حَادِثُ قَتْلٍ،',
          en: 'A case of murder occurred among the Children of Israel,',
          tokens: [
            { surface: 'حَدَثَ', lemma: 'حَدَثَ', pos: 'verb', features: 'perf.3ms', root: 'ح د ث', gloss: 'to happen, occur' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.gen', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
            { surface: 'حَادِثُ', lemma: 'حَادِث', pos: 'noun', features: 'nom.constr', root: 'ح د ث', gloss: 'an incident of' },
            { surface: 'قَتْلٍ', lemma: 'قَتْل', pos: 'noun', features: 'indef.gen', gloss: 'murder' },
          ],
        },
        {
          id: 'qs-v7-c11-017',
          ar: 'فَأَهَمَّ ذَلِكَ بَنِي إِسْرَائِيلَ.',
          en: 'and that troubled the Children of Israel greatly.',
          tokens: [
            { surface: 'فَأَهَمَّ', lemma: 'أَهَمَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to concern, trouble greatly; and troubled' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'بَنِي', lemma: 'اِبْن', pos: 'noun', features: 'pl.constr.acc', gloss: 'the children of' },
            { surface: 'إِسْرَائِيلَ', lemma: 'إِسْرَائِيل', pos: 'proper', features: 'gen', gloss: 'Israel' },
          ],
        },
        {
          id: 'qs-v7-c11-018',
          ar: 'وَلَمْ يَهْتَدُوا إِلى الْقَاتِلِ،',
          en: 'They could not find the killer,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَهْتَدُوا', lemma: 'اِهْتَدَى', pos: 'verb', features: 'impf.3mp', gloss: 'to find one’s way, be guided' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْقَاتِلِ', lemma: 'قَاتِل', pos: 'noun', features: 'def.gen', gloss: 'the killer' },
          ],
        },
        {
          id: 'qs-v7-c11-019',
          ar: 'وَكَانَ السُّؤَالُ عَنِ الْقَاتِلِ حَدِيثَ النَّاسِ.',
          en: 'and the question of who the killer was became the talk of the people.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and was' },
            { surface: 'السُّؤَالُ', lemma: 'سُؤَال', pos: 'noun', features: 'def.nom', gloss: 'the question' },
            { surface: 'عَنِ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'about' },
            { surface: 'الْقَاتِلِ', lemma: 'قَاتِل', pos: 'noun', features: 'def.gen', gloss: 'the killer' },
            { surface: 'حَدِيثَ', lemma: 'حَدِيث', pos: 'noun', features: 'acc.constr', gloss: 'the talk of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v7-c11-020',
          ar: 'جَاءُوا إِلى مُوسَى عَلَيْهِ الصَّلاةُ وَالسَّلامُ',
          en: 'They came to Mūsā, peace and blessings be upon him,',
          tokens: [
            { surface: 'جَاءُوا', lemma: 'جَاءَ', pos: 'verb', features: 'perf.3mp', gloss: 'to come; they came' },
            { surface: 'إِلى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'مُوسَى', lemma: 'مُوسَى', pos: 'proper', features: 'gen', gloss: 'Mūsā' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'upon him' },
            { surface: 'الصَّلاةُ', lemma: 'صَلاة', pos: 'noun', features: 'def.nom', gloss: 'the blessing' },
            { surface: 'وَالسَّلامُ', lemma: 'سَلام', pos: 'noun', features: 'conj+def.nom', gloss: 'and the peace' },
          ],
        },
        {
          id: 'qs-v7-c11-021',
          ar: 'وَقَالُوا أَعِنَّا يَانَبِيَّ اللَّهِ فِي هَذِهِ الْقَضِيَّةِ',
          en: 'and said, "Help us, O Prophet of Allah, in this matter,',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'and they said' },
            { surface: 'أَعِنَّا', lemma: 'أَعَانَ', pos: 'verb', features: 'imp.2ms+1p', root: 'ع و ن', gloss: 'to help; Help us!' },
            { surface: 'يَانَبِيَّ', lemma: 'نَبِيّ', pos: 'noun', features: 'part+acc.constr', gloss: 'O Prophet of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْقَضِيَّةِ', lemma: 'قَضِيَّة', pos: 'noun', features: 'def.gen', gloss: 'the matter, case' },
          ],
        },
        {
          id: 'qs-v7-c11-022',
          ar: 'وَادْعُ اللَّهَ يُبَيِّنْ لَنَا الْقَاتِلَ.',
          en: 'and pray to Allah to make clear to us the killer."',
          tokens: [
            { surface: 'وَادْعُ', lemma: 'دَعَا', pos: 'verb', features: 'conj+imp.2ms', gloss: 'and pray!' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'يُبَيِّنْ', lemma: 'بَيَّنَ', pos: 'verb', features: 'impf.3ms', root: 'ب ي ن', gloss: 'to make clear; may He clarify' },
            { surface: 'لَنَا', lemma: 'لِ', pos: 'prep', features: 'prep+1p', gloss: 'to us' },
            { surface: 'الْقَاتِلَ', lemma: 'قَاتِل', pos: 'noun', features: 'def.acc', gloss: 'the killer' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا جَاءَ بَنُو إِسْرَائِيلَ إِلَى مُوسَى عَلَيْهِ السَّلامُ؟',
          options: ['لِيَدْعُوَ اللَّهَ أَنْ يُبَيِّنَ لَهُمُ الْقَاتِلَ فِي حَادِثِ قَتْلٍ حَدَثَ فِيهِمْ', 'لِيَطْلُبُوا مِنْهُ الطَّعَامَ', 'لِيَشْكُوا إِلَيْهِ فِرْعَوْنَ'],
          answer: 0,
          qEn: 'Why did the Children of Israel come to Mūsā, peace be upon him?',
          optionsEn: ['To ask him to pray to Allah to make clear to them the killer in a murder case that had occurred among them', 'To ask him for food', 'To complain to him about Pharaoh'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَطِفْلٍ عَنِيدٍ يُقَالُ لَهُ قُمْ',
        post: 'وَيُقَالُ لَهُ اجْلِسْ فَيَقُومُ.',
        en: "Like a stubborn child: he is told 'Stand!' and he sits; he is told 'Sit!' and he stands.",
        options: ['فَيَجْلِسُ', 'فَيَقُومُ', 'فَيَتَكَلَّمُ', 'فَيَسْكُتُ'],
        answer: 0,
        rationales: [
          'Correct -- told to stand, he does the opposite and sits.',
          'Wrong verb -- "he stands" is the response to اجْلِسْ, not قُمْ.',
          'Wrong pair -- belongs with the quiet/talk exchange.',
          'Wrong pair -- belongs with the quiet/talk exchange.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَيُقَالُ لَهُ اسْكُتْ',
        post: 'وَيُقَالُ لَهُ تَكَلَّمْ فَيَسْكُتُ.',
        en: "He is told 'Be quiet!' and he talks; he is told 'Talk!' and he is quiet.",
        options: ['فَيَتَكَلَّمُ', 'فَيَجْلِسُ', 'فَيَقُومُ', 'فَيَسْكُتُ'],
        answer: 0,
        rationales: [
          'Correct -- told to be quiet, he does the opposite and talks.',
          'Wrong pair -- belongs with the stand/sit exchange.',
          'Wrong pair -- belongs with the stand/sit exchange.',
          'Wrong verb -- "he is quiet" is the response to تَكَلَّمْ, not اسْكُتْ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكُلَّمَا أُمِرُوا بِأَمْرٍ',
        post: 'إِلَى ضِدِّهِ وَيَسْتَهْزِئُونَ بِهِ.',
        en: 'Whenever they were commanded with something, they would oppose it to its contrary, and mock it.',
        options: ['يُخَالِفُونَهُ', 'خَالَفُوهُ', 'يُخَالِفُهُ', 'خَالَفَهُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches the habitual "whenever..." sense and the plural subject.',
          'Perfect tense -- wrong aspect; the habitual كُلَّمَا-clause needs the imperfect.',
          '3rd masculine singular -- wrong number; the subject is plural.',
          'Perfect, singular -- wrong on both aspect and number.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَجْلِسُ الطِّفْلُ حِينَ يُقَالُ لَهُ قُمْ',
        pre: '',
        post: 'الطِّفْلُ حِينَ يُقَالُ لَهُ قُمْ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَجْلِسُ', 'يَجْلِسُ', 'تَجْلِسُ', 'نَجْلِسُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- he, the form already given.',
          '2nd masculine singular or 3rd feminine singular -- wrong.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَجْلِسُ الطِّفْلُ حِينَ يُقَالُ لَهُ قُمْ',
        pre: '',
        post: 'الطِّفْلُ حِينَ يُقَالُ لَهُ قُمْ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَجْلِسُ', 'يَجْلِسُ', 'أَجْلِسُ', 'نَجْلِسُ'],
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
        base: 'يَجْلِسُ الطِّفْلُ حِينَ يُقَالُ لَهُ قُمْ',
        pre: '',
        post: 'الطِّفْلُ حِينَ يُقَالُ لَهُ قُمْ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَجْلِسُونَ', 'يَجْلِسُ', 'تَجْلِسُ', 'نَجْلِسُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- he, the form already given.',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 10 «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»,
// chapter 1 -- قِصَّةُ أَيُّوبَ نَمَطٌ آخَرُ مِنَ الْقَصَصِ. Printed page 237 only --
// the volume's title page (basmala graphic, centered title, chapter 1
// beginning on the same page, same layout as every other Qaṣaṣ volume
// opening -- see QASAS_AGENT_BRIEF.md §1). Transcribed by hand from the
// scan (vision OCR, 300dpi render, with targeted crops at 4-5x zoom to
// verify individual ḥarakāt) against ../CHAPTER-FORMAT.md.
//
// One long paragraph, structurally a single sentence chain: Ayyūb's story
// is framed as a "different pattern" from the rest of the book's
// narratives -- instead of a call-and-rejection arc, it is pure
// demonstration of Allah's favor on a patient, grateful believer, moving
// straight from abundance, through total loss (wealth, then health),
// to the one thing that could not be taken (his heart and tongue still
// remembering Allah), and closing on his wife's quiet loyalty.
//
// Grammar / lexical notes:
//   -- آخَرَ (qs-v10-c01-001) is printed with fatḥa in the body sentence,
//      but the identical word two clauses later (qs-v10-c01-002,
//      "وَمَظْهَرٌ آخَرُ") and in the chapter's own title-box heading are both
//      printed with ḍamma (آخَرُ) -- confirmed by 4x zoom crop on both
//      instances, not a misreading. آخَر is diptote (مَمْنُوعٌ مِنَ الصَّرْفِ),
//      so its nominative is ـُ with no tanwīn; grammatically both instances
//      modify a nominative predicate and "should" agree as آخَرُ, but the
//      print disagrees for the first one. Transcribed exactly as printed
//      in both places per the house instruction to preserve ḥarakāt over
//      "correcting" them; tagged 'acc' on the first token to match its
//      visible mark, 'nom' on the second.
//   -- فَابْتُلِيَ / ابْتُلِيَ (new, qs-v10-c01-006/007) and أُفْرِدَ (new,
//      qs-v10-c01-009) are the chapter's recycled frame: three passive
//      perfects in a row, each fronted by وَ/فَ, marking the turns of the
//      trial (wealth, then body, then isolation). Built into workshop
//      below.
//   -- بِهِمَا (qs-v10-c01-008) is a dual attached pronoun (referring back
//      to "his heart and his tongue," two things) -- the documented
//      feature grammar has no dual person code, so '3d' is used per
//      CHAPTER-FORMAT.md's degrade-gracefully allowance (prints literally
//      rather than mistranslating it as a plural).
//   -- عَزَّ وَجَلَّ ("Mighty and Majestic is He," qs-v10-c01-008) is a fixed
//      liturgical phrase following اللَّه -- both words tagged as ordinary
//      perfect verbs (عَزَّ / جَلَّ, "to be mighty" / "to be majestic") since
//      that is their literal grammar, even though the phrase functions
//      idiomatically as a single unit.
//   -- سِوَى ("except, other than," new) is tagged pos:'adv' -- it governs
//      a following genitive like a preposition but is traditionally
//      parsed as an اسم ظرفي (adverbial noun) rather than a حرف جر, and it
//      ends in alif maqṣūrah so never carries a visible case mark itself.
//   -- الْقَصَصِ (qs-v10-c01-001) is the broken plural of the already-known
//      قِصَّة (this book's own title word) -- tagged lemma قِصَّة, features
//      pl.def.gen, not a separate lemma, matching the corpus's standing
//      convention for broken plurals (e.g. أَوْلَاد -> lemma وَلَد).
//   -- أَيُّوب, the chapter's protagonist, is NOT listed in newWords --
//      matching the established convention for a volume's title-character
//      proper noun (qasas-v2 ch1 does the same for يُوسُف): it gets an
//      inline token gloss ("Ayyūb") but no lemmas{} entry, since marking a
//      person's name "unknown" has no pedagogical drill value.
//   -- Footnote (١) on this page -- "العبارة لابن كثير في تفسيره" ("the
//      wording is Ibn Kathīr's, from his tafsīr") -- is a source citation
//      for the paragraph's phrasing, not a vocabulary gloss, so it is not
//      placed in lemmas{}/book_note; recorded here for provenance only.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, `grep -o
//      "'[^']*': *{" content-lit/*/chapter-*.js`): قِصَّة، فِي، الْقُرْآن،
//      عَبْد، مُؤْمِن، صَابِر، نَبِيّ، قَدْ، كَانَ، لِ، حَرْث، شَيْء، كَثِير، وَلَد،
//      ذَلِكَ، كُلّ، ذَهَبَ، عَنْ، لَمْ، بَقِيَ، قَلْب، بَلَد، أَحَد، نَاس، قَامَ،
//      أَمْر، صَارَ، ذَكَرَ، اللَّه، مِنْ، عَلَى، بِ، ثُمَّ، مَلْجَأ، أَهْل، رَدَّ،
//      مَال، بَارَكَ، دُعَاء
//      are all already taught (across qasas-v1/-v2/-v3) and are NOT
//      re-listed in newWords here.
//
// 21 new words (نَمَط، مَظْهَر، نِعْمَة، شَاكِر، مَحْبُوب، دَابَّة، أَنْعَام، مَرْضِيّ،
// اِبْتَلَى، آخِر، جَسَد، سَلِيم، سِوَى، لِسَان، أَفْرَدَ، نَاحِيَة، حَنَا، زَوْجَة،
// اِحْتَاجَ، أَيْضاً، خَدَمَ، أَجْل).
//
// No page footnotes (book_note) on this page -- the one footnote present
// is the source citation noted above, not a vocabulary gloss.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'قِصَّةُ أَيُّوبَ نَمَطٌ آخَرُ مِنَ الْقَصَصِ', en: 'The Story of Ayyūb Is a Different Pattern of Stories' },
  newWords: [
    'نَمَط', 'مَظْهَر', 'نِعْمَة', 'شَاكِر', 'مَحْبُوب', 'دَابَّة', 'أَنْعَام', 'مَرْضِيّ',
    'اِبْتَلَى', 'آخِر', 'جَسَد', 'سَلِيم', 'سِوَى', 'لِسَان', 'أَفْرَدَ', 'نَاحِيَة',
    'حَنَا', 'زَوْجَة', 'اِحْتَاجَ', 'أَيْضاً', 'خَدَمَ', 'أَجْل',
  ],
  lemmas: {
    'نَمَط': { gloss: 'pattern, type' },
    'مَظْهَر': { gloss: 'manifestation, appearance' },
    'نِعْمَة': { gloss: 'blessing, favor' },
    'شَاكِر': { gloss: 'grateful, thankful' },
    'مَحْبُوب': { gloss: 'beloved' },
    'دَابَّة': { gloss: 'animal, beast, livestock' },
    'أَنْعَام': { gloss: 'cattle, livestock' },
    'مَرْضِيّ': { gloss: 'pleasing, satisfactory' },
    'اِبْتَلَى': { gloss: 'to try, test' },
    'آخِر': { gloss: 'last part, end' },
    'جَسَد': { gloss: 'body' },
    'سَلِيم': { gloss: 'sound, intact' },
    'سِوَى': { gloss: 'except, other than' },
    'لِسَان': { gloss: 'tongue' },
    'أَفْرَدَ': { gloss: 'to set apart, isolate' },
    'نَاحِيَة': { gloss: 'side, area, corner' },
    'حَنَا': { gloss: 'to show tenderness, incline towards' },
    'زَوْجَة': { gloss: 'wife' },
    'اِحْتَاجَ': { gloss: 'to be in need' },
    'أَيْضاً': { gloss: 'also, too' },
    'خَدَمَ': { gloss: 'to serve' },
    'أَجْل': { gloss: 'sake' },
  },
  paragraphs: [
    {
      en: "The story of Ayyūb in the Qur'an is a different pattern of stories -- another manifestation of Allah's blessings upon His believing servants, the patient, the grateful, and the beloved prophets. He had abundant livestock, cattle, and farmland, and pleasing children -- then he was tried in all of that, and it all left him; then he was tried in his very body, until nothing sound remained of him except his heart and his tongue, with which he kept remembering Allah, mighty and majestic is He. He was set apart in a corner of the town, and not one person remained to show him tenderness except his wife, who used to look after his affairs -- and she too fell into need, so she went to serving people for his sake.",
      sentences: [
        {
          id: 'qs-v10-c01-001',
          ar: 'وَقِصَّةُ أَيُّوبَ فِي الْقُرْآنِ نَمَطٌ آخَرَ مِنَ الْقَصَصِ،',
          en: "The story of Ayyūb in the Qur'an is a different pattern of stories,",
          tokens: [
            { surface: 'وَقِصَّةُ', lemma: 'قِصَّة', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the story of' },
            { surface: 'أَيُّوبَ', lemma: 'أَيُّوب', pos: 'proper', features: 'gen', gloss: 'Ayyūb' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْقُرْآنِ', lemma: 'قُرْآن', pos: 'proper', features: 'def.gen', root: 'ق ر أ', gloss: "the Qur'an" },
            { surface: 'نَمَطٌ', lemma: 'نَمَط', pos: 'noun', features: 'indef.nom', gloss: 'a pattern, type' },
            { surface: 'آخَرَ', lemma: 'آخَر', pos: 'adj', features: 'acc', gloss: 'different, another' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْقَصَصِ', lemma: 'قِصَّة', pos: 'noun', features: 'def.gen.pl', gloss: 'the stories' },
          ],
        },
        {
          id: 'qs-v10-c01-002',
          ar: 'وَمَظْهَرٌ آخَرُ مِنْ مَظَاهِرِ نِعَمِ اللَّهِ عَلَى عِبَادِهِ الْمُؤْمِنِينَ،',
          en: "and another manifestation of the manifestations of Allah's blessings upon His believing servants,",
          tokens: [
            { surface: 'وَمَظْهَرٌ', lemma: 'مَظْهَر', pos: 'noun', features: 'conj+indef.nom', root: 'ظ ه ر', gloss: 'and a manifestation' },
            { surface: 'آخَرُ', lemma: 'آخَر', pos: 'adj', features: 'nom', gloss: 'another, different' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'مَظَاهِرِ', lemma: 'مَظْهَر', pos: 'noun', features: 'pl.gen.constr', gloss: 'the manifestations of' },
            { surface: 'نِعَمِ', lemma: 'نِعْمَة', pos: 'noun', features: 'pl.gen.constr', gloss: 'the blessings of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'عِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'pl.gen+3ms', gloss: 'His servants' },
            { surface: 'الْمُؤْمِنِينَ', lemma: 'مُؤْمِن', pos: 'adj', features: 'def.gen.pl', gloss: 'the believing' },
          ],
        },
        {
          id: 'qs-v10-c01-003',
          ar: 'الصَّابِرِينَ الشَّاكِرِينَ،',
          en: 'the patient, the grateful,',
          tokens: [
            { surface: 'الصَّابِرِينَ', lemma: 'صَابِر', pos: 'adj', features: 'def.gen.pl', gloss: 'the patient' },
            { surface: 'الشَّاكِرِينَ', lemma: 'شَاكِر', pos: 'adj', features: 'def.gen.pl', root: 'ش ك ر', gloss: 'the grateful, thankful' },
          ],
        },
        {
          id: 'qs-v10-c01-004',
          ar: 'وَالأَنْبِيَاءِ الْمَحْبُوبِينَ؛',
          en: 'and the beloved prophets;',
          tokens: [
            { surface: 'وَالأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the prophets' },
            { surface: 'الْمَحْبُوبِينَ', lemma: 'مَحْبُوب', pos: 'adj', features: 'def.gen.pl', root: 'ح ب ب', gloss: 'beloved' },
          ],
        },
        {
          id: 'qs-v10-c01-005',
          ar: 'فَقَدْ كَانَ لَهُ مِنَ الدَّوَابِّ وَالأَنْعَامِ وَالْحَرَثِ شَيْءٌ كَثِيرٌ وَأَوْلَادٌ مَرْضِيَّةٌ،',
          en: 'for he had abundant livestock, cattle, and farmland, and pleasing children,',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'for indeed' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; had' },
            { surface: 'لَهُ', lemma: 'لِ', pos: 'prep', features: 'prep+3ms', gloss: 'to him (he had)' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الدَّوَابِّ', lemma: 'دَابَّة', pos: 'noun', features: 'def.gen.pl', root: 'د ب ب', gloss: 'the animals, livestock' },
            { surface: 'وَالأَنْعَامِ', lemma: 'أَنْعَام', pos: 'noun', features: 'conj+def.gen', gloss: 'and the cattle' },
            { surface: 'وَالْحَرَثِ', lemma: 'حَرْث', pos: 'noun', features: 'conj+def.gen', gloss: 'and the farmland, crops' },
            { surface: 'شَيْءٌ', lemma: 'شَيْء', pos: 'noun', features: 'indef.nom', gloss: 'a thing, much' },
            { surface: 'كَثِيرٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom', gloss: 'much, abundant' },
            { surface: 'وَأَوْلَادٌ', lemma: 'وَلَد', pos: 'noun', features: 'conj+pl.indef.nom', gloss: 'and children' },
            { surface: 'مَرْضِيَّةٌ', lemma: 'مَرْضِيّ', pos: 'adj', features: 'indef.nom.f', root: 'ر ض ي', gloss: 'pleasing, satisfactory' },
          ],
        },
        {
          id: 'qs-v10-c01-006',
          ar: 'فَابْتُلِيَ فِي ذَلِكَ كُلِّهِ وَذَهَبَ عَنْ آخِرِهِ،',
          en: 'then he was tried in all of that, and it left him entirely,',
          tokens: [
            { surface: 'فَابْتُلِيَ', lemma: 'اِبْتَلَى', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ب ل و', gloss: 'to try, test; was tried' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'كُلِّهِ', lemma: 'كُلّ', pos: 'noun', features: 'gen+3ms', gloss: 'all of it' },
            { surface: 'وَذَهَبَ', lemma: 'ذَهَبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to go; and it went (left)' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'آخِرِهِ', lemma: 'آخِر', pos: 'noun', features: 'gen+3ms', gloss: 'its last part (entirely)' },
          ],
        },
        {
          id: 'qs-v10-c01-007',
          ar: 'ثُمَّ ابْتُلِيَ فِي جَسَدِهِ فَلَمْ يَبْقَ مِنْهُ سَلِيمٌ سِوَى قَلْبِهِ وَلِسَانِهِ،',
          en: 'then he was tried in his body, until nothing sound remained of him except his heart and his tongue,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثُمَّ', pos: 'conj', features: 'conj', gloss: 'then' },
            { surface: 'ابْتُلِيَ', lemma: 'اِبْتَلَى', pos: 'verb', features: 'pass+perf.3ms', gloss: 'to try, test; was tried' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'جَسَدِهِ', lemma: 'جَسَد', pos: 'noun', features: 'gen+3ms', gloss: 'his body' },
            { surface: 'فَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'so...not' },
            { surface: 'يَبْقَ', lemma: 'بَقِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remain; remained' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'of him' },
            { surface: 'سَلِيمٌ', lemma: 'سَلِيم', pos: 'adj', features: 'indef.nom', gloss: 'sound, intact' },
            { surface: 'سِوَى', lemma: 'سِوَى', pos: 'adv', features: 'adv', gloss: 'except, other than' },
            { surface: 'قَلْبِهِ', lemma: 'قَلْب', pos: 'noun', features: 'gen+3ms', gloss: 'his heart' },
            { surface: 'وَلِسَانِهِ', lemma: 'لِسَان', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his tongue' },
          ],
        },
        {
          id: 'qs-v10-c01-008',
          ar: 'يَذْكُرُ بِهِمَا اللَّهَ عَزَّ وَجَلَّ،',
          en: 'with which he kept remembering Allah, mighty and majestic is He,',
          tokens: [
            { surface: 'يَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remember, mention; he remembers' },
            { surface: 'بِهِمَا', lemma: 'بِ', pos: 'prep', features: 'prep+3d', gloss: 'with the two of them' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'عَزَّ', lemma: 'عَزَّ', pos: 'verb', features: 'perf.3ms', gloss: 'to be mighty; mighty is He' },
            { surface: 'وَجَلَّ', lemma: 'جَلَّ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be majestic; and majestic' },
          ],
        },
        {
          id: 'qs-v10-c01-009',
          ar: 'وَأُفْرِدَ فِي نَاحِيَةٍ مِنَ الْبَلَدِ،',
          en: 'He was set apart in a corner of the town,',
          tokens: [
            { surface: 'وَأُفْرِدَ', lemma: 'أَفْرَدَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'ف ر د', gloss: 'to set apart, isolate; was set apart' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'نَاحِيَةٍ', lemma: 'نَاحِيَة', pos: 'noun', features: 'indef.gen', gloss: 'a side, corner, area' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'الْبَلَدِ', lemma: 'بَلَد', pos: 'noun', features: 'def.gen', gloss: 'the town' },
          ],
        },
        {
          id: 'qs-v10-c01-010',
          ar: 'وَلَمْ يَبْقَ أَحَدٌ مِنَ النَّاسِ يَحْنُو عَلَيْهِ،',
          en: 'and not one person remained to show him tenderness,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and...not' },
            { surface: 'يَبْقَ', lemma: 'بَقِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to remain; remained' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone, one' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'يَحْنُو', lemma: 'حَنَا', pos: 'verb', features: 'impf.3ms', root: 'ح ن و', gloss: 'to show tenderness; show tenderness' },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to him' },
          ],
        },
        {
          id: 'qs-v10-c01-011',
          ar: 'سِوَى زَوْجَتِهِ كَانَتْ تَقُومُ بِأَمْرِهِ،',
          en: 'except his wife, who used to look after his affairs,',
          tokens: [
            { surface: 'سِوَى', lemma: 'سِوَى', pos: 'adv', features: 'adv', gloss: 'except' },
            { surface: 'زَوْجَتِهِ', lemma: 'زَوْجَة', pos: 'noun', features: 'gen+3ms', gloss: 'his wife' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be; she used to' },
            { surface: 'تَقُومُ', lemma: 'قَامَ', pos: 'verb', features: 'impf.3fs', gloss: 'to stand, tend to; look after' },
            { surface: 'بِأَمْرِهِ', lemma: 'أَمْر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'his affairs' },
          ],
        },
        {
          id: 'qs-v10-c01-012',
          ar: 'وَاحْتَاجَتْ أَيْضاً فَصَارَتْ تَخْدُمُ النَّاسَ مِنْ أَجْلِهِ.',
          en: 'and she too fell into need, so she went to serving people for his sake.',
          tokens: [
            { surface: 'وَاحْتَاجَتْ', lemma: 'اِحْتَاجَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ح و ج', gloss: 'to be in need; and she needed' },
            { surface: 'أَيْضاً', lemma: 'أَيْضاً', pos: 'adv', features: 'indef.acc', gloss: 'also, too' },
            { surface: 'فَصَارَتْ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become; so she went to' },
            { surface: 'تَخْدُمُ', lemma: 'خَدَمَ', pos: 'verb', features: 'impf.3fs', gloss: 'to serve; serving' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'أَجْلِهِ', lemma: 'أَجْل', pos: 'noun', features: 'gen+3ms', gloss: 'his sake' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ عِنْدَ أَيُّوبَ قَبْلَ الابْتِلَاءِ؟',
          options: ['دَوَابُّ وَأَنْعَامٌ وَحَرْثٌ كَثِيرٌ وَأَوْلَادٌ مَرْضِيَّةٌ', 'لَمْ يَكُنْ عِنْدَهُ شَيْءٌ', 'كَانَ فَقِيراً مُنْذُ صِغَرِهِ'],
          answer: 0,
          qEn: 'What did Ayyūb have before the trial?',
          optionsEn: ['Abundant livestock, cattle, farmland, and pleasing children', 'He had nothing at all', 'He had been poor since childhood'],
        },
        {
          q: 'مَاذَا بَقِيَ سَلِيماً مِنْ جَسَدِ أَيُّوبَ؟',
          options: ['قَلْبُهُ وَلِسَانُهُ', 'يَدَاهُ وَرِجْلَاهُ', 'كُلُّ جَسَدِهِ'],
          answer: 0,
          qEn: "What remained sound in Ayyūb's body?",
          optionsEn: ['His heart and his tongue', 'His hands and feet', 'His whole body'],
        },
        {
          q: 'مَنِ الَّذِي بَقِيَ يَخْدُمُ أَيُّوبَ وَلَمْ يَتْرُكْهُ؟',
          options: ['زَوْجَتُهُ', 'أَوْلَادُهُ', 'جِيرَانُهُ'],
          answer: 0,
          qEn: 'Who remained serving Ayyūb and did not abandon him?',
          optionsEn: ['His wife', 'His children', 'His neighbors'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَ',
        post: 'فِي ذَلِكَ كُلِّهِ.',
        en: 'Then he was tried in all of that.',
        options: ['ابْتُلِيَ', 'اِبْتَلَى', 'يُبْتَلَى', 'مُبْتَلًى'],
        answer: 0,
        rationales: [
          'Passive perfect 3ms -- "he was tried," matching the printed فَابْتُلِيَ.',
          'Active perfect -- wrong voice; the subject is being tested, not testing.',
          'Passive imperfect -- wrong tense; the printed form is perfect.',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'فِي نَاحِيَةٍ مِنَ الْبَلَدِ.',
        en: 'He was set apart in a corner of the town.',
        options: ['أُفْرِدَ', 'أَفْرَدَ', 'يُفْرَدُ', 'مُفْرَد'],
        answer: 0,
        rationales: [
          'Passive perfect 3ms -- matches the printed وَأُفْرِدَ.',
          'Active perfect -- wrong voice.',
          'Passive imperfect -- wrong tense; the printed form is perfect.',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'كَانَ لَهُ مِنَ الدَّوَابِّ وَالْأَنْعَامِ وَالْحَرَثِ',
        post: 'كَثِيرٌ.',
        en: 'He had abundant livestock, cattle, and farmland.',
        options: ['شَيْءٌ', 'شَيْئاً', 'شَيْءَ', 'أَشْيَاء'],
        answer: 0,
        rationales: [
          'Indefinite nominative -- subject of كَانَ لَهُ, matching the printed case.',
          'Accusative -- wrong case; nothing here governs the accusative.',
          'Genitive without tanwīn -- wrong case and wrong definiteness.',
          'Plural -- wrong number; the printed sentence uses the singular.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَذْكُرُ الرَّجُلُ اللَّهَ',
        pre: '',
        post: 'اللَّهَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَذْكُرُ', 'يَذْكُرُ', 'تَذْكُرُ', 'نَذْكُرُ'],
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
        base: 'يَذْكُرُ الرَّجُلُ اللَّهَ',
        pre: '',
        post: 'اللَّهَ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَذْكُرُ', 'يَذْكُرُ', 'أَذْكُرُ', 'نَذْكُرُ'],
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
        base: 'يَذْكُرُ الرَّجُلُ اللَّهَ',
        pre: '',
        post: 'اللَّهَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَذْكُرُونَ', 'يَذْكُرُ', 'تَذْكُرُ', 'نَذْكُرُ'],
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

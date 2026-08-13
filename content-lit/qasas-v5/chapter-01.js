// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 1 -- بَعْدَ عَادٍ.
// Printed pages 96 (from the volume-title box «نَاقَةُ ثَمُودَ», chapter 1's own
// box directly beneath it on the same page) - 97 (top portion only, ending
// before ch2's box كُفْرَانُ ثَمُودَ partway down that page). Transcribed by
// hand from the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md
// and QASAS_VOLUME_MAP.md's volume 5 table.
//
// Volume 5 opens the story of Ṣāliḥ ﷺ and Thamūd: this first chapter is
// scene-setting prose paralleling volume 3 ch1's after-Ādam opening and
// volume 4 ch1's after-Nūḥ opening -- Thamūd inherits ʿĀd's land and
// prosperity, building on ʿĀd's own skill until they surpass it, carving
// palaces and ornament directly out of the mountains.
//
// Grammar / lexical notes:
//   -- ثَمُودُ and عَاد are both diptote/triptote PROPER nouns introduced here
//      for the first time in the transcribed corpus (volume 4's own Hūd/ʿĀd
//      story, where عَاد would normally be taught first, is being
//      transcribed in parallel and not yet landed at the time of writing).
//      ثَمُودُ is diptote (نُوحُ-type mamnūʿ min aṣ-ṣarf): nominative ثَمُودُ
//      (bare ḍamma, no tanwīn), accusative/genitive ثَمُودَ (bare fatḥa) --
//      tagged 'gen' or 'acc' by syntactic role despite the invariant fatḥa
//      surface, exactly as qasas-v1's diptote إِبْرَاهِيمَ already is. عَاد is
//      a regular triptote (عَادٌ / عَاداً / عَادٍ), fully tanwīnated as the
//      scan shows.
//   -- كَ (qs-v5-c01-011/018) is glossed as a fused preposition exactly like
//      the already-documented بِ/لِ proclitics -- CHAPTER-FORMAT.md only
//      names بِ/لِ/وَ/فَ explicitly, but a single-letter jarr particle fused
//      onto its noun is the same shape, so it is tagged 'prep' the same way.
//   -- كَأَنَّمَا (qs-v5-c01-014/016) is kept as one lexicalized lemma rather
//      than decomposed into كَأَنَّ + مَا -- Arabic pedagogy treats it as a
//      single fixed connective ("as if"), and the format has no mechanism
//      for marking a fused multi-letter compound the way it does for
//      single-letter proclitics.
//   -- بَنَاهَا / أَنْبَتَهَا (qs-v5-c01-013/017) carry a trailing 3fs object
//      suffix referring back to a non-human plural (قُصُوراً, أَزْهَاراً) --
//      Arabic pronominal reference to a non-human plural is grammatically
//      feminine singular, so the referent is glossed "it/them" rather than
//      "her".
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَمَا، أُمَّة (qasas-v1
//      ch1)، نُوح (qasas-v3 ch14)، كَانَ، عَلَى، أَثَر، أَيْضًا، أَرْض، جَمِيل
//      (qasas-v3 ch1)، فِي، عَيْن (qasas-v1)، جَنَّة، جَرَى، مِنْ، نَهْر، كَثْرَة،
//      بُسْتَان، عَقْل، صِنَاعَة، جَبَل، بَيْت، حِجَارَة، قَدْ، حَجَر، صَنَعَ، مَا،
///     إِنْسَان، إِذَا (adv, conj+adv)، دَخَلَ، مَدِينَة، رَأَى، عَجَب، قَصْر،
//      عَظِيم، جِنّ، جِدَار، رَبِيع، فَتَحَ، اللَّه، سَمَاء، بَرَكَة، كُلّ، شَيْء،
//      جَادَ، مَطَر، نَبَات، فَاكِهَة، بَارَكَ، رِزْق، عُمْر، لَانَ (qasas-v3)
//      are all already taught and are NOT re-listed in newWords here.
//
// 15 new words (ثَمُود، عَاد، وَرِثَ، عِمَارَة، زِرَاعَة، نَحَتَ، وَاسِع، نَقَشَ،
// نَقْش، بَدِيع، شَمْع، كَأَنَّمَا، زَهْرَة، أَنْبَتَ، ثَمَر).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'بَعْدَ عَادٍ', en: 'After ʿĀd' },
  newWords: ['ثَمُود', 'عَاد', 'وَرِثَ', 'عِمَارَة', 'زِرَاعَة', 'نَحَتَ', 'وَاسِع', 'نَقَشَ', 'نَقْش', 'بَدِيع', 'شَمْع', 'كَأَنَّمَا', 'زَهْرَة', 'أَنْبَتَ', 'ثَمَر'],
  lemmas: {
    ثَمُود: { gloss: 'Thamūd' },
    عَاد: { gloss: 'ʿĀd' },
    وَرِثَ: { gloss: 'to inherit' },
    عِمَارَة: { gloss: 'building, construction' },
    زِرَاعَة: { gloss: 'farming, agriculture' },
    نَحَتَ: { gloss: 'to carve, hew' },
    وَاسِع: { gloss: 'wide, spacious' },
    نَقَشَ: { gloss: 'to engrave, carve (ornament)' },
    نَقْش: { gloss: 'a carving, engraving' },
    بَدِيع: { gloss: 'wondrous, marvelous' },
    شَمْع: { gloss: 'wax' },
    كَأَنَّمَا: { gloss: 'as if' },
    زَهْرَة: { gloss: 'flower' },
    أَنْبَتَ: { gloss: 'to grow, sprout (something)' },
    ثَمَر: { gloss: 'fruit, produce' },
  },
  paragraphs: [
    {
      en: "Thamūd inherited ʿĀd's place, just as ʿĀd had inherited Nūḥ's nation's, coming in ʿĀd's footsteps as ʿĀd had come in Nūḥ's nation's. Thamūd's land, too, was beautiful and green, with orchards, springs, and gardens beneath which rivers flowed. Thamūd matched ʿĀd in building, farming, and the abundance of orchards -- and surpassed them in intellect and craftsmanship, carving wide, beautiful houses out of the mountains and engraving wondrous carvings in the stone. Stone had grown soft in their hands through their intellect and skill, so that they worked it as a person works wax. If someone entered their city he would see wonders: great palaces like mountains, as if the jinn had built them, and beautiful flowers on the walls, as if spring itself had grown them. Allah had opened for Thamūd blessings from the sky and the earth, opened for them the doors of everything -- the sky was generous to them with rain, the earth with plants and flowers, the orchards with fruit and produce, and Allah blessed them in provision and long life.",
      sentences: [
        {
          id: 'qs-v5-c01-001',
          ar: 'وَرِثَتْ ثَمُودُ عَاداً كَمَا وَرِثَتْ عَادٌ أُمَّةَ نُوحٍ.',
          en: "Thamūd inherited ʿĀd's place, just as ʿĀd had inherited Nūḥ's nation's.",
          tokens: [
            { surface: 'وَرِثَتْ', lemma: 'وَرِثَ', pos: 'verb', features: 'perf.3fs', root: 'و ر ث', gloss: 'to inherit; inherited' },
            { surface: 'ثَمُودُ', lemma: 'ثَمُود', pos: 'proper', features: 'nom', gloss: 'Thamūd' },
            { surface: 'عَاداً', lemma: 'عَاد', pos: 'proper', features: 'acc', gloss: 'ʿĀd' },
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'وَرِثَتْ', lemma: 'وَرِثَ', pos: 'verb', features: 'perf.3fs', root: 'و ر ث', gloss: 'inherited' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'أُمَّةَ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.acc', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v5-c01-002',
          ar: 'وَكَانَتْ ثَمُودُ عَلَى أَثَرِ عَادٍ،',
          en: 'Thamūd came in the footsteps of ʿĀd,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'ثَمُودُ', lemma: 'ثَمُود', pos: 'proper', features: 'nom', gloss: 'Thamūd' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on, following' },
            { surface: 'أَثَرِ', lemma: 'أَثَر', pos: 'noun', features: 'constr.gen', gloss: 'the trace, footsteps of' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
          ],
        },
        {
          id: 'qs-v5-c01-003',
          ar: 'كَمَا كَانَتْ عَادٌ عَلَى أَثَرِ أُمَّةِ نُوحٍ.',
          en: "just as ʿĀd had come in the footsteps of Nūḥ's nation.",
          tokens: [
            { surface: 'كَمَا', lemma: 'كَمَا', pos: 'conj', features: 'conj', gloss: 'just as' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'was' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on, following' },
            { surface: 'أَثَرِ', lemma: 'أَثَر', pos: 'noun', features: 'constr.gen', gloss: 'the trace, footsteps of' },
            { surface: 'أُمَّةِ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.gen', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v5-c01-004',
          ar: 'وَكَانَتْ أَرْضُ ثَمُودَ أَيْضاً أَرْضاً جَمِيلَةً خَضْرَاءَ،',
          en: "Thamūd's land, too, was a beautiful, green land,",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'أَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'constr.nom', gloss: 'the land of' },
            { surface: 'ثَمُودَ', lemma: 'ثَمُود', pos: 'proper', features: 'gen', gloss: 'Thamūd' },
            { surface: 'أَيْضاً', lemma: 'أَيْضًا', pos: 'adv', features: 'adv', gloss: 'also' },
            { surface: 'أَرْضاً', lemma: 'أَرْض', pos: 'noun', features: 'indef.acc', gloss: 'a land' },
            { surface: 'جَمِيلَةً', lemma: 'جَمِيل', pos: 'adj', features: 'indef.acc.f', gloss: 'beautiful' },
            { surface: 'خَضْرَاءَ', lemma: 'أَخْضَر', pos: 'adj', features: 'indef.acc.f', root: 'خ ض ر', gloss: 'green' },
          ],
        },
        {
          id: 'qs-v5-c01-005',
          ar: 'فِيهَا بَسَاتِينُ وَعُيُونٌ وَجَنَّاتٌ تَجْرِي مِنْ تَحْتِهَا الأَنْهَارُ.',
          en: 'with orchards, springs, and gardens beneath which rivers flowed.',
          tokens: [
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it, there' },
            { surface: 'بَسَاتِينُ', lemma: 'بُسْتَان', pos: 'noun', features: 'pl.indef.nom', gloss: 'orchards' },
            { surface: 'وَعُيُونٌ', lemma: 'عَيْن', pos: 'noun', features: 'conj+pl.indef.nom', root: 'ع ي ن', gloss: 'and springs' },
            { surface: 'وَجَنَّاتٌ', lemma: 'جَنَّة', pos: 'noun', features: 'conj+pl.indef.nom', gloss: 'and gardens' },
            { surface: 'تَجْرِي', lemma: 'جَرَى', pos: 'verb', features: 'impf.3fs', gloss: 'to flow; flow' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'تَحْتِهَا', lemma: 'تَحْت', pos: 'noun', features: 'gen+3fs', gloss: 'beneath it, them' },
            { surface: 'الأَنْهَارُ', lemma: 'نَهْر', pos: 'noun', features: 'pl.def.nom', gloss: 'the rivers' },
          ],
        },
        {
          id: 'qs-v5-c01-006',
          ar: 'وَكَانَتْ ثَمُودُ كَعَادٍ فِي الْعِمَارَةِ وَالزِّرَاعَةِ وَفِي كَثْرَةِ الْبَسَاتِينِ.',
          en: 'Thamūd matched ʿĀd in building, farming, and the abundance of orchards.',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'ثَمُودُ', lemma: 'ثَمُود', pos: 'proper', features: 'nom', gloss: 'Thamūd' },
            { surface: 'كَعَادٍ', lemma: 'عَاد', pos: 'proper', features: 'prep+gen', gloss: 'like ʿĀd' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْعِمَارَةِ', lemma: 'عِمَارَة', pos: 'noun', features: 'def.gen', root: 'ع م ر', gloss: 'building, construction' },
            { surface: 'وَالزِّرَاعَةِ', lemma: 'زِرَاعَة', pos: 'noun', features: 'conj+def.gen', root: 'ز ر ع', gloss: 'and farming' },
            { surface: 'وَفِي', lemma: 'فِي', pos: 'prep', features: 'conj+prep', gloss: 'and in' },
            { surface: 'كَثْرَةِ', lemma: 'كَثْرَة', pos: 'noun', features: 'constr.gen', gloss: 'the abundance of' },
            { surface: 'الْبَسَاتِينِ', lemma: 'بُسْتَان', pos: 'noun', features: 'pl.def.gen', gloss: 'the orchards' },
          ],
        },
        {
          id: 'qs-v5-c01-007',
          ar: 'وَفَاقُوهُمْ فِي الْعَقْلِ وَالصِّنَاعَةِ،',
          en: 'and they surpassed them in intellect and craftsmanship,',
          tokens: [
            { surface: 'وَفَاقُوهُمْ', lemma: 'فَاقَ', pos: 'verb', features: 'conj+perf.3mp+3mp', root: 'ف و ق', gloss: 'to surpass, excel; and they surpassed them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْعَقْلِ', lemma: 'عَقْل', pos: 'noun', features: 'def.gen', gloss: 'intellect' },
            { surface: 'وَالصِّنَاعَةِ', lemma: 'صِنَاعَة', pos: 'noun', features: 'conj+def.gen', gloss: 'and craftsmanship' },
          ],
        },
        {
          id: 'qs-v5-c01-008',
          ar: 'فَكَانُوا يَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتاً وَاسِعَةً جَمِيلَةً،',
          en: 'so they used to carve wide, beautiful houses out of the mountains,',
          tokens: [
            { surface: 'فَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; so they were, used to' },
            { surface: 'يَنْحِتُونَ', lemma: 'نَحَتَ', pos: 'verb', features: 'impf.3mp', root: 'ن ح ت', gloss: 'to carve, hew; carve' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from, out of' },
            { surface: 'الْجِبَالِ', lemma: 'جَبَل', pos: 'noun', features: 'pl.def.gen', gloss: 'the mountains' },
            { surface: 'بُيُوتاً', lemma: 'بَيْت', pos: 'noun', features: 'pl.indef.acc', gloss: 'houses' },
            { surface: 'وَاسِعَةً', lemma: 'وَاسِع', pos: 'adj', features: 'indef.acc.f', root: 'و س ع', gloss: 'wide, spacious' },
            { surface: 'جَمِيلَةً', lemma: 'جَمِيل', pos: 'adj', features: 'indef.acc.f', gloss: 'beautiful' },
          ],
        },
        {
          id: 'qs-v5-c01-009',
          ar: 'وَيَنْقُشُونَ فِي الْحِجَارَةِ نُقُوشاً بَدِيعَةً.',
          en: 'and engrave wondrous carvings in the stone.',
          tokens: [
            { surface: 'وَيَنْقُشُونَ', lemma: 'نَقَشَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ن ق ش', gloss: 'to engrave, carve; and engrave' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْحِجَارَةِ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.gen', gloss: 'the stone' },
            { surface: 'نُقُوشاً', lemma: 'نَقْش', pos: 'noun', features: 'pl.indef.acc', root: 'ن ق ش', gloss: 'carvings, engravings' },
            { surface: 'بَدِيعَةً', lemma: 'بَدِيع', pos: 'adj', features: 'indef.acc.f', gloss: 'wondrous, marvelous' },
          ],
        },
        {
          id: 'qs-v5-c01-010',
          ar: 'وَقَدْ لَانَ لَهُمُ الْحَجَرُ بِعَقْلِهِمْ وَصِنَاعَتِهِمْ فَيَصْنَعُونَ بِهِ مَا يَصْنَعُ الإِنْسَانُ بِالشَّمْعِ.',
          en: 'Stone had grown soft in their hands through their intellect and skill, so that they worked it as a person works wax.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'لَانَ', lemma: 'لَانَ', pos: 'verb', features: 'perf.3ms', root: 'ل ي ن', gloss: 'to become soft, pliant; became soft' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'الْحَجَرُ', lemma: 'حَجَر', pos: 'noun', features: 'def.nom', gloss: 'the stone' },
            { surface: 'بِعَقْلِهِمْ', lemma: 'عَقْل', pos: 'noun', features: 'prep+gen+3mp', gloss: 'through their intellect' },
            { surface: 'وَصِنَاعَتِهِمْ', lemma: 'صِنَاعَة', pos: 'noun', features: 'conj+gen+3mp', gloss: 'and their craftsmanship' },
            { surface: 'فَيَصْنَعُونَ', lemma: 'صَنَعَ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to make; so they make' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'with it' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'يَصْنَعُ', lemma: 'صَنَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'makes' },
            { surface: 'الإِنْسَانُ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.nom', gloss: 'the person' },
            { surface: 'بِالشَّمْعِ', lemma: 'شَمْع', pos: 'noun', features: 'prep+def.gen', gloss: 'with wax' },
          ],
        },
        {
          id: 'qs-v5-c01-011',
          ar: 'وَإِذَا دَخَلَ الإِنْسَانُ مَدِينَتَهُمْ رَأَى عَجَباً،',
          en: 'If someone entered their city he would see wonders:',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and if, when' },
            { surface: 'دَخَلَ', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.3ms', gloss: 'to enter; entered' },
            { surface: 'الإِنْسَانُ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.nom', gloss: 'the person' },
            { surface: 'مَدِينَتَهُمْ', lemma: 'مَدِينَة', pos: 'noun', features: 'acc+3mp', gloss: 'their city' },
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', gloss: 'to see; would see' },
            { surface: 'عَجَباً', lemma: 'عَجَب', pos: 'noun', features: 'indef.acc', gloss: 'something amazing' },
          ],
        },
        {
          id: 'qs-v5-c01-012',
          ar: 'رَأَى قُصُوراً عَظِيمَةً كَالْجِبَالِ كَأَنَّمَا بَنَاهَا الْجِنُّ،',
          en: 'great palaces like mountains, as if the jinn had built them,',
          tokens: [
            { surface: 'رَأَى', lemma: 'رَأَى', pos: 'verb', features: 'perf.3ms', gloss: 'would see' },
            { surface: 'قُصُوراً', lemma: 'قَصْر', pos: 'noun', features: 'pl.indef.acc', gloss: 'palaces' },
            { surface: 'عَظِيمَةً', lemma: 'عَظِيم', pos: 'adj', features: 'indef.acc.f', gloss: 'great' },
            { surface: 'كَالْجِبَالِ', lemma: 'جَبَل', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'like the mountains' },
            { surface: 'كَأَنَّمَا', lemma: 'كَأَنَّمَا', pos: 'part', features: 'part', gloss: 'as if' },
            { surface: 'بَنَاهَا', lemma: 'بَنَى', pos: 'verb', features: 'perf.3ms+3fs', gloss: 'built it (them)' },
            { surface: 'الْجِنُّ', lemma: 'جِنّ', pos: 'noun', features: 'def.nom', gloss: 'the jinn' },
          ],
        },
        {
          id: 'qs-v5-c01-013',
          ar: 'وَرَأَى أَزْهَاراً جَمِيلَةً فِي الْجُدْرَانِ كَأَنَّمَا أَنْبَتَهَا الرَّبِيعُ.',
          en: 'and beautiful flowers on the walls, as if spring itself had grown them.',
          tokens: [
            { surface: 'وَرَأَى', lemma: 'رَأَى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and would see' },
            { surface: 'أَزْهَاراً', lemma: 'زَهْرَة', pos: 'noun', features: 'pl.indef.acc', root: 'ز ه ر', gloss: 'flowers' },
            { surface: 'جَمِيلَةً', lemma: 'جَمِيل', pos: 'adj', features: 'indef.acc.f', gloss: 'beautiful' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, on' },
            { surface: 'الْجُدْرَانِ', lemma: 'جِدَار', pos: 'noun', features: 'pl.def.gen', gloss: 'the walls' },
            { surface: 'كَأَنَّمَا', lemma: 'كَأَنَّمَا', pos: 'part', features: 'part', gloss: 'as if' },
            { surface: 'أَنْبَتَهَا', lemma: 'أَنْبَتَ', pos: 'verb', features: 'perf.3ms+3fs', root: 'ن ب ت', gloss: 'to grow, sprout (something); grew it (them)' },
            { surface: 'الرَّبِيعُ', lemma: 'رَبِيع', pos: 'noun', features: 'def.nom', gloss: 'the spring (season)' },
          ],
        },
        {
          id: 'qs-v5-c01-014',
          ar: 'وَقَدْ فَتَحَ اللَّهُ عَلَى ثَمُودَ بَرَكَاتٍ مِنَ السَّمَاءِ وَالأَرْضِ،',
          en: 'Allah had opened for Thamūd blessings from the sky and the earth,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'فَتَحَ', lemma: 'فَتَحَ', pos: 'verb', features: 'perf.3ms', gloss: 'to open; opened' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for, upon' },
            { surface: 'ثَمُودَ', lemma: 'ثَمُود', pos: 'proper', features: 'gen', gloss: 'Thamūd' },
            { surface: 'بَرَكَاتٍ', lemma: 'بَرَكَة', pos: 'noun', features: 'pl.indef.acc', gloss: 'blessings' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'السَّمَاءِ', lemma: 'سَمَاء', pos: 'noun', features: 'def.gen', gloss: 'the sky' },
            { surface: 'وَالأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'conj+def.gen', gloss: 'and the earth' },
          ],
        },
        {
          id: 'qs-v5-c01-015',
          ar: 'وَقَدْ فَتَحَ اللَّهُ عَلَى ثَمُودَ أَبْوَابَ كُلِّ شَيْءٍ.',
          en: 'opened for them the doors of everything.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'conj+part', gloss: 'and indeed' },
            { surface: 'فَتَحَ', lemma: 'فَتَحَ', pos: 'verb', features: 'perf.3ms', gloss: 'opened' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for, upon' },
            { surface: 'ثَمُودَ', lemma: 'ثَمُود', pos: 'proper', features: 'gen', gloss: 'Thamūd' },
            { surface: 'أَبْوَابَ', lemma: 'بَاب', pos: 'noun', features: 'pl.constr.acc', gloss: 'the doors of' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.gen', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v5-c01-016',
          ar: 'جَادَتْ لَهُمُ السَّمَاءُ بِالأَمْطَارِ،',
          en: 'The sky was generous to them with rain,',
          tokens: [
            { surface: 'جَادَتْ', lemma: 'جَادَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be generous; was generous' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to, for them' },
            { surface: 'السَّمَاءُ', lemma: 'سَمَاء', pos: 'noun', features: 'def.nom', gloss: 'the sky' },
            { surface: 'بِالأَمْطَارِ', lemma: 'مَطَر', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'with rains' },
          ],
        },
        {
          id: 'qs-v5-c01-017',
          ar: 'وَجَادَتْ لَهُمُ الأَرْضُ بِالنَّبَاتِ وَالأَزْهَارِ،',
          en: 'the earth with plants and flowers,',
          tokens: [
            { surface: 'وَجَادَتْ', lemma: 'جَادَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and was generous' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to, for them' },
            { surface: 'الأَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'def.nom', gloss: 'the earth' },
            { surface: 'بِالنَّبَاتِ', lemma: 'نَبَات', pos: 'noun', features: 'prep+def.gen', gloss: 'with plants' },
            { surface: 'وَالأَزْهَارِ', lemma: 'زَهْرَة', pos: 'noun', features: 'conj+pl.def.gen', root: 'ز ه ر', gloss: 'and flowers' },
          ],
        },
        {
          id: 'qs-v5-c01-018',
          ar: 'وَجَادَتْ لَهُمُ الْبَسَاتِينُ بِالْفَوَاكِهِ وَالأَثْمَارِ،',
          en: 'the orchards with fruit and produce,',
          tokens: [
            { surface: 'وَجَادَتْ', lemma: 'جَادَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and was generous' },
            { surface: 'لَهُمُ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to, for them' },
            { surface: 'الْبَسَاتِينُ', lemma: 'بُسْتَان', pos: 'noun', features: 'pl.def.nom', gloss: 'the orchards' },
            { surface: 'بِالْفَوَاكِهِ', lemma: 'فَاكِهَة', pos: 'noun', features: 'prep+pl.def.gen', gloss: 'with fruits' },
            { surface: 'وَالأَثْمَارِ', lemma: 'ثَمَر', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and produce' },
          ],
        },
        {
          id: 'qs-v5-c01-019',
          ar: 'وَبَارَكَ اللَّهُ لَهُمْ فِي الرِّزْقِ وَالأَعْمَارِ.',
          en: 'and Allah blessed them in provision and long life.',
          tokens: [
            { surface: 'وَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bless; and blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'them' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الرِّزْقِ', lemma: 'رِزْق', pos: 'noun', features: 'def.gen', gloss: 'provision' },
            { surface: 'وَالأَعْمَارِ', lemma: 'عُمْر', pos: 'noun', features: 'conj+pl.def.gen', gloss: 'and lifespans' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَتْ أَرْضُ ثَمُودَ؟',
          options: ['كَانَتْ أَرْضاً جَمِيلَةً خَضْرَاءَ فِيهَا بَسَاتِينُ وَعُيُونٌ وَجَنَّاتٌ', 'كَانَتْ أَرْضاً قَاحِلَةً لَا نَبَاتَ فِيهَا', 'كَانَتْ صَحْرَاءَ وَاسِعَةً'],
          answer: 0,
          qEn: "What was Thamūd's land like?",
          optionsEn: ['A beautiful, green land with orchards, springs, and gardens', 'A barren land with no plants at all', 'A vast desert'],
        },
        {
          q: 'بِمَاذَا كَانَتْ ثَمُودُ تَصْنَعُ بُيُوتَهَا؟',
          options: ['كَانُوا يَنْحِتُونَ الْبُيُوتَ مِنَ الْجِبَالِ', 'كَانُوا يَبْنُونَهَا مِنَ الطِّينِ', 'كَانُوا يَشْتَرُونَهَا مِنْ عَادٍ'],
          answer: 0,
          qEn: 'How did Thamūd make their houses?',
          optionsEn: ['They carved them out of the mountains', 'They built them from clay', 'They bought them from ʿĀd'],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ لِثَمُودَ؟',
          options: ['فَتَحَ عَلَيْهِمْ بَرَكَاتٍ مِنَ السَّمَاءِ وَالأَرْضِ', 'مَنَعَ عَنْهُمُ الْمَطَرَ', 'أَرْسَلَ إِلَيْهِمُ الْعَذَابَ فَوْراً'],
          answer: 0,
          qEn: 'What did Allah do for Thamūd?',
          optionsEn: ['He opened blessings for them from the sky and the earth', 'He withheld rain from them', 'He sent them the punishment right away'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَتْ أَرْضُ ثَمُودَ أَيْضاً',
        post: 'جَمِيلَةً خَضْرَاءَ.',
        en: "Thamūd's land, too, was a beautiful, green land.",
        options: ['أَرْضاً', 'أَرْضٌ', 'أَرْضِ', 'أَرَاضٍ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- predicate of كَانَتْ.',
          'Nominative -- wrong case; the predicate of كَانَتْ is accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Plural -- wrong number; a single land is meant.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَقَدْ',
        post: 'لَهُمُ الْحَجَرُ بِعَقْلِهِمْ وَصِنَاعَتِهِمْ.',
        en: 'Stone had grown soft in their hands through their intellect and skill.',
        options: ['لَانَ', 'يَلِينُ', 'لَيِّنٌ', 'لَانَتْ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine singular -- matches الْحَجَرُ (masculine) and the report is about the past.',
          'Imperfect -- wrong tense; the report is in the past.',
          'An adjective, not a verb -- cannot itself carry the sentence.',
          'Feminine -- wrong gender; الْحَجَرُ is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'جَادَتْ لَهُمُ السَّمَاءُ',
        post: '.',
        en: 'The sky was generous to them with rain.',
        options: ['بِالأَمْطَارِ', 'الأَمْطَارُ', 'بِالأَمْطَارَ', 'لِلأَمْطَارِ'],
        answer: 0,
        rationales: [
          'Genitive after بِ -- the preposition the text uses governs the genitive.',
          'Nominative -- wrong case; and missing the بِ the sentence needs.',
          'Accusative -- wrong case for the object of a preposition.',
          'Wrong preposition -- the text uses بِ, not لِ, here.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَنْحِتُ الرَّجُلُ بَيْتاً',
        pre: '',
        post: 'بَيْتاً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَنْحِتُ', 'يَنْحِتُ', 'تَنْحِتُ', 'نَنْحِتُ'],
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
        base: 'يَنْحِتُ الرَّجُلُ بَيْتاً',
        pre: '',
        post: 'بَيْتاً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَنْحِتُ', 'يَنْحِتُ', 'أَنْحِتُ', 'نَنْحِتُ'],
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
        base: 'يَنْحِتُ الرَّجُلُ بَيْتاً',
        pre: '',
        post: 'بَيْتاً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَنْحِتُونَ', 'يَنْحِتُ', 'تَنْحِتُ', 'نَنْحِتُ'],
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

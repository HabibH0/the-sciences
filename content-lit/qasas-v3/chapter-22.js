// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 22 (FINAL CHAPTER
// of this volume) -- بَعْدَ الطُّوفَانِ. Printed page 82 only, from its own
// heading (right after ch21's closing supplication) down to the very
// bottom of the page, where the whole volume ends. Transcribed by hand
// from the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// IMPORTANT for future maintainers: page 83 begins an entirely
// DIFFERENT book, «الْعَاصِفَةُ» ("The Storm/Hurricane," about the people
// of ʿĀd and, presumably, Prophet Hūd), with its own chapter numbering
// restarting at 1 -- confirmed by rendering and reading page 83 before
// closing out this chapter, per house practice of always checking the
// page after a chapter's apparent last page. That book is NOT part of
// سَفِينَةُ نُوحٍ (volume 3) and is out of scope for this shell -- per
// the standing instruction for this project, work stops here once
// volume 3 is complete. Do NOT create a qasas-v4 book shell or begin
// transcribing «الْعَاصِفَةُ» without being explicitly asked.
//
// Once what Allah willed came to pass and the disbelievers had
// drowned, the sky held back and the water receded, and the ship came
// to rest on Mount Jūdī -- with the Qur'an's own words woven in
// (Sūrat Hūd 11:44): "and it was said: away with the wrongdoing
// people!" It was said, "O Nūḥ, disembark in peace" -- and Nūḥ and the
// people of the ship disembarked, walking on dry land in peace. The
// disbelievers of Nūḥ's people had perished, and neither sky nor earth
// wept for them. Allah blessed Nūḥ's offspring, so they spread across
// the earth and filled it -- nations lived there, and among them were
// prophets and kings. The chapter, and the whole story of Nūḥ, closes
// with the Qur'an's own salutation (Sūrat as-Saffat 37:79), printed
// twice in the source as a closing refrain: "Peace be upon Nūḥ among
// the worlds."
//
// Grammar / lexical notes:
//   -- Long printed sentences are split at their natural clause/comma
//      boundary into multiple shorter entries here (house convention,
//      ch7/ch9/ch10/ch12-21) -- no rewording, same printed text and
//      order. The narrated line وَاسْتَوَتِ السَّفِينَةُ عَلَى جَبَلِ الْجُودِيِّ is
//      kept separate from the ﴿﴾-wrapped Qur'an fragment that follows
//      it in the same printed sentence, matching the corpus's existing
//      practice of not merging narration with a Qur'an quotation into
//      one sentence entry (see ch18's header note).
//   -- qs-v3-c22-003 (وَقِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ.) echoes Qur'anic
//      phrasing (cf. Hūd 11:48) but is printed WITHOUT ﴿﴾ marks in the
//      source -- confirmed by close inspection of the scan -- so it is
//      transcribed here as plain narration, not tagged as a direct
//      quotation, exactly matching what is actually printed.
//   -- قِيلَ/وَقِيلَ (qs-v3-c22-004, qs-v3-c22-003) is tagged under the
//      existing lemma قَالَ with the documented passive atom, e.g.
//      'conj+perf.pass.3ms' -- matching the corpus's established
//      perfect-passive convention (e.g. qasas-v2 ch12's وَصُلِبَ,
//      qasas-v1 ch14's imperfect passive), not a new lemma.
//   -- The closing ayah (Sūrat as-Saffat 37:79, qs-v3-c22-012/013) is
//      printed TWICE, back to back, identically, in the source scan --
//      preserved here as two separate sentence entries rather than
//      silently deduplicated, since house practice is to transcribe
//      exactly what is printed.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَمَّا، كَانَ، مَا،
//      أَرَادَ، اللَّه، كَافِر (كُفَّار), أَمْسَكَ، سَمَاء، مَاء، جَبَل، قَوْم، ظَالِم،
//      يَا، نُوح، صَاحِب (أَصْحَاب), سَفِينَة، مَشَى، أَرْض، بَكَى، بَارَكَ، فِي،
//      ذُرِّيَّة، اِنْتَشَرَ، أُمَّة، أَنْبِيَاء (نَبِيّ), مَلِك، سَلَام، عَالَم، عَلَى، مِنْ
//      are all already taught and are NOT re-listed in newWords here.
//
// 8 new words (غَرِقَ، غَارَ، اِسْتَوَى، جُودِيّ، هَبَطَ، بُعْد، بَرّ، مَلأَ) -- a
// shorter, gentler word-list than the last several chapters, fitting a
// single-page closing chapter that leans on vocabulary already built
// up over the whole volume.
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch22',
  title: { ar: 'بَعْدَ الطُّوفَانِ', en: 'After the Flood' },
  newWords: ['غَرِقَ', 'غَارَ', 'اِسْتَوَى', 'جُودِيّ', 'هَبَطَ', 'بُعْد', 'بَرّ', 'مَلأَ'],
  lemmas: {
    غَرِقَ: { gloss: 'to sink, drown' },
    غَارَ: { gloss: 'to recede, sink away' },
    اِسْتَوَى: { gloss: 'to settle, come to rest' },
    جُودِيّ: { gloss: 'Jūdī (a mountain)' },
    هَبَطَ: { gloss: 'to descend, disembark' },
    بُعْد: { gloss: 'destruction, perdition; away (with)!' },
    بَرّ: { gloss: 'dry land' },
    مَلأَ: { gloss: 'to fill' },
  },
  paragraphs: [
    {
      en: "And when what Allah willed came to pass, and the disbelievers had drowned, the sky held back and the water receded. And the ship came to rest on Mount Jūdī -- \"and it was said: away with the wrongdoing people!\" And it was said: O Nūḥ, disembark in peace. And Nūḥ and the people of the ship disembarked, walking on dry land in peace. And the disbelievers of Nūḥ's people perished, and neither sky nor earth wept for them. And Allah blessed Nūḥ's offspring, so they spread across the earth and filled the earth. And nations lived there, and there were prophets and kings among them. \"Peace be upon Nūḥ among the worlds.\" \"Peace be upon Nūḥ among the worlds.\"",
      sentences: [
        {
          id: 'qs-v3-c22-001',
          ar: 'وَلَمَّا كَانَ مَا أَرَادَهُ اللَّهُ وَغَرِقَ الْكُفَّارُ',
          en: 'And when what Allah willed came to pass, and the disbelievers had drowned,',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'conj', features: 'conj+conj', gloss: 'and when' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be, come to pass; came to pass' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'أَرَادَهُ', lemma: 'أَرَادَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to want; He willed it' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'وَغَرِقَ', lemma: 'غَرِقَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ ر ق', gloss: 'to sink, drown; and drowned' },
            { surface: 'الْكُفَّارُ', lemma: 'كَافِر', pos: 'noun', features: 'pl.def.nom', gloss: 'the disbelievers' },
          ],
        },
        {
          id: 'qs-v3-c22-002',
          ar: 'أَمْسَكَتِ السَّمَاءُ وَغَارَ الْمَاءُ.',
          en: 'the sky held back and the water receded.',
          tokens: [
            { surface: 'أَمْسَكَتِ', lemma: 'أَمْسَكَ', pos: 'verb', features: 'perf.3fs', gloss: 'to hold, withhold; held back' },
            { surface: 'السَّمَاءُ', lemma: 'سَمَاء', pos: 'noun', features: 'def.nom', gloss: 'the sky' },
            { surface: 'وَغَارَ', lemma: 'غَارَ', pos: 'verb', features: 'conj+perf.3ms', root: 'غ و ر', gloss: 'to recede, sink away; and receded' },
            { surface: 'الْمَاءُ', lemma: 'مَاء', pos: 'noun', features: 'def.nom', gloss: 'the water' },
          ],
        },
        {
          id: 'qs-v3-c22-003',
          ar: 'وَاسْتَوَتِ السَّفِينَةُ عَلَى جَبَلِ الْجُودِيِّ',
          en: 'And the ship came to rest on Mount Jūdī --',
          tokens: [
            { surface: 'وَاسْتَوَتِ', lemma: 'اِسْتَوَى', pos: 'verb', features: 'conj+perf.3fs', root: 'س و ي', gloss: 'to settle, come to rest; and came to rest' },
            { surface: 'السَّفِينَةُ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.nom', gloss: 'the ship' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'جَبَلِ', lemma: 'جَبَل', pos: 'noun', features: 'gen.constr', gloss: 'the mountain of' },
            { surface: 'الْجُودِيِّ', lemma: 'جُودِيّ', pos: 'proper', features: 'gen', gloss: 'Jūdī' },
          ],
        },
        {
          id: 'qs-v3-c22-004',
          ar: '﴿وَقِيلَ بُعْداً لِلْقَوْمِ الظَّالِمِينَ﴾.',
          en: '"and it was said: away with the wrongdoing people!"',
          tokens: [
            { surface: 'وَقِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.pass.3ms', gloss: 'to say; and it was said' },
            { surface: 'بُعْداً', lemma: 'بُعْد', pos: 'noun', features: 'indef.acc', root: 'ب ع د', gloss: 'destruction, away (with)!' },
            { surface: 'لِلْقَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'prep+def.gen', gloss: 'for/with the people' },
            { surface: 'الظَّالِمِينَ', lemma: 'ظَالِم', pos: 'noun', features: 'pl.def.gen', gloss: 'the wrongdoers' },
          ],
        },
        {
          id: 'qs-v3-c22-005',
          ar: 'وَقِيلَ يَا نُوحُ اهْبِطْ بِسَلَامٍ.',
          en: 'And it was said: O Nūḥ, disembark in peace.',
          tokens: [
            { surface: 'وَقِيلَ', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.pass.3ms', gloss: 'to say; and it was said' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'نُوحُ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'اهْبِطْ', lemma: 'هَبَطَ', pos: 'verb', features: 'imp.2ms', root: 'ه ب ط', gloss: 'to descend, disembark; disembark!' },
            { surface: 'بِسَلَامٍ', lemma: 'سَلَام', pos: 'noun', features: 'prep+indef.gen', gloss: 'in peace' },
          ],
        },
        {
          id: 'qs-v3-c22-006',
          ar: 'وَهَبَطَ نُوحٌ وَأَصْحَابُ السَّفِينَةِ يَمْشُونَ عَلَى الْبَرِّ بِسَلَامٍ.',
          en: 'And Nūḥ and the people of the ship disembarked, walking on dry land in peace.',
          tokens: [
            { surface: 'وَهَبَطَ', lemma: 'هَبَطَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to descend, disembark; and disembarked' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'وَأَصْحَابُ', lemma: 'صَاحِب', pos: 'noun', features: 'conj+pl.nom.constr', gloss: 'and the people of' },
            { surface: 'السَّفِينَةِ', lemma: 'سَفِينَة', pos: 'noun', features: 'def.gen', gloss: 'the ship' },
            { surface: 'يَمْشُونَ', lemma: 'مَشَى', pos: 'verb', features: 'impf.3mp', gloss: 'to walk; walking' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'الْبَرِّ', lemma: 'بَرّ', pos: 'noun', features: 'def.gen', root: 'ب ر ر', gloss: 'the dry land' },
            { surface: 'بِسَلَامٍ', lemma: 'سَلَام', pos: 'noun', features: 'prep+indef.gen', gloss: 'in peace' },
          ],
        },
        {
          id: 'qs-v3-c22-007',
          ar: 'وَهَلَكَ الْكُفَّارُ مِنْ قَوْمِ نُوحٍ',
          en: "And the disbelievers of Nūḥ's people perished,",
          tokens: [
            { surface: 'وَهَلَكَ', lemma: 'هَلَكَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to perish; and perished' },
            { surface: 'الْكُفَّارُ', lemma: 'كَافِر', pos: 'noun', features: 'pl.def.nom', gloss: 'the disbelievers' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'gen.constr', gloss: 'the people of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c22-008',
          ar: 'فَمَا بَكَتْ عَلَيْهِمُ السَّمَاءُ وَالأَرْضُ.',
          en: 'and neither sky nor earth wept for them.',
          tokens: [
            { surface: 'فَمَا', lemma: 'مَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'بَكَتْ', lemma: 'بَكَى', pos: 'verb', features: 'perf.3fs', gloss: 'to weep; wept' },
            { surface: 'عَلَيْهِمُ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'السَّمَاءُ', lemma: 'سَمَاء', pos: 'noun', features: 'def.nom', gloss: 'the sky' },
            { surface: 'وَالأَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'conj+def.nom', gloss: 'and the earth' },
          ],
        },
        {
          id: 'qs-v3-c22-009',
          ar: 'وَبَارَكَ اللَّهُ فِي ذُرِّيَّةِ نُوحٍ',
          en: "And Allah blessed Nūḥ's offspring,",
          tokens: [
            { surface: 'وَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bless; and blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذُرِّيَّةِ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'gen.constr', gloss: 'the offspring of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
          ],
        },
        {
          id: 'qs-v3-c22-010',
          ar: 'فَانْتَشَرَتْ فِي الأَرْضِ وَمَلأَتِ الأَرْضَ.',
          en: 'so they spread across the earth and filled the earth.',
          tokens: [
            { surface: 'فَانْتَشَرَتْ', lemma: 'اِنْتَشَرَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to spread out; so spread out' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'across, in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
            { surface: 'وَمَلأَتِ', lemma: 'مَلأَ', pos: 'verb', features: 'conj+perf.3fs', root: 'م ل أ', gloss: 'to fill; and filled' },
            { surface: 'الأَرْضَ', lemma: 'أَرْض', pos: 'noun', features: 'def.acc', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v3-c22-011',
          ar: 'وَكَانَ فِيهَا أُمَمٌ وَكَانَ فِيهَا أَنْبِيَاءُ وَمُلُوكٌ.',
          en: 'And nations lived there, and there were prophets and kings among them.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be, live; and there were' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it (i.e. the earth)' },
            { surface: 'أُمَمٌ', lemma: 'أُمَّة', pos: 'noun', features: 'pl.indef.nom', gloss: 'nations' },
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and there were' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'أَنْبِيَاءُ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.indef.nom', gloss: 'prophets' },
            { surface: 'وَمُلُوكٌ', lemma: 'مَلِك', pos: 'noun', features: 'conj+pl.indef.nom', gloss: 'and kings' },
          ],
        },
        {
          id: 'qs-v3-c22-012',
          ar: '﴿سَلَامٌ عَلَى نُوحٍ فِي الْعَالَمِينَ﴾.',
          en: '"Peace be upon Nūḥ among the worlds."',
          tokens: [
            { surface: 'سَلَامٌ', lemma: 'سَلَام', pos: 'noun', features: 'indef.nom', gloss: 'peace' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v3-c22-013',
          ar: '﴿سَلَامٌ عَلَى نُوحٍ فِي الْعَالَمِينَ﴾.',
          en: '"Peace be upon Nūḥ among the worlds."',
          tokens: [
            { surface: 'سَلَامٌ', lemma: 'سَلَام', pos: 'noun', features: 'indef.nom', gloss: 'peace' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'upon' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the worlds' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ لِلسَّمَاءِ وَالْمَاءِ بَعْدَ أَنْ غَرِقَ الْكُفَّارُ؟',
          options: [
            'أَمْسَكَتِ السَّمَاءُ وَغَارَ الْمَاءُ',
            'اسْتَمَرَّتِ السَّمَاءُ فِي الْمَطَرِ أَرْبَعِينَ يَوْماً أُخْرَى',
            'لَمْ يَتَغَيَّرْ شَيْءٌ'
          ],
          answer: 0,
          qEn: 'What happened to the sky and the water after the disbelievers drowned?',
          optionsEn: [
            'The sky held back and the water receded',
            'The sky kept raining for another forty days',
            'Nothing changed'
          ],
        },
        {
          q: 'أَيْنَ اسْتَوَتِ السَّفِينَةُ، وَبِمَاذَا قِيلَ لِنُوحٍ؟',
          options: [
            'اسْتَوَتْ عَلَى جَبَلِ الْجُودِيِّ، وَقِيلَ لَهُ: يَا نُوحُ اهْبِطْ بِسَلَامٍ',
            'اسْتَوَتْ عَلَى جَبَلِ عَرَفَاتَ، وَقِيلَ لَهُ: انْتَظِرْ هُنَا',
            'لَمْ تَسْتَوِ السَّفِينَةُ عَلَى أَيِّ جَبَلٍ'
          ],
          answer: 0,
          qEn: 'Where did the ship come to rest, and what was said to Nūḥ?',
          optionsEn: [
            'It came to rest on Mount Jūdī, and he was told: O Nūḥ, disembark in peace',
            'It came to rest on Mount ʿArafāt, and he was told: wait here',
            'The ship did not come to rest on any mountain'
          ],
        },
        {
          q: 'مَاذَا فَعَلَ اللَّهُ بِذُرِّيَّةِ نُوحٍ بَعْدَ الطُّوفَانِ؟',
          options: [
            'بَارَكَ اللَّهُ فِيهَا فَانْتَشَرَتْ فِي الأَرْضِ وَمَلأَتْهَا، وَكَانَ فِيهَا أَنْبِيَاءُ وَمُلُوكٌ',
            'أَبْقَاهَا قَلِيلَةً فِي مَكَانٍ وَاحِدٍ',
            'لَمْ يَذْكُرِ الْكِتَابُ شَيْئاً عَنْهَا'
          ],
          answer: 0,
          qEn: "What did Allah do with Nūḥ's offspring after the Flood?",
          optionsEn: [
            'Allah blessed them so they spread across the earth and filled it, and among them were prophets and kings',
            'He kept them few, in a single place',
            'The book says nothing about them'
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَلَمَّا كَانَ مَا أَرَادَهُ اللَّهُ وَغَرِقَ الْكُفَّارُ',
        post: 'السَّمَاءُ وَغَارَ الْمَاءُ.',
        en: 'And when what Allah willed came to pass and the disbelievers drowned, the sky held back and the water receded.',
        options: ['أَمْسَكَتِ', 'أَمْسَكَ', 'تُمْسِكُ', 'أَمْسِكِي'],
        answer: 0,
        rationales: [
          '3rd feminine singular perfect -- matches the printed أَمْسَكَتِ السَّمَاءُ, since السَّمَاء is grammatically feminine.',
          '3rd masculine singular -- wrong gender; السَّمَاء takes a feminine verb.',
          'Imperfect -- wrong tense; this narrates a completed past event.',
          'Feminine singular imperative -- wrong mood; this is a narrated statement, not a command.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَاسْتَوَتِ السَّفِينَةُ عَلَى جَبَلِ الْجُودِيِّ، وَقِيلَ',
        post: 'اهْبِطْ بِسَلَامٍ.',
        en: 'And the ship came to rest on Mount Jūdī, and it was said: O Nūḥ, disembark in peace.',
        options: ['يَا نُوحُ', 'يَا نُوحاً', 'نُوحٌ', 'يَانُوحَ'],
        answer: 0,
        rationales: [
          'Vocative particle يَا + nominative نُوحُ -- matches the printed يَا نُوحُ, directly addressing Nūḥ.',
          'Accusative نُوحاً after يَا -- wrong case; a bare proper-noun vocative like this stays nominative.',
          'No vocative particle -- incomplete; the printed text includes يَا before the name.',
          'Accusative form fused to يَا -- wrong case for this vocative construction.',
        ],
      },
      {
        type: 'cloze',
        pre: 'بَارَكَ اللَّهُ فِي ذُرِّيَّةِ نُوحٍ فَانْتَشَرَتْ فِي الأَرْضِ',
        post: 'الأَرْضَ.',
        en: "Allah blessed Nūḥ's offspring, so they spread across the earth and filled the earth.",
        options: ['وَمَلأَتِ', 'وَمَلأَ', 'وَمُلِئَتْ', 'وَتَمْلَأُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular perfect, active -- "and filled," matching the printed وَمَلأَتِ الأَرْضَ, since ذُرِّيَّة (the subject) is feminine.',
          '3rd masculine singular -- wrong gender; the subject ذُرِّيَّة is feminine.',
          'Passive -- wrong voice; the offspring are the ones doing the filling, not being filled.',
          'Imperfect -- wrong tense; this narrates a completed past event.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَهْبِطُ نُوحٌ بِسَلَامٍ',
        pre: '',
        post: 'بِسَلَامٍ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m)',
        options: ['تَهْبِطُ', 'يَهْبِطُ', 'أَهْبِطُ', 'نَهْبِطُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular imperfect -- matches أَنْتَ.',
          '3rd masculine singular -- the base form, not shifted to "you."',
          '1st singular -- wrong person; the target is "you," not "I."',
          '1st plural -- wrong person; the target is "you," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَبَارِكُ اللَّهُ فِي ذُرِّيَّةِ نُوحٍ',
        pre: '',
        post: 'فِي ذُرِّيَّةِ نُوحٍ',
        targetPerson: 'هُم',
        targetEn: 'they (m)',
        options: ['يُبَارِكُونَ', 'يُبَارِكُ', 'تُبَارِكُ', 'نُبَارِكُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُم.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '3rd/2nd feminine singular -- wrong person and number.',
          '1st plural -- wrong person; the target is "they," not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'تَنْتَشِرُ الذُّرِّيَّةُ فِي الأَرْضِ',
        pre: '',
        post: 'فِي الأَرْضِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَنْتَشِرُ', 'تَنْتَشِرُ', 'يَنْتَشِرُ', 'نَنْتَشِرُ'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd feminine singular -- the base form, not shifted to "I."',
          '3rd masculine singular -- wrong person and gender.',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
    ],
  },
};

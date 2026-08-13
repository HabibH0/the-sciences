// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 1 -- بَعْدَ نُوحٍ.
// Printed pages 83 (from the volume-title box, straight into ch1's own box
// on the same page -- see QASAS_AGENT_BRIEF.md §1) - 84 (top, ending before
// ch2's heading كُفْرَانُ عَادٍ). Transcribed by hand from a 200dpi render
// against ../CHAPTER-FORMAT.md.
//
// Opens the ʿĀd story as a direct echo of qasas-v3 ch1's opening (بَارَكَ
// اللَّهُ فِي ذُرِّيَّةِ آدَمَ...): ʿĀd, Nūḥ's blessed and multiplying offspring,
// grow into a nation of towering physical strength and material prosperity.
// No Qur'anic quotation on these pages -- pure narrative.
//
// Grammar / lexical notes:
//   -- يُقَالُ (qs-v4-c01-002) is passive imperfect, following the precedent
//      already set by qs-v2-c19's تُغْلَبُوا and qasas-v3 ch1's قِيلَ
//      (passive perfect) -- tagged pass+impf.3ms, pass ordered first per
//      that precedent.
//   -- عَادٌ and هُودٌ (introduced ch5) are proper nouns and, per the
//      established convention (qasas-v2 ch1 does not list يُوسُف or يَعْقُوب
//      in newWords despite introducing them), are NOT added to newWords --
//      only common vocabulary is tracked there. Each still gets its own
//      lemmas entry for the word-card fallback gloss.
//   -- أَجْسَامُهُمْ كَأَنَّهَا مِنْ حَدِيدٍ (qs-v4-c01-004): كَأَنَّ takes a fem.
//      singular attached pronoun (هَا) referring back to the broken plural
//      أَجْسَام (non-human plural agreeing feminine singular) -- tagged
//      pos:'part', features 'part+3fs', the same trailing-person-as-clitic
//      convention used throughout.
//   -- Every كَانَ / كَانَتْ clause in this chapter agrees with its subject's
//      grammatical gender (فَكَانَتْ إِبِلُ عَادٍ..., وَكَانَتْ خَيْلُ عَادٍ...,
//      وَكَانَتْ أَوْلَادُ عَادٍ... -- all non-human plurals/collectives take
//      feminine singular verb agreement), while خَرَجَ الأَطْفَالُ keeps the
//      verb-subject order's default masculine singular even though أَطْفَال
//      is a human plural -- tags follow the printed surface form in each
//      case, not a normalized "should be" agreement.
//   -- خَضْرَاءَ (qs-v4-c01-013) is the diptote feminine of أَخْضَر (color
//      pattern أَفْعَل), so its accusative has no tanwīn on the page. Tagged
//      indef.acc.f like an ordinary adjective for consistency with the rest
//      of the corpus -- the app has no separate diptote atom, and the
//      build-stage case-swap heuristic only cares about the visible vowel.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6, checked against
//      content-lit/*/chapter-*.js): بَارَكَ، اللَّه، فِي، ذُرِّيَّة، أُمَّة، كَانَ،
//      رَجُل، قَوِيّ، جِسْم -- wait, جِسْم is NOT previously taught (see below);
//      كُلّ، وَاحِد، أَحَد، لَا، خَافَ، شَيْء، غَلَبَ، جَمِيل، جِدًّا، أَرْض، كَثِير،
//      أَخْضَر، طِفْل، صَبَاح، لَعِبَ are all already taught and NOT re-listed.
//   -- 12 new words this chapter: جِسْم، حَدِيد، غَنَم، إِبِل، مَلَأَ، وَادِي، خَيْل،
//      مَيْدَان، مَنْظَر، مَرْعَى، بُسْتَان، عَيْن (عَيْن reused in the "spring" sense --
//      its existing gloss from qasas-v2 ch23 was "the eye of"; the lemma is
//      the same word, so it is NOT re-listed as new here, only the sense
//      noted in its own token gloss). That brings the true new-word count to
//      11: جِسْم، حَدِيد، غَنَم، إِبِل، مَلَأَ، وَادِي، خَيْل، مَيْدَان، مَنْظَر، مَرْعَى، بُسْتَان.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch1',
  title: { ar: 'بَعْدَ نُوحٍ', en: 'After Nūḥ' },
  newWords: [
    'جِسْم', 'حَدِيد', 'غَنَم', 'إِبِل', 'مَلَأَ', 'وَادِي', 'خَيْل', 'مَيْدَان', 'مَنْظَر', 'مَرْعَى', 'بُسْتَان',
  ],
  lemmas: {
    'عَاد': { gloss: "ʿĀd (the nation descended from Nūḥ)" },
    'جِسْم': { gloss: 'body' },
    'حَدِيد': { gloss: 'iron' },
    'غَنَم': { gloss: 'sheep, flock' },
    'إِبِل': { gloss: 'camels' },
    'مَلَأَ': { gloss: 'to fill' },
    'وَادِي': { gloss: 'valley' },
    'خَيْل': { gloss: 'horses' },
    'مَيْدَان': { gloss: 'arena, open field' },
    'مَنْظَر': { gloss: 'sight, view' },
    'مَرْعَى': { gloss: 'pasture' },
    'بُسْتَان': { gloss: 'garden' },
  },
  paragraphs: [
    {
      en: "Allah blessed Nūḥ's offspring, and it spread across the earth. Among them arose a nation called ʿĀd -- strong men whose bodies were as if made of iron, who overcame everyone and were overcome by no one, fearing no one while everyone feared them. Allah blessed ʿĀd in everything: their camels and flocks filled the valley, their horses filled the arena, their children filled the houses. When their camels and flocks went out to pasture, or their children went out in the morning to play, it made a very beautiful sight. ʿĀd's land was likewise a beautiful, green land, with many gardens and springs in it.",
      sentences: [
        {
          id: 'qs-v4-c01-001',
          ar: 'بَارَكَ اللَّهُ فِي ذُرِّيَّةِ نُوحٍ فَانْتَشَرَتْ فِي الأَرْضِ.',
          en: "Allah blessed Nūḥ's offspring, and it spread across the earth.",
          tokens: [
            { surface: 'بَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'perf.3ms', gloss: 'to bless; blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ذُرِّيَّةِ', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'constr.gen', root: 'ذ ر أ', gloss: 'the offspring of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'فَانْتَشَرَتْ', lemma: 'اِنْتَشَرَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ن ش ر', gloss: 'to spread, scatter; and spread' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أَرْض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qs-v4-c01-002',
          ar: 'وَكَانَ مِنْهَا أُمَّةٌ يُقَالُ لَهَا عَادٌ.',
          en: 'Among them arose a nation called ʿĀd.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'مِنْهَا', lemma: 'مِنْ', pos: 'prep', features: 'prep+3fs', gloss: 'from it, among them' },
            { surface: 'أُمَّةٌ', lemma: 'أُمَّة', pos: 'noun', features: 'indef.nom', root: 'أ م م', gloss: 'a nation' },
            { surface: 'يُقَالُ', lemma: 'قَالَ', pos: 'verb', features: 'pass+impf.3ms', root: 'ق و ل', gloss: 'to say; is called' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'to it' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
          ],
        },
        {
          id: 'qs-v4-c01-003',
          ar: 'وَكَانُوا رِجَالاً أَقْوِيَاءَ،',
          en: 'They were strong men,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and they were' },
            { surface: 'رِجَالاً', lemma: 'رَجُل', pos: 'noun', features: 'pl.indef.acc', gloss: 'men' },
            { surface: 'أَقْوِيَاءَ', lemma: 'قَوِيّ', pos: 'adj', features: 'pl.indef.acc', gloss: 'strong, powerful' },
          ],
        },
        {
          id: 'qs-v4-c01-004',
          ar: 'أَجْسَامُهُمْ كَأَنَّهَا مِنْ حَدِيدٍ يَغْلِبُونَ كُلَّ وَاحِدٍ وَلَا يَغْلِبُهُمْ أَحَدٌ.',
          en: 'their bodies as if made of iron -- they overcame everyone, and no one overcame them.',
          tokens: [
            { surface: 'أَجْسَامُهُمْ', lemma: 'جِسْم', pos: 'noun', features: 'pl.nom+3mp', gloss: 'their bodies' },
            { surface: 'كَأَنَّهَا', lemma: 'كَأَنَّ', pos: 'part', features: 'part+3fs', gloss: 'as if it (were)' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, from' },
            { surface: 'حَدِيدٍ', lemma: 'حَدِيد', pos: 'noun', features: 'indef.gen', gloss: 'iron' },
            { surface: 'يَغْلِبُونَ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3mp', gloss: 'to overcome; they overcame' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'وَاحِدٍ', lemma: 'وَاحِد', pos: 'noun', features: 'indef.gen', gloss: 'one' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَغْلِبُهُمْ', lemma: 'غَلَبَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to overcome; overcame them' },
            { surface: 'أَحَدٌ', lemma: 'أَحَد', pos: 'noun', features: 'indef.nom', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v4-c01-005',
          ar: 'وَلَا يَخَافُونَ أَحَداً وَيَخَافُهُمْ كُلُّ أَحَدٍ.',
          en: 'They feared no one, and everyone feared them.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'to fear; they feared' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
            { surface: 'وَيَخَافُهُمْ', lemma: 'خَافَ', pos: 'verb', features: 'conj+impf.3ms+3mp', gloss: 'to fear; and feared them' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'أَحَدٍ', lemma: 'أَحَد', pos: 'noun', features: 'indef.gen', gloss: 'one' },
          ],
        },
        {
          id: 'qs-v4-c01-006',
          ar: 'وَبَارَكَ اللَّهُ لِعَادٍ فِي كُلِّ شَيْءٍ،',
          en: 'Allah blessed ʿĀd in everything,',
          tokens: [
            { surface: 'وَبَارَكَ', lemma: 'بَارَكَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to bless; and blessed' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'لِعَادٍ', lemma: 'عَاد', pos: 'proper', features: 'prep+gen', gloss: 'to ʿĀd, for ʿĀd' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'كُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شَيْء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
          ],
        },
        {
          id: 'qs-v4-c01-007',
          ar: 'فَكَانَتْ إِبِلُ عَادٍ وَغَنَمُهَا تَمْلَأُ الْوَادِي.',
          en: 'so their camels and flocks filled the valley.',
          tokens: [
            { surface: 'فَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'إِبِلُ', lemma: 'إِبِل', pos: 'noun', features: 'constr.nom', gloss: 'the camels of' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'وَغَنَمُهَا', lemma: 'غَنَم', pos: 'noun', features: 'conj+nom+3fs', gloss: 'and their flock' },
            { surface: 'تَمْلَأُ', lemma: 'مَلَأَ', pos: 'verb', features: 'impf.3fs', gloss: 'to fill; filled' },
            { surface: 'الْوَادِي', lemma: 'وَادِي', pos: 'noun', features: 'def.acc', gloss: 'the valley' },
          ],
        },
        {
          id: 'qs-v4-c01-008',
          ar: 'وَكَانَتْ خَيْلُ عَادٍ تَمْلَأُ الْمَيْدَانَ.',
          en: "ʿĀd's horses filled the arena.",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'خَيْلُ', lemma: 'خَيْل', pos: 'noun', features: 'constr.nom', gloss: 'the horses of' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'تَمْلَأُ', lemma: 'مَلَأَ', pos: 'verb', features: 'impf.3fs', gloss: 'to fill; filled' },
            { surface: 'الْمَيْدَانَ', lemma: 'مَيْدَان', pos: 'noun', features: 'def.acc', gloss: 'the arena' },
          ],
        },
        {
          id: 'qs-v4-c01-009',
          ar: 'وَكَانَتْ أَوْلَادُ عَادٍ تَمْلَأُ الْبُيُوتَ.',
          en: "ʿĀd's children filled the houses.",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'أَوْلَادُ', lemma: 'وَلَد', pos: 'noun', features: 'pl.constr.nom', gloss: 'the children of' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'تَمْلَأُ', lemma: 'مَلَأَ', pos: 'verb', features: 'impf.3fs', gloss: 'to fill; filled' },
            { surface: 'الْبُيُوتَ', lemma: 'بَيْت', pos: 'noun', features: 'pl.def.acc', gloss: 'the houses' },
          ],
        },
        {
          id: 'qs-v4-c01-010',
          ar: 'وَإِذَا خَرَجَتْ إِبِلُ عَادٍ وَغَنَمُهَا إِلَى الْمَرْعَى كَانَ لَهَا مَنْظَرٌ جَمِيلٌ جِدًّا.',
          en: "And when ʿĀd's camels and flocks went out to pasture, it made a very beautiful sight.",
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'خَرَجَتْ', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3fs', gloss: 'to go out; went out' },
            { surface: 'إِبِلُ', lemma: 'إِبِل', pos: 'noun', features: 'constr.nom', gloss: 'the camels of' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'وَغَنَمُهَا', lemma: 'غَنَم', pos: 'noun', features: 'conj+nom+3fs', gloss: 'and their flock' },
            { surface: 'إِلَى', lemma: 'إِلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'الْمَرْعَى', lemma: 'مَرْعَى', pos: 'noun', features: 'def.gen', gloss: 'the pasture' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; there was' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'for it, for them' },
            { surface: 'مَنْظَرٌ', lemma: 'مَنْظَر', pos: 'noun', features: 'indef.nom', gloss: 'a sight, view' },
            { surface: 'جَمِيلٌ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.nom', gloss: 'beautiful' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v4-c01-011',
          ar: 'وَإِذَا خَرَجَ الأَطْفَالُ فِي الصَّبَاحِ يَلْعَبُونَ كَانَ لَهُمْ مَنْظَرٌ جَمِيلٌ جِدًّا.',
          en: 'And when the children went out in the morning to play, it made a very beautiful sight.',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'خَرَجَ', lemma: 'خَرَجَ', pos: 'verb', features: 'perf.3ms', gloss: 'to go out; went out' },
            { surface: 'الأَطْفَالُ', lemma: 'طِفْل', pos: 'noun', features: 'pl.def.nom', gloss: 'the children' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الصَّبَاحِ', lemma: 'صَبَاح', pos: 'noun', features: 'def.gen', gloss: 'the morning' },
            { surface: 'يَلْعَبُونَ', lemma: 'لَعِبَ', pos: 'verb', features: 'impf.3mp', gloss: 'to play; playing' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; there was' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'for them' },
            { surface: 'مَنْظَرٌ', lemma: 'مَنْظَر', pos: 'noun', features: 'indef.nom', gloss: 'a sight, view' },
            { surface: 'جَمِيلٌ', lemma: 'جَمِيل', pos: 'adj', features: 'indef.nom', gloss: 'beautiful' },
            { surface: 'جِدًّا', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v4-c01-012',
          ar: 'وَكَانَتْ أَرْضُ عَادٍ كَذَلِكَ أَرْضاً جَمِيلَةً خَضْرَاءَ،',
          en: "ʿĀd's land was likewise a beautiful, green land,",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'أَرْضُ', lemma: 'أَرْض', pos: 'noun', features: 'constr.nom', gloss: 'the land of' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'كَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'adv', gloss: 'likewise' },
            { surface: 'أَرْضاً', lemma: 'أَرْض', pos: 'noun', features: 'indef.acc', gloss: 'a land' },
            { surface: 'جَمِيلَةً', lemma: 'جَمِيل', pos: 'adj', features: 'indef.acc.f', gloss: 'beautiful' },
            { surface: 'خَضْرَاءَ', lemma: 'أَخْضَر', pos: 'adj', features: 'indef.acc.f', gloss: 'green' },
          ],
        },
        {
          id: 'qs-v4-c01-013',
          ar: 'فِيهَا بَسَاتِينُ وَعُيُونٌ كَثِيرَةٌ.',
          en: 'with many gardens and springs in it.',
          tokens: [
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'in it' },
            { surface: 'بَسَاتِينُ', lemma: 'بُسْتَان', pos: 'noun', features: 'pl.indef.nom', gloss: 'gardens' },
            { surface: 'وَعُيُونٌ', lemma: 'عَيْن', pos: 'noun', features: 'conj+pl.indef.nom', gloss: 'and springs' },
            { surface: 'كَثِيرَةٌ', lemma: 'كَثِير', pos: 'adj', features: 'indef.nom.f', gloss: 'many' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يُقَالُ لِلأُمَّةِ الَّتِي جَاءَتْ مِنْ ذُرِّيَّةِ نُوحٍ؟',
          options: ['عَادٌ', 'ثَمُودُ', 'قُرَيْشٌ'],
          answer: 0,
          qEn: "What was the nation from Nūḥ's offspring called?",
          optionsEn: ['ʿĀd', 'Thamūd', 'Quraysh'],
        },
        {
          q: 'كَيْفَ كَانَتْ أَجْسَامُ رِجَالِ عَادٍ؟',
          options: ['كَأَنَّهَا مِنْ حَدِيدٍ', 'ضَعِيفَةً جِدًّا', 'صَغِيرَةً كَأَجْسَامِ الأَطْفَالِ'],
          answer: 0,
          qEn: "How were the bodies of ʿĀd's men?",
          optionsEn: ['As if made of iron', 'Very weak', 'Small like the bodies of children'],
        },
        {
          q: 'بِمَاذَا كَانَتْ أَرْضُ عَادٍ مَمْلُوءَةً؟',
          options: ['بَسَاتِينُ وَعُيُونٌ كَثِيرَةٌ', 'رِمَالٌ وَصَحَارٍ فَقَطْ', 'جِبَالٌ لَا نَبَاتَ فِيهَا'],
          answer: 0,
          qEn: "What was ʿĀd's land full of?",
          optionsEn: ['Many gardens and springs', 'Only sand and deserts', 'Mountains with no plant life'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَتْ خَيْلُ عَادٍ',
        post: 'الْمَيْدَانَ.',
        en: "ʿĀd's horses filled the arena.",
        options: ['تَمْلَأُ', 'يَمْلَأُ', 'تَمْلَآنِ', 'يَمْلَأُونَ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- agrees with the non-human plural/collective subject خَيْلُ.',
          '3rd masculine singular -- wrong gender for خَيْلُ.',
          'Dual -- wrong number.',
          '3rd masculine plural -- wrong gender and wrong number for a non-human plural.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانُوا رِجَالاً',
        post: '،',
        en: 'They were strong men,',
        options: ['أَقْوِيَاءَ', 'أَقْوِيَاءُ', 'أَقْوِيَاءِ', 'قَوِيًّا'],
        answer: 0,
        rationales: [
          'Accusative, plural -- agrees with رِجَالاً as a second accusative predicate of كَانُوا.',
          'Nominative -- wrong case; the predicate of كَانَ takes the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Singular -- wrong number; رِجَالاً is plural.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا يَخَافُونَ أَحَداً وَيَخَافُهُمْ كُلُّ',
        post: '.',
        en: 'They feared no one, and everyone feared them.',
        options: ['أَحَدٍ', 'أَحَداً', 'أَحَدٌ', 'أَحَد'],
        answer: 0,
        rationales: [
          'Genitive -- second term of the إضافة كُلُّ أَحَدٍ.',
          'Accusative -- wrong case; a construct\'s second term cannot carry its own case marking here.',
          'Nominative -- wrong case for the same reason.',
          'No case ending at all -- incomplete.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخَافُونَ أَحَداً',
        pre: '',
        post: 'أَحَداً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخَافُ', 'يَخَافُونَ', 'تَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine plural -- they, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُونَ أَحَداً',
        pre: '',
        post: 'أَحَداً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخَافُ', 'يَخَافُونَ', 'أَخَافُ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular -- matches هِيَ.',
          '3rd masculine plural -- they, the form already given.',
          '1st singular -- I.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يَخَافُونَ أَحَداً',
        pre: '',
        post: 'أَحَداً',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَخَافُ', 'يَخَافُونَ', 'أَخَافُ', 'تَخَافُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine plural -- they, the form already given.',
          '1st singular -- I.',
          '2nd masculine singular -- you (m.).',
        ],
      },
    ],
  },
};

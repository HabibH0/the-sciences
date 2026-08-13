// قَصَصُ النَّبِيِّينَ, volume 11 «زَكَرِيَّا», chapter 5 -- إِلْهَاماً مِنَ
// الرَّبِّ الرَّحِيمِ. Printed pages 246-247 (top), ending before ch6's
// heading بِشَارَةُ. Hand-transcribed source text supplied directly by the
// task (300dpi scan already transcribed; Qur'an portion cross-checked
// against the canonical Uthmani text of Āl ʿImrān 3:38) -- no scan
// re-reading performed here. Two prose paragraphs, then the Qur'anic
// quotation.
//
// Content: paragraph 1 is a single long sentence carrying an a-fortiori
// (qiyās awlā) argument -- Allah inspired Zakariyyā that whoever was able
// to work the "lesser" wonder (Maryam receiving out-of-season fruit, a
// miracle of provision) must equally be able to work the "greater" one (an
// elderly, barren couple receiving a child). The English glosses add the
// bracketed "[also]"/"surely" that the Arabic leaves implicit, per the
// task's instruction, without changing what is asserted. Paragraph 2
// describes Zakariyyā's resulting inner state and prayer, introducing the
// Qur'anic quotation (Āl ʿImrān 3:38).
//
// Qur'an-fragmentation convention (documented project-wide workaround):
// the build-stage drill pulls any 3-9 token sentence with a visible case
// ending as raw material, with no filter distinguishing invented prose
// from real Qur'anic wording. To keep the reader from drilling on Qur'anic
// text the same casual way, the ayah (Āl ʿImrān 3:38) is split into 8
// units of AT MOST 2 tokens each at natural pause points, guaranteeing
// non-buildability. The ۖ pause mark and the circled verse number are
// omitted from ar/tokens (cited here instead); Uthmani orthography
// (ٱ, ۥ) is otherwise reproduced faithfully. The fragments are attached to
// paragraph 2 (qs-v11-c05-025..032); the smooth flowing translation of the
// ayah lives in paragraph 2's own `en`, not fragmented.
//
// Grammar / lexical notes:
//   -- زَكَرِيَّا is treated as indeclinable throughout (no `features`
//      case tag): it never shows a case vowel in this text, either as
//      subject or object, so no case is invented for it. Judgment call --
//      flagging in case another chapter's agent tags it differently.
//   -- قَوِيَتِ (qs-v11-c05-019, "grew strong") is tagged as a NEW verb
//      lemma قَوِيَ, distinct from the already-known adjective قَوِيّ
//      ("strong") found elsewhere in the corpus -- same root ق و ي but a
//      different dictionary form/POS, per the corpus's own precedent of
//      splitting verb/adjective lemmas from the same root (e.g. جَرَى vs.
//      no adjective counterpart claimed). Judgment call, flagged.
//   -- بِفَوَاكِهَ (qs-v11-c05-007) is a diptote (ممنوع من الصرف) broken
//      plural -- genitive here shows as a bare fatha (no tanwin), reproduced
//      exactly as given; tagged plain `prep+pl.indef.gen` since the format
//      has no diptote atom, matching how other diptote plurals in the
//      corpus are handled.
//   -- هَبْ (qs-v11-c05-028, Qur'an fragment) reuses the lemma وَهَبَ
//      already introduced as new vocabulary in this volume's chapter 2 --
//      NOT re-listed in newWords/lemmas here; the token carries its own
//      gloss directly, tagged imp.2ms per the task's instruction.
//   -- رَبِّ (qs-v11-c05-027, vocative "O my Lord") uses this volume's
//      recurring convention for the word: pos 'noun', lemma 'رَبّ',
//      features 'acc+1s' (accusative مُنَادَى + 1st-singular possessive
//      sense), gloss 'O my Lord'.
//   -- أَمَّنَتْ (qs-v11-c05-021) is glossed "affirmed (said āmīn to)"
//      rather than "secured" -- context is the angels affirming Zakariyyā's
//      prayer, not protecting anything.
//   -- الْمَلَائِكَةُ (qs-v11-c05-021) is the already-known broken plural
//      of مَلَك; tagged def.nom with no gender atom, per instruction.
//   -- Words explicitly excluded from newWords here though they recur in
//      this chapter's paragraph 1, because they are claimed as new
//      vocabulary by this volume's parallel chapters (per task brief, not
//      independently verifiable on disk at time of writing since those
//      chapter files had not yet been created by their agents): سِنّ,
//      شَيْب, انْقَطَعَ, رَجَاء (all chapter 1), وَهَبَ (chapter 2), and the
//      verb وَهَنَ (chapter 1; the noun وَهْن used here is listed as new,
//      being a distinct dictionary entry). Each still carries its own
//      inline token gloss.
//   -- REVIEW-PASS CORRECTIONS, found once all 8 chapters of this volume
//      could be cross-checked directly: وَلَدَ is also claimed new by
//      chapter 1 (qs-v11-c01-011) -- removed here, kept only there. طَاعَة
//      and هِمَّة both already recur, un-re-taught, in chapter 3
//      (qs-v11-c03-006/007), which correctly treats them as already known
//      (grepped against qiraah-v1/-v2, a stable pre-existing course, not a
//      volume still being concurrently authored) -- removed here to match.
//      فَاكِهَة and أَوَان are both used earlier in chapter 4
//      (qs-v11-c04-003/004), which now introduces them as new on its own
//      review pass -- removed here as duplicates. All four words keep
//      their own inline token gloss regardless.
//   -- Shared lexicon check (grep across qasas-v1/v2/v3's newWords/lemma
//      entries): عَاقِل، ذَكِيّ، أَكْرَمَ، سَابِق، جَرَى، رَجَاء، مَلَك،
//      عِبَادَة، نَفْس، عَزِيز، عَلِيم، سَمِيع، رَحِيم، دُعَاء، زَوْج، قَدَرَ،
//      شَيْخ، طَيِّب، دَعَا، لِ، مِنْ، أُمّ، عَنْ، هُوَ، هِيَ، مَنْ، أَنَّ،
//      أَنْ، أَوْ، عَلَى، كُلّ، قَدْ، إِنَّ، حَال، رَجُل، لَا، هَذِهِ، اللَّه،
//      كَانَ، تَحَرَّكَ، رَحْمَة، نَبِيّ، صَالِح، ذُرِّيَّة are all already
//      taught and NOT re-listed in newWords.
//
// 24 new words (أَلْهَمَ، فَتَاة، نَذْر، أَخْلَصَ،
// مُتَأَخِّر، طَعَنَ، عَلَا، أَثَّرَ، وَهْن، عُلُوّ، عُقْر، عَادَة،
// جَاشَ، انْتَعَشَ، أَمَل، قَوِيَ، ثِقَة، فَاضَ، لِسَان،
// أَمَّنَ، إِلْهَام، تَقْدِير، هُنَالِكَ، لَدُنْ). Several of these were
// individually grep-verified against qasas-v1/v2/v3 (e.g. ثِقَة،
// أَمَل، عَادَة، لِسَان، عَلَا did not appear in the task's own pre-check
// list but were confirmed absent from the existing corpus by direct grep,
// so are included as genuinely new). طَاعَة، فَاكِهَة، أَوَان، وَلَدَ، هِمَّة
// were removed from this list on the volume-wide review pass -- see the
// note above.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch5',
  title: { ar: 'إِلْهَاماً مِنَ الرَّبِّ الرَّحِيمِ', en: 'An Inspiration from the Merciful Lord' },
  newWords: [
    'أَلْهَمَ', 'فَتَاة', 'نَذْر', 'أَخْلَصَ', 'مُتَأَخِّر',
    'طَعَنَ', 'عَلَا', 'أَثَّرَ', 'وَهْن', 'عُلُوّ', 'عُقْر', 'عَادَة',
    'جَاشَ', 'انْتَعَشَ', 'أَمَل', 'قَوِيَ', 'ثِقَة', 'فَاضَ', 'لِسَان',
    'أَمَّنَ', 'إِلْهَام', 'تَقْدِير', 'هُنَالِكَ', 'لَدُنْ',
  ],
  lemmas: {
    'أَلْهَمَ': { gloss: 'to inspire' },
    'فَتَاة': { gloss: 'young woman, girl' },
    'نَذْر': { gloss: 'a vow' },
    'أَخْلَصَ': { gloss: 'to be sincere, devote purely' },
    'مُتَأَخِّر': { gloss: 'delayed, late' },
    'طَعَنَ': { gloss: 'to thrust, pierce; (فِي السِّنِّ) to advance in years' },
    'عَلَا': { gloss: 'to rise over, come over, overtake' },
    'أَثَّرَ': { gloss: 'to affect, leave a mark' },
    'وَهْن': { gloss: 'weakness, frailty' },
    'عُلُوّ': { gloss: 'height; advancement (in years)' },
    'عُقْر': { gloss: 'barrenness' },
    'عَادَة': { gloss: 'custom, habit' },
    'جَاشَ': { gloss: 'to surge, well up' },
    'انْتَعَشَ': { gloss: 'to revive, be reinvigorated' },
    'أَمَل': { gloss: 'hope' },
    'قَوِيَ': { gloss: 'to become strong' },
    'ثِقَة': { gloss: 'confidence, trust' },
    'فَاضَ': { gloss: 'to overflow, pour forth' },
    'لِسَان': { gloss: 'tongue' },
    'أَمَّنَ': { gloss: "to say āmīn, affirm" },
    'إِلْهَام': { gloss: 'inspiration' },
    'تَقْدِير': { gloss: 'a decree, an ordaining' },
    'هُنَالِكَ': { gloss: 'there, at that point' },
    'لَدُنْ': { gloss: 'from the presence of' },
  },
  paragraphs: [
    {
      en: "Allah inspired Zakariyyā -- a prophet among the prophets, and one of the wise and discerning -- with the realization that whoever is able to honor a righteous girl (whose mother was sincere in her vow concerning her and her prayers for her, and who was herself sincere in obedience and worship) with fruit out of its proper season, ahead of its time or delayed past it, is surely also able to grant a child to an old man who had advanced in years, whom grey hair had overtaken, and whom frailty had affected -- a man for whom all hope of a child had been cut off because of his advanced age and his wife's barrenness, since it is not the custom for a man to be given a child in such a condition.",
      sentences: [
        {
          id: 'qs-v11-c05-001',
          ar: 'وَأَلْهَمَ اللَّهُ زَكَرِيَّا،',
          en: 'And Allah inspired Zakariyyā,',
          tokens: [
            { surface: 'وَأَلْهَمَ', lemma: 'أَلْهَمَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ل ه م', gloss: 'to inspire; and inspired' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', gloss: 'Zakariyyā' },
          ],
        },
        {
          id: 'qs-v11-c05-002',
          ar: 'وَهُوَ نَبِيٌّ مِنَ الْأَنْبِيَاءِ،',
          en: 'he being a prophet among the prophets,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'noun', features: 'conj+3ms', gloss: 'and he' },
            { surface: 'نَبِيٌّ', lemma: 'نَبِيّ', pos: 'noun', features: 'indef.nom', root: 'ن ب أ', gloss: 'a prophet' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'الْأَنْبِيَاءِ', lemma: 'نَبِيّ', pos: 'noun', features: 'pl.def.gen', root: 'ن ب أ', gloss: 'the prophets' },
          ],
        },
        {
          id: 'qs-v11-c05-003',
          ar: 'وَمِنَ الْعُقَلَاءِ الْأَذْكِيَاءِ،',
          en: 'and among the wise, sharp-minded ones,',
          tokens: [
            { surface: 'وَمِنَ', lemma: 'مِنْ', pos: 'prep', features: 'conj+prep', gloss: 'and among' },
            { surface: 'الْعُقَلَاءِ', lemma: 'عَاقِل', pos: 'adj', features: 'pl.def.gen', root: 'ع ق ل', gloss: 'the wise, sensible' },
            { surface: 'الْأَذْكِيَاءِ', lemma: 'ذَكِيّ', pos: 'adj', features: 'pl.def.gen', root: 'ذ ك و', gloss: 'the intelligent, sharp-minded' },
          ],
        },
        {
          id: 'qs-v11-c05-004',
          ar: 'أَنَّ مَنْ يَقْدِرُ عَلَى أَنْ يُكْرِمَ فَتَاةً صَالِحَةً،',
          en: 'that whoever is able to honor a righteous girl,',
          tokens: [
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'whoever' },
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; is able' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يُكْرِمَ', lemma: 'أَكْرَمَ', pos: 'verb', features: 'impf.3ms', root: 'ك ر م', gloss: 'to honor; honor' },
            { surface: 'فَتَاةً', lemma: 'فَتَاة', pos: 'noun', features: 'indef.acc', root: 'ف ت ي', gloss: 'a young woman, a girl' },
            { surface: 'صَالِحَةً', lemma: 'صَالِح', pos: 'adj', features: 'indef.acc.f', root: 'ص ل ح', gloss: 'righteous' },
          ],
        },
        {
          id: 'qs-v11-c05-005',
          ar: 'أَخْلَصَتْ أُمُّهَا فِي النَّذْرِ بِهَا وَالدُّعَاءِ لَهَا،',
          en: 'whose mother was sincere in the vow concerning her and in prayer for her,',
          tokens: [
            { surface: 'أَخْلَصَتْ', lemma: 'أَخْلَصَ', pos: 'verb', features: 'perf.3fs', root: 'خ ل ص', gloss: 'to be sincere, devote purely; was sincere' },
            { surface: 'أُمُّهَا', lemma: 'أُمّ', pos: 'noun', features: 'nom+3fs', root: 'أ م م', gloss: 'her mother' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'النَّذْرِ', lemma: 'نَذْر', pos: 'noun', features: 'def.gen', root: 'ن ذ ر', gloss: 'the vow' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'concerning her' },
            { surface: 'وَالدُّعَاءِ', lemma: 'دُعَاء', pos: 'noun', features: 'conj+def.gen', root: 'د ع و', gloss: 'and the prayer' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'for her' },
          ],
        },
        {
          id: 'qs-v11-c05-006',
          ar: 'وَأَخْلَصَتْ هِيَ فِي الطَّاعَةِ وَالْعِبَادَةِ،',
          en: 'and who was herself sincere in obedience and worship,',
          tokens: [
            { surface: 'وَأَخْلَصَتْ', lemma: 'أَخْلَصَ', pos: 'verb', features: 'conj+perf.3fs', root: 'خ ل ص', gloss: 'to be sincere; and was sincere' },
            { surface: 'هِيَ', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'she' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الطَّاعَةِ', lemma: 'طَاعَة', pos: 'noun', features: 'def.gen', root: 'ط و ع', gloss: 'obedience' },
            { surface: 'وَالْعِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'conj+def.gen', root: 'ع ب د', gloss: 'and worship' },
          ],
        },
        {
          id: 'qs-v11-c05-007',
          ar: 'بِفَوَاكِهَ سَابِقَةٍ لِزَمَانِهَا',
          en: 'with fruits ahead of their time',
          tokens: [
            { surface: 'بِفَوَاكِهَ', lemma: 'فَاكِهَة', pos: 'noun', features: 'prep+pl.indef.gen', root: 'ف ك ه', gloss: 'with fruits' },
            { surface: 'سَابِقَةٍ', lemma: 'سَابِق', pos: 'adj', features: 'indef.gen.f', root: 'س ب ق', gloss: 'preceding, ahead of' },
            { surface: 'لِزَمَانِهَا', lemma: 'زَمَان', pos: 'noun', features: 'prep+gen+3fs', root: 'ز م ن', gloss: 'its time' },
          ],
        },
        {
          id: 'qs-v11-c05-008',
          ar: 'أَوْ مُتَأَخِّرَةٍ عَنْ أَوَانِهَا،',
          en: 'or delayed past their season,',
          tokens: [
            { surface: 'أَوْ', lemma: 'أَوْ', pos: 'conj', features: 'conj', gloss: 'or' },
            { surface: 'مُتَأَخِّرَةٍ', lemma: 'مُتَأَخِّر', pos: 'adj', features: 'indef.gen.f', root: 'أ خ ر', gloss: 'delayed, late' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'past, beyond' },
            { surface: 'أَوَانِهَا', lemma: 'أَوَان', pos: 'noun', features: 'gen+3fs', root: 'أ و ن', gloss: 'its season' },
          ],
        },
        {
          id: 'qs-v11-c05-009',
          ar: 'يَقْدِرُ أَنْ يَهَبَ شَيْخاً قَدْ طَعَنَ فِي السِّنِّ',
          en: 'is surely also able to grant an old man who had advanced in years',
          tokens: [
            { surface: 'يَقْدِرُ', lemma: 'قَدَرَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be able; is able' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'يَهَبَ', lemma: 'وَهَبَ', pos: 'verb', features: 'impf.3ms', root: 'و ه ب', gloss: 'to grant; grant' },
            { surface: 'شَيْخاً', lemma: 'شَيْخ', pos: 'noun', features: 'indef.acc', root: 'ش ي خ', gloss: 'an old man' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed (+ perfect)' },
            { surface: 'طَعَنَ', lemma: 'طَعَنَ', pos: 'verb', features: 'perf.3ms', root: 'ط ع ن', gloss: 'to advance in years; had advanced' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السِّنِّ', lemma: 'سِنّ', pos: 'noun', features: 'def.gen', gloss: 'age' },
          ],
        },
        {
          id: 'qs-v11-c05-010',
          ar: 'وَعَلَاهُ الشَّيْبُ،',
          en: 'whom grey hair had overtaken,',
          tokens: [
            { surface: 'وَعَلَاهُ', lemma: 'عَلَا', pos: 'verb', features: 'conj+perf.3ms+3ms', root: 'ع ل و', gloss: 'to overtake, come over; and had come over him' },
            { surface: 'الشَّيْبُ', lemma: 'شَيْب', pos: 'noun', features: 'def.nom', gloss: 'grey hair' },
          ],
        },
        {
          id: 'qs-v11-c05-011',
          ar: 'وَأَثَّرَ فِيهِ الْوَهْنُ،',
          en: 'and whom frailty had affected,',
          tokens: [
            { surface: 'وَأَثَّرَ', lemma: 'أَثَّرَ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ ث ر', gloss: 'to affect, leave a mark; and had affected' },
            { surface: 'فِيهِ', lemma: 'فِي', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
            { surface: 'الْوَهْنُ', lemma: 'وَهْن', pos: 'noun', features: 'def.nom', root: 'و ه ن', gloss: 'weakness, frailty' },
          ],
        },
        {
          id: 'qs-v11-c05-012',
          ar: 'وَلَداً قَدِ انْقَطَعَ مِنْهُ الرَّجَاءُ',
          en: 'a child, hope of which had been cut off from him,',
          tokens: [
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'conj+indef.acc', gloss: 'a child' },
            { surface: 'قَدِ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed (+ perfect)' },
            { surface: 'انْقَطَعَ', lemma: 'اِنْقَطَعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be cut off; had been cut off' },
            { surface: 'مِنْهُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3ms', gloss: 'from him' },
            { surface: 'الرَّجَاءُ', lemma: 'رَجَاء', pos: 'noun', features: 'def.nom', gloss: 'hope' },
          ],
        },
        {
          id: 'qs-v11-c05-013',
          ar: 'لِعُلُوِّ السِّنِّ،',
          en: 'because of his advanced age,',
          tokens: [
            { surface: 'لِعُلُوِّ', lemma: 'عُلُوّ', pos: 'noun', features: 'prep+constr.gen', root: 'ع ل و', gloss: 'because of the advancement of' },
            { surface: 'السِّنِّ', lemma: 'سِنّ', pos: 'noun', features: 'def.gen', gloss: 'age' },
          ],
        },
        {
          id: 'qs-v11-c05-014',
          ar: 'وَعُقْرِ الزَّوْجِ،',
          en: "and the wife's barrenness,",
          tokens: [
            { surface: 'وَعُقْرِ', lemma: 'عُقْر', pos: 'noun', features: 'conj+constr.gen', root: 'ع ق ر', gloss: 'and the barrenness of' },
            { surface: 'الزَّوْجِ', lemma: 'زَوْج', pos: 'noun', features: 'def.gen', gloss: 'the wife' },
          ],
        },
        {
          id: 'qs-v11-c05-015',
          ar: 'وَجَرَتِ الْعَادَةُ أَنْ لَا يُولَدَ لِرَجُلٍ فِي هَذِهِ الْحَالِ.',
          en: 'since it is not the custom for a man to be given a child in such a condition.',
          tokens: [
            { surface: 'وَجَرَتِ', lemma: 'جَرَى', pos: 'verb', features: 'conj+perf.3fs', root: 'ج ر ي', gloss: 'to run, be customary; and it was customary' },
            { surface: 'الْعَادَةُ', lemma: 'عَادَة', pos: 'noun', features: 'def.nom', root: 'ع و د', gloss: 'the custom' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُولَدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'pass+impf.3ms', root: 'و ل د', gloss: 'to give birth; (pass.) is born' },
            { surface: 'لِرَجُلٍ', lemma: 'رَجُل', pos: 'noun', features: 'prep+indef.gen', gloss: 'to a man' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'this' },
            { surface: 'الْحَالِ', lemma: 'حَال', pos: 'noun', features: 'def.gen', gloss: 'condition, state' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا أَلْهَمَ اللَّهُ زَكَرِيَّا؟',
          options: [
            'أَنَّ مَنْ قَدَرَ عَلَى إِكْرَامِ فَتَاةٍ صَالِحَةٍ بِفَوَاكِهَ خَارِجَ أَوَانِهَا قَادِرٌ أَنْ يَهَبَ شَيْخاً كَبِيراً وَزَوْجاً عَاقِراً وَلَداً',
            'أَنَّ اللَّهَ لَنْ يَسْتَجِيبَ دُعَاءَهُ أَبَداً',
            'أَنَّ عَلَيْهِ أَنْ يَتْرُكَ الدُّعَاءَ وَيَرْضَى بِالْحَالِ',
          ],
          answer: 0,
          qEn: 'What did Allah inspire Zakariyyā to realize?',
          optionsEn: [
            'That the One who could honor a righteous girl with fruit out of its season could surely also grant an old man and his barren wife a child',
            'That Allah would never answer his prayer',
            'That he should give up praying and accept his condition',
          ],
        },
        {
          q: 'مَا حَالُ الشَّيْخِ الَّذِي يَتَحَدَّثُ عَنْهُ النَّصُّ؟',
          options: [
            'قَدْ طَعَنَ فِي السِّنِّ وَعَلَاهُ الشَّيْبُ وَأَثَّرَ فِيهِ الْوَهْنُ وَانْقَطَعَ مِنْهُ الرَّجَاءُ فِي وَلَدٍ',
            'شَابٌّ قَوِيٌّ لَمْ يَتَزَوَّجْ بَعْدُ',
            'رَجُلٌ غَنِيٌّ لَا يُرِيدُ أَوْلَاداً',
          ],
          answer: 0,
          qEn: 'What was the condition of the old man the passage describes?',
          optionsEn: [
            'He had advanced in years, grey hair had overtaken him, frailty had affected him, and all hope of a child had been cut off from him',
            'A strong young man who had not yet married',
            'A wealthy man who did not want children',
          ],
        },
      ],
    },
    {
      en: "His soul surged, his resolve rose, hope was reinvigorated, and trust in his Lord grew strong. So his tongue poured forth in a prayer that the angels affirmed with 'āmīn' and that stirred the mercy of Allah -- all of it an inspiration from the Merciful Lord and a decree from the Almighty, the All-Knowing: 'There Zakariyyā called upon his Lord, saying: My Lord, grant me from Yourself a righteous offspring; indeed, You are the Hearer of prayer.' (Āl ʿImrān 3:38)",
      sentences: [
        {
          id: 'qs-v11-c05-016',
          ar: 'فَجَاشَتْ نَفْسُهُ،',
          en: 'His soul surged,',
          tokens: [
            { surface: 'فَجَاشَتْ', lemma: 'جَاشَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ج ي ش', gloss: 'to surge, well up; so surged' },
            { surface: 'نَفْسُهُ', lemma: 'نَفْس', pos: 'noun', features: 'nom+3ms', root: 'ن ف س', gloss: 'his soul' },
          ],
        },
        {
          id: 'qs-v11-c05-017',
          ar: 'وَعَلَتْ هِمَّتُهُ،',
          en: 'his resolve rose,',
          tokens: [
            { surface: 'وَعَلَتْ', lemma: 'عَلَا', pos: 'verb', features: 'conj+perf.3fs', root: 'ع ل و', gloss: 'to rise; and rose' },
            { surface: 'هِمَّتُهُ', lemma: 'هِمَّة', pos: 'noun', features: 'nom+3ms', root: 'ه م م', gloss: 'his resolve' },
          ],
        },
        {
          id: 'qs-v11-c05-018',
          ar: 'وَانْتَعَشَ الْأَمَلُ،',
          en: 'hope was reinvigorated,',
          tokens: [
            { surface: 'وَانْتَعَشَ', lemma: 'اِنْتَعَشَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ع ش', gloss: 'to revive, be reinvigorated; and was reinvigorated' },
            { surface: 'الْأَمَلُ', lemma: 'أَمَل', pos: 'noun', features: 'def.nom', root: 'أ م ل', gloss: 'hope' },
          ],
        },
        {
          id: 'qs-v11-c05-019',
          ar: 'وَقَوِيَتِ الثِّقَةُ بِالرَّبِّ،',
          en: 'and trust in his Lord grew strong,',
          tokens: [
            { surface: 'وَقَوِيَتِ', lemma: 'قَوِيَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ق و ي', gloss: 'to become strong; and grew strong' },
            { surface: 'الثِّقَةُ', lemma: 'ثِقَة', pos: 'noun', features: 'def.nom', root: 'و ث ق', gloss: 'trust, confidence' },
            { surface: 'بِالرَّبِّ', lemma: 'رَبّ', pos: 'noun', features: 'prep+def.gen', gloss: 'in the Lord' },
          ],
        },
        {
          id: 'qs-v11-c05-020',
          ar: 'فَفَاضَ لِسَانُهُ بِدُعَاءٍ',
          en: 'so his tongue poured forth in a prayer',
          tokens: [
            { surface: 'فَفَاضَ', lemma: 'فَاضَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ف ي ض', gloss: 'to overflow, pour forth; so poured forth' },
            { surface: 'لِسَانُهُ', lemma: 'لِسَان', pos: 'noun', features: 'nom+3ms', root: 'ل س ن', gloss: 'his tongue' },
            { surface: 'بِدُعَاءٍ', lemma: 'دُعَاء', pos: 'noun', features: 'prep+indef.gen', gloss: 'in a prayer' },
          ],
        },
        {
          id: 'qs-v11-c05-021',
          ar: 'أَمَّنَتْ عَلَيْهِ الْمَلَائِكَةُ',
          en: "that the angels affirmed with 'āmīn'",
          tokens: [
            { surface: 'أَمَّنَتْ', lemma: 'أَمَّنَ', pos: 'verb', features: 'perf.3fs', root: 'أ م ن', gloss: "to say āmīn, affirm; affirmed" },
            { surface: 'عَلَيْهِ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3ms', gloss: 'to it' },
            { surface: 'الْمَلَائِكَةُ', lemma: 'مَلَك', pos: 'noun', features: 'def.nom', gloss: 'the angels' },
          ],
        },
        {
          id: 'qs-v11-c05-022',
          ar: 'وَتَحَرَّكَتْ بِهِ رَحْمَةُ اللَّهِ،',
          en: 'and that stirred the mercy of Allah,',
          tokens: [
            { surface: 'وَتَحَرَّكَتْ', lemma: 'تَحَرَّكَ', pos: 'verb', features: 'conj+perf.3fs', root: 'ح ر ك', gloss: 'to move, stir; and was stirred' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'by it' },
            { surface: 'رَحْمَةُ', lemma: 'رَحْمَة', pos: 'noun', features: 'constr.nom', root: 'ر ح م', gloss: 'the mercy of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v11-c05-023',
          ar: 'وَكَانَ كُلُّهُ إِلْهَاماً مِنَ الرَّبِّ الرَّحِيمِ،',
          en: 'all of it an inspiration from the Merciful Lord,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be; and was' },
            { surface: 'كُلُّهُ', lemma: 'كُلّ', pos: 'noun', features: 'nom+3ms', root: 'ك ل ل', gloss: 'all of it' },
            { surface: 'إِلْهَاماً', lemma: 'إِلْهَام', pos: 'noun', features: 'indef.acc', root: 'ل ه م', gloss: 'an inspiration' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الرَّبِّ', lemma: 'رَبّ', pos: 'noun', features: 'def.gen', gloss: 'the Lord' },
            { surface: 'الرَّحِيمِ', lemma: 'رَحِيم', pos: 'adj', features: 'def.gen', gloss: 'the Merciful' },
          ],
        },
        {
          id: 'qs-v11-c05-024',
          ar: 'وَتَقْدِيراً مِنَ الْعَزِيزِ الْعَلِيمِ:',
          en: 'and a decree from the Almighty, the All-Knowing:',
          tokens: [
            { surface: 'وَتَقْدِيراً', lemma: 'تَقْدِير', pos: 'noun', features: 'conj+indef.acc', root: 'ق د ر', gloss: 'and a decree' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْعَزِيزِ', lemma: 'عَزِيز', pos: 'adj', features: 'def.gen', gloss: 'the Almighty' },
            { surface: 'الْعَلِيمِ', lemma: 'عَلِيم', pos: 'adj', features: 'def.gen', gloss: 'the All-Knowing' },
          ],
        },
        // -- Qur'an quotation, Āl ʿImrān 3:38. Split into 8 units of at
        // most 2 tokens each per the project's Qur'an-fragmentation
        // convention (see header note) -- the ۖ pause mark and circled
        // verse number are omitted from ar/tokens.
        {
          id: 'qs-v11-c05-025',
          ar: 'هُنَالِكَ دَعَا',
          en: 'There he called out',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there, at that point' },
            { surface: 'دَعَا', lemma: 'دَعَا', pos: 'verb', features: 'perf.3ms', root: 'د ع و', gloss: 'to call upon, supplicate; he called upon' },
          ],
        },
        {
          id: 'qs-v11-c05-026',
          ar: 'زَكَرِيَّا رَبَّهُۥ',
          en: 'Zakariyyā, [upon] his Lord,',
          tokens: [
            { surface: 'زَكَرِيَّا', lemma: 'زَكَرِيَّا', pos: 'proper', gloss: 'Zakariyyā' },
            { surface: 'رَبَّهُۥ', lemma: 'رَبّ', pos: 'noun', features: 'acc+3ms', gloss: 'his Lord' },
          ],
        },
        {
          id: 'qs-v11-c05-027',
          ar: 'قَالَ رَبِّ',
          en: "he said: 'My Lord,",
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say; he said' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'acc+1s', gloss: 'O my Lord' },
          ],
        },
        {
          id: 'qs-v11-c05-028',
          ar: 'هَبْ لِى',
          en: 'grant me,',
          tokens: [
            { surface: 'هَبْ', lemma: 'وَهَبَ', pos: 'verb', features: 'imp.2ms', root: 'و ه ب', gloss: 'to grant; grant!' },
            { surface: 'لِى', lemma: 'لِ', pos: 'prep', features: 'prep+1s', gloss: 'to me, for me' },
          ],
        },
        {
          id: 'qs-v11-c05-029',
          ar: 'مِن لَّدُنكَ',
          en: 'from Yourself,',
          tokens: [
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'لَّدُنكَ', lemma: 'لَدُنْ', pos: 'noun', features: 'gen+2ms', gloss: 'Your presence, Yourself' },
          ],
        },
        {
          id: 'qs-v11-c05-030',
          ar: 'ذُرِّيَّةً طَيِّبَةً',
          en: 'a good, righteous offspring;',
          tokens: [
            { surface: 'ذُرِّيَّةً', lemma: 'ذُرِّيَّة', pos: 'noun', features: 'indef.acc', gloss: 'offspring' },
            { surface: 'طَيِّبَةً', lemma: 'طَيِّب', pos: 'adj', features: 'indef.acc.f', gloss: 'good, pure, goodly' },
          ],
        },
        {
          id: 'qs-v11-c05-031',
          ar: 'إِنَّكَ سَمِيعُ',
          en: 'indeed You are the Hearer',
          tokens: [
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'سَمِيعُ', lemma: 'سَمِيع', pos: 'adj', features: 'constr.nom', gloss: 'Hearer of' },
          ],
        },
        {
          id: 'qs-v11-c05-032',
          ar: 'ٱلدُّعَاءِ',
          en: "of prayer.'",
          tokens: [
            { surface: 'ٱلدُّعَاءِ', lemma: 'دُعَاء', pos: 'noun', features: 'def.gen', gloss: 'the supplication, the prayer' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ أَمَّنَ عَلَى دُعَاءِ زَكَرِيَّا؟',
          options: ['الْمَلَائِكَةُ', 'إِخْوَتُهُ', 'قَوْمُهُ'],
          answer: 0,
          qEn: "Who affirmed Zakariyyā's prayer with 'āmīn'?",
          optionsEn: ['The angels', 'His brothers', 'His people'],
        },
        {
          q: 'مَاذَا طَلَبَ زَكَرِيَّا مِنْ رَبِّهِ فِي دُعَائِهِ؟',
          options: ['ذُرِّيَّةً طَيِّبَةً', 'مَالاً كَثِيراً', 'مُلْكاً عَظِيماً'],
          answer: 0,
          qEn: 'What did Zakariyyā ask his Lord for in his prayer?',
          optionsEn: ['Good, righteous offspring', 'Great wealth', 'A mighty kingdom'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَ',
        post: 'نَفْسُهُ، وَعَلَتْ هِمَّتُهُ.',
        en: 'His soul surged, and his resolve rose.',
        options: ['جَاشَتْ', 'جَاشَ', 'جَاشُوا', 'تَجِيشُ'],
        answer: 0,
        rationales: [
          'Perfect 3rd feminine singular -- agrees with the feminine subject نَفْس (soul).',
          'Perfect 3rd masculine singular -- wrong gender; نَفْس is feminine.',
          'Perfect 3rd masculine plural -- wrong number and gender.',
          'Imperfect 3rd feminine singular -- wrong tense; the narrative is in the perfect.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَ',
        post: 'الثِّقَةُ بِالرَّبِّ.',
        en: 'And trust in the Lord grew strong.',
        options: ['قَوِيَتِ', 'قَوِيَ', 'قَوُوا', 'يَقْوَى'],
        answer: 0,
        rationales: [
          'Perfect 3rd feminine singular -- agrees with the feminine subject الثِّقَة (trust).',
          'Perfect 3rd masculine singular -- wrong gender; الثِّقَة is feminine.',
          'Perfect 3rd masculine plural -- wrong number and gender.',
          'Imperfect 3rd masculine singular -- wrong tense and gender.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَقْدِرُ أَنْ يَهَبَ شَيْخاً وَلَداً',
        pre: '',
        post: 'أَنْ يَهَبَ شَيْخاً وَلَداً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَقْدِرُ', 'يَقْدِرُ', 'تَقْدِرُ', 'نَقْدِرُ'],
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
        base: 'يَقْدِرُ أَنْ يَهَبَ شَيْخاً وَلَداً',
        pre: '',
        post: 'أَنْ يَهَبَ شَيْخاً وَلَداً',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَقْدِرُ', 'يَقْدِرُ', 'أَقْدِرُ', 'تَقْدِرُ'],
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

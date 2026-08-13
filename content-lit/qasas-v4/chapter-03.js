// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 3 -- عُدْوَانُ عَادٍ.
// Printed pages 85 (after ch2's closing أَغْبِيَاءَ في الدِّينِ) - 86 (top,
// ending before ch4's heading قُصُورُ عَادٍ). Transcribed by hand from a
// 200dpi render against ../CHAPTER-FORMAT.md.
//
// ʿĀd's physical strength (established in ch1) turns predatory once
// unmoored from belief in Allah and the Hereafter: the rhetorical questions
// of qs-v4-c03-{003,004} pivot the chapter from description to indictment,
// then the beast-of-the-forest and rampaging-elephant similes carry the
// argument through village-sacking and open warfare. No Qur'anic quotation
// on these pages.
//
// Grammar / lexical notes:
//   -- لَا يَلْقَى شَيْئاً إِلَّا قَتَلَهُ (qs-v4-c03-011) uses لَقِيَ 'to meet,
//      encounter' (already taught, qasas-v1 ch14), NOT أَلْقَى 'to throw' --
//      the two are easy to confuse by shape but are different lemmas; the
//      scan is unambiguous (لا يَلْقى, not لا يُلْقى).
//   -- Independent subject pronouns (هُمْ in qs-v4-c03-006) follow the
//      already-established convention (qasas-v1 ch3/4/9/11/16's أَنَا/هُوَ):
//      pos 'noun', lemma the pronoun itself, features a bare person code.
//   -- ظَلَمَ (the verb) is tagged as a new lemma distinct from the
//      already-taught noun ظُلْم and adjective ظَالِم -- CHAPTER-FORMAT.md
//      lemmas are exact dictionary forms, not roots, so a verb and its
//      noun/adjective relatives are separate entries even when obviously
//      related.
//   -- Four consecutive وَإِذَا + perfect-verb clauses (qs-v4-c03-{011,013})
//      -- إِذَا غَضِبُوا... and إِذَا دَخَلُوا... -- are this chapter's recycled
//      frame, built into the workshop below.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): صَارَ، عَادٍ، عَلَى، النَّاس،
//      لِأَنَّ، آمَنَ، بِ، اللَّه، آخِرَة، مَاذَا، مَنَعَ، مِنْ، لِمَاذَا، هُمْ، لَا، رَأَى،
//      أَحَد، خَافَ، عِقَاب، كَانَ، غَابَة، كَبِير، صَغِير، أَكَلَ، قَوِيّ، ضَعِيف،
//      غَضِبَ، قَتَلَ، حَرْث، نَسْل، دَخَلَ، قَرْيَة، أَفْسَدَ، جَعَلَ، عَزِيز، أَهْل،
//      شَرّ، فَرَّ، كَذَلِكَ، كُلّ، مَنْ are all already taught and NOT re-listed.
//
// 12 new words this chapter: قُوَّة، وَبَال، عُدْوَان، ظَلَمَ، فَوْقَ، حِسَاب، وَحْش،
// فِيل، هَائِج، حَارَبَ، أَهْلَكَ، ذَلِيل.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch3',
  title: { ar: 'عُدْوَانُ عَادٍ', en: 'The Transgression of ʿĀd' },
  newWords: [
    'قُوَّة', 'وَبَال', 'عُدْوَان', 'ظَلَمَ', 'فَوْقَ', 'حِسَاب', 'وَحْش', 'فِيل', 'هَائِج', 'حَارَبَ', 'أَهْلَكَ', 'ذَلِيل',
  ],
  lemmas: {
    'قُوَّة': { gloss: 'strength, power' },
    'وَبَال': { gloss: 'curse, calamity, evil consequence' },
    'عُدْوَان': { gloss: 'transgression, aggression' },
    'ظَلَمَ': { gloss: 'to wrong, oppress' },
    'فَوْقَ': { gloss: 'above' },
    'حِسَاب': { gloss: 'reckoning, account' },
    'وَحْش': { gloss: 'wild beast' },
    'فِيل': { gloss: 'elephant' },
    'هَائِج': { gloss: 'rampaging, enraged' },
    'حَارَبَ': { gloss: 'to wage war, fight' },
    'أَهْلَكَ': { gloss: 'to destroy' },
    'ذَلِيل': { gloss: 'lowly, humiliated' },
  },
  paragraphs: [
    {
      en: "ʿĀd's strength became a curse upon them and upon the people, because they do not believe in Allah, nor do they believe in the Hereafter. So what could prevent them from injustice? And what could prevent them from transgression? And why would they not wrong the people, seeing no one above them, fearing neither reckoning nor punishment? They were like beasts of the forest -- the strong among them wronging the weak, the strong among them devouring the weak. When they grew angry, they were like a rampaging elephant: it meets nothing without killing it. Whenever they went to war, they destroyed crops and offspring; whenever they entered a village, they ruined it and turned its honored ones into the lowly. The weak feared their evil and fled from their injustice. Their strength became a curse upon them and upon the people -- and so it is with everyone who does not fear Allah and does not believe in the Hereafter.",
      sentences: [
        {
          id: 'qs-v4-c03-001',
          ar: 'وَصَارَتْ قُوَّةُ عَادٍ وَبَالاً عَلَيْهِمْ وَعَلَى النَّاسِ.',
          en: "ʿĀd's strength became a curse upon them and upon the people,",
          tokens: [
            { surface: 'وَصَارَتْ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become; and became' },
            { surface: 'قُوَّةُ', lemma: 'قُوَّة', pos: 'noun', features: 'constr.nom', gloss: 'the strength of' },
            { surface: 'عَادٍ', lemma: 'عَاد', pos: 'proper', features: 'gen', gloss: 'ʿĀd' },
            { surface: 'وَبَالاً', lemma: 'وَبَال', pos: 'noun', features: 'indef.acc', gloss: 'a curse' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'وَعَلَى', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep', gloss: 'and upon' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v4-c03-002',
          ar: 'لأَنَّهُمْ لَا يُؤْمِنُونَ بِاللَّهِ وَلَا يُؤْمِنُونَ بِالآخِرَةِ.',
          en: 'because they do not believe in Allah, nor do they believe in the Hereafter.',
          tokens: [
            { surface: 'لأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3mp', gloss: 'because they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; believe' },
            { surface: 'بِاللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'prep+gen', gloss: 'in Allah' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُؤْمِنُونَ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; believe' },
            { surface: 'بِالآخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'prep+def.gen', gloss: 'in the Hereafter' },
          ],
        },
        {
          id: 'qs-v4-c03-003',
          ar: 'فَمَاذَا يَمْنَعُهُمْ مِنَ الظُّلْمِ؟',
          en: 'So what could prevent them from injustice?',
          tokens: [
            { surface: 'فَمَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'conj+rel', gloss: 'so what' },
            { surface: 'يَمْنَعُهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to prevent; prevents them' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الظُّلْمِ', lemma: 'ظُلْم', pos: 'noun', features: 'def.gen', gloss: 'injustice' },
          ],
        },
        {
          id: 'qs-v4-c03-004',
          ar: 'وَمَاذَا يَمْنَعُهُمْ مِنَ الْعُدْوَانِ؟',
          en: 'And what could prevent them from transgression?',
          tokens: [
            { surface: 'وَمَاذَا', lemma: 'مَاذَا', pos: 'rel', features: 'conj+rel', gloss: 'and what' },
            { surface: 'يَمْنَعُهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'to prevent; prevents them' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْعُدْوَانِ', lemma: 'عُدْوَان', pos: 'noun', features: 'def.gen', gloss: 'transgression' },
          ],
        },
        {
          id: 'qs-v4-c03-005',
          ar: 'وَلِمَاذَا لَا يَظْلِمُونَ النَّاسَ؟',
          en: 'And why would they not wrong the people,',
          tokens: [
            { surface: 'وَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'rel', features: 'conj+rel', gloss: 'and why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَظْلِمُونَ', lemma: 'ظَلَمَ', pos: 'verb', features: 'impf.3mp', gloss: 'to wrong, oppress; wrong' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v4-c03-006',
          ar: 'وَهُمْ لَا يَرَوْنَ فَوْقَهُمْ أَحَداً،',
          en: 'seeing no one above them,',
          tokens: [
            { surface: 'وَهُمْ', lemma: 'هُمْ', pos: 'noun', features: 'conj+3mp', gloss: 'and they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', gloss: 'to see; see' },
            { surface: 'فَوْقَهُمْ', lemma: 'فَوْقَ', pos: 'adv', features: 'adv+3mp', gloss: 'above them' },
            { surface: 'أَحَداً', lemma: 'أَحَد', pos: 'noun', features: 'indef.acc', gloss: 'anyone' },
          ],
        },
        {
          id: 'qs-v4-c03-007',
          ar: 'وَلَا يَخَافُونَ حِسَاباً وَلَا عِقَاباً.',
          en: 'fearing neither reckoning nor punishment.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'to fear; fear' },
            { surface: 'حِسَاباً', lemma: 'حِسَاب', pos: 'noun', features: 'indef.acc', gloss: 'a reckoning' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'عِقَاباً', lemma: 'عِقَاب', pos: 'noun', features: 'indef.acc', gloss: 'a punishment' },
          ],
        },
        {
          id: 'qs-v4-c03-008',
          ar: 'وَكَانُوا كَوُحُوشِ الْغَابَةِ يَظْلِمُ الْكَبِيرُ مِنْهُمُ الصَّغِيرَ،',
          en: 'They were like beasts of the forest, the strong among them wronging the weak,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'كَوُحُوشِ', lemma: 'وَحْش', pos: 'noun', features: 'prep+pl.gen', gloss: 'like the beasts of' },
            { surface: 'الْغَابَةِ', lemma: 'غَابَة', pos: 'noun', features: 'def.gen', gloss: 'the forest' },
            { surface: 'يَظْلِمُ', lemma: 'ظَلَمَ', pos: 'verb', features: 'impf.3ms', gloss: 'to wrong, oppress; wrongs' },
            { surface: 'الْكَبِيرُ', lemma: 'كَبِير', pos: 'noun', features: 'def.nom', gloss: 'the strong, the big one' },
            { surface: 'مِنْهُمُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'الصَّغِيرَ', lemma: 'صَغِير', pos: 'noun', features: 'def.acc', gloss: 'the small, the weak one' },
          ],
        },
        {
          id: 'qs-v4-c03-009',
          ar: 'وَيَأْكُلُ الْقَوِيُّ مِنْهُمُ الضَّعِيفَ.',
          en: 'the strong among them devouring the weak.',
          tokens: [
            { surface: 'وَيَأْكُلُ', lemma: 'أَكَلَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to eat; and eats' },
            { surface: 'الْقَوِيُّ', lemma: 'قَوِيّ', pos: 'noun', features: 'def.nom', gloss: 'the strong one' },
            { surface: 'مِنْهُمُ', lemma: 'مِنْ', pos: 'prep', features: 'prep+3mp', gloss: 'among them' },
            { surface: 'الضَّعِيفَ', lemma: 'ضَعِيف', pos: 'noun', features: 'def.acc', gloss: 'the weak one' },
          ],
        },
        {
          id: 'qs-v4-c03-010',
          ar: 'وَإِذَا غَضِبُوا كَانُوا كَالْفِيلِ الْهَائِجِ،',
          en: 'When they grew angry, they were like a rampaging elephant --',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'غَضِبُوا', lemma: 'غَضِبَ', pos: 'verb', features: 'perf.3mp', gloss: 'to become angry; they became angry' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; they were' },
            { surface: 'كَالْفِيلِ', lemma: 'فِيل', pos: 'noun', features: 'prep+def.gen', gloss: 'like the elephant' },
            { surface: 'الْهَائِجِ', lemma: 'هَائِج', pos: 'adj', features: 'def.gen', gloss: 'rampaging, enraged' },
          ],
        },
        {
          id: 'qs-v4-c03-011',
          ar: 'لَا يَلْقَى شَيْئاً إِلَّا قَتَلَهُ.',
          en: 'it meets nothing without killing it.',
          tokens: [
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَلْقَى', lemma: 'لَقِيَ', pos: 'verb', features: 'impf.3ms', gloss: 'to meet, encounter; meets' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
            { surface: 'إِلَّا', lemma: 'إِلَّا', pos: 'part', features: 'part', gloss: 'except' },
            { surface: 'قَتَلَهُ', lemma: 'قَتَلَ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to kill; it kills it' },
          ],
        },
        {
          id: 'qs-v4-c03-012',
          ar: 'وَكَانُوا إِذَا حَارَبُوا أَهْلَكُوا الْحَرْثَ وَالنَّسْلَ.',
          en: 'Whenever they went to war, they destroyed crops and offspring.',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'إِذَا', lemma: 'إِذَا', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'حَارَبُوا', lemma: 'حَارَبَ', pos: 'verb', features: 'perf.3mp', gloss: 'to wage war; they warred' },
            { surface: 'أَهْلَكُوا', lemma: 'أَهْلَكَ', pos: 'verb', features: 'perf.3mp', gloss: 'to destroy; they destroyed' },
            { surface: 'الْحَرْثَ', lemma: 'حَرْث', pos: 'noun', features: 'def.acc', gloss: 'the crops' },
            { surface: 'وَالنَّسْلَ', lemma: 'نَسْل', pos: 'noun', features: 'conj+def.acc', gloss: 'and the offspring' },
          ],
        },
        {
          id: 'qs-v4-c03-013',
          ar: 'وَإِذَا دَخَلُوا قَرْيَةً أَفْسَدُوهَا وَجَعَلُوا أَعِزَّةَ أَهْلِهَا أَذِلَّةً.',
          en: 'Whenever they entered a village, they ruined it and turned its honored ones into the lowly.',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'دَخَلُوا', lemma: 'دَخَلَ', pos: 'verb', features: 'perf.3mp', gloss: 'to enter; they entered' },
            { surface: 'قَرْيَةً', lemma: 'قَرْيَة', pos: 'noun', features: 'indef.acc', gloss: 'a village' },
            { surface: 'أَفْسَدُوهَا', lemma: 'أَفْسَدَ', pos: 'verb', features: 'perf.3mp+3fs', gloss: 'to corrupt, ruin; they ruined it' },
            { surface: 'وَجَعَلُوا', lemma: 'جَعَلَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to make; and made' },
            { surface: 'أَعِزَّةَ', lemma: 'عَزِيز', pos: 'noun', features: 'pl.acc.constr', gloss: 'the honored ones of' },
            { surface: 'أَهْلِهَا', lemma: 'أَهْل', pos: 'noun', features: 'gen+3fs', gloss: 'its people' },
            { surface: 'أَذِلَّةً', lemma: 'ذَلِيل', pos: 'adj', features: 'pl.indef.acc', gloss: 'lowly, humiliated' },
          ],
        },
        {
          id: 'qs-v4-c03-014',
          ar: 'وَكَانَ الضُّعَفَاءُ يَخَافُونَ شَرَّهُمْ،',
          en: 'The weak feared their evil,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and were' },
            { surface: 'الضُّعَفَاءُ', lemma: 'ضَعِيف', pos: 'noun', features: 'pl.def.nom', gloss: 'the weak' },
            { surface: 'يَخَافُونَ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3mp', gloss: 'to fear; feared' },
            { surface: 'شَرَّهُمْ', lemma: 'شَرّ', pos: 'noun', features: 'acc+3mp', gloss: 'their evil' },
          ],
        },
        {
          id: 'qs-v4-c03-015',
          ar: 'وَيَفِرُّونَ مِنْ ظُلْمِهِمْ.',
          en: 'and fled from their injustice.',
          tokens: [
            { surface: 'وَيَفِرُّونَ', lemma: 'فَرَّ', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to flee; and fled' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'ظُلْمِهِمْ', lemma: 'ظُلْم', pos: 'noun', features: 'gen+3mp', gloss: 'their injustice' },
          ],
        },
        {
          id: 'qs-v4-c03-016',
          ar: 'وَصَارَتْ قُوَّتُهُمْ وَبَالاً عَلَيْهِمْ وَعَلَى النَّاسِ.',
          en: 'Their strength became a curse upon them and upon the people.',
          tokens: [
            { surface: 'وَصَارَتْ', lemma: 'صَارَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become; and became' },
            { surface: 'قُوَّتُهُمْ', lemma: 'قُوَّة', pos: 'noun', features: 'nom+3mp', gloss: 'their strength' },
            { surface: 'وَبَالاً', lemma: 'وَبَال', pos: 'noun', features: 'indef.acc', gloss: 'a curse' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'upon them' },
            { surface: 'وَعَلَى', lemma: 'عَلَى', pos: 'prep', features: 'conj+prep', gloss: 'and upon' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qs-v4-c03-017',
          ar: 'وَكَذَلِكَ كُلُّ مَنْ لَا يَخَافُ اللَّهَ وَلَا يُؤْمِنُ بِالآخِرَةِ.',
          en: 'And so it is with everyone who does not fear Allah and does not believe in the Hereafter.',
          tokens: [
            { surface: 'وَكَذَلِكَ', lemma: 'كَذَلِكَ', pos: 'adv', features: 'conj+adv', gloss: 'and likewise' },
            { surface: 'كُلُّ', lemma: 'كُلّ', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.3ms', gloss: 'to fear; fears' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُؤْمِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to believe; believes' },
            { surface: 'بِالآخِرَةِ', lemma: 'آخِرَة', pos: 'noun', features: 'prep+def.gen', gloss: 'in the Hereafter' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا صَارَتْ قُوَّةُ عَادٍ وَبَالاً عَلَيْهِمْ؟',
          options: ['لأَنَّهُمْ لَا يُؤْمِنُونَ بِاللَّهِ وَلَا بِالآخِرَةِ', 'لأَنَّهُمْ كَانُوا فُقَرَاءَ', 'لأَنَّ أَعْدَاءَهُمْ كَانُوا أَقْوَى مِنْهُمْ'],
          answer: 0,
          qEn: "Why did ʿĀd's strength become a curse upon them?",
          optionsEn: ['Because they do not believe in Allah or the Hereafter', 'Because they were poor', 'Because their enemies were stronger than them'],
        },
        {
          q: 'بِمَاذَا شُبِّهَتْ عَادٌ عِنْدَ الْغَضَبِ؟',
          options: ['بِالْفِيلِ الْهَائِجِ الَّذِي لَا يَلْقَى شَيْئاً إِلَّا قَتَلَهُ', 'بِالطِّفْلِ الصَّغِيرِ', 'بِالطَّيْرِ الْوَدِيعِ'],
          answer: 0,
          qEn: 'What was ʿĀd compared to when angry?',
          optionsEn: ['A rampaging elephant that kills whatever it meets', 'A small child', 'A gentle bird'],
        },
        {
          q: 'مَاذَا كَانَ يَفْعَلُ عَادٌ إِذَا دَخَلُوا قَرْيَةً؟',
          options: ['يُفْسِدُونَهَا وَيَجْعَلُونَ أَعِزَّةَ أَهْلِهَا أَذِلَّةً', 'يُصْلِحُونَهَا وَيُكْرِمُونَ أَهْلَهَا', 'يَتْرُكُونَهَا كَمَا هِيَ'],
          answer: 0,
          qEn: 'What did ʿĀd do whenever they entered a village?',
          optionsEn: ['They ruined it and turned its honored ones into the lowly', 'They improved it and honored its people', 'They left it as it was'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'يَظْلِمُ الْكَبِيرُ مِنْهُمُ',
        post: '،',
        en: 'the strong among them wronging the weak,',
        options: ['الصَّغِيرَ', 'الصَّغِيرُ', 'الصَّغِيرِ', 'صَغِيراً'],
        answer: 0,
        rationales: [
          'Accusative, definite -- the direct object of يَظْلِمُ.',
          'Nominative -- wrong case; the object of a verb takes the accusative.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong; the weak one meant here is definite (the weak party already in view), like الْكَبِيرُ before it.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِذَا',
        post: 'كَانُوا كَالْفِيلِ الْهَائِجِ.',
        en: 'When they grew angry, they were like a rampaging elephant.',
        options: ['غَضِبُوا', 'غَضِبَ', 'يَغْضَبُونَ', 'غَضِبَتْ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- agrees with the implied هُمْ, matching the following كَانُوا.',
          '3rd masculine singular -- wrong number.',
          'Imperfect -- wrong tense; إِذَا here sets a completed condition.',
          '3rd feminine singular -- wrong gender and number.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَإِذَا دَخَلُوا',
        post: 'أَفْسَدُوهَا.',
        en: 'Whenever they entered a village, they ruined it.',
        options: ['قَرْيَةً', 'قَرْيَةٌ', 'قَرْيَةٍ', 'الْقَرْيَةَ'],
        answer: 0,
        rationales: [
          'Accusative, indefinite -- the direct object of دَخَلُوا, and the pronoun in أَفْسَدُوهَا (it) confirms it is a single unspecified village each time.',
          'Nominative -- wrong case; the object of a verb takes the accusative.',
          'Genitive -- wrong case.',
          'Definite -- wrong; no particular village has been mentioned yet.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَظْلِمُ الْكَبِيرُ الصَّغِيرَ',
        pre: '',
        post: 'الْكَبِيرُ الصَّغِيرَ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تَظْلِمُ', 'يَظْلِمُ', 'أَظْلِمُ', 'نَظْلِمُ'],
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
        base: 'يَظْلِمُ الْكَبِيرُ الصَّغِيرَ',
        pre: '',
        post: 'الْكَبِيرُ الصَّغِيرَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَظْلِمُ', 'يَظْلِمُ', 'تَظْلِمُ', 'نَظْلِمُ'],
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
        base: 'يَظْلِمُ الْكَبِيرُ الصَّغِيرَ',
        pre: '',
        post: 'الْكَبِيرُ الصَّغِيرَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نَظْلِمُ', 'يَظْلِمُ', 'أَظْلِمُ', 'تَظْلِمُ'],
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

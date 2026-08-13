// قَصَصُ النَّبِيِّينَ, volume 12 «قِصَّةُ سَيِّدِنَا عِيسَى ابْنِ مَرْيَمَ عَلَيْهِ
// الصَّلَاةُ وَالسَّلَامُ», chapter 8 -- وِلَادَةُ الْمَسِيحِ تَتَحَدَّى الْمَحْسُوسَ
// الْمَعْرُوفَ. Printed pages 255 (bottom, right after ch7's closing line and
// the heading) through 256 (top, ending before ch9's heading مُعْجِزَاتُ
// الْمَسِيحِ partway down the same page). Transcribed by hand from the scan
// (vision OCR, 150dpi render) against ../CHAPTER-FORMAT.md.
//
// The chapter is a single, very long printed sentence (typical of this
// volume's high register) arguing that everything about the Messiah's
// birth, life, mission and way of living was a standing challenge to
// settled, "known" reality: to accepted custom, to prevailing law, to the
// loftiest ideals and rival ambitions the Jews themselves held. He was
// born by an unfamiliar means, spoke as an infant in the cradle, was
// raised by a poor, devoutly worshiping mother, and lived among slander
// and vilification -- yet sat and ate with the poor, was tender to them,
// comforted the weak and the estranged, and drew no line between rich and
// poor, ruler and ruled, noble and lowly.
//
// Grammar / lexical notes:
//   -- Per house convention (ch6/7/9/10 in this same chapter set) this one
//      long printed sentence is split at its natural clause/comma
//      boundaries into many short entries -- no rewording, same printed
//      order. Several very short parallel comma-items (e.g. the "custom /
//      law" pair, the "sitting with / eating with" pair) are grouped into
//      a single sentence rather than split to a single word each, purely
//      for translation readability; this does not merge any content
//      across the larger clause boundaries.
//   -- الْمَسِيحِ (new) and الْيَهُودُ (new) are this chapter's first uses of
//      two of this volume's core proper nouns. Per the brief, they are not
//      in known-lemmas.txt and may already appear in this volume's
//      chapters 1-5 (another agent's work) -- they are simply treated as
//      new here; a later centralized pass dedupes across all 42 chapters
//      of this volume.
//   -- تَحَدِّيًا (new, repeated three times) is the verbal noun of the
//      already-attested-elsewhere pattern تَحَدَّى ("to challenge"); the
//      lemma used, تَحَدٍّ, is the defective-noun dictionary form
//      (nominative/genitive تَحَدٍّ, accusative تَحَدِّيًا as printed here).
//   -- الْمُثُلِ الْعُلْيَا ("the loftiest ideals," a fixed collocation) is
//      tokenized with lemma مِثَال for المُثُل -- broken plural here used in
//      the sense "ideal, model" rather than "example."
//   -- Many of this chapter's new words are passive participles from
//      already-attested-pattern verbs (مُقَرَّر، مُتَّبَع، مَرْسُوم، مَأْلُوف) or
//      active participles (شَائِع، حَاكِم) -- each tagged as its own lemma
//      per the corpus's participle-as-distinct-lemma convention, since the
//      underlying verbs are not independently taught in this chapter.
//   -- حَاكِم/مَحْكُوم and فَقِير/غَنِيّ and شَرِيف/وَضِيع are printed as three
//      deliberately paired opposites (sentence 014) -- حَاكِم and غَنِيّ and
//      شَرِيف were already taught (see shared-lexicon check), so only
//      مَحْكُوم and وَضِيع are new here.
//   -- Shared lexicon check (known from vols 1-3 / Qirā'ah, per
//      known-lemmas.txt): أَعْلَى، الَّذِي، عَاشَ، غَيْر، كَلَّمَ، أُمّ، فَقِير،
//      بَعِيد، ضَعِيف، بَيْنَ، غَنِيّ، حَاكِم، شَرِيف، دَعْوَة -- are all already
//      taught and NOT re-listed in newWords here. Function words/particles
//      and اللَّه/النَّاس are treated as permanent background vocabulary as
//      in earlier chapters.
//
// 38 new words -- the densest chapter in this set, reflecting how tightly
// packed this one long sentence is with abstract, high-register nouns and
// participles: وِلَادَة، مَسِيح، حَيَاة، مَعِيشَة، تَحَدٍّ، مَحْسُوس، مُقَرَّر، عُرْف،
// شَائِع، مُتَّبَع، قَانُون، مَرْسُوم، مِثَال، يَهُود، غَايَة، تَنَافَسَ، تَقَاتَلَ، وَلَدَ،
// طَرِيقَة، مَأْلُوف، مَهْد، نَشَأَ، حِضْن، مُتَبَتِّل، جَوّ، مَلِيء، طَعْن، قَدْح، مَظْهَر،
// عَظَمَة، غِنَى، جَالَسَ، آكَلَ، حَنَا، وَاسَى، غَرِيب، فَرَّقَ، مَحْكُوم، وَضِيع.
//
// No page footnotes (book_note) on pages 255-256 for this chapter.
export const CHAPTER = {
  id: 'ch8',
  title: { ar: 'وِلَادَةُ الْمَسِيحِ تَتَحَدَّى الْمَحْسُوسَ الْمَعْرُوفَ', en: "The Messiah's Birth Defies the Known World" },
  newWords: [
    'مَسِيح', 'مَعِيشَة', 'تَحَدٍّ', 'مَحْسُوس', 'مُقَرَّر', 'عُرْف',
    'شَائِع', 'مُتَّبَع', 'مَرْسُوم', 'مِثَال', 'يَهُود', 'غَايَة',
    'تَنَافَسَ', 'تَقَاتَلَ', 'طَرِيقَة', 'مَأْلُوف', 'مَهْد', 'نَشَأَ',
    'حِضْن', 'مُتَبَتِّل', 'جَوّ', 'مَلِيء', 'طَعْن', 'قَدْح',
    'عَظَمَة', 'غِنَى', 'جَالَسَ', 'آكَلَ', 'حَنَا', 'وَاسَى',
    'غَرِيب', 'فَرَّقَ', 'مَحْكُوم', 'وَضِيع',
  ],
  lemmas: {
    وِلَادَة: { gloss: 'birth' },
    مَسِيح: { gloss: 'Messiah' },
    حَيَاة: { gloss: 'life' },
    مَعِيشَة: { gloss: 'livelihood, way of living' },
    تَحَدٍّ: { gloss: 'challenge' },
    مَحْسُوس: { gloss: 'tangible, perceptible' },
    مُقَرَّر: { gloss: 'established, settled, accepted as fact' },
    عُرْف: { gloss: 'custom, convention, norm' },
    شَائِع: { gloss: 'prevalent, widespread, common' },
    مُتَّبَع: { gloss: 'followed, adhered to' },
    قَانُون: { gloss: 'law' },
    مَرْسُوم: { gloss: 'prescribed, laid down' },
    مِثَال: { gloss: 'ideal, model' },
    يَهُود: { gloss: 'Jews' },
    غَايَة: { gloss: 'goal, aim' },
    تَنَافَسَ: { gloss: 'to compete with one another' },
    تَقَاتَلَ: { gloss: 'to fight one another' },
    وَلَدَ: { gloss: 'to give birth to; (passive) to be born' },
    طَرِيقَة: { gloss: 'way, manner, method' },
    مَأْلُوف: { gloss: 'familiar, customary' },
    مَهْد: { gloss: 'cradle' },
    نَشَأَ: { gloss: 'to grow up, be raised' },
    حِضْن: { gloss: 'bosom, embrace, lap' },
    مُتَبَتِّل: { gloss: 'devoted exclusively to worship, ascetic' },
    جَوّ: { gloss: 'atmosphere, ambience' },
    مَلِيء: { gloss: 'full (of)' },
    طَعْن: { gloss: 'slander, defamation' },
    قَدْح: { gloss: 'vilification, disparagement' },
    مَظْهَر: { gloss: 'outward appearance, manifestation, display' },
    عَظَمَة: { gloss: 'grandeur, greatness' },
    غِنَى: { gloss: 'wealth, riches' },
    جَالَسَ: { gloss: 'to sit with' },
    آكَلَ: { gloss: 'to eat with' },
    حَنَا: { gloss: 'to be tender, kind toward' },
    وَاسَى: { gloss: 'to console, comfort' },
    غَرِيب: { gloss: 'stranger' },
    فَرَّقَ: { gloss: 'to differentiate, distinguish' },
    مَحْكُوم: { gloss: 'ruled, governed one; subject' },
    وَضِيع: { gloss: 'lowly, base' },
  },
  paragraphs: [
    {
      en: "The Messiah's birth, life, mission, and way of living were all a challenge to that entire settled, tangible reality: a challenge to prevailing custom, to followed tradition, to prescribed law, and to the loftiest ideals the Jews believed in and the goals they competed and fought over. He was born by an unfamiliar means, spoke to people while still in the cradle, and grew up in the embrace of a poor, devoutly worshiping mother. He lived in an atmosphere full of slander and vilification, far removed from any display of grandeur or wealth -- sitting with the poor, eating with them, and being tender toward them, comforting the weak and the estranged, drawing no line between rich and poor, ruler and ruled, noble and lowly.",
      sentences: [
        {
          id: 'qs-v12-c08-001',
          ar: 'وَكَانَتْ وِلَادَةُ الْمَسِيحِ وَحَيَاتُهُ وَدَعْوَتُهُ وَمَعِيشَتُهُ تَحَدِّيًا لِكُلِّ ذَلِكَ،',
          en: "The Messiah's birth, his life, his mission, and his way of living were a challenge to all of that,",
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be; and was' },
            { surface: 'وِلَادَةُ', lemma: 'وِلَادَة', pos: 'noun', features: 'nom.constr', root: 'و ل د', gloss: 'the birth of' },
            { surface: 'الْمَسِيحِ', lemma: 'مَسِيح', pos: 'proper', features: 'gen', gloss: 'the Messiah' },
            { surface: 'وَحَيَاتُهُ', lemma: 'حَيَاة', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his life' },
            { surface: 'وَدَعْوَتُهُ', lemma: 'دَعْوَة', pos: 'noun', features: 'conj+nom+3ms', gloss: 'and his mission, his call' },
            { surface: 'وَمَعِيشَتُهُ', lemma: 'مَعِيشَة', pos: 'noun', features: 'conj+nom+3ms', root: 'ع ي ش', gloss: 'and his way of living' },
            { surface: 'تَحَدِّيًا', lemma: 'تَحَدٍّ', pos: 'noun', features: 'indef.acc', root: 'ح د ي', gloss: 'a challenge' },
            { surface: 'لِكُلِّ', lemma: 'كُلّ', pos: 'noun', features: 'prep+gen.constr', gloss: 'to all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.gen', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v12-c08-002',
          ar: 'تَحَدِّيًا لِلْمَحْسُوسِ الْمُقَرَّرِ، تَحَدِّيًا لِلْأَعْرَافِ الشَّائِعَةِ،',
          en: 'a challenge to established, tangible reality, a challenge to prevailing custom,',
          tokens: [
            { surface: 'تَحَدِّيًا', lemma: 'تَحَدٍّ', pos: 'noun', features: 'indef.acc', gloss: 'a challenge' },
            { surface: 'لِلْمَحْسُوسِ', lemma: 'مَحْسُوس', pos: 'noun', features: 'prep+def.gen', root: 'ح س س', gloss: 'to the tangible' },
            { surface: 'الْمُقَرَّرِ', lemma: 'مُقَرَّر', pos: 'adj', features: 'def.gen', root: 'ق ر ر', gloss: 'established, settled' },
            { surface: 'تَحَدِّيًا', lemma: 'تَحَدٍّ', pos: 'noun', features: 'indef.acc', gloss: 'a challenge' },
            { surface: 'لِلْأَعْرَافِ', lemma: 'عُرْف', pos: 'noun', features: 'prep+def.gen.pl', root: 'ع ر ف', gloss: 'to the customs' },
            { surface: 'الشَّائِعَةِ', lemma: 'شَائِع', pos: 'adj', features: 'def.gen.f', root: 'ش ي ع', gloss: 'prevalent, widespread' },
          ],
        },
        {
          id: 'qs-v12-c08-003',
          ar: 'وَالْعَادَاتِ الْمُتَّبَعَةِ، وَالْقَوَانِينِ الْمَرْسُومَةِ،',
          en: 'to followed traditions, and to prescribed laws,',
          tokens: [
            { surface: 'وَالْعَادَاتِ', lemma: 'عَادَة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the customs' },
            { surface: 'الْمُتَّبَعَةِ', lemma: 'مُتَّبَع', pos: 'adj', features: 'def.gen.f', root: 'ت ب ع', gloss: 'followed, adhered to' },
            { surface: 'وَالْقَوَانِينِ', lemma: 'قَانُون', pos: 'noun', features: 'conj+def.gen.pl', root: 'ق ن ن', gloss: 'and the laws' },
            { surface: 'الْمَرْسُومَةِ', lemma: 'مَرْسُوم', pos: 'adj', features: 'def.gen.f', root: 'ر س م', gloss: 'prescribed, laid down' },
          ],
        },
        {
          id: 'qs-v12-c08-004',
          ar: 'وَالْمُثُلِ الْعُلْيَا الَّتِي يُؤْمِنُ بِهَا الْيَهُودُ،',
          en: 'and to the loftiest ideals the Jews believed in,',
          tokens: [
            { surface: 'وَالْمُثُلِ', lemma: 'مِثَال', pos: 'noun', features: 'conj+def.gen.pl', root: 'م ث ل', gloss: 'and the ideals' },
            { surface: 'الْعُلْيَا', lemma: 'أَعْلَى', pos: 'adj', features: 'def.gen.f', gloss: 'highest, loftiest' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'يُؤْمِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3ms', gloss: 'to believe; believed' },
            { surface: 'بِهَا', lemma: 'بِ', pos: 'prep', features: 'prep+3fs', gloss: 'in it/them' },
            { surface: 'الْيَهُودُ', lemma: 'يَهُود', pos: 'noun', features: 'def.nom.pl', gloss: 'the Jews' },
          ],
        },
        {
          id: 'qs-v12-c08-005',
          ar: 'وَالْغَايَاتِ الَّتِي يَتَنَافَسُونَ فِيهَا، وَيَتَقَاتَلُونَ عَلَيْهَا،',
          en: 'and to the goals they competed and fought over,',
          tokens: [
            { surface: 'وَالْغَايَاتِ', lemma: 'غَايَة', pos: 'noun', features: 'conj+def.gen.pl', root: 'غ ي ي', gloss: 'and the goals' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel.f', gloss: 'which' },
            { surface: 'يَتَنَافَسُونَ', lemma: 'تَنَافَسَ', pos: 'verb', features: 'impf.3mp', root: 'ن ف س', gloss: 'to compete with one another; they compete' },
            { surface: 'فِيهَا', lemma: 'فِي', pos: 'prep', features: 'prep+3fs', gloss: 'over them' },
            { surface: 'وَيَتَقَاتَلُونَ', lemma: 'تَقَاتَلَ', pos: 'verb', features: 'conj+impf.3mp', root: 'ق ت ل', gloss: 'to fight one another; and they fight' },
            { surface: 'عَلَيْهَا', lemma: 'عَلَى', pos: 'prep', features: 'prep+3fs', gloss: 'over them' },
          ],
        },
        {
          id: 'qs-v12-c08-006',
          ar: 'فَوُلِدَ مِنْ طَرِيقَةٍ غَيْرِ مَأْلُوفَةٍ،',
          en: 'He was born by an unfamiliar means,',
          tokens: [
            { surface: 'فَوُلِدَ', lemma: 'وَلَدَ', pos: 'verb', features: 'conj+pass+perf.3ms', root: 'و ل د', gloss: 'to give birth; and he was born' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'by, from' },
            { surface: 'طَرِيقَةٍ', lemma: 'طَرِيقَة', pos: 'noun', features: 'indef.gen', root: 'ط ر ق', gloss: 'a way, manner' },
            { surface: 'غَيْرِ', lemma: 'غَيْر', pos: 'noun', features: 'gen.constr', gloss: 'other than, un-' },
            { surface: 'مَأْلُوفَةٍ', lemma: 'مَأْلُوف', pos: 'adj', features: 'indef.gen.f', root: 'أ ل ف', gloss: 'familiar, usual' },
          ],
        },
        {
          id: 'qs-v12-c08-007',
          ar: 'وَكَلَّمَ النَّاسَ فِي الْمَهْدِ،',
          en: 'spoke to people while in the cradle,',
          tokens: [
            { surface: 'وَكَلَّمَ', lemma: 'كَلَّمَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to speak to; and he spoke to' },
            { surface: 'النَّاسَ', lemma: 'نَاس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْمَهْدِ', lemma: 'مَهْد', pos: 'noun', features: 'def.gen', root: 'م ه د', gloss: 'the cradle' },
          ],
        },
        {
          id: 'qs-v12-c08-008',
          ar: 'وَنَشَأَ فِي أَحْضَانِ أُمٍّ فَقِيرَةٍ مُتَبَتِّلَةٍ،',
          en: 'and grew up in the embrace of a poor, devoutly worshiping mother,',
          tokens: [
            { surface: 'وَنَشَأَ', lemma: 'نَشَأَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grow up; and he grew up' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'أَحْضَانِ', lemma: 'حِضْن', pos: 'noun', features: 'pl.gen.constr', root: 'ح ض ن', gloss: 'the bosom, embrace of' },
            { surface: 'أُمٍّ', lemma: 'أُمّ', pos: 'noun', features: 'indef.gen', gloss: 'a mother' },
            { surface: 'فَقِيرَةٍ', lemma: 'فَقِير', pos: 'adj', features: 'indef.gen.f', gloss: 'poor' },
            { surface: 'مُتَبَتِّلَةٍ', lemma: 'مُتَبَتِّل', pos: 'adj', features: 'indef.gen.f', root: 'ب ت ل', gloss: 'devoted to worship, ascetic' },
          ],
        },
        {
          id: 'qs-v12-c08-009',
          ar: 'وَعَاشَ فِي جَوٍّ مَلِيءٍ بِالطَّعْنِ وَالْقَدْحِ،',
          en: 'and lived in an atmosphere full of slander and vilification,',
          tokens: [
            { surface: 'وَعَاشَ', lemma: 'عَاشَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to live; and he lived' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'جَوٍّ', lemma: 'جَوّ', pos: 'noun', features: 'indef.gen', gloss: 'an atmosphere' },
            { surface: 'مَلِيءٍ', lemma: 'مَلِيء', pos: 'adj', features: 'indef.gen', root: 'م ل أ', gloss: 'full of' },
            { surface: 'بِالطَّعْنِ', lemma: 'طَعْن', pos: 'noun', features: 'prep+def.gen', root: 'ط ع ن', gloss: 'with slander' },
            { surface: 'وَالْقَدْحِ', lemma: 'قَدْح', pos: 'noun', features: 'conj+def.gen', root: 'ق د ح', gloss: 'and vilification' },
          ],
        },
        {
          id: 'qs-v12-c08-010',
          ar: 'بَعِيدٍ عَنْ مَظَاهِرِ الْعَظَمَةِ وَالْغِنَى،',
          en: 'far removed from any display of grandeur or wealth,',
          tokens: [
            { surface: 'بَعِيدٍ', lemma: 'بَعِيد', pos: 'adj', features: 'indef.gen', gloss: 'far from' },
            { surface: 'عَنْ', lemma: 'عَنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'مَظَاهِرِ', lemma: 'مَظْهَر', pos: 'noun', features: 'pl.gen.constr', root: 'ظ ه ر', gloss: 'the displays of' },
            { surface: 'الْعَظَمَةِ', lemma: 'عَظَمَة', pos: 'noun', features: 'def.gen', root: 'ع ظ م', gloss: 'grandeur, greatness' },
            { surface: 'وَالْغِنَى', lemma: 'غِنَى', pos: 'noun', features: 'conj+def.gen', root: 'غ ن ي', gloss: 'and wealth' },
          ],
        },
        {
          id: 'qs-v12-c08-011',
          ar: 'يُجَالِسُ الْفُقَرَاءَ، وَيُؤَاكِلُهُمْ وَيَحْنُو عَلَيْهِمْ،',
          en: 'sitting with the poor, eating with them, and being tender toward them,',
          tokens: [
            { surface: 'يُجَالِسُ', lemma: 'جَالَسَ', pos: 'verb', features: 'impf.3ms', root: 'ج ل س', gloss: 'to sit with; he sits with' },
            { surface: 'الْفُقَرَاءَ', lemma: 'فَقِير', pos: 'noun', features: 'def.acc.pl', gloss: 'the poor' },
            { surface: 'وَيُؤَاكِلُهُمْ', lemma: 'آكَلَ', pos: 'verb', features: 'conj+impf.3ms+3mp', root: 'أ ك ل', gloss: 'to eat with; and eats with them' },
            { surface: 'وَيَحْنُو', lemma: 'حَنَا', pos: 'verb', features: 'conj+impf.3ms', root: 'ح ن و', gloss: 'to be tender toward; and is tender toward' },
            { surface: 'عَلَيْهِمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+3mp', gloss: 'toward them' },
          ],
        },
        {
          id: 'qs-v12-c08-012',
          ar: 'وَيُوَاسِي الضُّعَفَاءَ وَالْغُرَبَاءَ،',
          en: 'comforting the weak and the estranged,',
          tokens: [
            { surface: 'وَيُوَاسِي', lemma: 'وَاسَى', pos: 'verb', features: 'conj+impf.3ms', root: 'أ س و', gloss: 'to comfort, console; and comforts' },
            { surface: 'الضُّعَفَاءَ', lemma: 'ضَعِيف', pos: 'noun', features: 'def.acc.pl', gloss: 'the weak' },
            { surface: 'وَالْغُرَبَاءَ', lemma: 'غَرِيب', pos: 'noun', features: 'conj+def.acc.pl', root: 'غ ر ب', gloss: 'and the strangers' },
          ],
        },
        {
          id: 'qs-v12-c08-013',
          ar: 'وَلَا يُفَرِّقُ بَيْنَ فَقِيرٍ وَغَنِيٍّ،',
          en: 'and drawing no line between rich and poor,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُفَرِّقُ', lemma: 'فَرَّقَ', pos: 'verb', features: 'impf.3ms', root: 'ف ر ق', gloss: 'to differentiate; he differentiates' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'between' },
            { surface: 'فَقِيرٍ', lemma: 'فَقِير', pos: 'noun', features: 'indef.gen', gloss: 'poor' },
            { surface: 'وَغَنِيٍّ', lemma: 'غَنِيّ', pos: 'noun', features: 'conj+indef.gen', gloss: 'and rich' },
          ],
        },
        {
          id: 'qs-v12-c08-014',
          ar: 'وَحَاكِمٍ وَمَحْكُومٍ، وَشَرِيفٍ وَوَضِيعٍ.',
          en: 'ruler and ruled, noble and lowly.',
          tokens: [
            { surface: 'وَحَاكِمٍ', lemma: 'حَاكِم', pos: 'noun', features: 'conj+indef.gen', gloss: 'and ruler' },
            { surface: 'وَمَحْكُومٍ', lemma: 'مَحْكُوم', pos: 'noun', features: 'conj+indef.gen', root: 'ح ك م', gloss: 'and ruled one, subject' },
            { surface: 'وَشَرِيفٍ', lemma: 'شَرِيف', pos: 'noun', features: 'conj+indef.gen', gloss: 'and noble' },
            { surface: 'وَوَضِيعٍ', lemma: 'وَضِيع', pos: 'noun', features: 'conj+indef.gen', root: 'و ض ع', gloss: 'and lowly' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا كَانَتْ وِلَادَةُ الْمَسِيحِ وَحَيَاتُهُ؟',
          options: ['تَحَدِّيًا لِلْمَحْسُوسِ الْمُقَرَّرِ وَالْأَعْرَافِ الشَّائِعَةِ', 'أَمْرًا عَادِيًّا مَأْلُوفًا', 'مُطَابِقَةً لِمَا كَانَ يَنْتَظِرُهُ الْيَهُودُ'],
          answer: 0,
          qEn: "What were the Messiah's birth and life?",
          optionsEn: ['A challenge to established, tangible reality and to prevailing custom', 'An ordinary, familiar matter', 'In keeping with what the Jews expected'],
        },
        {
          q: 'مَعَ مَنْ كَانَ الْمَسِيحُ يُجَالِسُ وَيُؤَاكِلُ؟',
          options: ['الْفُقَرَاءَ وَالضُّعَفَاءَ وَالْغُرَبَاءَ', 'الْمُلُوكَ وَالْأُمَرَاءَ', 'الْحُكَّامَ وَحْدَهُمْ'],
          answer: 0,
          qEn: 'With whom did the Messiah sit and eat?',
          optionsEn: ['The poor, the weak, and the strangers', 'Kings and princes', 'Only the rulers'],
        },
        {
          q: 'أَيْنَ نَشَأَ الْمَسِيحُ؟',
          options: ['فِي أَحْضَانِ أُمٍّ فَقِيرَةٍ مُتَبَتِّلَةٍ', 'فِي قَصْرِ مَلِكٍ', 'فِي بَيْتِ عَالِمٍ غَنِيٍّ'],
          answer: 0,
          qEn: 'Where did the Messiah grow up?',
          optionsEn: ["In the embrace of a poor, devoted mother", "In a king's palace", "In a rich scholar's house"],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَتْ وِلَادَةُ الْمَسِيحِ',
        post: 'لِكُلِّ ذَلِكَ.',
        en: "The Messiah's birth was a challenge to all of that.",
        options: ['تَحَدِّيًا', 'تَحَدٍّ', 'تَحَدِّيَ', 'مُتَحَدِّيًا'],
        answer: 0,
        rationales: [
          'Indefinite accusative -- predicate of كَانَتْ, matching the printed تَحَدِّيًا.',
          'Nominative/genitive form of the same defective noun -- wrong case for a predicate of كَانَ.',
          'Not a valid inflected form.',
          'Active participle ("challenging") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'مِنْ طَرِيقَةٍ غَيْرِ مَأْلُوفَةٍ.',
        en: 'He was born by an unfamiliar means.',
        options: ['فَوُلِدَ', 'فَوَلَدَ', 'فَيُولَدُ', 'فَوَالِدٌ'],
        answer: 0,
        rationales: [
          'Passive perfect, 3rd masculine singular -- "he was born," matching the printed فَوُلِدَ.',
          'Active perfect -- wrong voice; the Messiah did not give birth, he was born.',
          'Passive imperfect -- wrong tense; the sentence narrates a completed past event.',
          'Active participle (noun, "a parent") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا يُفَرِّقُ بَيْنَ فَقِيرٍ',
        post: '، وَحَاكِمٍ وَمَحْكُومٍ.',
        en: 'And he drew no line between poor and rich, ruler and ruled.',
        options: ['وَغَنِيٍّ', 'وَغَنِيًّا', 'وَغَنِيُّ', 'وَالْغَنِيُّ'],
        answer: 0,
        rationales: [
          'Indefinite genitive -- object of بَيْنَ, coordinated with the equally genitive-indefinite فَقِيرٍ.',
          'Accusative -- wrong case; بَيْنَ governs the genitive.',
          'Nominative, indefinite -- wrong case for the same reason.',
          'Definite -- wrong state; the paired opposites are all indefinite in this list.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُجَالِسُ الْفُقَرَاءَ وَيُوَاسِي الضُّعَفَاءَ',
        pre: '',
        post: 'الْفُقَرَاءَ وَيُوَاسِي الضُّعَفَاءَ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُجَالِسُ', 'يُجَالِسُ', 'تُجَالِسُ', 'نُجَالِسُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person.',
          '1st plural -- we.',
        ],
      },
      {
        type: 'shift',
        base: 'يُجَالِسُ الْفُقَرَاءَ وَيُوَاسِي الضُّعَفَاءَ',
        pre: '',
        post: 'الْفُقَرَاءَ وَيُوَاسِي الضُّعَفَاءَ',
        targetPerson: 'نَحْنُ',
        targetEn: 'we',
        options: ['نُجَالِسُ', 'يُجَالِسُ', 'تُجَالِسُ', 'أُجَالِسُ'],
        answer: 0,
        rationales: [
          '1st plural -- matches نَحْنُ.',
          '3rd masculine singular -- the base form, not shifted to "we."',
          '2nd masculine singular -- wrong person.',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'لَا يُفَرِّقُ بَيْنَ فَقِيرٍ وَغَنِيٍّ',
        pre: 'لَا',
        post: 'بَيْنَ فَقِيرٍ وَغَنِيٍّ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يُفَرِّقُونَ', 'يُفَرِّقُ', 'تُفَرِّقُ', 'نُفَرِّقُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong gender.',
          '1st plural -- we.',
        ],
      },
    ],
  },
};

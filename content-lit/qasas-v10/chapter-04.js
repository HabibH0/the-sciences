// قَصَصُ النَّبِيِّينَ, volume 10 «قِصَّةُ سَيِّدِنَا أَيُّوبَ وَسَيِّدِنَا يُونُسَ»,
// chapter 4 -- قِصَّةُ يُونُسَ وَحِكْمَتُهَا. Printed page 239, top two
// paragraphs, ending before ch5's heading يُونُسُ بَيْنَ قَوْمِهِ further down
// the same page. Transcribed by hand from the scan (vision OCR, 300dpi
// render) against ../CHAPTER-FORMAT.md.
//
// Two paragraphs of the book's most literary, image-heavy prose: the
// Yūnus story is framed as confirming the same lesson as Ayyūb's -- that
// Allah's power and mercy reach a person exactly at the point where every
// human way out has closed (paragraph 1's extended metaphor of the
// grinding millstone of death), and that the same hand of power draws the
// weak human back out whole, as if nothing had touched him (paragraph 2).
//
// Grammar / lexical notes:
//   -- Both paragraphs are printed as very long sentences with few
//      commas; split here at natural clause boundaries into shorter
//      entries (house convention, matching qasas-v3 ch7/ch9/ch10/ch12/
//      ch13) -- no rewording, same printed text and order throughout.
//      qs-v10-c04-002's أَيُّوبَ, part of the same subordinate chain,
//      stays 7 tokens; qs-v10-c04-012/013 (الْقَوِيَّةِ الْقَاهِرَةِ، / الرَّحِيمَةِ
//      الْحَكِيمَةِ،) stay only 2 tokens each -- below the build floor on
//      their own, but the chapter clears the five-buildable-sentence
//      minimum comfortably from its other sentences.
//   -- إِلَهِيّ ("divine," new) is a distinct adjectival lemma from the
//      already-known إِلٰه ("a god," noun) -- different part of speech and
//      sense, same root.
//   -- أَشْدَاقِ (qs-v10-c04-013) is the broken plural of the new شِدْق
//      ("jaw") -- tagged lemma شِدْق, features pl.gen.constr, per the
//      corpus's standing broken-plural convention.
//   -- مَخْدُوشٍ / مَنْقُوصٍ / مَحْفُوظاً (all new) are passive participles
//      functioning as predicate adjectives after غَيْرَ / كَأَنَّمَا كَانَ --
//      each tagged as its own lemma distinct from its verb, matching how
//      قَادِر/صَابِر/مُسْتَجَاب were treated earlier in this volume.
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): تَأْتِي (أَتَى)، قِصَّة،
//      يُونُس (this volume, ch4 itself first names him -- protagonist
//      proper noun, not listed in newWords, same convention as أَيُّوب
//      ch1)، أَيُّوب، تَعَالَى، عَبْد، اِنْقَطَعَ، رَجَاء، يَأْس، نُور، جَمِيع، قَوِيّ،
//      مَوْت، يَد، رَحِيم، حَكِيم، أَخْرَجَ، هَذَا، إِنْسَان، ضَعِيف، خَرَجَ، سَلِيم
//      (this volume, ch1)، غَيْر، كَانَ، عَلَى، فِي، بَيْت، بَيْنَ، أَهْل
//      are all already taught and are NOT re-listed in newWords here.
//
// 37 new words (مَقْرُون، مُؤَيِّد، إِثْبَات، قُدْرَة، لُطْف، إِغَاثَة، حِين، غَشِيَ،
// قَاتِل، ظَلَام، حَالِك، اِنْسَدَّ، مَنْفَذ، هَوَاء، أَمَل، دَارَ، رَحَى، سَرِيع، طَحَنَ،
// حَبَّة، حَيَاة، نَاعِم، دَقِيق، بَرَزَ، هُنَالِكَ، إِلَهِيّ، قَاهِر، شِدْق، أَسَد، ضَارِي،
// فَاتِك، خَدَشَ، كَامِل، نَقَصَ، فِرَاش، كَأَنَّمَا، مَحْفُوظ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch4',
  title: { ar: 'قِصَّةُ يُونُسَ وَحِكْمَتُهَا', en: 'The Story of Yūnus and Its Wisdom' },
  newWords: [
    'مَقْرُون', 'مُؤَيِّد', 'إِثْبَات', 'قُدْرَة', 'لُطْف', 'إِغَاثَة', 'حِين', 'غَشِيَ',
    'قَاتِل', 'ظَلَام', 'حَالِك', 'اِنْسَدَّ', 'مَنْفَذ', 'هَوَاء', 'أَمَل', 'دَارَ',
    'رَحَى', 'سَرِيع', 'طَحَنَ', 'حَبَّة', 'حَيَاة', 'نَاعِم', 'دَقِيق', 'بَرَزَ',
    'هُنَالِكَ', 'إِلَهِيّ', 'قَاهِر', 'شِدْق', 'أَسَد', 'ضَارِي', 'فَاتِك', 'خَدَشَ',
    'كَامِل', 'نَقَصَ', 'فِرَاش', 'كَأَنَّمَا', 'مَحْفُوظ',
  ],
  lemmas: {
    'مَقْرُون': { gloss: 'coupled, linked' },
    'مُؤَيِّد': { gloss: 'corroborating, supporting' },
    'إِثْبَات': { gloss: 'establishing, proof' },
    'قُدْرَة': { gloss: 'power, ability' },
    'لُطْف': { gloss: 'kindness, gentleness' },
    'إِغَاثَة': { gloss: 'aid, rescue' },
    'حِين': { gloss: 'when, a time' },
    'غَشِيَ': { gloss: 'to cover, overwhelm' },
    'قَاتِل': { gloss: 'deadly, lethal' },
    'ظَلَام': { gloss: 'darkness' },
    'حَالِك': { gloss: 'pitch-black, intense' },
    'اِنْسَدَّ': { gloss: 'to become blocked, closed' },
    'مَنْفَذ': { gloss: 'outlet, way out' },
    'هَوَاء': { gloss: 'air' },
    'أَمَل': { gloss: 'hope' },
    'دَارَ': { gloss: 'to turn, revolve' },
    'رَحَى': { gloss: 'millstone' },
    'سَرِيع': { gloss: 'fast, quick' },
    'طَحَنَ': { gloss: 'to grind' },
    'حَبَّة': { gloss: 'grain, seed' },
    'حَيَاة': { gloss: 'life' },
    'نَاعِم': { gloss: 'soft, fine' },
    'دَقِيق': { gloss: 'delicate, fine' },
    'بَرَزَ': { gloss: 'to emerge, become manifest' },
    'هُنَالِكَ': { gloss: 'there, at that point' },
    'إِلَهِيّ': { gloss: 'divine' },
    'قَاهِر': { gloss: 'overpowering, dominant' },
    'شِدْق': { gloss: 'jaw, side of the mouth' },
    'أَسَد': { gloss: 'lion' },
    'ضَارِي': { gloss: 'ferocious, predatory' },
    'فَاتِك': { gloss: 'deadly, lethal' },
    'خَدَشَ': { gloss: 'to scratch' },
    'كَامِل': { gloss: 'complete, whole' },
    'نَقَصَ': { gloss: 'to diminish, lack' },
    'فِرَاش': { gloss: 'bed' },
    'كَأَنَّمَا': { gloss: 'as if' },
    'مَحْفُوظ': { gloss: 'protected, preserved' },
  },
  paragraphs: [
    {
      en: "The story of Yūnus comes coupled with the story of Ayyūb, corroborating it in establishing the power of Allah, exalted is He, and His kindness to His servants, and His aid to them when hope is cut off and deadly despair and pitch darkness overwhelm, and every outlet is closed off -- no light, no air, no hope, no expectation -- the millstone of death turning, powerful and swift, grinding the grain of life fine and delicate.",
      sentences: [
        {
          id: 'qs-v10-c04-001',
          ar: 'وَتَأْتِي قِصَّةُ يُونُسَ مَقْرُونَةً بِقِصَّةِ أَيُّوبَ',
          en: 'The story of Yūnus comes coupled with the story of Ayyūb,',
          tokens: [
            { surface: 'وَتَأْتِي', lemma: 'أَتَى', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to come; and comes' },
            { surface: 'قِصَّةُ', lemma: 'قِصَّة', pos: 'noun', features: 'nom.constr', gloss: 'the story of' },
            { surface: 'يُونُسَ', lemma: 'يُونُس', pos: 'proper', features: 'gen', gloss: 'Yūnus' },
            { surface: 'مَقْرُونَةً', lemma: 'مَقْرُون', pos: 'adj', features: 'indef.acc.f', root: 'ق ر ن', gloss: 'coupled, linked' },
            { surface: 'بِقِصَّةِ', lemma: 'قِصَّة', pos: 'noun', features: 'prep+gen.constr', gloss: 'with the story of' },
            { surface: 'أَيُّوبَ', lemma: 'أَيُّوب', pos: 'proper', features: 'gen', gloss: 'Ayyūb' },
          ],
        },
        {
          id: 'qs-v10-c04-002',
          ar: 'مُؤَيِّدَةً لَهَا فِي إِثْبَاتِ قُدْرَةِ اللَّهِ تَعَالَى',
          en: 'corroborating it in establishing the power of Allah, exalted is He,',
          tokens: [
            { surface: 'مُؤَيِّدَةً', lemma: 'مُؤَيِّد', pos: 'adj', features: 'indef.acc.f', root: 'أ ي د', gloss: 'corroborating, supporting' },
            { surface: 'لَهَا', lemma: 'لِ', pos: 'prep', features: 'prep+3fs', gloss: 'it' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'إِثْبَاتِ', lemma: 'إِثْبَات', pos: 'noun', features: 'gen.constr', gloss: 'establishing' },
            { surface: 'قُدْرَةِ', lemma: 'قُدْرَة', pos: 'noun', features: 'gen.constr', gloss: 'the power of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v10-c04-003',
          ar: 'وَلُطْفِهِ بِعِبَادِهِ وَإِغَاثَتِهِ لَهُمْ',
          en: 'and His kindness to His servants, and His aid to them,',
          tokens: [
            { surface: 'وَلُطْفِهِ', lemma: 'لُطْف', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and His kindness' },
            { surface: 'بِعِبَادِهِ', lemma: 'عَبْد', pos: 'noun', features: 'prep+pl.gen+3ms', gloss: 'to His servants' },
            { surface: 'وَإِغَاثَتِهِ', lemma: 'إِغَاثَة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and His aid' },
            { surface: 'لَهُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
          ],
        },
        {
          id: 'qs-v10-c04-004',
          ar: 'حِينَ يَنْقَطِعُ الرَّجَاءُ',
          en: 'when hope is cut off',
          tokens: [
            { surface: 'حِينَ', lemma: 'حِين', pos: 'adv', features: 'adv', gloss: 'when' },
            { surface: 'يَنْقَطِعُ', lemma: 'اِنْقَطَعَ', pos: 'verb', features: 'impf.3ms', gloss: 'to be cut off; is cut off' },
            { surface: 'الرَّجَاءُ', lemma: 'رَجَاء', pos: 'noun', features: 'def.nom', gloss: 'hope' },
          ],
        },
        {
          id: 'qs-v10-c04-005',
          ar: 'وَيَغْشَى الْيَأْسُ الْقَاتِلُ وَالظَّلَامُ الْحَالِكُ،',
          en: 'and deadly despair and pitch darkness overwhelm,',
          tokens: [
            { surface: 'وَيَغْشَى', lemma: 'غَشِيَ', pos: 'verb', features: 'conj+impf.3ms', root: 'غ ش ي', gloss: 'to cover, overwhelm; and overwhelms' },
            { surface: 'الْيَأْسُ', lemma: 'يَأْس', pos: 'noun', features: 'def.nom', gloss: 'despair' },
            { surface: 'الْقَاتِلُ', lemma: 'قَاتِل', pos: 'adj', features: 'def.nom', gloss: 'deadly, lethal' },
            { surface: 'وَالظَّلَامُ', lemma: 'ظَلَام', pos: 'noun', features: 'conj+def.nom', gloss: 'and the darkness' },
            { surface: 'الْحَالِكُ', lemma: 'حَالِك', pos: 'adj', features: 'def.nom', gloss: 'pitch-black, intense' },
          ],
        },
        {
          id: 'qs-v10-c04-006',
          ar: 'وَتَنْسَدُّ جَمِيعُ الْمَنَافِذِ،',
          en: 'and every outlet is closed off,',
          tokens: [
            { surface: 'وَتَنْسَدُّ', lemma: 'اِنْسَدَّ', pos: 'verb', features: 'conj+impf.3fs', root: 'س د د', gloss: 'to become blocked, closed; and is closed' },
            { surface: 'جَمِيعُ', lemma: 'جَمِيع', pos: 'noun', features: 'nom.constr', gloss: 'all of, every' },
            { surface: 'الْمَنَافِذِ', lemma: 'مَنْفَذ', pos: 'noun', features: 'def.gen.pl', gloss: 'the outlets' },
          ],
        },
        {
          id: 'qs-v10-c04-007',
          ar: 'فَلَا نُورَ وَلَا هَوَاءَ،',
          en: 'no light, and no air,',
          tokens: [
            { surface: 'فَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'so there is no' },
            { surface: 'نُورَ', lemma: 'نُور', pos: 'noun', features: 'acc', gloss: 'light' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'هَوَاءَ', lemma: 'هَوَاء', pos: 'noun', features: 'acc', gloss: 'air' },
          ],
        },
        {
          id: 'qs-v10-c04-008',
          ar: 'وَلَا أَمَلَ وَلَا رَجَاءَ،',
          en: 'no hope, and no expectation,',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'أَمَلَ', lemma: 'أَمَل', pos: 'noun', features: 'acc', gloss: 'hope' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and no' },
            { surface: 'رَجَاءَ', lemma: 'رَجَاء', pos: 'noun', features: 'acc', gloss: 'expectation, hope' },
          ],
        },
        {
          id: 'qs-v10-c04-009',
          ar: 'يَدُورُ رَحَى الْمَوْتِ قَوِيَّةً سَرِيعَةً',
          en: 'the millstone of death turns, powerful and swift,',
          tokens: [
            { surface: 'يَدُورُ', lemma: 'دَارَ', pos: 'verb', features: 'impf.3ms', gloss: 'to turn, revolve; turns' },
            { surface: 'رَحَى', lemma: 'رَحَى', pos: 'noun', features: 'nom.constr', gloss: 'the millstone of' },
            { surface: 'الْمَوْتِ', lemma: 'مَوْت', pos: 'noun', features: 'def.gen', gloss: 'death' },
            { surface: 'قَوِيَّةً', lemma: 'قَوِيّ', pos: 'adj', features: 'indef.acc.f', gloss: 'powerful' },
            { surface: 'سَرِيعَةً', lemma: 'سَرِيع', pos: 'adj', features: 'indef.acc.f', gloss: 'swift, quick' },
          ],
        },
        {
          id: 'qs-v10-c04-010',
          ar: 'تَطْحَنُ حَبَّةَ الْحَيَاةِ نَاعِمَةً دَقِيقَةً.',
          en: 'grinding the grain of life fine and delicate.',
          tokens: [
            { surface: 'تَطْحَنُ', lemma: 'طَحَنَ', pos: 'verb', features: 'impf.3fs', gloss: 'to grind; grinding' },
            { surface: 'حَبَّةَ', lemma: 'حَبَّة', pos: 'noun', features: 'acc.constr', gloss: 'the grain of' },
            { surface: 'الْحَيَاةِ', lemma: 'حَيَاة', pos: 'noun', features: 'def.gen', gloss: 'life' },
            { surface: 'نَاعِمَةً', lemma: 'نَاعِم', pos: 'adj', features: 'indef.acc.f', gloss: 'soft, fine' },
            { surface: 'دَقِيقَةً', lemma: 'دَقِيق', pos: 'adj', features: 'indef.acc.f', gloss: 'delicate, fine' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يُثْبِتُ اقْتِرَانُ قِصَّةِ يُونُسَ بِقِصَّةِ أَيُّوبَ؟',
          options: ['قُدْرَةَ اللَّهِ وَلُطْفَهُ بِعِبَادِهِ وَإِغَاثَتَهُ لَهُمْ عِنْدَ انْقِطَاعِ الرَّجَاءِ', 'أَنَّ الْقِصَّتَيْنِ لَا عَلَاقَةَ بَيْنَهُمَا', 'أَنَّ الإِنْسَانَ لَا يُبْتَلَى أَبَداً'],
          answer: 0,
          qEn: 'What does pairing the story of Yūnus with the story of Ayyūb establish?',
          optionsEn: ["Allah's power, His kindness to His servants, and His aid to them when hope is cut off", 'That the two stories are unrelated', 'That a person is never tried'],
        },
        {
          q: 'مَاذَا يَحْدُثُ حِينَ يَنْقَطِعُ الرَّجَاءُ كَمَا وَصَفَ الْكَاتِبُ؟',
          options: ['يَغْشَى الْيَأْسُ الْقَاتِلُ وَالظَّلَامُ الْحَالِكُ وَتَنْسَدُّ جَمِيعُ الْمَنَافِذِ', 'يَشْعُرُ الإِنْسَانُ بِالرَّاحَةِ وَالطُّمَأْنِينَةِ', 'لَا يَتَغَيَّرُ شَيْءٌ'],
          answer: 0,
          qEn: 'What happens when hope is cut off, as the author describes?',
          optionsEn: ['Deadly despair and pitch darkness overwhelm, and every outlet is closed off', 'The person feels comfort and tranquility', 'Nothing changes'],
        },
      ],
    },
    {
      en: 'There the hand of divine power emerges -- powerful and overpowering, merciful and wise -- and draws this weak human out from the jaws of the ferocious lion and deadly death, so he comes out sound, not scratched, whole, not diminished, as if he had been on his bed in his house, protected among his family.',
      sentences: [
        {
          id: 'qs-v10-c04-011',
          ar: 'هُنَالِكَ تَبْرُزُ يَدُ الْقُدْرَةِ الْإِلَهِيَّةِ،',
          en: 'There the hand of divine power emerges,',
          tokens: [
            { surface: 'هُنَالِكَ', lemma: 'هُنَالِكَ', pos: 'adv', features: 'adv', gloss: 'there' },
            { surface: 'تَبْرُزُ', lemma: 'بَرَزَ', pos: 'verb', features: 'impf.3fs', gloss: 'to emerge, become manifest; emerges' },
            { surface: 'يَدُ', lemma: 'يَد', pos: 'noun', features: 'nom.constr', gloss: 'the hand of' },
            { surface: 'الْقُدْرَةِ', lemma: 'قُدْرَة', pos: 'noun', features: 'def.gen', gloss: 'the power' },
            { surface: 'الْإِلَهِيَّةِ', lemma: 'إِلَهِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'divine' },
          ],
        },
        {
          id: 'qs-v10-c04-012',
          ar: 'الْقَوِيَّةِ الْقَاهِرَةِ،',
          en: 'powerful and overpowering,',
          tokens: [
            { surface: 'الْقَوِيَّةِ', lemma: 'قَوِيّ', pos: 'adj', features: 'def.gen.f', gloss: 'the powerful' },
            { surface: 'الْقَاهِرَةِ', lemma: 'قَاهِر', pos: 'adj', features: 'def.gen.f', gloss: 'the overpowering' },
          ],
        },
        {
          id: 'qs-v10-c04-013',
          ar: 'الرَّحِيمَةِ الْحَكِيمَةِ،',
          en: 'merciful and wise,',
          tokens: [
            { surface: 'الرَّحِيمَةِ', lemma: 'رَحِيم', pos: 'adj', features: 'def.gen.f', gloss: 'the merciful' },
            { surface: 'الْحَكِيمَةِ', lemma: 'حَكِيم', pos: 'adj', features: 'def.gen.f', gloss: 'the wise' },
          ],
        },
        {
          id: 'qs-v10-c04-014',
          ar: 'فَتُخْرِجُ هَذَا الْإِنْسَانَ الضَّعِيفَ مِنْ أَشْدَاقِ الْأَسَدِ الضَّارِي',
          en: 'and draws this weak human out from the jaws of the ferocious lion',
          tokens: [
            { surface: 'فَتُخْرِجُ', lemma: 'أَخْرَجَ', pos: 'verb', features: 'conj+impf.3fs', gloss: 'to bring out; and draws out' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'الْإِنْسَانَ', lemma: 'إِنْسَان', pos: 'noun', features: 'def.acc', gloss: 'the human' },
            { surface: 'الضَّعِيفَ', lemma: 'ضَعِيف', pos: 'adj', features: 'def.acc', gloss: 'the weak' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'أَشْدَاقِ', lemma: 'شِدْق', pos: 'noun', features: 'pl.gen.constr', gloss: 'the jaws of' },
            { surface: 'الْأَسَدِ', lemma: 'أَسَد', pos: 'noun', features: 'def.gen', gloss: 'the lion' },
            { surface: 'الضَّارِي', lemma: 'ضَارِي', pos: 'adj', features: 'def.gen', gloss: 'the ferocious, predatory' },
          ],
        },
        {
          id: 'qs-v10-c04-015',
          ar: 'وَالْمَوْتِ الْفَاتِكِ،',
          en: 'and deadly death,',
          tokens: [
            { surface: 'وَالْمَوْتِ', lemma: 'مَوْت', pos: 'noun', features: 'conj+def.gen', gloss: 'and death' },
            { surface: 'الْفَاتِكِ', lemma: 'فَاتِك', pos: 'adj', features: 'def.gen', gloss: 'deadly, lethal' },
          ],
        },
        {
          id: 'qs-v10-c04-016',
          ar: 'فَيَخْرُجُ سَلِيماً غَيْرَ مَخْدُوشٍ،',
          en: 'so he comes out sound, not scratched,',
          tokens: [
            { surface: 'فَيَخْرُجُ', lemma: 'خَرَجَ', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to go out; so he comes out' },
            { surface: 'سَلِيماً', lemma: 'سَلِيم', pos: 'adj', features: 'indef.acc', gloss: 'sound, intact' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc', gloss: 'not, other than' },
            { surface: 'مَخْدُوشٍ', lemma: 'خَدَشَ', pos: 'adj', features: 'indef.gen', root: 'خ د ش', gloss: 'scratched' },
          ],
        },
        {
          id: 'qs-v10-c04-017',
          ar: 'كَامِلاً غَيْرَ مَنْقُوصٍ،',
          en: 'whole, not diminished,',
          tokens: [
            { surface: 'كَامِلاً', lemma: 'كَامِل', pos: 'adj', features: 'indef.acc', gloss: 'complete, whole' },
            { surface: 'غَيْرَ', lemma: 'غَيْر', pos: 'noun', features: 'acc', gloss: 'not, other than' },
            { surface: 'مَنْقُوصٍ', lemma: 'نَقَصَ', pos: 'adj', features: 'indef.gen', gloss: 'diminished, deficient' },
          ],
        },
        {
          id: 'qs-v10-c04-018',
          ar: 'كَأَنَّمَا كَانَ عَلَى فِرَاشِهِ فِي بَيْتِهِ،',
          en: 'as if he had been on his bed in his house,',
          tokens: [
            { surface: 'كَأَنَّمَا', lemma: 'كَأَنَّمَا', pos: 'part', features: 'part', gloss: 'as if' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; he had been' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'on' },
            { surface: 'فِرَاشِهِ', lemma: 'فِرَاش', pos: 'noun', features: 'gen+3ms', gloss: 'his bed' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'بَيْتِهِ', lemma: 'بَيْت', pos: 'noun', features: 'gen+3ms', gloss: 'his house' },
          ],
        },
        {
          id: 'qs-v10-c04-019',
          ar: 'مَحْفُوظاً بَيْنَ أَهْلِهِ.',
          en: 'protected among his family.',
          tokens: [
            { surface: 'مَحْفُوظاً', lemma: 'مَحْفُوظ', pos: 'adj', features: 'indef.acc', gloss: 'protected, preserved' },
            { surface: 'بَيْنَ', lemma: 'بَيْنَ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'أَهْلِهِ', lemma: 'أَهْل', pos: 'noun', features: 'gen+3ms', gloss: 'his family' },
          ],
        },
      ],
      checks: [
        {
          q: 'مِمَّاذَا تُخْرِجُ يَدُ الْقُدْرَةِ الإِلَهِيَّةِ الإِنْسَانَ الضَّعِيفَ؟',
          options: ['مِنْ أَشْدَاقِ الأَسَدِ الضَّارِي وَالْمَوْتِ الْفَاتِكِ', 'مِنَ الْفَقْرِ وَالْحَاجَةِ', 'مِنَ الْمَرَضِ الْعَادِيِّ'],
          answer: 0,
          qEn: 'From what does the hand of divine power draw out the weak human?',
          optionsEn: ['From the jaws of the ferocious lion and deadly death', 'From poverty and need', 'From an ordinary illness'],
        },
        {
          q: 'كَيْفَ يَخْرُجُ الإِنْسَانُ مِنْ أَشْدَاقِ الْمَوْتِ بِقُدْرَةِ اللَّهِ؟',
          options: ['سَلِيماً كَامِلاً، كَأَنَّمَا كَانَ مَحْفُوظاً بَيْنَ أَهْلِهِ', 'مَجْرُوحاً مُثْخَناً بِالْجِرَاحِ', 'بَعْدَ زَمَنٍ طَوِيلٍ مِنَ الْأَلَمِ'],
          answer: 0,
          qEn: "How does the person emerge from the jaws of death by Allah's power?",
          optionsEn: ['Sound and whole, as if he had been protected among his family', 'Wounded and covered in injuries', 'After a long period of pain'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'يَدُورُ رَحَى الْمَوْتِ',
        post: 'سَرِيعَةً تَطْحَنُ حَبَّةَ الْحَيَاةِ.',
        en: 'The millstone of death turns, powerful and swift, grinding the grain of life.',
        options: ['قَوِيَّةً', 'قَوِيٌّ', 'قَوِيَّةٌ', 'أَقْوَى'],
        answer: 0,
        rationales: [
          'Indefinite accusative feminine -- adverbial state (حال) describing رَحَى, matching the printed case, gender, and definiteness.',
          'Masculine -- wrong gender; رَحَى takes feminine agreement.',
          'Nominative -- wrong case; a حال is accusative.',
          'Elative -- wrong form for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَيَخْرُجُ سَلِيماً غَيْرَ',
        post: '، كَامِلاً غَيْرَ مَنْقُوصٍ.',
        en: 'So he comes out sound, not scratched, whole, not diminished.',
        options: ['مَخْدُوشٍ', 'مَخْدُوشاً', 'خَدَشَ', 'خَادِش'],
        answer: 0,
        rationales: [
          'Indefinite genitive -- complement of غَيْرَ, matching the printed case.',
          'Accusative -- wrong case; غَيْر always takes a genitive complement.',
          'Verb -- wrong part of speech for this position.',
          'Active participle ("scratching") -- wrong voice; the person is scratched, not scratching.',
        ],
      },
      {
        type: 'cloze',
        pre: 'هُنَالِكَ',
        post: 'يَدُ الْقُدْرَةِ الْإِلَهِيَّةِ.',
        en: 'There the hand of divine power emerges.',
        options: ['تَبْرُزُ', 'بَرَزَ', 'يَبْرُزُ', 'بَارِزَة'],
        answer: 0,
        rationales: [
          '3rd feminine singular imperfect -- agreeing with the feminine subject يَدُ, matching the printed تَبْرُزُ.',
          'Perfect -- wrong tense; the sentence describes a recurring event.',
          '3rd masculine singular -- wrong gender; يَد is feminine.',
          'Active participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْرُجُ الرَّجُلُ سَلِيماً',
        pre: '',
        post: 'سَلِيماً',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَخْرُجُ', 'يَخْرُجُ', 'تَخْرُجُ', 'نَخْرُجُ'],
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
        base: 'يَخْرُجُ الرَّجُلُ سَلِيماً',
        pre: '',
        post: 'سَلِيماً',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَخْرُجُ', 'يَخْرُجُ', 'أَخْرُجُ', 'نَخْرُجُ'],
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
        base: 'يَخْرُجُ الرَّجُلُ سَلِيماً',
        pre: '',
        post: 'سَلِيماً',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَخْرُجُونَ', 'يَخْرُجُ', 'تَخْرُجُ', 'نَخْرُجُ'],
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

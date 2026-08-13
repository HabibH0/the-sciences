// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 2 -- كُفْرَانُ ثَمُودَ.
// Printed pages 97 (from ch2's own heading box, partway down the page right
// after ch1's closing line) - 98 (top portion only, ending before ch3's own
// box عِبَادَةُ الْأَصْنَامِ partway down that page). Transcribed by hand from
// the scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md and
// QASAS_VOLUME_MAP.md's volume 5 table.
//
// Thamūd's prosperity (ch1) does not turn them to gratitude but to
// disbelief and arrogance: they boast of their strength, imagine
// themselves immune to death, and reason (wrongly) that Nūḥ's people
// drowned only because they lived in a valley and ʿĀd perished only
// because they lived on open, exposed ground -- while Thamūd, carved into
// the mountains themselves, felt safe from both fear and death.
//
// Grammar / lexical notes:
//   -- ثَمُودَ (qs-v5-c02-006, object of يَحْمِلْ) is accusative, bare fatḥa,
//      per the diptote convention chapter 1 already established.
//   -- عَاداً (qs-v5-c02-012) is the ISM of أَنَّ ("that ʿĀd..."), hence
//      accusative -- it is also notionally the subject of the following
//      plural verb هَلَكُوا (a collective/plural-agreement construction,
//      "ʿĀd -- they perished"), but its own case is governed by أَنَّ, not
//      by هَلَكُوا, so it is tagged 'acc' rather than 'nom'.
//   -- لَعَلَّهُمْ (qs-v5-c02-010) follows the corpus's established pattern
//      for إِنَّ-sisters with an attached pronoun subject (cf. إِنَّهُ / وَلَكِنَّهُمْ
//      already tagged 'part+3ms' / 'conj+part+3mp' throughout qasas-v2/v3):
//      lemma لَعَلَّ, pos 'part', features 'part+3mp' -- the trailing هُمْ is
//      the attached "subject" that لَعَلَّ, as one of أخوات إنّ, takes in the
//      accusative. لَعَلَّ itself is a grammatical particle (like إِنَّ/أَنَّ/
//      لَكِنَّ), so it is not counted among newWords, matching how those
//      other sisters-of-إِنَّ are never listed as vocabulary.
//   -- Several clause boundaries here split a single printed run at a
//      coordinating وَ or a subordinating لِأَنَّ/أَنَّ even where the source
//      prints no comma (qs-v5-c02-006/007/2ndhalf, 008/009, 010/011,
//      012/013) -- each half has its own verb/predicate, and this mirrors
//      the parallel, comma-marked construction of qs-v5-c02-006/007
//      exactly (وَظَنُّوا أَنَّهُمْ لَا يَمُوتُونَ، وَلَا يَخْرُجُونَ...), so the
//      unmarked runs are split the same way for consistency and shorter
//      clause units, per the shared brief's "when in doubt, split" rule.
//   -- أُوتُوا (qs-v5-c02-003) is passive perfect of آتَى ("to give"): "what
//      they were given" -- tagged 'perf.pass.3mp' per
//      CHAPTER-FORMAT.md's own worked example (conj+perf.pass.3ms).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): لَكِنَّ، كُلّ، ذَلِكَ، لَمْ،
//      عَلَى، شُكْر، عِبَادَة، اللَّه، تَعَالَى، بَلْ، ثَمُود، آتَى، مَنْ، أَشَدّ، مِنْ،
//      قُوَّة، نَسِيَ، فَرِحَ، مَا، قَالَ، ظَنَّ، أَنَّ، لَا، مَاتَ، خَرَجَ، قَصْر، جَنَّة،
//      أَبَدًا، مَوْت، دَخَلَ، هَذِهِ، جَبَل، وَجَدَ، إِلَى، سَبِيل، كَانَ، أُمَّة، نُوح،
//      إِنَّمَا، غَرِقَ، لِأَنَّ، وَادِي، عَاد، هَلَكَ، فِي (all already taught) are
//      NOT re-listed in newWords here.
//
// 4 new words (طُغْيَان، سَهْل، خَوْف، آمِن).
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch2',
  title: { ar: 'كُفْرَانُ ثَمُودَ', en: 'The Ingratitude of Thamūd' },
  newWords: ['طُغْيَان', 'سَهْل', 'خَوْف', 'آمِن'],
  lemmas: {
    طُغْيَان: { gloss: 'transgression, tyranny, rebellion' },
    سَهْل: { gloss: 'a plain, open/flat land' },
    خَوْف: { gloss: 'fear' },
    آمِن: { gloss: 'safe, secure' },
  },
  paragraphs: [
    {
      en: "But all of that did not lead Thamūd to gratitude and the worship of Allah, exalted is He. Rather, that drove them to disbelief and transgression, and they forgot Allah and rejoiced in what they had been given, and said: Who is stronger than us in might? And they thought they would never die, and would never leave their palaces and gardens. And they thought that death could not enter these mountains, and could find no way to them! Perhaps they thought that Nūḥ's nation had only drowned because it was in the valley, and that ʿĀd had only perished because they were in the open plain! And that they were, safe from fear and death, in a secure place.",
      sentences: [
        {
          id: 'qs-v5-c02-001',
          ar: 'وَلَكِنَّ كُلَّ ذَلِكَ لَمْ يَحْمِلْ ثَمُودَ عَلَى الشُّكْرِ وَعِبَادَةِ اللَّهِ تَعَالَى.',
          en: 'But all of that did not lead Thamūd to gratitude and the worship of Allah, exalted is He.',
          tokens: [
            { surface: 'وَلَكِنَّ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj', gloss: 'but' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'constr.acc', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'did not' },
            { surface: 'يَحْمِلْ', lemma: 'حَمَلَ', pos: 'verb', features: 'impf.3ms', root: 'ح م ل', gloss: 'to carry, lead; did not lead' },
            { surface: 'ثَمُودَ', lemma: 'ثَمُود', pos: 'proper', features: 'acc', gloss: 'Thamūd' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to, toward' },
            { surface: 'الشُّكْرِ', lemma: 'شُكْر', pos: 'noun', features: 'def.gen', root: 'ش ك ر', gloss: 'gratitude, thankfulness' },
            { surface: 'وَعِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'conj+constr.gen', root: 'ع ب د', gloss: 'and the worship of' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'تَعَالَى', lemma: 'تَعَالَى', pos: 'verb', features: 'perf.3ms', gloss: 'to be exalted; exalted is He' },
          ],
        },
        {
          id: 'qs-v5-c02-002',
          ar: 'بَلْ حَمَلَهُمْ ذَلِكَ عَلَى الْكُفْرِ وَالطُّغْيَانِ،',
          en: 'Rather, that drove them to disbelief and transgression,',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'حَمَلَهُمْ', lemma: 'حَمَلَ', pos: 'verb', features: 'perf.3ms+3mp', root: 'ح م ل', gloss: 'to carry, lead; drove them' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'to, toward' },
            { surface: 'الْكُفْرِ', lemma: 'كُفْر', pos: 'noun', features: 'def.gen', gloss: 'disbelief' },
            { surface: 'وَالطُّغْيَانِ', lemma: 'طُغْيَان', pos: 'noun', features: 'conj+def.gen', root: 'ط غ ي', gloss: 'transgression, tyranny' },
          ],
        },
        {
          id: 'qs-v5-c02-003',
          ar: 'وَنَسُوا اللَّهَ وَفَرِحُوا بِمَا أُوتُوا',
          en: 'and they forgot Allah and rejoiced in what they had been given,',
          tokens: [
            { surface: 'وَنَسُوا', lemma: 'نَسِيَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to forget; and forgot' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'وَفَرِحُوا', lemma: 'فَرِحَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to rejoice; and rejoiced' },
            { surface: 'بِمَا', lemma: 'مَا', pos: 'rel', features: 'prep+rel', gloss: 'in what' },
            { surface: 'أُوتُوا', lemma: 'آتَى', pos: 'verb', features: 'perf.pass.3mp', root: 'أ ت ي', gloss: 'to give; they were given' },
          ],
        },
        {
          id: 'qs-v5-c02-004',
          ar: 'وَقَالُوا:',
          en: 'and said:',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v5-c02-005',
          ar: 'مَنْ أَشَدُّ مِنَّا قُوَّةً؟',
          en: 'Who is stronger than us in might?',
          tokens: [
            { surface: 'مَنْ', lemma: 'مَنْ', pos: 'rel', features: 'rel', gloss: 'who' },
            { surface: 'أَشَدُّ', lemma: 'أَشَدّ', pos: 'adj', features: 'indef.nom', root: 'ش د د', gloss: 'stronger, more intense' },
            { surface: 'مِنَّا', lemma: 'مِنْ', pos: 'prep', features: 'prep+1p', gloss: 'than us' },
            { surface: 'قُوَّةً', lemma: 'قُوَّة', pos: 'noun', features: 'indef.acc', root: 'ق و ي', gloss: 'in strength, might' },
          ],
        },
        {
          id: 'qs-v5-c02-006',
          ar: 'وَظَنُّوا أَنَّهُمْ لَا يَمُوتُونَ،',
          en: 'And they thought they would never die,',
          tokens: [
            { surface: 'وَظَنُّوا', lemma: 'ظَنَّ', pos: 'verb', features: 'conj+perf.3mp', root: 'ظ ن ن', gloss: 'to think, suppose; and thought' },
            { surface: 'أَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'part+3mp', gloss: 'that they' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَمُوتُونَ', lemma: 'مَاتَ', pos: 'verb', features: 'impf.3mp', root: 'م و ت', gloss: 'to die; they die' },
          ],
        },
        {
          id: 'qs-v5-c02-007',
          ar: 'وَلَا يَخْرُجُونَ مِنْ قُصُورِهِمْ وَجَنَّاتِهِمْ أَبَداً.',
          en: 'and would never leave their palaces and gardens.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَخْرُجُونَ', lemma: 'خَرَجَ', pos: 'verb', features: 'impf.3mp', root: 'خ ر ج', gloss: 'to leave, go out; they leave' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'قُصُورِهِمْ', lemma: 'قَصْر', pos: 'noun', features: 'pl.gen+3mp', gloss: 'their palaces' },
            { surface: 'وَجَنَّاتِهِمْ', lemma: 'جَنَّة', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their gardens' },
            { surface: 'أَبَداً', lemma: 'أَبَدًا', pos: 'adv', features: 'indef.acc', gloss: 'never, at all' },
          ],
        },
        {
          id: 'qs-v5-c02-008',
          ar: 'وَظَنُّوا أَنَّ الْمَوْتَ لَا يَدْخُلُ فِي هَذِهِ الْجِبَالِ',
          en: 'And they thought that death could not enter these mountains,',
          tokens: [
            { surface: 'وَظَنُّوا', lemma: 'ظَنَّ', pos: 'verb', features: 'conj+perf.3mp', root: 'ظ ن ن', gloss: 'to think, suppose; and thought' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الْمَوْتَ', lemma: 'مَوْت', pos: 'noun', features: 'def.acc', gloss: 'death' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَدْخُلُ', lemma: 'دَخَلَ', pos: 'verb', features: 'impf.3ms', root: 'د خ ل', gloss: 'to enter; enters' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'هَذِهِ', lemma: 'هَذِهِ', pos: 'dem', features: 'dem.f', gloss: 'these' },
            { surface: 'الْجِبَالِ', lemma: 'جَبَل', pos: 'noun', features: 'pl.def.gen', gloss: 'the mountains' },
          ],
        },
        {
          id: 'qs-v5-c02-009',
          ar: 'وَلَا يَجِدُ إِلَيْهِمْ سَبِيلاً!',
          en: 'and could find no way to them!',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَجِدُ', lemma: 'وَجَدَ', pos: 'verb', features: 'impf.3ms', root: 'و ج د', gloss: 'to find; finds' },
            { surface: 'إِلَيْهِمْ', lemma: 'إِلَى', pos: 'prep', features: 'prep+3mp', gloss: 'to them' },
            { surface: 'سَبِيلاً', lemma: 'سَبِيل', pos: 'noun', features: 'indef.acc', root: 'س ب ل', gloss: 'a way, path' },
          ],
        },
        {
          id: 'qs-v5-c02-010',
          ar: 'لَعَلَّهُمْ كَانُوا يَظُنُّونَ أَنَّ أُمَّةَ نُوحٍ إِنَّمَا غَرِقَتْ',
          en: 'Perhaps they thought that Nūḥ\'s nation had only drowned',
          tokens: [
            { surface: 'لَعَلَّهُمْ', lemma: 'لَعَلَّ', pos: 'part', features: 'part+3mp', gloss: 'perhaps they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'يَظُنُّونَ', lemma: 'ظَنَّ', pos: 'verb', features: 'impf.3mp', root: 'ظ ن ن', gloss: 'to think, suppose; thinking' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'أُمَّةَ', lemma: 'أُمَّة', pos: 'noun', features: 'constr.acc', gloss: 'the nation of' },
            { surface: 'نُوحٍ', lemma: 'نُوح', pos: 'proper', features: 'gen', gloss: 'Nūḥ' },
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'only, merely' },
            { surface: 'غَرِقَتْ', lemma: 'غَرِقَ', pos: 'verb', features: 'perf.3fs', root: 'غ ر ق', gloss: 'to drown; drowned' },
          ],
        },
        {
          id: 'qs-v5-c02-011',
          ar: 'لِأَنَّهَا كَانَتْ فِي الْوَادِي.',
          en: 'because it was in the valley.',
          tokens: [
            { surface: 'لِأَنَّهَا', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3fs', root: 'أ ن ن', gloss: 'because it' },
            { surface: 'كَانَتْ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْوَادِي', lemma: 'وَادِي', pos: 'noun', features: 'def.gen', gloss: 'the valley' },
          ],
        },
        {
          id: 'qs-v5-c02-012',
          ar: 'وَأَنَّ عَاداً إِنَّمَا هَلَكُوا',
          en: "and that ʿĀd had only perished",
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'عَاداً', lemma: 'عَاد', pos: 'proper', features: 'acc', gloss: 'ʿĀd' },
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'only, merely' },
            { surface: 'هَلَكُوا', lemma: 'هَلَكَ', pos: 'verb', features: 'perf.3mp', gloss: 'to perish; perished' },
          ],
        },
        {
          id: 'qs-v5-c02-013',
          ar: 'لِأَنَّهُمْ كَانُوا فِي السَّهْلِ!',
          en: 'because they were in the open plain!',
          tokens: [
            { surface: 'لِأَنَّهُمْ', lemma: 'لِأَنَّ', pos: 'part', features: 'part+3mp', root: 'أ ن ن', gloss: 'because they' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'السَّهْلِ', lemma: 'سَهْل', pos: 'noun', features: 'def.gen', root: 'س ه ل', gloss: 'the plain, open/flat land' },
          ],
        },
        {
          id: 'qs-v5-c02-014',
          ar: 'وَأَنَّهُمْ مِنَ الْخَوْفِ وَالْمَوْتِ بِمَكَانٍ آمِنٍ.',
          en: 'And that they were, safe from fear and death, in a secure place.',
          tokens: [
            { surface: 'وَأَنَّهُمْ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part+3mp', gloss: 'and that they' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'الْخَوْفِ', lemma: 'خَوْف', pos: 'noun', features: 'def.gen', root: 'خ و ف', gloss: 'fear' },
            { surface: 'وَالْمَوْتِ', lemma: 'مَوْت', pos: 'noun', features: 'conj+def.gen', gloss: 'and death' },
            { surface: 'بِمَكَانٍ', lemma: 'مَكَان', pos: 'noun', features: 'prep+indef.gen', gloss: 'in a place' },
            { surface: 'آمِنٍ', lemma: 'آمِن', pos: 'adj', features: 'indef.gen', root: 'أ م ن', gloss: 'safe, secure' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَتْ ثَمُودُ عَنْ قُوَّتِهَا؟',
          options: ['قَالُوا: مَنْ أَشَدُّ مِنَّا قُوَّةً؟', 'قَالُوا: نَحْنُ أَضْعَفُ النَّاسِ', 'قَالُوا: سَنَشْكُرُ اللَّهَ دَائِماً'],
          answer: 0,
          qEn: 'What did Thamūd say about their own strength?',
          optionsEn: ['They said: Who is stronger than us in might?', 'They said: We are the weakest of people', 'They said: We will always thank Allah'],
        },
        {
          q: 'مَاذَا ظَنَّتْ ثَمُودُ عَنِ الْمَوْتِ؟',
          options: ['ظَنُّوا أَنَّهُ لَا يَدْخُلُ فِي جِبَالِهِمْ', 'ظَنُّوا أَنَّهُ قَرِيبٌ مِنْهُمْ', 'ظَنُّوا أَنَّ صَالِحاً سَيَحْمِيهِمْ مِنْهُ'],
          answer: 0,
          qEn: 'What did Thamūd think about death?',
          optionsEn: ['They thought it could not enter their mountains', 'They thought it was near them', 'They thought Ṣāliḥ would protect them from it'],
        },
        {
          q: 'لِمَاذَا ظَنُّوا أَنَّ أُمَّةَ نُوحٍ غَرِقَتْ وَأَنَّ عَاداً هَلَكُوا؟',
          options: ['لِأَنَّ أُمَّةَ نُوحٍ كَانَتْ فِي الْوَادِي وَعَاداً كَانُوا فِي السَّهْلِ', 'لِأَنَّهُمْ لَمْ يَكُونُوا أَقْوِيَاءَ', 'لِأَنَّهُمْ عَصَوْا صَالِحاً'],
          answer: 0,
          qEn: "Why did they think Nūḥ's nation drowned and ʿĀd perished?",
          optionsEn: ["Because Nūḥ's nation was in the valley and ʿĀd was in the open plain", 'Because they were not strong', 'Because they disobeyed Ṣāliḥ'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَظَنُّوا أَنَّهُمْ لَا',
        post: '،',
        en: 'and they thought they would never die,',
        options: ['يَمُوتُونَ', 'يَمُوتُ', 'مَاتُوا', 'تَمُوتُونَ'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches أَنَّهُمْ ("they").',
          '3rd masculine singular -- wrong number; the subject is plural.',
          'Perfect -- wrong tense; the negation لَا here pairs with the imperfect, not the perfect.',
          '2nd masculine plural -- wrong person; the subject is "they," not "you all."',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَلَا',
        post: 'إِلَيْهِمْ سَبِيلاً!',
        en: 'and could find no way to them!',
        options: ['يَجِدُ', 'يَجِدُونَ', 'وَجَدَ', 'تَجِدُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- matches الْمَوْتُ ("death"), which is masculine singular.',
          '3rd masculine plural -- wrong number; الْمَوْت is singular.',
          'Perfect -- wrong tense; the sentence continues the same present/habitual tense as لَا يَدْخُلُ just before it.',
          '2nd/3rd feminine singular -- wrong gender; الْمَوْت is masculine.',
        ],
      },
      {
        type: 'cloze',
        pre: 'لِأَنَّهُمْ',
        post: 'فِي السَّهْلِ!',
        en: 'because they were in the open plain!',
        options: ['كَانُوا', 'كَانَ', 'كَانَتْ', 'يَكُونُونَ'],
        answer: 0,
        rationales: [
          'Perfect, 3rd masculine plural -- matches the attached pronoun هُمْ on لِأَنَّهُمْ.',
          '3rd masculine singular -- wrong number; the subject is plural.',
          '3rd feminine singular -- wrong gender and number.',
          'Imperfect -- wrong tense; the sentence narrates a past state.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَخْرُجُ الرَّجُلُ مِنَ الْقَصْرِ',
        pre: '',
        post: 'مِنَ الْقَصْرِ',
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
        base: 'يَخْرُجُ الرَّجُلُ مِنَ الْقَصْرِ',
        pre: '',
        post: 'مِنَ الْقَصْرِ',
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
        base: 'يَخْرُجُ الرَّجُلُ مِنَ الْقَصْرِ',
        pre: '',
        post: 'مِنَ الْقَصْرِ',
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

// قَصَصُ النَّبِيِّينَ, volume 4 «الْعَاصِفَةُ», chapter 10 -- عِنَادُ عَادٍ.
// Printed pages 92 (after ch9's closing بِإِذْنِهِ) - 93 (top, ending before
// ch11's heading الْعَذَابُ). Transcribed by hand from a 200dpi render
// against ../CHAPTER-FORMAT.md.
//
// ʿĀd's final refusal: no proof will move them off their fathers' gods,
// they openly deny fearing Hūd's God or His punishment, and -- goading him
// with "when does it come?" -- Hūd's only answer is a short direct
// Qur'anic quotation disclaiming any knowledge beyond his role as a plain
// warner. ʿĀd's chillingly casual reply (they "long to see" the punishment)
// closes the chapter, setting up ch11's storm.
//
// Grammar / lexical notes:
//   -- أَنَتْرُكُ (qs-v4-c10-005) fuses the interrogative hamza onto the
//      already-taught تَرَكَ, no separate atom (see this volume's ch6 header
//      note on أَفَرَأَيْتُمْ/أَوَرَأَيْتُمْ for the general precedent).
//   -- قَائِل (qs-v4-c10-005) is the active-participle noun of the
//      already-taught قَالَ, tagged as its own lemma -- matching the
//      participle-as-separate-entry precedent already set for سَاجِد
//      (qasas-v2 ch1) against سَجَدَ.
//   -- The short Qur'anic quotation ﴿إِنَّمَا الْعِلْمُ عِنْدَ اللَّهِ وَإِنَّمَا أَنَا
//      نَذِيرٌ مُبِينٌ﴾ (11:31, qs-v4-c10-{011..014}) is split into ≤2-token
//      fragments per the house convention (this volume's ch6 header note).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): سَمِعَ، عَادٍ، كُلّ، ذَلِكَ،
//      لَكِنَّ، لَمْ، آمَنَ، ضَاعَ، في، هُود، قَالَ، يَا، عِنْدَ، دَلِيل، لَا، بَيِّنَة،
//      تَرَكَ، إِلَه، قَدِيم، لِ، جَدِيد، عَبَدَ، أَب، إِنَّ، خَافَ، عَذَاب، ذَكَرَ،
//      أَيْنَ، هُوَ، مَتَى، جَاءَ، عِلْم، اللَّه، أَنَا، نَذِير، مُبِين، اِنْتَظَرَ، أَنْ، رَأَى،
//      تَعَجَّبَ، مِنْ، تَأَسَّفَ، عَلَى، سَفَاهَة are all already taught and NOT
//      re-listed.
//
// 3 new words this chapter: قَوْل، قَائِل، جُرْأَة.
//
// No page footnotes (book_note) on these pages.
export const CHAPTER = {
  id: 'ch10',
  title: { ar: 'عِنَادُ عَادٍ', en: 'The Obstinacy of ʿĀd' },
  newWords: ['قَوْل', 'قَائِل', 'جُرْأَة'],
  lemmas: {
    'قَوْل': { gloss: 'saying, statement' },
    'قَائِل': { gloss: 'speaker, one who says' },
    'جُرْأَة': { gloss: 'boldness, audacity' },
  },
  paragraphs: [
    {
      lines: true,
      en: "ʿĀd heard all of that, but they did not believe! Hūd's advice was wasted on them, and Hūd's wisdom was wasted on them. They said: 'O Hūd, you have no proof and no clear sign! We will not leave, O Hūd, our old gods for your new saying. Shall we leave the gods which our fathers used to worship for the word of some speaker, never, ever? And O Hūd, indeed you do not believe in our gods nor fear them. So indeed we do not believe in your god nor fear his punishment. And indeed we often hear you mention the punishment, so where is it, O Hūd, and when does it come?' Hūd said: 'Indeed the knowledge is with Allah, and I am only a clear warner.' ʿĀd said: 'We await that punishment and long to see it.' Hūd was amazed at their boldness, and grieved over their foolishness.",
      sentences: [
        {
          id: 'qs-v4-c10-001',
          ar: 'سَمِعَتْ عَادٌ كُلَّ ذَلِكَ',
          en: 'ʿĀd heard all of that,',
          tokens: [
            { surface: 'سَمِعَتْ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3fs', gloss: 'to hear; heard' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'all of' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
          ],
        },
        {
          id: 'qs-v4-c10-002',
          ar: 'وَلَكِنَّهُمْ لَمْ يُؤْمِنُوا!',
          en: 'but they did not believe!',
          tokens: [
            { surface: 'وَلَكِنَّهُمْ', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+3mp', gloss: 'but they' },
            { surface: 'لَمْ', lemma: 'لَمْ', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يُؤْمِنُوا', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; did not believe' },
          ],
        },
        {
          id: 'qs-v4-c10-003',
          ar: 'ضَاعَتْ فِيهِمْ نَصِيحَةُ هُودٍ!',
          en: "Hūd's advice was wasted on them!",
          tokens: [
            { surface: 'ضَاعَتْ', lemma: 'ضَاعَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be wasted; was wasted' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'on them' },
            { surface: 'نَصِيحَةُ', lemma: 'نَصِيحَة', pos: 'noun', features: 'constr.nom', gloss: 'the advice of' },
            { surface: 'هُودٍ', lemma: 'هُود', pos: 'proper', features: 'gen', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c10-004',
          ar: 'ضَاعَتْ فِيهِمْ حِكْمَةُ هُودٍ.',
          en: "Hūd's wisdom was wasted on them.",
          tokens: [
            { surface: 'ضَاعَتْ', lemma: 'ضَاعَ', pos: 'verb', features: 'perf.3fs', gloss: 'to be wasted; was wasted' },
            { surface: 'فِيهِمْ', lemma: 'فِي', pos: 'prep', features: 'prep+3mp', gloss: 'on them' },
            { surface: 'حِكْمَةُ', lemma: 'حِكْمَة', pos: 'noun', features: 'constr.nom', gloss: 'the wisdom of' },
            { surface: 'هُودٍ', lemma: 'هُود', pos: 'proper', features: 'gen', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c10-005',
          ar: 'وَقَالُوا:',
          en: 'They said:',
          tokens: [
            { surface: 'وَقَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to say; and said' },
          ],
        },
        {
          id: 'qs-v4-c10-006',
          ar: 'يَا هُودُ مَا عِنْدَكَ دَلِيلٌ وَلَا بَيِّنَةٌ!',
          en: "'O Hūd, you have no proof and no clear sign!",
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'هُودُ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'عِنْدَكَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv+2ms', gloss: 'you have, with you' },
            { surface: 'دَلِيلٌ', lemma: 'دَلِيل', pos: 'noun', features: 'indef.nom', gloss: 'a proof' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'بَيِّنَةٌ', lemma: 'بَيِّنَة', pos: 'noun', features: 'indef.nom', gloss: 'a clear sign' },
          ],
        },
        {
          id: 'qs-v4-c10-007',
          ar: 'وَلَا نَتْرُكُ يَا هُودُ آلِهَتَنَا الْقَدِيمَةَ لِقَوْلِكَ الْجَدِيدِ.',
          en: 'We will not leave, O Hūd, our old gods for your new saying.',
          tokens: [
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَتْرُكُ', lemma: 'تَرَكَ', pos: 'verb', features: 'impf.1p', gloss: 'to leave; will we leave' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'هُودُ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'آلِهَتَنَا', lemma: 'إِلَه', pos: 'noun', features: 'pl.acc+1p', gloss: 'our gods' },
            { surface: 'الْقَدِيمَةَ', lemma: 'قَدِيم', pos: 'adj', features: 'def.acc.f', gloss: 'old' },
            { surface: 'لِقَوْلِكَ', lemma: 'قَوْل', pos: 'noun', features: 'prep+gen+2ms', gloss: 'for your saying' },
            { surface: 'الْجَدِيدِ', lemma: 'جَدِيد', pos: 'adj', features: 'def.gen', gloss: 'new' },
          ],
        },
        {
          id: 'qs-v4-c10-008',
          ar: 'أَنَتْرُكُ الآلِهَةَ الَّتِي كَانَ يَعْبُدُهَا آبَاؤُنَا لِقَوْلِ قَائِلٍ',
          en: 'Shall we leave the gods which our fathers used to worship for the word of some speaker,',
          tokens: [
            { surface: 'أَنَتْرُكُ', lemma: 'تَرَكَ', pos: 'verb', features: 'impf.1p', gloss: 'to leave; shall we leave' },
            { surface: 'الآلِهَةَ', lemma: 'إِلَه', pos: 'noun', features: 'pl.def.acc', gloss: 'the gods' },
            { surface: 'الَّتِي', lemma: 'الَّتِي', pos: 'rel', features: 'rel', gloss: 'which' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'يَعْبُدُهَا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms+3fs', gloss: 'to worship; used to worship them' },
            { surface: 'آبَاؤُنَا', lemma: 'أَب', pos: 'noun', features: 'pl.nom+1p', gloss: 'our fathers' },
            { surface: 'لِقَوْلِ', lemma: 'قَوْل', pos: 'noun', features: 'prep+constr.gen', gloss: 'for the word of' },
            { surface: 'قَائِلٍ', lemma: 'قَائِل', pos: 'noun', features: 'indef.gen', gloss: 'a speaker' },
          ],
        },
        {
          id: 'qs-v4-c10-009',
          ar: 'أَبَداً، أَبَداً.',
          en: 'never, ever?',
          tokens: [
            { surface: 'أَبَداً', lemma: 'أَبَداً', pos: 'adv', features: 'adv', gloss: 'never' },
            { surface: 'أَبَداً', lemma: 'أَبَداً', pos: 'adv', features: 'adv', gloss: 'ever (never, ever)' },
          ],
        },
        {
          id: 'qs-v4-c10-010',
          ar: 'وَيَا هُودُ إِنَّكَ لَا تُؤْمِنُ بِآلِهَتِنَا وَلَا تَخَافُهُمْ.',
          en: 'And O Hūd, indeed you do not believe in our gods nor fear them.',
          tokens: [
            { surface: 'وَيَا', lemma: 'يَا', pos: 'part', features: 'conj+part', gloss: 'and O' },
            { surface: 'هُودُ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'إِنَّكَ', lemma: 'إِنَّ', pos: 'part', features: 'part+2ms', gloss: 'indeed you' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تُؤْمِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.2ms', gloss: 'to believe; believe' },
            { surface: 'بِآلِهَتِنَا', lemma: 'إِلَه', pos: 'noun', features: 'prep+pl.gen+1p', gloss: 'in our gods' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَخَافُهُمْ', lemma: 'خَافَ', pos: 'verb', features: 'impf.2ms+3mp', gloss: 'to fear; fear them' },
          ],
        },
        {
          id: 'qs-v4-c10-011',
          ar: 'فَإِنَّا لَا نُؤْمِنُ بِإِلَهِكَ وَلَا نَخَافُ عَذَابَهُ.',
          en: 'So indeed we do not believe in your god nor fear his punishment.',
          tokens: [
            { surface: 'فَإِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'so indeed we' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نُؤْمِنُ', lemma: 'آمَنَ', pos: 'verb', features: 'impf.1p', gloss: 'to believe; believe' },
            { surface: 'بِإِلَهِكَ', lemma: 'إِلَه', pos: 'noun', features: 'prep+gen+2ms', gloss: 'in your god' },
            { surface: 'وَلَا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'نَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1p', gloss: 'to fear; fear' },
            { surface: 'عَذَابَهُ', lemma: 'عَذَاب', pos: 'noun', features: 'acc+3ms', gloss: 'his punishment' },
          ],
        },
        {
          id: 'qs-v4-c10-012',
          ar: 'وَإِنَّنَا نَسْمَعُكَ كَثِيراً تَذْكُرُ الْعَذَابَ،',
          en: 'And indeed we often hear you mention the punishment,',
          tokens: [
            { surface: 'وَإِنَّنَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'and indeed we' },
            { surface: 'نَسْمَعُكَ', lemma: 'سَمِعَ', pos: 'verb', features: 'impf.1p+2ms', gloss: 'to hear; we hear you' },
            { surface: 'كَثِيراً', lemma: 'كَثِير', pos: 'adv', features: 'indef.acc', gloss: 'often' },
            { surface: 'تَذْكُرُ', lemma: 'ذَكَرَ', pos: 'verb', features: 'impf.2ms', gloss: 'to mention; mention' },
            { surface: 'الْعَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'def.acc', gloss: 'the punishment' },
          ],
        },
        {
          id: 'qs-v4-c10-013',
          ar: 'فَأَيْنَ هُوَ يَا هُودُ،',
          en: 'so where is it, O Hūd,',
          tokens: [
            { surface: 'فَأَيْنَ', lemma: 'أَيْنَ', pos: 'adv', features: 'conj+adv', gloss: 'so where' },
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'noun', features: '3ms', gloss: 'it' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'هُودُ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c10-014',
          ar: 'وَمَتَى يَجِيءُ؟',
          en: 'and when does it come?',
          tokens: [
            { surface: 'وَمَتَى', lemma: 'مَتَى', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'يَجِيءُ', lemma: 'جَاءَ', pos: 'verb', features: 'impf.3ms', gloss: 'to come; does it come' },
          ],
        },
        {
          id: 'qs-v4-c10-015',
          ar: 'قَالَ هُودٌ:',
          en: 'Hūd said:',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
          ],
        },
        {
          id: 'qs-v4-c10-016',
          ar: '﴿إِنَّمَا الْعِلْمُ',
          en: "'Indeed the knowledge",
          tokens: [
            { surface: 'إِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'part', gloss: 'only, indeed' },
            { surface: 'الْعِلْمُ', lemma: 'عِلْم', pos: 'noun', features: 'def.nom', gloss: 'the knowledge' },
          ],
        },
        {
          id: 'qs-v4-c10-017',
          ar: 'عِنْدَ اللَّهِ',
          en: 'is with Allah,',
          tokens: [
            { surface: 'عِنْدَ', lemma: 'عِنْدَ', pos: 'adv', features: 'adv', gloss: 'with' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v4-c10-018',
          ar: 'وَإِنَّمَا أَنَا',
          en: 'and I am only',
          tokens: [
            { surface: 'وَإِنَّمَا', lemma: 'إِنَّمَا', pos: 'part', features: 'conj+part', gloss: 'and only' },
            { surface: 'أَنَا', lemma: 'أَنَا', pos: 'noun', features: '1s', gloss: 'I' },
          ],
        },
        {
          id: 'qs-v4-c10-019',
          ar: 'نَذِيرٌ مُبِينٌ﴾.',
          en: "a clear warner.'",
          tokens: [
            { surface: 'نَذِيرٌ', lemma: 'نَذِير', pos: 'noun', features: 'indef.nom', gloss: 'a warner' },
            { surface: 'مُبِينٌ', lemma: 'مُبِين', pos: 'adj', features: 'indef.nom', gloss: 'clear, manifest' },
          ],
        },
        {
          id: 'qs-v4-c10-020',
          ar: 'قَالَتْ عَادٌ:',
          en: 'ʿĀd said:',
          tokens: [
            { surface: 'قَالَتْ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3fs', gloss: 'to say; said' },
            { surface: 'عَادٌ', lemma: 'عَاد', pos: 'proper', features: 'nom', gloss: 'ʿĀd' },
          ],
        },
        {
          id: 'qs-v4-c10-021',
          ar: 'فَإِنَّنَا نَنْتَظِرُ ذَلِكَ الْعَذَابَ',
          en: "'We await that punishment",
          tokens: [
            { surface: 'فَإِنَّنَا', lemma: 'إِنَّ', pos: 'part', features: 'conj+part+1p', gloss: 'so indeed we' },
            { surface: 'نَنْتَظِرُ', lemma: 'اِنْتَظَرَ', pos: 'verb', features: 'impf.1p', gloss: 'to await; await' },
            { surface: 'ذَلِكَ', lemma: 'ذَلِكَ', pos: 'dem', features: 'dem.m', gloss: 'that' },
            { surface: 'الْعَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'def.acc', gloss: 'the punishment' },
          ],
        },
        {
          id: 'qs-v4-c10-022',
          ar: 'وَنَشْتَاقُ أَنْ نَرَاهُ.',
          en: "and long to see it.'",
          tokens: [
            { surface: 'وَنَشْتَاقُ', lemma: 'اِشْتَاقَ', pos: 'verb', features: 'conj+impf.1p', gloss: 'to yearn, long for; and long' },
            { surface: 'أَنْ', lemma: 'أَنْ', pos: 'part', features: 'part', gloss: 'to' },
            { surface: 'نَرَاهُ', lemma: 'رَأَى', pos: 'verb', features: 'impf.1p+3ms', gloss: 'to see; we see it' },
          ],
        },
        {
          id: 'qs-v4-c10-023',
          ar: 'وَتَعَجَّبَ هُودٌ مِنْ جُرْأَتِهِمْ،',
          en: 'Hūd was amazed at their boldness,',
          tokens: [
            { surface: 'وَتَعَجَّبَ', lemma: 'تَعَجَّبَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be amazed; and was amazed' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'at' },
            { surface: 'جُرْأَتِهِمْ', lemma: 'جُرْأَة', pos: 'noun', features: 'gen+3mp', gloss: 'their boldness' },
          ],
        },
        {
          id: 'qs-v4-c10-024',
          ar: 'وَتَأَسَّفَ هُودٌ عَلَى سَفَاهَتِهِمْ.',
          en: 'and grieved over their foolishness.',
          tokens: [
            { surface: 'وَتَأَسَّفَ', lemma: 'تَأَسَّفَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grieve, regret; and grieved' },
            { surface: 'هُودٌ', lemma: 'هُود', pos: 'proper', features: 'nom', gloss: 'Hūd' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'over' },
            { surface: 'سَفَاهَتِهِمْ', lemma: 'سَفَاهَة', pos: 'noun', features: 'gen+3mp', gloss: 'their foolishness' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا طَلَبَتْ عَادٌ مِنْ هُودٍ لِيُصَدِّقُوهُ؟',
          options: ['دَلِيلاً وَبَيِّنَةً', 'مَالاً كَثِيراً', 'أَنْ يَتْرُكَهُمْ وَيَرْحَلَ'],
          answer: 0,
          qEn: 'What did ʿĀd demand from Hūd before they would believe him?',
          optionsEn: ['A proof and a clear sign', 'Much wealth', 'That he leave them and depart'],
        },
        {
          q: 'بِمَاذَا أَجَابَ هُودٌ عَنْ سُؤَالِهِمْ مَتَى يَأْتِي الْعَذَابُ؟',
          options: ['إِنَّمَا الْعِلْمُ عِنْدَ اللَّهِ وَإِنَّمَا أَنَا نَذِيرٌ مُبِينٌ', 'قَالَ سَيَأْتِي غَداً بِالتَّحْدِيدِ', 'قَالَ لَنْ يَأْتِيَ أَبَداً'],
          answer: 0,
          qEn: 'How did Hūd answer their question of when the punishment would come?',
          optionsEn: ['That the knowledge is with Allah alone, and he is only a clear warner', 'He said it would come tomorrow exactly', 'He said it would never come'],
        },
        {
          q: 'كَيْفَ كَانَ رَدُّ فِعْلِ عَادٍ عَلَى ذِكْرِ الْعَذَابِ؟',
          options: ['قَالُوا إِنَّنَا نَنْتَظِرُهُ وَنَشْتَاقُ أَنْ نَرَاهُ', 'خَافُوا وَبَكَوْا', 'طَلَبُوا مِنْ هُودٍ الدُّعَاءَ لَهُمْ'],
          answer: 0,
          qEn: "What was ʿĀd's reaction to the mention of the punishment?",
          optionsEn: ['They said they awaited it and longed to see it', 'They became afraid and wept', 'They asked Hūd to pray for them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَإِنَّا لَا',
        post: 'بِإِلَهِكَ وَلَا نَخَافُ عَذَابَهُ.',
        en: 'So indeed we do not believe in your god nor fear his punishment.',
        options: ['نُؤْمِنُ', 'يُؤْمِنُ', 'تُؤْمِنُ', 'آمَنَّا'],
        answer: 0,
        rationales: [
          '1st plural -- agrees with the إِنَّا ("we") of the clause, matching نَخَافُ beside it.',
          '3rd masculine singular -- he.',
          '2nd masculine singular -- you (m.).',
          'Perfect tense -- wrong; the parallel نَخَافُ is imperfect.',
        ],
      },
      {
        type: 'cloze',
        pre: 'إِنَّمَا',
        post: 'عِنْدَ اللَّهِ.',
        en: 'Indeed the knowledge is with Allah.',
        options: ['الْعِلْمُ', 'الْعِلْمَ', 'الْعِلْمِ', 'عِلْماً'],
        answer: 0,
        rationales: [
          'Nominative, definite -- the subject of the nominal sentence introduced by إِنَّمَا.',
          'Accusative -- wrong case; nothing here calls for it.',
          'Genitive -- wrong case; nothing here governs the genitive.',
          'Indefinite -- wrong; "the knowledge" (a known category) is meant, not "some knowledge".',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَتَعَجَّبَ هُودٌ مِنْ',
        post: '،',
        en: 'Hūd was amazed at their boldness,',
        options: ['جُرْأَتِهِمْ', 'جُرْأَتُهُمْ', 'جُرْأَةً', 'جُرْأَتَهُمْ'],
        answer: 0,
        rationales: [
          'Genitive -- object of the preposition مِنْ.',
          'Nominative -- wrong case; a preposition requires the genitive.',
          'Accusative, indefinite -- wrong case and missing the required possessive suffix.',
          'Accusative -- wrong case for the same reason.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'نُؤْمِنُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُومِنُ', 'نُؤْمِنُ', 'تُؤْمِنُ', 'يُؤْمِنُ'],
        answer: 0,
        rationales: [
          '1st singular -- matches أَنَا.',
          '1st plural -- we, the form already given.',
          '2nd masculine singular -- you (m.).',
          '3rd masculine singular -- he.',
        ],
      },
      {
        type: 'shift',
        base: 'نُؤْمِنُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يُؤْمِنُ', 'نُؤْمِنُ', 'تُؤْمِنُ', 'أُومِنُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular -- matches هُوَ.',
          '1st plural -- we, the form already given.',
          '2nd masculine singular -- you (m.).',
          '1st singular -- I.',
        ],
      },
      {
        type: 'shift',
        base: 'نُؤْمِنُ بِاللَّهِ',
        pre: '',
        post: 'بِاللَّهِ',
        targetPerson: 'أَنْتَ',
        targetEn: 'you (m.)',
        options: ['تُؤْمِنُ', 'نُؤْمِنُ', 'يُؤْمِنُ', 'أُومِنُ'],
        answer: 0,
        rationales: [
          '2nd masculine singular -- matches أَنْتَ.',
          '1st plural -- we, the form already given.',
          '3rd masculine singular -- he.',
          '1st singular -- I.',
        ],
      },
    ],
  },
};

// قَصَصُ النَّبِيِّينَ, volume 5 «نَاقَةُ ثَمُودَ», chapter 7 -- قَدْ أَخْطَأَ
// ظَنُّنَا. Printed page 103 (from ch7's own heading box, right after ch6's
// closing verse on page 103's own top portion, filling the rest of the
// page down to ch8's own box نَصِيحَةُ صَالِحٍ on page 104). Transcribed by
// hand from the scan (vision OCR, 300dpi render) against
// ../CHAPTER-FORMAT.md and QASAS_VOLUME_MAP.md's volume 5 table.
//
// Thamūd disbelieves Ṣāliḥ outright, and when he presses them to stop
// worshiping idols they turn the argument onto him personally: he was once
// their most promising boy, expected to rise among the great and wealthy,
// while lesser boys his own age have gone on to real standing -- yet he has
// "chosen the path of poverty" instead, disappointing everyone's hopes for
// him, including (they add, twisting the knife) his own parents. Ṣāliḥ only
// grieves for his people; whenever he passes a group of them, they repeat
// the same mocking line about his father.
//
// Grammar / lexical notes:
//   -- صَالِحُ, vocative (qs-v5-c07-003/011), is tagged 'nom' rather than
//      given a dedicated vocative atom -- CHAPTER-FORMAT.md's documented
//      grammar has none, and the bare munādā form is surface-identical to
//      the nominative, so this is the closest available tag (matching the
//      same choice already made for إِخْوَانِي's own case in ch8/ch9, tagging
//      the visible/nearest-available case rather than omitting one).
//   -- أَبَا صَالِحٍ (qs-v5-c07-021, "Abū Ṣāliḥ," an idiomatic respectful
//      address to Ṣāliḥ himself as an elder) is tagged 'acc.constr' on أَب --
//      one of the أسماء خمسة (five nouns) that decline irregularly by long
//      vowel rather than the ordinary case-ending pattern, object of رَحِمَ.
//   -- سَتَكُونُ (qs-v5-c07-005/006) fuses the future marker سَ onto the
//      already-taught verb كَانَ; tagged as a fused 'part' proclitic before
//      impf.3ms, the same treatment already given other fused single-letter
//      proclitics (no separate "future" atom exists in the documented
//      grammar).
//   -- ظَنّ (qs-v5-c07-012, "assumption, guess" -- the abstract noun) is a
//      distinct lemma from the already-taught verb ظَنَّ despite the
//      identical root and near-identical spelling, matching the corpus's
//      established same-root-different-lemma convention (زَرْع/زِرَاعَة,
//      ch1/ch5).
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَفَرَ، نَاس، صَالِح
//      (qasas-v5 ch4/5)، لَا، آمَنَ، بِ، لَمَّا، وَعَظَ، مَنَعَ، مِنْ، عِبَادَة، صَنَم،
//      قَالَ، يَا، كَانَ، وَلَد، نَجِيب، جِدّ، رَشِيد، ظَنَّ، أَنَّ، كَبِير، نَاس، شَرِيف،
//      مِثْل، فُلَان، الَّذِي، في، أَصْبَحَ، رِجَال (رَجُل)، أَنْتَ، أَخَذَ، سَبِيل،
//      فَقْر، قَدْ، أَخْطَأَ، خَابَ، رَجَاء، مِسْكِين، أَب، نَالَ، خَيْر، أُمّ، ضَاعَ،
//      تَعَب، سَمِعَ، كُلّ، هَذَا، تَأَسَّفَ، عَلَى، قَوْم، إِذَا، رَحِمَ، اللَّه، اِبْن
//      are all already taught and are NOT re-listed in newWords here.
//
// 5 new words (سِنّ، دُونَ، ظَنّ، خَابَ، مَرَّ).
//
// No page footnotes (book_note) on this page.
export const CHAPTER = {
  id: 'ch7',
  title: { ar: 'قَدْ أَخْطَأَ ظَنُّنَا', en: '"Our Assumption Was Wrong"' },
  newWords: ['سِنّ', 'دُونَ', 'ظَنّ', 'خَابَ', 'مَرَّ'],
  lemmas: {
    سِنّ: { gloss: 'age' },
    دُونَ: { gloss: 'below, less than, beneath' },
    ظَنّ: { gloss: 'assumption, guess' },
    خَابَ: { gloss: 'to be disappointed, come to nothing' },
    مَرَّ: { gloss: 'to pass by' },
  },
  paragraphs: [
    {
      en: 'The people disbelieved Ṣāliḥ and did not believe in him. When Ṣāliḥ warned them and forbade them from worshiping idols, they said: "O Ṣāliḥ, you were a truly outstanding boy, and you were a truly right-minded boy, and we thought you would become one of the great and noble people. We thought you would become like so-and-so and so-and-so, but you turned out to be nothing. Those who were your own age, and were beneath you in intellect, have become great men. But you, O Ṣāliḥ, have taken the path of poverty -- our assumption about you was wrong, our hope in you has come to nothing. Poor is your father, he has gained no good from you. Poor is your mother, her effort over you has gone to waste!" Ṣāliḥ heard all this and grieved for his people; and whenever Ṣāliḥ passed a group of them, they would say: "May Allah have mercy on Ṣāliḥ\'s father -- his son has truly gone to waste."',
      sentences: [
        {
          id: 'qs-v5-c07-001',
          ar: 'وَكَفَرَ النَّاسُ بِصَالِحٍ',
          en: 'The people disbelieved Ṣāliḥ',
          tokens: [
            { surface: 'وَكَفَرَ', lemma: 'كَفَرَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to disbelieve; and disbelieved' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'بِصَالِحٍ', lemma: 'صَالِح', pos: 'proper', features: 'prep+gen', gloss: 'in Ṣāliḥ' },
          ],
        },
        {
          id: 'qs-v5-c07-002',
          ar: 'وَلَمْ يُؤْمِنُوا بِهِ.',
          en: 'and did not believe in him.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُؤْمِنُوا', lemma: 'آمَنَ', pos: 'verb', features: 'impf.3mp', gloss: 'to believe; they believed' },
            { surface: 'بِهِ', lemma: 'بِ', pos: 'prep', features: 'prep+3ms', gloss: 'in him' },
          ],
        },
        {
          id: 'qs-v5-c07-003',
          ar: 'وَلَمَّا وَعَظَهُمْ صَالِحٌ وَمَنَعَهُمْ مِنْ عِبَادَةِ الْأَصْنَامِ قَالُوا:',
          en: 'When Ṣāliḥ warned them and forbade them from worshiping idols, they said:',
          tokens: [
            { surface: 'وَلَمَّا', lemma: 'لَمَّا', pos: 'adv', features: 'conj+adv', gloss: 'and when' },
            { surface: 'وَعَظَهُمْ', lemma: 'وَعَظَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to warn, admonish; warned them' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'وَمَنَعَهُمْ', lemma: 'مَنَعَ', pos: 'verb', features: 'conj+perf.3ms+3mp', gloss: 'to forbid, prevent; and forbade them' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'عِبَادَةِ', lemma: 'عِبَادَة', pos: 'noun', features: 'constr.gen', gloss: 'the worship of' },
            { surface: 'الْأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'pl.def.gen', gloss: 'the idols' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; they said' },
          ],
        },
        {
          id: 'qs-v5-c07-004',
          ar: 'يَا صَالِحُ كُنْتَ وَلَداً نَجِيباً جِدّاً،',
          en: '"O Ṣāliḥ, you were a truly outstanding boy,',
          tokens: [
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'صَالِحُ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'كُنْتَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.2ms', root: 'ك و ن', gloss: 'to be; you were' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', gloss: 'a boy' },
            { surface: 'نَجِيباً', lemma: 'نَجِيب', pos: 'adj', features: 'indef.acc', gloss: 'outstanding' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v5-c07-005',
          ar: 'وَكُنْتَ وَلَداً رَشِيداً جِدّاً',
          en: 'and you were a truly right-minded boy,',
          tokens: [
            { surface: 'وَكُنْتَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.2ms', root: 'ك و ن', gloss: 'to be; and you were' },
            { surface: 'وَلَداً', lemma: 'وَلَد', pos: 'noun', features: 'indef.acc', gloss: 'a boy' },
            { surface: 'رَشِيداً', lemma: 'رَشِيد', pos: 'adj', features: 'indef.acc', gloss: 'right-minded, mature' },
            { surface: 'جِدّاً', lemma: 'جِدّ', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qs-v5-c07-006',
          ar: 'وَكُنَّا نَظُنُّ أَنَّكَ سَتَكُونُ مِنْ كِبَارِ النَّاسِ وَأَشْرَافِهِمْ.',
          en: 'and we thought you would become one of the great and noble people.',
          tokens: [
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', root: 'ك و ن', gloss: 'to be; and we were' },
            { surface: 'نَظُنُّ', lemma: 'ظَنَّ', pos: 'verb', features: 'impf.1p', root: 'ظ ن ن', gloss: 'to think, suppose; thinking' },
            { surface: 'أَنَّكَ', lemma: 'أَنَّ', pos: 'part', features: 'part+2ms', gloss: 'that you' },
            { surface: 'سَتَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'part+impf.3ms', root: 'ك و ن', gloss: 'to be; will become' },
            { surface: 'مِنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'one of' },
            { surface: 'كِبَارِ', lemma: 'كَبِير', pos: 'noun', features: 'pl.constr.gen', gloss: 'the great ones of' },
            { surface: 'النَّاسِ', lemma: 'نَاس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'وَأَشْرَافِهِمْ', lemma: 'شَرِيف', pos: 'noun', features: 'conj+pl.gen+3mp', gloss: 'and their nobles' },
          ],
        },
        {
          id: 'qs-v5-c07-007',
          ar: 'وَكُنَّا نَظُنُّ أَنَّكَ سَتَكُونُ مِثْلَ فُلَانٍ وَفُلَانٍ',
          en: 'We thought you would become like so-and-so and so-and-so,',
          tokens: [
            { surface: 'وَكُنَّا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.1p', root: 'ك و ن', gloss: 'to be; and we were' },
            { surface: 'نَظُنُّ', lemma: 'ظَنَّ', pos: 'verb', features: 'impf.1p', root: 'ظ ن ن', gloss: 'to think, suppose; thinking' },
            { surface: 'أَنَّكَ', lemma: 'أَنَّ', pos: 'part', features: 'part+2ms', gloss: 'that you' },
            { surface: 'سَتَكُونُ', lemma: 'كَانَ', pos: 'verb', features: 'part+impf.3ms', root: 'ك و ن', gloss: 'to be; will become' },
            { surface: 'مِثْلَ', lemma: 'مِثْل', pos: 'noun', features: 'acc.constr', gloss: 'like' },
            { surface: 'فُلَانٍ', lemma: 'فُلَان', pos: 'noun', features: 'indef.gen', gloss: 'so-and-so' },
            { surface: 'وَفُلَانٍ', lemma: 'فُلَان', pos: 'noun', features: 'conj+indef.gen', gloss: 'and so-and-so' },
          ],
        },
        {
          id: 'qs-v5-c07-008',
          ar: 'فَلَمْ تَكُنْ شَيْئاً.',
          en: 'but you turned out to be nothing.',
          tokens: [
            { surface: 'فَلَمْ', lemma: 'لَمْ', pos: 'part', features: 'conj+neg', gloss: 'but not' },
            { surface: 'تَكُنْ', lemma: 'كَانَ', pos: 'verb', features: 'impf.2ms', root: 'ك و ن', gloss: 'to be; you were' },
            { surface: 'شَيْئاً', lemma: 'شَيْء', pos: 'noun', features: 'indef.acc', gloss: 'anything, nothing' },
          ],
        },
        {
          id: 'qs-v5-c07-009',
          ar: 'وَالَّذِينَ كَانُوا فِي سِنِّكَ،',
          en: 'Those who were your own age,',
          tokens: [
            { surface: 'وَالَّذِينَ', lemma: 'الَّذِي', pos: 'rel', features: 'conj+pl.rel', gloss: 'and those who' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', root: 'ك و ن', gloss: 'to be; were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in, at' },
            { surface: 'سِنِّكَ', lemma: 'سِنّ', pos: 'noun', features: 'gen+2ms', root: 'س ن ن', gloss: 'your age' },
          ],
        },
        {
          id: 'qs-v5-c07-010',
          ar: 'وَكَانُوا دُونَكَ فِي الْعَقْلِ،',
          en: 'and were beneath you in intellect,',
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', root: 'ك و ن', gloss: 'to be; and were' },
            { surface: 'دُونَكَ', lemma: 'دُونَ', pos: 'prep', features: 'prep+2ms', root: 'د و ن', gloss: 'beneath, less than you' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'الْعَقْلِ', lemma: 'عَقْل', pos: 'noun', features: 'def.gen', gloss: 'intellect' },
          ],
        },
        {
          id: 'qs-v5-c07-011',
          ar: 'أَصْبَحُوا رِجَالاً كِبَاراً.',
          en: 'have become great men.',
          tokens: [
            { surface: 'أَصْبَحُوا', lemma: 'أَصْبَحَ', pos: 'verb', features: 'perf.3mp', gloss: 'to become; have become' },
            { surface: 'رِجَالاً', lemma: 'رَجُل', pos: 'noun', features: 'pl.indef.acc', gloss: 'men' },
            { surface: 'كِبَاراً', lemma: 'كَبِير', pos: 'adj', features: 'pl.indef.acc', gloss: 'great' },
          ],
        },
        {
          id: 'qs-v5-c07-012',
          ar: 'وَأَنْتَ يَا صَالِحُ أَخَذْتَ سَبِيلَ الْفَقْرِ،',
          en: 'But you, O Ṣāliḥ, have taken the path of poverty --',
          tokens: [
            { surface: 'وَأَنْتَ', lemma: 'أَنْتَ', pos: 'noun', features: 'conj+2ms', gloss: 'and you' },
            { surface: 'يَا', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'صَالِحُ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'أَخَذْتَ', lemma: 'أَخَذَ', pos: 'verb', features: 'perf.2ms', gloss: 'to take; you have taken' },
            { surface: 'سَبِيلَ', lemma: 'سَبِيل', pos: 'noun', features: 'constr.acc', gloss: 'the path of' },
            { surface: 'الْفَقْرِ', lemma: 'فَقْر', pos: 'noun', features: 'def.gen', gloss: 'poverty' },
          ],
        },
        {
          id: 'qs-v5-c07-013',
          ar: 'قَدْ أَخْطَأَ ظَنُّنَا فِيكَ،',
          en: 'our assumption about you was wrong,',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'أَخْطَأَ', lemma: 'أَخْطَأَ', pos: 'verb', features: 'perf.3ms', gloss: 'to err, be wrong; was wrong' },
            { surface: 'ظَنُّنَا', lemma: 'ظَنّ', pos: 'noun', features: 'nom+1p', root: 'ظ ن ن', gloss: 'our assumption' },
            { surface: 'فِيكَ', lemma: 'فِي', pos: 'prep', features: 'prep+2ms', gloss: 'about you' },
          ],
        },
        {
          id: 'qs-v5-c07-014',
          ar: 'قَدْ خَابَ رَجَاؤُنَا فِيكَ.',
          en: 'our hope in you has come to nothing.',
          tokens: [
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'خَابَ', lemma: 'خَابَ', pos: 'verb', features: 'perf.3ms', root: 'خ ي ب', gloss: 'to be disappointed, come to nothing; has come to nothing' },
            { surface: 'رَجَاؤُنَا', lemma: 'رَجَاء', pos: 'noun', features: 'nom+1p', gloss: 'our hope' },
            { surface: 'فِيكَ', lemma: 'فِي', pos: 'prep', features: 'prep+2ms', gloss: 'in you' },
          ],
        },
        {
          id: 'qs-v5-c07-015',
          ar: 'مِسْكِينٌ أَبُوكَ،',
          en: 'Poor is your father,',
          tokens: [
            { surface: 'مِسْكِينٌ', lemma: 'مِسْكِين', pos: 'noun', features: 'indef.nom', gloss: 'poor wretch' },
            { surface: 'أَبُوكَ', lemma: 'أَب', pos: 'noun', features: 'nom+2ms', gloss: 'your father' },
          ],
        },
        {
          id: 'qs-v5-c07-016',
          ar: 'مَا نَالَ خَيْراً مِنْكَ.',
          en: 'he has gained no good from you.',
          tokens: [
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'نَالَ', lemma: 'نَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to gain, attain; gained' },
            { surface: 'خَيْراً', lemma: 'خَيْر', pos: 'noun', features: 'indef.acc', gloss: 'good, benefit' },
            { surface: 'مِنْكَ', lemma: 'مِنْ', pos: 'prep', features: 'prep+2ms', gloss: 'from you' },
          ],
        },
        {
          id: 'qs-v5-c07-017',
          ar: 'مِسْكِينَةٌ أُمُّكَ،',
          en: 'Poor is your mother,',
          tokens: [
            { surface: 'مِسْكِينَةٌ', lemma: 'مِسْكِين', pos: 'adj', features: 'indef.nom.f', gloss: 'poor wretch' },
            { surface: 'أُمُّكَ', lemma: 'أُمّ', pos: 'noun', features: 'nom+2ms', gloss: 'your mother' },
          ],
        },
        {
          id: 'qs-v5-c07-018',
          ar: 'لَقَدْ ضَاعَ تَعَبُهَا فِيكَ!',
          en: 'her effort over you has gone to waste!"',
          tokens: [
            { surface: 'لَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ضَاعَ', lemma: 'ضَاعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be lost, wasted; has been wasted' },
            { surface: 'تَعَبُهَا', lemma: 'تَعَب', pos: 'noun', features: 'nom+3fs', gloss: 'her effort, toil' },
            { surface: 'فِيكَ', lemma: 'فِي', pos: 'prep', features: 'prep+2ms', gloss: 'over you' },
          ],
        },
        {
          id: 'qs-v5-c07-019',
          ar: 'سَمِعَ صَالِحٌ كُلَّ هَذَا وَتَأَسَّفَ عَلَى قَوْمِهِ؛',
          en: 'Ṣāliḥ heard all this and grieved for his people;',
          tokens: [
            { surface: 'سَمِعَ', lemma: 'سَمِعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to hear; heard' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'كُلَّ', lemma: 'كُلّ', pos: 'noun', features: 'acc.constr', gloss: 'all of' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this' },
            { surface: 'وَتَأَسَّفَ', lemma: 'تَأَسَّفَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to grieve, be sorrowful; and grieved' },
            { surface: 'عَلَى', lemma: 'عَلَى', pos: 'prep', features: 'prep', gloss: 'for' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
          ],
        },
        {
          id: 'qs-v5-c07-020',
          ar: 'وَإِذَا مَرَّ صَالِحٌ بِقَوْمٍ قَالُوا:',
          en: 'and whenever Ṣāliḥ passed a group of them, they would say:',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إِذَا', pos: 'adv', features: 'conj+adv', gloss: 'and when, whenever' },
            { surface: 'مَرَّ', lemma: 'مَرَّ', pos: 'verb', features: 'perf.3ms', root: 'م ر ر', gloss: 'to pass by; passed' },
            { surface: 'صَالِحٌ', lemma: 'صَالِح', pos: 'proper', features: 'nom', gloss: 'Ṣāliḥ' },
            { surface: 'بِقَوْمٍ', lemma: 'قَوْم', pos: 'noun', features: 'prep+indef.gen', gloss: 'by a group' },
            { surface: 'قَالُوا', lemma: 'قَالَ', pos: 'verb', features: 'perf.3mp', gloss: 'to say; said' },
          ],
        },
        {
          id: 'qs-v5-c07-021',
          ar: 'رَحِمَ اللَّهُ أَبَا صَالِحٍ لَقَدْ ضَاعَ ابْنُهُ.',
          en: '"May Allah have mercy on Ṣāliḥ\'s father -- his son has truly gone to waste."',
          tokens: [
            { surface: 'رَحِمَ', lemma: 'رَحِمَ', pos: 'verb', features: 'perf.3ms', gloss: 'to have mercy on; may He have mercy on' },
            { surface: 'اللَّهُ', lemma: 'اللَّه', pos: 'proper', features: 'nom', gloss: 'Allah' },
            { surface: 'أَبَا', lemma: 'أَب', pos: 'noun', features: 'acc.constr', gloss: 'the father of' },
            { surface: 'صَالِحٍ', lemma: 'صَالِح', pos: 'proper', features: 'gen', gloss: 'Ṣāliḥ' },
            { surface: 'لَقَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed' },
            { surface: 'ضَاعَ', lemma: 'ضَاعَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be lost, wasted; has been wasted' },
            { surface: 'ابْنُهُ', lemma: 'اِبْن', pos: 'noun', features: 'nom+3ms', gloss: 'his son' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا قَالَ قَوْمُ صَالِحٍ لَهُ بَعْدَ أَنْ مَنَعَهُمْ مِنْ عِبَادَةِ الْأَصْنَامِ؟',
          options: [
            'قَالُوا: كُنْتَ وَلَداً نَجِيباً رَشِيداً وَظَنَنَّا أَنَّكَ سَتَكُونُ مِنْ كِبَارِ النَّاسِ، وَلَكِنَّكَ أَخَذْتَ سَبِيلَ الْفَقْرِ',
            'قَالُوا: أَنْتَ خَيْرُ رَجُلٍ عَرَفْنَاهُ',
            'قَالُوا: سَنُؤْمِنُ بِكَ فَوْراً',
          ],
          answer: 0,
          qEn: "What did Ṣāliḥ's people say to him after he forbade them from worshiping idols?",
          optionsEn: [
            'They said: You were an outstanding, right-minded boy and we thought you would become one of the great people, but you took the path of poverty',
            'They said: You are the best man we have known',
            'They said: We will believe in you at once',
          ],
        },
        {
          q: 'مَاذَا قَالُوا عَنْ أَبِي صَالِحٍ وَأُمِّهِ؟',
          options: [
            'قَالُوا: مِسْكِينٌ أَبُوكَ مَا نَالَ خَيْراً مِنْكَ، وَمِسْكِينَةٌ أُمُّكَ ضَاعَ تَعَبُهَا فِيكَ',
            'قَالُوا: أَبُوكَ وَأُمُّكَ فَخُورَانِ بِكَ',
            'قَالُوا: أَبُوكَ غَنِيٌّ جِدّاً',
          ],
          answer: 0,
          qEn: "What did they say about Ṣāliḥ's father and mother?",
          optionsEn: [
            'They said: Poor is your father, he has gained no good from you, and poor is your mother, her effort has been wasted on you',
            'They said: Your father and mother are proud of you',
            'They said: Your father is very wealthy',
          ],
        },
        {
          q: 'كَيْفَ كَانَ رَدُّ فِعْلِ صَالِحٍ عَلَى كَلَامِهِمْ؟',
          options: ['سَمِعَ كُلَّ هَذَا وَتَأَسَّفَ عَلَى قَوْمِهِ', 'غَضِبَ وَدَعَا عَلَيْهِمْ بِالْهَلَاكِ', 'لَمْ يَسْمَعْ شَيْئاً مِمَّا قَالُوهُ'],
          answer: 0,
          qEn: "What was Ṣāliḥ's response to what they said?",
          optionsEn: ['He heard all of it and grieved for his people', 'He grew angry and prayed for their destruction', 'He did not hear anything they said'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'يَا صَالِحُ',
        post: 'وَلَداً نَجِيباً جِدّاً.',
        en: 'O Ṣāliḥ, you were a truly outstanding boy.',
        options: ['كُنْتَ', 'كَانَ', 'كُنَّا', 'تَكُونُ'],
        answer: 0,
        rationales: [
          'Perfect, 2nd masculine singular -- matches يَا صَالِحُ, addressed directly.',
          '3rd masculine singular -- wrong person; the sentence addresses Ṣāliḥ directly.',
          '1st plural -- wrong person; "we" is not who "was a boy" here.',
          'Imperfect -- wrong tense; this describes a past state.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكُنَّا',
        post: 'أَنَّكَ سَتَكُونُ مِنْ كِبَارِ النَّاسِ.',
        en: 'And we thought you would become one of the great people.',
        options: ['نَظُنُّ', 'ظَنَنَّا', 'يَظُنُّونَ', 'تَظُنُّ'],
        answer: 0,
        rationales: [
          'Imperfect, 1st plural -- pairs with كُنَّا to give the ongoing past sense "we used to think."',
          'Perfect -- wrong form; كَانَ + imperfect is the pattern the text uses for an ongoing past state.',
          '3rd masculine plural -- wrong person; the speakers refer to themselves.',
          '2nd person -- wrong person; the speakers refer to themselves, not to Ṣāliḥ.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَدْ خَابَ',
        post: 'فِيكَ.',
        en: 'Our hope in you has come to nothing.',
        options: ['رَجَاؤُنَا', 'رَجَاءَنَا', 'رَجَاؤُكَ', 'رَجَاءً'],
        answer: 0,
        rationales: [
          'Nominative, "our" -- subject of خَابَ, matching the printed رَجَاؤُنَا.',
          'Accusative -- wrong case; the subject of a verb is nominative.',
          '"Your hope" -- wrong possessor; the speakers mean their own hope.',
          'Indefinite accusative, no possessor -- wrong case and missing the required "our."',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَمُرُّ الرَّجُلُ بِقَوْمٍ',
        pre: '',
        post: 'بِقَوْمٍ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَمُرُّ', 'يَمُرُّ', 'تَمُرُّ', 'نَمُرُّ'],
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
        base: 'يَمُرُّ الرَّجُلُ بِقَوْمٍ',
        pre: '',
        post: 'بِقَوْمٍ',
        targetPerson: 'هِيَ',
        targetEn: 'she',
        options: ['تَمُرُّ', 'يَمُرُّ', 'أَمُرُّ', 'نَمُرُّ'],
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
        base: 'يَمُرُّ الرَّجُلُ بِقَوْمٍ',
        pre: '',
        post: 'بِقَوْمٍ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يَمُرُّونَ', 'يَمُرُّ', 'تَمُرُّ', 'نَمُرُّ'],
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

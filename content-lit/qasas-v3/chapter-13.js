// قَصَصُ النَّبِيِّينَ, volume 3 «سَفِينَةُ نُوحٍ», chapter 13 -- بَيْنَ نُوحٍ
// وَقَوْمِهِ. Printed pages 72 (bottom, right after ch12's closing line and
// the heading) through 73 (top, ending before ch14's heading اتَّبَعَكَ
// الأَرْذَلُونَ partway down the same page). Transcribed by hand from the
// scan (vision OCR, 300dpi render) against ../CHAPTER-FORMAT.md.
//
// The narrator lays out the two irreconcilable worldviews at the heart of
// the conflict: the people see idol-worship as truth itself, as reason
// itself -- anyone who won't worship idols is misguided and foolish, and
// "our fathers worshiped them, so why won't he?" Nūḥ sees exactly the
// reverse: idol-worship IS the misguidance and the foolishness, their own
// forefathers (all the way back to Adam, who never worshiped idols but
// worshiped Allah alone) were themselves astray, and the people are
// foolish for worshiping mere stone instead of the Allah who created
// them. The chapter closes with Nūḥ's declaration at the top of his
// voice, quoted directly from the Qur'an (Sūrat al-Aʿrāf 7:59-62): his
// call to worship Allah alone, the chiefs' immediate accusation that he
// is in plain error, and his reply that this is not misguidance but a
// message from the Lord of the worlds that he is conveying honestly.
//
// Grammar / lexical notes:
//   -- Every long printed sentence is split at its natural clause/comma
//      boundary into multiple shorter entries here (house convention,
//      ch7/ch9/ch10/ch12) -- no rewording, same printed text and order.
//      Each of the four Qur'an ayat quoted (7:59, 7:60, 7:61, 7:62) that
//      runs long is split into two ﴿﴾-wrapped fragments, each
//      independently bracketed, per the established Qur'an-quote
//      convention for long ayat (qasas-v2 ch14's split quote).
//   -- يَقَوْمِ (qs-v3-c13-015, -018, printed without a full alif, matching
//      the Qur'an's own mushaf spelling يَٰقَوْمِ) is tokenized as يَا + قَوْمِ
//      -- the vocative particle plus the already-taught قَوْم with the
//      frozen 1s vocative sense "my people" -- same split-fusion
//      convention as qasas-v2 ch1's يَاأَبَتِ (يَا + أَبَتِ).
//   -- ضَلَالَة (new) is a distinct fem. noun from the already-taught
//      masc. ضَلَال (qasas-v2 ch24) -- both mean "misguidance, error,"
//      near-synonyms from the same root ض ل ل, but printed as two
//      different words, so tagged as two separate lemmas (matching how
//      the corpus already splits ذِكْر/ذَكَرَ, تَعْظِيم/عَظَّمَ, etc.).
//   -- بَلَّغَ (new, form II "to convey, deliver") is a distinct lemma from
//      the already-taught بَلَغَ (form I "to reach, arrive at," qasas-v1
//      ch14) -- same root ب ل غ, different derived form, per the
//      distinct-lemma-per-derived-verb-form convention (اِسْتَجَابَ/أَجَابَ,
//      etc.).
//   -- لَنَرَاكَ (qs-v3-c13-017) fuses emphatic لَ + 1st-plural imperfect
//      رَأَى + 2ms object suffix, tagged 'part+impf.1p+2ms' -- same
//      subject-then-object-suffix fusion pattern as ch11's يَأْتِيَهُمْ
//      ('impf.3ms+3mp').
//   -- Shared lexicon check (CHAPTER-FORMAT.md §6): كَانَ، النَّاس، أَنَّ،
//      عِبَادَة، الأَصْنَام (صَنَم)، هِيَ، الْحَقّ، الْعَقْل، الَّذِي، عَبَدَ، هُوَ، في،
//      قَدْ، آبَاء (أَب)، لِمَاذَا، هَذَا، نُوح، يَرَى (رَأَى)، بَلْ، اللَّه، إِذْ،
//      الْحِجَارَة، خَلَقَ، قَامَ، قَوْم، يَقُولُ (قَالَ)، إِلَٰه، إِنِّي (إِنَّ)، أَخَافُ
//      (خَافَ)، عَلَى، عَذَاب، يَوْم، عَظِيم، غَيْر، إِنَّا (إِنَّ)، مِنْ، لَيْسَ، بِي (بِ)،
//      لَكِنَّ، رَسُول، رَبّ، الْعَالَمِين (عَالَم)، رِسَالَة، أَنصَحُ (نَصَحَ)، أَعْلَمُ
//      (عَلِمَ)، لَا، تَعْلَمُونَ (عَلِمَ)
//      are all already taught and are NOT re-listed in newWords here.
//
// 7 new words (ضَلَالَة، سَفَاهَة، أَعْلَى، صَوْت، مَلَأ، مُبِين، بَلَّغَ).
//
// No page footnotes (book_note) on either page for this chapter.
export const CHAPTER = {
  id: 'ch13',
  title: { ar: 'بَيْنَ نُوحٍ وَقَوْمِهِ', en: 'Between Nūḥ and His People' },
  newWords: ['ضَلَالَة', 'سَفَاهَة', 'أَعْلَى', 'صَوْت', 'مَلَأ', 'مُبِين', 'بَلَّغَ'],
  lemmas: {
    ضَلَالَة: { gloss: 'misguidance, error' },
    سَفَاهَة: { gloss: 'foolishness, folly' },
    أَعْلَى: { gloss: 'louder, higher, highest' },
    صَوْت: { gloss: 'voice, sound' },
    مَلَأ: { gloss: 'chiefs, nobles (the ruling elite)' },
    مُبِين: { gloss: 'clear, manifest' },
    بَلَّغَ: { gloss: 'to convey, deliver (a message)' },
  },
  paragraphs: [
    {
      en: 'The people saw idol-worship as the truth itself, and idol-worship as reason itself. whoever wouldn\'t worship idols, in their eyes, was misguided and foolish. and they\'d say: our fathers used to worship idols, so why won\'t this man worship them?!',
      sentences: [
        {
          id: 'qs-v3-c13-001',
          ar: 'كَانَ النَّاسُ يَرَوْنَ أَنَّ عِبَادَةَ الأَصْنَامِ هِي الْحَقُّ،',
          en: 'The people saw idol-worship as the truth itself,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be; was' },
            { surface: 'النَّاسُ', lemma: 'نَاس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', root: 'ر أ ي', gloss: 'to see, consider; consider' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'عِبَادَةَ', lemma: 'عِبَادَة', pos: 'noun', features: 'acc.constr', gloss: 'worship of' },
            { surface: 'الأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the idols' },
            { surface: 'هِي', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'it (is)' },
            { surface: 'الْحَقُّ', lemma: 'حَقّ', pos: 'noun', features: 'def.nom', gloss: 'the truth' },
          ],
        },
        {
          id: 'qs-v3-c13-002',
          ar: 'وَأَنَّ عِبَادَةَ الأَصْنَامِ هِي العَقْلُ.',
          en: 'and idol-worship as reason itself.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'عِبَادَةَ', lemma: 'عِبَادَة', pos: 'noun', features: 'acc.constr', gloss: 'worship of' },
            { surface: 'الأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the idols' },
            { surface: 'هِي', lemma: 'هِيَ', pos: 'noun', features: '3fs', gloss: 'it (is)' },
            { surface: 'العَقْلُ', lemma: 'عَقْل', pos: 'noun', features: 'def.nom', gloss: 'reason, the mind' },
          ],
        },
        {
          id: 'qs-v3-c13-003',
          ar: 'وَكَانُوا يَرَوْنَ أَنَّ الَّذِي لَا يَعْبُدُ الأَصْنَامَ',
          en: "whoever wouldn't worship idols, in their eyes,",
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'يَرَوْنَ', lemma: 'رَأَى', pos: 'verb', features: 'impf.3mp', gloss: 'to see, consider; consider' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'the one who' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to worship; worship' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc.pl', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v3-c13-004',
          ar: 'هُوَ فِي ضَلالَةٍ وَسَفَاهَةٍ.',
          en: 'was misguided and foolish.',
          tokens: [
            { surface: 'هُوَ', lemma: 'هُوَ', pos: 'part', features: 'part', gloss: 'he (is)' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ضَلالَةٍ', lemma: 'ضَلَالَة', pos: 'noun', features: 'indef.gen', root: 'ض ل ل', gloss: 'misguidance' },
            { surface: 'وَسَفَاهَةٍ', lemma: 'سَفَاهَة', pos: 'noun', features: 'conj+indef.gen', root: 'س ف ه', gloss: 'and foolishness' },
          ],
        },
        {
          id: 'qs-v3-c13-005',
          ar: "وَكَانُوا يَقُولُونَ: قَدْ كَانَ آبَاؤُنَا يَعْبُدُونَ الأَصْنَامَ",
          en: "and they'd say: our fathers used to worship idols,",
          tokens: [
            { surface: 'وَكَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to be; and they were' },
            { surface: 'يَقُولُونَ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3mp', gloss: 'to say; saying' },
            { surface: 'قَدْ', lemma: 'قَدْ', pos: 'part', features: 'part', gloss: 'indeed (has)' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'آبَاؤُنَا', lemma: 'أَب', pos: 'noun', features: 'pl.nom+1p', gloss: 'our fathers' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worshiping' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc.pl', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v3-c13-006',
          ar: 'فَلِمَاذَا لَا يَعْبُدُهَا هَذَا؟!!',
          en: "so why won't this man worship them?!",
          tokens: [
            { surface: 'فَلِمَاذَا', lemma: 'لِمَاذَا', pos: 'adv', features: 'conj+adv', gloss: 'so why' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَعْبُدُهَا', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms+3fp', gloss: 'to worship; worship them' },
            { surface: 'هَذَا', lemma: 'هَذَا', pos: 'dem', features: 'dem.m', gloss: 'this (man)' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ النَّاسُ يَرَوْنَ عِبَادَةَ الأَصْنَامِ؟',
          options: [
            'كَانُوا يَرَوْنَ أَنَّهَا الْحَقُّ وَالْعَقْلُ',
            'كَانُوا يَرَوْنَ أَنَّهَا ضَلالَةٌ وَسَفَاهَةٌ',
            'كَانُوا لَا يَهْتَمُّونَ بِهَا أَصْلًا',
          ],
          answer: 0,
          qEn: 'How did the people view idol-worship?',
          optionsEn: [
            'They saw it as the truth and reason itself',
            'They saw it as misguidance and foolishness',
            "They didn't care about it at all",
          ],
        },
      ],
    },
    {
      en: 'But Nūḥ saw idol-worship as misguidance itself, and idol-worship as foolishness itself. And Nūḥ saw that the forefathers themselves had been misguided and foolish, and that Adam, the father of all fathers, never worshiped idols, rather he worshiped Allah alone. and that the people were misguided and foolish, worshiping mere stone instead of the Allah who created them.',
      sentences: [
        {
          id: 'qs-v3-c13-007',
          ar: 'وَكَانَ نُوحٌ يَرَى أَنَّ عِبَادَةَ الأَصْنَامِ ضَلالَةٌ،',
          en: 'But Nūḥ saw idol-worship as misguidance itself,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', gloss: 'to see, consider; considers' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'عِبَادَةَ', lemma: 'عِبَادَة', pos: 'noun', features: 'acc.constr', gloss: 'worship of' },
            { surface: 'الأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the idols' },
            { surface: 'ضَلالَةٌ', lemma: 'ضَلَالَة', pos: 'noun', features: 'indef.nom', gloss: 'misguidance' },
          ],
        },
        {
          id: 'qs-v3-c13-008',
          ar: 'وَأَنَّ عِبَادَةَ الأَصْنَامِ سَفَاهَةٌ.',
          en: 'and idol-worship as foolishness itself.',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'عِبَادَةَ', lemma: 'عِبَادَة', pos: 'noun', features: 'acc.constr', gloss: 'worship of' },
            { surface: 'الأَصْنَامِ', lemma: 'صَنَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the idols' },
            { surface: 'سَفَاهَةٌ', lemma: 'سَفَاهَة', pos: 'noun', features: 'indef.nom', gloss: 'foolishness' },
          ],
        },
        {
          id: 'qs-v3-c13-009',
          ar: 'وَكَانَ نُوحٌ يَرَى أَنَّ الآبَاءَ كَانُوا فِي ضَلالَةٍ وَسَفَاهَةٍ',
          en: 'And Nūḥ saw that the forefathers themselves had been misguided and foolish,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كَانَ', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be; and was' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'يَرَى', lemma: 'رَأَى', pos: 'verb', features: 'impf.3ms', gloss: 'to see, consider; considers' },
            { surface: 'أَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'part', gloss: 'that' },
            { surface: 'الآبَاءَ', lemma: 'أَب', pos: 'noun', features: 'def.acc.pl', gloss: 'the forefathers' },
            { surface: 'كَانُوا', lemma: 'كَانَ', pos: 'verb', features: 'perf.3mp', gloss: 'to be; were' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ضَلالَةٍ', lemma: 'ضَلَالَة', pos: 'noun', features: 'indef.gen', gloss: 'misguidance' },
            { surface: 'وَسَفَاهَةٍ', lemma: 'سَفَاهَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and foolishness' },
          ],
        },
        {
          id: 'qs-v3-c13-010',
          ar: 'وَأَنَّ آدَمَ وَهُوَ أَبُو الآبَاءِ مَا كَانَ يَعْبُدُ الأَصْنَامَ،',
          en: 'and that Adam, the father of all fathers, never worshiped idols,',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'آدَمَ', lemma: 'آدَم', pos: 'proper', features: 'acc', gloss: 'Adam' },
            { surface: 'وَهُوَ', lemma: 'هُوَ', pos: 'part', features: 'conj+part', gloss: 'and he' },
            { surface: 'أَبُو', lemma: 'أَب', pos: 'noun', features: 'nom.constr', gloss: 'the father of' },
            { surface: 'الآبَاءِ', lemma: 'أَب', pos: 'noun', features: 'def.gen.pl', gloss: 'the fathers' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'يَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to worship; worshiping' },
            { surface: 'الأَصْنَامَ', lemma: 'صَنَم', pos: 'noun', features: 'def.acc.pl', gloss: 'the idols' },
          ],
        },
        {
          id: 'qs-v3-c13-011',
          ar: 'بَلْ كَانَ يَعْبُدُ اللَّهَ.',
          en: 'rather he worshiped Allah alone.',
          tokens: [
            { surface: 'بَلْ', lemma: 'بَلْ', pos: 'conj', features: 'conj', gloss: 'rather' },
            { surface: 'كَانَ', lemma: 'كَانَ', pos: 'verb', features: 'perf.3ms', gloss: 'to be; was' },
            { surface: 'يَعْبُدُ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3ms', gloss: 'to worship; worshiping' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
          ],
        },
        {
          id: 'qs-v3-c13-012',
          ar: 'وَأَنَّ الْقَوْمَ فِي ضَلالَةٍ وَسَفَاهَةٍ إِذْ يَعْبُدُونَ الْحِجَارَةَ',
          en: 'and that the people were misguided and foolish, worshiping mere stone',
          tokens: [
            { surface: 'وَأَنَّ', lemma: 'أَنَّ', pos: 'part', features: 'conj+part', gloss: 'and that' },
            { surface: 'الْقَوْمَ', lemma: 'قَوْم', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ضَلالَةٍ', lemma: 'ضَلَالَة', pos: 'noun', features: 'indef.gen', gloss: 'misguidance' },
            { surface: 'وَسَفَاهَةٍ', lemma: 'سَفَاهَة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and foolishness' },
            { surface: 'إِذْ', lemma: 'إِذْ', pos: 'adv', features: 'adv', gloss: 'since, when' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worship' },
            { surface: 'الْحِجَارَةَ', lemma: 'حِجَارَة', pos: 'noun', features: 'def.acc', gloss: 'the stone' },
          ],
        },
        {
          id: 'qs-v3-c13-013',
          ar: 'وَلا يَعْبُدُونَ اللَّهَ الَّذِي خَلَقَهُمْ.',
          en: 'instead of the Allah who created them.',
          tokens: [
            { surface: 'وَلا', lemma: 'لَا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَعْبُدُونَ', lemma: 'عَبَدَ', pos: 'verb', features: 'impf.3mp', gloss: 'to worship; worship' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'الَّذِي', lemma: 'الَّذِي', pos: 'rel', features: 'rel.m', gloss: 'who' },
            { surface: 'خَلَقَهُمْ', lemma: 'خَلَقَ', pos: 'verb', features: 'perf.3ms+3mp', gloss: 'to create; created them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ نُوحٌ يَرَى في عِبَادَةِ الآبَاءِ لِلْأَصْنَامِ؟',
          options: [
            'أَنَّهَا ضَلالَةٌ وَسَفَاهَةٌ، وَأَنَّ آدَمَ نَفْسَهُ مَا كَانَ يَعْبُدُ الأَصْنَامَ',
            'أَنَّهَا تَقْلِيدٌ حَسَنٌ يَجِبُ أَنْ يَسْتَمِرَّ',
            'أَنَّهَا لَا تَضُرُّ وَلَا تَنْفَعُ',
          ],
          answer: 0,
          qEn: "What did Nūḥ think of the forefathers' idol-worship?",
          optionsEn: [
            'That it was misguidance and foolishness, and that Adam himself never worshiped idols',
            'That it was a good tradition that should continue',
            "That it neither harms nor benefits"
          ],
        },
      ],
    },
    {
      lines: true,
      en: 'So Nūḥ stood among his people, declaring at the top of his voice: "O my people, worship Allah -- you have no god but Him. I fear for you the punishment of a tremendous day." "The chiefs among his people said: We surely see you in plain error." "He said: O my people, there is no error in me, rather I am a messenger from the Lord of the worlds, conveying to you the messages of my Lord and sincerely advising you, and I know from Allah what you do not know."',
      sentences: [
        {
          id: 'qs-v3-c13-014',
          ar: 'قَامَ نُوحٌ فِي القَوْمِ يَقُولُ بِأَعْلَى صَوْتِهِ:',
          en: 'So Nūḥ stood among his people, declaring at the top of his voice:',
          tokens: [
            { surface: 'قَامَ', lemma: 'قَامَ', pos: 'verb', features: 'perf.3ms', gloss: 'to stand; stood' },
            { surface: 'نُوحٌ', lemma: 'نُوح', pos: 'proper', features: 'nom', gloss: 'Nūḥ' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'القَوْمِ', lemma: 'قَوْم', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'يَقُولُ', lemma: 'قَالَ', pos: 'verb', features: 'impf.3ms', gloss: 'to say; declaring' },
            { surface: 'بِأَعْلَى', lemma: 'أَعْلَى', pos: 'adj', features: 'prep+constr', root: 'ع ل و', gloss: 'at the top (of), loudest (of)' },
            { surface: 'صَوْتِهِ', lemma: 'صَوْت', pos: 'noun', features: 'gen+3ms', root: 'ص و ت', gloss: 'his voice' },
          ],
        },
        {
          id: 'qs-v3-c13-015',
          ar: '﴿يَقَوْمِ اعْبُدُوا اللَّهَ مَا لَكُم مِّنْ إِلَٰهٍ غَيْرُهُ﴾',
          en: '"O my people, worship Allah -- you have no god but Him.',
          tokens: [
            { surface: 'يَ', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'اعْبُدُوا', lemma: 'عَبَدَ', pos: 'verb', features: 'imp.2mp', gloss: 'to worship; worship!' },
            { surface: 'اللَّهَ', lemma: 'اللَّه', pos: 'proper', features: 'acc', gloss: 'Allah' },
            { surface: 'مَا', lemma: 'مَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'لَكُم', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'مِّنْ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'of, any' },
            { surface: 'إِلَٰهٍ', lemma: 'إِلَٰه', pos: 'noun', features: 'indef.gen', gloss: 'a god' },
            { surface: 'غَيْرُهُ', lemma: 'غَيْر', pos: 'noun', features: 'nom+3ms', gloss: 'other than Him' },
          ],
        },
        {
          id: 'qs-v3-c13-016',
          ar: '﴿إِنِّي أَخَافُ عَلَيْكُمْ عَذَابَ يَوْمٍ عَظِيمٍ﴾.',
          en: 'I fear for you the punishment of a tremendous day."',
          tokens: [
            { surface: 'إِنِّي', lemma: 'إِنَّ', pos: 'part', features: 'part+1s', gloss: 'indeed I' },
            { surface: 'أَخَافُ', lemma: 'خَافَ', pos: 'verb', features: 'impf.1s', gloss: 'to fear; I fear' },
            { surface: 'عَلَيْكُمْ', lemma: 'عَلَى', pos: 'prep', features: 'prep+2mp', gloss: 'for you' },
            { surface: 'عَذَابَ', lemma: 'عَذَاب', pos: 'noun', features: 'acc.constr', gloss: 'the punishment of' },
            { surface: 'يَوْمٍ', lemma: 'يَوْم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
            { surface: 'عَظِيمٍ', lemma: 'عَظِيم', pos: 'adj', features: 'indef.gen', gloss: 'tremendous' },
          ],
        },
        {
          id: 'qs-v3-c13-017',
          ar: '﴿قَالَ الْمَلَأُ مِن قَوْمِهِ إِنَّا لَنَرَاكَ فِي ضَلَالٍ مُّبِينٍ﴾.',
          en: '"The chiefs among his people said: We surely see you in plain error."',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'الْمَلَأُ', lemma: 'مَلَأ', pos: 'noun', features: 'def.nom', root: 'م ل أ', gloss: 'the chiefs, nobles' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'among' },
            { surface: 'قَوْمِهِ', lemma: 'قَوْم', pos: 'noun', features: 'gen+3ms', gloss: 'his people' },
            { surface: 'إِنَّا', lemma: 'إِنَّ', pos: 'part', features: 'part+1p', gloss: 'indeed we' },
            { surface: 'لَنَرَاكَ', lemma: 'رَأَى', pos: 'verb', features: 'part+impf.1p+2ms', gloss: 'to see; we surely see you' },
            { surface: 'فِي', lemma: 'فِي', pos: 'prep', features: 'prep', gloss: 'in' },
            { surface: 'ضَلَالٍ', lemma: 'ضَلَال', pos: 'noun', features: 'indef.gen', gloss: 'error' },
            { surface: 'مُّبِينٍ', lemma: 'مُبِين', pos: 'adj', features: 'indef.gen', root: 'ب ي ن', gloss: 'clear, manifest' },
          ],
        },
        {
          id: 'qs-v3-c13-018',
          ar: '﴿قَالَ يَقَوْمِ لَيْسَ بِي ضَلَالَةٌ﴾',
          en: '"He said: O my people, there is no error in me,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قَالَ', pos: 'verb', features: 'perf.3ms', gloss: 'to say; said' },
            { surface: 'يَ', lemma: 'يَا', pos: 'part', features: 'part', gloss: 'O' },
            { surface: 'قَوْمِ', lemma: 'قَوْم', pos: 'noun', features: '1s', gloss: 'my people' },
            { surface: 'لَيْسَ', lemma: 'لَيْسَ', pos: 'verb', features: 'perf.3ms', gloss: "is not; there isn't" },
            { surface: 'بِي', lemma: 'بِ', pos: 'prep', features: 'prep+1s', gloss: 'in me' },
            { surface: 'ضَلَالَةٌ', lemma: 'ضَلَالَة', pos: 'noun', features: 'indef.nom', gloss: 'error' },
          ],
        },
        {
          id: 'qs-v3-c13-019',
          ar: '﴿وَلَكِنِّي رَسُولٌ مِن رَبِّ الْعَالَمِينَ﴾',
          en: 'rather I am a messenger from the Lord of the worlds,',
          tokens: [
            { surface: 'وَلَكِنِّي', lemma: 'لَكِنَّ', pos: 'conj', features: 'conj+part+1s', gloss: 'but I' },
            { surface: 'رَسُولٌ', lemma: 'رَسُول', pos: 'noun', features: 'indef.nom', gloss: 'a messenger' },
            { surface: 'مِن', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'رَبِّ', lemma: 'رَبّ', pos: 'noun', features: 'gen.constr', gloss: 'the Lord of' },
            { surface: 'الْعَالَمِينَ', lemma: 'عَالَم', pos: 'noun', features: 'def.gen.pl', gloss: 'the worlds' },
          ],
        },
        {
          id: 'qs-v3-c13-020',
          ar: '﴿أُبَلِّغُكُمْ رِسَالَاتِ رَبِّي وَأَنصَحُ لَكُمْ﴾',
          en: 'conveying to you the messages of my Lord and sincerely advising you,',
          tokens: [
            { surface: 'أُبَلِّغُكُمْ', lemma: 'بَلَّغَ', pos: 'verb', features: 'impf.1s+2mp', root: 'ب ل غ', gloss: 'to convey, deliver; I convey to you' },
            { surface: 'رِسَالَاتِ', lemma: 'رِسَالَة', pos: 'noun', features: 'pl.acc.constr', gloss: 'the messages of' },
            { surface: 'رَبِّي', lemma: 'رَبّ', pos: 'noun', features: 'gen+1s', gloss: 'my Lord' },
            { surface: 'وَأَنصَحُ', lemma: 'نَصَحَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to advise; and I advise' },
            { surface: 'لَكُمْ', lemma: 'لِ', pos: 'prep', features: 'prep+2mp', gloss: 'you' },
          ],
        },
        {
          id: 'qs-v3-c13-021',
          ar: '﴿وَأَعْلَمُ مِنَ اللَّهِ مَا لَا تَعْلَمُونَ﴾.',
          en: 'and I know from Allah what you do not know."',
          tokens: [
            { surface: 'وَأَعْلَمُ', lemma: 'عَلِمَ', pos: 'verb', features: 'conj+impf.1s', gloss: 'to know; and I know' },
            { surface: 'مِنَ', lemma: 'مِنْ', pos: 'prep', features: 'prep', gloss: 'from' },
            { surface: 'اللَّهِ', lemma: 'اللَّه', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'مَا', lemma: 'مَا', pos: 'rel', features: 'rel', gloss: 'what' },
            { surface: 'لَا', lemma: 'لَا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْلَمُونَ', lemma: 'عَلِمَ', pos: 'verb', features: 'impf.2mp', gloss: 'to know; you all know' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا رَدَّ نُوحٌ عَلَى اتِّهَامِ المَلَأِ لَهُ بِالضَّلَالِ؟',
          options: [
            'بِأَنَّهُ لَيْسَ بِهِ ضَلَالَةٌ، بَلْ هُوَ رَسُولٌ مِنْ رَبِّ الْعَالَمِينَ يُبَلِّغُهُمْ وَيَنْصَحُ لَهُمْ',
            'بِأَنَّهُ سَيَتْرُكُ قَوْمَهُ وَيَذْهَبُ بَعِيدًا',
            'بِأَنَّهُ لَا يَهْتَمُّ بِرَأْيِهِمْ',
          ],
          answer: 0,
          qEn: "How did Nūḥ respond to the chiefs' accusation of error?",
          optionsEn: [
            'That there is no error in him -- rather he is a messenger from the Lord of the worlds, conveying to them and advising them',
            'That he would leave his people and go far away',
            "That he doesn't care about their opinion",
          ],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'كَانَتِ الأَصْنَامُ عِنْدَهُمْ هِيَ',
        post: 'وَالْعَقْلُ.',
        en: 'Idols were, to them, the truth and reason itself.',
        options: ['الْحَقَّ', 'الْحَقُّ', 'حَقًّا', 'أَحَقّ'],
        answer: 0,
        rationales: [
          'Definite accusative -- predicate of كَانَتْ, matching الحق\'s required case after it.',
          'Nominative -- wrong case; كَانَتْ\'s predicate takes the accusative.',
          'Indefinite accusative -- wrong definiteness; the printed sentence uses the definite noun.',
          'Elative ("more true") -- wrong part of speech for this position.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَامَ نُوحٌ يَقُولُ بِ',
        post: 'صَوْتِهِ.',
        en: 'Nūḥ stood, declaring at the top of his voice.',
        options: ['أَعْلَى', 'عَالٍ', 'عُلُوّ', 'أَعْلَمَ'],
        answer: 0,
        rationales: [
          'Elative in construct -- "the loudest of," matching the required بِأَعْلَى صَوْتِهِ construction.',
          'Simple adjective ("high, loud") -- wrong form; the sentence needs the elative "loudest," not just "loud."',
          'Verbal noun ("height") -- wrong part of speech for this position.',
          'Different word ("more knowing") -- wrong meaning entirely.',
        ],
      },
      {
        type: 'cloze',
        pre: 'قَالَ نُوحٌ: إِنِّي رَسُولٌ',
        post: 'رِسَالَاتِ رَبِّي.',
        en: 'Nūḥ said: I am a messenger conveying the messages of my Lord.',
        options: ['أُبَلِّغُكُمْ', 'بَلَغَ', 'يُبَلِّغُ', 'مُبَلَّغ'],
        answer: 0,
        rationales: [
          '1st singular imperfect + 2mp object -- "I convey to you," matching the printed أُبَلِّغُكُمْ رِسَالَاتِ رَبِّي.',
          'Perfect ("reached," form I) -- wrong tense and wrong verb form; this needs the form II "convey."',
          '3rd masculine singular -- wrong person; the speaker is "I," not "he."',
          'Passive participle -- wrong part of speech for this position.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَرَى الرَّجُلُ أَنَّ هَذَا ضَلَالَةٌ وَسَفَاهَةٌ',
        pre: '',
        post: 'أَنَّ هَذَا ضَلَالَةٌ وَسَفَاهَةٌ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَرَى', 'يَرَى', 'تَرَى', 'نَرَى'],
        answer: 0,
        rationales: [
          '1st singular imperfect -- matches أَنَا.',
          '3rd masculine singular -- the base form, not shifted to "I."',
          '2nd masculine singular -- wrong person; this is "I," not "you."',
          '1st plural -- wrong number; the target is singular أَنَا, not "we."',
        ],
      },
      {
        type: 'shift',
        base: 'يَرَى الرَّجُلُ أَنَّ هَذَا ضَلَالَةٌ وَسَفَاهَةٌ',
        pre: '',
        post: 'أَنَّ هَذَا ضَلَالَةٌ وَسَفَاهَةٌ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m)',
        options: ['يَرَوْنَ', 'يَرَى', 'تَرَى', 'أَرَى'],
        answer: 0,
        rationales: [
          '3rd masculine plural imperfect -- matches هُمْ.',
          '3rd masculine singular -- the base form, not shifted to "they."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st singular -- wrong person; the target is "they," not "I."',
        ],
      },
      {
        type: 'shift',
        base: 'أَنصَحُ لِلْقَوْمِ وَأُبَلِّغُهُمْ رِسَالَةَ رَبِّي',
        pre: '',
        post: 'لِلْقَوْمِ',
        targetPerson: 'هُوَ',
        targetEn: 'he',
        options: ['يَنْصَحُ', 'أَنصَحُ', 'تَنْصَحُ', 'نَنْصَحُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular imperfect -- matches هُوَ.',
          '1st singular -- the base form, not shifted to "he."',
          '2nd/3rd feminine singular -- wrong person and gender.',
          '1st plural -- wrong person; the target is "he," not "we."',
        ],
      },
    ],
  },
};

// القراءة الراشدة, volume two, chapter 70 (printed heading "٧٠") --
// الْبَاخِرَةُ (٢) -- "The Steamship (2)".
//
// Source: _al-qir'atur-rashida 1-2.pdf, printed pages 231-233. Direct
// continuation of own ch69: that installment ended mid-topic on printed
// page 230 (naming Ibn Battuta, Ibn Jubayr, and Sulayman the Merchant as
// travelers on sailing ships) without the steamship itself ever appearing
// in ch69's running text. This chapter opens exactly where that left off
// and, true to the title, is where الْبَاخِرَة finally appears as running
// text for the first time: the paddle wheel, the first steamship (built,
// per the book's own text, by an American man), the steam-turbine
// principle already explained for the locomotive in own ch61/62, the
// Atlantic crossing, the rudder/helm and the captain, and a closing
// reflection with a Qur'anic quotation -- structurally the same
// "mechanism description + closing reflection" shape as own ch62 relative
// to ch61.
//
// Paragraph granularity: 9 blank-line-separated blocks. P1 (centuries of
// gradual invention) is the sole paragraph on p.231. P2 (paddle wheel
// tied to oars), P3 (steam-driven paddle wheel; the first steamship,
// "هِلْتَنْ كِلَرْمَاوُنْت", 100 miles in 24 hours), P4 (steamships kept
// advancing; the Atlantic crossing: 5 days vs. the old 2 months), P5 (the
// steamship's mechanism, like the locomotive's), and P6 (the steering
// mechanisms and the captain) are all on p.232. P7 (trade advanced; sea
// travel now as easy as train travel or sitting at home), P8 (ships grew
// as large as a town quarter, with a restaurant, playground, and parks),
// and P9 (the closing reflection and Qur'anic quotation) are on p.233,
// followed by the printed "٭ ٭ ٭" divider (not tokenized, matching the
// convention already used at the close of own ch58/60/62).
//
// Sentence segmentation follows the project's standing convention of
// splitting at every ، . ؛ ! and ؟ (never at a colon before reported
// speech/quotation; qr2-70-031 "...قَوْلِهِ تَعَالَىٰ: ﴿...﴾" keeps the
// colon and the following Qur'anic clause together as one sentence).
//
// Qur'anic quotation (qr2-70-031): "وَسَخَّرَ لَكُمُ الْفُلْكَ لِتَجْرِيَ
// فِي الْبَحْرِ بِأَمْرِهِ وَسَخَّرَ لَكُمُ الأَنْهَارَ" (Qur'an 14:32,
// Surat Ibrahim) is combined with its introductory clause ("وَرَأَىٰ
// تَصْدِيْقَ قَوْلِهِ تَعَالَىٰ:") into a single 14-token sentence, kept
// out of the 3-9 token Build-stage window, using the same technique the
// corpus already applies to Qur'anic quotations (see own ch62's Q43:13-14
// and own ch69's line of poetry). Its Qur'anic tokens (سَخَّرَ, الْفُلْكَ,
// لِتَجْرِيَ, بِأَمْرِهِ, الأَنْهَارَ, etc.) are glossed at the token
// level only and NOT added to newWords/lemmas, mirroring how own ch62
// left "مُقْرِنِيْنَ"/"مُنْقَلِبُوْنَ" out of its own newWords for the
// same reason; الْفُلْكَ ("the ships/ark") in particular is scriptural
// vocabulary only and is not reused anywhere else in this chapter.
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// تَدْرِيْج (p.231 fn.1, "بِالتَّدْرِيْجِ: قَلِيْلاً قَلِيْلاً"),
// مِجْدَاف (p.232 fn.1, "خَشَبَةٌ فِي رَأْسِهَا لَوْحٌ عَرِيْضٌ تُسَيَّرُ
// بِهَا الْقَوَارِبُ"), مَخَرَ (p.232 fn.2, "مَخَرَتِ السَّفِيْنَةُ: جَرَتْ
// تَشُقُّ الْمَاءَ"), مَتْن (p.233 fn.1, "عَلَىٰ مَتْنِ الْبَاخِرَةِ:
// عَلَىٰ ظَهْرِ الْبَاخِرَةِ"), and رُخَاء (p.233 fn.2, "لِيْنَةً دُوْنَ
// تَحَرُّكٍ").
//
// Judgment calls:
//   - The American builder's name is printed across a line break as
//     «هِلْتَنْ كِلَرْمَاوُنْت» (qr2-70-013), attached as a single quoted
//     name to "اسمه" ("his name is..."). Historically the first
//     commercially successful steamship (100 miles/24 hours is in the
//     right range for Robert Fulton's 1807 "North River Steamboat", aka
//     the Clermont) was built by Robert Fulton; the book's own
//     transliteration is followed here verbatim (two proper-noun tokens,
//     no attempt to "correct" it to "Fulton"), with a token gloss noting
//     the likely identification.
//   - وَتُسَخَّرُهَا (qr2-70-021) is read as active (تُسَخِّرُ, "it places
//     it in service of/at the command of") rather than passive, since the
//     mechanisms (الآلات, previous clause) are a plausible agent acting on
//     الباخرة (ها) "for the captain" -- the scan's diacritics on this
//     word are not fully legible to confirm the vowel on the second
//     radical either way.
//   - بخاري ("steam-powered/steam-driven", the adjective from بخار) is
//     added to newWords despite بخار itself being long since taught (own
//     ch61), on the same precedent as own ch69 adding شراعي/تجاري as
//     distinct adjectival lemmas from their known nominal roots.
//   - توسع ("to expand, become spacious", Form V) is added to newWords
//     even though the related Form II وسع ("to expand, widen") was
//     already taught in own ch68 with almost the same gloss; kept
//     distinct per the corpus's standing practice of treating different
//     verb forms as separate lemmas (compare دار/أدار/دوران in own ch62).
//   - أطلانتيكي ("Atlantic") and أمريكي ("American") are ordinary
//     place/nationality adjectives, glossed at the token level only and
//     NOT added to newWords, matching how own ch69 handled مغربي/أندلسي/
//     إسلامي.
//
// Homographs / reused lemmas (existing lemma key, no new newWords entry):
// "قاطرة" and "عجلة" (own ch61), "آلة"/"دوران"/"أدار"/"تحرك"/"صناعة" (own
// ch62), "سفينة"/"شراعي"/"سفر"/"شهر"/"جواب" family (own ch69), "اهتدى"/
// "سخر"/"ركب" (own ch61/62, incl. Form II رَكَّبَ merged under "ركب" per
// own ch62's own "مُرَكَّبَةٌ"), "مطمئن" (already in the corpus-wide
// ch1-60 index; used here for "مُطْمَئِنُّوْنَ" rather than a fresh
// "اطمأن" entry), "ظهر" is reused as "ظهر-فعل" to match the exact
// disambiguated lemma key already used for this verb sense in the ch1-60
// index (distinct from the noun "back").
// Following the precedent explicitly documented in own ch69's header for
// an identical situation ("وَقَفَ"/"ثِقْل"), a handful of very ordinary
// words are reused here as already known despite no citable newWords entry
// within own ch61-69 (QA pass note: an earlier draft of this comment
// misattributed several of these to specific chapters -- "تعجب" to own
// ch66, "قول"/"اسم" to own ch61/62, and "أربعين"/"ثلاثين" to own ch61 --
// none of which actually hold; verified none of these appear in those
// chapters' newWords or lemmas. They are retained as reused, ordinary
// words without a fresh newWords entry, consistent with the corpus's
// standing tolerance for common-word index gaps, per own ch69's
// "وَقَفَ"/"ثِقْل" precedent, rather than being re-taught here): "قطع" (to
// cross/cover a distance, heavily used in own ch61), "أصبح" (own ch63),
// "قوة"/"عمل" (own ch61/62/68), "كذلك" (own ch62), "تعجب", "قول" (own
// ch67's own newWords), "اسم", and the cardinal numbers "مئة"/"أربعة"/
// "عشرون"/"ألف"/"خمسمئة"/"أربعين"/"ثلاثين" ("خمسة" is the only one of
// these also used the same way in own ch61).
export const CHAPTER = {
  id: 'ch70',
  number: 70,
  title: { ar: 'الْبَاخِرَةُ', en: 'The Steamship' },
  newWords: [
    'مضى', 'بدأ', 'فكر', 'اخترع', 'توصل', 'تدريج',
    'مجداف', 'مخر', 'إدارة', 'استغناء', 'ارتقى',
    'بخاري', 'متن', 'توسع', 'حارة', 'ملعب', 'منتزه', 'رخاء', 'تصديق'
  ],
  lemmas: {
    'مضى': { gloss: 'to pass, elapse (of time)' },
    'بدأ': { gloss: 'to begin' },
    'فكر': { gloss: 'to think' },
    'اخترع': { gloss: 'to invent' },
    'توصل': { gloss: 'to manage to arrive at, attain' },
    'تدريج': { gloss: 'gradualness', book_note: 'بِالتَّدْرِيْجِ: قَلِيْلاً قَلِيْلاً.' },
    'مجداف': { gloss: 'oar', book_note: 'مِجْدَاف جمع مَجَادِيْف: خَشَبَةٌ فِي رَأْسِهَا لَوْحٌ عَرِيْضٌ تُسَيَّرُ بِهَا الْقَوَارِبُ.' },
    'مخر': { gloss: 'to cut through, plow (of a ship in water)', book_note: 'مَخَرَ يَمْخُرُ مَخْراً: مَخَرَتِ السَّفِيْنَةُ: جَرَتْ تَشُقُّ الْمَاءَ.' },
    'إدارة': { gloss: 'operating, turning (a mechanism)' },
    'استغناء': { gloss: 'dispensing with, doing without' },
    'ارتقى': { gloss: 'to advance, rise, progress' },
    'بخاري': { gloss: 'steam-powered, steam-driven' },
    'متن': { gloss: 'deck, back', book_note: 'عَلَىٰ مَتْنِ الْبَاخِرَةِ: عَلَىٰ ظَهْرِ الْبَاخِرَةِ.' },
    'توسع': { gloss: 'to expand, become spacious' },
    'حارة': { gloss: 'quarter, neighborhood (of a town)' },
    'ملعب': { gloss: 'playground, playing field' },
    'منتزه': { gloss: 'park, recreation spot' },
    'رخاء': { gloss: 'calm, gentle ease', book_note: 'رُخَاءً: لِيْنَةً دُوْنَ تَحَرُّكٍ.' },
    'تصديق': { gloss: 'confirmation, verification' }
  },
  paragraphs: [
    {
      en: 'Centuries passed since then; then people began to think and invent, until they arrived at a ship that runs on steam -- and that came about gradually, over the course of several centuries.',
      sentences: [
        {
          id: 'qr2-70-001',
          ar: 'مَضَىٰ عَلَىٰ ذٰلِكَ قُرُوْنٌ ،',
          en: 'Centuries passed since then,',
          tokens: [
            { surface: 'مَضَىٰ', lemma: 'مضى', pos: 'verb', features: 'perf.3ms', root: 'م ض ي', gloss: 'passed, elapsed' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'over, since (idiom: مضى على = time passed since)' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'قُرُوْنٌ', lemma: 'قرن', pos: 'noun', features: 'indef.nom.pl', root: 'ق ر ن', gloss: 'centuries' },
          ],
        },
        {
          id: 'qr2-70-002',
          ar: 'ثُمَّ بَدَأَ النَّاسُ يُفَكِّرُوْنَ ،',
          en: 'then people began to think,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'conj', gloss: 'then' },
            { surface: 'بَدَأَ', lemma: 'بدأ', pos: 'verb', features: 'perf.3ms', root: 'ب د أ', gloss: 'began' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يُفَكِّرُوْنَ', lemma: 'فكر', pos: 'verb', features: 'impf.3mp', root: 'ف ك ر', gloss: 'to think' },
          ],
        },
        {
          id: 'qr2-70-003',
          ar: 'وَيَخْتَرِعُوْنَ حَتَّىٰ تَوَصَّلُوا إِلَىٰ سَفِيْنَةٍ تَسِيْرُ بِالْبُخَارِ ،',
          en: 'and to invent, until they arrived at a ship that runs on steam,',
          tokens: [
            { surface: 'وَيَخْتَرِعُوْنَ', lemma: 'اخترع', pos: 'verb', features: 'conj+impf.3mp', root: 'خ ر ع', gloss: 'and to invent' },
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'تَوَصَّلُوا', lemma: 'توصل', pos: 'verb', features: 'perf.3mp', root: 'و ص ل', gloss: 'they managed to arrive at' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'at' },
            { surface: 'سَفِيْنَةٍ', lemma: 'سفينة', pos: 'noun', features: 'indef.gen', gloss: 'a ship' },
            { surface: 'تَسِيْرُ', lemma: 'سار', pos: 'verb', features: 'impf.3fs', gloss: 'runs, travels' },
            { surface: 'بِالْبُخَارِ', lemma: 'بخار', pos: 'noun', features: 'prep+def.gen', gloss: 'by steam' },
          ],
        },
        {
          id: 'qr2-70-004',
          ar: 'وَكَانَ ذٰلِكَ بِالتَّدْرِيْجِ ،',
          en: 'and that came about gradually,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'بِالتَّدْرِيْجِ', lemma: 'تدريج', pos: 'noun', features: 'prep+def.gen', root: 'د ر ج', gloss: 'gradually' },
          ],
        },
        {
          id: 'qr2-70-005',
          ar: 'وَفِيْ عِدَّةِ قُرُوْنٍ .',
          en: 'over the course of several centuries.',
          tokens: [
            { surface: 'وَفِيْ', lemma: 'في', pos: 'prep', features: 'conj', gloss: 'and over' },
            { surface: 'عِدَّةِ', lemma: 'عدة', pos: 'noun', features: 'gen.constr', root: 'ع د د', gloss: 'several (of)' },
            { surface: 'قُرُوْنٍ', lemma: 'قرن', pos: 'noun', features: 'indef.gen.pl', gloss: 'centuries' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا حَدَثَ بِالتَّدْرِيْجِ فِيْ عِدَّةِ قُرُوْنٍ؟',
          options: ['تَوَصَّلَ النَّاسُ إِلَىٰ سَفِيْنَةٍ تَسِيْرُ بِالْبُخَارِ', 'بَنَى النَّاسُ الْقَاطِرَةَ', 'سَافَرَ النَّاسُ إِلَىٰ الْقَمَرِ'],
          answer: 0,
          qEn: 'What happened gradually, over several centuries?',
          optionsEn: ['People arrived at a ship that runs on steam', 'People built the locomotive', 'People traveled to the moon'],
        },
      ],
    },
    {
      en: 'Sailing ships used to move by oars; then some clever people went further: one fitted a wheel onto a ship and tied the oars to it, so that when the wheel turned, the oars began to work and cut through the water.',
      sentences: [
        {
          id: 'qr2-70-006',
          ar: 'كَانَتِ السُّفُنُ الشِّرَاعِيَّةُ تَسِيْرُ بِالْمَجَادِيْفِ ،',
          en: 'Sailing ships used to move by oars,',
          tokens: [
            { surface: 'كَانَتِ', lemma: 'كان', pos: 'verb', features: 'perf.3fs', root: 'ك و ن', gloss: 'were, used to' },
            { surface: 'السُّفُنُ', lemma: 'سفينة', pos: 'noun', features: 'def.nom.pl', gloss: 'the ships' },
            { surface: 'الشِّرَاعِيَّةُ', lemma: 'شراعي', pos: 'adj', features: 'def.nom', gloss: 'sailing' },
            { surface: 'تَسِيْرُ', lemma: 'سار', pos: 'verb', features: 'impf.3fs', gloss: 'move, travel' },
            { surface: 'بِالْمَجَادِيْفِ', lemma: 'مجداف', pos: 'noun', features: 'prep+def.gen.pl', root: 'ج د ف', gloss: 'by oars' },
          ],
        },
        {
          id: 'qr2-70-007',
          ar: 'وَتَقَدَّمَ بَعْضُ الأَذْكِيَاءِ فَرَكَّبَ فِيْ سَفِيْنَةٍ عَجَلَةً رَبَطَ بِهَا الْمَجَادِيْفَ ،',
          en: 'then some clever people went further: one fitted a wheel onto a ship and tied the oars to it,',
          tokens: [
            { surface: 'وَتَقَدَّمَ', lemma: 'تقدم', pos: 'verb', features: 'conj+perf.3ms', gloss: 'advanced, went further' },
            { surface: 'بَعْضُ', lemma: 'بعض', pos: 'noun', features: 'nom.constr', gloss: 'some (of)' },
            { surface: 'الأَذْكِيَاءِ', lemma: 'ذكي', pos: 'noun', features: 'def.gen.pl', root: 'ذ ك و', gloss: 'the clever ones' },
            { surface: 'فَرَكَّبَ', lemma: 'ركب', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and fitted, installed' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'onto' },
            { surface: 'سَفِيْنَةٍ', lemma: 'سفينة', pos: 'noun', features: 'indef.gen', gloss: 'a ship' },
            { surface: 'عَجَلَةً', lemma: 'عجلة', pos: 'noun', features: 'indef.acc', gloss: 'a wheel' },
            { surface: 'رَبَطَ', lemma: 'ربط', pos: 'verb', features: 'perf.3ms', root: 'ر ب ط', gloss: 'tied, attached' },
            { surface: 'بِهَا', lemma: 'ب', pos: 'prep', features: '3fs', gloss: 'to it' },
            { surface: 'الْمَجَادِيْفَ', lemma: 'مجداف', pos: 'noun', features: 'def.acc.pl', gloss: 'the oars' },
          ],
        },
        {
          id: 'qr2-70-008',
          ar: 'فَإِذَا دَارَتِ الْعَجَلَةُ بَدَأَتِ الْمَجَادِيْفُ تَعْمَلُ وَتَمْخُرُ الْمَاءَ .',
          en: 'so that when the wheel turned, the oars began to work and cut through the water.',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إذا', pos: 'part', features: 'conj', gloss: 'so when' },
            { surface: 'دَارَتِ', lemma: 'دار', pos: 'verb', features: 'perf.3fs', gloss: 'turned, rotated' },
            { surface: 'الْعَجَلَةُ', lemma: 'عجلة', pos: 'noun', features: 'def.nom', gloss: 'the wheel' },
            { surface: 'بَدَأَتِ', lemma: 'بدأ', pos: 'verb', features: 'perf.3fs', gloss: 'began' },
            { surface: 'الْمَجَادِيْفُ', lemma: 'مجداف', pos: 'noun', features: 'def.nom.pl', gloss: 'the oars' },
            { surface: 'تَعْمَلُ', lemma: 'عمل', pos: 'verb', features: 'impf.3fs', gloss: 'to work, operate' },
            { surface: 'وَتَمْخُرُ', lemma: 'مخر', pos: 'verb', features: 'conj+impf.3fs', root: 'م خ ر', gloss: 'and cut through, plow' },
            { surface: 'الْمَاءَ', lemma: 'ماء', pos: 'noun', features: 'def.acc', gloss: 'the water' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا رَبَطَ بَعْضُ الأَذْكِيَاءِ بِعَجَلَةِ السَّفِيْنَةِ؟',
          options: ['الْمَجَادِيْفَ', 'الشِّرَاعَ', 'الْحِبَالَ'],
          answer: 0,
          qEn: "What did some clever people tie to the ship's wheel?",
          optionsEn: ['The oars', 'The sail', 'The ropes'],
        },
      ],
    },
    {
      en: 'Then some clever people found a way to turn the wheel by steam, dispensing with manual labor; and the craft kept advancing until the first steam-powered ship appeared, made by an American man named "Hilten Clermont", which covered a hundred miles in twenty-four hours.',
      sentences: [
        {
          id: 'qr2-70-009',
          ar: 'ثُمَّ اهْتَدَىٰ بَعْضُ الأَذْكِيَاءِ إِلَىٰ إِدَارَةِ الْعَجَلَةِ بِالْبُخَارِ ،',
          en: 'Then some clever people found a way to turn the wheel by steam,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'conj', gloss: 'then' },
            { surface: 'اهْتَدَىٰ', lemma: 'اهتدى', pos: 'verb', features: 'perf.3ms', gloss: 'found the way to' },
            { surface: 'بَعْضُ', lemma: 'بعض', pos: 'noun', features: 'nom.constr', gloss: 'some (of)' },
            { surface: 'الأَذْكِيَاءِ', lemma: 'ذكي', pos: 'noun', features: 'def.gen.pl', gloss: 'the clever ones' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'إِدَارَةِ', lemma: 'إدارة', pos: 'noun', features: 'gen.constr', root: 'د و ر', gloss: 'the turning (of)' },
            { surface: 'الْعَجَلَةِ', lemma: 'عجلة', pos: 'noun', features: 'def.gen', gloss: 'the wheel' },
            { surface: 'بِالْبُخَارِ', lemma: 'بخار', pos: 'noun', features: 'prep+def.gen', gloss: 'by steam' },
          ],
        },
        {
          id: 'qr2-70-010',
          ar: 'وَالاسْتِغْنَاءِ عَنِ الْيَدِ الْعَامِلَةِ ،',
          en: 'dispensing with manual labor,',
          tokens: [
            { surface: 'وَالاسْتِغْنَاءِ', lemma: 'استغناء', pos: 'noun', features: 'conj+def.gen', root: 'غ ن ي', gloss: 'and dispensing with' },
            { surface: 'عَنِ', lemma: 'عن', pos: 'prep', gloss: 'from' },
            { surface: 'الْيَدِ', lemma: 'يد', pos: 'noun', features: 'def.gen', gloss: 'the hand' },
            { surface: 'الْعَامِلَةِ', lemma: 'عامل', pos: 'adj', features: 'def.gen', gloss: 'working (idiom: manual labor)' },
          ],
        },
        {
          id: 'qr2-70-011',
          ar: 'وَلَمْ تَزَلِ الصِّنَاعَةُ تَرْتَقِيْ ،',
          en: 'and the craft kept advancing,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لم', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَزَلِ', lemma: 'زال', pos: 'verb', features: 'jussive.3fs', gloss: 'ceased (لَمْ تَزَلْ = kept on)' },
            { surface: 'الصِّنَاعَةُ', lemma: 'صناعة', pos: 'noun', features: 'def.nom', gloss: 'the craft, industry' },
            { surface: 'تَرْتَقِيْ', lemma: 'ارتقى', pos: 'verb', features: 'impf.3fs', root: 'ر ق ي', gloss: 'to advance, rise' },
          ],
        },
        {
          id: 'qr2-70-012',
          ar: 'حَتَّىٰ ظَهَرَتْ أَوَّلُ سَفِيْنَةٍ بُخَارِيَّةٍ ،',
          en: 'until the first steam-powered ship appeared,',
          tokens: [
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'ظَهَرَتْ', lemma: 'ظهر-فعل', pos: 'verb', features: 'perf.3fs', gloss: 'appeared' },
            { surface: 'أَوَّلُ', lemma: 'أول', pos: 'noun', features: 'nom.constr', gloss: 'the first (of)' },
            { surface: 'سَفِيْنَةٍ', lemma: 'سفينة', pos: 'noun', features: 'indef.gen', gloss: 'a ship' },
            { surface: 'بُخَارِيَّةٍ', lemma: 'بخاري', pos: 'adj', features: 'indef.gen', root: 'ب خ ر', gloss: 'steam-powered' },
          ],
        },
        {
          id: 'qr2-70-013',
          ar: 'صَنَعَهَا رَجُلٌ أَمْرِيْكِيٌّ اسْمُهُ «هِلْتَنْ كِلَرْمَاوُنْت» قَطَعَتْ مِئَةَ مِيْلٍ فِيْ أَرْبَعٍ وَعِشْرِيْنَ سَاعَةً .',
          en: 'made by an American man named "Hilten Clermont" -- it covered a hundred miles in twenty-four hours.',
          tokens: [
            { surface: 'صَنَعَهَا', lemma: 'صنع', pos: 'verb', features: 'perf.3ms+3fs', gloss: 'made it' },
            { surface: 'رَجُلٌ', lemma: 'رجل', pos: 'noun', features: 'indef.nom', gloss: 'a man' },
            { surface: 'أَمْرِيْكِيٌّ', lemma: 'أمريكي', pos: 'adj', features: 'indef.nom', gloss: 'American' },
            { surface: 'اسْمُهُ', lemma: 'اسم', pos: 'noun', features: 'nom+3ms', gloss: 'his name (is)' },
            { surface: 'هِلْتَنْ', lemma: 'هلتن', pos: 'proper', gloss: 'Hilten (the book\'s own rendering; the first successful steamship, historically the "Clermont", is generally credited to the American Robert Fulton)' },
            { surface: 'كِلَرْمَاوُنْت', lemma: 'كلرماونت', pos: 'proper', gloss: 'Clermont (see previous token\'s note)' },
            { surface: 'قَطَعَتْ', lemma: 'قطع', pos: 'verb', features: 'perf.3fs', gloss: 'covered, crossed (a distance)' },
            { surface: 'مِئَةَ', lemma: 'مئة', pos: 'num', features: 'acc.constr', gloss: 'a hundred' },
            { surface: 'مِيْلٍ', lemma: 'ميل', pos: 'noun', features: 'indef.gen', gloss: 'a mile' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'أَرْبَعٍ', lemma: 'أربعة', pos: 'num', features: 'indef.gen', gloss: 'four' },
            { surface: 'وَعِشْرِيْنَ', lemma: 'عشرون', pos: 'num', features: 'conj+indef.gen', gloss: 'and twenty' },
            { surface: 'سَاعَةً', lemma: 'ساعة', pos: 'noun', features: 'indef.acc', gloss: 'an hour' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنِ الَّذِيْ صَنَعَ أَوَّلَ سَفِيْنَةٍ بُخَارِيَّةٍ؟',
          options: ['رَجُلٌ أَمْرِيْكِيٌّ', 'رَجُلٌ إِنْكِلِيْزِيٌّ', 'رَجُلٌ فَرَنْسِيٌّ'],
          answer: 0,
          qEn: 'Who made the first steam-powered ship?',
          optionsEn: ['An American man', 'An Englishman', 'A Frenchman'],
        },
        {
          q: 'كَمْ مِيْلاً قَطَعَتِ السَّفِيْنَةُ الْبُخَارِيَّةُ الأُوْلَىٰ فِيْ أَرْبَعٍ وَعِشْرِيْنَ سَاعَةً؟',
          options: ['مِئَةَ مِيْلٍ', 'عَشَرَةَ أَمْيَالٍ', 'أَلْفَ مِيْلٍ'],
          answer: 0,
          qEn: 'How many miles did the first steamship cover in twenty-four hours?',
          optionsEn: ['A hundred miles', 'Ten miles', 'A thousand miles'],
        },
      ],
    },
    {
      en: 'Steamships kept advancing in speed and power, until they came to cross the Atlantic Ocean between England and America in five days -- whereas the journey across this sea used to take two months.',
      sentences: [
        {
          id: 'qr2-70-014',
          ar: 'وَلَمْ تَزَلِ السُّفُنُ الْبُخَارِيَّةُ تَتَقَدَّمُ فِي السُّرْعَةِ وَالْقُوَّةِ ،',
          en: 'Steamships kept advancing in speed and power,',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لم', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تَزَلِ', lemma: 'زال', pos: 'verb', features: 'jussive.3fs', gloss: 'ceased' },
            { surface: 'السُّفُنُ', lemma: 'سفينة', pos: 'noun', features: 'def.nom.pl', gloss: 'the ships' },
            { surface: 'الْبُخَارِيَّةُ', lemma: 'بخاري', pos: 'adj', features: 'def.nom', gloss: 'steam-powered' },
            { surface: 'تَتَقَدَّمُ', lemma: 'تقدم', pos: 'verb', features: 'impf.3fs', gloss: 'advances, progresses' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'السُّرْعَةِ', lemma: 'سرعة', pos: 'noun', features: 'def.gen', gloss: 'speed' },
            { surface: 'وَالْقُوَّةِ', lemma: 'قوة', pos: 'noun', features: 'conj+def.gen', gloss: 'and power' },
          ],
        },
        {
          id: 'qr2-70-015',
          ar: 'حَتَّىٰ أَصْبَحَتْ تَعْبُرُ الْبَحْرَ الأَطْلاَنْتِيْكِيَّ بَيْنَ إِنْكِلْتَرَة وَأَمْرِيْكَةَ فِيْ خَمْسَةِ أَيَّامٍ ،',
          en: 'until they came to cross the Atlantic Ocean between England and America in five days,',
          tokens: [
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'أَصْبَحَتْ', lemma: 'أصبح', pos: 'verb', features: 'perf.3fs', gloss: 'came to, began to' },
            { surface: 'تَعْبُرُ', lemma: 'عبر', pos: 'verb', features: 'impf.3fs', root: 'ع ب ر', gloss: 'cross' },
            { surface: 'الْبَحْرَ', lemma: 'بحر', pos: 'noun', features: 'def.acc', gloss: 'the sea' },
            { surface: 'الأَطْلاَنْتِيْكِيَّ', lemma: 'أطلانتيكي', pos: 'adj', features: 'def.acc', gloss: 'the Atlantic' },
            { surface: 'بَيْنَ', lemma: 'بين', pos: 'prep', gloss: 'between' },
            { surface: 'إِنْكِلْتَرَة', lemma: 'إنكلترة', pos: 'proper', features: 'gen', gloss: 'England' },
            { surface: 'وَأَمْرِيْكَةَ', lemma: 'أمريكة', pos: 'proper', features: 'conj+gen', gloss: 'and America' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'خَمْسَةِ', lemma: 'خمسة', pos: 'num', features: 'gen.constr', gloss: 'five' },
            { surface: 'أَيَّامٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen.pl', gloss: 'days' },
          ],
        },
        {
          id: 'qr2-70-016',
          ar: 'وَكَانَ السَّفَرُ فِيْ هٰذَا الْبَحْرِ يَأْخُذُ شَهْرَيْنِ .',
          en: 'whereas the journey across this sea used to take two months.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'السَّفَرُ', lemma: 'سفر', pos: 'noun', features: 'def.nom', gloss: 'the journey' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'across, in' },
            { surface: 'هٰذَا', lemma: 'هذا', pos: 'dem', gloss: 'this' },
            { surface: 'الْبَحْرِ', lemma: 'بحر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'يَأْخُذُ', lemma: 'أخذ', pos: 'verb', features: 'impf.3ms', gloss: 'takes' },
            { surface: 'شَهْرَيْنِ', lemma: 'شهر', pos: 'noun', features: 'acc.du', gloss: 'two months' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ كَانَتِ الْبَاخِرَةُ تَسْتَغْرِقُ لِعُبُوْرِ الْبَحْرِ الأَطْلاَنْتِيْكِيِّ؟',
          options: ['خَمْسَةَ أَيَّامٍ', 'شَهْرَيْنِ', 'أُسْبُوْعاً'],
          answer: 0,
          qEn: 'How long did a steamship take to cross the Atlantic Ocean?',
          optionsEn: ['Five days', 'Two months', 'A week'],
        },
      ],
    },
    {
      en: 'The steamship, like the locomotive, moves by the power of steam: it turns the wheel, and the wheel is connected to mechanisms by whose turning the steamship moves and travels.',
      sentences: [
        {
          id: 'qr2-70-017',
          ar: 'وَالْبَاخِرَةُ كَالْقَاطِرَةِ تَسِيْرُ بِقُوَّةِ الْبُخَارِ ،',
          en: 'The steamship, like the locomotive, moves by the power of steam,',
          tokens: [
            { surface: 'وَالْبَاخِرَةُ', lemma: 'باخرة', pos: 'noun', features: 'conj+def.nom', root: 'ب خ ر', gloss: 'and the steamship' },
            { surface: 'كَالْقَاطِرَةِ', lemma: 'قاطرة', pos: 'noun', features: 'prep+def.gen', gloss: 'like the locomotive' },
            { surface: 'تَسِيْرُ', lemma: 'سار', pos: 'verb', features: 'impf.3fs', gloss: 'moves' },
            { surface: 'بِقُوَّةِ', lemma: 'قوة', pos: 'noun', features: 'prep+gen.constr', gloss: 'by the power of' },
            { surface: 'الْبُخَارِ', lemma: 'بخار', pos: 'noun', features: 'def.gen', gloss: 'the steam' },
          ],
        },
        {
          id: 'qr2-70-018',
          ar: 'فَإِنَّهُ يُدِيْرُ الْعَجَلَةَ ،',
          en: 'for it turns the wheel,',
          tokens: [
            { surface: 'فَإِنَّهُ', lemma: 'إن', pos: 'part', features: 'conj+3ms', gloss: 'for it' },
            { surface: 'يُدِيْرُ', lemma: 'أدار', pos: 'verb', features: 'impf.3ms', gloss: 'turns' },
            { surface: 'الْعَجَلَةَ', lemma: 'عجلة', pos: 'noun', features: 'def.acc', gloss: 'the wheel' },
          ],
        },
        {
          id: 'qr2-70-019',
          ar: 'وَالْعَجَلَةُ مُتَّصِلَةٌ بِآلاَتٍ تَتَحَرَّكُ الْبَاخِرَةُ بِدَوَرَانِهَا وَتَسِيْرُ .',
          en: 'and the wheel is connected to mechanisms by whose turning the steamship moves and travels.',
          tokens: [
            { surface: 'وَالْعَجَلَةُ', lemma: 'عجلة', pos: 'noun', features: 'conj+def.nom', gloss: 'and the wheel' },
            { surface: 'مُتَّصِلَةٌ', lemma: 'متصل', pos: 'adj', features: 'indef.nom', gloss: 'connected' },
            { surface: 'بِآلاَتٍ', lemma: 'آلة', pos: 'noun', features: 'prep+indef.gen.pl', gloss: 'to mechanisms' },
            { surface: 'تَتَحَرَّكُ', lemma: 'تحرك', pos: 'verb', features: 'impf.3fs', gloss: 'moves' },
            { surface: 'الْبَاخِرَةُ', lemma: 'باخرة', pos: 'noun', features: 'def.nom', gloss: 'the steamship' },
            { surface: 'بِدَوَرَانِهَا', lemma: 'دوران', pos: 'noun', features: 'prep+gen+3fp', gloss: 'by their turning' },
            { surface: 'وَتَسِيْرُ', lemma: 'سار', pos: 'verb', features: 'conj+impf.3fs', gloss: 'and travels' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا تَسِيْرُ الْبَاخِرَةُ؟',
          options: ['بِقُوَّةِ الْبُخَارِ', 'بِالرِّيْحِ', 'بِالْمَجَادِيْفِ فَقَطْ'],
          answer: 0,
          qEn: 'What makes the steamship move?',
          optionsEn: ['The power of steam', 'The wind', 'Oars only'],
        },
      ],
    },
    {
      en: "Likewise, there are mechanisms there that steer the steamship from one direction to another, placed at the captain's command, so that he sails it however he wishes.",
      sentences: [
        {
          id: 'qr2-70-020',
          ar: 'وَكَذٰلِكَ هُنَالِكَ آلاَتٌ تُوَجِّهُ الْبَاخِرَةَ مِنْ جِهَةٍ إِلَىٰ جِهَةٍ ،',
          en: 'Likewise, there are mechanisms there that steer the steamship from one direction to another,',
          tokens: [
            { surface: 'وَكَذٰلِكَ', lemma: 'كذلك', pos: 'adv', features: 'conj', gloss: 'and likewise' },
            { surface: 'هُنَالِكَ', lemma: 'هنالك', pos: 'adv', gloss: 'there' },
            { surface: 'آلاَتٌ', lemma: 'آلة', pos: 'noun', features: 'indef.nom.pl', gloss: 'mechanisms' },
            { surface: 'تُوَجِّهُ', lemma: 'وجه', pos: 'verb', features: 'impf.3fs', gloss: 'steers, directs' },
            { surface: 'الْبَاخِرَةَ', lemma: 'باخرة', pos: 'noun', features: 'def.acc', gloss: 'the steamship' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'جِهَةٍ', lemma: 'جهة', pos: 'noun', features: 'indef.gen', root: 'و ج ه', gloss: 'a direction' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'جِهَةٍ', lemma: 'جهة', pos: 'noun', features: 'indef.gen', gloss: 'a direction' },
          ],
        },
        {
          id: 'qr2-70-021',
          ar: 'وَتُسَخِّرُهَا لِلرُّبَّانِ يَسِيْرُ بِهَا كَيْفَ يَشَاءُ .',
          en: "placed at the captain's command, so that he sails it however he wishes.",
          tokens: [
            { surface: 'وَتُسَخِّرُهَا', lemma: 'سخر', pos: 'verb', features: 'conj+impf.3fs+3fs', gloss: 'and places it in service of' },
            { surface: 'لِلرُّبَّانِ', lemma: 'ربان', pos: 'noun', features: 'prep+def.gen', gloss: 'for the captain' },
            { surface: 'يَسِيْرُ', lemma: 'سار', pos: 'verb', features: 'impf.3ms', gloss: 'he sails, moves' },
            { surface: 'بِهَا', lemma: 'ب', pos: 'prep', features: '3fs', gloss: 'with it' },
            { surface: 'كَيْفَ', lemma: 'كيف', pos: 'adv', gloss: 'however' },
            { surface: 'يَشَاءُ', lemma: 'شاء', pos: 'verb', features: 'impf.3ms', root: 'ش ي أ', gloss: 'he wishes' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ يُوَجِّهُ الْبَاخِرَةَ وَيُسَيِّرُهَا كَيْفَ يَشَاءُ؟',
          options: ['الرُّبَّانُ', 'الْوَقَّادُ', 'أَحَدُ الرُّكَّابِ'],
          answer: 0,
          qEn: 'Who directs the steamship and sails it however he wishes?',
          optionsEn: ['The captain', 'The fireman/stoker', 'One of the passengers'],
        },
      ],
    },
    {
      en: 'Trade advanced greatly, and people came to travel by sea aboard the steamship as though they were traveling on land by train, or resting easy in town and sitting at home.',
      sentences: [
        {
          id: 'qr2-70-022',
          ar: 'وَقَدْ تَقَدَّمَتِ التِّجَارَةُ تَقَدُّماً عَظِيْماً ،',
          en: 'Trade advanced greatly,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قد', pos: 'part', features: 'conj', gloss: 'indeed' },
            { surface: 'تَقَدَّمَتِ', lemma: 'تقدم', pos: 'verb', features: 'perf.3fs', gloss: 'advanced' },
            { surface: 'التِّجَارَةُ', lemma: 'تجارة', pos: 'noun', features: 'def.nom', root: 'ت ج ر', gloss: 'trade, commerce' },
            { surface: 'تَقَدُّماً', lemma: 'تقدم', pos: 'noun', features: 'indef.acc', gloss: 'an advancement' },
            { surface: 'عَظِيْماً', lemma: 'عظيم', pos: 'adj', features: 'indef.acc', gloss: 'great' },
          ],
        },
        {
          id: 'qr2-70-023',
          ar: 'وَأَصْبَحَ النَّاسُ يُسَافِرُوْنَ فِي الْبَحْرِ عَلَىٰ مَتْنِ الْبَاخِرَةِ كَأَنَّهُمْ يُسَافِرُوْنَ فِي الْبَرِّ عَلَىٰ الْقِطَارِ ،',
          en: 'and people came to travel by sea aboard the steamship as though they were traveling on land by train,',
          tokens: [
            { surface: 'وَأَصْبَحَ', lemma: 'أصبح', pos: 'verb', features: 'conj+perf.3ms', gloss: 'came to, began to' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يُسَافِرُوْنَ', lemma: 'سافر', pos: 'verb', features: 'impf.3mp', gloss: 'travel' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'by (lit. in)' },
            { surface: 'الْبَحْرِ', lemma: 'بحر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'aboard' },
            { surface: 'مَتْنِ', lemma: 'متن', pos: 'noun', features: 'gen.constr', root: 'م ت ن', gloss: 'the deck (of)' },
            { surface: 'الْبَاخِرَةِ', lemma: 'باخرة', pos: 'noun', features: 'def.gen', gloss: 'the steamship' },
            { surface: 'كَأَنَّهُمْ', lemma: 'كأن', pos: 'part', features: '3mp', gloss: 'as though they' },
            { surface: 'يُسَافِرُوْنَ', lemma: 'سافر', pos: 'verb', features: 'impf.3mp', gloss: 'were traveling' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'الْبَرِّ', lemma: 'بر', pos: 'noun', features: 'def.gen', gloss: 'the land' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'by' },
            { surface: 'الْقِطَارِ', lemma: 'قطار', pos: 'noun', features: 'def.gen', gloss: 'the train' },
          ],
        },
        {
          id: 'qr2-70-024',
          ar: 'أَوْ مُطْمَئِنُّوْنَ فِي الْبَلَدِ وَجَالِسُوْنَ فِي الدَّارِ .',
          en: 'or resting easy in town and sitting at home.',
          tokens: [
            { surface: 'أَوْ', lemma: 'أو', pos: 'conj', gloss: 'or' },
            { surface: 'مُطْمَئِنُّوْنَ', lemma: 'مطمئن', pos: 'adj', features: 'nom.pl', gloss: 'at ease, tranquil' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الْبَلَدِ', lemma: 'بلد', pos: 'noun', features: 'def.gen', gloss: 'the town' },
            { surface: 'وَجَالِسُوْنَ', lemma: 'جلس', pos: 'adj', features: 'conj+nom.pl', gloss: 'and sitting' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الدَّارِ', lemma: 'دار', pos: 'noun', features: 'def.gen', gloss: 'the house' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ أَصْبَحَ النَّاسُ يُسَافِرُوْنَ فِي الْبَحْرِ بَعْدَ تَقَدُّمِ التِّجَارَةِ؟',
          options: ['كَأَنَّهُمْ يُسَافِرُوْنَ عَلَى الْقِطَارِ أَوْ جَالِسُوْنَ فِي الدَّارِ', 'بِخَوْفٍ شَدِيْدٍ', 'بِمَشَقَّةٍ كَبِيْرَةٍ'],
          answer: 0,
          qEn: 'How did people come to travel by sea after trade advanced?',
          optionsEn: ['As though traveling by train or sitting at home', 'With great fear', 'With great hardship'],
        },
      ],
    },
    {
      en: 'The vessels grew larger and more spacious, until it was as if each were a quarter of a town, or a small village, containing a restaurant, a playground, and parks, and carrying from five hundred to a thousand passengers.',
      sentences: [
        {
          id: 'qr2-70-025',
          ar: 'وَكَبُرَتِ الْمَرَاكِبُ وَتَوَسَّعَتْ ،',
          en: 'The vessels grew larger and more spacious,',
          tokens: [
            { surface: 'وَكَبُرَتِ', lemma: 'كبر', pos: 'verb', features: 'conj+perf.3fs', gloss: 'grew large' },
            { surface: 'الْمَرَاكِبُ', lemma: 'مركب', pos: 'noun', features: 'def.nom.pl', root: 'ر ك ب', gloss: 'the vessels' },
            { surface: 'وَتَوَسَّعَتْ', lemma: 'توسع', pos: 'verb', features: 'conj+perf.3fs', root: 'و س ع', gloss: 'and became more spacious' },
          ],
        },
        {
          id: 'qr2-70-026',
          ar: 'حَتَّىٰ كَأَنَّهَا حَارَةٌ مِنْ حَارَاتِ الْبَلَدِ ،',
          en: 'until it was as if each were a quarter of a town,',
          tokens: [
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'كَأَنَّهَا', lemma: 'كأن', pos: 'part', features: '3fs', gloss: 'as if it (were)' },
            { surface: 'حَارَةٌ', lemma: 'حارة', pos: 'noun', features: 'indef.nom', gloss: 'a quarter, neighborhood' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'حَارَاتِ', lemma: 'حارة', pos: 'noun', features: 'gen.constr.pl', gloss: 'the quarters of' },
            { surface: 'الْبَلَدِ', lemma: 'بلد', pos: 'noun', features: 'def.gen', gloss: 'the town' },
          ],
        },
        {
          id: 'qr2-70-027',
          ar: 'أَوْ قَرْيَةٌ صَغِيْرَةٌ ،',
          en: 'or a small village,',
          tokens: [
            { surface: 'أَوْ', lemma: 'أو', pos: 'conj', gloss: 'or' },
            { surface: 'قَرْيَةٌ', lemma: 'قرية', pos: 'noun', features: 'indef.nom', gloss: 'a village' },
            { surface: 'صَغِيْرَةٌ', lemma: 'صغير', pos: 'adj', features: 'indef.nom', gloss: 'small' },
          ],
        },
        {
          id: 'qr2-70-028',
          ar: 'فِيْهَا الْمَطْعَمُ وَالْمَلْعَبُ وَمُنْتَزَهَاتٌ ،',
          en: 'containing a restaurant, a playground, and parks,',
          tokens: [
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'in it' },
            { surface: 'الْمَطْعَمُ', lemma: 'مطعم', pos: 'noun', features: 'def.nom', root: 'ط ع م', gloss: 'the restaurant' },
            { surface: 'وَالْمَلْعَبُ', lemma: 'ملعب', pos: 'noun', features: 'conj+def.nom', root: 'ل ع ب', gloss: 'and the playground' },
            { surface: 'وَمُنْتَزَهَاتٌ', lemma: 'منتزه', pos: 'noun', features: 'conj+indef.nom.pl', root: 'ن ز ه', gloss: 'and parks' },
          ],
        },
        {
          id: 'qr2-70-029',
          ar: 'وَتَحْمِلُ مِنَ الرُّكَّابِ مِنْ خَمْسِمِئَةٍ إِلَىٰ أَلْفٍ .',
          en: 'and carrying from five hundred to a thousand passengers.',
          tokens: [
            { surface: 'وَتَحْمِلُ', lemma: 'حمل', pos: 'verb', features: 'conj+impf.3fs', gloss: 'and carries' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'الرُّكَّابِ', lemma: 'ركاب', pos: 'noun', features: 'def.gen', gloss: 'the passengers' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'خَمْسِمِئَةٍ', lemma: 'خمسمئة', pos: 'num', features: 'indef.gen', gloss: 'five hundred' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'أَلْفٍ', lemma: 'ألف', pos: 'num', features: 'indef.gen', gloss: 'a thousand' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ رَاكِباً تَحْمِلُ الْبَاخِرَةُ الْكَبِيْرَةُ؟',
          options: ['مِنْ خَمْسِمِئَةٍ إِلَىٰ أَلْفٍ', 'عَشَرَةً فَقَطْ', 'مِئَةَ رَاكِبٍ'],
          answer: 0,
          qEn: 'How many passengers does a large steamship carry?',
          optionsEn: ['From five hundred to a thousand', 'Only ten', 'A hundred passengers'],
        },
      ],
    },
    {
      en: 'And when a person sees the sailing ships and the steam-powered vessels running smoothly upon the sea, he marvels, and sees the truth of His Most High saying: "And He has subjected for you the ships that they may sail through the sea by His command, and He has subjected for you the rivers." (Qur\'an, Ibrahim 14:32)',
      sentences: [
        {
          id: 'qr2-70-030',
          ar: 'وَإِذَا رَأَىٰ الإِنْسَانُ السُّفُنَ الشِّرَاعِيَّةَ وَالْمَرَاكِبَ الْبُخَارِيَّةَ تَجْرِيْ فِي الْبَحْرِ رُخَاءً تَعَجَّبَ ،',
          en: 'And when a person sees the sailing ships and the steam-powered vessels running smoothly upon the sea, he marvels,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إذا', pos: 'part', features: 'conj', gloss: 'and when' },
            { surface: 'رَأَىٰ', lemma: 'رأى', pos: 'verb', features: 'perf.3ms', gloss: 'sees' },
            { surface: 'الإِنْسَانُ', lemma: 'إنسان', pos: 'noun', features: 'def.nom', gloss: 'a person' },
            { surface: 'السُّفُنَ', lemma: 'سفينة', pos: 'noun', features: 'def.acc.pl', gloss: 'the ships' },
            { surface: 'الشِّرَاعِيَّةَ', lemma: 'شراعي', pos: 'adj', features: 'def.acc', gloss: 'sailing' },
            { surface: 'وَالْمَرَاكِبَ', lemma: 'مركب', pos: 'noun', features: 'conj+def.acc.pl', gloss: 'and the vessels' },
            { surface: 'الْبُخَارِيَّةَ', lemma: 'بخاري', pos: 'adj', features: 'def.acc', gloss: 'steam-powered' },
            { surface: 'تَجْرِيْ', lemma: 'جرى', pos: 'verb', features: 'impf.3fs', gloss: 'running' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'upon' },
            { surface: 'الْبَحْرِ', lemma: 'بحر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'رُخَاءً', lemma: 'رخاء', pos: 'noun', features: 'indef.acc', root: 'ر خ و', gloss: 'smoothly, calmly' },
            { surface: 'تَعَجَّبَ', lemma: 'تعجب', pos: 'verb', features: 'perf.3ms', gloss: 'he marvels' },
          ],
        },
        {
          id: 'qr2-70-031',
          ar: 'وَرَأَىٰ تَصْدِيْقَ قَوْلِهِ تَعَالَىٰ: ﴿ وَسَخَّرَ لَكُمُ الْفُلْكَ لِتَجْرِيَ فِي الْبَحْرِ بِأَمْرِهِ وَسَخَّرَ لَكُمُ الأَنْهَارَ ﴾ .',
          en: 'and sees the truth of His Most High saying: "And He has subjected for you the ships that they may sail through the sea by His command, and He has subjected for you the rivers." (Qur\'an 14:32, Surat Ibrahim) -- kept as a single 14-token unit spanning the introductory clause and the Qur\'anic quotation, above the 3-9 token buildable range, so it is not offered in the Build stage; see the header comment.',
          tokens: [
            { surface: 'وَرَأَىٰ', lemma: 'رأى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and sees' },
            { surface: 'تَصْدِيْقَ', lemma: 'تصديق', pos: 'noun', features: 'acc.constr', root: 'ص د ق', gloss: 'the confirmation (of)' },
            { surface: 'قَوْلِهِ', lemma: 'قول', pos: 'noun', features: 'gen+3ms', gloss: 'His saying' },
            { surface: 'تَعَالَىٰ', lemma: 'تعالى', pos: 'adj', gloss: 'the Most High' },
            { surface: 'وَسَخَّرَ', lemma: 'سخر', pos: 'verb', features: 'perf.3ms', gloss: 'He has subjected' },
            { surface: 'لَكُمُ', lemma: 'ل', pos: 'prep', features: '2mp', gloss: 'for you' },
            { surface: 'الْفُلْكَ', lemma: 'فلك', pos: 'noun', features: 'def.acc', gloss: 'the ships, the ark' },
            { surface: 'لِتَجْرِيَ', lemma: 'جرى', pos: 'verb', features: 'prep+subj.3fs', gloss: 'that it may sail' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'through' },
            { surface: 'الْبَحْرِ', lemma: 'بحر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
            { surface: 'بِأَمْرِهِ', lemma: 'أمر', pos: 'noun', features: 'prep+gen+3ms', gloss: 'by His command' },
            { surface: 'وَسَخَّرَ', lemma: 'سخر', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and He has subjected' },
            { surface: 'لَكُمُ', lemma: 'ل', pos: 'prep', features: '2mp', gloss: 'for you' },
            { surface: 'الأَنْهَارَ', lemma: 'نهر', pos: 'noun', features: 'def.acc.pl', gloss: 'the rivers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَتَذَكَّرُ الإِنْسَانُ حِيْنَ يَرَى السُّفُنَ تَجْرِيْ فِي الْبَحْرِ؟',
          options: ['قَوْلَ اللهِ تَعَالَىٰ: ﴿ وَسَخَّرَ لَكُمُ الْفُلْكَ... ﴾', 'قِصَّةَ سَيِّدِنَا نُوْحٍ فَقَطْ', 'لاَ شَيْءَ خَاصّاً'],
          answer: 0,
          qEn: 'What does a person recall when he sees the ships running upon the sea?',
          optionsEn: ['The saying of Allah Most High: "And He has subjected for you the ships..."', 'Only the story of Prophet Noah', 'Nothing in particular'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَإِذَا دَارَتِ الْعَجَلَةُ',
        post: 'الْمَجَادِيْفُ تَعْمَلُ وَتَمْخُرُ الْمَاءَ.',
        en: 'When the wheel turned, the oars began to work and cut through the water.',
        options: ['بَدَأَتِ', 'بَدَأَ', 'بَدَأْتُ', 'بَدَأْنَا'],
        answer: 0,
        rationales: [
          '3rd feminine singular past (الْمَجَادِيْفُ, a non-human plural, takes feminine-singular verb agreement).',
          '3rd masculine singular, wrong agreement.',
          '1st person singular, wrong person.',
          '1st person plural, wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَالْبَاخِرَةُ كَالْقَاطِرَةِ',
        post: 'بِقُوَّةِ الْبُخَارِ.',
        en: 'The steamship, like the locomotive, moves by the power of steam.',
        options: ['تَسِيْرُ', 'سَارَ', 'تَسِيْرِيْنَ', 'نَسِيْرُ'],
        answer: 0,
        rationales: [
          '3rd feminine singular present (الْبَاخِرَة is feminine).',
          '3rd masculine singular past, wrong gender and tense.',
          '2nd feminine singular, wrong person.',
          '1st person plural, wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُفَكِّرُوْنَ',
        pre: '',
        post: '',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُفَكِّرُ', 'تُفَكِّرُ', 'نُفَكِّرُ', 'يُفَكِّرُ'],
        answer: 0,
        rationales: ['1st person singular takes the prefix أُـ.', '', '', ''],
      },
      {
        type: 'shift',
        base: 'تَعْبُرُ الْبَحْرَ الأَطْلاَنْتِيْكِيَّ',
        pre: '',
        post: 'الْبَحْرَ الأَطْلاَنْتِيْكِيَّ',
        targetPerson: 'هُنَّ',
        targetEn: 'they (f.)',
        options: ['يَعْبُرْنَ', 'تَعْبُرْنَ', 'يَعْبُرُوْنَ', 'نَعْبُرُ'],
        answer: 0,
        rationales: [
          '3rd feminine plural takes the prefix يَـ and suffix ـْنَ.',
          'That would be 2nd feminine plural (you), wrong person.',
          '3rd masculine plural, wrong gender.',
          '1st person plural, wrong person.',
        ],
      },
    ],
  },
};

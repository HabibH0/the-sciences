// القراءة الراشدة, volume two, chapter 66 (printed heading "٦٦") --
// الْحَجَّاجُ وَالْفِتْيَةُ -- "Al-Hajjaj and the Youths".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 217-219. Standalone
// adab/history anecdote about al-Hajjaj ibn Yusuf al-Thaqafi (the harsh
// Umayyad governor of Iraq); not part of a multi-part story and not
// continued afterward (the printed "٭ ٭ ٭" divider closes it on p.219).
//
// Paragraph granularity: 5 blank-line-separated blocks. P1 (setup: the
// night patrol, the drunk youths) spans p.217; P2-P4 (three back-to-back
// exchanges: "who are you?" -> a boasting verse -> al-Hajjaj's guess) span
// p.217-218, one exchange per paragraph exactly as the book blocks them;
// P5 (the morning reveal and al-Hajjaj's closing remark to his companions)
// spans p.218-219.
//
// Sentence segmentation follows the project's standing convention of
// splitting at every ، . ؛ ! ؟ (never at a colon before reported speech).
// Extending that convention: each of the three boasted verses (two lines
// of classical Arabic poetry apiece) is printed with NO internal ، . ؛ ! ؟
// at all -- the hemistich breaks are typographic, not punctuation -- so
// per the "split only at existing punctuation" rule each verse-quotation
// is kept as a single sentence, fused forward from its introducing
// "فَقَالَ:" / "فَقَالَ أَحَدُهُمْ:" / "فَأَنْشَدَ قَائِلاً:" (the same
// colon-fusion rule already used for reported speech). This produces three
// long sentences (qr2-66-008, -011, -014; 21-23 tokens each) that fall
// well outside the 3-9 token Build-stage window by construction -- the
// same practical effect as the Qur'an-quotation workaround documented for
// own ch62 §Q43:13-14, applied here to keep unbroken classical verse out
// of the drilling window. Each is marked "(verse)" in its own `en`.
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// تَمَايَلَ (p.217 fn.1), أَمَارَة (p.217 fn.2), دَانَ (p.217 fn.3),
// صَاغِر (p.217 fn.4), خَاضَ (p.218 fn.1, of ranks), قَوَّمَ (p.218
// fn.2), حَائِك (p.218 fn.3).
//
// Homographs / reused lemmas (existing lemma key, no new newWords entry):
// "أَتَى" (تَأْتِيْهِ), "أَوَّل"/"ثَانِيْ"/"ثَالِث" (the ordinals) and
// "عَلَّمَ" (Form II of "عَلِمَ", causative "to teach" reusing the
// already-known root sense "to know") were all already used as
// established lemmas in own ch61/ch62 without a fresh newWords entry
// there, so this chapter follows the same precedent rather than
// reteaching them. "قَالَ" also covers the participle قَائِلاً. "لَوْلاَ"
// reuses the lemma introduced in own ch62.
//
// Genuine bare-skeleton collisions (disambiguated with a trailing "٢"):
// this chapter's "رِكَاب٢" (a stirrup, S014) shares an unvowelled rasm
// with own ch61's already-taught "رُكَّاب" (passengers) -- different word,
// same root ر ك ب. Likewise "أَشْرَف٢" (elative "noblest", S012) collides
// unvowelled with own ch62's already-taught verb "أَشْرَفَ" (Form IV, "to
// oversee/supervise"). Both are marked with a trailing "٢" on the lemma
// (token-level and in newWords/lemmas{}) so the app's exact-string
// lemma matching cannot conflate them with the earlier, differently
// meaning word -- the same kind of suffix-disambiguation already used
// corpus-wide for "قدر" (noun) vs "قدر-فعل" (verb).
export const CHAPTER = {
  id: 'ch66',
  title: { ar: 'الْحَجَّاجُ وَالْفِتْيَةُ', en: 'Al-Hajjaj and the Youths' },
  newWords: [ 'صاحب', 'سكران', 'عنق', 'تمايل', 'أمارة',
    'سكر', 'أحاط', 'خالف', 'دان',
    'رغم', 'صاغر', 'أنت', 'سوف',
    'عاد', 'فوج', 'ضوء', 'قيام', 'قعود',
    'أشرف٢', 'أنشد', 'سيف', 'قوم',
    'استقام', 'ركاب٢', 'انفك', 'كريهة',
    'أشجع', 'أحضر', 'كشف', 'حجام',
    'خضري', 'فصاحة'
  ],
  lemmas: {
    'صاحب': { gloss: 'companion; master, chief of' },
    'سكران': { gloss: 'drunk' },
    'عنق': { gloss: 'neck' },
    'تمايل': { gloss: 'to sway, stagger', book_note: 'تَمَايَلَ يَتَمَايَلُ تَمَايُلاً: الرجلُ في مِشْيَتِهِ: تَبَخْتَرَ.' },
    'أمارة': { gloss: 'sign, mark', book_note: 'أَمَارَة جمع أَمَارَات: عَلاَمَة.' },
    'سكر': { gloss: 'drunkenness, intoxication' },
    'أحاط': { gloss: 'to surround' },
    'خالف': { gloss: 'to oppose, go against, contravene' },
    'دان': { gloss: 'to submit, become subservient', book_note: 'دَانَ يَدِيْنُ دَيْناً وَدِيَانَةً: الرجلُ لفلانٍ: خضعَ وذَلَّ.' },
    'رغم': { gloss: 'compulsion; بِالرَّغْمِ = despite, in spite of' },
    'صاغر': { gloss: 'lowly, submissive, humbled', book_note: 'صَاغِرَة: رَاضِيَة بالذلِّ والهَوَانِ.' },
    'أنت': { gloss: 'you (m.s.)' },
    'سوف': { gloss: 'will (future particle)' },
    'عاد': { gloss: 'to return' },
    'فوج': { gloss: 'group, crowd, throng (pl. أَفْوَاج)' },
    'ضوء': { gloss: 'light' },
    'قيام': { gloss: 'standing' },
    'قعود': { gloss: 'sitting' },
    'أشرف٢': { gloss: 'noblest, most noble (elative; distinct homograph from own ch62’s verb أَشْرَفَ "to oversee")' },
    'أنشد': { gloss: 'to recite (poetry)' },
    'خاض': { gloss: 'to plunge into, wade into', book_note: 'خَاضَ يَخُوْضُ خَوْضاً: الرجلُ الصُّفُوفَ: دَخَلَهَا وَمَشَىٰ فِيْهَا.' },
    'سيف': { gloss: 'sword' },
    'قوم': { gloss: 'to straighten, set right', book_note: 'قَوَّمَ يُقَوِّمُ تَقْوِيماً: الرجلُ الصُّفُوفَ: سَوَّاهَا وَعَدَّلَهَا.' },
    'استقام': { gloss: 'to become straight, stand firm' },
    'ركاب٢': { gloss: 'stirrup (distinct homograph from own ch61’s رُكَّاب "passengers")' },
    'انفك': { gloss: 'to detach, come free (لاَ تَنْفَكُّ = never leaves)' },
    'كريهة': { gloss: 'dread, calamity (يَوْمُ الْكَرِيهَةِ = the day of battle)' },
    'أشجع': { gloss: 'bravest, most courageous' },
    'أحضر': { gloss: 'to bring, summon' },
    'كشف': { gloss: 'to uncover, reveal' },
    'حجام': { gloss: 'cupper (one who practices bloodletting)' },
    'خضري': { gloss: 'greengrocer, vegetable seller' },
    'حائك': { gloss: 'weaver', book_note: 'حَائِك: جمع حَائكِين: نَاسِجٌ (من حرفته الحِيَاكَة).' },
    'فصاحة': { gloss: 'eloquence' }
  },
  paragraphs: [
    {
      en: 'Al-Hajjaj ordered the chief of his guard to patrol at night: whoever he saw drunk after the night prayer, he was to strike off his neck. One night he made his rounds and found three young men swaying, showing signs of drunkenness. The guards surrounded them, and the chief of the guard said to them:',
      sentences: [
        {
          id: 'qr2-66-001',
          ar: 'أَمَرَ الْحَجَّاجُ صَاحِبَ حَرَسِهِ أَنْ يَطُوْفَ لَيْلاً،',
          en: 'Al-Hajjaj ordered the chief of his guard to patrol at night,',
          tokens: [
            { surface: 'أَمَرَ', lemma: 'أمر', pos: 'verb', features: 'perf.3ms', root: 'أ م ر', gloss: 'ordered, commanded' },
            { surface: 'الْحَجَّاجُ', lemma: 'حجاج', pos: 'proper', features: 'def.nom', gloss: 'al-Hajjaj (ibn Yusuf al-Thaqafi, Umayyad governor of Iraq)' },
            { surface: 'صَاحِبَ', lemma: 'صاحب', pos: 'noun', features: 'acc.constr', root: 'ص ح ب', gloss: 'the chief of' },
            { surface: 'حَرَسِهِ', lemma: 'حرس', pos: 'noun', features: 'gen+3ms', root: 'ح ر س', gloss: 'his guard' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'to' },
            { surface: 'يَطُوْفَ', lemma: 'طاف', pos: 'verb', features: 'impf.3ms', root: 'ط و ف', gloss: 'to patrol, go about' },
            { surface: 'لَيْلاً', lemma: 'ليل', pos: 'noun', features: 'indef.acc', root: 'ل ي ل', gloss: 'at night' },
          ],
        },
        {
          id: 'qr2-66-002',
          ar: 'فَمَنْ رَآهُ بَعْدَ الْعِشَاءِ سَكْرَانَ ضَرَبَ عُنُقَهُ،',
          en: 'whoever he saw drunk after the night prayer, he was to strike off his neck,',
          tokens: [
            { surface: 'فَمَنْ', lemma: 'من', pos: 'rel', features: 'conj', gloss: 'so whoever' },
            { surface: 'رَآهُ', lemma: 'رأى', pos: 'verb', features: 'perf.3ms+3ms', root: 'ر أ ي', gloss: 'saw him' },
            { surface: 'بَعْدَ', lemma: 'بعد', pos: 'adv', gloss: 'after' },
            { surface: 'الْعِشَاءِ', lemma: 'عشاء', pos: 'noun', features: 'def.gen', gloss: 'the night prayer' },
            { surface: 'سَكْرَانَ', lemma: 'سكران', pos: 'adj', features: 'indef.acc', root: 'س ك ر', gloss: 'drunk' },
            { surface: 'ضَرَبَ', lemma: 'ضرب', pos: 'verb', features: 'perf.3ms', root: 'ض ر ب', gloss: 'struck' },
            { surface: 'عُنُقَهُ', lemma: 'عنق', pos: 'noun', features: 'acc+3ms', root: 'ع ن ق', gloss: 'his neck' },
          ],
        },
        {
          id: 'qr2-66-003',
          ar: 'فَطَافَ لَيْلَةً مِنَ اللَّيَالِيْ فَوَجَدَ ثَلاَثَةَ فِتْيَانٍ يَتَمَايَلُوْنَ،',
          en: 'so one night he made his rounds and found three young men swaying,',
          tokens: [
            { surface: 'فَطَافَ', lemma: 'طاف', pos: 'verb', features: 'conj+perf.3ms', root: 'ط و ف', gloss: 'so he patrolled' },
            { surface: 'لَيْلَةً', lemma: 'ليلة', pos: 'noun', features: 'indef.acc', root: 'ل ي ل', gloss: 'one night' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'اللَّيَالِيْ', lemma: 'ليلة', pos: 'noun', features: 'def.gen.pl', gloss: 'the nights' },
            { surface: 'فَوَجَدَ', lemma: 'وجد', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and he found' },
            { surface: 'ثَلاَثَةَ', lemma: 'ثلاثة', pos: 'num', features: 'acc.constr', gloss: 'three' },
            { surface: 'فِتْيَانٍ', lemma: 'فتى', pos: 'noun', features: 'indef.gen.pl', root: 'ف ت ي', gloss: 'young men' },
            { surface: 'يَتَمَايَلُوْنَ', lemma: 'تمايل', pos: 'verb', features: 'impf.3mp', root: 'م ي ل', gloss: 'swaying, staggering' },
          ],
        },
        {
          id: 'qr2-66-004',
          ar: 'وَعَلَيْهِمْ أَمَارَاتُ السُّكْرِ،',
          en: 'showing signs of drunkenness,',
          tokens: [
            { surface: 'وَعَلَيْهِمْ', lemma: 'على', pos: 'prep', features: 'conj+3mp', gloss: 'and on them (were)' },
            { surface: 'أَمَارَاتُ', lemma: 'أمارة', pos: 'noun', features: 'nom.constr.pl', root: 'أ م ر', gloss: 'the signs of' },
            { surface: 'السُّكْرِ', lemma: 'سكر', pos: 'noun', features: 'def.gen', root: 'س ك ر', gloss: 'the drunkenness' },
          ],
        },
        {
          id: 'qr2-66-005',
          ar: 'فَأَحَاطَتْ بِهِمُ الْغِلْمَانُ وَقَالَ لَهُمْ صَاحِبُ الْحَرَسِ:',
          en: 'the guards surrounded them, and the chief of the guard said to them:',
          tokens: [
            { surface: 'فَأَحَاطَتْ', lemma: 'أحاط', pos: 'verb', features: 'conj+perf.3fs', root: 'ح و ط', gloss: 'and surrounded' },
            { surface: 'بِهِمُ', lemma: 'ب', pos: 'prep', features: '3mp', gloss: 'them' },
            { surface: 'الْغِلْمَانُ', lemma: 'غلام', pos: 'noun', features: 'def.nom.pl', gloss: 'the guards, pages' },
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'لَهُمْ', lemma: 'ل', pos: 'prep', features: '3mp', gloss: 'to them' },
            { surface: 'صَاحِبُ', lemma: 'صاحب', pos: 'noun', features: 'nom.constr', root: 'ص ح ب', gloss: 'the chief of' },
            { surface: 'الْحَرَسِ', lemma: 'حرس', pos: 'noun', features: 'def.gen', root: 'ح ر س', gloss: 'the guard' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ صَاحِبُ الْحَرَسِ يَطُوْفُ لَيْلاً؟',
          options: ['لِيَضْرِبَ عُنُقَ كُلِّ سَكْرَانَ يَرَاهُ', 'لِيَشْتَرِيَ طَعَاماً', 'لِيَزُوْرَ صَدِيْقاً'],
          answer: 0,
          qEn: 'Why was the chief of the guard patrolling at night?',
          optionsEn: ['To strike off the neck of every drunk he saw', 'To buy food', 'To visit a friend'],
        },
      ],
    },
    {
      en: '"Who are you, that you defied the order of the Commander of the Believers and went out at an hour like this?" One of them said (verse): "I am the son of him to whom necks have submitted, from among its Makhzum and its Hashim; it comes to him despite itself, humbled — he takes from its wealth and from its blood." The chief held back from him and said: "Perhaps he is a relative of the Commander of the Believers."',
      sentences: [
        {
          id: 'qr2-66-006',
          ar: 'مَنْ أَنْتُمْ حَتَّىٰ خَالَفْتُمْ أَمْرَ أَمِيْرِ الْمُؤْمِنِيْنَ،',
          en: 'Who are you, that you defied the order of the Commander of the Believers,',
          tokens: [
            { surface: 'مَنْ', lemma: 'من', pos: 'part', gloss: 'who' },
            { surface: 'أَنْتُمْ', lemma: 'أنتم', pos: 'part', gloss: 'you (pl.)' },
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'that, so as to' },
            { surface: 'خَالَفْتُمْ', lemma: 'خالف', pos: 'verb', features: 'perf.2mp', root: 'خ ل ف', gloss: 'you defied, opposed' },
            { surface: 'أَمْرَ', lemma: 'أمر', pos: 'noun', features: 'acc.constr', root: 'أ م ر', gloss: 'the order of' },
            { surface: 'أَمِيْرِ', lemma: 'أمير', pos: 'noun', features: 'gen.constr', root: 'أ م ر', gloss: 'the Commander of' },
            { surface: 'الْمُؤْمِنِيْنَ', lemma: 'مؤمن', pos: 'noun', features: 'def.gen.pl', root: 'أ م ن', gloss: 'the Believers' },
          ],
        },
        {
          id: 'qr2-66-007',
          ar: 'وَخَرَجْتُمْ فِيْ مِثْلِ هٰذَا الْوَقْتِ؟',
          en: 'and went out at an hour like this?',
          tokens: [
            { surface: 'وَخَرَجْتُمْ', lemma: 'خرج', pos: 'verb', features: 'conj+perf.2mp', gloss: 'and you went out' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'at' },
            { surface: 'مِثْلِ', lemma: 'مثل', pos: 'noun', features: 'gen.constr', gloss: 'the like of' },
            { surface: 'هٰذَا', lemma: 'هذا', pos: 'dem', gloss: 'this' },
            { surface: 'الْوَقْتِ', lemma: 'وقت', pos: 'noun', features: 'def.gen', gloss: 'the time' },
          ],
        },
        {
          id: 'qr2-66-008',
          ar: 'فَقَالَ أَحَدُهُمْ: أَنَا ابْنُ مَنْ دَانَتِ الرِّقَابُ لَهُ مِنْ بَيْنِ مَخْزُوْمِهَا وَهَاشِمِهَا تَأْتِيْهِ بِالرَّغْمِ وَهِيَ صَاغِرَةٌ يَأْخُذُ مِنْ مَالِهَا وَمِنْ دَمِهَا.',
          en: '(verse) One of them said: "I am the son of him to whom necks have submitted, from among its Makhzum and its Hashim; it comes to him despite itself, humbled — he takes from its wealth and from its blood."',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'then said' },
            { surface: 'أَحَدُهُمْ', lemma: 'أحد', pos: 'noun', features: 'nom+3mp', gloss: 'one of them' },
            { surface: 'أَنَا', lemma: 'أنا', pos: 'part', gloss: 'I (am)' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'مَنْ', lemma: 'من', pos: 'rel', gloss: 'him who' },
            { surface: 'دَانَتِ', lemma: 'دان', pos: 'verb', features: 'perf.3fs', root: 'د ي ن', gloss: 'submitted' },
            { surface: 'الرِّقَابُ', lemma: 'رقبة', pos: 'noun', features: 'def.nom.pl', root: 'ر ق ب', gloss: 'the necks' },
            { surface: 'لَهُ', lemma: 'ل', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'بَيْنِ', lemma: 'بين', pos: 'prep', gloss: 'among' },
            { surface: 'مَخْزُوْمِهَا', lemma: 'مخزوم', pos: 'proper', features: 'gen+3fs', gloss: 'its Makhzum (a clan of Quraysh)' },
            { surface: 'وَهَاشِمِهَا', lemma: 'هاشم', pos: 'proper', features: 'conj+gen+3fs', gloss: 'and its Hashim (the Prophet’s clan)' },
            { surface: 'تَأْتِيْهِ', lemma: 'أتى', pos: 'verb', features: 'impf.3fs+3ms', gloss: 'it comes to him' },
            { surface: 'بِالرَّغْمِ', lemma: 'رغم', pos: 'noun', features: 'def.gen', root: 'ر غ م', gloss: 'despite itself, unwillingly' },
            { surface: 'وَهِيَ', lemma: 'هي', pos: 'part', features: 'conj', gloss: 'while it (is)' },
            { surface: 'صَاغِرَةٌ', lemma: 'صاغر', pos: 'adj', features: 'indef.nom', root: 'ص غ ر', gloss: 'submissive, humbled' },
            { surface: 'يَأْخُذُ', lemma: 'أخذ', pos: 'verb', features: 'impf.3ms', gloss: 'he takes' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'مَالِهَا', lemma: 'مال', pos: 'noun', features: 'gen+3fs', gloss: 'its wealth' },
            { surface: 'وَمِنْ', lemma: 'من', pos: 'prep', features: 'conj', gloss: 'and from' },
            { surface: 'دَمِهَا', lemma: 'دم', pos: 'noun', features: 'gen+3fs', gloss: 'its blood' },
          ],
        },
        {
          id: 'qr2-66-009',
          ar: 'فَأَمْسَكَ عَنْهُ وَقَالَ: لَعَلَّهُ مِنْ أَقَارِبِ أَمِيْرِ الْمُؤْمِنِيْنَ.',
          en: 'The chief held back from him and said: "Perhaps he is a relative of the Commander of the Believers."',
          tokens: [
            { surface: 'فَأَمْسَكَ', lemma: 'أمسك', pos: 'verb', features: 'conj+perf.3ms', root: 'م س ك', gloss: 'so he held back' },
            { surface: 'عَنْهُ', lemma: 'عن', pos: 'prep', features: '3ms', gloss: 'from him' },
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'لَعَلَّهُ', lemma: 'لعل', pos: 'part', features: '3ms', gloss: 'perhaps he (is)' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'one of' },
            { surface: 'أَقَارِبِ', lemma: 'قريب', pos: 'noun', features: 'gen.pl', root: 'ق ر ب', gloss: 'the relatives of' },
            { surface: 'أَمِيْرِ', lemma: 'أمير', pos: 'noun', features: 'gen.constr', root: 'أ م ر', gloss: 'the Commander of' },
            { surface: 'الْمُؤْمِنِيْنَ', lemma: 'مؤمن', pos: 'noun', features: 'def.gen.pl', root: 'أ م ن', gloss: 'the Believers' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا ظَنَّ صَاحِبُ الْحَرَسِ فِي الْفَتَى الأَوَّلِ؟',
          options: ['أَنَّهُ مِنْ أَقَارِبِ أَمِيْرِ الْمُؤْمِنِيْنَ', 'أَنَّهُ لِصٌّ', 'أَنَّهُ جَارُهُ'],
          answer: 0,
          qEn: 'What did the chief of the guard think about the first youth?',
          optionsEn: ['That he was a relative of the Commander of the Believers', 'That he was a thief', 'That he was his neighbor'],
        },
      ],
    },
    {
      en: 'Then he said to another: "And who are you?" He said (verse): "I am the son of one whose worth time never lowers, and if it falls one day, it will surely return; you see people in throngs toward the light of his fire — some standing around it, some sitting." The chief held back from him and said: "Perhaps he is the son of the noblest of the Arabs."',
      sentences: [
        {
          id: 'qr2-66-010',
          ar: 'ثُمَّ قَالَ لِلآخَرِ: وَأَنْتَ مَنْ تَكُوْنُ؟',
          en: 'Then he said to another: "And who are you?"',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'conj', gloss: 'then' },
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', gloss: 'he said' },
            { surface: 'لِلآخَرِ', lemma: 'آخر', pos: 'adj', features: 'def.gen', gloss: 'to the other' },
            { surface: 'وَأَنْتَ', lemma: 'أنت', pos: 'part', features: 'conj', gloss: 'and you' },
            { surface: 'مَنْ', lemma: 'من', pos: 'part', gloss: 'who' },
            { surface: 'تَكُوْنُ', lemma: 'كان', pos: 'verb', features: 'impf.2ms', gloss: 'are you' },
          ],
        },
        {
          id: 'qr2-66-011',
          ar: 'فَقَالَ: أَنَا ابْنُ مَنْ لاَ تَنْزِلُ الدَّهْرَ قَدْرُهُ وَإِنْ نَزَلَتْ يَوْماً فَسَوْفَ تَعُوْدُ تَرَىٰ النَّاسَ أَفْوَاجاً إِلَىٰ ضَوْءِ نَارِهِ فَمِنْهُمْ قِيَامٌ حَوْلَهَا وَقُعُوْدُ.',
          en: '(verse) He said: "I am the son of one whose worth never declines through time, and if it falls one day, it will surely return; you see people in throngs toward the light of his fire — some standing around it, some sitting."',
          tokens: [
            { surface: 'فَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'then he said' },
            { surface: 'أَنَا', lemma: 'أنا', pos: 'part', gloss: 'I (am)' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'مَنْ', lemma: 'من', pos: 'rel', gloss: 'him whose' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَنْزِلُ', lemma: 'نزل', pos: 'verb', features: 'impf.3fs', gloss: 'declines, is lowered' },
            { surface: 'الدَّهْرَ', lemma: 'دهر', pos: 'noun', features: 'acc', root: 'د ه ر', gloss: 'through time' },
            { surface: 'قَدْرُهُ', lemma: 'قدر', pos: 'noun', features: 'nom+3ms', root: 'ق د ر', gloss: 'his worth' },
            { surface: 'وَإِنْ', lemma: 'إن', pos: 'part', features: 'conj', gloss: 'and if' },
            { surface: 'نَزَلَتْ', lemma: 'نزل', pos: 'verb', features: 'perf.3fs', gloss: 'it fell' },
            { surface: 'يَوْماً', lemma: 'يوم', pos: 'noun', features: 'indef.acc', gloss: 'one day' },
            { surface: 'فَسَوْفَ', lemma: 'سوف', pos: 'part', features: 'conj', gloss: 'then it will surely' },
            { surface: 'تَعُوْدُ', lemma: 'عاد', pos: 'verb', features: 'impf.3fs', root: 'ع و د', gloss: 'return' },
            { surface: 'تَرَىٰ', lemma: 'رأى', pos: 'verb', features: 'impf.2ms', gloss: 'you see' },
            { surface: 'النَّاسَ', lemma: 'ناس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'أَفْوَاجاً', lemma: 'فوج', pos: 'noun', features: 'indef.acc.pl', root: 'ف و ج', gloss: 'in throngs' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'toward' },
            { surface: 'ضَوْءِ', lemma: 'ضوء', pos: 'noun', features: 'gen.constr', root: 'ض و ء', gloss: 'the light of' },
            { surface: 'نَارِهِ', lemma: 'نار', pos: 'noun', features: 'gen+3ms', root: 'ن و ر', gloss: 'his fire' },
            { surface: 'فَمِنْهُمْ', lemma: 'من', pos: 'prep', features: 'conj+3mp', gloss: 'and among them (are)' },
            { surface: 'قِيَامٌ', lemma: 'قيام', pos: 'noun', features: 'indef.nom', root: 'ق و م', gloss: 'some standing' },
            { surface: 'حَوْلَهَا', lemma: 'حول', pos: 'adv', features: '3fs', gloss: 'around it' },
            { surface: 'وَقُعُوْدُ', lemma: 'قعود', pos: 'noun', features: 'conj+indef.nom', root: 'ق ع د', gloss: 'and some sitting' },
          ],
        },
        {
          id: 'qr2-66-012',
          ar: 'فَأَمْسَكَ عَنْهُ وَقَالَ: لَعَلَّهُ ابْنُ أَشْرَفِ الْعَرَبِ.',
          en: 'The chief held back from him and said: "Perhaps he is the son of the noblest of the Arabs."',
          tokens: [
            { surface: 'فَأَمْسَكَ', lemma: 'أمسك', pos: 'verb', features: 'conj+perf.3ms', root: 'م س ك', gloss: 'so he held back' },
            { surface: 'عَنْهُ', lemma: 'عن', pos: 'prep', features: '3ms', gloss: 'from him' },
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'لَعَلَّهُ', lemma: 'لعل', pos: 'part', features: '3ms', gloss: 'perhaps he (is)' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'أَشْرَفِ', lemma: 'أشرف٢', pos: 'adj', features: 'gen.constr', gloss: 'the noblest of' },
            { surface: 'الْعَرَبِ', lemma: 'عرب', pos: 'noun', features: 'def.gen', gloss: 'the Arabs' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا ظَنَّ صَاحِبُ الْحَرَسِ فِي الْفَتَى الثَّانِيْ؟',
          options: ['أَنَّهُ ابْنُ أَشْرَفِ الْعَرَبِ', 'أَنَّهُ فَقِيْرٌ', 'أَنَّهُ غَرِيْبٌ'],
          answer: 0,
          qEn: 'What did the chief of the guard think about the second youth?',
          optionsEn: ['That he was the son of the noblest of the Arabs', 'That he was poor', 'That he was a stranger'],
        },
      ],
    },
    {
      en: 'Then he said to another: "And who are you?" He recited, saying (verse): "I am the son of one who plunged into the ranks with his resolve and straightened them with the sword until they stood firm; his two stirrups — his feet never leave them — when the horses turn to flee on the day of dread." The chief held back from him and said: "Perhaps he is the son of the bravest of the Arabs," and kept them safe.',
      sentences: [
        {
          id: 'qr2-66-013',
          ar: 'ثُمَّ قَالَ لِلآخَرِ: وَأَنْتَ مَنْ تَكُوْنُ؟',
          en: 'Then he said to another: "And who are you?"',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'conj', gloss: 'then' },
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', gloss: 'he said' },
            { surface: 'لِلآخَرِ', lemma: 'آخر', pos: 'adj', features: 'def.gen', gloss: 'to the other' },
            { surface: 'وَأَنْتَ', lemma: 'أنت', pos: 'part', features: 'conj', gloss: 'and you' },
            { surface: 'مَنْ', lemma: 'من', pos: 'part', gloss: 'who' },
            { surface: 'تَكُوْنُ', lemma: 'كان', pos: 'verb', features: 'impf.2ms', gloss: 'are you' },
          ],
        },
        {
          id: 'qr2-66-014',
          ar: 'فَأَنْشَدَ قَائِلاً: أَنَا ابْنُ مَنْ خَاضَ الصُّفُوْفَ بِعَزْمِهِ وَقَوَّمَهَا بِالسَّيْفِ حَتَّىٰ اسْتَقَامَتِ رِكَابَاهُ لاَ تَنْفَكُّ رِجْلاَهُ مِنْهُمَا إِذَا الْخَيْلُ فِيْ يَوْمِ الْكَرِيْهَةِ وَلَّتِ.',
          en: '(verse) He recited, saying: "I am the son of one who plunged into the ranks with his resolve and straightened them with the sword until they stood firm; his two stirrups — his feet never leave them — when the horses turn to flee on the day of dread."',
          tokens: [
            { surface: 'فَأَنْشَدَ', lemma: 'أنشد', pos: 'verb', features: 'conj+perf.3ms', gloss: 'then he recited' },
            { surface: 'قَائِلاً', lemma: 'قال', pos: 'adj', features: 'indef.acc', gloss: 'saying' },
            { surface: 'أَنَا', lemma: 'أنا', pos: 'part', gloss: 'I (am)' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'مَنْ', lemma: 'من', pos: 'rel', gloss: 'him who' },
            { surface: 'خَاضَ', lemma: 'خاض', pos: 'verb', features: 'perf.3ms', root: 'خ و ض', gloss: 'plunged into' },
            { surface: 'الصُّفُوْفَ', lemma: 'صف', pos: 'noun', features: 'def.acc.pl', root: 'ص ف ف', gloss: 'the ranks' },
            { surface: 'بِعَزْمِهِ', lemma: 'عزم', pos: 'noun', features: 'gen+3ms', root: 'ع ز م', gloss: 'with his resolve' },
            { surface: 'وَقَوَّمَهَا', lemma: 'قوم', pos: 'verb', features: 'conj+perf.3ms+3fs', root: 'ق و م', gloss: 'and straightened them' },
            { surface: 'بِالسَّيْفِ', lemma: 'سيف', pos: 'noun', features: 'def.gen', root: 'س ي ف', gloss: 'with the sword' },
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'اسْتَقَامَتِ', lemma: 'استقام', pos: 'verb', features: 'perf.3fs', root: 'ق و م', gloss: 'stood firm, became straight' },
            { surface: 'رِكَابَاهُ', lemma: 'ركاب٢', pos: 'noun', features: 'nom.du+3ms', root: 'ر ك ب', gloss: 'his two stirrups' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'never' },
            { surface: 'تَنْفَكُّ', lemma: 'انفك', pos: 'verb', features: 'impf.3fs', root: 'ف ك ك', gloss: 'detaches, comes free' },
            { surface: 'رِجْلاَهُ', lemma: 'رجل', pos: 'noun', features: 'nom.du+3ms', gloss: 'his two feet' },
            { surface: 'مِنْهُمَا', lemma: 'من', pos: 'prep', features: '3md', gloss: 'from them both' },
            { surface: 'إِذَا', lemma: 'إذا', pos: 'part', gloss: 'when' },
            { surface: 'الْخَيْلُ', lemma: 'خيل', pos: 'noun', features: 'def.nom', root: 'خ ي ل', gloss: 'the horses' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'يَوْمِ', lemma: 'يوم', pos: 'noun', features: 'gen.constr', gloss: 'the day of' },
            { surface: 'الْكَرِيْهَةِ', lemma: 'كريهة', pos: 'noun', features: 'def.gen', root: 'ك ر ه', gloss: 'dread, calamity (battle)' },
            { surface: 'وَلَّتِ', lemma: 'ولى', pos: 'verb', features: 'perf.3fs', root: 'و ل ي', gloss: 'turned away, fled' },
          ],
        },
        {
          id: 'qr2-66-015',
          ar: 'فَأَمْسَكَ عَنْهُ وَقَالَ: لَعَلَّهُ ابْنُ أَشْجَعِ الْعَرَبِ،',
          en: 'The chief held back from him and said: "Perhaps he is the son of the bravest of the Arabs,"',
          tokens: [
            { surface: 'فَأَمْسَكَ', lemma: 'أمسك', pos: 'verb', features: 'conj+perf.3ms', root: 'م س ك', gloss: 'so he held back' },
            { surface: 'عَنْهُ', lemma: 'عن', pos: 'prep', features: '3ms', gloss: 'from him' },
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'لَعَلَّهُ', lemma: 'لعل', pos: 'part', features: '3ms', gloss: 'perhaps he (is)' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'أَشْجَعِ', lemma: 'أشجع', pos: 'adj', features: 'gen.constr', gloss: 'the bravest of' },
            { surface: 'الْعَرَبِ', lemma: 'عرب', pos: 'noun', features: 'def.gen', gloss: 'the Arabs' },
          ],
        },
        {
          id: 'qr2-66-016',
          ar: 'وَاحْتَفَظَ بِهِمْ.',
          en: 'and kept them safe.',
          tokens: [
            { surface: 'وَاحْتَفَظَ', lemma: 'احتفظ', pos: 'verb', features: 'conj+perf.3ms', root: 'ح ف ظ', gloss: 'and he kept, protected' },
            { surface: 'بِهِمْ', lemma: 'ب', pos: 'prep', features: '3mp', gloss: 'them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا ظَنَّ صَاحِبُ الْحَرَسِ فِي الْفَتَى الثَّالِثِ؟',
          options: ['أَنَّهُ ابْنُ أَشْجَعِ الْعَرَبِ', 'أَنَّهُ جُنْدِيٌّ', 'أَنَّهُ حَاكِمٌ'],
          answer: 0,
          qEn: 'What did the chief of the guard think about the third youth?',
          optionsEn: ['That he was the son of the bravest of the Arabs', 'That he was a soldier', 'That he was a ruler'],
        },
      ],
    },
    {
      en: 'When morning came, he referred their case to the governor, who summoned them and uncovered their situation: the first turned out to be the son of a cupper, the second the son of a greengrocer, and the third the son of a weaver. He marveled at their eloquence, and said to his companions: "Teach your children refined speech, for by God, had it not been for their eloquence, I would have struck off their necks."',
      sentences: [
        {
          id: 'qr2-66-017',
          ar: 'فَلَمَّا كَانَ الصَّبَاحُ رَفَعَ أَمْرَهُمْ إِلَى الأَمِيْرِ،',
          en: 'When morning came, he referred their case to the governor,',
          tokens: [
            { surface: 'فَلَمَّا', lemma: 'لما', pos: 'conj', gloss: 'then when' },
            { surface: 'كَانَ', lemma: 'كان', pos: 'verb', features: 'perf.3ms', gloss: 'came, was' },
            { surface: 'الصَّبَاحُ', lemma: 'صباح', pos: 'noun', features: 'def.nom', gloss: 'the morning' },
            { surface: 'رَفَعَ', lemma: 'رفع', pos: 'verb', features: 'perf.3ms', gloss: 'he referred, raised' },
            { surface: 'أَمْرَهُمْ', lemma: 'أمر', pos: 'noun', features: 'acc+3mp', root: 'أ م ر', gloss: 'their case' },
            { surface: 'إِلَى', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الأَمِيْرِ', lemma: 'أمير', pos: 'noun', features: 'def.gen', root: 'أ م ر', gloss: 'the governor' },
          ],
        },
        {
          id: 'qr2-66-018',
          ar: 'فَأَحْضَرَهُمْ وَكَشَفَ عَنْ حَالِهِمْ،',
          en: 'who summoned them and uncovered their situation:',
          tokens: [
            { surface: 'فَأَحْضَرَهُمْ', lemma: 'أحضر', pos: 'verb', features: 'conj+perf.3ms+3mp', root: 'ح ض ر', gloss: 'so he summoned them' },
            { surface: 'وَكَشَفَ', lemma: 'كشف', pos: 'verb', features: 'conj+perf.3ms', root: 'ك ش ف', gloss: 'and uncovered' },
            { surface: 'عَنْ', lemma: 'عن', pos: 'prep', gloss: 'about' },
            { surface: 'حَالِهِمْ', lemma: 'حال', pos: 'noun', features: 'gen+3mp', root: 'ح و ل', gloss: 'their situation' },
          ],
        },
        {
          id: 'qr2-66-019',
          ar: 'فَإِذَا الأَوَّلُ ابْنُ حَجَّامٍ،',
          en: 'the first turned out to be the son of a cupper,',
          tokens: [
            { surface: 'فَإِذَا', lemma: 'إذا', pos: 'part', features: 'conj', gloss: 'then behold' },
            { surface: 'الأَوَّلُ', lemma: 'أول', pos: 'noun', features: 'def.nom', gloss: 'the first' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'حَجَّامٍ', lemma: 'حجام', pos: 'noun', features: 'indef.gen', root: 'ح ج م', gloss: 'a cupper' },
          ],
        },
        {
          id: 'qr2-66-020',
          ar: 'وَالثَّانِيْ ابْنُ خُضَرِيٍّ،',
          en: 'the second the son of a greengrocer,',
          tokens: [
            { surface: 'وَالثَّانِيْ', lemma: 'ثاني', pos: 'noun', features: 'conj+def.nom', gloss: 'and the second' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'خُضَرِيٍّ', lemma: 'خضري', pos: 'noun', features: 'indef.gen', root: 'خ ض ر', gloss: 'a greengrocer' },
          ],
        },
        {
          id: 'qr2-66-021',
          ar: 'وَالثَّالِثُ ابْنُ حَائِكٍ،',
          en: 'and the third the son of a weaver,',
          tokens: [
            { surface: 'وَالثَّالِثُ', lemma: 'ثالث', pos: 'noun', features: 'conj+def.nom', gloss: 'and the third' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'حَائِكٍ', lemma: 'حائك', pos: 'noun', features: 'indef.gen', root: 'ح و ك', gloss: 'a weaver' },
          ],
        },
        {
          id: 'qr2-66-022',
          ar: 'فَتَعَجَّبَ مِنْ فَصَاحَتِهِمْ،',
          en: 'He marveled at their eloquence,',
          tokens: [
            { surface: 'فَتَعَجَّبَ', lemma: 'تعجب', pos: 'verb', features: 'conj+perf.3ms', root: 'ع ج ب', gloss: 'then he marveled' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'at' },
            { surface: 'فَصَاحَتِهِمْ', lemma: 'فصاحة', pos: 'noun', features: 'gen+3mp', root: 'ف ص ح', gloss: 'their eloquence' },
          ],
        },
        {
          id: 'qr2-66-023',
          ar: 'وَقَالَ لِجُلَسَائِهِ: عَلِّمُوْا أَوْلاَدَكُمُ الأَدَبَ،',
          en: 'and said to his companions: "Teach your children refined speech,',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'لِجُلَسَائِهِ', lemma: 'جليس', pos: 'noun', features: 'gen.pl+3ms', root: 'ج ل س', gloss: 'to his companions' },
            { surface: 'عَلِّمُوْا', lemma: 'علم', pos: 'verb', features: 'imp.2mp', gloss: 'teach!' },
            { surface: 'أَوْلاَدَكُمُ', lemma: 'ولد', pos: 'noun', features: 'acc.pl+2mp', gloss: 'your children' },
            { surface: 'الأَدَبَ', lemma: 'أدب', pos: 'noun', features: 'def.acc', gloss: 'refined speech, manners' },
          ],
        },
        {
          id: 'qr2-66-024',
          ar: 'فَوَاللهِ لَوْلاَ فَصَاحَتُهُمْ لَضَرَبْتُ أَعْنَاقَهُمْ.',
          en: 'for by God, had it not been for their eloquence, I would have struck off their necks."',
          tokens: [
            { surface: 'فَوَاللهِ', lemma: 'الله', pos: 'proper', features: 'conj+gen', gloss: 'for, by God' },
            { surface: 'لَوْلاَ', lemma: 'لولا', pos: 'part', gloss: 'were it not for' },
            { surface: 'فَصَاحَتُهُمْ', lemma: 'فصاحة', pos: 'noun', features: 'nom+3mp', root: 'ف ص ح', gloss: 'their eloquence' },
            { surface: 'لَضَرَبْتُ', lemma: 'ضرب', pos: 'verb', features: 'perf.1s', root: 'ض ر ب', gloss: 'I would have struck' },
            { surface: 'أَعْنَاقَهُمْ', lemma: 'عنق', pos: 'noun', features: 'acc.pl+3mp', root: 'ع ن ق', gloss: 'their necks' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ كَانَ آبَاءُ الْفِتْيَةِ الثَّلاَثَةِ؟',
          options: ['حَجَّامٌ وَخُضَرِيٌّ وَحَائِكٌ', 'أُمَرَاءُ وَعُلَمَاءُ', 'تُجَّارٌ أَغْنِيَاءُ'],
          answer: 0,
          qEn: 'Who were the fathers of the three young men?',
          optionsEn: ['A cupper, a greengrocer, and a weaver', 'Princes and scholars', 'Wealthy merchants'],
        },
        {
          q: 'لِمَاذَا لَمْ يَضْرِبِ الْحَجَّاجُ أَعْنَاقَ الْفِتْيَةِ؟',
          options: ['لِفَصَاحَتِهِمْ', 'لِأَنَّهُمْ أَبْنَاءُ أُمَرَاءَ', 'لِأَنَّهُ نَسِيَ أَمْرَهُمْ'],
          answer: 0,
          qEn: 'Why didn’t al-Hajjaj strike off the young men’s necks?',
          optionsEn: ['Because of their eloquence', 'Because they were sons of princes', 'Because he forgot about them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَمَنْ رَآهُ بَعْدَ الْعِشَاءِ سَكْرَانَ',
        post: 'عُنُقَهُ.',
        en: 'Whoever he saw drunk after the night prayer, he struck his neck.',
        options: ['ضَرَبَ', 'ضَرَبْتُ', 'يَضْرِبُ', 'ضَرَبُوْا'],
        answer: 0,
        rationales: [
          '3rd person masculine singular past — he struck.',
          '1st person singular past — I struck.',
          '3rd person masculine singular present — he strikes.',
          '3rd person masculine plural past — they struck.',
        ],
      },
      {
        type: 'cloze',
        pre: 'فَلَمَّا كَانَ الصَّبَاحُ',
        post: 'أَمْرَهُمْ إِلَى الأَمِيْرِ.',
        en: 'When morning came, he referred their case to the governor.',
        options: ['رَفَعَ', 'رَفَعْتُ', 'تَرْفَعُ', 'رَفَعُوْا'],
        answer: 0,
        rationales: [
          '3rd masculine singular past — he referred.',
          '1st person singular past — I referred.',
          '2nd masculine / 3rd feminine singular present — you/she refer(s).',
          '3rd masculine plural past — they referred.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَأْخُذُ مِنْ مَالِهَا',
        pre: '',
        post: 'مِنْ مَالِهَا',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['آخُذُ', 'يَأْخُذُ', 'نَأْخُذُ', 'يَأْخُذُوْنَ'],
        answer: 0,
        rationales: ['1st person singular takes the prefix أَـ.', '3rd masculine singular, the base form.', '1st person plural — we take.', '3rd masculine plural — they take.'],
      },
      {
        type: 'shift',
        base: 'كَشَفَ عَنْ حَالِهِمْ',
        pre: '',
        post: 'عَنْ حَالِهِمْ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['كَشَفُوْا', 'كَشَفَتْ', 'كَشَفْتُ', 'كَشَفْنَا'],
        answer: 0,
        rationales: ['3rd masculine plural past takes the suffix ـُوا.', '3rd feminine singular — she uncovered.', '1st person singular — I uncovered.', '1st person plural — we uncovered.'],
      },
    ],
  },
};

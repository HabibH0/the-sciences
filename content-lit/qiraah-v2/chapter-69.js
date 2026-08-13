// القراءة الراشدة, volume two, chapter 69 (printed heading "٦٩") --
// الْبَاخِرَةُ (١) -- "The Steamship (1)".
//
// Source: _al-qir'atur-rashida 1-2.pdf, printed pages 228-230. Opens a new,
// unrelated topic (own ch68 is out of this session's scope). Despite the
// title "The Steamship", this first installment never mentions the
// steamship itself (بَاخِرَة) in the running text -- it is entirely a
// historical set-up: land transport before ships, then the danger and
// difficulty of travel by sail before steam power. The word بَاخِرَة is
// therefore only the printed page-heading/title and is NOT tokenized or
// added to newWords (it never occurs as a token in this installment).
// Part 2 (own ch70) continues on printed page 231, presumably introducing
// the steamship proper; this file stops at the end of page 230's own
// paragraph break, mid-topic, per the source-page boundary.
//
// Genre: third-person expository/historical narration (no dialogue frame),
// closer in register to own ch63/64 ("جِسْمُ النَّبَاتِ") than to the
// narrative-frame chapters (own ch61/62). Consequently vocabulary density
// is high and there is no "Rashid and his father" frame to lean on.
//
// Paragraph granularity: 7 blank-line-separated blocks on the printed
// pages. P1 (old overland transport) closes p.228. P2 (why people turned
// to sea travel despite fearing it) and P3 (the danger of sailing ships at
// the mercy of the wind, including a proverbial line of poetry, and the
// hardship/uncertainty of the voyage) span p.229-230. P4 (Muslims'
// pilgrimage travel undeterred by the danger), P5 (the "great travelers",
// جَوَّابُوْن, and the unity of the Islamic world), P6 (the one-line
// hospitality maxim "أَهْلاً بِأَهْلٍ وَجِيْرَاناً بِجِيْرَانٍ"), and P7
// (naming Ibn Battuta, Ibn Jubayr, and Sulayman the Merchant) are all on
// p.230, with P7 the last text printed on that page -- the natural,
// mid-topic stopping point for this installment.
//
// Sentence segmentation follows the project's standing convention of
// splitting at every ، . ؛ ! and ؟ (never at a colon before reported
// speech; qr2-69-020 "...لاَ يَقْدِرُ أَنْ يَقُوْلَ: إِنَّهُ يَصِلُ..."
// keeps the colon and its quoted clause together as one sentence).
//
// Non-Qur'anic long quotation (qr2-69-017): the two-hemistich proverbial
// line of poetry ("مَا كُلُّ مَا يَتَمَنَّى الْمَرْءُ يُدْرِكُهُ / تَجْرِي
// الرِّيَاحُ بِمَا لاَ تَشْتَهِي السُّفُنُ", widely attributed to
// al-Mutanabbi) is kept as ONE 12-token sentence rather than split at its
// internal (unpunctuated) hemistich boundary, using the same technique the
// corpus already applies to Qur'anic quotations (see own ch62's Q43:13-14)
// to keep it out of the 3-9 token Build-stage window. This chapter has no
// Qur'an/hadith quotation of its own.
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// غَادِيَة/رَائِحَة (p.228 fn.1, a single note glossing the asyndetic pair
// as "ذَاهِبَةً وَآيِبَةً"), تَحَامَى (p.229 fn.1), عَانَدَ (p.229 fn.2),
// خَاطَرَ (p.230 fn.1), and جَوَّاب (p.230 fn.2, explicitly distinguished
// by the book's own footnote from the ordinary word جَوَاب "answer" --
// same skeleton without tashkeel, different word/pattern; kept as its own
// newWords entry, disambiguated as 'جواب-سياح', for that reason).
//
// Homographs / reused lemmas (existing lemma key, no new newWords entry):
// "رُكَّاب" and "بِضَاعَة" reuse the lemmas taught in own ch61; "سَار"
// (to move/travel) reuses the lemma from own ch61/62; "أَقْصَى" (farthest)
// reuses the lemma from own ch61; "قَرِيْب" is reused both as the ordinary
// adjective ("near") and, in its plural أَقَارِب, as the noun "relatives" --
// same dictionary lemma. "وَقَفَ" (to stop) and "ثِقْل" (load, in
// الأَثْقَال) are both used as ordinary tokens without being added to
// newWords here, following the precedent already set in own ch61/62, where
// both words are used the same way despite not appearing in the
// corpus-wide lemma index -- evidently taught earlier than ch61 despite
// the index gap.
//
// Disambiguated homographs (QA pass): "عَالَم" (world, this chapter) shares
// an unvowelled spelling with "عَالِم" (a learned person, own ch61, taught
// there under the bare lemma key 'عالم'); since `lemma` -- not the
// per-token gloss -- is what a "mark as known" check matches against, this
// chapter's distinct sense is now taught under its own key 'عالم-دنيا'
// rather than silently reusing 'عالم'. Likewise "رَائِحَة" here (the
// adjective "returning", paired with غَادِيَة) shares a spelling with the
// noun "رَائِحَة" (scent/smell) already taught in own ch57 under bare
// 'رائحة'; this chapter's adjective sense is taught under its own key
// 'رائحة-صفة'.
export const CHAPTER = {
  id: 'ch69',
  number: 69,
  title: { ar: 'الْبَاخِرَةُ', en: 'The Steamship' },
  newWords: [ 'بغل', 'غادية', 'رائحة-صفة', 'تحامى', 'كلف', 'نفقة',
    'بحيرة', 'ترعة', 'شراعي', 'تجاري', 'عارض', 'صدم', 'كسر',
    'هلك', 'تمنى', 'مرء', 'دود', 'خاطر', 'أداء',
    'استغرق', 'كامل', 'جواب-سياح', 'ساح', 'مشرق',
    'معمورة', 'عالم-دنيا'
  ],
  lemmas: {
    'بغل': { gloss: 'mule' },
    'غادية': { gloss: 'going forth (departing in the morning)', book_note: 'غَادِيَةً وَرَائِحَةً: ذَاهِبَةً وَآيِبَةً.' },
    'رائحة-صفة': { gloss: 'returning (in the evening)', book_note: 'يُذْكَرُ مَعَ «غَادِيَة» فِي نَفْسِ الْحَاشِيَةِ: ذَاهِبَةً وَآيِبَةً.' },
    'تحامى': { gloss: 'to avoid, shun', book_note: 'تَحَامَى يَتَحَامَى تَحَامِياً: الرجلُ تَحَامَى شَيْئاً: تَجَنَّبَهُ.' },
    'كلف': { gloss: 'to cost, burden with expense' },
    'نفقة': { gloss: 'expense, cost' },
    'بحيرة': { gloss: 'lake' },
    'ترعة': { gloss: 'canal' },
    'شراعي': { gloss: 'sailing, sail-powered' },
    'تجاري': { gloss: 'commercial, of trade' },
    'عارض': { gloss: 'to be adverse, oppose' },
    'عاند': { gloss: 'to be stubbornly adverse, resist', book_note: 'عَانَدَ يُعَانِدُ مُعَانَدَةً: عَارَضَ.' },
    'صدم': { gloss: 'to collide with, strike' },
    'كسر': { gloss: 'to break' },
    'هلك': { gloss: 'to perish, die' },
    'تمنى': { gloss: 'to wish for' },
    'مرء': { gloss: 'person, human being' },
    'دود': { gloss: 'worm(s)' },
    'خاطر': { gloss: 'to risk, gamble with', book_note: 'خَاطَرَ يُخَاطِرُ مُخَاطَرَةً: الرجلُ خَاطَرَ بِنَفْسِهِ عَرَّضَهَا لِلْهَلاَكِ.' },
    'أداء': { gloss: 'performing, fulfilling (a duty)' },
    'استغرق': { gloss: 'to take up, consume (time)' },
    'كامل': { gloss: 'complete, whole' },
    'جواب-سياح': { gloss: 'great traveler, wanderer', book_note: 'الْجَوَّابُ جمع الْجَوَّابِيْنَ: السَّيَّاحُ. مُمَيَّزٌ عَنِ «الْجَوَاب» بِمَعْنَى الرَّدِّ عَلَىٰ سُؤَالٍ.' },
    'ساح': { gloss: 'to roam, travel about' },
    'مشرق': { gloss: 'east' },
    'معمورة': { gloss: 'the inhabited world' },
    'عالم-دنيا': { gloss: 'the world' }
  },
  paragraphs: [
    {
      en: 'In ancient times, people used to travel from place to place on camels, mules, horse-drawn carts, and ox-carts; you would see them coming and going along the roads and streets, carrying passengers and goods.',
      sentences: [
        {
          id: 'qr2-69-001',
          ar: 'كَانَ النَّاسُ فِيْ قَدِيْمِ الزَّمَانِ يُسَافِرُوْنَ مِنْ مَكَانٍ إِلَىٰ مَكَانٍ عَلَىٰ الإِبِلِ وَالْبِغَالِ وَعَجَلاَتِ الْخَيْلِ وَعَجَلاَتِ الثِّيْرَانِ ،',
          en: 'In ancient times, people used to travel from place to place on camels, mules, horse-drawn carts, and ox-carts,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'was, used to be' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'قَدِيْمِ', lemma: 'قديم', pos: 'noun', features: 'gen.constr', gloss: 'the old (of)' },
            { surface: 'الزَّمَانِ', lemma: 'زمان', pos: 'noun', features: 'def.gen', gloss: 'time (i.e. ancient times)' },
            { surface: 'يُسَافِرُوْنَ', lemma: 'سافر', pos: 'verb', features: 'impf.3mp', gloss: 'to travel' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'مَكَانٍ', lemma: 'مكان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مَكَانٍ', lemma: 'مكان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'on' },
            { surface: 'الإِبِلِ', lemma: 'إبل', pos: 'noun', features: 'def.gen', gloss: 'the camels' },
            { surface: 'وَالْبِغَالِ', lemma: 'بغل', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the mules' },
            { surface: 'وَعَجَلاَتِ', lemma: 'عجلة', pos: 'noun', features: 'conj+gen.constr.pl', gloss: 'and the carts of' },
            { surface: 'الْخَيْلِ', lemma: 'خيل', pos: 'noun', features: 'def.gen', gloss: 'the horses' },
            { surface: 'وَعَجَلاَتِ', lemma: 'عجلة', pos: 'noun', features: 'conj+gen.constr.pl', gloss: 'and the carts of' },
            { surface: 'الثِّيْرَانِ', lemma: 'ثور', pos: 'noun', features: 'def.gen.pl', gloss: 'the oxen' },
          ],
        },
        {
          id: 'qr2-69-002',
          ar: 'فَتَرَاهَا غَادِيَةً رَائِحَةً عَلَىٰ الطُّرُقَاتِ وَالشَّوَارِعِ تَحْمِلُ الرُّكَّابَ وَالْبَضَائِعَ .',
          en: 'you would see them coming and going along the roads and streets, carrying passengers and goods.',
          tokens: [
            { surface: 'فَتَرَاهَا', lemma: 'رأى', pos: 'verb', features: 'conj+impf.2ms+3fs', root: 'ر أ ي', gloss: 'and you would see them' },
            { surface: 'غَادِيَةً', lemma: 'غادية', pos: 'adj', features: 'indef.acc', gloss: 'going forth (in the morning)' },
            { surface: 'رَائِحَةً', lemma: 'رائحة-صفة', pos: 'adj', features: 'indef.acc', gloss: 'returning (in the evening)' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'along' },
            { surface: 'الطُّرُقَاتِ', lemma: 'طريق', pos: 'noun', features: 'def.gen.pl', gloss: 'the roads' },
            { surface: 'وَالشَّوَارِعِ', lemma: 'شارع', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the streets' },
            { surface: 'تَحْمِلُ', lemma: 'حمل', pos: 'verb', features: 'impf.3fs', gloss: 'carrying' },
            { surface: 'الرُّكَّابَ', lemma: 'ركاب', pos: 'noun', features: 'def.acc', gloss: 'the passengers' },
            { surface: 'وَالْبَضَائِعَ', lemma: 'بضاعة', pos: 'noun', features: 'conj+def.acc.pl', gloss: 'and the goods' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ كَانَ النَّاسُ يُسَافِرُوْنَ فِيْ قَدِيْمِ الزَّمَانِ؟',
          options: ['عَلَى الإِبِلِ وَالْبِغَالِ وَالْعَجَلاَتِ', 'بِالطَّائِرَاتِ', 'بِالْبَاخِرَةِ'],
          answer: 0,
          qEn: 'How did people travel in ancient times?',
          optionsEn: ['On camels, mules, and carts', 'By airplanes', 'By steamship'],
        },
      ],
    },
    {
      en: 'People used to fear traveling by sea and avoided it, but necessity drove them to travel upon it, since it carries huge loads without costing much expense; so they linked the rivers and lakes together with canals, and began traveling on them by sailing ships, transporting their trade goods from one distant place to another.',
      sentences: [
        {
          id: 'qr2-69-003',
          ar: 'وَكَانَ النَّاسُ يَخَافُوْنَ السَّفَرَ فِي الْبِحَارِ وَيَتَحَامَوْنَهُ ،',
          en: 'People used to fear traveling by sea and avoided it,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'يَخَافُوْنَ', lemma: 'خاف', pos: 'verb', features: 'impf.3mp', gloss: 'to fear' },
            { surface: 'السَّفَرَ', lemma: 'سفر', pos: 'noun', features: 'def.acc', gloss: 'traveling' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'by' },
            { surface: 'الْبِحَارِ', lemma: 'بحر', pos: 'noun', features: 'def.gen.pl', gloss: 'the seas' },
            { surface: 'وَيَتَحَامَوْنَهُ', lemma: 'تحامى', pos: 'verb', features: 'conj+impf.3mp+3ms', gloss: 'and avoided it' },
          ],
        },
        {
          id: 'qr2-69-004',
          ar: 'وَلٰكِنْ أَلْجَأَتْهُمُ الضَّرُوْرَةُ إِلَىٰ السَّفَرِ فِيْهَا لأَنَّهُ يَحْمِلُ الأَثْقَالَ الْعَظِيْمَةَ وَلاَ يُكَلِّفُ نَفَقَةً ،',
          en: 'but necessity drove them to travel upon it, since it carries huge loads without costing much expense,',
          tokens: [
            { surface: 'وَلٰكِنْ', lemma: 'لكن', pos: 'part', features: 'conj', gloss: 'but' },
            { surface: 'أَلْجَأَتْهُمُ', lemma: 'ألجأ', pos: 'verb', features: 'perf.3fs+3mp', gloss: 'drove them, compelled them' },
            { surface: 'الضَّرُوْرَةُ', lemma: 'ضرورة', pos: 'noun', features: 'def.nom', gloss: 'necessity' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'السَّفَرِ', lemma: 'سفر', pos: 'noun', features: 'def.gen', gloss: 'travel' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'upon it' },
            { surface: 'لأَنَّهُ', lemma: 'لأن', pos: 'part', features: '3ms', gloss: 'because it' },
            { surface: 'يَحْمِلُ', lemma: 'حمل', pos: 'verb', features: 'impf.3ms', gloss: 'carries' },
            { surface: 'الأَثْقَالَ', lemma: 'ثقل', pos: 'noun', features: 'def.acc.pl', gloss: 'the loads' },
            { surface: 'الْعَظِيْمَةَ', lemma: 'عظيم', pos: 'adj', features: 'def.acc', gloss: 'huge' },
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُكَلِّفُ', lemma: 'كلف', pos: 'verb', features: 'impf.3ms', gloss: 'costs, requires' },
            { surface: 'نَفَقَةً', lemma: 'نفقة', pos: 'noun', features: 'indef.acc', gloss: 'expense' },
          ],
        },
        {
          id: 'qr2-69-005',
          ar: 'فَوَصَلُوا الأَنْهَارَ وَالْبُحَيْرَاتِ بِالتُّرَعِ ،',
          en: 'so they linked the rivers and lakes together with canals,',
          tokens: [
            { surface: 'فَوَصَلُوا', lemma: 'وصل', pos: 'verb', features: 'conj+perf.3mp', gloss: 'connected, linked' },
            { surface: 'الأَنْهَارَ', lemma: 'نهر', pos: 'noun', features: 'def.acc.pl', gloss: 'the rivers' },
            { surface: 'وَالْبُحَيْرَاتِ', lemma: 'بحيرة', pos: 'noun', features: 'conj+def.acc.pl', gloss: 'and the lakes' },
            { surface: 'بِالتُّرَعِ', lemma: 'ترعة', pos: 'noun', features: 'prep+def.gen.pl', gloss: 'with the canals' },
          ],
        },
        {
          id: 'qr2-69-006',
          ar: 'وَصَارُوْا يُسَافِرُوْنَ فِيْهَا عَلَىٰ السُّفُنِ الشِّرَاعِيَّةِ ،',
          en: 'and began traveling on them by sailing ships,',
          tokens: [
            { surface: 'وَصَارُوْا', lemma: 'صار', pos: 'verb', features: 'conj+perf.3mp', gloss: 'began (to), came to' },
            { surface: 'يُسَافِرُوْنَ', lemma: 'سافر', pos: 'verb', features: 'impf.3mp', gloss: 'traveling' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'on them' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'by, on' },
            { surface: 'السُّفُنِ', lemma: 'سفينة', pos: 'noun', features: 'def.gen.pl', gloss: 'the ships' },
            { surface: 'الشِّرَاعِيَّةِ', lemma: 'شراعي', pos: 'adj', features: 'def.gen', gloss: 'sailing, sail-powered' },
          ],
        },
        {
          id: 'qr2-69-007',
          ar: 'وَيَنْقُلُوْنَ بَضَائِعَهُمُ التِّجَارِيَّةَ مِنْ مَكَانٍ إِلَىٰ مَكَانٍ بَعِيْدٍ .',
          en: 'transporting their trade goods from one distant place to another.',
          tokens: [
            { surface: 'وَيَنْقُلُوْنَ', lemma: 'نقل', pos: 'verb', features: 'conj+impf.3mp', gloss: 'transporting' },
            { surface: 'بَضَائِعَهُمُ', lemma: 'بضاعة', pos: 'noun', features: 'acc.pl+3mp', gloss: 'their goods' },
            { surface: 'التِّجَارِيَّةَ', lemma: 'تجاري', pos: 'adj', features: 'def.acc', gloss: 'trade, commercial' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'مَكَانٍ', lemma: 'مكان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مَكَانٍ', lemma: 'مكان', pos: 'noun', features: 'indef.gen', gloss: 'a place' },
            { surface: 'بَعِيْدٍ', lemma: 'بعيد', pos: 'adj', features: 'indef.gen', gloss: 'distant' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا صَارَ النَّاسُ يُسَافِرُوْنَ فِي الْبِحَارِ رَغْمَ خَوْفِهِمْ مِنْهَا؟',
          options: ['لأَنَّهَا تَحْمِلُ أَثْقَالاً كَثِيْرَةً بِلاَ نَفَقَةٍ كَبِيْرَةٍ', 'لأَنَّهَا أَسْرَعُ مِنَ الْبَرِّ', 'لأَنَّ الْمَلِكَ أَمَرَهُمْ'],
          answer: 0,
          qEn: 'Why did people come to travel by sea despite fearing it?',
          optionsEn: ['Because it carries many loads without great expense', 'Because it is faster than land travel', 'Because the king ordered them to'],
        },
      ],
    },
    {
      en: "These sailing ships used to travel three miles in a single hour, and they were at the mercy of the winds: if the winds were favorable, the ship arrived in good time; if unfavorable, it would sit still for weeks or months; and if fiercely adverse, it might strike a rock and break apart, or capsize, and the passengers would perish and the goods sink -- this happened so often that it became proverbial, and the poet said: \"Not everything a person wishes for does he attain: the winds do not blow as the ships desire.\" Travel was so dangerous that a person could not know whether he would reach home or die on the way; so if someone wanted to travel on a sailing ship, he would instruct his relatives and friends about his debts and his obligations, for a person could not say he would arrive within a month or a year -- he was traveling through the darkness of the sea, like a worm on a piece of driftwood, not knowing whether he would die on the way or arrive home safely and return.",
      sentences: [
        {
          id: 'qr2-69-008',
          ar: 'وَكَانَتْ هٰذِهِ السُّفُنُ الشِّرَاعِيَّةُ تَسِيْرُ ثَلاَثَةَ أَمْيَالٍ فِيْ سَاعَةٍ وَاحِدَةٍ ،',
          en: 'These sailing ships used to travel three miles in a single hour,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'was' },
            { surface: 'هٰذِهِ', lemma: 'هذه', pos: 'dem', gloss: 'these' },
            { surface: 'السُّفُنُ', lemma: 'سفينة', pos: 'noun', features: 'def.nom.pl', gloss: 'the ships' },
            { surface: 'الشِّرَاعِيَّةُ', lemma: 'شراعي', pos: 'adj', features: 'def.nom', gloss: 'sailing' },
            { surface: 'تَسِيْرُ', lemma: 'سار', pos: 'verb', features: 'impf.3fs', root: 'س ي ر', gloss: 'to travel, cover (distance)' },
            { surface: 'ثَلاَثَةَ', lemma: 'ثلاثة', pos: 'num', features: 'acc.constr', gloss: 'three' },
            { surface: 'أَمْيَالٍ', lemma: 'ميل', pos: 'noun', features: 'indef.gen.pl', gloss: 'miles' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'سَاعَةٍ', lemma: 'ساعة', pos: 'noun', features: 'indef.gen', gloss: 'an hour' },
            { surface: 'وَاحِدَةٍ', lemma: 'واحد', pos: 'adj', features: 'indef.gen', gloss: 'one, single' },
          ],
        },
        {
          id: 'qr2-69-009',
          ar: 'وَكَانَتْ هٰذِهِ السُّفُنُ تَحْتَ حُكْمِ الرِّيَاحِ ،',
          en: 'and these ships were at the mercy of the winds:',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3fs', root: 'ك و ن', gloss: 'was' },
            { surface: 'هٰذِهِ', lemma: 'هذه', pos: 'dem', gloss: 'these' },
            { surface: 'السُّفُنُ', lemma: 'سفينة', pos: 'noun', features: 'def.nom.pl', gloss: 'the ships' },
            { surface: 'تَحْتَ', lemma: 'تحت', pos: 'prep', gloss: 'under' },
            { surface: 'حُكْمِ', lemma: 'حكم', pos: 'noun', features: 'gen.constr', gloss: 'the control of' },
            { surface: 'الرِّيَاحِ', lemma: 'ريح', pos: 'noun', features: 'def.gen.pl', gloss: 'the winds' },
          ],
        },
        {
          id: 'qr2-69-010',
          ar: 'فَإِنْ وَافَقَتْ وَصَلَتِ السَّفِيْنَةُ فِيْ وَقْتٍ قَرِيْبٍ ،',
          en: 'if the winds were favorable, the ship arrived in good time,',
          tokens: [
            { surface: 'فَإِنْ', lemma: 'إن', pos: 'part', features: 'conj', gloss: 'so if' },
            { surface: 'وَافَقَتْ', lemma: 'وافق', pos: 'verb', features: 'perf.3fs', gloss: 'were favorable' },
            { surface: 'وَصَلَتِ', lemma: 'وصل', pos: 'verb', features: 'perf.3fs', gloss: 'arrived' },
            { surface: 'السَّفِيْنَةُ', lemma: 'سفينة', pos: 'noun', features: 'def.nom', gloss: 'the ship' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'وَقْتٍ', lemma: 'وقت', pos: 'noun', features: 'indef.gen', gloss: 'a time' },
            { surface: 'قَرِيْبٍ', lemma: 'قريب', pos: 'adj', features: 'indef.gen', gloss: 'near, soon' },
          ],
        },
        {
          id: 'qr2-69-011',
          ar: 'وَإِنْ عَارَضَتْ وَقَفَتْ أَسَابِيْعَ وَشُهُوْراً ،',
          en: 'and if unfavorable, it would sit still for weeks or months,',
          tokens: [
            { surface: 'وَإِنْ', lemma: 'إن', pos: 'part', features: 'conj', gloss: 'and if' },
            { surface: 'عَارَضَتْ', lemma: 'عارض', pos: 'verb', features: 'perf.3fs', gloss: 'were adverse' },
            { surface: 'وَقَفَتْ', lemma: 'وقف', pos: 'verb', features: 'perf.3fs', gloss: 'stayed stopped' },
            { surface: 'أَسَابِيْعَ', lemma: 'أسبوع', pos: 'noun', features: 'indef.acc.pl', gloss: 'weeks' },
            { surface: 'وَشُهُوْراً', lemma: 'شهر', pos: 'noun', features: 'conj+indef.acc.pl', gloss: 'and months' },
          ],
        },
        {
          id: 'qr2-69-012',
          ar: 'وَإِنْ عَانَدَتْ صَدَمَتْهَا بِصَخْرَةٍ فَكَسَرَتْهَا ،',
          en: 'and if fiercely adverse, it might strike a rock and break apart,',
          tokens: [
            { surface: 'وَإِنْ', lemma: 'إن', pos: 'part', features: 'conj', gloss: 'and if' },
            { surface: 'عَانَدَتْ', lemma: 'عاند', pos: 'verb', features: 'perf.3fs', gloss: 'were stubbornly adverse' },
            { surface: 'صَدَمَتْهَا', lemma: 'صدم', pos: 'verb', features: 'perf.3fs+3fs', gloss: 'struck it' },
            { surface: 'بِصَخْرَةٍ', lemma: 'صخرة', pos: 'noun', features: 'prep+indef.gen', gloss: 'with a rock' },
            { surface: 'فَكَسَرَتْهَا', lemma: 'كسر', pos: 'verb', features: 'conj+perf.3fs+3fs', gloss: 'and broke it' },
          ],
        },
        {
          id: 'qr2-69-013',
          ar: 'أَوْ قَلَبَتْهَا ،',
          en: 'or capsize,',
          tokens: [
            { surface: 'أَوْ', lemma: 'أو', pos: 'conj', gloss: 'or' },
            { surface: 'قَلَبَتْهَا', lemma: 'قلب', pos: 'verb', features: 'perf.3fs+3fs', gloss: 'overturned it' },
          ],
        },
        {
          id: 'qr2-69-014',
          ar: 'وَهَلَكَ الرُّكَّابُ وَغَرِقَتِ الْبَضَائِعُ ،',
          en: 'and the passengers would perish and the goods sink,',
          tokens: [
            { surface: 'وَهَلَكَ', lemma: 'هلك', pos: 'verb', features: 'conj+perf.3ms', gloss: 'perished' },
            { surface: 'الرُّكَّابُ', lemma: 'ركاب', pos: 'noun', features: 'def.nom', gloss: 'the passengers' },
            { surface: 'وَغَرِقَتِ', lemma: 'غرق', pos: 'verb', features: 'conj+perf.3fs', gloss: 'and sank' },
            { surface: 'الْبَضَائِعُ', lemma: 'بضاعة', pos: 'noun', features: 'def.nom.pl', gloss: 'the goods' },
          ],
        },
        {
          id: 'qr2-69-015',
          ar: 'وَكَانَ هٰذَا يَقَعُ كَثِيْراً حَتَّىٰ ذَهَبَ مَثَلاً ،',
          en: 'and this happened so often that it became proverbial,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'هٰذَا', lemma: 'هذا', pos: 'dem', gloss: 'this' },
            { surface: 'يَقَعُ', lemma: 'وقع', pos: 'verb', features: 'impf.3ms', gloss: 'to happen' },
            { surface: 'كَثِيْراً', lemma: 'كثير', pos: 'adv', features: 'indef.acc', gloss: 'often' },
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'ذَهَبَ', lemma: 'ذهب', pos: 'verb', features: 'perf.3ms', root: 'ذ ه ب', gloss: 'became (proverbial)' },
            { surface: 'مَثَلاً', lemma: 'مثل', pos: 'noun', features: 'indef.acc', gloss: 'a proverb' },
          ],
        },
        {
          id: 'qr2-69-016',
          ar: 'وَقَالَ الشَّاعِرُ:',
          en: 'and the poet said:',
          tokens: [
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', root: 'ق و ل', gloss: 'said' },
            { surface: 'الشَّاعِرُ', lemma: 'شاعر', pos: 'noun', features: 'def.nom', gloss: 'the poet' },
          ],
        },
        {
          id: 'qr2-69-017',
          ar: 'مَا كُلُّ مَا يَتَمَنَّى الْمَرْءُ يُدْرِكُهُ تَجْرِي الرِّيَاحُ بِمَا لاَ تَشْتَهِيْ السُّفُنُ',
          en: '"Not everything a person wishes for does he attain: the winds do not blow as the ships desire" -- a proverbial line of Arabic poetry (widely attributed to al-Mutanabbi), kept as a single 12-token unit spanning both hemistichs, rather than split at the unpunctuated internal break, using the same technique the corpus applies to Qur\'anic quotations (see own ch62); this keeps it above the 3-9 token buildable range, so it is not offered in the Build stage.',
          tokens: [
            { surface: 'مَا', lemma: 'ما', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'كُلُّ', lemma: 'كل', pos: 'noun', features: 'nom.constr', gloss: 'every' },
            { surface: 'مَا', lemma: 'ما', pos: 'rel', gloss: 'what' },
            { surface: 'يَتَمَنَّى', lemma: 'تمنى', pos: 'verb', features: 'impf.3ms', gloss: 'wishes for' },
            { surface: 'الْمَرْءُ', lemma: 'مرء', pos: 'noun', features: 'def.nom', gloss: 'the person' },
            { surface: 'يُدْرِكُهُ', lemma: 'أدرك', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'does he attain (it)' },
            { surface: 'تَجْرِي', lemma: 'جرى', pos: 'verb', features: 'impf.3fs', gloss: 'blow, run' },
            { surface: 'الرِّيَاحُ', lemma: 'ريح', pos: 'noun', features: 'def.nom.pl', gloss: 'the winds' },
            { surface: 'بِمَا', lemma: 'ما', pos: 'rel', features: 'prep', gloss: 'as, according to what' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَشْتَهِيْ', lemma: 'اشتهى', pos: 'verb', features: 'impf.3fs', gloss: 'desire' },
            { surface: 'السُّفُنُ', lemma: 'سفينة', pos: 'noun', features: 'def.nom.pl', gloss: 'the ships' },
          ],
        },
        {
          id: 'qr2-69-018',
          ar: 'وَكَانَ السَّفَرُ خَطِراً لاَ يَدْرِيْ الإِنْسَانُ أَيَصِلُ إِلَىٰ الْمَنْزِلِ أَمْ يَمُوْتُ فِي الطَّرِيْقِ ،',
          en: 'Travel was so dangerous that a person could not know whether he would reach home or die on the way,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'السَّفَرُ', lemma: 'سفر', pos: 'noun', features: 'def.nom', gloss: 'travel' },
            { surface: 'خَطِراً', lemma: 'خطر', pos: 'adj', features: 'indef.acc', gloss: 'dangerous' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَدْرِيْ', lemma: 'درى', pos: 'verb', features: 'impf.3ms', gloss: 'knows' },
            { surface: 'الإِنْسَانُ', lemma: 'إنسان', pos: 'noun', features: 'def.nom', gloss: 'the person' },
            { surface: 'أَيَصِلُ', lemma: 'وصل', pos: 'verb', features: 'impf.3ms', gloss: 'whether he arrives' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'at' },
            { surface: 'الْمَنْزِلِ', lemma: 'منزل', pos: 'noun', features: 'def.gen', gloss: 'the destination' },
            { surface: 'أَمْ', lemma: 'أم', pos: 'conj', gloss: 'or' },
            { surface: 'يَمُوْتُ', lemma: 'مات', pos: 'verb', features: 'impf.3ms', gloss: 'dies' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'الطَّرِيْقِ', lemma: 'طريق', pos: 'noun', features: 'def.gen', gloss: 'the way' },
          ],
        },
        {
          id: 'qr2-69-019',
          ar: 'فَكَانَ الْوَاحِدُ إِذَا أَرَادَ أَنْ يُسَافِرَ فِيْ سَفِيْنَةٍ شِرَاعِيَّةٍ أَوْصَىٰ أَقَارِبَهُ وَأَصْدِقَاءَهُ بِدُيُوْنِهِ وَبِمَا عَلَيْهِ ،',
          en: 'so if someone wanted to travel on a sailing ship, he would instruct his relatives and friends about his debts and his obligations,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'so was' },
            { surface: 'الْوَاحِدُ', lemma: 'واحد', pos: 'noun', features: 'def.nom', gloss: 'the one, a person' },
            { surface: 'إِذَا', lemma: 'إذا', pos: 'part', gloss: 'when, if' },
            { surface: 'أَرَادَ', lemma: 'أراد', pos: 'verb', features: 'perf.3ms', gloss: 'wanted' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'to' },
            { surface: 'يُسَافِرَ', lemma: 'سافر', pos: 'verb', features: 'subj.3ms', gloss: 'travel' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'سَفِيْنَةٍ', lemma: 'سفينة', pos: 'noun', features: 'indef.gen', gloss: 'a ship' },
            { surface: 'شِرَاعِيَّةٍ', lemma: 'شراعي', pos: 'adj', features: 'indef.gen', gloss: 'sailing' },
            { surface: 'أَوْصَىٰ', lemma: 'أوصى', pos: 'verb', features: 'perf.3ms', gloss: 'instructed, charged' },
            { surface: 'أَقَارِبَهُ', lemma: 'قريب', pos: 'noun', features: 'acc.pl+3ms', gloss: 'his relatives' },
            { surface: 'وَأَصْدِقَاءَهُ', lemma: 'صديق', pos: 'noun', features: 'conj+acc.pl+3ms', gloss: 'and his friends' },
            { surface: 'بِدُيُوْنِهِ', lemma: 'دين', pos: 'noun', features: 'prep+gen.pl+3ms', gloss: 'about his debts' },
            { surface: 'وَبِمَا', lemma: 'ما', pos: 'rel', features: 'conj+prep', gloss: 'and about what' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'was upon him' },
          ],
        },
        {
          id: 'qr2-69-020',
          ar: 'وَكَانَ الإِنْسَانُ لاَ يَقْدِرُ أَنْ يَقُوْلَ: إِنَّهُ يَصِلُ فِيْ شَهْرٍ أَوْ عَامٍ ،',
          en: "and a person could not say: \"he would arrive within a month or a year,\"",
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'الإِنْسَانُ', lemma: 'إنسان', pos: 'noun', features: 'def.nom', gloss: 'the person' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَقْدِرُ', lemma: 'قدر', pos: 'verb', features: 'impf.3ms', gloss: 'is able' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'to' },
            { surface: 'يَقُوْلَ', lemma: 'قال', pos: 'verb', features: 'subj.3ms', root: 'ق و ل', gloss: 'say' },
            { surface: 'إِنَّهُ', lemma: 'إن', pos: 'part', features: '3ms', gloss: 'that he' },
            { surface: 'يَصِلُ', lemma: 'وصل', pos: 'verb', features: 'impf.3ms', gloss: 'will arrive' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'within' },
            { surface: 'شَهْرٍ', lemma: 'شهر', pos: 'noun', features: 'indef.gen', gloss: 'a month' },
            { surface: 'أَوْ', lemma: 'أو', pos: 'conj', gloss: 'or' },
            { surface: 'عَامٍ', lemma: 'عام', pos: 'noun', features: 'indef.gen', gloss: 'a year' },
          ],
        },
        {
          id: 'qr2-69-021',
          ar: 'فَإِنَّهُ يُسَافِرُ فِيْ ظُلُمَاتِ الْبَحْرِ ،',
          en: 'for he was traveling through the darkness of the sea,',
          tokens: [
            { surface: 'فَإِنَّهُ', lemma: 'إن', pos: 'part', features: 'conj+3ms', gloss: 'for he' },
            { surface: 'يُسَافِرُ', lemma: 'سافر', pos: 'verb', features: 'impf.3ms', gloss: 'travels' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'through' },
            { surface: 'ظُلُمَاتِ', lemma: 'ظلمة', pos: 'noun', features: 'gen.constr.pl', gloss: 'the darknesses of' },
            { surface: 'الْبَحْرِ', lemma: 'بحر', pos: 'noun', features: 'def.gen', gloss: 'the sea' },
          ],
        },
        {
          id: 'qr2-69-022',
          ar: 'وَكَانَ دُوْداً عَلَىٰ عُوْدٍ ،',
          en: 'like a worm on a piece of driftwood,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'and was (like)' },
            { surface: 'دُوْداً', lemma: 'دود', pos: 'noun', features: 'indef.acc', gloss: 'a worm' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'on' },
            { surface: 'عُوْدٍ', lemma: 'عود', pos: 'noun', features: 'indef.gen', gloss: 'a stick, piece of wood' },
          ],
        },
        {
          id: 'qr2-69-023',
          ar: 'لاَ يَدْرِيْ أَيَمُوْتُ فِي الطَّرِيْقِ أَمْ يَصِلُ سَالِماً وَيَعُوْدُ .',
          en: 'not knowing whether he would die on the way or arrive home safely and return.',
          tokens: [
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَدْرِيْ', lemma: 'درى', pos: 'verb', features: 'impf.3ms', gloss: 'knowing' },
            { surface: 'أَيَمُوْتُ', lemma: 'مات', pos: 'verb', features: 'impf.3ms', gloss: 'whether he dies' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'الطَّرِيْقِ', lemma: 'طريق', pos: 'noun', features: 'def.gen', gloss: 'the way' },
            { surface: 'أَمْ', lemma: 'أم', pos: 'conj', gloss: 'or' },
            { surface: 'يَصِلُ', lemma: 'وصل', pos: 'verb', features: 'impf.3ms', gloss: 'arrives' },
            { surface: 'سَالِماً', lemma: 'سلم', pos: 'adj', features: 'indef.acc', gloss: 'safely' },
            { surface: 'وَيَعُوْدُ', lemma: 'عاد', pos: 'verb', features: 'conj+impf.3ms', gloss: 'and returns' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يُمْكِنُ أَنْ يَحْدُثَ لِلسَّفِيْنَةِ إِذَا عَانَدَتِ الرِّيَاحُ؟',
          options: ['قَدْ تَصْدِمُ صَخْرَةً فَتَنْكَسِرُ أَوْ تَنْقَلِبُ', 'كَانَتْ تَطِيْرُ فِي الْهَوَاءِ', 'كَانَتْ تَسِيْرُ أَسْرَعَ'],
          answer: 0,
          qEn: 'What could happen to the ship if the winds were fiercely adverse?',
          optionsEn: ['It might strike a rock and break apart, or capsize', 'It would fly through the air', 'It would move faster'],
        },
        {
          q: 'مَاذَا كَانَ يَفْعَلُ الْمُسَافِرُ قَبْلَ رُكُوْبِ السَّفِيْنَةِ الشِّرَاعِيَّةِ؟',
          options: ['يُوْصِيْ أَقَارِبَهُ وَأَصْدِقَاءَهُ بِدُيُوْنِهِ', 'يَكْتُبُ رِسَالَةً لِلْمَلِكِ', 'يَبِيْعُ بَيْتَهُ'],
          answer: 0,
          qEn: 'What did a traveler do before boarding a sailing ship?',
          optionsEn: ['Instruct his relatives and friends about his debts', 'Write a letter to the king', 'Sell his house'],
        },
      ],
    },
    {
      en: 'Despite all that, people still risked their lives and wealth; Muslims used to travel for Hajj from every land, and no danger or fear kept them from traveling to the House of Allah and performing the duty of Hajj -- so Muslims from India, China, and the islands of the Indian Ocean, as well as from Marrakesh and the lands of Andalusia, would travel every year for Hajj, and their journey might take a full year or more.',
      sentences: [
        {
          id: 'qr2-69-024',
          ar: 'وَكَانَ النَّاسُ رَغْمَ ذٰلِكَ كُلِّهِ يُخَاطِرُوْنَ بِأَنْفُسِهِمْ وَأَمْوَالِهِمْ ،',
          en: 'Despite all that, people still risked their lives and wealth,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'رَغْمَ', lemma: 'رغم', pos: 'prep', gloss: 'despite' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'كُلِّهِ', lemma: 'كل', pos: 'noun', features: 'gen+3ms', gloss: 'all of it' },
            { surface: 'يُخَاطِرُوْنَ', lemma: 'خاطر', pos: 'verb', features: 'impf.3mp', gloss: 'risking' },
            { surface: 'بِأَنْفُسِهِمْ', lemma: 'نفس', pos: 'noun', features: 'prep+gen.pl+3mp', gloss: 'with themselves' },
            { surface: 'وَأَمْوَالِهِمْ', lemma: 'مال', pos: 'noun', features: 'conj+gen.pl+3mp', gloss: 'and their wealth' },
          ],
        },
        {
          id: 'qr2-69-025',
          ar: 'وَكَانَ الْمُسْلِمُوْنَ يُسَافِرُوْنَ لِلْحَجِّ مِنْ كُلِّ بِلاَدٍ ،',
          en: 'Muslims used to travel for Hajj from every land,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'الْمُسْلِمُوْنَ', lemma: 'مسلم', pos: 'noun', features: 'def.nom.pl', gloss: 'the Muslims' },
            { surface: 'يُسَافِرُوْنَ', lemma: 'سافر', pos: 'verb', features: 'impf.3mp', gloss: 'traveling' },
            { surface: 'لِلْحَجِّ', lemma: 'حج', pos: 'noun', features: 'prep+def.gen', gloss: 'for the Hajj' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'كُلِّ', lemma: 'كل', pos: 'noun', features: 'gen.constr', gloss: 'every' },
            { surface: 'بِلاَدٍ', lemma: 'بلد', pos: 'noun', features: 'indef.gen', gloss: 'land' },
          ],
        },
        {
          id: 'qr2-69-026',
          ar: 'وَلاَ يَمْنَعُهُمْ خَطَرٌ أَوْ خَوْفٌ مِنَ السَّفَرِ إِلَىٰ بَيْتِ اللهِ ،',
          en: 'and no danger or fear kept them from traveling to the House of Allah,',
          tokens: [
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَمْنَعُهُمْ', lemma: 'منع', pos: 'verb', features: 'impf.3ms+3mp', gloss: 'prevents them' },
            { surface: 'خَطَرٌ', lemma: 'خطر', pos: 'noun', features: 'indef.nom', gloss: 'danger' },
            { surface: 'أَوْ', lemma: 'أو', pos: 'conj', gloss: 'or' },
            { surface: 'خَوْفٌ', lemma: 'خوف', pos: 'noun', features: 'indef.nom', gloss: 'fear' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'السَّفَرِ', lemma: 'سفر', pos: 'noun', features: 'def.gen', gloss: 'traveling' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'بَيْتِ', lemma: 'بيت', pos: 'noun', features: 'gen.constr', gloss: 'the House of' },
            { surface: 'اللهِ', lemma: 'الله', pos: 'proper', features: 'gen', gloss: 'Allah' },
          ],
        },
        {
          id: 'qr2-69-027',
          ar: 'وَأَدَاءِ فَرِيْضَةِ الْحَجِّ ،',
          en: 'and performing the duty of Hajj,',
          tokens: [
            { surface: 'وَأَدَاءِ', lemma: 'أداء', pos: 'noun', features: 'conj+gen.constr', gloss: 'and the performing of' },
            { surface: 'فَرِيْضَةِ', lemma: 'فريضة', pos: 'noun', features: 'gen.constr', gloss: 'the obligatory duty of' },
            { surface: 'الْحَجِّ', lemma: 'حج', pos: 'noun', features: 'def.gen', gloss: 'the Hajj' },
          ],
        },
        {
          id: 'qr2-69-028',
          ar: 'فَكَانَ الْمُسْلِمُوْنَ مِنَ الْهِنْدِ وَالصِّيْنِ ،',
          en: 'so Muslims from India and China,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'so was' },
            { surface: 'الْمُسْلِمُوْنَ', lemma: 'مسلم', pos: 'noun', features: 'def.nom.pl', gloss: 'the Muslims' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'الْهِنْدِ', lemma: 'هند', pos: 'proper', features: 'def.gen', gloss: 'India' },
            { surface: 'وَالصِّيْنِ', lemma: 'الصين', pos: 'proper', features: 'conj+def.gen', gloss: 'and China' },
          ],
        },
        {
          id: 'qr2-69-029',
          ar: 'وَجَزَائِرِ بَحْرِ الْهِنْدِ ،',
          en: 'and the islands of the Indian Ocean,',
          tokens: [
            { surface: 'وَجَزَائِرِ', lemma: 'جزيرة', pos: 'noun', features: 'conj+gen.constr.pl', gloss: 'and the islands of' },
            { surface: 'بَحْرِ', lemma: 'بحر', pos: 'noun', features: 'gen.constr', gloss: 'the sea of' },
            { surface: 'الْهِنْدِ', lemma: 'هند', pos: 'proper', features: 'def.gen', gloss: 'India' },
          ],
        },
        {
          id: 'qr2-69-030',
          ar: 'وَكَذٰلِكَ مِنْ مَرَّاكِشَ وَبِلاَدِ الأَنْدَلُسِ يُسَافِرُوْنَ كُلَّ عَامٍ لِلْحَجِّ ،',
          en: 'as well as from Marrakesh and the lands of Andalusia, would travel every year for Hajj,',
          tokens: [
            { surface: 'وَكَذٰلِكَ', lemma: 'كذلك', pos: 'adv', features: 'conj', gloss: 'and likewise' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'مَرَّاكِشَ', lemma: 'مراكش', pos: 'proper', features: 'gen', gloss: 'Marrakesh' },
            { surface: 'وَبِلاَدِ', lemma: 'بلد', pos: 'noun', features: 'conj+gen.constr', gloss: 'and the lands of' },
            { surface: 'الأَنْدَلُسِ', lemma: 'الأندلس', pos: 'proper', features: 'def.gen', gloss: 'Andalusia' },
            { surface: 'يُسَافِرُوْنَ', lemma: 'سافر', pos: 'verb', features: 'impf.3mp', gloss: 'travel' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'عَامٍ', lemma: 'عام', pos: 'noun', features: 'indef.gen', gloss: 'year' },
            { surface: 'لِلْحَجِّ', lemma: 'حج', pos: 'noun', features: 'prep+def.gen', gloss: 'for the Hajj' },
          ],
        },
        {
          id: 'qr2-69-031',
          ar: 'وَقَدْ يَسْتَغْرِقُ سَفَرُهُمْ عَاماً كَامِلاً أَوْ أَكْثَرَ .',
          en: 'and their journey might take a full year or more.',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قد', pos: 'part', features: 'conj', gloss: 'and sometimes' },
            { surface: 'يَسْتَغْرِقُ', lemma: 'استغرق', pos: 'verb', features: 'impf.3ms', gloss: 'takes up, consumes' },
            { surface: 'سَفَرُهُمْ', lemma: 'سفر', pos: 'noun', features: 'nom+3mp', gloss: 'their journey' },
            { surface: 'عَاماً', lemma: 'عام', pos: 'noun', features: 'indef.acc', gloss: 'a year' },
            { surface: 'كَامِلاً', lemma: 'كامل', pos: 'adj', features: 'indef.acc', gloss: 'whole, complete' },
            { surface: 'أَوْ', lemma: 'أو', pos: 'conj', gloss: 'or' },
            { surface: 'أَكْثَرَ', lemma: 'أكثر', pos: 'adj', features: 'acc', gloss: 'more' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ الْمُسْلِمُوْنَ يُسَافِرُوْنَ رَغْمَ خَطَرِ الْبَحْرِ؟',
          options: ['لأَدَاءِ فَرِيْضَةِ الْحَجِّ', 'لِلتِّجَارَةِ فَقَطْ', 'لِلسِّيَاحَةِ فَقَطْ'],
          answer: 0,
          qEn: 'Why did Muslims travel despite the danger of the sea?',
          optionsEn: ['To perform the duty of Hajj', 'For trade only', 'For tourism only'],
        },
      ],
    },
    {
      en: 'Great travelers roamed the earth and sailed the sea from the farthest west to the farthest east; the Islamic world was like a single house, and the Muslims like a single family -- the traveler attained on his journey everything he would find at home.',
      sentences: [
        {
          id: 'qr2-69-032',
          ar: 'وَكَانَ الْجَوَّابُوْنَ يَسِيْحُوْنَ فِي الأَرْضِ ،',
          en: 'Great travelers roamed the earth,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'were' },
            { surface: 'الْجَوَّابُوْنَ', lemma: 'جواب-سياح', pos: 'noun', features: 'def.nom.pl', gloss: 'the great travelers' },
            { surface: 'يَسِيْحُوْنَ', lemma: 'ساح', pos: 'verb', features: 'impf.3mp', gloss: 'roaming' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الأَرْضِ', lemma: 'أرض', pos: 'noun', features: 'def.gen', gloss: 'the earth' },
          ],
        },
        {
          id: 'qr2-69-033',
          ar: 'وَيَرْكَبُوْنَ الْبَحْرَ مِنَ الْمَغْرِبِ الأَقْصَىٰ إِلَىٰ الْمَشْرِقِ الأَقْصَىٰ ،',
          en: 'and sailed the sea from the farthest west to the farthest east,',
          tokens: [
            { surface: 'وَيَرْكَبُوْنَ', lemma: 'ركب', pos: 'verb', features: 'conj+impf.3mp', gloss: 'sail upon' },
            { surface: 'الْبَحْرَ', lemma: 'بحر', pos: 'noun', features: 'def.acc', gloss: 'the sea' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'الْمَغْرِبِ', lemma: 'مغرب', pos: 'noun', features: 'def.gen', gloss: 'the west' },
            { surface: 'الأَقْصَىٰ', lemma: 'أقصى', pos: 'adj', features: 'def.gen', gloss: 'the farthest' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الْمَشْرِقِ', lemma: 'مشرق', pos: 'noun', features: 'def.gen', gloss: 'the east' },
            { surface: 'الأَقْصَىٰ', lemma: 'أقصى', pos: 'adj', features: 'def.gen', gloss: 'the farthest' },
          ],
        },
        {
          id: 'qr2-69-034',
          ar: 'وَكَانَ الْعَالَمُ الإِسْلاَمِيُّ كَبَيْتٍ وَاحِدٍ ،',
          en: 'the Islamic world was like a single house,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'was' },
            { surface: 'الْعَالَمُ', lemma: 'عالم-دنيا', pos: 'noun', features: 'def.nom', gloss: 'the world' },
            { surface: 'الإِسْلاَمِيُّ', lemma: 'إسلامي', pos: 'adj', features: 'def.nom', gloss: 'Islamic' },
            { surface: 'كَبَيْتٍ', lemma: 'بيت', pos: 'noun', features: 'prep+indef.gen', gloss: 'like a house' },
            { surface: 'وَاحِدٍ', lemma: 'واحد', pos: 'adj', features: 'indef.gen', gloss: 'one, single' },
          ],
        },
        {
          id: 'qr2-69-035',
          ar: 'وَالْمُسْلِمُوْنَ كَأُسْرَةٍ وَاحِدَةٍ ،',
          en: 'and the Muslims like a single family,',
          tokens: [
            { surface: 'وَالْمُسْلِمُوْنَ', lemma: 'مسلم', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the Muslims' },
            { surface: 'كَأُسْرَةٍ', lemma: 'أسرة', pos: 'noun', features: 'prep+indef.gen', gloss: 'like a family' },
            { surface: 'وَاحِدَةٍ', lemma: 'واحد', pos: 'adj', features: 'indef.gen', gloss: 'one, single' },
          ],
        },
        {
          id: 'qr2-69-036',
          ar: 'يَنَالُ الْجَوَّابُ فِي السَّفَرِ كُلَّ مَا يَجِدُهُ فِي الْوَطَنِ .',
          en: 'the traveler attained on his journey everything he would find at home.',
          tokens: [
            { surface: 'يَنَالُ', lemma: 'نال', pos: 'verb', features: 'impf.3ms', gloss: 'attains' },
            { surface: 'الْجَوَّابُ', lemma: 'جواب-سياح', pos: 'noun', features: 'def.nom', gloss: 'the traveler' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'on, during' },
            { surface: 'السَّفَرِ', lemma: 'سفر', pos: 'noun', features: 'def.gen', gloss: 'the journey' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'everything' },
            { surface: 'مَا', lemma: 'ما', pos: 'rel', gloss: 'that' },
            { surface: 'يَجِدُهُ', lemma: 'وجد', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'he finds it' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الْوَطَنِ', lemma: 'وطن', pos: 'noun', features: 'def.gen', gloss: 'the homeland' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا شُبِّهَ الْعَالَمُ الإِسْلاَمِيُّ فِي النَّصِّ؟',
          options: ['بِبَيْتٍ وَاحِدٍ وَأُسْرَةٍ وَاحِدَةٍ', 'بِسُوْقٍ كَبِيْرٍ', 'بِمَدْرَسَةٍ'],
          answer: 0,
          qEn: 'What was the Islamic world compared to in the text?',
          optionsEn: ['A single house and a single family', 'A great market', 'A school'],
        },
      ],
    },
    {
      en: '"Family among family, and neighbors among neighbors" -- a traditional expression of the hospitality Muslim travelers found among fellow Muslims abroad.',
      sentences: [
        {
          id: 'qr2-69-037',
          ar: 'أَهْلاً بِأَهْلٍ وَجِيْرَاناً بِجِيْرَانٍ .',
          en: 'Family among family, and neighbors among neighbors.',
          tokens: [
            { surface: 'أَهْلاً', lemma: 'أهل', pos: 'noun', features: 'indef.acc', gloss: 'family, kin' },
            { surface: 'بِأَهْلٍ', lemma: 'أهل', pos: 'noun', features: 'prep+indef.gen', gloss: 'among family' },
            { surface: 'وَجِيْرَاناً', lemma: 'جار', pos: 'noun', features: 'conj+indef.acc.pl', gloss: 'and neighbors' },
            { surface: 'بِجِيْرَانٍ', lemma: 'جار', pos: 'noun', features: 'prep+indef.gen.pl', gloss: 'among neighbors' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا يَعْنِيْ قَوْلُ «أَهْلاً بِأَهْلٍ وَجِيْرَاناً بِجِيْرَانٍ»؟',
          options: ['أَنَّ الْمُسْلِمِيْنَ يَسْتَقْبِلُوْنَ إِخْوَانَهُمُ الْمُسَافِرِيْنَ كَأَهْلٍ وَجِيْرَانٍ', 'أَنَّهُمْ يَرْفُضُوْنَ الْغُرَبَاءَ', 'أَنَّهُمْ لاَ يَعْرِفُوْنَ بَعْضَهُمْ'],
          answer: 0,
          qEn: 'What does the saying "family among family, and neighbors among neighbors" mean?',
          optionsEn: ['That Muslims welcome their traveling brothers as family and neighbors', 'That they refuse strangers', 'That they do not know each other'],
        },
      ],
    },
    {
      en: 'Ibn Battuta the Moroccan, Ibn Jubayr the Andalusian, and Sulaiman the Merchant all traveled to most of the inhabited world by means of these ships.',
      sentences: [
        {
          id: 'qr2-69-038',
          ar: 'وَقَدْ سَافَرَ ابْنُ بَطُّوْطَةَ الْمَغْرِبِيُّ ،',
          en: 'Ibn Battuta the Moroccan traveled,',
          tokens: [
            { surface: 'وَقَدْ', lemma: 'قد', pos: 'part', features: 'conj', gloss: 'and indeed' },
            { surface: 'سَافَرَ', lemma: 'سافر', pos: 'verb', features: 'perf.3ms', gloss: 'traveled' },
            { surface: 'ابْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'the son of' },
            { surface: 'بَطُّوْطَةَ', lemma: 'بطوطة', pos: 'proper', features: 'gen', gloss: 'Battuta' },
            { surface: 'الْمَغْرِبِيُّ', lemma: 'مغربي', pos: 'adj', features: 'def.nom', gloss: 'the Moroccan' },
          ],
        },
        {
          id: 'qr2-69-039',
          ar: 'وَابْنُ جُبَيْرٍ الأَنْدَلُسِيُّ ،',
          en: 'and Ibn Jubayr the Andalusian,',
          tokens: [
            { surface: 'وَابْنُ', lemma: 'ابن', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the son of' },
            { surface: 'جُبَيْرٍ', lemma: 'جبير', pos: 'proper', features: 'gen', gloss: 'Jubayr' },
            { surface: 'الأَنْدَلُسِيُّ', lemma: 'أندلسي', pos: 'adj', features: 'def.nom', gloss: 'the Andalusian' },
          ],
        },
        {
          id: 'qr2-69-040',
          ar: 'وَسُلَيْمَانُ التَّاجِرُ ،',
          en: 'and Sulaiman the Merchant,',
          tokens: [
            { surface: 'وَسُلَيْمَانُ', lemma: 'سليمان', pos: 'proper', features: 'conj+nom', gloss: 'and Sulaiman' },
            { surface: 'التَّاجِرُ', lemma: 'تاجر', pos: 'noun', features: 'def.nom', gloss: 'the merchant' },
          ],
        },
        {
          id: 'qr2-69-041',
          ar: 'إِلَىٰ مُعْظَمِ الْمَعْمُوْرَةِ بِهٰذِهِ السُّفُنِ .',
          en: 'to most of the inhabited world by means of these ships.',
          tokens: [
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مُعْظَمِ', lemma: 'معظم', pos: 'noun', features: 'gen.constr', gloss: 'most of' },
            { surface: 'الْمَعْمُوْرَةِ', lemma: 'معمورة', pos: 'noun', features: 'def.gen', gloss: 'the inhabited world' },
            { surface: 'بِهٰذِهِ', lemma: 'هذه', pos: 'dem', features: 'prep', gloss: 'by means of these' },
            { surface: 'السُّفُنِ', lemma: 'سفينة', pos: 'noun', features: 'def.gen.pl', gloss: 'ships' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ مِنَ الرَّحَّالَةِ سَافَرَ بِهٰذِهِ السُّفُنِ إِلَىٰ مُعْظَمِ الْمَعْمُوْرَةِ؟',
          options: ['ابْنُ بَطُّوْطَةَ وَابْنُ جُبَيْرٍ وَسُلَيْمَانُ التَّاجِرُ', 'كْرِيْسْتُوْفَر كُوْلُمْبُس', 'مَارْكُو بُوْلُو'],
          answer: 0,
          qEn: 'Which travelers journeyed by these ships to most of the inhabited world?',
          optionsEn: ['Ibn Battuta, Ibn Jubayr, and Sulaiman the Merchant', 'Christopher Columbus', 'Marco Polo'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'فَإِنْ وَافَقَتِ الرِّيَاحُ',
        post: 'السَّفِيْنَةُ فِيْ وَقْتٍ قَرِيْبٍ.',
        en: 'If the winds were favorable, the ship arrived in good time.',
        options: ['وَصَلَتِ', 'وَصَلَ', 'تَصِلِيْنَ', 'وَصَلْنَا'],
        answer: 0,
        rationales: [
          '3rd feminine singular past (السَّفِيْنَة, the ship, is feminine).',
          '3rd masculine singular, wrong gender.',
          '2nd feminine singular, wrong person.',
          '1st person plural, wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ النَّاسُ',
        post: 'السَّفَرَ فِي الْبِحَارِ وَيَتَحَامَوْنَهُ.',
        en: 'People used to fear traveling by sea and avoided it.',
        options: ['يَخَافُوْنَ', 'خَافَتْ', 'تَخَافِيْنَ', 'نَخَافُ'],
        answer: 0,
        rationales: [
          '3rd masculine plural present (النَّاس takes plural agreement).',
          'Perfect 3rd feminine singular — wrong tense and number.',
          '2nd feminine singular — wrong person.',
          '1st person plural — wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يُسَافِرُوْنَ لِلْحَجِّ',
        pre: '',
        post: 'لِلْحَجِّ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أُسَافِرُ', 'تُسَافِرُ', 'نُسَافِرُ', 'يُسَافِرُ'],
        answer: 0,
        rationales: ['1st person singular takes the prefix أُـ.', '', '', ''],
      },
      {
        type: 'shift',
        base: 'تَسِيْرُ ثَلاَثَةَ أَمْيَالٍ',
        pre: '',
        post: 'ثَلاَثَةَ أَمْيَالٍ',
        targetPerson: 'هُنَّ',
        targetEn: 'they (f.)',
        options: ['يَسِرْنَ', 'تَسِرْنَ', 'يَسِيْرُوْنَ', 'نَسِيْرُ'],
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

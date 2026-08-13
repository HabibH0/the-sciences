// القراءة الراشدة, volume two, chapter 68 (printed heading "٦٨") --
// السُّلْطَانُ مَحْمُوْدُ بْنُ مُحَمَّدٍ الْغُجْرَاتِي -- "Sultan Mahmud son
// of Muhammad al-Gujarati".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 224-227. Standalone
// chapter: a formal biographical entry on Sultan Mahmud Begada (r. 862-917
// AH) of the Gujarat Sultanate, closing with an explicit citation of its
// source, "al-I'lam bi-man fi tarikh al-Hind min al-A'lam" by 'Abd al-Hayy
// al-Hasani (printed at the end of p.227, followed by the "٭ ٭ ٭" divider);
// neither the citation line nor the divider is tokenized, matching the
// project's standing convention (cf. own ch61/62).
//
// Register note: unlike the narrative "locomotive" chapters (own ch61/62),
// this is dense classical biographical/historical prose -- long strings of
// إضافة and مصدر phrases piled up with commas, very little repeated
// vocabulary, and several stretches (P3, P5) built from asyndetic runs of
// accusative epithets/gerund phrases rather than full verbal clauses. This
// naturally produces an unusually large `newWords` list for one chapter;
// many further content words that were NOT already in the corpus (checked
// against the 536-lemma index and own ch61/62's newWords) are still tagged
// correctly at the token level but were judged too marginal to add to the
// teaching list -- e.g. فَتَحَ، جَعَلَ، مَلَأَ، دُعَاء، قَبْر، جِوَار،
// مَوْلَى، أَهْل، مِيْت، دِيْن، جَنَّة، حَيَاء، حَسَن، كَرِيْم، سَائِر،
// أَطَالَ، عَقَدَ، أَكْثَرَ، صَارَ، تَشَابَهَ، تَعَهَّدَ، سَهَّلَ، تَرْبِيَة.
//
// Paragraphs: 7 blank-line-separated blocks. P1 (title + opening notice,
// birth/accession) on p.224; P2 (extent of his rule, evenhanded justice)
// spans p.224-225; P3 (his public works: mosques, schools, agriculture,
// craftsmen drawn from Persia, Gujarat's resulting prosperity) spans
// p.225-226; P4 (patronage of scholars and hadith-transmitters) on p.226;
// P5 (his character, in a run of asyndetic accusative epithets) on p.226;
// P6 (his 916 AH pilgrimage to Nahrwala Patan, the tomb he built near
// Shaykh Ahmad's grave in Sarkhej, and his dying visit to it) spans
// p.226-227; P7 (death notice and reign length) on p.227.
//
// Sentence segmentation follows the project convention of splitting at
// every ، . ؛ ! ؟ and never at a colon before reported speech: at
// qr2-68-051 the Sultan's own graveside supplication ("وَقَالَ:
// اللَّهُمَّ...") is kept as one clause with the colon, continuing to the
// comma after "رِيَاضِ الْجَنَّةِ" (19 tokens, well past the 3-9 token
// Build-stage window -- this is not a Qur'an/hadith quotation, just the
// standing convention for quoted speech applied to an unusually long one).
//
// Footnoted vocabulary (Nadwi's own glosses, captured as `book_note`):
// خِيَار (p.224 fn.1), اسْتَشْرَفَ (p.225 fn.1), مَكْرُمَة/مَكَارِم
// (p.225 fn.2), إِقْبَالاً كُلِّياً -- folded into the entry for إِقْبَال
// (p.225 fn.3), and رَوْضَة/رِيَاض (p.225 fn.4). The place-name footnotes
// (غُجْرَات p.224 fn.2, مَالْوَة p.224 fn.3, نَهْر وَالَهْ بَتَنْ p.226
// fn.1, سَرْكَهِيْج p.226 fn.2) are folded into the token-level `gloss` on
// those proper nouns instead, matching how place names are handled
// elsewhere in the corpus.
//
// Orthographic variant: the book itself spells the region's name with two
// different initial consonants -- غُجْرَاتُ (p.225, p.226 twice) and
// كُجْرَاتَ (p.225, p.226) -- the vowel pattern (sukun on the second
// radical) is identical in both; only غ vs ك differs. Both tokenized
// under the single lemma 'غجرات' so the app treats them as one
// vocabulary item.
//
// Homograph: مَيْل ("inclination, disposition", qr2-68-027) is spelled
// identically to the مِيْل ("mile") introduced in own ch61 -- unrelated
// senses of the same triliteral root, both new to the learner here.
//
// Proper nouns: مَحْمُوْد (the Sultan), مُحَمَّد (his father), الْغُجْرَاتِيّ
// (his nisba, "of Gujarat"), أَبُو الْفَتْحِ / سَيْفُ الدِّيْنِ (his kunya
// and laqab, honorific titles meaning roughly "Father of Conquest" and
// "Sword of the Faith"), دَاوُدَ شَاهْ (his predecessor), غُجْرَات/كُجْرَات
// (Gujarat), مَالْوَة (Malwa), السِّنْد (Sindh), الْعَرَب / الْعَجَم (the
// Arabs / the non-Arabs, i.e. Persianate lands), الْيَمَن (Yemen), الْهِنْد
// (India), نَهْر وَالَهْ بَتَنْ (Nahrwala Patan, the old Gujarat-sultanate
// capital, also called Anhilwara), سَرْكَهِيْج (Sarkhej, near Ahmadabad),
// الشَّيْخ أَحْمَد (Shaykh Ahmad Khattu Ganj Bakhsh, the Sufi saint buried
// there), and اللهُ / اللَّهُمَّ.
export const CHAPTER = {
  id: 'ch68',
  number: 68,
  title: { ar: 'السُّلْطَانُ مَحْمُوْدُ بْنُ مُحَمَّدٍ الْغُجْرَاتِي', en: 'Sultan Mahmud son of Muhammad al-Gujarati' },
  pages: [224, 225, 226, 227],
  newWords: [ 'استقل', 'جاهد',
    'وسع', 'حد', 'استشرف', 'استولى', 'نصرة', 'إحسان', 'نفذ', 'شرع', 'سياسة',
    'أمضى', 'قصاص', 'خاص', 'مكرمة',
    'تعمير', 'تأسيس', 'زاوية',
    'مثمر', 'تحريض', 'إعانة', 'إجراء', 'إقبال', 'وفد', 'مهندس',
    'حرفة', 'متجرة', 'جلب', 'ترفه',
    'رعية', 'مجبول', 'فاضل', 'آهل',
    'ميمون', 'غاية', 'سجية', 'مؤرخ',
    'مناقب', 'فضائل', 'مذاكرة', 'تفسير', 'التمس', 'أنشأ', 'سلطنة'
  ],
  lemmas: {
    'استقل': { gloss: 'to hold sole, independent power' },
    'جاهد': { gloss: 'to strive, wage jihad' },
    'وسع': { gloss: 'to expand, widen' },
    'حد': { gloss: 'border, limit' },
    'استشرف': { gloss: 'to covet, look longingly toward', book_note: 'اسْتَشْرَفَ يَسْتَشْرِفُ الرَّجُلُ الشيءَ: رَفَعَ بَصَرَهُ يَنظُرُ إِلَيه.' },
    'استولى': { gloss: 'to seize, overpower (اِسْتَوْلَى عَلَى)' },
    'نصرة': { gloss: 'support, aid' },
    'إحسان': { gloss: 'benevolence, kindness' },
    'نفذ': { gloss: 'to execute, carry out' },
    'شرع': { gloss: 'religious law' },
    'سياسة': { gloss: 'governance, statecraft' },
    'أمضى': { gloss: 'to carry through, put into effect' },
    'قصاص': { gloss: 'just legal retribution, retaliation' },
    'خاص': { gloss: 'special, exclusive; (as a noun) one’s own inner circle' },
    'مكرمة': { gloss: 'a noble, virtuous deed', book_note: 'مَكْرُمَة جمع مَكَارِم: فِعل الخَير.' },
    'تعمير': { gloss: 'developing, building up' },
    'تأسيس': { gloss: 'founding, establishing' },
    'زاوية': { gloss: 'Sufi lodge, small religious school' },
    'مثمر': { gloss: 'fruit-bearing' },
    'تحريض': { gloss: 'encouragement, incitement' },
    'إعانة': { gloss: 'assistance, help' },
    'إجراء': { gloss: 'making (something) flow; carrying out' },
    'إقبال': { gloss: 'eager turning toward, wholehearted embrace', book_note: 'إِقْبَالاً كُلِّياً: إِقبالاً تاماً.' },
    'وفد': { gloss: 'to arrive as a delegation, come to (someone)' },
    'مهندس': { gloss: 'engineer' },
    'حرفة': { gloss: 'craft, trade' },
    'متجرة': { gloss: 'a trading hub, center of commerce' },
    'جلب': { gloss: 'to import, bring' },
    'ترفه': { gloss: 'to live in ease, prosper' },
    'رعية': { gloss: 'subjects, citizenry' },
    'مجبول': { gloss: 'innately disposed (مَجْبُوْل عَلَى)' },
    'فاضل': { gloss: 'eminent, excellent (person)' },
    'آهل': { gloss: 'inhabited, populous' },
    'ميمون': { gloss: 'blessed, auspicious' },
    'غاية': { gloss: 'utmost degree, extreme' },
    'سجية': { gloss: 'innate nature, disposition' },
    'مؤرخ': { gloss: 'historian' },
    'مناقب': { gloss: 'virtues, merits (of a person’s life)' },
    'فضائل': { gloss: 'virtues, excellent qualities' },
    'مذاكرة': { gloss: 'study session, scholarly discussion' },
    'تفسير': { gloss: 'Qur’anic exegesis' },
    'التمس': { gloss: 'to seek, request' },
    'أنشأ': { gloss: 'to build, establish, create' },
    'سلطنة': { gloss: 'sultanate, reign' },
    'خيار': { gloss: 'the best, choicest (ones)', book_note: 'خَيْر جمع خِيَار: حَسَن لِذَاتِه أَو ما يُحَقِّقه من نَفعٍ أَو سَعادة.' },
    'روضة': { gloss: 'garden, verdant meadow', book_note: 'رَوْضَة جمع رِياض ورَوْضات: أرض ذات خُضرة وماء.' }
  },
  paragraphs: [
    {
      en: 'The just, striving Sultan Abu al-Fath Sayf al-Din, Mahmud son of Muhammad al-Gujarati, was among the finest of sultans. He was born in Gujarat on the tenth of Ramadan in the year 849 AH, and he assumed the throne after Dawud Shah in the year 862 AH -- and it was a memorable day.',
      sentences: [
        {
          id: 'qr2-68-001',
          ar: 'السُّلْطَانُ الْعَادِلُ الْمُجَاهِدُ ،',
          en: 'The just, striving Sultan,',
          tokens: [
            { surface: 'السُّلْطَانُ', lemma: 'سلطان', pos: 'noun', features: 'def.nom', root: 'س ل ط', gloss: 'the Sultan' },
            { surface: 'الْعَادِلُ', lemma: 'عادل', pos: 'adj', features: 'def.nom', gloss: 'the just' },
            { surface: 'الْمُجَاهِدُ', lemma: 'مجاهد', pos: 'adj', features: 'def.nom', root: 'ج ه د', gloss: 'the striving one, mujahid' },
          ],
        },
        {
          id: 'qr2-68-002',
          ar: 'أَبُو الْفَتْحِ سَيْفُ الدِّيْنِ مَحْمُوْدُ بْنُ مُحَمَّدٍ الْغُجْرَاتِيُّ ،',
          en: 'Abu al-Fath Sayf al-Din, Mahmud son of Muhammad al-Gujarati,',
          tokens: [
            { surface: 'أَبُو', lemma: 'أبو', pos: 'proper', features: 'nom.constr', gloss: '"father of" (kunya prefix; "Abu al-Fath" = "Father of Conquest", an honorific)' },
            { surface: 'الْفَتْحِ', lemma: 'فتح', pos: 'proper', features: 'def.gen', gloss: '"the Conquest" -- second half of the kunya "Abu al-Fath"' },
            { surface: 'سَيْفُ', lemma: 'سيف', pos: 'proper', features: 'nom.constr', gloss: '"Sword of" (honorific laqab prefix)' },
            { surface: 'الدِّيْنِ', lemma: 'دين', pos: 'proper', features: 'def.gen', gloss: '"the Faith" -- together "Sayf al-Din, Sword of the Faith", an honorific title' },
            { surface: 'مَحْمُوْدُ', lemma: 'محمود', pos: 'proper', features: 'nom', gloss: 'Mahmud (the Sultan’s given name)' },
            { surface: 'بْنُ', lemma: 'ابن', pos: 'noun', features: 'nom.constr', gloss: 'son of' },
            { surface: 'مُحَمَّدٍ', lemma: 'محمد', pos: 'proper', features: 'gen', gloss: 'Muhammad (the Sultan’s father)' },
            { surface: 'الْغُجْرَاتِيُّ', lemma: 'غجراتي', pos: 'proper', features: 'def.nom', gloss: 'al-Gujarati, "the one from Gujarat"' },
          ],
        },
        {
          id: 'qr2-68-003',
          ar: 'كَانَ مِنْ خِيَارِ السَّلاَطِيْنِ ،',
          en: 'was among the finest of sultans,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'خِيَارِ', lemma: 'خيار', pos: 'noun', features: 'gen.constr', root: 'خ ي ر', gloss: 'the best, choicest of' },
            { surface: 'السَّلاَطِيْنِ', lemma: 'سلطان', pos: 'noun', features: 'def.gen.pl', root: 'س ل ط', gloss: 'the sultans' },
          ],
        },
        {
          id: 'qr2-68-004',
          ar: 'وَلِدَ بِغُجْرَاتَ فِيْ عَاشِرِ رَمَضَانَ سَنَةَ ٨٤٩ هـ وَقَامَ بِالْمُلْكِ بَعْدَ دَاوُدَ شَاهْ سَنَةَ ٨٦٢ هـ وَكَانَ يَوْماً مَشْهُوْداً.',
          en: 'he was born in Gujarat on the tenth of Ramadan in the year 849 AH, and he assumed the throne after Dawud Shah in the year 862 AH -- and it was a memorable day.',
          tokens: [
            { surface: 'وَلِدَ', lemma: 'ولد', pos: 'verb', features: 'perf.pass.3ms', gloss: 'was born' },
            { surface: 'بِغُجْرَاتَ', lemma: 'غجرات', pos: 'proper', features: 'gen', gloss: 'in Gujarat (a region in northwest India near the Arabian Sea; a major artistic center in the Middle Ages)' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'عَاشِرِ', lemma: 'عاشر', pos: 'noun', features: 'gen.constr', gloss: 'the tenth of' },
            { surface: 'رَمَضَانَ', lemma: 'رمضان', pos: 'proper', features: 'gen', gloss: 'Ramadan' },
            { surface: 'سَنَةَ', lemma: 'سنة', pos: 'noun', features: 'acc.constr', gloss: 'in the year of' },
            { surface: '٨٤٩', lemma: '٨٤٩', pos: 'num', gloss: '849' },
            { surface: 'هـ', lemma: 'هـ', pos: 'noun', gloss: 'AH (abbreviation for "hijrī", the Islamic calendar era)' },
            { surface: 'وَقَامَ', lemma: 'قام', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to rise (to), assume (قَامَ بِالْمُلْكِ = "assumed the throne")' },
            { surface: 'بِالْمُلْكِ', lemma: 'ملك', pos: 'noun', features: 'def.gen', root: 'م ل ك', gloss: 'the throne, kingship' },
            { surface: 'بَعْدَ', lemma: 'بعد', pos: 'prep', gloss: 'after' },
            { surface: 'دَاوُدَ', lemma: 'داود', pos: 'proper', features: 'gen', gloss: 'Dawud, his predecessor as ruler of Gujarat' },
            { surface: 'شَاهْ', lemma: 'شاه', pos: 'proper', gloss: 'Shah (Persian royal title, "Dawud Shah")' },
            { surface: 'سَنَةَ', lemma: 'سنة', pos: 'noun', features: 'acc.constr', gloss: 'in the year of' },
            { surface: '٨٦٢', lemma: '٨٦٢', pos: 'num', gloss: '862' },
            { surface: 'هـ', lemma: 'هـ', pos: 'noun', gloss: 'AH' },
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'يَوْماً', lemma: 'يوم', pos: 'noun', features: 'indef.acc', gloss: 'a day' },
            { surface: 'مَشْهُوْداً', lemma: 'مشهود', pos: 'adj', features: 'indef.acc', root: 'ش هـ د', gloss: 'memorable, witnessed' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَتَى وُلِدَ السُّلْطَانُ مَحْمُوْدٌ؟',
          options: ['فِيْ عَاشِرِ رَمَضَانَ سَنَةَ ٨٤٩ هـ', 'فِيْ عَاشِرِ رَمَضَانَ سَنَةَ ٨٦٢ هـ', 'فِيْ عَاشِرِ شَوَّالٍ سَنَةَ ٨٤٩ هـ'],
          answer: 0,
          qEn: 'When was Sultan Mahmud born?',
          optionsEn: ['On the tenth of Ramadan, 849 AH', 'On the tenth of Ramadan, 862 AH', 'On the tenth of Shawwal, 849 AH'],
        },
      ],
    },
    {
      en: 'He held sole power for fifty-five years, and strove in God’s cause with the full measure of striving, and expanded the borders of his kingdom to Malwa and to the lands of Sindh. Yet in all that long span he never coveted the lands of the Muslims nor cast a longing eye on them; and whenever the strong among them overpowered the weak, he came to the weak one’s aid. He was ever one who upheld justice and benevolence, enforcing the ruling of the Sharia in matters of state and carrying through the ruling of just retribution -- and no one among the state’s own great men, even those closest to him, escaped adherence to the Sharia.',
      sentences: [
        {
          id: 'qr2-68-005',
          ar: 'اسْتَقَلَّ بِالْمُلْكِ خَمْساً وَخَمْسِيْنَ سَنَةً ،',
          en: 'He held sole power for fifty-five years,',
          tokens: [
            { surface: 'اسْتَقَلَّ', lemma: 'استقل', pos: 'verb', features: 'perf.3ms', root: 'ق ل ل', gloss: 'to hold sole, independent power' },
            { surface: 'بِالْمُلْكِ', lemma: 'ملك', pos: 'noun', features: 'def.gen', gloss: 'over the kingdom' },
            { surface: 'خَمْساً', lemma: 'خمس', pos: 'num', features: 'indef.acc', gloss: 'five' },
            { surface: 'وَخَمْسِيْنَ', lemma: 'خمسين', pos: 'num', features: 'conj+indef.acc', gloss: 'and fifty' },
            { surface: 'سَنَةً', lemma: 'سنة', pos: 'noun', features: 'indef.acc', gloss: 'years' },
          ],
        },
        {
          id: 'qr2-68-006',
          ar: 'وَجَاهَدَ فِي اللهِ حَقَّ الْجِهَادِ ،',
          en: 'and strove in God’s cause with the full measure of striving,',
          tokens: [
            { surface: 'وَجَاهَدَ', lemma: 'جاهد', pos: 'verb', features: 'conj+perf.3ms', root: 'ج ه د', gloss: 'to strive, wage jihad' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in the cause of' },
            { surface: 'اللهِ', lemma: 'الله', pos: 'proper', features: 'gen', gloss: 'Allah' },
            { surface: 'حَقَّ', lemma: 'حق', pos: 'noun', features: 'acc.constr', gloss: 'the full, true measure of' },
            { surface: 'الْجِهَادِ', lemma: 'جهاد', pos: 'noun', features: 'def.gen', root: 'ج ه د', gloss: 'the striving, jihad' },
          ],
        },
        {
          id: 'qr2-68-007',
          ar: 'وَوَسَّعَ حُدُوْدَ مُلْكِهِ إِلَىٰ مَالْوَةَ ،',
          en: 'and expanded the borders of his kingdom to Malwa,',
          tokens: [
            { surface: 'وَوَسَّعَ', lemma: 'وسع', pos: 'verb', features: 'conj+perf.3ms', root: 'و س ع', gloss: 'to expand, widen' },
            { surface: 'حُدُوْدَ', lemma: 'حد', pos: 'noun', features: 'acc.constr.pl', root: 'ح د د', gloss: 'the borders of' },
            { surface: 'مُلْكِهِ', lemma: 'ملك', pos: 'noun', features: 'gen+3ms', gloss: 'his kingdom' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مَالْوَةَ', lemma: 'مالوة', pos: 'proper', features: 'gen', gloss: 'Malwa (an old region, now in Madhya Pradesh, India; a major cultural center in the 10th century CE)' },
          ],
        },
        {
          id: 'qr2-68-008',
          ar: 'وَإِلَىٰ بِلاَدِ السِّنْدِ ،',
          en: 'and to the lands of Sindh,',
          tokens: [
            { surface: 'وَإِلَىٰ', lemma: 'إلى', pos: 'prep', features: 'conj', gloss: 'and to' },
            { surface: 'بِلاَدِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the lands of' },
            { surface: 'السِّنْدِ', lemma: 'سند', pos: 'proper', features: 'def.gen', gloss: 'Sindh (a region, now in Pakistan)' },
          ],
        },
        {
          id: 'qr2-68-009',
          ar: 'وَلٰكِنَّهُ فِيْ تِلْكَ الْمُدَّةِ الطَّوِيْلَةِ لَمْ يَطْمَحْ إِلَىٰ بِلاَدِ الْمُسْلِمِيْنَ وَلَمْ يَسْتَشْرِفْ لَهَا ،',
          en: 'yet in all that long span he never coveted the lands of the Muslims nor cast a longing eye on them,',
          tokens: [
            { surface: 'وَلٰكِنَّهُ', lemma: 'لكن', pos: 'part', features: 'conj+3ms', gloss: 'yet he' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'تِلْكَ', lemma: 'تلك', pos: 'dem', gloss: 'that (f.)' },
            { surface: 'الْمُدَّةِ', lemma: 'مدة', pos: 'noun', features: 'def.gen', root: 'م د د', gloss: 'the period, span' },
            { surface: 'الطَّوِيْلَةِ', lemma: 'طويل', pos: 'adj', features: 'def.gen', gloss: 'the long' },
            { surface: 'لَمْ', lemma: 'لم', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَطْمَحْ', lemma: 'طمح', pos: 'verb', features: 'jussive.3ms', root: 'ط م ح', gloss: 'to aspire to, covet' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'بِلاَدِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the lands of' },
            { surface: 'الْمُسْلِمِيْنَ', lemma: 'مسلم', pos: 'noun', features: 'def.gen.pl', gloss: 'the Muslims' },
            { surface: 'وَلَمْ', lemma: 'لم', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَسْتَشْرِفْ', lemma: 'استشرف', pos: 'verb', features: 'jussive.3ms', root: 'ش ر ف', gloss: 'to covet, look longingly toward' },
            { surface: 'لَهَا', lemma: 'ل', pos: 'prep', features: '3fs', gloss: 'at them (i.e. the lands)' },
          ],
        },
        {
          id: 'qr2-68-010',
          ar: 'وَإِذَا اسْتَوْلَىٰ الْقَوِيُّ مِنْهُمْ عَلَىٰ الضَّعِيْفِ قَامَ بِنُصْرَةِ الضَّعِيْفِ ،',
          en: 'and whenever the strong among them overpowered the weak, he came to the weak one’s aid,',
          tokens: [
            { surface: 'وَإِذَا', lemma: 'إذا', pos: 'part', features: 'conj', gloss: 'and whenever' },
            { surface: 'اسْتَوْلَىٰ', lemma: 'استولى', pos: 'verb', features: 'perf.3ms', root: 'و ل ي', gloss: 'to seize, overpower' },
            { surface: 'الْقَوِيُّ', lemma: 'قوي', pos: 'adj', features: 'def.nom', gloss: 'the strong one' },
            { surface: 'مِنْهُمْ', lemma: 'من', pos: 'prep', features: '3mp', gloss: 'among them' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'over' },
            { surface: 'الضَّعِيْفِ', lemma: 'ضعيف', pos: 'adj', features: 'def.gen', gloss: 'the weak one' },
            { surface: 'قَامَ', lemma: 'قام', pos: 'verb', features: 'perf.3ms', gloss: 'to come to, undertake' },
            { surface: 'بِنُصْرَةِ', lemma: 'نصرة', pos: 'noun', features: 'gen.constr', root: 'ن ص ر', gloss: 'the aid of' },
            { surface: 'الضَّعِيْفِ', lemma: 'ضعيف', pos: 'adj', features: 'def.gen', gloss: 'the weak one' },
          ],
        },
        {
          id: 'qr2-68-011',
          ar: 'وَكَانَ قَائِماً بِالْعَدْلِ وَالإِحْسَانِ ،',
          en: 'He was ever one who upheld justice and benevolence,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'قَائِماً', lemma: 'قائم', pos: 'adj', features: 'indef.acc', gloss: 'upholding, maintaining' },
            { surface: 'بِالْعَدْلِ', lemma: 'عدل', pos: 'noun', features: 'def.gen', gloss: 'justice' },
            { surface: 'وَالإِحْسَانِ', lemma: 'إحسان', pos: 'noun', features: 'conj+def.gen', root: 'ح س ن', gloss: 'and benevolence, kindness' },
          ],
        },
        {
          id: 'qr2-68-012',
          ar: 'يُنَفِّذُ أَمْرَ الشَّرْعِ فِي السِّيَاسَةِ ،',
          en: 'enforcing the ruling of the Sharia in matters of state,',
          tokens: [
            { surface: 'يُنَفِّذُ', lemma: 'نفذ', pos: 'verb', features: 'impf.3ms', root: 'ن ف ذ', gloss: 'to execute, carry out' },
            { surface: 'أَمْرَ', lemma: 'أمر', pos: 'noun', features: 'acc.constr', gloss: 'the ruling of' },
            { surface: 'الشَّرْعِ', lemma: 'شرع', pos: 'noun', features: 'def.gen', root: 'ش ر ع', gloss: 'the religious law' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'السِّيَاسَةِ', lemma: 'سياسة', pos: 'noun', features: 'def.gen', root: 'س و س', gloss: 'governance, matters of state' },
          ],
        },
        {
          id: 'qr2-68-013',
          ar: 'وَيُمْضِيْ حُكْمَ الْقِصَاصِ ،',
          en: 'and carrying through the ruling of just retribution,',
          tokens: [
            { surface: 'وَيُمْضِيْ', lemma: 'أمضى', pos: 'verb', features: 'conj+impf.3ms', root: 'م ض ي', gloss: 'to carry through, put into effect' },
            { surface: 'حُكْمَ', lemma: 'حكم', pos: 'noun', features: 'acc.constr', gloss: 'the ruling of' },
            { surface: 'الْقِصَاصِ', lemma: 'قصاص', pos: 'noun', features: 'def.gen', root: 'ق ص ص', gloss: 'just legal retribution, retaliation' },
          ],
        },
        {
          id: 'qr2-68-014',
          ar: 'وَلاَ يَمْنَعُ كَوْنُ أَحَدٍ مِنْ عُظَمَاءِ الْمُلْكِ الْخَاصَّةِ بِهِ أَلاَّ يَعْمَلَ بِالشَّرِيْعَةِ.',
          en: 'and no one among the state’s own great men, even those closest to him, escaped adherence to the Sharia.',
          tokens: [
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَمْنَعُ', lemma: 'منع', pos: 'verb', features: 'impf.3ms', gloss: 'to prevent' },
            { surface: 'كَوْنُ', lemma: 'كان', pos: 'noun', features: 'nom.constr', gloss: 'the being (of), the fact that' },
            { surface: 'أَحَدٍ', lemma: 'أحد', pos: 'noun', features: 'indef.gen', gloss: 'someone, one' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'عُظَمَاءِ', lemma: 'عظيم', pos: 'noun', features: 'gen.constr.pl', gloss: 'the great ones of' },
            { surface: 'الْمُلْكِ', lemma: 'ملك', pos: 'noun', features: 'def.gen', gloss: 'the state' },
            { surface: 'الْخَاصَّةِ', lemma: 'خاص', pos: 'noun', features: 'def.gen', root: 'خ ص ص', gloss: 'the inner circle, those close (to him)' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'أَلاَّ', lemma: 'ألا', pos: 'part', features: 'neg', gloss: 'that ... not (contraction of أَنْ + لاَ)' },
            { surface: 'يَعْمَلَ', lemma: 'عمل', pos: 'verb', features: 'subj.3ms', gloss: 'to act, comply' },
            { surface: 'بِالشَّرِيْعَةِ', lemma: 'شريعة', pos: 'noun', features: 'def.gen', root: 'ش ر ع', gloss: 'according to the Sharia' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَفْعَلُ السُّلْطَانُ إِذَا اسْتَوْلَى الْقَوِيُّ عَلَى الضَّعِيْفِ؟',
          options: ['يَقُوْمُ بِنُصْرَةِ الضَّعِيْفِ', 'يَتْرُكُهُمَا', 'يُسَاعِدُ الْقَوِيَّ'],
          answer: 0,
          qEn: 'What did the Sultan do whenever the strong overpowered the weak?',
          optionsEn: ['He came to the weak one’s aid', 'He left them alone', 'He helped the strong one'],
        },
        {
          q: 'إِلَى أَيْنَ وَسَّعَ السُّلْطَانُ حُدُوْدَ مُلْكِهِ؟',
          options: ['إِلَى مَالْوَةَ وَبِلاَدِ السِّنْدِ', 'إِلَى بِلاَدِ الْعَرَبِ', 'إِلَى بِلاَدِ الْيَمَنِ'],
          answer: 0,
          qEn: 'To where did the Sultan expand the borders of his kingdom?',
          optionsEn: ['To Malwa and the lands of Sindh', 'To the lands of the Arabs', 'To the lands of Yemen'],
        },
      ],
    },
    {
      en: 'Among his noble deeds was his work developing the land and founding mosques, schools, and Sufi lodges; increasing cultivation and planting fruit-bearing trees; building gardens and orchards; urging the people toward that; and helping them dig wells and channel springs. Because of this the people turned to him wholeheartedly, and builders, engineers, and craftsmen and artisans came to him from the lands of the Persians and set to work at their crafts and trades -- so that Gujarat became verdant gardens abundant with pools and wells, gardens, crops, and fine fruits, and the land of Gujarat became a trading center from which fine cloth was carried to other lands -- all of that through its Sultan Mahmud Shah’s inclination toward whatever would benefit the kingdom and the state, and bring ease to his subjects.',
      sentences: [
        {
          id: 'qr2-68-015',
          ar: 'وَمِنْ مَكَارِمِهِ قِيَامُهُ بِتَعْمِيْرِ الْبِلاَدِ وَتَأْسِيْسِ الْمَسَاجِدِ ،',
          en: 'Among his noble deeds was his work developing the land and founding mosques,',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'من', pos: 'prep', features: 'conj', gloss: 'and among' },
            { surface: 'مَكَارِمِهِ', lemma: 'مكرمة', pos: 'noun', features: 'gen.pl+3ms', root: 'ك ر م', gloss: 'his noble deeds' },
            { surface: 'قِيَامُهُ', lemma: 'قيام', pos: 'noun', features: 'nom+3ms', gloss: 'his undertaking' },
            { surface: 'بِتَعْمِيْرِ', lemma: 'تعمير', pos: 'noun', features: 'gen.constr', root: 'ع م ر', gloss: 'the developing of' },
            { surface: 'الْبِلاَدِ', lemma: 'بلد', pos: 'noun', features: 'def.gen.pl', gloss: 'the land, the country' },
            { surface: 'وَتَأْسِيْسِ', lemma: 'تأسيس', pos: 'noun', features: 'conj+gen.constr', root: 'أ س س', gloss: 'and the founding of' },
            { surface: 'الْمَسَاجِدِ', lemma: 'مسجد', pos: 'noun', features: 'def.gen.pl', gloss: 'the mosques' },
          ],
        },
        {
          id: 'qr2-68-016',
          ar: 'وَالْمَدَارِسِ وَالزَّوَايَا ،',
          en: 'schools, and Sufi lodges,',
          tokens: [
            { surface: 'وَالْمَدَارِسِ', lemma: 'مدرسة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the schools' },
            { surface: 'وَالزَّوَايَا', lemma: 'زاوية', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the Sufi lodges' },
          ],
        },
        {
          id: 'qr2-68-017',
          ar: 'وَتَكْثِيْرِ الزِّرَاعَةِ وَغَرْسِ الأَشْجَارِ الْمُثْمِرَةِ ،',
          en: 'increasing cultivation and planting fruit-bearing trees,',
          tokens: [
            { surface: 'وَتَكْثِيْرِ', lemma: 'تكثير', pos: 'noun', features: 'conj+gen.constr', root: 'ك ث ر', gloss: 'and the increasing of' },
            { surface: 'الزِّرَاعَةِ', lemma: 'زراعة', pos: 'noun', features: 'def.gen', root: 'ز ر ع', gloss: 'agriculture, cultivation' },
            { surface: 'وَغَرْسِ', lemma: 'غرس', pos: 'noun', features: 'conj+gen.constr', root: 'غ ر س', gloss: 'and the planting of' },
            { surface: 'الأَشْجَارِ', lemma: 'شجر', pos: 'noun', features: 'def.gen.pl', gloss: 'the trees' },
            { surface: 'الْمُثْمِرَةِ', lemma: 'مثمر', pos: 'adj', features: 'def.gen', root: 'ث م ر', gloss: 'fruit-bearing' },
          ],
        },
        {
          id: 'qr2-68-018',
          ar: 'وَبِنَاءِ الْحَدَائِقِ وَالْبَسَاتِيْنِ ،',
          en: 'building gardens and orchards,',
          tokens: [
            { surface: 'وَبِنَاءِ', lemma: 'بناء', pos: 'noun', features: 'conj+gen.constr', gloss: 'and the building of' },
            { surface: 'الْحَدَائِقِ', lemma: 'حديقة', pos: 'noun', features: 'def.gen.pl', gloss: 'the gardens' },
            { surface: 'وَالْبَسَاتِيْنِ', lemma: 'بستان', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the orchards' },
          ],
        },
        {
          id: 'qr2-68-019',
          ar: 'وَتَحْرِيْضِ النَّاسِ عَلَىٰ ذٰلِكَ ،',
          en: 'urging the people toward that,',
          tokens: [
            { surface: 'وَتَحْرِيْضِ', lemma: 'تحريض', pos: 'noun', features: 'conj+gen.constr', root: 'ح ر ض', gloss: 'and the urging of' },
            { surface: 'النَّاسِ', lemma: 'ناس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'toward' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
          ],
        },
        {
          id: 'qr2-68-020',
          ar: 'وَإِعَانَتِهِمْ بِحَفْرِ الآبَارِ وَإِجْرَاءِ الْعُيُوْنِ ،',
          en: 'and helping them dig wells and channel springs,',
          tokens: [
            { surface: 'وَإِعَانَتِهِمْ', lemma: 'إعانة', pos: 'noun', features: 'conj+gen+3mp', root: 'ع و ن', gloss: 'and helping them' },
            { surface: 'بِحَفْرِ', lemma: 'حفر', pos: 'noun', features: 'gen.constr', root: 'ح ف ر', gloss: 'in digging' },
            { surface: 'الآبَارِ', lemma: 'بئر', pos: 'noun', features: 'def.gen.pl', root: 'ب أ ر', gloss: 'the wells' },
            { surface: 'وَإِجْرَاءِ', lemma: 'إجراء', pos: 'noun', features: 'conj+gen.constr', root: 'ج ر ي', gloss: 'and the running, channeling of' },
            { surface: 'الْعُيُوْنِ', lemma: 'عين', pos: 'noun', features: 'def.gen.pl', gloss: 'the springs' },
          ],
        },
        {
          id: 'qr2-68-021',
          ar: 'وَلِذٰلِكَ أَقْبَلَ عَلَيْهِ النَّاسُ إِقْبَالاً كُلِّيّاً ،',
          en: 'Because of this the people turned to him wholeheartedly,',
          tokens: [
            { surface: 'وَلِذٰلِكَ', lemma: 'ذلك', pos: 'dem', features: 'conj', gloss: 'and because of that' },
            { surface: 'أَقْبَلَ', lemma: 'أقبل', pos: 'verb', features: 'perf.3ms', root: 'ق ب ل', gloss: 'to turn toward, embrace' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'إِقْبَالاً', lemma: 'إقبال', pos: 'noun', features: 'indef.acc', root: 'ق ب ل', gloss: 'a turning toward, embrace' },
            { surface: 'كُلِّيّاً', lemma: 'كلي', pos: 'adj', features: 'indef.acc', gloss: 'total, complete' },
          ],
        },
        {
          id: 'qr2-68-022',
          ar: 'وَوَفَدَ عَلَيْهِ الْبَنَّاؤُوْنَ وَالْمُهَنْدِسُوْنَ وَأَهْلُ الْحِرَفِ وَالصَّنَائِعِ مِنْ بِلاَدِ الْعَجَمِ ،',
          en: 'and builders, engineers, and craftsmen and artisans came to him from the lands of the Persians,',
          tokens: [
            { surface: 'وَوَفَدَ', lemma: 'وفد', pos: 'verb', features: 'conj+perf.3ms', root: 'و ف د', gloss: 'to arrive as a delegation, come to' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'الْبَنَّاؤُوْنَ', lemma: 'بناء-فاعل', pos: 'noun', features: 'def.nom.pl', root: 'ب ن ي', gloss: 'the builders, masons' },
            { surface: 'وَالْمُهَنْدِسُوْنَ', lemma: 'مهندس', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the engineers' },
            { surface: 'وَأَهْلُ', lemma: 'أهل', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the people of' },
            { surface: 'الْحِرَفِ', lemma: 'حرفة', pos: 'noun', features: 'def.gen.pl', root: 'ح ر ف', gloss: 'the crafts, trades' },
            { surface: 'وَالصَّنَائِعِ', lemma: 'صناعة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the industries, crafts' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'بِلاَدِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the lands of' },
            { surface: 'الْعَجَمِ', lemma: 'عجم', pos: 'proper', features: 'def.gen', gloss: 'the non-Arabs, Persian-speaking lands' },
          ],
        },
        {
          id: 'qr2-68-023',
          ar: 'فَقَامُوْا بِحِرَفِهِمْ وَصَنَائِعِهِمْ ،',
          en: 'and set to work at their crafts and trades,',
          tokens: [
            { surface: 'فَقَامُوْا', lemma: 'قام', pos: 'verb', features: 'conj+perf.3mp', gloss: 'to undertake, set to (work)' },
            { surface: 'بِحِرَفِهِمْ', lemma: 'حرفة', pos: 'noun', features: 'gen.pl+3mp', gloss: 'their crafts, trades' },
            { surface: 'وَصَنَائِعِهِمْ', lemma: 'صناعة', pos: 'noun', features: 'conj+gen.pl+3mp', gloss: 'and their industries' },
          ],
        },
        {
          id: 'qr2-68-024',
          ar: 'فَصَارَتْ غُجْرَاتُ رِيَاضاً مُخْضَرَّةً بِكَثْرَةِ الْحِيَاضِ وَالآبَارِ ،',
          en: 'so that Gujarat became verdant gardens abundant with pools and wells,',
          tokens: [
            { surface: 'فَصَارَتْ', lemma: 'صار', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become' },
            { surface: 'غُجْرَاتُ', lemma: 'غجرات', pos: 'proper', features: 'nom', gloss: 'Gujarat' },
            { surface: 'رِيَاضاً', lemma: 'روضة', pos: 'noun', features: 'indef.acc.pl', root: 'ر و ض', gloss: 'verdant gardens' },
            { surface: 'مُخْضَرَّةً', lemma: 'مخضر', pos: 'adj', features: 'indef.acc', gloss: 'verdant, lush green' },
            { surface: 'بِكَثْرَةِ', lemma: 'كثرة', pos: 'noun', features: 'gen.constr', gloss: 'with the abundance of' },
            { surface: 'الْحِيَاضِ', lemma: 'حوض', pos: 'noun', features: 'def.gen.pl', gloss: 'the pools, basins' },
            { surface: 'وَالآبَارِ', lemma: 'بئر', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the wells' },
          ],
        },
        {
          id: 'qr2-68-025',
          ar: 'وَالْحَدَائِقِ وَالزُّرُوْعِ وَالْفَوَاكِهِ الطَّيِّبَةِ ،',
          en: 'gardens, crops, and fine fruits,',
          tokens: [
            { surface: 'وَالْحَدَائِقِ', lemma: 'حديقة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the gardens' },
            { surface: 'وَالزُّرُوْعِ', lemma: 'زرع', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the crops' },
            { surface: 'وَالْفَوَاكِهِ', lemma: 'فاكهة', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the fruits' },
            { surface: 'الطَّيِّبَةِ', lemma: 'طيب', pos: 'adj', features: 'def.gen', gloss: 'the good, delicious' },
          ],
        },
        {
          id: 'qr2-68-026',
          ar: 'وَصَارَتْ بِلاَدُ كُجْرَاتَ مَتْجَرَةً تُجْلَبُ مِنْهَا الثِّيَابُ الرَّفِيْعَةُ إِلَىٰ بِلاَدٍ أُخْرَىٰ ،',
          en: 'and the land of Gujarat became a trading center from which fine cloth was carried to other lands,',
          tokens: [
            { surface: 'وَصَارَتْ', lemma: 'صار', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to become' },
            { surface: 'بِلاَدُ', lemma: 'بلد', pos: 'noun', features: 'nom.constr.pl', gloss: 'the land of' },
            { surface: 'كُجْرَاتَ', lemma: 'غجرات', pos: 'proper', features: 'gen', gloss: 'Gujarat (the book’s alternate spelling كُجْرَات for the same place)' },
            { surface: 'مَتْجَرَةً', lemma: 'متجرة', pos: 'noun', features: 'indef.acc', root: 'ت ج ر', gloss: 'a trading hub, center of commerce' },
            { surface: 'تُجْلَبُ', lemma: 'جلب', pos: 'verb', features: 'impf.pass.3fs', root: 'ج ل ب', gloss: 'to be brought, imported' },
            { surface: 'مِنْهَا', lemma: 'من', pos: 'prep', features: '3fs', gloss: 'from it' },
            { surface: 'الثِّيَابُ', lemma: 'ثوب', pos: 'noun', features: 'def.nom.pl', gloss: 'the garments, cloth' },
            { surface: 'الرَّفِيْعَةُ', lemma: 'رفيع', pos: 'adj', features: 'def.nom', gloss: 'fine, high-quality' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'بِلاَدٍ', lemma: 'بلد', pos: 'noun', features: 'indef.gen.pl', gloss: 'lands' },
            { surface: 'أُخْرَىٰ', lemma: 'آخر', pos: 'adj', features: 'indef.gen', gloss: 'other' },
          ],
        },
        {
          id: 'qr2-68-027',
          ar: 'وَذٰلِكَ كُلُّهُ بِمَيْلِ سُلْطَانِهَا مَحْمُوْدْ شَاهْ إِلَىٰ مَا يَصْلُحُ بِهِ الْمُلْكُ وَالدَّوْلَةُ ،',
          en: 'all of that through its Sultan Mahmud Shah’s inclination toward whatever would benefit the kingdom and the state,',
          tokens: [
            { surface: 'وَذٰلِكَ', lemma: 'ذلك', pos: 'dem', features: 'conj', gloss: 'and that' },
            { surface: 'كُلُّهُ', lemma: 'كل', pos: 'noun', features: 'nom+3ms', gloss: 'all of it' },
            { surface: 'بِمَيْلِ', lemma: 'ميل', pos: 'noun', features: 'gen.constr', root: 'م ي ل', gloss: 'through the inclination of' },
            { surface: 'سُلْطَانِهَا', lemma: 'سلطان', pos: 'noun', features: 'gen+3fs', gloss: 'its Sultan' },
            { surface: 'مَحْمُوْدْ', lemma: 'محمود', pos: 'proper', gloss: 'Mahmud' },
            { surface: 'شَاهْ', lemma: 'شاه', pos: 'proper', gloss: 'Shah' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'toward' },
            { surface: 'مَا', lemma: 'ما', pos: 'rel', gloss: 'what, that which' },
            { surface: 'يَصْلُحُ', lemma: 'صلح', pos: 'verb', features: 'impf.3ms', gloss: 'to be good, beneficial' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'through it' },
            { surface: 'الْمُلْكُ', lemma: 'ملك', pos: 'noun', features: 'def.nom', gloss: 'the kingdom' },
            { surface: 'وَالدَّوْلَةُ', lemma: 'دولة', pos: 'noun', features: 'conj+def.nom', root: 'د و ل', gloss: 'and the state' },
          ],
        },
        {
          id: 'qr2-68-028',
          ar: 'وَيَتَرَفَّهُ بِهِ رَعَايَاهُ.',
          en: 'and bring ease to his subjects.',
          tokens: [
            { surface: 'وَيَتَرَفَّهُ', lemma: 'ترفه', pos: 'verb', features: 'conj+impf.3ms', root: 'ر ف هـ', gloss: 'to live in ease, prosper' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'by it' },
            { surface: 'رَعَايَاهُ', lemma: 'رعية', pos: 'noun', features: 'nom.pl+3ms', root: 'ر ع ي', gloss: 'his subjects' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنْ وَفَدَ عَلَى السُّلْطَانِ مِنْ بِلاَدِ الْعَجَمِ؟',
          options: ['الْبَنَّاؤُوْنَ وَالْمُهَنْدِسُوْنَ وَأَهْلُ الْحِرَفِ', 'التُّجَّارُ فَقَطْ', 'الْجُنُوْدُ'],
          answer: 0,
          qEn: 'Who came to the Sultan from the lands of the Persians?',
          optionsEn: ['Builders, engineers, and craftsmen', 'Merchants only', 'Soldiers'],
        },
        {
          q: 'بِمَاذَا صَارَتْ غُجْرَاتُ بَعْدَ عِمَارَتِهَا؟',
          options: ['رِيَاضاً مُخْضَرَّةً وَمَتْجَرَةً', 'صَحْرَاءَ قَاحِلَةً', 'مَدِيْنَةً مَهْجُوْرَةً'],
          answer: 0,
          qEn: 'What did Gujarat become after this development?',
          optionsEn: ['Verdant gardens and a trading center', 'A barren desert', 'An abandoned city'],
        },
      ],
    },
    {
      en: 'Among his noble deeds, too, was his nurturing of scholars and righteous people, since he was naturally inclined to love knowledge and its people; so a great many of the finest Arabs gathered in his presence, until the land of Gujarat became thriving and full of scholars, hadith scholars came to him from the Arab lands, and the people turned eagerly to the noble Hadith -- so that Gujarat came to resemble blessed Yemen, and surpassed the rest of the lands of India in that.',
      sentences: [
        {
          id: 'qr2-68-029',
          ar: 'وَمِنْ مَكَارِمِهِ قِيَامُهُ بِتَرْبِيَةِ الْعُلَمَاءِ وَالصَّالِحِيْنَ لِمَا كَانَ مَجْبُوْلاً عَلَىٰ حُبِّ الْعِلْمِ وَأَهْلِهِ ،',
          en: 'Among his noble deeds, too, was his nurturing of scholars and righteous people, since he was naturally inclined to love knowledge and its people,',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'من', pos: 'prep', features: 'conj', gloss: 'and among' },
            { surface: 'مَكَارِمِهِ', lemma: 'مكرمة', pos: 'noun', features: 'gen.pl+3ms', gloss: 'his noble deeds' },
            { surface: 'قِيَامُهُ', lemma: 'قيام', pos: 'noun', features: 'nom+3ms', gloss: 'his undertaking' },
            { surface: 'بِتَرْبِيَةِ', lemma: 'تربية', pos: 'noun', features: 'gen.constr', gloss: 'the nurturing of' },
            { surface: 'الْعُلَمَاءِ', lemma: 'عالم', pos: 'noun', features: 'def.gen.pl', root: 'ع ل م', gloss: 'the scholars' },
            { surface: 'وَالصَّالِحِيْنَ', lemma: 'صالح', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the righteous' },
            { surface: 'لِمَا', lemma: 'ما', pos: 'rel', features: 'prep', gloss: 'because' },
            { surface: 'كَانَ', lemma: 'كان', pos: 'verb', features: 'perf.3ms', gloss: 'to be' },
            { surface: 'مَجْبُوْلاً', lemma: 'مجبول', pos: 'adj', features: 'indef.acc', root: 'ج ب ل', gloss: 'innately disposed' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'to' },
            { surface: 'حُبِّ', lemma: 'حب', pos: 'noun', features: 'gen.constr', gloss: 'the love of' },
            { surface: 'الْعِلْمِ', lemma: 'علم', pos: 'noun', features: 'def.gen', gloss: 'knowledge' },
            { surface: 'وَأَهْلِهِ', lemma: 'أهل', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and its people' },
          ],
        },
        {
          id: 'qr2-68-030',
          ar: 'فَاجْتَمَعَ فِيْ حَضْرَتِهِ خَلْقٌ كَثِيْرٌ مِنْ أَفَاضِلِ الْعَرَبِ ،',
          en: 'so a great many of the finest Arabs gathered in his presence,',
          tokens: [
            { surface: 'فَاجْتَمَعَ', lemma: 'اجتمع', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to gather' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'حَضْرَتِهِ', lemma: 'حضرة', pos: 'noun', features: 'gen+3ms', root: 'ح ض ر', gloss: 'his presence, court' },
            { surface: 'خَلْقٌ', lemma: 'خلق', pos: 'noun', features: 'indef.nom', gloss: 'a great number, crowd of people' },
            { surface: 'كَثِيْرٌ', lemma: 'كثير', pos: 'adj', features: 'indef.nom', gloss: 'many' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'of, from among' },
            { surface: 'أَفَاضِلِ', lemma: 'فاضل', pos: 'noun', features: 'gen.constr.pl', root: 'ف ض ل', gloss: 'the eminent ones of' },
            { surface: 'الْعَرَبِ', lemma: 'عرب', pos: 'proper', features: 'def.gen', gloss: 'the Arabs' },
          ],
        },
        {
          id: 'qr2-68-031',
          ar: 'حَتَّىٰ صَارَتْ بِلاَدُ كُجْرَاتَ عَامِرَةً آهِلَةً بِالْعُلَمَاءِ ،',
          en: 'until the land of Gujarat became thriving and full of scholars,',
          tokens: [
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'صَارَتْ', lemma: 'صار', pos: 'verb', features: 'perf.3fs', gloss: 'to become' },
            { surface: 'بِلاَدُ', lemma: 'بلد', pos: 'noun', features: 'nom.constr.pl', gloss: 'the land of' },
            { surface: 'كُجْرَاتَ', lemma: 'غجرات', pos: 'proper', features: 'gen', gloss: 'Gujarat' },
            { surface: 'عَامِرَةً', lemma: 'عامر', pos: 'adj', features: 'indef.acc', gloss: 'thriving, flourishing' },
            { surface: 'آهِلَةً', lemma: 'آهل', pos: 'adj', features: 'indef.acc', root: 'أ هـ ل', gloss: 'inhabited, populous' },
            { surface: 'بِالْعُلَمَاءِ', lemma: 'عالم', pos: 'noun', features: 'def.gen.pl', gloss: 'with scholars' },
          ],
        },
        {
          id: 'qr2-68-032',
          ar: 'وَوَفَدَ عَلَيْهِ الْمُحَدِّثُوْنَ مِنْ بِلاَدِ الْعَرَبِ ،',
          en: 'hadith scholars came to him from the Arab lands,',
          tokens: [
            { surface: 'وَوَفَدَ', lemma: 'وفد', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to arrive, come' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'الْمُحَدِّثُوْنَ', lemma: 'محدث', pos: 'noun', features: 'def.nom.pl', root: 'ح د ث', gloss: 'the hadith scholars' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'بِلاَدِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the lands of' },
            { surface: 'الْعَرَبِ', lemma: 'عرب', pos: 'proper', features: 'def.gen', gloss: 'the Arabs' },
          ],
        },
        {
          id: 'qr2-68-033',
          ar: 'وَأَقْبَلَ النَّاسُ عَلَىٰ الْحَدِيْثِ الشَّرِيْفِ ،',
          en: 'and the people turned eagerly to the noble Hadith,',
          tokens: [
            { surface: 'وَأَقْبَلَ', lemma: 'أقبل', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to turn eagerly to' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'to' },
            { surface: 'الْحَدِيْثِ', lemma: 'حديث', pos: 'noun', features: 'def.gen', gloss: 'the Hadith' },
            { surface: 'الشَّرِيْفِ', lemma: 'شريف', pos: 'adj', features: 'def.gen', gloss: 'the noble' },
          ],
        },
        {
          id: 'qr2-68-034',
          ar: 'فَتَشَابَهَتْ غُجْرَاتُ بِالْيَمَنِ الْمَيْمُوْنِ ،',
          en: 'so that Gujarat came to resemble blessed Yemen,',
          tokens: [
            { surface: 'فَتَشَابَهَتْ', lemma: 'تشابه', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to resemble' },
            { surface: 'غُجْرَاتُ', lemma: 'غجرات', pos: 'proper', features: 'nom', gloss: 'Gujarat' },
            { surface: 'بِالْيَمَنِ', lemma: 'يمن', pos: 'proper', features: 'def.gen', gloss: 'Yemen' },
            { surface: 'الْمَيْمُوْنِ', lemma: 'ميمون', pos: 'adj', features: 'def.gen', root: 'ي م ن', gloss: 'blessed, auspicious' },
          ],
        },
        {
          id: 'qr2-68-035',
          ar: 'وَفَاقَتْ سَائِرَ بِلاَدِ الْهِنْدِ فِيْ ذٰلِكَ.',
          en: 'and surpassed the rest of the lands of India in that.',
          tokens: [
            { surface: 'وَفَاقَتْ', lemma: 'فاق', pos: 'verb', features: 'conj+perf.3fs', root: 'ف و ق', gloss: 'to surpass, excel' },
            { surface: 'سَائِرَ', lemma: 'سائر', pos: 'noun', features: 'acc.constr', gloss: 'the rest of' },
            { surface: 'بِلاَدِ', lemma: 'بلد', pos: 'noun', features: 'gen.constr.pl', gloss: 'the lands of' },
            { surface: 'الْهِنْدِ', lemma: 'هند', pos: 'proper', features: 'def.gen', gloss: 'India' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
          ],
        },
      ],
      checks: [
        {
          q: 'بِمَاذَا تَشَابَهَتْ غُجْرَاتُ فِيْ عَهْدِهِ؟',
          options: ['بِالْيَمَنِ الْمَيْمُوْنِ', 'بِمِصْرَ', 'بِالشَّامِ'],
          answer: 0,
          qEn: 'What did Gujarat come to resemble in his era?',
          optionsEn: ['Blessed Yemen', 'Egypt', 'the Levant'],
        },
      ],
    },
    {
      en: 'He was the very model of chastity and modesty, of good character, of great ambition, of a noble disposition, of an honorable soul, and of much piety and kindness -- the historians have written at length of his merits and virtues.',
      sentences: [
        {
          id: 'qr2-68-036',
          ar: 'وَكَانَ غَايَةً فِي الْعِفَّةِ وَالْحَيَاءِ ،',
          en: 'He was the very model of chastity and modesty,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'غَايَةً', lemma: 'غاية', pos: 'noun', features: 'indef.acc', root: 'غ ي ي', gloss: 'the utmost, extreme (case)' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الْعِفَّةِ', lemma: 'عفة', pos: 'noun', features: 'def.gen', root: 'ع ف ف', gloss: 'chastity, modesty' },
            { surface: 'وَالْحَيَاءِ', lemma: 'حياء', pos: 'noun', features: 'conj+def.gen', gloss: 'and modesty, shyness' },
          ],
        },
        {
          id: 'qr2-68-037',
          ar: 'حَسَنَ الأَخْلاَقِ ،',
          en: 'of good character,',
          tokens: [
            { surface: 'حَسَنَ', lemma: 'حسن', pos: 'adj', features: 'acc.constr', gloss: 'good (in)' },
            { surface: 'الأَخْلاَقِ', lemma: 'خلق', pos: 'noun', features: 'def.gen.pl', gloss: 'character, morals' },
          ],
        },
        {
          id: 'qr2-68-038',
          ar: 'عَظِيْمَ الْهِمَّةِ ،',
          en: 'of great ambition,',
          tokens: [
            { surface: 'عَظِيْمَ', lemma: 'عظيم', pos: 'adj', features: 'acc.constr', gloss: 'great (in)' },
            { surface: 'الْهِمَّةِ', lemma: 'همة', pos: 'noun', features: 'def.gen', root: 'هـ م م', gloss: 'ambition, resolve' },
          ],
        },
        {
          id: 'qr2-68-039',
          ar: 'كَرِيْمَ السَّجِيَّةِ ،',
          en: 'of a noble disposition,',
          tokens: [
            { surface: 'كَرِيْمَ', lemma: 'كريم', pos: 'adj', features: 'acc.constr', gloss: 'noble (in)' },
            { surface: 'السَّجِيَّةِ', lemma: 'سجية', pos: 'noun', features: 'def.gen', root: 'س ج و', gloss: 'innate nature, disposition' },
          ],
        },
        {
          id: 'qr2-68-040',
          ar: 'شَرِيْفَ النَّفْسِ ،',
          en: 'of an honorable soul,',
          tokens: [
            { surface: 'شَرِيْفَ', lemma: 'شريف', pos: 'adj', features: 'acc.constr', gloss: 'noble, honorable (in)' },
            { surface: 'النَّفْسِ', lemma: 'نفس', pos: 'noun', features: 'def.gen', gloss: 'soul, self' },
          ],
        },
        {
          id: 'qr2-68-041',
          ar: 'كَثِيْرَ الْبِرِّ وَالإِحْسَانِ ،',
          en: 'and of much piety and kindness --',
          tokens: [
            { surface: 'كَثِيْرَ', lemma: 'كثير', pos: 'adj', features: 'acc.constr', gloss: 'abundant (in)' },
            { surface: 'الْبِرِّ', lemma: 'بر', pos: 'noun', features: 'def.gen', gloss: 'piety, devotion' },
            { surface: 'وَالإِحْسَانِ', lemma: 'إحسان', pos: 'noun', features: 'conj+def.gen', gloss: 'and kindness' },
          ],
        },
        {
          id: 'qr2-68-042',
          ar: 'أَطَالَ الْمُؤَرِّخُوْنَ فِيْ مَنَاقِبِهِ وَفَضَائِلِهِ.',
          en: 'the historians have written at length of his merits and virtues.',
          tokens: [
            { surface: 'أَطَالَ', lemma: 'أطال', pos: 'verb', features: 'perf.3ms', gloss: 'to prolong, dwell at length' },
            { surface: 'الْمُؤَرِّخُوْنَ', lemma: 'مؤرخ', pos: 'noun', features: 'def.nom.pl', root: 'أ ر خ', gloss: 'the historians' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'مَنَاقِبِهِ', lemma: 'مناقب', pos: 'noun', features: 'gen.pl+3ms', root: 'ن ق ب', gloss: 'his merits, virtues' },
            { surface: 'وَفَضَائِلِهِ', lemma: 'فضائل', pos: 'noun', features: 'conj+gen.pl+3ms', root: 'ف ض ل', gloss: 'and his excellent qualities' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَيْفَ وَصَفَ الْمُؤَرِّخُوْنَ أَخْلاَقَ السُّلْطَانِ مَحْمُوْدٍ؟',
          options: ['حَسَنَ الأَخْلاَقِ كَرِيْمَ السَّجِيَّةِ', 'سَيِّئَ الْخُلُقِ', 'لَمْ يَذْكُرُوا أَخْلاَقَهُ'],
          answer: 0,
          qEn: 'How did the historians describe Sultan Mahmud’s character?',
          optionsEn: ['Of good character and noble disposition', 'Of bad character', 'They did not mention his character'],
        },
      ],
    },
    {
      en: 'In the year 916 AH he set out for Nahrwala Patan, and visited the leading figures of religion there, living and dead, and convened a special gathering for the study of Qur’anic exegesis and Hadith. He gave abundantly in prizes and works of charity and endowments, and asked for prayers. He had built his own tomb next to the grave of our master Shaykh Ahmad in Sarkhej, and used to visit it from time to time; and a few days before his death he opened the grave and sat by it and said: "O Allah, this is the first of the stations of the Hereafter, so make it easy, and make it one of the gardens of Paradise" -- then he filled it with silver and gave it all away in charity.',
      sentences: [
        {
          id: 'qr2-68-043',
          ar: 'فِيْ سَنَةِ ٩١٦ هـ تَوَجَّهَ إِلَىٰ نَهْرِ وَالَهْ بَتَنْ ،',
          en: 'In the year 916 AH he set out for Nahrwala Patan,',
          tokens: [
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'سَنَةِ', lemma: 'سنة', pos: 'noun', features: 'gen.constr', gloss: 'the year of' },
            { surface: '٩١٦', lemma: '٩١٦', pos: 'num', gloss: '916' },
            { surface: 'هـ', lemma: 'هـ', pos: 'noun', gloss: 'AH' },
            { surface: 'تَوَجَّهَ', lemma: 'توجه', pos: 'verb', features: 'perf.3ms', gloss: 'to set out, head' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'نَهْرِ', lemma: 'نهروالة بتن', pos: 'proper', features: 'gen', gloss: 'Nahrwala Patan (also called Anhilwara, the medieval capital of the Gujarat sultanate) -- 1st word of the name' },
            { surface: 'وَالَهْ', lemma: 'نهروالة بتن', pos: 'proper', gloss: '(name continued: "Nahrwala")' },
            { surface: 'بَتَنْ', lemma: 'نهروالة بتن', pos: 'proper', gloss: '(name continued: "Patan")' },
          ],
        },
        {
          id: 'qr2-68-044',
          ar: 'وَزَارَ أَئِمَّةَ الدِّيْنِ بِهَا أَحْيَاءً وَأَمْوَاتاً ،',
          en: 'and visited the leading figures of religion there, living and dead,',
          tokens: [
            { surface: 'وَزَارَ', lemma: 'زار', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to visit' },
            { surface: 'أَئِمَّةَ', lemma: 'إمام', pos: 'noun', features: 'acc.constr.pl', gloss: 'the leading figures, imams of' },
            { surface: 'الدِّيْنِ', lemma: 'دين', pos: 'noun', features: 'def.gen', gloss: 'religion' },
            { surface: 'بِهَا', lemma: 'ب', pos: 'prep', features: '3fs', gloss: 'there' },
            { surface: 'أَحْيَاءً', lemma: 'حي', pos: 'noun', features: 'indef.acc.pl', gloss: 'the living' },
            { surface: 'وَأَمْوَاتاً', lemma: 'ميت', pos: 'noun', features: 'conj+indef.acc.pl', gloss: 'and the dead' },
          ],
        },
        {
          id: 'qr2-68-045',
          ar: 'وَعَقَدَ مَجْلِساً خَاصّاً لِمُذَاكَرَةِ التَّفْسِيْرِ وَالْحَدِيْثِ ،',
          en: 'and convened a special gathering for the study of Qur’anic exegesis and Hadith,',
          tokens: [
            { surface: 'وَعَقَدَ', lemma: 'عقد', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to convene, hold' },
            { surface: 'مَجْلِساً', lemma: 'مجلس', pos: 'noun', features: 'indef.acc', gloss: 'a gathering, session' },
            { surface: 'خَاصّاً', lemma: 'خاص', pos: 'adj', features: 'indef.acc', gloss: 'special, exclusive' },
            { surface: 'لِمُذَاكَرَةِ', lemma: 'مذاكرة', pos: 'noun', features: 'gen.constr', root: 'ذ ك ر', gloss: 'for the study of' },
            { surface: 'التَّفْسِيْرِ', lemma: 'تفسير', pos: 'noun', features: 'def.gen', root: 'ف س ر', gloss: 'Qur’anic exegesis' },
            { surface: 'وَالْحَدِيْثِ', lemma: 'حديث', pos: 'noun', features: 'conj+def.gen', gloss: 'and Hadith' },
          ],
        },
        {
          id: 'qr2-68-046',
          ar: 'وَأَكْثَرَ مِنَ الْجَوَائِزِ ،',
          en: 'He gave abundantly in prizes,',
          tokens: [
            { surface: 'وَأَكْثَرَ', lemma: 'أكثر', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to do abundantly, give plentifully' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of, in' },
            { surface: 'الْجَوَائِزِ', lemma: 'جائزة', pos: 'noun', features: 'def.gen.pl', gloss: 'the prizes, rewards' },
          ],
        },
        {
          id: 'qr2-68-047',
          ar: 'وَأَعْمَالِ الْبِرِّ وَالْوَظَائِفِ ،',
          en: 'and works of charity and endowments,',
          tokens: [
            { surface: 'وَأَعْمَالِ', lemma: 'عمل', pos: 'noun', features: 'conj+gen.constr.pl', gloss: 'and works of' },
            { surface: 'الْبِرِّ', lemma: 'بر', pos: 'noun', features: 'def.gen', gloss: 'piety, charity' },
            { surface: 'وَالْوَظَائِفِ', lemma: 'وظيفة', pos: 'noun', features: 'conj+def.gen.pl', root: 'و ظ ف', gloss: 'and endowments, charitable stipends' },
          ],
        },
        {
          id: 'qr2-68-048',
          ar: 'وَالْتَمَسَ الدُّعَاءَ ،',
          en: 'and asked for prayers,',
          tokens: [
            { surface: 'وَالْتَمَسَ', lemma: 'التمس', pos: 'verb', features: 'conj+perf.3ms', root: 'ل م س', gloss: 'to seek, request' },
            { surface: 'الدُّعَاءَ', lemma: 'دعاء', pos: 'noun', features: 'def.acc', gloss: 'prayers, supplication' },
          ],
        },
        {
          id: 'qr2-68-049',
          ar: 'وَكَانَ أَنْشَأَ مَضْجَعَهُ فِيْ جِوَارِ قَبْرِ مَوْلاَنَا الشَّيْخِ أَحْمَدَ فِيْ سَرْكَهِيْجَ ،',
          en: 'He had built his own tomb next to the grave of our master Shaykh Ahmad in Sarkhej,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'had (auxiliary, with أَنْشَأَ = "had built")' },
            { surface: 'أَنْشَأَ', lemma: 'أنشأ', pos: 'verb', features: 'perf.3ms', root: 'ن ش أ', gloss: 'to build, establish' },
            { surface: 'مَضْجَعَهُ', lemma: 'مضجع', pos: 'noun', features: 'acc+3ms', root: 'ض ج ع', gloss: 'his resting place, tomb' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'جِوَارِ', lemma: 'جوار', pos: 'noun', features: 'gen.constr', gloss: 'the vicinity of' },
            { surface: 'قَبْرِ', lemma: 'قبر', pos: 'noun', features: 'gen.constr', gloss: 'the grave of' },
            { surface: 'مَوْلاَنَا', lemma: 'مولى', pos: 'noun', features: 'gen+1p', gloss: 'our master' },
            { surface: 'الشَّيْخِ', lemma: 'شيخ', pos: 'noun', features: 'def.gen', gloss: 'Shaykh' },
            { surface: 'أَحْمَدَ', lemma: 'أحمد', pos: 'proper', features: 'gen', gloss: 'Ahmad (Shaykh Ahmad Khattu Ganj Bakhsh, a revered Sufi saint of Gujarat)' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'سَرْكَهِيْجَ', lemma: 'سركهيج', pos: 'proper', features: 'gen', gloss: 'Sarkhej (a town near Ahmadabad, in Gujarat)' },
          ],
        },
        {
          id: 'qr2-68-050',
          ar: 'يَتَعَهَّدُهُ أَحْيَاناً ،',
          en: 'and used to visit it from time to time,',
          tokens: [
            { surface: 'يَتَعَهَّدُهُ', lemma: 'تعهد', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to look after, visit regularly' },
            { surface: 'أَحْيَاناً', lemma: 'حين', pos: 'adv', features: 'indef.acc.pl', gloss: 'sometimes, at times' },
          ],
        },
        {
          id: 'qr2-68-051',
          ar: 'وَقَبْلَ وَفَاتِهِ بِأَيَّامٍ فَتَحَ الْقَبْرَ وَجَلَسَ عِنْدَهُ وَقَالَ: اللَّهُمَّ إِنَّ هٰذَا أَوَّلُ مَنَازِلِ الآخِرَةِ فَسَهِّلْهُ وَاجْعَلْهُ مِنْ رِيَاضِ الْجَنَّةِ ،',
          en: 'and a few days before his death he opened the grave and sat by it and said (kept as one clause after the colon, per the standing convention for reported speech): "O Allah, this is the first of the stations of the Hereafter, so make it easy, and make it one of the gardens of Paradise,"',
          tokens: [
            { surface: 'وَقَبْلَ', lemma: 'قبل', pos: 'prep', features: 'conj', gloss: 'and before' },
            { surface: 'وَفَاتِهِ', lemma: 'وفاة', pos: 'noun', features: 'gen+3ms', gloss: 'his death' },
            { surface: 'بِأَيَّامٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen.pl', gloss: 'by [some] days' },
            { surface: 'فَتَحَ', lemma: 'فتح', pos: 'verb', features: 'perf.3ms', gloss: 'to open' },
            { surface: 'الْقَبْرَ', lemma: 'قبر', pos: 'noun', features: 'def.acc', gloss: 'the grave' },
            { surface: 'وَجَلَسَ', lemma: 'جلس', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to sit' },
            { surface: 'عِنْدَهُ', lemma: 'عند', pos: 'prep', features: '3ms', gloss: 'by it' },
            { surface: 'وَقَالَ', lemma: 'قال', pos: 'verb', features: 'conj+perf.3ms', gloss: 'and said' },
            { surface: 'اللَّهُمَّ', lemma: 'الله', pos: 'proper', gloss: 'O Allah! (vocative form)' },
            { surface: 'إِنَّ', lemma: 'إن', pos: 'part', gloss: 'indeed' },
            { surface: 'هٰذَا', lemma: 'هذا', pos: 'dem', gloss: 'this' },
            { surface: 'أَوَّلُ', lemma: 'أول', pos: 'noun', features: 'nom.constr', gloss: 'the first of' },
            { surface: 'مَنَازِلِ', lemma: 'منزل', pos: 'noun', features: 'gen.constr.pl', gloss: 'the stations of' },
            { surface: 'الآخِرَةِ', lemma: 'آخرة', pos: 'noun', features: 'def.gen', gloss: 'the Hereafter' },
            { surface: 'فَسَهِّلْهُ', lemma: 'سهل', pos: 'verb', features: 'conj+imp.2ms+3ms', gloss: 'make it easy!' },
            { surface: 'وَاجْعَلْهُ', lemma: 'جعل', pos: 'verb', features: 'conj+imp.2ms+3ms', gloss: 'and make it!' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among, one of' },
            { surface: 'رِيَاضِ', lemma: 'روضة', pos: 'noun', features: 'gen.constr.pl', gloss: 'the gardens of' },
            { surface: 'الْجَنَّةِ', lemma: 'جنة', pos: 'noun', features: 'def.gen', gloss: 'Paradise' },
          ],
        },
        {
          id: 'qr2-68-052',
          ar: 'ثُمَّ مَلَأَهُ فِضَّةً وَتَصَدَّقَ بِهَا.',
          en: 'then he filled it with silver and gave it all away in charity.',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'مَلَأَهُ', lemma: 'ملأ', pos: 'verb', features: 'perf.3ms+3ms', gloss: 'to fill it' },
            { surface: 'فِضَّةً', lemma: 'فضة', pos: 'noun', features: 'indef.acc', gloss: 'with silver' },
            { surface: 'وَتَصَدَّقَ', lemma: 'تصدق', pos: 'verb', features: 'conj+perf.3ms', root: 'ص د ق', gloss: 'to give in charity' },
            { surface: 'بِهَا', lemma: 'ب', pos: 'prep', features: '3fs', gloss: 'with it' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ بَنَى السُّلْطَانُ مَضْجَعَهُ؟',
          options: ['فِيْ جِوَارِ قَبْرِ الشَّيْخِ أَحْمَدَ فِيْ سَرْكَهِيْجَ', 'فِيْ نَهْرِ وَالَهْ بَتَنْ', 'فِيْ بَغْدَادَ'],
          answer: 0,
          qEn: 'Where did the Sultan build his tomb?',
          optionsEn: ['Beside the grave of Shaykh Ahmad in Sarkhej', 'In Nahrwala Patan', 'In Baghdad'],
        },
      ],
    },
    {
      en: 'He died in the afternoon of Monday, the second of the month of Ramadan, in the year 917 AH, at the age of sixty-nine, his reign having lasted fifty-five years.',
      sentences: [
        {
          id: 'qr2-68-053',
          ar: 'وَكَانَتْ وَفَاتُهُ عَصْرَ يَوْمِ الإِثْنَيْنِ ثَانِيَ شَهْرِ رَمَضَانَ سَنَةَ ٩١٧ هـ وَلَهُ تِسْعٌ وَسِتُّوْنَ سَنَةً ،',
          en: 'He died in the afternoon of Monday, the second of the month of Ramadan, in the year 917 AH, at the age of sixty-nine,',
          tokens: [
            { surface: 'وَكَانَتْ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3fs', gloss: 'to be' },
            { surface: 'وَفَاتُهُ', lemma: 'وفاة', pos: 'noun', features: 'nom+3ms', gloss: 'his death' },
            { surface: 'عَصْرَ', lemma: 'عصر', pos: 'noun', features: 'acc.constr', gloss: 'the afternoon of' },
            { surface: 'يَوْمِ', lemma: 'يوم', pos: 'noun', features: 'gen.constr', gloss: 'the day of' },
            { surface: 'الإِثْنَيْنِ', lemma: 'اثنين', pos: 'proper', features: 'def.gen', gloss: 'Monday' },
            { surface: 'ثَانِيَ', lemma: 'ثاني', pos: 'noun', features: 'acc.constr', gloss: 'the second of' },
            { surface: 'شَهْرِ', lemma: 'شهر', pos: 'noun', features: 'gen.constr', root: 'ش هـ ر', gloss: 'the month of' },
            { surface: 'رَمَضَانَ', lemma: 'رمضان', pos: 'proper', features: 'gen', gloss: 'Ramadan' },
            { surface: 'سَنَةَ', lemma: 'سنة', pos: 'noun', features: 'acc.constr', gloss: 'in the year' },
            { surface: '٩١٧', lemma: '٩١٧', pos: 'num', gloss: '917' },
            { surface: 'هـ', lemma: 'هـ', pos: 'noun', gloss: 'AH' },
            { surface: 'وَلَهُ', lemma: 'ل', pos: 'prep', features: 'conj+3ms', gloss: 'and he had (was aged)' },
            { surface: 'تِسْعٌ', lemma: 'تسع', pos: 'num', features: 'indef.nom', gloss: 'nine' },
            { surface: 'وَسِتُّوْنَ', lemma: 'ستون', pos: 'num', features: 'conj+indef.nom', gloss: 'and sixty' },
            { surface: 'سَنَةً', lemma: 'سنة', pos: 'noun', features: 'indef.acc', gloss: 'years' },
          ],
        },
        {
          id: 'qr2-68-054',
          ar: 'وَمُدَّةُ سَلْطَنَتِهِ خَمْسٌ وَخَمْسُوْنَ سَنَةً.',
          en: 'his reign having lasted fifty-five years.',
          tokens: [
            { surface: 'وَمُدَّةُ', lemma: 'مدة', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the duration of' },
            { surface: 'سَلْطَنَتِهِ', lemma: 'سلطنة', pos: 'noun', features: 'gen+3ms', root: 'س ل ط', gloss: 'his sultanate, reign' },
            { surface: 'خَمْسٌ', lemma: 'خمس', pos: 'num', features: 'indef.nom', gloss: 'five' },
            { surface: 'وَخَمْسُوْنَ', lemma: 'خمسين', pos: 'num', features: 'conj+indef.nom', gloss: 'and fifty' },
            { surface: 'سَنَةً', lemma: 'سنة', pos: 'noun', features: 'indef.acc', gloss: 'years' },
          ],
        },
      ],
      checks: [
        {
          q: 'كَمْ كَانَتْ مُدَّةُ سَلْطَنَةِ مَحْمُوْدٍ؟',
          options: ['خَمْساً وَخَمْسِيْنَ سَنَةً', 'تِسْعاً وَسِتِّيْنَ سَنَةً', 'عَشْرَ سَنَوَاتٍ'],
          answer: 0,
          qEn: 'How long was Mahmud’s reign?',
          optionsEn: ['Fifty-five years', 'Sixty-nine years', 'Ten years'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'بِالْمُلْكِ خَمْساً وَخَمْسِيْنَ سَنَةً.',
        en: 'He held sole power for fifty-five years.',
        options: ['اِسْتَقَلَّ', 'اِسْتَقَلَّتْ', 'اِسْتَقْلَلْتُ', 'نَسْتَقِلُّ'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches السلطان (he).',
          '3rd feminine singular perfect, wrong gender.',
          '1st person singular perfect, wrong person.',
          '1st person plural present, wrong tense and person.',
        ],
      },
      {
        type: 'cloze',
        pre: '',
        post: 'حُدُوْدَ مُلْكِهِ إِلَىٰ مَالْوَةَ.',
        en: 'He expanded the borders of his kingdom to Malwa.',
        options: ['وَسَّعَ', 'وَسَّعَتْ', 'وَسَّعْتُ', 'وَسَّعْنَا'],
        answer: 0,
        rationales: [
          '3rd masculine singular perfect -- matches السلطان (he).',
          '3rd feminine singular perfect, wrong gender.',
          '1st person singular perfect, wrong person.',
          '1st person plural perfect, wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'جَاهَدَ فِي اللهِ حَقَّ الْجِهَادِ',
        pre: '',
        post: 'فِي اللهِ حَقَّ الْجِهَادِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['جَاهَدْتُ', 'جَاهَدَتْ', 'جَاهَدْنَا', 'يُجَاهِدُوْنَ'],
        answer: 0,
        rationales: ['1st person singular perfect takes the suffix ـْتُ.', '', '', ''],
      },
      {
        type: 'shift',
        base: 'يُنَفِّذُ أَمْرَ الشَّرْعِ',
        pre: '',
        post: 'أَمْرَ الشَّرْعِ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يُنَفِّذُوْنَ', 'تُنَفِّذُ', 'نُنَفِّذُ', 'يُنَفِّذُ'],
        answer: 0,
        rationales: ['3rd masculine plural takes the suffix ـُوْنَ.', '', '', ''],
      },
    ],
  },
};

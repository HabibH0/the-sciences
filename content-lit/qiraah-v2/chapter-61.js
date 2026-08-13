// القراءة الراشدة, volume two, chapter 61 (printed heading "٦١") --
// الْقَاطِرَةُ (١) -- "The Locomotive (1)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 202-204 (PDF page
// index == printed page number). Continues directly after own ch60 (the
// final chapter of that session's 41-60 scope); this chapter opens a new,
// unrelated topic. Part 2 ("الْقَاطِرَةُ (٢)", own ch62) continues on
// printed page 205.
// Genre: third-person narrative frame (Rashid and his father Sa'id at the
// station) opening into Sa'id's first-person technical explanation of how
// a steam locomotive works -- register shift mid-chapter from narrative
// past tense to didactic present, matching the pattern already used in
// own ch63/64 ("جِسْمُ النَّبَاتِ").
//
// Paragraph granularity: blank-line-separated blocks on the printed pages
// (7 total). P1-P2 (narrative frame, arrival) on p.202-203; P3-P4
// (dialogue: Rashid's question, Sa'id's reply) on p.203; P5 (the long
// technical description of the locomotive and train types) spans
// p.203-204; P6-P7 (Stephenson, the ignorant-vs-learned moral) on p.204,
// followed by the printed "٭ ٭ ٭" divider (not tokenized, matching the
// convention already used at the close of own ch58/60).
//
// Sentence segmentation follows the project's standing convention of
// splitting at every ، . ؛ ! and ؟ (never at a colon before reported
// speech, e.g. "قَالَ رَشِيْدٌ: حَدِّثْنِيْ..." at qr2-61-011/012 stays
// one clause after the colon).
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// صفر/صفير (p.203 fn.1), قاطرة (p.203 fn.2, "an engine, steam or electric,
// that pulls carriages on rails"), كثيف (p.203 fn.3), and "لا تعبأ به"
// (p.204 fn.5, folded into the entry for عبأ). Place-name footnotes
// (بمبيء، بشاور، دهلي، مدراس، ديوبند) are carried as token-level `gloss`
// on the proper-noun tokens themselves rather than as `lemmas` entries,
// matching how other proper nouns are handled elsewhere in the corpus.
//
// Homographs / reused lemmas (existing lemma key, no new newWords entry):
//   - "قِطَارٌ" (train) and "مَحَطَّةٌ" (station) were already introduced
//     in earlier chapters (own ch08-tier vocabulary) -- confirmed against
//     the corpus-wide lemma grep before drafting this chapter, so both
//     are glossed at the token level only, not re-added to `lemmas`.
//   - "عَقْلٍ" (mind, intellect) and "جَانِبِيْ" (my side) and "صُنِعَتْ"
//     (was made, root ص ن ع) and "أَسْرَعُ" (faster/fastest) and "رَأْساً"
//     (a head, in the "pay heed" idiom) reuse already-known lemma keys
//     from earlier chapters.
//
// Place-name footnotes: only "دِيُوْبَنْدَ" (Deoband) carries its footnote
// content in its token gloss; بَمْبَيْءَ/بِشَاوَرَ/دِهْلِيْ/مَدْرَاسَ are
// glossed with the bare English city name only (footnote content not
// reproduced for those four).
export const CHAPTER = {
  id: 'ch61',
  title: { ar: 'الْقَاطِرَةُ', en: 'The Locomotive' },
  newWords: [ 'عجلة', 'تجول', 'متصاعد', 'كثيف', 'خبير',
    'تفصيل', 'لاحظ', 'بضاعة', 'ركاب', 'سباق', 'وقاف', 'عبأ', 'سخر',
    'انتفاع', 'قيمة', 'مكتشف', 'عامي', 'فرق'
  ],
  lemmas: {
    'قاطرة': { gloss: 'locomotive, engine', book_note: 'قَاطِرَة جمع قَاطِرَات: آلة بخارية أو كهربائية تجرّ عربات على سكك الحديد.' },
    'عجلة': { gloss: 'wheel' },
    'تجول': { gloss: 'to stroll, wander about' },
    'صفر': { gloss: 'to whistle, hiss', book_note: 'صَفَرَ يَصْفِرُ صَفِيراً: صَوَّتَ بِصَوْتٍ عَالٍ.' },
    'متصاعد': { gloss: 'rising, ascending' },
    'كثيف': { gloss: 'thick, dense', book_note: 'كَثِيْفٌ: غَلِيظ.' },
    'خبير': { gloss: 'a knowledgeable one, expert' },
    'تفصيل': { gloss: 'detail' },
    'لاحظ': { gloss: 'to observe, watch closely' },
    'بضاعة': { gloss: 'goods, freight, merchandise' },
    'ركاب': { gloss: 'passengers, riders' },
    'سباق': { gloss: 'racing, express (of a train)' },
    'وقاف': { gloss: 'stopping often, a local/stopping train' },
    'عبأ': { gloss: 'to care about, pay attention to', book_note: 'لا تَعْبَأ به: لا تهتم به ولا تبالي.' },
    'سخر': { gloss: 'to harness, subjugate for use' },
    'انتفاع': { gloss: 'benefit, use' },
    'قيمة': { gloss: 'worth, value' },
    'مكتشف': { gloss: 'discoverer' },
    'عامي': { gloss: 'a layman, common person' },
    'فرق': { gloss: 'difference' }
  },
  paragraphs: [
    {
      en: 'Rashid went with his father Sa’id to the station to receive his brother Mahmoud, who was coming from Deoband during the leave of Eid al-Adha. The train was late, so Sa’id began strolling around the station, telling Rashid about the train and the station’s system, and moved with him to another platform.',
      sentences: [
        {
          id: 'qr2-61-001',
          ar: 'ذَهَبَ رَشِيْدٌ مَعَ أَبِيْهِ سَعِيْدٍ إِلَى الْمَحَطَّةِ يَسْتَقْبِلُ أَخَاهُ مَحْمُوْداً،',
          en: 'Rashid went with his father Sa’id to the station to receive his brother Mahmoud,',
          tokens: [
            { surface: 'ذَهَبَ', lemma: 'ذهب', pos: 'verb', features: 'perf.3ms', root: 'ذ ه ب', gloss: 'to go' },
            { surface: 'رَشِيْدٌ', lemma: 'رشيد', pos: 'proper', features: 'nom', gloss: 'Rashid' },
            { surface: 'مَعَ', lemma: 'مع', pos: 'prep', gloss: 'with' },
            { surface: 'أَبِيْهِ', lemma: 'أب', pos: 'noun', features: 'gen.constr+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'سَعِيْدٍ', lemma: 'سعيد', pos: 'proper', features: 'gen', gloss: 'Sa’id' },
            { surface: 'إِلَى', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الْمَحَطَّةِ', lemma: 'محطة', pos: 'noun', features: 'def.gen', root: 'ح ط ط', gloss: 'the station' },
            { surface: 'يَسْتَقْبِلُ', lemma: 'استقبل', pos: 'verb', features: 'impf.3ms', root: 'ق ب ل', gloss: 'to receive, welcome' },
            { surface: 'أَخَاهُ', lemma: 'أخ', pos: 'noun', features: 'acc+3ms', root: 'أ خ و', gloss: 'his brother' },
            { surface: 'مَحْمُوْداً', lemma: 'محمود', pos: 'proper', features: 'acc', gloss: 'Mahmoud' },
          ],
        },
        {
          id: 'qr2-61-002',
          ar: 'وَكَانَ قَادِماً مِنْ دِيُوْبَنْدَ فِيْ مُسَامَحَةِ عِيْدِ الأَضْحَىٰ.',
          en: 'who was coming from Deoband during the leave of Eid al-Adha.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'قَادِماً', lemma: 'قادم', pos: 'adj', features: 'indef.acc', root: 'ق د م', gloss: 'coming' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'دِيُوْبَنْدَ', lemma: 'ديوبند', pos: 'proper', features: 'gen', gloss: 'Deoband (a village near Saharanpur, India)' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, during' },
            { surface: 'مُسَامَحَةِ', lemma: 'مسامحة', pos: 'noun', features: 'gen.constr', root: 'س م ح', gloss: 'leave, furlough' },
            { surface: 'عِيْدِ', lemma: 'عيد', pos: 'noun', features: 'gen.constr', root: 'ع و د', gloss: 'feast, festival' },
            { surface: 'الأَضْحَىٰ', lemma: 'أضحى', pos: 'noun', features: 'def.gen', gloss: 'the Feast of Sacrifice (ʿId al-Adḥā)' },
          ],
        },
        {
          id: 'qr2-61-003',
          ar: 'وَكَانَ الْقِطَارُ مُتَأَخِّراً،',
          en: 'The train was late,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'الْقِطَارُ', lemma: 'قطار', pos: 'noun', features: 'def.nom', gloss: 'the train' },
            { surface: 'مُتَأَخِّراً', lemma: 'متأخر', pos: 'adj', features: 'indef.acc', root: 'أ خ ر', gloss: 'late, delayed' },
          ],
        },
        {
          id: 'qr2-61-004',
          ar: 'فَأَخَذَ سَعِيْدٌ يَتَجَوَّلُ عَلَى الْمَحَطَّةِ يُحَدِّثُ رَشِيْداً عَنِ الْقِطَارِ وَنِظَامِ الْمَحَطَّةِ،',
          en: 'so Sa’id began strolling around the station, telling Rashid about the train and the station’s system,',
          tokens: [
            { surface: 'فَأَخَذَ', lemma: 'أخذ', pos: 'verb', features: 'conj+perf.3ms', root: 'أ خ ذ', gloss: 'to begin (to), take up' },
            { surface: 'سَعِيْدٌ', lemma: 'سعيد', pos: 'proper', features: 'nom', gloss: 'Sa’id' },
            { surface: 'يَتَجَوَّلُ', lemma: 'تجول', pos: 'verb', features: 'impf.3ms', root: 'ج و ل', gloss: 'to stroll, wander about' },
            { surface: 'عَلَى', lemma: 'على', pos: 'prep', gloss: 'around, on' },
            { surface: 'الْمَحَطَّةِ', lemma: 'محطة', pos: 'noun', features: 'def.gen', root: 'ح ط ط', gloss: 'the station' },
            { surface: 'يُحَدِّثُ', lemma: 'حدث', pos: 'verb', features: 'impf.3ms', root: 'ح د ث', gloss: 'to tell, narrate to' },
            { surface: 'رَشِيْداً', lemma: 'رشيد', pos: 'proper', features: 'acc', gloss: 'Rashid' },
            { surface: 'عَنِ', lemma: 'عن', pos: 'prep', gloss: 'about' },
            { surface: 'الْقِطَارِ', lemma: 'قطار', pos: 'noun', features: 'def.gen', gloss: 'the train' },
            { surface: 'وَنِظَامِ', lemma: 'نظام', pos: 'noun', features: 'conj+gen.constr', gloss: 'and the system of' },
            { surface: 'الْمَحَطَّةِ', lemma: 'محطة', pos: 'noun', features: 'def.gen', root: 'ح ط ط', gloss: 'the station' },
          ],
        },
        {
          id: 'qr2-61-005',
          ar: 'وَانْتَقَلَ مَعَهُ إِلَىٰ رَصِيْفٍ آخَرَ.',
          en: 'and moved with him to another platform.',
          tokens: [
            { surface: 'وَانْتَقَلَ', lemma: 'انتقل', pos: 'verb', features: 'conj+perf.3ms', root: 'ن ق ل', gloss: 'to move, transfer' },
            { surface: 'مَعَهُ', lemma: 'مع', pos: 'prep', features: '3ms', gloss: 'with him' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'رَصِيْفٍ', lemma: 'رصيف', pos: 'noun', features: 'indef.gen', gloss: 'a platform' },
            { surface: 'آخَرَ', lemma: 'آخر', pos: 'adj', features: 'indef.gen', gloss: 'another' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا ذَهَبَ رَشِيْدٌ وَأَبُوْهُ إِلَى الْمَحَطَّةِ؟',
          options: ['لِيَسْتَقْبِلاَ مَحْمُوْداً', 'لِيُسَافِرَا', 'لِيَشْتَرِيَا تَذْكِرَةً'],
          answer: 0,
          qEn: 'Why did Rashid and his father go to the station?',
          optionsEn: ['To receive Mahmoud', 'To travel', 'To buy a ticket'],
        },
      ],
    },
    {
      en: 'A train stood there, its locomotive whistling, thick rising steam pouring out of it.',
      sentences: [
        {
          id: 'qr2-61-006',
          ar: 'وَكَانَ قِطَارٌ وَاقِفاً هُنَا تَصْفِرُ قَاطِرَتُهُ،',
          en: 'A train was standing here, its locomotive whistling,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'قِطَارٌ', lemma: 'قطار', pos: 'noun', features: 'indef.nom', gloss: 'a train' },
            { surface: 'وَاقِفاً', lemma: 'واقف', pos: 'adj', features: 'indef.acc', root: 'و ق ف', gloss: 'standing' },
            { surface: 'هُنَا', lemma: 'هنا', pos: 'adv', gloss: 'here' },
            { surface: 'تَصْفِرُ', lemma: 'صفر', pos: 'verb', features: 'impf.3fs', gloss: 'to whistle, hiss' },
            { surface: 'قَاطِرَتُهُ', lemma: 'قاطرة', pos: 'noun', features: 'nom+3ms', gloss: 'its locomotive' },
          ],
        },
        {
          id: 'qr2-61-007',
          ar: 'وَيَخْرُجُ مِنْهَا بُخَارٌ كَثِيْفٌ مُتَصَاعِدٌ.',
          en: 'and thick, rising steam came out of it.',
          tokens: [
            { surface: 'وَيَخْرُجُ', lemma: 'خرج', pos: 'verb', features: 'conj+impf.3ms', root: 'خ ر ج', gloss: 'to come out' },
            { surface: 'مِنْهَا', lemma: 'من', pos: 'prep', features: '3fs', gloss: 'from it' },
            { surface: 'بُخَارٌ', lemma: 'بخار', pos: 'noun', features: 'indef.nom', gloss: 'steam' },
            { surface: 'كَثِيْفٌ', lemma: 'كثيف', pos: 'adj', features: 'indef.nom', gloss: 'thick, dense' },
            { surface: 'مُتَصَاعِدٌ', lemma: 'متصاعد', pos: 'adj', features: 'indef.nom', gloss: 'rising, ascending' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَخْرُجُ مِنَ الْقَاطِرَةِ؟',
          options: ['بُخَارٌ كَثِيْفٌ', 'مَاءٌ', 'دُخَانٌ أَسْوَدُ'],
          answer: 0,
          qEn: 'What was coming out of the locomotive?',
          optionsEn: ['Thick steam', 'Water', 'Black smoke'],
        },
      ],
    },
    {
      en: 'Rashid said: "Tell me today, father, about the locomotive — how it pulls the train, and how it speeds up?"',
      sentences: [
        {
          id: 'qr2-61-008',
          ar: 'قَالَ رَشِيْدٌ: حَدِّثْنِيْ الْيَوْمَ يَا أَبِيْ!',
          en: 'Rashid said: "Tell me today, father!"',
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'رَشِيْدٌ', lemma: 'رشيد', pos: 'proper', features: 'nom', gloss: 'Rashid' },
            { surface: 'حَدِّثْنِيْ', lemma: 'حدث', pos: 'verb', features: 'imp.2ms+1s', root: 'ح د ث', gloss: 'tell me!' },
            { surface: 'الْيَوْمَ', lemma: 'يوم', pos: 'noun', features: 'def.acc', gloss: 'today' },
            { surface: 'يَا', lemma: 'يا', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'أَبِيْ', lemma: 'أب', pos: 'noun', features: '1s', root: 'أ ب و', gloss: 'my father' },
          ],
        },
        {
          id: 'qr2-61-009',
          ar: 'عَنِ الْقَاطِرَةِ كَيْفَ تَجُرُّ الْقِطَارَ،',
          en: 'about the locomotive — how it pulls the train,',
          tokens: [
            { surface: 'عَنِ', lemma: 'عن', pos: 'prep', gloss: 'about' },
            { surface: 'الْقَاطِرَةِ', lemma: 'قاطرة', pos: 'noun', features: 'def.gen', gloss: 'the locomotive' },
            { surface: 'كَيْفَ', lemma: 'كيف', pos: 'adv', gloss: 'how' },
            { surface: 'تَجُرُّ', lemma: 'جر', pos: 'verb', features: 'impf.3fs', root: 'ج ر ر', gloss: 'to pull, tow' },
            { surface: 'الْقِطَارَ', lemma: 'قطار', pos: 'noun', features: 'def.acc', gloss: 'the train' },
          ],
        },
        {
          id: 'qr2-61-010',
          ar: 'وَكَيْفَ تُسْرِعُ فِي السَّيْرِ؟',
          en: 'and how it speeds up in its motion?"',
          tokens: [
            { surface: 'وَكَيْفَ', lemma: 'كيف', pos: 'adv', features: 'conj', gloss: 'and how' },
            { surface: 'تُسْرِعُ', lemma: 'أسرع', pos: 'verb', features: 'impf.3fs', root: 'س ر ع', gloss: 'to speed up, hasten' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'السَّيْرِ', lemma: 'سير', pos: 'noun', features: 'def.gen', gloss: 'motion, travel, course' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا سَأَلَ رَشِيْدٌ أَبَاهُ؟',
          options: ['كَيْفَ تَجُرُّ الْقَاطِرَةُ الْقِطَارَ', 'مَتَى يَصِلُ الْقِطَارُ', 'كَمْ ثَمَنُ التَّذْكِرَةِ'],
          answer: 0,
          qEn: 'What did Rashid ask his father?',
          optionsEn: ['How the locomotive pulls the train', 'When the train arrives', 'How much the ticket costs'],
        },
      ],
    },
    {
      en: 'Sa’id said: "You have indeed asked someone knowledgeable about it, for I was once employed on the railway, and I will tell you about it in detail, so stand by my side in front of this locomotive and observe it."',
      sentences: [
        {
          id: 'qr2-61-011',
          ar: 'قَالَ سَعِيْدٌ: لَقَدْ سَأَلْتَ بِهِ خَبِيْراً',
          en: 'Sa’id said: "You have indeed asked someone knowledgeable about it,',
          tokens: [
            { surface: 'قَالَ', lemma: 'قال', pos: 'verb', features: 'perf.3ms', root: 'ق و ل', gloss: 'to say' },
            { surface: 'سَعِيْدٌ', lemma: 'سعيد', pos: 'proper', features: 'nom', gloss: 'Sa’id' },
            { surface: 'لَقَدْ', lemma: 'قد', pos: 'part', gloss: 'indeed, verily' },
            { surface: 'سَأَلْتَ', lemma: 'سأل', pos: 'verb', features: 'perf.2ms', gloss: 'to ask' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'about it' },
            { surface: 'خَبِيْراً', lemma: 'خبير', pos: 'noun', features: 'indef.acc', gloss: 'a knowledgeable one, expert' },
          ],
        },
        {
          id: 'qr2-61-012',
          ar: 'فَقَدْ كُنْتُ مُوَظَّفاً فِي الْقِطَارِ،',
          en: 'for I was once employed on the railway,',
          tokens: [
            { surface: 'فَقَدْ', lemma: 'قد', pos: 'part', features: 'conj', gloss: 'for indeed' },
            { surface: 'كُنْتُ', lemma: 'كان', pos: 'verb', features: 'perf.1s', root: 'ك و ن', gloss: 'to be' },
            { surface: 'مُوَظَّفاً', lemma: 'وظف', pos: 'adj', features: 'indef.acc', gloss: 'employed (as), an employee' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'on, in' },
            { surface: 'الْقِطَارِ', lemma: 'قطار', pos: 'noun', features: 'def.gen', gloss: 'the train, the railway' },
          ],
        },
        {
          id: 'qr2-61-013',
          ar: 'وَسَأُحَدِّثُكَ عَنْهَا فِيْ تَفْصِيْلٍ،',
          en: 'and I will tell you about it in detail,',
          tokens: [
            { surface: 'وَسَأُحَدِّثُكَ', lemma: 'حدث', pos: 'verb', features: 'conj+impf.1s+2ms', root: 'ح د ث', gloss: 'will tell (you)' },
            { surface: 'عَنْهَا', lemma: 'عن', pos: 'prep', features: '3fs', gloss: 'about it' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'تَفْصِيْلٍ', lemma: 'تفصيل', pos: 'noun', features: 'indef.gen', gloss: 'detail' },
          ],
        },
        {
          id: 'qr2-61-014',
          ar: 'فَقُمْ بِجَانِبِيْ أَمَامَ هٰذِهِ الْقَاطِرَةِ وَلاَحِظْهَا.',
          en: 'so stand by my side in front of this locomotive and observe it."',
          tokens: [
            { surface: 'فَقُمْ', lemma: 'قام', pos: 'verb', features: 'conj+imp.2ms', root: 'ق و م', gloss: 'stand!' },
            { surface: 'بِجَانِبِيْ', lemma: 'جانب', pos: 'noun', features: '1s', root: 'ج ن ب', gloss: 'by my side' },
            { surface: 'أَمَامَ', lemma: 'أمام', pos: 'adv', gloss: 'in front of' },
            { surface: 'هٰذِهِ', lemma: 'هذه', pos: 'dem', gloss: 'this (f.)' },
            { surface: 'الْقَاطِرَةِ', lemma: 'قاطرة', pos: 'noun', features: 'def.gen', gloss: 'the locomotive' },
            { surface: 'وَلاَحِظْهَا', lemma: 'لاحظ', pos: 'verb', features: 'conj+imp.2ms+3fs', gloss: 'observe it!' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا يَعْرِفُ سَعِيْدٌ الْقَاطِرَةَ جَيِّداً؟',
          options: ['لِأَنَّهُ كَانَ مُوَظَّفاً فِي الْقِطَارِ', 'لِأَنَّهُ مُهَنْدِسٌ', 'لِأَنَّهُ قَرَأَ عَنْهَا فَقَطْ'],
          answer: 0,
          qEn: 'Why does Sa’id know the locomotive so well?',
          optionsEn: ['Because he used to be employed on the railway', 'Because he is an engineer', 'Because he had only read about it'],
        },
      ],
    },
    {
      en: 'Sa’id said: "Look, Rashid, at the locomotive — you see it was made of iron, and it has six wheels it moves on, and it is very powerful, as if it were a demon among the jinn. It pulls the freight train, which is very long and heavy; it pulls the passenger train, with people and their baggage in it; and it pulls the express train, the fastest of the trains, covering forty-five miles an hour. The fast train covers about forty miles an hour, and the stopping train covers about thirty miles an hour; it pulls the train from one end of India to the other — for example from Bombay to Peshawar, and from Delhi to Madras.',
      sentences: [
        {
          id: 'qr2-61-015',
          ar: 'اُنْظُرْ يَا رَشِيْدُ!',
          en: 'Look, Rashid!',
          tokens: [
            { surface: 'اُنْظُرْ', lemma: 'نظر', pos: 'verb', features: 'imp.2ms', gloss: 'look!' },
            { surface: 'يَا', lemma: 'يا', pos: 'part', gloss: 'O (vocative)' },
            { surface: 'رَشِيْدُ', lemma: 'رشيد', pos: 'proper', gloss: 'Rashid' },
          ],
        },
        {
          id: 'qr2-61-016',
          ar: 'إِلَى الْقَاطِرَةِ تَرَهَا صُنِعَتْ مِنَ الْحَدِيْدِ،',
          en: 'at the locomotive — you see it was made of iron,',
          tokens: [
            { surface: 'إِلَى', lemma: 'إلى', pos: 'prep', gloss: 'at, to' },
            { surface: 'الْقَاطِرَةِ', lemma: 'قاطرة', pos: 'noun', features: 'def.gen', gloss: 'the locomotive' },
            { surface: 'تَرَهَا', lemma: 'رأى', pos: 'verb', features: 'impf.2ms+3fs', gloss: 'you see it' },
            { surface: 'صُنِعَتْ', lemma: 'صنع', pos: 'verb', features: 'perf.pass.3fs', gloss: 'to be made' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'from, of' },
            { surface: 'الْحَدِيْدِ', lemma: 'حديد', pos: 'noun', features: 'def.gen', gloss: 'iron' },
          ],
        },
        {
          id: 'qr2-61-017',
          ar: 'وَلَهَا سِتُّ عَجَلاَتٍ تَسِيْرُ عَلَيْهَا',
          en: 'and it has six wheels it moves on',
          tokens: [
            { surface: 'وَلَهَا', lemma: 'ل', pos: 'prep', features: 'conj+3fs', gloss: 'and it has' },
            { surface: 'سِتُّ', lemma: 'ست', pos: 'num', features: 'nom.constr', gloss: 'six' },
            { surface: 'عَجَلاَتٍ', lemma: 'عجلة', pos: 'noun', features: 'indef.gen.pl', gloss: 'wheels' },
            { surface: 'تَسِيْرُ', lemma: 'سار', pos: 'verb', features: 'impf.3fs', root: 'س ي ر', gloss: 'to move, travel' },
            { surface: 'عَلَيْهَا', lemma: 'على', pos: 'prep', features: '3fs', gloss: 'on them' },
          ],
        },
        {
          id: 'qr2-61-018',
          ar: 'وَهِيَ قَوِيَّةٌ جِدّاً كَأَنَّهَا عِفْرِيْتٌ مِنَ الْجِنِّ،',
          en: 'and it is very powerful, as if it were a demon among the jinn,',
          tokens: [
            { surface: 'وَهِيَ', lemma: 'هي', pos: 'part', features: 'conj', gloss: 'and it (is)' },
            { surface: 'قَوِيَّةٌ', lemma: 'قوي', pos: 'adj', features: 'indef.nom', gloss: 'powerful, strong' },
            { surface: 'جِدّاً', lemma: 'جدا', pos: 'adv', features: 'indef.acc', gloss: 'very' },
            { surface: 'كَأَنَّهَا', lemma: 'كأن', pos: 'part', features: '3fs', gloss: 'as if it (were)' },
            { surface: 'عِفْرِيْتٌ', lemma: 'عفريت', pos: 'noun', features: 'indef.nom', gloss: 'demon, powerful spirit' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'الْجِنِّ', lemma: 'جن', pos: 'noun', features: 'def.gen', gloss: 'the jinn' },
          ],
        },
        {
          id: 'qr2-61-019',
          ar: 'تَجُرُّ قِطَارَ الْبِضَاعَةِ،',
          en: 'it pulls the freight train,',
          tokens: [
            { surface: 'تَجُرُّ', lemma: 'جر', pos: 'verb', features: 'impf.3fs', root: 'ج ر ر', gloss: 'to pull, tow' },
            { surface: 'قِطَارَ', lemma: 'قطار', pos: 'noun', features: 'acc.constr', gloss: 'the train of' },
            { surface: 'الْبِضَاعَةِ', lemma: 'بضاعة', pos: 'noun', features: 'def.gen', gloss: 'goods, freight' },
          ],
        },
        {
          id: 'qr2-61-020',
          ar: 'وَهُوَ طَوِيْلٌ وَثَقِيْلٌ جِدّاً،',
          en: 'which is very long and heavy,',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هو', pos: 'part', features: 'conj', gloss: 'and it (is)' },
            { surface: 'طَوِيْلٌ', lemma: 'طويل', pos: 'adj', features: 'indef.nom', gloss: 'long' },
            { surface: 'وَثَقِيْلٌ', lemma: 'ثقيل', pos: 'adj', features: 'conj+indef.nom', gloss: 'and heavy' },
            { surface: 'جِدّاً', lemma: 'جدا', pos: 'adv', features: 'indef.acc', gloss: 'very' },
          ],
        },
        {
          id: 'qr2-61-021',
          ar: 'وَتَجُرُّ قِطَارَ الرُّكَّابِ وَفِيْهِ النَّاسُ وَأَثْقَالُهُمْ،',
          en: 'and it pulls the passenger train, with people and their baggage in it,',
          tokens: [
            { surface: 'وَتَجُرُّ', lemma: 'جر', pos: 'verb', features: 'conj+impf.3fs', root: 'ج ر ر', gloss: 'to pull, tow' },
            { surface: 'قِطَارَ', lemma: 'قطار', pos: 'noun', features: 'acc.constr', gloss: 'the train of' },
            { surface: 'الرُّكَّابِ', lemma: 'ركاب', pos: 'noun', features: 'def.gen', gloss: 'passengers, riders' },
            { surface: 'وَفِيْهِ', lemma: 'في', pos: 'prep', features: 'conj+3ms', gloss: 'and in it' },
            { surface: 'النَّاسُ', lemma: 'ناس', pos: 'noun', features: 'def.nom', gloss: 'the people' },
            { surface: 'وَأَثْقَالُهُمْ', lemma: 'ثقل', pos: 'noun', features: 'conj+nom.pl+3mp', gloss: 'and their loads, baggage' },
          ],
        },
        {
          id: 'qr2-61-022',
          ar: 'وَتَجُرُّ الْقِطَارَ السَّبَّاقَ،',
          en: 'and it pulls the express train,',
          tokens: [
            { surface: 'وَتَجُرُّ', lemma: 'جر', pos: 'verb', features: 'conj+impf.3fs', root: 'ج ر ر', gloss: 'to pull, tow' },
            { surface: 'الْقِطَارَ', lemma: 'قطار', pos: 'noun', features: 'def.acc', gloss: 'the train' },
            { surface: 'السَّبَّاقَ', lemma: 'سباق', pos: 'adj', features: 'def.acc', gloss: 'racing, express' },
          ],
        },
        {
          id: 'qr2-61-023',
          ar: 'وَهُوَ أَسْرَعُ الْقُطُرِ يَقْطَعُ خَمْسَةً وَأَرْبَعِيْنَ مِيْلاً فِي السَّاعَةِ.',
          en: 'which is the fastest of the trains, covering forty-five miles an hour.',
          tokens: [
            { surface: 'وَهُوَ', lemma: 'هو', pos: 'part', features: 'conj', gloss: 'and it (is)' },
            { surface: 'أَسْرَعُ', lemma: 'أسرع', pos: 'adj', features: 'nom.constr', gloss: 'fastest' },
            { surface: 'الْقُطُرِ', lemma: 'قطار', pos: 'noun', features: 'def.gen.pl', gloss: 'the trains' },
            { surface: 'يَقْطَعُ', lemma: 'قطع', pos: 'verb', features: 'impf.3ms', gloss: 'to cover, cross (a distance)' },
            { surface: 'خَمْسَةً', lemma: 'خمسة', pos: 'num', features: 'indef.acc', gloss: 'five' },
            { surface: 'وَأَرْبَعِيْنَ', lemma: 'أربعون', pos: 'num', features: 'conj+indef.acc', gloss: 'and forty' },
            { surface: 'مِيْلاً', lemma: 'ميل', pos: 'noun', features: 'indef.acc', gloss: 'a mile' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in, per' },
            { surface: 'السَّاعَةِ', lemma: 'ساعة', pos: 'noun', features: 'def.gen', gloss: 'the hour' },
          ],
        },
        {
          id: 'qr2-61-024',
          ar: 'وَالْقِطَارُ السَّرِيْعُ يَقْطَعُ نَحْوَ أَرْبَعِيْنَ مِيْلاً فِي السَّاعَةِ،',
          en: 'The fast train covers about forty miles an hour,',
          tokens: [
            { surface: 'وَالْقِطَارُ', lemma: 'قطار', pos: 'noun', features: 'conj+def.nom', gloss: 'and the train' },
            { surface: 'السَّرِيْعُ', lemma: 'سريع', pos: 'adj', features: 'def.nom', gloss: 'fast, quick' },
            { surface: 'يَقْطَعُ', lemma: 'قطع', pos: 'verb', features: 'impf.3ms', gloss: 'to cover, cross (a distance)' },
            { surface: 'نَحْوَ', lemma: 'نحو', pos: 'adv', gloss: 'about, approximately' },
            { surface: 'أَرْبَعِيْنَ', lemma: 'أربعون', pos: 'num', features: 'indef.acc', gloss: 'forty' },
            { surface: 'مِيْلاً', lemma: 'ميل', pos: 'noun', features: 'indef.acc', gloss: 'a mile' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in, per' },
            { surface: 'السَّاعَةِ', lemma: 'ساعة', pos: 'noun', features: 'def.gen', gloss: 'the hour' },
          ],
        },
        {
          id: 'qr2-61-025',
          ar: 'وَالْقِطَارُ الْوَقَّافُ يَقْطَعُ نَحْوَ ثَلاَثِيْنَ مِيْلاً فِي السَّاعَةِ،',
          en: 'and the stopping train covers about thirty miles an hour,',
          tokens: [
            { surface: 'وَالْقِطَارُ', lemma: 'قطار', pos: 'noun', features: 'conj+def.nom', gloss: 'and the train' },
            { surface: 'الْوَقَّافُ', lemma: 'وقاف', pos: 'adj', features: 'def.nom', gloss: 'stopping often, local' },
            { surface: 'يَقْطَعُ', lemma: 'قطع', pos: 'verb', features: 'impf.3ms', gloss: 'to cover, cross (a distance)' },
            { surface: 'نَحْوَ', lemma: 'نحو', pos: 'adv', gloss: 'about, approximately' },
            { surface: 'ثَلاَثِيْنَ', lemma: 'ثلاثون', pos: 'num', features: 'indef.acc', gloss: 'thirty' },
            { surface: 'مِيْلاً', lemma: 'ميل', pos: 'noun', features: 'indef.acc', gloss: 'a mile' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in, per' },
            { surface: 'السَّاعَةِ', lemma: 'ساعة', pos: 'noun', features: 'def.gen', gloss: 'the hour' },
          ],
        },
        {
          id: 'qr2-61-026',
          ar: 'تَجُرُّ الْقِطَارَ مِنْ أَقْصَىٰ الْهِنْدِ إِلَىٰ أَقْصَاهَا،',
          en: 'it pulls the train from one end of India to the other,',
          tokens: [
            { surface: 'تَجُرُّ', lemma: 'جر', pos: 'verb', features: 'impf.3fs', root: 'ج ر ر', gloss: 'to pull, tow' },
            { surface: 'الْقِطَارَ', lemma: 'قطار', pos: 'noun', features: 'def.acc', gloss: 'the train' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'أَقْصَىٰ', lemma: 'أقصى', pos: 'noun', features: 'gen.constr', gloss: 'the farthest end of' },
            { surface: 'الْهِنْدِ', lemma: 'هند', pos: 'proper', features: 'def.gen', gloss: 'India' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'أَقْصَاهَا', lemma: 'أقصى', pos: 'noun', features: 'gen+3fs', gloss: 'its farthest end' },
          ],
        },
        {
          id: 'qr2-61-027',
          ar: 'مَثَلاً مِنْ بَمْبَيْءَ إِلَىٰ بِشَاوَرَ، وَمِنْ دِهْلِيْ إِلَىٰ مَدْرَاسَ.',
          en: 'for example from Bombay to Peshawar, and from Delhi to Madras.',
          tokens: [
            { surface: 'مَثَلاً', lemma: 'مثل', pos: 'adv', features: 'indef.acc', gloss: 'for example' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'بَمْبَيْءَ', lemma: 'بمبيء', pos: 'proper', features: 'gen', gloss: 'Bombay' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'بِشَاوَرَ', lemma: 'بشاور', pos: 'proper', features: 'gen', gloss: 'Peshawar' },
            { surface: 'وَمِنْ', lemma: 'من', pos: 'prep', features: 'conj', gloss: 'and from' },
            { surface: 'دِهْلِيْ', lemma: 'دهلي', pos: 'proper', features: 'gen', gloss: 'Delhi' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'مَدْرَاسَ', lemma: 'مدراس', pos: 'proper', features: 'gen', gloss: 'Madras' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيُّ الْقُطُرِ أَسْرَعُ؟',
          options: ['الْقِطَارُ السَّبَّاقُ', 'الْقِطَارُ السَّرِيْعُ', 'الْقِطَارُ الْوَقَّافُ'],
          answer: 0,
          qEn: 'Which train is fastest?',
          optionsEn: ['The express train', 'The fast train', 'The stopping train'],
        },
        {
          q: 'مِمَّ صُنِعَتِ الْقَاطِرَةُ؟',
          options: ['مِنَ الْحَدِيْدِ', 'مِنَ الْخَشَبِ', 'مِنَ الذَّهَبِ'],
          answer: 0,
          qEn: 'What was the locomotive made of?',
          optionsEn: ['Iron', 'Wood', 'Gold'],
        },
      ],
    },
    {
      en: 'And the power of this locomotive is merely the lowly steam that you pay no attention to and give no account at all — yet Stephenson, the inventor of the train, discovered the power of this steam, found the way to harness it and make use of it for various purposes, and knew, through his intellect and study, that by its power it carries loads, moves mountains, and produces wonders.',
      sentences: [
        {
          id: 'qr2-61-028',
          ar: 'وَقُوَّةُ هٰذِهِ الْقَاطِرَةِ إِنَّمَا هِيَ الْبُخَارُ الْحَقِيْرُ الَّذِيْ لاَ تَعْبَأُ بِهِ،',
          en: 'And the power of this locomotive is merely the lowly steam that you pay no attention to,',
          tokens: [
            { surface: 'وَقُوَّةُ', lemma: 'قوة', pos: 'noun', features: 'conj+nom.constr', gloss: 'and the power of' },
            { surface: 'هٰذِهِ', lemma: 'هذه', pos: 'dem', gloss: 'this (f.)' },
            { surface: 'الْقَاطِرَةِ', lemma: 'قاطرة', pos: 'noun', features: 'def.gen', gloss: 'the locomotive' },
            { surface: 'إِنَّمَا', lemma: 'إنما', pos: 'part', gloss: 'only, merely' },
            { surface: 'هِيَ', lemma: 'هي', pos: 'part', gloss: 'it (is)' },
            { surface: 'الْبُخَارُ', lemma: 'بخار', pos: 'noun', features: 'def.nom', gloss: 'the steam' },
            { surface: 'الْحَقِيْرُ', lemma: 'حقير', pos: 'adj', features: 'def.nom', gloss: 'lowly, insignificant' },
            { surface: 'الَّذِيْ', lemma: 'الذي', pos: 'rel', gloss: 'which' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'تَعْبَأُ', lemma: 'عبأ', pos: 'verb', features: 'impf.2ms', gloss: 'to care about, pay attention to' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'about it' },
          ],
        },
        {
          id: 'qr2-61-029',
          ar: 'وَلاَ تُحَاسِبُ لَهُ حِسَاباً،',
          en: 'and give it no account at all,',
          tokens: [
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'تُحَاسِبُ', lemma: 'حاسب', pos: 'verb', features: 'impf.2ms', gloss: 'to reckon, account for' },
            { surface: 'لَهُ', lemma: 'ل', pos: 'prep', features: '3ms', gloss: 'for it' },
            { surface: 'حِسَاباً', lemma: 'حساب', pos: 'noun', features: 'indef.acc', gloss: 'a reckoning, account' },
          ],
        },
        {
          id: 'qr2-61-030',
          ar: 'وَقَدِ اهْتَدَىٰ «اِسْتِيفِنْسِن» مُخْتَرِعُ الْقِطَارِ إِلَىٰ قُوَّةِ هٰذَا الْبُخَارِ،',
          en: 'yet Stephenson, the inventor of the train, discovered the power of this steam,',
          tokens: [
            { surface: 'وَقَدِ', lemma: 'قد', pos: 'part', features: 'conj', gloss: 'and indeed' },
            { surface: 'اهْتَدَىٰ', lemma: 'اهتدى', pos: 'verb', features: 'perf.3ms', gloss: 'to find the way to, discover' },
            { surface: 'اِسْتِيفِنْسِن', lemma: 'استيفنسن', pos: 'proper', gloss: 'Stephenson' },
            { surface: 'مُخْتَرِعُ', lemma: 'مخترع', pos: 'noun', features: 'nom.constr', gloss: 'the inventor of' },
            { surface: 'الْقِطَارِ', lemma: 'قطار', pos: 'noun', features: 'def.gen', gloss: 'the train' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'قُوَّةِ', lemma: 'قوة', pos: 'noun', features: 'gen.constr', gloss: 'the power of' },
            { surface: 'هٰذَا', lemma: 'هذا', pos: 'dem', gloss: 'this' },
            { surface: 'الْبُخَارِ', lemma: 'بخار', pos: 'noun', features: 'def.gen', gloss: 'the steam' },
          ],
        },
        {
          id: 'qr2-61-031',
          ar: 'وَاهْتَدَىٰ إِلَىٰ تَسْخِيْرِهِ وَالانْتِفَاعِ بِهِ فِي الأَغْرَاضِ،',
          en: 'and found the way to harness it and make use of it for various purposes,',
          tokens: [
            { surface: 'وَاهْتَدَىٰ', lemma: 'اهتدى', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to find the way to, discover' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'تَسْخِيْرِهِ', lemma: 'سخر', pos: 'noun', features: 'gen+3ms', gloss: 'harnessing it' },
            { surface: 'وَالانْتِفَاعِ', lemma: 'انتفاع', pos: 'noun', features: 'conj+def.gen', gloss: 'and the benefiting, use' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'by it' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in, for' },
            { surface: 'الأَغْرَاضِ', lemma: 'غرض', pos: 'noun', features: 'def.gen.pl', gloss: 'the purposes' },
          ],
        },
        {
          id: 'qr2-61-032',
          ar: 'وَعَلِمَ بِعَقْلِهِ وَدِرَاسَتِهِ أَنَّهُ بِقُوَّتِهِ يَحْمِلُ الأَثْقَالَ،',
          en: 'and knew, through his intellect and study, that by its power it carries loads,',
          tokens: [
            { surface: 'وَعَلِمَ', lemma: 'علم', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to know' },
            { surface: 'بِعَقْلِهِ', lemma: 'عقل', pos: 'noun', features: 'gen+3ms', gloss: 'by his intellect' },
            { surface: 'وَدِرَاسَتِهِ', lemma: 'دراسة', pos: 'noun', features: 'conj+gen+3ms', gloss: 'and his study' },
            { surface: 'أَنَّهُ', lemma: 'أن', pos: 'part', features: '3ms', gloss: 'that it' },
            { surface: 'بِقُوَّتِهِ', lemma: 'قوة', pos: 'noun', features: 'gen+3ms', gloss: 'by its power' },
            { surface: 'يَحْمِلُ', lemma: 'حمل', pos: 'verb', features: 'impf.3ms', gloss: 'to carry' },
            { surface: 'الأَثْقَالَ', lemma: 'ثقل', pos: 'noun', features: 'def.acc.pl', gloss: 'the loads' },
          ],
        },
        {
          id: 'qr2-61-033',
          ar: 'وَيَنْقُلُ الْجِبَالَ،',
          en: 'moves mountains,',
          tokens: [
            { surface: 'وَيَنْقُلُ', lemma: 'نقل', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to move, transport' },
            { surface: 'الْجِبَالَ', lemma: 'جبل', pos: 'noun', features: 'def.acc.pl', gloss: 'the mountains' },
          ],
        },
        {
          id: 'qr2-61-034',
          ar: 'وَيَأْتِيْ بِالْعَجَائِبِ.',
          en: 'and produces wonders.',
          tokens: [
            { surface: 'وَيَأْتِيْ', lemma: 'أتى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to bring, come with' },
            { surface: 'بِالْعَجَائِبِ', lemma: 'عجيبة', pos: 'noun', features: 'def.gen.pl', gloss: 'the wonders' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَنِ الَّذِيْ اهْتَدَىٰ إِلَىٰ قُوَّةِ الْبُخَارِ؟',
          options: ['اِسْتِيفِنْسِن', 'سَعِيْدٌ', 'رَشِيْدٌ'],
          answer: 0,
          qEn: 'Who discovered the power of steam?',
          optionsEn: ['Stephenson', 'Sa’id', 'Rashid'],
        },
      ],
    },
    {
      en: 'That is the difference between the ignorant and the learned, and between the layman and the discoverer: the first sees everything yet pays it no heed and gives it no thought, while the second sees it, recognizes its worth, and strives with it until he harnesses it for his purpose.',
      sentences: [
        {
          id: 'qr2-61-035',
          ar: 'وَذٰلِكَ هُوَ الْفَرْقُ بَيْنَ الْجَاهِلِ وَالْعَالِمِ،',
          en: 'That is the difference between the ignorant and the learned,',
          tokens: [
            { surface: 'وَذٰلِكَ', lemma: 'ذلك', pos: 'dem', features: 'conj', gloss: 'and that' },
            { surface: 'هُوَ', lemma: 'هو', pos: 'part', gloss: 'it (is)' },
            { surface: 'الْفَرْقُ', lemma: 'فرق', pos: 'noun', features: 'def.nom', gloss: 'the difference' },
            { surface: 'بَيْنَ', lemma: 'بين', pos: 'prep', gloss: 'between' },
            { surface: 'الْجَاهِلِ', lemma: 'جاهل', pos: 'noun', features: 'def.gen', gloss: 'the ignorant person' },
            { surface: 'وَالْعَالِمِ', lemma: 'عالم', pos: 'noun', features: 'conj+def.gen', gloss: 'and the learned person' },
          ],
        },
        {
          id: 'qr2-61-036',
          ar: 'وَبَيْنَ الْعَامِيِّ وَالْمُكْتَشِفِ،',
          en: 'and between the layman and the discoverer:',
          tokens: [
            { surface: 'وَبَيْنَ', lemma: 'بين', pos: 'prep', features: 'conj', gloss: 'and between' },
            { surface: 'الْعَامِيِّ', lemma: 'عامي', pos: 'noun', features: 'def.gen', gloss: 'the layman, common person' },
            { surface: 'وَالْمُكْتَشِفِ', lemma: 'مكتشف', pos: 'noun', features: 'conj+def.gen', gloss: 'and the discoverer' },
          ],
        },
        {
          id: 'qr2-61-037',
          ar: 'يَرَى الأَوَّلُ كُلَّ شَيْءٍ فَلاَ يَرْفَعُ بِهِ رَأْساً،',
          en: 'the first sees everything yet pays it no heed,',
          tokens: [
            { surface: 'يَرَى', lemma: 'رأى', pos: 'verb', features: 'impf.3ms', gloss: 'to see' },
            { surface: 'الأَوَّلُ', lemma: 'أول', pos: 'noun', features: 'def.nom', gloss: 'the first' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'شَيْءٍ', lemma: 'شيء', pos: 'noun', features: 'indef.gen', gloss: 'thing' },
            { surface: 'فَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'yet not' },
            { surface: 'يَرْفَعُ', lemma: 'رفع', pos: 'verb', features: 'impf.3ms', gloss: 'to raise' },
            { surface: 'بِهِ', lemma: 'ب', pos: 'prep', features: '3ms', gloss: 'for it' },
            { surface: 'رَأْساً', lemma: 'رأس', pos: 'noun', features: 'indef.acc', gloss: 'a head (idiom: to pay heed)' },
          ],
        },
        {
          id: 'qr2-61-038',
          ar: 'وَلاَ يُلْقِيْ عَلَيْهِ بَالاً،',
          en: 'and gives it no thought,',
          tokens: [
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يُلْقِيْ', lemma: 'ألقى', pos: 'verb', features: 'impf.3ms', gloss: 'to cast, throw' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'on it' },
            { surface: 'بَالاً', lemma: 'بال', pos: 'noun', features: 'indef.acc', gloss: 'a mind, thought (idiom: to give thought to)' },
          ],
        },
        {
          id: 'qr2-61-039',
          ar: 'وَيَرَاهُ الثَّانِيْ فَيَعْرِفُ قِيْمَتَهُ وَيَجْتَهِدُ فِيْهِ،',
          en: 'while the second sees it, recognizes its worth, and strives with it,',
          tokens: [
            { surface: 'وَيَرَاهُ', lemma: 'رأى', pos: 'verb', features: 'conj+impf.3ms+3ms', gloss: 'and sees it' },
            { surface: 'الثَّانِيْ', lemma: 'ثاني', pos: 'noun', features: 'def.nom', gloss: 'the second' },
            { surface: 'فَيَعْرِفُ', lemma: 'عرف', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to know, recognize' },
            { surface: 'قِيْمَتَهُ', lemma: 'قيمة', pos: 'noun', features: 'acc+3ms', gloss: 'its worth' },
            { surface: 'وَيَجْتَهِدُ', lemma: 'اجتهد', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to strive, exert effort' },
            { surface: 'فِيْهِ', lemma: 'في', pos: 'prep', features: '3ms', gloss: 'with it, in it' },
          ],
        },
        {
          id: 'qr2-61-040',
          ar: 'حَتَّىٰ يُسَخِّرَهُ لِغَرَضِهِ.',
          en: 'until he harnesses it for his purpose.',
          tokens: [
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'يُسَخِّرَهُ', lemma: 'سخر', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to harness it' },
            { surface: 'لِغَرَضِهِ', lemma: 'غرض', pos: 'noun', features: 'gen+3ms', gloss: 'for his purpose' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَا الْفَرْقُ بَيْنَ الْجَاهِلِ وَالْعَالِمِ كَمَا وَصَفَ النَّصُّ؟',
          options: ['الْعَالِمُ يَعْرِفُ قِيْمَةَ الأَشْيَاءِ وَيَجْتَهِدُ فِيْهَا', 'الْجَاهِلُ أَكْثَرُ ذَكَاءً', 'لاَ فَرْقَ بَيْنَهُمَا'],
          answer: 0,
          qEn: 'What is the difference between the ignorant and the learned, as the text describes?',
          optionsEn: ['The learned recognizes the worth of things and strives with them', 'The ignorant is more intelligent', 'There is no difference between them'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: '',
        post: 'قِطَارَ الْبِضَاعَةِ.',
        en: 'It pulls the freight train.',
        options: ['تَجُرُّ', 'جَرَّتْ', 'تَجُرُّوْنَ', 'نَجُرُّ'],
        answer: 0,
        rationales: [
          '3rd feminine singular present (the locomotive, قاطرة, is feminine).',
          'Perfect 3rd feminine singular — it pulled (past).',
          '2nd masculine plural — you (all) pull.',
          '1st person plural — we pull.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَهُوَ أَسْرَعُ الْقُطُرِ',
        post: 'خَمْسَةً وَأَرْبَعِيْنَ مِيْلاً فِي السَّاعَةِ.',
        en: 'It is the fastest of the trains, covering forty-five miles an hour.',
        options: ['يَقْطَعُ', 'قَطَعَتْ', 'تَقْطَعِيْنَ', 'نَقْطَعُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular present (the express train, القطار, is masculine).',
          'Perfect 3rd feminine singular — it covered (past, wrong gender too).',
          '2nd feminine singular — you (f.) cover.',
          '1st person plural — we cover.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'تَجُرُّ قِطَارَ الْبِضَاعَةِ',
        pre: '',
        post: 'قِطَارَ الْبِضَاعَةِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَجُرُّ', 'يَجُرُّ', 'نَجُرُّ', 'يَجُرُّوْنَ'],
        answer: 0,
        rationales: ['1st person singular takes the prefix أَـ.', '', '', ''],
      },
      {
        type: 'shift',
        base: 'يَقْطَعُ نَحْوَ أَرْبَعِيْنَ مِيْلاً',
        pre: '',
        post: 'نَحْوَ أَرْبَعِيْنَ مِيْلاً',
        targetPerson: 'هُنَّ',
        targetEn: 'they (f.)',
        options: ['تَقْطَعْنَ', 'يَقْطَعُوْنَ', 'تَقْطَعُ', 'نَقْطَعُ'],
        answer: 0,
        rationales: ['3rd feminine plural takes the suffix ـْنَ.', '3rd masculine plural, wrong gender.', '3rd feminine singular, wrong number.', '1st person plural, wrong person.'],
      },
    ],
  },
};

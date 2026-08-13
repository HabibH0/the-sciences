// القراءة الراشدة, volume two, chapter 72 (printed heading "٧٢") --
// شِيْرُشَاه السُّوْرِيّ سُلْطَانُ الْهِنْدِ (١) -- "Sher Shah al-Suri, Sultan
// of India (1)".
//
// Source: _al-qir`atur-rashida 1-2.pdf, printed pages 238-240. Standalone
// biographical entry (like own ch68) on Sher Shah Suri, the Afghan-origin
// ruler who founded the Sur Empire in North India. Part 1 of 2: covers his
// modest origins and education in Jaunpur, and his exacting daily and
// administrative routine as sultan -- prayer and devotions, review of the
// army and its pay rolls, audiences with emirs/governors/foreign envoys,
// petitions, meals with scholars, Qur'an recitation, and his severity
// toward rebels and highway-robbers, sparing no one, kin included. The
// text breaks off cleanly at the printed "٭ ٭ ٭" end-of-chapter divider on
// p.240 (not tokenized, matching convention -- cf. own ch58/60/61); it is
// NOT a mid-topic cut. Part 2 (own ch73) opens a new topic on p.241 (his
// building of a great road, caravanserais, mosques and shade-trees from
// Sonargaon to Nilab, per its own "(٢)" heading), confirmed by inspecting
// p.241 directly.
//
// Register note: like own ch68, this is dense classical biographical
// prose, but here built mainly from long ثُمَّ-chained asyndetic/paratactic
// clauses describing a single day's routine (P2-P3) rather than إضافة-piled
// epithets -- this yields many short, simple impf.3ms clauses (easy
// comprehension scaffolding) alongside a very large one-off institutional
// vocabulary (court titles, offices, prayers), matching the pattern own
// ch68's header already flagged for this biographical sub-genre.
//
// Paragraphs: 5 blank-line-separated blocks. P1 (his good qualities,
// modest birth, education in جَوَنْ بُوْر/Jaunpur, rise to the throne) on
// p.238; P2 (how he divided his day/night between worship, justice, and
// army administration -- his pre-dawn and morning routine through Ishraq)
// spans p.238-239; P3 (his post-Ishraq routine: army review and
// enlistment, tax revenue, audiences with emirs/governors/envoys,
// petitions, his meal with scholars, midday rest, afternoon prayer and
// Qur'an recitation, state affairs -- and his own maxim about "the great
// man") spans p.239-240; P4 (his insistence on handling important matters
// personally rather than delegating them, and why) on p.240; P5 (his
// severity toward rebels, highway-robbers and tyrants, sparing no one)
// on p.240, followed by the printed "٭ ٭ ٭" divider.
//
// Sentence segmentation follows the project's standing convention of
// splitting at every ، . ؛ ! and ؟, never at a colon before reported
// speech (qr2-72-046 "وَكَانَ يَقُوْلُ: الرَّجُلُ الْكَبِيْرُ..." and
// qr2-72-048 "وَيَقُوْلُ: لاَ يَنْبَغِيْ..." both stay one clause after the
// colon). The printed list "مِنْ خَيْلٍ ، وَأَقْطَاعٍ ، وَأَمْوَالٍ ،
// وَغَيْرَ ذٰلِكَ" (qr2-72-021/024) is split at each of its commas exactly
// as printed, yielding four short two/three-token clauses in a row -- a
// literal application of the standing rule rather than a re-grouping.
//
// Footnoted vocabulary (Nadwi's own glosses, captured as book_note):
// بَاذِلًا (p.238 fn.1, "generous"), مِقْدَام (p.238 fn.2, "bold, daring
// against the enemy"), شَطْراً (p.238 fn.4, "a portion"), عَوَائِدِهِ
// (p.239 fn.1, "customary favors/kindnesses"), الْجِبَايَات (p.239 fn.2,
// "land-tax or levies"), ظَعْنٍ (p.240 fn.1, "travel"), and رَأْفَةٌ (p.240
// fn.2, "compassion and tenderness"). The place-name footnote (جَوْنْ
// بُوْر, p.238 fn.3) is folded into the token-level `gloss` on that proper
// noun instead, matching how place names are handled elsewhere in the
// corpus (cf. own ch68).
//
// Homographs (own-chapter suffix-2 convention, cf. own ch66's أشرف٢/
// ركاب٢): وِرْد "a litany" (qr2-72-012 etc., lemma 'ورد') is spelled
// identically to the unrelated verb وَرَدَ/تُوْرَدُ "to arrive, be
// delivered" (qr2-72-032, lemma 'ورد٢'); and يَقِيْلُ "to take a midday
// rest" (qr2-72-041, root ق ي ل, lemma 'قال٢') is spelled identically to
// قَالَ "to say" (root ق و ل, already known) -- both new senses are tagged
// with the ٢ suffix to keep them distinct dictionary entries from the
// existing/other lemma.
//
// Overlap with own ch68 (the book's other Sultan/historical-biography
// chapter): سُلْطَان، مُلْك، دَوْلَة and خِيَار all reuse the exact lemmas
// ch68 already taught (not re-added to this chapter's newWords); عَالِم
// (pl. عُلَمَاء) likewise reuses ch68's "scholar" lemma. أَقْبَلَ and
// يَحْضُرُ (lemma 'حضر') are tagged and glossed here but -- following how
// ch68 itself used both without listing them in its own newWords -- are
// treated as already-known rather than re-taught. Content words checked
// against the 536-lemma index and own ch61/62/63/66/68/69's newWords but
// judged too marginal/transparent to add to the teaching list (still
// tagged correctly at the token level): الدَّرْسِيَّة (derived from the
// already-known مَدْرَسَة), الأَسْئِلَة/سُؤَال (derived from this
// chapter's own newly-taught سَأَلَ), and خُصُوْصِيَّة (derived from the
// already-known خَاصّ).
export const CHAPTER = {
  id: 'ch72',
  number: 72,
  title: { ar: 'شِيْرُشَاه السُّوْرِيّ سُلْطَانُ الْهِنْدِ', en: 'Sher Shah Suri, Sultan of India (1)' },
  pages: [238, 239, 240],
  newWords: [
    'باذل', 'رحيم', 'مقدام', 'تعلم',
    'شطر', 'قضاء', 'عسكر', 'ثلث', 'تهجد',
    'ورد', 'حساب', 'أرشد', 'أهم', 'برنامج',
    'شوش', 'جماعة', 'مسبعة', 'إشراق', 'إقطاع', 'ظلم', 'أغاث', 'لدى', 'جباية',
    'عائدة', 'ألزم', 'عسكرية', 'تكلم', 'اختبر', 'ورد٢',
    'تمثل', 'مرزبان', 'سفير', 'وكيل', 'تحدث', 'عريضة', 'عامل', 'أملى',
    'مائدة', 'قال٢', 'تلاوة', 'قرآن', 'حكيم', 'مهمة', 'مهم',
    'ظعن', 'صرف',
    'باشر', 'انبغى', 'استصغر', 'رتبة', 'تغافل', 'ارتشاء',
    'عاقب', 'بغى', 'قطاع', 'عقوبة', 'عزر', 'تعزير', 'رأفة', 'صهر'
  ],
  lemmas: {
    'باذل': { gloss: 'generous, giving freely', book_note: 'بَاذِلًا: سَخِيًّا.' },
    'رحيم': { gloss: 'merciful' },
    'مقدام': { gloss: 'bold, daring against the enemy', book_note: 'مِقْدَامٌ جمع مَقَادِيْم: كَثِيْرُ الْإِقْدَامِ عَلَى الْعَدُوِّ، جَرِيْءٌ فِي الْحَرْبِ.' },
    'تعلم': { gloss: 'to learn, study' },
    'شطر': { gloss: 'a portion, half', book_note: 'شَطْراً: جُزْءاً.' },
    'قضاء': { gloss: 'judgment, adjudication' },
    'عسكر': { gloss: 'army, troops' },
    'ثلث': { gloss: 'a third (of)' },
    'تهجد': { gloss: 'to perform the night-vigil prayer (tahajjud)' },
    'ورد': { gloss: 'a litany, devotional recitation (pl. أَوْرَاد)' },
    'حساب': { gloss: 'account, reckoning' },
    'أرشد': { gloss: 'to guide, direct' },
    'أهم': { gloss: 'to concern, be of concern to' },
    'برنامج': { gloss: 'program, schedule' },
    'شوش': { gloss: 'to muddle, disturb, throw into confusion' },
    'جماعة': { gloss: 'congregation, group, company' },
    'مسبعة': { gloss: 'a litany recited seven times (pl. مُسَبَّعَات)' },
    'إشراق': { gloss: 'sunrise; the Ishraq (mid-morning) prayer' },
    'إقطاع': { gloss: 'a land grant, fief' },
    'ظلم': { gloss: 'to wrong, oppress' },
    'أغاث': { gloss: 'to come to the rescue of, help' },
    'لدى': { gloss: 'with, in the presence of, at' },
    'جباية': { gloss: 'tax revenue, levy (pl. جِبَايَات)', book_note: 'جِبَايَةُ جمع جِبَايَات: الخراج أو الضرائب.' },
    'عائدة': { gloss: 'a customary favor, kindly practice (pl. عَوَائِد)', book_note: 'عَائِدة جمع عوائد: المعروف والصلة.' },
    'ألزم': { gloss: 'to oblige, bind, compel' },
    'عسكرية': { gloss: 'the army, the military corps' },
    'تكلم': { gloss: 'to speak, converse' },
    'اختبر': { gloss: 'to test, examine' },
    'ورد٢': { gloss: 'to arrive, be delivered (homograph of وِرْد "a litany" -- unrelated sense, same root و ر د)' },
    'تمثل': { gloss: 'to stand, present oneself (before someone)' },
    'مرزبان': { gloss: 'a margrave, provincial governor/noble (pl. مَرَازِبَة)' },
    'سفير': { gloss: 'ambassador, envoy' },
    'وكيل': { gloss: 'agent, representative, deputy' },
    'تحدث': { gloss: 'to converse, speak (with)' },
    'عريضة': { gloss: 'a petition, written request (pl. عَرَائِض)' },
    'عامل': { gloss: 'an official, agent, functionary' },
    'أملى': { gloss: 'to dictate' },
    'مائدة': { gloss: 'a (dining) table' },
    'قال٢': { gloss: 'to take a midday nap/rest (homograph of قَالَ "to say" -- unrelated root ق ي ل)' },
    'تلاوة': { gloss: 'recitation' },
    'قرآن': { gloss: 'the Qur’an' },
    'حكيم': { gloss: 'wise' },
    'مهمة': { gloss: 'an important matter, task (pl. مُهِمَّات)' },
    'مهم': { gloss: 'important' },
    'ظعن': { gloss: 'traveling, journeying', book_note: 'ظَعْن: سَفَر.' },
    'صرف': { gloss: 'to spend, devote (time)' },
    'باشر': { gloss: 'to undertake directly, do personally' },
    'انبغى': { gloss: 'to be proper, fitting; to behoove' },
    'استصغر': { gloss: 'to consider trivial, belittle' },
    'رتبة': { gloss: 'rank, position' },
    'تغافل': { gloss: 'to feign obliviousness, willfully overlook' },
    'ارتشاء': { gloss: 'bribe-taking, corruption' },
    'عاقب': { gloss: 'to punish' },
    'بغى': { gloss: 'to transgress, rebel unjustly (بَاغٍ pl. بُغَاة, "a rebel")' },
    'قطاع': { gloss: 'highway robbers, bandits (لِت. "cutters" of the road, قُطَّاع السُّبُل)' },
    'عقوبة': { gloss: 'punishment' },
    'عزر': { gloss: 'to reprimand, punish with discretionary chastisement' },
    'تعزير': { gloss: 'discretionary chastisement (ta’zir)' },
    'رأفة': { gloss: 'compassion, mercy', book_note: 'رَأْفَة: رحم وعطف.' },
    'صهر': { gloss: 'an in-law, relative by marriage' }
  },
  paragraphs: [
    {
      en: 'Sher Shah was among the finest of sultans: just, generous, merciful, brave, and bold in battle. His father was among the ordinary folk. Sher Shah used to study in Jaunpur and read school textbooks, and he never ceased striving and advancing until he attained the throne.',
      sentences: [
        {
          id: 'qr2-72-001',
          ar: 'كَانَ شِيْرُشَاهَ مِنْ خِيَارِ السَّلَاطِيْنِ ،',
          en: 'Sher Shah was among the finest of sultans,',
          tokens: [
            { surface: 'كَانَ', lemma: 'كان', pos: 'verb', features: 'perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'شِيْرُشَاهَ', lemma: 'شيرشاه', pos: 'proper', gloss: 'Sher Shah (the Sultan of India, subject of this biography; an indeclinable Persian-Arabic compound name -- "Lion King" -- that keeps its fatha ending regardless of grammatical role)' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among, from' },
            { surface: 'خِيَارِ', lemma: 'خيار', pos: 'noun', features: 'gen.constr', root: 'خ ي ر', gloss: 'the best, choicest of' },
            { surface: 'السَّلَاطِيْنِ', lemma: 'سلطان', pos: 'noun', features: 'def.gen.pl', root: 'س ل ط', gloss: 'the sultans' },
          ],
        },
        {
          id: 'qr2-72-002',
          ar: 'عَادِلًا بَاذِلًا رَحِيْمًا شُجَاعًا مِقْدَامًا ،',
          en: 'just, generous, merciful, brave, and bold in battle,',
          tokens: [
            { surface: 'عَادِلًا', lemma: 'عادل', pos: 'adj', features: 'indef.acc', gloss: 'just' },
            { surface: 'بَاذِلًا', lemma: 'باذل', pos: 'adj', features: 'indef.acc', root: 'ب ذ ل', gloss: 'generous, giving freely' },
            { surface: 'رَحِيْمًا', lemma: 'رحيم', pos: 'adj', features: 'indef.acc', root: 'ر ح م', gloss: 'merciful' },
            { surface: 'شُجَاعًا', lemma: 'شجاع', pos: 'adj', features: 'indef.acc', root: 'ش ج ع', gloss: 'brave, courageous' },
            { surface: 'مِقْدَامًا', lemma: 'مقدام', pos: 'adj', features: 'indef.acc', root: 'ق د م', gloss: 'bold, daring in the face of the enemy' },
          ],
        },
        {
          id: 'qr2-72-003',
          ar: 'وَكَانَ أَبُوْهُ مِنْ أَوْسَاطِ النَّاسِ ،',
          en: 'His father was among the ordinary folk,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'أَبُوْهُ', lemma: 'أب', pos: 'noun', features: 'nom.constr+3ms', root: 'أ ب و', gloss: 'his father' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'أَوْسَاطِ', lemma: 'وسط', pos: 'noun', features: 'gen.constr.pl', root: 'و س ط', gloss: 'the middling ranks of' },
            { surface: 'النَّاسِ', lemma: 'ناس', pos: 'noun', features: 'def.gen', gloss: 'the people' },
          ],
        },
        {
          id: 'qr2-72-004',
          ar: 'وَكَانَ شِيْرُشَاهَ يَتَعَلَّمُ فِيْ جَوَنٍ بُوْرَ ،',
          en: 'and Sher Shah used to study in Jaunpur,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be (auxiliary: "used to")' },
            { surface: 'شِيْرُشَاهَ', lemma: 'شيرشاه', pos: 'proper', gloss: 'Sher Shah' },
            { surface: 'يَتَعَلَّمُ', lemma: 'تعلم', pos: 'verb', features: 'impf.3ms', root: 'ع ل م', gloss: 'to learn, study' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'جَوَنٍ', lemma: 'جونبور', pos: 'proper', features: 'gen', gloss: 'Jaunpur (a city in Uttar Pradesh, India; a major Islamic cultural center in the 14th-15th centuries CE) -- 1st word of the name' },
            { surface: 'بُوْرَ', lemma: 'جونبور', pos: 'proper', gloss: '(name continued: "-pur")' },
          ],
        },
        {
          id: 'qr2-72-005',
          ar: 'وَيَقْرَأُ الْكُتُبَ الدَّرْسِيَّةَ ،',
          en: 'and read school textbooks,',
          tokens: [
            { surface: 'وَيَقْرَأُ', lemma: 'قرأ', pos: 'verb', features: 'conj+impf.3ms', root: 'ق ر أ', gloss: 'to read, recite' },
            { surface: 'الْكُتُبَ', lemma: 'كتاب', pos: 'noun', features: 'def.acc.pl', gloss: 'the books' },
            { surface: 'الدَّرْسِيَّةَ', lemma: 'درسي', pos: 'adj', features: 'def.acc', root: 'د ر س', gloss: 'school, scholastic (derived from the already-known مَدْرَسَة, "school")' },
          ],
        },
        {
          id: 'qr2-72-006',
          ar: 'وَلَمْ يَزَلْ يَجْتَهِدُ وَيَرْتَقِيْ حَتَّىٰ نَالَ الْمُلْكَ .',
          en: 'and he never ceased striving and advancing until he attained the throne.',
          tokens: [
            { surface: 'وَلَمْ', lemma: 'لم', pos: 'part', features: 'conj+neg', gloss: 'and not' },
            { surface: 'يَزَلْ', lemma: 'زال', pos: 'verb', features: 'jussive.3ms', root: 'ز ي ل', gloss: 'to cease (لَمْ يَزَلْ = "he never ceased to, kept on")' },
            { surface: 'يَجْتَهِدُ', lemma: 'اجتهد', pos: 'verb', features: 'impf.3ms', root: 'ج ه د', gloss: 'to strive, exert effort' },
            { surface: 'وَيَرْتَقِيْ', lemma: 'ارتقى', pos: 'verb', features: 'conj+impf.3ms', root: 'ر ق ي', gloss: 'to rise, advance, be promoted' },
            { surface: 'حَتَّىٰ', lemma: 'حتى', pos: 'part', gloss: 'until' },
            { surface: 'نَالَ', lemma: 'نال', pos: 'verb', features: 'perf.3ms', gloss: 'to attain, achieve' },
            { surface: 'الْمُلْكَ', lemma: 'ملك', pos: 'noun', features: 'def.acc', root: 'م ل ك', gloss: 'the kingdom, the throne' },
          ],
        },
      ],
      checks: [
        {
          q: 'أَيْنَ كَانَ شِيْرُشَاهَ يَتَعَلَّمُ؟',
          options: ['فِيْ جَوَنٍ بُوْرَ', 'فِيْ دِهْلِيْ', 'فِيْ أَكْرَة'],
          answer: 0,
          qEn: 'Where did Sher Shah use to study?',
          optionsEn: ['In Jaunpur', 'In Delhi', 'In Akra'],
        },
      ],
    },
    {
      en: 'He would allocate his time, in a day and a night: a portion for worship, a portion for justice and adjudication, and some of it for setting the army in order. He would wake from sleep in the last third of the night, wash, pray the night-vigil, and occupy himself with litanies for up to four hours; then look into the accounts of the various departments, and instruct the emirs on the matters that concerned them that day, guiding them to the day’s work schedule so they would not disturb his time afterward with questions. Then he would rise, perform ablution for the dawn prayer, and pray it in congregation; recite the ten sevenfold litanies and other devotional recitations; the emirs would come to him and greet him; he would rise and pray the Ishraq prayer; then ask the people about their needs and give them what they required -- horses, land grants, money, and other things -- so that they would not have to ask him at other times. Then he would turn to the wronged and those crying for help, and strive to come to their aid.',
      sentences: [
        {
          id: 'qr2-72-007',
          ar: 'وَكَانَ وَزَّعَ أَوْقَاتَهُ فِيْ يَوْمٍ وَلَيْلَةٍ ،',
          en: 'He would allocate his time, in a day and a night,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be (auxiliary, with وَزَّعَ = "had allocated, would allocate")' },
            { surface: 'وَزَّعَ', lemma: 'وزع', pos: 'verb', features: 'perf.3ms', gloss: 'to distribute, allocate' },
            { surface: 'أَوْقَاتَهُ', lemma: 'وقت', pos: 'noun', features: 'acc.pl+3ms', root: 'و ق ت', gloss: 'his times' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, within' },
            { surface: 'يَوْمٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen', gloss: 'a day' },
            { surface: 'وَلَيْلَةٍ', lemma: 'ليلة', pos: 'noun', features: 'conj+indef.gen', gloss: 'and a night' },
          ],
        },
        {
          id: 'qr2-72-008',
          ar: 'شَطْرًا مِنْهَا لِلْعِبَادَةِ ،',
          en: 'a portion of it for worship,',
          tokens: [
            { surface: 'شَطْرًا', lemma: 'شطر', pos: 'noun', features: 'indef.acc', root: 'ش ط ر', gloss: 'a portion, half' },
            { surface: 'مِنْهَا', lemma: 'من', pos: 'prep', features: '3fs', gloss: 'of it' },
            { surface: 'لِلْعِبَادَةِ', lemma: 'عبادة', pos: 'noun', features: 'def.gen', gloss: 'for worship' },
          ],
        },
        {
          id: 'qr2-72-009',
          ar: 'وَشَطْرًا لِلْعَدْلِ وَالْقَضَاءِ ،',
          en: 'a portion for justice and adjudication,',
          tokens: [
            { surface: 'وَشَطْرًا', lemma: 'شطر', pos: 'noun', features: 'conj+indef.acc', root: 'ش ط ر', gloss: 'and a portion' },
            { surface: 'لِلْعَدْلِ', lemma: 'عدل', pos: 'noun', features: 'def.gen', gloss: 'for justice' },
            { surface: 'وَالْقَضَاءِ', lemma: 'قضاء', pos: 'noun', features: 'conj+def.gen', root: 'ق ض ي', gloss: 'and adjudication, judgment' },
          ],
        },
        {
          id: 'qr2-72-010',
          ar: 'وَبَعْضَهَا لِإِصْلَاحِ الْعَسْكَرِ ،',
          en: 'and some of it for setting the army in order,',
          tokens: [
            { surface: 'وَبَعْضَهَا', lemma: 'بعض', pos: 'noun', features: 'conj+acc+3fs', gloss: 'and some of it' },
            { surface: 'لِإِصْلَاحِ', lemma: 'إصلاح', pos: 'noun', features: 'gen.constr', gloss: 'for the ordering, reform of' },
            { surface: 'الْعَسْكَرِ', lemma: 'عسكر', pos: 'noun', features: 'def.gen', root: 'ع س ك ر', gloss: 'the army' },
          ],
        },
        {
          id: 'qr2-72-011',
          ar: 'فَكَانَ يَنْتَبِهُ مِنَ النَّوْمِ فِيْ ثُلُثِ اللَّيْلِ الآخِرِ ،',
          en: 'and he would wake from sleep in the last third of the night,',
          tokens: [
            { surface: 'فَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', root: 'ك و ن', gloss: 'to be' },
            { surface: 'يَنْتَبِهُ', lemma: 'انتبه', pos: 'verb', features: 'impf.3ms', root: 'ن ب ه', gloss: 'to wake up, take notice' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'النَّوْمِ', lemma: 'نوم', pos: 'noun', features: 'def.gen', root: 'ن و م', gloss: 'sleep' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'ثُلُثِ', lemma: 'ثلث', pos: 'noun', features: 'gen.constr', root: 'ث ل ث', gloss: 'a third of' },
            { surface: 'اللَّيْلِ', lemma: 'ليل', pos: 'noun', features: 'def.gen', gloss: 'the night' },
            { surface: 'الآخِرِ', lemma: 'آخر', pos: 'adj', features: 'def.gen', gloss: 'the last, final' },
          ],
        },
        {
          id: 'qr2-72-012',
          ar: 'وَيَغْتَسِلُ وَيَتَهَجَّدُ وَيَشْتَغِلُ بِالأَوْرَادِ إِلَىٰ أَرْبَعِ سَاعَاتٍ ،',
          en: 'wash, pray the night-vigil, and occupy himself with litanies for up to four hours,',
          tokens: [
            { surface: 'وَيَغْتَسِلُ', lemma: 'اغتسل', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to wash oneself' },
            { surface: 'وَيَتَهَجَّدُ', lemma: 'تهجد', pos: 'verb', features: 'conj+impf.3ms', root: 'ه ج د', gloss: 'to perform the night-vigil prayer' },
            { surface: 'وَيَشْتَغِلُ', lemma: 'اشتغل', pos: 'verb', features: 'conj+impf.3ms', root: 'ش غ ل', gloss: 'to occupy oneself (with), be busy' },
            { surface: 'بِالأَوْرَادِ', lemma: 'ورد', pos: 'noun', features: 'def.gen.pl', root: 'و ر د', gloss: 'with the litanies, devotional recitations' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'up to' },
            { surface: 'أَرْبَعِ', lemma: 'أربع', pos: 'num', features: 'gen.constr', gloss: 'four' },
            { surface: 'سَاعَاتٍ', lemma: 'ساعة', pos: 'noun', features: 'indef.gen.pl', gloss: 'hours' },
          ],
        },
        {
          id: 'qr2-72-013',
          ar: 'ثُمَّ يَنْظُرُ فِيْ حِسَابَاتِ الإِدَارَاتِ الْمُخْتَلِفَةِ ،',
          en: 'then he would look into the accounts of the various departments,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَنْظُرُ', lemma: 'نظر', pos: 'verb', features: 'impf.3ms', gloss: 'to look, examine' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'into' },
            { surface: 'حِسَابَاتِ', lemma: 'حساب', pos: 'noun', features: 'gen.constr.pl', root: 'ح س ب', gloss: 'the accounts of' },
            { surface: 'الإِدَارَاتِ', lemma: 'إدارة', pos: 'noun', features: 'def.gen.pl', root: 'د و ر', gloss: 'the departments, administrations' },
            { surface: 'الْمُخْتَلِفَةِ', lemma: 'مختلف', pos: 'adj', features: 'def.gen', gloss: 'the various, different (derived from the already-known اِخْتَلَفَ, "to differ")' },
          ],
        },
        {
          id: 'qr2-72-014',
          ar: 'وَيُرْشِدُ الأُمَرَاءَ فِيْمَا يُهِمُّهُمْ مِنَ الأُمُوْرِ فِيْ ذٰلِكَ الْيَوْمِ ،',
          en: 'and instruct the emirs on the matters that concerned them that day,',
          tokens: [
            { surface: 'وَيُرْشِدُ', lemma: 'أرشد', pos: 'verb', features: 'conj+impf.3ms', root: 'ر ش د', gloss: 'to guide, direct' },
            { surface: 'الأُمَرَاءَ', lemma: 'أمير', pos: 'noun', features: 'def.acc.pl', gloss: 'the emirs, commanders' },
            { surface: 'فِيْمَا', lemma: 'ما', pos: 'rel', features: 'prep', gloss: 'concerning what' },
            { surface: 'يُهِمُّهُمْ', lemma: 'أهم', pos: 'verb', features: 'impf.3ms+3mp', root: 'ه م م', gloss: 'to concern, be of concern to' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'الأُمُوْرِ', lemma: 'أمر', pos: 'noun', features: 'def.gen.pl', gloss: 'the matters' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'on' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'الْيَوْمِ', lemma: 'يوم', pos: 'noun', features: 'def.gen', gloss: 'the day' },
          ],
        },
        {
          id: 'qr2-72-015',
          ar: 'وَيَهْدِيْهِمْ إِلَىٰ بَرْنَامِجِ الْعَمَلِ لِئَلاَّ يُشَوِّشُوْا أَوْقَاتَهُ بَعْدَ ذٰلِكَ بِالأَسْئِلَةِ ،',
          en: 'guiding them to the day’s work schedule so they would not disturb his time afterward with questions,',
          tokens: [
            { surface: 'وَيَهْدِيْهِمْ', lemma: 'هدى', pos: 'verb', features: 'conj+impf.3ms+3mp', root: 'ه د ي', gloss: 'to guide' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'بَرْنَامِجِ', lemma: 'برنامج', pos: 'noun', features: 'gen.constr', gloss: 'the program, schedule of' },
            { surface: 'الْعَمَلِ', lemma: 'عمل', pos: 'noun', features: 'def.gen', gloss: 'the work' },
            { surface: 'لِئَلاَّ', lemma: 'لئلا', pos: 'part', gloss: 'so that ... not, lest' },
            { surface: 'يُشَوِّشُوْا', lemma: 'شوش', pos: 'verb', features: 'subj.3mp', root: 'ش و ش', gloss: 'to muddle, disturb, throw into confusion' },
            { surface: 'أَوْقَاتَهُ', lemma: 'وقت', pos: 'noun', features: 'acc.pl+3ms', gloss: 'his times' },
            { surface: 'بَعْدَ', lemma: 'بعد', pos: 'prep', gloss: 'after' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'بِالأَسْئِلَةِ', lemma: 'سؤال', pos: 'noun', features: 'def.gen.pl', gloss: 'with questions (derived from this chapter’s own newly-taught سَأَلَ, "to ask")' },
          ],
        },
        {
          id: 'qr2-72-016',
          ar: 'ثُمَّ يَقُوْمُ وَيَتَوَضَّأُ لِصَلاَةِ الْفَجْرِ وَيُصَلِّيْهَا بِالْجَمَاعَةِ ،',
          en: 'then he would rise, perform ablution for the dawn prayer, and pray it in congregation,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَقُوْمُ', lemma: 'قام', pos: 'verb', features: 'impf.3ms', gloss: 'to get up, rise' },
            { surface: 'وَيَتَوَضَّأُ', lemma: 'توضأ', pos: 'verb', features: 'conj+impf.3ms', root: 'و ض أ', gloss: 'to perform ablution' },
            { surface: 'لِصَلاَةِ', lemma: 'صلاة', pos: 'noun', features: 'gen.constr', gloss: 'for the prayer of' },
            { surface: 'الْفَجْرِ', lemma: 'فجر', pos: 'noun', features: 'def.gen', root: 'ف ج ر', gloss: 'the dawn' },
            { surface: 'وَيُصَلِّيْهَا', lemma: 'صلى', pos: 'verb', features: 'conj+impf.3ms+3fs', gloss: 'and pray it' },
            { surface: 'بِالْجَمَاعَةِ', lemma: 'جماعة', pos: 'noun', features: 'def.gen', root: 'ج م ع', gloss: 'in congregation' },
          ],
        },
        {
          id: 'qr2-72-017',
          ar: 'ثُمَّ يَقْرَأُ الْمُسَبَّعَاتِ الْعَشَرَ وَغَيْرَهَا مِنَ الأَوْرَادِ ،',
          en: 'recite the ten sevenfold litanies and other devotional recitations,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَقْرَأُ', lemma: 'قرأ', pos: 'verb', features: 'impf.3ms', root: 'ق ر أ', gloss: 'to read, recite' },
            { surface: 'الْمُسَبَّعَاتِ', lemma: 'مسبعة', pos: 'noun', features: 'def.acc.pl', root: 'س ب ع', gloss: 'the sevenfold litanies' },
            { surface: 'الْعَشَرَ', lemma: 'عشرة', pos: 'num', features: 'def.acc', root: 'ع ش ر', gloss: 'the ten' },
            { surface: 'وَغَيْرَهَا', lemma: 'غير', pos: 'noun', features: 'conj+acc+3fs', gloss: 'and other than it, other' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of, among' },
            { surface: 'الأَوْرَادِ', lemma: 'ورد', pos: 'noun', features: 'def.gen.pl', gloss: 'the litanies' },
          ],
        },
        {
          id: 'qr2-72-018',
          ar: 'ثُمَّ يَحْضُرُ لَدَيْهِ الأُمَرَاءُ فَيُسَلِّمُوْنَ عَلَيْهِ ،',
          en: 'the emirs would come to him and greet him,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَحْضُرُ', lemma: 'حضر', pos: 'verb', features: 'impf.3ms', gloss: 'to come, be present' },
            { surface: 'لَدَيْهِ', lemma: 'لدى', pos: 'prep', features: '3ms', gloss: 'to him, in his presence' },
            { surface: 'الأُمَرَاءُ', lemma: 'أمير', pos: 'noun', features: 'def.nom.pl', gloss: 'the emirs' },
            { surface: 'فَيُسَلِّمُوْنَ', lemma: 'سلم', pos: 'verb', features: 'conj+impf.3mp', gloss: 'to greet with peace' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'upon him' },
          ],
        },
        {
          id: 'qr2-72-019',
          ar: 'ثُمَّ يَقُوْمُ وَيُصَلِّيْ صَلاَةَ الإِشْرَاقِ ،',
          en: 'he would rise and pray the Ishraq prayer,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَقُوْمُ', lemma: 'قام', pos: 'verb', features: 'impf.3ms', gloss: 'to get up' },
            { surface: 'وَيُصَلِّيْ', lemma: 'صلى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to pray' },
            { surface: 'صَلاَةَ', lemma: 'صلاة', pos: 'noun', features: 'acc.constr', gloss: 'the prayer of' },
            { surface: 'الإِشْرَاقِ', lemma: 'إشراق', pos: 'noun', features: 'def.gen', root: 'ش ر ق', gloss: 'the Ishraq (the mid-morning/sunrise prayer)' },
          ],
        },
        {
          id: 'qr2-72-020',
          ar: 'ثُمَّ يَسْأَلُ النَّاسَ عَنْ حَوَائِجِهِمْ وَيُعْطِيْهِمْ مَا يَحْتَاجُوْنَ إِلَيْهِ ،',
          en: 'then ask the people about their needs and give them what they required,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَسْأَلُ', lemma: 'سأل', pos: 'verb', features: 'impf.3ms', root: 'س أ ل', gloss: 'to ask' },
            { surface: 'النَّاسَ', lemma: 'ناس', pos: 'noun', features: 'def.acc', gloss: 'the people' },
            { surface: 'عَنْ', lemma: 'عن', pos: 'prep', gloss: 'about' },
            { surface: 'حَوَائِجِهِمْ', lemma: 'حاجة', pos: 'noun', features: 'gen.pl+3mp', gloss: 'their needs' },
            { surface: 'وَيُعْطِيْهِمْ', lemma: 'أعطى', pos: 'verb', features: 'conj+impf.3ms+3mp', root: 'ع ط و', gloss: 'to give them' },
            { surface: 'مَا', lemma: 'ما', pos: 'rel', gloss: 'what' },
            { surface: 'يَحْتَاجُوْنَ', lemma: 'احتاج', pos: 'verb', features: 'impf.3mp', gloss: 'to need' },
            { surface: 'إِلَيْهِ', lemma: 'إلى', pos: 'prep', features: '3ms', gloss: 'for it' },
          ],
        },
        {
          id: 'qr2-72-021',
          ar: 'مِنْ خَيْلٍ ،',
          en: 'horses,',
          tokens: [
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'خَيْلٍ', lemma: 'خيل', pos: 'noun', features: 'indef.gen', gloss: 'horses' },
          ],
        },
        {
          id: 'qr2-72-022',
          ar: 'وَأَقْطَاعٍ ،',
          en: 'and land grants,',
          tokens: [
            { surface: 'وَأَقْطَاعٍ', lemma: 'إقطاع', pos: 'noun', features: 'conj+indef.gen.pl', root: 'ق ط ع', gloss: 'and land grants, fiefs' },
          ],
        },
        {
          id: 'qr2-72-023',
          ar: 'وَأَمْوَالٍ ،',
          en: 'and money,',
          tokens: [
            { surface: 'وَأَمْوَالٍ', lemma: 'مال', pos: 'noun', features: 'conj+indef.gen.pl', gloss: 'and wealth, money' },
          ],
        },
        {
          id: 'qr2-72-024',
          ar: 'وَغَيْرَ ذٰلِكَ ،',
          en: 'and other things,',
          tokens: [
            { surface: 'وَغَيْرَ', lemma: 'غير', pos: 'noun', features: 'conj+acc.constr', gloss: 'and other than' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
          ],
        },
        {
          id: 'qr2-72-025',
          ar: 'لِئَلاَّ يَسْأَلُوْهُ فِيْ غَيْرِ ذٰلِكَ مِنَ الأَوْقَاتِ ،',
          en: 'so that they would not have to ask him at other times,',
          tokens: [
            { surface: 'لِئَلاَّ', lemma: 'لئلا', pos: 'part', gloss: 'so that ... not' },
            { surface: 'يَسْأَلُوْهُ', lemma: 'سأل', pos: 'verb', features: 'subj.3mp+3ms', root: 'س أ ل', gloss: 'to ask him' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'at' },
            { surface: 'غَيْرِ', lemma: 'غير', pos: 'noun', features: 'gen.constr', gloss: 'other than' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'الأَوْقَاتِ', lemma: 'وقت', pos: 'noun', features: 'def.gen.pl', gloss: 'the times' },
          ],
        },
        {
          id: 'qr2-72-026',
          ar: 'ثُمَّ يَتَوَجَّهُ إِلَىٰ الْمَظْلُوْمِيْنَ وَالْمُسْتَغِيْثِيْنَ ،',
          en: 'Then he would turn to the wronged and those crying for help,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَتَوَجَّهُ', lemma: 'توجه', pos: 'verb', features: 'impf.3ms', gloss: 'to turn, head' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الْمَظْلُوْمِيْنَ', lemma: 'ظلم', pos: 'noun', features: 'def.acc.pl', root: 'ظ ل م', gloss: 'the wronged' },
            { surface: 'وَالْمُسْتَغِيْثِيْنَ', lemma: 'استغاث', pos: 'noun', features: 'conj+def.acc.pl', root: 'غ و ث', gloss: 'and those crying for help' },
          ],
        },
        {
          id: 'qr2-72-027',
          ar: 'وَيَجْتَهِدُ فِيْ إِغَاثَتِهِمْ .',
          en: 'and strive to come to their aid.',
          tokens: [
            { surface: 'وَيَجْتَهِدُ', lemma: 'اجتهد', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to strive, exert effort' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, to' },
            { surface: 'إِغَاثَتِهِمْ', lemma: 'أغاث', pos: 'noun', features: 'gen+3mp', root: 'غ و ث', gloss: 'helping, coming to the rescue of them' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَفْعَلُ شِيْرُشَاهَ فِيْ ثُلُثِ اللَّيْلِ الآخِرِ؟',
          options: ['يَغْتَسِلُ وَيَتَهَجَّدُ وَيَشْتَغِلُ بِالأَوْرَادِ', 'يَنَامُ', 'يَخْرُجُ لِلصَّيْدِ'],
          answer: 0,
          qEn: 'What did Sher Shah do in the last third of the night?',
          optionsEn: ['He washed, prayed the night-vigil, and busied himself with litanies', 'He slept', 'He went out hunting'],
        },
        {
          q: 'لِمَاذَا كَانَ يَهْدِيْ الأُمَرَاءَ إِلَىٰ بَرْنَامِجِ الْعَمَلِ؟',
          options: ['لِئَلاَّ يُشَوِّشُوْا أَوْقَاتَهُ بِالأَسْئِلَةِ', 'لِيَتَعَلَّمُوا الْقِرَاءَةَ', 'لِيُسَافِرُوا مَعَهُ'],
          answer: 0,
          qEn: 'Why did he guide the emirs to the work schedule?',
          optionsEn: ['So that they would not disturb his time with questions', 'So they would learn to read', 'So they would travel with him'],
        },
      ],
    },
    {
      en: 'Among his customary practices after Ishraq was that he obliged himself to have the troops paraded before him so he could inspect them and their weapons; then whoever wished to enroll in the army would be presented to him, and he would speak with him and test him, then order that his name be entered in the register. Then the tax revenues arriving from his lands each day would be presented to him; the emirs, provincial governors, ambassadors of other states, and their agents would stand before him, and he would converse with them; then the petitions of the emirs and officials would be presented to him, and he would hear them and dictate their answers. Then he would rise and go to his meal, at which a company of scholars and shaykhs sat; occupy himself for about two hours with private matters; take his midday rest until noon; rise and pray in congregation; occupy himself reciting the wise Qur’an; then attend to the important matters of state. He never neglected any of this whether traveling or at home, and used to say: "The great man is the one who devotes his time to important matters."',
      sentences: [
        {
          id: 'qr2-72-028',
          ar: 'وَمِنْ عَوَائِدِهِ بَعْدَ الإِشْرَاقِ أَنَّهُ أَلْزَمَ نَفْسَهُ أَنْ يُعْرَضَ عَلَيْهِ الْعَسَاكِرُ فَيَنْظُرُ إِلَيْهِمْ وَإِلَىٰ أَسْلِحَتِهِمْ ،',
          en: 'Among his customary practices after Ishraq was that he obliged himself to have the troops paraded before him so he could inspect them and their weapons,',
          tokens: [
            { surface: 'وَمِنْ', lemma: 'من', pos: 'prep', features: 'conj', gloss: 'and among' },
            { surface: 'عَوَائِدِهِ', lemma: 'عائدة', pos: 'noun', features: 'gen.pl+3ms', root: 'ع و د', gloss: 'his customary practices' },
            { surface: 'بَعْدَ', lemma: 'بعد', pos: 'prep', gloss: 'after' },
            { surface: 'الإِشْرَاقِ', lemma: 'إشراق', pos: 'noun', features: 'def.gen', gloss: 'the Ishraq (prayer)' },
            { surface: 'أَنَّهُ', lemma: 'أن', pos: 'part', features: '3ms', gloss: 'that he' },
            { surface: 'أَلْزَمَ', lemma: 'ألزم', pos: 'verb', features: 'perf.3ms', root: 'ل ز م', gloss: 'to oblige, bind, compel' },
            { surface: 'نَفْسَهُ', lemma: 'نفس', pos: 'noun', features: 'acc+3ms', gloss: 'himself' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that (subjunctive particle)' },
            { surface: 'يُعْرَضَ', lemma: 'عرض', pos: 'verb', features: 'subj.pass.3ms', root: 'ع ر ض', gloss: 'to be presented, paraded' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'before him' },
            { surface: 'الْعَسَاكِرُ', lemma: 'عسكر', pos: 'noun', features: 'def.nom.pl', gloss: 'the troops' },
            { surface: 'فَيَنْظُرُ', lemma: 'نظر', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to look, examine' },
            { surface: 'إِلَيْهِمْ', lemma: 'إلى', pos: 'prep', features: '3mp', gloss: 'at them' },
            { surface: 'وَإِلَىٰ', lemma: 'إلى', pos: 'prep', features: 'conj', gloss: 'and at' },
            { surface: 'أَسْلِحَتِهِمْ', lemma: 'سلاح', pos: 'noun', features: 'gen.pl+3mp', root: 'س ل ح', gloss: 'their weapons' },
          ],
        },
        {
          id: 'qr2-72-029',
          ar: 'ثُمَّ يُعْرَضُ عَلَيْهِ مَنْ يُرِيْدُ أَنْ يَثْبُتَ فِي الْعَسْكَرِيَّةِ ،',
          en: 'then whoever wished to enroll in the army would be presented to him,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يُعْرَضُ', lemma: 'عرض', pos: 'verb', features: 'impf.pass.3ms', gloss: 'to be presented' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'مَنْ', lemma: 'من', pos: 'rel', gloss: 'whoever' },
            { surface: 'يُرِيْدُ', lemma: 'أراد', pos: 'verb', features: 'impf.3ms', gloss: 'to want' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that' },
            { surface: 'يَثْبُتَ', lemma: 'ثبت', pos: 'verb', features: 'subj.3ms', gloss: 'to be enrolled, established' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الْعَسْكَرِيَّةِ', lemma: 'عسكرية', pos: 'noun', features: 'def.gen', root: 'ع س ك ر', gloss: 'the army, the military corps' },
          ],
        },
        {
          id: 'qr2-72-030',
          ar: 'فَيَتَكَلَّمُ مَعَهُ وَيَخْتَبِرُهُ ،',
          en: 'and he would speak with him and test him,',
          tokens: [
            { surface: 'فَيَتَكَلَّمُ', lemma: 'تكلم', pos: 'verb', features: 'conj+impf.3ms', root: 'ك ل م', gloss: 'to speak, converse' },
            { surface: 'مَعَهُ', lemma: 'مع', pos: 'prep', features: '3ms', gloss: 'with him' },
            { surface: 'وَيَخْتَبِرُهُ', lemma: 'اختبر', pos: 'verb', features: 'conj+impf.3ms+3ms', root: 'خ ب ر', gloss: 'to test, examine' },
          ],
        },
        {
          id: 'qr2-72-031',
          ar: 'ثُمَّ يَأْمُرُ أَنْ يُثْبَتَ اسْمُهُ فِي الْعَسْكَرِيَّةِ ،',
          en: 'then order that his name be entered in the register,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَأْمُرُ', lemma: 'أمر', pos: 'verb', features: 'impf.3ms', gloss: 'to order, command' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that' },
            { surface: 'يُثْبَتَ', lemma: 'ثبت', pos: 'verb', features: 'subj.pass.3ms', gloss: 'to be recorded, entered' },
            { surface: 'اسْمُهُ', lemma: 'اسم', pos: 'noun', features: 'nom+3ms', root: 'س م و', gloss: 'his name' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'in' },
            { surface: 'الْعَسْكَرِيَّةِ', lemma: 'عسكرية', pos: 'noun', features: 'def.gen', gloss: 'the army’s register/corps' },
          ],
        },
        {
          id: 'qr2-72-032',
          ar: 'ثُمَّ يُعْرَضُ عَلَيْهِ الْجِبَايَاتُ الَّتِيْ تُوْرَدُ عَلَيْهِ مِنْ بِلاَدِهِ كُلَّ يَوْمٍ ،',
          en: 'Then the tax revenues arriving from his lands each day would be presented to him,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يُعْرَضُ', lemma: 'عرض', pos: 'verb', features: 'impf.pass.3ms', gloss: 'to be presented' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'الْجِبَايَاتُ', lemma: 'جباية', pos: 'noun', features: 'def.nom.pl', root: 'ج ب ي', gloss: 'the tax revenues' },
            { surface: 'الَّتِيْ', lemma: 'الذي', pos: 'rel', gloss: 'which' },
            { surface: 'تُوْرَدُ', lemma: 'ورد٢', pos: 'verb', features: 'impf.pass.3fs', root: 'و ر د', gloss: 'to arrive, be brought, be delivered' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'from' },
            { surface: 'بِلاَدِهِ', lemma: 'بلد', pos: 'noun', features: 'gen.pl+3ms', gloss: 'his lands' },
            { surface: 'كُلَّ', lemma: 'كل', pos: 'noun', features: 'acc.constr', gloss: 'every' },
            { surface: 'يَوْمٍ', lemma: 'يوم', pos: 'noun', features: 'indef.gen', gloss: 'day' },
          ],
        },
        {
          id: 'qr2-72-033',
          ar: 'ثُمَّ يَتَمَثَّلُ بَيْنَ يَدَيْهِ الأُمَرَاءُ وَالْمَرَازِبَةُ ،',
          en: 'the emirs and the provincial governors would stand before him,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَتَمَثَّلُ', lemma: 'تمثل', pos: 'verb', features: 'impf.3ms', root: 'م ث ل', gloss: 'to stand, present oneself' },
            { surface: 'بَيْنَ', lemma: 'بين', pos: 'prep', gloss: 'between, before' },
            { surface: 'يَدَيْهِ', lemma: 'يد', pos: 'noun', features: 'gen.du+3ms', gloss: 'his two hands (idiom: "before him")' },
            { surface: 'الأُمَرَاءُ', lemma: 'أمير', pos: 'noun', features: 'def.nom.pl', gloss: 'the emirs' },
            { surface: 'وَالْمَرَازِبَةُ', lemma: 'مرزبان', pos: 'noun', features: 'conj+def.nom.pl', gloss: 'and the provincial governors' },
          ],
        },
        {
          id: 'qr2-72-034',
          ar: 'وَسُفَرَاءُ الدُّوَلِ وَالْوُكَلاَءُ ،',
          en: 'ambassadors of other states, and their agents,',
          tokens: [
            { surface: 'وَسُفَرَاءُ', lemma: 'سفير', pos: 'noun', features: 'conj+nom.constr.pl', root: 'س ف ر', gloss: 'and the ambassadors of' },
            { surface: 'الدُّوَلِ', lemma: 'دولة', pos: 'noun', features: 'def.gen.pl', gloss: 'the states' },
            { surface: 'وَالْوُكَلاَءُ', lemma: 'وكيل', pos: 'noun', features: 'conj+def.nom.pl', root: 'و ك ل', gloss: 'and the agents, representatives' },
          ],
        },
        {
          id: 'qr2-72-035',
          ar: 'فَيَتَحَدَّثُ مَعَهُمْ ،',
          en: 'and he would converse with them,',
          tokens: [
            { surface: 'فَيَتَحَدَّثُ', lemma: 'تحدث', pos: 'verb', features: 'conj+impf.3ms', root: 'ح د ث', gloss: 'to converse, speak' },
            { surface: 'مَعَهُمْ', lemma: 'مع', pos: 'prep', features: '3mp', gloss: 'with them' },
          ],
        },
        {
          id: 'qr2-72-036',
          ar: 'ثُمَّ تُعْرَضُ عَلَيْهِ عَرَائِضُ الأُمَرَاءِ وَالْعُمَّالِ ،',
          en: 'then the petitions of the emirs and officials would be presented to him,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'تُعْرَضُ', lemma: 'عرض', pos: 'verb', features: 'impf.pass.3fs', gloss: 'to be presented' },
            { surface: 'عَلَيْهِ', lemma: 'على', pos: 'prep', features: '3ms', gloss: 'to him' },
            { surface: 'عَرَائِضُ', lemma: 'عريضة', pos: 'noun', features: 'nom.constr.pl', root: 'ع ر ض', gloss: 'the petitions of' },
            { surface: 'الأُمَرَاءِ', lemma: 'أمير', pos: 'noun', features: 'def.gen.pl', gloss: 'the emirs' },
            { surface: 'وَالْعُمَّالِ', lemma: 'عامل', pos: 'noun', features: 'conj+def.gen.pl', root: 'ع م ل', gloss: 'and the officials' },
          ],
        },
        {
          id: 'qr2-72-037',
          ar: 'فَيَسْمَعُهَا وَيُمْلِيْ جَوَابَهَا ،',
          en: 'and he would hear them and dictate their answers,',
          tokens: [
            { surface: 'فَيَسْمَعُهَا', lemma: 'سمع', pos: 'verb', features: 'conj+impf.3ms+3fs', gloss: 'to hear' },
            { surface: 'وَيُمْلِيْ', lemma: 'أملى', pos: 'verb', features: 'conj+impf.3ms', root: 'م ل و', gloss: 'to dictate' },
            { surface: 'جَوَابَهَا', lemma: 'جواب', pos: 'noun', features: 'acc+3fs', gloss: 'their answer' },
          ],
        },
        {
          id: 'qr2-72-038',
          ar: 'ثُمَّ يَقُوْمُ وَيُقْبِلُ إِلَىٰ الطَّعَامِ ،',
          en: 'Then he would rise and go to his meal,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَقُوْمُ', lemma: 'قام', pos: 'verb', features: 'impf.3ms', gloss: 'to get up' },
            { surface: 'وَيُقْبِلُ', lemma: 'أقبل', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to turn toward, come to' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الطَّعَامِ', lemma: 'طعام', pos: 'noun', features: 'def.gen', gloss: 'the food, meal' },
          ],
        },
        {
          id: 'qr2-72-039',
          ar: 'وَعَلَىٰ مَائِدَتِهِ جَمَاعَةٌ مِنَ الْعُلَمَاءِ وَالْمَشَايِخِ ،',
          en: 'at which a company of scholars and shaykhs sat,',
          tokens: [
            { surface: 'وَعَلَىٰ', lemma: 'على', pos: 'prep', features: 'conj', gloss: 'and upon, at' },
            { surface: 'مَائِدَتِهِ', lemma: 'مائدة', pos: 'noun', features: 'gen+3ms', root: 'م ي د', gloss: 'his table' },
            { surface: 'جَمَاعَةٌ', lemma: 'جماعة', pos: 'noun', features: 'indef.nom', gloss: 'a group, company' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'الْعُلَمَاءِ', lemma: 'عالم', pos: 'noun', features: 'def.gen.pl', gloss: 'the scholars' },
            { surface: 'وَالْمَشَايِخِ', lemma: 'شيخ', pos: 'noun', features: 'conj+def.gen.pl', gloss: 'and the shaykhs' },
          ],
        },
        {
          id: 'qr2-72-040',
          ar: 'ثُمَّ يَشْتَغِلُ نَحْوَ سَاعَتَيْنِ بِأُمُوْرٍ خُصُوْصِيَّةٍ ،',
          en: 'then occupy himself for about two hours with private matters,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَشْتَغِلُ', lemma: 'اشتغل', pos: 'verb', features: 'impf.3ms', gloss: 'to occupy oneself with' },
            { surface: 'نَحْوَ', lemma: 'نحو', pos: 'adv', gloss: 'about, approximately' },
            { surface: 'سَاعَتَيْنِ', lemma: 'ساعة', pos: 'noun', features: 'indef.acc.du', gloss: 'two hours' },
            { surface: 'بِأُمُوْرٍ', lemma: 'أمر', pos: 'noun', features: 'indef.gen.pl', gloss: 'with matters' },
            { surface: 'خُصُوْصِيَّةٍ', lemma: 'خصوصية', pos: 'adj', features: 'indef.gen', root: 'خ ص ص', gloss: 'private, particular (derived from the already-known خَاصّ)' },
          ],
        },
        {
          id: 'qr2-72-041',
          ar: 'وَيَقِيْلُ إِلَىٰ وَقْتِ الظُّهْرِ ،',
          en: 'take his midday rest until noon,',
          tokens: [
            { surface: 'وَيَقِيْلُ', lemma: 'قال٢', pos: 'verb', features: 'conj+impf.3ms', root: 'ق ي ل', gloss: 'to take a midday nap/rest' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'until' },
            { surface: 'وَقْتِ', lemma: 'وقت', pos: 'noun', features: 'gen.constr', gloss: 'the time of' },
            { surface: 'الظُّهْرِ', lemma: 'ظهر', pos: 'noun', features: 'def.gen', root: 'ظ ه ر', gloss: 'noon' },
          ],
        },
        {
          id: 'qr2-72-042',
          ar: 'ثُمَّ يَقُوْمُ وَيُصَلِّيْ بِجَمَاعَةٍ ،',
          en: 'rise and pray in congregation,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'يَقُوْمُ', lemma: 'قام', pos: 'verb', features: 'impf.3ms', gloss: 'to get up' },
            { surface: 'وَيُصَلِّيْ', lemma: 'صلى', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to pray' },
            { surface: 'بِجَمَاعَةٍ', lemma: 'جماعة', pos: 'noun', features: 'indef.gen', gloss: 'in congregation' },
          ],
        },
        {
          id: 'qr2-72-043',
          ar: 'وَيَشْتَغِلُ بِتِلاَوَةِ الْقُرْآنِ الْحَكِيْمِ ،',
          en: 'occupy himself reciting the wise Qur’an,',
          tokens: [
            { surface: 'وَيَشْتَغِلُ', lemma: 'اشتغل', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to occupy oneself with' },
            { surface: 'بِتِلاَوَةِ', lemma: 'تلاوة', pos: 'noun', features: 'gen.constr', root: 'ت ل و', gloss: 'with the recitation of' },
            { surface: 'الْقُرْآنِ', lemma: 'قرآن', pos: 'noun', features: 'def.gen', root: 'ق ر أ', gloss: 'the Qur’an' },
            { surface: 'الْحَكِيْمِ', lemma: 'حكيم', pos: 'adj', features: 'def.gen', root: 'ح ك م', gloss: 'the wise' },
          ],
        },
        {
          id: 'qr2-72-044',
          ar: 'ثُمَّ بِمُهِمَّاتِ الأُمُوْرِ لِلدَّوْلَةِ ،',
          en: 'then attend to the important matters of state,',
          tokens: [
            { surface: 'ثُمَّ', lemma: 'ثم', pos: 'part', gloss: 'then' },
            { surface: 'بِمُهِمَّاتِ', lemma: 'مهمة', pos: 'noun', features: 'gen.constr.pl', root: 'ه م م', gloss: 'with the important matters of' },
            { surface: 'الأُمُوْرِ', lemma: 'أمر', pos: 'noun', features: 'def.gen.pl', gloss: 'the matters' },
            { surface: 'لِلدَّوْلَةِ', lemma: 'دولة', pos: 'noun', features: 'def.gen', gloss: 'for the state' },
          ],
        },
        {
          id: 'qr2-72-045',
          ar: 'وَكَانَ لاَ يَتْرُكُ شَيْئاً مِنْ ذٰلِكَ فِيْ ظَعْنٍ وَلاَ إِقَامَةٍ ،',
          en: 'He never neglected any of this whether traveling or at home,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَتْرُكُ', lemma: 'ترك', pos: 'verb', features: 'impf.3ms', gloss: 'to leave, neglect' },
            { surface: 'شَيْئاً', lemma: 'شيء', pos: 'noun', features: 'indef.acc', gloss: 'anything' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'ذٰلِكَ', lemma: 'ذلك', pos: 'dem', gloss: 'that' },
            { surface: 'فِيْ', lemma: 'في', pos: 'prep', gloss: 'in, during' },
            { surface: 'ظَعْنٍ', lemma: 'ظعن', pos: 'noun', features: 'indef.gen', root: 'ظ ع ن', gloss: 'travel, journeying' },
            { surface: 'وَلاَ', lemma: 'لا', pos: 'part', features: 'conj+neg', gloss: 'nor' },
            { surface: 'إِقَامَةٍ', lemma: 'إقامة', pos: 'noun', features: 'indef.gen', root: 'ق و م', gloss: 'residing, staying' },
          ],
        },
        {
          id: 'qr2-72-046',
          ar: 'وَكَانَ يَقُوْلُ: الرَّجُلُ الْكَبِيْرُ مَنْ يَصْرِفُ أَوْقَاتَهُ فِي الأُمُوْرِ الْمُهِمَّةِ .',
          en: 'and used to say: "The great man is the one who devotes his time to important matters."',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'يَقُوْلُ', lemma: 'قال', pos: 'verb', features: 'impf.3ms', gloss: 'to say' },
            { surface: 'الرَّجُلُ', lemma: 'رجل', pos: 'noun', features: 'def.nom', gloss: 'the man' },
            { surface: 'الْكَبِيْرُ', lemma: 'كبير', pos: 'adj', features: 'def.nom', gloss: 'the great' },
            { surface: 'مَنْ', lemma: 'من', pos: 'rel', gloss: '(is) he who' },
            { surface: 'يَصْرِفُ', lemma: 'صرف', pos: 'verb', features: 'impf.3ms', root: 'ص ر ف', gloss: 'to devote, spend' },
            { surface: 'أَوْقَاتَهُ', lemma: 'وقت', pos: 'noun', features: 'acc.pl+3ms', gloss: 'his time' },
            { surface: 'فِي', lemma: 'في', pos: 'prep', gloss: 'to, in' },
            { surface: 'الأُمُوْرِ', lemma: 'أمر', pos: 'noun', features: 'def.gen.pl', gloss: 'the matters' },
            { surface: 'الْمُهِمَّةِ', lemma: 'مهم', pos: 'adj', features: 'def.gen', root: 'ه م م', gloss: 'the important' },
          ],
        },
      ],
      checks: [
        {
          q: 'مَاذَا كَانَ يَفْعَلُ شِيْرُشَاهَ بَعْدَ الإِشْرَاقِ؟',
          options: ['يَعْرِضُ عَلَيْهِ الْعَسَاكِرُ فَيَنْظُرُ إِلَيْهِمْ وَإِلَىٰ أَسْلِحَتِهِمْ', 'يَنَامُ إِلَى الظُّهْرِ', 'يُسَافِرُ إِلَى الْهِنْدِ'],
          answer: 0,
          qEn: 'What did Sher Shah do after the Ishraq prayer?',
          optionsEn: ['The troops were paraded before him, and he inspected them and their weapons', 'He slept until noon', 'He traveled to India'],
        },
        {
          q: 'مَاذَا كَانَ يَقُوْلُ شِيْرُشَاهَ عَنِ الرَّجُلِ الْكَبِيْرِ؟',
          options: ['هُوَ مَنْ يَصْرِفُ أَوْقَاتَهُ فِي الأُمُوْرِ الْمُهِمَّةِ', 'هُوَ مَنْ يَمْلِكُ مَالاً كَثِيْراً', 'هُوَ مَنْ لَهُ جَيْشٌ كَبِيْرٌ'],
          answer: 0,
          qEn: 'What did Sher Shah used to say about the great man?',
          optionsEn: ['He is the one who devotes his time to important matters', 'He is the one who possesses much wealth', 'He is the one who has a great army'],
        },
      ],
    },
    {
      en: 'He used to attend to important matters and undertake affairs himself, saying: "It is not proper for the one in authority to belittle what concerns him of affairs merely out of regard for the loftiness of his rank," casting it instead upon those around him among his men -- because they would not strive over it, and might sometimes turn a blind eye to it out of greed and bribery.',
      sentences: [
        {
          id: 'qr2-72-047',
          ar: 'وَكَانَ يَتَوَجَّهُ إِلَىٰ الْمُهِمَّاتِ وَيُبَاشِرُ الأُمُوْرَ بِنَفْسِهِ ،',
          en: 'He used to attend to important matters and undertake affairs himself,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'يَتَوَجَّهُ', lemma: 'توجه', pos: 'verb', features: 'impf.3ms', gloss: 'to turn, attend' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to' },
            { surface: 'الْمُهِمَّاتِ', lemma: 'مهمة', pos: 'noun', features: 'def.acc.pl', gloss: 'the important matters' },
            { surface: 'وَيُبَاشِرُ', lemma: 'باشر', pos: 'verb', features: 'conj+impf.3ms', root: 'ب ش ر', gloss: 'to undertake directly, do personally' },
            { surface: 'الأُمُوْرَ', lemma: 'أمر', pos: 'noun', features: 'def.acc.pl', gloss: 'the affairs' },
            { surface: 'بِنَفْسِهِ', lemma: 'نفس', pos: 'noun', features: 'gen+3ms', gloss: 'himself' },
          ],
        },
        {
          id: 'qr2-72-048',
          ar: 'وَيَقُوْلُ: لاَ يَنْبَغِيْ لِصَاحِبِ الأَمْرِ أَنْ يَسْتَصْغِرَ مَا يُهِمُّهُ مِنَ الأُمُوْرِ نَظَراً إِلَىٰ عُلُوِّ مَرْتَبَتِهِ ،',
          en: 'saying: "It is not proper for the one in authority to belittle what concerns him of affairs merely out of regard for the loftiness of his rank,"',
          tokens: [
            { surface: 'وَيَقُوْلُ', lemma: 'قال', pos: 'verb', features: 'conj+impf.3ms', gloss: 'to say' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَنْبَغِيْ', lemma: 'انبغى', pos: 'verb', features: 'impf.3ms', root: 'ب غ ي', gloss: 'to be proper, fitting; to behoove' },
            { surface: 'لِصَاحِبِ', lemma: 'صاحب', pos: 'noun', features: 'gen.constr', gloss: 'for the master, holder of' },
            { surface: 'الأَمْرِ', lemma: 'أمر', pos: 'noun', features: 'def.gen', gloss: 'the matter, authority' },
            { surface: 'أَنْ', lemma: 'أن', pos: 'part', gloss: 'that' },
            { surface: 'يَسْتَصْغِرَ', lemma: 'استصغر', pos: 'verb', features: 'subj.3ms', root: 'ص غ ر', gloss: 'to consider trivial, belittle' },
            { surface: 'مَا', lemma: 'ما', pos: 'rel', gloss: 'what' },
            { surface: 'يُهِمُّهُ', lemma: 'أهم', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to concern him' },
            { surface: 'مِنَ', lemma: 'من', pos: 'prep', gloss: 'of' },
            { surface: 'الأُمُوْرِ', lemma: 'أمر', pos: 'noun', features: 'def.gen.pl', gloss: 'the affairs' },
            { surface: 'نَظَراً', lemma: 'نظر', pos: 'noun', features: 'indef.acc', gloss: 'out of regard, consideration for' },
            { surface: 'إِلَىٰ', lemma: 'إلى', pos: 'prep', gloss: 'to, for' },
            { surface: 'عُلُوِّ', lemma: 'علو', pos: 'noun', features: 'gen.constr', root: 'ع ل و', gloss: 'the loftiness of' },
            { surface: 'مَرْتَبَتِهِ', lemma: 'رتبة', pos: 'noun', features: 'gen+3ms', root: 'ر ت ب', gloss: 'his rank' },
          ],
        },
        {
          id: 'qr2-72-049',
          ar: 'فَيُلْقِيْهَا عَلَىٰ مَنْ حَوْلَهُ مِنْ رِجَالِهِ ،',
          en: 'casting it instead upon those around him among his men,',
          tokens: [
            { surface: 'فَيُلْقِيْهَا', lemma: 'ألقى', pos: 'verb', features: 'conj+impf.3ms+3fs', gloss: 'to throw, cast' },
            { surface: 'عَلَىٰ', lemma: 'على', pos: 'prep', gloss: 'upon' },
            { surface: 'مَنْ', lemma: 'من', pos: 'rel', gloss: 'whoever, those who' },
            { surface: 'حَوْلَهُ', lemma: 'حول', pos: 'noun', features: 'acc+3ms', gloss: 'around him' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'رِجَالِهِ', lemma: 'رجل', pos: 'noun', features: 'gen.pl+3ms', gloss: 'his men' },
          ],
        },
        {
          id: 'qr2-72-050',
          ar: 'لأَنَّهُمْ لاَ يَجْتَهِدُوْنَ فِيْهَا ،',
          en: 'because they would not strive over it,',
          tokens: [
            { surface: 'لأَنَّهُمْ', lemma: 'لأن', pos: 'part', features: '3mp', gloss: 'because they' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَجْتَهِدُوْنَ', lemma: 'اجتهد', pos: 'verb', features: 'impf.3mp', gloss: 'to strive' },
            { surface: 'فِيْهَا', lemma: 'في', pos: 'prep', features: '3fs', gloss: 'over it' },
          ],
        },
        {
          id: 'qr2-72-051',
          ar: 'وَرُبَّمَا يَتَغَافَلُوْنَ عَنْهَا طَمَعاً وَارْتِشَاءً .',
          en: 'and might sometimes turn a blind eye to it out of greed and bribery.',
          tokens: [
            { surface: 'وَرُبَّمَا', lemma: 'ربما', pos: 'part', features: 'conj', gloss: 'and perhaps, sometimes' },
            { surface: 'يَتَغَافَلُوْنَ', lemma: 'تغافل', pos: 'verb', features: 'impf.3mp', root: 'غ ف ل', gloss: 'to feign obliviousness, willfully overlook' },
            { surface: 'عَنْهَا', lemma: 'عن', pos: 'prep', features: '3fs', gloss: 'about it' },
            { surface: 'طَمَعاً', lemma: 'طمع', pos: 'noun', features: 'indef.acc', root: 'ط م ع', gloss: 'out of greed' },
            { surface: 'وَارْتِشَاءً', lemma: 'ارتشاء', pos: 'noun', features: 'conj+indef.acc', root: 'ر ش و', gloss: 'and bribe-taking, corruption' },
          ],
        },
      ],
      checks: [
        {
          q: 'لِمَاذَا كَانَ لاَ يُلْقِيْ الْمُهِمَّاتِ عَلَىٰ رِجَالِهِ؟',
          options: ['لأَنَّهُمْ لاَ يَجْتَهِدُوْنَ فِيْهَا وَرُبَّمَا يَتَغَافَلُوْنَ عَنْهَا طَمَعاً', 'لأَنَّهُ لاَ يَثِقُ بِهِمْ أَصْلاً', 'لأَنَّهُمْ كَانُوا بَعِيْدِيْنَ عَنْهُ'],
          answer: 0,
          qEn: 'Why did he not cast important matters upon his men?',
          optionsEn: ['Because they would not strive over them and might turn a blind eye out of greed', 'Because he did not trust them at all', 'Because they were far away from him'],
        },
      ],
    },
    {
      en: 'He would punish rebels, highway robbers, and tyrants with the severest punishment, and reprimand them with the severest chastisement; no compassion for them would ever take hold of him, even if they were among his in-laws and relatives.',
      sentences: [
        {
          id: 'qr2-72-052',
          ar: 'وَكَانَ يُعَاقِبُ الْبُغَاةَ وَقُطَّاعَ السُّبُلِ وَالظَّلَمَةَ أَشَدَّ عُقُوْبَةٍ ،',
          en: 'He would punish rebels, highway robbers, and tyrants with the severest punishment,',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'يُعَاقِبُ', lemma: 'عاقب', pos: 'verb', features: 'impf.3ms', root: 'ع ق ب', gloss: 'to punish' },
            { surface: 'الْبُغَاةَ', lemma: 'بغى', pos: 'noun', features: 'def.acc.pl', root: 'ب غ ي', gloss: 'the rebels, transgressors' },
            { surface: 'وَقُطَّاعَ', lemma: 'قطاع', pos: 'noun', features: 'conj+acc.constr.pl', root: 'ق ط ع', gloss: 'and the robbers of' },
            { surface: 'السُّبُلِ', lemma: 'سبيل', pos: 'noun', features: 'def.gen.pl', gloss: 'the roads' },
            { surface: 'وَالظَّلَمَةَ', lemma: 'ظلم', pos: 'noun', features: 'conj+def.acc.pl', gloss: 'and the tyrants, oppressors' },
            { surface: 'أَشَدَّ', lemma: 'شديد', pos: 'adj', features: 'acc.constr', root: 'ش د د', gloss: 'more/most severe' },
            { surface: 'عُقُوْبَةٍ', lemma: 'عقوبة', pos: 'noun', features: 'indef.gen', root: 'ع ق ب', gloss: 'punishment' },
          ],
        },
        {
          id: 'qr2-72-053',
          ar: 'وَيُعَزِّرُهُمْ أَشَدَّ تَعْزِيْرٍ ،',
          en: 'and reprimand them with the severest chastisement,',
          tokens: [
            { surface: 'وَيُعَزِّرُهُمْ', lemma: 'عزر', pos: 'verb', features: 'conj+impf.3ms+3mp', root: 'ع ز ر', gloss: 'to reprimand, punish with discretionary chastisement' },
            { surface: 'أَشَدَّ', lemma: 'شديد', pos: 'adj', features: 'acc.constr', gloss: 'most severe' },
            { surface: 'تَعْزِيْرٍ', lemma: 'تعزير', pos: 'noun', features: 'indef.gen', root: 'ع ز ر', gloss: 'discretionary chastisement, ta’zir' },
          ],
        },
        {
          id: 'qr2-72-054',
          ar: 'وَكَانَ لاَ يَأْخُذُهُ بِهِمْ رَأْفَةٌ وَإِنْ كَانُوْا مِنْ أَصْهَارِهِ وَأَقْرِبَائِهِ .',
          en: 'no compassion for them would ever take hold of him, even if they were among his in-laws and relatives.',
          tokens: [
            { surface: 'وَكَانَ', lemma: 'كان', pos: 'verb', features: 'conj+perf.3ms', gloss: 'to be' },
            { surface: 'لاَ', lemma: 'لا', pos: 'part', features: 'neg', gloss: 'not' },
            { surface: 'يَأْخُذُهُ', lemma: 'أخذ', pos: 'verb', features: 'impf.3ms+3ms', gloss: 'to take hold of him' },
            { surface: 'بِهِمْ', lemma: 'ب', pos: 'prep', features: '3mp', gloss: 'regarding them, toward them' },
            { surface: 'رَأْفَةٌ', lemma: 'رأفة', pos: 'noun', features: 'indef.nom', root: 'ر أ ف', gloss: 'compassion, mercy' },
            { surface: 'وَإِنْ', lemma: 'إن', pos: 'part', features: 'conj', gloss: 'even if' },
            { surface: 'كَانُوْا', lemma: 'كان', pos: 'verb', features: 'perf.3mp', gloss: 'to be' },
            { surface: 'مِنْ', lemma: 'من', pos: 'prep', gloss: 'among' },
            { surface: 'أَصْهَارِهِ', lemma: 'صهر', pos: 'noun', features: 'gen.pl+3ms', root: 'ص ه ر', gloss: 'his in-laws' },
            { surface: 'وَأَقْرِبَائِهِ', lemma: 'قريب', pos: 'noun', features: 'conj+gen.pl+3ms', gloss: 'and his relatives' },
          ],
        },
      ],
      checks: [
        {
          q: 'هَلْ كَانَ شِيْرُشَاهَ يَرْحَمُ أَقَارِبَهُ إِذَا ظَلَمُوا؟',
          options: ['لاَ ، كَانَ لاَ يَأْخُذُهُ بِهِمْ رَأْفَةٌ', 'نَعَمْ ، كَانَ يَعْفُو عَنْهُمْ دَائِماً', 'لَمْ يَكُنْ لَهُ أَقَارِبُ'],
          answer: 0,
          qEn: 'Did Sher Shah show mercy to his relatives if they wronged others?',
          optionsEn: ['No, no compassion for them would ever take hold of him', 'Yes, he always pardoned them', 'He had no relatives'],
        },
      ],
    },
  ],
  workshop: {
    cloze: [
      {
        type: 'cloze',
        pre: 'وَكَانَ شِيْرُشَاهَ',
        post: 'فِيْ جَوَنٍ بُوْرَ.',
        en: 'Sher Shah used to study in Jaunpur.',
        options: ['يَتَعَلَّمُ', 'تَعَلَّمَتْ', 'تَتَعَلَّمِيْنَ', 'نَتَعَلَّمُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular present -- matches شِيْرُشَاهَ (he).',
          'Perfect 3rd feminine singular, wrong gender and tense.',
          '2nd feminine singular, wrong person.',
          '1st person plural, wrong person.',
        ],
      },
      {
        type: 'cloze',
        pre: 'وَكَانَ',
        post: 'الْبُغَاةَ وَقُطَّاعَ السُّبُلِ أَشَدَّ عُقُوْبَةٍ.',
        en: 'He would punish the rebels and highway robbers with the severest punishment.',
        options: ['يُعَاقِبُ', 'عَاقَبَتْ', 'تُعَاقِبِيْنَ', 'نُعَاقِبُ'],
        answer: 0,
        rationales: [
          '3rd masculine singular present -- matches he (Sher Shah).',
          'Perfect 3rd feminine singular, wrong gender and tense.',
          '2nd feminine singular, wrong person.',
          '1st person plural, wrong person.',
        ],
      },
    ],
    shift: [
      {
        type: 'shift',
        base: 'يَشْتَغِلُ بِالأَوْرَادِ',
        pre: '',
        post: 'بِالأَوْرَادِ',
        targetPerson: 'أَنَا',
        targetEn: 'I',
        options: ['أَشْتَغِلُ', 'يَشْتَغِلُ', 'نَشْتَغِلُ', 'يَشْتَغِلُوْنَ'],
        answer: 0,
        rationales: ['1st person singular takes the prefix أَـ.', '', '', ''],
      },
      {
        type: 'shift',
        base: 'يُرْشِدُ الأُمَرَاءَ',
        pre: '',
        post: 'الأُمَرَاءَ',
        targetPerson: 'هُمْ',
        targetEn: 'they (m.)',
        options: ['يُرْشِدُوْنَ', 'تُرْشِدُ', 'نُرْشِدُ', 'يُرْشِدُ'],
        answer: 0,
        rationales: ['3rd masculine plural takes the suffix ـُوْنَ.', '', '', ''],
      },
    ],
  },
};

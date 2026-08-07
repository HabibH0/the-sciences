// Module 12 — الجملة وشبه الجملة: مواضعهما، أحكام واو الحال وفاء الجواب، والقسم
//
// Content is adapted from the second subsection's second deck (النَحْوُ__3
// المعمول وغير المعمول__2 الجملة + شبه الجملة.apkg, 54 notes, all of them
// here). Where modules 10-11 worked through المعمول of الاسم and الفعل,
// this module closes the المعمول وغير المعمول chapter — and the whole
// نحو course — with الجملة (which sentences have a محل من الإعراب and
// which don't, in exhaustive detail: مرفوعة، منصوبة، مجرورة، مجزومة،
// معمولة بالتبعية, the eight أنواع with no محل, واو الحال's rules, فاء
// جواب الشرط's rules, and القسم) and شبه الجملة (all of it معمول: الظرف
// اللغو and المستقر, and the deck's own closing "خاتمة" notes on شبه
// الجملة after معرفة/نكرة, plus المنصوب بنزع الخافض).

export default {
  id: '12',
  title: 'الجملة وشبه الجملة',
  heading: 'المعمول وغير المعمول',
  subheading: 'الجملة وشبه الجملة',
  blurb: 'Which جمل have a محل من الإعراب and which don\'t, the rules of القسم, and شبه الجملة.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الجملة ذات المحل: تعريفها ومواضعها',
      subtitle: 'The Sentence with a Grammatical Position — where it is مرفوعة and where منصوبة',
      sourceRef: 'p. 164',
      concepts: [
        {
          heading: 'تعريف الجملة ذات المحل',
          lines: [
            { html: `The معمول sentence is called <bdi>الْجُمْلَةُ الَّتِي لَهَا مَحَلٌّ مِنَ الْإِعْرَاب</bdi> — the sentence that has a grammatical position, as though it were a single word standing in that إعراب slot.`, list: false },
          ],
          exercise: {
            prompt: `What is the معمول sentence called?`,
            kind: 'mcq',
            options: ['الجملة التي لها محل من الإعراب', 'الجملة التي لا محل لها من الإعراب', 'شبه الجملة', 'الجملة الابتدائية'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع الجملة المرفوعة بالأصالة',
          lines: [
            { html: `A sentence is مرفوعة بالأصالة in two positions:`, list: false },
            { html: `<bdi>خَبَرُ الْمُبْتَدَأ</bdi>, as in <bdi>﴿وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾</bdi> — <bdi>يُحِبُّ الْمُحْسِنِينَ</bdi> is the خبر clause`, list: true, bullet: true },
            { html: `<bdi>خَبَرُ إِنّ</bdi>, as in <bdi>﴿إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ﴾</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `In which two positions is a sentence مرفوعة بالأصالة?`,
            kind: 'mcq',
            options: ['خبر المبتدأ and خبر إن', 'مفعول به and مفعول له', 'الحال and التمييز', 'صلة الموصول and المعترضة'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع الجملة المنصوبة بالأصالة',
          lines: [
            { html: `A sentence is منصوبة بالأصالة in four positions:`, list: false },
            { table: { headers: ['#', 'الموضع', 'Example'], rows: [
              ['1', 'الْمَفْعُولُ بِهِ', '﴿قَالَ اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾'],
              ['2', 'الْمَفْعُولُ لَه', '﴿وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾'],
              ['3', 'الْحَال', 'طَافَ رَسُولُ اللَّهِ ﷺ بِالْبَيْتِ وَهُوَ يُلَبِّي'],
              ['4', 'خَبَرُ الْفِعْلِ النَّاقِص', '﴿كَانُوا يَعْمَلُونَ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `In which four positions is a sentence منصوبة بالأصالة?`,
            kind: 'mcq',
            options: ['المفعول به, المفعول له, الحال, and خبر الفعل الناقص', 'الفاعل, المبتدأ, الخبر, and الحال', 'المضاف إليه, البدل, النعت, and المعطوف', 'خبر المبتدأ, خبر إن, صلة الموصول, and المعترضة'],
            correct: 0,
          },
        },
        {
          heading: 'الجملة مفعولا به لقول: أسماؤها',
          lines: [
            { html: `A sentence functioning as المفعول به of a verb of saying is called <bdi>مَقُولًا</bdi>, <bdi>مَقُولَ الْقَوْل</bdi>, and <bdi>مَقُولَة</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What is the sentence functioning as مفعول به of a verb of saying called?`,
            kind: 'mcq',
            options: ['مقول, مقول القول, and مقولة', 'الجملة التعليلية', 'الجملة الحالية', 'صلة الموصول'],
            correct: 0,
          },
        },
        {
          heading: 'الجملة مفعولا له: الجملة التعليلية',
          lines: [
            { html: `A sentence functioning as المفعول له is called <bdi>الْجُمْلَةُ التَّعْلِيلِيَّة</bdi>, as in <bdi>﴿وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What is the sentence functioning as مفعول له called? Give the example.`,
            kind: 'mcq',
            options: ['الجملة التعليلية: ﴿وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾', 'مقول القول', 'الجملة الحالية', 'الجملة الابتدائية'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'الجملة التي لها محل من الإعراب is the definition of:', options: ['the معمول sentence', 'the غير معمول sentence', 'شبه الجملة', 'الجملة الابتدائية'], correct: 0 },
        { q: '﴿وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾ shows يحب المحسنين as a sentence that is:', options: ['خبر المبتدأ, مرفوعة بالأصالة', 'مفعول به, منصوبة بالأصالة', 'صلة الموصول, لا محل لها', 'الجملة الحالية'], correct: 0 },
        { q: 'طَافَ رَسُولُ اللَّهِ ﷺ بِالْبَيْتِ وَهُوَ يُلَبِّي shows وهو يلبي as a sentence that is:', options: ['حال, منصوبة بالأصالة', 'خبر المبتدأ, مرفوعة', 'مفعول له, منصوبة', 'مضاف إليه, مجرورة'], correct: 0 },
        { q: 'A sentence functioning as مفعول به of a verb of saying is called:', options: ['مقول القول', 'الجملة التعليلية', 'الجملة الحالية', 'الجملة الابتدائية'], correct: 0 },
        { q: '﴿وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾ shows لعلكم تفلحون as:', options: ['الجملة التعليلية, مفعول له', 'مقول القول', 'خبر إن', 'صلة الموصول'], correct: 0 },
        { q: '﴿كَانُوا يَعْمَلُونَ﴾ shows يعملون as:', options: ['خبر الفعل الناقص, منصوبة بالأصالة', 'خبر المبتدأ, مرفوعة', 'مفعول به, منصوبة', 'مضاف إليه, مجرورة'], correct: 0 },
      ],
      bank: [
        { title: 'خبر إن', kind: 'mcq', prompt: '﴿إِنَّ اللَّهَ يُحِبُّ الْمُحْسِنِينَ﴾ shows يحب المحسنين as:', options: ['خبر إن, مرفوعة بالأصالة', 'اسم إن', 'مفعول به', 'صلة الموصول'], correct: 0 },
        { title: 'الجملة مفعولا به', kind: 'mcq', prompt: '﴿قَالَ اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾ shows the sentence after قال as:', options: ['مقول القول, مفعول به منصوب', 'خبر إن', 'الجملة الحالية', 'صلة الموصول'], correct: 0 },
        { title: 'الجملة التعليلية اسمها', kind: 'mcq', prompt: 'الجملة التعليلية is the name for a sentence functioning as:', options: ['المفعول له', 'المفعول به', 'الحال', 'خبر الفعل الناقص'], correct: 0 },
        { title: 'مقولة اسم بديل', kind: 'mcq', prompt: 'مَقُولَة is an alternative name for a sentence that is:', options: ['مقول القول', 'الجملة الحالية', 'صلة الموصول', 'المعترضة'], correct: 0 },
        { title: 'أربعة مواضع النصب', kind: 'mcq', prompt: 'Which of these is NOT one of the four مواضع of الجملة المنصوبة بالأصالة؟', options: ['خبر المبتدأ', 'المفعول به', 'الحال', 'خبر الفعل الناقص'], correct: 0 },
        {
          title: 'تركيب: ﴿وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify موضع هذه الجملة.',
          sentence: 'وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ',
          translation: 'And Allah loves the doers of good.',
          cells: ['وَاللَّهُ', 'يُحِبُّ', 'الْمُحْسِنِينَ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 2, role: 'مرفوعة (خبر المبتدأ)' }] },
          ],
          distractors: ['منصوبة (مفعول له)', 'مجرورة'],
        },
        {
          title: 'تركيب: ﴿وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify موضع هذه الجملة.',
          sentence: 'وَاتَّقُوا اللَّهَ لَعَلَّكُمْ تُفْلِحُونَ',
          translation: 'And fear Allah that you may succeed.',
          cells: ['وَاتَّقُوا', 'اللَّهَ', 'لَعَلَّكُمْ', 'تُفْلِحُونَ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 3, role: 'منصوبة (مفعول له)' }] },
          ],
          distractors: ['مرفوعة (خبر المبتدأ)', 'مجرورة'],
        },
        {
          title: 'تركيب: ﴿قَالَ اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify موضع الجملة بعد قال.',
          sentence: 'قَالَ اللَّهُ هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ',
          translation: 'Allah said, "This is the Day when the truthful will benefit from their truthfulness."',
          cells: ['قَالَ', 'اللَّهُ', 'هَٰذَا', 'يَوْمُ', 'يَنفَعُ', 'الصَّادِقِينَ', 'صِدْقُهُمْ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 6, role: 'مفعول به (مقول القول)' }] },
          ],
          distractors: ['مفعول له', 'حال'],
        },
        {
          title: 'تركيب: طَافَ رَسُولُ اللَّهِ ﷺ بِالْبَيْتِ وَهُوَ يُلَبِّي',
          kind: 'tarkeeb',
          instruction: 'Classify موضع وهو يلبي هنا.',
          sentence: 'طَافَ رَسُولُ اللَّهِ بِالْبَيْتِ وَهُوَ يُلَبِّي',
          translation: 'The Messenger of Allah circled the House while he was reciting the talbiyah.',
          cells: ['طَافَ', 'رَسُولُ', 'اللَّهِ', 'بِالْبَيْتِ', 'وَهُوَ', 'يُلَبِّي'],
          rows: [
            { position: 'above', labels: [{ start: 4, end: 5, role: 'حال' }] },
          ],
          distractors: ['مفعول به', 'مفعول له'],
        },
        {
          title: 'تركيب: ﴿كَانُوا يَعْمَلُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify موضع يعملون هنا.',
          sentence: 'كَانُوا يَعْمَلُونَ',
          translation: 'They used to do [good deeds].',
          cells: ['كَانُوا', 'يَعْمَلُونَ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 1, role: 'خبر الفعل الناقص' }] },
          ],
          distractors: ['مفعول به', 'حال'],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'الجملة الحالية: أحكام الواو',
      subtitle: "The حال Clause — when واو is obligatory, forbidden, or optional",
      sourceRef: 'pp. 164–166',
      concepts: [
        {
          heading: 'مواضع وجوب واو الحال الثلاثة',
          lines: [
            { html: `الواو of الجملة الحالية is obligatory in three cases:`, list: false },
            { table: { headers: ['#', 'الحالة', 'Example'], rows: [
              ['1', 'the clause has no pronoun linking to صاحب الحال', '﴿لَئِنْ أَكَلَهُ الذِّئْبُ وَنَحْنُ عُصْبَةٌ﴾'],
              ['2', 'a nominal clause beginning with صاحب الحال’s own pronoun', '﴿وَلَا تَقْرَبُوا الصَّلَاةَ وَأَنتُمْ سُكَارَىٰ﴾'],
              ['3', 'a مضارع clause with قَدْ', '﴿لِمَ تُؤْذُونَنِي وَقَدْ تَعْلَمُونَ أَنِّي رَسُولُ اللَّهِ إِلَيْكُمْ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `In which three cases is the واو of the جملة حالية obligatory؟`,
            kind: 'mcq',
            options: ['No pronoun links it to صاحب الحال; it’s a nominal clause beginning with صاحب الحال’s pronoun; or it’s a مضارع clause with قد', 'Only ever when the clause is ماضٍ', 'Only ever when negated by لا', 'It is never obligatory, only optional'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع امتناع واو الحال السبعة',
          lines: [
            { html: `الواو of الجملة الحالية is prohibited in seven cases:`, list: false },
            { table: { headers: ['#', 'الحالة', 'Example'], rows: [
              ['1', 'after a عاطف', '﴿أَوْ هُمْ قَائِلُونَ﴾'],
              ['2', 'the clause is مؤكدة for its preceding clause', '﴿ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ﴾'],
              ['3', 'a ماضي clause after إِلَّا', '﴿إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ﴾'],
              ['4', 'a ماضي clause before أَوْ', 'أَنْصِفِ النَّاسَ أَنْصَفُوكَ أَوْ ظَلَمُوكَ'],
              ['5', 'an affirmative مضارع clause without قد', '﴿وَلَا تَمْنُنْ تَسْتَكْثِرُ﴾'],
              ['6', 'a مضارع clause negated by مَا', 'عَهِدْتُكَ مَا تَصْبِرُ عَلَى الشَّدَائِدِ'],
              ['7', 'a مضارع clause negated by لَا', '﴿وَمَا لِيَ لَا أَعْبُدُ الَّذِي فَطَرَنِي﴾'],
            ] } },
          ],
          exercise: {
            prompt: `In which seven cases is the واو of the جملة حالية prohibited؟`,
            kind: 'mcq',
            options: ['After a عاطف; when مؤكدة; ماضٍ after إلا or before أو; مضارع مثبت without قد; and مضارع negated by ما or لا', 'Only ever when the clause is nominal', 'Only ever when the clause has a pronoun linking to صاحبها', 'It is never prohibited, only sometimes optional'],
            correct: 0,
          },
        },
        {
          heading: 'الوجهان مع لم، وترجيح الواو مع لمّا',
          lines: [
            { html: `For a مضارع حال clause negated by <bdi>لَمْ</bdi>, both are allowed: with واو, as in <bdi>﴿قُلْ أُوحِيَ إِلَيَّ وَلَمْ يُوحَ إِلَيْهِ شَيْءٌ﴾</bdi>, or without, as in <bdi>﴿فَانقَلَبُوا بِنِعْمَةٍ مِّنَ اللَّهِ وَفَضْلٍ لَّمْ يَمْسَسْهُمْ سُوءٌ﴾</bdi>.`, list: false },
            { html: `For الحال clause negated by <bdi>لَمَّا</bdi>, الواو is preferred, as in <bdi>﴿وَلَمَّا يَعْلَمِ اللَّهُ الَّذِينَ جَاهَدُوا مِنكُمْ﴾</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What is preferred for the حال clause negated by لمّا؟`,
            kind: 'mcq',
            options: ['الواو', 'no واو — it must always be dropped', 'neither واو nor its absence is acceptable', 'اللام'],
            correct: 0,
          },
        },
        {
          heading: 'الاسمية غير البادئة بالضمير',
          lines: [
            { html: `The rule for the nominal (اسمية) حال clause NOT starting with صاحبها’s pronoun: predominantly with واو, as in <bdi>﴿وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ﴾</bdi>, sometimes without it, as in <bdi>﴿وَقُلْنَا اهْبِطُوا بَعْضُكُمْ لِبَعْضٍ عَدُوٌّ﴾</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What is the rule for the nominal (اسمية) حال clause not starting with صاحبها’s pronoun؟`,
            kind: 'mcq',
            options: ['Predominantly with واو, sometimes without it', 'Always with واو, with no exception', 'Always without واو, with no exception', 'It is entirely forbidden as a حال clause'],
            correct: 0,
          },
        },
        {
          heading: 'أحكام الماضي المثبت حالا',
          lines: [
            { html: `For the affirmative ماضي حال clause:`, list: false },
            { html: `predominantly with واو and قد, as in <bdi>﴿وَقَدْ هَدَانِ﴾</bdi>`, list: true, bullet: true },
            { html: `sometimes واو alone, as in <bdi>﴿وَاتَّبَعَكَ الْأَرْذَلُونَ﴾</bdi>`, list: true, bullet: true },
            { html: `sometimes neither, as in <bdi>﴿رُدَّتْ إِلَيْنَا﴾</bdi> (i.e. <bdi>هَٰذِهِ بِضَاعَتُنَا رُدَّتْ إِلَيْنَا﴾)`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `What are the rules for the affirmative ماضي حال clause?`,
            kind: 'mcq',
            options: ['Predominantly واو and قد together; sometimes واو alone; sometimes neither', 'Always واو and قد together, with no exception', 'Always neither واو nor قد', 'Only قد alone, never واو'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: '﴿لَئِنْ أَكَلَهُ الذِّئْبُ وَنَحْنُ عُصْبَةٌ﴾ shows واو الحال obligatory because:', options: ['the clause has no pronoun linking to صاحب الحال', 'it is a مضارع clause with قد', 'it follows إلا', 'it follows a عاطف'], correct: 0 },
        { q: '﴿أَوْ هُمْ قَائِلُونَ﴾ shows واو الحال prohibited because it follows:', options: ['a عاطف', 'إلا', 'أو with a ماضٍ clause', 'a نفي بما'], correct: 0 },
        { q: 'For a مضارع حال clause negated by لم, the rule is:', options: ['both واو and no-واو are allowed', 'واو is obligatory', 'واو is forbidden', 'the clause cannot be حال at all'], correct: 0 },
        { q: 'For الحال clause negated by لمّا, what is preferred?', options: ['الواو', 'no واو', 'both equally, with no preference', 'neither — لمّا cannot introduce a حال clause'], correct: 0 },
        { q: '﴿وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ وَأَنتُمْ أَذِلَّةٌ﴾ shows an اسمية حال clause not starting with the pronoun, using:', options: ['واو, predominantly', 'no واو, predominantly', 'a لام مزحلقة', 'a نون توكيد'], correct: 0 },
        { q: '﴿وَقَدْ هَدَانِ﴾ illustrates the predominant pattern for the affirmative ماضي حال clause:', options: ['واو and قد together', 'واو alone', 'neither واو nor قد', 'قد alone, without واو'], correct: 0 },
      ],
      bank: [
        { title: 'اسمية بادئة بالضمير', kind: 'mcq', prompt: '﴿وَلَا تَقْرَبُوا الصَّلَاةَ وَأَنتُمْ سُكَارَىٰ﴾ shows واو الحال obligatory because the clause is:', options: ['اسمية بادئة بضمير صاحبها', 'فعلية ماضوية', 'مسبوقة بعاطف', 'مؤكدة لما قبلها'], correct: 0 },
        { title: 'مضارعة بقد', kind: 'mcq', prompt: '﴿وَقَدْ تَعْلَمُونَ أَنِّي رَسُولُ اللَّهِ إِلَيْكُمْ﴾ shows واو الحال obligatory because the clause is:', options: ['مضارعة مقترنة بقد', 'ماضوية بلا رابط', 'اسمية غير بادئة بالضمير', 'مؤكدة لما قبلها'], correct: 0 },
        { title: 'مؤكدة لما قبلها', kind: 'mcq', prompt: '﴿ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ﴾ shows واو الحال prohibited because the second جملة is:', options: ['مؤكدة for the preceding clause', 'مضارعة بقد', 'اسمية بادئة بالضمير', 'لا رابط بينها وبين صاحبها'], correct: 0 },
        { title: 'ماضية بعد إلا', kind: 'mcq', prompt: '﴿إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ﴾ shows واو الحال prohibited because the clause is:', options: ['ماضية following إلا', 'مضارعة منفية بلا', 'مضارعة مثبتة بلا قد', 'اسمية بادئة بضمير صاحبها'], correct: 0 },
        { title: 'مضارعة منفية بما', kind: 'mcq', prompt: 'عَهِدْتُكَ مَا تَصْبِرُ عَلَى الشَّدَائِدِ shows واو الحال prohibited because the clause is:', options: ['مضارعة منفية بما', 'مضارعة منفية بلا', 'ماضية بعد إلا', 'مؤكدة لما قبلها'], correct: 0 },
        { title: 'مثبتة بلا قد', kind: 'mcq', prompt: '﴿وَلَا تَمْنُنْ تَسْتَكْثِرُ﴾ shows واو الحال prohibited because the clause is:', options: ['مضارعة مثبتة without قد', 'مضارعة منفية بما', 'ماضية قبل أو', 'مسبوقة بعاطف'], correct: 0 },
        { title: 'الوجهان مع لم بالمثال الثاني', kind: 'mcq', prompt: '﴿فَانقَلَبُوا بِنِعْمَةٍ مِّنَ اللَّهِ وَفَضْلٍ لَّمْ يَمْسَسْهُمْ سُوءٌ﴾ shows a مضارع حال clause negated by لم:', options: ['without واو, one of the two allowed options', 'with واو, obligatorily', 'with واو and قد together', 'in a form that is entirely forbidden'], correct: 0 },
        { title: 'ماضٍ بلا واو ولا قد', kind: 'mcq', prompt: '﴿رُدَّتْ إِلَيْنَا﴾ (i.e. هذه بضاعتنا ردت إلينا) illustrates the affirmative ماضي حال clause appearing:', options: ['with neither واو nor قد', 'with واو and قد together', 'with واو alone', 'this is never a valid حال pattern'], correct: 0 },
        {
          title: 'تركيب: ﴿لَئِنْ أَكَلَهُ الذِّئْبُ وَنَحْنُ عُصْبَةٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Is واو الحال هنا واجبة or ممتنعة؟',
          sentence: 'لَئِنْ أَكَلَهُ الذِّئْبُ وَنَحْنُ عُصْبَةٌ',
          translation: 'If the wolf should eat him while we are a group [of strength]...',
          cells: ['لَئِنْ', 'أَكَلَهُ', 'الذِّئْبُ', 'وَنَحْنُ', 'عُصْبَةٌ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 4, role: 'واجبة (لا رابط بلا واو)' }] },
          ],
          distractors: ['ممتنعة'],
        },
        {
          title: 'تركيب: ﴿ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Is واو الحال هنا واجبة or ممتنعة؟',
          sentence: 'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ',
          translation: 'That is the Book about which there is no doubt.',
          cells: ['ذَٰلِكَ', 'الْكِتَابُ', 'لَا', 'رَيْبَ', 'فِيهِ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 4, role: 'ممتنعة (مؤكدة لما قبلها)' }] },
          ],
          distractors: ['واجبة'],
        },
        {
          title: 'تركيب: ﴿وَلَا تَقْرَبُوا الصَّلَاةَ وَأَنتُمْ سُكَارَىٰ﴾',
          kind: 'tarkeeb',
          instruction: 'Is واو الحال هنا واجبة or ممتنعة؟',
          sentence: 'وَلَا تَقْرَبُوا الصَّلَاةَ وَأَنتُمْ سُكَارَىٰ',
          translation: 'Do not approach prayer while you are intoxicated.',
          cells: ['وَلَا', 'تَقْرَبُوا', 'الصَّلَاةَ', 'وَأَنتُمْ', 'سُكَارَىٰ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 4, role: 'واجبة (اسمية بادئة بالضمير)' }] },
          ],
          distractors: ['ممتنعة'],
        },
        {
          title: 'تركيب: ﴿أَوْ هُمْ قَائِلُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Is واو الحال هنا واجبة or ممتنعة؟',
          sentence: 'أَوْ هُمْ قَائِلُونَ',
          translation: '...or while they are resting at noon.',
          cells: ['أَوْ', 'هُمْ', 'قَائِلُونَ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 2, role: 'ممتنعة (بعد عاطف)' }] },
          ],
          distractors: ['واجبة'],
        },
        {
          title: 'تركيب: ﴿إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Why is واو الحال prohibited here؟',
          sentence: 'إِلَّا كَانُوا بِهِ يَسْتَهْزِئُونَ',
          translation: '...except that they used to ridicule it.',
          cells: ['إِلَّا', 'كَانُوا', 'بِهِ', 'يَسْتَهْزِئُونَ'],
          rows: [
            { position: 'above', labels: [{ start: 0, end: 1, role: 'ماضية بعد إلا' }] },
          ],
          distractors: ['مضارعة منفية بما', 'مضارعة مثبتة بلا قد'],
        },
        {
          title: 'تركيب: عَهِدْتُكَ مَا تَصْبِرُ عَلَى الشَّدَائِدِ',
          kind: 'tarkeeb',
          instruction: 'Why is واو الحال prohibited here؟',
          sentence: 'عَهِدْتُكَ مَا تَصْبِرُ عَلَى الشَّدَائِدِ',
          translation: 'I knew you to not endure hardships.',
          cells: ['عَهِدْتُكَ', 'مَا', 'تَصْبِرُ', 'عَلَى', 'الشَّدَائِدِ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 2, role: 'مضارعة منفية بما' }] },
          ],
          distractors: ['ماضية بعد إلا', 'مضارعة مثبتة بلا قد'],
        },
        {
          title: 'تركيب: ﴿وَلَا تَمْنُنْ تَسْتَكْثِرُ﴾',
          kind: 'tarkeeb',
          instruction: 'Why is واو الحال prohibited here؟',
          sentence: 'وَلَا تَمْنُنْ تَسْتَكْثِرُ',
          translation: 'And do not confer favor seeking more.',
          cells: ['وَلَا', 'تَمْنُنْ', 'تَسْتَكْثِرُ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 2, role: 'مضارعة مثبتة بلا قد' }] },
          ],
          distractors: ['ماضية بعد إلا', 'مضارعة منفية بما'],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'الجملة المجرورة والمجزومة',
      subtitle: 'The جر and جزم Positions, and when فاء the جواب needs is obligatory, optional, or forbidden',
      sourceRef: 'pp. 166–168',
      concepts: [
        {
          heading: 'الجملة المجرورة: مضافا إليه',
          lines: [
            { html: `A sentence is مجرورة بالأصالة as <bdi>مُضَافٌ إِلَيْه</bdi>, as in <bdi>﴿هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾</bdi>, where <bdi>يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ</bdi> is مضاف إليه to <bdi>يَوْم</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `In which position is a sentence مجرورة بالأصالة? Give the example.`,
            kind: 'mcq',
            options: ['As مضاف إليه: ﴿هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾', 'As مفعول به', 'As حال', 'As خبر إن'],
            correct: 0,
          },
        },
        {
          heading: 'الجملة المجزومة: جواب الشرط الجازم برابطة',
          lines: [
            { html: `A sentence is مجزومة بالأصالة as the جواب of a jazm-conditional (<bdi>شَرْطٌ جَازِم</bdi>), PROVIDED it is linked by a <bdi>رَابِطَة</bdi> — the <bdi>فَاء</bdi> or <bdi>إِذَا الْفُجَائِيَّة</bdi> — as in <bdi>﴿مَن يُضْلِلِ اللَّهُ فَلَا هَادِيَ لَهُ﴾</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `In which position is a sentence مجزومة بالأصالة, and what is required؟`,
            kind: 'mcq',
            options: ['As جواب of a jazm-conditional, provided it is linked by a رابطة — الفاء or إذا الفجائية', 'As مضاف إليه, with no further condition', 'As حال, provided it starts with واو', 'A sentence can never be مجزومة'],
            correct: 0,
          },
        },
        {
          heading: 'الفاء الواجبة في جواب الشرط',
          lines: [
            { html: `الفاء is obligatory in جواب الشرط when الجواب is:`, list: false },
            { table: { headers: ['#', 'الجواب', 'Example'], rows: [
              ['1', 'جملة اسمية', '﴿وَإِن يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ﴾'],
              ['2', 'فعلية with a jāmid verb', '﴿إِن تَرَنِ أَنَا أَقَلَّ مِنكَ مَالًا وَوَلَدًا... فَعَسَىٰ رَبِّي﴾'],
              ['3', 'طَلَبِيَّة — أمر', '﴿إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي﴾'],
              ['3', 'طَلَبِيَّة — نهي', '﴿فَإِنْ عَلِمْتُمُوهُنَّ مُؤْمِنَاتٍ فَلَا تَرْجِعُوهُنَّ إِلَى الْكُفَّارِ﴾'],
              ['4', 'ماضٍ affirmative with قد — overt or implied', '﴿إِن يَسْرِقْ فَقَدْ سَرَقَ أَخٌ لَّهُ مِن قَبْلُ﴾'],
              ['5', 'negated by مَا', '﴿وَإِن لَّمْ تَفْعَلْ فَمَا بَلَّغْتَ رِسَالَتَهُ﴾'],
              ['6', 'مضارع with a تَنْفِيس particle', '﴿فَسَيَحْشُرُهُمْ إِلَيْهِ جَمِيعًا﴾'],
              ['7', 'negated by لَنْ', '﴿وَمَا يَفْعَلُوا مِنْ خَيْرٍ فَلَن يُكْفَرُوهُ﴾'],
              ['8', 'opening with كَأَنَّمَا', '﴿وَمَن يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ﴾'],
              ['9', 'opening with a conditional particle', '﴿وَإِن كَانَ كَبُرَ عَلَيْكَ إِعْرَاضُهُمْ فَإِنِ اسْتَطَعْتَ...﴾'],
            ] } },
          ],
          exercise: {
            prompt: `List the cases in which الفاء is obligatory in جواب الشرط (name several).`,
            kind: 'mcq',
            options: ['When الجواب is جملة اسمية, فعلية بفعل جامد, طلبية, ماضية مثبتة بقد, منفية بما أو لن, أو مفتتحة بأداة أخرى', 'Only ever when الجواب is فعلية بفعل مضارع', 'Only ever when الجواب is منفية بلا', 'الفاء is never obligatory, only ever optional'],
            correct: 0,
          },
        },
        {
          heading: 'جواز الفاء مع المضارع',
          lines: [
            { html: `الفاء is optional (<bdi>جَائِزَة</bdi>) in جواب الشرط when الجواب is a مضارع:`, list: false },
            { html: `affirmative without تنفيس — with فاء, as in <bdi>﴿وَمَنْ عَادَ فَيَنتَقِمُ اللَّهُ مِنْهُ﴾</bdi>, or without, as in <bdi>﴿إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ﴾</bdi>`, list: true, bullet: true },
            { html: `or negated by <bdi>لَا</bdi>, as in <bdi>﴿وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ وَهُوَ مُؤْمِنٌ فَلَا يَخَافُ ظُلْمًا وَلَا هَضْمًا﴾</bdi> — or without الفاء`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `When is الفاء optional (جائزة) in جواب الشرط?`,
            kind: 'mcq',
            options: ['When الجواب is a مضارع — affirmative without تنفيس, or negated by لا', 'When الجواب is جملة اسمية', 'When الجواب is ماضٍ مثبت بقد', 'الفاء is never optional'],
            correct: 0,
          },
        },
        {
          heading: 'امتناع الفاء، وبديلها إذا الفجائية',
          lines: [
            { html: `الفاء is prohibited in جواب الشرط when الجواب is a ماضٍ without قد — لفظا, as in <bdi>﴿إِنْ أَحْسَنتُمْ أَحْسَنتُمْ لِأَنفُسِكُمْ﴾</bdi>, or معنى (i.e. past-meaning <bdi>لَمْ</bdi> + مضارع), as in <bdi>إِنْ خَرَجْتَ لَمْ أَخْرُجْ</bdi>.`, list: false },
            { html: `What may replace الفاء as رابطة is <bdi>إِذَا الْفُجَائِيَّة</bdi> — after إن and إذا — as in <bdi>﴿وَإِن تُصِبْهُمْ سَيِّئَةٌ بِمَا قَدَّمَتْ أَيْدِيهِمْ إِذَا هُمْ يَقْنَطُونَ﴾</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What may replace الفاء as رابطة of الجواب?`,
            kind: 'mcq',
            options: ['إذا الفجائية, after إن and إذا', 'اللام المزحلقة', 'نون التوكيد', 'قد وحدها'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: '﴿هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾ shows ينفع الصادقين صدقهم as:', options: ['مضاف إليه, مجرورة بالأصالة', 'مفعول به, منصوبة', 'خبر إن, مرفوعة', 'حال, منصوبة'], correct: 0 },
        { q: 'For a sentence to be مجزومة as جواب الشرط, it must:', options: ['be linked by a رابطة — الفاء or إذا الفجائية', 'always start with الفاء', 'always be a جملة اسمية', 'never contain a pronoun'], correct: 0 },
        { q: '﴿وَإِن يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ﴾ shows الفاء obligatory because الجواب is:', options: ['جملة اسمية', 'جملة فعلية ماضوية', 'مضارعة بتنفيس', 'منفية بلن'], correct: 0 },
        { q: 'الفاء is جائزة (optional) when الجواب is a مضارع:', options: ['affirmative without تنفيس, or negated by لا', 'negated by ما', 'مفتتحة بكأنما', 'ماضٍ without قد'], correct: 0 },
        { q: '﴿إِنْ أَحْسَنتُمْ أَحْسَنتُمْ لِأَنفُسِكُمْ﴾ shows الفاء prohibited because الجواب is:', options: ['a ماضٍ without قد', 'a جملة اسمية', 'a مضارع with تنفيس', 'negated by لن'], correct: 0 },
        { q: 'What may replace الفاء as رابطة of الجواب?', options: ['إذا الفجائية', 'اللام المزحلقة', 'نون التوكيد', 'قد'], correct: 0 },
      ],
      bank: [
        { title: 'رابطة الجواب المجزوم', kind: 'mcq', prompt: '﴿مَن يُضْلِلِ اللَّهُ فَلَا هَادِيَ لَهُ﴾ shows الجواب مجزوما because it is linked by:', options: ['الفاء', 'إن الشرطية alone', 'a redundant واو', 'نون التوكيد'], correct: 0 },
        { title: 'الفاء مع الفعل الجامد', kind: 'mcq', prompt: '﴿إِن تَرَنِ أَنَا أَقَلَّ مِنكَ مَالًا وَوَلَدًا... فَعَسَىٰ رَبِّي﴾ shows الفاء obligatory because الجواب is فعلية with a:', options: ['jāmid verb (عسى)', 'مضارع verb with تنفيس', 'ماضٍ verb with قد', 'أمر verb'], correct: 0 },
        { title: 'الفاء مع الطلبية أمرا', kind: 'mcq', prompt: '﴿إِن كُنتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي﴾ shows الفاء obligatory because الجواب is:', options: ['طلبية (أمر)', 'جملة اسمية', 'ماضية بلا قد', 'منفية بلن'], correct: 0 },
        { title: 'الفاء مع الماضي المثبت بقد', kind: 'mcq', prompt: '﴿إِن يَسْرِقْ فَقَدْ سَرَقَ أَخٌ لَّهُ مِن قَبْلُ﴾ shows الفاء obligatory because الجواب is:', options: ['ماضٍ affirmative with قد', 'مضارع with تنفيس', 'جملة اسمية', 'منفية بلا'], correct: 0 },
        { title: 'الفاء مع حرف تنفيس', kind: 'mcq', prompt: '﴿فَسَيَحْشُرُهُمْ إِلَيْهِ جَمِيعًا﴾ shows الفاء obligatory because الجواب is a مضارع with:', options: ['a حرف تنفيس (سـ)', 'قد', 'a نفي بلا', 'a نفي بما'], correct: 0 },
        { title: 'الفاء مع كأنما', kind: 'mcq', prompt: '﴿وَمَن يُشْرِكْ بِاللَّهِ فَكَأَنَّمَا خَرَّ مِنَ السَّمَاءِ﴾ shows الفاء obligatory because الجواب opens with:', options: ['كأنما', 'أداة شرط أخرى', 'ما النافية', 'لن'], correct: 0 },
        { title: 'الفاء الجائزة بلا', kind: 'mcq', prompt: '﴿وَمَن يَعْمَلْ مِنَ الصَّالِحَاتِ وَهُوَ مُؤْمِنٌ فَلَا يَخَافُ ظُلْمًا وَلَا هَضْمًا﴾ shows الفاء as:', options: ['جائزة, since الجواب is a مضارع negated by لا', 'واجبة, with no alternative', 'ممتنعة, since it should not appear at all', 'مستبدلة بإذا الفجائية'], correct: 0 },
        { title: 'امتناع الفاء معنى', kind: 'mcq', prompt: 'إِنْ خَرَجْتَ لَمْ أَخْرُجْ shows الفاء prohibited because الجواب is:', options: ['past in meaning (لم + مضارع), though not لفظا ماضٍ', 'a جملة اسمية', 'a طلبية', 'مفتتحة بكأنما'], correct: 0 },
        {
          title: 'تركيب: ﴿هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ﴾ (موضع الجر)',
          kind: 'tarkeeb',
          instruction: 'Classify موضع هذه الجملة.',
          sentence: 'هَٰذَا يَوْمُ يَنفَعُ الصَّادِقِينَ صِدْقُهُمْ',
          translation: 'This is the Day when the truthful will benefit from their truthfulness.',
          cells: ['هَٰذَا', 'يَوْمُ', 'يَنفَعُ', 'الصَّادِقِينَ', 'صِدْقُهُمْ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 4, role: 'مجرورة (مضاف إليه)' }] },
          ],
          distractors: ['مجزومة (جواب شرط)', 'منصوبة'],
        },
        {
          title: 'تركيب: ﴿مَن يُضْلِلِ اللَّهُ فَلَا هَادِيَ لَهُ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify موضع فلا هادي له.',
          sentence: 'مَن يُضْلِلِ اللَّهُ فَلَا هَادِيَ لَهُ',
          translation: 'Whoever Allah sends astray, there is no guide for him.',
          cells: ['مَن', 'يُضْلِلِ', 'اللَّهُ', 'فَلَا', 'هَادِيَ', 'لَهُ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 5, role: 'مجزومة (جواب شرط)' }] },
          ],
          distractors: ['مجرورة (مضاف إليه)', 'منصوبة'],
        },
        {
          title: 'تركيب: ﴿وَإِن يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify حكم الفاء هنا.',
          sentence: 'وَإِن يَمْسَسْكَ بِخَيْرٍ فَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ',
          translation: 'And if He touches you with good — He is over all things competent.',
          cells: ['وَإِن', 'يَمْسَسْكَ', 'بِخَيْرٍ', 'فَهُوَ', 'عَلَىٰ', 'كُلِّ', 'شَيْءٍ', 'قَدِيرٌ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 7, role: 'واجبة (جملة اسمية)' }] },
          ],
          distractors: ['جائزة', 'ممتنعة'],
        },
        {
          title: 'تركيب: ﴿إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify حكم الفاء هنا.',
          sentence: 'إِن يَكُن مِّنكُمْ عِشْرُونَ صَابِرُونَ يَغْلِبُوا مِائَتَيْنِ',
          translation: 'If there be among you twenty who are steadfast, they will overcome two hundred.',
          cells: ['إِن', 'يَكُن', 'مِّنكُمْ', 'عِشْرُونَ', 'صَابِرُونَ', 'يَغْلِبُوا', 'مِائَتَيْنِ'],
          rows: [
            { position: 'above', labels: [{ start: 5, end: 6, role: 'جائزة (بدون الفاء)' }] },
          ],
          distractors: ['واجبة', 'ممتنعة'],
        },
        {
          title: 'تركيب: ﴿إِنْ أَحْسَنتُمْ أَحْسَنتُمْ لِأَنفُسِكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify حكم الفاء هنا.',
          sentence: 'إِنْ أَحْسَنتُمْ أَحْسَنتُمْ لِأَنفُسِكُمْ',
          translation: 'If you do good, you do good for yourselves.',
          cells: ['إِنْ', 'أَحْسَنتُمْ', 'أَحْسَنتُمْ', 'لِأَنفُسِكُمْ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 3, role: 'ممتنعة (ماضٍ بلا قد)' }] },
          ],
          distractors: ['واجبة', 'جائزة'],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'الجملة معمولة بالتبعية',
      subtitle: 'The Sentence as a تابع, and the First of the Eight محل-less Types',
      sourceRef: 'pp. 168–169',
      concepts: [
        {
          heading: 'الجملة معمولة بالتبعية: طرقها الثلاث، وشرطا النعتية',
          lines: [
            { html: `A sentence is معمولة بالتبعية in three ways:`, list: false },
            { html: `<bdi>نَعْت</bdi>, as in <bdi>﴿مِن قَبْلِ أَن يَأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيهِ﴾</bdi>`, list: true, bullet: true },
            { html: `<bdi>بَدَل</bdi>`, list: true, bullet: true },
            { html: `<bdi>مَعْطُوفَة</bdi> on a sentence that has a محل`, list: true, bullet: true },
            { html: `The جملة النعتية has two conditions: it must contain a pronoun returning to المنعوت — overt or implied — and المنعوت must be a نكرة (محضة or غير محضة), as in <bdi>﴿عَلَيْهَا مَلَائِكَةٌ غِلَاظٌ شِدَادٌ لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ﴾</bdi>, or definite but في حكم النكرة, as in <bdi>﴿كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا﴾</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `In which three ways is a sentence معمولة بالتبعية?`,
            kind: 'mcq',
            options: ['نعت, بدل, and معطوفة on a sentence that has a محل', 'مرفوعة, منصوبة, and مجرورة', 'ابتدائية, مستأنفة, and معترضة', 'قسم, شرط, and جواب'],
            correct: 0,
          },
        },
        {
          heading: 'جملة البدل، وجملة معطوفة',
          lines: [
            { html: `A جملة بدل may substitute from a مفرد, as in <bdi>﴿أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ﴾</bdi> — <bdi>كَيْفَ خُلِقَتْ</bdi> is بدل from <bdi>الْإِبِل</bdi> — or from a sentence that has a محل, as in <bdi>﴿نَجَّيْنَاكُم مِّنْ آلِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ يَذْبَحُونَ أَبْنَاءَكُمْ﴾</bdi> — <bdi>يَذْبَحُونَ أَبْنَاءَكُمْ</bdi> is بدل from <bdi>يَسُومُونَكُمْ</bdi>.`, list: false },
            { html: `A جملة معطوفة on a sentence with a محل: <bdi>«الصَّلَاةُ نُورٌ وَالصَّدَقَةُ بُرْهَانٌ»</bdi> — <bdi>وَالصَّدَقَةُ بُرْهَانٌ</bdi> is معطوفة on a clause that has a محل.`, list: false },
          ],
          exercise: {
            prompt: `From what may a جملة بدل be substituted? Give examples.`,
            kind: 'mcq',
            options: ['From a مفرد, or from a sentence that has a محل', 'Only ever from another sentence with no محل', 'Only ever from a مفرد, never a sentence', 'It can never be substituted from anything'],
            correct: 0,
          },
        },
        {
          heading: 'تعريف الجملة غير المعمولة، وعدد أنواعها',
          lines: [
            { html: `The غير معمولة sentence is called <bdi>الْجُمْلَةُ الَّتِي لَا مَحَلَّ لَهَا مِنَ الْإِعْرَاب</bdi>. There are eight types of it.`, list: false },
          ],
          exercise: {
            prompt: `What is the غير معمولة sentence called, and how many types are there?`,
            kind: 'mcq',
            options: ['الجملة التي لا محل لها من الإعراب; eight types', 'الجملة التي لها محل من الإعراب; five types', 'شبه الجملة; two types', 'الجملة التعليلية; one type only'],
            correct: 0,
          },
        },
        {
          heading: 'الأنواع الثمانية للجملة غير المعمولة',
          lines: [
            { html: `The eight sentences that have no محل من الإعراب:`, list: false },
            { html: `<bdi>الِابْتِدَائِيَّة</bdi>`, list: true, bullet: true },
            { html: `<bdi>الْمُسْتَأْنَفَة</bdi>`, list: true, bullet: true },
            { html: `<bdi>صِلَةُ الْمَوْصُول</bdi>`, list: true, bullet: true },
            { html: `<bdi>الْمُعْتَرِضَة</bdi>`, list: true, bullet: true },
            { html: `<bdi>التَّفْسِيرِيَّة</bdi>`, list: true, bullet: true },
            { html: `<bdi>جَوَابُ الْقَسَم</bdi>`, list: true, bullet: true },
            { html: `<bdi>جَوَابُ الشَّرْطِ غَيْرِ الْجَازِم</bdi> (or the jazm-conditional's جواب without a رابطة)`, list: true, bullet: true },
            { html: `<bdi>التَّابِعَةُ لِمَا لَا مَحَلَّ لَه</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `List the eight sentences that have no محل من الإعراب (name several).`,
            kind: 'mcq',
            options: ['الابتدائية, المستأنفة, صلة الموصول, المعترضة, التفسيرية, جواب القسم, جواب الشرط غير الجازم, and التابعة لما لا محل له', 'مرفوعة, منصوبة, مجرورة, مجزومة, and four others', 'نعت, بدل, عطف بيان, معطوف, and four others', 'حقيقية, سببية, مؤسسة, مؤكدة, and four others'],
            correct: 0,
          },
        },
        {
          heading: 'الابتدائية والمستأنفة، وحروف الاستئناف',
          lines: [
            { html: `<bdi>الْجُمْلَةُ الِابْتِدَائِيَّة</bdi> is the sentence with which speech begins, as in <bdi>﴿إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ﴾</bdi>.`, list: false },
            { html: `<bdi>الْمُسْتَأْنَفَة</bdi> is the sentence occurring mid-speech but disconnected in إعراب (<bdi>مُنْقَطِعَة إِعْرَابًا</bdi>) from what precedes it — معطوفة on a sentence with no محل, as in <bdi>اِجْتَهَدَ زَيْدٌ وَنَجَحَ</bdi>, or غير معطوفة, as in <bdi>﴿وَمَا أُبَرِّئُ نَفْسِي إِنَّ النَّفْسَ لَأَمَّارَةٌ بِالسُّوءِ﴾</bdi>.`, list: false },
            { html: `<bdi>جَوَابُ النِّدَاء</bdi> belongs to المستأنفة too, as in <bdi>﴿يَا أَيُّهَا النَّاسُ اعْبُدُوا رَبَّكُمْ﴾</bdi> — and indeed the term المستأنفة may also be applied to الابتدائية itself.`, list: false },
            { html: `The <bdi>حُرُوفُ الِاسْتِئْنَاف</bdi>: <bdi>الْوَاو، ثُمَّ، حَتَّىٰ، أَمِ الْمُنْقَطِعَة، بَلِ الِانْتِقَالِيَّة، أَوْ بِمَعْنَىٰ بَل، لَٰكِنِ الْمُجَرَّدَة عَنِ الْوَاو</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `Define الجملة المستأنفة, and give an example.`,
            kind: 'mcq',
            options: ['The sentence occurring mid-speech but disconnected in إعراب from what precedes it, whether معطوفة or غير معطوفة', 'The very first sentence speech begins with', 'A sentence forming a relative clause', 'A sentence interposed between two connected elements'],
            correct: 0,
          },
        },
        {
          heading: 'صلة الموصول، والمعترضة',
          lines: [
            { html: `<bdi>صِلَةُ الْمَوْصُول</bdi> is the sentence forming the relative clause, as in <bdi>﴿اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ﴾</bdi> — <bdi>خَلَقَكُمْ</bdi> has no محل.`, list: false },
            { html: `<bdi>الْجُمْلَةُ الْمُعْتَرِضَة</bdi> is the sentence interposed between two connected elements, as in <bdi>﴿فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا فَاتَّقُوا النَّارَ﴾</bdi> — <bdi>وَلَن تَفْعَلُوا</bdi> is معترضة.`, list: false },
          ],
          exercise: {
            prompt: `Define the جملة المعترضة, and give the example.`,
            kind: 'mcq',
            options: ['The sentence interposed between two connected elements: ﴿فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا فَاتَّقُوا النَّارَ﴾', 'The sentence forming a relative clause', 'The sentence explaining what precedes it', 'The very first sentence of speech'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'A sentence is معمولة بالتبعية in three ways:', options: ['نعت, بدل, and معطوفة on a sentence with a محل', 'مرفوعة, منصوبة, and مجرورة', 'ابتدائية, مستأنفة, and معترضة', 'حقيقية, سببية, and مؤسسة'], correct: 0 },
        { q: '﴿مِن قَبْلِ أَن يَأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيهِ﴾ shows the sentence لا بيع فيه as:', options: ['نعت, معمولة بالتبعية', 'بدل', 'معطوفة', 'صلة الموصول'], correct: 0 },
        { q: 'الجملة التي لا محل لها من الإعراب has how many types?', options: ['Eight', 'Five', 'Three', 'Twelve'], correct: 0 },
        { q: 'الجملة الابتدائية is defined as:', options: ['the sentence with which speech begins', 'a sentence forming a relative clause', 'a sentence interposed between two connected elements', 'a sentence explaining what precedes it'], correct: 0 },
        { q: '﴿اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ﴾ shows خلقكم as:', options: ['صلة الموصول, no محل', 'المعترضة', 'التفسيرية', 'الابتدائية'], correct: 0 },
        { q: 'جواب النداء belongs to which type of الجملة غير المعمولة?', options: ['المستأنفة', 'الابتدائية only, never المستأنفة', 'صلة الموصول', 'التفسيرية'], correct: 0 },
      ],
      bank: [
        { title: 'شرط النكرة في النعتية', kind: 'mcq', prompt: '﴿عَلَيْهَا مَلَائِكَةٌ غِلَاظٌ شِدَادٌ لَّا يَعْصُونَ اللَّهَ مَا أَمَرَهُمْ﴾ shows الجملة النعتية modifying a منعوت that is:', options: ['نكرة', 'معرفة صريحة', 'ضمير', 'اسم علم'], correct: 0 },
        { title: 'بدل من مفرد', kind: 'mcq', prompt: '﴿أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ﴾ shows كيف خلقت as بدل from:', options: ['a مفرد (الإبل)', 'a جملة لها محل', 'a جملة لا محل لها', 'nothing — it is not a بدل'], correct: 0 },
        { title: 'بدل من جملة لها محل', kind: 'mcq', prompt: '﴿نَجَّيْنَاكُم مِّنْ آلِ فِرْعَوْنَ يَسُومُونَكُمْ سُوءَ الْعَذَابِ يَذْبَحُونَ أَبْنَاءَكُمْ﴾ shows يذبحون أبناءكم as بدل from:', options: ['a جملة لها محل (يسومونكم)', 'a مفرد', 'a جملة لا محل لها', 'nothing at all'], correct: 0 },
        { title: 'حروف الاستئناف السبعة', kind: 'mcq', prompt: 'Which of these is one of the حروف الاستئناف?', options: ['ثم', 'إنّ', 'لولا', 'كي'], correct: 0 },
        { title: 'المستأنفة قد تُطلق على الابتدائية', kind: 'mcq', prompt: 'What relationship holds between المستأنفة and الابتدائية?', options: ['المستأنفة may also be applied to الابتدائية', 'They are entirely unrelated terms', 'الابتدائية is a subtype of صلة الموصول', 'المستأنفة never applies to the first sentence of speech'], correct: 0 },
        { title: 'الصلاة نور والصدقة برهان', kind: 'mcq', prompt: '«الصَّلَاةُ نُورٌ وَالصَّدَقَةُ بُرْهَانٌ» shows والصدقة برهان as:', options: ['معطوفة on a sentence that has a محل', 'بدل from a مفرد', 'صلة الموصول', 'المعترضة'], correct: 0 },
        {
          title: 'تركيب: ﴿مِن قَبْلِ أَنْ يَأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify هذه الجملة المعمولة بالتبعية.',
          sentence: 'مِن قَبْلِ أَنْ يَأْتِيَ يَوْمٌ لَّا بَيْعٌ فِيهِ',
          translation: 'Before a Day comes in which there is no bargaining.',
          cells: ['مِن', 'قَبْلِ', 'أَنْ', 'يَأْتِيَ', 'يَوْمٌ', 'لَّا', 'بَيْعٌ', 'فِيهِ'],
          rows: [
            { position: 'above', labels: [{ start: 5, end: 7, role: 'نعت' }] },
          ],
          distractors: ['بدل', 'معطوفة'],
        },
        {
          title: 'تركيب: ﴿أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify هذه الجملة المعمولة بالتبعية.',
          sentence: 'أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ',
          translation: 'Do they not look at the camels, how they were created?',
          cells: ['أَفَلَا', 'يَنظُرُونَ', 'إِلَى', 'الْإِبِلِ', 'كَيْفَ', 'خُلِقَتْ'],
          rows: [
            { position: 'above', labels: [{ start: 4, end: 5, role: 'بدل' }] },
          ],
          distractors: ['نعت', 'معطوفة'],
        },
        {
          title: 'تركيب: «الصَّلَاةُ نُورٌ وَالصَّدَقَةُ بُرْهَانٌ»',
          kind: 'tarkeeb',
          instruction: 'Classify هذه الجملة المعمولة بالتبعية.',
          sentence: 'الصَّلَاةُ نُورٌ وَالصَّدَقَةُ بُرْهَانٌ',
          translation: 'Prayer is light, and charity is proof.',
          cells: ['الصَّلَاةُ', 'نُورٌ', 'وَالصَّدَقَةُ', 'بُرْهَانٌ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 3, role: 'معطوفة' }] },
          ],
          distractors: ['نعت', 'بدل'],
        },
        {
          title: 'تركيب: ﴿إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify نوع هذه الجملة من غير المعمولة.',
          sentence: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ',
          translation: 'Indeed, We sent it down during the Night of Decree.',
          cells: ['إِنَّا', 'أَنزَلْنَاهُ', 'فِي', 'لَيْلَةِ', 'الْقَدْرِ'],
          rows: [
            { position: 'above', labels: [{ start: 0, end: 4, role: 'الابتدائية' }] },
          ],
          distractors: ['صلة الموصول', 'المعترضة'],
        },
        {
          title: 'تركيب: ﴿اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify نوع خلقكم من غير المعمولة.',
          sentence: 'اعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ',
          translation: 'Worship your Lord, who created you.',
          cells: ['اعْبُدُوا', 'رَبَّكُمُ', 'الَّذِي', 'خَلَقَكُمْ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 3, role: 'صلة الموصول' }] },
          ],
          distractors: ['الابتدائية', 'المعترضة'],
        },
        {
          title: 'تركيب: ﴿فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا فَاتَّقُوا النَّارَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify نوع ولن تفعلوا من غير المعمولة.',
          sentence: 'فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا فَاتَّقُوا النَّارَ',
          translation: 'And if you do not — and you will never do it — then fear the Fire.',
          cells: ['فَإِن', 'لَّمْ', 'تَفْعَلُوا', 'وَلَن', 'تَفْعَلُوا', 'فَاتَّقُوا', 'النَّارَ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 4, role: 'المعترضة' }] },
          ],
          distractors: ['الابتدائية', 'صلة الموصول'],
        },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'الجملة التفسيرية والقسم',
      subtitle: 'The Explanatory Clause, and القسم — its أركان, ما يُصدَّر به جوابه, and نون التوكيد',
      sourceRef: 'pp. 169–171',
      concepts: [
        {
          heading: 'الجملة التفسيرية وصورتاها',
          lines: [
            { html: `<bdi>الْجُمْلَةُ التَّفْسِيرِيَّة</bdi> is the sentence explaining what precedes it.`, list: false },
            { html: `It has two forms: with a <bdi>حَرْفُ تَفْسِير</bdi>, as in <bdi>﴿وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ﴾</bdi>, or without one, as in <bdi>﴿مَسَّتْهُمُ الْبَأْسَاءُ وَالضَّرَّاءُ﴾</bdi> (explaining what precedes it).`, list: false },
          ],
          exercise: {
            prompt: `Define the جملة التفسيرية and its two forms.`,
            kind: 'mcq',
            options: ['The sentence explaining what precedes it, either with a حرف تفسير or without one', 'The very first sentence of speech', 'A sentence forming a relative clause', 'A sentence disconnected in إعراب from what precedes it'],
            correct: 0,
          },
        },
        {
          heading: 'أركان القسم الثلاثة',
          lines: [
            { html: `القسم has three أركان:`, list: false },
            { html: `<bdi>فِعْلُ الْقَسَم</bdi> (e.g. <bdi>أُقْسِمُ</bdi> / <bdi>أَحْلِفُ</bdi> — usually deleted)`, list: true, bullet: true },
            { html: `<bdi>الْمُقْسَمُ بِه</bdi> — together these two form القسم proper`, list: true, bullet: true },
            { html: `<bdi>الْمُقْسَمُ عَلَيْه</bdi> — which is جواب القسم`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `What are the three أركان of القسم?`,
            kind: 'mcq',
            options: ['فعل القسم, المقسم به, and المقسم عليه', 'المستغاث, المستغاث له, and حرف الاستغاثة', 'المحذِّر, المحذَّر, and المحذَّر منه', 'المشغول, المشغول به, and المشغول عنه'],
            correct: 0,
          },
        },
        {
          heading: 'اللام الموطئة تدل على قسم محذوف',
          lines: [
            { html: `A deleted قسم before الجواب is indicated by the لام of القسم (<bdi>اللَّامُ الْمُوَطِّئَةُ لِلْقَسَم</bdi> / <bdi>لَامُ الْقَسَم</bdi>) entering الجواب, as in <bdi>﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ﴾</bdi> — i.e. a قسم is implied.`, list: false },
          ],
          exercise: {
            prompt: `What indicates a deleted قسم before الجواب? Give the example.`,
            kind: 'mcq',
            options: ['اللام الموطئة للقسم entering الجواب: ﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ﴾', 'نون التوكيد alone, with no لام', 'إذا الفجائية', 'اللام المزحلقة alone'],
            correct: 0,
          },
        },
        {
          heading: 'ما يُصدَّر به جواب القسم',
          lines: [
            { html: `جواب القسم may be opened (<bdi>يُصَدَّر</bdi>) with:`, list: false },
            { table: { headers: ['الأداة', 'Example'], rows: [
              ['إِنَّ الْمُشَدَّدَة', '﴿إِنَّ رَبَّكَ لَبِالْمِرْصَادِ﴾'],
              ['إِنَّ الْمُخَفَّفَة', '﴿إِنْ كُنَّا لَفِي ضَلَالٍ مُّبِينٍ﴾'],
              ['قَدْ', '﴿قَدْ أَفْلَحَ مَن زَكَّاهَا﴾'],
              ['اللَّامُ الْمَفْتُوحَة', '﴿لَنَسْأَلَنَّهُمْ أَجْمَعِينَ﴾'],
              ['مَا النَّافِيَة', '﴿مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ﴾'],
              ['لَا النَّافِيَة', '﴿لَا يَبْعَثُ اللَّهُ مَن يَمُوتُ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `With what may جواب القسم be opened (يُصدَّر)?`,
            kind: 'mcq',
            options: ['إن المشددة, إن المخففة, قد, اللام المفتوحة, ما النافية, or لا النافية', 'Only ever اللام المفتوحة, with no alternative', 'Only ever نون التوكيد', 'It is never opened with anything at all'],
            correct: 0,
          },
        },
        {
          heading: 'نون التوكيد في جواب القسم: وجوبها وامتناعها',
          lines: [
            { html: `نون التوكيد is obligatory in جواب القسم when الجواب is affirmative (<bdi>مُثْبَت</bdi>) and not separated from اللام, as in <bdi>﴿وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾</bdi>.`, list: false },
            { html: `It is prohibited when:`, list: false },
            { html: `الجواب is not affirmative, as in <bdi>﴿لَا يَبْعَثُ اللَّهُ مَن يَمُوتُ﴾</bdi>`, list: true, bullet: true },
            { html: `it has no لام, as in <bdi>﴿تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾</bdi>`, list: true, bullet: true },
            { html: `it is separated from اللام, as in <bdi>﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ﴾</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `When is نون التوكيد obligatory in جواب القسم?`,
            kind: 'mcq',
            options: ['When الجواب is affirmative (مثبت) and not separated from اللام', 'Whenever a قسم is mentioned, with no other condition', 'Only when الجواب is negated', 'Only when there is no لام at all'],
            correct: 0,
          },
        },
        {
          heading: 'اجتماع القسم والشرط: من يستحق الجواب',
          lines: [
            { html: `When قسم and شرط combine, الجواب belongs to whichever came first (<bdi>السَّابِق</bdi>); the other's جواب is deleted, indicated by the mentioned one.`, list: false },
            { html: `In <bdi>﴿لَئِنْ أُخْرِجُوا لَا يَخْرُجُونَ مَعَهُمْ﴾</bdi>, <bdi>لَا يَخْرُجُونَ</bdi> is not مجزوم because it is جواب القسم (the implied قسم precedes الشرط), not جواب الشرط.`, list: false },
            { html: `When قسم precedes شرط, the فعل after the conditional particle must be ماضٍ — لفظا, as in <bdi>وَاللَّهِ إِنْ أَتَيْتَنِي لَأُكْرِمَنَّكَ</bdi>, or معنى (<bdi>لَمْ</bdi> + مضارع), as in <bdi>وَاللَّهِ إِنْ لَمْ تَأْتِنِي لَأَهْجُرَنَّكَ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `When قسم and شرط combine, which gets الجواب?`,
            kind: 'mcq',
            options: ['الجواب belongs to whichever came first (السابق); the other’s جواب is deleted', 'الجواب always belongs to الشرط, never القسم', 'الجواب always belongs to القسم, never الشرط', 'Both get separate, independent جوابات'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'الجملة التفسيرية has two forms:', options: ['with a حرف تفسير, or without one', 'مرفوعة and منصوبة only', 'ابتدائية and مستأنفة only', 'لفظية and معنوية only'], correct: 0 },
        { q: 'The three أركان of القسم are:', options: ['فعل القسم, المقسم به, and المقسم عليه', 'الفاعل, الفعل, and المفعول به', 'المحذِّر, المحذَّر, and المحذَّر منه', 'المشغول, المشغول به, and المشغول عنه'], correct: 0 },
        { q: '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ﴾ shows a deleted قسم indicated by:', options: ['اللام الموطئة للقسم', 'نون التوكيد', 'إن المشددة', 'ما النافية'], correct: 0 },
        { q: 'جواب القسم may be opened with:', options: ['إن المشددة, قد, اللام المفتوحة, ما النافية, or لا النافية', 'Only ever اللام المفتوحة', 'Only ever نون التوكيد', 'It is never opened with anything'], correct: 0 },
        { q: 'نون التوكيد is prohibited in جواب القسم when:', options: ['الجواب is not affirmative, has no لام, or is separated from اللام', 'الجواب is affirmative and not separated from اللام', 'a قسم is implied rather than stated', 'الجواب opens with إن المشددة'], correct: 0 },
        { q: '﴿لَئِنْ أُخْرِجُوا لَا يَخْرُجُونَ مَعَهُمْ﴾ shows لا يخرجون not مجزوم because it is:', options: ['جواب القسم, not جواب الشرط', 'جواب الشرط, not جواب القسم', 'neither جواب القسم nor جواب الشرط', 'مجزوم after all, contrary to the question’s premise'], correct: 0 },
      ],
      bank: [
        { title: 'التفسيرية بحرف تفسير', kind: 'mcq', prompt: '﴿وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ﴾ shows الجملة التفسيرية expressed:', options: ['with a حرف تفسير (أن)', 'without any حرف تفسير', 'as صلة الموصول instead', 'as المعترضة instead'], correct: 0 },
        { title: 'فعل القسم المحذوف', kind: 'mcq', prompt: 'فعل القسم (like أقسم or أحلف) is typically:', options: ['محذوف', 'مذكور دائما', 'مبنيا للمجهول دائما', 'منصوبا'], correct: 0 },
        { title: 'إن المخففة تصدر الجواب', kind: 'mcq', prompt: '﴿إِنْ كُنَّا لَفِي ضَلَالٍ مُّبِينٍ﴾ shows جواب القسم opened with:', options: ['إن المخففة', 'إن المشددة', 'قد', 'ما النافية'], correct: 0 },
        { title: 'اللام المفتوحة تصدر الجواب', kind: 'mcq', prompt: '﴿لَنَسْأَلَنَّهُمْ أَجْمَعِينَ﴾ shows جواب القسم opened with:', options: ['اللام المفتوحة', 'ما النافية', 'لا النافية', 'إن المخففة'], correct: 0 },
        { title: 'نون التوكيد الواجبة', kind: 'mcq', prompt: '﴿وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾ shows نون التوكيد obligatory because الجواب is:', options: ['مثبت and غير مفصول عن اللام', 'غير مثبت', 'بلا لام أصلا', 'مفصول عن اللام'], correct: 0 },
        { title: 'امتناع النون بلا لام', kind: 'mcq', prompt: '﴿تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ shows نون التوكيد prohibited because:', options: ['الجواب has no لام', 'الجواب is مثبت وغير مفصول', 'a قسم is implied, not stated', 'الجواب opens with قد'], correct: 0 },
        { title: 'الفعل ماضيا لفظا بعد سبق القسم', kind: 'mcq', prompt: 'وَاللَّهِ إِنْ أَتَيْتَنِي لَأُكْرِمَنَّكَ shows the فعل after إن as:', options: ['ماضٍ لفظا', 'مضارع مجزوم', 'أمر', 'ماضٍ معنى فقط, not لفظا'], correct: 0 },
        {
          title: 'تركيب: ﴿وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify each ركن من أركان القسم.',
          sentence: 'وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ',
          translation: 'And by Allah, I will surely plan against your idols.',
          cells: ['وَتَاللَّهِ', 'لَأَكِيدَنَّ', 'أَصْنَامَكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'المقسم به' },
              { start: 1, end: 2, role: 'المقسم عليه (جواب القسم)' },
            ] },
          ],
          distractors: ['فعل القسم'],
        },
        {
          title: 'تركيب: ﴿وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾ (نون التوكيد)',
          kind: 'tarkeeb',
          instruction: 'Classify حكم نون التوكيد هنا.',
          sentence: 'وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ',
          translation: 'And by Allah, I will surely plan against your idols.',
          cells: ['وَتَاللَّهِ', 'لَأَكِيدَنَّ', 'أَصْنَامَكُمْ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 1, role: 'وجوب (مثبت وغير مفصول)' }] },
          ],
          distractors: ['امتناع (غير مثبت)', 'امتناع (بلا لام)'],
        },
        {
          title: 'تركيب: ﴿لَا يَبْعَثُ اللَّهُ مَن يَمُوتُ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify حكم نون التوكيد هنا.',
          sentence: 'لَا يَبْعَثُ اللَّهُ مَن يَمُوتُ',
          translation: 'Allah will not resurrect whoever dies.',
          cells: ['لَا', 'يَبْعَثُ', 'اللَّهُ', 'مَن', 'يَمُوتُ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 1, role: 'امتناع (غير مثبت)' }] },
          ],
          distractors: ['وجوب', 'امتناع (بلا لام)'],
        },
        {
          title: 'تركيب: ﴿تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify حكم نون التوكيد هنا.',
          sentence: 'تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ',
          translation: 'By Allah, you will not cease remembering Joseph.',
          cells: ['تَاللَّهِ', 'تَفْتَأُ', 'تَذْكُرُ', 'يُوسُفَ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 1, role: 'امتناع (بلا لام)' }] },
          ],
          distractors: ['وجوب', 'امتناع (غير مثبت)'],
        },
      ],
    },
    // ---------------------------------------------------------------- L6
    {
      id: 'l6',
      title: 'بقية غير المعمولة وشبه الجملة',
      subtitle: 'The Remaining محل-less Types, and شبه الجملة — الظرف اللغو, المستقر, and المنصوب بنزع الخافض',
      sourceRef: 'pp. 171–174',
      concepts: [
        {
          heading: 'جوابا الشرط بلا محل، والتابعة لما لا محل له',
          lines: [
            { html: `Two more جوابات الشرط have no محل من الإعراب:`, list: false },
            { html: `جواب of a non-jazm conditional (<bdi>لَوْ، لَوْلَا، إِذَا...</bdi>), as in <bdi>﴿وَلَوْ شِئْنَا لَرَفَعْنَاهُ بِهَا﴾</bdi>`, list: true, bullet: true },
            { html: `جواب of a jazm-conditional NOT linked by الفاء or إذا الفجائية, as in <bdi>إِنْ تَجْتَهِدْ تَنْجَحْ</bdi>`, list: true, bullet: true },
            { html: `The eighth type, <bdi>التَّابِعَة لِمَا لَا مَحَلَّ لَه</bdi>, is a sentence that is تابع (e.g. معطوفة) to a sentence having no محل, as in <bdi>﴿وَاتَّقُوا الَّذِي أَمَدَّكُم بِمَا تَعْلَمُونَ ۝ أَمَدَّكُم بِأَنْعَامٍ وَبَنِينَ ۝ وَجَنَّاتٍ وَعُيُونٍ﴾</bdi> — the second أمدكم-clause follows الصلة, which itself has no محل.`, list: false },
          ],
          exercise: {
            prompt: `Define the eighth type: التابعة لما لا محل له. Give the example.`,
            kind: 'mcq',
            options: ['A sentence that is تابع to a sentence having no محل, as in ﴿أَمَدَّكُم بِأَنْعَامٍ وَبَنِينَ ۝ وَجَنَّاتٍ وَعُيُونٍ﴾ following صلة الموصول', 'The very first sentence of speech', 'A sentence forming a relative clause on its own', 'A sentence interposed between two connected elements'],
            correct: 0,
          },
        },
        {
          heading: 'شبه الجملة كلها معمول، ونوعا الظرف',
          lines: [
            { html: `All شبه جملة is معمول — none of it is غير معمول.`, list: false },
            { html: `الظرف (in the شبه الجملة sense) has two types:`, list: false },
            { html: `<bdi>الظَّرْفُ اللَّغْو</bdi> — attached (<bdi>مُتَعَلِّق</bdi>) to a mentioned عامل`, list: true, bullet: true },
            { html: `<bdi>الظَّرْفُ الْمُسْتَقِرّ</bdi> — attached to an obligatorily deleted general عامل (<bdi>كَائِن</bdi> / <bdi>اسْتَقَرَّ</bdi>)`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `What is the ruling of شبه الجملة regarding العمل?`,
            kind: 'mcq',
            options: ['All شبه جملة are معمول — none is غير معمول', 'Half are معمول and half are غير معمول', 'All شبه جملة are غير معمول', 'It depends entirely on context, with no general rule'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع الظرف اللغو: المرفوع والمنصوب',
          lines: [
            { html: `الظرف اللغو is مرفوع محلا in a single position: <bdi>نَائِبُ الْفَاعِل</bdi>, as in <bdi>﴿وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾</bdi>.`, list: false },
            { html: `It is منصوب محلا in seven positions:`, list: false },
            { table: { headers: ['الموضع', 'Example'], rows: [
              ['الْمَفْعُولُ الْمُطْلَق', '﴿يَعْرِفُونَهُ كَمَا يَعْرِفُونَ أَبْنَاءَهُمْ﴾'],
              ['الْمَفْعُولُ بِه', '﴿عَفَا اللَّهُ عَنكَ﴾'],
              ['الْمَفْعُولُ فِيه', '﴿وَلَقَدْ نَصَرَكُمُ اللَّهُ بِبَدْرٍ﴾'],
              ['الْمَفْعُولُ لَه', '﴿يَجْعَلُونَ أَصَابِعَهُمْ فِي آذَانِهِم مِّنَ الصَّوَاعِقِ﴾'],
              ['الْمَفْعُولُ مَعَه', 'هَاجَرَ النَّبِيُّ ﷺ مَعَ أَبِي بَكْرٍ'],
              ['الْحَال', '﴿ادْخُلُوهَا بِسَلَامٍ آمِنِينَ﴾'],
              ['التَّمْيِيز', '﴿تَرَىٰ أَعْيُنَهُمْ تَفِيضُ مِنَ الدَّمْعِ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `In which single position is the ظرف اللغو مرفوع محلا? Give the example.`,
            kind: 'mcq',
            options: ['نائب الفاعل: ﴿وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾', 'المفعول به, alongside six other positions', 'الحال, alongside six other positions', 'It is never مرفوع محلا, only منصوب'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع الظرف المستقر، ومعموليته بالتبعية',
          lines: [
            { html: `الظرف المستقر is مرفوع بالأصالة in two positions:`, list: false },
            { html: `<bdi>خَبَرُ الْمُبْتَدَأ</bdi>, as in <bdi>إِنَّمَا الْعِلْمُ عِندَ اللَّهِ</bdi>`, list: true, bullet: true },
            { html: `<bdi>خَبَرُ إِنّ</bdi>, as in <bdi>﴿إِنَّ اللَّهَ مَعَنَا﴾</bdi>`, list: true, bullet: true },
            { html: `It is منصوب بالأصالة in two positions:`, list: false },
            { html: `<bdi>خَبَرُ الْفِعْلِ النَّاقِص</bdi>, as in <bdi>﴿وَكُنتُمْ عَلَىٰ شَفَا حُفْرَةٍ مِّنَ النَّارِ﴾</bdi>`, list: true, bullet: true },
            { html: `<bdi>الْحَال</bdi>, as in <bdi>أَسْأَلُ اللَّهَ بِرَجَاءِ الْفِرْدَوْسِ فِي الْجَنَّةِ</bdi>`, list: true, bullet: true },
            { html: `It can also be معمول بالتبعية, as <bdi>نَعْت</bdi>, as in <bdi>﴿أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ﴾</bdi> — <bdi>مِن رَّبِّهِمْ</bdi> is a نعت of <bdi>هُدًى</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `How can a ظرف مستقر be معمول بالتبعية? Give the example.`,
            kind: 'mcq',
            options: ['As نعت: ﴿أُولَٰئِكَ عَلَىٰ هُدًى مِّن رَّبِّهِمْ﴾', 'Only ever as خبر المبتدأ', 'Only ever as حال', 'It can never be معمول بالتبعية'],
            correct: 0,
          },
        },
        {
          heading: 'حذف الموصوف مع شبه الجملة، وخاتمة: بعد معرفة، نكرة، ونكرة غير محضة',
          lines: [
            { html: `A موصوف may be deleted, leaving its صفة, when الصفة is a ظرف مستقر with <bdi>مِنْ</bdi> or <bdi>فِي</bdi>, as in <bdi>﴿وَإِن مِّنكُمْ إِلَّا وَارِدُهَا﴾</bdi> (i.e. <bdi>وَإِنْ أَحَدٌ كَائِنٌ مِّنكُمْ</bdi>).`, list: false },
            { html: `As a closing note (<bdi>خَاتِمَة</bdi>), a شبه جملة is parsed as follows:`, list: false },
            { table: { headers: ['After', 'Parsed as', 'Example'], rows: [
              ['معرفة', 'حال', 'أَسْأَلُ اللَّهَ الْفِرْدَوْسَ فِي الْجَنَّةِ (في الجنة حال من الفردوس)'],
              ['نكرة', 'نعت — unless شبه الجملة precedes the noun, in which case حال', 'أَسْأَلُ اللَّهَ بَيْتًا فِي الْجَنَّةِ؛ or fronted: أَسْأَلُ اللَّهَ فِي الْجَنَّةِ بَيْتًا'],
              ['نكرة غير محضة', 'both allowed — حال or نعت', '﴿وَقَالَ رَجُلٌ مُّؤْمِنٌ مِّنْ آلِ فِرْعَوْنَ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `How is a شبه جملة after a نكرة parsed?`,
            kind: 'mcq',
            options: ['As نعت — unless the شبه جملة precedes the noun, in which case it is حال', 'As حال, always, with no exception', 'As مضاف إليه, always', 'It cannot follow a نكرة at all'],
            correct: 0,
          },
        },
        {
          heading: 'المنصوب بنزع الخافض',
          lines: [
            { html: `<bdi>الْمَنْصُوبُ بِنَزْعِ الْخَافِض</bdi> is a noun placed in نصب by removal of the preposition:`, list: false },
            { html: `نصب لفظا, as in <bdi>﴿لَأَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيمَ﴾</bdi> (i.e. <bdi>عَلَىٰ صِرَاطِكَ</bdi>)`, list: true, bullet: true },
            { html: `نصب محلا, as in <bdi>﴿أَوَعَجِبْتُمْ أَن جَاءَكُمْ ذِكْرٌ مِّن رَّبِّكُمْ﴾</bdi> (i.e. <bdi>مِنْ أَنْ جَاءَكُمْ</bdi>)`, list: true, bullet: true },
            { html: `The removal of الخافض is also called <bdi>الْحَذْف</bdi>, <bdi>الْإِيصَال</bdi>, and <bdi>الِاتِّسَاع</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What is المنصوب بنزع الخافض? Give both examples.`,
            kind: 'mcq',
            options: ['A noun placed in نصب by removal of the preposition — نصب لفظا or نصب محلا', 'A noun always مجرور by an implied preposition', 'A sentence with no محل من الإعراب', 'A حال clause negated by لا'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: '﴿وَلَوْ شِئْنَا لَرَفَعْنَاهُ بِهَا﴾ shows جواب الشرط with no محل because الشرط is:', options: ['غير جازم (لو)', 'جازم ومرتبط بالفاء', 'جازم ومرتبط بإذا الفجائية', 'a قسم, not a شرط'], correct: 0 },
        { q: 'All شبه جملة are:', options: ['معمول, with no exception', 'partly معمول and partly not', 'entirely غير معمول', 'irrelevant to العمل altogether'], correct: 0 },
        { q: 'الظرف اللغو is مرفوع محلا in which single position?', options: ['نائب الفاعل', 'الحال', 'التمييز', 'المفعول به'], correct: 0 },
        { q: 'خبر الفعل الناقص and الحال are positions where الظرف المستقر is:', options: ['منصوب بالأصالة', 'مرفوع بالأصالة', 'مجرور بالأصالة', 'معمول بالتبعية فقط'], correct: 0 },
        { q: 'A شبه جملة after a معرفة is parsed as:', options: ['حال', 'نعت', 'مضاف إليه', 'مبتدأ'], correct: 0 },
        { q: 'المنصوب بنزع الخافض is also called:', options: ['الحذف, الإيصال, and الاتساع', 'التنازع and الإعمال', 'الجائز and الواجب', 'الحقيقي and السببي'], correct: 0 },
      ],
      bank: [
        { title: 'جواب جازم بلا رابطة', kind: 'mcq', prompt: 'إِنْ تَجْتَهِدْ تَنْجَحْ shows جواب الشرط with no محل because:', options: ['it is not linked by الفاء or إذا الفجائية', 'الشرط is غير جازم', 'a قسم precedes it', 'it is معطوفة on صلة الموصول'], correct: 0 },
        { title: 'التابعة لصلة الموصول', kind: 'mcq', prompt: '﴿أَمَدَّكُم بِأَنْعَامٍ وَبَنِينَ ۝ وَجَنَّاتٍ وَعُيُونٍ﴾ shows the second clause as:', options: ['التابعة لما لا محل له, following صلة الموصول', 'الابتدائية', 'جواب القسم', 'المعترضة'], correct: 0 },
        { title: 'اللغو منصوبا محلا: المفعول به', kind: 'mcq', prompt: '﴿عَفَا اللَّهُ عَنكَ﴾ shows عنك as ظرف لغو منصوب محلا as:', options: ['المفعول به', 'المفعول المطلق', 'الحال', 'التمييز'], correct: 0 },
        { title: 'اللغو منصوبا محلا: الحال', kind: 'mcq', prompt: '﴿ادْخُلُوهَا بِسَلَامٍ آمِنِينَ﴾ shows بسلام as ظرف لغو منصوب محلا as:', options: ['الحال', 'المفعول له', 'المفعول معه', 'المفعول فيه'], correct: 0 },
        { title: 'المستقر خبر المبتدأ', kind: 'mcq', prompt: 'إِنَّمَا الْعِلْمُ عِندَ اللَّهِ shows عند الله as ظرف مستقر:', options: ['مرفوع بالأصالة, خبر المبتدأ', 'منصوب بالأصالة, خبر الفعل الناقص', 'معمول بالتبعية, نعت', 'مجرور بالأصالة'], correct: 0 },
        { title: 'حذف الموصوف مع من', kind: 'mcq', prompt: '﴿وَإِن مِّنكُمْ إِلَّا وَارِدُهَا﴾ shows a موصوف deleted, leaving:', options: ['a ظرف مستقر (منكم) as its صفة', 'a ظرف لغو', 'a جملة تفسيرية', 'a نعت سببي'], correct: 0 },
        { title: 'شبه الجملة بعد نكرة متقدمة', kind: 'mcq', prompt: 'أَسْأَلُ اللَّهَ فِي الْجَنَّةِ بَيْتًا shows في الجنة parsed as حال (not نعت) because:', options: ['شبه الجملة precedes the نكرة noun بيتا', 'بيتا is actually معرفة', 'the verb is مبني للمجهول', 'the sentence has no ذو حال at all'], correct: 0 },
        { title: 'نصب لفظا بنزع الخافض', kind: 'mcq', prompt: '﴿لَأَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيمَ﴾ shows صراطك منصوبا بنزع الخافض:', options: ['لفظا (i.e. على صراطك)', 'محلا (i.e. من صراطك)', 'as a ظرف لغو, not نزع خافض', 'as a ظرف مستقر'], correct: 0 },
        {
          title: 'تركيب: ﴿وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾ (اللغو أم المستقر)',
          kind: 'tarkeeb',
          instruction: 'Classify هذا الظرف: اللغو or المستقر؟',
          sentence: 'وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ',
          translation: 'And Hell is brought that Day.',
          cells: ['وَجِيءَ', 'يَوْمَئِذٍ', 'بِجَهَنَّمَ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 1, role: 'اللغو' }] },
          ],
          distractors: ['المستقر'],
        },
        {
          title: 'تركيب: إِنَّمَا الْعِلْمُ عِندَ اللَّهِ',
          kind: 'tarkeeb',
          instruction: 'Classify هذا الظرف: اللغو or المستقر؟',
          sentence: 'إِنَّمَا الْعِلْمُ عِندَ اللَّهِ',
          translation: 'Knowledge is only with Allah.',
          cells: ['إِنَّمَا', 'الْعِلْمُ', 'عِندَ', 'اللَّهِ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 3, role: 'المستقر' }] },
          ],
          distractors: ['اللغو'],
        },
        {
          title: 'تركيب: أَسْأَلُ اللَّهَ الْفِرْدَوْسَ فِي الْجَنَّةِ',
          kind: 'tarkeeb',
          instruction: 'Classify شبه الجملة هنا (بعد معرفة).',
          sentence: 'أَسْأَلُ اللَّهَ الْفِرْدَوْسَ فِي الْجَنَّةِ',
          translation: 'I ask Allah for al-Firdaws in Paradise.',
          cells: ['أَسْأَلُ', 'اللَّهَ', 'الْفِرْدَوْسَ', 'فِي', 'الْجَنَّةِ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 4, role: 'حال (بعد معرفة)' }] },
          ],
          distractors: ['نعت (بعد نكرة)'],
        },
        {
          title: 'تركيب: أَسْأَلُ اللَّهَ بَيْتًا فِي الْجَنَّةِ',
          kind: 'tarkeeb',
          instruction: 'Classify شبه الجملة هنا (بعد نكرة).',
          sentence: 'أَسْأَلُ اللَّهَ بَيْتًا فِي الْجَنَّةِ',
          translation: 'I ask Allah for a house in Paradise.',
          cells: ['أَسْأَلُ', 'اللَّهَ', 'بَيْتًا', 'فِي', 'الْجَنَّةِ'],
          rows: [
            { position: 'above', labels: [{ start: 3, end: 4, role: 'نعت (بعد نكرة)' }] },
          ],
          distractors: ['حال (بعد معرفة)'],
        },
        {
          title: 'تركيب: ﴿لَأَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيمَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify نصب هذا المنصوب بنزع الخافض.',
          sentence: 'لَأَقْعُدَنَّ لَهُمْ صِرَاطَكَ الْمُسْتَقِيمَ',
          translation: 'I will surely sit in wait for them on Your straight path.',
          cells: ['لَأَقْعُدَنَّ', 'لَهُمْ', 'صِرَاطَكَ', 'الْمُسْتَقِيمَ'],
          rows: [
            { position: 'above', labels: [{ start: 2, end: 3, role: 'نصب لفظا' }] },
          ],
          distractors: ['نصب محلا'],
        },
        {
          title: 'تركيب: ﴿أَوَعَجِبْتُمْ أَنْ جَاءَكُمْ ذِكْرٌ مِّن رَّبِّكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify نصب هذا المنصوب بنزع الخافض.',
          sentence: 'أَوَعَجِبْتُمْ أَنْ جَاءَكُمْ ذِكْرٌ مِّن رَّبِّكُمْ',
          translation: 'Do you wonder that a reminder has come to you from your Lord?',
          cells: ['أَوَعَجِبْتُمْ', 'أَنْ', 'جَاءَكُمْ', 'ذِكْرٌ', 'مِّن', 'رَّبِّكُمْ'],
          rows: [
            { position: 'above', labels: [{ start: 1, end: 2, role: 'نصب محلا' }] },
          ],
          distractors: ['نصب لفظا'],
        },
      ],
    },
  ],
};

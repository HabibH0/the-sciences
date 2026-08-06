// Module 05 — النواسخ الحرفية (The Particle Cancelling-Governors)
//
// Content is adapted from a bilingual Anki deck
// (النَحْوُ__2 الْعَامِلِ وَغَيْرِ الْعَامِلِ__2 الْحَرْفِ__1 الْحَرْفِ الْعَامِلِ__2 الحرف الأخرى.apkg,
// 62 notes) prepared for this conversion. Definitions and examples are kept
// faithful to the source notes. Concept bodies are short by design (a
// sentence or two, not teaching prose); quiz/bank question text is English
// with Arabic grammatical terms left in Arabic.
//
// The source deck covers the other عامل حروف beyond حروف الجر (§2 of
// الحرف العامل, itself §2 of الحرف, itself §2 of العامل وغير العامل):
// إنّ وأخواتها (الحروف المشبهة بالفعل) and their mواضع, التخفيف (lightening)
// and ما الكافة, لا لنفي الجنس, and الحروف المشبهة بليس. Together with
// أفعال القلوب and الأفعال الناقصة (Modules 02–03), these five families are
// the whole of النواسخ — عوامل entering upon مبتدأ + خبر.

export default {
  id: '05',
  title: 'النواسخ الحرفية',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف العامل',
  blurb: 'النواسخ الحرفية: إنّ وأخواتها, كأنّ, لكنّ, لعلّ, ليت, and لا لنفي الجنس.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'إلا وإنّ',
      subtitle: 'The Verb-Like Letters — الحروف المشبهة بالفعل, إنّ, and where المكسورة occurs',
      concepts: [
        {
          heading: 'إلا، ومدخل الحروف المشبهة بالفعل',
          lines: [
            { html: `<bdi>إِلَّا</bdi> is the second of the four categories of <bdi>حُرُوف تَعْمَل فِي الِاسْم</bdi> — a حرف putting one اسم in <bdi>نَصْب</bdi>, as in ﴿فَسَجَدُوا إِلَّا إِبْلِيسَ﴾.`, list: false },
            { html: `This module turns to the third category: <bdi>الْحُرُوفُ الْمُشَبَّهَةُ بِالْفِعْل</bdi>, six of them — <bdi>إِنَّ، أَنَّ، كَأَنَّ، لَكِنَّ، لَعَلَّ، لَيْتَ</bdi> — which put the first اسم in <b>نصب</b> (called their اسم) and the second in <b>رفع</b> (called their خبر).`, list: false },
          ],
          exercise: {
            prompt: `What do الحروف المشبهة بالفعل do grammatically؟`,
            kind: 'mcq',
            options: ['They put the first اسم in نصب (their اسم) and the second in رفع (their خبر)', 'They put the first اسم in رفع and the second in نصب', 'They put both أسماء in جر', 'They govern only أفعال, never أسماء'],
            correct: 0,
          },
        },
        {
          heading: 'معنى إنّ وموضعها',
          lines: [
            { html: `<bdi>إِنَّ</bdi> carries the meaning of <bdi>التَّأْكِيد</bdi> (also called <bdi>التَّحْقِيق</bdi>), as in ﴿إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ﴾.`, list: false },
            { html: `With its كسرة, إِنَّ occurs specifically in the position of a <b>جُمْلَة</b> (<bdi>مَوْضِعُ الْجُمْلَة</bdi>) — unlike أَنَّ, which will occupy the position of a single word.`, list: false },
          ],
          exercise: {
            prompt: `In what kind of position does إنّ (with كسرة) occur؟`,
            kind: 'mcq',
            options: ['In the position of a جملة', 'In the position of a single مفرد word', 'In the position of a حرف', 'It occupies no position at all'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع إنّ المكسورة الأحد عشر',
          lines: [
            { html: `إِنَّ المكسورة is required in eleven مواضع:`, list: false },
            { table: { title: 'مواضع إنّ المكسورة الأحد عشر', headers: ['#', 'Position'], rows: [
              ['1', 'الابْتِدَاء, real or effectively so after a حَرْفُ تَنْبِيه or حَرْفُ زَجْر'],
              ['2', 'after الْقَسَم'],
              ['3', 'after الْقَوْل'],
              ['4', 'after وَاوُ الْحَال'],
              ['5', 'after حَتَّى الِابْتِدَائِيَّة'],
              ['6', 'in the صِلَة'],
              ['7', 'in the نَعْت'],
              ['8', 'before the لَامُ الْمُعَلِّقَة'],
              ['9', 'after إِلَّا of حَصْر'],
              ['10', 'after حَيْثُ'],
              ['11', 'in the خبر of an اسْمُ عَيْن'],
            ] } },
            { html: `In ﴿أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ﴾, the حرف تنبيه <bdi>أَلَا</bdi> makes what follows count as ابتداء <bdi>حُكْمًا</bdi>, which is why إنّ (not أنّ) is used.`, list: false },
          ],
          exercise: {
            prompt: `Why is إنّ (not أنّ) used in ﴿أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ﴾؟`,
            kind: 'mcq',
            options: ['Because after a حرف تنبيه the position counts as ابتداء حكما, which requires the كسرة of إنّ', 'Because أنّ can never follow a حرف تنبيه under any circumstance', 'Because ألا is itself a form of إنّ', 'There is no rule — both readings are equally valid here'],
            correct: 0,
          },
        },
        {
          heading: 'إلا مع إنّ أو أنّ، وحيث',
          lines: [
            { html: `Which of إنّ or أنّ follows إِلَّا depends on which sense of إلا it is:`, list: false },
            { table: { headers: ['إلا sense', 'Takes', 'Example'], rows: [
              ['حَصْر', 'إنّ', '﴿وَمَا أَرْسَلْنَا قَبْلَكَ مِنَ الْمُرْسَلِينَ إِلَّا إِنَّهُمْ لَيَأْكُلُونَ الطَّعَامَ﴾'],
              ['اسْتِثْنَاء', 'أنّ', 'هُوَ شُجَاعٌ إِلَّا أَنَّهُ لَيْسَ بِكَرِيمٍ'],
            ] } },
            { html: `After <bdi>حَيْثُ</bdi>, إنّ is used, as in جَلَسْتُ حَيْثُ إِنَّ عَلِيًّا جَالِسٌ — though some disagree, since حيث is مضاف to a جملة.`, list: false },
          ],
          exercise: {
            prompt: `When does إلا take إنّ after it, and when أنّ؟`,
            kind: 'mcq',
            options: ['إلا of حصر takes إنّ; إلا of استثناء takes أنّ', 'إلا of حصر takes أنّ; إلا of استثناء takes إنّ', 'إلا always takes إنّ, regardless of sense', 'إلا never takes either إنّ or أنّ after it'],
            correct: 0,
          },
        },
        {
          heading: 'إنّ أم أنّ في الخبر',
          lines: [
            { html: `The choice between إنّ and أنّ in a خبر tracks what kind of اسم it describes:`, list: false },
            { table: { headers: ['خبر of', 'Takes', 'Example'], rows: [
              ['اسم عين (a concrete entity)', 'إنّ', '﴿إِنَّ الَّذِينَ آمَنُوا … إِنَّ اللَّهَ يَفْصِلُ بَيْنَهُمْ﴾'],
              ['اسم معنى', 'أنّ', 'الْمَرْجُو أَنَّهُ مَغْفُورٌ'],
            ] } },
          ],
          exercise: {
            prompt: `When is إنّ used in a خبر, and when أنّ؟`,
            kind: 'mcq',
            options: ['إنّ in the خبر of an اسم عين; أنّ in the خبر of an اسم معنى', 'إنّ in the خبر of an اسم معنى; أنّ in the خبر of an اسم عين', 'Both are used interchangeably with no distinction', 'Neither can occur inside a خبر'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many الحروف المشبهة بالفعل are there؟',
          options: ['ستة', 'خمسة', 'سبعة', 'أربعة'],
          correct: 0,
        },
        {
          q: 'الحروف المشبهة بالفعل put the first اسم in نصب and the second in:',
          options: ['رفع', 'نصب', 'جر', 'لا خبر لها'],
          correct: 0,
        },
        {
          q: 'إنّ carries the meaning of:',
          options: ['التأكيد (التحقيق)', 'التشبيه', 'التمني', 'الاستدراك'],
          correct: 0,
        },
        {
          q: 'Why is إنّ used in ﴿وَالْقُرْآنِ الْحَكِيمِ إِنَّكَ لَمِنَ الْمُرْسَلِينَ﴾؟',
          options: ['It follows القسم — one of the مواضع of إنّ المكسورة', 'It follows القول', 'It occurs in a نعت', 'It follows إلا of حصر'],
          correct: 0,
        },
        {
          q: 'Why is إنّ used in ﴿قَالَ إِنِّي عَبْدُ اللَّهِ﴾؟',
          options: ['It follows القول', 'It follows القسم', 'It follows حتى الابتدائية', 'It occurs before اللام المعلقة'],
          correct: 0,
        },
        {
          q: 'Why is إنّ used in ﴿وَاللَّهُ يَعْلَمُ إِنَّكَ لَرَسُولُهُ﴾؟',
          options: ['Because of اللام المعلقة, which suspends يعلم and lets the جملة begin afresh with إنّ', 'Because يعلم is itself a حرف مشبه بالفعل', 'Because الله is an اسم نكرة here', 'Because إنّ here means التمني'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'إلا: أي فئة؟',
          kind: 'mcq',
          prompt: 'إلا belongs to which category of حروف تعمل في الاسم؟',
          options: ['a حرف that puts one اسم in نصب', 'a حرف that puts one اسم in جر', 'a حرف that puts اسم in نصب and خبر in رفع', 'a حرف that puts اسم in رفع and خبر in نصب'],
          correct: 0,
        },
        {
          title: 'الستة بالاسم',
          kind: 'mcq',
          prompt: 'List the six الحروف المشبهة بالفعل.',
          options: ['إنّ، أنّ، كأنّ، لكنّ، لعلّ، ليت', 'إنّ، أنّ، لن، لم، لا، ما', 'كان، أصبح، ظل، بات، صار، ليس', 'الباء، من، إلى، عن، على، في'],
          correct: 0,
        },
        {
          title: 'موضع إنّ المكسورة',
          kind: 'mcq',
          prompt: 'إنّ المكسورة occurs in the position of:',
          options: ['جملة', 'مفرد', 'حرف', 'ظرف'],
          correct: 0,
        },
        {
          title: 'موضع أول: الابتداء',
          kind: 'mcq',
          prompt: 'One of the eleven مواضع of إنّ المكسورة is:',
          options: ['الابتداء، حقيقة أو حكما', 'بعد أفعال القلوب', 'بعد أفعال المقاربة', 'بعد التمييز'],
          correct: 0,
        },
        {
          title: 'إنّ بعد القسم',
          kind: 'mcq',
          prompt: '﴿وَالْقُرْآنِ الْحَكِيمِ إِنَّكَ لَمِنَ الْمُرْسَلِينَ﴾ illustrates إنّ المكسورة:',
          options: ['بعد القسم', 'بعد القول', 'في الصلة', 'في النعت'],
          correct: 0,
        },
        {
          title: 'إنّ بعد القول',
          kind: 'mcq',
          prompt: '﴿قَالَ إِنِّي عَبْدُ اللَّهِ﴾ illustrates إنّ المكسورة:',
          options: ['بعد القول', 'بعد القسم', 'بعد واو الحال', 'بعد حيث'],
          correct: 0,
        },
        {
          title: 'إنّ في الصلة',
          kind: 'mcq',
          prompt: 'مَا إِنْ مَفَاتِحَهُ لَتَنُوءُ بِالْعُصْبَةِ illustrates إنّ المكسورة:',
          options: ['في الصلة (صلة الموصول)', 'في النعت', 'بعد إلا الحصر', 'قبل اللام المعلقة'],
          correct: 0,
        },
        {
          title: 'إنّ في النعت',
          kind: 'mcq',
          prompt: 'نَظَرْتُ إِلَى رَجُلٍ إِنَّهُ صَالِحٌ illustrates إنّ المكسورة:',
          options: ['في النعت (تصف رجل)', 'في الصلة', 'بعد حيث', 'في خبر اسم عين'],
          correct: 0,
        },
        {
          title: 'إنّ قبل اللام المعلقة',
          kind: 'mcq',
          prompt: '﴿وَاللَّهُ يَعْلَمُ إِنَّكَ لَرَسُولُهُ﴾ — why إنّ, not أنّ?',
          options: ['اللام المعلقة suspends يعلم, so the جملة begins afresh with إنّ', 'يعلم is a فعل قلب of الظن', 'الرسول is an اسم نكرة', 'There is no rule involved'],
          correct: 0,
        },
        {
          title: 'إلا الحصر',
          kind: 'mcq',
          prompt: '﴿وَمَا أَرْسَلْنَا قَبْلَكَ مِنَ الْمُرْسَلِينَ إِلَّا إِنَّهُمْ لَيَأْكُلُونَ الطَّعَامَ﴾ — إلا here is:',
          options: ['إلا الحصر, which takes إنّ', 'إلا الاستثناء, which takes أنّ', 'إلا التي لا معنى لها', 'a حرف عطف, not إلا at all'],
          correct: 0,
        },
        {
          title: 'إلا الاستثناء',
          kind: 'mcq',
          prompt: 'هُوَ شُجَاعٌ إِلَّا أَنَّهُ لَيْسَ بِكَرِيمٍ — إلا here is:',
          options: ['إلا الاستثناء, which takes أنّ', 'إلا الحصر, which takes إنّ', 'إلا زائدة بلا معنى', 'إلا للتوكيد'],
          correct: 0,
        },
        {
          title: 'حيث وإنّ',
          kind: 'mcq',
          prompt: 'جَلَسْتُ حَيْثُ إِنَّ عَلِيًّا جَالِسٌ — what follows حيث?',
          options: ['إنّ, one of the مواضع of إنّ المكسورة', 'أنّ, since حيث is مضاف إلى مفرد', 'لعل, for التوقع', 'كأن, for التشبيه'],
          correct: 0,
        },
        {
          title: 'إنّ في خبر اسم عين',
          kind: 'mcq',
          prompt: '﴿إِنَّ الَّذِينَ آمَنُوا...إِنَّ اللَّهَ يَفْصِلُ بَيْنَهُمْ﴾ — this is إنّ in the خبر of:',
          options: ['اسم عين (كيان محسوس)', 'اسم معنى', 'اسم إشارة', 'اسم موصول فقط'],
          correct: 0,
        },
        {
          title: 'أنّ في خبر اسم معنى',
          kind: 'mcq',
          prompt: 'الْمَرْجُو أَنَّهُ مَغْفُورٌ — this is أنّ in the خبر of:',
          options: ['اسم معنى (المرجو)', 'اسم عين', 'اسم فاعل', 'اسم مفعول فقط'],
          correct: 0,
        },
        {
          title: 'عدد المواضع',
          kind: 'mcq',
          prompt: 'How many مواضع does إنّ المكسورة have؟',
          options: ['أحد عشر', 'عشرة', 'تسعة', 'اثنا عشر'],
          correct: 0,
        },
        {
          title: 'عمل المشبهة بالفعل',
          kind: 'mcq',
          prompt: 'الحروف المشبهة بالفعل resemble which part of speech in their government?',
          options: ['الفعل', 'الاسم', 'الظرف', 'حروف الجر'],
          correct: 0,
        },
        {
          title: 'واو الحال وإنّ',
          kind: 'mcq',
          prompt: 'One of the eleven مواضع of إنّ المكسورة is after:',
          options: ['واو الحال', 'واو العطف فقط', 'واو القسم', 'واو الجماعة'],
          correct: 0,
        },
        {
          title: 'حتى الابتدائية وإنّ',
          kind: 'mcq',
          prompt: 'إنّ المكسورة also occurs after:',
          options: ['حتى الابتدائية', 'حتى الجارة', 'حتى العاطفة', 'حتى الناصبة'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify اسم إنّ and خبرها, and their إعراب.',
          sentence: 'إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ',
          translation: 'Indeed, Allah is Forgiving, Merciful.',
          cells: ['إِنَّ', 'اللَّهَ', 'غَفُورٌ', 'رَحِيمٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'اسمها، منصوب' },
              { start: 2, end: 3, role: 'خبرها، مرفوع' },
            ] },
          ],
          distractors: ['مرفوع', 'منصوب'],
        },
        {
          title: 'تركيب: ﴿أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Which موضع of إنّ المكسورة does this illustrate?',
          sentence: 'أَلَا إِنَّهُمْ هُمُ الْمُفْسِدُونَ',
          translation: 'Unquestionably, it is they who are the corrupters.',
          cells: ['أَلَا', 'إِنَّهُمْ', 'هُمُ', 'الْمُفْسِدُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'بعد حرف تنبيه (ابتداء حكما)' },
            ] },
          ],
          distractors: ['بعد القسم', 'بعد القول'],
        },
        {
          title: 'تركيب: ﴿وَالْقُرْآنِ الْحَكِيمِ إِنَّكَ لَمِنَ الْمُرْسَلِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Which موضع of إنّ المكسورة does this illustrate؟',
          sentence: 'وَالْقُرْآنِ الْحَكِيمِ إِنَّكَ لَمِنَ الْمُرْسَلِينَ',
          translation: 'By the wise Quran, indeed you are among the messengers.',
          cells: ['وَالْقُرْآنِ', 'الْحَكِيمِ', 'إِنَّكَ', 'لَمِنَ', 'الْمُرْسَلِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'بعد القسم' },
            ] },
          ],
          distractors: ['بعد حرف تنبيه', 'بعد القول'],
        },
        {
          title: 'تركيب: ﴿قَالَ إِنِّي عَبْدُ اللَّهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Which موضع of إنّ المكسورة does this illustrate؟',
          sentence: 'قَالَ إِنِّي عَبْدُ اللَّهِ',
          translation: 'He said, "Indeed, I am the servant of Allah."',
          cells: ['قَالَ', 'إِنِّي', 'عَبْدُ', 'اللَّهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'بعد القول' },
            ] },
          ],
          distractors: ['بعد القسم', 'بعد حرف تنبيه'],
        },
        {
          title: 'تركيب: نَظَرْتُ إِلَى رَجُلٍ إِنَّهُ صَالِحٌ',
          kind: 'tarkeeb',
          instruction: 'Which موضع of إنّ المكسورة does this illustrate؟',
          sentence: 'نَظَرْتُ إِلَى رَجُلٍ إِنَّهُ صَالِحٌ',
          translation: 'I looked at a man — indeed he is righteous.',
          cells: ['نَظَرْتُ', 'إِلَى', 'رَجُلٍ', 'إِنَّهُ', 'صَالِحٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'في النعت' },
            ] },
          ],
          distractors: ['في الصلة', 'بعد القول'],
        },
        {
          title: 'تركيب: جَلَسْتُ حَيْثُ إِنَّ عَلِيًّا جَالِسٌ',
          kind: 'tarkeeb',
          instruction: 'What follows حيث here: إنّ or أنّ؟',
          sentence: 'جَلَسْتُ حَيْثُ إِنَّ عَلِيًّا جَالِسٌ',
          translation: 'I sat where Ali is sitting.',
          cells: ['جَلَسْتُ', 'حَيْثُ', 'إِنَّ', 'عَلِيًّا', 'جَالِسٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'إنّ' },
            ] },
          ],
          distractors: ['أنّ'],
        },
        {
          title: 'تركيب: مَا إِنْ مَفَاتِحَهُ لَتَنُوءُ بِالْعُصْبَةِ',
          kind: 'tarkeeb',
          instruction: 'Which موضع of إنّ المكسورة does this illustrate?',
          sentence: 'مَا إِنْ مَفَاتِحَهُ لَتَنُوءُ بِالْعُصْبَةِ',
          translation: 'Whose keys would burden a company [of strong men].',
          cells: ['مَا', 'إِنْ', 'مَفَاتِحَهُ', 'لَتَنُوءُ', 'بِالْعُصْبَةِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'في الصلة' },
            ] },
          ],
          distractors: ['في النعت', 'بعد حيث'],
        },
        {
          title: 'تركيب: ﴿وَمَا أَرْسَلْنَا قَبْلَكَ مِنَ الْمُرْسَلِينَ إِلَّا إِنَّهُمْ لَيَأْكُلُونَ الطَّعَامَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify إلا here by sense, and what it takes after it.',
          sentence: 'وَمَا أَرْسَلْنَا قَبْلَكَ مِنَ الْمُرْسَلِينَ إِلَّا إِنَّهُمْ لَيَأْكُلُونَ الطَّعَامَ',
          translation: 'And We did not send before you any of the messengers except that they ate food.',
          cells: ['أَرْسَلْنَا', 'قَبْلَكَ', 'مِنَ', 'الْمُرْسَلِينَ', 'إِلَّا', 'إِنَّهُمْ', 'لَيَأْكُلُونَ', 'الطَّعَامَ'],
          rows: [
            { position: 'above', labels: [
              { start: 4, end: 5, role: 'إلا الحصر، تأخذ إنّ' },
            ] },
          ],
          distractors: ['إلا الاستثناء، تأخذ أنّ'],
        },
        {
          title: 'تركيب: هُوَ شُجَاعٌ إِلَّا أَنَّهُ لَيْسَ بِكَرِيمٍ',
          kind: 'tarkeeb',
          instruction: 'Classify إلا here by sense, and what it takes after it.',
          sentence: 'هُوَ شُجَاعٌ إِلَّا أَنَّهُ لَيْسَ بِكَرِيمٍ',
          translation: 'He is brave, except that he is not generous.',
          cells: ['هُوَ', 'شُجَاعٌ', 'إِلَّا', 'أَنَّهُ', 'لَيْسَ', 'بِكَرِيمٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'إلا الاستثناء، تأخذ أنّ' },
            ] },
          ],
          distractors: ['إلا الحصر، تأخذ إنّ'],
        },
        {
          title: 'تركيب: زَيْدٌ إِنَّهُ قَادِمٌ',
          kind: 'tarkeeb',
          instruction: 'زَيْدٌ is an اسم عين. Does its خبر call for إنّ or أنّ؟',
          sentence: 'زَيْدٌ إِنَّهُ قَادِمٌ',
          translation: 'Zayd — indeed he is coming.',
          cells: ['زَيْدٌ', 'إِنَّهُ', 'قَادِمٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'إنّ، اسم عين' },
            ] },
          ],
          distractors: ['أنّ، اسم معنى'],
        },
        {
          title: 'تركيب: الْمَرْجُو أَنَّهُ مَغْفُورٌ',
          kind: 'tarkeeb',
          instruction: 'الْمَرْجُو is an اسم معنى. Does its خبر call for إنّ or أنّ؟',
          sentence: 'الْمَرْجُو أَنَّهُ مَغْفُورٌ',
          translation: 'What is hoped for is that he is forgiven.',
          cells: ['الْمَرْجُو', 'أَنَّهُ', 'مَغْفُورٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'أنّ، اسم معنى' },
            ] },
          ],
          distractors: ['إنّ، اسم عين'],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أنّ والقواعد المشتركة',
      subtitle: "أnna's Positions — أنّ المفتوحة's ten مواضع, and rules إنّ and أنّ share",
      concepts: [
        {
          heading: 'أنّ: تعريفها وطبيعتها',
          lines: [
            { html: `<bdi>أَنَّ</bdi> is a <bdi>حَرْفُ مَصْدَرٍ لِلتَّأْكِيد</bdi>; unlike إنّ, it occurs in the position of a <b>single word</b> (<bdi>مَوْضِعُ الْمُفْرَد</bdi>) — أنّ together with its جملة is interpreted as a <bdi>مَصْدَر</bdi>.`, list: false },
            { html: `In fact, of all six الحروف المشبهة بالفعل, every one forms a <bdi>جُمْلَة</bdi> with its اسم وخبر <b>except</b> أنّ, which alone (with what follows) stands in the <bdi>تَأْوِيل</bdi> of a مصدر.`, list: false },
          ],
          exercise: {
            prompt: `Which of the الحروف المشبهة بالفعل forms a جملة with its اسم وخبر, and which does not؟`,
            kind: 'mcq',
            options: ['All of them do except أنّ — it and what follows is a مصدر instead', 'All six of them do, without exception', 'None of them form a جملة at all', 'Only إنّ and أنّ form a جملة'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع أنّ المفتوحة العشرة',
          lines: [
            { html: `أنّ المفتوحة occurs in ten مواضع:`, list: false },
            { table: { title: 'مواضع أنّ المفتوحة العشرة', headers: ['#', 'Position', 'Example'], rows: [
              ['1', 'فَاعِل', '﴿حَتَّى يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ﴾'],
              ['2', 'نَائِبُ فَاعِل', '﴿قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِنَ الْجِنِّ﴾'],
              ['3', 'مَفْعُول', '—'],
              ['4', 'مُبْتَدَأ', '—'],
              ['5', 'خبر of an اسم معنى', '—'],
              ['6', 'after a جَرّ حَرْف', '—'],
              ['7', 'مُضَافٌ إِلَيْه', '—'],
              ['8', 'after مُذْ/مُنْذُ', '—'],
              ['9', 'after مَا الْمَصْدَرِيَّةُ الظَّرْفِيَّة', '—'],
              ['10', 'تَابِع (عطف on a مفرد, or بدل from a مفرد)', '—'],
            ] } },
          ],
          exercise: {
            prompt: `﴿حَتَّى يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ﴾ shows أنّ in which موضع؟`,
            kind: 'mcq',
            options: ['فاعل', 'نائب فاعل', 'مفعول', 'مبتدأ'],
            correct: 0,
          },
        },
        {
          heading: 'مواضع يشترك فيها إنّ وأنّ',
          lines: [
            { html: `Five مواضع allow BOTH إنّ and أنّ:`, list: false },
            { html: `as the reason (عِلَّة) for a preceding جملة, as in اسْتَغْفِرُوا اللَّهَ إِنَّهُ/أَنَّهُ غَفُورٌ رَحِيمٌ`, list: true, bullet: true },
            { html: `after فَاءُ الْجَزَاء`, list: true, bullet: true },
            { html: `after لَا جَرَمَ (فتح predominant)`, list: true, bullet: true },
            { html: `after a وَاو preceded by a جملة and a مفرد both suitable for عطف`, list: true, bullet: true },
            { html: `after إِذَا الْفُجَائِيَّة`, list: true, bullet: true },
            { html: `The choice still carries a nuance: with إنّ the جملة is a new, independent one giving the reason (<bdi>اسْتِئْنَافِيَّة لِلتَّعْلِيل</bdi>); with أنّ a لام is implied (<bdi>لِأَنَّهُ</bdi>) and the whole thing is a مصدر.`, list: false },
          ],
          exercise: {
            prompt: `What determines the choice between إنّ and أنّ in اسْتَغْفِرُوا اللَّهَ إِنَّهُ غَفُورٌ رَحِيمٌ؟`,
            kind: 'mcq',
            options: ['With إنّ the جملة is a new independent one giving the reason; with أنّ a لام is implied and it is a مصدر', 'إنّ is only for Qurʾānic Arabic, أنّ for everyday speech', 'There is no real difference between the two readings', 'أنّ is only valid when the فعل قلب precedes it'],
            correct: 0,
          },
        },
        {
          heading: 'شرط الاسم، وموضع الخبر شبه الجملة',
          lines: [
            { html: `The اسم of إنّ/أنّ may not be an اسم that requires <bdi>صَدْرُ الْكَلَام</bdi> — so إِنَّ مَنْ صَمَتَ نَجَا is invalid.`, list: false },
            { html: `Separately, when the خبر of إنّ is a <bdi>شِبْهُ جُمْلَة</bdi>, its placement between إنّ and its اسم depends on the اسم's definiteness:`, list: false },
            { table: { headers: ['اسم', 'Middle placement of شبه جملة خبر', 'Example'], rows: [
              ['definite', 'allowed (جائز)', '﴿إِنَّ إِلَيْنَا إِيَابَهُمْ﴾'],
              ['indefinite', 'obligatory (واجب)', '﴿إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِأُولِي الْأَبْصَارِ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `When the خبر of إنّ is a شبه جملة, when must it come between إنّ and its اسم rather than after it؟`,
            kind: 'mcq',
            options: ['When the اسم is indefinite (نكرة) — placement in the middle is then obligatory', 'When the اسم is definite (معرفة) — placement in the middle is then obligatory', 'It is always obligatory, regardless of the اسم', 'It is never allowed in the middle, regardless of the اسم'],
            correct: 0,
          },
        },
        {
          heading: 'أحكام إضافية: العطف، الباء، ومعنى لعل',
          lines: [
            { html: `A تابع on the اسم of إنّ has two عطف options, whether the خبر is already complete or not:`, list: false },
            { table: { headers: ['عطف on', 'إعراب', 'Example'], rows: [
              ['اللَّفْظ', 'نصب', '﴿إِنَّ وَعْدَ اللَّهِ حَقٌّ وَالسَّاعَةَ لَا رَيْبَ فِيهَا﴾'],
              ['الِابْتِدَاء', 'رفع', '﴿أَئِنَّا لَمَبْعُوثُونَ أَوَآبَاؤُنَا الْأَوَّلُونَ﴾'],
            ] } },
            { html: `A <bdi>بَاء</bdi> may enter on the خبر of أنّ, as in ﴿أَوَلَمْ يَرَوْا أَنَّ اللَّهَ … بِقَادِرٍ عَلَى أَنْ يُحْيِيَ الْمَوْتَىٰ﴾.`, list: false },
            { html: `أنّ can also carry the meaning of <bdi>لَعَلَّ</bdi>, as in ﴿وَمَا يُشْعِرُكُمْ أَنَّهَا إِذَا جَاءَتْ لَا يُؤْمِنُونَ﴾ (أنّها = لعلّها).`, list: false },
          ],
          exercise: {
            prompt: `Can أنّ carry the meaning of لعل؟`,
            kind: 'mcq',
            options: ['Yes, as in ﴿وَمَا يُشْعِرُكُمْ أَنَّهَا إِذَا جَاءَتْ لَا يُؤْمِنُونَ﴾', 'No, أنّ can never carry that meaning', 'Only كأنّ can carry the meaning of لعل', 'Yes, but only in poetry, never in the Qurʾān'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'أنّ occurs in the position of:',
          options: ['a single مفرد word', 'a whole جملة', 'a حرف', 'a ظرف only'],
          correct: 0,
        },
        {
          q: '﴿قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِنَ الْجِنِّ﴾ shows أنّ in which موضع؟',
          options: ['نائب فاعل', 'فاعل', 'مبتدأ', 'مضاف إليه'],
          correct: 0,
        },
        {
          q: 'How many شared مواضع allow both إنّ and أنّ؟',
          options: ['خمسة', 'ثلاثة', 'سبعة', 'اثنان'],
          correct: 0,
        },
        {
          q: 'What condition applies to the اسم of إنّ and أنّ؟',
          options: ['It may not require صدر الكلام', 'It must always be نكرة', 'It must always be معرفة', 'It must be a ضمير'],
          correct: 0,
        },
        {
          q: '﴿إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِأُولِي الْأَبْصَارِ﴾ — the خبر شبه جملة comes between إنّ and its (نكرة) اسم because that placement is here:',
          options: ['واجب (obligatory)', 'ممتنع (forbidden)', 'جائز فقط (merely permitted)', 'نادر جدا (extremely rare)'],
          correct: 0,
        },
        {
          q: '﴿أَوَلَمْ يَرَوْا أَنَّ اللَّهَ...بِقَادِرٍ عَلَى أَنْ يُحْيِيَ الْمَوْتَىٰ﴾ shows which حرف entering the خبر of أنّ؟',
          options: ['الباء', 'اللام', 'الكاف', 'الواو'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'تعريف أنّ',
          kind: 'mcq',
          prompt: 'أنّ is defined as:',
          options: ['حرف مصدر للتأكيد', 'حرف تشبيه', 'حرف استدراك', 'حرف تمني'],
          correct: 0,
        },
        {
          title: 'أنّ: مفعول',
          kind: 'mcq',
          prompt: '﴿فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ﴾ shows أنّ in which موضع؟',
          options: ['مفعول', 'فاعل', 'نائب فاعل', 'خبر'],
          correct: 0,
        },
        {
          title: 'أنّ: مبتدأ',
          kind: 'mcq',
          prompt: '﴿وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً﴾ shows أنّ in which موضع؟',
          options: ['مبتدأ', 'فاعل', 'مفعول', 'خبر'],
          correct: 0,
        },
        {
          title: 'أنّ: بعد حرف جر',
          kind: 'mcq',
          prompt: '﴿وَاشْهَدْ بِأَنَّا مُسْلِمُونَ﴾ shows أنّ:',
          options: ['after a جر حرف (بـ)', 'as فاعل', 'as مضاف إليه', 'after مذ'],
          correct: 0,
        },
        {
          title: 'أنّ: مضاف إليه',
          kind: 'mcq',
          prompt: '﴿إِنَّهُ لَحَقٌّ مِثْلَ مَا أَنَّكُمْ تَنْطِقُونَ﴾ shows أنّ as:',
          options: ['مضاف إليه', 'فاعل', 'خبر', 'بعد مذ'],
          correct: 0,
        },
        {
          title: 'أنّ: بعد مذ',
          kind: 'mcq',
          prompt: 'مَا تَرَكَ الصَّلَاةَ مُذْ أَنَّهُ رَجَعَ مِنَ الْحَجِّ shows أنّ:',
          options: ['بعد مذ', 'بعد منذ فقط', 'بعد جر حرف آخر', 'كمضاف إليه'],
          correct: 0,
        },
        {
          title: 'أنّ: بعد ما المصدرية الظرفية',
          kind: 'mcq',
          prompt: 'صُمْ مَا أَنَّكَ تَسْتَطِيعُ shows أنّ:',
          options: ['بعد ما المصدرية الظرفية', 'بعد مذ/منذ', 'بعد جر حرف', 'كفاعل'],
          correct: 0,
        },
        {
          title: 'أنّ: تابع بالعطف',
          kind: 'mcq',
          prompt: '﴿اذْكُرُوا نِعْمَتِي الَّتِي أَنْعَمْتُ عَلَيْكُمْ وَأَنْ فَضَّلْتُكُمْ عَلَى الْعَالَمِينَ﴾ shows أنّ as:',
          options: ['تابع، عطف على مفرد', 'تابع، بدل', 'فاعل', 'مبتدأ'],
          correct: 0,
        },
        {
          title: 'أنّ: تابع بالبدل',
          kind: 'mcq',
          prompt: '﴿وَإِذْ يَعِدُكُمُ اللَّهُ إِحْدَى الطَّائِفَتَيْنِ أَنَّهَا لَكُمْ﴾ shows أنّ as:',
          options: ['تابع، بدل', 'تابع، عطف', 'فاعل', 'نائب فاعل'],
          correct: 0,
        },
        {
          title: 'علة لجملة سابقة',
          kind: 'mcq',
          prompt: 'اسْتَغْفِرُوا اللَّهَ إِنَّهُ/أَنَّهُ غَفُورٌ رَحِيمٌ illustrates which shared موضع?',
          options: ['علة (reason) لجملة سابقة', 'بعد فاء الجزاء', 'بعد لا جرم', 'بعد إذا الفجائية'],
          correct: 0,
        },
        {
          title: 'بعد فاء الجزاء',
          kind: 'mcq',
          prompt: '﴿فَإِنَّهُ غَفُورٌ رَحِيمٌ﴾ illustrates إنّ/أنّ:',
          options: ['بعد فاء الجزاء', 'بعد لا جرم', 'بعد واو عاطفة', 'بعد إذا الفجائية'],
          correct: 0,
        },
        {
          title: 'بعد لا جرم',
          kind: 'mcq',
          prompt: '﴿لَا جَرَمَ أَنَّ اللَّهَ يَعْلَمُ﴾ illustrates إنّ/أنّ:',
          options: ['بعد لا جرم (والفتح هو الغالب)', 'بعد فاء الجزاء', 'علة لجملة سابقة', 'بعد إذا الفجائية'],
          correct: 0,
        },
        {
          title: 'بعد إذا الفجائية',
          kind: 'mcq',
          prompt: 'خَرَجْتُ فَإِذَا إِنَّ/أَنَّ سَعِيدًا وَاقِفٌ illustrates إنّ/أنّ:',
          options: ['بعد إذا الفجائية', 'بعد لا جرم', 'بعد فاء الجزاء', 'بعد واو عاطفة'],
          correct: 0,
        },
        {
          title: 'شرط اسم إنّ/أنّ',
          kind: 'mcq',
          prompt: 'Why is إِنَّ مَنْ صَمَتَ نَجَا invalid?',
          options: ['من here requires صدر الكلام, which the اسم of إنّ may not', 'إنّ can never take a اسم موصول', 'صمت is مبني, not معرب', 'نجا is a فعل ناقص'],
          correct: 0,
        },
        {
          title: 'توسط الخبر مع معرفة',
          kind: 'mcq',
          prompt: '﴿إِنَّ إِلَيْنَا إِيَابَهُمْ﴾ — the شبه جملة خبر comes between إنّ and its (معرفة) اسم. This placement here is:',
          options: ['جائز (permitted, not obligatory)', 'واجب (obligatory)', 'ممتنع (forbidden)', 'شاذ (anomalous)'],
          correct: 0,
        },
        {
          title: 'عطف على اللفظ',
          kind: 'mcq',
          prompt: '﴿إِنَّ وَعْدَ اللَّهِ حَقٌّ وَالسَّاعَةَ لَا رَيْبَ فِيهَا﴾ — والساعةَ is عطف على:',
          options: ['اللفظ (منصوب)', 'الابتداء (مرفوع)', 'الخبر', 'المضاف إليه'],
          correct: 0,
        },
        {
          title: 'عطف على الابتداء',
          kind: 'mcq',
          prompt: '﴿أَئِنَّا لَمَبْعُوثُونَ أَوَآبَاؤُنَا الْأَوَّلُونَ﴾ — آباؤنا is عطف على:',
          options: ['الابتداء (مرفوع)', 'اللفظ (منصوب)', 'الخبر المنصوب', 'اسم إنّ مباشرة'],
          correct: 0,
        },
        {
          title: 'أنّ بمعنى لعل',
          kind: 'mcq',
          prompt: '﴿وَمَا يُشْعِرُكُمْ أَنَّهَا إِذَا جَاءَتْ لَا يُؤْمِنُونَ﴾ — أنّها here means:',
          options: ['لعلها', 'كأنها', 'إنها', 'لكنها'],
          correct: 0,
        },
        {
          title: 'الاستثناء بين الستة',
          kind: 'mcq',
          prompt: 'Among the six الحروف المشبهة بالفعل, the one that does NOT form a جملة with its اسم وخبر is:',
          options: ['أنّ', 'إنّ', 'كأنّ', 'ليت'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿حَتَّى يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ﴾',
          kind: 'tarkeeb',
          instruction: 'Which موضع of أنّ المفتوحة does this illustrate؟',
          sentence: 'حَتَّى يَتَبَيَّنَ لَهُمْ أَنَّهُ الْحَقُّ',
          translation: 'Until it becomes clear to them that it is the truth.',
          cells: ['يَتَبَيَّنَ', 'لَهُمْ', 'أَنَّهُ', 'الْحَقُّ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'فاعل' },
            ] },
          ],
          distractors: ['نائب فاعل', 'مفعول'],
        },
        {
          title: 'تركيب: ﴿قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِنَ الْجِنِّ﴾',
          kind: 'tarkeeb',
          instruction: 'Which موضع of أنّ المفتوحة does this illustrate؟',
          sentence: 'قُلْ أُوحِيَ إِلَيَّ أَنَّهُ اسْتَمَعَ نَفَرٌ مِنَ الْجِنِّ',
          translation: 'Say, "It has been revealed to me that a group of the jinn listened."',
          cells: ['أُوحِيَ', 'إِلَيَّ', 'أَنَّهُ', 'اسْتَمَعَ', 'نَفَرٌ', 'مِنَ', 'الْجِنِّ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 6, role: 'نائب فاعل' },
            ] },
          ],
          distractors: ['فاعل', 'مفعول'],
        },
        {
          title: 'تركيب: ﴿فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Which موضع of أنّ المفتوحة does this illustrate؟',
          sentence: 'فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ',
          translation: 'So they will know that it is the truth from their Lord.',
          cells: ['يَعْلَمُونَ', 'أَنَّهُ', 'الْحَقُّ', 'مِنْ', 'رَبِّهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 4, role: 'مفعول' },
            ] },
          ],
          distractors: ['فاعل', 'نائب فاعل'],
        },
        {
          title: 'تركيب: ﴿وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً﴾',
          kind: 'tarkeeb',
          instruction: 'Which موضع of أنّ المفتوحة does this illustrate؟',
          sentence: 'وَمِنْ آيَاتِهِ أَنَّكَ تَرَى الْأَرْضَ خَاشِعَةً',
          translation: 'And of His signs is that you see the earth humbled.',
          cells: ['مِنْ', 'آيَاتِهِ', 'أَنَّكَ', 'تَرَى', 'الْأَرْضَ', 'خَاشِعَةً'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 5, role: 'مبتدأ' },
            ] },
          ],
          distractors: ['خبر', 'فاعل'],
        },
        {
          title: 'تركيب: اسْتَغْفِرُوا اللَّهَ إِنَّهُ غَفُورٌ رَحِيمٌ',
          kind: 'tarkeeb',
          instruction: 'This موضع (علة لجملة سابقة) is shared by both إنّ and أنّ. With إنّ, how is the جملة read؟',
          sentence: 'اسْتَغْفِرُوا اللَّهَ إِنَّهُ غَفُورٌ رَحِيمٌ',
          translation: 'Ask forgiveness of Allah — indeed He is Forgiving, Merciful.',
          cells: ['اسْتَغْفِرُوا', 'اللَّهَ', 'إِنَّهُ', 'غَفُورٌ', 'رَحِيمٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 4, role: 'استئنافية للتعليل' },
            ] },
          ],
          distractors: ['مصدر مؤول (لأنه)'],
        },
        {
          title: 'تركيب: ﴿إِنَّ إِلَيْنَا إِيَابَهُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'إِيَابَهُمْ (اسم إنّ) is معرفة. Is placing the شبه جملة خبر إِلَيْنَا between إنّ and its اسم جائز or واجب هنا؟',
          sentence: 'إِنَّ إِلَيْنَا إِيَابَهُمْ',
          translation: 'Indeed, to Us is their return.',
          cells: ['إِنَّ', 'إِلَيْنَا', 'إِيَابَهُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'جائز' },
            ] },
          ],
          distractors: ['واجب', 'ممتنع'],
        },
        {
          title: 'تركيب: ﴿إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِأُولِي الْأَبْصَارِ﴾',
          kind: 'tarkeeb',
          instruction: 'لَعِبْرَةً (اسم إنّ) is نكرة. Is placing the شبه جملة خبر فِي ذَٰلِكَ between إنّ and its اسم جائز or واجب هنا؟',
          sentence: 'إِنَّ فِي ذَٰلِكَ لَعِبْرَةً لِأُولِي الْأَبْصَارِ',
          translation: 'Indeed, in that is a lesson for those who have vision.',
          cells: ['إِنَّ', 'فِي', 'ذَٰلِكَ', 'لَعِبْرَةً', 'لِأُولِي', 'الْأَبْصَارِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'واجب' },
            ] },
          ],
          distractors: ['جائز', 'ممتنع'],
        },
        {
          title: 'تركيب: ﴿إِنَّ وَعْدَ اللَّهِ حَقٌّ وَالسَّاعَةَ لَا رَيْبَ فِيهَا﴾',
          kind: 'tarkeeb',
          instruction: 'وَالسَّاعَةَ is عطف on the اسم of إنّ — على اللفظ or على الابتداء؟',
          sentence: 'إِنَّ وَعْدَ اللَّهِ حَقٌّ وَالسَّاعَةَ لَا رَيْبَ فِيهَا',
          translation: "Indeed, Allah's promise is truth, and the Hour — there is no doubt about it.",
          cells: ['وَعْدَ', 'اللَّهِ', 'حَقٌّ', 'وَالسَّاعَةَ', 'لَا', 'رَيْبَ', 'فِيهَا'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'عطف على اللفظ' },
            ] },
          ],
          distractors: ['عطف على الابتداء'],
        },
        {
          title: 'تركيب: ﴿أَوَلَمْ يَرَوْا أَنَّ اللَّهَ بِقَادِرٍ عَلَىٰ أَنْ يُحْيِيَ الْمَوْتَىٰ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify what enters on the خبر of أنّ here.',
          sentence: 'أَوَلَمْ يَرَوْا أَنَّ اللَّهَ بِقَادِرٍ عَلَىٰ أَنْ يُحْيِيَ الْمَوْتَىٰ',
          translation: 'Do they not see that Allah is able to give life to the dead?',
          cells: ['يَرَوْا', 'أَنَّ', 'اللَّهَ', 'بِقَادِرٍ', 'عَلَىٰ', 'أَنْ', 'يُحْيِيَ', 'الْمَوْتَىٰ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'الباء في خبر أنّ' },
            ] },
          ],
          distractors: ['عطف على اللفظ'],
        },
        {
          title: 'تركيب: ﴿وَمَا يُشْعِرُكُمْ أَنَّهَا إِذَا جَاءَتْ لَا يُؤْمِنُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'What meaning does أنّها carry here?',
          sentence: 'وَمَا يُشْعِرُكُمْ أَنَّهَا إِذَا جَاءَتْ لَا يُؤْمِنُونَ',
          translation: 'And what will make you perceive that when it comes, they will not believe?',
          cells: ['يُشْعِرُكُمْ', 'أَنَّهَا', 'إِذَا', 'جَاءَتْ', 'لَا', 'يُؤْمِنُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'أنّ بمعنى لعل' },
            ] },
          ],
          distractors: ['الباء في خبر أنّ', 'عطف على اللفظ'],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'كأنّ ولكنّ ولعلّ وليت',
      subtitle: 'Comparison, Contrast, Expectation, and Wishing — the last four أخوات إنّ',
      concepts: [
        {
          heading: 'كأنّ ولكنّ',
          lines: [
            { html: `<bdi>كَأَنَّ</bdi> carries the meaning of <bdi>التَّشْبِيه</bdi> (comparison), as in ﴿الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ﴾.`, list: false },
            { html: `<bdi>لَكِنَّ</bdi> carries <bdi>الِاسْتِدْرَاك</bdi> — following an initial statement with speech that removes a mistaken inference (of affirmation or نفي) it might suggest, as in مَا زَيْدٌ قَوِيًّا (might suggest he's not brave) → لَكِنَّهُ شُجَاعٌ.`, list: false },
            { html: `In the Qurʾān, لكنّ is usually preceded by a <bdi>وَاو</bdi>, as in ﴿وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا﴾.`, list: false },
          ],
          exercise: {
            prompt: `What does لكنّ mean, and what is الاستدراك؟`,
            kind: 'mcq',
            options: ['Following an initial statement with speech removing a mistaken inference it might suggest', 'Comparing one thing to another', 'Expressing hope for something desired', 'Wishing for something with no realistic hope'],
            correct: 0,
          },
        },
        {
          heading: 'لعلّ: التوقع وأحكامها الأخرى',
          lines: [
            { html: `<bdi>لَعَلَّ</bdi> carries <bdi>التَّوَقُّع</bdi> (expectation), in two named senses:`, list: false },
            { table: { headers: ['Sense', 'Example'], rows: [
              ['الترجي — for something desired', '﴿وَاتَّقُوا لَعَلَّكُمْ تُرْحَمُونَ﴾'],
              ['الإشفاق — for something feared', '﴿فَلَعَلَّكَ بَاخِعٌ نَفْسَكَ عَلَىٰ آثَارِهِمْ﴾'],
            ] } },
            { html: `لعلّ can also carry <b>التعليل</b>, as in ﴿وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ﴾, or the meaning of <b>كأنّ</b>, as in ﴿وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ﴾.`, list: false },
            { html: `A جملة لعلّ can also be عطف on a <bdi>مَفْعُولٌ لَه</bdi> (explicit or implicit), as in ﴿وَأَنْزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ وَلَعَلَّهُمْ يَتَفَكَّرُونَ﴾. Its lightened form is <bdi>عَلّ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What is the meaning of لعلّ, and what are its two named uses؟`,
            kind: 'mcq',
            options: ['التوقع, in two senses: الترجي (desired) and الإشفاق (feared)', 'التشبيه, comparing two things', 'الاستدراك, correcting a mistaken inference', 'التمني, wishing for something unrealistic'],
            correct: 0,
          },
        },
        {
          heading: 'ليت: التمني',
          lines: [
            { html: `<bdi>لَيْتَ</bdi> carries <bdi>التَّمَنِّي</bdi> — requesting that in which there is no realistic hope (<bdi>طَلَبُ مَا لَا طَمَعَ فِيهِ</bdi>), as in لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا.`, list: false },
            { html: `In the Qurʾān, ليت is usually preceded by <bdi>يَا</bdi>, as in ﴿يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ﴾.`, list: false },
          ],
          exercise: {
            prompt: `What is التمني, the meaning carried by ليت؟`,
            kind: 'mcq',
            options: ['Requesting something in which there is no realistic hope', 'Requesting something entirely achievable', 'Comparing two things to each other', 'Correcting a mistaken inference'],
            correct: 0,
          },
        },
        {
          heading: 'لماذا سُمّيت مشبهة بالفعل؟',
          lines: [
            { html: `These six حروف — <bdi>إِنّ أَنّ كَأَنّ لَكِنّ لَعَلّ لَيْت</bdi> — are called مشبهة بالفعل because they resemble the فعل in two ways: each carries a verbal meaning within it, and each governs like أفعال do (نصب + رفع).`, list: false },
            { table: { headers: ['حرف', 'Verbal meaning'], rows: [
              ['إنّ / أنّ', 'أُؤَكِّدُ'],
              ['لكنّ', 'أَسْتَدْرِكُ'],
              ['ليت', 'أَتَمَنَّى'],
              ['لعلّ', 'أَرْجُو'],
              ['كأنّ', 'أُشَبِّهُ'],
            ] } },
          ],
          exercise: {
            prompt: `Why are these six حروف called مشبهة بالفعل؟`,
            kind: 'mcq',
            options: ['They contain verbal meanings within them, and they govern like أفعال (نصب + رفع)', 'They are historically derived from real أفعال', 'They can be conjugated exactly like a فعل ماضٍ', 'They always appear immediately after a فعل'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'كأنّ carries the meaning of:',
          options: ['التشبيه', 'الاستدراك', 'التوقع', 'التمني'],
          correct: 0,
        },
        {
          q: 'What usually precedes لكنّ in the Qurʾān?',
          options: ['الواو', 'الفاء', 'يا', 'ثم'],
          correct: 0,
        },
        {
          q: '﴿فَلَعَلَّكَ بَاخِعٌ نَفْسَكَ عَلَىٰ آثَارِهِمْ﴾ — this sense of لعلّ is:',
          options: ['الإشفاق (something feared)', 'الترجي (something desired)', 'التعليل', 'معنى كأنّ'],
          correct: 0,
        },
        {
          q: 'What is the lightened form of لعلّ?',
          options: ['عَلّ', 'إنْ', 'أنْ', 'كأنْ'],
          correct: 0,
        },
        {
          q: 'What usually precedes ليت in the Qurʾān?',
          options: ['يا', 'الواو', 'إنّ', 'الفاء'],
          correct: 0,
        },
        {
          q: 'لكنّ matches which فعل-meaning of the six?',
          options: ['أستدرك', 'أؤكد', 'أتمنى', 'أرجو'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'كأنّ: مثال',
          kind: 'mcq',
          prompt: '﴿الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ﴾ illustrates:',
          options: ['التشبيه', 'الاستدراك', 'التوقع', 'التمني'],
          correct: 0,
        },
        {
          title: 'لكنّ: تعريف الاستدراك',
          kind: 'mcq',
          prompt: 'الاستدراك is defined as:',
          options: ['following an initial statement with speech removing a mistaken inference from it', 'wishing for something unrealistic', 'comparing two things directly', 'expressing hope for a desired outcome'],
          correct: 0,
        },
        {
          title: 'لكنّ بالواو',
          kind: 'mcq',
          prompt: '﴿وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا﴾ shows لكنّ preceded by:',
          options: ['الواو', 'الفاء', 'ثم', 'يا'],
          correct: 0,
        },
        {
          title: 'لعلّ: الترجي',
          kind: 'mcq',
          prompt: "﴿وَاتَّقُوا لَعَلَّكُمْ تُرْحَمُونَ﴾ illustrates لعلّ's sense of:",
          options: ['الترجي (something desired)', 'الإشفاق (something feared)', 'التعليل', 'معنى كأنّ'],
          correct: 0,
        },
        {
          title: 'لعلّ: التعليل',
          kind: 'mcq',
          prompt: '﴿وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ﴾ illustrates لعلّ carrying the meaning of:',
          options: ['التعليل', 'الترجي', 'الإشفاق', 'التشبيه المحض'],
          correct: 0,
        },
        {
          title: 'لعلّ: معنى كأنّ',
          kind: 'mcq',
          prompt: '﴿وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ﴾ — لعلّ here carries the meaning of:',
          options: ['كأنّ (التشبيه)', 'التمني', 'الاستدراك', 'إنّ (التأكيد)'],
          correct: 0,
        },
        {
          title: 'لعلّ عطف على مفعول له',
          kind: 'mcq',
          prompt: '﴿وَأَنْزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ وَلَعَلَّهُمْ يَتَفَكَّرُونَ﴾ — the جملة لعلّهم is عطف on:',
          options: ['مفعول له (لتبين)', 'فاعل', 'مبتدأ', 'خبر'],
          correct: 0,
        },
        {
          title: 'ليت: مثال',
          kind: 'mcq',
          prompt: 'لَيْتَ الشَّبَابَ يَعُودُ يَوْمًا illustrates:',
          options: ['التمني', 'التوقع', 'الاستدراك', 'التشبيه'],
          correct: 0,
        },
        {
          title: 'ليت بيا',
          kind: 'mcq',
          prompt: '﴿يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ﴾ shows ليت preceded by:',
          options: ['يا', 'الواو', 'إنّ', 'أنّ'],
          correct: 0,
        },
        {
          title: 'الأخوات الستة بالمعنى الفعلي',
          kind: 'mcq',
          prompt: 'إنّ/أنّ match which فعل-meaning of the six?',
          options: ['أؤكد', 'أستدرك', 'أتمنى', 'أرجو'],
          correct: 0,
        },
        {
          title: 'كأنّ بالمعنى الفعلي',
          kind: 'mcq',
          prompt: 'كأنّ matches which فعل-meaning of the six?',
          options: ['أشبه', 'أؤكد', 'أرجو', 'أستدرك'],
          correct: 0,
        },
        {
          title: 'ليت بالمعنى الفعلي',
          kind: 'mcq',
          prompt: 'ليت matches which فعل-meaning of the six?',
          options: ['أتمنى', 'أؤكد', 'أستدرك', 'أشبه'],
          correct: 0,
        },
        {
          title: 'لعلّ بالمعنى الفعلي',
          kind: 'mcq',
          prompt: 'لعلّ matches which فعل-meaning of the six?',
          options: ['أرجو', 'أؤكد', 'أتمنى', 'أشبه'],
          correct: 0,
        },
        {
          title: 'تخفيف لعلّ',
          kind: 'mcq',
          prompt: 'The lightened (مخفف) form of لعلّ is:',
          options: ['عَلّ', 'إنْ', 'لعْ', 'عَنْ'],
          correct: 0,
        },
        {
          title: 'كم معنى للعلّ؟',
          kind: 'mcq',
          prompt: 'How many distinct senses of لعلّ were named (التوقع\'s two, plus two more)?',
          options: ['أربعة', 'اثنان', 'ثلاثة', 'خمسة'],
          correct: 0,
        },
        {
          title: 'أساس التسمية: مشبهة بالفعل',
          kind: 'mcq',
          prompt: 'الحروف المشبهة بالفعل resemble الفعل in two ways: carrying a verbal meaning, and:',
          options: ['governing like أفعال (نصب + رفع)', 'being conjugated for tense', 'taking a فاعل of their own', 'accepting تنوين'],
          correct: 0,
        },
        {
          title: 'ما زيد قويا',
          kind: 'mcq',
          prompt: 'مَا زَيْدٌ قَوِيًّا لَكِنَّهُ شُجَاعٌ — لكنّ here corrects the possible inference that زيد is:',
          options: ['not brave (شجاع)', 'not present', 'not known', 'not truthful'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the meaning of كأنّ, and its فعل-equivalent.',
          sentence: 'الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ',
          translation: 'The glass, as if it were a pearly [white] star.',
          cells: ['الزُّجَاجَةُ', 'كَأَنَّهَا', 'كَوْكَبٌ', 'دُرِّيٌّ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'التشبيه' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 1, role: 'أشبه' },
            ] },
          ],
          distractors: ['الاستدراك', 'أستدرك'],
        },
        {
          title: 'تركيب: ﴿وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the meaning of لكنّ, and its فعل-equivalent.',
          sentence: 'وَمَا كَفَرَ سُلَيْمَانُ وَلَٰكِنَّ الشَّيَاطِينَ كَفَرُوا',
          translation: 'Solomon did not disbelieve, but the devils disbelieved.',
          cells: ['كَفَرَ', 'سُلَيْمَانُ', 'وَلَٰكِنَّ', 'الشَّيَاطِينَ', 'كَفَرُوا'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'الاستدراك' },
            ] },
            { position: 'below', labels: [
              { start: 2, end: 2, role: 'أستدرك' },
            ] },
          ],
          distractors: ['التشبيه', 'أشبه'],
        },
        {
          title: 'تركيب: ﴿يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the meaning of ليت, and its فعل-equivalent.',
          sentence: 'يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ',
          translation: 'Oh, I wish I had not been given my record!',
          cells: ['يَا', 'لَيْتَنِي', 'لَمْ', 'أُوتَ', 'كِتَابِيَهْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'التمني' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 1, role: 'أتمنى' },
            ] },
          ],
          distractors: ['التوقع', 'أرجو'],
        },
        {
          title: 'تركيب: ﴿وَاتَّقُوا لَعَلَّكُمْ تُرْحَمُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Which sense of لعلّ does this illustrate؟',
          sentence: 'وَاتَّقُوا لَعَلَّكُمْ تُرْحَمُونَ',
          translation: 'And fear Allah that you may receive mercy.',
          cells: ['اتَّقُوا', 'لَعَلَّكُمْ', 'تُرْحَمُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'الترجي' },
            ] },
          ],
          distractors: ['الإشفاق', 'التعليل'],
        },
        {
          title: 'تركيب: ﴿فَلَعَلَّكَ بَاخِعٌ نَفْسَكَ عَلَىٰ آثَارِهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Which sense of لعلّ does this illustrate؟',
          sentence: 'فَلَعَلَّكَ بَاخِعٌ نَفْسَكَ عَلَىٰ آثَارِهِمْ',
          translation: 'Perhaps you would kill yourself with grief over them.',
          cells: ['لَعَلَّكَ', 'بَاخِعٌ', 'نَفْسَكَ', 'عَلَىٰ', 'آثَارِهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'الإشفاق' },
            ] },
          ],
          distractors: ['الترجي', 'التعليل'],
        },
        {
          title: 'تركيب: ﴿وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Which sense of لعلّ does this illustrate؟',
          sentence: 'وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُونَ',
          translation: 'And do good that you may succeed.',
          cells: ['افْعَلُوا', 'الْخَيْرَ', 'لَعَلَّكُمْ', 'تُفْلِحُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'التعليل' },
            ] },
          ],
          distractors: ['الترجي', 'الإشفاق'],
        },
        {
          title: 'تركيب: ﴿وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'What meaning does لعلّكم carry here?',
          sentence: 'وَتَتَّخِذُونَ مَصَانِعَ لَعَلَّكُمْ تَخْلُدُونَ',
          translation: 'And you take for yourselves strongholds that you might abide forever.',
          cells: ['تَتَّخِذُونَ', 'مَصَانِعَ', 'لَعَلَّكُمْ', 'تَخْلُدُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'معنى كأنّ' },
            ] },
          ],
          distractors: ['الترجي', 'الإشفاق'],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'التخفيف وما الكافة',
      subtitle: 'Lightening the Load — إنْ, أنْ, and كأنْ once lightened, and ما الكافة',
      concepts: [
        {
          heading: 'تخفيف إنّ إلى إنْ',
          lines: [
            { html: `When إنّ is lightened to <bdi>إِنْ</bdi>, its operation is predominantly <b>suspended</b> (<bdi>الْإِهْمَال هُوَ الْغَالِب</bdi>), though operation remains permitted, as in one reading of ﴿وَإِنْ كُلًّا لَمَّا لَيُوَفِّيَنَّهُمْ رَبُّكَ أَعْمَالَهُمْ﴾.`, list: false },
            { html: `A <bdi>لَامٌ فَارِقَة</bdi> is frequent in the خبر after a non-operating lightened إنْ, distinguishing it from <bdi>إِنِ النَّافِيَة</bdi>, as in ﴿وَإِنْ نَظُنُّكَ لَمِنَ الْكَاذِبِينَ﴾.`, list: false },
            { html: `Lightened إنْ can enter a <bdi>الْجُمْلَةُ الِاسْمِيَّة</bdi> whether unmodified (﴿وَإِنْ كُلٌّ لَمَّا جَمِيعٌ لَدَيْنَا مُحْضَرُونَ﴾) or already governed by a <bdi>نَاسِخ</bdi> (as in the same ﴿وإن نظنك﴾ example).`, list: false },
          ],
          exercise: {
            prompt: `When إنّ is lightened to إنْ, what happens to its operation؟`,
            kind: 'mcq',
            options: ['It is predominantly suspended, though operation remains permitted', 'It always keeps operating exactly as before', 'It is permanently and completely disabled, with no exception', 'It converts into a حرف جر instead'],
            correct: 0,
          },
        },
        {
          heading: 'تخفيف أنّ إلى أنْ',
          lines: [
            { html: `When أنّ is lightened to <bdi>أَنْ</bdi>, it still <b>operates</b> after lightening — its اسم is an omitted <bdi>ضَمِيرُ الشَّأْن</bdi>.`, list: false },
            { html: `Its خبر is a جملة, either <bdi>اسْمِيَّة</bdi> or <bdi>فِعْلِيَّة</bdi>, with rules governing whether a separator (<bdi>الْفَصْل</bdi>) comes between أنْ and that خبر depending on the type of فعل involved.`, list: false },
          ],
          exercise: {
            prompt: `When أنّ is lightened to أنْ, does it still operate? What is its اسم؟`,
            kind: 'mcq',
            options: ['Yes, it operates; its اسم is an omitted ضمير الشأن', 'No, its operation is fully suspended like إنْ', 'Yes, but its اسم becomes an explicit ضمير متصل', 'It stops being a حرف مصدر altogether'],
            correct: 0,
          },
        },
        {
          heading: 'الفصل بين أنْ المخففة وخبرها',
          lines: [
            { html: `No separator comes between lightened أنْ and its خبر in three cases:`, list: false },
            { table: { headers: ['Case', 'Example'], rows: [
              ['جُمْلَة اسْمِيَّة', '﴿وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ﴾'],
              ['جُمْلَة فِعْلِيَّة with a فِعْل جَامِد', '﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ﴾'],
              ['جملة فعلية with a فِعْل مُتَصَرِّف of دُعَاء', '﴿وَالْخَامِسَةَ أَنْ غَضِبَ اللَّهُ عَلَيْهَا﴾ (Nāfiʿ\'s reading)'],
            ] } },
            { html: `Otherwise, before a (non-دعاء) خبر فعلي, a separator does appear: <bdi>قَدْ</bdi>, a <bdi>حَرْفُ تَنْفِيس</bdi>, <bdi>لَوْ</bdi>, or a نفي حرف such as <bdi>لَمْ، لَا، لَنْ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `When does NO separator come between lightened أنْ and its خبر؟`,
            kind: 'mcq',
            options: ['With a جملة اسمية, a فعل جامد, or a فعل متصرف of دعاء', 'Only ever with a جملة اسمية', 'Only when the فعل is مضارع', 'A separator is always required, with no exception'],
            correct: 0,
          },
        },
        {
          heading: 'تخفيف كأنّ، وما الكافة',
          lines: [
            { html: `When كأنّ is lightened to <bdi>كَأَنْ</bdi>, it still operates; its اسم is likewise an omitted ضمير الشأن, and it is usually separated from a following فعل by <bdi>لَمْ</bdi> or <bdi>قَدْ</bdi>, as in ﴿كَأَنْ لَمْ يَلْبَثُوا إِلَّا سَاعَةً﴾.`, list: false },
            { html: `Separately, <bdi>مَا الْكَافَّة</bdi> has two effects on الحروف المشبهة بالفعل:`, list: false },
            { html: `it stops their operation, as in ﴿إِنَّمَا إِلَٰهُكُمُ اللَّهُ﴾`, list: true, bullet: true },
            { html: `it licenses them to enter upon أفعال, as in ﴿إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ﴾`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `What two effects does ما الكافة have on الحروف المشبهة بالفعل؟`,
            kind: 'mcq',
            options: ['It stops their operation, and licenses them to enter upon أفعال', 'It doubles their operation and forces two أسماء at once', 'It converts them permanently into حروف جر', 'It has no grammatical effect at all'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'When إنّ is lightened to إنْ, its operation is:',
          options: ['predominantly suspended, though still permitted', 'always fully maintained', 'converted into a فعل', 'permanently forbidden with no exception'],
          correct: 0,
        },
        {
          q: 'What is اللام الفارقة for?',
          options: ['Distinguishing non-operating lightened إنْ from إن النافية', 'Marking the فاعل of a lightened حرف', 'Introducing a جملة شرطية', 'Negating a فعل ماضٍ'],
          correct: 0,
        },
        {
          q: 'The اسم of lightened أنْ is:',
          options: ['an omitted ضمير الشأن', 'always an اسم ظاهر', 'always a ضمير متصل', 'never present at all'],
          correct: 0,
        },
        {
          q: '﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ﴾ — no separator appears here between أنْ and its خبر because the فعل (ليس) is:',
          options: ['جامد', 'متصرف', 'أمر', 'مضارع مرفوع'],
          correct: 0,
        },
        {
          q: 'What usually separates lightened كأنْ from a following فعل?',
          options: ['لم or قد', 'إلا or غير', 'لن or لم يكن', 'هل or أم'],
          correct: 0,
        },
        {
          q: '﴿إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ﴾ illustrates which effect of ما الكافة?',
          options: ['Licensing إنّ to enter upon a فعل', 'Stopping إنّ from operating', 'Turning إنّ into a حرف جر', 'Negating the whole جملة'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'الإهمال هو الغالب',
          kind: 'mcq',
          prompt: 'For lightened إنْ, which is the more common state?',
          options: ['الإهمال (suspension)', 'الإعمال (operation)', 'both equally common', 'neither — إنْ cannot occur at all'],
          correct: 0,
        },
        {
          title: 'مثال إعمال إنْ',
          kind: 'mcq',
          prompt: '﴿وَإِنْ كُلًّا لَمَّا لَيُوَفِّيَنَّهُمْ رَبُّكَ أَعْمَالَهُمْ﴾ (in one reading) shows lightened إنْ:',
          options: ['still operating (الإعمال)', 'fully suspended with no exception', 'converted to a فعل', 'acting as حرف عطف'],
          correct: 0,
        },
        {
          title: 'موضع اللام الفارقة',
          kind: 'mcq',
          prompt: 'اللام الفارقة is frequent in the:',
          options: ['خبر after non-operating lightened إنْ', 'اسم of إنّ المشددة', 'صلة الموصول', 'مضاف إليه'],
          correct: 0,
        },
        {
          title: 'مثال اللام الفارقة',
          kind: 'mcq',
          prompt: '﴿وَإِنْ نَظُنُّكَ لَمِنَ الْكَاذِبِينَ﴾ illustrates:',
          options: ['اللام الفارقة after lightened إنْ', 'اللام المعلقة', 'لام الأمر', 'لام القسم'],
          correct: 0,
        },
        {
          title: 'إنْ على جملة منسوخة',
          kind: 'mcq',
          prompt: 'Lightened إنْ can enter a جملة اسمية that is already governed by a:',
          options: ['ناسخ', 'حرف جر', 'اسم فاعل', 'مصدر مؤول'],
          correct: 0,
        },
        {
          title: 'أنْ تعمل بعد التخفيف',
          kind: 'mcq',
          prompt: 'After lightening, does أنْ still operate?',
          options: ['Yes, it still operates', 'No, its operation is fully suspended', 'Only in poetry', 'Only when preceded by لا'],
          correct: 0,
        },
        {
          title: 'خبر أنْ المخففة',
          kind: 'mcq',
          prompt: "The خبر of lightened أنْ is:",
          options: ['a جملة, اسمية or فعلية', 'always a مفرد اسم', 'always محذوف', 'a ظرف only'],
          correct: 0,
        },
        {
          title: 'بلا فصل: جملة اسمية',
          kind: 'mcq',
          prompt: '﴿وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ﴾ shows lightened أنْ with:',
          options: ['no separator, because the خبر is جملة اسمية', 'the separator قد', 'the separator لو', 'the separator لم'],
          correct: 0,
        },
        {
          title: 'بلا فصل: فعل جامد',
          kind: 'mcq',
          prompt: '﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ﴾ shows lightened أنْ with:',
          options: ['no separator, because the فعل (ليس) is جامد', 'the separator قد', 'the separator لو', 'a حرف تنفيس'],
          correct: 0,
        },
        {
          title: 'بلا فصل: فعل دعاء متصرف',
          kind: 'mcq',
          prompt: '﴿وَالْخَامِسَةَ أَنْ غَضِبَ اللَّهُ عَلَيْهَا﴾ (Nāfiʿ\'s reading) shows lightened أنْ with:',
          options: ['no separator, because غضب here is فعل متصرف of دعاء', 'the separator لو', 'the separator قد', 'a نفي حرف'],
          correct: 0,
        },
        {
          title: 'فصل بقد',
          kind: 'mcq',
          prompt: '﴿وَنَعْلَمَ أَنْ قَدْ صَدَقْتَنَا﴾ shows lightened أنْ separated from its خبر by:',
          options: ['قد', 'لو', 'لم', 'حرف تنفيس'],
          correct: 0,
        },
        {
          title: 'فصل بحرف تنفيس',
          kind: 'mcq',
          prompt: '﴿عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَىٰ﴾ shows lightened أنْ separated from its خبر by:',
          options: ['a حرف تنفيس (سيكون)', 'قد', 'لو', 'لم'],
          correct: 0,
        },
        {
          title: 'فصل بلو',
          kind: 'mcq',
          prompt: '﴿أَنْ لَوْ نَشَاءُ أَصَبْنَاهُمْ بِذُنُوبِهِمْ﴾ shows lightened أنْ separated by:',
          options: ['لو', 'قد', 'لم', 'حرف تنفيس'],
          correct: 0,
        },
        {
          title: 'فصل بحروف النفي',
          kind: 'mcq',
          prompt: '﴿أَيَحْسَبُ أَنْ لَمْ يَرَهُ أَحَدٌ﴾ shows lightened أنْ separated from its خبر by a:',
          options: ['نفي حرف (لم)', 'حرف تنفيس', 'لو', 'قد'],
          correct: 0,
        },
        {
          title: 'اسم كأنْ المخففة',
          kind: 'mcq',
          prompt: "Once lightened, كأنْ's اسم is:",
          options: ['an omitted ضمير الشأن', 'an اسم ظاهر مرفوع', 'a ضمير متصل بالفعل', 'never present'],
          correct: 0,
        },
        {
          title: 'كأنْ ولم/قد',
          kind: 'mcq',
          prompt: '﴿كَأَنْ لَمْ يَلْبَثُوا إِلَّا سَاعَةً﴾ shows lightened كأنْ separated from the following فعل by:',
          options: ['لم', 'قد فقط', 'لو', 'حرف تنفيس'],
          correct: 0,
        },
        {
          title: 'ما الكافة توقف العمل',
          kind: 'mcq',
          prompt: '﴿إِنَّمَا إِلَٰهُكُمُ اللَّهُ﴾ illustrates ما الكافة:',
          options: ['stopping إنّ from operating', 'licensing إنّ onto a فعل', 'turning إنّ into a اسم', 'negating التوكيد entirely'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿وَإِنْ كُلًّا لَمَّا لَيُوَفِّيَنَّهُمْ رَبُّكَ أَعْمَالَهُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'On this reading, lightened إنْ still operates. Classify it.',
          sentence: 'وَإِنْ كُلًّا لَمَّا لَيُوَفِّيَنَّهُمْ رَبُّكَ أَعْمَالَهُمْ',
          translation: 'And each — your Lord will fully repay them their deeds.',
          cells: ['إِنْ', 'كُلًّا', 'لَمَّا', 'لَيُوَفِّيَنَّهُمْ', 'رَبُّكَ', 'أَعْمَالَهُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الإعمال جائز' },
            ] },
          ],
          distractors: ['الإهمال واجب', 'ممتنعة كليا'],
        },
        {
          title: 'تركيب: ﴿وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify أَنِ; then classify the فصل between it and its خبر.',
          sentence: 'وَآخِرُ دَعْوَاهُمْ أَنِ الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
          translation: 'And the last of their call will be, "Praise to Allah, Lord of the worlds."',
          cells: ['آخِرُ', 'دَعْوَاهُمْ', 'أَنِ', 'الْحَمْدُ', 'لِلَّهِ', 'رَبِّ', 'الْعَالَمِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'تعمل بعد التخفيف' },
            ] },
            { position: 'below', labels: [
              { start: 3, end: 6, role: 'بلا فصل (جملة اسمية)' },
            ] },
          ],
          distractors: ['الإهمال غالب', 'بفصل (قد)'],
        },
        {
          title: 'تركيب: ﴿وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify the فصل between أَنْ and its خبر here.',
          sentence: 'وَأَنْ لَيْسَ لِلْإِنْسَانِ إِلَّا مَا سَعَىٰ',
          translation: 'And that there is not for man except that [good] for which he strives.',
          cells: ['أَنْ', 'لَيْسَ', 'لِلْإِنْسَانِ', 'إِلَّا', 'مَا', 'سَعَىٰ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 5, role: 'بلا فصل (فعل جامد)' },
            ] },
          ],
          distractors: ['بلا فصل (جملة اسمية)', 'بفصل (قد)'],
        },
        {
          title: 'تركيب: ﴿وَنَعْلَمَ أَنْ قَدْ صَدَقْتَنَا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify the فصل between أَنْ and its خبر here.',
          sentence: 'وَنَعْلَمَ أَنْ قَدْ صَدَقْتَنَا',
          translation: 'And [that] we know that you have been truthful with us.',
          cells: ['نَعْلَمَ', 'أَنْ', 'قَدْ', 'صَدَقْتَنَا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 3, role: 'بفصل (قد)' },
            ] },
          ],
          distractors: ['بلا فصل (جملة اسمية)', 'بلا فصل (فعل جامد)'],
        },
        {
          title: 'تركيب: ﴿كَأَنْ لَمْ يَلْبَثُوا إِلَّا سَاعَةً﴾',
          kind: 'tarkeeb',
          instruction: 'Classify كأنْ; then identify what separates it from the following فعل.',
          sentence: 'كَأَنْ لَمْ يَلْبَثُوا إِلَّا سَاعَةً',
          translation: 'As if they had not remained except an hour.',
          cells: ['كَأَنْ', 'لَمْ', 'يَلْبَثُوا', 'إِلَّا', 'سَاعَةً'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعمل بعد التخفيف' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 1, role: 'الفاصل: لم' },
            ] },
          ],
          distractors: ['الإهمال غالب', 'الفاصل: قد'],
        },
        {
          title: 'تركيب: ﴿إِنَّمَا إِلَٰهُكُمُ اللَّهُ﴾',
          kind: 'tarkeeb',
          instruction: 'Which effect of ما الكافة does this show؟',
          sentence: 'إِنَّمَا إِلَٰهُكُمُ اللَّهُ',
          translation: 'Your god is only Allah.',
          cells: ['إِنَّمَا', 'إِلَٰهُكُمُ', 'اللَّهُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'توقف العمل' },
            ] },
          ],
          distractors: ['تبيح الدخول على فعل'],
        },
        {
          title: 'تركيب: ﴿إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Which effect of ما الكافة does this show؟',
          sentence: 'إِنَّمَا يَتَقَبَّلُ اللَّهُ مِنَ الْمُتَّقِينَ',
          translation: 'Allah only accepts from the righteous.',
          cells: ['إِنَّمَا', 'يَتَقَبَّلُ', 'اللَّهُ', 'مِنَ', 'الْمُتَّقِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'تبيح الدخول على فعل' },
            ] },
          ],
          distractors: ['توقف العمل'],
        },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'لا لنفي الجنس والمشبهات بليس',
      subtitle: "Two More نواسخ Families — لا التبرئة, and the three حروف مشبهة بليس",
      concepts: [
        {
          heading: 'لا لنفي الجنس',
          lines: [
            { html: `<bdi>لَا لِنَفْيِ الْجِنْس</bdi> — also called <bdi>لَا التَّبْرِئَة</bdi> — negates the <b>entire genus</b> of its اسم, as in لَا فَاعِلَ شَرٍّ فَائِزٌ.`, list: false },
            { html: `It does NOT operate, however, when it falls between a <bdi>جَرّ حَرْف</bdi> and its مجرور, as in اللَّهُمَّ أَدْخِلْنَا الْجَنَّةَ بِلَا حِسَابٍ.`, list: false },
          ],
          exercise: {
            prompt: `What does لا لنفي الجنس do, and what is its other name؟`,
            kind: 'mcq',
            options: ['It negates the entire genus of its اسم; also called لا التبرئة', 'It negates only a single unit of its اسم; also called لا العاطفة', 'It affirms the genus of its اسم; also called لا الزائدة', 'It has no meaning of its own at all'],
            correct: 0,
          },
        },
        {
          heading: 'شروط عمل لا، وحكم تكرارها',
          lines: [
            { html: `لا لنفي الجنس operates on two conditions:`, list: false },
            { html: `the نفي must be of the genus — if it negates a single unit (الْوَحْدَة) instead, it operates like ليس, as in لَا رَجُلٌ قَائِمًا بَلْ رَجُلَانِ`, list: true, bullet: true },
            { html: `its اسم must be directly attached to it — otherwise it is مُهْمَلَة and must be repeated, as in ﴿لَا فِيهَا غَوْلٌ وَلَا هُمْ عَنْهَا يُنْزَفُونَ﴾`, list: true, bullet: true },
            { html: `When لا is repeated without separation, both <b>عمل</b> (﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾) and <b>إهمال</b> (﴿فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ﴾) are possible.`, list: false },
          ],
          exercise: {
            prompt: `What are the two conditions for لا لنفي الجنس to operate؟`,
            kind: 'mcq',
            options: ['The نفي must be of the genus, and its اسم must be directly attached to it', 'It must always be repeated twice, and its اسم must be نكرة', 'It must be preceded by a واو, and its خبر must be محذوف', 'It must occur only in poetry, and its اسم must be معرفة'],
            correct: 0,
          },
        },
        {
          heading: 'الخمسة نواسخ',
          lines: [
            { html: `Five families of عوامل enter upon مبتدأ وخبر — the <bdi>نَوَاسِخ</bdi>:`, list: false },
            { html: `<bdi>أَفْعَالُ الْقُلُوب</bdi>`, list: true, bullet: true },
            { html: `<bdi>الْأَفْعَالُ النَّاقِصَة</bdi>`, list: true, bullet: true },
            { html: `<bdi>الْحُرُوفُ الْمُشَبَّهَةُ بِالْفِعْل</bdi>`, list: true, bullet: true },
            { html: `<bdi>لَا لِنَفْيِ الْجِنْس</bdi>`, list: true, bullet: true },
            { html: `<bdi>الْحُرُوفُ الْمُشَبَّهَةُ بِلَيْس</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `List the five نواسخ — عوامل entering upon مبتدأ وخبر.`,
            kind: 'mcq',
            options: ['أفعال القلوب، الأفعال الناقصة، الحروف المشبهة بالفعل، لا لنفي الجنس، الحروف المشبهة بليس', 'حروف الجر، إلا، الحروف المشبهة بالفعل، الحروف المشبهة بليس، حروف العطف', 'كان، أصبح، ظل، بات، صار', 'إنّ، أنّ، كأنّ، لكنّ، لعلّ'],
            correct: 0,
          },
        },
        {
          heading: 'الحروف المشبهة بليس',
          lines: [
            { html: `<bdi>الْحُرُوفُ الْمُشَبَّهَةُ بِلَيْس</bdi> put the first اسم in <b>رفع</b> (their اسم) and the second in <b>نصب</b> (their خبر) — resembling ليس both in <bdi>النَّفْي</bdi> and in entering upon the مبتدأ وخبر.`, list: false },
            { html: `There are three: <bdi>مَا، لَا، لَاتَ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `What do الحروف المشبهة بليس do, and in what do they resemble ليس؟`,
            kind: 'mcq',
            options: ['They put the first اسم in رفع and the second in نصب; they resemble ليس in النفي and entering upon مبتدأ وخبر', 'They put the first اسم in نصب and the second in رفع; they resemble كان in التحول', 'They put both أسماء in جر; they resemble حروف الجر', 'They govern nothing at all; they merely resemble ليس in spelling'],
            correct: 0,
          },
        },
        {
          heading: 'ما الحجازية، ولا ولات المشبهتان بليس',
          lines: [
            { html: `<bdi>مَا الْحِجَازِيَّة</bdi> operates on three conditions:`, list: false },
            { html: `the اسم precedes the خبر — not مَا مُسِيءٌ مَنْ أَعْتَبَ`, list: true, bullet: true },
            { html: `it is not joined with the redundant إِنْ — not مَا إِنْ أَنْتُمْ قَائِمُونَ`, list: true, bullet: true },
            { html: `its خبر is not accompanied by إِلَّا — not ﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ﴾`, list: true, bullet: true },
            { html: `It is called حجازية because the people of الحجاز operate it (given these conditions), while <bdi>بَنُو تَمِيم</bdi> never operate it at all.`, list: false },
            { html: `<bdi>لَا الْمُشَبَّهَةُ بِلَيْس</bdi> predominantly operates only in poetry, as in تَعَزَّ فَلَا شَيْءٌ عَلَى الْأَرْضِ بَاقِيًا.`, list: false },
            { html: `<bdi>لَاتَ</bdi> is restricted to the word <bdi>حِين</bdi>, with its اسم usually omitted (تقدير: الحين), as in ﴿وَلَاتَ حِينَ مَنَاصٍ﴾.`, list: false },
          ],
          exercise: {
            prompt: `Why is ما الحجازية called by that name؟`,
            kind: 'mcq',
            options: ['Because the people of الحجاز operate it, while بنو تميم never operate it at all', 'Because it was first used by a poet from الحجاز', 'Because it only appears in Meccan verses of the Qurʾān', 'There is no real reason — the name is arbitrary'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'لا لنفي الجنس does NOT operate when it falls:',
          options: ['between a جر حرف and its مجرور', 'at the very start of a جملة', 'before a فعل ماضٍ', 'after واو العطف'],
          correct: 0,
        },
        {
          q: 'If لا negates a single unit (الوحدة) rather than the whole genus, it operates like:',
          options: ['ليس', 'كان', 'إنّ', 'ما النافية'],
          correct: 0,
        },
        {
          q: 'How many نواسخ families are there in total?',
          options: ['خمسة', 'أربعة', 'ثلاثة', 'ستة'],
          correct: 0,
        },
        {
          q: 'List the three الحروف المشبهة بليس.',
          options: ['ما، لا، لات', 'ما، لا، ليس', 'لا، لات، لعل', 'ما، ليت، لات'],
          correct: 0,
        },
        {
          q: '﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ﴾ shows ما الحجازية NOT operating because:',
          options: ['its خبر is accompanied by إلا', 'the اسم follows the خبر', 'it is joined with الواو', 'محمد is a اسم علم'],
          correct: 0,
        },
        {
          q: 'لات is restricted to the word:',
          options: ['حين', 'يوم', 'ساعة', 'وقت'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'لا التبرئة',
          kind: 'mcq',
          prompt: 'لا لنفي الجنس is also known as:',
          options: ['لا التبرئة', 'لا العاطفة', 'لا الناهية', 'لا الزائدة'],
          correct: 0,
        },
        {
          title: 'لا فاعل شر فائز',
          kind: 'mcq',
          prompt: 'لَا فَاعِلَ شَرٍّ فَائِزٌ illustrates:',
          options: ['لا لنفي الجنس, negating the whole genus', 'لا العاطفة', 'لا الناهية على الفعل', 'لا النافية للوحدة فقط'],
          correct: 0,
        },
        {
          title: 'لا بين الجار والمجرور',
          kind: 'mcq',
          prompt: 'اللَّهُمَّ أَدْخِلْنَا الْجَنَّةَ بِلَا حِسَابٍ shows لا لنفي الجنس:',
          options: ['not operating, since it falls between a جر حرف and its مجرور', 'operating normally on حساب', 'acting as لا الناهية', 'acting as حرف عطف'],
          correct: 0,
        },
        {
          title: 'نفي الوحدة',
          kind: 'mcq',
          prompt: 'لَا رَجُلٌ قَائِمًا بَلْ رَجُلَانِ — لا here negates:',
          options: ['a single unit (الوحدة), so it operates like ليس', 'the whole genus, so it operates like لنفي الجنس', 'nothing at all — it is زائدة', 'the فعل قائما directly'],
          correct: 0,
        },
        {
          title: 'مباشرة الاسم',
          kind: 'mcq',
          prompt: 'For لا لنفي الجنس to operate, its اسم must be:',
          options: ['directly attached to it (مباشر)', 'separated by at least one word', 'a ضمير متصل only', 'always نكرة موصوفة'],
          correct: 0,
        },
        {
          title: 'لا مكررة: الإعمال',
          kind: 'mcq',
          prompt: '﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾ shows repeated لا with:',
          options: ['الإعمال (all three منصوبة)', 'الإهمال', 'حذف الاسم كليا', 'تحويلها إلى إنّ'],
          correct: 0,
        },
        {
          title: 'لا مكررة: الإهمال',
          kind: 'mcq',
          prompt: '﴿فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ﴾ shows repeated لا with:',
          options: ['الإهمال (لا تعمل)', 'الإعمال', 'حذف الخبر كليا', 'تحويلها إلى ليس'],
          correct: 0,
        },
        {
          title: 'أفعال القلوب من النواسخ',
          kind: 'mcq',
          prompt: 'Which of these is one of the five نواسخ؟',
          options: ['أفعال القلوب', 'أفعال الشروع', 'أفعال المقاربة', 'أفعال المدح والذم'],
          correct: 0,
        },
        {
          title: 'عمل المشبهة بليس',
          kind: 'mcq',
          prompt: 'الحروف المشبهة بليس put the first اسم in رفع and the second in:',
          options: ['نصب', 'رفع أيضا', 'جر', 'لا خبر لها'],
          correct: 0,
        },
        {
          title: 'الثلاثة المشبهة بليس',
          kind: 'mcq',
          prompt: 'List the three الحروف المشبهة بليس.',
          options: ['ما، لا، لات', 'ما، إن، لات', 'لا، لكن، لات', 'ما، لا، ليس'],
          correct: 0,
        },
        {
          title: 'شرط ما الحجازية: تقدم الاسم',
          kind: 'mcq',
          prompt: 'مَا مُسِيءٌ مَنْ أَعْتَبَ is invalid for ما الحجازية because:',
          options: ['the اسم does not precede the خبر', 'إن الزائدة is joined to it', 'the خبر is joined with إلا', 'مسيء is معرفة'],
          correct: 0,
        },
        {
          title: 'شرط ما الحجازية: بلا إن',
          kind: 'mcq',
          prompt: 'مَا إِنْ أَنْتُمْ قَائِمُونَ is invalid for ما الحجازية because:',
          options: ['it is joined with the redundant إن', 'the اسم follows the خبر', 'its خبر is joined with إلا', 'أنتم is a ضمير منفصل'],
          correct: 0,
        },
        {
          title: 'شرط ما الحجازية: بلا إلا',
          kind: 'mcq',
          prompt: '﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ﴾ shows ما الحجازية not operating because its خبر:',
          options: ['is accompanied by إلا', 'precedes its اسم', 'is a شبه جملة', 'is a جملة فعلية'],
          correct: 0,
        },
        {
          title: 'بنو تميم وما',
          kind: 'mcq',
          prompt: 'Which tribe never operates ما الحجازية at all?',
          options: ['بنو تميم', 'أهل الحجاز', 'قريش', 'هذيل'],
          correct: 0,
        },
        {
          title: 'لا المشبهة بليس',
          kind: 'mcq',
          prompt: 'لا المشبهة بليس predominantly operates in:',
          options: ['الشعر (poetry)', 'القرآن فقط', 'النثر اليومي', 'الخطابة الرسمية'],
          correct: 0,
        },
        {
          title: 'لات وحين',
          kind: 'mcq',
          prompt: 'لات is restricted to which word?',
          options: ['حين', 'يوم', 'وقت', 'ساعة'],
          correct: 0,
        },
        {
          title: 'اسم لات',
          kind: 'mcq',
          prompt: '﴿وَلَاتَ حِينَ مَنَاصٍ﴾ — the اسم of لات here is usually:',
          options: ['محذوف, تقديره الحين', 'مذكور، وهو حين', 'مذكور، وهو مناص', 'لا اسم لها أصلا'],
          correct: 0,
        },
        {
          title: 'تركيب: لَا فَاعِلَ شَرٍّ فَائِزٌ',
          kind: 'tarkeeb',
          instruction: 'Does لا لنفي الجنس operate here or not?',
          sentence: 'لَا فَاعِلَ شَرٍّ فَائِزٌ',
          translation: 'No doer of evil is successful.',
          cells: ['لَا', 'فَاعِلَ', 'شَرٍّ', 'فَائِزٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'تعمل (نفي جنس، اسم مباشر)' },
            ] },
          ],
          distractors: ['لا تعمل (بين جار ومجرور)', 'لا تعمل (نفي وحدة، كليس)'],
        },
        {
          title: 'تركيب: اللَّهُمَّ أَدْخِلْنَا الْجَنَّةَ بِلَا حِسَابٍ',
          kind: 'tarkeeb',
          instruction: 'Does لا لنفي الجنس operate here or not?',
          sentence: 'اللَّهُمَّ أَدْخِلْنَا الْجَنَّةَ بِلَا حِسَابٍ',
          translation: 'O Allah, admit us to Paradise without reckoning.',
          cells: ['أَدْخِلْنَا', 'الْجَنَّةَ', 'بِلَا', 'حِسَابٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'لا تعمل (بين جار ومجرور)' },
            ] },
          ],
          distractors: ['تعمل (نفي جنس، اسم مباشر)', 'لا تعمل (نفي وحدة، كليس)'],
        },
        {
          title: 'تركيب: لَا رَجُلٌ قَائِمًا بَلْ رَجُلَانِ',
          kind: 'tarkeeb',
          instruction: 'Does لا لنفي الجنس operate here or not?',
          sentence: 'لَا رَجُلٌ قَائِمًا بَلْ رَجُلَانِ',
          translation: 'Not one man is standing, rather two men.',
          cells: ['لَا', 'رَجُلٌ', 'قَائِمًا', 'بَلْ', 'رَجُلَانِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'لا تعمل (نفي وحدة، كليس)' },
            ] },
          ],
          distractors: ['تعمل (نفي جنس، اسم مباشر)', 'لا تعمل (بين جار ومجرور)'],
        },
        {
          title: 'تركيب: مَا مُسِيءٌ مَنْ أَعْتَبَ',
          kind: 'tarkeeb',
          instruction: "Does this satisfy ما الحجازية's conditions, or violate them?",
          sentence: 'مَا مُسِيءٌ مَنْ أَعْتَبَ',
          translation: 'Whoever apologizes is not a wrongdoer.',
          cells: ['مَا', 'مُسِيءٌ', 'مَنْ', 'أَعْتَبَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 3, role: 'مخالف (تأخر الاسم)' },
            ] },
          ],
          distractors: ['مخالف (اقتران بإن)', 'مخالف (خبر بإلا)'],
        },
        {
          title: 'تركيب: مَا إِنْ أَنْتُمْ قَائِمُونَ',
          kind: 'tarkeeb',
          instruction: "Does this satisfy ما الحجازية's conditions, or violate them?",
          sentence: 'مَا إِنْ أَنْتُمْ قَائِمُونَ',
          translation: 'You are not standing.',
          cells: ['مَا', 'إِنْ', 'أَنْتُمْ', 'قَائِمُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 3, role: 'مخالف (اقتران بإن)' },
            ] },
          ],
          distractors: ['مخالف (تأخر الاسم)', 'مخالف (خبر بإلا)'],
        },
        {
          title: 'تركيب: ﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ﴾',
          kind: 'tarkeeb',
          instruction: "Does this satisfy ما الحجازية's conditions, or violate them؟",
          sentence: 'وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ',
          translation: 'Muhammad is not but a messenger.',
          cells: ['مُحَمَّدٌ', 'إِلَّا', 'رَسُولٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'مخالف (خبر بإلا)' },
            ] },
          ],
          distractors: ['مخالف (تأخر الاسم)', 'مخالف (اقتران بإن)'],
        },
      ],
    },
  ],
};

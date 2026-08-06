// Module 03 — الفعل السماعي (The Heard Verb)
//
// Content is adapted from a bilingual Anki deck
// (النَحْوُ__2 الْعَامِلِ وَغَيْرِ الْعَامِلِ__1 الْفِعْلِ__2 السماعي.apkg,
// 68 notes across 4 sub-decks) prepared for this conversion. Definitions and
// examples are kept faithful to the source notes. Concept bodies are short
// by design (a sentence or two, not teaching prose); quiz/bank question text
// is English with Arabic grammatical terms left in Arabic.
//
// The source deck covers السماعي — the other branch of عامل الفعل from
// Module 02's القياسي, whose government follows no consistent rule and
// depends purely on السماع. Its three أقسام are الأفعال الناقصة (split here
// into two lessons: كان ومعانيها, then its twelve أخوات), أفعال الرجاء
// والمقاربة والشروع, أفعال المدح والذم, and صيغ التعجب.

export default {
  id: '03',
  title: 'الفعل السماعي',
  heading: 'العامل وغير العامل',
  subheading: 'الفعل',
  blurb: 'The سماعي فعل: كان وأخواتها, the verbs of hope, praise, blame, and exclamation.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'كان ومعانيها',
      subtitle: 'Kāna and Its Meanings — the ناقص فعل, كان\'s six senses, and حذف النون / حذف كان واسمها',
      concepts: [
        {
          heading: 'السماعي، والفعل الناقص',
          lines: [
            { html: `<bdi>عَامِلُ الْفِعْل</bdi> السَّمَاعِيّ is the branch that follows no consistent rule (<bdi>لَا قَاعِدَة</bdi>) and depends purely on <bdi>السَّمَاع</bdi> — what has been transmitted. It has three <bdi>أَقْسَام</bdi>:`, list: false },
            { html: `<bdi>الْأَفْعَالُ النَّاقِصَة</bdi>`, list: true, bullet: true },
            { html: `<bdi>أَفْعَالُ الْمَدْحِ وَالذَّمّ</bdi>`, list: true, bullet: true },
            { html: `<bdi>صِيَغُ التَّعَجُّب</bdi>`, list: true, bullet: true },
            { html: `This lesson opens the first: الأفعال الناقصة enter upon a <bdi>مُبْتَدَأ</bdi> and <bdi>خَبَر</bdi>, making the first <bdi>مَرْفُوع</bdi> (called <bdi>اِسْمُهَا</bdi>) and the second <bdi>مَنْصُوب</bdi> (called <bdi>خَبَرُهَا</bdi>).`, list: false },
            { html: `A فعل is called <bdi>نَاقِص</bdi> because its meaning stays incomplete without that خبر — unlike a <bdi>فِعْلٌ تَامّ</bdi>, whose فاعل alone is enough to complete the meaning.`, list: false },
          ],
          exercise: {
            prompt: `Which of these is NOT one of the three أقسام of السماعي?`,
            kind: 'mcq',
            options: ['الأفعال الناقصة', 'أفعال المدح والذم', 'صيغ التعجب', 'أفعال القلوب'],
            correct: 3,
          },
        },
        {
          heading: 'أضرب الأفعال الناقصة، وكان وأخواتها',
          lines: [
            { html: `الأفعال الناقصة fall into four <bdi>أَضْرُب</bdi>: <bdi>كَانَ وَأَخَوَاتُهَا</bdi>, <bdi>أَفْعَالُ الرَّجَاء</bdi>, <bdi>أَفْعَالُ الْمُقَارَبَة</bdi>, and <bdi>أَفْعَالُ الشُّرُوع</bdi>.`, list: false },
            { html: `This lesson and the next cover the first: thirteen verbs sharing كان's government —`, list: false },
            { html: `<bdi>كَانَ، أَصْبَحَ، أَضْحَى، أَمْسَى، ظَلَّ، بَاتَ، صَارَ، مَا بَرِحَ، مَا انْفَكَّ، مَا زَالَ، مَا فَتِئَ، مَا دَامَ، لَيْسَ</bdi>.`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `How many أضرب does الأفعال الناقصة split into?`,
            kind: 'mcq',
            options: ['اثنان', 'ثلاثة', 'أربعة', 'خمسة'],
            correct: 2,
          },
        },
        {
          heading: 'معاني كان الستة',
          lines: [
            { html: `<bdi>كَانَ</bdi> itself carries a wide range of time-meanings. Linked to the past, it can indicate:`, list: false },
            { table: { headers: ['Meaning', 'Example'], rows: [
              ['الْمَاضِي الْمُنْقَطِع — a fixed fact or a finished event', '﴿وَكَانُوا عَلَيْهِ شُهَدَاءَ﴾'],
              ['الْمَاضِي الْمُتَجَدِّد — continuous or habitual', 'كَانَا يَأْكُلَانِ الطَّعَامَ'],
              ['الْحَال بِمَعْنَى مَا زَالَ', '﴿وَكَانَ الْإِنْسَانُ عَجُولًا﴾'],
              ['الِاسْتِقْبَال', '﴿كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا﴾'],
            ] } },
            { html: `Two further senses go beyond time altogether:`, list: false },
            { table: { headers: ['Meaning', 'Example'], rows: [
              ['الِانْبِغَاء — what is fitting', '﴿مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللَّهِ مِنْ شَيْءٍ﴾'],
              ['الْقُدْرَة', '﴿وَمَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللَّهِ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `﴿وَمَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللَّهِ﴾ — كان here carries which of the six meanings?`,
            kind: 'mcq',
            options: ['القدرة', 'الماضي المنقطع', 'الاستقبال', 'الحال بمعنى ما زال'],
            correct: 0,
          },
        },
        {
          heading: 'أحكام الحذف: نون يكن، وكان مع اسمها',
          lines: [
            { html: `Two deletions are permitted around كان.`, list: false },
            { html: `The <bdi>نُون</bdi> of <bdi>يَكُن</bdi> may drop when it is <bdi>مَجْزُوم</bdi>, not followed by a <bdi>سَاكِن</bdi>, and carries no attached <bdi>ضَمِيرُ نَصْبٍ</bdi>, as in ﴿لَمْ نَكُ مِنَ الْمُصَلِّينَ﴾ — but not ﴿لَمْ يَكُنِ الَّذِينَ كَفَرُوا﴾ (followed by a ساكن) nor لَمْ أَكُنْهُ (an attached ضمير).`, list: false },
            { html: `Dropping it adds a nuance of <bdi>تَقْلِيل</bdi> (diminution), as in ﴿وَلَمْ يَكُ شَيْئًا﴾.`, list: false },
            { html: `Separately, <bdi>كَانَ</bdi> together with its whole <bdi>اسْم</bdi> may be deleted after the <bdi>شَرْط إِنْ</bdi> and <bdi>لَوْ</bdi>, as in الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ and إِنْ خَيْرًا فَخَيْرٌ وَإِنْ شَرًّا فَشَرٌّ, and occasionally elsewhere, as in ﴿فَآمَنُوا خَيْرًا لَكُمْ﴾.`, list: false },
          ],
          exercise: {
            prompt: `Why is the نون of يكن kept in ﴿لَمْ يَكُنِ الَّذِينَ كَفَرُوا﴾ but dropped in ﴿لَمْ نَكُ مِنَ الْمُصَلِّينَ﴾?`,
            kind: 'mcq',
            options: ["Because the first is followed by a ساكن, and the second isn't", 'Because the first is مجزوم and the second is مرفوع', 'Because the first has an attached ضمير نصب only', 'No difference — deletion is allowed in both'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أقسام does السماعي split into?',
          options: ['اثنان', 'ثلاثة', 'أربعة', 'خمسة'],
          correct: 1,
        },
        {
          q: 'الفعل الناقص makes its اسم مرفوعًا. What does it make منصوبًا?',
          options: ['خبره', 'فاعله', 'مفعوله المطلق', 'حاله'],
          correct: 0,
        },
        {
          q: 'How many verbs make up كان وأخواتها?',
          options: ['عشرة', 'اثنا عشر', 'ثلاثة عشر', 'أربعة عشر'],
          correct: 2,
        },
        {
          q: '﴿وَكَانَ الْإِنْسَانُ عَجُولًا﴾ — كان here carries the meaning of:',
          options: ['ما زال (الحال)', 'الاستقبال', 'الانبغاء', 'القدرة'],
          correct: 0,
        },
        {
          q: 'The نون of يكن may be dropped on condition that:',
          options: ['That it be مجزومة, not followed by a ساكن, and carry no attached ضمير نصب', 'That it always be مرفوعة', 'That a حرف جر precede it', 'That the فعل be an أمر'],
          correct: 0,
        },
        {
          q: 'كان together with its اسم may both be deleted after:',
          options: ['الشرط إن ولو', 'الاستفهام', 'النداء', 'التمييز'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'تعريف السماعي',
          kind: 'mcq',
          prompt: 'A عامل فعل that follows no consistent rule and depends on transmission alone is called:',
          options: ['السماعي', 'القياسي', 'المطرد', 'المنسوخ'],
          correct: 0,
        },
        {
          title: 'أقسام السماعي',
          kind: 'mcq',
          prompt: 'The three أقسام of عامل الفعل السماعي are:',
          options: ['الأفعال الناقصة، أفعال المدح والذم، صيغ التعجب', 'اللازم، المتعدي، القلب', 'القياسي، المطرد، الشاذ', 'التعليق، الإلغاء، الاختصار'],
          correct: 0,
        },
        {
          title: 'عمل الفعل الناقص',
          kind: 'mcq',
          prompt: 'الفعل الناقص enters upon the مبتدأ and خبر, making the first:',
          options: ['مرفوعا (اسمها)', 'منصوبا (خبرها)', 'مجرورا', 'مبنيا'],
          correct: 0,
        },
        {
          title: 'سبب تسمية الناقص',
          kind: 'mcq',
          prompt: 'الفعل الناقص is called ناقص because:',
          options: ['Its meaning is only complete with its خبر', 'It has no فاعل', 'It does not تُصرَّف', 'It does not enter upon الجملة الاسمية'],
          correct: 0,
        },
        {
          title: 'أضرب الأفعال الناقصة',
          kind: 'mcq',
          prompt: 'The four أضرب of الأفعال الناقصة are:',
          options: ['كان وأخواتها، أفعال الرجاء، أفعال المقاربة، أفعال الشروع', 'اليقين والظن والتحويل والجارحة', 'التام والناقص والمتصرف وغير المتصرف', 'القياسي والسماعي والمطرد والشاذ'],
          correct: 0,
        },
        {
          title: 'عدد أخوات كان',
          kind: 'mcq',
          prompt: 'كان وأخواتها number:',
          options: ['ثلاثة عشر', 'عشرة', 'اثنا عشر', 'خمسة عشر'],
          correct: 0,
        },
        {
          title: 'كان — الماضي المنقطع',
          kind: 'mcq',
          prompt: '﴿وَكَانُوا عَلَيْهِ شُهَدَاءَ﴾ — كان here indicates:',
          options: ['الماضي المنقطع', 'الاستقبال', 'القدرة', 'الانبغاء'],
          correct: 0,
        },
        {
          title: 'كان — الماضي المتجدد',
          kind: 'mcq',
          prompt: 'كَانَا يَأْكُلَانِ الطَّعَامَ — كان here indicates:',
          options: ['الماضي المتجدد (الاستمرار/التكرار)', 'الماضي المنقطع', 'الاستقبال', 'الانبغاء'],
          correct: 0,
        },
        {
          title: 'كان — الاستقبال',
          kind: 'mcq',
          prompt: '﴿كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا﴾ — كان here indicates:',
          options: ['الاستقبال', 'الماضي المنقطع', 'الحال', 'القدرة'],
          correct: 0,
        },
        {
          title: 'كان — الانبغاء',
          kind: 'mcq',
          prompt: '﴿مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللَّهِ مِنْ شَيْءٍ﴾ — كان here indicates:',
          options: ['الانبغاء (ما ينبغي)', 'القدرة', 'الماضي المتجدد', 'الاستقبال'],
          correct: 0,
        },
        {
          title: 'معنى تقليل حذف النون',
          kind: 'mcq',
          prompt: 'Deleting the نون of يكن adds a nuance of:',
          options: ['التقليل', 'التوكيد', 'التعظيم', 'الاستمرار'],
          correct: 0,
        },
        {
          title: 'مثال عدم جواز حذف النون',
          kind: 'mcq',
          prompt: 'Why is the نون NOT dropped in ﴿لَمْ يَكُنِ الَّذِينَ كَفَرُوا﴾?',
          options: ['Because it is followed by a ساكن', "Because it's مرفوعة", 'Because it is in a فعل أمر', 'Because it is at the start of الكلام'],
          correct: 0,
        },
        {
          title: 'حذف كان واسمها',
          kind: 'mcq',
          prompt: 'كان together with its اسم may both be deleted after:',
          options: ['شرط إن ولو', 'النفي', 'الاستفهام', 'التعجب'],
          correct: 0,
        },
        {
          title: 'الفعل التام',
          kind: 'mcq',
          prompt: 'الفعل التام is sufficient with only its:',
          options: ['فاعله فقط دون خبر', 'خبره فقط دون فاعل', 'مفعوله المطلق', 'حاله فقط'],
          correct: 0,
        },
        {
          title: 'اسم الفعل الناقص',
          kind: 'mcq',
          prompt: 'The اسم that الأفعال الناقصة make مرفوعًا is called:',
          options: ['اسمها', 'خبرها', 'فاعلها', 'نائب فاعلها'],
          correct: 0,
        },
        {
          title: 'خبر الفعل الناقص',
          kind: 'mcq',
          prompt: 'The word that الأفعال الناقصة make منصوبًا is called:',
          options: ['خبرها', 'اسمها', 'حالها', 'تمييزها'],
          correct: 0,
        },
        {
          title: 'شروط حذف نون يكن (١)',
          kind: 'mcq',
          prompt: 'One condition for dropping the نون of يكن is that it be:',
          options: ['مجزومة', 'منصوبة', 'مرفوعة', 'مبنية للمجهول'],
          correct: 0,
        },
        {
          title: 'شروط حذف نون يكن (٢)',
          kind: 'mcq',
          prompt: 'Another condition for dropping the نون of يكن is that it carry no attached:',
          options: ['ضمير نصب', 'تاء التأنيث', 'واو الجماعة', 'ياء المخاطبة'],
          correct: 0,
        },
        {
          title: 'تركيب: كَانَ الْجَوُّ صَحْوًا',
          kind: 'tarkeeb',
          instruction: 'Identify اسم كان and خبرها.',
          sentence: 'كَانَ الْجَوُّ صَحْوًا',
          translation: 'The weather was clear.',
          cells: ['كَانَ', 'الْجَوُّ', 'صَحْوًا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'اسم كان' },
              { start: 2, end: 2, role: 'خبر كان' },
            ] },
          ],
          distractors: ['فاعل', 'مفعول به'],
        },
        {
          title: 'تركيب: كَانَتْ حَرْبٌ',
          kind: 'tarkeeb',
          instruction: 'Is كَانَتْ تام or ناقص here? Then identify حَرْبٌ.',
          sentence: 'كَانَتْ حَرْبٌ',
          translation: 'There was a war.',
          cells: ['كَانَتْ', 'حَرْبٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تام' },
              { start: 1, end: 1, role: 'فاعل' },
            ] },
          ],
          distractors: ['ناقص', 'خبر'],
        },
        {
          title: 'تركيب: ﴿وَكَانُوا عَلَيْهِ شُهَدَاءَ﴾',
          kind: 'tarkeeb',
          instruction: 'Which of the six meanings of كان does كَانُوا carry here؟',
          sentence: 'وَكَانُوا عَلَيْهِ شُهَدَاءَ',
          translation: 'And they were witnesses to it.',
          cells: ['كَانُوا', 'عَلَيْهِ', 'شُهَدَاءَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الماضي المنقطع' },
            ] },
          ],
          distractors: ['الماضي المتجدد', 'الاستقبال'],
        },
        {
          title: 'تركيب: كَانَا يَأْكُلَانِ الطَّعَامَ',
          kind: 'tarkeeb',
          instruction: 'Which of the six meanings of كان does كَانَا carry here؟',
          sentence: 'كَانَا يَأْكُلَانِ الطَّعَامَ',
          translation: 'The two of them used to eat the food.',
          cells: ['كَانَا', 'يَأْكُلَانِ', 'الطَّعَامَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الماضي المتجدد' },
            ] },
          ],
          distractors: ['الماضي المنقطع', 'الاستقبال'],
        },
        {
          title: 'تركيب: ﴿وَكَانَ الْإِنْسَانُ عَجُولًا﴾',
          kind: 'tarkeeb',
          instruction: 'Which of the six meanings of كان does كَانَ carry here؟',
          sentence: 'وَكَانَ الْإِنْسَانُ عَجُولًا',
          translation: 'And man was ever hasty.',
          cells: ['كَانَ', 'الْإِنْسَانُ', 'عَجُولًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الحال بمعنى ما زال' },
            ] },
          ],
          distractors: ['الماضي المنقطع', 'الاستقبال'],
        },
        {
          title: 'تركيب: ﴿كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا﴾',
          kind: 'tarkeeb',
          instruction: 'Which of the six meanings of كان does كَانَتْ carry here؟',
          sentence: 'كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا',
          translation: 'The Gardens of Paradise will be [their] lodging.',
          cells: ['كَانَتْ', 'لَهُمْ', 'جَنَّاتُ', 'الْفِرْدَوْسِ', 'نُزُلًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الاستقبال' },
            ] },
          ],
          distractors: ['الماضي المنقطع', 'القدرة'],
        },
        {
          title: 'تركيب: ﴿مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللَّهِ مِنْ شَيْءٍ﴾',
          kind: 'tarkeeb',
          instruction: 'Which of the six meanings of كان does كَانَ carry here؟',
          sentence: 'مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللَّهِ مِنْ شَيْءٍ',
          translation: 'It was not for us to associate anything with Allah.',
          cells: ['كَانَ', 'لَنَا', 'أَنْ', 'نُشْرِكَ', 'بِاللَّهِ', 'مِنْ', 'شَيْءٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الانبغاء' },
            ] },
          ],
          distractors: ['القدرة', 'الاستقبال'],
        },
        {
          title: 'تركيب: ﴿مَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللَّهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Which of the six meanings of كان does كَانَ carry here؟',
          sentence: 'مَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللَّهِ',
          translation: 'It is not for a soul to die except by permission of Allah.',
          cells: ['كَانَ', 'لِنَفْسٍ', 'أَنْ', 'تَمُوتَ', 'إِلَّا', 'بِإِذْنِ', 'اللَّهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'القدرة' },
            ] },
          ],
          distractors: ['الانبغاء', 'الاستقبال'],
        },
        {
          title: 'تركيب: حذف النون (١)',
          kind: 'tarkeeb',
          instruction: 'Is dropping the نون of يكن allowed here or not?',
          sentence: 'لَمْ نَكُ مِنَ الْمُصَلِّينَ',
          translation: 'We were not of those who prayed.',
          cells: ['لَمْ', 'نَكُ', 'مِنَ', 'الْمُصَلِّينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'يجوز الحذف' },
            ] },
          ],
          distractors: ['لا يجوز الحذف', 'واجب الحذف'],
        },
        {
          title: 'تركيب: حذف النون (٢)',
          kind: 'tarkeeb',
          instruction: 'Is dropping the نون of يكن allowed here or not?',
          sentence: 'لَمْ يَكُنِ الَّذِينَ كَفَرُوا',
          translation: 'Those who disbelieved were not...',
          cells: ['لَمْ', 'يَكُنِ', 'الَّذِينَ', 'كَفَرُوا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'لا يجوز الحذف' },
            ] },
          ],
          distractors: ['يجوز الحذف', 'واجب الحذف'],
        },
      ],
    },

    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أخوات كان',
      subtitle: 'Kāna\'s Sisters — أصبح، ظل، وصار for time and transformation, ما زال for continuation, and ما دام / ليس',
      concepts: [
        {
          heading: 'أصبح وأضحى وأمسى وظل وبات: أخوات الوقت',
          lines: [
            { html: `Five of كان's sisters attribute the خبر to the اسم at a specific time of day:`, list: false },
            { table: { headers: ['Verb', 'Time', 'Example'], rows: [
              ['أَصْبَحَ', 'الصباح (morning)', '﴿فَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا يَتَرَقَّبُ﴾'],
              ['أَضْحَى', 'الضُّحَى (mid-morning)', '—'],
              ['أَمْسَى', 'المساء (evening)', '—'],
              ['ظَلَّ', 'النهار (daytime)', '—'],
              ['بَاتَ', 'الليل (night)', '﴿وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا﴾'],
            ] } },
            { html: `<bdi>غَدَا</bdi> can carry the same sense as أَصْبَحَ, as in ﴿وَغَدَوْا عَلَىٰ حَرْدٍ قَادِرِينَ﴾.`, list: false },
            { html: `ظَلَّ can also contract, dropping one of its two <bdi>لَام</bdi>s, as in ﴿ظَلْتَ عَلَيْهِ عَاكِفًا﴾ from <bdi>ظَلِلْتَ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `Which of the five time-sisters can drop one of its two لامات, as in ﴿ظَلْتَ عَلَيْهِ عَاكِفًا﴾?`,
            kind: 'mcq',
            options: ['ظَلَّ', 'أَصْبَحَ', 'أَمْسَى', 'بَاتَ'],
            correct: 0,
          },
        },
        {
          heading: 'صار وما يشاركها معنى التحول',
          lines: [
            { html: `<bdi>صَارَ</bdi> indicates transformation, of two kinds:`, list: false },
            { table: { headers: ['Kind', 'Example'], rows: [
              ['تَحَوُّلُ الذَّات itself', 'صَارَ الْخَمْرُ خَلًّا'],
              ['تَحَوُّلُ الصِّفَات alone', 'صَارَ الْمُذْنِبُ مُتَّقِيًا'],
            ] } },
            { html: `كَانَ and the time-sisters can also carry this same بمعنى صار sense:`, list: false },
            { html: `﴿وَكَانَ مِنَ الْكَافِرِينَ﴾`, list: true, bullet: true },
            { html: `﴿فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا﴾`, list: true, bullet: true },
            { html: `ظَلَّ وَجْهُهُ مُسْوَدًّا وَهُوَ كَظِيمٌ`, list: true, bullet: true },
            { html: `A few أفعال outside كان's family carry it too: <bdi>ارْتَدَّ</bdi> (﴿فَارْتَدَّ بَصِيرًا﴾), <bdi>عَادَ</bdi> (﴿أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا﴾), and <bdi>اسْتَحَالَ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `صَارَ الْمُذْنِبُ مُتَّقِيًا shows تحول الصفات, not تحول الذات. What is the difference between the two?`,
            kind: 'mcq',
            options: ["The first is the اسم's صفة changing alone, without its ذات; the second is the ذات itself changing", "There's no difference between them", 'The first is specific to الجماد and the second to الإنسان', 'The second only occurs with صار alone'],
            correct: 0,
          },
        },
        {
          heading: 'ما زال وأخواتها: الاستمرار',
          lines: [
            { html: `<bdi>مَا بَرِحَ، مَا انْفَكَّ، مَا زَالَ، مَا فَتِئَ</bdi> indicate <bdi>الِاسْتِمْرَار</bdi>, as in ﴿لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ and ﴿فَمَا زِلْتُمْ فِي شَكٍّ﴾.`, list: false },
            { html: `Two restrictions apply to this group:`, list: false },
            { html: `they are <bdi>نَاقِصُ التَّصَرُّف</bdi> — only a <bdi>مَاضٍ</bdi> and <bdi>مُضَارِع</bdi> occur, no أمر`, list: true, bullet: true },
            { html: `they operate as ناقص only when preceded by <bdi>نَهْي</bdi>, <bdi>نَفْي</bdi>, or <bdi>دُعَاء</bdi> — hence the <bdi>مَا</bdi> in each of their names`, list: true, bullet: true },
            { html: `That نفي can itself drop after a <bdi>قَسَم</bdi>, when the فعل is a مضارع negated by <bdi>لَا</bdi>, as in يَمِينُ اللَّهِ أَبْرَحُ قَاعِدًا (i.e. لَا أَبْرَحُ).`, list: false },
            { html: `Note the difference between <bdi>زَالَ يَزَالُ</bdi> — this ناقص فعل — and <bdi>زَالَ يَزُولُ</bdi>, an ordinary <bdi>فِعْلٌ تَامّ</bdi> meaning <bdi>زَوَال</bdi>, as in ﴿أَنْ تَزُولَا﴾.`, list: false },
          ],
          exercise: {
            prompt: `Why does مَا زَالَ and its three sisters carry a مَا in their very names?`,
            kind: 'mcq',
            options: ['Because they only operate as ناقص when preceded by نفي, نهي, or دعاء', "Because ما is an original part of the فعل's structure and can't be separated from it", 'Because they are only used in the صيغة الأمر', 'Because ما here is an اسم موصول, not نافية'],
            correct: 0,
          },
        },
        {
          heading: 'ما دام وليس',
          lines: [
            { html: `<bdi>مَا دَامَ</bdi> delimits what precedes it by the duration of the اسم's being described by the خبر, as in ﴿وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا﴾.`, list: false },
            { html: `<bdi>مَا</bdi> alone can sometimes stand in its place, as in وَاللَّهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ, frequently before <bdi>لَمْ</bdi>: يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ.`, list: false },
            { html: `<bdi>لَيْسَ</bdi> indicates <bdi>نَفْيُ الْحَال</bdi>, as in ﴿لَيْسَ عَلَيْكَ هُدَاهُمْ﴾.`, list: false },
            { html: `Both مَا دَامَ and لَيْسَ are completely <bdi>غَيْرُ مُتَصَرِّف</bdi> — only the ماضي form of either ever occurs.`, list: false },
          ],
          exercise: {
            prompt: `What do مَا دَامَ and لَيْسَ share, unlike ما زال and its sisters?`,
            kind: 'mcq',
            options: ['That both are completely غير متصرفين — only the ماضي form of either ever occurs', 'That neither needs a خبر at all', 'That both carry the meaning of التحول', 'That both accept dropping the نون like يكن'],
            correct: 0,
          },
        },
        {
          heading: 'التام والناقص، وتقديم الخبر ومعموله',
          lines: [
            { html: `Almost every one of the thirteen sisters can also work as a <bdi>فِعْلٌ تَامّ</bdi>, sufficing with its فاعل alone and needing no خبر — all except <bdi>مَا زَالَ، مَا فَتِئَ، لَيْسَ</bdi>, as in ﴿وَإِنْ كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَىٰ مَيْسَرَةٍ﴾ and ﴿خَالِدِينَ فِيهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ﴾.`, list: false },
            { html: `Word order is also flexible: the خبر of a ناقص فعل may come between the فعل and its اسم, as in ﴿كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ﴾, and the <bdi>مَعْمُول</bdi> of the خبر may even precede the فعل itself, as in ﴿أَهَٰؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ﴾.`, list: false },
            { html: `A few more أفعال — <bdi>آضَ، عَادَ، غَدَا، رَاحَ</bdi> — are counted among الأفعال الناقصة by some grammarians as well.`, list: false },
          ],
          exercise: {
            prompt: `Which three sisters can NEVER work as فعل تام, always needing a خبر?`,
            kind: 'mcq',
            options: ['ما زال، ما فتئ، ليس', 'كان، أصبح، صار', 'ظل، بات، أضحى', 'ما دام، ما برح، ما انفك'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'أصبح attributes the خبر to the اسم at what time?',
          options: ['الصباح', 'الضحى', 'الليل', 'النهار'],
          correct: 0,
        },
        {
          q: 'بات indicates what time of day?',
          options: ['الليل', 'الصباح', 'الضحى', 'المساء'],
          correct: 0,
        },
        {
          q: 'صَارَ الْخَمْرُ خَلًّا — which kind of تحول is this?',
          options: ['تحول الذات', 'تحول الصفات', 'لا تحول هنا', 'الاستقبال'],
          correct: 0,
        },
        {
          q: 'ما زال وأخواتها only operate as ناقص when preceded by:',
          options: ['نفي أو نهي أو دعاء', 'استفهام', 'نداء', 'قسم فقط'],
          correct: 0,
        },
        {
          q: 'زَالَ يَزُولُ (meaning زوال) is a فعل:',
          options: ['تام', 'ناقص', 'ناسخ', 'جامد'],
          correct: 0,
        },
        {
          q: 'Which two of the thirteen sisters are completely غير متصرف (ماضٍ only)?',
          options: ['ما دام وليس', 'كان وأصبح', 'ظل وبات', 'صار وأمسى'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'أضحى',
          kind: 'mcq',
          prompt: 'أضحى attributes the خبر to the اسم at what time?',
          options: ['الضحى', 'المساء', 'الليل', 'الصباح'],
          correct: 0,
        },
        {
          title: 'أمسى',
          kind: 'mcq',
          prompt: 'أمسى indicates what time of day?',
          options: ['المساء', 'الصباح', 'الضحى', 'النهار'],
          correct: 0,
        },
        {
          title: 'ظل',
          kind: 'mcq',
          prompt: 'ظل indicates what time of day?',
          options: ['النهار', 'الليل', 'الصباح', 'الضحى'],
          correct: 0,
        },
        {
          title: 'تخفيف ظل',
          kind: 'mcq',
          prompt: '﴿ظَلْتَ عَلَيْهِ عَاكِفًا﴾ — its original form is:',
          options: ['ظللت', 'ظليت', 'ظلوت', 'ظلات'],
          correct: 0,
        },
        {
          title: 'غدا بمعنى أصبح',
          kind: 'mcq',
          prompt: 'Which فعل can carry the same sense as أصبح?',
          options: ['غدا', 'راح', 'آض', 'باد'],
          correct: 0,
        },
        {
          title: 'تحول الصفات',
          kind: 'mcq',
          prompt: 'صَارَ الْمُذْنِبُ مُتَّقِيًا — which kind of تحول is this?',
          options: ['تحول الصفات', 'تحول الذات', 'لا تحول', 'الانبغاء'],
          correct: 0,
        },
        {
          title: 'كان بمعنى صار',
          kind: 'mcq',
          prompt: '﴿وَكَانَ مِنَ الْكَافِرِينَ﴾ — كان here means:',
          options: ['صار', 'ما زال', 'ليس', 'عسى'],
          correct: 0,
        },
        {
          title: 'أفعال أخرى بمعنى صار',
          kind: 'mcq',
          prompt: 'Which أفعال, outside كان وأخواتها, can also carry the meaning of صار?',
          options: ['ارتد، عاد، استحال', 'وجد، علم، ظن', 'أعطى، منح، وهب', 'صيّر، ترك، جعل'],
          correct: 0,
        },
        {
          title: 'لن نبرح عليه عاكفين',
          kind: 'mcq',
          prompt: '﴿لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ indicates:',
          options: ['الاستمرار', 'الانبغاء', 'القدرة', 'التحول'],
          correct: 0,
        },
        {
          title: 'شرط عمل ما زال الناقص',
          kind: 'mcq',
          prompt: 'ما زال وأخواتها only operate as ناقص when preceded by:',
          options: ['نفي أو نهي أو دعاء', 'استفهام أو نداء', 'قسم فقط', 'شرط فقط'],
          correct: 0,
        },
        {
          title: 'تصرف ما زال',
          kind: 'mcq',
          prompt: 'ما زال and its three sisters (ما برح، ما انفك، ما فتئ), in terms of تصرف, are:',
          options: ['ناقصة التصرف: only ماضٍ and مضارع occur', 'تامة التصرف: every form occurs', 'جامدة: ماضٍ only', 'Does not inflect at all'],
          correct: 0,
        },
        {
          title: 'حذف النفي بعد القسم',
          kind: 'mcq',
          prompt: 'يَمِينُ اللَّهِ أَبْرَحُ قَاعِدًا — its implied meaning is:',
          options: ['والله لا أبرح قاعداً', 'والله أبرح قاعداً بمعنى أزول', 'والله كنت قاعداً', 'لا تقدير هنا'],
          correct: 0,
        },
        {
          title: 'ما دام',
          kind: 'mcq',
          prompt: 'ما دام indicates:',
          options: ['تحديد المدة بدوام الوصف', 'الاستمرار المطلق بلا قيد', 'نفي الحال', 'التحول من حال إلى حال'],
          correct: 0,
        },
        {
          title: 'ما وحدها بمعنى ما دام',
          kind: 'mcq',
          prompt: 'When ما alone stands in place of ما دام, it frequently precedes:',
          options: ['لم', 'لن', 'إن', 'هل'],
          correct: 0,
        },
        {
          title: 'ليس',
          kind: 'mcq',
          prompt: 'ليس indicates:',
          options: ['نفي الحال', 'نفي الماضي', 'نفي الاستقبال', 'التحول'],
          correct: 0,
        },
        {
          title: 'غير المتصرفتين بالكلية',
          kind: 'mcq',
          prompt: 'Which two sisters of كان are completely غير متصرف (ماضٍ only)?',
          options: ['ما دام وليس', 'كان وأصبح', 'ظل وبات', 'صار وأمسى'],
          correct: 0,
        },
        {
          title: 'تقديم الخبر',
          kind: 'mcq',
          prompt: '﴿كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ﴾ proves that the خبر of a ناقص فعل can:',
          options: ['يقع بين الفعل واسمه', 'يُحذف دائما', 'يتقدم على الفعل نفسه', 'يكون جملة فعلية فقط'],
          correct: 0,
        },
        {
          title: 'تقدم معمول الخبر',
          kind: 'mcq',
          prompt: '﴿أَهَٰؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ﴾ proves that the معمول of the خبر can:',
          options: ['يتقدم على الفعل الناقص نفسه', 'لا يتقدم أبدا', 'يُحذف مع الفعل', 'يصبح اسما لكان'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿فَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا يَتَرَقَّبُ﴾',
          kind: 'tarkeeb',
          instruction: 'Which time of day does أَصْبَحَ attribute the خبر to؟',
          sentence: 'فَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا يَتَرَقَّبُ',
          translation: 'And he became fearful in the city, watchful.',
          cells: ['أَصْبَحَ', 'فِي', 'الْمَدِينَةِ', 'خَائِفًا', 'يَتَرَقَّبُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الصباح' },
            ] },
          ],
          distractors: ['الضحى', 'المساء'],
        },
        {
          title: 'تركيب: أَضْحَى الطَّالِبُ مُجْتَهِدًا',
          kind: 'tarkeeb',
          instruction: 'Identify اسم أضحى and خبرها.',
          sentence: 'أَضْحَى الطَّالِبُ مُجْتَهِدًا',
          translation: 'The student became diligent by mid-morning.',
          cells: ['أَضْحَى', 'الطَّالِبُ', 'مُجْتَهِدًا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'اسم أضحى' },
              { start: 2, end: 2, role: 'خبر أضحى' },
            ] },
          ],
          distractors: ['فاعل', 'مفعول به'],
        },
        {
          title: 'تركيب: أَمْسَى الرَّجُلُ مَرِيضًا',
          kind: 'tarkeeb',
          instruction: 'Identify اسم أمسى and خبرها.',
          sentence: 'أَمْسَى الرَّجُلُ مَرِيضًا',
          translation: 'The man became sick by evening.',
          cells: ['أَمْسَى', 'الرَّجُلُ', 'مَرِيضًا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'اسم أمسى' },
              { start: 2, end: 2, role: 'خبر أمسى' },
            ] },
          ],
          distractors: ['فاعل', 'مفعول به'],
        },
        {
          title: 'تركيب: ظَلَّ الْوَلَدُ صَائِمًا',
          kind: 'tarkeeb',
          instruction: 'Identify اسم ظل and خبرها.',
          sentence: 'ظَلَّ الْوَلَدُ صَائِمًا',
          translation: 'The boy remained fasting throughout the day.',
          cells: ['ظَلَّ', 'الْوَلَدُ', 'صَائِمًا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'اسم ظل' },
              { start: 2, end: 2, role: 'خبر ظل' },
            ] },
          ],
          distractors: ['فاعل', 'مفعول به'],
        },
        {
          title: 'تركيب: ﴿وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا﴾',
          kind: 'tarkeeb',
          instruction: 'Which time of day does يَبِيتُونَ attribute the خبر to؟',
          sentence: 'وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا',
          translation: 'And those who spend the night prostrating and standing [in prayer] to their Lord.',
          cells: ['يَبِيتُونَ', 'لِرَبِّهِمْ', 'سُجَّدًا', 'وَقِيَامًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الليل' },
            ] },
          ],
          distractors: ['الصباح', 'النهار'],
        },
        {
          title: 'تركيب: صَارَ الْخَمْرُ خَلًّا',
          kind: 'tarkeeb',
          instruction: 'Classify this تحول.',
          sentence: 'صَارَ الْخَمْرُ خَلًّا',
          translation: 'The wine turned into vinegar.',
          cells: ['صَارَ', 'الْخَمْرُ', 'خَلًّا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'تحول الذات' },
            ] },
          ],
          distractors: ['تحول الصفات'],
        },
        {
          title: 'تركيب: صَارَ الْمُذْنِبُ مُتَّقِيًا',
          kind: 'tarkeeb',
          instruction: 'Classify this تحول.',
          sentence: 'صَارَ الْمُذْنِبُ مُتَّقِيًا',
          translation: 'The sinner became righteous.',
          cells: ['صَارَ', 'الْمُذْنِبُ', 'مُتَّقِيًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'تحول الصفات' },
            ] },
          ],
          distractors: ['تحول الذات'],
        },
        {
          title: 'تركيب: ﴿وَكَانَ مِنَ الْكَافِرِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Is كَانَ used here بمعنى صار, or on its original meaning؟',
          sentence: 'وَكَانَ مِنَ الْكَافِرِينَ',
          translation: 'And he became one of the disbelievers.',
          cells: ['كَانَ', 'مِنَ', 'الْكَافِرِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'بمعنى صار' },
            ] },
          ],
          distractors: ['على معناه الأصلي'],
        },
        {
          title: 'تركيب: ﴿فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا﴾',
          kind: 'tarkeeb',
          instruction: 'Is أَصْبَحْتُمْ used here بمعنى صار, or on its original meaning؟',
          sentence: 'فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا',
          translation: 'And you became, by His favor, brothers.',
          cells: ['أَصْبَحْتُمْ', 'بِنِعْمَتِهِ', 'إِخْوَانًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'بمعنى صار' },
            ] },
          ],
          distractors: ['على معناه الأصلي'],
        },
        {
          title: 'تركيب: ﴿فَمَا زِلْتُمْ فِي شَكٍّ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify زِلْتُمْ: ناقص (زال يزال) or تام (زال يزول)؟',
          sentence: 'فَمَا زِلْتُمْ فِي شَكٍّ',
          translation: 'You continued to be in doubt.',
          cells: ['مَا', 'زِلْتُمْ', 'فِي', 'شَكٍّ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'ناقص (زال يزال)' },
            ] },
          ],
          distractors: ['تام (زال يزول)'],
        },
        {
          title: 'تركيب: ﴿أَنْ تَزُولَا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify تَزُولَا: ناقص (زال يزال) or تام (زال يزول)؟',
          sentence: 'أَنْ تَزُولَا',
          translation: '...lest they cease [to exist].',
          cells: ['أَنْ', 'تَزُولَا'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'تام (زال يزول)' },
            ] },
          ],
          distractors: ['ناقص (زال يزال)'],
        },
        {
          title: 'تركيب: ﴿كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify كَانَ: ناقص or تام؟ Then identify its fronted خبر and its اسم.',
          sentence: 'كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ',
          translation: 'It was an obligation upon Us to aid the believers.',
          cells: ['كَانَ', 'حَقًّا', 'عَلَيْنَا', 'نَصْرُ', 'الْمُؤْمِنِينَ'],
          rows: [
            { position: 'above', label: 'تام or ناقص', labels: [
              { start: 0, end: 0, role: 'ناقص' },
            ] },
            { position: 'below', label: 'اسم / خبر', labels: [
              { start: 1, end: 1, role: 'خبر كان مقدّم' },
              { start: 3, end: 4, role: 'اسم كان مؤخر' },
            ] },
          ],
          distractors: ['تام', 'فاعل'],
        },
      ],
    },

    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'الرجاء والمقاربة والشروع',
      subtitle: 'Hope, Nearness, and Onset — عسى وكاد وطفق, and how أنّ behaves in each خبر',
      concepts: [
        {
          heading: 'أفعال الرجاء: عسى وأخواتها',
          lines: [
            { html: `<bdi>عَسَى، اخْلَوْلَقَ، حَرَى</bdi> are established to indicate <bdi>الرَّجَاء</bdi> (hope), as in ﴿عَسَىٰ أَنْ يَنْفَعَنَا أَوْ نَتَّخِذَهُ وَلَدًا﴾.`, list: false },
            { html: `عَسَى itself carries three senses:`, list: false },
            { table: { headers: ['Sense', 'Example'], rows: [
              ['التَّرَجِّي — in something loved', '﴿عَسَى اللَّهُ أَنْ يَعْفُوَ عَنْهُمْ﴾'],
              ['الْإِشْفَاق — apprehension of something disliked', '﴿فَهَلْ عَسَيْتُمْ إِنْ تَوَلَّيْتُمْ أَنْ تُفْسِدُوا فِي الْأَرْضِ﴾'],
              ['التَّعْلِيل', '﴿عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا﴾'],
            ] } },
          ],
          exercise: {
            prompt: `﴿فَهَلْ عَسَيْتُمْ إِنْ تَوَلَّيْتُمْ أَنْ تُفْسِدُوا فِي الْأَرْضِ﴾ warns of something disliked. Which of عسى's three senses is this?`,
            kind: 'mcq',
            options: ['الإشفاق', 'الترجي', 'التعليل', 'اليقين'],
            correct: 0,
          },
        },
        {
          heading: 'عسى مقابل لعل، ومعنى اخلولق وحرى',
          lines: [
            { html: `عَسَى carries <bdi>الْمُقَارَبَة</bdi> (nearness of occurrence) — <bdi>لَعَلَّ</bdi> does not, which is what separates the two.`, list: false },
            { html: `When عسى is attributed to Allah, its predominant sense flips to certainty (<bdi>الْيَقِين</bdi>) rather than hope, since الرجاء properly belongs to the addressee, not to Allah: ﴿عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا﴾.`, list: false },
            { html: `<bdi>اخْلَوْلَقَ</bdi> means <bdi>صَارَ خَلِيقًا</bdi> (became apt), as in اخْلَوْلَقَ الْمُسْلِمُونَ أَنْ يُحَافِظُوا عَلَى الصَّلَاةِ.`, list: false },
            { html: `<bdi>حَرَى</bdi> means <bdi>صَارَ حَرِيًّا</bdi> (became worthy), as in حَرَى الْمُذْنِبُ أَنْ يَتُوبَ.`, list: false },
          ],
          exercise: {
            prompt: `What distinguishes عسى from لعل, even though both can express hope?`,
            kind: 'mcq',
            options: ["That عسى carries المقاربة and لعل doesn't", 'That لعل only enters upon الفعل الماضي', 'That عسى is a حرف and لعل is a فعل', "There's no difference between them at all"],
            correct: 0,
          },
        },
        {
          heading: 'أن في خبر أفعال الرجاء، وكونها تامة',
          lines: [
            { html: `<bdi>أَنْ</bdi> is common (<bdi>يَكْثُرُ</bdi>) in the خبر of عسى, and obligatory (<bdi>يَجِبُ</bdi>) in the خبر of اخلولق and حرى.`, list: false },
            { html: `Like الأفعال الناقصة generally, أفعال الرجاء can also work as <bdi>تَامَّة</bdi> — sufficing with an <bdi>اسْمٌ مُؤَوَّل</bdi> standing as their فاعل, as in ﴿عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا﴾, where <bdi>أَنْ يَبْعَثَكَ</bdi> is itself the فاعل of عسى.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا﴾ read as عسى تامة, what is أَنْ يَبْعَثَكَ?`,
            kind: 'mcq',
            options: ['اسم مؤول هو فاعل عسى', 'خبر عسى الناقصة', 'مفعول به لعسى', 'اسم عسى الناقصة'],
            correct: 0,
          },
        },
        {
          heading: 'أفعال المقاربة: كاد وكرب وأوشك',
          lines: [
            { html: `<bdi>كَادَ، كَرَبَ، أَوْشَكَ</bdi> indicate the nearness of the خبر's occurrence, as in ﴿وَكَادُوا يَقْتُلُونَنِي﴾.`, list: false },
            { html: `عسى and كاد both carry مقاربة, but differently: عسى by way of hope (<bdi>عَلَى سَبِيلِ الرَّجَاء</bdi>), كاد and its sisters by way of actual closeness to occurrence (<bdi>عَلَى سَبِيلِ الْحُصُول</bdi>).`, list: false },
            { table: { headers: ['كاد', 'What it indicates', 'Example'], rows: [
              ['الْمُثْبَت (affirmed)', 'the act did NOT happen, but came close', '﴿وَكَادُوا يَقْتُلُونَنِي﴾'],
              ['الْمَنْفِيّ (negated)', 'a stronger نفي, denying even the nearness itself', '﴿وَلَا يَكَادُ يُسِيغُهُ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `﴿وَلَا يَكَادُ يُسِيغُهُ﴾ negates كاد. Does this negate only the ACT, or the nearness of the act too?`,
            kind: 'mcq',
            options: ['It negates the nearness of the فعل — a stronger negation than merely negating its occurrence', 'It negates only the occurrence of the فعل, and the nearness remains', 'It negates nothing — it is actually توكيد', 'It negates the فاعل, not the فعل'],
            correct: 0,
          },
        },
        {
          heading: 'أن في خبر المقاربة، وحذف الخبر، وتصرف المجموعتين',
          lines: [
            { html: `<bdi>أَنْ</bdi> is common in the خبر of <bdi>أَوْشَكَ</bdi> but rare (<bdi>يَقِلّ</bdi>) in the خبر of كاد وكرب — because أن indicates <bdi>الِاسْتِقْبَال</bdi> (the future), and أفعال الرجاء and أوشك sit far from actual occurrence, while كاد وكرب sit close to it, so أن does not suit them as well.`, list: false },
            { html: `The خبر of أفعال المقاربة may also be deleted when known from context, as in مَنْ عَجِلَ أَخْطَأَ أَوْ كَادَ (i.e. أَوْ كَادَ يُخْطِئُ).`, list: false },
            { html: `Both أفعال الرجاء والمقاربة are <bdi>نَاقِصُ التَّصَرُّف</bdi>, restricted to the ماضي — except <bdi>كَادَ</bdi> (﴿يَكَادُ الْبَرْقُ يَخْطَفُ أَبْصَارَهُمْ﴾) and <bdi>أَوْشَكَ</bdi> (يُوشِكُ أَنْ يَعُمَّهُمُ اللَّهُ بِعِقَابٍ), which also have a مضارع.`, list: false },
          ],
          exercise: {
            prompt: `Why does أن suit the خبر of أوشك more than it suits كاد?`,
            kind: 'mcq',
            options: ['Because أن indicates الاستقبال, and أوشك is farther from actual occurrence than كاد', "Because أوشك is a فعل قلب and كاد isn't", 'Because كاد never accepts أن at all', 'There is no difference between them in accepting أن'],
            correct: 0,
          },
        },
        {
          heading: 'أفعال الشروع',
          lines: [
            { html: `<bdi>جَعَلَ، أَخَذَ، طَفِقَ، عَلِقَ، أَنْشَأَ</bdi> indicate commencement of the act, as in ﴿وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِنْ وَرَقِ الْجَنَّةِ﴾.`, list: false },
            { html: `Despite being grouped with السماعي here, they are actually <bdi>قِيَاسِيَّة</bdi> — mentioned alongside الأفعال الناقصة only because they resemble them in government.`, list: false },
            { html: `Two restrictions apply:`, list: false },
            { html: `they occur only in the ماضي`, list: true, bullet: true },
            { html: `their خبر must be a <bdi>جُمْلَةٌ فِعْلِيَّة</bdi> built on a مضارع, stripped of أن`, list: true, bullet: true },
            { html: `An umbrella name, <bdi>أَفْعَالُ الْمُقَارَبَة</bdi>, is sometimes applied loosely to all three groups of this lesson together — عسى وأخواتها, كاد وأخواتها, and طفق وأخواتها.`, list: false },
          ],
          exercise: {
            prompt: `Why are أفعال الشروع covered in this السماعي lesson if they are actually قياسية, not سماعية?`,
            kind: 'mcq',
            options: ['Because they only resemble الأفعال الناقصة in government, so they are mentioned alongside them', "Because their rule actually isn't مطردة", 'Because scholars disagreed on classifying them, so they were placed here as a precaution', 'Because they do not fit into any other category'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أفعال الرجاء are there?',
          options: ['ثلاثة', 'اثنان', 'أربعة', 'خمسة'],
          correct: 0,
        },
        {
          q: 'عسى indicates المقاربة, unlike:',
          options: ['لعل', 'كاد', 'أوشك', 'حرى'],
          correct: 0,
        },
        {
          q: 'أن is obligatory in the خبر of:',
          options: ['اخلولق وحرى', 'عسى وكاد', 'أوشك وكرب', 'كان وأصبح'],
          correct: 0,
        },
        {
          q: 'Negated كاد (as in ﴿وَلَا يَكَادُ يُسِيغُهُ﴾) negates:',
          options: ['وقوع الفعل وقربه معا', 'وقوع الفعل فقط دون قربه', 'الفاعل لا الفعل', 'لا ينفي شيئا'],
          correct: 0,
        },
        {
          q: 'Which two verbs of أفعال الرجاء والمقاربة have a مضارع form?',
          options: ['كاد وأوشك', 'عسى وكرب', 'اخلولق وحرى', 'جعل وأخذ'],
          correct: 0,
        },
        {
          q: 'The خبر of أفعال الشروع must be:',
          options: ['جملة فعلية مضارعة بلا أن', 'جملة اسمية', 'مصدرا مؤولا بأن', 'اسما مفردا'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'أفعال الرجاء',
          kind: 'mcq',
          prompt: 'The three أفعال الرجاء are:',
          options: ['عسى، اخلولق، حرى', 'كاد، كرب، أوشك', 'جعل، أخذ، طفق', 'عسى، كاد، جعل'],
          correct: 0,
        },
        {
          title: 'الترجي',
          kind: 'mcq',
          prompt: '﴿عَسَى اللَّهُ أَنْ يَعْفُوَ عَنْهُمْ﴾ — which sense of عسى is this?',
          options: ['الترجي', 'الإشفاق', 'التعليل', 'اليقين المحض'],
          correct: 0,
        },
        {
          title: 'الإشفاق',
          kind: 'mcq',
          prompt: '﴿فَهَلْ عَسَيْتُمْ إِنْ تَوَلَّيْتُمْ أَنْ تُفْسِدُوا فِي الْأَرْضِ﴾ — which sense of عسى is this?',
          options: ['الإشفاق', 'الترجي', 'التعليل', 'المقاربة المجردة'],
          correct: 0,
        },
        {
          title: 'التعليل',
          kind: 'mcq',
          prompt: "Among عسى's senses are الترجي and الإشفاق, and also:",
          options: ['التعليل', 'التوكيد', 'الاستفهام', 'التمني'],
          correct: 0,
        },
        {
          title: 'عسى منسوبة إلى الله',
          kind: 'mcq',
          prompt: 'When عسى is attributed to Allah, its predominant sense is:',
          options: ['اليقين', 'الإشفاق', 'الشك', 'التمني'],
          correct: 0,
        },
        {
          title: 'معنى اخلولق',
          kind: 'mcq',
          prompt: 'اخلولق means:',
          options: ['صار خليقا', 'صار حريا', 'قارب الوقوع', 'صار مؤكدا'],
          correct: 0,
        },
        {
          title: 'معنى حرى',
          kind: 'mcq',
          prompt: 'حرى means:',
          options: ['صار حريا', 'صار خليقا', 'رجا', 'أشفق'],
          correct: 0,
        },
        {
          title: 'عسى تامة',
          kind: 'mcq',
          prompt: '﴿عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا﴾ — read as عسى تامة, أَنْ يَبْعَثَكَ is:',
          options: ['فاعل عسى (اسم مؤول)', 'خبر عسى', 'مفعول به', 'اسم عسى'],
          correct: 0,
        },
        {
          title: 'أفعال المقاربة',
          kind: 'mcq',
          prompt: 'The three أفعال المقاربة are:',
          options: ['كاد، كرب، أوشك', 'عسى، اخلولق، حرى', 'جعل، أخذ، طفق', 'كاد، عسى، حرى'],
          correct: 0,
        },
        {
          title: 'الفرق بين عسى وكاد',
          kind: 'mcq',
          prompt: 'كاد indicates المقاربة by way of:',
          options: ['Actual nearness of occurrence, unlike عسى, which is by way of hope', 'Hope, exactly like عسى', 'Sheer doubt', 'Wishing'],
          correct: 0,
        },
        {
          title: 'كاد مثبتا',
          kind: 'mcq',
          prompt: '﴿وَكَادُوا يَقْتُلُونَنِي﴾ — كاد here is مثبتة, so it means:',
          options: ["The killing didn't happen, but it came close", 'The killing actually happened', 'The فعل has no relation to nearness of occurrence', 'An emphatic negation of the killing'],
          correct: 0,
        },
        {
          title: 'كاد منفيا',
          kind: 'mcq',
          prompt: '﴿وَلَا يَكَادُ يُسِيغُهُ﴾ — the نفي here is:',
          options: ['Stronger than negating mere occurrence — it negates even the nearness itself', 'Weaker than affirmation', 'Does not convey real negation', 'Specific to أوشك only'],
          correct: 0,
        },
        {
          title: 'أن في خبر أوشك',
          kind: 'mcq',
          prompt: 'أن in the خبر of أوشك:',
          options: ['يكثر ورودها', 'يجب ورودها دائما', 'تمتنع', 'لا تدخل على أوشك أصلا'],
          correct: 0,
        },
        {
          title: 'أن في خبر كاد',
          kind: 'mcq',
          prompt: 'أن in the خبر of كاد:',
          options: ['يقل ورودها', 'يكثر ورودها', 'تجب دائما', 'ممتنعة كليا'],
          correct: 0,
        },
        {
          title: 'حذف خبر المقاربة',
          kind: 'mcq',
          prompt: 'مَنْ عَجِلَ أَخْطَأَ أَوْ كَادَ — the deleted خبر is understood as:',
          options: ['أو كاد يخطئ', 'أو كاد يعجل', 'أو كاد يندم', 'لا شيء محذوف'],
          correct: 0,
        },
        {
          title: 'تصرف الرجاء والمقاربة',
          kind: 'mcq',
          prompt: 'أفعال الرجاء والمقاربة, in terms of تصرف and excepting كاد وأوشك, are:',
          options: ['ناقصة التصرف: restricted to الماضي', 'تامة التصرف', 'جامدة, entirely invariant', 'Restricted to المضارع only'],
          correct: 0,
        },
        {
          title: 'أفعال الشروع',
          kind: 'mcq',
          prompt: 'The five أفعال الشروع are:',
          options: ['جعل، أخذ، طفق، علق، أنشأ', 'عسى، كاد، أوشك، كرب، حرى', 'كان، أصبح، ظل، بات، صار', 'وجد، علم، ظن، حسب، رأى'],
          correct: 0,
        },
        {
          title: 'أفعال الشروع قياسية',
          kind: 'mcq',
          prompt: 'أفعال الشروع, in terms of origin, are actually:',
          options: ['قياسية, but mentioned alongside السماعي because they resemble الأفعال الناقصة', 'Purely سماعية, like the rest of this قسم', 'Not classified under الناقصة at all', 'Disputed between قياسية and سماعية'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿عَسَى اللَّهُ أَنْ يَعْفُوَ عَنْهُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify اسم عسى and خبرها; then classify which sense of عسى this is.',
          sentence: 'عَسَى اللَّهُ أَنْ يَعْفُوَ عَنْهُمْ',
          translation: 'Perhaps Allah will pardon them.',
          cells: ['عَسَى', 'اللَّهُ', 'أَنْ', 'يَعْفُوَ', 'عَنْهُمْ'],
          rows: [
            { position: 'above', label: 'اسم / خبر عسى', labels: [
              { start: 1, end: 1, role: 'اسم عسى' },
              { start: 2, end: 4, role: 'خبر عسى' },
            ] },
            { position: 'below', label: 'معنى عسى', labels: [
              { start: 0, end: 0, role: 'الترجي' },
            ] },
          ],
          distractors: ['الإشفاق', 'التعليل'],
        },
        {
          title: 'تركيب: ﴿فَهَلْ عَسَيْتُمْ إِنْ تَوَلَّيْتُمْ أَنْ تُفْسِدُوا فِي الْأَرْضِ﴾',
          kind: 'tarkeeb',
          instruction: 'Which sense of عسى does عَسَيْتُمْ carry here؟',
          sentence: 'فَهَلْ عَسَيْتُمْ إِنْ تَوَلَّيْتُمْ أَنْ تُفْسِدُوا فِي الْأَرْضِ',
          translation: 'Would you perhaps, if you turned away, cause corruption in the land?',
          cells: ['هَلْ', 'عَسَيْتُمْ', 'إِنْ', 'تَوَلَّيْتُمْ', 'أَنْ', 'تُفْسِدُوا', 'فِي', 'الْأَرْضِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'الإشفاق' },
            ] },
          ],
          distractors: ['الترجي', 'التعليل'],
        },
        {
          title: 'تركيب: ﴿عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا﴾',
          kind: 'tarkeeb',
          instruction: 'Which sense of عسى does عَسَىٰ carry here؟',
          sentence: 'عَسَىٰ أَنْ يَبْعَثَكَ رَبُّكَ مَقَامًا مَحْمُودًا',
          translation: 'Perhaps your Lord will raise you to a praised station.',
          cells: ['عَسَىٰ', 'أَنْ', 'يَبْعَثَكَ', 'رَبُّكَ', 'مَقَامًا', 'مَحْمُودًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'التعليل' },
            ] },
          ],
          distractors: ['الترجي', 'الإشفاق'],
        },
        {
          title: 'تركيب: ﴿وَكَادُوا يَقْتُلُونَنِي﴾',
          kind: 'tarkeeb',
          instruction: 'Is كَادُوا here مثبت or منفي؟',
          sentence: 'وَكَادُوا يَقْتُلُونَنِي',
          translation: 'And they were about to kill me.',
          cells: ['كَادُوا', 'يَقْتُلُونَنِي'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'مثبت' },
            ] },
          ],
          distractors: ['منفي'],
        },
        {
          title: 'تركيب: ﴿وَلَا يَكَادُ يُسِيغُهُ﴾',
          kind: 'tarkeeb',
          instruction: 'Is يَكَادُ here مثبت or منفي؟',
          sentence: 'وَلَا يَكَادُ يُسِيغُهُ',
          translation: 'And he can hardly swallow it.',
          cells: ['لَا', 'يَكَادُ', 'يُسِيغُهُ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'منفي' },
            ] },
          ],
          distractors: ['مثبت'],
        },
      ],
    },

    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'أفعال المدح والذم',
      subtitle: 'Praise and Blame — نعم وبئس وحبذا, their فاعل, and the مخصوص',
      concepts: [
        {
          heading: 'تعريف أفعال المدح والذم، والقائمة الخمسة',
          lines: [
            { html: `<bdi>أَفْعَالُ الْمَدْحِ وَالذَّمّ</bdi> — the second قسم of السماعي — indicate praise or blame, and put both their <bdi>فَاعِل</bdi> and their <bdi>مَخْصُوص</bdi> (the specified subject actually being praised or blamed) in the <bdi>مَرْفُوع</bdi>. There are five:`, list: false },
            { table: { headers: ['Verb', 'Sense', 'Example'], rows: [
              ['نِعْمَ', 'praise', '﴿وَلَنِعْمَ دَارُ الْمُتَّقِينَ﴾'],
              ['حَبَّذَا', 'praise', 'حَبَّذَا خَالِدٌ'],
              ['بِئْسَ', 'blame', '﴿بِئْسَ الشَّرَابُ﴾'],
              ['سَاءَ', 'blame', '﴿وَسَاءَتْ مُرْتَفَقًا﴾'],
              ['لَا حَبَّذَا', 'blame', 'لَا حَبَّذَا الْكِبْرُ'],
            ] } },
          ],
          exercise: {
            prompt: `Which of these five أفعال is for المدح (praise), not الذم (blame)?`,
            kind: 'mcq',
            options: ['حبذا', 'بئس', 'ساء', 'لا حبذا'],
            correct: 0,
          },
        },
        {
          heading: 'التصرف، والإلحاق، والتأنيث',
          lines: [
            { html: `أفعال المدح والذم are <bdi>غَيْرُ مُتَصَرِّفَة</bdi> — only the <bdi>تَاء</bdi> (of تأنيث) may attach to them, as in <bdi>نِعِمَتْ، سَاءَتْ</bdi>.`, list: false },
            { html: `Any فعل on the pattern <bdi>فَعُلَ</bdi> is <bdi>مُلْحَق</bdi> (annexed) to this class, whether the pattern is original, as in ﴿وَحَسُنَتْ مُرْتَفَقًا﴾, or converted to it, as in كَتُبَ زَيْدٌ ("what a writer Zayd is!").`, list: false },
            { html: `The <bdi>تَأْنِيث</bdi> of these أفعال is permitted when either:`, list: false },
            { html: `the فاعل is feminine — نِعْمَ الْمَرْأَةُ فَاطِمَةُ / نِعِمَتِ الْمَرْأَةُ فَاطِمَةُ`, list: true, bullet: true },
            { html: `the مخصوص is feminine — نِعِمَتْ جَزَاءَ الْمُتَّقِينَ الْجَنَّةُ`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `كَتُبَ زَيْدٌ ("what a writer Zayd is!") uses a فعل converted to the فَعُلَ pattern. What is this called relative to أفعال المدح والذم?`,
            kind: 'mcq',
            options: ['ملحق بأفعال المدح والذم', 'فعل قلب مشابه لها', 'فعل ناقص من أخواتها', 'فعل تحويل بمعناها'],
            correct: 0,
          },
        },
        {
          heading: 'صور فاعل نعم وبئس، ونعما',
          lines: [
            { html: `The فاعل of نعم and بئس takes one of three permitted forms:`, list: false },
            { table: { headers: ['Form', 'Example'], rows: [
              ['an اسم carrying لَامُ الْجِنْس', '﴿نِعْمَ الْعَبْدُ﴾'],
              ['an اسم مُضَاف to such a noun', '﴿نِعْمَ أَجْرُ الْعَامِلِينَ﴾'],
              ['a ضَمِيرٌ مُسْتَتِر, explained by a تَمْيِيز converted from the فاعل', '﴿وَسَاءَتْ مَصِيرًا﴾'],
            ] } },
            { html: `The word <bdi>مَا</bdi> can also occur immediately after نعم and بئس in place of the usual فاعل, as in ﴿فَنِعِمَّا هِيَ﴾.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿وَسَاءَتْ مَصِيرًا﴾, what is the فاعل of سَاءَتْ, and what is مَصِيرًا?`,
            kind: 'mcq',
            options: ['الفاعل ضمير مستتر، ومصيرا تمييز يفسره', 'الفاعل مصيرا نفسه', 'لا فاعل لساءت هنا', 'الفاعل محذوف بلا تمييز'],
            correct: 0,
          },
        },
        {
          heading: 'حذف المخصوص',
          lines: [
            { html: `The <bdi>مَخْصُوص</bdi> — the noun actually being praised or blamed — may be deleted when context makes it clear, as in ﴿نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ﴾, meaning <bdi>هُوَ</bdi> in both places.`, list: false },
          ],
          exercise: {
            prompt: `﴿نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ﴾ has no مخصوص written out. What licenses that omission?`,
            kind: 'mcq',
            options: ["That the context points to it, so it's deleted", 'That نعم here is a فعل تام needing no مخصوص', 'That المولى and النصير are themselves the مخصوص', 'Deleting the مخصوص is never permitted'],
            correct: 0,
          },
        },
        {
          heading: 'أحكام حبذا: الحال والتمييز، ومن، ويا، وثبات ذا',
          lines: [
            { html: `A <bdi>مَنْصُوب</bdi> may appear before or after the مخصوص of حبذا / لا حبذا, parsed two ways:`, list: false },
            { table: { headers: ['Parsed as', 'Condition', 'Example'], rows: [
              ['حَال', 'if it is مُشْتَقّ', 'حَبَّذَا رَاكِبًا زَيْدٌ / حَبَّذَا زَيْدٌ رَاكِبًا'],
              ['تَمْيِيز', 'if it is جَامِد', 'حَبَّذَا رَجُلًا زَيْدٌ / حَبَّذَا زَيْدٌ رَجُلًا'],
            ] } },
            { html: `That تمييز can also be expressed with <bdi>حَرْفُ الْجَرِّ مِنْ</bdi>, as in حَبَّذَا زَيْنَبُ مِنْ مُعَلِّمَةٍ.`, list: false },
            { html: `<bdi>يَا</bdi> may enter on the <bdi>حَبّ</bdi> part, as in يَا حَبَّذَا مُحَمَّدٌ مِنْ جَارٍ.`, list: false },
            { html: `Finally, <bdi>ذَا</bdi> after حَبّ stays fixed in the singular masculine (<bdi>الْإِفْرَاد وَالتَّذْكِير</bdi>) no matter what the مخصوص is, as in حَبَّذَا رِجَالًا الْأَنْصَارُ and حَبَّذَا بِنْتًا فَاطِمَةُ.`, list: false },
          ],
          exercise: {
            prompt: `حَبَّذَا رِجَالًا الْأَنْصَارُ keeps ذَا singular masculine even though المخصوص (الأنصار) is plural. What rule explains that?`,
            kind: 'mcq',
            options: ['ذا after حبّ always stays الإفراد والتذكير, whatever المخصوص is', 'الأنصار here is مؤنث, so ذا must take التأنيث', 'ذا here is a ضمير matching الفاعل, not المخصوص', 'This is a common linguistic mistake with no rule behind it'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أفعال المدح والذم are there?',
          options: ['خمسة', 'ثلاثة', 'أربعة', 'ستة'],
          correct: 0,
        },
        {
          q: 'أفعال المدح والذم, in terms of تصرف, are:',
          options: ['غير متصرفة: only تاء التأنيث may attach', 'تامة التصرف', 'ناقصة التصرف: ماضٍ ومضارع', 'Restricted to المضارع only'],
          correct: 0,
        },
        {
          q: 'كَتُبَ زَيْدٌ (meaning "what a writer Zayd is!") — this فعل is:',
          options: ['ملحق بأفعال المدح والذم', 'من أفعال الشروع', 'من أفعال المقاربة', 'فعل ناقص'],
          correct: 0,
        },
        {
          q: 'The third permitted form of the فاعل of نعم and بئس is:',
          options: ['ضمير مستتر يفسره تمييز', 'اسم بلام الجنس', 'اسم مضاف', 'مصدر مؤول'],
          correct: 0,
        },
        {
          q: '﴿نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ﴾ — the مخصوص in both is:',
          options: ['محذوف تقديره هو', 'مذكور وهو المولى', 'مذكور وهو النصير', 'لا مخصوص لهما'],
          correct: 0,
        },
        {
          q: 'ذَا after حَبّ:',
          options: ['Always stays مفرد مذكر', 'Agrees with the مخصوص in number and gender', 'Is always deleted', 'Becomes feminine when the مخصوص is feminine'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'رفع الفاعل والمخصوص',
          kind: 'mcq',
          prompt: 'أفعال المدح والذم make مرفوعًا:',
          options: ['الفاعل والمخصوص معا', 'الفاعل فقط', 'المخصوص فقط', 'المفعول به'],
          correct: 0,
        },
        {
          title: 'نعم',
          kind: 'mcq',
          prompt: '﴿وَلَنِعْمَ دَارُ الْمُتَّقِينَ﴾ — نعم here belongs to أفعال:',
          options: ['المدح', 'الذم', 'التعجب', 'المقاربة'],
          correct: 0,
        },
        {
          title: 'بئس',
          kind: 'mcq',
          prompt: '﴿بِئْسَ الشَّرَابُ﴾ — بئس belongs to أفعال:',
          options: ['الذم', 'المدح', 'الرجاء', 'الشروع'],
          correct: 0,
        },
        {
          title: 'ساء',
          kind: 'mcq',
          prompt: '﴿وَسَاءَتْ مُرْتَفَقًا﴾ — ساء belongs to أفعال:',
          options: ['الذم', 'المدح', 'التحويل', 'المقاربة'],
          correct: 0,
        },
        {
          title: 'حبذا ولا حبذا',
          kind: 'mcq',
          prompt: 'حبذا is for المدح, and لا حبذا is:',
          options: ['للذم', 'للمدح أيضا', 'للرجاء', 'للتعجب'],
          correct: 0,
        },
        {
          title: 'ما يلحقها من التاء',
          kind: 'mcq',
          prompt: 'Being غير متصرفة, أفعال المدح والذم accept only:',
          options: ['تاء التأنيث', 'ياء المخاطبة', 'نون التوكيد', 'واو الجماعة'],
          correct: 0,
        },
        {
          title: 'حسنت مرتفقا',
          kind: 'mcq',
          prompt: '﴿وَحَسُنَتْ مُرْتَفَقًا﴾ — حَسُنَ here, on the وزن فعُل, is ملحق بـ:',
          options: ['أفعال المدح والذم', 'أفعال الشروع', 'أفعال المقاربة', 'أفعال التحويل'],
          correct: 0,
        },
        {
          title: 'تأنيث لتأنيث الفاعل',
          kind: 'mcq',
          prompt: 'نِعِمَتِ الْمَرْأَةُ فَاطِمَةُ — the reason for the تاء here is:',
          options: ['To agree in تأنيث with the فاعل (المرأة)', 'To agree in تأنيث with the مخصوص', 'Just phonetic lightening, with no real reason', 'A common mistake'],
          correct: 0,
        },
        {
          title: 'تأنيث لتأنيث المخصوص',
          kind: 'mcq',
          prompt: 'نِعِمَتْ جَزَاءَ الْمُتَّقِينَ الْجَنَّةُ — the reason for the تاء here is:',
          options: ['To agree in تأنيث with the مخصوص (الجنة)', 'To agree in تأنيث with the فاعل', 'Because the فاعل is تثنية (dual)', 'There is no grammatical reason for it'],
          correct: 0,
        },
        {
          title: 'لام الجنس',
          kind: 'mcq',
          prompt: '﴿نِعْمَ الْعَبْدُ﴾ — the فاعل of نعم here is:',
          options: ['اسم بلام الجنس', 'ضمير مستتر', 'اسم مضاف', 'مصدر مؤول'],
          correct: 0,
        },
        {
          title: 'مضاف إلى ما فيه لام الجنس',
          kind: 'mcq',
          prompt: '﴿نِعْمَ أَجْرُ الْعَامِلِينَ﴾ — the فاعل of نعم here is:',
          options: ['اسم مضاف إلى ما فيه لام الجنس', 'ضمير مستتر', 'اسم نكرة مجرد', 'جملة فعلية'],
          correct: 0,
        },
        {
          title: 'ضمير مستتر وتمييز',
          kind: 'mcq',
          prompt: '﴿وَسَاءَتْ مَصِيرًا﴾ — the فاعل of سَاءَتْ here is:',
          options: ['ضمير مستتر يفسره التمييز (مصيرا)', 'مصيرا نفسه بلا تفسير', 'اسم ظاهر مرفوع', 'لا فاعل له'],
          correct: 0,
        },
        {
          title: 'نعما',
          kind: 'mcq',
          prompt: '﴿فَنِعِمَّا هِيَ﴾ — ما here stands in place of:',
          options: ['فاعل نعم', 'مخصوص نعم', 'تمييز نعم', 'مفعول نعم'],
          correct: 0,
        },
        {
          title: 'حبذا: الحال',
          kind: 'mcq',
          prompt: 'حَبَّذَا رَاكِبًا زَيْدٌ — رَاكِبًا is parsed as:',
          options: ['حال, because it is مشتق', 'تمييز, because it is جامد', 'مخصوص', 'فاعل'],
          correct: 0,
        },
        {
          title: 'حبذا: التمييز',
          kind: 'mcq',
          prompt: 'حَبَّذَا رَجُلًا زَيْدٌ — رَجُلًا is parsed as:',
          options: ['تمييز, because it is جامد', 'حال, because it is مشتق', 'مخصوص', 'خبر'],
          correct: 0,
        },
        {
          title: 'تمييز حبذا بمن',
          kind: 'mcq',
          prompt: 'حَبَّذَا زَيْنَبُ مِنْ مُعَلِّمَةٍ — مِنْ مُعَلِّمَةٍ here is:',
          options: ['تمييز مجرور بمن', 'فاعل حبذا', 'مخصوص حبذا', 'حال منصوب'],
          correct: 0,
        },
        {
          title: 'يا حبذا',
          kind: 'mcq',
          prompt: 'يَا حَبَّذَا مُحَمَّدٌ مِنْ جَارٍ — يَا here enters upon:',
          options: ['حبّ', 'ذا', 'المخصوص', 'التمييز'],
          correct: 0,
        },
        {
          title: 'إفراد ذا وتذكيرها',
          kind: 'mcq',
          prompt: 'حَبَّذَا بِنْتًا فَاطِمَةُ keeps ذَا singular masculine even though فاطمة is feminine. Why?',
          options: ['Because ذا after حبّ always stays الإفراد والتذكير', 'Because فاطمة is an اسم علم that cannot take تأنيث', 'Because التمييز blocks تأنيث', 'This is a mistake in the language'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿وَلَنِعْمَ دَارُ الْمُتَّقِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify نِعْمَ: مدح or ذم؟ Then identify its فاعل.',
          sentence: 'وَلَنِعْمَ دَارُ الْمُتَّقِينَ',
          translation: 'And excellent is the home of the righteous.',
          cells: ['نِعْمَ', 'دَارُ', 'الْمُتَّقِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'مدح' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 2, role: 'فاعل نعم (مضاف إلى ما فيه لام الجنس)' },
            ] },
          ],
          distractors: ['ذم', 'مخصوص'],
        },
        {
          title: 'تركيب: ﴿نِعْمَ الْعَبْدُ﴾',
          kind: 'tarkeeb',
          instruction: 'What form does the فاعل of نِعْمَ take here؟',
          sentence: 'نِعْمَ الْعَبْدُ',
          translation: 'Excellent is the servant.',
          cells: ['نِعْمَ', 'الْعَبْدُ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'اسم بلام الجنس' },
            ] },
          ],
          distractors: ['مضاف إلى ما فيه لام الجنس', 'ضمير مستتر'],
        },
        {
          title: 'تركيب: ﴿بِئْسَ الشَّرَابُ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify بِئْسَ: مدح or ذم؟ Then identify الشَّرَابُ.',
          sentence: 'بِئْسَ الشَّرَابُ',
          translation: 'Wretched is the drink.',
          cells: ['بِئْسَ', 'الشَّرَابُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'ذم' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 1, role: 'مخصوص مذكور' },
            ] },
          ],
          distractors: ['مدح', 'مخصوص محذوف'],
        },
        {
          title: 'تركيب: ﴿وَسَاءَتْ مُرْتَفَقًا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify سَاءَتْ: مدح or ذم؟ Then identify what مُرْتَفَقًا is.',
          sentence: 'وَسَاءَتْ مُرْتَفَقًا',
          translation: 'And evil it is as a resting place.',
          cells: ['سَاءَتْ', 'مُرْتَفَقًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'ذم' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 1, role: 'تمييز يفسر الفاعل المستتر' },
            ] },
          ],
          distractors: ['مدح', 'فاعل ظاهر'],
        },
        {
          title: 'تركيب: حَبَّذَا خَالِدٌ',
          kind: 'tarkeeb',
          instruction: 'Classify حَبَّذَا: مدح or ذم؟ Then identify خَالِدٌ.',
          sentence: 'حَبَّذَا خَالِدٌ',
          translation: 'How excellent is Khalid!',
          cells: ['حَبَّذَا', 'خَالِدٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'مدح' },
            ] },
            { position: 'below', labels: [
              { start: 1, end: 1, role: 'مخصوص' },
            ] },
          ],
          distractors: ['ذم', 'فاعل'],
        },
        {
          title: 'تركيب: ﴿نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ﴾',
          kind: 'tarkeeb',
          instruction: 'Is the مخصوص مذكور or محذوف here؟',
          sentence: 'نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ',
          translation: 'Excellent is the Protector, and excellent is the Helper.',
          cells: ['نِعْمَ', 'الْمَوْلَىٰ', 'وَ', 'نِعْمَ', 'النَّصِيرُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 4, role: 'مخصوص محذوف' },
            ] },
          ],
          distractors: ['مخصوص مذكور'],
        },
        {
          title: 'تركيب: حَبَّذَا رَاكِبًا زَيْدٌ',
          kind: 'tarkeeb',
          instruction: 'Is رَاكِبًا here حال or تمييز؟',
          sentence: 'حَبَّذَا رَاكِبًا زَيْدٌ',
          translation: 'How excellent is Zayd, riding!',
          cells: ['حَبَّذَا', 'رَاكِبًا', 'زَيْدٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'حال' },
            ] },
          ],
          distractors: ['تمييز'],
        },
        {
          title: 'تركيب: حَبَّذَا رَجُلًا زَيْدٌ',
          kind: 'tarkeeb',
          instruction: 'Is رَجُلًا here حال or تمييز؟',
          sentence: 'حَبَّذَا رَجُلًا زَيْدٌ',
          translation: 'What an excellent man Zayd is!',
          cells: ['حَبَّذَا', 'رَجُلًا', 'زَيْدٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'تمييز' },
            ] },
          ],
          distractors: ['حال'],
        },
        {
          title: 'تركيب: يَا حَبَّذَا مُحَمَّدٌ مِنْ جَارٍ',
          kind: 'tarkeeb',
          instruction: 'Identify where يا enters; then identify the تمييز construction.',
          sentence: 'يَا حَبَّذَا مُحَمَّدٌ مِنْ جَارٍ',
          translation: 'Oh, what an excellent neighbor Muhammad is!',
          cells: ['يَا', 'حَبَّذَا', 'مُحَمَّدٌ', 'مِنْ', 'جَارٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'دخول يا على حبّ' },
            ] },
            { position: 'below', labels: [
              { start: 3, end: 4, role: 'تمييز بحرف الجر من' },
            ] },
          ],
          distractors: ['مخصوص', 'حال'],
        },
        {
          title: 'تركيب: حَبَّذَا بِنْتًا فَاطِمَةُ',
          kind: 'tarkeeb',
          instruction: 'ذَا in حَبَّذَا stays fixed how, despite فَاطِمَةُ being feminine؟',
          sentence: 'حَبَّذَا بِنْتًا فَاطِمَةُ',
          translation: 'What an excellent girl Fatimah is!',
          cells: ['حَبَّذَا', 'بِنْتًا', 'فَاطِمَةُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'ذا: مفرد مذكر رغم تأنيث المخصوص' },
            ] },
          ],
          distractors: ['ذا: تطابق المخصوص'],
        },
        {
          title: 'تركيب: نِعِمَتِ الْمَرْأَةُ فَاطِمَةُ',
          kind: 'tarkeeb',
          instruction: 'Why does نِعِمَتِ carry a تاء التأنيث here؟',
          sentence: 'نِعِمَتِ الْمَرْأَةُ فَاطِمَةُ',
          translation: 'Excellent is the woman, Fatimah!',
          cells: ['نِعِمَتِ', 'الْمَرْأَةُ', 'فَاطِمَةُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تأنيث الفاعل' },
            ] },
          ],
          distractors: ['تأنيث المخصوص'],
        },
        {
          title: 'تركيب: نِعِمَتْ جَزَاءَ الْمُتَّقِينَ الْجَنَّةُ',
          kind: 'tarkeeb',
          instruction: 'Why does نِعِمَتْ carry a تاء التأنيث here؟',
          sentence: 'نِعِمَتْ جَزَاءَ الْمُتَّقِينَ الْجَنَّةُ',
          translation: 'Excellent is the reward of the righteous, Paradise!',
          cells: ['نِعِمَتْ', 'جَزَاءَ', 'الْمُتَّقِينَ', 'الْجَنَّةُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تأنيث المخصوص' },
            ] },
          ],
          distractors: ['تأنيث الفاعل'],
        },
      ],
    },

    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'صيغ التعجب',
      subtitle: 'Forms of Wonder — ما أفعله وأفعل به, the قياسي forms, and what\'s سماعي among them',
      concepts: [
        {
          heading: 'صيغ التعجب: ضرباها والصيغ القياسية الثلاث',
          lines: [
            { html: `<bdi>صِيَغُ التَّعَجُّب</bdi> — the third قسم of السماعي — are forms established to indicate wonder (<bdi>التَّعَجُّب</bdi>), and split into two أضرب: <bdi>قِيَاسِيّ</bdi> and <bdi>سَمَاعِيّ</bdi>.`, list: false },
            { html: `The قياسي forms are three:`, list: false },
            { table: { headers: ['Form', 'Example'], rows: [
              ['مَا أَفْعَلَهُ', '﴿فَمَا أَصْبَرَهُمْ عَلَى النَّارِ﴾'],
              ['أَفْعِلْ بِهِ', '﴿أَسْمِعْ بِهِمْ وَأَبْصِرْ﴾'],
              ['فَعُلَ pattern, original or converted', '﴿كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `﴿فَمَا أَصْبَرَهُمْ عَلَى النَّارِ﴾ uses which of the three قياسي forms of التعجب?`,
            kind: 'mcq',
            options: ['ما أفعله', 'أفعل به', 'فعُل', 'لا شيء منها'],
            correct: 0,
          },
        },
        {
          heading: 'الخلاف في ما، واشتقاق أفعِل به',
          lines: [
            { html: `Grammarians differ on <bdi>مَا</bdi> in <bdi>مَا أَفْعَلَهُ</bdi>:`, list: false },
            { html: `it is <bdi>اسْتِفْهَام</bdi>`, list: true, bullet: true },
            { html: `it is a <bdi>نَكِرَةٌ مَوْصُوفَة</bdi> meaning <bdi>شَيْءٌ عَظِيم</bdi> ("something tremendous [made him patient]…")`, list: true, bullet: true },
            { html: `The form <bdi>أَفْعِلْ بِهِ</bdi> is itself derived: its origin is the <bdi>مَاضِي أَفْعَلَ</bdi>, changed into the <bdi>أَمْر</bdi> form; a <bdi>بَاء</bdi> is then added to the فاعل, because attaching a فعل أمر directly to an <bdi>اسْمٌ ظَاهِر</bdi> فاعل would be unseemly (<bdi>قَبِيح</bdi>).`, list: false },
          ],
          exercise: {
            prompt: `Why is a زائدة باء added to the فاعل in أَفْعِلْ بِهِ, rather than the فاعل standing bare?`,
            kind: 'mcq',
            options: ['Because attaching a فعل أمر directly to an اسم ظاهر فاعل is قبيح', "Because الباء is أصلية in the فعل's structure", 'Because the فاعل here is actually a مفعول به', "There's no grammatical reason — it's a random addition"],
            correct: 0,
          },
        },
        {
          heading: 'تشرب معنى التعجب، والباء مع فعُل',
          lines: [
            { html: `When a فعل's فاعل carries a زائدة باء like the one in أفعل به, the meaning of التعجب can seep into (<bdi>يَتَشَرَّب</bdi>) أفعال outside the three forms too, as in ﴿وَكَفَىٰ بِنَا حَاسِبِينَ﴾ and بِحَسْبِكَ زَيْدٌ.`, list: false },
            { html: `The same باء may also enter the فاعل of the فعُل pattern of wonder, as in حَسُنَ بِزَيْدٍ.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَكَفَىٰ بِنَا حَاسِبِينَ﴾ is not one of the three قياسي forms of التعجب, yet carries a sense of it. Why?`,
            kind: 'mcq',
            options: ['Because the meaning of التعجب seeps into any فعل whose فاعل carries a زائدة باء', 'Because it is a فعل ناقص operating like كان', 'Because it is one of أفعال المدح والذم', 'Because it converted to the فعُل pattern'],
            correct: 0,
          },
        },
        {
          heading: 'شروط صياغة التعجب القياسي',
          lines: [
            { html: `صيغ التعجب القياسي — ما أفعله and أفعل به — can only be formed from the <bdi>فِعْلٌ ثُلَاثِيٌّ مُجَرَّد</bdi> (an unaugmented three-letter فعل).`, list: false },
            { html: `Two further restrictions govern their shape:`, list: false },
            { table: { headers: ['Restriction', 'Example'], rows: [
              ['الْإِعْلَال of the عَيْن is not permitted', 'مَا أَطْوَلَهُ وَأَطْوِلْ بِهِ, not مَا أَطَالَهُ وَلَا أَطِلْ بِهِ'],
              ['الْإِدْغَام does not occur in أفعل به (unlike ما أفعله, which allows it)', 'أَبْرِرْ بِهِ vs. مَا أَبَرَّهُ'],
            ] } },
          ],
          exercise: {
            prompt: `ما أطوله avoids إعلال of its عين — the form is أَطْوَلَ, not أَطَالَ. What does this show about the two قياسي forms of التعجب?`,
            kind: 'mcq',
            options: ["That both block إعلال of the عين, whatever the فعل's original form", 'That both require إعلال always', 'That إعلال is permitted in one but not the other', 'إعلال has nothing to do with صيغ التعجب'],
            correct: 0,
          },
        },
        {
          heading: 'صيغ التعجب السماعية',
          lines: [
            { html: `Alongside the قياسي forms, a handful of expressions have been transmitted (<bdi>سُمِعَ</bdi>) as صيغ سماعية of التعجب, without following the قياسي pattern:`, list: false },
            { table: { headers: ['Device', 'Example'], rows: [
              ['سُبْحَانَ اللَّهِ', '﴿قَالَ سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ﴾'],
              ['الِاسْتِفْهَام', '﴿كَيْفَ تَكْفُرُونَ بِاللَّهِ وَكُنْتُمْ أَمْوَاتًا فَأَحْيَاكُمْ﴾'],
              ['النِّدَاء', '﴿يَا بُشْرَىٰ هَٰذَا غُلَامٌ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `﴿يَا بُشْرَىٰ هَٰذَا غُلَامٌ﴾ expresses wonder through which grammatical device, used here as a سماعي form of التعجب?`,
            kind: 'mcq',
            options: ['النداء', 'الاستفهام', 'سبحان الله', 'ما أفعله'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'صيغ التعجب split into:',
          options: ['قياسي وسماعي', 'لازم ومتعد', 'تام وناقص', 'مؤكد وغير مؤكد'],
          correct: 0,
        },
        {
          q: 'The three قياسي forms of التعجب are:',
          options: ['ما أفعله، أفعل به، فعُل', 'نعم، بئس، حبذا', 'كاد، عسى، أوشك', 'كان، صار، ظل'],
          correct: 0,
        },
        {
          q: 'One of the two views on "ما" in ما أفعله is that it is:',
          options: ['نكرة موصوفة بمعنى شيء عظيم', 'حرف جر زائد', 'اسم موصول بمعنى الذي', 'ضمير مستتر'],
          correct: 0,
        },
        {
          q: 'The origin of أَفْعِلْ بِهِ is:',
          options: ['ماضي أفعَلَ حُوّل إلى الأمر وزيدت الباء', 'مضارع أفعَلَ مجزوما', 'مصدر أفعَلَ', 'اسم فاعل من أفعَلَ'],
          correct: 0,
        },
        {
          q: 'صيغ التعجب القياسي can only be formed from:',
          options: ['الفعل الثلاثي المجرد فقط', 'أي فعل مهما كانت أحرفه', 'الفعل الرباعي فقط', 'الفعل المزيد فقط'],
          correct: 0,
        },
        {
          q: 'Among the سماعي forms of التعجب are:',
          options: ['سبحان الله، الاستفهام، النداء', 'ما أفعله وأفعل به', 'فعُل الأصلي والمحوّل', 'نعم وبئس'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'ضربا صيغ التعجب',
          kind: 'mcq',
          prompt: 'صيغ التعجب split into two أضرب:',
          options: ['قياسي وسماعي', 'مطرد وشاذ', 'ماضٍ ومضارع', 'مثبت ومنفي'],
          correct: 0,
        },
        {
          title: 'ما أفعله',
          kind: 'mcq',
          prompt: 'Which صيغة of التعجب is ﴿فَمَا أَصْبَرَهُمْ عَلَى النَّارِ﴾?',
          options: ['ما أفعله', 'أفعل به', 'فعُل', 'سماعية'],
          correct: 0,
        },
        {
          title: 'أفعل به',
          kind: 'mcq',
          prompt: 'Which صيغة of التعجب is ﴿أَسْمِعْ بِهِمْ وَأَبْصِرْ﴾?',
          options: ['أفعل به', 'ما أفعله', 'فعُل', 'النداء'],
          correct: 0,
        },
        {
          title: 'فعُل',
          kind: 'mcq',
          prompt: 'Which صيغة of التعجب is ﴿كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ﴾?',
          options: ['فعُل (وزن التعجب)', 'ما أفعله', 'أفعل به', 'سبحان الله'],
          correct: 0,
        },
        {
          title: 'ما استفهامية',
          kind: 'mcq',
          prompt: 'One of the two views on "ما" in ما أفعله is that it is:',
          options: ['استفهامية', 'حرف نفي', 'حرف جر', 'اسم شرط'],
          correct: 0,
        },
        {
          title: 'اشتقاق أفعل به',
          kind: 'mcq',
          prompt: 'أَفْعِلْ بِهِ is derived from:',
          options: ['ماضي أفعَلَ المحوّل إلى الأمر', 'مضارع أفعَلَ', 'اسم الفاعل', 'اسم المفعول'],
          correct: 0,
        },
        {
          title: 'سبب زيادة الباء',
          kind: 'mcq',
          prompt: 'A زائدة باء was added to the فاعل of أَفْعِلْ بِهِ because:',
          options: ['Attaching a فعل أمر directly to an اسم ظاهر فاعل is قبيح', 'The فعل is لازم, so it needed a حرف جر', 'The فاعل here is originally a مفعول به', 'There is no grammatical reason for it'],
          correct: 0,
        },
        {
          title: 'كفى بنا حاسبين',
          kind: 'mcq',
          prompt: '﴿وَكَفَىٰ بِنَا حَاسِبِينَ﴾ is an example of:',
          options: ['تشرب معنى التعجب في فعل خارج الصيغ الثلاث', 'أفعل به مباشرة', 'ما أفعله', 'فعُل الأصلي'],
          correct: 0,
        },
        {
          title: 'حسُن بزيد',
          kind: 'mcq',
          prompt: 'حَسُنَ بِزَيْدٍ — the باء here entered on the فاعل of the وزن:',
          options: ['فعُل', 'أفعل', 'ما أفعل', 'التفضيل'],
          correct: 0,
        },
        {
          title: 'الاشتقاق من الثلاثي',
          kind: 'mcq',
          prompt: 'صيغ التعجب القياسي can only be formed from:',
          options: ['الفعل الثلاثي المجرد فقط', 'أي فعل ثلاثي أو رباعي', 'الفعل المزيد بحرف فقط', 'لا يُشترط عدد أحرف معين'],
          correct: 0,
        },
        {
          title: 'منع إعلال العين',
          kind: 'mcq',
          prompt: 'مَا أَطْوَلَهُ, not مَا أَطَالَهُ, proves that صيغ التعجب:',
          options: ['تمنع إعلال العين', 'توجب إعلال العين', 'لا علاقة لها بالإعلال', 'تُعل العين في ما أفعله دون أفعل به'],
          correct: 0,
        },
        {
          title: 'منع الإدغام في أفعل به',
          kind: 'mcq',
          prompt: 'أَبْرِرْ بِهِ (without إدغام), unlike مَا أَبَرَّهُ (with إدغام), proves that:',
          options: ['أفعل به blocks الإدغام, unlike ما أفعله', 'Both forms block الإدغام', 'Both forms require الإدغام', 'الإدغام never occurs in صيغ التعجب'],
          correct: 0,
        },
        {
          title: 'سبحان الله',
          kind: 'mcq',
          prompt: '﴿قَالَ سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ﴾ — سُبْحَانَكَ here is a صيغة تعجب that is:',
          options: ['سماعية', 'قياسية على وزن ما أفعله', 'قياسية على وزن أفعل به', 'ملحقة بفعُل'],
          correct: 0,
        },
        {
          title: 'الاستفهام تعجبا',
          kind: 'mcq',
          prompt: '﴿كَيْفَ تَكْفُرُونَ بِاللَّهِ وَكُنْتُمْ أَمْوَاتًا فَأَحْيَاكُمْ﴾ expresses التعجب by way of:',
          options: ['الاستفهام', 'النداء', 'سبحان الله', 'فعُل'],
          correct: 0,
        },
        {
          title: 'النداء تعجبا',
          kind: 'mcq',
          prompt: '﴿يَا بُشْرَىٰ هَٰذَا غُلَامٌ﴾ expresses التعجب by way of:',
          options: ['النداء', 'الاستفهام', 'سبحان الله', 'أفعل به'],
          correct: 0,
        },
        {
          title: 'صيغ سماعية أم قياسية',
          kind: 'mcq',
          prompt: 'سبحان الله, الاستفهام, and النداء, as forms of التعجب, are considered:',
          options: ['سماعية، لا تتبع قاعدة مطردة', 'قياسية مثل ما أفعله', 'ملحقة بأفعال المدح والذم', 'من أفعال الشروع'],
          correct: 0,
        },
        {
          title: 'عدد الصيغ القياسية',
          kind: 'mcq',
          prompt: 'The number of قياسي forms of التعجب is:',
          options: ['ثلاثة', 'اثنان', 'أربعة', 'خمسة'],
          correct: 0,
        },
        {
          title: 'الرأي الآخر في ما',
          kind: 'mcq',
          prompt: 'The other view on "ما" in ما أفعله (besides استفهام) is that it is:',
          options: ['نكرة موصوفة بمعنى شيء عظيم', 'حرف عطف', 'اسم إشارة', 'ضمير متصل'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿فَمَا أَصْبَرَهُمْ عَلَى النَّارِ﴾',
          kind: 'tarkeeb',
          instruction: 'Which قياسي صيغة of التعجب is this؟',
          sentence: 'فَمَا أَصْبَرَهُمْ عَلَى النَّارِ',
          translation: 'How much they can endure of the Fire!',
          cells: ['مَا', 'أَصْبَرَهُمْ', 'عَلَى', 'النَّارِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'ما أفعله' },
            ] },
          ],
          distractors: ['أفعل به', 'فعُل'],
        },
        {
          title: 'تركيب: ﴿أَسْمِعْ بِهِمْ وَأَبْصِرْ﴾',
          kind: 'tarkeeb',
          instruction: 'Which قياسي صيغة of التعجب is this؟',
          sentence: 'أَسْمِعْ بِهِمْ وَأَبْصِرْ',
          translation: 'How well they hear and how well they see!',
          cells: ['أَسْمِعْ', 'بِهِمْ', 'وَأَبْصِرْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'أفعل به' },
            ] },
          ],
          distractors: ['ما أفعله', 'فعُل'],
        },
        {
          title: 'تركيب: ﴿كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Which قياسي صيغة of التعجب is this؟',
          sentence: 'كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ',
          translation: 'Grave is the word that comes out of their mouths.',
          cells: ['كَبُرَتْ', 'كَلِمَةً', 'تَخْرُجُ', 'مِنْ', 'أَفْوَاهِهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'فعُل' },
            ] },
          ],
          distractors: ['ما أفعله', 'أفعل به'],
        },
        {
          title: 'تركيب: ﴿قَالَ سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ﴾',
          kind: 'tarkeeb',
          instruction: 'Which سماعي device of التعجب does سُبْحَانَكَ represent؟',
          sentence: 'قَالَ سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ',
          translation: 'He said, "Exalted are You! It is not for me to say what is not true."',
          cells: ['قَالَ', 'سُبْحَانَكَ', 'مَا', 'يَكُونُ', 'لِي', 'أَنْ', 'أَقُولَ', 'مَا', 'لَيْسَ', 'لِي', 'بِحَقٍّ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'سبحان الله' },
            ] },
          ],
          distractors: ['الاستفهام', 'النداء'],
        },
        {
          title: 'تركيب: ﴿كَيْفَ تَكْفُرُونَ بِاللَّهِ وَكُنْتُمْ أَمْوَاتًا فَأَحْيَاكُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Which سماعي device of التعجب does كَيْفَ represent؟',
          sentence: 'كَيْفَ تَكْفُرُونَ بِاللَّهِ وَكُنْتُمْ أَمْوَاتًا فَأَحْيَاكُمْ',
          translation: 'How can you disbelieve in Allah when you were dead and He gave you life?',
          cells: ['كَيْفَ', 'تَكْفُرُونَ', 'بِاللَّهِ', 'وَكُنْتُمْ', 'أَمْوَاتًا', 'فَأَحْيَاكُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'الاستفهام' },
            ] },
          ],
          distractors: ['سبحان الله', 'النداء'],
        },
        {
          title: 'تركيب: ﴿يَا بُشْرَىٰ هَٰذَا غُلَامٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Which سماعي device of التعجب does يَا بُشْرَىٰ represent؟',
          sentence: 'يَا بُشْرَىٰ هَٰذَا غُلَامٌ',
          translation: 'Good news! Here is a boy.',
          cells: ['يَا', 'بُشْرَىٰ', 'هَٰذَا', 'غُلَامٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'النداء' },
            ] },
          ],
          distractors: ['الاستفهام', 'سبحان الله'],
        },
        {
          title: 'تركيب: مَا أَطْوَلَهُ',
          kind: 'tarkeeb',
          instruction: 'Does أَطْوَلَهُ (not أَطَالَهُ) show إعلال العين here, or does it block it؟',
          sentence: 'مَا أَطْوَلَهُ',
          translation: 'How tall he is!',
          cells: ['مَا', 'أَطْوَلَهُ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'يمتنع فيه الإعلال' },
            ] },
          ],
          distractors: ['يقع فيه الإعلال'],
        },
        {
          title: 'تركيب: مَا أَبَرَّهُ',
          kind: 'tarkeeb',
          instruction: 'Does الإدغام occur in أَبَرَّهُ here؟',
          sentence: 'مَا أَبَرَّهُ',
          translation: 'How devoted he is!',
          cells: ['مَا', 'أَبَرَّهُ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'يقع فيه الإدغام' },
            ] },
          ],
          distractors: ['يمتنع فيه الإدغام'],
        },
        {
          title: 'تركيب: ﴿وَكَفَىٰ بِنَا حَاسِبِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Is كَفَىٰ here one of the three قياسي forms directly, or is this تشرب معنى التعجب؟',
          sentence: 'وَكَفَىٰ بِنَا حَاسِبِينَ',
          translation: 'And sufficient are We as reckoners.',
          cells: ['كَفَىٰ', 'بِنَا', 'حَاسِبِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'تشرب معنى التعجب' },
            ] },
          ],
          distractors: ['من الصيغ الثلاث مباشرة'],
        },
      ],
    },
  ],
};

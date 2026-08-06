// Module 02 — الفعل القياسي (The Analogical/Rule-Governed Verb)
//
// Content is adapted from a bilingual Anki deck
// (النَحْوُ__2 الْعَامِلِ وَغَيْرِ الْعَامِلِ__1 الْفِعْلِ__1 القياسي.apkg,
// 36 notes across 2 sub-decks) prepared for this conversion. Definitions and
// examples are kept faithful to the source notes. Concept bodies are short
// by design (a sentence or two, not teaching prose); quiz/bank question text
// is English with Arabic grammatical terms left in Arabic.
//
// The source deck covers only الفعل القياسي (§1 of الفعل, itself §1 of
// العامل وغير العامل) — لازم/متعدٍ, أفعال القلوب, أفعال التحويل, and
// التعليق/الإلغاء. الفعل السماعي (§2 of الفعل) is covered separately in
// Module 03; العامل within الاسم and الحرف could extend this module further.

export default {
  id: '02',
  title: 'الفعل القياسي',
  heading: 'العامل وغير العامل',
  subheading: 'الفعل',
  blurb: 'The قياسي فعل: transitivity, the multi-object أفعال القلوب, and what governs each verb type.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'اللازم والمتعدي',
      subtitle: 'Transitivity — تعريف اللازم والمتعدي, and the two ways a فعل reaches its مفعول',
      concepts: [
        {
          heading: 'عامل الفعل: القياسي والسماعي',
          lines: [
            { html: `<bdi>عَامِلُ الْفِعْل</bdi> — how a فعل governs the words around it — divides into two kinds:`, list: false },
            { table: { headers: ['Kind', 'Rule'], rows: [
              ['الْقِيَاسِيّ', 'follows a consistent rule (قَاعِدَةٌ مُطَّرِدَة) — this module covers القياسي only'],
              ['السَّمَاعِيّ', 'follows no rule; depends purely on how it was transmitted (السَّمَاع)'],
            ] } },
            { html: `Its government runs in two directions:`, list: false },
            { html: `it makes the <bdi>فَاعِل</bdi>, or what substitutes for it (<bdi>نَائِبُهُ</bdi>), <bdi>مَرْفُوع</bdi>`, list: true, bullet: true },
            { html: `it makes the <bdi>مَفَاعِيل</bdi> and the <bdi>حَال</bdi> <bdi>مَنْصُوب</bdi>`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `Which of these is NOT something the قياسي فعل governs?`,
            kind: 'mcq',
            options: ['رفع الفاعل', 'نصب المفعول به', 'نصب الحال', 'جر المضاف إليه'],
            correct: 3,
          },
        },
        {
          heading: 'الفعل اللازم',
          lines: [
            { html: `<bdi>الفعل اللازم</bdi> — also called <bdi>فِعْلٌ قَاصِر</bdi> or <bdi>فِعْلٌ غَيْرُ مُتَعَدٍّ</bdi> — is one whose effect does not pass beyond its <bdi>فَاعِل</bdi> to a <bdi>مَفْعُولٌ بِهِ</bdi>, as in ﴿وَلَا هُمْ يَحْزَنُونَ﴾ (no مفعول به).`, list: false },
            { html: `That doesn't trap its effect entirely inside the فاعل: it can still reach things other than the مفعول به, such as the <bdi>مَفْعُولُ فِيهِ</bdi> and the <bdi>حَال</bdi>, as in جَلَسَ الطَّالِبُ أَمَامَ الْمُعَلِّمِ مُتَأَدِّبًا (أمامَ = مفعول فيه, متأدبًا = حال).`, list: false },
          ],
          exercise: {
            prompt: `جَلَسَ الطَّالِبُ أَمَامَ الْمُعَلِّمِ has no مفعول به, so جَلَسَ is لازم. Does that mean its effect cannot reach anything beyond الفاعل at all?`,
            kind: 'mcq',
            options: ['Correct — a لازم فعل never governs anything beyond its فاعل', 'No — it can still reach a مفعول فيه or a حال, just not a مفعول به', 'No — it can still take a second فاعل', 'No — الفعل اللازم actually takes a مفعول به whenever it is definite'],
            correct: 1,
          },
        },
        {
          heading: 'طرق التعدي: بنفسه وبحرف الجر',
          lines: [
            { html: `<bdi>الفعل المتعدي</bdi> — also called <bdi>فِعْلٌ وَاقِع</bdi> (falling upon the object) or <bdi>فِعْلٌ مُجَاوِز</bdi> (whose effect crosses over) — reaches its مفعول به in one of two ways:`, list: false },
            { table: { headers: ['Way', 'Example'], rows: [
              ['بِنَفْسِهِ, directly', '﴿الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ﴾'],
              ['بِوَاسِطَةِ حَرْفِ جَرٍّ', '﴿ذَهَبَ اللَّهُ بِنُورِهِمْ﴾'],
            ] } },
            { html: `In the second case that جار ومجرور is itself called <bdi>مَفْعُولٌ بِهِ بِوَاسِطَةِ حَرْفِ الْجَرِّ</bdi> — or <bdi>مُتَعَلِّقٌ بِمَعْنَى الْمَفْعُولِ بِهِ</bdi>, or <bdi>مَفْعُولٌ بِهِ غَيْرُ صَرِيح</bdi>.`, list: false },
            { html: `Some أفعال take both routes: <bdi>هَدَى</bdi> is متعدٍ بنفسه in ﴿اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ﴾ but متعدٍ بحرف الجر in ﴿وَهَدَاهُ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ﴾.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿ذَهَبَ اللَّهُ بِنُورِهِمْ﴾, بِنُورِهِمْ is the مفعول به of ذَهَبَ — but not بنفسه. What is this way of being متعدٍ called?`,
            kind: 'mcq',
            options: ['متعدٍ بنفسه', 'متعدٍ بواسطة حرف الجر', 'متعدٍ إلى مفعولين', 'فعل لازم بحرف جر'],
            correct: 1,
          },
        },
        {
          heading: 'أضرب المتعدي الثلاثة',
          lines: [
            { html: `A متعدي فعل falls into one of three <bdi>أَضْرُب</bdi> by how many مفاعيل it takes:`, list: false },
            { table: { headers: ['#', 'ضرب', 'Example'], rows: [
              ['1', 'مُتَعَدٍّ إِلَى مَفْعُولٍ وَاحِد', '﴿خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ﴾'],
              ['2', 'مُتَعَدٍّ إِلَى مَفْعُولَيْنِ', '—'],
              ['3', 'مُتَعَدٍّ إِلَى ثَلَاثَةِ مَفَاعِيل', '—'],
            ] } },
            { html: `The أفعال taking two مفعولين themselves split in two:`, list: false },
            { table: { headers: ['Class', 'Condition', 'Examples'], rows: [
              ['أَفْعَالُ الْجَارِحَة', 'مفعولان NOT originally a مُبْتَدَأٌ وَخَبَر — mostly أفعال of giving', 'أَعْطَى، مَنَحَ، وَهَبَ، كَسَا'],
              ['أَفْعَالُ الْقَلْبِ / أَفْعَالُ التَّحْوِيل', 'مفعولان ARE originally مبتدأ وخبر', 'ظَنَّ، حَسِبَ… (next two lessons)'],
            ] } },
            { html: `The next two lessons are built entirely on this second kind.`, list: false },
          ],
          exercise: {
            prompt: `أَعْطَى takes two مفاعيل, and so does ظَنَّ. What separates the class أَعْطَى belongs to from the class ظَنَّ belongs to?`,
            kind: 'mcq',
            options: ['Whether the two مفاعيل were originally a مبتدأ وخبر', 'Whether the فعل is ماضٍ or مضارع', 'Whether the فعل is لازم or متعدٍ', 'Whether the مفعولان can ever be deleted'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'What are the two types of عامل الفعل?',
          options: ['القياسي والسماعي', 'اللازم والمتعدي', 'الظاهر والمقدر', 'الأصلي والفرعي'],
          correct: 0,
        },
        {
          q: 'الفعل اللازم is defined as:',
          options: ['A فعل whose effect passes to a مفعول به', 'A فعل whose effect does not pass beyond its فاعل to a مفعول به', 'A فعل linked to a specific time', 'A فعل that never takes a فاعل'],
          correct: 1,
        },
        {
          q: 'Which best describes الفعل المتعدي?',
          options: ['فعل قاصر, whose effect stays with its فاعل', 'فعل واقع, whose effect passes to a مفعول به', 'فعل جامد, which cannot be conjugated', 'فعل مبني, which never takes إعراب'],
          correct: 1,
        },
        {
          q: 'In ﴿وَهَدَاهُ إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ﴾, how is هدى متعدٍ here?',
          options: ['بنفسه', 'بواسطة حرف الجر', 'فهو لازم في هذه الآية', 'بواسطة الفاعل'],
          correct: 1,
        },
        {
          q: 'أَعْطَى and مَنَحَ belong to which class of two-مفعول أفعال؟',
          options: ['أفعال الجارحة', 'أفعال القلب', 'أفعال التحويل', 'أفعال الشروع'],
          correct: 0,
        },
        {
          q: 'Can the مفاعيل of a giving-type فعل (متعدٍ لمفعولين) be deleted?',
          options: ['Yes — one, the other, or both may be deleted', 'No, never', 'Only the first may be deleted', 'Only when the فعل is فعل أمر'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'قياسي أم سماعي؟',
          kind: 'mcq',
          prompt: "A فعل's government follows no consistent rule and depends only on what has been transmitted. That government is:",
          options: ['قياسي', 'سماعي', 'مطرد', 'منسوخ'],
          correct: 1,
        },
        {
          title: 'ماذا يرفع القياسي؟',
          kind: 'mcq',
          prompt: 'الفعل القياسي makes مرفوعًا:',
          options: ['الفاعل أو نائبه', 'المفعول به', 'الحال', 'المضاف إليه'],
          correct: 0,
        },
        {
          title: 'أسماء أخرى للازم',
          kind: 'mcq',
          prompt: 'الفعل اللازم is also known as:',
          options: ['فعل قاصر', 'فعل واقع', 'فعل مجاوز', 'فعل جارحة'],
          correct: 0,
        },
        {
          title: 'أسماء أخرى للمتعدي',
          kind: 'mcq',
          prompt: 'الفعل المتعدي is called فعلاً واقعًا, and is also known as:',
          options: ['فعلاً مجاوزًا', 'فعلاً قاصرًا', 'فعلاً جارحًا', 'فعلاً ناقصًا'],
          correct: 0,
        },
        {
          title: 'مثال على اللازم',
          kind: 'mcq',
          prompt: '﴿وَلَا هُمْ يَحْزَنُونَ﴾ — why is يَحْزَنُونَ considered فعلاً لازمًا?',
          options: ["Because it doesn't reach a مفعول به", 'Because it has no فاعل', 'Because it is مبني للمجهول', "Because it doesn't accept تصريف"],
          correct: 0,
        },
        {
          title: 'هل يتعدى اللازم لغير المفعول به؟',
          kind: 'mcq',
          prompt: 'جَلَسَ الطَّالِبُ أَمَامَ الْمُعَلِّمِ مُتَأَدِّبًا — أَمَامَ and مُتَأَدِّبًا prove that a لازم فعل can still reach:',
          options: ['المفعول فيه والحال', 'المفعول به فقط', 'المفعول المطلق فقط', 'لا شيء البتة'],
          correct: 0,
        },
        {
          title: 'متعدٍ بنفسه',
          kind: 'mcq',
          prompt: '﴿الْحَمْدُ لِلَّهِ الَّذِي أَذْهَبَ عَنَّا الْحَزَنَ﴾ — أَذْهَبَ here is متعدٍ:',
          options: ['بنفسه', 'بحرف الجر', 'إلى مفعولين', 'بواسطة الفاعل'],
          correct: 0,
        },
        {
          title: 'متعدٍ بحرف جر',
          kind: 'mcq',
          prompt: '﴿ذَهَبَ اللَّهُ بِنُورِهِمْ﴾ — how does ذَهَبَ reach its مفعول here?',
          options: ['بواسطة حرف الجر', 'بنفسه مباشرة', 'بالتضعيف', 'لا يتعدى، فهو لازم'],
          correct: 0,
        },
        {
          title: 'اسم آخر للمفعول بواسطة حرف الجر',
          kind: 'mcq',
          prompt: 'A مفعول به reached by way of a حرف جر is also called:',
          options: ['مفعولاً به غير صريح', 'مفعولاً مطلقًا', 'مفعولاً لأجله', 'نائب فاعل'],
          correct: 0,
        },
        {
          title: 'هدى بالطريقتين',
          kind: 'mcq',
          prompt: '﴿اهدنا الصراط المستقيم﴾ and ﴿وهداه إلى صراط مستقيم﴾ together prove that:',
          options: ['فعلاً واحدًا قد يتعدى بنفسه وبحرف الجر معًا', 'هدى فعل لازم دائمًا', 'هدى لا يتعدى إلا بحرف الجر', 'التعدي بحرف الجر مستحيل مع هدى'],
          correct: 0,
        },
        {
          title: 'أضرب المتعدي',
          kind: 'mcq',
          prompt: 'How many أضرب does الفعل المتعدي split into, by number of مفاعيل?',
          options: ['ثلاثة', 'اثنان', 'أربعة', 'خمسة'],
          correct: 0,
        },
        {
          title: 'مفعول واحد',
          kind: 'mcq',
          prompt: '﴿خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ﴾ — خَلَقَ here is متعدٍ to:',
          options: ['مفعول واحد', 'مفعولين', 'ثلاثة مفاعيل', 'لا مفعول له'],
          correct: 0,
        },
        {
          title: 'أفعال الجارحة',
          kind: 'mcq',
          prompt: 'أَعْطَى، مَنَحَ، وَهَبَ، كَسَا take two مفعولين that were NOT originally مبتدأ وخبر. These أفعال are called:',
          options: ['أفعال الجارحة', 'أفعال القلوب', 'أفعال التحويل', 'أفعال الشروع'],
          correct: 0,
        },
        {
          title: 'أصل المفعولين',
          kind: 'mcq',
          prompt: 'What distinguishes the مفعولان of a فعل like ظَنَّ from those of a فعل like أَعْطَى?',
          options: ["That ظَنَّ's two مفعولين were originally مبتدأ وخبر", "That أَعْطَى's two مفعولين were originally مبتدأ وخبر", 'That ظَنَّ can only take one مفعول', "There's no difference between them"],
          correct: 0,
        },
        {
          title: 'حذف مفاعيل أفعال الإعطاء',
          kind: 'mcq',
          prompt: '﴿وَإِنَّكَ لَتَهْدِي إِلَىٰ صِرَاطٍ مُسْتَقِيمٍ﴾ deletes one مفعول of هدى. Can the مفعولان of a giving-type فعل be deleted?',
          options: ['Yes — either one, or both, may be deleted', 'No — neither may be deleted', 'Only the first may be deleted', 'Only the second may be deleted'],
          correct: 0,
        },
        {
          title: 'مثال حذف كلا المفعولين',
          kind: 'mcq',
          prompt: '﴿أَعْطَىٰ كُلَّ شَيْءٍ خَلْقَهُ ثُمَّ هَدَىٰ﴾ — what was deleted from هدى here?',
          options: ['مفعولاه كلاهما', 'فاعله فقط', 'حرف الجر فقط', 'لا شيء حُذف'],
          correct: 0,
        },
        {
          title: 'الفعل القياسي: ماذا ينصب؟',
          kind: 'mcq',
          prompt: 'Besides raising the فاعل, what does الفعل القياسي make منصوبًا?',
          options: ['المفاعيل والحال', 'المضاف إليه', 'الفاعل نفسه', 'التمييز فقط'],
          correct: 0,
        },
        {
          title: 'الفعل الواقع',
          kind: 'mcq',
          prompt: 'Why is الفعل المتعدي also called فعلاً واقعًا?',
          options: ['Because its effect falls (يقع) on the مفعول به', 'Because it falls between two فاعلين', 'Because it only occurs in the ماضي', 'Because it takes the place of an اسم'],
          correct: 0,
        },
        {
          title: 'تركيب: جَلَسَ الطَّالِبُ أَمَامَ الْمُعَلِّمِ مُتَأَدِّبًا',
          kind: 'tarkeeb',
          instruction: 'Classify جَلَسَ, and identify أَمَامَ الْمُعَلِّمِ and مُتَأَدِّبًا.',
          sentence: 'جَلَسَ الطَّالِبُ أَمَامَ الْمُعَلِّمِ مُتَأَدِّبًا',
          translation: 'The student sat in front of the teacher, well-mannered.',
          cells: ['جَلَسَ', 'الطَّالِبُ', 'أَمَامَ', 'الْمُعَلِّمِ', 'مُتَأَدِّبًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'لازم' },
              { start: 2, end: 3, role: 'مفعول فيه' },
              { start: 4, end: 4, role: 'حال' },
            ] },
          ],
          distractors: ['متعدٍ', 'مفعول به'],
        },
        {
          title: 'تركيب: ﴿ذَهَبَ اللَّهُ بِنُورِهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify how ذَهَبَ reaches its مفعول.',
          sentence: 'ذَهَبَ اللَّهُ بِنُورِهِمْ',
          translation: 'Allah has taken away their light.',
          cells: ['ذَهَبَ', 'اللَّهُ', 'بِنُورِهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'متعدٍ بحرف الجر' },
            ] },
          ],
          distractors: ['متعدٍ بنفسه', 'لازم'],
        },
        {
          title: 'تركيب: ﴿أَذْهَبَ عَنَّا الْحَزَنَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify how أَذْهَبَ reaches its مفعول.',
          sentence: 'أَذْهَبَ عَنَّا الْحَزَنَ',
          translation: 'He has removed from us [our] sorrow.',
          cells: ['أَذْهَبَ', 'عَنَّا', 'الْحَزَنَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'متعدٍ بنفسه' },
            ] },
          ],
          distractors: ['متعدٍ بحرف الجر', 'لازم'],
        },
        {
          title: 'تركيب: ﴿خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify خَلَقَ by its number of مفاعيل.',
          sentence: 'خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ',
          translation: 'He created the heavens and the earth.',
          cells: ['خَلَقَ', 'السَّمَاوَاتِ', 'وَالْأَرْضَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'متعدٍ إلى مفعول واحد' },
            ] },
          ],
          distractors: ['متعدٍ إلى مفعولين', 'لازم'],
        },
        {
          title: 'تركيب: أَعْطَى الْأَمِيرُ الْفَقِيرَ مَالًا',
          kind: 'tarkeeb',
          instruction: 'Classify أَعْطَى and identify its two مفعولين.',
          sentence: 'أَعْطَى الْأَمِيرُ الْفَقِيرَ مَالًا',
          translation: 'The prince gave the poor man money.',
          cells: ['أَعْطَى', 'الْأَمِيرُ', 'الْفَقِيرَ', 'مَالًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'أفعال الجارحة' },
              { start: 2, end: 2, role: 'مفعول أول' },
              { start: 3, end: 3, role: 'مفعول ثانٍ' },
            ] },
          ],
          distractors: ['أفعال القلب', 'أفعال التحويل'],
        },
      ],
    },

    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أفعال القلوب',
      subtitle: 'Verbs of the Heart — اليقين and الظن, and how their two objects behave',
      concepts: [
        {
          heading: 'أفعال القلوب: اليقين والظن',
          lines: [
            { html: `<bdi>أَفْعَالُ الْقُلُوب</bdi> — the فعل قلب class introduced last lesson — split into two groups:`, list: false },
            { table: { title: 'The Two Groups of أفعال القلوب', headers: ['Group', 'أفعال'], rows: [
              ['الْيَقِين (certainty)', 'وَجَدَ، أَلْفَى، رَأَى، عَلِمَ، عَرَفَ، دَرَى، تَعَلَّمَ'],
              ['الظَّنّ (preponderant opinion), also called أَفْعَالُ الرُّجْحَان', 'ظَنَّ، حَسِبَ، زَعَمَ، جَعَلَ، حَجَا، عَدَّ، وَهَبَ، خَالَ'],
            ] } },
            { html: `Every one of them takes two مفاعيل that were originally a <bdi>مُبْتَدَأٌ وَخَبَر</bdi> — that's what makes it a فعل قلب rather than a plain متعدٍ لمفعولين.`, list: false },
          ],
          exercise: {
            prompt: `عَلِمَ and ظَنَّ are both أفعال القلوب, but from different groups. Which group does ظَنَّ belong to?`,
            kind: 'mcq',
            options: ['اليقين', 'الظن (الرجحان)', 'كلاهما معًا', 'لا ينتمي إلى أي منهما'],
            correct: 1,
          },
        },
        {
          heading: 'أمثلة قرآنية على أفعال القلوب',
          lines: [
            { table: { headers: ['Verse', 'Verb', 'Group'], rows: [
              ['﴿وَإِنْ وَجَدْنَا أَكْثَرَهُمْ لَفَاسِقِينَ﴾', 'وَجَدَ', 'اليقين'],
              ['﴿وَيَحْسَبُونَ أَنَّهُمْ مُهْتَدُونَ﴾', 'حَسِبَ', 'الظن'],
              ['﴿وَجَعَلُوا الْمَلَائِكَةَ الَّذِينَ هُمْ عِبَادُ الرَّحْمَٰنِ إِنَاثًا﴾', 'جَعَلَ', 'الظن'],
            ] } },
            { html: `In the first آية, وَجَدَ takes two مفعولين — <bdi>أَكْثَرَهُمْ</bdi> and <bdi>لَفَاسِقِينَ</bdi>. And جَعَلَ in the third آية is الظن, not اليقين: they merely *supposed* the angels female.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿وَجَعَلُوا الْمَلَائِكَةَ...إِنَاثًا﴾, جَعَلَ takes الملائكة and إناثًا as two مفاعيل. What category of أفعال القلوب is this?`,
            kind: 'mcq',
            options: ['فعل قلب من أفعال اليقين', 'فعل قلب من أفعال الظن (الرجحان)', 'ليس فعل قلب، بل فعل جارحة', 'فعل لازم لا يتعدى'],
            correct: 1,
          },
        },
        {
          heading: 'حذف مفاعيل أفعال القلوب: الاختصار والاقتصار',
          lines: [
            { html: `The two مفاعيل of a فعل قلب can sometimes drop out of the wording.`, list: false },
            { table: { headers: ['Term', 'What it deletes', 'Allowed?', 'Example'], rows: [
              ['الِاخْتِصَار', 'BOTH مفعولين, while other evidence in the جملة still points to what they were', 'جائز', '﴿أَيْنَ شُرَكَائِيَ الَّذِينَ كُنْتُمْ تَزْعُمُونَ﴾ (= تَزْعُمُونَهُمْ شُرَكَائِي)'],
              ['الِاقْتِصَار', 'only ONE مفعول, with nothing in the جملة pointing to what was meant', 'غير جائز', 'a bare ظَنَنْتُهُ with nothing else said'],
            ] } },
          ],
          exercise: {
            prompt: `﴿أَيْنَ شُرَكَائِيَ الَّذِينَ كُنْتُمْ تَزْعُمُونَ﴾ deletes both مفعولا زعم, yet the sentence still stands. What licenses deleting both together?`,
            kind: 'mcq',
            options: ["That there's a قرينة pointing to what's deleted — this is the permitted الاختصار", 'That زعم is a فعل لازم needing no مفعولين', 'That deleting only one مفعول is always the permitted option', 'That أفعال القلوب need no مفعول at all'],
            correct: 0,
          },
        },
        {
          heading: 'معانٍ خاصة: ألم تر وأرأيت وكاف الخطاب',
          lines: [
            { html: `A few أفعال قلوب carry idiomatic senses worth knowing on their own.`, list: false },
            { html: `<bdi>أَلَمْ تَرَ</bdi> means <bdi>أَلَمْ تَعْلَمْ</bdi>, with an added sense of <bdi>التَّعَجُّب</bdi> — knowledge is expressed through "seeing" because sight is the strongest cause of knowledge.`, list: false },
            { html: `<bdi>أَرَأَيْتَ</bdi>, as in ﴿أَرَأَيْتَ مَنِ اتَّخَذَ إِلَٰهَهُ هَوَاهُ﴾, means <bdi>أَخْبِرْنِي</bdi> ("tell me") in situations of astonishment; its <bdi>ضَمِيرٌ مَرْفُوع</bdi> changes with the addressee (<bdi>أَرَأَيْتِ، أَرَأَيْتُم</bdi>…).`, list: false },
            { html: `When a <bdi>كَاف</bdi> is added, as in <bdi>أَرَأَيْتَكَ / أَرَأَيْتَكُمْ</bdi>, it is a <bdi>كَافُ الْخِطَاب</bdi> added only to emphasise the address (<bdi>تَوْكِيدُ الْخِطَاب</bdi>) — the ضمير مرفوع stays fixed at <bdi>تَ</bdi>, and only that كاف changes: <bdi>أَرَأَيْتَكِ، أَرَأَيْتَكُمْ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `In أَرَأَيْتَكَ, which part is the ضمير مرفوع of رأى, and which part is only there for توكيد الخطاب?`,
            kind: 'mcq',
            options: ['التاء is the ضمير مرفوع; الكاف is a كاف الخطاب for emphasis', 'الكاف is the ضمير مرفوع; التاء is زائدة for emphasis', 'Both together form a repeated ضمير مرفوع', 'There is no ضمير in the word — the فعل is مبني للمجهول'],
            correct: 0,
          },
        },
        {
          heading: 'أفعال القلوب خارج معنى القلب',
          lines: [
            { html: `When one of these أفعال is used in a sense OTHER than قلب, it drops back to taking a single مفعول, like any ordinary متعدٍ:`, list: false },
            { table: { headers: ['Phrase', 'Meaning'], rows: [
              ['﴿لَا تَعْلَمُونَ شَيْئًا﴾', 'لَا تَعْرِفُونَ'],
              ['﴿لَاتَّخَذْتَ عَلَيْهِ أَجْرًا﴾', 'طَلَبْتَ'],
              ['﴿وَأَلْفَيَا سَيِّدَهَا لَدَى الْبَابِ﴾', 'صَادَفَا'],
              ['وَجَدْتُ الضَّالَّةَ', 'أَصَبْتُهَا'],
              ['ظَنَنْتُ زَيْدًا', 'اتَّهَمْتُهُ'],
              ['رَأَيْتُ زَيْدًا', 'أَبْصَرْتُهُ'],
            ] } },
          ],
          exercise: {
            prompt: `رَأَيْتُ زَيْدًا, meaning أَبْصَرْتُهُ, takes only one مفعول. Why does رأى not take two مفاعيل here the way it does as a فعل قلب?`,
            kind: 'mcq',
            options: ['Because it is used in the sense of physical sight (أبصر), not قلبي knowledge', 'Because زيدًا cannot be a مفعول به', 'Because رأى is لازم in this sentence', 'Because it is being used as فعل أمر'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'Which of these four is one of أفعال اليقين, not أفعال الظن؟',
          options: ['حسب', 'زعم', 'علم', 'خال'],
          correct: 2,
        },
        {
          q: 'What does أَرَأَيْتَ mean in ﴿أَرَأَيْتَ مَنِ اتَّخَذَ إِلَٰهَهُ هَوَاهُ﴾?',
          options: ['أخبرني', 'أبصرت', 'اعتقدت', 'اتهمت'],
          correct: 0,
        },
        {
          q: 'الاختصار, in deleting the مفاعيل of أفعال القلوب, means:',
          options: ['حذف المفعولين معًا مع وجود قرينة', 'حذف مفعول واحد بلا قرينة', 'عدم حذف أي مفعول أبدًا', 'تحويل الفعل إلى المبني للمجهول'],
          correct: 0,
        },
        {
          q: 'ظَنَنْتُ زَيْدًا, meaning اتَّهَمْتُهُ, takes how many مفعولاً?',
          options: ['مفعولاً واحدًا', 'مفعولين', 'ثلاثة مفاعيل', 'لا مفعول له'],
          correct: 0,
        },
        {
          q: 'In أَرَأَيْتَكَ, what is the role of the كاف?',
          options: ['كاف خطاب للتوكيد، وليست ضميرًا مرفوعًا', 'ضمير مرفوع فاعل', 'مفعول به', 'حرف جر'],
          correct: 0,
        },
        {
          q: '﴿وَيَحْسَبُونَ أَنَّهُمْ مُهْتَدُونَ﴾ — حَسِبَ هنا من:',
          options: ['أفعال اليقين', 'أفعال الظن (الرجحان)', 'أفعال التحويل', 'أفعال الجارحة'],
          correct: 1,
        },
      ],
      bank: [
        {
          title: 'كم عدد أفعال اليقين؟',
          kind: 'mcq',
          prompt: 'How many أفعال اليقين were mentioned?',
          options: ['سبعة', 'ستة', 'ثمانية', 'خمسة'],
          correct: 0,
        },
        {
          title: 'كم عدد أفعال الظن؟',
          kind: 'mcq',
          prompt: 'How many أفعال الظن (الرجحان) were mentioned?',
          options: ['ثمانية', 'سبعة', 'ستة', 'تسعة'],
          correct: 0,
        },
        {
          title: 'اسم آخر لأفعال الظن',
          kind: 'mcq',
          prompt: 'أفعال الظن are also called:',
          options: ['أفعال الرجحان', 'أفعال الجارحة', 'أفعال اليقين', 'أفعال التحويل'],
          correct: 0,
        },
        {
          title: 'وجد في الآية',
          kind: 'mcq',
          prompt: '﴿وَإِنْ وَجَدْنَا أَكْثَرَهُمْ لَفَاسِقِينَ﴾ — وَجَدَ here belongs to:',
          options: ['أفعال اليقين', 'أفعال الظن', 'أفعال التحويل', 'أفعال الجارحة'],
          correct: 0,
        },
        {
          title: 'ما يشترك فيه أفعال القلوب',
          kind: 'mcq',
          prompt: 'What do all أفعال القلوب have in common?',
          options: ['That their two مفعولين were originally مبتدأ وخبر', 'That they are all أفعال أمر', 'That they never تتصرف', 'That they always take the صيغة المبني للمجهول'],
          correct: 0,
        },
        {
          title: 'الاقتصار',
          kind: 'mcq',
          prompt: 'الاقتصار, in deleting one مفعول of أفعال القلوب, is:',
          options: ['Not permitted, because there is no قرينة', 'Always permitted', 'Obligatory in every جملة', 'Specific to أفعال اليقين only'],
          correct: 0,
        },
        {
          title: 'تقدير الاختصار',
          kind: 'mcq',
          prompt: '﴿أَيْنَ شُرَكَائِيَ الَّذِينَ كُنْتُمْ تَزْعُمُونَ﴾ — what is the implied wording?',
          options: ['تزعمونهم شركائي', 'تزعمون شركائي أنتم', 'زعمتم أن لا شركاء', 'تزعمون أنكم شركاء'],
          correct: 0,
        },
        {
          title: 'ألم تر',
          kind: 'mcq',
          prompt: 'أَلَمْ تَرَ means:',
          options: ['ألم تعلم (مع تعجب)', 'ألم تسمع', 'ألم تقل', 'ألم تذهب'],
          correct: 0,
        },
        {
          title: 'لماذا الرؤية تعبّر عن العلم؟',
          kind: 'mcq',
          prompt: 'Why is العلم expressed by "الرؤية" in أَلَمْ تَرَ?',
          options: ['Because البصر (sight) is the strongest cause of العلم', 'Because الرؤية and العلم are always synonyms', 'Because ألم تر is a فعل أمر', "Because there's no relation between الرؤية and العلم"],
          correct: 0,
        },
        {
          title: 'أرأيتَ، أرأيتِ، أرأيتم',
          kind: 'mcq',
          prompt: 'أَرَأَيْتَ، أَرَأَيْتِ، أَرَأَيْتُمْ — what changes between them?',
          options: ['The ضمير مرفوع, according to the المخاطَب', 'The فعل itself changes radically', 'The meaning changes completely in each صيغة', 'Nothing changes'],
          correct: 0,
        },
        {
          title: 'لا تعلمون شيئا',
          kind: 'mcq',
          prompt: '﴿لَا تَعْلَمُونَ شَيْئًا﴾ means:',
          options: ['لا تعرفون', 'لا تظنون', 'لا تتهمون', 'لا تتحولون'],
          correct: 0,
        },
        {
          title: 'لاتخذت عليه أجرا',
          kind: 'mcq',
          prompt: '﴿لَاتَّخَذْتَ عَلَيْهِ أَجْرًا﴾ means:',
          options: ['طلبتَ', 'ظننتَ', 'وجدتَ', 'عرفتَ'],
          correct: 0,
        },
        {
          title: 'وألفيا سيدها لدى الباب',
          kind: 'mcq',
          prompt: '﴿وَأَلْفَيَا سَيِّدَهَا لَدَى الْبَابِ﴾ means:',
          options: ['صادفا', 'ظنّا', 'اتهما', 'طلبا'],
          correct: 0,
        },
        {
          title: 'وجدت الضالة',
          kind: 'mcq',
          prompt: 'وَجَدْتُ الضَّالَّةَ means:',
          options: ['أصبتُها', 'ظننتُها', 'عرفتُها بالاسم', 'تحوّلت إليها'],
          correct: 0,
        },
        {
          title: 'رأيت زيدًا',
          kind: 'mcq',
          prompt: 'رَأَيْتُ زَيْدًا, meaning أَبْصَرْتُهُ — how many مفعولاً here?',
          options: ['مفعولاً واحدًا', 'مفعولين', 'ثلاثة', 'لا مفعول'],
          correct: 0,
        },
        {
          title: 'لماذا سُميت أفعال القلوب كذلك؟',
          kind: 'mcq',
          prompt: 'أفعال القلوب are called that because they:',
          options: ['They indicate a قلبي meaning like اليقين or الظن', 'They تُصرَّف from القلب to الجوارح', 'They need no فاعل', 'They are always مبنية للمجهول'],
          correct: 0,
        },
        {
          title: 'جعل في الآية',
          kind: 'mcq',
          prompt: 'جَعَلَ in ﴿وَجَعَلُوا الْمَلَائِكَةَ...إِنَاثًا﴾ belongs to:',
          options: ['أفعال الظن', 'أفعال اليقين', 'أفعال الجارحة', 'أفعال لازمة'],
          correct: 0,
        },
        {
          title: 'الفرق بين الاختصار والاقتصار',
          kind: 'mcq',
          prompt: 'What is the practical difference between الاختصار and الاقتصار?',
          options: ['الاختصار deletes both with a قرينة; الاقتصار deletes one without a قرينة', 'الاختصار deletes one with a قرينة; الاقتصار deletes both without a قرينة', "There's no difference between them", 'الاختصار is specific to the ماضي; الاقتصار to the مضارع'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿وَإِنْ وَجَدْنَا أَكْثَرَهُمْ لَفَاسِقِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify وَجَدْنَا, identify its two مفعولين, and its معنى.',
          sentence: 'وَإِنْ وَجَدْنَا أَكْثَرَهُمْ لَفَاسِقِينَ',
          translation: 'And indeed, We found most of them defiantly disobedient.',
          cells: ['وَجَدْنَا', 'أَكْثَرَهُمْ', 'لَفَاسِقِينَ'],
          rows: [
            { position: 'above', label: 'أفعال اليقين or الظن؟', labels: [
              { start: 0, end: 0, role: 'أفعال اليقين' },
              { start: 1, end: 1, role: 'مفعول أول' },
              { start: 2, end: 2, role: 'مفعول ثانٍ' },
            ] },
            { position: 'below', label: 'معنى', labels: [
              { start: 0, end: 0, role: 'بمعنى القلب' },
            ] },
          ],
          distractors: ['أفعال الظن', 'أفعال التحويل'],
        },
        {
          title: 'تركيب: ﴿وَيَحْسَبُونَ أَنَّهُمْ مُهْتَدُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify يَحْسَبُونَ as one of أفعال اليقين or أفعال الظن.',
          sentence: 'وَيَحْسَبُونَ أَنَّهُمْ مُهْتَدُونَ',
          translation: 'And they think that they are [rightly] guided.',
          cells: ['يَحْسَبُونَ', 'أَنَّهُمْ', 'مُهْتَدُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'أفعال الظن' },
            ] },
          ],
          distractors: ['أفعال اليقين', 'أفعال التحويل'],
        },
        {
          title: 'تركيب: ﴿وَجَعَلُوا الْمَلَائِكَةَ الَّذِينَ هُمْ عِبَادُ الرَّحْمَٰنِ إِنَاثًا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify جَعَلُوا as one of أفعال اليقين or أفعال الظن; then identify its two مفعولين.',
          sentence: 'وَجَعَلُوا الْمَلَائِكَةَ الَّذِينَ هُمْ عِبَادُ الرَّحْمَٰنِ إِنَاثًا',
          translation: 'And they have made the angels, who are servants of the Most Merciful, females.',
          cells: ['جَعَلُوا', 'الْمَلَائِكَةَ', 'الَّذِينَ', 'هُمْ', 'عِبَادُ', 'الرَّحْمَٰنِ', 'إِنَاثًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'أفعال الظن' },
              { start: 1, end: 1, role: 'مفعول أول' },
              { start: 6, end: 6, role: 'مفعول ثانٍ' },
            ] },
          ],
          distractors: ['أفعال اليقين', 'أفعال التحويل'],
        },
        {
          title: 'تركيب: ﴿أَيْنَ شُرَكَائِيَ الَّذِينَ كُنْتُمْ تَزْعُمُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify whether the deletion of both مفعولا تَزْعُمُونَ here is اختصار (permitted) or اقتصار (not permitted).',
          sentence: 'أَيْنَ شُرَكَائِيَ الَّذِينَ كُنْتُمْ تَزْعُمُونَ',
          translation: 'Where are My "partners" that you used to claim?',
          cells: ['أَيْنَ', 'شُرَكَائِيَ', 'الَّذِينَ', 'كُنْتُمْ', 'تَزْعُمُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 4, end: 4, role: 'اختصار' },
            ] },
          ],
          distractors: ['اقتصار', 'إلغاء'],
        },
        {
          title: 'تركيب: ظَنَنْتُهُ (بلا قرينة)',
          kind: 'tarkeeb',
          instruction: 'With no قرينة anywhere pointing to the deleted second مفعول, is this اختصار or اقتصار؟',
          sentence: 'ظَنَنْتُهُ',
          translation: '"I thought him..." (with nothing else said).',
          cells: ['ظَنَنْتُهُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'اقتصار' },
            ] },
          ],
          distractors: ['اختصار', 'إلغاء'],
        },
        {
          title: 'تركيب: رَأَيْتُ زَيْدًا (بمعنى أَبْصَرْتُهُ)',
          kind: 'tarkeeb',
          instruction: 'رأى here takes only one مفعول. Is it used بمعنى القلب or خارج معنى القلب؟',
          sentence: 'رَأَيْتُ زَيْدًا',
          translation: 'I saw Zayd (with my eyes).',
          cells: ['رَأَيْتُ', 'زَيْدًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 1, role: 'خارج معنى القلب' },
            ] },
          ],
          distractors: ['بمعنى القلب'],
        },
        {
          title: 'تركيب: وَجَدْتُ الضَّالَّةَ (بمعنى أَصَبْتُهَا)',
          kind: 'tarkeeb',
          instruction: 'وجد here takes how many مفعول, and is it بمعنى القلب or خارج معناه؟',
          sentence: 'وَجَدْتُ الضَّالَّةَ',
          translation: 'I found the stray animal.',
          cells: ['وَجَدْتُ', 'الضَّالَّةَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'خارج معنى القلب' },
              { start: 1, end: 1, role: 'مفعول واحد' },
            ] },
          ],
          distractors: ['بمعنى القلب', 'مفعولان'],
        },
      ],
    },

    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أفعال التحويل',
      subtitle: 'Verbs of Conversion — التحويل, the three-مفعول فعل, and ما يسد مسد المفعولين',
      concepts: [
        {
          heading: 'أفعال التحويل: تعريفها وأمثلتها',
          lines: [
            { html: `<bdi>أَفْعَالُ التَّحْوِيل</bdi> are the other branch of the two-مفعول class from Lesson 1 — أفعال bearing the meaning of <bdi>صَيَّرَ</bdi> (to transform something into something else). There are six:`, list: false },
            { html: `<bdi>صَيَّرَ</bdi>`, list: true, bullet: true },
            { html: `<bdi>رَدَّ</bdi>`, list: true, bullet: true },
            { html: `<bdi>تَرَكَ</bdi>`, list: true, bullet: true },
            { html: `<bdi>تَخِذَ / اتَّخَذَ</bdi>`, list: true, bullet: true },
            { html: `<bdi>جَعَلَ</bdi>`, list: true, bullet: true },
            { html: `<bdi>وَهَبَ</bdi>`, list: true, bullet: true },
            { html: `In ﴿وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا﴾, <bdi>اتَّخَذَ</bdi> is بمعنى صيّر, and its two مفاعيل are <bdi>إِبْرَاهِيمَ</bdi> and <bdi>خَلِيلًا</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `جَعَلَ and وَهَبَ each appear in TWO different lists across this module. Which two classes do they straddle?`,
            kind: 'mcq',
            options: ['أفعال الظن (القلب) وأفعال التحويل', 'أفعال اليقين وأفعال الجارحة', 'اللازم والمتعدي', 'التعليق والإلغاء'],
            correct: 0,
          },
        },
        {
          heading: 'أفعال التحويل خارج معنى التحويل',
          lines: [
            { html: `Just like أفعال القلوب, when one of these أفعال is used OUTSIDE the meaning of تحويل, it takes only a single مفعول:`, list: false },
            { table: { headers: ['Phrase', 'Meaning', 'مفاعيل'], rows: [
              ['﴿إِنِّي تَرَكْتُ مِلَّةَ قَوْمٍ لَا يُؤْمِنُونَ بِاللَّهِ﴾', 'ordinary "leaving"', 'مفعول واحد'],
              ['﴿ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِ﴾', 'يُصَار — plain "return"', 'مفعول واحد'],
              ['﴿وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ﴾', 'خَلَقَ / أَوْجَدَ — "created"', 'مفعول واحد (the three coordinated أسماء together, not three مفاعيل)'],
            ] } },
          ],
          exercise: {
            prompt: `﴿وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ﴾ — جَعَلَ here means خَلَقَ. Does it take one مفعول or two, and why؟`,
            kind: 'mcq',
            options: ["Just one — because it's outside the meaning of التحويل here", "Two — because it's always a فعل تحويل", 'Three — because three أسماء follow it', "No مفعول at all — it's لازم here"],
            correct: 0,
          },
        },
        {
          heading: 'الفعل الآخذ لثلاثة مفاعيل',
          lines: [
            { html: `A فعل can take up to three مفاعيل — but only ever a <bdi>فِعْلُ قَلْب</bdi>, such as <bdi>أَرَى</bdi>.`, list: false },
            { html: `Its second and third مفاعيل are, just like a two-object فعل قلب, originally a <bdi>مُبْتَدَأٌ وَخَبَر</bdi>: ﴿كَذَٰلِكَ يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾ — <bdi>أَعْمَالَهُمْ</bdi> and <bdi>حَسَرَاتٍ</bdi> are the second and third مفعولان, standing where a مبتدأ وخبر would.`, list: false },
          ],
          exercise: {
            prompt: `يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ takes three مفاعيل. What class of فعل can ever reach three مفاعيل?`,
            kind: 'mcq',
            options: ['فعل قلب وحده', 'أي فعل متعدٍ', 'فعل تحويل وحده', 'فعل لازم مقترن بحرف جر'],
            correct: 0,
          },
        },
        {
          heading: 'ما يسد مسد مفعولي فعل القلب',
          lines: [
            { html: `The two مفاعيل of a فعل قلب don't always show up as two plain أسماء — something else can stand in their place (<bdi>يَسُدُّ مَسَدَّ</bdi> them). Two things can do this:`, list: false },
            { table: { headers: ['Stand-in', 'Example'], rows: [
              ['اسْمٌ مُؤَوَّل', '﴿وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ﴾ — أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ stands for both مفعولا اعلموا'],
              ['جُمْلَة', '﴿وَاللَّهُ يَشْهَدُ إِنَّ الْمُنَافِقِينَ لَكَاذِبُونَ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `In ﴿وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ﴾, اعلموا is a فعل قلب needing two مفاعيل — yet only one اسم مؤول follows it. How is that possible?`,
            kind: 'mcq',
            options: ['The اسم مؤول alone stands in for both مفعولين together', 'اعلموا here is a فعل لازم needing no مفعولين', 'One of the two مفعولين is deleted without a قرينة', 'أن الله مع المتقين is just one مفعول standing in for nothing'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أفعال التحويل were mentioned?',
          options: ['ستة', 'خمسة', 'سبعة', 'ثمانية'],
          correct: 0,
        },
        {
          q: 'Which two أفعال appear in both أفعال الظن and أفعال التحويل?',
          options: ['جعل ووهب', 'ظن وصيّر', 'رد وترك', 'زعم وتخذ'],
          correct: 0,
        },
        {
          q: '﴿ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِ﴾, meaning يُصَار — how many مفعولاً here?',
          options: ['مفعولاً واحدًا', 'مفعولين', 'ثلاثة', 'لا مفعول'],
          correct: 0,
        },
        {
          q: 'A فعل taking three مفاعيل is always:',
          options: ['فعل قلب', 'فعل تحويل فقط', 'فعل جارحة', 'فعلاً لازمًا'],
          correct: 0,
        },
        {
          q: 'What can يسد مسد the two مفعولان of a فعل قلب?',
          options: ['الاسم المؤول أو الجملة', 'الحال أو التمييز', 'المفعول المطلق فقط', 'لا شيء يسد مسدهما'],
          correct: 0,
        },
        {
          q: '﴿وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا﴾ — اتَّخَذَ here is a فعل:',
          options: ['تحويل', 'قلب من أفعال اليقين', 'لازم', 'جارحة'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'معنى أفعال التحويل',
          kind: 'mcq',
          prompt: 'أفعال التحويل carry the meaning of:',
          options: ['صيّر', 'ظن', 'علم', 'وجد'],
          correct: 0,
        },
        {
          title: 'من أفعال التحويل',
          kind: 'mcq',
          prompt: 'صَيَّرَ، رَدَّ، تَرَكَ belong to:',
          options: ['أفعال التحويل', 'أفعال اليقين', 'أفعال الجارحة', 'أفعال الظن فقط'],
          correct: 0,
        },
        {
          title: 'مفعولا اتخذ',
          kind: 'mcq',
          prompt: '﴿وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا﴾ — the two مفعولان of اتَّخَذَ are:',
          options: ['إبراهيم وخليلا', 'الله وإبراهيم', 'خليلا فقط', 'لا مفعول له'],
          correct: 0,
        },
        {
          title: 'ترك خارج معنى التحويل',
          kind: 'mcq',
          prompt: '﴿إِنِّي تَرَكْتُ مِلَّةَ قَوْمٍ لَا يُؤْمِنُونَ بِاللَّهِ﴾ — تَرَكَ here is:',
          options: ['خارج معنى التحويل، مفعول واحد', 'بمعنى التحويل، مفعولان', 'فعل لازم', 'فعل قلب من اليقين'],
          correct: 0,
        },
        {
          title: 'يُرد إلى ربه',
          kind: 'mcq',
          prompt: '﴿ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِ﴾ means:',
          options: ['يُصار', 'يُصيَّر', 'يُترك', 'يُتَّخذ'],
          correct: 0,
        },
        {
          title: 'السمع والأبصار والأفئدة',
          kind: 'mcq',
          prompt: '﴿وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ﴾ — جَعَلَ here means:',
          options: ['خلق أو أوجد', 'صيّر', 'ظن', 'ترك'],
          correct: 0,
        },
        {
          title: 'مثال على ثلاثة مفاعيل',
          kind: 'mcq',
          prompt: 'An example of a فعل taking three مفاعيل is:',
          options: ['أرى', 'رأى', 'وهب', 'صيّر'],
          correct: 0,
        },
        {
          title: 'عدد مفاعيل يُري',
          kind: 'mcq',
          prompt: '﴿كَذَٰلِكَ يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾ — how many مفعولاً for يُرِي here?',
          options: ['ثلاثة', 'اثنان', 'واحد', 'لا مفعول'],
          correct: 0,
        },
        {
          title: 'أصل المفعول الثاني والثالث',
          kind: 'mcq',
          prompt: 'For a three-مفعول فعل, the second and third مفعولان were originally:',
          options: ['مبتدأ وخبر', 'فاعل ونائبه', 'حال وتمييز', 'مضاف ومضاف إليه'],
          correct: 0,
        },
        {
          title: 'الاسم المؤول',
          kind: 'mcq',
          prompt: 'An اسم مؤول can:',
          options: ['يسد مسد مفعولي فعل القلب', 'يحل محل الفاعل فقط', 'يكون حرفًا لا اسمًا', 'لا يقع بعد أفعال القلوب أبدًا'],
          correct: 0,
        },
        {
          title: 'واعلموا أن الله مع المتقين',
          kind: 'mcq',
          prompt: '﴿وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ﴾ — what يسد مسد the two مفعولان of اعْلَمُوا?',
          options: ['أن الله مع المتقين (اسم مؤول)', 'الله وحده', 'المتقين وحده', 'لا شيء يسد مسدهما'],
          correct: 0,
        },
        {
          title: 'والله يشهد إن المنافقين لكاذبون',
          kind: 'mcq',
          prompt: '﴿وَاللَّهُ يَشْهَدُ إِنَّ الْمُنَافِقِينَ لَكَاذِبُونَ﴾ — what يسد مسد the two مفعولان of يَشْهَدُ?',
          options: ['الجملة بعده', 'اسم مؤول', 'مفعول مطلق', 'حال منصوب'],
          correct: 0,
        },
        {
          title: 'جعل مشترك',
          kind: 'mcq',
          prompt: 'جَعَلَ appears in both the lists of:',
          options: ['أفعال الظن وأفعال التحويل', 'أفعال اليقين وأفعال التحويل', 'اللازم والمتعدي', 'التعليق والإلغاء'],
          correct: 0,
        },
        {
          title: 'وهب مشترك',
          kind: 'mcq',
          prompt: 'وَهَبَ appears in both the lists of:',
          options: ['أفعال الظن وأفعال التحويل', 'أفعال اليقين والجارحة', 'اللازم والمتعدي', 'التعليق والإلغاء'],
          correct: 0,
        },
        {
          title: 'أفعال التحويل خارج معناها',
          kind: 'mcq',
          prompt: 'أفعال التحويل, outside their original meaning, take:',
          options: ['مفعولاً واحدًا', 'مفعولين دائمًا', 'ثلاثة مفاعيل', 'لا مفعول لها'],
          correct: 0,
        },
        {
          title: 'عدد مفاعيل اتخذ',
          kind: 'mcq',
          prompt: 'The number of مفاعيل of اتَّخَذَ in ﴿وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا﴾:',
          options: ['اثنان', 'واحد', 'ثلاثة', 'لا مفعول له'],
          correct: 0,
        },
        {
          title: 'ما لا يكون فعلاً ذا ثلاثة مفاعيل',
          kind: 'mcq',
          prompt: 'A فعل taking three مفاعيل can never be:',
          options: ['فعل تحويل أو فعل جارحة', 'فعل قلب', 'أرى أو ما شابهه', 'متعديًا'],
          correct: 0,
        },
        {
          title: 'وجه الشبه بين المفعولين',
          kind: 'mcq',
          prompt: 'What do the مفعولان of a فعل قلب share with the second and third مفعولان of a فعل like أَرَى?',
          options: ['Both were originally مبتدأ وخبر', 'Neither can ever be deleted', 'Neither can precede the فعل', 'There is no similarity between them'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا﴾',
          kind: 'tarkeeb',
          instruction: 'Classify اتَّخَذَ and identify its two مفعولين.',
          sentence: 'وَاتَّخَذَ اللَّهُ إِبْرَاهِيمَ خَلِيلًا',
          translation: 'And Allah took Abraham as a devoted friend.',
          cells: ['اتَّخَذَ', 'اللَّهُ', 'إِبْرَاهِيمَ', 'خَلِيلًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'أفعال التحويل' },
              { start: 2, end: 2, role: 'مفعول أول' },
              { start: 3, end: 3, role: 'مفعول ثانٍ' },
            ] },
          ],
          distractors: ['أفعال القلب', 'أفعال الجارحة'],
        },
        {
          title: 'تركيب: ﴿إِنِّي تَرَكْتُ مِلَّةَ قَوْمٍ لَا يُؤْمِنُونَ بِاللَّهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify تَرَكْتُ here: بمعنى التحويل or خارج معناه؟ Then identify its مفعول.',
          sentence: 'إِنِّي تَرَكْتُ مِلَّةَ قَوْمٍ لَا يُؤْمِنُونَ بِاللَّهِ',
          translation: 'Indeed, I have left the religion of a people who do not believe in Allah.',
          cells: ['إِنِّي', 'تَرَكْتُ', 'مِلَّةَ', 'قَوْمٍ', 'لَا', 'يُؤْمِنُونَ', 'بِاللَّهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'خارج معنى التحويل' },
              { start: 2, end: 3, role: 'مفعول واحد' },
            ] },
          ],
          distractors: ['بمعنى التحويل', 'مفعولان'],
        },
        {
          title: 'تركيب: ﴿ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify يُرَدُّ here: بمعنى التحويل or خارج معناه؟',
          sentence: 'ثُمَّ يُرَدُّ إِلَىٰ رَبِّهِ',
          translation: 'Then he is returned to his Lord.',
          cells: ['يُرَدُّ', 'إِلَىٰ', 'رَبِّهِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'خارج معنى التحويل' },
            ] },
          ],
          distractors: ['بمعنى التحويل'],
        },
        {
          title: 'تركيب: ﴿وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify جَعَلَ here: بمعنى التحويل or خارج معناه؟ Then identify its مفعول.',
          sentence: 'وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ',
          translation: 'And He made for you hearing, sight, and hearts.',
          cells: ['جَعَلَ', 'لَكُمُ', 'السَّمْعَ', 'وَالْأَبْصَارَ', 'وَالْأَفْئِدَةَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'خارج معنى التحويل' },
              { start: 2, end: 4, role: 'مفعول واحد' },
            ] },
          ],
          distractors: ['بمعنى التحويل', 'مفعولان'],
        },
        {
          title: 'تركيب: ﴿كَذَٰلِكَ يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Classify يُري: فعل قلب or فعل تحويل؟ Then identify its second and third مفعولين.',
          sentence: 'كَذَٰلِكَ يُرِيهِمُ اللَّهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ',
          translation: 'Thus Allah shows them their deeds as regrets.',
          cells: ['يُرِيهِمُ', 'اللَّهُ', 'أَعْمَالَهُمْ', 'حَسَرَاتٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'فعل قلب' },
              { start: 2, end: 2, role: 'مفعول ثانٍ' },
              { start: 3, end: 3, role: 'مفعول ثالث' },
            ] },
          ],
          distractors: ['فعل تحويل', 'مفعول أول'],
        },
        {
          title: 'تركيب: ﴿وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ﴾',
          kind: 'tarkeeb',
          instruction: 'اعْلَمُوا needs two مفاعيل. What stands in for both of them here?',
          sentence: 'وَاعْلَمُوا أَنَّ اللَّهَ مَعَ الْمُتَّقِينَ',
          translation: 'And know that Allah is with the righteous.',
          cells: ['اعْلَمُوا', 'أَنَّ', 'اللَّهَ', 'مَعَ', 'الْمُتَّقِينَ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 4, role: 'اسم مؤول يسد مسد المفعولين' },
            ] },
          ],
          distractors: ['جملة', 'مفعول واحد'],
        },
        {
          title: 'تركيب: ﴿وَاللَّهُ يَشْهَدُ إِنَّ الْمُنَافِقِينَ لَكَاذِبُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'يَشْهَدُ needs two مفاعيل. What stands in for both of them here?',
          sentence: 'وَاللَّهُ يَشْهَدُ إِنَّ الْمُنَافِقِينَ لَكَاذِبُونَ',
          translation: 'And Allah testifies that the hypocrites are liars.',
          cells: ['اللَّهُ', 'يَشْهَدُ', 'إِنَّ', 'الْمُنَافِقِينَ', 'لَكَاذِبُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 4, role: 'جملة تسد مسد المفعولين' },
            ] },
          ],
          distractors: ['اسم مؤول', 'مفعول واحد'],
        },
      ],
    },

    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'التعليق والإلغاء',
      subtitle: 'Suspension and Cancellation — how a قلب فعل loses its لفظي government',
      concepts: [
        {
          heading: 'التعليق: العمل محلاً لا لفظاً',
          lines: [
            { html: `When a <bdi>جُمْلَة</bdi> stands in the place of the two مفعولين of a فعل قلب, the فعل still operates on it <bdi>مَحَلًّا</bdi> (in grammatical position) but not <bdi>لَفْظًا</bdi> (in wording) — this suspension of the wording-level operation is called <bdi>التَّعْلِيق</bdi>.`, list: false },
            { html: `The جملة itself is then called a <bdi>جُمْلَةٌ مُعَلَّقٌ عَنْهَا الْعَمَل</bdi> (a جملة from which the operation is suspended).`, list: false },
          ],
          exercise: {
            prompt: `A فعل قلب's مفعولان are replaced by a whole جملة, and التعليق applies. Does the فعل still govern that جملة at all?`,
            kind: 'mcq',
            options: ['Yes — محلاً, but not لفظًا', 'No — it does not operate on it at all', 'Yes — both لفظًا and محلاً together', "It can't be known until the فعل is parsed"],
            correct: 0,
          },
        },
        {
          heading: 'ما يقبل التعليق من الأفعال',
          lines: [
            { html: `التعليق isn't limited to أفعال القلوب. It's also accepted by every فعل resembling them — any فعل indicating <bdi>إِخْبَار</bdi> (informing) or <bdi>اسْتِفْهَام</bdi> (asking):`, list: false },
            { table: { headers: ['Example', 'Why'], rows: [
              ['﴿لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا﴾', 'فعل إخبار'],
              ['﴿سَلْهُمْ أَيُّهُمْ بِذَٰلِكَ زَعِيمٌ﴾', 'فعل استفهام'],
            ] } },
            { html: `Even a فعل that normally takes only ONE مفعول can be معلَّق, so long as the جملة after it opens with استفهام: ﴿فَلْيَنْظُرْ أَيُّهَا أَزْكَىٰ طَعَامًا﴾.`, list: false },
          ],
          exercise: {
            prompt: `يَنْظُرُ normally takes only one مفعول, yet ﴿فَلْيَنْظُرْ أَيُّهَا أَزْكَىٰ طَعَامًا﴾ shows it suspended (معلَّق) before a whole جملة. What licenses treating a single-مفعول فعل this way؟`,
            kind: 'mcq',
            options: ['That the جملة after it opens with استفهام', 'That ينظر has permanently become one of أفعال القلوب', 'That the جملة after it is a منسوخة جملة اسمية', "Nothing justifies that — it's an anomalous exception"],
            correct: 0,
          },
        },
        {
          heading: 'المعلِّقات السبع',
          lines: [
            { html: `Seven items are known to suspend a فعل قلب's لفظي operation (<bdi>الْمُعَلِّقَات</bdi>):`, list: false },
            { table: { title: 'المعلِّقات السبع', headers: ['#', 'المعلِّق', 'Example'], rows: [
              ['1', 'إِنْ النافية', '﴿وَتَظُنُّونَ إِنْ لَبِثْتُمْ إِلَّا قَلِيلًا﴾'],
              ['2', 'مَا النافية', '﴿لَقَدْ عَلِمْتَ مَا أَنْزَلَ هَٰؤُلَاءِ إِلَّا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ﴾'],
              ['3', 'لَامُ الِابْتِدَاء', '﴿وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ مَا لَهُ فِي الْآخِرَةِ مِنْ خَلَاقٍ﴾'],
              ['4', 'اللَّامُ الْمُزَحْلَقَة', '﴿قَدْ نَعْلَمُ إِنَّهُ لَيَحْزُنُكَ الَّذِي يَقُولُونَ﴾'],
              ['5', 'لَعَلَّ', '﴿وَإِنْ أَدْرِي لَعَلَّهُ فِتْنَةٌ﴾'],
              ['6', 'حرف/اسم الِاسْتِفْهَام', '﴿لَنَبْلُوَنَّ أَأَشْكُرُ أَمْ أَكْفُرُ﴾ / ﴿وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنْقَلَبٍ يَنْقَلِبُونَ﴾'],
              ['7', 'لَامُ جَوَابِ الْقَسَم', 'وَلَقَدْ عَلِمْتُ لَتَأْتِيَنَّ مَنِيَّتِي'],
            ] } },
          ],
          exercise: {
            prompt: `In ﴿قَدْ نَعْلَمُ إِنَّهُ لَيَحْزُنُكَ الَّذِي يَقُولُونَ﴾, which معلِّق suspends نَعْلَمُ's لفظي operation؟`,
            kind: 'mcq',
            options: ['اللام المزحلقة', 'إن النافية', 'لعل', 'لام جواب القسم'],
            correct: 0,
          },
        },
        {
          heading: 'لماذا لا يعمل الفعل فيما له صدر الكلام',
          lines: [
            { html: `In ﴿وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنْقَلَبٍ يَنْقَلِبُونَ﴾, <bdi>أَيَّ مُنْقَلَبٍ</bdi> looks like it could be a <bdi>مَعْمُول</bdi> of <bdi>سَيَعْلَمُ</bdi> — but it isn't.`, list: false },
            { html: `<bdi>الِاسْتِفْهَام</bdi> has <bdi>صَدْرُ الْكَلَام</bdi> (the right to open its own sentence), so nothing before it may govern it; it is <bdi>مَنْصُوب</bdi> instead by the فعل that comes AFTER it, <bdi>يَنْقَلِبُونَ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `أَيَّ مُنْقَلَبٍ in ﴿وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنْقَلَبٍ يَنْقَلِبُونَ﴾ is منصوب by which فعل؟`,
            kind: 'mcq',
            options: ['يَنْقَلِبُونَ — the فعل after it', 'سَيَعْلَمُ — the فعل before it', 'Both أفعال together', 'No ناصب at all — it is مرفوع'],
            correct: 0,
          },
        },
        {
          heading: 'الإلغاء: إعمال أم إلغاء؟',
          lines: [
            { html: `<bdi>الْإِلْغَاء</bdi> cancels a فعل قلب's operation both <bdi>لَفْظًا</bdi> AND <bdi>مَحَلًّا</bdi> — unlike التعليق, which only suspends the لفظي side.`, list: false },
            { table: { headers: ['Preferred', 'Condition', 'Example'], rows: [
              ['الْإِعْمَال (letting the فعل operate)', 'فعل sits BETWEEN its مفعولين', 'مُحَمَّدًا عَلِمْتُ صَادِقًا'],
              ['الْإِلْغَاء', 'فعل comes AFTER its مفاعيل', 'مُحَمَّدٌ صَادِقٌ عَلِمْتُ'],
            ] } },
          ],
          exercise: {
            prompt: `مُحَمَّدٌ صَادِقٌ عَلِمْتُ places عَلِمْتُ AFTER both مفعولين. Which is preferred here, الإعمال or الإلغاء؟`,
            kind: 'mcq',
            options: ['الإلغاء', 'الإعمال', 'التعليق', 'Both are forbidden here'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the definition of التعليق?',
          options: ["Suspending the فعل's operation لفظًا but not محلاً, because a معلِّق has entered", "Cancelling the فعل's operation both لفظًا and محلاً", 'Deleting both مفعولي الفعل together', 'Converting the فعل to المبني للمجهول'],
          correct: 0,
        },
        {
          q: 'A جملة from which a فعل\'s operation is suspended is called:',
          options: ['جملة معلَّق عنها العمل', 'جملة مسدودة', 'جملة ملغاة', 'جملة منسوخة'],
          correct: 0,
        },
        {
          q: 'How many المعلِّقات were mentioned?',
          options: ['سبعة', 'ستة', 'ثمانية', 'خمسة'],
          correct: 0,
        },
        {
          q: '﴿وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنْقَلَبٍ يَنْقَلِبُونَ﴾ — what makes أَيَّ مُنْقَلَبٍ منصوب?',
          options: ['يَنْقَلِبُونَ — the فعل after it', 'سَيَعْلَمُ — the فعل before it', 'الَّذِينَ — the اسم الموصول', 'No ناصب at all — it is مرفوع'],
          correct: 0,
        },
        {
          q: 'What is the definition of الإلغاء?',
          options: ["Cancelling the فعل's operation both لفظًا and محلاً together", "Suspending the فعل's operation لفظًا only", 'Deleting the فعل from the جملة', 'Fronting the مفعول before the فاعل'],
          correct: 0,
        },
        {
          q: 'مُحَمَّدًا عَلِمْتُ صَادِقًا — which of the two is preferred here?',
          options: ['الإعمال', 'الإلغاء', 'التعليق', 'لا شيء منهما'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'ماذا يبطل التعليق؟',
          kind: 'mcq',
          prompt: 'التعليق suspends the operation of the فعل:',
          options: ['لفظًا فقط، لا محلاً', 'محلاً فقط، لا لفظًا', 'لفظًا ومحلاً معًا', 'لا يبطل شيئًا'],
          correct: 0,
        },
        {
          title: 'أفعال شبيهة بأفعال القلوب',
          kind: 'mcq',
          prompt: 'أفعال الإخبار والاستفهام that resemble أفعال القلوب:',
          options: ['تقبل التعليق مثلها', 'لا تقبل التعليق أبدًا', 'لا تكون إلا لازمة', 'لا تقبل إلا الإلغاء'],
          correct: 0,
        },
        {
          title: 'سلهم أيهم بذلك زعيم',
          kind: 'mcq',
          prompt: '﴿سَلْهُمْ أَيُّهُمْ بِذَٰلِكَ زَعِيمٌ﴾ — سَلْ here is a فعل:',
          options: ['استفهام يقبل التعليق', 'قلب من أفعال اليقين', 'تحويل', 'لازم لا يتعدى'],
          correct: 0,
        },
        {
          title: 'فلينظر أيها أزكى طعاما',
          kind: 'mcq',
          prompt: '﴿فَلْيَنْظُرْ أَيُّهَا أَزْكَىٰ طَعَامًا﴾ — how is يَنْظُرْ عُلِّق even though it takes only one مفعول?',
          options: ['Because the جملة after it is استفهامية', "Because it's actually a فعل قلب", "Because it's a فعل تحويل", 'Because what follows is a منسوخة جملة اسمية'],
          correct: 0,
        },
        {
          title: 'وتظنون إن لبثتم',
          kind: 'mcq',
          prompt: '﴿وَتَظُنُّونَ إِنْ لَبِثْتُمْ إِلَّا قَلِيلًا﴾ — the معلِّق here is:',
          options: ['إن النافية', 'ما النافية', 'لام الابتداء', 'لعل'],
          correct: 0,
        },
        {
          title: 'لقد علمت ما أنزل هؤلاء',
          kind: 'mcq',
          prompt: '﴿لَقَدْ عَلِمْتَ مَا أَنْزَلَ هَٰؤُلَاءِ إِلَّا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ﴾ — the معلِّق here is:',
          options: ['ما النافية', 'إن النافية', 'اللام المزحلقة', 'لام جواب القسم'],
          correct: 0,
        },
        {
          title: 'ولقد علموا لمن اشتراه',
          kind: 'mcq',
          prompt: '﴿وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ مَا لَهُ فِي الْآخِرَةِ مِنْ خَلَاقٍ﴾ — the معلِّق here is:',
          options: ['لام الابتداء', 'اللام المزحلقة', 'لعل', 'الاستفهام'],
          correct: 0,
        },
        {
          title: 'قد نعلم إنه ليحزنك',
          kind: 'mcq',
          prompt: '﴿قَدْ نَعْلَمُ إِنَّهُ لَيَحْزُنُكَ الَّذِي يَقُولُونَ﴾ — the معلِّق here is:',
          options: ['اللام المزحلقة', 'لام الابتداء', 'ما النافية', 'لام جواب القسم'],
          correct: 0,
        },
        {
          title: 'وإن أدري لعله فتنة',
          kind: 'mcq',
          prompt: '﴿وَإِنْ أَدْرِي لَعَلَّهُ فِتْنَةٌ﴾ — the معلِّق here is:',
          options: ['لعل', 'إن النافية', 'الاستفهام', 'لام الابتداء'],
          correct: 0,
        },
        {
          title: 'لنبلونّ أأشكر أم أكفر',
          kind: 'mcq',
          prompt: '﴿لَنَبْلُوَنَّ أَأَشْكُرُ أَمْ أَكْفُرُ﴾ — the معلِّق here is:',
          options: ['حرف الاستفهام', 'لعل', 'ما النافية', 'لام جواب القسم'],
          correct: 0,
        },
        {
          title: 'ولقد علمت لتأتينّ منيتي',
          kind: 'mcq',
          prompt: 'وَلَقَدْ عَلِمْتُ لَتَأْتِيَنَّ مَنِيَّتِي — the معلِّق here is:',
          options: ['لام جواب القسم', 'لام الابتداء', 'اللام المزحلقة', 'ما النافية'],
          correct: 0,
        },
        {
          title: 'صدر الكلام',
          kind: 'mcq',
          prompt: 'Why is أَيَّ مُنْقَلَبٍ not parsed as a معمول of سَيَعْلَمُ?',
          options: ['Because الاستفهام has صدر الكلام', 'Because سيعلم is a فعل لازم', 'Because أي منقلب is مبني, not معرب', 'Because سيعلم is a فعل أمر'],
          correct: 0,
        },
        {
          title: 'الإلغاء يخالف التعليق',
          kind: 'mcq',
          prompt: 'الإلغاء differs from التعليق in that it:',
          options: ['It cancels the عمل both لفظًا and محلاً together, not just لفظًا', 'It does not cancel the عمل at all', 'It is specific to أفعال التحويل only', 'It only enters upon الجملة الاسمية'],
          correct: 0,
        },
        {
          title: 'محمدٌ صادقٌ علمتُ',
          kind: 'mcq',
          prompt: 'مُحَمَّدٌ صَادِقٌ عَلِمْتُ — why is الإلغاء preferred here?',
          options: ['Because the فعل comes after both مفعولين, not between them', 'Because the فعل comes before both مفعولين', 'Because the فعل is مبني للمجهول', 'Because the جملة is استفهامية'],
          correct: 0,
        },
        {
          title: 'محمداً علمتُ صادقاً',
          kind: 'mcq',
          prompt: 'مُحَمَّدًا عَلِمْتُ صَادِقًا — why is الإعمال preferred here?',
          options: ['Because the فعل falls between its two مفعولين', 'Because the فعل falls after its two مفعولين', 'Because the جملة is معلَّقة', 'Because the فعل is a فعل تحويل'],
          correct: 0,
        },
        {
          title: 'تعليق فعل بمفعول واحد',
          kind: 'mcq',
          prompt: 'Can a single-مفعول فعل accept التعليق without being one of أفعال القلوب at all?',
          options: ['Yes, if the جملة after it opens with استفهام', 'No, التعليق is specific to أفعال المفعولين only', 'Yes, but on condition that the فعل be an أمر', 'It never accepts it under any circumstance'],
          correct: 0,
        },
        {
          title: 'ما الأفعال التي تقبل التعليق؟',
          kind: 'mcq',
          prompt: 'Which أفعال accept التعليق alongside أفعال القلوب?',
          options: ['Every فعل indicating إخبار or استفهام', 'كل فعل لازم', 'كل فعل تحويل فقط', 'كل فعل ماضٍ'],
          correct: 0,
        },
        {
          title: 'التعليق والإلغاء خاصان بماذا؟',
          kind: 'mcq',
          prompt: 'التعليق and الإلغاء are both specific to:',
          options: ['أفعال القلوب وما شابهها', 'الأفعال اللازمة فقط', 'أفعال الأمر فقط', 'الحروف الناسخة'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿وَتَظُنُّونَ إِنْ لَبِثْتُمْ إِلَّا قَلِيلًا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which معلِّق suspends تَظُنُّونَ.',
          sentence: 'وَتَظُنُّونَ إِنْ لَبِثْتُمْ إِلَّا قَلِيلًا',
          translation: 'And you assume that you had remained only a little.',
          cells: ['تَظُنُّونَ', 'إِنْ', 'لَبِثْتُمْ', 'إِلَّا', 'قَلِيلًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
              { start: 1, end: 1, role: 'إن النافية' },
            ] },
          ],
          distractors: ['ما النافية', 'لعل'],
        },
        {
          title: 'تركيب: ﴿لَقَدْ عَلِمْتَ مَا أَنْزَلَ هَٰؤُلَاءِ إِلَّا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which معلِّق suspends عَلِمْتَ.',
          sentence: 'لَقَدْ عَلِمْتَ مَا أَنْزَلَ هَٰؤُلَاءِ إِلَّا رَبُّ السَّمَاوَاتِ وَالْأَرْضِ',
          translation: 'You have already known that none has sent these down except the Lord of the heavens and earth.',
          cells: ['عَلِمْتَ', 'مَا', 'أَنْزَلَ', 'هَٰؤُلَاءِ', 'إِلَّا', 'رَبُّ', 'السَّمَاوَاتِ', 'وَالْأَرْضِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
              { start: 1, end: 1, role: 'ما النافية' },
            ] },
          ],
          distractors: ['إن النافية', 'اللام المزحلقة'],
        },
        {
          title: 'تركيب: ﴿وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ مَا لَهُ فِي الْآخِرَةِ مِنْ خَلَاقٍ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which معلِّق suspends عَلِمُوا.',
          sentence: 'وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ مَا لَهُ فِي الْآخِرَةِ مِنْ خَلَاقٍ',
          translation: 'And they had already known that whoever buys it would have no share in the Hereafter.',
          cells: ['عَلِمُوا', 'لَمَنِ', 'اشْتَرَاهُ', 'مَا', 'لَهُ', 'فِي', 'الْآخِرَةِ', 'مِنْ', 'خَلَاقٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
              { start: 1, end: 1, role: 'لام الابتداء' },
            ] },
          ],
          distractors: ['اللام المزحلقة', 'ما النافية'],
        },
        {
          title: 'تركيب: ﴿قَدْ نَعْلَمُ إِنَّهُ لَيَحْزُنُكَ الَّذِي يَقُولُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which معلِّق suspends نَعْلَمُ.',
          sentence: 'قَدْ نَعْلَمُ إِنَّهُ لَيَحْزُنُكَ الَّذِي يَقُولُونَ',
          translation: 'We already know that what they say grieves you.',
          cells: ['نَعْلَمُ', 'إِنَّهُ', 'لَيَحْزُنُكَ', 'الَّذِي', 'يَقُولُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
              { start: 2, end: 2, role: 'اللام المزحلقة' },
            ] },
          ],
          distractors: ['لام الابتداء', 'لعل'],
        },
        {
          title: 'تركيب: ﴿وَإِنْ أَدْرِي لَعَلَّهُ فِتْنَةٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which معلِّق suspends أَدْرِي.',
          sentence: 'وَإِنْ أَدْرِي لَعَلَّهُ فِتْنَةٌ',
          translation: 'And I do not know; perhaps it is a trial for you.',
          cells: ['أَدْرِي', 'لَعَلَّهُ', 'فِتْنَةٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
              { start: 1, end: 1, role: 'لعل' },
            ] },
          ],
          distractors: ['إن النافية', 'ما النافية'],
        },
        {
          title: 'تركيب: ﴿لَنَبْلُوَنَّ أَأَشْكُرُ أَمْ أَكْفُرُ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify which معلِّق suspends لَنَبْلُوَنَّ.',
          sentence: 'لَنَبْلُوَنَّ أَأَشْكُرُ أَمْ أَكْفُرُ',
          translation: 'We will surely test [him to see] whether he is grateful or ungrateful.',
          cells: ['لَنَبْلُوَنَّ', 'أَأَشْكُرُ', 'أَمْ', 'أَكْفُرُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
              { start: 1, end: 1, role: 'حرف الاستفهام' },
            ] },
          ],
          distractors: ['لعل', 'ما النافية'],
        },
        {
          title: 'تركيب: وَلَقَدْ عَلِمْتُ لَتَأْتِيَنَّ مَنِيَّتِي',
          kind: 'tarkeeb',
          instruction: 'Identify which معلِّق suspends عَلِمْتُ.',
          sentence: 'وَلَقَدْ عَلِمْتُ لَتَأْتِيَنَّ مَنِيَّتِي',
          translation: 'And I have already known that my death will surely come to me.',
          cells: ['عَلِمْتُ', 'لَتَأْتِيَنَّ', 'مَنِيَّتِي'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
              { start: 1, end: 1, role: 'لام جواب القسم' },
            ] },
          ],
          distractors: ['اللام المزحلقة', 'لام الابتداء'],
        },
        {
          title: 'تركيب: ﴿لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا﴾',
          kind: 'tarkeeb',
          instruction: 'Is لِيَبْلُوَكُمْ an original فعل قلب, or a resembling فعل (إخبار/استفهام) that has accepted التعليق؟',
          sentence: 'لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا',
          translation: 'That He may test you as to which of you is best in deed.',
          cells: ['لِيَبْلُوَكُمْ', 'أَيُّكُمْ', 'أَحْسَنُ', 'عَمَلًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'فعل إخبار مشابه' },
            ] },
          ],
          distractors: ['فعل قلب أصلي', 'فعل استفهام مشابه'],
        },
        {
          title: 'تركيب: ﴿سَلْهُمْ أَيُّهُمْ بِذَٰلِكَ زَعِيمٌ﴾',
          kind: 'tarkeeb',
          instruction: 'Is سَلْهُمْ an original فعل قلب, or a resembling فعل (إخبار/استفهام)؟',
          sentence: 'سَلْهُمْ أَيُّهُمْ بِذَٰلِكَ زَعِيمٌ',
          translation: 'Ask them which of them, for that, is responsible.',
          cells: ['سَلْهُمْ', 'أَيُّهُمْ', 'بِذَٰلِكَ', 'زَعِيمٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'فعل استفهام مشابه' },
            ] },
          ],
          distractors: ['فعل قلب أصلي', 'فعل إخبار مشابه'],
        },
        {
          title: 'تركيب: ﴿فَلْيَنْظُرْ أَيُّهَا أَزْكَىٰ طَعَامًا﴾',
          kind: 'tarkeeb',
          instruction: 'يَنْظُرْ normally takes one مفعول, yet a whole استفهامية جملة follows it here. Is this تعليق, إعمال, or إلغاء؟',
          sentence: 'فَلْيَنْظُرْ أَيُّهَا أَزْكَىٰ طَعَامًا',
          translation: 'So let him look to which is the purest food.',
          cells: ['يَنْظُرْ', 'أَيُّهَا', 'أَزْكَىٰ', 'طَعَامًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'تعليق' },
            ] },
          ],
          distractors: ['إلغاء', 'إعمال'],
        },
        {
          title: 'تركيب: مُحَمَّدًا عَلِمْتُ صَادِقًا',
          kind: 'tarkeeb',
          instruction: 'عَلِمْتُ falls between its two مفعولين here. Is الإعمال or الإلغاء preferred؟',
          sentence: 'مُحَمَّدًا عَلِمْتُ صَادِقًا',
          translation: 'Muhammad, I knew [to be] truthful.',
          cells: ['مُحَمَّدًا', 'عَلِمْتُ', 'صَادِقًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'الإعمال' },
            ] },
          ],
          distractors: ['الإلغاء', 'التعليق'],
        },
        {
          title: 'تركيب: مُحَمَّدٌ صَادِقٌ عَلِمْتُ',
          kind: 'tarkeeb',
          instruction: 'عَلِمْتُ falls after both مفعولين here. Is الإعمال or الإلغاء preferred؟',
          sentence: 'مُحَمَّدٌ صَادِقٌ عَلِمْتُ',
          translation: 'Muhammad [is] truthful, I knew.',
          cells: ['مُحَمَّدٌ', 'صَادِقٌ', 'عَلِمْتُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 2, role: 'الإلغاء' },
            ] },
          ],
          distractors: ['الإعمال', 'التعليق'],
        },
        {
          title: 'تركيب: ﴿وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنْقَلَبٍ يَنْقَلِبُونَ﴾',
          kind: 'tarkeeb',
          instruction: 'أَيَّ مُنْقَلَبٍ looks like a معمول of سَيَعْلَمُ but is not — identify what governs it instead.',
          sentence: 'وَسَيَعْلَمُ الَّذِينَ ظَلَمُوا أَيَّ مُنْقَلَبٍ يَنْقَلِبُونَ',
          translation: 'And those who have wronged are going to know to what return they will return.',
          cells: ['سَيَعْلَمُ', 'الَّذِينَ', 'ظَلَمُوا', 'أَيَّ', 'مُنْقَلَبٍ', 'يَنْقَلِبُونَ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 4, role: 'له صدر الكلام' },
            ] },
          ],
          distractors: ['تعليق', 'مفعول به'],
        },
      ],
    },
  ],
};

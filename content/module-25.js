// Module 25 — الخبر والمفعول المطلق (The Predicate, and the Absolute Object)
//
// Source: app-lessons/127-al-khabar.md (l1/l2, split part 1 / part 2 the
// same way Module 03 split 018 and Module 07 split 028) and
// app-lessons/128-al-mafool-al-mutlaq.md (l3 alone). Per COURSE-MAP.md's
// Module 25 proposal — chapter المعمول وغير المعمول, closing out the eight
// مرفوعات (الفاعل, نائب الفاعل, المبتدأ, الخبر) already surveyed by Module
// 24 and opening القسم الثاني: المنصوب with its first مفعول.
//
// Concept bodies use the lines[]/box/table/tarkeebDiagram shape established
// by Module 01 and matched by every module since. Bank تركيب items use the
// flat words[]/labels[]/distractors[] schema, matching this course's
// established shape. l1's تركيب hits the full 6-item norm (127's وجوب/جواز
// حذف material is unusually rich in short, cleanly parsed examples); l2
// carries 4, reflecting how much thinner 127's مطابقة/تضمن الشرط material
// is in genuinely multi-word, single-reading worked examples once the
// discursive Careful-box points are set aside — the same discipline every
// prior module applied to its own thin spots. l3 hits the full 6-item norm,
// since 128 is unusually rich in short, cleanly parsed آيات illustrating
// each of المفعول المطلق's forms, substitutes, and نيابة categories.
export default {
  id: '25',
  title: 'الخبر والمفعول المطلق',
  heading: 'المعمول وغير المعمول',
  subheading: 'الاسم والفعل',
  blurb: 'الخبر — how many a مبتدأ can take, where it sits, when it must or may vanish, and how it agrees — then المفعول المطلق, the مصدر that reinforces, specifies, or counts its فعل, and can even stand in for a dropped one.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الخبر: تعدده وترتيبه وحذفه',
      subtitle: 'The Predicate — تعدد الخبر, ترتيب المبتدأ والخبر, and where حذف الخبر is وجوب or جواز',
      sourceRef: 'app-lessons/127 (part 1)',
      concepts: [
        {
          heading: 'تعريف الخبر',
          lines: [
            { html: `الخبر is the fourth of the eight مرفوعات and the natural partner of <bdi>المبتدأ</bdi> — everything about it turns on this single relationship.`, list: false },
            { box: { title: 'Definition', lines: [`الخَبَرُ: مُخْبَرٌ بِهِ`] } },
            { html: `الخبر is what is predicated of المبتدأ — the "news" itself, as opposed to المبتدأ, the "topic" the news is about.`, list: false },
            { box: { title: 'Example', lines: [`مُحَمَّدٌ رَسولُ اللهِ`] } },
            { html: `<bdi>مُحَمَّدٌ</bdi> is <bdi>مُخْبَرٌ عَنْهُ</bdi> — what is being talked about; <bdi>رَسولُ اللهِ</bdi> is <bdi>مُخْبَرٌ بِهِ</bdi>, the actual information conveyed.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `مُحَمَّدٌ رَسولُ اللهِ`,
                translation: `Muhammad is the Messenger of Allah.`,
                cells: [`مُحَمَّدٌ`, `رَسولُ`, `اللهِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مبتدأ` }, { start: 1, end: 1, role: `خبر مرفوع` }, { start: 2, end: 2, role: `مضاف إليه مجرور` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In ﴿مُحَمَّدٌ رَسولُ اللهِ﴾, which word is مُخْبَرٌ بِهِ — the actual news conveyed about المبتدأ؟`,
            kind: 'mcq',
            options: [`رَسولُ اللهِ — the خبر itself`, `مُحَمَّدٌ — the topic being spoken about`, `اللهِ alone`, `Neither word — the sentence has no single خبر`],
            correct: 0,
          },
        },
        {
          heading: 'تعدد الخبر',
          lines: [
            { html: `المبتدأ is not limited to a single خبر.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ يَتَعَدَّدُ الخَبَرُ`] } },
            { html: `a single مبتدأ can take more than one خبر at once, each one adding its own piece of information about the same topic.`, list: false },
            { box: { title: 'Example', lines: [`وَهُوَ الْغَفورُ الْوَدودُ`] } },
            { html: `<bdi>هُوَ</bdi> (مبتدأ) here carries two أخبار back to back: <bdi>الْغَفورُ</bdi> and <bdi>الْوَدودُ</bdi> — each a complete predication in its own right, simply stacked onto the same topic.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَهُوَ الْغَفورُ الْوَدودُ`,
                translation: `And He is the Forgiving, the Loving.`,
                cells: [`هُوَ`, `الْغَفورُ`, `الْوَدودُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مبتدأ` }, { start: 1, end: 1, role: `خبر أول` }, { start: 2, end: 2, role: `خبر ثانٍ` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In ﴿وَهُوَ الْغَفورُ الْوَدودُ﴾, هُوَ is a single مبتدأ. How many خبر does it carry?`,
            kind: 'mcq',
            options: [`Two — الْغَفورُ and الْوَدودُ, stacked onto the same topic`, `One only — الْغَفورُ, with الودود as a separate صفة`, `None — the sentence has no خبر`, `Three, counting هو itself as a خبر`],
            correct: 0,
          },
        },
        {
          heading: 'الترتيب بين المبتدأ والخبر',
          lines: [
            { html: `الخبر's position relative to المبتدأ follows a default order, but that default can be overridden.`, list: false },
            { box: { title: 'Rule', lines: [`الأَصْلُ في الخَبَرِ أَن يَكونَ بَعْدَ المُبْتَدَأِ`] } },
            { html: `the default order is مبتدأ ثم خبر. وَقَدْ يَتَقَدَّمُ — but الخبر can be fronted ahead of its مبتدأ (خبر مقدّم / مبتدأ مؤخّر).`, list: false },
            { box: { title: 'Example', lines: [`لِكُلِّ اَجَلٍ كِتابٌ`] } },
            { html: `<bdi>لِكُلِّ اَجَلٍ</bdi> (جار ومجرور, خبر مقدم) comes first, and <bdi>كِتابٌ</bdi>, المبتدأ, is مؤخّر — the reverse of the default order.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `لِكُلِّ اَجَلٍ كِتابٌ`,
                translation: `For every term there is a decree.`,
                cells: [`لِكُلِّ`, `اَجَلٍ`, `كِتابٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `خبر مقدم (جار ومجرور)` }, { start: 1, end: 1, role: `مضاف إليه` }, { start: 2, end: 2, role: `مبتدأ مؤخر` }] },
                ],
              },
            },
            { box: { title: 'Example', lines: [`لَكاذِبٌ أَنْتَ`] } },
            { html: `<bdi>لَكاذِبٌ</bdi>, strengthened by لام الابتداء, is خبر مقدم; <bdi>أَنْتَ</bdi>, المبتدأ, follows it — the same reversed pattern.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿لِكُلِّ اَجَلٍ كِتابٌ﴾, which word is المبتدأ, and where does it sit relative to الخبر؟`,
            kind: 'mcq',
            options: [`كِتابٌ — it comes after the خبر مقدم لِكُلِّ اَجَلٍ`, `لِكُلِّ — it comes before the خبر`, `اَجَلٍ — it is المبتدأ, مضاف إليه كتاب`, `There is no مبتدأ in this sentence`],
            correct: 0,
          },
        },
        {
          heading: 'وجوب حذف الخبر',
          lines: [
            { html: `وَيَجِبُ حَذْفُ الخَبَرِ in three situations — where, just as with المبتدأ, context makes الخبر's presence not just unnecessary but actually wrong to spell out: (1) إن دلّ عليه جواب القسم, (2) في لولا, (3) إذا كان المبتدأ معطوفًا عليه بواو نصّ في المعية.`, list: false },
            { box: { title: 'Example', lines: [`لَعَمْرُكَ اِنَّهُمْ لَفي سَكْرَتِهِمْ يَعْمَهونَ`] } },
            { html: `أَيْ لَعَمْرُكَ قَسَمي — <bdi>لَعَمْرُكَ</bdi> (مبتدأ) needs a خبر (قَسَمي, "is my oath"), but that خبر is dropped because جواب القسم that follows (إِنَّهُمْ ...) already makes it obvious an oath is being sworn.`, list: false },
            { box: { title: 'Example', lines: [`وَلَوْلا رَهْطُكَ لَرَجَمْناكَ`] } },
            { html: `أَيْ وَلَوْلا رَهْطُكَ مَوْجودٌ — <bdi>رَهْطُكَ</bdi> (مبتدأ after لولا) needs a خبر (مَوْجودٌ, "existing/present"), but لولا's own grammar always drops it; the sentence's whole structure (لولا + اسم مرفوع + جواب) makes موجود automatic and unwritable.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `لَوْلا رَهْطُكَ لَرَجَمْناكَ`,
                translation: `Were it not for your clan, we would have stoned you.`,
                cells: [`لَوْلا`, `رَهْطُكَ`, `لَرَجَمْناكَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف امتناع لوجود` }, { start: 1, end: 1, role: `مبتدأ خبره محذوف وجوبا` }, { start: 2, end: 2, role: `جواب لولا` }] },
                ],
              },
            },
            { html: `When المبتدأ is followed by a وَ that unambiguously means "together with" (نَصٌّ في المَعِيَّةِ, as opposed to an ordinary connective وَ), الخبر after it must be dropped.`, list: false },
            { box: { title: 'Example', lines: [`فَاِنَّكُمْ وَما تَعْبُدونَ`] } },
            { html: `النحاة offer two ways to parse this: (1) الواو بِمَعْنى مَعَ, and وَما تَعْبُدونَ becomes a ظرف مستقر serving as الخبر itself, أَيْ إِنَّكُمْ مَعَ ما تَعْبُدونَ; (2) ما بَعْدَ واوِ المَعِيَّةِ is a مَفْعولٌ مَعَهُ, and الخبر after it is dropped altogether, وَالتَّقْديرُ فَإِنَّكُمْ وَما تَعْبُدونَ مَقْرونانِ. الشاهد often cited for this second reading: <bdi>كُلُّ رَجُلٍ وَضَيْعَتُهُ</bdi> — "every man and his profession", أَيْ كُلُّ رَجُلٍ وَحِرْفَتُهُ مَقْرونانِ — الخبر مقرونان is dropped precisely because واو المعية itself already signals "linked together", making it redundant to spell out.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `كُلُّ رَجُلٍ وَضَيْعَتُهُ`,
                translation: `Every man and his profession [are bound together].`,
                cells: [`كُلُّ`, `رَجُلٍ`, `وَ`, `ضَيْعَتُهُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مبتدأ` }, { start: 1, end: 1, role: `مضاف إليه` }, { start: 2, end: 2, role: `واو المعية` }, { start: 3, end: 3, role: `مفعول معه (والخبر محذوف تقديره: مقرونان)` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `وَلَوْلا رَهْطُكَ لَرَجَمْناكَ never spells out رَهْطُكَ's خبر (مَوْجودٌ). Is that خبر optional to omit, or obligatory to omit؟`,
            kind: 'mcq',
            options: [`Obligatory — لولا's own grammar always drops it`, `Optional — a speaker could include موجود if they wished`, `There is no dropped خبر here at all`, `Obligatory, but only in poetry`],
            correct: 0,
          },
        },
        {
          heading: 'جواز حذف الخبر',
          lines: [
            { html: `Beyond the three obligatory cases above, وَيَجوزُ حَذْفُهُ فيما سِوى ذلك عِنْدَ القَرينَةِ — الخبر may (not must) be dropped elsewhere whenever context makes it recoverable. Two situations are especially common: (1) في جواب الاستفهام, (2) بعد إذا الفجائية.`, list: false },
            { box: { title: 'Example', lines: [`وَلَئِنْ سَاَلْتَهُمْ مَنْ خَلَقَ السَّمٰواتِ وَالْاَرْضَ لَيَقولُنَّ اللهُ`] } },
            { html: `"And if you asked them who created the heavens and the earth, they would surely say, 'Allah.'" أَيِ اللهُ خَلَقَهُنَّ — the full خبر خَلَقَهُنَّ is dropped, since the question itself already supplies exactly what's missing.`, list: false },
            { box: { title: 'Example', lines: [`خَرَجْتُ فَإِذا الأَسَدُ`] } },
            { html: `"I went out, and suddenly, the lion!" أَيْ فَإِذا الأَسَدُ مَوْجودٌ — this same مَوْجودٌ-type خبر (compare زَيْدٌ في البَيْتِ, which doesn't mean "Zayd built the house" but simply "Zayd is [present] in the house") gets dropped constantly after إذا الفجائية, precisely because the "surprise" itself is doing all the communicative work — spelling out موجود would only slow the sentence down.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `خَرَجْتُ فَإِذا الأَسَدُ`,
                translation: `I went out, and suddenly, the lion!`,
                cells: [`خَرَجْتُ`, `فَإِذا`, `الأَسَدُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ماضٍ وفاعله ضمير مستتر` }, { start: 1, end: 1, role: `حرف فجائية` }, { start: 2, end: 2, role: `مبتدأ خبره محذوف جوازا (مَوْجودٌ)` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `اللهُ in ﴿...لَيَقولُنَّ اللهُ﴾ stands with its خبر dropped (أَيِ اللهُ خَلَقَهُنَّ). Is that drop obligatory or merely permitted؟`,
            kind: 'mcq',
            options: [`Merely permitted — جواب الاستفهام makes it recoverable, but doesn't force the drop`, `Obligatory — جواب الاستفهام always forces حذف الخبر`, `There is no dropped خبر here`, `Obligatory, the same way لولا forces it`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الخبر؟`, options: [`مُخْبَرٌ بِهِ — what is predicated of المبتدأ`, `مُخْبَرٌ عَنْهُ — the topic itself`, `A حرف مصدر together with a جملة`, `The description of a موصوف`], correct: 0 },
        { q: `In ﴿وَهُوَ الْغَفورُ الْوَدودُ﴾, هُوَ carries how many خبر؟`, options: [`Two`, `One`, `Three`, `None`], correct: 0 },
        { q: `الأصل في الخبر أن يكون بعد المبتدأ. In ﴿لِكُلِّ اَجَلٍ كِتابٌ﴾, has that default order been kept or reversed؟`, options: [`Reversed — الخبر (لِكُلِّ اَجَلٍ) comes before المبتدأ (كِتابٌ)`, `Kept — المبتدأ comes first as usual`, `There is no مبتدأ in this sentence`, `Reversed, but only because كِتابٌ is نكرة`], correct: 0 },
        { q: `وَلَوْلا رَهْطُكَ لَرَجَمْناكَ leaves رَهْطُكَ's خبر (مَوْجودٌ) unwritten. Is that drop obligatory or optional؟`, options: [`Obligatory — لولا's own grammar always drops it`, `Optional — a speaker may include it if they wish`, `There is no dropped خبر here`, `Obligatory only in Qur'anic Arabic`], correct: 0 },
        { q: `﴿...لَيَقولُنَّ اللهُ﴾ drops اللهُ's خبر (خَلَقَهُنَّ). Is that drop obligatory or merely permitted؟`, options: [`Merely permitted — recoverable from جواب الاستفهام, but not forced`, `Obligatory, the same way لولا forces it`, `There is no dropped خبر here`, `Obligatory only in poetry`], correct: 0 },
        { q: `كُلُّ رَجُلٍ وَضَيْعَتُهُ is read, on one reading, with وَ as واو المعية. What happens to الخبر of كُلُّ رَجُلٍ on that reading؟`, options: [`It is dropped, understood as مقرونان`, `It appears explicitly as مقرونان`, `It becomes the خبر of ضَيْعَتُهُ instead`, `There is no خبر required in this reading`], correct: 0 },
      ],
      bank: [
        { title: `الخبر: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الخبر؟`, options: [`مُخْبَرٌ بِهِ — what is predicated of المبتدأ`, `مُخْبَرٌ عَنْهُ — the topic being spoken about`, `A حرف مصدر together with the جملة after it`, `A meaning tied to a زمان`], correct: 0 },
        { title: `محمد رسول الله: مخبر عنه`, kind: 'mcq', prompt: `In ﴿مُحَمَّدٌ رَسولُ اللهِ﴾, which word is المُخْبَرُ عَنْهُ — the topic being spoken about؟`, options: [`مُحَمَّدٌ`, `رَسولُ`, `اللهِ`, `Neither word — there is no topic here`], correct: 0 },
        { title: `تعدد الخبر: هل يجوز؟`, kind: 'mcq', prompt: `Can a single مبتدأ ever take more than one خبر at once؟`, options: [`Yes — قَدْ يَتَعَدَّدُ الخَبَرُ`, `No — every مبتدأ takes exactly one خبر`, `Only if المبتدأ is مثنى`, `Only if المبتدأ is معرفة`], correct: 0 },
        { title: `وهو الغفور الودود: عدد الأخبار`, kind: 'mcq', prompt: `In ﴿وَهُوَ الْغَفورُ الْوَدودُ﴾, how many separate خبر does هُوَ carry؟`, options: [`Two`, `One`, `Three`, `None`], correct: 0 },
        { title: `الترتيب: الأصل`, kind: 'mcq', prompt: `What is the default (الأصل) order between المبتدأ and الخبر؟`, options: [`المبتدأ ثم الخبر`, `الخبر ثم المبتدأ always`, `Either order, with no default at all`, `المبتدأ and الخبر must be adjacent, with nothing between them`], correct: 0 },
        { title: `خبر مقدم: التقديم جائز`, kind: 'mcq', prompt: `الأصل في الخبر أن يكون بعد المبتدأ. Can الخبر ever be fronted ahead of its مبتدأ؟`, options: [`Yes — وَقَدْ يَتَقَدَّمُ`, `No — الخبر can never precede المبتدأ`, `Only in poetry`, `Only when المبتدأ is نكرة`], correct: 0 },
        { title: `لكل أجل كتاب: أي الكلمتين خبر مقدم؟`, kind: 'mcq', prompt: `In ﴿لِكُلِّ اَجَلٍ كِتابٌ﴾, which phrase is الخبر المقدم؟`, options: [`لِكُلِّ اَجَلٍ`, `كِتابٌ`, `Neither — the sentence has no خبر`, `Both phrases together are one خبر`], correct: 0 },
        { title: `وجوب حذف الخبر: كم موضعا؟`, kind: 'mcq', prompt: `How many situations does this lesson give where حذف الخبر becomes obligatory (وَاجِب), rather than merely permitted؟`, options: [`Three`, `Two`, `Five`, `Seven`], correct: 0 },
        { title: `لعمرك: الخبر المحذوف`, kind: 'mcq', prompt: `﴿لَعَمْرُكَ اِنَّهُمْ لَفي سَكْرَتِهِمْ يَعْمَهونَ﴾ drops the خبر of لَعَمْرُكَ. What situation forces that drop؟`, options: [`إن دلّ عليه جواب القسم`, `لولا`, `واو نصّ في المعية`, `جواب الاستفهام`], correct: 0 },
        { title: `لولا: لماذا يحذف الخبر دائما؟`, kind: 'mcq', prompt: `Why does لولا's own grammar always force حذف الخبر, as in ﴿وَلَوْلا رَهْطُكَ لَرَجَمْناكَ﴾؟`, options: [`The sentence's whole structure (لولا + اسم مرفوع + جواب) makes the خبر (مَوْجودٌ) automatic and unwritable`, `لولا never allows a مبتدأ at all`, `The خبر after لولا is always جملة فعلية`, `لولا only appears with مبني أسماء`], correct: 0 },
        { title: `واو نص في المعية: ماذا يحدث للخبر؟`, kind: 'mcq', prompt: `When المبتدأ is followed by a واو that unambiguously means "together with" (نَصٌّ فِي المَعِيَّةِ), what happens to الخبر after it؟`, options: [`It must be dropped`, `It must be fronted`, `It must agree in number with المبتدأ`, `It becomes مجرور`], correct: 0 },
        { title: `كل رجل وضيعته: القراءة الثانية`, kind: 'mcq', prompt: `In كُلُّ رَجُلٍ وَضَيْعَتُهُ, one reading treats وَ as واو المعية and ضَيْعَتُهُ as مفعول معه. Under that reading, what happens to الخبر of كُلُّ رَجُلٍ؟`, options: [`It is dropped, understood as مقرونان`, `It stays visible as مقرونان`, `It becomes الخبر of ضَيْعَتُهُ instead`, `There is no خبر required in this reading`], correct: 0 },
        { title: `جواز حذف الخبر: متى؟`, kind: 'mcq', prompt: `Beyond the three obligatory cases, when may الخبر be dropped (يجوز, not يجب)؟`, options: [`Wherever context makes it recoverable (عِنْدَ القَرينَةِ)`, `Only in poetry`, `Only after حروف النداء`, `Never — جواز الحذف does not apply to الخبر`], correct: 0 },
        { title: `جواب الاستفهام: اللهُ`, kind: 'mcq', prompt: `﴿...لَيَقولُنَّ اللهُ﴾ leaves اللهُ's خبر (خَلَقَهُنَّ) unspoken. What licenses that drop؟`, options: [`The question itself already supplies exactly what is missing`, `اللهُ can never take a خبر`, `The drop here is obligatory, not merely permitted`, `اللهُ is not really المبتدأ in this sentence`], correct: 0 },
        { title: `إذا الفجائية: خرجت فإذا الأسد`, kind: 'mcq', prompt: `خَرَجْتُ فَإِذا الأَسَدُ leaves الأَسَدُ's خبر (مَوْجودٌ) unspoken. Why does إذا الفجائية make that drop so common؟`, options: [`The surprise itself is doing all the communicative work — spelling out موجود would only slow the sentence down`, `إذا الفجائية always forbids a spoken خبر by rule`, `إذا الفجائية turns الأَسَدُ into a فعل`, `موجود cannot grammatically follow إذا الفجائية`], correct: 0 },
        { title: `زيد في البيت: مقارنة`, kind: 'mcq', prompt: `The lesson compares خَرَجْتُ فَإِذا الأَسَدُ's dropped خبر to زَيْدٌ في البَيْتِ. What does زَيْدٌ في البَيْتِ actually mean؟`, options: [`Zayd is present in the house`, `Zayd built the house`, `Zayd went out of the house`, `Zayd owns the house`], correct: 0 },
        { title: `الحالات الثلاث للوجوب`, kind: 'mcq', prompt: `Which set correctly names the three situations where حذف الخبر is وَاجِب؟`, options: [`جواب القسم، لولا، واو نصّ في المعية`, `جواب الاستفهام، إذا الفجائية، لولا`, `تعدد الخبر، ترتيب الخبر، تقديم الخبر`, `واو المعية، جواب الاستفهام، تعدد الخبر`], correct: 0 },
        { title: `خبر مقدم بلام الابتداء`, kind: 'mcq', prompt: `In لَكاذِبٌ أَنْتَ, لَكاذِبٌ is strengthened by لام الابتداء and comes first. What role does it play relative to أَنْتَ؟`, options: [`خبر مقدم`, `مبتدأ مؤخر`, `مفعول به`, `حال`], correct: 0 },
        {
          title: `تركيب: مُحَمَّدٌ رَسولُ اللهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ﴿مُحَمَّدٌ رَسولُ اللهِ﴾.`,
          source: `مُحَمَّدٌ رَسولُ اللهِ`,
          words: [`مُحَمَّدٌ`, `رَسولُ`, `اللهِ`],
          labels: [`مبتدأ`, `خبر مرفوع`, `مضاف إليه مجرور`],
          distractors: [`خبر مقدم`, `مبتدأ مؤخر`],
        },
        {
          title: `تركيب: وَهُوَ الْغَفورُ الْوَدودُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in ﴿وَهُوَ الْغَفورُ الْوَدودُ﴾, where المبتدأ carries two أخبار.`,
          source: `هُوَ الْغَفورُ الْوَدودُ`,
          words: [`هُوَ`, `الْغَفورُ`, `الْوَدودُ`],
          labels: [`مبتدأ`, `خبر أول`, `خبر ثانٍ`],
          distractors: [`خبر مقدم`, `مضاف إليه`],
        },
        {
          title: `تركيب: لِكُلِّ اَجَلٍ كِتابٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in ﴿لِكُلِّ اَجَلٍ كِتابٌ﴾, where الخبر is fronted.`,
          source: `لِكُلِّ اَجَلٍ كِتابٌ`,
          words: [`لِكُلِّ`, `اَجَلٍ`, `كِتابٌ`],
          labels: [`خبر مقدم (جار ومجرور)`, `مضاف إليه`, `مبتدأ مؤخر`],
          distractors: [`مبتدأ`, `خبر`],
        },
        {
          title: `تركيب: وَلَوْلا رَهْطُكَ لَرَجَمْناكَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ﴿وَلَوْلا رَهْطُكَ لَرَجَمْناكَ﴾, where الخبر is dropped وجوبا.`,
          source: `لَوْلا رَهْطُكَ لَرَجَمْناكَ`,
          words: [`لَوْلا`, `رَهْطُكَ`, `لَرَجَمْناكَ`],
          labels: [`حرف امتناع لوجود`, `مبتدأ خبره محذوف وجوبا`, `جواب لولا`],
          distractors: [`خبر`, `مفعول به`],
        },
        {
          title: `تركيب: كُلُّ رَجُلٍ وَضَيْعَتُهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in كُلُّ رَجُلٍ وَضَيْعَتُهُ, on the reading where وَ is واو المعية.`,
          source: `كُلُّ رَجُلٍ وَضَيْعَتُهُ`,
          words: [`كُلُّ`, `رَجُلٍ`, `وَ`, `ضَيْعَتُهُ`],
          labels: [`مبتدأ`, `مضاف إليه`, `واو المعية`, `مفعول معه (والخبر محذوف تقديره: مقرونان)`],
          distractors: [`خبر`, `حرف عطف`],
        },
        {
          title: `تركيب: خَرَجْتُ فَإِذا الأَسَدُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of خَرَجْتُ فَإِذا الأَسَدُ, where الخبر is dropped جوازا.`,
          source: `خَرَجْتُ فَإِذا الأَسَدُ`,
          words: [`خَرَجْتُ`, `فَإِذا`, `الأَسَدُ`],
          labels: [`فعل ماضٍ وفاعله ضمير مستتر`, `حرف فجائية`, `مبتدأ خبره محذوف جوازا`],
          distractors: [`مفعول به`, `خبر مقدم`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'الخبر: مطابقته والمبتدأ المتضمن معنى الشرط',
      subtitle: 'Agreement and the Conditional المبتدأ — when الخبر must match, and the seven situations that license فَ on الخبر',
      sourceRef: 'app-lessons/127 (part 2)',
      concepts: [
        {
          heading: 'مطابقة الخبر للمبتدأ: قاعدة لا تُطرد',
          lines: [
            { html: `يُطابِقُ الخَبَرُ المُبْتَدَأَ (الخبر agrees with its مبتدأ) — but *only* in specific situations; agreement is not automatic everywhere.`, list: false },
            { box: { title: 'Rule', lines: [`يُطابِقُ الخَبَرُ المُبْتَدَأَ فِي مَواضِعَ مُعَيَّنَةٍ لا فِي كُلِّ خَبَرٍ`] } },
            { html: `Two separate triggers force مطابقة: (1) when الخبر itself contains a ضمير مستتر that must match المبتدأ, (2) when المبتدأ is an اسم إشارة. Outside these two triggers, a جامد خبر with no hidden pronoun does not need to match its مبتدأ in number.`, list: false },
          ],
          exercise: {
            prompt: `الخبر agrees with its مبتدأ only in specific situations, not automatically everywhere. What forces مطابقة؟`,
            kind: 'mcq',
            options: [`A ضمير مستتر inside الخبر, or المبتدأ being an اسم إشارة`, `Every خبر, regardless of its shape`, `Only when المبتدأ is مثنى`, `Only when الخبر is جامد`],
            correct: 0,
          },
        },
        {
          heading: 'السبب الأول: ضمير مستتر في الخبر',
          lines: [
            { html: `إذا كان في الخبر ضمير مستتر — the first trigger for مطابقة.`, list: false },
            { box: { title: 'Example', lines: [`اِنَّهُمْ هُمُ الْمُفْسِدونَ`] } },
            { html: `"Indeed, they are the corrupters." <bdi>المُفْسِدونَ</bdi> (اسم فاعل جمع, carrying a ضمير مستتر هم inside it) must match اسم إنّ (هُمْ) in number — hence المُفْسِدونَ, plural, not the singular المُفْسِدُ.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `اِنَّهُمْ هُمُ الْمُفْسِدونَ`,
                translation: `Indeed, they are the corrupters.`,
                cells: [`إِنَّهُمْ`, `هُمُ`, `الْمُفْسِدونَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `إنّ واسمها (ضمير متصل)` }, { start: 1, end: 1, role: `ضمير فصل` }, { start: 2, end: 2, role: `خبر إنّ مرفوع بالواو` }] },
                ],
              },
            },
            { html: `بِخِلافِ ﴿نَحْنُ فِتْنَةٌ﴾ — "We are a trial." Here <bdi>فِتْنَةٌ</bdi> stays مفرد, even though نَحْنُ is plural — because فِتْنَةٌ is جامد (a plain noun/مصدر, not a مشتق carrying its own hidden ضمير), so there's nothing inside it that needs to agree.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `نَحْنُ فِتْنَةٌ`,
                translation: `We are a trial.`,
                cells: [`نَحْنُ`, `فِتْنَةٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مبتدأ` }, { start: 1, end: 1, role: `خبر` }] },
                ],
              },
            },
            { box: { title: 'Careful', lines: [`لا مُطَابَقَةَ إِلَّا حَيْثُ يوجَدُ ضَمِيرٌ مُسْتَتِرٌ فِي الخَبَرِ يَعودُ إِلَى المُبْتَدَأِ`] } },
            { html: `Agreement is only forced when الخبر itself contains a ضمير مستتر that must match المبتدأ — not as a blanket rule for every خبر.`, list: false },
          ],
          exercise: {
            prompt: `المُفْسِدونَ in ﴿إِنَّهُمْ هُمُ الْمُفْسِدونَ﴾ is plural, matching هُمْ. Why does فِتْنَةٌ in ﴿نَحْنُ فِتْنَةٌ﴾ stay singular despite نَحْنُ being plural؟`,
            kind: 'mcq',
            options: [`فِتْنَةٌ is جامد, with no ضمير مستتر inside it that needs to agree`, `فِتْنَةٌ secretly means the same as نحن`, `نَحْنُ is not really plural in this sentence`, `الخبر never agrees with a جامد مبتدأ`],
            correct: 0,
          },
        },
        {
          heading: 'السبب الثاني: المبتدأ اسم إشارة',
          lines: [
            { html: `إذا كان المبتدأ اسم إشارة — the second, independent trigger for مطابقة.`, list: false },
            { box: { title: 'Example', lines: [`فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ`] } },
            { html: `"So these are two proofs from your Lord." <bdi>ذٰنِكَ</bdi> (اسم إشارة مثنى) forces <bdi>بُرْهانٌ</bdi> — despite being جامد, with no ضمير مستتر issue at all — to still appear as بُرْهانانِ (مثنى), simply to match its اسم إشارة مبتدأ in number. This is a second, independent trigger for مطابقة, distinct from the ضمير مستتر case above.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ`,
                translation: `So these are two proofs from your Lord.`,
                cells: [`ذٰنِكَ`, `بُرْهانانِ`, `مِنْ`, `رَبِّكَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مبتدأ (اسم إشارة)` }, { start: 1, end: 1, role: `خبر مرفوع بالألف` }, { start: 2, end: 2, role: `حرف جر` }, { start: 3, end: 3, role: `اسم مجرور` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `بُرْهانٌ appears as بُرْهانانِ (مثنى) in ﴿فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ﴾, even though it is جامد and carries no ضمير مستتر. What forces that agreement؟`,
            kind: 'mcq',
            options: [`المبتدأ being an اسم إشارة مثنى (ذٰنِكَ) — a second, independent trigger for مطابقة`, `The presence of a hidden ضمير, the same trigger as إنهم هم المفسدون`, `A rule that every خبر must always match its مبتدأ`, `The fact that رَبِّكَ is مجرور`],
            correct: 0,
          },
        },
        {
          heading: 'تضمن المبتدأ معنى الشرط: القاعدة ودخول الفاء',
          lines: [
            { html: `Sometimes المبتدأ itself carries an implicit "if/whoever/whatever" sense, even without a true شرط particle like إنْ.`, list: false },
            { box: { title: 'Rule', lines: [`وَقَدْ يَتَضَمَّنُ المُبْتَدَأُ مَعْنى الشَّرْطِ`] } },
            { html: `When it does, فَ may legitimately enter on الخبر — exactly the way فَ marks جواب الشرط in an ordinary conditional sentence. Seven situations trigger this شرط-like sense in المبتدأ; the first three are: (1) بعد أَمّا, (2) اسم موصول, (3) موصوف بموصول بفعل أو ظرف.`, list: false },
            { box: { title: 'Example', lines: [`فَاَمّا ثَمودُ فَاُهْلِكوا بِالطّاغِيَةِ`] } },
            { html: `"As for Thamūd, they were destroyed by the overwhelming blast." أَمّا itself carries the شرط-like sense that licenses فَ on the جملة that follows it, ثَمودُ فَاُهْلِكوا.`, list: false },
            { box: { title: 'Example', lines: [`الَّذينَ خَسِرُوا اَنْفُسَهُمْ فَهُمْ لا يُؤْمِنونَ`] } },
            { html: `"Those who have lost themselves — they do not believe." <bdi>الَّذينَ</bdi> (اسم موصول), being unspecific about *who exactly*, behaves like "whoever" — triggering فَ on الخبر.`, list: false },
            { box: { title: 'Example', lines: [`اِنَّ الْمَوْتَ الَّذي تَفِرّونَ مِنْهُ فَاِنَّهُ مُلٰقيكُمْ`] } },
            { html: `"Indeed, the death from which you flee will surely meet you." الْمَوْتَ is موصوف بموصول (الَّذي تَفِرّونَ مِنْهُ), the third trigger — the description alone is enough to give الموت a شرط-like sense.`, list: false },
          ],
          exercise: {
            prompt: `الَّذينَ خَسِرُوا اَنْفُسَهُمْ فَهُمْ لا يُؤْمِنونَ places a فَ before هُمْ لا يُؤْمِنونَ. Why is that فَ licensed here, when المبتدأ الَّذينَ carries no true شرط particle؟`,
            kind: 'mcq',
            options: [`الَّذينَ (اسم موصول) is unspecific about who exactly, so it behaves like "whoever" and carries معنى الشرط`, `الَّذينَ is always followed by فَ regardless of meaning`, `فَ here is عاطفة, joining two separate جمل`, `هُمْ لا يُؤْمِنونَ is not really الخبر`],
            correct: 0,
          },
        },
        {
          heading: 'بقية أسباب تضمن المبتدأ معنى الشرط',
          lines: [
            { html: `Four more situations extend the same principle: (4) نكرة موصوفة بفعل, (5) نكرة موصوفة بظرف, (6) مضاف إلى نكرة موصوفة بفعل أو ظرف, (7) كلمة كلّ مضافة إلى نكرة.`, list: false },
            { box: { title: 'Example', lines: [`وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ`] } },
            { html: `"A child who memorizes the Qur'an — he has a reward." <bdi>وَلَدٌ</bdi>, though a bare نكرة, gains a شرط-like "whichever child" sense once described by the فعل حَفِظَ, licensing فَ on الخبر — the same pattern applies with a ظرف instead of a فعل, as in وَلَدٌ في الفَصْلِ فَلَهُ اَجْرٌ.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ`,
                translation: `A child who memorizes the Qur'an — he has a reward.`,
                cells: [`وَلَدٌ`, `حَفِظَ`, `القُرْآنَ`, `فَ`, `لَهُ`, `اَجْرٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مبتدأ (نكرة موصوفة بجملة)` }, { start: 1, end: 1, role: `فعل ماضٍ وفاعله ضمير مستتر` }, { start: 2, end: 2, role: `مفعول به` }, { start: 3, end: 3, role: `رابطة داخلة على خبر المبتدأ لتضمنه معنى الشرط` }, { start: 4, end: 4, role: `خبر مقدم` }, { start: 5, end: 5, role: `مبتدأ مؤخر` }] },
                ],
              },
            },
            { html: `The remaining two extend the pattern further: (6) اُمُّ يَتيمٍ تَاْتيني فَلَها مالٌ — المبتدأ (اُمُّ) is مضاف to a described نكرة (يَتيمٍ تَاْتيني), one level deeper than a plain نكرة موصوفة. (7) كُلُّ يَتيمٍ فَلَهُ في قَلْبي رَاْفَةٌ — كُلُّ itself, مضاف to a bare نكرة (يَتيمٍ), carries an inherently distributive, "any and every" sense that alone is enough to license فَ, no further description of يَتيمٍ even needed.`, list: false },
          ],
          exercise: {
            prompt: `In وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ, وَلَدٌ is a bare نكرة. What licenses the فَ before لَهُ اَجْرٌ, given وَلَدٌ carries no explicit شرط particle؟`,
            kind: 'mcq',
            options: [`وَلَدٌ is a نكرة described by a فعل (حَفِظَ), which alone is enough to give it a شرط-like sense`, `وَلَدٌ is معرفة, and معرفة nouns always take فَ before their خبر`, `فَ here is purely decorative and carries no grammatical function`, `حَفِظَ is the true خبر, and فَ marks it as فعل الشرط`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Does الخبر always have to agree with its مبتدأ in number؟`, options: [`No — only in specific situations`, `Yes — always`, `Only if المبتدأ is معرفة`, `Only if الخبر is مشتق`], correct: 0 },
        { q: `المُفْسِدونَ in ﴿اِنَّهُمْ هُمُ الْمُفْسِدونَ﴾ is plural. What inside المُفْسِدونَ forces that agreement؟`, options: [`A ضمير مستتر هم that must match اسم إنّ`, `A تنوين`, `A لام التعريف`, `A تاء التأنيث`], correct: 0 },
        { q: `فِتْنَةٌ in ﴿نَحْنُ فِتْنَةٌ﴾ stays مفرد despite نَحْنُ being plural. Why؟`, options: [`فِتْنَةٌ is جامد, with no ضمير مستتر to agree`, `نَحْنُ is not really المبتدأ here`, `فِتْنَةٌ is secretly مثنى`, `The rule of مطابقة does not exist`], correct: 0 },
        { q: `بُرْهانٌ appears as بُرْهانانِ in ﴿فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ﴾. What forces that, given بُرْهانٌ is جامد؟`, options: [`المبتدأ being an اسم إشارة مثنى`, `A hidden ضمير inside بُرْهانٌ`, `رَبِّكَ being مجرور`, `تكرار الجملة`], correct: 0 },
        { q: `الَّذينَ خَسِرُوا اَنْفُسَهُمْ فَهُمْ لا يُؤْمِنونَ places فَ on الخبر. What in المبتدأ licenses that فَ؟`, options: [`الَّذينَ, an اسم موصول unspecific about who exactly, behaves like "whoever"`, `الَّذينَ being معرفة بأل`, `The verb خَسِرُوا itself`, `The absence of a real مبتدأ`], correct: 0 },
        { q: `كُلُّ يَتيمٍ فَلَهُ في قَلْبي رَاْفَةٌ licenses فَ with no further description of يَتيمٍ needed. What alone triggers that؟`, options: [`كُلُّ itself, مضاف to a bare نكرة, carrying a distributive "whoever" sense`, `يَتيمٍ being مثنى`, `رَاْفَةٌ being مقدم`, `The absence of أل`], correct: 0 },
      ],
      bank: [
        { title: `مطابقة الخبر: قاعدة مطردة؟`, kind: 'mcq', prompt: `Does الخبر always have to match its مبتدأ in number and gender؟`, options: [`No — مطابقة only applies in specific situations`, `Yes — every خبر must match its مبتدأ`, `Only when المبتدأ is مثنى`, `Only when الخبر is مذكر`], correct: 0 },
        { title: `السببان اللذان يوجبان المطابقة`, kind: 'mcq', prompt: `Which pair correctly names the two triggers that force مطابقة الخبر للمبتدأ؟`, options: [`ضمير مستتر في الخبر يعود إلى المبتدأ, والمبتدأ اسم إشارة`, `تعدد الخبر, وترتيبه`, `حذف الخبر جوازا, وحذفه وجوبا`, `واو المعية, وجواب القسم`], correct: 0 },
        { title: `إنهم هم المفسدون: لماذا الجمع؟`, kind: 'mcq', prompt: `المُفْسِدونَ in ﴿اِنَّهُمْ هُمُ الْمُفْسِدونَ﴾ appears plural rather than singular. Why؟`, options: [`It carries a ضمير مستتر هم that must match اسم إنّ in number`, `المُفْسِدونَ is جامد, so it always appears plural`, `هُمُ forces every following word into the plural`, `ضمير الفصل requires a plural خبر`], correct: 0 },
        { title: `نحن فتنة: لماذا لا يطابق العدد؟`, kind: 'mcq', prompt: `فِتْنَةٌ in ﴿نَحْنُ فِتْنَةٌ﴾ stays مفرد even though نَحْنُ is plural. Why doesn't مطابقة force it to be جمع؟`, options: [`فِتْنَةٌ is جامد, with no ضمير مستتر inside it to agree`, `نَحْنُ is not actually a مبتدأ here`, `فِتْنَةٌ secretly means the same as نحن`, `The مطابقة rule does not apply to إنّ's sisters`], correct: 0 },
        { title: `جامد بلا ضمير مستتر: هل يطابق؟`, kind: 'mcq', prompt: `If الخبر is جامد (a plain noun, not a مشتق) and carries no ضمير مستتر, is it still forced to match its مبتدأ's number؟`, options: [`No — agreement is only forced when الخبر contains a ضمير مستتر, or when المبتدأ is اسم إشارة`, `Yes — every جامد خبر must still match in number`, `Only if المبتدأ is معرفة`, `Only if المبتدأ is مثنى`], correct: 0 },
        { title: `فذانك برهانان: السبب الثاني للمطابقة`, kind: 'mcq', prompt: `بُرْهانٌ appears as بُرْهانانِ (مثنى) in ﴿فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ﴾, despite being جامد. What forces that agreement؟`, options: [`المبتدأ being an اسم إشارة مثنى (ذٰنِكَ)`, `A ضمير مستتر hidden inside بُرْهانٌ`, `The presence of مِنْ رَبِّكَ after it`, `A rule specific to الأعداد`], correct: 0 },
        { title: `اسم إشارة كمبتدأ: سبب مستقل`, kind: 'mcq', prompt: `Is the اسم إشارة trigger for مطابقة the same as the ضمير مستتر trigger, or a separate one؟`, options: [`A second, independent trigger, distinct from the ضمير مستتر case`, `The exact same trigger, restated`, `Not a real trigger at all`, `Only relevant when المبتدأ is مثنى specifically`], correct: 0 },
        { title: `تضمن المبتدأ معنى الشرط: القاعدة`, kind: 'mcq', prompt: `What does it mean for المبتدأ to تَضَمَّنَ مَعْنَى الشَّرْطِ؟`, options: [`It carries an implicit if/whoever/whatever sense, without a true شرط particle like إنْ`, `It literally contains the word إنْ`, `It becomes مبني rather than معرب`, `It can no longer take a خبر at all`], correct: 0 },
        { title: `الفاء الداخلة على الخبر: وظيفتها`, kind: 'mcq', prompt: `When المبتدأ carries معنى الشرط, what can فَ legitimately do؟`, options: [`Enter on الخبر, exactly the way it marks جواب الشرط in an ordinary conditional`, `Turn الخبر into مبتدأ`, `Force حذف الخبر`, `Convert الجملة الاسمية into جملة فعلية`], correct: 0 },
        { title: `أما: السبب الأول لتضمن الشرط`, kind: 'mcq', prompt: `﴿فَاَمّا ثَمودُ فَاُهْلِكوا بِالطّاغِيَةِ﴾ shows فَ entering on الخبر after أَمّا. Which of the seven triggers is this؟`, options: [`بعد أَمّا`, `اسم موصول`, `نكرة موصوفة بفعل`, `كلمة كلّ مضافة إلى نكرة`], correct: 0 },
        { title: `الذين خسروا أنفسهم: اسم موصول`, kind: 'mcq', prompt: `الَّذينَ in ﴿الَّذينَ خَسِرُوا اَنْفُسَهُمْ فَهُمْ لا يُؤْمِنونَ﴾ licenses فَ on its خبر. What kind of word is الَّذينَ, and what sense does that give it؟`, options: [`اسم موصول — unspecific about who exactly, so it behaves like "whoever"`, `اسم إشارة — pointing to a known person`, `نكرة — completely unspecified`, `حرف شرط — an explicit conditional particle`], correct: 0 },
        { title: `الموت الذي تفرون منه: موصوف بموصول`, kind: 'mcq', prompt: `﴿اِنَّ الْمَوْتَ الَّذي تَفِرّونَ مِنْهُ فَاِنَّهُ مُلٰقيكُمْ﴾ licenses فَ on its خبر because المبتدأ is:`, options: [`موصوف بموصول بفعل أو ظرف`, `a bare نكرة with no description at all`, `an اسم إشارة`, `مضاف إلى معرفة`], correct: 0 },
        { title: `ولد حفظ القرآن: نكرة موصوفة بفعل`, kind: 'mcq', prompt: `وَلَدٌ in وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ is a bare نكرة, yet it licenses فَ on its خبر. What gives it that شرط-like sense؟`, options: [`Being described by the فعل حَفِظَ — a نكرة موصوفة بفعل`, `Being مضاف to another noun`, `Carrying أل التعريف`, `Being repeated twice in the sentence`], correct: 0 },
        { title: `نكرة موصوفة بظرف: السبب الخامس`, kind: 'mcq', prompt: `وَلَدٌ في الفَصْلِ فَلَهُ اَجْرٌ follows the same pattern as وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ. What describes وَلَدٌ this time, instead of a فعل؟`, options: [`A ظرف (في الفَصْلِ)`, `A حال`, `A تمييز`, `Another نكرة`], correct: 0 },
        { title: `أم يتيم تأتيني: مضاف إلى نكرة موصوفة`, kind: 'mcq', prompt: `In اُمُّ يَتيمٍ تَاْتيني فَلَها مالٌ, اُمُّ is مضاف to a described نكرة (يَتيمٍ تَاْتيني). What does that extension of the pattern show؟`, options: [`The شرط-like sense can reach one level deeper, through إضافة to a described نكرة`, `اُمُّ itself must be نكرة for the pattern to apply`, `يَتيمٍ must be معرفة for the sentence to work`, `الفاء here is optional, not licensed at all`], correct: 0 },
        { title: `كل يتيم: السبب السابع`, kind: 'mcq', prompt: `كُلُّ يَتيمٍ فَلَهُ في قَلْبي رَاْفَةٌ licenses فَ without any further description of يَتيمٍ. What alone is enough to trigger معنى الشرط here؟`, options: [`كُلُّ itself, being مضاف to a bare نكرة, carries an inherently distributive "whoever" sense`, `يَتيمٍ being معرفة`, `رَاْفَةٌ being مقدم`, `The absence of any مبتدأ at all`], correct: 0 },
        { title: `سبعة أسباب: العدّ الكامل`, kind: 'mcq', prompt: `How many distinct situations does this lesson give for المبتدأ carrying معنى الشرط and licensing فَ on its خبر؟`, options: [`Seven`, `Three`, `Five`, `Two`], correct: 0 },
        { title: `مطابقة أم تضمن شرط: التمييز`, kind: 'mcq', prompt: `اِنَّهُمْ هُمُ الْمُفْسِدونَ illustrates مطابقة الخبر. الَّذينَ خَسِرُوا اَنْفُسَهُمْ فَهُمْ لا يُؤْمِنونَ illustrates a different phenomenon. What is that second phenomenon؟`, options: [`تضمن المبتدأ معنى الشرط, licensing فَ on الخبر`, `وجوب حذف الخبر`, `تعدد الخبر`, `تقديم الخبر على المبتدأ`], correct: 0 },
        {
          title: `تركيب: اِنَّهُمْ هُمُ الْمُفْسِدونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ﴿اِنَّهُمْ هُمُ الْمُفْسِدونَ﴾.`,
          source: `إِنَّهُمْ هُمُ الْمُفْسِدونَ`,
          words: [`إِنَّهُمْ`, `هُمُ`, `الْمُفْسِدونَ`],
          labels: [`إنّ واسمها (ضمير متصل)`, `ضمير فصل`, `خبر إنّ مرفوع بالواو`],
          distractors: [`مبتدأ`, `خبر مقدم`],
        },
        {
          title: `تركيب: نَحْنُ فِتْنَةٌ`,
          kind: 'tarkeeb',
          instruction: `Identify المبتدأ and الخبر in ﴿نَحْنُ فِتْنَةٌ﴾.`,
          source: `نَحْنُ فِتْنَةٌ`,
          words: [`نَحْنُ`, `فِتْنَةٌ`],
          labels: [`مبتدأ`, `خبر`],
          distractors: [`خبر مقدم`, `مضاف إليه`],
        },
        {
          title: `تركيب: فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in ﴿فَذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ﴾.`,
          source: `ذٰنِكَ بُرْهانانِ مِنْ رَبِّكَ`,
          words: [`ذٰنِكَ`, `بُرْهانانِ`, `مِنْ`, `رَبِّكَ`],
          labels: [`مبتدأ (اسم إشارة)`, `خبر مرفوع بالألف`, `حرف جر`, `اسم مجرور`],
          distractors: [`خبر مقدم`, `مضاف إليه`],
        },
        {
          title: `تركيب: وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ, where المبتدأ (a bare نكرة) carries معنى الشرط.`,
          source: `وَلَدٌ حَفِظَ القُرْآنَ فَلَهُ اَجْرٌ`,
          words: [`وَلَدٌ`, `حَفِظَ`, `القُرْآنَ`, `فَ`, `لَهُ`, `اَجْرٌ`],
          labels: [`مبتدأ (نكرة موصوفة بجملة)`, `فعل ماضٍ وفاعله ضمير مستتر`, `مفعول به`, `رابطة داخلة على خبر المبتدأ لتضمنه معنى الشرط`, `خبر مقدم`, `مبتدأ مؤخر`],
          distractors: [`حرف شرط`, `مضاف إليه`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'المفعول المطلق',
      subtitle: 'The Absolute Object — the مصدر that reinforces, specifies, or counts its فعل, and what can stand in its place',
      sourceRef: 'app-lessons/128',
      concepts: [
        {
          heading: 'تعريف المفعول المطلق ولماذا سمي مطلقا',
          lines: [
            { html: `المفعول المطلق is the first of the twelve منصوبات, and the first of the four مفاعيل that follow the eight مرفوعات already covered — الفاعل, نائب الفاعل, المبتدأ, and الخبر.`, list: false },
            { box: { title: 'Definition', lines: [`المَفْعولُ المُطْلَقُ: مَصْدَرٌ يُذْكَرُ بَعْدَ الفِعْلِ (أَوْ ما يَعْمَلُ عَمَلَهُ) لِتَوْكيدِهِ، أَوْ لِبَيانِ نَوْعِهِ، أَوْ لِبَيانِ عَدَدِهِ`] } },
            { html: `a مصدر (verbal noun) mentioned after its فعل (or whatever functions like one) either to reinforce it, to specify its manner, or to state how many times it occurred.`, list: false },
            { box: { title: 'Definition', lines: [`يُسَمَّى مَفْعولًا مُطْلَقًا لِأَنَّ اسْمَهُ غَيْرُ مُقَيَّدٍ بِحَرْفِ جَرٍّ`] } },
            { html: `it is called مُطْلَق ("unrestricted, absolute") precisely because its اسم is not tied down by any حرف جر, unlike the rest of المفاعيل — المفعول بِهِ, المفعول فيهِ, المفعول لَهُ, and المفعول مَعَهُ, each of which is bound to its own particular meaning.`, list: false },
          ],
          exercise: {
            prompt: `Every other مفعول — به, فيه, له, معه — is bound to one particular meaning by its own حرف جر. Why is المفعول المطلق called مُطْلَق ("unrestricted") by contrast؟`,
            kind: 'mcq',
            options: [`Because its اسم is not tied down by any حرف جر at all`, `Because it can only appear with أفعال المضارع`, `Because it never takes تنوين`, `Because it is always مبني rather than معرب`],
            correct: 0,
          },
        },
        {
          heading: 'ما يكون مفعولًا مطلقًا',
          lines: [
            { html: `المفعول المطلق takes one of two forms.`, list: false },
            { table: { title: 'صورتا المفعول المطلق', headers: ['Form', 'Meaning', 'Example'], rows: [
              [`مَصْدَرُ عامِلٍ قَبْلَهُ`, `the مصدر of the very عامل that precedes it`, `﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾`],
              [`مَصْدَرُ فِعْلٍ بِمَعْناهُ`, `a مصدر belonging to a فعل that only shares the meaning of the عامل, without being its literal مصدر`, `﴿وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا﴾`],
            ] } },
            { html: `In ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾ ("and recite the Qur'an with measured recitation"), تَرْتِيلًا is the مصدر of its own عامل, رَتِّلِ, itself. In ﴿وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا﴾ ("and devote yourself to Him with [complete] devotion"), the مصدر تَبْتِيلًا is not, strictly, from the same لفظ as its عامل تَبَتَّلْ; rather it belongs to a synonymous فعل.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا`,
                translation: `And recite the Qur'an with measured recitation.`,
                cells: [`رَتِّلِ`, `الْقُرْآنَ`, `تَرْتِيلًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل أمر` }, { start: 1, end: 1, role: `مفعول به` }, { start: 2, end: 2, role: `مفعول مطلق مؤكد لعامله` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In ﴿وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا﴾, is تَبْتِيلًا the literal مصدر of its عامل تَبَتَّلْ, or a مصدر from a synonymous فعل؟`,
            kind: 'mcq',
            options: [`A مصدر from a synonymous فعل (مَصْدَر فِعْل بِمَعْناه) — not, strictly, تَبَتَّلْ's own literal مصدر`, `The literal مصدر of تَبَتَّلْ itself`, `Neither — تَبْتِيلًا is not a مصدر at all here`, `A مفعول به, not a مفعول مطلق`],
            correct: 0,
          },
        },
        {
          heading: 'ما يقوم مقام مصدر الفعل',
          lines: [
            { html: `المفعول المطلق does not have to be an explicit مصدر sharing the exact wording of its فعل — several other things can تَقومُ مَقامَ مَصْدَرِ الفِعْلِ: (1) اِسْمُ المَصْدَرِ, نحو تَوَضَّأَ وُضوءَ رَسولِ اللهِ; (2) صِفَتُهُ, نحو ﴿وَاذْكُرْ رَبَّكَ كَثِيرًا﴾ (أَيْ ذِكْرًا كَثِيرًا); (3) ضَميرُهُ, نحو ﴿فَإِنِّي اُعَذِّبُهُ عَذابًا لا اُعَذِّبُهُ اَحَدًا مِنَ الْعٰلَمِينَ﴾; (4) اِسْمُ الإِشارَةِ, نحو اِجْتَهَدَ ذَلِكَ الِاجْتِهادَ; (5) ما يَدُلُّ عَلى عَدَدِهِ, نحو يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ; (6) ما يَدُلُّ عَلى نَوْعِهِ, نحو رَجَعَ القَهْقَرى; (7) ما يُضافُ إِلَى المَصْدَرِ من كُلّ، بَعْض، أو أَيّ, نحو ﴿وَلا تَبْسُطْها كُلَّ الْبَسْطِ﴾.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `تَوَضَّأَ وُضوءَ رَسولِ اللهِ`,
                translation: `He performed وضوء the way the Messenger of Allah performed his.`,
                cells: [`تَوَضَّأَ`, `وُضوءَ`, `رَسولِ`, `اللهِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ماضٍ وفاعله ضمير مستتر` }, { start: 1, end: 1, role: `مفعول مطلق (اسم مصدر) نائب عن المصدر` }, { start: 2, end: 2, role: `مضاف إليه` }, { start: 3, end: 3, role: `مضاف إليه` }] },
                ],
              },
            },
            {
              tarkeebDiagram: {
                sentence: `يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ`,
                translation: `The Muslims pray five times.`,
                cells: [`يُصَلِّي`, `المُسْلِمونَ`, `خَمْسَ`, `مَرّاتٍ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل مضارع` }, { start: 1, end: 1, role: `فاعل` }, { start: 2, end: 2, role: `مفعول مطلق (يدل على عدد) نائب عن المصدر` }, { start: 3, end: 3, role: `مضاف إليه` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `خَمْسَ مَرّاتٍ in يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ is not itself a literal مصدر of يُصَلِّي. What does it stand in for the مصدر as؟`,
            kind: 'mcq',
            options: [`ما يدل على عدد الفعل — it states how many times the فعل occurred`, `ما يدل على نوع الفعل`, `اسم المصدر`, `ضمير المصدر`],
            correct: 0,
          },
        },
        {
          heading: 'عامل المفعول المطلق',
          lines: [
            { box: { title: 'Rule', lines: [`عامِلُ المَفْعولِ المُطْلَقِ قَدْ يَكونُ فِعْلًا، أَوْ مَصْدَرًا، أَوْ مُشْتَقًّا`] } },
            { html: `(1) فِعْل, نحو ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾; (2) مَصْدَر, نحو ﴿فَاِنَّ جَهَنَّمَ جَزآؤُكُمْ جَزآءً مَوْفورًا﴾ — "indeed, Hell is your recompense, an ample recompense" (وَقيلَ: بَل عامِلُهُ فِعْلٌ مَحْذوفٌ, though some hold that the true عامل here is instead a dropped فعل); (3) مُشْتَقّ (اسم فاعل and the like), نحو ﴿وَالصّافّاتِ صَفًّا﴾ — "By those [angels] ranged in ranks."`, list: false },
          ],
          exercise: {
            prompt: `In ﴿فَاِنَّ جَهَنَّمَ جَزآؤُكُمْ جَزآءً مَوْفورًا﴾, the عامل of جَزآءً مَوْفورًا is جَزآؤُكُمْ itself — a مصدر, not a فعل. Does that fit the three possible types of عامل المفعول المطلق؟`,
            kind: 'mcq',
            options: [`Yes — a مَصْدَر is one of the three possible types of عامل, alongside فِعْل and مُشْتَقّ`, `No — only a فِعْل can govern a مفعول مطلق`, `No — a مصدر can never be an عامل of anything`, `Yes, but only if the مصدر is مرفوع`],
            correct: 0,
          },
        },
        {
          heading: 'أنواع المفعول المطلق وشروطها',
          lines: [
            { html: `المفعول المطلق serves one of three أَغْراض: (1) لِلتَّوْكيدِ — for emphasis, reinforcing the meaning of the فعل itself, نحو ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾. (2) لِلنَّوْعِ — for type, specifying the manner the فعل occurred, done بِالْإِضافَةِ (نحو ﴿وَظَنَنْتُمْ ظَنَّ السَّوْءِ﴾), بِالصِّفَةِ (نحو ﴿إِنّا فَتَحْنا لَكَ فَتْحًا مُبينًا﴾), بِالْإِشارَةِ (نحو اِجْتَهَدَ ذَلِكَ الِاجْتِهادَ), or بِلامِ العَهْدِ (نحو اِجْتَهَدَ الِاجْتِهادَ). (3) لِلْعَدَدِ — for number, stating how many times the فعل occurred, نحو سَجَدَتْ سَجْدَتَيْنِ.`, list: false },
            { box: { title: 'Careful', lines: [`المَفْعولُ المُطْلَقُ لِلتَّأْكيدِ يَكونُ مُنَكَّرًا غَيْرَ مَوْصوفٍ وَلا مُضافٍ، وَلا مَخْتومٍ بِتاءِ الوَحْدَةِ وَلا مُثَنّى وَلا مَجْموعٍ`] } },
            { html: `the مفعول مطلق للتوكيد must stay indefinite (نكرة), carry no صفة describing it, take no إضافة, take no ة الوحدة (the "unit" تاء that turns a مصدر into one countable instance), and it may never be dualized or pluralized.`, list: false },
            { box: { title: 'Careful', lines: [`يَجوزُ تَثْنِيَةُ مَصْدَرِ العَدَدِ وَجَمْعُهُ بِخِلافِ قَسيمَيْهِ`] } },
            { html: `مصدر العدد (like سَجْدَتَيْنِ above), by contrast, may freely be dualized or pluralized; it is only its two قسيمان (مصدر التوكيد ومصدر النوع) that are locked out of تثنية and جمع altogether.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `سَجَدَتْ سَجْدَتَيْنِ`,
                translation: `She prostrated twice.`,
                cells: [`سَجَدَتْ`, `سَجْدَتَيْنِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ماضٍ وفاعلها ضمير مستتر` }, { start: 1, end: 1, role: `مفعول مطلق للعدد منصوب بالياء` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `سَجْدَتَيْنِ in سَجَدَتْ سَجْدَتَيْنِ is مثنى — dualized. Would a مفعول مطلق للتوكيد ever be allowed to appear as مثنى the same way؟`,
            kind: 'mcq',
            options: [`No — مفعول مطلق للتوكيد must stay مفرد, indefinite, and unmodified; only مصدر العدد may be dualized or pluralized`, `Yes — all three types of مفعول مطلق may be dualized freely`, `No — no مفعول مطلق, of any type, can ever be مثنى`, `Yes, but only if it also carries أل`],
            correct: 0,
          },
        },
        {
          heading: 'نيابة المفعول المطلق عن فعله المحذوف',
          lines: [
            { html: `The عامل of المفعول المطلق — its فعل — may be dropped entirely, with the مصدر left to stand in its place: يَنوبُ المَفْعولُ المُطْلَقُ عَنْ فِعْلِهِ. The dropped فعل falls into one of six categories.`, list: false },
            { html: `(1) أَمْرًا (a command), نحو ﴿وَبِالْوالِدَيْنِ إِحْسانًا﴾ — أَيْ: أَحْسِنوا بِالْوالِدَيْنِ إِحْسانًا. (2) نَهْيًا (a prohibition), نحو صَبْرًا لا جَزْعًا — أَيِ: اِصْبِرْ صَبْرًا لا تَجْزَعْ جَزْعًا. (3) دُعاءً (a supplication), نحو ﴿بُعْدًا لِلْقَوْمِ الظّالِمِينَ﴾ — أَيْ: بَعِدوا بُعْدًا. (4) مُؤَكِّدًا لِمَضْمونِ الجُمْلَةِ قَبْلَهُ, نحو ﴿اولٰئِكَ هُمُ المُؤْمِنونَ حَقًّا﴾ — أَيْ: حَقَّ ذَلِكَ حَقًّا. (5) تَفْصيلًا لِعاقِبَةِ الجُمْلَةِ قَبْلَهُ, نحو ﴿فَشُدّوا الوَثاقَ فَاِمّا مَنًّا بَعْدُ وَاِمّا فِداءً﴾. (6) مَصادِرُ مَسْموعَةٌ (fixed مصادر preserved from the speech of the Arabs in this exact usage, لا يُقاسُ عَلَيْها), نحو ﴿سُبْحانَكَ﴾، ﴿مَعاذَ اللهِ﴾، ﴿حِجْرًا مَحْجورًا﴾، لَبَّيْكَ، وغُفْرانَكَ.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَبِالْوالِدَيْنِ إِحْسانًا`,
                translation: `And to parents, [do] good.`,
                cells: [`بِالْوالِدَيْنِ`, `إِحْسانًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `جار ومجرور متعلق بالفعل المحذوف` }, { start: 1, end: 1, role: `مفعول مطلق نائب عن فعله المحذوف وجوبا (أَحْسِنوا)` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `﴿وَبِالْوالِدَيْنِ إِحْسانًا﴾ has no visible فعل at all — إِحْسانًا stands alone as a مصدر. What category of dropped فعل does the source supply for إِحْسانًا (أَيْ: أَحْسِنوا)؟`,
            kind: 'mcq',
            options: [`أَمْرًا — a command`, `نَهْيًا — a prohibition`, `دُعاءً — a supplication`, `مَصادِرُ مَسْموعَةٌ that cannot be reasoned by analogy`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Why is المفعول المطلق called مُطْلَق؟`, options: [`Its اسم is not tied down by any حرف جر, unlike the rest of المفاعيل`, `It can appear in any position in the جملة`, `It is always نكرة`, `It never has an عامل`], correct: 0 },
        { q: `تَرْتِيلًا in ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾ is the literal مصدر of رَتِّلِ. What is that form called؟`, options: [`مَصْدَرُ عامِلٍ قَبْلَهُ`, `مَصْدَرُ فِعْلٍ بِمَعْناهُ`, `اسم المصدر`, `ما يدل على النوع`], correct: 0 },
        { q: `خَمْسَ مَرّاتٍ in يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ is not a literal مصدر. What does it substitute for the مصدر as؟`, options: [`ما يدل على عدد الفعل`, `اسم المصدر`, `ضمير المصدر`, `صفة المصدر`], correct: 0 },
        { q: `﴿وَالصّافّاتِ صَفًّا﴾ uses an اسم فاعل as عامل. Which type of عامل does that illustrate؟`, options: [`مُشْتَقّ`, `فِعْل`, `مَصْدَر فقط`, `حرف`], correct: 0 },
        { q: `Which set correctly names the three أَغْراض المفعول المطلق can serve؟`, options: [`التوكيد، النوع، العدد`, `الإضافة، الوصف، الإشارة`, `التقديم، التأخير، الحذف`, `الحقيقة، المجاز، الكناية`], correct: 0 },
        { q: `صَبْرًا لا جَزْعًا stands in for a dropped فعل (اِصْبِرْ ولا تَجْزَعْ). Which category of نيابة عن الفعل المحذوف does that belong to؟`, options: [`نَهْيًا`, `أَمْرًا`, `دُعاءً`, `مَصادِرُ مَسْموعَةٌ`], correct: 0 },
      ],
      bank: [
        { title: `المفعول المطلق: ترتيبه بين المنصوبات`, kind: 'mcq', prompt: `المفعول المطلق is described as the first of the twelve منصوبات. What group of مرفوعات does it follow directly؟`, options: [`الفاعل، نائب الفاعل، المبتدأ، والخبر`, `الحال والتمييز`, `أحرف الجر`, `أحرف النصب والجزم`], correct: 0 },
        { title: `لماذا سمي مطلقا`, kind: 'mcq', prompt: `Why is المفعول المطلق called مُطْلَق ("unrestricted")؟`, options: [`Its اسم is not tied down by any حرف جر, unlike المفعول بِهِ، فيهِ، لَهُ، ومَعَهُ`, `It can appear anywhere in the جملة`, `It never takes تنوين`, `It is always مبني`], correct: 0 },
        { title: `التعريف الكامل`, kind: 'mcq', prompt: `Which of the following correctly defines المفعول المطلق؟`, options: [`A مصدر mentioned after its فعل (or whatever functions like one) to reinforce it, specify its manner, or state its number`, `The اسم by itself, needing no reinterpretation`, `A حرف مصدر together with the جملة after it`, `The thing being described by a صفة`], correct: 0 },
        { title: `الصورتان: مصدر عامله`, kind: 'mcq', prompt: `تَرْتِيلًا in ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾ is the literal مصدر of its own عامل, رَتِّلِ. What is that form of المفعول المطلق called؟`, options: [`مَصْدَرُ عامِلٍ قَبْلَهُ`, `مَصْدَرُ فِعْلٍ بِمَعْناهُ`, `اسم المصدر`, `ما يدل على النوع`], correct: 0 },
        { title: `الصورتان: مصدر فعل بمعناه`, kind: 'mcq', prompt: `تَبْتِيلًا in ﴿وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا﴾ is not, strictly, from the same لفظ as its عامل تَبَتَّلْ. What is that form called؟`, options: [`مَصْدَرُ فِعْلٍ بِمَعْناهُ`, `مَصْدَرُ عامِلٍ قَبْلَهُ`, `اسم الإشارة نائبا عن المصدر`, `ما يدل على العدد`], correct: 0 },
        { title: `توضأ وضوء رسول الله: اسم المصدر`, kind: 'mcq', prompt: `وُضوءَ in تَوَضَّأَ وُضوءَ رَسولِ اللهِ stands in for a literal مصدر. Which of the seven substitutes does it represent؟`, options: [`اِسْمُ المَصْدَرِ`, `صِفَتُهُ`, `ضَميرُهُ`, `اِسْمُ الإِشارَةِ`], correct: 0 },
        { title: `واذكر ربك كثيرا: الصفة نائبة`, kind: 'mcq', prompt: `كَثِيرًا in ﴿وَاذْكُرْ رَبَّكَ كَثِيرًا﴾ stands in for a dropped مصدر (أَيْ ذِكْرًا كَثِيرًا). What kind of substitute is كَثِيرًا؟`, options: [`صِفَتُهُ — a صفة standing in for the مصدر`, `اِسْمُ المَصْدَرِ`, `ضَميرُهُ`, `ما يدل على عدده`], correct: 0 },
        { title: `فإني أعذبه عذابا: الضمير نائبا`, kind: 'mcq', prompt: `In ﴿فَإِنِّي اُعَذِّبُهُ عَذابًا لا اُعَذِّبُهُ اَحَدًا مِنَ الْعٰلَمِينَ﴾, the second أُعَذِّبُهُ's ضمير refers back to العَذاب already mentioned. What is that ضمير standing in for؟`, options: [`The مصدر itself`, `A مضاف إليه`, `The فاعل`, `A نائب فاعل`], correct: 0 },
        { title: `اجتهد ذلك الاجتهاد: الإشارة نائبة`, kind: 'mcq', prompt: `ذَلِكَ in اِجْتَهَدَ ذَلِكَ الِاجْتِهادَ points back to a specific, known اجتهاد. What is ذَلِكَ standing in for؟`, options: [`اِسْمُ الإِشارَةِ نائبًا عن المصدر`, `صِفَتُهُ`, `ضَميرُهُ`, `ما يدل على نوعه`], correct: 0 },
        { title: `يصلي المسلمون خمس مرات: العدد نائبا`, kind: 'mcq', prompt: `خَمْسَ مَرّاتٍ in يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ is not itself a مصدر. What does it substitute for the مصدر as؟`, options: [`ما يدل على عدد الفعل`, `ما يدل على نوع الفعل`, `اسم المصدر`, `صفة المصدر`], correct: 0 },
        { title: `رجع القهقرى: النوع نائبا`, kind: 'mcq', prompt: `القَهْقَرى in رَجَعَ القَهْقَرى names the manner of the رجوع rather than being its literal مصدر. What does القَهْقَرى substitute for the مصدر as؟`, options: [`ما يدل على نوعه`, `ما يدل على عدده`, `اسم المصدر`, `ضميره`], correct: 0 },
        { title: `ولا تبسطها كل البسط: المضاف إلى المصدر`, kind: 'mcq', prompt: `﴿وَلا تَبْسُطْها كُلَّ الْبَسْطِ﴾ uses كُلَّ مضافة إلى المصدر instead of the مصدر itself. Which two other words can play the same role, besides كُلّ؟`, options: [`بَعْض and أَيّ`, `نَوْع and عَدَد`, `صِفَة and إِشارَة`, `ضَمير and اسم`], correct: 0 },
        { title: `عامل المفعول المطلق: الأنواع الثلاثة`, kind: 'mcq', prompt: `Which set correctly names the three possible types of عامل المفعول المطلق؟`, options: [`فِعْل، مَصْدَر، مُشْتَقّ`, `اسم عين، اسم معنى، اسم صفة`, `حرف جر، حرف عطف، حرف نصب`, `مبتدأ، خبر، فاعل`], correct: 0 },
        { title: `والصافات صفا: المشتق عاملا`, kind: 'mcq', prompt: `﴿وَالصّافّاتِ صَفًّا﴾ uses الصّافّاتِ, an اسم فاعل, as the عامل of صَفًّا. What type of عامل does that illustrate؟`, options: [`مُشْتَقّ`, `فِعْل`, `مَصْدَر فقط`, `حرف`], correct: 0 },
        { title: `أنواع المفعول المطلق: الأغراض الثلاثة`, kind: 'mcq', prompt: `Which set correctly names the three أَغْراض (purposes) المفعول المطلق can serve؟`, options: [`التوكيد، النوع، العدد`, `الحقيقة، المجاز، الكناية`, `التقديم، التأخير، الحذف`, `الإضافة، الوصف، الإشارة`], correct: 0 },
        { title: `شروط مفعول التوكيد`, kind: 'mcq', prompt: `Which of the following is required of المفعول المطلق للتوكيد, unlike مصدر العدد؟`, options: [`It must stay مفرد and indefinite — it can never be مثنى or مجموع`, `It must always carry أل التعريف`, `It must always be مضاف`, `It must always be مثنى`], correct: 0 },
        { title: `سجدت سجدتين: يجوز تثنيته`, kind: 'mcq', prompt: `سَجْدَتَيْنِ in سَجَدَتْ سَجْدَتَيْنِ is مثنى. Why is that allowed for مصدر العدد when it isn't allowed for the other two types؟`, options: [`مصدر العدد, unlike مصدر التوكيد and مصدر النوع, may freely be dualized or pluralized`, `All three types may be freely dualized`, `No type of مفعول مطلق may ever be مثنى`, `مثنى only applies to الأسماء الجامدة`], correct: 0 },
        { title: `نيابة المفعول المطلق: الفئات الستة`, kind: 'mcq', prompt: `When the عامل of المفعول المطلق is dropped entirely, the dropped فعل falls into one of six categories. Which category does صَبْرًا لا جَزْعًا (اِصْبِرْ ولا تَجْزَعْ) belong to؟`, options: [`نَهْيًا — a prohibition`, `أَمْرًا — a command`, `دُعاءً — a supplication`, `مَصادِرُ مَسْموعَةٌ`], correct: 0 },
        {
          title: `تركيب: وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in ﴿وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا﴾.`,
          source: `رَتِّلِ الْقُرْآنَ تَرْتِيلًا`,
          words: [`رَتِّلِ`, `الْقُرْآنَ`, `تَرْتِيلًا`],
          labels: [`فعل أمر`, `مفعول به`, `مفعول مطلق مؤكد لعامله`],
          distractors: [`حال`, `تمييز`],
        },
        {
          title: `تركيب: وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ﴿وَتَبَتَّلْ إِلَيْهِ تَبْتِيلًا﴾.`,
          source: `تَبَتَّلْ إِلَيْهِ تَبْتِيلًا`,
          words: [`تَبَتَّلْ`, `إِلَيْهِ`, `تَبْتِيلًا`],
          labels: [`فعل أمر`, `جار ومجرور متعلق بالفعل`, `مفعول مطلق من مصدر فعل بمعناه`],
          distractors: [`مفعول به`, `حال`],
        },
        {
          title: `تركيب: تَوَضَّأَ وُضوءَ رَسولِ اللهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in تَوَضَّأَ وُضوءَ رَسولِ اللهِ, where اسم المصدر stands in for المصدر.`,
          source: `تَوَضَّأَ وُضوءَ رَسولِ اللهِ`,
          words: [`تَوَضَّأَ`, `وُضوءَ`, `رَسولِ`, `اللهِ`],
          labels: [`فعل ماضٍ وفاعله ضمير مستتر`, `مفعول مطلق (اسم مصدر) نائب عن المصدر`, `مضاف إليه`, `مضاف إليه`],
          distractors: [`مفعول به`, `حال`],
        },
        {
          title: `تركيب: يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ, where العدد stands in for المصدر.`,
          source: `يُصَلِّي المُسْلِمونَ خَمْسَ مَرّاتٍ`,
          words: [`يُصَلِّي`, `المُسْلِمونَ`, `خَمْسَ`, `مَرّاتٍ`],
          labels: [`فعل مضارع`, `فاعل`, `مفعول مطلق (يدل على عدد) نائب عن المصدر`, `مضاف إليه`],
          distractors: [`مفعول به`, `تمييز`],
        },
        {
          title: `تركيب: وَاذْكُرْ رَبَّكَ كَثِيرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in ﴿وَاذْكُرْ رَبَّكَ كَثِيرًا﴾, where الصفة stands in for المصدر.`,
          source: `اذْكُرْ رَبَّكَ كَثِيرًا`,
          words: [`اذْكُرْ`, `رَبَّكَ`, `كَثِيرًا`],
          labels: [`فعل أمر`, `مفعول به`, `مفعول مطلق (صفة نائبة عن المصدر)`],
          distractors: [`حال`, `تمييز`],
        },
        {
          title: `تركيب: وَبِالْوالِدَيْنِ إِحْسانًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ﴿وَبِالْوالِدَيْنِ إِحْسانًا﴾, where المفعول المطلق stands in for a dropped فعل أمر.`,
          source: `بِالْوالِدَيْنِ إِحْسانًا`,
          words: [`بِالْوالِدَيْنِ`, `إِحْسانًا`],
          labels: [`جار ومجرور متعلق بالفعل المحذوف`, `مفعول مطلق نائب عن فعله المحذوف وجوبا (أَحْسِنوا)`],
          distractors: [`مفعول به`, `حال`],
        },
      ],
    },
  ],
};

// Module 23 — النداء وملحقاته (Calling Out, and Its Extensions)
//
// Source: app-lessons/120-al-nida.md through app-lessons/122-al-nudba.md
// (الكبرى في النحو). Opens the خاتم sub-chapter of العامل وغير العامل —
// النداء is the fifth and final construction grammarians treat under
// "hidden governing verbs" (Module 22, حذف العامل, is not yet authored,
// so this module does not assume its content; النداء's own status as a
// حذف-عامل construction is introduced here from scratch, grounded only in
// 120's own opening line). Per COURSE-MAP.md's Module 23 plan: l1/l2 split
// 120 in two (l1 = تعريف النداء through حذف حرف النداء; l2 = إعراب المنادى
// through اللهم); l3 covers 121 (الاستغاثة ونداء التعجب) whole; l4 covers
// 122 (الندبة) whole. l3's معطوف material (120's own أحكام المستغاث
// section splits لام/ألف from the تكرار-يا rule) earned its own concept
// rather than folding into the لام/ألف concept, keeping l3 at 5 concepts
// rather than 4.
//
// Concept bodies use the lines[]/box/table/tarkeebDiagram shape
// established in module-01.js. Every app-lessons Rule/Definition/
// Example/Meaning/Careful Box is preserved as its own box (Box suffix
// dropped per convention); enumerated Rule Boxes (٣ أركان، ٤ معاملات
// ياء المتكلم) are rendered as either a table (when the items are
// genuinely parallel data, e.g. أحرف النداء's three groups, حالات النصب
// لفظا, ياء المتكلم's four treatments) or an English (1)(2)(3)-marker
// list in prose (when they are closer to a running argument, e.g. أركان
// النداء, ترخيم's two conditions). The closing "Summary table" each
// source file ends with is not reproduced verbatim — its content is
// already folded into the concept tables and prose above it, and a
// literal re-statement would just duplicate what the lesson already
// teaches. 120's closing Careful box (noting الاستغاثة/الندبة/نداء
// التعجب are separate lessons) is folded into l2's اللهم concept as
// context, not a standalone concept, since it adds no new grammar point
// of its own.
//
// Bank تركيب items use the flat words[]/labels[]/distractors[] schema,
// matching every prior authored module in this course. l1's items avoid
// the finer إعراب classification (منصوب لفظا لأنه مضاف, مبني على الضم)
// since that is l2's own material, not yet taught when l1's bank is
// reached in isolation via Practice Mode — l1 tarkeeb labels stay at the
// level of أركان النداء (حرف نداء / منادى) and already-established basics
// (فعل أمر، فاعل، مضاف إليه، مفعول لأجله، حرف جر) rather than asserting
// l2's finer distinctions. l1's تركيب count (3) reflects 120's own
// material before إعراب المنادى begins: only يا عَبْدَ اللهِ (from the
// أحرف النداء table) and the two حذف حرف النداء examples (اِعْمَلُوا آلَ
// داوُدَ شُكْرًا، يوسُفُ أَعْرِضْ عَنْ هَذا) are genuine multi-word worked
// examples at that point in the lesson. l2, l3, and l4 draw on every
// worked example 120-122 supply once إعراب is in play, reaching the full
// 6-item norm in l2 and l3; l4 tapers to 4, reflecting how thin 122's own
// worked-example material genuinely is — the same discipline every prior
// module applied to its own thin and rich spots.
export default {
  id: '23',
  title: 'النداء وملحقاته',
  heading: 'العامل وغير العامل',
  subheading: 'خاتم',
  blurb: 'النداء built around a dropped أدعو, its three أركان and seven أحرف, the إعراب of المنادى, then its three named extensions — الاستغاثة, نداء التعجب, and الندبة.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'أركان النداء',
      subtitle: 'The Construction of Calling Out — a dropped أدعو, its three أركان, and the seven أحرف that stand in its place',
      concepts: [
        {
          heading: 'تعريف النداء',
          lines: [
            { html: `Grammarians close the chapter on hidden governing verbs with a fifth and final construction: <bdi>النداء</bdi> ("calling out"). Whenever you call someone by name aloud, you are really saying you call them, but the verb itself is never spoken.`, list: false },
            { box: { title: 'Definition', lines: [`النِّداءُ: نِداءٌ بِحَرْفٍ يَقومُ مَقامَ أَدْعو`] } },
            { html: `<bdi>النداء</bdi> is calling someone using a particle that stands in the place of <bdi>أَدْعو</bdi> ("I call"). Saying <bdi>يا زَيْدُ</bdi> effectively means <bdi>أَدْعو زَيْدًا</bdi> ("I call Zayd"), but only يا and زَيْدُ are actually spoken.`, list: false },
          ],
          exercise: {
            prompt: `يا زَيْدُ effectively means أَدْعو زَيْدًا. Which word from that fuller sentence is never actually spoken in يا زَيْدُ?`,
            kind: 'mcq',
            options: [`أَدْعو`, `يا`, `زَيْدُ`, `None — the whole sentence is spoken`],
            correct: 0,
          },
        },
        {
          heading: 'أركان النداء',
          lines: [
            { html: `With the construction defined, three parts make it up.`, list: false },
            { box: { title: 'Rule', lines: [`لِلنِّداءِ ثَلاثَةُ أَرْكانٍ`] } },
            { html: `النداء has three أركان: (1) <bdi>فِعْلُ النِّداءِ المَحْذوفُ</bdi> — the dropped verb itself, أدعو or something similar; (2) <bdi>حَرْفُ النِّداءِ</bdi> — the particle standing in the dropped verb's place, such as يا; (3) <bdi>المُنادَى</bdi> — the person or thing being called, functioning as the "object" of the hidden أدعو.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `يا زَيْدُ`,
                translation: `O Zayd!`,
                cells: [`يا`, `زَيْدُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف النداء` }, { start: 1, end: 1, role: `المنادى` }] },
                ],
              },
            },
            { html: `In يا زَيْدُ, يا is حرف النداء, زَيْدُ is المنادى, and the dropped أدعو is فعل النداء — the one ركن never actually pronounced.`, list: false },
          ],
          exercise: {
            prompt: `In يا زَيْدُ, three أركان make up the construction, but only two words are actually spoken. Which ركن is never pronounced?`,
            kind: 'mcq',
            options: [`فعل النداء المحذوف`, `حرف النداء`, `المنادى`, `حرف الجر`],
            correct: 0,
          },
        },
        {
          heading: 'أحرف النداء',
          lines: [
            { html: `Grammarians count seven particles capable of standing in for the dropped أدعو, though ordinary usage — the Qur'an, hadith, everyday speech — relies almost entirely on one of them.`, list: false },
            { table: { title: 'أحرف النداء السبعة', headers: ['Group', 'Particles', 'Example'], rows: [
              [`لِلْقَريبِ (someone close)`, `الهمزة، أيْ`, `أَعَبْدَ اللهِ`],
              [`لِلْبَعيدِ (someone far)`, `يا، آ، أَيا، هَيا`, `يا عَبْدَ اللهِ`],
              [`لِلنُّدْبَةِ (lamenting)`, `وا`, `وا رَأْسَاهُ`],
            ] } },
            { html: `Of these seven, six perform genuine calling; وا alone is <bdi>مجاز في النداء</bdi> — a figurative "calling" that is really an expression of emotion, not a summons. وا رَأْسَاهُ ("Oh, my head!") is the classic example: the Prophet ﷺ said this during his final illness, expressing the pain in his head rather than literally addressing it.`, list: false },
          ],
          exercise: {
            prompt: `Six of the seven أحرف النداء perform genuine calling. Which one is a مجاز — a figurative "calling" that really expresses emotion rather than summoning anyone?`,
            kind: 'mcq',
            options: [`وا`, `يا`, `الهمزة`, `أيْ`],
            correct: 0,
          },
        },
        {
          heading: 'حذف حرف النداء: مواضع الجواز',
          lines: [
            { html: `يا itself, the most common حرف نداء, can sometimes be dropped, leaving المنادى to stand alone.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ يُحْذَفُ حَرْفُ النِّداءِ إِنْ كانَ المُنادَى مُضافًا أَوْ عَلَمًا`] } },
            { html: `The particle can be dropped in exactly two situations: (1) when المنادى is <bdi>مضاف</bdi>; (2) when it is a proper name (<bdi>علم</bdi>). In both cases context alone (قرينة) makes a calling obvious even without يا.`, list: false },
            { box: { title: 'Example', lines: [`اِعْمَلُوا آلَ داوُدَ شُكْرًا`] } },
            { html: `"Work, O family of Dāwūd, in gratitude." <bdi>آلَ داوُدَ</bdi> is مضاف; the إضافة itself signals that حرف النداء has been dropped.`, list: false },
            { box: { title: 'Example', lines: [`يوسُفُ أَعْرِضْ عَنْ هَذا`] } },
            { html: `"Joseph, turn away from this." <bdi>يوسُفُ</bdi> is a علم; addressing a name at all signals the missing يا.`, list: false },
          ],
          exercise: {
            prompt: `﴿اِعْمَلُوا آلَ داوُدَ شُكْرًا﴾ opens with no حرف نداء at all, yet آلَ داوُدَ is still being addressed. Which of the two conditions for dropping حرف النداء does آلَ داوُدَ satisfy?`,
            kind: 'mcq',
            options: [`It is مضاف`, `It is a علم`, `It is a نكرة مقصودة`, `It is لفظ الجلالة`],
            correct: 0,
          },
        },
        {
          heading: 'حذف حرف النداء: مواضع المنع',
          lines: [
            { html: `Two situations block the drop entirely, even though they might look similar to the two that allow it.`, list: false },
            { box: { title: 'Rule', lines: [`وَلا يَجوزُ حَذْفُهُ مَعَ لَفْظِ الجَلالَةِ أَوِ النَّكِرَةِ المَقْصودَةِ`] } },
            { html: `حرف النداء may never be dropped before <bdi>اللهُ</bdi>, nor before a <bdi>نكرة مقصودة</bdi> — an indefinite noun used to call a specific-but-unnamed person, such as رَجُل addressed to someone whose name you don't know.`, list: false },
            { html: `You cannot say اللهُ اغْفِرْ لي, treating يا as dropped before لفظ الجلالة. Likewise, you cannot call out رَجُلُ! on its own to address an unidentified man — it must be يا رَجُلُ.`, list: false },
          ],
          exercise: {
            prompt: `Someone tries to call out to an unnamed man standing nearby by saying only رَجُلُ!, with no يا at all. Is that dropping allowed?`,
            kind: 'mcq',
            options: [`No — a نكرة مقصودة never allows حرف النداء to be dropped`, `No — رجل is لفظ الجلالة`, `Yes — any نكرة allows the drop`, `Yes — نكرة مقصودة is one of the two allowed cases`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `يا زَيْدُ is grammatically understood as standing for a fuller sentence. What is that underlying sentence?`, options: [`أَدْعو زَيْدًا`, `أُنادي إلى زَيْدٍ`, `أَطْلُبُ زَيْدًا`, `أَسْأَلُ زَيْدًا`], correct: 0 },
        { q: `النداء has three أركان. Which of the following is NOT one of them?`, options: [`حرف الجر`, `فعل النداء المحذوف`, `حرف النداء`, `المنادى`], correct: 0 },
        { q: `Of the seven أحرف النداء, which single one is used لِلْقَريبِ (someone close), alongside أيْ؟`, options: [`الهمزة`, `يا`, `وا`, `هَيا`], correct: 0 },
        { q: `وا is technically one of the seven أحرف النداء, but grammarians classify its use differently from the other six. How?`, options: [`It is مجاز — a figurative expression of grief, not real calling`, `It is used only لِلْقَريب — the same restriction as الهمزة and أيْ`, `It cannot ever begin a sentence — grammarians treat it as a mid-utterance interjection only`, `It always requires تنوين on what follows — the way لام الاستغاثة does`], correct: 0 },
        { q: `﴿يوسُفُ أَعْرِضْ عَنْ هَذا﴾ has no حرف نداء before يوسُفُ. Why is the drop allowed here?`, options: [`يوسُفُ is a علم`, `يوسُفُ is مضاف`, `يوسُفُ is نكرة مقصودة`, `يوسُفُ is لفظ الجلالة`], correct: 0 },
        { q: `Which of these correctly states when حرف النداء may NOT be dropped?`, options: [`Before لفظ الجلالة or a نكرة مقصودة`, `Before a مضاف or a علم`, `Before any مبني منادى`, `Before a منادى that is مذكر`], correct: 0 },
      ],
      bank: [
        { title: `تعريف النداء`, kind: 'mcq', prompt: `النداء is defined as a calling using a particle standing in place of a dropped verb. Which verb does حرف النداء stand in for?`, options: [`أَدْعو`, `أُنادي`, `أَقولُ`, `أَطْلُبُ`], correct: 0 },
        { title: `أركان النداء الثلاثة`, kind: 'mcq', prompt: `Which three-part list correctly gives أركان النداء?`, options: [`فعل النداء المحذوف، حرف النداء، والمنادى`, `فعل النداء، حرف الجر، والمجرور`, `حرف النداء، المنادى، والمضاف إليه`, `فعل النداء، الفاعل، والمفعول به`], correct: 0 },
        { title: `لماذا لا يُنطق فعل النداء`, kind: 'mcq', prompt: `Why is فعل النداء (أدعو) never actually pronounced in يا زَيْدُ?`, options: [`حرف النداء (يا) stands in its place by convention`, `أدعو is مبني للمجهول`, `أدعو is a حرف, not a فعل`, `المنادى already contains its meaning`], correct: 0 },
        { title: `أحرف القرب`, kind: 'mcq', prompt: `Which two أحرف نداء are used لِلْقَريبِ (for someone close)?`, options: [`الهمزة وأيْ`, `يا وآ`, `أَيا وهَيا`, `وا وحدها`], correct: 0 },
        { title: `أحرف البعد`, kind: 'mcq', prompt: `Which group of أحرف نداء is used لِلْبَعيدِ (for someone far)?`, options: [`يا، آ، أَيا، هَيا`, `الهمزة، أيْ`, `وا وحدها`, `أل والتنوين`], correct: 0 },
        { title: `وا: نداء حقيقي أم مجاز`, kind: 'mcq', prompt: `وا رَأْسَاهُ was said by the Prophet ﷺ during his final illness. Was he literally summoning his head?`, options: [`No — وا is مجاز في النداء, expressing pain rather than an actual summons`, `Yes — وا always performs genuine calling`, `No — وا can only address لَفْظَ الجَلالَةِ`, `Yes, because رأس is مرفوع, so it must genuinely be summoned`], correct: 0 },
        { title: `عدد أحرف النداء`, kind: 'mcq', prompt: `How many أحرف النداء do grammarians count in total, across للقريب, للبعيد, and للندبة?`, options: [`سبعة`, `خمسة`, `ثلاثة`, `تسعة`], correct: 0 },
        { title: `شرط حذف حرف النداء الأول`, kind: 'mcq', prompt: `حرف النداء may be dropped when المنادى is one of two things. What is the first?`, options: [`مضاف`, `نكرة مقصودة`, `لفظ الجلالة`, `شبيه بالمضاف`], correct: 0 },
        { title: `شرط حذف حرف النداء الثاني`, kind: 'mcq', prompt: `حرف النداء may be dropped when المنادى is one of two things. What is the second?`, options: [`علم`, `نكرة غير مقصودة`, `لفظ الجلالة`, `مثنى`], correct: 0 },
        { title: `آل داود: أي شرط ينطبق`, kind: 'mcq', prompt: `﴿اِعْمَلُوا آلَ داوُدَ شُكْرًا﴾ drops حرف النداء before آلَ داوُدَ. What grammatical fact about آلَ داوُدَ licenses the drop?`, options: [`It is مضاف to داوُدَ`, `It is مبني على الفتح`, `It is a نكرة مقصودة`, `It is لفظ الجلالة`], correct: 0 },
        { title: `يوسف: أي شرط ينطبق`, kind: 'mcq', prompt: `﴿يوسُفُ أَعْرِضْ عَنْ هَذا﴾ drops حرف النداء before يوسُفُ. Which condition does that satisfy?`, options: [`يوسُفُ is علم`, `يوسُفُ is مضاف`, `يوسُفُ is نكرة مقصودة`, `يوسُفُ is لفظ الجلالة`], correct: 0 },
        { title: `الله: هل يجوز حذف يا`, kind: 'mcq', prompt: `Can حرف النداء ever be dropped before لَفْظ الجَلالَة, so that a speaker says اللهُ اغْفِرْ لي instead of يا اللهُ اغْفِرْ لي?`, options: [`No — the drop is never allowed before لفظ الجلالة`, `Yes, since لَفْظُ الجَلالَةِ is a علم`, `Yes, since لَفْظُ الجَلالَةِ is مضاف`, `Only in poetry, where شعراء freely drop particles to fit the metre`], correct: 0 },
        { title: `رجل: نكرة مقصودة`, kind: 'mcq', prompt: `Calling out to an unidentified man standing nearby, can a speaker simply say رَجُلُ! with no حرف نداء at all?`, options: [`No — نكرة مقصودة never permits the drop`, `Yes — نكرة مقصودة always permits the drop`, `Yes, if the man is far away`, `No, because رجل is لفظ الجلالة`], correct: 0 },
        { title: `القرينة وحذف حرف النداء`, kind: 'mcq', prompt: `When حرف النداء is dropped before a مضاف or a علم, what makes it obvious a calling is still intended?`, options: [`Context alone (القرينة)`, `A following تنوين`, `A following حرف جر`, `The word's إعراب changes to الرفع`], correct: 0 },
        { title: `وا رأساه: المعنى`, kind: 'mcq', prompt: `What did the Prophet ﷺ mean by saying وا رَأْسَاهُ during his final illness?`, options: [`He was expressing the pain in his head, not literally calling out to it`, `He was literally summoning his head to attention`, `He was asking someone to fetch water for his head`, `He was reciting a poetic line about heads in general`], correct: 0 },
        { title: `حرف النداء: تعريفه الوظيفي`, kind: 'mcq', prompt: `Grammatically, what role does حرف النداء (such as يا) play in a نداء construction?`, options: [`It stands in the place of the dropped فعل النداء, أَدْعو`, `It functions as المنادى itself`, `It is the مفعول به of the sentence`, `It marks المنادى as مرفوع`], correct: 0 },
        { title: `الفرق بين حالتي الحذف والمنع`, kind: 'mcq', prompt: `مضاف and علم allow حرف النداء to be dropped; لفظ الجلالة and نكرة مقصودة block it. What do the two blocking cases share, that the two allowing cases don't?`, options: [`Without حرف النداء, the calling would no longer be recognisable on its own`, `They are both أعلام — proper names that are already unambiguous on their own`, `They both take تنوين — the mark of an indefinite noun`, `They are both مضاف — the first term of an إضافة already supplies context`], correct: 0 },
        {
          title: `تركيب: يا عَبْدَ اللهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in يا عَبْدَ اللهِ.`,
          source: `يا عَبْدَ اللهِ`,
          words: [`يا`, `عَبْدَ`, `اللهِ`],
          labels: [`حرف نداء`, `منادى`, `مضاف إليه`],
          distractors: [`فعل أمر`, `مفعول لأجله`, `حرف جر`, `حرف عطف`, `فعل النداء المحذوف`, `مضاف`],
        },
        {
          title: `تركيب: اِعْمَلُوا آلَ داوُدَ شُكْرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word — note that حرف النداء has been dropped before المنادى.`,
          source: `اِعْمَلُوا آلَ داوُدَ شُكْرًا`,
          words: [`اِعْمَلُوا`, `آلَ`, `داوُدَ`, `شُكْرًا`],
          labels: [`فعل أمر وفاعله`, `منادى (حرف النداء محذوف)`, `مضاف إليه`, `مفعول لأجله`],
          distractors: [`فعل أمر وفاعله (هو)`, `منادى (لأنه علم)`, `مضاف إلى اسم آخر`, `مفعول به`, `حرف جر`, `خبر لجملة اسمية`],
        },
        {
          title: `تركيب: يوسُفُ أَعْرِضْ عَنْ هَذا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word — note that حرف النداء has been dropped before المنادى.`,
          source: `يوسُفُ أَعْرِضْ عَنْ هَذا`,
          words: [`يوسُفُ`, `أَعْرِضْ`, `عَنْ`, `هَذا`],
          labels: [`منادى (حرف النداء محذوف)`, `فعل أمر`, `حرف جر`, `اسم إشارة مجرور`],
          distractors: [`منادى (لأنه مضاف)`, `فعل أمر وفاعله (أنتم)`, `حرف عطف`, `اسم إشارة منصوب`, `مضاف إليه`, `مفعول به`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'إعراب المنادى',
      subtitle: 'The إعراب of المنادى — منصوب لفظًا vs مبني cases, المضاف لياء المتكلم, ترخيم, and اللهم',
      concepts: [
        {
          heading: 'إعراب المنادى: القاعدة العامة',
          lines: [
            { html: `Grammatically, المنادى is nothing exotic — it is simply the direct object of the hidden أدعو.`, list: false },
            { box: { title: 'Rule', lines: [`المُنادَى مَفْعولٌ بِهِ لِـ أَدْعو، مَنْصوبٌ إِمّا لَفْظًا وَإِمّا مَحَلًّا`] } },
            { html: `Because المنادى is المفعول به of أدعو, it is always <bdi>منصوب</bdi> — either visibly, with the نصب showing on the word itself (لفظًا), or only in underlying position, while its surface form is مبني (محلًّا).`, list: false },
          ],
          exercise: {
            prompt: `المنادى is grammatically the مفعول به of the dropped أدعو. What إعراب does that make it, whether the sign shows or not?`,
            kind: 'mcq',
            options: [`منصوب`, `مرفوع`, `مجرور`, `مجزوم`],
            correct: 0,
          },
        },
        {
          heading: 'متى يكون منصوبًا لفظًا',
          lines: [
            { html: `المنادى shows a visible نصب in three situations.`, list: false },
            { table: { title: 'حالات النصب لفظا الثلاث', headers: ['Case', 'Description', 'Example'], rows: [
              [`مضاف`, `المنادى is the first part of an إضافة`, `يا عَبْدَ اللهِ`],
              [`شبيه بالمضاف`, `it resembles a مضاف because, like one, it governs something after it`, `يا غافِرًا ذُنوبَنا`],
              [`نكرة غير مقصودة`, `an indefinite المنادى addressed to no one in particular`, `يا غافِلًا وَالْمَوْتُ يَطْلُبُهُ`],
            ] } },
            { html: `In يا غافِرًا ذُنوبَنا ("O One who forgives our sins"), <bdi>غافِرًا</bdi> resembles a مضاف because it governs <bdi>ذُنوبَنا</bdi> as its own مفعول به, even though it isn't itself literally in an إضافة. In يا غافِلًا وَالْمَوْتُ يَطْلُبُهُ ("O heedless one, while death pursues him!"), المنادى is addressed to no one in particular — any غافل at all — unlike the specific-but-unnamed man addressed in يا رَجُلُ.`, list: false },
          ],
          exercise: {
            prompt: `يا غافِرًا ذُنوبَنا shows غافِرًا carrying a visible نصب even though it is not literally مضاف. Which of the three منصوب لفظا cases explains that?`,
            kind: 'mcq',
            options: [`شبيه بالمضاف — it governs ذُنوبَنا the way a مضاف governs its مضاف إليه`, `مضاف — the whole word is directly followed by its own مضاف إليه`, `نكرة غير مقصودة — an indefinite منادى addressed to no one in particular`, `لفظ الجلالة — a special case that always keeps its نصب visible`],
            correct: 0,
          },
        },
        {
          heading: 'متى يكون مبنيًّا في محل نصب',
          lines: [
            { html: `Outside those three situations, a single-word (مفرد) المنادى does not show its نصب at all.`, list: false },
            { html: `This happens when المنادى is a single word that is neither مضاف nor شبيه بالمضاف: a <bdi>معرفة (علم)</bdi> or a <bdi>نكرة مقصودة</bdi>. Here the word is <bdi>مبني على ما يُرفع به</bdi> — built on whatever vowel or form it would carry if مرفوع — while its إعراب position stays منصوب.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `يا زَيْدُ`,
                translation: `O Zayd!`,
                cells: [`يا`, `زَيْدُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف نداء` }, { start: 1, end: 1, role: `منادى مبني على الضم في محل نصب` }] },
                ],
              },
            },
            { html: `زَيْدُ, a علم, is مبني على الضم في محل نصب. The same principle extends to duals and sound plurals: يا رَجُلانِ is مبني على الألف, and يا مُسْلِمونَ is مبني على الواو, both في محل نصب.`, list: false },
          ],
          exercise: {
            prompt: `يا رَجُلُ addresses a specific man whose name the speaker doesn't know — a نكرة مقصودة. What is رَجُلُ's إعراب?`,
            kind: 'mcq',
            options: [`مبني على الضم في محل نصب`, `منصوب لفظا لأنه شبيه بالمضاف`, `منصوب لفظا لأنه مضاف`, `مرفوع لأنه نكرة`],
            correct: 0,
          },
        },
        {
          heading: 'المنادى المضاف إلى ياء المتكلم',
          lines: [
            { html: `When المنادى is مضاف to ياء المتكلم ("my", as in عَبْدي — "my servant"), Arabic allows four different treatments of that ياء.`, list: false },
            { table: { title: 'المعاملات الأربع لياء المتكلم', headers: ['Treatment', 'Description', 'Example'], rows: [
              [`١. حذف الياء`, `drop the ياء entirely, keeping only its كسرة`, `﴿يا عِبادِ فَاتَّقونِ﴾`],
              [`٢. ثبوت الياء ساكنة`, `keep the ياء with سكون`, `﴿ياعِبادِيَ لا خَوْفٌ عَلَيْكُمُ﴾ (قراءة نافع)`],
              [`٣. ثبوت الياء مفتوحة`, `keep the ياء with فتحة`, `﴿يِعِبادِيَ الَّذينَ أَسْرَفوا﴾`],
              [`٤. قلب الكسرة فتحة والياء ألفًا`, `flip the كسرة to فتحة and the ياء to ألف`, `يا حَسْرَتَى`],
            ] } },
            { html: `The fourth pattern shows up especially in expressions of grief and sorrow — <bdi>يا حَسْرَتا</bdi>, <bdi>يا وَيْلَتا</bdi>, <bdi>يا حَسْرَتي</bdi>, and <bdi>يا وَيْلَتي</bdi> all belong to this same family of emotional exclamation, rather than a literal calling-out.`, list: false },
          ],
          exercise: {
            prompt: `﴿يا عِبادِ فَاتَّقونِ﴾ (originally يا عِبادي) shows only a كسرة where ياء المتكلم would be. Which of the four treatments of ياء المتكلم does this illustrate?`,
            kind: 'mcq',
            options: [`حذف الياء والاكتفاء بالكسرة`, `ثبوت الياء ساكنة`, `ثبوت الياء مفتوحة`, `قلب الكسرة فتحة والياء ألفًا`],
            correct: 0,
          },
        },
        {
          heading: 'ترخيم المنادى',
          lines: [
            { box: { title: 'Definition', lines: [`التَّرْخيمُ: حَذْفُ آخِرِ المُنادَى لِلتَّخْفيفِ`] } },
            { html: `<bdi>الترخيم</bdi> shortens المنادى by dropping its final letter(s), purely to make it easier or quicker to say. <bdi>يا فاطِمَ</bdi> (from يا فاطِمَةُ) is the model case: the تاء مربوطة is simply dropped.`, list: false },
            { html: `الترخيم is only permitted in two situations: (1) <bdi>الْمَخْتومُ بِالتّاءِ</bdi> — a name ending in تاء مربوطة, such as عائِشَة → يا عائِشُ; (2) <bdi>الْعَلَمُ المُذَكَّرُ الزّائِدُ عَلى ثَلاثَةِ أَحْرُفٍ غَيْرُ المُرَكَّبِ</bdi> — a masculine proper name of more than three letters that is not a compound name, such as جَعْفَر → يا جَعْفُ. This excludes زَيْنَب (only three root letters once the extra ب is removed), زَيْد (only three letters total), and عَبْدَ اللهِ (a مركب, compound name) — none of these may be shortened this way.`, list: false },
            { box: { title: 'Example', lines: [`حارِث → يا حارِ (كسرة، الحركة الأصلية) أو يا حارُ (ضمة)`] } },
            { html: `After ترخيم, the letter left at the end may carry either الحركة الأصلية — the vowel its dropped successor originally had, considered الأولى (preferred) — or simply الضمة, treating the shortened word as a fresh, independent noun.`, list: false },
          ],
          exercise: {
            prompt: `زَيْنَب and عَبْدَ اللهِ both fail the second condition for ترخيم — a masculine علم over three letters, not مركب. What disqualifies each of them?`,
            kind: 'mcq',
            options: [`زَيْنَب has only three root letters once the extra ب is removed; عَبْدَ اللهِ is a مركب`, `زَيْنَب is مؤنث, which the second condition excludes outright; عَبْدَ اللهِ is مذكر, yet still fails the مركب requirement`, `Both are already مرخّم, so the two conditions don't even apply to them`, `Both end in تاء مربوطة, which is the first condition for ترخيم, not the second`],
            correct: 0,
          },
        },
        {
          heading: 'اللهم',
          lines: [
            { box: { title: 'Definition', lines: [`اللَّهُمَّ: صيغَةُ نِداءٍ لِلْجَلالَةِ`] } },
            { html: `<bdi>اللَّهُمَّ</bdi> is a special calling-form used exclusively to address الله سبحانه وتعالى.`, list: false },
            { box: { title: 'Meaning', lines: [`أَصْلُهُ يا اللهُ`] } },
            { html: `اللَّهُمَّ originates as <bdi>يا اللهُ</bdi>: حرف النداء (يا) was dropped, and a شدّة-ميم at the end was added in its place — the same job حرف النداء normally does, performed instead by that final ميم.`, list: false },
            { html: `Beyond its literal use to call on الله, اللَّهُمَّ shows up in two further idiomatic roles: (1) <bdi>اللَّهُمَّ إِلّا</bdi> — when it precedes إِلّا, it signals how rare the exception being introduced is, as in اللَّهُمَّ إِلّا أَنْ يَكونَ كَذا ("...unless, extraordinarily, such-and-such were the case"); (2) <bdi>اللَّهُمَّ نَعَمْ</bdi> — when it precedes نَعَمْ, it signals the speaker's certainty, carrying the force of "yes, absolutely, without a doubt." Grammarians treat الاستغاثة, نداء التعجب, and الندبة as further constructions branching off from النداء, each with its own dedicated rules taken up in the lessons that follow rather than folded into this one.`, list: false },
          ],
          exercise: {
            prompt: `اللَّهُمَّ originates from يا اللهُ. What replaced the dropped حرف النداء (يا) in that construction?`,
            kind: 'mcq',
            options: [`A شدّة-ميم added at the end`, `A new حرف نداء, أيا`, `تنوين added at the end`, `The ألف of الاستغاثة`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `المنادى is grammatically the مفعول به of the dropped أدعو. What does that make its إعراب, whether the sign is visible or not?`, options: [`منصوب`, `مرفوع`, `مجرور`, `مجزوم`], correct: 0 },
        { q: `يا عَبْدَ اللهِ shows عَبْدَ carrying a visible نصب. Which of the three منصوب لفظا cases explains it?`, options: [`مضاف`, `شبيه بالمضاف`, `نكرة غير مقصودة`, `علم مفرد`], correct: 0 },
        { q: `يا زَيْدُ leaves زَيْدُ without a visible نصب mark. What is its إعراب?`, options: [`مبني على الضم في محل نصب`, `منصوب لفظا`, `مرفوع محلا`, `مجرور لفظا`], correct: 0 },
        { q: `﴿ياعِبادِيَ لا خَوْفٌ عَلَيْكُمُ﴾, as read by نافع, keeps ياء المتكلم with سكون. Which of the four treatments does that show?`, options: [`ثبوت الياء ساكنة`, `حذف الياء`, `ثبوت الياء مفتوحة`, `قلب الياء ألفًا`], correct: 0 },
        { q: `جَعْفَر can be shortened to يا جَعْفُ through الترخيم, but زَيْد cannot be shortened at all. Why not?`, options: [`زَيْد has only three letters total, failing the "more than three letters" condition`, `زَيْد ends in تاء مربوطة, which is the first ترخيم condition, not the second`, `زَيْد is مركب, a compound name that the second condition excludes`, `الترخيم never applies to أعلام مذكرة, since the rule is reserved for أعلام مؤنثة alone`], correct: 0 },
        { q: `اللَّهُمَّ نَعَمْ signals something specific about the speaker's answer. What does it signal?`, options: [`Certainty — "yes, absolutely, without a doubt"`, `Doubt about the answer, without committing either way`, `A rare, extraordinary exception, the sense اللَّهُمَّ إِلّا carries instead`, `A polite refusal, phrased so as not to offend`], correct: 0 },
      ],
      bank: [
        { title: `المنادى: أساس الإعراب`, kind: 'mcq', prompt: `Grammatically, المنادى plays which role relative to the dropped فعل النداء?`, options: [`مفعول به لـ أدعو`, `فاعل لـ أدعو`, `خبر لمبتدأ محذوف`, `بدل من فعل النداء`], correct: 0 },
        { title: `لفظا أم محلا`, kind: 'mcq', prompt: `المنادى's نصب can show in two different ways. What are they?`, options: [`لفظًا (visible on the word) or محلًّا (only in underlying position)`, `رفعًا أو جرًا (the other two إعراب markers, not used for المنادى)`, `أصليًا أو فرعيًا (original vs substitute signs, a different distinction entirely)`, `ظاهرًا أو مقدرًا فقط (visible vs estimated, not the لفظا/محلا split at all)`], correct: 0 },
        { title: `يا غافلا: أي حالة`, kind: 'mcq', prompt: `يا غافِلًا وَالْمَوْتُ يَطْلُبُهُ addresses no one in particular — any غافل at all. Which case of منصوب لفظا is this?`, options: [`نكرة غير مقصودة`, `مضاف`, `شبيه بالمضاف`, `علم مفرد`], correct: 0 },
        { title: `الفرق بين نكرة مقصودة وغير مقصودة`, kind: 'mcq', prompt: `يا رَجُلُ (addressed to one specific unnamed man in front of the speaker) differs in إعراب from يا غافِلًا (addressed to no one in particular). Why?`, options: [`يا رَجُلُ is نكرة مقصودة (مبني); يا غافِلًا is نكرة غير مقصودة (منصوب لفظا)`, `Both are مبني, with no difference`, `يا رَجُلُ is مضاف; يا غافِلًا is not, though neither is actually مضاف here`, `يا غافِلًا is لفظ الجلالة, which always stays منصوب لفظا`], correct: 0 },
        { title: `يا رجلان: المثنى`, kind: 'mcq', prompt: `يا رَجُلانِ addresses two men. What is رَجُلانِ's إعراب?`, options: [`مبني على الألف في محل نصب`, `منصوب لفظا بالياء`, `مبني على الضم في محل نصب`, `مرفوع بالألف`], correct: 0 },
        { title: `يا مسلمون: جمع المذكر السالم`, kind: 'mcq', prompt: `يا مُسْلِمونَ addresses a group. What is مُسْلِمونَ's إعراب؟`, options: [`مبني على الواو في محل نصب`, `منصوب لفظا بالياء`, `مبني على الألف في محل نصب`, `مجرور بالياء`], correct: 0 },
        { title: `شرط النصب لفظا: شبيه بالمضاف`, kind: 'mcq', prompt: `What makes غافِرًا in يا غافِرًا ذُنوبَنا count as شبيه بالمضاف, even though it isn't literally مضاف?`, options: [`It governs ذُنوبَنا as its own مفعول به, the way a مضاف governs a مضاف إليه`, `It ends in تنوين, the way any indefinite noun would`, `It is a علم, and أعلام govern the noun placed right after them`, `It is مبني, so its ending never shows a real إعراب mark`], correct: 0 },
        { title: `قراءات ياء المتكلم`, kind: 'mcq', prompt: `﴿يِعِبادِيَ الَّذينَ أَسْرَفوا عَلى أَنْفُسِهِمْ﴾ keeps ياء المتكلم with فتحة. Which of the four treatments does this show؟`, options: [`ثبوت الياء مفتوحة`, `ثبوت الياء ساكنة`, `حذف الياء`, `قلب الياء ألفًا`], correct: 0 },
        { title: `حسرتى: القلب`, kind: 'mcq', prompt: `يا حَسْرَتَى flips الكسرة to فتحة and الياء to ألف. Which of the four treatments of ياء المتكلم is that؟`, options: [`قلب الكسرة فتحة والياء ألفًا`, `ثبوت الياء ساكنة`, `حذف الياء والاكتفاء بالكسرة`, `ثبوت الياء مفتوحة`], correct: 0 },
        { title: `يا عبادي: أصلها`, kind: 'mcq', prompt: `﴿يا عِبادِ فَاتَّقونِ﴾ shows only a كسرة where ياء المتكلم originally sat. What was the original, unshortened form؟`, options: [`يا عِبادي`, `يا عِبادَ`, `يا عِبادَكَ`, `يا عَبْدي`], correct: 0 },
        { title: `حارث: حالتا الترخيم`, kind: 'mcq', prompt: `After shortening حارِث by الترخيم, the remaining letter can carry either of two vowels. What are they, and which is preferred?`, options: [`الحركة الأصلية (preferred) or الضمة`, `الفتحة (preferred) or الكسرة`, `السكون فقط, with no alternative vowel at all`, `التنوين أو السكون, though neither actually applies after ترخيم`], correct: 0 },
        { title: `عائشة: شرط الترخيم`, kind: 'mcq', prompt: `عائِشَة can be shortened to يا عائِشُ. Which of the two conditions for ترخيم does عائِشَة satisfy?`, options: [`المختوم بالتاء — it ends in تاء مربوطة`, `العلم المذكر الزائد على ثلاثة أحرف — the other ترخيم condition, for masculine names only`, `كلا الشرطين معًا — as if عائِشَة met both at once`, `لا شيء منهما — as if neither condition actually applied here`], correct: 0 },
        { title: `عبد الله: لماذا لا يُرخَّم`, kind: 'mcq', prompt: `عَبْدَ اللهِ cannot be shortened through الترخيم even though it names a person. Why not?`, options: [`It is مركب (a compound name), which الترخيم excludes`, `It is مؤنث, and ترخيم only ever applies to masculine names`, `It ends in تاء مربوطة, and endings like that block ترخيم rather than allow it`, `It is فقط ثلاثة أحرف, one letter short of the "more than three" rule`], correct: 0 },
        { title: `اللهم: أصلها`, kind: 'mcq', prompt: `اللَّهُمَّ is a special نداء form addressed only to الله. What is its original, unshortened form?`, options: [`يا اللهُ`, `أَدْعو اللهَ`, `يا رَبَّنا`, `أَيا اللهُ`], correct: 0 },
        { title: `اللهم إلا: ماذا تفيد`, kind: 'mcq', prompt: `When اللَّهُمَّ precedes إِلّا, as in اللَّهُمَّ إِلّا أَنْ يَكونَ كَذا, what does it signal about the exception being introduced?`, options: [`That the exception is rare or extraordinary`, `That the exception is certain to happen`, `That there is no real exception at all`, `That the speaker is asking a question`], correct: 0 },
        { title: `المنادى: الاسم المبني والمقدر`, kind: 'mcq', prompt: `When المنادى is مبني في محل نصب, is a نصب vowel actually pronounced on the word؟`, options: [`No — the word is مبني on whatever vowel it would carry if مرفوع, while its position stays منصوب`, `Yes — a فتحة is always pronounced, marking المنادى as منصوب لفظًا`, `Yes — a تنوين is always pronounced, the way an ordinary نكرة carries`, `No — the word disappears entirely, leaving only حرف النداء`], correct: 0 },
        { title: `اسم علم مفرد: البناء`, kind: 'mcq', prompt: `A single-word (مفرد) المنادى that is a علم — neither مضاف nor شبيه بالمضاف — takes which إعراب؟`, options: [`مبني على ما يُرفع به, في محل نصب`, `منصوب لفظا دائما`, `مجرور لفظا`, `مرفوع حقيقة`], correct: 0 },
        { title: `ثلاثة أسباب للنصب لفظا`, kind: 'mcq', prompt: `Which three conditions together make المنادى منصوب لفظًا rather than مبني?`, options: [`مضاف، شبيه بالمضاف، نكرة غير مقصودة`, `علم، نكرة مقصودة، مثنى`, `مضاف، علم، جمع مذكر سالم`, `نكرة مقصودة، مثنى، جمع`], correct: 0 },
        {
          title: `تركيب: يا عَبْدَ اللهِ (بالإعراب الكامل)`,
          kind: 'tarkeeb',
          instruction: `Identify the full grammatical role of each word.`,
          source: `يا عَبْدَ اللهِ`,
          words: [`يا`, `عَبْدَ`, `اللهِ`],
          labels: [`حرف نداء`, `منادى منصوب لفظا (مضاف)`, `مضاف إليه مجرور`],
          distractors: [`منادى منصوب لفظا (شبيه بالمضاف)`, `منادى منصوب لفظا (نكرة غير مقصودة)`, `منادى مبني على الضم في محل نصب`, `مضاف إليه منصوب`, `حرف جر`, `فعل أمر`],
        },
        {
          title: `تركيب: يا غافِرًا ذُنوبَنا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `يا غافِرًا ذُنوبَنا`,
          words: [`يا`, `غافِرًا`, `ذُنوبَنا`],
          labels: [`حرف نداء`, `منادى منصوب لفظا (شبيه بالمضاف)`, `مفعول به لاسم الفاعل`],
          distractors: [`منادى منصوب لفظا (مضاف)`, `منادى منصوب لفظا (نكرة غير مقصودة)`, `منادى مبني على الضم في محل نصب`, `مفعول به`, `مضاف إليه`, `خبر`],
        },
        {
          title: `تركيب: يا زَيْدُ (البناء)`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `يا زَيْدُ`,
          words: [`يا`, `زَيْدُ`],
          labels: [`حرف نداء`, `منادى مبني على الضم في محل نصب`],
          distractors: [`منادى منصوب لفظا`, `منادى مبني على الواو في محل نصب`, `منادى مبني على الألف في محل نصب`, `منادى منصوب لفظا (مضاف)`, `مضاف إليه`, `منادى مبني على الضم (نكرة مقصودة)`],
        },
        {
          title: `تركيب: يا رَجُلُ (نكرة مقصودة)`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `يا رَجُلُ`,
          words: [`يا`, `رَجُلُ`],
          labels: [`حرف نداء`, `منادى مبني على الضم في محل نصب`],
          distractors: [`منادى منصوب لفظا`, `منادى مبني على الواو في محل نصب`, `منادى مبني على الألف في محل نصب`, `منادى منصوب لفظا (نكرة غير مقصودة)`, `نعت`, `منادى مبني على الضم (علم)`],
        },
        {
          title: `تركيب: يا مُسْلِمونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `يا مُسْلِمونَ`,
          words: [`يا`, `مُسْلِمونَ`],
          labels: [`حرف نداء`, `منادى مبني على الواو في محل نصب`],
          distractors: [`منادى مبني على الألف في محل نصب`, `منادى مبني على الضم في محل نصب`, `منادى منصوب لفظا (شبيه بالمضاف)`, `منادى منصوب لفظا (مضاف)`, `فاعل مرفوع بالواو`, `نعت`],
        },
        {
          title: `تركيب: ﴿يا عِبادِ فَاتَّقونِ﴾`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part — note that ياء المتكلم has been dropped from المنادى, leaving only its كسرة.`,
          source: `يا عِبادِ فَاتَّقونِ`,
          words: [`يا`, `عِبادِ`, `فَاتَّقونِ`],
          labels: [`حرف نداء`, `منادى مضاف لياء المتكلم المحذوفة (منصوب لفظا)`, `فعل أمر وفاعله ومفعوله`],
          distractors: [`منادى مضاف لياء المتكلم الساكنة (منصوب لفظا)`, `منادى مضاف لياء المتكلم المفتوحة (منصوب لفظا)`, `منادى مبني على الضم في محل نصب`, `فعل أمر وفاعله`, `حرف جر`, `مضاف إليه`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'الاستغاثة',
      subtitle: 'Calling Out for Rescue and in Astonishment — الاستغاثة’s three أركان, its فتحة/كسرة contrast, and نداء التعجب reusing the same skeleton',
      concepts: [
        {
          heading: 'الاستغاثة: تعريفها وأركانها',
          lines: [
            { html: `الاستغاثة and نداء التعجب both borrow the ordinary structure of النداء but repurpose it toward a different end. Master الاستغاثة's rules, and نداء التعجب simply reuses them with one substitution.`, list: false },
            { box: { title: 'Definition', lines: [`الِاسْتِغاثَةُ: نِداءُ المُنادِي لِإِغاثَةِ آخَرَ`] } },
            { html: `<bdi>الاستغاثة</bdi> is calling someone out in order to ask them to come to the aid of someone (or something) else. Ordinary يا عَبْدَ الحَميدِ is just calling someone over; استغاثة specifically calls them for help, and for helping someone in particular.`, list: false },
            { box: { title: 'Rule', lines: [`لِلِاسْتِغاثَةِ ثَلاثَةُ أَرْكانٍ`] } },
            { html: `(1) <bdi>حَرْفُ الِاسْتِغاثَةِ</bdi> — unlike ordinary نداء, which allows seven particles, الاستغاثة allows only يا; (2) <bdi>المُسْتَغاث</bdi> — the same منادى as ordinary نداء, renamed because the calling seeks aid from this person; (3) <bdi>المُسْتَغاثُ لَهُ</bdi> — the person or thing on behalf of whom aid is sought.`, list: false },
          ],
          exercise: {
            prompt: `Ordinary نداء allows seven possible أحرف. How many does الاستغاثة allow?`,
            kind: 'mcq',
            options: [`واحد فقط — يا`, `اثنان — يا وآ`, `ثلاثة — يا، وا، وآ`, `سبعة كلها — every حرف نداء ordinary نداء allows`],
            correct: 0,
          },
        },
        {
          heading: 'أحكام المستغاث: اللام أو الألف',
          lines: [
            { box: { title: 'Rule', lines: [`تَدْخُلُ على المُسْتَغاثِ لامٌ جارَّةٌ مَفْتوحَةٌ`] } },
            { html: `A جارّة لام carrying فتحة may be added directly before المستغاث, clarifying that genuine help — not a trivial summons — is being sought. Instead of the لام, an ألف may be added onto the end of المستغاث itself as a substitute marker.`, list: false },
            { box: { title: 'Example', lines: [`يا لَلَّهِ (باللام) — يا زَيْدا، يا زَيْداهْ (بالألف)`] } },
            { html: `In يا لَلَّهِ, لَفْظِ الجَلالَةِ carries the فتحة-لام (لام الاستغاثة), which is جارّة, making لَفْظَ الجَلالَةِ مجرورا لفظا while المستغاث itself stays منصوب محلا (as any منادى). يا زَيْدا and يا زَيْداهْ instead add an ألف onto زَيْد, achieving the same effect without the لام.`, list: false },
          ],
          exercise: {
            prompt: `يا زَيْدا and يا زَيْداهْ replace which element of ordinary الاستغاثة with an ألف on the end of المستغاث?`,
            kind: 'mcq',
            options: [`لام الاستغاثة`, `لام المستغاث له`, `حرف الاستغاثة نفسه`, `نون التوكيد`],
            correct: 0,
          },
        },
        {
          heading: 'أحكام المستغاث المعطوف',
          lines: [
            { html: `When a second مستغاث is coordinated onto the first with و, the treatment of لام depends on whether يا is repeated.`, list: false },
            { box: { title: 'Rule', lines: [`بِتَكْرارِ يا: اللامُ مَفْتوحَةٌ. بِغَيْرِ تَكْرارِها: اللامُ مَكْسورَةٌ`] } },
            { html: `If يا is repeated before the second مستغاث, its لام stays مَفْتوحَة — no ambiguity is possible, since each مستغاث has its own fresh يا. If يا is not repeated, the second لام becomes مَكْسورَة instead — a deliberate device that keeps it from being mistaken for المستغاث له's لام, which is always مكسورة.`, list: false },
            { box: { title: 'Example', lines: [`يا لَلْأَميرِ وَيا لَلْمُسْلِمينَ لِلْمَظْلومينَ (يا مكررة، فتحة في الاثنين) — يا لَلْأَميرِ وَلِلْمُسْلِمينَ لِلْمَظْلومينَ (بلا تكرار، فتحة ثم كسرة)`] } },
          ],
          exercise: {
            prompt: `In a coordinated الاستغاثة, يا is NOT repeated before the second مستغاث. What happens to that second مستغاث's لام?`,
            kind: 'mcq',
            options: [`It becomes مكسورة instead of مفتوحة`, `It stays مفتوحة exactly like the first`, `It is dropped entirely`, `It becomes همزة`],
            correct: 0,
          },
        },
        {
          heading: 'أحكام المستغاث له',
          lines: [
            { box: { title: 'Rule', lines: [`تَدْخُلُ على المُسْتَغاثِ لَهُ لامٌ جارَّةٌ مَكْسورَةٌ`] } },
            { html: `المستغاث له always takes a جارّة لام too, but this one carries كسرة — the opposite vowel from المستغاث's لام. This فتحة/كسرة contrast is exactly what keeps the two "helper" roles distinguishable at a glance, especially once both sit side by side as جار ومجرور phrases.`, list: false },
            { box: { title: 'Example', lines: [`يا لَلَّهِ لِلْمُسْلِمينَ — يا لَزَيْدٍ لِخالِدٍ`] } },
            { html: `In يا لَلَّهِ لِلْمُسْلِمينَ ("O for the sake of Allah's help, for the Muslims!"), لَفْظِ الجَلالَةِ (المستغاث) carries لام مفتوحة, while المُسْلِمينَ (المستغاث له) carries لام مكسورة. The same contrast distinguishes زيد (the helper being called) from خالد (the one who needs help) in يا لَزَيْدٍ لِخالِدٍ.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `يا لَلَّهِ لِلْمُسْلِمينَ`,
                translation: `O for the sake of Allah's help, for the Muslims!`,
                cells: [`يا`, `لَلَّهِ`, `لِلْمُسْلِمينَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف الاستغاثة` }, { start: 1, end: 1, role: `مستغاث؛ اللام مفتوحة` }, { start: 2, end: 2, role: `مستغاث له؛ اللام مكسورة` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In يا لَلَّهِ لِلْمُسْلِمينَ, both لَفْظِ الجَلالَةِ and المُسْلِمينَ carry a جارّة لام, but with opposite vowels. Which carries the كسرة?`,
            kind: 'mcq',
            options: [`المُسْلِمينَ, since it is المستغاث له`, `لَفْظِ الجَلالَةِ, since it is المستغاث`, `Both carry كسرة — as if there were no فتحة/كسرة contrast at all`, `Neither carries a vowel — both are مبنيان`],
            correct: 0,
          },
        },
        {
          heading: 'نداء التعجب',
          lines: [
            { box: { title: 'Definition', lines: [`نِداءُ التَّعَجُّبِ: نِداءُ المُنادِي ما يُتَعَجَّبُ مِنْهُ`] } },
            { html: `نداء التعجب "calls out" the thing one is amazed by. There is no real summons at all here — the thing being "called" may not even be a living, hearing addressee (like القرآن). It exists purely to voice astonishment.`, list: false },
            { box: { title: 'Rule', lines: [`نِداءُ التَّعَجُّبِ مِثْلُ الِاسْتِغاثَةِ`] } },
            { html: `نداء التعجب follows the exact same grammatical machinery as الاستغاثة, with one substitution: <bdi>المُتَعَجَّبُ مِنْهُ</bdi> takes over the slot المستغاث occupied (لام مفتوحة, or الألف in its place). Alternatively, المتعجب منه can instead take the other slot — that of المستغاث له (لام مكسورة) — simply by dropping the مستغاث slot altogether, since نداء التعجب, unlike true الاستغاثة, has no second party actually receiving help.`, list: false },
            { box: { title: 'Example', lines: [`يا لَلْقُرْآنِ (كالمستغاث) — يا قُرْآناهْ (بالألف) — يا لِلْقُرْآنِ (كالمستغاث له)`] } },
            { html: `يا لَلْقُرْآنِ ("What a Qur'an!") places القرآن in المستغاث's own slot, لام مفتوحة or its ألف substitute. يا لِلْقُرْآنِ instead places it in المستغاث له's slot, لام مكسورة, with no مستغاث mentioned at all — the whole sentence is just this one exclamation of amazement.`, list: false },
          ],
          exercise: {
            prompt: `يا لِلْقُرْآنِ places القرآن in the المستغاث له slot, with لام مكسورة and no مستغاث mentioned at all. Why is that possible in نداء التعجب specifically?`,
            kind: 'mcq',
            options: [`نداء التعجب has no second party actually receiving help, so المتعجب منه can occupy either slot`, `القرآن is always المستغاث له in any construction`, `لام مكسورة only ever appears in نداء التعجب`, `المستغاث is never allowed in نداء التعجب`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الاستغاثة allows only one حرف, unlike ordinary نداء's seven. Which one?`, options: [`يا`, `وا`, `الهمزة`, `أيْ`], correct: 0 },
        { q: `الاستغاثة has three أركان. Which one names the person or thing that actually needs the help?`, options: [`المستغاث له`, `المستغاث`, `حرف الاستغاثة`, `لام الاستغاثة`], correct: 0 },
        { q: `يا زَيْدا achieves the same effect as يا لَزَيْدٍ, but without a لام. What does it use instead?`, options: [`An ألف added to the end of المستغاث`, `A كسرة added onto the end of المستغاث`, `A تنوين added onto the end of المستغاث`, `A second يا added before المستغاث`], correct: 0 },
        { q: `المستغاث's لام and المستغاث له's لام differ by a single vowel. Which is which?`, options: [`المستغاث: فتحة؛ المستغاث له: كسرة`, `المستغاث: كسرة؛ المستغاث له: فتحة`, `Both carry the same vowel`, `Neither carries a vowel`], correct: 0 },
        { q: `In يا لَلْأَميرِ وَلِلْمُسْلِمينَ لِلْمَظْلومينَ, يا is not repeated before المسلمين. What vowel does its لام take, and why?`, options: [`كسرة — to avoid being mistaken for المستغاث له's لام`, `فتحة — matching the first مستغاث exactly`, `سكون — since no يا precedes it`, `ضمة — as with any مرفوع اسم`], correct: 0 },
        { q: `نداء التعجب reuses الاستغاثة's machinery with one substitution. What replaces المستغاث?`, options: [`المتعجب منه`, `المستغاث له`, `حرف الاستغاثة`, `المنادى المضاف`], correct: 0 },
      ],
      bank: [
        { title: `الاستغاثة: التعريف`, kind: 'mcq', prompt: `Which of these correctly defines الاستغاثة?`, options: [`نداء المنادي — calling someone to seek their aid for someone else`, `Calling the منادى to express grief — the job الندبة does, not الاستغاثة`, `Calling merely to draw attention — ordinary نداء, with no aid involved`, `Calling to express amazement at something — the job نداء التعجب does`], correct: 0 },
        { title: `أركان الاستغاثة الثلاثة`, kind: 'mcq', prompt: `Which three-part list gives أركان الاستغاثة?`, options: [`حرف الاستغاثة، المستغاث، المستغاث له`, `حرف النداء، المنادى، المضاف إليه`, `المستغاث، الفاعل، المفعول به`, `حرف الاستغاثة، الفاعل، الخبر`], correct: 0 },
        { title: `حرف الاستغاثة الوحيد`, kind: 'mcq', prompt: `Ordinary نداء has seven possible أحرف; الاستغاثة restricts that to just one. Which؟`, options: [`يا`, `وا`, `آ`, `أيا`], correct: 0 },
        { title: `لام المستغاث: الفتحة`, kind: 'mcq', prompt: `What vowel does the جارّة لام added before المستغاث carry؟`, options: [`فتحة`, `كسرة`, `ضمة`, `سكون`], correct: 0 },
        { title: `الألف بدلا من اللام`, kind: 'mcq', prompt: `Instead of adding لام الاستغاثة, a speaker can achieve the same effect another way. How؟`, options: [`Adding an ألف onto the end of المستغاث itself`, `Repeating يا twice, once for each part of the phrase`, `Dropping المستغاث entirely and addressing only المستغاث له`, `Using وا instead of يا, since وا also names a حرف نداء`], correct: 0 },
        { title: `يا لله: الإعراب`, kind: 'mcq', prompt: `In يا لَلَّهِ, لَفْظِ الجَلالَةِ carries a جارّة لام, making it مجرور لفظا. What is المستغاث's إعراب overall, despite that لفظي جر؟`, options: [`منصوب محلا, like any منادى`, `مجرور محلا, as if it followed a real حرف جر`, `مرفوع لفظا, as if it were a plain مبتدأ`, `مجزوم, as if a jussive rule applied here`], correct: 0 },
        { title: `المعطوف بتكرار يا`, kind: 'mcq', prompt: `When a second مستغاث is coordinated with a repeated يا, what vowel does its لام carry؟`, options: [`فتحة, exactly like the first`, `كسرة, unlike the first`, `ضمة, though this position never actually takes رفع`, `لا لام له أصلا, since the عطف itself carries the meaning`], correct: 0 },
        { title: `المعطوف بلا تكرار يا`, kind: 'mcq', prompt: `When a second مستغاث is coordinated WITHOUT repeating يا, what vowel does its لام carry, and why؟`, options: [`كسرة — so it isn't mistaken for المستغاث له's لام`, `فتحة — no change from the first`, `ضمة — since it is now مرفوع`, `لا لام له أصلا — as though المعطوف dropped the لام altogether`], correct: 0 },
        { title: `لماذا الفرق بين اللامين مقصود`, kind: 'mcq', prompt: `Why does الاستغاثة deliberately give المستغاث and المستغاث له opposite لام vowels؟`, options: [`To keep the two roles distinguishable when both sit side by side as جار ومجرور`, `Because المستغاث له is always مذكر, and مذكر nouns take كسرة by convention`, `Because المستغاث always comes first alphabetically, so its لام gets the lighter vowel`, `It has no grammatical purpose — the two لامات could just as easily match`], correct: 0 },
        { title: `يا لزيد لخالد: من المستغاث ومن المستغاث له`, kind: 'mcq', prompt: `In يا لَزَيْدٍ لِخالِدٍ, who is being called for help, and who is being helped؟`, options: [`زيد is المستغاث (called for help); خالد is المستغاث له (being helped)`, `خالد is المستغاث (called for help); زيد is المستغاث له (being helped)`, `Both are المستغاث, with no one actually cast as المستغاث له`, `Neither role applies here, since this sentence isn't real استغاثة at all`], correct: 0 },
        { title: `نداء التعجب: التعريف`, kind: 'mcq', prompt: `Which of these correctly defines نداء التعجب?`, options: [`"Calling out" the thing one is amazed by`, `Calling someone to seek their aid for someone else`, `Calling to express grief — the job of الندبة, not this construction`, `An ordinary call, just to draw attention`], correct: 0 },
        { title: `هل نداء التعجب نداء حقيقي`, kind: 'mcq', prompt: `In نداء التعجب, is the thing being "called" always a hearing, living addressee؟`, options: [`No — it may be something like القرآن, since the construction exists only to voice astonishment`, `Yes — it must always be a person, exactly as in ordinary نداء`, `Yes — it must always be لَفْظُ الجَلالَةِ`, `No — it can never be a real noun at all`], correct: 0 },
        { title: `يا للقرآن: أي دور`, kind: 'mcq', prompt: `يا لَلْقُرْآنِ places القرآن in which slot from الاستغاثة's own machinery؟`, options: [`المستغاث's slot (لام مفتوحة)`, `المستغاث له's slot (لام مكسورة)`, `حرف الاستغاثة's slot (as if it replaced the particle itself)`, `لا يشغل أي دور (as if القرآن weren't part of the construction at all)`], correct: 0 },
        { title: `يا للقرآن: الألف البديلة`, kind: 'mcq', prompt: `Instead of يا لَلْقُرْآنِ, what alternative form uses an ألف in place of the لام؟`, options: [`يا قُرْآناهْ`, `يا لِلْقُرْآنِ`, `يا أَيُّها القُرْآنُ`, `وا قُرْآناهْ`], correct: 0 },
        { title: `اللام المكسورة في نداء التعجب`, kind: 'mcq', prompt: `يا لِلْقُرْآنِ, with لام مكسورة and no مستغاث mentioned, places القرآن in which slot؟`, options: [`المستغاث له's slot`, `المستغاث's slot`, `حرف الاستغاثة's slot`, `لا يوجد له دور`], correct: 0 },
        { title: `الفرق بين الاستغاثة ونداء التعجب`, kind: 'mcq', prompt: `الاستغاثة genuinely seeks help for someone; نداء التعجب does not. What single substitution turns one construction's machinery into the other's?`, options: [`المتعجب منه replaces المستغاث (or المستغاث له)`, `حرف الاستغاثة changes from يا to وا`, `المستغاث له is required in both equally`, `النصب becomes رفع, as if المنادى's case actually changed`], correct: 0 },
        { title: `استغاثة أم نداء عادي`, kind: 'mcq', prompt: `يا عَبْدَ الحَميدِ, said as an ordinary call, differs from the same phrase said as استغاثة. What is the difference؟`, options: [`استغاثة specifically seeks aid for someone in particular, not just attention`, `استغاثة never uses يا, relying only on other particles instead`, `استغاثة always drops حرف النداء, unlike the ordinary call`, `There is no real difference, since both forms mean exactly the same thing`], correct: 0 },
        { title: `لام الاستغاثة: وظيفتها`, kind: 'mcq', prompt: `What purpose does لام الاستغاثة serve, beyond marking المستغاث's إعراب لفظا؟`, options: [`It clarifies that genuine help is being sought, not a trivial summons`, `It changes المستغاث into المستغاث له`, `It replaces حرف الاستغاثة entirely`, `It marks المستغاث as نكرة`], correct: 0 },
        {
          title: `تركيب: يا لَلَّهِ لِلْمُسْلِمينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `يا لَلَّهِ لِلْمُسْلِمينَ`,
          words: [`يا`, `لَلَّهِ`, `لِلْمُسْلِمينَ`],
          labels: [`حرف الاستغاثة`, `مستغاث مجرور بلام مفتوحة`, `مستغاث له مجرور بلام مكسورة`],
          distractors: [`مستغاث مجرور بلام مكسورة`, `مستغاث له مجرور بلام مفتوحة`, `متعجب منه بمنزلة المستغاث (لام مفتوحة)`, `حرف نداء`, `مستغاث (الألف عوض عن لام الاستغاثة)`, `مضاف إليه`],
        },
        {
          title: `تركيب: يا لَزَيْدٍ لِخالِدٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `يا لَزَيْدٍ لِخالِدٍ`,
          words: [`يا`, `لَزَيْدٍ`, `لِخالِدٍ`],
          labels: [`حرف الاستغاثة`, `مستغاث مجرور بلام مفتوحة`, `مستغاث له مجرور بلام مكسورة`],
          distractors: [`مستغاث مجرور بلام مكسورة`, `مستغاث له مجرور بلام مفتوحة`, `متعجب منه بمنزلة المستغاث له`, `حرف نداء`, `مستغاث معطوف بلام مفتوحة`, `منادى منصوب لفظا`],
        },
        {
          title: `تركيب: يا زَيْدا (بالألف)`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part — note that الألف here substitutes for لام الاستغاثة.`,
          source: `يا زَيْدا`,
          words: [`يا`, `زَيْدا`],
          labels: [`حرف الاستغاثة`, `مستغاث (الألف عوض عن لام الاستغاثة)`],
          distractors: [`مستغاث له`, `مستغاث مجرور بلام مفتوحة`, `منادى مبني على الضم في محل نصب`, `متعجب منه بمنزلة المستغاث`, `حرف جر`, `مستغاث (الألف عوض عن لام المستغاث له)`],
        },
        {
          title: `تركيب: يا لَلْأَميرِ وَيا لَلْمُسْلِمينَ لِلْمَظْلومينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part — note يا is repeated before the second مستغاث.`,
          source: `يا لَلْأَميرِ وَيا لَلْمُسْلِمينَ لِلْمَظْلومينَ`,
          words: [`يا`, `لَلْأَميرِ`, `وَيا`, `لَلْمُسْلِمينَ`, `لِلْمَظْلومينَ`],
          labels: [`حرف الاستغاثة الأول`, `مستغاث بلام مفتوحة`, `حرف عطف وحرف استغاثة مكرر`, `مستغاث معطوف بلام مفتوحة`, `مستغاث له بلام مكسورة`],
          distractors: [`مستغاث معطوف بلام مكسورة (بلا تكرار يا)`, `حرف عطف فقط (بلا حرف استغاثة)`, `مستغاث له بلام مفتوحة`, `مستغاث بلام مكسورة`, `منادى مبني على الضم في محل نصب`, `نعت`],
        },
        {
          title: `تركيب: يا لَلْأَميرِ وَلِلْمُسْلِمينَ لِلْمَظْلومينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part — note يا is NOT repeated before the second مستغاث.`,
          source: `يا لَلْأَميرِ وَلِلْمُسْلِمينَ لِلْمَظْلومينَ`,
          words: [`يا`, `لَلْأَميرِ`, `وَلِلْمُسْلِمينَ`, `لِلْمَظْلومينَ`],
          labels: [`حرف الاستغاثة`, `مستغاث بلام مفتوحة`, `مستغاث معطوف بلام مكسورة (بلا تكرار يا)`, `مستغاث له بلام مكسورة`],
          distractors: [`حرف عطف وحرف استغاثة مكرر`, `مستغاث معطوف بلام مفتوحة (بتكرار يا)`, `مستغاث له بلام مفتوحة`, `مستغاث بلام مكسورة`, `حرف جر زائد`, `منادى مبني على الضم في محل نصب`],
        },
        {
          title: `تركيب: يا لَلْقُرْآنِ (نداء التعجب)`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part in this نداء التعجب.`,
          source: `يا لَلْقُرْآنِ`,
          words: [`يا`, `لَلْقُرْآنِ`],
          labels: [`حرف نداء التعجب`, `متعجب منه بمنزلة المستغاث (لام مفتوحة)`],
          distractors: [`متعجب منه بمنزلة المستغاث له`, `متعجب منه بمنزلة المستغاث (لام مكسورة)`, `مستغاث مجرور بلام مفتوحة`, `حرف الاستغاثة`, `منادى مبني على الضم في محل نصب`, `مضاف إليه`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'الندبة',
      subtitle: 'Calling Out in Grief — the two أحرف الندبة, the same إعراب as ordinary نداء, and ألف الندبة with هاء السكت',
      concepts: [
        {
          heading: 'تعريف الندبة وأحرفها',
          lines: [
            { html: `الندبة closes out the نداء section. Where الاستغاثة calls someone for help and نداء التعجب calls something out in amazement, الندبة calls out to something in grief — mourning someone who has died, or crying out over pain or loss.`, list: false },
            { box: { title: 'Definition', lines: [`النُّدْبَةُ: إِظْهارُ الحُزْنِ`] } },
            { html: `النُّدْبَةُ is the نداء construction used specifically to express sorrow — calling out to a person who has passed away, or to something painful, as a way of voicing that grief out loud.`, list: false },
            { box: { title: 'Rule', lines: [`تَكونُ النُّدْبَةُ بِحَرْفَيْنِ`] } },
            { html: `(1) <bdi>وا</bdi> — the dedicated particle of الندبة, and the safest choice, since وا is never used for anything but expressing grief; (2) <bdi>يا</bdi> — usable <bdi>إِذا أُمِنَ اللَّبْسَ بِالْمُنادَى المَحْضِ</bdi>, "if confusion with a plain (ordinary) منادى is safely ruled out" — only when context makes it unmistakably clear that grief, not an everyday call, is intended.`, list: false },
            { box: { title: 'Example', lines: [`وا أَبَتاهُ`] } },
            { html: `"Oh, my father!" — mourning a father who has died or is gravely unwell. وا itself signals grief regardless of context, so there is no possible ambiguity here. By contrast, if a teacher has just passed away, crying out يا أُسْتاذُ is understood as حُزْن only because the surrounding context (his passing) rules out any other reading.`, list: false },
          ],
          exercise: {
            prompt: `Why is وا considered the safer of the two أحرف الندبة, compared to يا?`,
            kind: 'mcq',
            options: [`وا is never used for anything but expressing grief, so no context is needed to rule out ambiguity`, `وا is grammatically easier to pronounce than the other أحرف النداء`, `يا can never follow a علم, unlike وا which can follow anything`, `وا always takes تنوين, marking it as indefinite by default`],
            correct: 0,
          },
        },
        {
          heading: 'إعراب المنادى في الندبة',
          lines: [
            { box: { title: 'Rule', lines: [`إِعْرابُ المُنادَى في النُّدْبَةِ مِثْلُهُ في غَيْرِها`] } },
            { html: `المنادى in الندبة follows exactly the same إعراب rules laid out for ordinary نداء: منصوب لفظا if مضاف, شبيه بالمضاف, or نكرة غير مقصودة؛ مبني في محل نصب if علم مفرد or نكرة مقصودة. Nothing new needs to be learned here.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وا زَيْدُ`,
                translation: `Oh, Zayd!`,
                cells: [`وا`, `زَيْدُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف ندبة` }, { start: 1, end: 1, role: `منادى مبني على الضم في محل نصب` }] },
                ],
              },
            },
            { html: `وا زَيْدُ treats زَيْدُ exactly as يا زَيْدُ would: مبني على الضم في محل نصب.`, list: false },
            { html: `وا عَبْدَ اللهِ likewise treats عَبْدَ as منصوب لفظا because مضاف, exactly as يا عَبْدَ اللهِ would.`, list: false },
          ],
          exercise: {
            prompt: `وا عَبْدَ اللهِ treats عَبْدَ as منصوب لفظا. What licenses that, and does الندبة change the rule from ordinary نداء at all?`,
            kind: 'mcq',
            options: [`عَبْدَ is مضاف, and الندبة uses exactly the same إعراب rules as ordinary نداء`, `عَبْدَ is مضاف, but الندبة's rules differ from ordinary نداء`, `عَبْدَ is مبني, since الندبة always makes المنادى مبني`, `عَبْدَ is مرفوع, since وا is not a true حرف نداء`],
            correct: 0,
          },
        },
        {
          heading: 'ألف الندبة وهاء السكت',
          lines: [
            { html: `Two extra letters may optionally be attached to the end of المنادى in الندبة, to heighten or round off the emotional expression.`, list: false },
            { box: { title: 'Rule', lines: [`أَلِفُ النُّدْبَةِ ثُمَّ هاءُ السَّكْتِ عِنْدَ الوَقْفِ`] } },
            { html: `(1) <bdi>أَلِفُ النُّدْبَةِ</bdi> — an ألف added directly onto the end of المنادى, lengthening the cry and intensifying the note of grief; (2) <bdi>هاءُ السَّكْتِ</bdi> — a silent-pause هاء, added after ألف الندبة specifically عِنْدَ الوَقْفِ (when pausing or stopping on the word).`, list: false },
            { box: { title: 'Example', lines: [`وا زَيْدا (بالألف وحدها) — وارَأْساهْ، واوَيْلاهْ (بالألف وهاء السكت معًا)`] } },
            { html: `وا زَيْدا adds only ألف الندبة, lengthening the cry. وارَأْساهْ ("Oh, my head!" — said by the Prophet ﷺ during his final illness) and واوَيْلاهْ ("Oh, my ruin!") add both ألف then هاء السكت when pausing on the word, giving the fullest, most drawn-out expression of grief.`, list: false },
          ],
          exercise: {
            prompt: `وارَأْساهْ carries two extra letters at its end, beyond ordinary وا رَأْسُ. What are they, in order?`,
            kind: 'mcq',
            options: [`ألف الندبة, then هاء السكت`, `هاء السكت, then ألف الندبة`, `تنوين, then ألف الندبة`, `Only ألف الندبة, nothing else`],
            correct: 0,
          },
        },
        {
          heading: 'خلاصة: النداء وملحقاته الأربعة',
          lines: [
            { box: { title: 'Careful', lines: [`أَرْبَعَةُ أَوْجُهٍ لِلنِّداءِ، مَبْنًى واحِدٌ، غَرَضٌ مُخْتَلِفٌ`] } },
            { html: `With الندبة, النداء comes to a close. Across its four faces — the plain نداء, الاستغاثة, نداء التعجب, and الندبة — every one repurposes the same underlying skeleton: <bdi>حرف نداء + منادى</bdi>, standing in for a dropped أدعو, toward a different communicative goal: summoning attention, pleading for rescue, marveling in astonishment, or voicing grief.`, list: false },
            { html: `Recognizing which goal is at play is often the only thing that tells these constructions apart on the surface — the grammar itself barely changes: (1) نداء عادٍ uses any of the seven أحرف and seeks genuine attention; (2) الاستغاثة uses يا alone, adds لام مفتوحة (or ألف) on المستغاث and لام مكسورة on المستغاث له, and seeks aid for a third party; (3) نداء التعجب reuses الاستغاثة's exact machinery, but voices astonishment rather than seeking real help; (4) الندبة uses وا (or يا where unambiguous) and may add ألف الندبة plus هاء السكت, voicing grief rather than calling anyone at all.`, list: false },
          ],
          exercise: {
            prompt: `All four faces of النداء — the plain نداء, الاستغاثة, نداء التعجب, and الندبة — share the same basic skeleton. What is that shared skeleton?`,
            kind: 'mcq',
            options: [`حرف نداء + منادى, standing in for a dropped أدعو`, `فعل ماضٍ + فاعل, the skeleton of an ordinary verbal sentence`, `مبتدأ + خبر, the skeleton of an ordinary nominal sentence`, `حرف جر + مجرور, standing in for no dropped verb at all`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the two أحرف الندبة is the dedicated particle, never used for anything but grief?`, options: [`وا`, `يا`, `آ`, `أيا`], correct: 0 },
        { q: `يا can be used for الندبة, but only under one condition. What is it?`, options: [`Confusion with an ordinary منادى is safely ruled out by context`, `The المنادى must be مؤنث`, `The المنادى must be مضاف`, `يا can never be used for الندبة at all`], correct: 0 },
        { q: `وا زَيْدُ treats زَيْدُ with the same إعراب as ordinary يا زَيْدُ would. What is that إعراب?`, options: [`مبني على الضم في محل نصب`, `منصوب لفظا`, `مرفوع لفظا`, `مجرور محلا`], correct: 0 },
        { q: `Two extra letters may be attached to the end of المنادى in الندبة. What are they, and in what order?`, options: [`ألف الندبة ثم هاء السكت`, `هاء السكت ثم ألف الندبة`, `تنوين ثم ألف`, `ياء ثم هاء`], correct: 0 },
        { q: `وارَأْساهْ carries both extra letters. When specifically is هاء السكت added?`, options: [`عند الوقف — when pausing on the word`, `عند الوصل فقط — only when the speech continues without pausing`, `في أول الكلمة — at the very start of the word`, `بعد حرف الجر فقط — only right after a preposition`], correct: 0 },
        { q: `What single grammatical skeleton do النداء العادي, الاستغاثة, نداء التعجب, and الندبة all share, despite serving four different purposes?`, options: [`حرف نداء + منادى, standing in for a dropped أدعو`, `فعل + فاعل + مفعول به, an ordinary verbal sentence with no hidden verb`, `مبتدأ + خبر فقط, an ordinary nominal sentence with nothing dropped`, `حرف جر + اسم مجرور فقط, a plain جار ومجرور with no نداء involved`], correct: 0 },
      ],
      bank: [
        { title: `الندبة: التعريف`, kind: 'mcq', prompt: `Which of these correctly defines الندبة?`, options: [`إظهار الحزن — voicing grief through the نداء construction`, `Calling to seek someone's aid for someone else`, `Calling to express amazement at something`, `An ordinary call, just to draw attention`], correct: 0 },
        { title: `حرفا الندبة`, kind: 'mcq', prompt: `الندبة is formed with two possible أحرف. What are they?`, options: [`وا ويا`, `يا وآ`, `وا وأيا`, `الهمزة وأيْ`], correct: 0 },
        { title: `وا: الأمان من اللبس`, kind: 'mcq', prompt: `Why does وا never require any surrounding context to be understood as grief?`, options: [`It is never used for anything besides expressing grief`, `It always follows a علم`, `It always carries ألف الندبة`, `It is identical to يا in every use`], correct: 0 },
        { title: `يا في الندبة: الشرط`, kind: 'mcq', prompt: `A speaker uses يا instead of وا to mourn someone who just passed away. Under what condition is that acceptable؟`, options: [`Only if the context rules out confusion with an ordinary call`, `Never — يا can only ever be an ordinary حرف نداء`, `Only if the deceased is مذكر`, `Only in poetry, where the metre sometimes forces a substitution`], correct: 0 },
        { title: `إعراب المنادى في الندبة: القاعدة`, kind: 'mcq', prompt: `Does الندبة introduce any new إعراب rules for المنادى beyond what ordinary نداء already established؟`, options: [`No — إعراب المنادى في الندبة follows exactly the same rules as ordinary نداء`, `Yes — الندبة always makes المنادى مرفوع`, `Yes — الندبة always makes المنادى مجرورا`, `No, except that مبني forms are banned in الندبة`], correct: 0 },
        { title: `وا عبد الله: الإعراب`, kind: 'mcq', prompt: `In وا عَبْدَ اللهِ, what makes عَبْدَ منصوب لفظا؟`, options: [`It is مضاف, exactly as it would be after يا`, `It is علم مفرد, and علم مفرد nouns always show a visible نصب`, `It is نكرة غير مقصودة, one of the three cases that shows النصب لفظا`, `الندبة always forces النصب لفظا regardless of the word's type`], correct: 0 },
        { title: `ألف الندبة: وظيفتها`, kind: 'mcq', prompt: `What effect does ألف الندبة have when added to the end of المنادى؟`, options: [`It lengthens the cry, intensifying the note of grief`, `It changes المنادى's إعراب from مبني to منصوب لفظا`, `It marks المنادى as نكرة, stripping away its definiteness entirely`, `It replaces حرف الندبة entirely, so no وا or يا is needed at all`], correct: 0 },
        { title: `هاء السكت: متى تُضاف`, kind: 'mcq', prompt: `هاء السكت is added after ألف الندبة under one specific condition. What is it؟`, options: [`عند الوقف — only when pausing on the word`, `Whenever المنادى is مذكر, never when it is مؤنث`, `Whenever وا is used instead of يا`, `It is always added, regardless of context`], correct: 0 },
        { title: `وا زيدا مقابل وارأساه`, kind: 'mcq', prompt: `وا زَيْدا adds only one extra letter; وارَأْساهْ adds two. What is the difference between them?`, options: [`وا زَيْدا adds only ألف الندبة; وارَأْساهْ adds ألف الندبة plus هاء السكت`, `وا زَيْدا adds هاء السكت only; وارَأْساهْ adds ألف الندبة only`, `There is no real difference between them — both add exactly the same letters`, `وا زَيْدا uses يا instead of وا, while وارَأْساهْ keeps the original حرف`], correct: 0 },
        { title: `وارأساه: المناسبة`, kind: 'mcq', prompt: `وارَأْساهْ is associated with a specific historical moment. What was it؟`, options: [`The Prophet ﷺ said it during his final illness`, `It is a line from pre-Islamic poetry only`, `It was said by a companion mourning the Prophet ﷺ`, `It has no attested historical use`], correct: 0 },
        { title: `وجوه النداء الأربعة: الغرض`, kind: 'mcq', prompt: `النداء العادي, الاستغاثة, نداء التعجب, and الندبة all reuse the same skeleton. What actually distinguishes them from each other؟`, options: [`The communicative goal — attention, rescue, astonishment, or grief`, `The number of أركان each one has`, `Whether المنادى is مذكر or مؤنث`, `Whether المنادى is مفرد or جمع`], correct: 0 },
        { title: `مقارنة: الاستغاثة والندبة`, kind: 'mcq', prompt: `Both الاستغاثة and الندبة restrict which حرف can be used, unlike ordinary نداء's seven. How do their restrictions compare؟`, options: [`الاستغاثة allows only يا; الندبة allows وا or, when unambiguous, يا`, `Both allow only وا, with no room for يا at all`, `Both allow all seven أحرف النداء`, `الاستغاثة allows only وا; الندبة allows only يا`], correct: 0 },
        { title: `الندبة: أبسط أوجه النداء نحويا`, kind: 'mcq', prompt: `الندبة is described as grammatically the simplest of النداء's four faces. What makes it simpler than الاستغاثة or نداء التعجب؟`, options: [`It reuses ordinary نداء's own إعراب rules directly, with no new لام or ألف-substitution machinery required`, `It has no أركان at all, unlike الاستغاثة's three-part structure`, `It never uses a حرف نداء, relying on context alone`, `It cannot ever attach to a علم, only to common nouns`], correct: 0 },
        { title: `ما الذي يبقى ثابتا عبر أوجه النداء الأربعة`, kind: 'mcq', prompt: `Despite their different purposes, what stays constant across all four faces of النداء؟`, options: [`The underlying skeleton: حرف نداء + منادى standing in for a dropped أدعو`, `The specific حرف used, which changes across all four faces`, `Whether المنادى is منصوب لفظا or مبني, which also varies case by case`, `The presence of لام الاستغاثة, which only appears in one of the four`], correct: 0 },
        {
          title: `تركيب: وا أَبَتاهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part — note that this المنادى is مضاف to ياء المتكلم.`,
          source: `وا أَبَتاهُ`,
          words: [`وا`, `أَبَتاهُ`],
          labels: [`حرف ندبة`, `منادى مضاف لياء المتكلم (مع ألف الندبة)`],
          distractors: [`حرف استغاثة`, `حرف نداء`, `منادى مضاف لياء المتكلم (مع ألف الندبة وهاء السكت)`, `منادى مبني على الضم في محل نصب`, `مستغاث له`, `مستغاث`],
        },
        {
          title: `تركيب: وا زَيْدُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `وا زَيْدُ`,
          words: [`وا`, `زَيْدُ`],
          labels: [`حرف ندبة`, `منادى مبني على الضم في محل نصب`],
          distractors: [`منادى منصوب لفظا`, `منادى مبني على الواو في محل نصب`, `منادى مبني على الألف في محل نصب`, `حرف استغاثة`, `حرف نداء`, `مستغاث`],
        },
        {
          title: `تركيب: وا عَبْدَ اللهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word.`,
          source: `وا عَبْدَ اللهِ`,
          words: [`وا`, `عَبْدَ`, `اللهِ`],
          labels: [`حرف ندبة`, `منادى منصوب لفظا (مضاف)`, `مضاف إليه مجرور`],
          distractors: [`منادى مبني على الضم في محل نصب`, `منادى منصوب لفظا (شبيه بالمضاف)`, `مضاف إليه منصوب`, `حرف استغاثة`, `مستغاث`, `مستغاث له`],
        },
        {
          title: `تركيب: وارَأْساهْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part — note that ألف الندبة and هاء السكت are both attached at the end.`,
          source: `وارَأْساهْ`,
          words: [`وا`, `رَأْساهْ`],
          labels: [`حرف ندبة`, `منادى (بألف الندبة وهاء السكت)`],
          distractors: [`منادى (بألف الندبة فقط)`, `منادى مبني على الضم في محل نصب`, `حرف استغاثة`, `حرف نداء`, `مستغاث`, `حرف جر`],
        },
      ],
    },
  ],
};

// Module 02 — الجملة وشبه الجملة والكلام (The Sentence, the Quasi-Sentence,
// and Meaningful Speech)
//
// Source: app-lessons/009-essential-parts-of-a-sentence.md through
// app-lessons/015-kalam-affirmative-and-non-affirmative.md (الكبرى في
// النحو). Picks up where Module 01 left off (see its own header comment):
// having fixed what counts as a single كلمة, this module fixes what counts
// as a جملة, then works through الجملة's classifications by إسناد
// (اسمية/فعلية), by معنى (خبرية/إنشائية), and by containment (كبرى/صغرى);
// شبه الجملة's two classifications (by بنية, then by عامل); and finally
// الكلام as a stricter, complete-meaning condition on top of الجملة, with
// its own موجب/غير موجب split. Per COURSE-MAP.md's 2026-08-12 proposal,
// this covers Lessons 9-15 of app-lessons in 5 lessons — one source file
// per lesson except l1 (009+010) and l2 (011+012), which the survey found
// pair naturally.
//
// Same lines[]/box/table/tarkeebDiagram shape as Module 01, not the older
// body-string shape content/README.md documents. Box content for Definition
// / Rule / Careful / Meaning follows Module 01's own convention: where the
// app-lessons source states a Careful/Rule point in English prose rather
// than a quoted Arabic sentence, the box itself carries a short Arabic
// restatement of the point (matching the terse, matn-adjacent register of
// the boxes that already exist), with the full English explanation in the
// surrounding prose lines. Every Example box and every tarkeebDiagram
// reuses an example sentence that actually appears in app-lessons/009-015 —
// none are invented.
//
// Bank تركيب density varies with how many parsed example sentences each
// source lesson actually supplies, the same way Module 01's did: l1 (rich
// in worked إعراب pairs) reaches 6; l2-l5, whose source material is mostly
// definitional/classificatory rather than built around fresh parsed
// examples, sit lower (1-3) rather than force tarkeeb items onto sentences
// the source never analyses.
export default {
  id: '02',
  title: 'الجملة وشبه الجملة والكلام',
  heading: 'المقدمة',
  blurb: 'الجملة’s division by إسناد into اسمية and فعلية, by meaning into خبرية and إنشائية, شبه الجملة’s two classifications, and الكلام vs الجملة.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الجملة: الإسناد والاسمية والفعلية',
      subtitle: 'The Sentence — إسناد, its two essential parts, and جملة اسمية vs جملة فعلية',
      sourceRef: 'app-lessons/009–010',
      concepts: [
        {
          heading: 'تعريف الجملة والإسناد',
          lines: [
            { html: `Module 1 fixed what counts as a single <bdi>كلمة</bdi> — <bdi>اسم</bdi>, <bdi>فعل</bdi>, or <bdi>حرف</bdi>. The next step is knowing when a string of كلمات forms a <bdi>جملة</bdi>.`, list: false },
            { box: { title: 'Definition', lines: [`الجُمْلَةُ مَا اشْتَمَلَتْ عَلَى مُسْنَدٍ وَمُسْنَدٍ إِلَيْهِ`] } },
            { html: `A جملة must contain <bdi>إسناد</bdi>: something attributed to something else.`, list: false },
            { table: { title: 'أركان الإسناد', headers: ['Term', 'Meaning', 'Common form'], rows: [
              [`مسند إليه`, `the part being judged about`, `مبتدأ، فاعل`],
              [`مسند`, `the judgement made about it`, `خبر، فعل`],
            ] } },
            { html: `Together, these two are called <bdi>العمدة</bdi>, the essential core of the جملة. A string of words is not a full جملة just because it contains several words — it must contain this relationship of إسناد.`, list: false },
          ],
          exercise: {
            prompt: `A group of words may contain several كلمات yet still fail to be a جملة. What must it contain to count as one?`,
            kind: 'mcq',
            options: [`إسناد — something judged about something else`, `At least three كلمات`, `تنوين on its last word`, `A حرف جر somewhere in it`],
            correct: 0,
          },
        },
        {
          heading: 'المسند إليه والمسند',
          lines: [
            { html: `زَيْدٌ قَائِمٌ illustrates both parts of الإسناد at once.`, list: false },
            { html: `المسند إليه is the thing being spoken about.`, list: false },
            { box: { title: 'Core Text', lines: [`مَحْكُومٌ عَلَيْهِ`] } },
            { html: `In <bdi>زَيْدٌ قَائِمٌ</bdi>, the statement is about زيد, so زيد is المسند إليه.`, list: false },
            { html: `المسند is what is attributed to المسند إليه.`, list: false },
            { box: { title: 'Core Text', lines: [`مَحْكُومٌ بِهِ`] } },
            { html: `In زَيْدٌ قَائِمٌ, standing is attributed to زيد, so قائم is المسند.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `زَيْدٌ قَائِمٌ`,
                translation: `Zayd is standing.`,
                cells: [`زَيْدٌ`, `قَائِمٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مسند إليه / مبتدأ` }, { start: 1, end: 1, role: `مسند / خبر` }] },
                ],
              },
            },
            { html: `Word order does not have to open with المسند إليه. In <bdi>قَامَ زَيْدٌ</bdi>, the فعل قام comes first as المسند, and the فاعل زيد follows as المسند إليه.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `قَامَ زَيْدٌ`,
                translation: `Zayd stood.`,
                cells: [`قَامَ`, `زَيْدٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مسند / فعل` }, { start: 1, end: 1, role: `مسند إليه / فاعل` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In قَامَ زَيْدٌ, which word is المسند إليه, and by which common form does it appear?`,
            kind: 'mcq',
            options: [`زيد — as فاعل`, `قام — as فعل`, `زيد — as مبتدأ`, `قام — as خبر`],
            correct: 0,
          },
        },
        {
          heading: 'الفضلة، والأركان المحذوفة',
          lines: [
            { html: `Anything outside المسند and المسند إليه is called <bdi>فضلة</bdi> (also <bdi>قيد</bdi>). فضلة does not mean useless — it may matter for the meaning, but it is not part of the minimum structure a جملة needs.`, list: false },
            { box: { title: 'Example', lines: [`ضَرَبَ زَيْدٌ عَمْرًا`] } },
            { html: `The core is ضرب زيد: فعل وفاعل. عمرا is المفعول به, so it is فضلة.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `ضَرَبَ زَيْدٌ عَمْرًا`,
                translation: `Zayd hit Amr.`,
                cells: [`ضَرَبَ`, `زَيْدٌ`, `عَمْرًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مسند / فعل` }, { start: 1, end: 1, role: `مسند إليه / فاعل` }, { start: 2, end: 2, role: `فضلة / مفعول به` }] },
                ],
              },
            },
            { html: `One of the two عمدة parts can also be dropped and only understood from context. If someone asks <bdi>هَلْ أَكَلْتَ؟</bdi>, the answer may simply be <bdi>لا</bdi> — the fuller meaning لا، لَمْ آكُلْ is still understood. The missing مسند is supplied by context, not removed as a requirement.`, list: false },
          ],
          exercise: {
            prompt: `In ضَرَبَ زَيْدٌ عَمْرًا, عمرا sits outside the عمدة ضرب زيد. What is عمرا called?`,
            kind: 'mcq',
            options: [`فضلة (or قيد)`, `مسند`, `مسند إليه`, `Part of العمدة`],
            correct: 0,
          },
        },
        {
          heading: 'الاسم المفرد وحده ليس جملة',
          lines: [
            { html: `A single اسم such as <bdi>بَيْتٌ</bdi> is not, by itself, a complete جملة. It names a thing but makes no حكم about it. To become a جملة it needs إسناد.`, list: false },
            { table: { title: 'أمثلة على الإسناد', headers: ['Example', 'Translation', 'Predication'], rows: [
              [`هذا بيت`, `this is a house`, `بيت is attributed to هذا`],
              [`البيت كبير`, `the house is big`, `كبير is attributed to البيت`],
            ] } },
          ],
          exercise: {
            prompt: `بَيْتٌ alone names a thing without judging anything about it. What turns it into part of a full جملة, as in البيت كبير؟`,
            kind: 'mcq',
            options: [`Attributing something to it — إسناد, here كبير to البيت`, `Adding تنوين to it`, `Adding أل to it`, `Repeating the word twice`],
            correct: 0,
          },
        },
        {
          heading: 'الجملة الاسمية والجملة الفعلية',
          lines: [
            { html: `A جملة may also be classified by its outward arrangement, <bdi>هيئة</bdi>: which kind of word opens the عمدة.`, list: false },
            { table: { title: 'أقسام الجملة باعتبار هيئتها', headers: ['Category', 'Definition', 'Example', 'Translation'], rows: [
              [`الجملة الاسمية`, `a sentence that begins with an اسم`, `وَاللهُ غَفُورٌ رَحِيمٌ`, `and Allah is Forgiving, Merciful`],
              [`الجملة الفعلية`, `a sentence that begins with a فعل`, `وَخَلَقَ كُلَّ شَيْءٍ`, `and He created everything`],
            ] } },
            { html: `الجملة الاسمية is built around an اسم opening the core structure; الجملة الفعلية is built around a فعل opening it.`, list: false },
          ],
          exercise: {
            prompt: `وَخَلَقَ كُلَّ شَيْءٍ opens with the فعل خلق. Which kind of جملة is that?`,
            kind: 'mcq',
            options: [`جملة فعلية`, `جملة اسمية`, `جملة شرطية`, `جملة صغرى`],
            correct: 0,
          },
        },
        {
          heading: 'ما يقرر الاسمية والفعلية: العمدة لا الناسخ ولا الفضلة',
          lines: [
            { html: `الجملة الاسمية itself splits further: <bdi>غير منسوخة</bdi>, which no ناسخ enters upon (e.g. وَاللهُ غَفُورٌ رَحِيمٌ), and <bdi>منسوخة</bdi>, which a ناسخ such as إنّ or كان enters upon (e.g. إِنَّ اللهَ غَفُورٌ رَحِيمٌ). غير منسوخة is the default case, so it is usually just called جملة اسمية without the label.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `إِنَّ اللهَ غَفُورٌ رَحِيمٌ`,
                translation: `Indeed Allah is Forgiving, Merciful.`,
                cells: [`إِنَّ`, `اللهَ`, `غَفُورٌ رَحِيمٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `ناسخ` }, { start: 1, end: 1, role: `اسم إن` }, { start: 2, end: 2, role: `خبر إن` }] },
                ],
              },
            },
            { html: `Even here the جملة stays اسمية, since its underlying core is الله غفور رحيم.`, list: false },
            { box: { title: 'Rule', lines: [`لا عِبْرَةَ لِلنَّاسِخِ وَالفَضْلَةِ فِي كَوْنِ الجُمْلَةِ اسْمِيَّةً أَوْ فِعْلِيَّةً عَلَى الأَصَحِّ`] } },
            { html: `On the stronger position, a ناسخ and a فضلة never decide اسمية vs فعلية. Whichever of the two عمدة parts genuinely opens the جملة settles it. In <bdi>مَا هَذَا بَشَرًا</bdi>, ما resembles ليس and works like a ناسخ, but the core جملة begins with هذا, so it is treated as اسمية. In <bdi>وَكَانَ اللهُ عَلِيمًا حَكِيمًا</bdi>, كان is a ناسخ and it is itself a فعل, yet the underlying core الله عليم حكيم is اسمي, so the جملة is still اسمية.`, list: false },
            { box: { title: 'Example', lines: [`إِيَّاكَ نَعْبُدُ`] } },
            { html: `إياك opens the جملة and is an اسم, but it is <bdi>مفعول به مقدم</bdi> — a فضلة fronted for emphasis, not the عمدة. The true عمدة is the فعل نعبد with its فاعل مستتر, so the جملة is فعلية despite the fronted اسم.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `إِيَّاكَ نَعْبُدُ`,
                translation: `You alone we worship.`,
                cells: [`إِيَّاكَ`, `نَعْبُدُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مفعول به مقدم / فضلة` }, { start: 1, end: 1, role: `فعل + فاعل مستتر` }] },
                ],
              },
            },
            { box: { title: 'Rule', lines: [`الجُمْلَةُ الشَّرْطِيَّةُ فِعْلِيَّةٌ لِأَنَّ أَدَاةَ الشَّرْطِ لا يَقَعُ بَعْدَهَا إِلَّا الأَفْعَالُ`] } },
            { html: `Only أفعال can follow an أداة شرط, so الجملة الشرطية is always treated as فعلية in its underlying structure — even in a case like <bdi>وَإِنْ أَحَدٌ مِنَ المُشْرِكِينَ اسْتَجَارَكَ</bdi>, where a فعل محذوف is understood right after إن: وَإِنِ اسْتَجَارَكَ أَحَدٌ مِنَ المُشْرِكِينَ.`, list: false },
          ],
          exercise: {
            prompt: `In إِيَّاكَ نَعْبُدُ, إياك is an اسم opening the جملة, yet the جملة is فعلية. Why?`,
            kind: 'mcq',
            options: [`إياك is مفعول به مقدم, a فضلة; the true عمدة is the فعل نعبد with its فاعل مستتر`, `إياك is itself a فعل`, `نعبد is فضلة, not إياك`, `The جملة is actually اسمية here`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الجملة is defined as ما اشتملت على مسند ومسند إليه. What is the name given to these two essential parts together?`, options: [`العمدة`, `الفضلة`, `القيد`, `الإسناد`], correct: 0 },
        { q: `In قَامَ زَيْدٌ, which part is المسند, and which common form does it take?`, options: [`قام, as فعل`, `زيد, as فعل`, `قام, as خبر`, `زيد, as مبتدأ`], correct: 0 },
        { q: `In ضَرَبَ زَيْدٌ عَمْرًا, what is عمرا called, given that the عمدة is only ضرب زيد?`, options: [`فضلة (قيد)`, `مسند`, `مسند إليه`, `ناسخ`], correct: 0 },
        { q: `وَخَلَقَ كُلَّ شَيْءٍ opens with a فعل. What kind of جملة is that?`, options: [`جملة فعلية`, `جملة اسمية`, `جملة شرطية`, `جملة صغرى`], correct: 0 },
        { q: `إِنَّ اللهَ غَفُورٌ رَحِيمٌ has a ناسخ, إنّ, entering upon it. Is the جملة still جملة اسمية?`, options: [`Yes — its underlying core الله غفور رحيم is اسمي, and على الأصح a ناسخ does not decide the classification`, `No — any جملة with a ناسخ is جملة فعلية`, `No — إنّ turns it into جملة شرطية`, `Yes, but only because إنّ carries تنوين`], correct: 0 },
        { q: `In إِيَّاكَ نَعْبُدُ, why is the جملة classified as فعلية even though إياك, an اسم, opens it?`, options: [`إياك is a فضلة (مفعول به مقدم); the true عمدة is the فعل نعبد with its فاعل مستتر`, `إياك itself is a فعل`, `نعبد is فضلة, not part of العمدة`, `إياك carries تنوين, which forces فعلية`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الجملة`, kind: 'mcq', prompt: `Which of the following correctly defines الجملة?`, options: [`ما اشتملت على مسند ومسند إليه`, `قول مفيد`, `ما دلّ على معنى في نفسه غير مقترن بزمان`, `ما لا تدل أجزاؤه على معنى`], correct: 0 },
        { title: `العمدة: اسمان معا`, kind: 'mcq', prompt: `المسند والمسند إليه together are given a single name. What is it?`, options: [`العمدة`, `الفضلة`, `القيد`, `النواسخ`], correct: 0 },
        { title: `مسند إليه: الاسم الآخر`, kind: 'mcq', prompt: `المسند إليه is also known by another name in grammar books. What is it?`, options: [`محكوم عليه`, `محكوم به`, `مسند`, `خبر`], correct: 0 },
        { title: `مسند: الاسم الآخر`, kind: 'mcq', prompt: `المسند is also known by another name. What is it?`, options: [`محكوم به`, `محكوم عليه`, `مسند إليه`, `مبتدأ`], correct: 0 },
        { title: `ليست كل مجموعة كلمات جملة`, kind: 'mcq', prompt: `A string of words contains several كلمات but no إسناد between any of them. Is it a جملة?`, options: [`No — a جملة requires إسناد, not merely multiple كلمات`, `Yes — any string of two or more كلمات is a جملة`, `Yes, as long as one word carries تنوين`, `No, unless it contains a حرف جر`], correct: 0 },
        { title: `فضلة لا تعني عديمة الفائدة`, kind: 'mcq', prompt: `فضلة is sometimes misunderstood as meaning "useless." What does it actually mean?`, options: [`Anything outside العمدة — it may matter for meaning, but is not part of the minimum جملة structure`, `A word that has no meaning at all`, `A word that cannot be مجرور`, `Any حرف in the جملة`], correct: 0 },
        { title: `حذف أحد الركنين`, kind: 'mcq', prompt: `Someone asks هَلْ أَكَلْتَ؟ and the answer is simply لا. Does that mean the answer has no مسند?`, options: [`No — the fuller meaning لَمْ آكُلْ is understood; the مسند is supplied by context, not removed as a requirement`, `Yes — لا alone is a complete جملة with no مسند needed anywhere`, `No — لا is itself the مسند`, `Yes, because الجملة never needs a مسند`], correct: 0 },
        { title: `بيت وحده`, kind: 'mcq', prompt: `بَيْتٌ, said alone, names a thing but makes no judgement about it. What does it need to become a full جملة?`, options: [`إسناد — something attributed to it, as in البيت كبير`, `تنوين`, `أل التعريف`, `النداء`], correct: 0 },
        { title: `الجملة الاسمية: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الجملة الاسمية?`, options: [`A sentence that begins with an اسم`, `A sentence that begins with a فعل`, `A sentence containing a ناسخ`, `A sentence with a فضلة`], correct: 0 },
        { title: `الجملة الفعلية: مثال`, kind: 'mcq', prompt: `وَخَلَقَ كُلَّ شَيْءٍ opens with خَلَقَ. What kind of جملة is that?`, options: [`جملة فعلية`, `جملة اسمية`, `جملة شرطية`, `جملة كبرى`], correct: 0 },
        { title: `غير منسوخة ومنسوخة`, kind: 'mcq', prompt: `الجملة الاسمية itself divides into two types by whether a ناسخ enters upon it. What are they called?`, options: [`غير منسوخة ومنسوخة`, `خبرية وإنشائية`, `كبرى وصغرى`, `موجب وغير موجب`], correct: 0 },
        { title: `لماذا تُسمى نواسخ`, kind: 'mcq', prompt: `إنّ, كان, and similar words are called نواسخ. Why?`, options: [`Because they enter upon a جملة اسمية and affect its grammatical state`, `Because they always open a جملة فعلية`, `Because they cannot enter upon a جملة اسمية`, `Because they carry تنوين`], correct: 0 },
        { title: `الاسمية غير المنسوخة هي الأصل`, kind: 'mcq', prompt: `When grammarians say simply جملة اسمية with no further label, which of the two types — غير منسوخة or منسوخة — do they usually mean?`, options: [`غير منسوخة — it is the default case`, `منسوخة — it is the default case`, `Neither — the label always must be stated`, `Both equally, chosen at random`], correct: 0 },
        { title: `ما هذا بشرا: التصنيف`, kind: 'mcq', prompt: `In مَا هَذَا بَشَرًا, ما acts like a ناسخ resembling ليس, yet the core جملة begins with هذا. How is the جملة classified?`, options: [`جملة اسمية — the underlying core opens with an اسم`, `جملة فعلية — ما counts as the opening element`, `جملة شرطية`, `Neither — ما هذا بشرا has no إسناد at all`], correct: 0 },
        { title: `وكان الله عليما حكيما: التصنيف`, kind: 'mcq', prompt: `In وَكَانَ اللهُ عَلِيمًا حَكِيمًا, كان is a فعل and a ناسخ, yet the جملة is treated as اسمية. Why?`, options: [`The underlying core الله عليم حكيم is اسمي, and a ناسخ does not decide the classification`, `Because كان never opens a real جملة`, `Because عليما carries تنوين`, `Because حكيما is فضلة`], correct: 0 },
        { title: `إياك نعبد: لماذا فعلية رغم افتتاحها باسم`, kind: 'mcq', prompt: `إِيَّاكَ نَعْبُدُ opens with the اسم إياك, yet it is classified as جملة فعلية. What is إياك's actual role?`, options: [`مفعول به مقدم — a fronted فضلة, not العمدة`, `مسند إليه, لأنه اسم`, `ناسخ`, `مسند`], correct: 0 },
        { title: `الجملة الشرطية: فعلية دائما`, kind: 'mcq', prompt: `Why is الجملة الشرطية always treated as فعلية, whatever اسم may appear near أداة الشرط?`, options: [`Only أفعال fall after an أداة الشرط`, `Every أداة شرط is itself a فعل`, `الشرط never contains an اسم at all`, `جمل الشرط always drop their مسند إليه`], correct: 0 },
        { title: `وإن أحد من المشركين استجارك: العامل المحذوف`, kind: 'mcq', prompt: `In وَإِنْ أَحَدٌ مِنَ المُشْرِكِينَ اسْتَجَارَكَ, أحد appears right after إن, yet the جملة is still فعلية. What explains this?`, options: [`A فعل محذوف (وَإِنِ اسْتَجَارَكَ أَحَدٌ) is understood right after إن`, `أحد itself functions as a فعل here`, `إن is not really an أداة شرط in this آية`, `استجارك is فضلة and does not count`], correct: 0 },
        {
          title: `تركيب: زَيْدٌ قَائِمٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the مسند إليه and the مسند in زَيْدٌ قَائِمٌ.`,
          source: `زَيْدٌ قَائِمٌ`,
          words: [`زَيْدٌ`, `قَائِمٌ`],
          labels: [`مسند إليه / مبتدأ`, `مسند / خبر`],
          distractors: [`فضلة`, `ناسخ`],
        },
        {
          title: `تركيب: قَامَ زَيْدٌ`,
          kind: 'tarkeeb',
          instruction: `Identify المسند والمسند إليه in قَامَ زَيْدٌ.`,
          source: `قَامَ زَيْدٌ`,
          words: [`قَامَ`, `زَيْدٌ`],
          labels: [`مسند / فعل`, `مسند إليه / فاعل`],
          distractors: [`فضلة`, `خبر`],
        },
        {
          title: `تركيب: ضَرَبَ زَيْدٌ عَمْرًا`,
          kind: 'tarkeeb',
          instruction: `Identify العمدة والفضلة in ضَرَبَ زَيْدٌ عَمْرًا.`,
          source: `ضَرَبَ زَيْدٌ عَمْرًا`,
          words: [`ضَرَبَ`, `زَيْدٌ`, `عَمْرًا`],
          labels: [`مسند / فعل`, `مسند إليه / فاعل`, `فضلة / مفعول به`],
          distractors: [`ناسخ`, `مضاف إليه`],
        },
        {
          title: `تركيب: البَيْتُ كَبِيرٌ`,
          kind: 'tarkeeb',
          instruction: `Identify المسند إليه والمسند in البَيْتُ كَبِيرٌ.`,
          source: `البَيْتُ كَبِيرٌ`,
          words: [`البَيْتُ`, `كَبِيرٌ`],
          labels: [`مسند إليه / مبتدأ`, `مسند / خبر`],
          distractors: [`فضلة`, `ناسخ`],
        },
        {
          title: `تركيب: إِنَّ اللهَ غَفُورٌ رَحِيمٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of إِنَّ اللهَ غَفُورٌ رَحِيمٌ.`,
          source: `إِنَّ اللهَ غَفُورٌ رَحِيمٌ`,
          words: [`إِنَّ`, `اللهَ`, `غَفُورٌ رَحِيمٌ`],
          labels: [`ناسخ`, `اسم إن`, `خبر إن`],
          distractors: [`مسند إليه`, `فضلة`],
        },
        {
          title: `تركيب: إِيَّاكَ نَعْبُدُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of إِيَّاكَ نَعْبُدُ.`,
          source: `إِيَّاكَ نَعْبُدُ`,
          words: [`إِيَّاكَ`, `نَعْبُدُ`],
          labels: [`مفعول به مقدم / فضلة`, `فعل + فاعل مستتر`],
          distractors: [`مسند إليه`, `ناسخ`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'الجملة: الخبرية والإنشائية والكبرى والصغرى',
      subtitle: 'Kinds of Meaning — خبر vs إنشاء, and جملة كبرى containing a جملة صغرى',
      sourceRef: 'app-lessons/011–012',
      concepts: [
        {
          heading: 'الخبرية والإنشائية: التعريف',
          lines: [
            { html: `الجملة may also be classified by meaning rather than by إسناد or هيئة: whether the speaker can be judged truthful or false.`, list: false },
            { table: { title: 'الخبرية والإنشائية', headers: ['Category', 'Definition', 'General meaning'], rows: [
              [`الجملة الخبرية`, `speech whose speaker can be truthful or false`, `informing: إخبار`],
              [`الجملة الإنشائية`, `speech whose speaker is not described as truthful or false`, `performing the meaning: إنشاء`],
            ] } },
            { html: `خبرية does not mean the جملة is صادقة. It means the جملة is the kind of statement that can be judged صدقا أو كذبا. <bdi>زَيْدٌ قَائِمٌ</bdi> is خبرية: it may be صادقة or كاذبة depending on whether Zayd is actually standing. Even a statement that is certainly true or certainly false stays خبرية — <bdi>الله واحد</bdi> is خبرية and صادقة, and a false mathematical statement is still خبرية, because it gives إخبارًا that can be judged.`, list: false },
          ],
          exercise: {
            prompt: `الله واحد is a statement that is certainly true. Does being certainly true remove it from الجملة الخبرية?`,
            kind: 'mcq',
            options: [`No — خبرية only requires the statement to be the kind that can be judged صدقا أو كذبا, not that its truth be in doubt`, `Yes — a statement that is certainly true is إنشائية, not خبرية`, `Yes — only false statements count as خبرية`, `No, because الله واحد contains no إسناد`],
            correct: 0,
          },
        },
        {
          heading: 'أنواع الإنشاء',
          lines: [
            { html: `إنشاء covers many kinds of speech, each performing an act rather than reporting a fact.`, list: false },
            { table: { title: 'أنواع الإنشاء', headers: ['Type', 'Example', 'Translation', 'Function'], rows: [
              [`استفهام`, `أَإِلَهٌ مَعَ اللهِ`, `Is there a god with Allah?`, `question`],
              [`تمني`, `يَا لَيْتَ قَوْمِي يَعْلَمُونَ`, `If only my people knew`, `wishing`],
              [`نداء`, `يَا أَيُّهَا الرَّسُولُ`, `O Messenger`, `calling`],
              [`تحذير`, `نَاقَةَ اللهِ وَسُقْيَاهَا`, `the she-camel of Allah and her drink`, `warning`],
              [`إغراء`, `العِلْمَ العِلْمَ`, `knowledge, knowledge`, `urging`],
              [`أمر`, `أَقِيمُوا الصَّلاةَ`, `establish the prayer`, `command`],
              [`نهي`, `لا تَقْرَبُوا الفَوَاحِشَ`, `do not approach immoralities`, `prohibition`],
              [`دعاء`, `سَلامٌ عَلَيْكُمْ`, `peace be upon you`, `supplication`],
              [`مدح`, `وَلَنِعْمَ دَارُ المُتَّقِينَ`, `excellent indeed is the home of the pious`, `praise`],
              [`ذم`, `بِئْسَ الاسمُ الفُسُوقُ`, `wretched is the name of wickedness`, `blame`],
              [`توجع / تفجع`, `يَا حَسْرَتَى عَلَى مَا فَرَّطْتُ فِي جَنْبِ اللهِ`, `O my regret over what I neglected towards Allah`, `pain or grief`],
              [`قسم`, `وَالعَصْرِ`, `by time`, `oath`],
            ] } },
            { html: `These are not judged صدقا أو كذبا. Each performs its own act: استفهام asks, نداء calls, أمر commands, تحذير warns, مدح praises, ذم blames, توجع expresses pain, قسم swears.`, list: false },
          ],
          exercise: {
            prompt: `أَإِلَهٌ مَعَ اللهِ asks a question rather than reporting a fact. Which category of الجملة does that make it?`,
            kind: 'mcq',
            options: [`إنشائية — استفهام`, `خبرية — it can still be judged صادقة`, `إنشائية — نداء`, `خبرية — استفهام is a kind of إخبار`],
            correct: 0,
          },
        },
        {
          heading: 'الفرق بين الخبرية والإنشائية: الفعل لا الموضوع',
          lines: [
            { html: `The difference between خبرية and إنشائية lies in what the speaker is doing, not in the subject matter.`, list: false },
            { box: { title: 'Careful', lines: [`العِبْرَةُ بِمَا يَفْعَلُهُ المُتَكَلِّمُ لا بِمَوْضُوعِ الكَلامِ`] } },
            { box: { title: 'Example', lines: [`أَإِلَهٌ مَعَ اللهِ`, `إِلَهٌ مَعَ اللهِ`] } },
            { html: `With the همزة, أَإِلَهٌ مَعَ اللهِ asks a question, so it is إنشاء. Drop the همزة and say إِلَهٌ مَعَ اللهِ, and the same words now report something — a report whose value happens to be كاذب — so the جملة becomes خبرية.`, list: false },
            { html: `Fronting for emphasis does not by itself make a جملة إنشائية either. <bdi>إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ</bdi> gives information — that worship is for Allah alone and help is sought from Allah alone — so it stays خبرية even though its word order gives strong emphasis.`, list: false },
          ],
          exercise: {
            prompt: `أَإِلَهٌ مَعَ اللهِ is إنشائية because it asks a question. Drop only the همزة and say إِلَهٌ مَعَ اللهِ. What does the جملة become?`,
            kind: 'mcq',
            options: [`خبرية — it now reports something, even though the report is كاذبة`, `It stays إنشائية, since the words are almost the same`, `It becomes a جملة شرطية`, `It becomes a جملة صغرى`],
            correct: 0,
          },
        },
        {
          heading: 'اختلاف اللفظ والمعنى',
          lines: [
            { html: `Sometimes the wording of a جملة points one way while its meaning functions another way.`, list: false },
            { table: { title: 'اللفظ والمعنى', headers: ['Example', 'Translation', 'Wording', 'Meaning'], rows: [
              [`الحمد لله`, `all praise belongs to Allah`, `خبر`, `may function as إنشاء by expressing praise`],
              [`فليتبوأ مقعده من النار`, `let him take his seat in the Fire`, `إنشاء`, `means خبر: he will take his place in the Fire`],
            ] } },
            { box: { title: 'Careful', lines: [`قَدْ يُنْظَرُ فِي التَّصْنِيفِ إِلَى اللَّفْظِ أَوِ المَعْنَى أَوْ كِلَيْهِمَا`] } },
            { html: `الحَمْدُ لِلَّهِ is a statement in its wording, but it can also perform praise — its لفظ is خبر while its function can be إنشاء.`, list: false },
            { html: `In the second case, <bdi>فليتبوأ</bdi> looks like أمر because of لام الأمر. Its meaning is not really an invitation to choose Hellfire — it is خبر شديد: whoever deliberately lies against the Messenger will take his place in the Fire. Choosing the أمر wording over a plain خبر adds تأكيد: it holds the listener's attention and makes the warning land harder than an ordinary report would.`, list: false },
          ],
          exercise: {
            prompt: `فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ carries لام الأمر in its wording. What does it actually mean?`,
            kind: 'mcq',
            options: [`خبر شديد — whoever deliberately lies against the Messenger will take his place in the Fire`, `A genuine أمر inviting the listener to sit in the Fire`, `استفهام about who sits in the Fire`, `دعاء asking Allah to spare the Fire`],
            correct: 0,
          },
        },
        {
          heading: 'الجملة الكبرى والجملة الصغرى',
          lines: [
            { html: `A جملة may also be classified by its relationship to another جملة inside it — a different question from اسمية/فعلية and from خبرية/إنشائية.`, list: false },
            { table: { title: 'الكبرى والصغرى', headers: ['Category', 'Definition'], rows: [
              [`الجملة الكبرى`, `a sentence that contains another sentence`],
              [`الجملة الصغرى`, `the sentence that occupies the place of a single word inside الكبرى`],
            ] } },
            { html: `In <bdi>وَاللهُ يَعْلَمُ</bdi>, the whole expression is الجملة الكبرى. Inside it, يَعْلَمُ is a جملة فعلية functioning as الخبر of الله — so it is الجملة الصغرى.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَاللهُ يَعْلَمُ`,
                translation: `And Allah knows.`,
                cells: [`وَ`, `اللهُ`, `يَعْلَمُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف` }, { start: 1, end: 1, role: `مبتدأ` }, { start: 2, end: 2, role: `جملة فعلية في محل رفع خبر` }] },
                ],
              },
            },
            { html: `<bdi>موقع مفرد</bdi> means the position ordinarily filled by one word. Compare اللهُ عَلِيمٌ, whose خبر is the single word عليم, with اللهُ يَعْلَمُ, whose خبر is the whole جملة يعلم — taking the place a single word would otherwise fill. That is why يعلم is called جملة صغرى.`, list: false },
            { table: { title: 'الكبرى والصغرى: مستويان لنفس التركيب', headers: ['Level', 'What is considered'], rows: [
              [`الكبرى`, `the whole جملة: والله يعلم`],
              [`الصغرى`, `the inner جملة standing in the place of a single word: يعلم`],
            ] } },
          ],
          exercise: {
            prompt: `In وَاللهُ يَعْلَمُ, يَعْلَمُ fills the position of الخبر, which a single word like عَلِيمٌ could otherwise fill. What is يَعْلَمُ called, and what is the whole expression والله يعلم called?`,
            kind: 'mcq',
            options: [`يعلم is جملة صغرى; والله يعلم is جملة كبرى`, `يعلم is جملة كبرى; والله يعلم is جملة صغرى`, `Both are جملة كبرى`, `Both are جملة صغرى`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الجملة الخبرية?`, options: [`Speech whose speaker can be judged truthful or false`, `Speech whose speaker is not described as truthful or false`, `A sentence that begins with an اسم`, `A sentence containing another sentence`], correct: 0 },
        { q: `الله واحد is certainly true. Does that remove it from الجملة الخبرية?`, options: [`No — خبرية only requires the statement to be the kind judged صدقا أو كذبا`, `Yes — certain truths are إنشائية`, `Yes — only false statements are خبرية`, `No, because الله واحد lacks إسناد`], correct: 0 },
        { q: `أَإِلَهٌ مَعَ اللهِ performs استفهام. Which category of الجملة is that?`, options: [`إنشائية`, `خبرية`, `شرطية`, `كبرى`], correct: 0 },
        { q: `فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ is إنشاء in its wording (لام الأمر) but خبر in meaning. What does it actually communicate?`, options: [`A stern warning — whoever lies against the Messenger will take his place in the Fire`, `A genuine invitation to sit in the Fire`, `A question about the Fire`, `A supplication to be spared the Fire`], correct: 0 },
        { q: `Which of the following correctly defines الجملة الصغرى?`, options: [`The sentence that occupies the place of a single word inside a larger جملة`, `A sentence that begins with a فعل`, `Speech whose speaker can be judged truthful or false`, `The larger جملة that contains another جملة`], correct: 0 },
        { q: `In اللهُ يَعْلَمُ, الخبر is a whole جملة, يعلم, rather than one word. What does that make يعلم?`, options: [`جملة صغرى`, `جملة كبرى`, `جملة شرطية`, `جملة اسمية غير منسوخة`], correct: 0 },
      ],
      bank: [
        { title: `الخبرية: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الجملة الخبرية?`, options: [`Speech whose speaker can be judged truthful or false`, `Speech whose speaker is not described as truthful or false`, `A sentence beginning with an اسم`, `A sentence containing another جملة`], correct: 0 },
        { title: `الإنشائية: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الجملة الإنشائية?`, options: [`Speech whose speaker is not described as truthful or false`, `Speech whose speaker can be judged truthful or false`, `A sentence beginning with a فعل`, `A sentence containing another جملة`], correct: 0 },
        { title: `زيد قائم: خبرية أم إنشائية`, kind: 'mcq', prompt: `زَيْدٌ قَائِمٌ may be true or false depending on whether Zayd is actually standing. Which category is it?`, options: [`خبرية`, `إنشائية`, `شرطية`, `صغرى`], correct: 0 },
        { title: `خبرية لا تعني صادقة`, kind: 'mcq', prompt: `A false mathematical statement still gives إخبارا that can be judged. What category does that make it, despite being false?`, options: [`خبرية`, `إنشائية`, `لا شيء — false statements have no category`, `صغرى`], correct: 0 },
        { title: `الاستفهام: نوع من الإنشاء`, kind: 'mcq', prompt: `أَإِلَهٌ مَعَ اللهِ performs a question rather than reporting a fact. Which type of إنشاء is that?`, options: [`استفهام`, `تمني`, `نداء`, `دعاء`], correct: 0 },
        { title: `التمني: مثال`, kind: 'mcq', prompt: `يَا لَيْتَ قَوْمِي يَعْلَمُونَ expresses a wish. Which type of إنشاء is that?`, options: [`تمني`, `نداء`, `تحذير`, `إغراء`], correct: 0 },
        { title: `النداء: مثال`, kind: 'mcq', prompt: `يَا أَيُّهَا الرَّسُولُ calls someone directly. Which type of إنشاء is that?`, options: [`نداء`, `تمني`, `استفهام`, `قسم`], correct: 0 },
        { title: `التحذير: مثال`, kind: 'mcq', prompt: `نَاقَةَ اللهِ وَسُقْيَاهَا warns the listener about something. Which type of إنشاء is that?`, options: [`تحذير`, `إغراء`, `مدح`, `ذم`], correct: 0 },
        { title: `الأمر والنهي`, kind: 'mcq', prompt: `أَقِيمُوا الصَّلاةَ commands, and لا تَقْرَبُوا الفَوَاحِشَ prohibits. Which pair of إنشاء types are these, respectively?`, options: [`أمر ونهي`, `نهي وأمر`, `دعاء واستفهام`, `مدح وذم`], correct: 0 },
        { title: `المدح والذم`, kind: 'mcq', prompt: `وَلَنِعْمَ دَارُ المُتَّقِينَ praises, and بِئْسَ الاسمُ الفُسُوقُ blames. Which pair of إنشاء types are these, respectively?`, options: [`مدح وذم`, `ذم ومدح`, `تحذير وإغراء`, `توجع وقسم`], correct: 0 },
        { title: `القسم: مثال`, kind: 'mcq', prompt: `وَالعَصْرِ swears an oath. Which type of إنشاء is that?`, options: [`قسم`, `دعاء`, `توجع`, `إغراء`], correct: 0 },
        { title: `الفعل لا الموضوع هو الفارق`, kind: 'mcq', prompt: `What actually distinguishes خبرية from إنشائية?`, options: [`What the speaker is doing with the words, not the subject matter itself`, `Whether the subject matter is religious or worldly`, `Whether the جملة is اسمية or فعلية`, `Whether the جملة contains a ناسخ`], correct: 0 },
        { title: `إلغاء الهمزة يغيّر التصنيف`, kind: 'mcq', prompt: `أَإِلَهٌ مَعَ اللهِ is إنشائية. Drop only its همزة الاستفهام — what does the resulting جملة إِلَهٌ مَعَ اللهِ become?`, options: [`خبرية — it now reports something, even though the report is كاذبة`, `It stays إنشائية`, `It becomes شرطية`, `It becomes صغرى`], correct: 0 },
        { title: `إياك نعبد: خبرية رغم التقديم`, kind: 'mcq', prompt: `إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ fronts إياك for emphasis. Does that fronting make the جملة إنشائية?`, options: [`No — it still gives information (worship and help belong to Allah alone), so it stays خبرية`, `Yes — fronting always makes a جملة إنشائية`, `Yes — إياك is itself an إنشاء particle`, `No, because إياك نعبد has no مسند`], correct: 0 },
        { title: `اللفظ والمعنى قد يختلفان`, kind: 'mcq', prompt: `الحَمْدُ لِلَّهِ is خبر in its wording. What can it also perform in meaning?`, options: [`إنشاء — by expressing praise`, `نهي`, `استفهام`, `قسم`], correct: 0 },
        { title: `فليتبوأ: اللفظ إنشاء والمعنى خبر`, kind: 'mcq', prompt: `فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ carries لام الأمر, marking إنشاء in its wording. What is its meaning instead?`, options: [`خبر — a stern report that he will take his place in the Fire`, `A literal command to sit in the Fire`, `استفهام about the Fire`, `تمني for the Fire`], correct: 0 },
        { title: `لماذا اختير لفظ الأمر`, kind: 'mcq', prompt: `Why does فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ use أمر wording instead of a plain خبر, if its meaning is really خبر?`, options: [`Moving the meaning away from its ordinary صيغة adds تأكيد and makes the warning land harder`, `Because أمر wording is grammatically required after لام`, `Because the speaker is genuinely inviting the listener`, `Because خبر wording cannot express warnings`], correct: 0 },
        { title: `الكبرى والصغرى: التعريف`, kind: 'mcq', prompt: `الجملة الكبرى is defined in relation to another جملة. What is that relation?`, options: [`It contains another جملة inside it`, `It is contained inside another جملة`, `It can be judged صدقا أو كذبا`, `It opens with a فعل`], correct: 0 },
        { title: `الصغرى تشغل موقع مفرد`, kind: 'mcq', prompt: `الجملة الصغرى occupies the position that could otherwise be filled by what?`, options: [`A single word (موقع مفرد)`, `A whole جملة كبرى`, `A ناسخ`, `A فضلة only`], correct: 0 },
        { title: `الله عليم مقابل الله يعلم`, kind: 'mcq', prompt: `اللهُ عَلِيمٌ has a one-word خبر, عليم. اللهُ يَعْلَمُ has a whole جملة as its خبر, يعلم. What does that make يعلم?`, options: [`جملة صغرى`, `جملة كبرى`, `جملة شرطية`, `فضلة`], correct: 0 },
        { title: `تصنيف مستقل عن الاسمية/الفعلية والخبرية/الإنشائية`, kind: 'mcq', prompt: `Classifying a جملة as كبرى or صغرى asks a different question than classifying it as اسمية/فعلية or خبرية/إنشائية. What question does كبرى/صغرى ask instead?`, options: [`Whether one جملة is contained inside another`, `Whether the جملة opens with an اسم or a فعل`, `Whether the speaker can be judged truthful or false`, `Whether a ناسخ has entered the جملة`], correct: 0 },
        {
          title: `تركيب: وَاللهُ يَعْلَمُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَاللهُ يَعْلَمُ.`,
          source: `وَاللهُ يَعْلَمُ`,
          words: [`وَ`, `اللهُ`, `يَعْلَمُ`],
          labels: [`حرف`, `مبتدأ`, `جملة فعلية في محل رفع خبر`],
          distractors: [`فعل ماضٍ`, `مفعول به`],
        },
        {
          title: `تركيب: اللهُ عَلِيمٌ`,
          kind: 'tarkeeb',
          instruction: `Identify المبتدأ والخبر in اللهُ عَلِيمٌ.`,
          source: `اللهُ عَلِيمٌ`,
          words: [`اللهُ`, `عَلِيمٌ`],
          labels: [`مبتدأ`, `خبر`],
          distractors: [`فضلة`, `ناسخ`],
        },
        {
          title: `تركيب: وَإِيَّاكَ نَسْتَعِينُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَإِيَّاكَ نَسْتَعِينُ.`,
          source: `وَإِيَّاكَ نَسْتَعِينُ`,
          words: [`وَ`, `إِيَّاكَ`, `نَسْتَعِينُ`],
          labels: [`حرف عطف`, `مفعول به مقدم / فضلة`, `فعل + فاعل مستتر`],
          distractors: [`مسند إليه`, `ناسخ`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'شبه الجملة: أقسامها بالبنية',
      subtitle: `شبه الجملة by Structure — الجار والمجرور vs الظرف والمضاف إليه`,
      sourceRef: 'app-lessons/013',
      concepts: [
        {
          heading: 'تعريف شبه الجملة',
          lines: [
            { html: `<bdi>شبه الجملة</bdi> means an expression that resembles a جملة. It is not a full جملة, but it may stand where a جملة-like meaning is needed — especially clear with الظرف المستقر, which can take the place of a جملة in certain positions.`, list: false },
            { box: { title: 'Example', lines: [`الَّذِي عِنْدَكَ`] } },
            { html: `الذي is an اسم موصول and needs a صلة. عندك is not a full جملة in outward form, but it can stand in the position required by الصلة. That resemblance is why it is called شبه الجملة.`, list: false },
            { html: `The word <bdi>ظرف</bdi> itself is used in more than one sense: (1) المفعول فيه, (2) words like فوق, تحت, and عند, (3) شبه الجملة as a whole. The intended meaning depends on context.`, list: false },
          ],
          exercise: {
            prompt: `الَّذِي عِنْدَكَ needs a صلة after اسم الموصول الذي. عندك is not a full جملة in outward form. What term names an expression like عندك that resembles a جملة without being one?`,
            kind: 'mcq',
            options: [`شبه الجملة`, `الجملة الصغرى`, `الجملة الكبرى`, `العمدة`],
            correct: 0,
          },
        },
        {
          heading: 'النوع الأول: الجار والمجرور',
          lines: [
            { html: `By structure, شبه الجملة has two types. The first is <bdi>الجار والمجرور</bdi>: a حرف جر together with its مجرور.`, list: false },
            { table: { title: 'النوعان بالبنية', headers: ['Type', 'Parts', 'Example', 'Translation'], rows: [
              [`الجار والمجرور`, `حرف جر + مجرور`, `فِي مَكَّةَ`, `in Makkah`],
              [`الظرف والمضاف إليه`, `ظرف + مضاف إليه`, `عِنْدَ الكَعْبَةِ`, `near the Ka'bah`],
            ] } },
            {
              tarkeebDiagram: {
                sentence: `فِي مَكَّةَ`,
                translation: `In Makkah`,
                cells: [`فِي`, `مَكَّةَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `جار` }, { start: 1, end: 1, role: `مجرور` }] },
                ],
              },
            },
            { html: `Together فِي and مَكَّةَ form جار ومجرور, one type of شبه الجملة.`, list: false },
          ],
          exercise: {
            prompt: `فِي مَكَّةَ pairs a حرف جر with its مجرور. Which type of شبه الجملة does that make it?`,
            kind: 'mcq',
            options: [`الجار والمجرور`, `الظرف والمضاف إليه`, `الجملة الصغرى`, `العمدة`],
            correct: 0,
          },
        },
        {
          heading: 'النوع الثاني: الظرف والمضاف إليه',
          lines: [
            { html: `The second type is <bdi>الظرف والمضاف إليه</bdi>: a ظرف together with the اسم that follows it as مضاف إليه.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `عِنْدَ الكَعْبَةِ`,
                translation: `Near the Ka'bah`,
                cells: [`عِنْدَ`, `الكَعْبَةِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `ظرف` }, { start: 1, end: 1, role: `مضاف إليه` }] },
                ],
              },
            },
            { html: `Together they form ظرف ومضاف إليه, the second type of شبه الجملة. Words like عند, فوق, تحت, and خلف are not حروف جر — they are أسماء used as ظروف, and what follows them is مضاف إليه, not simply مجرور بحرف جر.`, list: false },
          ],
          exercise: {
            prompt: `عِنْدَ الكَعْبَةِ pairs a ظرف with the اسم after it. Is عِنْدَ a حرف جر?`,
            kind: 'mcq',
            options: [`No — عند is an اسم used as a ظرف, and الكعبة is its مضاف إليه`, `Yes — عند is a حرف جر like في`, `Yes, because الكعبة is مجرور`, `No, because عند never takes an إضافة`],
            correct: 0,
          },
        },
        {
          heading: 'لماذا يُسمى الجار والمجرور ظرفا',
          lines: [
            { html: `Calling a جار ومجرور a ظرف is a <bdi>تسامح</bdi> — a loose usage. ظرف belongs properly to زمان and مكان, and حروف such as لام, كاف, and رُبَّ carry no ظرفية at all.`, list: false },
            { html: `The sense of ظرفية is original in words like عند and فوق and their sisters. Once that same sense was found in حروف such as في and على, the name ظرف was extended to the whole class of جار ومجرور <bdi>تغليبًا</bdi> — letting the dominant case name the group.`, list: false },
          ],
          exercise: {
            prompt: `لام, كاف, and رُبَّ are حروف جر that carry no ظرفية at all, yet الجار والمجرور built with them is still loosely called ظرف. What explains extending the name ظرف to them?`,
            kind: 'mcq',
            options: [`تغليب — the name was extended from عند/فوق and في/على to the whole جار ومجرور class`, `لام, كاف, and رب are themselves originally ظروف`, `The term ظرف only ever applied to حروف جر`, `It is a scribal error repeated across grammar books`],
            correct: 0,
          },
        },
        {
          heading: 'تفسير آخر: الحاجة إلى متعلَّق',
          lines: [
            { html: `A second explanation is given for the same naming: a جار ومجرور needs something to attach to, a <bdi>متعلَّق</bdi>, the same way a ظرف needs a <bdi>مظروف</bdi>. That shared need for something to attach to is itself enough to justify the shared name.`, list: false },
          ],
          exercise: {
            prompt: `What is the second explanation offered for why جار ومجرور is called ظرف, alongside the تغليب explanation؟`,
            kind: 'mcq',
            options: [`A جار ومجرور needs a متعلَّق the way a ظرف needs a مظروف — a shared structural need`, `A جار ومجرور always denotes زمان`, `A جار ومجرور can never appear without a ظرف beside it`, `الجار والمجرور is historically the older term`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الَّذِي عِنْدَكَ uses عندك to complete اسم الموصول's صلة. عندك is not a full جملة in outward form. What is it called?`, options: [`شبه الجملة`, `الجملة الصغرى`, `الجملة الكبرى`, `الفضلة`], correct: 0 },
        { q: `By structure, شبه الجملة divides into two types. What are they?`, options: [`الجار والمجرور، والظرف والمضاف إليه`, `الخبرية والإنشائية`, `الاسمية والفعلية`, `الكبرى والصغرى`], correct: 0 },
        { q: `عِنْدَ, فَوْقَ, تَحْتَ, and خَلْفَ are used as ظروف. What are they grammatically?`, options: [`أسماء, and what follows them is مضاف إليه`, `حروف جر, and what follows them is مجرور`, `أفعال`, `حروف عطف`], correct: 0 },
        { q: `Why is a جار ومجرور loosely called ظرف, even though لام, كاف, and رُبَّ carry no ظرفية at all؟`, options: [`تغليب — the name عند/فوق's ظرفية was extended to the whole class once في/على showed the same sense`, `Because ظرف is the only term grammar has for any حرف جر`, `Because لام, كاف, and رب are themselves ظروف`, `Because a جار ومجرور always denotes مكان`], correct: 0 },
        { q: `What second reason is given for naming جار ومجرور a ظرف؟`, options: [`It needs a متعلَّق the way a ظرف needs a مظروف`, `It always denotes زمان`, `It cannot appear without a real ظرف nearby`, `It shares the same حروف as النداء`], correct: 0 },
        { q: `فِي مَكَّةَ pairs a حرف جر with a مجرور. عِنْدَ الكَعْبَةِ pairs a ظرف with a مضاف إليه. What do both pairs share, despite the structural difference؟`, options: [`Both are types of شبه الجملة by structure`, `Both are types of الجملة الاسمية`, `Both are أنواع الإنشاء`, `Both are أركان الإسناد`], correct: 0 },
      ],
      bank: [
        { title: `شبه الجملة: التعريف`, kind: 'mcq', prompt: `Which of the following best describes شبه الجملة?`, options: [`An expression that resembles a جملة without being a full one`, `A sentence that begins with an اسم`, `Speech that can be judged truthful or false`, `The essential core of a جملة`], correct: 0 },
        { title: `الذي عندك: الصلة`, kind: 'mcq', prompt: `الَّذِي عِنْدَكَ needs a صلة for اسم الموصول الذي. What does عندك supply, given it is not a full جملة in outward form؟`, options: [`A شبه الجملة standing in the position الصلة requires`, `A جملة فعلية عادية`, `A جملة اسمية منسوخة`, `A مسند إليه فقط`], correct: 0 },
        { title: `إطلاقات كلمة ظرف`, kind: 'mcq', prompt: `The word ظرف itself carries more than one sense in grammar. Which of these is NOT one of them?`, options: [`حرف عطف`, `المفعول فيه`, `كلمات مثل فوق وتحت وعند`, `شبه الجملة ذاتها`], correct: 0 },
        { title: `الجار والمجرور: التركيب`, kind: 'mcq', prompt: `What two parts make up النوع الأول of شبه الجملة by structure, الجار والمجرور؟`, options: [`حرف جر + مجرور`, `ظرف + مضاف إليه`, `مبتدأ + خبر`, `فعل + فاعل`], correct: 0 },
        { title: `في مكة: أي نوع`, kind: 'mcq', prompt: `فِي مَكَّةَ pairs a حرف جر with its مجرور. Which type of شبه الجملة is that؟`, options: [`الجار والمجرور`, `الظرف والمضاف إليه`, `الجملة الصغرى`, `العمدة`], correct: 0 },
        { title: `الظرف والمضاف إليه: التركيب`, kind: 'mcq', prompt: `What two parts make up النوع الثاني of شبه الجملة by structure؟`, options: [`ظرف + مضاف إليه`, `حرف جر + مجرور`, `ناسخ + اسمه`, `مسند + مسند إليه`], correct: 0 },
        { title: `عند الكعبة: أي نوع`, kind: 'mcq', prompt: `عِنْدَ الكَعْبَةِ pairs a ظرف with the اسم after it. Which type of شبه الجملة is that؟`, options: [`الظرف والمضاف إليه`, `الجار والمجرور`, `الجملة الكبرى`, `الجملة الشرطية`], correct: 0 },
        { title: `عند وفوق وتحت وخلف: ليست حروف جر`, kind: 'mcq', prompt: `عند, فوق, تحت, and خلف behave as ظروف. Grammatically, what are they؟`, options: [`أسماء, taking a مضاف إليه after them`, `حروف جر, taking a مجرور after them`, `أفعال`, `حروف عطف`], correct: 0 },
        { title: `الفرق بين مجرور بحرف الجر ومضاف إليه`, kind: 'mcq', prompt: `After عِنْدَ, the following اسم is not مجرور بحرف جر. What is its actual role؟`, options: [`مضاف إليه`, `مجرور بحرف الجر`, `فاعل`, `مفعول به`], correct: 0 },
        { title: `تسامح تسمية الجار والمجرور ظرفا`, kind: 'mcq', prompt: `Calling a جار ومجرور a ظرف is described as a تسامح. What does that mean هنا؟`, options: [`A loose usage, since ظرف properly belongs to زمان ومكان`, `A grammatical error that should never be repeated`, `The only correct term for any حرف جر`, `A term used exclusively in poetry`], correct: 0 },
        { title: `لام وكاف وربّ: بلا ظرفية`, kind: 'mcq', prompt: `لام, كاف, and رُبَّ are حروف جر with no ظرفية of their own. Despite that, the whole جار ومجرور class is still loosely called ظرف. Why؟`, options: [`تغليب — the dominant case (عند/في/على) lent its name to the whole class`, `Because لام, كاف, and رب are themselves originally ظروف`, `Because ظرف has no other established meaning`, `Because الجار والمجرور always denotes مكان`], correct: 0 },
        { title: `أصل الظرفية`, kind: 'mcq', prompt: `Where is the sense of ظرفية described as original — before it was extended to حروف such as في and على؟`, options: [`In words like عند وفوق and their sisters`, `In الحروف الناصبة للفعل المضارع`, `In أدوات الاستفهام`, `In حروف العطف`], correct: 0 },
        { title: `المتعلَّق: التفسير الثاني`, kind: 'mcq', prompt: `What second reason, besides تغليب, is offered for calling جار ومجرور a ظرف؟`, options: [`It needs a متعلَّق, just as a ظرف needs a مظروف`, `It is always مبني`, `It can only appear after a فعل تام`, `It shares the same إعراب as النداء`], correct: 0 },
        { title: `شبه الجملة ليست جملة كاملة`, kind: 'mcq', prompt: `Is شبه الجملة itself a complete جملة, in the sense defined in the previous lesson (containing مسند ومسند إليه)؟`, options: [`No — it is not a full جملة, though it may stand where a جملة-like meaning is needed`, `Yes — every شبه الجملة is itself a complete جملة`, `Yes, but only when it contains a ناسخ`, `No — it is always the same as الجملة الصغرى`], correct: 0 },
        { title: `الذي في مكة: نفس المبدأ`, kind: 'mcq', prompt: `By the same reasoning used for الَّذِي عِنْدَكَ, could في مَكَّةَ also function as الصلة of an اسم موصول, as in الَّذِي فِي مَكَّةَ؟`, options: [`Yes — شبه الجملة generally can stand where a صلة is required`, `No — الجار والمجرور can never serve as صلة`, `No — only الظرف والمضاف إليه can serve as صلة`, `Yes, but only if it contains تنوين`], correct: 0 },
        { title: `شبه الجملة: نوعان لا ثالث لهما بالبنية`, kind: 'mcq', prompt: `By structure, how many types does شبه الجملة have؟`, options: [`اثنان: الجار والمجرور، والظرف والمضاف إليه`, `ثلاثة أنواع`, `نوع واحد فقط`, `أربعة أنواع`], correct: 0 },
        { title: `مكة: مجرورة بماذا`, kind: 'mcq', prompt: `In فِي مَكَّةَ, what makes مَكَّةَ مجرورة؟`, options: [`الحرف جر في before it`, `Its being مضاف إليه`, `Its being فاعل`, `Its being مبتدأ`], correct: 0 },
        { title: `الكعبة: مضاف إليه لا مجرور بحرف`, kind: 'mcq', prompt: `In عِنْدَ الكَعْبَةِ, why is الكَعْبَةِ مجرورة, given that عند is not a حرف جر؟`, options: [`Because it is مضاف إليه to الظرف عند, not مجرورة by a حرف جر`, `Because عند secretly functions as حرف جر here`, `Because الكعبة always carries كسرة regardless of context`, `Because الكعبة is مبني`], correct: 0 },
        { title: `تمييز شبه الجملة عن العمدة`, kind: 'mcq', prompt: `Is شبه الجملة itself normally part of العمدة (مسند/مسند إليه) of a جملة؟`, options: [`Not necessarily — it commonly appears as فضلة, attached to a governing element elsewhere in the جملة`, `Yes — شبه الجملة is always the مسند`, `Yes — شبه الجملة is always the مسند إليه`, `شبه الجملة never appears inside a جملة at all`], correct: 0 },
        { title: `مقارنة النوعين بالبنية`, kind: 'mcq', prompt: `فِي مَكَّةَ uses a حرف جر; عِنْدَ الكَعْبَةِ uses an اسم ظرف. What is the key structural difference between the two types of شبه الجملة؟`, options: [`One begins with a حرف جر and ends in مجرور بالحرف; the other begins with an اسم ظرف and ends in مضاف إليه`, `Both always begin with a فعل`, `One is إنشائية and the other is خبرية`, `One is اسمية and the other فعلية`], correct: 0 },
        {
          title: `تركيب: فِي مَكَّةَ`,
          kind: 'tarkeeb',
          instruction: `Identify الجار والمجرور in فِي مَكَّةَ.`,
          source: `فِي مَكَّةَ`,
          words: [`فِي`, `مَكَّةَ`],
          labels: [`جار`, `مجرور`],
          distractors: [`ظرف`, `مضاف إليه`],
        },
        {
          title: `تركيب: عِنْدَ الكَعْبَةِ`,
          kind: 'tarkeeb',
          instruction: `Identify الظرف والمضاف إليه in عِنْدَ الكَعْبَةِ.`,
          source: `عِنْدَ الكَعْبَةِ`,
          words: [`عِنْدَ`, `الكَعْبَةِ`],
          labels: [`ظرف`, `مضاف إليه`],
          distractors: [`جار`, `مجرور`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'شبه الجملة: أقسامها بالعامل',
      subtitle: `شبه الجملة by Governor — الظرف اللغو vs الظرف المستقر`,
      sourceRef: 'app-lessons/014',
      concepts: [
        {
          heading: 'العامل الذي يتعلق به شبه الجملة',
          lines: [
            { html: `A شبه الجملة is connected to a governing element, its <bdi>عامل</bdi>. The شبه الجملة occurring in a جملة is itself called <bdi>متعلِّق</bdi>, and its عامل is called <bdi>متعلَّق</bdi> — many books write it متعلَّق به.`, list: false },
            { html: `By its عامل, شبه الجملة divides into two types.`, list: false },
            { table: { title: 'أقسام شبه الجملة بالعامل', headers: ['Type', 'Governing element'], rows: [
              [`الظرف اللغو`, `mentioned, or omitted but specific`],
              [`الظرف المستقر فيه`, `omitted and general`],
            ] } },
          ],
          exercise: {
            prompt: `A شبه الجملة occurring in a جملة is called متعلِّق. What is its governing element called؟`,
            kind: 'mcq',
            options: [`متعلَّق (متعلَّق به)`, `مسند إليه`, `فضلة فقط`, `ناسخ`],
            correct: 0,
          },
        },
        {
          heading: 'الظرف اللغو: عامله مذكور أو محذوف مخصوص',
          lines: [
            { html: `<bdi>الظرف اللغو</bdi> is a شبه الجملة whose عامل is specific.`, list: false },
            { box: { title: 'Example', lines: [`لَقَدْ أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ`] } },
            { html: `The شبه الجملة إلى قومه connects to the mentioned فعل, أرسلنا.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ`,
                translation: `We sent Nuh to his people.`,
                cells: [`أَرْسَلْنَا`, `نُوحًا`, `إِلَى قَوْمِهِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `عامل مذكور` }, { start: 1, end: 1, role: `مفعول به` }, { start: 2, end: 2, role: `ظرف لغو متعلق بالفعل` }] },
                ],
              },
            },
            { html: `The عامل can also be omitted while staying specific. In <bdi>وَإِلَى عَادٍ أَخَاهُمْ هُودًا</bdi>, the understood meaning is وَأَرْسَلْنَا إِلَى عَادٍ أَخَاهُمْ هُودًا. Since the omitted عامل is the one specific فعل أرسلنا, the شبه الجملة is still ظرف لغو — a general word such as كان, ثبت, or وجد would not serve here; the meaning demands that one particular verb.`, list: false },
          ],
          exercise: {
            prompt: `In وَإِلَى عَادٍ أَخَاهُمْ هُودًا, the عامل of إلى عاد is omitted but understood as the specific فعل أرسلنا. Could a general word like كان or ثبت fill that role instead؟`,
            kind: 'mcq',
            options: [`No — the meaning demands the one particular verb أرسلنا, so الظرف still counts as لغو`, `Yes — any general word can replace it without changing the meaning`, `No — the شبه الجملة becomes ظرف مستقر once the عامل is omitted`, `Yes, because عامل محذوف is always general`],
            correct: 0,
          },
        },
        {
          heading: 'لماذا يُسمى لغوا',
          lines: [
            { html: `<bdi>لغو</bdi> here does not mean useless. It means the شبه الجملة is free from the kind of hidden pronoun found with الظرف المستقر.`, list: false },
            { html: `More precisely, الظرف اللغو does not contain a ضمير مستتر returning to a مبتدأ, صاحب حال, منعوت, or موصول. The term لغو is established in grammar, though <bdi>ظرف خاص</bdi> would describe the idea more directly.`, list: false },
          ],
          exercise: {
            prompt: `الظرف اللغو is described as free of a certain hidden element found in الظرف المستقر. What is that element؟`,
            kind: 'mcq',
            options: [`A ضمير مستتر returning to a مبتدأ, صاحب حال, منعوت, or موصول`, `A تنوين attached to the شبه الجملة`, `A حرف جر attached to the شبه الجملة`, `A فعل مذكور before it`],
            correct: 0,
          },
        },
        {
          heading: 'مواضع وجوب حذف عامل الظرف اللغو',
          lines: [
            { html: `The عامل of الظرف اللغو is usually mentioned, but it must be omitted in certain fixed or strongly established patterns.`, list: false },
            { table: { title: 'مواضع حذف عامل الظرف اللغو', headers: ['Place', 'Example', 'Translation', 'Understood governing element'], rows: [
              [`أمثال`, `الكِلابُ عَلَى البَقَرِ`, `the dogs upon the cattle`, `سَلِّطْ`],
              [`تعابير موروثة`, `بِأَبِي أَنْتَ وَأُمِّي`, `may my father and mother be ransomed for you`, `أَنْتَ مُفَدَّى`],
              [`قسم بلا باء`, `تَاللهِ تَفْتَأُ`, `by Allah, you will not cease`, `أقسم or similar`],
              [`خبر كان مع لام الجحود`, `مَا كَانَ اللهُ لِيُعَذِّبَهُمْ`, `Allah would not punish them`, `قاصدًا or similar`],
            ] } },
            { html: `These are fixed or strongly established patterns, so the عامل is not normally stated.`, list: false },
          ],
          exercise: {
            prompt: `تَاللهِ تَفْتَأُ is an oath sworn without the usual باء القسم. What kind of عامل governs the omitted-but-understood شبه الجملة تالله here؟`,
            kind: 'mcq',
            options: [`A specific, omitted عامل such as أقسم — still ظرف لغو`, `A general omitted عامل such as ثبت — ظرف مستقر`, `No عامل at all is needed for a قسم`, `الفعل تفتأ itself is the عامل of تالله`],
            correct: 0,
          },
        },
        {
          heading: 'الظرف المستقر فيه',
          lines: [
            { html: `<bdi>الظرف المستقر فيه</bdi> is a شبه الجملة whose عامل is omitted and general — a word carrying the meaning of <bdi>وجود</bdi>, existence or being established.`, list: false },
            { table: { title: 'صيغ العامل العام المحذوف', headers: ['Form', 'Examples'], rows: [
              [`فعل`, `استقر، ثبت، وجد، يكون`],
              [`اسم بمعنى الفعل`, `مستقر، ثابت، موجود، كائن`],
            ] } },
            { box: { title: 'Example', lines: [`إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ`] } },
            { html: `The meaning may be understood as إِنَّكَ ثَابِتٌ عَلَى صِرَاطٍ مُسْتَقِيمٍ.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ`,
                translation: `Indeed you are upon a straight path.`,
                cells: [`إِنَّكَ`, `عَلَى صِرَاطٍ مُسْتَقِيمٍ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `اسم إن` }, { start: 1, end: 1, role: `ظرف مستقر متعلق بعامل عام محذوف` }] },
                ],
              },
            },
            { html: `The omitted عامل contains an understood ضمير referring back to the relevant اسم. Both the عامل and its ضمير settle inside the شبه الجملة — which is what the full name records: الظرف المستقر فيه. In most books it is shortened to <bdi>ظرف مستقر</bdi>, اقتصارًا, simply for brevity.`, list: false },
          ],
          exercise: {
            prompt: `إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ can be understood as إِنَّكَ ثَابِتٌ عَلَى صِرَاطٍ مُسْتَقِيمٍ. What kind of عامل is the omitted ثابت؟`,
            kind: 'mcq',
            options: [`General, carrying the meaning of وجود — making the شبه الجملة ظرف مستقر`, `Specific, like أرسلنا — making it ظرف لغو`, `Not really omitted, since ثابت is written`, `A حرف جر, not an اسم or فعل`],
            correct: 0,
          },
        },
        {
          heading: 'مواضع الظرف المستقر وتنبيهات',
          lines: [
            { html: `الظرف المستقر can occupy several grammatical positions.`, list: false },
            { table: { title: 'مواضع الظرف المستقر', headers: ['Position', 'Example', 'Translation'], rows: [
              [`خبر`, `وَهُوَ عَلَى صِرَاطٍ مُسْتَقِيمٍ`, `and he is upon a straight path`],
              [`حال`, `فَخَرَجَ عَلَى قَوْمِهِ فِي زِينَتِهِ`, `he came out before his people in his adornment`],
              [`نعت`, `أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ`, `those are upon guidance from their Lord`],
              [`صلة`, `وَلَهُ مَنْ فِي السَّمَاوَاتِ`, `and to Him belongs whoever is in the heavens`],
              [`اعتماد`, `أَفِي اللهِ شَكٌّ`, `is there doubt about Allah?`],
            ] } },
            { html: `In وَهُوَ عَلَى صِرَاطٍ مُسْتَقِيمٍ, هو is المبتدأ. For brevity one says the جار ومجرور is الخبر; stated precisely, the جار ومجرور attaches to an omitted عامل such as ثابت or مستقر, and the whole understood structure fills الخبر position. The نعت case works the same way: من ربهم describes هدى through an omitted general عامل — guidance that is from their Lord.`, list: false },
            { box: { title: 'Careful', lines: [`لا يُكْتَفَى بِالقَوْلِ إِنَّ الجَارَّ وَالمَجْرُورَ مُتَعَلِّقٌ، بَلْ يُعَيَّنُ مَوْقِعُهُ مِنَ الإِعْرَابِ`] } },
            { html: `Saying only "the جار ومجرور is متعلق" is not enough — the exact role must be named: خبر, نعت, حال, صلة, مفعول فيه, or another grammatical function.`, list: false },
            { box: { title: 'Example', lines: [`فَخَرَجَ عَلَى قَوْمِهِ فِي زِينَتِهِ`] } },
            { html: `Both kinds of شبه الجملة can sit in one آية. على قومه attaches to the mentioned فعل خرج, so it is ظرف لغو. في زينته describes the state he was in, so it is ظرف مستقر working as حال.`, list: false },
            { html: `In a صلة specifically, the omitted عامل must be understood as a فعل, because الصلة of an اسم موصول must itself be a جملة. In <bdi>الَّذِي فِي مَكَّةَ</bdi>, the understood عامل is اسْتَقَرَّ or another فعل, not مستقر, for that reason.`, list: false },
            { box: { title: 'Careful', lines: [`قَدْ يُطْلَقُ لَفْظُ "مُسْتَقِرّ" عَلَى العَامِلِ المَحْذُوفِ، وَيُطْلَقُ "ظَرْفٌ مُسْتَقِرٌّ" عَلَى شِبْهِ الجُمْلَةِ نَفْسِهَا`] } },
            { html: `مستقر can refer to the omitted عامل itself, while ظرف مستقر refers to the شبه الجملة whose عامل is estimated — two different levels that should not be confused.`, list: false },
          ],
          exercise: {
            prompt: `فَخَرَجَ عَلَى قَوْمِهِ فِي زِينَتِهِ contains two شبه جملة in a row. على قومه attaches to the mentioned فعل خرج. What kind of ظرف is في زينته instead, describing the state he was in؟`,
            kind: 'mcq',
            options: [`ظرف مستقر, working as حال`, `ظرف لغو, like على قومه`, `Neither — في زينته has no عامل at all`, `اسم مؤول`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `A شبه الجملة occurring in a جملة is called متعلِّق. What is its governing element called؟`, options: [`متعلَّق (متعلَّق به)`, `مسند`, `فضلة`, `ناسخ`], correct: 0 },
        { q: `By its عامل, شبه الجملة divides into two types. What are they؟`, options: [`الظرف اللغو، والظرف المستقر فيه`, `الجار والمجرور، والظرف والمضاف إليه`, `الخبرية والإنشائية`, `الكبرى والصغرى`], correct: 0 },
        { q: `In لَقَدْ أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ, إلى قومه connects to the mentioned فعل أرسلنا. What kind of ظرف is that؟`, options: [`الظرف اللغو`, `الظرف المستقر`, `شبه جملة بلا عامل`, `جملة صغرى`], correct: 0 },
        { q: `الظرف اللغو is described as free of a certain hidden element. What is it؟`, options: [`A ضمير مستتر returning to a مبتدأ, صاحب حال, منعوت, or موصول`, `A تنوين`, `A حرف عطف`, `A ناسخ`], correct: 0 },
        { q: `الظرف المستقر فيه has an omitted عامل carrying a specific general meaning. What meaning is that؟`, options: [`وجود — existence or being established`, `نفي — negation`, `طلب — request`, `توكيد — emphasis`], correct: 0 },
        { q: `In a صلة specifically, why must the omitted عامل of الظرف المستقر be understood as a فعل, not simply مستقر؟`, options: [`Because الصلة of an اسم موصول must itself be a جملة`, `Because صلة never contains a شبه الجملة`, `Because مستقر is never a فعل in any context`, `Because اسم موصول always requires a حرف جر`], correct: 0 },
      ],
      bank: [
        { title: `العامل: تعريفه`, kind: 'mcq', prompt: `What is the term for the governing element that a شبه الجملة is connected to؟`, options: [`عامل (متعلَّق / متعلَّق به)`, `فضلة`, `ناسخ`, `مسند إليه`], correct: 0 },
        { title: `متعلِّق مقابل متعلَّق`, kind: 'mcq', prompt: `شبه الجملة itself is called متعلِّق. What is the difference between متعلِّق and متعلَّق؟`, options: [`متعلِّق is الشبه الجملة; متعلَّق (به) is its governing element`, `They are two names for the same thing`, `متعلِّق is العامل; متعلَّق is الشبه الجملة`, `متعلِّق only applies to الظرف المستقر`], correct: 0 },
        { title: `الظرف اللغو: العامل مذكور`, kind: 'mcq', prompt: `الظرف اللغو is defined by what kind of عامل؟`, options: [`An عامل that is mentioned, or omitted but specific`, `An عامل that is always omitted and general`, `No عامل at all`, `An عامل that is always an اسم`], correct: 0 },
        { title: `وإلى عاد أخاهم هودا: العامل المحذوف المخصوص`, kind: 'mcq', prompt: `In وَإِلَى عَادٍ أَخَاهُمْ هُودًا, the عامل of إلى عاد is omitted. Is it general or specific؟`, options: [`Specific — understood as أرسلنا, the one particular verb the meaning demands`, `General — any verb of وجود could replace it`, `There is no omitted عامل here at all`, `It is مذكور, not محذوف`], correct: 0 },
        { title: `هل يصلح عامل عام هنا؟`, kind: 'mcq', prompt: `Could a general word like كان or ثبت replace the omitted أرسلنا in وَإِلَى عَادٍ أَخَاهُمْ هُودًا without changing the intended meaning؟`, options: [`No — the meaning demands that one specific verb`, `Yes — any general verb of وجود would work just as well`, `Yes, because الظرف اللغو always accepts a general عامل`, `No, because the شبه الجملة here has no عامل at all`], correct: 0 },
        { title: `معنى لغو هنا`, kind: 'mcq', prompt: `لغو in الظرف اللغو does not mean "useless." What does it mean instead؟`, options: [`Free of the hidden ضمير مستتر found with الظرف المستقر`, `Free of any عامل whatsoever`, `Grammatically incorrect`, `Limited to poetry only`], correct: 0 },
        { title: `الاسم الأدق: ظرف خاص`, kind: 'mcq', prompt: `Which alternative name would describe الظرف اللغو more directly, according to the lesson؟`, options: [`ظرف خاص`, `ظرف عام`, `ظرف مطلق`, `ظرف تام`], correct: 0 },
        { title: `الأمثال: عامل محذوف وجوبا`, kind: 'mcq', prompt: `الكِلابُ عَلَى البَقَرِ is a fixed مثل whose عامل is never stated. What category of حذف الظرف اللغو's عامل does that illustrate؟`, options: [`حذف واجب في الأمثال`, `حذف جائز فقط`, `عدم وجود عامل من الأساس`, `حذف خاص بالقسم فقط`], correct: 0 },
        { title: `القسم بلا باء`, kind: 'mcq', prompt: `تَاللهِ تَفْتَأُ swears an oath without the usual باء القسم. What is the omitted عامل understood to be؟`, options: [`أقسم or a similar فعل قسم`, `ثبت أو وجد`, `كان التامة`, `لا عامل أصلا`], correct: 0 },
        { title: `خبر كان مع لام الجحود`, kind: 'mcq', prompt: `مَا كَانَ اللهُ لِيُعَذِّبَهُمْ has a خبر كان introduced with لام الجحود. What is its omitted عامل understood to be؟`, options: [`قاصدًا or something similar`, `سلّط أو ما يشبهه`, `أنت مفدى`, `أقسم`], correct: 0 },
        { title: `الظرف المستقر: العامل عام ومحذوف دائما`, kind: 'mcq', prompt: `How does الظرف المستقر فيه differ from الظرف اللغو in terms of its عامل؟`, options: [`Its عامل is always omitted and general, never mentioned like الظرف اللغو can be`, `Its عامل is always mentioned explicitly`, `It has no عامل at all`, `Its عامل is always specific, like الظرف اللغو's`], correct: 0 },
        { title: `صيغ العامل العام: فعل واسم`, kind: 'mcq', prompt: `The omitted general عامل of الظرف المستقر can take the form of a فعل or an اسم بمعنى الفعل. Which pair below correctly illustrates both forms؟`, options: [`استقر (فعل) and مستقر (اسم بمعنى الفعل)`, `أرسلنا (فعل) and نوح (اسم)`, `أقسم (فعل) and القسم (اسم)`, `سلّط (فعل) and البقر (اسم)`], correct: 0 },
        { title: `اسم الظرف المستقر الكامل`, kind: 'mcq', prompt: `What is the full name of الظرف المستقر, before books shorten it for brevity؟`, options: [`الظرف المستقر فيه`, `الظرف المستقر عليه`, `الظرف اللغو فيه`, `الظرف الخاص فيه`], correct: 0 },
        { title: `الضمير داخل الظرف المستقر`, kind: 'mcq', prompt: `The omitted general عامل of الظرف المستقر contains an understood ضمير. What does that ضمير refer back to؟`, options: [`The relevant اسم الشبه الجملة is connected to`, `A ناسخ mentioned earlier in the جملة`, `الحرف الجر itself`, `Nothing — العامل has no ضمير`], correct: 0 },
        { title: `وهو على صراط مستقيم: أين الخبر بالضبط`, kind: 'mcq', prompt: `In وَهُوَ عَلَى صِرَاطٍ مُسْتَقِيمٍ, saying loosely "the جار ومجرور is الخبر" skips a step. What is the more precise account؟`, options: [`الجار والمجرور attaches to an omitted عامل such as ثابت, and the whole understood structure fills الخبر position`, `هو is not really المبتدأ here`, `على صراط مستقيم is actually المبتدأ`, `There is no خبر at all in this جملة`], correct: 0 },
        { title: `أولئك على هدى من ربهم: النعت`, kind: 'mcq', prompt: `In أُولَئِكَ عَلَى هُدًى مِنْ رَبِّهِمْ, من ربهم describes هدى. What role does that play؟`, options: [`نعت, through an omitted general عامل`, `حال, through a specific عامل`, `صلة, through a specific عامل`, `خبر مباشر بلا عامل محذوف`], correct: 0 },
        { title: `ولهُ من في السماوات: الصلة`, kind: 'mcq', prompt: `In وَلَهُ مَنْ فِي السَّمَاوَاتِ, في السماوات completes الصلة of من. What must the omitted عامل be understood as, and why؟`, options: [`A فعل, because الصلة of an اسم موصول must itself be a جملة`, `An اسم بمعنى الفعل, because صلة never needs a فعل`, `There is no omitted عامل in a صلة`, `حرف جر آخر`], correct: 0 },
        { title: `أفي الله شك: الاعتماد`, kind: 'mcq', prompt: `أَفِي اللهِ شَكٌّ places a شبه الجملة right after همزة الاستفهام. Which موضع من مواضع الظرف المستقر does that illustrate؟`, options: [`الاعتماد`, `الحال`, `النعت`, `الصلة`], correct: 0 },
        { title: `فخرج على قومه في زينته: نوعان في آية واحدة`, kind: 'mcq', prompt: `فَخَرَجَ عَلَى قَوْمِهِ فِي زِينَتِهِ contains two شبه جملة. على قومه attaches to the mentioned فعل خرج. What type is في زينته instead, describing his state؟`, options: [`ظرف مستقر, working as حال`, `ظرف لغو, exactly like على قومه`, `Neither — في زينته has no عامل`, `اسم مؤول`], correct: 0 },
        { title: `لا يكفي القول متعلق`, kind: 'mcq', prompt: `According to the lesson's caution, what is missing if someone only says "الجار والمجرور متعلق" without going further؟`, options: [`The specific grammatical role — خبر, نعت, حال, صلة, مفعول فيه, or another function`, `Nothing — that description is already complete`, `The vowel ending of the مجرور`, `Whether الشبه الجملة is جار ومجرور or ظرف ومضاف إليه`], correct: 0 },
        {
          title: `تركيب: أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ.`,
          source: `أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ`,
          words: [`أَرْسَلْنَا`, `نُوحًا`, `إِلَى قَوْمِهِ`],
          labels: [`عامل مذكور`, `مفعول به`, `ظرف لغو متعلق بالفعل`],
          distractors: [`ظرف مستقر`, `مبتدأ`],
        },
        {
          title: `تركيب: إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ.`,
          source: `إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ`,
          words: [`إِنَّكَ`, `عَلَى صِرَاطٍ مُسْتَقِيمٍ`],
          labels: [`اسم إن`, `ظرف مستقر متعلق بعامل عام محذوف`],
          distractors: [`ظرف لغو`, `مفعول به`],
        },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'الكلام: مفيد وموجب وغير موجب',
      subtitle: 'الكلام — قول مفيد, and its division into موجب and غير موجب',
      sourceRef: 'app-lessons/015',
      concepts: [
        {
          heading: 'تعريف الكلام والإفادة',
          lines: [
            { box: { title: 'Definition', lines: [`الكَلامُ قَوْلٌ مُفِيدٌ`] } },
            { html: `<bdi>كلام</bdi> is meaningful speech that gives a complete benefit.`, list: false },
            { box: { title: 'Definition', lines: [`مَا يَحْسُنُ السُّكُوتُ عَلَيْهِ`] } },
            { html: `<bdi>مفيد</bdi> means the listener is not left waiting for the rest of the meaning — سكوت on it is حسن, fitting, because nothing more is needed to complete the sense.`, list: false },
          ],
          exercise: {
            prompt: `الكلام is defined as قول مفيد. What does مفيد mean in this definition?`,
            kind: 'mcq',
            options: [`Speech such that the listener is not left waiting for more meaning`, `Speech that is grammatically صحيح`, `Speech containing a ناسخ`, `Speech that is صادقة`],
            correct: 0,
          },
        },
        {
          heading: 'أمثلة الكلام التام وغير التام',
          lines: [
            { box: { title: 'Example', lines: [`صَدَقْتَ`] } },
            { html: `This is complete. The speaker can stop, and the listener understands the intended meaning.`, list: false },
            { box: { title: 'Example', lines: [`قَامَ زَيْدٌ`] } },
            { html: `الفعل and الفاعل are both mentioned, so the meaning is complete.`, list: false },
            { box: { title: 'Careful', lines: [`إِنْ تَصْدُقْ`] } },
            { html: `This means "if you speak the truth..." The listener still waits for جواب الشرط, so it is not complete كلام.`, list: false },
            { box: { title: 'Example', lines: [`إِنْ تَصْدُقْ تَنْجُ`] } },
            { html: `"If you speak the truth, you will be saved." Adding the answer completes it.`, list: false },
          ],
          exercise: {
            prompt: `إِنْ تَصْدُقْ alone leaves the listener waiting for جواب الشرط. Is it complete كلام by itself؟`,
            kind: 'mcq',
            options: [`No — it only becomes complete كلام once the جواب is added, as in إِنْ تَصْدُقْ تَنْجُ`, `Yes — إن تصدق is already complete كلام on its own`, `Yes, because تصدق is a فعل مضارع`, `No, because إن تصدق contains no مسند إليه at all`],
            correct: 0,
          },
        },
        {
          heading: 'الكلام أخصّ من الجملة',
          lines: [
            { html: `Every كلام is a جملة, but not every جملة is كلام. A جملة may contain إسناد and still not give a complete benefit.`, list: false },
            { html: `كلام has a stricter condition than جملة: it must be both structured (containing إسناد) and complete in meaning.`, list: false },
          ],
          exercise: {
            prompt: `Every كلام is a جملة. Is the reverse also true — is every جملة كلام؟`,
            kind: 'mcq',
            options: [`No — a جملة may have إسناد yet still fail to give a complete benefit, so it does not always meet the stricter condition كلام adds`, `Yes — الكلام and الجملة name exactly the same thing`, `No — every جملة is كلام except when it starts with a فعل`, `Yes, as long as the جملة contains a ناسخ`],
            correct: 0,
          },
        },
        {
          heading: 'الموجب وغير الموجب: التعريف',
          lines: [
            { html: `كلام also divides by whether it contains نفي, نهي, or استفهام.`, list: false },
            { table: { title: 'الموجب وغير الموجب', headers: ['Category', 'Definition'], rows: [
              [`الكلام الموجب`, `speech with no نفي, نهي, or استفهام`],
              [`الكلام غير الموجب`, `speech containing نفي, نهي, or استفهام`],
            ] } },
          ],
          exercise: {
            prompt: `الكلام غير الموجب is defined by containing one of three things. What are they؟`,
            kind: 'mcq',
            options: [`نفي، نهي، أو استفهام`, `خبر، إنشاء، أو ناسخ`, `مسند، مسند إليه، أو فضلة`, `اسم، فعل، أو حرف`],
            correct: 0,
          },
        },
        {
          heading: 'أمثلة الموجب وغير الموجب',
          lines: [
            { table: { title: 'أمثلة', headers: ['Category', 'Example', 'Translation', 'Reason'], rows: [
              [`موجب`, `أَعْبُدُ اللهَ الَّذِي يَتَوَفَّاكُمْ`, `I worship Allah, who takes your souls`, `it contains no نفي, نهي, or استفهام`],
              [`غير موجب: نفي`, `فَلا أَعْبُدُ الَّذِينَ تَعْبُدُونَ`, `so I do not worship those whom you worship`, `it contains نفي`],
              [`غير موجب: نهي`, `لا تُشْرِكْ بِاللهِ`, `do not associate partners with Allah`, `it contains نهي`],
              [`غير موجب: استفهام`, `أَأَتَّخِذُ مِنْ دُونِهِ آلِهَةً`, `shall I take gods besides Him?`, `it contains استفهام`],
            ] } },
            {
              tarkeebDiagram: {
                sentence: `لا تُشْرِكْ بِاللهِ`,
                translation: `Do not associate partners with Allah.`,
                cells: [`لا`, `تُشْرِكْ`, `بِاللهِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `لا الناهية` }, { start: 1, end: 1, role: `فعل مضارع مجزوم` }, { start: 2, end: 2, role: `جار ومجرور` }] },
                ],
              },
            },
            { html: `Because the جملة contains نهي, it is كلام غير موجب.`, list: false },
          ],
          exercise: {
            prompt: `لَا تُشْرِكْ بِاللهِ contains لا الناهية. What category of الكلام does that make it, and why؟`,
            kind: 'mcq',
            options: [`كلام غير موجب — it contains نهي`, `كلام موجب — it contains no نفي, نهي, or استفهام`, `كلام غير موجب — it contains استفهام`, `Neither — لا تشرك بالله is not كلام at all`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الكلام?`, options: [`قول مفيد`, `قول مفرد`, `ما اشتملت على مسند ومسند إليه`, `ما دل على معنى في نفسه غير مقترن بزمان`], correct: 0 },
        { q: `مفيد is defined as ما يحسن السكوت عليه. What does that mean؟`, options: [`The listener is not left waiting for the rest of the meaning`, `The speech must be صادقة`, `The speech must contain a ناسخ`, `The speech must be الجملة الفعلية`], correct: 0 },
        { q: `إِنْ تَصْدُقْ alone leaves the listener waiting for جواب الشرط. Is it complete كلام?`, options: [`No — it becomes complete only once الجواب is added, as in إِنْ تَصْدُقْ تَنْجُ`, `Yes, it is already complete كلام`, `Yes, because تصدق is مضارع`, `No, because it lacks a مسند إليه`], correct: 0 },
        { q: `Is every جملة also كلام؟`, options: [`No — a جملة may have إسناد and still fail to give a complete benefit`, `Yes — الجملة and الكلام mean exactly the same thing`, `No — الكلام is always broader than الجملة`, `Yes, as long as the جملة contains a فعل`], correct: 0 },
        { q: `الكلام غير الموجب is speech containing which of the following؟`, options: [`نفي، نهي، أو استفهام`, `حرف جر فقط`, `اسم مؤول`, `الجملة الصغرى`], correct: 0 },
        { q: `لَا تُشْرِكْ بِاللهِ contains لا الناهية. What category of الكلام is that؟`, options: [`كلام غير موجب`, `كلام موجب`, `لا شيء مما سبق — ليس كلاما أصلا`, `كلام إنشائي فقط دون تصنيف آخر`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الكلام`, kind: 'mcq', prompt: `Which of the following correctly defines الكلام؟`, options: [`قول مفيد`, `قول مفرد`, `ما دل على معنى في نفسه مقترن بزمان`, `ما اشتملت على مسند ومسند إليه فقط`], correct: 0 },
        { title: `تعريف مفيد`, kind: 'mcq', prompt: `Which of the following correctly defines مفيد in الكلام قول مفيد؟`, options: [`ما يحسن السكوت عليه`, `ما لا تدل أجزاؤه على معنى`, `قول دال على معنى`, `ما دل على وصف موصوف`], correct: 0 },
        { title: `صدقت: كلام تام`, kind: 'mcq', prompt: `صَدَقْتَ is a single word, and the speaker can stop there with the meaning fully understood. Is it complete كلام؟`, options: [`Yes — the listener is not left waiting for anything more`, `No — a single word can never be كلام`, `No — it needs a جواب to be complete`, `Yes, but only in poetry`], correct: 0 },
        { title: `قام زيد: كلام تام`, kind: 'mcq', prompt: `قَامَ زَيْدٌ mentions both الفعل and الفاعل. Is the meaning complete؟`, options: [`Yes — mentioning both makes the meaning complete`, `No — it still needs a مفعول به to be complete`, `No — it needs a جواب الشرط`, `Yes, but only because زيد carries تنوين`], correct: 0 },
        { title: `إن تصدق: غير تام`, kind: 'mcq', prompt: `إِنْ تَصْدُقْ means "if you speak the truth..." Why is this not complete كلام on its own؟`, options: [`The listener still waits for جواب الشرط`, `تصدق is not a real فعل`, `إن is not a real أداة شرط here`, `The جملة has no مسند إليه at all`], correct: 0 },
        { title: `إن تصدق تنج: يكتمل بالجواب`, kind: 'mcq', prompt: `Adding تَنْجُ to إِنْ تَصْدُقْ makes إِنْ تَصْدُقْ تَنْجُ complete. What did تنج supply؟`, options: [`جواب الشرط, completing the meaning`, `المسند إليه, missing before`, `حرف جر, missing before`, `تنوين, missing before`], correct: 0 },
        { title: `كل كلام جملة`, kind: 'mcq', prompt: `Is every كلام also a جملة؟`, options: [`Yes — every كلام is a جملة`, `No — كلام and جملة never overlap`, `Only if الكلام is موجب`, `Only if الكلام is إنشائية`], correct: 0 },
        { title: `ليس كل جملة كلاما`, kind: 'mcq', prompt: `إِنْ تَصْدُقْ contains إسناد (تصدق implies a فاعل), so it counts as جملة. Is it also كلام by itself؟`, options: [`No — it has إسناد but does not give a complete benefit, so it fails to be كلام on its own`, `Yes — anything with إسناد is automatically كلام`, `No, because it has no إسناد at all`, `Yes, because تصدق is فعل مضارع`], correct: 0 },
        { title: `الكلام أخص من الجملة`, kind: 'mcq', prompt: `What is the relationship between الكلام and الجملة؟`, options: [`الكلام has a stricter condition than الجملة — it must be structured and complete in meaning`, `الكلام and الجملة are unrelated terms`, `الجملة has a stricter condition than الكلام`, `They apply only to الجملة الفعلية`], correct: 0 },
        { title: `الموجب: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الكلام الموجب؟`, options: [`Speech with no نفي, نهي, or استفهام`, `Speech containing نفي, نهي, or استفهام`, `Speech that is إنشائية only`, `Speech that begins with an اسم`], correct: 0 },
        { title: `غير الموجب: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الكلام غير الموجب؟`, options: [`Speech containing نفي, نهي, or استفهام`, `Speech with no نفي, نهي, or استفهام`, `Speech that is خبرية only`, `Speech that begins with a فعل`], correct: 0 },
        { title: `أعبد الله الذي يتوفاكم: موجب`, kind: 'mcq', prompt: `أَعْبُدُ اللهَ الَّذِي يَتَوَفَّاكُمْ contains no نفي, نهي, or استفهام. What category of الكلام is it؟`, options: [`الكلام الموجب`, `الكلام غير الموجب: نفي`, `الكلام غير الموجب: نهي`, `الكلام غير الموجب: استفهام`], correct: 0 },
        { title: `فلا أعبد الذين تعبدون: نفي`, kind: 'mcq', prompt: `فَلَا أَعْبُدُ الَّذِينَ تَعْبُدُونَ contains لا النافية. What category of الكلام is that؟`, options: [`الكلام غير الموجب: نفي`, `الكلام الموجب`, `الكلام غير الموجب: نهي`, `الكلام غير الموجب: استفهام`], correct: 0 },
        { title: `لا تشرك بالله: نهي`, kind: 'mcq', prompt: `لَا تُشْرِكْ بِاللهِ contains لا الناهية. What category of الكلام is that؟`, options: [`الكلام غير الموجب: نهي`, `الكلام الموجب`, `الكلام غير الموجب: نفي`, `الكلام غير الموجب: استفهام`], correct: 0 },
        { title: `أأتخذ من دونه آلهة: استفهام`, kind: 'mcq', prompt: `أَأَتَّخِذُ مِنْ دُونِهِ آلِهَةً opens with همزة الاستفهام. What category of الكلام is that؟`, options: [`الكلام غير الموجب: استفهام`, `الكلام الموجب`, `الكلام غير الموجب: نفي`, `الكلام غير الموجب: نهي`], correct: 0 },
        { title: `تمييز موجب عن غير موجب: الفرق الجوهري`, kind: 'mcq', prompt: `What single test separates الكلام الموجب from الكلام غير الموجب؟`, options: [`Whether it contains نفي, نهي, or استفهام`, `Whether it opens with اسم or فعل`, `Whether it can be judged صدقا أو كذبا`, `Whether it contains a ناسخ`], correct: 0 },
        { title: `لا الناهية في لا تشرك بالله`, kind: 'mcq', prompt: `In لَا تُشْرِكْ بِاللهِ, what role does لا play؟`, options: [`لا الناهية`, `لا النافية`, `لا الزائدة`, `لا العاطفة`], correct: 0 },
        { title: `تشرك: فعل مضارع مجزوم`, kind: 'mcq', prompt: `In لَا تُشْرِكْ بِاللهِ, what is the grammatical state of تُشْرِكْ, given that it follows لا الناهية؟`, options: [`فعل مضارع مجزوم`, `فعل مضارع مرفوع`, `فعل ماضٍ`, `فعل أمر`], correct: 0 },
        { title: `بالله: شبه الجملة`, kind: 'mcq', prompt: `In لَا تُشْرِكْ بِاللهِ, بِاللهِ is a جار ومجرور. What type of شبه الجملة by structure is that, using the terms from the earlier lesson؟`, options: [`الجار والمجرور`, `الظرف والمضاف إليه`, `الجملة الصغرى`, `العمدة`], correct: 0 },
        { title: `صدقت: كلمة واحدة تكفي`, kind: 'mcq', prompt: `صَدَقْتَ is complete كلام in a single word. What does that show about the relationship between length and إفادة؟`, options: [`A single word can already be مفيد if the listener needs nothing further`, `إفادة always requires at least two كلمات`, `إفادة requires a مسند إليه separate from الفعل`, `صدقت is not really a single كلمة`], correct: 0 },
        { title: `مراجعة: الكلام مقابل الجملة`, kind: 'mcq', prompt: `صَدَقْتَ and إِنْ تَصْدُقْ both contain إسناد, so both count as جملة. Which one also counts as كلام؟`, options: [`صَدَقْتَ only — its meaning is complete; إِنْ تَصْدُقْ still waits for جواب الشرط`, `Both count equally as كلام`, `إِنْ تَصْدُقْ only`, `Neither counts as كلام`], correct: 0 },
        {
          title: `تركيب: لَا تُشْرِكْ بِاللهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of لَا تُشْرِكْ بِاللهِ.`,
          source: `لَا تُشْرِكْ بِاللهِ`,
          words: [`لَا`, `تُشْرِكْ`, `بِاللهِ`],
          labels: [`لا الناهية`, `فعل مضارع مجزوم`, `جار ومجرور`],
          distractors: [`لا النافية`, `فعل ماضٍ`],
        },
      ],
    },
  ],
};

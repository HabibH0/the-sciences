// Advanced Sarf — Module 15
// التقسيم الخامس للاسم: من حيث كونه مفردا، أو مثنى، أو مجموعا (week 29)
//
// 2026-08-12: new module, authored directly from the source handout (the PDF
// "التقسيمُ الخامسُ للاسم من حيث كونه مفردا، أو مثنى، أو مجموعا - Wk 29" in
// this folder) in the revamped presentation style established by
// content-sarf/module-13.js and module-14.js — in turn matching
// content/module-01.js. Every Core Text quotation is followed immediately by
// a full English rendering of what it says, not a mere paraphrase of its
// upshot, so a reader who cannot follow the Arabic prose still gets the
// complete content of the lesson; the Arabic stays for reference and
// terminology, never as the sole carrier of a fact. No تركيب bank items —
// Advanced Sarf has no تركيب widget content, matching every other
// content-sarf module.

export default {
  id: 'as-15',
  title: 'المفرد والمثنى والجمع',
  heading: 'الاسم',
  blurb: 'الاسم divided a fifth way — by number: مفرد (singular), مثنى (dual), and the three kinds of جمع (plural).',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'المفرد والمثنى',
      subtitle: 'مفرد and مثنى — and the six شروط a noun must satisfy before it can be dualized',
      concepts: [
        {
          heading: 'الأقسام الثلاثة، وتعريف المفرد',
          lines: [
            { box: { title: 'Core Text', lines: [
              `ينقسم الاسم إلى مفرد، ومثنى، ومجموع`,
              `فالمفرد: ما دلّ على واحد، كرجل وامرأة وقلم وكتاب. أو هو ما ليس مثنّى ولا مجموعًا، ولا ملحقًا بهما، ولا من الأسماء الخمسة المبيَّنة فى النحو`,
            ] } },
            { html: `الاسم divides a fifth way — by number — into <bdi>مفرد</bdi> (singular), <bdi>مثنى</bdi> (dual), and <bdi>مجموع</bdi> (plural). This division sits alongside the four already covered in this course: جامد/مشتقّ, مجرَّد/مزيد, مذكَّر/مؤنث, and منقوص/مقصور/ممدود/صحيح.`, list: false },
            { html: `المفرد gets two definitions here, one positive and one by elimination. The positive one: a مفرد names a single thing — <bdi>رجل</bdi> (a man), <bdi>امرأة</bdi> (a woman), <bdi>قلم</bdi> (a pen), and <bdi>كتاب</bdi> (a book) are all مفرد. The second definition arrives at the same class from the opposite direction: a مفرد is whatever is none of the following — not a مثنى, not a مجموع, not <bdi>مُلْحَق</bdi> (attached to either of those two, meaning a word that follows their shape without genuinely being one, covered in the next concept), and not one of the <bdi>الأسماء الخمسة</bdi> — the five special nouns (أب، أخ، حم، فو، ذو) already studied in النحو.`, list: false },
          ],
          exercise: {
            prompt: `Which of these is the positive definition of المفرد given here?`,
            kind: 'mcq',
            options: [`What is not a مثنى, not a مجموع, not مُلْحَق to either, and not one of الأسماء الخمسة`, `Whatever names something with a real female body`, `What names a single thing, as رجل and كتاب do`, `Whatever carries no علامة of تثنية or جمع`],
            correct: 2,
          },
        },
        {
          heading: 'تعريف المثنى وما ليس منه',
          lines: [
            { box: { title: 'Core Text', lines: [
              `والمثنى: ما دلّ على اثنين مُطلقًا، بزيادة ألف ونون، أو ياء ونون، كرجلان وامرأتان، وكتابان وقلمان، أو رجلين وامرأتين وكتابين وقلمين`,
              `فليس منه كِلا، وكِلتَا، واثنان، كاثنتان، وزَوْج، وشَفْع، لأن دلالتها على الاثنين ليست بالزيادة`,
            ] } },
            { html: `المثنى names two things absolutely (<bdi>مُطلقًا</bdi>) by adding <bdi>ألف ونون</bdi> in the رفع case, or <bdi>ياء ونون</bdi> in the نصب and جرّ cases, onto the singular: <bdi>رجلان/رجلين</bdi>, <bdi>امرأتان/امرأتين</bdi>, <bdi>كتابان/كتابين</bdi>, <bdi>قلمان/قلمين</bdi>.`, list: false },
            { html: `Six words are named as exceptions: <bdi>كِلا</bdi> and <bdi>كِلتَا</bdi> (both, masculine and feminine), <bdi>اثنان</bdi> and <bdi>اثنتان</bdi> (two, masculine and feminine), <bdi>زَوْج</bdi> (a pair or a mate), and <bdi>شَفْع</bdi> (an even pair). Every one of them means two, yet none of them is a مثنى, because none of them arrived at that meaning by the same productive process — suffixing ألف+نون or ياء+نون onto a singular root. Their twoness is built into the bare word itself, not added onto it.`, list: false },
          ],
          exercise: {
            prompt: `كِلا means both, yet it is not counted as a مثنى. Why not؟`,
            kind: 'mcq',
            options: [`Because it names two different meanings at once`, `Because its دلالة على الاثنين does not come from adding ألف ونون or ياء ونون — it means two on its own`, `Because it is not مُعرَب`, `Because it lacks a matching مفرد it could be built from`],
            correct: 1,
          },
        },
        {
          heading: 'شروط التثنية: الأول إلى الثالث',
          lines: [
            { html: `Six conditions must all hold before a noun can actually be dualized this way.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وشروط الاسم الذى يراد تثنيته:`,
              `١ - أن يكون مفردًا، فلا يُثَنَّى المجموع ولا المثنَّى، بأن يُقال رجلانان وزيدونان`,
              `وأما اللذان وهذان، فليسا بمُثَنَّيَيْن، وكذا مؤنثهما، وإنما هما على صُورة المثنى`,
              `٢ - وأن يكون معربًا`,
              `٣ - وأن يكونا متَّفِقين فى اللفظ والوزن والمعنى، فلا يقال العُمَران بضم ففتح فى أبى بكر وعُمَر، لعدم الاتفاق فى اللفظ، ولا العَمْران بفتح فسكون فى عَمْرٍو وعُمَر، لعدم الاتفاق فى الوزن. ولا للعَينان فى العَين الباصرة والجارية، لعدم الاتفاق فى المعنى`,
            ] } },
            { html: `The first condition: the noun must itself already be مفرد — a noun that is already مثنى or مجموع cannot be dualized a second time (there is no such thing as رجلانان or زيدونان). One pair of look-alikes needs a separate note here: <bdi>اللذان</bdi> (the two who) and <bdi>هذان</bdi> (these two), and their feminine counterparts <bdi>اللتان</bdi> and <bdi>هاتان</bdi>, only carry the shape (<bdi>صورة</bdi>) of a مثنى. They are not genuine مثنى forms at all, because of the second condition below.`, list: false },
            { html: `The second condition: the noun must be <bdi>مُعرَب</bdi> — taking case endings, rather than staying fixed (مبنيّ). اللذان and هذان are مبنيّ, which is exactly why they only look like a مثنى without being one.`, list: false },
            { html: `The third condition applies when تثنية would combine two different words, not two instances of the same noun: the two must agree in <bdi>لفظ</bdi> (wording), <bdi>وزن</bdi> (pattern), and <bdi>معنى</bdi> (meaning) all at once.`, list: false },
            { table: {
              title: 'مثال الشرط الثالث (Where the Third Condition Blocks a Dual)',
              headers: ['الصيغة المرفوضة', 'الشخصان أو المعنيان', 'ما اختلف'],
              rows: [
                ['العُمَران، بضم ففتح', 'أبو بكر وعُمَر', 'اللفظ — أبو بكر is not even the same word as عُمَر to begin with'],
                ['العَمْران، بفتح فسكون', 'عَمْرو وعُمَر', 'الوزن — عَمْرو and عُمَر are built on different patterns'],
                ['العَيْنان', 'العَين الباصرة (the seeing eye) والعَين الجارية (the flowing spring)', 'المعنى — one word, عين, carrying two unrelated senses'],
              ],
            } },
          ],
          clarification: `A مثنى normally combines two occurrences of the exact same noun — كتابان is simply two كتاب. The third condition exists for the case where someone might be tempted to force a dual reading onto two things that only resemble each other in spelling. عين (eye, and separately spring) is a single لفظ carrying two unrelated معانٍ, so العَيْنان cannot be used to mean the eye and the spring together — the agreement in لفظ, وزن, and معنى has to hold all at once, not just one or two of the three.`,
          exercise: {
            prompt: `Why is العَيْنان barred from meaning the eye and the spring together?`,
            kind: 'mcq',
            options: [`Because عين is مبنيّ`, `Because the two senses of عين fail the شرط of agreement in معنى, even though the لفظ is identical`, `Because عين is one of الأسماء الخمسة`, `Because a مثنى can never carry two different senses of any kind`],
            correct: 1,
          },
        },
        {
          heading: 'شروط التثنية: الرابع إلى السادس',
          lines: [
            { box: { title: 'Core Text', lines: [
              `٤ - وأن يكون مُنَكَّرًا، فلا يُثنى العَلَم باقيًا على عَلَميته`,
              `٥ - وأن يكون له مُمَاثِل، فلا يُثَنَّى الشمس والقمر، لعدم المماثلة، وقولهم القَمَران للشمس والقمر تغليب`,
              `٦ - وألّا يستغنى بتثنية غيره عنه، فلا يُثنى سَواء، للاستغناء عن تثنيته بتثنية سيّ`,
            ] } },
            { table: {
              title: 'الشروط الرابع إلى السادس',
              headers: ['الشرط', 'الشرح', 'المثال'],
              rows: [
                ['مُنَكَّرًا — losing its function as a unique fixed name', 'a علم that keeps referring to one unique, unrepeatable individual cannot simply be dualized while staying in that function', '—'],
                ['له مُمَاثِل — having a genuine counterpart of its own kind', 'a one-of-a-kind thing has nothing else like it to pair with', 'الشمس and القمر are each unique, so neither dualizes on its own; القَمَران, used loosely for the sun and the moon, is تغليب (one word extended by convention), not a real تثنية'],
                ['ألّا يُستغنى عنه بتثنية غيره — not being replaceable by dualizing a synonym', 'if a synonym already supplies the dual meaning, the word itself is not dualized', 'سَواء (equal) is not dualized, because Arabic dualizes its synonym سيّ instead, giving سِيّان'],
              ],
            } },
          ],
          exercise: {
            prompt: `القَمَران is used for the sun and the moon. What is it grammatically, given that الشمس and القمر each fail the شرط of having a مُمَاثِل?`,
            kind: 'mcq',
            options: [`A genuine تثنية of two matching things`, `تغليب — one of the two words extended by convention to stand for both, not a true dual`, `A مُلْحَق بالمثنى, like كِلا`, `An example of الأسماء الخمسة`],
            correct: 1,
          },
        },
      ],
      quiz: [
        { q: 'الاسم divides a fifth way into which three categories?', options: ['مفرد، مثنى، مجموع', 'مذكَّر، مؤنث، مشترك', 'جامد، مشتقّ، مزيد', 'منقوص، مقصور، ممدود'], correct: 0 },
        { q: 'كِلا، كِلتَا، اثنان، اثنتان، زَوْج، and شَفْع all mean two, yet none is a مثنى. Why not؟', options: ['Their دلالة على الاثنين is built into the word itself, not added by ألف ونون or ياء ونون', 'They are all معدودات, not أسماء', 'They are all من الأسماء الخمسة', 'They are all مؤنث لفظيّ'], correct: 0 },
        { q: 'اللذان and هذان look like a مثنى but are not one. What do they fail?', options: ['They are مبنيّ, failing the شرط of being معربًا', 'They are مجموع, failing the شرط of being مفردًا', 'They lack a مُمَاثِل', 'They are already مُنَكَّرًا'], correct: 0 },
        { q: 'العَيْنان cannot mean the eye and the spring together. Which شرط of التثنية does that violate?', options: ['الاتفاق فى المعنى — the two senses of عين are not the same معنى', 'الاتفاق فى اللفظ', 'كون الاسم مفردًا', 'كون الاسم مُنَكَّرًا'], correct: 0 },
        { q: 'الشمس and القمر are each unique, with no مُمَاثِل, so neither dualizes on its own. What is القَمَران then, when used for the sun and the moon?', options: ['تغليب, not a genuine تثنية', 'A real تثنية of two matching things', 'مُلْحَق بجمع المذكر السالم', 'An example of الأسماء الخمسة'], correct: 0 },
        { q: 'Why is سَواء not dualized, even though it is مفرد and معرب؟', options: ['Because its synonym سيّ already supplies the dual meaning, as سِيّان', 'Because it has no مُمَاثِل', 'Because it is مبنيّ', 'Because it fails the شرط of الاتفاق فى الوزن'], correct: 0 },
      ],
      bank: [
        { title: 'أقسام الاسم من حيث العدد', kind: 'mcq', prompt: 'This fifth division of الاسم sorts it by:', options: ['العدد — مفرد، مثنى، مجموع', 'الجنس — مذكَّر ومؤنث', 'البناء والإعراب', 'التجرّد والزيادة'], correct: 0 },
        { title: 'تعريف المفرد بالسلب', kind: 'mcq', prompt: 'المفرد, defined by elimination, is whatever is not:', options: ['مثنى، ولا مجموعًا، ولا ملحقًا بهما، ولا من الأسماء الخمسة', 'معربًا فقط', 'صحيحًا فقط', 'مذكَّرًا فقط'], correct: 0 },
        { title: 'زيادة المثنى', kind: 'mcq', prompt: 'The مثنى is formed by adding:', options: ['ألف ونون فى الرفع، أو ياء ونون فى النصب والجرّ', 'واو ونون فى كل الأحوال', 'ألف وتاء فقط', 'تاء التأنيث'], correct: 0 },
        { title: 'كِلتا', kind: 'mcq', prompt: 'كِلتَا (feminine of كِلا) is excluded from المثنى for the same reason as كِلا. What reason is that?', options: ['Its دلالة على الاثنين is not achieved by the usual زيادة', 'It is مبنيّ فقط دون كِلا', 'It has a مُمَاثِل missing', 'It is من الأسماء الخمسة'], correct: 0 },
        { title: 'زَوْج وشَفْع', kind: 'mcq', prompt: 'زَوْج (a pair/mate) and شَفْع (an even pair) are given alongside كِلا واثنان as:', options: ['Words meaning two that are still not مثنى', 'Two of الأسماء الخمسة', 'Two مُلْحَق بجمع المذكر السالم', 'Two استثناءات من جمع المؤنث السالم'], correct: 0 },
        { title: 'عدد شروط التثنية', kind: 'mcq', prompt: 'How many شروط must a noun satisfy before it can be dualized?', options: ['ستة', 'أربعة', 'خمسة', 'ثلاثة'], correct: 0 },
        { title: 'رجلانان وزيدونان', kind: 'mcq', prompt: 'رجلانان and زيدونان are given as invalid forms, illustrating which شرط of التثنية?', options: ['أن يكون الاسم مفردًا — a مثنى or مجموع cannot be dualized again', 'أن يكون معربًا', 'أن يكون مُنَكَّرًا', 'أن يكون له مُمَاثِل'], correct: 0 },
        { title: 'هذان وصورة المثنى', kind: 'mcq', prompt: 'هذان is described as being on the صُورة of a مثنى without truly being one. What is it grammatically?', options: ['مبنيّ, so it fails the شرط of الإعراب', 'مُلْحَق بالجمع', 'اسم من الأسماء الخمسة', 'اسم مُنَكَّر'], correct: 0 },
        { title: 'أبو بكر وعُمَر', kind: 'mcq', prompt: 'العُمَران is rejected for أبو بكر وعُمَر because the two names fail to agree in:', options: ['اللفظ', 'الوزن', 'المعنى', 'الإعراب'], correct: 0 },
        { title: 'عَمْرو وعُمَر', kind: 'mcq', prompt: 'العَمْران is rejected for عَمْرو وعُمَر because the two names fail to agree in:', options: ['الوزن', 'اللفظ', 'المعنى', 'العدد'], correct: 0 },
        { title: 'العين الباصرة والجارية', kind: 'mcq', prompt: 'العَيْنان is rejected for the seeing eye and the flowing spring because they fail to agree in:', options: ['المعنى', 'اللفظ', 'الوزن', 'الإعراب'], correct: 0 },
        { title: 'الشرط الرابع: التنكير', kind: 'mcq', prompt: 'The fourth شرط of التثنية bars dualizing which kind of noun?', options: ['علم باقٍ على عَلَميته — a proper name still functioning as one unique fixed referent', 'اسم مبنيّ', 'اسم مذكَّر', 'اسم جامد'], correct: 0 },
        { title: 'الشمس والقمر', kind: 'mcq', prompt: 'الشمس and القمر are not individually dualized. Why not?', options: ['لعدم المماثلة — each is unique, with nothing else exactly like it', 'لعدم التذكير', 'لأنهما مبنيّان', 'لعدم الإعراب'], correct: 0 },
        { title: 'القَمَران', kind: 'mcq', prompt: 'القَمَران, said for the sun and the moon, is described as:', options: ['تغليب, not a genuine تثنية', 'A regular تثنية', 'مُلْحَق بالمثنى', 'استعارة محضة لا صلة لها بالتثنية'], correct: 0 },
        { title: 'سَواء وسيّ', kind: 'mcq', prompt: 'سَواء is not dualized because:', options: ['Its meaning is already covered by the dual of its synonym سيّ, giving سِيّان', 'It is مبنيّ', 'It lacks a مُمَاثِل', 'It fails the شرط of الاتفاق فى الوزن'], correct: 0 },
        { title: 'السادس: الاستغناء', kind: 'mcq', prompt: 'The sixth شرط of التثنية is:', options: ['ألّا يُستغنى عن تثنيته بتثنية غيره', 'أن يكون له نظير من الصحيح', 'أن يكون مذكَّرًا', 'أن يكون علمًا'], correct: 0 },
        { title: 'كتابان وقلمان', kind: 'mcq', prompt: 'كتابان and قلمان illustrate:', options: ['المثنى، بزيادة ألف ونون على المفرد', 'جمع المذكر السالم', 'جمع التكسير', 'الاسم الملحق بالمثنى'], correct: 0 },
        { title: 'الشرط الثاني: الإعراب', kind: 'mcq', prompt: 'اللذان and هذان fail the second شرط of التثنية because they are:', options: ['مبنيّان، لا معربان', 'جمعان، لا مفردان', 'نكرتان لا معرفتان', 'مؤنثان لا مذكَّران'], correct: 0 },
        { title: 'اللتان وهاتان', kind: 'mcq', prompt: 'اللتان and هاتان are the feminine counterparts of اللذان and هذان, and they share the same status. What is that status?', options: ['مبنيّتان, على صورة المثنى دون أن تكونا مثنى حقيقة', 'مثنى حقيقيّ', 'من الأسماء الخمسة', 'جمع مؤنث سالم'], correct: 0 },
        { title: 'ثلاثة شروط فى شرط واحد', kind: 'mcq', prompt: 'The third شرط of التثنية actually bundles three separate agreements together. What are they?', options: ['اللفظ والوزن والمعنى', 'العدد والجنس والإعراب', 'اللفظ والمعنى فقط', 'الوزن والإعراب فقط'], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'جمع المذكر السالم',
      subtitle: 'The three kinds of جمع, and the شروط that let a جامد or مشتقّ noun take واو ونون or ياء ونون',
      concepts: [
        {
          heading: 'أقسام الجمع الثلاثة، وتعريف جمع المذكر السالم',
          lines: [
            { box: { title: 'Core Text', lines: [
              `والجمع ينقسم إلى ثلاثة أقسام: مذكَّر سالم، ومؤنث سالم، وجمع تكسير`,
              `جمع المذكر السالم، هو لفظ دلّ على أكثر من اثنين، بزيادة واو ونون، أو ياء ونون، كالزيدون والصالحون، والزيدين والصالحين`,
              `والمفرد الذي يُجْمع هذا الجمع: إما أن يكون جامدًا أو مشتقًا، ولكلٍ شروطٌ`,
            ] } },
            { html: `المجموع (جمع) itself splits three ways: <bdi>مذكَّر سالم</bdi> (sound masculine), <bdi>مؤنث سالم</bdi> (sound feminine), and <bdi>جمع تكسير</bdi> (broken). This lesson covers the first.`, list: false },
            { html: `جمع المذكر السالم names more than two by adding <bdi>واو ونون</bdi> in the رفع case, or <bdi>ياء ونون</bdi> in the نصب and جرّ cases, straight onto the singular: <bdi>الزيدون/الزيدين</bdi>, <bdi>الصالحون/الصالحين</bdi>. It is called <bdi>سالم</bdi>, sound, because the singular's own shape survives intact inside it — unlike جمع تكسير, covered in the fourth lesson, which reshapes the singular from within.`, list: false },
            { html: `Not every جامد or مشتقّ noun is automatically eligible for this plural, though. Each of the two takes its own further set of conditions, covered next — and both sets come on top of the six شروط for التثنية already covered in the previous lesson, since a noun still has to be مفرد, معرب, and so on before any of this applies.`, list: false },
          ],
          exercise: {
            prompt: `Why is جمع المذكر السالم called سالم, sound?`,
            kind: 'mcq',
            options: [`Because it names only masculine nouns`, `Because the singular's own shape stays intact inside it, unlike جمع تكسير`, `Because it always adds واو ونون, never ياء ونون`, `Because it applies to every noun without restriction`],
            correct: 1,
          },
        },
        {
          heading: 'شروط الجامد: العلمية والتذكير',
          lines: [
            { html: `Beyond the six شروط of التثنية, a جامد noun (a plain, non-derived noun) needs four more things at once before it can take جمع المذكر السالم.`, list: false },
            { box: { title: 'Core Text', lines: [
              `فيُشترط فى الجامد: أن يكون عَلَمًا لمذكَّر عاقل، خاليًا من التاء، ومن التركيب`,
              `فلا يقال فى رجل: رَجُلون، لعدم العلمية، ولا فى زينب: زينبون، لعدم التذكير`,
            ] } },
            { table: {
              title: 'الشرطان الأول والثاني',
              headers: ['الشرط', 'الصيغة المرفوضة', 'العلّة'],
              rows: [
                ['عَلَمًا — being a proper name', 'رَجُلون', 'رجل names a whole kind (a common noun), not one specific named individual — لعدم العلمية'],
                ['لمذكَّر — naming a male', 'زينبون', 'زينب is a woman\'s name — لعدم التذكير'],
              ],
            } },
          ],
          exercise: {
            prompt: `رَجُلون is rejected as a جمع مذكر سالم of رجل. Why?`,
            kind: 'mcq',
            options: [`رجل is not itself a علم — it names a whole kind, not one individual`, `رجل is مؤنث`, `رجل carries a تاء`, `رجل is تركيب`],
            correct: 0,
          },
        },
        {
          heading: 'شروط الجامد: العقل، والخلوّ من التاء، والخلوّ من التركيب',
          lines: [
            { box: { title: 'Core Text', lines: [
              `ولا فى لاحق: لاحقون، لعدم العقل، ولا فى طَلْحة: طَلْحون، لوجود التاء، ولا فى سيبويه: سِيْبَوَيْهُون، لوجود التركيب`,
            ] } },
            { table: {
              title: 'الشروط الثالث إلى الخامس',
              headers: ['الشرط', 'الصيغة المرفوضة', 'العلّة'],
              rows: [
                ['عاقل — naming a rational being', 'لاحقون', 'لاحق is the proper name of a horse, a non-rational being — لعدم العقل'],
                ['خاليًا من التاء — carrying no تاء at all', 'طَلْحون', 'طَلْحة already ends in a تاء, which by itself blocks this plural — لوجود التاء'],
                ['خاليًا من التركيب — not a compound name', 'سِيْبَوَيْهُون', 'سيبويه fuses two elements into one name (تركيب مزجيّ) — لوجود التركيب'],
              ],
            } },
          ],
          clarification: `All five of these conditions — علمًا، لمذكَّر، عاقل، خاليًا من التاء، خاليًا من التركيب — sit on top of the six شروط of التثنية from the previous lesson, exactly as the Core Text states: they are additional (يُزاد عليها), not a replacement for them. A جامد noun eligible for جمع المذكر السالم has to clear eleven conditions altogether.`,
          exercise: {
            prompt: `لاحق is the proper name of a horse. Why is لاحقون rejected as its جمع مذكر سالم؟`,
            kind: 'mcq',
            options: [`لعدم العقل — لاحق names a non-rational being`, `لعدم العلمية`, `لوجود التاء`, `لوجود التركيب`],
            correct: 0,
          },
        },
        {
          heading: 'شروط المشتقّ',
          lines: [
            { html: `A مشتقّ noun (an adjective derived from a verb) does not need علمية at all — but it needs six conditions of its own before it can take جمع المذكر السالم.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ويُشترط فى المشتق: أن يكون صفةً لمذكَّر عاقل، خالية من التاء، ليست على وزن أفعل الذى مؤنثه فَعْلاء، ولا فَعْلان الذى مؤنثه فَعْلى، ولا مما يستوى فيه المذكر والمؤنث`,
              `فلا يقال فى مُرْضِع: مُرْضِعون، لعدم التذكير، ولا فى فارِهٍ صفة فَرَس: فارِهون، لعدم العقل، ولا فى عَلّامة: عَلّامتون، لوجود التاء، ولا فى أحمر: أحمرون، لمجيئه على وزن أفعل الذى مؤنثه فَعْلاء. ولا فى عَطْشان: عَطْشانون، لكونه فَعْلان الذى مؤنثه فَعْلى، ولا فى عَدْل وصَبُور وجَريح: عَدْلون، وصَبُورون، وجَريحون، لاستواء المذكر والمؤنث فيها`,
            ] } },
            { table: {
              title: 'الشروط الستة للمشتقّ',
              headers: ['الشرط', 'الصيغة المرفوضة', 'العلّة'],
              rows: [
                ['لمذكَّر — describing a male', 'مُرْضِعون', 'مُرْضِع (a nursing woman) describes only a female — لعدم التذكير'],
                ['عاقل — describing a rational being', 'فارِهون', 'فارِه here describes a فَرَس, a horse — لعدم العقل'],
                ['خالية من التاء — carrying no تاء', 'عَلّامتون', 'عَلّامة already carries the تاء — لوجود التاء'],
                ['ليست على أفعل الذى مؤنثه فَعْلاء', 'أحمرون', 'أحمر is exactly that pattern (feminine حَمْراء)'],
                ['ولا فَعْلان الذى مؤنثه فَعْلى', 'عَطْشانون', 'عَطْشان is exactly that pattern (feminine عَطْشى)'],
                ['ولا مما يستوى فيه المذكر والمؤنث', 'عَدْلون، صَبُورون، جَريحون', 'عَدْل، صَبُور، and جَريح use the identical form for both genders, so nothing marks them as specifically مذكَّر'],
              ],
            } },
            { html: `The last two excepted patterns are not new here. <bdi>أفعل الذى مؤنثه فَعْلاء</bdi> and <bdi>فَعْلان الذى مؤنثه فَعْلى</bdi> are the very same patterns that, back in the module on المذكَّر والمؤنَّث, were barred from taking the تاء on their feminine side. صَبُور and جَريح are the same كلمات that module used as examples of <bdi>فَعُول بمعنى فاعل</bdi> and <bdi>فَعِيل بمعنى مفعول</bdi> — patterns that already use one shared form for both genders instead of marking المؤنث with a تاء. The same fact that kept them from taking a تاء there keeps them out of جمع المذكر السالم here.`, list: false },
          ],
          exercise: {
            prompt: `عَدْل, صَبُور, and جَريح are barred from جمع المذكر السالم لاستواء المذكر والمؤنث فيها. What does that mean؟`,
            kind: 'mcq',
            options: [`They use the identical form for both مذكَّر and مؤنث, so nothing marks the word as specifically male`, `They are مبنيّ`, `They are جامد, not مشتقّ`, `They already carry a تاء`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'الجمع divides into which three kinds?', options: ['مذكَّر سالم، مؤنث سالم، جمع تكسير', 'مفرد، مثنى، مجموع', 'قلّة، وكثرة', 'جامد، ومشتقّ'], correct: 0 },
        { q: 'جمع المذكر السالم is formed by adding:', options: ['واو ونون فى الرفع، أو ياء ونون فى النصب والجرّ', 'ألف ونون فى كل حال', 'ألف وتاء', 'ياء ونون فى الرفع فقط'], correct: 0 },
        { q: 'رَجُلون is rejected because رجل is not a علم. Which شرط of الجامد does that fail?', options: ['أن يكون عَلَمًا', 'أن يكون لمذكَّر', 'أن يكون عاقلًا', 'أن يكون خاليًا من التاء'], correct: 0 },
        { q: 'لاحق, a horse\'s proper name, cannot take لاحقون. Which شرط fails?', options: ['أن يكون لمذكَّر عاقل', 'أن يكون عَلَمًا', 'أن يكون خاليًا من التاء', 'أن يكون خاليًا من التركيب'], correct: 0 },
        { q: 'مُرْضِع (a nursing woman) cannot take مُرْضِعون. Which شرط of المشتقّ does it fail?', options: ['أن يكون صفة لمذكَّر', 'أن يكون صفة لعاقل', 'أن يكون خاليًا من التاء', 'ألّا يكون على وزن أفعل الذى مؤنثه فَعْلاء'], correct: 0 },
        { q: 'عَدْل, صَبُور, and جَريح are barred from جمع المذكر السالم because:', options: ['استواء المذكر والمؤنث فيها — the same form serves both genders', 'They are جامد, not مشتقّ', 'They already carry a تاء', 'They are أعلام'], correct: 0 },
      ],
      bank: [
        { title: 'أقسام الجمع', kind: 'mcq', prompt: 'الجمع sorts into which three أقسام?', options: ['مذكَّر سالم، مؤنث سالم، تكسير', 'مفرد، مثنى، مجموع', 'حقيقيّ ومجازيّ', 'قياسيّ وسماعيّ فقط'], correct: 0 },
        { title: 'الزيدون والصالحون', kind: 'mcq', prompt: 'الزيدون and الصالحون illustrate:', options: ['جمع المذكر السالم فى الرفع', 'جمع المؤنث السالم', 'جمع التكسير', 'المثنى'], correct: 0 },
        { title: 'معنى سالم', kind: 'mcq', prompt: 'جمع المذكر السالم is called سالم because:', options: ['The singular\'s own form stays unchanged inside the plural', 'It only ever applies to أعلام', 'It never takes ياء ونون', 'It applies to every noun without restriction'], correct: 0 },
        { title: 'جامد أو مشتقّ', kind: 'mcq', prompt: 'A مفرد eligible for جمع المذكر السالم must first be:', options: ['إما جامدًا أو مشتقًّا, each with its own further شروط', 'مشتقًّا فقط', 'جامدًا فقط', 'وصفًا مطلقًا'], correct: 0 },
        { title: 'زيادة على شروط التثنية', kind: 'mcq', prompt: 'The شروط of الجامد and المشتقّ for جمع المذكر السالم are:', options: ['إضافية على شروط التثنية الستة, not a replacement for them', 'بديلة عن شروط التثنية تمامًا', 'أقلّ عددًا من شروط التثنية', 'خاصة بالمشتقّ دون الجامد'], correct: 0 },
        { title: 'زينبون', kind: 'mcq', prompt: 'زينبون is rejected because زينب:', options: ['names a woman, failing the شرط of لمذكَّر', 'is not a علم', 'carries no تاء', 'is تركيب'], correct: 0 },
        { title: 'طَلْحون', kind: 'mcq', prompt: 'طَلْحون is rejected because طَلْحة:', options: ['already ends in a تاء', 'names a female', 'is not عاقل', 'is not a علم'], correct: 0 },
        { title: 'سِيْبَوَيْهُون', kind: 'mcq', prompt: 'سِيْبَوَيْهُون is rejected because سيبويه is:', options: ['تركيب مزجيّ — two elements fused into one name', 'مؤنث', 'خالٍ من العلمية', 'صفة لا عَلَم'], correct: 0 },
        { title: 'عدد شروط الجامد', kind: 'mcq', prompt: 'How many additional شروط does الجامد need for جمع المذكر السالم, on top of التثنية\'s six?', options: ['خمسة', 'ثلاثة', 'أربعة', 'ستة'], correct: 0 },
        { title: 'فارِهون', kind: 'mcq', prompt: 'فارِه, describing a فَرَس, cannot take فارِهون. Why not؟', options: ['لعدم العقل — a فَرَس is not a rational being', 'لعدم التذكير', 'لوجود التاء', 'لأنه على وزن أفعل'], correct: 0 },
        { title: 'عَلّامتون', kind: 'mcq', prompt: 'عَلّامتون is rejected because عَلّامة:', options: ['already carries the تاء', 'describes a non-rational being', 'describes a female', 'is جامد'], correct: 0 },
        { title: 'أحمرون', kind: 'mcq', prompt: 'أحمرون is rejected because أحمر is on which pattern?', options: ['أفعل الذى مؤنثه فَعْلاء', 'فَعْلان الذى مؤنثه فَعْلى', 'فَعُول بمعنى فاعل', 'مما يستوى فيه المذكر والمؤنث'], correct: 0 },
        { title: 'عَطْشانون', kind: 'mcq', prompt: 'عَطْشانون is rejected because عَطْشان is on which pattern?', options: ['فَعْلان الذى مؤنثه فَعْلى', 'أفعل الذى مؤنثه فَعْلاء', 'فَعِيل بمعنى مفعول', 'استواء المذكر والمؤنث'], correct: 0 },
        { title: 'صَبُور وجَريح: تكرار', kind: 'mcq', prompt: 'صَبُور and جَريح were already met in an earlier module as examples of patterns that never take a تاء at all. What fact links that earlier point to their exclusion here?', options: ['Using one identical form for both genders keeps them out of the تاء there and out of جمع المذكر السالم here', 'They are both جامد', 'They are both أعلام', 'They both carry a تركيب'], correct: 0 },
        { title: 'عدد شروط المشتقّ', kind: 'mcq', prompt: 'How many شروط does المشتقّ need for جمع المذكر السالم?', options: ['ستة', 'أربعة', 'خمسة', 'ثلاثة'], correct: 0 },
        { title: 'المشتقّ لا يحتاج علمية', kind: 'mcq', prompt: 'Unlike الجامد, المشتقّ does not need to be a:', options: ['عَلَمًا', 'صفةً لمذكَّر عاقل', 'خاليًا من التاء', 'خاليًا من الاستواء بين المذكر والمؤنث'], correct: 0 },
        { title: 'مُرْضِع', kind: 'mcq', prompt: 'مُرْضِع means:', options: ['a nursing woman', 'a thirsty man', 'a red thing', 'a fixed proper name'], correct: 0 },
        { title: 'شرط مشترك بين الجامد والمشتقّ', kind: 'mcq', prompt: 'Which condition is required of both الجامد and المشتقّ alike?', options: ['أن يكون لمذكَّر عاقل', 'أن يكون علمًا', 'أن يكون خاليًا من التركيب', 'أن يكون على وزن أفعل'], correct: 0 },
        { title: 'رجل مقابل الزيدون', kind: 'mcq', prompt: 'رجل fails to take جمع المذكر السالم, while زيد (giving الزيدون) does. What is the difference between them?', options: ['زيد is a عَلَم; رجل is a common noun naming a whole kind', 'زيد is مشتقّ; رجل is جامد', 'رجل carries a تاء; زيد does not', 'زيد is مؤنث; رجل is مذكَّر'], correct: 0 },
        { title: 'جمع مذكر سالم: خلاصة', kind: 'mcq', prompt: 'What single fact distinguishes جمع المذكر السالم from جمع التكسير, covered later in this module?', options: ['The singular keeps its own shape inside the plural, rather than being reshaped', 'It only ever applies to مشتقّات', 'It only ever applies to جوامد', 'It has no شروط at all'], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'جمع المؤنث السالم',
      subtitle: 'Six positions where this جمع is قياسيّ, and how صحيح/منقوص/مقصور/ممدود inflect across all three sound forms',
      concepts: [
        {
          heading: 'تعريف جمع المؤنث السالم، وموضعاه الأول والثاني',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وجمع المؤنث السالم: ما دلّ على أكثر من اثنين، بزيادة ألف وتاء على مفرده، كفاطمات وزينبات`,
              `وهذا الجمع يَنقاس: فى جميع أعلام الإناث، كزينب وهند ومريم. وفى كل ما خُتِمَ بالتاء مطلقًا، كفاطمة وطلحة، ويُستثنى من ذلك امرأة، وشاة، وقُلّة بالضم والتخفيف: اسم لُعْبة، وأَمَة، لعدم ورودها`,
            ] } },
            { html: `جمع المؤنث السالم names more than two by adding <bdi>ألف وتاء</bdi> onto the singular: <bdi>فاطمات</bdi>, <bdi>زينبات</bdi>. Six positions are named where it is <bdi>قياسيّ</bdi> — regular, predictable by rule rather than merely heard.`, list: false },
            { table: {
              title: 'الموضعان الأول والثاني',
              headers: ['الموضع', 'الشرح', 'المثال'],
              rows: [
                ['أعلام الإناث — every female proper name', 'applies without exception', 'زينب، هند، مريم'],
                ['ما خُتِم بالتاء مطلقًا — anything ending in the تاء, regardless of what it names', 'the rule tracks the ending, not the sex of what the word names', 'فاطمة، طَلْحة — طَلْحة is a man\'s name that still takes this جمع, purely because it ends in a تاء'],
              ],
            } },
            { html: `Four words that end in the تاء are still excepted from the second position, simply because that plural form has not been heard from them (<bdi>لعدم ورودها</bdi>): <bdi>امرأة</bdi> (woman), <bdi>شاة</bdi> (a sheep), <bdi>قُلّة</bdi> (pronounced with a ضمة and a light consonant — the name of a plaything, not the everyday word for a jug), and <bdi>أَمَة</bdi> (a female servant).`, list: false },
          ],
          exercise: {
            prompt: `طَلْحة is a man's name, yet it takes جمع مؤنث سالم as طَلْحات. Why?`,
            kind: 'mcq',
            options: [`The second موضع tracks whatever ends in the تاء, whether it names a male or a female`, `Because طَلْحة is also مؤنث حقيقيّ`, `Because طَلْحة is a خُماسيّ`, `Because طَلْحة lacks a جمع تكسير`],
            correct: 0,
          },
        },
        {
          heading: 'الموضع الثالث: ما لَحِقَتْه ألف التأنيث',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وفى كل ما لَحِقَتْه ألفُ التأنيث مطلقًا: مقصورة أو ممدودة، كسَلْمى وحُبْلى وصحراء وحسناء`,
              `ويُستثنى من ذلك فَعْلاء مؤنث أَفْعَل، وفَعْلى مؤنث فَعْلان، فلا يُجمعان هذا الجمع، كما لا يُجمع مذكَّرهما جمع مذكَّر سالمًا`,
            ] } },
            { html: `The third position: any noun carrying <bdi>ألف التأنيث</bdi>, whether short (<bdi>مقصورة</bdi>, as in <bdi>سَلْمى</bdi> and <bdi>حُبْلى</bdi>) or drawn out into a همزة (<bdi>ممدودة</bdi>, as in <bdi>صحراء</bdi> and <bdi>حسناء</bdi>) — the same two shapes of الألف met as the second mark of المؤنث in the module on المذكَّر والمؤنَّث.`, list: false },
            { html: `<bdi>فَعْلاء</bdi>, the feminine of <bdi>أَفْعَل</bdi> (as in <bdi>حَمْراء</bdi>, feminine of أَحْمَر), and <bdi>فَعْلى</bdi>, the feminine of <bdi>فَعْلان</bdi> (as in <bdi>عَطْشى</bdi>, feminine of عَطْشان), are excepted here too. This mirrors, on the feminine side, exactly what happened one lesson ago on the masculine side: أحمر and عطشان were barred from جمع المذكر السالم for being on those very patterns. The masculine and feminine of the same two patterns are locked out of their matching سالم plural together.`, list: false },
          ],
          exercise: {
            prompt: `حَمْراء, the feminine of أحمر, is barred from جمع المؤنث السالم. What earlier fact does this mirror?`,
            kind: 'mcq',
            options: [`أحمر itself was barred from جمع المذكر السالم for being on the pattern أفعل الذى مؤنثه فَعْلاء`, `حَمْراء is مؤنث حقيقيّ`, `حَمْراء is خُماسيّ`, `حَمْراء lacks a جمع تكسير`],
            correct: 0,
          },
        },
        {
          heading: 'المواضع الرابع إلى السادس، وما بقي للسماع',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وفى مُصَغَّر غير العاقل، كجُبَيل ودُرَيْهِم. وفى وَصْفه أيضًا، كشامخ صفة جَبَل، ومعدود صفة يوم`,
              `وفى كل خُماسيّ لم يُسْمَع له جمع تكسير، كسُرَادِق وحَمّام وإصْطَبل`,
              `وما سوى ذلك فمقصورٌ على السماع، كسموات وسِجِلّات وأَمَّهات`,
            ] } },
            { table: {
              title: 'المواضع الرابع إلى السادس',
              headers: ['الموضع', 'الشرح', 'المثال'],
              rows: [
                ['مُصَغَّر غير العاقل — the diminutive of a non-rational noun', 'the diminutive form itself takes this plural', 'جُبَيل (little rock, from جَبَل), دُرَيْهِم (little dirham, from دِرْهَم)'],
                ['وَصْف غير العاقل — a descriptive adjective for a non-rational noun', 'the same rule as its diminutive', 'شامخ, describing a جَبَل (towering); معدود, describing a يوم (counted)'],
                ['كل خُماسيّ لم يُسْمَع له جمع تكسير — any five-letter noun with no attested broken plural', 'falls back on جمع مؤنث سالم instead', 'سُرَادِق (a tent enclosure or courtyard cover), حَمّام (a bath-house), إصْطَبل (a stable)'],
              ],
            } },
            { html: `Whatever fits none of the six positions is <bdi>مقصورٌ على السماع</bdi> — restricted to what has actually been heard, exactly like جمع التكسير will turn out to be entirely. <bdi>سموات</bdi> (plural of سماء, sky), <bdi>سِجِلّات</bdi> (plural of سِجِلّ, a register), and <bdi>أَمَّهات</bdi> (plural of أُمّ, mother) are given as examples of that residue.`, list: false },
          ],
          exercise: {
            prompt: `سُرَادِق takes جمع مؤنث سالم as سُرَادِقات. Which of the six positions covers it?`,
            kind: 'mcq',
            options: [`كل خُماسيّ لم يُسْمَع له جمع تكسير`, `أعلام الإناث`, `مُصَغَّر غير العاقل`, `ما لَحِقَتْه ألف التأنيث`],
            correct: 0,
          },
        },
        {
          heading: 'صحيح، منقوص، مقصور، وممدود عبر التثنية وجمعَي السلامة',
          lines: [
            { html: `The four-way split of a noun by its final letter — <bdi>صحيح</bdi>, <bdi>منقوص</bdi>, <bdi>مقصور</bdi>, and <bdi>ممدود</bdi>, covered in the previous module — inflects differently under التثنية, جمع المذكر السالم, and جمع المؤنث السالم. Laying the three side by side shows the same letter-endings shifting predictably.`, list: false },
            { table: {
              title: 'صحيح / منقوص / مقصور / ممدود: التثنية وجمعا السلامة',
              headers: ['الصيغة', 'صحيح', 'منقوص', 'مقصور', 'ممدود'],
              rows: [
                ['التثنية', 'رَجُلان، دَلْوان', 'قاضِيان، داعِيان', 'حُبْلَيان، مُسْتَدْعِيان', 'قَرّاءان، حَمْراوان'],
                ['جمع المذكر السالم', 'مسلمون، طالبون', 'قاضُون، داعُون', 'أعلَوْن، مُصْطَفَوْن', 'قرّاؤون، وضّاؤون'],
                ['جمع المؤنث السالم', 'زينبات، مَريَمات', 'قاضِيات، داعِيات', 'حُبْلَيات، مُصْطَفَيات', 'قرّاءات، صحراوات'],
              ],
            } },
            { html: `A few patterns stand out. منقوص keeps its ياء in every row here — قاضِيان, قاضُون, قاضِيات — the ياء only drops in جمع المذكر السالم\'s رفع, giving قاضُون rather than قاضِيون. مقصور\'s ألف changes shape depending on what follows it: it becomes a واو before جمع المذكر السالم\'s ون (أعلَوْن، مُصْطَفَوْن), but a ياء before جمع المؤنث السالم\'s ات (حُبْلَيات، مُصْطَفَيات). ممدود\'s همزة sometimes stays exactly as it is (قرّاء keeps its همزة throughout, because that همزة is an original root letter) and sometimes reverts to a واو (حَمْراء becomes حَمْراوان, and صحراء becomes صحراوات, because those همزات began life as the ألف of التأنيث, converted from an ألف only because another ألف preceded it).`, list: false },
          ],
          clarification: `ممدود\'s two example words in this table behave differently for a reason already covered when الممدود itself was introduced: a همزة that is genuinely part of the root (as in قرّاء, from ق-ر-أ) stays a همزة under any ending, while a همزة that only exists because الألف التأنيث had to change shape next to another ألف (as in حَمْراء and صحراء) reverts back to a واو the moment a suffix is added and the two ألفs are no longer adjacent.`,
          exercise: {
            prompt: `In جمع المؤنث السالم, حُبْلى becomes حُبْلَيات, with its ألف turning into a ياء. What does مُصْطَفى become in the same row, and what happens to its ألف?`,
            kind: 'mcq',
            options: [`مُصْطَفَيات — the same shift, ألف to ياء`, `مُصْطَفَوْن — the ألف turns into a واو`, `مُصْطَفاوات — the ألف is kept as is`, `مُصْطَفَيان — it stays a تثنية form`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'جمع المؤنث السالم is formed by adding:', options: ['ألف وتاء على المفرد', 'واو ونون، أو ياء ونون', 'ألف ونون فقط', 'تاء التأنيث الساكنة'], correct: 0 },
        { q: 'طَلْحة takes جمع مؤنث سالم even though it names a man. Which موضع covers that؟', options: ['كل ما خُتِم بالتاء مطلقًا', 'أعلام الإناث', 'مُصَغَّر غير العاقل', 'ما لَحِقَتْه ألف التأنيث'], correct: 0 },
        { q: 'حَمْراء (feminine of أحمر) is barred from جمع المؤنث السالم. What does this mirror from the previous lesson?', options: ['أحمر itself being barred from جمع المذكر السالم', 'حَمْراء being من الأسماء الخمسة', 'حَمْراء being خُماسيّ', 'حَمْراء lacking a تصغير'], correct: 0 },
        { q: 'سُرَادِق, حَمّام, and إصْطَبل take جمع مؤنث سالم because:', options: ['They are خُماسيّ with no attested جمع تكسير', 'They are أعلام إناث', 'They are مُصَغَّرات', 'They carry ألف التأنيث'], correct: 0 },
        { q: 'سموات, سِجِلّات, and أَمَّهات are examples of:', options: ['ما هو مقصور على السماع, outside the six regular positions', 'أعلام الإناث', 'المُصَغَّر غير العاقل', 'ما لَحِقَتْه ألف التأنيث الممدودة'], correct: 0 },
        { q: 'In the جمع المذكر السالم row of the summary table, مقصور nouns like أعلى and مصطفى become أعلَوْن and مصطفَوْن. What happens to their ألف؟', options: ['It turns into a واو', 'It turns into a ياء', 'It is dropped entirely', 'It becomes a همزة'], correct: 0 },
      ],
      bank: [
        { title: 'فاطمات وزينبات', kind: 'mcq', prompt: 'فاطمات and زينبات illustrate:', options: ['جمع المؤنث السالم', 'جمع المذكر السالم', 'جمع التكسير', 'المثنى'], correct: 0 },
        { title: 'الموضع الأول', kind: 'mcq', prompt: 'The first regular موضع of جمع المؤنث السالم is:', options: ['جميع أعلام الإناث', 'كل ما خُتِم بالتاء', 'المُصَغَّر غير العاقل', 'الخُماسيّ بلا جمع تكسير'], correct: 0 },
        { title: 'استثناءات الموضع الثاني', kind: 'mcq', prompt: 'Which four words, despite ending in the تاء, do not take جمع مؤنث سالم؟', options: ['امرأة، شاة، قُلّة، أَمَة', 'فاطمة، طَلْحة، عَلّامة، رَجُلة', 'زينب، هند، مريم، سَلْمى', 'حَمْراء، عَطْشى، صحراء، حسناء'], correct: 0 },
        { title: 'قُلّة بالتخفيف', kind: 'mcq', prompt: 'قُلّة, pronounced with a light consonant here, means:', options: ['a plaything/game, not the everyday word for a jug', 'a female servant', 'a sheep', 'a woman'], correct: 0 },
        { title: 'ألف التأنيث مطلقًا', kind: 'mcq', prompt: 'The third موضع covers a noun carrying ألف التأنيث in either of which two shapes?', options: ['مقصورة أو ممدودة', 'ساكنة أو متحركة', 'أصلية أو زائدة', 'لازمة أو غير لازمة'], correct: 0 },
        { title: 'استثناء فَعْلاء وفَعْلى', kind: 'mcq', prompt: 'فَعْلاء (مؤنث أَفْعَل) and فَعْلى (مؤنث فَعْلان) are excepted from جمع المؤنث السالم because:', options: ['Their مذكَّر counterparts are excepted from جمع المذكر السالم for the same reason', 'They are أعلام إناث', 'They carry no ألف تأنيث', 'They are خُماسيّة'], correct: 0 },
        { title: 'جُبَيل ودُرَيْهِم', kind: 'mcq', prompt: 'جُبَيل and دُرَيْهِم illustrate which موضع؟', options: ['مُصَغَّر غير العاقل', 'وَصْف غير العاقل', 'ما خُتِم بالتاء', 'الخُماسيّ بلا جمع تكسير'], correct: 0 },
        { title: 'شامخ ومعدود', kind: 'mcq', prompt: 'شامخ (صفة جَبَل) and معدود (صفة يوم) illustrate which موضع؟', options: ['وَصْف غير العاقل', 'مُصَغَّر غير العاقل', 'أعلام الإناث', 'ما لَحِقَتْه ألف التأنيث'], correct: 0 },
        { title: 'معنى سُرَادِق', kind: 'mcq', prompt: 'سُرَادِق means:', options: ['an enclosure for a tent, or an extended cover over a courtyard', 'a stable', 'a bath-house', 'a register or record'], correct: 0 },
        { title: 'الخُماسيّ', kind: 'mcq', prompt: 'A خُماسيّ noun takes جمع مؤنث سالم on condition that:', options: ['it has no attested جمع تكسير', 'it is an علم', 'it carries ألف التأنيث', 'it is مُصَغَّر'], correct: 0 },
        { title: 'ما وراء المواضع الستة', kind: 'mcq', prompt: 'A noun fitting none of the six regular مواضع takes جمع مؤنث سالم only if:', options: ['that plural has actually been heard — مقصورٌ على السماع', 'it is مُعرَب', 'it carries the تاء', 'it is جامد, not مشتقّ'], correct: 0 },
        { title: 'سموات', kind: 'mcq', prompt: 'سموات is the جمع مؤنث سالم of:', options: ['سماء', 'سِجِلّ', 'أُمّ', 'اسم'], correct: 0 },
        { title: 'أَمَّهات', kind: 'mcq', prompt: 'أَمَّهات is the جمع مؤنث سالم of:', options: ['أُمّ', 'أَمَة', 'امرأة', 'أَفْعَل'], correct: 0 },
        { title: 'قاضِيان وداعِيان', kind: 'mcq', prompt: 'قاضِيان and داعِيان, in the summary table, illustrate the تثنية of:', options: ['منقوص', 'مقصور', 'ممدود', 'صحيح'], correct: 0 },
        { title: 'قاضُون', kind: 'mcq', prompt: 'قاضٍ becomes قاضُون in جمع المذكر السالم. What happens to its ياء?', options: ['It drops', 'It stays as is', 'It becomes a واو', 'It becomes a همزة'], correct: 0 },
        { title: 'أعلَوْن ومُصْطَفَوْن', kind: 'mcq', prompt: 'أعلَوْن and مُصْطَفَوْن, in the summary table, show a مقصور\'s ألف turning into:', options: ['واو, before جمع المذكر السالم\'s ون', 'ياء', 'همزة', 'nothing — the ألف is simply dropped'], correct: 0 },
        { title: 'قرّاؤون وقرّاءات', kind: 'mcq', prompt: 'قرّاء keeps its همزة across قرّاؤون and قرّاءات. Why, unlike صحراء؟', options: ['قرّاء\'s همزة is an original root letter, not a converted ألف تأنيث', 'قرّاء is مُصَغَّر', 'قرّاء is a علم', 'قرّاء is جامد'], correct: 0 },
        { title: 'حَمْراوان وصحراوات', kind: 'mcq', prompt: 'حَمْراوان and صحراوات show a ممدود\'s همزة reverting to a واو. Why?', options: ['That همزة began as ألف التأنيث, converted only because another ألف preceded it', 'That همزة is an original root letter', 'That word is مُصَغَّر', 'That word is جامد'], correct: 0 },
        { title: 'حُبْلَيان', kind: 'mcq', prompt: 'حُبْلَيان, the تثنية of حُبْلى, shows the مقصور\'s ألف becoming:', options: ['ياء, before التثنية\'s ألف ونون', 'واو', 'همزة', 'nothing — it stays an ألف'], correct: 0 },
        { title: 'زينبات ومَريَمات', kind: 'mcq', prompt: 'زينبات and مَريَمات, in the summary table\'s جمع المؤنث السالم row, sit under which category?', options: ['صحيح', 'منقوص', 'مقصور', 'ممدود'], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'جمع التكسير',
      subtitle: 'Seven ways a singular reshapes into a broken plural, and the twenty-seven أبنية that split into قلّة and كثرة',
      concepts: [
        {
          heading: 'تعريف جمع التكسير والتغيير المقدَّر',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وجمع التكسير: هو ما دلّ على أكثر من اثنين بتغيير صورة مفرده، وكله سماعي`,
              `تغييرًا مقدَّرًا كفُلْك، بضم فسكون، للمفرد والجمع، فزنته فى المفرد كزنة قُفْل، وفى الجمع كزنة أُسْد، وكِهجان لنوع من الإبل، ففى المفرد ككتاب، وفى الجمع كِرجال`,
            ] } },
            { html: `جمع التكسير, the third kind of جمع, names more than two by changing the singular's own internal shape (<bdi>تغيير صورة مفرده</bdi>), rather than suffixing something onto an unchanged singular the way the two سالم plurals do. That is what تكسير means: breaking the singular apart and rebuilding it. The whole thing is <bdi>سماعيّ</bdi> — no general rule predicts which of its patterns a given singular takes; each has to be known individually.`, list: false },
            { html: `The first type of change is <bdi>مقدَّر</bdi>, notional or estimated: the word's surface spelling stays identical between singular and plural, yet grammarians still treat it as following a different internal وزن in each sense. <bdi>فُلْك</bdi> (a ship / ships) is pronounced the same both ways, but is treated as following the pattern of <bdi>قُفْل</bdi> (a lock) when singular and <bdi>أُسْد</bdi> when plural. <bdi>كِهجان</bdi>, naming a breed of camel, works the same way: spelled identically throughout, but on the pattern of <bdi>كتاب</bdi> when singular and <bdi>رِجال</bdi> when plural.`, list: false },
          ],
          exercise: {
            prompt: `Why is فُلْك\'s change called تغييرًا مقدَّرًا rather than تغييرًا ظاهرًا?`,
            kind: 'mcq',
            options: [`Its spelling is identical for both المفرد والجمع, yet it is treated as following a different وزن in each`, `It adds a letter in the plural`, `It drops a letter in the plural`, `Its vowelling visibly changes between singular and plural`],
            correct: 0,
          },
        },
        {
          heading: 'التغيير الظاهر البسيط: الشكل، أو الزيادة، أو النقص',
          lines: [
            { html: `Beyond the notional change, جمع التكسير also comes by <bdi>تغيير ظاهر</bdi> — a visible change. Three simple kinds involve only one of the three possible moves at a time: the vowelling shifting, a letter being added, or a letter being dropped.`, list: false },
            { box: { title: 'Core Text', lines: [
              `أو تغييرًا ظاهرًا، إما بالشكل فقط، كأَسَد بفتحتين، جمعه أُسْد بضم فسكون`,
              `وإما بالزيادة فقط، كصِنوان فى جمع صِنو، بكسر فسكون فيهما`,
              `وإما بالنقص فقط، كتُخَم فى جمع تُخَمة، بضم ففتح فيهما`,
            ] } },
            { table: {
              title: 'ثلاثة أنواع بسيطة',
              headers: ['النوع', 'المثال', 'الشرح'],
              rows: [
                ['بالشكل فقط — vowelling only', 'أَسَد ← أُسْد', 'the same three letters throughout; only the حركات shift, from فتحتين in the singular to ضمة فسكون in the plural'],
                ['بالزيادة فقط — addition only', 'صِنو ← صِنوان', 'singular and plural share the identical vowelling, كسرة فسكون; the plural simply adds letters'],
                ['بالنقص فقط — deletion only', 'تُخَمة ← تُخَم', 'singular and plural share the identical vowelling, ضمة فتحة; the plural drops the closing تاء'],
              ],
            } },
          ],
          exercise: {
            prompt: `صِنو becomes صِنوان by which single kind of تغيير؟`,
            kind: 'mcq',
            options: [`بالزيادة فقط — letters are added, the vowelling stays the same`, `بالشكل فقط — only the vowelling changes`, `بالنقص فقط — a letter is dropped`, `بالثلاثة معًا`],
            correct: 0,
          },
        },
        {
          heading: 'التغيير الظاهر المركّب: الشكل مع الزيادة أو النقص أو معهما',
          lines: [
            { html: `The remaining three kinds combine the shift in vowelling with an addition, a deletion, or both at once.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وإما بالشكل والزيادة، كرِجال بالكسر، فى جمع رَجُل بفتح فضم`,
              `وإما بالشكل والنقص، كُكتُب بضمتين، فى جمع كتاب بالكسر`,
              `وإما بالثلاثة، كِغلمان بكسر فسكون، فى جمع غُلام بالضم`,
            ] } },
            { table: {
              title: 'ثلاثة أنواع مركّبة',
              headers: ['النوع', 'المثال', 'الشرح'],
              rows: [
                ['بالشكل والزيادة', 'رَجُل ← رِجال', 'vowelling changes from فتحة فضمة to كسرة, and a letter (ا) is added'],
                ['بالشكل والنقص', 'كتاب ← كُتُب', 'vowelling changes from كسرة to ضمتان, and a letter (ا) drops'],
                ['بالثلاثة معًا — all three at once', 'غُلام ← غِلمان', 'vowelling changes from ضمة to كسرة فسكون, a letter drops, and a letter (ن) is added'],
              ],
            } },
          ],
          clarification: `Altogether جمع التكسير changes a singular in seven possible ways: one notional (مقدَّر) and six visible — الشكل alone, الزيادة alone, النقص alone, الشكل مع الزيادة, الشكل مع النقص, and الثلاثة معًا. Every جمع تكسير word falls into exactly one of these seven.`,
          exercise: {
            prompt: `غُلام becomes غِلمان. Which of the seven types of تغيير is that؟`,
            kind: 'mcq',
            options: [`بالثلاثة معًا — vowelling changes, a letter drops, and a letter is added`, `بالشكل فقط`, `بالزيادة فقط`, `بالنقص فقط`],
            correct: 0,
          },
        },
        {
          heading: 'عموم جمع التكسير، وأبنيته السبعة والعشرون: القلّة والكثرة',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وهذا الجمع عامٌّ، فى العقلاء وغيرهم، ذكورًا كانوا أو إناثًا، وأبنيته سبعة وعشرون، منها أربعة للِقلّة، والباقى للكثرة`,
              `والجمعان قيل إنهما مختلفان مبدأ وغاية، فالقلّة من ثلاثة إلى عشرة، والكثرة من أحد عشر إلى ما لا نهاية له`,
              `وقيل: إنهما متفقان مبدأ لا غاية، فالقلّة من ثلاثة إلى عشرة، والكثرة من ثلاثة إلى ما لا نهاية له`,
            ] } },
            { html: `Unlike جمع المذكر السالم (restricted to أعلام or specific صفات of a مذكَّر عاقل) or جمع المؤنث السالم (restricted to six named positions), جمع التكسير is <bdi>عامّ</bdi> — general. It applies across rational and non-rational nouns alike, and to masculine and feminine alike. It runs on twenty-seven recorded patterns (<bdi>أبنية</bdi>): four reserved for <bdi>قلّة</bdi> (a paucity count) and the rest for <bdi>كثرة</bdi> (an abundance count).`, list: false },
            { html: `Two views are given on where these two ranges actually start and stop. The first: قلّة and كثرة are fully separate ranges — قلّة covers three to ten, and كثرة only begins at eleven and continues without limit. The second: the two ranges share the same starting point but not the same end — both can start as low as three, but قلّة stops at ten while كثرة, once it starts, keeps going without limit.`, list: false },
          ],
          exercise: {
            prompt: `According to the second view given here, from what number can كثرة patterns start؟`,
            kind: 'mcq',
            options: [`من ثلاثة — the same starting point as القلّة`, `من أحد عشر فقط`, `من عشرة`, `لا حدّ أدنى لها على الإطلاق`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'جمع التكسير is defined as a plural that names more than two by:', options: ['تغيير صورة مفرده — reshaping the singular itself', 'زيادة ألف وتاء', 'زيادة واو ونون أو ياء ونون', 'إبدال حرف العلّة فقط'], correct: 0 },
        { q: 'فُلْك is spelled identically for a ship and ships. What kind of تغيير is that؟', options: ['مقدَّر — a notional change in the internal وزن only', 'ظاهر بالشكل فقط', 'ظاهر بالزيادة فقط', 'ظاهر بالثلاثة معًا'], correct: 0 },
        { q: 'تُخَمة becomes تُخَم. Which type of تغيير ظاهر is that؟', options: ['بالنقص فقط — a letter drops, the vowelling stays the same', 'بالزيادة فقط', 'بالشكل فقط', 'بالشكل والنقص معًا'], correct: 0 },
        { q: 'كتاب becomes كُتُب. Which type of تغيير ظاهر is that؟', options: ['بالشكل والنقص معًا', 'بالنقص فقط', 'بالشكل فقط', 'بالثلاثة معًا'], correct: 0 },
        { q: 'How many أبنية (patterns) does جمع التكسير run on in total, and how many of them are for قلّة؟', options: ['سبعة وعشرون فى المجموع، أربعة منها للقلّة', 'عشرون فى المجموع، ستة منها للقلّة', 'ثلاثون فى المجموع، خمسة منها للقلّة', 'خمسة عشر فى المجموع، اثنان منها للقلّة'], correct: 0 },
        { q: 'What makes جمع التكسير عامًّا, unlike the two جموع سالمة؟', options: ['It applies to rational and non-rational nouns alike, masculine and feminine alike', 'It applies only to أعلام', 'It applies only to مشتقّات', 'It applies only to خُماسيّ nouns'], correct: 0 },
      ],
      bank: [
        { title: 'كله سماعي', kind: 'mcq', prompt: 'جمع التكسير, as a whole, is described as:', options: ['سماعيّ — no general rule predicts the pattern a given singular takes', 'قياسيّ بالكامل', 'مقصور على الأعلام', 'مقصور على العقلاء'], correct: 0 },
        { title: 'معنى التكسير', kind: 'mcq', prompt: 'The name تكسير (breaking) reflects the fact that this جمع:', options: ['reshapes the singular\'s own internal form', 'simply suffixes ألف وتاء onto the singular', 'simply suffixes واو ونون onto the singular', 'never changes the singular at all'], correct: 0 },
        { title: 'وزن فُلْك مفردًا', kind: 'mcq', prompt: 'فُلْك, when singular, is treated as following the وزن of:', options: ['قُفْل', 'أُسْد', 'كتاب', 'رِجال'], correct: 0 },
        { title: 'وزن فُلْك جمعًا', kind: 'mcq', prompt: 'فُلْك, when plural, is treated as following the وزن of:', options: ['أُسْد', 'قُفْل', 'كتاب', 'رِجال'], correct: 0 },
        { title: 'كِهجان', kind: 'mcq', prompt: 'كِهجان, naming a breed of camel, is spelled the same in both numbers, following the وزن of كتاب when singular and which وزن when plural؟', options: ['رِجال', 'قُفْل', 'أُسْد', 'غِلمان'], correct: 0 },
        { title: 'أَسَد وأُسْد', kind: 'mcq', prompt: 'أَسَد becomes أُسْد. What changes, and what stays the same؟', options: ['The vowelling changes; the three letters stay the same', 'A letter is added; the vowelling stays the same', 'A letter drops; the vowelling stays the same', 'Both the letters and the vowelling change'], correct: 0 },
        { title: 'صِنو', kind: 'mcq', prompt: 'صِنو and its plural صِنوان share which vowelling throughout؟', options: ['كسرة فسكون', 'فتحة فضمة', 'ضمة ففتحة', 'ضمتان'], correct: 0 },
        { title: 'تُخَمة وتُخَم', kind: 'mcq', prompt: 'تُخَمة and its plural تُخَم share which vowelling throughout؟', options: ['ضمة فتحة', 'كسرة فسكون', 'فتحتان', 'ضمتان'], correct: 0 },
        { title: 'رَجُل ورِجال', kind: 'mcq', prompt: 'رَجُل becomes رِجال. What two things change at once؟', options: ['The vowelling shifts, and a letter (ا) is added', 'The vowelling shifts, and a letter drops', 'A letter is added, and another drops', 'Only the vowelling shifts'], correct: 0 },
        { title: 'غُلام وغِلمان', kind: 'mcq', prompt: 'غُلام becomes غِلمان by which combination of changes؟', options: ['الشكل، والزيادة، والنقص معًا', 'الشكل والزيادة فقط', 'الشكل والنقص فقط', 'الزيادة والنقص فقط'], correct: 0 },
        { title: 'عدد أنواع التغيير', kind: 'mcq', prompt: 'Counting المقدَّر alongside the six kinds of الظاهر, how many total types of تغيير does جمع التكسير have؟', options: ['سبعة', 'ستة', 'خمسة', 'ثمانية'], correct: 0 },
        { title: 'شمول جمع التكسير', kind: 'mcq', prompt: 'جمع التكسير is described as عامّ. What does that mean here؟', options: ['It applies to rational and non-rational nouns, masculine and feminine, without restriction', 'It only applies to broken أعلام', 'It only applies to نكرات', 'It only applies to خُماسيّات'], correct: 0 },
        { title: 'أبنية القلّة', kind: 'mcq', prompt: 'Of the twenty-seven أبنية of جمع التكسير, how many are reserved for قلّة؟', options: ['أربعة', 'ستة', 'ثلاثة', 'خمسة'], correct: 0 },
        { title: 'الرأي الأول فى مبدأ الجمعين', kind: 'mcq', prompt: 'The first view on القلّة والكثرة holds that they:', options: ['differ in both مبدأ and غاية — القلّة من ٣-١٠، والكثرة من ١١ فصاعدًا', 'agree in مبدأ لكن يختلفان فى الغاية', 'يتفقان مبدأ وغاية معًا', 'تبدأ الكثرة قبل القلّة'], correct: 0 },
        { title: 'الرأي الثاني فى مبدأ الجمعين', kind: 'mcq', prompt: 'The second view on القلّة والكثرة holds that they:', options: ['share the same مبدأ (both from ٣) but differ in غاية — القلّة تقف عند ١٠، والكثرة بلا نهاية', 'differ in مبدأ لكن يتفقان فى الغاية', 'لا علاقة بينهما بتاتًا', 'تبدأ القلّة من ١١'], correct: 0 },
        { title: 'مدى القلّة', kind: 'mcq', prompt: 'Under both views given here, القلّة covers which range؟', options: ['من ثلاثة إلى عشرة', 'من واحد إلى عشرة', 'من أحد عشر إلى عشرين', 'من ثلاثة إلى ما لا نهاية له'], correct: 0 },
        { title: 'مدى الكثرة فى الرأي الأول', kind: 'mcq', prompt: 'Under the first view, الكثرة begins at:', options: ['أحد عشر', 'ثلاثة', 'عشرة', 'واحد'], correct: 0 },
        { title: 'جمع تكسير مقابل جمعي السلامة', kind: 'mcq', prompt: 'What single fact most clearly distinguishes جمع التكسير from the two جموع السلامة؟', options: ['It reshapes the singular internally, while the two سالم plurals leave the singular\'s own shape untouched', 'It only applies to أعلام', 'It only applies to مشتقّات', 'It never changes the vowelling'], correct: 0 },
        { title: 'كتاب ككلمة صحيحة', kind: 'mcq', prompt: 'كتاب, becoming كُتُب, is an example of which single type of تغيير ظاهر؟', options: ['بالشكل والنقص معًا', 'بالشكل فقط', 'بالنقص فقط', 'بالزيادة فقط'], correct: 0 },
        { title: 'التغيير المقدَّر مقابل الظاهر', kind: 'mcq', prompt: 'What is the key difference between تغيير مقدَّر and تغيير ظاهر؟', options: ['مقدَّر leaves the surface spelling identical and only shifts the notional وزن; ظاهر visibly changes the letters or vowelling', 'مقدَّر only happens to خُماسيّات; ظاهر only happens to ثلاثيّات', 'مقدَّر is قياسيّ; ظاهر is سماعيّ', 'There is no real difference between them'], correct: 0 },
      ],
    },
  ],
};

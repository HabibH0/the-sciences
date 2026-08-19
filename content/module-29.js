// Module 29 — المستثنى (The Excepted Noun)
//
// Source: app-lessons/135-al-mustathna.md — a single file, but the most
// heading-dense in the whole app-lessons corpus (15 `##` headings), so it
// splits into 3 lessons per COURSE-MAP.md's proposal, one per rough third
// of the file: l1 covers headings 1-5 (تعريف، أركان، تام/غير تام،
// متصل/منقطع), l2 covers headings 6-10 (أحكام المستثنى منه، أدوات
// الاستثناء، أحكام المستثنى، إعراب المتصل، المستثنى المقدم), l3 covers
// headings 11-16 (إعراب بعد فعل استثناء، إعراب غير، إعراب المنقطع، حاشا،
// غير بمعنى إلا وإلا بمعنى غير، مسألة اللهم). Authored 2026-08-12,
// following the same process as Modules 01-03 — see AGENTS.md and
// content/README.md. Authored out of order: at the time this module was
// written, only Modules 24 and 28 existed on disk among 20-28 (concurrent
// sessions were authoring the rest of the العامل وغير العامل — الاسم and
// المعمول وغير المعمول — الاسم والفعل chapters), with 20-23 and 25-27
// still gaps. **NOT YET registered** in `content/annahw.js`'s `MODULES`
// array — that array is shared with concurrent sessions authoring the
// remaining modules in 20-28, and slotting 29 in ahead of them would put
// it at the wrong array position (array position, not id, drives unlock
// order). Wiring it in is left for a later merge pass once the 20-28
// range is complete, the same choice several earlier out-of-order
// modules made (see COURSE-MAP.md).
//
// l3's bank is intentionally leaner than l1/l2 (3 تركيب instead of 5-6):
// its six concepts cover mostly narrow special-case rulings (فعل
// استثناء, غير, حاشا) plus two Careful-box digressions the source itself
// flags as extending beyond المتن (المنقطع's بدل exception, لا إله إلا
// الله's two readings) and one Example-box curiosity (اللهم قبل إلا) —
// genuinely single-reading, cleanly parseable worked sentences run out
// faster there than in l1/l2, the same discipline every prior module in
// this course applied to its own thin spots rather than forcing تركيب
// items the source doesn't support.
export default {
  id: '29',
  title: 'المستثنى',
  heading: 'المعمول وغير المعمول',
  subheading: 'الاسم والفعل',
  blurb: 'المستثنى — the eighth of the منصوبات, its three أركان, the split into تام/غير تام and متصل/منقطع, the three grammatical types of أداة الاستثناء, and how إعراب المستثنى shifts across كلام موجب, غير موجب, تقديم, فعل استثناء, حاشا, and المنقطع.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'أركان المستثنى',
      subtitle: 'The Excepted Noun — its three أركان, then التام vs غير التام and المتصل vs المنقطع',
      sourceRef: 'app-lessons/135 (part 1)',
      concepts: [
        {
          heading: 'تعريف المستثنى',
          lines: [
            { html: `المستثنى ("the excepted noun") comes right after التمييز, as the eighth of the منصوبات. Unlike most of the منصوبات, which settle in a single tight rule, المستثنى opens out into an entire باب of its own — الاستثناء ("exception") — with its own أركان, its own family of أدوات, and a chain of أحكام spelling out how إعراب shifts depending on the kind of استثناء and which أداة is doing the work.`, list: false },
            { box: { title: 'Definition', lines: [`المُسْتَثْنَى: مَا أُخْرِجَ مِنْ حُكْمِ مَا قَبْلَهُ`] } },
            { html: `A <bdi>مستثنى</bdi> is a noun mentioned after an <bdi>أداة استثناء</bdi> (most often إلا) precisely in order to be pulled out of the حكم that applied to everything before it.`, list: false },
          ],
          exercise: {
            prompt: `المستثنى is defined as ما أُخرِج من حكم ما قبله. In plain terms, what does that mean?`,
            kind: 'mcq',
            options: [`A noun mentioned after an أداة استثناء precisely to be excluded from the ruling that applied to what came before it`, `A noun that always takes الجر regardless of context`, `Any noun that follows a حرف جر`, `A noun that can never be مبني`],
            correct: 0,
          },
        },
        {
          heading: 'أركان الاستثناء الثلاثة',
          lines: [
            { html: `الاستثناء rests on three pillars, illustrated by جَاءَ القَوْمُ إِلَّا زَيْدًا ("The people came, except Zayd").`, list: false },
            { box: { title: 'Rule', lines: [`لِلاسْتِثْنَاءِ ثَلَاثَةُ أَرْكَانٍ`] } },
            { html: `(1) <bdi>المستثنى منه</bdi> — that from which المستثنى is excluded (القوم, "the people"). (2) <bdi>أداة الاستثناء</bdi> — the exception-particle itself (إلا). (3) <bdi>المستثنى</bdi> — that which is excluded from the ruling (زيدًا, "Zayd").`, list: false },
            {
              tarkeebDiagram: {
                sentence: `جَاءَ القَوْمُ إِلَّا زَيْدًا`,
                translation: `The people came, except Zayd.`,
                cells: [`جَاءَ`, `القَوْمُ`, `إِلَّا`, `زَيْدًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ماض` }, { start: 1, end: 1, role: `مستثنى منه (فاعل مرفوع)` }, { start: 2, end: 2, role: `أداة استثناء` }, { start: 3, end: 3, role: `مستثنى منصوب` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In جَاءَ القَوْمُ إِلَّا زَيْدًا, زيدًا is the noun excluded from the ruling "coming" that applied to القوم. Which ركن من أركان الاستثناء is زيدًا؟`,
            kind: 'mcq',
            options: [`المستثنى`, `المستثنى منه`, `أداة الاستثناء`, `الموصوف`],
            correct: 0,
          },
        },
        {
          heading: 'الاستثناء التام وغير التام',
          lines: [
            { html: `الاستثناء falls into two kinds depending on whether المستثنى منه is actually mentioned.`, list: false },
            { box: { title: 'Rule', lines: [`التَّامُّ: ذُكِرَ المُسْتَثْنَى مِنْهُ. غَيْرُ التَّامِّ: لَمْ يُذْكَرِ المُسْتَثْنَى مِنْهُ`] } },
            { html: `(1) <bdi>التام</bdi> (also called <bdi>غير مفرَّغ</bdi>, "not emptied out"): المستثنى منه is actually mentioned, as in جَاءَ القَوْمُ إِلَّا زَيْدًا. (2) <bdi>غير التام</bdi> (also called <bdi>مفرَّغ</bdi>, "emptied out"): المستثنى منه is not mentioned, and this kind can only occur after a نفي (negation) or شبه نفي (something resembling negation).`, list: false },
            { html: `In غير التام, أداة الاستثناء becomes a mere <bdi>أداة حصر</bdi> (a restriction-particle) and does no grammatical work at all: it does not put المستثنى in النصب. Instead the noun after it takes whatever إعراب it would deserve in the جملة if the أداة were removed altogether.`, list: false },
            { box: { title: 'Example', lines: [`مَا مُحَمَّدٌ إِلَّا رَسُولٌ`] } },
            { html: `"Muhammad is nothing but a messenger" — i.e. مُحَمَّدٌ رَسُولٌ فَقَطْ.`, list: false },
            { html: `رسولٌ is مرفوع as خبر, exactly as it would be with إلا removed altogether.`, list: false },
            { box: { title: 'Example', lines: [`لَا نَعْبُدُ إِلَّا اللَّهَ`] } },
            { html: `"We worship none but Allah" — لَفْظُ الجَلالَةِ is منصوب as مفعول به of نعبد, again exactly the إعراب it would carry with إلا removed.`, list: false },
          ],
          exercise: {
            prompt: `In مَا مُحَمَّدٌ إِلَّا رَسُولٌ, رسولٌ is مرفوع. Since الاستثناء here is غير تام (المستثنى منه is not mentioned, and the sentence is negated), what does that tell you about إلا's own effect on رسولٌ's إعراب?`,
            kind: 'mcq',
            options: [`None — إلا is a mere أداة حصر here and does no grammatical work; رسولٌ is مرفوع as خبر just as it would be without إلا`, `إلا forces رسولٌ into النصب, but the ن of تنوين hides it`, `إلا forces رسولٌ into الجر`, `رسولٌ is مرفوع only because it begins with ر`],
            correct: 0,
          },
        },
        {
          heading: 'الاستثناء المتصل',
          lines: [
            { html: `الاستثناء التام itself splits into two further kinds, starting with المتصل.`, list: false },
            { box: { title: 'Rule', lines: [`المُتَّصِلُ: المُسْتَثْنَى مِنْ جِنْسِ المُسْتَثْنَى مِنْهُ`] } },
            { html: `In <bdi>المتصل</bdi> ("connected"), المستثنى belongs to the same جنس (kind/category) as المستثنى منه.`, list: false },
            { box: { title: 'Example', lines: [`ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ`] } },
            { html: `"Then you turned away, except a few of you." The "few" are of the very same kind — people who turned away — as المستثنى منه itself, so this is المتصل.`, list: false },
          ],
          exercise: {
            prompt: `﴿ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ﴾ excludes قليلًا منكم, people who did not turn away, from تولّيتم, the ones who did. Since both المستثنى and المستثنى منه are the same جنس — people addressed by the verse — which kind of استثناء تام is this?`,
            kind: 'mcq',
            options: [`المتصل`, `المنقطع`, `غير التام`, `المفرَّغ`],
            correct: 0,
          },
        },
        {
          heading: 'الاستثناء المنقطع',
          lines: [
            { box: { title: 'Rule', lines: [`المُنْقَطِعُ: المُسْتَثْنَى لَيْسَ مِنْ جِنْسِ المُسْتَثْنَى مِنْهُ`] } },
            { html: `In <bdi>المنقطع</bdi> ("disconnected"), المستثنى does not belong to the same جنس as المستثنى منه. This kind only ever arises when the surrounding speech would otherwise give the false impression (يُوهم) that المستثنى falls within the ruling of what precedes it, so the sentence needs a corrective aside (استدراك) to make clear that it does not. أداة الاستثناء then carries the meaning of استدراك — the sense of <bdi>لكن</bdi> ("but rather") — rather than its ordinary excluding sense.`, list: false },
            { box: { title: 'Example', lines: [`فَسَجَدُوا إِلَّا إِبْلِيسَ`] } },
            { html: `"So they [all] prostrated, except Iblīs." Iblīs is not of the same kind as those who prostrated; the sentence is phrased this way only to single him out from the general command to prostrate.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿فَسَجَدُوا إِلَّا إِبْلِيسَ﴾, إبليس never actually prostrated — he does not belong to the same جنس as those who did. What does إلا carry here, given that this is الاستثناء المنقطع؟`,
            kind: 'mcq',
            options: [`The meaning of استدراك — the sense of لكن — rather than its ordinary excluding sense`, `Its ordinary excluding sense, exactly as in المتصل`, `The meaning of حصر, with no عمل at all`, `The meaning of وصف, like غير`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines المستثنى?`, options: [`A noun excluded from the ruling of what came before it`, `A noun that always takes الرفع`, `Any noun following a حرف عطف`, `A noun that cannot be نكرة`], correct: 0 },
        { q: `الاستثناء rests on three أركان. Which three?`, options: [`المستثنى منه, أداة الاستثناء, المستثنى`, `الفاعل, المفعول به, الخبر`, `المبتدأ, الخبر, أداة الاستثناء`, `المستثنى, البدل, المنقطع`], correct: 0 },
        { q: `غير التام (المفرَّغ) — where المستثنى منه is not mentioned — can only occur after which kind of speech?`, options: [`نفي or شبه نفي`, `أمر مطلقًا`, `استفهام مطلقًا`, `Any speech at all, with no condition`], correct: 0 },
        { q: `In مَا مُحَمَّدٌ إِلَّا رَسُولٌ, what role does إلا play, and what does that make of رسولٌ's النصب by إلا?`, options: [`إلا is a mere أداة حصر with no عمل; رسولٌ is مرفوع as خبر, not منصوب by إلا at all`, `إلا governs رسولٌ into النصب as مستثنى`, `إلا governs رسولٌ into الجر`, `إلا has no meaning here at all`], correct: 0 },
        { q: `﴿ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ﴾ excludes a few people who share the very same جنس as those who turned away. Which kind of استثناء تام is this?`, options: [`المتصل`, `المنقطع`, `غير التام`, `Neither — this is غير تام`], correct: 0 },
        { q: `﴿فَسَجَدُوا إِلَّا إِبْلِيسَ﴾ singles out إبليس, who is not of the same جنس as those who prostrated. Why does this kind of استثناء arise at all, according to the rule for المنقطع?`, options: [`Because the surrounding speech would otherwise give the false impression that المستثنى falls under the same ruling, so it needs a corrective استدراك`, `Because إبليس is defined (معرفة)`, `Because the verb سجدوا is جمع`, `Because إلا always means لكن regardless of context`], correct: 0 },
      ],
      bank: [
        { title: `تعريف المستثنى`, kind: 'mcq', prompt: `ما أُخرِج من حكم ما قبله is the definition of which term?`, options: [`المستثنى`, `الموصوف`, `الصفة`, `المضاف إليه`], correct: 0 },
        { title: `المستثنى منه: تعريفه`, kind: 'mcq', prompt: `Of the three أركان الاستثناء, which one names the noun from which something is excluded?`, options: [`المستثنى منه`, `أداة الاستثناء`, `المستثنى`, `البدل`], correct: 0 },
        { title: `أداة الاستثناء: تعريفها`, kind: 'mcq', prompt: `Of the three أركان الاستثناء, which one is the exception-particle itself, such as إلا?`, options: [`أداة الاستثناء`, `المستثنى منه`, `المستثنى`, `المضاف`], correct: 0 },
        { title: `المستثنى: تعريفه`, kind: 'mcq', prompt: `Of the three أركان الاستثناء, which one names the noun actually excluded from the ruling?`, options: [`المستثنى`, `المستثنى منه`, `أداة الاستثناء`, `الخبر`], correct: 0 },
        { title: `جاء القوم إلا زيدًا: which ركن is زيدًا؟`, kind: 'mcq', prompt: `In جَاءَ القَوْمُ إِلَّا زَيْدًا, which ركن من أركان الاستثناء is زيدًا؟`, options: [`المستثنى`, `المستثنى منه`, `أداة الاستثناء`, `الفاعل الأصلي`], correct: 0 },
        { title: `جاء القوم إلا زيدًا: which ركن is القوم؟`, kind: 'mcq', prompt: `In جَاءَ القَوْمُ إِلَّا زَيْدًا, which ركن من أركان الاستثناء is القوم؟`, options: [`المستثنى منه`, `المستثنى`, `أداة الاستثناء`, `المفعول به`], correct: 0 },
        { title: `التام: الاسم الآخر`, kind: 'mcq', prompt: `الاستثناء التام, where المستثنى منه is actually mentioned, is also known by another name. What is it?`, options: [`غير مفرَّغ`, `مفرَّغ`, `المنقطع`, `أداة حصر`], correct: 0 },
        { title: `غير التام: الاسم الآخر`, kind: 'mcq', prompt: `الاستثناء غير التام, where المستثنى منه is not mentioned, is also known by another name. What is it?`, options: [`مفرَّغ`, `غير مفرَّغ`, `المتصل`, `أداة استثناء عاملة`], correct: 0 },
        { title: `شرط غير التام`, kind: 'mcq', prompt: `غير التام can only occur under one condition. What is it?`, options: [`The speech must be نفي or شبه نفي`, `المستثنى must be معرفة`, `أداة الاستثناء must be a فعل`, `There is no condition at all`], correct: 0 },
        { title: `غير التام: عمل إلا`, kind: 'mcq', prompt: `In الاستثناء غير التام, what happens to إلا's grammatical عمل?`, options: [`It becomes a mere أداة حصر and does no عمل at all`, `It governs المستثنى into النصب as usual`, `It governs المستثنى into الجر`, `It turns المستثنى into مبني`], correct: 0 },
        { title: `ما محمد إلا رسول: إعراب رسول`, kind: 'mcq', prompt: `In مَا مُحَمَّدٌ إِلَّا رَسُولٌ, why is رسولٌ مرفوع rather than منصوب?`, options: [`Because إلا here is غير تام and does no عمل; رسولٌ takes the إعراب it would have as خبر without إلا at all`, `Because رسولٌ is a اسم علم`, `Because إلا always leaves its noun مرفوع`, `Because محمدٌ is مبني`], correct: 0 },
        { title: `لا نعبد إلا الله: إعراب الله`, kind: 'mcq', prompt: `In لَا نَعْبُدُ إِلَّا اللَّهَ, why is لَفْظَ الجَلالَةِ منصوب?`, options: [`Because it takes the إعراب it would have as مفعول به of نعبد if إلا were removed — إلا itself does no عمل here`, `Because إلا governs it into النصب as مستثنى`, `Because كل اسم بعد إلا يكون منصوبًا دائمًا`, `Because لَفْظُ الجَلالَةِ is always منصوب`], correct: 0 },
        { title: `المتصل: تعريفه`, kind: 'mcq', prompt: `What defines الاستثناء المتصل؟`, options: [`المستثنى belongs to the same جنس as المستثنى منه`, `المستثنى منه is not mentioned`, `المستثنى belongs to a different جنس than المستثنى منه`, `إلا carries the meaning of لكن`], correct: 0 },
        { title: `توليتم إلا قليلا منكم: متصل`, kind: 'mcq', prompt: `﴿ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ﴾ excludes a few people from among those who turned away. Why is this المتصل rather than المنقطع?`, options: [`Because قليلًا منكم are of the very same جنس — people addressed by the verse — as those who turned away`, `Because قليلًا carries تنوين`, `Because the verb تولّيتم is مضارع`, `Because إلا here means لكن`], correct: 0 },
        { title: `المنقطع: تعريفه`, kind: 'mcq', prompt: `What defines الاستثناء المنقطع?`, options: [`المستثنى does not belong to the same جنس as المستثنى منه`, `المستثنى منه is not mentioned`, `المستثنى belongs to the same جنس as المستثنى منه`, `أداة الاستثناء is always حاشا`], correct: 0 },
        { title: `فسجدوا إلا إبليس: منقطع`, kind: 'mcq', prompt: `﴿فَسَجَدُوا إِلَّا إِبْلِيسَ﴾ singles out إبليس, who never prostrated. Why is this المنقطع rather than المتصل?`, options: [`Because إبليس is not of the same جنس as those who prostrated`, `Because إبليس is معرفة`, `Because the verb سجدوا is جمع`, `Because إلا here means حصر only`, ], correct: 0 },
        { title: `لماذا يقع المنقطع أصلًا`, kind: 'mcq', prompt: `المنقطع only arises under one specific condition. What is it?`, options: [`When the surrounding speech would otherwise give the false impression that المستثنى shares the ruling of what precedes it, requiring a corrective استدراك`, `Whenever المستثنى منه is not mentioned`, `Whenever إلا is preceded by كلام موجب`, `Whenever the sentence has no فعل at all`], correct: 0 },
        { title: `معنى إلا في المنقطع`, kind: 'mcq', prompt: `In الاستثناء المنقطع, what meaning does أداة الاستثناء carry?`, options: [`استدراك — the sense of لكن`, `Its ordinary excluding sense, unchanged`, `حصر only, with no عمل`, `وصف, the sense of غير`], correct: 0 },
        { title: `أقسام التام`, kind: 'mcq', prompt: `الاستثناء التام itself splits further into which two kinds?`, options: [`المتصل والمنقطع`, `المعرفة والنكرة`, `الموجب وغير الموجب`, `الحرف والفعل`], correct: 0 },
        {
          title: `تركيب: جَاءَ القَوْمُ إِلَّا زَيْدًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of جَاءَ القَوْمُ إِلَّا زَيْدًا, an example of الاستثناء التام.`,
          source: `جَاءَ القَوْمُ إِلَّا زَيْدًا`,
          words: [`جَاءَ`, `القَوْمُ`, `إِلَّا`, `زَيْدًا`],
          labels: [`فعل ماض`, `مستثنى منه (فاعل مرفوع)`, `أداة استثناء`, `مستثنى منصوب`],
          distractors: [`أداة حصر لا عمل لها`, `فاعل مرفوع`, `مستثنى منه`, `مستثنى مرفوع`, `بدل مرفوع`, `مفعول به منصوب`],
        },
        {
          title: `تركيب: مَا مُحَمَّدٌ إِلَّا رَسُولٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of مَا مُحَمَّدٌ إِلَّا رَسُولٌ, an example of الاستثناء غير التام.`,
          source: `مَا مُحَمَّدٌ إِلَّا رَسُولٌ`,
          words: [`مَا`, `مُحَمَّدٌ`, `إِلَّا`, `رَسُولٌ`],
          labels: [`نافية`, `مبتدأ مرفوع`, `أداة حصر لا عمل لها`, `خبر مرفوع`],
          distractors: [`أداة استثناء تعمل النصب`, `مستثنى منصوب`, `ما مصدرية`, `خبر منصوب`, `مبتدأ مؤخر`, `فعل مضارع وفاعله ضمير مستتر`],
        },
        {
          title: `تركيب: لَا نَعْبُدُ إِلَّا اللَّهَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of لَا نَعْبُدُ إِلَّا اللَّهَ, an example of الاستثناء غير التام.`,
          source: `لَا نَعْبُدُ إِلَّا اللَّهَ`,
          words: [`لَا`, `نَعْبُدُ`, `إِلَّا`, `اللَّهَ`],
          labels: [`نافية`, `فعل مضارع وفاعله ضمير مستتر`, `أداة حصر لا عمل لها`, `مفعول به منصوب`],
          distractors: [`مستثنى منصوب بإلا`, `فعل مضارع وفاعله ضمير مستتر تقديره هو`, `أداة استثناء تعمل النصب`, `لا الناهية`, `حرف جر`, `فعل ماضٍ`],
        },
        {
          title: `تركيب: ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ, an example of الاستثناء المتصل.`,
          source: `ثُمَّ تَوَلَّيْتُمْ إِلَّا قَلِيلًا مِّنكُمْ`,
          words: [`تَوَلَّيْتُمْ`, `إِلَّا`, `قَلِيلًا`, `مِّنكُمْ`],
          labels: [`فعل وفاعله (مستثنى منه)`, `أداة استثناء`, `مستثنى منصوب`, `جار ومجرور نعت لقليلًا`],
          distractors: [`أداة استثناء بمعنى الاستدراك`, `فعل وفاعله (واو الجماعة، مستثنى منه)`, `بدل مرفوع`, `مستثنى منه`, `أداة حصر لا عمل لها`, `نعت منصوب`],
        },
        {
          title: `تركيب: فَسَجَدُوا إِلَّا إِبْلِيسَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of فَسَجَدُوا إِلَّا إِبْلِيسَ, an example of الاستثناء المنقطع.`,
          source: `فَسَجَدُوا إِلَّا إِبْلِيسَ`,
          words: [`سَجَدُوا`, `إِلَّا`, `إِبْلِيسَ`],
          labels: [`فعل وفاعله (واو الجماعة، مستثنى منه)`, `أداة استثناء بمعنى الاستدراك`, `مستثنى منصوب`],
          distractors: [`فعل وفاعله (مستثنى منه)`, `أداة استثناء`, `بدل من المستثنى منه`, `مستثنى منه`, `أداة حصر لا عمل لها`, `فعل ماضٍ وفاعله ضمير متصل (مستثنى منه)`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أدوات الاستثناء',
      subtitle: 'The Tools of Exception — أداة الاستثناء as حرف, فعل, or اسم, and إعراب المستثنى across موجب, غير موجب, and تقديم',
      sourceRef: 'app-lessons/135 (part 2)',
      concepts: [
        {
          heading: 'أحكام المستثنى منه',
          lines: [
            { html: `Not every noun can serve as المستثنى منه. It must be one of two things.`, list: false },
            { box: { title: 'Rule', lines: [`المُسْتَثْنَى مِنْهُ: مَعْرِفَةٌ أَوْ نَكِرَةٌ مُفِيدَةٌ`] } },
            { html: `(1) <bdi>معرفة</bdi> (definite), as in جَاءَ القَوْمُ إِلَّا أَحْمَدَ. (2) <bdi>نكرة مفيدة</bdi> — an indefinite noun that still conveys real information, specified enough to remove its ambiguity — as in مَا جَاءَ أَحَدٌ إِلَّا أَحْمَدَ.`, list: false },
            { box: { title: 'Careful', lines: [`جَاءَ قَوْمٌ إِلَّا خَالِدًا: نَكِرَةٌ غَيْرُ مُفِيدَةٍ فَلا يَصِحُّ`] } },
            { html: `In جَاءَ قَوْمٌ إِلَّا خَالِدًا, قومٌ is a plain, uninformative نكرة (<bdi>نكرة غير مفيدة</bdi>) — it says nothing more specific than "some people" — so الاستثناء cannot be built on it in this form.`, list: false },
          ],
          exercise: {
            prompt: `جَاءَ قَوْمٌ إِلَّا خَالِدًا is not a valid استثناء in this form, even though قومٌ is a real noun. Why not?`,
            kind: 'mcq',
            options: [`قومٌ is a نكرة غير مفيدة — it conveys no specific information — and المستثنى منه must be معرفة or نكرة مفيدة`, `Because خالدًا is مبني`, `Because إلا cannot follow a فعل`, `Because قومٌ is جمع`],
            correct: 0,
          },
        },
        {
          heading: 'أدوات الاستثناء الثلاثة',
          lines: [
            { html: `أداة الاستثناء falls into three grammatical categories.`, list: false },
            { table: { title: 'أدوات الاستثناء', headers: ['Category', 'Words'], rows: [
              [`حرف`, `إلا (الأصل — the default of the whole باب), حاشا`],
              [`فعل`, `خلا، عدا، ما خلا، ما عدا، ليس، لا يكون`],
              [`اسم`, `غير، سوى`],
            ] } },
            { box: { title: 'Example', lines: [`مَا أَنْهَرَ الدَّمَ وَذُكِرَ اسْمُ اللَّهِ عَلَيْهِ فَكُلْ، لَيْسَ السِّنَّ وَالظُّفُرَ`] } },
            { html: `From the hadith: "Whatever causes blood to flow and over which Allah's Name has been mentioned, eat of it — other than [what was done with] the tooth or the claw." Here ليس functions as أداة استثناء من نوع الفعل.`, list: false },
            { box: { title: 'Careful', lines: [`خَلَا وَعَدَا: أَفْعَالٌ عِنْدَ الأَكْثَرِ، وَقَدْ يَكُونَانِ حَرْفَيْ جَرٍّ عِنْدَ البَعْضِ. مَعَ "مَا": أَفْعَالٌ بِاتِّفَاقٍ`] } },
            { html: `النحاة disagree over خلا and عدا: الأكثر (the majority) hold they are always أفعال, putting what follows them in النصب as a مفعول; البعض (some) allow them to also function as حرفا جر, putting what follows them in الجر instead. Once preceded by ما (ما خلا، ما عدا), they are أفعال باتفاق الجميع (by unanimous agreement) — because this ما is مصدرية, and مصدرية ما attaches only to verbs, never to nouns or particles.`, list: false },
          ],
          exercise: {
            prompt: `Once خلا or عدا is preceded by ما (as in ما خلا, ما عدا), النحاة agree — with no dispute at all — that both are أفعال. Why does adding ما settle the disagreement?`,
            kind: 'mcq',
            options: [`Because this ما is مصدرية, and مصدرية ما attaches only to verbs, never to nouns or particles`, `Because ما always precedes حروف الجر`, `Because ما changes خلا and عدا into أسماء`, `Because ما removes their عمل entirely`],
            correct: 0,
          },
        },
        {
          heading: 'أحكام المستثنى',
          lines: [
            { html: `المستثنى itself is also restricted to two kinds of noun.`, list: false },
            { box: { title: 'Rule', lines: [`المُسْتَثْنَى: مَعْرِفَةٌ أَوْ نَكِرَةٌ مَخْصُوصَةٌ`] } },
            { html: `(1) <bdi>معرفة</bdi>, as in جَاءَ القَوْمُ إِلَّا زَيْدًا. (2) <bdi>نكرة مخصوصة</bdi> — an indefinite noun qualified or described in a way that removes its ambiguity — as in جَاءَ القَوْمُ إِلَّا رَجُلًا مَرِيضًا ("...except a sick man"), or إِلَّا رَجُلَ سُوءٍ ("...except an evil man").`, list: false },
            { box: { title: 'Careful', lines: [`جَاءَ القَوْمُ إِلَّا رَجُلًا: نَكِرَةٌ غَيْرُ مَخْصُوصَةٍ فَلا يَصِحُّ`] } },
            { html: `In جَاءَ القَوْمُ إِلَّا رَجُلًا, رجلًا is an unqualified نكرة (<bdi>نكرة غير مخصوصة</bdi>), so this is not valid — nothing in the wording narrows down which رجل is meant.`, list: false },
          ],
          exercise: {
            prompt: `جَاءَ القَوْمُ إِلَّا رَجُلًا مَرِيضًا is valid, but جَاءَ القَوْمُ إِلَّا رَجُلًا on its own is not. What makes the difference?`,
            kind: 'mcq',
            options: [`مَرِيضًا qualifies رجلًا into a نكرة مخصوصة; bare رجلًا is a نكرة غير مخصوصة with no qualification`, `مَرِيضًا adds تنوين that رجلًا otherwise lacks`, `مَرِيضًا changes رجلًا from منصوب to مرفوع`, `القوم must be repeated before a valid المستثنى`],
            correct: 0,
          },
        },
        {
          heading: 'إعراب المستثنى في كلام موجَب',
          lines: [
            { html: `In الاستثناء المتصل, إعراب المستثنى depends on whether the surrounding speech is negated.`, list: false },
            { box: { title: 'Rule', lines: [`فِي كَلَامٍ مُوجَبٍ: يَجِبُ نَصْبُ المُسْتَثْنَى`] } },
            { html: `In <bdi>كلام موجَب</bdi> (affirmative, non-negated speech), النصب is obligatory (يجب) — there is no alternative reading.`, list: false },
            { box: { title: 'Example', lines: [`فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ`] } },
            { html: `"So they drank from it, except a few of them." شربوا منه is كلام موجَب — nothing negates it — so قليلًا is منصوب وجوبًا, with no other option.`, list: false },
          ],
          exercise: {
            prompt: `﴿فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ﴾ is كلام موجَب — the verb شربوا is not negated. What does the rule for موجَب speech require of قليلًا's إعراب?`,
            kind: 'mcq',
            options: [`نصب وجوبًا — النصب is the only option, with no alternative reading`, `الرفع فقط`, `الجر فقط`, `نصب أو بدل, exactly as in negated speech`],
            correct: 0,
          },
        },
        {
          heading: 'إعراب المستثنى في كلام غير موجَب',
          lines: [
            { html: `In negated speech, المستثنى has more than one valid إعراب.`, list: false },
            { box: { title: 'Rule', lines: [`فِي كَلَامٍ غَيْرِ مُوجَبٍ: النَّصْبُ أَوِ البَدَلُ مِنَ المُسْتَثْنَى مِنْهُ`] } },
            { html: `In <bdi>كلام غير موجَب</bdi> (negated speech), two options (وجهان) are permitted: (1) <bdi>النصب</bdi>, or (2) <bdi>البدل من المستثنى منه</bdi> — taking بدل status from المستثنى منه, and thereby its very إعراب.`, list: false },
            { box: { title: 'Example', lines: [`وَلَا يَلْتَفِتْ مِنكُمْ أَحَدٌ إِلَّا امْرَأَتَكَ`] } },
            { html: `"And let none of you look back, except your wife." يلتفت is negated by لا, so this is كلام غير موجَب; امرأتَكَ takes وجه النصب.`, list: false },
            { box: { title: 'Example', lines: [`مَا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ`] } },
            { html: `"They did not do it, except a few of them." قليلٌ takes وجه البدل here: it is مرفوع because it stands as بدل for the مرفوع واو الجماعة hidden inside فَعَلُوهُ.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿مَا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ﴾, قليلٌ is مرفوع even though it follows إلا. Why is that a valid reading in كلام غير موجَب, and what is قليلٌ بدل من؟`,
            kind: 'mcq',
            options: [`Negated speech allows البدل من المستثنى منه; قليلٌ is بدل من الواو المستترة في فَعَلُوهُ, taking its مرفوع إعراب`, `قليلٌ is always مرفوع regardless of context`, `إلا governs المستثنى into الرفع in negated speech`, `فَعَلُوهُ has no فاعل at all, so قليلٌ becomes the فاعل`],
            correct: 0,
          },
        },
        {
          heading: 'المستثنى المقدَّم',
          lines: [
            { box: { title: 'Rule', lines: [`إِذَا تَقَدَّمَ المُسْتَثْنَى عَلَى المُسْتَثْنَى مِنْهُ وَجَبَ نَصْبُهُ`] } },
            { html: `If المستثنى is fronted ahead of المستثنى منه, النصب becomes obligatory (وجب), regardless of موجَب vs غير موجَب.`, list: false },
            { box: { title: 'Example', lines: [`وَمَا لِي إِلَّا آلَ أَحْمَدَ شِيعَةٌ`] } },
            { html: `"I have no partisans except the family of Ahmad." شيعةٌ (المستثنى منه) comes after آلَ أحمدَ (المستثنى) rather than before it, so آلَ أحمدَ is منصوب وجوبًا — البدل is not available once المستثنى has been fronted.`, list: false },
          ],
          exercise: {
            prompt: `In وَمَا لِي إِلَّا آلَ أَحْمَدَ شِيعَةٌ, آلَ أحمدَ (المستثنى) is fronted ahead of شيعةٌ (المستثنى منه). What does the rule المستثنى المقدَّم require of آلَ أحمدَ's إعراب?`,
            kind: 'mcq',
            options: [`نصب وجوبًا — fronting المستثنى makes النصب obligatory, with البدل no longer available`, `الرفع, since it now comes first in the جملة`, `النصب أو البدل, exactly as in ordinary negated speech`, `الجر, since it resembles a مضاف إليه`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `المستثنى منه must be one of two things. Which pairing is correct?`, options: [`معرفة أو نكرة مفيدة`, `معرفة أو نكرة مخصوصة`, `مذكر أو مؤنث`, `مفرد أو جمع فقط`], correct: 0 },
        { q: `أداة الاستثناء falls into three grammatical categories. Which one does غير belong to?`, options: [`اسم`, `حرف`, `فعل`, `ظرف`], correct: 0 },
        { q: `المستثنى itself must be one of two things. Which pairing is correct?`, options: [`معرفة أو نكرة مخصوصة`, `معرفة أو نكرة مفيدة`, `مبني أو معرب فقط`, `مذكر أو مؤنث`], correct: 0 },
        { q: `In كلام موجَب (affirmative, non-negated speech), what is required of المستثنى's إعراب in الاستثناء المتصل؟`, options: [`النصب وجوبًا, with no alternative`, `الرفع وجوبًا`, `النصب أو البدل`, `الجر إن كانت الأداة حرفًا`], correct: 0 },
        { q: `In كلام غير موجَب (negated speech), which two options (وجهان) are permitted for المستثنى in الاستثناء المتصل؟`, options: [`النصب أو البدل من المستثنى منه`, `الرفع أو الجر`, `النصب وجوبًا فقط`, `البدل وجوبًا فقط`], correct: 0 },
        { q: `If المستثنى is fronted ahead of المستثنى منه, what does the rule المستثنى المقدَّم require?`, options: [`نصب وجوبًا`, `رفع وجوبًا`, `النصب أو البدل, exactly as when not fronted`, `جر وجوبًا`], correct: 0 },
      ],
      bank: [
        { title: `مستثنى منه: معرفة`, kind: 'mcq', prompt: `In جَاءَ القَوْمُ إِلَّا أَحْمَدَ, القومُ is المستثنى منه and is معرفة. Is that a valid basis for الاستثناء?`, options: [`Yes — معرفة is one of the two valid kinds of المستثنى منه`, `No — المستثنى منه must always be نكرة`, `Only if أحمدَ is also معرفة`, `No — أل must appear on المستثنى منه`], correct: 0 },
        { title: `مستثنى منه: نكرة مفيدة`, kind: 'mcq', prompt: `In مَا جَاءَ أَحَدٌ إِلَّا أَحْمَدَ, أحدٌ is نكرة but still conveys real information once narrowed by الاستثناء. What is that kind of نكرة called?`, options: [`نكرة مفيدة`, `نكرة غير مفيدة`, `نكرة مخصوصة`, `نكرة غير مخصوصة`], correct: 0 },
        { title: `جاء قوم إلا خالدًا: لماذا لا يصح`, kind: 'mcq', prompt: `جَاءَ قَوْمٌ إِلَّا خَالِدًا is invalid in this form. What is قومٌ, and why does that make it invalid as المستثنى منه?`, options: [`قومٌ is a نكرة غير مفيدة — it conveys no specific information — and غير مفيدة نكرة cannot serve as المستثنى منه`, `قومٌ is معرفة, and معرفة cannot serve as المستثنى منه`, `قومٌ lacks تنوين`, `خالدًا is مبني, which invalidates the whole sentence`], correct: 0 },
        { title: `أداة استثناء كحرف`, kind: 'mcq', prompt: `إلا is the أصل of the whole باب الاستثناء. Which other word is also classified as أداة استثناء من نوع الحرف?`, options: [`حاشا`, `خلا`, `غير`, `سوى`], correct: 0 },
        { title: `أداة استثناء كاسم`, kind: 'mcq', prompt: `Two words are classified as أداة استثناء من نوع الاسم. Which pairing is correct?`, options: [`غير وسوى`, `خلا وعدا`, `إلا وحاشا`, `ليس ولا يكون`], correct: 0 },
        { title: `ليس السن والظفر: أداة استثناء`, kind: 'mcq', prompt: `In the hadith مَا أَنْهَرَ الدَّمَ ... فَكُلْ، لَيْسَ السِّنَّ وَالظُّفُرَ, ليس functions as أداة استثناء. Which grammatical category does it belong to?`, options: [`فعل`, `حرف`, `اسم`, `ظرف`], correct: 0 },
        { title: `خلا وعدا: رأي الأكثر`, kind: 'mcq', prompt: `According to الأكثر من النحاة, what are خلا and عدا always classified as?`, options: [`أفعال, putting what follows them in النصب`, `حرفا جر, putting what follows them in الجر`, `أسماء, مبنية على الفتح`, `ظرفا زمان`], correct: 0 },
        { title: `ما خلا وما عدا: اتفاق النحاة`, kind: 'mcq', prompt: `Once خلا or عدا is preceded by ما, all النحاة agree they are أفعال. What role does ما play that produces this unanimous agreement?`, options: [`It is ما مصدرية, and مصدرية ما attaches only to verbs — never to nouns or particles`, `It negates خلا and عدا`, `It turns خلا and عدا into حروف جر`, `It has no grammatical role, only rhetorical emphasis`], correct: 0 },
        { title: `مستثنى: معرفة`, kind: 'mcq', prompt: `In جَاءَ القَوْمُ إِلَّا زَيْدًا, زيدًا is معرفة. Is that a valid basis for المستثنى?`, options: [`Yes — معرفة is one of the two valid kinds of المستثنى`, `No — المستثنى must always be نكرة`, `Only if القومُ is also نكرة`, `No — أل must appear on المستثنى`], correct: 0 },
        { title: `مستثنى: نكرة مخصوصة`, kind: 'mcq', prompt: `In جَاءَ القَوْمُ إِلَّا رَجُلًا مَرِيضًا, رجلًا مريضًا is a valid المستثنى even though رجلًا alone is a نكرة. What made it valid?`, options: [`مريضًا qualifies رجلًا, turning it into a نكرة مخصوصة`, `مريضًا removes رجلًا's تنوين`, `مريضًا changes رجلًا's إعراب to الرفع`, `Nothing — رجلًا alone was already valid`], correct: 0 },
        { title: `جاء القوم إلا رجلًا: لماذا لا يصح`, kind: 'mcq', prompt: `جَاءَ القَوْمُ إِلَّا رَجُلًا, with no further qualification on رجلًا, is invalid. Why?`, options: [`رجلًا is نكرة غير مخصوصة — nothing in the wording narrows down which رجل is meant`, `رجلًا is معرفة, which cannot serve as المستثنى`, `رجلًا lacks a فعل before it`, `القومُ must be نكرة for الاستثناء to work`], correct: 0 },
        { title: `فشربوا منه إلا قليلا منهم: كلام موجَب`, kind: 'mcq', prompt: `﴿فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ﴾ is not negated. Under the rule for كلام موجَب, is البدل an available reading for قليلًا here?`, options: [`No — in كلام موجَب النصب is obligatory, with no alternative`, `Yes — البدل is always available regardless of negation`, `Yes, but only if قليلًا is معرفة`, `No — الرفع is obligatory instead`], correct: 0 },
        { title: `ولا يلتفت منكم أحد إلا امرأتك: وجه النصب`, kind: 'mcq', prompt: `﴿وَلَا يَلْتَفِتْ مِنكُمْ أَحَدٌ إِلَّا امْرَأَتَكَ﴾ is negated by لا. Which وجه إعراب does امرأتَكَ take here?`, options: [`النصب`, `الرفع بالبدلية فقط`, `الجر`, `لا يجوز فيها إلا البناء`], correct: 0 },
        { title: `وجهان في كلام غير موجَب`, kind: 'mcq', prompt: `In negated speech (كلام غير موجَب), what are the two permitted readings (وجهان) for المستثنى in الاستثناء المتصل?`, options: [`النصب, or البدل من المستثنى منه`, `الرفع, or الجر`, `النصب وجوبًا فقط`, `البدل وجوبًا فقط`], correct: 0 },
        { title: `المستثنى المقدَّم: القاعدة العامة`, kind: 'mcq', prompt: `When المستثنى is fronted ahead of المستثنى منه, what does the rule require, regardless of whether the surrounding speech is موجَب or غير موجَب?`, options: [`نصب وجوبًا`, `النصب أو البدل, exactly as in ordinary غير موجَب speech`, `رفع وجوبًا`, `Whatever إعراب المستثنى منه would have taken`], correct: 0 },
        { title: `التقديم يمنع البدل`, kind: 'mcq', prompt: `In ordinary غير موجَب speech, البدل من المستثنى منه is one valid reading. Once المستثنى is fronted ahead of المستثنى منه (المستثنى المقدَّم), is البدل still available?`, options: [`No — fronting removes البدل as an option; النصب becomes obligatory instead`, `Yes — fronting has no effect on which وجهان are available`, `Yes, but only if المستثنى منه is معرفة`, `البدل becomes obligatory instead of النصب`], correct: 0 },
        { title: `أدوات الاستثناء: تصنيف عام`, kind: 'mcq', prompt: `Which of these three classifications does خلا belong to, when it is parsed as أداة استثناء?`, options: [`فعل`, `حرف`, `اسم`, `ظرف`], correct: 0 },
        {
          title: `تركيب: مَا جَاءَ أَحَدٌ إِلَّا أَحْمَدَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of مَا جَاءَ أَحَدٌ إِلَّا أَحْمَدَ, where المستثنى منه is a نكرة مفيدة.`,
          source: `مَا جَاءَ أَحَدٌ إِلَّا أَحْمَدَ`,
          words: [`مَا`, `جَاءَ أَحَدٌ`, `إِلَّا`, `أَحْمَدَ`],
          labels: [`نافية`, `فعل ومستثنى منه (فاعل مرفوع)`, `أداة استثناء`, `مستثنى منصوب`],
          distractors: [`فعل ومستثنى منه (فاعل منصوب)`, `مستثنى مرفوع`, `بدل مرفوع`, `ما مصدرية`, `أداة حصر لا عمل لها`, `مستثنى منه`],
        },
        {
          title: `تركيب: جَاءَ القَوْمُ إِلَّا رَجُلًا مَرِيضًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of جَاءَ القَوْمُ إِلَّا رَجُلًا مَرِيضًا, where المستثنى is a نكرة مخصوصة.`,
          source: `جَاءَ القَوْمُ إِلَّا رَجُلًا مَرِيضًا`,
          words: [`جَاءَ القَوْمُ`, `إِلَّا`, `رَجُلًا`, `مَرِيضًا`],
          labels: [`فعل ومستثنى منه (فاعل مرفوع)`, `أداة استثناء`, `مستثنى منصوب`, `نعت منصوب لرجلًا`],
          distractors: [`فعل ومستثنى منه (فاعل منصوب)`, `حال منصوب`, `مستثنى منه`, `بدل مرفوع`, `أداة حصر لا عمل لها`, `نعت منصوب لمستثنى منه`],
        },
        {
          title: `تركيب: فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ, an example of الاستثناء in كلام موجَب.`,
          source: `فَشَرِبُوا مِنْهُ إِلَّا قَلِيلًا مِّنْهُمْ`,
          words: [`شَرِبُوا مِنْهُ`, `إِلَّا`, `قَلِيلًا`, `مِّنْهُمْ`],
          labels: [`فعل وفاعله وجار ومجرور`, `أداة استثناء`, `مستثنى منصوب وجوبًا`, `جار ومجرور نعت لقليلًا`],
          distractors: [`بدل مرفوع`, `مستثنى منه`, `مستثنى منصوب أو بدل`, `أداة حصر لا عمل لها`, `جار ومجرور متعلق بالفعل`, `فعل وفاعله`],
        },
        {
          title: `تركيب: وَلَا يَلْتَفِتْ مِنكُمْ أَحَدٌ إِلَّا امْرَأَتَكَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَلَا يَلْتَفِتْ مِنكُمْ أَحَدٌ إِلَّا امْرَأَتَكَ, taking المستثنى on وجه النصب.`,
          source: `لَا يَلْتَفِتْ مِنكُمْ أَحَدٌ إِلَّا امْرَأَتَكَ`,
          words: [`لَا يَلْتَفِتْ`, `مِنكُمْ`, `أَحَدٌ`, `إِلَّا`, `امْرَأَتَكَ`],
          labels: [`فعل نهي`, `جار ومجرور`, `مستثنى منه (فاعل مرفوع)`, `أداة استثناء`, `مستثنى منصوب`],
          distractors: [`بدل مرفوع`, `مفعول به`, `فعل مضارع`, `مستثنى منه`, `جار ومجرور متعلق بالفعل`, `أداة حصر لا عمل لها`],
        },
        {
          title: `تركيب: مَا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of مَا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ, taking المستثنى on وجه البدل.`,
          source: `مَا فَعَلُوهُ إِلَّا قَلِيلٌ مِّنْهُمْ`,
          words: [`مَا`, `فَعَلُوهُ`, `إِلَّا`, `قَلِيلٌ`, `مِّنْهُمْ`],
          labels: [`نافية`, `فعل وفاعل ومفعول به`, `أداة استثناء`, `بدل مرفوع من الواو`, `جار ومجرور نعت لقليل`],
          distractors: [`مستثنى منصوب`, `مستثنى منه`, `ما مصدرية`, `بدل مرفوع من مفعوله`, `فعل وفاعل`, `جار ومجرور متعلق بالفعل`],
        },
        {
          title: `تركيب: وَمَا لِي إِلَّا آلَ أَحْمَدَ شِيعَةٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَمَا لِي إِلَّا آلَ أَحْمَدَ شِيعَةٌ, an example of المستثنى المقدَّم.`,
          source: `مَا لِي إِلَّا آلَ أَحْمَدَ شِيعَةٌ`,
          words: [`مَا`, `لِي`, `إِلَّا`, `آلَ أَحْمَدَ`, `شِيعَةٌ`],
          labels: [`نافية`, `جار ومجرور خبر مقدم`, `أداة استثناء`, `مستثنى منصوب وجوبًا (مضاف ومضاف إليه)`, `مبتدأ مؤخر`],
          distractors: [`مستثنى منصوب أو بدل (مضاف ومضاف إليه)`, `بدل مرفوع`, `مستثنى منه`, `مضاف إليه`, `خبر مقدم`, `مستثنى منصوب`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'حاشا وغير',
      subtitle: 'Special Rulings — فعل استثناء, حاشا, the غير/إلا interchange, and المستثنى in المنقطع',
      sourceRef: 'app-lessons/135 (part 3)',
      concepts: [
        {
          heading: 'إعراب المستثنى بعد فعل استثناء',
          lines: [
            { box: { title: 'Rule', lines: [`بَعْدَ فِعْلِ اسْتِثْنَاءٍ: المُسْتَثْنَى مَنْصُوبٌ عَلَى المَفْعُولِيَّةِ`] } },
            { html: `After a <bdi>فعل استثناء</bdi> (خلا، عدا, and the like, whenever they are parsed as verbs), المستثنى is <bdi>منصوب على المفعولية</bdi> (accusative, as a direct object) — the ordinary إعراب a فعل gives its مفعول به, nothing special to الاستثناء.`, list: false },
            { box: { title: 'Example', lines: [`أَلَا كُلُّ شَيْءٍ مَا خَلَا اللَّهَ بَاطِلٌ`] } },
            { html: `"Indeed everything, save Allah, is vanity." ما here is ما مصدرية, and خلا is فعل ماضٍ; لَفْظَ الجَلالَةِ is its مفعول به, منصوب — exactly as any ordinary فعل متعدٍ would put its مفعول به in النصب.`, list: false },
          ],
          exercise: {
            prompt: `In أَلَا كُلُّ شَيْءٍ مَا خَلَا اللَّهَ بَاطِلٌ, لَفْظَ الجَلالَةِ is منصوب following the فعل خلا. What kind of النصب is this?`,
            kind: 'mcq',
            options: [`منصوب على المفعولية — the same ordinary النصب any فعل متعدٍ gives its مفعول به`, `منصوب على أنه مستثنى بإلا`, `منصوب على الحال`, `منصوب على أنه بدل من كل شيء`],
            correct: 0,
          },
        },
        {
          heading: 'إعراب غير إذا كانت للاستثناء',
          lines: [
            { box: { title: 'Rule', lines: [`إِعْرَابُ غَيْرٍ كَإِعْرَابِ المُسْتَثْنَى بَعْدَ إِلَّا، وَمَا بَعْدَهَا مَجْرُورٌ دَائِمًا بِالإِضَافَةِ`] } },
            { html: `إعراب غير here mirrors the إعراب of المستثنى after إلا — the same rules already given for موجَب, غير موجَب, and تقديم apply to it depending on its position — while whatever follows غير is always <bdi>مجرور</bdi> by الإضافة to it.`, list: false },
            { box: { title: 'Example', lines: [`جَاءَ الأَوْلَادُ غَيْرَ زَيْدٍ`] } },
            { html: `جاء الأولاد is كلام موجَب, so غيرَ takes the same إعراب المستثنى would take there — النصب وجوبًا — while زيدٍ, what follows غير, is مجرور بالإضافة.`, list: false },
          ],
          exercise: {
            prompt: `In جَاءَ الأَوْلَادُ غَيْرَ زَيْدٍ, غيرَ is منصوب and زيدٍ is مجرور. What decides each word's إعراب?`,
            kind: 'mcq',
            options: [`غيرَ takes whatever إعراب المستثنى would take in this position (هنا: النصب, لأنه كلام موجَب); زيدٍ is always مجرور بالإضافة to غير`, `Both words are always منصوب regardless of context`, `غيرَ is always مجرور; زيدٍ is always منصوب`, `غيرَ's إعراب depends only on تنوين, not on موجَب/غير موجَب`],
            correct: 0,
          },
        },
        {
          heading: 'إعراب المستثنى في المنقطع',
          lines: [
            { box: { title: 'Rule', lines: [`فِي المُنْقَطِعِ: المُسْتَثْنَى مَنْصُوبٌ دَائِمًا، وَلا يَجُوزُ فِيهِ البَدَلُ`] } },
            { html: `In الاستثناء المنقطع, المستثنى is always <bdi>منصوب</bdi> — البدل is never available, unlike in غير موجَب المتصل, since المستثنى here is not even the same جنس as المستثنى منه and so cannot stand as بدل for it.`, list: false },
            { box: { title: 'Careful', lines: [`مَسْأَلَتَانِ زَائِدَتَانِ عَنْ نَصِّ المَتْنِ: إِلَّا بِمَعْنَى "لَكِنْ"، وَجَوَازُ البَدَلِ عِنْدَ بَنِي تَمِيمٍ`] } },
            { html: `Two further points were raised at this stage from the words of أهل العلم — not from the explicit wording of المتن itself. Some hold إلا in المنقطع carries the meaning of لكن directly, as in ﴿لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ ۝ إِلَّا مَن تَوَلَّىٰ وَكَفَرَ﴾ — "You are not a controller over them, except him who turns away and disbelieves." It is also reported that بنو تميم permitted البدل even in المنقطع, against الأصل, as in وَرُبَّةَ لَيْسَ بِهَا أَنِيسٌ إِلَّا اليَعَافِيرُ وَإِلَّا العِيسُ. These extend the discussion beyond المتن and are not its explicit لفظ.`, list: false },
          ],
          exercise: {
            prompt: `Per الأصل — the rule stated directly in المتن — is البدل ever available for المستثنى in الاستثناء المنقطع?`,
            kind: 'mcq',
            options: [`No — المستثنى is always منصوب in المنقطع; البدل is never available per الأصل (بنو تميم's use of it is reported as a departure from الأصل, not the rule itself)`, `Yes — البدل is always available in المنقطع, exactly as in غير موجَب المتصل`, `Yes, but only when المستثنى منه is نكرة`, `البدل is obligatory in المنقطع, and النصب is never available`],
            correct: 0,
          },
        },
        {
          heading: 'معنى حاشا وإعراب ما بعدها',
          lines: [
            { box: { title: 'Rule', lines: [`حَاشَا لِلاسْتِثْنَاءِ مَعَ تَنْزِيهِ المُسْتَثْنَى، وَمَا بَعْدَهَا مَجْرُورٌ دَائِمًا`] } },
            { html: `<bdi>حاشا</bdi> is set aside for الاستثناء together with <bdi>تنزيه المستثنى</bdi> — explicitly clearing المستثنى from what applies to everything else. What follows it is always <bdi>مجرور</bdi>.`, list: false },
            { box: { title: 'Example', lines: [`كُلُّ بَنِي آدَمَ خَطَّاؤُونَ حَاشَا الأَنْبِيَاءِ`] } },
            { html: `"All the children of Adam are sinners, except the prophets." الأنبياءِ is مجرور بحاشا — unlike المستثنى بإلا, which is normally منصوب, حاشا always leaves its noun مجرور.`, list: false },
          ],
          exercise: {
            prompt: `In كُلُّ بَنِي آدَمَ خَطَّاؤُونَ حَاشَا الأَنْبِيَاءِ, what is الأنبياءِ's إعراب after حاشا, and does this ever change depending on موجَب vs غير موجَب — the way المستثنى بإلا does?`,
            kind: 'mcq',
            options: [`الأنبياءِ is مجرور — what follows حاشا is always مجرور, with no dependence on موجَب/غير موجَب`, `الأنبياءِ is منصوب, exactly as with إلا`, `الأنبياءِ's إعراب shifts between النصب and الجر depending on موجَب/غير موجَب, just like إلا`, `الأنبياءِ is مرفوع, since حاشا has no عمل`],
            correct: 0,
          },
        },
        {
          heading: 'غير بمعنى إلا، وإلا بمعنى غير',
          lines: [
            { html: `غير and إلا can each borrow the other's usual sense.`, list: false },
            { box: { title: 'Rule', lines: [`غَيْرٌ أَصْلُهَا لِلْوَصْفِ وَقَدْ تَأْتِي لِلاسْتِثْنَاءِ، وَإِلَّا أَصْلُهَا لِلاسْتِثْنَاءِ وَقَدْ تَأْتِي لِلصِّفَةِ`] } },
            { html: `<bdi>غير</bdi> is originally used <bdi>للوصف</bdi> (as a descriptive adjective), as in ﴿لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ﴾ — "Do not enter houses other than your own houses" — but may also be used للاستثناء, as already seen in جَاءَ الأَوْلَادُ غَيْرَ زَيْدٍ. <bdi>إلا</bdi> is originally used للاستثناء, but may also be used <bdi>للصفة</bdi>, with the meaning of غير — as in الناس هلكى إلا العالمون، والعالمون هلكى إلا العاملون، والعاملون هلكى إلا المخلصون ("Mankind is doomed, except the learned; the learned are doomed, except those who act; and those who act are doomed, except the sincere"), and in ﴿لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا﴾.`, list: false },
            { box: { title: 'Careful', lines: [`لَا إِلَهَ إِلَّا اللهُ: تَحْتَمِلُ الوَصْفَ وَتَحْتَمِلُ الاسْتِثْنَاءَ غَيْرَ التَّامِّ`] } },
            { html: `لا إله إلا الله admits two possible إعراب readings: either إلا لَفْظُ الجَلالَةِ is وصف with the meaning of غير (the sense is "no god other than Allah exists"), or it is استثناء غير تام (مفرَّغ), with an implied تقدير of لا إله موجودٌ إلا اللهُ — the خبر (موجود) dropped because context already supplies it. This shows how the fine detail of إعراب can admit more than one valid analysis without the doctrinal meaning changing at all.`, list: false },
          ],
          exercise: {
            prompt: `﴿لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا﴾ uses إلا here with the meaning of غير — "gods other than Allah" — rather than its ordinary excluding sense. Which usage does this illustrate?`,
            kind: 'mcq',
            options: [`إلا بمعنى غير — used للصفة rather than for الاستثناء`, `غير بمعنى إلا — used للاستثناء rather than للوصف`, `إلا في الاستثناء المنقطع`, `إلا في الاستثناء غير التام`],
            correct: 0,
          },
        },
        {
          heading: 'مسألة: مجيء اللهم قبل إلا',
          lines: [
            { box: { title: 'Example', lines: [`لَا يَغِيبُ هَذَا الرَّجُلُ الصَّالِحُ عَنِ الصَّفِّ الأَوَّلِ اللَّهُمَّ إِلَّا أَنْ يَكُونَ مَرِيضًا`] } },
            { html: `"This righteous man never misses the first row [of prayer] — unless, that is, he happens to be ill." The word <bdi>اللهم</bdi> may occur just before إلا — not as a genuine نداء (invocation) addressed to Allah, but simply <bdi>إيذانًا بندرة المستثنى</bdi> (to signal that the exception being made is a rare one).`, list: false },
          ],
          exercise: {
            prompt: `In لَا يَغِيبُ هَذَا الرَّجُلُ الصَّالِحُ عَنِ الصَّفِّ الأَوَّلِ اللَّهُمَّ إِلَّا أَنْ يَكُونَ مَرِيضًا, what does اللهم signal just before إلا?`,
            kind: 'mcq',
            options: [`إيذانًا بندرة المستثنى — that the exception being made is a rare one — not a genuine نداء addressed to Allah`, `A genuine نداء calling on Allah to witness the exception`, `That the whole sentence is now الاستثناء المنقطع`, `That إلا here has switched to meaning غير`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `After a فعل استثناء such as خلا or عدا, what إعراب does المستثنى take?`, options: [`منصوب على المفعولية`, `مجرور بالإضافة`, `مرفوع على البدلية`, `مبني على الفتح دائمًا`], correct: 0 },
        { q: `When غير is used للاستثناء, how does its own إعراب behave, and what about what follows it?`, options: [`غير itself takes whatever إعراب المستثنى بإلا would take there; what follows it is always مجرور بالإضافة`, `غير is always منصوب and what follows it is always مرفوع`, `غير is always مجرور and what follows it is always منصوب`, `Both غير and what follows it are always منصوب`], correct: 0 },
        { q: `In الاستثناء المنقطع, is البدل ever available for المستثنى per الأصل?`, options: [`No — المستثنى is always منصوب, and البدل is never available`, `Yes — البدل is always available, exactly as in غير موجَب المتصل`, `Yes, but only in Qur'anic examples`, `البدل is obligatory, and النصب is never available`], correct: 0 },
        { q: `What إعراب does the noun after حاشا always take?`, options: [`مجرور دائمًا`, `منصوب دائمًا`, `مرفوع دائمًا`, `يتغيّر بين النصب والجر بحسب السياق`], correct: 0 },
        { q: `غير and إلا can each borrow the other's usual sense. Which pairing correctly describes this?`, options: [`غير أصلها للوصف وقد تأتي للاستثناء؛ إلا أصلها للاستثناء وقد تأتي للصفة`, `غير أصلها للاستثناء دائمًا ولا تأتي إلا هكذا؛ إلا أصلها للوصف دائمًا`, `كلتاهما للوصف فقط، لا فرق بينهما`, `كلتاهما للاستثناء فقط، لا فرق بينهما`], correct: 0 },
        { q: `In لَا يَغِيبُ ... اللَّهُمَّ إِلَّا أَنْ يَكُونَ مَرِيضًا, what function does اللهم serve right before إلا?`, options: [`إيذانًا بندرة المستثنى — signaling that the exception is rare — not a genuine نداء`, `A genuine نداء addressed to Allah, seeking His witness`, `It negates the entire sentence`, `It converts إلا into أداة حصر`], correct: 0 },
      ],
      bank: [
        { title: `فعل استثناء: النصب على المفعولية`, kind: 'mcq', prompt: `Which of the following correctly describes المستثنى's إعراب after a فعل استثناء such as خلا or عدا?`, options: [`منصوب على المفعولية`, `مجرور بحرف جر مقدر`, `مرفوع على أنه بدل`, `مبني على السكون`], correct: 0 },
        { title: `ألا كل شيء ما خلا الله باطل: إعراب الله`, kind: 'mcq', prompt: `In أَلَا كُلُّ شَيْءٍ مَا خَلَا اللَّهَ بَاطِلٌ, why is لَفْظَ الجَلالَةِ منصوبة (in the accusative)؟`, options: [`Because it is the مفعول به of the verb خلا, a transitive exception-verb`, `Because it is مستثنى with إلا`, `Because it is بدل from كل`, `Because it is a منصوب حال`], correct: 0 },
        { title: `غير: إعراب مطابق للمستثنى بإلا`, kind: 'mcq', prompt: `When غير is used للاستثناء, its own إعراب is decided by which rule?`, options: [`It mirrors whatever إعراب المستثنى بإلا would take in that same position`, `It is always مجرور regardless of context`, `It is always مرفوع regardless of context`, `It has no إعراب of its own; only what follows it is marked`], correct: 0 },
        { title: `ما بعد غير: الإضافة`, kind: 'mcq', prompt: `In جَاءَ الأَوْلَادُ غَيْرَ زَيْدٍ, what is زيدٍ's إعراب, and why?`, options: [`مجرور بالإضافة — whatever follows غير is always مجرور`, `منصوب, matching غير's own إعراب`, `مرفوع على البدلية`, `مبني على الفتح`], correct: 0 },
        { title: `المنقطع: لا بدل`, kind: 'mcq', prompt: `Why is البدل never available for المستثنى in الاستثناء المنقطع, per الأصل?`, options: [`المستثنى is always منصوب there — البدل is simply not one of the available وجهان, unlike in غير موجَب المتصل`, `Because المنقطع only occurs in كلام موجَب`, `Because إلا loses its عمل entirely in المنقطع`, `Because المستثنى منه is never mentioned in المنقطع`], correct: 0 },
        { title: `لست عليهم بمصيطر إلا من تولى وكفر: إلا بمعنى لكن`, kind: 'mcq', prompt: `Some grammarians hold إلا in الاستثناء المنقطع carries the meaning of لكن directly, citing ﴿لَّسْتَ عَلَيْهِم بِمُصَيْطِرٍ ۝ إِلَّا مَن تَوَلَّىٰ وَكَفَرَ﴾. Is this reading part of the explicit wording of المتن, or an extension raised from أهل العلم?`, options: [`An extension raised from أهل العلم, not the explicit لفظ of المتن`, `It is the explicit and only reading given in المتن`, `It contradicts المتن and should be rejected outright`, `It applies only to الاستثناء المتصل, not المنقطع`], correct: 0 },
        { title: `بنو تميم: خروج عن الأصل`, kind: 'mcq', prompt: `بنو تميم are reported to have permitted البدل even in الاستثناء المنقطع. Does this reflect الأصل — the rule stated directly in المتن؟`, options: [`No — it is reported as a departure from الأصل, not the rule itself`, `Yes — it is the very rule المتن states`, `Yes, and it replaces the rule that المستثنى in المنقطع is always منصوب`, `It only applies when المستثنى منه is معرفة`], correct: 0 },
        { title: `حاشا: معناها`, kind: 'mcq', prompt: `حاشا is set aside for الاستثناء together with which additional sense?`, options: [`تنزيه المستثنى — explicitly clearing it from what applies to everything else`, `تعليل المستثنى`, `تأكيد المستثنى منه`, `توكيد الفعل`], correct: 0 },
        { title: `كل بني آدم خطاؤون حاشا الأنبياء: إعراب الأنبياء`, kind: 'mcq', prompt: `In كُلُّ بَنِي آدَمَ خَطَّاؤُونَ حَاشَا الأَنْبِيَاءِ, what is الأنبياءِ's إعراب?`, options: [`مجرور بحاشا`, `منصوب بحاشا`, `مرفوع على البدلية`, `مبني على الكسر`], correct: 0 },
        { title: `لا تدخلوا بيوتًا غير بيوتكم: غير للوصف`, kind: 'mcq', prompt: `In ﴿لَا تَدْخُلُوا بُيُوتًا غَيْرَ بُيُوتِكُمْ﴾, غيرَ is used in its original sense. What is that sense?`, options: [`للوصف — a descriptive adjective, not الاستثناء`, `للاستثناء, exactly as in جاء الأولاد غير زيد`, `للحصر فقط`, `للتوكيد`], correct: 0 },
        { title: `الناس هلكى إلا العالمون: إلا للصفة`, kind: 'mcq', prompt: `In الناس هلكى إلا العالمون، والعالمون هلكى إلا العاملون، والعاملون هلكى إلا المخلصون, إلا is repeated across a chain of general statements. What sense does إلا carry in each link of that chain?`, options: [`للصفة, with the meaning of غير, not its ordinary excluding sense`, `Its ordinary excluding sense, unchanged`, `للحصر فقط, with no meaning of its own`, `الاستثناء المنقطع فقط`], correct: 0 },
        { title: `لا إله إلا الله: القراءتان`, kind: 'mcq', prompt: `لا إله إلا الله admits two possible إعراب readings. Which pairing correctly names both?`, options: [`إلا لَفْظُ الجَلالَةِ كوصف بمعنى غير، أو استثناء غير تام بتقدير خبر محذوف (موجود)`, `إلا لَفْظُ الجَلالَةِ دائمًا استثناء تام لا غير`, `إلا لَفْظُ الجَلالَةِ دائمًا وصف فقط، ولا احتمال آخر`, `لا إله إلا الله لا تحتمل أي تحليل نحوي مختلف`], correct: 0 },
        { title: `اللهم قبل إلا: ليست نداء حقيقيًا`, kind: 'mcq', prompt: `When اللهم appears right before إلا, is it a genuine نداء addressed to Allah?`, options: [`No — it only signals إيذانًا بندرة المستثنى, that the exception is a rare one`, `Yes — it is always a real نداء in this position`, `Yes, but only in Qur'anic examples`, `It converts إلا into a فعل استثناء`], correct: 0 },
        { title: `تصنيف عام: خلا كأداة استثناء`, kind: 'mcq', prompt: `Across this module, خلا has consistently been treated as which grammatical category of أداة الاستثناء?`, options: [`فعل`, `حرف`, `اسم`, `ظرف`], correct: 0 },
        { title: `تصنيف عام: حاشا كأداة استثناء`, kind: 'mcq', prompt: `Across this module, حاشا has consistently been treated as which grammatical category of أداة الاستثناء?`, options: [`حرف`, `فعل`, `اسم`, `ظرف`], correct: 0 },
        {
          title: `تركيب: أَلَا كُلُّ شَيْءٍ مَا خَلَا اللَّهَ بَاطِلٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of أَلَا كُلُّ شَيْءٍ مَا خَلَا اللَّهَ بَاطِلٌ, where خلا is parsed as a فعل استثناء.`,
          source: `كُلُّ شَيْءٍ مَا خَلَا اللَّهَ بَاطِلٌ`,
          words: [`كُلُّ شَيْءٍ`, `مَا خَلَا`, `اللَّهَ`, `بَاطِلٌ`],
          labels: [`مبتدأ ومضاف إليه`, `ما مصدرية وفعل ماضٍ`, `مفعول به منصوب`, `خبر مرفوع`],
          distractors: [`مستثنى مجرور بحاشا`, `مستثنى منصوب`, `ما نافية`, `أداة حصر لا عمل لها`, `مضاف إليه`, `خبر منصوب`],
        },
        {
          title: `تركيب: جَاءَ الأَوْلَادُ غَيْرَ زَيْدٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of جَاءَ الأَوْلَادُ غَيْرَ زَيْدٍ, where غير is used للاستثناء.`,
          source: `جَاءَ الأَوْلَادُ غَيْرَ زَيْدٍ`,
          words: [`جَاءَ الأَوْلَادُ`, `غَيْرَ`, `زَيْدٍ`],
          labels: [`فعل ومستثنى منه (فاعل مرفوع)`, `مستثنى منصوب`, `مضاف إليه مجرور`],
          distractors: [`مستثنى مجرور`, `أداة حصر لا عمل لها`, `نعت منصوب`, `بدل مرفوع`, `مستثنى منه`, `فعل ومستثنى منه (فاعل منصوب)`],
        },
        {
          title: `تركيب: كُلُّ بَنِي آدَمَ خَطَّاؤُونَ حَاشَا الأَنْبِيَاءِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of كُلُّ بَنِي آدَمَ خَطَّاؤُونَ حَاشَا الأَنْبِيَاءِ.`,
          source: `كُلُّ بَنِي آدَمَ خَطَّاؤُونَ حَاشَا الأَنْبِيَاءِ`,
          words: [`كُلُّ بَنِي آدَمَ`, `خَطَّاؤُونَ`, `حَاشَا`, `الأَنْبِيَاءِ`],
          labels: [`مبتدأ ومضاف إليه`, `خبر مرفوع بالواو`, `أداة استثناء`, `مستثنى مجرور`],
          distractors: [`مستثنى منصوب`, `بدل مرفوع`, `فعل ماضٍ`, `أداة حصر لا عمل لها`, `مفعول به منصوب على المفعولية`, `خبر مرفوع`],
        },
      ],
    },
  ],
};

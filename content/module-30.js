// Module 30 — خبر النواسخ والمجرور والنعت
//
// Source: app-lessons/136-khabar-al-afaal-al-naqisa.md through
// app-lessons/140-al-naat.md. Closes out the app-lessons corpus as it
// currently stands (see COURSE-MAP.md's coverage-boundary note) — 140's
// own opening line calls النعت "the closing lesson of this entire course."
// Per the COURSE-MAP proposal, l1 merges 136+137 (both individually thin —
// each is a short, single-topic file), l2 covers 138 alone, l3 covers 139
// alone (the thinnest file in the module, deliberately narrow per its own
// text), l4 covers 140 alone (the densest of the five, and the one that
// opens التوابع as النعت's own chapter). l3 grew from the ~3 concepts
// COURSE-MAP estimated to 4, by splitting the closing Rule Box (المجرور
// لفظًا، ...) into two concepts — one per فاعل/مفعول به مثال — rather than
// covering both worked examples in one concept, matching the 4-6 concept
// floor every other module in this course holds to.
//
// Uses the lines[]/box/table shape (module-01's pattern, not the
// body-string shape content/README.md documents from an earlier design) so
// Definition/Rule/Careful/Example boxes render as concept-source-box,
// matching how app-lessons marks up the source. Box titles are normalized
// per INSTRUCTIONS.md (drop the word "Box"). Bank تركيب items use the flat
// words[]/labels[]/distractors[] schema, matching this course's established
// shape — none of 136-140's own tables are per-word "Visual tarkeeb"
// diagrams, so no tarkeebDiagram entries were needed in the concepts
// either; their "Summary table" sections became this file's concept
// `table` boxes instead.
//
// Two source ambiguities were deliberately worked around rather than
// resolved by invention: (1) 136's introductory line calling this the
// "ninth" of the منصوبات (and 137 the "tenth") depends on an ordinal count
// running through Modules 20-29, which aren't authored yet in this course —
// that framing is dropped from the lesson prose so no bank item depends on
// a count the learner hasn't been taught. (2) 138's own intro line calls
// اسم لا النافية للجنس "the twelfth and final of the deferred مرفوعات,"
// which contradicts both the same file's own content (اسم لا is never
// مرفوع — only منصوب لفظًا or مبني في محل نصب) and 136/137's "منصوبات"
// framing for the same numbered sequence; this looks like a typo in the
// source itself, so that specific ordinal claim was not carried into the
// lesson rather than silently "corrected" into an invented replacement.
// Similarly, 138's five-وجوه table lists وجه ٢ ("رفع الثاني") against the
// example لا حَوْلَ ولا قوةَ إلا بالله, whose قوةَ carries a فتحة diacritic
// that reads as بناء rather than رفع — reproduced here exactly as the
// source gives it (the label states the intended وجه; no bank item is built
// around the diacritic itself for that one case).
//
// **NOT YET registered** in `content/annahw.js`'s `MODULES` array: Modules
// 20-29 don't exist yet on disk, and that registry is shared with
// concurrent sessions authoring the modules before this one — wiring it in
// is left for a later merge pass, the same choice every out-of-order module
// in this course has made (see COURSE-MAP.md).
export default {
  id: '30',
  title: 'خبر النواسخ',
  heading: 'المعمول وغير المعمول',
  subheading: 'الاسم والفعل',
  blurb: 'خبر الأفعال الناقصة and خبر الحروف المشبهة بليس closing out the نواسخ family, اسم لا النافية للجنس, المجرور’s two types, and النعت opening التوابع as this course’s closing lesson.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'خبر الناقصة',
      subtitle: 'The Predicate of the Deficient Verbs and Their Sisters — كان’s خبر, its freedom of word order, and the three حروف that borrow ليس’s own عمل',
      concepts: [
        {
          heading: 'خبر الأفعال الناقصة: تعريفه ونصبه الواجب',
          lines: [
            { html: `<bdi>خَبَرُ الأَفْعالِ النّاقِصَةِ</bdi> is the خبر that comes after <bdi>كان</bdi> and its sisters — الأفعال الناقصة, so called because a bare فعل ناقص plus اسم alone does not give a complete meaning.`, list: false },
            { box: { title: 'Definition', lines: [`خَبَرُ الأَفْعالِ النّاقِصَةِ: هو الخبر الواقع بعد كان وأخواتها`] } },
            { html: `Unlike an ordinary خبر مبتدأ, which is مرفوع, this خبر is مَنْصوبٌ وُجوبًا — obligatorily accusative. ﴿إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا﴾ — "Indeed, he was a man of truth, a prophet" — carries two of them at once: <bdi>صِدِّيقًا</bdi> and <bdi>نَبِيًّا</bdi> are both خبران منصوبان of <bdi>كانَ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `An ordinary خبر مبتدأ is مرفوع. What is the إعراب of خبر الأفعال الناقصة — the خبر of كان وأخواتها؟`,
            kind: 'mcq',
            options: [`منصوب وجوبًا`, `مرفوع مثل خبر المبتدأ`, `مجرور دائمًا`, `مبني على الفتح دائمًا`],
            correct: 0,
          },
        },
        {
          heading: 'تقديم الخبر على اسم الفعل الناقص',
          lines: [
            { html: `This خبر enjoys a freedom an ordinary خبر مبتدأ doesn't: it can move.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ يَتَقَدَّمُ خَبَرُ كانَ وَأَخَواتِها على اسْمِها`] } },
            { html: `The خبر of كان وأخواتها may be fronted ahead of its own اسم, while الفعل الناقص itself stays in its normal position. <bdi>لَيْسَ سَواءً عالِمٌ وَجَهولٌ</bdi> — "Not equal are a knowledgeable person and an ignorant one" — fronts <bdi>سَواءً</bdi>, خبر لَيْسَ, ahead of اسمها, <bdi>عالِمٌ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `لَيْسَ سَواءً عالِمٌ وَجَهولٌ — سَواءً (the خبر) comes before عالِمٌ (its own اسم). Is fronting the خبر ahead of اسم الفعل الناقص permitted?`,
            kind: 'mcq',
            options: [`Yes — the خبر of الأفعال الناقصة may be fronted ahead of its own اسم while الفعل الناقص itself stays put`, `No — the اسم must always precede the خبر`, `Yes, but only with لَيْسَ specifically`, `No — fronting is only allowed with كانَ`],
            correct: 0,
          },
        },
        {
          heading: 'تقديم الخبر على الفعل الناقص نفسه، وامتناعه مع "ما"',
          lines: [
            { html: `The خبر can be pulled even further forward — past the فعل ناقص itself, not just past its اسم.`, list: false },
            { box: { title: 'Rule', lines: [`يَجوزُ أَيْضًا تَقْديمُ الخَبَرِ على الفِعْلِ النّاقِصِ نَفْسِهِ`] } },
            { html: `<bdi>قائِمًا كانَ زَيْدٌ</bdi> stands in place of the base order <bdi>كانَ زَيْدٌ قائِمًا</bdi> — "Zayd was standing." This is allowed with كانَ، لَيْسَ، باتَ، أَصْبَحَ، أَمْسى, and ظَلَّ.`, list: false },
            { box: { title: 'Careful', lines: [`لا يَجوزُ هَذا التَّقْديمُ إِذا كانَ في أَوَّلِ الفِعْلِ "ما" المَصْدَرِيَّةُ أَوْ "ما" النّافِيَةُ`] } },
            { html: `With <bdi>ما دامَ</bdi> (ما مصدرية), only <bdi>ما دامَ زَيْدٌ قائِمًا</bdi> is possible — never <bdi>قائِمًا ما دامَ زَيْدٌ</bdi>. With <bdi>ما زالَ</bdi>, <bdi>لا يَزالُ</bdi>, and <bdi>ما انْفَكَّ</bdi> (ما نافية), the same restriction holds: only <bdi>ما زالَ زَيْدٌ قائِمًا</bdi>, never <bdi>قائِمًا ما زالَ زَيْدٌ</bdi>. The reason is <bdi>صَدارَةُ الكَلامِ</bdi> — ما المصدرية and ما النافية each have "the right of first place" in the sentence, so nothing may be fronted ahead of them, not even ahead of the word they immediately govern.`, list: false },
          ],
          exercise: {
            prompt: `Why can قائِمًا كانَ زَيْدٌ be said, but not قائِمًا ما دامَ زَيْدٌ؟`,
            kind: 'mcq',
            options: [`Because ما المصدرية has صَدارَةُ الكَلامِ and must stay at the very start of its own جملة`, `Because ما دامَ has no خبر at all`, `Because قائمًا can never be fronted in Arabic`, `Because زيد must always come immediately after دام`],
            correct: 0,
          },
        },
        {
          heading: 'الحروف المشبهة بليس: تعريفها والحروف الثلاثة',
          lines: [
            { html: `A small handful of حروف borrow لَيْسَ's entire grammatical behaviour wholesale.`, list: false },
            { box: { title: 'Definition', lines: [`الحُروفُ المُشَبَّهَةُ بِلَيْسَ تَعْمَلُ عَمَلَ "لَيْسَ"`] } },
            { html: `Each one رفع (raises into الرفع) a اسم and نصب (pushes into النصب) a خبر, precisely because each resembles لَيْسَ in meaning — نفي, negation.`, list: false },
            { box: { title: 'Rule', lines: [`الحُروفُ المُشَبَّهَةُ بِلَيْسَ ثَلاثَةٌ: "ما"، "لا"، و"لات"`] } },
            { table: { title: 'الحروف المشبهة بليس', headers: ['الحرف', 'المثال', 'الترجمة'], rows: [
              [`ما`, `﴿مَا هَٰذَا بَشَرًا﴾`, `"This is not a man" — بَشَرًا خبر "ما" منصوب`],
              [`لا`, `لا شَيْءٌ مُشابِهًا لله`, `"Nothing is comparable to Allah" — مُشابِهًا خبر "لا" منصوب`],
              [`لات`, `﴿وَلَاتَ حِينَ مَنَاصٍ﴾`, `"It was not a time for escape"`],
            ] } },
          ],
          exercise: {
            prompt: `﴿مَا هَٰذَا بَشَرًا﴾ — بَشَرًا comes out منصوبًا. Why does ما govern its خبر into النصب here, the way لَيْسَ does?`,
            kind: 'mcq',
            options: [`Because ما here resembles لَيْسَ in meaning (نفي) and borrows its whole عمل — رفع الاسم ونصب الخبر`, `Because بشرًا is always منصوب regardless of ما`, `Because هذا governs بشرًا into النصب directly`, `Because ما here is ما المصدرية, not ما النافية`],
            correct: 0,
          },
        },
        {
          heading: 'الخلاف في أصل "لات"',
          lines: [
            { html: `Unlike ما and لا, whose ordinary use as plain negators is familiar, لات's own origin is disputed among the النحاة.`, list: false },
            { box: { title: 'Careful', lines: [`اخْتَلَفَ النُّحاةُ في أَصْلِ "لات"`] } },
            { html: `Some hold it to be a <bdi>حَرْفٌ مُسْتَقِلٌّ</bdi> — a fully independent particle — that resembles الفعل (that is, resembles لَيْسَ) in its own right. Others hold that it is, at root, nothing but <bdi>لا</bdi> النافية already given above, with a <bdi>تاء التأنيث</bdi> added for <bdi>تَوْكيد</bdi> — exactly the way that same تاء attaches to <bdi>رُبَّ</bdi> to give <bdi>رُبَّتَ</bdi>, and to <bdi>ثُمَّ</bdi> to give <bdi>ثُمَّتَ</bdi>. On either view, the conclusion doesn't change: its خبر still comes out مَنْصوبًا, exactly like the خبر of ما ولا.`, list: false },
          ],
          exercise: {
            prompt: `Grammarians dispute the true origin of لات in ﴿وَلَاتَ حِينَ مَنَاصٍ﴾. Whichever view is correct, does the إعراب of its خبر change?`,
            kind: 'mcq',
            options: [`No — its خبر still comes out منصوبًا either way`, `Yes — only the independent-particle view gives it a خبر at all`, `Yes — only the لا + تاء التأنيث view gives it a خبر منصوب`, `No — neither view gives لات a خبر in the first place`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `What is the إعراب of خبر الأفعال الناقصة — the خبر of كان وأخواتها؟`, options: [`منصوب وجوبًا`, `مرفوع`, `مجرور`, `مبني`], correct: 0 },
        { q: `لَيْسَ سَواءً عالِمٌ وَجَهولٌ fronts سواءً, the خبر, ahead of which part of the جملة؟`, options: [`اسم ليس (عالمٌ)`, `الفعل ليس نفسه`, `الجملة كلها`, `لا شيء — لم يتقدم شيء`], correct: 0 },
        { q: `قائِمًا كانَ زَيْدٌ fronts الخبر ahead of what, beyond its اسم?`, options: [`الفعل الناقص نفسه`, `اسمه فقط`, `حرف النفي`, `الفاعل`], correct: 0 },
        { q: `Why can't قائِمًا ما دامَ زَيْدٌ be said?`, options: [`Because ما المصدرية has صدارة الكلام and must open its own جملة`, `Because دام has no خبر`, `Because قائمًا can never serve as a خبر`, `Because زيد must be indefinite`], correct: 0 },
        { q: `الحروف المشبهة بليس are three: ما، لا، ولات. What do all three share with لَيْسَ that licenses this عمل?`, options: [`They resemble it in meaning — نفي`, `They all begin with the same letter`, `They are all حروف جر`, `They all require تكرار`], correct: 0 },
        { q: `Whichever view of لات's origin is correct, does its خبر's إعراب change?`, options: [`No — it stays منصوبًا either way`, `Yes — only one view gives it a خبر`, `Yes — the two views disagree about النصب`, `No — neither view gives it a خبر at all`], correct: 0 },
      ],
      bank: [
        { title: `خبر الأفعال الناقصة: الإعراب`, kind: 'mcq', prompt: `An ordinary خبر مبتدأ is مرفوع. What is the إعراب of خبر الأفعال الناقصة (خبر كان وأخواتها)؟`, options: [`منصوب وجوبًا`, `مرفوع مثل خبر المبتدأ`, `مجرور دائمًا`, `مبني على الفتح دائمًا`], correct: 0 },
        { title: `إنه كان صديقا نبيا: عدد الأخبار`, kind: 'mcq', prompt: `﴿إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا﴾ — صِدِّيقًا and نَبِيًّا. How many خبر منصوب does كانَ carry here?`, options: [`Two — both صديقًا and نبيًّا are خبران منصوبان لكان`, `One — نبيًّا is a نعت لصديقًا, not a second خبر`, `Two, but only نبيًّا is the true خبر`, `None — both are حال`], correct: 0 },
        { title: `تقديم الخبر على الاسم: ليس سواء`, kind: 'mcq', prompt: `لَيْسَ سَواءً عالِمٌ وَجَهولٌ — سواءً comes before عالِمٌ, its own اسم. Is fronting the خبر ahead of اسم كان وأخواتها permitted?`, options: [`Yes — the خبر may be fronted ahead of its own اسم while الفعل الناقص stays put`, `No — the اسم must always precede the خبر`, `Yes, but only for لَيْسَ specifically`, `No — fronting is only allowed with كانَ`], correct: 0 },
        { title: `تقديم الخبر على الفعل نفسه`, kind: 'mcq', prompt: `قائِمًا كانَ زَيْدٌ stands for the base order كانَ زَيْدٌ قائِمًا. What has been fronted here, beyond just ahead of the اسم?`, options: [`الخبر, ahead of الفعل الناقص itself`, `الاسم, ahead of الفعل`, `الفعل, ahead of الخبر`, `لا شيء — الترتيب لم يتغير`], correct: 0 },
        { title: `الأفعال التي يجوز تقديم خبرها`, kind: 'mcq', prompt: `Fronting الخبر ahead of الفعل الناقص نفسه is permitted with كانَ، لَيْسَ، باتَ، أَصْبَحَ، أَمْسى, and ظَلَّ. What do all of these share, that ما دامَ and ما زالَ don't?`, options: [`None of them opens with ما المصدرية or ما النافية`, `All of them are أفعال تامة, not ناقصة`, `All of them take a single خبر only`, `All of them are conjugated in المضارع only`], correct: 0 },
        { title: `ما دام: امتناع التقديم`, kind: 'mcq', prompt: `Why can ما دامَ زَيْدٌ قائِمًا be said, but not قائِمًا ما دامَ زَيْدٌ?`, options: [`Because ما المصدرية has صدارة الكلام and must open its جملة, nothing may be fronted ahead of it`, `Because دام has no خبر to front`, `Because زيد must always come first`, `Because قائمًا cannot ever be fronted in Arabic`], correct: 0 },
        { title: `ما زال: نفس الامتناع`, kind: 'mcq', prompt: `ما زالَ زَيْدٌ قائِمًا cannot become قائِمًا ما زالَ زَيْدٌ either. Which other particle shares this restriction with ما زالَ?`, options: [`ما المصدرية, as in ما دامَ`, `أل التعريف`, `تنوين التمكين`, `لام الابتداء`], correct: 0 },
        { title: `صدارة الكلام`, kind: 'mcq', prompt: `صَدارَةُ الكَلامِ, the "right of first place," is why a particle like ما المصدرية or ما النافية must open its own جملة. What does that rule forbid?`, options: [`Fronting anything ahead of that particle, or even ahead of the word it immediately governs`, `Fronting the خبر ahead of the اسم only`, `Using the particle with أفعال ناقصة at all`, `Repeating the particle more than once`], correct: 0 },
        { title: `الحروف المشبهة بليس: العدد`, kind: 'mcq', prompt: `How many حروف carry لَيْسَ's own عمل (رفع اسم، نصب خبر) because they resemble it in meaning?`, options: [`ثلاثة — ما، لا، ولات`, `اثنان — ما ولا فقط`, `أربعة — ما، لا، لات، وليس`, `خمسة، ومنها إنّ وأنّ`], correct: 0 },
        { title: `ما هذا بشرا`, kind: 'mcq', prompt: `﴿مَا هَٰذَا بَشَرًا﴾ — بَشَرًا comes out منصوبًا. Why, given that ما is normally just a plain negating particle?`, options: [`Here ما resembles لَيْسَ in meaning (نفي), and borrows its whole عمل: رفع الاسم ونصب الخبر`, `بشرا is always منصوب regardless of ما`, `هذا governs بشرا into النصب directly`, `ما here is ما المصدرية, not ما النافية`], correct: 0 },
        { title: `لا شيء مشابها لله`, kind: 'mcq', prompt: `لا شَيْءٌ مُشابِهًا لله — شَيْءٌ is مرفوع (اسم لا) and مُشابِهًا is منصوب (خبر لا). What licenses لا to govern its اسم وخبر this way here?`, options: [`لا here resembles لَيْسَ in meaning, one of الحروف المشبهة بليس`, `لا here is لا الناهية, which always does this`, `شيء is مرفوع only because it is مبتدأ, unrelated to لا`, `مشابها is منصوب because it is حال, not خبر لا`], correct: 0 },
        { title: `ولات حين مناص`, kind: 'mcq', prompt: `﴿وَلَاتَ حِينَ مَنَاصٍ﴾ means وَلَيْسَ الوَقْتُ وَقْتَ نَجاةٍ أَوْ فِرارٍ. Which حرف مشبه بليس appears here?`, options: [`لات`, `ما`, `لا`, `ليس نفسها`], correct: 0 },
        { title: `الخلاف في أصل لات: الرأي الأول`, kind: 'mcq', prompt: `One view of لات's origin treats it as a fully independent particle in its own right. What does that view say لات resembles?`, options: [`الفعل (specifically لَيْسَ), the same way الحروف المشبهة بالفعل resemble a فعل`, `أل التعريف`, `تنوين الترنم`, `الضمير المتصل`], correct: 0 },
        { title: `الخلاف في أصل لات: الرأي الثاني`, kind: 'mcq', prompt: `The second view of لات's origin holds it is really nothing but لا النافية with an added letter. What has been added, and why?`, options: [`تاء التأنيث, added لِلتَّوْكيدِ (for emphasis)`, `واو العطف, added to link it to a previous جملة`, `ياء النسبة, added to make it a صفة`, `نون التوكيد, added to intensify the negation`], correct: 0 },
        { title: `لات وربَّتَ وثمَّتَ`, kind: 'mcq', prompt: `On the second view of لات's origin, the same تاء التأنيث that turns لا into لات also attaches to two other familiar حروف for emphasis. Which pair?`, options: [`رُبَّ becoming رُبَّتَ, and ثُمَّ becoming ثُمَّتَ`, `إنَّ becoming إنَّتَ, and لكن becoming لكنَّتَ`, `حتى becoming حتَّتَ, and لو becoming لوَّتَ`, `كي becoming كيتَ, and لن becoming لنَّتَ`], correct: 0 },
        { title: `على كلا القولين`, kind: 'mcq', prompt: `Whichever view of لات's origin is correct — an independent particle, or لا + تاء التأنيث — does the conclusion about its خبر change?`, options: [`No — its خبر still comes out منصوبًا either way`, `Yes — only the independent-particle view gives it a خبر at all`, `Yes — only the لا + تاء view gives it a خبر منصوب`, `No — neither view gives لات a خبر`], correct: 0 },
        { title: `خبر الأفعال الناقصة مقابل خبر الحروف المشبهة بليس`, kind: 'mcq', prompt: `Both خبر الأفعال الناقصة (like خبر كان) and خبر الحروف المشبهة بليس (like خبر ما، لا، لات) share the same إعراب. What is it?`, options: [`كلاهما منصوب`, `أحدهما منصوب والآخر مرفوع`, `كلاهما مرفوع`, `أحدهما مجرور والآخر منصوب`], correct: 0 },
        { title: `أثر النواسخ على المبتدأ والخبر`, kind: 'mcq', prompt: `خبر الأفعال الناقصة and خبر الحروف المشبهة بليس both take النصب because of a governing عامل — a فعل ناقص in one case, a حرف مشبه بليس in the other. What do both أعمال do to a plain مبتدأ وخبر pair?`, options: [`Both raise the اسم into الرفع and push the خبر into النصب, unlike a plain خبر which stays مرفوع`, `Both raise the اسم and the خبر into الرفع`, `Both push the اسم and the خبر into النصب`, `Neither changes the إعراب of either word`], correct: 0 },
        {
          title: `تركيب: إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا﴾.`,
          source: `إِنَّهُ كَانَ صِدِّيقًا نَبِيًّا`,
          words: [`إِنَّهُ`, `كَانَ`, `صِدِّيقًا`, `نَبِيًّا`],
          labels: [`إنّ واسمها (ضمير الهاء)`, `فعل ناقص، وجملته خبر إنّ`, `خبر كان الأول منصوب`, `خبر كان الثاني منصوب`],
          distractors: [`خبر مبتدأ مرفوع`, `فعل ناقص، وجملته خبر مبتدأ`, `إنّ واسمها (ضمير التاء)`, `خبر كان الأول مرفوع`, `خبر كان الثاني مرفوع`, `مفعول به ثان منصوب`],
        },
        {
          title: `تركيب: لَيْسَ سَواءً عالِمٌ وَجَهولٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in لَيْسَ سَواءً عالِمٌ وَجَهولٌ, where the خبر is fronted ahead of the اسم.`,
          source: `لَيْسَ سَواءً عالِمٌ وَجَهولٌ`,
          words: [`لَيْسَ`, `سَواءً`, `عالِمٌ`, `وَ`, `جَهولٌ`],
          labels: [`فعل ناقص`, `خبر ليس مقدَّم منصوب`, `اسم ليس مؤخَّر مرفوع`, `حرف عطف`, `معطوف على اسم ليس مرفوع`],
          distractors: [`اسم ليس مقدَّم مرفوع`, `خبر ليس مؤخَّر منصوب`, `خبر ليس منصوب`, `اسم ليس مرفوع`, `حرف مشبه بليس`, `معطوف على خبر ليس منصوب`],
        },
        {
          title: `تركيب: قائِمًا كانَ زَيْدٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in قائِمًا كانَ زَيْدٌ, where الخبر is fronted ahead of الفعل الناقص نفسه.`,
          source: `قائِمًا كانَ زَيْدٌ`,
          words: [`قائِمًا`, `كانَ`, `زَيْدٌ`],
          labels: [`خبر كان مقدَّم منصوب`, `فعل ناقص`, `اسم كان مؤخَّر مرفوع`],
          distractors: [`خبر ليس مقدَّم منصوب`, `خبر كان منصوب`, `اسم كان مقدَّم مرفوع`, `حال منصوب`, `فعل تام`, `اسم كان مرفوع`],
        },
        {
          title: `تركيب: ما دامَ زَيْدٌ قائِمًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ما دامَ زَيْدٌ قائِمًا, the only order permitted once الفعل begins with ما المصدرية.`,
          source: `ما دامَ زَيْدٌ قائِمًا`,
          words: [`ما`, `دامَ`, `زَيْدٌ`, `قائِمًا`],
          labels: [`ما مصدرية، ولها صدارة الكلام`, `فعل ناقص`, `اسم دام مرفوع`, `خبر دام منصوب (لا يجوز تقديمه على الفعل)`],
          distractors: [`ما نافية، ولها صدارة الكلام`, `خبر زال منصوب (لا يجوز تقديمه على الفعل)`, `اسم زال مرفوع`, `فعل تام`, `خبر دام منصوب`, `فاعل مرفوع`],
        },
        {
          title: `تركيب: ما زالَ زَيْدٌ قائِمًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ما زالَ زَيْدٌ قائِمًا, the only order permitted once الفعل begins with ما النافية.`,
          source: `ما زالَ زَيْدٌ قائِمًا`,
          words: [`ما`, `زالَ`, `زَيْدٌ`, `قائِمًا`],
          labels: [`ما نافية، ولها صدارة الكلام`, `فعل ناقص`, `اسم زال مرفوع`, `خبر زال منصوب (لا يجوز تقديمه على الفعل)`],
          distractors: [`ما مصدرية، ولها صدارة الكلام`, `خبر دام منصوب (لا يجوز تقديمه على الفعل)`, `اسم دام مرفوع`, `فعل تام`, `خبر زال منصوب`, `حرف نفي عامل عمل ليس`],
        },
        {
          title: `تركيب: مَا هَٰذَا بَشَرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ﴿مَا هَٰذَا بَشَرًا﴾, where ما operates like لَيْسَ.`,
          source: `مَا هَٰذَا بَشَرًا`,
          words: [`مَا`, `هَٰذَا`, `بَشَرًا`],
          labels: [`حرف مشبه بليس (نافٍ)، يعمل عمل ليس`, `اسم "ما" مرفوع`, `خبر "ما" منصوب`],
          distractors: [`ما مصدرية، ولها صدارة الكلام`, `ما نافية، ولها صدارة الكلام`, `حرف مشبه بليس (نافٍ)، يعمل عمل إنّ`, `اسم "ما" منصوب`, `خبر "ما" مرفوع`, `مبتدأ مرفوع`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'اسم لا',
      subtitle: 'The Noun Governed by لا النافية للجنس — منصوب لفظًا when مضاف or شبيه بالمضاف, مبني elsewhere, and what تكرار and حذف do to it',
      concepts: [
        {
          heading: 'اسم "لا" منصوبًا لفظًا: المضاف وشبيه المضاف',
          lines: [
            { html: `<bdi>لا النافية للجنس</bdi> works the way <bdi>إنّ</bdi> does — it pushes its خبر into النصب — except that instead of negating one predication, it wipes out an entire جنس (kind, category) at once. Its own اسم never takes الرفع: it comes out either منصوبًا لفظًا, or مبنيًّا في محل نصب, depending on its own shape.`, list: false },
            { box: { title: 'Rule', lines: [`اسم "لا" النافية للجنس يكون منصوبًا لفظًا إذا كان مضافًا أو شبيهًا بالمضاف`] } },
            { html: `<bdi>مضاف</bdi>: <bdi>لا عملَ مُراءٍ مقبولٌ</bdi> — "No work of a show-off is accepted." <bdi>عملَ</bdi> is مضاف to <bdi>مُراءٍ</bdi>. <bdi>شبيه بالمضاف</bdi>: <bdi>لا عاصيًا أمَّه وأباه ناجحٌ</bdi> — "No one disobedient to his mother and his father succeeds." Here <bdi>عاصيًا</bdi> itself puts <bdi>أمَّه</bdi> into النصب — a noun bound to what follows it exactly the way a مضاف is bound to its مضاف إليه, even with no true إضافة present, and that alone is what makes it شبيه بالمضاف.`, list: false },
          ],
          exercise: {
            prompt: `لا عاصيًا أمَّه وأباه ناجحٌ — عاصيًا itself puts أمَّه into النصب, even though there is no true إضافة. What does that make عاصيًا?`,
            kind: 'mcq',
            options: [`شبيه بالمضاف, so اسم لا comes out منصوبًا لفظًا`, `مضاف, so اسم لا comes out مبنيًّا على الفتح`, `اسم لا مبني في محل نصب, since it is مفرد`, `لا شيء مما سبق, since عاصيًا ليس اسم لا هنا`],
            correct: 0,
          },
        },
        {
          heading: 'اسم "لا" مبنيًّا في محل نصب: المفرد وجمع التكسير والمؤنث السالم والمثنى وجمع المذكر',
          lines: [
            { html: `In every other case — a plain مفرد that is neither مضاف nor شبيه بالمضاف — اسم لا is مبني في محل نصب, and the letter it is built on depends on its own shape.`, list: false },
            { table: { title: 'بناء اسم لا', headers: ['حالة الاسم', 'البناء', 'مثال'], rows: [
              [`مفرد أو جمع تكسير`, `على الفتح`, `لا رجلَ، لا رجالَ`],
              [`جمع مؤنث سالم`, `على الفتح أو الكسر`, `لا مسلماتَ / لا مسلماتِ`],
              [`مثنى أو جمع مذكر سالم`, `على الياء`, `لا رجلَيْنِ، لا مسلمينَ`],
            ] } },
          ],
          exercise: {
            prompt: `لا رَجُلَيْنِ ("there are no two men") — رجلين is مثنى. On which letter is اسم لا built here?`,
            kind: 'mcq',
            options: [`على الياء`, `على الفتح`, `على الفتح أو الكسر`, `على الضم`],
            correct: 0,
          },
        },
        {
          heading: 'دخول "لا" على المعرفة ووجوب التكرار',
          lines: [
            { box: { title: 'Careful', lines: [`إِذا دَخَلَتْ "لا" النافية للجنس على مَعْرِفَةٍ وَجَبَ تَكْرارُها`] } },
            { html: `A single, unrepeated لا cannot negate the whole جنس of a noun that is already معرفة — definite, specifically identified. Repetition is the only way the negation goes through. ﴿لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ﴾ — "It is not for the sun to overtake the moon, nor does the night outstrip the day" — repeats لا once for <bdi>الشَّمْسُ</bdi> and once for <bdi>اللَّيْلُ</bdi>, precisely because both are معرفة.`, list: false },
          ],
          exercise: {
            prompt: `﴿لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ﴾ repeats لا once for الشمس and once for الليل. Why does لا need repeating here, rather than negating both in one breath?`,
            kind: 'mcq',
            options: [`Because الشمس والليل are both معرفة, and a single unrepeated لا cannot negate the whole جنس of an already-definite noun`, `Because الشمس والليل are مؤنث`, `Because لا never governs more than one اسم`, `Because الواو forces repetition automatically`],
            correct: 0,
          },
        },
        {
          heading: 'تكرار "لا" بلا فاصل: الأوجه الخمسة',
          lines: [
            { html: `When لا النافية للجنس is repeated with nothing separating the two occurrences, its اسم may take any of five أوجه — all attested in the قراءات and in genuine Arab usage.`, list: false },
            { box: { title: 'Rule', lines: [`إِذا تَكَرَّرَتْ "لا" بِلا فاصِلٍ جازَ في اسمِها خَمْسَةُ أَوْجُهٍ`] } },
            { table: { title: 'الأوجه الخمسة', headers: ['الوجه', 'الحكم', 'مثال'], rows: [
              [`١`, `بناء الأول والثاني على الفتح`, `﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾`],
              [`٢`, `بناء الأول على الفتح ورفع الثاني`, `لا حَوْلَ ولا قوةَ إلا بالله`],
              [`٣`, `بناء الأول على الفتح ونصب الثاني`, `لا حَوْلَ ولا قوةً إلا بالله`],
              [`٤`, `رفع الأول والثاني`, `﴿لَّا بَيْعٌ فِيهِ وَلَا خُلَّةٌ وَلَا شَفَاعَةٌ﴾`],
              [`٥`, `رفع الأول وبناء الثاني على الفتح`, `﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾ (قراءة أخرى)`],
            ] } },
          ],
          exercise: {
            prompt: `﴿لَّا بَيْعٌ فِيهِ وَلَا خُلَّةٌ وَلَا شَفَاعَةٌ﴾ raises all three names — بَيْعٌ، خُلَّةٌ، شَفَاعَةٌ — into الرفع. Which of the five attested أوجه does this represent?`,
            kind: 'mcq',
            options: [`رفع الأول والثاني`, `بناء الأول والثاني على الفتح`, `بناء الأول على الفتح ورفع الثاني`, `رفع الأول وبناء الثاني على الفتح`],
            correct: 0,
          },
        },
        {
          heading: 'حذف اسم "لا" النافية للجنس',
          lines: [
            { box: { title: 'Example', lines: [`لا عليكَ — أَيْ لا بَأْسَ عليكَ`] } },
            { html: `It is permissible — not obligatory — to drop اسم "لا" النافية للجنس altogether whenever السياق (context) already points to it. <bdi>لا عليكَ</bdi>, "never mind," literally "no [blame] upon you," stands for <bdi>لا بَأْسَ عليكَ</bdi>, "there is no harm upon you." <bdi>بَأْسَ</bdi>, the dropped اسم, is fully recoverable from context alone.`, list: false },
          ],
          exercise: {
            prompt: `لا عَلَيْكَ ("never mind") is short for لا بَأْسَ عَلَيْكَ, with بأس — اسم لا — dropped. Is dropping اسم لا here وجوبي (obligatory) or جوازي (optional)?`,
            kind: 'mcq',
            options: [`جوازي — permitted whenever context makes the dropped اسم recoverable`, `وجوبي — اسم لا must always be dropped when السياق allows it`, `وجوبي — لا can never keep its اسم explicit`, `جوازي, but only with مضاف اسماء`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `لا عملَ مُراءٍ مقبولٌ — عملَ is مضاف. What إعراب does it take?`, options: [`منصوب لفظًا`, `مبني على الفتح`, `مبني على الياء`, `مرفوع`], correct: 0 },
        { q: `لا رجلَ — رجلَ is a plain مفرد. What is its إعراب?`, options: [`مبني على الفتح في محل نصب`, `منصوب لفظًا`, `مبني على الياء`, `مرفوع`], correct: 0 },
        { q: `لا رَجُلَيْنِ — رجلين is مثنى. On which letter is it built?`, options: [`الياء`, `الفتح`, `الكسر`, `الضم`], correct: 0 },
        { q: `If لا النافية للجنس enters on a معرفة noun, what must happen for the negation to go through?`, options: [`لا must be repeated (تكرار)`, `لا must be dropped`, `المعرفة must become نكرة first`, `Nothing extra is needed`], correct: 0 },
        { q: `When لا is repeated with no فاصل between the two occurrences, how many أوجه can its اسم take?`, options: [`خمسة`, `اثنان`, `ثلاثة`, `سبعة`], correct: 0 },
        { q: `لا عَلَيْكَ stands for لا بَأْسَ عَلَيْكَ. Is dropping اسم لا here وجوبي or جوازي؟`, options: [`جوازي`, `وجوبي`, `لا يجوز الحذف أصلًا`, `وجوبي، لكن فقط مع المضاف`], correct: 0 },
      ],
      bank: [
        { title: `اسم لا: نصب لفظًا أم بناء؟`, kind: 'mcq', prompt: `اسم لا النافية للجنس never takes الرفع. Its two possible إعراب outcomes are نصب لفظًا and بناء في محل نصب. What decides which of the two applies?`, options: [`Its own shape — whether it is مضاف, شبيه بالمضاف, or a plain مفرد/جمع/مثنى`, `Whether its خبر is محذوف or ظاهر`, `Whether لا itself is مكررة or not`, `Whether the جملة is إثباتًا or نفيًا`], correct: 0 },
        { title: `لا عملَ مراء مقبولٌ: المضاف`, kind: 'mcq', prompt: `لا عملَ مُراءٍ مقبولٌ — عملَ is مضاف to مُراءٍ. What إعراب does عملَ, اسم لا, take because it is مضاف؟`, options: [`منصوب لفظًا`, `مبني على الفتح في محل نصب`, `مبني على الياء في محل نصب`, `مرفوع`], correct: 0 },
        { title: `لا عاصيا أمه وأباه: شبيه بالمضاف`, kind: 'mcq', prompt: `لا عاصيًا أمَّه وأباه ناجحٌ — عاصيًا itself puts أمَّه into النصب, even though there is no true إضافة. What does that alone make عاصيًا?`, options: [`شبيه بالمضاف, so اسم لا comes out منصوبًا لفظًا`, `مضاف, so اسم لا comes out مبنيًّا`, `نكرة مقصودة, so اسم لا comes out مرفوعًا`, `معرفة, requiring تكرار لا`], correct: 0 },
        { title: `لا رجلَ: مفرد على الفتح`, kind: 'mcq', prompt: `لا رجلَ — رجلَ is مفرد, not مضاف and not شبيه بالمضاف. What is its إعراب؟`, options: [`مبني على الفتح في محل نصب`, `منصوب لفظًا`, `مبني على الياء في محل نصب`, `مرفوع`], correct: 0 },
        { title: `لا مسلماتَ: جمع مؤنث سالم`, kind: 'mcq', prompt: `لا مسلماتَ / لا مسلماتِ — both readings are attested for اسم لا when it is جمع مؤنث سالم. On which letters can it be built?`, options: [`الفتح أو الكسر`, `الفتح أو الضم`, `الياء فقط`, `الضم فقط`], correct: 0 },
        { title: `لا رجلَين: مثنى`, kind: 'mcq', prompt: `لا رَجُلَيْنِ — رجلين is مثنى. On which letter is اسم لا built here؟`, options: [`الياء`, `الفتح`, `الكسر`, `الضم`], correct: 0 },
        { title: `لا مسلمين: جمع مذكر سالم`, kind: 'mcq', prompt: `لا مسلمينَ shares its بناء letter with the مثنى case above. Which category does جمع مذكر سالم fall under for this purpose؟`, options: [`Built على الياء, the same as مثنى`, `Built على الفتح, the same as a plain مفرد`, `Built على الفتح أو الكسر, the same as جمع مؤنث سالم`, `منصوب لفظًا, because it is جمع`], correct: 0 },
        { title: `دخول لا على المعرفة`, kind: 'mcq', prompt: `﴿لَا الشَّمْسُ يَنبَغِي لَهَا أَن تُدْرِكَ الْقَمَرَ وَلَا اللَّيْلُ سَابِقُ النَّهَارِ﴾ repeats لا once for الشمس and once for الليل. Why does لا need repeating here rather than negating both at once؟`, options: [`Because الشمس والليل are both معرفة, and a single unرepeated لا cannot negate the whole جنس of an already-definite noun`, `Because الشمس والليل are مؤنث`, `Because لا can never govern more than one اسم in a sentence`, `Because الواو forces repetition automatically`], correct: 0 },
        { title: `تكرار لا بلا فاصل: كم وجهًا؟`, kind: 'mcq', prompt: `When لا النافية للجنس is repeated with nothing separating the two occurrences, how many attested أوجه can its اسم take؟`, options: [`خمسة`, `اثنان`, `ثلاثة`, `سبعة`], correct: 0 },
        { title: `فلا رفث ولا فسوق ولا جدال: الوجه الأول`, kind: 'mcq', prompt: `﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾ builds all three names — رفث، فسوق، جدال — على الفتح in one قراءة. Which of the five أوجه is this؟`, options: [`بناء الأول والثاني والثالث على الفتح`, `رفع الأول والثاني والثالث`, `بناء الأول على الفتح ورفع الثاني`, `رفع الأول وبناء الثاني على الفتح`], correct: 0 },
        { title: `لا حول ولا قوة: نصب الثاني`, kind: 'mcq', prompt: `لا حَوْلَ ولا قوةً إلا بالله — قوةً appears here in النصب rather than مبنية على الفتح or مرفوعة. Which of the five أوجه does that represent؟`, options: [`بناء الأول على الفتح ونصب الثاني`, `بناء الأول والثاني معًا على الفتح`, `رفع الأول والثاني معًا`, `رفع الأول وبناء الثاني على الفتح`], correct: 0 },
        { title: `لا حول ولا قوة: رفع الثاني`, kind: 'mcq', prompt: `Besides بناء على الفتح and نصب, is رفع also attested for the second اسم in لا حَوْلَ ولا قوة...?`, options: [`Yes — بناء الأول على الفتح ورفع الثاني is one of the five attested أوجه`, `No — رفع is never attested for a repeated لا's second اسم`, `Yes, but only when الأول is also مرفوع`, `No — only بناء على الفتح is ever attested`], correct: 0 },
        { title: `لا بيع فيه ولا خلة ولا شفاعة: رفع الجميع`, kind: 'mcq', prompt: `﴿لَّا بَيْعٌ فِيهِ وَلَا خُلَّةٌ وَلَا شَفَاعَةٌ﴾ raises all three names — بيعٌ، خلةٌ، شفاعةٌ — into الرفع. Which of the five أوجه is that؟`, options: [`رفع الأول والثاني والثالث معًا`, `بناء الجميع على الفتح`, `رفع الأول وبناء الباقي`, `بناء الأول ونصب الباقي`], correct: 0 },
        { title: `نفس الآية، قراءة أخرى`, kind: 'mcq', prompt: `﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾ is also attested in a قراءة where the first اسم is مرفوع and the rest بُنِيَت على الفتح. Which وجه is that؟`, options: [`رفع الأول وبناء الباقي على الفتح`, `بناء الأول والثاني على الفتح فقط`, `رفع الجميع`, `نصب الجميع`], correct: 0 },
        { title: `لا عليك: حذف الاسم`, kind: 'mcq', prompt: `لا عَلَيْكَ ("never mind") is short for لا بَأْسَ عَلَيْكَ, with بأس — اسم لا — dropped. Is this drop وجوبي (obligatory) or جوازي (optional)؟`, options: [`جوازي — permitted whenever السياق makes the dropped اسم recoverable`, `وجوبي — اسم لا must always be dropped once السياق allows it`, `وجوبي — لا can never keep an explicit اسم`, `جوازي, but only for مضاف اسماء`], correct: 0 },
        { title: `لا النافية للجنس: مقارنة بإنّ`, kind: 'mcq', prompt: `لا النافية للجنس works the way إنّ does in one respect. What is that shared behaviour؟`, options: [`It pushes its خبر into النصب, the same way إنّ does`, `It raises its اسم into الرفع, the same way إنّ raises its own اسم`, `It only ever governs معرفة nouns, the same way إنّ does`, `It requires تكرار every time it is used, the same way إنّ does`], correct: 0 },
        { title: `اسم لا: البناء على الفتح`, kind: 'mcq', prompt: `اسم لا is مبني على الفتح for a plain مفرد, and for one other shape. Which؟`, options: [`جمع تكسير`, `جمع مؤنث سالم`, `مثنى`, `جمع مذكر سالم`], correct: 0 },
        { title: `شرط تكرار لا مع المعرفة`, kind: 'mcq', prompt: `If لا النافية للجنس enters upon a معرفة noun without repeating لا at all, what happens؟`, options: [`A single, unrepeated لا cannot negate the whole جنس of an already-definite noun — تكرار is required instead`, `Nothing changes — لا negates معرفة and نكرة identically either way`, `The معرفة noun automatically becomes نكرة`, `لا simply cannot enter on a معرفة noun under any circumstance`], correct: 0 },
        {
          title: `تركيب: لا عملَ مُراءٍ مقبولٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in لا عملَ مُراءٍ مقبولٌ.`,
          source: `لا عملَ مُراءٍ مقبولٌ`,
          words: [`لا`, `عملَ`, `مُراءٍ`, `مقبولٌ`],
          labels: [`لا النافية للجنس`, `اسم لا منصوب لفظًا، لأنه مضاف`, `مضاف إليه مجرور`, `خبر لا مرفوع`],
          distractors: [`اسم لا منصوب لفظًا، لأنه شبيه بالمضاف`, `اسم لا مبني على الفتح`, `لا الناهية`, `خبر لا منصوب`, `اسم لا مبني على الياء في محل نصب (مثنى)`, `مبتدأ مرفوع`],
        },
        {
          title: `تركيب: لا عاصيًا أمَّه وأباه ناجحٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in لا عاصيًا أمَّه وأباه ناجحٌ, where اسم لا is شبيه بالمضاف.`,
          source: `لا عاصيًا أمَّه وأباه ناجحٌ`,
          words: [`لا`, `عاصيًا`, `أمَّه`, `وَ`, `أباه`, `ناجحٌ`],
          labels: [`لا النافية للجنس`, `اسم لا منصوب لفظًا، لأنه شبيه بالمضاف`, `مفعول به لـ"عاصيًا" منصوب`, `حرف عطف`, `معطوف على "أمَّه" منصوب`, `خبر لا مرفوع`],
          distractors: [`اسم لا منصوب لفظًا، لأنه مضاف`, `اسم لا مبني على الفتح`, `نعت منصوب`, `مفعول به لـ"عاصيًا" مرفوع`, `معطوف على "أمَّه" مجرور`, `اسم لا مبني على الياء في محل نصب (مثنى)`],
        },
        {
          title: `تركيب: لا مسلماتَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in لا مسلماتَ.`,
          source: `لا مسلماتَ`,
          words: [`لا`, `مسلماتَ`],
          labels: [`لا النافية للجنس`, `اسم لا مبني على الفتح أو الكسر في محل نصب (جمع مؤنث سالم)`],
          distractors: [`اسم لا منصوب لفظًا`, `مبتدأ مرفوع`, `اسم لا مبني على الياء في محل نصب (مثنى أو جمع مذكر سالم)`, `لا الناهية`, `اسم لا مبني على الفتح`, `اسم لا منصوب لفظًا، لأنه مضاف`],
        },
        {
          title: `تركيب: لا رجلَيْنِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in لا رجلَيْنِ.`,
          source: `لا رجلَيْنِ`,
          words: [`لا`, `رجلَيْنِ`],
          labels: [`لا النافية للجنس`, `اسم لا مبني على الياء في محل نصب (مثنى)`],
          distractors: [`اسم لا منصوب لفظًا`, `اسم لا مبني على الفتح`, `اسم لا مبني على الفتح أو الكسر في محل نصب (جمع مؤنث سالم)`, `لا الناهية`, `اسم لا منصوب لفظًا، لأنه شبيه بالمضاف`, `اسم لا منصوب لفظًا، لأنه مضاف`],
        },
        {
          title: `تركيب: فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾, in the قراءة that builds all three أسماء على الفتح.`,
          source: `فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ`,
          words: [`لَا`, `رَفَثَ`, `وَلَا`, `فُسُوقَ`, `وَلَا`, `جِدَالَ`],
          labels: [`لا النافية للجنس`, `اسم لا الأول مبني على الفتح`, `حرف عطف + لا النافية للجنس (مكررة)`, `اسم لا الثاني مبني على الفتح`, `حرف عطف + لا النافية للجنس (مكررة)`, `اسم لا الثالث مبني على الفتح`],
          distractors: [`اسم لا الأول مرفوع`, `اسم لا الثاني مرفوع`, `اسم لا الثالث مرفوع`, `خبر لا مرفوع`, `حرف عطف + لا الناهية (مكررة)`, `اسم لا الثاني مبني على الكسر في محل نصب`],
        },
        {
          title: `تركيب: لَّا بَيْعٌ فِيهِ وَلَا خُلَّةٌ وَلَا شَفَاعَةٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿لَّا بَيْعٌ فِيهِ وَلَا خُلَّةٌ وَلَا شَفَاعَةٌ﴾, where all three أسماء are مرفوعة.`,
          source: `لَّا بَيْعٌ فِيهِ وَلَا خُلَّةٌ وَلَا شَفَاعَةٌ`,
          words: [`لَا`, `بَيْعٌ`, `فِيهِ`, `وَلَا`, `خُلَّةٌ`, `وَلَا`, `شَفَاعَةٌ`],
          labels: [`لا النافية للجنس`, `اسم لا الأول مرفوع`, `جار ومجرور: خبر لا`, `حرف عطف + لا النافية للجنس (مكررة)`, `اسم لا الثاني مرفوع`, `حرف عطف + لا النافية للجنس (مكررة)`, `اسم لا الثالث مرفوع`],
          distractors: [`اسم لا الأول مبني على الفتح في محل نصب`, `اسم لا الثاني مبني على الفتح`, `اسم لا الثالث مبني على الفتح`, `اسم لا مبني على الفتح`, `حرف عطف + لا الناهية (مكررة)`, `خبر لا مرفوع`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'المجرور',
      subtitle: 'The Genitive Noun — its two types, and how a زائد حرف جر can wrap a word in الجر لفظًا while its true role stays مرفوع or منصوب محلًّا',
      concepts: [
        {
          heading: 'المجرور بحرف الجر',
          lines: [
            { html: `المجرور is the third and last of the three أقسام المعمول, after المرفوعات and المنصوبات. Compared to those two — each of which branches into a long list of distinct positions — المجرور is narrow: it comes down to just two types.`, list: false },
            { box: { title: 'Definition', lines: [`المجرور نوعان فقط: المجرور بحرف الجر، والمجرور بالإضافة`] } },
            { html: `<bdi>المجرور بحرف الجر</bdi> is a اسم drawn into الجر by a حرف جر (preposition). ﴿أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ﴾ — "Give full measure and weight in justice" — <bdi>القِسط</bdi> is مجرور by the حرف جر <bdi>الباء</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `﴿أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ﴾ — القِسط is مجرور. Which type of المجرور does this illustrate?`,
            kind: 'mcq',
            options: [`المجرور بحرف الجر (الباء)`, `المجرور بالإضافة`, `مجرور لفظًا لكنه مرفوع محلًّا`, `مجرور لفظًا لكنه منصوب محلًّا`],
            correct: 0,
          },
        },
        {
          heading: 'المجرور بالإضافة، والتمييز الذي يكون مجرورًا بها',
          lines: [
            { html: `The second type is <bdi>المجرور بالإضافة</bdi> — genitive by إضافة, construct annexation. ﴿أُجِيبُ دَعْوَةَ الدَّاعِ﴾ — "I answer the call of the caller" — <bdi>الداعِ</bdi> is مجرور because it is مضاف إليه.`, list: false },
            { box: { title: 'Careful', lines: [`قَدْ يَكونُ التَّمْييزُ مَجْرورًا بِالإِضافَةِ لا مَنْصوبًا`] } },
            { html: `The detailed rules governing both types have already been laid out implicitly in earlier chapters — أحكام العامل covers المجرور بحرف الجر, and أحكام الاسم المضاف covers المجرور بالإضافة, so neither needs re-deriving here. A good illustration of how these chapters overlap: <bdi>التمييز</bdi> is usually listed under المنصوبات out of convenience (تغليبًا), but it can in fact turn out to be مجرور بالإضافة instead of منصوب.`, list: false },
            { html: `﴿فِي سِتَّةِ أَيَّامٍ﴾ — "in six days" — <bdi>أيام</bdi> here is تمييز, but it is مجرور بالإضافة to <bdi>سِتَّةِ</bdi>, not منصوب at all.`, list: false },
          ],
          exercise: {
            prompt: `التمييز is usually classified under المنصوبات as a matter of تغليب (convenience), yet in ﴿فِي سِتَّةِ أَيَّامٍ﴾ the تمييز أيام is not منصوب at all. What is its actual إعراب?`,
            kind: 'mcq',
            options: [`مجرور بالإضافة إلى ستة`, `منصوب على التمييز`, `مرفوع على الفاعلية`, `مجرور بحرف الجر`],
            correct: 0,
          },
        },
        {
          heading: 'المجرور لفظًا، الفاعل مرفوع محلًّا',
          lines: [
            { html: `A noun can be drawn into الجر by a زائد (redundant, purely augmenting) حرف جر on its surface form, even though its real grammatical role stays exactly what it would have been without that حرف.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ يُجَرُّ بِحَرْفِ جَرٍّ زائِدٍ اسْمٌ هُوَ في الحَقيقَةِ مَرْفوعٌ أَوْ مَنْصوبٌ في المَحَلِّ`] } },
            { html: `الحرف الزائد doesn't change the word's true grammatical function at all; it only adds توكيد.`, list: false },
            { html: `﴿وَكَفَىٰ بِاللَّهِ وَكِيلًا﴾ — "And sufficient is Allah as a Trustee" — <bdi>لَفْظُ الجَلالَةِ</bdi> is مجرور لفظًا, by the زائدة باء, but محلًّا it is the فاعل, مرفوع, of <bdi>كفى</bdi>. التقدير (the underlying sense): <bdi>وَكَفَى اللهُ وَكيلًا</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَكَفَىٰ بِاللَّهِ وَكِيلًا﴾ — لَفْظُ الجَلالَةِ appears مجرورًا by the زائدة باء. What is its real grammatical role؟`,
            kind: 'mcq',
            options: [`فاعل مرفوع محلًّا لـ"كفى"`, `مفعول به منصوب محلًّا`, `مبتدأ مرفوع محلًّا`, `مضاف إليه مجرور حقيقة`],
            correct: 0,
          },
        },
        {
          heading: 'المجرور لفظًا، المفعول به منصوب محلًّا',
          lines: [
            { html: `The same phenomenon shows up with a different زائد حرف and a different true role — منصوب rather than مرفوع.`, list: false },
            { box: { title: 'Example', lines: [`مَا كَانَ لَنَا أَن نُّشْرِكَ بِاللَّهِ مِن شَيْءٍ`] } },
            { html: `"It was not for us to associate anything with Allah." <bdi>شيء</bdi> is مجرور لفظًا, by the زائدة <bdi>مِنْ</bdi>, but محلًّا it is مفعول به, منصوب, of <bdi>نُشرك</bdi>. التقدير: <bdi>أَنْ نُشْرِكَ بِاللهِ شَيْئًا</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `﴿مَا كَانَ لَنَا أَن نُّشْرِكَ بِاللَّهِ مِن شَيْءٍ﴾ — شيء is مجرور لفظًا بـ"مِن" الزائدة. What is its true grammatical role?`,
            kind: 'mcq',
            options: [`مفعول به منصوب محلًّا لـ"نُشرك"`, `فاعل مرفوع محلًّا`, `مبتدأ مرفوع محلًّا`, `نعت منصوب محلًّا`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `المجرور comes down to how many types?`, options: [`اثنان`, `ثلاثة`, `أربعة`, `خمسة`], correct: 0 },
        { q: `﴿أُجِيبُ دَعْوَةَ الدَّاعِ﴾ — الداعِ is مجرور. By what؟`, options: [`بالإضافة`, `بحرف الجر`, `بحرف جر زائد`, `لا شيء — هو مرفوع`], correct: 0 },
        { q: `﴿فِي سِتَّةِ أَيَّامٍ﴾ — أيام is تمييز. Is it منصوب here؟`, options: [`No — it is مجرور بالإضافة`, `Yes — التمييز is always منصوب`, `Yes, because it follows a عدد`, `No — it is مجرور بحرف الجر`], correct: 0 },
        { q: `﴿وَكَفَىٰ بِاللَّهِ وَكِيلًا﴾ — لَفْظُ الجَلالَةِ is مجرور لفظًا. What is its true role؟`, options: [`فاعل مرفوع محلًّا`, `مفعول به منصوب محلًّا`, `مبتدأ مرفوع محلًّا`, `مضاف إليه مجرور حقيقة`], correct: 0 },
        { q: `﴿مَا كَانَ لَنَا أَن نُّشْرِكَ بِاللَّهِ مِن شَيْءٍ﴾ — شيء is مجرور لفظًا بـ"مِن" الزائدة. What is its true role؟`, options: [`مفعول به منصوب محلًّا`, `فاعل مرفوع محلًّا`, `مبتدأ مرفوع محلًّا`, `نعت منصوب`], correct: 0 },
        { q: `A زائد حرف جر draws a noun into الجر لفظًا. Does that change the noun's true grammatical role؟`, options: [`No — the true role stays exactly what it would be without the حرف`, `Yes — the noun becomes truly مجرور`, `Yes — the noun becomes مبنيًّا instead`, `No, but only if the حرف is بـ specifically`], correct: 0 },
      ],
      bank: [
        { title: `المجرور: كم نوعا؟`, kind: 'mcq', prompt: `المرفوعات and المنصوبات both branch into a long list of distinct positions. How many types does المجرور come down to؟`, options: [`اثنان`, `ثلاثة`, `أربعة`, `خمسة`], correct: 0 },
        { title: `أوفوا بالقسط: أي نوع؟`, kind: 'mcq', prompt: `﴿أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ﴾ — القِسط is مجرور. Which type؟`, options: [`مجرور بحرف الجر (الباء)`, `مجرور بالإضافة`, `مجرور لفظًا لكنه مرفوع محلًّا`, `مجرور لفظًا لكنه منصوب محلًّا`], correct: 0 },
        { title: `أجيب دعوة الداع: أي نوع؟`, kind: 'mcq', prompt: `﴿أُجِيبُ دَعْوَةَ الدَّاعِ﴾ — الدَّاعِ is مجرور. Which type؟`, options: [`مجرور بالإضافة, because it is مضاف إليه`, `مجرور بحرف الجر`, `مجرور لفظًا لكنه مرفوع محلًّا`, `مجرور لفظًا لكنه منصوب محلًّا`], correct: 0 },
        { title: `أحكام المجرور: أين فُصِّلت؟`, kind: 'mcq', prompt: `The detailed rules for both المجرور بحرف الجر and المجرور بالإضافة were already laid out in earlier chapters. Which two chapters؟`, options: [`أحكام العامل، وأحكام الاسم المضاف`, `أحكام الفاعل، وأحكام المفعول به`, `أحكام النواسخ، وأحكام حروف العطف`, `أحكام النعت، وأحكام التوكيد`], correct: 0 },
        { title: `التمييز: منصوب أم مجرور؟`, kind: 'mcq', prompt: `التمييز is usually classified under المنصوبات as a matter of تغليب (convenience). Does that mean it is always منصوب in fact؟`, options: [`No — it can in fact be مجرور بالإضافة instead, as ﴿فِي سِتَّةِ أَيَّامٍ﴾ shows`, `Yes — التمييز is always منصوب without exception`, `No — التمييز is always مجرور بحرف الجر, never منصوب`, `Yes, unless it follows a عدد`], correct: 0 },
        { title: `في ستة أيام: إعراب أيام`, kind: 'mcq', prompt: `﴿فِي سِتَّةِ أَيَّامٍ﴾ — أيام is تمييز. What is its actual إعراب here؟`, options: [`مجرور بالإضافة إلى ستة`, `منصوب على التمييز`, `مرفوع على الفاعلية`, `مجرور بحرف الجر`], correct: 0 },
        { title: `الحرف الزائد: هل يغير الوظيفة؟`, kind: 'mcq', prompt: `A زائد (redundant) حرف جر can draw a noun into الجر on its surface. Does that change the noun's real grammatical function؟`, options: [`No — its true role (مرفوع or منصوب) stays exactly what it would have been without the حرف; only توكيد is added`, `Yes — the noun becomes truly مجرور, replacing whatever role it had`, `No — the noun becomes مبنيًّا instead`, `Yes, but only if the زائد حرف is بـ specifically`], correct: 0 },
        { title: `وكفى بالله وكيلا: إعراب الله لفظًا`, kind: 'mcq', prompt: `﴿وَكَفَىٰ بِاللَّهِ وَكِيلًا﴾ — لَفْظُ الجَلالَةِ appears مجرورًا. What is drawing it into الجر لفظًا؟`, options: [`الباء الزائدة`, `الباء الأصلية`, `الإضافة`, `Nothing — it is مرفوع لفظًا, not مجرور`], correct: 0 },
        { title: `وكفى بالله وكيلا: إعراب الله محلًّا`, kind: 'mcq', prompt: `﴿وَكَفَىٰ بِاللَّهِ وَكِيلًا﴾ — despite appearing مجرورًا لفظًا, what is لَفْظِ الجَلالَةِ's true grammatical role؟`, options: [`فاعل مرفوع محلًّا لـ"كفى"`, `مفعول به منصوب محلًّا`, `مبتدأ مرفوع محلًّا`, `مضاف إليه مجرور حقيقة`], correct: 0 },
        { title: `التقدير: وكفى الله وكيلا`, kind: 'mcq', prompt: `﴿وَكَفَىٰ بِاللَّهِ وَكِيلًا﴾'s underlying sense (التقدير), once the زائدة باء is set aside, is which of these؟`, options: [`وَكَفَى اللهُ وَكيلًا`, `وَكَفَى بِاللهِ وَكيلٌ`, `وَكَفَى اللهَ وَكيلًا`, `وَكَفَى لِلَّهِ وَكيلًا`], correct: 0 },
        { title: `ما كان لنا أن نشرك بالله من شيء: إعراب شيء لفظًا`, kind: 'mcq', prompt: `﴿مَا كَانَ لَنَا أَن نُّشْرِكَ بِاللَّهِ مِن شَيْءٍ﴾ — شيءٍ appears مجرورًا. What is drawing it into الجر لفظًا؟`, options: [`مِنْ الزائدة`, `مِنْ الأصلية`, `الإضافة`, `حرف جر مقدر`], correct: 0 },
        { title: `ما كان لنا أن نشرك بالله من شيء: إعراب شيء محلًّا`, kind: 'mcq', prompt: `Despite appearing مجرورًا لفظًا, what is شيء's true grammatical role in ﴿مَا كَانَ لَنَا أَن نُّشْرِكَ بِاللَّهِ مِن شَيْءٍ﴾؟`, options: [`مفعول به منصوب محلًّا لـ"نُشرك"`, `فاعل مرفوع محلًّا`, `مبتدأ مرفوع محلًّا`, `نعت منصوب محلًّا`], correct: 0 },
        { title: `التقدير: أن نشرك بالله شيئا`, kind: 'mcq', prompt: `﴿مَا كَانَ لَنَا أَن نُّشْرِكَ بِاللَّهِ مِن شَيْءٍ﴾'s underlying sense, once the زائدة مِن is set aside, is:`, options: [`أَنْ نُشْرِكَ بِاللهِ شَيْئًا`, `أَنْ نُشْرِكَ بِاللهِ شَيْءٌ`, `أَنْ نُشْرِكَ اللهَ شَيْئًا`, `أَنْ نُشْرِكَ بِشَيْءٍ اللهَ`], correct: 0 },
        { title: `مجرور لفظًا: القاسم المشترك بين المثالين`, kind: 'mcq', prompt: `وَكَفَىٰ بِاللَّهِ وَكِيلًا and مَا كَانَ لَنَا أَن نُّشْرِكَ بِاللَّهِ مِن شَيْءٍ both show the same phenomenon with a زائد حرف جر. What is the shared pattern؟`, options: [`A noun مجرور لفظًا by a زائد حرف جر, while its true role (مرفوع or منصوب) stays what it would have been without that حرف`, `A noun that is genuinely مجرور in both لفظ and محل`, `A noun that becomes مبنيًّا because of the زائد حرف`, `A noun whose حرف جر is أصلي, not زائد, in both cases`], correct: 0 },
        {
          title: `تركيب: أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ﴾.`,
          source: `أَوْفُوا الْمِكْيَالَ وَالْمِيزَانَ بِالْقِسْطِ`,
          words: [`أَوْفُوا`, `الْمِكْيَالَ`, `وَالْمِيزَانَ`, `بِـ`, `الْقِسْطِ`],
          labels: [`فعل أمر وفاعله (واو الجماعة)`, `مفعول به أول منصوب`, `معطوف على المفعول به منصوب`, `حرف جر`, `اسم مجرور بحرف الجر`],
          distractors: [`مجرور لفظًا لكنه مرفوع محلًّا`, `مجرور لفظًا لكنه منصوب محلًّا`, `مضاف إليه مجرور`, `مفعول به ثان منصوب`, `فعل أمر وفاعله (نون النسوة)`, `مجرور بالإضافة`],
        },
        {
          title: `تركيب: أُجِيبُ دَعْوَةَ الدَّاعِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ﴿أُجِيبُ دَعْوَةَ الدَّاعِ﴾.`,
          source: `أُجِيبُ دَعْوَةَ الدَّاعِ`,
          words: [`أُجِيبُ`, `دَعْوَةَ`, `الدَّاعِ`],
          labels: [`فعل مضارع وفاعله المستتر`, `مفعول به منصوب، وهو مضاف`, `مضاف إليه مجرور بالإضافة`],
          distractors: [`مجرور بحرف الجر`, `مبتدأ مرفوع`, `تمييز مجرور بالإضافة`, `مجرور لفظًا لكنه مرفوع محلًّا`, `مجرور لفظًا لكنه منصوب محلًّا`, `فعل مضارع وفاعله (واو الجماعة)`],
        },
        {
          title: `تركيب: فِي سِتَّةِ أَيَّامٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ﴿فِي سِتَّةِ أَيَّامٍ﴾, where التمييز comes out مجرورًا بالإضافة, not منصوبًا.`,
          source: `فِي سِتَّةِ أَيَّامٍ`,
          words: [`فِي`, `سِتَّةِ`, `أَيَّامٍ`],
          labels: [`حرف جر`, `اسم مجرور بـ"في"، وهو مضاف`, `تمييز مجرور بالإضافة (لا منصوب)`],
          distractors: [`تمييز منصوب`, `مضاف إليه مجرور بالإضافة`, `حرف عطف`, `مضاف إليه مجرور بحرف الجر`, `مجرور لفظًا لكنه مرفوع محلًّا`, `مجرور لفظًا لكنه منصوب محلًّا`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'النعت',
      subtitle: 'The Adjectival التابع — what qualifies as a نعت, حقيقي vs سببي, and how the described noun can vanish and leave the نعت standing alone',
      concepts: [
        {
          heading: 'النعت: تعريفه ومصطلحاته',
          lines: [
            { html: `After المرفوعات، المنصوبات، and المجرورات — the three أقسام of المعمول that take their إعراب directly from a governing عامل — comes one final family: <bdi>المعمول بالتبعية</bdi>, called <bdi>تابع</bdi>. A تابع doesn't take its إعراب from a direct عامل at all; it simply follows (تبعية) the word before it, its متبوع, in that word's own إعراب.`, list: false },
            { html: `المعمول بالتبعية comes in five types, of which النعت is the first and most prominent.`, list: false },
            { box: { title: 'Definition', lines: [`النَّعْتُ، وَيُسَمَّى أَيْضًا صِفَةً: الكَلِمَةُ الَّتي تَصِفُ مَتْبوعَها وَتَتْبَعُهُ في الإِعْرابِ`] } },
            { html: `The متبوع itself is called <bdi>مَنْعوت</bdi> or <bdi>مَوْصوف</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `Unlike المرفوعات، المنصوبات، and المجرورات, a تابع such as النعت doesn't take its إعراب from a direct عامل at all. Where does its إعراب actually come from?`,
            kind: 'mcq',
            options: [`It simply follows (تبعية) the إعراب of the word before it, its متبوع`, `It always takes النصب regardless of what precedes it`, `It is always مرفوع, like a مبتدأ`, `It has no إعراب at all`],
            correct: 0,
          },
        },
        {
          heading: 'شروط ما يكون نعتًا: المشتق بمعنى الفعل',
          lines: [
            { html: `النعت can only be one of two things. The first is a مشتق — a derived form — carrying the meaning of a فعل.`, list: false },
            { box: { title: 'Rule', lines: [`أَوَّلُ ما يَصْلُحُ نَعْتًا: مُشْتَقٌّ بِمَعْنَى الفِعْلِ، كَاسْمِ الفاعِلِ وَاسْمِ المَفْعولِ وَالصِّفَةِ المُشَبَّهَةِ`] } },
            { html: `﴿وَقَالَ رَجُلٌ مُّؤْمِنٌ﴾ — "and a believing man said" — <bdi>مُؤْمِنٌ</bdi> is اسم فاعل, a مشتق carrying the meaning of the فعل <bdi>آمَنَ</bdi>, and it describes <bdi>رَجُلٌ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَقَالَ رَجُلٌ مُّؤْمِنٌ﴾ — مُؤْمِنٌ describes رَجُلٌ and is itself اسم فاعل from the فعل آمَنَ. What category of نعت does that make مؤمن?`,
            kind: 'mcq',
            options: [`مشتق بمعنى الفعل`, `مشابه للمشتق`, `اسم إشارة`, `مصدر غير ميمي`],
            correct: 0,
          },
        },
        {
          heading: 'ما يشابه المشتق في معنى الفعل',
          lines: [
            { html: `The second thing that can serve as نعت is not a true مشتق, but something that resembles a مشتق in carrying a verbal meaning.`, list: false },
            { table: { title: 'مشابه للمشتق', headers: ['النوع', 'المثال', 'الشرح'], rows: [
              [`اسم الإشارة`, `﴿اذْهَبُوا بِقَمِيصِي هَٰذَا﴾`, `هٰذا carries the descriptive sense المُشارُ إِلَيْهِ`],
              [`ذو وفروعها (ذوا، ذوو، ذات، أولات...)`, `﴿جَنَّتَيْنِ ذَوَاتَيْ أُكُلٍ خَمْطٍ﴾`, `ذَواتَي carries the sense of صاحِبَتَي، "possessing"`],
              [`المصدر غير الميمي`, `بَهَتانٍ كاذِبينَ`, `used for التوكيد والمبالغة`],
              [`الاسم الموصول بهمزة الوصل`, `﴿اُعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ﴾`, `بخلاف مَنْ وَما، اللذين لا يقعان نعتًا`],
              [`اسم العدد`, `﴿فِي ظُلُمَاتٍ ثَلَاثٍ﴾`, `اسم العدد يصف الموصوف قبله`],
            ] } },
            { box: { title: 'Careful', lines: [`الاسْمُ المَنْسوبُ يَعْمَلُ عَمَلَ النَّعْتِ أَيْضًا، لِأَنَّ ياءَ النَّسَبِ تُحَوِّلُ الاسْمَ الجامِدَ إلى وَصْفٍ`] } },
            { html: `<bdi>دُرِّيٌّ</bdi> in ﴿كَوْكَبٌ دُرِّيٌّ﴾ — "a brilliant star" — means "resembling الدُّرّ (pearl) in its brightness." This is a natural extension of the مشابه للمشتق principle above, even though it isn't spelled out as its own separate category in المتن's own wording.`, list: false },
          ],
          exercise: {
            prompt: `دُرِّيٌّ in ﴿كَوْكَبٌ دُرِّيٌّ﴾ ends in ياء النسبة, and functions as a نعت meaning "resembling الدُّرّ (pearl) in brightness." Is الاسم المنسوب a true مشتق؟`,
            kind: 'mcq',
            options: [`No — it functions as نعت because ياء النسبة turns a جامد noun into a descriptive one, extending the مشابه للمشتق principle`, `Yes — every اسم منسوب is a true مشتق`, `No — الاسم المنسوب can never serve as نعت`, `Yes, because it ends in تنوين`],
            correct: 0,
          },
        },
        {
          heading: 'أنواع النعت: الحقيقي والسببي',
          lines: [
            { html: `النعت is of two kinds, distinguished by what they describe and where their فاعل comes from.`, list: false },
            { box: { title: 'Rule', lines: [`النَّعْتُ نَوْعانِ: حَقيقيٌّ، وَسَبَبِيٌّ`] } },
            { table: { title: 'النعت الحقيقي والسببي', headers: ['النوع', 'يتبع متبوعه في', 'فاعله', 'مثال'], rows: [
              [`نعت حقيقي`, `الإعراب، التعريف/التنكير، التذكير/التأنيث، الإفراد/التثنية/الجمع`, `ضمير مستتر يعود للمنعوت`, `رَجُلٌ مُؤْمِنٌ`],
              [`نعت سببي`, `الإعراب، التعريف/التنكير فقط`, `اسم ظاهر بعده`, `القَرْيَةِ الظَّالِمِ أَهْلُهَا`],
            ] } },
            { html: `A نعت حقيقي expresses a معنى (a quality) directly in متبوعه itself. A نعت سببي expresses a معنى not in متبوعه itself, but in something connected to it — which is why it follows its متبوع only in الإعراب and التعريف/التنكير, not in التذكير/التأنيث or number, since those last two follow the نعت's own فاعل instead. ﴿مِنْ هَٰذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾ — "from this town whose people were wrongdoers" — <bdi>الظّالِمِ</bdi> is مفرد ومذكر even though its منعوت, <bdi>القَرْيَة</bdi>, is مؤنث, because the فاعل of الظّالِم is <bdi>اَهْلُها</bdi> ("its people," مذكر), not القرية itself.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿مِنْ هَٰذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾, الظّالِمِ is مفرد ومذكر even though its منعوت القَرْيَة is مؤنث. Why doesn't الظالم match القرية in تذكير/تأنيث the way a نعت حقيقي would؟`,
            kind: 'mcq',
            options: [`Because it is نعت سببي, which follows its فاعل الظاهر (أهلها) in تذكير/تأنيث and عدد, not its منعوت`, `Because النعت never agrees with its منعوت in Arabic`, `Because القرية is actually مذكر`, `Because الظالم is not really a نعت here`],
            correct: 0,
          },
        },
        {
          heading: 'عود الضمير في النعت السببي، وإنابة "أل" عنه، ونكتته البلاغية',
          lines: [
            { box: { title: 'Careful', lines: [`لا بُدَّ لِلنَّعْتِ السَّبَبِيِّ مِنْ ضَميرٍ يَعودُ إلى مَنْعوتِهِ، وَقَدْ تَنوبُ عَنْهُ "أل"`] } },
            { html: `A نعت سببي must always have a ضمير tying the descriptive clause back to its منعوت, but this ضمير can be replaced by <bdi>أل</bdi> in place of an explicit pronoun. ﴿شَدِيدِ الْعِقَابِ﴾ — "severe in punishment" — means <bdi>شَديدٍ عِقابُهُ</bdi> ("severe, its punishment is"); <bdi>العِقاب</bdi> is definite with أل, and this أل stands in for the returning ضمير in place of <bdi>عِقابِهِ</bdi>.`, list: false },
            { html: `This distribution carries a بلاغي (rhetorical) nuance: نعت سببي allows something to be described through what is connected to it, without pinning the description directly onto the original noun — which is why the Qur'an says ﴿الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾, attributing the wrongdoing to <bdi>اَهْلُها</bdi> ("its people") rather than to <bdi>القرية</bdi> ("the town") itself, while elsewhere it describes <bdi>مَكَّة</bdi> directly as <bdi>المُكَرَّمة</bdi> (a نعت حقيقي) — honoring the town itself — rather than calling it <bdi>الظّالِمة</bdi>, even though it was its inhabitants, not the town itself, who committed the wrong.`, list: false },
          ],
          exercise: {
            prompt: `﴿شَدِيدِ الْعِقَابِ﴾ means شَديدٍ عِقابُهُ. The نعت سببي here needs a ضمير tying it back to its منعوت, yet no separate pronoun appears. What stands in for that ضمير?`,
            kind: 'mcq',
            options: [`أل on العِقاب`, `تنوين on شديد`, `Nothing — نعت سببي doesn't always need a ضمير`, `A hidden ضمير مستتر, the same kind نعت حقيقي uses`],
            correct: 0,
          },
        },
        {
          heading: 'حذف المنعوت وإقامة النعت مقامه',
          lines: [
            { box: { title: 'Example', lines: [`﴿وَاعْمَلُوا صَالِحًا﴾ — أَيْ وَاعْمَلوا عَمَلًا صالِحًا`] } },
            { html: `The منعوت (the described noun) may be dropped, with النعت alone left standing in its place, whenever context makes it recoverable. ﴿وَاعْمَلُوا صَالِحًا﴾ — "and do righteous [deeds]" — stands for <bdi>وَاعْمَلوا عَمَلًا صالِحًا</bdi>; the منعوت <bdi>عَمَلًا</bdi> is dropped, and the نعت <bdi>صالِحًا</bdi> alone carries the sentence.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَاعْمَلُوا صَالِحًا﴾ is understood as وَاعْمَلُوا عَمَلًا صَالِحًا. What has happened to عَمَلًا, the منعوت, in the actual quoted wording?`,
            kind: 'mcq',
            options: [`It has been dropped, leaving صَالِحًا (the نعت) alone to carry the sentence, since السياق makes عملا recoverable`, `It has become the نعت instead of صالحا`, `It has been replaced by أل`, `Nothing — عملا is still present, just unvoweled`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines النعت?`, options: [`The word that describes its متبوع and follows it in إعراب`, `A word that takes its إعراب from a direct عامل`, `The متبوع itself`, `A حرف linking two متبوعين`], correct: 0 },
        { q: `﴿وَقَالَ رَجُلٌ مُّؤْمِنٌ﴾ — مُؤْمِنٌ is اسم فاعل. Which category of نعت is that؟`, options: [`مشتق بمعنى الفعل`, `مشابه للمشتق`, `مصدر غير ميمي`, `اسم عدد`], correct: 0 },
        { q: `﴿اذْهَبُوا بِقَمِيصِي هَٰذَا﴾ — هٰذا describes قميصي without being a true مشتق. Which category is it؟`, options: [`مشابه للمشتق`, `مشتق بمعنى الفعل`, `مصدر غير ميمي`, `اسم موصول`], correct: 0 },
        { q: `A نعت حقيقي's فاعل is a hidden ضمير مستتر. What kind of فاعل does a نعت سببي have?`, options: [`اسم ظاهر named right after it`, `A second ضمير مستتر`, `No فاعل at all`, `A ضمير متصل on المنعوت`], correct: 0 },
        { q: `﴿شَدِيدِ الْعِقَابِ﴾ = شَديدٍ عِقابُهُ. What stands in for the missing ضمير?`, options: [`أل on العِقاب`, `تنوين on شديد`, `Nothing — no ضمير is needed`, `A hidden ضمير مستتر`], correct: 0 },
        { q: `﴿وَاعْمَلُوا صَالِحًا﴾ = وَاعْمَلُوا عَمَلًا صَالِحًا. What happened to عَمَلًا?`, options: [`It was dropped, leaving صالحا alone`, `It became the نعت`, `It was replaced by أل`, `It is still present, unvoweled`], correct: 0 },
      ],
      bank: [
        { title: `النعت: تعريفه`, kind: 'mcq', prompt: `Which of the following correctly defines النعت (also called صِفَة)؟`, options: [`The word that describes its متبوع and follows it in إعراب`, `A word that takes its إعراب from a direct عامل, not from what precedes it`, `The word being described, also called منعوت`, `A حرف that links two متبوعين together`], correct: 0 },
        { title: `منعوت وموصوف`, kind: 'mcq', prompt: `The متبوع of a نعت is also known by two other names. What are they؟`, options: [`منعوت، أو موصوف`, `فاعل، أو مفعول`, `مضاف، أو مضاف إليه`, `مبتدأ، أو خبر`], correct: 0 },
        { title: `التابع: من أين يأخذ إعرابه؟`, kind: 'mcq', prompt: `Unlike المرفوعات، المنصوبات، والمجرورات, a تابع such as النعت doesn't take its إعراب from a direct عامل at all. Where does it come from instead؟`, options: [`It follows (تبعية) the إعراب of the word before it, its متبوع`, `It is always منصوب regardless of context`, `It is always مرفوع, like a مبتدأ`, `It has no fixed إعراب at all`], correct: 0 },
        { title: `رجل مؤمن: مشتق بمعنى الفعل`, kind: 'mcq', prompt: `﴿وَقَالَ رَجُلٌ مُّؤْمِنٌ﴾ — مُؤْمِنٌ is اسم فاعل from آمَنَ, describing رَجُلٌ. Which category of نعت does that make مؤمن؟`, options: [`مشتق بمعنى الفعل`, `مشابه للمشتق`, `مصدر غير ميمي`, `اسم عدد`], correct: 0 },
        { title: `ما الذي يصلح مشتقًا بمعنى الفعل؟`, kind: 'mcq', prompt: `Besides اسم الفاعل, which other two forms count as مشتق بمعنى الفعل and can serve as نعت؟`, options: [`اسم المفعول، والصفة المشبهة`, `اسم التفضيل، واسم الآلة`, `المصدر، واسم المكان`, `الفعل الماضي، والفعل المضارع`], correct: 0 },
        { title: `اذهبوا بقميصي هذا: اسم الإشارة نعتًا`, kind: 'mcq', prompt: `﴿اذْهَبُوا بِقَمِيصِي هَٰذَا﴾ — هٰذا describes قميصي, meaning "the shirt that is pointed-to." Is هٰذا a true مشتق؟`, options: [`No — it is مشابه للمشتق, carrying a descriptive sense without being derived from a فعل`, `Yes — اسم الإشارة is always a true مشتق`, `No — اسم الإشارة can never serve as نعت`, `Yes, because it points to something specific`], correct: 0 },
        { title: `جنتين ذواتي أكل خمط: ذو وفروعها`, kind: 'mcq', prompt: `﴿جَنَّتَيْنِ ذَوَاتَيْ أُكُلٍ خَمْطٍ﴾ — ذَوَاتَي carries the sense of صاحِبَتَي ("possessing"), describing جَنَّتَيْنِ. Which category of نعت is ذو and its variants؟`, options: [`مشابه للمشتق`, `مشتق بمعنى الفعل`, `مصدر غير ميمي`, `اسم موصول`], correct: 0 },
        { title: `بهتان كاذبين: مصدر غير ميمي`, kind: 'mcq', prompt: `بَهَتَانٍ كَاذِبِينَ means "sheer, exaggerated lying" — كاذبين here is a مصدر غير ميمي used as نعت. What is it used for؟`, options: [`التوكيد والمبالغة`, `التصغير`, `التثنية`, `النسب`], correct: 0 },
        { title: `اعبدوا ربكم الذي خلقكم: الاسم الموصول`, kind: 'mcq', prompt: `﴿اُعْبُدُوا رَبَّكُمُ الَّذِي خَلَقَكُمْ﴾ — الَّذِي serves as نعت. Which two relative pronouns can never serve as نعت the way الذي does؟`, options: [`مَنْ وَما, because their opening همزة is not همزة الوصل`, `الذي والتي, because they are مبنيان`, `أل والتاء, because they are حروف, not أسماء`, `كل وبعض, because they are always tied to إضافة`], correct: 0 },
        { title: `ظلمات ثلاث: اسم العدد نعتًا`, kind: 'mcq', prompt: `﴿فِي ظُلُمَاتٍ ثَلَاثٍ﴾ — ثَلَاثٍ describes ظُلُمَاتٍ. Which category of نعت is an اسم عدد like ثلاث؟`, options: [`مشابه للمشتق`, `مشتق بمعنى الفعل`, `مصدر غير ميمي`, `اسم موصول`], correct: 0 },
        { title: `كوكب دري: الاسم المنسوب نعتًا`, kind: 'mcq', prompt: `دُرِّيٌّ in ﴿كَوْكَبٌ دُرِّيٌّ﴾ ends in ياء النسبة and functions as نعت, meaning "resembling الدُّرّ (pearl) in brightness." Is الاسم المنسوب a true مشتق؟`, options: [`No — it functions as نعت because ياء النسبة turns a جامد noun into a descriptive one, extending the مشابه للمشتق principle`, `Yes — every اسم منسوب is a true مشتق`, `No — الاسم المنسوب can never serve as نعت`, `Yes, because it ends in تنوين`], correct: 0 },
        { title: `النعت الحقيقي: ماذا يتبع فيه متبوعه؟`, kind: 'mcq', prompt: `A نعت حقيقي follows its متبوع in every respect. Which four things؟`, options: [`الإعراب، التعريف أو التنكير، التذكير أو التأنيث، والإفراد أو التثنية أو الجمع`, `الإعراب والتعريف فقط`, `التذكير والتأنيث فقط`, `العدد فقط`], correct: 0 },
        { title: `النعت السببي: ماذا يتبع فيه متبوعه؟`, kind: 'mcq', prompt: `A نعت سببي follows its متبوع in only two respects, unlike النعت الحقيقي. Which two؟`, options: [`الإعراب، والتعريف أو التنكير`, `التذكير والتأنيث`, `الإفراد والتثنية والجمع`, `الإعراب فقط`], correct: 0 },
        { title: `فاعل النعت الحقيقي والسببي`, kind: 'mcq', prompt: `A نعت حقيقي's فاعل is a hidden ضمير مستتر referring back to المنعوت. What kind of فاعل does a نعت سببي have instead؟`, options: [`اسم ظاهر (an explicit noun) named right after it`, `A second ضمير مستتر, identical to النعت الحقيقي's`, `No فاعل at all`, `A ضمير متصل attached to المنعوت itself`], correct: 0 },
        { title: `القرية الظالم أهلها: لماذا لم يطابق النعت متبوعه في التأنيث؟`, kind: 'mcq', prompt: `﴿مِنْ هَٰذِهِ الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾ — الظّالِمِ is مفرد ومذكر even though its منعوت القَرْيَة is مؤنث. Why؟`, options: [`Because it is نعت سببي, and follows its فاعل الظاهر (أهلها, مذكر) in تذكير/تأنيث, not its منعوت`, `Because النعت never agrees with its منعوت in Arabic`, `Because القرية is secretly مذكر`, `Because الظالم is not really a نعت in this ayah`], correct: 0 },
        { title: `شديد العقاب: أل بدل الضمير`, kind: 'mcq', prompt: `﴿شَدِيدِ الْعِقَابِ﴾ means شَديدٍ عِقابُهُ. A نعت سببي normally needs an explicit ضمير tying it back to its منعوت. What stands in for that ضمير here؟`, options: [`أل on العِقاب`, `تنوين on شديد`, `No ضمير is needed at all in this case`, `A hidden ضمير مستتر, the same kind النعت الحقيقي uses`], correct: 0 },
        { title: `النكتة البلاغية في النعت السببي`, kind: 'mcq', prompt: `﴿الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾ pins the wrongdoing on أهلها, not on القرية itself — while elsewhere the Qur'an calls مكة المكرمة directly, never المكة الظالمة, even though its people erred too. What does النعت السببي make possible that النعت الحقيقي doesn't؟`, options: [`Describing something through what is connected to it, without pinning the description directly onto the original noun`, `Describing something in a way that always flatters it`, `Describing a معرفة noun without تكرار`, `Avoiding the need for a فاعل altogether`], correct: 0 },
        { title: `واعملوا صالحا: حذف المنعوت`, kind: 'mcq', prompt: `﴿وَاعْمَلُوا صَالِحًا﴾ is understood as وَاعْمَلُوا عَمَلًا صَالِحًا. What has happened to عَمَلًا, the منعوت, in the actual wording؟`, options: [`It has been dropped, leaving صَالِحًا (the نعت) alone to carry the sentence, since السياق makes عملا recoverable`, `It has become the نعت instead of صالحا`, `It has been replaced by أل`, `It is still present, just spelled differently`], correct: 0 },
        {
          title: `تركيب: رَجُلٌ مُّؤْمِنٌ`,
          kind: 'tarkeeb',
          instruction: `Identify المنعوت and النعت in ﴿رَجُلٌ مُّؤْمِنٌ﴾.`,
          source: `رَجُلٌ مُّؤْمِنٌ`,
          words: [`رَجُلٌ`, `مُؤْمِنٌ`],
          labels: [`منعوت (موصوف) مرفوع`, `نعت (مشتق بمعنى الفعل: اسم فاعل) مرفوع`],
          distractors: [`نعت سببي مرفوع`, `نعت (مشابه للمشتق: اسم إشارة) مرفوع`, `نعت (مشتق بمعنى الفعل: اسم مفعول) مرفوع`, `منعوت (موصوف) منصوب`, `خبر مرفوع`, `مبتدأ مرفوع`],
        },
        {
          title: `تركيب: بِقَمِيصِي هَٰذَا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of بِقَمِيصِي هَٰذَا.`,
          source: `بِقَمِيصِي هَٰذَا`,
          words: [`بِـ`, `قَمِيصِي`, `هَٰذَا`],
          labels: [`حرف جر`, `اسم مجرور بالباء (منعوت، مضاف لياء المتكلم)`, `نعت (اسم إشارة)`],
          distractors: [`نعت سببي`, `حرف عطف`, `بدل مجرور`, `اسم مجرور بالباء (منعوت، مضاف لكاف الخطاب)`, `نعت (مشتق بمعنى الفعل: اسم فاعل)`, `مضاف إليه مجرور`],
        },
        {
          title: `تركيب: بَهَتَانٍ كَاذِبِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify المنعوت and النعت in بَهَتَانٍ كَاذِبِينَ.`,
          source: `بَهَتَانٍ كَاذِبِينَ`,
          words: [`بَهَتَانٍ`, `كَاذِبِينَ`],
          labels: [`منعوت مجرور`, `نعت (مصدر غير ميمي للمبالغة) مجرور`],
          distractors: [`نعت سببي`, `فاعل مرفوع`, `حال منصوب`, `مضاف إليه مجرور`, `نعت (مشتق بمعنى الفعل: اسم فاعل) مجرور`, `نعت (مصدر ميمي للمبالغة) مجرور`],
        },
        {
          title: `تركيب: فِي ظُلُمَاتٍ ثَلَاثٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿فِي ظُلُمَاتٍ ثَلَاثٍ﴾.`,
          source: `فِي ظُلُمَاتٍ ثَلَاثٍ`,
          words: [`فِي`, `ظُلُمَاتٍ`, `ثَلَاثٍ`],
          labels: [`حرف جر`, `منعوت مجرور`, `نعت (اسم عدد) مجرور`],
          distractors: [`نعت سببي`, `مضاف إليه مجرور`, `تمييز مجرور بالإضافة`, `حرف عطف`, `نعت (مشابه للمشتق: اسم إشارة) مجرور`, `نعت (مصدر غير ميمي للمبالغة) مجرور`],
        },
        {
          title: `تركيب: الْقَرْيَةِ الظَّالِمِ أَهْلُهَا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of الْقَرْيَةِ الظَّالِمِ أَهْلُهَا, a نعت سببي example.`,
          source: `الْقَرْيَةِ الظَّالِمِ أَهْلُهَا`,
          words: [`الْقَرْيَةِ`, `الظَّالِمِ`, `أَهْلُهَا`],
          labels: [`منعوت مجرور`, `نعت سببي مجرور`, `فاعل "الظالم" (اسم ظاهر) مرفوع`],
          distractors: [`نعت حقيقي مجرور`, `مضاف إليه مجرور`, `مبتدأ مرفوع`, `بدل مجرور`, `فاعل "الظالم" (ضمير مستتر) مرفوع`, `نعت (مشتق بمعنى الفعل: اسم فاعل) مجرور`],
        },
        {
          title: `تركيب: شَدِيدِ الْعِقَابِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in شَدِيدِ الْعِقَابِ, where "أل" stands in for the returning ضمير.`,
          source: `شَدِيدِ الْعِقَابِ`,
          words: [`شَدِيدِ`, `الْعِقَابِ`],
          labels: [`نعت سببي، وهو مضاف`, `مضاف إليه مجرور لفظًا، وهو فاعل "شديد" معنى`],
          distractors: [`نعت حقيقي، وهو مضاف`, `منعوت مرفوع`, `فاعل مرفوع`, `تمييز مجرور بالإضافة`, `مضاف إليه مجرور لفظًا، وهو مفعول به "شديد" معنى`, `اسم مجرور بحرف الجر`],
        },
      ],
    },
  ],
};

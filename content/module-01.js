// Module 01 — الكلمة (The Word)
//
// Source: app-lessons/002-the-word-kalimah.md through
// app-lessons/008-the-particle-harf.md (الكبرى في النحو). Scoped to الكلمة
// itself — its definition, مفرد/مركب, the signs and kinds of الاسم, the
// definition and signs of الفعل, and الحرف — per 2026-08-12 scoping
// decision: app-lessons is far richer per topic than the old course, so
// this module covers only what the old Module 01 spent its first two
// lessons on, not the full old word→sentence→إعراب range. Sentence-level
// topics (essential parts of a sentence onward, app-lessons 009+) are
// future modules, not this one.
//
// Concept bodies use the lines[]/box/table shape (content-sarf's pattern,
// not the older body-string shape content/README.md documents from the
// previous Module 01) so Core Text / Definition / Example / Careful /
// Rule / Meaning boxes render as concept-source-box, matching how
// app-lessons marks up the source. Bank تركيب items use the flat
// words[]/labels[]/distractors[] schema (matching this course's
// established shape) rather than the newer cells/rows diagram schema —
// app-lessons' own "Visual tarkeeb" tables are single-tier, word-to-label,
// so the flat schema is the closer match; the one two-tier example
// (أن تصوموا خير) is split into two single-tier bank items instead of
// forced into one multi-row diagram. Not every lesson has bank تركيب
// items — lesson 1's source material (لفظ/قول/مفرد/مركب) is definitional
// rather than built around a parsed example sentence, so none are forced
// in there.
export default {
  id: '01',
  title: 'الكلمة',
  heading: 'المقدمة',
  blurb: 'الكلمة — its definition, its division into مفرد and مركب, and how to tell اسم, فعل, and حرف apart by their signs.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الكلمة',
      subtitle: 'The Word — لفظ, قول, and being مفرد rather than مركب',
      concepts: [
        {
          heading: 'اللفظ',
          lines: [
            { html: `Grammar begins by fixing what counts as a word before dividing it into <bdi>اسم</bdi>, <bdi>فعل</bdi>, or <bdi>حرف</bdi>. The first term to define is <bdi>لَفْظ</bdi>.`, list: false },
            { box: { title: 'Definition', lines: [`اللَّفْظُ كُلُّ مَا خَرَجَ مِنْ فَمِ الإِنْسَانِ مِنْ صَوْتٍ`] } },
            { html: `A <bdi>لفظ</bdi> is any sound that leaves a person's mouth — a cough or a small child's babbling both count, since the word itself carries the sense of throwing something out.`, list: false },
            { html: `Grammar books split لفظ into two kinds: (1) <bdi>لفظ موضوع</bdi> — an utterance coined for a meaning, (2) <bdi>لفظ مهمل</bdi> — an utterance with no recognised meaning at all. Only لفظ موضوع is studied in grammar; مهمل is named only so the term is recognised when other books use it.`, list: false },
          ],
          exercise: {
            prompt: `A cough and a small child's babbling both count as a لفظ, but only one kind of لفظ is studied in grammar. Which kind?`,
            kind: 'mcq',
            options: [`لفظ موضوع — an utterance coined for a meaning`, `لفظ مهمل — an utterance with no recognised meaning`, `لفظ مفرد — a single utterance`, `لفظ مركب — a compound utterance`],
            correct: 0,
          },
        },
        {
          heading: 'القول',
          lines: [
            { html: `Every meaningful spoken word is a لفظ, but not every لفظ is meaningful. The next term narrows لفظ down to the kind grammar studies.`, list: false },
            { box: { title: 'Definition', lines: [`القَوْلُ لَفْظٌ دَالٌّ عَلَى مَعْنًى`] } },
            { html: `A <bdi>قول</bdi> is a لفظ that points to a meaning — this is exactly the لفظ موضوع named above, described now by what it does rather than how it was coined.`, list: false },
            { html: `<bdi>رَجُلٌ</bdi> (a man) is a قول, because the sound is tied to a known meaning. A random noise with no such tie is not.`, list: false },
          ],
          exercise: {
            prompt: `Which definition correctly describes القول؟`,
            kind: 'mcq',
            options: [`A لفظ that points to a meaning`, `Any sound that leaves a person's mouth`, `A single meaningful unit, not a construction`, `A meaning tied to a زمان`],
            correct: 0,
          },
        },
        {
          heading: 'الكلمة: قول مفرد',
          lines: [
            { html: `With لفظ and قول defined, grammar can now define the word itself.`, list: false },
            { box: { title: 'Core Text', lines: [`البَابُ الأَوَّلُ فِي الكَلِمَةِ`, `وَهِيَ قَوْلٌ مُفْرَدٌ`] } },
            { box: { title: 'Definition', lines: [`الكَلِمَةُ قَوْلٌ مُفْرَدٌ`] } },
            { html: `A كلمة is a meaningful single utterance. The definition has two parts: قول excludes any sound with no recognised meaning, and <bdi>مفرد</bdi> excludes a construction built from separate meaningful parts.`, list: false },
            { html: `This is why grammar opens here. Later chapters classify a كلمة as اسم, فعل, or حرف, and that classification only makes sense once the student already knows what counts as one word.`, list: false },
          ],
          exercise: {
            prompt: `الكلمة is defined as قول مفرد. What does the مفرد half of that definition rule out?`,
            kind: 'mcq',
            options: [`A construction built from separate meaningful parts`, `A sound with no recognised meaning at all`, `A word tied to a specific زمان`, `A word that accepts أل or تنوين`],
            correct: 0,
          },
        },
        {
          heading: 'المفرد',
          lines: [
            { html: `مفرد, the second half of الكلمة's definition, has its own precise sense.`, list: false },
            { box: { title: 'Definition', lines: [`المُفْرَدُ مَا لا تَدُلُّ أَجْزَاؤُهُ عَلَى مَعْنًى`] } },
            { html: `A مفرد word is one whose parts do not separately point to meanings. <bdi>رَجُلٌ</bdi> means "a man", but its letters ر، ج، ل do not each carry a piece of that meaning — the whole word carries it together.`, list: false },
            { html: `The test is not how many letters a word has; most words have several. The test is whether those parts independently carry parts of the meaning.`, list: false },
          ],
          exercise: {
            prompt: `رَجُلٌ has three letters — ر، ج، ل — yet counts as مفرد. Why?`,
            kind: 'mcq',
            options: [`Because no single letter of it separately carries part of the meaning "man"`, `Because it begins with أل`, `Because it is only three letters long`, `Because it names something tangible`],
            correct: 0,
          },
        },
        {
          heading: 'المركب',
          lines: [
            { html: `The opposite of مفرد is <bdi>مركب</bdi>.`, list: false },
            { box: { title: 'Definition', lines: [`المُرَكَّبُ مَا تَدُلُّ أَجْزَاؤُهُ عَلَى مَعْنًى`] } },
            { html: `In <bdi>كِتَابُ الوَلَدِ</bdi> (the boy's book), كتاب carries its own meaning and الولد carries its own meaning; the construction is built from two meaningful parts, so it is مركب.`, list: false },
            { html: `A مركب is further either: (1) <bdi>مركب ناقص</bdi> — it does not make a complete sentence, only a phrase, such as a مضاف with its مضاف إليه or a منعوت with its نعت; (2) <bdi>مركب تام</bdi> — it makes a complete جملة.`, list: false },
            { html: `كِتَابُ الوَلَدِ is مركب ناقص: كتاب is مضاف and الولد is مضاف إليه, and the two together still fall short of a sentence.`, list: false },
          ],
          exercise: {
            prompt: `كِتَابُ الوَلَدِ is مركب, and its two words never form a complete جملة on their own. Which kind of مركب is it?`,
            kind: 'mcq',
            options: [`مركب ناقص`, `مركب تام`, `مركب مزج`, `مركب عطف`],
            correct: 0,
          },
        },
        {
          heading: 'تنبيهات: مفرد الأعداد ومركّبات لا تُعامَل كأصلها',
          lines: [
            { html: `Two notes prevent common confusions about مفرد and مركب.`, list: false },
            { html: `First, مفرد does not mean the same thing in every chapter. In the definition of الكلمة it means "not مركب"; in the discussion of number it means "singular", opposed to مثنى and جمع.`, list: false },
            { box: { title: 'Careful', lines: [`رِجَالٌ مُفْرَدٌ بِاعْتِبَارِ التَّرْكِيبِ، وجَمْعٌ بِاعْتِبَارِ العَدَدِ`] } },
            { html: `<bdi>رِجَالٌ</bdi> is one word, so it is مفرد when the question is single word vs. construction — but it is جمع when the question is number, since it means "men". Always ask which discussion is being had.`, list: false },
            { html: `Second, some compounds whose parts once carried separate meanings are no longer treated that way: (1) <bdi>تركيب المزج</bdi>, such as <bdi>بَعْلَبَكَّ</bdi> (Baalbek), is treated as مفرد in this discussion even though it looks built from two words; (2) <bdi>تركيب العدد</bdi> from eleven to nineteen, such as <bdi>أَحَدَ عَشَرَ</bdi> (eleven), is treated as تركيب مزج; (3) <bdi>تركيب العطف</bdi> in numbers like <bdi>أَحَدٌ وَعِشْرُونَ</bdi> (twenty-one) is treated as تركيب عطف, because of the و joining the two parts.`, list: false },
          ],
          exercise: {
            prompt: `بَعْلَبَكَّ looks like two words, yet for the definition of الكلمة it is treated as مفرد rather than مركب. Why?`,
            kind: 'mcq',
            options: [`As a proper name it now functions as one combined unit — a تركيب مزج`, `Because it has fewer than four letters`, `Because it accepts تنوين`, `Because both of its parts point to the same meaning`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `What is the correct definition of القول؟`, options: [`A لفظ that points to a meaning`, `Any sound that leaves a person's mouth`, `Something whose parts do not indicate a meaning`, `Something whose parts do indicate a meaning`], correct: 0 },
        { q: `لفظ splits into two kinds. Which one is studied in grammar?`, options: [`لفظ مهمل`, `لفظ موضوع`, `لفظ مفرد`, `لفظ مركب`], correct: 1 },
        { q: `الكلمة is defined as قول مفرد. What does the قول half of that definition exclude?`, options: [`A sound with no recognised meaning`, `A construction built from meaningful parts`, `A word tied to a زمان`, `A word that takes تنوين`], correct: 0 },
        { q: `كِتَابُ الوَلَدِ is مركب because:`, options: [`Each of its two words, كتاب and الولد, carries its own meaning`, `It has more than three letters`, `It ends in a كسرة`, `It cannot take أل`], correct: 0 },
        { q: `Discussing رِجَالٌ as one word versus a construction — not as a matter of count — رِجَالٌ is:`, options: [`مركب, since it names more than one man`, `مفرد, since it is one word`, `مثنى`, `جمع`], correct: 1 },
        { q: `أَحَدَ عَشَرَ (eleven) is treated as which kind of تركيب?`, options: [`تركيب مزج`, `تركيب عطف`, `مركب تام`, `مركب ناقص فقط`], correct: 0 },
      ],
      bank: [
        { title: `لفظ vs قول`, kind: 'mcq', prompt: `A random unintelligible noise, with no recognised meaning behind it, still counts as a لفظ. Does it also count as a قول؟`, options: [`No — قول requires the لفظ to point to a meaning`, `Yes — every لفظ is automatically a قول`, `Only if it is more than one letter long`, `Only if it is written with تنوين`], correct: 0 },
        { title: `لفظ موضوع`, kind: 'mcq', prompt: `رَجُلٌ is a لفظ coined for the meaning "a man". Which term names that kind of لفظ?`, options: [`لفظ موضوع`, `لفظ مهمل`, `لفظ مفرد`, `لفظ مركب`], correct: 0 },
        { title: `لفظ مهمل`, kind: 'mcq', prompt: `Why is a small child's meaningless babbling still called a لفظ, even though it is لفظ مهمل and not studied further in grammar?`, options: [`Because لفظ only requires a sound leaving the mouth, not a recognised meaning`, `Because babbling always resembles a real Arabic root`, `Because مهمل means "silent"`, `Because grammar studies both موضوع and مهمل equally`], correct: 0 },
        { title: `Two-part definition of الكلمة`, kind: 'mcq', prompt: `الكلمة قول مفرد names two conditions a word must meet. What are they?`, options: [`It must be meaningful (قول) and a single unit (مفرد)`, `It must take أل and تنوين`, `It must be tied to a زمان and have a فاعل`, `It must be مركب تام`], correct: 0 },
        { title: `Why start with الكلمة`, kind: 'mcq', prompt: `Grammar's introductory chapter defines الكلمة before dividing it into اسم, فعل, and حرف. Why does that division depend on the definition coming first?`, options: [`Because the student needs to know what counts as one word before classifying it`, `Because اسم, فعل, and حرف are themselves types of لفظ مهمل`, `Because الكلمة and الجملة mean the same thing`, `Because only مركب words can be classified`], correct: 0 },
        { title: `مفرد: definition`, kind: 'mcq', prompt: `Which of the following is the correct definition of المفرد?`, options: [`Something whose parts do not indicate a meaning`, `Something whose parts do indicate a meaning`, `A لفظ that points to a meaning`, `A قول that does not give a complete sense`], correct: 0 },
        { title: `مركب: definition`, kind: 'mcq', prompt: `Which of the following is the correct definition of المركب؟`, options: [`ما تدل أجزاؤه على معنى`, `ما لا تدل أجزاؤه على معنى`, `كل ما خرج من فم الإنسان من صوت`, `قول مفرد`], correct: 0 },
        { title: `رجل: مفرد or مركب؟`, kind: 'mcq', prompt: `رَجُلٌ is one word. Is it مفرد or مركب, and why?`, options: [`مفرد — its letters do not separately carry parts of its meaning`, `مركب — it has three letters`, `مركب — each of its letters carries part of the meaning`, `مفرد — it accepts تنوين`], correct: 0 },
        { title: `كتاب الولد: مفرد or مركب؟`, kind: 'mcq', prompt: `كِتَابُ الوَلَدِ is مركب. What kind of مركب is it, given that the two words together still do not form a complete جملة?`, options: [`مركب ناقص`, `مركب تام`, `تركيب مزج`, `تركيب عطف`], correct: 0 },
        { title: `مضاف and مضاف إليه`, kind: 'mcq', prompt: `In كِتَابُ الوَلَدِ, what role does each word play?`, options: [`كتاب is مضاف, الولد is مضاف إليه`, `كتاب is مضاف إليه, الولد is مضاف`, `Both words are مضاف`, `Neither word is مضاف`], correct: 0 },
        { title: `مركب ناقص vs مركب تام`, kind: 'mcq', prompt: `What distinguishes مركب تام from مركب ناقص?`, options: [`مركب تام forms a complete جملة; مركب ناقص is only a phrase`, `مركب تام has more letters than مركب ناقص`, `مركب ناقص always includes a فعل`, `They are two names for the same thing`], correct: 0 },
        { title: `رجال: which sense of مفرد?`, kind: 'mcq', prompt: `رِجَالٌ (men) is discussed twice in grammar: once as a single word versus a construction, and once for its number. In the first discussion it is مفرد; in the second it is جمع. What does this show?`, options: [`مفرد carries a different sense depending on which discussion is being had`, `رِجَالٌ is مركب in both discussions`, `مفرد and جمع are interchangeable terms`, `Only number matters for classifying a word as مفرد`], correct: 0 },
        { title: `بعلبك: تركيب المزج`, kind: 'mcq', prompt: `بَعْلَبَكَّ (Baalbek) originated from two meaningful parts, but is treated as مفرد for the definition of الكلمة. What kind of تركيب is this?`, options: [`تركيب المزج`, `تركيب العطف`, `مركب ناقص`, `مركب تام`], correct: 0 },
        { title: `أحد عشر: how it is treated`, kind: 'mcq', prompt: `أَحَدَ عَشَرَ (eleven) is a compound number from eleven to nineteen. Which category of تركيب is it placed under?`, options: [`تركيب مزج`, `تركيب عطف`, `مركب تام`, `لفظ مهمل`], correct: 0 },
        { title: `أحد وعشرون: the role of و`, kind: 'mcq', prompt: `أَحَدٌ وَعِشْرُونَ (twenty-one) is treated as تركيب العطف rather than تركيب المزج. What in the word makes the difference?`, options: [`The و joining its two parts`, `Its total number of letters`, `Its ending in تنوين`, `It being a number rather than a noun`], correct: 0 },
        { title: `Which is not مركب`, kind: 'mcq', prompt: `Of the following, which one is مفرد rather than مركب, in the sense used to define الكلمة?`, options: [`بَعْلَبَكَّ`, `كِتَابُ الوَلَدِ`, `أَحَدٌ وَعِشْرُونَ`, `أَحَدَ عَشَرَ`], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'علامات الاسم',
      subtitle: 'Signs of the Noun — اسم’s definition and the six signs that identify it',
      concepts: [
        {
          heading: 'تعريف الاسم',
          lines: [
            { box: { title: 'Definition', lines: [`الاسمُ مَا دَلَّ عَلَى مَعْنًى فِي نَفْسِهِ غَيْرِ مُقْتَرِنٍ بِزَمَانٍ`] } },
            { html: `An <bdi>اسم</bdi> is a word that carries meaning in itself and is not tied to tense. This is what separates it from فعل: a فعل also carries meaning in itself, but its form is connected to زمان, while an اسم carries meaning without its form telling you ماضي, حال, or استقبال.`, list: false },
            { html: `<bdi>الله</bdi>, <bdi>الرَّحْمٰن</bdi>, and <bdi>الرَّحِيم</bdi> are all أسماء: they carry meaning, but their forms do not indicate ماضي, حال, or استقبال.`, list: false },
          ],
          exercise: {
            prompt: `لَفْظُ الجَلالَةِ carries meaning, but its form gives no indication of ماضي, حال, or استقبال. What does that make it?`,
            kind: 'mcq',
            options: [`اسم`, `فعل`, `حرف`, `مركب تام`],
            correct: 0,
          },
        },
        {
          heading: 'العلامات الست',
          lines: [
            { html: `An اسم can be recognised through several signs. One valid sign is enough — a word does not need to show every sign at once.`, list: false },
            { table: { title: 'علامات الاسم', headers: ['Sign', 'Meaning', 'Example', 'Translation'], rows: [
              [`الجر`, `the word can be مجرور`, `بِسْمِ اللهِ`, `in the name of Allah`],
              [`أل`, `it accepts أل التعريف`, `الرَّحْمٰنِ الرَّحِيمِ`, `the Most Merciful, the Especially Merciful`],
              [`التنوين`, `it accepts normal تنوين`, `هُدًى`, `guidance`],
              [`الإسناد إليه`, `something can be said about it`, `إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ`, `indeed Ibrahim is forbearing`],
              [`النداء`, `it can be called`, `يَا نُوحُ`, `O Nuh`],
              [`الإضافة`, `it can be مضاف`, `رَبِّ العَالَمِينَ`, `Lord of the worlds`],
            ] } },
            { html: `<bdi>الإسناد إليه</bdi> means the word can be the one something is said about — it can stand as مبتدأ or فاعل. In إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ, إبراهيم is the one being spoken about, so it is مسند إليه.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `بِسْمِ اللهِ`,
                translation: `In the name of Allah`,
                cells: [`بِـ`, `اسْمِ`, `اللهِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف جر` }, { start: 1, end: 1, role: `اسم مجرور بالباء` }, { start: 2, end: 2, role: `مضاف إليه مجرور` }] },
                ],
              },
            },
            { html: `اسم is مجرور because of بـ, showing الجر.`, list: false },
            { html: `لَفْظُ الجَلالَةِ اللهِ is مجرور because it is مضاف إليه.`, list: false },
            { box: { title: 'Careful', lines: [`العَلَامَةُ أَنْ يَكُونَ اللَّفْظُ نَفْسُهُ مَجْرُورًا، لا أَنْ يَظْهَرَ حَرْفُ جَرٍّ بِجِوَارِهِ`] } },
            {
              tarkeebDiagram: {
                sentence: `رَبِّ العَالَمِينَ`,
                translation: `Lord of the worlds`,
                cells: [`رَبِّ`, `العَالَمِينَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مضاف` }, { start: 1, end: 1, role: `مضاف إليه` }] },
                ],
              },
            },
            { html: `Being مضاف is itself a sign that رب is an اسم: since it can stand as the first part of an إضافة, it shows اسم behaviour.`, list: false },
          ],
          exercise: {
            prompt: `A word is مسند إليه when it is the one something is said about — able to stand as مبتدأ or فاعل. In إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ, which word is مسند إليه, and which sign of الاسم does that illustrate?`,
            kind: 'mcq',
            options: [`إبراهيم — الإسناد إليه`, `لحليم — النداء`, `إنّ — الإضافة`, `إبراهيم — التنوين`],
            correct: 0,
          },
        },
        {
          heading: 'العلامة أل',
          lines: [
            { html: `<bdi>أل</bdi> is the usual marker of definiteness, as in الرَّحْمٰنِ الرَّحِيمِ.`, list: false },
            { table: { title: 'ملاحظتان حول أل', headers: ['Point', 'Explanation'], rows: [
              [`أم في لغة حِمْير`, `Some people of حمير in Yemen used أم as a حرف تعريف instead of أل.`],
              [`ما هي العلامة بالضبط؟`, `Grammarians differed: سيبويه treated the لام as the marker, with the همزة added only because a word cannot begin with a silent letter; الخليل treated الألف واللام together as the marker; المبرد treated the open همزة as the marker, with the لام added to distinguish it from همزة الاستفهام.`],
            ] } },
            { html: `The حميري usage survives in a hadith:`, list: false },
            { box: { title: 'Example', lines: [`«لَيْسَ مِنَ امْبِرِّ امْصِيَامُ فِي امْسَفَرِ»`] } },
            { html: `Here <bdi>امبر</bdi> stands for البر, <bdi>امصيام</bdi> for الصيام, and <bdi>امسفر</bdi> for السفر — أم doing the work أل normally does.`, list: false },
          ],
          exercise: {
            prompt: `In the hadith لَيْسَ مِنَ امْبِرِّ امْصِيَامُ فِي امْسَفَرِ, the prefix ام stands in for a familiar Arabic marker. Which one, and from which dialect?`,
            kind: 'mcq',
            options: [`أل التعريف, from the dialect of حِمْير`, `تنوين, from the dialect of قريش`, `ياء النداء, from the dialect of تميم`, `لام الابتداء, from the dialect of حِمْير`],
            correct: 0,
          },
        },
        {
          heading: 'تنبيه على التنوين',
          lines: [
            { html: `The تنوين listed as علامة الاسم is ordinary grammatical تنوين — the kind هُدًى carries.`, list: false },
            { box: { title: 'Careful', lines: [`تَنْوِينُ التَّرَنُّمِ لَيْسَ عَلَامَةَ الاسْمِ`] } },
            { html: `<bdi>تنوين الترنم</bdi> is different: it appears at the ends of poetic lines for sound and rhythm, so it does not count as the علامة الاسم meant here.`, list: false },
            { box: { title: 'Rule', lines: [`يُغْتَفَرُ فِي الشِّعْرِ مَا لا يُغْتَفَرُ فِي غَيْرِهِ`] } },
            { box: { title: 'Example', lines: [`أَقِلِّي اللَّوْمَ عَاذِلَ وَالعِتَابَا`, `وَقُولِي إِنْ أَصَبْتُ لَقَدْ أَصَابَا`] } },
            { html: `"Lessen your blame, O critic, and your reproach; and say, if I have hit the mark, he has indeed hit the mark." The added ن sound at the end of وَالعِتَابَا and لَقَدْ أَصَابَا is تنوين الترنم, placed there to match the line's rhyme. It cannot be the علامة الاسم here: العِتَاب already carries أل, and أَصَابَ is a فعل — and since this تنوين can attach even to a فعل or a حرف, it is not the kind that marks an اسم.`, list: false },
          ],
          exercise: {
            prompt: `العِتَابَ already carries أل, yet the poetic line وَالعِتَابَا ends with an extra نون sound. What is that sound, and why does it not count as علامة الاسم?`,
            kind: 'mcq',
            options: [`تنوين الترنم — it marks the rhyme, and it can attach even to a فعل or a حرف`, `تنوين التمكين — it marks الاسم مباشرة`, `نون التوكيد — it is a sign of الفعل, not الاسم`, `ياء المخاطبة — it marks الأمر`],
            correct: 0,
          },
        },
        {
          heading: 'تنبيه: الفعل والحرف لا يكونان مجرورين',
          lines: [
            { box: { title: 'Rule', lines: [`الفِعْلُ وَالحَرْفُ لا يَكُونَانِ مَجْرُورَيْنِ، وَإِنْ دَخَلَ عَلَيْهِمَا جَارٌّ`] } },
            { html: `A فعل and a حرف never become مجرور, even when a جار appears to enter upon a structure containing them. What is actually مجرور in such cases is the اسم مؤول that structure forms, not the فعل or the حرف itself.`, list: false },
            { box: { title: 'Example', lines: [`لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا`] } },
            { html: `The لام comes before يَكُونَ, but يَكُونَ is not مجرور — it is منصوب by an أن مقدرة, and the لام enters upon the whole اسم مؤول.`, list: false },
            { box: { title: 'Example', lines: [`وَاشْهَدْ بِأَنَّا مُسْلِمُونَ`] } },
            { html: `أنّ is a حرف مشبه بالفعل, and the باء does not make أنّ itself مجرور. The whole مصدر مؤول it forms with the جملة after it is what is treated as مجرور بالباء.`, list: false },
          ],
          exercise: {
            prompt: `In لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا, a لام sits directly before the فعل يَكُونَ. Does that make يَكُونَ مجرور?`,
            kind: 'mcq',
            options: [`No — الفعل never becomes مجرور; the لام enters upon the whole اسم مؤول instead`, `Yes — any فعل preceded by a حرف جر becomes مجرور`, `No — يكون is مرفوع regardless of what precedes it`, `Yes, but only because it is مضارع`],
            correct: 0,
          },
        },
        {
          heading: 'تنبيه: يا لا تعني دائمًا أن ما بعدها منادى',
          lines: [
            { box: { title: 'Careful', lines: [`قَدْ تَدْخُلُ أَحْرُفُ النِّدَاءِ عَلَى غَيْرِ المُنَادَى`] } },
            { box: { title: 'Example', lines: [`يَا لَيْتَ قَوْمِي يَعْلَمُونَ`] } },
            { html: `In يا ليت, the word ليت is not being called. The يا here strengthens the wish and the grief behind it, the way a person naturally stretches the voice when distressed — so what settles النداء is genuine calling, not mere position after يا.`, list: false },
            { html: `Grammarians explain this يا in two ways: it may be حرف تنبيه, or it may be حرف نداء with the منادى omitted, understood as something like يَا هَؤُلَاءِ لَيْتَنِي. On either account, ليت itself is not a منادى.`, list: false },
          ],
          exercise: {
            prompt: `In يَا لَيْتَ قَوْمِي يَعْلَمُونَ, the word ليت follows يا directly. Is ليت a منادى?`,
            kind: 'mcq',
            options: [`No — النداء here is not genuine; ليت is not being called`, `Yes — anything following يا is automatically منادى`, `Yes, because ليت is an اسم`, `No, because ليت never appears after يا elsewhere`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of these is the correct definition of الاسم؟`, options: [`A word that carries meaning in itself and is not tied to tense`, `A word that carries meaning in itself while tied to tense`, `A word whose meaning is completed only through something else`, `Merely a لفظ that points to a meaning, nothing more`], correct: 0 },
        { q: `هُدًى ends in تنوين. Which علامة الاسم does that show?`, options: [`التنوين`, `الجر`, `النداء`, `الإضافة`], correct: 0 },
        { q: `يَا نُوحُ shows a noun being called. Which علامة الاسم does that illustrate?`, options: [`النداء`, `الإضافة`, `أل`, `الإسناد إليه`], correct: 0 },
        { q: `In the hadith لَيْسَ مِنَ امْبِرِّ امْصِيَامُ فِي امْسَفَرِ, what does the prefix ام replace?`, options: [`أل التعريف`, `تنوين`, `ياء النداء`, `لام الجر`], correct: 0 },
        { q: `In لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا, the لام sits before the فعل يَكُونَ. What does the rule الفعل والحرف لا يكونان مجرورين tell us about يَكُونَ here؟`, options: [`It is not مجرور — it is منصوب by أن مقدرة, and the لام enters upon the whole اسم مؤول`, `It is مجرور, since a حرف جر directly precedes it`, `It is مبني, since all أفعال المضارع after لام are مبنية`, `It is مرفوع, since لام never affects a فعل`], correct: 0 },
        { q: `In يَا لَيْتَ قَوْمِي يَعْلَمُونَ, is ليت a منادى, and why?`, options: [`No — the يا here strengthens the wish rather than calling anyone`, `Yes — every word after يا is منادى`, `Yes — ليت is a اسم, so it must be منادى`, `No — يا never precedes an اسم`], correct: 0 },
      ],
      bank: [
        { title: `اسم: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الاسم؟`, options: [`A word that carries meaning in itself and is not tied to tense`, `A word that carries meaning in itself while tied to tense`, `A word whose meaning is completed only through something else`, `Something whose parts do not indicate a meaning`], correct: 0 },
        { title: `الرحمن الرحيم: which sign?`, kind: 'mcq', prompt: `الرَّحْمٰنِ الرَّحِيمِ both carry أل. Which علامة الاسم does that show?`, options: [`أل`, `النداء`, `التنوين`, `الجر`], correct: 0 },
        { title: `إن إبراهيم لحليم: الإسناد إليه`, kind: 'mcq', prompt: `In إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ, إبراهيم is the one being spoken about. What is that sign called?`, options: [`الإسناد إليه`, `الإضافة`, `النداء`, `أل`], correct: 0 },
        { title: `One sign is enough`, kind: 'mcq', prompt: `A word shows only one of the six علامات الاسم — say, الجر — and none of the other five. Is that enough to call it an اسم؟`, options: [`Yes — one valid sign is enough`, `No — at least two signs are required`, `No — every اسم must show all six signs`, `Only if it also carries تنوين`], correct: 0 },
        { title: `بسم الله: recognising الجر`, kind: 'mcq', prompt: `In بِسْمِ اللهِ, اسم is مجرور by بـ. What does that show about اسم?`, options: [`It carries the علامة الجر, a sign of الاسم`, `It carries النداء`, `It is a فعل, since it follows a حرف`, `It is مبني, since it follows بـ`], correct: 0 },
        { title: `The sign is on the word itself`, kind: 'mcq', prompt: `A حرف جر appears next to a word, but the word itself is not مجرور. Does الجر still count as a sign of الاسم there?`, options: [`No — the sign requires the word itself to be مجرور, not merely a nearby حرف جر`, `Yes — any nearby حرف جر is enough`, `Yes, but only for indefinite nouns`, `No — الجر is never a sign of الاسم`], correct: 0 },
        { title: `رب العالمين: الإضافة`, kind: 'mcq', prompt: `In رَبِّ العَالَمِينَ, رب stands as the first part of an إضافة. What does that show about رب؟`, options: [`It is an اسم, since it can be مضاف`, `It is a فعل, since it precedes another اسم`, `It is a حرف, since it has no تنوين`, `It is مبني على الفتح`], correct: 0 },
        { title: `مضاف vs مضاف إليه`, kind: 'mcq', prompt: `In رَبِّ العَالَمِينَ, which word is المضاف and which is المضاف إليه؟`, options: [`رَبِّ is المضاف, العَالَمِينَ is المضاف إليه`, `العَالَمِينَ is المضاف, رَبِّ is المضاف إليه`, `Both are المضاف`, `Neither is المضاف`], correct: 0 },
        { title: `حمير's أم`, kind: 'mcq', prompt: `Some speakers of حِمْير used أم where most Arabic speakers use أل. What grammatical role does that أم play?`, options: [`حرف تعريف`, `حرف جر`, `حرف نداء`, `حرف عطف`], correct: 0 },
        { title: `Disagreement over أل's true marker`, kind: 'mcq', prompt: `Grammarians disagreed over exactly which part of أل is the true definiteness marker. Which pairing is correct?`, options: [`سيبويه: the لام; الخليل: الألف واللام together`, `سيبويه: الهمزة; الخليل: التنوين`, `المبرد: التنوين; سيبويه: الإضافة`, `الخليل: النداء; المبرد: الجر`], correct: 0 },
        { title: `تنوين الترنم vs علامة الاسم`, kind: 'mcq', prompt: `A poetic line ends with an extra نون sound added only to match the line's rhyme. Is that تنوين the علامة الاسم?`, options: [`No — it is تنوين الترنم, which can attach even to a فعل or a حرف`, `Yes — any تنوين at all counts as علامة الاسم`, `No — poetic lines never carry تنوين`, `Yes, but only in the last word of the poem`], correct: 0 },
        { title: `يغتفر في الشعر`, kind: 'mcq', prompt: `يُغْتَفَرُ فِي الشِّعْرِ مَا لا يُغْتَفَرُ فِي غَيْرِهِ is used to explain what kind of exception in poetry?`, options: [`Poetry tolerates forms — like تنوين الترنم — that ordinary speech does not`, `Poetry forbids تنوين entirely`, `Poetry requires every noun to carry أل`, `Poetry never uses النداء`], correct: 0 },
        { title: `أن مقدرة after لام`, kind: 'mcq', prompt: `In لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا, why is يَكُونَ not مجرور despite the لام directly before it?`, options: [`الفعل never becomes مجرور — it is منصوب by أن مقدرة, and the لام governs the whole اسم مؤول`, `Because لام never governs a فعل`, `Because يَكُونَ is already مرفوع and cannot change`, `Because the لام here is لام الابتداء, not لام الجر`], correct: 0 },
        { title: `أنّ and بـ`, kind: 'mcq', prompt: `In وَاشْهَدْ بِأَنَّا مُسْلِمُونَ, is أنّ itself مجرور بالباء?`, options: [`No — أنّ is a حرف and never becomes مجرور; the whole مصدر مؤول it forms is what is مجرور`, `Yes — any حرف directly after بـ becomes مجرور`, `No — أنّ is always مرفوع`, `Yes, because أنّ resembles a فعل`], correct: 0 },
        { title: `يا ليت: not a real نداء`, kind: 'mcq', prompt: `In يَا لَيْتَ قَوْمِي يَعْلَمُونَ, grammarians explain يا in two ways. Which pairing is correct?`, options: [`حرف تنبيه, or حرف نداء with the منادى omitted`, `حرف جر, or حرف عطف`, `حرف استفهام, or حرف نفي`, `حرف تحضيض, or حرف تفسير`], correct: 0 },
        { title: `Appearing after يا is not enough`, kind: 'mcq', prompt: `A word appears immediately after يا. Does that alone make it منادى?`, options: [`No — أحرف النداء can enter upon a word other than the true منادى`, `Yes — position after يا is the only requirement`, `Yes, unless the word is مبني`, `No — يا can never precede anything but a منادى`], correct: 0 },
        { title: `Picking out the recognised اسم among the six signs`, kind: 'mcq', prompt: `Which of these is one of the six recognised علامات الاسم described here?`, options: [`الإسناد إليه`, `التصريف إلى الماضي والمضارع`, `نون التوكيد`, `قبول ياء المخاطبة`], correct: 0 },
        {
          title: `تركيب: بِسْمِ اللهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of بِسْمِ اللهِ.`,
          source: `بِسْمِ اللهِ`,
          words: [`بِـ`, `اسْمِ`, `اللهِ`],
          labels: [`حرف جر`, `اسم مجرور بالباء`, `مضاف إليه مجرور`],
          distractors: [`مبتدأ`, `فعل أمر`, `فاعل`, `حرف عطف`],
        },
        {
          title: `تركيب: رَبِّ العَالَمِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in the إضافة رَبِّ العَالَمِينَ.`,
          source: `رَبِّ العَالَمِينَ`,
          words: [`رَبِّ`, `العَالَمِينَ`],
          labels: [`مضاف`, `مضاف إليه`],
          distractors: [`خبر`, `حرف جر`, `موصوف`, `صفة`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أقسام الاسم',
      subtitle: 'Kinds of the Noun — الصريح vs المؤول, and اسم ذات vs اسم معنى vs اسم صفة',
      concepts: [
        {
          heading: 'ضربا الاسم باعتبار إفراده وتركيبه',
          lines: [
            { html: `Looking at whether an اسم appears as a single word or as a تركيب, أسماء divide into two types.`, list: false },
            { table: { title: 'الصريح والمؤول', headers: ['Type', 'Meaning'], rows: [
              [`الاسم الصريح`, `the اسم by itself`],
              [`الاسم المؤول`, `a حرف مصدر together with the جملة after it`],
            ] } },
            { html: `This division is about form, not about the underlying discussion: sometimes the اسم is visible as one word, and sometimes a whole تركيب takes the place of an اسم in the جملة. What settles it is not whether the expression looks like one simple اسم, but whether it occupies the grammatical position of an اسم.`, list: false },
          ],
          exercise: {
            prompt: `الاسم الصريح and الاسم المؤول are two كأقسام of الاسم باعتبار إفراده وتركيبه. What settles which type a given expression is?`,
            kind: 'mcq',
            options: [`Whether it occupies the grammatical position of an اسم, not whether it looks like one simple word`, `How many letters the expression has`, `Whether the expression begins with أل`, `Whether the expression is مذكر or مؤنث`],
            correct: 0,
          },
        },
        {
          heading: 'الاسم الصريح',
          lines: [
            { box: { title: 'Definition', lines: [`الاسمُ الصَّرِيحُ: وَهُوَ الاسمُ وَحْدَهُ`] } },
            { html: `An اسم صريح is simply the اسم by itself — no reinterpretation is needed, since the word itself is already an اسم.`, list: false },
            { box: { title: 'Example', lines: [`الصَّوْمُ`] } },
            { html: `<bdi>الصَّوْمُ</bdi> is an اسم صريح: it appears as one اسم and can directly take a grammatical role such as مبتدأ, فاعل, or مفعول به, depending on the جملة it sits in.`, list: false },
          ],
          exercise: {
            prompt: `الصَّوْمُ appears as one word and can stand directly as مبتدأ, فاعل, or مفعول به without any reinterpretation. What kind of اسم is it?`,
            kind: 'mcq',
            options: [`اسم صريح`, `اسم مؤول`, `اسم صفة`, `اسم معنى`],
            correct: 0,
          },
        },
        {
          heading: 'الاسم المؤول',
          lines: [
            { box: { title: 'Definition', lines: [`الاسمُ المُؤَوَّلُ: وَهُوَ حَرْفُ مَصْدَرٍ مَعَ الجُمْلَةِ بَعْدَهَا`] } },
            { html: `An اسم مؤول is made from two things together: (1) a حرف مصدر, and (2) the جملة or verbal structure after it. Together, the two are interpreted as a مصدر — the word مؤول signals that the construction is understood as something else for the purpose of analysis.`, list: false },
            { box: { title: 'Example', lines: [`وَأَنْ تَصُومُوا خَيْرٌ`] } },
            { html: `Here أن is the حرف مصدر, and تصوموا is the جملة after it. Neither part is the اسم مؤول on its own; the two together make it, and the whole unit fills one اسم slot in the جملة.`, list: false },
            { box: { title: 'Meaning', lines: [`أَنْ تَصُومُوا = صِيَامُكُمْ`] } },
            { html: `"That you fast" is understood as "your fasting" — which is why the construction can stand where a مبتدأ stands: a مبتدأ has to be an اسم, so أن تصوموا is interpreted as a مصدر before the جملة is analysed further.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَأَنْ تَصُومُوا خَيْرٌ`,
                translation: `And that you fast is better.`,
                cells: [`أَنْ`, `تَصُومُوا`, `خَيْرٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف مصدر` }, { start: 1, end: 1, role: `فعل مضارع مع فاعله` }] },
                  { position: 'above', labels: [{ start: 0, end: 1, role: `اسم مؤول في محل رفع مبتدأ` }, { start: 2, end: 2, role: `خبر` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In وَأَنْ تَصُومُوا خَيْرٌ, why does the whole phrase أَنْ تَصُومُوا, not أَنْ or تَصُومُوا alone, count as the اسم مؤول standing in for المبتدأ؟`,
            kind: 'mcq',
            options: [`Because الاسم المؤول is made of the حرف مصدر together with the جملة after it, interpreted together as a مصدر`, `Because أَنْ alone is already an اسم صريح`, `Because تَصُومُوا alone already carries تنوين`, `Because المبتدأ must always be two words`],
            correct: 0,
          },
        },
        {
          heading: 'الموصوف واسم الذات',
          lines: [
            { html: `An اسم may also be classified by what it points to in meaning, not by its form.`, list: false },
            { box: { title: 'Definition', lines: [`المَوْصُوفُ: مَا دَلَّ عَلَى ذَاتٍ تَحْتَمِلُ الصِّفَةَ`] } },
            { html: `<bdi>الموصوف</bdi> — also called <bdi>اسم الذات</bdi> — is the thing being described.`, list: false },
          ],
          exercise: {
            prompt: `الموصوف is defined as ما دل على ذات تحتمل الصفة. By which other name is it also known?`,
            kind: 'mcq',
            options: [`اسم الذات`, `اسم المعنى`, `اسم الصفة`, `الاسم المؤول`],
            correct: 0,
          },
        },
        {
          heading: 'اسم العين واسم المعنى',
          lines: [
            { html: `اسم الذات divides further into two types.`, list: false },
            { table: { title: 'اسم عين واسم معنى', headers: ['Type', 'Definition', 'Example', 'Translation'], rows: [
              [`اسم عين`, `points to something that exists in itself`, `رَجُلٌ`, `a man`],
              [`اسم معنى`, `points to something that does not exist by itself, but exists in another`, `عِلْمٌ`, `knowledge`],
            ] } },
            { box: { title: 'Careful', lines: [`عِلْمٌ لَيْسَ ذَاتًا قَائِمَةً بِنَفْسِهَا، بَلْ مَعْنًى يُوجَدُ فِي غَيْرِهِ`] } },
            { html: `<bdi>علم</bdi> is not a physical object standing by itself — it is a meaning found in someone who has it, so it is اسم معنى, unlike <bdi>رجل</bdi>, which exists in itself and is اسم عين.`, list: false },
          ],
          exercise: {
            prompt: `عِلْمٌ (knowledge) has no independent existence of its own — it exists only in the person who has it. Which kind of اسم ذات is it?`,
            kind: 'mcq',
            options: [`اسم معنى`, `اسم عين`, `اسم الصفة`, `الاسم المؤول`],
            correct: 0,
          },
        },
        {
          heading: 'اسم الصفة',
          lines: [
            { box: { title: 'Definition', lines: [`الصِّفَةُ: مَا دَلَّ عَلَى وَصْفِ مَوْصُوفٍ`] } },
            { html: `<bdi>اسم الصفة</bdi> gives a description of a موصوف.`, list: false },
            { box: { title: 'Example', lines: [`رَجُلٌ صَالِحٌ`] } },
            { html: `Here رجل is the thing being described, and صالح is the description.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `رَجُلٌ صَالِحٌ`,
                translation: `A righteous man`,
                cells: [`رَجُلٌ`, `صَالِحٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `موصوف` }, { start: 1, end: 1, role: `صفة` }] },
                ],
              },
            },
            { table: { title: 'الذات والمعنى والصفة معًا', headers: ['Word', 'Type', 'Reason'], rows: [
              [`رَجُلٌ`, `اسم عين`, `exists in itself`],
              [`عِلْمٌ`, `اسم معنى`, `exists in another`],
              [`عَالِمٌ`, `اسم صفة`, `describes one who has علم`],
            ] } },
            { html: `The distinction is based on meaning, not on إعراب: رجل, علم, and عالم may all behave as أسماء in a جملة, but they point to different kinds of meanings. رجل gives a thing that can be described, علم gives a meaning that exists in someone, and عالم gives a description of the person who possesses that meaning.`, list: false },
          ],
          exercise: {
            prompt: `عَالِمٌ describes the person who possesses عِلْمٌ. Which of the three — اسم عين, اسم معنى, or اسم صفة — is عَالِمٌ؟`,
            kind: 'mcq',
            options: [`اسم صفة`, `اسم عين`, `اسم معنى`, `الاسم المؤول`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الصَّوْمُ appears as one word and stands directly for مبتدأ or فاعل without needing reinterpretation. What kind of اسم is it?`, options: [`اسم صريح`, `اسم مؤول`, `اسم معنى`, `اسم صفة`], correct: 0 },
        { q: `Which of the following correctly defines الاسم المؤول؟`, options: [`A حرف مصدر together with the جملة after it`, `The اسم by itself`, `Something that points to a ذات capable of taking a صفة`, `Something that points to the description of a موصوف`], correct: 0 },
        { q: `In وَأَنْ تَصُومُوا خَيْرٌ, what does أَنْ تَصُومُوا, taken together, occupy the grammatical position of؟`, options: [`المبتدأ`, `الخبر`, `المفعول به`, `المضاف إليه`], correct: 0 },
        { q: `رَجُلٌ exists in itself, independent of anything else. Which type of اسم الذات is it؟`, options: [`اسم عين`, `اسم معنى`, `اسم صفة`, `اسم مؤول`], correct: 0 },
        { q: `عِلْمٌ exists only within a person who has it, not as an independent thing. Which type of اسم الذات is it؟`, options: [`اسم معنى`, `اسم عين`, `الاسم الصريح`, `الموصوف`], correct: 0 },
        { q: `In رَجُلٌ صَالِحٌ, رجل is الموصوف. What role does صالح play؟`, options: [`الصفة`, `الاسم المؤول`, `الاسم الصريح`, `اسم المعنى`], correct: 0 },
      ],
      bank: [
        { title: `الصريح vs المؤول: what settles it`, kind: 'mcq', prompt: `An اسم may appear as one word, or a whole تركيب may take the place of an اسم in the جملة. What decides whether the expression is treated as الاسم الصريح or الاسم المؤول؟`, options: [`Whether it occupies the grammatical position of an اسم`, `Whether it has three letters or more`, `Whether it takes تنوين`, `Whether it appears at the start of the جملة`], correct: 0 },
        { title: `تعريف الاسم الصريح`, kind: 'mcq', prompt: `Which of the following correctly defines الاسم الصريح؟`, options: [`The اسم by itself`, `A حرف مصدر together with the جملة after it`, `A word that carries meaning in itself and is not tied to tense`, `Something whose parts do not indicate a meaning`], correct: 0 },
        { title: `الصوم: no reinterpretation needed`, kind: 'mcq', prompt: `الصَّوْمُ can directly take the grammatical role of مبتدأ, فاعل, or مفعول به. Does it need to be reinterpreted first, the way الاسم المؤول does؟`, options: [`No — it is already an اسم صريح`, `Yes — every اسم needs a حرف مصدر before it`, `Yes, because it lacks تنوين`, `No, because it is اسم معنى`], correct: 0 },
        { title: `Two parts of الاسم المؤول`, kind: 'mcq', prompt: `الاسم المؤول is built from two things together. What are they?`, options: [`A حرف مصدر, and the جملة after it`, `An اسم and a صفة`, `A فعل and its فاعل only`, `أل and تنوين`], correct: 0 },
        { title: `أن تصوموا = صيامكم`, kind: 'mcq', prompt: `أَنْ تَصُومُوا is understood as صِيَامُكُمْ. What does that show about الاسم المؤول؟`, options: [`It is interpreted as a مصدر`, `It is interpreted as a صفة`, `It is interpreted as a حرف جر`, `It has no meaning of its own`], correct: 0 },
        { title: `Why المؤول can stand as مبتدأ`, kind: 'mcq', prompt: `المبتدأ must be an اسم. Why can أَنْ تَصُومُوا stand as المبتدأ in وَأَنْ تَصُومُوا خَيْرٌ, even though it is built from a حرف and a جملة؟`, options: [`Because the construction is interpreted as a مصدر before the جملة is analysed further`, `Because حرف مصدر always counts as مبتدأ on its own`, `Because تصوموا alone is اسم صريح`, `Because خير is the true مبتدأ instead`], correct: 0 },
        { title: `تعريف الموصوف`, kind: 'mcq', prompt: `Which of the following correctly defines الموصوف؟`, options: [`Something that points to a ذات capable of taking a صفة`, `Something that points to the description of a موصوف`, `The اسم by itself`, `A حرف مصدر together with the جملة after it`], correct: 0 },
        { title: `اسم الذات's other name`, kind: 'mcq', prompt: `الموصوف is also known by another name for the same idea. What is it?`, options: [`اسم الذات`, `اسم المعنى`, `اسم الصفة`, `الاسم الصريح`], correct: 0 },
        { title: `رجل: اسم عين`, kind: 'mcq', prompt: `رَجُلٌ (a man) exists in itself, independent of anything else. Which type of اسم الذات is that?`, options: [`اسم عين`, `اسم معنى`, `الموصوف فقط`, `اسم الصفة`], correct: 0 },
        { title: `علم: اسم معنى`, kind: 'mcq', prompt: `عِلْمٌ (knowledge) is not a physical thing standing by itself — it exists only in the one who has it. Which type of اسم الذات is that؟`, options: [`اسم معنى`, `اسم عين`, `اسم صفة`, `الاسم المؤول`], correct: 0 },
        { title: `عين vs معنى: the test`, kind: 'mcq', prompt: `What is the test that separates اسم عين from اسم معنى؟`, options: [`Whether the thing named exists in itself, or only exists in another`, `Whether the word has تنوين`, `Whether the word is مذكر or مؤنث`, `Whether the word begins with أل`], correct: 0 },
        { title: `تعريف الصفة`, kind: 'mcq', prompt: `Which of the following correctly defines الصفة؟`, options: [`Something that points to the description of a موصوف`, `Something that points to a ذات capable of taking a صفة`, `A word that carries meaning in itself while tied to tense`, `Something whose parts do not indicate a meaning`], correct: 0 },
        { title: `رجل صالح: الموصوف والصفة`, kind: 'mcq', prompt: `In رَجُلٌ صَالِحٌ, رجل is being described. What role does رجل play, and what role does صالح play?`, options: [`رجل is الموصوف, صالح is الصفة`, `رجل is الصفة, صالح is الموصوف`, `Both are الموصوف`, `Both are الصفة`], correct: 0 },
        { title: `عالم: describing the possessor of علم`, kind: 'mcq', prompt: `عَالِمٌ describes someone who possesses عِلْمٌ. Given that اسم صفة gives a description of a موصوف, what kind of اسم is عَالِمٌ؟`, options: [`اسم صفة`, `اسم عين`, `اسم معنى`, `الاسم المؤول`], correct: 0 },
        { title: `Meaning, not إعراب, decides`, kind: 'mcq', prompt: `رجل, علم, and عالم may all behave as أسماء inside a جملة and even share the same إعراب in different sentences. What actually decides whether each is اسم عين, اسم معنى, or اسم صفة؟`, options: [`The kind of meaning each word points to`, `The إعراب each word carries in a given جملة`, `Whether the word carries تنوين`, `The number of letters in the word`], correct: 0 },
        {
          title: `تركيب: أَنْ تَصُومُوا (الجزء الداخلي)`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part inside the اسم مؤول أَنْ تَصُومُوا.`,
          source: `أَنْ تَصُومُوا`,
          words: [`أَنْ`, `تَصُومُوا`],
          labels: [`حرف مصدر`, `فعل مضارع مع فاعله`],
          distractors: [`اسم صريح`, `مضاف إليه`, `حرف جر`, `فعل ماضٍ`],
        },
        {
          title: `تركيب: وَأَنْ تَصُومُوا خَيْرٌ (الجملة كاملة)`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of the اسم مؤول as a whole, and of خَيْرٌ, in وَأَنْ تَصُومُوا خَيْرٌ.`,
          source: `أَنْ تَصُومُوا خَيْرٌ`,
          words: [`أَنْ تَصُومُوا`, `خَيْرٌ`],
          labels: [`اسم مؤول في محل رفع مبتدأ`, `خبر`],
          distractors: [`حرف مصدر`, `مضاف إليه`, `اسم صريح`, `مفعول به`],
        },
        {
          title: `تركيب: رَجُلٌ صَالِحٌ`,
          kind: 'tarkeeb',
          instruction: `Identify الموصوف and الصفة in رَجُلٌ صَالِحٌ.`,
          source: `رَجُلٌ صَالِحٌ`,
          words: [`رَجُلٌ`, `صَالِحٌ`],
          labels: [`موصوف`, `صفة`],
          distractors: [`اسم معنى`, `اسم مؤول`, `مضاف`, `مضاف إليه`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'الفعل',
      subtitle: 'The Verb and Its Signs — the three meanings of a فعل, and every لفظي and معنوي sign that marks one',
      concepts: [
        {
          heading: 'تعريف الفعل',
          lines: [
            { box: { title: 'Definition', lines: [`الفِعْلُ مَا دَلَّ عَلَى مَعْنًى فِي نَفْسِهِ مُقْتَرِنٍ بِزَمَانٍ`] } },
            { html: `A فعل is a word that carries meaning in itself while also being tied to time.`, list: false },
            { table: { title: 'صيغ الفعل والزمان', headers: ['Verb', 'Translation', 'Event', 'Time'], rows: [
              [`عَبَدَ`, `he worshipped`, `عبادة`, `الماضي`],
              [`يَعْبُدُ`, `he worships / will worship`, `عبادة`, `الحال أو الاستقبال`],
              [`اُعْبُدْ`, `worship`, `عبادة`, `الاستقبال`],
            ] } },
            { html: `<bdi>يعبد</bdi> is shared between الحال and الاستقبال, so its form alone does not settle which of the two is meant.`, list: false },
          ],
          exercise: {
            prompt: `يَعْبُدُ can mean "he worships" (الحال) or "he will worship" (الاستقبال). Can its form alone settle which of the two is meant?`,
            kind: 'mcq',
            options: [`No — يعبد's form is shared between الحال and الاستقبال`, `Yes — يعبد always means الحال only`, `Yes — يعبد always means الاستقبال only`, `No — يعبد never indicates زمان at all`],
            correct: 0,
          },
        },
        {
          heading: 'المعاني الثلاثة للفعل',
          lines: [
            { html: `The فعل contains three meanings together.`, list: false },
            { table: { title: 'معاني الفعل الثلاثة', headers: ['Meaning', 'Explanation'], rows: [
              [`الحدث`, `the verbal event, such as جلوس, نصر, or عبادة`],
              [`الزمان`, `the time joined to the event`],
              [`الفاعل`, `the one the فعل is ascribed to, whether mentioned or understood`],
            ] } },
            { html: `<bdi>جَلَسَ</bdi> indicates the حدث of جلوس, that it occurred in الماضي, and that there is a فاعل connected to the فعل. A فعل is never without a فاعل, even when the doer is only understood.`, list: false },
          ],
          exercise: {
            prompt: `جَلَسَ carries three meanings together — الحدث, الزمان, and الفاعل. Can a فعل ever appear without a فاعل at all?`,
            kind: 'mcq',
            options: [`No — a فعل is never without a فاعل, even when the doer is only understood`, `Yes — some أفعال have no فاعل`, `Only if the فعل is أمر`, `Only if the فعل is مبني للمجهول`],
            correct: 0,
          },
        },
        {
          heading: 'المادة والهيئة',
          lines: [
            { html: `A فعل can be understood through two separate components.`, list: false },
            { table: { title: 'المادة والهيئة', headers: ['Term', 'Meaning', 'Example', 'Translation'], rows: [
              [`مادة`, `the root letters that point to the event`, `ن ص ر`, `the root letters n-s-r`],
              [`هيئة`, `the pattern or form that points to the morphological meaning`, `فَعَلَ`, `he did`],
            ] } },
            { html: `In <bdi>نَصَرَ</bdi>, the مادة ن ص ر gives the meaning of نصر, while the هيئة فَعَلَ shows that the حدث occurred in الماضي.`, list: false },
            { box: { title: 'Careful', lines: [`بَعْضُ الأَسْمَاءِ تَدُلُّ عَلَى زَمَانٍ بِمَادَّتِهَا لا بِهَيْئَتِهَا، فَلَيْسَتْ أَفْعَالًا`] } },
            { html: `Some أسماء, such as أمس, الآن, and غدًا, point to زمان through their مادة, not through their هيئة, so they are not أفعال. Others may point to زمان through context alone, although they were never coined for time — أسماء الفعل, اسم الفاعل, and اسم المفعول.`, list: false },
            { box: { title: 'Example', lines: [`إِنِّي فَاعِلٌ ذَلِكَ غَدًا`, `إِنَّهُمْ لَهُمُ المَنْصُورُونَ`] } },
            { html: `"I will do that tomorrow" and "they are the ones who will be helped." In the first, فاعل refers to an action in الاستقبال only because of غدًا, but فاعل is still not a فعل.`, list: false },
            { html: `المنصورون works the same way: the help it speaks of is still to come. In both cases the هيئة is هيئة اسم, not a هيئة فعل coined for زمان — which is why the fuller definition specifies that the فعل is what its هيئة indicates زمان بوضع, not merely by context.`, list: false },
            { box: { title: 'Definition', lines: [`مَا يَدُلُّ هَيْئَتُهُ وَضْعًا عَلَى مَعْنًى فِي نَفْسِهِ مُقْتَرِنٍ بِزَمَانٍ`] } },
          ],
          exercise: {
            prompt: `إِنِّي فَاعِلٌ ذَلِكَ غَدًا points to الاستقبال only because of غدًا, and المنصورون likewise speaks of help still to come. Are فاعل and المنصورون therefore أفعال؟`,
            kind: 'mcq',
            options: [`No — their هيئة is هيئة اسم, not a هيئة فعل coined by وضع to indicate زمان`, `Yes — anything indicating زمان in context is a فعل`, `Yes, because غدًا always turns a word into a فعل`, `No, because they carry تنوين`],
            correct: 0,
          },
        },
        {
          heading: 'علامات الفعل: العامة والخاصة',
          lines: [
            { html: `Among the general signs of a فعل are:`, list: false },
            { table: { title: 'علامات الفعل العامة', headers: ['Sign', 'Example', 'Translation'], rows: [
              [`conjugation into ماضي، مضارع، أمر، ونهي`, `فَعَلَ، يَفْعَلُ، اِفْعَلْ، لا تَفْعَلْ`, `he did, he does, do, do not do`],
              [`connection to explicit raised pronouns`, `آمَنْتُ، آمَنُوا`, `I believed, they believed`],
            ] } },
            { table: { title: 'العلامات الخاصة', headers: ['Verb type', 'Sign', 'Example', 'Translation'], rows: [
              [`الماضي`, `silent تاء التأنيث`, `آمَنَتْ`, `she believed`],
              [`المضارع`, `لم`, `لَمْ يَلِدْ`, `he did not beget`],
              [`المضارع`, `لن`, `لَنْ يُصِيبَنَا`, `it will never strike us`],
              [`المضارع`, `السين / سوف`, `سَيَرْحَمُهُم، سَوْفَ أَسْتَغْفِرُ`, `He will have mercy on them; I will seek forgiveness`],
              [`المضارع`, `begins with نأتي`, `يُحْيِي`, `he gives life`],
              [`المضارع`, `نون التوكيد`, `لَيُسْجَنَنَّ`, `he will surely be imprisoned`],
              [`الماضي والمضارع`, `قد`, `قَدْ سَمِعَ، قَدْ يَعْلَمُ`, `He has heard; He may know / He does know`],
            ] } },
            { html: `The letters of نأتي are the opening letters of المضارع: ن، أ، ت، ي.`, list: false },
            { html: `نون التوكيد may be heavy or light: <bdi>لَيُسْجَنَنَّ</bdi> carries نون التوكيد الثقيلة, while <bdi>لَيَكُونًا</bdi> carries نون التوكيد الخفيفة.`, list: false },
            { box: { title: 'Careful', lines: [`النُّونُ الخَفِيفَةُ نَادِرَةٌ، وَفِي القُرْآنِ مَوْضِعَانِ فَقَط`] } },
            { html: `النون الخفيفة is rare — in the القرآن it comes in only two places: وَلَيَكُونًا مِنَ الصَّاغِرِينَ and لَنَسْفَعًا بِالنَّاصِيَةِ, and in both it is written with تنوين rather than a written نون.`, list: false },
            { html: `قد, meanwhile, can enter both الماضي and المضارع, so it is علامة فعل, not a sign limited to one زمن.`, list: false },
          ],
          exercise: {
            prompt: `لَيُسْجَنَنَّ ends in a heavy نون, and لَيَكُونًا ends in a light one written as تنوين rather than a written نون. What are these two forms of the same sign called?`,
            kind: 'mcq',
            options: [`نون التوكيد الثقيلة and نون التوكيد الخفيفة`, `تاء التأنيث الثقيلة والخفيفة`, `السين والسوف`, `لم ولن`],
            correct: 0,
          },
        },
        {
          heading: 'فعل الأمر: علامة معنوية',
          lines: [
            { html: `Every sign listed so far is an علامة لفظية — an actual letter or word appearing with the فعل, such as قد, السين, سوف, تاء التأنيث, and حروف المضارعة. The sign of الأمر is different: it is an علامة معنوية, recognised from the meaning of the word together with what it can accept.`, list: false },
            { box: { title: 'Rule', lines: [`دَلالَتُهُ عَلَى الطَّلَبِ مَعَ قَبُولِهِ يَاءَ المُخَاطَبَةِ`] } },
            { html: `الأمر is recognised by two things together: it must indicate a request, and it must accept ياء المخاطبة.`, list: false },
            { box: { title: 'Example', lines: [`اِجْلِسْ، اِسْمَعْ، تَكَلَّمْ`] } },
            { html: `"sit", "listen", "speak" — each one asks the listener for something: جلوس, سماع, and كلام.`, list: false },
            { box: { title: 'Careful', lines: [`صَهْ تَدُلُّ عَلَى الطَّلَبِ بِمَادَّتِهَا لا بِهَيْئَتِهَا، فَلَيْسَتْ فِعْلَ أَمْرٍ`] } },
            { html: `<bdi>صَهْ</bdi> means "be quiet", so it does show طلب — but it does not accept ياء المخاطبة, since صهي cannot be formed for a woman. It shows طلب through its مادة, not through its هيئة, so it is not a فعل أمر.`, list: false },
            { box: { title: 'Example', lines: [`وَادْخُلِي جَنَّتِي`] } },
            { html: `<bdi>ادخلي</bdi> shows طلب and carries ياء المخاطبة, so it is a فعل أمر.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَادْخُلِي جَنَّتِي`,
                translation: `And enter My Paradise.`,
                cells: [`وَ`, `ادْخُلِي`, `جَنَّتِي`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف عطف` }, { start: 1, end: 1, role: `فعل أمر + ياء المخاطبة` }, { start: 2, end: 2, role: `مفعول به مضاف إلى ياء المتكلم` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `صَهْ means "be quiet" and clearly shows طلب, yet it is not classified as فعل أمر. Why not?`,
            kind: 'mcq',
            options: [`It does not accept ياء المخاطبة — صهي cannot be formed for a woman`, `It does not indicate طلب at all`, `It is مبني للمجهول`, `It only appears in poetry`],
            correct: 0,
          },
        },
        {
          heading: 'فائدة: نِعْمَ وبِئْسَ',
          lines: [
            { html: `Grammarians disagreed over the class of نِعْمَ and بِئْسَ.`, list: false },
            { html: `Basran grammarians treated them as أفعال, pointing to the fact that تاء التأنيث can enter upon them as evidence. Kufan grammarians treated them as أسماء مبنية على الفتح, partly because a جار can enter upon them, as in نِعْمَ السَّيْرُ عَلَى بِئْسَ العَيْرِ.`, list: false },
          ],
          exercise: {
            prompt: `Basran grammarians classify نِعْمَ and بِئْسَ as أفعال, pointing to تاء التأنيث entering upon them. What evidence do Kufan grammarians point to for classifying them as أسماء instead؟`,
            kind: 'mcq',
            options: [`A جار can enter upon them, as in نِعْمَ السَّيْرُ عَلَى بِئْسَ العَيْرِ`, `They both begin with نون`, `They both accept ياء المخاطبة`, `They both carry تنوين`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الفعل?`, options: [`A word that carries meaning in itself while tied to tense`, `A word that carries meaning in itself and is not tied to tense`, `A word whose meaning is completed only through something else`, `Something that points to the description of a موصوف`], correct: 0 },
        { q: `جَلَسَ carries three meanings together. Which set correctly names them?`, options: [`الحدث، الزمان، الفاعل`, `المادة، الهيئة، الحدث`, `اسم عين، اسم معنى، اسم صفة`, `اللفظ، القول، الكلمة`], correct: 0 },
        { q: `In نَصَرَ, the letters ن ص ر give the meaning of نصر, and the pattern فَعَلَ shows the event happened in الماضي. What are these two components called?`, options: [`المادة والهيئة`, `الحدث والزمان`, `اللفظ والقول`, `اللام والحرف`], correct: 0 },
        { q: `أَمس points to زمان, yet it is not classified as a فعل. Why not?`, options: [`It points to زمان through its مادة, not through a هيئة coined by وضع for that purpose`, `It never refers to الماضي`, `It accepts تاء التأنيث`, `It accepts ياء المخاطبة`], correct: 0 },
        { q: `لَمْ يَلِدْ carries the particle لم directly before the فعل. What does لم mark here?`, options: [`المضارع`, `الماضي`, `الأمر`, `اسم الفاعل`], correct: 0 },
        { q: `اِجْلِسْ shows طلب and accepts ياء المخاطبة, while صَهْ shows طلب but cannot take ياء المخاطبة. What does that difference show?`, options: [`اِجْلِسْ is فعل أمر; صَهْ is not, since its طلب comes from its مادة, not its هيئة`, `Both are فعل أمر equally`, `Neither is فعل أمر`, `صَهْ is فعل أمر but اِجْلِسْ is not`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الفعل`, kind: 'mcq', prompt: `Which of the following correctly defines الفعل?`, options: [`A word that carries meaning in itself while tied to tense`, `A word that carries meaning in itself and is not tied to tense`, `Something whose parts do not indicate a meaning`, `The اسم by itself`], correct: 0 },
        { title: `عبد، يعبد، اعبد: three times, one root`, kind: 'mcq', prompt: `عَبَدَ، يَعْبُدُ، and اُعْبُدْ all point to the same حدث, عبادة. What changes across the three?`, options: [`الزمان each form points to`, `The فاعل each form has`, `Whether each form is فعل or اسم`, `Whether each form is مذكر or مؤنث`], correct: 0 },
        { title: `يعبد: which زمان(s)؟`, kind: 'mcq', prompt: `يَعْبُدُ can mean "he worships" or "he will worship." Which two أزمنة does its form alone leave undecided?`, options: [`الحال and الاستقبال`, `الماضي and الحال`, `الماضي and الاستقبال`, `All three أزمنة equally`], correct: 0 },
        { title: `الفعل never lacks a فاعل`, kind: 'mcq', prompt: `جَلَسَ has no explicit doer named in the word itself. Does that mean it has no فاعل?`, options: [`No — a فعل is never without a فاعل, even when only understood`, `Yes — some أفعال truly lack a فاعل`, `Only أفعال الأمر can lack a فاعل`, `Only مضارع أفعال can lack a فاعل`], correct: 0 },
        { title: `المادة in نصر`, kind: 'mcq', prompt: `In نَصَرَ, what does the مادة ن ص ر contribute to the word's meaning?`, options: [`The core event, نصر`, `That the event occurred in الماضي`, `That the فاعل is مذكر`, `That the فعل is متعد`], correct: 0 },
        { title: `الهيئة in نصر`, kind: 'mcq', prompt: `In نَصَرَ, what does the هيئة فَعَلَ contribute?`, options: [`That the حدث occurred in الماضي`, `The core event itself`, `Whether the فعل is لازم or متعد`, `The identity of the فاعل`], correct: 0 },
        { title: `أمس: مادة, not هيئة`, kind: 'mcq', prompt: `أَمس (yesterday) clearly points to زمان. Why is it still classified as an اسم rather than a فعل؟`, options: [`It points to زمان through its مادة, not through a هيئة coined for that purpose`, `It has no meaning at all`, `It accepts نون التوكيد`, `It is مبني للمجهول`], correct: 0 },
        { title: `فاعل in إني فاعل ذلك غدًا`, kind: 'mcq', prompt: `In إِنِّي فَاعِلٌ ذَلِكَ غَدًا, فاعل points to الاستقبال only because of غدًا beside it. Is فاعل therefore a فعل?`, options: [`No — its هيئة is هيئة اسم, not a هيئة فعل coined by وضع for زمان`, `Yes — anything pointing to زمان in context is a فعل`, `Yes, because غدًا is itself a فعل`, `No, because فاعل never appears with زمان words`], correct: 0 },
        { title: `Conjugation as a general sign`, kind: 'mcq', prompt: `فَعَلَ، يَفْعَلُ، اِفْعَلْ، and لا تَفْعَلْ are four conjugated forms of the same root. What kind of علامة الفعل does the very ability to conjugate this way represent?`, options: [`علامة عامة`, `علامة خاصة بالماضي فقط`, `علامة خاصة بالمضارع فقط`, `علامة معنوية`], correct: 0 },
        { title: `آمنت، آمنوا: raised pronouns`, kind: 'mcq', prompt: `آمَنْتُ and آمَنُوا both connect to an explicit raised pronoun. What kind of علامة الفعل does that connection represent?`, options: [`علامة عامة`, `علامة خاصة بالأمر`, `علامة معنوية`, `علامة خاصة بالمضارع فقط`], correct: 0 },
        { title: `آمنت: تاء التأنيث الساكنة`, kind: 'mcq', prompt: `آمَنَتْ carries a silent تاء التأنيث. Which verb type does that sign mark specifically?`, options: [`الماضي`, `المضارع`, `الأمر`, `both الماضي والمضارع equally`], correct: 0 },
        { title: `لم، لن: which verb type?`, kind: 'mcq', prompt: `لَمْ يَلِدْ and لَنْ يُصِيبَنَا both carry a particle directly before the فعل. Which verb type do لم and لن mark?`, options: [`المضارع`, `الماضي`, `الأمر`, `اسم الفاعل`], correct: 0 },
        { title: `يُحيي: نأتي letters`, kind: 'mcq', prompt: `يُحْيِي begins with ي, one of the letters of نأتي. What do the letters of نأتي mark?`, options: [`The opening letters of المضارع`, `The opening letters of الأمر`, `The closing letters of الماضي`, `The letters of حروف العطف`], correct: 0 },
        { title: `ليسجننّ vs ليكونًا: heavy or light`, kind: 'mcq', prompt: `لَيُسْجَنَنَّ ends in a written, doubled نون, while لَيَكُونًا ends in the same sign written as تنوين instead. Which is which?`, options: [`لَيُسْجَنَنَّ carries نون التوكيد الثقيلة; لَيَكُونًا carries نون التوكيد الخفيفة`, `لَيُسْجَنَنَّ carries نون التوكيد الخفيفة; لَيَكُونًا carries الثقيلة`, `Both carry the same نون التوكيد`, `Neither carries نون التوكيد`], correct: 0 },
        { title: `قد: not tied to one زمن`, kind: 'mcq', prompt: `قَدْ سَمِعَ and قَدْ يَعْلَمُ both use قد, one with a ماضي فعل and one with a مضارع فعل. What does that show about قد as a sign?`, options: [`قد is علامة فعل generally, not a sign limited to one زمن`, `قد only marks الماضي`, `قد only marks المضارع`, `قد marks الأمر exclusively`], correct: 0 },
        { title: `فعل الأمر's two-part sign`, kind: 'mcq', prompt: `Unlike the لفظية signs above, الأمر's sign is معنوية. What two things together identify a فعل أمر؟`, options: [`It must indicate طلب, and accept ياء المخاطبة`, `It must carry تنوين, and accept أل`, `It must carry قد, and accept السين`, `It must be مبني للمجهول, and accept نون التوكيد`], correct: 0 },
        { title: `اجلس، اسمع، تكلم: what they request`, kind: 'mcq', prompt: `اِجْلِسْ، اِسْمَعْ، and تَكَلَّمْ each ask the listener for something specific. What does each one request, respectively?`, options: [`جلوس، سماع، كلام`, `جلوس، كلام، سماع`, `سماع، جلوس، كلام`, `كلام، سماع، جلوس`], correct: 0 },
        { title: `صه: طلب without فعل أمر`, kind: 'mcq', prompt: `صَهْ means "be quiet" and clearly shows طلب. Why does it fail to qualify as فعل أمر?`, options: [`صهي cannot be formed for a woman — it does not accept ياء المخاطبة`, `صهْ does not show طلب at all`, `صهْ is already مبني للمجهول`, `صهْ only appears with a مفعول به`], correct: 0 },
        { title: `نعم وبئس: Basran view`, kind: 'mcq', prompt: `Basran grammarians classify نِعْمَ and بِئْسَ as أفعال. What evidence supports that view?`, options: [`تاء التأنيث can enter upon them`, `They accept ياء المخاطبة`, `They accept أل`, `They carry تنوين`], correct: 0 },
        {
          title: `تركيب: وَادْخُلِي جَنَّتِي`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَادْخُلِي جَنَّتِي.`,
          source: `وَادْخُلِي جَنَّتِي`,
          words: [`وَ`, `ادْخُلِي`, `جَنَّتِي`],
          labels: [`حرف عطف`, `فعل أمر + ياء المخاطبة`, `مفعول به مضاف إلى ياء المتكلم`],
          distractors: [`فعل ماضٍ`, `مبتدأ`, `حرف جر`, `فاعل`],
        },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'الحرف',
      subtitle: 'The Particle — دلالته على معنى في غيره, and the four senses the word حرف carries',
      concepts: [
        {
          heading: 'تعريف الحرف',
          lines: [
            { box: { title: 'Definition', lines: [`الحَرْفُ مَا دَلَّ عَلَى مَعْنًى فِي غَيْرِهِ`] } },
            { html: `A حرف points to a meaning, but that meaning is completed only through something else.`, list: false },
            { html: `<bdi>فِي</bdi> indicates ظرفية, the meaning of "in" — but that meaning is not complete until something follows it, such as فِي البَيْتِ. <bdi>إنّ</bdi> works the same way: it indicates توكيد, but that توكيد is not complete until it enters upon a جملة.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `فِي البَيْتِ`,
                translation: `In the house`,
                cells: [`فِي`, `البَيْتِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف جر يدل على الظرفية` }, { start: 1, end: 1, role: `اسم مجرور يتم به المعنى` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `فِي on its own indicates ظرفية, but that meaning stays incomplete. What completes it?`,
            kind: 'mcq',
            options: [`An اسم following it, such as البَيْتِ in فِي البَيْتِ`, `A تنوين attached to فِي itself`, `Another حرف جر placed before it`, `Nothing — فِي's meaning is already complete alone`],
            correct: 0,
          },
        },
        {
          heading: 'كيف نميّز الحرف',
          lines: [
            { html: `A حرف is recognised by the absence of علامات الاسم والفعل.`, list: false },
            { html: `It does not accept علامات الاسم, such as أل, التنوين, النداء, or الإضافة. It also does not accept علامات الفعل, such as أدوات الزمان, التصريف, or الضمائر البارزة المرفوعة.`, list: false },
            { box: { title: 'Example', lines: [`هَلْ وبَلْ لا تَقْبَلَانِ عَلَامَاتِ الاسْمِ وَلا عَلَامَاتِ الفِعْلِ، فَهُمَا حَرْفَانِ`] } },
          ],
          exercise: {
            prompt: `هَلْ and بَلْ accept none of علامات الاسم and none of علامات الفعل. What does that make them?`,
            kind: 'mcq',
            options: [`حروف`, `أسماء`, `أفعال`, `أسماء أفعال`],
            correct: 0,
          },
        },
        {
          heading: 'إطلاقات الحرف',
          lines: [
            { html: `The word حرف is used in more than one sense in grammar and related disciplines.`, list: false },
            { table: { title: 'إطلاقات الحرف', headers: ['Term', 'Meaning', 'Example', 'Translation'], rows: [
              [`حروف المباني`, `alphabet letters from which words are built`, `ف، ع، ل`, `the letters f, ayn, l`],
              [`حروف المعاني`, `particles that point to grammatical meanings`, `في، إن، بل، لا`, `in, indeed, rather, no/not`],
              [`حروف المد`, `still weak letters preceded by a matching vowel`, `ا، و، ي`, `alif, waw, ya`],
              [`حروف اللين`, `و or ي ساكن preceded by فتحة`, `الخَيْر، التَّوْبَة`, `goodness, repentance`],
            ] } },
            { html: `<bdi>حروف المباني</bdi> are also called <bdi>حروف التهجي</bdi>, the spelling letters, because they are the pieces out of which a word is assembled.`, list: false },
            { html: `The same visible letter can belong to different discussions depending on which sense of حرف is meant: <bdi>ب</bdi> is discussed as a حرف مبنى when it is one alphabet letter, and as a حرف معنى when it is the حرف جر باء. In spelling and word-building it is a حرف مبنى; in تركيب الجملة it may be a حرف معنى.`, list: false },
          ],
          exercise: {
            prompt: `ب can be discussed in two different senses of حرف. What separates them?`,
            kind: 'mcq',
            options: [`As one alphabet letter it is حرف مبنى; as the حرف جر باء it is حرف معنى`, `As حرف مبنى it takes تنوين; as حرف معنى it never does`, `حرف مبنى only appears in poetry`, `There is no real difference between the two senses`],
            correct: 0,
          },
        },
        {
          heading: 'حروف المد واللين',
          lines: [
            { html: `A حرف مد is a weak letter that is ساكن and preceded by a matching vowel.`, list: false },
            { table: { title: 'حروف المد وحركاتها', headers: ['Letter', 'Matching vowel before it'], rows: [
              [`ا`, `فتحة`],
              [`و`, `ضمة`],
              [`ي`, `كسرة`],
            ] } },
            { box: { title: 'Example', lines: [`وَكُونُوا مَعَ الصَّادِقِينَ`] } },
            { html: `"and be with the truthful" — the و of كُونُوا is ساكن after a ضمة, and the ي of الصَّادِقِينَ is ساكن after a كسرة. Both are حروف مد.`, list: false },
            { html: `A حرف لين is a ساكن و or ي preceded by a فتحة instead of the matching vowel, as in <bdi>الخَيْرُ فِي التَّوْبَةِ</bdi>: the ي of الخَيْر and the و of التَّوْبَة each follow a فتحة.`, list: false },
            { box: { title: 'Careful', lines: [`حَرْفُ المَدِّ يَتْبَعُ حَرَكَةً مُجَانِسَةً، وَحَرْفُ اللِّينِ يَتْبَعُ فَتْحَةً فَقَط`] } },
            { html: `Every حرف مد is connected to a weak letter preceded by its matching vowel; a حرف لين instead follows a فتحة, so it is softer than an ordinary consonant but does not meet the full condition of مد.`, list: false },
          ],
          exercise: {
            prompt: `In الخَيْرُ فِي التَّوْبَةِ, the ي of الخَيْر and the و of التَّوْبَة both follow a فتحة rather than their matching vowel. Are they حروف مد or حروف لين؟`,
            kind: 'mcq',
            options: [`حروف لين`, `حروف مد`, `حروف مباني فقط`, `حروف معاني`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الحرف؟`, options: [`A word whose meaning is completed only through something else`, `A word that carries meaning in itself while tied to tense`, `A word that carries meaning in itself and is not tied to tense`, `Something that points to the description of a موصوف`], correct: 0 },
        { q: `فِي indicates ظرفية, but that meaning stays incomplete until something follows it. What does that show about الحرف in general?`, options: [`Its meaning is completed only through something else`, `It always carries تنوين`, `It never appears with an اسم`, `It behaves exactly like a فعل`], correct: 0 },
        { q: `هَلْ and بَلْ accept none of علامات الاسم and none of علامات الفعل. What does that make them؟`, options: [`حروف`, `أسماء`, `أفعال`, `أسماء أفعال`], correct: 0 },
        { q: `ف، ع، and ل, taken as alphabet letters used to build words, are an example of which إطلاق of الحرف؟`, options: [`حروف المباني`, `حروف المعاني`, `حروف المد`, `حروف اللين`], correct: 0 },
        { q: `في، إن، بل، and لا, as particles pointing to grammatical meanings, are an example of which إطلاق of الحرف؟`, options: [`حروف المعاني`, `حروف المباني`, `حروف اللين`, `حروف المد`], correct: 0 },
        { q: `In وَكُونُوا مَعَ الصَّادِقِينَ, the و of كُونُوا is ساكن after a ضمة. What kind of حرف is that؟`, options: [`حرف مد`, `حرف لين`, `حرف مبنى فقط`, `حرف معنى`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الحرف`, kind: 'mcq', prompt: `Which of the following correctly defines الحرف؟`, options: [`A word whose meaning is completed only through something else`, `A word that carries meaning in itself while tied to tense`, `Something whose parts do not indicate a meaning`, `The اسم by itself`], correct: 0 },
        { title: `في: incomplete alone`, kind: 'mcq', prompt: `فِي by itself indicates ظرفية, but its meaning is not complete on its own. What completes it?`, options: [`An اسم following it`, `A تنوين attached to it`, `A ياء المخاطبة attached to it`, `Nothing needs to follow it`], correct: 0 },
        { title: `إنّ: توكيد incomplete alone`, kind: 'mcq', prompt: `إنّ indicates توكيد, but that توكيد is not complete on its own. What completes it?`, options: [`A جملة entering after it`, `A تنوين attached to it`, `أل التعريف attached to it`, `Nothing — إنّ's meaning is complete alone`], correct: 0 },
        { title: `The absence test for حرف`, kind: 'mcq', prompt: `A word accepts none of علامات الاسم and none of علامات الفعل. What does that tell us about the word؟`, options: [`It is a حرف`, `It is definitely an اسم`, `It is definitely a فعل أمر`, `It cannot be classified at all`], correct: 0 },
        { title: `هل وبل: recognised as حروف`, kind: 'mcq', prompt: `هَلْ and بَلْ accept no علامات الاسم and no علامات الفعل. What classification follows from that؟`, options: [`Both are حروف`, `Both are أسماء`, `Both are أفعال`, `هل is اسم and بل is فعل`], correct: 0 },
        { title: `حروف المباني: definition`, kind: 'mcq', prompt: `Which sense of الحرف names the alphabet letters a word is built from؟`, options: [`حروف المباني`, `حروف المعاني`, `حروف المد`, `حروف اللين`], correct: 0 },
        { title: `حروف المباني's other name`, kind: 'mcq', prompt: `حروف المباني are also known by another name. What is it؟`, options: [`حروف التهجي`, `حروف المعاني`, `حروف الجزم`, `حروف العطف`], correct: 0 },
        { title: `حروف المعاني: definition`, kind: 'mcq', prompt: `Which sense of الحرف names particles that point to grammatical meanings, such as في، إن، بل، and لا؟`, options: [`حروف المعاني`, `حروف المباني`, `حروف المد`, `حروف اللين`], correct: 0 },
        { title: `ب: two senses at once`, kind: 'mcq', prompt: `ب can be discussed as one alphabet letter, or as the حرف جر باء. Which sense applies in each case؟`, options: [`As an alphabet letter it is حرف مبنى; as حرف جر it is حرف معنى`, `Both cases are حرف مبنى`, `Both cases are حرف معنى`, `As an alphabet letter it is حرف معنى; as حرف جر it is حرف مبنى`], correct: 0 },
        { title: `حرف مد: the definition`, kind: 'mcq', prompt: `What makes a weak letter a حرف مد؟`, options: [`It is ساكن and preceded by its matching vowel`, `It is متحرك and preceded by a فتحة`, `It always carries تنوين`, `It only appears at the end of a جملة`], correct: 0 },
        { title: `ا و ي: their matching vowels`, kind: 'mcq', prompt: `Each حرف مد requires a specific vowel before it. Which pairing is correct؟`, options: [`ا after فتحة, و after ضمة, ي after كسرة`, `ا after ضمة, و after كسرة, ي after فتحة`, `All three follow the same vowel`, `ا after كسرة, و after فتحة, ي after ضمة`], correct: 0 },
        { title: `وكونوا: identifying حروف المد`, kind: 'mcq', prompt: `In وَكُونُوا مَعَ الصَّادِقِينَ, the ي of الصَّادِقِينَ is ساكن after a كسرة. What kind of حرف is that؟`, options: [`حرف مد`, `حرف لين`, `حرف معنى فقط`, `حرف مبنى فقط`], correct: 0 },
        { title: `حرف لين: the definition`, kind: 'mcq', prompt: `What makes a ساكن و or ي a حرف لين rather than a حرف مد؟`, options: [`It is preceded by a فتحة rather than its matching vowel`, `It is preceded by تنوين`, `It never appears in a جملة`, `It always ends a word`], correct: 0 },
        { title: `الخير في التوبة: identifying حروف اللين`, kind: 'mcq', prompt: `In الخَيْرُ فِي التَّوْبَةِ, the ي of الخَيْر follows a فتحة rather than a كسرة. What kind of حرف is that؟`, options: [`حرف لين`, `حرف مد`, `حرف مبنى فقط`, `حرف معنى فقط`], correct: 0 },
        {
          title: `تركيب: فِي البَيْتِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فِي البَيْتِ.`,
          source: `فِي البَيْتِ`,
          words: [`فِي`, `البَيْتِ`],
          labels: [`حرف جر يدل على الظرفية`, `اسم مجرور يتم به المعنى`],
          distractors: [`فعل ماضٍ`, `مبتدأ`, `حرف عطف`, `مضاف إليه`],
        },
      ],
    },
  ],
};

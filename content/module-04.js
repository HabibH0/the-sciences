// Module 04 — الفعل القياسي: اللزوم والتعدي
//
// Source: app-lessons/019-the-intransitive-verb.md through
// app-lessons/021-two-object-transitive-verbs.md. Per COURSE-MAP.md's
// 2026-08-12 plan, this opens the العامل وغير العامل — الفعل chapter:
// الفعل القياسي's two-way split into اللازم (does not reach a direct
// مفعول به) and المتعدي (does), then المتعدي's own sub-split by how many
// مفعول به it takes, ending with the first of the two-object families
// (متعدي إلى مفعولين) that Module 05's أفعال القلوب continues.
//
// Registered in content/annahw.js between m03 and m06: Module 06 was
// authored out of order before this module existed (see module-06.js's own
// header comment), so this slots in immediately before it -- array position
// governs unlock order (content/index.js's isModuleUnlocked), not the id
// string, and m06 needed no change for this insertion. Module 05 (أفعال
// القلوب, app-lessons/022-025) is still unauthored and will slot in between
// this module and m06 once it exists.
//
// 020 is dense enough that COURSE-MAP splits it across two lessons (L2:
// definition/بنفسه/بواسطة حرف الجر; L3: the اهدنا/وهداه meaning contrast
// and the متعدي-by-object-count taxonomy). 021 stays one lesson at 6
// concepts rather than splitting further, per the "4-6 concepts, combine
// related material" guidance in content/README.md.
export default {
  id: '04',
  title: 'الفعل القياسي: اللزوم والتعدي',
  heading: 'العامل وغير العامل',
  subheading: 'الفعل',
  blurb: 'الفعل القياسي splits into اللازم, whose effect stops at its فاعل, and المتعدي, whose effect reaches one or more مفعول به — and how the same فعل can be لازم in direct إعراب while still متعدي in meaning through a حرف جر.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الفعل اللازم',
      subtitle: 'The Intransitive Verb — لازم بنفسه, لازم بواسطة حرف الجر, and the complements it still allows',
      concepts: [
        {
          heading: 'الفعل عامل: القياسي والسماعي',
          lines: [
            { html: `Verbs are among the main <bdi>عوامل</bdi> in Arabic grammar: a <bdi>فعل</bdi> brings grammatical effect to what comes after it. (1) it raises the <bdi>فاعل</bdi> or <bdi>نائب الفاعل</bdi>, (2) it may make certain complements <bdi>منصوب</bdi>, such as the <bdi>مفاعيل</bdi> and the <bdi>حال</bdi>.`, list: false },
            { html: `The governing verb divides into two types.`, list: false },
            { table: { title: 'الفعل القياسي والفعل السماعي', headers: ['Type', 'Meaning'], rows: [
              [`الفعل القياسي`, `its grammatical action follows a regular, repeatable rule`],
              [`الفعل السماعي`, `its behaviour is taken as heard from the Arabs, case by case`],
            ] } },
            { box: { title: 'Core Text', lines: [`القِيَاسِيُّ مَا لَهُ قَاعِدَةٌ مُطَّرِدَةٌ`] } },
            { html: `<bdi>القياسي</bdi> runs on a consistent pattern — the known <bdi>أبواب</bdi> and conjugations that apply across many verbs alike, not a rule confined to one verb. What follows is about <bdi>الفعل القياسي</bdi>; <bdi>الفعل السماعي</bdi> is a separate topic.`, list: false },
            { table: { title: 'قسما الفعل القياسي', headers: ['Type', 'Meaning'], rows: [
              [`الفعل اللازم`, `a verb whose effect does not pass to a direct مفعول به`],
              [`الفعل المتعدي`, `a verb whose effect passes to a مفعول به`],
            ] } },
          ],
          exercise: {
            prompt: `الفعل القياسي is described as ما له قاعدة مطردة — a verb whose grammatical behaviour follows a rule. What kind of rule does مطردة mean here?`,
            kind: 'mcq',
            options: [`A consistent, repeatable pattern that applies across many verbs, like the known أبواب and conjugations`, `A pattern that applies to exactly one verb and no other`, `A rule that only holds true in poetry`, `A rule that applies only to أفعال الأمر`],
            correct: 0,
          },
        },
        {
          heading: 'تعريف الفعل اللازم',
          lines: [
            { box: { title: 'Definition', lines: [`الفِعْلُ اللَّازِمُ: الَّذِي لا يَتَجَاوَزُ أَثَرُ فَاعِلِهِ إِلَى المَفْعُولِ بِهِ`] } },
            { html: `<bdi>الفعل اللازم</bdi> is the verb whose effect does not pass from its <bdi>فاعل</bdi> to a direct <bdi>مفعول به</bdi>. The verb's structure is complete with just its فاعل — it does not need a direct object to be grammatically whole.`, list: false },
            { box: { title: 'Example', lines: [`وَلا هُمْ يَحْزَنُونَ`] } },
            { html: `"nor will they grieve" — <bdi>يَحْزَنُونَ</bdi> is <bdi>لازم</bdi>: the meaning of grieving stays with the doers themselves and does not pass to any مفعول به.`, list: false },
          ],
          exercise: {
            prompt: `In وَلا هُمْ يَحْزَنُونَ, does the meaning of يَحْزَنُونَ pass from its فاعل to a direct مفعول به؟`,
            kind: 'mcq',
            options: [`No — the meaning stays with the doers themselves, so يَحْزَنُونَ is فعل لازم`, `Yes — هُمْ is its direct مفعول به`, `Yes, because يَحْزَنُونَ ends in ون`, `No, because يَحْزَنُونَ has no فاعل at all`],
            correct: 0,
          },
        },
        {
          heading: 'مفعول به صريح، والتعدي بواسطة حرف الجر',
          lines: [
            { html: `Calling a verb <bdi>لازم</bdi> usually means it does not take a <bdi>مفعول به صريح</bdi> — a direct object reached without the mediation of a <bdi>حرف جر</bdi>.`, list: false },
            { html: `Some لازم verbs may still reach an object-like meaning through a حرف جر. That does not make them متعدي in the direct grammatical sense — this is called <bdi>التعدي بواسطة حرف الجر</bdi>.`, list: false },
            { box: { title: 'Careful', lines: [`A verb may be لازم in its direct إعراب, while still reaching a meaning through a حرف جر.`] } },
            { box: { title: 'Example', lines: [`فَاسْتَمِعُوا لَهُ`] } },
            { html: `<bdi>استمع</bdi> takes no direct object here — it reaches the object-like meaning through the <bdi>لام</bdi>.`, list: false },
            { box: { title: 'Example', lines: [`يَسْتَمِعُونَ إِلَيْكَ`] } },
            { html: `Here the object-like meaning is reached through <bdi>إلى</bdi> instead. <bdi>استمع</bdi> remains لازم with respect to direct إعراب — it never takes a مفعول به صريح — even though, in meaning, it reaches something through a preposition.`, list: false },
            { table: { title: 'التعدي بواسطة حرف الجر', headers: ['Structure', 'What happens'], rows: [
              [`فعل + مفعول به صريح`, `the verb reaches the object directly`],
              [`فعل + حرف جر`, `the verb reaches an object-like meaning through the حرف جر`],
            ] } },
          ],
          exercise: {
            prompt: `استمع takes no direct object in either فَاسْتَمِعُوا لَهُ or يَسْتَمِعُونَ إِلَيْكَ — in both, the object-like meaning arrives through a حرف جر. Is استمع متعدي in direct إعراب here؟`,
            kind: 'mcq',
            options: [`No — it remains لازم in direct إعراب; it only reaches a meaning through the حرف جر`, `Yes — any verb followed by an اسم is متعدي`, `Yes, because لام and إلى always make a verb متعدي`, `No, because استمع has no فاعل`],
            correct: 0,
          },
        },
        {
          heading: 'اللازم الصرف، وغَضِبَ: مثال جامع',
          lines: [
            { html: `Some لازم verbs are more purely intransitive: they do not naturally take even an indirect, object-like meaning. These often describe intrinsic qualities or states.`, list: false },
            { table: { title: 'أفعال لازمة صِرفة', headers: ['Verb', 'Meaning'], rows: [
              [`كَرُمَ`, `to be noble`],
              [`حَسُنَ`, `to be beautiful or good`],
              [`فَقُهَ`, `to understand deeply`],
            ] } },
            { html: `Their meanings remain with the فاعل and never pass to a مفعول به, not even through a حرف جر.`, list: false },
            { html: `<bdi>غَضِبَ</bdi> ("to be angry") shows the other pattern: it is لازم in direct grammatical transitivity, since it takes no مفعول به صريح, yet it still connects to another element through a حرف جر.`, list: false },
            { box: { title: 'Example', lines: [`غَضِبَ اللهُ عَلَيْهِمْ`] } },
            { html: `The meaning reaches <bdi>عَلَيْهِمْ</bdi> through <bdi>على</bdi>, as in <bdi>المَغْضُوبِ عَلَيْهِمْ</bdi> too — غضب is لازم in direct structure, but transitive in meaning through the حرف جر.`, list: false },
          ],
          exercise: {
            prompt: `كَرُمَ, حَسُنَ, and فَقُهَ never reach even an indirect object-like meaning through a حرف جر — unlike غَضِبَ, which reaches عَلَيْهِمْ through على. What does that make كَرُمَ, حَسُنَ, and فَقُهَ؟`,
            kind: 'mcq',
            options: [`اللازم الصرف — pure لازم verbs that do not naturally become transitive at all`, `متعدي بنفسه`, `متعدي بواسطة حرف الجر, exactly like غَضِبَ`, `أفعال ناقصة`],
            correct: 0,
          },
        },
        {
          heading: 'أسماء أخرى للفعل اللازم',
          lines: [
            { html: `الفعل اللازم carries two other names in grammar books.`, list: false },
            { table: { title: 'أسماء الفعل اللازم', headers: ['Name', 'Meaning'], rows: [
              [`الفعل القاصر`, `its effect falls short of passing to a direct مفعول به`],
              [`الفعل غير المتعدي`, `it does not pass directly to a مفعول به`],
            ] } },
            { html: `Both names point to the same idea as اللازم itself: the verb does not pass directly to a مفعول به.`, list: false },
          ],
          exercise: {
            prompt: `الفعل القاصر and الفعل غير المتعدي are two other names used for the same verb category. Which category is that؟`,
            kind: 'mcq',
            options: [`الفعل اللازم`, `الفعل المتعدي`, `الفعل السماعي`, `الفعل الناقص`],
            correct: 0,
          },
        },
        {
          heading: 'تتمات الفعل اللازم: مفعول فيه، حال، مفعول له',
          lines: [
            { html: `A لازم verb takes no direct مفعول به, but it may still be accompanied by other منصوب complements.`, list: false },
            { table: { title: 'مكملات الفعل اللازم', headers: ['Complement', 'Role'], rows: [
              [`مفعول فيه`, `gives a time or place setting`],
              [`حال`, `describes the state`],
              [`مفعول له`, `gives the reason or purpose`],
            ] } },
            { box: { title: 'Example', lines: [`جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ`] } },
            { html: `<bdi>جَلَسَ</bdi> is <bdi>فعل لازم</bdi>: it takes no direct مفعول به, yet the sentence still carries three منصوب complements around it.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ`,
                translation: `The student sat in front of the teacher, showing respect, out of reverence for knowledge.`,
                cells: [`جَلَسَ`, `الطَّالِبُ`, `أَمَامَ المُعَلِّمِ`, `مُتَأَدِّبًا`, `تَبْجِيلًا لِلْعِلْمِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل لازم` }, { start: 1, end: 1, role: `فاعل` }, { start: 2, end: 2, role: `مفعول فيه` }, { start: 3, end: 3, role: `حال` }, { start: 4, end: 4, role: `مفعول له` }] },
                ],
              },
            },
            { html: `<bdi>أَمَامَ المُعَلِّمِ</bdi> gives the place, <bdi>مُتَأَدِّبًا</bdi> describes the state the طالب was in, and <bdi>تَبْجِيلًا لِلْعِلْمِ</bdi> gives the reason for sitting that way.`, list: false },
          ],
          exercise: {
            prompt: `In جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ, جَلَسَ is فعل لازم and takes no direct مفعول به. Does that mean the sentence has no منصوب complements at all؟`,
            kind: 'mcq',
            options: [`No — أَمَامَ المُعَلِّمِ (مفعول فيه), مُتَأَدِّبًا (حال), and تَبْجِيلًا لِلْعِلْمِ (مفعول له) are all منصوب complements around it`, `Yes — a لازم verb's sentence can never carry a منصوب complement`, `No, but only حال is possible with a لازم verb`, `No, but only مفعول فيه is possible with a لازم verb`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الفعل اللازم؟`, options: [`The verb whose effect does not pass from its فاعل to a direct مفعول به`, `The verb whose effect passes from its فاعل to a مفعول به`, `A verb whose grammatical action must be individually memorized`, `A verb that always takes two objects`], correct: 0 },
        { q: `وَلا هُمْ يَحْزَنُونَ shows a verb whose meaning stays with its doers. What kind of فعل is يَحْزَنُونَ؟`, options: [`فعل لازم`, `فعل متعدي بنفسه`, `فعل متعدي بواسطة حرف الجر`, `فعل ناقص`], correct: 0 },
        { q: `فَاسْتَمِعُوا لَهُ reaches an object-like meaning through the لام rather than a direct مفعول به. What is that pattern called؟`, options: [`التعدي بواسطة حرف الجر`, `التعدي بنفسه`, `الفعل الناقص`, `المفعول المطلق`], correct: 0 },
        { q: `كَرُمَ, حَسُنَ, and فَقُهَ never reach even an indirect object, unlike غَضِبَ, which reaches عَلَيْهِمْ through على. What are كَرُمَ، حَسُنَ، فَقُهَ called؟`, options: [`اللازم الصرف`, `المتعدي بنفسه`, `أفعال القلوب`, `الأفعال الناقصة`], correct: 0 },
        { q: `الفعل القاصر and الفعل غير المتعدي both name the same category as which term؟`, options: [`الفعل اللازم`, `الفعل المتعدي`, `الفعل السماعي`, `الفعل القياسي`], correct: 0 },
        { q: `In جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ, جَلَسَ takes no مفعول به. Which three complements still appear around it؟`, options: [`مفعول فيه، حال، مفعول له`, `مفعول به، حال، مفعول فيه`, `مفعول مطلق، حال، تمييز`, `فاعل، مفعول به، مفعول فيه`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الفعل اللازم`, kind: 'mcq', prompt: `Which of the following correctly defines الفعل اللازم؟`, options: [`The verb whose effect does not pass from its فاعل to a direct مفعول به`, `The verb whose effect passes from its فاعل to a مفعول به`, `A verb whose form must be individually memorized with no pattern`, `A word that carries meaning in itself and is not tied to tense`], correct: 0 },
        { title: `القياسي vs السماعي`, kind: 'mcq', prompt: `الفعل القياسي's grammatical behaviour follows a consistent rule. What distinguishes it from الفعل السماعي؟`, options: [`السماعي's behaviour is taken as heard from the Arabs case by case, with no such general rule`, `السماعي only ever appears in الأمر`, `السماعي never takes a فاعل`, `There is no real difference between them`], correct: 0 },
        { title: `فعل as عامل`, kind: 'mcq', prompt: `A فعل can bring grammatical effect to what follows it. Which of these is one of the effects it can have?`, options: [`Raising the فاعل or نائب الفاعل`, `Turning a following اسم into a فعل`, `Removing تنوين from every following word`, `Making every following word مبني`], correct: 0 },
        { title: `يحزنون: where the meaning stays`, kind: 'mcq', prompt: `In وَلا هُمْ يَحْزَنُونَ, where does the meaning of grieving remain?`, options: [`With the doers (هُمْ) themselves — it does not pass to a مفعول به`, `It passes to a مفعول به صريح`, `It passes to a مفعول به بواسطة حرف الجر`, `It has no فاعل to remain with`], correct: 0 },
        { title: `مفعول به صريح: definition`, kind: 'mcq', prompt: `What does مفعول به صريح mean?`, options: [`A direct object reached without the mediation of a حرف جر`, `Any object reached through a حرف جر`, `A مفعول به that is مؤنث`, `The first of two objects a verb takes`], correct: 0 },
        { title: `استمع له: which حرف جر`, kind: 'mcq', prompt: `In فَاسْتَمِعُوا لَهُ, which حرف جر carries استمع's object-like meaning?`, options: [`اللام`, `الباء`, `مِن`, `عَلَى`], correct: 0 },
        { title: `يستمعون إليك: which حرف جر`, kind: 'mcq', prompt: `In يَسْتَمِعُونَ إِلَيْكَ, which حرف جر carries استمع's object-like meaning this time?`, options: [`إلى`, `اللام`, `فِي`, `الباء`], correct: 0 },
        { title: `استمع: one verb, two حروف جر`, kind: 'mcq', prompt: `استمع reaches its object-like meaning through اللام in one place and through إلى in another. Does that change whether استمع is لازم in direct إعراب؟`, options: [`No — it stays لازم in direct إعراب either way; only the حرف جر carrying the meaning changes`, `Yes — it becomes متعدي بنفسه once it takes إلى`, `Yes — it becomes ناقص once it takes اللام`, `No, but only because إلى is the correct حرف and اللام is a mistake`], correct: 0 },
        { title: `اللازم الصرف: كرم وحسن وفقه`, kind: 'mcq', prompt: `كَرُمَ، حَسُنَ، and فَقُهَ describe intrinsic qualities or states. What is the term for لازم verbs like these, that do not naturally reach even an indirect object؟`, options: [`اللازم الصرف`, `المتعدي بواسطة حرف الجر`, `المتعدي إلى مفعولين`, `الفعل الناقص`], correct: 0 },
        { title: `غضب الله عليهم: لازم أم متعدٍ؟`, kind: 'mcq', prompt: `غَضِبَ takes no مفعول به صريح in غَضِبَ اللهُ عَلَيْهِمْ, yet it reaches عَلَيْهِمْ through على. How should غضب be described here?`, options: [`لازم in direct إعراب, but transitive in meaning through the حرف جر`, `متعدي بنفسه, since it clearly reaches an object`, `لازم الصرف, since it never reaches any object at all`, `ناقص, since على follows it`], correct: 0 },
        { title: `المغضوب عليهم: same pattern`, kind: 'mcq', prompt: `المَغْضُوبِ عَلَيْهِمْ reaches عَلَيْهِمْ the same way غَضِبَ اللهُ عَلَيْهِمْ does. What does that confirm about this pattern؟`, options: [`It is تعدٍّ بواسطة حرف الجر, not a direct مفعول به صريح`, `عَلَيْهِمْ is a مفعول به صريح here`, `المغضوب is فعل متعدي بنفسه`, `على has no grammatical role in either phrase`], correct: 0 },
        { title: `الفعل القاصر: another name`, kind: 'mcq', prompt: `الفعل القاصر is another name used for which verb category؟`, options: [`الفعل اللازم`, `الفعل المتعدي`, `الفعل السماعي`, `الفعل التام`], correct: 0 },
        { title: `الفعل غير المتعدي: another name`, kind: 'mcq', prompt: `الفعل غير المتعدي is another name for which verb category؟`, options: [`الفعل اللازم`, `الفعل المتعدي`, `الفعل القياسي`, `الفعل الناقص`], correct: 0 },
        { title: `مفعول فيه: what it gives`, kind: 'mcq', prompt: `In جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ, what role does أَمَامَ المُعَلِّمِ play؟`, options: [`مفعول فيه — it gives the place`, `مفعول به — it is the direct object of جلس`, `حال — it describes the state`, `مفعول له — it gives the reason`], correct: 0 },
        { title: `حال: what it gives`, kind: 'mcq', prompt: `In the same sentence, what role does مُتَأَدِّبًا play؟`, options: [`حال — it describes the state the طالب was in`, `مفعول فيه — it gives the place`, `مفعول له — it gives the reason`, `مفعول به — it is the direct object`], correct: 0 },
        { title: `مفعول له: what it gives`, kind: 'mcq', prompt: `In the same sentence, what role does تَبْجِيلًا لِلْعِلْمِ play؟`, options: [`مفعول له — it gives the reason for the action`, `حال — it describes the state`, `مفعول فيه — it gives the place`, `مفعول به — it is the direct object`], correct: 0 },
        { title: `جلس: لازم رغم ثلاثة مكملات`, kind: 'mcq', prompt: `جَلَسَ carries three منصوب complements in جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ. Does having three complements make جَلَسَ متعدي؟`, options: [`No — none of the three is a مفعول به صريح, so جَلَسَ stays لازم`, `Yes — any verb with three complements is متعدي إلى ثلاثة مفاعيل`, `Yes — أَمَامَ المُعَلِّمِ alone makes it متعدي`, `Yes — مُتَأَدِّبًا alone makes it متعدي`], correct: 0 },
        { title: `أبواب وتصريفات: القياسي's evidence`, kind: 'mcq', prompt: `القِيَاسِيُّ مَا لَهُ قَاعِدَةٌ مُطَّرِدَةٌ — the Core Text names what kind of evidence shows a verb is قياسي؟`, options: [`Its known أبواب and conjugations follow a shared, repeatable pattern`, `It is quoted directly from a single line of poetry`, `It never appears with a حرف جر`, `It only takes a واحد مفعول`], correct: 0 },
        {
          title: `تركيب: وَلا هُمْ يَحْزَنُونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَلا هُمْ يَحْزَنُونَ.`,
          source: `وَلا هُمْ يَحْزَنُونَ`,
          words: [`هُمْ`, `يَحْزَنُونَ`],
          labels: [`مبتدأ`, `خبر: فعل مضارع لازم وفاعله المستتر`],
          distractors: [`مفعول به`, `حال`],
        },
        {
          title: `تركيب: فَاسْتَمِعُوا لَهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَاسْتَمِعُوا لَهُ.`,
          source: `فَاسْتَمِعُوا لَهُ`,
          words: [`اسْتَمِعُوا`, `لَهُ`],
          labels: [`فعل أمر لازم وفاعله واو الجماعة`, `جار ومجرور متعلق بالفعل`],
          distractors: [`مفعول به صريح`, `مبتدأ`],
        },
        {
          title: `تركيب: يَسْتَمِعُونَ إِلَيْكَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of يَسْتَمِعُونَ إِلَيْكَ.`,
          source: `يَسْتَمِعُونَ إِلَيْكَ`,
          words: [`يَسْتَمِعُونَ`, `إِلَيْكَ`],
          labels: [`فعل مضارع لازم وفاعله واو الجماعة`, `جار ومجرور متعلق بالفعل`],
          distractors: [`مفعول به صريح`, `حال`],
        },
        {
          title: `تركيب: غَضِبَ اللهُ عَلَيْهِمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of غَضِبَ اللهُ عَلَيْهِمْ.`,
          source: `غَضِبَ اللهُ عَلَيْهِمْ`,
          words: [`غَضِبَ`, `اللهُ`, `عَلَيْهِمْ`],
          labels: [`فعل لازم`, `فاعل`, `جار ومجرور متعلق بالفعل`],
          distractors: [`مفعول به`, `مضاف إليه`],
        },
        {
          title: `تركيب: المَغْضُوبِ عَلَيْهِمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of المَغْضُوبِ عَلَيْهِمْ.`,
          source: `المَغْضُوبِ عَلَيْهِمْ`,
          words: [`المَغْضُوبِ`, `عَلَيْهِمْ`],
          labels: [`اسم مفعول من فعل لازم بواسطة حرف الجر`, `جار ومجرور متعلق باسم المفعول`],
          distractors: [`فاعل`, `مفعول به`],
        },
        {
          title: `تركيب: جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ.`,
          source: `جَلَسَ الطَّالِبُ أَمَامَ المُعَلِّمِ مُتَأَدِّبًا تَبْجِيلًا لِلْعِلْمِ`,
          words: [`جَلَسَ`, `الطَّالِبُ`, `أَمَامَ المُعَلِّمِ`, `مُتَأَدِّبًا`, `تَبْجِيلًا لِلْعِلْمِ`],
          labels: [`فعل لازم`, `فاعل`, `مفعول فيه`, `حال`, `مفعول له`],
          distractors: [`مفعول به`, `مضاف إليه`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'الفعل المتعدي: بنفسه وبواسطة الحرف',
      subtitle: 'The Transitive Verb — متعدي بنفسه vs متعدي بواسطة حرف الجر, and reading the same verb from two angles',
      concepts: [
        {
          heading: 'تعريف الفعل المتعدي وأسماؤه',
          lines: [
            { box: { title: 'Definition', lines: [`الفِعْلُ المُتَعَدِّي: الَّذِي يَتَجَاوَزُ أَثَرُ فَاعِلِهِ إِلَى المَفْعُولِ بِهِ`] } },
            { html: `Unlike الفعل اللازم, the action of <bdi>الفعل المتعدي</bdi> does not remain with the doer only — it reaches a <bdi>مفعول به</bdi>.`, list: false },
            { box: { title: 'Example', lines: [`حَفِظَ الطَّالِبُ الدَّرْسَ`] } },
            { html: `"the student memorised the lesson" — <bdi>حَفِظَ</bdi> passes from <bdi>الطَّالِبُ</bdi> to <bdi>الدَّرْسَ</bdi>: الدرس is the مفعول به.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `حَفِظَ الطَّالِبُ الدَّرْسَ`,
                translation: `The student memorised the lesson.`,
                cells: [`حَفِظَ`, `الطَّالِبُ`, `الدَّرْسَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل متعدي` }, { start: 1, end: 1, role: `فاعل` }, { start: 2, end: 2, role: `مفعول به` }] },
                ],
              },
            },
            { table: { title: 'أسماء أخرى للفعل المتعدي', headers: ['Name', 'Meaning'], rows: [
              [`فعل واقع`, `it falls upon the مفعول به`],
              [`فعل مجاوز`, `its effect passes beyond the فاعل to the مفعول به`],
            ] } },
            { html: `Both names describe the same feature as المتعدي itself: the verb's effect reaches a مفعول به.`, list: false },
          ],
          exercise: {
            prompt: `In حَفِظَ الطَّالِبُ الدَّرْسَ, does the effect of حَفِظَ stay only with الطَّالِبُ, or does it reach الدَّرْسَ؟`,
            kind: 'mcq',
            options: [`It reaches الدَّرْسَ, which is مفعول به`, `It stays only with الطَّالِبُ`, `It reaches a حرف جر instead of an اسم`, `حَفِظَ here has no فاعل`],
            correct: 0,
          },
        },
        {
          heading: 'متعدي بنفسه',
          lines: [
            { html: `A verb may be <bdi>متعدي بنفسه</bdi>: it reaches its <bdi>مفعول به</bdi> directly, without a <bdi>حرف جر</bdi>.`, list: false },
            { box: { title: 'Example', lines: [`الحَمْدُ للهِ الَّذِي أَذْهَبَ عَنَّا الحَزَنَ`] } },
            { html: `"all praise is for Allah, who has removed grief from us" — <bdi>أَذْهَبَ</bdi> takes <bdi>الحَزَنَ</bdi> as its direct مفعول به. The verb reaches the object directly, so it is متعدي بنفسه.`, list: false },
            { table: { title: 'مثال على متعدي بنفسه', headers: ['Example', 'Translation', 'Type'], rows: [
              [`أَذْهَبَ عَنَّا الحَزَنَ`, `He removed grief from us`, `متعدي بنفسه`],
            ] } },
          ],
          exercise: {
            prompt: `In أَذْهَبَ عَنَّا الحَزَنَ, أَذْهَبَ reaches الحَزَنَ with no حرف جر mediating the connection. What kind of متعدي is that؟`,
            kind: 'mcq',
            options: [`متعدي بنفسه`, `متعدي بواسطة حرف الجر`, `اللازم الصرف`, `متعدي إلى مفعولين`],
            correct: 0,
          },
        },
        {
          heading: 'متعدي بواسطة حرف الجر',
          lines: [
            { html: `A verb may also be <bdi>متعدي بواسطة حرف الجر</bdi>: it reaches an object-like meaning through a preposition rather than directly.`, list: false },
            { box: { title: 'Example', lines: [`ذَهَبَ اللهُ بِنُورِهِمْ`] } },
            { html: `"Allah took away their light" — <bdi>ذَهَبَ</bdi> reaches <bdi>نُورِهِمْ</bdi> through the <bdi>باء</bdi>. The object here is not a direct مفعول به صريح; it is reached through a حرف جر.`, list: false },
            { table: { title: 'أسماء المفعول بواسطة حرف الجر', headers: ['Name', 'Meaning'], rows: [
              [`مفعول به بواسطة حرف الجر`, `an object reached through a حرف جر`],
              [`متعلق بمعنى المفعول به`, `connected to the meaning of a مفعول به`],
              [`مفعول به غير صريح`, `an indirect, non-explicit مفعول به`],
            ] } },
          ],
          exercise: {
            prompt: `ذَهَبَ اللهُ بِنُورِهِمْ reaches نُورِهِمْ through الباء rather than directly. What is that kind of object called؟`,
            kind: 'mcq',
            options: [`مفعول به غير صريح — reached through a حرف جر`, `مفعول به صريح`, `فاعل`, `حال`],
            correct: 0,
          },
        },
        {
          heading: 'لازم من جهة، متعدي من جهة أخرى',
          lines: [
            { html: `Some verbs may be called <bdi>لازم</bdi> from one angle and <bdi>متعدي</bdi> from another — these are descriptions from different angles on the same verb, not a contradiction.`, list: false },
            { table: { title: 'زاويتا الوصف', headers: ['Angle', 'Description'], rows: [
              [`direct إعراب`, `the verb is لازم if it does not take a direct مفعول به صريح`],
              [`meaning`, `the verb may be متعدي if it reaches an object-like meaning through a حرف جر`],
            ] } },
            { html: `On that basis, لازم verbs fall into two broad categories.`, list: false },
            { table: { title: 'قسما اللازم', headers: ['Type', 'Explanation'], rows: [
              [`لازم صرف`, `does not naturally become transitive even through a حرف جر — e.g. كَرُمَ وحَسُنَ`],
              [`لازم يتعدى بواسطة حرف الجر`, `takes no direct مفعول به, but reaches an object-like meaning through a حرف جر — e.g. استمع, غضب`],
            ] } },
          ],
          exercise: {
            prompt: `استمع takes no مفعول به صريح, yet reaches an object-like meaning through لام or إلى. From the angle of direct إعراب it is لازم. What might it be called from the angle of meaning؟`,
            kind: 'mcq',
            options: [`متعدي بواسطة حرف الجر`, `متعدي بنفسه`, `فعل ناقص`, `فعل أمر`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الفعل المتعدي؟`, options: [`The verb whose effect passes from its فاعل to a مفعول به`, `The verb whose effect does not pass from its فاعل to a مفعول به`, `A verb that always reaches its object through a حرف جر`, `A verb tied to الأمر only`], correct: 0 },
        { q: `In حَفِظَ الطَّالِبُ الدَّرْسَ, which word is the مفعول به؟`, options: [`الدَّرْسَ`, `الطَّالِبُ`, `حَفِظَ`, `neither word is مفعول به`], correct: 0 },
        { q: `فعل واقع and فعل مجاوز are two other names for which verb category؟`, options: [`الفعل المتعدي`, `الفعل اللازم`, `الفعل الناقص`, `الفعل السماعي`], correct: 0 },
        { q: `In أَذْهَبَ عَنَّا الحَزَنَ, أَذْهَبَ reaches الحَزَنَ with no حرف جر involved. What kind of متعدي is that؟`, options: [`متعدي بنفسه`, `متعدي بواسطة حرف الجر`, `لازم صرف`, `متعدي إلى مفعولين`], correct: 0 },
        { q: `In ذَهَبَ اللهُ بِنُورِهِمْ, ذَهَبَ reaches نُورِهِمْ through الباء. What kind of object is نُورِهِمْ here؟`, options: [`مفعول به غير صريح`, `مفعول به صريح`, `فاعل`, `مبتدأ`], correct: 0 },
        { q: `استمع takes no direct مفعول به, but reaches an object-like meaning through a حرف جر. What does that make it, viewed by meaning rather than direct إعراب؟`, options: [`متعدي بواسطة حرف الجر`, `لازم صرف`, `متعدي بنفسه`, `فعل ناقص`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الفعل المتعدي`, kind: 'mcq', prompt: `Which of the following correctly defines الفعل المتعدي؟`, options: [`The verb whose effect passes from its فاعل to a مفعول به`, `The verb whose effect does not pass from its فاعل to a مفعول به`, `A verb whose form must be individually memorized`, `A word tied to tense but not to meaning`], correct: 0 },
        { title: `حفظ: تحديد المفعول به`, kind: 'mcq', prompt: `In حَفِظَ الطَّالِبُ الدَّرْسَ, what grammatical role does الدَّرْسَ play؟`, options: [`مفعول به`, `فاعل`, `مضاف إليه`, `حال`], correct: 0 },
        { title: `حفظ: تحديد الفاعل`, kind: 'mcq', prompt: `In حَفِظَ الطَّالِبُ الدَّرْسَ, what grammatical role does الطَّالِبُ play؟`, options: [`فاعل`, `مفعول به`, `مبتدأ`, `مضاف إليه`], correct: 0 },
        { title: `فعل واقع: التسمية`, kind: 'mcq', prompt: `فعل واقع is another name for which verb category, and why?`, options: [`الفعل المتعدي — because it falls upon the مفعول به`, `الفعل اللازم — because it stays with the فاعل`, `الفعل الناقص — because it needs a خبر`, `الفعل السماعي — because it must be memorized`], correct: 0 },
        { title: `فعل مجاوز: التسمية`, kind: 'mcq', prompt: `فعل مجاوز is another name for which verb category, and why؟`, options: [`الفعل المتعدي — because its effect passes beyond the فاعل to the مفعول به`, `الفعل اللازم — because its effect never passes beyond the فاعل`, `الفعل القياسي — because it follows a regular rule`, `الفعل الناقص — because it needs a خبر`], correct: 0 },
        { title: `متعدي بنفسه: التعريف`, kind: 'mcq', prompt: `What does متعدي بنفسه mean؟`, options: [`The verb reaches its مفعول به directly, without a حرف جر`, `The verb reaches its مفعول به only through a حرف جر`, `The verb never reaches any مفعول به`, `The verb takes exactly two مفعول به`], correct: 0 },
        { title: `أذهب عنا الحزن: نوع التعدي`, kind: 'mcq', prompt: `أَذْهَبَ takes الحَزَنَ directly in أَذْهَبَ عَنَّا الحَزَنَ, with no حرف جر mediating. What kind of متعدي is أَذْهَبَ here؟`, options: [`متعدي بنفسه`, `متعدي بواسطة حرف الجر`, `لازم صرف`, `فعل ناقص`], correct: 0 },
        { title: `متعدي بواسطة حرف الجر: التعريف`, kind: 'mcq', prompt: `What does متعدي بواسطة حرف الجر mean؟`, options: [`The verb reaches an object-like meaning through a preposition, not directly`, `The verb reaches its مفعول به directly, without any حرف جر`, `The verb takes no object of any kind`, `The verb is restricted to الأمر`], correct: 0 },
        { title: `ذهب بنورهم: أي حرف جر`, kind: 'mcq', prompt: `In ذَهَبَ اللهُ بِنُورِهِمْ, which حرف جر carries the object-like meaning؟`, options: [`الباء`, `اللام`, `إلى`, `فِي`], correct: 0 },
        { title: `مفعول به بواسطة حرف الجر: اسم آخر`, kind: 'mcq', prompt: `مفعول به بواسطة حرف الجر names the same kind of object as which other term used in this lesson؟`, options: [`مفعول به غير صريح`, `مفعول به صريح`, `فاعل`, `نائب الفاعل`], correct: 0 },
        { title: `متعلق بمعنى المفعول به: اسم آخر`, kind: 'mcq', prompt: `متعلق بمعنى المفعول به is one of three names given to the same kind of object in this lesson. Which of the following is another؟`, options: [`مفعول به غير صريح`, `مفعول به صريح`, `مضاف إليه`, `حال`], correct: 0 },
        { title: `مفعول به صريح vs غير صريح`, kind: 'mcq', prompt: `What is the difference between مفعول به صريح and مفعول به غير صريح؟`, options: [`صريح is reached directly with no حرف جر; غير صريح is reached through a حرف جر`, `صريح is always مؤنث; غير صريح is always مذكر`, `صريح only appears with الأمر; غير صريح only appears with الماضي`, `There is no real difference between them`], correct: 0 },
        { title: `الزاويتان: الإعراب المباشر والمعنى`, kind: 'mcq', prompt: `A verb can be described from two different angles in this lesson. What are they؟`, options: [`Direct إعراب, and meaning`, `الماضي, and المضارع`, `القياسي, and السماعي`, `اللفظي, and المعنوي فقط`], correct: 0 },
        { title: `قسما اللازم: الصرف مقابل المتعدي بواسطة حرف الجر`, kind: 'mcq', prompt: `لازم verbs split into two broad categories in this lesson. What distinguishes لازم صرف from a لازم that reaches through a حرف جر؟`, options: [`لازم صرف never becomes transitive even through a حرف جر; the other type does reach an object-like meaning that way`, `لازم صرف always takes a مفعول به صريح`, `Both categories behave identically in every respect`, `لازم صرف only appears in المضارع`], correct: 0 },
        { title: `حفظ مقابل ذهب: بنفسه أم بواسطة؟`, kind: 'mcq', prompt: `حَفِظَ الطَّالِبُ الدَّرْسَ reaches its object with no حرف جر; ذَهَبَ اللهُ بِنُورِهِمْ reaches its object through الباء. How should each be classified؟`, options: [`حَفِظَ is متعدي بنفسه; ذَهَبَ here is متعدي بواسطة حرف الجر`, `Both are متعدي بنفسه`, `Both are متعدي بواسطة حرف الجر`, `حَفِظَ is لازم; ذَهَبَ is متعدي بنفسه`], correct: 0 },
        { title: `استمع مقابل أذهب: هل كلاهما بنفسه؟`, kind: 'mcq', prompt: `أَذْهَبَ reaches its object directly in أَذْهَبَ عَنَّا الحَزَنَ, while استمع (from فَاسْتَمِعُوا لَهُ) never reaches a direct مفعول به at all. Are both verbs متعدي بنفسه؟`, options: [`No — أَذْهَبَ is متعدي بنفسه; استمع stays لازم in direct إعراب and only reaches meaning through a حرف جر`, `Yes — both reach their object directly`, `No — neither verb reaches any object at all`, `Yes, because both verbs begin with a hamza`], correct: 0 },
        { title: `الأثر يتجاوز الفاعل: ما معناه`, kind: 'mcq', prompt: `الفِعْلُ المُتَعَدِّي is defined as الَّذِي يَتَجَاوَزُ أَثَرُ فَاعِلِهِ إِلَى المَفْعُولِ بِهِ. What does يَتَجَاوَزُ mean in that definition؟`, options: [`The effect passes beyond the فاعل to reach the مفعول به`, `The effect never leaves the فاعل`, `The فاعل is omitted entirely`, `The فعل is tied to a specific زمان`], correct: 0 },
        { title: `فعل واحد، وصفان مختلفان`, kind: 'mcq', prompt: `The same verb can sometimes be called لازم in one respect and متعدي in another. Is that a contradiction؟`, options: [`No — the two labels describe the verb from different angles (direct إعراب vs meaning), not conflicting facts`, `Yes — a verb must be exclusively one or the other, always`, `Yes, because لازم and متعدي are simply two names for the same thing`, `No, because متعدي always overrides لازم`], correct: 0 },
        {
          title: `تركيب: حَفِظَ الطَّالِبُ الدَّرْسَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in حَفِظَ الطَّالِبُ الدَّرْسَ.`,
          source: `حَفِظَ الطَّالِبُ الدَّرْسَ`,
          words: [`حَفِظَ`, `الطَّالِبُ`, `الدَّرْسَ`],
          labels: [`فعل متعدي`, `فاعل`, `مفعول به`],
          distractors: [`حال`, `مفعول فيه`],
        },
        {
          title: `تركيب: أَذْهَبَ عَنَّا الحَزَنَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of أَذْهَبَ عَنَّا الحَزَنَ.`,
          source: `أَذْهَبَ عَنَّا الحَزَنَ`,
          words: [`أَذْهَبَ`, `عَنَّا`, `الحَزَنَ`],
          labels: [`فعل متعدي بنفسه`, `جار ومجرور متعلق بالفعل`, `مفعول به`],
          distractors: [`فاعل`, `حال`],
        },
        {
          title: `تركيب: ذَهَبَ اللهُ بِنُورِهِمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ذَهَبَ اللهُ بِنُورِهِمْ.`,
          source: `ذَهَبَ اللهُ بِنُورِهِمْ`,
          words: [`ذَهَبَ`, `اللهُ`, `بِنُورِهِمْ`],
          labels: [`فعل متعدي بواسطة حرف الجر`, `فاعل`, `جار ومجرور في معنى المفعول به غير الصريح`],
          distractors: [`مفعول به صريح`, `حال`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'الفعل المتعدي: فعل واحد بتركيبين وأضرب المتعدي',
      subtitle: 'One Verb, Two Structures — اهدنا vs وهداه, انتهاء الغاية, and how مفاعيل are counted',
      concepts: [
        {
          heading: 'فعل واحد في تركيبين: اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ',
          lines: [
            { html: `A single verb may be transitive by itself in one structure and transitive through a حرف جر in another.`, list: false },
            { box: { title: 'Example', lines: [`اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ`] } },
            { html: `"guide us to the straight path" — here the verb reaches both of its objects directly. <bdi>اهْدِ</bdi> is the أمر of <bdi>هَدَى يَهْدِي هِدَايَةً</bdi>. The pronoun <bdi>نَا</bdi> is the مفعول به أول, and <bdi>الصِّرَاطَ المُسْتَقِيمَ</bdi> is the مفعول به ثانٍ — neither needs a حرف جر.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ`,
                translation: `Guide us to the straight path.`,
                cells: [`اهْدِ`, `نَا`, `الصِّرَاطَ المُسْتَقِيمَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل متعدي` }, { start: 1, end: 1, role: `مفعول به أول` }, { start: 2, end: 2, role: `مفعول به ثانٍ، متصل بالفعل مباشرة` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ, does الصِّرَاطَ المُسْتَقِيمَ need a حرف جر to be reached by the فعل؟`,
            kind: 'mcq',
            options: [`No — it is a direct مفعول به ثانٍ, متصل بالفعل مباشرة`, `Yes — it is reached only through إلى`, `No, because it is الفاعل`, `Yes, because it is مضاف إليه`],
            correct: 0,
          },
        },
        {
          heading: 'وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ: نفس الفعل، تركيب آخر',
          lines: [
            { box: { title: 'Example', lines: [`وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ`] } },
            { html: `"and He guided him to a straight path" — the pronoun <bdi>هُ</bdi> is still a direct مفعول به أول, but the second object, <bdi>صِرَاطٍ مُسْتَقِيمٍ</bdi>, is reached through <bdi>إِلَى</bdi>: a مفعول به غير صريح.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ`,
                translation: `And He guided him to a straight path.`,
                cells: [`وَ`, `هَدَى`, `هُ`, `إِلَى صِرَاطٍ مُسْتَقِيمٍ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف عطف` }, { start: 1, end: 1, role: `فعل` }, { start: 2, end: 2, role: `مفعول به أول` }, { start: 3, end: 3, role: `جار ومجرور، في معنى المفعول به الثاني (غير صريح)` }] },
                ],
              },
            },
            { table: { title: 'الفعل نفسه بتركيبين مختلفين', headers: ['Wording', 'Example', 'Object type'], rows: [
              [`مباشر (بنفسه)`, `اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ`, `مفعول به ثانٍ صريح`],
              [`بواسطة حرف الجر`, `وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ`, `مفعول به غير صريح`],
            ] } },
          ],
          exercise: {
            prompt: `Both اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ and وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ use the same verb, هدى. What differs between the two structures؟`,
            kind: 'mcq',
            options: [`One reaches its second object directly (مفعول به ثانٍ صريح); the other reaches it through إلى (مفعول به غير صريح)`, `One uses هدى as لازم; the other as متعدي بنفسه`, `Neither structure reaches a second object at all`, `Both reach the second object exactly the same way`],
            correct: 0,
          },
        },
        {
          heading: 'الفرق في المعنى بين التركيبين',
          lines: [
            { html: `Different Arabic structures may carry different shades of meaning. When guidance is expressed directly, as in اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ, the request is for being placed firmly upon the straight path itself.`, list: false },
            { html: `When إلى is used, as in وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ, the meaning may include direction toward an endpoint or destination — إلى often indicates <bdi>انتهاء الغاية</bdi>: reaching or moving toward an endpoint, and whether the endpoint itself is included may depend on context.`, list: false },
            { box: { title: 'Careful', lines: [`Direct transitivity and transitivity through إلى are not always identical in nuance — the presence or absence of a حرف جر can affect meaning. This reading is offered as a reflection drawn from the known قواعد of the language, not as a settled ruling, والله أعلم بالصواب.`] } },
            { html: `In <bdi>دعاء</bdi> the direct form is used: اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ, not اهْدِنَا إِلَى الصِّرَاطِ المُسْتَقِيمِ. Asking to be placed upon the path carries more <bdi>تضرع</bdi>, and leaves no doubt about reaching the objective.`, list: false },
            { html: `The description of the Prophet ﷺ uses the other form: وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ — he shows people the path and brings them to it, but whether they step onto it is their own choice.`, list: false },
          ],
          exercise: {
            prompt: `The Qur'an uses اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ in دعاء, but describes the Prophet ﷺ with وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ. What distinction does this illustrate؟`,
            kind: 'mcq',
            options: [`The direct form asks to be placed on the path itself with more تضرع; the إلى form shows direction toward it, leaving the final step to the person`, `The two forms are stylistic variants with no difference in meaning at all`, `اهدنا is فعل ماضٍ while لتهدي is فعل أمر`, `إلى here is a حرف عطف, not a حرف جر`],
            correct: 0,
          },
        },
        {
          heading: 'إلى وانتهاء الغاية: مسألة الغاية',
          lines: [
            { html: `<bdi>إلى</bdi> indicates <bdi>انتهاء الغاية</bdi>: movement or direction toward an endpoint. Whether the endpoint itself is included depends on context.`, list: false },
            { html: `For example, in discussions of washing up to the elbows, the use of إلى may raise the question of whether the elbows are included. If the verb directly governed the object without إلى, the inclusion would be more direct. This is why the presence or absence of a حرف جر can matter for meaning.`, list: false },
          ],
          exercise: {
            prompt: `إلى marks انتهاء الغاية — movement toward an endpoint. Does that alone settle whether the endpoint itself is included in the ruling؟`,
            kind: 'mcq',
            options: [`No — whether the endpoint is included can depend on context`, `Yes — إلى always excludes the endpoint`, `Yes — إلى always includes the endpoint`, `إلى never indicates انتهاء الغاية`],
            correct: 0,
          },
        },
        {
          heading: 'أضرب الفعل المتعدي بحسب عدد المفعولين',
          lines: [
            { html: `الفعل المتعدي divides further according to the number of objects it takes.`, list: false },
            { table: { title: 'أضرب الفعل المتعدي', headers: ['Type', 'Meaning'], rows: [
              [`متعدي إلى مفعول واحد`, `takes one مفعول به`],
              [`متعدي إلى مفعولين`, `takes two مفعول به elements`],
              [`متعدي إلى ثلاثة مفاعيل`, `takes three مفعول به elements`],
            ] } },
            { html: `A متعدي إلى مفعول واحد verb takes exactly one مفعول به.`, list: false },
            { box: { title: 'Example', lines: [`خَلَقَ السَّمَاوَاتِ وَالأَرْضَ`] } },
            { html: `"He created the heavens and the earth" — <bdi>خَلَقَ</bdi> is transitive: it takes its object in <bdi>السَّمَاوَاتِ وَالأَرْضَ</bdi>. السَّمَاوَاتِ and الأَرْضَ are connected by <bdi>عطف</bdi>, so the structure is still treated as one object category joined by coordination, not two separate مفاعيل.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `خَلَقَ السَّمَاوَاتِ وَالأَرْضَ`,
                translation: `He created the heavens and the earth.`,
                cells: [`خَلَقَ`, `السَّمَاوَاتِ`, `وَ`, `الأَرْضَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل متعدي` }, { start: 1, end: 1, role: `مفعول به` }, { start: 2, end: 2, role: `حرف عطف` }, { start: 3, end: 3, role: `معطوف على المفعول به` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `خَلَقَ السَّمَاوَاتِ وَالأَرْضَ joins two nouns with و after خَلَقَ. Does that make خَلَقَ here متعدي إلى مفعولين — two separate objects؟`,
            kind: 'mcq',
            options: [`No — السَّمَاوَاتِ وَالأَرْضَ is one مفعول به category joined by عطف, so خَلَقَ here is متعدي إلى مفعول واحد`, `Yes — و always creates a second, independent مفعول به`, `No — الأَرْضَ is actually الفاعل here`, `Yes — الأَرْضَ is a separate فعل`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ and وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ use the same verb. Which one reaches its second object directly, with no حرف جر؟`, options: [`اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ`, `وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ`, `Neither reaches a second object directly`, `Both reach it only through إلى`], correct: 0 },
        { q: `In وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ, what kind of مفعول به is صِرَاطٍ مُسْتَقِيمٍ؟`, options: [`مفعول به غير صريح`, `مفعول به صريح`, `فاعل`, `مضاف إليه`], correct: 0 },
        { q: `The Qur'an prefers اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ over اهْدِنَا إِلَى الصِّرَاطِ المُسْتَقِيمِ in دعاء. What nuance does the direct form add here؟`, options: [`More تضرع, with no doubt about reaching the objective`, `A weaker request, leaving reaching the path uncertain`, `A shift from الأمر to الماضي`, `No nuance at all — the two forms mean exactly the same`], correct: 0 },
        { q: `إلى is described as marking انتهاء الغاية. What does that mean؟`, options: [`Movement or direction toward an endpoint`, `A meaning tied only to place, never to time`, `An object reached with no حرف جر at all`, `A sign exclusive to الفعل الأمر`], correct: 0 },
        { q: `الفعل المتعدي is further divided by how many مفعول به it takes. Which of these correctly lists its three أضرب؟`, options: [`متعدي إلى مفعول واحد، متعدي إلى مفعولين، متعدي إلى ثلاثة مفاعيل`, `لازم، متعدي بنفسه، متعدي بواسطة حرف الجر`, `فعل واقع، فعل مجاوز، فعل قاصر`, `ماضٍ، مضارع، أمر`], correct: 0 },
        { q: `In خَلَقَ السَّمَاوَاتِ وَالأَرْضَ, السَّمَاوَاتِ and الأَرْضَ are joined by عطف. Does خَلَقَ here count as متعدي إلى مفعولين؟`, options: [`No — the two nouns form one مفعول به category joined by عطف, so خَلَقَ is متعدي إلى مفعول واحد`, `Yes — عطف always produces a second independent مفعول به`, `No — خَلَقَ here is لازم`, `Yes — الأَرْضَ is مفعول به ثانٍ`], correct: 0 },
      ],
      bank: [
        { title: `اهدنا: كلا المفعولين مباشرة`, kind: 'mcq', prompt: `In اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ, how does the فعل reach both of its objects؟`, options: [`Directly, with no حرف جر mediating either one`, `Both are reached only through إلى`, `Only the first object is reached directly; the second needs إلى`, `Neither object is reached — both are dropped`], correct: 0 },
        { title: `اهدنا: تحديد المفعول به الأول`, kind: 'mcq', prompt: `In اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ, which part is المفعول به الأول؟`, options: [`نَا`, `الصِّرَاطَ المُسْتَقِيمَ`, `اهْدِ`, `there is no مفعول به أول here`], correct: 0 },
        { title: `اهدنا: تحديد المفعول به الثاني`, kind: 'mcq', prompt: `In اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ, which part is المفعول به الثاني؟`, options: [`الصِّرَاطَ المُسْتَقِيمَ`, `نَا`, `اهْدِ`, `there is no مفعول به ثانٍ here`], correct: 0 },
        { title: `وهداه: تحديد المفعول به الأول`, kind: 'mcq', prompt: `In وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ, which part is المفعول به الأول؟`, options: [`هُ`, `إِلَى صِرَاطٍ مُسْتَقِيمٍ`, `هَدَى`, `وَ`], correct: 0 },
        { title: `وهداه: كيف وصل المفعول الثاني`, kind: 'mcq', prompt: `In وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ, how is the second object reached؟`, options: [`Through إلى — it is مفعول به غير صريح`, `Directly, with no حرف جر`, `It is not reached at all`, `Through the pronoun هُ`], correct: 0 },
        { title: `اهدنا مقابل وهداه: الفرق البنيوي`, kind: 'mcq', prompt: `اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ and وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ both use هدى but differ in one structural point. What is it؟`, options: [`Whether the second object is صريح (direct) or غير صريح (through إلى)`, `Whether the verb is ماضٍ or أمر only`, `Whether the verb has a فاعل at all`, `Whether the sentence has a حرف عطف`], correct: 0 },
        { title: `تضرع الدعاء`, kind: 'mcq', prompt: `Why does اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ, the direct form, suit دعاء better than an إلى-form would؟`, options: [`It asks to be placed on the path itself, carrying more تضرع and leaving no doubt about reaching it`, `It is grammatically simpler to pronounce`, `إلى cannot follow a فعل أمر at all`, `The direct form is سماعي while the إلى form is قياسي`], correct: 0 },
        { title: `وصف النبي ﷺ: لماذا إلى؟`, kind: 'mcq', prompt: `وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ describes the Prophet ﷺ using إلى rather than the direct form. What does that shade of meaning suggest?`, options: [`He shows people the path and brings them to it, but stepping onto it is their own choice`, `He forces everyone directly onto the path with no choice involved`, `إلى here means the Prophet ﷺ never guides anyone at all`, `It shows the sentence is لازم, not متعدي`], correct: 0 },
        { title: `الفرق ليس حكمًا قاطعًا`, kind: 'mcq', prompt: `The Careful note on the difference between اهدنا and وهداه's structures describes it as what kind of claim؟`, options: [`A reflection drawn from the known قواعد of the language, not a settled ruling`, `A definitively proven rule with no room for another reading`, `An invented distinction with no basis in the قواعد at all`, `A rule that applies only to الفعل الأمر`], correct: 0 },
        { title: `انتهاء الغاية: التعريف`, kind: 'mcq', prompt: `What does انتهاء الغاية mean, as the sense إلى carries؟`, options: [`Movement or direction toward an endpoint`, `A meaning restricted to الزمان only`, `A sign that the verb is لازم`, `A sign that the فعل is مبني للمجهول`], correct: 0 },
        { title: `هل يدخل المنتهى في الحكم؟`, kind: 'mcq', prompt: `When إلى marks انتهاء الغاية, is the endpoint itself automatically included in what the verb governs؟`, options: [`Not automatically — whether it is included can depend on context`, `Yes — the endpoint is always included`, `No — the endpoint is never included`, `إلى never marks an endpoint at all`], correct: 0 },
        { title: `حرف الجر وأثره في المعنى`, kind: 'mcq', prompt: `Why can the presence or absence of a حرف جر matter for meaning, per this lesson's discussion of washing up to the elbows؟`, options: [`Because whether an endpoint like the elbows is included can depend on whether إلى mediates the object or the verb governs it directly`, `Because a حرف جر always changes the verb's tense`, `Because a حرف جر always turns the verb into الأمر`, `Because حرف جر has no effect on meaning at all`], correct: 0 },
        { title: `أضرب المتعدي: القائمة الكاملة`, kind: 'mcq', prompt: `Which list correctly names الفعل المتعدي's three أضرب by number of مفعول به؟`, options: [`متعدي إلى مفعول واحد، متعدي إلى مفعولين، متعدي إلى ثلاثة مفاعيل`, `متعدي بنفسه، متعدي بواسطة حرف الجر، لازم صرف`, `فعل واقع، فعل مجاوز، فعل قاصر`, `القياسي، السماعي، الناقص`], correct: 0 },
        { title: `خلق: تحديد المفعول به`, kind: 'mcq', prompt: `In خَلَقَ السَّمَاوَاتِ وَالأَرْضَ, what is خَلَقَ's مفعول به؟`, options: [`السَّمَاوَاتِ وَالأَرْضَ, together, as one مفعول به joined by عطف`, `السَّمَاوَاتِ alone, with الأَرْضَ as a separate فاعل`, `الأَرْضَ alone, with السَّمَاوَاتِ dropped`, `Neither word — خَلَقَ has no مفعول به here`], correct: 0 },
        { title: `عطف لا يضاعف العدد`, kind: 'mcq', prompt: `Two nouns joined by عطف after a متعدي إلى مفعول واحد verb, as in خَلَقَ السَّمَاوَاتِ وَالأَرْضَ, do they turn the verb into متعدي إلى مفعولين؟`, options: [`No — عطف joins them into one مفعول به category, not two separate مفاعيل`, `Yes — عطف always creates a second مفعول به`, `Yes, but only when the second noun is مؤنث`, `No, because عطف can never follow a مفعول به`], correct: 0 },
        { title: `معطوف على المفعول به: الإعراب`, kind: 'mcq', prompt: `In خَلَقَ السَّمَاوَاتِ وَالأَرْضَ, what is الأَرْضَ's grammatical role relative to السَّمَاوَاتِ؟`, options: [`معطوف على المفعول به`, `مضاف إليه`, `فاعل`, `حال`], correct: 0 },
        { title: `فعل واحد، تركيبان، معنيان`, kind: 'mcq', prompt: `The lesson uses the same verb هدى in two different constructions. What does comparing them show, overall؟`, options: [`The same verb can be متعدي بنفسه in one structure and متعدي بواسطة حرف الجر in another, and the choice can shift the meaning`, `A verb can only ever appear in one fixed structure`, `متعدي بنفسه and متعدي بواسطة حرف الجر can never apply to the same verb`, `Only السماعي أفعال can shift structures this way`], correct: 0 },
        { title: `والله أعلم بالصواب: طبيعة القول`, kind: 'mcq', prompt: `The lesson closes its meaning-nuance discussion with والله أعلم بالصواب. What does that phrase signal about the claim being made؟`, options: [`It is offered as a reasoned reflection, not asserted as a settled, certain ruling`, `It is a definitive, unquestionable rule of grammar`, `It applies only to poetry, never to normal speech`, `It contradicts everything stated earlier in the lesson`], correct: 0 },
        {
          title: `تركيب: اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ.`,
          source: `اهْدِنَا الصِّرَاطَ المُسْتَقِيمَ`,
          words: [`اهْدِ`, `نَا`, `الصِّرَاطَ المُسْتَقِيمَ`],
          labels: [`فعل متعدي`, `مفعول به أول`, `مفعول به ثانٍ، متصل بالفعل مباشرة`],
          distractors: [`فاعل`, `جار ومجرور`],
        },
        {
          title: `تركيب: وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ.`,
          source: `وَهَدَاهُ إِلَى صِرَاطٍ مُسْتَقِيمٍ`,
          words: [`وَ`, `هَدَى`, `هُ`, `إِلَى صِرَاطٍ مُسْتَقِيمٍ`],
          labels: [`حرف عطف`, `فعل`, `مفعول به أول`, `جار ومجرور، في معنى المفعول به الثاني (غير صريح)`],
          distractors: [`مفعول به ثانٍ صريح`, `مبتدأ`],
        },
        {
          title: `تركيب: خَلَقَ السَّمَاوَاتِ وَالأَرْضَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of خَلَقَ السَّمَاوَاتِ وَالأَرْضَ.`,
          source: `خَلَقَ السَّمَاوَاتِ وَالأَرْضَ`,
          words: [`خَلَقَ`, `السَّمَاوَاتِ`, `وَ`, `الأَرْضَ`],
          labels: [`فعل متعدي`, `مفعول به`, `حرف عطف`, `معطوف على المفعول به`],
          distractors: [`فاعل`, `حال`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'المتعدي إلى مفعولين',
      subtitle: 'The Two-Object Verb — أفعال العطاء, حذف المفعولين, أفعال الظن, and فعل الجارحة vs فعل القلب',
      concepts: [
        {
          heading: 'الضرب الثاني: المتعدي إلى مفعولين',
          lines: [
            { html: `الفعل المتعدي may take one مفعول به, two مفعول به elements, or three مفاعيل. The second of these is next.`, list: false },
            { box: { title: 'Core Text', lines: [`الضَّرْبُ الثَّانِي: الفِعْلُ المُتَعَدِّي إِلَى مَفْعُولَيْنِ`] } },
            { html: `<bdi>الفعل المتعدي إلى مفعولين</bdi> is a transitive verb that takes two objects. It divides into two categories.`, list: false },
            { table: { title: 'قسما المتعدي إلى مفعولين', headers: ['Type', 'Explanation'], rows: [
              [`مفعولاه ليسا مبتدأ وخبر في الأصل`, `the two objects were not originally a مبتدأ and خبر`],
              [`مفعولاه مبتدأ وخبر في الأصل`, `the two objects were originally a مبتدأ and خبر`],
            ] } },
          ],
          exercise: {
            prompt: `الفعل المتعدي إلى مفعولين divides into two categories based on one question. What is that question؟`,
            kind: 'mcq',
            options: [`Whether the two مفعول به were originally a مبتدأ وخبر, or not`, `Whether the verb is ماضٍ or مضارع`, `Whether the verb takes a حرف جر`, `Whether الفاعل is مذكر or مؤنث`],
            correct: 0,
          },
        },
        {
          heading: 'مفعولان ليسا مبتدأ وخبر: أفعال العطاء',
          lines: [
            { box: { title: 'Core Text', lines: [`فِعْلٌ لَيْسَ مَفْعُولَاهُ مُبْتَدَأً وَخَبَرًا فِي الأَصْلِ`] } },
            { box: { title: 'Example', lines: [`﴿وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ﴾`] } },
            { html: `"And We guided them both to the straight path." Neither object here was ever a مبتدأ and خبر. The meaning is that guidance was given to them and directed toward the straight path: <bdi>هَدَيْنَاهُم</bdi> in the sense of <bdi>أَعْطَيْنَاهُمُ الهِدَايَةَ</bdi>.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ`,
                translation: `And We guided them both to the straight path.`,
                cells: [`وَ`, `هَدَيْنَا`, `هُمَا`, `الصِّرَاطَ المُسْتَقِيمَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف عطف` }, { start: 1, end: 1, role: `فعل متعدي إلى مفعولين` }, { start: 2, end: 2, role: `مفعول به أول` }, { start: 3, end: 3, role: `مفعول به ثان` }] },
                ],
              },
            },
            { html: `This pattern shows up in verbs of giving, granting, clothing, teaching, naming, providing, or directing something to someone: one object is the receiver, the other is the thing given.`, list: false },
            { table: { title: 'أمثلة على أفعال العطاء', headers: ['Verb', 'Meaning'], rows: [
              [`أَعْطَى`, `to give`],
              [`مَنَحَ`, `to grant`],
              [`وَهَبَ`, `to gift`],
              [`كَسَا`, `to clothe`],
              [`أَلْبَسَ`, `to dress or clothe`],
              [`سَمَّى`, `to name`],
              [`عَلَّمَ`, `to teach`],
              [`رَزَقَ`, `to provide`],
            ] } },
          ],
          exercise: {
            prompt: `In ﴿وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ﴾, was هُمَا or الصِّرَاطَ المُسْتَقِيمَ ever, in origin, a مبتدأ with the other as its خبر؟`,
            kind: 'mcq',
            options: [`No — neither object was originally مبتدأ وخبر; the meaning is أَعْطَيْنَاهُمُ الهِدَايَةَ`, `Yes — هُمَا was مبتدأ and الصِّرَاطَ was خبر`, `Yes — الصِّرَاطَ was مبتدأ and هُمَا was خبر`, `The sentence has no مفعول به at all`],
            correct: 0,
          },
        },
        {
          heading: 'حذف المفعولين: القياس والأمثلة',
          lines: [
            { html: `A verb that can take two objects does not have to mention both every time — one or both may be dropped when the meaning is understood from context.`, list: false },
            { box: { title: 'Core Text', lines: [`يَجُوزُ حَذْفُ المَفْعُولِ الأَوَّلِ ... أَوِ المَفْعُولِ الثَّانِي ... أَوْ كِلاهُمَا`] } },
            { table: { title: 'أنماط حذف المفعولين', headers: ['Omission', 'Example', 'Translation', 'What is understood'], rows: [
              [`المفعول الأول محذوف`, `﴿وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ﴾`, `and indeed you guide to a straight path`, `the guided people are understood`],
              [`المفعول الثاني محذوف`, `﴿أُولَئِكَ الَّذِينَ هَدَاهُمُ اللهُ﴾`, `those are the ones Allah guided`, `what they were guided to is not stated`],
              [`كلا المفعولين محذوف`, `﴿أَعْطَى كُلَّ شَيْءٍ خَلْقَهُ ثُمَّ هَدَى﴾`, `He gave everything its creation, then guided`, `the context carries the omitted objects`],
            ] } },
            { box: { title: 'Careful', lines: [`متعدي إلى مفعولين describes what a verb can take, not what must appear in every sentence.`] } },
            { html: `In ﴿وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ﴾ the understood meaning is وَإِنَّكَ لَتَهْدِي النَّاسَ إِلَى صِرَاطٍ مُسْتَقِيمٍ — the omitted first object is <bdi>النَّاسَ</bdi>, and إِلَى صِرَاطٍ مُسْتَقِيمٍ then carries the second object indirectly.`, list: false },
          ],
          exercise: {
            prompt: `﴿أُولَئِكَ الَّذِينَ هَدَاهُمُ اللهُ﴾ mentions هُم as the first object of هَدَى but says nothing about a destination. What has been omitted؟`,
            kind: 'mcq',
            options: [`The second object — what they were guided to is not stated`, `The first object — who was guided is not stated`, `Both objects — nothing at all is mentioned`, `Nothing has been omitted here`],
            correct: 0,
          },
        },
        {
          heading: 'المفعول الثاني الصريح وغير الصريح، وإلى مرة أخرى',
          lines: [
            { table: { title: 'صريح المفعول الثاني أم غير صريح؟', headers: ['Form', 'Example', 'Translation', 'Analysis'], rows: [
              [`direct`, `﴿وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ﴾`, `and We guided them both to the straight path`, `الصراط is مفعول به ثان صريح`],
              [`indirect`, `﴿لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ﴾`, `you guide to a straight path`, `the meaning reaches the second object through إلى`],
            ] } },
            { html: `When the object arrives through a حرف جر, it is not مفعول به صريح — it is <bdi>مفعول به غير صريح</bdi>, also described as <bdi>مفعول بواسطة حرف الجر</bdi>.`, list: false },
            { html: `The same ambiguity discussed with انتهاء الغاية appears again in the آية of وضوء:`, list: false },
            { box: { title: 'Example', lines: [`﴿وَأَيْدِيَكُمْ إِلَى المَرَافِقِ﴾`] } },
            { html: `"and your arms up to the elbows" — are the elbows themselves washed? The majority of scholars say yes and treat washing them as <bdi>فرض</bdi>; one or two have held otherwise, precisely on the grounds that إلى does not necessarily include the endpoint.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَأَيْدِيَكُمْ إِلَى المَرَافِقِ﴾ raises a real question among scholars: are the elbows included in the washing? What is that question grounded in, grammatically؟`,
            kind: 'mcq',
            options: [`Whether إلى's انتهاء الغاية necessarily includes the endpoint it marks`, `Whether أيديكم is مفرد or جمع`, `Whether المرافق is مذكر or مؤنث`, `Whether the verb is مبني للمجهول`],
            correct: 0,
          },
        },
        {
          heading: 'مفعولان أصلهما مبتدأ وخبر',
          lines: [
            { box: { title: 'Core Text', lines: [`فِعْلٌ مَفْعُولَاهُ مُبْتَدَأٌ وَخَبَرٌ فِي الأَصْلِ`] } },
            { box: { title: 'Example', lines: [`ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا`] } },
            { html: `"Ahmad thought Khalid truthful." The original structure was <bdi>خَالِدٌ صَادِقٌ</bdi>; once <bdi>ظَنَّ</bdi> enters, that مبتدأ and خبر become the two objects.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا`,
                translation: `Ahmad thought Khalid truthful.`,
                cells: [`ظَنَّ`, `أَحْمَدُ`, `خَالِدًا`, `صَادِقًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل متعدي إلى مفعولين` }, { start: 1, end: 1, role: `فاعل` }, { start: 2, end: 2, role: `مفعول به أول` }, { start: 3, end: 3, role: `مفعول به ثان` }] },
                ],
              },
            },
            { box: { title: 'Example', lines: [`﴿وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً﴾`] } },
            { html: `"And I do not think the Hour will be established." The original structure was <bdi>السَّاعَةُ قَائِمَةٌ</bdi>; after <bdi>أَظُنُّ</bdi>, <bdi>السَّاعَةَ</bdi> is مفعول به أول and <bdi>قَائِمَةً</bdi> is مفعول به ثان.`, list: false },
          ],
          exercise: {
            prompt: `In ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا, what was the original relationship between خَالِدًا and صَادِقًا before ظَنَّ entered؟`,
            kind: 'mcq',
            options: [`مبتدأ وخبر: خَالِدٌ صَادِقٌ`, `مضاف ومضاف إليه`, `فاعل ومفعول به`, `They had no relationship before ظَنَّ`],
            correct: 0,
          },
        },
        {
          heading: 'تسمية الفعل: الجارحة والقلب والتحويل',
          lines: [
            { box: { title: 'Core Text', lines: [`يُسَمَّى الفِعْلُ الَّذِي لَيْسَ مَفْعُولَاهُ مُبْتَدَأً وَخَبَرًا فِي الأَصْلِ فِعْلَ جَارِحَةٍ، وَهِيَ مَا يُزَاوَلُ بِالجَوَارِحِ مِنَ الأَفْعَالِ الحِسِّيَّةِ`, `يُسَمَّى الفِعْلُ الَّذِي مَفْعُولَاهُ مُبْتَدَأٌ وَخَبَرٌ فِي الأَصْلِ فِعْلَ قَلْبٍ أَوْ فِعْلَ تَحْوِيلٍ`] } },
            { html: `<bdi>جرح يجرح جرحًا</bdi> means "to wound." <bdi>الجوارح</bdi> are the limbs, the parts of the body that carry out actions, so <bdi>فعل الجارحة</bdi> covers what is performed with the limbs among <bdi>الأفعال الحسية</bdi>.`, list: false },
            { table: { title: 'أسماء الفعل بحسب أصل مفعوليه', headers: ['Name', 'Meaning'], rows: [
              [`فعل الجارحة`, `an outward, sensory action performed by the limbs`],
              [`فعل القلب`, `a verb of inner perception, knowledge, belief, or judgement`],
              [`فعل التحويل`, `a verb of making or turning something into something else`],
            ] } },
            { html: `Which of the last two labels applies depends on the meaning the verb carries.`, list: false },
            { html: `<bdi>فعل الجارحة</bdi> is the default, so most verbs are never labelled with it — <bdi>سَمِعَ</bdi>, <bdi>مَشَى</bdi>, <bdi>أَكَلَ</bdi>, and <bdi>شَمَّ</bdi> are all أفعال الجوارح, but nobody adds the label when using them. The label earns its place when a verb runs both ways.`, list: false },
            { table: { title: 'رأى: استعمالان', headers: ['Use of the verb', 'Label', 'Meaning'], rows: [
              [`physical seeing`, `رأى الجارحة`, `seeing with the eye`],
              [`inner judgement or knowledge`, `رأى القلبية`, `knowing, thinking, or considering`],
            ] } },
            { html: `Because رأى can be either, the label has to be stated to show which reading is intended.`, list: false },
          ],
          exercise: {
            prompt: `سَمِعَ، مَشَى، أَكَلَ، and شَمَّ are all technically أفعال الجوارح, yet nobody bothers adding that label to them. Why does رأى need the label stated explicitly, when these verbs don't؟`,
            kind: 'mcq',
            options: [`Because رأى can be either physical seeing or inner judgement, so the label shows which reading is meant — unlike verbs that only carry one reading`, `Because رأى is the only فعل جارحة in the whole language`, `Because رأى is never فعل جارحة at all`, `Because سَمِعَ, مَشَى, أَكَلَ, and شَمَّ are not real أفعال`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الفعل المتعدي إلى مفعولين splits into two categories. Which question decides which category a given verb belongs to؟`, options: [`Whether its two مفعول به were originally a مبتدأ وخبر, or not`, `Whether the verb is سماعي or قياسي`, `Whether the verb takes ثلاثة مفاعيل`, `Whether the فاعل is ظاهر or مستتر`], correct: 0 },
        { q: `﴿وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ﴾ belongs to which category of متعدي إلى مفعولين؟`, options: [`مفعولاه ليسا مبتدأ وخبر في الأصل`, `مفعولاه مبتدأ وخبر في الأصل`, `متعدي إلى مفعول واحد فقط`, `لازم بواسطة حرف الجر`], correct: 0 },
        { q: `In ﴿أُولَئِكَ الَّذِينَ هَدَاهُمُ اللهُ﴾, which object of هَدَى has been dropped؟`, options: [`The second object — what they were guided to`, `The first object — who was guided`, `Both objects`, `Neither — nothing is dropped here`], correct: 0 },
        { q: `In ﴿وَأَيْدِيَكُمْ إِلَى المَرَافِقِ﴾, scholars differ on whether the elbows are included in the washing. What grammatical point does that disagreement hinge on؟`, options: [`Whether إلى's انتهاء الغاية necessarily includes its endpoint`, `Whether أيديكم is مفرد`, `Whether المرافق takes تنوين`, `Whether the verb is فعل أمر`], correct: 0 },
        { q: `In ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا, خَالِدًا and صَادِقًا were originally what, before ظَنَّ entered؟`, options: [`مبتدأ وخبر`, `فاعل ونائب فاعل`, `مضاف ومضاف إليه`, `حال وصاحب حال`], correct: 0 },
        { q: `رأى can mean physical seeing or inner judgement, so grammar books label it explicitly in each use. Which pair of labels does that give؟`, options: [`رأى الجارحة and رأى القلبية`, `رأى اللازم and رأى المتعدي`, `رأى الماضي and رأى المضارع`, `رأى القياسي and رأى السماعي`], correct: 0 },
      ],
      bank: [
        { title: `متعدي إلى مفعولين: القسمان`, kind: 'mcq', prompt: `Which pair correctly names the two categories of الفعل المتعدي إلى مفعولين؟`, options: [`مفعولاه ليسا مبتدأ وخبر في الأصل, and مفعولاه مبتدأ وخبر في الأصل`, `لازم صرف, and لازم يتعدى بواسطة حرف الجر`, `فعل واقع, and فعل مجاوز`, `متعدي بنفسه, and متعدي بواسطة حرف الجر`], correct: 0 },
        { title: `هدیناهما: نمط أفعال العطاء`, kind: 'mcq', prompt: `﴿وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ﴾ means roughly أَعْطَيْنَاهُمُ الهِدَايَةَ. Which broader family of verbs does this pattern belong to؟`, options: [`Verbs of giving, granting, clothing, teaching, naming, providing, or directing something to someone`, `أفعال القلوب, verbs of inner judgement only`, `أفعال التحويل, verbs of turning one thing into another`, `أفعال الجارحة with no giving sense at all`], correct: 0 },
        { title: `أفعال العطاء: تحديد علّم`, kind: 'mcq', prompt: `Among أَعْطَى، مَنَحَ، وَهَبَ، كَسَا، أَلْبَسَ، سَمَّى، عَلَّمَ، رَزَقَ, which verb means "to teach"؟`, options: [`عَلَّمَ`, `رَزَقَ`, `كَسَا`, `سَمَّى`], correct: 0 },
        { title: `أفعال العطاء: تحديد رزق`, kind: 'mcq', prompt: `Among the same list, which verb means "to provide"؟`, options: [`رَزَقَ`, `أَلْبَسَ`, `وَهَبَ`, `عَلَّمَ`], correct: 0 },
        { title: `المفعول الأول محذوف`, kind: 'mcq', prompt: `In ﴿وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ﴾, the understood full meaning is وَإِنَّكَ لَتَهْدِي النَّاسَ إِلَى صِرَاطٍ مُسْتَقِيمٍ. Which object was dropped؟`, options: [`The first object, النَّاسَ`, `The second object`, `Both objects`, `Neither — the verse states both objects explicitly`], correct: 0 },
        { title: `كلا المفعولين محذوف`, kind: 'mcq', prompt: `﴿أَعْطَى كُلَّ شَيْءٍ خَلْقَهُ ثُمَّ هَدَى﴾ ends with هَدَى mentioning no object at all. What does the source say about omission here؟`, options: [`Both objects of هَدَى are omitted, understood from context`, `هَدَى here takes no object in any structure, ever`, `هَدَى here is لازم, not متعدي`, `Only the second object is omitted`], correct: 0 },
        { title: `متعدي إلى مفعولين: إمكان لا إلزام`, kind: 'mcq', prompt: `The Careful note says متعدي إلى مفعولين describes what a verb can take. What does it explicitly warn against assuming؟`, options: [`That both objects must appear in every sentence using the verb`, `That the verb can never take fewer than two objects`, `That the verb must always be مضارع`, `That the verb can never appear with a حرف جر`], correct: 0 },
        { title: `مفعول به صريح مقابل غير صريح`, kind: 'mcq', prompt: `الصراط in ﴿وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ﴾ is مفعول به ثان صريح, while the second object in ﴿لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ﴾ is not. What is the second one called instead؟`, options: [`مفعول به غير صريح, reached through إلى`, `مفعول به صريح, reached without a حرف جر`, `فاعل`, `مضاف إليه`], correct: 0 },
        { title: `أيديكم إلى المرافق: القولان`, kind: 'mcq', prompt: `On ﴿وَأَيْدِيَكُمْ إِلَى المَرَافِقِ﴾, what is the majority scholarly position on whether the elbows are washed؟`, options: [`Yes — washing them is treated as فرض`, `No — the majority say the elbows are excluded`, `There is unanimous agreement that they are excluded`, `The question has nothing to do with إلى`], correct: 0 },
        { title: `أيديكم إلى المرافق: الرأي الآخر`, kind: 'mcq', prompt: `A minority of scholars held that the elbows are not included in ﴿وَأَيْدِيَكُمْ إِلَى المَرَافِقِ﴾. On what grammatical basis؟`, options: [`إلى does not necessarily include the endpoint it marks`, `المرافق is مبني`, `أيديكم has no إعراب at all`, `إلى here is a حرف عطف, not جر`], correct: 0 },
        { title: `ظن أحمد خالدا صادقا: تحديد الأصل`, kind: 'mcq', prompt: `ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا belongs to which category of متعدي إلى مفعولين؟`, options: [`مفعولاه مبتدأ وخبر في الأصل`, `مفعولاه ليسا مبتدأ وخبر في الأصل`, `متعدي إلى مفعول واحد`, `لازم بواسطة حرف الجر`], correct: 0 },
        { title: `ظن أحمد خالدا صادقا: تحديد المفعول الأول`, kind: 'mcq', prompt: `In ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا, which word is مفعول به أول؟`, options: [`خَالِدًا`, `صَادِقًا`, `أَحْمَدُ`, `ظَنَّ`], correct: 0 },
        { title: `أظن الساعة قائمة: الأصل`, kind: 'mcq', prompt: `In ﴿وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً﴾, what was the original مبتدأ وخبر before أَظُنُّ entered؟`, options: [`السَّاعَةُ قَائِمَةٌ`, `أَظُنُّ قَائِمَةٌ`, `السَّاعَةُ أَظُنُّ`, `There was no original مبتدأ وخبر here`], correct: 0 },
        { title: `فعل الجارحة: التعريف`, kind: 'mcq', prompt: `What does فعل الجارحة mean, and where does the name come from؟`, options: [`An outward, sensory action performed by the limbs (الجوارح)`, `A verb of inner perception or belief`, `A verb that turns one thing into another`, `A verb restricted to الأمر`], correct: 0 },
        { title: `فعل القلب: التعريف`, kind: 'mcq', prompt: `What does فعل القلب mean؟`, options: [`A verb of inner perception, knowledge, belief, or judgement`, `An outward, sensory action performed by the limbs`, `A verb of making or turning something into something else`, `A verb that never takes a مفعول به`], correct: 0 },
        { title: `فعل التحويل: التعريف`, kind: 'mcq', prompt: `What does فعل التحويل mean؟`, options: [`A verb of making or turning something into something else`, `A verb of inner perception or belief`, `An outward, sensory action performed by the limbs`, `A verb whose مفعولان are never originally مبتدأ وخبر`], correct: 0 },
        { title: `فعل الجارحة: الافتراضي غير الملقّب`, kind: 'mcq', prompt: `سَمِعَ، مَشَى، أَكَلَ، and شَمَّ are all technically أفعال الجوارح. Why does nobody bother labelling them that way؟`, options: [`فعل الجارحة is the default reading, so the label only earns its place when a verb runs both ways`, `They are not really أفعال الجوارح at all`, `They are أفعال ناقصة instead`, `They never take a فاعل`], correct: 0 },
        { title: `رأى: لماذا يُذكر اللقب`, kind: 'mcq', prompt: `Why does رأى specifically need رأى الجارحة or رأى القلبية stated explicitly؟`, options: [`Because رأى genuinely carries both a physical-seeing sense and an inner-judgement sense, so the label disambiguates which is meant`, `Because رأى never means physical seeing at all`, `Because رأى is سماعي and has no فاعل`, `Because رأى always takes three مفاعيل`], correct: 0 },
        {
          title: `تركيب: ﴿وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ﴾`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ.`,
          source: `وَهَدَيْنَاهُمَا الصِّرَاطَ المُسْتَقِيمَ`,
          words: [`وَ`, `هَدَيْنَا`, `هُمَا`, `الصِّرَاطَ المُسْتَقِيمَ`],
          labels: [`حرف عطف`, `فعل متعدي إلى مفعولين`, `مفعول به أول`, `مفعول به ثان`],
          distractors: [`فاعل ظاهر`, `مضاف إليه`],
        },
        {
          title: `تركيب: ﴿وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ﴾`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ.`,
          source: `لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ`,
          words: [`لَتَهْدِي`, `إِلَى صِرَاطٍ مُسْتَقِيمٍ`],
          labels: [`فعل مضارع (مفعوله الأول محذوف تقديره الناس)`, `جار ومجرور في معنى المفعول الثاني`],
          distractors: [`مفعول به ثان صريح`, `فاعل ظاهر`],
        },
        {
          title: `تركيب: ﴿أُولَئِكَ الَّذِينَ هَدَاهُمُ اللهُ﴾`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of هَدَاهُمُ اللهُ.`,
          source: `هَدَاهُمُ اللهُ`,
          words: [`هَدَاهُمُ`, `اللهُ`],
          labels: [`فعل ومفعوله الأول (والمفعول الثاني محذوف)`, `فاعل`],
          distractors: [`مفعول به ثان صريح`, `حال`],
        },
        {
          title: `تركيب: ﴿وَأَيْدِيَكُمْ إِلَى المَرَافِقِ﴾`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَأَيْدِيَكُمْ إِلَى المَرَافِقِ.`,
          source: `وَأَيْدِيَكُمْ إِلَى المَرَافِقِ`,
          words: [`أَيْدِيَكُمْ`, `إِلَى المَرَافِقِ`],
          labels: [`مفعول به لفعل مقدر (اغسلوا)`, `جار ومجرور متعلق بالفعل المقدر`],
          distractors: [`فاعل`, `مبتدأ`],
        },
        {
          title: `تركيب: ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا.`,
          source: `ظَنَّ أَحْمَدُ خَالِدًا صَادِقًا`,
          words: [`ظَنَّ`, `أَحْمَدُ`, `خَالِدًا`, `صَادِقًا`],
          labels: [`فعل متعدي إلى مفعولين`, `فاعل`, `مفعول به أول`, `مفعول به ثان`],
          distractors: [`مضاف إليه`, `حال`],
        },
        {
          title: `تركيب: ﴿وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً﴾`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of أَظُنُّ السَّاعَةَ قَائِمَةً.`,
          source: `أَظُنُّ السَّاعَةَ قَائِمَةً`,
          words: [`أَظُنُّ`, `السَّاعَةَ`, `قَائِمَةً`],
          labels: [`فعل متعدي إلى مفعولين وفاعله المستتر`, `مفعول به أول`, `مفعول به ثان`],
          distractors: [`فاعل ظاهر`, `حال`],
        },
      ],
    },
  ],
};

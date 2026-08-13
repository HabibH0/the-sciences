// Module 10 — حروف الجر: الباقية وأحرف القسم ورُبَّ
//
// Source: app-lessons/047-harf-al-jarr-fi.md through
// app-lessons/052-rubba-min-tabidiyya-hasha.md (الكبرى في النحو), continuing
// module-09's حروف تجر اسما واحدا survey. l1 covers 047 (في) alone; l2
// merges 048+049 (الكاف وحتى — 048 is thin on its own); l3 covers 050
// (أحرف القسم) alone; l4 covers 051 (مذ ومنذ) alone; l5 and l6 split 052
// (رُبَّ، مِن التبعيضية، حاشا) — the densest source file in this range.
// COURSE-MAP.md's own note on 052 floated a possible third lesson, but once
// read in full its material sorts cleanly into two coherent halves: l5
// covers رُبَّ's seven sub-topics (معنى، صدارة، مجرورها، ما الكافة، تخفيف،
// حذف، ومِمّا بمعناها) end to end, compressing the last three — تخفيف،
// حذف، ومِمّا — into one closing concept the way module-09's l2 grouped
// several minor روائي roles of الباء under one table+commentary concept;
// l6 covers مِن التبعيضية، حاشا، and the closing فائدة on الكاف's own
// أصلي/شبيه بالزائد classification debate. Six lessons held.
//
// Concept bodies use the lines[]/box/table/tarkeebDiagram shape established
// in module-01.js and module-09.js. Bank تركيب items use the flat
// words[]/labels[]/distractors[] schema; a chip may combine more than one
// Arabic token where module-09 already established that pattern (e.g.
// إِسْحَاقَ وَيَعْقُوبَ as a single chip). Every تركيب item and every
// worked-example concept draws only on the أمثلة app-lessons itself
// supplies. A few multi-وجه or structurally compound examples were kept as
// concept-level discussion only, not forced into a single-answer تركيب
// item, matching module-09's own discipline: ﴿قَالَتْ فَذَلِكُنَّ الَّذِي
// لُمْتُنَّنِي فِيهِ﴾ (فِيهِ's مفعول له reading turns on a pronoun with no
// separable مجرور chip); ﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾ (genuinely
// two-وجه, مفعول له or تشبيه, with the source itself saying the choice
// isn't always resolvable); ﴿وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ﴾
// (حتى here governs an اسم مؤول with أن مضمرة, not a single مجرور اسم);
// يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي الآخِرَةِ (kept as a
// concept example only — its own two في phrases and حال/خبر ambiguity make
// it better suited to prose discussion than a drag-the-label item); and
// كَانَ ﷺ مِمَّا يُحَرِّكُ شَفَتَيْهِ (مِمّا بمعنى رُبَّ has two competing
// analyses in the source itself, discussed at concept level only).
//
// تركيب counts taper honestly across the module: l1-l3 sit at 5 each
// (047's six-role table, 048/049's shorter examples, and 050's four
// particle-behaviour contrasts each supply five clean parseable
// sentences); l4 and l5 reach 6, the module's fullest, since 051's
// constructed examples and 052's رُبَّ material are both unusually rich in
// short, cleanly parsed sentences; l6 drops to 3, reflecting how thin
// 052's مِن التبعيضية/حاشا/الكاف-classification material actually is on
// its own — only three sentences in that stretch are both fully quoted and
// cleanly single-reading (العلم كالنور is a genuine two-وجه classification
// debate, not a single-answer تركيب item, so it stays a concept example).
// Bank totals follow the same discipline rather than padding to a flat 24:
// l1 24 (19 mcq + 5 تركيب), l2 24 (19 mcq + 5), l3 20 (15 mcq + 5, 050
// being the thinnest source file in the module), l4 23 (17 mcq + 6), l5 27
// (21 mcq + 6, رُبَّ alone supplying the most worked examples of any
// lesson here), and l6 17 (14 mcq + 3) — matching how module-01 and
// module-08 let their own thin lessons sit below the ~24 norm rather than
// forcing invented material to hit it.
export default {
  id: '10',
  title: 'بقية الجر',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف العامل',
  blurb: 'في through حتى, then أحرف القسم, مذ/منذ, and رُبَّ — closing the الحروف الشبيهة بالزائد with مِن التبعيضية وحاشا.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'فِي',
      subtitle: 'في — root meaning الظرفية, and every role it can carry across its مجرور',
      concepts: [
        {
          heading: 'في: المعنى الأصلي الظرفية',
          lines: [
            { html: `<bdi>فِي</bdi> is the seventh of the thirteen حروف الجر. Every role it plays across its مجرور keeps a trace of one root sense.`, list: false },
            { box: { title: 'Definition', lines: [`مَعْنَى فِي الظَّرْفِيَّةُ، وَهِيَ حُلُولُ الشَّيْءِ فِي غَيْرِهِ`] } },
            { html: `<bdi>الظرفية</bdi> pictures one thing settling inside, contained within, another — the relationship a <bdi>ظرف</bdi>, a container, has to what it holds. That single picture colors every use of في below, however far a given role drifts from a literal container.`, list: false },
          ],
          exercise: {
            prompt: `في is the seventh of the thirteen حروف الجر. What is its root meaning?`,
            kind: 'mcq',
            options: [`الظرفية — one thing settling inside another`, `الإلصاق — one thing attached to another`, `التشبيه — drawing a likeness`, `انتهاء الغاية — reaching an endpoint`],
            correct: 0,
          },
        },
        {
          heading: 'في: مفعول به، والفرق بينها وبين إلى',
          lines: [
            { html: `في ومجرورها can function as <bdi>مفعول به</bdi>, illustrated in the following آية.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَيُسَارِعُونَ فِي الْخَيْرَاتِ﴾`] } },
            { html: `"They hasten to good deeds." The same sentence could have used إلى instead: يُسَارِعُونَ إِلَى الْخَيْرَاتِ.`, list: false },
            { box: { title: 'Careful', lines: [`إِلَى الْخَيْرَاتِ تُصَوِّرُهُمْ يَتَحَرَّكُونَ مِنَ الخَارِجِ، لَمْ يَصِلُوا بَعْدُ. فِي الْخَيْرَاتِ تُصَوِّرُهُمْ دَاخِلِينَ فِيهَا بِالفِعْلِ، يُسَارِعُونَ مِنْهَا إِلَى أَعْلَاهَا`] } },
            { html: `إِلَى الْخَيْرَاتِ would picture the subjects moving toward good deeds from outside, not yet arrived. فِي الْخَيْرَاتِ instead pictures them already inside الخيرات, already doing good, hastening from there toward still more of it — the likely point of choosing في is to mark these believers as already established within good deeds, hastening only toward its highest degree.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَيُسَارِعُونَ فِي الْخَيْرَاتِ`,
                translation: `They hasten to good deeds.`,
                cells: [`يُسَارِعُونَ`, `فِي`, `الْخَيْرَاتِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل مضارع وفاعله` }, { start: 1, end: 2, role: `في ومجرورها: مفعول به` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `﴿وَيُسَارِعُونَ فِي الْخَيْرَاتِ﴾ could equally have used إِلَى الْخَيْرَاتِ. What does choosing في over إلى picture about the subjects?`,
            kind: 'mcq',
            options: [`That they are already inside الخيرات, hastening from there toward still more of it`, `That they have not yet arrived at الخيرات at all`, `That الخيرات is a place they will never reach`, `That في and إلى are simply interchangeable with no shift in picture`],
            correct: 0,
          },
        },
        {
          heading: 'في: مفعول فيه للمكان أو للزمان',
          lines: [
            { html: `في ومجرورها also stands for <bdi>مفعول فيه</bdi>, the ظرف of time or place — either meaning surfaces depending on what follows في.`, list: false },
            { box: { title: 'Example', lines: [`﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً﴾`] } },
            { html: `"Our Lord, give us good in this world and good in the Hereafter." الدُّنْيَا and الْآخِرَةِ mark المكان directly — the two settings حَسَنَة is asked for in.`, list: false },
            { box: { title: 'Example', lines: [`﴿شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ﴾`] } },
            { html: `"Ramaḍān, in which the Qur'an was sent down." Here في marks الزَّمَان instead — the time within which الإنزال took place.`, list: false },
          ],
          exercise: {
            prompt: `﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً﴾ names الدنيا and الآخرة as two مفعول فيه settings. Is that use of في مكان or زمان?`,
            kind: 'mcq',
            options: [`مكان — الدنيا والآخرة name the two settings حسنة is asked for in`, `زمان — الدنيا والآخرة name two points in time`, `Neither — the phrase carries no مفعول فيه at all`, `Both at once, indistinguishably`],
            correct: 0,
          },
        },
        {
          heading: 'في: مفعول له ومفعول معه',
          lines: [
            { html: `في ومجرورها can also give the reason behind an action, or mark who an action happens alongside.`, list: false },
            { box: { title: 'Example', lines: [`﴿قَالَتْ فَذَلِكُنَّ الَّذِي لُمْتُنَّنِي فِيهِ﴾`] } },
            { box: { title: 'Careful', lines: [`فِيهِ هُنَا تُفِيدُ التَّعْلِيلَ: "ذَلِكُنَّ الَّذِي بِسَبَبِهِ لُمْتُنَّنِي"، وَتَعْمَلُ عَمَلَ المَفْعُولِ لَهُ غَيْرِ الصَّرِيحِ`] } },
            { html: `"That is the one about whom you blamed me." The wife of عزيز مصر, addressing the women who had criticized her, points to يوسف عليه السلام: فِيهِ gives the reason for their blame, functioning as <bdi>مفعول له غير صريح</bdi>. A parallel appears in a حديث: دَخَلَتِ امْرَأَةٌ النَّارَ فِي هِرَّةٍ, "a woman entered the Fire because of a cat" — فِي هِرَّةٍ likewise gives the reason for her punishment, not its location.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَادْخُلِي فِي عِبَادِي﴾`] } },
            { html: `"Enter among My servants," addressed to النفس المطمئنة on its return to Allah. Some read في here as carrying the sense of <bdi>مَعَ</bdi> — "enter together with My servants" — so شبه الجملة functions as <bdi>مفعول معه</bdi>, the entry into Paradise pictured as happening alongside the company of the righteous, not merely into a place among them.`, list: false },
          ],
          exercise: {
            prompt: `﴿قَالَتْ فَذَلِكُنَّ الَّذِي لُمْتُنَّنِي فِيهِ﴾: فِيهِ gives the reason the speaker was blamed, not a location. What role does في ومجرورها play there?`,
            kind: 'mcq',
            options: [`مفعول له غير صريح`, `مفعول فيه للمكان`, `مفعول معه`, `مفعول به`],
            correct: 0,
          },
        },
        {
          heading: 'في للمقايسة',
          lines: [
            { html: `A further use of في marks neither مكان, زمان, نor any of the roles above.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ تَكُونُ فِي لِلْمُقَايَسَةِ، وَهِيَ الْوَاقِعَةُ بَيْنَ مَفْضُولٍ قَبْلَهَا وَفَاضِلٍ بَعْدَهَا`] } },
            { box: { title: 'Example', lines: [`﴿فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ﴾`] } },
            { html: `"The enjoyment of this life, compared to the Hereafter, is nothing." في here marks <bdi>مُقَايَسَة</bdi>, comparison — measured against الآخرة. The pattern keeps the same shape every time: <bdi>مَفْضُول</bdi>, the lesser of the two things compared, comes before في; <bdi>فَاضِل</bdi>, the greater, comes after — مَتَاعُ الدُّنْيَا, inferior, before؛ الْآخِرَة, superior, after.`, list: false },
            { html: `A حديث draws the same comparison even more starkly: measured against Allah's knowledge, all human knowledge together amounts to no more than a single drop a bird might carry off in its beak from the ocean — the ocean standing in for the immensity of what remains beyond that one drop.`, list: false },
          ],
          exercise: {
            prompt: `في للمقايسة keeps a fixed word order: مَفْضُول before في, فَاضِل after. In ﴿فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ﴾, which is the فاضل?`,
            kind: 'mcq',
            options: [`الآخرة — it comes after في, and is the greater of the two things compared`, `متاع الحياة الدنيا — it comes before في, and is the greater of the two`, `Both are مفضول, since the آية calls متاع الدنيا قليلا`, `Neither — في للمقايسة has no fixed order`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `في is the seventh of the thirteen حروف الجر. What is its root meaning?`, options: [`الظرفية — one thing settling inside another`, `الإلصاق`, `التشبيه`, `انتهاء الغاية`], correct: 0 },
        { q: `﴿وَيُسَارِعُونَ فِي الْخَيْرَاتِ﴾ chooses في over إلى. What does that choice picture about the subjects?`, options: [`That they are already inside الخيرات, hastening toward still more of it`, `That they have not yet reached الخيرات`, `That they are hastening away from الخيرات`, `Nothing — في and إلى picture the same thing here`], correct: 0 },
        { q: `﴿شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ﴾: is فِيهِ here مفعول فيه للمكان or للزمان؟`, options: [`للزمان — it names the time within which الإنزال took place`, `للمكان — it names where the Qur'an was revealed`, `Neither — فيه here carries تعليل`, `Both at once`], correct: 0 },
        { q: `﴿قَالَتْ فَذَلِكُنَّ الَّذِي لُمْتُنَّنِي فِيهِ﴾: what role does فِيهِ play, and what does it parallel in the حديث دَخَلَتِ امْرَأَةٌ النَّارَ فِي هِرَّةٍ؟`, options: [`مفعول له غير صريح — both give the reason for what happened, not its location`, `مفعول فيه للمكان — both name where an event happened`, `مفعول معه — both name who the event happened alongside`, `مفعول به — both name a direct object`], correct: 0 },
        { q: `﴿فَادْخُلِي فِي عِبَادِي﴾ is read by some as carrying the sense of مَعَ. What role does في ومجرورها play on that reading?`, options: [`مفعول معه`, `مفعول له`, `مفعول فيه للمكان`, `مفعول به`], correct: 0 },
        { q: `في للمقايسة keeps a fixed word order — مَفْضُول before في, فَاضِل after. In ﴿فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ﴾, which word is the مفضول؟`, options: [`متاع الحياة الدنيا — the lesser of the two, coming before في`, `الآخرة — the lesser of the two`, `قليل — the lesser of the two`, `Neither word is مفضول here`], correct: 0 },
      ],
      bank: [
        { title: `في: المعنى الأصلي`, kind: 'mcq', prompt: `What is the root meaning shared by every use of في?`, options: [`الظرفية — حلول الشيء في غيره`, `الإلصاق`, `المجاوزة`, `ابتداء الغاية`], correct: 0 },
        { title: `الظرفية: تعريفها`, kind: 'mcq', prompt: `الظرفية is defined as حلول الشيء في غيره. Which relationship does that picture?`, options: [`A ظرف, a container, and what it holds`, `A فعل and its فاعل`, `A مضاف and its مضاف إليه`, `A حال and صاحب الحال`], correct: 0 },
        { title: `يسارعون في الخيرات: مفعول به`, kind: 'mcq', prompt: `In ﴿وَيُسَارِعُونَ فِي الْخَيْرَاتِ﴾, what role does في ومجرورها play?`, options: [`مفعول به`, `مفعول فيه`, `مفعول له`, `حال`], correct: 0 },
        { title: `في vs إلى: الفرق التصويري`, kind: 'mcq', prompt: `يُسَارِعُونَ فِي الْخَيْرَاتِ and يُسَارِعُونَ إِلَى الْخَيْرَاتِ are both grammatically possible. What is the difference in picture between them?`, options: [`في pictures them already inside الخيرات; إلى pictures them still approaching from outside`, `في pictures a location; إلى pictures a reason`, `They picture exactly the same thing`, `إلى pictures them inside; في pictures them approaching`], correct: 0 },
        { title: `آتنا في الدنيا حسنة: مفعول فيه مكان`, kind: 'mcq', prompt: `﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً﴾ names الدنيا and الآخرة. What role does في ومجرورها play, and of which kind?`, options: [`مفعول فيه للمكان — الدنيا والآخرة are the two settings حسنة is asked for in`, `مفعول فيه للزمان`, `مفعول به`, `مفعول له`], correct: 0 },
        { title: `شهر رمضان الذي أنزل فيه القرآن: مفعول فيه زمان`, kind: 'mcq', prompt: `In ﴿شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ﴾, what does فِيهِ mark?`, options: [`الزمان — the time within which الإنزال took place`, `المكان — where the Qur'an was revealed`, `التعليل — the reason for the revelation`, `المصاحبة — who the revelation happened alongside`], correct: 0 },
        { title: `فذلكن الذي لمتنني فيه: مفعول له`, kind: 'mcq', prompt: `﴿قَالَتْ فَذَلِكُنَّ الَّذِي لُمْتُنَّنِي فِيهِ﴾: what does فِيهِ give, and what role does في ومجرورها play?`, options: [`It gives the reason for the blame — مفعول له غير صريح`, `It gives the location of the blame — مفعول فيه`, `It gives who the blame happened alongside — مفعول معه`, `It gives the direct object of the blame — مفعول به`], correct: 0 },
        { title: `دخلت امرأة النار في هرة: نفس الدور`, kind: 'mcq', prompt: `دَخَلَتِ امْرَأَةٌ النَّارَ فِي هِرَّةٍ, "a woman entered the Fire because of a cat." What role does في هرة play?`, options: [`مفعول له غير صريح — it gives the reason for her punishment, not its location`, `مفعول فيه للمكان — it names where she was punished`, `مفعول به`, `حال`], correct: 0 },
        { title: `فادخلي في عبادي: مفعول معه`, kind: 'mcq', prompt: `﴿فَادْخُلِي فِي عِبَادِي﴾, addressed to النفس المطمئنة, is read by some with في carrying the sense of مَعَ. What does that reading picture?`, options: [`The entry into Paradise happening alongside the company of the righteous, not merely into a place among them`, `A location distinct from where the righteous are`, `A reason for the entry`, `A comparison between the النفس and العباد`], correct: 0 },
        { title: `في للمقايسة: التعريف`, kind: 'mcq', prompt: `في للمقايسة falls between two things in a sentence. What is that pattern?`, options: [`مفضول (lesser) before في, فاضل (greater) after`, `فاضل before في, مفضول after`, `Two equal things with no ranking`, `A زمان before في, a مكان after`], correct: 0 },
        { title: `متاع الدنيا في الآخرة: مفضول وفاضل`, kind: 'mcq', prompt: `﴿فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ﴾: which word is فاضل, the greater of the two things compared?`, options: [`الآخرة`, `متاع الحياة الدنيا`, `قليل`, `Neither — both are مفضول`], correct: 0 },
        { title: `حديث القطرة والبحر: نفس البنية`, kind: 'mcq', prompt: `A حديث compares all human knowledge to a single drop a bird carries from the ocean, measured against Allah's knowledge. What kind of في use does this illustrate?`, options: [`في للمقايسة, the same مفضول/فاضل pattern as متاع الدنيا في الآخرة`, `في للظرفية المكانية`, `في للمصاحبة`, `في للتعليل`], correct: 0 },
        { title: `في: role or root meaning?`, kind: 'mcq', prompt: `في can function as مفعول به, مفعول فيه, مفعول له, مفعول معه, or للمقايسة, depending on context. Do these different roles replace في's single root meaning?`, options: [`No — every role still keeps a trace of الظرفية, even when it drifts far from a literal container`, `Yes — each role gives في an entirely unrelated meaning`, `No — في has no root meaning at all`, `Yes, but only مفعول فيه keeps the root meaning`], correct: 0 },
        { title: `أدوار في: التعرف عليها`, kind: 'mcq', prompt: `Which of the following is one of the roles في ومجرورها can play, according to the lesson's survey?`, options: [`مفعول معه`, `فاعل`, `مبتدأ`, `توكيد لفظي`], correct: 0 },
        { title: `في vs إلى: لماذا لا تتبادلان دائما`, kind: 'mcq', prompt: `يُسَارِعُونَ فِي الْخَيْرَاتِ and يُسَارِعُونَ إِلَى الْخَيْرَاتِ are both grammatical, yet the choice between في and إلى is not arbitrary. Why?`, options: [`Each particle pictures a different starting position for the subjects — already inside vs. still approaching`, `إلى is ungrammatical after يسارع`, `في can never be followed by a plural noun`, `The two particles are always fully interchangeable with no difference at all`], correct: 0 },
        { title: `شهر رمضان: القرآن أنزل أم أنزله؟`, kind: 'mcq', prompt: `In ﴿شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ﴾, أُنْزِلَ is مبني للمجهول. What is القرآن's role in that جملة؟`, options: [`نائب فاعل`, `مفعول به`, `فاعل`, `مبتدأ`], correct: 0 },
        { title: `مفعول له بواسطة في: نمط عام`, kind: 'mcq', prompt: `Both فِيهِ in ﴿لُمْتُنَّنِي فِيهِ﴾ and فِي هِرَّةٍ in the حديث give a reason rather than a location. What do both examples show about في?`, options: [`في can function as مفعول له غير صريح, carrying تعليل rather than ظرفية`, `في can never carry تعليل`, `في always names a location, with no exceptions`, `في only ever names زمان, never a reason`], correct: 0 },
        { title: `الحياة الدنيا وحسنة الآخرة: نوع المفعول`, kind: 'mcq', prompt: `﴿رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً﴾ repeats في twice, once for الدنيا and once for الآخرة. What do both instances mark?`, options: [`مفعول فيه للمكان, the two settings حسنة is requested in`, `مفعول فيه للزمان`, `مفعول له`, `مفعول معه`], correct: 0 },
        { title: `في: خلاصة الأدوار الستة`, kind: 'mcq', prompt: `Across its uses, في ومجرورها can stand for مفعول به, مفعول فيه (مكان أو زمان), مفعول له, مفعول معه, or المقايسة. What determines which role applies in a given sentence?`, options: [`The surrounding context and the meaning of the verb or expression في attaches to`, `The number of letters in في's مجرور`, `Whether في is written with or without تنوين`, `Whether the sentence is قرآن or حديث`], correct: 0 },
        {
          title: `تركيب: وَيُسَارِعُونَ فِي الْخَيْرَاتِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَيُسَارِعُونَ فِي الْخَيْرَاتِ.`,
          source: `وَيُسَارِعُونَ فِي الْخَيْرَاتِ`,
          words: [`يُسَارِعُونَ`, `فِي الْخَيْرَاتِ`],
          labels: [`فعل مضارع وفاعله`, `في ومجرورها: مفعول به`],
          distractors: [`مفعول فيه`, `حال`],
        },
        {
          title: `تركيب: آتِنَا فِي الدُّنْيَا حَسَنَةً`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of آتِنَا فِي الدُّنْيَا حَسَنَةً.`,
          source: `آتِنَا فِي الدُّنْيَا حَسَنَةً`,
          words: [`آتِنَا`, `فِي الدُّنْيَا`, `حَسَنَةً`],
          labels: [`فعل دعاء وفاعله المستتر ومفعوله الأول`, `في ومجرورها: مفعول فيه للمكان`, `مفعول به ثانٍ`],
          distractors: [`مفعول له`, `تمييز`],
        },
        {
          title: `تركيب: شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ.`,
          source: `شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ`,
          words: [`شَهْرُ رَمَضَانَ`, `الَّذِي`, `أُنْزِلَ فِيهِ`, `الْقُرْآنُ`],
          labels: [`مبتدأ ومضاف إليه`, `اسم موصول: نعت`, `فعل ماضٍ مبني للمجهول والجار والمجرور: مفعول فيه للزمان`, `نائب فاعل`],
          distractors: [`مفعول به`, `خبر`],
        },
        {
          title: `تركيب: فَادْخُلِي فِي عِبَادِي`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَادْخُلِي فِي عِبَادِي.`,
          source: `فَادْخُلِي فِي عِبَادِي`,
          words: [`ادْخُلِي`, `فِي عِبَادِي`],
          labels: [`فعل أمر وفاعله المستتر`, `في ومجرورها: مفعول معه`],
          distractors: [`مفعول فيه`, `مفعول له`],
        },
        {
          title: `تركيب: فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ.`,
          source: `فَمَا مَتَاعُ الْحَيَاةِ الدُّنْيَا فِي الْآخِرَةِ إِلَّا قَلِيلٌ`,
          words: [`مَا`, `مَتَاعُ الْحَيَاةِ الدُّنْيَا`, `فِي الْآخِرَةِ`, `إِلَّا قَلِيلٌ`],
          labels: [`حرف نفي`, `مبتدأ ومضاف إليه ونعت`, `في ومجرورها: للمقايسة`, `أداة حصر وخبر`],
          distractors: [`مفعول به`, `حال`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'الكاف وحتى',
      subtitle: 'الكاف — its one solitary role — and حتى — rank-extremes and its stricter endpoint condition against إلى',
      concepts: [
        {
          heading: 'الكاف: معناها التشبيه، ومفعول مطلق',
          lines: [
            { html: `<bdi>الْكَاف</bdi> is the eighth of the thirteen حروف الجر. Its root meaning is <bdi>التشبيه</bdi>, drawing a likeness between one thing and another.`, list: false },
            { box: { title: 'Definition', lines: [`مَعْنَى الْكَافِ التَّشْبِيهُ`] } },
            { box: { title: 'Example', lines: [`﴿رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾`] } },
            { html: `"My Lord, have mercy upon them as they raised me when I was small." مفعول مطلق can serve several purposes, one being <bdi>بيان النوع</bdi>, specifying the manner of an action. الكاف, carrying تشبيه, does exactly this: كَمَا رَبَّيَانِي صَغِيرًا describes the manner of the mercy asked for — mercy of the same kind and measure as the mercy they showed in raising him. الكاف ومجرورها functions here as <bdi>مفعول مطلق غير صريح للنوع</bdi>, standing in for the fuller رَبِّ ارْحَمْهُمَا رَحْمَتَهُمَا إِيَّايَ صَغِيرًا.`, list: false },
          ],
          exercise: {
            prompt: `﴿رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾ can be paraphrased as رَبِّ ارْحَمْهُمَا رَحْمَتَهُمَا إِيَّايَ صَغِيرًا. What role does كَمَا رَبَّيَانِي صَغِيرًا play?`,
            kind: 'mcq',
            options: [`مفعول مطلق غير صريح للنوع, describing the manner of the mercy asked for`, `مفعول به, a second direct object`, `حال, describing the state of the parents`, `مفعول فيه للزمان`],
            correct: 0,
          },
        },
        {
          heading: 'الكاف: مفعول له أو تشبيه؟',
          lines: [
            { box: { title: 'Example', lines: [`﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾`] } },
            { html: `"And remember Him, as He has guided you."`, list: false },
            { box: { title: 'Careful', lines: [`وَيَجُوزُ أَنْ تَكُونَ الْكَافُ لِلتَّشْبِيهِ`] } },
            { html: `Two readings compete here. Read as <bdi>مفعول له</bdi>, كَمَا هَدَاكُمْ gives the reason for the ذكر — remember Him because He has guided you, هداية as the cause prompting remembrance. Read as <bdi>كاف تشبيه</bdi> instead, carrying الكاف's ordinary root sense, the same wording describes the manner of the ذكر — remember Him in a way that mirrors His guidance of you. Both readings sit close together in outcome, and telling which a given كَمَا intends is not always obvious without deeper بلاغة work.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾ admits two competing readings for كَمَا هَدَاكُمْ. What are they?`,
            kind: 'mcq',
            options: [`مفعول له, giving the reason for the remembrance, or كاف تشبيه, describing its manner`, `مفعول به فقط, with no second reading`, `حال فقط, with no second reading`, `فاعل, or مبتدأ`],
            correct: 0,
          },
        },
        {
          heading: 'الكاف وحتى: لا يكون مجرورهما إلا اسما ظاهرا',
          lines: [
            { html: `Both الكاف and حتى share a restriction on what can follow them.`, list: false },
            { box: { title: 'Rule', lines: [`لَا يَكُونُ مَجْرُورُ الْكَافِ إِلَّا اسْمًا ظَاهِرًا`] } },
            { html: `Unlike every حرف جر met so far, الكاف never attaches to a ضمير. There is no كَي, كَهُ, or كَنَا — such forms simply do not occur. Where تشبيه is needed with a pronoun, <bdi>مِثْل</bdi> takes over instead: مِثْلِي, مِثْلُهُ, and so on. الكاف itself always takes an اسم ظاهر, an explicit noun, never a pronoun.`, list: false },
            { box: { title: 'Rule', lines: [`لَا يَكُونُ مَجْرُورُ حَتَّى إِلَّا اسْمًا ظَاهِرًا`] } },
            { html: `حتى carries the same restriction — there is no حَتَّاهُ, only an اسم ظاهر follows it. A few poetic lines seem to break this, but these are treated as <bdi>شاذّ</bdi>, irregular exceptions, not real counter-examples.`, list: false },
          ],
          exercise: {
            prompt: `الكاف never attaches to a pronoun. Where تشبيه is needed with a pronoun instead, which word takes over?`,
            kind: 'mcq',
            options: [`مِثْل — مِثْلِي، مِثْلُهُ، وما شابه`, `نَفْس`, `ذَات`, `عَيْن`],
            correct: 0,
          },
        },
        {
          heading: 'حتى: معناها انتهاء الغاية، والتعظيم والتحقير مع المفرد',
          lines: [
            { html: `<bdi>حَتَّى</bdi> is the ninth of the thirteen حروف الجر. Its root meaning is <bdi>انتهاء الغاية</bdi> — the same root sense already met with إلى, the ending point of the مُغَيَّا.`, list: false },
            { box: { title: 'Definition', lines: [`وَهِيَ لِانْتِهَاءِ الْغَايَةِ`] } },
            { box: { title: 'Rule', lines: [`إِذَا كَانَ مَجْرُورُهَا مُفْرَدًا غَيْرَ زَمَانٍ وَلَا مَكَانٍ يَكُونُ مَجْرُورُهَا غَايَةً فِي الرُّتْبَةِ`] } },
            { html: `When a single word — not itself a place or a time — follows حتى, it marks the outer edge of a scale of rank, at either its top or its bottom.`, list: false },
            { box: { title: 'Example', lines: [`مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءِ`] } },
            { html: `"People have died — even the prophets." الْأَنْبِيَاء sits at the very top of the scale — if even prophets could not escape death, no one can. This use is <bdi>لِلتَّعْظِيمِ</bdi>, marking the highest extreme.`, list: false },
            { box: { title: 'Example', lines: [`يَرْزُقُ اللَّهُ حَتَّى الظَّالِمِينَ`] } },
            { html: `"Allah provides for everyone — even the wrongdoers." الظَّالِمِينَ sits at the opposite end — if even wrongdoers receive Allah's provision, everyone does. This use is <bdi>لِلتَّحْقِيرِ</bdi>, marking the lowest extreme.`, list: false },
          ],
          exercise: {
            prompt: `مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءِ marks the top of a scale of rank; يَرْزُقُ اللَّهُ حَتَّى الظَّالِمِينَ marks the bottom. What are these two uses called respectively?`,
            kind: 'mcq',
            options: [`لِلتَّعْظِيمِ، ثم لِلتَّحْقِيرِ`, `لِلتَّحْقِيرِ، ثم لِلتَّعْظِيمِ`, `Both لِلتَّعْظِيمِ`, `Both لِلتَّحْقِيرِ`],
            correct: 0,
          },
        },
        {
          heading: 'حتى: أدوار أخرى — مفعول فيه ومفعول له',
          lines: [
            { table: { title: 'أدوار حتى ومجرورها', headers: ['Role', 'Example', 'Translation'], rows: [
              [`مفعول فيه، مكان`, `سِرْنَا حَتَّى مَكَّةَ`, `we traveled until Mecca`],
              [`مفعول فيه، زمان`, `﴿هِيَ حَتَّى مَطْلَعِ الْفَجْرِ﴾`, `it is [peace] until the rising of dawn`],
              [`مفعول له`, `﴿وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ﴾`, `fight them until there is no more fitnah`],
            ] } },
            { html: `﴿وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ﴾ gives the objective of the fighting, not merely its endpoint in time — the reason war is waged: to remove فِتْنَة, corruption, from the land. Read this way, حَتَّى ومجرورها functions as <bdi>مفعول له غير صريح</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ﴾ names the objective of the fighting, not just its endpoint in time. What role does حَتَّى ومجرورها play here?`,
            kind: 'mcq',
            options: [`مفعول له غير صريح`, `مفعول فيه للزمان`, `مفعول فيه للمكان`, `مفعول به`],
            correct: 0,
          },
        },
        {
          heading: 'الفرق بين حتى وإلى',
          lines: [
            { box: { title: 'Rule', lines: [`لَا يَكُونُ مَا بَعْدَ حَتَّى إِلَّا مَا كَانَ آخِرًا لِمَا قَبْلَهَا، أَوْ مُتَّصِلًا بِآخِرِهِ`] } },
            { html: `إِلَى is loose about what follows it — almost any endpoint works. حَتَّى is far stricter: what follows it must be either the actual last part of what came before, or something directly adjoining that last part.`, list: false },
            { box: { title: 'Example', lines: [`قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ`] } },
            { html: `"I stood in prayer through the night, until its very end." آخِرِهِ is literally the last part of اللَّيْل — satisfying حتى's requirement directly.`, list: false },
            { box: { title: 'Example', lines: [`قُمْتُ اللَّيْلَ حَتَّى الصَّبَاحِ`] } },
            { html: `"I stood in prayer through the night, until morning." الصَّبَاح is not itself part of اللَّيْل, but it is <bdi>مُتَّصِل بِآخِرِهِ</bdi>, adjoining the night's last moment directly, picking up exactly where the night ends. This also satisfies the requirement.`, list: false },
            { box: { title: 'Careful', lines: [`قُمْتُ اللَّيْلَ حَتَّى نِصْفِهِ لَا يَصِحُّ عَلَى هَذَا الشَّرْطِ`] } },
            { html: `قُمْتُ اللَّيْلَ حَتَّى نِصْفِهِ, "I stood in prayer through the night, until its half," does not work the same way. نِصْفُهُ, the halfway point, is neither the last part of اللَّيْل nor connected to its last part — it falls squarely in the middle. حَتَّى demands the true endpoint, or what directly continues from it; even a substantial midpoint like "half" falls short of that requirement.`, list: false },
          ],
          exercise: {
            prompt: `قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ and قُمْتُ اللَّيْلَ حَتَّى الصَّبَاحِ both work, but قُمْتُ اللَّيْلَ حَتَّى نِصْفِهِ does not. Why does نِصْفِهِ fail حتى's condition?`,
            kind: 'mcq',
            options: [`نصفه falls in the middle of الليل — neither its true last part nor something adjoining that last part`, `نصفه is مذكر while الليل requires مؤنث`, `نصفه cannot take تنوين`, `حتى can never be followed by a مضاف إليه`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الكاف is the eighth of the thirteen حروف الجر. What is its root meaning?`, options: [`التشبيه`, `الظرفية`, `انتهاء الغاية`, `المجاوزة`], correct: 0 },
        { q: `﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾ admits two competing readings for كَمَا هَدَاكُمْ. What are they?`, options: [`مفعول له, or كاف تشبيه`, `مفعول به, or حال فقط`, `فاعل, or مبتدأ`, `مفعول فيه, or توكيد`], correct: 0 },
        { q: `الكاف never attaches to a pronoun. Which word takes over where تشبيه is needed with a pronoun?`, options: [`مِثْل`, `ذَات`, `نَفْس`, `عَيْن`], correct: 0 },
        { q: `مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءِ marks the top of a scale of rank. What is that use of حتى called?`, options: [`لِلتَّعْظِيمِ`, `لِلتَّحْقِيرِ`, `لِلظَّرْفِيَّةِ`, `لِلتَّشْبِيهِ`], correct: 0 },
        { q: `﴿وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ﴾ names the objective of the fighting. What role does حَتَّى ومجرورها play?`, options: [`مفعول له غير صريح`, `مفعول فيه للمكان`, `مفعول به`, `حال`], correct: 0 },
        { q: `قُمْتُ اللَّيْلَ حَتَّى نِصْفِهِ fails حتى's condition on what follows it. Why?`, options: [`نصفه falls in the middle of الليل, neither its true endpoint nor adjoining it`, `نصفه is معرفة while حتى requires نكرة`, `الليل cannot be مفعول فيه`, `حتى never governs a مضاف إليه`], correct: 0 },
      ],
      bank: [
        { title: `الكاف: المعنى الأصلي`, kind: 'mcq', prompt: `What is the root meaning of الكاف as a حرف جر?`, options: [`التشبيه`, `الإلصاق`, `الظرفية`, `انتهاء الغاية`], correct: 0 },
        { title: `رب ارحمهما كما ربياني صغيرا: مفعول مطلق`, kind: 'mcq', prompt: `In ﴿رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾, what role does الكاف ومجرورها play?`, options: [`مفعول مطلق غير صريح للنوع`, `مفعول به`, `حال`, `مفعول فيه`], correct: 0 },
        { title: `بيان النوع: ما تفيده`, kind: 'mcq', prompt: `مفعول مطلق can express بيان النوع, the manner of an action. What does كَمَا رَبَّيَانِي صَغِيرًا specify in ﴿رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾?`, options: [`The manner and measure of the mercy asked for`, `The location of the mercy`, `The time of the mercy`, `The person who shows the mercy`], correct: 0 },
        { title: `واذكروه كما هداكم: الوجهان`, kind: 'mcq', prompt: `﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾ can be read two ways. What are they?`, options: [`مفعول له, giving the reason for remembrance, or كاف تشبيه, describing its manner`, `فاعل, or مبتدأ`, `مفعول به, or حال فقط`, `توكيد, or بدل`], correct: 0 },
        { title: `تحديد الوجه المقصود`, kind: 'mcq', prompt: `Deciding whether كَمَا in ﴿وَاذْكُرُوهُ كَمَا هَدَاكُمْ﴾ is مفعول له or كاف تشبيه is not always obvious. What kind of analysis does the lesson say is needed?`, options: [`بلاغة work — the surface translation barely shifts between the two readings`, `No analysis is needed; the two readings are simply the same thing`, `Only a poetic meter check`, `Only counting the letters of الكاف`], correct: 0 },
        { title: `الكاف: مجرورها اسم ظاهر فقط`, kind: 'mcq', prompt: `Which of the following pronoun-attached forms of الكاف actually occurs in Arabic — كَي، كَهُ، or كَنَا؟`, options: [`None of them — الكاف never attaches to a pronoun at all`, `كَي only`, `كَهُ only`, `All three occur freely`], correct: 0 },
        { title: `مثل: بديل الكاف مع الضمير`, kind: 'mcq', prompt: `Where تشبيه is needed with a pronoun rather than an اسم ظاهر, what word is used instead of الكاف?`, options: [`مِثْل — مثلي، مثله`, `شَبَه`, `نَظِير`, `عَيْن`], correct: 0 },
        { title: `حتى: المعنى الأصلي`, kind: 'mcq', prompt: `What is the root meaning of حتى as a حرف جر?`, options: [`انتهاء الغاية`, `التشبيه`, `الإلصاق`, `الظرفية`], correct: 0 },
        { title: `مات الناس حتى الأنبياء: للتعظيم`, kind: 'mcq', prompt: `مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءِ names الأنبياء as an extreme case. Which extreme, and what is that use called?`, options: [`The highest extreme — لِلتَّعْظِيمِ`, `The lowest extreme — لِلتَّحْقِيرِ`, `Neither extreme — it names a مكان`, `Neither extreme — it names a زمان`], correct: 0 },
        { title: `يرزق الله حتى الظالمين: للتحقير`, kind: 'mcq', prompt: `يَرْزُقُ اللَّهُ حَتَّى الظَّالِمِينَ names الظالمين as an extreme case. Which extreme, and what is that use called?`, options: [`The lowest extreme — لِلتَّحْقِيرِ`, `The highest extreme — لِلتَّعْظِيمِ`, `A مكان, not an extreme of rank`, `A زمان, not an extreme of rank`], correct: 0 },
        { title: `شرط التعظيم والتحقير: مفرد لا زمان ولا مكان`, kind: 'mcq', prompt: `The rule إِذَا كَانَ مَجْرُورُهَا مُفْرَدًا غَيْرَ زَمَانٍ وَلَا مَكَانٍ يَكُونُ مَجْرُورُهَا غَايَةً فِي الرُّتْبَةِ applies to حتى's مجرور under what condition?`, options: [`When it is a single word, not itself a place or a time`, `Only when it is معرفة`, `Only when it is a pronoun`, `Only when it follows a فعل مضارع`], correct: 0 },
        { title: `سرنا حتى مكة: مفعول فيه مكان`, kind: 'mcq', prompt: `In سِرْنَا حَتَّى مَكَّةَ, what role does حَتَّى ومجرورها play?`, options: [`مفعول فيه للمكان`, `مفعول فيه للزمان`, `مفعول له`, `مفعول به`], correct: 0 },
        { title: `هي حتى مطلع الفجر: مفعول فيه زمان`, kind: 'mcq', prompt: `In ﴿هِيَ حَتَّى مَطْلَعِ الْفَجْرِ﴾, what role does حَتَّى ومجرورها play?`, options: [`مفعول فيه للزمان`, `مفعول فيه للمكان`, `مفعول له`, `حال`], correct: 0 },
        { title: `وقاتلوهم حتى لا تكون فتنة: الهدف لا مجرد الوقت`, kind: 'mcq', prompt: `﴿وَقَاتِلُوهُمْ حَتَّى لَا تَكُونَ فِتْنَةٌ﴾ is read as giving the objective of the fighting. What role does that give حَتَّى ومجرورها?`, options: [`مفعول له غير صريح`, `مفعول فيه للزمان فقط`, `مفعول به`, `توكيد`], correct: 0 },
        { title: `الكاف وحتى: قيد مشترك`, kind: 'mcq', prompt: `Both الكاف and حتى share one restriction on what follows them. What is it?`, options: [`Neither ever attaches to a pronoun — each requires an اسم ظاهر`, `Neither can be preceded by a فعل`, `Neither can govern a معرفة`, `Neither ever appears in the Qur'an`], correct: 0 },
        { title: `الشذوذ الشعري بعد حتى`, kind: 'mcq', prompt: `A few poetic lines seem to attach حتى to a pronoun. How are these treated?`, options: [`As شاذّ, irregular exceptions, not real counter-examples to the rule`, `As proof the rule is wrong`, `As the standard form, more common than اسم ظاهر`, `As a separate particle unrelated to حتى`], correct: 0 },
        { title: `حتى الصارمة: الفرق عن إلى`, kind: 'mcq', prompt: `How does حتى's condition on what follows it compare to إلى's?`, options: [`حتى is stricter — its مجرور must be the true endpoint of what came before, or adjoin it directly; إلى is loose about any endpoint`, `إلى is stricter than حتى`, `Both particles have identical, equally loose conditions`, `Neither particle places any condition on its مجرور`], correct: 0 },
        { title: `قمت الليل حتى آخره: يحقق الشرط`, kind: 'mcq', prompt: `قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ satisfies حتى's endpoint condition. How?`, options: [`آخره is literally the last part of الليل`, `آخره is a زمان مبهم unrelated to الليل`, `آخره is المكان, not الزمان`, `The sentence does not actually satisfy the condition`], correct: 0 },
        { title: `قمت الليل حتى الصباح: اتصال بالآخر`, kind: 'mcq', prompt: `قُمْتُ اللَّيْلَ حَتَّى الصَّبَاحِ satisfies حتى's condition even though الصباح is not literally part of الليل. Why?`, options: [`الصباح is مُتَّصِل بآخر الليل, picking up exactly where the night ends`, `الصباح is the exact middle of الليل`, `الصباح is a صفة of الليل`, `The sentence does not actually satisfy the condition`], correct: 0 },
        {
          title: `تركيب: رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا.`,
          source: `رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا`,
          words: [`رَبِّ`, `ارْحَمْهُمَا`, `كَمَا رَبَّيَانِي`, `صَغِيرًا`],
          labels: [`منادى مضاف محذوف الأداة`, `فعل دعاء وفاعله المستتر ومفعوله`, `الكاف ومجرورها المؤول: مفعول مطلق للنوع`, `حال`],
          distractors: [`مفعول له`, `تمييز`],
        },
        {
          title: `تركيب: مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءِ.`,
          source: `مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءِ`,
          words: [`مَاتَ`, `النَّاسُ`, `حَتَّى`, `الْأَنْبِيَاءِ`],
          labels: [`فعل ماضٍ`, `فاعل`, `حرف جر للتعظيم`, `مجرور بحتى`],
          distractors: [`مفعول به`, `بدل مرفوع`],
        },
        {
          title: `تركيب: يَرْزُقُ اللَّهُ حَتَّى الظَّالِمِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of يَرْزُقُ اللَّهُ حَتَّى الظَّالِمِينَ.`,
          source: `يَرْزُقُ اللَّهُ حَتَّى الظَّالِمِينَ`,
          words: [`يَرْزُقُ`, `اللَّهُ`, `حَتَّى`, `الظَّالِمِينَ`],
          labels: [`فعل مضارع`, `فاعل`, `حرف جر للتحقير`, `مجرور بحتى`],
          distractors: [`مفعول به`, `بدل منصوب`],
        },
        {
          title: `تركيب: سِرْنَا حَتَّى مَكَّةَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of سِرْنَا حَتَّى مَكَّةَ.`,
          source: `سِرْنَا حَتَّى مَكَّةَ`,
          words: [`سِرْنَا`, `حَتَّى مَكَّةَ`],
          labels: [`فعل ماضٍ وفاعله`, `حتى ومجرورها: مفعول فيه للمكان`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ.`,
          source: `قُمْتُ اللَّيْلَ حَتَّى آخِرِهِ`,
          words: [`قُمْتُ`, `اللَّيْلَ`, `حَتَّى آخِرِهِ`],
          labels: [`فعل ماضٍ وفاعله`, `مفعول فيه للزمان`, `حتى ومجرورها: غاية الليل`],
          distractors: [`مفعول به`, `تمييز`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أحرف القسم',
      subtitle: 'واو، تاء، وباء — the three oath particles, and how sharply their conditions diverge',
      concepts: [
        {
          heading: 'أحرف القسم الثلاثة',
          lines: [
            { html: `Three of the thirteen حروف الجر are reserved for <bdi>القَسَم</bdi>, the oath: <bdi>وَاو الْقَسَم</bdi>, the tenth; <bdi>تَاء الْقَسَم</bdi>, the eleventh; and <bdi>بَاء الْقَسَم</bdi>, a special oath-use of الباء already met earlier as the very first of the thirteen. All three introduce what is being sworn by, but differ sharply in what they attach to and what can surround them.`, list: false },
          ],
          exercise: {
            prompt: `Three حروف جر are reserved for القسم — واو, تاء, and باء. Which of the three is a repurposed oath-use of a particle already met as the first of the thirteen حروف الجر?`,
            kind: 'mcq',
            options: [`باء القسم`, `واو القسم`, `تاء القسم`, `None — all three are entirely new particles`],
            correct: 0,
          },
        },
        {
          heading: 'واو القسم',
          lines: [
            { box: { title: 'Example', lines: [`﴿وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ﴾`] } },
            { html: `"By the passage of time, indeed mankind is in loss."`, list: false },
            { box: { title: 'Rule', lines: [`لَا يَكُونُ مَجْرُورُهَا إِلَّا اسْمًا ظَاهِرًا`] } },
            { html: `وَاو الْقَسَم, like الكاف and حَتَّى before it, never attaches to a pronoun — no وَهُ, وَهِيَ, وِيهِ, only an اسم ظاهر.`, list: false },
          ],
          exercise: {
            prompt: `Like الكاف and حتى, واو القسم never attaches to a pronoun. What must always follow it instead?`,
            kind: 'mcq',
            options: [`اسم ظاهر`, `ضمير متصل`, `ضمير منفصل`, `جملة فعلية فقط`],
            correct: 0,
          },
        },
        {
          heading: 'تاء القسم',
          lines: [
            { box: { title: 'Example', lines: [`﴿تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾`] } },
            { html: `"By Allah, you will not cease remembering Yūsuf."`, list: false },
            { box: { title: 'Rule', lines: [`تَاءُ الْقَسَمِ مُخْتَصَّةٌ بِلَفْظِ الْجَلَالَةِ`] } },
            { html: `تَاء الْقَسَم is even more restricted than واو — it attaches only to <bdi>لَفْظ الْجَلَالَة</bdi>, the name اللَّه itself, never to any other divine name. تَاللَّهِ works; تَالرَّحْمَنِ or تَالْعَصْرِ do not, even though الرحمن and العصر can each take واو الْقَسَم freely.`, list: false },
          ],
          exercise: {
            prompt: `الرحمن and العصر can each take واو القسم freely. Can they also take تاء القسم?`,
            kind: 'mcq',
            options: [`No — تاء القسم is restricted to لفظ الجلالة اللّٰه alone`, `Yes — تاء القسم works with any divine name`, `Yes, but only العصر, never الرحمن`, `Only if preceded by واو`],
            correct: 0,
          },
        },
        {
          heading: 'المفعول به لفعل محذوف: واو وتاء القسم',
          lines: [
            { box: { title: 'Rule', lines: [`تَكُونُ وَاوُ الْقَسَمِ وَتَاءُ الْقَسَمِ مَعَ مَجْرُورَيْهِمَا بِمَعْنَى الْمَفْعُولِ بِهِ لِفِعْلٍ مَحْذُوفٍ، تَقْدِيرُهُ أُقْسِمُ`] } },
            { html: `Both وَاللَّهِ and تَاللَّهِ carry a dropped verb behind them — the full sentence would be أُقْسِمُ بِاللَّهِ, "I swear by Allah" — but أُقْسِمُ is never actually spoken alongside either particle. وَلَفْظِ الجَلالَةِ and تَلَفْظِ الجَلالَةِ each function as مفعول به of that unspoken فعل.`, list: false },
            { box: { title: 'Rule', lines: [`وَلَا يُذْكَرُ فِعْلُ الْقَسَمِ بِالتَّاءِ أَوِ الْوَاوِ`] } },
            { html: `This omission is not optional — the verb of oath is never spoken with either particle. One says وَلَفْظِ الجَلالَةِ or تَلَفْظِ الجَلالَةِ, never أُقْسِمُ وَلَفْظِ الجَلالَةِ.`, list: false },
          ],
          exercise: {
            prompt: `وَلَفْظِ الجَلالَةِ and تَلَفْظِ الجَلالَةِ each carry a dropped verb أُقْسِمُ behind them. Can a speaker say أُقْسِمُ وَلَفْظِ الجَلالَةِ, stating the verb alongside واو القسم?`,
            kind: 'mcq',
            options: [`No — أقسم is never spoken alongside either واو or تاء القسم`, `Yes — stating أقسم alongside واو is the standard form`, `Yes, but only in poetry`, `Only alongside تاء, never واو`],
            correct: 0,
          },
        },
        {
          heading: 'باء القسم: أصل أحرف القسم وخصائصها',
          lines: [
            { html: `الباء, already met as the first of the thirteen حروف الجر, has an added role here — it too introduces القسم, and of the three particles capable of this, it is treated as the <bdi>أصل</bdi>, the original, from which the other two derive.`, list: false },
            { box: { title: 'Rule', lines: [`تَأْتِي الْبَاءُ لِلْقَسَمِ، وَهِيَ أَصْلُ أَحْرُفِ الْقَسَمِ`] } },
            { table: { title: 'الفروق بين أحرف القسم الثلاثة', headers: ['Particle', 'What it governs', 'The verb أُقْسِمُ'], rows: [
              [`بَاء`, `noun or pronoun`, `may be stated or dropped`],
              [`وَاو`, `noun only`, `always dropped`],
              [`تَاء`, `noun only, restricted to اللَّه`, `always dropped`],
            ] } },
            { box: { title: 'Example', lines: [`﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾`] } },
            { html: `"I swear by the Day of Resurrection." Here أُقْسِمُ is stated outright alongside الباء.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ﴾`] } },
            { html: `"By Your might, I will surely mislead them all." Here إبليس swears بِعِزَّتِكَ with أُقْسِمُ left unspoken, exactly as وَلَفْظِ الجَلالَةِ or تَلَفْظِ الجَلالَةِ would require — showing that even where الباء could carry a stated verb, it does not have to.`, list: false },
            { box: { title: 'Rule', lines: [`وَتَدْخُلُ بَاءُ الْقَسَمِ عَلَى الظَّاهِرِ وَعَلَى الْمُضْمَرِ، نَحْوُ: بِكَ لَأَفْعَلَنَّ`] } },
            { html: `Unlike واو and تاء, باء القسم attaches to a pronoun as freely as to a noun — بِكَ لَأَفْعَلَنَّ, "by you, I will surely do [it]." Neither واو nor تاء can do this at all; both are restricted entirely to an اسم ظاهر.`, list: false },
          ],
          exercise: {
            prompt: `بِكَ لَأَفْعَلَنَّ has باء القسم attaching to a pronoun. Could واو أو تاء القسم do the same?`,
            kind: 'mcq',
            options: [`No — واو and تاء are both restricted entirely to an اسم ظاهر; only الباء attaches to a pronoun`, `Yes — all three particles attach to pronouns equally`, `Only تاء can attach to a pronoun`, `Only واو can attach to a pronoun`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the three حروف القسم is a repurposed oath-use of a particle already met as the first of the thirteen حروف الجر?`, options: [`باء القسم`, `واو القسم`, `تاء القسم`, `None of them`], correct: 0 },
        { q: `واو القسم never attaches to a pronoun. What must always follow it?`, options: [`اسم ظاهر`, `ضمير متصل`, `ضمير منفصل`, `فعل ماضٍ`], correct: 0 },
        { q: `تاء القسم is more restricted than واو القسم. What is it restricted to?`, options: [`لفظ الجلالة اللّٰه alone`, `Any of Allah's names`, `Any اسم معرفة`, `Any اسم ظاهر`], correct: 0 },
        { q: `وَلَفْظِ الجَلالَةِ and تَلَفْظِ الجَلالَةِ both carry a dropped verb أُقْسِمُ. Is stating أقسم alongside either particle ever acceptable?`, options: [`No — أقسم is never spoken alongside واو or تاء القسم`, `Yes, it is the standard form`, `Only alongside واو`, `Only alongside تاء`], correct: 0 },
        { q: `Of the three particles القسم — باء, واو, تاء — which one alone can attach to a pronoun as freely as to a noun?`, options: [`باء`, `واو`, `تاء`, `None of them`], correct: 0 },
        { q: `﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾ states أُقْسِمُ alongside الباء. What does this show about باء القسم compared to واو and تاء?`, options: [`Unlike واو and تاء, where أقسم is always dropped, الباء allows it to be stated or dropped`, `الباء never allows أقسم to be stated`, `الباء and واو behave identically here`, `Stating أقسم is required with الباء, never optional`], correct: 0 },
      ],
      bank: [
        { title: `أحرف القسم: عددها وترتيبها`, kind: 'mcq', prompt: `Three particles are reserved for القسم among the thirteen حروف الجر. What are they?`, options: [`واو، تاء، وباء`, `واو، كاف، وحتى`, `من، إلى، وعن`, `لام، باء، وكاف`], correct: 0 },
        { title: `والعصر: واو القسم`, kind: 'mcq', prompt: `﴿وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ﴾ opens with الواو. What role does that واو play?`, options: [`واو القسم`, `واو العطف`, `واو الحال`, `واو الاستئناف`], correct: 0 },
        { title: `واو القسم: القيد على مجرورها`, kind: 'mcq', prompt: `Can واو القسم attach to a pronoun, as in a form like وَهُ?`, options: [`No — واو القسم never attaches to a pronoun, only an اسم ظاهر`, `Yes — وَهُ is a standard form`, `Yes, but only in poetry`, `Only with لفظ الجلالة`], correct: 0 },
        { title: `تالله تفتأ تذكر يوسف: تاء القسم`, kind: 'mcq', prompt: `﴿تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ opens with تَا. What role does it play?`, options: [`تاء القسم`, `تاء التأنيث`, `تاء الفاعل`, `تاء الافتعال`], correct: 0 },
        { title: `تالرحمن: هل تصح؟`, kind: 'mcq', prompt: `تَلَفْظِ الجَلالَةِ is valid Arabic. Is تَالرَّحْمَنِ equally valid?`, options: [`No — تاء القسم is restricted to لفظ الجلالة اللّٰه specifically, not any divine name`, `Yes — both are equally valid`, `Yes, but only in formal registers`, `Neither form is valid`], correct: 0 },
        { title: `تالعصر: هل تصح؟`, kind: 'mcq', prompt: `واو القسم can attach to العصر, giving وَالْعَصْرِ. Can تاء القسم do the same, giving تَالْعَصْرِ؟`, options: [`No — تاء القسم attaches only to لفظ الجلالة`, `Yes — تاء القسم is as flexible as واو here`, `Only if العصر is مرفوع`, `Only in poetry`], correct: 0 },
        { title: `المفعول به لفعل محذوف: التقدير`, kind: 'mcq', prompt: `وَلَفْظِ الجَلالَةِ and تَلَفْظِ الجَلالَةِ each carry a dropped verb. What is that verb, and what role do وَلَفْظِ الجَلالَةِ/تَلَفْظِ الجَلالَةِ play for it?`, options: [`أُقْسِمُ — وَلَفْظِ الجَلالَةِ/تَلَفْظِ الجَلالَةِ function as its مفعول به`, `أُؤَكِّدُ — they function as its فاعل`, `أَحْلِفُ — they function as its مبتدأ`, `No verb is implied at all`], correct: 0 },
        { title: `لا يذكر فعل القسم: القيد`, kind: 'mcq', prompt: `Is it ever acceptable to say أُقْسِمُ وَاللَّهِ, stating the verb of oath alongside واو القسم?`, options: [`No — the verb of oath is never spoken with either واو or تاء القسم`, `Yes — this is the more formal form`, `Yes, but only in Qur'anic Arabic`, `Only when swearing by لفظ الجلالة`], correct: 0 },
        { title: `باء القسم: الأصل`, kind: 'mcq', prompt: `Of the three particles القسم, which is treated as the أصل that the other two derive from?`, options: [`باء القسم`, `واو القسم`, `تاء القسم`, `None — all three are equally original`], correct: 0 },
        { title: `الفرق بين باء وواو/تاء: ما تجره`, kind: 'mcq', prompt: `واو and تاء القسم each govern only an اسم ظاهر. What can باء القسم govern that they cannot?`, options: [`Both an اسم ظاهر and a pronoun`, `Only a pronoun, never an اسم ظاهر`, `Neither a pronoun nor an اسم ظاهر`, `Only a جملة`], correct: 0 },
        { title: `لا أقسم بيوم القيامة: الفعل مذكور`, kind: 'mcq', prompt: `﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾ states أُقْسِمُ outright alongside الباء. What does this confirm about باء القسم?`, options: [`Unlike واو and تاء, الباء allows the verb of oath to be stated`, `الباء never allows the verb to be stated, exactly like واو and تاء`, `الباء requires the verb to always be stated`, `This is not actually an example of باء القسم`], correct: 0 },
        { title: `فبعزتك لأغوينهم أجمعين: الفعل محذوف`, kind: 'mcq', prompt: `In ﴿فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ﴾, is أُقْسِمُ stated or dropped?`, options: [`Dropped — إبليس swears بِعِزَّتِكَ with أقسم left unspoken`, `Stated directly before بِعِزَّتِكَ`, `Stated at the end of the آية`, `Neither — this is not an oath at all`], correct: 0 },
        { title: `بعزتك: باء تدخل على المضمر`, kind: 'mcq', prompt: `بِعِزَّتِكَ has باء القسم attaching to الكاف, a pronoun. What does that confirm about الباء compared to واو and تاء؟`, options: [`الباء attaches to a pronoun as freely as to a noun; واو and تاء cannot`, `All three particles attach to pronouns equally`, `الباء never attaches to a pronoun either`, `Only تاء can attach to a pronoun`], correct: 0 },
        { title: `بك لأفعلن: توضيح القاعدة`, kind: 'mcq', prompt: `بِكَ لَأَفْعَلَنَّ, "by you, I will surely do [it]," has باء القسم attaching directly to a pronoun. Could واو or تاء القسم replace الباء here?`, options: [`No — both واو and تاء are restricted entirely to an اسم ظاهر`, `Yes — واو could replace الباء with no change`, `Yes — تاء could replace الباء with no change`, `Both واو and تاء could replace الباء`], correct: 0 },
        { title: `أحرف القسم: خلاصة الفروق`, kind: 'mcq', prompt: `Comparing all three particles القسم on what they govern, which correctly ranks them from most to least flexible?`, options: [`باء (noun or pronoun) > واو (noun only) > تاء (noun only, restricted to اللّٰه)`, `تاء > واو > باء`, `واو > تاء > باء`, `All three are equally flexible`], correct: 0 },
        {
          title: `تركيب: تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ.`,
          source: `تَاللَّهِ تَفْتَأُ تَذْكُرُ يُوسُفَ`,
          words: [`تَاللَّهِ`, `تَفْتَأُ`, `تَذْكُرُ يُوسُفَ`],
          labels: [`تاء القسم ومجرورها: مفعول به لفعل محذوف تقديره أقسم`, `فعل مضارع ناقص وفاعله المستتر`, `فعل مضارع ومفعوله: خبر تفتأ`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ.`,
          source: `لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ`,
          words: [`لَا`, `أُقْسِمُ`, `بِيَوْمِ`, `الْقِيَامَةِ`],
          labels: [`حرف نفي`, `فعل مضارع وفاعله المستتر`, `باء القسم ومجرورها`, `مضاف إليه`],
          distractors: [`مفعول به`, `تمييز`],
        },
        {
          title: `تركيب: فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ.`,
          source: `فَبِعِزَّتِكَ لَأُغْوِيَنَّهُمْ أَجْمَعِينَ`,
          words: [`بِعِزَّتِكَ`, `لَأُغْوِيَنَّهُمْ`, `أَجْمَعِينَ`],
          labels: [`باء القسم ومجرورها: مفعول به لفعل محذوف تقديره أقسم`, `اللام واقعة في جواب القسم وفعل مضارع مؤكد بالنون وفاعله ومفعوله`, `توكيد`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: بِكَ لَأَفْعَلَنَّ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of بِكَ لَأَفْعَلَنَّ.`,
          source: `بِكَ لَأَفْعَلَنَّ`,
          words: [`بِكَ`, `لَأَفْعَلَنَّ`],
          labels: [`باء القسم ومجرورها: ضمير متصل`, `اللام واقعة في جواب القسم وفعل مضارع مؤكد بالنون`],
          distractors: [`مفعول به`, `مفعول له`],
        },
        {
          title: `تركيب: وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ.`,
          source: `وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ`,
          words: [`وَالْعَصْرِ`, `إِنَّ الْإِنْسَانَ`, `لَفِي خُسْرٍ`],
          labels: [`واو القسم ومجرورها: مفعول به لفعل محذوف تقديره أقسم`, `حرف توكيد ونصب واسمه`, `اللام واقعة في جواب القسم وجار ومجرور: خبر إنّ`],
          distractors: [`مفعول له`, `حال`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'مُذْ ومُنْذُ',
      subtitle: 'the twelfth and thirteenth حروف الجر — nearly identical, apart from one narrow point of إعراب',
      concepts: [
        {
          heading: 'مذ ومنذ: تعريفهما ومحلهما',
          lines: [
            { html: `<bdi>مُذْ</bdi>, the twelfth حرف جر, and <bdi>مُنْذُ</bdi>, the thirteenth, close out the full list of thirteen حروف الجر. They are studied together because they behave almost identically — same meaning, same conditions on the verb before them, same restriction on what follows them — differing only in one narrow point of إعراب.`, list: false },
            { box: { title: 'Definition', lines: [`مُذْ وَمُنْذُ مَعَ مَجْرُورَيْهِمَا فِي مَحَلِّ المَفْعُولِ فِيهِ`] } },
            { table: { title: 'مذ ومنذ: أمثلة', headers: ['Example', 'Translation'], rows: [
              [`مَا تَرَكْتُ صَلَاةً مُذْ يَوْمِ البُلُوغِ`, `I have not left a prayer since the day of puberty`],
              [`تَجِبُ الصَّلَاةُ مُنْذُ يَوْمِ البُلُوغِ`, `Prayer becomes obligatory from the day of puberty`],
            ] } },
            { html: `Whatever مُذ or منذ introduces functions as <bdi>المفعول فيه</bdi> — the ظرف of time. Both examples anchor an action to a point in time, exactly the territory مُذ and منذ are built for.`, list: false },
          ],
          exercise: {
            prompt: `Whatever مُذ or منذ introduces functions as which مفعول, according to their definition?`,
            kind: 'mcq',
            options: [`المفعول فيه — the ظرف of time`, `المفعول به`, `المفعول له`, `المفعول المطلق`],
            correct: 0,
          },
        },
        {
          heading: 'شرط الفعل قبلهما: ماضٍ منفي أو مثبت ممتد',
          lines: [
            { box: { title: 'Rule', lines: [`يُشْتَرَطُ فِي الفِعْلِ قَبْلَهُمَا أَنْ يَكُونَ مَاضِيًا`] } },
            { html: `The verb preceding مُذ or منذ must be <bdi>مَاضٍ</bdi> — and even then, only in one of two shapes. The first is <bdi>مَنْفِيّ</bdi>, negated.`, list: false },
            { box: { title: 'Example', lines: [`مَا رَأَيْتُهُ مُنْذُ يَوْمِ الجُمُعَةِ`] } },
            { html: `"I have not seen him since Friday." The negation matters — it is precisely because the seeing never happened that the whole stretch of time from Friday until now is being described in one breath. The second shape is <bdi>مُثْبَت مُمْتَدّ</bdi>, an affirmative verb describing an action that extends across the whole span of time named.`, list: false },
            { box: { title: 'Example', lines: [`نِمْتُ مُنْذُ بَعْدَ العِشَاءِ، وَكُنْتُ مُصَلِّيًا مُنْذُ نِصْفِ اللَّيْلِ`] } },
            { html: `"I have been sleeping since after ʿIshāʾ, and I had been praying since midnight." In both, the sleeping and the praying are understood to have gone on continuously through the named period.`, list: false },
            { box: { title: 'Careful', lines: [`لَا يَصِحُّ سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ لِأَنَّ السُّقُوطَ حَادِثَةٌ لَحْظِيَّةٌ لَا تَمْتَدُّ`] } },
            { html: `What an affirmative verb cannot do is name a single instant buried somewhere inside that span without covering it. سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ, "I fell since sunrise," fails — falling is a momentary event, not something that extends from sunrise until now, so the sentence is rejected even though the verb is مَاضٍ and مُثْبَت. The test is not just "affirmative past tense" but "affirmative past tense describing a continuous state stretching across the whole interval."`, list: false },
          ],
          exercise: {
            prompt: `سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ, "I fell since sunrise," is rejected even though سَقَطْتُ is مَاضٍ and مُثْبَت. Why?`,
            kind: 'mcq',
            options: [`Falling is a momentary event, not a state that extends across the whole named span, and مثبت ممتد requires exactly that`, `سقط is not actually مَاضٍ`, `الشمس cannot follow منذ at all`, `منذ requires a منفي verb in every case, with no مثبت option`],
            correct: 0,
          },
        },
        {
          heading: 'مجرورهما: اسم ظاهر دال على الماضي أو الحال',
          lines: [
            { box: { title: 'Rule', lines: [`لَا يَكُونُ مَجْرُورُهُمَا إِلَّا اسْمًا ظَاهِرًا دَالًّا عَلَى الزَّمَانِ الْمَاضِي أَوِ الحَالِ`] } },
            { html: `Two restrictions bind the noun that follows مُذ or منذ. First, like الكاف, حَتَّى, and واو/تاء القسم before them, they never attach to a pronoun — only an اسم ظاهر follows. Second, that noun must itself denote time, and specifically past or present time, never future time — one cannot say مُذ غدًا, "since tomorrow."`, list: false },
            { box: { title: 'Careful', lines: [`اليَوْمُ وَاللَّيْلَةُ يُعَدَّانِ دَالَّيْنِ عَلَى الحَالِ حَتَّى مَعَ فِعْلٍ مَاضٍ قَبْلَهُمَا`] } },
            { html: `A word like اليَوْم, "today," or اللَّيْلَة, "tonight," looks like it names the present moment — but it is still counted as <bdi>دالّ على الحال</bdi> even when the verb before it is مَاضٍ.`, list: false },
            { html: `ما رَأَيْتُهُ مُنْذُ اليَوْمِ is understood as "I have not seen him today," with اليوم referring to the very day the speaker is in, regardless of the verb's tense. اليوم, الليلة, الشهر, السنة and similar words are read this way precisely because they denote the current unit of time the speaker occupies, not a fixed point receding into the past.`, list: false },
          ],
          exercise: {
            prompt: `In ما رَأَيْتُهُ مُنْذُ اليَوْمِ, رأيته is مَاضٍ, yet اليوم is still counted as دالّ على الحال rather than الماضي. Why?`,
            kind: 'mcq',
            options: [`اليوم names the current unit of time the speaker occupies, regardless of the verb's own tense`, `اليوم is always understood as future`, `اليوم is treated as a pronoun, not an اسم ظاهر`, `مذ ومنذ can never precede a زمان word at all`],
            correct: 0,
          },
        },
        {
          heading: 'معنى مذ ومنذ: في أم مِن أم إلى',
          lines: [
            { box: { title: 'Rule', lines: [`تُفِيدُ مُذْ وَمُنْذُ مَعْنَى فِي إِنْ كَانَ مَجْرُورُهُمَا مَعْرِفَةً دَالَّةً عَلَى الحَاضِرِ، وَمَعْنَى مِنْ وَإِلَى إِنْ كَانَ مَجْرُورُهُمَا مَاضِيًا`] } },
            { table: { title: 'ما يفيده مذ ومنذ بحسب مجرورهما', headers: ['مجرورهما', 'Meaning', 'Example', 'Translation'], rows: [
              [`مَعْرِفَة، حاضر`, `في — "at/on"`, `مَا رَأَيْتُهُ مُنْذُ اليَوْمِ`, `I have not seen him today`],
              [`مَعْرِفَة، ماضٍ`, `مِنْ — "since"`, `مَا رَأَيْتُهُ مُنْذُ الجُمُعَةِ`, `I have not seen him since Friday`],
              [`نَكِرَة، ماضٍ`, `إِلَى — "for"`, `مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ`, `I have not seen him for two days`],
            ] } },
            { html: `When the مجرور names the present, the sense is that of في, "on/at": the not-seeing is located within today. When it names a point in the past, the sense splits along معرفة and نكرة: with a معرفة past-time noun, the meaning is مِن, "since," picking out the starting point and running continuously to now; with a نكرة past-time noun, the meaning shifts to إلى, "for," measuring a span of duration rather than naming a fixed starting point. English happens to use two different words, "since" and "for," for exactly this same معرفة/نكرة split.`, list: false },
          ],
          exercise: {
            prompt: `مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ has يَوْمَيْنِ as a نكرة past-time noun. Which meaning does منذ carry there?`,
            kind: 'mcq',
            options: [`إِلَى — measuring a span of duration ("for")`, `مِنْ — picking out a fixed starting point ("since")`, `فِي — locating the event within a present moment ("at/on")`, `عَلَى — marking استعلاء`],
            correct: 0,
          },
        },
        {
          heading: 'إعراب ما بعد مذ ومنذ: افتراقهما',
          lines: [
            { box: { title: 'Rule', lines: [`يَكُونُ مَا بَعْدَ مُنْذُ مَجْرُورًا وُجُوبًا فِي الحَاضِرِ، وَتَرْجِيحًا فِي المَاضِي. وَيَكُونُ مَا بَعْدَ مُذْ مَجْرُورًا وُجُوبًا فِي الحَاضِرِ، وَمَرْفُوعًا تَرْجِيحًا فِي المَاضِي`] } },
            { html: `This is the one point where مُذ and منذ part ways. In the حاضر use, both particles behave as ordinary حروف جر and their noun is مجرور, obligatorily. In the ماضي use, though, they diverge: منذ keeps its noun مجرور (the preferred reading), while مُذ prefers مَرْفُوع instead.`, list: false },
            { table: { title: 'افتراق مذ ومنذ في الإعراب', headers: ['', 'for (نكرة)', 'since (معرفة)', 'today (حاضر)'], rows: [
              [`مُنْذُ`, `مُنْذُ يَوْمَيْنِ — مجرور`, `مُنْذُ الجُمُعَةِ — مجرور (راجح)`, `مُنْذُ اليَوْمِ — مجرور`],
              [`مُذْ`, `مُذْ يَوْمَانِ — مرفوع`, `مُذِ الجُمُعَةُ — مرفوع (راجح)`, `مُذِ اليَوْمِ — مجرور`],
            ] } },
            { box: { title: 'Careful', lines: [`الرَّفْعُ بَعْدَ مُذْ لَيْسَ اعْتِبَاطًا، بَلْ يَقُومُ عَلَى تَقْدِيرٍ`] } },
            { html: `The رفع after مُذ is not arbitrary — it comes from a تقدير, an implied structure, behind the surface phrase. مَا رَأَيْتُهُ مُذْ يَوْمَانِ is read as though it were مَا رَأَيْتُهُ مُذْ كَانَ يَوْمَانِ, "since it has been two days" (with يَوْمَانِ as the اسم of a dropped كَانَ), or مَا رَأَيْتُهُ مُذْ مَضَى يَوْمَانِ, "since two days have passed" (with يَوْمَانِ as the فَاعِل of a dropped مَضَى). Either way, يَوْمَانِ is not literally مجرور by مُذ at all in this reading — مُذ has effectively become a <bdi>ظرف مبتدأ بجملة رفع</bdi>, not a plain حرف جر, which is exactly why its noun surfaces مرفوعًا rather than مجرورًا.`, list: false },
          ],
          exercise: {
            prompt: `مُذِ الجُمُعَةُ shows الجمعة مرفوعا, while مُنْذُ الجُمُعَةِ shows الجمعة مجرورا, for the same ماضٍ-معرفة meaning. What accounts for مُذ's رفع here?`,
            kind: 'mcq',
            options: [`A dropped كَانَ or مَضَى behind the surface phrase, with الجمعة as its اسم or فاعل rather than a literal مجرور`, `مذ can never govern جر at all`, `الجمعة is مبني, not معرب, after مذ`, `منذ and مذ are simply two spellings with no إعراب difference`],
            correct: 0,
          },
        },
        {
          heading: 'جملة بعد مذ ومنذ: اسمان مضافان لا حرفا جر',
          lines: [
            { box: { title: 'Rule', lines: [`إِنْ كَانَ مَا بَعْدَ مُذْ أَوْ مُنْذُ جُمْلَةً، فَهُمَا مَعَ تِلْكَ الجُمْلَةِ اسْمَانِ مُضَافَانِ، لَا حَرْفَا جَرٍّ`] } },
            { box: { title: 'Example', lines: [`مَا اغْتَبْتُ أَحَدًا مُذْ عَلِمْتُ الغِيبَةَ مُحَرَّمَةً`] } },
            { html: `"I have not backbitten anyone since I learned that backbiting is forbidden." Here what follows مُذ is an entire جملة, عَلِمْتُ الغِيبَةَ مُحَرَّمَةً, not a single اسم.`, list: false },
            { box: { title: 'Careful', lines: [`حَرْفُ الجَرِّ لَا يَدْخُلُ عَلَى الجُمْلَةِ`] } },
            { html: `A حرف جر can never govern a جملة directly. So whenever a جملة follows مُذ or منذ, the two words are no longer functioning as plain حروف جر at all; they are reclassified as <bdi>أسماء مضافة</bdi>, with the following جملة standing in the place of the مضاف إليه, the way any noun-phrase would follow an إضافة. The apparent exception to "حرف الجر لا يدخل على الجملة" turns out not to be an exception once مُذ and منذ are correctly read as اسمين in this construction rather than حرفين.`, list: false },
          ],
          exercise: {
            prompt: `In مَا اغْتَبْتُ أَحَدًا مُذْ عَلِمْتُ الغِيبَةَ مُحَرَّمَةً, مُذ is followed by an entire جملة. Given that a حرف جر can never govern a جملة, how is مُذ reclassified here?`,
            kind: 'mcq',
            options: [`As an اسم مضاف, with the following جملة standing in the place of its مضاف إليه`, `As a فعل ماضٍ`, `As a حرف عطف`, `As a ظرف زمان لا محل له من الإعراب أصلًا`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Whatever مُذ or منذ introduces functions as which مفعول?`, options: [`المفعول فيه`, `المفعول به`, `المفعول له`, `المفعول المطلق`], correct: 0 },
        { q: `سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ is rejected even though سقط is مَاضٍ and مُثْبَت. Why?`, options: [`Falling is a momentary event, not a state extending across the whole named span`, `سقط cannot be مَاضٍ`, `الشمس cannot follow منذ`, `منذ always requires a منفي verb`], correct: 0 },
        { q: `In مَا رَأَيْتُهُ مُنْذُ اليَوْمِ, why is اليوم counted as دالّ على الحال despite the ماضٍ verb رأيته؟`, options: [`اليوم names the current unit of time the speaker occupies, regardless of the verb's tense`, `اليوم is future`, `اليوم is a pronoun`, `مذ ومنذ reject زمان nouns entirely`], correct: 0 },
        { q: `مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ has a نكرة past-time مجرور. Which meaning does منذ carry?`, options: [`إِلَى — "for," measuring a span`, `مِنْ — "since," a fixed starting point`, `فِي — "at/on," a present moment`, `عَلَى — استعلاء`], correct: 0 },
        { q: `مُذِ الجُمُعَةُ shows رفع while مُنْذُ الجُمُعَةِ shows جر, for the same ماضٍ-معرفة meaning. What explains مُذ's رفع؟`, options: [`A dropped كَانَ or مَضَى, with الجمعة as its اسم or فاعل rather than a literal مجرور`, `مذ can never govern جر`, `الجمعة is مبني after مذ`, `مذ ومنذ never differ in إعراب`], correct: 0 },
        { q: `مَا اغْتَبْتُ أَحَدًا مُذْ عَلِمْتُ الغِيبَةَ مُحَرَّمَةً has a full جملة after مُذ. Since a حرف جر can never govern a جملة, how is مُذ reclassified here?`, options: [`As an اسم مضاف, with the following جملة as its مضاف إليه`, `As a حرف عطف`, `As a فعل`, `As لا محل له من الإعراب`], correct: 0 },
      ],
      bank: [
        { title: `مذ ومنذ: عددهما بين حروف الجر`, kind: 'mcq', prompt: `مُذ and منذ are the twelfth and thirteenth of how many total حروف الجر?`, options: [`ثلاثة عشر`, `عشرة`, `اثنا عشر فقط`, `خمسة عشر`], correct: 0 },
        { title: `مذ ومنذ: محلهما الإعرابي`, kind: 'mcq', prompt: `مُذ وَمُنْذُ مَعَ مَجْرُورَيْهِمَا فِي مَحَلِّ المَفْعُولِ فِيهِ. What does this mean?`, options: [`Whatever مذ or منذ introduces functions as the ظرف of time`, `مذ ومنذ never have a محل من الإعراب`, `مذ ومنذ always function as مبتدأ`, `مذ ومنذ mark مفعول به, not مفعول فيه`], correct: 0 },
        { title: `ما تركت صلاة مذ يوم البلوغ: الفعل المنفي`, kind: 'mcq', prompt: `مَا تَرَكْتُ صَلَاةً مُذْ يَوْمِ البُلُوغِ has مَا تَرَكْتُ as its verb. Which of the two required shapes does this illustrate?`, options: [`مَنْفِيّ — negated`, `مُثْبَت مُمْتَدّ`, `مضارع مرفوع`, `أمر`], correct: 0 },
        { title: `نمت منذ بعد العشاء: مثبت ممتد`, kind: 'mcq', prompt: `نِمْتُ مُنْذُ بَعْدَ العِشَاءِ has an affirmative ماضٍ verb, نمت. Why does this succeed where سَقَطْتُ مُنْذُ طُلُوعِ الشَّمْسِ fails?`, options: [`Sleeping extends continuously across the named span; falling is a single instant`, `نمت is negated and سقطت is not`, `العشاء is معرفة while الشمس is نكرة`, `There is no real difference — both should be rejected`], correct: 0 },
        { title: `مذ ومنذ: القيد الأول على مجرورهما`, kind: 'mcq', prompt: `Like الكاف and حتى before them, what is the first restriction مذ ومنذ place on their مجرور?`, options: [`It must be اسم ظاهر, never a pronoun`, `It must be نكرة, never معرفة`, `It must be مثنى`, `It must carry تنوين`], correct: 0 },
        { title: `مذ غدا: لماذا لا تصح`, kind: 'mcq', prompt: `Why is مُذ غَدًا, "since tomorrow," rejected?`, options: [`مذ ومنذ's مجرور must denote past or present time, never future`, `غدا is a pronoun, not an اسم ظاهر`, `مذ can never precede a زمان word`, `غدا cannot carry تنوين`], correct: 0 },
        { title: `اليوم والليلة: لماذا حال لا ماض`, kind: 'mcq', prompt: `اليوم, الليلة, الشهر, and السنة are read as دالّ على الحال even after a ماضٍ verb. Why?`, options: [`They denote the current unit of time the speaker occupies, not a fixed point receding into the past`, `They are always مبني`, `They can never follow a حرف جر`, `They are treated as أفعال, not أسماء`], correct: 0 },
        { title: `معنى مذ ومنذ مع الحاضر`, kind: 'mcq', prompt: `مَا رَأَيْتُهُ مُنْذُ اليَوْمِ has اليوم as معرفة دالّة على الحاضر. What meaning does منذ carry?`, options: [`فِي — "at/on"`, `مِنْ — "since"`, `إِلَى — "for"`, `عَلَى — استعلاء`], correct: 0 },
        { title: `معنى مذ ومنذ مع الماضي المعرفة`, kind: 'mcq', prompt: `مَا رَأَيْتُهُ مُنْذُ الجُمُعَةِ has الجمعة as معرفة دالّة على الماضي. What meaning does منذ carry?`, options: [`مِنْ — "since," picking out a fixed starting point`, `فِي — "at/on"`, `إِلَى — "for," measuring a span`, `عَلَى — استعلاء`], correct: 0 },
        { title: `since وfor: انعكاس في الإنجليزية`, kind: 'mcq', prompt: `English uses "since" for a معرفة past-time مجرور and "for" for a نكرة past-time مجرور after مذ/منذ. What does the lesson say this split mirrors?`, options: [`The same معرفة/نكرة split that decides between مِن and إِلَى in Arabic`, `A split that has no Arabic equivalent at all`, `The حاضر/ماضي split only`, `Nothing — English "since" and "for" are simply synonyms`], correct: 0 },
        { title: `مذ ومنذ: الاتفاق في الحاضر`, kind: 'mcq', prompt: `In the حاضر use, do مذ and منذ agree or disagree on the إعراب of what follows them?`, options: [`They agree — both require مجرور, obligatorily`, `They disagree — مذ requires مرفوع even in الحاضر`, `Neither governs any إعراب in الحاضر`, `Only منذ works in الحاضر at all`], correct: 0 },
        { title: `مذ يومان: تقدير كان`, kind: 'mcq', prompt: `مَا رَأَيْتُهُ مُذْ يَوْمَانِ shows رفع on يومان. One of two proposed تقديرات treats يومان as the اسم of a dropped verb. Which verb?`, options: [`كَانَ`, `صَارَ`, `أَصْبَحَ`, `لَيْسَ`], correct: 0 },
        { title: `مذ يومان: تقدير مضى`, kind: 'mcq', prompt: `The second proposed تقدير for مَا رَأَيْتُهُ مُذْ يَوْمَانِ treats يومان as the فاعل of a dropped verb مَضَى. What does مضى mean here?`, options: [`"passed" — "since two days have passed"`, `"remained"`, `"began"`, `"ended"`], correct: 0 },
        { title: `مذ كظرف مبتدأ بجملة رفع`, kind: 'mcq', prompt: `Once مُذ's رفع is traced to a dropped كَانَ or مَضَى, what does مُذ effectively become in that reading?`, options: [`A ظرف مبتدأ بجملة رفع, not a plain حرف جر`, `A فعل ماضٍ`, `An اسم موصول`, `A ضمير مستتر`], correct: 0 },
        { title: `مذ ومنذ مع الجملة: إعادة تصنيف`, kind: 'mcq', prompt: `مَا اغْتَبْتُ أَحَدًا مُذْ عَلِمْتُ الغِيبَةَ مُحَرَّمَةً has a full جملة after مُذ. Since حرف الجر لا يدخل على الجملة, how must مُذ and منذ be reclassified whenever this happens?`, options: [`As اسمان مضافان, not حرفا جر`, `As فعلان ماضيان`, `As حرفا عطف`, `As they remain حرفا جر regardless`], correct: 0 },
        { title: `مذ ومنذ: القاسم المشترك مع الكاف وحتى`, kind: 'mcq', prompt: `مذ ومنذ share one restriction with الكاف, حتى, and واو/تاء القسم. What is it?`, options: [`None of them ever attach to a pronoun — all require an اسم ظاهر`, `All of them require a معرفة مجرور`, `All of them are restricted to poetry`, `None of them can be preceded by نفي`], correct: 0 },
        { title: `مذ ومنذ: نقطة الافتراق الوحيدة`, kind: 'mcq', prompt: `مذ ومنذ are described as behaving almost identically. What is the one point where they diverge?`, options: [`The إعراب of their مجرور in the ماضي use — مرفوع for مذ, مجرور for منذ`, `Their basic meaning`, `The condition on the verb before them`, `Whether they can be followed by a جملة`], correct: 0 },
        {
          title: `تركيب: مَا تَرَكْتُ صَلَاةً مُذْ يَوْمِ البُلُوغِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَا تَرَكْتُ صَلَاةً مُذْ يَوْمِ البُلُوغِ.`,
          source: `مَا تَرَكْتُ صَلَاةً مُذْ يَوْمِ البُلُوغِ`,
          words: [`مَا تَرَكْتُ`, `صَلَاةً`, `مُذْ`, `يَوْمِ البُلُوغِ`],
          labels: [`حرف نفي وفعل ماضٍ وفاعله`, `مفعول به`, `حرف جر`, `مجرور بمذ ومضاف إليه`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: مَا رَأَيْتُهُ مُنْذُ يَوْمِ الجُمُعَةِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَا رَأَيْتُهُ مُنْذُ يَوْمِ الجُمُعَةِ.`,
          source: `مَا رَأَيْتُهُ مُنْذُ يَوْمِ الجُمُعَةِ`,
          words: [`مَا رَأَيْتُهُ`, `مُنْذُ`, `يَوْمِ الجُمُعَةِ`],
          labels: [`حرف نفي وفعل ماضٍ وفاعله ومفعوله`, `حرف جر`, `مجرور بمنذ ومضاف إليه`],
          distractors: [`مفعول له`, `تمييز`],
        },
        {
          title: `تركيب: مَا رَأَيْتُهُ مُنْذُ اليَوْمِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَا رَأَيْتُهُ مُنْذُ اليَوْمِ.`,
          source: `مَا رَأَيْتُهُ مُنْذُ اليَوْمِ`,
          words: [`مَا رَأَيْتُهُ`, `مُنْذُ اليَوْمِ`],
          labels: [`حرف نفي وفعل ماضٍ وفاعله ومفعوله`, `منذ ومجرورها: بمعنى في، مجرور وجوبا`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: مَا رَأَيْتُهُ مُنْذُ الجُمُعَةِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَا رَأَيْتُهُ مُنْذُ الجُمُعَةِ.`,
          source: `مَا رَأَيْتُهُ مُنْذُ الجُمُعَةِ`,
          words: [`مَا رَأَيْتُهُ`, `مُنْذُ الجُمُعَةِ`],
          labels: [`حرف نفي وفعل ماضٍ وفاعله ومفعوله`, `منذ ومجرورها: بمعنى مِن، مجرور راجحا`],
          distractors: [`مفعول له`, `تمييز`],
        },
        {
          title: `تركيب: مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ.`,
          source: `مَا رَأَيْتُهُ مُنْذُ يَوْمَيْنِ`,
          words: [`مَا رَأَيْتُهُ`, `مُنْذُ يَوْمَيْنِ`],
          labels: [`حرف نفي وفعل ماضٍ وفاعله ومفعوله`, `منذ ومجرورها: بمعنى إلى، مجرور`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: مَا اغْتَبْتُ أَحَدًا مُذْ عَلِمْتُ الغِيبَةَ مُحَرَّمَةً`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَا اغْتَبْتُ أَحَدًا مُذْ عَلِمْتُ الغِيبَةَ مُحَرَّمَةً.`,
          source: `مَا اغْتَبْتُ أَحَدًا مُذْ عَلِمْتُ الغِيبَةَ مُحَرَّمَةً`,
          words: [`مَا اغْتَبْتُ`, `أَحَدًا`, `مُذْ`, `عَلِمْتُ الغِيبَةَ مُحَرَّمَةً`],
          labels: [`حرف نفي وفعل ماضٍ وفاعله`, `مفعول به`, `اسم مضاف بمعنى منذ الزمانية`, `جملة في محل جر مضاف إليه`],
          distractors: [`مفعول له`, `حرف جر`],
        },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'رُبَّ',
      subtitle: 'حرف الجر الشبيه بالزائد opens with رُبَّ — real meaning, without the syntactic tie الأصلي particles require',
      concepts: [
        {
          heading: 'حرف الجر الشبيه بالزائد',
          lines: [
            { html: `The thirteen حروف الجر met so far are all <bdi>حرف جر أصلي</bdi> — each carries its own distinct meaning, and its مجرور is always عمل, tied to a فعل or something behaving like one. A second class now opens: <bdi>حَرْف الجَرّ الشَّبِيه بِالزَّائِد</bdi>, "the حرف جر resembling the زائد type."`, list: false },
            { box: { title: 'Definition', lines: [`حَرْفُ الجَرِّ الشَّبِيهُ بِالزَّائِدِ مَا يُفِيدُ مَعْنًى خَاصًّا، وَلَا يَكُونُ مَجْرُورُهُ مَعْمُولًا لِفِعْلٍ أَوْ شِبْهِ الفِعْلِ`] } },
            { html: `This class sits between two poles: it resembles حرف الجر الأصلي because it still carries a specific meaning of its own — unlike a purely زائد particle, which adds only emphasis and no meaning. But it resembles حرف الجر الزائد in that its مجرور does not have to be عملا, governed by a فعل or شبه الفعل. It occupies a middle ground: real meaning, without the syntactic attachment an أصلي particle would require. There are three such particles: <bdi>رُبَّ</bdi>, <bdi>مِنْ</bdi> in its تبعيضية use, and <bdi>حَاشَا</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `حرف الجر الشبيه بالزائد sits between حرف الجر الأصلي and حرف الجر الزائد. What does it share with each?`,
            kind: 'mcq',
            options: [`Like الأصلي, it carries a real meaning; like الزائد, its مجرور need not be عملا لفعل أو شبه الفعل`, `Like الأصلي, it never carries meaning; like الزائد, its مجرور is always عمل`, `It shares nothing with either type`, `It is identical to حرف الجر الأصلي in every respect`],
            correct: 0,
          },
        },
        {
          heading: 'رُبَّ: معناها التكثير والتقليل',
          lines: [
            { box: { title: 'Rule', lines: [`وَهِيَ لِتَكْثِيرِ مَجْرُورِهَا أَوْ تَقْلِيلِهِ، وَالقَرِينَةُ تُعَيِّنُ المُرَادَ`] } },
            { html: `رُبَّ carries two opposite meanings at once: <bdi>تكثير</bdi>, "many," and <bdi>تقليل</bdi>, "few."`, list: false },
            { table: { title: 'الخلاف حول أصل معنى رُبَّ', headers: ['Opinion', 'Core meaning'], rows: [
              [`الأول`, `تكثير (many) is basic; تقليل is occasional`],
              [`الثاني`, `تقليل (few) is basic; تكثير is occasional`],
              [`الثالث`, `مشترك — both meanings equally available; القرينة, context, decides`],
            ] } },
            { box: { title: 'Example', lines: [`رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا`] } },
            { html: `"Many a desire brings about lasting grief." Here the sense leans toward تكثير — many desires end in lasting grief.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا`,
                translation: `Many a desire brings about lasting grief.`,
                cells: [`رُبَّ`, `شَهْوَةٍ`, `تُورِثُ`, `حُزْنًا`, `طَوِيلًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف جر شبيه بالزائد` }, { start: 1, end: 1, role: `مجرور برُبَّ، نكرة` }, { start: 2, end: 2, role: `فعل مضارع (صفة لشهوة)` }, { start: 3, end: 3, role: `مفعول به` }, { start: 4, end: 4, role: `نعت` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `Grammarians disagree over رُبَّ's أصل meaning. According to the third opinion, what decides whether a given رُبَّ means تكثير or تقليل?`,
            kind: 'mcq',
            options: [`القرينة — the surrounding context`, `The number of words in مجرورها`, `Whether رُبَّ is preceded by يا`, `Whether رُبَّ is خففت`],
            correct: 0,
          },
        },
        {
          heading: 'رُبَّ: صدارتها للكلام',
          lines: [
            { box: { title: 'Rule', lines: [`لَا تَقَعُ رُبَّ إِلَّا فِي صَدْرِ الكَلَامِ، وَقَدْ يَتَقَدَّمُهَا حَرْفُ النِّدَاءِ`] } },
            { html: `Unlike most of the أصلي particles, which can appear anywhere in a sentence, رُبَّ only ever opens one. The sole thing permitted to precede it is <bdi>حرف النداء</bdi>, يَا.`, list: false },
            { box: { title: 'Example', lines: [`يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي الآخِرَةِ`] } },
            { html: `"Many a woman clothed in this world will be naked in the Hereafter."`, list: false },
            { box: { title: 'Careful', lines: [`اليَاءُ هُنَا لَيْسَتْ نِدَاءً حَقِيقِيًّا، بَلْ حَرْفُ تَنْبِيهٍ يُفِيدُ التَّحَسُّرَ`] } },
            { html: `The يَا here is not the ordinary نداء used to call a person by name — there is no addressee being summoned. Instead, the يَا is read as <bdi>حرف تنبيه</bdi> that adds a sense of <bdi>تَحَسُّر</bdi>, of lament: it signals that what follows is being said with a note of regret or warning, not simply reported as fact.`, list: false },
          ],
          exercise: {
            prompt: `In يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي الآخِرَةِ, is the يَا before رُبَّ a genuine نداء calling someone?`,
            kind: 'mcq',
            options: [`No — it is حرف تنبيه adding a sense of تحسر, لament; there is no addressee being summoned`, `Yes — it calls the كاسيات directly`, `Yes — رُبَّ itself is being addressed`, `No — يا here is حرف عطف`],
            correct: 0,
          },
        },
        {
          heading: 'رُبَّ: مجرورها',
          lines: [
            { box: { title: 'Rule', lines: [`وَلَا يَكُونُ مَجْرُورُهَا إِلَّا اسْمًا ظَاهِرًا نَكِرَةً، أَوْ ضَمِيرًا مُبْهَمًا مُفَسَّرًا بِتَمْيِيزٍ`] } },
            { html: `The noun after رُبَّ is always <bdi>نَكِرَة</bdi> — never معرفة, and, like several particles before it, never an ordinary pronoun either. The one exception is <bdi>ضمير مُبْهَم</bdi>, a pronoun with no antecedent at all, which must then be clarified by a تمييز that follows it.`, list: false },
            { box: { title: 'Example', lines: [`رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ`] } },
            { html: `"Many a generous man I have met." Here the هُ attached to رُبَّ has no مرجع — it refers to nothing — so رَجُلًا comes right after as تمييز to spell out what that hidden pronoun actually meant.`, list: false },
            { table: { title: 'الضمير المبهم: البصريون والكوفيون', headers: ['School', 'Behavior', 'Example'], rows: [
              [`البصريون`, `ضمير stays مفرد مذكر regardless of the تمييز`, `رُبَّهُ رِجَالًا لَقِيتُهُمْ / رُبَّهُ نِسَاءً لَقِيتُهُنَّ`],
              [`الكوفيون`, `ضمير changes to match the تمييز in number and gender`, `رُبَّهُمْ رِجَالًا لَقِيتُهُمْ / رُبَّهُنَّ نِسَاءً لَقِيتُهُنَّ`],
            ] } },
            { box: { title: 'Rule', lines: [`الغَالِبُ أَنْ تَكُونَ مَجْرُورُهَا مَوْصُوفًا`] } },
            { html: `Most commonly, the نكرة after رُبَّ is <bdi>مَوصوف</bdi>, carrying a صفة of its own — either مفرد, a single word, as in رُبَّ رَجُلٍ كَرِيمٍ لَقِيتُهُ ("Many a generous man I have met"), or an entire جملة functioning as the صفة, as in رُبَّ رَجُلٍ يَفْعَلُ الخَيْرَ لَقِيتُهُ ("Many a man who does good I have met").`, list: false },
          ],
          exercise: {
            prompt: `In رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ, the هُ attached to رُبَّ has no مرجع. What does رَجُلًا do for it?`,
            kind: 'mcq',
            options: [`It functions as تمييز, spelling out what the ضمير مبهم actually meant`, `It functions as بدل, replacing the ضمير entirely`, `It functions as نعت للضمير`, `It has no relation to the ضمير at all`],
            correct: 0,
          },
        },
        {
          heading: 'رُبَّ: ما الكافة',
          lines: [
            { box: { title: 'Rule', lines: [`وَيُزَادُ مَا الكَافَّةُ عَلَى رُبَّ فَتَكُفُّهَا عَنِ العَمَلِ، وَيَدُلُّ عَلَى تَكْثِيرِ الفِعْلِ أَوْ تَقْلِيلِهِ`] } },
            { html: `<bdi>مَا الكَافَّة</bdi> can attach to رُبَّ, and when it does, two things change. First, it "restrains" رُبَّ — <bdi>كَفَّ</bdi> literally means to stop or hold back — so رُبَّ no longer requires عمل on a following noun the way it normally would. Second, the تكثير/تقليل meaning shifts target: not how many of a thing, but how often or how rarely an action happens.`, list: false },
            { box: { title: 'Example', lines: [`رُبَّمَا يَصُومُ زَيْدٌ`] } },
            { html: `"Zayd often fasts." This is what allows رُبَّمَا to attach to a full جملة فعلية, something plain رُبَّ could never do on its own.`, list: false },
            { box: { title: 'Example', lines: [`رُبَّمَا زَيْدٌ يَصُومُ`] } },
            { html: `"Zayd often fasts." مَا الكَافَّة also opens the door to attaching before a معرفة, again something plain رُبَّ — restricted to نكرة — could never do; here زيد stands as مبتدأ, with يصوم as its خبر.`, list: false },
            { box: { title: 'Careful', lines: [`اقتران مَا الكَافَّة برُبَّ يَمِيلُ غَالِبًا إِلَى التَّقْلِيلِ، وَفِي ﴿رُبَمَا يَوَدُّ الَّذِينَ كَفَرُوا﴾ ثَلَاثَةُ أَجْوِبَةٍ`] } },
            { html: `When مَا الكَافَّة enters on رُبَّ, the dominant reading leans toward تقليل rather than تكثير — even though رُبَّ on its own is often read toward تكثير. This raises a puzzle in ﴿رُبَمَا يَوَدُّ الَّذِينَ كَفَرُوا لَوْ كَانُوا مُسْلِمِينَ﴾, "Often those who disbelieved will wish they had been Muslims" — this wishing will happen constantly on the Day of Judgment, which looks like تكثير. Three answers are given: رُبَّمَا can carry تكثير in some contexts despite the general tendency toward تقليل; or their preoccupation with the punishment leaves them no room for regret except in scattered, infrequent moments, which is genuine تقليل; or the تقليل is used rhetorically, for <bdi>تهكم</bdi>, mockery and warning — the way a speaker says "perhaps you'll regret this" to someone about to err, not because regret is in doubt, but to press home that a wise person avoids the possibility of regret altogether.`, list: false },
          ],
          exercise: {
            prompt: `What two things change when مَا الكَافَّة attaches to رُبَّ?`,
            kind: 'mcq',
            options: [`رُبَّ stops requiring عمل on a following noun, and its تكثير/تقليل meaning shifts to how often an action happens`, `رُبَّ becomes أصلي, and its مجرور becomes معرفة only`, `رُبَّ can no longer open a sentence, and loses its meaning entirely`, `Nothing changes — مَا الكَافَّة is purely decorative`],
            correct: 0,
          },
        },
        {
          heading: 'رُبَّ: تخفيفها وحذفها، ومِمّا بمعناها',
          lines: [
            { box: { title: 'Rule', lines: [`قَدْ تُخَفَّفُ بَاؤُهَا`] } },
            { html: `The ب of رُبَّ can be lightened from a doubled بّ to a single ب, giving رُبَ instead of رُبَّ — as in the مصحف spelling رُبَمَا يَوَدُّ الَّذِينَ كَفَرُوا.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ تُحْذَفُ رُبَّ، وَيَبْقَى عَمَلُهَا بَعْدَ الوَاوِ كَثِيرًا، وَبَعْدَ الفَاءِ قَلِيلًا`] } },
            { html: `رُبَّ itself can be dropped entirely while its عمل, its جر, stays behind — most often after a وَاو, more rarely after a فَاء.`, list: false },
            { box: { title: 'Example', lines: [`وَلَيْلٍ كَمَوْجِ الْبَحْرِ`] } },
            { html: `From "Many a night like the waves of the sea has let down its curtains over me..." — لَيْلٍ here is مجرور with no visible حرف جر governing it; the وَاو stands where رُبَّ would have stood.`, list: false },
            { box: { title: 'Careful', lines: [`الوَاوُ نَفْسُهَا حَرْفُ جَرٍّ بِمَعْنَى رُبَّ، أَوْ رُبَّ مَحْذُوفَةٌ وَالوَاوُ عَاطِفَةٌ فَقَطْ — تَحْلِيلَانِ لِنَفْسِ المَجْرُورِ`] } },
            { html: `Two ways of accounting for the جر are current: one holds that the وَاو itself is a حرف جر carrying the meaning of رُبَّ; the other holds that رُبَّ is simply <bdi>مَحْذُوف</bdi>, dropped but still silently doing its عمل, with the وَاو functioning only as the ordinary connective. Either analysis reaches the same مجرور; the difference is purely in how the sentence is diagrammed.`, list: false },
            { box: { title: 'Rule', lines: [`إِذَا وَقَعَتْ مَا بَعْدَ مِنْ قَدْ تُفِيدُ مَعْنَى رُبَّ`] } },
            { html: `<bdi>مِمَّا</bdi> — مِنْ plus مَا — ordinarily functions as a plain حرف جر followed by المَا المَوْصُولَة. But in a handful of حديث structures, context shows مِمَّا has shifted to carry the meaning of رُبَّ, "often," as in كَانَ ﷺ مِمَّا يُحَرِّكُ شَفَتَيْهِ, "The Prophet ﷺ would often move his lips" — describing how he moved his lips repeating the وحي for fear of forgetting it, until he was told لَا تُحَرِّكْ بِهِ لِسَانَكَ. An alternative analysis treats this the same way as رُبَّمَا: مِنْ itself carries the meaning of رُبَّ, with the مَا attached to it read as مَا الكَافَّة. Either reading lands on the same meaning: "often."`, list: false },
          ],
          exercise: {
            prompt: `In وَلَيْلٍ كَمَوْجِ الْبَحْرِ, لَيْلٍ is مجرور with no visible حرف جر present. What has happened to رُبَّ here?`,
            kind: 'mcq',
            options: [`رُبَّ has been dropped after the واو while its عمل, the جر, stays behind`, `رُبَّ has been replaced permanently by الكاف`, `ليل is actually مرفوع, not مجرور`, `The واو has become a واو القسم`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `حرف الجر الشبيه بالزائد shares one trait with حرف الجر الأصلي and one with حرف الجر الزائد. What are they?`, options: [`Real meaning like الأصلي; مجرور need not be عملا لفعل like الزائد`, `No meaning like الأصلي; مجرور always عمل like الزائد`, `It shares nothing with either`, `It is a third name for the same particle type as الأصلي`], correct: 0 },
        { q: `رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا leans toward which of رُبَّ's two meanings?`, options: [`تكثير`, `تقليل`, `Neither — تنبيه only`, `Both equally, with no lean at all`], correct: 0 },
        { q: `يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي الآخِرَةِ opens with يا before رُبَّ. Is that يا a genuine نداء?`, options: [`No — it is حرف تنبيه, adding تحسر, with no addressee being called`, `Yes — كاسيات is being addressed`, `Yes — رُبَّ itself is being called`, `No — it is a زائدة with no function at all`], correct: 0 },
        { q: `In رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ, the هُ attached to رُبَّ has no مرجع. What clarifies it?`, options: [`رَجُلًا, functioning as تمييز`, `كَرِيمًا, functioning as بدل`, `لَقِيتُهُ, functioning as نعت`, `Nothing clarifies it`], correct: 0 },
        { q: `What two things change when مَا الكَافَّة attaches to رُبَّ?`, options: [`رُبَّ stops requiring عمل, and its تكثير/تقليل target shifts to how often an action happens`, `رُبَّ becomes أصلي and its مجرور must be معرفة`, `رُبَّ can no longer appear in صدر الكلام`, `Nothing changes at all`], correct: 0 },
        { q: `In وَلَيْلٍ كَمَوْجِ الْبَحْرِ, لَيْلٍ is مجرور with no visible حرف جر. What has happened to رُبَّ?`, options: [`It has been dropped after الواو while its عمل, the جر, stays behind`, `It has been replaced by الكاف`, `ليل is actually مرفوع`, `رُبَّ was never present in this construction at all`], correct: 0 },
      ],
      bank: [
        { title: `حرف الجر الشبيه بالزائد: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines حرف الجر الشبيه بالزائد؟`, options: [`It carries a specific meaning of its own, but its مجرور is not the معمول of a فعل or شبه الفعل`, `It carries no meaning, and its مجرور is the معمول of a فعل`, `It carries a specific meaning, and its مجرور is always the معمول of a فعل`, `It only ever enters upon a definite noun`], correct: 0 },
        { title: `الثلاثة الشبيهة بالزائد`, kind: 'mcq', prompt: `Which three particles make up حرف الجر الشبيه بالزائد?`, options: [`رُبَّ، مِنْ التبعيضية، وحَاشَا`, `الكاف، حتى، ومذ`, `واو القسم، تاء القسم، وباء القسم`, `في، على، واللام`], correct: 0 },
        { title: `رُبَّ: القسمة الثلاثية للأصل`, kind: 'mcq', prompt: `Grammarians hold three positions on رُبَّ's أصل meaning. What is the third position?`, options: [`مشترك — both تكثير and تقليل equally available, with القرينة deciding`, `تكثير only, with no تقليل reading ever available`, `تقليل only, with no تكثير reading ever available`, `رُبَّ carries neither meaning at all`], correct: 0 },
        { title: `رُبَّ شهوة: أي المعنيين`, kind: 'mcq', prompt: `رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا leans toward which meaning?`, options: [`تكثير — many desires end in lasting grief`, `تقليل — only a few desires end in grief`, `Neither meaning applies here`, `Both meanings equally, with the آية giving no lean`], correct: 0 },
        { title: `رُبَّ: موضعها من الكلام`, kind: 'mcq', prompt: `Where in a sentence can رُبَّ appear?`, options: [`Only at the very opening — صدر الكلام`, `Anywhere, exactly like الأصلي particles`, `Only at the end of a sentence`, `Only immediately before a فعل`], correct: 0 },
        { title: `يا قبل رُبَّ: الاستثناء الوحيد`, kind: 'mcq', prompt: `رُبَّ only ever opens a sentence, with one exception to what may precede it. What is that exception?`, options: [`حرف النداء يا`, `حرف العطف واو`, `أداة الاستفهام همزة`, `حرف الجواب نعم`], correct: 0 },
        { title: `يا رُبَّ: تفسير اليا`, kind: 'mcq', prompt: `The يا preceding رُبَّ in يَا رُبَّ كَاسِيَاتٍ فِي الدُّنْيَا عَارِيَاتٍ فِي الآخِرَةِ is not a genuine نداء. What is it instead?`, options: [`حرف تنبيه يفيد التحسر`, `حرف عطف`, `حرف جواب`, `حرف استفهام`], correct: 0 },
        { title: `رُبَّ: نوع مجرورها`, kind: 'mcq', prompt: `What must رُبَّ's مجرور be, apart from the one exception of ضمير مبهم?`, options: [`اسم ظاهر نكرة`, `اسم ظاهر معرفة`, `فعل مضارع`, `جملة اسمية`], correct: 0 },
        { title: `ربه رجلا كريما لقيته: الضمير المبهم`, kind: 'mcq', prompt: `In رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ, what kind of pronoun is the هُ attached to رُبَّ?`, options: [`ضمير مبهم — no مرجع at all, clarified by the following تمييز`, `ضمير عائد على شهوة`, `ضمير الشأن`, `ضمير الفصل`], correct: 0 },
        { title: `البصريون والكوفيون: خلافهما`, kind: 'mcq', prompt: `البصريون and الكوفيون disagree about the ضمير مبهم after رُبَّ. What is their disagreement?`, options: [`Whether the ضمير changes form to match its تمييز in number and gender, or stays مفرد مذكر regardless`, `Whether the ضمير is مرفوع or منصوب`, `Whether رُبَّ can carry a ضمير at all`, `Whether the تمييز must be مفرد or جملة`], correct: 0 },
        { title: `الكوفيون: ربهم رجالا`, kind: 'mcq', prompt: `According to الكوفيون, how would the pronoun after رُبَّ appear if the تمييز is رِجَالًا (plural men)?`, options: [`رُبَّهُمْ رِجَالًا — the ضمير matches the تمييز`, `رُبَّهُ رِجَالًا — the ضمير stays مفرد مذكر`, `رُبَّهَا رِجَالًا`, `رُبَّهُنَّ رِجَالًا`], correct: 0 },
        { title: `البصريون: ربه رجالا`, kind: 'mcq', prompt: `According to البصريون, how would the pronoun after رُبَّ appear if the تمييز is رِجَالًا؟`, options: [`رُبَّهُ رِجَالًا — the ضمير stays مفرد مذكر regardless of the تمييز`, `رُبَّهُمْ رِجَالًا — the ضمير matches the تمييز`, `رُبَّهَا رِجَالًا`, `رُبَّهُنَّ رِجَالًا`], correct: 0 },
        { title: `الغالب في مجرور رُبَّ: موصوف`, kind: 'mcq', prompt: `What is most commonly true of the نكرة following رُبَّ?`, options: [`It is مَوصوف, carrying a صفة of its own`, `It is دائما معرفة`, `It never takes a صفة`, `It is always a ضمير مبهم`], correct: 0 },
        { title: `رب رجل يفعل الخير: الصفة جملة`, kind: 'mcq', prompt: `In رُبَّ رَجُلٍ يَفْعَلُ الخَيْرَ لَقِيتُهُ, what serves as the صفة of رَجُلٍ؟`, options: [`The جملة يَفْعَلُ الخَيْرَ`, `The word الخير alone`, `لَقِيتُهُ alone`, `There is no صفة in this example`], correct: 0 },
        { title: `ما الكافة: أثرها على العمل`, kind: 'mcq', prompt: `مَا الكَافَّة attaches to رُبَّ. What does كَفّ mean, and what effect does it have?`, options: [`"To restrain" — it stops رُبَّ from requiring عمل on a following noun`, `"To strengthen" — it makes رُبَّ's عمل stronger`, `"To repeat" — it makes رُبَّ apply twice`, `"To negate" — it reverses رُبَّ's meaning entirely`], correct: 0 },
        { title: `ربما يصوم زيد: جملة فعلية`, kind: 'mcq', prompt: `رُبَّمَا يَصُومُ زَيْدٌ has رُبَّمَا attached to a full جملة فعلية. Could plain رُبَّ, without ما الكافة, do this on its own?`, options: [`No — plain رُبَّ requires a single نكرة مجرورة, not a full جملة`, `Yes — plain رُبَّ works exactly the same way`, `Yes, but only with a جملة اسمية`, `Plain رُبَّ can never attach to anything at all`], correct: 0 },
        { title: `ربما زيد يصوم: معرفة بعد رُبَّما`, kind: 'mcq', prompt: `رُبَّمَا زَيْدٌ يَصُومُ has زيد, a معرفة, following رُبَّمَا. Could plain رُبَّ, without ما الكافة, take a معرفة مجرورة this way?`, options: [`No — plain رُبَّ is restricted to نكرة; ما الكافة opens the door to معرفة`, `Yes — plain رُبَّ works with معرفة exactly the same`, `Yes, but only in poetry`, `رُبَّ can never be followed by a معرفة under any reading`], correct: 0 },
        { title: `ربما يودّ الذين كفروا: لغز التقليل`, kind: 'mcq', prompt: `﴿رُبَمَا يَوَدُّ الَّذِينَ كَفَرُوا لَوْ كَانُوا مُسْلِمِينَ﴾ leans toward تقليل after ما الكافة, yet the wishing described will happen constantly. What resolves the tension?`, options: [`Three answers are offered: رُبَّما can still carry تكثير in context, or the disbelievers' preoccupation leaves regret only scattered, or the تقليل is used rhetorically for تهكم`, `The آية is simply a grammatical error`, `رُبَّما never actually attaches to قد before a فعل مضارع`, `تكثير and تقليل are identical meanings with no real distinction`], correct: 0 },
        { title: `تخفيف باء رُبَّ`, kind: 'mcq', prompt: `The ب of رُبَّ can be lightened. What form does this produce, and where is it attested?`, options: [`رُبَ, with one ب — as in the مصحف spelling رُبَمَا يَوَدُّ`, `رَبّ, with a فتحة — never attested in the مصحف`, `رِبَّ, with a كسرة — never attested`, `The ب can never be lightened at all`], correct: 0 },
        { title: `حذف رُبَّ: بعد الواو أكثر من الفاء`, kind: 'mcq', prompt: `رُبَّ can be dropped while its عمل stays behind. After which connective is this more common — الواو or الفاء؟`, options: [`الواو — more common than after الفاء`, `الفاء — more common than after الواو`, `Both are equally common`, `Neither connective allows حذف رُبَّ`], correct: 0 },
        { title: `مما يحرك شفتيه: مِمّا بمعنى رُبَّ`, kind: 'mcq', prompt: `كَانَ ﷺ مِمَّا يُحَرِّكُ شَفَتَيْهِ uses مِمَّا with a shifted meaning. What does مِمَّا mean here?`, options: [`"Often" — carrying the meaning of رُبَّ`, `"From that which," its ordinary sense`, `"Because," carrying تعليل`, `"Together with," carrying مصاحبة`], correct: 0 },
        {
          title: `تركيب: رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا.`,
          source: `رُبَّ شَهْوَةٍ تُورِثُ حُزْنًا طَوِيلًا`,
          words: [`رُبَّ`, `شَهْوَةٍ`, `تُورِثُ`, `حُزْنًا`, `طَوِيلًا`],
          labels: [`حرف جر شبيه بالزائد، للتكثير`, `مجرور برُبَّ، نكرة`, `فعل مضارع، والجملة صفة لشهوة`, `مفعول به`, `نعت`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ.`,
          source: `رُبَّهُ رَجُلًا كَرِيمًا لَقِيتُهُ`,
          words: [`رُبَّهُ`, `رَجُلًا`, `كَرِيمًا`, `لَقِيتُهُ`],
          labels: [`رُبَّ وضمير مبهم مجرور بها`, `تمييز يفسر الضمير`, `نعت لرجلا`, `فعل ماضٍ وفاعله ومفعوله`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: رُبَّ رَجُلٍ يَفْعَلُ الخَيْرَ لَقِيتُهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of رُبَّ رَجُلٍ يَفْعَلُ الخَيْرَ لَقِيتُهُ.`,
          source: `رُبَّ رَجُلٍ يَفْعَلُ الخَيْرَ لَقِيتُهُ`,
          words: [`رُبَّ`, `رَجُلٍ`, `يَفْعَلُ`, `الخَيْرَ`, `لَقِيتُهُ`],
          labels: [`حرف جر شبيه بالزائد`, `مجرور برُبَّ، نكرة`, `فعل مضارع، والجملة صفة لرجل`, `مفعول به`, `فعل ماضٍ وفاعله ومفعوله`],
          distractors: [`مفعول له`, `تمييز`],
        },
        {
          title: `تركيب: رُبَّمَا يَصُومُ زَيْدٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of رُبَّمَا يَصُومُ زَيْدٌ.`,
          source: `رُبَّمَا يَصُومُ زَيْدٌ`,
          words: [`رُبَّمَا`, `يَصُومُ`, `زَيْدٌ`],
          labels: [`رُبَّ وما الكافة`, `فعل مضارع`, `فاعل`],
          distractors: [`مفعول به`, `مبتدأ`],
        },
        {
          title: `تركيب: رُبَّمَا زَيْدٌ يَصُومُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of رُبَّمَا زَيْدٌ يَصُومُ.`,
          source: `رُبَّمَا زَيْدٌ يَصُومُ`,
          words: [`رُبَّمَا`, `زَيْدٌ`, `يَصُومُ`],
          labels: [`رُبَّ وما الكافة`, `مبتدأ`, `خبر: جملة فعلية`],
          distractors: [`فاعل`, `مفعول به`],
        },
        {
          title: `تركيب: وَلَيْلٍ كَمَوْجِ الْبَحْرِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَلَيْلٍ كَمَوْجِ الْبَحْرِ.`,
          source: `وَلَيْلٍ كَمَوْجِ الْبَحْرِ`,
          words: [`وَ`, `لَيْلٍ`, `كَمَوْجِ`, `الْبَحْرِ`],
          labels: [`نائبة عن رُبَّ (أو عاطفة على تقدير حذف رُبَّ)`, `مجرور بالواو، نكرة`, `الكاف ومجرورها: نعت للیل`, `مجرور بالكاف`],
          distractors: [`مفعول له`, `حال`],
        },
      ],
    },
    // ---------------------------------------------------------------- L6
    {
      id: 'l6',
      title: 'التبعيضية وحاشا',
      subtitle: `the second and third حروف شبيهة بالزائد, closing with a lingering question about الكاف's own classification`,
      concepts: [
        {
          heading: 'مِن التبعيضية',
          lines: [
            { html: `<bdi>مِنْ</bdi> in this use is the second of the three particles حرف الجر الشبيه بالزائد.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ﴾`] } },
            { html: `"And there has certainly come to you some of the news of the messengers."`, list: false },
            { box: { title: 'Example', lines: [`عِنْدِي مِنْ مَاءٍ`] } },
            { html: `"I have some water." Here مِنْ does not carry its usual أصلي senses — ابتداء الغاية and the rest met earlier. Instead it functions as <bdi>مِنْ التَّبْعِيضِيَّة</bdi>, "partitive مِنْ," marking that only part of something is meant: not all the news of the messengers, only some of it; not water in general, but some water.`, list: false },
          ],
          exercise: {
            prompt: `عِنْدِي مِنْ مَاءٍ, "I have some water," uses مِنْ التبعيضية. What does it mark?`,
            kind: 'mcq',
            options: [`That only part of the thing is meant — some water, not water in general`, `That the speaker has none of the water at all`, `The starting point of a journey, ابتداء الغاية`, `A comparison between two things`],
            correct: 0,
          },
        },
        {
          heading: 'حاشا: أداة استثناء تُنزّه المستثنى',
          lines: [
            { html: `<bdi>حَاشَا</bdi> is the third of the three particles حرف الجر الشبيه بالزائد.`, list: false },
            { box: { title: 'Example', lines: [`هَلَكَ النَّاسُ حَاشَا العَالِمَ`] } },
            { html: `"People are ruined, except the scholar."`, list: false },
            { box: { title: 'Rule', lines: [`حَاشَا لِتَنْزِيهِ المُسْتَثْنَى مِنَ العَيْبِ وَالذَّمِّ الَّذِي نُسِبَ إِلَى مَا قَبْلَهَا`] } },
            { html: `حَاشَا functions as an <bdi>أداة استثناء</bdi>, an exception particle, much like إِلَّا — but it carries an extra nuance.`, list: false },
            { table: { title: 'حاشا مقابل إلا', headers: ['', 'إِلَّا', 'حَاشَا'], rows: [
              [`Function`, `plain exception`, `exception + declares the exempted item free of the fault`],
              [`جَاءَ النَّاسُ إِلَّا زَيْدًا`, `Zayd simply didn't come — no judgment implied`, `—`],
              [`هَلَكَ النَّاسُ حَاشَا العَالِمَ`, `—`, `the scholar is affirmed free of the ruin/fault described`],
            ] } },
          ],
          exercise: {
            prompt: `جَاءَ النَّاسُ إِلَّا زَيْدًا and هَلَكَ النَّاسُ حَاشَا العَالِمَ both exclude one person from a group. What does حَاشَا add that plain إِلَّا does not?`,
            kind: 'mcq',
            options: [`It declares the excluded item free of the very fault attributed to everyone else, not merely absent from the group`, `It makes the exclusion optional rather than certain`, `It reverses the meaning, including the person instead of excluding them`, `Nothing — حاشا and إلا are functionally identical`],
            correct: 0,
          },
        },
        {
          heading: 'حاشا: المعنى الروحي لا الحسي، وأصلها اللغوي',
          lines: [
            { box: { title: 'Careful', lines: [`هَلَكَ هُنَا هَلَاكٌ مَعْنَوِيٌّ بِفَقْدِ المَعْرِفَةِ، لَا مَوْتٌ حِسِّيٌّ`] } },
            { html: `هَلَكَ النَّاسُ حَاشَا العَالِمَ does not describe physical death — هَلَكَ here means "ruined," spiritually and otherwise, through lacking true <bdi>مَعْرِفَة</bdi> of الله.`, list: false },
            { html: `حَاشَا العَالِمَ does not just exclude the عالم from the group; it affirms the عالم is untouched by the very fault — the lack of معرفة — attributed to everyone else.`, list: false },
            { html: `حَاشَا's root sense, from <bdi>حَاشِيَة</bdi>, "the margin, the edge of a page," is "to set at a distance" — exactly its grammatical job here.`, list: false },
          ],
          exercise: {
            prompt: `حَاشَا's root sense comes from حَاشِيَة, "the margin, the edge of a page." What does that root sense capture about حاشا's grammatical job?`,
            kind: 'mcq',
            options: [`"To set at a distance" — exactly what حاشا does by exempting its مستثنى from the fault attributed to the group`, `"To join together" — حاشا merges two groups into one`, `"To repeat" — حاشا doubles the meaning of the verb`, `Nothing — the root sense has no connection to its grammatical use`],
            correct: 0,
          },
        },
        {
          heading: 'فائدة: تصنيف الكاف — أصلية أم شبيهة بالزائد؟',
          lines: [
            { box: { title: 'Careful', lines: [`اخْتَلَفُوا فِي الكَافِ أَهِيَ أَصْلِيٌّ أَوْ شَبِيهٌ بِالزَّائِدِ فَقَوْلَانِ`] } },
            { html: `الكاف, already studied earlier as a حرف جر أصلي (تشبيه), is itself a point of disagreement over exactly this classification.`, list: false },
            { box: { title: 'Example', lines: [`الْعِلْمُ كَالنُّورِ`] } },
            { html: `"Knowledge is like light."`, list: false },
            { table: { title: 'العلم كالنور: الوجهان', headers: ['Reading', 'الكاف treated as', 'إعراب النور'], rows: [
              [`الأول`, `حرف جر أصلي`, `مُتَعَلِّق بظرف مستقر محذوف — as if العلمُ ثابتٌ كالنور`],
              [`الثاني`, `شَبِيه بالزائد, بمعنى مِثْل`, `في محل خبر, directly`],
            ] } },
            { html: `Both readings reach the same meaning; they differ only in how much extra machinery the إعراب requires to get there.`, list: false },
          ],
          exercise: {
            prompt: `الْعِلْمُ كَالنُّورِ admits two إعراب readings for النور depending on how الكاف is classified. What are they?`,
            kind: 'mcq',
            options: [`متعلق بظرف مستقر محذوف (الكاف أصلي), or في محل خبر مباشرة (الكاف شبيه بالزائد بمعنى مثل)`, `فاعل, or نائب فاعل`, `مبتدأ, or بدل`, `Only one reading is possible; there is no real disagreement`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `﴿وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ﴾ uses مِنْ التبعيضية. What does it mark?`, options: [`That only some of the news of the messengers is meant, not all of it`, `The starting point of a journey`, `A comparison between two things`, `A reason or cause`], correct: 0 },
        { q: `عِنْدِي مِنْ مَاءٍ, "I have some water," illustrates which use of مِنْ؟`, options: [`مِنْ التبعيضية`, `مِنْ لابتداء الغاية`, `مِنْ الزائدة`, `مِنْ بمعنى في`], correct: 0 },
        { q: `هَلَكَ النَّاسُ حَاشَا العَالِمَ uses حَاشَا rather than إِلَّا. What does حَاشَا add beyond a plain exception?`, options: [`It declares the excluded item free of the very fault attributed to the group`, `It makes the exception optional`, `It reverses the exclusion, including the person instead`, `Nothing — the two particles mean exactly the same thing`], correct: 0 },
        { q: `In هَلَكَ النَّاسُ حَاشَا العَالِمَ, does هَلَكَ describe literal physical death?`, options: [`No — it describes spiritual ruin, through lacking true معرفة of الله`, `Yes — it describes literal death`, `Yes, but only for العالم`, `Neither — the sentence has no real meaning`], correct: 0 },
        { q: `حَاشَا's root sense comes from حَاشِيَة, "the margin, the edge of a page." What does that root sense capture?`, options: [`"To set at a distance" — matching حاشا's grammatical job of exempting its مستثنى`, `"To join together"`, `"To repeat an action"`, `Nothing relevant to its grammatical use`], correct: 0 },
        { q: `الْعِلْمُ كَالنُّورِ admits two إعراب readings for النور. What are they?`, options: [`متعلق بظرف مستقر محذوف (الكاف أصلي), or في محل خبر مباشرة (الكاف شبيه بالزائد بمعنى مثل)`, `فاعل, or مفعول به`, `مضاف إليه, or بدل`, `Only one reading is possible`], correct: 0 },
      ],
      bank: [
        { title: `مِن التبعيضية: التعريف`, kind: 'mcq', prompt: `What does مِن التبعيضية mark, as distinct from مِن's أصلي senses like ابتداء الغاية?`, options: [`That only part of something is meant, not the whole`, `The starting point of a journey`, `A comparison between two things`, `The instrument used to perform an action`], correct: 0 },
        { title: `جاءك من نبإ المرسلين: بعض لا كل`, kind: 'mcq', prompt: `﴿وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ﴾ does not mean that all the news of the messengers came. What does مِنْ mark instead?`, options: [`That only some of the news came, not the whole of it`, `That none of the news came`, `That the news came from a specific place`, `That the news came before a specific time`], correct: 0 },
        { title: `عندي من ماء: بعض الماء`, kind: 'mcq', prompt: `عِنْدِي مِنْ مَاءٍ means "I have some water," not "I have water in general." What role does مِنْ play?`, options: [`مِنْ التبعيضية`, `مِنْ الزائدة، بلا معنى`, `مِنْ لابتداء الغاية`, `مِنْ بمعنى عن`], correct: 0 },
        { title: `مِن التبعيضية بين الحروف الشبيهة بالزائد`, kind: 'mcq', prompt: `مِن التبعيضية is the second of the three particles حرف الجر الشبيه بالزائد. What are the other two?`, options: [`رُبَّ وحَاشَا`, `الكاف وحتى`, `واو القسم وتاء القسم`, `مذ ومنذ`], correct: 0 },
        { title: `حاشا: التعريف كأداة استثناء`, kind: 'mcq', prompt: `Which of the following best describes حَاشَا's grammatical function?`, options: [`أداة استثناء تنزه المستثنى من العيب المنسوب إلى ما قبلها`, `أداة استثناء بلا أي معنى إضافي`, `أداة تعليل`, `أداة تشبيه`], correct: 0 },
        { title: `جاء الناس إلا زيدا: بلا حكم`, kind: 'mcq', prompt: `جَاءَ النَّاسُ إِلَّا زَيْدًا excludes زيد with plain إلا. Does this imply any judgment about زيد?`, options: [`No — إلا only says Zayd didn't come, with no judgment implied`, `Yes — it implies زيد was praised`, `Yes — it implies زيد was blamed`, `It implies زيد came anyway`], correct: 0 },
        { title: `هلك الناس حاشا العالم: تنزيه`, kind: 'mcq', prompt: `هَلَكَ النَّاسُ حَاشَا العَالِمَ does more than exclude العالم from هلاك. What does it affirm about العالم؟`, options: [`That the عالم is untouched by the very fault attributed to everyone else`, `That the عالم also perished, just later`, `That the عالم caused the هلاك of the others`, `Nothing further — it is a plain exclusion like إلا`], correct: 0 },
        { title: `هلك: معنوي لا حسي`, kind: 'mcq', prompt: `In هَلَكَ النَّاسُ حَاشَا العَالِمَ, what does هَلَكَ actually mean?`, options: [`Spiritual ruin, through lacking true معرفة of الله`, `Literal physical death`, `Financial loss`, `Military defeat`], correct: 0 },
        { title: `أصل حاشا: من الحاشية`, kind: 'mcq', prompt: `حَاشَا's root sense comes from حَاشِيَة. What does حاشية literally mean?`, options: [`The margin, the edge of a page`, `The center of a page`, `A written line of poetry`, `A formal legal document`], correct: 0 },
        { title: `أصل حاشا: وضع على مسافة`, kind: 'mcq', prompt: `What does حَاشَا's root sense, "to set at a distance," capture about its grammatical job?`, options: [`It exempts its مستثنى, setting it apart from the fault attributed to the group`, `It draws the مستثنى closer to the group`, `It has no connection to حاشا's actual grammatical use`, `It marks a location, not an exception`], correct: 0 },
        { title: `الكاف: التصنيف المختلف فيه`, kind: 'mcq', prompt: `الكاف was studied earlier as a حرف جر أصلي (تشبيه). What further debate does the lesson raise about it?`, options: [`Whether it should instead be classified as شبيه بالزائد`, `Whether it is actually a فعل`, `Whether it ever means تعليل`, `Whether it can attach to a pronoun after all`], correct: 0 },
        { title: `العلم كالنور: الوجه الأول`, kind: 'mcq', prompt: `On the first reading of الْعِلْمُ كَالنُّورِ, الكاف is treated as حرف جر أصلي. How is النور's إعراب explained on that reading?`, options: [`متعلق بظرف مستقر محذوف, as if العلمُ ثابتٌ كالنور`, `في محل خبر مباشرة`, `مبتدأ ثانٍ`, `بدل من العلم`], correct: 0 },
        { title: `العلم كالنور: الوجه الثاني`, kind: 'mcq', prompt: `On the second reading of الْعِلْمُ كَالنُّورِ, الكاف is treated as شبيه بالزائد, meaning مِثْل. How is النور's إعراب explained on that reading?`, options: [`في محل خبر مباشرة`, `متعلق بظرف مستقر محذوف`, `مفعول به مباشر`, `توكيد معنوي`], correct: 0 },
        { title: `العلم كالنور: نفس المعنى، آليتان مختلفتان`, kind: 'mcq', prompt: `The two readings of الْعِلْمُ كَالنُّورِ differ in mechanism but not in outcome. What do they agree on?`, options: [`Both readings reach the same overall meaning`, `They reach entirely different meanings`, `Only one reading is grammatically valid at all`, `They differ in the meaning of العلم itself`], correct: 0 },
        {
          title: `تركيب: وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ.`,
          source: `وَلَقَدْ جَاءَكَ مِنْ نَبَإِ الْمُرْسَلِينَ`,
          words: [`وَلَقَدْ`, `جَاءَكَ`, `مِنْ`, `نَبَإِ الْمُرْسَلِينَ`],
          labels: [`واو استئناف ولام توطئة وحرف تحقيق`, `فعل ماضٍ ومفعوله`, `حرف جر للتبعيض`, `فاعل مجرور لفظا بمن ومضاف إليه`],
          distractors: [`مفعول له`, `حال`],
        },
        {
          title: `تركيب: عِنْدِي مِنْ مَاءٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of عِنْدِي مِنْ مَاءٍ.`,
          source: `عِنْدِي مِنْ مَاءٍ`,
          words: [`عِنْدِي`, `مِنْ`, `مَاءٍ`],
          labels: [`ظرف مكان وهو خبر مقدم، والياء مضاف إليه`, `حرف جر للتبعيض`, `مبتدأ مؤخر مجرور لفظا بمن`],
          distractors: [`مفعول به`, `حال`],
        },
        {
          title: `تركيب: هَلَكَ النَّاسُ حَاشَا العَالِمَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of هَلَكَ النَّاسُ حَاشَا العَالِمَ.`,
          source: `هَلَكَ النَّاسُ حَاشَا العَالِمَ`,
          words: [`هَلَكَ`, `النَّاسُ`, `حَاشَا`, `العَالِمَ`],
          labels: [`فعل ماضٍ`, `فاعل`, `أداة استثناء، حرف جر شبيه بالزائد`, `مستثنى مجرور بحاشا`],
          distractors: [`مفعول به`, `بدل`],
        },
      ],
    },
  ],
};

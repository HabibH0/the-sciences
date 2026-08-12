// Module 19 — الاستفهام والاستقبال والتفسير والتنوين
//
// Source: app-lessons/100-harfay-istifham.md through
// app-lessons/103-tanwin.md (الكبرى في النحو), closing out الباب الثاني's
// الحرف غير العامل chapter. Per COURSE-MAP.md's Module 19 plan: l1 merges
// 100 (حرفا الاستفهام: الهمزة وهل) and 101 (حرفا الاستقبال: السين وسوف) —
// both are short, symmetric two-particle comparisons that read naturally
// as one lesson; l2 covers 102 (حرفا التفسير: أيْ وأنْ) alone; l3 covers
// 103 (التنوين وأقسامه) alone. The survey held up once every source file
// was read in full — no boundary changes from the proposal.
//
// Concept bodies use the lines[]/box/table/tarkeebDiagram shape
// established in module-01.js. The opening "Definition Box" in each
// source file (القسم الحادي عشر..., القسم الثالث عشر..., القسم الرابع
// عشر..., القسم الثامن عشر...) is verbatim matn declaring the chapter's
// numbered قسم, the same shape module-09.js treated as Core Text for
// app-lessons/040's own opening "Definition Box" — so it renders as Core
// Text here too, matching that precedent. Bank تركيب items use the flat
// words[]/labels[]/distractors[] schema, matching every prior authored
// module in this course. l1 and l2 draw their تركيب items from every
// genuinely quoted آية or worked example in 100-102 that the source
// itself analyses (five each); l3's تركيب items are capped at two, since
// 103's own worked examples are almost entirely single-word contrasts
// (زَيْدٌ vs بَيْتٌ, صَهْ vs صَهٍ, سيبَوَيْه vs سيبَوَيْهٍ) that a
// word-to-label تركيب item cannot meaningfully represent — only its two
// تعويض عن كلمة/جملة examples (كُلٌّ آمَنَ, وَيَوْمَئِذٍ يَفْرَحُ
// الْمُؤْمِنونَ) are genuine multi-word constructions, the same
// discipline every prior module applied to its own thin spots.
export default {
  id: '19',
  title: 'الاستفهام والاستقبال والتفسير والتنوين',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف غير العامل',
  blurb: 'حرفا الاستفهام (الهمزة وهل), حرفا الاستقبال (السين وسوف), حرفا التفسير (أيْ وأنْ), then التنوين and its four أقسام, closing out الحرف غير العامل.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'حرفا الاستفهام وحرفا الاستقبال',
      subtitle: 'The Two Interrogatives and the Two Futurizers — الهمزة وهل’s تصديق vs تصوّر, and السين وسوف’s near vs far future',
      concepts: [
        {
          heading: 'القسم الحادي عشر: حرفا الاستفهام',
          lines: [
            { html: `The eleventh <bdi>قسم</bdi> of الحرف غير العامل covers <bdi>حرفا الاستفهام</bdi> — the two particles of questioning, <bdi>الهمزة</bdi> and <bdi>هل</bdi>.`, list: false },
            { box: { title: 'Core Text', lines: [`القِسْمُ الحَادِي عَشَرَ: حَرْفَا الِاسْتِفْهَامِ. الأَوَّلُ الهَمْزَةُ، نَحْوَ: ﴿أَأَنْتُمْ أَعْلَمُ أَمِ اللهُ﴾، وَنَحْوَ: ﴿أَكَفَرْتُمْ بَعْدَ إيمانِكُمْ﴾. الثَّانِي هَلْ، نَحْوَ: ﴿فَهَلْ أَنْتُمْ مُنْتَهُونَ﴾، وَنَحْوَ: ﴿هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ﴾.`] } },
            { html: `Neither particle has a <bdi>محل من الإعراب</bdi> of its own, and both can open either a <bdi>جملة اسمية</bdi> or a <bdi>جملة فعلية</bdi>: (1) ﴿أَأَنْتُمْ أَعْلَمُ﴾ and ﴿فَهَلْ أَنْتُمْ مُنْتَهُونَ﴾ open nominal sentences, (2) ﴿أَكَفَرْتُمْ﴾ and ﴿هَلْ يَسْتَوِي...﴾ open verbal ones.`, list: false },
          ],
          exercise: {
            prompt: `Which two particles make up حرفا الاستفهام in الحرف غير العامل؟`,
            kind: 'mcq',
            options: [`الهمزة وهل`, `السين وسوف`, `أيْ وأنْ`, `الفاء واللام`],
            correct: 0,
          },
        },
        {
          heading: 'التصديق والتصوّر',
          lines: [
            { box: { title: 'Rule', lines: [`الهَمْزَةُ تَأْتِي لِلتَّصْدِيقِ وَلِلتَّصَوُّرِ، وَهَلْ لِلتَّصْدِيقِ فَقَطْ`] } },
            { html: `Questions split into two logical types: (1) <bdi>تصديق</bdi> — a polar question answerable with a plain "yes" or "no" (<bdi>نعم</bdi> / <bdi>لا</bdi>), confirming or denying one proposition; (2) <bdi>تصوّر</bdi> — a non-polar question that instead demands a choice between two or more named options. الهمزة can introduce either type; هل is restricted to تصديق alone.`, list: false },
            { box: { title: 'Example', lines: [`أَتَقُولُونَ عَلَى اللهِ مَا لَا تَعْلَمُونَ`] } },
            { html: `"Do you say about Allah what you do not know?" is posed rhetorically, but its grammatical shape is still polar — a "yes/no" question in form, even though the real intent is reproach rather than genuine inquiry.`, list: false },
            { box: { title: 'Example', lines: [`ءَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ`] } },
            { html: `Yūsuf عليه السلام asks his fellow prisoners: "Are separate/multiple lords better, or Allah, the One, the Prevailing?" No "yes" or "no" answers this — the listener must choose one of the two named options. This is تصوّر, and only الهمزة, not هل, can introduce it.`, list: false },
          ],
          exercise: {
            prompt: `ءَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ demands a choice between two named options, not a yes/no answer. What kind of question is that, and which of the two استفهام particles could open it?`,
            kind: 'mcq',
            options: [`تصوّر — only الهمزة can introduce it, not هل`, `تصديق — either الهمزة or هل can introduce it`, `تصوّر — only هل can introduce it`, `تصديق — only هل can introduce it`],
            correct: 0,
          },
        },
        {
          heading: 'دخول الإيجاب والنفي',
          lines: [
            { box: { title: 'Rule', lines: [`الهَمْزَةُ تَدْخُلُ عَلَى الإِيجَابِ وَالنَّفْيِ، وَهَلْ لَا تَدْخُلُ إِلَّا عَلَى الإِيجَابِ`] } },
            { html: `الهمزة is the more flexible of the two: it can open either a positive (<bdi>إيجاب</bdi>) sentence or a negative (<bdi>نفي</bdi>) one. هل, by contrast, only ever opens a positive sentence.`, list: false },
            { box: { title: 'Example', lines: [`أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ`] } },
            { html: `"Did We not expand for you your breast?" — الهمزة here precedes a negated verb, <bdi>لَمْ نَشْرَحْ</bdi>, something هل could not do; there is no equivalent هَلْ لَمْ construction in the language.`, list: false },
          ],
          exercise: {
            prompt: `أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ opens with الهمزة directly before a negated verb, لَمْ نَشْرَحْ. Could هل open the same negated construction instead?`,
            kind: 'mcq',
            options: [`No — هل only ever opens a positive sentence, never a negated one`, `Yes — هل and الهمزة both enter freely on النفي`, `Yes, but only when the verb is مضارع`, `No — الهمزة cannot enter on النفي either`],
            correct: 0,
          },
        },
        {
          heading: 'ترتيب الهمزة وهل مع العاطف',
          lines: [
            { box: { title: 'Rule', lines: [`الهَمْزَةُ تَسْبِقُ العَاطِفَةَ، وَهَلْ تَلِي العَاطِفَةَ`] } },
            { html: `When a استفهام particle needs to combine with a <bdi>حرف عطف</bdi> at the start of a sentence, the two order themselves differently depending on which استفهام particle is involved: الهمزة comes before the عاطف, while هل comes after it.`, list: false },
            { box: { title: 'Example', lines: [`أَوَمَنْ كَانَ مَيْتًا`] } },
            { html: `The همزة أَ comes first, then the عاطف وَ, then مَنْ. You would never see وَأَ, عاطف then همزة — the order is fixed with الهمزة leading.`, list: false },
            { box: { title: 'Example', lines: [`وَهَلْ أَتَاكَ حَدِيثُ مُوسَى`] } },
            { html: `"And has the story of Mūsā reached you?" — here the order is reversed: the عاطف وَ comes first, then هل. You would not see هَلْ وَأَتَاكَ; هل always follows a preceding عاطف rather than leading it.`, list: false },
            { box: { title: 'Careful', lines: [`مَعْرِفَةُ هَذَا التَّرْتِيبِ تُبَيِّنُ أَيَّ حَرْفَيِ الِاسْتِفْهَامِ يُسْتَعْمَلُ قَبْلَ قِرَاءَةِ بَقِيَّةِ الجُمْلَةِ`] } },
            { html: `Glancing at whether a sentence opens أَوَ... or وَهَلْ... instantly tells you which استفهام particle is in play, even before parsing the rest of the sentence.`, list: false },
          ],
          exercise: {
            prompt: `A sentence needs to combine a حرف استفهام with a حرف عطف at its start. Which order is correct?`,
            kind: 'mcq',
            options: [`الهمزة precedes the عاطف (أَوَ...); هل follows the عاطف (وَهَلْ...)`, `Both always precede the عاطف`, `Both always follow the عاطف`, `هل precedes the عاطف; الهمزة follows it`],
            correct: 0,
          },
        },
        {
          heading: 'القسم الثالث عشر: حرفا الاستقبال',
          lines: [
            { html: `<bdi>حرفا الاستقبال</bdi> "futurize" a <bdi>فعل مضارع</bdi>: <bdi>السين</bdi> and <bdi>سوف</bdi>. A فعل مضارع can ordinarily carry either a present or a future sense, but once either of these two particles attaches to it, its meaning locks into the future.`, list: false },
            { box: { title: 'Core Text', lines: [`القِسْمُ الثَّالِثَ عَشَرَ: حَرْفَا الِاسْتِقْبَالِ. الأَوَّلُ السِّينُ، وَهِيَ لِإِثْبَاتِ المُسْتَقْبَلِ القَرِيبِ فِي مُقَابَلَةِ لَا، نَحْوَ: ﴿سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ﴾. مَسْأَلَةٌ: تُسَمَّى السِّينُ حَرْفَ تَنْفِيسٍ. الثَّانِي سَوْفَ، وَهِيَ لِإِثْبَاتِ المُسْتَقْبَلِ البَعِيدِ فِي مُقَابَلَةِ لَنْ، نَحْوَ: ﴿سَوْفَ تَعْلَمُونَ﴾.`] } },
            { html: `The two particles are not interchangeable: (1) السين marks the near future, and pairs against <bdi>لا</bdi> in negation; (2) سوف marks the far future, and pairs against <bdi>لن</bdi> in negation.`, list: false },
          ],
          exercise: {
            prompt: `السين and سوف both attach to a فعل مضارع and lock its meaning into the future. What distinguishes the two?`,
            kind: 'mcq',
            options: [`السين marks the near future (paired against لا); سوف marks the far future (paired against لن)`, `السين marks the far future; سوف marks the near future`, `Only السين futurizes a فعل مضارع; سوف does something else entirely`, `They are fully interchangeable, with no difference in meaning`],
            correct: 0,
          },
        },
        {
          heading: 'تنفيس وتسويف: القرب والبعد',
          lines: [
            { table: { title: 'السين وسوف', headers: ['Particle', 'Time', 'Negative counterpart', 'Its own name'], rows: [
              [`السين`, `المستقبل القريب`, `لا`, `حرف تنفيس`],
              [`سوف`, `المستقبل البعيد`, `لن`, `حرف تسويف`],
            ] } },
            { html: `السين is named <bdi>حرف تنفيس</bdi>, a particle of relief or breathing space, from the sense of "opening up" the verb into the near future. سوف is named <bdi>حرف تسويف</bdi>, from the verb <bdi>سَوَّفَ</bdi>, "to keep putting off" — the same root behind <bdi>المسوّفون</bdi>, those who constantly say "I'll do it later."`, list: false },
            { box: { title: 'Example', lines: [`سَيَشِبُّ الغُلَامُ`, `وَسَوْفَ يَشِيخُ الفَتَى`] } },
            { html: `"The boy will soon grow into a young man" set beside "and after a long time, the young man will become an old man" makes the contrast vivid: turning from boy to young man is comparatively near; growing old is comparatively far. The nearness and farness are relative to one another, not fixed spans of time — السين's future is simply nearer than سوف's.`, list: false },
          ],
          exercise: {
            prompt: `سَيَشِبُّ الغُلَامُ and وَسَوْفَ يَشِيخُ الفَتَى both describe a change to come, but one is nearer than the other. Which particle marks the nearer change, and what is it named for that sense?`,
            kind: 'mcq',
            options: [`السين — نامed حرف تنفيس`, `سوف — named حرف تنفيس`, `السين — named حرف تسويف`, `سوف — named حرف تسويف`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `هل is restricted to one of the two logical question types الهمزة can express. Which type can هل never introduce?`, options: [`تصوّر — a choice between two or more named options`, `تصديق — a plain yes/no question`, `Neither type — هل cannot introduce any question`, `Both types equally`], correct: 0 },
        { q: `أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ opens with الهمزة directly before a negated verb. What does this show about الهمزة compared to هل?`, options: [`الهمزة can enter on both الإيجاب and النفي; هل only ever enters on الإيجاب`, `Both enter equally on النفي`, `هل enters on النفي but الهمزة does not`, `Neither particle can enter on النفي`], correct: 0 },
        { q: `A sentence opens وَهَلْ..., عاطف then هل. Could it instead open هَلْ وَ..., هل then عاطف?`, options: [`No — هل always follows a preceding عاطف rather than leading it`, `Yes — the order is free`, `Yes, but only in poetry`, `No — هل can never combine with a عاطف at all`], correct: 0 },
        { q: `سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ describes something that will happen soon. Which حرف استقبال produces that sense, and what is its negative counterpart?`, options: [`السين — its negative counterpart is لا`, `سوف — its negative counterpart is لن`, `السين — its negative counterpart is لن`, `سوف — its negative counterpart is لا`], correct: 0 },
        { q: `سوف takes its own name from the verb سَوَّفَ, "to keep putting off." What is that name?`, options: [`حرف تسويف`, `حرف تنفيس`, `حرف تصديق`, `حرف تصوّر`], correct: 0 },
        { q: `ءَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ cannot be answered with a plain "yes" or "no." What kind of question is it, and which particle introduced it?`, options: [`تصوّر, introduced by الهمزة`, `تصديق, introduced by هل`, `تصوّر, introduced by هل`, `تصديق, introduced by الهمزة`], correct: 0 },
      ],
      bank: [
        { title: `حرفا الاستفهام: naming the pair`, kind: 'mcq', prompt: `Which two particles together make up حرفا الاستفهام?`, options: [`الهمزة وهل`, `السين وسوف`, `أيْ وأنْ`, `الواو والفاء`], correct: 0 },
        { title: `محل من الإعراب`, kind: 'mcq', prompt: `Do الهمزة and هل occupy a محل من الإعراب of their own?`, options: [`No — neither particle has a محل من الإعراب`, `Yes — both are always مبتدأ`, `Only الهمزة does`, `Only هل does`], correct: 0 },
        { title: `اسمية أو فعلية`, kind: 'mcq', prompt: `فَهَلْ أَنْتُمْ مُنْتَهُونَ opens a جملة اسمية, while ﴿أَكَفَرْتُمْ بَعْدَ إيمانِكُمْ﴾ opens a جملة فعلية. What does this show about حرفا الاستفهام?`, options: [`Both particles can introduce either a جملة اسمية or a جملة فعلية`, `الهمزة only introduces جملة فعلية`, `هل only introduces جملة اسمية`, `Neither particle can introduce a جملة فعلية`], correct: 0 },
        { title: `تصديق: definition`, kind: 'mcq', prompt: `A تصديق question is answerable with a plain نعم or لا. What kind of question is it — polar or a choice between options?`, options: [`A polar yes/no question`, `A non-polar choice between two or more options`, `Neither — تصديق never expects an answer`, `A question that is always rhetorical`], correct: 0 },
        { title: `تصوّر: definition`, kind: 'mcq', prompt: `A تصوّر question cannot be answered with نعم or لا. What must the listener do instead?`, options: [`Choose between two or more specific options named in the question`, `Simply confirm or deny one proposition`, `Answer with silence`, `Repeat the question back`], correct: 0 },
        { title: `أتقولون على الله: تصديق despite being rhetorical`, kind: 'mcq', prompt: `أَتَقُولُونَ عَلَى اللهِ مَا لَا تَعْلَمُونَ is posed rhetorically, with no literal answer expected. Is it still grammatically تصديق or تصوّر?`, options: [`تصديق — its grammatical shape is still polar, even though the intent is reproach`, `تصوّر — it offers the listener two named options`, `Neither — a rhetorical question has no type`, `تصوّر — rhetorical questions are always تصوّر`], correct: 0 },
        { title: `هل أنبئكم: only تصديق`, kind: 'mcq', prompt: `هَلْ أُنَبِّئُكُمْ بِشَرٍّ مِنْ ذَلِكَ مَثُوبَةً عِنْدَ اللهِ only ever admits a yes/no response. Could it be restructured into a تصوّر question the way an الهمزة question can?`, options: [`No — هل is restricted to تصديق alone`, `Yes — هل can introduce either type freely`, `Yes, but only in the Qur'an`, `No, because هل never introduces a question at all`], correct: 0 },
        { title: `الإيجاب والنفي: which particle is restricted`, kind: 'mcq', prompt: `Between الهمزة and هل, which one is restricted to opening only a positive (إيجاب) sentence?`, options: [`هل`, `الهمزة`, `Both are restricted equally`, `Neither is restricted`], correct: 0 },
        { title: `ألم نشرح: a construction هل cannot form`, kind: 'mcq', prompt: `أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ combines الهمزة with a negated verb, لَمْ نَشْرَحْ. Why is there no equivalent هَلْ لَمْ construction in the language?`, options: [`Because هل never enters on النفي at all`, `Because هل requires a مضارع verb without لَمْ`, `Because الهمزة cannot combine with لَمْ either`, `Because هَلْ لَمْ is simply rare, not disallowed`], correct: 0 },
        { title: `أومن كان ميتا: الهمزة leading the عاطف`, kind: 'mcq', prompt: `أَوَمَنْ كَانَ مَيْتًا places أَ before وَ. What does that ordering show?`, options: [`الهمزة precedes the عاطف when the two combine`, `الهمزة follows the عاطف when the two combine`, `The عاطف is dropped whenever الهمزة is present`, `الهمزة and the عاطف never combine in one sentence`], correct: 0 },
        { title: `وهل أتاك: هل following the عاطف`, kind: 'mcq', prompt: `وَهَلْ أَتَاكَ حَدِيثُ مُوسَى places وَ before هَلْ. Could the order instead be هَلْ وَأَتَاكَ؟`, options: [`No — هل always follows a preceding عاطف, never leads it`, `Yes — both orders are equally common`, `Yes, but only in poetic recitation`, `No — هل can never appear after a عاطف`], correct: 0 },
        { title: `Reading fluency: spotting the particle from word order`, kind: 'mcq', prompt: `A sentence opens أَوَ... rather than وَهَلْ.... What does that ordering alone already tell a reader, before parsing the rest of the sentence?`, options: [`The استفهام particle in play is الهمزة, not هل`, `The استفهام particle in play is هل, not الهمزة`, `The sentence cannot be a question at all`, `The verb that follows must be ماضٍ`], correct: 0 },
        { title: `حرفا الاستقبال: naming the pair`, kind: 'mcq', prompt: `Which two particles together make up حرفا الاستقبال?`, options: [`السين وسوف`, `الهمزة وهل`, `أيْ وأنْ`, `لا ولن`], correct: 0 },
        { title: `What حرفا الاستقبال do to a مضارع`, kind: 'mcq', prompt: `A فعل مضارع can ordinarily mean either present or future. What happens to that ambiguity once السين or سوف attaches to it?`, options: [`The verb's meaning locks into the future`, `The verb's meaning locks into the past`, `The ambiguity remains exactly as before`, `The verb stops being مضارع altogether`], correct: 0 },
        { title: `السين ↔ لا`, kind: 'mcq', prompt: `السين marks the near future. Which particle is its negative counterpart?`, options: [`لا`, `لن`, `لم`, `ما`], correct: 0 },
        { title: `سوف ↔ لن`, kind: 'mcq', prompt: `سوف marks the far future. Which particle is its negative counterpart?`, options: [`لن`, `لا`, `لم`, `إن`], correct: 0 },
        { title: `سيقول السفهاء: السين's imminence`, kind: 'mcq', prompt: `سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ describes objections that would soon arise. Does السين here mark something imminent or far off?`, options: [`Imminent — السين marks the near future`, `Far off — السين marks the far future`, `Neither — السين has no time sense at all`, `It marks the past, not the future`], correct: 0 },
        { title: `سوف تعلمون: not an immediate reckoning`, kind: 'mcq', prompt: `سَوْفَ تَعْلَمُونَ warns of a reckoning that is not immediate but will arrive in its due time. Which حرف استقبال produces that sense of delay?`, options: [`سوف`, `السين`, `لن`, `لا`], correct: 0 },
        { title: `حرف تنفيس: why السين is named that`, kind: 'mcq', prompt: `السين is called حرف تنفيس. What sense does that name capture?`, options: [`A sense of "opening up" the verb into the near future — relief or breathing space`, `A sense of endlessly postponing the verb's action`, `A sense of negating the verb entirely`, `A sense of doubling the verb's meaning`], correct: 0 },
        { title: `حرف تسويف: why سوف is named that`, kind: 'mcq', prompt: `سوف is called حرف تسويف, sharing its root with المسوّفون. What does that name capture?`, options: [`The sense of "putting off," constantly deferring an action to later`, `The sense of immediate, imminent action`, `The sense of negating the verb`, `The sense of doubling the verb's subject`], correct: 0 },
        { title: `Near and far are relative`, kind: 'mcq', prompt: `Comparing سَيَشِبُّ الغُلَامُ against وَسَوْفَ يَشِيخُ الفَتَى, are السين's "near" and سوف's "far" fixed spans of time, or relative to one another?`, options: [`Relative to one another — السين's future is simply nearer than سوف's`, `Fixed spans — السين always means within a day, سوف always means decades`, `They mark identical spans of time`, `Neither marks any span of time at all`], correct: 0 },
        {
          title: `تركيب: ءَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ءَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ, a تصوّر question offering two named options.`,
          source: `ءَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللهُ الْوَاحِدُ الْقَهَّارُ`,
          words: [`ءَ`, `أَرْبَابٌ مُتَفَرِّقُونَ`, `خَيْرٌ`, `أَمِ`, `اللهُ الْوَاحِدُ الْقَهَّارُ`],
          labels: [`حرف استفهام للتصوّر`, `الخيار الأول`, `مسند إليه الحكم بالخيرية`, `حرف عطف يفيد التصوّر`, `الخيار الثاني`],
          distractors: [`حرف استفهام للتصديق فقط`, `حرف نفي`],
        },
        {
          title: `تركيب: أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ, where الهمزة enters directly on a negated verb.`,
          source: `أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ`,
          words: [`أَ`, `لَمْ`, `نَشْرَحْ`],
          labels: [`حرف استفهام يدخل على النفي`, `حرف نفي وجزم`, `فعل مضارع مجزوم بلم`],
          distractors: [`حرف استقبال`, `حرف تفسير`],
        },
        {
          title: `تركيب: أَوَمَنْ كَانَ مَيْتًا`,
          kind: 'tarkeeb',
          instruction: `Identify the two particles opening أَوَمَنْ كَانَ مَيْتًا, and their order.`,
          source: `أَوَمَنْ كَانَ مَيْتًا`,
          words: [`أَ`, `وَ`],
          labels: [`حرف استفهام سابق للعاطفة`, `حرف عطف تالٍ للهمزة`],
          distractors: [`حرف استقبال`, `حرف جواب`],
        },
        {
          title: `تركيب: وَهَلْ أَتَاكَ حَدِيثُ مُوسَى`,
          kind: 'tarkeeb',
          instruction: `Identify the two particles opening وَهَلْ أَتَاكَ حَدِيثُ مُوسَى, and their order.`,
          source: `وَهَلْ أَتَاكَ حَدِيثُ مُوسَى`,
          words: [`وَ`, `هَلْ`],
          labels: [`حرف عطف سابق لهل`, `حرف استفهام تالٍ للعاطفة`],
          distractors: [`حرف استقبال`, `حرف تفسير`],
        },
        {
          title: `تركيب: سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of سَيَقُولُ السُّفَهَاءُ مِنَ النَّاسِ, where السين futurizes the فعل مضارع.`,
          source: `سَيَقُولُ السُّفَهَاءُ`,
          words: [`سَيَقُولُ`, `السُّفَهَاءُ`],
          labels: [`فعل مضارع مقترن بالسين للمستقبل القريب`, `فاعل`],
          distractors: [`فعل ماضٍ`, `حرف استفهام`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'حرفا التفسير',
      subtitle: 'The Two Explanatory Particles — أيْ explaining مفرد or جملة, and أنْ restricted to جملة under strict شروط',
      concepts: [
        {
          heading: 'القسم الرابع عشر: حرفا التفسير',
          lines: [
            { html: `<bdi>حرفا التفسير</bdi> — <bdi>أيْ</bdi> and <bdi>أنْ</bdi> — introduce an explanatory restatement of an expression already given. Both let a speaker follow one expression with a clearer explanation of the same meaning, but they differ sharply in what kind of expression they may explain, and under what conditions.`, list: false },
            { box: { title: 'Core Text', lines: [`القِسْمُ الرَّابِعُ عَشَرَ: حَرْفَا التَّفْسِيرِ. الأَوَّلُ أَيْ. الثَّانِي أَنْ.`] } },
          ],
          exercise: {
            prompt: `Which two particles together make up حرفا التفسير?`,
            kind: 'mcq',
            options: [`أيْ وأنْ`, `الهمزة وهل`, `السين وسوف`, `لا وإنْ`],
            correct: 0,
          },
        },
        {
          heading: 'أَيْ: تفسير المفرد والجملة',
          lines: [
            { box: { title: 'Rule', lines: [`يُفَسَّرُ بِأَيْ المُفْرَدُ وَالجُمْلَةُ`] } },
            { html: `أيْ is the more flexible of the two particles — it can introduce an explanation of either a single word (<bdi>مفرد</bdi>) or a whole sentence (<bdi>جملة</bdi>).`, list: false },
            { box: { title: 'Example', lines: [`أَسْأَلُ اللهَ الفِرْدَوْسَ أَيِ الجَنَّةَ`] } },
            { html: `"I ask Allah for al-Firdaws, that is, Paradise" — أيْ here explains a single word, <bdi>الفردوس</bdi>, by restating it with a more familiar synonym, <bdi>الجنة</bdi>.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `أَسْأَلُ اللهَ الفِرْدَوْسَ أَيِ الجَنَّةَ`,
                translation: `I ask Allah for al-Firdaws, that is, Paradise.`,
                cells: [`الفِرْدَوْسَ`, `أَيِ`, `الجَنَّةَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `المفسَّر (مفرد)` }, { start: 1, end: 1, role: `حرف تفسير` }, { start: 2, end: 2, role: `تفسير موضّح للمفرد` }] },
                ],
              },
            },
            { box: { title: 'Example', lines: [`اسْتَغْفَرْتُ اللهَ أَيْ سَأَلْتُ اللهَ أَنْ يَغْفِرَ لِي`] } },
            { html: `"I sought Allah's forgiveness, that is, I asked Allah to forgive me" — here أيْ unpacks the meaning of a whole verb-phrase into a fuller explanatory sentence.`, list: false },
          ],
          exercise: {
            prompt: `أَسْأَلُ اللهَ الفِرْدَوْسَ أَيِ الجَنَّةَ explains a single word, الفردوس, with a synonym. Could أيْ do the same job for a whole جملة, the way it does اسْتَغْفَرْتُ اللهَ أَيْ سَأَلْتُ اللهَ أَنْ يَغْفِرَ لِي؟`,
            kind: 'mcq',
            options: [`Yes — أيْ can explain either a مفرد or a جملة`, `No — أيْ can only ever explain a مفرد`, `No — أيْ can only ever explain a جملة`, `Yes, but only when the جملة is فعلية`],
            correct: 0,
          },
        },
        {
          heading: 'أَنْ التفسيرية: شرطاها ومواضع مجيئها',
          lines: [
            { box: { title: 'Rule', lines: [`لَا يُفَسَّرُ بِأَنْ إِلَّا الجُمْلَةُ، وَيُشْتَرَطُ فِيهَا أَنْ يَكُونَ قَبْلَهَا جُمْلَةٌ فِيهَا مَعْنَى القَوْلِ دُونَ لَفْظِهِ، وَأَلَّا تَكُونَ قَبْلَهَا حَرْفُ جَرٍّ لَفْظًا أَوْ تَقْدِيرًا`] } },
            { html: `أنْ التفسيرية, unlike أيْ, can only introduce a full جملة, never a single word. Two extra conditions apply: (1) what precedes it must be a جملة carrying the meaning of "saying" without actually using the word <bdi>قال</bdi>/<bdi>يقول</bdi>; (2) nothing before it may be, or imply, a <bdi>حرف جر</bdi>, whether spoken or only understood (<bdi>مقدّر</bdi>).`, list: false },
            { html: `The "meaning of saying without the word قال" condition covers several recurring categories: (1) <bdi>النداء</bdi>, calling out; (2) <bdi>الوحي</bdi>, revealing; (3) <bdi>العهد</bdi>, making a covenant; (4) <bdi>الكتابة</bdi>, writing a letter — each implies communication without literally being قال.`, list: false },
            { table: { title: 'مواضع مجيء أنْ التفسيرية', headers: ['Category', 'Example', 'Translation'], rows: [
              [`النداء`, `وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ`, `And We called out to him: "O Ibrāhīm!"`],
              [`الوحي`, `وَأَوْحَيْنَا إِلَى مُوسَى أَنْ أَلْقِ عَصَاكَ`, `And We revealed to Mūsā: "Throw down your staff."`],
              [`العهد`, `وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَنْ طَهِّرَا بَيْتِيَ`, `And We charged Ibrāhīm and Ismā'īl: "Purify My House."`],
              [`الكتابة`, `أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ`, `(from Bilqīs describing Sulaymān's letter) "Do not be haughty with me, and come to me in submission."`],
            ] } },
            { html: `In النداء's example, <bdi>نادى</bdi> carries the meaning of قول without being the word قال itself; the same logic applies to <bdi>أوحى</bdi>, <bdi>عهد</bdi>, and <bdi>كتب</bdi> in the other three rows.`, list: false },
          ],
          exercise: {
            prompt: `In وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ, نادى does not literally mean "قال," yet أنْ still explains the جملة after it as تفسيرية. Which category does this illustrate?`,
            kind: 'mcq',
            options: [`النداء — نادى carries the meaning of قول without being the word قال`, `الوحي — نادى means "to reveal"`, `العهد — نادى means "to make a covenant"`, `الكتابة — نادى means "to write"`],
            correct: 0,
          },
        },
        {
          heading: 'التمييز بين أنْ التفسيرية والمصدرية',
          lines: [
            { box: { title: 'Rule', lines: [`إِنْ كَانَ قَبْلَ أَنْ حَرْفُ جَرٍّ لَفْظًا أَوْ تَقْدِيرًا فَهِيَ مَصْدَرِيَّةٌ لَا تَفْسِيرِيَّةٌ`] } },
            { html: `Even when a جملة with the meaning of قول precedes أنْ, if that جملة's verb is normally followed by a حرف جر, even if it doesn't surface and is only understood (<bdi>مقدّر</bdi>), then أنْ is <bdi>مصدرية</bdi>, not تفسيرية.`, list: false },
            { box: { title: 'Example', lines: [`إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً`] } },
            { html: `"Indeed Allah commands you to slaughter a cow" — يأمر looks at first like it carries the meaning of قول. But أَمَرَ elsewhere in the Qur'an takes the preposition <bdi>بِ</bdi>, as in <bdi>إِنَّ اللهَ يَأْمُرُكُمْ بِالْعَدْلِ</bdi>, "Allah commands you to justice." Because a بِ is understood before أنْ here, it is مصدرية, not تفسيرية — some copies of تفسير الجلالين even insert a small بِ before أنْ in this verse to flag exactly this.`, list: false },
          ],
          exercise: {
            prompt: `إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً looks like it could carry أنْ التفسيرية, since يأمر carries the meaning of قول. Why is أنْ actually مصدرية here?`,
            kind: 'mcq',
            options: [`Because يأمر elsewhere takes the preposition بِ, so a بِ is understood before أنْ`, `Because ذبح is not a real جملة فعلية`, `Because بقرة is إضافة, not مفعول به`, `Because يأمر never carries the meaning of قول`],
            correct: 0,
          },
        },
        {
          heading: 'أحكام تكميلية: عدم اللزوم، والمخففة من الثقيلة',
          lines: [
            { box: { title: 'Rule', lines: [`لَا يَلْزَمُ مِنِ اجْتِمَاعِ شَرَائِطِ أَنِ التَّفْسِيرِيَّةِ دُخُولُهَا`] } },
            { html: `Meeting all the conditions for أنْ التفسيرية makes it permissible to bring أنْ; it does not make it obligatory.`, list: false },
            { box: { title: 'Example', lines: [`وَنَادَاهُمَا رَبُّهُمَا أَلَمْ أَنْهَكُمَا عَنْ تِلْكُمَا الشَّجَرَةِ`] } },
            { html: `"And their Lord called out to them: 'Did I not forbid you from that tree?'" — نادى here carries the meaning of قول exactly as in وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ, yet no أنْ appears at all before أَلَمْ أَنْهَكُمَا. The conditions were met; أنْ simply wasn't brought.`, list: false },
            { box: { title: 'Rule', lines: [`إِذَا لَمْ يَكُنْ قَبْلَ أَنْ جُمْلَةٌ، فَلَا تَكُونُ تَفْسِيرِيَّةً، بَلْ تَكُونُ مُخَفَّفَةً مِنَ الثَّقِيلَةِ`] } },
            { html: `The condition "a جملة before أنْ" must genuinely be a full, independent جملة. If what precedes أنْ is not a full جملة, for instance a <bdi>مضاف إليه</bdi> still awaiting its <bdi>خبر</bdi>, then أنْ is reinterpreted as <bdi>أنْ مخففة من الثقيلة</bdi>, the lightened form of the heavy إنّ-type أنّ.`, list: false },
            { box: { title: 'Example', lines: [`وَآخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ`] } },
            { html: `"And the last of their call will be: 'Praise be to Allah, Lord of the worlds'" — <bdi>وَآخِرُ دَعْوَاهُمْ</bdi> is not a complete جملة before أنِ: <bdi>آخِرُ</bdi> is مبتدأ and <bdi>دَعْوَاهُمْ</bdi> is مضاف إليه, the whole phrase still awaiting its خبر. Since no complete جملة precedes أنِ, it cannot be تفسيرية here; it is مخففة.`, list: false },
          ],
          exercise: {
            prompt: `In وَآخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ, آخِرُ دَعْوَاهُمْ is مبتدأ and مضاف إليه still awaiting its خبر — not a complete جملة. What does that make أنِ here?`,
            kind: 'mcq',
            options: [`أنْ مخففة من الثقيلة, since a complete جملة does not precede it`, `أنْ تفسيرية, since آخِرُ carries the meaning of قول`, `أنْ مصدرية, since a حرف جر precedes it`, `أنْ زائدة, with no function at all`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `أيْ can introduce an explanation of which kinds of expression?`, options: [`Either a مفرد or a جملة`, `Only a مفرد`, `Only a جملة`, `Neither — أيْ never introduces an explanation`], correct: 0 },
        { q: `أنْ التفسيرية can only introduce which kind of expression?`, options: [`A جملة`, `A مفرد`, `Either a مفرد or a جملة`, `A حرف جر`], correct: 0 },
        { q: `What must precede أنْ for it to be تفسيرية?`, options: [`A جملة carrying the meaning of قول without using the word قال`, `Any single مفرد word`, `A حرف جر, spoken or understood`, `Nothing — أنْ التفسيرية needs no preceding جملة`], correct: 0 },
        { q: `إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً uses أنْ that looks تفسيرية but is actually مصدرية. Why?`, options: [`Because يأمر elsewhere takes the preposition بِ, understood here before أنْ`, `Because ذبح carries no meaning of قول`, `Because بقرة is مفرد, not جملة`, `Because a مضاف إليه precedes أنْ`], correct: 0 },
        { q: `وَنَادَاهُمَا رَبُّهُمَا أَلَمْ أَنْهَكُمَا عَنْ تِلْكُمَا الشَّجَرَةِ meets every condition for أنْ التفسيرية, yet no أنْ appears. What does that show?`, options: [`Meeting the شروط makes أنْ permissible, not obligatory`, `The شروط were not actually met`, `أنْ التفسيرية can never be omitted when the شروط are met`, `نادى does not carry the meaning of قول here`], correct: 0 },
        { q: `In وَآخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ, what precedes أنِ, and what does that make أنِ?`, options: [`A مبتدأ still awaiting its خبر, not a full جملة — so أنِ is مخففة من الثقيلة`, `A full جملة with the meaning of قول — so أنِ is تفسيرية`, `A حرف جر مقدّر — so أنِ is مصدرية`, `Nothing at all precedes أنِ here`], correct: 0 },
      ],
      bank: [
        { title: `حرفا التفسير: naming the pair`, kind: 'mcq', prompt: `Which two particles together make up حرفا التفسير؟`, options: [`أيْ وأنْ`, `الهمزة وهل`, `السين وسوف`, `لولا ولوما`], correct: 0 },
        { title: `أيْ: the more flexible particle`, kind: 'mcq', prompt: `Between أيْ and أنْ, which one can introduce an explanation of a single مفرد word?`, options: [`أيْ — it can explain either a مفرد or a جملة`, `أنْ — it can explain either a مفرد or a جملة`, `Neither can explain a مفرد`, `Both are restricted to a جملة only`], correct: 0 },
        { title: `أسأل الله الفردوس أي الجنة: what is explained`, kind: 'mcq', prompt: `In أَسْأَلُ اللهَ الفِرْدَوْسَ أَيِ الجَنَّةَ, what does أيِ الجَنَّةَ explain?`, options: [`A single word, الفردوس`, `A whole جملة`, `Nothing — أيِ here has no explanatory function`, `The verb أسأل itself`], correct: 0 },
        { title: `استغفرت الله أي سألت الله أن يغفر لي: مفرد or جملة؟`, kind: 'mcq', prompt: `In اسْتَغْفَرْتُ اللهَ أَيْ سَأَلْتُ اللهَ أَنْ يَغْفِرَ لِي, does أيْ here unpack a single word or a whole verb-phrase into a fuller sentence?`, options: [`A whole verb-phrase, unpacked into a fuller explanatory جملة`, `A single word only`, `Neither — the two clauses are unrelated`, `A حرف جر`], correct: 0 },
        { title: `أنْ التفسيرية: restricted scope`, kind: 'mcq', prompt: `Can أنْ التفسيرية ever introduce an explanation of a single مفرد word, the way أيْ can?`, options: [`No — أنْ التفسيرية can only introduce a full جملة`, `Yes, under the same conditions as أيْ`, `Yes, but only in poetry`, `No — أنْ التفسيرية cannot introduce anything at all`], correct: 0 },
        { title: `First condition on أنْ التفسيرية`, kind: 'mcq', prompt: `What must the جملة before أنْ التفسيرية carry, for أنْ to be تفسيرية?`, options: [`The meaning of قول, without the actual word قال/يقول`, `The literal word قال`, `A حرف جر`, `A negation particle`], correct: 0 },
        { title: `Second condition on أنْ التفسيرية`, kind: 'mcq', prompt: `What must NOT precede أنْ التفسيرية, whether spoken or only understood?`, options: [`A حرف جر`, `A فعل مضارع`, `An اسم إشارة`, `A حرف عطف`], correct: 0 },
        { title: `النداء: نادينا as قول`, kind: 'mcq', prompt: `وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ uses نادى to introduce أنْ التفسيرية. What category of "meaning of قول" does نادى illustrate?`, options: [`النداء`, `الوحي`, `العهد`, `الكتابة`], correct: 0 },
        { title: `الوحي: أوحينا as قول`, kind: 'mcq', prompt: `وَأَوْحَيْنَا إِلَى مُوسَى أَنْ أَلْقِ عَصَاكَ uses أوحى to introduce أنْ التفسيرية. What category does that illustrate?`, options: [`الوحي`, `النداء`, `العهد`, `الكتابة`], correct: 0 },
        { title: `العهد: عهدنا as قول`, kind: 'mcq', prompt: `وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَنْ طَهِّرَا بَيْتِيَ uses عهد to introduce أنْ التفسيرية. What category does that illustrate؟`, options: [`العهد`, `النداء`, `الوحي`, `الكتابة`], correct: 0 },
        { title: `الكتابة: a written letter as قول`, kind: 'mcq', prompt: `Bilqīs describes Sulaymān's letter using أَلَّا تَعْلُوا عَلَيَّ وَأْتُونِي مُسْلِمِينَ after أنْ. Writing a letter is not the word قال, yet it licenses أنْ التفسيرية. What category is this؟`, options: [`الكتابة`, `النداء`, `الوحي`, `العهد`], correct: 0 },
        { title: `يأمر: does it license أنْ التفسيرية?`, kind: 'mcq', prompt: `إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً looks like it might carry أنْ التفسيرية, since يأمر seems to carry the meaning of قول. What blocks that reading?`, options: [`يأمر elsewhere takes the preposition بِ, so a حرف جر مقدّر precedes أنْ`, `ذبح does not describe an action at all`, `بقرة is معرفة, not نكرة`, `Nothing blocks it — أنْ here is genuinely تفسيرية`], correct: 0 },
        { title: `إن الله يأمركم بالعدل: the parallel evidence`, kind: 'mcq', prompt: `إِنَّ اللهَ يَأْمُرُكُمْ بِالْعَدْلِ shows يأمر followed by an explicit بِ. What does this parallel verse help establish about أَنْ تَذْبَحُوا بَقَرَةً؟`, options: [`That a بِ is understood before أنْ in the ذبح verse too, making أنْ مصدرية`, `That يأمر never takes بِ elsewhere`, `That أنْ is تفسيرية in both verses`, `That العدل and بقرة are the same grammatical role`], correct: 0 },
        { title: `Meeting the شروط: permissible, not obligatory`, kind: 'mcq', prompt: `A جملة meets every condition for أنْ التفسيرية. Must أنْ then appear?`, options: [`No — meeting the شروط only makes بringing أنْ permissible`, `Yes — أنْ must always appear once the شروط are met`, `Only if the جملة is جملة اسمية`, `Only in Qur'anic Arabic`], correct: 0 },
        { title: `وناداهما ربهما ألم أنهكما: أنْ omitted`, kind: 'mcq', prompt: `وَنَادَاهُمَا رَبُّهُمَا أَلَمْ أَنْهَكُمَا عَنْ تِلْكُمَا الشَّجَرَةِ meets the same شروط as وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ, yet carries no أنْ at all. What does this confirm?`, options: [`Bringing أنْ التفسيرية is جائز, not واجب`, `نادى does not actually carry the meaning of قول`, `أنْ التفسيرية is never omitted in the Qur'an`, `The شروط were not fully met here`], correct: 0 },
        { title: `أنْ مخففة: when the condition fails`, kind: 'mcq', prompt: `If what precedes أنْ is not a genuine, complete جملة, what does أنْ become instead of تفسيرية؟`, options: [`أنْ مخففة من الثقيلة`, `أنْ مصدرية`, `أنْ زائدة`, `أنْ ناصبة للمضارع`], correct: 0 },
        { title: `آخر دعواهم: مبتدأ still awaiting خبر`, kind: 'mcq', prompt: `In وَآخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ, what is آخِرُ, and what is دَعْوَاهُمْ, in the phrase before أنِ؟`, options: [`آخِرُ is مبتدأ; دَعْوَاهُمْ is مضاف إليه, with the خبر still awaited`, `آخِرُ is خبر; دَعْوَاهُمْ is مبتدأ`, `Both together form a complete جملة فعلية`, `آخِرُ is فعل; دَعْوَاهُمْ is فاعل`], correct: 0 },
        { title: `Why آخر دعواهم أن الحمد لله is not تفسيرية`, kind: 'mcq', prompt: `Why can أنِ in وَآخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ not be تفسيرية, despite دعوى carrying a sense connected to speech?`, options: [`No complete جملة precedes أنِ — آخِرُ دَعْوَاهُمْ is still awaiting its خبر`, `الحمد لله is not a جملة اسمية`, `دعوى never carries any meaning connected to قول`, `A حرف جر مقدّر precedes أنِ here`], correct: 0 },
        {
          title: `تركيب: أَسْأَلُ اللهَ الفِرْدَوْسَ أَيِ الجَنَّةَ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of أَسْأَلُ اللهَ الفِرْدَوْسَ أَيِ الجَنَّةَ, where أيِ explains a single word.`,
          source: `الفِرْدَوْسَ أَيِ الجَنَّةَ`,
          words: [`الفِرْدَوْسَ`, `أَيِ`, `الجَنَّةَ`],
          labels: [`المفسَّر (مفرد)`, `حرف تفسير`, `تفسير موضّح للمفرد`],
          distractors: [`أنْ التفسيرية`, `حرف جر`],
        },
        {
          title: `تركيب: وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of وَنَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ, where أنْ explains a جملة after a جملة carrying the meaning of النداء.`,
          source: `نَادَيْنَاهُ أَنْ يَا إِبْرَاهِيمُ`,
          words: [`نَادَيْنَاهُ`, `أَنْ`, `يَا إِبْرَاهِيمُ`],
          labels: [`جملة فيها معنى القول (النداء)`, `حرف تفسير`, `الجملة المفسِّرة`],
          distractors: [`حرف مصدر`, `أنْ مخففة من الثقيلة`],
        },
        {
          title: `تركيب: وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَنْ طَهِّرَا بَيْتِيَ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَنْ طَهِّرَا بَيْتِيَ, where أنْ explains a جملة after a جملة carrying the meaning of العهد.`,
          source: `عَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ أَنْ طَهِّرَا بَيْتِيَ`,
          words: [`عَهِدْنَا`, `أَنْ`, `طَهِّرَا بَيْتِيَ`],
          labels: [`جملة فيها معنى القول (العهد)`, `حرف تفسير`, `الجملة المفسِّرة`],
          distractors: [`حرف مصدر`, `أنْ مصدرية`],
        },
        {
          title: `تركيب: إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of إِنَّ اللهَ يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً, where أنْ is مصدرية, not تفسيرية.`,
          source: `يَأْمُرُكُمْ أَنْ تَذْبَحُوا بَقَرَةً`,
          words: [`يَأْمُرُكُمْ`, `أَنْ`, `تَذْبَحُوا`],
          labels: [`فعل يتعدى إلى مفعوله بحرف جر مقدّر (بِ)`, `أنْ مصدرية لا تفسيرية`, `فعل مضارع منصوب بأنْ`],
          distractors: [`حرف تفسير`, `أنْ مخففة من الثقيلة`],
        },
        {
          title: `تركيب: وَآخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of وَآخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ, where أنِ is مخففة من الثقيلة, not تفسيرية.`,
          source: `آخِرُ دَعْوَاهُمْ أَنِ الحَمْدُ لِلَّهِ`,
          words: [`آخِرُ دَعْوَاهُمْ`, `أَنِ`, `الحَمْدُ لِلَّهِ`],
          labels: [`مبتدأ ومضاف إليه لم يكتمل بعد بخبر`, `أنْ مخففة من الثقيلة`, `جملة اسمية`],
          distractors: [`حرف تفسير`, `أنْ مصدرية`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'التنوين وأقسامه',
      subtitle: 'Nunation — why it counts as a حرف, and its four أقسام: تمكين, تنكير, مقابلة, تعويض',
      concepts: [
        {
          heading: 'القسم الثامن عشر: التنوين وأصله',
          lines: [
            { html: `<bdi>التنوين</bdi>, nunation, is the eighteenth and final قسم of الحرف غير العامل. Though written as a diacritic rather than a separate letter, it is treated grammatically as a <bdi>حرف</bdi>, because it is fundamentally a <bdi>سكون</bdi>-carrying <bdi>نون</bdi> folded into the end of a word.`, list: false },
            { box: { title: 'Core Text', lines: [`القِسْمُ الثَّامِنُ عَشَرَ: التَّنْوِينُ. أَصْلُ التَّنْوِينِ نُونٌ سَاكِنَةٌ، أَيْ أَحَدُنْ.`] } },
            { html: `In <bdi>وصل</bdi>, continuous recitation, a تنوين is pronounced exactly as a نون ساكنة would be: ﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾ ﴿اللَّهُ الصَّمَدُ﴾ is read <bdi>أَحَدٙنِ اللَّهُ الصَّمَدُ</bdi> — the تنوين surfaces as a نون sound connecting into the next word, shifting to a كسر before a following hamzat-waṣl exactly as an ordinary نون ساكنة would. The name <bdi>تنوين</bdi> itself comes from the root ن-و-ن, because its function is to produce the sound of a نون at the end of the word.`, list: false },
            { box: { title: 'Rule', lines: [`التَّنْوِينُ أَرْبَعَةُ أَقْسَامٍ: تَمْكِينٌ، تَنْكِيرٌ، مُقَابَلَةٌ، تَعْوِيضٌ`] } },
          ],
          exercise: {
            prompt: `Why is التنوين, a diacritic mark rather than a written letter, treated grammatically as a حرف?`,
            kind: 'mcq',
            options: [`Because it is fundamentally a سكون-carrying نون folded into the end of a word`, `Because it always changes a word's meaning`, `Because it only ever attaches to a فعل`, `Because it is pronounced identically to a تنوين الترنم`],
            correct: 0,
          },
        },
        {
          heading: 'تنوين التمكين',
          lines: [
            { html: `<bdi>تنوين التمكين</bdi>, also called <bdi>تنوين الصرف</bdi> or <bdi>تنوين الأمكنية</bdi>, attaches to fully <bdi>معرب</bdi>, <bdi>منصرف</bdi> nouns — nouns with complete إعراب and no restriction on their case-endings.`, list: false },
            { box: { title: 'Example', lines: [`زَيْدٌ وَرَجُلٌ`] } },
            { html: `Both are ordinary, fully-declinable nouns. A noun can be <bdi>نكرة</bdi>, indefinite, and still carry تنوين التمكين rather than تنوين التنكير: <bdi>بَيْتٌ</bdi> is indefinite, but because it is a normal منصرف noun, its تنوين is تمكين, not تنكير. The category is defined by what the noun IS grammatically, not merely by whether it happens to be indefinite.`, list: false },
          ],
          exercise: {
            prompt: `بَيْتٌ is نكرة, yet its تنوين is classified as تنوين التمكين rather than تنوين التنكير. Why?`,
            kind: 'mcq',
            options: [`Because it is a normal معرب منصرف noun — the category depends on what the noun IS grammatically, not merely on being indefinite`, `Because every نكرة noun automatically takes تنوين التمكين`, `Because بَيْتٌ never appears with أل`, `Because تنوين التمكين only attaches to proper nouns`],
            correct: 0,
          },
        },
        {
          heading: 'تنوين التنكير',
          lines: [
            { html: `<bdi>تنوين التنكير</bdi> attaches to <bdi>أسماء الأفعال</bdi>, verb-nouns, and to certain <bdi>مبني</bdi> proper nouns — specifically those ending in <bdi>ويه</bdi>.`, list: false },
            { box: { title: 'Example', lines: [`صَهْ`, `صَهٍ`] } },
            { html: `Without تنوين, <bdi>صَهْ</bdi> means "stop talking about the specific thing we're discussing"; with تنوين, <bdi>صَهٍ</bdi> means "be quiet altogether, about everything" — the تنوين marks a shift from a definite, specific reference to a fully indefinite, general one.`, list: false },
            { box: { title: 'Example', lines: [`سِيبَوَيْه`, `سِيبَوَيْهٍ`] } },
            { html: `Without تنوين, <bdi>سيبويه</bdi> refers to the specific, famous grammarian, معرفة, one particular person. With تنوين, <bdi>سيبويهٍ</bdi> becomes a common noun meaning "a Sībawayh" — any grammarian of that caliber, a generic member of the class, نكرة — as in <bdi>هَذَا سِيبَوَيْهٍ جَدِيدٌ</bdi>, "this is a new Sībawayh."`, list: false },
          ],
          exercise: {
            prompt: `هَذَا سِيبَوَيْهٍ جَدِيدٌ uses سيبويهٍ with تنوين to mean "a new Sībawayh" — any grammarian of that caliber, not the one famous person. What does adding the تنوين do here?`,
            kind: 'mcq',
            options: [`It shifts سيبويه from a specific معرفة (the one famous grammarian) to a generic نكرة (any grammarian of that caliber)`, `It shifts سيبويه from a فعل to an اسم`, `It has no effect on the word's meaning at all`, `It marks سيبويه as منصرف رغم بنائه`],
            correct: 0,
          },
        },
        {
          heading: 'تنوين المقابلة',
          lines: [
            { html: `<bdi>تنوين المقابلة</bdi> attaches specifically to <bdi>جمع المؤنث السالم</bdi>, the sound feminine plural.`, list: false },
            { box: { title: 'Example', lines: [`مُسْلِمَاتٌ`] } },
            { html: `The تنوين here corresponds directly, <bdi>مقابلة</bdi>, to the <bdi>نون</bdi> that appears in the sound masculine plural, <bdi>مسلمون</bdi>. Both signal that the word is <bdi>تامّ</bdi>, complete, nothing further attached, no مضاف إليه: masculine plurals use a نون, feminine plurals use a تنوين, for the same job.`, list: false },
            { box: { title: 'Careful', lines: [`كِتَابٌ (بِالتَّنْوِينِ) تَامٌّ، وكِتَابُ (بِلَا تَنْوِينٍ) مُضَافٌ يَنْتَظِرُ مُضَافًا إِلَيْهِ`] } },
            { html: `Compare <bdi>كِتَابٌ</bdi>, with تنوين, a complete word, against <bdi>كِتَابُ</bdi>, without تنوين, which signals an إضافة is expected, as in <bdi>كِتَابُ زَيْدٍ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `مُسْلِمَاتٌ carries تنوين المقابلة, corresponding to which sign in the sound masculine plural, مسلمون?`,
            kind: 'mcq',
            options: [`Its نون`, `Its ألف`, `Its تاء`, `Its كسرة`],
            correct: 0,
          },
        },
        {
          heading: 'تنوين التعويض',
          lines: [
            { html: `<bdi>تنوين التعويض</bdi> stands in as a substitute, <bdi>عوض</bdi>, for something dropped: a letter, a word, or an entire sentence.`, list: false },
            { table: { title: 'أنواع تنوين التعويض الثلاثة', headers: ['Compensating for', 'Example', 'What was dropped'], rows: [
              [`عوض عن حرف`, `غَوَاشٍ`, `originally غَوَاشِيٌ; the final ي was dropped, and the تنوين compensates for its loss`],
              [`عوض عن كلمة`, `كُلٌّ آمَنَ`, `meaning كُلُّ أَحَدٍ آمَنَ, "each PERSON believed"; the تنوين on كُلٌّ stands in for the dropped word أَحَدٍ`],
              [`عوض عن جملة`, `وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ`, `originally يَوْمَ إِذْ كَانَ كَذَا, "the day WHEN such-and-such occurs"; the تنوين on يَوْمَئِذٍ compresses the whole dropped clause into itself`],
            ] } },
            {
              tarkeebDiagram: {
                sentence: `كُلٌّ آمَنَ`,
                translation: `Each one believed.`,
                cells: [`كُلٌّ`, `آمَنَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `مبتدأ يحمل تنوين تعويض عن كلمة (أَحَدٍ) محذوفة` }, { start: 1, end: 1, role: `خبر` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In ﴿كُلٌّ آمَنَ﴾, meaning كُلُّ أَحَدٍ آمَنَ, "each PERSON believed," what does the تنوين on كُلٌّ compensate for?`,
            kind: 'mcq',
            options: [`A dropped word, أَحَدٍ`, `A dropped letter`, `A dropped entire sentence`, `Nothing — this تنوين is تنوين التمكين`],
            correct: 0,
          },
        },
        {
          heading: 'تنوين الترنم',
          lines: [
            { html: `Beyond the four standard types, a group of grammarians add a fifth: <bdi>تنوين الترنم</bdi>, purely for melodic effect at the end of a line of poetry, with no grammatical function at all.`, list: false },
            { box: { title: 'Rule', lines: [`وَزَادَ جَمَاعَةٌ تَنْوِينَ التَّرَنُّمِ، وَهُوَ اللَّاحِقُ لِلْقَوَافِي الْمُطْلَقَةِ`] } },
            { html: `It attaches to the <bdi>القافية المطلقة</bdi>, an "open" rhyme whose final letter is preceded by a <bdi>حرف مد</bdi>, and unlike the other four types, it can attach to any part of speech: اسم, فعل, or حرف.`, list: false },
            { box: { title: 'Example', lines: [`أَقِلِّي اللَّوْمَ عَاذِلَ وَالْعِتَابَنْ`, `وَقُولِي إِنْ أَصَبْتُ لَقَدْ أَصَابَنْ`] } },
            { html: `"Reduce your blame, O critic, and your reproach; and say, if I got it right, 'he got it right'" — without تنوين الترنم the line simply reads والعتابَ and أصابَ. <bdi>العِتَابَنْ</bdi>, from the noun العِتَابَ, and <bdi>أَصَابَنْ</bdi>, from the past-tense verb أَصَابَ, both take the same تنوين here — proof this تنوين attaches for sound alone, since ordinary تنوين never attaches to a فعل ماضٍ.`, list: false },
            { html: `This closes out الحرف غير العامل entirely.`, list: false },
          ],
          exercise: {
            prompt: `العِتَابَنْ (from the noun العِتَابَ) and أَصَابَنْ (from the past-tense verb أَصَابَ) both take the same تنوين in one line of poetry. What does this prove about that تنوين?`,
            kind: 'mcq',
            options: [`It attaches purely for sound, since ordinary تنوين never attaches to a فعل ماضٍ`, `It is تنوين التمكين, since both words are معربة`, `It is تنوين المقابلة, since both words end similarly`, `It proves أَصَابَ has secretly become an اسم`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `What is أصل التنوين, and why is التنوين treated as a حرف despite being written as a diacritic?`, options: [`A نون ساكنة folded into the end of a word — it is fundamentally that نون, not a separate mark`, `A همزة folded into the start of a word`, `A دال ساكنة, unrelated to نون`, `A written نون that is simply never pronounced`], correct: 0 },
        { q: `بَيْتٌ is نكرة, yet its تنوين is تنوين التمكين, not تنوين التنكير. What decides the category?`, options: [`Whether the noun is معرب منصرف, not merely whether it is indefinite`, `Whether the noun begins with أل`, `Whether the noun is مذكر or مؤنث`, `Whether the noun has more than three letters`], correct: 0 },
        { q: `هَذَا سِيبَوَيْهٍ جَدِيدٌ adds تنوين to a proper name normally without one. What shift does that produce?`, options: [`From a specific معرفة (the famous grammarian) to a generic نكرة (any grammarian of that caliber)`, `From مبني to معرب only`, `From مذكر to مؤنث`, `No shift — تنوين never changes سيبويه's meaning`], correct: 0 },
        { q: `مُسْلِمَاتٌ carries تنوين المقابلة. What does it correspond to in the sound masculine plural, مسلمون?`, options: [`The نون of مسلمون`, `The واو of مسلمون`, `The ميم of مسلمون`, `Nothing — the two forms are unrelated`], correct: 0 },
        { q: `﴿وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ﴾ carries تنوين on يَوْمَئِذٍ that compensates for something larger than a single word. What does it compensate for?`, options: [`An entire dropped clause, يَوْمَ إِذْ كَانَ كَذَا`, `A single dropped letter`, `A single dropped word, أَحَدٍ`, `Nothing — this is ordinary تنوين التمكين`], correct: 0 },
        { q: `تنوين الترنم can attach to اسم, فعل, or حرف alike, unlike the four standard types. What does that show about it?`, options: [`It is purely a sound effect at the end of a poetic line, with no grammatical function`, `It is the strictest of all تنوين types, restricted to nouns only`, `It replaces تنوين التمكين whenever poetry is involved`, `It only ever attaches to a فعل ماضٍ`], correct: 0 },
      ],
      bank: [
        { title: `أصل التنوين`, kind: 'mcq', prompt: `What is أصل التنوين — what is التنوين fundamentally, before being written as a diacritic?`, options: [`A نون ساكنة`, `A همزة ساكنة`, `A ألف ممدودة`, `A حركة قصيرة فقط`], correct: 0 },
        { title: `Why التنوين counts as a حرف`, kind: 'mcq', prompt: `التنوين is written as a diacritic mark, not a separate letter. Why is it still treated grammatically as a حرف؟`, options: [`Because it is fundamentally a سكون-carrying نون folded into the word's end`, `Because every diacritic in Arabic counts as a حرف`, `Because it changes a word's إعراب on its own`, `Because it always follows a حرف مد`], correct: 0 },
        { title: `أحدن: وصل pronunciation`, kind: 'mcq', prompt: `In وصل, continuous recitation, ﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾ ﴿اللَّهُ الصَّمَدُ﴾ is read أَحَدٙنِ اللَّهُ الصَّمَدُ. What does the تنوين become in that reading?`, options: [`A نون sound connecting into the next word`, `A silent mark with no sound at all`, `A doubled همزة`, `A long ألف`], correct: 0 },
        { title: `أقسام التنوين: the four standard types`, kind: 'mcq', prompt: `Which four types make up the standard أقسام التنوين؟`, options: [`تمكين، تنكير، مقابلة، تعويض`, `تمكين، ترنم، مقابلة، تعويض`, `تنكير، تعويض، تصديق، تصور`, `تمكين، تنكير، تصديق، تصور`], correct: 0 },
        { title: `تنوين التمكين: what it attaches to`, kind: 'mcq', prompt: `What kind of noun does تنوين التمكين attach to؟`, options: [`A fully معرب, منصرف noun`, `Only أسماء الأفعال`, `Only جمع المؤنث السالم`, `Only مبني proper nouns ending in ويه`], correct: 0 },
        { title: `تنوين التمكين: other names`, kind: 'mcq', prompt: `تنوين التمكين is also known by two other names. What are they؟`, options: [`تنوين الصرف and تنوين الأمكنية`, `تنوين الترنم and تنوين التعويض`, `تنوين المقابلة and تنوين التنكير`, `تنوين الوصل and تنوين الوقف`], correct: 0 },
        { title: `زيد ورجل: which تنوين`, kind: 'mcq', prompt: `زَيْدٌ and رَجُلٌ are ordinary, fully-declinable nouns. Which تنوين do they carry؟`, options: [`تنوين التمكين`, `تنوين التنكير`, `تنوين المقابلة`, `تنوين التعويض`], correct: 0 },
        { title: `تنوين التنكير: what it attaches to`, kind: 'mcq', prompt: `تنوين التنكير attaches to أسماء الأفعال and to which other category؟`, options: [`Certain مبني proper nouns ending in ويه`, `جمع المؤنث السالم`, `Every معرب منصرف noun`, `Every فعل مضارع`], correct: 0 },
        { title: `صه vs صهٍ: the meaning shift`, kind: 'mcq', prompt: `صَهْ, without تنوين, means "stop talking about the specific thing." What does صَهٍ, with تنوين, mean instead؟`, options: [`"Be quiet altogether, about everything" — a shift to a fully general reference`, `Exactly the same thing as صَهْ`, `"Speak up," the opposite meaning`, `Nothing — صهٍ is not a real word`], correct: 0 },
        { title: `تنوين التنكير: definite to indefinite`, kind: 'mcq', prompt: `What shift in meaning does تنوين التنكير typically mark, as shown by صَهْ vs صَهٍ and سيبويه vs سيبويهٍ؟`, options: [`A shift from a definite, specific reference to a fully indefinite, general one`, `A shift from مذكر to مؤنث`, `A shift from مفرد to جمع`, `A shift from فعل to اسم`], correct: 0 },
        { title: `تنوين المقابلة: what it attaches to`, kind: 'mcq', prompt: `تنوين المقابلة attaches specifically to which category of noun؟`, options: [`جمع المؤنث السالم`, `جمع المذكر السالم`, `أسماء الأفعال`, `Every مبني اسم`], correct: 0 },
        { title: `كتاب vs كتابُ: تامّ or مضاف`, kind: 'mcq', prompt: `كِتَابٌ, with تنوين, is تامّ. كِتَابُ, without تنوين, signals what instead؟`, options: [`An إضافة is expected, as in كِتَابُ زَيْدٍ`, `A نداء is expected`, `A فعل أمر is expected`, `Nothing changes at all`], correct: 0 },
        { title: `تنوين التعويض: what it stands in for`, kind: 'mcq', prompt: `تنوين التعويض substitutes for which kinds of dropped elements؟`, options: [`A letter, a word, or an entire sentence`, `Only a dropped letter`, `Only a dropped حرف جر`, `Only a dropped حركة`], correct: 0 },
        { title: `غواشٍ: عوض عن حرف`, kind: 'mcq', prompt: `﴿غَوَاشٍ﴾ originally reads غَوَاشِيٌ. What does its تنوين compensate for؟`, options: [`The dropped final ي`, `A dropped entire جملة`, `A dropped مضاف إليه`, `Nothing — غواشٍ carries تنوين التمكين only`], correct: 0 },
        { title: `يومئذ: عوض عن جملة`, kind: 'mcq', prompt: `يَوْمَئِذٍ in ﴿وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ﴾ originally derives from يَوْمَ إِذْ كَانَ كَذَا. What does its تنوين compensate for؟`, options: [`An entire dropped clause`, `A single dropped letter`, `A single dropped word`, `Nothing — يومئذ carries تنوين المقابلة`], correct: 0 },
        { title: `Three subtypes of تنوين التعويض`, kind: 'mcq', prompt: `غَوَاشٍ, كُلٌّ آمَنَ, and يَوْمَئِذٍ each illustrate a different subtype of تنوين التعويض. Which correctly pairs example with what was dropped؟`, options: [`غواشٍ ← حرف; كُلٌّ آمَنَ ← كلمة; يَوْمَئِذٍ ← جملة`, `غواشٍ ← جملة; كُلٌّ آمَنَ ← حرف; يَوْمَئِذٍ ← كلمة`, `All three compensate for the exact same thing, a dropped حرف`, `غواشٍ ← كلمة; كُلٌّ آمَنَ ← جملة; يَوْمَئِذٍ ← حرف`], correct: 0 },
        { title: `تنوين الترنم: a fifth, non-standard type`, kind: 'mcq', prompt: `تنوين الترنم is not among the four standard أقسام التنوين. Who adds it, and for what purpose؟`, options: [`A group of grammarians, purely for melodic effect at the end of a poetic line`, `Every grammarian, as a fifth obligatory قسم`, `The Kufan grammarians only, to mark إعراب`, `Sībawayh alone, to mark تعويض`], correct: 0 },
        { title: `القافية المطلقة: where تنوين الترنم attaches`, kind: 'mcq', prompt: `تنوين الترنم attaches to القافية المطلقة. What defines that kind of rhyme؟`, options: [`Its final letter is preceded by a حرف مد`, `Its final letter is preceded by a حرف لين`, `Its final letter always carries تنوين المقابلة`, `Its final letter is always a تاء التأنيث`], correct: 0 },
        { title: `العتابن وأصابن: attaching beyond اسم`, kind: 'mcq', prompt: `تنوين الترنم attaches to العِتَابَ (a noun) and أَصَابَ (a فعل ماضٍ) alike in one line of poetry. What does that show about تنوين الترنم compared to the other four types؟`, options: [`Unlike them, it can attach to اسم, فعل, or حرف alike`, `Like them, it only ever attaches to a اسم`, `It only ever attaches to a فعل`, `It cannot attach to a فعل ماضٍ, exactly like ordinary تنوين`], correct: 0 },
        {
          title: `تركيب: كُلٌّ آمَنَ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of ﴿كُلٌّ آمَنَ﴾, where كُلٌّ carries تنوين تعويض عن كلمة محذوفة.`,
          source: `كُلٌّ آمَنَ`,
          words: [`كُلٌّ`, `آمَنَ`],
          labels: [`مبتدأ يحمل تنوين تعويض عن كلمة (أَحَدٍ) محذوفة`, `خبر`],
          distractors: [`تنوين تمكين`, `مضاف إليه`],
        },
        {
          title: `تركيب: وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the parts of ﴿وَيَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ﴾, where يَوْمَئِذٍ carries تنوين تعويض عن جملة محذوفة.`,
          source: `يَوْمَئِذٍ يَفْرَحُ الْمُؤْمِنُونَ`,
          words: [`يَوْمَئِذٍ`, `يَفْرَحُ`, `الْمُؤْمِنُونَ`],
          labels: [`ظرف يحمل تنوين تعويض عن جملة محذوفة`, `فعل مضارع`, `فاعل`],
          distractors: [`تنوين مقابلة`, `مضاف إليه`],
        },
      ],
    },
  ],
};

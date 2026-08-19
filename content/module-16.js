// Module 16 — أحرف الجواب والنفي والتأكيد
//
// Source: app-lessons/089-ahruf-al-ijab.md through
// app-lessons/091-ahruf-al-takid.md (الكبرى في النحو), continuing الحرف غير
// العامل within العامل وغير العامل — the same chapter as أحرف العطف
// (COURSE-MAP.md's proposed Module 15, not yet authored) and the later
// أحرف الشرط غير العاملة modules. Authored out of numeric order relative to
// Modules 10-15, the same pattern Modules 04/06/07/08/09 followed earlier in
// this course (see each module's own header comment and the authoring-order
// note at the top of COURSE-MAP.md) — per COURSE-MAP's own Module 16 plan,
// this module's three source files stand on their own regardless of what
// precedes them, so authoring proceeded without waiting on Modules 10-15.
// NOT YET registered in content/annahw.js's MODULES array: that registry
// file is shared with concurrent sessions authoring the earlier modules, so
// wiring it in is left for a later merge pass rather than risking a
// conflicting edit, the same choice Modules 08 and 09 made.
//
// Per COURSE-MAP's proposal, each of the three source files splits into two
// lessons: 089 (six أحرف الإيجاب) into l1 (نعم، بلى — the two richest, each
// with its own Careful box and multiple worked examples) and l2 (إي، أجل،
// إنّه، جير — much thinner, one Rule+Example apiece); 090 (حرفا النفي) into
// l3 (لا, and كلّا's primary زجر/ردع sense) and l4 (كلّا's مجازي senses —
// تصديق, استفتاح — plus its وقف rules and the two closing نكتتان); 091
// (أحرف التأكيد) into l5 (لام الابتداء, اللام المزحلقة, اللام في جواب
// القسم) and l6 (نونا التأكيد, قَدْ). The survey held: no boundary changes
// were needed once the source was read in full.
//
// Concept bodies use the lines[]/box/table shape established in
// module-01.js and matched by every module authored since. Bank تركيب items
// use the flat words[]/labels[]/distractors[] schema, matching every prior
// authored module in this course. None of 089-091 contains a Core Text
// blockquote, so no concept here uses that box.
//
// تركيب items are deliberately conservative about what they claim: several
// of this module's worked examples sit inside constructions this course
// has not formally taught yet (لعلّ's عمل in 090's كَلَّا...ارْجِعُونِ
// example, جزم أدوات النفي in 089's أَوَلَمْ تُؤْمِنْ), so tarkeeb labels for
// those examples name only what this module itself teaches — the response,
// negation, or emphasis particle's own role — plus already-established
// basics (فعل/فاعل/مفعول به from Module 01, مضاف إليه, etc.), rather than
// asserting جزم/نصب mechanics from modules not yet written. l2's bank stays
// below the ~24 norm (18) because 089's four rarer أحرف الإيجاب are each
// backed by only one short worked exchange, the same discipline earlier
// modules applied to their own thin spots; l1, l3, l4, l5, and l6 sit at or
// near the norm since نعم/بلى, كلّا, and أحرف التأكيد are each rich in
// distinct worked examples.
export default {
  id: '16',
  title: 'الجواب والتأكيد',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف غير العامل',
  blurb: 'أحرف الجواب answering a question or statement in one word, حرفا النفي — لا وكلّا — with كلّا’s layered senses, and the five أحرف التأكيد that add emphasis without changing a sentence’s basic meaning.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'نَعَمْ وبَلَى',
      subtitle: 'Affirmative Response Particles — نعم confirms a question’s own polarity, بلى flips a negative one',
      sourceRef: 'app-lessons/089 (part 1)',
      concepts: [
        {
          heading: 'أحرف الجواب: تمهيد وتقسيم',
          lines: [
            { html: `With <bdi>أحرف العطف</bdi> finished, a new قسم of الحرف غير العامل begins: <bdi>أَحْرُفُ الجَوَابِ</bdi>, the particles used to answer a question or a statement with a single word.`, list: false },
            { box: { title: 'Definition', lines: [`القِسْمُ الثَّانِي: أَحْرُفُ الجَوَابِ، وَهِيَ ضَرْبَانِ: الضَّرْبُ الأَوَّلُ أَحْرُفُ الإِيجَابِ، وَهِيَ سِتَّةٌ: نَعَمْ، بَلَى، إِي، أَجَلْ، إِنَّهْ، جَيْرِ.`] } },
            { html: `أحرف الجواب split into two <bdi>ضربان</bdi>: <bdi>أحرف الإيجاب</bdi>, six affirmative response particles, and <bdi>حرفا النفي</bdi>, two negative ones (covered in later lessons of this module). This lesson covers the two most commonly used أحرف الإيجاب — <bdi>نَعَمْ</bdi> and <bdi>بَلَى</bdi> — in full; the next lesson covers the remaining four.`, list: false },
          ],
          exercise: {
            prompt: `أحرف الجواب divide into two ضربان. Which one holds نعم, بلى, إي, أجل, إنّه, and جير?`,
            kind: 'mcq',
            options: [`أحرف الإيجاب`, `حرفا النفي`, `أحرف العطف`, `أحرف التأكيد`],
            correct: 0,
          },
        },
        {
          heading: 'نَعَمْ: توافق قطبية السؤال',
          lines: [
            { box: { title: 'Rule', lines: [`نَعَمْ تُفِيدُ الإِثْبَاتَ فِي الجَوَابِ عَنِ السُّؤَالِ المُثْبَتِ، وَالنَّفْيَ فِي الجَوَابِ عَنِ السُّؤَالِ المَنْفِيِّ.`] } },
            { html: `<bdi>نَعَمْ</bdi> ("yes") is the ordinary, general-purpose affirmative response, but its meaning depends entirely on how the QUESTION it answers was itself phrased — نعم simply CONFIRMS whatever polarity the question already assumed, positive or negative.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَهَلْ وَجَدْتُمْ مَا وَعَدَ رَبُّكُمْ حَقًّا قَالُوا نَعَمْ﴾`] } },
            { html: `"So have you found what your Lord promised to be true? They will say: Yes." The question, هَلْ وَجَدْتُمْ, is phrased positively, so نعم confirms the positive: they DID find it true.`, list: false },
            { box: { title: 'Example', lines: [`أَسَافَرَ خَالِدٌ؟ — نَعَمْ`, `أَمَا سَافَرَ خَالِدٌ؟ — نَعَمْ`] } },
            { html: `أَسَافَرَ خَالِدٌ؟ ("Did Khalid travel?") is phrased positively, so نعم confirms the positive — the travel did happen. أَمَا سَافَرَ خَالِدٌ؟ ("Did Khalid NOT travel?") is phrased negatively, so the very same نعم now confirms the NEGATIVE: "yes, that's right, he did not travel."`, list: false },
          ],
          exercise: {
            prompt: `أَمَا سَافَرَ خَالِدٌ؟ is phrased negatively. Answered with نَعَمْ, what does that confirm?`,
            kind: 'mcq',
            options: [`That Khalid did NOT travel — نعم agrees with the question's own negative polarity`, `That Khalid did travel, flipping the negative question`, `Nothing — نعم cannot answer a negative question`, `That the question itself was invalid — أَمَا cannot properly introduce a yes/no question`],
            correct: 0,
          },
        },
        {
          heading: 'نَعَمْ: لا تقلب قطبية السؤال أبدا',
          lines: [
            { box: { title: 'Careful', lines: [`نَعَمْ لا تَعْكِسُ قُطْبِيَّةَ السُّؤَالِ أَبَدًا، بَلْ تُوَافِقُ مَا تَضَمَّنَهُ مِنْ إِثْبَاتٍ أَوْ نَفْيٍ.`] } },
            { html: `This is the single most important nuance of نعم: it never flips the polarity of the question — it always agrees with whatever the question stated. Answering a negatively-phrased question with نعم does NOT mean "yes, [the opposite happened]" — it means "yes, [you are correct that it did not happen]." Always check the question's own polarity before interpreting a نعم answer.`, list: false },
          ],
          exercise: {
            prompt: `Two different questions about the same fact — أَسَافَرَ خَالِدٌ؟ and أَمَا سَافَرَ خَالِدٌ؟ — are both answered نَعَمْ. Do the two answers mean the same thing?`,
            kind: 'mcq',
            options: [`No — each نعم agrees with its own question's polarity, so the two answers mean opposite things`, `Yes — نعم always means the action occurred, regardless of the question's own phrasing`, `Yes — نعم always means the action did not occur, regardless of the question's own phrasing`, `No — نعم can only follow a positive question, unlike بلى which requires a negative to flip`],
            correct: 0,
          },
        },
        {
          heading: 'بَلَى: تقلب المنفي إلى مثبت',
          lines: [
            { box: { title: 'Rule', lines: [`بَلَى تَأْتِي بَعْدَ النَّفْيِ فَقَطْ، وَهِيَ لِإِيجَابِ المَنْفِيِّ — سَوَاءً كَانَ مَا قَبْلَهَا اسْتِفْهَامًا أَوْ خَبَرًا.`] } },
            { html: `Unlike نعم, <bdi>بَلَى</bdi> can ONLY follow something NEGATIVE — and its entire purpose is to FLIP that negative into a positive. It always means "no [you're wrong] — actually, the opposite is true."`, list: false },
            { box: { title: 'Example', lines: [`﴿قَالَ أَوَلَمْ تُؤْمِنْ قَالَ بَلَى﴾`, `﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَى﴾`] } },
            { html: `"He said: Do you not believe? He said: Yes indeed [I believe]." The question أَوَلَمْ تُؤْمِنْ is negative, and بلى flips it: "Yes, [in fact] I DO believe." ﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَى﴾ — "Am I not your Lord? They said: Yes indeed [You are]" — works the same way after a negative استفهام.`, list: false },
            { box: { title: 'Example', lines: [`لَمْ يَقُمْ زَيْدٌ، قُلْتُ بَلَى`] } },
            { html: `"Zayd did not stand [someone claims]. I said: Yes indeed [he did]." Here بلى corrects a negative STATEMENT (<bdi>خَبَر</bdi>), not a question — showing بلى works after either type of negative, not only after a negative سؤال.`, list: false },
          ],
          exercise: {
            prompt: `بلى can follow a negative قول that is a خبر (a plain negative statement), not only a negative سؤال. Which example illustrates this?`,
            kind: 'mcq',
            options: [`لَمْ يَقُمْ زَيْدٌ، قُلْتُ بَلَى — correcting a negative statement, not a question`, `﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَى﴾ — بلى here answers a negative سؤال, not a خبر`, `أَسَافَرَ خَالِدٌ؟ — نَعَمْ (نعم confirming a positive سؤال, unrelated to بلى correcting a خبر)`, `﴿فَهَلْ وَجَدْتُمْ...حَقًّا قَالُوا نَعَمْ﴾ (the same pattern: نعم confirming a positive سؤال, not بلى correcting a خبر)`],
            correct: 0,
          },
        },
        {
          heading: 'نَعَمْ وبَلَى: الفرق الحاسم بينهما',
          lines: [
            { box: { title: 'Careful', lines: [`نَعَمْ وَبَلَى قَدْ تُتَرْجَمَانِ كِلْتَاهُمَا "yes"، لَكِنَّهُمَا تَتَصَرَّفَانِ عَكْسِيًّا بَعْدَ سُؤَالٍ مَنْفِيٍّ.`] } },
            { html: `نعم and بلى are easy to confuse because both can look like "yes" in translation, but they behave oppositely with negative questions. أَمَا سَافَرَ خَالِدٌ؟ answered نعم means "yes, he indeed did NOT travel" (agreeing with the negative). The same question answered بلى would instead mean "no — actually, he DID travel" (flipping the negative). Which one is meant changes the entire answer's meaning, so context always determines which particle is being used.`, list: false },
          ],
          exercise: {
            prompt: `أَمَا سَافَرَ خَالِدٌ؟ answered with نعم means "yes, he indeed did NOT travel." What would the same question answered with بلى mean instead?`,
            kind: 'mcq',
            options: [`No — actually, he DID travel, since بلى flips the negative`, `The same thing as نعم — both simply mean "yes"`, `That the question cannot be answered at all, since أَمَا cannot properly introduce a yes/no question`, `That the answer would actually be invalid — بلى, like أجل, can only follow a statement, not a question`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `أَسَافَرَ خَالِدٌ؟ is phrased positively. Answered with نَعَمْ, what does the answer confirm?`, options: [`That Khalid did travel`, `That Khalid did not travel`, `That the question was invalid`, `That بلى should have been used instead`], correct: 0 },
        { q: `﴿فَهَلْ وَجَدْتُمْ مَا وَعَدَ رَبُّكُمْ حَقًّا قَالُوا نَعَمْ﴾ — the question وَجَدْتُمْ is phrased positively. What does نَعَمْ confirm here?`, options: [`That they did find the promise true`, `That they did not find the promise true`, `That the promise was still awaited`, `That the question was rhetorical`], correct: 0 },
        { q: `بلى can only follow one kind of preceding statement. Which?`, options: [`A negative statement or question`, `A positive statement or question`, `Any statement regardless of polarity`, `Only a قسم — an oath, not a statement of either polarity`], correct: 0 },
        { q: `﴿أَوَلَمْ تُؤْمِنْ قَالَ بَلَى﴾ — the question أَوَلَمْ تُؤْمِنْ is negative ("do you not believe?"). What does بَلَى mean here?`, options: [`Yes, I do believe — flipping the negative into a positive`, `No, I do not believe — agreeing with the negative`, `The question makes no sense — a فعل مضارع cannot directly follow همزة الاستفهام`, `I have not decided yet — بلى can signal hesitation rather than a firm answer`], correct: 0 },
        { q: `لَمْ يَقُمْ زَيْدٌ، قُلْتُ بَلَى corrects a negative خَبَر (statement), not a question. What does this show about بلى?`, options: [`It can follow either a negative سؤال or a negative خبر`, `It can only follow a negative سؤال, never a خبر`, `It always agrees with the negative rather than flipping it`, `It is interchangeable with نعم in every context`], correct: 0 },
        { q: `Two speakers ask أَسَافَرَ خَالِدٌ؟ and أَمَا سَافَرَ خَالِدٌ؟ about the same trip, and both get the answer نعم. Why don't the two answers mean the same thing?`, options: [`Because نعم always agrees with the polarity of its own question, and the two questions have opposite polarity`, `Because نعم changes meaning depending on the day of the week the question was asked`, `Because أَمَا can only be answered with بلى, never with نعم itself`, `Because أَسَافَرَ is not really a question, despite ending with a question mark`], correct: 0 },
      ],
      bank: [
        { title: `نعم: تعريفها العام`, kind: 'mcq', prompt: `What is the general function of نَعَمْ as a حرف جواب?`, options: [`It confirms whichever polarity — positive or negative — the question or statement already had`, `It always means the opposite of what was asked, the way بلى flips a negative`, `It can only follow a negative question, never a positive one`, `It is used only in Qur'anic Arabic, never in ordinary speech`], correct: 0 },
        { title: `بلى: تعريفها العام`, kind: 'mcq', prompt: `What is the general function of بَلَى?`, options: [`It follows a negative and flips it into a positive`, `It follows a positive and flips it into a negative`, `It confirms whatever polarity the question already had`, `It can only follow a قسم, the way إي does`], correct: 0 },
        { title: `أسافر خالد؟ — نعم`, kind: 'mcq', prompt: `أَسَافَرَ خَالِدٌ؟ — نَعَمْ. What does this exchange mean?`, options: [`Yes, Khalid did travel`, `No, Khalid did not travel`, `The question is unanswered`, `Khalid refused to travel`], correct: 0 },
        { title: `أما سافر خالد؟ — نعم`, kind: 'mcq', prompt: `أَمَا سَافَرَ خَالِدٌ؟ — نَعَمْ. What does this exchange mean?`, options: [`Yes, that's correct — Khalid did NOT travel`, `Yes, Khalid did travel after all`, `The question cannot be answered with نعم`, `Khalid traveled twice — this reads نعم as marking repetition (تكثير), not polarity`], correct: 0 },
        { title: `أما سافر خالد؟ — بلى`, kind: 'mcq', prompt: `If أَمَا سَافَرَ خَالِدٌ؟ were instead answered بَلَى, what would that mean?`, options: [`No, actually — Khalid DID travel, flipping the negative`, `Yes, Khalid did not travel, agreeing with the negative`, `The question is invalid — أَمَا cannot properly introduce a yes/no question`, `بلى cannot follow أما — only نعم can answer a negative سؤال introduced by أما`], correct: 0 },
        { title: `وجدتم...حقا: قطبية السؤال`, kind: 'mcq', prompt: `In ﴿فَهَلْ وَجَدْتُمْ مَا وَعَدَ رَبُّكُمْ حَقًّا﴾, is the question هَلْ وَجَدْتُمْ phrased positively or negatively?`, options: [`Positively — phrased as a direct question expecting confirmation`, `Negatively — phrased with a negative particle built in`, `Neither — it has no polarity, the way a plain statement would`, `It is phrased as a command, not a yes/no question at all`], correct: 0 },
        { title: `أولم تؤمن: بلى تقلب السؤال`, kind: 'mcq', prompt: `﴿قَالَ أَوَلَمْ تُؤْمِنْ قَالَ بَلَى﴾. What does بَلَى communicate in this exchange?`, options: [`"Yes, I do believe" — flipping the negative question into a positive answer`, `"No, I do not believe" — agreeing with the negative question`, `A refusal to answer — بلى can mark a pause rather than commit to either polarity`, `A request for the question to be repeated`], correct: 0 },
        { title: `ألست بربكم: بلى تقلب السؤال أيضا`, kind: 'mcq', prompt: `﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَى﴾. What does بَلَى mean here?`, options: [`"Yes indeed, You are our Lord" — flipping the negative question`, `"No, You are not our Lord" — agreeing with the negative question, the way نعم would`, `A neutral acknowledgment with no content — treating بلى as equivalent to a filler word`, `The same thing نعم would mean here — since both are often glossed "yes" in English`], correct: 0 },
        { title: `لم يقم زيد: تصحيح خبر`, kind: 'mcq', prompt: `لَمْ يَقُمْ زَيْدٌ، قُلْتُ بَلَى. What is بَلَى correcting here?`, options: [`A negative statement (خبر), not a question`, `A negative command, telling زيد not to stand`, `A positive question asking whether زيد stood`, `A positive statement claiming زيد did stand`], correct: 0 },
        { title: `نعم مقابل بلى: الفخ المشترك`, kind: 'mcq', prompt: `Both نعم and بلى can be translated as "yes" in English, but they behave oppositely after a negative question. What is the key difference between them?`, options: [`نعم agrees with the question's own polarity; بلى always flips a negative into a positive`, `نعم always flips polarity; بلى always agrees with it`, `Both always mean the same thing regardless of context`, `نعم can only follow نفي; بلى can only follow إثبات`], correct: 0 },
        { title: `بلى: بعد استفهام أو خبر`, kind: 'mcq', prompt: `بلى can follow which types of negative utterance?`, options: [`Either a negative استفهام or a negative خبر`, `Only a negative استفهام, never a negative خبر`, `Only a negative خبر, never a negative استفهام`, `Only a negative أمر, a case this lesson never actually covers`], correct: 0 },
        { title: `نعم: بعد المثبت والمنفي كلاهما`, kind: 'mcq', prompt: `Unlike بلى, نعم can follow which kinds of questions?`, options: [`Both a positively-phrased and a negatively-phrased question`, `Only a positively-phrased question, never one phrased negatively`, `Only a negatively-phrased question, never one phrased positively`, `Neither — نعم only follows statements, the same restriction أجل carries`], correct: 0 },
        { title: `تحديد قطبية السؤال أولا`, kind: 'mcq', prompt: `Before interpreting a نعم answer, what must be checked first?`, options: [`Whether the question itself was phrased positively or negatively`, `Whether the speaker is male or female, since that changes نعم's meaning`, `Whether the question was asked in poetry or prose`, `Whether بلى would have been more polite to use instead`], correct: 0 },
        { title: `هل وجدتم...حقا: الإجابة بنعم`, kind: 'mcq', prompt: `﴿فَهَلْ وَجَدْتُمْ مَا وَعَدَ رَبُّكُمْ حَقًّا قَالُوا نَعَمْ﴾ — since the question is positive, what does نَعَمْ confirm?`, options: [`That they found the promise to be true`, `That they found the promise to be false`, `That the promise had not yet been fulfilled`, `That they refused to answer`], correct: 0 },
        { title: `نعم لا تحمل معنى ثابتا`, kind: 'mcq', prompt: `Does نَعَمْ carry one single fixed meaning regardless of the question it answers?`, options: [`No — its meaning shifts with the question's own polarity`, `Yes — it always means the action occurred`, `Yes — it always means the action did not occur`, `No — its meaning depends only on who is speaking`], correct: 0 },
        { title: `بلى لا تأتي بعد المثبت`, kind: 'mcq', prompt: `Can بَلَى ever follow a positively-phrased question or statement?`, options: [`No — بلى only follows something negative`, `Yes — it can follow either polarity`, `Yes, but only in poetry, where الضرورة الشعرية permits an exception`, `Yes, but only when أل precedes it`], correct: 0 },
        { title: `بلى: قلب المنفي — الترجمة`, kind: 'mcq', prompt: `بلى following a negative always carries roughly which English sense?`, options: [`"No, [you're wrong] — actually the opposite is true"`, `"Yes, that's correct as you said" — the sense نعم would carry instead`, `"Maybe, it's uncertain" — a hedge بلى never actually carries`, `"Never, under no circumstances" — flipping the negative even further`], correct: 0 },
        { title: `تمييز نعم عن بلى في نفس السياق`, kind: 'mcq', prompt: `لَمْ يَقُمْ زَيْدٌ (Zayd did not stand) is answered once with نعم and once, hypothetically, with بلى. What is the difference in meaning between the two answers?`, options: [`نعم confirms Zayd did NOT stand; بلى would mean Zayd DID stand`, `Both would mean Zayd did not stand, since both particles simply agree with نفي`, `Both would mean Zayd did stand, since both particles always flip a negative`, `نعم is grammatically impossible here, since لَمْ demands بلى instead`], correct: 0 },
        {
          title: `تركيب: أَسَافَرَ خَالِدٌ؟ — نَعَمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of the exchange أَسَافَرَ خَالِدٌ؟ — نَعَمْ.`,
          source: `أَسَافَرَ خَالِدٌ؟ — نَعَمْ`,
          words: [`أَسَافَرَ`, `خَالِدٌ`, `نَعَمْ`],
          labels: [`فعل ماض مسبوق بهمزة الاستفهام`, `فاعل`, `حرف جواب: يوافق قطبية السؤال المثبت`],
          distractors: [`حرف جواب: يوافق قطبية السؤال المنفي`, `حرف جواب: يقلب النفي إلى إثبات`, `فعل مضارع مسبوق بهمزة الاستفهام`, `فعل ماض مسبوق بحرف نفي`, `مبتدأ مرفوع`, `حرف جواب نادر يجيب عن استفهام`],
        },
        {
          title: `تركيب: أَمَا سَافَرَ خَالِدٌ؟ — نَعَمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of the exchange أَمَا سَافَرَ خَالِدٌ؟ — نَعَمْ.`,
          source: `أَمَا سَافَرَ خَالِدٌ؟ — نَعَمْ`,
          words: [`أَمَا`, `سَافَرَ`, `خَالِدٌ`, `نَعَمْ`],
          labels: [`حرف استفهام دخل على النفي`, `فعل ماض`, `فاعل`, `حرف جواب: يوافق قطبية السؤال المنفي`],
          distractors: [`حرف جواب: يوافق قطبية السؤال المثبت`, `حرف جواب: يقلب النفي إلى إثبات`, `حرف نفي محايد لا يحمل الاستفهام`, `فعل مضارع`, `فاعل مرفوع`, `مفعول به`],
        },
        {
          title: `تركيب: أَوَلَمْ تُؤْمِنْ قَالَ بَلَى`,
          kind: 'tarkeeb',
          instruction: `Identify the role of the key words in ﴿قَالَ أَوَلَمْ تُؤْمِنْ قَالَ بَلَى﴾.`,
          source: `أَوَلَمْ تُؤْمِنْ قَالَ بَلَى`,
          words: [`تُؤْمِنْ`, `قَالَ`, `بَلَى`],
          labels: [`فعل مضارع في سؤال منفي`, `فعل ماض (قائل الجواب)`, `حرف جواب: يقلب المنفي إلى مثبت`],
          distractors: [`حرف جواب: يوافق قطبية السؤال`, `حرف جواب: يقلب الخبر المنفي إلى مثبت`, `فعل ماض في سؤال منفي`, `فعل مضارع (قائل الجواب)`, `مبتدأ`, `مفعول به`],
        },
        {
          title: `تركيب: لَمْ يَقُمْ زَيْدٌ، قُلْتُ بَلَى`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of لَمْ يَقُمْ زَيْدٌ، قُلْتُ بَلَى.`,
          source: `لَمْ يَقُمْ زَيْدٌ، قُلْتُ بَلَى`,
          words: [`يَقُمْ`, `زَيْدٌ`, `قُلْتُ`, `بَلَى`],
          labels: [`فعل مضارع منفي`, `فاعل`, `فعل ماض (قائل الجواب)`, `حرف جواب: يقلب الخبر المنفي إلى مثبت`],
          distractors: [`حرف جواب: يقلب السؤال المنفي إلى مثبت`, `حرف جواب: يوافق قطبية الخبر`, `فعل مضارع في سؤال منفي`, `فعل ماض منفي`, `فاعل مرفوع`, `مضاف إليه`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أحرف نادرة',
      subtitle: 'إي، أجل، إنّه، وجير — the four rarer أحرف الإيجاب, each with its own strict condition',
      sourceRef: 'app-lessons/089 (part 2)',
      concepts: [
        {
          heading: 'إي: لا تأتي إلا قبل القسم',
          lines: [
            { box: { title: 'Rule', lines: [`إِي حَرْفُ إِيجَابٍ، وَلا يَأْتِي إِلَّا قَبْلَ القَسَمِ.`] } },
            { html: `<bdi>إِي</bdi> is a straightforward "yes," but it comes with a strict structural requirement: it is always immediately followed by a <bdi>قَسَم</bdi> (an oath) — it is never used as a bare, standalone "yes."`, list: false },
            { box: { title: 'Example', lines: [`﴿وَيَسْتَنْبِئُونَكَ أَحَقٌّ هُوَ قُلْ إِي وَرَبِّي إِنَّهُ لَحَقٌّ﴾`] } },
            { html: `"And they ask you: Is it true? Say: Yes, by my Lord, it is indeed true." إي is immediately followed by the oath وَرَبِّي ("by my Lord") — this pairing with a قسم is obligatory whenever إي is used.`, list: false },
          ],
          exercise: {
            prompt: `إي is a straightforward "yes," but it comes with a strict structural requirement. What must always follow it?`,
            kind: 'mcq',
            options: [`A قسم (oath), like وَرَبِّي`, `A negative particle`, `Another one of أحرف الإيجاب`, `Nothing — it must stand alone`],
            correct: 0,
          },
        },
        {
          heading: 'أَجَلْ: توافق على خبر لا استفهام',
          lines: [
            { box: { title: 'Rule', lines: [`أَجَلْ تَأْتِي بَعْدَ الخَبَرِ (لا بَعْدَ الاستفهام)، وَتُفِيدُ المُوَافَقَةَ عَلَى مَا قِيلَ.`] } },
            { html: `<bdi>أَجَلْ</bdi> agrees with a preceding STATEMENT (<bdi>خَبَر</bdi>) — unlike نعم or بلى, it is not used to answer a question; it signals "yes, I agree with what you just said."`, list: false },
            { box: { title: 'Example', lines: [`نُحِبُّ الأَنْصَارَ — أَجَلْ`] } },
            { html: `"We love the Ansar. — Indeed [I agree]." The first speaker made a STATEMENT, not a question, and أجل confirms agreement with that statement.`, list: false },
          ],
          exercise: {
            prompt: `أَجَلْ differs from نعم and بلى in what it can follow. What is that difference?`,
            kind: 'mcq',
            options: [`أجل agrees with a preceding statement (خبر), not a question`, `أجل can only follow a question, never a preceding statement at all`, `أجل can follow either a statement or a question equally`, `أجل always flips the polarity of what preceded it`],
            correct: 0,
          },
        },
        {
          heading: 'إِنَّهْ وجَيْرِ: جوابان نادران عن استفهام',
          lines: [
            { box: { title: 'Rule', lines: [`إِنَّهْ حَرْفُ إِيجَابٍ نَادِرُ الِاسْتِعْمَالِ، يَأْتِي جَوَابًا عَنِ اسْتِفْهَامٍ.`] } },
            { box: { title: 'Example', lines: [`هَلْ تُحِبُّ الصَّحَابَةَ؟ — إِنَّهْ`] } },
            { html: `"Do you love the Companions? — Indeed [yes]." <bdi>إِنَّهْ</bdi> functions as a plain "yes" in reply to a question, though comparatively rare in usage.`, list: false },
            { box: { title: 'Rule', lines: [`جَيْرِ حَرْفُ إِيجَابٍ، وَهُوَ الأَقَلُّ اسْتِعْمَالًا مِنَ السِّتَّةِ، وَيَأْتِي جَوَابًا مُؤَكَّدًا.`] } },
            { box: { title: 'Example', lines: [`هَلْ تَتَّبِعُ الرَّسُولَ وَأَصْحَابَهُ؟ — جَيْرِ لَأَتَّبِعَنَّهُمْ`] } },
            { html: `<bdi>جَيْرِ</bdi> is the rarest of the six, but it functions as an emphatic affirmative response — a stronger "yes indeed" than the plain إنّه.`, list: false },
          ],
          exercise: {
            prompt: `Both إنّه and جير answer a question with "yes," but one of them adds emphasis. Which one?`,
            kind: 'mcq',
            options: [`جير — it is described as جوابًا مُؤَكَّدًا, unlike the plainer إنّه`, `إنّه — it is described as جوابًا مُؤَكَّدًا, unlike the more emphatic جير`, `Neither carries emphasis — both are described only as plain جوابًا, with no مؤكَّد wording at all`, `Both carry identical emphasis — إنّه and جير are simply two spellings of the same جواب`],
            correct: 0,
          },
        },
        {
          heading: 'الشائع والنادر بين الستة',
          lines: [
            { box: { title: 'Careful', lines: [`نَعَمْ وَبَلَى هُمَا الأَكْثَرُ اسْتِعْمَالًا مِنَ السِّتَّةِ. إِي، وَأَجَلْ، وَإِنَّهْ، وَجَيْرِ حُرُوفٌ ثَابِتَةٌ لَكِنَّهَا نَادِرَةٌ.`] } },
            { html: `In everyday and Qur'anic usage, نعم and بلى are by far the most common of the six أحرف الإيجاب.`, list: false },
            { html: `إي، أجل، إنّه، and جير are all real and attested, but comparatively rare — worth knowing for reading classical texts, not the words a learner would expect to hear or use as often in ordinary speech.`, list: false },
          ],
          exercise: {
            prompt: `Of the six أحرف الإيجاب, which two are by far the most common in everyday and Qur'anic usage?`,
            kind: 'mcq',
            options: [`نعم and بلى`, `إي and أجل`, `إنّه and جير`, `أجل and جير`],
            correct: 0,
          },
        },
        {
          heading: 'مراجعة: متى تُستعمل كل أحرف الإيجاب الستة',
          lines: [
            { html: `With all six أحرف الإيجاب now covered across this lesson and the last, one table sets them side by side by what each one follows.`, list: false },
            { table: { title: 'أحرف الإيجاب الستة', headers: ['الحرف', 'متى يُستعمل', 'المعنى'], rows: [
              [`نَعَمْ`, `بعد سؤال مثبت أو منفي`, `يوافق قطبية السؤال`],
              [`بَلَى`, `بعد نفي فقط (استفهام أو خبر)`, `يقلب المنفي إلى مثبت`],
              [`إِي`, `قبل القسم دائمًا`, `إيجاب مقرون بقسم`],
              [`أَجَلْ`, `بعد الخبر (لا الاستفهام)`, `موافقة على ما قيل`],
              [`إِنَّهْ`, `جوابًا عن استفهام (نادر)`, `إيجاب`],
              [`جَيْرِ`, `جوابًا عن استفهام (الأقل استعمالًا)`, `إيجاب مؤكَّد`],
            ] } },
          ],
          exercise: {
            prompt: `Which of the six أحرف الإيجاب is restricted to appearing directly before a قسم?`,
            kind: 'mcq',
            options: [`إي`, `نعم`, `أجل`, `بلى`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `إي is always followed by one specific kind of expression. What is it?`, options: [`A قسم (oath), immediately after it every single time`, `A negative particle, cancelling the polarity of what came before`, `A second حرف جواب, stacked directly after the first`, `Nothing at all — it stands alone`], correct: 0 },
        { q: `نُحِبُّ الأَنْصَارَ — أَجَلْ. Is أَجَلْ answering a question or a statement here?`, options: [`A statement (خبر), not a question at all`, `A question (استفهام), not a statement`, `Neither — it is a stand-alone exclamation`, `Both at once, agreeing with either reading`], correct: 0 },
        { q: `هَلْ تُحِبُّ الصَّحَابَةَ؟ — إِنَّهْ. What kind of response does إِنَّهْ give?`, options: [`A plain affirmative answer to a question, rare in usage`, `An emphatic oath — like إي, always paired with a following قسم`, `A negative answer — إنّه behaves like لا rather than one of أحرف الإيجاب`, `A statement of agreement with a prior خبر, the same role أجل plays`], correct: 0 },
        { q: `هَلْ تَتَّبِعُ الرَّسُولَ وَأَصْحَابَهُ؟ — جَيْرِ لَأَتَّبِعَنَّهُمْ. What distinguishes جير from the plainer إنّه as an answer?`, options: [`جير carries emphasis, marked as a جواب مؤكد`, `إنه carries emphasis and جير does not`, `Both are identical in force, with no difference in emphasis at all`, `جير can only follow a خبر, never a سؤال`], correct: 0 },
        { q: `Which four of the six أحرف الإيجاب are comparatively rare, worth knowing for classical texts but not common in ordinary speech?`, options: [`إي, أجل, إنه, and جير`, `نعم, بلى, إي, and أجل`, `Only إنه and جير`, `All six are equally common`], correct: 0 },
        { q: `أجل is restricted in what it can follow, the way بلى is restricted to negatives. What is أجل restricted to?`, options: [`A preceding خبر, not a preceding استفهام`, `A preceding استفهام, not a preceding خبر`, `A preceding قسم only, the same restriction إي itself carries`, `Nothing — it has no restriction`], correct: 0 },
      ],
      bank: [
        { title: `إي: شرط الاستعمال`, kind: 'mcq', prompt: `What is the one strict condition on using إي?`, options: [`It must be directly followed by a قسم`, `It must directly follow a قسم`, `It can never appear in the Qur'an`, `It must always be doubled`], correct: 0 },
        { title: `إي وربي: مثال`, kind: 'mcq', prompt: `﴿قُلْ إِي وَرَبِّي إِنَّهُ لَحَقٌّ﴾. What role does وَرَبِّي play right after إي?`, options: [`It is the قسم that إي requires`, `It is the مجرور of إي itself`, `It is unrelated to إي`, `It negates إي's meaning`], correct: 0 },
        { title: `أجل: بعد الخبر فقط`, kind: 'mcq', prompt: `Can أجل be used to answer a plain yes/no question the way نعم can?`, options: [`No — أجل answers a preceding statement, not a question`, `Yes — أجل and نعم are fully interchangeable`, `Yes, but only for negative questions`, `No — أجل cannot be used at all in response to speech`], correct: 0 },
        { title: `إنه: الاستعمال`, kind: 'mcq', prompt: `إِنَّهْ answers what kind of preceding utterance?`, options: [`A سؤال (question)`, `A خبر (statement)`, `A قسم (oath)`, `A أمر (command)`], correct: 0 },
        { title: `جير: الأقل استعمالا`, kind: 'mcq', prompt: `Among the six أحرف الإيجاب, which one is described as the least used of all?`, options: [`جير`, `نعم`, `إي`, `أجل`], correct: 0 },
        { title: `جير: جواب مؤكد`, kind: 'mcq', prompt: `جَيْرِ لَأَتَّبِعَنَّهُمْ answers هَلْ تَتَّبِعُ الرَّسُولَ وَأَصْحَابَهُ؟. What kind of answer is جير described as giving?`, options: [`A جواب مؤكد — an emphatic affirmative`, `A جواب محايد — a neutral affirmative`, `A جواب متردد — a hesitant affirmative`, `A رفض — an outright refusal`], correct: 0 },
        { title: `الأربعة النادرة`, kind: 'mcq', prompt: `Besides نعم and بلى, which four particles make up the full list of six أحرف الإيجاب?`, options: [`إي، أجل، إنه، وجير`, `نعم، بلى، إي، وأجل`, `لا، كلا، إي، وجير`, `إي، أجل، لا، وكلا`], correct: 0 },
        { title: `تمييز أجل عن نعم`, kind: 'mcq', prompt: `Both أجل and نعم can be glossed "yes" in English, but one of them cannot answer a question. Which one?`, options: [`أجل — it only agrees with a statement`, `نعم — it only agrees with a statement`, `Neither — both can only answer questions`, `Both — neither can answer a question`], correct: 0 },
        { title: `القسم بعد إي`, kind: 'mcq', prompt: `Why can't إي ever function as a bare, standalone "yes"?`, options: [`Because it always requires a following قسم`, `Because it always requires a following استفهام`, `Because it is not actually an أحرف الإيجاب`, `Because Arabic has no standalone "yes" at all`], correct: 0 },
        { title: `هل تحب الصحابة؟ — إنه`, kind: 'mcq', prompt: `هَلْ تُحِبُّ الصَّحَابَةَ؟ — إِنَّهْ. What does this exchange mean?`, options: [`"Do you love the Companions? — Indeed [yes]"`, `"Do you love the Companions? — No"`, `"Do you love the Companions? — I do not know"`, `"Do you love the Companions? — Ask someone else"`], correct: 0 },
        { title: `نحب الأنصار: أجل`, kind: 'mcq', prompt: `نُحِبُّ الأَنْصَارَ — أَجَلْ. What does أَجَلْ signal here?`, options: [`Agreement with the preceding statement`, `Disagreement with the preceding statement`, `A question about the preceding statement`, `An oath confirming the preceding statement`], correct: 0 },
        { title: `الأكثر شيوعا مقابل الأقل`, kind: 'mcq', prompt: `Of all six أحرف الإيجاب, which pairing is accurate regarding frequency of use?`, options: [`نعم وبلى are by far the most common; the other four are comparatively rare`, `All six are used with roughly equal frequency`, `إي and أجل are the most common; نعم and بلى are rare`, `جير is the most common of all six, despite being introduced last in this lesson`], correct: 0 },
        { title: `الفرق بين إنه وجير`, kind: 'mcq', prompt: `Both إنّه and جير answer a سؤال. What is the main difference between the force of the two؟`, options: [`جير adds emphasis (جواب مؤكد); إنه is a plain affirmative`, `إنه adds emphasis; جير is plain, the reverse of what this lesson states`, `Both carry identical force, despite the different wording used for each`, `إنه can only follow a خبر, unlike جير`], correct: 0 },
        { title: `الأحرف الستة: تصنيفها`, kind: 'mcq', prompt: `All six particles covered across this pair of lessons — نعم، بلى، إي، أجل، إنه، جير — belong to which single ضرب of أحرف الجواب؟`, options: [`أحرف الإيجاب`, `حرفا النفي`, `أحرف العطف`, `أحرف الاستفهام`], correct: 0 },
        { title: `أجل لا تجيب عن سؤال`, kind: 'mcq', prompt: `If someone asks a direct yes/no question, is أجل an appropriate response؟`, options: [`No — أجل only responds to a statement, not a question`, `Yes — أجل is the standard response to any question`, `Yes, but only to negative questions`, `No — أجل is never used in response to anything`], correct: 0 },
        { title: `القسم: الشرط الوحيد على إي`, kind: 'mcq', prompt: `Which of the following best describes the single grammatical restriction placed on إي؟`, options: [`It must be immediately followed by a قسم`, `It must never be followed by anything`, `It must always answer a negative question`, `It must always be repeated twice`], correct: 0 },
        {
          title: `تركيب: إِي وَرَبِّي إِنَّهُ لَحَقٌّ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of the key words in ﴿قُلْ إِي وَرَبِّي إِنَّهُ لَحَقٌّ﴾.`,
          source: `إِي وَرَبِّي إِنَّهُ لَحَقٌّ`,
          words: [`إِي`, `وَرَبِّي`, `إِنَّهُ`],
          labels: [`حرف جواب لا يأتي إلا قبل القسم`, `القسم الذي يتبع إي`, `حرف توكيد يفتتح الجملة المؤكَّدة`],
          distractors: [`حرف جواب يقلب المنفي إلى مثبت`, `حرف جواب يوافق على خبر سابق`, `حرف جواب نادر يجيب عن استفهام دون قسم`, `حرف جواب مؤكَّد يجيب عن استفهام`, `القسم الذي يسبق إي`, `حرف توكيد يلحق خبر إنّ`],
        },
        {
          title: `تركيب: نُحِبُّ الأَنْصَارَ — أَجَلْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of نُحِبُّ الأَنْصَارَ — أَجَلْ.`,
          source: `نُحِبُّ الأَنْصَارَ — أَجَلْ`,
          words: [`نُحِبُّ`, `الأَنْصَارَ`, `أَجَلْ`],
          labels: [`فعل مضارع وفاعله ضمير مستتر`, `مفعول به`, `حرف جواب يوافق على خبر سابق`],
          distractors: [`حرف جواب يأتي جوابا عن استفهام فقط`, `حرف جواب لا يأتي إلا قبل القسم`, `حرف جواب يقلب الخبر المنفي إلى مثبت`, `فعل مضارع وفاعله ضمير بارز`, `فاعل مرفوع`, `حرف نفي محايد`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'لا وكَلَّا',
      subtitle: 'لا wholly neutral, كلّا carrying الزجر والردع — a firm, scolding rejection of what came before',
      sourceRef: 'app-lessons/090 (part 1)',
      concepts: [
        {
          heading: 'الضرب الثاني من أحرف الجواب: حرفا النفي',
          lines: [
            { box: { title: 'Definition', lines: [`الضَّرْبُ الثَّانِي: حَرْفَا النَّفْيِ. الأَوَّلُ لَا. الثَّانِي كَلَّا لِلزَّجْرِ، وَهُوَ رَدٌّ لِمَا قَبْلَهَا وَإِثْبَاتٌ لِمَا بَعْدَهَا.`] } },
            { html: `The second ضرب of أحرف الجواب is <bdi>حَرْفَا النَّفْي</bdi> — the two negative response particles. <bdi>لا</bdi> is simple; <bdi>كَلَّا</bdi> carries far more nuance and is the main focus of this lesson and the next.`, list: false },
          ],
          exercise: {
            prompt: `أحرف الجواب's second ضرب, حرفا النفي, consists of two particles. What are they؟`,
            kind: 'mcq',
            options: [`لا and كلّا`, `نعم and بلى`, `أجل and إنه`, `لا and بلى`],
            correct: 0,
          },
        },
        {
          heading: 'لا: نفي محايد بلا لبس',
          lines: [
            { box: { title: 'Example', lines: [`هَلْ تُبْغِضُ الصَّحَابَةَ؟ — لَا`] } },
            { html: `"Do you hate the Companions? — No." <bdi>لا</bdi> simply negates plainly — it carries no extra emotional or rhetorical charge; it is pure information.`, list: false },
          ],
          exercise: {
            prompt: `هَلْ تُبْغِضُ الصَّحَابَةَ؟ — لَا. What kind of negation does plain لا carry here؟`,
            kind: 'mcq',
            options: [`A flat, neutral negation with no extra rhetorical force`, `A forceful rebuke of the question itself`, `An implied "yes, in fact I do" — the sense بلى would carry instead`, `A negation that only applies to statements, never questions`],
            correct: 0,
          },
        },
        {
          heading: 'كَلَّا: الزجر والردع',
          lines: [
            { box: { title: 'Rule', lines: [`كَلَّا حَرْفُ رَدْعٍ وَزَجْرٍ عَنْ مَضْمُونِ كَلَامٍ سَابِقٍ، وَهُوَ رَدٌّ لِمَا قَبْلَهَا وَإِثْبَاتٌ لِمَا بَعْدَهَا.`] } },
            { html: `Unlike the flat, neutral لا, <bdi>كَلَّا</bdi> carries real force: <bdi>الزَّجْر</bdi> means to REBUKE or SCOLD, not merely to disagree. When someone says كلا, they are not just saying "no" — they are firmly rejecting what was just said.`, list: false },
            { box: { title: 'Example', lines: [`﴿قَالَ رَبِّ ارْجِعُونِ ۝ لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ ۝ كَلَّا﴾`] } },
            { html: `"He will say: My Lord, send me back, that I might do righteousness in that which I left behind. No!" This is the disbeliever in the Hereafter, begging for a second chance. كلا here is a sharp rebuke: that plea will never be granted — the request itself is being firmly, scoldingly refused, not just declined.`, list: false },
          ],
          exercise: {
            prompt: `﴿قَالَ رَبِّ ارْجِعُونِ لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ كَلَّا﴾ — a disbeliever begs for a second chance in the Hereafter. What does كَلَّا do to that plea؟`,
            kind: 'mcq',
            options: [`It firmly, scoldingly rejects the plea — the request will never be granted`, `It grants the plea, allowing a second chance, treating كلا as if it meant نعم`, `It expresses uncertainty about the plea, the way a hesitant لا might, rather than firmly rejecting it`, `It merely repeats the plea's own words back, without adding any rebuke of its own`],
            correct: 0,
          },
        },
        {
          heading: 'كَلَّا لا تقف عند حدها',
          lines: [
            { box: { title: 'Rule', lines: [`وَالغَالِبُ أَنْ تَكُونَ كَلَّا مُتْبَعَةً بِكَلَامٍ بَعْدَهَا — فَلَا يُعْهَدُ فِي كَلَامِ العَرَبِ أَنْ يَقُولَ قَائِلٌ فِي رَدِّ كَلَامٍ: كَلَّا، ثُمَّ يَسْكُتُ.`] } },
            { html: `Unlike نعم, لا, or بلى, which can all stand alone as a complete one-word answer, كلا is almost always followed by MORE speech — the Arabs simply don't say كلا and then fall silent; كلا is expected to be followed by further explanation of what exactly is being rebuked.`, list: false },
          ],
          exercise: {
            prompt: `Unlike نعم, لا, or بلى, which can all be a complete one-word answer on their own, what is expected after كلا؟`,
            kind: 'mcq',
            options: [`Further speech explaining exactly what is being rebuked`, `Total silence, immediately after the word`, `A repetition of the same word, said twice for extra emphasis`, `A قسم, the way إي always requires one to follow it`],
            correct: 0,
          },
        },
        {
          heading: 'كَلَّا: علامة مكية',
          lines: [
            { box: { title: 'Careful', lines: [`لَمْ يَرِدْ كَلِمَةُ كَلَّا إِلَّا فِي سُورَةٍ مَكِّيَّةٍ.`] } },
            { html: `The word كلا occurs ONLY in Makkan سور of the Qur'an, never in a Madinan one. This is a useful textual marker, not a coincidence — it reflects the confrontational, corrective tone often needed when addressing the disbelief and denial that characterized the Makkan period.`, list: false },
          ],
          exercise: {
            prompt: `The word كلا occurs only in one category of Qur'anic سورة. Which؟`,
            kind: 'mcq',
            options: [`Makkan سور only — never a Madinan one`, `Madinan سور only — never a Makkan one`, `Both Makkan and Madinan سور equally`, `Only in سور revealed during the Hijrah itself`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `هَلْ تُبْغِضُ الصَّحَابَةَ؟ — لَا. Does this لا carry any extra rhetorical force beyond plain negation؟`, options: [`No — it is pure, neutral information`, `Yes — it is a sharp rebuke`, `Yes — it implies the opposite is true`, `No — it cannot answer a question at all`], correct: 0 },
        { q: `كلا's primary, original (حقيقة) meaning is which of the following؟`, options: [`الزجر والردع — rebuke and repulsion of what preceded it`, `التصديق — confirming what preceded it, the same sense كلا carries after ذكرى للبشر`, `الاستفتاح — simply opening a new statement, the way ألا would`, `موافقة على خبر سابق — agreement with a preceding statement, closer to how أجل behaves`], correct: 0 },
        { q: `﴿لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ كَلَّا﴾ — what is كَلَّا rejecting here؟`, options: [`The disbeliever's plea for a second chance`, `A true statement made by the believers`, `A question asked by the angels`, `The concept of الآخرة itself`], correct: 0 },
        { q: `Can a speaker say كلا and then fall completely silent, the way نعم, لا, or بلى can stand alone؟`, options: [`No — كلا is almost always followed by further explanatory speech`, `Yes — كلا behaves exactly like نعم and لا in this respect`, `Yes, but only in poetry, where الضرورة الشعرية permits an otherwise unattested pattern`, `No — كلا can never be followed by anything at all`], correct: 0 },
        { q: `The word كلا appears only in one category of Qur'anic سورة. What does this pattern reflect؟`, options: [`The confrontational, corrective tone often needed addressing Makkan disbelief and denial`, `A purely stylistic accident with no connection to content or historical period`, `The fact that كلا was a later linguistic invention, unattested before Islam`, `A grammatical restriction unrelated to content, the same as حرف جر placement`], correct: 0 },
        { q: `الزجر means specifically to do what, according to this lesson؟`, options: [`To rebuke or scold, not merely to disagree`, `To politely decline, the flat and neutral way plain لا does`, `To ask a follow-up question, the way an unclear جواب sometimes prompts`, `To agree enthusiastically, the way جير answers a question with extra force`], correct: 0 },
      ],
      bank: [
        { title: `لا: نوعها`, kind: 'mcq', prompt: `What kind of حرف is لا when used simply as a one-word negative reply؟`, options: [`حرف نفي محايد لا يحمل شحنة زائدة`, `حرف زجر وردع`, `حرف يفيد التوكيد`, `حرف جواب مؤكد`], correct: 0 },
        { title: `حرفا النفي: التسمية العامة`, kind: 'mcq', prompt: `As a family, لا and كلا together are named what؟`, options: [`حرفا النفي`, `أحرف الإيجاب`, `أحرف التأكيد`, `أحرف الجزاء`], correct: 0 },
        { title: `كلا: المعنى الأصلي`, kind: 'mcq', prompt: `What is كلا's primary (أصلي) sense؟`, options: [`الزجر والردع`, `التصديق`, `الاستفتاح`, `الموافقة`], correct: 0 },
        { title: `الزجر: تعريفه`, kind: 'mcq', prompt: `الزجر, as used to describe كلا's primary sense, means what precisely؟`, options: [`To firmly rebuke or scold, not merely disagree`, `To politely disagree, the flat and neutral way plain لا does`, `To ask for clarification, as if الزجر meant raising a follow-up سؤال`, `To agree with reservations, closer to how أجل agrees with a خبر`], correct: 0 },
        { title: `كلا: رد وإثبات`, kind: 'mcq', prompt: `The definition of كلا للزجر says it is رد لما قبلها وإثبات لما بعدها. What does that mean؟`, options: [`It rejects what came before it and affirms what comes after it`, `It rejects everything, before and after`, `It affirms everything, before and after`, `It has no relation to what comes before or after it`], correct: 0 },
        { title: `مثال: قال ربّ ارجعون`, kind: 'mcq', prompt: `In ﴿قَالَ رَبِّ ارْجِعُونِ لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ كَلَّا﴾, who is speaking, and what are they asking for؟`, options: [`A disbeliever in the Hereafter, asking to be sent back for a second chance`, `A believer, asking for more good deeds to be recorded`, `An angel, asking permission to punish those who denied the truth`, `A Prophet, asking for his people to be forgiven`], correct: 0 },
        { title: `كلا: رفض قاطع`, kind: 'mcq', prompt: `What is the force of كلا's rejection of the disbeliever's plea in ﴿...فِيمَا تَرَكْتُ كَلَّا﴾؟`, options: [`Firm and final — the request will never be granted`, `Tentative — the request might still be reconsidered`, `Sympathetic — the request is understandable`, `Neutral — the request is simply noted`], correct: 0 },
        { title: `عدم الوقوف عند كلا`, kind: 'mcq', prompt: `What does الغالب أن تكون كلا متبعة بكلام بعدها mean for how كلا is used؟`, options: [`كلا is almost always followed by more speech, not left to stand alone`, `كلا must always be repeated twice in a row before any speech follows`, `كلا can never appear at the end of a سورة, though it can appear anywhere else in one`, `كلا must always be preceded by استفهام, never by a plain statement`], correct: 0 },
        { title: `تمييز كلا عن نعم ولا وبلى`, kind: 'mcq', prompt: `نعم, لا, and بلى can all serve as a complete, stand-alone one-word answer. Does كلا behave the same way؟`, options: [`No — كلا is almost never left standing alone without further speech`, `Yes — all four behave identically in this respect`, `No — none of the four can ever stand alone`, `Yes, but only بلى shares this trait with كلا`], correct: 0 },
        { title: `كلا: علامة السور المكية`, kind: 'mcq', prompt: `What textual pattern is noted about where the word كلا occurs in the Qur'an؟`, options: [`It occurs only in Makkan سور, never in a Madinan one`, `It occurs only in Madinan سور, never in a Makkan one`, `It occurs equally often in both Makkan and Madinan سور`, `It occurs only in the final سورة of the Qur'an`], correct: 0 },
        { title: `لماذا كلا مكية فقط؟`, kind: 'mcq', prompt: `Why is the Makkan-only occurrence of كلا considered meaningful rather than a coincidence؟`, options: [`It reflects the confrontational, corrective tone needed addressing Makkan disbelief and denial`, `Because Madinan سور are grammatically simpler, needing fewer emphatic particles overall`, `Because كلا was invented after the Hijrah, once the Madinan style had already settled`, `Because Makkan سور never use أحرف النفي otherwise, unlike لا which appears everywhere`], correct: 0 },
        { title: `لا: مثال محايد`, kind: 'mcq', prompt: `هَلْ تُبْغِضُ الصَّحَابَةَ؟ — لَا. What is the tone of this exchange؟`, options: [`A plain, neutral denial with no extra force`, `A sharp rebuke of the question itself`, `An enthusiastic agreement, the emphatic sense جير would carry rather than لا`, `A refusal to answer at all, as if لا carried كلا's own rebuking force`], correct: 0 },
        { title: `هل لا تحمل شحنة كلا؟`, kind: 'mcq', prompt: `Compared to كلا, does plain لا carry the same rebuking force؟`, options: [`No — لا is flat and informational; كلا carries real rebuking force`, `Yes — both carry identical rebuking force`, `No — neither carries any force at all, both being purely neutral`, `Yes, but only لا carries emphasis, not كلا`], correct: 0 },
        { title: `كلا: لا يُعهد السكوت بعدها`, kind: 'mcq', prompt: `What does the Arabs' actual usage show about ending a reply with a bare كلا and nothing more؟`, options: [`It is not attested — a bare كلا followed by silence is not how the Arabs used it`, `It is the standard, most common way to use كلا`, `It is only acceptable in poetry, where الضرورة الشعرية permits an otherwise unattested pattern`, `It is required whenever كلا answers a خبر, never when it answers a سؤال`], correct: 0 },
        { title: `الضرب الثاني: عدد أفراده`, kind: 'mcq', prompt: `How many particles make up حرفا النفي, the second ضرب of أحرف الجواب؟`, options: [`Two — لا and كلا, together forming حرفا النفي`, `Six — the same count as أحرف الإيجاب`, `Three — لا، كلا، and لات`, `One — only كلا, since لا is not truly a حرف جواب`], correct: 0 },
        { title: `كلا مقابل لا: أيهما أعقد؟`, kind: 'mcq', prompt: `Which of the two حرفا النفي carries far more grammatical nuance, according to this lesson؟`, options: [`كلا — it carries several distinct layered senses, not one`, `لا — it carries only a single, flat sense throughout`, `Both carry identical nuance, with neither outranking the other`, `Neither carries any nuance, both being purely literal`], correct: 0 },
        { title: `الردع يفترض كلاما سابقا`, kind: 'mcq', prompt: `كلا's rebuking sense (الزجر) is described as a رد عن مضمون كلام سابق. What does that require the rebuke to be directed at؟`, options: [`The content of something said or implied just before it`, `A future event that has not yet occurred, something الزجر never addresses`, `A grammatical rule stated elsewhere in this lesson, unrelated to content`, `Nothing in particular — it can stand with no preceding content at all`], correct: 0 },
        {
          title: `تركيب: هَلْ تُبْغِضُ الصَّحَابَةَ؟ — لَا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of هَلْ تُبْغِضُ الصَّحَابَةَ؟ — لَا.`,
          source: `هَلْ تُبْغِضُ الصَّحَابَةَ؟ — لَا`,
          words: [`تُبْغِضُ`, `الصَّحَابَةَ`, `لَا`],
          labels: [`فعل مضارع في سؤال`, `مفعول به`, `حرف نفي محايد`],
          distractors: [`حرف زجر وردع`, `حرف جواب: يوافق قطبية السؤال المنفي`, `حرف جواب: يقلب النفي إلى إثبات`, `فعل ماض في سؤال`, `فاعل مرفوع`, `حرف تصديق لما قبلها`],
        },
        {
          title: `تركيب: فِيمَا تَرَكْتُ كَلَّا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of تَرَكْتُ and كَلَّا in ﴿فِيمَا تَرَكْتُ كَلَّا﴾.`,
          source: `فِيمَا تَرَكْتُ كَلَّا`,
          words: [`تَرَكْتُ`, `كَلَّا`],
          labels: [`فعل ماض وفاعله تاء المتكلم`, `حرف زجر وردع لما قبلها`],
          distractors: [`حرف نفي محايد`, `حرف تصديق لما قبلها`, `حرف استفتاح لما بعدها`, `فعل مضارع وفاعله تاء المخاطب`, `حرف جواب: يوافق قطبية السؤال`, `حرف زجر وردع لما بعدها`],
        },
        {
          title: `تركيب: قَالَ رَبِّ ارْجِعُونِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of ارْجِعُونِ in ﴿قَالَ رَبِّ ارْجِعُونِ﴾, the plea كلا goes on to reject.`,
          source: `قَالَ رَبِّ ارْجِعُونِ`,
          words: [`قَالَ`, `رَبِّ`, `ارْجِعُونِ`],
          labels: [`فعل ماض`, `منادى مضاف إلى ياء المتكلم محذوفة`, `فعل أمر وفاعله واو الجماعة`],
          distractors: [`حرف زجر وردع`, `مفعول به`, `فعل مضارع مجزوم`, `مضاف إليه`, `منادى مفرد مبني على الضم`, `فعل أمر وفاعله ضمير مستتر تقديره أنت`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'كَلَّا المجازية',
      subtitle: 'التصديق and الاستفتاح beyond الردع, where the recitation pause falls, and how to read an ambiguous كلا',
      sourceRef: 'app-lessons/090 (part 2)',
      concepts: [
        {
          heading: 'كَلَّا مجازًا: التصديق',
          lines: [
            { box: { title: 'Rule', lines: [`وَقَدْ تَأْتِي كَلَّا لِغَيْرِ الزَّجْرِ وَالرَّدْعِ: لِلتَّصْدِيقِ لِمَا قَبْلَهَا (بِمَعْنَى أَجَلْ وَإِي)، أَوْ لِلِاسْتِفْتَاحِ (بِمَعْنَى أَلَا).`] } },
            { html: `Beyond its primary (<bdi>حَقيقة</bdi>) sense of rebuke, كلا can carry two secondary (<bdi>مَجاز</bdi>) meanings depending on context — this concept covers the first: <bdi>تَصْدِيق</bdi>, confirming what preceded it.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ ۝ كَلَّا وَالْقَمَرِ﴾`] } },
            { html: `"It is but a reminder to mankind. Indeed, by the moon..." There is nothing here to rebuke — Allah is simply CONFIRMING the preceding statement (that the Qur'an is a reminder) before swearing an oath by the moon. كلا here functions like أجل or إي: "yes, truly."`, list: false },
          ],
          exercise: {
            prompt: `﴿وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ كَلَّا وَالْقَمَرِ﴾ — is there anything here for كَلَّا to rebuke؟`,
            kind: 'mcq',
            options: [`No — it simply confirms the preceding statement, functioning like أجل or إي`, `Yes — it rebukes the claim that the Qur'an is a reminder`, `Yes — it rebukes mankind directly for failing to heed the reminder`, `No — the phrase has no meaning at all, despite its familiar wording`],
            correct: 0,
          },
        },
        {
          heading: 'كَلَّا مجازًا: الاستفتاح',
          lines: [
            { box: { title: 'Example', lines: [`﴿عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ ۝ كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾`] } },
            { html: `"He taught man what he did not know. Indeed! Man truly transgresses." This كلا cannot be تصديق, لِتَأَخُّرِ نُزولِهِ — because, historically, this second آية was revealed much LATER than the first, with a real gap in revelation between them; there is nothing immediately prior for it to "confirm." Instead it functions like <bdi>أَلا</bdi> — an opening word of emphasis, drawing attention to what FOLLOWS it.`, list: false },
          ],
          exercise: {
            prompt: `﴿عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾ cannot be read as تصديق. Why not؟`,
            kind: 'mcq',
            options: [`A real gap in revelation separates the two آيات, so there is nothing immediately prior for كلا to confirm`, `Because الإنسان is never the subject of تصديق in any construction across the Qur'an`, `Because كلا can never mean تصديق in any context, only الزجر or الاستفتاح`, `Because the second آية was revealed before the first, reversing the expected order`],
            correct: 0,
          },
        },
        {
          heading: 'الوقف: أين تقع القراءة',
          lines: [
            { box: { title: 'Rule', lines: [`إِذَا كَانَتْ كَلَّا لِلزَّجْرِ، يَقَعُ الوَقْفُ عَلَيْهَا، وَالِابْتِدَاءُ بِمَا بَعْدَهَا. وَإِذَا كَانَتْ لِلتَّصْدِيقِ، يَقَعُ الوَقْفُ عَلَى مَا قَبْلَهَا، وَالِابْتِدَاءُ بِهَا.`] } },
            { html: `Where كلا falls in a recitation pause (<bdi>وَقْف</bdi>) depends entirely on which meaning is intended: for زجر, the pause falls AFTER كلا, then a fresh start with what follows (as in ...تَرَكْتُ [pause] كَلَّا [pause]...). For تصديق, the pause instead falls BEFORE كلا, and the next portion begins WITH كلا attached to what follows it (...لِلْبَشَرِ [pause] كَلَّا وَالْقَمَرِ...).`, list: false },
          ],
          exercise: {
            prompt: `For الزجر, where does the recitation pause (وقف) fall relative to كلا؟`,
            kind: 'mcq',
            options: [`After كلا, then a fresh start with what follows`, `Before كلا, with كلا attached to what follows`, `In the middle of the word كلا itself`, `There is no pause rule for الزجر`],
            correct: 0,
          },
        },
        {
          heading: 'عند الاحتمال: يُرجَّح الردع لأنه أصل',
          lines: [
            { box: { title: 'Careful', lines: [`إِذَا احْتَمَلَتْ كَلَّا الرَّدْعَ وَغَيْرَهُ، رُجِّحَ الرَّدْعُ لِأَنَّهُ أَصْلٌ، وَالحَقِيقَةُ أَوْلَى مِنَ المَجَازِ.`] } },
            { html: `When كلا is genuinely ambiguous between the two meanings, <bdi>الرَّدْع</bdi> (rebuke) is preferred by default — because rebuke is كلا's PRIMARY, original meaning, and the other senses (تصديق، استفتاح) are secondary, figurative extensions (<bdi>مَجاز</bdi>). الحَقيقَةُ أَوْلَى مِنَ المَجازِ: the literal/original meaning always takes precedence over a figurative one when both are possible readings.`, list: false },
            { box: { title: 'Example', lines: [`﴿أَطَّلَعَ الْغَيْبَ أَمِ اتَّخَذَ عِندَ الرَّحْمَٰنِ عَهْدًا ۝ كَلَّا سَنَكْتُبُ مَا يَقُولُ﴾`] } },
            { html: `كلا here could arguably work either way, but is read as رَدْع by default.`, list: false },
          ],
          exercise: {
            prompt: `When كلا is genuinely ambiguous between رد ع and a figurative sense, which reading is preferred by default, and why؟`,
            kind: 'mcq',
            options: [`الردع — because الحقيقة (the literal, original meaning) takes precedence over المجاز`, `التصديق — because it is the more common everyday sense`, `الاستفتاح — because it always comes first chronologically`, `Neither — ambiguous instances are simply skipped`],
            correct: 0,
          },
        },
        {
          heading: 'معنى مرجوح: كَلَّا بمعنى حَقًّا',
          lines: [
            { box: { title: 'Rule', lines: [`وَعِنْدَ البَعْضِ كَلَّا بِمَعْنَى حَقًّا، وَهَذَا مَرْجُوحٌ.`] } },
            { html: `A minority opinion holds that كلا can simply mean <bdi>حَقًّا</bdi> ("truly/certainly") in some places. This view is considered weak (<bdi>مَرْجوح</bdi>) for a grammatical reason: after the word حقًّا, what follows should normally be <bdi>مَفْتوحَة</bdi>, but the Qur'anic text after كلا in the relevant verses is <bdi>مَكْسورَة</bdi> — a mismatch that argues against reading كلا as a simple synonym of حقًّا.`, list: false },
          ],
          exercise: {
            prompt: `A minority view holds كلا can simply mean حقا. Why is this view considered مرجوح (weak)؟`,
            kind: 'mcq',
            options: [`What follows حقا should be مفتوحة, but the text after كلا in the relevant verses is مكسورة — a mismatch`, `Because حقا never appears anywhere else in the Qur'an in this exact grammatical position`, `Because كلا only ever appears at the start of a سورة, never mid-verse`, `Because التصديق and الاستفتاح are grammatically identical to حقا in every respect`],
            correct: 0,
          },
        },
        {
          heading: 'المردود قد يكون مقدَّرًا',
          lines: [
            { box: { title: 'Careful', lines: [`قَدْ يَكونُ المَرْدودُ بِكَلَّا مُقَدَّرًا لا مَذْكورًا، فَتُرَدُّ دَعْوى مُضْمَرَةً لا صَريحَةً.`] } },
            { html: `Even within the primary زجر meaning, what is being "rebuked" (<bdi>المَرْدود</bdi>) is not always an explicit sentence spoken just before كلا — it can be <bdi>مُقَدَّر</bdi> (an implied statement, not literally present in the text). ﴿عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ ۝ كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾ can be read this way too: كلا is not rebuking the sentence "He taught man what he did not know" itself — that statement is simply true — it is rebuking an UNSTATED, implied claim, something like "[so man should be grateful]," which كلا then firmly rejects.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾ read as زجر, what exactly is كلا rebuking, given the first آية states a true fact rather than a false claim؟`,
            kind: 'mcq',
            options: [`An unstated, implied claim — something like "so man should be grateful" — which كلا then rejects`, `The literal wording of the first آية itself, which is being called false`, `Nothing — this reading is impossible under الزجر, since the first آية states something true`, `A claim made by the angels, not by man, since الإنسان is only mentioned afterward`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `﴿وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ كَلَّا وَالْقَمَرِ﴾ — which secondary meaning does كلا carry here؟`, options: [`التصديق — confirming the preceding statement, since nothing here calls for rebuke`, `الزجر — rebuking the preceding statement, though nothing here needs rebuking`, `الاستفتاح — opening a new statement with no link to what precedes`, `المعنى المرجوح, حقا — the weak reading some hold كلا can simply carry`], correct: 0 },
        { q: `The chronological gap between ﴿عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ﴾ and ﴿كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾ rules out which reading of كلا؟`, options: [`التصديق, since a real gap leaves nothing immediately prior to confirm`, `الاستفتاح, since it always requires an oath immediately after it, the way إي does`, `الزجر, since the preceding آية states a true fact, not a false claim`, `All three readings are ruled out, leaving كلا without any valid sense here`], correct: 0 },
        { q: `If كلا is read as التصديق, where does the وقف fall relative to it؟`, options: [`Right before it — the pause falls there, and كلا opens the next portion`, `Right after it instead — the way الزجر's reading places the pause`, `Split down the middle of the word itself`, `There is no وقف rule for التصديق`], correct: 0 },
        { q: `When a given instance of كلا could plausibly be read as either الردع or a مجازي sense, which is preferred by default, per الحقيقة أولى من المجاز؟`, options: [`الردع, since الحقيقة outranks المجاز by default`, `التصديق, since it is the more familiar everyday sense`, `الاستفتاح, since it always opens a new statement`, `Whichever sense the reciter personally prefers`], correct: 0 },
        { q: `What grammatical detail argues against reading كلا as simply meaning حقا؟`, options: [`The word following حقا should be مفتوحة, but the actual Qur'anic text after كلا is مكسورة`, `حقا never appears in the Qur'an at all, despite كلا's own frequent occurrence`, `كلا and حقا have completely unrelated root letters, despite their similar sound`, `حقا can only follow a فعل ماضٍ, unlike كلا which can precede either tense`], correct: 0 },
        { q: `Reading ﴿كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾ as زجر, what is being rebuked, given the preceding آية states something true rather than something false؟`, options: [`An unstated, implied claim (مقدر) rather than the explicit words of the prior آية`, `The explicit wording of the prior آية itself`, `Nothing — الزجر is impossible in this case, since the preceding آية states a true fact`, `A claim made later in the same سورة, well after كلا itself appears`], correct: 0 },
      ],
      bank: [
        { title: `كلا: معنيان مجازيان`, kind: 'mcq', prompt: `Beyond الزجر, what two مجازي senses can كلا carry؟`, options: [`التصديق and الاستفتاح`, `التوكيد and الاستفهام`, `النفي and الإيجاب`, `القسم and الشرط`], correct: 0 },
        { title: `التصديق: المعنى القريب`, kind: 'mcq', prompt: `كلا للتصديق is said to carry roughly the same sense as which other particles؟`, options: [`أجل and إي`, `نعم and بلى`, `لا and كلا نفسها`, `هل and أ`], correct: 0 },
        { title: `الاستفتاح: المعنى القريب`, kind: 'mcq', prompt: `كلا للاستفتاح is said to carry roughly the same sense as which particle؟`, options: [`أَلَا`, `أَجَلْ`, `إِي`, `بَلَى`], correct: 0 },
        { title: `وما هي إلا ذكرى: لا شيء يُردع`, kind: 'mcq', prompt: `In ﴿وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ كَلَّا وَالْقَمَرِ﴾, is there any claim being rebuked immediately before كلا؟`, options: [`No — nothing here calls for rebuke; كلا simply confirms`, `Yes — the claim that the Qur'an is a ذكرى, which كلا is said to correct`, `Yes — the mention of البشر, whom the ذكرى was sent to remind`, `Yes — the oath وَالْقَمَرِ itself, sworn immediately after كلا`], correct: 0 },
        { title: `علم الإنسان: سبب استبعاد التصديق`, kind: 'mcq', prompt: `What specific historical fact rules out reading ﴿كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾ as تصديق؟`, options: [`A real gap in revelation separates it from the آية before it, chronologically`, `The آية before it was never actually revealed`, `كلا never follows a positive statement, unlike its تصديق sense which confirms one`, `تصديق only occurs in Madinan سور, and this سورة is Makkan`], correct: 0 },
        { title: `الاستفتاح: وظيفته`, kind: 'mcq', prompt: `As الاستفتاح, what does كلا do to the statement that follows it؟`, options: [`It draws attention to it, opening it with emphasis`, `It negates it entirely, the way plain لا negates a following claim`, `It questions its truth, functioning like a هل placed before it`, `It confirms a statement that came before it`], correct: 0 },
        { title: `قاعدة الوقف للزجر`, kind: 'mcq', prompt: `For الردع, is the pause placed before or after كلا؟`, options: [`After it — the pause lands there, and what follows starts a new phrase`, `Before it — the pause lands earlier, and كلا joins onto what comes next`, `Squarely inside كلا, splitting the word itself`, `There is no fixed rule — unlike التصديق, whose وقف always falls before it`], correct: 0 },
        { title: `قاعدة الوقف للتصديق`, kind: 'mcq', prompt: `For التصديق, is the pause placed before or after كلا؟`, options: [`Before كلا, with كلا joined to what follows, unlike the زجر rule`, `After كلا, alone — the same وقف rule that applies when كلا means الزجر`, `At both points simultaneously, pausing once before كلا and again after it`, `Nowhere — التصديق never receives a وقف, unlike الزجر which always does`], correct: 0 },
        { title: `الحقيقة أولى من المجاز`, kind: 'mcq', prompt: `When ambiguous, why is الردع preferred over the two مجازي readings؟`, options: [`Because الحقيقة (the literal/original meaning) is preferred over المجاز whenever both are possible`, `Because التصديق and الاستفتاح are grammatically invalid outside of poetry`, `Because الردع is the only reading attested anywhere in the entire Qur'an`, `Because most reciters personally dislike المجاز readings on principle`], correct: 0 },
        { title: `أطلعت الغيب...كلا سنكتب: مثال الترجيح`, kind: 'mcq', prompt: `﴿أَطَّلَعَ الْغَيْبَ أَمِ اتَّخَذَ عِندَ الرَّحْمَٰنِ عَهْدًا كَلَّا سَنَكْتُبُ مَا يَقُولُ﴾ is cited to illustrate what principle؟`, options: [`That an ambiguous كلا is read as الردع by default`, `That كلا always means التصديق after a question`, `That الاستفتاح is impossible after a question`, `That كلا cannot appear after أم, unlike after other question particles`], correct: 0 },
        { title: `كلا بمعنى حقا: رأي مرجوح`, kind: 'mcq', prompt: `What does a minority opinion claim كلا can simply mean؟`, options: [`حقا — "truly, certainly"`, `تعليل — "because"`, `استثناء — "except"`, `تمني — "I wish"`], correct: 0 },
        { title: `سبب ترجيح ضعف رأي حقا`, kind: 'mcq', prompt: `Why is the حقا reading of كلا considered weak (مرجوح)؟`, options: [`A grammatical mismatch: what follows حقا should be مفتوحة, but the text after كلا is مكسورة`, `Because حقا is not a real Arabic word at all, despite appearing throughout classical texts`, `Because it contradicts a حديث directly, one that explicitly forbids the reading`, `Because it would make كلا mean the same as لا, which the primary زجر sense already covers`], correct: 0 },
        { title: `المردود: صريح أم مقدر؟`, kind: 'mcq', prompt: `Is what كلا rebukes (المردود) always an explicit sentence spoken right before it؟`, options: [`No — it can be مقدر, an implied statement not literally present`, `Yes — it must always be an explicit prior sentence`, `No — كلا never rebukes anything at all, not even implicitly`, `Yes, and that sentence must always be a question`], correct: 0 },
        { title: `علم الإنسان: المردود المقدر`, kind: 'mcq', prompt: `Reading ﴿كَلَّا إِنَّ الْإِنسَانَ لَيَطْغَى﴾ as الردع, what is the implied (مقدر) claim being rebuked, since the first آية itself is simply true؟`, options: [`Something like "so man should be grateful" — which كلا firmly rejects, given how man actually behaves`, `The claim that Allah taught man anything at all, contradicting the first آية directly`, `The claim that الإنسان does not exist, which no آية here even suggests`, `A claim made explicitly by disbelievers earlier in the same سورة`], correct: 0 },
        { title: `كلا: معانيها الأربعة مجتمعة`, kind: 'mcq', prompt: `Counting the primary sense and its extensions, how many distinct senses of كلا has this pair of lessons covered؟`, options: [`Four — الزجر, التصديق, الاستفتاح, and the weak حقا reading`, `Two — only الزجر and التصديق, leaving out الاستفتاح and the weak حقا reading`, `Six — matching the six أحرف الإيجاب in number, though unrelated in meaning`, `One — كلا only ever means الزجر, with no مجازي senses at all`], correct: 0 },
        { title: `القمر: نوع الجملة بعد كلا`, kind: 'mcq', prompt: `﴿كَلَّا وَالْقَمَرِ﴾ — what kind of construction follows كلا here؟`, options: [`A قسم (oath) by القمر`, `A سؤال about القمر`, `A نداء calling out to القمر`, `A شرط involving القمر`], correct: 0 },
        { title: `ليطغى: معنى الفعل`, kind: 'mcq', prompt: `﴿إِنَّ الْإِنسَانَ لَيَطْغَى﴾ describes الإنسان as doing what, despite Allah's teaching؟`, options: [`Transgressing, overstepping bounds (الطغيان)`, `Being consistently grateful, the opposite of what الآية actually describes`, `Forgetting entirely what Allah had just taught him`, `Seeking more knowledge beyond what Allah already gave`], correct: 0 },
        { title: `كلا: الأصل مقابل الفرع`, kind: 'mcq', prompt: `الردع is كلا's أصلي (original) sense. What are التصديق and الاستفتاح, by contrast؟`, options: [`مجازي — secondary, figurative extensions of the original sense`, `أصلي — equally original senses, tied for primacy with الردع itself`, `غير معروفين — unattested and invented`, `أقوى من الردع في الاستعمال — more common in usage than الردع itself`], correct: 0 },
        { title: `خلاصة: أربعة معان لكلا`, kind: 'mcq', prompt: `Which list correctly gives all four senses of كلا discussed across both lessons on حرفا النفي؟`, options: [`الردع (الأصل), التصديق, الاستفتاح, and the weak حقا reading`, `الردع, التوكيد, الاستفهام, and التمني — mixing غير مرتبطة categories together`, `التصديق, الاستفتاح, النفي, and الإيجاب — swapping in unrelated ضربان`, `الردع, الجزم, النصب, and الجر — confusing كلا's senses with إعراب cases entirely`], correct: 0 },
        { title: `وقف كلا يتبع معناها لا شكلها`, kind: 'mcq', prompt: `What determines where the recitation pause falls around a given instance of كلا؟`, options: [`Which of its meanings is intended in that instance`, `The number of letters in the surrounding سورة`, `Whether the سورة is long or short`, `Whether كلا appears at the very start of the سورة`], correct: 0 },
        {
          title: `تركيب: وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of the key words in ﴿وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ﴾, the statement كلا goes on to confirm.`,
          source: `وَمَا هِيَ إِلَّا ذِكْرَى لِلْبَشَرِ`,
          words: [`هِيَ`, `ذِكْرَى`, `لِلْبَشَرِ`],
          labels: [`مبتدأ ضمير`, `خبر مرفوع بعد إلا`, `جار ومجرور متعلق بذكرى`],
          distractors: [`حرف زجر وردع`, `حرف تصديق`, `حرف استفتاح`, `مفعول به`, `خبر منصوب بعد إلا`, `جار ومجرور متعلق بالخبر`],
        },
        {
          title: `تركيب: عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of الْإِنسَانَ and مَا in ﴿عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ﴾, the آية that precedes كلا with a real chronological gap between them.`,
          source: `عَلَّمَ الْإِنسَانَ مَا لَمْ يَعْلَمْ`,
          words: [`عَلَّمَ`, `الْإِنسَانَ`, `مَا`],
          labels: [`فعل ماض وفاعله ضمير مستتر`, `مفعول به أول`, `اسم موصول مفعول به ثانٍ`],
          distractors: [`حرف تصديق`, `حرف استفتاح`, `حرف زجر وردع`, `فعل ماض وفاعله ضمير بارز`, `مفعول به منصوب`, `اسم موصول مفعول به أول`],
        },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'أحرف التأكيد',
      subtitle: 'لام الابتداء على المبتدأ، اللام المزحلقة على خبر إنّ، ولام جواب القسم — three أحرف تأكيد built around one shared لام',
      sourceRef: 'app-lessons/091 (part 1)',
      concepts: [
        {
          heading: 'القسم الثالث: أحرف التأكيد الخمسة',
          lines: [
            { box: { title: 'Definition', lines: [`القِسْمُ الثَّالِثُ: أَحْرُفُ التَّأْكِيدِ، وَهِيَ خَمْسَةٌ: لَامُ الِابْتِدَاءِ، اللَّامُ المُزَحْلَقَةُ، اللَّامُ فِي جَوَابِ القَسَمِ، نُونَا التَّأْكِيدِ، قَدْ.`] } },
            { html: `A new قسم of الحرف غير العامل (the third) begins: <bdi>أَحْرُفُ التَّأْكيدِ</bdi>, also called <bdi>التَّوْكيد</bdi> — both words mean "emphasis/confirmation." This lesson covers the first three, all built around a shared لام; the next lesson covers the remaining two.`, list: false },
          ],
          exercise: {
            prompt: `أحرف التأكيد comprise five particles/pairs. Which three does this lesson cover first؟`,
            kind: 'mcq',
            options: [`لام الابتداء, اللام المزحلقة, and اللام في جواب القسم`, `نونا التأكيد and قد only, since قد alone carries several distinct senses`, `All five at once, since this lesson covers the full set`, `Only قد, since it is the richest`],
            correct: 0,
          },
        },
        {
          heading: 'لام الابتداء: تدخل على المبتدأ',
          lines: [
            { box: { title: 'Rule', lines: [`لَامُ الِابْتِدَاءِ تَدْخُلُ عَلَى المُبْتَدَأِ، وَتُفِيدُ التَّأْكِيدَ.`] } },
            { html: `This ل simply attaches to the very beginning of a nominal sentence, onto the <bdi>مبتدأ</bdi>, adding emphasis without changing the sentence's basic meaning.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾`] } },
            { html: `"And the home of the Hereafter is surely better for those who fear Allah." لَدَارُ opens the sentence with لام الابتداء attached directly to the مبتدأ (دار), stressing the certainty of the claim that follows.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾ — the ل attached to دَارُ is which أحرف التأكيد, and what does it attach to؟`,
            kind: 'mcq',
            options: [`لام الابتداء, attached to the المبتدأ`, `اللام المزحلقة, attached to the خبر`, `اللام في جواب القسم, attached to the جواب`, `نونا التأكيد, attached to a فعل مضارع`],
            correct: 0,
          },
        },
        {
          heading: 'اللام المزحلقة: تدخل على خبر إنّ',
          lines: [
            { box: { title: 'Rule', lines: [`تَدْخُلُ اللَّامُ المُزَحْلَقَةُ عَلَى خَبَرِ إِنَّ إِذَا كَانَ اسْمًا، أَوْ فِعْلًا مُضَارِعًا، أَوْ شِبْهَ جُمْلَةٍ. وَتُسَمَّى لَامُ الِابْتِدَاءِ وَاللَّامُ المُزَحْلَقَةُ مَعًا لَامَ التَّوْكِيدِ.`] } },
            { html: `This second ل is closely related to the first — both are ultimately forms of <bdi>لام التوكيد</bdi> — but it attaches specifically to the خبر of إِنَّ, and only in three situations. It does NOT attach when الخبر is a فعل ماضي.`, list: false },
            { table: { title: 'اللام المزحلقة: ثلاثة مواضع', headers: ['نوع خبر إنّ', 'المثال'], rows: [
              [`اسم`, `﴿إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ﴾`],
              [`فعل مضارع`, `﴿وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ﴾`],
              [`شبه جملة`, `﴿وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ﴾`],
            ] } },
          ],
          exercise: {
            prompt: `The اللام المزحلقة attaches to خبر إن in three situations. In which of the following does it NOT attach؟`,
            kind: 'mcq',
            options: [`When the خبر is a فعل ماضٍ`, `When the خبر is an اسم`, `When the خبر is a فعل مضارع`, `When the خبر is a شبه جملة`],
            correct: 0,
          },
        },
        {
          heading: 'لماذا سميت "المزحلقة"؟',
          lines: [
            { box: { title: 'Rule', lines: [`هِيَ فِي الأَصْلِ لَامُ الِابْتِدَاءِ تَزَحْلَقَتْ (سَلِسَتْ وَانْتَقَلَتْ) مِنْ صَدْرِ الكَلَامِ إِلَى الخَبَرِ، كَرَاهِيَةَ اجْتِمَاعِ مُؤَكِّدَيْنِ (إِنَّ وَاللَّامُ) فِي صَدْرِ الكَلَامِ.`] } },
            { html: `<bdi>مُزَحْلَقَة</bdi> literally means "slid" or "shifted." This ل is, historically, the very same لام الابتداء — but when إنّ (itself a تأكيد particle) opens a sentence, having ANOTHER emphasis-word right next to it at the very front would pile up two <bdi>مُؤَكِّدات</bdi> side by side, which Arabic dislikes. So the ل "slides" away from the front of the sentence, landing instead on الخبر.`, list: false },
            { box: { title: 'Example', lines: [`لَزَيْدٌ قَائِمٌ`, `إِنَّ زَيْدًا لَقَائِمٌ`] } },
            { html: `Consider لَزَيْدٌ قَائِمٌ ("Zayd is surely standing," with plain لام الابتداء at the front). Now add إنّ: one would NOT say إِنَّ لَزَيْدٌ قَائِمٌ (إن and لام right next to each other at the start — disliked). Instead, the ل slides down onto الخبر: إِنَّ زَيْدًا لَقَائِمٌ — "Indeed Zayd is surely standing." The same emphasis is preserved, just relocated.`, list: false },
          ],
          exercise: {
            prompt: `Why does لام الابتداء "slide" away from the front of the sentence onto الخبر once إنّ is added, becoming اللام المزحلقة؟`,
            kind: 'mcq',
            options: [`Arabic dislikes stacking two مؤكدات (إن and لام) right next to each other at the front of the sentence`, `Because إن makes لام الابتداء grammatically impossible anywhere`, `Because المبتدأ disappears once إن is added, since إن replaces it with اسمها`, `Because الخبر always precedes المبتدأ after إن, reversing the normal word order`],
            correct: 0,
          },
        },
        {
          heading: 'اللام في جواب القسم',
          lines: [
            { box: { title: 'Rule', lines: [`اللَّامُ فِي جَوَابِ القَسَمِ تَدْخُلُ عَلَى جَوَابِ القَسَمِ، وَتُفِيدُ التَّأْكِيدَ.`] } },
            { html: `When an oath (<bdi>قَسَم</bdi>) is sworn, its <bdi>جواب</bdi> (the statement being sworn to) often carries this emphatic ل.`, list: false },
            { box: { title: 'Example', lines: [`﴿تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ﴾`] } },
            { html: `"By Allah, you will surely be questioned about what you used to invent." تَلَفْظِ الجَلالَةِ is the oath (قسم); لَتُسْأَلُنَّ, carrying the ل, is its جواب, emphasized.`, list: false },
          ],
          exercise: {
            prompt: `﴿تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ﴾ — تَلَفْظِ الجَلالَةِ is the قسم. What role does the ل on لَتُسْأَلُنَّ play؟`,
            kind: 'mcq',
            options: [`اللام في جواب القسم, emphasizing the جواب`, `لام الابتداء, attached to a مبتدأ`, `اللام المزحلقة, attached to خبر إن`, `نون التوكيد attached to a فعل مضارع`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `أحرف التأكيد are also known by a second name. What is it؟`, options: [`التوكيد`, `الاستفتاح`, `الإيجاب`, `الجزم`], correct: 0 },
        { q: `﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾ — what does the ل on لَدَارُ attach to, and what is it called؟`, options: [`لام الابتداء, attached to the sentence's مبتدأ`, `اللام المزحلقة, attached to خبر إن`, `اللام في جواب القسم, attached to a جواب`, `نون التوكيد, attached to a فعل`], correct: 0 },
        { q: `اللام المزحلقة attaches to خبر إن in three cases: اسم, فعل مضارع, and شبه جملة. Which type of خبر does it never attach to؟`, options: [`فعل ماضٍ`, `اسم مرفوع`, `شبه جملة جار ومجرور`, `فعل مضارع`], correct: 0 },
        { q: `﴿وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ﴾ — لَعَلَى خُلُقٍ عَظِيمٍ is which kind of خبر إن carrying اللام المزحلقة؟`, options: [`شبه جملة`, `اسم`, `فعل مضارع`, `فعل ماضٍ`], correct: 0 },
        { q: `Why can't one say إِنَّ لَزَيْدٌ قَائِمٌ, with لام الابتداء kept at the very front right after إنّ؟`, options: [`Arabic avoids stacking two مؤكدات (إن and لام) together at the front of the sentence`, `لام الابتداء cannot attach to a اسم, only to a فعل مضارع or شبه جملة`, `إنّ cannot be followed directly by any لام under any circumstance`, `زيد must always be indefinite in this construction`], correct: 0 },
        { q: `﴿تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ﴾ — what is تَلَفْظِ الجَلالَةِ, and what role does لَتُسْأَلُنَّ play relative to it؟`, options: [`تَلَفْظِ الجَلالَةِ is the قسم; لَتُسْأَلُنَّ, carrying اللام, is its جواب`, `تَلَفْظِ الجَلالَةِ is the جواب; لَتُسْأَلُنَّ is the قسم`, `Both together form a single مبتدأ وخبر, with no قسم or جواب at all`, `تَلَفْظِ الجَلالَةِ is the خبر of إن; لَتُسْأَلُنَّ is unrelated to it`], correct: 0 },
      ],
      bank: [
        { title: `أحرف التأكيد: العدد`, kind: 'mcq', prompt: `How many أحرف التأكيد are there in total, across both this lesson and the next؟`, options: [`Five`, `Three`, `Six`, `Two`], correct: 0 },
        { title: `لام الابتداء: وظيفتها`, kind: 'mcq', prompt: `What does لام الابتداء attach to, and what does it add؟`, options: [`It attaches to المبتدأ and adds emphasis without changing the basic meaning`, `It attaches to الخبر and negates the sentence entirely, reversing its meaning`, `It attaches to a فعل مضارع and makes it مجزوما, the way جوازم do`, `It attaches to a حرف جر and cancels its meaning, the way negation would`], correct: 0 },
        { title: `لدار الآخرة: الإعراب`, kind: 'mcq', prompt: `In ﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾, what is دَارُ's grammatical role, once لام الابتداء is set aside؟`, options: [`مبتدأ`, `خبر`, `فاعل`, `مفعول به`], correct: 0 },
        { title: `اللام المزحلقة: الموضع الأول`, kind: 'mcq', prompt: `﴿إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ﴾ — لَسَمِيعُ carries اللام المزحلقة because it is which type of خبر إن؟`, options: [`اسم`, `فعل مضارع`, `شبه جملة`, `فعل ماضٍ`], correct: 0 },
        { title: `اللام المزحلقة: الموضع الثاني`, kind: 'mcq', prompt: `﴿وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ﴾ — لَيَعْلَمُ carries اللام المزحلقة because it is which type of خبر إن؟`, options: [`فعل مضارع`, `اسم`, `شبه جملة`, `فعل ماضٍ`], correct: 0 },
        { title: `اللام المزحلقة: الموضع الثالث`, kind: 'mcq', prompt: `﴿وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ﴾ — لَعَلَى خُلُقٍ عَظِيمٍ carries اللام المزحلقة because it is which type of خبر إن؟`, options: [`شبه جملة (جار ومجرور)`, `اسم`, `فعل مضارع`, `فعل ماضٍ`], correct: 0 },
        { title: `آيات: اللام المزحلقة على اسم إنّ مؤخر`, kind: 'mcq', prompt: `﴿إِنَّ فِي ذَلِكَ لَآيَاتٍ﴾ — لَآيَاتٍ, the delayed اسم serving as خبر, carries which أحرف التأكيد؟`, options: [`اللام المزحلقة`, `لام الابتداء`, `اللام في جواب القسم`, `نون التوكيد الخفيفة`], correct: 0 },
        { title: `التسمية المشتركة: لام التوكيد`, kind: 'mcq', prompt: `لام الابتداء and اللام المزحلقة are together given a shared name. What is it؟`, options: [`لام التوكيد`, `لام العاقبة`, `لام الجحود`, `لام التبليغ`], correct: 0 },
        { title: `أصل المزحلقة`, kind: 'mcq', prompt: `اللام المزحلقة is, historically, the very same particle as which other أحرف التأكيد؟`, options: [`لام الابتداء`, `اللام في جواب القسم`, `نون التوكيد الثقيلة`, `قد`], correct: 0 },
        { title: `معنى مزحلقة لغة`, kind: 'mcq', prompt: `مُزَحْلَقَة literally means what؟`, options: [`"Slid" or "shifted"`, `"Doubled" or "repeated"`, `"Hidden" or "elided"`, `"Strengthened" or "reinforced"`], correct: 0 },
        { title: `سبب الانزلاق`, kind: 'mcq', prompt: `What specifically motivates لام الابتداء to "slide" onto الخبر once إنّ opens the sentence؟`, options: [`Avoiding two مؤكدات (إن and لام) piled up together at the front`, `الخبر always needing a لام regardless of إن`, `إنّ cancelling لام الابتداء's meaning entirely`, `المبتدأ needing to move to the end of the sentence`], correct: 0 },
        { title: `لزيد قائم مقابل إن زيدا لقائم`, kind: 'mcq', prompt: `لَزَيْدٌ قَائِمٌ carries plain لام الابتداء. Once إنّ is added, where does the equivalent لام move to؟`, options: [`Onto الخبر: إِنَّ زَيْدًا لَقَائِمٌ`, `It disappears entirely: إِنَّ زَيْدًا قَائِمٌ`, `It stays exactly where it was: إِنَّ لَزَيْدٌ قَائِمٌ`, `It moves onto إنّ itself: لَإِنَّ زَيْدًا قَائِمٌ`], correct: 0 },
        { title: `اللام في جواب القسم: وظيفتها`, kind: 'mcq', prompt: `What does اللام في جواب القسم attach to؟`, options: [`جواب القسم (oath), emphasizing it`, `القسم itself, emphasizing the oath-taker`, `المبتدأ of an unrelated sentence`, `خبر إن in an unrelated نص`], correct: 0 },
        { title: `تالله لتسألن: القسم وجوابه`, kind: 'mcq', prompt: `In ﴿تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ﴾, which part is القسم, and which is its جواب؟`, options: [`تَلَفْظِ الجَلالَةِ is القسم; لَتُسْأَلُنَّ is الجواب`, `لَتُسْأَلُنَّ is القسم; تَلَفْظِ الجَلالَةِ is الجواب`, `Both together are one single قسم with no جواب`, `عَمَّا كُنتُمْ تَفْتَرُونَ is القسم`], correct: 0 },
        { title: `ثلاثة أحرف تأكيد مغطاة في هذا الدرس`, kind: 'mcq', prompt: `Which three أحرف التأكيد has this lesson covered؟`, options: [`The three لامات — الابتداء, المزحلقة, and جواب القسم — that share a common origin`, `نونا التأكيد and قد, the two covered in the next lesson instead`, `Only اللام المزحلقة, since it is the richest of the three shared لامات`, `لام الابتداء and قد only, leaving out the other two entirely`], correct: 0 },
        { title: `خبر إن اسميا: التعريف`, kind: 'mcq', prompt: `When خبر إن is described as اسم for the purposes of اللام المزحلقة, what does that mean؟`, options: [`الخبر is a single noun-like word, not a فعل or a شبه جملة`, `الخبر must always be indefinite, the same requirement اسم إنّ itself carries`, `الخبر must always carry تنوين, even when it is a شبه جملة`, `الخبر must always follow أل, ruling out every indefinite reading`], correct: 0 },
        { title: `القسم الثالث: مكانه بين الحروف غير العاملة`, kind: 'mcq', prompt: `أحرف التأكيد form which numbered قسم within الحرف غير العامل, following أحرف العطف and أحرف الجواب؟`, options: [`القسم الثالث`, `القسم الأول`, `القسم الثاني`, `القسم الرابع`], correct: 0 },
        { title: `التوكيد بلا تغيير في المعنى الأساسي`, kind: 'mcq', prompt: `Does adding لام الابتداء or اللام المزحلقة change a sentence's basic meaning, or only add emphasis؟`, options: [`It only adds emphasis; the basic meaning stays the same`, `It reverses the sentence's basic meaning entirely, the opposite of what التوكيد does`, `It changes السؤال into a خبر, the way أحرف الجواب respond to questions`, `It changes المبتدأ into الخبر, swapping their usual grammatical roles`], correct: 0 },
        {
          title: `تركيب: وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾.`,
          source: `وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا`,
          words: [`لَدَارُ`, `الْآخِرَةِ`, `خَيْرٌ`],
          labels: [`مبتدأ مقترن بلام الابتداء`, `مضاف إليه`, `خبر`],
          distractors: [`مبتدأ مقترن باللام المزحلقة`, `خبر مقترن باللام في جواب القسم`, `خبر مقترن باللام المزحلقة`, `فاعل`, `مضاف`, `حرف جواب`],
        },
        {
          title: `تركيب: إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ﴿إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ﴾.`,
          source: `إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ`,
          words: [`إِنَّ`, `رَبِّي`, `لَسَمِيعُ`, `الدُّعَاءِ`],
          labels: [`حرف توكيد ونصب`, `اسم إنّ`, `خبر إنّ مقترن باللام المزحلقة`, `مضاف إليه`],
          distractors: [`مبتدأ مقترن بلام الابتداء`, `خبر إنّ مقترن باللام في جواب القسم`, `حرف جواب`, `فاعل`, `خبر إنّ مجرد بلا لام`, `مضاف`],
        },
        {
          title: `تركيب: وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of رَبَّكَ and لَيَعْلَمُ in ﴿وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ﴾.`,
          source: `وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ`,
          words: [`رَبَّكَ`, `لَيَعْلَمُ`],
          labels: [`اسم إنّ`, `فعل مضارع خبر إنّ مقترن باللام المزحلقة`],
          distractors: [`مبتدأ مقترن بلام الابتداء`, `جواب القسم`, `خبر إنّ مقترن باللام في جواب القسم`, `فعل مضارع مقترن بنون التوكيد`, `اسم إنّ مقترن باللام المزحلقة`, `فعل مضارع خبر إنّ مجرد بلا لام`],
        },
        {
          title: `تركيب: وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of the key parts of ﴿وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ﴾.`,
          source: `وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ`,
          words: [`إِنَّكَ`, `لَعَلَى خُلُقٍ عَظِيمٍ`],
          labels: [`إنّ واسمها`, `شبه جملة خبر إنّ مقترن باللام المزحلقة`],
          distractors: [`مبتدأ مقترن بلام الابتداء`, `جواب القسم`, `شبه جملة خبر إنّ مقترن باللام في جواب القسم`, `اسم إنّ مقترن باللام المزحلقة`, `شبه جملة خبر إنّ مجرد بلا لام`, `فعل مضارع خبر إنّ مقترن باللام المزحلقة`],
        },
        {
          title: `تركيب: تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of تَلَفْظِ الجَلالَةِ and لَتُسْأَلُنَّ in ﴿تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ﴾.`,
          source: `تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنتُمْ تَفْتَرُونَ`,
          words: [`تَاللَّهِ`, `لَتُسْأَلُنَّ`],
          labels: [`القسم`, `جواب القسم مقترن باللام`],
          distractors: [`مبتدأ مقترن بلام الابتداء`, `خبر إنّ مقترن باللام المزحلقة`, `فعل مضارع مقترن بنون التوكيد الثقيلة`, `القسم مقترن باللام`, `جواب القسم مجرد بلا لام`, `خبر`],
        },
        {
          title: `تركيب: إِنَّ فِي ذَلِكَ لَآيَاتٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of فِي ذَلِكَ and لَآيَاتٍ in ﴿إِنَّ فِي ذَلِكَ لَآيَاتٍ﴾.`,
          source: `إِنَّ فِي ذَلِكَ لَآيَاتٍ`,
          words: [`فِي ذَلِكَ`, `لَآيَاتٍ`],
          labels: [`شبه جملة خبر إنّ مقدم`, `اسم إنّ مؤخر مقترن باللام المزحلقة`],
          distractors: [`مبتدأ مقترن بلام الابتداء`, `جواب القسم`, `خبر إنّ مؤخر مقترن باللام المزحلقة`, `شبه جملة خبر إنّ مقدم مقترن باللام المزحلقة`, `اسم إنّ مؤخر مجرد بلا لام`, `اسم إنّ مقدم مقترن باللام المزحلقة`],
        },
      ],
    },
    // ---------------------------------------------------------------- L6
    {
      id: 'l6',
      title: 'نونا التأكيد',
      subtitle: 'The two forms of an emphatic ن, and قَدْ — always تحقيق with الماضي, usually تقليل with المضارع',
      sourceRef: 'app-lessons/091 (part 2)',
      concepts: [
        {
          heading: 'نونا التأكيد: الخفيفة والثقيلة',
          lines: [
            { box: { title: 'Rule', lines: [`نُونَا التَّأْكِيدِ هُمَا الخَفِيفَةُ وَالثَّقِيلَةُ، تَدْخُلَانِ عَلَى آخِرِ الفِعْلِ المُضَارِعِ لِإِفَادَةِ التَّأْكِيدِ.`] } },
            { html: `Two forms of an emphatic ن attach to the end of a فعل مضارع: <bdi>النون الخفيفة</bdi> (light, a single ن with سكون) and <bdi>النون الثقيلة</bdi> (heavy, a doubled ن with شدّة).`, list: false },
            { box: { title: 'Example', lines: [`﴿لَيُسْجَنَنَّ وَلَيَكُونَنْ مِنَ الصَّاغِرِينَ﴾`] } },
            { html: `"He will surely be imprisoned and will surely be among the humiliated." لَيُسْجَنَنَّ carries النون الثقيلة (doubled ن); لَيَكُونَنْ carries النون الخفيفة (single ن) — both words are pronounced essentially the same way despite the different spelling, and both add emphasis to their verb.`, list: false },
          ],
          exercise: {
            prompt: `﴿لَيُسْجَنَنَّ وَلَيَكُونَنْ مِنَ الصَّاغِرِينَ﴾ — which نون of نونا التأكيد does each verb carry؟`,
            kind: 'mcq',
            options: [`لَيُسْجَنَنَّ carries النون الثقيلة; لَيَكُونَنْ carries النون الخفيفة`, `Both carry النون الثقيلة, since the two verbs are grammatically identical here`, `Both carry النون الخفيفة, since لَيَكُونَنْ's spelling shows the lighter form is original`, `لَيُسْجَنَنَّ carries النون الخفيفة; لَيَكُونَنْ carries النون الثقيلة`],
            correct: 0,
          },
        },
        {
          heading: 'ليكونن: أصلها النون الثقيلة',
          lines: [
            { box: { title: 'Careful', lines: [`لَيَكُونَنْ أَصْلُهُ لَيَكُونَنَّ.`] } },
            { html: `The spelling with a plain ن (لَيَكُونَنْ) is itself derived from an original doubled-ن form; recognizing this helps when parsing the word's root letters, even though the two forms sound alike.`, list: false },
          ],
          exercise: {
            prompt: `لَيَكُونَنْ, spelled with a single plain ن, is said to be derived from what original form؟`,
            kind: 'mcq',
            options: [`لَيَكُونَنَّ — the same word with a doubled ن`, `A completely different verb root, unrelated to كان in any way`, `A form that has no connection to نون التوكيد at all`, `The جزم form of the same verb, with the ن dropped entirely`],
            correct: 0,
          },
        },
        {
          heading: 'قَدْ مع الماضي: التحقيق دائمًا',
          lines: [
            { html: `<bdi>قَدْ</bdi> is the most semantically rich of the five أحرف التأكيد — its meaning shifts depending on whether it attaches to a فعل ماضي or a فعل مضارع.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ تَدْخُلُ عَلَى الْمَاضِي، وَتَكُونُ لِلتَّحْقِيقِ (دَائِمًا).`] } },
            { box: { title: 'Example', lines: [`﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾`] } },
            { html: `"The believers have certainly succeeded." قَدْ here simply confirms the success as a settled fact.`, list: false },
          ],
          exercise: {
            prompt: `When قَدْ attaches to a فعل ماضٍ, what sense does it always carry؟`,
            kind: 'mcq',
            options: [`التحقيق — certainty and confirmation, always`, `التقليل — rarity, most of the time`, `التوقع — anticipation, sometimes`, `التكثير — frequency, sometimes`],
            correct: 0,
          },
        },
        {
          heading: 'قَدْ مع المضارع: أربعة معانٍ',
          lines: [
            { box: { title: 'Rule', lines: [`وَتَدْخُلُ عَلَى المُضَارِعِ، وَتَكُونُ لِلتَّحْقِيقِ، أَوْ لِلتَّوَقُّعِ، أَوْ لِلتَّكْثِيرِ، أَوْ لِلتَّقْلِيلِ (وَهُوَ الغَالِبُ).`] } },
            { table: { title: 'قَدْ مع المضارع: أربعة معانٍ', headers: ['المعنى', 'المثال', 'الشرح'], rows: [
              [`التحقيق`, `﴿قَدْ يَعْلَمُ اللَّهُ﴾`, `context (Allah's knowledge, never uncertain) signals certainty, not rarity`],
              [`التوقّع`, `قَدْ يَبْرَأُ الْمَرِيضُ`, `hopeful anticipation of a future recovery`],
              [`التكثير`, `﴿قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾`, `describes the Prophet ﷺ repeatedly turning his face toward the sky`],
              [`التقليل (الغالب)`, `قَدْ يَصْدُقُ الْكَذُوبُ`, `the default sense — something happening only occasionally`],
            ] } },
          ],
          exercise: {
            prompt: `With a فعل مضارع, قَدْ can carry four different senses. Which one is the DEFAULT, most common reading؟`,
            kind: 'mcq',
            options: [`التقليل — rarity/occasional occurrence`, `التحقيق — certainty, the sense قد always carries with a ماضٍ`, `التوقع — anticipation of a hopeful future outcome`, `التكثير — frequency, describing something repeated often`],
            correct: 0,
          },
        },
        {
          heading: 'قَدْ: التقليل الغالب يحتاج سياقًا لتجاوزه',
          lines: [
            { box: { title: 'Careful', lines: [`لِأَنَّ التَّقْلِيلَ هُوَ الغَالِبُ مَعَ المُضَارِعِ، لَا يُفْتَرَضُ مَعْنًى أَقْوَى (تَحْقِيقٌ، تَوَقُّعٌ، تَكْثِيرٌ) إِلَّا بِقَرِينَةِ السِّيَاقِ.`] } },
            { html: `Because التقليل is قَدْ's DEFAULT sense with a مضارع, always check context carefully before assuming a stronger meaning (تحقيق, توقع, or تكثير) is intended — those three require some contextual signal, like علم اللَّه being inherently certain, or explicit repetition being described, to override the default "rarity/occasional" reading.`, list: false },
          ],
          exercise: {
            prompt: `﴿قَدْ يَعْلَمُ اللَّهُ﴾ is read as التحقيق rather than the default التقليل. What justifies overriding the default reading here؟`,
            kind: 'mcq',
            options: [`Context — Allah's knowledge is never uncertain, so "occasional" cannot be meant`, `The verb يَعْلَمُ can never carry التقليل under any circumstance`, `قَدْ always means التحقيق when the subject is definite`, `The sentence explicitly states التحقيق in its wording`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `نونا التأكيد are two forms of an emphatic ن attached to which kind of word؟`, options: [`The end of a فعل مضارع`, `The end of a فعل ماضٍ`, `The beginning of a اسم`, `The end of a حرف جر`], correct: 0 },
        { q: `﴿لَيُسْجَنَنَّ وَلَيَكُونَنْ مِنَ الصَّاغِرِينَ﴾ — do the two forms of نونا التأكيد sound noticeably different when spoken, despite the different spelling؟`, options: [`No — both are pronounced essentially the same way`, `Yes — النون الثقيلة is silent while النون الخفيفة is voiced`, `Yes — they belong to entirely different verb tenses`, `No — only النون الثقيلة is ever actually pronounced`], correct: 0 },
        { q: `When قَدْ attaches to a فعل ماضٍ, how many possible meanings can it carry؟`, options: [`Only one — التحقيق, always`, `Four, the same as with المضارع`, `Two — التحقيق or التقليل`, `None — قد never attaches to الماضي`], correct: 0 },
        { q: `قَدْ يَبْرَأُ الْمَرِيضُ illustrates which of قَدْ's senses with a فعل مضارع؟`, options: [`التوقع — hopeful anticipation of a future recovery`, `التحقيق — certainty that recovery already happened`, `التكثير — frequent, repeated recovery`, `التقليل — recovery as a rare exception`], correct: 0 },
        { q: `﴿قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾ describes the Prophet ﷺ repeatedly turning his face toward the sky. Which sense of قَدْ does this illustrate؟`, options: [`التكثير — frequency/repetition`, `التقليل — rarity, an action happening only occasionally`, `التوقع — hopeful anticipation of a future event`, `التحقيق — certainty of a single past event`], correct: 0 },
        { q: `قَدْ يَصْدُقُ الْكَذُوبُ ("even the habitual liar sometimes tells the truth") illustrates which sense, and is it the default reading of قَدْ with a مضارع؟`, options: [`التقليل, and yes — it is the default sense`, `التحقيق, and yes — it is the default sense`, `التكثير, and no — it is the rarest sense`, `التوقع, and no — it never occurs without extra context`], correct: 0 },
      ],
      bank: [
        { title: `نونا التأكيد: التسمية`, kind: 'mcq', prompt: `What are the two forms of نون التوكيد called؟`, options: [`الخفيفة and الثقيلة`, `الأصلية and الزائدة`, `المفردة and المثناة`, `الظاهرة and المقدرة`], correct: 0 },
        { title: `النون الخفيفة: صفتها`, kind: 'mcq', prompt: `How is النون الخفيفة marked, as opposed to الثقيلة؟`, options: [`A single ن with سكون`, `A doubled ن with شدة`, `A ن with تنوين, used for indefinite nouns instead`, `A silent ن with no vowel marking at all`], correct: 0 },
        { title: `النون الثقيلة: صفتها`, kind: 'mcq', prompt: `How is النون الثقيلة marked, as opposed to الخفيفة؟`, options: [`A doubled ن with شدة`, `A single ن with سكون`, `A ن replaced by an alif`, `A silent ن dropped in writing`], correct: 0 },
        { title: `ليسجننّ: أي نون؟`, kind: 'mcq', prompt: `﴿لَيُسْجَنَنَّ﴾ carries which form of نون التوكيد؟`, options: [`النون الثقيلة, since the verb ends in a doubled, شدة-marked ن`, `النون الخفيفة, the lighter single-ن form used elsewhere in this lesson`, `Neither — it carries no نون توكيد`, `Both at once, combining the light and heavy forms together`], correct: 0 },
        { title: `ليكونن: أي نون؟`, kind: 'mcq', prompt: `﴿لَيَكُونَنْ﴾ carries which form of نون التوكيد؟`, options: [`النون الخفيفة, since the verb ends in a single ن with سكون`, `النون الثقيلة, the heavier doubled-ن form used elsewhere in this lesson`, `Neither — it carries no نون توكيد`, `Both at once, combining the light and heavy forms together`], correct: 0 },
        { title: `ليكونن أصلها الثقيلة`, kind: 'mcq', prompt: `لَيَكُونَنْ's plain-ن spelling is derived from what original doubled form؟`, options: [`لَيَكُونَنَّ`, `لَيَكُونُونَ`, `لَيَكُنَّ`, `لَيَكُونَا`], correct: 0 },
        { title: `قَدْ: الأغنى معنى بين الخمسة`, kind: 'mcq', prompt: `Which of the five أحرف التأكيد is described as the most semantically rich, since its meaning shifts by context؟`, options: [`قَدْ`, `لام الابتداء`, `اللام المزحلقة`, `نونا التأكيد`], correct: 0 },
        { title: `قد أفلح المؤمنون: المعنى`, kind: 'mcq', prompt: `﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾ — what does قَدْ confirm here؟`, options: [`The believers' success as a settled, certain fact`, `That the believers might succeed in the future`, `That success is rare among believers`, `That the believers repeatedly succeed`], correct: 0 },
        { title: `قد مع الماضي: قاعدة ثابتة`, kind: 'mcq', prompt: `Is there any exception to قَدْ meaning التحقيق when it attaches to a فعل ماضٍ؟`, options: [`No — with الماضي, قد always means التحقيق`, `Yes — it can also mean التقليل with الماضي`, `Yes — it can also mean التوقع with الماضي`, `Yes — it depends entirely on the subject's gender`], correct: 0 },
        { title: `قد يعلم الله: لماذا التحقيق لا التقليل`, kind: 'mcq', prompt: `﴿قَدْ يَعْلَمُ اللَّهُ﴾ — why is this read as التحقيق rather than the default التقليل؟`, options: [`Because Allah's knowledge is never uncertain — context overrides the default reading`, `Because قد with مضارع always defaults to التحقيق, never to التقليل`, `Because العلم is a فعل ماضٍ here, not مضارع, so قد always means confirmation`, `Because لَفْظُ الجَلالَةِ always requires التوقع, the anticipation reading`], correct: 0 },
        { title: `التقليل: الغالب مع المضارع`, kind: 'mcq', prompt: `With a فعل مضارع, which of قَدْ's four senses is the DEFAULT/most common one؟`, options: [`التقليل`, `التحقيق`, `التوقع`, `التكثير`], correct: 0 },
        { title: `قد يصدق الكذوب: المعنى`, kind: 'mcq', prompt: `قَدْ يَصْدُقُ الْكَذُوبُ — what does this proverb-like sentence mean؟`, options: [`"Even the habitual liar sometimes tells the truth" — an occasional exception`, `"The habitual liar always tells the truth"`, `"The habitual liar will certainly tell the truth today"`, `"The habitual liar has never told the truth"`], correct: 0 },
        { title: `التوقع: تعريفها`, kind: 'mcq', prompt: `التوقع, one of قد's senses with المضارع, means what specifically؟`, options: [`Hopeful anticipation that a future action will occur`, `Certainty that a past action already occurred, beyond doubt`, `Frequent repetition of an action, happening again and again`, `Rarity — an action happening only occasionally`], correct: 0 },
        { title: `قد يبرأ المريض: التوقع`, kind: 'mcq', prompt: `قَدْ يَبْرَأُ الْمَرِيضُ illustrates which sense of قَدْ؟`, options: [`التوقع`, `التحقيق`, `التكثير`, `التقليل`], correct: 0 },
        { title: `قد نرى تقلب وجهك: التكثير`, kind: 'mcq', prompt: `﴿قَدْ نَرَى تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾ — why is this read as التكثير rather than a single occurrence؟`, options: [`It describes the Prophet ﷺ repeatedly turning his face toward the sky, hoping for a change in القبلة`, `It describes a single, one-time glance toward the sky, with no repetition implied`, `It describes an event that never actually happened, despite its Qur'anic wording`, `It describes something the Prophet ﷺ was forbidden from doing under Makkan revelation`], correct: 0 },
        { title: `قد: متى تُفترض تحقيقًا لا تقليلًا؟`, kind: 'mcq', prompt: `Before reading a قد + مضارع sentence as anything other than its default sense (التقليل), what is required؟`, options: [`A contextual signal overriding the default — such as an inherently certain subject or explicit repetition`, `Nothing — every قد + مضارع sentence is automatically read as التحقيق`, `A preceding قسم, the same requirement إي places on the speech that follows it`, `A following اللام المزحلقة, the marker that otherwise strengthens خبر إنّ`], correct: 0 },
        { title: `أحرف التأكيد الخمسة مجتمعة`, kind: 'mcq', prompt: `Naming all five together, which list correctly gives the complete set of أحرف التأكيد؟`, options: [`لام الابتداء, اللام المزحلقة, اللام في جواب القسم, نونا التأكيد, and قد`, `لام الابتداء, اللام المزحلقة, نعم, بلى, and قد`, `نونا التأكيد, قد, لا, كلا, and إي — mixing أحرف التأكيد with حرفا النفي`, `اللام المزحلقة, اللام في جواب القسم, أجل, إنه, and جير`], correct: 0 },
        {
          title: `تركيب: لَيُسْجَنَنَّ وَلَيَكُونَنْ مِنَ الصَّاغِرِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify which form of نون التوكيد each verb carries in ﴿لَيُسْجَنَنَّ وَلَيَكُونَنْ مِنَ الصَّاغِرِينَ﴾.`,
          source: `لَيُسْجَنَنَّ وَلَيَكُونَنْ مِنَ الصَّاغِرِينَ`,
          words: [`لَيُسْجَنَنَّ`, `لَيَكُونَنْ`],
          labels: [`فعل مضارع مقترن بنون التوكيد الثقيلة`, `فعل مضارع مقترن بنون التوكيد الخفيفة`],
          distractors: [`فعل ماضٍ`, `مبتدأ مقترن بلام الابتداء`, `فعل مضارع مقترن باللام المزحلقة`, `فعل مضارع مقترن بقد للتحقيق`, `فعل مضارع مجرد بلا توكيد`, `فعل مضارع مقترن بنون التوكيد الخفيفة أصلا`],
        },
        {
          title: `تركيب: قَدْ أَفْلَحَ الْمُؤْمِنُونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾.`,
          source: `قَدْ أَفْلَحَ الْمُؤْمِنُونَ`,
          words: [`قَدْ`, `أَفْلَحَ`, `الْمُؤْمِنُونَ`],
          labels: [`حرف تحقيق دخل على فعل ماضٍ`, `فعل ماضٍ`, `فاعل`],
          distractors: [`حرف تقليل دخل على فعل مضارع`, `حرف جواب`, `حرف توقع دخل على فعل مضارع`, `حرف تكثير دخل على فعل مضارع`, `فعل مضارع`, `فاعل مرفوع`],
        },
        {
          title: `تركيب: قَدْ يَعْلَمُ اللَّهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of قَدْ يَعْلَمُ اللَّهُ, and the sense قَدْ carries given the subject.`,
          source: `قَدْ يَعْلَمُ اللَّهُ`,
          words: [`قَدْ`, `يَعْلَمُ`, `اللَّهُ`],
          labels: [`حرف تحقيق دخل على فعل مضارع (لا تقليل، لتنزه علم الله عن الشك)`, `فعل مضارع`, `فاعل`],
          distractors: [`حرف تقليل دخل على فعل مضارع (وهو المعنى الغالب مع كل فعل مضارع بلا استثناء)`, `حرف تكثير دخل على فعل مضارع`, `حرف توقع دخل على فعل مضارع`, `مفعول به`, `فعل ماضٍ`, `فاعل مرفوع`],
        },
        {
          title: `تركيب: قَدْ يَبْرَأُ الْمَرِيضُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of قَدْ يَبْرَأُ الْمَرِيضُ.`,
          source: `قَدْ يَبْرَأُ الْمَرِيضُ`,
          words: [`قَدْ`, `يَبْرَأُ`, `الْمَرِيضُ`],
          labels: [`حرف توقّع دخل على فعل مضارع`, `فعل مضارع`, `فاعل`],
          distractors: [`حرف تحقيق دخل على فعل ماضٍ`, `مفعول به`, `حرف تقليل دخل على فعل مضارع (المعنى الغالب)`, `حرف تكثير دخل على فعل مضارع`, `فعل ماضٍ`, `فاعل مرفوع`],
        },
        {
          title: `تركيب: قَدْ يَصْدُقُ الْكَذُوبُ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of قَدْ يَصْدُقُ الْكَذُوبُ, and the default sense قَدْ carries here.`,
          source: `قَدْ يَصْدُقُ الْكَذُوبُ`,
          words: [`قَدْ`, `يَصْدُقُ`, `الْكَذُوبُ`],
          labels: [`حرف تقليل دخل على فعل مضارع (المعنى الغالب)`, `فعل مضارع`, `فاعل`],
          distractors: [`حرف تحقيق دخل على فعل ماضٍ`, `مفعول به`, `حرف توقّع دخل على فعل مضارع`, `حرف تكثير دخل على فعل مضارع`, `حرف تحقيق دخل على فعل مضارع (لأن السياق يفرض اليقين هنا)`, `فاعل مرفوع`],
        },
      ],
    },
  ],
};

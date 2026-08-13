// Advanced Sarf — Module 13
// التقسيم الثالث للاسم: المذكَّر والمؤنَّث (week 27)
//
// 2026-08-12: restructured to match content/module-01.js's (Advanced Nahw)
// revamped presentation style, per explicit instruction — same facts,
// counts, and lesson/concept boundaries as the previous version of this
// file; no grammar content added or removed. Every Core Text quotation and
// every table row that previously left an Arabic phrase untranslated now
// carries an explicit English gloss, so the lesson can be followed without
// being able to read the Arabic on sight — the Arabic stays for reference,
// not as the only carrier of the point. Quiz and bank MCQs were rewritten
// to test the lesson's actual rules and reasoning (why a given وزن does or
// doesn't take a mark, what a sign of تأنيث actually proves, how the two
// divisions of المؤنث differ) rather than rote recall of an obscure
// example word's dictionary meaning; vocabulary glosses are kept as context
// inside those questions, not as the thing being graded. No تركيب bank
// items — Advanced Sarf has no تركيب widget content, matching every other
// content-sarf module.

export default {
  id: 'as-13',
  title: 'المذكَّر والمؤنَّث',
  heading: 'الاسم',
  blurb: 'الاسم divided by gender: the two kinds of مؤنث, and the marks — التاء and الألف — that show it.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'قسمة الاسم إلى مذكَّر ومؤنَّث',
      subtitle: 'Dividing المؤنث Two Ways — حقيقيّ vs مجازيّ by nature, لفظيّ vs معنويّ by wording',
      concepts: [
        {
          heading: 'المذكَّر والمؤنَّث، والحقيقيّ والمجازيّ',
          lines: [
            { box: { title: 'Core Text', lines: [
              `ينقسم الاسم إلى مذكر ومؤنث`,
              `فالمذكر كرجل، وكتاب، وكرسيّ`,
              `والمؤنث نوعان: حقيقيّ ومجازيّ`,
            ] } },
            { html: `Every <bdi>اسم</bdi> (noun) is either <bdi>مذكَّر</bdi> (masculine) or <bdi>مؤنث</bdi> (feminine). رجل (a man), كتاب (a book), and كرسيّ (a chair) are all مذكَّر. مؤنث itself splits into two further kinds, depending on whether the femininity is a fact about the thing being named or only a fact about how Arabic happens to treat the word.`, list: false },
            { box: { title: 'Definition', lines: [
              `المُؤَنَّثُ الحَقِيقِيُّ: مَا دَلَّ عَلَى ذَاتِ حِرٍ`,
              `المُؤَنَّثُ المَجَازِيُّ: مَا لَيْسَ كَذَلِكَ`,
            ] } },
            { html: `<bdi>حَقِيقِيّ</bdi> means real: a مؤنث حقيقيّ names something with an actual female body — the phrase <bdi>ذات حِرٍ</bdi> literally means possessor of a womb, i.e. a female. فاطمة and هند (women's names) are مؤنث حقيقيّ. <bdi>مَجازِيّ</bdi> means figurative: a مؤنث مجازيّ is a word Arabic simply treats as feminine, even though what it names has no sex at all — أُذُن (an ear), نار (fire), and شمس (the sun) are مؤنث مجازيّ. Nothing about an ear or the sun is literally female; Arabic grammaticalises them as feminine regardless.`, list: false },
          ],
          exercise: {
            prompt: `أُذُن (an ear) and شمس (the sun) have no literal sex, yet Arabic treats them as feminine. What kind of مؤنث is that?`,
            kind: 'mcq',
            options: [`مؤنث مجازيّ — Arabic treats them as feminine though nothing about them is literally female`, `مؤنث حقيقيّ — they name something with a real female body`, `مؤنث لفظيّ — they carry a mark of التأنيث`, `مذكَّر — they name inanimate things`],
            correct: 0,
          },
        },
        {
          heading: 'خمسة أدلّة على المؤنث المجازيّ',
          lines: [
            { html: `A مؤنث مجازيّ has no female body to point to, so nothing about the word itself looks feminine. Grammarians rely instead on five kinds of evidence, drawn from how the language actually treats the word, to establish that it counts as مؤنث.`, list: false },
            { table: {
              title: 'الأدلّة الخمسة (The Five Signs)',
              headers: ['الدليل (Sign)', 'ماذا يثبته (What It Shows)', 'المثال', 'الترجمة'],
              rows: [
                [`ضمير المؤنث`, `a feminine pronoun refers back to the word`, `الشمس رأيتُها`, `The sun — I saw her (it).`],
                [`اسم الإشارة`, `a feminine demonstrative (هذه, not هذا) points to it`, `هذه الشمس`, `This (feminine) sun.`],
                [`لحوق تاء التأنيث بفعله`, `the تاء التأنيث attaches to its verb`, `طلعتْ`, `It (feminine) rose.`],
                [`ظهور التاء في تصغيره`, `the تاء appears once the word is put into its diminutive form`, `أُذَيْنَة`, `the diminutive of أُذُن (ear)`],
                [`حذف تائه من اسم عدده`, `the تاء drops from the number counting it`, `ثلاث آبار`, `three wells`],
              ],
            } },
            { html: `The last sign needs its own explanation. Arabic numbers from three to ten take the *opposite* gender of what they count: the number carries a تاء when what it counts is مذكَّر, and drops the تاء when what it counts is مؤنث. So the missing تاء in <bdi>ثلاث آبار</bdi> (rather than <bdi>ثلاثة آبار</bdi>) is itself proof that <bdi>بئر</bdi> (well) is مؤنث. This is treated as the surest of the five signs, because it settles the question on its own, without depending on a pronoun, a demonstrative, or verb agreement elsewhere in the sentence.`, list: false },
          ],
          exercise: {
            prompt: `Why does ثلاث آبار — not ثلاثة آبار — prove that بئر (well) is مؤنث?`,
            kind: 'mcq',
            options: [`Because Arabic numbers 3–10 take the opposite gender of what they count, and the تاء has dropped here`, `Because أل is missing from آبار`, `Because آبار is a broken plural`, `Because a feminine demonstrative precedes it`],
            correct: 0,
          },
        },
        {
          heading: 'اللفظيّ والمعنويّ: قسمة أخرى للمؤنث',
          lines: [
            { html: `A second, independent way of dividing المؤنث cuts across the first one entirely. It doesn't ask whether the thing named is really female — it asks whether the word itself carries a mark of تأنيث, whether it names a female, or both.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وينقسم المؤنث إلى لفظيّ: وهو ما وُضِع لِمُذَكَّر وفيه علامة من علامات التأنيث، كطلحة وزكريَّاء`,
              `وإلى مَعْنَوي، وهو ما كان عَلَمًا لمؤنث وليس فيه علامة، كمَرْيم وهند وزينب`,
              `وإلى لفظيّ ومعنويّ، وهو ما كان عَلَمًا لمؤنث وفيه علامة كفاطمةَ، وسَلْمَى، وعاشُوراء`,
            ] } },
            { table: {
              title: 'الأقسام الثلاثة (The Three Kinds)',
              headers: ['القسم (Kind)', 'الضابط (Criterion)', 'المثال'],
              rows: [
                [`لفظيّ — in wording only`, `coined as a name for a man, yet carrying a mark of تأنيث`, `طلحة، زكريَّاء (men's names)`],
                [`معنويّ — in meaning only`, `a proper name for a woman, carrying no mark at all`, `مَرْيم، هند، زينب (women's names)`],
                [`لفظيّ ومعنويّ — both`, `a proper name for a woman that also carries a mark`, `فاطمة، سَلْمَى، عاشُوراء (women's names)`],
              ],
            } },
            { html: `طلحة is a man's name that happens to carry the تاء — a mark of التأنيث sitting on a word that names a male, so it's مؤنث in wording only. هند names a woman but carries no mark at all — مؤنث in meaning only. فاطمة does both: it names a woman and carries the تاء.`, list: false },
            { box: { title: 'Careful', lines: [
              `قِسْمَةُ الحَقِيقِيّ وَالمَجَازِيّ تَسْأَلُ: هَلْ المُسَمَّى أُنْثَى؟`,
              `وقِسْمَةُ اللَّفْظِيّ وَالمَعْنَوِيّ تَسْأَلُ: هَلْ فِي اللَّفْظِ عَلَامَةٌ، وَهَلْ هُوَ اسْمٌ لِأُنْثَى؟`,
            ] } },
            { html: `The two divisions are not the same question asked twice. حقيقيّ/مجازيّ asks whether the thing named is actually female. لفظيّ/معنويّ asks two separate questions at once: does the word carry a mark, and does it name a female? That's why طلحة, a man's name, never comes up under حقيقيّ/مجازيّ at all — it names no female, real or figurative — while it still counts as مؤنث لفظيّ purely because of its تاء.`, list: false },
          ],
          exercise: {
            prompt: `طلحة is a man's name that carries the تاء. Which of the three kinds — لفظيّ, معنويّ, or لفظيّ ومعنويّ — does it belong to, and why?`,
            kind: 'mcq',
            options: [`لفظيّ — it carries a mark of التأنيث but names a male`, `معنويّ — it is a عَلَم for a female with no mark`, `لفظيّ ومعنويّ — it is a عَلَم for a female and carries a mark`, `None of the three — طلحة counts as مذكَّر outright`],
            correct: 0,
          },
        },
        {
          heading: 'لماذا لا علامة للمذكَّر؟ — أصالة التذكير',
          lines: [
            { box: { title: 'Core Text', lines: [
              `ولكون المذكر هو الأصل (في الأسماء)، لم يُحْتَجْ فيه إلى علامة، بخلاف المؤنث فله علامتان`,
            ] } },
            { html: `Arabic treats <bdi>المذكَّر</bdi> as the default (<bdi>الأصل</bdi>) among nouns — the unmarked case that needs no special sign. المؤنث is the marked case, the one departing from the default, so it's المؤنث that needs a visible mark to flag that departure. That's why this whole باب is entirely about المؤنث and its marks, with nothing further to say about المذكَّر itself.`, list: false },
            { html: `Two marks do that job: <bdi>التاء</bdi> and <bdi>الألف</bdi>. The rest of this module works through each in turn — where التاء is required and where it's barred even in principle, then the eight and ten patterns the two shapes of الألف follow.`, list: false },
          ],
          exercise: {
            prompt: `Why does المذكَّر carry no علامة (mark) at all?`,
            kind: 'mcq',
            options: [`Because it is الأصل (the default) among nouns, and only a departure from the default needs marking`, `Because its علامة has been dropped for ease of pronunciation`, `Because المذكَّر never appears as a عَلَم`, `Because المذكَّر cannot take a diminutive form`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `What settles whether a مؤنث is حقيقيّ or مجازيّ؟`, options: [`Whether the thing it names has a real female body`, `Whether the word carries a تاء`, `Whether the word is a عَلَم`, `Whether the word can take a diminutive`], correct: 0 },
        { q: `نار (fire) and شمس (the sun) are treated as feminine although neither has a literal sex. What kind of مؤنث is that?`, options: [`مؤنث مجازيّ`, `مؤنث حقيقيّ`, `مؤنث لفظيّ`, `مؤنث معنويّ`], correct: 0 },
        { q: `Which of the five signs of a مؤنث مجازيّ is treated as the surest, because it settles the question on its own?`, options: [`The number counting it dropping its تاء, as in ثلاث آبار`, `A feminine demonstrative pointing to it`, `The تاء التأنيث attaching to its verb`, `A pronoun referring back to it`], correct: 0 },
        { q: `طلحة and زكريَّاء are men's names that carry a mark of التأنيث. What kind of مؤنث does that make them?`, options: [`مؤنث لفظيّ`, `مؤنث معنويّ`, `مؤنث لفظيّ ومعنويّ`, `مؤنث حقيقيّ`], correct: 0 },
        { q: `مَرْيم, هند, and زينب are women's names carrying no mark of التأنيث at all. What kind of مؤنث are they?`, options: [`مؤنث معنويّ`, `مؤنث لفظيّ`, `مؤنث لفظيّ ومعنويّ`, `مذكَّر`], correct: 0 },
        { q: `Why does المذكَّر need no علامة, while المؤنث has two?`, options: [`Because المذكَّر is الأصل, and only the departure from the default needs marking`, `Because المذكَّر is used less often in speech`, `Because المذكَّر cannot appear as a عَلَم`, `Because المذكَّر's mark has been dropped for lightening`], correct: 0 },
      ],
      bank: [
        { title: `أمثلة المذكَّر`, kind: 'mcq', prompt: `Which set of examples is given for المذكَّر, the unmarked default?`, options: [`رجل، كتاب، كرسيّ`, `فاطمة، هند، زينب`, `أُذُن، نار، شمس`, `طلحة، زكريَّاء`], correct: 0 },
        { title: `ذات حِرٍ`, kind: 'mcq', prompt: `The definition of المؤنث الحقيقيّ uses the phrase ذات حِرٍ. What does it mean, and what does it tell you about this kind of مؤنث?`, options: [`Possessor of a womb — the مؤنث الحقيقيّ names something with a real female body`, `Possessor of intellect — it names a rational being`, `Possessor of a mark — it always carries a تاء`, `A proper name — it must be a عَلَم`], correct: 0 },
        { title: `حدّ المجازيّ`, kind: 'mcq', prompt: `How is المؤنث المجازيّ defined?`, options: [`That which does not دلّ على ذات حِر — nothing about it is literally female`, `That which is a عَلَم for a female`, `That which was coined for a male`, `That which carries a mark of التأنيث`], correct: 0 },
        { title: `الشمس رأيتها`, kind: 'mcq', prompt: `الشمس رأيتُها (The sun — I saw her) proves تأنيث by which of the five signs?`, options: [`ضمير المؤنث — a feminine pronoun referring back to الشمس`, `إشارة المؤنث`, `حذف التاء من اسم العدد`, `لحوق تاء التأنيث بالفعل`], correct: 0 },
        { title: `هذه الشمس`, kind: 'mcq', prompt: `هذه الشمس (this sun) proves تأنيث by which sign?`, options: [`إشارة المؤنث — the feminine demonstrative هذه`, `ضمير المؤنث`, `حذف التاء من اسم العدد`, `ظهور التاء في التصغير`], correct: 0 },
        { title: `طلعتْ`, kind: 'mcq', prompt: `طلعتْ (it rose, said of the sun) proves تأنيث by which sign?`, options: [`لحوق تاء التأنيث بالفعل — the تاء attaching to the verb`, `إشارة المؤنث`, `حذف التاء من اسم العدد`, `ظهور التاء في التصغير`], correct: 0 },
        { title: `أُذَيْنَة`, kind: 'mcq', prompt: `أُذَيْنَة, the diminutive of أُذُن (ear), proves تأنيث by which sign?`, options: [`ظهور التاء في التصغير — the تاء appearing in the diminutive form`, `ضمير المؤنث`, `حذف التاء من اسم العدد`, `إشارة المؤنث`], correct: 0 },
        { title: `عدد الأدلّة`, kind: 'mcq', prompt: `How many signs of المؤنث المجازيّ are listed here?`, options: [`خمسة`, `ثلاثة`, `سبعة`, `ستة`], correct: 0 },
        { title: `زكريَّاء`, kind: 'mcq', prompt: `زكريَّاء is a man's name carrying a mark of التأنيث. Which kind of مؤنث is it?`, options: [`لفظيّ`, `حقيقيّ`, `معنويّ`, `لفظيّ ومعنويّ`], correct: 0 },
        { title: `عاشوراء`, kind: 'mcq', prompt: `عاشُوراء is treated as a عَلَم for a female that also carries a mark. Which kind of مؤنث is it?`, options: [`لفظيّ ومعنويّ`, `المجازيّ`, `اللفظيّ وحده`, `المعنويّ وحده`], correct: 0 },
        { title: `سَلْمَى وفاطمة`, kind: 'mcq', prompt: `سَلْمَى and فاطمة are both women's names carrying a mark of التأنيث. Which kind of مؤنث are they?`, options: [`لفظيّ ومعنويّ`, `حقيقيّ لا غير`, `مجازيّ`, `لفظيّ وحده`], correct: 0 },
        { title: `هند بلا علامة`, kind: 'mcq', prompt: `هند names a woman yet carries no mark at all. Why is it معنويّ rather than لفظيّ ومعنويّ؟`, options: [`Because it has no mark of التأنيث, even though it names a female`, `Because it is not a عَلَم`, `Because it names a male`, `Because it is مؤنث مجازيّ`], correct: 0 },
        { title: `المذكَّر أصل`, kind: 'mcq', prompt: `What follows from المذكَّر being الأصل (the default) among nouns?`, options: [`That it needs no علامة to mark it`, `That it cannot be pluralised`, `That its علامة is الألف`, `That it cannot be a عَلَم`], correct: 0 },
        { title: `علامتا المؤنث`, kind: 'mcq', prompt: `How many marks (علامات) does المؤنث carry, and what are they?`, options: [`اثنتان: التاء والألف`, `واحدة: التاء فقط`, `ثلاث: التاء والألف والياء`, `خمس، بعدد أدلّة المجازيّ`], correct: 0 },
        { title: `ثلاث آبار`, kind: 'mcq', prompt: `In ثلاث آبار (three wells), what has happened to the عدد ثلاث, and what does it prove?`, options: [`Its تاء has dropped, proving بئر is مؤنث`, `Its تاء has been added, proving بئر is مذكَّر`, `It has been put into the diminutive`, `It has taken a feminine pronoun`], correct: 0 },
        { title: `موضع الاستدلال`, kind: 'mcq', prompt: `Against which kind of مؤنث are the five signs actually needed — since the other kind is already obviously feminine?`, options: [`المجازيّ — nothing about the word visibly marks it as feminine`, `الحقيقيّ — its femininity still needs proof`, `اللفظيّ`, `اللفظيّ والمعنويّ معًا`], correct: 0 },
        { title: `كرسيّ`, kind: 'mcq', prompt: `كرسيّ (a chair) is given as an example of which كلمة؟`, options: [`المذكَّر`, `المؤنث المجازيّ`, `المؤنث اللفظيّ`, `المؤنث المعنويّ`], correct: 0 },
        { title: `وضع اللفظيّ`, kind: 'mcq', prompt: `المؤنث اللفظيّ carries a mark of التأنيث, yet what was the word originally coined to name?`, options: [`A مُذَكَّر — a male`, `A مؤنث حقيقيّ`, `A مؤنث مجازيّ`, `A collective noun`], correct: 0 },
        { title: `فاطمة وهند: فرق`, kind: 'mcq', prompt: `فاطمة and هند both name women. What distinguishes them for the purpose of لفظيّ/معنويّ؟`, options: [`فاطمة carries a mark of التأنيث; هند does not`, `هند carries a mark of التأنيث; فاطمة does not`, `Neither carries a mark`, `Both carry a mark`], correct: 0 },
        { title: `قسمتان لا واحدة`, kind: 'mcq', prompt: `حقيقيّ/مجازيّ and لفظيّ/معنويّ both divide المؤنث. How do the two divisions relate to each other?`, options: [`They are two independent cuts through the same material, answering different questions`, `They are two names for the same division`, `لفظيّ/معنويّ is a subtype of حقيقيّ/مجازيّ`, `حقيقيّ/مجازيّ only applies to أعلام`], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'العلامة الأولى: التاء',
      subtitle: `العلامة الأولى: التاء — where it marks gender, where it's barred, and the five أوزان that keep it out regardless`,
      concepts: [
        {
          heading: 'التاء في الفعل والاسم، وأصل وضعها',
          lines: [
            { box: { title: 'Core Text', lines: [
              `الأولى: التاء، وتكون ساكنة في الفعل، نحو قامتْ هند، ومتحركة فيه، نحو هى تَقوم`,
              `وفي الاسم، نحو صائمة وظريفة`,
              `وأصل وضع التاء في الاسم: للفَرْق بين المذكر والمؤنث`,
            ] } },
            { html: `The first mark of المؤنث is <bdi>التاء</bdi>, and it shows up differently depending on where it sits. In a فعل it can be quiescent (<bdi>ساكنة</bdi>, carrying no vowel) — the تاء suffixed to a past-tense verb for a feminine subject, as in <bdi>قامتْ هند</bdi> (Hind stood up). Or it can be vowelled (<bdi>متحركة</bdi>) — the تاء prefixed to a present-tense verb for a feminine subject, as in <bdi>هى تَقوم</bdi> (she stands). In an اسم it appears at the end of the word, as in <bdi>صائمة</bdi> (a fasting woman) and <bdi>ظريفة</bdi> (an elegant woman).`, list: false },
            { html: `The closing line states why any of this matters: the تاء was put into the noun for one purpose — <bdi>الفَرْق بين المذكر والمؤنث</bdi>, telling the two genders apart. Everything in the rest of this lesson — where the تاء is required, where it's barred, where it shows up for an entirely different reason — is a case of that single purpose being served, having nothing left to resolve, or being overridden by something else.`, list: false },
          ],
          exercise: {
            prompt: `In هى تَقوم (she stands), the تاء is prefixed to the فعل and carries a vowel. What is that state called?`,
            kind: 'mcq',
            options: [`متحركة — vowelled`, `ساكنة — quiescent, as in قامتْ`, `a mark found only in الاسم, never in الفعل`, `زائدة للمبالغة — added for intensification`],
            correct: 0,
          },
        },
        {
          heading: 'دخولها في الأوصاف المشتركة، وامتناعها عمّا يختصّ بالنساء',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وفي الأوصاف المشتقة المشتركة بينهما، فلا تدخل في الوصف المختص بالنساء، كحائِضٍ، وحائِلٍ، وفارك، ومُرْضِع وعانِس`,
            ] } },
            { html: `On a derived adjective (<bdi>وصف مشتقّ</bdi>) that could describe either a man or a woman, the تاء enters by rule (<bdi>قياسًا</bdi>) to mark which one is meant — صابر (a patient man) against صابرة (a patient woman). But on a وصف that only ever describes women, adding a تاء has nothing left to distinguish it from, so it stays out. Five such words are given here:`, list: false },
            { table: {
              title: 'الأوصاف المختصّة بالنساء (Adjectives Used Only of Women)',
              headers: ['الكلمة', 'المعنى (Meaning)'],
              rows: [
                [`حائِض`, `a menstruating woman`],
                [`حائِل`, `a woman who is not pregnant`],
                [`فارِك`, `a woman who hates her husband`],
                [`مُرْضِع`, `a nursing woman`],
                [`عانِس`, `a middle-aged unmarried woman`],
              ],
            } },
            { html: `None of these five ever describes a man, so there is no مذكَّر counterpart for a تاء to distinguish them from — which is exactly why the تاء never appears on them.`, list: false },
            { box: { title: 'Core Text', lines: [
              `أما دخولها على الجامد المشترَكِ معناه بينهما، فسماعيّ، كرجل ورَجُلة، وإنسانة، وَفتَى وفتاة`,
            ] } },
            { html: `A second case: on a جامد noun (a plain noun not derived from a verb, like رجل, man) whose meaning could apply to either gender, whether it takes a تاء isn't governed by any rule at all — it's <bdi>سماعيّ</bdi>, meaning correct only where it's actually been heard from the Arabs. رَجُلة (a manly woman) and إنسانة (a human female) exist because they were said, not because any rule generates them; فتَى and فتاة (a young man / a young woman) work the same way.`, list: false },
            { box: { title: 'Careful', lines: [
              `المُشْتَقُّ يَتَّبِعُ قَاعِدَةَ الاِخْتِصَاصِ، والجَامِدُ يَتَّبِعُ السَّمَاعَ`,
            ] } },
          ],
          exercise: {
            prompt: `حائِض (a menstruating woman) never takes a تاء. Why not?`,
            kind: 'mcq',
            options: [`It's a وصف used only of women, so there's no مذكَّر counterpart for a تاء to distinguish it from`, `Because it is جامد, not مشتقّ`, `Because its تاء has been dropped for lightening the word`, `Because it is one of the five excepted أوزان`],
            correct: 0,
          },
        },
        {
          heading: 'الخمسة المستثناة من الأوصاف المشتركة: الأول والثاني',
          lines: [
            { html: `Even on a shared وصف — where the تاء should enter by rule — five specific patterns (<bdi>أوزان</bdi>) refuse it regardless of which gender is meant. The first two:`, list: false },
            { box: { title: 'Core Text', lines: [
              `أحدها: فَعُول بمعنى فاعل، كرجل صَبُور، وامرأة صَبُور`,
            ] } },
            { html: `<bdi>فَعُول</bdi> in the active sense of <bdi>فاعل</bdi> (one who does X) takes no تاء for either gender: رجل صَبُور (a patient man) and امرأة صَبُور (a patient woman) use the exact same form. The qualifier بمعنى فاعل matters, because فَعُول in the passive sense of مفعول (one X is done to) does take the تاء as usual.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَمَا كَانَتْ أُمُّكِ بَغِيًّا﴾ (مريم: ٢٨)`] } },
            { html: `"And your mother was not unchaste" — <bdi>بَغِيًّا</bdi> describes a woman yet carries no تاء, because it's فَعُول بمعنى فاعل in origin (its underlying form was <bdi>بَغُويًا</bdi>, one who commits immorality).`, list: false },
            { box: { title: 'Core Text', lines: [
              `ثانيها: فَعِيل بمعنى مَفعُول إن تَبِعَ موصوفه، كرجل جَريح، وامرأة جَريح`,
              `فإن كان بمعنى فاعِل، أوْ لَمْ يَتْبَع موصوفه، لَحِقَتْه، كامرأة رحيمة، ورأيت قَتِيلة`,
            ] } },
            { html: `The second excepted pattern is <bdi>فَعِيل</bdi> in the passive sense (<bdi>بمعنى مفعول</bdi>, one X is done to), and it drops the تاء only when two conditions both hold: (1) it genuinely carries that passive sense, and (2) it directly follows the noun it describes (<bdi>تَبِعَ موصوفه</bdi>). امرأة جَريح (a wounded woman) meets both, so no تاء. Break either condition and the تاء comes back: امرأة رحيمة (a merciful woman) keeps the تاء because رحيم here is فَعِيل بمعنى فاعل — active, one who shows mercy — not passive; and رأيت قَتِيلة (I saw a slain woman) keeps the تاء because قَتِيلة stands with no موصوف before it to follow.`, list: false },
          ],
          exercise: {
            prompt: `رأيت قَتِيلة (I saw a slain woman) carries the تاء even though قَتِيل is فَعِيل بمعنى مفعول (passive in sense). Why does the تاء return here?`,
            kind: 'mcq',
            options: [`Because قَتِيلة does not follow (تَبِعَ) a موصوف — one of the two required conditions is missing`, `Because قَتِيل here carries the sense of فاعل, not مفعول`, `Because قَتِيلة is جامد, not مشتقّ`, `Because it is one of the أوصاف المختصّة بالنساء`],
            correct: 0,
          },
        },
        {
          heading: 'الخمسة المستثناة: الثالث إلى الخامس',
          lines: [
            { html: `The remaining three excepted patterns take no تاء regardless of sense or position:`, list: false },
            { table: {
              title: 'الأوزان الثلاثة الباقية',
              headers: ['الوزن', 'المثال', 'المعنى (Meaning)'],
              rows: [
                [`مِفْعال`, `مِهْذار`, `a babbling fool`],
                [`مِفْعِيل`, `مِعْطير`, `one who perfumes themselves constantly`],
                [`مِفْعَل`, `مِغْشَم`, `one who goes at matters heedlessly, without thinking them through`],
              ],
            } },
            { html: `Each pattern has one attested exception (<bdi>شاذّ</bdi>, an irregular form outside the rule): مِيقَانة (a woman who believes everything she's told) takes the تاء despite being مِفْعال, and مِسْكِينة (wretched, feminine) takes it despite being مِفْعِيل — though dropping the تاء from مِسْكِينة on the regular pattern has also been heard.`, list: false },
          ],
          exercise: {
            prompt: `مِسْكِينة is a شاذّ (irregular) exception, since its وزن — مِفْعِيل — should take no تاء at all. What else is said about it?`,
            kind: 'mcq',
            options: [`That dropping its تاء, matching the regular pattern, has also been heard`, `That it is never actually used`, `That it belongs to a sixth excepted وزن`, `That it is فَعِيل بمعنى مفعول`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `What was the original purpose (أصل الوضع) of adding التاء to an اسم؟`, options: [`الفَرْق بين المذكَّر والمؤنث — telling the two genders apart`, `المبالغة — intensifying the meaning`, `تعويض عن حرف محذوف — compensating for a dropped letter`, `تمييز الواحد من جنسه — marking a single item out of its kind`], correct: 0 },
        { q: `حائِض, حائِل, فارِك, مُرْضِع, and عانِس all describe only women, and none of them takes a تاء. Why not؟`, options: [`There is no مذكَّر counterpart for the تاء to distinguish the word from`, `They are جامد nouns, so entry of the تاء is سماعيّ`, `They are all عَلَم names`, `They are all غير مشتقّ`], correct: 0 },
        { q: `رَجُلة, إنسانة, and فتاة carry the تاء although رجل, إنسان, and فتى are جامد, not derived. How is that entry described؟`, options: [`سماعيّ — heard, not generated by a rule`, `قياسيّ — regular and generated by the standard rule`, `شاذّ — an irregular exception to a stated rule`, `واجب — obligatory on every جامد noun`], correct: 0 },
        { q: `رجل صَبُور and امرأة صَبُور take the same form for both genders. Which excepted وزن does صَبُور illustrate؟`, options: [`فَعُول بمعنى فاعل`, `فَعِيل بمعنى مفعول`, `مِفْعال`, `مِفْعِيل`], correct: 0 },
        { q: `فَعِيل بمعنى مفعول only drops its تاء when two conditions both hold. What are they؟`, options: [`It carries a passive sense, and it follows (تَبِعَ) the موصوف it describes`, `It carries an active sense, and it is جامد`, `It is a عَلَم, and it is مختصّ بالنساء`, `It is مذكَّر, and it has no موصوف at all`], correct: 0 },
        { q: `مِهْذار (a babbling fool) takes no تاء for either gender. Which excepted وزن is it؟`, options: [`مِفْعال`, `فَعُول`, `مِفْعِيل`, `فَعِيل`], correct: 0 },
      ],
      bank: [
        { title: `قامتْ هند`, kind: 'mcq', prompt: `In قامتْ هند (Hind stood up), what state is the تاء in?`, options: [`ساكنة — quiescent, carrying no vowel`, `متحركة — vowelled`, `زائدة للمبالغة`, `في الاسم لا في الفعل`], correct: 0 },
        { title: `صائمة وظريفة`, kind: 'mcq', prompt: `صائمة (fasting) and ظريفة (elegant) show التاء appearing where?`, options: [`في الاسم — at the end of a noun`, `ساكنة في الفعل`, `متحركة في الفعل`, `عوضًا عن حرف محذوف`], correct: 0 },
        { title: `ظريفة`, kind: 'mcq', prompt: `ظريفة means:`, options: [`elegant`, `fasting`, `patient`, `merciful`], correct: 0 },
        { title: `الوصف المختصّ`, kind: 'mcq', prompt: `Which of these lists gives أوصاف مختصّة بالنساء — words that describe only women, and so never take a تاء?`, options: [`حائض، حائل، فارك، مُرْضِع، عانِس`, `رَجُلة، إنسانة، فتاة`, `صائمة، ظريفة، رحيمة`, `صَبُور، جَريح، مِهْذار، مِعْطير، مِغْشَم`], correct: 0 },
        { title: `حائل`, kind: 'mcq', prompt: `حائِل means:`, options: [`a woman who is not pregnant`, `a nursing woman`, `a middle-aged unmarried woman`, `a woman who hates her husband`], correct: 0 },
        { title: `فارك`, kind: 'mcq', prompt: `فارك means:`, options: [`a woman who hates her husband`, `a woman who is not pregnant`, `a nursing woman`, `a menstruating woman`], correct: 0 },
        { title: `عانِس`, kind: 'mcq', prompt: `عانِس means:`, options: [`a middle-aged unmarried woman`, `a woman who believes everything she's told`, `a nursing woman`, `a woman who hates her husband`], correct: 0 },
        { title: `فتى وفتاة`, kind: 'mcq', prompt: `فتَى and فتاة are جامد words whose تاء entry is سماعيّ rather than قياسيّ. What does سماعيّ mean here?`, options: [`Correct only because it's been heard from the Arabs, not generated by a rule`, `Obligatory in every جامد noun`, `A شاذّ exception to a stated rule`, `Restricted to أوصاف مختصّة بالنساء`], correct: 0 },
        { title: `عدد المستثنى`, kind: 'mcq', prompt: `How many أوزان are excepted from taking the تاء even in a shared وصف?`, options: [`خمسة`, `ستة`, `ثلاثة`, `أربعة`], correct: 0 },
        { title: `شاهد بَغِيًّا`, kind: 'mcq', prompt: `In ﴿وَمَا كَانَتْ أُمُّكِ بَغِيًّا﴾, بَغِيًّا describes a woman with no تاء because it is فَعُول بمعنى فاعل. Its underlying form before the sound change was:`, options: [`بَغُويًا`, `بَاغِيَة`, `بَغِيَّة`, `بَغْوَاء`], correct: 0 },
        { title: `قيد فَعُول`, kind: 'mcq', prompt: `فَعُول keeps the تاء off both genders only when it carries which sense?`, options: [`بمعنى فاعل — active`, `بمعنى مفعول — passive`, `غير محدَّد — either sense equally`, `بمعنى المبالغة`], correct: 0 },
        { title: `قيدا فَعِيل`, kind: 'mcq', prompt: `فَعِيل بمعنى مفعول keeps the تاء off on two conditions together. What are they?`, options: [`Carrying a مفعول (passive) sense, and following (تَبِعَ) its موصوف`, `Being جامد, and following its موصوف`, `Carrying a مفعول sense, and being مختصّ بالنساء`, `Carrying a فاعل (active) sense, and following its موصوف`], correct: 0 },
        { title: `رحيمة`, kind: 'mcq', prompt: `امرأة رحيمة (a merciful woman) keeps the تاء, although رحيم is فَعِيل. Why?`, options: [`Because رحيم carries the sense of فاعل here, not مفعول`, `Because رحيم does not follow its موصوف`, `Because رحيم is مختصّ بالنساء`, `Because رحيم is جامد`], correct: 0 },
        { title: `رجل جريح`, kind: 'mcq', prompt: `امرأة جَريح (a wounded woman) takes no تاء. Why not?`, options: [`جَريح is فَعِيل بمعنى مفعول and follows its موصوف — both conditions hold`, `جَريح is جامد`, `جَريح is بمعنى فاعل here`, `جَريح is one of الأوصاف المختصّة بالنساء`], correct: 0 },
        { title: `مِعْطير`, kind: 'mcq', prompt: `مِعْطير means one who perfumes themselves constantly. Which excepted وزن does it belong to?`, options: [`مِفْعِيل`, `مِفْعال`, `فَعُول`, `فَعِيل`], correct: 0 },
        { title: `مِغْشَم`, kind: 'mcq', prompt: `مِغْشَم means one who acts heedlessly, without thinking things through. Which excepted وزن does it belong to?`, options: [`مِفْعَل`, `مِفْعِيل`, `فَعُول`, `مِفْعال`], correct: 0 },
        { title: `حذف تاء مِسكينة`, kind: 'mcq', prompt: `مِسْكِينة is a شاذّ exception on مِفْعِيل — it should take no تاء, yet does. What extra note is given about it?`, options: [`That dropping its تاء on the regular pattern has also been heard`, `That it must never lose its تاء`, `That it belongs to a sixth excepted وزن`, `That its تاء marks المبالغة`], correct: 0 },
        { title: `موضع القياس`, kind: 'mcq', prompt: `The تاء enters by rule (قياسًا), not merely by attestation, in which case?`, options: [`A derived وصف shared between the genders — not one of the five excepted أوزان, and not restricted to women alone`, `Any جامد noun shared between the genders`, `Any of the five excepted أوزان`, `Any وصف مختصّ بالنساء`], correct: 0 },
        { title: `رَجُلة`, kind: 'mcq', prompt: `رَجُلة (a manly woman) illustrates which kind of تاء entry?`, options: [`سماعيّ entry of the تاء onto a جامد noun`, `قياسيّ entry onto a مشتقّ وصف`, `One of the five excepted أوزان`, `المبالغة`], correct: 0 },
        { title: `تاء الفعل: حالتان`, kind: 'mcq', prompt: `How many states can the تاء take in a فعل, and what are they?`, options: [`اثنتان — ساكنة ومتحركة`, `ثلاث`, `واحدة — ساكنة فقط`, `واحدة — متحركة فقط`], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'زيادة التاء والألف المقصورة',
      subtitle: `Other Jobs for التاء, and المقصورة — the eight أوزان of the shortened الألف`,
      concepts: [
        {
          heading: 'أغراض زيادة التاء: غير التأنيث',
          lines: [
            { html: `Besides marking gender, التاء gets added to a word for several other reasons that have nothing to do with تأنيث at all.`, list: false },
            { table: {
              title: 'أغراض زيادة التاء (Purposes of an Added التاء)',
              headers: ['الغرض (Purpose)', 'الشرح', 'المثال والترجمة'],
              rows: [
                [`تمييز الواحد من جنسه`, `picking one item out of a collective/kind — the bare word names the whole kind, the تاء-form names a single item`, `لَبِن / لَبِنَة — bricks / a brick; also تَمر/تَمْرة (dates/a date), نَمل/نَمْلة (ants/an ant)`],
                [`عكسه`, `the reverse: the bare word already names a single item, and the تاء-form names the kind or collective`, `كَمْء / كَمْأة — a truffle / truffles (the kind)`],
                [`المبالغة`, `intensifying the meaning — one who does X a great deal`, `راوية — a prolific narrator`],
                [`مجرد الزيادة`, `simply added, with no further function of its own`, `عَلَّامَة — a great scholar`],
                [`تعويض عن فاء الكلمة`, `compensating for the word's first root letter, dropped elsewhere in the derivation`, `عِدة — from the root و-ع-د; the و (the فاء) has dropped`],
                [`تعويض عن عين الكلمة`, `compensating for the word's middle root letter`, `إقامة — from the root ق-و-م; the و (the عين) has dropped`],
                [`تعويض عن لام الكلمة`, `compensating for the word's last root letter`, `سَنَة — the ه or و standing as the word's لام has dropped`],
                [`تعويض عن مَدّة`, `compensating for a dropped long vowel elsewhere in the word`, `تَزْكِية`],
              ],
            } },
            { html: `The first two purposes are mirror images of each other: in لَبِن / لَبِنَة the bare word names the whole kind and the تاء picks out one item, while in كَمْء / كَمْأة it runs the other way — the bare word already names one item, and the تاء builds the collective. And <bdi>التعويض</bdi> (compensation) is really four purposes folded under one heading, distinguished only by which letter of the root the تاء stands in for.`, list: false },
          ],
          exercise: {
            prompt: `In عِدة (from the root و-ع-د), what does the added تاء compensate for?`,
            kind: 'mcq',
            options: [`فاء الكلمة — the dropped و, the first root letter`, `عين الكلمة — the middle root letter`, `لام الكلمة — the last root letter`, `a dropped مَدّة (long vowel)`],
            correct: 0,
          },
        },
        {
          heading: 'العلامة الثانية: الألف، وقسماها المقصورة والممدودة',
          lines: [
            { box: { title: 'Core Text', lines: [
              `العلامة الثانية: الألف. وهي قسمان`,
              `مفردة، وهى المقصورة، كجُبْلَى وبُشْرى`,
              `وغير مفردة، وهى الممدودة، وهى التى قبلها ألف، فتُقْلَب هي همزة، كحمْراء وعَذْراء`,
            ] } },
            { html: `The second mark of المؤنث is <bdi>الألف</bdi>, and it comes in two shapes.`, list: false },
            { table: {
              title: 'قسما الألف',
              headers: ['القسم', 'الوصف', 'المثال'],
              rows: [
                [`المقصورة (shortened)`, `a bare ألف on its own, written as ى at the end of the word`, `جُبْلَى، بُشْرى`],
                [`الممدودة (extended)`, `an ألف preceded by another ألف — and since Arabic never allows two ألفs side by side, the second one turns into a همزة`, `حمْراء، عَذْراء`],
              ],
            } },
            { html: `That last point is the key to the whole shape: الممدودة's ending هَمزة isn't a separate letter added for its own sake — it's the same التأنيث ألف that shows up plainly in المقصورة, forced to change shape only because another ألف already sits before it.`, list: false },
          ],
          exercise: {
            prompt: `Why does حمْراء end in a هَمزة rather than a plain ألف?`,
            kind: 'mcq',
            options: [`Another ألف already precedes it, and Arabic never allows two ألفs together, so the second turns into a همزة`, `It compensates for a dropped root letter`, `It is زائدة for المبالغة`, `It is the لام of the root`],
            correct: 0,
          },
        },
        {
          heading: 'أوزان المقصورة: الأربعة الأولى',
          lines: [
            { html: `المقصورة follows several recurring patterns (<bdi>أوزان</bdi>). Eight are given here, introduced with <bdi>منها</bdi> (among them) rather than a claim to be exhaustive.`, list: false },
            { table: {
              title: 'الأربعة الأولى',
              headers: ['الوزن', 'الضبط (Vowelling)', 'الأمثلة والمعنى'],
              rows: [
                [`فُعَلَى`, `ضمة ثم فتحة`, `أُرَبَى (calamity); أُدَمَى وشُعَبَى (اسما موضعين — two place names)`],
                [`فُعْلَى`, `ضمة ثم سكون`, `بُهْمَى (اسم نبت — a plant); حُبْلَى (صفة — pregnant); بُشْرَى (مصدر — good news)`],
                [`فَعَلَى`, `ثلاث فتحات`, `بَرَدى (اسم نهر — a river's name); حَيَدَى (صفة لحمار — a donkey swift in its gait); بَشَكَى (صفة لناقة — a she-camel swift in her pace)`],
                [`فَعْلَى`, `فتحة ثم سكون`, `مَرْضَى (جمعًا — plural of sick); نَجْوَى (مصدرًا — a whispered conversation); سَبْعَى (صفة)`],
              ],
            } },
          ],
          exercise: {
            prompt: `بُهْمَى, حُبْلَى, and بُشْرَى share which وزن of المقصورة؟`,
            kind: 'mcq',
            options: [`فُعْلَى — ضمة ثم سكون`, `فُعَلَى — ضمة ثم فتحة`, `فَعَلَى — ثلاث فتحات`, `فَعْلَى — فتحة ثم سكون`],
            correct: 0,
          },
        },
        {
          heading: 'أوزان المقصورة: الأربعة الأخيرة',
          lines: [
            { table: {
              title: 'الأربعة الأخيرة',
              headers: ['الوزن', 'الضبط', 'الأمثلة والمعنى'],
              rows: [
                [`فُعَالى`, `ضمة، والعين خفيفة`, `حُبَارَى (a bustard, a bird); سُكَارَى (جمعًا — plural of drunk); عُلَادَى (صفة لجَمَل شديد — a tough, sturdy camel)`],
                [`فُعَّلى`, `ضمة ثم فتحة، والعين مشدَّدة`, `سُمَّهَى (falsehood, nonsense)`],
                [`فِعَلَّى`, `كسرة ثم فتحة، واللام مشدَّدة`, `سِبَطْرَى (a proud, swaggering gait)`],
                [`فِعْلَى`, `كسرة ثم سكون`, `حِجْلَى (جمع حَجَلَة, a bird); ظِرْبَى (جمع ظِرْبان, a small foul-smelling animal)`],
              ],
            } },
            { html: `On فِعْلَى a further note is added: no genuine plural has been found on this pattern besides these two words and ذِكرى (remembrance), which is itself a مصدر rather than a plural.`, list: false },
          ],
          exercise: {
            prompt: `What is said about فِعْلَى as a plural pattern, beyond حِجْلَى and ظِرْبَى؟`,
            kind: 'mcq',
            options: [`That no other genuine plural has been found on it`, `That it is the most common of all plural patterns`, `That it never occurs as a plural, only as a مصدر`, `That every noun on this pattern is a plural`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `لَبِن (bricks) and لَبِنَة (a brick) illustrate a تاء added for which purpose؟`, options: [`تمييز الواحد من جنسه — picking one item out of a kind`, `المبالغة`, `التعويض`, `عكس تمييز الواحد من جنسه`], correct: 0 },
        { q: `كَمْء (a truffle) and كَمْأة (truffles, the kind) reverse the usual pattern. What does the تاء mark here؟`, options: [`The collective/kind, not a single item`, `A single item, not the kind`, `المبالغة`, `تعويض عن الفاء`], correct: 0 },
        { q: `In عِدة, إقامة, سَنَة, and تَزْكِية, the تاء all serves the same broad purpose. What is it؟`, options: [`التعويض — compensating for something dropped elsewhere in the word`, `تمييز الواحد من جنسه`, `المبالغة`, `مجرد الزيادة`], correct: 0 },
        { q: `Why does الألف الممدودة end in a هَمزة rather than a bare ألف؟`, options: [`Because it is preceded by another ألف, and Arabic disallows two ألفs together`, `Because it compensates for the لام of the root`, `Because it marks المبالغة`, `Because it is تعويض عن مَدّة`], correct: 0 },
        { q: `جُبْلَى and بُشْرى illustrate which kind of الألف؟`, options: [`الألف المقصورة`, `الألف الممدودة`, `تاء التعويض`, `تاء المبالغة`], correct: 0 },
        { q: `How many أوزان are given here for المقصورة؟`, options: [`ثمانية`, `ستة`, `عشرة`, `أربعة`], correct: 0 },
      ],
      bank: [
        { title: `اللَّبِن`, kind: 'mcq', prompt: `اللَّبِن, before the تاء is added, means:`, options: [`bricks, as a collective/kind`, `a single brick`, `dates`, `ants`], correct: 0 },
        { title: `الكَمْء`, kind: 'mcq', prompt: `الكَمْء, before the تاء is added, means:`, options: [`a single truffle`, `truffles as a kind`, `a single brick`, `a single ant`], correct: 0 },
        { title: `راوية`, kind: 'mcq', prompt: `راوية (a prolific narrator) shows a تاء added for which purpose?`, options: [`المبالغة — intensifying the meaning`, `تمييز الواحد من جنسه`, `مجرد الزيادة`, `التعويض`], correct: 0 },
        { title: `عَلَّامَة`, kind: 'mcq', prompt: `عَلَّامَة (a great scholar) is listed under a تاء added:`, options: [`لزيادتها فقط — simply added, with no further function`, `للمبالغة`, `للتعويض`, `للتمييز`], correct: 0 },
        { title: `إقامة`, kind: 'mcq', prompt: `In إقامة, from the root ق-و-م, the تاء compensates for which letter?`, options: [`عين الكلمة — the middle root letter و`, `فاء الكلمة`, `لام الكلمة`, `a مَدّة`], correct: 0 },
        { title: `سَنَة`, kind: 'mcq', prompt: `In سَنَة, the تاء compensates for which letter?`, options: [`لام الكلمة — the word's last root letter`, `عين الكلمة`, `فاء الكلمة`, `a مَدّة`], correct: 0 },
        { title: `تَزْكِية`, kind: 'mcq', prompt: `In تَزْكِية, the تاء compensates for:`, options: [`a dropped مَدّة (long vowel)`, `لام الكلمة`, `فاء الكلمة`, `عين الكلمة`], correct: 0 },
        { title: `نَمل ونَمْلة`, kind: 'mcq', prompt: `نَمل (ants, the kind) and نَمْلة (an ant) belong with which purpose of the added تاء?`, options: [`تمييز الواحد من جنسه`, `عكسه`, `المبالغة`, `التعويض`], correct: 0 },
        { title: `قسما الألف`, kind: 'mcq', prompt: `الألف, the second mark of المؤنث, splits into which two kinds?`, options: [`المقصورة والممدودة`, `الأصلية والزائدة`, `المفردة والمثناة`, `الساكنة والمتحركة`], correct: 0 },
        { title: `حمراء وعذراء`, kind: 'mcq', prompt: `حمْراء and عَذْراء illustrate:`, options: [`الألف الممدودة`, `الألف المقصورة`, `تاء المبالغة`, `وزن فُعَالى`], correct: 0 },
        { title: `أُرَبَى`, kind: 'mcq', prompt: `أُرَبَى, on وزن فُعَلَى, means:`, options: [`calamity`, `a plant`, `a swift she-camel`, `a place`], correct: 0 },
        { title: `أُدَمَى وشُعَبَى`, kind: 'mcq', prompt: `أُدَمَى and شُعَبَى, both on فُعَلَى, are:`, options: [`names of places`, `names of plants`, `names of birds`, `مصادر`], correct: 0 },
        { title: `بُهْمَى`, kind: 'mcq', prompt: `Under فُعْلَى, بُهْمَى is classed as:`, options: [`اسم نبت — a plant`, `مصدرًا`, `صفة`, `اسم موضع`], correct: 0 },
        { title: `حُبْلَى وبُشْرَى`, kind: 'mcq', prompt: `Under فُعْلَى, حُبْلَى and بُشْرَى are classed respectively as:`, options: [`صفة، ومصدرًا`, `مصدرًا، وصفة`, `جمعًا، ومصدرًا`, `اسمًا، وصفة`], correct: 0 },
        { title: `بَرَدَى`, kind: 'mcq', prompt: `بَرَدى, on وزن فَعَلَى, is:`, options: [`the name of a river`, `a calamity`, `a swift she-camel`, `a swift donkey`], correct: 0 },
        { title: `حَيَدَى وبَشَكَى`, kind: 'mcq', prompt: `حَيَدَى and بَشَكَى, both on فَعَلَى, describe respectively:`, options: [`a donkey swift in its gait, and a she-camel swift in her pace`, `a she-camel and a donkey — reversed`, `a plant and a bird`, `a place and a river`], correct: 0 },
        { title: `مَرْضَى ونَجْوَى وسَبْعَى`, kind: 'mcq', prompt: `Under فَعْلَى, the three examples مَرْضَى، نَجْوَى، سَبْعَى are classed respectively as:`, options: [`جمعًا، مصدرًا، صفةً`, `صفةً، جمعًا، مصدرًا`, `مصدرًا، صفةً، جمعًا`, `كلها مصادر`], correct: 0 },
        { title: `عُلَادَى`, kind: 'mcq', prompt: `عُلَادَى, on فُعَالى, is a صفة for:`, options: [`a tough, sturdy camel`, `a bird`, `a drunk person`, `a place`], correct: 0 },
        { title: `سُمَّهَى`, kind: 'mcq', prompt: `سُمَّهَى, on وزن فُعَّلى, means:`, options: [`falsehood, nonsense`, `a proud gait`, `a bird`, `good news`], correct: 0 },
        { title: `سِبَطْرَى`, kind: 'mcq', prompt: `سِبَطْرَى, on وزن فِعَلَّى, means:`, options: [`a proud, swaggering gait`, `a foul-smelling animal`, `a bird`, `falsehood`], correct: 0 },
        { title: `حِجْلَى وظِرْبَى`, kind: 'mcq', prompt: `حِجْلَى and ظِرْبَى, on وزن فِعْلَى, are the plurals of:`, options: [`حَجَلَة (a bird) and ظِرْبان (a small foul-smelling animal)`, `two unrelated نكرات`, `two places`, `two مصادر`], correct: 0 },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'أوزان الألف الممدودة',
      subtitle: 'أوزان الألف الممدودة — ten patterns, from فَعْلاء to مَفْعولاء',
      concepts: [
        {
          heading: 'الأول إلى الثالث',
          lines: [
            { box: { title: 'Core Text', lines: [`وللممدودة أوزان، منها`] } },
            { html: `الممدودة has more recorded أوزان than المقصورة — ten against eight.`, list: false },
            { table: {
              title: 'الثلاثة الأولى',
              headers: ['الوزن', 'الضبط', 'الأمثلة والمعنى'],
              rows: [
                [`فَعْلاء`, `فتحة ثم سكون`, `صحراء (اسمًا — a desert); رَغْباء (مصدرًا — eager desire); حمراء (صفة لمؤنث أَفْعَل — the feminine of أَحْمَر, red)`],
                [`أَفْعِلاء`, `فتحة ثم سكون؛ العين تقبل الحركات الثلاث؛ اللام غير مشدَّدة`, `أَربِعاء (Wednesday)`],
                [`فُعْلُلاء`, `ضمتان بينهما ساكن`, `قُرْفُصاء (a particular way of sitting, crouched with the arms around the knees)`],
              ],
            } },
          ],
          exercise: {
            prompt: `Under فَعْلاء, what is رَغْباء classed as?`,
            kind: 'mcq',
            options: [`مصدرًا — an eager desire`, `اسمًا لموضع`, `صفةً لمؤنث أَفْعَل`, `جمعًا`],
            correct: 0,
          },
        },
        {
          heading: 'الرابع إلى السادس',
          lines: [
            { table: {
              title: 'الثلاثة التالية',
              headers: ['الوزن', 'الضبط', 'الأمثلة والمعنى'],
              rows: [
                [`فاعُولاء`, `—`, `تاسوعاء وعاشوراء (the ninth and the tenth of شهر المحرَّم)`],
                [`فاعِلاء`, `كسرة على العين`, `قاصِعاء ونافِقاء (the two mouths of a jerboa's burrow)`],
                [`فِعْلِياء`, `كسرتان بينهما سكون؛ الياء غير مشددة`, `كِبْرِياء (greatness, pride)`],
              ],
            } },
          ],
          exercise: {
            prompt: `تاسوعاء and عاشوراء, naming the ninth and tenth of المحرَّم, share which وزن؟`,
            kind: 'mcq',
            options: [`فاعُولاء`, `فاعِلاء`, `فِعْلِياء`, `فُعْلُلاء`],
            correct: 0,
          },
        },
        {
          heading: 'السابع والثامن',
          lines: [
            { box: { title: 'Core Text', lines: [`وفُعَلاء لفتح العين، وتثليث الفاء`] } },
            { html: `The seventh entry, <bdi>فُعَلاء</bdi>, is really one وزن counted three ways: the عين stays fixed on a فتحة while the فاء cycles through all three vowels — that's what <bdi>تثليث الفاء</bdi> (tripling the فاء) means.`, list: false },
            { table: {
              title: 'تثليث الفاء في فُعَلاء',
              headers: ['ضبط الفاء', 'المثال', 'المعنى'],
              rows: [
                [`بفتحات — فتحة على الفاء`, `جَنَفاء`, `اسم موضع (a place)`],
                [`بكسر ففتح — كسرة على الفاء`, `سِيَراء`, `a striped garment of silk`],
                [`بضم ففتح — ضمة على الفاء`, `نُفَساء`, `a woman recovering after childbirth`],
              ],
            } },
            { box: { title: 'Core Text', lines: [`وفُنْعُلاء: بضمتين بينهما سكون، كخُنْفُساء: للحيوان المعروف`] } },
            { html: `The نون written into this وزن's own name (<bdi>فُنْعُلاء</bdi>) isn't part of the root — it marks that the word carries an extra نون, so <bdi>خُنْفُساء</bdi> (a beetle) is built from the three root letters خ-ف-س with a نون added.`, list: false },
          ],
          exercise: {
            prompt: `In the وزن name فُعَلاء, تثليث الفاء means the فاء cycles through:`,
            kind: 'mcq',
            options: [`فتحة، كسرة، وضمة — all three vowels`, `السكون فقط`, `الفتحة والضمة فقط`, `الكسرة والضمة فقط`],
            correct: 0,
          },
        },
        {
          heading: 'التاسع والعاشر',
          lines: [
            { table: {
              title: 'الأخيران',
              headers: ['الوزن', 'الضبط', 'المثال والمعنى'],
              rows: [
                [`فَعِيلاء`, `فتحة ثم كسرة`, `قَرِيثاء (بالثاء المثلثة) — a variety of dates`],
                [`مَفْعولاء`, `—`, `مَشْيوخاء — plural of شيخ (an elder)`],
              ],
            } },
            { html: `مَشْيوخاء is the only one of these ten examples that is a جمع (plural), rather than a اسم, مصدر, or صفة.`, list: false },
          ],
          exercise: {
            prompt: `مَشْيوخاء is the plural of which word?`,
            kind: 'mcq',
            options: [`شيخ (an elder)`, `شَيْخَة`, `مَشْيَخَة`, `شائخ`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `How many أوزان does الألف الممدودة follow here, against المقصورة's eight؟`, options: [`عشرة`, `ثمانية`, `ستة`, `اثنا عشر`], correct: 0 },
        { q: `صحراء (a desert) and حمراء (feminine of red) sit on the same وزن فَعْلاء but classify differently. What is that difference؟`, options: [`صحراء is اسم; حمراء is صفة لمؤنث أَفْعَل`, `صحراء is صفة; حمراء is اسم`, `Both are مصادر`, `Both are جموع`], correct: 0 },
        { q: `قُرْفُصاء denotes:`, options: [`a particular crouched sitting position`, `a day of the week`, `a variety of dates`, `a striped garment`], correct: 0 },
        { q: `قاصِعاء and نافِقاء together name:`, options: [`the two mouths of a jerboa's burrow`, `two names for the same day`, `two varieties of dates`, `two kinds of striped garment`], correct: 0 },
        { q: `What does تثليث الفاء mean for the seventh وزن, فُعَلاء؟`, options: [`That the فاء cycles through all three vowels while the عين stays فتحة`, `That the فاء is always doubled`, `That the وزن has three separate عين positions`, `That the وزن only appears three times in the language`], correct: 0 },
        { q: `خُنْفُساء (a beetle) carries an extra نون marked into its own وزن's name. What is that وزن؟`, options: [`فُنْعُلاء`, `فَعِيلاء`, `مَفْعولاء`, `فاعِلاء`], correct: 0 },
      ],
      bank: [
        { title: `عدد أوزان الممدودة`, kind: 'mcq', prompt: `How many أوزان of الألف الممدودة are given here?`, options: [`عشرة`, `ثمانية`, `ستة`, `اثنا عشر`], correct: 0 },
        { title: `ضبط فَعْلاء`, kind: 'mcq', prompt: `فَعْلاء is vowelled:`, options: [`بفتح فسكون — فتحة then سكون`, `بكسر فسكون`, `بضمتين`, `بفتحتين`], correct: 0 },
        { title: `رَغْباء`, kind: 'mcq', prompt: `رَغْباء, alongside صحراء and حمراء on فَعْلاء, is classed as the:`, options: [`مصدر of the three`, `اسم of the three`, `صفة of the three`, `جمع of the three`], correct: 0 },
        { title: `ضبط أَفْعِلاء`, kind: 'mcq', prompt: `أَفْعِلاء's عين accepts which vowelling?`, options: [`مثلَّثة — all three vowels`, `مفتوحة لا غير`, `مكسورة لا غير`, `مضمومة لا غير`], correct: 0 },
        { title: `لام أَفْعِلاء`, kind: 'mcq', prompt: `The لام of أَفْعِلاء is:`, options: [`مخفَّفة — not doubled`, `مشدَّدة — doubled`, `مقلوبة همزة`, `محذوفة`], correct: 0 },
        { title: `يوم الأربعاء`, kind: 'mcq', prompt: `أَربِعاء, on وزن أَفْعِلاء, names:`, options: [`a day of the week — Wednesday`, `a plant`, `a place`, `a way of sitting`], correct: 0 },
        { title: `ضبط فُعْلُلاء`, kind: 'mcq', prompt: `فُعْلُلاء is vowelled:`, options: [`بضمتين بينهما ساكن`, `بضم فكسر`, `بكسرتين بينهما ساكن`, `بفتحتين بينهما ساكن`], correct: 0 },
        { title: `تاسوعاء`, kind: 'mcq', prompt: `تاسوعاء names:`, options: [`the ninth of المحرَّم`, `a day of the week`, `the tenth of المحرَّم`, `the first of المحرَّم`], correct: 0 },
        { title: `عاشوراء`, kind: 'mcq', prompt: `عاشوراء names:`, options: [`the tenth of المحرَّم`, `the ninth of المحرَّم`, `a day of the week`, `the eleventh of المحرَّم`], correct: 0 },
        { title: `عين فاعِلاء`, kind: 'mcq', prompt: `The عين of فاعِلاء carries:`, options: [`كسرة`, `فتحة`, `ضمة`, `سكون`], correct: 0 },
        { title: `اليَرْبُوع`, kind: 'mcq', prompt: `قاصِعاء and نافِقاء belong to the burrow of which animal?`, options: [`اليَرْبُوع — the jerboa`, `الظِّرْبان`, `الخُنْفُساء`, `الحَجَلَة`], correct: 0 },
        { title: `كِبْرِياء`, kind: 'mcq', prompt: `كِبْرِياء, on وزن فِعْلِياء, means:`, options: [`greatness, pride`, `a striped garment`, `a crouched sitting position`, `a variety of dates`], correct: 0 },
        { title: `ياء فِعْلِياء`, kind: 'mcq', prompt: `فِعْلِياء's ياء is:`, options: [`مخفَّفة — not doubled`, `مقلوبة`, `مشدَّدة — doubled`, `محذوفة`], correct: 0 },
        { title: `جَنَفاء`, kind: 'mcq', prompt: `جَنَفاء, carrying بفتحات (a فتحة on the فاء), names:`, options: [`a place`, `a woman after childbirth`, `a variety of dates`, `a striped garment`], correct: 0 },
        { title: `سِيَراء ونُفَساء`, kind: 'mcq', prompt: `سِيَراء (بكسر ففتح) and نُفَساء (بضم ففتح) mean respectively:`, options: [`a striped silk garment; a woman recovering after childbirth`, `a woman recovering after childbirth; a striped silk garment`, `a place; a striped garment`, `both name the same thing`], correct: 0 },
        { title: `عين فُعَلاء الثابتة`, kind: 'mcq', prompt: `Through all three vowellings of the فاء in فُعَلاء, what stays fixed?`, options: [`العين — always فتحة`, `الفاء — always فتحة`, `اللام — always مشدَّدة`, `nothing stays fixed`], correct: 0 },
        { title: `خُنْفُساء`, kind: 'mcq', prompt: `خُنْفُساء, on وزن فُنْعُلاء, denotes:`, options: [`a beetle, a well-known insect`, `a place`, `a striped garment`, `a sitting position`], correct: 0 },
        { title: `ضبط فَعِيلاء`, kind: 'mcq', prompt: `فَعِيلاء is vowelled:`, options: [`بفتح فكسر — فتحة then كسرة`, `بفتح فسكون`, `بضم ففتح`, `بكسر ففتح`], correct: 0 },
        { title: `قَرِيثاء`, kind: 'mcq', prompt: `قَرِيثاء (بالثاء المثلثة) denotes:`, options: [`a variety of dates`, `a kind of bird`, `a place`, `a garment`], correct: 0 },
        { title: `مَفْعولاء والجمع`, kind: 'mcq', prompt: `Of the ten examples given for الممدودة, which one alone is a جمع (plural), rather than a اسم, مصدر, or صفة?`, options: [`مَشْيوخاء — plural of شيخ`, `قُرْفُصاء`, `كِبْرِياء`, `خُنْفُساء`], correct: 0 },
        { title: `صحراء وحمراء: فرق`, kind: 'mcq', prompt: `صحراء and حمراء sit on the same وزن فَعْلاء but classify differently. صحراء is اسم — what is حمراء?`, options: [`صفة لمؤنث أَفْعَل — the feminine form of أَحْمَر`, `مصدر`, `جمع`, `اسم موضع`], correct: 0 },
      ],
    },
  ],
};

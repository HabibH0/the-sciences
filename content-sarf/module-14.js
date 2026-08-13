// Advanced Sarf — Module 14
// التقسيم الرابع للاسم: المنقوص والمقصور والممدود والصحيح (week 28)
//
// 2026-08-12: restructured to match content-sarf/module-13.js's (and
// content/module-01.js's) revamped presentation style, per explicit
// instruction — same facts, counts, and lesson/concept boundaries, no new
// grammar content added or removed. Every Core Text box is now followed
// immediately by a full English rendering of what it says, not a mere
// paraphrase of its upshot, so a reader who cannot follow the Arabic prose
// still gets the complete content of the lesson — the Arabic stays for
// reference and terminology, never as the sole carrier of a fact. Table
// rows that named a قيد or a criterion in Arabic alone now carry an English
// gloss alongside it, matching module-13's قيود tables. A handful of bank
// options that were full Arabic reasoning clauses (يَسْرُدُ ألفاظَ العرب
// ويضع معانيها بإزائها; كلها زوائد لا عمل لها, etc.) were rewritten as
// English-carrier sentences per content/README.md's "Language of options"
// rule; short Arabic term/attribute options were left as-is, matching
// module-13's own established practice.

export default {
  id: 'as-14',
  title: 'المنقوص والمقصور والممدود والصحيح',
  heading: 'الاسم',
  blurb: 'الاسم divided a fourth way — by what letter stands at its very end: المنقوص, المقصور, الممدود, and الصحيح.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الأقسام الأربعة',
      subtitle: 'المنقوص، المقصور، الممدود، الصحيح — and the work each قيد does',
      concepts: [
        {
          heading: 'تعريف المنقوص وقيوده',
          lines: [
            { html: `The fourth and last division of الاسم sorts nouns by the letter standing at their very end: a ياء, an ألف, a همزة, or none of those.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ينقسم الاسم إلى منقوص، ومقصور، وممدود، وصحيح`,
              `فالمنقوص: هو الاسمُ المُعْرَبُ الذى آخره ياءٌ لازمةٌ مَكْسُورٌ ما قبلها، كالداعِى والمُنادِي`,
            ] } },
            { html: `الاسم divides into منقوص, مقصور, ممدود, and صحيح. المنقوص is the معرب noun — one that takes case-endings rather than staying مبني — whose last letter is a ياء that is (1) لازمة, fixed rather than something that comes and goes, and (2) مكسور ما قبلها, preceded by a letter carrying a كسرة. <bdi>الداعِي</bdi>, the one who calls, and <bdi>المُنادِي</bdi>, the one called upon, both end this way.`, list: false },
            { html: `Every قيد — every qualifying clause in that definition — throws something out.`, list: false },
            { table: {
              title: 'قيود المنقوص (The Qualifiers of المنقوص)',
              headers: ['القيد (Qualifier)', 'ما يُخرِجه (What It Excludes)', 'المثال (Example)'],
              rows: [
                ['بالاسم — being a noun', 'الفعل — the verb', 'كرَضِيَ, he was pleased'],
                ['وبالمعرب — being معرب', 'المبنيّ — the fixed, non-declining word', 'كالذى, who/which'],
                ['وبالذى آخره ياء — ending in a ياء', 'المقصور — the noun ending in an ألف', '—'],
                ['وبلازمة — the ياء being fixed', 'الأسماء الخمسة in the جرّ case — their ياء shows up only there', '—'],
                ['وبمكسور ما قبلها — preceded by a letter with a كسرة', 'a ياء preceded by a ساكن letter instead — ظَبْيٌ and رَمْيٌ, which attach to الصحيح', 'ظَبْيٌ، رَمْيٌ'],
              ],
            } },
            { html: `<bdi>ظَبْيٌ</bdi> and <bdi>رَمْيٌ</bdi> are مُلْحَقٌ بالصحيح — attached to الصحيح — لِسُكونِ ما قبل يائه, precisely because what stands before their ياء is a سكون rather than a letter carrying a كسرة.`, list: false },
          ],
          clarification: `The قيد <bdi>لازمة</bdi> is what separates a true منقوص from words like أبوك and أخوك — the الأسماء الخمسة (the five nouns: أب، أخ، حم، فو، ذو). Those end in a ياء only when they are مجرور, and switch to a واو or an ألف in the other two cases, so their ياء is not لازمة, and they are not منقوص.`,
          exercise: {
            prompt: `Why is ظَبْيٌ not a منقوص?`,
            kind: 'mcq',
            options: ['Because its ياء is not لازمة', 'Because it is مبنيّ', 'Because it ends in an ألف', 'Because the letter before its ياء is ساكن, so it is مُلْحَق بالصحيح'],
            correct: 3,
          },
        },
        {
          heading: 'تعريف المقصور وقيوده',
          lines: [
            { box: { title: 'Core Text', lines: [
              `والمقصور: هو الاسم المُعْرَبُ الذى آخره ألفٌ لازمةٌ، كالهُدَى والمصطفى`,
            ] } },
            { html: `المقصور is the معرب noun whose last letter is an ألف that is لازمة — fixed. <bdi>الهُدَى</bdi>, guidance, and <bdi>المصطفى</bdi>, the chosen one, both end this way.`, list: false },
            { html: `Notice what is missing next to that condition, compared with المنقوص's condition on the letter before its ياء: nothing is stipulated about the letter before this ألف, because an ألف is always preceded by a فتحة — there is nothing left to require.`, list: false },
            { table: {
              title: 'قيود المقصور (The Qualifiers of المقصور)',
              headers: ['القيد (Qualifier)', 'ما يُخرِجه (What It Excludes)', 'المثال (Example)'],
              rows: [
                ['بالاسم — being a noun', 'الفعل والحرف — a verb or a particle', 'كدَعا, he called, وإلى, to'],
                ['وبالمعرَب — being معرب', 'المبنيّ', 'كأنا, I, وهذا, this'],
                ['وبما آخره ألف — ending in an ألف', 'المنقوص', '—'],
                ['وبلازمة — the ألف being fixed', 'الأسماء الخمسة in the نصب case, and المثنى in the رفع case — both end in ا only in that one case', '—'],
              ],
            } },
          ],
          clarification: `The same قيد <bdi>لازمة</bdi> does different work in each definition, because a different set of words takes that ending only some of the time. For المنقوص it ruled out the الأسماء الخمسة in the جرّ. For المقصور it rules out those same five nouns in the نصب, together with the مثنى (the dual) in the رفع — both end in ا in only one case out of three, so neither one counts as لازمة.`,
          exercise: {
            prompt: `Which does the قيد لازمة exclude from the مقصور?`,
            kind: 'mcq',
            options: ['الفعل والحرف', 'المبنيّ', 'الأسماء الخمسة في النصب، والمثنى في الرفع', 'الأسماء الخمسة في الجرّ'],
            correct: 2,
          },
        },
        {
          heading: 'تعريف الممدود والصحيح',
          lines: [
            { box: { title: 'Core Text', lines: [
              `والممدود: هو الاسم المعرب الذى آخِرُهُ همزةٌ تَلِى ألفًا زائدةً، كصحراء وحمراء`,
              `والصحيح: ما عَدَا ذلك، كرجل وكتاب`,
            ] } },
            { html: `الممدود is the معرب noun whose last letter is a همزة following an added ألف — <bdi>صحراء</bdi>, desert, and <bdi>حمراء</bdi>, red (feminine), both end this way. الصحيح, the fourth division, is defined purely by exclusion: whatever is none of the other three, as in <bdi>رجل</bdi>, man, and <bdi>كتاب</bdi>, book.`, list: false },
            { html: `الصحيح actually covers two different things at once: (1) a noun whose last letter is a genuinely sound consonant, like رجل and كتاب, and (2) a noun whose لام الكلمة (its final root letter) is a حرف علّة — a weak letter, و، ا، or ي — but is preceded by a سكون rather than a matching vowel, like <bdi>دَلْو</bdi>, bucket. That second group is, strictly, شبيه بالصحيح — resembling الصحيح rather than truly being it — and it is exactly this group that ظَبْيٌ and رَمْيٌ, from the previous concept, belong to.`, list: false },
          ],
          clarification: `الصحيح is the residue: whatever is left once the other three are taken out. It covers two things at once — a word whose last letter is a sound consonant, like رجل and كتاب, and a word whose لام is a حرف علّة but is preceded by a سكون, like دَلْو — which is why ظَبْي and رَمْي were attached to it above, rather than counted as منقوص.`,
          exercise: {
            prompt: `دَلْوٌ is counted صحيح because:`,
            kind: 'mcq',
            options: ['Its لام is a sound letter', 'It ends in a همزة following an added ألف', 'Its ألف is not لازمة', 'Its لام is a حرف علّة preceded by سكون, so it resembles الصحيح'],
            correct: 3,
          },
        },
        {
          heading: 'القياسيّ والسماعيّ',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وكل من المقصور والممدود: قياسيّ، وهو مَوْضِعُ نَظَرِ الصرفيّ، وسماعيّ، وهو موضع نظر اللُّغَوِيّ، الذى يَسْرُدُ ألفاظَ العرب، ويضع معانيها بإزائها`,
            ] } },
            { html: `Both المقصور and الممدود split further, into قياسيّ — the kind that follows a stated rule, which is why studying it falls to الصرفيّ, the morphologist — and سماعيّ, the kind that follows no rule and was simply transmitted from the Arabs as it stands. Studying that second kind belongs to اللُّغَوِيّ, the lexicographer, whose job — <bdi>يَسْرُدُ ألفاظَ العرب ويضع معانيها بإزائها</bdi> — is to recount the words of the Arabs one by one and record the meaning that goes with each.`, list: false },
            { html: `This is the same division of labour drawn between الصرف and the other Arabic sciences in the first module of this course, applied here: what follows a rule belongs to الصرفيّ, what has only been transmitted belongs to the lexicon. The next lesson works through the قياسيّ cases of المقصور; the lesson after it works through the قياسيّ cases of الممدود, then catalogues what is سماعيّ in both.`, list: false },
          ],
          exercise: {
            prompt: `The سماعيّ مقصور and ممدود belong to the study of:`,
            kind: 'mcq',
            options: ['اللُّغَوِيّ', 'الصرفيّ', 'النحويّ', 'الأصوليّ'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'المنقوص is the معرب noun ending in:', options: ['ياء لازمة مكسور ما قبلها', 'ألف لازمة', 'همزة تلي ألفًا زائدة', 'حرف صحيح'], correct: 0 },
        { q: 'الداعِى and المُنادِي illustrate:', options: ['المقصور', 'الممدود', 'الصحيح', 'المنقوص'], correct: 3 },
        { q: 'The قيد بالمعرب in المنقوص excludes:', options: ['الفعل كرَضِيَ', 'المقصور', 'الأسماء الخمسة', 'المبنيّ كالذى'], correct: 3 },
        { q: 'الهُدَى and المصطفى illustrate:', options: ['الصحيح', 'المقصور', 'المنقوص', 'الممدود'], correct: 1 },
        { q: 'The قيد بالاسم in المقصور excludes:', options: ['الفعل والحرف، كدَعا وإلى', 'المبنيّ كأنا وهذا', 'المثنى في الرفع', 'المنقوص'], correct: 0 },
        { q: 'The ممدود ends in a همزة that:', options: ['Comes after a سكون', 'Is أصليّة — an original root letter, not زائدة', 'Follows an added ألف — تَلِي ألفًا زائدة', 'Follows a fixed ياء'], correct: 2 },
      ],
      bank: [
        { title: 'الأقسام الأربعة', kind: 'mcq', prompt: 'The fourth division sorts the noun into:', options: ['جامد ومشتقّ', 'مجرَّد ومزيد', 'منقوص، مقصور، ممدود، صحيح', 'مذكَّر ومؤنَّث'], correct: 2 },
        { title: 'رَضِيَ', kind: 'mcq', prompt: 'رَضِيَ is excluded from المنقوص by the قيد:', options: ['بمكسور ما قبلها', 'بالاسم', 'بالمعرب', 'بلازمة'], correct: 1 },
        { title: 'الذى', kind: 'mcq', prompt: 'الذى is excluded from المنقوص by the قيد:', options: ['بلازمة', 'بمكسور ما قبلها', 'بالمعرب', 'بالاسم'], correct: 2 },
        { title: 'الأسماء الخمسة جرًّا', kind: 'mcq', prompt: 'The أسماء الخمسة in the جرّ are excluded from المنقوص by:', options: ['قيد الاسمية', 'قيد كسر ما قبل الياء', 'قيد اللزوم', 'قيد الإعراب'], correct: 2 },
        { title: 'رَمْيٌ', kind: 'mcq', prompt: 'رَمْيٌ is:', options: ['مُلْحَق بالصحيح', 'منقوص', 'مقصور', 'ممدود'], correct: 0 },
        { title: 'علّة إلحاق ظَبْي', kind: 'mcq', prompt: 'ظَبْيٌ is attached to الصحيح because of:', options: ['كون يائه غير لازمة', 'كونه مبنيًّا', 'سكون ما قبل يائه', 'كسر ما قبل يائه'], correct: 2 },
        { title: 'دَعا وإلى', kind: 'mcq', prompt: 'دَعا and إلى are excluded from المقصور because they are:', options: ['من الأسماء الخمسة', 'فعل وحرف', 'مبنيّان من الأسماء', 'منقوصان'], correct: 1 },
        { title: 'أنا وهذا', kind: 'mcq', prompt: 'أنا and هذا are excluded from المقصور by the قيد:', options: ['بالمعرَب', 'بالاسم', 'بلازمة', 'بما آخره ألف'], correct: 0 },
        { title: 'المثنى رفعًا', kind: 'mcq', prompt: 'The مثنى في حالة الرفع is excluded from المقصور by:', options: ['قيد الاسمية', 'قيد الألف', 'قيد اللزوم', 'قيد الإعراب'], correct: 2 },
        { title: 'إخراج المنقوص', kind: 'mcq', prompt: 'Which قيد of المقصور shuts out the منقوص?', options: ['بالمعرَب', 'بلازمة', 'وبما آخره ألف', 'بالاسم'], correct: 2 },
        { title: 'صحراء وحمراء', kind: 'mcq', prompt: 'صحراء and حمراء illustrate:', options: ['الصحيح', 'الممدود', 'المقصور', 'المنقوص'], correct: 1 },
        { title: 'زيادة الألف', kind: 'mcq', prompt: 'In the definition of الممدود, the ألف before the همزة is described as:', options: ['أصلية', 'لازمة', 'مقلوبة', 'زائدة'], correct: 3 },
        { title: 'حدّ الصحيح', kind: 'mcq', prompt: 'الصحيح is defined as:', options: ['That which ends in a همزة', 'That which does not admit إعراب', 'That which is none of the above', 'That which ends in a letter of علّة'], correct: 2 },
        { title: 'رجل وكتاب', kind: 'mcq', prompt: 'رجل and كتاب are given for:', options: ['المقصور', 'المنقوص', 'الصحيح', 'الممدود'], correct: 2 },
        { title: 'دَلْو', kind: 'mcq', prompt: 'دَلْوٌ is offered as an example of a word:', options: ['مقصور سماعيّ', 'شبيه بالصحيح — لامه حرف علّة وقبله سكون', 'منقوص', 'ممدود'], correct: 1 },
        { title: 'نظر الصرفيّ', kind: 'mcq', prompt: 'The قياسيّ مقصور and ممدود are the ground of:', options: ['المحدِّث', 'الأصوليّ', 'الصرفيّ', 'اللُّغَوِيّ'], correct: 2 },
        { title: 'عمل اللغويّ', kind: 'mcq', prompt: 'The اللُّغَوِيّ is described as one who:', options: ['Collects poetic شواهد', 'Recounts the ألفاظ of the Arabs and records the meaning attached to each', 'Measures a لفظ against its نظير', 'Investigates الإعراب'], correct: 1 },
        { title: 'الشرط المشترك: الإعراب', kind: 'mcq', prompt: 'Before any letter-based condition, المنقوص, المقصور, and الممدود all first require the noun to be:', options: ['مُعْرَبًا, not مبنيًّا', 'جامدًا, not مشتقًّا', 'مؤنَّثًا', 'جمعًا'], correct: 0 },
        { title: 'لا قيد على حركة المقصور', kind: 'mcq', prompt: `Why does the definition of المقصور set no condition on the letter before its ألف, unlike المنقوص's condition on the letter before its ياء?`, options: ['Because an ألف is always preceded by a فتحة', 'Because المقصور is always مبنيّ', 'Because the ألف in المقصور is never لازمة', 'Because المقصور never follows a سكون'], correct: 0 },
        { title: 'انقسام المقصور والممدود', kind: 'mcq', prompt: 'المقصور and الممدود each divide into:', options: ['مفرد وجمع', 'قياسيّ وسماعيّ', 'لازم ومتعدٍّ', 'حقيقيّ ومجازيّ'], correct: 1 },
        { title: 'المُنادِي', kind: 'mcq', prompt: 'المُنادِي ends in a ياء that is:', options: ['مقلوبة عن ألف', 'لازمة، ومكسور ما قبلها', 'غير لازمة', 'ساكن ما قبلها'], correct: 1 },
        { title: 'المصطفى', kind: 'mcq', prompt: 'المصطفى ends in an ألف that is:', options: ['زائدة تليها همزة', 'غير لازمة', 'مقلوبة عن ياء', 'لازمة'], correct: 3 },
        { title: 'مقابلة القيود', kind: 'mcq', prompt: 'What do the قيد lists in the two definitions have in common?', options: ['They are all extra padding with no real function', 'Each قيد excludes one specific thing', 'They all exclude verbs', 'They all relate to الإعراب'], correct: 1 },
        { title: 'الصحيح والملحق به', kind: 'mcq', prompt: 'Which pair is attached to الصحيح rather than being منقوصًا?', options: ['الداعِى والمُنادِي', 'الهُدَى والمصطفى', 'صحراء وحمراء', 'ظَبْيٌ ورَمْيٌ'], correct: 3 },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'المقصور القياسيّ',
      subtitle: 'Eight places where a معتلّ اللام noun must end in an ألف — each with its صحيح counterpart',
      concepts: [
        {
          heading: 'الضابط، والأول والثاني',
          lines: [
            { box: { title: 'Core Text', lines: [
              `والمقصور القياسيّ: هو كلّ اسمٍ معتلِّ اللام، له نظيرٌ من الصحيح، مُلْتَزَمٌ فتحُ ما قبل آخره`,
            ] } },
            { html: `المقصور القياسيّ — the rule-governed مقصور — is every noun whose لام الكلمة (final root letter) is معتلّ, a weak letter (و، ا، or ي), provided it has a نظير: a counterpart on the exact same pattern, built from sound root letters, in which the letter before the last one always carries a فتحة, with no exception.`, list: false },
            { html: `النظير is the working idea of both this lesson and the next: find a sound-lettered word on the same pattern, and if its penultimate letter takes an obligatory فتحة, the weak-لام word running on that same pattern is قياسيّ مقصور. Eight cases follow, each presented with its نظير.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وذلك كمصدر الفعل المعتلِ اللام، الذى على وزن`,
            ] } },
            { html: `That is: as in the مصدر of a weak-لام verb whose pattern is —`, list: false },
            { html: `<bdi>فَعِلَ</bdi> من باب سَمِعَ — a فتحة then a كسرة — as in <bdi>الجَوَى</bdi>، <bdi>الهَوَى</bdi>، and <bdi>العَمَى</bdi> (longing, passion, blindness), whose نظير is <bdi>الفرَح</bdi>، <bdi>الأَشَر</bdi>، and <bdi>الطَّرَب</bdi> (joy, insolence, elation).`, list: true, bullet: true },
            { html: `<bdi>فِعَل</bdi> — a كسرة then a فتحة, the plural of فِعْلَة — as in <bdi>فِرْيَة/فِرًى</bdi>, <bdi>مِرْيَة/مِرًى</bdi>, and <bdi>لِحْيَة/لِحًى</bdi>. الفِرْيَة means falsehood; المِرْيَة means doubt or dispute.`, list: true, bullet: true },
          ],
          clarification: `The whole rule turns on the نظير. A word is مقصور بالقياس only if the same pattern, run on a صحيح root, would keep a فتحة on the letter before the last — الفرَح، الأَشَر، الطَّرَب beside الجَوَى، الهَوَى، العَمَى. Where that counterpart does not exist, the قياس has nothing to stand on and the word is سماعيّ instead. Of the eight entries, only the second is set out without a نظير named beside it.`,
          exercise: {
            prompt: `الجَوَى, الهَوَى and العَمَى are قياسيّ because their نظير from الصحيح is:`,
            kind: 'mcq',
            options: ['مُكْرَم ومستخْرَج', 'الأبعدُ والأعمش', 'الفرَح والأَشَر والطَّرَب', 'قِرَب وقُرَب'],
            correct: 2,
          },
        },
        {
          heading: 'الثالث والرابع',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وفُعَل، بضم ففتح، في جمع فُعْلَة، بضم فسكون، نحو مُدْيَة ومُدىً، وزُبْيَة وزُبىً، فإن نظيرهما قِرَب بالكسر، وقُرَب بالضم، في جمع قِرْبة بالكسر وقُرْبَة بالضم`,
            ] } },
            { html: `The third case: <bdi>فُعَل</bdi> — a ضمة then a فتحة — as the plural of فُعْلَة (a ضمة then a سكون), as in <bdi>مُدْيَة/مُدىً</bdi> and <bdi>زُبْيَة/زُبىً</bdi>. Their نظير is <bdi>قِرَب</bdi>, with a كسرة, and <bdi>قُرَب</bdi>, with a ضمة, the plurals of قِرْبة (كسرة) and قُرْبَة (ضمة). المُدْيَة is a knife, الزُّبْيَة a high place, القِرَب waterskins.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وكذا كل اسم مفعولٍ معتل اللام، زائد على الثلاثة، كمُعْطًى ومُسْتَدعًى، فإن نظيرَه مُكْرَم ومستخْرَج`,
            ] } },
            { html: `The fourth case: likewise every اسم مفعول (passive participle) whose لام is weak and whose verb runs to more than three letters, as in <bdi>مُعْطًى</bdi> and <bdi>مُسْتَدعًى</bdi> (given, sought after). Its نظير is <bdi>مُكْرَم</bdi> and <bdi>مستخْرَج</bdi>. This is the rule from the twelfth module read backwards: مُكْرَم takes a فتحة before its last letter, so مُعْطًى must too — and a فتحة on a weak لام gives an ألف.`, list: false },
          ],
          exercise: {
            prompt: `مُعْطًى and مُسْتَدعًى are مقصور قياسيّ as:`,
            kind: 'mcq',
            options: ['صيغة تفضيل', 'مصدر فَعِلَ', 'اسم مفعول معتلّ اللام زائد على الثلاثة', 'جمع فُعْلَة'],
            correct: 2,
          },
        },
        {
          heading: 'الخامس والسادس',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وكذا أفعل صيغة تفضيل كالأَقْصَى، أو لغيره كالأعمى (صفة مشبهة)، ونظيرهما من الصحيح الأبعدُ والأعمش`,
              `وكذا ما كان جمعا لفُعْلَى أنثى أفعل (تفضيل)، كالدُّنيا والدُّنا. ونظيره الأُخْرَى والأُخَر`,
            ] } },
            { html: `The fifth case: likewise أَفْعَل used as صيغة تفضيل, the comparative/superlative pattern, as in <bdi>الأَقْصَى</bdi> (the furthest); or used for something else — as a صفة مشبهة, a permanent-quality adjective — as in <bdi>الأعمى</bdi> (blind). Their نظير from الصحيح is <bdi>الأبعد</bdi> (the furthest, sound-lettered) and <bdi>الأعمش</bdi> (one with weak, watering eyes).`, list: false },
            { html: `The sixth case: likewise whatever is a plural of فُعْلَى, the feminine of the تفضيل pattern أفعل, as in <bdi>الدُّنيا/الدُّنا</bdi> (this world). Its نظير is <bdi>الأُخْرَى</bdi> and <bdi>الأُخَر</bdi>.`, list: false },
          ],
          clarification: `The fifth entry covers أَفْعَل in both of its senses at once — as a تفضيل in الأَقْصَى and as a صفة مشبهة in الأعمى — and gives one نظير for each: الأبعد against the first, الأعمش against the second.`,
          exercise: {
            prompt: `الأعمى is placed in this list as:`,
            kind: 'mcq',
            options: ['أفعل تفضيل', 'جمع فُعْلَى', 'اسم مفعول', 'أفعل لغير التفضيل — صفة مشبهة'],
            correct: 3,
          },
        },
        {
          heading: 'السابع والثامن',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وكذا ما كان من أسماء الأجناس دالًّا على الجَمْعِيَّة بالتَّجَرُّد من التاء، على وزن فَعَل بفتحتين، وعلى الوحدة بالتاء، كحَصَاة وحَصًى، ونظيره مَدَرَة ومَدَر`,
              `وكذا المَفْعَل مدلولًا به على مصدر أو زمان أو مكان، نحو: مَلْهًى ومَسْعًى، ونظيرُه مَذْهَب ومَسْرَح`,
            ] } },
            { html: `The seventh case: likewise an اسم جنس — a noun naming a kind, not one individual of it — that marks الجَمْعِيَّة, the collective sense, by dropping the تاء, on the pattern فَعَل (two فتحات), while the singular carries the تاء, as in <bdi>حَصَاة</bdi>, a pebble, and <bdi>حَصًى</bdi>, pebbles. Its نظير is <bdi>مَدَرَة</bdi> and <bdi>مَدَر</bdi> — المَدَر being lumps of dried clay.`, list: false },
            { html: `The eighth case: likewise a مَفْعَل used as a مصدر ميميّ, an اسم زمان, or an اسم مكان, as in <bdi>مَلْهًى</bdi> and <bdi>مَسْعًى</bdi> (a place of amusement, a place of striving). Its نظير is <bdi>مَذْهَب</bdi> and <bdi>مَسْرَح</bdi> — المَسْرَح being pasture. This is the مَفْعَل family of the twelfth module — مصدر ميميّ, اسم زمان, and اسم مكان together — which took a فتحة before its last letter there, and so becomes مقصور here.`, list: false },
          ],
          exercise: {
            prompt: `In حَصَاة وحَصًى, what marks the جَمْعِيَّة?`,
            kind: 'mcq',
            options: ['التَّجَرُّد من التاء', 'لحوق التاء', 'فتح ما قبل الآخر', 'زيادة الألف'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'The المقصور القياسيّ is defined as every اسم معتلّ اللام that:', options: ['له مصدر قياسيّ', 'يقبل التاء', 'له نظير من الصحيح مُلْتَزَمٌ فتحُ ما قبل آخره', 'آخره ألف زائدة'], correct: 2 },
        { q: 'فِرْيَة وفِرىً belongs to which entry?', options: ['فِعَل في جمع فِعْلَة', 'فُعَل في جمع فُعْلَة', 'مصدر فَعِلَ', 'اسم المفعول'], correct: 0 },
        { q: 'The نظير of مُدىً and زُبىً is:', options: ['الأبعد والأعمش', 'الأُخْرَى والأُخَر', 'قِرَب وقُرَب', 'مَدَرَة ومَدَر'], correct: 2 },
        { q: 'The نظير of الدُّنيا والدُّنا is:', options: ['مَذْهَب ومَسْرَح', 'الأُخْرَى والأُخَر', 'الأبعد والأعمش', 'مُكْرَم ومستخْرَج'], correct: 1 },
        { q: 'مَلْهًى ومَسْعًى fall under:', options: ['اسم المفعول الزائد على الثلاثة', 'أفعل التفضيل', 'أسماء الأجناس', 'المَفْعَل الدالّ على مصدر أو زمان أو مكان'], correct: 3 },
        { q: 'المَسْرَح means:', options: ['a knife', 'a high place', 'pasture', 'pieces of clay'], correct: 2 },
      ],
      bank: [
        { title: 'باب سمع', kind: 'mcq', prompt: 'فَعِلَ بفتح فكسر is identified as:', options: ['باب سمع', 'باب ضرب', 'باب نصر', 'باب كرم'], correct: 0 },
        { title: 'الأَشَر', kind: 'mcq', prompt: 'الفرَح، الأَشَر، الطَّرَب are the نظير of:', options: ['الجَوَى والهَوَى والعَمَى', 'فِرىً ومِرىً', 'مُدىً وزُبىً', 'حَصًى ومَدَر'], correct: 0 },
        { title: 'الفِرْيَة', kind: 'mcq', prompt: 'الفِرْيَة means:', options: ['doubt', 'a knife', 'a waterskin', 'falsehood'], correct: 3 },
        { title: 'المِرْيَة', kind: 'mcq', prompt: 'المِرْيَة means:', options: ['clay', 'pasture', 'doubt, argument', 'falsehood'], correct: 2 },
        { title: 'لِحْيَة لِحًى', kind: 'mcq', prompt: 'لِحْيَة لِحًى stands alongside:', options: ['حَصَاة وحَصًى', 'زُبْيَة وزُبىً', 'فِرْيَة وفِرىً', 'مُدْيَة ومُدىً'], correct: 2 },
        { title: 'ضبط فِعَل', kind: 'mcq', prompt: 'فِعَل, the plural of فِعْلَة, is vowelled:', options: ['بكسر ففتح', 'بفتح فكسر', 'بضم ففتح', 'بفتحتين'], correct: 0 },
        { title: 'ضبط فُعَل', kind: 'mcq', prompt: 'فُعَل, the plural of فُعْلَة, is vowelled:', options: ['بضم ففتح', 'بكسر ففتح', 'بضمتين', 'بفتحتين'], correct: 0 },
        { title: 'المُدْيَة', kind: 'mcq', prompt: 'المُدْيَة means:', options: ['a high place', 'a waterskin', 'a piece of clay', 'a knife'], correct: 3 },
        { title: 'الزُّبْيَة', kind: 'mcq', prompt: 'الزُّبْيَة means:', options: ['a knife', 'a waterskin', 'a pasture', 'a high place'], correct: 3 },
        { title: 'القِرَب', kind: 'mcq', prompt: 'القِرَب means:', options: ['high places', 'waterskins', 'knives', 'clay pieces'], correct: 1 },
        { title: 'قِرْبة وقُرْبَة', kind: 'mcq', prompt: 'قِرَب and قُرَب are the plurals of:', options: ['قِرْبة بالكسر وقُرْبَة بالضم', 'قِرْبة بالكسر only', 'قُرْبَة بالضم only', 'قَرَبَة بالفتح'], correct: 0 },
        { title: 'شرط اسم المفعول', kind: 'mcq', prompt: 'The اسم مفعول entry requires the verb to be:', options: ['معتلّ اللام وزائدًا على الثلاثة', 'ثلاثيًّا معتلّ اللام', 'معتلّ العين', 'مضاعفًا'], correct: 0 },
        { title: 'نظير مُعْطًى', kind: 'mcq', prompt: 'The نظير of مُعْطًى ومُسْتَدعًى is:', options: ['مَذْهَب ومَسْرَح', 'مُكْرَم ومستخْرَج', 'الأبعد والأعمش', 'قِرَب وقُرَب'], correct: 1 },
        { title: 'الأَقْصَى', kind: 'mcq', prompt: 'الأَقْصَى means:', options: ['remotest', 'blindest', 'nearest', 'greatest'], correct: 0 },
        { title: 'الأعمش', kind: 'mcq', prompt: 'الأعمش is:', options: ['one who is blind', 'the remotest', 'one who is deaf', 'one affected by an eye disease'], correct: 3 },
        { title: 'وصف الأعمى', kind: 'mcq', prompt: 'الأعمى is marked in the list as:', options: ['جمع', 'صفة مشبهة', 'صيغة تفضيل', 'اسم مفعول'], correct: 1 },
        { title: 'الدُّنيا', kind: 'mcq', prompt: 'الدُّنيا والدُّنا falls under which entry?', options: ['That which is a plural of فُعْلَى, the feminine of أفعل', 'أفعل صيغة تفضيل', 'اسم المفعول', 'أسماء الأجناس'], correct: 0 },
        { title: 'وزن اسم الجنس', kind: 'mcq', prompt: 'The اسم جنس entry is on the وزن:', options: ['مَفْعَل', 'فَعَل بفتحتين', 'فِعَل بكسر ففتح', 'فُعَل بضم ففتح'], correct: 1 },
        { title: 'الوحدة بالتاء', kind: 'mcq', prompt: 'In حَصَاة وحَصًى, الوحدة is marked by:', options: ['الألف', 'كسر ما قبل الآخر', 'التاء', 'التجرّد من التاء'], correct: 2 },
        { title: 'مَدَرَة ومَدَر', kind: 'mcq', prompt: 'مَدَرَة ومَدَر is the نظير of:', options: ['مُدْيَة ومُدىً', 'فِرْيَة وفِرىً', 'الدُّنيا والدُّنا', 'حَصَاة وحَصًى'], correct: 3 },
        { title: 'المَدَر', kind: 'mcq', prompt: 'المَدَر means:', options: ['pebbles', 'waterskins', 'high places', 'pieces of clay'], correct: 3 },
        { title: 'ثلاث دلالات للمَفْعَل', kind: 'mcq', prompt: 'The مَفْعَل entry covers which three senses?', options: ['فاعل أو مفعول أو مصدر', 'مصدر أو زمان أو مكان', 'مصدر أو آلة أو مكان', 'زمان أو مكان أو آلة'], correct: 1 },
        { title: 'مَذْهَب ومَسْرَح', kind: 'mcq', prompt: 'مَذْهَب and مَسْرَح serve as the نظير of:', options: ['مَلْهًى ومَسْعًى', 'مُعْطًى ومُسْتَدعًى', 'الأَقْصَى والأعمى', 'حَصًى ومَدَر'], correct: 0 },
        { title: 'دور النظير', kind: 'mcq', prompt: 'What makes a مقصور قياسيّ rather than سماعيّ?', options: ['كثرة استعماله', 'كونه معتلّ اللام', 'كونه مصدرًا', 'وجود نظير من الصحيح ملتزَم فتح ما قبل آخره'], correct: 3 },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'الممدود: القياسي والسماعي',
      subtitle: 'Four places where the ألف must be added before the last letter, and what falls outside them',
      concepts: [
        {
          heading: 'الضابط، والأول',
          lines: [
            { box: { title: 'Core Text', lines: [
              `والممدود القياسي: كل اسم معتل اللام له نظير من الصحيح الآخر، مُلْتَزَمٌ فيه زيادة ألف قبل آخره`,
            ] } },
            { html: `الممدود القياسيّ — the rule-governed ممدود — is every noun whose لام is weak and which has a نظير from الصحيح, on which an added ألف before the last letter is obligatory, without exception.`, list: false },
            { html: `The same test as for المقصور, with one word changed: there the نظير had to carry a فتحة before its last letter; here it has to carry an added ألف in that same slot. Four cases follow.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وذلك: كمصدر ما أوَّله همزةُ وصلٍ، نحو: ارْعَوَى ارْعِواء، وابتغَى ابْتِغاء، واستَقْصَى استِقْصاء، فإن نظيرها من الصحيح: احمرَّ احمرارًا، واقتدر اقتدارًا، واستخرج استخراجًا`,
            ] } },
            { html: `The first case: as in the مصدر of a verb whose first letter is a همزة وصل — a helping hamza that drops out in connected speech — as in <bdi>ارْعَوَى → ارْعِواء</bdi> (he desisted → desisting), <bdi>ابتغَى → ابْتِغاء</bdi> (he sought → seeking), and <bdi>استَقْصَى → استِقْصاء</bdi> (he investigated exhaustively → exhaustive investigation). Their نظير from الصحيح is <bdi>احمرَّ → احمرارًا</bdi>, <bdi>اقتدر → اقتدارًا</bdi>, and <bdi>استخرج → استخراجًا</bdi>.`, list: false },
            { html: `The rule from the eleventh module put an ألف before the last letter of these مصادر; where the لام is weak, that ألف meets it and the result is a همزة.`, list: false },
          ],
          clarification: `The ممدود rule is the mirror of the مقصور one. There the نظير had to keep a فتحة before the last letter; here it has to carry an added ألف in the same slot. So احمرار decides ارْعِواء, and اقتدار decides ابْتِغاء.`,
          exercise: {
            prompt: `ابْتِغاء is ممدود قياسيّ because its نظير from الصحيح is:`,
            kind: 'mcq',
            options: ['اقتدر اقتدارًا', 'أكرم إكرامًا', 'حِمَار وأَحْمِرَة', 'صُراخ'],
            correct: 0,
          },
        },
        {
          heading: 'الثاني والثالث',
          lines: [
            { box: { title: 'Core Text', lines: [
              `كذا مصدر كل فعل معتل اللام يُوازِن أفعل، كأعطى إعْطاء وأمْلَى إملاء، فإن نظيره من الصحيح أكرم إكرامًا، وأحسن إحسانًا`,
              `وكذا كل ما كان مفردَ الأفْعِلة، ككِساء وأَكْسِية، ورداء وأَرْدِيَة، فإن نظيره من الصحيح حِمَارٌ وأَحْمِرَة، وسلاحٌ وأَسْلِحة`,
            ] } },
            { html: `The second case: likewise the مصدر of any weak-لام verb weighing أَفْعَلَ — <bdi>أعطى</bdi> gives <bdi>إعْطاء</bdi>, <bdi>أمْلَى</bdi> gives <bdi>إملاء</bdi> (he gave/giving, he dictated/dictating). Their نظير from الصحيح is <bdi>أكرم → إكرامًا</bdi> and <bdi>أحسن → إحسانًا</bdi>.`, list: false },
            { html: `The third case: likewise anything that is the singular of a word pluralized on أَفْعِلَة, as in <bdi>كِساء/أَكْسِية</bdi> and <bdi>رداء/أَرْدِيَة</bdi> (garment/garments, cloak/cloaks). Its نظير from الصحيح is <bdi>حِمَارٌ/أَحْمِرَة</bdi> and <bdi>سلاحٌ/أَسْلِحة</bdi> (donkey/donkeys, weapon/weapons). The reasoning runs backwards from the plural: if a singular takes أَفْعِلَة, its sound نظير already carries an ألف before the last letter — حِمَار, سلاح — so the weak-لام member of the same pattern must be ممدود too. الكِساء is a garment.`, list: false },
          ],
          exercise: {
            prompt: `رداء وأَرْدِيَة is قياسيّ because its نظير is:`,
            kind: 'mcq',
            options: ['صُراخ وزُكام', 'حِمَارٌ وأَحْمِرَة، وسلاحٌ وأَسْلِحة', 'أكرم إكرامًا، وأحسن إحسانًا', 'احمرَّ احمرارًا'],
            correct: 1,
          },
        },
        {
          heading: 'الرابع، وحدّ السماعيّ',
          lines: [
            { box: { title: 'Core Text', lines: [
              `وكذا كل مصدر لفَعَل بفتحتين دالًّا على صوت أو داء، كالرُّغاء: لصوت البعير، والثُّغاء: لصوت الشاة، فإن نظيره الصُّراخ، وكالمُشاء، فإن نظيره الزُّكام`,
            ] } },
            { html: `The fourth case: likewise every مصدر of a فَعَل (two فتحات) verb denoting a sound or an illness — as in <bdi>الرُّغاء</bdi>, the sound a camel makes, and <bdi>الثُّغاء</bdi>, the sound a sheep makes, whose نظير is <bdi>الصُّراخ</bdi> (a cry); and as in <bdi>المُشاء</bdi>, whose نظير is <bdi>الزُّكام</bdi> (a head cold). المُشاء itself is a stomach complaint. Unlike the first three cases, this one is fixed by meaning rather than by pattern alone: sounds and sicknesses.`, list: false },
            { box: { title: 'Core Text', lines: [
              `والسماعيّ منهما ما فقد ذلك النظير`,
            ] } },
            { html: `And whatever مقصور or ممدود altogether lacks that نظير is سماعيّ — heard, not rule-governed. One sentence closes the whole division: whatever has no counterpart among the sound words falls to the lexicographer rather than the morphologist, and the concept below simply catalogues it.`, list: false },
          ],
          clarification: `The last sentence closes the whole division: whatever مقصور or ممدود has no such counterpart in الصحيح is سماعيّ, and belongs to the lexicographer rather than to الصرفيّ. The two lists that follow are simply what that leaves over.`,
          exercise: {
            prompt: `What makes a مقصور or ممدود سماعيّ?`,
            kind: 'mcq',
            options: ['That it is a مصدر', 'That its ألف is زائدة', 'That it lacks the نظير from الصحيح', 'That it is معتلّ اللام'],
            correct: 2,
          },
        },
        {
          heading: 'السماعيّ من المقصور والممدود',
          lines: [
            { html: `What follows is not derived from any rule — it is simply what the lexicographers recorded, word by word, once the قياسيّ cases above ran out.`, list: false },
            { table: {
              title: 'فمن المقصور سماعًا (Heard المقصور Words)',
              headers: ['اللفظ (Word)', 'المعنى (Meaning)'],
              rows: [
                ['الفَتَى', 'واحد الفِتْيان — one of the young men'],
                ['الحِجَا', 'أي العقل — reason, intellect'],
                ['السَّنَا', 'أى الضَّوْء — light'],
                ['الثَّرَى', 'أى التراب — dust, moist earth'],
              ],
            } },
            { table: {
              title: 'ومن الممدود سماعًا (Heard الممدود Words)',
              headers: ['اللفظ (Word)', 'الضبط (Vowelling)', 'المعنى (Meaning)'],
              rows: [
                ['الثَّراء', 'بالفتح — with a فتحة', 'لكثرة المال — abundance of wealth'],
                ['الحِذاء', 'بالكسر — with a كسرة', 'للنعل — a sandal'],
                ['الفُتاء', 'بالضم — with a ضمة', 'لحداثة السنّ — youthfulness'],
                ['السَّناء', 'بفتح السين — with a فتحة on the سين', 'للشرف — high standing, nobility'],
              ],
            } },
          ],
          clarification: `Two pairs in these lists differ only by the مدّ — whether the final vowel is short (مقصور) or drawn out into a همزة (ممدود) — and the meaning moves with it. <bdi>السَّنَا</bdi> مقصورًا is light, <bdi>السَّناء</bdi> ممدودًا is high standing; <bdi>الثَّرَى</bdi> مقصورًا is dust, <bdi>الثَّراء</bdi> ممدودًا is wealth.`,
          exercise: {
            prompt: `السَّنَا and السَّناء mean, respectively:`,
            kind: 'mcq',
            options: ['nobility and light', 'reason and a sandal', 'dust and abundance of wealth', 'light and nobility'],
            correct: 3,
          },
        },
      ],
      quiz: [
        { q: 'The ممدود القياسيّ requires a نظير in which زيادة ألف قبل الآخر is:', options: ['مُلْتَزَمة', 'جائزة', 'ممتنعة', 'سماعية'], correct: 0 },
        { q: 'ارْعَوَى ارْعِواء has as its نظير:', options: ['احمرَّ احمرارًا', 'أكرم إكرامًا', 'حِمَار وأَحْمِرَة', 'صُراخ'], correct: 0 },
        { q: 'أعطى إعْطاء and أمْلَى إملاء fall under مصدر:', options: ['فَعَل denoting a sound or an illness', 'Every لام-weak verb that weighs أفعل', 'That whose first letter is همزة وصل', 'The singular of الأفْعِلة'], correct: 1 },
        { q: 'الرُّغاء is:', options: ['صوت الشاة', 'داء في البطن', 'كثرة المال', 'صوت البعير'], correct: 3 },
        { q: 'الحِجَا means:', options: ['الضَّوْء', 'التراب', 'الشرف', 'العقل'], correct: 3 },
        { q: 'الحِذاء بالكسر means:', options: ['النعل', 'كثرة المال', 'حداثة السنّ', 'الشرف'], correct: 0 },
      ],
      bank: [
        { title: 'حدّ الممدود القياسيّ', kind: 'mcq', prompt: 'The ممدود القياسيّ is every اسم معتلّ اللام that has:', options: ['ألفًا لازمة', 'همزة أصلية', 'نظيرًا ملتزَمًا فتح ما قبل آخره', 'نظيرًا من الصحيح الآخر ملتزَمًا فيه زيادة ألف قبل آخره'], correct: 3 },
        { title: 'استِقْصاء', kind: 'mcq', prompt: 'استَقْصَى استِقْصاء has as its نظير:', options: ['أحسن إحسانًا', 'استخرج استخراجًا', 'اقتدر اقتدارًا', 'احمرَّ احمرارًا'], correct: 1 },
        { title: 'همزة الوصل', kind: 'mcq', prompt: 'The first entry of the ممدود covers مصدر of a verb whose first letter is:', options: ['ميم زائدة', 'همزة وصل', 'همزة قطع', 'تاء زائدة'], correct: 1 },
        { title: 'ثلاثة نظائر', kind: 'mcq', prompt: 'How many صحيح نظائر are offered for the همزة الوصل entry?', options: ['أربعة', 'واحد', 'ثلاثة — احمرار واقتدار واستخراج', 'اثنان'], correct: 2 },
        { title: 'إعطاء وإملاء', kind: 'mcq', prompt: 'The نظير of إعْطاء and إملاء is:', options: ['إكرامًا وإحسانًا', 'احمرارًا واقتدارًا', 'أَحْمِرَة وأَسِلحة', 'الصُّراخ والزُّكام'], correct: 0 },
        { title: 'الكِساء', kind: 'mcq', prompt: 'الكِساء means:', options: ['a donkey', 'a garment', 'a sandal', 'a weapon'], correct: 1 },
        { title: 'أَكْسِية', kind: 'mcq', prompt: 'كِساء وأَكْسِية illustrates:', options: ['مصدر أفعل', 'مصدر ما أوّله همزة وصل', 'مصدر فَعَل الدالّ على صوت', 'مفرد الأفْعِلة'], correct: 3 },
        { title: 'حِمار وسِلاح', kind: 'mcq', prompt: 'حِمَارٌ وأَحْمِرَة، وسلاحٌ وأَسْلِحة are the نظير of:', options: ['كِساء وأَكْسِية، ورداء وأَرْدِيَة', 'ارْعِواء وابْتِغاء', 'إعْطاء وإملاء', 'الرُّغاء والثُّغاء'], correct: 0 },
        { title: 'وزن الرابع', kind: 'mcq', prompt: 'The fourth entry is the مصدر of a verb on the وزن:', options: ['أفعل', 'افتعل', 'فَعَل بفتحتين', 'فَعِل بفتح فكسر'], correct: 2 },
        { title: 'دلالة الرابع', kind: 'mcq', prompt: 'That fourth entry requires the مصدر to point to:', options: ['صوت أو داء', 'حرفة أو ولاية', 'لون أو عيب', 'زمان أو مكان'], correct: 0 },
        { title: 'الثُّغاء', kind: 'mcq', prompt: 'الثُّغاء is:', options: ['صوت الشاة', 'صوت البعير', 'صوت الأسد', 'صوت الحمار'], correct: 0 },
        { title: 'نظير الرغاء', kind: 'mcq', prompt: 'The نظير of الرُّغاء and الثُّغاء is:', options: ['الاستخراج', 'الإكرام', 'الصُّراخ', 'الزُّكام'], correct: 2 },
        { title: 'المُشاء', kind: 'mcq', prompt: 'المُشاء means:', options: ['a head cold', 'a stomach illness', 'a kind of walking', 'a loud cry'], correct: 1 },
        { title: 'نظير المُشاء', kind: 'mcq', prompt: 'The نظير of المُشاء is:', options: ['الرُّغاء', 'الزُّكام', 'الصُّراخ', 'الثُّغاء'], correct: 1 },
        { title: 'الفَتَى', kind: 'mcq', prompt: 'الفَتَى is explained as:', options: ['reason/intellect', 'light', 'dust', 'one of the fityān'], correct: 3 },
        { title: 'الثَّرَى', kind: 'mcq', prompt: 'الثَّرَى means:', options: ['reason/intellect', 'dust', 'abundance of wealth', 'light'], correct: 1 },
        { title: 'السَّنَا مقصورًا', kind: 'mcq', prompt: 'السَّنَا, مقصورًا, means:', options: ['light', 'nobility, high standing', 'youthfulness', 'sandal'], correct: 0 },
        { title: 'الثَّراء', kind: 'mcq', prompt: 'الثَّراء بالفتح means:', options: ['nobility, high standing', 'sandal', 'abundance of wealth', 'dust'], correct: 2 },
        { title: 'الفُتاء', kind: 'mcq', prompt: 'الفُتاء بالضم means:', options: ['sandal', 'nobility, high standing', 'youthfulness', 'abundance of wealth'], correct: 2 },
        { title: 'السَّناء', kind: 'mcq', prompt: 'السَّناء بفتح السين means:', options: ['light', 'abundance of wealth', 'youthfulness', 'nobility, high standing'], correct: 3 },
        { title: 'ضبط الحِذاء', kind: 'mcq', prompt: 'الحِذاء is vowelled:', options: ['بالكسر', 'بالفتح', 'بالضم', 'بالسكون'], correct: 0 },
        { title: 'المدّ يغيّر المعنى', kind: 'mcq', prompt: 'الثَّرَى and الثَّراء differ in:', options: ['التذكير والتأنيث', 'القصر والمدّ، ومعهما المعنى', 'حركة الفاء فقط', 'العدد'], correct: 1 },
        { title: 'ضابط السماعيّ', kind: 'mcq', prompt: 'السماعيّ من المقصور والممدود is:', options: ['That which was not heard from the Arabs', 'That which lacks that نظير', 'That which is used frequently', 'That which does not occur in the Qur’an'], correct: 1 },
        { title: 'تقابل الضابطين', kind: 'mcq', prompt: 'The نظير of a مقصور keeps a فتحة before its last letter; the نظير of a ممدود:', options: ['يلتزم كسر ما قبل آخره', 'يلتزم سكون ما قبل آخره', 'لا يشترط فيه شيء', 'يلتزم زيادة ألف قبل آخره'], correct: 3 },
      ],
    },
  ],
};

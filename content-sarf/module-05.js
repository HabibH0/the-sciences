// Module 05 — معاني صيغ الزوائد (What the Augmented Patterns Mean)
//
// Covers Weeks 9–11 of the Advanced Sarf course: the second half of
// التقسيم الثالث للفعل, from شذا العرف في فن الصرف by أحمد الحملاوي — what
// each صيغة of المزيد actually adds to the meaning of its أصل, once the
// definitions and أوزان of Module 04 are in place.
//
// Scope: معاني صيغ الزوائد in full — أَفْعَلَ، فَاعَلَ، فَعَّلَ، انْفَعَلَ،
// افْتَعَلَ، افْعَلَّ، تَفَعَّلَ، تَفَاعَلَ، اسْتَفْعَلَ, and the remaining
// صيغ. التقسيم الرابع (الجامد والمتصرف) begins in Module 06.
//
// Bank size is 20 items per lesson rather than the usual 24 (matching
// Module 04, its sibling half of this division).
//
// 2026-08-12: concept prose rewritten to match content/'s established
// pattern (Module 01, 20, etc.) rather than this course's original
// all-"Core Text" shape. Every matn quotation now sits in a typed box
// (Definition / Rule / Example / Careful / Core Text, matching how those
// are used elsewhere in the app) and is followed by English prose that
// fully translates and explains it — a learner should never need to parse
// the quoted Arabic unaided to follow the lesson; the Arabic is there for
// reference and precision, not as the only carrier of the point. Arabic
// terms and quoted phrases inside English sentences are wrapped in <bdi>
// per content/README.md's convention. quiz[]/bank[] pools are carried over
// unchanged — they were already English-carrier, self-contained, and
// weighted toward the load-bearing distinctions rather than trivia. There
// are no تركيب items in this course.

export default {
  id: 'as-05',
  title: 'معاني صيغ الزوائد',
  heading: 'الفعل',
  blurb: 'الفعل مزيد: what each صيغة of the أوزان مزيد actually adds to the meaning of its أصل — from التعدية to قوة المعنى.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'معاني صيغ الزوائد: أَفْعَلَ',
      subtitle: 'What the Added Letters Do — the principle, and the ten meanings that gather under أَفْعَلَ',
      concepts: [
        {
          heading: 'المراد بمعاني صيغ الزوائد',
          lines: [
            { html: `Grammarians distinguish two ways a word can carry meaning: through its individual letters (its <bdi>حروف</bdi>, i.e. its root), or through the pattern those letters are cast into (its <bdi>صيغة</bdi> and <bdi>بناء</bdi>). This lesson is about the second kind — what each augmented pattern <bdi>صيغة مزيدة</bdi> itself contributes, on top of whatever the root already means.`, list: false },
            { box: { title: 'Definition', lines: [
              `المُرادُ بِمَعاني صِيَغِ الزَّوائِدِ هي المَعاني الَّتِي تَدُلُّ عليها الكَلِمَةُ بِصِيغَتِها وبِنائِها لا بِحُرُوفِها`,
            ] } },
            { html: `"The meanings of the augmented patterns," <bdi>معاني صيغ الزوائد</bdi>, means exactly this: the meaning a word carries because of its pattern and structure, not because of its particular letters. Put a root into أَفْعَلَ instead of the bare فَعَلَ, and the letters ف-ع-ل haven't changed — only the mold they're poured into has. Whatever new meaning shows up is credited to that mold, not to the root.`, list: false },
            { box: { title: 'Core Text', lines: [
              `فالصِّيَغُ المُجَرَّدَةُ الأَصْلُ في مَعْناها فِعْلُ الفاعِلِ لِلْفِعْلِ`,
              `وتَحْوِيلُ الفِعْلِ من مُجَرَّدٍ إلى مَزِيدٍ، وذلك بِزِيادَةِ حَرْفٍ أو أَكْثَرَ، إنَّما يكونُ ذلك طَلَبًا لِمَعْنًى جَدِيدٍ`,
            ] } },
            { html: `A bare pattern <bdi>الصيغة المجردة</bdi> carries, at root, only one meaning: that the doer <bdi>فاعل</bdi> performed the action, nothing more. <bdi>ذَهَبْتُ</bdi> ("I went") and <bdi>ضَرَبْتُ زَيدًا</bdi> ("I hit Zayd") say exactly that and no more — literally, "I did the going, and the hitting, to Zayd." Moving a verb from bare <bdi>مجرد</bdi> to augmented <bdi>مزيد</bdi>, by adding one letter or more, is always done to buy a new meaning beyond that baseline.`, list: false },
            { html: `So the question this lesson answers, pattern by pattern, is: when فَعَلَ becomes أَفْعَلَ, or انْفَعَلَ, or اسْتَفْعَلَ, what new meaning is being bought?`, list: false },
          ],
          exercise: {
            prompt: `A word carries a meaning بصيغتها وبنائها لا بحروفها. What does that phrase pick out?`,
            kind: 'mcq',
            options: ['Meaning carried by the pattern itself, independent of which root fills it', 'Meaning carried by the individual letters of the root', 'Meaning fixed by السماع alone', 'Meaning carried by the context'],
            correct: 0,
          },
        },
        {
          heading: 'التعدية ودرجاتها',
          lines: [
            { html: `أَفْعَلَ carries ten distinct meanings across its uses. The first is easily the most common, and it is the one the pattern is best known for.`, list: false },
            { box: { title: 'Rule', lines: [
              `الأوَّل: التَّعْدِيَة، وهي تَصْيِيرُ الفاعِلِ بِالهَمْزَةِ مَفْعُولًا`,
            ] } },
            { html: `The first meaning is <bdi>التعدية</bdi> — making a verb transitive, or more transitive than it already was. Specifically: the همزة added at the front turns what was the doer <bdi>فاعل</bdi> of the bare verb into an object <bdi>مفعول</bdi> of the new one.`, list: false },
            { box: { title: 'Example', lines: [
              `أَقَمْتُ زَيدًا، وأَقْعَدْتُهُ، وأَقْرَأْتُهُ`,
              `الأَصْلُ: قامَ زَيدٌ وقَعَدَ وقَرَأَ. فلمَّا دَخَلَتْ عليه الهَمْزَةُ صارَ زَيدٌ مُقامًا مُقْعَدًا مُقْرَأً`,
            ] } },
            { html: `Originally, <bdi>قامَ زَيدٌ</bdi> ("Zayd stood"), <bdi>قَعَدَ</bdi> ("he sat") and <bdi>قَرَأَ</bdi> ("he read") all have Zayd performing the action himself. Add the همزة and the sentence becomes <bdi>أَقَمْتُ زَيدًا</bdi> ("I made Zayd stand"), <bdi>أَقْعَدْتُهُ</bdi> ("I made him sit") and <bdi>أَقْرَأْتُهُ</bdi> ("I made him read") — Zayd is now the one made to stand, sit, and read: the object of someone else's action. The همزة has moved the verb up one rung of transitivity, whatever rung it started on.`, list: false },
            { table: { title: 'درجات التعدية (Degrees of Transitivity)', headers: ['الأصل (Original)', 'بعد الهمزة (After the همزة)', 'المثال (Example)'], rows: [
              ['لازِم', 'مُتَعَدٍّ لِواحِدٍ', 'قامَ زَيدٌ ← أَقَمْتُ زَيدًا'],
              ['مُتَعَدٍّ لِواحِدٍ', 'مُتَعَدٍّ لاثْنَيْنِ', 'قَرَأَ زَيدٌ الكِتابَ ← أَقْرَأْتُهُ إيَّاهُ'],
              ['مُتَعَدٍّ لاثْنَيْنِ', 'مُتَعَدٍّ لِثَلاثَةٍ', 'عَلِمَ الطالِبُ المَسْأَلَةَ سَهْلَةً ← أَعْلَمْتُ الطالِبَ المَسْأَلَةَ سَهْلَةً'],
            ] } },
            { html: `That ladder has a ceiling almost nothing reaches.`, list: false },
            { box: { title: 'Careful', lines: [
              `ولم يُوجَدْ في اللُغَةِ ما هو مُتَعَدٍّ لاثْنَيْنِ، صارَ بالهَمْزَةِ مُتَعَدِّيًا لِثَلاثَةٍ، إلَّا رَأَى وعَلِمَ`,
            ] } },
            { html: `No verb that already took two objects is pushed to three by the همزة, except two: <bdi>رَأَى</bdi> ("to see") and <bdi>عَلِمَ</bdi> ("to know"). <bdi>أَرَيْتُ زَيدًا بَكْرًا قائِمًا</bdi> ("I showed Zayd that Bakr was standing") and <bdi>أَعْلَمْتُ زَيدًا بَكْرًا قائِمًا</bdi> ("I informed Zayd that Bakr was standing") are the only three-object verbs the همزة produces this way.`, list: false },
          ],
          exercise: {
            prompt: `Only two verbs in the language go from two objects to three by the همزة. Which?`,
            kind: 'mcq',
            options: ['قَامَ وقَعَدَ', 'قَرَأَ وكَتَبَ', 'ذَهَبَ وخَرَجَ', 'رَأَى وعَلِمَ'],
            correct: 3,
          },
        },
        {
          heading: 'الصيرورة والدخول والسلب',
          lines: [
            { html: `أَفْعَلَ's remaining nine meanings are each individually rarer than التعدية, but between them they cover most of what is left. Three of them turn on a change of state.`, list: false },
            { table: { headers: ['المعنى (Meaning)', 'البيان (Explanation)', 'أمثلة (Examples)'], rows: [
              ['الثاني: صَيْرُورَةُ شَيْءٍ ذا شَيْءٍ — becoming possessed of a thing', 'تَحَوُّلُ شَيْءٍ من حالٍ إلى حالٍ — a thing’s transformation from one state to another', 'أَلْبَنَ الرَّجُلُ، أَتْمَرَ، أَفْلَسَ — he became possessed of milk, of dates, of money'],
              ['الثالث: الدُّخُولُ في شَيْءٍ — entering into something', 'مَكانًا كان أو زَمانًا — whether a place or a time', 'أَشْأَمَ، أَعْرَقَ، أَصْبَحَ، أَمْسَى — he entered الشام, العراق, the morning, the evening (and likewise أَفْجَرَ، أَظْهَرَ، أَعْصَرَ، أَضْحَى، أَشْهَرَ)'],
              ['الرابع: السَّلْبُ والإزالَةُ — removal, stripping away', '—', 'أَقْذَيْتُ عَيْنَ فُلانٍ، وأَعْجَمْتُ الكِتابَ — I removed the القَذَى (speck) from his eye, and I removed the عُجْمَة (ambiguity) of the book by dotting it'],
            ] } },
            { html: `Note that the fourth reverses what a literal reading would suggest: <bdi>أَعْجَمْتُ الكِتابَ</bdi> does not mean "I made the book obscure" but "I removed its ambiguity <bdi>عُجْمَة</bdi> by dotting it."`, list: false },
          ],
          exercise: {
            prompt: `أَفْلَسَ الرَّجُلُ falls under which meaning?`,
            kind: 'mcq',
            options: ['التعدية', 'الصيرورة — he became possessed of فُلُوس', 'الدخول في شيء', 'السلب والإزالة'],
            correct: 1,
          },
        },
        {
          heading: 'المصادفة والاستحقاق والتعريض',
          lines: [
            { html: `Three more meanings — and one of them, أَكْرَمْتُهُ, is genuinely ambiguous without context.`, list: false },
            { table: { headers: ['المعنى (Meaning)', 'البيان (Explanation)', 'أمثلة (Examples)'], rows: [
              ['الخامس: مُصادَفَةُ الشَّيْءِ على صِفَةٍ — finding a thing to be of a certain description', 'مُوافَقَتُهُ على حالٍ أو صِفَةٍ مُعَيَّنَةٍ حِينَ اللِقاءِ بِهِ — finding it matches a particular state or quality upon encountering it', 'أَحْمَدْتُ زَيدًا، وأَكْرَمْتُهُ، وأَبْخَلْتُهُ — I found him praiseworthy, or generous, or miserly'],
              ['السادس: الاسْتِحْقاق — deserving, becoming fit for', 'أنَّ الفاعِلَ صارَ مُسْتَحِقًّا وأَهْلًا لِلْفِعْلِ — that the فاعل became deserving and fit for the action', 'أَحْصَدَ الزَّرْعُ، أَزْوَجَتْ هِنْدٌ — the crop became fit for reaping, and هند became fit for marriage'],
              ['السابع: التَعْرِيض — offering, exposing to', '—', 'أَرْهَنْتُ المَتاعَ، أَبَعْتُهُ — I offered the goods for pawning, for selling'],
            ] } },
            { html: `<bdi>أَكْرَمْتُهُ</bdi> is worth pausing on: under التعدية it would mean "I honoured him" (I made him honourable/generous), but under المصادفة it means "I found him to be generous." The pattern alone does not decide which is meant — only context does.`, list: false },
          ],
          exercise: {
            prompt: `أَحْصَدَ الزَّرْعُ falls under which meaning of أَفْعَلَ؟`,
            kind: 'mcq',
            options: ['التعريض', 'الصيرورة', 'الاستحقاق — the crop became fit for reaping', 'المصادفة'],
            correct: 2,
          },
        },
        {
          heading: 'بمعنى استفعل، والمطاوعة، والتمكين',
          lines: [
            { table: { headers: ['المعنى (Meaning)', 'البيان (Explanation)', 'المثال (Example)'], rows: [
              ['الثامن: أن يكونَ بِمَعْنَى (اسْتَفْعَلَ) — to carry the meaning of اسْتَفْعَلَ', 'اعْتَقَدْتُ أنَّهُ عَظِيمٌ — I believed him to be great', 'أَعْظَمْتُهُ — اسْتَعْظَمْتُهُ'],
              ['التاسع: أن يكونَ مُطاوِعًا لِـ(فَعَّلَ) — to serve as the مُطاوِع (undergoing counterpart) of فَعَّلَ', 'قَبُولُ أَثَرِ فِعْلٍ سابِقٍ — والمُطاوَعَةُ عَكْسُ التَعْدِيَةِ — accepting the effect of a prior action; المطاوعة is the reverse of التعدية', 'فَطَّرْتُهُ فأَفْطَرَ، وبَشَّرْتُهُ فأَبْشَرَ'],
              ['العاشر: التَمْكِين — enabling', 'أنَّ الفاعِلَ يُمَكِّنُ المَفْعُولَ بِهِ من الفِعْلِ — that the فاعل enables the مفعول به to perform the action', 'أَحْفَرْتُهُ النَّهَرَ — I enabled him to dig the river'],
            ] } },
            { html: `Three closing notes qualify the whole list — أَفْعَلَ does not always buy a new meaning at all.`, list: false },
            { box: { title: 'Careful', lines: [
              `ورُبَّما جاءَ المَهْمُوزُ كأَصْلِهِ`,
            ] } },
            { html: `Sometimes the أَفْعَلَ form (called <bdi>المهموز</bdi>, "the one carrying the همزة") simply matches its bare أصل in meaning: <bdi>سَرَى</bdi> and <bdi>أَسْرَى</bdi> both mean "to travel by night," <bdi>سَقَى</bdi> and <bdi>أَسْقَى</bdi> both mean "to give to drink," and likewise <bdi>طافَ</bdi>/<bdi>أَطافَ</bdi> ("to circle") and <bdi>ضاءَ</bdi>/<bdi>أَضاءَ</bdi> ("to shine") — though some hold that even here أَفْعَلَ still adds emphasis <bdi>توكيد</bdi> or intensity <bdi>مبالغة</bdi>.`, list: false },
            { box: { title: 'Careful', lines: [
              `أو أَغْنَى عن أَصْلِهِ لِعَدَمِ وُرُودِهِ`,
            ] } },
            { html: `Sometimes أَفْعَلَ stands in for a bare أصل that was never actually used: <bdi>أَفْلَحَ</bdi> means "he succeeded" <bdi>فازَ</bdi>, though no فَلَحَ in that sense exists at all; likewise <bdi>أَقْسَمَ باللهِ</bdi> ("he swore by Allah") and <bdi>أَدْرَكَ الشَيْءَ</bdi> ("he attained the thing").`, list: false },
            { box: { title: 'Careful', lines: [
              `ونَدَرَ مَجِيءُ الفِعْلِ مُتَعَدِّيًا بِلا هَمْزَةٍ، ولازِمًا بِها`,
            ] } },
            { html: `And rarely the pattern runs backwards entirely: the bare verb is transitive and the أَفْعَلَ form built from it is intransitive — which is المطاوعة (the note just above) rather than التعدية. <bdi>نَسَلْتُ رِيشَ الطائِرِ</bdi> ("I plucked the bird's feathers") but <bdi>أَنْسَلَ الرِّيشُ</bdi> ("the feathers moulted by themselves"); <bdi>عَرَضْتُ الشَيْءَ</bdi> ("I displayed the thing") but <bdi>أَعْرَضَ الشَيْءُ</bdi> ("the thing appeared by itself"); <bdi>كَبَبْتُ زَيدًا على وَجْهِهِ</bdi> ("I threw Zayd face-down") but <bdi>أَكَبَّ زَيدٌ على وَجْهِهِ</bdi> ("Zayd fell face-down by himself"); <bdi>قَشَعَتِ الرِّيحُ السَّحابَ</bdi> ("the wind swept the clouds away") but <bdi>أَقْشَعَ السَّحابُ</bdi> ("the clouds cleared by themselves").`, list: false },
          ],
          clarification: `أَكَبَّ is the case most often stumbled over, because it inverts the usual expectation. Ordinarily the همزة is what makes a verb transitive — <bdi>أَذْهَبَ</bdi> ("he sent away") from <bdi>ذَهَبَ</bdi> ("he went"). Here the reverse holds: <bdi>كَبَبْتُ زَيدًا</bdi> ("I threw Zayd down") is the transitive one, and <bdi>أَكَبَّ زَيدٌ</bdi> ("Zayd fell down"), with the همزة, is intransitive. What أفعل is doing in these four pairs is not التعدية but المطاوعة — accepting the effect of the bare verb. That is why these four pairs are marked <bdi>نادر</bdi> ("rare"): they run against the dominant use of the same صيغة.`,
          exercise: {
            prompt: `كَبَبْتُ زَيدًا على وَجْهِهِ is transitive, and أَكَبَّ زَيدٌ على وَجْهِهِ, with the همزة, is intransitive. What is أفعل doing here?`,
            kind: 'mcq',
            options: ['الصيرورة', 'التعريض', 'المطاوعة — accepting the effect of the bare verb, which is described as نادر', 'التعدية, in its usual sense'],
            correct: 2,
          },
        },
      ],
      quiz: [
        {
          q: 'Which meaning of أَفْعَلَ is described as هذا المعنى الأكثر؟',
          options: ['التمكين', 'التعدية', 'الصيرورة', 'الاستحقاق'],
          correct: 1,
        },
        {
          q: 'What is التعدية defined as?',
          options: ['قبول أثر فعل سابق', 'تحول شيء من حال إلى حال', 'أن الفاعل صار مستحقًّا للفعل', 'تصيير الفاعل بالهمزة مفعولًا'],
          correct: 3,
        },
        {
          q: 'أَصْبَحَ and أَمْسَى fall under which meaning?',
          options: ['المصادفة', 'التعريض', 'الدخول في شيء', 'الصيرورة'],
          correct: 2,
        },
        {
          q: 'أَعْجَمْتُ الكِتابَ means:',
          options: ['I exposed it to عُجمة', 'I removed its عُجمة by dotting it', 'I made it أعجمي', 'I found it to be أعجمي'],
          correct: 1,
        },
        {
          q: 'أَرْهَنْتُ المَتاعَ falls under which meaning?',
          options: ['التعريض', 'الاستحقاق', 'المصادفة', 'التمكين'],
          correct: 0,
        },
        {
          q: 'المطاوعة is described as:',
          options: ['نفس التعدية', 'نوع من الصيرورة', 'نوع من التعريض', 'عكس التعدية'],
          correct: 3,
        },
      ],
      bank: [
        {
          title: 'الصيغة لا الحروف',
          kind: 'mcq',
          prompt: 'معاني صيغ الزوائد are meanings carried بصيغتها وبنائها لا بحروفها. What follows?',
          options: ['Any root put into the pattern picks up that meaning', 'Only certain roots carry the meaning', 'The meaning depends on the أصول', 'The meaning is fixed by السماع alone'],
          correct: 0,
        },
        {
          title: 'الأصل في المجرد',
          kind: 'mcq',
          prompt: 'What is the basic meaning of a مجرد form?',
          options: ['المطاوعة', 'الطلب', 'التكثير', 'فِعْلُ الفاعِلِ لِلْفِعْل — the doer simply doing the act'],
          correct: 3,
        },
        {
          title: 'طلب معنى جديد',
          kind: 'mcq',
          prompt: 'Why is a verb moved from مجرد to مزيد؟',
          options: ['To fit a particular وزن', 'To make it قياسي', 'طلبًا لمعنى جديد', 'To make it easier to pronounce'],
          correct: 2,
        },
        {
          title: 'أقمت زيدًا',
          kind: 'mcq',
          prompt: 'قَامَ زَيدٌ becomes أَقَمْتُ زَيدًا. What has happened to زيد؟',
          options: ['He has been dropped', 'Nothing — his role is unchanged', 'He was the فاعل and has become the مفعول', 'He was the مفعول and has become the فاعل'],
          correct: 2,
        },
        {
          title: 'أقرأته إياه',
          kind: 'mcq',
          prompt: 'قَرَأَ زَيدٌ الكِتابَ was متعدٍّ لواحد. What is أَقْرَأْتُهُ إيَّاهُ؟',
          options: ['متعدٍّ لاثنين', 'لازم', 'متعدٍّ لواحد still', 'متعدٍّ لثلاثة'],
          correct: 0,
        },
        {
          title: 'أعلمت الطالب',
          kind: 'mcq',
          prompt: 'عَلِمَ الطالِبُ المَسْأَلَةَ سَهْلَةً becomes أَعْلَمْتُ الطالِبَ المَسْأَلَةَ سَهْلَةً. How many مفاعيل does it now take?',
          options: ['ثلاثة', 'اثنان', 'واحد', 'None'],
          correct: 0,
        },
        {
          title: 'حدّ التعدية',
          kind: 'mcq',
          prompt: 'Why are رَأَى and عَلِمَ singled out?',
          options: ['They are the only لازم verbs made متعدٍّ', 'They are the only verbs that refuse the همزة', 'They are the only مطاوع verbs', 'They are the only verbs متعدٍّ لاثنين that the همزة makes متعدٍّ لثلاثة'],
          correct: 3,
        },
        {
          title: 'ألبن وأتمر',
          kind: 'mcq',
          prompt: 'أَلْبَنَ الرَّجُلُ and أَتْمَرَ are glossed:',
          options: ['sought milk and dates', 'became possessed of milk and dates', 'removed the milk and dates', 'found milk and dates'],
          correct: 1,
        },
        {
          title: 'أشأم وأعرق',
          kind: 'mcq',
          prompt: 'أَشْأَمَ and أَعْرَقَ illustrate الدخول في شيء. In what?',
          options: ['A place — الشام and العراق', 'A time', 'A state', 'A quality'],
          correct: 0,
        },
        {
          title: 'أفجر وأظهر',
          kind: 'mcq',
          prompt: 'أَفْجَرَ, أَظْهَرَ, أَعْصَرَ, أَضْحَى and أَشْهَرَ illustrate entry into what?',
          options: ['A contract', 'A quality', 'A time', 'A place'],
          correct: 2,
        },
        {
          title: 'أقذيت عينه',
          kind: 'mcq',
          prompt: 'أَقْذَيْتُ عَيْنَ فُلانٍ means:',
          options: ['I put القَذَى in his eye', 'I found القَذَى in his eye', 'I exposed his eye to القَذَى', 'I removed القَذَى from his eye'],
          correct: 3,
        },
        {
          title: 'أحمدت زيدًا',
          kind: 'mcq',
          prompt: 'أَحْمَدْتُ زَيدًا, under المصادفة, means:',
          options: ['I removed his حمد', 'I found him to be محمود', 'I made him محمود', 'I sought حمد from him'],
          correct: 1,
        },
        {
          title: 'المصادفة والتعدية',
          kind: 'mcq',
          prompt: 'أَكْرَمْتُهُ can be read two ways. Which pair?',
          options: ['I removed his honour, or I gave him honour', 'I became honourable, or I made him so', 'I honoured him (التعدية), or I found him generous (المصادفة)', 'I honoured him, or I sought honour from him'],
          correct: 2,
        },
        {
          title: 'أزوجت هند',
          kind: 'mcq',
          prompt: 'أَزْوَجَتْ هِنْدٌ means اسْتَحَقَّتْ هِنْدٌ الزَّواجَ. Which meaning is that?',
          options: ['الصيرورة', 'التمكين', 'الاستحقاق', 'المصادفة'],
          correct: 2,
        },
        {
          title: 'أعظمته',
          kind: 'mcq',
          prompt: 'أَعْظَمْتُهُ means اسْتَعْظَمْتُهُ. What is أفعل doing here?',
          options: ['Standing in the sense of اسْتَفْعَلَ', 'Standing in the sense of انْفَعَلَ', 'Standing in the sense of تَفَعَّلَ', 'Acting as the مطاوع of فَعَّلَ'],
          correct: 0,
        },
        {
          title: 'فطّرته فأفطر',
          kind: 'mcq',
          prompt: 'فَطَّرْتُهُ فأَفْطَرَ shows أفعل acting as the مطاوع of which صيغة؟',
          options: ['اسْتَفْعَلَ', 'فَعَّلَ', 'فَاعَلَ', 'انْفَعَلَ'],
          correct: 1,
        },
        {
          title: 'أحفرته النهر',
          kind: 'mcq',
          prompt: 'أَحْفَرْتُهُ النَّهَرَ means مَكَّنْتُهُ مِنْ حَفْرِهِ. Which meaning is that?',
          options: ['التمكين', 'التعدية', 'التعريض', 'الاستحقاق'],
          correct: 0,
        },
        {
          title: 'سرى وأسرى',
          kind: 'mcq',
          prompt: 'سَرَى وأَسْرَى, سَقَى وأَسْقَى, طَافَ وأَطَافَ illustrate what?',
          options: ['That أفعل may carry the same meaning as its bare أصل', 'That أفعل always adds transitivity', 'That أفعل is the مطاوع of the bare form', 'That the bare form is unattested'],
          correct: 0,
        },
        {
          title: 'أفلح',
          kind: 'mcq',
          prompt: 'أَفْلَحَ is a special case because:',
          options: ['It is the مطاوع of فَلَّحَ', 'It carries three objects', 'It is شاذ', 'It stands in for an أصل that does not exist — there is no فَلَحَ meaning فازَ'],
          correct: 3,
        },
        {
          title: 'قشعت الريح',
          kind: 'mcq',
          prompt: 'قَشَعَتِ الرِّيحُ السَّحابَ, وأَقْشَعَ السَّحابُ. What is unusual here?',
          options: ['Both forms are intransitive', 'The أفعل form takes two objects', 'The bare form is transitive and the أفعل form intransitive — the reverse of the usual', 'Both forms are transitive'],
          correct: 2,
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'فَاعَلَ وفَعَّلَ',
      subtitle: 'Mutual Action and Intensification — المشاركة and المغالبة under فَاعَلَ, and the eight meanings of فَعَّلَ',
      concepts: [
        {
          heading: 'فاعل: التشارك',
          lines: [
            { html: `فَاعَلَ is common in two meanings, and the first is the one the pattern is named for.`, list: false },
            { box: { title: 'Rule', lines: [
              `يَكْثُرُ اسْتِعْمالُهُ في مَعْنَيَيْنِ. أَحَدُهُما: التَشارُك (أو المُشارَكَة) بَيْنَ اثْنَيْنِ فأَكْثَرَ`,
              `وهو أن يَفْعَلَ أَحَدُهُما بِصاحِبِهِ فِعْلًا، فيُقابِلَهُ الآخَرُ بِمِثْلِهِ، وحِينَئِذٍ فيُنْسَبُ لِلْبادِئِ نِسْبَةُ الفاعِلِيَّةِ، ولِلْمُقابِلِ نِسْبَةُ المَفْعُولِيَّةِ`,
            ] } },
            { html: `The first common meaning is <bdi>التشارك</bdi> (or <bdi>المشاركة</bdi>) — mutual action between two or more parties: one does something to the other, and the other answers in kind. But the grammar does not treat the two parties alike: the one who began is labelled the doer <bdi>فاعل</bdi>, and the one who answered is labelled the object <bdi>مفعول</bdi>, even though both genuinely acted.`, list: false },
            { box: { title: 'Rule', lines: [
              `فإذا كان أَصْلُ الفِعْلِ لازِمًا صارَ بِهذه الصِّيغَةِ مُتَعَدِّيًا`,
            ] } },
            { html: `If the bare verb was intransitive <bdi>لازم</bdi>, casting it into فَاعَلَ makes it transitive. <bdi>مَشَيْتُ</bdi> ("I walked") takes no object at all, but <bdi>مَاشَيْتُهُ</bdi> ("I walked alongside him") does; likewise <bdi>كَرُمَ</bdi> ("he was noble," intransitive) becomes <bdi>كارَمْتُهُ</bdi> ("I vied with him in nobility," transitive).`, list: false },
          ],
          exercise: {
            prompt: `In مَاشَيْتُهُ, who is grammatically the فاعل and who the مفعول؟`,
            kind: 'mcq',
            options: ['The one who began is the فاعل; the one who answered in kind is the مفعول', 'Both are فاعل', 'Both are مفعول', 'Neither role is assigned'],
            correct: 0,
          },
        },
        {
          heading: 'فاعل: المغالبة',
          lines: [
            { html: `المفاعلة says two parties acted on each other; it says nothing about who came out ahead. Expressing that takes a different form entirely.`, list: false },
            { box: { title: 'Rule', lines: [
              `وفي هذه الصِّيغَةِ مَعْنَى المُغالَبَةِ (مع المُفاعَلَة)، ويَدُلُّ على غَلَبَةِ أَحَدِهِما، بِصِيغَةِ (فَعَل) من بابِ (نَصَرَ)`,
              `ما لم يَكُنْ واوِيَّ الفاءِ، أو يائِيَّ العَيْنِ أو اللامِ، فإنَّه يَدُلُّ على الغَلَبَةِ من بابِ ضَرَبَ`,
              `ومَتَى كان (فَعَلَ) لِلدَلالَةِ على الغَلَبَةِ كان مُتَعَدِّيًا، وإنْ كان أَصْلُهُ لازِمًا، وكان من بابِ (نَصَرَ) أو (ضَرَبَ) على ما تَقَدَّمَ من أَيِّ بابٍ كان`,
            ] } },
            { html: `<bdi>المغالبة</bdi> — expressing that one party prevailed, "outdid" the other — is not carried by فَاعَلَ at all. Instead you drop back to a bare <bdi>فَعَلَ</bdi>, conjugated on <bdi>باب نصر</bdi> — or on <bdi>باب ضرب</bdi> if the root's first letter is و (<bdi>واوي الفاء</bdi>) or its middle or last letter is ي (<bdi>يائي العين أو اللام</bdi>). Used this way, the verb is transitive no matter what باب or transitivity it originally had.`, list: false },
          ],
          clarification: `The mechanism is easy to state and easy to get backwards. فَاعَلَ says two parties did something to each other; it says nothing about who won. To say that one of them prevailed, you do not stay on فَاعَلَ — you go back to a bare فَعَلَ and read it as المغالبة. So <bdi>كَارَمْتُهُ</bdi> means "I vied with him in generosity," while <bdi>كَرَمْتُهُ</bdi> (bare, on باب نصر) means "I outdid him in it." And note the consequence stated at the end: a verb used for المغالبة is transitive whatever its original أصل was, even if that أصل was لازم.`,
          exercise: {
            prompt: `To express that one party prevailed over the other, which صيغة is used?`,
            kind: 'mcq',
            options: ['اسْتَفْعَلَ', 'A bare فَعَلَ, normally from باب نصر', 'فَاعَلَ itself', 'تَفَاعَلَ'],
            correct: 1,
          },
        },
        {
          heading: 'فاعل: الموالاة وبقية معانيه',
          lines: [
            { box: { title: 'Rule', lines: [
              `وثانِيهِما: المُوالاة (وُقُوعُ الفِعْلِ بَعْضُهُ في أَثَرِ بَعْضٍ)، فيكونُ بِمَعْنَى (أَفْعَلَ) المُتَعَدِّي`,
              `كوالَيْتُ الصَومَ وتابَعْتُهُ، بِمَعْنَى أَوْلَيْتُ وأَتْبَعْتُ، بَعْضَهُ بَعْضًا`,
            ] } },
            { html: `The second of the two common meanings is <bdi>الموالاة</bdi> — succession, one part of the action following straight after another — carrying the force of a transitive أَفْعَلَ. <bdi>وَالَيْتُ الصَومَ</bdi> and <bdi>تابَعْتُهُ</bdi> ("I kept up the fast without a break") both mean <bdi>أَوْلَيْتُ</bdi> and <bdi>أَتْبَعْتُ</bdi> — "I made one part of it follow directly after another."`, list: false },
            { html: `Beyond those two common meanings, the صيغة turns up in three further, less common uses.`, list: false },
            { table: { title: 'استعمالات أخرى (Other Uses)', headers: ['الاستعمال (Use)', 'المثال (Example)'], rows: [
              ['بِمَعْنَى (فَعَّلَ) المُضَعَّفِ لِلتَكْثِير — the meaning of doubled فَعَّلَ, for intensification', 'ضاعَفْتُ الشَيْءَ وضَعَّفْتُهُ'],
              ['بِمَعْنَى (فَعَلَ) — the meaning of the bare فَعَلَ', 'دافَعَ ودَفَعَ ، سافَرَ وسَفَرَ — it is said we take the augmented form for emphasis and intensity: سَفَرَ for any going-out, سافَرَ for a distant going-out (traveling)'],
              ['المُفاعَلَةُ بِتَنْزِيلِ غَيْرِ الفِعْلِ مَنْزِلَتَهُ — المفاعلة by treating something that is not really a mutual action as though it were', '﴿يُخادِعُونَ اللهَ﴾ — their dealing with الله, through what their souls concealed of كُفْر while outwardly showing إسلام, and His repaying them for it, was cast as مُخادَعَة (mutual deception)'],
            ] } },
          ],
          exercise: {
            prompt: `In ﴿يُخادِعُونَ اللهَ﴾, on what basis is the form of مفاعلة used at all?`,
            kind: 'mcq',
            options: ['It expresses المغالبة', 'Something that is not literally an act is treated as though it were, on both sides', 'Two parties literally deceived one another', 'The verb means simply خَدَعَ'],
            correct: 1,
          },
        },
        {
          heading: 'فعَّل: ما تشارك فيه أفعل',
          lines: [
            { box: { title: 'Rule', lines: [
              `يَكْثُرُ اسْتِعْمالُها في ثَمانِيَةِ مَعانٍ، تُشارِكُ (أَفْعَلَ) في اثْنَيْنِ منها`,
            ] } },
            { html: `فَعَّلَ carries eight common meanings. Two of them are the same two فَعَّلَ shares with أَفْعَلَ:`, list: false },
            { table: { headers: ['المعنى المشترك (Shared Meaning)', 'البيان (Explanation)', 'أمثلة (Examples)'], rows: [
              ['التَعْدِيَة', 'لازِم ← مُتَعَدٍّ لِواحِدٍ ؛ مُتَعَدٍّ لِواحِدٍ ← مُتَعَدٍّ لاثْنَيْنِ', 'قَوَّمْتُ زَيدًا وقَعَّدْتُهُ ؛ فَهِمَ زَيدٌ الدَرْسَ ← فَهَّمْتُهُ الدَرْسَ'],
              ['الإزالَة (removal)', '—', 'جَرَّبْتُ البَعِيرَ، وقَشَّرْتُ الفاكِهَةَ — I removed its mange (جَرَب); I removed its peel (قِشْر)'],
            ] } },
            { box: { title: 'Rule', lines: [
              `وتَنْفَرِدُ بِسِتَّةٍ`,
            ] } },
            { html: `The remaining six belong to فَعَّلَ alone, and they follow in the next concept.`, list: false },
          ],
          exercise: {
            prompt: `Which two meanings do فَعَّلَ and أَفْعَلَ share?`,
            kind: 'mcq',
            options: ['التعدية والإزالة', 'التعدية والتكثير', 'الإزالة والمطاوعة', 'التكثير والتوجه'],
            correct: 0,
          },
        },
        {
          heading: 'فعَّل: ما تنفرد به',
          lines: [
            { table: { title: 'الستة التي تنفرد بها (The Six It Has Alone)', headers: ['المعنى (Meaning)', 'البيان (Explanation)', 'أمثلة (Examples)'], rows: [
              ['التَكْثِير (المُبالَغَة) — intensification, the most common meaning', 'في الفِعْلِ — in the action itself', 'جَوَّلَ وطَوَّفَ — he did much wandering and circling about'],
              ['', 'أو في المَفْعُولِ — or in the مفعول (the object)', 'غَلَّقَتِ الأبوابَ — she closed many doors'],
              ['', 'أو في الفاعِلِ — or in the فاعل (the subject)', 'مَوَّتَتِ الإبِلُ ، وبَرَّكَتْ — many of the camels died; many of them knelt down'],
              ['صَيْرُورَةُ شَيْءٍ شِبْهَ شَيْءٍ — a thing becoming similar to another thing', '—', 'قَوَّسَ زَيدٌ وحَجَّرَ الطِّينُ — he became bow-like in his curve; the clay became stone-like in its hardness'],
              ['نِسْبَةُ الشَيْءِ إلى أَصْلِ الفِعْلِ — attributing something to the root meaning of the verb', '—', 'فَسَّقْتُ زَيدًا، أو كَفَّرْتُهُ — I attributed him to الفِسْق (moral corruption) or الكُفْر (disbelief)'],
              ['التَوَجُّهُ إلى الشَيْءِ — turning toward something', '—', 'شَرَّقْتُ أو غَرَّبْتُ — I turned toward the east or the west'],
              ['اخْتِصارُ حِكايَةِ الشَيْءِ — abbreviating the telling of something', '—', 'هَلَّلَ، سَبَّحَ، لَبَّى، أَمَّنَ، كَبَّرَ، سَلَّمَ'],
              ['قَبُولُ الشَيْءِ (قَبُولُ فِعْلِ الفاعِلِ) — accepting something (accepting the فاعل’s action)', '—', 'شَفَّعْتُ زَيدًا — I accepted his intercession (شَفاعَة)'],
            ] } },
            { html: `As with أَفْعَلَ, three further uses are noted where the pattern buys no new meaning at all.`, list: false },
            { box: { title: 'Careful', lines: [
              `ورُبَّما وَرَدَ بِمَعْنَى أَصْلِهِ`,
              `أو بِمَعْنَى تَفَعَّلَ`,
              `ورُبَّما أَغْنَى عن أَصْلِهِ لِعَدَمِ وُرُودِهِ`,
            ] } },
            { html: `Sometimes فَعَّلَ carries exactly its bare أصل's meaning, as in <bdi>﴿زُيِّنَ لِلناسِ حُبُّ الشَّهَواتِ﴾</bdi> — "the love of desires has been made attractive to mankind" — where <bdi>زَيَّنَ</bdi> and <bdi>زانَ</bdi> mean the same thing. Sometimes it carries تَفَعَّلَ's meaning instead, as in <bdi>وَلَّى</bdi> and <bdi>تَوَلَّى</bdi> (both "he turned away") or <bdi>فَكَّرَ</bdi> and <bdi>تَفَكَّرَ</bdi> (both "he reflected"). And sometimes it stands in for an أصل that was never attested at all, as in <bdi>عَيَّرَهُ</bdi> ("he reproached him," equivalent to <bdi>عابَهُ</bdi>) and <bdi>عَجَّزَتِ المَرْأَةُ</bdi> ("the woman grew old").`, list: false },
          ],
          exercise: {
            prompt: `Which meaning of فَعَّلَ is described as أغلب المعاني؟`,
            kind: 'mcq',
            options: ['التعدية', 'الإزالة', 'التوجه إلى الشيء', 'التكثير'],
            correct: 3,
          },
        },
      ],
      quiz: [
        {
          q: 'The first of the two common meanings of فَاعَلَ is:',
          options: ['التشارك بين اثنين فأكثر', 'الموالاة', 'المغالبة', 'التكثير'],
          correct: 0,
        },
        {
          q: 'To express المغالبة, which صيغة is used?',
          options: ['فَاعَلَ', 'فَعَّلَ', 'تَفَاعَلَ', 'فَعَلَ, normally from باب نصر'],
          correct: 3,
        },
        {
          q: 'وَالَيْتُ الصَومَ وتابَعْتُهُ illustrates:',
          options: ['التكثير', 'الموالاة', 'التشارك', 'المغالبة'],
          correct: 1,
        },
        {
          q: 'In how many meanings does فَعَّلَ commonly occur?',
          options: ['أربعة', 'ثمانية', 'ستة', 'عشرة'],
          correct: 1,
        },
        {
          q: 'شَفَّعْتُ زَيدًا means:',
          options: ['I made him a شفيع', 'I attributed شفاعة to him', 'I accepted his شفاعة', 'I sought his شفاعة'],
          correct: 2,
        },
        {
          q: 'فَسَّقْتُ زَيدًا illustrates which meaning?',
          options: ['التوجه إلى الشيء', 'نسبة الشيء إلى أصل الفعل', 'التكثير', 'الإزالة'],
          correct: 1,
        },
      ],
      bank: [
        {
          title: 'ماشيته',
          kind: 'mcq',
          prompt: 'مَشَيْتُ was لازم. What is مَاشَيْتُهُ؟',
          options: ['still لازم', 'متعدٍّ لاثنين', 'مطاوع', 'متعدٍّ'],
          correct: 3,
        },
        {
          title: 'كارمته',
          kind: 'mcq',
          prompt: 'كَرُمَ becomes كَارَمْتُهُ. What has the ألف done?',
          options: ['Made a لازم verb transitive, and introduced mutual action', 'Made the verb intransitive', 'Added intensification only', 'Changed the tense'],
          correct: 0,
        },
        {
          title: 'البادئ والمقابل',
          kind: 'mcq',
          prompt: 'In مفاعلة, how are the two parties assigned grammatically?',
          options: ['The one who began takes نسبة الفاعلية; the one who answered takes نسبة المفعولية', 'Both take نسبة الفاعلية', 'Both take نسبة المفعولية', 'Neither is assigned'],
          correct: 0,
        },
        {
          title: 'باب المغالبة',
          kind: 'mcq',
          prompt: 'A verb is used for المغالبة. Which باب does the bare فَعَلَ normally take?',
          options: ['كَرُمَ', 'نَصَرَ', 'ضَرَبَ', 'فَتَحَ'],
          correct: 1,
        },
        {
          title: 'استثناء المغالبة',
          kind: 'mcq',
          prompt: 'In which cases does the المغالبة verb come from باب ضَرَبَ instead?',
          options: ['When it is مضاعف', 'When it is مهموز', 'When its أصل is متعدٍّ', 'When it is واوي الفاء, or يائي العين أو اللام'],
          correct: 3,
        },
        {
          title: 'تعدي المغالبة',
          kind: 'mcq',
          prompt: 'A verb used for المغالبة — is it transitive?',
          options: ['Only if its أصل was متعدٍّ', 'It varies with the باب', 'Yes, always, even if its أصل was لازم', 'No, always intransitive'],
          correct: 2,
        },
        {
          title: 'معنى الموالاة',
          kind: 'mcq',
          prompt: 'What is الموالاة defined as?',
          options: ['Requesting the action', 'The action occurring one part after another, in succession', 'One of them doing an action to the other, and the other responding in kind', 'Accepting the effect of a prior action'],
          correct: 1,
        },
        {
          title: 'فاعل بمعنى أفعل',
          kind: 'mcq',
          prompt: 'وَالَيْتُ and تابَعْتُ are glossed أَوْلَيْتُ and أَتْبَعْتُ. What does that show?',
          options: ['فَاعَلَ standing for تَفَاعَلَ', 'فَاعَلَ standing for فَعَّلَ', 'فَاعَلَ expressing المغالبة', 'فَاعَلَ standing in the sense of the transitive أَفْعَلَ'],
          correct: 3,
        },
        {
          title: 'ضاعفت وضعّفت',
          kind: 'mcq',
          prompt: 'ضاعَفْتُ الشَيْءَ and ضَعَّفْتُهُ are set side by side to show:',
          options: ['Both expressing الإزالة', 'فَاعَلَ standing in the sense of the مضعَّف فَعَّلَ for التكثير', 'فَاعَلَ expressing المشاركة', 'فَعَّلَ expressing المطاوعة'],
          correct: 1,
        },
        {
          title: 'سفر وسافر',
          kind: 'mcq',
          prompt: 'On the view mentioned, how do سَفَرَ and سافَرَ differ?',
          options: ['سَفَرَ is any going out; سافَرَ is going far — the مزيد carrying مبالغة وتوكيد', 'سافَرَ is any going out; سَفَرَ is going far', 'They are identical in every respect', 'سافَرَ expresses المشاركة'],
          correct: 0,
        },
        {
          title: 'قوّمت زيدًا',
          kind: 'mcq',
          prompt: 'قَوَّمْتُ زَيدًا and قَعَّدْتُهُ show فَعَّلَ doing what?',
          options: ['التعدية of a لازم verb', 'الإزالة', 'التكثير', 'التوجه'],
          correct: 0,
        },
        {
          title: 'فهّمته الدرس',
          kind: 'mcq',
          prompt: 'فَهِمَ زَيدٌ الدَرْسَ becomes فَهَّمْتُهُ الدَرْسَ. How many objects does it now take?',
          options: ['واحد', 'ثلاثة', 'None', 'اثنان'],
          correct: 3,
        },
        {
          title: 'جرّبت البعير',
          kind: 'mcq',
          prompt: 'جَرَّبْتُ البَعِيرَ and قَشَّرْتُ الفاكِهَةَ illustrate which meaning?',
          options: ['النسبة', 'الإزالة', 'التكثير', 'التعدية'],
          correct: 1,
        },
        {
          title: 'غلّقت الأبواب',
          kind: 'mcq',
          prompt: 'غَلَّقَتِ الأبوابَ shows التكثير in which element?',
          options: ['في الفعل', 'في الزمان', 'في المفعول', 'في الفاعل'],
          correct: 2,
        },
        {
          title: 'موّتت الإبل',
          kind: 'mcq',
          prompt: 'مَوَّتَتِ الإبِلُ shows التكثير in which element?',
          options: ['في الفاعل', 'في المفعول', 'في الفعل', 'في المكان'],
          correct: 0,
        },
        {
          title: 'جوّل وطوّف',
          kind: 'mcq',
          prompt: 'جَوَّلَ and طَوَّفَ show التكثير in which element?',
          options: ['في الزمان', 'في الفعل', 'في الفاعل', 'في المفعول'],
          correct: 1,
        },
        {
          title: 'قوّس وحجّر',
          kind: 'mcq',
          prompt: 'قَوَّسَ زَيدٌ and حَجَّرَ الطِّينُ illustrate which meaning?',
          options: ['التوجه إلى الشيء', 'قبول الشيء', 'صيرورة شيء شِبْهَ شيء', 'الإزالة'],
          correct: 2,
        },
        {
          title: 'شرّقت وغرّبت',
          kind: 'mcq',
          prompt: 'شَرَّقْتُ and غَرَّبْتُ illustrate which meaning?',
          options: ['الاختصار', 'التوجه إلى الشيء', 'النسبة إلى أصل الفعل', 'التكثير'],
          correct: 1,
        },
        {
          title: 'هلّل وسبّح',
          kind: 'mcq',
          prompt: 'هَلَّلَ, سَبَّحَ, لَبَّى, أَمَّنَ, كَبَّرَ and سَلَّمَ illustrate which meaning?',
          options: ['اختصار حكاية الشيء', 'التوجه إلى الشيء', 'قبول الشيء', 'التكثير'],
          correct: 0,
        },
        {
          title: 'ولّى وتولّى',
          kind: 'mcq',
          prompt: 'وَلَّى with تَوَلَّى, and فَكَّرَ with تَفَكَّرَ, show فَعَّلَ standing in the sense of:',
          options: ['اسْتَفْعَلَ', 'تَفَعَّلَ', 'أَفْعَلَ', 'انْفَعَلَ'],
          correct: 1,
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'انْفَعَلَ وافْتَعَلَ وافْعَلَّ',
      subtitle: 'Submission, Effort and Intensity — the single meaning of انفعل, the six of افتعل, and the one of افعلَّ',
      concepts: [
        {
          heading: 'انفعل: المطاوعة',
          lines: [
            { html: `Where أَفْعَلَ had ten meanings and فَعَّلَ eight, انْفَعَلَ has exactly one.`, list: false },
            { box: { title: 'Rule', lines: [
              `يَأْتِي لِمَعْنًى واحِدٍ، وهو المُطاوَعَة`,
              `المُطاوَعَة: هي قَبُولُ تَأْثِيرِ الغَيْرِ (عَكْسُ التَعْدِيَة)`,
              `ولِهذا لا يكونُ إلَّا لازِمًا`,
            ] } },
            { html: `انْفَعَلَ carries a single meaning: <bdi>المطاوعة</bdi> — accepting the effect of another's action, the reverse of التعدية. Because its subject is, by definition, the thing being acted upon rather than the one acting, انْفَعَلَ can never take an object of its own — it is always intransitive <bdi>لازم</bdi>.`, list: false },
            { html: `It is also restricted in which verbs it can attach to, namely <bdi>الأفعال العلاجية</bdi>.`, list: false },
            { box: { title: 'Definition', lines: [
              `الفِعْلُ العِلاجِيُّ هو الذي يُفْعَلُ بِالجَوارِحِ، لا يُفْعَلُ بِالقَلْبِ أو العَقْلِ`,
            ] } },
            { html: `A <bdi>فعل علاجي</bdi> is one carried out with the limbs — cutting, breaking, opening — not with the heart or the mind.`, list: false },
            { table: { headers: ['الحالة (Case)', 'أمثلة (Examples)'], rows: [
              ['لِمُطاوَعَةِ الثُلاثِيّ — كثيرًا — as the مطاوع of the ثلاثي, common', 'قَطَعْتُهُ فانْقَطَعَ ، كَسَرْتُهُ فانْكَسَرَ ، فَتَحْتُهُ فانْفَتَحَ'],
              ['ولِمُطاوَعَةِ غَيْرِهِ — قَلِيلًا — as the مطاوع of something else, rare', 'أَطْلَقْتُهُ فانْطَلَقَ ، عَدَّلْتُهُ (بالتضعيف) فانْعَدَلَ'],
            ] } },
            { box: { title: 'Careful', lines: [
              `ولِكَوْنِهِ مُخْتَصًّا بِالعِلاجِيَّاتِ، لا يُقالُ: عَلَّمْتُهُ فانْعَلَمَ، ولا فَهَّمْتُهُ فانْفَهَمَ`,
            ] } },
            { html: `Because انفعل is confined to physical, limb-done actions, no انفعل form exists for teaching or making-understand: <bdi>عَلَّمْتُهُ فانْعَلَمَ</bdi> and <bdi>فَهَّمْتُهُ فانْفَهَمَ</bdi> are simply not said, since neither is done with the limbs.`, list: false },
          ],
          clarification: `Two restrictions fall out of the one meaning, and it is worth seeing that they are not separate rules. المطاوعة is the acceptance of another's effect — so the subject of انفعل is by definition the thing acted upon, and a verb whose subject is being acted upon cannot itself take an object. That is why انفعل is لازم without exception. The second restriction is about which verbs can be "accepted" in a physical sense at all: breaking, cutting and opening are done to a thing with the limbs, and the thing visibly undergoes them. Teaching and making-understand are not, which is why <bdi>عَلَّمْتُهُ فانْعَلَمَ</bdi> and <bdi>فَهَّمْتُهُ فانْفَهَمَ</bdi> are simply not said.`,
          exercise: {
            prompt: `Why is عَلَّمْتُهُ فانْعَلَمَ not said?`,
            kind: 'mcq',
            options: ['انفعل is confined to متعدٍّ verbs', 'عَلَّمَ has no مطاوع at all', 'The two verbs are from different أبواب', 'انفعل is confined to الأفعال العلاجية, done with the limbs rather than the mind'],
            correct: 3,
          },
        },
        {
          heading: 'افتعل: الاتخاذ والاجتهاد والتشارك',
          lines: [
            { box: { title: 'Rule', lines: [
              `اشْتَهَرَ في سِتَّةِ مَعانٍ`,
            ] } },
            { html: `افْتَعَلَ is well known in six meanings. The first three:`, list: false },
            { table: { headers: ['المعنى (Meaning)', 'البيان (Explanation)', 'أمثلة (Examples)'], rows: [
              ['الاتِّخاذ — adopting, taking for oneself', '—', 'اخْتَتَمَ زَيدٌ، واخْتَدَمَ — he took for himself a ring (خاتَم) and a servant (خادِم)'],
              ['الاجْتِهادُ والطَّلَب — effort and seeking', 'التَكَلُّفُ في الفِعْلِ والاجْتِهادُ فيه — exerting effort in the action, striving at it', 'اكْتَسَبَ، واكْتَتَبَ — he strove and sought الكَسْب (earning) and الكِتابة (writing); it carries more effort than كَسَبَ and كَتَبَ (likewise سَمِعَ and اسْتَمَعَ)'],
              ['التَّشارُك (أي المُفاعَلَة) — mutual action, i.e. المفاعلة', '—', 'اخْتَصَمَ زَيدٌ وعَمْرٌو — they disputed with each other'],
            ] } },
          ],
          exercise: {
            prompt: `What separates اكْتَسَبَ from كَسَبَ؟`,
            kind: 'mcq',
            options: ['اكتسب is intransitive', 'اكتسب is the مطاوع of كسب', 'اكتسب expresses التشارك', 'اكتسب carries greater effort — الاجتهاد والطلب in the act'],
            correct: 3,
          },
        },
        {
          heading: 'افتعل: الإظهار والمبالغة والمطاوعة',
          lines: [
            { table: { headers: ['المعنى (Meaning)', 'أمثلة (Examples)'], rows: [
              ['الإظْهار (إظْهارُ الفِعْلِ) — displaying the action', 'اعْتَذَرَ واعْتَظَمَ — he displayed an excuse, displayed greatness'],
              ['المُبالَغَةُ في مَعْنَى الفِعْلِ — intensification in the verb’s meaning', 'اقْتَدَرَ وارْتَدَّ — he intensified in قُدْرَة (ability) and رِدَّة (apostasy); likewise اشْتَدَّ vs. شَدَّ, and اقْتَرَأَ vs. قَرَأَ; ﴿اقْتَرَبَ لِلناسِ حِسابُهُم﴾ — mankind’s reckoning has drawn near for them — and ﴿اقْتَرَبَتِ الساعَةُ﴾ — the Hour has drawn near — intensifying قَرُبَ (to be near)'],
              ['مُطاوَعَةُ الثُلاثِيّ — كثيرًا — as the مطاوع of the ثلاثي, common', 'عَدَلْتُهُ فاعْتَدَلَ ، جَمَعْتُهُ فاجْتَمَعَ'],
            ] } },
            { html: `The مطاوعة listed above is of the bare ثلاثي, but افتعل's مطاوعة reaches further than that.`, list: false },
            { box: { title: 'Careful', lines: [
              `ورُبَّما أَتَى مُطاوِعًا لِلْمُضَعَّفِ (أي فَعَّلَ) ومَهْمُوزِ الثُلاثِيّ (أي أَفْعَلَ)`,
              `وقد يَجِيءُ بِمَعْنَى أَصْلِهِ لِعَدَمِ وُرُودِهِ`,
            ] } },
            { html: `افتعل sometimes serves as the مطاوع of فَعَّلَ or أَفْعَلَ instead: <bdi>قَرَّبْتُهُ</bdi> ("I brought it near") <bdi>فاقْتَرَبَ</bdi> ("so it drew near"); <bdi>بَعَّدْتُهُ</bdi> ("I pushed it away") <bdi>فابْتَعَدَ</bdi> ("so it moved away"); <bdi>أَنْصَفْتُهُ</bdi> ("I gave him justice") <bdi>فانْتَصَفَ</bdi> ("so he received his due"). And, as with the patterns before it, it sometimes stands in for an أصل that was never attested: <bdi>ارْتَجَلَ الخُطْبَةَ</bdi> ("he improvised the speech"), <bdi>اشْتَمَلَ الثَوْبَ</bdi> ("he wrapped himself in the garment"), <bdi>افْتَقَرَ</bdi> ("he became poor"), <bdi>اسْتَلَمَ الحَجَرَ</bdi> ("he touched the [Black] Stone"), <bdi>انْتَهَى</bdi> ("he came to an end").`, list: false },
          ],
          exercise: {
            prompt: `Which meaning of افتعل does ﴿اقْتَرَبَ لِلناسِ حِسابُهُم﴾ display?`,
            kind: 'mcq',
            options: ['التشارك', 'المبالغة في معنى الفعل — beyond قَرُبَ', 'المطاوعة', 'الاتخاذ'],
            correct: 1,
          },
        },
        {
          heading: 'افعلَّ',
          lines: [
            { html: `The last of the three patterns in this lesson is the narrowest of all.`, list: false },
            { box: { title: 'Rule', lines: [
              `يَأْتِي غالِبًا لِمَعْنًى واحِدٍ: وهو قُوَّةُ اللَوْنِ أو العَيْبِ، ولا يكونُ إلَّا لازِمًا`,
            ] } },
            { box: { title: 'Example', lines: [
              `كاحْمَرَّ وابْيَضَّ واعْوَرَّ واعْمَشَّ: قَوِيَتْ حُمْرَتُهُ وبَياضُهُ وعَوَرُهُ وعَمَشُهُ`,
            ] } },
            { html: `افْعَلَّ generally carries one meaning only: the intensification of a colour or a physical defect, and it is always intransitive. <bdi>احْمَرَّ</bdi> ("he reddened"), <bdi>ابْيَضَّ</bdi> ("he whitened"), <bdi>اعْوَرَّ</bdi> ("he became one-eyed") and <bdi>اعْمَشَّ</bdi> ("his eyes became bleary") all describe that quality growing stronger in the subject.`, list: false },
            { html: `Set beside the earlier note that <bdi>افْعَالَّ</bdi> (<bdi>احْمارَّ</bdi>) is stronger still, the ladder runs <bdi>حَمِرَ</bdi> ← <bdi>احْمَرَّ</bdi> ← <bdi>احْمارَّ</bdi> — "he was red" → "he reddened" → "he turned deep red" — each step intensifying the colour further.`, list: false },
          ],
          exercise: {
            prompt: `افعلَّ is said to be confined to one meaning. Which?`,
            kind: 'mcq',
            options: ['الاتخاذ', 'الطلب', 'قوة اللون أو العيب', 'المطاوعة'],
            correct: 2,
          },
        },
      ],
      quiz: [
        {
          q: 'How many meanings does انفعل carry?',
          options: ['ستة', 'خمسة', 'واحد — المطاوعة', 'اثنان'],
          correct: 2,
        },
        {
          q: 'المطاوعة is defined as:',
          options: ['قبول تأثير الغير', 'تصيير الفاعل مفعولًا', 'طلب الفعل', 'وقوع الفعل بعضه في أثر بعض'],
          correct: 0,
        },
        {
          q: 'What is a فعل علاجي؟',
          options: ['Done with the heart', 'Something by which the occurrence of a thing is sought', 'Something with a letter added', 'Done with the limbs, not with the heart or mind'],
          correct: 3,
        },
        {
          q: 'In how many meanings is افتعل well known?',
          options: ['أربعة', 'ثمانية', 'ستة', 'خمسة'],
          correct: 2,
        },
        {
          q: 'اخْتَتَمَ زَيدٌ illustrates which meaning?',
          options: ['الاجتهاد والطلب', 'الإظهار', 'المطاوعة', 'الاتخاذ'],
          correct: 3,
        },
        {
          q: 'افعلَّ is described as:',
          options: ['لا يكون إلا مطاوعًا', 'لا يكون إلا لازمًا', 'لا يكون إلا متعديًا', 'يكون لازمًا ومتعديًا'],
          correct: 1,
        },
      ],
      bank: [
        {
          title: 'لزوم انفعل',
          kind: 'mcq',
          prompt: 'Why can انفعل never be transitive?',
          options: ['Because it is confined to الأفعال العلاجية', 'Its subject is by definition the thing acted upon, which leaves no room for an object', 'Its وزن has no room for a مفعول', 'Because it begins with a نون'],
          correct: 1,
        },
        {
          title: 'قطعته فانقطع',
          kind: 'mcq',
          prompt: 'قَطَعْتُهُ فانْقَطَعَ shows انفعل as the مطاوع of what?',
          options: ['أَفْعَلَ', 'اسْتَفْعَلَ', 'الثلاثي المجرد', 'فَعَّلَ'],
          correct: 2,
        },
        {
          title: 'أطلقته فانطلق',
          kind: 'mcq',
          prompt: 'أَطْلَقْتُهُ فانْطَلَقَ shows انفعل as the مطاوع of what, and how common is that?',
          options: ['Of أَفْعَلَ — and it is described as قليل', 'Of the ثلاثي — and it is كثير', 'Of اسْتَفْعَلَ — and it is كثير', 'Of تَفَاعَلَ — and it is قليل'],
          correct: 0,
        },
        {
          title: 'عدّلته فانعدل',
          kind: 'mcq',
          prompt: 'عَدَّلْتُهُ (بالتضعيف) فانْعَدَلَ shows انفعل as the مطاوع of which صيغة؟',
          options: ['فَعَّلَ', 'أَفْعَلَ', 'فَاعَلَ', 'الثلاثي المجرد'],
          correct: 0,
        },
        {
          title: 'المطاوعة والتعدية',
          kind: 'mcq',
          prompt: 'المطاوعة is called عكس التعدية. In what sense?',
          options: ['They are the same thing under two names', 'التعدية makes a subject into an object; المطاوعة has the subject accept another’s effect', 'المطاوعة adds an object where التعدية removes one', 'They apply to different tenses'],
          correct: 1,
        },
        {
          title: 'اختدم',
          kind: 'mcq',
          prompt: 'اخْتَدَمَ means:',
          options: ['took a servant', 'sought service', 'displayed service', 'accepted service'],
          correct: 0,
        },
        {
          title: 'سمع واستمع',
          kind: 'mcq',
          prompt: 'سَمِعَ and اسْتَمَعَ are set beside كَسَبَ and اكْتَسَبَ. What do the pairs share?',
          options: ['The longer form carries greater effort in the act', 'The longer form is intransitive', 'The longer form is the مطاوع', 'The longer form is شاذ'],
          correct: 0,
        },
        {
          title: 'اختصم زيد وعمرو',
          kind: 'mcq',
          prompt: 'اخْتَصَمَ زَيدٌ وعَمْرٌو illustrates which meaning of افتعل؟',
          options: ['الاتخاذ', 'الإظهار', 'المبالغة', 'التشارك — أي المفاعلة'],
          correct: 3,
        },
        {
          title: 'اعتذر واعتظم',
          kind: 'mcq',
          prompt: 'اعْتَذَرَ and اعْتَظَمَ are glossed أَظْهَرَ العُذْرَ والعَظَمَةَ. Which meaning is that?',
          options: ['الإظهار', 'الاتخاذ', 'المبالغة', 'المطاوعة'],
          correct: 0,
        },
        {
          title: 'اقتدر وارتدّ',
          kind: 'mcq',
          prompt: 'اقْتَدَرَ and ارْتَدَّ illustrate which meaning?',
          options: ['المطاوعة', 'المبالغة في معنى الفعل', 'الاتخاذ', 'التشارك'],
          correct: 1,
        },
        {
          title: 'اشتدّ وشدّ',
          kind: 'mcq',
          prompt: 'اشْتَدَّ beside شَدَّ, and اقْتَرَأَ beside قَرَأَ, show what?',
          options: ['That the bare form is unattested', 'That افتعل expresses الاتخاذ', 'That افتعل intensifies the meaning of the bare form', 'That افتعل is the مطاوع of the bare form'],
          correct: 2,
        },
        {
          title: 'جمعته فاجتمع',
          kind: 'mcq',
          prompt: 'عَدَلْتُهُ فاعْتَدَلَ and جَمَعْتُهُ فاجْتَمَعَ show افتعل as the مطاوع of what?',
          options: ['فَعَّلَ', 'أَفْعَلَ', 'فَاعَلَ', 'الثلاثي المجرد'],
          correct: 3,
        },
        {
          title: 'قرّبته فاقترب',
          kind: 'mcq',
          prompt: 'قَرَّبْتُهُ فاقْتَرَبَ and بَعَّدْتُهُ فابْتَعَدَ show افتعل as the مطاوع of which صيغة؟',
          options: ['انْفَعَلَ', 'تَفَاعَلَ', 'فَعَّلَ — المضعَّف', 'أَفْعَلَ'],
          correct: 2,
        },
        {
          title: 'أنصفته فانتصف',
          kind: 'mcq',
          prompt: 'أَنْصَفْتُهُ فانْتَصَفَ shows افتعل as the مطاوع of which صيغة؟',
          options: ['فَاعَلَ', 'الثلاثي المجرد', 'أَفْعَلَ', 'فَعَّلَ'],
          correct: 2,
        },
        {
          title: 'ارتجل واشتمل',
          kind: 'mcq',
          prompt: 'What do ارْتَجَلَ الخُطْبَةَ and اشْتَمَلَ الثَوْبَ show?',
          options: ['افتعل as مطاوع', 'افتعل expressing التشارك', 'افتعل expressing المبالغة', 'افتعل standing in for an أصل that is not in use'],
          correct: 3,
        },
        {
          title: 'افتقر واستلم',
          kind: 'mcq',
          prompt: 'افْتَقَرَ, اسْتَلَمَ الحَجَرَ and انْتَهَى are grouped with which case?',
          options: ['The مزيد coming without a مجرد in use', 'المطاوعة', 'الاتخاذ', 'الإظهار'],
          correct: 0,
        },
        {
          title: 'أمثلة افعلَّ',
          kind: 'mcq',
          prompt: 'Which set illustrates افعلَّ؟',
          options: ['اجْتَمَعَ، اشْتَقَّ', 'انْكَسَرَ، انْقَطَعَ', 'احْمَرَّ، ابْيَضَّ، اعْوَرَّ، اعْمَشَّ', 'احْمارَّ، اشْهابَّ'],
          correct: 2,
        },
        {
          title: 'سلم الشدة',
          kind: 'mcq',
          prompt: 'Ranking حَمِرَ, احْمَرَّ and احْمارَّ by intensity of colour, which is strongest?',
          options: ['They are equal', 'احْمارَّ', 'احْمَرَّ', 'حَمِرَ'],
          correct: 1,
        },
        {
          title: 'اعمشّ',
          kind: 'mcq',
          prompt: 'اعْمَشَّ means قَوِيَ عَمَشُهُ. Is that a colour or a defect?',
          options: ['A colour', 'Neither', 'Both', 'A عيب — a defect'],
          correct: 3,
        },
        {
          title: 'مقارنة الصيغ',
          kind: 'mcq',
          prompt: 'انفعل, افتعل and افعلَّ differ in how many meanings each carries. Which ranking is right?',
          options: ['All three carry one', 'All three carry six', 'افتعل six, انفعل one, افعلَّ one', 'انفعل six, افتعل one, افعلَّ one'],
          correct: 2,
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'تَفَعَّلَ وتَفَاعَلَ واسْتَفْعَلَ',
      subtitle: 'The Last Group — five meanings, four meanings, six meanings, and what the remaining patterns add',
      concepts: [
        {
          heading: 'تفعَّل: خمسة معان',
          lines: [
            { table: { headers: ['المعنى (Meaning)', 'البيان (Explanation)', 'أمثلة (Examples)'], rows: [
              ['مُطاوَعَةُ فَعَّلَ مُضَعَّفِ العَيْنِ — the مطاوع of doubled-عين فَعَّلَ', '—', 'نَبَّهْتُهُ فَتَنَبَّهَ ، كَسَّرْتُهُ فَتَكَسَّرَ ، عَلَّمْتُهُ فَتَعَلَّمَ ، أَدَّبْتُهُ فَتَأَدَّبَ'],
              ['الاتِّخاذ — adopting for oneself', '—', 'تَوَسَّدَ ثَوْبَهُ — اتَّخَذَهُ وِسادَةً ؛ تَبَنَّى الوَلَدَ — he took his garment as a pillow (وِسادَة); he adopted the child as a son'],
              ['التَكَلُّف — exerting effort, forcing oneself', 'الاجْتِهادُ في الفِعْلِ ومُعاناتُهُ — striving at the action and enduring its difficulty', 'تَصَبَّرَ وتَحَلَّمَ — he forced himself to be patient (صَبْر) and forbearing (حِلْم)'],
              ['التَجَنُّب — avoidance', 'أي تَجَنُّبُ الفِعْلِ — i.e. avoiding the action', 'تَحَرَّجَ وتَهَجَّدَ — he avoided الحَرَج (wrongdoing) and الهُجُود, i.e. sleep'],
              ['التَدْرِيج — gradualness', 'أي فِعْلُ الفِعْلِ مَرْحَلَةً بِمَرْحَلَةٍ — doing the action stage by stage', 'تَجَرَّعْتُ الماءَ وتَحَفَّظْتُ العِلْمَ — I drank the water gulp after gulp, and memorized the knowledge point after point'],
            ] } },
            { html: `التكلف is what stands behind a well-known ḥadīth.`, list: false },
            { box: { title: 'Core Text', lines: [
              `«إنَّما العِلْمُ بِالتَعَلُّمِ، وإنَّما الحِلْمُ بِالتَحَلُّمِ، وإنَّما الفِقْهُ بِالتَفَقُّهِ»`,
            ] } },
            { html: `"Knowledge comes only by learning it; forbearance only by forcing oneself to it; and understanding only by forcing oneself to it." Each of the three تفعَّل forms in that ḥadīth is التكلف, described as <bdi>الاجْتِهادُ فيه</bdi> — "striving for it": these qualities are acquired by effort, not automatically.`, list: false },
            { box: { title: 'Careful', lines: [
              `ورُبَّما أَغْنَتْ هذه الصِّيغَةُ عن الثُلاثِيِّ لِعَدَمِ وُرُودِهِ`,
            ] } },
            { html: `And here too the صيغة sometimes stands in for a bare ثلاثي that was never attested: <bdi>تَكَلَّمَ</bdi> ("he spoke") and <bdi>تَصَدَّى</bdi> ("he turned his attention to").`, list: false },
          ],
          exercise: {
            prompt: `تَحَرَّجَ and تَهَجَّدَ are glossed تَجَنَّبَ الحَرَجَ والهُجُودَ. Which meaning of تفعَّل is that?`,
            kind: 'mcq',
            options: ['التكلف', 'التدريج', 'الاتخاذ', 'التجنب — avoiding the act'],
            correct: 3,
          },
        },
        {
          heading: 'تفاعل: التشريك وما بعده',
          lines: [
            { box: { title: 'Rule', lines: [
              `اشْتَهَرَتْ في أَرْبَعَةِ مَعانٍ. أَوَّلُها: التَشْرِيكُ بَيْنَ اثْنَيْنِ فَأَكْثَرَ، كُلٌّ منهما فاعِلًا في اللَفْظِ، مَفْعُولًا في المَعْنَى`,
              `وذلك بِجَعْلِ طَرَفَيِ الفِعْلِ فاعِلَيْنِ في اللَفْظِ، بِجَعْلِ الأَوَّلِ فاعِلًا والآخَرِ مَعْطُوفًا عليه`,
            ] } },
            { html: `تَفَاعَلَ is well known in four meanings. The first is <bdi>التشريك</bdi>: the sentence puts both parties as فاعل in the wording — the first as فاعل proper, the second joined to it with a واو — while in meaning both are مفعول as well. <bdi>تَخَاصَمَ زَيدٌ وعَمْرٌو</bdi> — "Zayd and 'Amr disputed with each other."`, list: false },
            { html: `That is precisely what separates it from the pattern of the previous lesson.`, list: false },
            { box: { title: 'Careful', lines: [
              `بِخِلافِ (فَاعَلَ) المُتَقَدِّمِ`,
            ] } },
            { html: `In <bdi>خَاصَمَ زَيدٌ عَمْرًا</bdi> — "Zayd disputed with 'Amr" — one party is فاعل and the other مفعول به, even though, in meaning, both did the disputing. تَفَاعَلَ puts the wording back in step with the meaning, and that has a consequence for transitivity.`, list: false },
            { table: { title: 'أثر ذلك على التعدية (The Effect of That on Transitivity)', headers: ['فَاعَلَ', 'تَفَاعَلَ'], rows: [
              ['جَاذَبَ زَيدٌ عَمْرًا ثَوْبًا — متعدٍّ لاثنين', 'تَجَاذَبَ زَيدٌ وعَمْرٌو ثَوْبًا — متعدٍّ لواحد'],
              ['خَاصَمَ زَيدٌ عَمْرًا — متعدٍّ لواحد', 'تَخَاصَمَ زَيدٌ وعَمْرٌو — لازم'],
            ] } },
          ],
          clarification: `The difference between فَاعَلَ and تَفَاعَلَ is one of grammatical packaging, not of meaning. In both, two parties genuinely act on each other — that much is the same. What changes is how the sentence presents them. فَاعَلَ puts one in the nominative and the other in the accusative, so the sentence looks one-sided even though the meaning is not. تَفَاعَلَ puts both in the nominative, joined by a واو, so the form matches the meaning. Because تَفَاعَلَ has absorbed one of the two parties into the subject, it always has one fewer object slot than the corresponding فَاعَلَ — which is exactly what the table records.`,
          exercise: {
            prompt: `خَاصَمَ زَيدٌ عَمْرًا is متعدٍّ لواحد. What is تَخَاصَمَ زَيدٌ وعَمْرٌو؟`,
            kind: 'mcq',
            options: ['متعدٍّ لاثنين', 'متعدٍّ لثلاثة', 'لازم — one object slot has been absorbed into the subject', 'متعدٍّ لواحد still'],
            correct: 2,
          },
        },
        {
          heading: 'تفاعل: بقية معانيه',
          lines: [
            { table: { headers: ['المعنى (Meaning)', 'أمثلة (Examples)'], rows: [
              ['التَظاهُرُ بِالفِعْلِ دُونَ حَقِيقَتِهِ — feigning the action without its reality', 'تَنَاوَمَ، تَغافَلَ، تَعامَى — he displayed sleep, heedlessness, or blindness, none of which was really true of him'],
              ['حُصُولُ الشَيْءِ تَدْرِيجِيًّا — a thing occurring gradually', 'تَزايَدَ النِيلُ، تَوارَدَتِ الإبِلُ — the increase happened gradually, bit by bit'],
              ['مُطاوَعَةُ (فَاعَلَ) — the مطاوع of فَاعَلَ', 'باعَدْتُهُ فَتَباعَدَ'],
            ] } },
            { html: `التظاهر is the point of a well-known line of poetry.`, list: false },
            { box: { title: 'Core Text', lines: [
              `لَيْسَ الغَبِيُّ بِسَيِّدٍ في قَوْمِهِ ... لَكِنَّ سَيِّدَ قَوْمِهِ المُتَغابِي`,
            ] } },
            { html: `"The truly foolish man is not the leader of his people — rather, the leader of his people is the one who feigns foolishness." <bdi>المُتَغابِي</bdi>, from تَفَاعَلَ, is exactly this meaning: displaying foolishness without actually being foolish.`, list: false },
          ],
          exercise: {
            prompt: `تَنَاوَمَ and تَغافَلَ describe someone who is not in fact asleep or heedless. Which meaning is that?`,
            kind: 'mcq',
            options: ['مطاوعة فَاعَلَ', 'التشريك', 'التظاهر بالفعل دون حقيقته', 'حصول الشيء تدريجيًّا'],
            correct: 2,
          },
        },
        {
          heading: 'استفعل: ستة معان',
          lines: [
            { table: { headers: ['المعنى (Meaning)', 'البيان (Explanation)', 'أمثلة (Examples)'], rows: [
              ['الطَّلَب — seeking, its most common meaning', 'حَقِيقَةً — literally', 'اسْتَغْفَرْتُ اللهَ — I sought His forgiveness'],
              ['', 'أو مَجازًا — or figuratively', 'اسْتَخْرَجْتُ الذَهَبَ من المَعْدِنِ — the effort of extracting it and striving to obtain it was called طَلَب, where a literal request is not possible'],
              ['الصَّيْرُورَة — becoming', 'تَحَوُّلُ شَيْءٍ من حالَةٍ إلى حالَةٍ — حَقِيقَةً — a thing’s transformation from one state to another, literally', 'اسْتَحْجَرَ الطِّينُ، اسْتَحْصَنَ المُهْرُ — the clay became stone; the colt became a stallion'],
              ['', 'أو مَجازًا — or figuratively', '«إنَّ البُغاثَ بِأَرْضِنا يَسْتَنْسِرُ» (the weak-flying bird becomes an eagle in our land) — i.e. becomes like an eagle in strength. البُغاث is a weak-flying bird.'],
              ['اعْتِقادُ صِفَةِ الشَيْءِ — believing a thing to have a certain quality', '—', 'اسْتَحْسَنْتُ كذا، واسْتَصْوَبْتُهُ — I believed it to be good, or correct'],
            ] } },
          ],
          exercise: {
            prompt: `اسْتَخْرَجْتُ الذَهَبَ من المَعْدِنِ is placed under الطلب. On what basis, given that no one is being asked for anything?`,
            kind: 'mcq',
            options: ['It is an error in classification', 'مجازًا — the effort of extraction is called a طلب where a literal request is impossible', 'حقيقةً — the mine is being asked', 'It is not الطلب but الصيرورة'],
            correct: 1,
          },
        },
        {
          heading: 'استفعل: بقية معانيه، وباقي الصيغ',
          lines: [
            { table: { headers: ['المعنى (Meaning)', 'أمثلة (Examples)'], rows: [
              ['اخْتِصارُ حِكايَةِ الشَيْءِ — abbreviating the telling of something', 'اسْتَرْجَعَ — said when someone says إنَّا لله وإنَّا إليه راجعون ("Truly we belong to Allah, and truly to Him we return")'],
              ['القُوَّة — intensity', 'اسْتُهْتِرَ، اسْتَكْبَرَ — his foolish talk, his arrogance, intensified'],
              ['المُصادَفَة — finding to be', 'اسْتَكْرَمْتُ زَيدًا أو اسْتَبْخَلْتُهُ — I found him to be generous, or miserly'],
            ] } },
            { box: { title: 'Careful', lines: [
              `ورُبَّما كان بِمَعْنَى (أَفْعَلَ)، ولِمُطاوَعَتِهِ`,
            ] } },
            { html: `استفعل sometimes carries أَفْعَلَ's meaning, as in <bdi>أَجابَ</bdi> and <bdi>اسْتَجابَ</bdi>, both meaning "to respond." Or it serves as أَفْعَلَ's مطاوع: <bdi>أَحْكَمْتُهُ</bdi> ("I made it firm") <bdi>فاسْتَحْكَمَ</bdi> ("so it became firm"); <bdi>أَقَمْتُهُ</bdi> ("I set it upright") <bdi>فاسْتَقامَ</bdi> ("so it stood upright").`, list: false },
            { html: `That accounts for every pattern discussed one by one. Three are left, and the source treats them together because they share one function.`, list: false },
            { box: { title: 'Rule', lines: [
              `ثُمَّ إنَّ باقِيَ الصِّيَغِ تَدُلُّ على قُوَّةِ المَعْنَى، زِيادَةً على أَصْلِهِ`,
            ] } },
            { html: `<bdi>افْعَوْعَلَ</bdi>, <bdi>افْعَوَّلَ</bdi> and <bdi>افْعَالَّ</bdi> each intensify the meaning of their أصل beyond what the bare form already carries — one shared function, so one shared ruling.`, list: false },
            { table: { title: 'قوة المعنى في باقي الصيغ (Intensified Meaning in the Remaining Patterns)', headers: ['الصيغة (Pattern)', 'المقارنة (Comparison)'], rows: [
              ['اعْشَوْشَبَ المَكانُ', 'its grass increased more than the bare عَشُبَ'],
              ['اخْشَوْشَنَ', 'the coarseness intensified more than the bare خَشُنَ'],
              ['احْمارَّ', 'the color intensified more than the bare حَمِرَ or the augmented احْمَرَّ'],
            ] } },
          ],
          exercise: {
            prompt: `Which three صيغ are meant by باقي الصيغ, and what do they have in common?`,
            kind: 'mcq',
            options: ['انْفَعَلَ، افْتَعَلَ، افْعَلَّ — each expresses المطاوعة', 'تَفَعَّلَ، تَفَاعَلَ، اسْتَفْعَلَ — each expresses الطلب', 'أَفْعَلَ، فَاعَلَ، فَعَّلَ — each expresses التعدية', 'افْعَوْعَلَ، افْعَوَّلَ، افْعَالَّ — each intensifies the meaning beyond its أصل'],
            correct: 3,
          },
        },
      ],
      quiz: [
        {
          q: 'In how many meanings does تفعَّل occur?',
          options: ['ثمانية', 'خمسة', 'أربعة', 'ستة'],
          correct: 1,
        },
        {
          q: 'تَوَسَّدَ ثَوْبَهُ illustrates which meaning of تفعَّل؟',
          options: ['التجنب', 'الاتخاذ', 'التكلف', 'التدريج'],
          correct: 1,
        },
        {
          q: 'In how many meanings is تفاعل well known?',
          options: ['خمسة', 'ستة', 'ثلاثة', 'أربعة'],
          correct: 3,
        },
        {
          q: 'In تَخَاصَمَ زَيدٌ وعَمْرٌو, what is the grammatical status of the two parties?',
          options: ['Neither is expressed', 'Both are فاعل in the wording, مفعول in the meaning', 'One is فاعل, the other مفعول به', 'Both are مفعول به'],
          correct: 1,
        },
        {
          q: 'Which meaning is described as أغلب معاني استفعل؟',
          options: ['القوة', 'المصادفة', 'الطلب', 'الصيرورة'],
          correct: 2,
        },
        {
          q: 'باقي الصيغ — افْعَوْعَلَ, افْعَوَّلَ and افْعَالَّ — are said to indicate:',
          options: ['المطاوعة', 'الطلب', 'التشارك', 'قوة المعنى، زيادة على أصله'],
          correct: 3,
        },
      ],
      bank: [
        {
          title: 'نبّهته فتنبّه',
          kind: 'mcq',
          prompt: 'نَبَّهْتُهُ فَتَنَبَّهَ shows تفعَّل as the مطاوع of which صيغة؟',
          options: ['فَعَّلَ مضعَّف العين', 'أَفْعَلَ', 'فَاعَلَ', 'الثلاثي المجرد'],
          correct: 0,
        },
        {
          title: 'تبنّى الولد',
          kind: 'mcq',
          prompt: 'تَبَنَّى الوَلَدَ means:',
          options: ['became a son to him', 'took him as a son', 'avoided him', 'took upon himself the burden of raising him'],
          correct: 1,
        },
        {
          title: 'تصبّر وتحلّم',
          kind: 'mcq',
          prompt: 'تَصَبَّرَ and تَحَلَّمَ illustrate which meaning?',
          options: ['التدريج', 'التكلف — الاجتهاد في الفعل ومعاناته', 'التجنب', 'الاتخاذ'],
          correct: 1,
        },
        {
          title: 'حديث التعلّم',
          kind: 'mcq',
          prompt: 'The ḥadīth إنَّما العِلْمُ بِالتَعَلُّمِ turns on which meaning of تفعَّل؟',
          options: ['المطاوعة', 'الاتخاذ', 'التكلف', 'التدريج'],
          correct: 2,
        },
        {
          title: 'تجرّعت الماء',
          kind: 'mcq',
          prompt: 'تَجَرَّعْتُ الماءَ and تَحَفَّظْتُ العِلْمَ illustrate which meaning?',
          options: ['الاتخاذ', 'التدريج — stage by stage', 'التكلف', 'التجنب'],
          correct: 1,
        },
        {
          title: 'تكلّم وتصدّى',
          kind: 'mcq',
          prompt: 'What do تَكَلَّمَ and تَصَدَّى show?',
          options: ['تفعَّل standing in for a ثلاثي that is not in use', 'تفعَّل as مطاوع', 'تفعَّل expressing التدريج', 'تفعَّل expressing التجنب'],
          correct: 0,
        },
        {
          title: 'خاصم وتخاصم',
          kind: 'mcq',
          prompt: 'What is the difference between خَاصَمَ زَيدٌ عَمْرًا and تَخَاصَمَ زَيدٌ وعَمْرٌو؟',
          options: ['فَاعَلَ makes both فاعل; تَفَاعَلَ makes one مفعول', 'They differ only in tense', 'They differ only in intensity', 'فَاعَلَ makes one party مفعول به; تَفَاعَلَ makes both فاعل in the wording'],
          correct: 3,
        },
        {
          title: 'جاذب وتجاذب',
          kind: 'mcq',
          prompt: 'جَاذَبَ زَيدٌ عَمْرًا ثَوْبًا is متعدٍّ لاثنين. What is تَجَاذَبَ زَيدٌ وعَمْرٌو ثَوْبًا؟',
          options: ['لازم', 'متعدٍّ لثلاثة', 'متعدٍّ لواحد', 'متعدٍّ لاثنين still'],
          correct: 2,
        },
        {
          title: 'أثر التشريك',
          kind: 'mcq',
          prompt: 'Why does تَفَاعَلَ always take one fewer object than the corresponding فَاعَلَ؟',
          options: ['Because the تاء blocks an object', 'Because تَفَاعَلَ is always لازم', 'Because فَاعَلَ takes two objects by default', 'One of the two parties has been absorbed into the subject'],
          correct: 3,
        },
        {
          title: 'تعامى',
          kind: 'mcq',
          prompt: 'تَعامَى describes a person who:',
          options: ['Feigns blindness while not being blind', 'Gradually loses his sight', 'Is made blind by another', 'Seeks a cure for blindness'],
          correct: 0,
        },
        {
          title: 'بيت المتغابي',
          kind: 'mcq',
          prompt: 'ليس الغَبِيُّ بسيِّدٍ في قومِهِ لكنَّ سيِّدَ قومِهِ المُتَغابِي. What is the contrast?',
          options: ['Between wisdom and ignorance', 'Between speaking and silence', 'Between the man who is genuinely foolish and the one who feigns it', 'Between the leader and the follower'],
          correct: 2,
        },
        {
          title: 'تزايد النيل',
          kind: 'mcq',
          prompt: 'تَزايَدَ النِيلُ and تَوارَدَتِ الإبِلُ illustrate which meaning?',
          options: ['التظاهر بالفعل', 'مطاوعة فَاعَلَ', 'التشريك', 'حصول الشيء تدريجيًّا'],
          correct: 3,
        },
        {
          title: 'باعدته فتباعد',
          kind: 'mcq',
          prompt: 'باعَدْتُهُ فَتَباعَدَ shows تفاعل as the مطاوع of which صيغة؟',
          options: ['أَفْعَلَ', 'اسْتَفْعَلَ', 'فَاعَلَ', 'فَعَّلَ'],
          correct: 2,
        },
        {
          title: 'استحجر الطين',
          kind: 'mcq',
          prompt: 'اسْتَحْجَرَ الطِّينُ and اسْتَحْصَنَ المُهْرُ illustrate which meaning?',
          options: ['الطلب', 'القوة', 'المصادفة', 'الصيرورة'],
          correct: 3,
        },
        {
          title: 'البغاث يستنسر',
          kind: 'mcq',
          prompt: 'إنَّ البُغاثَ بِأَرْضِنا يَسْتَنْسِرُ is a مجازي case of which meaning?',
          options: ['الاعتقاد', 'الصيرورة — becoming like an eagle in strength', 'الطلب', 'المصادفة'],
          correct: 1,
        },
        {
          title: 'استحسنت واستصوبت',
          kind: 'mcq',
          prompt: 'اسْتَحْسَنْتُ and اسْتَصْوَبْتُ illustrate which meaning?',
          options: ['القوة', 'اعتقاد صفة الشيء', 'الصيرورة', 'الطلب'],
          correct: 1,
        },
        {
          title: 'استرجع',
          kind: 'mcq',
          prompt: 'اسْتَرْجَعَ means he said:',
          options: ['الحمد لله', 'لا إله إلا الله', 'إنَّا للهِ وإنَّا إليه راجعون', 'سبحان الله'],
          correct: 2,
        },
        {
          title: 'استكرمت زيدًا',
          kind: 'mcq',
          prompt: 'اسْتَكْرَمْتُ زَيدًا, under المصادفة, means:',
          options: ['made him كريم', 'found him to be كريم', 'sought كرم from him', 'believed him to be كريم'],
          correct: 1,
        },
        {
          title: 'أحكمته فاستحكم',
          kind: 'mcq',
          prompt: 'أَحْكَمْتُهُ فاسْتَحْكَمَ and أَقَمْتُهُ فاسْتَقامَ show استفعل as the مطاوع of which صيغة؟',
          options: ['فَاعَلَ', 'انْفَعَلَ', 'أَفْعَلَ', 'فَعَّلَ'],
          correct: 2,
        },
        {
          title: 'اخشوشن',
          kind: 'mcq',
          prompt: 'اخْشَوْشَنَ is set against خَشُنَ to show what?',
          options: ['That the two are identical in meaning', 'That اخشوشن is the مطاوع of خشن', 'Greater intensity of roughness in the longer form', 'That خَشُنَ is not in use'],
          correct: 2,
        },
      ],
    },
  ],
};

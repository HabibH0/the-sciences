// Module 07 — المعلوم والمجهول (The Active Verb and the Passive)
//
// Covers Week 15 of the Advanced Sarf course: التقسيم السادس للفعل من حيث
// بناؤه للفاعل أو المفعول, from شذا العرف في فن الصرف by أحمد الحملاوي.
// Definitions, rules, شواهد and examples are kept faithful to the source.
// Concept bodies are short by design; quiz/bank question text is English with
// Arabic morphological terms left in Arabic.
//
// Scope: the two definitions; why the فاعل is dropped; the dispute between
// سيبويه and the Kūfans over what may stand in for it; the rules for building
// the ماضي للمجهول in all five cases including the أجوف and the مضعَّف with
// its readings; the rules for the مضارع; and the conditions under which a
// لازم verb may be built للمجهول at all.
// التقسيم السابع (التوكيد) follows in Module 08.

export default {
  id: 'as-07',
  title: 'المعلوم والمجهول',
  heading: 'الفعل',
  blurb: 'الفعل divided by whether its doer is named: what makes a verb مجهول, and the changes it must undergo.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'المعلوم والمجهول ونائب الفاعل',
      subtitle: 'The Two Kinds — the definitions, the reasons the doer is dropped, and the dispute over what stands in for it',
      concepts: [
        {
          heading: 'التعريفان',
          lines: [
            { table: { title: 'قسما الفعل (The Two Divisions of الفعل)', headers: ['القسم (Division)', 'ويُسَمَّى (Also Called)', 'التعريف (Definition)'], rows: [
              ['مَبْنِيٌّ لِلْفاعِل', 'مَعْلُومًا', 'that with which its فاعل is mentioned'],
              ['مَبْنِيٌّ لِلْمَفْعُول', 'مَجْهُولًا', 'that whose فاعل has been dropped — i.e. not mentioned — and something else put in its place, e.g. حُفِظَ الدَّرْسُ'],
            ] } },
            { html: `<bdi>نحو: حَفِظَ مُحَمَّدٌ الدَّرْسَ</bdi> for the first.`, list: false },
            { html: `Note the precision of <bdi>غَيْرُ مَذْكُورٍ</bdi>: the doer is not absent from the event, only from the sentence. Something did the deed; the speaker has simply chosen not to name it.`, list: false },
          ],
          exercise: {
            prompt: `A verb is called مجهول. What exactly is unknown or absent?`,
            kind: 'mcq',
            options: ['The tense of the verb is unknown', 'The فاعل is not mentioned in the sentence, though the deed still had a doer', 'The verb has no doer at all', 'The meaning of the verb is unknown'],
            correct: 1,
          },
        },
        {
          heading: 'أغراض حذف الفاعل',
          lines: [
            { html: `<bdi>قد يُحْذَفُ الفاعِلُ لِغَرَضٍ لَفْظِيٍّ أو مَعْنَوِيٍّ، ومنها</bdi>: the فاعل may be dropped for a stylistic or semantic purpose, among them:`, list: false },
            { table: { headers: ['الغرض (Purpose)', 'المثال (Example)'], rows: [
              ['الجَهْلُ بِهِ — not knowing who it is', 'سُرِقَ المَتاعُ'],
              ['العِلْمُ بِهِ — it being already known', 'أُنْزِلَ المَطَرُ'],
            ] } },
            { html: `The first two are opposites and both work: you drop the doer because you do not know who it was, or because everyone already knows who it was and naming him would be redundant.`, list: false },
          ],
          clarification: `That the two opposite reasons both produce the same construction is not a paradox. In سُرِقَ المَتاعُ the thief is unidentified, so there is no name to supply; in أُنْزِلَ المَطَرُ the sender of rain is known to every listener, so supplying the name adds nothing and may distract from the point being made about the rain. What the passive does in both cases is shift attention onto the thing affected — the goods, the rain — and it does that whether the doer is unknown or too well known to need saying. The construction is about focus, not about ignorance.`,
          exercise: {
            prompt: `أُنْزِلَ المَطَرُ drops the doer. On which ground?`,
            kind: 'mcq',
            options: ['العلم به — the doer is already known to everyone', 'الجهل به — the doer is unknown', 'To avoid an ugly word', 'Because the verb is لازم'],
            correct: 0,
          },
        },
        {
          heading: 'الأصل في النيابة والخلاف فيه',
          lines: [
            { html: `<bdi>الأَصْلُ في بابِ النِّيابَةِ المَفْعُولُ بِهِ</bdi> — the default in باب النيابة (standing-in) is the مفعول به.`, list: false },
            { html: `<bdi>ولا تَصِحُّ نِيابَةُ غَيْرِهِ، وهذا مَذْهَبُ سِيبَوَيْهِ، ومَنْ وافَقَهُ</bdi> — and nothing else may validly stand in; this is the position of سيبويه, and those who agree with him.`, list: false },
            { html: `<bdi>وذَهَبَ الكُوفِيُّونَ إلى جَوازِ نِيابَةِ غَيْرِ المَفْعُولِ بِهِ مُطْلَقًا</bdi> — while الكوفيّون (the Kufans) held that something other than the مفعول به may stand in, unconditionally.`, list: false },
            { html: `So the question is not whether a مفعول به may stand in for the dropped فاعل — everyone allows that — but whether anything else may.`, list: false },
          ],
          exercise: {
            prompt: `What is the point at issue between سيبويه and the Kūfans here?`,
            kind: 'mcq',
            options: ['Whether anything other than the مفعول به may stand in for the dropped فاعل', 'Whether the فاعل may be dropped at all', 'Whether the verb changes form', 'Whether the مفعول به becomes مرفوعًا'],
            correct: 0,
          },
        },
        {
          heading: 'ما ينوب عن الفاعل',
          lines: [
            { html: `<bdi>ويَنُوبُ عن الفاعِلِ</bdi>: and standing in for the فاعل:`, list: false },
            { table: { headers: ['النائب (The Stand-in)', 'الشاهد أو المثال (Evidence or Example)'], rows: [
              ['الجارُّ والمَجْرُور', '﴿لَمَّا سُقِطَ في أَيْدِيهِمْ﴾'],
              ['المَصْدَر', '﴿فإذا نُفِخَ في الصُّورِ نَفْخَةٌ واحِدَةٌ﴾'],
              ['الظَّرْف', 'صِيمَ رَمَضانُ ، جُلِسَ أمامُ الأميرِ'],
            ] } },
            { html: `<bdi>وفي هذه الحالَةِ يَجِبُ أن تُغَيَّرَ صُورَةُ الفِعْلِ عن أَصْلِها</bdi> — and in this case, the verb’s form must be changed from its original — whichever of these — or the مفعول به — stands in, the verb itself must change shape. That change is the subject of the next two lessons.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿فإذا نُفِخَ في الصُّورِ نَفْخَةٌ واحِدَةٌ﴾, what stands in for the dropped فاعل؟`,
            kind: 'mcq',
            options: ['الجار والمجرور — في الصُّورِ', 'الظرف', 'Nothing — the verb has no نائب فاعل', 'المصدر — نَفْخَةٌ واحِدَةٌ'],
            correct: 3,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the other name for المبني للفاعل؟',
          options: ['المعلوم', 'المجهول', 'المتصرف', 'المتعدي'],
          correct: 0,
        },
        {
          q: 'What is the definition of المبني للمفعول؟',
          options: ['That its فاعل is named along with it', 'That it does not pass from the فاعل to the مفعول', 'That it keeps one fixed form', 'That its فاعل has been dropped'],
          correct: 3,
        },
        {
          q: 'سُرِقَ المَتاعُ drops the doer on which ground?',
          options: ['لغرض لفظي محض', 'الضرورة', 'الجهل به', 'العلم به'],
          correct: 2,
        },
        {
          q: 'On سيبويه’s view, what alone may stand in for the dropped فاعل؟',
          options: ['الظرف', 'المفعول به', 'الجار والمجرور', 'المصدر'],
          correct: 1,
        },
        {
          q: '﴿لَمَّا سُقِطَ في أَيْدِيهِمْ﴾ is an example of which نائب؟',
          options: ['الجار والمجرور', 'المصدر', 'الظرف', 'المفعول به'],
          correct: 0,
        },
        {
          q: 'When something other than the مفعول به stands in, what must happen to the verb?',
          options: ['يصير لازمًا', 'يصير جامدًا', 'تُغيَّر صورته عن أصلها', 'يبقى على حاله'],
          correct: 2,
        },
      ],
      bank: [
        {
          title: 'حفظ محمد الدرس',
          kind: 'mcq',
          prompt: 'حَفِظَ مُحَمَّدٌ الدَّرْسَ is an example of:',
          options: ['اللازم', 'الجامد', 'المبني للفاعل', 'المبني للمفعول'],
          correct: 2,
        },
        {
          title: 'غير مذكور',
          kind: 'mcq',
          prompt: 'The definition of المجهول adds أي غير مذكور. What does that rule out?',
          options: ['That the deed had no doer at all', 'That the verb has a مفعول به', 'That the verb is متصرف', 'That the verb changes form'],
          correct: 0,
        },
        {
          title: 'غرض لفظي أو معنوي',
          kind: 'mcq',
          prompt: 'The reasons for dropping the فاعل fall into two sorts. Which?',
          options: ['قياسي or سماعي', 'واجب or جائز', 'صرفي or نحوي', 'لفظي or معنوي'],
          correct: 3,
        },
        {
          title: 'الجهل والعلم',
          kind: 'mcq',
          prompt: 'الجهل به and العلم به are opposite reasons yet both drop the فاعل. What do they have in common?',
          options: ['Both concern verbs that are لازم', 'Both require a مصدر to stand in', 'Both are لفظي reasons', 'In neither case does naming the doer add anything to what is being said'],
          correct: 3,
        },
        {
          title: 'أثر البناء للمجهول',
          kind: 'mcq',
          prompt: 'What does building a verb للمجهول do to the focus of the sentence?',
          options: ['It makes the verb لازم', 'It shifts attention onto the thing affected rather than the doer', 'It removes the object', 'It changes the tense'],
          correct: 1,
        },
        {
          title: 'حفظ الدرس',
          kind: 'mcq',
          prompt: 'حُفِظَ الدَّرْسُ is the example attached to which statement?',
          options: ['الجهل بالفاعل', 'العلم بالفاعل', 'The rule for building the مضارع للمجهول', 'The definition of المبني للمفعول — ما حُذِف فاعله وأُنيب عنه غيره'],
          correct: 3,
        },
        {
          title: 'مذهب سيبويه',
          kind: 'mcq',
          prompt: 'On سيبويه’s view, may a ظرف stand in for the dropped فاعل؟',
          options: ['Only in the ماضي', 'No — only the مفعول به may', 'Yes, without restriction', 'Yes, if it is مختص'],
          correct: 1,
        },
        {
          title: 'مذهب الكوفيين',
          kind: 'mcq',
          prompt: 'What is the Kūfan position?',
          options: ['The فاعل may never be dropped', 'The verb need not change form', 'نيابة غير المفعول به is permitted مطلقًا', 'Only the مفعول به may stand in'],
          correct: 2,
        },
        {
          title: 'محل الخلاف',
          kind: 'mcq',
          prompt: 'What is NOT in dispute between the two schools?',
          options: ['That the مفعول به may stand in for the dropped فاعل', 'That the ظرف may stand in', 'That the مصدر may stand in', 'That the جار والمجرور may stand in'],
          correct: 0,
        },
        {
          title: 'سُقط في أيديهم',
          kind: 'mcq',
          prompt: 'In ﴿لَمَّا سُقِطَ في أَيْدِيهِمْ﴾, what stands in for the فاعل؟',
          options: ['A hidden ضمير', 'A مصدر', 'A ظرف', 'في أَيْدِيهِمْ — a جار ومجرور'],
          correct: 3,
        },
        {
          title: 'نفخة واحدة',
          kind: 'mcq',
          prompt: 'In ﴿نُفِخَ في الصُّورِ نَفْخَةٌ واحِدَةٌ﴾, which word is the نائب فاعل؟',
          options: ['نَفْخَةٌ', 'الصُّورِ', 'واحِدَةٌ', 'A hidden ضمير'],
          correct: 0,
        },
        {
          title: 'صِيمَ رمضان',
          kind: 'mcq',
          prompt: 'صِيمَ رَمَضانُ has رمضان standing in for the فاعل. What kind of نائب is it?',
          options: ['ظرف زمان', 'ظرف مكان', 'مصدر', 'جار ومجرور'],
          correct: 0,
        },
        {
          title: 'جُلس أمام الأمير',
          kind: 'mcq',
          prompt: 'In جُلِسَ أمامُ الأميرِ, what kind of نائب is أمامُ؟',
          options: ['مفعول به', 'ظرف مكان', 'ظرف زمان', 'مصدر'],
          correct: 1,
        },
        {
          title: 'أربعة نوائب',
          kind: 'mcq',
          prompt: 'Counting the مفعول به, how many kinds of نائب فاعل are there in all?',
          options: ['خمسة', 'اثنان', 'أربعة', 'ثلاثة'],
          correct: 2,
        },
        {
          title: 'رفع النائب',
          kind: 'mcq',
          prompt: 'A ظرف standing in for the فاعل appears as أمامُ rather than أمامَ. What has changed?',
          options: ['Nothing has changed', 'It has taken the case of the فاعل it replaces', 'It has become a مصدر', 'It has become a مفعول به'],
          correct: 1,
        },
        {
          title: 'تغيير الصورة',
          kind: 'mcq',
          prompt: 'What is required of the verb itself when it is built للمجهول؟',
          options: ['Its form must be changed from what it was', 'It must take a حرف جر', 'It must become ثلاثيًّا', 'Nothing is required'],
          correct: 0,
        },
        {
          title: 'المعلوم والمجهول',
          kind: 'mcq',
          prompt: 'This division sorts verbs by what?',
          options: ['Whether the doer is named alongside the verb', 'Whether the verb takes an object', 'Whether the verb inflects through the tenses', 'Whether the verb is مجرد or مزيد'],
          correct: 0,
        },
        {
          title: 'أنزل المطر',
          kind: 'mcq',
          prompt: 'Who is the unnamed doer in أُنْزِلَ المَطَرُ؟',
          options: ['Someone unidentified', 'The rain itself', 'One so well known that naming him is unnecessary', 'No one — rain falls of itself'],
          correct: 2,
        },
        {
          title: 'تسميتان لكل',
          kind: 'mcq',
          prompt: 'Which pairing is correct?',
          options: ['معلوم = متعدٍّ; مجهول = لازم', 'معلوم = متصرف; مجهول = جامد', 'مبني للفاعل = معلوم; مبني للمفعول = مجهول', 'مبني للفاعل = مجهول; مبني للمفعول = معلوم'],
          correct: 2,
        },
        {
          title: 'شرط التغيير',
          kind: 'mcq',
          prompt: 'وفي هذه الحالة يجب أن تُغيَّر صورة الفعل عن أصلها. To which cases does هذه الحالة refer?',
          options: ['To a verb built للمجهول, whatever stands in for its فاعل', 'To the ماضي only', 'To the مضارع only', 'To the ظرف standing in only'],
          correct: 0,
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'بناء الماضي للمجهول',
      subtitle: 'Rebuilding the Past — the general rule and the four cases that depart from it',
      concepts: [
        {
          heading: 'القاعدة العامة',
          lines: [
            { html: `<bdi>فإن كان ماضِيًا غَيْرَ مَبْدُوءٍ بِهَمْزَةِ وَصْلٍ ولا تاءٍ زائِدَةٍ، ولَيْسَتْ عَيْنُهُ أَلِفًا، ضُمَّ أَوَّلُهُ وكُسِرَ ما قَبْلَ آخِرِهِ</bdi> — if it is a ماضي not beginning with a همزة وصل or an added تاء, and its عين is not an ألف, its first letter takes a ضمة and the letter before its last takes a كسرة.`, list: false },
            { html: `<bdi>نحو: ضُرِبَ عَلِيٌّ</bdi>`, list: false },
            { html: `<bdi>ولو تَقْدِيرًا</bdi> — even where the kasra is only understood: <bdi>رُدَّ المَبِيعُ</bdi>, whose أصل is <bdi>رُدِدَ</bdi>.`, list: false },
            { html: `<bdi>الأَصْلُ فيها مع فَكِّ الإدْغامِ: رُدِدَ ومُدِدَ وعُدِدَ</bdi> — undo the doubling and the kasra becomes visible.`, list: false },
          ],
          exercise: {
            prompt: `رُدَّ shows no kasra before its last letter. How does the rule still hold?`,
            kind: 'mcq',
            options: ['The rule does not apply to the مضعَّف', 'The kasra has been replaced by a ḍamma', 'The verb is not built للمجهول at all', 'The kasra is تقديرًا — undo the إدغام and رُدِدَ shows it'],
            correct: 3,
          },
        },
        {
          heading: 'المبدوء بتاء زائدة وبهمزة وصل',
          lines: [
            { table: { headers: ['الحالة (Case)', 'القاعدة (Rule)', 'أمثلة (Examples)'], rows: [
              ['مَبْدُوءًا بِتاءٍ زائِدَةٍ — beginning with an added تاء', 'ضُمَّ الثاني مع الأوَّلِ — the second letter takes a ضمة along with the first', 'تُعُلِّمَ الحِسابُ ، تُقُوتِلَ مع زَيْدٍ'],
              ['مَبْدُوءًا بِهَمْزَةِ وَصْلٍ — beginning with a همزة وصل', 'ضُمَّ الثالثُ مع الأوَّلِ — the third letter takes a ضمة along with the first', 'انْطُلِقَ بِزَيْدٍ ، اسْتُخْرِجَ المَعْدِنُ'],
            ] } },
            { html: `Both rules add a second ḍamma to the general one, and they differ only in which letter receives it — the second in one case, the third in the other. The general rule's kasra before the last letter still applies in both.`, list: false },
          ],
          clarification: `Take the two rules as they stand rather than looking for a deeper principle behind them: after a زائدة تاء the second letter takes the ḍamma, after a همزة وصل the third does, and that is the whole of it. It is tempting to try to derive the difference from how many letters sit at the front of each form, but the attempt fails — اسْتَخْرَجَ has three letters before its فاء and still takes its ḍamma on the third, exactly as انْطَلَقَ does with two. Note also that the ḍamma falls on those two positions only: in انْطُلِقَ and اسْتُخْرِجَ the letters in between stay sākin. What is constant across all three cases is the general rule's second half — a kasra on the letter before the last.`,
          exercise: {
            prompt: `اسْتَخْرَجَ becomes اسْتُخْرِجَ. Which letter has taken the second ḍamma?`,
            kind: 'mcq',
            options: ['The fourth — the خاء', 'None; only the first is ḍamma’d', 'The third — the تاء', 'The second — the سين'],
            correct: 2,
          },
        },
        {
          heading: 'ما عينه ألف',
          lines: [
            { html: `<bdi>وإن كانَتْ عَيْنُهُ أَلِفًا قُلِبَتْ ياءً، وكُسِرَ أَوَّلُهُ، بِإخْلاصِ الكَسْرِ، أو إشْمامِهِ الضَّمَّ</bdi> — if its عين is an ألف, it turns into a ياء, and its first letter takes a كسرة — either a pure كسرة, or one tinged with a hint of ضمة (إشمام).`, list: false },
            { html: `<bdi>كما في قالَ وباعَ واخْتارَ وانْقادَ، تَقُولُ: بِيعَ الثَّوْبُ، وقِيلَ القَوْلُ، واخْتِيرَ هذا، وانْقِيدَ لَهُ</bdi> — as in قَالَ, بَاعَ, اخْتَارَ, and انْقَادَ: you say بِيعَ الثَّوْبُ, قِيلَ القَوْلُ, اخْتِيرَ هذا, انْقِيدَ لَهُ.`, list: false },
            { html: `<bdi>إشْمامُهُ الضَّمَّ</bdi> means giving that kasra a hint of ḍamma — a single blended sound lying between the two.`, list: false },
            { html: `<bdi>وبَعْضُهُم يُبْقِي الضَّمَّ، ويَقْلِبُ الأَلِفَ واوًا</bdi> — and some keep the ضمة, and turn the ألف into a واو, as in the verse: <bdi>لَيْتَ وهل يَنْفَعُ شَيْئًا لَيْتُ ... لَيْتَ شَبابًا بُوعَ فاشْتَرَيْتُ</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `قالَ becomes قِيلَ. What has happened to the ألف؟`,
            kind: 'mcq',
            options: ['It has stayed as it was', 'It has turned into a ياء, and the first letter has taken a kasra', 'It has been dropped', 'It has turned into a واو'],
            correct: 1,
          },
        },
        {
          heading: 'الثلاثي المضعَّف',
          lines: [
            { html: `<bdi>وأَوْجَبَ الجُمْهُورُ ضَمَّ فاءِ الثُّلاثِيِّ المُضَعَّفِ</bdi> — the majority of scholars require a ضمة on the فاء of the doubled ثلاثي — <bdi>نحو: شُدَّ ومُدَّ</bdi>.`, list: false },
            { html: `<bdi>والكُوفِيُّونَ أَجازُوا الكَسْرَ، وهي لُغَةُ بَنِي ضَبَّةَ</bdi> — while الكوفيّون permitted a كسرة, this being the dialect of بَنِي ضَبَّة.`, list: false },
            { html: `<bdi>وقد قُرِئَ ﴿هَذِهِ بِضَاعَتُنَا رِدَّتْ إِلَيْنَا﴾، ﴿وَلَوْ رِدُّوا لَعَادُوا لِمَا نُهُوا عَنْهُ﴾ بالكَسْرِ فيهما</bdi>.`, list: false },
            { html: `<bdi>وذلك بِنَقْلِ حَرَكَةِ العَيْنِ إلى الفاءِ، بعد تَوَهُّمِ سَلْبِ حَرَكَتِها</bdi> — that is done by moving the عين's vowel onto the فاء, after treating its own vowel as though stripped away. <bdi>وجَوَّزَ ابنُ مالِكٍ الإشْمامَ في المُضَعَّفِ أيضًا حيثُ قال: «وَمَا لِبَاعَ قَدْ يُرَى لِنَحْوِ حَبّ»</bdi> — Ibn Mālik also permitted إشمام in the doubled verb, saying: «وَمَا لِبَاعَ قَدْ يُرَى لِنَحْوِ حَبّ» (what is seen for بَاعَ may also be seen for the like of حَبّ).`, list: false },
          ],
          exercise: {
            prompt: `The reading رِدَّتْ with a kasra is explained by نقل حركة العين إلى الفاء. What is the sequence?`,
            kind: 'mcq',
            options: ['The عين is dropped entirely', 'A ياء replaces the doubled letter', 'The عين’s vowel is treated as removed and then moved onto the فاء', 'The فاء’s vowel is moved onto the عين'],
            correct: 2,
          },
        },
      ],
      quiz: [
        {
          q: 'The general rule for the ماضي المجهول is:',
          options: ['فُتِح أوله وكُسِر ما قبل آخره', 'ضُمَّ أوله وكُسِر ما قبل آخره', 'ضُمَّ أوله وفُتِح ما قبل آخره', 'كُسِر أوله وضُمَّ ما قبل آخره'],
          correct: 1,
        },
        {
          q: 'A ماضٍ beginning with a زائدة تاء takes a second ḍamma on which letter?',
          options: ['الثاني', 'الثالث', 'الرابع', 'None'],
          correct: 0,
        },
        {
          q: 'A ماضٍ beginning with a همزة وصل takes a second ḍamma on which letter?',
          options: ['الثالث', 'الثاني', 'الرابع', 'None'],
          correct: 0,
        },
        {
          q: 'If the عين of the ماضي is an ألف, what happens to it?',
          options: ['بقيت على حالها', 'قُلِبت ياءً', 'قُلِبت واوًا', 'حُذِفت'],
          correct: 1,
        },
        {
          q: 'What did الجمهور require for the فاء of the ثلاثي المضعَّف؟',
          options: ['الضم', 'الكسر', 'الفتح', 'السكون'],
          correct: 0,
        },
        {
          q: 'The kasra on the مضعَّف is attributed to which dialect?',
          options: ['لغة بني ضبَّة', 'لغة طيِّئ', 'لغة قريش', 'لغة الحجاز'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'ثلاثة قيود',
          kind: 'mcq',
          prompt: 'The general rule is stated with three exclusions. Which set?',
          options: ['Not مجرد, not مزيد, and not ملحق', 'Not beginning with a همزة وصل, not with a زائدة تاء, and its عين not an ألف', 'Not ثلاثي, not رباعي, and not مضعَّف', 'Not لازم, not جامد, and not معتل'],
          correct: 1,
        },
        {
          title: 'ضُرب علي',
          kind: 'mcq',
          prompt: 'ضُرِبَ عَلِيٌّ. Which two changes has ضَرَبَ undergone?',
          options: ['A kasra on the first and a ḍamma before the last', 'A ḍamma on the first and a fatḥa before the last', 'Only a ḍamma on the first', 'A ḍamma on the first letter and a kasra before the last'],
          correct: 3,
        },
        {
          title: 'ولو تقديرًا',
          kind: 'mcq',
          prompt: 'The phrase ولو تقديرًا allows for what?',
          options: ['A verb that is not built للمجهول', 'A ḍamma on the second letter', 'A kasra that is understood rather than written, as in رُدَّ', 'A verb with no kasra at all'],
          correct: 2,
        },
        {
          title: 'فكّ الإدغام',
          kind: 'mcq',
          prompt: 'رُدِدَ، مُدِدَ، عُدِدَ show the إدغام undone. What do they demonstrate?',
          options: ['That the verbs are not مضعَّفة', 'That the ḍamma is optional', 'That the verbs are ثلاثية مجردة', 'That the kasra required by the rule really is there underneath'],
          correct: 3,
        },
        {
          title: 'تُعلِّم الحساب',
          kind: 'mcq',
          prompt: 'تَعَلَّمَ becomes تُعُلِّمَ. How many ḍammas are there at the front?',
          options: ['ثلاث', 'None', 'اثنتان — على الأول والثاني', 'واحدة'],
          correct: 2,
        },
        {
          title: 'تُقوتِل',
          kind: 'mcq',
          prompt: 'تُقُوتِلَ مع زَيْدٍ comes from which active form?',
          options: ['تَقاتَلَ', 'قاتَلَ', 'اقْتَتَلَ', 'قَتَّلَ'],
          correct: 0,
        },
        {
          title: 'انطُلق بزيد',
          kind: 'mcq',
          prompt: 'انْطُلِقَ بِزَيْدٍ. Which letters carry a ḍamma؟',
          options: ['The second and the third', 'The first and the third', 'The first and the second', 'The first only'],
          correct: 1,
        },
        {
          title: 'لماذا الثالث',
          kind: 'mcq',
          prompt: 'After a همزة وصل, which letter takes the second ḍamma؟',
          options: ['الثاني', 'الرابع', 'الخامس', 'الثالث'],
          correct: 3,
        },
        {
          title: 'بيع الثوب',
          kind: 'mcq',
          prompt: 'باعَ becomes بِيعَ. Which two changes have occurred?',
          options: ['Only the first letter has changed', 'The ألف has become a ياء, and the first letter has taken a kasra', 'The ألف has become a واو, and the first has taken a ḍamma', 'The ألف has been dropped'],
          correct: 1,
        },
        {
          title: 'اختير هذا',
          kind: 'mcq',
          prompt: 'اخْتارَ becomes اخْتِيرَ. Does the همزة وصل rule apply on top?',
          options: ['Yes — the second letter takes a ḍamma', 'Neither rule applies', 'The عين-ألف rule governs here, giving a kasra rather than the ḍammas', 'Yes — the third letter takes a ḍamma'],
          correct: 2,
        },
        {
          title: 'الإشمام',
          kind: 'mcq',
          prompt: 'What is الإشمام, as an alternative to a pure kasra?',
          options: ['Pronouncing the ḍamma with a hint of fatḥa', 'Dropping the vowel entirely', 'Lengthening the vowel', 'Pronouncing the kasra with a hint of ḍamma'],
          correct: 3,
        },
        {
          title: 'بُوع فاشتريت',
          kind: 'mcq',
          prompt: 'In لَيْتَ شَبابًا بُوعَ فاشْتَرَيْتُ, what has been done instead of the kasra?',
          options: ['The ألف has been dropped', 'The first letter has taken a fatḥa', 'The verb has been left in the active', 'The ḍamma has been kept and the ألف turned into a واو'],
          correct: 3,
        },
        {
          title: 'انقيد له',
          kind: 'mcq',
          prompt: 'انْقادَ becomes انْقِيدَ. What was its عين in the active?',
          options: ['A همزة', 'An ألف', 'A واو', 'A ياء'],
          correct: 1,
        },
        {
          title: 'شُدَّ ومُدَّ',
          kind: 'mcq',
          prompt: 'شُدَّ and مُدَّ show which position?',
          options: ['That of بني ضبَّة', 'That of ابن مالك', 'That of الجمهور, requiring a ḍamma on the فاء', 'That of the Kūfans, permitting a kasra'],
          correct: 2,
        },
        {
          title: 'قراءة رِدَّت',
          kind: 'mcq',
          prompt: '﴿هَذِهِ بِضَاعَتُنَا رِدَّتْ إِلَيْنَا﴾ has been read with a kasra. What does that reading support?',
          options: ['The إشمام', 'The turning of the ألف into a واو', 'The Kūfan permission of a kasra on the فاء of the مضعَّف', 'The requirement of a ḍamma'],
          correct: 2,
        },
        {
          title: 'رِدُّوا',
          kind: 'mcq',
          prompt: 'What do ﴿وَلَوْ رِدُّوا لَعَادُوا لِمَا نُهُوا عَنْهُ﴾ and رِدَّتْ share?',
          options: ['Both are read with a kasra on the فاء of a مضعَّف built للمجهول', 'Both are read with a ḍamma', 'Both show الإشمام', 'Both are active forms'],
          correct: 0,
        },
        {
          title: 'توهّم سلب الحركة',
          kind: 'mcq',
          prompt: 'The kasra reading is explained by a two-step process. What is the first step?',
          options: ['The فاء is doubled', 'The last letter is dropped', 'A ياء is inserted', 'The عين is treated as having had its vowel removed'],
          correct: 3,
        },
        {
          title: 'رأي ابن مالك',
          kind: 'mcq',
          prompt: 'What did ابن مالك permit for the مضعَّف؟',
          options: ['The dropping of the عين', 'The turning of the عين into a ياء', 'الإشمام', 'الفتح'],
          correct: 2,
        },
        {
          title: 'بيت ابن مالك',
          kind: 'mcq',
          prompt: 'وَمَا لِبَاعَ قَدْ يُرَى لِنَحْوِ حَبّ. What does the line assert?',
          options: ['That what applies to باعَ may also be seen in a مضعَّف like حَبّ', 'That حَبّ is treated like a ثلاثي مجرد', 'That باعَ takes a ḍamma', 'That حَبّ cannot be built للمجهول'],
          correct: 0,
        },
        {
          title: 'أربع حالات',
          kind: 'mcq',
          prompt: 'Beyond the general rule, how many special cases does the ماضي have?',
          options: ['ثلاث', 'خمس', 'اثنتان', 'أربع — التاء الزائدة، همزة الوصل، الألف في العين، والمضعَّف'],
          correct: 3,
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'بناء المضارع للمجهول واللازم',
      subtitle: 'The Present Passive, and When an Intransitive Verb May Be Built at All',
      concepts: [
        {
          heading: 'قاعدة المضارع',
          lines: [
            { html: `<bdi>وإن كان مُضارِعًا ضُمَّ أَوَّلُهُ، وفُتِحَ ما قَبْلَ آخِرِهِ ولو تَقْدِيرًا</bdi> — if it is a مضارع, its first letter takes a ضمة, and the letter before its last takes a فتحة, even if only تقديرًا (understood).`, list: false },
            { html: `<bdi>نحو: يُضْرَبُ عَلِيٌّ، ويُرَدُّ المَبِيعُ</bdi> — the أصل of the second being <bdi>يُرْدَدُ</bdi>.`, list: false },
            { html: `Set the two rules side by side and only the second half differs: the ماضي takes a kasra before its last letter, the مضارع a fatḥa. The ḍamma on the first letter is common to both.`, list: false },
          ],
          exercise: {
            prompt: `What is the one difference between the ماضي rule and the مضارع rule?`,
            kind: 'mcq',
            options: ['The ماضي takes no change before its last letter', 'A kasra before the last letter in the ماضي, a fatḥa in the مضارع', 'A ḍamma on the first in the ماضي, a kasra in the مضارع', 'The مضارع takes no change at its front'],
            correct: 1,
          },
        },
        {
          heading: 'ما قبل آخره مدّ',
          lines: [
            { html: `<bdi>فإن كان ما قَبْلَ آخِرِ المُضارِعِ مَدًّا، كيَقُولُ ويَبِيعُ، قُلِبَ أَلِفًا</bdi> — if the letter before the مضارع's last letter is a مَدّ, as in يَقُولُ and يَبِيعُ, it is turned into an ألف.`, list: false },
            { table: { headers: ['المعلوم', 'المجهول'], rows: [
              ['يَقُولُ', 'يُقالُ'],
              ['يَبِيعُ', 'يُباعُ'],
            ] } },
            { html: `Note the symmetry with the ماضي: there an ألف turned into a ياء; here a واو or a ياء turns into an ألف. In each case the weak letter is remade to match the vowel the rule has just imposed — a kasra pulling towards ياء, a fatḥa towards ألف.`, list: false },
          ],
          exercise: {
            prompt: `يَقُولُ becomes يُقالُ. Why does the واو become an ألف rather than staying?`,
            kind: 'mcq',
            options: ['The rule imposes a fatḥa before the last letter, and a weak letter after a fatḥa is remade as an ألف', 'The واو is dropped and an ألف inserted separately', 'Because the verb is أجوف', 'Because the first letter takes a ḍamma'],
            correct: 0,
          },
        },
        {
          heading: 'شرط بناء اللازم للمجهول',
          lines: [
            { html: `<bdi>ولا يُبْنَى الفِعْلُ اللازِمُ لِلْمَجْهُولِ إلَّا مع الظَّرْفِ أو المَصْدَرِ المُتَصَرِّفَيْنِ المُخْتَصَّيْنِ</bdi> — a لازم verb is not built للمجهول except together with a ظرف or مصدر that are مُتَصَرِّف (inflecting) and مُخْتَصّ (narrowed/specified).`, list: false },
            { table: { headers: ['النائب (The Stand-in)', 'أمثلة (Examples)'], rows: [
              ['الظَّرْف', 'سِيرَ يَوْمُ الجُمْعَةِ ، وُقِفَ أمامُ الأميرِ'],
              ['المَصْدَر', 'جُلِسَ جُلُوسٌ حَسَنٌ'],
            ] } },
            { html: `A لازم verb has no مفعول به to promote, so unless one of these two is available it cannot be built للمجهول at all.`, list: false },
          ],
          exercise: {
            prompt: `Why does a لازم verb need special conditions before it can be built للمجهول؟`,
            kind: 'mcq',
            options: ['It has no مصدر', 'It is always جامد', 'It has no مفعول به to take the dropped فاعل’s place', 'Its form cannot be changed'],
            correct: 2,
          },
        },
        {
          heading: 'التصرف والاختصاص، والمجرور',
          lines: [
            { html: `Two conditions qualify the ظرف and the مصدر.`, list: false },
            { table: { headers: ['الشرط (Condition)', 'معناه (Its Meaning)', 'أمثلة (Examples)'], rows: [
              ['المُتَصَرِّفَيْنِ', 'ما يَخْرُجُ عن النَّصْبِ على الظَّرْفِيَّةِ أو المَصْدَرِيَّةِ — what can leave the accusative of الظرفية or المصدرية', '—'],
              ['المُخْتَصَّيْنِ', 'ما خُصَّ بِإضافَةٍ ، أو بِوَصْفٍ ، أو دَلَّ على نَوْعٍ — what is narrowed by إضافة, by a وصف, or by naming a specific kind', 'صِيمَ يَوْمُ الجُمْعَةِ ، ضُرِبَ ضَرْبٌ شَدِيدٌ ، عُمِلَ عَمَلُ الصالِحِينَ'],
            ] } },
            { html: `<bdi>أو المَجْرُورُ الذي لم يَلْزَمِ الجارُّ لهُ طَرِيقَةً واحِدَةً</bdi> — or the مجرور whose حرف جر is not locked into a single fixed pattern — <bdi>نحو: وفُرِحَ بِقُدُومِ مُحَمَّدٍ</bdi>.`, list: false },
            { html: `<bdi>بِخِلافِ اللازِمِ حالَةً واحِدَةً، نحو: عِنْدَ، وإذا، وسُبْحانَ، ومَعاذَ</bdi> — unlike what is locked into a single state, such as عِنْدَ, إذا, سُبْحانَ, and مَعاذَ — words locked into a single construction, which therefore cannot stand in for a فاعل.`, list: false },
          ],
          clarification: `The two conditions are asking the same question from two sides: can this word behave like an ordinary noun? المتصرف tests whether it can ever leave the accusative — عِنْدَ and سُبْحانَ never can, so they are frozen and unavailable. المختص tests whether it names something definite enough to be the subject of a statement — a bare ظرف like "a time" is too vague to be what a sentence is about, so it must be narrowed, by إضافة (يومُ الجمعة), by a وصف (ضَرْبٌ شديدٌ), or by naming a kind (عملُ الصالحين). Only a word that passes both can carry the weight the فاعل has set down.`,
          exercise: {
            prompt: `عِنْدَ، إذا، سُبْحانَ and مَعاذَ are excluded from standing in for the فاعل. On what ground?`,
            kind: 'mcq',
            options: ['Each is a مصدر', 'Each is locked into a single construction and never leaves it', 'Each is a حرف rather than an اسم', 'Each is مختص but not متصرف’s opposite'],
            correct: 1,
          },
        },
      ],
      quiz: [
        {
          q: 'The rule for the مضارع المجهول is:',
          options: ['كُسِر أوله وفُتِح ما قبل آخره', 'فُتِح أوله وضُمَّ ما قبل آخره', 'ضُمَّ أوله وفُتِح ما قبل آخره', 'ضُمَّ أوله وكُسِر ما قبل آخره'],
          correct: 2,
        },
        {
          q: 'يَقُولُ becomes:',
          options: ['يُقِيلُ', 'يُقْوَلُ', 'يَقُولُ unchanged', 'يُقالُ'],
          correct: 3,
        },
        {
          q: 'A لازم verb may be built للمجهول only with:',
          options: ['التمييز', 'الظرف أو المصدر المتصرفين المختصين، أو المجرور', 'المفعول به', 'الحال'],
          correct: 1,
        },
        {
          q: 'What does المتصرف mean in this context?',
          options: ['Not being جامد', 'Leaving the accusative of ظرفية or مصدرية', 'Being specified by إضافة or a description', 'Inflecting into the مضارع'],
          correct: 1,
        },
        {
          q: 'ضُرِبَ ضَرْبٌ شَدِيدٌ illustrates اختصاص by which means?',
          options: ['بالدلالة على نوع', 'بالتصرف', 'بوصف', 'بإضافة'],
          correct: 2,
        },
        {
          q: 'Which of these cannot stand in for the فاعل؟',
          options: ['عَمَلُ الصالِحِينَ', 'سُبْحانَ', 'يَوْمُ الجُمْعَةِ', 'جُلُوسٌ حَسَنٌ'],
          correct: 1,
        },
      ],
      bank: [
        {
          title: 'يضرب علي',
          kind: 'mcq',
          prompt: 'يُضْرَبُ عَلِيٌّ. Which two changes has يَضْرِبُ undergone?',
          options: ['A kasra on the first and a fatḥa before the last', 'Only a fatḥa before the last', 'A ḍamma on the first letter and a fatḥa before the last', 'A ḍamma on the first and a kasra before the last'],
          correct: 2,
        },
        {
          title: 'يُردّ المبيع',
          kind: 'mcq',
          prompt: 'The أصل of يُرَدُّ المَبِيعُ is يُرْدَدُ. What does that show?',
          options: ['That the ḍamma is optional', 'That the verb is ثلاثي مجرد', 'That the fatḥa required by the rule is present underneath the إدغام', 'That the verb is not built للمجهول'],
          correct: 2,
        },
        {
          title: 'المشترك بين القاعدتين',
          kind: 'mcq',
          prompt: 'What do the ماضي and مضارع rules have in common?',
          options: ['Nothing', 'A ḍamma on the first letter', 'A kasra before the last letter', 'A fatḥa before the last letter'],
          correct: 1,
        },
        {
          title: 'يبيع',
          kind: 'mcq',
          prompt: 'يَبِيعُ becomes:',
          options: ['يُبِيعُ', 'يُبْيَعُ', 'يَبِيعُ unchanged', 'يُباعُ'],
          correct: 3,
        },
        {
          title: 'المدّ قبل الآخر',
          kind: 'mcq',
          prompt: 'The rule about a مدّ before the last letter applies when the verb is what?',
          options: ['مثال', 'مضعَّف', 'أجوف — its عين is a weak letter', 'ناقص'],
          correct: 2,
        },
        {
          title: 'تناظر القلبين',
          kind: 'mcq',
          prompt: 'In the ماضي an ألف becomes a ياء; in the مضارع a واو or ياء becomes an ألف. What explains both?',
          options: ['Weak letters always alternate', 'The ماضي and مضارع use different roots', 'The changes are unrelated', 'The weak letter is remade to match the vowel the rule has imposed before it'],
          correct: 3,
        },
        {
          title: 'لماذا يشترط للازم',
          kind: 'mcq',
          prompt: 'A متعدٍّ verb needs no special condition to be built للمجهول. Why?',
          options: ['Its مفعول به is available to take the dropped فاعل’s place', 'It is always متصرف', 'Its مصدر is always مختص', 'It has no ظرف'],
          correct: 0,
        },
        {
          title: 'سِير يوم الجمعة',
          kind: 'mcq',
          prompt: 'In سِيرَ يَوْمُ الجُمْعَةِ, what is standing in for the فاعل؟',
          options: ['A مصدر', 'A مفعول به', 'A جار ومجرور', 'A ظرف زمان, made مختص by إضافة'],
          correct: 3,
        },
        {
          title: 'وُقف أمام الأمير',
          kind: 'mcq',
          prompt: 'In وُقِفَ أمامُ الأميرِ, what is standing in for the فاعل؟',
          options: ['A مفعول به', 'A ظرف مكان, made مختص by إضافة', 'A مصدر', 'A جار ومجرور'],
          correct: 1,
        },
        {
          title: 'جُلس جلوس حسن',
          kind: 'mcq',
          prompt: 'In جُلِسَ جُلُوسٌ حَسَنٌ, what is standing in, and how is it made مختص؟',
          options: ['A ظرف, made مختص by إضافة', 'A جار ومجرور', 'A مفعول به', 'A مصدر, made مختص by a وصف'],
          correct: 3,
        },
        {
          title: 'ثلاث طرق للاختصاص',
          kind: 'mcq',
          prompt: 'By which three means may a ظرف or مصدر be made مختص؟',
          options: ['بأل، أو بالتنوين، أو بالنداء', 'بالتصرف، أو بالجر، أو بالنصب', 'بالإدغام، أو بالإعلال، أو بالحذف', 'بإضافة، أو بوصف، أو بالدلالة على نوع'],
          correct: 3,
        },
        {
          title: 'صِيم يوم الجمعة',
          kind: 'mcq',
          prompt: 'صِيمَ يَوْمُ الجُمْعَةِ shows اختصاص by which means?',
          options: ['بإضافة', 'بوصف', 'بالدلالة على نوع', 'بالتنوين'],
          correct: 0,
        },
        {
          title: 'عُمل عمل الصالحين',
          kind: 'mcq',
          prompt: 'عُمِلَ عَمَلُ الصالِحِينَ shows اختصاص by which means?',
          options: ['بأل', 'بالدلالة على نوع', 'بوصف', 'بالتنوين'],
          correct: 1,
        },
        {
          title: 'معنى التصرف هنا',
          kind: 'mcq',
          prompt: 'A word that never leaves the accusative of ظرفية fails which condition?',
          options: ['Neither', 'التصرف', 'الاختصاص', 'Both equally'],
          correct: 1,
        },
        {
          title: 'وظيفة الشرطين',
          kind: 'mcq',
          prompt: 'Taken together, what are the two conditions testing?',
          options: ['Whether the verb is متعدٍّ', 'Whether the word is definite', 'Whether the word is مبني', 'Whether the word can behave like an ordinary noun and be what a sentence is about'],
          correct: 3,
        },
        {
          title: 'فُرح بقدوم محمد',
          kind: 'mcq',
          prompt: 'In فُرِحَ بِقُدُومِ مُحَمَّدٍ, what is standing in for the فاعل؟',
          options: ['A مجرور whose جار is not locked to a single construction', 'A ظرف', 'A مصدر', 'A مفعول به'],
          correct: 0,
        },
        {
          title: 'شرط المجرور',
          kind: 'mcq',
          prompt: 'What is required of a مجرور if it is to stand in for the فاعل؟',
          options: ['That it carry أل', 'That it be a مصدر', 'That its جار not be locked to a single construction with it', 'That it be a ظرف'],
          correct: 2,
        },
        {
          title: 'الكلمات الملازمة',
          kind: 'mcq',
          prompt: 'What do عِنْدَ، إذا، سُبْحانَ and مَعاذَ illustrate?',
          options: ['Words that may stand in freely', 'Words locked to one construction, which therefore cannot stand in', 'Words that are مختصة', 'Words that are متصرفة'],
          correct: 1,
        },
        {
          title: 'سبحان ومعاذ',
          kind: 'mcq',
          prompt: 'What do سُبْحانَ and مَعاذَ have in common with عِنْدَ؟',
          options: ['All three are ظروف مكان', 'All three are مصادر', 'All three may be مختصة', 'None of the three ever leaves its one fixed construction'],
          correct: 3,
        },
        {
          title: 'خلاصة القسم',
          kind: 'mcq',
          prompt: 'Summarising: what may stand in for the فاعل of a لازم verb?',
          options: ['A متصرف مختص ظرف or مصدر, or a suitable مجرور', 'A مفعول به', 'Any noun in the sentence', 'Nothing — a لازم verb is never built للمجهول'],
          correct: 0,
        },
      ],
    },
  ],
};

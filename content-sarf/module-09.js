// Module 09 — المؤكَّد وغير المؤكَّد (The Emphasised Verb and the Unemphasised)
//
// Covers Week 16 of the Advanced Sarf course: التقسيم السابع للفعل من حيث
// كونه مؤكَّدًا أو غير مؤكَّد, from شذا العرف في فن الصرف by أحمد الحملاوي.
// Definitions, rules, شواهد and verses are kept faithful to the source.
// Concept bodies are short by design; quiz/bank question text is English with
// Arabic morphological terms left in Arabic.
//
// Scope: نون التوكيد ثقيلة and خفيفة; the other ways a verb is emphasised
// (قد، اللام، القسم); why the ماضي is never emphasised and the أمر always may
// be; and the six states of the مضارع — واجب، قريب من الواجب، كثير، قليل،
// أقلّ، ممتنع — with the شواهد for each. This closes the seven divisions of
// الفعل; التقسيم الأول للاسم follows in Module 10.

export default {
  id: 'as-09',
  title: 'المؤكَّد وغير المؤكَّد',
  heading: 'الفعل',
  blurb: 'الفعل divided by whether نون التوكيد may attach to it — and the six grades along which المضارع runs.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'التوكيد بالنون وبغيرها',
      subtitle: 'The نون and its Alternatives — what emphasis does, and how the ماضي and the أمر stand at opposite extremes',
      concepts: [
        {
          heading: 'التعريفان ونونا التوكيد',
          lines: [
            { html: `The seventh division of الفعل turns on a single letter: whether نون التوكيد has attached to the verb or not.`, list: false },
            { box: { title: 'Core Text', lines: [
              `يَنْقَسِمُ الفِعْلُ إلى مُؤَكَّدٍ بِالنُّونِ، وغَيْرِ مُؤَكَّدٍ`,
            ] } },
            { html: `The verb, that line says, divides into مُؤَكَّد بالنون — emphasised by the نون — and غير مؤكَّد, which carries no نون at all.`, list: false },
            { html: `The نون itself comes in two shapes: ثَقِيلة, the heavy نَّ, and خَفِيفة, the light نْ. Either one puts the verb in the first class, which is why the definition takes the trouble to name both.`, list: false },
            { table: { headers: ['القسم', 'التعريف', 'أمثلة'], rows: [
              ['المُؤَكَّد', 'ما لَحِقَتْهُ نُونُ التَّوْكِيدِ، ثَقِيلَةً كانَتْ أو خَفِيفَةً', '﴿لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ﴾ [يوسف: ٣٢]'],
              ['غَيْرُ المُؤَكَّد', 'ما لم تَلْحَقْهُ', 'يُسْجَنُ ، يَكُونُ'],
            ] } },
            { html: `The verse in that table — he shall certainly be imprisoned, and shall certainly be among the debased — was chosen because it carries both نونان at once: the heavy on لَيُسْجَنَنَّ, the light on لَيَكُونًا. Strip the emphasis away and the same two verbs read يُسْجَنُ and يَكُونُ, which is what the second row shows.`, list: false },
            { html: `The light نون needs a note, because in لَيَكُونًا it is not visible as a نون:`, list: false },
            { box: { title: 'Core Text', lines: [
              `﴿لَيَكُونًا﴾ الأَصْلُ: لَيَكُونَنْ، ولكنها قُلِبَتْ أَلِفًا في الوَقْفِ`,
            ] } },
            { html: `The original form is لَيَكُونَنْ, and the نون was turned into an alif when the reciter stops on the word. So the alif closing لَيَكُونًا is neither an extra letter nor a تنوين. It is the light نون itself, in pausal dress.`, list: false },
          ],
          exercise: {
            prompt: `﴿لَيَكُونًا﴾ ends in what looks like an alif with tanwīn. What is it in origin?`,
            kind: 'mcq',
            options: ['ياء المخاطبة', 'A نون النسوة', 'لَيَكُونَنْ — the light نون التوكيد, turned into an alif in pause', 'A تنوين, making it a noun'],
            correct: 2,
          },
        },
        {
          heading: 'التوكيد بغير النون',
          lines: [
            { html: `The نون is not the only way a verb is emphasised.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وتَوْكِيدُ الفِعْلِ قد يَكُونُ بِغَيْرِ نُونِ التَّوْكِيدِ`,
            ] } },
            { html: `A verb's emphasis may come by something other than نون التوكيد. Three such means are listed with a شاهد each:`, list: false },
            { table: { headers: ['الأداة (Means)', 'الشاهد (Evidence)'], rows: [
              ['قَدْ', '﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾'],
              ['اللام', '﴿وإنَّ رَبَّكَ لَيَحْكُمُ بَيْنَهُمْ﴾'],
              ['القَسَم', 'واللهِ لَسَوْفَ أَذْهَبُ'],
            ] } },
            { html: `قَدْ on a ماضي asserts that the thing did in fact happen — the believers have indeed succeeded. The لام does the same for a مضارع: your Lord will surely judge between them. And an oath does it a third way: واللهِ لَسَوْفَ أَذْهَبُ, by God, I shall surely go — putting everything that answers the oath beyond doubt.`, list: false },
            { html: `All three genuinely emphasise. The باب names them anyway only in order to set them aside:`, list: false },
            { box: { title: 'Core Text', lines: [
              `ولكنَّ هذا البابَ مَعْقُودٌ لِلْكَلامِ على تَوْكِيدِ الفِعْلِ بِالنُّونِ`,
            ] } },
            { html: `This chapter is held for emphasis by the نون. Everything that follows is about that one letter.`, list: false },
          ],
          exercise: {
            prompt: `﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾ is an instance of emphasis. By what means?`,
            kind: 'mcq',
            options: ['اللام', 'القسم', 'نون التوكيد', 'قَدْ'],
            correct: 3,
          },
        },
        {
          heading: 'ما يدل عليه التوكيد بالنون، والماضي',
          lines: [
            { html: `The نون does not carry one meaning but two, and the second is what governs the whole باب.`, list: false },
            { box: { title: 'Core Text', lines: [
              `التَّوْكِيدُ بِالنُّونِ يَدُلُّ على شَيْئَيْنِ: التَّوْكِيدِ، والاسْتِقْبالِ`,
            ] } },
            { html: `Emphasis by the نون indicates two things: التوكيد, the assertion itself, and الاستقبال, futurity. The letter insists on the action and places it after the moment of speaking.`, list: false },
            { html: `That second duty decides which verbs may take the نون at all, and it rules the ماضي out immediately:`, list: false },
            { box: { title: 'Core Text', lines: [
              `فالماضي لا يُؤَكَّدُ مُطْلَقًا، التَّوْكِيدُ إنَّما يُؤَكَّدُ بِهِ حَدَثٌ مُسْتَقْبَلٌ`,
            ] } },
            { html: `The ماضي is never emphasised, under any circumstances, because what this نون emphasises is an event still to come. A letter carrying futurity cannot attach to a form whose whole business is what has already happened.`, list: false },
          ],
          clarification: `Everything in this باب follows from the نون carrying two things rather than one. If it only added emphasis, there would be no reason a ماضي could not take it — a past event can be asserted emphatically. But it also imposes الاستقبال, and that is what the ماضي cannot accommodate. Read the six states of the مضارع in the next two lessons with this in mind: the مضارع is صالح for both الحال and الاستقبال, so whether the نون may attach turns on whether the context has already fixed the verb to the future or left it open — and where the context fixes it to الحال, the نون is barred outright.`,
          exercise: {
            prompt: `Why can the ماضي never take نون التوكيد؟`,
            kind: 'mcq',
            options: ['The نون attaches only to the أمر', 'The نون imposes الاستقبال, which a past event cannot accommodate', 'The ماضي is مبني', 'The ماضي already carries emphasis'],
            correct: 1,
          },
        },
        {
          heading: 'الشاذ في الماضي والاسم، والأمر',
          lines: [
            { html: `Two lines of poetry appear to break that ruling, and both are recorded as شاذ rather than allowed. The first puts the heavy نون on a ماضي:`, list: false },
            { box: { title: 'Core Text', lines: [
              `وأمَّا قَوْلُهُ: دامَنَّ سَعْدُكِ لو رَحِمْتِ مُتَيَّمًا`,
              `فضَرُورَةٌ شاذَّةٌ، سَهَّلَها ما في الفِعْلِ من مَعْنَى الطَّلَبِ، فعُومِلَ مُعامَلَةَ الأَمْرِ`,
            ] } },
            { html: `The line reads دامَنَّ سَعْدُكِ لو رَحِمْتِ مُتَيَّمًا — may your good fortune last, if you had shown mercy to a love-stricken man. دامَنَّ is past in form, but a prayer rather than a report. The verdict on it is ضرورة شاذة, an anomaly forced by the verse. What made the نون tolerable is the sense of الطلب, of asking for something, that the verb carries here — so the poet's ماضي was handled as though it were an أمر. That is a licence, not a rule to imitate.`, list: false },
            { html: `The second line is stranger still: a noun taking the نون.`, list: false },
            { box: { title: 'Core Text', lines: [
              `كما شَذَّ تَوْكِيدُ الاسْمِ في قَوْلِ رُؤْبَةَ بنِ العَجَّاجِ: أَقائِلُنَّ (أنتَ) أَحْضِرُوا الشُّهُودا`,
            ] } },
            { html: `Emphasising a noun is likewise شاذ, and رُؤْبَة بن العَجَّاج's line is the recorded case: are you going to say, bring the witnesses? أَقائِل is an اسم — the active participle of قال — and the نون has attached to it all the same.`, list: false },
            { html: `At the opposite end from the ماضي stands the أمر, where the نون is never barred:`, list: false },
            { box: { title: 'Core Text', lines: [
              `والأَمْرُ يَجُوزُ تَوْكِيدُهُ مُطْلَقًا، الأَمْرُ يُطْلَبُ بِهِ حُدُوثُ الفِعْلِ في المُسْتَقْبَلِ دائِمًا، نحو: اكْتُبَنَّ واجْتَهِدَنْ`,
            ] } },
            { html: `The أمر may be emphasised without restriction, and the ruling comes with its reason attached: an أمر always asks for the action to happen in the future. اكْتُبَنَّ — do write! — takes the heavy نون, اجْتَهِدَنْ — do strive! — the light one, and neither has to be checked against a context, because what an أمر seeks has by definition not happened yet.`, list: false },
            { html: `The ماضي and the أمر therefore sit at the two extremes: the first can never take the نون, the second always may. Only the مضارع varies.`, list: false },
          ],
          exercise: {
            prompt: `Why may the أمر always take نون التوكيد؟`,
            kind: 'mcq',
            options: ['It carries no time reference at all', 'What it seeks is always in the future, which is what the نون requires', 'It is مبني', 'It has no ماضٍ'],
            correct: 1,
          },
        },
      ],
      quiz: [
        {
          q: 'What is the definition of المؤكَّد؟',
          options: ['That which نون التوكيد has attached to, heavy or light', 'That which نون التوكيد has not attached to', 'That which قد has entered on', 'That which stands as the answer to an oath'],
          correct: 0,
        },
        {
          q: 'نون التوكيد comes in how many forms?',
          options: ['أربع', 'اثنتان — ثقيلة وخفيفة', 'واحدة', 'ثلاث'],
          correct: 1,
        },
        {
          q: 'The نون التوكيد indicates which two things?',
          options: ['الاستقبال والطلب', 'التوكيد والمضيّ', 'التوكيد والاستقبال', 'التوكيد والحال'],
          correct: 2,
        },
        {
          q: 'What is the ruling on emphasising the ماضي؟',
          options: ['It may always be emphasised', 'Its emphasis is obligatory', 'Its emphasis is common', 'It is never emphasised'],
          correct: 3,
        },
        {
          q: 'What is the ruling on emphasising the أمر؟',
          options: ['Its emphasis is obligatory', 'Its emphasis is forbidden', 'It may always be emphasised', 'It is never emphasised'],
          correct: 2,
        },
        {
          q: 'أَقائِلُنَّ أَحْضِرُوا الشُّهُودا is an example of what?',
          options: ['امتناع التوكيد', 'شذوذ توكيد الاسم', 'شذوذ توكيد الماضي', 'وجوب توكيد المضارع'],
          correct: 1,
        },
      ],
      bank: [
        {
          title: 'ثقيلة وخفيفة',
          kind: 'mcq',
          prompt: 'Does it matter which of the two نونان attaches for a verb to count as مؤكَّد؟',
          options: ['No — the definition covers both', 'Yes — only the heavy counts', 'Yes — only the light counts', 'Only in the أمر'],
          correct: 0,
        },
        {
          title: 'ليسجنن',
          kind: 'mcq',
          prompt: 'In ﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾, which نون is on the first verb?',
          options: ['الثقيلة', 'الخفيفة', 'نون النسوة', 'نون الوقاية'],
          correct: 0,
        },
        {
          title: 'قلب النون ألفًا',
          kind: 'mcq',
          prompt: 'Why does لَيَكُونَنْ appear as لَيَكُونًا؟',
          options: ['The verb has been made a noun', 'The light نون is turned into an alif in pause', 'The نون is dropped', 'A تنوين has been added'],
          correct: 1,
        },
        {
          title: 'معنى الآية',
          kind: 'mcq',
          prompt: '﴿لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ﴾ means:',
          options: ['He will certainly be imprisoned, and will certainly be among the debased', 'He was imprisoned, and was among the debased', 'Imprison him, and let him be among the debased', 'He will not be imprisoned, nor be among the debased'],
          correct: 0,
        },
        {
          title: 'يُسجن ويكون',
          kind: 'mcq',
          prompt: 'يُسْجَنُ and يَكُونُ are examples of what?',
          options: ['المؤكَّد بالنون الثقيلة', 'المؤكَّد بقد', 'غير المؤكَّد', 'المؤكَّد بالنون الخفيفة'],
          correct: 2,
        },
        {
          title: 'قد أفلح',
          kind: 'mcq',
          prompt: '﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾ emphasises a verb in which tense?',
          options: ['None — it is a noun', 'الماضي', 'المضارع', 'الأمر'],
          correct: 1,
        },
        {
          title: 'التوكيد باللام',
          kind: 'mcq',
          prompt: 'Which شاهد shows emphasis by the لام؟',
          options: ['﴿وإنَّ رَبَّكَ لَيَحْكُمُ بَيْنَهُمْ﴾', '﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾', 'واللهِ لَسَوْفَ أَذْهَبُ', '﴿لَيُسْجَنَنَّ﴾'],
          correct: 0,
        },
        {
          title: 'التوكيد بالقسم',
          kind: 'mcq',
          prompt: 'واللهِ لَسَوْفَ أَذْهَبُ illustrates emphasis by which means?',
          options: ['نون التوكيد', 'أداة الطلب', 'القسم', 'قَدْ'],
          correct: 2,
        },
        {
          title: 'موضوع الباب',
          kind: 'mcq',
          prompt: 'Having named four ways of emphasising a verb, which does this باب actually treat?',
          options: ['التوكيد بالنون', 'التوكيد بقد', 'التوكيد باللام', 'التوكيد بالقسم'],
          correct: 0,
        },
        {
          title: 'الدلالتان',
          kind: 'mcq',
          prompt: 'Which of the نون’s two meanings is the one that excludes the ماضي؟',
          options: ['Neither — the exclusion is arbitrary', 'الاستقبال', 'التوكيد', 'Both equally'],
          correct: 1,
        },
        {
          title: 'دامَنَّ سعدك',
          kind: 'mcq',
          prompt: 'دامَنَّ سَعْدُكِ لو رَحِمْتِ مُتَيَّمًا is a ماضٍ carrying a نون. How is it judged?',
          options: ['واجب', 'كثير', 'ضرورة شاذة', 'قياسي مطرد'],
          correct: 2,
        },
        {
          title: 'ما سهَّل الشذوذ',
          kind: 'mcq',
          prompt: 'What is said to have made the شذوذ in دامَنَّ easier?',
          options: ['The verb is معتل', 'The verb is مضعَّف', 'The metre required it', 'The verb carries a sense of الطلب, so it was treated like an أمر'],
          correct: 3,
        },
        {
          title: 'أقائل: اسم فاعل',
          kind: 'mcq',
          prompt: 'In أَقائِلُنَّ أَحْضِرُوا الشُّهُودا, أَقائِل is:',
          options: ['اسم الفاعل from قالَ', 'فعل مضارع', 'اسم تفضيل', 'مصدر ميمي'],
          correct: 0,
        },
        {
          title: 'شذوذ الاسم',
          kind: 'mcq',
          prompt: 'What is شاذ about أَقائِلُنَّ؟',
          options: ['The verb is مبني للمجهول', 'The نون is doubled', 'A نون التوكيد has attached to an اسم', 'A نون has attached to a ماضٍ'],
          correct: 2,
        },
        {
          title: 'اكتبنَّ واجتهدنْ',
          kind: 'mcq',
          prompt: 'اكْتُبَنَّ and اجْتَهِدَنْ differ in which نون each carries?',
          options: ['The first the light, the second the heavy', 'Both the heavy', 'Both the light', 'The first the heavy, the second the light'],
          correct: 3,
        },
        {
          title: 'مطلقًا مرتين',
          kind: 'mcq',
          prompt: 'The word مطلقًا is used of both the ماضي and the أمر. What does each assertion say?',
          options: ['The ماضي never takes the نون; the أمر always may', 'Both always may', 'Both never may', 'The ماضي always may; the أمر never'],
          correct: 0,
        },
        {
          title: 'موقع المضارع',
          kind: 'mcq',
          prompt: 'Given that the ماضي and the أمر are settled, which form is the subject of the rest of this باب؟',
          options: ['المضارع', 'الماضي', 'الأمر', 'اسم الفعل'],
          correct: 0,
        },
        {
          title: 'سبب جواز الأمر',
          kind: 'mcq',
          prompt: 'What about the أمر makes it always eligible for the نون؟',
          options: ['It has no فاعل ظاهر', 'It carries no time', 'حدوث الفعل is always sought in the future', 'It is مبني'],
          correct: 2,
        },
        {
          title: 'معاملة الأمر',
          kind: 'mcq',
          prompt: 'دامَنَّ was treated مُعامَلَةَ الأَمْرِ. Why does that make the نون tolerable?',
          options: ['Because the أمر always admits the نون, and the verb carried a sense of request', 'Because the أمر is مبني', 'Because the أمر has no ماضٍ', 'Because the نون was light'],
          correct: 0,
        },
        {
          title: 'المؤكَّد وغير المؤكَّد',
          kind: 'mcq',
          prompt: 'This division sorts verbs by what?',
          options: ['Whether they take an object', 'Whether they inflect', 'Whether نون التوكيد has attached to them', 'Whether they carry a زمن'],
          correct: 2,
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'حالات المضارع: الواجب والكثير',
      subtitle: 'The First Three Grades — where the نون must attach, where it nearly must, and where it commonly does',
      concepts: [
        {
          heading: 'الحالات الست',
          lines: [
            { html: `Between those two extremes stands the مضارع, and the باب gives it not one ruling but six.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وأمَّا المُضارِعُ فله سِتُّ حالاتٍ: واجِبًا، قَرِيبًا من الواجِبِ، كَثِيرًا، قَلِيلًا، أَقَلَّ، مُمْتَنِعًا`,
            ] } },
            { html: `The مضارع has six states, and they run in that order: واجِب (obligatory), قَرِيب من الواجِب (near-obligatory), كَثِير (common), قَلِيل (rare), أَقَلّ (rarer still), مُمْتَنِع (barred).`, list: false },
            { html: `Six rather than one, because nothing in the form of the مضارع settles the question by itself:`, list: false },
            { box: { title: 'Core Text', lines: [
              `الأَصْلُ في المُضارِعِ أنَّهُ يَأْتِي في الحالِ أو الاسْتِقْبالِ، فإن كان في الحالِ فلا تَدْخُلُهُ نُونُ التَّوْكِيدِ`,
            ] } },
            { html: `By default a مضارع may be read for الحال, the present, or for الاستقبال, the future; and where it is present, نون التوكيد does not enter on it at all. Its time comes from the words around it, so those are what have to be examined. The six states are one scale, and what moves a verb along the scale is how firmly its context has fixed it to the future.`, list: false },
          ],
          exercise: {
            prompt: `A مضارع is fixed by its context to الحال. What follows for نون التوكيد؟`,
            kind: 'mcq',
            options: ['It commonly attaches', 'It rarely attaches', 'It cannot attach at all', 'It must attach'],
            correct: 2,
          },
        },
        {
          heading: 'الحالة الأولى: الواجب',
          lines: [
            { html: `The نون is obligatory in one case only, and it takes four conditions holding together to produce it.`, list: false },
            { box: { title: 'Core Text', lines: [
              `فيَجِبُ تَأْكِيدُهُ إذا كان مُثْبَتًا، مُسْتَقْبَلًا، في جَوابِ قَسَمٍ، غَيْرَ مَفْصُولٍ عن لامِهِ (لامِ القَسَمِ) بِفاصِلٍ`,
              `نحو: ﴿وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾ [الأنبياء: ٥٧]`,
            ] } },
            { html: `Emphasis is obligatory, that is, when the verb is all four of these at once:`, list: false },
            { html: `مُثْبَتًا — affirmative, not negated.`, list: true, bullet: true },
            { html: `مُسْتَقْبَلًا — future in reference.`, list: true, bullet: true },
            { html: `في جَوابِ قَسَمٍ — standing as the answer to an oath.`, list: true, bullet: true },
            { html: `غَيْرَ مَفْصُولٍ عن لامِهِ — with nothing separating it from its لام القسم.`, list: true, bullet: true },
            { html: `The شاهد is Ibrāhīm's oath against the idols of his people: by God, I shall certainly plot against your idols. All four conditions hold in it. أَكِيدُ is affirmative; it refers to what he will do rather than to anything done already; it answers the oath تاللهِ; and the لام sits immediately before the verb with nothing in between. Hence the نون on لَأَكِيدَنَّ is not optional.`, list: false },
          ],
          clarification: `Keep the four conditions in view, because the sixth state — الممتنع — is defined as their failure. Each one that drops out has a name in that later list: negate the verb and you are in a جواب قسم منفيّ; make it present rather than future and it is حال; put anything between the لام and the verb and it is مفصول من اللام. So the واجب and the ممتنع are two readings of one set of conditions, met or unmet — which is why the باب can move straight from the strongest case to the weakest by simply undoing them one at a time.`,
          exercise: {
            prompt: `A مضارع answers an oath, is future, and follows its لام directly — but it is negated. Where does it fall?`,
            kind: 'mcq',
            options: ['Not in الواجب — one of the four conditions has failed', 'Still in الواجب', 'In الكثير', 'In القليل'],
            correct: 0,
          },
        },
        {
          heading: 'الحالة الثانية: القريب من الواجب',
          lines: [
            { html: `One step down from obligatory, and a single particle carries the whole state.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ويكونُ قَرِيبًا من الواجِبِ إذا كان شَرْطًا لِإِنِ المُؤَكَّدَةِ بِما الزائِدَةِ، أي (إمَّا) الشَّرْطِيَّة`,
            ] } },
            { html: `The نون is near-obligatory when the verb is the شرط of إِنْ reinforced by the redundant ما — the pair written إمَّا.`, list: false },
            { html: `So إمَّا is not a particle in its own right. It is conditional إِنْ with ما laid on top of it, and that added reinforcement is what pulls the نون so close to being required.`, list: false },
            { table: { title: 'شواهد إمَّا الشرطية (Evidence for إمَّا الشرطية)', headers: ['الشاهد (Evidence)', 'السورة (Sūrah)'], rows: [
              ['﴿وَإِمَّا تَخَافَنَّ مِنْ قَوْمٍ خِيَانَةً﴾', 'الأنفال: ٥٨'],
              ['﴿فَإِمَّا نَذْهَبَنَّ بِكَ﴾', 'الزخرف: ٤١'],
              ['﴿فَإِمَّا تَرَيِنَّ مِنَ الْبَشَرِ أَحَدًا فَقُولِي إِنِّي نَذَرْتُ لِلرَّحْمَنِ صَوْمًا﴾', 'مريم: ٢٦'],
            ] } },
            { html: `In each of the three, the emphasised verb is the شرط sitting directly after إمَّا: تَخَافَنَّ, if you fear treachery from a people; نَذْهَبَنَّ, if We take you away; تَرَيِنَّ, if you see any human being.`, list: false },
          ],
          exercise: {
            prompt: `What is إمَّا الشرطية made of?`,
            kind: 'mcq',
            options: ['إِنْ الشرطية reinforced by the زائدة ما', 'إِنَّ with the ما of negation', 'أَمَّا with a doubled ميم', 'A single indivisible particle'],
            correct: 0,
          },
        },
        {
          heading: 'الحالة الثالثة: الكثير',
          lines: [
            { html: `Third grade: the نون is common, but no longer anywhere near required.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ويكونُ كَثِيرًا إذا وَقَعَ بعد أَداةِ طَلَبٍ`,
            ] } },
            { html: `The نون is كثير, frequent, when the verb falls after an أداة طلب — a particle by which something is requested. Six of them are named:`, list: false },
            { table: { headers: ['أداة الطلب (Particle of Request)', 'الشاهد (Evidence)'], rows: [
              ['أَمْر (بعد لامِ الأمرِ) — command (after لام الأمر)', 'لِيَقُومَنَّ زَيْدٌ'],
              ['نَهْي — prohibition', '﴿وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ﴾ [إبراهيم: ٤٢]'],
              ['دُعاء — supplication', 'لا يَبْعَدَنْ قَوْمِيَ الَّذِينَ هُمُ ... سَمُّ العُداةِ وآفَةُ الجُزُرِ — لخِرْنِقَ بنتِ هَفَّانَ'],
              ['عَرْض — gentle suggestion', 'هَلَّا تَمُنِنْ بِوَعْدٍ غَيْرَ مُخْلِفَةٍ ... كما عَهِدْتُكِ في أَيَّامِ ذِي سَلَمِ'],
              ['تَمَنٍّ — wishing', 'فَلَيْتَكِ يَوْمَ المُلْتَقَى تَرَيِنَّنِي ... لِكَيْ تَعْلَمِي أَنِّي امْرُؤٌ بِكِ هائِمُ'],
              ['اسْتِفْهام — questioning', 'أَفَبَعْدَ كِنْدَةَ تَمْدَحَنَّ قَبِيلًا'],
            ] } },
            { html: `The first two rows are the plainest kind of طلب: لِيَقُومَنَّ زَيْدٌ is a command — let Zayd stand up! — and ﴿وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا عَمَّا يَعْمَلُ الظَّالِمُونَ﴾ is a prohibition — do not think that الله is unaware of what the wrongdoers do.`, list: false },
            { html: `Two more rows need a word of comment. لا يَبْعَدَنْ قَوْمِي, may my people not perish, carries the same لا as a prohibition; because no one is being forbidden anything here, it counts as دُعاء rather than نَهْي. هَلَّا تَمُنِنْ بِوَعْدٍ غَيْرَ مُخْلِفَةٍ, won't you grant me a promise that you won't break, asks gently instead of commanding, and that softness is what makes it عَرْض rather than أمر.`, list: false },
            { html: `The last two are a wish and a question: فَلَيْتَكِ يَوْمَ المُلْتَقَى تَرَيِنَّنِي wishes that she might see him on the day they meet, and أَفَبَعْدَ كِنْدَةَ تَمْدَحَنَّ قَبِيلًا asks — after كِنْدَة, will you go on to praise some other tribe?`, list: false },
            { html: `What unites the six is that each seeks something not yet realised — a command, a prohibition, a prayer, an offer, a wish, a question all point past the present moment — which is exactly the futurity the نون requires.`, list: false },
          ],
          exercise: {
            prompt: `Why does a طلب make the نون common on the verb after it?`,
            kind: 'mcq',
            options: ['A طلب is always negated', 'A طلب makes the verb مبني', 'A طلب requires a لام', 'A طلب seeks what has not yet happened, which supplies the futurity the نون requires'],
            correct: 3,
          },
        },
      ],
      quiz: [
        {
          q: 'How many states does the مضارع have with respect to نون التوكيد؟',
          options: ['ثلاث', 'ست', 'أربع', 'خمس'],
          correct: 1,
        },
        {
          q: 'A مضارع fixed to الحال:',
          options: ['Its emphasis is obligatory', 'Its emphasis is common', 'Its emphasis is rare', 'نون التوكيد cannot attach at all'],
          correct: 3,
        },
        {
          q: 'How many conditions must hold for توكيد to be واجبًا؟',
          options: ['خمسة', 'اثنان', 'أربعة', 'ثلاثة'],
          correct: 2,
        },
        {
          q: '﴿وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾ is from which sūra?',
          options: ['الزخرف', 'الأنبياء', 'الأنفال', 'إبراهيم'],
          correct: 1,
        },
        {
          q: 'The verb becomes قريبًا من الواجب when it is the شرط of:',
          options: ['لام القسم', 'إمَّا الشرطية', 'لَمْ', 'لا النافية'],
          correct: 1,
        },
        {
          q: 'The verb becomes كثيرًا when it falls after:',
          options: ['أداة جزاء', 'لَمْ', 'أداة طلب', 'أداة نفي'],
          correct: 2,
        },
      ],
      bank: [
        {
          title: 'ترتيب الحالات',
          kind: 'mcq',
          prompt: 'Which sequence gives the six states in order?',
          options: ['واجب، كثير، قريب من الواجب، قليل، ممتنع، أقلّ', 'كثير، واجب، قليل، أقلّ، قريب من الواجب، ممتنع', 'واجب، قريب من الواجب، كثير، قليل، أقلّ، ممتنع', 'ممتنع، أقلّ، قليل، كثير، قريب من الواجب، واجب'],
          correct: 2,
        },
        {
          title: 'ما يحرك الفعل على السلم',
          kind: 'mcq',
          prompt: 'What determines where a مضارع falls on this scale?',
          options: ['How many letters it has', 'Whether it is مجرد or مزيد', 'Whether it is متعدٍّ', 'How firmly its context fixes it to the future'],
          correct: 3,
        },
        {
          title: 'الأصل في المضارع',
          kind: 'mcq',
          prompt: 'What is the أصل of the مضارع with respect to time, and why does it matter here?',
          options: ['It is fixed to الاستقبال, so the نون always attaches', 'It carries no time at all', 'It is صالح for الحال or الاستقبال, and only the second admits the نون', 'It is fixed to الحال, so the نون never attaches'],
          correct: 2,
        },
        {
          title: 'مثبتًا',
          kind: 'mcq',
          prompt: 'The first condition for وجوب is that the verb be مُثْبَتًا. What does that exclude?',
          options: ['A past verb', 'A verb separated from its لام', 'A verb after a طلب', 'A negated verb'],
          correct: 3,
        },
        {
          title: 'في جواب قسم',
          kind: 'mcq',
          prompt: 'The third condition places the verb where?',
          options: ['After a شرط particle', 'After a طلب', 'After لَمْ', 'As the answer to an oath'],
          correct: 3,
        },
        {
          title: 'غير مفصول',
          kind: 'mcq',
          prompt: 'The fourth condition concerns the لام. What does it require?',
          options: ['That the لام be doubled', 'That the لام follow the verb', 'That nothing come between the لام القسم and the verb', 'That the لام be dropped'],
          correct: 2,
        },
        {
          title: 'لأكيدنَّ',
          kind: 'mcq',
          prompt: 'In ﴿وَتَاللَّهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾, which element is the قسم؟',
          options: ['لَأَكِيدَنَّ', 'أَصْنَامَكُمْ', 'The لام', 'وَتَاللَّهِ'],
          correct: 3,
        },
        {
          title: 'الواجب والممتنع',
          kind: 'mcq',
          prompt: 'How does the sixth state relate to the first?',
          options: ['الممتنع requires a fifth condition', 'الممتنع is defined by the failure of the four conditions of الواجب', 'They are unrelated', 'الممتنع is a subset of الواجب'],
          correct: 1,
        },
        {
          title: 'تركيب إمَّا',
          kind: 'mcq',
          prompt: 'إمَّا الشرطية is described as إِنْ المؤكَّدة بما الزائدة. What role does the ما play?',
          options: ['It has no role', 'It reinforces إِنْ, and that reinforcement is what draws the نون', 'It negates إِنْ', 'It makes إِنْ a حرف جر'],
          correct: 1,
        },
        {
          title: 'شرط إمَّا',
          kind: 'mcq',
          prompt: 'In ﴿وَإِمَّا تَخَافَنَّ مِنْ قَوْمٍ خِيَانَةً﴾, تَخَافَنَّ functions as:',
          options: ['شرط إمَّا الشرطية', 'جزاء إمَّا الشرطية', 'حال', 'جواب قسم'],
          correct: 0,
        },
        {
          title: 'مستقبلًا',
          kind: 'mcq',
          prompt: 'The second condition for وجوب requires the verb be مُسْتَقْبَلًا. What does that exclude?',
          options: ['A verb referring to الحال', 'A negated verb', 'A verb answering a قسم', 'A verb after a طلب'],
          correct: 0,
        },
        {
          title: 'انفصال اللام يمنع الوجوب',
          kind: 'mcq',
          prompt: 'A مضارع is مُثْبَت, مُسْتَقْبَل, and answers a قَسَم — but a word separates it from its لام. Does توكيد remain واجبًا؟',
          options: ['No — the fourth condition, غَيْر مَفْصُول, has failed', 'Yes — three of four conditions is enough', 'Yes — separation does not matter', 'No — because it is not مُثْبَت'],
          correct: 0,
        },
        {
          title: 'ست أدوات',
          kind: 'mcq',
          prompt: 'Which list gives the six أدوات طلب after which the نون is كثير؟',
          options: ['قسم، شرط، نفي، جزاء، عرض، تمنٍّ', 'أمر، نهي، نفي، جزاء، قسم، استفهام', 'دعاء، عرض، تمنٍّ، قسم، شرط، نفي', 'أمر، نهي، دعاء، عرض، تمنٍّ، استفهام'],
          correct: 3,
        },
        {
          title: 'ليقومنَّ زيد',
          kind: 'mcq',
          prompt: 'لِيَقُومَنَّ زَيْدٌ has the نون after which أداة طلب؟',
          options: ['أداة التمني', 'لام الأمر', 'أداة النهي', 'أداة الاستفهام'],
          correct: 1,
        },
        {
          title: 'ولا تحسبنَّ',
          kind: 'mcq',
          prompt: '﴿وَلَا تَحْسَبَنَّ اللَّهَ غَافِلًا﴾ has the نون after which أداة طلب؟',
          options: ['الدعاء', 'الاستفهام', 'النهي', 'الأمر'],
          correct: 2,
        },
        {
          title: 'خرنق بنت هفَّان',
          kind: 'mcq',
          prompt: 'لا يَبْعَدَنْ قَوْمِيَ الَّذِينَ هُمُ … illustrates which أداة طلب؟',
          options: ['النهي', 'العرض', 'التمني', 'الدعاء'],
          correct: 3,
        },
        {
          title: 'هلَّا تمُنِنْ',
          kind: 'mcq',
          prompt: 'هَلَّا تَمُنِنْ بِوَعْدٍ غَيْرَ مُخْلِفَةٍ illustrates which أداة طلب؟',
          options: ['العرض', 'التمني', 'الاستفهام', 'الدعاء'],
          correct: 0,
        },
        {
          title: 'فليتك ترينَّني',
          kind: 'mcq',
          prompt: 'فَلَيْتَكِ يَوْمَ المُلْتَقَى تَرَيِنَّنِي illustrates which أداة طلب؟',
          options: ['الاستفهام', 'التمني', 'العرض', 'الدعاء'],
          correct: 1,
        },
        {
          title: 'أفبعد كندة',
          kind: 'mcq',
          prompt: 'أَفَبَعْدَ كِنْدَةَ تَمْدَحَنَّ قَبِيلًا illustrates which أداة طلب؟',
          options: ['الاستفهام', 'التمني', 'العرض', 'النهي'],
          correct: 0,
        },
        {
          title: 'الجامع بين الأدوات',
          kind: 'mcq',
          prompt: 'What do all six أدوات طلب have in common?',
          options: ['Each negates the verb', 'Each requires a لام', 'Each makes the verb مبني', 'Each seeks something not yet realised, supplying futurity'],
          correct: 3,
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'القليل والأقلّ والممتنع',
      subtitle: 'The Last Three Grades — after لا and ما, after لَمْ and the جزاء particles, and where the نون cannot come at all',
      concepts: [
        {
          heading: 'الحالة الرابعة: القليل',
          lines: [
            { html: `At the fourth grade the ground shifts: the نون now attaches after two particles that are not طلب at all.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ويكونُ قَلِيلًا إذا كان بَعْدَ: (لا) النافِيَةِ، أو (ما) الزائِدَةِ، التي لم تُسْبَقْ بِإِنِ الشَّرْطِيَّةِ`,
            ] } },
            { html: `The نون is rare — قَلِيل — after the لا of negation, and after a redundant ما that إِنْ الشرطية has not preceded. That last قيد matters: with إِنْ in front of it the pair is إمَّا, and the verb jumps back up to the second state. Take the لا first:`, list: false },
            { box: { title: 'Core Text', lines: [
              `كقولِهِ تعالى: ﴿وَاتَّقُوا فِتْنَةً لَا تُصِيبَنَّ الَّذِينَ ظَلَمُوا مِنْكُمْ خَاصَّةً﴾ [الأنفال: ٢٥]`,
            ] } },
            { html: `Beware a trial that will not strike only the wrongdoers among you. The لا there negates; it does not prohibit, and negation is not طلب. تُصِيبَنَّ has taken the نون anyway, and the reason is given plainly:`, list: false },
            { box: { title: 'Core Text', lines: [
              `وإنَّما أُكِّدَ مع النافي: لأنَّهُ يُشْبِهُ أَداةَ النَهْيِ صُورَةً`,
            ] } },
            { html: `The verb was emphasised with the negating particle because that particle resembles the particle of prohibition in form. لا النافية and لا الناهية are written and pronounced identically; the licence comes from that resemblance in shape, and from nothing in the meaning.`, list: false },
            { html: `The second شاهد shows the other half of the rule, the نون after a ما that adds nothing to the sense:`, list: false },
            { box: { title: 'Core Text', lines: [
              `وقولِهِ: إذا ماتَ مِنْهُم سَيِّدٌ سَرَقَ ابْنُهُ ... ومِنْ عِضَةٍ ما يَنْبُتَنَّ شَكِيرُها`,
            ] } },
            { html: `The second half of the line reads: and from a thorn tree its own young shoots grow. Remove the ما and the sentence loses nothing, which is exactly what makes it زائدة — yet يَنْبُتَنَّ carries the نون after it.`, list: false },
          ],
          exercise: {
            prompt: `A نون attaches after لا النافية, though the نون belongs with طلب. What licenses it?`,
            kind: 'mcq',
            options: ['The negating لا resembles the prohibiting لا in form', 'لا النافية is itself a طلب', 'The verb is in the ماضي', 'Nothing — it is شاذ'],
            correct: 0,
          },
        },
        {
          heading: '(ما) الزائدة و(ما) بعد رُبَّ',
          lines: [
            { html: `A point of scope on that ما.`, list: false },
            { box: { title: 'Core Text', lines: [
              `وما زائِدَةٌ في الجَمِيعِ، وشَمَلَ قَوْلُنا (ما) الزائِدَةُ (ما) الواقِعَةَ بعدَ رُبَّ`,
              `كقولِ جَذِيمَةَ الأَبْرَشِ: رُبَّما أَوْفَيْتُ في عَلَمٍ ... تَرْفَعَنْ ثَوْبِي شَمالاتُ`,
            ] } },
            { html: `ما is redundant in every case named in this state, and the term covers the ما that comes after رُبَّ as well. جَذِيمة الأبرش's line — many a time have I stood on a high place with the north winds lifting my robe — puts the light نون on تَرْفَعَنْ after رُبَّما.`, list: false },
            { html: `So تَرْفَعَنْ stands on exactly the same footing as the verbs above it. It is قَلِيل, not a case of its own.`, list: false },
          ],
          exercise: {
            prompt: `رُبَّما أَوْفَيْتُ في عَلَمٍ ... تَرْفَعَنْ ثَوْبِي شَمالاتُ. Under which state does تَرْفَعَنْ fall?`,
            kind: 'mcq',
            options: ['الكثير', 'الممتنع', 'القليل — the ما after رُبَّ counts as a زائدة ما', 'الواجب'],
            correct: 2,
          },
        },
        {
          heading: 'الحالة الخامسة: الأقلّ',
          lines: [
            { html: `Fifth grade: rarer still, and two cases carry it.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ويكونُ أَقَلَّ إذا كان بعدَ (لَمْ)، وبعدَ أَداةِ جَزاءٍ غَيْرِ (إمَّا)، شَرْطًا كان المُؤَكَّدُ أو جَزاءً`,
            ] } },
            { html: `The نون is rarer still — أَقَلّ — after لَمْ, and after any جزاء particle except إمَّا; in that second case it may sit on the شرط or on the جزاء, whichever of the two is emphasised.`, list: false },
            { table: { headers: ['الحالة (Case)', 'المثال (Example)'], rows: [
              ['بعدَ (لَمْ) — after لَمْ', 'يَحْسَبُهُ الجاهِلُ ما لَمْ يَعْلَمَا ... شَيْخًا عَلَى كُرْسِيِّهِ مُعَمَّمَا — أي يَعْلَمَنْ ، يَصِفُ جَبَلًا'],
              ['بعدَ أَداةِ جَزاءٍ غَيْرِ (إمَّا) — after a جزاء particle other than إمّا', 'مَتَى تَجْتَهِدَنَّ تَنْجَحْ'],
            ] } },
            { html: `The line in the first row describes a mountain: one who does not know it takes it, until he learns, for an old man sitting turbaned on his chair. ما لَمْ يَعْلَمَا stands for يَعْلَمَنْ, the light نون turned into an alif at the rhyme, exactly as in ﴿لَيَكُونًا﴾. The second row — whenever you strive, you will succeed — shows the نون on the شرط, and the rule allows it equally on the جزاء.`, list: false },
            { html: `Note the contrast with the second state: after إمَّا the نون is nearly obligatory, after any other جزاء particle it is the rarest case but one.`, list: false },
          ],
          clarification: `Why does إمَّا stand so far apart from every other جزاء particle? Because of the ما. إِنْ on its own is a plain conditional and does nothing to press the verb towards emphasis; reinforced by the زائدة ما it becomes emphatic itself, and an emphatic particle naturally draws an emphatic verb after it. Strip the ما away and you are back to an ordinary شرط, where the نون is a rarity. That single letter is the whole distance between the second state and the fifth.`,
          exercise: {
            prompt: `ما لَمْ يَعْلَمَا stands for يَعْلَمَنْ. What has happened to the نون؟`,
            kind: 'mcq',
            options: ['The light نون has been turned into an alif at the end of the line', 'The نون has been dropped', 'The نون was never there', 'The نون has become a تنوين'],
            correct: 0,
          },
        },
        {
          heading: 'الحالة السادسة: الممتنع',
          lines: [
            { html: `Sixth and last, the نون cannot come at all.`, list: false },
            { box: { title: 'Core Text', lines: [
              `ويكونُ مُمْتَنِعًا إذا انْتَفَتْ شُرُوطُ الواجِبِ، ولم يَكُنْ مِمَّا سَبَقَ`,
            ] } },
            { html: `Emphasis is barred when the conditions of الواجب have failed and the verb is not one of the cases already described. Both halves are needed, since a verb can fail the four conditions and still be قليل or أقلّ. Three cases are named:`, list: false },
            { table: { headers: ['الحالة (Case)', 'الشاهد (Evidence)'], rows: [
              ['أن يكونَ في جَوابِ قَسَمٍ مَنْفِيٍّ، ولو كان النافي مُقَدَّرًا', 'تاللهِ لا يَذْهَبُ العُرْفُ بينَ اللهِ والناسِ ؛ ﴿تَاللَّهِ تَفْتَؤُ تَذْكُرُ يُوسُفَ﴾ [يوسف: ٨٥] — أي: لا تَفْتَؤُ'],
              ['أن يكونَ حالًا', 'كقراءةِ ابنِ كَثِيرٍ: ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾ [القيامة]'],
              ['أن يكونَ مَفْصُولًا من اللامِ', '﴿وَلَئِنْ مُتُّمْ أَوْ قُتِلْتُمْ لَإِلَى اللَّهِ تُحْشَرُونَ﴾ [آل عمران: ١٥٨] ؛ ﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ [الضحى: ٥]'],
            ] } },
            { html: `Reading the first column: the verb answers an oath but is negated, even where the negative is only implied; or it refers to the present; or something stands between it and its لام. Each of the three undoes one of the four conditions of the first state — negating it, removing its futurity, breaking the لام's contact with it.`, list: false },
            { html: `Read against the شواهد: by God, kindness between God and people does not go to waste — an oath answered by a negated verb. ﴿تَاللَّهِ تَفْتَؤُ تَذْكُرُ يُوسُفَ﴾ is the same case with the negative left unspoken, since the sense is لا تَفْتَؤُ, you will not cease remembering Yūsuf. An omitted لا bars the نون exactly as a stated one does.`, list: false },
            { html: `ابن كثير reads ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾ with an emphatic لام on the verb, so أُقْسِمُ is the speaker's swearing at that very moment. A verb fixed to الحال has no futurity for the نون to attach to.`, list: false },
            { html: `The third case is visible in the two verses beside it. In لَإِلَى اللَّهِ تُحْشَرُونَ — it is to God that you will be gathered — the جار ومجرور إلى الله stands between the لام and its verb, and in وَلَسَوْفَ يُعْطِيكَ رَبُّكَ — your Lord shall surely give you — سَوْفَ does the same.`, list: false },
            { html: `And the plainest case of all needs no special description: an ordinary مضارع with nothing before it — يَذْهَبُ زَيْدٌ — is ممتنع simply because none of the five preceding states applies to it.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ﴾, why is the نون barred?`,
            kind: 'mcq',
            options: ['There is no قسم', 'سَوْفَ has come between the لام and the verb', 'The verb is negated', 'The verb refers to the present'],
            correct: 1,
          },
        },
      ],
      quiz: [
        {
          q: 'The نون is قليل after which two things?',
          options: ['إمَّا ولام القسم', 'أداة الطلب والقسم', '(لا) النافية و(ما) الزائدة', '(لَمْ) وأداة الجزاء'],
          correct: 2,
        },
        {
          q: 'Why is the نون tolerated after لا النافية؟',
          options: ['Because it resembles the prohibiting لا in form', 'Because لا is a طلب particle', 'Because the فعل is ماضٍ', 'Because لا is extra (زائدة)'],
          correct: 0,
        },
        {
          q: 'The نون is أقلّ after which two things?',
          options: ['أداة الطلب والدعاء', '(لَمْ) وأداة جزاء غير (إمَّا)', '(لا) النافية و(ما) الزائدة', 'إمَّا ولام القسم'],
          correct: 1,
        },
        {
          q: '﴿تَاللَّهِ تَفْتَؤُ تَذْكُرُ يُوسُفَ﴾ is understood as:',
          options: ['لا تَفْتَؤُ — with a suppressed negative', 'تَفْتَؤَنَّ', 'لَتَفْتَؤُ', 'قد تَفْتَؤُ'],
          correct: 0,
        },
        {
          q: 'ابن كثير’s reading of ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾ shows which case of امتناع؟',
          options: ['Answering a negated oath', 'Being separated from its لام', 'Following لَمْ', 'Being حال'],
          correct: 3,
        },
        {
          q: '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَى﴾ shows which case of امتناع؟',
          options: ['Being separated from its لام', 'Being حال', 'Being negated', 'Following a جزاء particle'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'قيد (ما) الزائدة',
          kind: 'mcq',
          prompt: 'The fourth state names (ما) الزائدة with a قيد. What is it?',
          options: ['That it not be preceded by إِنْ الشرطية', 'That it follow a قسم', 'That it be doubled', 'That it precede a لام'],
          correct: 0,
        },
        {
          title: 'لا في تصيبنَّ',
          kind: 'mcq',
          prompt: 'In ﴿وَاتَّقُوا فِتْنَةً لَا تُصِيبَنَّ الَّذِينَ ظَلَمُوا مِنْكُمْ خَاصَّةً﴾, the لا is:',
          options: ['النافية — not النَّاهِيَة, despite the resemblance in form', 'النَّاهِيَة', 'الزائدة', 'النافية للجنس'],
          correct: 0,
        },
        {
          title: 'الشبه الصوري',
          kind: 'mcq',
          prompt: 'The نون after لا النافية is licensed by a resemblance. Between what and what?',
          options: ['Between the قسم and the شرط', 'Between the negating لا and the prohibiting لا in form', 'Between the نون and the تنوين', 'Between the مضارع and the أمر'],
          correct: 1,
        },
        {
          title: 'ما ينبتنَّ شكيرها',
          kind: 'mcq',
          prompt: 'In وَمِنْ عِضَةٍ ما يَنْبُتَنَّ شَكِيرُها, what is the ما؟',
          options: ['زائدة', 'نافية', 'موصولة', 'استفهامية'],
          correct: 0,
        },
        {
          title: 'ما بعد رُبَّ',
          kind: 'mcq',
          prompt: 'Does the ما that follows رُبَّ count as a زائدة ما — the same category of ما that lets نون التوكيد attach rarely (قليلًا) to a مضارع?',
          options: ['Yes — it counts as a زائدة ما', 'No — it is excluded from that category', 'Only in poetry', 'Only if the verb is مثبت'],
          correct: 0,
        },
        {
          title: 'نون ترفعن',
          kind: 'mcq',
          prompt: 'In رُبَّما أَوْفَيْتُ في عَلَمٍ ... تَرْفَعَنْ ثَوْبِي شَمالاتُ, which نون attaches to تَرْفَعَنْ؟',
          options: ['الخفيفة', 'الثقيلة', 'Neither — it is غير مؤكَّد', 'نون النسوة'],
          correct: 0,
        },
        {
          title: 'شرطًا أو جزاءً',
          kind: 'mcq',
          prompt: 'In the fifth state, where may the emphasised verb stand?',
          options: ['As the شرط only', 'As the جزاء only', 'Neither — only after لَمْ', 'Either as the شرط or as the جزاء'],
          correct: 3,
        },
        {
          title: 'يعلمَا وأصلها',
          kind: 'mcq',
          prompt: 'يَحْسَبُهُ الجاهِلُ ما لَمْ يَعْلَمَا. In origin, يَعْلَمَا is:',
          options: ['يَعْلَمَنْ — the light نون turned into an alif at the rhyme', 'A dual verb, يَعْلَمَانِ', 'يَعْلَمُ with a تنوين added', 'An unrelated form, with no نون توكيد involved'],
          correct: 0,
        },
        {
          title: 'إمَّا وغيرها',
          kind: 'mcq',
          prompt: 'إمَّا puts the verb in the second state; any other جزاء particle puts it in the fifth. What accounts for the gap?',
          options: ['The زائدة ما that makes إِنْ emphatic, which draws an emphatic verb after it', 'إمَّا is a طلب particle', 'إمَّا negates the verb', 'إمَّا requires a لام'],
          correct: 0,
        },
        {
          title: 'تعريف الممتنع',
          kind: 'mcq',
          prompt: 'When is the نون ممتنعًا؟',
          options: ['When the verb answers an oath', 'When the verb follows a طلب', 'When the conditions of الواجب fail and none of the other states applies', 'When the verb is مثبت'],
          correct: 2,
        },
        {
          title: 'جواب قسم منفيّ',
          kind: 'mcq',
          prompt: 'تاللهِ لا يَذْهَبُ العُرْفُ بينَ اللهِ والناسِ. Why is the نون barred?',
          options: ['The verb is in the ماضي', 'There is no لام', 'The verb refers to the present', 'The verb answers an oath but is negated'],
          correct: 3,
        },
        {
          title: 'النافي المقدَّر',
          kind: 'mcq',
          prompt: 'In ﴿تَاللَّهِ تَفْتَؤُ تَذْكُرُ يُوسُفَ﴾ there is no visible negative. Why is the نون still barred?',
          options: ['There is no قسم', 'The negative is مقدَّر — the sense is لا تَفْتَؤُ', 'The verb is separated from its لام', 'The verb is حال'],
          correct: 1,
        },
        {
          title: 'متى تجتهدنْ تنجح',
          kind: 'mcq',
          prompt: 'مَتَى تَجْتَهِدَنَّ تَنْجَحْ carries the نون on the شرط, after مَتَى. Under which state does this fall?',
          options: ['الأقلّ — an أداة جزاء other than إمَّا', 'الكثير — an أداة طلب', 'القريب من الواجب — إمَّا الشرطية', 'الممتنع'],
          correct: 0,
        },
        {
          title: 'الفصل باللام',
          kind: 'mcq',
          prompt: 'In ﴿وَلَئِنْ مُتُّمْ أَوْ قُتِلْتُمْ لَإِلَى اللَّهِ تُحْشَرُونَ﴾, what separates the لام from the verb?',
          options: ['سَوْفَ', 'A negative particle', 'Nothing — they are adjacent', 'إِلَى اللَّهِ, a جار ومجرور'],
          correct: 3,
        },
        {
          title: 'يذهب زيد بلا سابق',
          kind: 'mcq',
          prompt: 'An ordinary مضارع with nothing before it, like يَذْهَبُ زَيْدٌ, is ممتنعًا. Why, without invoking any of the three named cases?',
          options: ['None of the five preceding states applies to it', 'It is negated', 'It is separated from a لام', 'It is حال by default'],
          correct: 0,
        },
        {
          title: 'الفاصل في الضحى',
          kind: 'mcq',
          prompt: 'In ﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ﴾, what is the فاصل between the لام and the verb?',
          options: ['A جار ومجرور', 'رَبُّكَ', 'There is none', 'سَوْفَ'],
          correct: 3,
        },
        {
          title: 'ثلاث صور للامتناع',
          kind: 'mcq',
          prompt: 'In how many ways may the نون be ممتنعًا؟',
          options: ['خمس', 'ثلاث', 'أربع', 'اثنتان'],
          correct: 1,
        },
        {
          title: 'مقابلة الشروط',
          kind: 'mcq',
          prompt: 'Each of the three cases of امتناع undoes one condition of الواجب. Which one does حالًا undo?',
          options: ['غير مفصول عن لامه', 'مستقبلًا', 'مثبتًا', 'في جواب قسم'],
          correct: 1,
        },
        {
          title: 'قراءة ابن كثير',
          kind: 'mcq',
          prompt: 'ابن كثير’s reading of ﴿لَا أُقْسِمُ بِيَوْمِ الْقِيَامَةِ﴾ makes the verb:',
          options: ['مستقبلًا, so the نون is required', 'منفيًّا, so the نون is قليل', 'مفصولًا من اللام', 'حالًا, so the نون is barred'],
          correct: 3,
        },
        {
          title: 'سلم الحالات',
          kind: 'mcq',
          prompt: 'Ranking the six states from most to least admitting of the نون, which comes third from the bottom?',
          options: ['الأقلّ', 'الممتنع', 'القليل', 'الكثير'],
          correct: 2,
        },
      ],
    },
  ],
};

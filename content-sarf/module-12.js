// Advanced Sarf — Module 12
// التقسيم الثاني للاسم: المشتقات السبعة (weeks 23–26)

export default {
  id: 'as-12',
  title: 'المشتقات السبعة',
  heading: 'الاسم',
  blurb: 'The seven nouns derived from a verb\'s مصدر: اسم الفاعل (the active participle), اسم المفعول (the passive participle), الصفة المشبهة (the permanent-quality adjective), اسم التفضيل (the noun of comparison), اسما الزمان والمكان (the nouns of time and place), and اسم الآلة (the noun of instrument).',
  lessons: [
    {
      id: 'l1',
      title: 'اسم الفاعل وصيغ المبالغة',
      subtitle: 'The active participle built from the مصدر, and the five صيغ مبالغة patterns that intensify it',
      concepts: [
        {
          heading: 'تعريف اسم الفاعل وبناؤه من الثلاثيّ',
          lines: [
            { html: `The first of the seven nouns derived from the verb, and the one the other six are measured against, is <bdi>اسم الفاعل</bdi> — the active participle, the noun naming the one who carries out an action.`, list: false },
            { box: { title: 'Definition', lines: [
              `هو ما اشْتُقَّ من المصدر المبنيّ للفاعل، لِمَن وقع منه الفعل، أو تَعَلَّقَ به`,
            ] } },
            { html: `اسم الفاعل is a noun derived from the <bdi>مصدر</bdi> (the verbal noun naming the bare action) in its active sense — literally built for the doer (المبنيّ للفاعل) — and it names either the one from whom the action proceeded, or the one to whom the action merely became attached without truly proceeding from him. That second clause is not padding: it is there to cover a word like <bdi>ساقط</bdi> (falling), where the subject does not perform an action so much as have one happen to him, yet ساقط is still counted as an اسم فاعل.`, list: false },
            { box: { title: 'Example', lines: [
              `وهو من الثلاثيّ على وزن فاعِل غالبًا، نحو نَاصِر، وضَارِب، وقَابِل، ومَادّ، وراق، وطاو، وبائع`,
            ] } },
            { html: `From a three-letter root (ثلاثيّ), اسم الفاعل is usually built on the pattern <bdi>فاعِل</bdi>: <bdi>نَاصِر</bdi> (one who helps, from نَصَرَ), <bdi>ضَارِب</bdi> (one who strikes, from ضَرَبَ), <bdi>قَابِل</bdi> (one who accepts, from قَبِلَ). مَادّ, رَاق, طَاو and بَائِع are the same فاعِل pattern after later reshaping by the rules for weak letters (الإعلال) — a different chapter, not needed to recognise the underlying pattern here.`, list: false },
            { box: { title: 'Rule', lines: [
              `فإن كان فعلُه مُعَلًّا أجوف قُلِبَتْ ألفُه همزةً`,
            ] } },
            { html: `If the verb is <bdi>أجوف مُعَلّ</bdi> — hollow, meaning its middle root letter is a weak و or ي that the reshaping rules have already touched — then the ا of the فاعِل pattern turns into a همزة. That is why the participle of بَاعَ (he sold) is <bdi>بَائِع</bdi> rather than the expected بَاوِع: exactly why belongs to the chapter on الإعلال, not to this lesson.`, list: false },
          ],
          exercise: {
            prompt: `In the definition of اسم الفاعل, the clause أو تَعَلَّقَ بِه (or to whom the action became attached) is added to cover which kind of word?`,
            kind: 'mcq',
            options: [
              `a word like ساقط, where the action did not truly proceed from the subject but only attached to him`,
              `the مصدر الميميّ, a differently-derived noun of action`,
              `the اسم المفعول, the passive participle`,
              `the صفة المشبهة, the permanent-quality adjective`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'جدول الاشتقاق من غير فاعِل',
          lines: [
            { html: `Set out by the pattern of the underlying verb, the full picture of how اسم الفاعل is derived looks like this.`, list: false },
            { table: {
              title: 'طريقة اشتقاق اسم الفاعل (How اسم الفاعل is Derived)',
              headers: ['وزن الفعل (Verb Pattern)', 'لازم أو متعدٍّ (Intransitive or Transitive)', 'الصيغة (Resulting Pattern)', 'المثال (Example)'],
              rows: [
                ['فَعَلَ', 'لازم ومتعدٍّ — either', 'فاعِل', 'جالِس، ضارِب'],
                ['فَعِلَ', 'متعدٍّ — transitive', 'فاعِل', 'فاهِم'],
                ['فَعِلَ', 'لازم — intransitive', 'فَعِلٌ / أَفْعَلُ / فَعْلَان', 'فَرِحٌ، أَحْمَرُ، عَطْشَان'],
                ['فَعُلَ', 'لازم — intransitive', 'فَعَلٌ / فَعِيْلٌ', 'بَطَلٌ، كَرِيْمٌ'],
              ],
            } },
            { html: `Most of the ثلاثيّ verb patterns still give a plain فاعِل. Only a لازم verb on فَعِلَ or فَعُلَ breaks away from it — and the reason is meaning, not sound: those two أبواب describe settled states (فَرِحَ, to be joyful; بَطُلَ, to be brave) rather than events unfolding in front of you, so their participles drift toward the same patterns used for lasting qualities elsewhere in this module.`, list: false },
            { box: { title: 'Rule', lines: [
              `ومن غير الثلاثيّ على زِنَة مضارعه، بإبدال حرف المضارعة ميمًا مَضْمُومَةً، وكَسر ما قبل الآخر، كمُدَحْرِج ومُنْطَلِق ومُسْتَخْرِج`,
            ] } },
            { html: `For every verb longer than three letters, there is no new pattern to memorise: take the فعل مضارع (present-tense form), replace its opening letter — the حرف المضارعة (أ, ن, ي, or ت) — with a ميم carrying a ضمة, and put a كسرة on the letter before the last. مُدَحْرِج, مُنْطَلِق, and مُسْتَخْرِج are all built this way. Anything falling outside these patterns is <bdi>سماعيّ</bdi> — heard from the Arabs and memorised individually, not generated by a rule.`, list: false },
          ],
          clarification: `The phrase ولو تقديرًا — even if only by estimation — matters for one detail the table above cannot show. In <bdi>مُشْتَدٌّ</bdi> (from اشْتَدَّ) and <bdi>مُحْتَاجٌ</bdi> (from احْتَاجَ) you cannot actually hear a كسرة before the last letter: the first verb is مضاعف (its last two root letters are identical and fuse together), and the second is أجوف (its middle letter is weak). The كسرة the rule calls for is there in principle — the estimated, underlying vowel — even though nothing in the pronunciation lets you hear it.`,
          exercise: {
            prompt: `مُشْتَدٌّ and مُحْتَاجٌ are built by the غير الثلاثيّ rule, yet you cannot hear a كسرة before their last letter. Why does the rule still count as followed?`,
            kind: 'mcq',
            options: [
              `The كسرة is there تقديرًا (in estimation) — the underlying vowel the rule calls for, even though مضاعف and أجوف verbs hide it from pronunciation`,
              `Because the rule for غير الثلاثيّ verbs is optional, not obligatory`,
              `Because the ميم itself is silent in both words`,
              `Because مُشْتَدٌّ and مُحْتَاجٌ have no مضارع to derive from`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'الشاذّ والوارد على أَفْعَلَ',
          lines: [
            { html: `The rule for غير الثلاثيّ verbs from the previous concept is broken in two opposite directions by a handful of memorised exceptions.`, list: false },
            { box: { title: 'Careful', lines: [
              `وقد شَذَّ من ذلك ثلاثةُ ألفاظ، وهى: أَسْهَبَ فهو مُسْهَب، وأَحْصَنَ فهو مُحْصَن، وأَلْفَجَ بمعنى أَفْلَسَ فهو مُلْفَج، بفتح ما قبل الآخر فيها`,
            ] } },
            { html: `Three words keep the ميم the rule expects, but put a فتحة where the rule calls for a كسرة — so all three look, at a glance, like passive participles (اسم مفعول) while actually meaning active ones. <bdi>أَسْهَبَ</bdi> means to speak at length, giving مُسْهَب (one who talks in detail); <bdi>أَحْصَنَ</bdi> means to fortify a place, or to be chaste, giving مُحْصَن; and <bdi>أَلْفَجَ</bdi> means the same as أَفْلَسَ (to go bankrupt), giving مُلْفَج.`, list: false },
            { box: { title: 'Careful', lines: [
              `وقد جاء من أفعل على فاعِل، نحو أَعْشَبَ المكانُ فهو عَاشِب، وأَوْرَسَ فهو وارس، وأَيْفَعَ الغلامُ فهو يافع، ولا يقال فيها مُفْعِل`,
            ] } },
            { html: `Three more words go the other way entirely: they drop the ميم altogether and take the plain ثلاثيّ pattern فاعِل instead, even though their verbs are غير ثلاثيّ (on أَفْعَلَ). <bdi>أَعْشَبَ المكانُ</bdi> means the place became green with plants, giving عَاشِب rather than the expected مُعْشِب. <bdi>أَوْرَسَ</bdi> means to produce وَرْس, a plant that yields a yellow dye, giving وارس. <bdi>أَيْفَعَ الغلامُ</bdi> means the boy reached puberty, giving يافع. For all three, the form مُفْعِل is not merely rarer — it is simply not said.`, list: false },
          ],
          exercise: {
            prompt: `مُسْهَب, مُحْصَن, and مُلْفَج all break the same rule for building اسم الفاعل from a غير ثلاثيّ verb. What exactly is irregular about them?`,
            kind: 'mcq',
            options: [
              `The letter before the last carries a فتحة where the ordinary rule calls for a كسرة`,
              `They drop the ميم entirely and take the pattern فاعِل instead`,
              `They keep the حرف المضارعة instead of replacing it with a ميم`,
              `They are built from verbs with no مصدر at all`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'صيغ المبالغة الخمسة',
          lines: [
            { html: `اسم الفاعل can itself be reshaped to say not just that someone does something, but that they do it habitually or intensely.`, list: false },
            { box: { title: 'Rule', lines: [
              `وقد تُحَوَّلُ صيغة فاعل للدلالة على الكثرة والمبالغة في الحَدَث، إلى أوزان خمسة مشهورة، تُسَمَّى صِيَغُ المبالغة`,
            ] } },
            { html: `The pattern فاعِل can be reshaped into five well-known patterns, called <bdi>صيغ المبالغة</bdi> (forms of intensification), to show that someone does the action a great deal or does it intensely. This is why اسم المبالغة is treated as part of this same concept rather than as an eighth derived noun of its own: it is the same صيغة reshaped, not a further member of the seven.`, list: false },
            { table: {
              title: 'الخمسة المشهورة (The Five Well-Known Patterns)',
              headers: ['الوزن (Pattern)', 'الضبط (Vowelling)', 'المثال (Example)'],
              rows: [
                ['فَعَّال', 'the ع doubled — تشديد العين', 'أَكَّال (one who eats a great deal), شَرَّاب (one who drinks a great deal)'],
                ['مِفْعال', '—', 'مِنْحار (one who slaughters camels often, for generosity or sacrifice)'],
                ['فَعُول', '—', 'غَفُور (one who forgives a great deal)'],
                ['فَعِيل', '—', 'سميع (one who hears exceedingly well)'],
                ['فَعِل', 'فتحة on the ف, كسرة on the ع', 'حَذِرٌ (one who is exceedingly wary)'],
              ],
            } },
          ],
          exercise: {
            prompt: `Of the five well-known صيغ المبالغة, which one is defined by doubling the middle root letter (تشديد العين)?`,
            kind: 'mcq',
            options: ['فَعَّال, as in أَكَّال and شَرَّاب', 'فَعُول, as in غَفُور', 'فَعِل, as in حَذِرٌ', 'مِفْعال, as in مِنْحار'],
            correct: 0,
          },
        },
        {
          heading: 'السماعيّ من المبالغة، ومسائل اللفظ',
          lines: [
            { html: `Beyond the five well-known patterns, a further set of intensive forms is attested in Arabic speech but not generated by a rule — each one has to be memorised as heard.`, list: false },
            { table: {
              title: 'السماعيّ من صيغ المبالغة (Heard Intensive Patterns)',
              headers: ['الوزن (Pattern)', 'الضبط (Vowelling)', 'المثال (Example)'],
              rows: [
                ['فِعِّيل', 'كسرة on the ف, a doubled ع carrying a كسرة', 'سِكِّير — one much given to drink'],
                ['مِفْعِيل', 'كسرة then سكون', 'مِعْطير — one who perfumes himself heavily'],
                ['فُعَلَة', 'ضمة then فتحة', 'هُمَزَة — one who goads and insults a great deal; لُمَزَة — one who mocks and defames a great deal'],
                ['فاعُول', '—', 'فاروق — one who distinguishes sharply between truth and falsehood'],
                ['فُعَال', 'ضمة on the ف, with the ع either single or doubled', 'طُوّال — exceedingly tall; كُبّار — exceedingly great'],
              ],
            } },
            { box: { title: 'Example', lines: [
              `وبهما قُرِئ قوله تعالى: ﴿وَمَكَرُوا مَكْرًا كُبَّارًا﴾ [نوح: ٢٢]`,
            ] } },
            { html: `"And they schemed a great scheme" — كُبَّارًا in this verse is attested with the ع both doubled and undoubled, confirming that فُعَال tolerates either vowelling.`, list: false },
            { box: { title: 'Careful', lines: [
              `وقد يأتى اسم الفاعل مرادًا به اسم المفعول قليلًا، كقوله تعالى: ﴿فِي عِيشَةٍ رَاضِيَةٍ﴾ [الحاقة: ٢١] أى مَرْضِيَّة`,
              `وقد يأتى فَعِيل مرادًا به فاعِل، كقدير بمعنى قادر. وكذا فَعُول بفتح الفاء، كغفور بمعنى غافر`,
            ] } },
            { html: `Two further notes cut across everything above, and they run in opposite directions. First, an اسم فاعل can occasionally — rarely — carry a passive sense instead of an active one: in "in a well-pleasing life" (فِي عِيشَةٍ رَاضِيَةٍ), the active-looking word رَاضِيَة actually means <bdi>مَرْضِيَّة</bdi>, well-pleased [in], not pleasing in the active sense. Second, the intensive patterns فَعِيل and فَعُول can carry no intensification at all and simply mean the plain active participle: <bdi>قدير</bdi> (very powerful) can mean nothing more than قادر (powerful), and <bdi>غفور</bdi> (one who forgives greatly) can mean nothing more than غافر (one who forgives).`, list: false },
          ],
          clarification: `The two notes above point in opposite directions, and neither is the norm. In ﴿عِيشَةٍ رَاضِيَةٍ﴾, a form built for the active (فاعِل) carries a passive sense — and this use is expressly marked قليلًا, rare. In قدير and غفور, a form built for intensity (فَعِيل, فَعُول) carries only a plain active sense, with no extra intensity implied. So form and meaning do not always track each other exactly in this باب, but the departures are the exception, not the rule.`,
          exercise: {
            prompt: `In ﴿فِي عِيشَةٍ رَاضِيَةٍ﴾ ("in a well-pleasing life"), رَاضِيَة is glossed as meaning مَرْضِيَّة (well-pleased [in]). What does that show?`,
            kind: 'mcq',
            options: [
              `اسم الفاعل may rarely carry the sense of اسم المفعول, the passive participle`,
              `فَعِيل may stand for فاعِل with no added intensity`,
              `صيغ المبالغة are always سماعيّ, heard rather than derived by rule`,
              `اسم المفعول may rarely carry the sense of اسم الفاعل`,
            ],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'اسم الفاعل is derived from which form of the مصدر?', options: ['المصدر المبنيّ للفاعل, the active-sense verbal noun', 'المصدر المبنيّ للمجهول, the passive-sense verbal noun', 'المضارع, the present-tense verb form directly', 'الصفة المشبهة, a different derived noun'], correct: 0 },
        { q: 'From a لازم verb on فَعِلَ (like فَرِحَ), اسم الفاعل may come on which patterns?', options: ['فَعِلٌ، أَفْعَلُ، أو فَعْلَان — as in فَرِحٌ، أَحْمَرُ، عَطْشَان', 'فاعِل only', 'فَعَلٌ وفَعِيْلٌ only', 'مُفْعِل only'], correct: 0 },
        { q: 'From a لازم verb on فَعُلَ (like بَطُلَ), اسم الفاعل comes on which patterns?', options: ['فَعَلٌ وفَعِيْلٌ — as in بَطَلٌ وكَرِيْمٌ', 'فاعِل only', 'أَفْعَلُ وفَعْلَان', 'مِفْعال only'], correct: 0 },
        { q: 'أَيْفَعَ الغلامُ (the boy reached puberty) gives which اسم فاعل?', options: ['يافع — dropping the ميم and taking the ثلاثيّ pattern فاعِل, against the rule for غير الثلاثيّ verbs', 'أَيْفَعُ, keeping the verb pattern intact', 'مُيْفِع, following the ordinary rule', 'مُوفَع, a passive-looking form'], correct: 0 },
        { q: 'The five well-known صيغ المبالغة are:', options: ['فَعَّال، مِفْعال، فَعُول، فَعِيل، فَعِل', 'فاعِل، مُفْعِل، فَعِل، أَفْعَل، فَعْلَان', 'فَعُول، فَعِيل، فِعِّيل، فُعَلَة، فاعُول (the سماعيّ set, not the five well-known ones)', 'فَعَّال، فُعَال، فاعُول، فُعَلَة، مِفْعِيل (a mix of well-known and سماعيّ patterns)'], correct: 0 },
        { q: 'قدير بمعنى قادر (قدير meaning powerful, with no extra intensity) shows that:', options: ['فَعِيل may be used for a plain اسم فاعل with no مبالغة intended', 'فاعِل may be used for اسم مفعول', 'فَعُول is always سماعيّ, never one of the five well-known patterns', 'فَعِيل is always an intensive form and can never mean a plain فاعِل'], correct: 0 },
      ],
      bank: [
        { title: 'ناصِر، ضارِب، قابِل', kind: 'mcq', prompt: 'ناصِر، ضارِب، قابِل illustrate اسم الفاعل built from:', options: ['a ثلاثيّ verb, on the pattern فاعِل', 'a غير ثلاثيّ verb, on the pattern of its مضارع', 'اسم المفعول reshaped for intensity', 'صيغ المبالغة'], correct: 0 },
        { title: 'الفعل الأجوف', kind: 'mcq', prompt: 'When the underlying verb is أجوف مُعَلّ (hollow, with a weak middle letter already reshaped), what happens to the ألف of اسم الفاعل?', options: ['It turns into a همزة — giving بائع rather than باوع', 'It is deleted entirely', 'It turns into a ياء', 'It stays as it is, unaffected'], correct: 0 },
        { title: 'مُدَحْرِج، مُنْطَلِق، مُسْتَخْرِج', kind: 'mcq', prompt: 'From a غير ثلاثيّ verb, اسم الفاعل is formed by:', options: ['replacing the حرف المضارعة of the مضارع with a ميم carrying a ضمة, and giving the letter before the last a كسرة', 'doubling the third root letter and adding an ألف', 'replacing the حرف المضارعة with a تاء', 'putting a ضمة on the fourth letter of the verb'], correct: 0 },
        { title: 'أَسْهَبَ', kind: 'mcq', prompt: 'أَسْهَبَ means:', options: ['to speak in detail, at length', 'to reach puberty', 'to fortify a place', 'to go bankrupt'], correct: 0 },
        { title: 'أَلْفَجَ', kind: 'mcq', prompt: 'أَلْفَجَ carries the same meaning as which other verb?', options: ['أَفْلَسَ — to go bankrupt', 'أَسْهَبَ — to speak at length', 'أَحْصَنَ — to fortify', 'أَعْشَبَ — to become green with plants'], correct: 0 },
        { title: 'أَوْرَسَ', kind: 'mcq', prompt: 'أَوْرَسَ means:', options: ['to produce وَرْس, the plant that yields a yellow dye', 'to reach puberty', 'to fortify a place', 'to become green with grass'], correct: 0 },
        { title: 'أَعْشَبَ المكانُ', kind: 'mcq', prompt: 'أَعْشَبَ المكانُ (the place became green with plants) gives which اسم فاعل?', options: ['عَاشِب — dropping the ميم entirely, against the ordinary rule', 'مُعْشِب — following the ordinary rule for غير الثلاثيّ verbs', 'عَشِبٌ, a ثلاثيّ pattern', 'أَعْشَبُ, keeping the verb form unchanged'], correct: 0 },
        { title: 'لا يقال فيها مُفْعِل', kind: 'mcq', prompt: 'What is said specifically about عَاشِب، وارس، ويافع regarding the expected form مُفْعِل?', options: ['مُفْعِل is not merely rarer for them — it is simply not said at all', 'مُفْعِل is the more common form for them', 'They are only used with مُفْعَل, a passive-looking pattern', 'They belong to صيغ المبالغة, not to اسم الفاعل'], correct: 0 },
        { title: 'أَحْمَرُ وعَطْشَان', kind: 'mcq', prompt: 'أَحْمَرُ (on أَفْعَل) and عَطْشَان (on فَعْلَان) are اسم فاعل forms of which kind of verb?', options: ['a لازم verb on فَعِلَ, describing a settled state rather than an unfolding event', 'a متعدٍّ verb on فَعِلَ', 'a لازم verb on فَعَلَ', 'a متعدٍّ verb on فَعَلَ'], correct: 0 },
        { title: 'بَطَلٌ وكَرِيْمٌ', kind: 'mcq', prompt: 'بَطَلٌ and كَرِيْمٌ are the اسم فاعل forms of which kind of verb?', options: ['a لازم verb on فَعُلَ', 'a لازم verب on فَعِلَ', 'a متعدٍّ verb on فَعَلَ', 'a غير ثلاثيّ verb'], correct: 0 },
        { title: 'مِنْحار', kind: 'mcq', prompt: 'مِنْحار, one of the five well-known صيغ المبالغة, is on which pattern?', options: ['مِفْعال', 'مِفْعِيل, a سماعيّ pattern', 'فِعِّيل, a سماعيّ pattern', 'فاعُول, a سماعيّ pattern'], correct: 0 },
        { title: 'سِكِّير', kind: 'mcq', prompt: 'سِكِّير (one much given to drink) is on the سماعيّ pattern:', options: ['فِعِّيل, كسرة on the ف with a doubled ع', 'مِفْعِيل', 'فُعَال', 'فَعَّال, one of the five well-known patterns'], correct: 0 },
        { title: 'مِعْطير', kind: 'mcq', prompt: 'مِعْطير (one who perfumes himself heavily) is on the سماعيّ pattern:', options: ['مِفْعِيل, كسرة then سكون', 'مِفْعال, one of the five well-known patterns', 'فِعِّيل', 'فُعَلَة'], correct: 0 },
        { title: 'هُمَزَة ولُمَزَة', kind: 'mcq', prompt: 'هُمَزَة and لُمَزَة are on the سماعيّ pattern:', options: ['فُعَلَة, ضمة then فتحة', 'فاعُول', 'فَعُول, one of the five well-known patterns', 'فُعَال'], correct: 0 },
        { title: 'فاروق', kind: 'mcq', prompt: 'فاروق (one who sharply distinguishes truth from falsehood) is on the سماعيّ pattern:', options: ['فاعُول', 'فَعُول, one of the five well-known patterns', 'فُعَال', 'مِفْعال, one of the five well-known patterns'], correct: 0 },
        { title: 'كُبَّارًا', kind: 'mcq', prompt: '﴿وَمَكَرُوا مَكْرًا كُبَّارًا﴾ ("and they schemed a great scheme") shows كُبَّارًا on which سماعيّ pattern?', options: ['فُعَال — ضمة on the ف, with the ع attested both doubled and undoubled', 'فِعِّيل', 'مِفْعِيل', 'فُعَلَة'], correct: 0 },
        { title: 'قراءتا كُبَّار', kind: 'mcq', prompt: 'How is the ع of كُبَّار read in the two attested recitations of this verse?', options: ['Both doubled (تشديد) and undoubled (تخفيف) are attested', 'Only undoubled', 'Only doubled', 'Neither — the ع here is silent'], correct: 0 },
        { title: 'راضية', kind: 'mcq', prompt: 'راضية, in ﴿فِي عِيشَةٍ رَاضِيَةٍ﴾, is explained by the grammarians as meaning:', options: ['مَرْضِيَّة — well-pleased [in], a passive sense despite the active-looking form', 'ذات رضا — possessing contentment', 'a form with no special meaning at all beyond its ordinary reading', 'راضٍ عنها صاحبها — her owner is pleased with her'], correct: 0 },
        { title: 'غفور', kind: 'mcq', prompt: 'غفور بمعنى غافر (غفور meaning one who forgives, with no added intensity) shows that:', options: ['فَعُول with a فتحة on the ف may stand for a plain اسم فاعل with no مبالغة implied', 'فَعُول is always an intensive form and can never mean a plain فاعل', 'اسم الفاعل may stand for اسم مفعول', 'فَعُول is سماعيّ, not one of the five well-known patterns'], correct: 0 },
        { title: 'حَذِرٌ', kind: 'mcq', prompt: 'حَذِرٌ (exceedingly wary) is listed among the five well-known صيغ المبالغة on the pattern:', options: ['فَعِل — فتحة on the ف, كسرة on the ع', 'فَعُول', 'فُعَال', 'فَعِيل'], correct: 0 },
      ],
    },
    {
      id: 'l2',
      title: 'اسم المفعول والصفة المشبهة',
      subtitle: 'The passive participle اسم المفعول, and الصفة المشبهة, the adjective built to show a settled quality',
      concepts: [
        {
          heading: 'اسم المفعول: تعريفه ووزنه من الثلاثيّ',
          lines: [
            { html: `اسم المفعول is the counterpart of اسم الفاعل — built from the other side of the same verb, naming not the one who acts but the one acted upon.`, list: false },
            { box: { title: 'Definition', lines: [
              `هو ما اشْتُقَّ من مصدر المبنيّ للمجهول، لِمَن وقع عليه الفعل`,
            ] } },
            { html: `اسم المفعول is a noun derived from the مصدر built in its passive sense — literally built for the unknown [doer] (المبنيّ للمجهول) — and it names the one on whom the action fell.`, list: false },
            { box: { title: 'Example', lines: [
              `وهو من الثلاثيّ على زنة مَفْعُول، كمَنْصُور، ومَوعود، ومَقُول، ومَبِيع، ومَرْمِيّ، ومَوْقِيّ، ومَطْوِيّ`,
              `أصل ما عدا الأولين: مَقْوُول، ومَبْيُوع، ومَرْمُوي، ومَطْوُوي`,
            ] } },
            { html: `From a ثلاثيّ verb, اسم المفعول is built on the pattern <bdi>مَفْعُول</bdi>: only مَنْصُور and مَوعود show that pattern with nothing changed. The remaining five (مَقُول, مَبِيع, مَرْمِيّ, مَوْقِيّ, مَطْوِيّ) have all been reshaped by الإعلال — the underlying forms مَقْوُول, مَبْيُوع, مَرْمُوي, مَطْوُوي are given above so the same مَفْعُول pattern can still be recognised underneath the reshaping.`, list: false },
            { box: { title: 'Careful', lines: [
              `وقد يكون على وزن فَعِيل، كقَتِيل وجريح`,
              `وقد يجيء مفعول مرادًا به المصدر، كقولهم: ليس لفلان مَعْقُول، وما عنده مَعْلوم: أى عَقْل وعِلم`,
            ] } },
            { html: `Two further uses depart from the pattern in meaning rather than form. First, اسم المفعول may occasionally be built on فَعِيل instead of مَفْعُول: <bdi>قَتِيل</bdi> means مقتول, one who has been killed, and <bdi>جريح</bdi> means مجروح, one who has been wounded — the mirror image of فَعِيل carrying an active sense, noted in the previous lesson. Second, the word مفعول itself can occasionally name the action rather than its object: <bdi>ليس لفلان مَعْقُول</bdi> (so-and-so has no مَعْقُول) means he has no عَقْل, no intellect; and <bdi>ما عنده مَعْلوم</bdi> (he has no مَعْلوم) means he has no عِلْم, no knowledge.`, list: false },
          ],
          exercise: {
            prompt: `ليس لفلان مَعْقُول (so-and-so has no مَعْقُول) is explained as meaning he has no عَقْل [intellect]. What does this show about the word مفعول?`,
            kind: 'mcq',
            options: [
              `مفعول can occasionally stand for the مصدر (the bare action or quality) rather than naming the one acted upon`,
              `مفعول is here functioning as اسم الفاعل`,
              `مفعول is here functioning as الصفة المشبهة`,
              `مفعول is here functioning as اسم الآلة`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'اسم المفعول من غير الثلاثيّ، وبناؤه من اللازم',
          lines: [
            { box: { title: 'Rule', lines: [
              `وأما من غير الثلاثيّ، فيكون كاسم فاعله ولكن بفتح ما قبل الآخِر، نحو مُكْرَم، ومُعَظَّم، ومُسْتَعَان به`,
            ] } },
            { html: `From a غير ثلاثيّ verb, اسم المفعول is built exactly like اسم الفاعل — same reshaping of the حرف المضارعة into a ميم — except for one vowel: where اسم الفاعل takes a كسرة before the last letter, اسم المفعول takes a فتحة.`, list: false },
            { html: `مُكْرَم, مُعَظَّم, and مُسْتَعَان به are all built this way. A single vowel is all that separates the two nouns — and where الإعلال has flattened that vowel away entirely, the distinction between them disappears.`, list: false },
            { box: { title: 'Careful', lines: [
              `وأما نحو مُخْتار ومُعْتَدّ ومُنْصَب ومُحَابّ ومُتَحَابّ، فصالح لاسمَى الفاعل والمفعول، بحسب التقدير`,
            ] } },
            { html: `مُخْتار can mean either the one who chooses or the one who is chosen — only the context decides, because the letter before the last is neither audibly a كسرة nor audibly a فتحة; nothing in the pronunciation tells the two apart.`, list: false },
            { box: { title: 'Rule', lines: [
              `ولا يُصاغ اسم المفعول من اللازم إلا مَعَ الظرف أو الجار والمجرور أو المصدر، بالشروط المتقدمة في المبنيّ للمجهول`,
              `نحو: جُلِسَ / مجلوس يومَ الخميس، جُلِسَ / مجلوس في المسجد، جُلِسَ / مجلوس جلوسٌ طويلٌ`,
            ] } },
            { html: `A لازم verb (one that takes no direct object) has nothing that the action fell upon, so اسم المفعول cannot ordinarily be built from it — unless the sentence supplies a stand-in: (1) a <bdi>ظرف</bdi>, an adverb of time or place, as in <bdi>مجلوس يومَ الخميس</bdi> (sat [on] Thursday), (2) a <bdi>جار ومجرور</bdi>, a prepositional phrase, as in <bdi>مجلوس في المسجد</bdi> (sat in the mosque), or (3) the <bdi>مصدر</bdi> itself, as in <bdi>مجلوس جلوسٌ طويلٌ</bdi> (a long sitting was sat). This is the same restriction met earlier when building the passive verb from a لازم verb, applied here to اسم المفعول instead.`, list: false },
          ],
          clarification: `مُخْتار and its like are ambiguous for a plain reason: in these forms the letter before the last is neither audibly a كسرة (which would mark the اسم فاعل sense) nor audibly a فتحة (which would mark the اسم مفعول sense), because الإعلال has smoothed that vowel away. With no pronunciation cue available, only التقدير — the underlying, estimated vowel implied by context — settles which of the two the word is meant to be.`,
          exercise: {
            prompt: `مُخْتار can mean either the one who chooses (اسم فاعل) or the one who is chosen (اسم مفعول). Why is it ambiguous rather than settled by pronunciation?`,
            kind: 'mcq',
            options: [
              `The vowel that would distinguish كسرة (فاعل) from فتحة (مفعول) has been smoothed away by الإعلال, so only context (التقدير) decides`,
              `Because مُخْتار has two separate roots with two separate meanings`,
              `Because مُخْتار is سماعيّ and follows no rule`,
              `Because مُخْتار is derived from a لازم verb with no مفعول به`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'الصفة المشبهة: تعريفها وبناؤها',
          lines: [
            { html: `The third of the seven derived nouns names the same kind of thing اسم الفاعل names — but differs from it in how long the quality is meant to last.`, list: false },
            { box: { title: 'Definition', lines: [
              `هى لفظٌ مَصُوغٌ من مصدر اللازم، للدلالة على الثُّبوت في صاحبها`,
            ] } },
            { html: `الصفة المشبهة — the resembling adjective — is a word built from the مصدر of a لازم verb, to show that a quality is settled and permanent (الثُّبوت) in whoever holds it. This is the whole point of the باب: <bdi>ضارِب</bdi> names someone striking right now, an event in progress, while <bdi>حَسَن</bdi> names someone who simply is good-looking, a fixed trait rather than an unfolding action.`, list: false },
            { box: { title: 'Rule', lines: [
              `ويغلِب بناؤها من لازم باب فرح (فَعِل)، ومن باب شَرُف (فَعُل)`,
            ] } },
            { html: `الصفة المشبهة is most often built from a لازم verb belonging to one of two أبواب — فَعِل (like فَرِحَ, to be joyful) or فَعُل (like شَرُفَ, to be noble) — and this is not a coincidence: these are exactly the two أبواب whose meanings were already described, in the previous lesson, as naming settled qualities rather than events unfolding in front of you.`, list: false },
            { box: { title: 'Example', lines: [
              `ومن غير الغالب نحو سَيِّد ومَيِّت: من ساد يسود ومات يموت، وشَيْخ: من شاخ يشيخ`,
            ] } },
            { html: `Outside those two favoured أبواب, صفة مشبهة still turns up now and then: <bdi>سَيِّد</bdi> (master) from سَادَ يَسُودُ, <bdi>مَيِّت</bdi> (dead) from مَاتَ يَمُوتُ, and <bdi>شَيْخ</bdi> (elder) from شَاخَ يَشِيخُ — none of these verbs belongs to باب فرح or باب شَرُف, so these forms are memorised as exceptions rather than generated by the rule above.`, list: false },
          ],
          clarification: `Two things separate الصفة المشبهة from اسم الفاعل, and both sit in the definition above. First, it is built only from a لازم verb, so a متعدٍّ verb like ضَرَبَ yields none. Second, it points to الثبوت — the quality settled permanently in its bearer — rather than to an action currently happening. اسم الفاعل can be built from either a لازم or a متعدٍّ verb and always describes an ongoing event; الصفة المشبهة narrows both of those at once.`,
          exercise: {
            prompt: `الصفة المشبهة is built from the مصدر of which kind of verb?`,
            kind: 'mcq',
            options: [
              `a لازم verb — one that takes no direct object`,
              `a متعدٍّ verb — one that takes a direct object`,
              `a جامد verb — one that never changes form`,
              `only a verb already in the passive, المبنيّ للمجهول`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'أوزانها الاثنا عشر',
          lines: [
            { box: { title: 'Rule', lines: [
              `وأوزانها الغالبة فيها اثنا عشر وزنًا`,
            ] } },
            { html: `الصفة المشبهة has twelve commonly-used patterns. Two of them belong only to باب فَرِحَ, four belong only to باب شَرُفَ, and six are shared between the two — the same pattern can arise from either باب, depending on which verb it happens to be built from.`, list: false },
            { table: {
              title: 'اثنان مختصان بباب فَرِحَ (Two Exclusive to باب فَرِحَ)',
              headers: ['الوزن (Pattern)', 'المؤنث (Feminine Form)', 'المثال (Example)'],
              rows: [
                ['أَفْعَل', 'فَعْلَاء', 'أحمر (red, masc.) وحمراء (red, fem.)'],
                ['فَعْلَان', 'فَعْلَى', 'عطشان (thirsty, masc.) وعَطْشَى (thirsty, fem.)'],
              ],
            } },
            { table: {
              title: 'أربعة مختصة بباب شَرُفَ (Four Exclusive to باب شَرُفَ)',
              headers: ['الوزن (Pattern)', 'الضبط (Vowelling)', 'المثال (Example)'],
              rows: [
                ['فَعَل', 'two فتحات', 'حَسَن (good-looking), بَطَل (brave)'],
                ['فُعُل', 'two ضمات — rare', 'جُنُب (in a state of ritual impurity)'],
                ['فُعال', 'ضمة', 'شُجاع (brave), فُرات (sweet-tasting, of water)'],
                ['فَعَال', 'فتحة, undoubled ع', 'رجل جَبَان (a cowardly man), امرأة حَصَان (a chaste woman)'],
              ],
            } },
            { table: {
              title: 'ستة مشتركة بين البابين (Six Shared Between the Two Bāb)',
              headers: ['الوزن (Pattern)', 'المثالان (The Two Examples)', 'أصل كلٍّ منهما (Where Each Comes From)'],
              rows: [
                ['فَعْل', 'سَبْط (tall), ضَخْم (large)', 'سَبْط from سَبِطَ (باب فرح); ضَخْم from ضَخُمَ (باب شَرُفَ)'],
                ['فِعْل', 'صِفْر (empty), مِلْح (salty)', 'صِفْر from صَفِرَ (باب فرح); مِلْح from مَلُحَ (باب شَرُفَ)'],
                ['فُعْل', 'حُرّ (free), صُلْب (hard)', 'حُرّ from an original حَرِرَ (باب فرح); صُلْب from صَلُبَ (باب شَرُفَ)'],
                ['فَعِل', 'فَرِح (joyful), نَجِس (impure)', 'فَرِح from فَرِحَ (باب فرح); نَجِس from نَجُسَ (باب شَرُفَ)'],
                ['فاعل', 'صَاحب (companion), طاهر (pure)', 'صَاحب from صَحِبَ (باب فرح); طاهر from طَهُرَ (باب شَرُفَ)'],
                ['فَعِيل', 'بَخِيل (stingy), كريم (generous)', 'بَخِيل from بَخِلَ (باب فرح); كريم from كَرُمَ (باب شَرُفَ)'],
              ],
            } },
          ],
          exercise: {
            prompt: `Which pair of patterns is exclusive to باب فَرِحَ — meaning neither pattern is ever built from a باب شَرُفَ verb?`,
            kind: 'mcq',
            options: ['أَفْعَل وفَعْلَان', 'فُعال وفَعَال', 'فاعل وفَعِيل', 'فَعَل وفُعُل'],
            correct: 0,
          },
        },
        {
          heading: 'أحكامها',
          lines: [
            { box: { title: 'Careful', lines: [
              `وربما اشترك فاعل وفعيل فى بناءٍ واحد، كماجد ومجيد، ونابه ونبيه`,
              `وقد جاءت على غير ذلك (قليل)، كشَكُسٍ بفتح فضم، لسَيِّء الخُلُقِ`,
            ] } },
            { html: `Sometimes two of the twelve patterns coexist as صفة مشبهة for the very same root and meaning: <bdi>ماجد</bdi> and <bdi>مجيد</bdi> both mean glorious, and <bdi>نابه</bdi> and <bdi>نبيه</bdi> both mean distinguished. And rarely a صفة مشبهة turns up on a pattern outside the twelve altogether: <bdi>شَكُس</bdi> (فتحة then ضمة), meaning ill-tempered.`, list: false },
            { box: { title: 'Rule', lines: [
              `ويطرّد قياسُها من غير الثلاثيّ على زنة اسم الفاعل إذا أُرِيدَ به الثبوت، كمعتدِل القامة، ومنطلِق اللسان`,
              `كما أنها قد تُحَوَّل فى الثلاثيّ إلى زنة فاعل إذا أريد بها التجدُّد والحدوث: نحو زيد شاجعٌ أمسِ، وشارِفٌ غدًا، وحاسِنٌ وجهُهُ`,
            ] } },
            { html: `The traffic between اسم الفاعل and الصفة المشبهة runs in both directions once you leave the twelve fixed patterns behind. Going up: a غير ثلاثيّ verb can be reshaped on the plain اسم فاعل pattern (كسرة before the last letter) and still count as a صفة مشبهة, whenever a settled trait rather than an ongoing event is meant — <bdi>مُنْطَلِق اللسان</bdi> (smooth-tongued) describes someone's manner of speech as a lasting quality, not an event happening right now. Going down: even a ثلاثيّ صفة مشبهة can be recast onto the pattern فاعِل, when the speaker specifically wants to say the quality is newly acquired rather than permanent — <bdi>حاسِنٌ وجهُهُ</bdi> (his face has become good) says the improvement is recent, from good food and cleanliness, for instance, not that beauty is a settled trait of his.`, list: false },
          ],
          clarification: `The last two rules move along the same axis in opposite directions. Going up from the ثلاثيّ, a غير ثلاثيّ صفة مشبهة takes the زنة of اسم الفاعل once الثبوت (permanence) is intended — <bdi>مُعْتَدِل القامة</bdi> (of even stature) is a settled bodily trait, so it stays on the اسم فاعل pattern rather than switching to some other shape. Going the other way, a ثلاثيّ صفة مشبهة is recast on فاعِل once التجدّد والحدوث (newness, an event just happening) is intended instead of الثبوت — which is why <bdi>حاسِنٌ وجهُهُ</bdi> says the face has just been made good by care, not that beauty is settled in it.`,
          exercise: {
            prompt: `مُعْتَدِل القامة (of even stature) is built on the زنة of اسم الفاعل from a غير ثلاثيّ verb, yet it still counts as صفة مشبهة rather than اسم فاعل. Why?`,
            kind: 'mcq',
            options: [
              `الثبوت (a settled, permanent quality) is intended, not an ongoing event`,
              `Its underlying فعل is متعدٍّ, taking a direct object`,
              `Its وزن is سماعيّ, heard rather than generated`,
              `التجدّد والحدوث (a newly acquired quality) is intended`,
            ],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'اسم المفعول is derived from which form of the مصدر?', options: ['مصدر المبنيّ للمجهول, the passive-sense verbal noun', 'مصدر المبنيّ للفاعل, the active-sense verbal noun', 'المضارع المجهول, the passive present-tense form', 'الصفة المشبهة, a different derived noun'], correct: 0 },
        { q: 'The unreshaped underlying form (أصل) of مَبِيع, before الإعلال, is:', options: ['مَبْيُوع', 'مَبُوع', 'مَبْيِيع', 'مُبَاع'], correct: 0 },
        { q: 'اسم المفعول from a غير ثلاثيّ verb differs from اسم الفاعل built the same way in that:', options: ['the letter before the last carries a فتحة instead of a كسرة', 'the ميم carries a فتحة instead of a ضمة', 'the حرف المضارعة is kept instead of replaced', 'the letter before the last carries a ضمة instead of a كسرة'], correct: 0 },
        { q: 'A لازم verb yields an اسم مفعول only when a stand-in for the missing مفعول به is supplied. Which of these can serve as that stand-in?', options: ['الظرف, or الجار والمجرور, or المصدر', 'الحال only', 'التمييز only', 'المفعول المطلق, and nothing else'], correct: 0 },
        { q: 'الصفة المشبهة is built to point to:', options: ['الثُّبوت — a quality settled permanently in its bearer', 'المبالغة في الحدث — intensity in an event', 'الحدوث والتجدّد — a newly-occurring event', 'زمان أو مكان وقوع الفعل — the time or place of the action'], correct: 0 },
        { q: 'حَصَان, describing a woman, on the pattern فَعَال, means:', options: ['chaste', 'beautiful', 'brave', 'tall'], correct: 0 },
      ],
      bank: [
        { title: 'مَنْصُور وموعود', kind: 'mcq', prompt: 'مَنْصُور and مَوعود are examples of:', options: ['اسم المفعول from a ثلاثيّ verb, on the unreshaped pattern مَفْعُول', 'صيغ مبالغة, intensive forms', 'صفات مشبهة', 'اسماء آلة, nouns of instrument'], correct: 0 },
        { title: 'أصل مَقُول', kind: 'mcq', prompt: 'The unreshaped underlying form (أصل) of مَقُول is:', options: ['مَقْوُول', 'مَقَال', 'مُقَال', 'مَقُوول'], correct: 0 },
        { title: 'أصل مَطْوِيّ', kind: 'mcq', prompt: 'The unreshaped underlying form (أصل) of مَطْوِيّ is:', options: ['مَطْوُوي', 'مَطُوي', 'مَطْوِيِي', 'مُطَوّى'], correct: 0 },
        { title: 'منصور وموعود دون سواهما', kind: 'mcq', prompt: 'Of the seven مَفْعُول examples given, which two show the pattern with nothing reshaped by الإعلال?', options: ['مَنْصُور ومَوعود', 'مَوْقِيّ ومَبِيع', 'مَقُول ومَبِيع', 'مَرْمِيّ ومَطْوِيّ'], correct: 0 },
        { title: 'قَتِيل وجريح', kind: 'mcq', prompt: 'قَتِيل and جريح show that اسم المفعول may occasionally be built on which pattern instead of مَفْعُول?', options: ['فَعِيل', 'مِفْعال', 'فَعُول', 'فاعِل'], correct: 0 },
        { title: 'مُسْتَعَان به', kind: 'mcq', prompt: 'مُسْتَعَان به is an اسم مفعول built from:', options: ['a غير ثلاثيّ verb, with a فتحة before the last letter', 'a لازم verb with no stand-in supplied', 'a ثلاثيّ verb, on the pattern مَفْعُول', 'a ثلاثيّ verb, on the pattern فَعِيل'], correct: 0 },
        { title: 'جُلِسَ يوم الخميس', kind: 'mcq', prompt: 'مجلوس يومَ الخميس shows اسم المفعول built from a لازم verb with which stand-in?', options: ['الظرف — an adverb of time', 'الجار والمجرور — a prepositional phrase', 'المصدر — the verbal noun itself', 'الحال — a circumstantial description'], correct: 0 },
        { title: 'جلوس طويل', kind: 'mcq', prompt: 'مجلوس جلوسٌ طويلٌ shows اسم المفعول built from a لازم verb with which stand-in?', options: ['المصدر — the verbal noun itself', 'الجار والمجرور — a prepositional phrase', 'التمييز — a noun of specification', 'الظرف — an adverb of time or place'], correct: 0 },
        { title: 'غلبة بناء الصفة', kind: 'mcq', prompt: 'الصفة المشبهة is most often built from a لازم verb of which two أبواب?', options: ['فَرِحَ وشَرُفَ', 'ضَرَبَ ونَصَرَ', 'فَتَحَ وحَسِبَ', 'كَرُمَ وضَرَبَ'], correct: 0 },
        { title: 'سَيِّد ومَيِّت', kind: 'mcq', prompt: 'سَيِّد and مَيِّت, from ساد يسود and مات يموت, are:', options: ['exceptions built outside the favoured أبواب فرح وشرف', 'built from باب شرف', 'صيغ مبالغة, not صفة مشبهة', 'built from باب فرح'], correct: 0 },
        { title: 'شَيْخ', kind: 'mcq', prompt: 'شَيْخ (elder) is explained as derived from:', options: ['شاخ يشيخ', 'شَخُصَ, a different root', 'تَشَيَّخَ, a reflexive form', 'شَيِخَ, with a كسرة'], correct: 0 },
        { title: 'عدد الأوزان', kind: 'mcq', prompt: 'How many commonly-used patterns (أوزان غالبة) does الصفة المشبهة have?', options: ['اثنا عشر', 'عشرة', 'ستة', 'أربعة عشر'], correct: 0 },
        { title: 'جُنُب', kind: 'mcq', prompt: 'فُعُل, with two ضمات as in جُنُب, is described among the twelve patterns as:', options: ['rare (قليل)', 'exclusive to باب فرح', 'the most common of the twelve', 'shared between the two أبواب'], correct: 0 },
        { title: 'حُرّ', kind: 'mcq', prompt: 'حُرّ, on the shared pattern فُعْل, is said to originate from:', options: ['an original حَرِرَ, with a كسرة, from باب فرح', 'حَرُرَ, with a ضمة, from باب شرف', 'حَرَرَ, with a فتحة', 'a completely unrelated root'], correct: 0 },
        { title: 'صِفْر ومِلْح', kind: 'mcq', prompt: 'صِفْر comes from صَفِرَ with a كسرة, from باب فرح. Where does مِلْح come from?', options: ['مَلُحَ, with a ضمة, from باب شرف', 'مَلِحَ, with a كسرة, from باب فرح', 'أَمْلَحَ, a غير ثلاثيّ verb', 'مَلَحَ, with a فتحة'], correct: 0 },
        { title: 'صاحب وطاهر', kind: 'mcq', prompt: 'صَاحب and طاهر sit on the shared pattern:', options: ['فاعل — shared between باب فرح وباب شرف', 'فَعْل', 'فُعْل', 'فَعِيل'], correct: 0 },
        { title: 'ماجد ومجيد', kind: 'mcq', prompt: 'ماجد and مجيد, both meaning glorious, illustrate what fact about الصفة المشبهة?', options: ['فاعل and فَعِيل can share one build for the same root and meaning', 'فاعل is exclusive to باب شرف', 'الصفة المشبهة is recast to فاعل whenever التجدّد is meant', 'الصفة المشبهة falls outside the twelve fixed patterns altogether here'], correct: 0 },
        { title: 'شَكُس', kind: 'mcq', prompt: 'شَكُس, meaning ill-tempered, is described as:', options: ['a rare صفة مشبهة falling outside the twelve fixed patterns', 'a صيغة مبالغة', 'the standard pattern from which the twelve are derived', 'exclusive to باب فرح'], correct: 0 },
        { title: 'منطلِق اللسان', kind: 'mcq', prompt: 'منطلِق اللسان counts as a صفة مشبهة rather than an اسم فاعل because:', options: ['الثبوت (a settled quality) is intended, even though the form sits on the زنة of اسم الفاعل من غير الثلاثيّ', 'it is built from a متعدٍّ verb', 'its وزن is سماعيّ', 'it is سماعيّ and follows no rule at all'], correct: 0 },
        { title: 'شاجع أمس', kind: 'mcq', prompt: 'زيد شاجعٌ أمسِ recasts a صفة مشبهة onto the pattern فاعِل because:', options: ['التجدّد والحدوث — a newly-occurring quality — is intended, not permanence', 'الوزن here is سماعيّ', 'الثبوت is intended', 'the underlying فعل is متعدٍّ'], correct: 0 },
      ],
    },
    {
      id: 'l3',
      title: 'اسم التفضيل',
      subtitle: 'أَفْعَل, the noun of comparison — its eight conditions, and the three states of its wording and of its meaning',
      concepts: [
        {
          heading: 'تعريفه ووزنه وما خالف القياس',
          lines: [
            { html: `The fourth of the seven derived nouns is اسم التفضيل — the noun of comparison, used to say that one of two things exceeds the other in a shared quality.`, list: false },
            { box: { title: 'Definition', lines: [
              `هو الاسم المَصُوغ من المصدر للدلالة على أن شيئين اشتركا في صفة، وزاد أحدهما على الآخر في تلك الصفة`,
            ] } },
            { html: `اسم التفضيل is a noun built from the مصدر to show two things at once: (1) that two things share a quality, and (2) that one of them exceeds the other in it. Both parts are needed — without a quality genuinely shared by both sides, there is nothing to compare.`, list: false },
            { box: { title: 'Rule', lines: [
              `وقياسه أن يأتي على أَفْعَل، كزيد أكرم من عمرو، وهو أعظم منه`,
            ] } },
            { html: `The regular pattern (القياس) for اسم التفضيل is <bdi>أَفْعَل</bdi>: <bdi>زيد أكرم من عمرو</bdi> (Zayd is more generous than 'Amr), <bdi>هو أعظم منه</bdi> (he is greater than him) — with three exceptions.`, list: false },
            { box: { title: 'Careful', lines: [
              `وخرج عن ذلك ثلاثة ألفاظ، أَتَتْ بغير همزة، وهى خَيْرٌ وشَرٌّ وحَبٌّ، نحو خيرٌ منه، وشرٌّ منه، وقولُه: وَحَبُّ شَيْءٍ إلى الإنسان ما مُنِعَا`,
              `وحُذِفَتْ همزتهن لكثرة الاستعمال، وقد ورد استعمالهن بالهمزة إلى الأصل كقوله: بِلَالُ خَيْرُ النَّاسِ وابْنُ الأَخْيَرِ`,
            ] } },
            { html: `Three words come as اسم تفضيل without a همزة at all: <bdi>خَيْرٌ</bdi> (better), <bdi>شَرٌّ</bdi> (worse), and <bdi>حَبٌّ</bdi> (more beloved), as in خيرٌ منه (better than him), شرٌّ منه (worse than him), and the line of poetry the dearest thing to a person is what he is refused (وَحَبُّ شَيْءٍ إلى الإنسان ما مُنِعَا). Their همزة was not actually absent — it was worn away by heavy, everyday use — and it resurfaces in <bdi>بِلَالُ خَيْرُ النَّاسِ وابْنُ الأَخْيَرِ</bdi> (Bilal is the best of people, and the son of the best man), where الأَخْيَر restores the همزة that خَيْر usually drops.`, list: false },
            { box: { title: 'Example', lines: [
              `وكقراءة بعضهم ﴿يَعْلَمُونَ غَدًا مَنِ الْكَذَّابُ الْأَشَرُّ﴾ [القمر: ٢٦] بفتح الهمزة والشين، وتشديد الراء`,
              `وكقوله صلى الله عليه وسلم: «أَحَبُّ الأعمال إلى الله أدْوَمُها وإن قَلَّ»`,
              `وقيل: حذفُها ضرورة في الأخير، وفى الأولين، لأنهما لا فعلَ لهما، ففيهما شذوذان`,
            ] } },
            { html: `Two more attestations show the same worn-down همزة resurfacing. In one recitation of "they will know tomorrow who is the most insolent liar" (﴿مَنِ الْكَذَّابُ الْأَشَرُّ﴾), الْأَشَرُّ keeps the همزة that شَرّ usually drops. And in the hadith "the most beloved of deeds to الله are the most sustained, even if small" (أَحَبُّ الأعمال إلى الله أدْوَمُها وإن قَلَّ), أَحَبُّ keeps its همزة intact, unlike the worn-down حَبّ. On one grammarian's view, the omission is only a poetic license (ضرورة) in حَبّ, while خَيْر and شَرّ are doubly irregular: they drop the همزة, and — as the next concept explains — they have no simple فعل behind them at all, which is itself the very first of the eight conditions for building اسم التفضيل.`, list: false },
          ],
          exercise: {
            prompt: `Which three words are used as اسم تفضيل without carrying a همزة, even though the pattern أَفْعَل ordinarily requires one?`,
            kind: 'mcq',
            options: [`خَيْر وشَرّ وحَبّ`, `أكرم وأعظم وأفضل — ordinary أَفْعَل forms`, `خير وأحبّ وأشرّ — a mix of dropped and kept همزة forms`, `حبّ وشرّ وأخير — a mix of dropped and kept همزة forms`],
            correct: 0,
          },
        },
        {
          heading: 'الشروط: الأول إلى الثالث',
          lines: [
            { box: { title: 'Rule', lines: [
              `وله ثمانية شروط`,
            ] } },
            { html: `A verb has to meet eight conditions before اسم التفضيل can be built from it on the ordinary pattern أَفْعَل. Where a verb fails one, its comparative sense is not simply abandoned — Arabic has a workaround, described below as each condition comes up.`, list: false },
            { box: { title: 'Rule', lines: [
              `الأول: أن يكون له فِعْلٌ`,
              `وشذّ مما لا فعل له: كهو أَقْمَنُ بكذا، وأَلَصُّ مِنْ شِظَاظٍ، بَنَوْه من قولهم: هو لِصٌّ أي سارق`,
            ] } },
            { html: `The first condition is that a verb must actually exist for اسم التفضيل to be built from. Two exceptions violate this: <bdi>هو أَقْمَنُ بكذا</bdi> (he is more deserving of such-and-such) means أَحَقُّ به, more entitled to it, yet no verb أَقْمَنَ exists behind it. And <bdi>أَلَصُّ مِنْ شِظَاظٍ</bdi> (thievier than شِظَاظ — شِظَاظ being a famous thief of the tribe بني ضبَّة) was built directly from the noun لِصٌّ (thief), with no verb in between at all.`, list: false },
            { box: { title: 'Rule', lines: [
              `الثاني: أن يكون الفعل ثلاثيًّا`,
              `وشذّ: هذا الكلام أَخْصَرُ من غيره، مِنْ اخْتُصِرَ المبنيّ للمجهول، وفيه شذوذ آخر`,
              `إن فُقِدَ هذا الشرط، ذَكَرْنا مصدرَه الحقيقيَّ بعد (أَكْثَرَ) أو (أَشَدَّ). أي هو أَكْثَرُ انطلاقًا`,
            ] } },
            { html: `The second condition is that the verb must be ثلاثيّ (three root letters). <bdi>هذا الكلام أَخْصَرُ من غيره</bdi> (this speech is more concise than another's) breaks this — أَخْصَرُ comes from اخْتُصِرَ, a غير ثلاثيّ, passive verb, so it actually breaks two conditions at once (the eighth condition, met below, bars passive verbs). When a verb is simply too long for أَفْعَل, Arabic works around it: state the verb's actual مصدر after the word <bdi>أَكْثَرَ</bdi> (more) or <bdi>أَشَدَّ</bdi> (more intensely) instead — so he speaks more freely becomes <bdi>هو أَكْثَرُ انطلاقًا</bdi>, literally he is more, in freedom of speech.`, list: false },
            { box: { title: 'Careful', lines: [
              `وسُمِعَ هو أعطاهم بالدَّراهم، وأولاهم للمعروف، وهذا المكان أَقْفَرُ من غيره`,
              `وبعضهم جوَّز بناءَه من أفعل مطلقًا، وبعضهم جوّزه إن كانت الهمزة لغير النَّقْل`,
            ] } },
            { html: `A handful of comparative forms are attested from غير ثلاثيّ verbs beginning with أَفْعَلَ: <bdi>هو أعطاهم بالدَّراهم</bdi> (he gives them the most money), <bdi>أولاهم للمعروف</bdi> (the most devoted to kindness), and <bdi>هذا المكان أَقْفَرُ من غيره</bdi> (this place is emptier than another, from أَقْفَرَ, to become empty). Because forms like these are heard often enough, some grammarians relax the second condition altogether for أَفْعَلَ verbs, and others relax it only when the همزة at the start of the verb is not there to make the verb causative (أي لغير النَّقْل).`, list: false },
            { box: { title: 'Rule', lines: [
              `الثالث: أن يكون الفعل متصرفًا، فخرج عَسَى ولَيْسَ، فليس له أفعل تفضيل`,
            ] } },
            { html: `The third condition is that the verb must be متصرّف — able to appear in more than one tense or mood. The جامد verbs — verbs frozen in a single form, such as عَسَى (perhaps) and لَيْسَ (is not) — are ruled out here for the same reason they are ruled out elsewhere: a verb that never leaves its one shape has no further shape to derive an اسم تفضيل from.`, list: false },
          ],
          clarification: `Whenever a شرط is missing, Arabic repairs the gap with the same device throughout this لسة: state the actual مصدر after أَكْثَر or أَشَدّ. What varies is only whether that مصدر is حقيقيّ (the real, literal مصدر) or مؤوَّل (a reinterpreted مصدر made from أَنْ plus a verb). The حقيقيّ repair serves the second and seventh شرطين (أَكْثَرُ انطلاقًا, أَشَدُّ حُمْرَةً); the مؤوَّل repair, met later, serves the sixth and eighth (أَكْثَرُ أَنْ لا يذهبَ, أَكْثَرُ أَنْ يُضْرَبَ).`,
          exercise: {
            prompt: `أَلَصُّ مِنْ شِظَاظٍ (thievier than شِظَاظ) is irregular against which of the eight شروط for اسم التفضيل?`,
            kind: 'mcq',
            options: [
              `the first — that a فعل must exist to build it from; here it was built directly from the noun لِصٌّ`,
              `the second — that the فعل must be ثلاثيّ`,
              `the third — that the فعل must be متصرفًا`,
              `the fifth — that the فعل must be تامًّا`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'الشروط: الرابع إلى السادس',
          lines: [
            { box: { title: 'Rule', lines: [
              `الرابع: أن يكون حَدَثُهُ قابلًا للتفاوت: فخرج نحو مات وفَنِى، فليس له أفعل تفضيل`,
              `الخامس: أن يكون تامًّا، فخرجت الأفعال الناقصة، لأنها لا تدلّ على الحدث`,
            ] } },
            { html: `The fourth condition is about meaning rather than form: the action named by the verb must admit degrees. <bdi>مَاتَ</bdi> (to die) and <bdi>فَنِيَ</bdi> (to perish) are ruled out because dying admits no degrees at all — nothing can be more dead than something else.`, list: false },
            { html: `The fifth condition rules out الأفعال الناقصة — كان and its sisters — because they carry no genuine حَدَث (event or action) for one party to exceed another in; their role is closer to a copula linking a subject to a description than to naming an action.`, list: false },
            { box: { title: 'Rule', lines: [
              `السادس: ألّا يكون مَنْفِيًّا، ولو كان النفى لازمًا، نحو ما عاج زيد بالدواء، لئلا يلتبس المَنْفِيُّ بالمُثْبِت`,
              `إن فُقِدَ هذا الشرط، ذَكَرْنا مصدرَه المُؤَوَّلَ بعد (أَكْثَرَ) أو (أَشَدَّ). أي هو أَكْثَرُ أَنْ لا يذهبَ إلى المدرسة`,
            ] } },
            { html: `The sixth condition is that the verb must not be negated — even where the negation is inseparable from the verb's meaning, as in <bdi>ما عاج زيد بالدواء</bdi> (Zayd got no benefit from the medicine). The reason is confusion: أَفْعَل carries no mark of negation on its face, so a form built from a negated verb would be indistinguishable from one built from its affirmative counterpart. Where this condition fails, the workaround uses the مصدر مؤوَّل — a reinterpreted مصدر made from أَنْ plus the verb — after أَكْثَرَ or أَشَدَّ: he is more one who does not go to school becomes <bdi>هو أَكْثَرُ أَنْ لا يذهبَ إلى المدرسة</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `مَاتَ (to die) and فَنِيَ (to perish) have no اسم تفضيل at all. Which condition do they fail, and why?`,
            kind: 'mcq',
            options: [
              `the fourth — حَدَثُهما غير قابل للتفاوت: dying and perishing admit no degrees, so nothing can be more dead than something else`,
              `the fifth — they are ناقصة, carrying no genuine حَدَث`,
              `the sixth — they are منفيّة, negated`,
              `the third — they are غير متصرفة, frozen in one form`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'الشرطان السابع والثامن',
          lines: [
            { box: { title: 'Rule', lines: [
              `والسابع: ألّا يكون الوصف منه على أَفْعَل الذى مؤنثه فَعْلَاء، بأن يكون دالًّا على لون، أو عيب، أو حِلْيَة، لأن الصيغة مشغولة بالوصف عن التفضيل`,
            ] } },
            { html: `The seventh condition is that the verb's ordinary descriptive adjective must not already be on the pattern أَفْعَل whose feminine is فَعْلَاء — the pattern used for colours, defects, or physical adornments (a lisp, a limp, and the like). The clash is one of form, not sense: <bdi>أَحْمَر</bdi> is already the word for red, so the same shape cannot also mean redder — the صيغة is already occupied describing the colour itself.`, list: false },
            { box: { title: 'Example', lines: [
              `وأهل الكوفة يصوغونه من الأفعال التي الوصف منها أَفْعَل مطلقًا، وعليه دَرَجَ المتنبى يخاطب الشيب قال:`,
              `ابْعَدْ بَعِدْتَ بَيَاضًا لا بياضَ لَهُ … لأنت أسودُ في عَيْنِي مِنَ الظُّلَمِ`,
              `وقال الرَّضِيّ في شرح القافية: ينبغى المنع في العيوب والألوان الظاهرة، بخلاف الباطنة، فقد يُصاغ من مصدرها، نحو فلان أَبْلَهُ من فلان، وأَرْعَنُ، وأَحْمَقُ منه`,
            ] } },
            { html: `Grammarians disagree on how strict the seventh condition should be. Grammarians of Kufa allow اسم التفضيل to be freely built from any such verb, and the poet المتنبي follows that view addressing his own grey hair: "be gone, may you go far, a whiteness with no true whiteness to it — for you are blacker in my eye than the darkness itself" (لأنت أسودُ في عَيْنِي مِنَ الظُّلَمِ), using أسود directly as a comparative. الرَّضِيّ draws a narrower line: the ban should hold for outward, visible colours and defects, but not for inward ones — so <bdi>أَبْلَهُ</bdi> (more foolish), <bdi>أَرْعَنُ</bdi> (more rash), and <bdi>أَحْمَقُ</bdi> (more stupid) are permitted, since no visible colour word is being displaced by them.`, list: false },
            { box: { title: 'Rule', lines: [
              `إن فُقِدَ هذا الشرط، ذَكَرْنا مصدرَه الحقيقيَّ بعد (أَكْثَرَ) أو (أَشَدَّ). أي هو أَشَدُّ حُمْرَةً`,
              `والثامن: لا يكون مبنيًّا للمجهول ولو صورةً، لئلا يلتبس بالآتى من المبنى للفاعل`,
              `وسُمِعَ شذوذا: هو أَزْهَى من دِيك، وأَشْغَلُ مِنْ ذَاتِ النَّحْيَيْنِ، وكلامٌ أَخْصَرُ من غيره، من زُهِيَ بمعنى تكبر، واخْتُصِرَ، بالبناء للمجهول فيهن`,
              `إن فُقِدَ هذا الشرط، ذَكَرْنا مصدرَه المُؤَوَّلَ بعد (أَكْثَرَ) أو (أَشَدَّ). أي هو أَكْثَرُ أَنْ يُضْرَبَ`,
            ] } },
            { html: `Where the seventh condition fails on the standard view, the workaround again puts the real مصدر after أَكْثَر or أَشَدّ: redder becomes <bdi>أَشَدُّ حُمْرَةً</bdi>, literally more intense in redness. The eighth and final condition is that the verb must not be built for the passive (مبنيًّا للمجهول), even only in appearance — the reasoning matches the sixth condition: أَفْعَل shows no mark of voice, so a form built from a passive verb would be read as if built from the active. Three attested exceptions break it: <bdi>هو أَزْهَى من دِيك</bdi> (prouder than a rooster, from زُهِيَ, he was made proud, a passive verb), <bdi>أَشْغَلُ مِنْ ذَاتِ النَّحْيَيْنِ</bdi> (proverbially, busier than the woman with the two water-skins), and <bdi>كلامٌ أَخْصَرُ من غيره</bdi> (already seen above, also from a passive verb, اخْتُصِرَ). Where this eighth condition fails, the مصدر مؤوَّل workaround applies again: more likely to be struck becomes <bdi>أَكْثَرُ أَنْ يُضْرَبَ</bdi>.`, list: false },
          ],
          clarification: `الرَّضِيّ's note draws a line inside the seventh شرط itself, rather than rejecting it outright: the ban stays fully in force for outward عيوب and ألوان (visible colours and defects), but inward qualities — foolishness, rashness, stupidity — still yield an اسم تفضيل; أهل الكوفة go further and drop the شرط altogether, and المتنبي's line لأنت أسودُ في عَيْنِي is the شاهد (citation) usually given for their view.`,
          exercise: {
            prompt: `هو أَزْهَى من دِيك (prouder than a rooster) is irregular against the eighth condition because زُهِيَ, the verb behind أَزْهَى, is:`,
            kind: 'mcq',
            options: [
              `مبنيّ للمجهول — built for the passive, which the eighth condition bars`,
              `غير ثلاثيّ — longer than three root letters`,
              `منفيّ — negated`,
              `ناقص — one of the incomplete verbs like كان`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'أحواله باعتبار اللفظ',
          lines: [
            { html: `Once built, اسم التفضيل can appear in three different states depending on its wording — bare, مضاف to another noun, or carrying أل — and each state carries its own rule for agreement (المطابقة) and for the preposition مِنْ (than).`, list: false },
            { table: {
              title: 'الحالات الثلاث باعتبار اللفظ (The Three States by Wording)',
              headers: ['الحال (State)', 'الحكم (Ruling)', 'المثال (Example)'],
              rows: [
                ['مُجَرَّدٌ من أل والإضافة — stripped of أل and of إضافة', 'must stay مُفْرَد (singular) and مُذَكَّر (masculine) regardless of what it describes, and must be followed by مِنْ', 'زيدٌ أفضلُ مِنْ عمرو؛ الهنداتُ أفضلُ مِنْ … (even describing a feminine plural, أفضل stays singular masculine)'],
                ['مضافًا إلى نَكِرَةٍ — مضاف to an indefinite noun', 'still stays مفرد and مذكر, but the مضاف إليه itself must agree in number and gender with what is being described', 'زيدٌ أفضلُ طالبٍ؛ الزيدونَ أفضلُ طُلَّابٍ (أفضل itself stays singular; طالبٍ/طُلَّابٍ shifts)'],
                ['مضافًا إلى مَعْرِفَةٍ — مضاف to a definite noun', 'may either stay مفرد ومذكر, or may agree with what it describes — both options are valid', 'الزيدانِ أفضلُ الطلاب (singular) / أفضلا الطلاب (dual, agreeing)'],
                ['مُعَرَّفًا بِأل — carrying أل', 'must agree with what it describes, and مِنْ is not used with it at all', 'زيدٌ الأفضلُ؛ الزيدونَ الأفضلونَ / الأفاضلُ'],
              ],
            } },
            { box: { title: 'Example', lines: [
              `نحو قوله تعالى: ﴿لَيُوسُفُ وَأَخُوهُ أَحَبُّ إِلَى أَبِينَا﴾ [يوسف: ٨]، و﴿أَحَبَّ إِلَيْكُمْ مِنَ اللهِ وَرَسُولِهِ﴾ [التوبة: ٢٤]`,
              `وقد تُحْذَفُ (من) ومَدْخُولُها نحو ﴿وَالْآخِرَةُ خَيْرٌ وَأَبْقَى﴾ [الأعلى: ١٧]، وقد جاء الحذف والإثبات في ﴿أَنَا أَكْثَرُ مِنْكَ مَالًا وَأَعَزُّ نَفَرًا﴾ [الكهف: ٣٤]`,
            ] } },
            { html: `"Joseph and his brother are more beloved to our father" and "more beloved to you than الله and His Messenger" both keep مِنْ after the bare أفعل, exactly as the first row of the table requires. "And the Hereafter is better and more lasting" (وَالْآخِرَةُ خَيْرٌ وَأَبْقَى) drops مِنْ and its object outright — a permitted omission, not an error. The clearest proof that dropping مِنْ is optional rather than forced comes from one verse doing both at once: "I have more wealth than you, and mightier in numbers" (أَنَا أَكْثَرُ مِنْكَ مَالًا وَأَعَزُّ نَفَرًا) keeps مِنْ with أَكْثَر but drops it with أَعَزّ, in the very same sentence.`, list: false },
            { box: { title: 'Example', lines: [
              `وأما قوله تعالى: ﴿وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ﴾ [البقرة: ٤١] فعلى تقدير موصوف محذوف، أى: أولَ فريق`,
              `وإن كانت إضافته لمعرفة: جازت المطابقةُ وعدمُها، كقوله تعالى: ﴿وَكَذَلِكَ جَعَلْنَا فِي كُلِّ قَرْيَةٍ أَكَابِرَ مُجْرِمِيهَا﴾ [الأنعام: ١٢٣]، وقوله: ﴿وَلَتَجِدَنَّهُمْ أَحْرَصَ النَّاسِ عَلَى حَيَاةٍ﴾ [البقرة: ٩٦] بالمطابقة في الأول، وعدمها في الثاني`,
            ] } },
            { html: `"Do not be the first to disbelieve in it" (وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ) looks singular (أوَّلَ) even though several people are being addressed, and the third row of the table above would predict agreement (إضافة to a definite noun). The resolution: a described noun has been dropped and is only understood — <bdi>أوَّلَ فريقٍ</bdi>, the first group [to disbelieve] — so the singular is really agreeing with the hidden فريق, not disagreeing with the plural addressees. Two more verses then show the third row's optionality directly: "thus have We placed in every city the greatest of its criminals" (أَكَابِرَ مُجْرِمِيهَا) shows agreement, أَكَابِر matching the plural مجرميها; while "you will surely find them the most eager of people for life" (أَحْرَصَ النَّاسِ) shows no agreement, أَحْرَص staying singular despite describing الناس. Both are correct, exactly because إضافة to a definite noun leaves المطابقة optional.`, list: false },
          ],
          exercise: {
            prompt: `When اسم التفضيل is مجرَّدٌ من أل والإضافة (stripped of both أل and إضافة), what is required of its wording?`,
            kind: 'mcq',
            options: [
              `it must stay مفردًا مذكرًا regardless of what it describes, and it must be followed by مِنْ`,
              `it must agree in number and gender with what it describes, and مِنْ is never used with it`,
              `it may either agree or stay مفرد, both options being valid`,
              `it must agree only in the مضاف إليه, not in itself`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'أحواله باعتبار المعنى',
          lines: [
            { html: `Beyond its wording, اسم التفضيل carries three possible states by meaning — depending on whether a genuine comparison is intended at all.`, list: false },
            { box: { title: 'Rule', lines: [
              `وله باعتبار المعنى ثلاثُ حالاتٍ أيضًا`,
              `الأولى: ما تَقَدَّمَ شَرْحُهُ: وهو الدلالة على أن شيئين اشتركا في صفة وزاد أحدهما على الآخر فيها`,
              `الثانية: أن يُرادَ به أن شيئًا زاد في صفة نفسه، على شيء آخر في صفته، فلا يكون بينهما وصف مشترك`,
              `الثالثة: أن يراد به ثبوتُ الوصف لمحلّه، من غير نظرٍ إلى تفضيل`,
            ] } },
            { html: `The first state is the definition this لسة opened with: two things share a quality, and one exceeds the other in it. The second state drops the shared quality entirely: <bdi>العسلُ أَحْلَى من الخَلّ</bdi> (honey is sweeter than vinegar) is not comparing two degrees of the same quality — it compares honey's sweetness against vinegar's own, different quality of sourness; there is no single وصف (description) shared between the two things being measured. The third state drops the comparison altogether: <bdi>الناقصُ والأَشَجّ أعدلا بنى مَرْوان</bdi> (النَّاقص and الأَشَجّ are the two most just of the Marwānid dynasty) really means these two are simply just, full stop — with no one else in the family being just at all, so nothing is actually being measured against anything.`, list: false },
            { html: `النَّاقِص here is <bdi>يزيد بن عبد الوليد</bdi>, so nicknamed because he cut back the army's pay; الأَشَجّ is <bdi>عمر بن عبد العزيز</bdi>, so nicknamed from a scar on his head.`, list: false },
          ],
          clarification: `In this third state the form has stopped comparing altogether — <bdi>أعدلا بني مروان</bdi> says these two, and only these two, are just, with no justice anywhere else in the family to measure them against. That absence of comparison is exactly why المطابقة (agreement in number and gender) becomes obligatory in this state, unlike the other two: with nothing being measured, اسم التفضيل behaves like an ordinary adjective instead, which always agrees with what it describes.`,
          exercise: {
            prompt: `العسلُ أَحْلَى من الخَلّ (honey is sweeter than vinegar) belongs to which of the three حالات المعنى of اسم التفضيل?`,
            kind: 'mcq',
            options: [
              `the second — each thing exceeds in its own quality, with no single وصف genuinely shared between them`,
              `the first — two things share one quality, and one exceeds the other in it`,
              `the third — ثبوت الوصف لمحلّه, with no comparison intended at all`,
              `none of the three — this example is شاذّ`,
            ],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'The regular pattern (القياس) of اسم التفضيل is:', options: ['أَفْعَل', 'فَعْلَان', 'مِفْعال', 'فَعِيل'], correct: 0 },
        { q: 'The همزة of خير, شرّ and حبّ was originally there but dropped because of:', options: ['كثرة الاستعمال — heavy, everyday use wearing it away', 'التقاء الساكنين — two consecutive silent letters colliding', 'الوقف — pausing at the end of a sentence', 'مناسبة الياء — matching a nearby ياء'], correct: 0 },
        { q: 'The third condition rules out عَسَى and لَيْسَ because they are not:', options: ['متصرفًا — able to appear in more than one tense or mood', 'مثبتًا — affirmative, not negated', 'مبنيًّا للفاعل — built for the active voice', 'ثلاثيًّا — three root letters'], correct: 0 },
        { q: 'The condition excluding الأفعال الناقصة (كان and its sisters) requires the verb to be:', options: ['تامًّا — carrying a genuine حَدَث, not merely a copula', 'متصرفًا — able to change tense', 'ثلاثيًّا — three root letters', 'مثبتًا — affirmative, not negated'], correct: 0 },
        { q: 'When اسم التفضيل carries أل, the rule is:', options: ['it agrees with what it describes, and مِنْ is not used with it', 'agreement in the مضاف إليه is required, but not in the word itself', 'it must stay مفردًا مذكرًا and be followed by مِنْ', 'both agreement and non-agreement are allowed'], correct: 0 },
        { q: 'الناقص والأَشَجّ أعدلا بنى مروان illustrates which حالة معنى of اسم التفضيل?', options: ['the third — ثبوت الوصف لمحلّه, with no comparison intended', 'the first — two things share a quality, one exceeding the other', 'the second — each side exceeds in its own, different quality', 'this example is شاذّ against one of the eight شروط'], correct: 0 },
      ],
      bank: [
        { title: 'حدّ اسم التفضيل', kind: 'mcq', prompt: 'اسم التفضيل is a noun built from:', options: ['المصدر', 'المضارع', 'الصفة المشبهة', 'اسم المفعول'], correct: 0 },
        { title: 'شاهد حَبّ', kind: 'mcq', prompt: 'وَحَبُّ شَيْءٍ إلى الإنسان ما مُنِعَا (the dearest thing to a person is what he is refused) is cited as an example of:', options: ['حَبّ, one of the three words used as اسم تفضيل with no همزة', 'a violation of the eighth condition', 'إضافة اسم التفضيل to a definite noun', 'the third state of meaning'], correct: 0 },
        { title: 'ابن الأخير', kind: 'mcq', prompt: 'بِلَالُ خَيْرُ النَّاسِ وابْنُ الأَخْيَرِ (Bilal is the best of people, son of the best man) shows:', options: ['that the همزة worn away in خَيْر can resurface, as it also does in الأَخْيَر', 'اسم التفضيل built from a غير ثلاثيّ verb', 'that مِنْ has been dropped along with its object', 'agreement required because أل is present'], correct: 0 },
        { title: 'الأشرّ', kind: 'mcq', prompt: 'The recitation ﴿مَنِ الْكَذَّابُ الْأَشَرُّ﴾, keeping the همزة, shows that:', options: [`شَرّ's ordinarily-dropped همزة can resurface, on the same pattern seen in الأَخْيَر`, `أَشَرّ is a fourth exceptional word with no فعل behind it at all`, `the همزة here exists for causation (النقل), unlike in شَرّ`, `أَشَرّ is built from a غير ثلاثيّ verb`], correct: 0 },
        { title: 'أَحَبُّ فى الحديث', kind: 'mcq', prompt: `«أَحَبُّ الأعمال إلى الله أدْوَمُها وإن قَلَّ» is cited to show that:`, options: [`أَحَبُّ keeps its همزة intact, unlike the worn-down حَبّ`, `حَبّ is always used with its همزة intact`, `أَحَبُّ is built from a غير ثلاثيّ verb`, `أَحَبُّ is a صيغة مبالغة, not اسم تفضيل`], correct: 0 },
        { title: 'الشذوذان', kind: 'mcq', prompt: 'خير and شرّ are said to carry two irregularities (شذوذان) at once. Besides the dropped همزة, what is the second?', options: ['no simple فعل exists for them at all', 'they are منفيّان, negated', 'they are مبنيّان للمجهول, passive in form', 'their وصف is on أَفْعَل whose مؤنث is فَعْلَاء'], correct: 0 },
        { title: 'أَقْمَن', kind: 'mcq', prompt: 'هو أَقْمَنُ بكذا (he is more deserving of such-and-such) means:', options: ['more entitled, more deserving of it', 'more knowledgeable of it', 'harsher towards it', 'busier with it'], correct: 0 },
        { title: 'أَلَصُّ مِنْ شِظَاظٍ: البناء', kind: 'mcq', prompt: 'أَلَصُّ مِنْ شِظَاظٍ was built directly from which word, with no فعل in between?', options: ['the noun لِصّ, thief', 'a غير ثلاثيّ فعل', 'a منفيّ فعل, negated', 'a ناقص فعل, like كان'], correct: 0 },
        { title: 'أَقْفَر', kind: 'mcq', prompt: 'هذا المكان أَقْفَرُ من غيره (this place is ... than another) means the place is:', options: ['emptier', 'more fertile', 'further away', 'more crowded'], correct: 0 },
        { title: 'همزة النقل', kind: 'mcq', prompt: 'The view that allows building اسم التفضيل from أفعل when the همزة is لغير النَّقْل means the همزة is not there for:', options: ['التعدية — making an intransitive verb transitive (causation)', 'السلب — removal, taking something away', 'الوجدان — finding something to have a quality', 'الصيرورة — coming to be in a state'], correct: 0 },
        { title: 'ما عاج بالدواء', kind: 'mcq', prompt: 'ما عاج زيد بالدواء means:', options: ['he got no benefit from the medicine', 'he was not given the medicine', 'he refused to take the medicine', 'he treated himself with the medicine'], correct: 0 },
        { title: 'علّة الشرط السادس', kind: 'mcq', prompt: 'The ban on a منفيّ (negated) verb behind اسم التفضيل exists so that:', options: ['the negated sense is not confused with the affirmative one, since أَفْعَل shows no mark of negation', 'the لازم verb is not confused with the متعدٍّ verb', 'اسم التفضيل is not confused with اسم التعجّب', 'the فاعل sense is not confused with the مفعول sense'], correct: 0 },
        { title: 'علّة الشرط السابع', kind: 'mcq', prompt: 'A verb whose ordinary adjective is already on أَفْعَل with feminine فَعْلَاء (colours, defects) is barred from اسم التفضيل because:', options: ['the pattern is already occupied describing the colour or defect itself', 'its حَدَث is غير قابل للتفاوت, admitting no degrees', 'the فعل is ناقص', 'the فعل is غير متصرف'], correct: 0 },
        { title: 'مذهب الكوفة', kind: 'mcq', prompt: 'On the seventh condition, أهل الكوفة hold that:', options: ['اسم التفضيل may be freely built from such verbs, with no restriction', 'it may never be built from such verbs, without exception', 'it may be built from عيوب ظاهرة but not from ألوان ظاهرة', 'their view matches أهل البصرة exactly'], correct: 0 },
        { title: 'مضاف إلى نكرة', kind: 'mcq', prompt: 'When اسم التفضيل is مضافًا إلى نكرة (مضاف to an indefinite noun), what is required?', options: ['it stays مفردًا مذكرًا, while the مضاف إليه itself must agree with what is described', 'it must be followed by مِنْ', 'it agrees with what it describes, and مِنْ is dropped', 'either agreement or non-agreement is allowed, freely'], correct: 0 },
        { title: 'تفصيل الرضيّ', kind: 'mcq', prompt: 'الرَّضِيّ permits building اسم التفضيل from a colour or defect verb when the quality is:', options: ['باطنة — inward, like foolishness or rashness, not a visible colour or defect', 'ظاهرة — outward and visible', 'both inward and outward, without distinction', 'neither inward nor outward — he bars it entirely'], correct: 0 },
        { title: 'أشغل من ذات النحيين', kind: 'mcq', prompt: 'أَشْغَلُ مِنْ ذَاتِ النَّحْيَيْنِ is irregular against which of the eight conditions?', options: ['the eighth — that the verb must not be مبنيًّا للمجهول, built for the passive', 'the seventh — that the وصف must not already be on أَفْعَل', 'the sixth — that the verb must not be منفيًّا, negated', 'the fourth — that the حَدَث must admit degrees'], correct: 0 },
        { title: 'أول كافر به', kind: 'mcq', prompt: '﴿وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ﴾ appears singular despite addressing several people. How is this explained?', options: ['a described noun (موصوف) has been dropped and is only understood — أولَ فريقٍ', 'the verse is شاذّ and does not follow any of the three states', 'إضافة to a definite noun always forces the singular', 'this shows the third حالة معنى, with no comparison intended'], correct: 0 },
        { title: 'أكابر مجرميها', kind: 'mcq', prompt: '﴿أَكَابِرَ مُجْرِمِيهَا﴾ (agreeing) and ﴿أَحْرَصَ النَّاسِ﴾ (not agreeing) together show:', options: ['that agreement is optional when اسم التفضيل is مضاف to a definite noun', 'that مِنْ and its object have been dropped in both', 'that agreement is obligatory when مضاف to an indefinite noun', 'that agreement is obligatory whenever أل is present'], correct: 0 },
        { title: 'الصيف أحرّ', kind: 'mcq', prompt: 'الصيفُ أحرُّ من الشتاء (summer is hotter than winter) is explained to mean:', options: ['summer and winter share the quality of heat, and summer exceeds winter in it', 'summer is simply hot, and winter has no heat at all', 'summer exceeds in its own quality, with no quality shared with winter', 'summer\'s heat is a settled trait, with no comparison intended'], correct: 0 },
      ],
    },
    {
      id: 'l4',
      title: 'أسماء الزمان والمكان والآلة',
      subtitle: 'مَفْعَل and مَفْعِل, the nouns naming when and where an action happened, and اسم الآلة, the noun of the tool used to do it',
      concepts: [
        {
          heading: 'تعريفهما وزنتهما من الثلاثيّ',
          lines: [
            { html: `The fifth and sixth of the seven derived nouns are treated together, because they share every rule of how they are built and differ only in what they name.`, list: false },
            { box: { title: 'Definition', lines: [
              `هما اسمان مَصُوغَان لزمان وقوع الفعل أو مكانِه`,
            ] } },
            { html: `اسم الزمان and اسم المكان are two nouns built to name either the time an action took place (اسم الزمان) or the place it took place in (اسم المكان).`, list: false },
            { box: { title: 'Rule', lines: [
              `وهما من الثلاثيّ على وزن مَفْعَل بفتح الميم والعين، وسكون ما بينهما، إن كان المضارع مضمومَ العين، أو مفتوحَها، أو معتلَّ اللام مطلقًا`,
              `كمَنْصَرَ، ومَذْهَبَ، ومَرْمًى، ومَوْقًى، ومَسْعًى، ومَقَام، ومَخَاف، ومَرْضَى`,
            ] } },
            { html: `From a ثلاثيّ verb, both take the pattern <bdi>مَفْعَل</bdi> — فتحة on the ميم, فتحة on the ع, nothing between them — whenever the verb's مضارع (present-tense form) carries a ضمة or a فتحة on its middle letter, or whenever the verb is <bdi>معتلّ اللام</bdi> (its final root letter is weak), regardless of the مضارع's vowelling in that last case. Note what actually decides the pattern: not the ماضي (past tense), the way it works for the مصادر, but the vowel on the middle letter of the مضارع.`, list: false },
            { box: { title: 'Rule', lines: [
              `وعلى مَفْعِل بكسر العين، إن كانت عين مضارعه مكسورة، أو كان مثالًا مطلقًا في غير معتلّ اللام`,
              `كمَجْلِس، ومَبِيع، ومَوْعِد، ومَيْسِر، ومَوْجِل`,
              `وقيل إن صحّت الواو في المضارع، كوَجِلَ يَوْجَلُ، فهو من القياس الأوّل`,
            ] } },
            { html: `The alternative pattern, <bdi>مَفْعِل</bdi> (كسرة on the ع), follows the same key: it is used when the مضارع's middle letter carries a كسرة, or when the verb is <bdi>مثال</bdi> (its first root letter is a weak و) — as long as it is not also معتلّ اللام, in which case مَفْعَل reclaims it. So a كسرة on the مضارع gives a كسرة here, and a مثال verb takes the كسرة regardless of its own مضارع — unless its و survives intact into the مضارع (as in وَجِلَ يَوْجَلُ, to be afraid), in which case the first pattern, مَفْعَل, applies instead.`, list: false },
            { table: {
              title: 'اسم الزمان والمكان من الثلاثيّ (اسما الزمان والمكان from a ثلاثيّ Verb)',
              headers: ['المضارع (Present-Tense Form)', 'الوزن (Resulting Pattern)', 'المثال (Example)'],
              rows: [
                ['يَفْعَلُ — middle letter فتحة', 'مَفْعَل', 'مَذْهَب — the place gone to'],
                ['يَفْعُلُ — middle letter ضمة', 'مَفْعَل', 'مَدْخَل — the place entered'],
                ['يَفْعِلُ — middle letter كسرة', 'مَفْعِل', 'مَجْلِس، مَضْرِب — the place sat in / struck'],
                ['معتلّ اللام — weak final letter, any مضارع vowel', 'مَفْعَل', 'مَرْمًى، مَوْقًى — the place thrown to / protected'],
                ['مثال — weak first letter, و lost in the مضارع', 'مَفْعِل', 'مَوْعِد، مَيْسِر — the time promised / the place of gambling'],
              ],
            } },
          ],
          exercise: {
            prompt: `Which condition puts a verb on مَفْعِل (with a كسرة) rather than مَفْعَل (with a فتحة)?`,
            kind: 'mcq',
            options: [
              `the middle letter of its مضارع carries a كسرة, or it is مثالًا (weak first letter) and not also معتلّ اللام`,
              `the verb is أجوف, with a weak middle root letter`,
              `the middle letter of its مضارع carries a ضمة`,
              `the verb is معتلّ اللام, with a weak final root letter`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'زنتهما من غير الثلاثيّ، والتمييز بالقرائن',
          lines: [
            { box: { title: 'Rule', lines: [
              `ومن غير الثلاثيّ: على زنة اسم مفعول، كمُكْرَم ومُسْتَخْرَج ومُسْتَعَان`,
              `ومن هذا يُعْلَمُ أن صيغة الزمان والمكان والمصدر الميميّ واحدة في غير الثلاثيّ، وكذا في بعض أوزان الثلاثيّ`,
              `والتمييز بينها بالقرائن، فإن لم توجد قرينة، فهو صالح للزمان، والمكان والمصدر`,
            ] } },
            { html: `From a غير ثلاثيّ verb, both اسم الزمان and اسم المكان are built on the same pattern as اسم المفعول: مُكْرَم, مُسْتَخْرَج, مُسْتَعَان. This means four separate things — اسم المفعول, اسم الزمان, اسم المكان, and المصدر الميميّ (a further noun of action built on the same pattern) — all end up looking identical from a غير ثلاثيّ verb, and nothing in the word itself tells them apart. <bdi>مُنْقَلَب</bdi> and <bdi>مُغْتَسَل</bdi> are the standard pair of examples given for this from a مزيد فيه verb (a root with letters added to it). With no context to settle which of the four is meant, the word is simply read as capable of any of them — زمان, مكان, or مصدر.`, list: false },
          ],
          clarification: `This is the same kind of ambiguity met earlier with مُخْتار under اسم المفعول, but at a wider scale. There, a single shape served two readings, فاعل and مفعول. Here, a single shape serves three at once — زمان, مكان, and مصدر ميميّ — and only a قرينة (a contextual clue) separates them.`,
          exercise: {
            prompt: `From a غير ثلاثيّ verb, what actually distinguishes اسم الزمان from اسم المكان and from المصدر الميميّ, given that all three share one pattern?`,
            kind: 'mcq',
            options: [
              `القرائن only — context, since the صيغة itself is identical for all three`,
              `the vowel on the letter before the last`,
              `the vowel on the ميم`,
              `the number of letters in the word`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'مَفْعَلَة من الجامد، والمسموع بالكسر',
          lines: [
            { box: { title: 'Rule', lines: [
              `وكثيرًا ما يُصاغ من الاسم الجامد اسم مكان على وزن مَفْعَلَة، بفتح فسكون ففتح، للدلالة على كثرة ذلك الشيء في ذلك المكان`,
              `كمَأْسَدَة، ومَسْبَعَة، ومَطْبَخَة، ومَقْثَأَة، من الأسد، والسَّبُع، والبطِّيخ، والقِثَّاء`,
            ] } },
            { html: `A further pattern, <bdi>مَفْعَلَة</bdi> (فتحة, سكون, then فتحة), is often used to build an اسم مكان showing that a certain thing is plentiful in that place — and unlike everything covered so far, this pattern is built not from a مصدر but directly from a جامد noun (a plain noun, not a verbal one): <bdi>مَأْسَدَة</bdi> (a place teeming with lions) from الأسد (lion), <bdi>مَسْبَعَة</bdi> (a place teeming with predators) from السَّبُع (predator), <bdi>مَطْبَخَة</bdi> (a place full of kitchens) from المطبخ, and <bdi>مَقْثَأَة</bdi> (a place full of cucumbers) from القِثَّاء (cucumber). This is the earlier-noted fact that derivation from a concrete, tangible noun (المحسوسات) is rare — turned here into a regular, productive device.`, list: false },
            { box: { title: 'Careful', lines: [
              `وقد سُمِعت ألفاظٌ بالكسر وقياسها الفتح، كالمَسْجِد: للمكان الذى بُنى للعبادة وإن لم يُسْجَد فيه، والمَطْلِع، والمَسْكِن، والمَنْسِك، والمَنْبِت، والمَرْفِق، والمَسْقِط، والمَفْرِق، والمَحْشِر، والمَجْزِر، والمَظِنّة، والمَشْرِق، والمَغْرِب`,
              `وسُمع الفتح في بعضها، قالوا: مَسْكَن، ومَنْسَك، ومَفْرَق، ومَطْلَع`,
              `وقد جاء من المفتوح العين: المَجْمِع بالكسر`,
              `قالوا: والفتح في كلِّها جائز وإن لم يُسمع`,
            ] } },
            { html: `A long list of words is attested with a كسرة where the ordinary rule from earlier concepts would call for a فتحة: <bdi>المَسْجِد</bdi> (a place built for prayer, even if no one has actually prostrated in it), المَطْلِع (place of rising), المَسْكِن (dwelling), المَنْسِك (place of ritual), المَنْبِت (place of growth), المَرْفِق (facility), المَسْقِط (place of falling), المَفْرِق (parting-point), المَحْشِر (gathering-place), المَجْزِر (slaughterhouse), المَظِنّة (likely place), المَشْرِق (place of sunrise), and المَغْرِب (place of sunset). A shorter list of the very same words is also attested with the expected فتحة after all — <bdi>مَسْكَن</bdi>, <bdi>مَنْسَك</bdi>, <bdi>مَفْرَق</bdi>, <bdi>مَطْلَع</bdi> — and, going the other direction, <bdi>المَجْمِع</bdi> is attested with a كسرة even though its underlying verb should have given it a فتحة by the ordinary rule. The grammarians' final word: the فتحة is permissible throughout this whole list, whether or not it has actually been heard for a given word.`, list: false },
          ],
          exercise: {
            prompt: `مَسْبَعَة, on the pattern مَفْعَلَة, names a place in which:`,
            kind: 'mcq',
            options: [
              `السِّباع (predators) are plentiful`,
              `السِّباع are hunted`,
              `seven things are gathered`,
              `السِّباع are driven away`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'مسألة المَسْجِد',
          lines: [
            { html: `المَسْجِد is the most familiar word on the exception list from the previous concept, and it repays a closer look, because the كسرة and the فتحة turn out to mark two genuinely different meanings, not just two accepted pronunciations of one meaning.`, list: false },
            { box: { title: 'Example', lines: [
              `قال أستاذنا المرحوم الشيخ حسين المَرْصَفِيّ في الوسيلة: هذا إذ لم يكن اسم المكان مضبوطًا، وإلا صحّ الفتح`,
              `كقولك: اسجُد مَسْجَدَ زَيدٍ تَعُدْ عليكَ بَرَكَتُه، بفتح الجيم، أى في الموضع الذى سجَد فيه`,
              `وقال سيبويه: وأما موضعُ السجود فالمسجَد بالفتح لا غير. كأنه أوجب الفتح فيه`,
            ] } },
            { html: `The grammarian الشيخ حسين المَرْصَفِيّ explains that the كسرة, المَسْجِد, is used only when the place in question is not a precisely pinpointed spot — where it is precisely pinpointed, the فتحة becomes correct instead. His example: <bdi>اسجُد مَسْجَدَ زَيدٍ تَعُدْ عليكَ بَرَكَتُه</bdi> (prostrate at [the very spot of] Zayd's prostration, and its blessing will return to you), with a فتحة on the ج, meaning specifically the exact spot where he prostrated. سيبويه states the distinction even more sharply: for the actual spot of prostration, only <bdi>المسجَد</bdi> with a فتحة is correct — effectively making the فتحة obligatory in that narrower sense.`, list: false },
          ],
          clarification: `The كسرة form, المَسْجِد, has settled into the proper name of the building itself, whether or not anyone happens to be prostrating in it right now. Once the meaning narrows down to the exact physical spot where a specific prostration happened, the ordinary rule from the earlier concept reasserts itself, and the فتحة returns — which is exactly what سيبويه treats as obligatory.`,
          exercise: {
            prompt: `On سيبويه's view, موضع السجود (the exact spot of prostration) is expressed as:`,
            kind: 'mcq',
            options: [
              `المَسْجَد, with a فتحة, and no other form is correct for this narrower sense`,
              `المَسْجِد, with a كسرة, and no other form is correct`,
              `either form is equally correct for this sense`,
              `المَسْجَدَة, on the pattern مَفْعَلَة`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'اسم الآلة: تعريفه وأوزانه',
          lines: [
            { html: `The seventh and last of the derived nouns is اسم الآلة — the noun of instrument — and it is the narrowest of the seven: it is built only from a ثلاثيّ verb.`, list: false },
            { box: { title: 'Definition', lines: [
              `هو اسم مَصُوغٌ من مصدر ثلاثيّ، لِما وقع الفعل بواسطته`,
            ] } },
            { html: `اسم الآلة is a noun built from the مصدر of a ثلاثيّ verb, naming the thing by means of which the action was carried out — the tool or instrument.`, list: false },
            { box: { title: 'Rule', lines: [
              `وله ثلاثة أوزان: مِفْعَال، ومِفْعَل، ومِفْعَلَة، بكسر الميم فيها`,
              `نحو: مِفْتاح، ومِنشار، ومِقْراض، ومِخْلَب، ومِبْرَد، ومِشْرَط، ومِكْنَسَة، ومِقْرَعَة`,
              `وقيل: إن الوَزْن الأخير فرعُ ما قبله`,
            ] } },
            { html: `اسم الآلة has three old patterns, and all three carry a كسرة on the ميم — the exact opposite of the مَفْعَل family from the earlier concepts, where the ميم carries a فتحة, which is precisely what keeps the two families of noun apart at a glance. The three are: <bdi>مِفْتاح</bdi> (key), <bdi>مِنشار</bdi> (saw), <bdi>مِقْراض</bdi> (scissors), <bdi>مِخْلَب</bdi> (claw/talon), <bdi>مِبْرَد</bdi> (file), <bdi>مِشْرَط</bdi> (scalpel), <bdi>مِكْنَسَة</bdi> (broom), and <bdi>مِقْرَعَة</bdi> (door-knocker). One view holds that the last pattern, مِفْعَلَة, is simply a branch (فرع) of the one before it, مِفْعَل, rather than an independent third pattern.`, list: false },
            { box: { title: 'Example', lines: [
              `أوزان الجديدة: كفَعَّالَة نحو نَظَّارَة، غَسَّالَة، ثَلَّاجَة. وفَعَّال نحو عَدَّاد وسَخَّان. وفاعول نحو حاسوب`,
            ] } },
            { html: `Modern usage has added three further patterns beyond the three old ones: <bdi>فَعَّالَة</bdi> — نَظَّارَة (eyeglasses), غَسَّالَة (washing machine), ثَلَّاجَة (refrigerator); <bdi>فَعَّال</bdi> — عَدَّاد (meter), سَخَّان (heater); and <bdi>فاعول</bdi> — حاسوب (computer).`, list: false },
          ],
          exercise: {
            prompt: `What do the three old patterns of اسم الآلة — مِفْعَال، مِفْعَل، and مِفْعَلَة — all share?`,
            kind: 'mcq',
            options: [
              `a كسرة on the ميم`,
              `a فتحة on the ميم`,
              `a ضمة on the ميم`,
              `an added ألف before the last letter`,
            ],
            correct: 0,
          },
        },
        {
          heading: 'ما خرج عن القياس، والجموع',
          lines: [
            { box: { title: 'Careful', lines: [
              `وقد خرج عن القياس ألفاظ منها: مُسْعُط، ومُنْخُل، ومُنْصُل، ومُدُقّ، ومُدْهُن، ومُكْحُلَة، ومُحْرُضَة، بضم الميم والعين في الجميع`,
            ] } },
            { html: `Seven words fall outside the three patterns given in the previous concept, all carrying a ضمة on both the ميم and the middle letter instead of a كسرة on the ميم: <bdi>مُسْعُط</bdi> (a vessel for pouring medicine into the nose), <bdi>مُنْخُل</bdi> (sieve), <bdi>مُنْصُل</bdi> (blade), <bdi>مُدُقّ</bdi> (pounder), <bdi>مُدْهُن</bdi> (a container for oil), <bdi>مُكْحُلَة</bdi> (a kohl applicator), and <bdi>مُحْرُضَة</bdi> (a container for a kind of soap).`, list: false },
            { box: { title: 'Careful', lines: [
              `وقد أتى جامدًا على أوزان شتَّى، لا ضابط لها، كالفَأْس، والقَدُوم، والسِّكِّين وهَلُمَّ جَرًّا`,
            ] } },
            { html: `A great many other tool-names are not derived from a verb at all: they are <bdi>جامد</bdi>, plain nouns with no verb behind them and no single pattern governing their shape — <bdi>الفَأْس</bdi> (axe), <bdi>القَدُوم</bdi> (a carpenter's adze for smoothing wood), <bdi>السِّكِّين</bdi> (knife), and so on. This closes the باب where the whole module began — with a reminder that not every noun for a tangible thing is built by a rule.`, list: false },
            { table: {
              title: 'التثنية والجمع (Dual and Plural)',
              headers: ['مُفْرَد (Singular)', 'مُثَنَّى (Dual)', 'جَمْع (Plural)'],
              rows: [
                ['مِفْعَل', 'مِفْعَلَان', 'مَفَاعِل'],
                ['مِفْعَلَة', 'مِفْعَلَتَان', 'مَفَاعِل'],
                ['مِفْعَال', 'مِفْعَالَان', 'مَفَاعِيل'],
              ],
            } },
          ],
          exercise: {
            prompt: `Of the three old patterns of اسم الآلة, which one pluralises to مَفَاعِيل rather than مَفَاعِل?`,
            kind: 'mcq',
            options: ['مِفْعَال', 'مِفْعَل', 'مِفْعَلَة', 'all three pluralise the same way'],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: 'اسما الزمان والمكان are two nouns built to name:', options: ['زمان وقوع الفعل أو مكانه — when or where an action took place', 'من وقع عليه الفعل — the one acted upon', 'آلة وقوع الفعل — the instrument used', 'ثبوت الوصف في صاحبه — a settled quality in its bearer'], correct: 0 },
        { q: 'مَجْلِس is built on the pattern مَفْعِل because its مضارع, يَجْلِسُ, is:', options: ['مكسور العين — its middle letter carries a كسرة', 'معتلّ اللام — its final letter is weak', 'مثالًا معتلّ اللام — weak in both its first and last letters', 'مضموم العين — its middle letter carries a ضمة'], correct: 0 },
        { q: 'From a غير ثلاثيّ verb, اسم الزمان والمكان shares its pattern with:', options: ['اسم المفعول', 'الصفة المشبهة', 'اسم الفاعل', 'صيغ المبالغة'], correct: 0 },
        { q: 'مَقْثَأَة, on the pattern مَفْعَلَة, names a place where:', options: ['القِثَّاء (cucumbers) are plentiful', 'القِثَّاء is sold', 'القِثَّاء is stored for winter', 'القِثَّاء is planted in neat rows'], correct: 0 },
        { q: 'اسم الآلة is built from:', options: ['مصدر ثلاثيّ — the verbal noun of a three-letter verb only', 'اسم المفعول of any verb', 'مصدر غير ثلاثيّ — the verbal noun of a longer verb', 'المضارع directly'], correct: 0 },
        { q: 'مُنْخُل, one of the words falling outside the three regular patterns of اسم الآلة, means:', options: ['a sieve', 'a blade', 'a broom', 'a pounder'], correct: 0 },
      ],
      bank: [
        { title: 'مَذْهَب ومَدْخَل', kind: 'mcq', prompt: 'مَذْهَب and مَدْخَل are built on مَفْعَل because the middle letter of their مضارع carries:', options: ['a فتحة or a ضمة', 'a كسرة', 'no vowel at all', 'a تنوين'], correct: 0 },
        { title: 'مَرْمًى ومَسْعًى', kind: 'mcq', prompt: 'مَرْمًى, مَوْقًى, and مَسْعًى are built on مَفْعَل because their underlying verbs are:', options: ['معتلّة اللام مطلقًا — weak in the final root letter, regardless of the مضارع vowel', 'مضمومة العين في المضارع only', 'مثالات — weak in the first root letter', 'جوامد — nouns with no verb behind them'], correct: 0 },
        { title: 'مَقَام ومَخَاف', kind: 'mcq', prompt: 'مَقَام and مَخَاف fall under which pattern?', options: ['مَفْعَل', 'مَفْعَلَة', 'اسم الآلة', 'مَفْعِل'], correct: 0 },
        { title: 'المثال', kind: 'mcq', prompt: 'مَوْعِد and مَيْسِر take مَفْعِل because their underlying verbs are:', options: ['مثالًا في غير معتلّ اللام — weak in the first root letter, and not also weak in the last', 'معتلّ اللام — weak in the final root letter', 'أجوف — weak in the middle root letter', 'مكسور العين في الماضي — carrying a كسرة in the past tense'], correct: 0 },
        { title: 'مَوْجِل', kind: 'mcq', prompt: 'On the alternative view, وَجِلَ يَوْجَلُ gives مَوْجَل (with a فتحة) rather than مَوْجِل because:', options: ['its و survives intact in the مضارع, so it falls under the first pattern, مَفْعَل', 'its ميم is كسورة', 'its مضارع carries a كسرة on the middle letter', 'its final letter is weak, معتلّ اللام'], correct: 0 },
        { title: 'مُنْقَلَب ومُغْتَسَل', kind: 'mcq', prompt: 'مُنْقَلَب and مُغْتَسَل illustrate اسم الزمان والمكان built from:', options: ['a مزيد فيه verb (root letters added), on the pattern of اسم المفعول', 'اسم الآلة', 'a plain ثلاثيّ verb', 'a جامد noun'], correct: 0 },
        { title: 'اتحاد الصيغ', kind: 'mcq', prompt: 'From a غير ثلاثيّ verb, one single pattern serves which four things at once?', options: ['اسم الزمان، اسم المكان، المصدر الميميّ، and اسم المفعول', 'اسم الزمان and اسم الآلة only', 'اسم المكان and الصفة المشبهة only', 'اسم الفاعل and اسم المفعول only'], correct: 0 },
        { title: 'ضبط مَفْعَلَة', kind: 'mcq', prompt: 'مَفْعَلَة, the pattern that shows abundance of a thing in a place, is vowelled:', options: ['فتحة، سكون، ثم فتحة', 'فتحتان ثم سكون', 'كسرة، سكون، ثم فتحة', 'ضمة، سكون، ثم فتحة'], correct: 0 },
        { title: 'مَأْسَدَة', kind: 'mcq', prompt: 'مَأْسَدَة, a place teeming with lions, is derived from:', options: ['الأسد — the plain noun lion', 'a مصدر meaning to hunt lions', 'الأُسْد, a plural form', 'a verb أَسَدَ with no attested meaning'], correct: 0 },
        { title: 'القثاء والسبع', kind: 'mcq', prompt: 'مَقْثَأَة and مَسْبَعَة are both built from:', options: ['a جامد noun (القِثَّاء, السَّبُع), not from a مصدر', 'a مصدر of a ثلاثيّ verb', 'اسم الفاعل of their respective verbs', 'اسم المفعول of their respective verbs'], correct: 0 },
        { title: 'المَسْجِد', kind: 'mcq', prompt: 'المَسْجِد, with a كسرة, is defined as the place built للعبادة:', options: ['even if no one has actually prostrated in it — it names the building itself', 'only if prostration has actually occurred in it', 'only for the duration of a single prayer', 'only if it is مضبوط, precisely pinpointed as a spot'], correct: 0 },
        { title: 'المَجْمِع', kind: 'mcq', prompt: 'المَجْمِع, with a كسرة, is notable as an exception because its underlying verb\'s middle letter carries:', options: ['a فتحة — so the ordinary rule would predict مَفْعَل, not مَفْعِل', 'a كسرة — matching the ordinary rule exactly', 'no vowel at all', 'a ضمة, also matching the ordinary rule'], correct: 0 },
        { title: 'جواز الفتح', kind: 'mcq', prompt: 'What do the grammarians conclude about the فتحة across the whole list of كسرة exceptions like المَسْجِد؟', options: ['it is permissible throughout, even where it has not actually been heard for a given word', 'it is obligatory for every word on the list', 'it is restricted to المَسْجِد alone', 'it is never permitted, only the كسرة is correct'], correct: 0 },
        { title: 'قول المَرْصَفِيّ', kind: 'mcq', prompt: 'الشيخ حسين المَرْصَفِيّ restricts the كسرة, المَسْجِد, to cases where:', options: ['the place is not مضبوطًا — not a precisely pinpointed exact spot', 'the pattern is مَفْعَلَة, not مَفْعَل or مَفْعِل', 'the underlying verb is ثلاثيّ', 'the place is one everyone already knows'], correct: 0 },
        { title: 'الوزن الأخير فرع', kind: 'mcq', prompt: 'Which of the three old patterns of اسم الآلة is described as a فرع (branch) of the one before it?', options: ['مِفْعَلَة, said to branch from مِفْعَل', 'مِفْعَال', 'مِفْعَل', 'فَعَّالَة, a modern pattern'], correct: 0 },
        { title: 'مِقْراض ومِشْرَط', kind: 'mcq', prompt: 'مِقْراض and مِشْرَط are:', options: ['scissors and a scalpel', 'a scalpel and scissors', 'a broom and a file', 'a door-knocker and a sieve'], correct: 0 },
        { title: 'الأوزان الجديدة', kind: 'mcq', prompt: 'نَظَّارَة، غَسَّالَة، ثَلَّاجَة are examples of the modern pattern:', options: ['فَعَّالَة', 'مِفْعَلَة', 'فَعَّال', 'فاعول'], correct: 0 },
        { title: 'حاسوب', kind: 'mcq', prompt: 'حاسوب, computer, is on the modern pattern:', options: ['فاعول', 'فَعَّال', 'فَعَّالَة', 'مِفْعَال'], correct: 0 },
        { title: 'ضبط الخارج عن القياس', kind: 'mcq', prompt: 'مُسْعُط، مُنْخُل، مُدُقّ and their like, falling outside the three regular patterns, all carry:', options: ['a ضمة on both the ميم and the middle letter', 'a ضمة on the ميم and a فتحة on the middle letter', 'a كسرة on the ميم and a فتحة on the middle letter', 'a فتحة on both the ميم and the middle letter'], correct: 0 },
        { title: 'الجوامد', kind: 'mcq', prompt: 'الفَأْس، القَدُوم، السِّكِّين are tool-names that:', options: ['are جامدة — plain nouns with no verb behind them, following no single pattern', 'all sit on مِفْعَال', 'all sit on مِفْعَلَة', 'all belong to the three modern patterns'], correct: 0 },
      ],
    },
  ],
};

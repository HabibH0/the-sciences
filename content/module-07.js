// Module 07 — حروف العطف والجواب والتأكيد والشرط (غير العاملة)
//
// Content is adapted from the first half of a bilingual Anki deck
// (النَحْوُ__2 الْعَامِلِ وَغَيْرِ الْعَامِلِ__2 الْحَرْفِ__2 الحرف غير العامل.apkg,
// 109 notes total) prepared for this conversion. That single source deck was
// split into two modules (07 and 08) at the midpoint by note count — 54
// notes here, 55 in Module 08 — landing exactly on the boundary between its
// "٠4 أحرف الشرط" and "٠5 التوبيخ والتحضيض والعرض" sub-decks, so the split
// falls on a natural topic break rather than mid-topic. Concept bodies are
// short by design (a sentence or two, not teaching prose); quiz/bank
// question text is English with Arabic grammatical terms left in Arabic.
//
// This module covers the first four of ten حروف غير عاملة families (§2 of
// الحرف, itself §2 of العامل وغير العامل): أحرف العطف (the nine
// non-governing conjunctions), أحرف الجواب (response particles), أحرف
// التأكيد (non-governing emphasis particles), and أحرف الشرط (لو، لولا،
// لوما، أمّا — conditional particles that do NOT cause جزم, unlike إنْ and
// its sisters in Module 06).

export default {
  id: '07',
  title: 'العطف وما بعده',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف غير العامل',
  blurb: 'The nine أحرف العطف, plus the particles of response, emphasis, and non-governing condition.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'أحرف العطف',
      subtitle: 'Conjunctions — what each of the nine أحرف العطف signifies',
      sourceRef: 'pp. 81–86',
      concepts: [
        {
          heading: 'أحرف العطف التسعة، ومعنى الواو',
          lines: [
            { html: `There are nine <bdi>أَحْرُفُ الْعَطْفِ غَيْرِ الْعَامِلَة</bdi>:`, list: false },
            { html: `<bdi>الْوَاو، الْفَاء، ثُمَّ، حَتَّى، أَوْ، أَمْ، لَا، بَل، لَكِنْ</bdi>`, list: true, bullet: true },
            { html: `<bdi>الْوَاو</bdi> signifies <bdi>الْجَمْعَ مُطْلَقًا</bdi> — absolute joining, saying nothing about order or simultaneity, as in ﴿أَطِيعُوا اللَّهَ وَالرَّسُولَ﴾.`, list: false },
            { html: `In جَاءَ زَيْدٌ وَعَمْرٌو, they may have come together or separately, in either order — الواو is silent on <bdi>الْمَعِيَّة</bdi> and <bdi>التَّرْتِيب</bdi>, though either may still be understood from context (قَرِينَة).`, list: false },
          ],
          exercise: {
            prompt: `What does حرف العطف الواو signify؟`,
            kind: 'mcq',
            options: ['الجمع مطلقا — joining, with no indication of order or simultaneity', 'الجمع مع الترتيب والتعقيب — joining with immediate order', 'الجمع مع الترتيب والتراخي — joining with delayed order', 'الغاية والتدريج — an endpoint reached gradually'],
            correct: 0,
          },
        },
        {
          heading: 'الفاء: الترتيب والتعقيب، والسببية',
          lines: [
            { html: `<bdi>الْفَاء</bdi> signifies <bdi>الْجَمْعَ مَعَ التَّرْتِيبِ وَالتَّعْقِيب</bdi> — joining with order and immediate succession, as in آمَنَتْ خَدِيجَةُ فَأَبُو بَكْرٍ — though <bdi>التَّعْقِيب</bdi> is relative to the action (تَعْقِيبُ كُلِّ شَيْءٍ بِحَسَبِهِ): the gap in سَافَرْتُ إِلَىٰ مَكَّةَ فَالْمَدِينَةِ is naturally longer than in دَخَلَ زَيْدٌ الدَّارَ فَعَمْرٌو.`, list: false },
            { html: `Between two جمل, الفاء can mark:`, list: false },
            { html: `temporal order`, list: true, bullet: true },
            { html: `order of mention (تَرْتِيب ذِكْرِي, detail after summary)`, list: true, bullet: true },
            { html: `causation (السَّبَب) — running either direction: what follows can be the cause of what precedes (فاء ≈ لام, "because"), as in ﴿وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ﴾; or what precedes can be the cause of what follows ("therefore"), as in ﴿إِنَّكُمْ ظَلَمْتُمْ أَنْفُسَكُمْ بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوبُوا إِلَىٰ بَارِئِكُمْ﴾`, list: true, bullet: true },
            { html: `<bdi>الْفَاءُ الْفَصِيحَة</bdi> is a فاء before which the cause itself (the مَعْطُوفٌ عَلَيْه) has been omitted, as in ﴿فَقُلْنَا اذْهَبَا إِلَى الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِنَا فَدَمَّرْنَاهُمْ تَدْمِيرًا﴾ (they went, [the people] denied, so We destroyed them).`, list: false },
          ],
          exercise: {
            prompt: `Is the immediacy (التعقيب) of الفاء absolute, the same length in every sentence؟`,
            kind: 'mcq',
            options: ['No — تعقيب كل شيء بحسبه, immediacy is relative to the action described', 'Yes, it is always instantaneous with zero gap', 'No, الفاء never indicates any order at all', 'Yes, but only in Qurʾānic Arabic'],
            correct: 0,
          },
        },
        {
          heading: 'ثمّ',
          lines: [
            { html: `<bdi>ثُمَّ</bdi> signifies <bdi>الْجَمْعَ مَعَ التَّرْتِيبِ وَالتَّرَاخِي</bdi> — joining with order and delay, as in آمَنَ عَلِيٌّ ثُمَّ عُمَرُ.`, list: false },
            { html: `Between two جمل it can mark temporal order (﴿ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ثُمَّ إِلَيْهِ تُرْجَعُونَ﴾), or order of mention (≈ "furthermore"), where the conjoined جملة outranks what came before (﴿فَإِلَيْنَا مَرْجِعُهُمْ ثُمَّ اللَّهُ شَهِيدٌ عَلَىٰ مَا يَفْعَلُونَ﴾).`, list: false },
          ],
          exercise: {
            prompt: `What does حرف العطف ثمّ signify, and how does it differ from الفاء؟`,
            kind: 'mcq',
            options: ['الجمع مع الترتيب والتراخي — joining with order, but delay rather than immediacy', 'الجمع مع الترتيب والتعقيب, exactly like الفاء with no difference', 'الجمع مطلقا, with no order implied at all', 'الشك بعد الخبر'],
            correct: 0,
          },
        },
        {
          heading: 'حتى العاطفة',
          lines: [
            { html: `<bdi>حَتَّى</bdi> signifies <bdi>الْغَايَةَ وَالتَّدْرِيج</bdi> — the endpoint (the last part of a thing) reached gradually.`, list: false },
            { html: `Its معطوف must satisfy two conditions:`, list: false },
            { html: `be part (جُزْء) of the معطوف عليه — ✓ أَكَلْتُ السَّمَكَةَ حَتَّىٰ رَأْسَهَا, ✗ أَكَلْتُ السَّمَكَةَ حَتَّى الْفَاكِهَةَ`, list: true, bullet: true },
            { html: `be its last part, either literally (حَقِيقَةً, as in قَرَأْتُ الْقُرْآنَ حَتَّىٰ سُورَةِ النَّاسِ) or by status (حُكْمًا) — in strength (مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءُ), or in insignificance (قَدِمَ الْحُجَّاجُ حَتَّى الْمُشَاةُ)`, list: true, bullet: true },
            { html: `Like الواو, حتى العاطفة does <b>not</b> indicate <bdi>التَّرْتِيبَ الزَّمَنِيّ</bdi>. Its غاية can be of time, place, or rank, as in ﴿سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ﴾, مَشَيْتُ حَتَّىٰ بَابِ الْمَسْجِدِ, and مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءُ.`, list: false },
            { html: `It is told apart from حتى الجارة by two things: the معطوف must be part of what precedes (the مجرور need only be connected, as in صُمْتُ رَمَضَانَ حَتَّىٰ يَوْمِ الْفِطْرِ — necessarily جارة, since العيد is not part of الصوم), and the معطوف always shares the قبله's ruling, while the مجرور only shares it absent contrary evidence, as in سِرْتُ النَّهَارَ حَتَّى الْعَصْرِ.`, list: false },
          ],
          exercise: {
            prompt: `What are the two conditions on the معطوف of حتى؟`,
            kind: 'mcq',
            options: ['It must be a جزء of the معطوف عليه, and it must be its last part (حقيقة or حكما)', 'It must always be a whole separate اسم, unrelated to what precedes it', 'It must always be a جملة, never a single مفرد', 'It must always denote time, never place or rank'],
            correct: 0,
          },
        },
        {
          heading: 'أو وأم',
          lines: [
            { html: `<bdi>أَوْ</bdi> has three uses:`, list: false },
            { table: { headers: ['Use', 'Example'], rows: [
              ['الشَّكُّ بَعْدَ الْخَبَر — doubt after a statement', '﴿وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَىٰ هُدًى﴾'],
              ['التَّخْيِيرُ بَعْدَ الْأَمْر — choice after a command', '﴿فَفِدْيَةٌ مِنْ صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ﴾'],
              ['joining after نفي or prohibition', '﴿وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا﴾'],
            ] } },
            { html: `<bdi>أَمْ</bdi> — restricted to الاستفهام and what carries its meaning — has two uses:`, list: false },
            { table: { headers: ['Use', 'Example'], rows: [
              ['طَلَبُ التَّعْيِين — requesting specification', '﴿أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ﴾'],
              ['التَّسْوِيَة — equalisation', '﴿سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ﴾'],
            ] } },
          ],
          exercise: {
            prompt: `What is أم restricted to, and what are its two uses؟`,
            kind: 'mcq',
            options: ['Restricted to الاستفهام (and what carries its meaning); its uses are طلب التعيين and التسوية', 'Restricted to الأمر only; its uses are التخيير والشك', 'It has no restriction at all and can open any جملة', 'Restricted to النفي; its uses are التوكيد والاستدراك'],
            correct: 0,
          },
        },
        {
          heading: 'لا وبل ولكن وإمّا',
          lines: [
            { html: `<bdi>لَا</bdi> negates the ruling from the معطوف, as in اعْمَلْ صَالِحًا لَا سَيِّئًا, on condition it is preceded by affirmation or command; if preceded instead by نفي or prohibition, الواو becomes obligatory and لا becomes <bdi>زَائِدَة</bdi>, as in ﴿وَلَنْ تَرْضَىٰ عَنْكَ الْيَهُودُ وَلَا النَّصَارَىٰ﴾.`, list: false },
            { html: `لا must be repeated with الواو when it enters a negated خبر, a negated نعت (﴿لَا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ﴾), or a negated حال.`, list: false },
            { html: `<bdi>بَلْ</bdi> signifies <bdi>الْإِضْرَاب</bdi> (turning away): after affirmation/command it strips the ruling from what precedes and gives it to what follows (صُمِ الْيَوْمَ بَلْ غَدًا); after نفي/prohibition it confirms what precedes and assigns the opposite to what follows (لَا تَصُمِ الْيَوْمَ بَلْ غَدًا).`, list: false },
            { html: `<bdi>لَكِنْ</bdi> signifies <bdi>الِاسْتِدْرَاك</bdi> — what follows contradicts what precedes, as in مَا جَاءَ زَيْدٌ لَكِنْ خَالِدٌ — on two conditions: preceded by نفي/prohibition, and not accompanied by الواو (if الواو is present, لكن is زائدة).`, list: false },
            { html: `<bdi>إِمَّا</bdi>, on the sounder view, is <b>not</b> حرف عطف at all, though it resembles أو and أم in meaning; it only occurs repeated, as in ﴿إِمَّا شَاكِرًا وَإِمَّا كَفُورًا﴾, or paired with أو standing in for the second إما.`, list: false },
          ],
          exercise: {
            prompt: `What happens to لا (العاطفة) when it is preceded by نفي or prohibition rather than affirmation؟`,
            kind: 'mcq',
            options: ['الواو becomes obligatory, and لا itself becomes زائدة', 'Nothing changes — لا behaves identically in every case', 'لا converts into لكن automatically', 'لا can no longer be used at all in that context'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أحرف العطف غير العاملة are there؟',
          options: ['تسعة', 'سبعة', 'ثمانية', 'عشرة'],
          correct: 0,
        },
        {
          q: 'حرف العطف الفاء signifies:',
          options: ['الجمع مع الترتيب والتعقيب', 'الجمع مطلقا', 'الجمع مع الترتيب والتراخي', 'الغاية والتدريج'],
          correct: 0,
        },
        {
          q: '﴿ثُمَّ يُمِيتُكُمْ ثُمَّ يُحْيِيكُمْ ثُمَّ إِلَيْهِ تُرْجَعُونَ﴾ illustrates ثم marking:',
          options: ['temporal order', 'order of mention only', 'causation', 'doubt'],
          correct: 0,
        },
        {
          q: 'أَكَلْتُ السَّمَكَةَ حَتَّى الْفَاكِهَةَ is invalid because الفاكهة is not:',
          options: ['a جزء of السمكة', 'مذكر', 'معرفة', 'مجرورة'],
          correct: 0,
        },
        {
          q: "﴿سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ﴾ illustrates أم's use of:",
          options: ['التسوية', 'طلب التعيين', 'التخيير', 'الشك'],
          correct: 0,
        },
        {
          q: 'إمّا, on the sounder view, is:',
          options: ['not حرف عطف at all, despite resembling أو/أم in meaning', 'the strongest of all أحرف العطف', 'exclusively a حرف جر', 'identical in every respect to أم'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'التسعة بالاسم',
          kind: 'mcq',
          prompt: 'List the nine أحرف العطف غير العاملة.',
          options: ['الواو، الفاء، ثم، حتى، أو، أم، لا، بل، لكن', 'الواو، من، إلى، عن، على، في، الباء، اللام، الكاف', 'إنْ، إذما، لو، لولا، لوما، أمّا، لم، لما', 'هل، الهمزة، ما، من، أي، كيف، متى'],
          correct: 0,
        },
        {
          title: 'الواو ومعية الفعلين',
          kind: 'mcq',
          prompt: 'جَاءَ زَيْدٌ وَعَمْرٌو — الواو here says whether they came together or separately:',
          options: ['nothing at all — it is silent on that', 'they definitely came together', 'they definitely came separately', 'زيد definitely came first'],
          correct: 0,
        },
        {
          title: 'الفاء الفصيحة',
          kind: 'mcq',
          prompt: 'الفاء الفصيحة is a فاء before which:',
          options: ['the cause itself (المعطوف عليه) has been omitted', 'the معطوف has been omitted', 'a قسم has been omitted', 'nothing at all has been omitted'],
          correct: 0,
        },
        {
          title: 'فاء السبب: تعليل',
          kind: 'mcq',
          prompt: '﴿وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ﴾ — الفاء here means:',
          options: ['because (فاء ≈ لام)', 'therefore', 'then, immediately', 'furthermore'],
          correct: 0,
        },
        {
          title: 'فاء السبب: نتيجة',
          kind: 'mcq',
          prompt: '﴿إِنَّكُمْ ظَلَمْتُمْ أَنْفُسَكُمْ بِاتِّخَاذِكُمُ الْعِجْلَ فَتُوبُوا إِلَىٰ بَارِئِكُمْ﴾ — الفاء here means:',
          options: ['therefore', 'because', 'unless', 'while'],
          correct: 0,
        },
        {
          title: 'ثم للترتيب الذكري',
          kind: 'mcq',
          prompt: '﴿فَإِلَيْنَا مَرْجِعُهُمْ ثُمَّ اللَّهُ شَهِيدٌ عَلَىٰ مَا يَفْعَلُونَ﴾ illustrates ثم marking:',
          options: ['ترتيب ذكري (rank, not time)', 'ترتيب زمني بحت', 'السببية', 'الشك'],
          correct: 0,
        },
        {
          title: 'شرط حتى: جزئية المعطوف',
          kind: 'mcq',
          prompt: 'أَكَلْتُ السَّمَكَةَ حَتَّىٰ رَأْسَهَا is valid because رأسها is:',
          options: ['جزء من السمكة', 'آخر جزء منها فقط', 'معرفة', 'مجرورة'],
          correct: 0,
        },
        {
          title: 'حتى: آخر جزء بالقوة',
          kind: 'mcq',
          prompt: 'مَاتَ النَّاسُ حَتَّى الْأَنْبِيَاءُ shows the معطوف being the "last part" حكما, by:',
          options: ['قوة (strength/greatness)', 'ضعف (weakness)', 'زمان', 'مكان'],
          correct: 0,
        },
        {
          title: 'حتى: آخر جزء بالضعف',
          kind: 'mcq',
          prompt: 'قَدِمَ الْحُجَّاجُ حَتَّى الْمُشَاةُ shows the معطوف being the "last part" حكما, by:',
          options: ['ضعف (weakness/insignificance)', 'قوة (strength)', 'رتبة عالية', 'زمان'],
          correct: 0,
        },
        {
          title: 'حتى لا ترتب زمنيا',
          kind: 'mcq',
          prompt: 'Does حتى العاطفة indicate temporal order (الترتيب الزمني)?',
          options: ['No, like الواو', 'Yes, always', 'Only in the Qurʾān', 'Only with places, never times'],
          correct: 0,
        },
        {
          title: 'حتى العاطفة أم الجارة؟',
          kind: 'mcq',
          prompt: 'صُمْتُ رَمَضَانَ حَتَّىٰ يَوْمِ الْفِطْرِ — حتى here must be:',
          options: ['جارة, since العيد is not a جزء من الصوم', 'عاطفة, since العيد is a جزء منه', 'both readings work equally', 'neither — حتى is invalid here'],
          correct: 0,
        },
        {
          title: 'أو: الشك بعد الخبر',
          kind: 'mcq',
          prompt: "﴿وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَىٰ هُدًى﴾ illustrates أو's use of:",
          options: ['الشك بعد الخبر', 'التخيير بعد الأمر', 'الجمع بعد نفي', 'التسوية'],
          correct: 0,
        },
        {
          title: 'أو: التخيير بعد الأمر',
          kind: 'mcq',
          prompt: "﴿فَفِدْيَةٌ مِنْ صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ﴾ illustrates أو's use of:",
          options: ['التخيير بعد الأمر', 'الشك بعد الخبر', 'التسوية', 'طلب التعيين'],
          correct: 0,
        },
        {
          title: 'أم: طلب التعيين',
          kind: 'mcq',
          prompt: "﴿أَأَرْبَابٌ مُتَفَرِّقُونَ خَيْرٌ أَمِ اللَّهُ الْوَاحِدُ الْقَهَّارُ﴾ illustrates أم's use of:",
          options: ['طلب التعيين', 'التسوية', 'التخيير', 'الشك'],
          correct: 0,
        },
        {
          title: 'شرط لا العاطفة',
          kind: 'mcq',
          prompt: 'For لا العاطفة to negate the ruling from its معطوف, what must precede it?',
          options: ['إثبات or أمر', 'نفي or نهي', 'استفهام', 'قسم'],
          correct: 0,
        },
        {
          title: 'لا تتكرر: نعت منفي',
          kind: 'mcq',
          prompt: '﴿لَا مَقْطُوعَةٍ وَلَا مَمْنُوعَةٍ﴾ shows لا repeated with الواو because it enters a:',
          options: ['نعت منفي', 'خبر مثبت', 'حال مثبتة', 'مبتدأ'],
          correct: 0,
        },
        {
          title: 'بل بعد إثبات',
          kind: 'mcq',
          prompt: 'صُمِ الْيَوْمَ بَلْ غَدًا — بل here does what to the ruling of اليوم?',
          options: ['strips it (إبطال) and gives it to غدا instead', 'confirms it, and gives the opposite to غدا', 'leaves it fully intact on both', 'negates both اليوم and غدا at once'],
          correct: 0,
        },
        {
          title: 'بل بعد نفي',
          kind: 'mcq',
          prompt: 'لَا تَصُمِ الْيَوْمَ بَلْ غَدًا — بل here does what?',
          options: ['confirms the ruling on اليوم, and assigns the opposite to غدا', 'strips the ruling from اليوم entirely', 'has no effect on either word', 'converts the جملة into استفهام'],
          correct: 0,
        },
        {
          title: 'شرطا لكن',
          kind: 'mcq',
          prompt: 'What are the two conditions for لكن to be عاطفة (not زائدة)?',
          options: ['Preceded by نفي/نهي, and not accompanied by الواو', 'Preceded by إثبات, and accompanied by الواو', 'Followed immediately by a قسم', 'Repeated at least twice'],
          correct: 0,
        },
        {
          title: 'إما تتكرر',
          kind: 'mcq',
          prompt: '﴿إِمَّا شَاكِرًا وَإِمَّا كَفُورًا﴾ shows إما:',
          options: ['occurring repeated, as it must', 'occurring only once, exceptionally', 'acting as a حرف جر', 'negating both شاكرا وكفورا'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿أَطِيعُوا اللَّهَ وَالرَّسُولَ﴾',
          kind: 'tarkeeb',
          instruction: 'What does الواو signify here؟',
          sentence: 'أَطِيعُوا اللَّهَ وَالرَّسُولَ',
          translation: 'Obey Allah and the Messenger.',
          cells: ['أَطِيعُوا', 'اللَّهَ', 'وَالرَّسُولَ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'الجمع مطلقا' },
            ] },
          ],
          distractors: ['الجمع مع الترتيب والتعقيب', 'الجمع مع الترتيب والتراخي'],
        },
        {
          title: 'تركيب: آمَنَتْ خَدِيجَةُ فَأَبُو بَكْرٍ',
          kind: 'tarkeeb',
          instruction: 'What does الفاء signify here؟',
          sentence: 'آمَنَتْ خَدِيجَةُ فَأَبُو بَكْرٍ',
          translation: 'Khadijah believed, then Abu Bakr.',
          cells: ['آمَنَتْ', 'خَدِيجَةُ', 'فَأَبُو', 'بَكْرٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'الجمع مع الترتيب والتعقيب' },
            ] },
          ],
          distractors: ['الجمع مطلقا', 'الجمع مع الترتيب والتراخي'],
        },
        {
          title: 'تركيب: آمَنَ عَلِيٌّ ثُمَّ عُمَرُ',
          kind: 'tarkeeb',
          instruction: 'What does ثم signify here؟',
          sentence: 'آمَنَ عَلِيٌّ ثُمَّ عُمَرُ',
          translation: 'Ali believed, then [later] Umar.',
          cells: ['آمَنَ', 'عَلِيٌّ', 'ثُمَّ', 'عُمَرُ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'الجمع مع الترتيب والتراخي' },
            ] },
          ],
          distractors: ['الجمع مطلقا', 'الجمع مع الترتيب والتعقيب'],
        },
        {
          title: 'تركيب: قَرَأْتُ الْقُرْآنَ حَتَّىٰ سُورَةِ النَّاسِ',
          kind: 'tarkeeb',
          instruction: 'What does حتى signify here؟',
          sentence: 'قَرَأْتُ الْقُرْآنَ حَتَّىٰ سُورَةِ النَّاسِ',
          translation: 'I read the Quran, up to Surat an-Nas.',
          cells: ['قَرَأْتُ', 'الْقُرْآنَ', 'حَتَّىٰ', 'سُورَةِ', 'النَّاسِ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 4, role: 'الغاية والتدريج' },
            ] },
          ],
          distractors: ['الجمع مطلقا', 'الجمع مع الترتيب والتراخي'],
        },
        {
          title: 'تركيب: ﴿فَفِدْيَةٌ مِنْ صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ﴾',
          kind: 'tarkeeb',
          instruction: 'Which use of أو does this illustrate؟',
          sentence: 'فَفِدْيَةٌ مِنْ صِيَامٍ أَوْ صَدَقَةٍ أَوْ نُسُكٍ',
          translation: 'Then a ransom of fasting, charity, or sacrifice.',
          cells: ['فِدْيَةٌ', 'مِنْ', 'صِيَامٍ', 'أَوْ', 'صَدَقَةٍ', 'أَوْ', 'نُسُكٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 6, role: 'التخيير بعد الأمر' },
            ] },
          ],
          distractors: ['الشك بعد الخبر', 'التسوية'],
        },
        {
          title: 'تركيب: ﴿وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا﴾',
          kind: 'tarkeeb',
          instruction: 'Which use of أو does this illustrate؟',
          sentence: 'وَلَا تُطِعْ مِنْهُمْ آثِمًا أَوْ كَفُورًا',
          translation: 'And do not obey among them a sinner or disbeliever.',
          cells: ['تُطِعْ', 'مِنْهُمْ', 'آثِمًا', 'أَوْ', 'كَفُورًا'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 4, role: 'الجمع بعد نهي' },
            ] },
          ],
          distractors: ['الشك بعد الخبر', 'التخيير بعد الأمر'],
        },
        {
          title: 'تركيب: صُمِ الْيَوْمَ بَلْ غَدًا',
          kind: 'tarkeeb',
          instruction: 'What does بل do to the ruling on اليوم here؟',
          sentence: 'صُمِ الْيَوْمَ بَلْ غَدًا',
          translation: 'Fast today — no, [rather] tomorrow.',
          cells: ['صُمِ', 'الْيَوْمَ', 'بَلْ', 'غَدًا'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'إبطال حكم الأول' },
            ] },
          ],
          distractors: ['تثبيت حكم الأول'],
        },
        {
          title: 'تركيب: لَا تَصُمِ الْيَوْمَ بَلْ غَدًا',
          kind: 'tarkeeb',
          instruction: 'What does بل do to the ruling on اليوم here؟',
          sentence: 'لَا تَصُمِ الْيَوْمَ بَلْ غَدًا',
          translation: "Don't fast today — but [do] tomorrow.",
          cells: ['تَصُمِ', 'الْيَوْمَ', 'بَلْ', 'غَدًا'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 3, role: 'تثبيت حكم الأول' },
            ] },
          ],
          distractors: ['إبطال حكم الأول'],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'أحرف الجواب',
      subtitle: 'Response Particles — نعم وبلى, and the two-sided كلا',
      sourceRef: 'pp. 86–87',
      concepts: [
        {
          heading: 'فئتا أحرف الجواب',
          lines: [
            { html: `<bdi>أَحْرُفُ الْجَوَاب</bdi> split into two categories:`, list: false },
            { table: { headers: ['Category', 'حروف'], rows: [
              ['أَحْرُفُ الْإِيجَاب', 'نَعَمْ، بَلَىٰ، إِي، أَجَلْ، إِنَّ، جَيْرِ'],
              ['أَحْرُفُ النَّفْي', 'لَا، كَلَّا'],
            ] } },
          ],
          exercise: {
            prompt: `What are the two categories of أحرف الجواب؟`,
            kind: 'mcq',
            options: ['أحرف الإيجاب (six) and أحرف النفي (two)', 'أحرف الاستفهام and أحرف التمني', 'أحرف العطف and أحرف الشرط', 'أحرف عاملة and أحرف مهملة فقط'],
            correct: 0,
          },
        },
        {
          heading: 'نعم وبلى',
          lines: [
            { html: `<bdi>نَعَمْ</bdi> confirms the question exactly as asked: after an affirmative question it affirms (أَسَافَرَ خَالِدٌ؟ نَعَمْ means the journey happened); after a negative question it confirms the نفي (أَمَا سَافَرَ خَالِدٌ؟ نَعَمْ means the journey did <b>not</b> happen).`, list: false },
            { html: `<bdi>بَلَىٰ</bdi>, by contrast, always affirms what was negated (لِإِيجَابِ الْمَنْفِيّ) — whether after a negative question, as in ﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَىٰ﴾ (indeed You are), or a negative statement: لَمْ يَقُمْ زَيْدٌ → بَلَىٰ means he did stand.`, list: false },
          ],
          exercise: {
            prompt: `How does نعم work after a NEGATIVE question, e.g. أَمَا سَافَرَ خَالِدٌ؟ نَعَمْ؟`,
            kind: 'mcq',
            options: ["It confirms the negation — the journey did NOT happen", 'It always means the opposite of the question, so the journey DID happen', 'It is invalid after a negative question', 'It converts the question into a command'],
            correct: 0,
          },
        },
        {
          heading: 'إي وأجل وإنّ وجير',
          lines: [
            { html: `<bdi>إِي</bdi> occurs specifically before a قسم, as in ﴿وَيَسْتَنْبِئُونَكَ أَحَقٌّ هُوَ قُلْ إِي وَرَبِّي إِنَّهُ لَحَقٌّ﴾.`, list: false },
            { html: `<bdi>أَجَلْ</bdi> is used as affirmation after a statement (بَعْدَ الْخَبَر) — in reply to نُحِبُّ الْأَنْصَارَ, one says أَجَلْ.`, list: false },
            { html: `Two less common أحرف الإيجاب: <bdi>إِنَّ</bdi>, as in a reply of إِنَّهُ to هَلْ تُحِبُّ الصَّحَابَةَ؟, and <bdi>جَيْر</bdi>, as in جَيْرِ لَأَتْبَعَنَّهُمْ replying to هَلْ تَتَّبِعُ الرَّسُولَ ﷺ وَأَصْحَابَهُ؟`, list: false },
          ],
          exercise: {
            prompt: `Which response حرف occurs specifically before a قسم؟`,
            kind: 'mcq',
            options: ['إي', 'أجل', 'جير', 'كلا'],
            correct: 0,
          },
        },
        {
          heading: 'كلا: معانيها الثلاثة',
          lines: [
            { html: `<bdi>كَلَّا</bdi>'s primary meaning is <bdi>الزَّجْر</bdi> (rebuke) — rejecting what precedes and affirming what follows, as in ﴿قَالَ رَبِّ ارْجِعُونِ. لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ. كَلَّا﴾; it is called <bdi>حَرْفُ رَدْعٍ وَزَجْر</bdi>.`, list: false },
            { html: `It can also carry <b>affirmation</b> (التَّصْدِيق, ≈ أجل/إي), as in ﴿وَمَا هُوَ إِلَّا ذِكْرَىٰ لِلْبَشَرِ. كَلَّا وَالْقَمَرِ﴾, or serve as an <b>opener/attention-getter</b> (الِاسْتِفْتَاح, ≈ ألا), as in ﴿عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ. كَلَّا إِنَّ الْإِنْسَانَ لَيَطْغَىٰ﴾.`, list: false },
          ],
          exercise: {
            prompt: `What is the primary meaning of كلا, and what is it called؟`,
            kind: 'mcq',
            options: ['الزجر (rebuke) — rejecting what precedes; called حرف ردع وزجر', 'التصديق (affirmation) exclusively, with no other meaning', 'الاستفهام, always opening a question', 'التمني, expressing an unrealistic wish'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أحرف الإيجاب are there؟',
          options: ['ستة', 'أربعة', 'خمسة', 'سبعة'],
          correct: 0,
        },
        {
          q: 'List the two أحرف النفي among أحرف الجواب.',
          options: ['لا، كلا', 'لا، لن', 'ما، لا', 'كلا، لات'],
          correct: 0,
        },
        {
          q: '﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَىٰ﴾ — بلى here means:',
          options: ['indeed You are our Lord', 'no, You are not our Lord', 'perhaps You are our Lord', 'we do not know'],
          correct: 0,
        },
        {
          q: 'أجل is used as affirmation:',
          options: ['بعد الخبر (after a statement)', 'قبل القسم فقط', 'بعد الأمر فقط', 'بعد النهي فقط'],
          correct: 0,
        },
        {
          q: '﴿عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ. كَلَّا إِنَّ الْإِنْسَانَ لَيَطْغَىٰ﴾ — كلا here serves as:',
          options: ['استفتاح (an opener, ≈ ألا)', 'زجر (rebuke)', 'تصديق (plain affirmation)', 'استفهام'],
          correct: 0,
        },
        {
          q: 'جَيْرِ لَأَتْبَعَنَّهُمْ, replying to هَلْ تَتَّبِعُ الرَّسُولَ؟, is:',
          options: ['a less common حرف إيجاب', 'a حرف نفي', 'a حرف عطف', 'a حرف تنبيه'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'الستة إيجابا',
          kind: 'mcq',
          prompt: 'List the six أحرف الإيجاب.',
          options: ['نعم، بلى، إي، أجل، إنّ، جير', 'نعم، لا، كلا، لات، ما، لن', 'نعم، بلى، هل، أم، أو، لكن', 'إي، أجل، لو، لولا، لوما، أمّا'],
          correct: 0,
        },
        {
          title: 'نعم بعد سؤال مثبت',
          kind: 'mcq',
          prompt: 'أَسَافَرَ خَالِدٌ؟ نَعَمْ — this means the journey:',
          options: ['happened', 'did not happen', 'is uncertain', 'will happen tomorrow'],
          correct: 0,
        },
        {
          title: 'نعم بعد سؤال منفي',
          kind: 'mcq',
          prompt: 'أَمَا سَافَرَ خَالِدٌ؟ نَعَمْ — this means the journey:',
          options: ['did not happen', 'happened', 'happened twice', 'is being negotiated'],
          correct: 0,
        },
        {
          title: 'بلى لإيجاب المنفي',
          kind: 'mcq',
          prompt: 'لَمْ يَقُمْ زَيْدٌ. بَلَىٰ — this means زيد:',
          options: ['did stand', 'did not stand', 'is standing right now', 'will never stand'],
          correct: 0,
        },
        {
          title: 'إي قبل القسم',
          kind: 'mcq',
          prompt: '﴿قُلْ إِي وَرَبِّي إِنَّهُ لَحَقٌّ﴾ shows إي occurring:',
          options: ['immediately before a قسم', 'immediately before نفي', 'after بلى', 'inside a شرط جملة'],
          correct: 0,
        },
        {
          title: 'إنّ كحرف جواب',
          kind: 'mcq',
          prompt: 'In reply to هَلْ تُحِبُّ الصَّحَابَةَ؟, saying إِنَّهُ illustrates إنّ as:',
          options: ['a less common حرف إيجاب', 'a حرف مشبه بالفعل only, never a جواب', 'a حرف نفي', 'a حرف عطف'],
          correct: 0,
        },
        {
          title: 'جير مثالها',
          kind: 'mcq',
          prompt: 'جَيْرِ لَأَتْبَعَنَّهُمْ, replying to a question about following the Prophet ﷺ, illustrates:',
          options: ['جير as a less common حرف إيجاب', 'جير as a حرف نفي', 'جير as a حرف شرط', 'جير as a حرف عطف'],
          correct: 0,
        },
        {
          title: 'كلا: الزجر',
          kind: 'mcq',
          prompt: '﴿قَالَ رَبِّ ارْجِعُونِ. لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ. كَلَّا﴾ — كلا here means:',
          options: ['rejection/rebuke (الزجر) of what precedes', 'affirmation of what precedes', 'an opening attention-getter', 'a question'],
          correct: 0,
        },
        {
          title: 'كلا: التصديق',
          kind: 'mcq',
          prompt: '﴿وَمَا هُوَ إِلَّا ذِكْرَىٰ لِلْبَشَرِ. كَلَّا وَالْقَمَرِ﴾ — كلا here means:',
          options: ['affirmation (التصديق), ≈ أجل/إي', 'rebuke (الزجر)', 'an opener (الاستفتاح)', 'negation of القمر'],
          correct: 0,
        },
        {
          title: 'اسم كلا الوصفي',
          kind: 'mcq',
          prompt: 'كلا, in its primary (rebuke) sense, is called:',
          options: ['حرف ردع وزجر', 'حرف جر أصلي', 'حرف تفسير', 'حرف تنبيه محض'],
          correct: 0,
        },
        {
          title: 'أحرف النفي بالجواب',
          kind: 'mcq',
          prompt: 'Among أحرف الجواب, لا و كلا belong to:',
          options: ['أحرف النفي', 'أحرف الإيجاب', 'أحرف العطف', 'أحرف الشرط'],
          correct: 0,
        },
        {
          title: 'عدد معاني كلا',
          kind: 'mcq',
          prompt: 'How many distinct meanings can كلا carry (رزجر plus two more)?',
          options: ['ثلاثة', 'اثنان', 'أربعة', 'خمسة'],
          correct: 0,
        },
        {
          title: 'تركيب: أَسَافَرَ خَالِدٌ؟ نَعَمْ',
          kind: 'tarkeeb',
          instruction: 'After this affirmative question, what does نَعَمْ confirm?',
          sentence: 'أَسَافَرَ خَالِدٌ؟ نَعَمْ',
          translation: 'Did Khalid travel? Yes.',
          cells: ['أَسَافَرَ', 'خَالِدٌ', 'نَعَمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 2, end: 2, role: 'تقرير: سافر' },
            ] },
          ],
          distractors: ['نفي السفر'],
        },
        {
          title: 'تركيب: ﴿أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَىٰ﴾',
          kind: 'tarkeeb',
          instruction: 'After this negative question, what does بَلَىٰ confirm?',
          sentence: 'أَلَسْتُ بِرَبِّكُمْ قَالُوا بَلَىٰ',
          translation: '"Am I not your Lord?" They said, "Yes, [we testify]."',
          cells: ['أَلَسْتُ', 'بِرَبِّكُمْ', 'قَالُوا', 'بَلَىٰ'],
          rows: [
            { position: 'above', labels: [
              { start: 3, end: 3, role: 'إيجاب المنفي: أنت ربنا' },
            ] },
          ],
          distractors: ['تقرير النفي'],
        },
        {
          title: 'تركيب: ﴿قَالَ رَبِّ ارْجِعُونِ لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ كَلَّا﴾',
          kind: 'tarkeeb',
          instruction: 'Which meaning of كلا does this illustrate?',
          sentence: 'قَالَ رَبِّ ارْجِعُونِ لَعَلِّي أَعْمَلُ صَالِحًا فِيمَا تَرَكْتُ كَلَّا',
          translation: 'He said, "My Lord, send me back, that I might do righteousness in that which I left." No!',
          cells: ['قَالَ', 'رَبِّ', 'ارْجِعُونِ', 'لَعَلِّي', 'أَعْمَلُ', 'صَالِحًا', 'فِيمَا', 'تَرَكْتُ', 'كَلَّا'],
          rows: [
            { position: 'above', labels: [
              { start: 8, end: 8, role: 'الزجر' },
            ] },
          ],
          distractors: ['التصديق', 'الاستفتاح'],
        },
        {
          title: 'تركيب: ﴿وَمَا هُوَ إِلَّا ذِكْرَىٰ لِلْبَشَرِ كَلَّا وَالْقَمَرِ﴾',
          kind: 'tarkeeb',
          instruction: 'Which meaning of كلا does this illustrate؟',
          sentence: 'وَمَا هُوَ إِلَّا ذِكْرَىٰ لِلْبَشَرِ كَلَّا وَالْقَمَرِ',
          translation: 'And it is not but a reminder to mankind. Indeed, by the moon.',
          cells: ['هُوَ', 'إِلَّا', 'ذِكْرَىٰ', 'لِلْبَشَرِ', 'كَلَّا', 'وَالْقَمَرِ'],
          rows: [
            { position: 'above', labels: [
              { start: 4, end: 4, role: 'التصديق' },
            ] },
          ],
          distractors: ['الزجر', 'الاستفتاح'],
        },
        {
          title: 'تركيب: ﴿عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ كَلَّا إِنَّ الْإِنْسَانَ لَيَطْغَىٰ﴾',
          kind: 'tarkeeb',
          instruction: 'Which meaning of كلا does this illustrate؟',
          sentence: 'عَلَّمَ الْإِنْسَانَ مَا لَمْ يَعْلَمْ كَلَّا إِنَّ الْإِنْسَانَ لَيَطْغَىٰ',
          translation: 'He taught man that which he did not know. No indeed! Man truly transgresses.',
          cells: ['عَلَّمَ', 'الْإِنْسَانَ', 'مَا', 'لَمْ', 'يَعْلَمْ', 'كَلَّا', 'إِنَّ', 'الْإِنْسَانَ', 'لَيَطْغَىٰ'],
          rows: [
            { position: 'above', labels: [
              { start: 5, end: 5, role: 'الاستفتاح' },
            ] },
          ],
          distractors: ['الزجر', 'التصديق'],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أحرف التأكيد',
      subtitle: 'Emphasis Particles — لام الابتداء, اللام المزحلقة, نونا التوكيد, and قد',
      sourceRef: 'pp. 88–89',
      concepts: [
        {
          heading: 'الخمسة، ولام الابتداء',
          lines: [
            { html: `There are five <bdi>أَحْرُفُ التَّأْكِيدِ غَيْرِ الْعَامِلَة</bdi>:`, list: false },
            { html: `<bdi>لَامُ الِابْتِدَاء</bdi>، <bdi>اللَّامُ الْمُزَحْلَقَة</bdi>، <bdi>اللَّامُ فِي جَوَابِ الْقَسَم</bdi>، <bdi>نُونَا التَّأْكِيد</bdi> (light and heavy)، <bdi>قَدْ</bdi>`, list: true, bullet: true },
            { html: `لام الابتداء enters upon the <bdi>مُبْتَدَأ</bdi>, as in ﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾.`, list: false },
          ],
          exercise: {
            prompt: `What does لام الابتداء enter upon؟`,
            kind: 'mcq',
            options: ['المبتدأ', 'الخبر فقط', 'الفعل الماضي', 'المضاف إليه'],
            correct: 0,
          },
        },
        {
          heading: 'اللام المزحلقة، ولام التوكيد',
          lines: [
            { html: `<bdi>اللَّامُ الْمُزَحْلَقَة</bdi> enters upon the خبر of إنّ in three cases:`, list: false },
            { table: { headers: ['خبر type', 'Example'], rows: [
              ['اسم', '﴿إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ﴾'],
              ['present-tense فعل', '﴿وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ﴾'],
              ['شبه جملة', '﴿وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ﴾'],
            ] } },
            { html: `لام الابتداء and اللام المزحلقة together share the collective name <bdi>لَامُ التَّوْكِيد</bdi>.`, list: false },
          ],
          exercise: {
            prompt: `Upon what does اللام المزحلقة enter, and in which cases؟`,
            kind: 'mcq',
            options: ['Upon the خبر of إنّ, when it is an اسم, a present فعل, or a شبه جملة', 'Upon the اسم of إنّ exclusively', 'Upon any فعل ماضٍ in the جملة', 'Upon a مضاف إليه only'],
            correct: 0,
          },
        },
        {
          heading: 'لام جواب القسم، ونونا التأكيد',
          lines: [
            { html: `A لام also appears in the answer of a قسم, as in ﴿تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنْتُمْ تَفْتَرُونَ﴾.`, list: false },
            { html: `There are two <bdi>نُونَا التَّأْكِيد</bdi>: the light (<bdi>الْخَفِيفَة</bdi>) and heavy (<bdi>الثَّقِيلَة</bdi>) — an example containing both is ﴿لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ﴾.`, list: false },
          ],
          exercise: {
            prompt: `What are the two نونا التأكيد؟`,
            kind: 'mcq',
            options: ['الخفيفة والثقيلة', 'المتصلة والمنفصلة', 'الساكنة والمتحركة', 'الأصلية والزائدة'],
            correct: 0,
          },
        },
        {
          heading: 'قد مع الماضي والمضارع',
          lines: [
            { html: `With a past-tense فعل, <bdi>قَدْ</bdi> means certainty/realisation (<bdi>التَّحْقِيق</bdi>), as in ﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾.`, list: false },
            { html: `With a present-tense فعل it can carry four meanings — with المضارع, <b>التقليل is predominant</b>:`, list: false },
            { table: { headers: ['Meaning', 'Example'], rows: [
              ['التَّحْقِيق', '﴿قَدْ يَعْلَمُ اللَّهُ﴾'],
              ['التَّوَقُّع (expectation of future occurrence)', 'قَدْ يَبْرَأُ الْمَرِيضُ'],
              ['التَّكْثِير', '﴿قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾'],
              ['التَّقْلِيل', 'قَدْ يَصْدُقُ الْكَذُوبُ'],
            ] } },
          ],
          exercise: {
            prompt: `With المضارع, which of قد's four meanings predominates؟`,
            kind: 'mcq',
            options: ['التقليل', 'التحقيق', 'التكثير', 'التوقع'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'How many أحرف التأكيد غير العاملة are there؟',
          options: ['خمسة', 'ثلاثة', 'أربعة', 'ستة'],
          correct: 0,
        },
        {
          q: '﴿إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ﴾ shows اللام المزحلقة entering a خبر that is:',
          options: ['اسم', 'فعل ماضٍ', 'شبه جملة', 'حرف جر'],
          correct: 0,
        },
        {
          q: 'لام الابتداء and اللام المزحلقة share the collective name:',
          options: ['لام التوكيد', 'لام الجحود', 'لام الأمر', 'لام التعليل'],
          correct: 0,
        },
        {
          q: '﴿لَيُسْجَنَنَّ وَلَيَكُونًا مِنَ الصَّاغِرِينَ﴾ contains:',
          options: ['both نونا التوكيد, light and heavy', 'only the heavy نون', 'only the light نون', 'neither نون'],
          correct: 0,
        },
        {
          q: '﴿قَدْ أَفْلَحَ الْمُؤْمِنُونَ﴾ — قد here (with الماضي) means:',
          options: ['التحقيق', 'التوقع', 'التكثير', 'التقليل'],
          correct: 0,
        },
        {
          q: "قَدْ يَصْدُقُ الْكَذُوبُ illustrates قد's meaning of:",
          options: ['التقليل', 'التحقيق', 'التكثير', 'التوقع'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'الخمسة بالاسم',
          kind: 'mcq',
          prompt: 'List the five أحرف التأكيد غير العاملة.',
          options: ['لام الابتداء، اللام المزحلقة، لام جواب القسم، نونا التأكيد، قد', 'لام الابتداء، لام الأمر، لام الجحود، لام التعليل، لام القسم', 'نعم، بلى، إي، أجل، كلا', 'الواو، الفاء، ثم، حتى، لكن'],
          correct: 0,
        },
        {
          title: 'مثال لام الابتداء',
          kind: 'mcq',
          prompt: '﴿وَلَدَارُ الْآخِرَةِ خَيْرٌ لِلَّذِينَ اتَّقَوْا﴾ shows لام الابتداء entering:',
          options: ['المبتدأ (دار)', 'الخبر (خير)', 'المضاف إليه', 'حرف الجر لِ'],
          correct: 0,
        },
        {
          title: 'اللام المزحلقة: فعل مضارع',
          kind: 'mcq',
          prompt: '﴿وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ﴾ shows اللام المزحلقة entering a خبر that is:',
          options: ['فعل مضارع', 'اسم مفرد', 'شبه جملة', 'جملة اسمية منسوخة'],
          correct: 0,
        },
        {
          title: 'اللام المزحلقة: شبه جملة',
          kind: 'mcq',
          prompt: '﴿وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ﴾ shows اللام المزحلقة entering a خبر that is:',
          options: ['شبه جملة', 'اسم مفرد', 'فعل ماضٍ', 'فعل أمر'],
          correct: 0,
        },
        {
          title: 'لام جواب القسم',
          kind: 'mcq',
          prompt: '﴿تَاللَّهِ لَتُسْأَلُنَّ عَمَّا كُنْتُمْ تَفْتَرُونَ﴾ shows a لام in:',
          options: ['جواب القسم', 'خبر إنّ', 'المبتدأ', 'الفعل الناقص'],
          correct: 0,
        },
        {
          title: 'قد مع الماضي',
          kind: 'mcq',
          prompt: 'With a فعل ماضٍ, قد means:',
          options: ['التحقيق', 'التقليل', 'التكثير', 'التوقع'],
          correct: 0,
        },
        {
          title: 'قد للتوقع',
          kind: 'mcq',
          prompt: "قَدْ يَبْرَأُ الْمَرِيضُ illustrates قد's meaning of:",
          options: ['التوقع', 'التحقيق', 'التقليل', 'التكثير'],
          correct: 0,
        },
        {
          title: 'قد للتكثير',
          kind: 'mcq',
          prompt: "﴿قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾ illustrates قد's meaning of:",
          options: ['التكثير', 'التقليل', 'التوقع', 'التحقيق'],
          correct: 0,
        },
        {
          title: 'قد للتحقيق مع المضارع',
          kind: 'mcq',
          prompt: "﴿قَدْ يَعْلَمُ اللَّهُ﴾ illustrates قد's meaning of:",
          options: ['التحقيق', 'التقليل', 'التكثير', 'التوقع'],
          correct: 0,
        },
        {
          title: 'الاسم الجامع للامين',
          kind: 'mcq',
          prompt: 'The name لام التوكيد collectively covers:',
          options: ['لام الابتداء and اللام المزحلقة', 'لام الأمر and لام الجحود', 'لام جواب القسم and لام الابتداء only', 'All laams without exception'],
          correct: 0,
        },
        {
          title: 'تركيب: ﴿إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ﴾',
          kind: 'tarkeeb',
          instruction: 'What type of خبر does اللام المزحلقة enter here؟',
          sentence: 'إِنَّ رَبِّي لَسَمِيعُ الدُّعَاءِ',
          translation: 'Indeed, my Lord is the Hearer of supplication.',
          cells: ['رَبِّي', 'لَسَمِيعُ', 'الدُّعَاءِ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'اسم' },
            ] },
          ],
          distractors: ['فعل مضارع', 'شبه جملة'],
        },
        {
          title: 'تركيب: ﴿وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ﴾',
          kind: 'tarkeeb',
          instruction: 'What type of خبر does اللام المزحلقة enter here؟',
          sentence: 'وَإِنَّ رَبَّكَ لَيَعْلَمُ مَا تُكِنُّ صُدُورُهُمْ',
          translation: 'And indeed, your Lord knows what their breasts conceal.',
          cells: ['رَبَّكَ', 'لَيَعْلَمُ', 'مَا', 'تُكِنُّ', 'صُدُورُهُمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 1, role: 'فعل مضارع' },
            ] },
          ],
          distractors: ['اسم', 'شبه جملة'],
        },
        {
          title: 'تركيب: ﴿وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ﴾',
          kind: 'tarkeeb',
          instruction: 'What type of خبر does اللام المزحلقة enter here؟',
          sentence: 'وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ',
          translation: 'And indeed, you are of a great moral character.',
          cells: ['إِنَّكَ', 'لَعَلَىٰ', 'خُلُقٍ', 'عَظِيمٍ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 3, role: 'شبه جملة' },
            ] },
          ],
          distractors: ['اسم', 'فعل مضارع'],
        },
        {
          title: 'تركيب: ﴿قَدْ يَعْلَمُ اللَّهُ﴾',
          kind: 'tarkeeb',
          instruction: 'Which meaning of قد does this illustrate?',
          sentence: 'قَدْ يَعْلَمُ اللَّهُ',
          translation: 'Allah certainly knows.',
          cells: ['قَدْ', 'يَعْلَمُ', 'اللَّهُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'التحقيق' },
            ] },
          ],
          distractors: ['التوقع', 'التكثير', 'التقليل'],
        },
        {
          title: 'تركيب: قَدْ يَبْرَأُ الْمَرِيضُ',
          kind: 'tarkeeb',
          instruction: 'Which meaning of قد does this illustrate؟',
          sentence: 'قَدْ يَبْرَأُ الْمَرِيضُ',
          translation: 'The patient may [yet] recover.',
          cells: ['قَدْ', 'يَبْرَأُ', 'الْمَرِيضُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'التوقع' },
            ] },
          ],
          distractors: ['التحقيق', 'التكثير', 'التقليل'],
        },
        {
          title: 'تركيب: ﴿قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ﴾',
          kind: 'tarkeeb',
          instruction: 'Which meaning of قد does this illustrate؟',
          sentence: 'قَدْ نَرَىٰ تَقَلُّبَ وَجْهِكَ فِي السَّمَاءِ',
          translation: 'We have certainly seen the turning of your face toward the sky.',
          cells: ['قَدْ', 'نَرَىٰ', 'تَقَلُّبَ', 'وَجْهِكَ', 'فِي', 'السَّمَاءِ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'التكثير' },
            ] },
          ],
          distractors: ['التحقيق', 'التوقع', 'التقليل'],
        },
        {
          title: 'تركيب: قَدْ يَصْدُقُ الْكَذُوبُ',
          kind: 'tarkeeb',
          instruction: 'Which meaning of قد does this illustrate؟',
          sentence: 'قَدْ يَصْدُقُ الْكَذُوبُ',
          translation: 'The habitual liar may [rarely] tell the truth.',
          cells: ['قَدْ', 'يَصْدُقُ', 'الْكَذُوبُ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'التقليل' },
            ] },
          ],
          distractors: ['التحقيق', 'التوقع', 'التكثير'],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'أحرف الشرط غير العاملة',
      subtitle: 'Non-Governing Conditionals — لو, لولا, لوما, and أمّا',
      sourceRef: 'pp. 89–92',
      concepts: [
        {
          heading: 'الأربعة، وتعريف لو',
          lines: [
            { html: `The four <bdi>أَحْرُفُ الشَّرْطِ غَيْرِ الْعَامِلَة</bdi> — unlike إنْ and its sisters from Module 06, none of these causes جزم — are <bdi>لَوْ، لَوْلَا، لَوْمَا، أَمَّا</bdi>.`, list: false },
            { html: `Classically, <bdi>لَوْ</bdi> is defined as <bdi>امْتِنَاعُ الْجَوَابِ لِامْتِنَاعِ الشَّرْط</bdi> ("the جواب fails to occur because the شرط failed to occur").`, list: false },
            { html: `Ibn Hishām refines this: لو indicates the non-occurrence of the شرط, and that the شرط entails the جواب — but it does <b>not</b> indicate that the جواب itself failed to occur.`, list: false },
          ],
          exercise: {
            prompt: `According to Ibn Hishām's refinement, what does لو indicate — and what does it NOT indicate؟`,
            kind: 'mcq',
            options: ['It indicates the شرط did not occur and entails the جواب, but does NOT indicate the جواب failed to occur', 'It indicates only that the شرط occurred, nothing about the جواب', 'It indicates both the شرط and جواب definitely failed to occur', 'It indicates the جواب occurred first, before the شرط'],
            correct: 0,
          },
        },
        {
          heading: 'لو: أمثلة الشرط والجواب والزمن',
          lines: [
            { html: `In لَوْ تَابَ هَٰذَا الرَّجُلُ إِلَى اللَّهِ لَغَفَرَ اللَّهُ لَهُ: implied is that the man did not repent, and that repentance entails forgiveness; NOT implied is that Allah did not forgive him — He may forgive out of mercy regardless.`, list: false },
            { html: `That the جواب of لو CAN occur despite the شرط not occurring is shown in ﴿وَلَوْ أَنَّمَا فِي الْأَرْضِ مِنْ شَجَرَةٍ أَقْلَامٌ وَالْبَحْرُ يَمُدُّهُ مِنْ بَعْدِهِ سَبْعَةُ أَبْحُرٍ مَا نَفِدَتْ كَلِمَاتُ اللَّهِ﴾ — the trees are not really pens, yet Allah's words are (in fact) inexhaustible.`, list: false },
            { html: `لو also indicates the past: entering a مضارع, it converts its meaning to past, as in ﴿لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا﴾. Its affirmative جواب usually takes the لام, as here, though it may come without it: ﴿لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا﴾.`, list: false },
          ],
          exercise: {
            prompt: `Can the جواب of لو occur even though its شرط did NOT occur؟`,
            kind: 'mcq',
            options: ['Yes, as in ﴿وَلَوْ أَنَّمَا فِي الْأَرْضِ مِنْ شَجَرَةٍ أَقْلَامٌ...مَا نَفِدَتْ كَلِمَاتُ اللَّهِ﴾', 'No, the جواب can never occur if the شرط failed to occur', 'Only when لو is followed by an اسم, never a فعل', 'Only in poetry, never in the Qurʾān'],
            correct: 0,
          },
        },
        {
          heading: 'لو للتمني، وما يجب أن يتبعها',
          lines: [
            { html: `لو may also carry the meaning of <bdi>التَّمَنِّي</bdi> (wishing), as in ﴿فَلَوْ أَنَّ لَنَا كَرَّةً فَنَكُونَ مِنَ الْمُؤْمِنِينَ﴾.`, list: false },
            { html: `A فعل must follow لو; when an اسم appears to follow instead, it is explained away:`, list: false },
            { html: `an explicit اسم is the مَعْمُول of an omitted فعل explained by what follows, as in لَوْ زَيْدًا رَأَيْتَهُ لَأَكْرَمْتَهُ (= لو رأيت زيدا...)`, list: true, bullet: true },
            { html: `an اسم introduced by أنّ is the فَاعِل of an omitted فعل (لو ثبت أنّ...), as in ﴿وَلَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَهُمْ﴾`, list: true, bullet: true },
          ],
          exercise: {
            prompt: `What must follow لو, and how is an apparent اسم after it explained؟`,
            kind: 'mcq',
            options: ['A فعل must follow; any اسم is really the معمول or فاعل of an omitted فعل', 'An اسم must always follow; a فعل is never valid after لو', 'Nothing at all needs to follow لو', 'Only a حرف جر may follow لو'],
            correct: 0,
          },
        },
        {
          heading: 'لولا ولوما',
          lines: [
            { html: `<bdi>لَوْلَا</bdi> is defined as <bdi>امْتِنَاعُ الْجَوَابِ لِوُجُودِ الشَّرْط</bdi> — the جواب fails BECAUSE the شرط exists (the reverse of لو).`, list: false },
            { html: `It enters upon two جمل: first a جملة اسمية whose خبر is omitted (تقديره مَوْجُود), then a verbal جملة, as in ﴿وَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ مَا زَكَىٰ مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾.`, list: false },
            { html: `<bdi>لَوْمَا</bdi> works identically — امْتِنَاعُ الْجَوَابِ لِوُجُودِ الشَّرْط — as in لَوْمَا التَّوْفِيقُ لَمَا عَمِلْنَا الصَّالِحَاتِ.`, list: false },
          ],
          exercise: {
            prompt: `How does لولا's meaning differ from لو's؟`,
            kind: 'mcq',
            options: ['لولا means امتناع الجواب لوجود الشرط (the جواب fails BECAUSE the شرط exists) — the reverse of لو', 'لولا and لو mean exactly the same thing, with no difference', 'لولا only ever enters a جملة فعلية, never اسمية', 'لولا converts its فعل to المضارع always'],
            correct: 0,
          },
        },
        {
          heading: 'أمّا: وظائفها وتكرارها',
          lines: [
            { html: `<bdi>أَمَّا</bdi> combines three functions: <bdi>الشَّرْط</bdi>, <bdi>التَّفْصِيل</bdi> (detailing), and <bdi>التَّوْكِيد</bdi> (emphasis), as in ﴿فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ وَأَمَّا الَّذِينَ كَفَرُوا فَيَقُولُونَ مَاذَا أَرَادَ اللَّهُ بِهَٰذَا مَثَلًا﴾.`, list: false },
            { html: `It is repeated to detail multiple items summarised beforehand, as in ﴿كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ. فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ. وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ﴾ — though repetition may be dropped when a single item suffices, as in ﴿فَأَمَّا الَّذِينَ آمَنُوا بِاللَّهِ وَاعْتَصَمُوا بِهِ فَسَيُدْخِلُهُمْ فِي رَحْمَةٍ مِنْهُ وَفَضْلٍ﴾.`, list: false },
          ],
          exercise: {
            prompt: `What three functions does أمّا combine؟`,
            kind: 'mcq',
            options: ['الشرط، التفصيل، والتوكيد', 'العطف، الاستثناء، والنداء', 'التمني، الترجي، والتشبيه', 'الجزم، النصب، والجر'],
            correct: 0,
          },
        },
        {
          heading: 'ما بين أمّا وفائها، وامتناع الجزم',
          lines: [
            { html: `Five things can come between أمّا and its فاء:`, list: false },
            { table: { headers: ['#', 'What comes between', 'Example'], rows: [
              ['1', 'the مبتدأ', '﴿أَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ جَنَّاتُ الْمَأْوَىٰ﴾'],
              ['2', 'the خبر', 'أَمَّا فِي الْبَيْتِ فَزَيْدٌ'],
              ['3', 'the شرط جملة', '﴿فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ فَرَوْحٌ وَرَيْحَانٌ﴾'],
              ['4', 'an اسم governed by a word in the جواب', '﴿فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ﴾'],
              ['5', 'an اسم governed by an omitted word', '﴿وَأَمَّا ثَمُودُ فَهَدَيْنَاهُمْ﴾ (with ثَمُودَ read بالنصب)'],
            ] } },
            { html: `None of the four أحرف الشرط in this lesson cause جزم — that remains exclusive to the أدوات الشرط العاملة (إنْ and its sisters, Module 06).`, list: false },
          ],
          exercise: {
            prompt: `Do لو، لولا، لوما، and أمّا cause جزم the way إنْ and its sisters do؟`,
            kind: 'mcq',
            options: ['No — they are غير عاملة; جزم remains exclusive to the أدوات الشرط العاملة', 'Yes, all four of them cause جزم just like إنْ', 'Only أمّا causes جزم, the other three do not', 'They cause نصب, not جزم'],
            correct: 0,
          },
        },
      ],
      quiz: [
        {
          q: 'List the four أحرف الشرط غير العاملة.',
          options: ['لو، لولا، لوما، أمّا', 'إنْ، إذما، لو، لولا', 'أنْ، كي، لن، إذن', 'لم، لما، لام الأمر، لا الناهية'],
          correct: 0,
        },
        {
          q: "Ibn Hishām's refined view of لو says it does NOT indicate that:",
          options: ['the جواب itself failed to occur', 'the شرط failed to occur', 'the شرط entails the جواب', 'anything at all about the شرط'],
          correct: 0,
        },
        {
          q: '﴿لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا﴾ shows لو converting the مضارع نشاء to:',
          options: ['past meaning', 'future meaning', 'imperative meaning', 'no change in meaning at all'],
          correct: 0,
        },
        {
          q: 'لولا is defined as:',
          options: ['Absence of the جواب due to existence of the شرط', 'Absence of the جواب due to absence of the شرط', 'Necessity of the جواب due to existence of the شرط', 'Necessity of the شرط due to existence of the جواب'],
          correct: 0,
        },
        {
          q: '﴿فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ﴾ shows what coming between أمّا and its فاء?',
          options: ['اسم governed by a word in the جواب', 'المبتدأ', 'الخبر', 'جملة الشرط'],
          correct: 0,
        },
        {
          q: 'Do لو، لولا، لوما، and أمّا cause جزم?',
          options: ['No, they are all غير عاملة', 'Yes, all four do', 'Only لو does', 'Only لولا ولوما do'],
          correct: 0,
        },
      ],
      bank: [
        {
          title: 'التعريف التقليدي للو',
          kind: 'mcq',
          prompt: 'The classical one-line definition of لو is:',
          options: ['Absence of the جواب due to absence of the شرط', 'Absence of the جواب due to existence of the شرط', 'Necessity of the جواب due to existence of the شرط', 'Both the جواب and the شرط being realized together'],
          correct: 0,
        },
        {
          title: 'لو تاب هذا الرجل',
          kind: 'mcq',
          prompt: 'لَوْ تَابَ هَٰذَا الرَّجُلُ إِلَى اللَّهِ لَغَفَرَ اللَّهُ لَهُ implies the man:',
          options: ['did not repent', 'did repent', 'was already forgiven', 'never sinned at all'],
          correct: 0,
        },
        {
          title: 'ما لا يفيده لو',
          kind: 'mcq',
          prompt: 'لَوْ تَابَ هَٰذَا الرَّجُلُ إِلَى اللَّهِ لَغَفَرَ اللَّهُ لَهُ does NOT imply that Allah:',
          options: ['did not forgive him (He may forgive by mercy regardless)', 'exists', 'is capable of forgiveness', 'created the man'],
          correct: 0,
        },
        {
          title: 'وقوع الجواب رغم عدم الشرط',
          kind: 'mcq',
          prompt: '﴿وَلَوْ أَنَّمَا فِي الْأَرْضِ مِنْ شَجَرَةٍ أَقْلَامٌ...مَا نَفِدَتْ كَلِمَاتُ اللَّهِ﴾ shows that Allah\'s words:',
          options: ['are (in fact) inexhaustible, despite the hypothetical شرط not occurring', 'would only be inexhaustible if the trees really were pens', 'are limited in number', 'cannot be discussed hypothetically at all'],
          correct: 0,
        },
        {
          title: 'جواب لو بلا لام',
          kind: 'mcq',
          prompt: '﴿لَوْ نَشَاءُ جَعَلْنَاهُ أُجَاجًا﴾ shows the affirmative جواب of لو:',
          options: ['without the usual لام', 'with the usual لام', 'converted into a سؤال', 'negated entirely'],
          correct: 0,
        },
        {
          title: 'لو للتمني',
          kind: 'mcq',
          prompt: '﴿فَلَوْ أَنَّ لَنَا كَرَّةً فَنَكُونَ مِنَ الْمُؤْمِنِينَ﴾ shows لو carrying the meaning of:',
          options: ['التمني', 'الشرط المحض', 'التوبيخ', 'الاستفهام'],
          correct: 0,
        },
        {
          title: 'اسم صريح بعد لو',
          kind: 'mcq',
          prompt: 'لَوْ زَيْدًا رَأَيْتَهُ لَأَكْرَمْتَهُ — زيدا here is:',
          options: ['معمول لفعل محذوف يفسره ما بعده', 'فاعل لفعل محذوف', 'مبتدأ', 'خبر لو'],
          correct: 0,
        },
        {
          title: 'اسم بأنّ بعد لو',
          kind: 'mcq',
          prompt: '﴿وَلَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَهُمْ﴾ — أنّهم here is:',
          options: ['فاعل لفعل محذوف (لو ثبت أنّ)', 'معمول لفعل محذوف', 'مبتدأ بلا خبر', 'اسم إنّ مباشرة'],
          correct: 0,
        },
        {
          title: 'لولا: جملتان',
          kind: 'mcq',
          prompt: '﴿وَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ مَا زَكَىٰ مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾ shows لولا entering first a جملة اسمية (خبرها محذوف تقديره):',
          options: ['موجود', 'معدوم', 'مذكور', 'محتمل'],
          correct: 0,
        },
        {
          title: 'لوما مثالها',
          kind: 'mcq',
          prompt: 'لَوْمَا التَّوْفِيقُ لَمَا عَمِلْنَا الصَّالِحَاتِ illustrates لوما meaning:',
          options: ['امتناع الجواب لوجود الشرط', 'امتناع الجواب لامتناعه', 'تحقق الشرط والجواب معا', 'التمني المحض'],
          correct: 0,
        },
        {
          title: 'أمّا: المبتدأ بينها وفائها',
          kind: 'mcq',
          prompt: '﴿أَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ جَنَّاتُ الْمَأْوَىٰ﴾ shows what between أمّا and فاء?',
          options: ['المبتدأ (الذين آمنوا)', 'الخبر', 'جملة الشرط', 'اسم بمعمول محذوف'],
          correct: 0,
        },
        {
          title: 'أمّا: جملة الشرط بينها وفائها',
          kind: 'mcq',
          prompt: '﴿فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ فَرَوْحٌ وَرَيْحَانٌ﴾ shows what between أمّا and فاء?',
          options: ['جملة الشرط (إن كان)', 'المبتدأ', 'الخبر', 'اسم بمحذوف مقدر'],
          correct: 0,
        },
        {
          title: 'تكرار أمّا للتفصيل',
          kind: 'mcq',
          prompt: '﴿كَذَّبَتْ ثَمُودُ وَعَادٌ بِالْقَارِعَةِ. فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ. وَأَمَّا عَادٌ فَأُهْلِكُوا بِرِيحٍ صَرْصَرٍ عَاتِيَةٍ﴾ shows أمّا repeated to:',
          options: ['detail (تفصيل) two items summarised beforehand', 'negate both ثمود and عاد', 'ask a question about both peoples', 'express doubt about the punishment'],
          correct: 0,
        },
        {
          title: 'هذه الأربعة غير عاملة',
          kind: 'mcq',
          prompt: 'Do لو، لولا، لوما، أمّا cause جزم, unlike إنْ and إذما?',
          options: ['No — they are غير عاملة', 'Yes, exactly like إنْ', 'Only أمّا does', 'Only لولا does'],
          correct: 0,
        },
        {
          title: 'تركيب: لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا',
          kind: 'tarkeeb',
          instruction: 'Identify the defining trait of لو here.',
          sentence: 'لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا',
          translation: 'If We willed, We could make it debris.',
          cells: ['لَوْ', 'نَشَاءُ', 'لَجَعَلْنَاهُ', 'حُطَامًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'امتناع الجواب لامتناع الشرط' },
            ] },
          ],
          distractors: ['امتناع الجواب لوجود الشرط', 'الشرط والتفصيل والتوكيد'],
        },
        {
          title: 'تركيب: ﴿وَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ مَا زَكَىٰ مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the defining trait of لولا here.',
          sentence: 'وَلَوْلَا فَضْلُ اللَّهِ عَلَيْكُمْ وَرَحْمَتُهُ مَا زَكَىٰ مِنْكُمْ مِنْ أَحَدٍ أَبَدًا',
          translation: 'And if it had not been for the favor of Allah upon you and His mercy, not one of you would have been pure, ever.',
          cells: ['لَوْلَا', 'فَضْلُ', 'اللَّهِ', 'عَلَيْكُمْ', 'وَرَحْمَتُهُ', 'مَا', 'زَكَىٰ', 'مِنْكُمْ', 'مِنْ', 'أَحَدٍ', 'أَبَدًا'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 0, role: 'امتناع الجواب لوجود الشرط' },
            ] },
          ],
          distractors: ['امتناع الجواب لامتناع الشرط', 'الشرط والتفصيل والتوكيد'],
        },
        {
          title: 'تركيب: ﴿فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ﴾',
          kind: 'tarkeeb',
          instruction: 'Identify the three functions أمّا combines.',
          sentence: 'فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ',
          translation: 'As for those who believed, they will know that it is the truth from their Lord.',
          cells: ['أَمَّا', 'الَّذِينَ', 'آمَنُوا', 'فَيَعْلَمُونَ', 'أَنَّهُ', 'الْحَقُّ', 'مِنْ', 'رَبِّهِمْ'],
          rows: [
            { position: 'above', labels: [
              { start: 0, end: 7, role: 'الشرط والتفصيل والتوكيد' },
            ] },
          ],
          distractors: ['امتناع الجواب لامتناع الشرط', 'امتناع الجواب لوجود الشرط'],
        },
        {
          title: 'تركيب: ﴿أَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ جَنَّاتُ الْمَأْوَىٰ﴾',
          kind: 'tarkeeb',
          instruction: 'What comes between أمّا and its فاء here؟',
          sentence: 'أَمَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ فَلَهُمْ جَنَّاتُ الْمَأْوَىٰ',
          translation: 'As for those who believed and did righteous deeds, for them are the Gardens of Refuge.',
          cells: ['أَمَّا', 'الَّذِينَ', 'آمَنُوا', 'وَعَمِلُوا', 'الصَّالِحَاتِ', 'فَلَهُمْ', 'جَنَّاتُ', 'الْمَأْوَىٰ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 4, role: 'المبتدأ' },
            ] },
          ],
          distractors: ['الخبر', 'جملة الشرط'],
        },
        {
          title: 'تركيب: أَمَّا فِي الْبَيْتِ فَزَيْدٌ',
          kind: 'tarkeeb',
          instruction: 'What comes between أمّا and its فاء here؟',
          sentence: 'أَمَّا فِي الْبَيْتِ فَزَيْدٌ',
          translation: 'As for [who is] in the house, it is Zayd.',
          cells: ['أَمَّا', 'فِي', 'الْبَيْتِ', 'فَزَيْدٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 2, role: 'الخبر' },
            ] },
          ],
          distractors: ['المبتدأ', 'جملة الشرط'],
        },
        {
          title: 'تركيب: ﴿فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ فَرَوْحٌ وَرَيْحَانٌ﴾',
          kind: 'tarkeeb',
          instruction: 'What comes between أمّا and its فاء here؟',
          sentence: 'فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ فَرَوْحٌ وَرَيْحَانٌ',
          translation: 'And if he is of those brought near [to Allah], then rest and bounty.',
          cells: ['أَمَّا', 'إِنْ', 'كَانَ', 'مِنَ', 'الْمُقَرَّبِينَ', 'فَرَوْحٌ', 'وَرَيْحَانٌ'],
          rows: [
            { position: 'above', labels: [
              { start: 1, end: 4, role: 'جملة الشرط' },
            ] },
          ],
          distractors: ['المبتدأ', 'الخبر'],
        },
      ],
    },
  ],
};

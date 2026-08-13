// Module 17 — أحرف الشرط غير العاملة (لَوْ، لَوْلا/لَوْما، أَمّا)
//
// Source: app-lessons/092-law-shartiyya.md through
// app-lessons/094-amma-shartiyya.md. Covers the fourth قسم of الحرف غير
// العامل per COURSE-MAP.md's proposal — the four non-governing
// conditional particles: لَوْ (l1), لَوْلا and لَوْما as a matched pair
// (l2), and أَمّا (l3). A leaner module (3 lessons), since 093 (لَوْلا/
// لَوْما) is genuinely thin on its own and 092/094 are each already full
// lessons — matching the proposal COURSE-MAP.md carried before authoring.
// l1's source calls لَوْ "the richest of the four" outright, and that
// density pushed l1 to 7 concepts rather than the ~6 estimated, the same
// kind of overflow Module 03's l1 and Module 07's l1 hit for the same
// reason (a genuinely dense source section, not padding).
//
// This module is NOT yet registered in content/annahw.js's MODULES array
// — modules 10-16 (COURSE-MAP.md's continuation of حروف الجر through
// أحرف الجواب والنفي والتأكيد) remain unauthored, and MODULES currently
// runs 01-09 in straight id order (array position drives unlock order).
// Wiring 17 in ahead of 10-16 would put it in the wrong unlock position;
// left for the merge pass once that gap is filled, the same deferral
// content/module-09.js's own header already applies to itself.
//
// Concept bodies use the lines[]/box/table shape, matching every module
// authored so far. Several of 092-094's own Careful boxes are English
// prose in the source rather than a quoted Arabic line (e.g. the
// "traditional definition assumes الشرط is the sole cause" critique in
// 092, and the لَوْ/لَوْلا polarity warning in 093) — per the distillation
// pattern Module 02's COURSE-MAP entry documents, these were rewritten as
// a short Arabic box statement matching Module 01's register, with the
// full English explanation kept in the surrounding prose. Where 094's own
// Careful boxes already quote a short Arabic phrase inline (وَفي النَّفْسِ
// مِنْهُ شَيْءٌ; في تَسْمِيَتِهِ جَوابًا نَظَرٌ), that quoted phrase is used
// as the box directly rather than distilled further.
//
// Bank تركيب items use the flat words[]/labels[]/distractors[] schema.
// l2's تركيب count (2, not the usual 6) reflects 093's own source
// material: only two genuinely worked example sentences exist for لَوْلا/
// لَوْما (the ﴿وَلَوْلا فَضْلُ اللهِ...﴾ ayah and the لَوْما التَّوْفيقُ
// sentence) — the same discipline earlier modules applied to their own
// thin spots. l1 and l3 (092 and 094) are both rich in fully-worked,
// explicitly-labelled example sentences, so both carry the full 6.
export default {
  id: '17',
  title: 'أحرف الشرط',
  heading: 'العامل وغير العامل',
  subheading: 'الحرف غير العامل',
  blurb: 'لَوْ, لَوْلا/لَوْما, and أَمّا — the four أحرف الشرط that trigger a جواب without governing the mood of a following فعل, closing out الحرف غير العامل.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'لَوْ',
      subtitle: `لَوْ — Ibn Hishām's corrected definition, why الجواب can have more than one cause, its past-tense meaning, the لام on its جواب, its تمني sense, and the noun that can follow it`,
      concepts: [
        {
          heading: 'التعريف الشائع للو',
          lines: [
            { html: `<bdi>أَحْرُفُ الشَّرْطِ</bdi> form a fourth قسم of الحرف غير العامل — four particles in all: <bdi>لَوْ</bdi>, <bdi>لَوْلا</bdi>, <bdi>لَوْما</bdi>, and <bdi>أَمّا</bdi>. None of the four governs the mood of a following فعل the way إِنْ or another جازم does; each simply triggers a جواب. This lesson opens with the richest of the four.`, list: false },
            { box: { title: 'Definition', lines: [`لَوْ لِامْتِناعِ الجَوابِ لِامْتِناعِ الشَّرْطِ`] } },
            { html: `The traditional definition says لَوْ marks الجواب as having failed to happen BECAUSE الشرط failed to happen. Mūsā uses it this way after the incident of the golden calf.`, list: false },
            { box: { title: 'Example', lines: [`﴿لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيّايَ﴾`] } },
            { html: `"Had You willed, You could have destroyed them, and me, before [this]." الشرط is <bdi>شِئْتَ</bdi> ("had You willed"), which did not happen; الجواب is <bdi>أَهْلَكْتَهُمْ</bdi> ("You would have destroyed them"), which likewise did not happen.`, list: false },
          ],
          exercise: {
            prompt: `Reading ﴿لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيّايَ﴾ through the traditional definition of لَوْ (امتناع الجواب لامتناع الشرط), which pairing correctly names الشرط and الجواب؟`,
            kind: 'mcq',
            options: [`الشرط is "had You willed" (شِئْتَ); الجواب is "You would have destroyed them" (أَهْلَكْتَهُمْ) — neither occurred`, `الشرط is "You would have destroyed them"; الجواب is "had You willed"`, `الشرط and الجواب both refer to the same clause, أَهْلَكْتَهُمْ`, `This ayah has a جواب but no شرط`],
            correct: 0,
          },
        },
        {
          heading: 'نقد التعريف الشائع وتصحيح ابن هشام',
          lines: [
            { html: `That traditional definition turns out to be flawed.`, list: false },
            { box: { title: 'Careful', lines: [`التَّعْريفُ الشّائِعُ يَفْتَرِضُ أَنَّ الشَّرْطَ هُوَ السَّبَبُ الوَحيدُ لِلْجَوابِ`] } },
            { html: `It quietly assumes الشرط is the SOLE possible cause of الجواب — when in fact الجواب might still have happened for some other reason even if الشرط never did (تَعَدُّد الأسباب, "multiplicity of possible causes").`, list: false },
            { box: { title: 'Rule', lines: [`لَوْ حَرْفٌ يَقْتَضي امْتِناعَ الشَّرْطِ واسْتِلْزامَ الشَّرْطِ لِلْجَوابِ، أَيْ يَدُلُّ على عَدَمِ وُجودِ الشَّرْطِ وَعلى وُجودِ الجَوابِ عِنْدَ وُجودِ الشَّرْطِ، وَلا يَقْتَضي امْتِناعَ الجَوابِ لِامْتِناعِ الشَّرْطِ`] } },
            { html: `This corrected definition, summarized from Ibn Hishām, says لَوْ tells us only two things: (1) الشرط did not occur, and (2) had it occurred, الجواب would necessarily have followed. It does NOT claim الجواب is therefore impossible without الشرط.`, list: false },
          ],
          exercise: {
            prompt: `Ibn Hishām's corrected definition of لَوْ keeps "الشرط did not occur, and had it occurred الجواب would have followed" but drops one claim the traditional definition made. Which claim does it drop؟`,
            kind: 'mcq',
            options: [`That الجواب itself is impossible without الشرط — الجواب might still have another cause`, `That الشرط did not occur`, `That لَوْ always requires a فعل after it`, `That لَوْ can carry the meaning of تمني`],
            correct: 0,
          },
        },
        {
          heading: 'تطبيق التصحيح: مثالا التوبة والأشجار',
          lines: [
            { html: `Two examples show why the "multiplicity of causes" point matters.`, list: false },
            { box: { title: 'Example', lines: [`لَوْ تابَ هَذا الرَّجُلُ إلى اللهِ لَغَفَرَ اللهُ لَهُ`] } },
            { html: `"Had this man repented to Allah, Allah would have forgiven him." This tells us repentance necessarily brings forgiveness, and that the man did not repent — it does NOT tell us he was never forgiven. Allah may still forgive him out of sheer mercy, with no repentance involved at all.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَلَوْ أَنَّما فِي الْأَرْضِ مِنْ شَجَرَةٍ أَقْلامٌ وَالْبَحْرُ يَمُدُّهُ مِنْ بَعْدِهِ سَبْعَةُ أَبْحُرٍ مّا نَفِدَتْ كَلِماتُ اللهِ﴾`] } },
            { html: `"And if every tree on earth were pens, and the sea [were ink], with seven more seas added to it, the words of Allah would not be exhausted." الشرط here (all trees becoming pens) never happened — yet الجواب (the words of Allah not running out) is true regardless, standing on its own whether or not that scenario ever occurs.`, list: false },
            { table: { title: 'الشرط والجواب في المثالين', headers: ['المثال', 'الشرط', 'الجواب المذكور'], rows: [
              [`لَوْ تابَ هَذا الرَّجُلُ إلى اللهِ لَغَفَرَ اللهُ لَهُ`, `لم يَتُبْ`, `لَمْ يَغْفِرِ اللهُ لَهُ (بحسب هذا المثال وحده)`],
              [`وَلَوْ أَنَّما فِي الْأَرْضِ مِنْ شَجَرَةٍ أَقْلامٌ...`, `لَمْ تَكُنِ الْأَشْجارُ أَقْلامًا`, `عَدَمُ نَفادِ كَلِماتِ اللهِ — حقٌّ سواء وقع الشرط أم لا`],
            ] } },
          ],
          exercise: {
            prompt: `لَوْ تابَ هَذا الرَّجُلُ إلى اللهِ لَغَفَرَ اللهُ لَهُ tells us repentance necessarily brings forgiveness, and that this particular man did not repent. What does it NOT tell us؟`,
            kind: 'mcq',
            options: [`That the man was never forgiven — Allah may still forgive him through sheer mercy, without any repentance at all`, `That repentance brings forgiveness`, `That the man did not repent`, `That لَوْ marks a hypothetical, not a fact`],
            correct: 0,
          },
        },
        {
          heading: 'سؤال مفتوح: مثال عمر في صهيب',
          lines: [
            { html: `A third example is left deliberately open.`, list: false },
            { box: { title: 'Example', lines: [`نِعْمَ العَبْدُ صُهَيْبٌ، لَوْ لَمْ يَخَفِ اللهَ لَمْ يَعْصِهِ`] } },
            { html: `ʿUmar said this of Ṣuhayb al-Rūmī: "What an excellent servant Ṣuhayb is: even if he did not fear Allah, he would not disobey Him." الشرط is the hypothetical "he did not fear Allah"; الجواب is "he would not disobey."`, list: false },
            { table: { title: 'الشرط والجواب المفتوح', headers: ['الشرط', 'الجواب'], rows: [[`عَدَمُ خَوْفِ صُهَيْبٍ لِلّهِ — لم يوجد`, `عَدَمُ المَعْصِيَةِ — ؟`]] } },
            { html: `What would actually follow, in reality, if Ṣuhayb genuinely had no fear of Allah at all? The source leaves this as a real test of whether الجواب's truth depends only on الشرط — or rests on some other cause, such as sheer love of Allah, independent of fear.`, list: false },
          ],
          exercise: {
            prompt: `ʿUmar said of Ṣuhayb: نِعْمَ العَبْدُ صُهَيْبٌ، لَوْ لَمْ يَخَفِ اللهَ لَمْ يَعْصِهِ. Why is this example left as an open question rather than settled like the repentance example؟`,
            kind: 'mcq',
            options: [`Because it is genuinely unclear whether "he would not disobey" depends only on "he did not fear Allah," or rests on some other cause, such as love of Allah`, `Because Ṣuhayb is not a real historical figure`, `Because لَوْ cannot introduce a negated شرط`, `Because ʿUmar's statement contains no جواب at all`],
            correct: 0,
          },
        },
        {
          heading: 'الزمن الذي تدل عليه لو، ودخول اللام على جوابها',
          lines: [
            { box: { title: 'Rule', lines: [`كَلِمَةُ لَوْ تَدُلُّ على الماضي، وَإِنْ دَخَلَتْ على مُضارِعٍ يَقْلِبُهُ ماضِيًا`] } },
            { html: `لَوْ always locates its clause in the past, even when the verb after it is grammatically a فعل مضارع. Entering لَوْ effectively flips that مضارع to a past-tense meaning.`, list: false },
            { box: { title: 'Example', lines: [`﴿لَوْ نَشاءُ لَجَعَلْناهُ حُطامًا﴾`] } },
            { html: `"If We willed, We could have made it [the crop] into chaff." <bdi>نَشاءُ</bdi> is morphologically present-tense, yet its meaning here is past/hypothetical, not ongoing.`, list: false },
            { box: { title: 'Rule', lines: [`وَيَكْثُرُ دُخولُ اللّامِ على جَوابِ لَوِ المُثْبَتِ، وَالْغالِبُ أَنَّ هَذِهِ اللّامَ تُفيدُ التَّأْكيدَ فَتَدْخُلُ على جَوابٍ بَعيدِ الوُقوعِ عادَةً`] } },
            { html: `When الجواب is مُثْبَت (affirmative), it frequently carries a prefixed ل — though not always. The ل tends to appear specifically when الجواب describes something far-fetched, using its emphasis to compensate for how surprising the claim is.`, list: false },
            { table: { title: 'اللام الفارقة بين جواب متوقَّع وجواب بعيد', headers: ['المثال', 'هل دخلت اللام؟', 'السبب'], rows: [
              [`وَلَوْ نَشاءُ لَجَعَلْنا مِنْكُمْ مَلائِكَةً في الأرْضِ يَخْلُفونَ`, `نعم`, `تحويل البشر إلى ملائكة أمر بعيد الوقوع`],
              [`فَلَوْ شاءَ لَهَداكُمْ أَجْمَعينَ`, `نعم`, `هداية الجميع دون استثناء أمر بعيد الوقوع`],
              [`لَوْ نَشاءُ أَصَبْناهُمْ بِذُنوبِهِمْ`, `لا`, `معاقبة المذنبين على ذنوبهم أمر متوقَّع، لا يحتاج تأكيدًا`],
            ] } },
          ],
          exercise: {
            prompt: `﴿لَوْ نَشاءُ لَجَعَلْناهُ حُطامًا﴾ carries a لام on its جواب, but ﴿لَوْ نَشاءُ أَصَبْناهُمْ بِذُنوبِهِمْ﴾ does not. What explains the difference؟`,
            kind: 'mcq',
            options: [`The لام tends to mark a جواب describing something far-fetched; punishing wrongdoers for their sins is the ordinary, expected outcome and needs no such emphasis`, `The لام only appears when the فعل after لَوْ is ماضٍ, and نَشاءُ is مضارع in both examples`, `The لام marks a negated جواب, and أَصَبْناهُمْ is negated`, `There is no real difference — the لام is optional and carries no meaning`],
            correct: 0,
          },
        },
        {
          heading: 'معنى التمني في لو',
          lines: [
            { box: { title: 'Rule', lines: [`قَدْ يَتَضَمَّنُ لَوْ معنى التَّمَنّي`] } },
            { html: `Beyond its conditional sense, لَوْ can shift to carry the meaning of تَمَنٍّ (wishing) — functioning much like لَيْتَ.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَلَوْ أَنَّ لَنا كَرَّةً فَنَكونَ مِنَ الْمُؤْمِنينَ﴾`] } },
            { html: `"If only we had a chance to return, that we might be among the believers" — the regret of the disbelievers in the Hereafter, wishing for a second chance at life. It is a wish, not a real hypothetical about the present or future.`, list: false },
            { box: { title: 'Careful', lines: [`اخْتُلِفَ: هَلْ لِلَوِ التَّمَنِّيَّةِ جَوابٌ أَمْ لا؟`] } },
            { html: `Scholars disagree on whether this تمني-use of لَوْ even needs a جواب. One view: no جواب is needed, because لَوْ has effectively become a pure particle of wishing once it carries this meaning. The other view: لَوْ is still fundamentally شَرْطِيَّة at its root, merely "steeped in" (أُشْرِبَتْ) the added flavor of wishing — so a جواب is still technically present, just محذوف, understood as something like لَوْ ثَبَتَتْ لَنا كَرَّةٌ لَآمَنّا.`, list: false },
          ],
          exercise: {
            prompt: `﴿فَلَوْ أَنَّ لَنا كَرَّةً فَنَكونَ مِنَ الْمُؤْمِنينَ﴾ expresses the disbelievers' regret in the Hereafter. Beyond its usual conditional sense, what meaning does لَوْ carry here؟`,
            kind: 'mcq',
            options: [`تَمَنٍّ (wishing) — لَوْ functions much like لَيْتَ, "if only..."`, `اسْتِفْهام (a question)`, `تَحْضيض (urging someone to act)`, `نَفْي (negation)`],
            correct: 0,
          },
        },
        {
          heading: 'الاسم الواقع بعد لو: الاشتغال والمؤول بأنّ',
          lines: [
            { box: { title: 'Rule', lines: [`يَلْزَمُ أَن يَكونَ بَعْدَ لَوْ فِعْلٌ، وَإِذا جاءَ بَعْدَها اسْمٌ فَهُوَ إِمّا اسْمٌ صَريحٌ مَعْمولٌ لِعامِلٍ مَحْذوفٍ يُفَسِّرُهُ ما بَعْدَهُ، أَوْ اسْمٌ مُؤَوَّلٌ بِأَنَّ يَكونُ فاعِلًا لِفِعْلٍ مَحْذوفٍ`] } },
            { html: `لَوْ ordinarily requires a فِعْل directly after it, not a noun. When a bare noun does appear right after لَوْ, it is not really functioning as a simple subject — it is one of two special constructions.`, list: false },
            { box: { title: 'Example', lines: [`لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ`] } },
            { html: `"If I had seen Zayd, I would have honored him." <bdi>زَيْدًا</bdi> looks like it directly follows لَوْ, but it is really the object of a hidden, earlier verb — "explained" (يُفَسِّرُهُ) by the visible verb رَأَيْتُهُ that comes after it. The sentence is understood as لَوْ رَأَيْتُ زَيْدًا لَأَكْرَمْتُهُ — the familiar باب الاشتغال pattern.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ`,
                translation: `If I had seen Zayd, I would have honored him.`,
                cells: [`لَوْ`, `زَيْدًا`, `رَأَيْتُهُ`, `لَأَكْرَمْتُهُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف شرط غير عامل` }, { start: 1, end: 1, role: `مفعول به لفعل محذوف يفسره ما بعده` }, { start: 2, end: 2, role: `الفعل المفسِّر (فعل الشرط) وفاعله ومفعوله` }, { start: 3, end: 3, role: `جواب الشرط` }] },
                ],
              },
            },
            { box: { title: 'Example', lines: [`﴿وَلَوْ أَنَّهُمْ فَعَلوا ما يوعَظونَ بِهِ لَكانَ خَيْرًا لَهُمْ﴾`] } },
            { html: `"And if they had done what they were exhorted to do, it would have been better for them." Here <bdi>أَنَّهُمْ فَعَلوا ما يوعَظونَ بِهِ</bdi> is not a bare noun at all, but أَنَّ and its clause, standing as the فاعل of a hidden verb whose meaning is roughly "it was established" (تَقْديرُهُ: لَوْ ثَبَتَ أَنَّهُمْ...). أَنَّ وما بعدها is مَرْفوع in position (مَحَلًّا) even though it shows no visible إعراب marker of its own.`, list: false },
          ],
          exercise: {
            prompt: `In لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ, the noun زَيْدًا sits directly after لَوْ. Why is this not a simple counter-example to "لَوْ requires a فعل after it"؟`,
            kind: 'mcq',
            options: [`زَيْدًا is the object of a hidden earlier verb, "explained" by رَأَيْتُهُ afterward — the familiar باب الاشتغال pattern, not a bare noun subject`, `زَيْدًا is actually the فاعل of لَوْ itself, since لَوْ can act as a عامل`, `لَوْ never governs a اسم مؤول, only a اسم صريح`, `رَأَيْتُهُ is مبني, so زَيْدًا must be its topic`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following is the corrected (Ibn Hishām) definition of لَوْ, rather than the traditional one؟`, options: [`لَوْ يقتضي امتناع الشرط واستلزامه للجواب, but does not itself claim امتناع الجواب`, `لَوْ يقتضي امتناع الجواب لامتناع الشرط, full stop`, `لَوْ يقتضي وجود الشرط ووجود الجواب معًا`, `لَوْ لا تدل على شيء غير الزمن الماضي`], correct: 0 },
        { q: `ʿUmar said of Ṣuhayb: نِعْمَ العَبْدُ صُهَيْبٌ، لَوْ لَمْ يَخَفِ اللهَ لَمْ يَعْصِهِ. Why does the source leave this example's truth open, unlike the repentance example؟`, options: [`Because it is genuinely unclear whether "he would not disobey" depends only on the negated شرط, or rests on another cause such as love of Allah`, `Because Ṣuhayb is a fictional character`, `Because the sentence has no جواب at all`, `Because لَوْ cannot introduce a negated شرط`], correct: 0 },
        { q: `﴿لَوْ نَشاءُ لَجَعَلْناهُ حُطامًا﴾ uses نَشاءُ, a فعل مضارع in form. What tense does لَوْ give it in meaning؟`, options: [`Past/hypothetical — لَوْ flips a مضارع after it into a past-tense meaning`, `Future`, `Ongoing present`, `Imperative`], correct: 0 },
        { q: `Comparing ﴿وَلَوْ نَشاءُ لَجَعَلْنا مِنْكُمْ مَلائِكَةً في الأرْضِ يَخْلُفونَ﴾ (with لام) against ﴿لَوْ نَشاءُ أَصَبْناهُمْ بِذُنوبِهِمْ﴾ (without لام), what governs whether لَوْ's affirmative جواب takes the لام؟`, options: [`It tends to appear when الجواب describes a far-fetched outcome, adding emphasis; an ordinary, expected outcome usually goes without it`, `It appears only when الشرط is negated`, `It appears only in Qur'anic Arabic, never elsewhere`, `It is required whenever the فعل after لَوْ is مضارع`], correct: 0 },
        { q: `In لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ, what is زَيْدًا's actual grammatical role, despite sitting right after لَوْ؟`, options: [`مفعول به for a hidden verb, explained by رَأَيْتُهُ afterward (باب الاشتغال)`, `فاعل لِـ لَوْ`, `مبتدأ لجملة اسمية`, `توكيد لفظي لِـ لَوْ`], correct: 0 },
        { q: `﴿فَلَوْ أَنَّ لَنا كَرَّةً فَنَكونَ مِنَ الْمُؤْمِنينَ﴾ expresses the disbelievers wishing for a second chance. What sense does لَوْ carry here, beyond its ordinary conditional meaning؟`, options: [`تَمَنٍّ — a wish, functioning like لَيْتَ`, `تَعَجُّب — wonder/amazement`, `اسْتِفْهام — a question`, `نِداء — calling out to someone`], correct: 0 },
      ],
      bank: [
        { title: `لَوْ: التعريف الشائع`, kind: 'mcq', prompt: `Which of the following is the traditional (though flawed) definition of لَوْ؟`, options: [`امتناع الجواب لامتناع الشرط`, `امتناع الشرط لامتناع الجواب`, `وجوب الجواب عند وجوب الشرط`, `اقتران الجواب بالفاء وجوبًا`], correct: 0 },
        { title: `مثال موسى عليه السلام`, kind: 'mcq', prompt: `In ﴿لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيّايَ﴾, what does الشرط (شِئْتَ) tell us happened؟`, options: [`It did not happen — Allah did not will their destruction`, `It happened, and so did الجواب`, `It happened, but الجواب did not`, `Neither شرط nor جواب can be identified in this ayah`], correct: 0 },
        { title: `لماذا التعريف الشائع منتقد؟`, kind: 'mcq', prompt: `The traditional definition of لَوْ (امتناع الجواب لامتناع الشرط) is criticized for assuming what؟`, options: [`That الشرط is the only possible cause of الجواب`, `That لَوْ always governs a اسم`, `That لَوْ never appears with a negated شرط`, `That الجواب must always carry a لام`], correct: 0 },
        { title: `ابن هشام: ماذا يبقى من التعريف؟`, kind: 'mcq', prompt: `Ibn Hishām's corrected definition keeps two claims about لَوْ. What are they؟`, options: [`الشرط did not occur, and had it occurred الجواب would necessarily have followed`, `الشرط occurred, and الجواب therefore did not`, `Both الشرط and الجواب occurred together`, `Neither شرط nor جواب can be determined from لَوْ alone`], correct: 0 },
        { title: `تعدد الأسباب: مثال التوبة`, kind: 'mcq', prompt: `لَوْ تابَ هَذا الرَّجُلُ إلى اللهِ لَغَفَرَ اللهُ لَهُ. According to Ibn Hishām's corrected reading, could Allah still forgive the man even without his repentance؟`, options: [`Yes — الجواب might have another cause (sheer mercy), even though this لَوْ-sentence only speaks to the repentance route`, `No — لَوْ proves forgiveness is impossible without repentance`, `No — the ayah explicitly rules out any other cause`, `The question cannot arise, since تابَ is a فعل أمر`], correct: 0 },
        { title: `مثال الأشجار أقلامًا`, kind: 'mcq', prompt: `﴿وَلَوْ أَنَّما فِي الْأَرْضِ مِنْ شَجَرَةٍ أَقْلامٌ ... مّا نَفِدَتْ كَلِماتُ اللهِ﴾ — the trees never became pens (الشرط never occurred), yet what is true of الجواب, "the words of Allah not running out"؟`, options: [`It is true regardless — its truth does not depend on the trees-as-pens scenario ever occurring`, `It is false, since الشرط never occurred`, `It cannot be evaluated at all`, `It is true only if the sea also turns to ink`], correct: 0 },
        { title: `صهيب: الشرط والجواب`, kind: 'mcq', prompt: `نِعْمَ العَبْدُ صُهَيْبٌ، لَوْ لَمْ يَخَفِ اللهَ لَمْ يَعْصِهِ. What is الشرط in this sentence؟`, options: [`عَدَمُ خَوْفِ صُهَيْبٍ لِلّهِ — the hypothetical that he did not fear Allah`, `عَدَمُ المَعْصِيَةِ — that he would not disobey`, `نِعْمَ العَبْدُ صُهَيْبٌ — the praise clause itself`, `There is no شرط in this sentence`], correct: 0 },
        { title: `صهيب: السؤال المفتوح`, kind: 'mcq', prompt: `Why does the صهيب example test the "multiplicity of causes" point more sharply than the repentance example does؟`, options: [`Because it genuinely is not obvious whether صهيب's obedience rests only on fear, or on some other cause like love of Allah`, `Because صهيب's obedience is explicitly stated to have no cause at all`, `Because ʿUmar's statement contains two separate أحرف شرط`, `Because the sentence uses لَوْلا, not لَوْ`], correct: 0 },
        { title: `لو والزمن`, kind: 'mcq', prompt: `لَوْ always locates its clause in which tense, regardless of the form of the فعل that follows it؟`, options: [`الماضي`, `المضارع`, `المستقبل`, `لَوْ carries no tense meaning at all`], correct: 0 },
        { title: `نشاء: مضارع بمعنى ماضٍ`, kind: 'mcq', prompt: `In ﴿لَوْ نَشاءُ لَجَعَلْناهُ حُطامًا﴾, نَشاءُ is morphologically a فعل مضارع. What does entering لَوْ do to its meaning؟`, options: [`It flips the meaning to past/hypothetical`, `It leaves the meaning as ongoing present`, `It shifts the meaning to a command`, `It has no effect on tense at all`], correct: 0 },
        { title: `اللام في جواب لو: متى تكثر؟`, kind: 'mcq', prompt: `The لام that frequently prefixes لَوْ's affirmative جواب tends to appear specifically when؟`, options: [`الجواب describes something far-fetched or unlikely, and the لام adds emphasis`, `الشرط is negated`, `الجواب is a جملة اسمية`, `لَوْ carries the meaning of تمني`], correct: 0 },
        { title: `اللام غائبة: مثال العقاب`, kind: 'mcq', prompt: `﴿لَوْ نَشاءُ أَصَبْناهُمْ بِذُنوبِهِمْ﴾ carries no لام on its جواب. Why not, given that other affirmative جوابات do carry one؟`, options: [`Because punishing wrongdoers for their sins is the expected, unsurprising outcome, needing no special emphasis`, `Because أَصَبْناهُمْ is a فعل أمر`, `Because الشرط here is negated`, `Because this ayah has no جواب at all`], correct: 0 },
        { title: `لو ومعنى التمني`, kind: 'mcq', prompt: `Beyond its usual conditional meaning, what other sense can لَوْ carry, resembling لَيْتَ؟`, options: [`تَمَنٍّ (wishing)`, `تَعَجُّب (wonder)`, `تَحْضيض (urging)`, `اسْتِفْهام (questioning)`], correct: 0 },
        { title: `هل للو التمنية جواب؟`, kind: 'mcq', prompt: `Scholars disagree over ﴿فَلَوْ أَنَّ لَنا كَرَّةً فَنَكونَ مِنَ الْمُؤْمِنينَ﴾'s تمني-use of لَوْ. What is the disagreement about؟`, options: [`Whether this لَوْ still needs a جواب, or has become a pure particle of wishing that needs none`, `Whether لَوْ here means "if" or "when"`, `Whether كَرَّةً is منصوب or مرفوع`, `Whether the speakers are believers or disbelievers`], correct: 0 },
        { title: `لو والاسم بعدها: القاعدة العامة`, kind: 'mcq', prompt: `What does لَوْ ordinarily require directly after it؟`, options: [`فِعْل, not اسم`, `اسم صريح only`, `اسم مؤول only`, `Either a اسم or a فعل, with no preference`], correct: 0 },
        { title: `زيدًا بعد لو: الاشتغال`, kind: 'mcq', prompt: `In لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ, زَيْدًا appears right after لَوْ. What is its real grammatical role؟`, options: [`مفعول به for a hidden verb, explained by the visible رَأَيْتُهُ afterward — the باب الاشتغال pattern`, `فاعل مباشر لِـ لَوْ`, `مبتدأ لجملة اسمية تامة`, `بدل من الفعل رَأَيْتُهُ`], correct: 0 },
        { title: `الاسم المؤول بأنّ بعد لو`, kind: 'mcq', prompt: `In ﴿وَلَوْ أَنَّهُمْ فَعَلوا ما يوعَظونَ بِهِ لَكانَ خَيْرًا لَهُمْ﴾, what is أَنَّهُمْ فَعَلوا ما يوعَظونَ بِهِ analyzed as؟`, options: [`اسم مؤول standing as فاعل for a hidden verb (تقديره: لَوْ ثَبَتَ), مرفوع محلًّا though it shows no visible إعراب marker`, `الجواب of لَوْ`, `فعل الشرط مباشرة`, `توكيد لفظي لِـ لَوْ`], correct: 0 },
        { title: `الفرق بين الاسم الصريح والمؤول بعد لو`, kind: 'mcq', prompt: `لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ places a اسم صريح after لَوْ (via اشتغال); ﴿وَلَوْ أَنَّهُمْ فَعَلوا...﴾ places a اسم مؤول after it. What licenses each one to follow لَوْ, which still requires فعل directly after it؟`, options: [`اسم صريح: object of a hidden verb explained by what follows; اسم مؤول: أنّ + its clause together stand as the فاعل of a hidden verb`, `Both are licensed the exact same way, with no difference`, `اسم صريح is always مرفوع, while اسم مؤول is always منصوب`, `اسم مؤول can only appear with كي, never with لَوْ`], correct: 0 },
        {
          title: `تركيب: لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا﴾.`,
          source: `لَوْ نَشَاءُ لَجَعَلْنَاهُ حُطَامًا`,
          words: [`لَوْ`, `نَشَاءُ`, `لَجَعَلْنَاهُ`, `حُطَامًا`],
          labels: [`حرف شرط غير عامل`, `فعل الشرط (مضارع بمعنى الماضي)`, `جواب الشرط مقترن باللام`, `مفعول به ثانٍ لـِ"جعل"`],
          distractors: [`مبتدأ`, `فاعل`, `حرف شرط جازم`, `مفعول به أول`],
        },
        {
          title: `تركيب: لَوْ نَشَاءُ أَصَبْنَاهُم بِذُنُوبِهِم`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿لَوْ نَشَاءُ أَصَبْنَاهُم بِذُنُوبِهِم﴾.`,
          source: `لَوْ نَشَاءُ أَصَبْنَاهُم بِذُنُوبِهِم`,
          words: [`لَوْ`, `نَشَاءُ`, `أَصَبْنَاهُم`, `بِذُنُوبِهِم`],
          labels: [`حرف شرط غير عامل`, `فعل الشرط`, `جواب الشرط غير مقترن باللام`, `جار ومجرور متعلقان بـِ"أصاب"`],
          distractors: [`توكيد`, `بدل`, `حرف شرط جازم`, `جواب الشرط مقترن باللام`],
        },
        {
          title: `تركيب: لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of the باب الاشتغال sentence لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ.`,
          source: `لَوْ زَيْدًا رَأَيْتُهُ لَأَكْرَمْتُهُ`,
          words: [`لَوْ`, `زَيْدًا`, `رَأَيْتُهُ`, `لَأَكْرَمْتُهُ`],
          labels: [`حرف شرط غير عامل`, `مفعول به لفعل محذوف يفسره ما بعده`, `الفعل المفسِّر وفاعله ومفعوله`, `جواب الشرط`],
          distractors: [`مبتدأ`, `نعت`, `فاعل`, `اسم مؤول`],
        },
        {
          title: `تركيب: ﴿لَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَهُمْ﴾`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿وَلَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَهُمْ﴾.`,
          source: `لَوْ أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ لَكَانَ خَيْرًا لَهُمْ`,
          words: [`لَوْ`, `أَنَّهُمْ فَعَلُوا مَا يُوعَظُونَ بِهِ`, `لَكَانَ خَيْرًا لَهُمْ`],
          labels: [`حرف شرط غير عامل`, `اسم مؤول (أنّ واسمها وخبرها) في محل رفع فاعل لفعل محذوف تقديره ثَبَتَ`, `جواب الشرط`],
          distractors: [`فعل الشرط مباشرة`, `توكيد لفظي`, `مفعول به لفعل محذوف يفسره ما بعده`, `حرف شرط جازم`],
        },
        {
          title: `تركيب: لَوْ لَمْ يَخَفِ اللهَ لَمْ يَعْصِهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ʿUmar's description of Ṣuhayb: لَوْ لَمْ يَخَفِ اللهَ لَمْ يَعْصِهِ.`,
          source: `لَوْ لَمْ يَخَفِ اللهَ لَمْ يَعْصِهِ`,
          words: [`لَوْ`, `لَمْ يَخَفِ اللهَ`, `لَمْ يَعْصِهِ`],
          labels: [`حرف شرط غير عامل`, `فعل الشرط (منفي بلَمْ) وفاعله ومفعوله`, `جواب الشرط (منفي بلَمْ)`],
          distractors: [`مضاف إليه`, `حال`, `حرف شرط جازم`, `جواب الشرط مقترن باللام`],
        },
        {
          title: `تركيب: لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيَّايَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of Mūsā's words ﴿لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيّايَ﴾.`,
          source: `لَوْ شِئْتَ أَهْلَكْتَهُمْ مِنْ قَبْلُ وَإِيَّايَ`,
          words: [`لَوْ`, `شِئْتَ`, `أَهْلَكْتَهُمْ`, `مِنْ قَبْلُ`, `وَإِيَّايَ`],
          labels: [`حرف شرط غير عامل`, `فعل الشرط وفاعله`, `جواب الشرط`, `ظرف زمان متعلق بـِ"أهلك"`, `معطوف على الضمير المتصل في "أهلكتهم"`],
          distractors: [`بدل`, `تمييز`, `حرف شرط جازم`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'لَوْلا ولَوْما',
      subtitle: `لَوْلا and لَوْما — the mirror-image polarity of لَوْ, and the fixed اسمية+فعلية two-clause structure both particles share`,
      concepts: [
        {
          heading: 'لولا: التعريف وعكس قطبية لو',
          lines: [
            { html: `The second and third of the four أحرف الشرط share one meaning: <bdi>لَوْلا</bdi> and its less common variant <bdi>لَوْما</bdi>.`, list: false },
            { box: { title: 'Definition', lines: [`لَوْلا لِامْتِناعِ الجَوابِ لِوُجودِ الشَّرْطِ`] } },
            { html: `The polarity here is the OPPOSITE of لَوْ. Where لَوْ signals "الجواب failed because الشرط failed" (شرط negative → جواب negative), لَوْلا signals "الجواب failed BECAUSE الشرط DID happen" (شرط positive → جواب negative). لَوْلا is often translated "were it not for..." — it introduces something that DID occur, and that occurrence is precisely what prevented الجواب.`, list: false },
            { box: { title: 'Careful', lines: [`لَوْ: الشَّرْطُ والجَوابُ كِلاهُما مُنْتَفِيانِ؛ لَوْلا: الشَّرْطُ مَوْجودٌ والجَوابُ مُنْتَفٍ`] } },
            { html: `Always check which of the two particles is in front of you before assigning polarity: with لَوْ, neither شرط nor جواب happened; with لَوْلا, الشرط did happen and it is precisely what blocked الجواب.`, list: false },
          ],
          exercise: {
            prompt: `لَوْ signals شرط negative → جواب negative. What polarity does لَوْلا signal instead؟`,
            kind: 'mcq',
            options: [`شرط positive (it did happen) → جواب negative (it was thereby blocked)`, `شرط negative → جواب positive`, `Both شرط and جواب positive`, `لَوْلا carries no polarity at all`],
            correct: 0,
          },
        },
        {
          heading: 'تركيب جملتي لولا: الاسمية بخبر محذوف والفعلية جوابًا',
          lines: [
            { box: { title: 'Rule', lines: [`وهي تَدْخُلُ على جُمْلَتَيْنِ: أَوَّلُهُما اِسْمِيَّةٌ خَبَرُها مَحْذوفٌ تَقْديرُهُ مَوْجودٌ، وَثانيهِما فِعْلِيَّةٌ`] } },
            { html: `لَوْلا governs two clauses. The FIRST is always اِسْمِيَّة — it names the thing that "existed" and thereby blocked الجواب — and its خبر is always omitted, understood simply as مَوْجود ("exists"). The SECOND clause is فِعْلِيَّة, and functions as جواب الشرط.`, list: false },
          ],
          exercise: {
            prompt: `In لَوْلا's two-clause structure, what is always omitted from the first, اسمية clause؟`,
            kind: 'mcq',
            options: [`Its خبر, understood as مَوْجود ("exists/is present")`, `Its مبتدأ`, `Its فاعل`, `The whole clause is omitted, not just one part`],
            correct: 0,
          },
        },
        {
          heading: 'مثال قرآني: ولولا فضل الله عليكم ورحمته',
          lines: [
            { box: { title: 'Example', lines: [`﴿وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾`] } },
            { html: `"And were it not for the favor of Allah upon you and His mercy, not one of you would ever have been purified." <bdi>فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ</bdi> is the first, اسمية clause: فَضْلُ is المُبْتَدَأ, and its خَبَر is the omitted مَوْجود. <bdi>ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا</bdi> is the second, فعلية clause, serving as جواب الشرط.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ مَا زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا`,
                translation: `And were it not for the favor of Allah upon you and His mercy, not one of you would ever have been purified.`,
                cells: [`لَوْلا`, `فَضْلُ اللهِ`, `وَرَحْمَتُهُ`, `مَا زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف امتناع لوجود الشرط` }, { start: 1, end: 1, role: `مبتدأ (خبره محذوف تقديره موجود)` }, { start: 2, end: 2, role: `معطوف على المبتدأ` }, { start: 3, end: 3, role: `جواب الشرط` }] },
                ],
              },
            },
            { html: `Because Allah's favor and mercy DID exist, purification did not fail to happen for anyone — grammatically, لولا frames it as: had that favor not existed, purification would never have occurred at all.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾, what role does فَضْلُ play؟`,
            kind: 'mcq',
            options: [`مبتدأ of the first, اسمية clause, with its خبر omitted (تقديره موجود)`, `فاعل of زَكٰى`, `جواب الشرط`, `مفعول به لِـ زَكٰى`],
            correct: 0,
          },
        },
        {
          heading: 'لوما: معناها وتركيبها كلولا',
          lines: [
            { box: { title: 'Rule', lines: [`لَوْما لِامْتِناعِ الجَوابِ لِوُجودِ الشَّرْطِ`] } },
            { html: `لَوْما is a less common variant of لَوْلا, used identically: same meaning (الجواب blocked because الشرط occurred), and the same two-clause structure (اسمية بخبر محذوف تقديره موجود، ثم فعلية كجواب الشرط).`, list: false },
          ],
          exercise: {
            prompt: `How does لَوْما differ from لَوْلا in meaning and grammatical structure؟`,
            kind: 'mcq',
            options: [`It does not differ — لَوْما behaves identically to لَوْلا in both meaning and the اسمية+فعلية two-clause structure`, `لَوْما negates الشرط instead of asserting it`, `لَوْما only governs a single فعلية clause, with no اسمية clause`, `لَوْما is exclusive to poetry and never appears in prose`],
            correct: 0,
          },
        },
        {
          heading: 'مثال لوما: لوما التوفيق لما عملنا الصالحات',
          lines: [
            { box: { title: 'Example', lines: [`لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ`] } },
            { html: `"Were it not for [Allah's granting of] success, we would not have done righteous deeds." <bdi>التَّوْفيقُ</bdi> existed (that is الشرط), and precisely because it existed, "we did not do righteous deeds" is negated — meaning we DID do them, thanks to that success being granted.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ`,
                translation: `Were it not for success, we would not have done righteous deeds.`,
                cells: [`لَوْما`, `التَّوْفيقُ`, `لَما عَمِلْنا الصّالِحاتِ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف امتناع لوجود (بمعنى لولا)` }, { start: 1, end: 1, role: `مبتدأ (خبره محذوف تقديره موجود)` }, { start: 2, end: 2, role: `جواب الشرط` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ, does "we did not do righteous deeds" mean the speakers actually failed to do them؟`,
            kind: 'mcq',
            options: [`No — because التوفيق (الشرط) DID exist, الجواب is negated, meaning they DID do righteous deeds thanks to that success`, `Yes — they genuinely failed to do any righteous deeds`, `The sentence is silent on whether they did righteous deeds`, `Yes, because لَوْما always negates its جواب permanently`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `لَوْلا's polarity is the mirror image of لَوْ's. Which pairing correctly describes لَوْلا؟`, options: [`الشرط is positive (it did happen); الجواب is negative (blocked by that occurrence)`, `الشرط is negative; الجواب is negative`, `الشرط is positive; الجواب is positive`, `Neither شرط nor جواب can be positive or negative with لَوْلا`], correct: 0 },
        { q: `لَوْلا governs two clauses. What is the second clause's grammatical shape, and what role does it play؟`, options: [`فعلية, serving as جواب الشرط`, `اسمية, serving as جواب الشرط`, `فعلية, serving as المبتدأ`, `شبه جملة, serving as الخبر`], correct: 0 },
        { q: `In ﴿وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾, what is the omitted خبر of the first clause understood to be؟`, options: [`مَوْجود ("exists/is present")`, `كَبيرٌ`, `مَعْدومٌ`, `مُنْتَفٍ`], correct: 0 },
        { q: `How does لَوْما relate to لَوْلا؟`, options: [`It is a less common variant carrying the exact same meaning and two-clause structure`, `It is لَوْلا's negation`, `It only applies to poetry, unlike لَوْلا`, `It governs a single فعلية clause with no اسمية clause`], correct: 0 },
        { q: `لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ — what does this tell us actually happened؟`, options: [`Both التوفيق (success) and the righteous deeds happened — the negated جواب means the deeds WERE done, thanks to that success`, `Neither التوفيق nor the righteous deeds happened`, `التوفيق happened, but the righteous deeds definitely did not`, `The sentence cannot be evaluated for what actually happened`], correct: 0 },
        { q: `A learner sees لَوْ زَيْدٌ حاضِرٌ and لَوْلا زَيْدٌ حاضِرٌ next to each other. Without translating, what is the fastest way to tell which particle is being used before assigning شرط/جواب polarity؟`, options: [`Check whether the particle is لَوْ or لَوْلا itself — the two carry opposite polarities and must not be conflated`, `Count the number of words in the sentence`, `Check whether the sentence is Qur'anic or not`, `Check whether the verb is ماضٍ or مضارع`], correct: 0 },
      ],
      bank: [
        { title: `لولا: القطبية`, kind: 'mcq', prompt: `لَوْلا signals which pairing of شرط/جواب polarity؟`, options: [`شرط positive, جواب negative`, `شرط negative, جواب positive`, `شرط negative, جواب negative`, `شرط positive, جواب positive`], correct: 0 },
        { title: `لولا مقابل لو`, kind: 'mcq', prompt: `With لَوْ, both شرط and جواب failed to happen. With لَوْلا, what is true of الشرط؟`, options: [`It DID happen — that is exactly what blocks الجواب`, `It also failed to happen, exactly like with لَوْ`, `It cannot be determined from the particle alone`, `It is always a جملة فعلية منفية`], correct: 0 },
        { title: `لولا: الجملة الأولى`, kind: 'mcq', prompt: `The first clause governed by لَوْلا is always which kind of جملة؟`, options: [`اسمية`, `فعلية`, `شرطية بذاتها`, `جملة استفهامية`], correct: 0 },
        { title: `لولا: الجملة الثانية`, kind: 'mcq', prompt: `The second clause governed by لَوْلا is فعلية, and it plays which role؟`, options: [`جواب الشرط`, `المبتدأ`, `الفاعل`, `التمييز`], correct: 0 },
        { title: `خبر الجملة الأولى المحذوف`, kind: 'mcq', prompt: `Why is the خبر of لَوْلا's first, اسمية clause always omitted rather than stated؟`, options: [`Because its meaning — that the named thing "exists/is present" — is fixed and understood without needing to be spelled out`, `Because اسمية clauses can never take a خبر`, `Because لَوْلا forbids any خبر from appearing anywhere in its sentence`, `Because the خبر would otherwise conflict with جواب الشرط`], correct: 0 },
        { title: `فضل الله: المبتدأ`, kind: 'mcq', prompt: `In ﴿وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾, which word is المبتدأ of the first clause؟`, options: [`فَضْلُ`, `رَحْمَتُهُ`, `زَكٰى`, `أَحَدٍ`], correct: 0 },
        { title: `فضل الله: المعطوف`, kind: 'mcq', prompt: `In the same ayah, وَرَحْمَتُهُ is معطوف on which word؟`, options: [`فَضْلُ`, `اللهِ`, `زَكٰى`, `أَحَدٍ`], correct: 0 },
        { title: `فضل الله: جواب الشرط`, kind: 'mcq', prompt: `Which part of ﴿وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾ is جواب الشرط؟`, options: [`ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا`, `فَضْلُ اللهِ عَلَيْكُمْ`, `وَرَحْمَتُهُ`, `أَبَدًا alone`], correct: 0 },
        { title: `ما تخبرنا به الآية فعليًّا`, kind: 'mcq', prompt: `Because Allah's فضل ورحمة DID exist in ﴿وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾, what does the negated جواب actually tell us happened؟`, options: [`Purification DID occur for people — it was not blocked, precisely because Allah's favor and mercy existed`, `Purification never occurred for anyone`, `Nothing can be concluded about purification`, `Purification occurred only for one person`], correct: 0 },
        { title: `لوما: نفس معنى لولا`, kind: 'mcq', prompt: `لَوْما carries the exact same meaning as which other particle؟`, options: [`لَوْلا`, `لَوْ`, `أَمّا`, `إِنْ`], correct: 0 },
        { title: `لوما: التركيب`, kind: 'mcq', prompt: `لَوْما's two-clause structure matches لَوْلا's exactly. What is that structure؟`, options: [`اسمية بخبر محذوف تقديره موجود، تليها فعلية كجواب الشرط`, `فعلية فقط، بلا جملة اسمية`, `اسمية فقط، بلا جواب شرط`, `شرط بلا جواب على الإطلاق`], correct: 0 },
        { title: `التوفيق: المبتدأ`, kind: 'mcq', prompt: `In لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ, what role does التَّوْفيقُ play؟`, options: [`مبتدأ, with its خبر omitted (تقديره موجود)`, `جواب الشرط`, `مفعول به`, `نعت`], correct: 0 },
        { title: `التوفيق: ما تعنيه لما عملنا الصالحات`, kind: 'mcq', prompt: `لَما عَمِلْنا الصّالِحاتِ is the negated جواب in لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ. Given التوفيق existed, what does that negated جواب actually mean happened؟`, options: [`They DID do righteous deeds, thanks to التوفيق`, `They did not do any righteous deeds, ever`, `التوفيق itself never occurred`, `The sentence cannot be resolved either way`], correct: 0 },
        { title: `تمييز لو عن لولا`, kind: 'mcq', prompt: `Before assigning polarity to شرط and جواب in a sentence, what is the first thing to check؟`, options: [`Which particle is actually being used — لَوْ and لَوْلا carry opposite polarities`, `Whether the sentence is Qur'anic`, `Whether the verb is transitive`, `Whether the sentence contains a اسم مؤول`], correct: 0 },
        { title: `لولا ولوما: الفرق الوحيد`, kind: 'mcq', prompt: `Given that لَوْلا and لَوْما share the same meaning and the same two-clause structure, what actually distinguishes them؟`, options: [`Frequency of use — لَوْلا is the common form, لَوْما the less common variant`, `لَوْلا governs a اسمية clause while لَوْما governs a فعلية one`, `لَوْلا only appears in the Qur'an, لَوْما only in poetry`, `لَوْما can drop its خبر while لَوْلا cannot`], correct: 0 },
        { title: `لولا مقابل إحدى أخواتها في المعنى`, kind: 'mcq', prompt: `Of the four أحرف الشرط covered across this module (لَوْ، لَوْلا، لَوْما، أَمّا), which two share the identical meaning امتناع الجواب لوجود الشرط؟`, options: [`لَوْلا and لَوْما`, `لَوْ and لَوْلا`, `لَوْ and أَمّا`, `لَوْما and أَمّا`], correct: 0 },
        {
          title: `تركيب: ولولا فضل الله عليكم ورحمته`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿وَلَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ ما زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا﴾.`,
          source: `لَوْلا فَضْلُ اللهِ عَلَيْكُمْ وَرَحْمَتُهُ مَا زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا`,
          words: [`لَوْلا`, `فَضْلُ اللهِ`, `وَرَحْمَتُهُ`, `مَا زَكٰى مِنْكُمْ مِنْ أَحَدٍ أَبَدًا`],
          labels: [`حرف امتناع لوجود الشرط`, `مبتدأ (خبره محذوف تقديره موجود)`, `معطوف على المبتدأ`, `جواب الشرط`],
          distractors: [`فاعل`, `تمييز`, `حرف امتناع لامتناع الشرط`, `خبر`],
        },
        {
          title: `تركيب: لوما التوفيق لما عملنا الصالحات`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ.`,
          source: `لَوْما التَّوْفيقُ لَما عَمِلْنا الصّالِحاتِ`,
          words: [`لَوْما`, `التَّوْفيقُ`, `لَما عَمِلْنا الصّالِحاتِ`],
          labels: [`حرف امتناع لوجود الشرط (بمعنى لولا)`, `مبتدأ (خبره محذوف تقديره موجود)`, `جواب الشرط`],
          distractors: [`حال`, `بدل`, `حرف امتناع لامتناع الشرط`, `خبر`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أَمّا',
      subtitle: `أَمّا — three functions at once (شَرْط, تَفْصيل, تَوْكيد), Sībawayh's derivation, تكرار and its omission, and what can sit between أَمّا and its فاء`,
      concepts: [
        {
          heading: 'تعريف أمّا: حرف شرط وتفصيل وتوكيد معًا',
          lines: [
            { html: `The fourth and final حرف of أحرف الشرط is أَمّا — grammatically the richest of the four, carrying three distinct functions at once.`, list: false },
            { box: { title: 'Definition', lines: [`أَمّا حَرْفُ شَرْطٍ وَتَفْصيلٍ وَتَوْكيدٍ`] } },
            { box: { title: 'Example', lines: [`﴿فَأَمَّا الَّذينَ آمَنوا فَيَعْلَمونَ أَنَّهُ الحَقُّ مِنْ رَبِّهِمْ وَأَمَّا الَّذينَ كَفَروا فَيَقولونَ ماذا أَرادَ اللهُ بِهٰذا مَثَلًا﴾`] } },
            { html: `It is حَرْفُ شَرْط because it sets up a conditional-style structure resolved by a فاء. It is حَرْفُ تَفْصيل because — as in this ayah — it lays out two options side by side, one per أَمّا: "as for those who believed... and as for those who disbelieved..." It is حَرْفُ تَوْكيد because using أَمّا, rather than a plain simple sentence, adds emphasis to the claim.`, list: false },
          ],
          exercise: {
            prompt: `أَمّا carries three grammatical labels at once. Which three؟`,
            kind: 'mcq',
            options: [`حرف شرط، حرف تفصيل، وحرف توكيد`, `حرف شرط، حرف عطف، وحرف جر`, `حرف تفصيل، حرف نفي، وحرف استفهام`, `حرف توكيد، حرف نداء، وحرف تنبيه`],
            correct: 0,
          },
        },
        {
          heading: 'لماذا تُعد أمّا توكيدًا: تحليل سيبويه',
          lines: [
            { box: { title: 'Rule', lines: [`قالَ سِيبَوَيْهِ رَحِمَهُ اللهُ: قَوْلُنا أَمّا زَيْدٌ فَمُنْطَلِقٌ، أَصْلُهُ مَهْما يَكُنْ مِنْ شَيْءٍ يَكُنْ فَزَيْدٌ مُنْطَلِقٌ`] } },
            { html: `Sībawayh's classic analysis traces أَمّا زَيْدٌ فَمُنْطَلِقٌ back to an imagined fuller origin: مَهْما يَكُنْ مِنْ شَيْءٍ فَزَيْدٌ مُنْطَلِقٌ — "whatever else may be the case, Zayd is leaving." كَلِمَةُ أَمّا then took the place of that entire أداة الشرط + جملة الشرط combination, compressing a whole clause into a single word.`, list: false },
            { table: { title: 'مراحل تطور أمّا عند سيبويه', headers: ['المرحلة', 'الصيغة'], rows: [
              [`الأصل المتخيَّل`, `مَهْما يَكُنْ مِنْ شَيْءٍ فَزَيْدٌ مُنْطَلِقٌ`],
              [`بعد أن نابت أمّا عن أداة الشرط وجملته`, `أَمّا فَزَيْدٌ مُنْطَلِقٌ`],
              [`بعد تأخير الفاء وتقديم المبتدأ`, `أَمّا زَيْدٌ فَمُنْطَلِقٌ`],
            ] } },
            { box: { title: 'Rule', lines: [`وَهُوَ تَوْكيدٌ لِقَوْلِنا زَيْدٌ مُنْطَلِقٌ، وَذَلِكَ لِأَنَّهُ يَدُلُّ على أَنَّهُ لا مَحالَةَ، وَأَنَّهُ بِصَدَدِ الذَّهابِ، وَأَنَّهُ مِنْ عَزيمَةٍ عَزيمَةً`] } },
            { html: `Because أَمّا زَيْدٌ فَمُنْطَلِقٌ packs in this whole "whatever else may be true" background clause, it says more than the plain زَيْدٌ مُنْطَلِقٌ ever could: it signals that Zayd's leaving is inevitable, imminent, and firmly resolved upon. That extra layer of certainty is exactly what earns أَمّا its label of حَرْفُ تَوْكيد.`, list: false },
            { box: { title: 'Careful', lines: [`وَفي النَّفْسِ مِنْهُ شَيْءٌ`] } },
            { html: `Ibn ʿĀshūr expresses some reservation about this account — he treats it as a reconstructed explanation for why the فاء is grammatically valid in أَمّا's response clause, rather than a claim about the word's literal historical origin. Sībawayh's account is a plausible grammatical model, not a documented etymology.`, list: false },
          ],
          exercise: {
            prompt: `Sībawayh traces أَمّا زَيْدٌ فَمُنْطَلِقٌ back to مَهْما يَكُنْ مِنْ شَيْءٍ فَزَيْدٌ مُنْطَلِقٌ. What does this trace explain about أَمّا؟`,
            kind: 'mcq',
            options: [`Why أَمّا is analyzed as حَرْفُ تَوْكيد — it compresses a whole "whatever else may be true" clause into one word, adding a layer of certainty`, `Why أَمّا always requires تكرار`, `Why أَمّا can never appear with a اسم موصول`, `Why أَمّا is classified as حرف جر`],
            correct: 0,
          },
        },
        {
          heading: 'تكرار أمّا للتفصيل، وتركه استغناءً',
          lines: [
            { box: { title: 'Rule', lines: [`تَقَعُ أَمَّا مُكَرَّرًا لِتَفْصيلٍ مُتَعَدِّدٍ ذُكِرَ مُجْمَلًا قَبْلَهُ`] } },
            { html: `When two or more things have been mentioned together in summary form, أَمّا typically repeats, once per item, to spell out the detail for each.`, list: false },
            { box: { title: 'Example', lines: [`﴿كَذَّبَتْ ثَمودُ وَعادٌ بِالْقارِعَةِ ۝ فَأَمَّا ثَمودُ فَأُهْلِكوا بِالطّاغِيَةِ ۝ وَأَمَّا عادٌ فَأُهْلِكوا بِريحٍ صَرْصَرٍ عاتِيَةٍ﴾`] } },
            { html: `"Thamūd and 'Ād denied the Striking Calamity. As for Thamūd, they were destroyed by the overpowering blast; and as for 'Ād, they were destroyed by a furious, violent wind." ثَمودُ وَعادٌ are mentioned together, unspecifically, first; then أَمّا appears twice, once per nation, spelling out each one's specific fate.`, list: false },
            { box: { title: 'Rule', lines: [`وَقَدْ يُتْرَكُ التَّكْرارُ اسْتِغْناءً بِذِكْرِ أَحَدِ القِسْمَيْنِ عَنِ الآخَرِ`] } },
            { html: `Sometimes the repetition is dropped, relying on one mentioned case to let the other be inferred by contrast — a form of concise speech (إيجاز الاقتفاء).`, list: false },
            { box: { title: 'Example', lines: [`﴿فَأَمَّا الَّذينَ آمَنوا بِاللهِ وَاعْتَصَموا بِهِ فَسَيُدْخِلُهُمْ في رَحْمَةٍ مِنْهُ وَفَضْلٍ﴾`] } },
            { html: `Only one أَمّا appears here, for the believers; the unmentioned "other case" — the disbelievers and their opposite fate — is left to be understood from context, without needing its own explicit أَمّا clause.`, list: false },
          ],
          exercise: {
            prompt: `﴿فَأَمَّا ثَمودُ فَأُهْلِكوا بِالطّاغِيَةِ ۝ وَأَمَّا عادٌ فَأُهْلِكوا بِريحٍ صَرْصَرٍ عاتِيَةٍ﴾ repeats أَمّا once per nation. Why does أَمّا repeat here؟`,
            kind: 'mcq',
            options: [`Because ثَمود وعاد were mentioned together in summary first, and the repetition spells out each one's detail (تفصيل)`, `Because أَمّا must always repeat at least twice in every sentence`, `Because ثَمود and عاد are the same word repeated`, `Because the first أَمّا was ungrammatical without a second`],
            correct: 0,
          },
        },
        {
          heading: 'ما يقع بين أمّا والفاء: مبتدأ، خبر، أو جملة الشرط',
          lines: [
            { box: { title: 'Rule', lines: [`وَيَأْتي بَيْنَ أَمّا والْفاءِ: الْمُبْتَدَأُ، أَوِ الْخَبَرُ، أَوْ جُمْلَةُ الشَّرْطِ`] } },
            { html: `The material sitting between أَمّا and its فاء is not fixed to one grammatical shape — it can be any of three different things.`, list: false },
            { box: { title: 'Example', lines: [`﴿أَمَّا الَّذينَ آمَنوا وَعَمِلوا الصّالِحاتِ فَلَهُمْ جَنّاتُ الْمَأْوٰى﴾`] } },
            { html: `الَّذينَ آمَنوا وَعَمِلوا الصّالِحاتِ sits between أَمّا and فَ as a مُبْتَدَأ, with جَنّاتُ الْمَأْوٰى as its خبر after the فاء.`, list: false },
            { box: { title: 'Example', lines: [`أَمَّا في الْبَيْتِ فَزَيْدٌ`] } },
            { html: `"As for [being] in the house, Zayd [is there]." Here في الْبَيْتِ (a خبر مُقَدَّم) sits between أَمّا and فَ, with زَيْدٌ (the مبتدأ) following the فاء.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَأَمّا إِنْ كانَ مِنَ الْمُقَرَّبينَ ۝ فَرَوْحٌ وَرَيْحانٌ وَجَنَّتُ نَعيمٍ﴾`] } },
            { html: `إِنْ كانَ مِنَ الْمُقَرَّبينَ, itself a full جملة شرط built on إِنْ, sits between أَمّا and فَ.`, list: false },
            { box: { title: 'Careful', lines: [`في تَسْمِيَتِهِ جَوابًا نَظَرٌ`] } },
            { html: `A terminological aside worth flagging: some grammarians question calling what follows the فاء a "جواب" at all — strictly, they treat أَمّا itself as حرف الشرط, and الفاء as merely the رابطة (connector) linking to the response, without formally labeling that response جواب الشرط. A fine point of terminology, not a change in meaning.`, list: false },
          ],
          exercise: {
            prompt: `In أَمَّا في الْبَيْتِ فَزَيْدٌ, في الْبَيْتِ sits between أَمّا and فَ. What role does it play؟`,
            kind: 'mcq',
            options: [`خبر مُقَدَّم, with زَيْدٌ as المبتدأ following the فاء`, `مبتدأ, with زَيْدٌ as its خبر`, `جملة شرط بذاتها`, `توكيد لفظي لأمّا`],
            correct: 0,
          },
        },
        {
          heading: 'الاسم المعمول لعامل بين أمّا والفاء: ظاهر أو محذوف',
          lines: [
            { box: { title: 'Rule', lines: [`قَدْ يَقَعُ بَيْنَ أَمّا والفاءِ اِسْمٌ مَعْمولٌ لِعامِلٍ، إِمّا في الجَوابِ، وَإِمّا مَحْذوفٍ`] } },
            { html: `Beyond مبتدأ/خبر/جملة شرط, the word sitting between أَمّا and فَ can also be a noun that is the معمول of some عامل — and that governing verb can be either explicitly present in الجواب clause, or entirely omitted.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَأَمَّا الْيَتيمَ فَلا تَقْهَرْ﴾`] } },
            { html: `"So as for the orphan, do not oppress [him]." الْيَتيمَ is مَنصوب, governed by تَقْهَرْ — the very verb sitting in the جواب clause after the فاء. The noun between أَمّا والفاء is thus the fronted object of a verb appearing later in the sentence.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `فَأَمَّا الْيَتيمَ فَلا تَقْهَرْ`,
                translation: `So as for the orphan, do not oppress [him].`,
                cells: [`فَأَمَّا`, `الْيَتيمَ`, `فَلا تَقْهَرْ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف شرط وتفصيل وتوكيد` }, { start: 1, end: 1, role: `اسم منصوب بعامل ظاهر في الجواب (مفعول به لـِ"تقهر")` }, { start: 2, end: 2, role: `جواب الشرط (فعل نهي وفاعله)` }] },
                ],
              },
            },
            { box: { title: 'Example', lines: [`﴿وَأَمَّا ثَمودُ فَهَدَيْناهُمْ﴾`] } },
            { html: `"And as for Thamūd, We guided them." In the standard reading ثَمودُ is مَرْفوع (مبتدأ). But one قِراءة reads «ثَمودَ» بِالنَّصْبِ — in that reading, ثَمودَ is the object of a hidden verb (roughly, "and as for [We considered] Thamūd, We guided them"), not the subject of a nominal sentence — showing the same governed-noun structure even without a visible governing verb.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿فَأَمَّا الْيَتيمَ فَلا تَقْهَرْ﴾, الْيَتيمَ is مَنصوب. What governs it؟`,
            kind: 'mcq',
            options: [`تَقْهَرْ — the very verb in الجواب clause after the فاء, making الْيَتيمَ its fronted مفعول به`, `أَمّا itself, which is a عامل نصب`, `فَ, the linking particle`, `A hidden فعل مضارع, unrelated to تَقْهَرْ`],
            correct: 0,
          },
        },
        {
          heading: 'التفصيل مقابل التوكيد: كيف نفرق بينهما',
          lines: [
            { box: { title: 'Rule', lines: [`وَالَّذي يَبْدو أَنَّهُ إِذا كانَتْ أَمّا مُكَرَّرَةً لَفْظًا أَوْ حُكْمًا فَتُفيدُ مَعْنى التَّفْصيلِ، وَيَتَلاشى مَعْنى التَّوْكيدِ؛ وَإِذا لَمْ يَكُنْ مُكَرَّرًا فَتُفيدُ مَعْنى التَّوْكيدِ وَيَتَلاشى مَعْنى التَّفْصيلِ`] } },
            { html: `Since أَمّا was said to carry both تَفْصيل and تَوْكيد, a natural question arises: which meaning is active in a given sentence? When أَمّا is REPEATED (literally or effectively), its تَفْصيل sense dominates and its تَوْكيد sense fades. When أَمّا appears just ONCE, its تَوْكيد sense dominates instead, and تَفْصيل fades.`, list: false },
            { table: { title: 'الغالب من معنيي أمّا', headers: ['حالة أمّا', 'المعنى الغالب', 'مثال'], rows: [
              [`مكرَّرة (لفظًا أو حكمًا)`, `التفصيل`, `فَأَمَّا ثَمودُ فَأُهْلِكوا بِالطّاغِيَةِ ۝ وَأَمَّا عادٌ فَأُهْلِكوا بِريحٍ صَرْصَرٍ عاتِيَةٍ`],
              [`غير مكرَّرة`, `التوكيد`, `أَمّا زَيْدٌ فَمُنْطَلِقٌ`],
            ] } },
            { box: { title: 'Careful', lines: [`وَالَّذي يَبْدو لي`] } },
            { html: `This rule of thumb is presented as the author's own considered view, not an unchallenged consensus — a reminder that even within one settled topic, scholars continue to refine exactly how a particle's several meanings interact.`, list: false },
          ],
          exercise: {
            prompt: `أَمّا زَيْدٌ فَمُنْطَلِقٌ (single, non-repeated) and فَأَمَّا ثَمودُ فَأُهْلِكوا بِالطّاغِيَةِ ۝ وَأَمَّا عادٌ فَأُهْلِكوا بِريحٍ صَرْصَرٍ عاتِيَةٍ (repeated) illustrate the same particle leaning toward two different senses. Which sense dominates in each؟`,
            kind: 'mcq',
            options: [`زَيْدٌ فَمُنْطَلِقٌ: تَوْكيد (not repeated); ثَمود/عاد: تَفْصيل (repeated)`, `زَيْدٌ فَمُنْطَلِقٌ: تَفْصيل; ثَمود/عاد: تَوْكيد`, `Both sentences show تَفْصيل equally`, `Both sentences show تَوْكيد equally`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which three grammatical labels does أَمّا carry at once؟`, options: [`حرف شرط، حرف تفصيل، وحرف توكيد`, `حرف شرط، حرف جزم، وحرف نصب`, `حرف تفصيل، حرف عطف، وحرف جر`, `حرف توكيد، حرف نفي، وحرف استفهام`], correct: 0 },
        { q: `Sībawayh traces أَمّا زَيْدٌ فَمُنْطَلِقٌ back to مَهْما يَكُنْ مِنْ شَيْءٍ فَزَيْدٌ مُنْطَلِقٌ. What does this analysis explain؟`, options: [`Why أَمّا is analyzed as حَرْفُ تَوْكيد, since it compresses a whole background clause into one word`, `Why أَمّا can never be repeated`, `Why زَيْدٌ must always be مرفوع after أَمّا`, `Why أَمّا only appears in poetry`], correct: 0 },
        { q: `﴿فَأَمَّا ثَمودُ فَأُهْلِكوا بِالطّاغِيَةِ ۝ وَأَمَّا عادٌ فَأُهْلِكوا بِريحٍ صَرْصَرٍ عاتِيَةٍ﴾ repeats أَمّا once per nation, after both were mentioned together in summary. What does this repetition mark؟`, options: [`تَفْصيل — spelling out each item's own detail after a joint, general mention`, `تَوْكيد — emphasis with no detail added`, `نَفْي — denying that either nation was destroyed`, `اسْتِفْهام — asking which nation was destroyed`], correct: 0 },
        { q: `In أَمَّا في الْبَيْتِ فَزَيْدٌ, في الْبَيْتِ sits between أَمّا and its فاء. What grammatical shape can that in-between material take, according to the rule؟`, options: [`مبتدأ, خبر, or جملة الشرط — all three are attested`, `Only مبتدأ, never خبر or a full جملة`, `Only a single حرف جر, never a phrase`, `It must always be the same word as المنادى`], correct: 0 },
        { q: `In ﴿فَأَمَّا الْيَتيمَ فَلا تَقْهَرْ﴾, الْيَتيمَ is منصوب even though it sits before the verb that governs it. What governs it؟`, options: [`تَقْهَرْ, the verb inside جواب الشرط after the فاء`, `أَمّا itself`, `الفاء`, `A hidden noun, unrelated to تَقْهَرْ`], correct: 0 },
        { q: `Given the rule that repetition favors تَفْصيل while a single occurrence favors تَوْكيد, which sense dominates in the single, non-repeated أَمّا زَيْدٌ فَمُنْطَلِقٌ؟`, options: [`تَوْكيد`, `تَفْصيل`, `Both equally, with no dominant sense`, `Neither — a single أَمّا carries no meaning at all`], correct: 0 },
      ],
      bank: [
        { title: `أمّا: التعريف الثلاثي`, kind: 'mcq', prompt: `أَمّا is defined as carrying three functions simultaneously. Which three؟`, options: [`شَرْط، تَفْصيل، وتَوْكيد`, `شَرْط، عَطْف، ونَفْي`, `تَفْصيل، اسْتِفْهام، ونِداء`, `تَوْكيد، جَزْم، ونَصْب`], correct: 0 },
        { title: `أمّا: مثال المؤمنين والكافرين`, kind: 'mcq', prompt: `﴿فَأَمَّا الَّذينَ آمَنوا فَيَعْلَمونَ أَنَّهُ الحَقُّ مِنْ رَبِّهِمْ وَأَمَّا الَّذينَ كَفَروا فَيَقولونَ ماذا أَرادَ اللهُ بِهٰذا مَثَلًا﴾ shows أَمّا's تفصيل sense. What does it lay out side by side؟`, options: [`Two groups' opposite reactions — those who believed, and those who disbelieved`, `Two different meanings of the same word`, `Two separate readings (قراءات) of the same ayah`, `Two negated clauses with no positive content`], correct: 0 },
        { title: `سيبويه: الأصل المتخيل`, kind: 'mcq', prompt: `According to Sībawayh's derivation, what is the imagined fuller origin of أَمّا زَيْدٌ فَمُنْطَلِقٌ؟`, options: [`مَهْما يَكُنْ مِنْ شَيْءٍ فَزَيْدٌ مُنْطَلِقٌ`, `إِنْ يَكُنْ زَيْدٌ فَهُوَ مُنْطَلِقٌ`, `لَوْ كانَ زَيْدٌ مُنْطَلِقًا لَذَهَبَ`, `زَيْدٌ إِنْ شاءَ اللهُ مُنْطَلِقٌ`], correct: 0 },
        { title: `سيبويه: مراحل التطور`, kind: 'mcq', prompt: `Sībawayh traces the shift from مَهْما يَكُنْ مِنْ شَيْءٍ فَزَيْدٌ مُنْطَلِقٌ to أَمّا زَيْدٌ فَمُنْطَلِقٌ in three stages. What causes الفاء to move from directly after أَمّا to directly before مُنْطَلِقٌ؟`, options: [`كراهة اجتماع أمّا والفاء — avoiding أَمّا and الفاء sitting immediately next to each other, so المبتدأ is fronted between them`, `A rule that الفاء must always follow الخبر, never المبتدأ`, `A scribal error later grammarians chose to preserve`, `أَمّا cannot precede a اسم directly under any account`], correct: 0 },
        { title: `لماذا تفيد أمّا التوكيد؟`, kind: 'mcq', prompt: `أَمّا زَيْدٌ فَمُنْطَلِقٌ is said to add توكيد beyond the plain زَيْدٌ مُنْطَلِقٌ. What extra layer of meaning does it add؟`, options: [`That Zayd's leaving is inevitable, imminent, and firmly resolved upon`, `That Zayd might or might not leave, unlike the plain sentence`, `That someone other than Zayd is actually leaving`, `Nothing — أَمّا adds no meaning beyond the plain sentence`], correct: 0 },
        { title: `ابن عاشور وتحفظه`, kind: 'mcq', prompt: `Ibn ʿĀshūr's reservation (وَفي النَّفْسِ مِنْهُ شَيْءٌ) about Sībawayh's account treats it as what, rather than a documented historical fact؟`, options: [`A reconstructed grammatical explanation for why الفاء is valid in أَمّا's response clause`, `A proof that أَمّا never functions as حرف توكيد`, `Evidence that أَمّا is actually a verb, not a particle`, `A claim that has no bearing on أَمّا's grammar at all`], correct: 0 },
        { title: `تكرار أمّا: متى يقع؟`, kind: 'mcq', prompt: `According to the rule, when does أَمّا typically repeat, once per item؟`, options: [`When two or more things were mentioned together in summary form beforehand`, `Whenever أَمّا introduces a اسم موصول`, `Only in poetry, never in prose`, `Only when the sentence has no فاء at all`], correct: 0 },
        { title: `ثمود وعاد: الإجمال قبل التفصيل`, kind: 'mcq', prompt: `﴿كَذَّبَتْ ثَمودُ وَعادٌ بِالْقارِعَةِ﴾ mentions both nations together, unspecifically, before أَمّا repeats. What is that opening ayah an example of, relative to the أَمّا clauses that follow؟`, options: [`الإجمال (summary mention) that the repeated أَمّا clauses then spell out in تفصيل`, `جواب الشرط itself`, `A separate topic with no connection to the أَمّا clauses`, `تَوْكيد, since it repeats the same fate twice`], correct: 0 },
        { title: `ترك التكرار: إيجاز الاقتفاء`, kind: 'mcq', prompt: `﴿فَأَمَّا الَّذينَ آمَنوا بِاللهِ وَاعْتَصَموا بِهِ فَسَيُدْخِلُهُمْ في رَحْمَةٍ مِنْهُ وَفَضْلٍ﴾ uses only ONE أَمّا, for the believers. What happens to the unmentioned disbelievers' case؟`, options: [`It is left to be inferred from context by contrast — a form of concise speech (إيجاز الاقتفاء)`, `It is grammatically impossible for disbelievers to be discussed without a second أَمّا`, `It means the ayah denies that disbelievers exist`, `It must be supplied by a second, hidden أَمّا that is never written`], correct: 0 },
        { title: `ما بين أمّا والفاء: ثلاثة أشكال`, kind: 'mcq', prompt: `What three grammatical shapes can the material between أَمّا and its فاء take, according to the rule؟`, options: [`مبتدأ، خبر، أو جملة الشرط`, `فاعل، مفعول به، أو حال فقط`, `نعت، بدل، أو توكيد فقط`, `Only مبتدأ — nothing else is attested`], correct: 0 },
        { title: `أمّا الذين آمنوا: المبتدأ`, kind: 'mcq', prompt: `In ﴿أَمَّا الَّذينَ آمَنوا وَعَمِلوا الصّالِحاتِ فَلَهُمْ جَنّاتُ الْمَأْوٰى﴾, what role does الَّذينَ آمَنوا وَعَمِلوا الصّالِحاتِ play؟`, options: [`مبتدأ, with جَنّاتُ الْمَأْوٰى as its خبر after الفاء`, `جواب الشرط بذاته`, `خبر مقدم`, `مفعول به لفعل محذوف`], correct: 0 },
        { title: `أمّا في البيت: الخبر المقدم`, kind: 'mcq', prompt: `In أَمَّا في الْبَيْتِ فَزَيْدٌ, what role does في الْبَيْتِ play, sitting between أَمّا and الفاء؟`, options: [`خبر مقدم, with زَيْدٌ as المبتدأ following الفاء`, `مبتدأ, with زَيْدٌ as its خبر`, `جملة شرط بذاتها`, `اسم مؤول بأنّ`], correct: 0 },
        { title: `أمّا وجملة الشرط`, kind: 'mcq', prompt: `﴿فَأَمّا إِنْ كانَ مِنَ الْمُقَرَّبينَ ۝ فَرَوْحٌ وَرَيْحانٌ وَجَنَّتُ نَعيمٍ﴾ places a full جملة شرط, built on إِنْ, between أَمّا and الفاء. Which of the three attested shapes does this illustrate؟`, options: [`جملة الشرط`, `المبتدأ`, `الخبر`, `اسم مؤول بأنّ`], correct: 0 },
        { title: `تسمية ما بعد الفاء جوابًا: نظر`, kind: 'mcq', prompt: `Some grammarians question calling what follows أَمّا's فاء a "جواب" at all. What is their alternative account?`, options: [`أَمّا itself is حرف الشرط, and الفاء is merely الرابطة (connector) to the response, not formally a جواب`, `There is no response clause at all in any أَمّا sentence`, `الفاء is itself حرف الشرط, and أَمّا is الرابطة`, `The response clause is always اسم مؤول, never a real جواب`], correct: 0 },
        { title: `اليتيم: العامل الظاهر`, kind: 'mcq', prompt: `﴿فَأَمَّا الْيَتيمَ فَلا تَقْهَرْ﴾ places a منصوب noun between أَمّا and الفاء. What licenses that نصب؟`, options: [`تَقْهَرْ, the verb inside جواب الشرط, governing الْيَتيمَ as its fronted مفعول به`, `أَمّا itself acting as عامل نصب`, `الفاء acting as عامل نصب`, `A حرف جر hidden before الْيَتيمَ`], correct: 0 },
        { title: `ثمود بالنصب: العامل المحذوف`, kind: 'mcq', prompt: `﴿وَأَمَّا ثَمودُ فَهَدَيْناهُمْ﴾ is usually read with ثَمودُ مرفوعة (مبتدأ). What does the alternative قراءة «ثَمودَ» بالنصب reveal about the noun between أَمّا and الفاء؟`, options: [`It can also be the object of a hidden governing verb, not only a مبتدأ`, `It proves ثَمودُ can never be مرفوعة in any reading`, `It shows أَمّا always requires نصب on the following noun`, `It shows هَدَيْناهُمْ is مبني للمجهول in that reading`], correct: 0 },
        { title: `التكرار يرجح التفصيل`, kind: 'mcq', prompt: `When أَمّا is repeated — literally or in effect — which of its two meanings (تفصيل or توكيد) tends to dominate؟`, options: [`تفصيل, while توكيد fades`, `توكيد, while تفصيل fades`, `Both dominate equally whenever أَمّا repeats`, `Neither meaning is active when أَمّا repeats`], correct: 0 },
        { title: `عدم التكرار يرجح التوكيد`, kind: 'mcq', prompt: `أَمّا زَيْدٌ فَمُنْطَلِقٌ uses أَمّا only once. Which meaning does the rule of thumb say should dominate here؟`, options: [`توكيد, while تفصيل fades`, `تفصيل, while توكيد fades`, `Both meanings vanish entirely when أَمّا is not repeated`, `نَفْي, since أَمّا always negates a single occurrence`], correct: 0 },
        {
          title: `تركيب: فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِن رَّبِّهِمْ﴾.`,
          source: `فَأَمَّا الَّذِينَ آمَنُوا فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِن رَّبِّهِمْ`,
          words: [`فَأَمَّا`, `الَّذِينَ آمَنُوا`, `فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِن رَّبِّهِمْ`],
          labels: [`حرف شرط وتفصيل وتوكيد`, `مبتدأ (اسم موصول)`, `خبر (جملة فعلية)، وهو جواب الشرط`],
          distractors: [`فاعل`, `حال`, `خبر مقدم`, `جملة شرط`],
        },
        {
          title: `تركيب: أَمّا زَيْدٌ فَمُنْطَلِقٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of Sībawayh's model sentence أَمّا زَيْدٌ فَمُنْطَلِقٌ.`,
          source: `أَمّا زَيْدٌ فَمُنْطَلِقٌ`,
          words: [`أَمّا`, `زَيْدٌ`, `فَمُنْطَلِقٌ`],
          labels: [`حرف شرط وتوكيد (غير مكررة)`, `مبتدأ`, `خبر، وهو جواب الشرط`],
          distractors: [`فاعل`, `توكيد لفظي`, `حرف شرط وتفصيل`, `خبر مقدم`],
        },
        {
          title: `تركيب: فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ﴾.`,
          source: `فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ`,
          words: [`فَأَمَّا`, `ثَمُودُ`, `فَأُهْلِكُوا بِالطَّاغِيَةِ`],
          labels: [`حرف شرط مكرر يفيد التفصيل`, `مبتدأ`, `خبر (جملة فعلية مبنية للمجهول)، وهو جواب الشرط`],
          distractors: [`نائب فاعل مستقل`, `مضاف إليه`, `حرف شرط وتوكيد (غير مكررة)`, `مفعول به`],
        },
        {
          title: `تركيب: فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ﴾.`,
          source: `فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ`,
          words: [`فَأَمَّا`, `الْيَتِيمَ`, `فَلَا تَقْهَرْ`],
          labels: [`حرف شرط وتفصيل وتوكيد`, `اسم منصوب بعامل ظاهر في الجواب (مفعول به مقدَّم لـِ"تقهر")`, `جواب الشرط (فعل نهي وفاعله)`],
          distractors: [`مبتدأ`, `بدل`, `خبر مقدم`, `مضاف إليه`],
        },
        {
          title: `تركيب: أَمَّا فِي الْبَيْتِ فَزَيْدٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of أَمَّا فِي الْبَيْتِ فَزَيْدٌ.`,
          source: `أَمَّا فِي الْبَيْتِ فَزَيْدٌ`,
          words: [`أَمَّا`, `فِي الْبَيْتِ`, `فَزَيْدٌ`],
          labels: [`حرف شرط وتفصيل وتوكيد`, `خبر مقدم (شبه جملة)`, `مبتدأ مؤخر`],
          distractors: [`جواب الشرط منفردًا`, `حال`, `مبتدأ`, `اسم منصوب بعامل ظاهر في الجواب`],
        },
        {
          title: `تركيب: فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ فَرَوْحٌ وَرَيْحَانٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿فَأَمّا إِنْ كانَ مِنَ الْمُقَرَّبينَ فَرَوْحٌ وَرَيْحانٌ وَجَنَّتُ نَعيمٍ﴾.`,
          source: `فَأَمَّا إِنْ كَانَ مِنَ الْمُقَرَّبِينَ فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ`,
          words: [`فَأَمَّا`, `إِنْ كَانَ مِنَ الْمُقَرَّبِينَ`, `فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ`],
          labels: [`حرف شرط وتفصيل وتوكيد`, `جملة شرط واقعة بين أمّا والفاء`, `خبر لمبتدأ محذوف، وهو جواب أمّا`],
          distractors: [`مفعول به`, `نعت`, `مبتدأ`, `خبر مقدم`],
        },
      ],
    },
  ],
};

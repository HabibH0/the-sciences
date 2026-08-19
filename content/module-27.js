// Module 27 — الحال
//
// Source: app-lessons/133-al-hal.md (الكبرى في النحو) — a single file, the
// richest one surveyed in the whole app-lessons corpus per COURSE-MAP.md's
// note (11 `##` headings, six separate, independent classification axes at
// once). Authored out of order, the same way Modules 04/06-11/13/16-19 were
// each authored ahead of modules that sit earlier in id order but later in
// authoring order — Modules 20-26 (the derived-noun-governor and
// المعمول/المفعولات chapters between this module and the end of the
// currently-authored run) remain unauthored proposals in COURSE-MAP.md.
// **NOT YET registered** in `content/annahw.js`'s `MODULES` array: that
// registry file is shared with concurrent sessions authoring the modules
// before this one, so wiring it in is left for a later merge pass, per the
// same reasoning already used for every other out-of-order module in this
// course.
//
// The three-lesson split matches the COURSE-MAP.md proposal that stood
// before authoring: l1 covers the definitional material (تعريف الحال,
// صاحبها, تنكير ذي الحال ومسوغاته, تنكير الحال نفسها, اشتقاق الحال) up
// through the first of six classification axes' groundwork; l2 covers the
// first three of the six أقسام axes (الثبات والزوال، الاستقلال في
// الإفادة، الزمن); l3 covers the remaining three (القصد، التعدد،
// المتعلَّق) plus a closing review concept built from the source's own
// full summary table. l1 grew from the ~5 concepts estimated to 6, since
// اشتقاق الحال alone (مشتقة الأصل, then جامدة مؤوَّلة across three
// positions, then جامدة غير مؤوَّلة across four more) is dense enough that
// compressing it below two concepts would drop source material, the same
// kind of overflow Module 03's l1 and Module 07's l1 hit for the same
// reason. l2 and l3 each add one bridging/review concept beyond their three
// taught axes: l2's closing concept uses the fact that the source itself
// reuses ﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾ as the worked example for
// two different axes at once (متنقلة under الثبات, مقارِنة under الزمن) to
// make explicit that these axes are independent lenses on the same حال, not
// mutually exclusive categories; l3's closing concept is the source's own
// full summary table, used as a capstone once every axis it lists has
// actually been taught.
//
// Concept bodies use the lines[]/box/table/tarkeebDiagram shape established
// in module-01.js. Bank تركيب items use the flat words[]/labels[]/
// distractors[] schema, matching every prior authored module in this
// course. l1's bank reaches the full 24-item/6-تركيب norm, since 133
// supplies more clean, single-reading worked examples than almost any
// other source file surveyed. l2 caps its تركيب items at 5 rather than 6:
// its one "narrated" (محكية) example, ﴿قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي
// غُلَامٌ وَقَدْ بَلَغَنِيَ الْكِبَرُ﴾, is a حال جملة embedded inside a
// longer quoted speech rather than a short, cleanly bounded phrase, so it
// is discussed in concept prose and quiz/bank mcq items but left out of the
// word-to-label تركيب pool, the same discipline every prior module applied
// to its own thin spots. l3 caps its تركيب items at 4 for the same reason:
// its متداخلة example spans two verses and its تعريف section supplies no
// further clean multi-word constructions beyond the four used here.
export default {
  id: '27',
  title: 'الحال',
  heading: 'المعمول وغير المعمول',
  subheading: 'الاسم والفعل',
  blurb: 'الحال — the sixth of the منصوبات: its definition, صاحبها, when either one may be نكرة, مشتقة vs جامدة, and the six independent axes — ثبات، استقلال، زمن، قصد، تعدد، ومتعلَّق — a single حال is classified along all at once.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'تعريف الحال',
      subtitle: 'Defining الحال — صاحب الحال, when ذو الحال or الحال itself may be نكرة, and مشتقة vs جامدة',
      concepts: [
        {
          heading: 'تعريف الحال وصاحبها',
          lines: [
            { html: `<bdi>الحَال</bdi> is the sixth of the منصوبات, coming right after المفعول معه.`, list: false },
            { box: { title: 'Definition', lines: [`الحَالُ: وَصْفٌ فَضْلَةٌ يُبَيِّنُ هَيْئَةَ صَاحِبِهِ وَقْتَ وُقُوعِ الفِعْلِ`] } },
            { html: `A حال is a descriptive <bdi>فَضْلَة</bdi> — a dispensable, "extra" element that the جملة does not strictly need — showing the state of its <bdi>صاحب</bdi> (the noun it describes) at the exact moment the فعل's action takes place.`, list: false },
            { html: `صاحب الحال is not limited to one grammatical role. It can be: (1) <bdi>الفاعل</bdi> itself, (2) <bdi>المفعول به</bdi>, or (3) something else entirely, such as a مضاف إليه.`, list: false },
            { box: { title: 'Example', lines: [`وَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ`] } },
            { html: `"And call upon Him, sincere to Him in religion." <bdi>مُخْلِصِينَ</bdi> is حال from the الفاعل of ادعوه — the implied "you".`, list: false },
            { box: { title: 'Example', lines: [`إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ بَشِيرًا وَنَذِيرًا`] } },
            { html: `"Indeed, We have sent you with the truth as a bringer of good tidings and a warner." <bdi>بَشِيرًا وَنَذِيرًا</bdi> are حال from الكاف, the مفعول به of أَرْسَلْنَاكَ.`, list: false },
            { box: { title: 'Example', lines: [`إِلَى اللَّهِ مَرْجِعُكُمْ جَمِيعًا`] } },
            { html: `"To Allah is your return, all together." <bdi>جَمِيعًا</bdi> is حال from the ضمير كُمْ — here a مضاف إليه, neither الفاعل nor المفعول به.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿إِلَى اللَّهِ مَرْجِعُكُمْ جَمِيعًا﴾, جَمِيعًا is a حال. Its صاحب, the ضمير كُمْ, is neither الفاعل nor المفعول به. What grammatical role does it play instead؟`,
            kind: 'mcq',
            options: [`مضاف إليه`, `نعت`, `حرف جر`, `مبتدأ`],
            correct: 0,
          },
        },
        {
          heading: 'صاحب الحال والترتيب الأصلي',
          lines: [
            { box: { title: 'Rule', lines: [`لِكُلِّ حَالٍ صَاحِبٌ يُوصَفُ بِهَا، وَالأَصْلُ تَقَدُّمُهُ عَلَيْهَا`] } },
            { html: `Every حال must have a <bdi>صاحب حال</bdi> — a noun it describes, called <bdi>ذو الحال</bdi> ("the possessor of the حال") — exactly the way every نعت presupposes a منعوت.`, list: false },
            { html: `The default order places ذو الحال <bdi>before</bdi> الحال itself.`, list: false },
          ],
          exercise: {
            prompt: `الحال presupposes a صاحب الحال the same way النعت presupposes a منعوت. In the normal, default word order, which comes first؟`,
            kind: 'mcq',
            options: [`ذو الحال, then الحال`, `الحال, then ذو الحال`, `They must always appear as one combined word`, `ذو الحال is always dropped`],
            correct: 0,
          },
        },
        {
          heading: 'تنكير ذي الحال ومسوغاته',
          lines: [
            { html: `الأصل في ذي الحال أن يكون <bdi>معرفة</bdi> (definite). It may only be a <bdi>نكرة</bdi> (indefinite) when a <bdi>مُسَوِّغ</bdi> — a licensing factor — permits it.`, list: false },
            { table: { title: 'مسوغات تنكير ذي الحال', headers: ['المسوِّغ', 'المثال'], rows: [
              [`تقدُّم الحال على ذي الحال`, `رأيتُ راكبًا رجلًا`],
              [`ذو الحال نكرة غير محضة (مخصَّصة بوصف أو إضافة)`, `أَمْرًا مِّنْ عِندِنَا`],
              [`ذو الحال بعد نفي أو شبهه (نهي، استفهام)`, `لا يُصلِّيَنَّ أحدٌ غافلًا`],
              [`الحال مقرون بواو`, `وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا`],
            ] } },
            { html: `In the first, <bdi>رأيتُ راكبًا رجلًا</bdi>, راكبًا — الحال — is fronted ahead of رجلًا, its indefinite ذو الحال. In the second, ﴿فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ ۝ أَمْرًا مِّنْ عِندِنَا﴾, أَمْرًا is specified by مِّنْ عِندِنَا, so it is not a bare نكرة. In the third, ﴿وَمَا أَهْلَكْنَا مِن قَرْيَةٍ إِلَّا وَلَهَا كِتَابٌ مَّعْلُومٌ﴾ shows ذو الحال after a نفي. In the fourth, ﴿أَوْ كَالَّذِي مَرَّ عَلَىٰ قَرْيَةٍ وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا﴾ shows الحال joined by a وَ.`, list: false },
            { box: { title: 'Careful', lines: [`قَدْ يَرِدُ ذُو الحَالِ نَكِرَةً مَحْضَةً بِلا مُسَوِّغٍ، وَهُوَ قَلِيلٌ نَادِرٌ`] } },
            { html: `As in the حديث: صلَّى رسولُ الله ﷺ قاعدًا وصلَّى وراءَه رجالٌ قيامًا — "The Messenger of Allah ﷺ prayed sitting, and men prayed standing behind him." <bdi>رِجالٌ</bdi> here is an unlicensed indefinite ذو الحال for قِيامًا, but this is rare and exceptional, not the norm.`, list: false },
          ],
          exercise: {
            prompt: `رَأَيْتُ رَاكِبًا رَجُلًا places its indefinite ذو الحال, رجلًا, after الحال راكبًا instead of before it — reversing the normal order. Which مسوِّغ licenses that reversed, indefinite ذو الحال؟`,
            kind: 'mcq',
            options: [`تقدُّم الحال على ذي الحال`, `ذو الحال نكرة غير محضة`, `ذو الحال بعد نفي`, `الحال مقرون بواو`],
            correct: 0,
          },
        },
        {
          heading: 'تنكير الحال نفسها',
          lines: [
            { box: { title: 'Rule', lines: [`الأَصْلُ فِي الحَالِ أَنْ تَكُونَ نَكِرَةً`] } },
            { html: `الحال itself defaults to being indefinite — the opposite default from ذو الحال, which defaults to definite.`, list: false },
            { box: { title: 'Example', lines: [`إِذَا دُعِيَ اللَّهُ وَحْدَهُ كَفَرْتُمْ`] } },
            { html: `"And when Allah alone was invoked, you disbelieved." <bdi>وَحْدَهُ</bdi> looks like a مضاف, but it is understood <bdi>في تأويل</bdi> (by reinterpretation) as <bdi>مُنْفَرِدًا</bdi> or <bdi>مُوَحَّدًا</bdi>, both meaning "alone/exclusively" — which is how it still functions as a نكرة حال despite its surface appearance.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿إِذَا دُعِيَ اللَّهُ وَحْدَهُ كَفَرْتُمْ﴾, وَحْدَهُ looks like it might be مضاف/مضاف إليه rather than a plain نكرة. How does it still satisfy الأصل في الحال أن تكون نكرة؟`,
            kind: 'mcq',
            options: [`It is reinterpreted (مُؤَوَّل) as مُنْفَرِدًا or مُوَحَّدًا, both indefinite in meaning`, `الحال is exempt from the نكرة rule whenever it is attached to a ضمير`, `وَحْدَهُ is actually ذو الحال here, not الحال itself`, `It carries a hidden تنوين that overrides the مضاف reading`],
            correct: 0,
          },
        },
        {
          heading: 'اشتقاق الحال: الأصل والجامدة المؤوَّلة',
          lines: [
            { html: `الأصل في الحال المفردة أن تكون <bdi>اسمًا مشتقًّا</bdi> (like اسم الفاعل). But it can also come <bdi>جامدة</bdi> — a plain, non-derived noun — reinterpreted in a descriptive sense, <bdi>جامدة مؤوَّلة بالمشتق</bdi>, in three positions.`, list: false },
            { table: { title: 'الجامدة المؤوَّلة بالمشتق', headers: ['الموضع', 'المثال', 'التأويل'], rows: [
              [`تشبيه (comparison)`, `بدا وجهُه قمرًا`, `أَيْ مُشابِهًا لِلْقَمَرِ`],
              [`مُفاعَلة (a mutual, reciprocal action)`, `بعتُه يدًا بيد`, `فعل من الطرفين معًا`],
              [`تَرْتيب (sequence/order)`, `وَجَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا`, `رَتَّبَ الوقوعَ صفًّا بعد صفٍّ`],
            ] } },
            { html: `In <bdi>بدا وجهُه قمرًا</bdi> — "His face appeared [like] a moon" — قمرًا is جامد, yet is reinterpreted as مُشابِهًا لِلْقَمَرِ. <bdi>بعتُه يدًا بيد</bdi> — "I sold to him hand for hand [cash, on the spot]" — and <bdi>كلَّمتُه فاه إلى فيَّ</bdi> — "I spoke to him mouth to mouth [face to face]" — both signal مفاعلة.`, list: false },
            { html: `﴿وَجَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا﴾ — "And your Lord has come, and the angels, rank upon rank" — signals ترتيب.`, list: false },
          ],
          exercise: {
            prompt: `بعتُه يدًا بيد uses يدًا بيد, جامد nouns, as a حال reinterpreted through one of three senses. Which one؟`,
            kind: 'mcq',
            options: [`مُفاعَلة — a mutual, reciprocal action`, `تشبيه — a comparison to something صاحبها resembles`, `تَرْتيب — a sequence, one stage happening after another`, `it cannot be reinterpreted at all`],
            correct: 0,
          },
        },
        {
          heading: 'الجامدة غير المؤوَّلة بالمشتق',
          lines: [
            { html: `جامدة الحال may also carry no derived reinterpretation at all — <bdi>جامدة غير مؤوَّلة بالمشتق</bdi> — in several positions, among them four:`, list: false },
            { table: { title: 'الجامدة غير المؤوَّلة بالمشتق', headers: ['الموضع', 'المثال'], rows: [
              [`مَوْصوفة (qualified by a following description)`, `إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا`],
              [`عَدَد (a number)`, `فَتَمَّ مِيقَاتُ رَبِّهِ أَرْبَعِينَ لَيْلَةً`],
              [`أصْلًا لِصاحِبها (the raw material صاحبها was made from)`, `أَأَسْجُدُ لِمَنْ خَلَقْتَ طِينًا`],
              [`فَرْعًا لِصاحِبها (manufactured/derived from صاحبها)`, `وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا`],
            ] } },
            { html: `In ﴿إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا﴾ — "Indeed, We have sent it down as an Arabic Qur'an" — قُرْآنًا merely paves the way for the real description that follows it, عَرَبِيًّا. This kind is called <bdi>الحال الموطِّئة</bdi> ("the paving/preparatory حال"). ﴿فَتَمَّ مِيقَاتُ رَبِّهِ أَرْبَعِينَ لَيْلَةً﴾ — "So the appointed term of his Lord was completed as forty nights" — is عدد.`, list: false },
            { html: `﴿أَأَسْجُدُ لِمَنْ خَلَقْتَ طِينًا﴾ — "Shall I prostrate to one You created out of clay?" — أَيْ لِمَنْ خَلَقْتَهُ طينًا, is أصل.`, list: false },
            { html: `﴿وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا﴾ — "And you carve homes out of the mountains" — is فرع.`, list: false },
          ],
          exercise: {
            prompt: `﴿إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا﴾ uses two جامدة nouns as حال, one after the other. قُرْآنًا itself does not reinterpret into a derived sense at all; it only paves the way for the real description, عَرَبِيًّا, that follows it. What is this kind of جامدة حال specifically called؟`,
            kind: 'mcq',
            options: [`الحال المُوَطِّئَة`, `الحال المُؤسِّسَة`, `الحال المُؤكِّدَة`, `الحال المَقْصودَة`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الحال؟`, options: [`A فَضلة description that shows the state of its صاحب at the moment the فعل's action occurs`, `A description that shows what its صاحب looks like at all times, regardless of the فعل`, `A core, non-dispensable part of the جملة that cannot be removed without breaking its grammar`, `A description confined only to الفاعل, never extending to المفعول به or other roles`], correct: 0 },
        { q: `صاحب الحال is not limited to الفاعل and المفعول به alone. In ﴿إِلَى اللَّهِ مَرْجِعُكُمْ جَمِيعًا﴾, what role does the صاحب of جَمِيعًا play؟`, options: [`مضاف إليه`, `فاعل`, `مفعول به`, `خبر`], correct: 0 },
        { q: `صلَّى رسولُ الله ﷺ قاعدًا وصلَّى وراءَه رجالٌ قيامًا gives رجالٌ as an unlicensed indefinite ذو الحال, with none of the four مسوِّغات present. How does the source describe this pattern؟`, options: [`قليل نادر — rare and exceptional, not the norm`, `The standard, most common pattern, expected whenever ذو الحال is indefinite`, `Impossible in Arabic, since every نكرة ذو الحال needs one of the four مسوِّغات`, `Only valid in poetry, never in حديث`], correct: 0 },
        { q: `الأصل في الحال أن تكون نكرة. In ﴿إِذَا دُعِيَ اللَّهُ وَحْدَهُ كَفَرْتُمْ﴾, how does وَحْدَهُ still satisfy that default despite looking like a مضاف؟`, options: [`It is reinterpreted as مُنْفَرِدًا or مُوَحَّدًا`, `It is an exception to the نكرة rule`, `وحده is actually not الحال here`, `It carries a hidden تنوين`], correct: 0 },
        { q: `بعتُه يدًا بيد uses يدًا بيد, a جامد pair, as a حال reinterpreted through one of three senses. Which one؟`, options: [`مُفاعَلة (a reciprocal action)`, `تشبيه (a comparison)`, `تَرْتيب (a sequence)`, `it cannot be reinterpreted`], correct: 0 },
        { q: `﴿فَتَمَّ مِيقَاتُ رَبِّهِ أَرْبَعِينَ لَيْلَةً﴾ uses أَرْبَعِينَ لَيْلَةً, a عدد, as حال. Under اشتقاق الحال, which category does a عدد حال fall into؟`, options: [`جامدة غير مؤوَّلة بالمشتق`, `جامدة مؤوَّلة بالمشتق`, `مشتقة، وهي الأصل في الحال المفردة`, `موطِّئة، وهذا اسم الموضع الوحيد`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الحال`, kind: 'mcq', prompt: `Which of the following correctly defines الحال؟`, options: [`وصف فَضلة يبيّن هيئة صاحبه وقت وقوع الفعل`, `وصف لازم لا يمكن حذفه من الجملة`, `اسم يدل على معنى في نفسه غير مقترن بزمان`, `لفظ دالّ على معنى فقط`], correct: 0 },
        { title: `الحال فَضْلة`, kind: 'mcq', prompt: `الحال is described as a فَضْلة. What does that mean for the جملة it appears in؟`, options: [`The جملة remains grammatically complete even if الحال is removed`, `The جملة becomes incomplete without it`, `فَضْلة means it must always be مبني`, `فَضْلة means it always follows a نفي`], correct: 0 },
        { title: `مخلصين: صاحبها الفاعل`, kind: 'mcq', prompt: `In ﴿وَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ﴾, مُخْلِصِينَ is حال. Which role does its صاحب play؟`, options: [`فاعل ادعوه (المستتر)`, `مفعول به`, `مضاف إليه`, `خبر`], correct: 0 },
        { title: `بشيرا ونذيرا: صاحبها المفعول به`, kind: 'mcq', prompt: `In ﴿إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ بَشِيرًا وَنَذِيرًا﴾, بَشِيرًا وَنَذِيرًا are حال. Which role does their صاحب, الكاف, play؟`, options: [`مفعول به`, `فاعل`, `مضاف إليه`, `نعت`], correct: 0 },
        { title: `صاحب الحال can be a مضاف إليه`, kind: 'mcq', prompt: `In ﴿إِلَى اللَّهِ مَرْجِعُكُمْ جَمِيعًا﴾, صاحب الحال is neither الفاعل nor المفعول به. What is it instead؟`, options: [`مضاف إليه (كُمْ)`, `مبتدأ`, `خبر`, `اسم مجرور بحرف جر مستقل`], correct: 0 },
        { title: `الترتيب الأصلي`, kind: 'mcq', prompt: `ذو الحال and الحال have a default relative order. What is it؟`, options: [`ذو الحال يتقدَّم على الحال`, `الحال يتقدَّم على ذي الحال دائمًا`, `لا ترتيب أصلي بينهما`, `يتقدَّم أيًّا منهما كان أطول`], correct: 0 },
        { title: `المسوِّغ الأول: تقدُّم الحال`, kind: 'mcq', prompt: `رأيتُ راكبًا رجلًا places الحال before its indefinite ذو الحال. What licenses this reversed order؟`, options: [`تقدُّم الحال على ذي الحال`, `ذو الحال نكرة غير محضة`, `ذو الحال بعد نفي`, `الحال مقرون بواو`], correct: 0 },
        { title: `المسوِّغ الثاني: نكرة غير محضة`, kind: 'mcq', prompt: `﴿أَمْرًا مِّنْ عِندِنَا﴾ licenses أَمْرًا as an indefinite ذو الحال because it is specified by مِّنْ عِندِنَا rather than being a bare نكرة. What is that مسوِّغ called؟`, options: [`ذو الحال نكرة غير محضة`, `تقدُّم الحال على ذي الحال`, `الحال مقرون بواو`, `ذو الحال بعد استفهام فقط`], correct: 0 },
        { title: `المسوِّغ الثالث: بعد نفي أو شبهه`, kind: 'mcq', prompt: `﴿وَمَا أَهْلَكْنَا مِن قَرْيَةٍ إِلَّا وَلَهَا كِتَابٌ مَّعْلُومٌ﴾ places its indefinite ذو الحال after a نفي. Besides نفي itself, which two other things licence the same مسوِّغ؟`, options: [`نهي واستفهام`, `تنوين وأل`, `نداء وإضافة`, `جر ورفع`], correct: 0 },
        { title: `المسوِّغ الرابع: مقرون بواو`, kind: 'mcq', prompt: `﴿أَوْ كَالَّذِي مَرَّ عَلَىٰ قَرْيَةٍ وَهِيَ خَاوِيَةٌ عَلَىٰ عُرُوشِهَا﴾ licenses its indefinite ذو الحال because الحال itself is joined by a وَ. What is that مسوِّغ called؟`, options: [`الحال مقرون بواو`, `ذو الحال نكرة غير محضة`, `تقدُّم الحال على ذي الحال`, `ذو الحال بعد نفي`], correct: 0 },
        { title: `رجال قياما: استثناء نادر`, kind: 'mcq', prompt: `صلَّى رسولُ الله ﷺ قاعدًا وصلَّى وراءَه رجالٌ قيامًا gives رجالٌ as an indefinite ذو الحال with no مسوِّغ from the usual four present at all. How common is this pattern؟`, options: [`قليل نادر — rare and exceptional`, `The most common pattern of all four`, `Impossible according to every grammarian`, `Limited strictly to poetry`], correct: 0 },
        { title: `تنكير الحال: الأصل`, kind: 'mcq', prompt: `Which of the following correctly states الأصل في الحال؟`, options: [`أن تكون نكرة`, `أن تكون معرفة`, `أن تكون مبنية`, `أن تكون جملة فقط`], correct: 0 },
        { title: `وحده: تأويل بنكرة`, kind: 'mcq', prompt: `وَحْدَهُ in ﴿إِذَا دُعِيَ اللَّهُ وَحْدَهُ كَفَرْتُمْ﴾ looks like a مضاف, yet still functions as a نكرة حال. How؟`, options: [`It is reinterpreted as مُنْفَرِدًا or مُوَحَّدًا`, `أل التعريف is silently dropped from it`, `It is actually ذو الحال, not الحال`, `تنوين is hidden inside the ه`], correct: 0 },
        { title: `اشتقاق الحال: الأصل`, kind: 'mcq', prompt: `Which of the following correctly states الأصل في الحال المفردة, regarding its اشتقاق؟`, options: [`أن تكون اسمًا مشتقًّا`, `أن تكون اسمًا جامدًا`, `أن تكون حرفًا`, `أن تكون جملة فعلية`], correct: 0 },
        { title: `بدا وجهه قمرا: تشبيه`, kind: 'mcq', prompt: `بدا وجهُه قمرًا uses قمرًا, جامد, reinterpreted as مُشابِهًا لِلْقَمَرِ. Which of the three جامدة مؤوَّلة positions is that؟`, options: [`تشبيه`, `مُفاعَلة`, `تَرْتيب`, `none — قمرًا cannot be a حال`], correct: 0 },
        { title: `صفا صفا: ترتيب`, kind: 'mcq', prompt: `﴿وَجَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا﴾ repeats صَفًّا to signal that the angels came rank after rank. Which جامدة مؤوَّلة position does that illustrate؟`, options: [`تَرْتيب`, `تشبيه`, `مُفاعَلة`, `none of the three`], correct: 0 },
        { title: `قرآنا عربيا: موصوفة`, kind: 'mcq', prompt: `﴿إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا﴾'s قُرْآنًا is qualified by the description that follows it, عَرَبِيًّا. Which جامدة غير مؤوَّلة position is that؟`, options: [`مَوْصوفة (الحال الموطِّئة)`, `عَدَد (a number)`, `أصل (raw material)`, `فرع (a manufactured product)`], correct: 0 },
        {
          title: `تركيب: وَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ.`,
          source: `وَادْعُوهُ مُخْلِصِينَ لَهُ الدِّينَ`,
          words: [`ادْعُوهُ`, `مُخْلِصِينَ`, `لَهُ`, `الدِّينَ`],
          labels: [`فعل أمر مع فاعله ومفعوله (الهاء)`, `حال من فاعل ادعوه`, `جار ومجرور متعلق بمخلصين`, `مفعول به لمخلصين`],
          distractors: [`فعل أمر مع فاعله ومفعوله (الكاف)`, `فعل مضارع مع فاعله ومفعوله (الهاء)`, `حال من مفعول ادعوه`, `حال من مضاف إليه`, `جار ومجرور متعلق بالدين`, `مفعول به لادعوه`],
        },
        {
          title: `تركيب: إِنَّا أَرْسَلْنَاكَ بِالْحَقِّ بَشِيرًا وَنَذِيرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of أَرْسَلْنَاكَ بِالْحَقِّ بَشِيرًا وَنَذِيرًا.`,
          source: `أَرْسَلْنَاكَ بِالْحَقِّ بَشِيرًا وَنَذِيرًا`,
          words: [`أَرْسَلْنَاكَ`, `بِالْحَقِّ`, `بَشِيرًا`, `وَنَذِيرًا`],
          labels: [`فعل وفاعله ومفعوله (الكاف، صاحب الحال)`, `جار ومجرور`, `حال أولى من الكاف`, `حال ثانية من الكاف`],
          distractors: [`فعل وفاعله (صاحب الحال) ومفعوله (الكاف)`, `حال أولى من الهاء`, `حال ثانية من الهاء`, `جار ومجرور متعلق بأرسلناك`, `مفعول به منصوب`, `صاحب الحال الفاعل`],
        },
        {
          title: `تركيب: بَدَا وَجْهُهُ قَمَرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of بَدَا وَجْهُهُ قَمَرًا.`,
          source: `بَدَا وَجْهُهُ قَمَرًا`,
          words: [`بَدَا`, `وَجْهُهُ`, `قَمَرًا`],
          labels: [`فعل ماضٍ`, `فاعل وصاحب الحال`, `حال جامدة مؤوَّلة بالمشتق (تشبيه)`],
          distractors: [`حال جامدة مؤوَّلة بالمشتق (مفاعلة)`, `حال جامدة مؤوَّلة بالمشتق (ترتيب)`, `حال جامدة غير مؤوَّلة (موصوفة)`, `فعل مضارع`, `مفعول به وصاحب الحال`, `فاعل مرفوع`],
        },
        {
          title: `تركيب: وَجَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of جَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا.`,
          source: `جَاءَ رَبُّكَ وَالْمَلَكُ صَفًّا صَفًّا`,
          words: [`جَاءَ`, `رَبُّكَ وَالْمَلَكُ`, `صَفًّا صَفًّا`],
          labels: [`فعل ماضٍ`, `فاعل وصاحب الحال`, `حال جامدة مؤوَّلة بالمشتق (ترتيب)`],
          distractors: [`حال جامدة مؤوَّلة بالمشتق (تشبيه)`, `حال جامدة مؤوَّلة بالمشتق (مفاعلة)`, `حال جامدة غير مؤوَّلة (عدد)`, `حال جامدة غير مؤوَّلة (موصوفة)`, `فعل مضارع`, `فاعل مرفوع`],
        },
        {
          title: `تركيب: إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا.`,
          source: `أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا`,
          words: [`أَنزَلْنَاهُ`, `قُرْآنًا`, `عَرَبِيًّا`],
          labels: [`فعل وفاعله ومفعوله (الهاء)`, `حال جامدة غير مؤوَّلة، موصوفة (الحال الموطِّئة)`, `نعت لـ"قرآنًا" يحمل الوصف الحقيقي`],
          distractors: [`حال موطِّئة، لا تحمل القصد بذاتها`, `نعت لـ"قرآنًا" يحمل القصد الحقيقي`, `حال جامدة غير مؤوَّلة، عدد (كأربعين ليلة)`, `حال جامدة مؤوَّلة بالمشتق (تشبيه)`, `صاحب الحال الفاعل`, `فعل وفاعله ومفعوله (الكاف)`],
        },
        {
          title: `تركيب: وَتَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of تَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا.`,
          source: `تَنْحِتُونَ مِنَ الْجِبَالِ بُيُوتًا`,
          words: [`تَنْحِتُونَ`, `مِنَ الْجِبَالِ`, `بُيُوتًا`],
          labels: [`فعل مضارع وفاعله (الواو)`, `جار ومجرور (الجبال صاحب الحال)`, `حال جامدة غير مؤوَّلة (فرع لصاحبها)`],
          distractors: [`حال جامدة غير مؤوَّلة (أصلًا لصاحبها)`, `حال جامدة غير مؤوَّلة (عدد)`, `حال جامدة مؤوَّلة بالمشتق (تشبيه)`, `فعل ماضٍ وفاعله (الواو)`, `جار ومجرور (الجبال مفعول به)`, `فعل مضارع وفاعله (التاء)`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'الثبات والاستقلال',
      subtitle: 'Three Classification Axes — متنقلة/لازمة, مؤسِّسة/مؤكِّدة, and محكية/مقارِنة/مقدَّرة',
      concepts: [
        {
          heading: 'باعتبار الثبات والزوال: متنقلة ولازمة',
          lines: [
            { html: `Viewed by whether the state it describes persists or passes, الحال divides into two.`, list: false },
            { box: { title: 'Example', lines: [`وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ`] } },
            { html: `"And they came to their father in the evening, weeping." <bdi>يَبْكُونَ</bdi> is <bdi>مُتَنَقِّلة</bdi> ("transient" — the default): البكاء is a changing state that will pass.`, list: false },
            { box: { title: 'Example', lines: [`وَخُلِقَ الْإِنسَانُ ضَعِيفًا`] } },
            { html: `"And man was created weak." <bdi>ضَعِيفًا</bdi> is <bdi>لازِمة</bdi> (also called <bdi>ثابتة</bdi> or <bdi>دائمة</bdi> — "fixed/permanent"): الضعف here is a quality permanently attached to الإنسان, not a state that comes and goes.`, list: false },
          ],
          exercise: {
            prompt: `الضعف (weakness) in ﴿وَخُلِقَ الْإِنسَانُ ضَعِيفًا﴾ is a quality permanently attached to الإنسان, not a passing state. Which type باعتبار الثبات والزوال is ضَعِيفًا؟`,
            kind: 'mcq',
            options: [`لازِمة (ثابتة، دائمة)`, `مُتَنَقِّلة (الأصل)`, `مؤسِّسة (مبيِّنة)`, `مقدَّرة (مستقبلة)`],
            correct: 0,
          },
        },
        {
          heading: 'باعتبار الاستقلال في الإفادة: مؤسِّسة ومؤكِّدة',
          lines: [
            { html: `Viewed by whether it adds independent information beyond its عامل, الحال divides into two.`, list: false },
            { box: { title: 'Example', lines: [`وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا`] } },
            { html: `"And do not walk upon the earth exultantly." <bdi>مَرَحًا</bdi> is <bdi>مؤسِّسة</bdi> (also called <bdi>مبيِّنة</bdi> — "foundational/clarifying"): it conveys a meaning independent of العامل — the *manner* being prohibited, not merely a repetition of the prohibition on walking itself.`, list: false },
            { box: { title: 'Example', lines: [`وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ`] } },
            { html: `"And do not commit corruption in the land, spreading corruption." <bdi>مُفْسِدِينَ</bdi> is <bdi>مؤكِّدة</bdi> ("confirmatory"): it adds no independent meaning, since it is close in sense to تَعْثَوْا (committing فَساد) itself — it reinforces rather than adds.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ﴾ pairs تَعْثَوْا (committing فَساد) with the حال مُفْسِدِينَ, which is close in meaning to the فعل itself rather than adding something new. Which type باعتبار الاستقلال في الإفادة is مُفْسِدِينَ؟`,
            kind: 'mcq',
            options: [`مؤكِّدة`, `مؤسِّسة (مبيِّنة)`, `مُتَنَقِّلة`, `مقدَّرة`],
            correct: 0,
          },
        },
        {
          heading: 'باعتبار الزمن: محكية، مقارِنة، ومقدَّرة',
          lines: [
            { html: `Viewed by its timing relative to العامل, الحال divides into three.`, list: false },
            { table: { title: 'أقسام الحال باعتبار الزمن', headers: ['النوع', 'المعنى', 'المثال'], rows: [
              [`مَحْكِيّة`, `narrated — already past by حال القول`, `قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَقَدْ بَلَغَنِيَ الْكِبَرُ`],
              [`مقارِنة`, `concurrent — happens at the same time as العامل`, `وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ`],
              [`مقدَّرة`, `anticipated — happens after العامل, not alongside it`, `فَادْخُلُوهَا خَالِدِينَ`],
            ] } },
            { html: `In "He said, 'My Lord, how will I have a son when old age has [already] reached me?'", بلوغ الكبر had already occurred before حال القول, the moment of speaking — so it is محكية. In "they came to their father in the evening, weeping", the weeping is simultaneous with المجيء — مقارِنة. In "So enter it, to abide eternally", الخلود occurs *after* الدخول, not alongside it — مقدَّرة.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿فَادْخُلُوهَا خَالِدِينَ﴾, الخُلود occurs after الدخول, not alongside it. Which timing category باعتبار الزمن is خَالِدِينَ؟`,
            kind: 'mcq',
            options: [`مقدَّرة (مستقبلة)`, `محكية (ماضية)`, `مقارِنة (حاضرة)`, `لازمة (ثابتة)`],
            correct: 0,
          },
        },
        {
          heading: 'مراجعة: محاور مستقلة تُصنَّف عليها الحال الواحدة معًا',
          lines: [
            { html: `The three axes covered in this lesson do not compete with each other — each classifies the same حال from a separate angle, and more than one applies at once to a single example.`, list: false },
            { html: `﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾'s <bdi>يَبْكُونَ</bdi> already served as the worked example for <bdi>مُتَنَقِّلة</bdi> under باعتبار الثبات والزوال, earlier in this lesson. The very same يَبْكُونَ is also the worked example for <bdi>مقارِنة</bdi> under باعتبار الزمن — the weeping is both a passing state and simultaneous with المجيء, two independent facts about the one حال at once.`, list: false },
            { table: { title: 'ثلاثة محاور مستقلة', headers: ['المحور', 'الأنواع'], rows: [
              [`باعتبار الثبات والزوال`, `مُتَنَقِّلة (الأصل) / لازِمة (ثابتة، دائمة)`],
              [`باعتبار الاستقلال في الإفادة`, `مؤسِّسة (مبيِّنة) / مؤكِّدة`],
              [`باعتبار الزمن`, `محكية (ماضية) / مقارِنة (حاضرة) / مقدَّرة (مستقبلة)`],
            ] } },
          ],
          exercise: {
            prompt: `يَبْكُونَ in ﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾ is used as the worked example for two different محاور at once: متنقلة (باعتبار الثبات) and مقارِنة (باعتبار الزمن). What does that double use show about these classification axes؟`,
            kind: 'mcq',
            options: [`They are independent lenses — a single حال is classified along each one separately, at the same time`, `Only one axis can ever apply to a single حال at a time`, `متنقلة and مقارِنة are actually the same category under two names`, `The الزمن axis overrides the الثبات axis whenever both apply`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الأصل في الحال أن تكون متنقلة. In ﴿وَخُلِقَ الْإِنسَانُ ضَعِيفًا﴾, الضعف is permanently attached to الإنسان rather than passing. What type is ضَعِيفًا؟`, options: [`لازمة (ثابتة)`, `متنقلة (الأصل)`, `مؤسِّسة (مبيِّنة)`, `مقارِنة (حاضرة)`], correct: 0 },
        { q: `﴿وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا﴾ — مَرَحًا adds the very manner being prohibited, genuinely new information beyond تمش itself. Which type, باعتبار الاستقلال؟`, options: [`مؤسِّسة (مبيِّنة)`, `مؤكِّدة (تكرر معنى العامل)`, `لازمة (ثابتة)`, `محكية (ماضية)`], correct: 0 },
        { q: `﴿وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ﴾ — مُفْسِدِينَ is close in meaning to تَعْثَوْا itself, so it repeats rather than adds. Which type؟`, options: [`مؤكِّدة`, `مؤسِّسة`, `متنقلة`, `مقدَّرة`], correct: 0 },
        { q: `In ﴿قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَقَدْ بَلَغَنِيَ الْكِبَرُ﴾, بلوغ الكبر had already happened before the moment of speaking. Which زمن category is that حال؟`, options: [`محكية (ماضية)`, `مقارِنة (حاضرة)`, `مقدَّرة (مستقبلة)`, `لازمة (ثابتة)`], correct: 0 },
        { q: `In ﴿فَادْخُلُوهَا خَالِدِينَ﴾, الخلود happens after الدخول, not alongside it. Which زمن category؟`, options: [`مقدَّرة (مستقبلة)`, `محكية (ماضية)`, `مقارِنة (حاضرة)`, `مؤسِّسة (مبيِّنة)`], correct: 0 },
        { q: `يَبْكُونَ in ﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾ serves as the worked example for both متنقلة (باعتبار الثبات) and مقارِنة (باعتبار الزمن) at once. What does that double use show about these two محاور؟`, options: [`They classify the same حال independently, along separate axes, at the same time`, `Only one of the two axes can really apply`, `متنقلة always implies مقارِنة, the same instant it occurs`, `مقارِنة overrides متنقلة whenever both apply`], correct: 0 },
      ],
      bank: [
        { title: `الثبات والزوال: الأصل`, kind: 'mcq', prompt: `Which of the two subtypes باعتبار الثبات والزوال is described as الأصل — the default؟`, options: [`مُتَنَقِّلة`, `لازِمة`, `مؤسِّسة`, `محكية`], correct: 0 },
        { title: `لازمة: الأسماء الأخرى`, kind: 'mcq', prompt: `لازمة is also known by two other names. What are they؟`, options: [`ثابتة ودائمة`, `مقصودة وموطِّئة`, `مترادفة ومتداخلة`, `حقيقية وسببية`], correct: 0 },
        { title: `يبكون: متنقلة`, kind: 'mcq', prompt: `In ﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾, البكاء will pass — it is not a permanent state of أباهم. Which type باعتبار الثبات؟`, options: [`مُتَنَقِّلة`, `لازِمة`, `مؤكِّدة`, `مقدَّرة`], correct: 0 },
        { title: `ضعيفا: لازمة`, kind: 'mcq', prompt: `الضعف in ﴿وَخُلِقَ الْإِنسَانُ ضَعِيفًا﴾ is permanent, not passing. Which type باعتبار الثبات؟`, options: [`لازِمة`, `مُتَنَقِّلة`, `مؤسِّسة`, `مقارِنة`], correct: 0 },
        { title: `الاستقلال في الإفادة: التعريف`, kind: 'mcq', prompt: `باعتبار الاستقلال في الإفادة asks whether الحال conveys a meaning مستقلًّا عن العامل or not. What does مستقلًّا عن العامل mean here؟`, options: [`Independent of, and beyond, what its عامل already conveys`, `Grammatically dependent on its عامل for its إعراب`, `Always attached to a ضمير, never appearing after a bare اسم ظاهر`, `Always جامدة, never مشتقة, regardless of what its عامل requires`], correct: 0 },
        { title: `مرحا: مؤسِّسة`, kind: 'mcq', prompt: `مَرَحًا in ﴿وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا﴾ adds the manner being prohibited, genuinely new information. Which type؟`, options: [`مؤسِّسة (مبيِّنة)`, `مؤكِّدة (تكرر معنى العامل)`, `لازمة (ثابتة)`, `مقارِنة (حاضرة)`], correct: 0 },
        { title: `مفسدين: مؤكِّدة`, kind: 'mcq', prompt: `مُفْسِدِينَ in ﴿وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ﴾ is close in meaning to تَعْثَوْا itself. Which type؟`, options: [`مؤكِّدة`, `مؤسِّسة`, `متنقلة`, `محكية`], correct: 0 },
        { title: `مؤسِّسة: الاسم الآخر`, kind: 'mcq', prompt: `مؤسِّسة is also known by another name. What is it؟`, options: [`مبيِّنة`, `موطِّئة`, `مترادفة`, `ثابتة`], correct: 0 },
        { title: `الزمن: ثلاثة أنواع`, kind: 'mcq', prompt: `باعتبار الزمن divides الحال into three types by its timing relative to العامل. Which set names them correctly؟`, options: [`محكية، مقارِنة، مقدَّرة`, `مؤسِّسة، مؤكِّدة، لازمة`, `مقصودة، موطِّئة، متنقلة`, `حقيقية، سببية، متداخلة`], correct: 0 },
        { title: `بلغني الكبر: محكية`, kind: 'mcq', prompt: `وَقَدْ بَلَغَنِيَ الْكِبَرُ, inside ﴿قَالَ رَبِّ أَنَّىٰ يَكُونُ لِي غُلَامٌ وَقَدْ بَلَغَنِيَ الْكِبَرُ﴾, describes something that had already happened before the moment of speaking. Which زمن category؟`, options: [`محكية`, `مقارِنة`, `مقدَّرة`, `مؤكِّدة`], correct: 0 },
        { title: `يبكون: مقارِنة`, kind: 'mcq', prompt: `The weeping in ﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾ happens at the exact same time as المجيء. Which زمن category؟`, options: [`مقارِنة`, `محكية`, `مقدَّرة`, `لازمة`], correct: 0 },
        { title: `خالدين: مقدَّرة`, kind: 'mcq', prompt: `الخلود in ﴿فَادْخُلُوهَا خَالِدِينَ﴾ occurs after الدخول, not alongside it. Which زمن category؟`, options: [`مقدَّرة`, `محكية`, `مقارِنة`, `مؤسِّسة`], correct: 0 },
        { title: `محكية vs مقدَّرة`, kind: 'mcq', prompt: `Both محكية and مقدَّرة place الحال outside the exact moment of العامل. What distinguishes them؟`, options: [`محكية is already past by حال القول; مقدَّرة still lies ahead of العامل`, `محكية is always مشتقة; مقدَّرة is always جامدة`, `They are two names for the identical category`, `مقدَّرة only applies to أفعال الأمر; محكية applies to every other فعل`], correct: 0 },
        { title: `جدول: الاستقلال في الإفادة`, kind: 'mcq', prompt: `باعتبار الاستقلال في الإفادة produces exactly which pair of subtypes؟`, options: [`مؤسِّسة (مبيِّنة) ومؤكِّدة`, `محكية ومقارِنة`, `مترادفة ومتداخلة`, `مقصودة وموطِّئة`], correct: 0 },
        { title: `جدول: باعتبار الزمن`, kind: 'mcq', prompt: `باعتبار الزمن produces exactly which three subtypes؟`, options: [`محكية، مقارِنة، مقدَّرة`, `متنقلة، لازمة، مؤسِّسة`, `مؤكِّدة، محكية، حقيقية`, `مترادفة، متداخلة، سببية`], correct: 0 },
        {
          title: `تركيب: وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of جَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ.`,
          source: `جَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ`,
          words: [`جَاءُوا`, `أَبَاهُمْ`, `عِشَاءً`, `يَبْكُونَ`],
          labels: [`فعل ماضٍ وفاعله`, `مفعول به وصاحب الحال`, `ظرف زمان`, `جملة فعلية حال (متنقلة، مقارِنة)`],
          distractors: [`جملة فعلية حال (لازمة، محكية)`, `جملة فعلية حال (متنقلة، مقدَّرة)`, `فاعل وصاحب الحال`, `حال مقصودة`, `حال مؤكِّدة`, `مضاف إليه`],
        },
        {
          title: `تركيب: وَخُلِقَ الْإِنسَانُ ضَعِيفًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of خُلِقَ الْإِنسَانُ ضَعِيفًا.`,
          source: `خُلِقَ الْإِنسَانُ ضَعِيفًا`,
          words: [`خُلِقَ`, `الْإِنسَانُ`, `ضَعِيفًا`],
          labels: [`فعل ماضٍ مبني للمجهول`, `نائب فاعل وصاحب الحال`, `حال (لازمة)`],
          distractors: [`حال متنقلة`, `فعل ماضٍ مبني للمعلوم`, `فعل مضارع مبني للمجهول`, `حال مقارِنة`, `حال مقدَّرة`, `حال مؤسِّسة`],
        },
        {
          title: `تركيب: وَلَا تَمْشِ فِي الْأَرْضِ مَرَحًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of لَا تَمْشِ فِي الْأَرْضِ مَرَحًا.`,
          source: `لَا تَمْشِ فِي الْأَرْضِ مَرَحًا`,
          words: [`لَا تَمْشِ`, `فِي الْأَرْضِ`, `مَرَحًا`],
          labels: [`فعل نهي مع فاعله المستتر (صاحب الحال)`, `جار ومجرور`, `حال (مؤسِّسة)`],
          distractors: [`فعل مضارع مع فاعله المستتر (صاحب الحال)`, `حال مؤكِّدة`, `حال متنقلة`, `حال مقارِنة`, `جار ومجرور متعلق بتمش`, `مفعول به`],
        },
        {
          title: `تركيب: وَلَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of لَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ.`,
          source: `لَا تَعْثَوْا فِي الْأَرْضِ مُفْسِدِينَ`,
          words: [`لَا تَعْثَوْا`, `فِي الْأَرْضِ`, `مُفْسِدِينَ`],
          labels: [`فعل نهي مع فاعله (صاحب الحال)`, `جار ومجرور`, `حال (مؤكِّدة)`],
          distractors: [`فعل مضارع مع فاعله (صاحب الحال)`, `حال مؤسِّسة`, `حال مقدَّرة`, `حال محكية`, `جار ومجرور متعلق بتعثوا`, `مفعول به`],
        },
        {
          title: `تركيب: فَادْخُلُوهَا خَالِدِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ادْخُلُوهَا خَالِدِينَ.`,
          source: `ادْخُلُوهَا خَالِدِينَ`,
          words: [`ادْخُلُوهَا`, `خَالِدِينَ`],
          labels: [`فعل أمر وفاعله ومفعوله (صاحب الحال)`, `حال (مقدَّرة)`],
          distractors: [`فعل مضارع وفاعله ومفعوله (صاحب الحال)`, `حال محكية`, `حال مقارِنة`, `حال متنقلة`, `حال مؤكِّدة`, `مفعول به ثانٍ`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'القصد والتعدد',
      subtitle: 'The Remaining Axes — مقصودة/موطِّئة, تعدد الحال, and حقيقية/سببية',
      concepts: [
        {
          heading: 'باعتبار القصد: مقصودة وموطِّئة',
          lines: [
            { html: `Viewed by whether الحال itself is the point being made, it divides into two.`, list: false },
            { box: { title: 'Example', lines: [`وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ`] } },
            { html: `<bdi>مقصودة</bdi> ("intended", the default): البكاء — يَبْكُونَ — itself is exactly what is meant to be conveyed.`, list: false },
            { box: { title: 'Example', lines: [`إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا`] } },
            { html: `<bdi>موطِّئة</bdi> ("paving/preparatory") — this is the same جامدة موصوفة بمشتق already described under اشتقاق الحال in the previous lesson. قُرْآنًا itself is not really the point; it merely paves the way for the genuine description that follows it, عَرَبِيًّا.`, list: false },
          ],
          exercise: {
            prompt: `الحال الموطِّئة was already introduced in the previous lesson's اشتقاق الحال discussion, as a جامدة موصوفة بمشتق. Under this separate باعتبار القصد classification, what is its counterpart — the default type, where الحال itself is genuinely the point being made؟`,
            kind: 'mcq',
            options: [`مقصودة`, `محكية`, `حقيقية`, `متداخلة`],
            correct: 0,
          },
        },
        {
          heading: 'تعدد الحال: مترادفة ومتداخلة',
          lines: [
            { html: `When more than one حال is attached to a single صاحب, the second حال is either مُتَرادِفة or مُتَداخِلة.`, list: false },
            { box: { title: 'Example', lines: [`يُحشَر الناسُ يومَ القيامة حُفاةً عُراةً غُرْلًا`] } },
            { html: `"Mankind will be gathered on the Day of Resurrection barefoot, naked, uncircumcised" — three أحوال in a row, all for the same single صاحب, الناس. This is <bdi>مُتَرادِفة</bdi> ("stacked"): صاحبها stays the same single صاحب, and both/all أحوال describe it directly, one after another.`, list: false },
            { box: { title: 'Example', lines: [`أُولَٰئِكَ عَلَيْهِمْ لَعْنَةُ اللَّهِ وَالْمَلَائِكَةِ وَالنَّاسِ أَجْمَعِينَ ۝ خَالِدِينَ فِيهَا لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ`] } },
            { html: `"...upon them is the curse of Allah, the angels, and all the people; abiding therein, the punishment will not be lightened for them." <bdi>خَالِدِينَ</bdi> is a حال; <bdi>لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ</bdi> is a second حال — but it actually attaches to the hidden ضمير مستتر inside خَالِدِينَ itself, not to the original صاحب. This is <bdi>مُتَداخِلة</bdi> ("nested"): أَيْ خالدين وهم لا يُخفَّف عنهم.`, list: false },
          ],
          exercise: {
            prompt: `In «يُحشَر الناسُ يومَ القيامة حُفاةً عُراةً غُرْلًا», three separate أحوال — حفاة، عراة، غرلًا — all describe the exact same single صاحب, الناس, one after another. Which kind of multiple حال is that؟`,
            kind: 'mcq',
            options: [`مُتَرادِفة`, `مُتَداخِلة`, `محكية`, `حقيقية`],
            correct: 0,
          },
        },
        {
          heading: 'باعتبار المتعلَّق: حقيقية وسببية',
          lines: [
            { html: `الحال is either حقيقية or سَبَبِيّة.`, list: false },
            { box: { title: 'Rule', lines: [`الحَقِيقِيَّةُ تَصِفُ صَاحِبَهَا مُبَاشَرَةً، وَالسَّبَبِيَّةُ تَصِفُ مَا هُوَ مُتَعَلِّقٌ بِصَاحِبِهَا`] } },
            { html: `<bdi>حقيقية</bdi> ("real/direct") describes the state of its own صاحب directly. <bdi>سَبَبِيّة</bdi> ("causal") describes the state of something merely متعلق بصاحبها (attached to its صاحب) rather than صاحب الحال itself.`, list: false },
            { box: { title: 'Example', lines: [`فَتَوَلَّ عَنْهُمْ يَوْمَ يَدْعُ الدَّاعِ إِلَىٰ شَيْءٍ نُكُرٍ ۝ خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ`] } },
            { html: `"So turn away from them. The Day the Caller calls to a terrible thing, their eyes humbled, they will emerge from the graves." <bdi>خُشَّعًا</bdi> is a حال — but it does not directly describe the state of its own صاحب (الناس, the people emerging from the graves); rather it describes the state of <bdi>أَبْصَارُهُمْ</bdi> ("their eyes") — something merely مضاف إليهم, attached to them, not صاحب الحال itself. So خُشَّعًا is سببية.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ﴾, خُشَّعًا does not directly describe the state of its own صاحب; it describes the state of أَبْصَارُهُمْ, something merely attached to صاحب الحال. Which type باعتبار المتعلَّق is خُشَّعًا؟`,
            kind: 'mcq',
            options: [`سَبَبِيّة`, `حقيقية`, `مقصودة`, `متنقلة`],
            correct: 0,
          },
        },
        {
          heading: 'خلاصة: محاور تصنيف الحال كلها معًا',
          lines: [
            { html: `الحال is classified along six independent محاور at once — none of them excludes another, and a single حال is described by all six simultaneously.`, list: false },
            { table: { title: 'خلاصة أقسام الحال', headers: ['التقسيم', 'الأنواع'], rows: [
              [`باعتبار الثبات`, `متنقِّلة (الأصل) / لازِمة (ثابتة، دائمة)`],
              [`باعتبار الاستقلال`, `مؤسِّسة (مبيِّنة، معنى جديد) / مؤكِّدة (تكرر معنى العامل)`],
              [`باعتبار الزمن`, `محكية (ماضية) / مقارِنة (حاضرة) / مقدَّرة (مستقبلة)`],
              [`باعتبار القصد`, `مقصودة / موطِّئة (جامدة موصوفة بمشتق)`],
              [`عند التعدد`, `مترادفة (صاحب واحد) / متداخلة (الثانية حال من ضمير في الأولى)`],
              [`باعتبار المتعلَّق`, `حقيقية (تصف صاحبها) / سببية (تصف شيئًا متعلقًا بصاحبها)`],
              [`باعتبار الاشتقاق`, `مشتقة (الأصل) / جامدة مؤوَّلة (تشبيه، مفاعلة، ترتيب) / جامدة غير مؤوَّلة (موصوفة، عدد، أصل، فرع)`],
            ] } },
            { html: `A single worked example can sit in a different row of every one of these seven lines at once — يَبْكُونَ, for instance, is متنقِّلة, مقارِنة, and مقصودة all together, three separate facts about the exact same حال.`, list: false },
          ],
          exercise: {
            prompt: `الحال can be classified along seven independent lines — اشتقاق، ثبات، استقلال، زمن، قصد، تعدد (when more than one applies), ومتعلَّق. Which pair below both belong to the same محور, باعتبار الاستقلال في الإفادة؟`,
            kind: 'mcq',
            options: [`مؤسِّسة ومؤكِّدة`, `محكية ومقارِنة`, `مترادفة ومتداخلة`, `حقيقية وسببية`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `﴿إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا﴾ — قُرْآنًا itself is not really the point; it only paves the way for عَرَبِيًّا. Which باعتبار القصد category is قُرْآنًا؟`, options: [`موطِّئة`, `مقصودة`, `محكية`, `سببية`], correct: 0 },
        { q: `البكاء (يَبْكُونَ) in ﴿وَجَاءُوا أَبَاهُمْ عِشَاءً يَبْكُونَ﴾ is exactly what the ayah means to convey. Which باعتبار القصد category؟`, options: [`مقصودة`, `موطِّئة`, `لازمة`, `متداخلة`], correct: 0 },
        { q: `«يُحشَر الناسُ يومَ القيامة حُفاةً عُراةً غُرْلًا» stacks three أحوال for one single صاحب, الناس. Which تعدد category؟`, options: [`مُتَرادِفة`, `مُتَداخِلة`, `محكية`, `حقيقية`], correct: 0 },
        { q: `In ﴿خَالِدِينَ فِيهَا لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ﴾, the second حال attaches to the hidden ضمير inside خَالِدِينَ itself, not to the original صاحب. Which تعدد category؟`, options: [`مُتَداخِلة`, `مُتَرادِفة`, `مؤسِّسة`, `سببية`], correct: 0 },
        { q: `In ﴿خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ﴾, خُشَّعًا describes the state of أَبْصَارُهُمْ, something merely attached to صاحب الحال, not صاحب الحال itself. Which باعتبار المتعلَّق category؟`, options: [`سَبَبِيّة`, `حقيقية`, `مقصودة`, `متنقلة`], correct: 0 },
        { q: `الحال is classified along several independent محاور at once. Which pair of terms both belong to the same محور, باعتبار المتعلَّق؟`, options: [`حقيقية وسببية`, `مؤسِّسة ومؤكِّدة`, `محكية ومقارِنة`, `مترادفة ومتداخلة`], correct: 0 },
      ],
      bank: [
        { title: `القصد: التعريف`, kind: 'mcq', prompt: `باعتبار القصد asks whether الحال itself is the point being made. What are its two subtypes؟`, options: [`مقصودة وموطِّئة`, `مترادفة ومتداخلة`, `حقيقية وسببية`, `متنقلة ولازمة`], correct: 0 },
        { title: `موطِّئة: نفس الجامدة الموصوفة`, kind: 'mcq', prompt: `الحال الموطِّئة under باعتبار القصد is described as identical to which category already met under اشتقاق الحال؟`, options: [`الجامدة الموصوفة بمشتق`, `الجامدة المؤولة بتشبيه`, `الجامدة المؤولة بمفاعلة`, `المشتقة (الأصل في الحال المفردة)`], correct: 0 },
        { title: `مقصودة: الأصل`, kind: 'mcq', prompt: `Of مقصودة and موطِّئة, which is described as الأصل — the default؟`, options: [`مقصودة`, `موطِّئة`, `كلاهما بالتساوي`, `لا أصل بينهما`], correct: 0 },
        { title: `التعدد: التعريف`, kind: 'mcq', prompt: `تعدد الحال arises under which specific condition؟`, options: [`When more than one حال attaches to a single صاحب`, `When ذو الحال is مركب, made of more than one attached noun`, `Whenever الحال is جامدة rather than مشتقة`, `Whenever الحال is مؤكِّدة rather than مؤسِّسة`], correct: 0 },
        { title: `مترادفة: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines مُتَرادِفة؟`, options: [`صاحبها يبقى واحدًا، وكل الأحوال تصفه مباشرة، الواحد تلو الآخر`, `الحال الثانية حال من ضمير داخل الأولى`, `الحال تصف شيئًا متعلقًا بصاحبها لا صاحبها نفسه`, `الحال تحمل معنى جديدًا مستقلًّا عن العامل`], correct: 0 },
        { title: `متداخلة: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines مُتَداخِلة؟`, options: [`الحال الثانية هي في الحقيقة حال من ضمير مستتر داخل الحال الأولى`, `صاحبها يبقى واحدًا، وكل الأحوال تصفه مباشرة`, `الحال جامدة غير مؤوَّلة بالمشتق، وليست حالًا ثانية أصلًا`, `الحال تصف صاحبها مباشرة، لا حال أخرى داخلها`], correct: 0 },
        { title: `حفاة عراة غرلا: مترادفة`, kind: 'mcq', prompt: `حُفَاةً عُرَاةً غُرْلًا all describe the exact same صاحب, الناس, one after another. Which تعدد category؟`, options: [`مُتَرادِفة`, `مُتَداخِلة`, `سببية`, `موطِّئة`], correct: 0 },
        { title: `خالدين ولا يخفف: متداخلة`, kind: 'mcq', prompt: `لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ, the second حال after خَالِدِينَ, attaches to a hidden ضمير inside خَالِدِينَ rather than to the original صاحب. Which تعدد category؟`, options: [`مُتَداخِلة`, `مُتَرادِفة`, `حقيقية`, `مقصودة`], correct: 0 },
        { title: `المتعلَّق: التعريف`, kind: 'mcq', prompt: `باعتبار المتعلَّق produces which pair of subtypes؟`, options: [`حقيقية وسببية`, `مقصودة وموطِّئة`, `مترادفة ومتداخلة`, `مؤسِّسة ومؤكِّدة`], correct: 0 },
        { title: `حقيقية: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الحال الحقيقية؟`, options: [`تصف حال صاحبها مباشرة`, `تصف حال شيء متعلق بصاحبها، لا صاحبها نفسه`, `تصف حال ضمير داخل حال أخرى`, `تصف حال صاحب واحد تكرارًا`], correct: 0 },
        { title: `سببية: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الحال السببية؟`, options: [`تصف حال شيء متعلق بصاحبها، لا صاحبها نفسه مباشرة`, `تصف صاحبها مباشرة، لا شيئًا متعلقًا به`, `تحمل تنوين العوض بدلًا من التنوين العادي`, `تكون مشتقة دائمًا، لا جامدة أبدًا`], correct: 0 },
        { title: `خشعا: سببية، لا حقيقية`, kind: 'mcq', prompt: `خُشَّعًا in ﴿خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ﴾ describes أَبْصَارُهُمْ, not الناس (صاحب الحال) directly. Why is it not حقيقية؟`, options: [`Because حقيقية requires describing صاحبها directly, and خشعا instead describes something merely attached to صاحبها`, `Because خشعا is جامدة, and جامدة nouns can never function as حال حقيقية`, `Because خشعا is مقدَّرة, and مقدَّرة أحوال are always سببية by definition`, `Because خشعا has no صاحب at all, so the حقيقية/سببية distinction cannot apply`], correct: 0 },
        { title: `جدول: القصد`, kind: 'mcq', prompt: `باعتبار القصد produces exactly which pair of subtypes؟`, options: [`مقصودة وموطِّئة`, `محكية ومقارِنة`, `مترادفة ومتداخلة`, `حقيقية وسببية`], correct: 0 },
        { title: `جدول: عند التعدد`, kind: 'mcq', prompt: `عند التعدد produces exactly which pair of subtypes؟`, options: [`مترادفة ومتداخلة`, `مقصودة وموطِّئة`, `مؤسِّسة ومؤكِّدة`, `حقيقية وسببية`], correct: 0 },
        { title: `سبعة محاور مستقلة`, kind: 'mcq', prompt: `Across both lessons on أقسام الحال, how many independent classification محاور does the source lay out for a single حال altogether (including الاشتقاق)؟`, options: [`سبعة`, `اثنان فقط`, `أربعة`, `عشرة`], correct: 0 },
        {
          title: `تركيب: إِنَّا أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا (باعتبار القصد)`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا, focusing on which word carries the intended description.`,
          source: `أَنزَلْنَاهُ قُرْآنًا عَرَبِيًّا`,
          words: [`أَنزَلْنَاهُ`, `قُرْآنًا`, `عَرَبِيًّا`],
          labels: [`فعل وفاعله ومفعوله (الهاء)`, `حال موطِّئة، لا تحمل القصد بذاتها`, `نعت لـ"قرآنًا" يحمل القصد الحقيقي`],
          distractors: [`حال جامدة غير مؤوَّلة، موصوفة (الحال الموطِّئة)`, `نعت لـ"قرآنًا" يحمل الوصف الحقيقي`, `حال مقصودة بذاتها`, `حال حقيقية`, `فعل وفاعله ومفعوله (الكاف)`, `صاحب الحال`],
        },
        {
          title: `تركيب: يُحشَر الناسُ يومَ القيامة حُفاةً عُراةً غُرْلًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of يُحشَر الناسُ يومَ القيامة حُفاةً عُراةً غُرْلًا.`,
          source: `يُحشَر الناسُ يومَ القيامة حُفاةً عُراةً غُرْلًا`,
          words: [`يُحشَرُ`, `النَّاسُ`, `يَوْمَ القِيَامَةِ`, `حُفَاةً`, `عُرَاةً`, `غُرْلًا`],
          labels: [`فعل مضارع مبني للمجهول`, `نائب فاعل وصاحب الحال`, `ظرف زمان`, `حال أولى (مترادفة)`, `حال ثانية (مترادفة)`, `حال ثالثة (مترادفة)`],
          distractors: [`حال متداخلة`, `فعل ماضٍ مبني للمجهول`, `فعل مضارع مبني للمعلوم`, `فاعل وصاحب الحال`, `مضاف إليه`, `حال حقيقية`],
        },
        {
          title: `تركيب: خَالِدِينَ فِيهَا لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each حال in خَالِدِينَ فِيهَا لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ.`,
          source: `خَالِدِينَ فِيهَا لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ`,
          words: [`خَالِدِينَ`, `لَا يُخَفَّفُ عَنْهُمُ الْعَذَابُ`],
          labels: [`حال أولى من الضمير (هم)`, `حال ثانية، من الضمير المستتر في خالدين (متداخلة)`],
          distractors: [`حال ثانية، من الضمير المستتر في خالدين (مترادفة)`, `حال مترادفة`, `حال مقدَّرة`, `حال سببية`, `نعت`, `حال أولى من الضمير (هي)`],
        },
        {
          title: `تركيب: خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ.`,
          source: `خُشَّعًا أَبْصَارُهُمْ يَخْرُجُونَ مِنَ الْأَجْدَاثِ`,
          words: [`خُشَّعًا`, `أَبْصَارُهُمْ`, `يَخْرُجُونَ`, `مِنَ الْأَجْدَاثِ`],
          labels: [`حال سببية`, `فاعل لـ"خشعا"، ومتعلَّق بصاحب الحال`, `فعل وفاعله (صاحب الحال الحقيقي)`, `جار ومجرور`],
          distractors: [`حال حقيقية`, `فاعل لـ"يخرجون"، ومتعلَّق بصاحب الحال`, `فعل وفاعله (صاحب الحال)`, `مفعول به`, `حال متداخلة`, `مضاف إليه`],
        },
      ],
    },
  ],
};

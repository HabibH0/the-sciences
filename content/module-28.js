// Module 28 — التمييز
//
// Source: app-lessons/134-al-tamyiz.md (الكبرى في النحو) in full. Per
// COURSE-MAP.md's Module 28 proposal: a single source file, but rich enough
// to split into two lessons rather than staying one lesson — l1 covers
// تمييز المفرد (العدد الصريح والمبهم, then المقدار وما يشبهه وما اُجري
// مجراه وما هو فرع للتمييز); l2 covers تمييز النسبة (غير محوّل ومحوّل),
// the two general مسألتان, and every إعراب rule the source gives for
// تمييز العدد الصريح, تمييز العدد المبهم, and تمييز كم الخبرية, closing
// with التمييز للتأكيد. The survey held up once the source was read in
// full; both lessons landed at the top of their estimated range (l1 at 5
// concepts, l2 at 6) since 134 is genuinely dense once every Rule/Careful
// box and worked example is accounted for — COURSE-MAP.md itself flags it
// as unusually rich for a single file.
//
// **NOT YET registered** in `content/annahw.js`'s `MODULES` array: modules
// 20-27 (COURSE-MAP.md's العامل من الأسماء المشتقة / بقية الأسماء
// العاملة والإضافة / حذف العامل / النداء / الفاعل ونائب الفاعل والمبتدأ /
// الخبر والمفعول المطلق / بقية المفعولات / الحال chapters) do not yet
// exist on disk, so registering this module now would occupy the wrong
// array position -- left for the merge pass that fills the 20-27 gap, the
// same choice every other out-of-order-authored module in this course
// made (see COURSE-MAP.md's authoring-order note).
//
// Concept bodies use the lines[]/box/table shape established in
// module-01.js. Bank تركيب items use the flat words[]/labels[]/
// distractors[] schema, matching every prior authored module. 134 is
// unusually rich in short, cleanly parsed worked examples across both
// تمييز المفرد and تمييز النسبة, so both lessons carry the full 6 تركيب
// items rather than tapering for a thin source — every تركيب example
// below is quoted verbatim from 134's own Example/Rule boxes.
export default {
  id: '28',
  title: 'التمييز',
  heading: 'المعمول وغير المعمول',
  subheading: 'الاسم والفعل',
  blurb: 'التمييز — the seventh of the منصوبات, lifting ambiguity from either a single مفرد word (a number or a measure) or a vague نسبة between two sides of a sentence, and the several places where, despite its name, it actually comes مجرور instead.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'تمييز المفرد',
      subtitle: 'Specifying a Single Word — عدد صريح and مبهم, المقدار, and what resembles or extends it',
      concepts: [
        {
          heading: 'التمييز: تعريفه وقسماه',
          lines: [
            { html: `<bdi>التمييز</bdi> is the seventh of the منصوبات, coming right after الحال in the sequence. Its job is to remove ambiguity — <bdi>إبهام</bdi> — that would otherwise linger in a sentence.`, list: false },
            { box: { title: 'Definition', lines: [`التَّمْييزُ: هُوَ ما يَرْفَعُ الإِبْهامَ عَنْ مُفْرَدٍ مُبْهَمٍ أَوْ نِسْبَةٍ مُبْهَمَةٍ`] } },
            { html: `In other words, a تمييز is an <bdi>اسم نكرة</bdi> named specifically to clarify what an earlier word or clause meant — meaning that would otherwise stay genuinely unclear without it.`, list: false },
            { html: `التمييز splits into two main kinds: (1) <bdi>تمييز المفرد</bdi>, which clarifies a single word — typically a number or a measure; (2) <bdi>تمييز النسبة</bdi> (also called <bdi>تمييز الجملة</bdi>), which clarifies a vague relation between the two sides of a sentence. This lesson covers تمييز المفرد; the next covers تمييز النسبة and how each kind of تمييز is إعراب'd.`, list: false },
          ],
          exercise: {
            prompt: `التمييز is defined as ما يرفع الإبهام عن مفرد مبهم أو نسبة مبهمة. What does that definition mean in practice؟`,
            kind: 'mcq',
            options: [`An اسم نكرة named to clarify a vague word or a vague relation between two parts of a sentence`, `A حرف that changes a verb's tense, the same way حروف النصب والجزم change a verb's إعراب`, `An اسم that always follows a عدد without exception, whether that عدد is صريح or مبهم`, `A فعل that never takes a فاعل, the way a فعل مبني للمجهول loses its own فاعل`],
            correct: 0,
          },
        },
        {
          heading: 'تمييز العدد: الصريح والمبهم',
          lines: [
            { html: `The most familiar تمييز المفرد clarifies a <bdi>عدد</bdi> — a number. Numbers split into two kinds for this purpose.`, list: false },
            { table: { title: 'العدد الصريح والعدد المبهم', headers: ['Type', 'Example', 'Translation'], rows: [
              [`العدد الصريح — an explicit, specific number`, `رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا`, `I saw eleven stars`],
              [`العدد المبهم — a vague number, marked by كَمْ`, `كَمْ آتَيْنَاهُم مِّنْ آيَةٍ بَيِّنَةٍ`, `How many a clear sign We gave them`],
            ] } },
            { html: `In رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا, <bdi>كَوْكَبًا</bdi> is the تمييز: without it, أَحَدَ عَشَرَ alone wouldn't tell you eleven of what. The same logic holds for كَمْ آتَيْنَاهُم مِّنْ آيَةٍ بَيِّنَةٍ, except the number itself, كَمْ, stays vague rather than explicit — a distinction whose effect on إعراب is covered later in this module.`, list: false },
          ],
          exercise: {
            prompt: `In رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا, what job does كَوْكَبًا do؟`,
            kind: 'mcq',
            options: [`It is the تمييز that clarifies what أَحَدَ عَشَرَ is eleven of`, `It is the فاعل of رَأَيْتُ, agreeing with it in الرفع`, `It is a حال describing رَأَيْتُ, specifying the manner in which the action happened`, `It is تمييز نسبة, not تمييز مفرد`],
            correct: 0,
          },
        },
        {
          heading: 'المقدار: الكيل والوزن والمساحة',
          lines: [
            { html: `Beyond numbers, تمييز المفرد also clarifies a <bdi>مِقدار</bdi> — something quantified by a specific instrument (آلة). المقدار comes in three types.`, list: false },
            { table: { title: 'أنواع المقدار', headers: ['Type', 'Meaning', 'Example', 'Translation'], rows: [
              [`الكَيْل`, `volume/capacity`, `عِنْدِي لِتْرٌ لَبَنًا`, `I have a liter of milk`],
              [`الوَزْن`, `weight`, `مِثْقَالَ ذَرَّةٍ خَيْرًا`, `an atom's weight of good`],
              [`المِساحة`, `area`, `عِنْدِي جَرِيبٌ نَخْلًا`, `I have a جَريب of palm trees`],
            ] } },
            { html: `In each example the first word names the measuring instrument (لِتْر, مِثْقَال, جَريب) and the second — the تمييز — says what is being measured, removing the ambiguity a bare quantity would otherwise leave.`, list: false },
          ],
          exercise: {
            prompt: `عِنْدِي لِتْرٌ لَبَنًا measures volume with لِتْرٌ. Which category of المقدار does that make it؟`,
            kind: 'mcq',
            options: [`الكَيْل`, `الوَزْن`, `المِساحة`, `العدد الصريح`],
            correct: 0,
          },
        },
        {
          heading: 'ما يشبه المقدار',
          lines: [
            { html: `Not every تمييز مقدار is measured by a real instrument. <bdi>ما يُشْبِهُ المِقْدارَ</bdi> covers quantities estimated by rough sensory approximation instead — a hand's span, a palm's width.`, list: false },
            { box: { title: 'Example', lines: [`مَا فِي السَّمَاءِ قَدْرُ رَاحَةٍ سَحَابًا`] } },
            { html: `"There isn't in the sky a palm's-width of cloud." <bdi>رَاحَة</bdi> (a palm's span) is not a real unit the way لِتْر or مِثْقَال is, but it works exactly like one: it names the rough quantity, and سَحَابًا, the تمييز, says what that quantity is of.`, list: false },
          ],
          exercise: {
            prompt: `رَاحَة in مَا فِي السَّمَاءِ قَدْرُ رَاحَةٍ سَحَابًا measures by rough approximation rather than a real instrument. What is that category called؟`,
            kind: 'mcq',
            options: [`ما يُشْبِهُ المِقْدارَ`, `الكَيْل`, `الوَزْن`, `العدد المبهم`],
            correct: 0,
          },
        },
        {
          heading: 'ما اُجري مجرى المقادير، وما هو فرع للتمييز',
          lines: [
            { html: `Two further categories extend تمييز المفرد past anything genuinely measured.`, list: false },
            { box: { title: 'Rule', lines: [`ما اُجْرِيَ مَجْرى المَقاديرِ: كُلُّ مَا احْتَاجَ إِلَى تَمْييزٍ يُوَضِّحُهُ، وَإِنْ لَمْ يَكُنْ مِقْدَارًا حَقيقيًّا`] } },
            { html: `<bdi>ما اُجري مجرى المقادير</bdi> covers anything that simply needs a تمييز to clarify it, without being a true measure at all, as in وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا — "even if We brought the like of it in reinforcement."`, list: false },
            { html: `<bdi>ما هو فرع للتمييز</bdi> appears in phrases like عِنْدِي خَاتَمٌ فِضَّةً — "I have a ring [of] silver" — though Arabic usually prefers <bdi>الإضافة</bdi> for this meaning instead, saying خَاتَمُ فِضَّةٍ rather than reaching for a تمييز.`, list: false },
            { box: { title: 'Careful', lines: [`عِنْدِي خَاتَمٌ فِضَّةً وخَاتَمُ فِضَّةٍ مَعْنًى وَاحِدٌ، وَالإِضَافَةُ هِيَ الأَكْثَرُ اسْتِعْمالًا`] } },
            { html: `The line between ما اُجري مجرى المقادير and ما هو فرع للتمييز is not perfectly sharp — grammar books disagree on how to classify some examples between the two. What both share is that the preceding noun genuinely needs a تمييز to clarify what it means.`, list: false },
          ],
          exercise: {
            prompt: `عِنْدِي خَاتَمٌ فِضَّةً and خَاتَمُ فِضَّةٍ (with الإضافة) express the same meaning. Which one is the more usual way Arabic expresses it؟`,
            kind: 'mcq',
            options: [`الإضافة — خَاتَمُ فِضَّةٍ — is the more usual construction`, `عِنْدِي خَاتَمٌ فِضَّةً is always preferred over الإضافة`, `Both are equally rare in Arabic`, `Neither construction is grammatical; a تمييز مفرد can never stand in for الإضافة`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `التمييز removes ambiguity either from a single vague word or from a vague relation between two parts of a sentence. What are those two kinds called؟`, options: [`تمييز المفرد وتمييز النسبة`, `اسم عين واسم معنى`, `الاسم الصريح والاسم المؤول`, `المقدار وما يشبه المقدار`], correct: 0 },
        { q: `In رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا, أَحَدَ عَشَرَ is a specific, explicit number. What kind of عدد is that؟`, options: [`العدد الصريح`, `العدد المبهم`, `المقدار`, `ما يشبه المقدار`], correct: 0 },
        { q: `كَمْ آتَيْنَاهُم مِّنْ آيَةٍ بَيِّنَةٍ uses كَمْ rather than stating a specific count. Which kind of عدد does كَمْ represent here؟`, options: [`العدد المبهم`, `العدد الصريح`, `الكَيْل`, `الوَزْن`], correct: 0 },
        { q: `مِثْقَالَ ذَرَّةٍ خَيْرًا measures by weight. Which of المقدار's three types is مِثْقَال؟`, options: [`الوَزْن`, `الكَيْل`, `المِساحة`, `ما يشبه المقدار`], correct: 0 },
        { q: `مَا فِي السَّمَاءِ قَدْرُ رَاحَةٍ سَحَابًا measures by a hand's span rather than a real instrument. What is that category called؟`, options: [`ما يُشْبِهُ المِقْدارَ`, `الكَيْل`, `الوَزْن`, `العدد الصريح`], correct: 0 },
        { q: `عِنْدِي خَاتَمٌ فِضَّةً could instead be phrased with الإضافة as عِنْدِي خَاتَمُ فِضَّةٍ. Which category of تمييز المفرد does the فِضَّةً phrasing illustrate؟`, options: [`ما هو فرع للتمييز`, `الكَيْل`, `الوَزْن`, `العدد المبهم`], correct: 0 },
      ],
      bank: [
        { title: `تعريف التمييز`, kind: 'mcq', prompt: `Which of the following correctly defines التمييز؟`, options: [`ما يرفع الإبهام عن مفرد مبهم أو نسبة مبهمة`, `ما دلّ على معنى في نفسه غير مقترن بزمان`, `لفظ دالّ على معنى`, `ما لا تدل أجزاؤه على معنى`], correct: 0 },
        { title: `قسما التمييز`, kind: 'mcq', prompt: `التمييز splits into two main kinds. What are they؟`, options: [`تمييز المفرد وتمييز النسبة (تمييز الجملة)`, `الاسم الصريح والاسم المؤول`, `اسم عين واسم معنى`, `الصريح والمؤول`], correct: 0 },
        { title: `أحد عشر كوكبا: تعيين العدد`, kind: 'mcq', prompt: `In رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا, what would the sentence lack without كَوْكَبًا؟`, options: [`What أَحَدَ عَشَرَ is eleven of`, `A فاعل for رَأَيْتُ`, `A حرف جر before العدد`, `A مضاف إليه for رَأَيْتُ`], correct: 0 },
        { title: `العدد الصريح`, kind: 'mcq', prompt: `أَحَدَ عَشَرَ كَوْكَبًا uses an explicit, specific number. Which term names that kind of عدد؟`, options: [`العدد الصريح`, `العدد المبهم`, `المقدار`, `ما يشبه المقدار`], correct: 0 },
        { title: `العدد المبهم`, kind: 'mcq', prompt: `كَمْ آتَيْنَاهُم مِّنْ آيَةٍ بَيِّنَةٍ uses the interrogative كَمْ rather than a specific number. Which term names that kind of عدد؟`, options: [`العدد المبهم`, `العدد الصريح`, `المقدار`, `ما هو فرع للتمييز`], correct: 0 },
        { title: `المقدار: تعريفه`, kind: 'mcq', prompt: `المقدار is defined as whatever is quantified by a specific آلة. Which of these is NOT one of its three named types؟`, options: [`العدد الصريح`, `الكَيْل`, `الوَزْن`, `المِساحة`], correct: 0 },
        { title: `الكيل`, kind: 'mcq', prompt: `عِنْدِي لِتْرٌ لَبَنًا measures by لِتْرٌ, a unit of volume. Which category of المقدار is that؟`, options: [`الكَيْل`, `الوَزْن`, `المِساحة`, `ما يشبه المقدار`], correct: 0 },
        { title: `الوزن`, kind: 'mcq', prompt: `مِثْقَالَ ذَرَّةٍ خَيْرًا measures by مِثْقَال, a unit of weight. Which category of المقدار is that؟`, options: [`الوَزْن`, `الكَيْل`, `المِساحة`, `العدد المبهم`], correct: 0 },
        { title: `المساحة`, kind: 'mcq', prompt: `عِنْدِي جَرِيبٌ نَخْلًا measures land by جَريب, a traditional unit of area. Which category of المقدار is that؟`, options: [`المِساحة`, `الكَيْل`, `الوَزْن`, `ما يشبه المقدار`], correct: 0 },
        { title: `ما يشبه المقدار`, kind: 'mcq', prompt: `مَا فِي السَّمَاءِ قَدْرُ رَاحَةٍ سَحَابًا measures by رَاحَة, a hand's span — not a real instrument. Which category does that fall under؟`, options: [`ما يُشْبِهُ المِقْدارَ`, `الكَيْل`, `الوَزْن`, `العدد الصريح`], correct: 0 },
        { title: `ما اُجري مجرى المقادير`, kind: 'mcq', prompt: `وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا needs a تمييز to clarify مَدَدًا without measuring by any real or approximate instrument. Which category is that؟`, options: [`ما اُجْرِيَ مَجْرى المَقاديرِ`, `الكَيْل`, `ما يُشْبِهُ المِقْدارَ`, `العدد المبهم`], correct: 0 },
        { title: `ما هو فرع للتمييز`, kind: 'mcq', prompt: `عِنْدِي خَاتَمٌ فِضَّةً could just as easily be phrased عِنْدِي خَاتَمُ فِضَّةٍ using الإضافة. Which category of تمييز المفرد does the فِضَّةً version illustrate؟`, options: [`ما هو فرع للتمييز`, `الكَيْل`, `الوَزْن`, `العدد الصريح`], correct: 0 },
        { title: `الإضافة كبديل عن فرع التمييز`, kind: 'mcq', prompt: `خَاتَمٌ فِضَّةً and خَاتَمُ فِضَّةٍ share the same meaning. Which construction does Arabic use more often for it؟`, options: [`الإضافة — خَاتَمُ فِضَّةٍ`, `تمييز مفرد with فِضَّةً, always`, `Neither — the two constructions are equally rare`, `Neither construction is grammatical`], correct: 0 },
        { title: `الفرق بين ما اُجري مجرى المقادير وما هو فرع للتمييز`, kind: 'mcq', prompt: `Grammar books don't draw a perfectly sharp line between ما اُجري مجرى المقادير and ما هو فرع للتمييز. What do both categories share regardless؟`, options: [`The preceding noun genuinely needs a تمييز to clarify what it means`, `Both always take الإضافة instead of a تمييز`, `Neither one can appear in the Qur'an`, `Both are types of تمييز النسبة, not تمييز المفرد`], correct: 0 },
        { title: `مثقال ذرة خيرا: المضاف والمضاف إليه`, kind: 'mcq', prompt: `In مِثْقَالَ ذَرَّةٍ خَيْرًا, ذَرَّةٍ is مجرور. What role does it play relative to مِثْقَالَ؟`, options: [`مضاف إليه`, `تمييز`, `خبر`, `فاعل`], correct: 0 },
        { title: `وزن الآلة الحقيقية مقابل التقدير الحسي`, kind: 'mcq', prompt: `المقدار measured by a real instrument (like لِتْر or مِثْقَال) and ما يُشْبِهُ المِقْدارَ measured by rough approximation (like رَاحَة) both still function the same way in a sentence. What do they share؟`, options: [`Each is followed by a تمييز that says what the quantity is of`, `Each must be مجرور بالإضافة, never appearing without a following مضاف إليه`, `Each is a type of تمييز النسبة, clarifying a relation rather than a single word`, `Each requires the number to be مبهم, never appearing with a صريح count`], correct: 0 },
        { title: `تحديد نوع التمييز: نخلا`, kind: 'mcq', prompt: `In عِنْدِي جَرِيبٌ نَخْلًا, what is نَخْلًا؟`, options: [`تمييز مفرد منصوب, clarifying جَرِيبٌ (المساحة)`, `تمييز نسبة, clarifying the sentence as a whole`, `مضاف إليه مجرور, completing an إضافة with جَرِيبٌ`, `خبر مقدم, with جَرِيبٌ as its مبتدأ مؤخر`], correct: 0 },
        { title: `تحديد نوع التمييز: لبنا`, kind: 'mcq', prompt: `In عِنْدِي لِتْرٌ لَبَنًا, what is لَبَنًا؟`, options: [`تمييز مفرد منصوب, clarifying لِتْرٌ (الكَيْل)`, `تمييز نسبة, clarifying the sentence as a whole`, `مضاف إليه مجرور, completing an إضافة with لِتْرٌ`, `فاعل, as if عِنْدِي itself behaved like a hidden verb`], correct: 0 },
        {
          title: `تركيب: رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا.`,
          source: `رَأَيْتُ أَحَدَ عَشَرَ كَوْكَبًا`,
          words: [`رَأَيْتُ`, `أَحَدَ عَشَرَ`, `كَوْكَبًا`],
          labels: [`فعل وفاعله`, `العدد الصريح`, `تمييز العدد الصريح منصوب`],
          distractors: [`العدد المبهم`, `تمييز العدد المبهم منصوب`, `تمييز مفرد منصوب`, `تمييز العدد الصريح مجرور بالإضافة`, `مفعول به منصوب`, `العدد الصريح منصوب`],
        },
        {
          title: `تركيب: عِنْدِي لِتْرٌ لَبَنًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of عِنْدِي لِتْرٌ لَبَنًا.`,
          source: `عِنْدِي لِتْرٌ لَبَنًا`,
          words: [`عِنْدِي`, `لِتْرٌ`, `لَبَنًا`],
          labels: [`شبه جملة خبر مقدم`, `مبتدأ مؤخر (الكَيْل)`, `تمييز مفرد منصوب`],
          distractors: [`مبتدأ مؤخر (الوَزْن)`, `مبتدأ مؤخر (المِساحة)`, `تمييز نسبة`, `تمييز مفرد مجرور`, `شبه جملة في محل نصب حال`, `مبتدأ مؤخر`],
        },
        {
          title: `تركيب: مِثْقَالَ ذَرَّةٍ خَيْرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in مِثْقَالَ ذَرَّةٍ خَيْرًا.`,
          source: `مِثْقَالَ ذَرَّةٍ خَيْرًا`,
          words: [`مِثْقَالَ`, `ذَرَّةٍ`, `خَيْرًا`],
          labels: [`اسم دالّ على الوَزْن منصوب`, `مضاف إليه مجرور`, `تمييز مفرد منصوب`],
          distractors: [`اسم دالّ على الكَيْل منصوب`, `اسم دالّ على المِساحة منصوب`, `تمييز نسبة`, `مفعول به منصوب`, `خبر مرفوع`, `اسم دالّ على الوَزْن مرفوع`],
        },
        {
          title: `تركيب: عِنْدِي جَرِيبٌ نَخْلًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of عِنْدِي جَرِيبٌ نَخْلًا.`,
          source: `عِنْدِي جَرِيبٌ نَخْلًا`,
          words: [`عِنْدِي`, `جَرِيبٌ`, `نَخْلًا`],
          labels: [`شبه جملة خبر مقدم`, `مبتدأ مؤخر (المِساحة)`, `تمييز مفرد منصوب`],
          distractors: [`مبتدأ مؤخر (الكَيْل)`, `مبتدأ مؤخر (الوَزْن)`, `تمييز نسبة`, `شبه جملة في محل نصب حال`, `مبتدأ مؤخر`, `مفعول به منصوب`],
        },
        {
          title: `تركيب: عِنْدِي خَاتَمٌ فِضَّةً`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of عِنْدِي خَاتَمٌ فِضَّةً.`,
          source: `عِنْدِي خَاتَمٌ فِضَّةً`,
          words: [`عِنْدِي`, `خَاتَمٌ`, `فِضَّةً`],
          labels: [`شبه جملة خبر مقدم`, `مبتدأ مؤخر`, `تمييز (فرع للتمييز) منصوب`],
          distractors: [`تمييز (ما اُجري مجرى المقادير) منصوب`, `تمييز (ما يُشْبِهُ المِقْدارَ) منصوب`, `مضاف إليه مجرور`, `مبتدأ مؤخر (الكَيْل)`, `تمييز مفرد منصوب`, `شبه جملة في محل نصب حال`],
        },
        {
          title: `تركيب: وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا.`,
          source: `وَلَوْ جِئْنَا بِمِثْلِهِ مَدَدًا`,
          words: [`لَوْ`, `جِئْنَا`, `بِمِثْلِهِ`, `مَدَدًا`],
          labels: [`حرف شرط`, `فعل وفاعله`, `جار ومجرور`, `تمييز (ما اُجري مجرى المقادير) منصوب`],
          distractors: [`تمييز (فرع للتمييز) منصوب`, `حرف عطف`, `مضاف إليه مجرور`, `تمييز (ما اُجري مجرى المقادير) مجرور`, `تمييز (ما يُشْبِهُ المِقْدارَ) منصوب`, `حرف شرط جازم`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'تمييز النسبة',
      subtitle: 'Specifying a Relation, and How to إعراب a Number — غير محوّل vs محوّل, and كم الخبرية',
      concepts: [
        {
          heading: 'تمييز النسبة: غير محوّل',
          lines: [
            { html: `The second main kind of تمييز, <bdi>تمييز النسبة</bdi> (also called <bdi>تمييز الجملة</bdi>), doesn't clarify a single word — it clarifies the <bdi>نِسْبَة</bdi>, the relation holding between the two sides of a sentence. It comes in two kinds, starting with <bdi>غَيْرُ مُحَوَّلٍ</bdi>.`, list: false },
            { box: { title: 'Definition', lines: [`غَيْرُ مُحَوَّلٍ: أَصْلُهُ لَمْ يَكُنْ شَيْئًا آخَرَ تَحَوَّلَ عَنْهُ`] } },
            { box: { title: 'Example', lines: [`لِلَّهِ دَرُّهُ فَارِسًا`] } },
            { html: `"What a horseman he is!" — أَيْ: مَا أَعْظَمَ فُروسِيَّتَهُ, "how great is his horsemanship." <bdi>فَارِسًا</bdi> clarifies the relation the whole sentence expresses, not one earlier word's own meaning, and nothing in the sentence originally sat somewhere else before becoming a تمييز — that's what makes it غَيْرُ مُحَوَّلٍ.`, list: false },
          ],
          exercise: {
            prompt: `لِلَّهِ دَرُّهُ فَارِسًا praises the man's horsemanship. فَارِسًا is غَيْرُ مُحَوَّلٍ. What does that mean؟`,
            kind: 'mcq',
            options: [`Its origin was never anything else that it shifted away from`, `It was originally الفاعل of a فعل`, `It was originally المفعول به of a فعل`, `It was originally المبتدأ of a جملة`],
            correct: 0,
          },
        },
        {
          heading: 'تمييز النسبة: المحوّل من الفاعل والمفعول به',
          lines: [
            { html: `The other kind of تمييز النسبة is <bdi>مُحَوَّلٌ</bdi> — its origin held a different إعراب position, and grammarians analyze it as having shifted (حُوِّلَ) into تمييز for a rhetorical purpose: <bdi>تَوْكِيد وتَخْصِيص</bdi>, emphasis and specification. مُحَوَّلٌ comes from three sources; the first two are الفاعل and المفعول به.`, list: false },
            { box: { title: 'Example', lines: [`وَاشْتَعَلَ الرَّأْسُ شَيْبًا`] } },
            { html: `"And my head has flared up with white hair" — أَيْ: شَابَ شَيْبُ الرَّأْسِ, "the whiteness of the head has turned white." The origin is شَيْبُ الرَّأْسِ as الفاعل; it's transformed into تمييز, and الاشتعال ("the flaring") is instead attributed to الرَّأْسُ itself, for the sake of <bdi>مُبَالَغَة</bdi> — rhetorical intensification.`, list: false },
            { box: { title: 'Example', lines: [`فَجَّرْنَا الْأَرْضَ عُيُونًا`] } },
            { html: `"And We caused the earth to burst forth with springs" — أَيْ: فَجَّرْنَا عُيُونَ الأَرْضِ. The origin is عُيُونُ الأَرْضِ as المفعول به; it's transformed into تمييز, and المفعول به becomes الأَرْضُ as a whole — again for مُبَالَغَة, this time intensifying the sheer abundance.`, list: false },
          ],
          exercise: {
            prompt: `وَاشْتَعَلَ الرَّأْسُ شَيْبًا originally meant شَابَ شَيْبُ الرَّأْسِ. Which إعراب position did شَيْبًا shift from before becoming تمييز؟`,
            kind: 'mcq',
            options: [`الفاعل`, `المفعول به`, `المبتدأ`, `خبر إنّ`],
            correct: 0,
          },
        },
        {
          heading: 'تمييز النسبة: المحوّل من المبتدأ وما في حكمه',
          lines: [
            { html: `The third source of مُحَوَّلٌ تمييز is المبتدأ — or anything that functions like it, such as اسم كان or اسم إنّ.`, list: false },
            { box: { title: 'Example', lines: [`أَنَا أَكْثَرُ مِنكَ مَالًا`] } },
            { html: `"I have more wealth than you" — أَيْ: مَالِي أَكْثَرُ مِنْ مَالِكَ, "my wealth is more than your wealth." The origin is مَالِي as المبتدأ; it's transformed into تمييز.`, list: false },
            { box: { title: 'Example', lines: [`وَكَانَ الْإِنسَانُ أَكْثَرَ شَيْءٍ جَدَلًا`] } },
            { html: `"And man is, of all things, most disputatious" — أَيْ: جَدَلُ الإِنْسَانِ أَكْثَرُ شَيْءٍ فِيهِ, "man's disputatiousness is the greatest thing about him." Here الإنسان is اسم كان, which functions like المبتدأ — so جَدَلًا falls under <bdi>وَمَا فِي حُكْمِ المُبْتَدَأِ</bdi>, the same category extended to اسم كان and اسم إنّ.`, list: false },
          ],
          exercise: {
            prompt: `وَكَانَ الْإِنسَانُ أَكْثَرَ شَيْءٍ جَدَلًا treats الإنسان — اسم كان — the same way it would treat a مبتدأ. What category of تمييز محوّل does that make جَدَلًا؟`,
            kind: 'mcq',
            options: [`مُحَوَّلٌ مِنَ المُبْتَدَأِ وَمَا فِي حُكْمِهِ`, `مُحَوَّلٌ مِنَ الفَاعِلِ`, `مُحَوَّلٌ مِنَ المَفْعُولِ بِهِ`, `غَيْرُ مُحَوَّلٍ`],
            correct: 0,
          },
        },
        {
          heading: 'مسألتان عامتان، وإعراب تمييز العدد الصريح',
          lines: [
            { html: `Two general rulings apply to التمييز as a whole, before turning to how each kind is إعراب'd.`, list: false },
            { box: { title: 'Rule', lines: [`الأَصْلُ فِي التَّمْييزِ أَنْ يَكونَ نَكِرَةً`] } },
            { html: `The default is for التمييز to be indefinite — every example so far, from كَوْكَبًا to شَيْبًا, has been نكرة.`, list: false },
            { box: { title: 'Rule', lines: [`التَّمْييزُ مِنَ المَنْصوباتِ تَغْليبًا لا حَقيقَةً`] } },
            { html: `التمييز is listed among المنصوبات only <bdi>تَغْلِيبًا</bdi> — by the "dominant case," a generalization covering most instances. In several of its forms, as the rest of this lesson shows, التمييز actually shows up مَجْرور rather than مَنْصوب.`, list: false },
            { html: `تمييز العدد الصريح is one of those forms. Its إعراب depends on the number itself.`, list: false },
            { table: { title: 'إعراب تمييز العدد الصريح', headers: ['العدد', 'الإعراب', 'مثال'], rows: [
              [`٣-١٠ (جمع)`, `مجرور بالإضافة`, `ثَلَاثَةَ أَيَّامٍ`],
              [`١٠٠ / ١٠٠٠ (مفرد)`, `مجرور بالإضافة`, `مِائَةَ عَامٍ / أَلْفَ سَنَةٍ`],
              [`١١-٩٩ (عادة)`, `منصوب مفرد`, `أَحَدَ عَشَرَ كَوْكَبًا`],
            ] } },
            { html: `With 3 through 10, the تمييز is <bdi>جَمْع</bdi> and مجرور بالإضافة, as in ثَلَاثَةَ أَيَّامٍ — "three days." With المِائَة and الأَلْف, the تمييز is <bdi>مُفْرَد</bdi> but still مجرور بالإضافة, as in فَأَمَاتَهُ اللَّهُ مِائَةَ عَامٍ and كَأَلْفِ سَنَةٍ. Everywhere else — typically 11 through 99 — the تمييز is مَنْصُوبٌ مُفْرَدٌ, as already seen in أَحَدَ عَشَرَ كَوْكَبًا.`, list: false },
          ],
          exercise: {
            prompt: `ثَلَاثَةَ أَيَّامٍ puts its تمييز, أَيَّامٍ, in the جمع and مجرور. Which rule of إعراب تمييز العدد الصريح does that follow؟`,
            kind: 'mcq',
            options: [`Numbers 3 through 10 take a جمع تمييز مجرور بالإضافة`, `Numbers 11-99 take a مفرد تمييز منصوب`, `المِائَة والأَلْف always take a منصوب تمييز`, `العدد المبهم is always مجرور, regardless of which كَمْ introduces it`],
            correct: 0,
          },
        },
        {
          heading: 'إعراب تمييز العدد المبهم: كم الاستفهامية وكم الخبرية',
          lines: [
            { html: `تمييز العدد المبهم is إعراب'd differently depending on which كَمْ introduces it.`, list: false },
            { box: { title: 'Rule', lines: [`مَعَ كَمِ الاسْتِفْهامِيَّةِ: مَنْصوبٌ مُفْرَدٌ`] } },
            { box: { title: 'Example', lines: [`كَمْ يَوْمًا لَبِثْتَ`] } },
            { html: `"How many days did you stay?" — with the interrogative <bdi>كَمِ الاسْتِفْهَامِيَّةِ</bdi>, its تمييز, يَوْمًا, is مَنْصوبٌ مُفْرَدٌ. This تمييز may drop when context supplies it, as in ﴿كَمْ لَبِثْتُمْ﴾ — أَيْ كَمْ يَوْمًا لَبِثْتُمْ, "how many days did you remain," with يَوْمًا understood.`, list: false },
            { box: { title: 'Rule', lines: [`مَعَ كَمِ الخَبَرِيَّةِ: مَجْرورٌ بِحَرْفِ جَرٍّ زَائِدٍ، ظَاهِرٍ أَوْ مُقَدَّرٍ`] } },
            { box: { title: 'Example', lines: [`كَمْ مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ`] } },
            { html: `<bdi>كَمِ الخَبَرِيَّةُ</bdi> expresses abundance rather than a question — "how many a small party has overcome a large party by Allah's permission." Its تمييز, فِئَةٍ, is مَجْرورٌ by the زائد مِنْ, which is <bdi>ظَاهِر</bdi> here. The same جر can instead be <bdi>مُقَدَّر</bdi> — understood but not written — as in the line of poetry كَمْ مُلوكٍ بَادَ مُلْكُهُمْ وَنَعِيمِ سُوقَةٍ بَادُوا, "how many kings, their kingdom perished."`, list: false },
          ],
          exercise: {
            prompt: `كَمْ يَوْمًا لَبِثْتَ asks a genuine question with كَمِ الاسْتِفْهَامِيَّة. How is its تمييز, يَوْمًا, إعراب'd؟`,
            kind: 'mcq',
            options: [`منصوب مفرد`, `مجرور بحرف جر زائد`, `مجرور بالإضافة`, `مرفوع`],
            correct: 0,
          },
        },
        {
          heading: 'بقية أحكام كم الخبرية، والتمييز للتأكيد',
          lines: [
            { html: `Two further points close out تمييز كَمِ الخَبَرِيَّةِ, and one shows a تمييز used for a different purpose entirely.`, list: false },
            { box: { title: 'Careful', lines: [`الأَصْلُ فِي تَمْييزِ كَمِ الخَبَرِيَّةِ أَنْ يَكونَ مُفْرَدًا نَكِرَةً مُتَّصِلًا بِكَمْ، وَيَجُوزُ أَنْ يَكونَ جَمْعًا أَوْ مُعَرَّفًا أَوْ مَفْصولًا`] } },
            { html: `The default is for تمييز كَمِ الخَبَرِيَّةِ to be مُفْرَد نَكِرَة, directly attached to كَمْ. But it's permitted to be جَمْع, مُعَرَّف, or <bdi>مَفْصول</bdi> — separated from كَمْ by something coming between them. When it's مَفْصول, the تمييز must be مَجْرور by an overt (<bdi>ظَاهِر</bdi>, not مُقَدَّر) preposition.`, list: false },
            { box: { title: 'Example', lines: [`كَمْ أَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُونِ`] } },
            { html: `"How many generations before them have We destroyed." Here القُرون, the تمييز, is separated from كَمْ by the verb-and-adverbial phrase أَهْلَكْنَا قَبْلَهُمْ sitting in between — so, per the rule, it must be مَجْرور by the overt مِنَ.`, list: false },
            { html: `It's also permitted to drop تمييز كَمِ الخَبَرِيَّةِ altogether when context supplies it, as in the poetic line وَكَمْ عَلَّمْتُهُ نَظْمَ القَوافِي فَلَمَّا قَالَ قَافِيَةً هَجَانِي — أَيْ كَمْ مَرَّةٍ عَلَّمْتُهُ, "how many times did I teach him," with مَرَّةٍ understood.`, list: false },
            { html: `Not every تمييز lifts a genuine ambiguity. Sometimes it arrives only <bdi>لِلتَّأْكِيدِ</bdi> — as confirmation rather than as <bdi>مُفَسِّر</bdi> of something actually unclear.`, list: false },
            { box: { title: 'Example', lines: [`إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا`] } },
            { html: `"Indeed, the number of months with Allah is twelve months." الشُّهُور has already removed any ambiguity about what's being counted, so شَهْرًا is no longer strictly needed to lift confusion — it arrives instead simply to confirm and reinforce the meaning already established.`, list: false },
          ],
          exercise: {
            prompt: `In كَمْ أَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُونِ, القُرون is separated from كَمْ by أَهْلَكْنَا قَبْلَهُمْ. Given that separation, how must its تمييز be إعراب'd؟`,
            kind: 'mcq',
            options: [`مجرور بحرف جر ظاهر — not مقدر`, `منصوب مفرد`, `مجرور بالإضافة فقط`, `يجب حذفه`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `لِلَّهِ دَرُّهُ فَارِسًا praises a man's horsemanship, and فَارِسًا never sat in a different إعراب position before becoming تمييز. Which kind of تمييز النسبة is that؟`, options: [`غَيْرُ مُحَوَّلٍ`, `مُحَوَّلٌ مِنَ الفَاعِلِ`, `مُحَوَّلٌ مِنَ المَفْعولِ بِهِ`, `مُحَوَّلٌ مِنَ المُبْتَدَأِ`], correct: 0 },
        { q: `فَجَّرْنَا الْأَرْضَ عُيُونًا originally meant فَجَّرْنَا عُيُونَ الأَرْضِ. Which إعراب position did عُيُونًا shift from؟`, options: [`المفعول به`, `الفاعل`, `المبتدأ`, `خبر كان`], correct: 0 },
        { q: `أَنَا أَكْثَرُ مِنكَ مَالًا originally meant مَالِي أَكْثَرُ مِنْ مَالِكَ. Which إعراب position did مَالًا shift from؟`, options: [`المبتدأ`, `الفاعل`, `المفعول به`, `اسم إنّ`], correct: 0 },
        { q: `مِائَةَ عَامٍ puts its تمييز, عَامٍ, in the مفرد and مجرور بالإضافة, unlike the جمع تمييز that ثَلَاثَةَ أَيَّامٍ takes. What's the difference between them؟`, options: [`المِائَة والأَلْف take a مفرد تمييز مجرور بالإضافة, while 3-10 take a جمع تمييز مجرور بالإضافة`, `المِائَة takes a منصوب تمييز while 3-10 takes مجرور, exactly reversing the true rule for each`, `المِائَة never takes a تمييز, since it already names a specific quantity on its own`, `أَيَّامٍ is تمييز نسبة while عَامٍ is تمييز مفرد, reversing which one clarifies a relation`], correct: 0 },
        { q: `كَمْ يَوْمًا لَبِثْتَ asks a real question, while كَمْ مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً expresses abundance. Why is يَوْمًا منصوب while فِئَةٍ is مجرور؟`, options: [`يَوْمًا's كَمْ is الاسْتِفْهَامِيَّة, taking a منصوب تمييز; فِئَةٍ's كَمْ is الخَبَرِيَّة, taking a تمييز مجرور بحرف جر زائد`, `Both should be منصوب, and فِئَةٍ is simply an exception to the usual rule`, `يَوْمًا is تمييز نسبة while فِئَةٍ is تمييز مفرد, reversing which كَمْ goes with which`, `كَمِ الخَبَرِيَّة never takes a تمييز, unlike كَمِ الاسْتِفْهَامِيَّة which always does`], correct: 0 },
        { q: `إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا already names الشُّهُور before شَهْرًا repeats the same idea. What role does شَهْرًا play there؟`, options: [`تمييز لِلتَّأْكِيدِ — confirming a meaning already clear, not lifting a real ambiguity`, `تمييز نسبة محوّل من الفاعل, shifted here from its original إعراب position`, `مضاف إليه, completing an إضافة with الشُّهُور`, `خبر إنّ, since عِدَّةَ الشُّهُورِ already serves as اسم إنّ`], correct: 0 },
      ],
      bank: [
        { title: `تمييز النسبة: تعريفه`, kind: 'mcq', prompt: `تمييز النسبة clarifies vagueness in which part of a sentence؟`, options: [`النِّسْبَة — the relation between the two sides of a sentence`, `A single مفرد word like a number or measure`, `Only الفاعل of a فعل, never anything about the sentence as a whole`, `Only خبر إنّ, never a relation spanning the whole sentence`], correct: 0 },
        { title: `غير محول: التعريف`, kind: 'mcq', prompt: `غَيْرُ مُحَوَّلٍ names a تمييز نسبة whose origin was never anything else. Which example illustrates it؟`, options: [`لِلَّهِ دَرُّهُ فَارِسًا`, `وَاشْتَعَلَ الرَّأْسُ شَيْبًا`, `فَجَّرْنَا الْأَرْضَ عُيُونًا`, `أَنَا أَكْثَرُ مِنكَ مَالًا`], correct: 0 },
        { title: `شيبا: المحول من الفاعل`, kind: 'mcq', prompt: `وَاشْتَعَلَ الرَّأْسُ شَيْبًا's original meaning was شَابَ شَيْبُ الرَّأْسِ, with شَيْبُ as الفاعل. Why was it transformed into تمييز؟`, options: [`For مُبَالَغَة — attributing الاشتعال to الرَّأْس itself intensifies the meaning`, `Because الفاعل can never be مضاف`, `Because شَيْبًا must always be مجرور`, `Because الرَّأْس cannot take تنوين, unlike an ordinary اسم منصوب`], correct: 0 },
        { title: `عيونا: المحول من المفعول به`, kind: 'mcq', prompt: `فَجَّرْنَا الْأَرْضَ عُيُونًا originally meant فَجَّرْنَا عُيُونَ الأَرْضِ, with عُيُونَ as المفعول به. After the transformation, what does الأَرْضَ become؟`, options: [`المفعول به of فَجَّرْنَا`, `الفاعل of فَجَّرْنَا`, `المبتدأ of a new جملة`, `مضاف إليه لِعُيُونًا still`], correct: 0 },
        { title: `مالا: المحول من المبتدأ`, kind: 'mcq', prompt: `أَنَا أَكْثَرُ مِنكَ مَالًا originally meant مَالِي أَكْثَرُ مِنْ مَالِكَ, with مَالِي as المبتدأ. What happens to it after the transformation؟`, options: [`It becomes تمييز, and أَنَا becomes المبتدأ instead`, `It stays المبتدأ, unchanged, still governing أَكْثَرُ as its خبر`, `It becomes الفاعل of a hidden فعل`, `It becomes مضاف إليه لأكثر`], correct: 0 },
        { title: `جدلا: ما في حكم المبتدأ`, kind: 'mcq', prompt: `وَكَانَ الْإِنسَانُ أَكْثَرَ شَيْءٍ جَدَلًا treats الإنسان — اسم كان — like a مبتدأ. Why does جَدَلًا still count as مُحَوَّلٌ مِنَ المُبْتَدَأِ even though الإنسان is technically اسم كان, not a real مبتدأ؟`, options: [`Because اسم كان functions like المبتدأ, so it's grouped as وَمَا فِي حُكْمِ المُبْتَدَأِ`, `Because كان is a فعل ناقص and never has اسم`, `Because جَدَلًا is actually تمييز مفرد, not تمييز نسبة`, `Because الإنسان is مبني, unlike a real مبتدأ`], correct: 0 },
        { title: `الأصل في التمييز: نكرة`, kind: 'mcq', prompt: `الأَصْلُ فِي التَّمْييزِ أَنْ يَكونَ نَكِرَةً. What does that rule state؟`, options: [`The default is for التمييز to be indefinite`, `التمييز must always carry أل`, `التمييز can never be نكرة`, `التمييز must always be مؤنث`], correct: 0 },
        { title: `المنصوبات تغليبا`, kind: 'mcq', prompt: `Why is التمييز listed among المنصوبات only تَغْلِيبًا rather than حقيقةً؟`, options: [`Because in several of its forms it actually comes مجرور, not منصوب`, `Because it is always مجرور, never منصوب`, `Because المنصوبات never include any اسم نكرة`, `Because تغليبا means it never takes إعراب at all`], correct: 0 },
        { title: `إعراب تمييز ثلاثة إلى عشرة`, kind: 'mcq', prompt: `ثَلَاثَةَ أَيَّامٍ puts أَيَّامٍ in the جمع and مجرور. Which rule governs تمييز numbers 3 through 10؟`, options: [`مجرور بالإضافة, جمع`, `منصوب مفرد`, `مجرور بحرف جر زائد`, `تمييز نسبة محوّل`], correct: 0 },
        { title: `إعراب تمييز المائة والألف`, kind: 'mcq', prompt: `فَأَمَاتَهُ اللَّهُ مِائَةَ عَامٍ puts عَامٍ in the مفرد and مجرور. Which rule governs تمييز المِائَة والأَلْف؟`, options: [`مجرور بالإضافة, مفرد`, `منصوب مفرد, like 11-99`, `مجرور بحرف جر زائد, like كم الخبرية`, `تمييز نسبة, not تمييز مفرد`], correct: 0 },
        { title: `إعراب تمييز ١١-٩٩`, kind: 'mcq', prompt: `أَحَدَ عَشَرَ كَوْكَبًا puts كَوْكَبًا in the منصوب. Which range of numbers does that إعراب typically apply to؟`, options: [`11 through 99`, `3 through 10`, `100 and 1000`, `Only with كم الاستفهامية`], correct: 0 },
        { title: `كم الاستفهامية: الإعراب`, kind: 'mcq', prompt: `كَمْ يَوْمًا لَبِثْتَ asks a genuine question. How is يَوْمًا إعراب'd؟`, options: [`منصوب مفرد`, `مجرور بحرف جر زائد`, `مجرور بالإضافة`, `خبر مقدم`], correct: 0 },
        { title: `حذف تمييز كم الاستفهامية`, kind: 'mcq', prompt: `﴿كَمْ لَبِثْتُمْ﴾ drops its تمييز — أَيْ كَمْ يَوْمًا لَبِثْتُمْ. When is that drop permitted؟`, options: [`عِنْدَ وُجودِ قَرينَةٍ — when context makes the dropped تمييز recoverable`, `Never — تمييز كم الاستفهامية can't be dropped`, `Only in poetry, never in ordinary speech`, `Only with كم الخبرية, not الاستفهامية`], correct: 0 },
        { title: `كم الخبرية: الإعراب`, kind: 'mcq', prompt: `كَمْ مِّن فِئَةٍ قَلِيلَةٍ غَلَبَتْ فِئَةً كَثِيرَةً بِإِذْنِ اللَّهِ expresses abundance with كَمِ الخَبَرِيَّة. How is its تمييز, فِئَةٍ, إعراب'd؟`, options: [`مجرور بحرف جر زائد, ظاهر هنا (مِنْ)`, `منصوب مفرد, like الاستفهامية's تمييز, not by a زائد حرف جر`, `مجرور بالإضافة, the same way تمييز العدد الصريح often is`, `مرفوع, as if it were a خبر`], correct: 0 },
        { title: `كم الخبرية: الجر المقدر`, kind: 'mcq', prompt: `كَمْ مُلوكٍ بَادَ مُلْكُهُمْ shows تمييز كم الخبرية مجرور بحرف جر مقدر rather than ظاهر. What does مُقَدَّر mean here؟`, options: [`The زائد جار is understood but not written`, `The زائد جار is written but silent`, `التمييز is dropped entirely, the way it can be after كَمِ الاسْتِفْهَامِيَّة too`, `التمييز is منصوب instead, exactly like تمييز كَمِ الاسْتِفْهَامِيَّة`], correct: 0 },
        { title: `مفصول عن كم: وجوب الجر الظاهر`, kind: 'mcq', prompt: `كَمْ أَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُونِ separates القُرون from كَمْ by a verb phrase in between. What does that separation require؟`, options: [`The تمييز must be مجرور بحرف جر ظاهر, not مقدر`, `The تمييز must become منصوب instead, the way it would with كَمِ الاسْتِفْهَامِيَّة`, `The تمييز must be dropped — the way حذف تمييز كم الخبرية is permitted whenever a قرينة points to it`, `The تمييز can no longer be نكرة`], correct: 0 },
        { title: `حذف تمييز كم الخبرية`, kind: 'mcq', prompt: `وَكَمْ عَلَّمْتُهُ نَظْمَ القَوافِي فَلَمَّا قَالَ قَافِيَةً هَجَانِي drops its تمييز — أَيْ كَمْ مَرَّةٍ عَلَّمْتُهُ. Under what condition is dropping تمييز كم الخبرية permitted؟`, options: [`عِنْدَ قَرينَةٍ تَدُلُّ عَلَيْهِ — when context indicates it`, `Only when كم is الاستفهامية`, `Never — تمييز كم الخبرية can't be dropped`, `Only in Qur'anic Arabic, never in poetry`], correct: 0 },
        { title: `التمييز للتأكيد`, kind: 'mcq', prompt: `إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا already names الشُّهُور before شَهْرًا repeats it. What's the difference between this تمييز and an ordinary مُفَسِّر تمييز؟`, options: [`It confirms a meaning already clear rather than lifting a genuine ambiguity`, `It is مجرور instead of منصوب, the way تمييز كَمِ الخَبَرِيَّة often is`, `It clarifies تمييز النسبة rather than تمييز المفرد`, `It can never appear after إنّ, only after a plain اسم عدد`], correct: 0 },
        {
          title: `تركيب: لِلَّهِ دَرُّهُ فَارِسًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of لِلَّهِ دَرُّهُ فَارِسًا.`,
          source: `لِلَّهِ دَرُّهُ فَارِسًا`,
          words: [`لِلَّهِ`, `دَرُّهُ`, `فَارِسًا`],
          labels: [`جار ومجرور (خبر مقدم)`, `مبتدأ مؤخر (والهاء مضاف إليه)`, `تمييز نسبة غير محوّل منصوب`],
          distractors: [`تمييز نسبة محوّل من الفاعل منصوب`, `تمييز نسبة محوّل من المبتدأ منصوب`, `تمييز نسبة محوّل من المفعول به منصوب`, `تمييز مفرد`, `مضاف إليه مجرور`, `تمييز نسبة غير محوّل مجرور`],
        },
        {
          title: `تركيب: وَاشْتَعَلَ الرَّأْسُ شَيْبًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of اشْتَعَلَ الرَّأْسُ شَيْبًا.`,
          source: `اشْتَعَلَ الرَّأْسُ شَيْبًا`,
          words: [`اشْتَعَلَ`, `الرَّأْسُ`, `شَيْبًا`],
          labels: [`فعل ماضٍ`, `فاعل مرفوع`, `تمييز نسبة محوّل من الفاعل منصوب`],
          distractors: [`تمييز نسبة محوّل من المبتدأ منصوب`, `تمييز نسبة محوّل من المفعول به منصوب`, `تمييز نسبة غير محوّل منصوب`, `تمييز مفرد`, `مفعول به منصوب`, `فعل مضارع`],
        },
        {
          title: `تركيب: أَنَا أَكْثَرُ مِنكَ مَالًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of أَنَا أَكْثَرُ مِنكَ مَالًا.`,
          source: `أَنَا أَكْثَرُ مِنكَ مَالًا`,
          words: [`أَنَا`, `أَكْثَرُ`, `مِنكَ`, `مَالًا`],
          labels: [`مبتدأ`, `خبر`, `جار ومجرور متعلق بأكثر`, `تمييز نسبة محوّل من المبتدأ منصوب`],
          distractors: [`تمييز نسبة محوّل من الفاعل منصوب`, `تمييز نسبة محوّل من المفعول به منصوب`, `تمييز نسبة غير محوّل منصوب`, `مضاف إليه مجرور`, `فاعل`, `تمييز عدد`],
        },
        {
          title: `تركيب: ثَلَاثَةَ أَيَّامٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each word in ثَلَاثَةَ أَيَّامٍ.`,
          source: `ثَلَاثَةَ أَيَّامٍ`,
          words: [`ثَلَاثَةَ`, `أَيَّامٍ`],
          labels: [`العدد الصريح (٣-١٠)`, `تمييز العدد مجرور بالإضافة`],
          distractors: [`تمييز العدد منصوب مفرد`, `تمييز العدد مفرد مجرور بالإضافة`, `العدد المبهم`, `تمييز مجرور بحرف جر زائد`, `العدد الصريح (١١-٩٩)`, `تمييز نسبة`],
        },
        {
          title: `تركيب: كَمْ أَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُونِ`,
          kind: 'tarkeeb',
          instruction: `Identify the role of each part of كَمْ أَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُونِ.`,
          source: `كَمْ أَهْلَكْنَا قَبْلَهُمْ مِّنَ الْقُرُونِ`,
          words: [`كَمْ`, `أَهْلَكْنَا`, `قَبْلَهُمْ`, `مِنَ`, `الْقُرُونِ`],
          labels: [`كم الخبرية`, `فعل وفاعله`, `ظرف ومضاف إليه`, `حرف جر زائد`, `تمييز مجرور (مفصول عن كم)`],
          distractors: [`كم الاستفهامية`, `تمييز منصوب`, `تمييز مجرور (متصل بكم)`, `تمييز مجرور بحرف جر مقدر`, `مفعول به منصوب`, `حرف جر أصلي`],
        },
        {
          title: `تركيب: إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the role of عِدَّةَ, الشُّهُورِ, اثْنَا عَشَرَ, and شَهْرًا in إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا.`,
          source: `إِنَّ عِدَّةَ الشُّهُورِ عِندَ اللَّهِ اثْنَا عَشَرَ شَهْرًا`,
          words: [`عِدَّةَ`, `الشُّهُورِ`, `اثْنَا عَشَرَ`, `شَهْرًا`],
          labels: [`اسم إنّ (مضاف)`, `مضاف إليه مجرور`, `خبر إنّ`, `تمييز للتأكيد منصوب`],
          distractors: [`تمييز العدد الصريح منصوب`, `خبر مرفوع`, `مضاف`, `تمييز نسبة`, `تمييز مفرد منصوب`, `اسم إنّ`],
        },
      ],
    },
  ],
};

// Module 24 — الفاعل ونائب الفاعل والمبتدأ
//
// Source: app-lessons/124-al-fail.md through app-lessons/126-al-mubtada.md.
// Opens the chapter المعمول وغير المعمول (see COURSE-MAP.md's top-of-file
// note on chapter groupings) — the matn's own المقصد الثاني, working
// through every kind of noun a governor can act on. This module covers the
// first three of the eight مرفوعات: الفاعل, نائب الفاعل, and المبتدأ.
// Authored out of order per the same 2026-08-12 direction used throughout
// this course (see COURSE-MAP.md's authoring-order note): Modules 20-23
// (COURSE-MAP.md's own proposal for the rest of العامل من الأسماء and
// حذف العامل/النداء) are still unauthored at the time of writing, and
// other sessions are working on them concurrently. NOT registered in
// content/annahw.js's MODULES array — that file is shared with those
// sessions, and Modules 20-23 don't exist yet to fill the array slots
// before this one, so wiring it in is left for a later merge pass, per the
// precedent Modules 08-19 all used.
//
// Lesson boundaries follow COURSE-MAP.md's proposal (l1 = 124 alone; l2 =
// 125 + 126 part 1, through حذف المبتدأ جوازًا; l3 = 126 part 2, حذف
// المبتدأ وجوبًا). l1 grew from the ~6 concepts estimated to 7: 124's
// third and fourth headings (تقديم الفاعل على المفعول به, تقديم المفعول
// به على الفاعل) each carry enough distinct sub-rules — the
// بصريون/كوفيون dispute over زيد قام, two obligatory-fronting conditions,
// two permitted-reordering قرائن, then جوازًا vs three وجوبًا conditions
// on the other side — that compressing either heading into a single
// concept would have meant dropping a genuinely separate rule rather than
// condensing prose, the same overflow Module 03's l1 and Module 07's l1
// hit for the same reason. l2 and l3 held at the 6/5 concepts estimated.
export default {
  id: '24',
  title: 'الفاعل والمبتدأ',
  heading: 'المعمول وغير المعمول',
  subheading: 'الاسم والفعل',
  blurb: 'الفاعل and نائب الفاعل as a matched pair distinguished only by معلوم/مجهول فاعله, then المبتدأ opening الجملة الاسمية — its two types, when a نكرة may open it, and the four positions where it must be dropped.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الفاعل',
      subtitle: 'The Subject — its definition, when it appears مجرور لفظًا, and its word order with المفعول به',
      concepts: [
        {
          heading: 'تعريف الفاعل',
          lines: [
            { html: `With this lesson the matn opens المقصد الثاني — المعمول and غير المعمول, a systematic tour of every kind of noun a governor can act on. It starts with the most basic of them: <bdi>الفاعل</bdi>.`, list: false },
            { box: { title: 'Definition', lines: [`الفاعِلُ: ما نُسِبَ إِلَيْهِ الفِعْلُ التّامُّ المَعْلومُ فاعِلُهُ، أَوْ ما بِمَعْنَى ذلِكَ الفِعْلِ`] } },
            { html: `الفاعل is the noun a complete verb (<bdi>فعل تام</bdi>, not a فعل ناقص like كان) with a known doer (<bdi>معلوم فاعله</bdi>, not مبني للمجهول) is attributed to — or a noun that something carrying that same meaning, such as اسم الفاعل, is attributed to. Two exclusions matter here: (1) تامّ rules out الفعل الناقص, whose subject is called اسمه instead and works differently (اسم كان وأخواتها); (2) معلوم فاعله rules out الفعل المجهول, whose noun is نائب الفاعل, not الفاعل.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَقَسَتْ قُلوبُهُمْ﴾`, `﴿وَالْقاسِيَةِ قُلوبُهُمْ﴾`] } },
            { html: `In ﴿فَقَسَتْ قُلوبُهُمْ﴾ ("so their hearts became hardened"), قُلوبُهُمْ is فاعل of قَسَتْ, a complete active verb. In ﴿وَالْقاسِيَةِ قُلوبُهُمْ﴾, القاسِيَة is اسم الفاعل standing in for that same verbal meaning — قُلوبُهُمْ is still its فاعل, exactly as it was for the verb.`, list: false },
          ],
          exercise: {
            prompt: `الفاعل's definition excludes الفعل الناقص by requiring تام, and excludes الفعل المجهول by requiring معلوم فاعله. Which noun does الفعل المجهول attribute its meaning to instead?`,
            kind: 'mcq',
            options: [`نائب الفاعل`, `اسم كان`, `المبتدأ`, `المفعول المطلق`],
            correct: 0,
          },
        },
        {
          heading: 'جرّ الفاعل لفظًا',
          lines: [
            { html: `الفاعل's slot (<bdi>محل</bdi>) is always مرفوع — that never changes. But the word filling that slot can sometimes appear مجرور in form (<bdi>لفظًا</bdi>) while staying مرفوع in position (<bdi>محلًّا</bdi>).`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ يُجَرُّ الفاعِلُ لَفْظًا فِي حالَتَيْنِ: (١) بِإِضافَتِهِ إِلى المَصْدَرِ، (٢) بِحَرْفِ جَرٍّ زائِدٍ (مِنْ أَوِ الباءِ)`] } },
            { html: `الفاعل is مجرور لفظًا in two situations: (1) when it is مضاف إليه of a مصدر, since a مصدر is an اسم عامل that takes its own فاعل as مضاف إليه; (2) by a زائد preposition, either <bdi>مِنْ</bdi> or <bdi>الباء</bdi>.`, list: false },
            { box: { title: 'Example', lines: [`﴿كَذِكْرِكُمْ آباءَكُمْ﴾`, `﴿ما جاءَنا مِنْ بَشيرٍ﴾`, `﴿وَكَفَى بِاللهِ وَكيلًا﴾`] } },
            { html: `In ﴿كَذِكْرِكُمْ آباءَكُمْ﴾ ("as your remembrance of your forefathers"), كُمْ is مضاف إليه of ذِكْر lafẓan (مجرور), but محلًّا it is فاعل مرفوع of ذِكْر — a مصدر governs its فاعل the same way a verb does (أن تذكروا). In ﴿ما جاءَنا مِنْ بَشيرٍ﴾ ("no bringer of good news came to us"), بَشيرٍ is مجرور لفظًا بِمِنْ لكنه محلًّا فاعل مرفوع لِـ جاءَ. In ﴿وَكَفَى بِاللهِ وَكيلًا﴾ ("and Allah suffices as a Guardian"), لَفْظُ الجَلالَةِ اللهِ is مجرور لفظًا بالباء لكنه محلًّا فاعل مرفوع لِـ كَفَى.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `ما جاءَنا مِنْ بَشيرٍ`,
                translation: `No bringer of good news came to us.`,
                cells: [`ما`, `جاءَنا`, `مِنْ`, `بَشيرٍ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف نفي` }, { start: 1, end: 1, role: `فعل ماضٍ ومفعوله` }, { start: 2, end: 2, role: `حرف جر زائد` }, { start: 3, end: 3, role: `فاعل مجرور لفظًا مرفوع محلًّا` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In ﴿كَذِكْرِكُمْ آباءَكُمْ﴾, كُمْ appears مجرور as مضاف إليه of the مصدر ذِكْر. Which إعراب does it actually hold محلًّا, and why?`,
            kind: 'mcq',
            options: [`فاعل مرفوع محلًّا — a مصدر governs its فاعل exactly as a verb would`, `مفعول به منصوب محلًّا — ذكر behaves like a transitive verb here`, `مبتدأ مرفوع محلًّا — ذكركم opens a new جملة اسمية`, `خبر مرفوع محلًّا — كم completes ذكر's predication`],
            correct: 0,
          },
        },
        {
          heading: 'الأصل في ترتيب الفاعل والمفعول به',
          lines: [
            { box: { title: 'Rule', lines: [`الأَصْلُ فِي الفاعِلِ أَنْ يَتَقَدَّمَ عَلى المَفْعولِ بِهِ`] } },
            { html: `By default الفاعل comes right after its عامل, before المفعول به: فعل + فاعل + مفعول به.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَوَرِثَ سُلَيْمانُ داوودَ﴾`] } },
            { html: `"And Sulaymān inherited from Dāwūd." سُلَيْمانُ (فاعل) comes right after وَرِثَ, before داوودَ (مفعول به) — the normal, default order.`, list: false },
            { box: { title: 'Careful', lines: [`إِذا تَقَدَّمَ الفاعِلُ عَلى فِعْلِهِ صارَ مُبْتَدَأً عِنْدَ البَصْرِيِّينَ، وَبَقِيَ فاعِلًا مَفْصولًا عِنْدَ الكوفِيِّينَ`] } },
            { html: `When الفاعل moves ahead of its own verb rather than after it — as in زَيْدٌ قامَ — جمهور النحاة (أهل البصرة) read زَيْدٌ as مبتدأ and قامَ with its مستتر ضمير هو as خبر.`, list: false },
            { html: `أهل الكوفة instead keep زَيْدٌ as فاعل, just <bdi>مفصول</bdi> (separated) from its عامل. Both readings agree on the meaning; they differ only in how the الإعراب is structured — a real disagreement between the two great grammatical schools that the matn preserves rather than settles.`, list: false },
          ],
          exercise: {
            prompt: `In زَيْدٌ قامَ, البصريون read زَيْدٌ as مبتدأ with قامَ (and its مستتر ضمير هو) as خبر. How do الكوفيون read the same sentence instead?`,
            kind: 'mcq',
            options: [`زَيْدٌ stays فاعل, just مفصول (separated) from its عامل قامَ`, `زَيْدٌ becomes مفعول به مقدّم`, `قامَ becomes مبتدأ and زَيْدٌ becomes خبر`, `Both schools agree زَيْدٌ must be مبتدأ`],
            correct: 0,
          },
        },
        {
          heading: 'وجوب تقديم الفاعل على المفعول به',
          lines: [
            { html: `Two situations force الفاعل to stay ahead of المفعول به — reversing the order there would be genuinely impossible or ambiguous.`, list: false },
            { box: { title: 'Rule', lines: [`(١) الفاعِلُ ضَميرٌ مُتَّصِلٌ يَلْزَمُ اتِّصالُهُ، (٢) عَدَمُ وُجودِ قَرينَةٍ تُمَيِّزُ الفاعِلَ مِنَ المَفْعولِ بِهِ`] } },
            { html: `(1) When الفاعل is an attached pronoun that must stay attached — reversing would force it to detach, which attached pronouns cannot do; (2) when nothing in the جملة — no ظاهر إعراب, no gender agreement — lets the listener tell which noun is which, so reversing would make it genuinely ambiguous (<bdi>الالتباس</bdi>).`, list: false },
            { box: { title: 'Example', lines: [`ضَرَبْتُ زَيْدًا`, `زارَ موسَى عيسَى`] } },
            { html: `ضَرَبْتُ زَيْدًا: you cannot say ضَرَبَ زَيْدًا أَنا, since that forces the attached تُ off the verb and into a detached أَنا, when attachment was perfectly possible. زارَ موسَى عيسَى ("Mūsā visited ʿĪsā"): both names carry no visible إعراب, so reversing them (زارَ عيسَى موسَى) leaves no way to tell who visited whom — الفاعل must stay first. Even زارَتْ هذِهِ تِلْكَ ("this woman visited that woman") suffers the same fate despite the feminine فعل, because both هذِهِ and تِلْكَ are grammatically feminine, so تأنيث الفعل doesn't help distinguish which one is doing the visiting.`, list: false },
          ],
          exercise: {
            prompt: `زارَتْ هذِهِ تِلْكَ keeps الفاعل first even though the فعل's feminine ending (تأنيث) might seem to help tell the two apart. Why doesn't زارَتْ's تأنيث resolve the ambiguity here?`,
            kind: 'mcq',
            options: [`Both هذِهِ and تِلْكَ are themselves grammatically feminine, so the تأنيث marks neither one specifically`, `تأنيث الفعل never functions as a قرينة in any sentence`, `هذِهِ and تِلْكَ are actually مذكر, not مؤنث`, `The rule only applies to proper names, not demonstratives`],
            correct: 0,
          },
        },
        {
          heading: 'جواز تأخير الفاعل عند وجود قرينة',
          lines: [
            { box: { title: 'Rule', lines: [`بِخِلافِ ذٰلِكَ، إِذا وُجِدَتْ قَرينَةٌ تُزيلُ الالْتِباسَ، جازَ تَقْديمُ المَفْعولِ بِهِ عَلى الفاعِلِ`] } },
            { html: `When some other clue (<bdi>قرينة</bdi>) resolves the ambiguity even without word order, تقديم الفاعل is not required, and المفعول به may safely come first.`, list: false },
            { box: { title: 'Example', lines: [`أَكَلَ الكُمَّثْرَى موسَى`, `نَصَرَتْ موسَى سَلْمَى`] } },
            { html: `أَكَلَ الكُمَّثْرَى موسَى ("Mūsā ate the guava"): even with الكُمَّثْرَى first, no listener would think a guava ate Mūsā — the sheer impossibility of the reverse reading (<bdi>قرينة معنوية</bdi>) makes the intended فاعل obvious regardless of position. نَصَرَتْ موسَى سَلْمَى ("Salmā helped Mūsā"): even with موسَى (masculine) appearing right after the verb, the feminine ending نَصَرَتْ (<bdi>قرينة لفظية</bdi>) signals that الفاعل must be the feminine name سَلْمَى — no confusion arises even though سَلْمَى comes last.`, list: false },
            { box: { title: 'Rule', lines: [`وَهٰذا يَجْري فِي اسْمِ كانَ وَأَخَواتِها أَيْضًا`] } },
            { html: `The same principle — تقديم واجب عند الالتباس, وجواز التأخير عند وجود قرينة — extends to اسم كان وأخواتها, not just الفاعل والمفعول به.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَما زالَتْ تِلْكَ دَعْواهُمْ﴾`] } },
            { html: `"And that ceased not to be their cry." تِلْكَ (اسم زالت) must come before دَعْواهُمْ (خبر زالت) here, since neither carries a visible إعراب marker to distinguish اسم from خبر if the order were reversed — exactly as with الفاعل والمفعول به.`, list: false },
          ],
          exercise: {
            prompt: `أَكَلَ الكُمَّثْرَى موسَى keeps its meaning clear even with المفعول به first, purely because no listener would ever think a guava could eat a person. What kind of قرينة is that?`,
            kind: 'mcq',
            options: [`قرينة معنوية — the impossibility of the reverse reading makes the intended فاعل obvious`, `قرينة لفظية — a visible إعراب marker settles it`, `قرينة معنوية and قرينة لفظية together`, `No قرينة at all; the order here is actually required, not merely permitted`],
            correct: 0,
          },
        },
        {
          heading: 'تقديم المفعول به على الفاعل جوازًا',
          lines: [
            { html: `المفعول به can also move ahead of الفاعل. The first strength is merely optional.`, list: false },
            { box: { title: 'Rule', lines: [`يَتَقَدَّمُ المَفْعولُ بِهِ جَوازًا لِلْبَلاغَةِ، بِلا ضَرورَةٍ نَحْوِيَّةٍ`] } },
            { html: `<bdi>جوازًا</bdi> (permissibly) means simply for style or balance (<bdi>بلاغة</bdi>), with no grammatical necessity either way.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَلَقَدْ جاءَ آلَ فِرْعَوْنَ النُّذُرُ﴾`] } },
            { html: `"And there certainly came to the people of Pharaoh warners." آلَ فِرْعَوْنَ (مفعول به) precedes النُّذُرُ (فاعل) here purely as a matter of style — often, as with this آية, for وَزْن (matching the end-rhyme running through the surrounding آيات). Nothing forces this order; the ordinary order would work just as well.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿وَلَقَدْ جاءَ آلَ فِرْعَوْنَ النُّذُرُ﴾, المفعول به آلَ فِرْعَوْنَ comes before الفاعل النُّذُرُ. Does anything in the sentence force this order?`,
            kind: 'mcq',
            options: [`No — nothing forces it; it's purely بلاغة, often for وزن matching the surrounding rhyme`, `Yes — النُّذُرُ is a ضمير متصل that must stay attached`, `Yes — reversing it would create الالتباس`, `Yes — آلَ فِرْعَوْنَ contains an اسم استفهام that must open the sentence`],
            correct: 0,
          },
        },
        {
          heading: 'تقديم المفعول به على الفاعل وجوبًا',
          lines: [
            { html: `Three situations force المفعول به ahead of الفاعل — keeping الفاعل first would actually break a rule elsewhere in the sentence.`, list: false },
            { box: { title: 'Rule', lines: [`(١) الإِضْمارُ قَبْلَ الذِّكْرِ، (٢) الفاعِلُ ضَميرٌ مُتَّصِلٌ يَلْزَمُ اتِّصالُهُ، (٣) صَدارَةُ الكَلامِ`] } },
            { html: `(1) When keeping الفاعل first would force a pronoun inside المفعول به to refer back to الفاعل before الفاعل has actually been mentioned — never allowed; (2) the mirror image of the earlier rule: when المفعول به is an attached pronoun that must stay attached; (3) when المفعول به contains a word that must always open the sentence (<bdi>له صدر الكلام</bdi>), such as أسماء الاستفهام, which can never appear anywhere but the front.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَإِذِ ابْتَلَى إِبْراهيمَ رَبُّهُ﴾`, `﴿لَعَنَهُمُ اللهُ﴾`, `﴿فَأَيَّ آياتِ اللهِ تُنْكِرونَ﴾`] } },
            { html: `﴿وَإِذِ ابْتَلَى إِبْراهيمَ رَبُّهُ﴾ ("when his Lord tried Ibrāhīm"): saying ابْتَلَى رَبُّهُ إِبْراهيمَ would put the pronoun هُ inside رَبُّهُ, referring to إِبْراهيمَ, before إِبْراهيمَ itself is mentioned — never permitted. So إِبْراهيمَ (مفعول به) must come first. ﴿لَعَنَهُمُ اللهُ﴾ ("Allah has cursed them"): you cannot say لَعَنَ اللهُ إِيّاهُمْ, which would force the attached هُمُ off the verb into a detached إِيّاهُمْ; هُمُ (مفعول به) stays attached right after the verb, ahead of لَفْظُ الجَلالَةِ (فاعل). ﴿فَأَيَّ آياتِ اللهِ تُنْكِرونَ﴾ ("so which of the signs of Allah do you deny?"): أَيَّ آياتِ اللهِ (مفعول به, containing the استفهام word أَيّ) must open the sentence, since أسماء الاستفهام always claim صدر الكلام — so it precedes تُنْكِرونَ's فاعل, the مستتر ضمير أنتم.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `لَعَنَهُمُ اللهُ`,
                translation: `Allah has cursed them.`,
                cells: [`لَعَنَ`, `هُمُ`, `اللهُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ماضٍ` }, { start: 1, end: 1, role: `مفعول به مقدّم (ضمير متصل يلزم اتصاله)` }, { start: 2, end: 2, role: `فاعل مؤخّر مرفوع` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `In ﴿فَأَيَّ آياتِ اللهِ تُنْكِرونَ﴾, المفعول به أَيَّ آياتِ اللهِ opens the sentence, ahead of تُنْكِرونَ's فاعل. Which of the three وجوبًا reasons forces that order here?`,
            kind: 'mcq',
            options: [`صدارة الكلام — أسماء الاستفهام like أَيّ must always open the sentence`, `الإضمار قبل الذكر — a pronoun inside المفعول به needs its referent mentioned first`, `الفاعل ضمير متصل يلزم اتصاله`, `Nothing forces it; the order here is جوازًا, purely for بلاغة`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الفاعل's definition requires a فعل تام with a معلوم فاعله. What noun does الفعل المجهول attribute its action to instead?`, options: [`نائب الفاعل`, `اسم كان`, `الخبر`, `المبتدأ`], correct: 0 },
        { q: `In ﴿ما جاءَنا مِنْ بَشيرٍ﴾, بَشيرٍ appears مجرور بِمِنْ. What is its إعراب محلًّا?`, options: [`فاعل مرفوع محلًّا`, `مفعول به منصوب محلًّا`, `مبتدأ مرفوع محلًّا`, `مضاف إليه مجرور محلًّا فقط`], correct: 0 },
        { q: `Which order does الأصل في الترتيب establish for a verbal sentence with both a فاعل and a مفعول به?`, options: [`فعل + فاعل + مفعول به`, `فعل + مفعول به + فاعل`, `فاعل + فعل + مفعول به`, `مفعول به + فعل + فاعل`], correct: 0 },
        { q: `ضَرَبْتُ زَيْدًا cannot become ضَرَبَ زَيْدًا أَنا. Which وجوب تقديم الفاعل reason explains that?`, options: [`الفاعل ضمير متصل يلزم اتصاله`, `عدم وجود قرينة تميز الفاعل من المفعول به`, `صدارة الكلام`, `الإضمار قبل الذكر`], correct: 0 },
        { q: `نَصَرَتْ موسَى سَلْمَى keeps its meaning clear even with موسَى appearing right after the verb. What resolves the ambiguity here?`, options: [`قرينة لفظية — the feminine ending نَصَرَتْ signals سَلْمَى is الفاعل`, `قرينة معنوية — the reverse reading is impossible`, `صدارة الكلام`, `Nothing resolves it; the sentence is genuinely ambiguous`], correct: 0 },
        { q: `In ﴿وَإِذِ ابْتَلَى إِبْراهيمَ رَبُّهُ﴾, إِبْراهيمَ (مفعول به) must precede رَبُّهُ (فاعل). Which وجوبًا reason forces that?`, options: [`الإضمار قبل الذكر — the pronoun هُ inside رَبُّهُ needs إِبْراهيمَ mentioned first`, `الفاعل ضمير متصل يلزم اتصاله`, `صدارة الكلام`, `It is only جوازًا, for بلاغة`], correct: 0 },
      ],
      bank: [
        { title: `تعريف الفاعل`, kind: 'mcq', prompt: `Which of the following correctly defines الفاعل?`, options: [`That to which a complete, active-voice فعل (or something carrying its sense) is attributed`, `That to which a complete, passive-voice فعل is attributed`, `A noun free of any spoken governor, that something is predicated of`, `A حرف مصدر together with the جملة after it`], correct: 0 },
        { title: `لماذا "تام" في التعريف`, kind: 'mcq', prompt: `الفاعل's definition specifies a فعل تام. What does تامّ exclude, and what is that excluded verb's subject called instead?`, options: [`الفعل الناقص (like كان); its subject is called اسمه, not فاعل`, `الفعل المتعدي; its subject is called مفعول به`, `الفعل اللازم; it has no subject at all`, `الفعل المجهول; its subject is called نائب الفاعل`], correct: 0 },
        { title: `القاسية قلوبهم: اسم الفاعل`, kind: 'mcq', prompt: `In ﴿وَالْقاسِيَةِ قُلوبُهُمْ﴾, القاسِيَة is اسم الفاعل standing in for a verbal meaning. Is قُلوبُهُمْ still its فاعل?`, options: [`Yes — exactly the same role it held for the verb قَسَتْ in ﴿فَقَسَتْ قُلوبُهُمْ﴾`, `No — اسم الفاعل never takes a فاعل of its own`, `No — قُلوبُهُمْ becomes نائب الفاعل instead`, `Yes, but only as مفعول به`], correct: 0 },
        { title: `حالتا جر الفاعل لفظًا`, kind: 'mcq', prompt: `الفاعل's slot (محل) is always مرفوع, yet it can appear مجرور لفظًا in two situations. What are they?`, options: [`الإضافة إلى المصدر، أو حرف جر زائد (من أو الباء)`, `النداء، أو التنوين`, `الإضافة إلى مصدر فقط، بلا حالة أخرى`, `أل التعريف، أو الإسناد إليه`], correct: 0 },
        { title: `كذكركم آباءكم: الإضافة إلى المصدر`, kind: 'mcq', prompt: `In ﴿كَذِكْرِكُمْ آباءَكُمْ﴾, why is كُمْ analysed as فاعل محلًّا despite being مضاف إليه لفظًا؟`, options: [`Because ذِكْر is a مصدر, and a مصدر governs its فاعل the same way a verb does`, `Because كُمْ always carries the فاعل إعراب regardless of context`, `Because آباءَكُمْ is itself the true فاعل`, `Because إضافة never affects a pronoun's إعراب`], correct: 0 },
        { title: `وكفى بالله وكيلا: الباء الزائدة`, kind: 'mcq', prompt: `In ﴿وَكَفَى بِاللهِ وَكيلًا﴾, لَفْظُ الجَلالَةِ appears مجرورا بالباء. What is its إعراب محلًّا?`, options: [`فاعل مرفوع محلًّا لِـ كَفَى`, `مفعول به منصوب محلًّا`, `مضاف إليه مجرور محلًّا فقط`, `خبر مرفوع محلًّا`], correct: 0 },
        { title: `الأصل في الترتيب`, kind: 'mcq', prompt: `﴿وَوَرِثَ سُلَيْمانُ داوودَ﴾ places سُلَيْمانُ (فاعل) right after the verb, before داوودَ (مفعول به). What order does that illustrate?`, options: [`الأصل: فعل + فاعل + مفعول به`, `الأصل: فعل + مفعول به + فاعل`, `تقديم المفعول به وجوبًا`, `تقديم المفعول به جوازًا`], correct: 0 },
        { title: `زيد قام عند البصريين`, kind: 'mcq', prompt: `When الفاعل moves ahead of its own فعل, as in زَيْدٌ قامَ, how do جمهور النحاة (أهل البصرة) analyze the sentence?`, options: [`زَيْدٌ becomes مبتدأ, and قامَ with its مستتر ضمير هو becomes خبر`, `زَيْدٌ stays فاعل, simply مفصول from its عامل`, `زَيْدٌ becomes مفعول به مقدّم`, `The sentence becomes ungrammatical`], correct: 0 },
        { title: `زيد قام عند الكوفيين`, kind: 'mcq', prompt: `أهل الكوفة read the same sentence, زَيْدٌ قامَ, differently from أهل البصرة. How?`, options: [`زَيْدٌ remains فاعل, just فُصِلَ (separated) from its عامل قامَ`, `زَيْدٌ becomes مضاف إليه`, `قامَ becomes مبتدأ`, `Kufan grammarians reject the sentence as ungrammatical`], correct: 0 },
        { title: `زار موسى عيسى: الالتباس`, kind: 'mcq', prompt: `زارَ موسَى عيسَى keeps الفاعل first because reversing it would create genuine ambiguity. What makes the ambiguity possible here?`, options: [`Neither name carries a visible إعراب marker (لا يظهر عليهما إعراب), so word order is the only clue`, `Both names are مؤنث`, `The verb زارَ has no فاعل at all`, `عيسَى is مبني على الضم`], correct: 0 },
        { title: `زارت هذه تلك: لماذا لا يكفي التأنيث`, kind: 'mcq', prompt: `زارَتْ هذِهِ تِلْكَ still requires تقديم الفاعل, despite the feminine ending on the verb. Why doesn't that ending resolve the ambiguity?`, options: [`Both هذِهِ and تِلْكَ are already مؤنث, so تأنيث الفعل doesn't distinguish which one is doing the visiting`, `تأنيث never functions as a قرينة in Arabic`, `هذِهِ and تِلْكَ are actually مذكر`, `The verb here is مبني للمجهول`], correct: 0 },
        { title: `أكل الكمثرى موسى: قرينة معنوية`, kind: 'mcq', prompt: `أَكَلَ الكُمَّثْرَى موسَى puts المفعول به first, yet stays unambiguous. What kind of قرينة makes that possible?`, options: [`قرينة معنوية — a guava eating a person is impossible, so the intended فاعل is obvious`, `قرينة لفظية — a visible case ending settles it`, `صدارة الكلام`, `الإضمار قبل الذكر`], correct: 0 },
        { title: `نصرت موسى سلمى: قرينة لفظية`, kind: 'mcq', prompt: `نَصَرَتْ موسَى سَلْمَى puts المفعول به first without confusion. What kind of قرينة resolves it?`, options: [`قرينة لفظية — the feminine verb ending نَصَرَتْ marks سَلْمَى as الفاعل`, `قرينة معنوية — helping is a one-directional act`, `صدارة الكلام`, `There is no قرينة; the sentence is ambiguous`], correct: 0 },
        { title: `فما زالت تلك دعواهم: امتداد المبدأ`, kind: 'mcq', prompt: `﴿فَما زالَتْ تِلْكَ دَعْواهُمْ﴾ keeps تِلْكَ (اسم زالت) before دَعْواهُمْ (خبر زالت). Which principle from الفاعل والمفعول به does this extend to اسم كان وأخواتها?`, options: [`تقديم واجب عند الالتباس بلا قرينة، وجواز التأخير عند وجودها`, `الأصل أن يتأخر اسم كان دائمًا عن خبرها`, `اسم كان لا يتقدم أبدًا مهما وُجدت قرينة`, `هذا المبدأ خاص بالفاعل والمفعول به فقط، ولا يمتد لغيرهما`], correct: 0 },
        { title: `تقديم المفعول به جوازًا`, kind: 'mcq', prompt: `المفعول به can move ahead of الفاعل purely جوازًا. What governs that kind of fronting?`, options: [`بلاغة (style/balance), with no grammatical necessity either way`, `الإضمار قبل الذكر`, `صدارة الكلام`, `ضمير متصل يلزم اتصاله`], correct: 0 },
        { title: `ولقد جاء آل فرعون النذر`, kind: 'mcq', prompt: `In ﴿وَلَقَدْ جاءَ آلَ فِرْعَوْنَ النُّذُرُ﴾, آلَ فِرْعَوْنَ (مفعول به) precedes النُّذُرُ (فاعل). Why?`, options: [`Purely للبلاغة, often for وزن matching the surrounding rhyme — nothing forces it`, `الإضمار قبل الذكر`, `النُّذُرُ is a ضمير متصل`, `آلَ فِرْعَوْنَ contains أداة استفهام`], correct: 0 },
        { title: `وإذ ابتلى إبراهيم ربه: الإضمار قبل الذكر`, kind: 'mcq', prompt: `﴿وَإِذِ ابْتَلَى إِبْراهيمَ رَبُّهُ﴾ requires إِبْراهيمَ (مفعول به) before رَبُّهُ (فاعل). What would go wrong if the order were reversed?`, options: [`The pronoun هُ inside رَبُّهُ would refer to إِبْراهيمَ before إِبْراهيمَ is mentioned — never permitted`, `رَبُّهُ would become مبني`, `The verb ابْتَلَى would lose its فاعل entirely`, `Nothing — the reversed order is equally correct`], correct: 0 },
        { title: `لعنهم الله: ضمير متصل مفعول به`, kind: 'mcq', prompt: `﴿لَعَنَهُمُ اللهُ﴾ cannot become لَعَنَ اللهُ إِيّاهُمْ. Which وجوبًا reason explains why هُمُ must stay attached right after the verb?`, options: [`الفاعل ضمير متصل يلزم اتصاله — mirrored here for المفعول به`, `صدارة الكلام`, `الإضمار قبل الذكر`, `لَفْظُ الجَلالَةِ is صدر الكلام here`], correct: 0 },
        { title: `فأي آيات الله تنكرون: صدارة الكلام`, kind: 'mcq', prompt: `﴿فَأَيَّ آياتِ اللهِ تُنْكِرونَ﴾ opens with المفعول به أَيَّ آياتِ اللهِ. Why must it come first?`, options: [`أسماء الاستفهام like أَيّ always claim صدر الكلام — they can never appear anywhere but the front`, `أَيَّ آياتِ اللهِ is a ضمير متصل`, `تُنْكِرونَ has no فاعل at all`, `It is purely جوازًا, for وزن`], correct: 0 },
        { title: `الفرق بين تأخير الفاعل جوازًا وتقديم المفعول به وجوبًا`, kind: 'mcq', prompt: `أكل الكمثرى موسى allows المفعول به first only because a قرينة removes الالتباس (جوازًا). لعنهم الله requires it (وجوبًا). What separates the two cases?`, options: [`In لعنهم الله, keeping المفعول به after الفاعل is actually impossible (a ضمير متصل cannot detach); in أكل الكمثرى موسى, either order works and a قرينة merely permits fronting`, `There is no real difference; both are جوازًا`, `لعنهم الله is جوازًا and أكل الكمثرى موسى is وجوبًا`, `The difference is only about الماضي vs المضارع`], correct: 0 },
        {
          title: `تركيب: فَقَسَتْ قُلوبُهُمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ﴿فَقَسَتْ قُلوبُهُمْ﴾.`,
          source: `فَقَسَتْ قُلوبُهُمْ`,
          words: [`قَسَتْ`, `قُلوبُهُمْ`],
          labels: [`فعل ماضٍ`, `فاعل مرفوع`],
          distractors: [`مفعول به منصوب`, `نائب فاعل مرفوع`],
        },
        {
          title: `تركيب: ما جاءَنا مِنْ بَشيرٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿ما جاءَنا مِنْ بَشيرٍ﴾.`,
          source: `ما جاءَنا مِنْ بَشيرٍ`,
          words: [`ما`, `جاءَنا`, `مِنْ`, `بَشيرٍ`],
          labels: [`حرف نفي`, `فعل ماضٍ ومفعوله`, `حرف جر زائد`, `فاعل مجرور لفظًا مرفوع محلًّا`],
          distractors: [`مبتدأ`, `خبر`],
        },
        {
          title: `تركيب: وَكَفَى بِاللهِ وَكيلًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿وَكَفَى بِاللهِ وَكيلًا﴾.`,
          source: `كَفَى بِاللهِ وَكيلًا`,
          words: [`كَفَى`, `بِاللهِ`, `وَكيلًا`],
          labels: [`فعل ماضٍ`, `فاعل مجرور لفظًا بالباء مرفوع محلًّا`, `تمييز منصوب`],
          distractors: [`مفعول به منصوب`, `مبتدأ مرفوع`],
        },
        {
          title: `تركيب: وَوَرِثَ سُلَيْمانُ داوودَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ﴿وَوَرِثَ سُلَيْمانُ داوودَ﴾, in the default order.`,
          source: `وَرِثَ سُلَيْمانُ داوودَ`,
          words: [`وَرِثَ`, `سُلَيْمانُ`, `داوودَ`],
          labels: [`فعل ماضٍ`, `فاعل مرفوع`, `مفعول به منصوب`],
          distractors: [`نائب فاعل مرفوع`, `خبر منصوب`],
        },
        {
          title: `تركيب: ضَرَبْتُ زَيْدًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ضَرَبْتُ زَيْدًا.`,
          source: `ضَرَبْتُ زَيْدًا`,
          words: [`ضَرَبْ`, `تُ`, `زَيْدًا`],
          labels: [`فعل ماضٍ`, `فاعل (ضمير متصل يلزم اتصاله)`, `مفعول به منصوب`],
          distractors: [`مبتدأ`, `نائب فاعل`],
        },
        {
          title: `تركيب: لَعَنَهُمُ اللهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿لَعَنَهُمُ اللهُ﴾.`,
          source: `لَعَنَهُمُ اللهُ`,
          words: [`لَعَنَ`, `هُمُ`, `اللهُ`],
          labels: [`فعل ماضٍ`, `مفعول به مقدّم (ضمير متصل يلزم اتصاله)`, `فاعل مؤخّر مرفوع`],
          distractors: [`مبتدأ`, `نائب فاعل`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'نائب الفاعل',
      subtitle: 'The Subject-Substitute and the Topic — نائب الفاعل\'s mirror definition, لام التوكيد, and when a نكرة may open a sentence',
      concepts: [
        {
          heading: 'تعريف نائب الفاعل',
          lines: [
            { html: `<bdi>نائب الفاعل</bdi> is the second of the eight مرفوعات that make up المرفوع من الاسم — the mirror image of الفاعل, built on exactly the same definition with one word swapped.`, list: false },
            { box: { title: 'Definition', lines: [`نائِبُ الفاعِلِ: ما نُسِبَ إِلَيْهِ الفِعْلُ التّامُّ المَجْهولُ فاعِلُهُ، أَوْ ما بِمَعْناهُ`] } },
            { html: `نائب الفاعل is the noun a complete verb whose doer is unknown (<bdi>مجهول فاعله</bdi> — مبني للمجهول, a passive verb) is attributed to, or a noun that something carrying that same meaning, such as اسم المفعول, is attributed to. Compare it directly against الفاعل: الفاعل is نُسِبَ إِلَيْهِ الفِعْلُ ... المَعْلومُ فاعِلُهُ (known doer); نائب الفاعل is نُسِبَ إِلَيْهِ الفِعْلُ ... المَجْهولُ فاعِلُهُ (unknown doer). Everything else carries over unchanged: the same إعراب position (مرفوع), the same two-part structure.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَجُمِعَ الشَّمْسُ وَالْقَمَرُ﴾`, `﴿ذلِكَ يَوْمٌ مَجْموعٌ لَهُ النّاسُ﴾`] } },
            { html: `In ﴿وَجُمِعَ الشَّمْسُ وَالْقَمَرُ﴾ ("and the sun and the moon are brought together"), الشَّمْسُ وَالْقَمَرُ is نائب الفاعل of جُمِعَ, a passive verb — no one is told who brought them together, only that it happened to them. In ﴿ذلِكَ يَوْمٌ مَجْموعٌ لَهُ النّاسُ﴾ ("that is a Day for which mankind will be gathered"), مَجْموعٌ is اسم المفعول standing in for the passive verbal meaning, and النّاسُ is still its نائب فاعل — the same pattern القاسِيَة قُلوبُهُمْ showed for الفاعل.`, list: false },
          ],
          exercise: {
            prompt: `الفاعل and نائب الفاعل share the same definition except for one word. Which word changes, and how?`,
            kind: 'mcq',
            options: [`معلوم becomes مجهول — الفاعل's doer is known; نائب الفاعل's doer is unknown`, `تام becomes ناقص — الفاعل needs a complete verb; نائب الفاعل needs an incomplete one`, `مرفوع becomes منصوب — نائب الفاعل carries a different إعراب position`, `اسم becomes حرف — نائب الفاعل is never a noun`],
            correct: 0,
          },
        },
        {
          heading: 'شبه الجملة نائبًا عن الفاعل',
          lines: [
            { box: { title: 'Rule', lines: [`قَدْ يَكونُ شِبْهُ الجُمْلَةِ نائِبَ الفاعِلِ إِذا كانَ الفِعْلُ مُتَعَدِّيًا بِحَرْفِ جَرٍّ لا بِنَفْسِهِ`] } },
            { html: `When a verb doesn't normally take a direct مفعول به, but instead reaches its object only through a preposition (<bdi>متعدٍّ بحرف جر</bdi>), شبه الجملة (الجار والمجرور) itself can step in as نائب الفاعل once the verb is passivized — even though it isn't a single noun at all, but a whole جار ومجرور phrase.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَجيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾`] } },
            { html: `"And that Day, Hell will be brought forth." The underlying active sentence would be وَجاءَتِ المَلائِكَةُ بِجَهَنَّمَ ("and the angels will bring Hell") — بِجَهَنَّمَ (جار ومجرور) is مفعول به there, since جاءَ in this سببي sense only reaches its object through بِ, never directly. When the verb passivizes to جيءَ, no bare noun is available to promote — so بِجَهَنَّمَ, the whole شبه الجملة, takes the role itself. This runs exactly parallel to how مِنْ or الباء الزائدة made الفاعل appear مجرور لفظًا while staying مرفوع محلًّا: the surface form (جار ومجرور) doesn't match the underlying role (نائب فاعل, مرفوع محلًّا).`, list: false },
          ],
          exercise: {
            prompt: `﴿وَجيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾'s underlying active sentence is وَجاءَتِ المَلائِكَةُ بِجَهَنَّمَ, where بِجَهَنَّمَ is مفعول به. Why does the whole جار ومجرور بِجَهَنَّمَ, not a bare noun, become نائب الفاعل once the verb is passivized?`,
            kind: 'mcq',
            options: [`جاءَ in this سببي sense is متعدٍّ بحرف جر, not بنفسه, so no bare noun exists to promote — شبه الجملة itself steps in`, `شبه الجملة always outranks any bare noun as نائب الفاعل`, `جَهَنَّمَ is مبني, so it cannot itself be نائب الفاعل`, `The verb جيءَ has no فاعل requirement at all`],
            correct: 0,
          },
        },
        {
          heading: 'نوعا المبتدأ',
          lines: [
            { html: `<bdi>المبتدأ</bdi> is the third of the eight مرفوعات, and by far the most far-reaching — nearly every نكرة/معرفة, حذف، and تقديم/تأخير rule governing الجملة الاسمية gets worked out here.`, list: false },
            { box: { title: 'Definition', lines: [`المُبْتَدَأُ نَوْعانِ: (١) اسْمٌ مُجَرَّدٌ عَنْ عامِلٍ لَفْظِيٍّ مُسْنَدٌ إِلَيْهِ، (٢) اسْمٌ عامِلٌ رافِعٌ لِاسْمٍ ظاهِرٍ بَعْدَ نَفْيٍ أَوِ اسْتِفْهامٍ`] } },
            { html: `(1) A noun free of any visible governing element, that something is predicated of — the everyday, familiar مبتدأ, simply the topic of a nominal sentence; (2) a noun that itself governs, raising a following overt noun, when that noun (typically اسم الفاعل or a similar مشتق) appears after a نفي or استفهام — this second type behaves almost like a hidden verb clause packed into one noun.`, list: false },
            { box: { title: 'Example', lines: [`﴿مُحَمَّدٌ رَسولُ اللهِ﴾`, `﴿أَراغِبٌ أَنْتَ عَنْ آلِهَتي﴾`] } },
            { html: `In ﴿مُحَمَّدٌ رَسولُ اللهِ﴾, مُحَمَّدٌ is simply the topic; رَسولُ اللهِ is what's said about it. In ﴿أَراغِبٌ أَنْتَ عَنْ آلِهَتي﴾ ("do you dislike my gods?"), راغِبٌ (اسم فاعل) comes after the استفهام همزة and itself governs أَنْتَ as its فاعل — راغِبٌ isn't just sitting there as a topic; it's raising أَنْتَ the way a verb would.`, list: false },
            { box: { title: 'Careful', lines: [`يُسَمَّى هٰذا الاسْمُ العامِلُ المُبْتَدَأَ المُكْتَفِيَ بِمَرْفوعِهِ، أَيْ لا خَبَرَ لَهُ`] } },
            { html: `This governing type is called <bdi>المبتدأ المكتفي بمرفوعه</bdi> — "the مبتدأ that suffices with its own مرفوع," meaning it has no separate خبر, because راغِبٌ + أَنْتَ together already form a complete predication. There are, in fact, two valid ways to parse أَراغِبٌ أَنْتَ: (1) راغِبٌ is مبتدأ (النوع الثاني), and أَنْتَ is its فاعل سادّ مسدّ الخبر (standing in for the missing خبر); (2) أَنْتَ is itself the true مبتدأ, simply مُؤَخَّر, and راغِبٌ is خَبَرٌ مُقَدَّم. Both readings are grammatically legitimate — they simply carve up the same two words differently.`, list: false },
          ],
          exercise: {
            prompt: `أَراغِبٌ أَنْتَ has two valid grammatical readings. What are they?`,
            kind: 'mcq',
            options: [`(1) راغِبٌ مبتدأ مكتفٍ بمرفوعه وأَنْتَ فاعله سادّ مسدّ الخبر; (2) أَنْتَ مبتدأ مؤخّر وراغِبٌ خبر مقدّم`, `Only one reading is valid: راغِبٌ must be خبر مقدّم and أَنْتَ مبتدأ مؤخّر`, `(1) راغِبٌ فعل ماضٍ; (2) أَنْتَ فاعله`, `أَراغِبٌ أَنْتَ has no valid grammatical reading at all — it is a broken sentence`],
            correct: 0,
          },
        },
        {
          heading: 'دخول لام التوكيد على المبتدأ',
          lines: [
            { box: { title: 'Rule', lines: [`قَدْ تَدْخُلُ لامُ الِابْتِداءِ عَلى المُبْتَدَأِ، أَوْ عَلى الخَبَرِ إِذا كانَ مُقَدَّمًا`] } },
            { html: `A توكيد-particle لام may be prefixed onto المبتدأ itself, adding emphasis — or onto الخبر, if الخبر has been moved ahead of its مبتدأ (<bdi>خبر مقدّم</bdi>).`, list: false },
            { box: { title: 'Example', lines: [`﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾`, `لَكاذِبٌ أَنْتَ`] } },
            { html: `In ﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾ ("a believing slave is better than a polytheist"), اللام emphasizes عَبْدٌ, the مبتدأ. In لَكاذِبٌ أَنْتَ ("you are indeed a liar!"), كاذِبٌ is خبر مقدّم مؤكَّد باللام, أنت مبتدأ مؤخّر — اللام entered on the fronted خبر instead.`, list: false },
            { box: { title: 'Careful', lines: [`لامُ الِابْتِداءِ تَدْخُلُ أَيْضًا عَلى المُضارِعِ، وَالجامِدِ، وَالماضِي المَقْرونِ بِقَدْ`] } },
            { html: `لام الابتداء doesn't stop at الجملة الاسمية alone: it can also enter on a مضارع verb (لَأَقولُ الحَقَّ, "I will indeed speak the truth"), a جامد word (﴿لَبِئْسَ ما كانوا يَعْمَلونَ﴾), or a ماضٍ preceded by قَدْ (﴿لَقَدْ جاءَتْ رُسُلُ رَبِّنا بِالحَقِّ﴾). Some grammarians argue this لام is really a <bdi>لام قسم محذوف</bdi> — every one of these an implicit جواب قسم, as if a dropped وَلَفْظِ الجَلالَةِ preceded each one (لَقَدْ جاءَتْ... ≈ وَاللهِ لَقَدْ جاءَتْ...). Recognizing لام التوكيد's full range beyond المبتدأ alone helps explain why so many different sentence types carry this one particle.`, list: false },
          ],
          exercise: {
            prompt: `Some grammarians argue that لام التوكيد on forms like لَقَدْ جاءَتْ رُسُلُ رَبِّنا بِالحَقِّ is really something else entirely. What do they propose it stands in for?`,
            kind: 'mcq',
            options: [`لام قسم محذوف — every such sentence is treated as an implicit جواب قسم, as if a dropped وَلَفْظِ الجَلالَةِ preceded it`, `لام الجر, marking a dropped مجرور`, `لام الأمر, marking a dropped فعل أمر`, `لام التعليل, marking a dropped سبب`],
            correct: 0,
          },
        },
        {
          heading: 'تنكير المبتدأ: التخصيص والتعميم',
          lines: [
            { box: { title: 'Rule', lines: [`الأَصْلُ فِي المُبْتَدَأِ أَنْ يَكونَ مَعْرِفَةً، وَيَجوزُ أَنْ يَكونَ نَكِرَةً إِذا كانَتْ مُفيدَةً`] } },
            { html: `A نكرة is allowed to open a nominal sentence only when it's "informative" enough on its own — not so vague that the listener is left without a clear topic. A نكرة earns that informativeness in two broad ways: being <bdi>مَخْصوصَة</bdi> (narrowed down) or being <bdi>عامّة</bdi> (made general enough that vagueness stops mattering).`, list: false },
            { html: `مخصوصة narrows down either بالإضافة or بالوصف, and either لفظًا or تقديرًا (i.e. an understood one).`, list: false },
            { box: { title: 'Example', lines: [`خَمْسُ صَلَواتٍ كَتَبَهُنَّ اللهُ`, `﴿كُلٌّ يَعْمَلُ عَلى شاكِلَتِهِ﴾`, `﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾`, `﴿وَطائِفَةٌ قَدْ اَهَمَّتْهُمْ اَنْفُسُهُمْ﴾`] } },
            { html: `In خَمْسُ صَلَواتٍ كَتَبَهُنَّ اللهُ ("five prayers, which Allah has prescribed"), خَمْسُ is narrowed بالإضافة لفظًا to صَلَواتٍ. In ﴿كُلٌّ يَعْمَلُ عَلى شاكِلَتِهِ﴾ ("everyone acts according to his own way"), كُلٌّ implicitly means كُلُّ أَحَدٍ — narrowed بالإضافة تقديرًا, even though nothing follows it on the surface. In ﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾, عَبْدٌ is narrowed بالوصف لفظًا by مُؤْمِنٌ. In ﴿وَطائِفَةٌ قَدْ اَهَمَّتْهُمْ اَنْفُسُهُمْ﴾ ("and a group whom their own souls preoccupied"), طائِفَةٌ is implicitly narrowed بالوصف تقديرًا by a dropped صفة, مِنْهُمْ, even though it isn't written.`, list: false },
            { html: `عامّة, by contrast, needs no further narrowing — it works after النفي or الاستفهام, since the negation or question itself already makes the noun's generality the whole point.`, list: false },
            { box: { title: 'Example', lines: [`ما أَحَدٌ خَيْرًا مِنْ أَحَدٍ إِلّا بِالتَّقْوَى`, `﴿ءَاِلٰهٌ مَعَ اللهِ﴾`] } },
            { html: `In ما أَحَدٌ خَيْرًا مِنْ أَحَدٍ إِلّا بِالتَّقْوَى ("no one is better than anyone else except through piety"), أَحَدٌ works as مبتدأ precisely because النفي already makes its generality the point. In ﴿ءَاِلٰهٌ مَعَ اللهِ﴾ ("is there a god besides Allah?"), إِلٰهٌ works as مبتدأ because الاستفهام itself asks about existence in general, not some specific, already-known إله.`, list: false },
          ],
          exercise: {
            prompt: `﴿كُلٌّ يَعْمَلُ عَلى شاكِلَتِهِ﴾ opens with the نكرة كُلٌّ as مبتدأ, with nothing visibly following it. How does كُلٌّ still count as مخصوصة rather than a bare, uninformative نكرة?`,
            kind: 'mcq',
            options: [`It carries an understood إضافة تقديرًا — أَيْ كُلُّ أَحَدٍ`, `It comes after الاستفهام, which alone licenses it`, `It comes after النفي, which alone licenses it`, `كُلٌّ is actually معرفة, not نكرة, so no narrowing is needed`],
            correct: 0,
          },
        },
        {
          heading: 'حالات أخرى لنكرة مبتدأ، وحذف المبتدأ جوازًا',
          lines: [
            { html: `Three further scenarios let a نكرة work as مبتدأ beyond مخصوصة and عامّة.`, list: false },
            { box: { title: 'Rule', lines: [`(١) خَبَرُهُ شِبْهُ جُمْلَةٍ مُتَقَدِّمٌ عَلَيْهِ، (٢) بَعْدَ إِذا الفُجائِيَّةِ، (٣) إِذا كانَتِ الجُمْلَةُ دُعاءً`] } },
            { html: `(1) When its خبر is a شبه جملة (جار ومجرور or ظرف) and that خبر has been fronted ahead of it; (2) when it comes right after إذا الفجائية ("the surprise إذا"); (3) when the whole sentence is itself a دعاء — a prayer or invocation, for or against someone.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَفَوْقَ كُلِّ ذِي عِلْمٍ عَليمٌ﴾`, `«فَإِذا رَجُلٌ قاعِدٌ»`, `﴿سَلامٌ عَلَيْكُمْ﴾`, `﴿وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ﴾`] } },
            { html: `﴿وَفَوْقَ كُلِّ ذِي عِلْمٍ عَليمٌ﴾ ("and above every possessor of knowledge is one more knowing"): فَوْقَ (شبه جملة) is fronted, letting the نكرة عَليمٌ serve as مبتدأ مؤخّر. From حديث الإسراء والمعراج: «عَلَوْنا السَّماءَ الدُّنْيا، فَإِذا رَجُلٌ قاعِدٌ» ("we ascended to the lowest heaven, and suddenly there was a man sitting") — رَجُلٌ works as مبتدأ purely because of إذا الفجائية.`, list: false },
            { html: `﴿سَلامٌ عَلَيْكُمْ﴾ ("peace be upon you") and ﴿وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ﴾ ("woe to every scorner and slanderer!") are both نكرة working as مبتدأ because each sentence is itself a دعاء, one a blessing and the other a curse.`, list: false },
            { box: { title: 'Rule', lines: [`يَجوزُ حَذْفُ المُبْتَدَأِ إِذا دَلَّتْ عَلَيْهِ قَرينَةٌ، وَخاصَّةً بَعْدَ فاءِ الجَوابِ أَوِ القَوْلِ`] } },
            { html: `المبتدأ may be dropped whenever context (<bdi>قرينة</bdi>) makes it recoverable without loss of clarity — two situations make this especially common.`, list: false },
            { box: { title: 'Example', lines: [`﴿مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ﴾`, `﴿وَقَالُوا اَسَاطِيرُ الْاَوَّلِينَ﴾`] } },
            { html: `In ﴿مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ﴾ ("whoever does righteousness, it is for his own soul"), أَيْ فَعَمَلُهُ [لِنَفْسِهِ] — the مبتدأ عَمَلُهُ is dropped after فاء الجواب, leaving just its خبر لِنَفْسِهِ. In ﴿وَقَالُوا اَسَاطِيرُ الْاَوَّلِينَ﴾ ("and they said, these are legends of the former peoples"), أَيْ هِيَ أَساطيرُ الأَوَّلينَ — the مبتدأ هِيَ is dropped right after القول.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ﴾, لِنَفْسِهِ appears right after الفاء with no visible مبتدأ before it. What is the dropped مبتدأ understood to be, and where does this kind of حذف commonly occur?`,
            kind: 'mcq',
            options: [`عَمَلُهُ, understood from context — dropping is especially common right after فاء الجواب`, `هُوَ, understood from context — dropping is especially common after النداء`, `Nothing is dropped; لِنَفْسِهِ is itself المبتدأ`, `الرَّجُلُ, understood from context — dropping only happens after الاستفهام`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `الفاعل and نائب الفاعل share the same underlying definition apart from one word. What is that word, in each direction?`, options: [`معلوم فاعله for الفاعل, مجهول فاعله for نائب الفاعل`, `مرفوع for الفاعل, منصوب for نائب الفاعل`, `تام for الفاعل, ناقص for نائب الفاعل`, `اسم for الفاعل, حرف for نائب الفاعل`], correct: 0 },
        { q: `﴿وَجيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾ has a شبه الجملة, not a bare noun, serving as نائب الفاعل. What condition on the underlying verb makes that possible?`, options: [`The verb (جاءَ in its سببي sense) is متعدٍّ بحرف جر, not بنفسه`, `The verb is مضارع, not ماضٍ`, `شبه الجملة can always replace a bare noun as نائب الفاعل, with no condition`, `The verb has no فاعل at all in its active form`], correct: 0 },
        { q: `In ﴿أَراغِبٌ أَنْتَ عَنْ آلِهَتي﴾, راغِبٌ is called المبتدأ المكتفي بمرفوعه on one valid reading. What does مكتفٍ بمرفوعه mean here?`, options: [`It has no separate خبر — راغِبٌ and أَنْتَ together already form a complete predication`, `It requires two separate أخبار`, `It can never take a فاعل`, `It is معرفة, not نكرة`], correct: 0 },
        { q: `لَكاذِبٌ أَنْتَ carries لام التوكيد on كاذِبٌ rather than on أنت. Why?`, options: [`كاذِبٌ is خبر مقدّم here, and لام الابتداء may enter on a fronted خبر`, `لام الابتداء can never enter on المبتدأ itself`, `أنت already carries an implicit لام`, `كاذِبٌ is فعل ماضٍ, not خبر`], correct: 0 },
        { q: `﴿كُلٌّ يَعْمَلُ عَلى شاكِلَتِهِ﴾ opens with the نكرة كُلٌّ and nothing visibly narrows it. How does it still count as مخصوصة؟`, options: [`By an understood إضافة تقديرًا (أَيْ كُلُّ أَحَدٍ)`, `By coming after الاستفهام`, `By coming after النفي`, `It doesn't — كُلٌّ here is actually ungrammatical as مبتدأ`], correct: 0 },
        { q: `«فَإِذا رَجُلٌ قاعِدٌ» lets the نكرة رَجُلٌ serve as مبتدأ. Which of the scenarios for نكرة مبتدأ does that illustrate?`, options: [`بعد إذا الفجائية`, `الجملة دعاء`, `خبره شبه جملة متقدّم عليه`, `بعد النفي`], correct: 0 },
      ],
      bank: [
        { title: `تعريف نائب الفاعل`, kind: 'mcq', prompt: `Which of the following correctly defines نائب الفاعل؟`, options: [`That to which a complete, passive-voice فعل (or something carrying its sense) is attributed`, `That to which a complete, active-voice فعل is attributed`, `A governing noun that puts an overt noun in رفع after a نفي or استفهام`, `A noun free of any spoken governor, that something is predicated of`], correct: 0 },
        { title: `وجمع الشمس والقمر`, kind: 'mcq', prompt: `In ﴿وَجُمِعَ الشَّمْسُ وَالْقَمَرُ﴾, the verb جُمِعَ never names who did the gathering. What is الشَّمْسُ وَالْقَمَرُ's role?`, options: [`نائب الفاعل`, `فاعل`, `مفعول به`, `مبتدأ`], correct: 0 },
        { title: `ذلك يوم مجموع له الناس`, kind: 'mcq', prompt: `In ﴿ذلِكَ يَوْمٌ مَجْموعٌ لَهُ النّاسُ﴾, مَجْموعٌ is اسم المفعول standing in for a passive verbal meaning. What role does النّاسُ still play?`, options: [`نائب فاعل of مَجْموعٌ`, `فاعل of مَجْموعٌ`, `مفعول به of مَجْموعٌ`, `مضاف إليه of مَجْموعٌ`], correct: 0 },
        { title: `شرط شبه الجملة نائبًا عن الفاعل`, kind: 'mcq', prompt: `شبه الجملة can serve as نائب الفاعل only under one condition on the underlying verb. What is it?`, options: [`الفعل متعدٍّ بحرف جر, not بنفسه`, `الفعل لازم بنفسه`, `الفعل مضارع فقط`, `الفعل يقبل نون التوكيد`], correct: 0 },
        { title: `وجيء يومئذ بجهنم: الأصل`, kind: 'mcq', prompt: `﴿وَجيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾'s underlying active sentence is given as وَجاءَتِ المَلائِكَةُ بِجَهَنَّمَ. What role does بِجَهَنَّمَ play there, before the verb is passivized؟`, options: [`مفعول به`, `فاعل`, `نائب فاعل`, `مبتدأ`], correct: 0 },
        { title: `نوعا المبتدأ: التمييز`, kind: 'mcq', prompt: `محمد رسول الله shows one type of المبتدأ; أراغب أنت عن آلهتي shows the other. Which is which؟`, options: [`محمد: اسم مجرد عن عامل لفظي مسند إليه؛ راغب: اسم عامل رافع لاسم ظاهر بعد استفهام`, `محمد: اسم عامل؛ راغب: اسم مجرد عن عامل`, `Both illustrate the same type`, `محمد is not مبتدأ at all here`], correct: 0 },
        { title: `المبتدأ المكتفي بمرفوعه`, kind: 'mcq', prompt: `Why is راغِبٌ in أَراغِبٌ أَنْتَ called المبتدأ المكتفي بمرفوعه?`, options: [`Because it has no separate خبر — its own مرفوع (أَنْتَ) already completes the predication`, `Because it can never appear after استفهام`, `Because it always carries تنوين`, `Because it is معرفة by definition`], correct: 0 },
        { title: `القراءتان الجائزتان لأراغب أنت`, kind: 'mcq', prompt: `أَراغِبٌ أَنْتَ has two valid grammatical parses. In the second one, what role does أَنْتَ play?`, options: [`مبتدأ مؤخّر, with راغِبٌ as خبر مقدّم`, `فاعل سادّ مسدّ الخبر, with راغِبٌ as مبتدأ`, `مفعول به of راغِبٌ`, `مضاف إليه of راغِبٌ`], correct: 0 },
        { title: `لام الابتداء على المبتدأ`, kind: 'mcq', prompt: `In ﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾, اللام emphasizes which word?`, options: [`عَبْدٌ, the مبتدأ`, `خَيْرٌ, the خبر`, `مُشْرِكٍ, the مضاف إليه`, `مُؤْمِنٌ, the نعت`], correct: 0 },
        { title: `لام الابتداء على الخبر المقدم`, kind: 'mcq', prompt: `لَكاذِبٌ أَنْتَ means "you are indeed a liar!" What role does كاذِبٌ play, carrying the لام?`, options: [`خبر مقدّم مؤكَّد باللام`, `مبتدأ مؤكَّد باللام`, `فاعل مؤكَّد باللام`, `مفعول به مؤكَّد باللام`], correct: 0 },
        { title: `لام الابتداء على المضارع والماضي المقرون بقد`, kind: 'mcq', prompt: `لام الابتداء can enter on more than الجملة الاسمية; لَأَقولُ الحَقَّ and ﴿لَقَدْ جاءَتْ رُسُلُ رَبِّنا بِالحَقِّ﴾ show it entering on which two forms?`, options: [`المضارع, and الماضي المقرون بقد`, `الأمر, and المصدر`, `الجامد فقط`, `الحال والتمييز`], correct: 0 },
        { title: `لام قسم محذوف`, kind: 'mcq', prompt: `Some grammarians treat forms like لَقَدْ جاءَتْ رُسُلُ رَبِّنا بِالحَقِّ as carrying a دdropped word before them. What is it?`, options: [`وَلَفْظِ الجَلالَةِ — every such sentence is an implicit جواب قسم`, `يا — an implicit نداء`, `إنّ — an implicit توكيد حرف`, `لا — an implicit نفي`], correct: 0 },
        { title: `الأصل في المبتدأ: معرفة`, kind: 'mcq', prompt: `What is الأصل (the default) for المبتدأ's definiteness, and when is a نكرة allowed instead?`, options: [`The default is معرفة; a نكرة is allowed if it is مفيدة (conveys useful information)`, `The default is always نكرة`, `المبتدأ can never be نكرة, no matter what قرينة exists`, `معرفة and نكرة are equally the default, with no difference`], correct: 0 },
        { title: `خمس صلوات: التخصيص بالإضافة لفظًا`, kind: 'mcq', prompt: `خَمْسُ صَلَواتٍ كَتَبَهُنَّ اللهُ opens with the نكرة خَمْسُ. How is it خُصِّصَت here؟`, options: [`بالإضافة لفظًا إلى صَلَواتٍ`, `بالإضافة تقديرًا`, `بالوصف لفظًا`, `بعد النفي`], correct: 0 },
        { title: `ولعبد مؤمن: التخصيص بالوصف لفظًا`, kind: 'mcq', prompt: `In ﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾, what narrows the نكرة عَبْدٌ enough to serve as مبتدأ?`, options: [`الوصف لفظًا, بـ مُؤْمِنٌ`, `الإضافة لفظًا`, `الإضافة تقديرًا`, `الاستفهام`], correct: 0 },
        { title: `وطائفة قد أهمتهم أنفسهم: التخصيص بالوصف تقديرًا`, kind: 'mcq', prompt: `﴿وَطائِفَةٌ قَدْ اَهَمَّتْهُمْ اَنْفُسُهُمْ﴾ narrows طائِفَةٌ by an implicit صفة never written. What is it understood to be?`, options: [`مِنْهُمْ — أَيْ طائِفَةٌ مِنْهُمْ`, `مُؤْمِنَةٌ — أَيْ طائِفَةٌ مُؤْمِنَةٌ`, `كَبيرَةٌ — أَيْ طائِفَةٌ كَبيرَةٌ`, `No صفة is implied; طائِفَةٌ is عامّة instead`], correct: 0 },
        { title: `ما أحد خيرا من أحد إلا بالتقوى: نكرة عامة بعد النفي`, kind: 'mcq', prompt: `ما أَحَدٌ خَيْرًا مِنْ أَحَدٍ إِلّا بِالتَّقْوَى lets the bare نكرة أَحَدٌ serve as مبتدأ. What licenses it?`, options: [`Coming after النفي, which makes its generality the whole point`, `An implicit إضافة تقديرًا`, `An implicit صفة تقديرًا`, `Coming after إذا الفجائية`], correct: 0 },
        { title: `أإله مع الله: نكرة عامة بعد الاستفهام`, kind: 'mcq', prompt: `﴿ءَاِلٰهٌ مَعَ اللهِ﴾ lets the bare نكرة إِلٰهٌ serve as مبتدأ. Why?`, options: [`الاستفهام itself asks about existence in general, not a specific already-known إله`, `إِلٰهٌ carries an implicit إضافة`, `إِلٰهٌ carries an implicit صفة`, `الجملة here is دعاء`], correct: 0 },
        { title: `وفوق كل ذي علم عليم: خبر شبه جملة مقدم`, kind: 'mcq', prompt: `﴿وَفَوْقَ كُلِّ ذِي عِلْمٍ عَليمٌ﴾ lets the نكرة عَليمٌ serve as مبتدأ مؤخّر. What licenses it?`, options: [`Its خبر, the شبه الجملة فَوْقَ كُلِّ ذِي عِلْمٍ, has been fronted ahead of it`, `It comes after النفي`, `It comes after الاستفهام`, `الجملة هنا دعاء`], correct: 0 },
        { title: `فإذا رجل قاعد: بعد إذا الفجائية`, kind: 'mcq', prompt: `«فَإِذا رَجُلٌ قاعِدٌ» lets the نكرة رَجُلٌ serve as مبتدأ. What licenses it?`, options: [`إذا الفجائية alone`, `An implicit إضافة`, `النفي`, `الاستفهام`], correct: 0 },
        { title: `سلام عليكم وويل لكل همزة لمزة: الدعاء`, kind: 'mcq', prompt: `﴿سَلامٌ عَلَيْكُمْ﴾ and ﴿وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ﴾ both let a bare نكرة serve as مبتدأ. What single scenario covers both, despite one being a blessing and the other a curse?`, options: [`إذا كانت الجملة دعاء`, `بعد الاستفهام`, `بعد النفي`, `خبره شبه جملة متقدّم عليه`], correct: 0 },
        { title: `حذف المبتدأ بعد فاء الجواب`, kind: 'mcq', prompt: `In ﴿مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ﴾, what مبتدأ is dropped right after الفاء, leaving only لِنَفْسِهِ as its خبر?`, options: [`عَمَلُهُ`, `هُوَ`, `الرَّجُلُ`, `الجَزاءُ`], correct: 0 },
        { title: `حذف المبتدأ بعد القول`, kind: 'mcq', prompt: `In ﴿وَقَالُوا اَسَاطِيرُ الْاَوَّلِينَ﴾, what مبتدأ is dropped right after قالوا؟`, options: [`هِيَ`, `هُمْ`, `ذٰلِكَ`, `أَنْتَ`], correct: 0 },
        {
          title: `تركيب: وَجُمِعَ الشَّمْسُ وَالْقَمَرُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿وَجُمِعَ الشَّمْسُ وَالْقَمَرُ﴾.`,
          source: `جُمِعَ الشَّمْسُ وَالْقَمَرُ`,
          words: [`جُمِعَ`, `الشَّمْسُ`, `وَالْقَمَرُ`],
          labels: [`فعل ماضٍ مبني للمجهول`, `نائب فاعل مرفوع`, `معطوف على نائب الفاعل مرفوع`],
          distractors: [`فاعل مرفوع`, `مفعول به منصوب`],
        },
        {
          title: `تركيب: مُحَمَّدٌ رَسولُ اللهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ﴿مُحَمَّدٌ رَسولُ اللهِ﴾.`,
          source: `مُحَمَّدٌ رَسولُ اللهِ`,
          words: [`مُحَمَّدٌ`, `رَسولُ`, `اللهِ`],
          labels: [`مبتدأ مرفوع`, `خبر مرفوع`, `مضاف إليه مجرور`],
          distractors: [`فاعل مرفوع`, `نائب فاعل مرفوع`],
        },
        {
          title: `تركيب: وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾.`,
          source: `لَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ`,
          words: [`لَعَبْدٌ`, `مُؤْمِنٌ`, `خَيْرٌ`],
          labels: [`مبتدأ مؤكَّد باللام (نكرة مخصوصة بالوصف)`, `نعت لعبد`, `خبر مرفوع`],
          distractors: [`فاعل مرفوع`, `مضاف إليه`],
        },
        {
          title: `تركيب: خَمْسُ صَلَواتٍ كَتَبَهُنَّ اللهُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of خَمْسُ صَلَواتٍ كَتَبَهُنَّ اللهُ.`,
          source: `خَمْسُ صَلَواتٍ كَتَبَهُنَّ اللهُ`,
          words: [`خَمْسُ`, `صَلَواتٍ`, `كَتَبَهُنَّ اللهُ`],
          labels: [`مبتدأ مرفوع (نكرة مخصوصة بالإضافة)`, `مضاف إليه مجرور`, `جملة فعلية في محل رفع خبر`],
          distractors: [`فاعل مرفوع`, `نعت مرفوع`],
        },
        {
          title: `تركيب: مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ﴾.`,
          source: `مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ`,
          words: [`مَنْ`, `عَمِلَ صَالِحًا`, `فَلِنَفْسِهِ`],
          labels: [`اسم شرط مبتدأ`, `فعل الشرط ومفعوله`, `خبر لمبتدأ محذوف تقديره عَمَلُهُ`],
          distractors: [`فاعل مرفوع`, `نائب فاعل مرفوع`],
        },
        {
          title: `تركيب: سَلامٌ عَلَيْكُمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿سَلامٌ عَلَيْكُمْ﴾.`,
          source: `سَلامٌ عَلَيْكُمْ`,
          words: [`سَلامٌ`, `عَلَيْكُمْ`],
          labels: [`مبتدأ مرفوع (نكرة لأن الجملة دعاء)`, `خبر (شبه جملة)`],
          distractors: [`فاعل مرفوع`, `نائب فاعل مرفوع`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'حذف المبتدأ',
      subtitle: 'When the Topic Must Be Dropped — the four positions where leaving المبتدأ in place would itself be wrong',
      concepts: [
        {
          heading: 'أربعة مواضع لوجوب الحذف',
          lines: [
            { box: { title: 'Rule', lines: [`يَجِبُ حَذْفُ المُبْتَدَأِ فِي أَرْبَعَةِ مَواضِعَ`] } },
            { html: `Unlike the جواز حذف المبتدأ covered earlier — where dropping is merely permitted when قرينة makes it recoverable — four situations exist where المبتدأ isn't just droppable: leaving it in place would actually be wrong.`, list: false },
          ],
          exercise: {
            prompt: `The earlier rule on حذف المبتدأ جوازًا makes dropping merely optional whenever a قرينة supplies it. How does وجوب الحذف differ from that?`,
            kind: 'mcq',
            options: [`In these four مواضع the مبتدأ must be dropped — keeping it stated would itself be incorrect, not just unnecessary`, `وجوب الحذف means the exact opposite: the مبتدأ can never be dropped in these four مواضع`, `There is no real difference between جوازًا and وجوبًا here`, `وجوب الحذف only applies to المبتدأ المكتفي بمرفوعه`], correct: 0,
          },
        },
        {
          heading: 'الموضع الأول: النعت المقطوع إلى الرفع',
          lines: [
            { html: `Normally a نعت agrees in إعراب with its منعوت. For extra emphasis, a speaker can "cut" (<bdi>قطع</bdi>) that agreement instead — switching النعت to مرفوع and letting it stand on its own as خبر of a dropped مبتدأ هو.`, list: false },
            { box: { title: 'Example', lines: [`الحَمْدُ لله الحَميدُ`] } },
            { html: `"All praise is for Allah, the Praiseworthy." الحَميدُ, describing لَفْظِ الجَلالَةِ (مجرور here as مضاف إليه), would normally also be مجرور (الحَميدِ) to match. Instead it's cut loose and made مرفوع — أَيْ هُوَ الحَميدُ — turning the description into its own emphatic little sentence.`, list: false },
            { html: `The same قطع pattern can go the other way, cutting a نعت into النصب rather than الرفع, again for emphasis.`, list: false },
            { box: { title: 'Example', lines: [`﴿تَبَّتْ يَدا أَبي لَهَبٍ وَتَبَّ * وَامْرَأَتُهُ حَمّالَةَ الحَطَبِ﴾`] } },
            { html: `Sūrat al-Masad opens with this آية: حَمّالَةَ الحَطَبِ describes امْرَأَتُهُ (مرفوعة, معطوفة على تَبَّ's فاعل), yet حَمّالَةَ itself appears منصوبة — cut away from matching امْرَأَتُهُ's رفع, precisely to sharpen the condemnation (أَذُمُّها حَمّالَةَ الحَطَبِ, "I condemn her — a carrier of firewood!").`, list: false },
          ],
          exercise: {
            prompt: `الحَمْدُ لله الحَميدُ keeps الحَميدُ مرفوعًا, even though it describes لَفْظِ الجَلالَةِ, which is مجرور as مضاف إليه. What does that مرفوع النعت signal?`,
            kind: 'mcq',
            options: [`قطع (cutting the نعت loose for emphasis) — it stands as خبر of a dropped مبتدأ هو (أَيْ هُوَ الحَميدُ)`, `A simple grammatical error the matn overlooks`, `That الحَميدُ is actually مضاف إليه too, agreeing with لَفْظِ الجَلالَةِ`, `That the whole phrase is مبني, not معرب`], correct: 0,
          },
        },
        {
          heading: 'الموضع الثاني: دلالة جواب القسم',
          lines: [
            { box: { title: 'Rule', lines: [`يُحْذَفُ المُبْتَدَأُ وُجوبًا إِنْ دَلَّ عَلَيْهِ جَوابُ القَسَمِ`] } },
            { html: `When the جواب القسم that follows already makes clear that a solemn undertaking is being made, المبتدأ describing that undertaking must drop.`, list: false },
            { box: { title: 'Example', lines: [`فِي ذِمَّتي لَأَقولَنَّ الصِّدْقَ`] } },
            { html: `"Upon my honor, I will surely speak the truth." أَيْ فِي ذِمَّتي عَهْدٌ (or وَعْدٌ or قَسَمٌ) — the مبتدأ عَهْدٌ is dropped, because the جواب القسم that follows (لَأَقولَنَّ) already makes clear that a solemn undertaking (في ذمتي ...) is being made.`, list: false },
          ],
          exercise: {
            prompt: `في ذِمَّتي لَأَقولَنَّ الصِّدْقَ drops its مبتدأ before في ذمتي. What is that dropped مبتدأ understood to be, and what signals it's safe to drop?`,
            kind: 'mcq',
            options: [`عَهْدٌ (or وَعْدٌ/قَسَمٌ) — the جواب القسم لَأَقولَنَّ that follows already makes the solemn undertaking clear`, `هُوَ — dropped simply because المبتدأ is always droppable before في`, `الصِّدْقَ itself — moved from مفعول به into مبتدأ`, `أَنا — dropped because الفعل is مضارع`], correct: 0,
          },
        },
        {
          heading: 'الموضع الثالث: الخبر مصدر نائب عن فعله',
          lines: [
            { html: `When الخبر is itself a مصدر standing in for a dropped command-verb, المبتدأ before it must drop too.`, list: false },
            { box: { title: 'Example', lines: [`﴿فَصَبْرٌ جَميلٌ﴾`] } },
            { html: `"So, let there be beautiful patience." أَيْ صَبْري أَوْ أَمْري صَبْرٌ جَميلٌ.`, list: false },
            { html: `أَصْلُهُ: اِصْبِرْ صَبْرًا جَميلًا ("be beautifully patient") — the imperative اِصْبِرْ is dropped, its own مصدر (originally منصوب, صَبْرًا) switches to مرفوع (صَبْرٌ), and the shift itself carries meaning: turning a فعل (which suggests a one-off happening) into an اسم/جملة اسمية signals ثبات ودوام — patience not as a single act, but as a settled, lasting state.`, list: false },
          ],
          exercise: {
            prompt: `﴿فَصَبْرٌ جَميلٌ﴾'s أصل is اِصْبِرْ صَبْرًا جَميلًا, where صَبْرًا was منصوب as a مصدر نائب عن فعله. What does switching صَبْرًا to صَبْرٌ (خبر مرفوع of a dropped مبتدأ) accomplish beyond the grammar itself?`,
            kind: 'mcq',
            options: [`It signals ثبات ودوام — patience as a settled, lasting state, rather than a فعل's one-off happening`, `Nothing — the shift is purely grammatical, with no added meaning`, `It changes الصبر from مفرد to جمع`, `It turns the imperative into a question`], correct: 0,
          },
        },
        {
          heading: 'الموضع الرابع: الخبر مخصوص بمدح أو ذم',
          lines: [
            { box: { title: 'Example', lines: [`نِعْمَ الطّالِبُ المُجْتَهِدُ`, `بِئْسَ الطّالِبُ الكَسولُ`] } },
            { html: `"How excellent a student is the diligent one!" أَيْ هُوَ المُجْتَهِدُ. "How wretched a student is the lazy one!" أَيْ هُوَ الكَسولُ. In both, المخصوص (المُجْتَهِدُ / الكَسولُ) is خبر of a dropped مبتدأ هو.`, list: false },
            { box: { title: 'Careful', lines: [`اِخْتَلَفَ النُّحاةُ: بَعْضُهُمْ يَقولُ الحَذْفُ واجِبٌ، وَبَعْضُهُمْ يَقولُ جائِزٌ`] } },
            { html: `النحاة differ here: some say the حذف is واجب, others say جائز. The well-known position (<bdi>المشهور</bdi>) is that المخصوص (المُجْتَهِدُ / الكَسولُ) is مُبْتَدَأٌ مُؤَخَّرٌ, and الجُمْلَةُ قَبْلَهُ (نِعْمَ الطّالِبُ / بِئْسَ الطّالِبُ) is خَبَرٌ مُقَدَّمٌ — that is, المخصوص forms its own complete جملة اسمية (هو المجتهد), which itself serves as خبر مقدّم for a dropped هو, while نعم/بئس + طالب is a separate جملة فعلية entirely. This is a case where the matn itself flags open disagreement among grammarians rather than settling on one analysis — worth sitting with both readings rather than memorizing just one as "the" answer.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `نِعْمَ الطّالِبُ المُجْتَهِدُ`,
                translation: `How excellent a student is the diligent one!`,
                cells: [`نِعْمَ`, `الطّالِبُ`, `المُجْتَهِدُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ماضٍ جامد للمدح` }, { start: 1, end: 1, role: `فاعل نعم مرفوع` }, { start: 2, end: 2, role: `مخصوص بالمدح (خبر لمبتدأ محذوف تقديره هو)` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `المشهور (the well-known position) among النحاة analyzes نِعْمَ الطّالِبُ المُجْتَهِدُ differently from the plain "المخصوص is خبر لمبتدأ محذوف" reading given above. How does المشهور analyze المُجْتَهِدُ instead?`,
            kind: 'mcq',
            options: [`المُجْتَهِدُ is مبتدأ مؤخّر, with the whole جملة نِعْمَ الطّالِبُ serving as خبر مقدّم for a dropped هو`, `المُجْتَهِدُ is فاعل نعم, and الطّالِبُ is المخصوص instead`, `المشهور rejects both readings and treats the sentence as ungrammatical`, `المُجْتَهِدُ is مفعول به of نعم`], correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Four positions require وجوب حذف المبتدأ. How does وجوبًا differ from the earlier rule on حذف المبتدأ جوازًا؟`, options: [`In these four positions the مبتدأ must be dropped, not merely permitted to drop`, `وجوبًا means the مبتدأ can never be dropped`, `There is no difference between the two`, `وجوبًا only applies to اسم كان وأخواتها`], correct: 0 },
        { q: `الحَمْدُ لله الحَميدُ keeps الحَميدُ مرفوعًا despite describing the مجرور لَفْظِ الجَلالَةِ. What grammatical move does that reflect?`, options: [`النعت المقطوع إلى الرفع — cut loose from its منعوت's case, standing as خبر of a dropped مبتدأ هو`, `الخبر مصدر نائب عن فعله المحذوف`, `دلالة جواب القسم عليه`, `الخبر مخصوص بمدح أو ذم`], correct: 0 },
        { q: `في ذِمَّتي لَأَقولَنَّ الصِّدْقَ drops its مبتدأ (عهد/وعد/قسم). What licenses that drop?`, options: [`The following جواب القسم (لَأَقولَنَّ) already makes the solemn undertaking clear`, `النعت هنا مقطوع إلى الرفع`, `الخبر هنا مصدر نائب عن فعله`, `الخبر هنا مخصوص بمدح`], correct: 0 },
        { q: `﴿فَصَبْرٌ جَميلٌ﴾'s أصل is اِصْبِرْ صَبْرًا جَميلًا. Why must the مبتدأ before صَبْرٌ be dropped once صَبْرًا shifts from منصوب to مرفوع؟`, options: [`Because الخبر here is a مصدر نائب عن فعله المحذوف — that specific position requires حذف المبتدأ`, `Because صَبْرٌ is مبني, not معرب`, `Because اِصْبِرْ is فعل أمر, and أفعال الأمر never take a مبتدأ`, `The مبتدأ is not actually dropped here; صَبْرٌ itself is المبتدأ`], correct: 0 },
        { q: `نِعْمَ الطّالِبُ المُجْتَهِدُ. On the plain reading given first, what is المُجْتَهِدُ's role?`, options: [`المخصوص بالمدح — خبر لمبتدأ محذوف تقديره هو`, `فاعل نعم`, `مفعول به`, `مضاف إليه`], correct: 0 },
        { q: `النحاة disagree over نعم/بئس's مخصوص. What does المشهور (the well-known position) say about المُجْتَهِدُ in نِعْمَ الطّالِبُ المُجْتَهِدُ؟`, options: [`It is مبتدأ مؤخّر, and نِعْمَ الطّالِبُ as a whole is خبر مقدّم`, `It is فاعل نعم`, `It is حال منصوبة`, `النحاة all agree on one single reading, with no dispute`], correct: 0 },
      ],
      bank: [
        { title: `أربعة مواضع لوجوب حذف المبتدأ`, kind: 'mcq', prompt: `How many مواضع require وجوب حذف المبتدأ?`, options: [`أربعة`, `اثنان`, `ثلاثة`, `خمسة`], correct: 0 },
        { title: `النعت المقطوع: التعريف`, kind: 'mcq', prompt: `What does قطع النعت mean, in the context of النعت المقطوع إلى الرفع؟`, options: [`Switching النعت out of agreement with منعوته's case, for emphasis, so it stands as خبر of a dropped مبتدأ`, `Deleting النعت entirely from the sentence`, `Turning النعت into مضاف إليه`, `Repeating النعت twice for emphasis`], correct: 0 },
        { title: `الحمد لله الحميد: التقدير`, kind: 'mcq', prompt: `الحَمْدُ لله الحَميدُ is understood with a dropped مبتدأ before الحَميدُ. What is that مبتدأ?`, options: [`هُوَ`, `هِيَ`, `أَنا`, `نَحْنُ`], correct: 0 },
        { title: `القطع إلى النصب: حمالة الحطب`, kind: 'mcq', prompt: `In ﴿وَامْرَأَتُهُ حَمّالَةَ الحَطَبِ﴾, حَمّالَةَ الحَطَبِ describes امْرَأَتُهُ, which is مرفوعة. Yet حَمّالَةَ itself is منصوبة. What does that show about قطع النعت؟`, options: [`It can cut a نعت into النصب, not only الرفع, for the same kind of emphasis`, `It only ever cuts a نعت into الرفع`, `حَمّالَةَ الحَطَبِ is actually مرفوعة, not منصوبة`, `قطع النعت never applies to منصوب منعوت`], correct: 0 },
        { title: `لماذا يُقطع النعت`, kind: 'mcq', prompt: `Why does a speaker cut a نعت loose from its منعوت's case, as in حَمّالَةَ الحَطَبِ?`, options: [`For emphasis — sharpening the description into its own standalone statement`, `Because النعت never agrees with منعوته by default`, `Only to fix a metrical requirement in poetry`, `Because the منعوت here has no إعراب of its own`], correct: 0 },
        { title: `في ذمتي لأقولنّ الصدق: دلالة جواب القسم`, kind: 'mcq', prompt: `فِي ذِمَّتي لَأَقولَنَّ الصِّدْقَ drops its مبتدأ. What signals to the listener that a solemn undertaking is being made, letting the drop happen?`, options: [`جواب القسم — لَأَقولَنَّ — that follows`, `النعت المقطوع إلى الرفع`, `الفاء الرابطة لجواب الشرط`, `أداة الاستفهام`], correct: 0 },
        { title: `في ذمتي: التقدير`, kind: 'mcq', prompt: `فِي ذِمَّتي لَأَقولَنَّ الصِّدْقَ is understood with a dropped مبتدأ. Which of these correctly names it?`, options: [`عَهْدٌ (or وَعْدٌ / قَسَمٌ)`, `أَنا`, `هٰذا`, `الصِّدْقُ`], correct: 0 },
        { title: `فصبر جميل: أصل الجملة`, kind: 'mcq', prompt: `﴿فَصَبْرٌ جَميلٌ﴾'s أصل is given as an imperative sentence. What is it?`, options: [`اِصْبِرْ صَبْرًا جَميلًا`, `صَبَرْتُ صَبْرًا جَميلًا`, `يَصْبِرُ صَبْرًا جَميلًا`, `اُصْبُرْنَّ جَميلًا`], correct: 0 },
        { title: `فصبر جميل: الخبر مصدر نائب عن فعله`, kind: 'mcq', prompt: `In فَصَبْرٌ جَميلٌ, what role does صَبْرٌ play once the imperative اِصْبِرْ is dropped?`, options: [`خبر لمبتدأ محذوف — a مصدر standing in for the dropped فعل`, `مفعول به منصوب`, `فاعل مرفوع`, `مضاف إليه مجرور`], correct: 0 },
        { title: `الدلالة في تحول صبرا إلى صبر`, kind: 'mcq', prompt: `Switching صَبْرًا (منصوب, نائب عن فعله) into صَبْرٌ (مرفوع, خبر لمبتدأ محذوف) does more than change الإعراب. What extra meaning does it add?`, options: [`ثبات ودوام — patience as a lasting state, not a single event`, `تقليل — a smaller amount of patience than intended`, `تنكير — making صبر indefinite for the first time`, `Nothing beyond the bare grammar`], correct: 0 },
        { title: `نعم الطالب المجتهد: المخصوص`, kind: 'mcq', prompt: `نِعْمَ الطّالِبُ المُجْتَهِدُ. On the plain reading, what role does المُجْتَهِدُ play?`, options: [`المخصوص بالمدح — خبر لمبتدأ محذوف تقديره هو`, `فاعل نعم`, `مفعول به لنعم`, `نعت للطالب`], correct: 0 },
        { title: `بئس الطالب الكسول: المخصوص بالذم`, kind: 'mcq', prompt: `بِئْسَ الطّالِبُ الكَسولُ. What role does الكَسولُ play, on the plain reading?`, options: [`المخصوص بالذم — خبر لمبتدأ محذوف تقديره هو`, `فاعل بئس`, `مفعول به لبئس`, `مضاف إليه`], correct: 0 },
        { title: `الطالب: فاعل نعم وبئس`, kind: 'mcq', prompt: `In both نِعْمَ الطّالِبُ المُجْتَهِدُ and بِئْسَ الطّالِبُ الكَسولُ, what role does الطّالِبُ play?`, options: [`فاعل نعم / بئس`, `المخصوص بالمدح أو الذم`, `خبر لمبتدأ محذوف`, `مفعول به`], correct: 0 },
        { title: `خلاف النحاة: واجب أم جائز`, kind: 'mcq', prompt: `النحاة disagree over حذف مبتدأ المخصوص in نعم/بئس sentences. What are the two positions?`, options: [`بعضهم يقول الحذف واجب، وبعضهم يقول جائز`, `الجميع متفقون أن الحذف واجب`, `الجميع متفقون أن الحذف ممنوع`, `الخلاف هنا حول تقديم الفاعل، لا حول الحذف`], correct: 0 },
        { title: `المشهور: تحليل المخصوص`, kind: 'mcq', prompt: `المشهور (the well-known position) reanalyzes نِعْمَ الطّالِبُ المُجْتَهِدُ. According to it, what is المُجْتَهِدُ, and what serves as its خبر?`, options: [`المُجْتَهِدُ is مبتدأ مؤخّر, with الجملة نِعْمَ الطّالِبُ as خبر مقدّم`, `المُجْتَهِدُ is فاعل, with الطّالِبُ as مفعول به`, `المُجْتَهِدُ is مضاف, with الطّالِبُ as مضاف إليه`, `المشهور rejects any reanalysis and keeps the plain reading only`], correct: 0 },
        { title: `تمييز المواضع الأربعة: أيها يقترن بالقسم`, kind: 'mcq', prompt: `Of the four مواضع لوجوب حذف المبتدأ, which one specifically depends on جواب القسم following it?`, options: [`إن دلّ عليه جواب القسم — as in في ذمتي لأقولنّ الصدق`, `النعت المقطوع إلى الرفع`, `الخبر مصدر نائب عن فعله`, `الخبر مخصوص بمدح أو ذم`], correct: 0 },
        {
          title: `تركيب: الحَمْدُ لله الحَميدُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of الحَمْدُ لله الحَميدُ.`,
          source: `الحَمْدُ لله الحَميدُ`,
          words: [`الحَمْدُ`, `لله`, `الحَميدُ`],
          labels: [`مبتدأ مرفوع`, `خبر (جار ومجرور)`, `خبر لمبتدأ محذوف تقديره هو`],
          distractors: [`فاعل مرفوع`, `نعت مجرور`],
        },
        {
          title: `تركيب: نِعْمَ الطّالِبُ المُجْتَهِدُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of نِعْمَ الطّالِبُ المُجْتَهِدُ.`,
          source: `نِعْمَ الطّالِبُ المُجْتَهِدُ`,
          words: [`نِعْمَ`, `الطّالِبُ`, `المُجْتَهِدُ`],
          labels: [`فعل ماضٍ جامد للمدح`, `فاعل نعم مرفوع`, `مخصوص بالمدح (خبر لمبتدأ محذوف تقديره هو)`],
          distractors: [`مفعول به منصوب`, `مبتدأ مرفوع`],
        },
        {
          title: `تركيب: بِئْسَ الطّالِبُ الكَسولُ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of بِئْسَ الطّالِبُ الكَسولُ.`,
          source: `بِئْسَ الطّالِبُ الكَسولُ`,
          words: [`بِئْسَ`, `الطّالِبُ`, `الكَسولُ`],
          labels: [`فعل ماضٍ جامد للذم`, `فاعل بئس مرفوع`, `مخصوص بالذم (خبر لمبتدأ محذوف تقديره هو)`],
          distractors: [`مفعول به منصوب`, `مبتدأ مرفوع`],
        },
        {
          title: `تركيب: فِي ذِمَّتي لَأَقولَنَّ الصِّدْقَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فِي ذِمَّتي لَأَقولَنَّ الصِّدْقَ.`,
          source: `فِي ذِمَّتي لَأَقولَنَّ الصِّدْقَ`,
          words: [`فِي ذِمَّتي`, `لَأَقولَنَّ`, `الصِّدْقَ`],
          labels: [`خبر لمبتدأ محذوف تقديره عَهْدٌ`, `فعل مضارع مبني في جواب القسم وفاعله المستتر`, `مفعول به منصوب`],
          distractors: [`مبتدأ مرفوع`, `نعت منصوب`],
        },
        {
          title: `تركيب: فَصَبْرٌ جَميلٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ﴿فَصَبْرٌ جَميلٌ﴾.`,
          source: `صَبْرٌ جَميلٌ`,
          words: [`صَبْرٌ`, `جَميلٌ`],
          labels: [`خبر لمبتدأ محذوف تقديره صَبْري (مصدر نائب عن فعله المحذوف)`, `نعت لصبر مرفوع`],
          distractors: [`مبتدأ مرفوع`, `مفعول به منصوب`],
        },
      ],
    },
  ],
};

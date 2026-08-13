// Module 07 — الأفعال الناقصة: كان وأخواتها (كان and Its Sisters)
//
// Source: app-lessons/028-afal-al-naqisa-kana.md through
// app-lessons/032-ma-dama-and-laysa.md (الكبرى في النحو). Authored out of
// sequence per explicit 2026-08-12 direction, at a point where Modules
// 04-06 (الفعل القياسي, أفعال القلوب, أفعال التحويل والتعليق) were still
// unauthored proposals in COURSE-MAP.md. By the time this module was wired
// into content/annahw.js, Module 04 and Module 06 had themselves already
// been authored (elsewhere), so this module is registered directly after
// m06 — see annahw.js's own header comment for the up-to-date unlock
// order. Module 05 (أفعال القلوب) is the one remaining gap; when it exists,
// it slots in between m04 and m06 per annahw.js's note, not before this
// module.
//
// الأفعال الناقصة are the first قسم of السماعي (the other two, أفعال
// المدح والذم and صيغ التعجب, are future modules per COURSE-MAP's Module
// 08 proposal). كان وأخواتها is their first ضرب, thirteen verbs long.
// l1-l2 cover 028 (كان itself: its six tense-shades, its الانبغاء/القدرة
// senses, حذف النون, and حذف كان مع اسمها); l3 covers 029 (the five
// time-of-day sisters); l4 covers 030 (صار and every verb from the group
// that can carry صار's meaning); l5 covers 031 (the four استمرار verbs);
// l6 covers 032 (ما دام, ليس, and the rules general to the whole ناقص
// family). One source file per lesson except 028, which splits across
// l1-l2 the same way Module 03 split 018-irab.md across two lessons.
//
// Same lines[]/box/table/tarkeebDiagram shape as Modules 01-03. Box
// content for Definition/Rule/Careful/Meaning follows the same convention:
// where app-lessons states a point in English prose rather than a quoted
// Arabic sentence, the box carries a short Arabic restatement in the
// source's own terse register, with the full English explanation kept in
// the surrounding prose. Every Example box, Core Text box, and
// tarkeebDiagram reuses a sentence or ayah app-lessons/028-032 actually
// gives — none invented. Bank تركيب density follows each lesson's actual
// supply of source-given parsed tables (l1: 2, l2: 1, l3: 5, l4: 6, l5: 5,
// l6: 6) rather than a fixed target, matching Modules 01-03's own
// discipline of not forcing تركيب items onto sentences the source never
// analyses.
export default {
  id: '07',
  title: 'كان وأخواتها',
  heading: 'العامل وغير العامل',
  subheading: 'الفعل',
  blurb: 'The ناقص فعل family: كان’s own senses, its time-of-day and transformation sisters, continuation, and the two closing members.',
  lessons: [
    // ---------------------------------------------------------------- L1
    {
      id: 'l1',
      title: 'الأفعال الناقصة',
      subtitle: 'The Deficient Verb — why كان is called ناقص, and the eight senses it carries',
      sourceRef: 'app-lessons/028 (part 1)',
      concepts: [
        {
          heading: 'الأفعال السماعية وأقسامها',
          lines: [
            { html: `عامل verbs split into two families: <bdi>قياسي</bdi> verbs, which follow a fixed pattern a grammarian can generalize from, and <bdi>سماعي</bdi> verbs, which do not.`, list: false },
            { box: { title: 'Definition', lines: [`السَّمَاعِيُّ: مَا لَيْسَ لَهُ قَاعِدَةٌ مُطَّرِدَةٌ، بَلْ يَتَوَقَّفُ عَلَى السَّمَاعِ`] } },
            { html: `A سماعي verb carries no rule that produces more verbs of its kind. These are words heard from the Arabs, used a certain way, with that usage simply continued — knowing them depends on <bdi>سماع</bdi>, hearing the Arabs use them, or for a later student, finding them recorded in writing.`, list: false },
            { table: { title: 'أقسام السماعي', headers: ['Section', 'What it covers'], rows: [
              [`الأفعال الناقصة`, `Verbs entering on a مبتدأ and خبر, of which كان is the first`],
              [`أفعال المدح والذم`, `Verbs of praise and blame`],
              [`صيغ التعجب`, `The forms of wonder`],
            ] } },
          ],
          exercise: {
            prompt: `السماعي divides into three أقسام, one of which is الأفعال الناقصة. Which of the following completes the other two?`,
            kind: 'mcq',
            options: [`أفعال المدح والذم, and صيغ التعجب`, `حروف الجر, and أدوات الشرط`, `الأفعال الناسخة, and حروف العطف`, `المبتدأ والخبر, and الفاعل ونائب الفاعل`],
            correct: 0,
          },
        },
        {
          heading: 'الأفعال الناقصة: تعريفها ولمَ سُمّيت ناقصة',
          lines: [
            { html: `The first قسم of السماعي is <bdi>الأفعال الناقصة</bdi> — the family كان belongs to.`, list: false },
            { box: { title: 'Definition', lines: [`وَهِيَ أَفْعَالٌ تَدْخُلُ عَلَى المُبْتَدَأِ وَالخَبَرِ، وَتَرْفَعُ الأَوَّلَ وَيُسَمَّى اسْمَهَا، وَتَنْصِبُ الثَّانِيَ وَيُسَمَّى خَبَرَهَا`] } },
            { html: `The verb enters on a جملة اسمية already built from a مبتدأ and a خبر. The first stays مرفوع and is now called <bdi>اسمها</bdi>. The second becomes منصوب and is now called <bdi>خبرها</bdi>.`, list: false },
            { box: { title: 'Rule', lines: [`يُسَمَّى الفِعْلُ النَّاقِصُ نَاقِصًا لِنُقْصَانِهِ فِي أَدَاءِ مَعْنَاهُ بِغَيْرِ خَبَرِهِ، بِخِلَافِ الفِعْلِ التَّامِّ الَّذِي يُؤَدِّي مَعْنَاهُ بِفَاعِلِهِ`] } },
            { html: `A فعل تام delivers its meaning as soon as it has a فاعل. A فعل ناقص is deficient in delivering its meaning without its خبر — the خبر is not optional decoration; the sentence is unfinished without it.`, list: false },
            { box: { title: 'Core Text', lines: [`وَهِيَ ثَلَاثَةَ عَشَرَ: الأَوَّلُ كَانَ`] } },
            { html: `كان وأخواتها, the first ضرب of الأفعال الناقصة, has thirteen members, with كان named first.`, list: false },
          ],
          exercise: {
            prompt: `A فعل تام is satisfied with just its فاعل. What exactly makes a فعل ناقص "deficient" by contrast?`,
            kind: 'mcq',
            options: [`It cannot deliver its meaning without a خبر`, `It cannot take a فاعل at all`, `It has fewer than three root letters`, `It never appears in الماضي`],
            correct: 0,
          },
        },
        {
          heading: 'معاني كان: الماضي المنقطع',
          lines: [
            { html: `كان carries a ماضي meaning by default, but the قرآن uses several distinct shades within that default.`, list: false },
            { table: { title: 'معاني كان', headers: ['Meaning', 'What كان is saying', 'Example', 'Translation'], rows: [
              [`الماضي المنقطع على وجه الثبوت`, `A settled attribute that has since ended`, `﴿وَكَانُوا عَلَيْهِ شُهَدَاءَ﴾`, `And they were witnesses over it`],
              [`الماضي المنقطع على وجه الحدوث`, `An event that occurred and finished`, `﴿وَلَقَدْ كَانُوا عَاهَدُوا اللهَ مِنْ قَبْلُ﴾`, `They had made a covenant with Allah beforehand`],
              [`الماضي المتجدد على وجه الاستمرار`, `One event running over a stretch of time`, `كُنْتُ أَذْهَبُ يَوْمًا`, `I was going one day`],
              [`الماضي المتجدد على وجه العادة`, `An event that recurred; their habit`, `﴿كَانَا يَأْكُلَانِ الطَّعَامَ﴾`, `They both used to eat food`],
              [`الحال بمعنى ما زال`, `A trait that began long ago and still holds`, `﴿وَكَانَ الإِنْسَانُ عَجُولًا﴾`, `And man was ever hasty`],
              [`الاستقبال`, `A future event stated in the ماضي to mark its certainty`, `﴿كَانَتْ لَهُمْ جَنَّاتُ الفِرْدَوْسِ نُزُلًا﴾`, `The gardens of Firdaws will be their welcome`],
            ] } },
            { html: `<bdi>منقطع</bdi> means the thing came to an end, it stopped: it was, and no longer is. What ended may have been a settled quality (1) <bdi>على وجه الثبوت</bdi>, or a single occurrence (2) <bdi>على وجه الحدوث</bdi>.`, list: false },
            { box: { title: 'Example', lines: [`كَانُوا مُعْتَمِرِينَ`, `كَانُوا فُقَرَاءَ`] } },
            { html: `"They were in the state of عمرة" and "They were poor." A person is not a فقير for one minute and then not a فقير — فقر is <bdi>ثابت</bdi>, a settled condition, so what came to an end here is something ثابت: they were فقراء, and now they are not.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿وَكَانُوا عَلَيْهِ شُهَدَاءَ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `وَكَانُوا عَلَيْهِ شُهَدَاءَ`,
                translation: `And they were witnesses over it.`,
                cells: [`وَكَانُوا`, `عَلَيْهِ`, `شُهَدَاءَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص + واو الجماعة اسمه` }, { start: 1, end: 1, role: `جار ومجرور` }, { start: 2, end: 2, role: `خبر كان منصوب` }] },
                ],
              },
            },
            { html: `Being a witness was a long-term quality of theirs, which came to an end once they passed away. Now the second shade: كَانَ قَدْ صَدَقَ, "he had spoken the truth" — he spoke the truth and then stopped; the act occurred and finished, which is what English carries with <em>had</em>.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿وَلَقَدْ كَانُوا عَاهَدُوا اللهَ مِنْ قَبْلُ﴾`] } },
            { html: `"They had made a covenant with Allah beforehand." The making of the covenant happened and stopped happening; whether its effects remain is a separate matter, and does not bear on وجه الحدوث.`, list: false },
          ],
          exercise: {
            prompt: `كَانَ قَدْ صَدَقَ means "he had spoken the truth" — the act of truthful speech occurred once and then finished, without claiming he now speaks lies. Which shade of الماضي المنقطع is this?`,
            kind: 'mcq',
            options: [`على وجه الحدوث — a single event that occurred and finished`, `على وجه الثبوت — a settled attribute that ended`, `على وجه الاستمرار — one event stretched over time`, `على وجه العادة — a recurring habit`],
            correct: 0,
          },
        },
        {
          heading: 'معاني كان: الماضي المتجدد والحال بمعنى ما زال',
          lines: [
            { html: `Two further shades don't present the action as a single finished point: it either ran on, or it recurred.`, list: false },
            { box: { title: 'Core Text', lines: [`كُنْتُ أَذْهَبُ يَوْمًا`] } },
            { html: `"I was going one day" — <bdi>على وجه الاستمرار</bdi>, one event stretched over a period. This use normally arrives with a second sentence attached: something was under way, and another act interrupted it, as in كَانَ رَسُولُ اللهِ ﷺ يُصَلِّي فَدَخَلَتْ عَائِشَةُ, "the Messenger of Allah ﷺ was praying, and Aisha entered."`, list: false },
            { box: { title: 'Core Text', lines: [`﴿كَانَا يَأْكُلَانِ الطَّعَامَ﴾`] } },
            { html: `"They both used to eat food" — <bdi>على وجه العادة</bdi>: multiple events across separate days, their habit. Unlike استمرار, this use stands on its own as a piece of information, with nothing needing to follow it.`, list: false },
            { box: { title: 'Careful', lines: [`قَدْ لَا يَدُلُّ صِيغَةُ كَانَ يَفْعَلُ عَلَى التَّكْرَارِ`] } },
            { html: `كان يفعل does not always show repetition — it can instead point at something being a person's nature, the sort of thing they did. This matters in حديث, where كان يفعل appears about حج even though the Prophet ﷺ performed حج once: كَانَ يُصَلِّي وَهُوَ حَامِلٌ أُمَامَةَ بِنْتَ زَيْنَبَ, "he ﷺ prayed while carrying Umāmah," reports his way, not a repeated act.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿وَكَانَ الإِنْسَانُ عَجُولًا﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `وَكَانَ الإِنْسَانُ عَجُولًا`,
                translation: `And man was ever hasty.`,
                cells: [`وَكَانَ`, `الإِنْسَانُ`, `عَجُولًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم كان مرفوع` }, { start: 2, end: 2, role: `خبر كان منصوب` }] },
                ],
              },
            },
            { html: `"And man was ever hasty" — the <bdi>الحال بمعنى ما زال</bdi> shade. This is not ماضي منقطع in the sense of "he was and no longer is": it reaches backwards to say the trait is old, native to him from his creation, and that he still is so.`, list: false },
          ],
          exercise: {
            prompt: `In حديث, كان يفعل is used about حج even though the Prophet ﷺ performed حج only once in his life. What does the Careful box on كان يفعل explain about this?`,
            kind: 'mcq',
            options: [`كان يفعل doesn't always show repetition — it can point at what was a person's way, not a repeated act`, `كان يفعل is only ever used for events that occur many times`, `The حديث is describing a different فعل, not كان`, `كان يفعل here means الاستقبال, a future event`],
            correct: 0,
          },
        },
        {
          heading: 'معاني كان: الاستقبال',
          lines: [
            { html: `كان can also carry a future meaning — the prophetic past: a future event expressed with a ماضي form to mark its certainty.`, list: false },
            { html: `The Arabs use it constantly in دعاء: جَزَاكَ اللهُ is ماضي in form — "Allah has rewarded you" — and future in sense: Allah will most certainly reward you. An ordinary verb carries that certainty in its own ماضي form; a جملة اسمية has no verb to do it, so كان is inserted, and that كان means <em>certainly</em>.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿إِنَّ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ كَانَتْ لَهُمْ جَنَّاتُ الفِرْدَوْسِ نُزُلًا﴾`] } },
            { html: `"Those who believe and do righteous deeds will have the gardens of Firdaws as their welcome." <bdi>نُزُل</bdi> is what is laid out for an arriving guest — the welcome, the banquet — and جنات الفردوس will certainly be the نزل Allah has prepared for them.`, list: false },
          ],
          exercise: {
            prompt: `﴿أَتَى أَمْرُ اللهِ﴾ says "the command of Allah has come," in the ماضي, even though the decree spoken of will come in the future. What does this pattern — a future event stated in the ماضي — mark?`,
            kind: 'mcq',
            options: [`Certainty — الاستقبال expressed with a ماضي form to highlight that it is sure to happen`, `الماضي المنقطع على وجه الثبوت — a settled quality that has ended`, `معنى الانبغاء — that something is fitting or permissible`, `الماضي المتجدد على وجه العادة — a recurring habit`],
            correct: 0,
          },
        },
        {
          heading: 'مسألتان: كان بمعنى الانبغاء والقدرة',
          lines: [
            { html: `Two further meanings of كان sit outside the six tense-shades above.`, list: false },
            { box: { title: 'Meaning', lines: [`الانبغاء: كَوْنُ الشَّيْءِ لَائِقًا مُنَاسِبًا جَائِزًا`] } },
            { box: { title: 'Core Text', lines: [`﴿مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللهِ مِنْ شَيْءٍ﴾`] } },
            { html: `"It was not for us to associate anything with Allah" — not suitable, not befitting, not permissible for us. كان stands here in place of <bdi>يَنْبَغِي</bdi>. In some verses ينبغي is stated outright, as in ﴿وَمَا يَنْبَغِي لِلرَّحْمَنِ أَنْ يَتَّخِذَ وَلَدًا﴾, "it does not befit ar-Rahmān that He take a child" — that second kind of verse is what establishes the انبغاء reading where كان stands alone.`, list: false },
            { box: { title: 'Meaning', lines: [`القدرة: عَدَمُ إِمْكَانِ وُقُوعِ الفِعْلِ`] } },
            { box: { title: 'Core Text', lines: [`﴿وَمَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللهِ﴾`] } },
            { html: `"No soul can die except by the permission of Allah" — no نفس has the ability; it is not possible for any soul to die otherwise. Allah normally runs this through ordinary أسباب, but death comes only when Allah has decreed it. القدرة sits close to الانبغاء: a proper study of انبغاء turns up القدرة as one of its senses.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَمَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللهِ﴾ says no soul can die except by Allah's permission. Which of the two additional meanings of كان does this illustrate?`,
            kind: 'mcq',
            options: [`القدرة — ability or possibility`, `الانبغاء — suitability or permissibility`, `الاستقبال — a certain future event`, `الماضي المنقطع على وجه الحدوث — a finished occurrence`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which of the following correctly defines الأفعال الناقصة?`, options: [`Verbs entering on a مبتدأ and خبر, raising the first as اسمها and putting the second in نصب as خبرها`, `Verbs that always require a فاعل and never a خبر`, `Verbs restricted to الماضي alone`, `Verbs that only govern a single مفعول به`], correct: 0 },
        { q: `الفعل الناقص is called ناقص for a specific reason. What is it?`, options: [`It cannot deliver its meaning without its خبر, unlike a فعل تام which is satisfied with its فاعل`, `It has no مصدر at all`, `It cannot be conjugated in المضارع`, `It is restricted to poetry`], correct: 0 },
        { q: `كان وأخواتها, the first ضرب of الأفعال الناقصة, has how many members, and which one is named first?`, options: [`Thirteen, with كان first`, `Six, with ليس first`, `Four, with صار first`, `Ten, with ظل first`], correct: 0 },
        { q: `كَانَ قَدْ صَدَقَ, "he had spoken the truth," reports a single completed act rather than an ongoing state. Which meaning of كان is this?`, options: [`الماضي المنقطع على وجه الحدوث`, `الماضي المنقطع على وجه الثبوت`, `الماضي المتجدد على وجه الاستمرار`, `الحال بمعنى ما زال`], correct: 0 },
        { q: `A حديث uses كان يُصَلِّي about the Prophet ﷺ carrying Umāmah, describing something that happened, without implying it happened over and over. What does the Careful box on كان يفعل say this pattern can express?`, options: [`What was a person's way or nature, not necessarily a repeated act`, `Only events repeated at least twice`, `Exclusively future events`, `A settled quality that has since ended`], correct: 0 },
        { q: `﴿وَمَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللهِ﴾ says no soul can die without Allah's permission. Which meaning of كان does this illustrate?`, options: [`معنى القدرة`, `معنى الانبغاء`, `الماضي المتجدد على وجه العادة`, `الاستقبال`], correct: 0 },
      ],
      bank: [
        { title: `السماعي: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines a سماعي verb?`, options: [`One with no fixed rule producing more of its kind — known only through سماع`, `One that follows a قياسي pattern any grammarian can generalize from`, `One that never takes a خبر`, `One restricted to المضارع`], correct: 0 },
        { title: `أقسام السماعي: العدد`, kind: 'mcq', prompt: `السماعي divides into three أقسام: الأفعال الناقصة, أفعال المدح والذم, and a third. What is the third?`, options: [`صيغ التعجب`, `حروف النداء`, `الأفعال المتعدية`, `أدوات الاستثناء`], correct: 0 },
        { title: `الأفعال الناقصة: اسمها وخبرها`, kind: 'mcq', prompt: `الأفعال الناقصة enter on an already-built جملة اسمية. What happens to its مبتدأ and خبر?`, options: [`The مبتدأ stays مرفوع and is now called اسمها; the خبر becomes منصوب and is now called خبرها`, `Both the مبتدأ and الخبر become منصوب`, `The مبتدأ becomes منصوب and the خبر stays مرفوع`, `Neither changes its إعراب`], correct: 0 },
        { title: `الفعل الناقص مقابل الفعل التام`, kind: 'mcq', prompt: `What distinguishes a فعل تام from a فعل ناقص?`, options: [`الفعل التام delivers its meaning with just its فاعل; الفعل الناقص needs its خبر too`, `الفعل التام never takes a فاعل`, `الفعل الناقص always appears in الأمر`, `الفعل التام cannot appear with a مبتدأ`], correct: 0 },
        { title: `عدد أخوات كان`, kind: 'mcq', prompt: `كان وأخواتها, the first ضرب of الأفعال الناقصة, is a group of how many verbs?`, options: [`ثلاثة عشر`, `سبعة`, `عشرة`, `خمسة`], correct: 0 },
        { title: `الماضي المنقطع على وجه الثبوت`, kind: 'mcq', prompt: `كَانُوا فُقَرَاءَ, "they were poor," describes a long-settled condition that later ended. Which shade of معاني كان is this?`, options: [`الماضي المنقطع على وجه الثبوت`, `الماضي المنقطع على وجه الحدوث`, `الحال بمعنى ما زال`, `الاستقبال`], correct: 0 },
        { title: `شهداء: الماضي المنقطع`, kind: 'mcq', prompt: `﴿وَكَانُوا عَلَيْهِ شُهَدَاءَ﴾ describes a quality (being a witness) that held for a long stretch and ended once those people passed away. Which shade of كان's meaning is this?`, options: [`الماضي المنقطع على وجه الثبوت`, `الماضي المنقطع على وجه الحدوث`, `الماضي المتجدد على وجه الاستمرار`, `معنى القدرة`], correct: 0 },
        { title: `كنت أذهب يوما`, kind: 'mcq', prompt: `كُنْتُ أَذْهَبُ يَوْمًا describes one event stretched over a period, typically followed by a second sentence naming what interrupted it. Which shade of معاني كان is this?`, options: [`الماضي المتجدد على وجه الاستمرار`, `الماضي المتجدد على وجه العادة`, `الماضي المنقطع على وجه الحدوث`, `الاستقبال`], correct: 0 },
        { title: `كانا يأكلان الطعام`, kind: 'mcq', prompt: `﴿كَانَا يَأْكُلَانِ الطَّعَامَ﴾ reports something that happened repeatedly — their habit — and stands as a complete piece of information on its own. Which shade of معاني كان is this?`, options: [`الماضي المتجدد على وجه العادة`, `الماضي المتجدد على وجه الاستمرار`, `الحال بمعنى ما زال`, `معنى الانبغاء`], correct: 0 },
        { title: `الفرق بين الاستمرار والعادة`, kind: 'mcq', prompt: `Both الاستمرار and العادة shades of كان describe repeated or ongoing action. What is the key difference between them?`, options: [`الاستمرار is one stretched event usually paired with an interrupting second sentence; العادة is a recurring habit that stands alone`, `الاستمرار only occurs in the قرآن; العادة only occurs in حديث`, `الاستمرار requires a منصوب اسم; العادة requires a مرفوع اسم`, `There is no real difference between them`], correct: 0 },
        { title: `عجولا: الحال بمعنى ما زال`, kind: 'mcq', prompt: `﴿وَكَانَ الإِنْسَانُ عَجُولًا﴾ does not mean man was once hasty and no longer is — it says the trait is old and still holds. Which shade of معاني كان is this?`, options: [`الحال بمعنى ما زال`, `الماضي المنقطع على وجه الثبوت`, `الماضي المتجدد على وجه العادة`, `الاستقبال`], correct: 0 },
        { title: `جنات الفردوس: الاستقبال`, kind: 'mcq', prompt: `﴿كَانَتْ لَهُمْ جَنَّاتُ الفِرْدَوْسِ نُزُلًا﴾ speaks of something that has not happened yet, phrased with a ماضي verb. Why?`, options: [`الاستقبال — the ماضي form marks the future event as certain`, `الماضي المنقطع على وجه الحدوث — the event already finished`, `معنى القدرة — the verse is about ability, not time`, `الماضي المتجدد على وجه الاستمرار — a stretched-out event`], correct: 0 },
        { title: `جزاك الله: الاستقبال في الدعاء`, kind: 'mcq', prompt: `جَزَاكَ اللهُ is ماضي in form but understood as "Allah will most certainly reward you." Why does دعاء lean on the ماضي this way?`, options: [`A ماضي form marks certainty, and جملة اسمية دعاء has no verb of its own to carry that certainty without كان`, `Because دعاء can never use المضارع`, `Because الماضي is grammatically required after يا النداء`, `Because جزاك is not really a فعل`], correct: 0 },
        { title: `لا ننبغي: معنى الانبغاء`, kind: 'mcq', prompt: `﴿مَا كَانَ لَنَا أَنْ نُشْرِكَ بِاللهِ مِنْ شَيْءٍ﴾ says associating anything with Allah was not for them. Which فعل does كان stand in place of here?`, options: [`يَنْبَغِي — to be fitting or permissible`, `يَقْدِرُ — to be able`, `يُرِيدُ — to want`, `يَعْلَمُ — to know`], correct: 0 },
        { title: `الآية الثانية للانبغاء`, kind: 'mcq', prompt: `﴿وَمَا يَنْبَغِي لِلرَّحْمَنِ أَنْ يَتَّخِذَ وَلَدًا﴾ states ينبغي outright, rather than leaving كان to carry the sense alone. Why does this verse matter for reading معنى الانبغاء into كان elsewhere?`, options: [`It establishes that كان can substitute for ينبغي, since the same sense appears with ينبغي made explicit`, `It proves كان never means انبغاء anywhere in the قرآن`, `It shows ينبغي and كان are never interchangeable`, `It is unrelated to الانبغاء`], correct: 0 },
        { title: `القدرة والأسباب`, kind: 'mcq', prompt: `﴿وَمَا كَانَ لِنَفْسٍ أَنْ تَمُوتَ إِلَّا بِإِذْنِ اللهِ﴾ is explained with the example of a person putting a gun to themself. What point does that example make about معنى القدرة?`, options: [`Even an ordinary سبب of death only takes effect because Allah permits it, so death occurs only by إذن الله`, `Ordinary أسباب are irrelevant to when death occurs`, `القدرة here means physical strength, not divine permission`, `The verse is only about الماضي المنقطع`], correct: 0 },
        { title: `العلاقة بين الانبغاء والقدرة`, kind: 'mcq', prompt: `How does the lesson describe the relationship between معنى الانبغاء and معنى القدرة in كان?`, options: [`القدرة sits close to الانبغاء — a proper study of الانبغاء turns up القدرة as one of its senses`, `They are entirely unrelated meanings of كان`, `القدرة is a subtype of الاستقبال, not of الانبغاء`, `Only one of the two is a real meaning of كان; the other was rejected by grammarians`], correct: 0 },
        { title: `كان الافتراضي`, kind: 'mcq', prompt: `Setting aside its several shades of meaning, what tense does كان carry by default?`, options: [`الماضي`, `المضارع`, `الأمر`, `الاستقبال فقط`], correct: 0 },
        { title: `تحديد المعنى من السياق`, kind: 'mcq', prompt: `كان's several shades of meaning — منقطع, متجدد, حال, استقبال — are not marked by a different verb form. How is the intended shade actually identified?`, options: [`From context — what the surrounding sentence and situation indicate`, `From the verb's موزون pattern alone`, `From whether كان is مرفوع or منصوب`, `Every shade is marked by a distinct spelling of كان`], correct: 0 },
        {
          title: `تركيب: وَكَانُوا عَلَيْهِ شُهَدَاءَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَكَانُوا عَلَيْهِ شُهَدَاءَ.`,
          source: `وَكَانُوا عَلَيْهِ شُهَدَاءَ`,
          words: [`وَكَانُوا`, `عَلَيْهِ`, `شُهَدَاءَ`],
          labels: [`فعل ناقص + واو الجماعة اسمه`, `جار ومجرور`, `خبر كان منصوب`],
          distractors: [`مبتدأ`, `فعل أمر`],
        },
        {
          title: `تركيب: وَكَانَ الإِنْسَانُ عَجُولًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in وَكَانَ الإِنْسَانُ عَجُولًا.`,
          source: `وَكَانَ الإِنْسَانُ عَجُولًا`,
          words: [`وَكَانَ`, `الإِنْسَانُ`, `عَجُولًا`],
          labels: [`فعل ناقص`, `اسم كان مرفوع`, `خبر كان منصوب`],
          distractors: [`فاعل`, `مضاف إليه`],
        },
      ],
    },
    // ---------------------------------------------------------------- L2
    {
      id: 'l2',
      title: 'حذف كان',
      subtitle: 'Dropping كان — the three conditions for حذف النون, and the Kufi/Basri split over حذف كان واسمها',
      sourceRef: 'app-lessons/028 (part 2)',
      concepts: [
        {
          heading: 'حذف نون كان: الشروط الثلاثة',
          lines: [
            { html: `Four صيغ of كان — <bdi>يكون، تكون، أكون، نكون</bdi> — can drop their نون under specific conditions (تكون covers two distinct forms, so five in practice).`, list: false },
            { box: { title: 'Rule', lines: [`يَجُوزُ حَذْفُ نُونِ كَلِمَةِ يَكُونُ وَتَكُونُ وَأَكُونُ وَنَكُونُ إِذَا كَانَتْ مَجْزُومَةً، وَلَيْسَ بَعْدَهَا سَاكِنٌ وَلَا ضَمِيرُ نَصْبٍ مُتَّصِلٌ`] } },
            { html: `Three conditions have to hold together: the verb must be مجزوم, and nothing that blocks the حذف may follow it.`, list: false },
            { table: { title: 'شروط حذف نون كان', headers: ['Case', 'Example', 'Translation', 'Result'], rows: [
              [`الفعل مجزوم ولا مانع بعده`, `﴿لَمْ نَكُ مِنَ المُصَلِّينَ﴾`, `We were not of those who prayed`, `النون تُحذف: لَمْ نَكُنْ تصير لَمْ نَكُ`],
              [`يتبعه ساكن`, `﴿لَمْ يَكُنِ الَّذِينَ كَفَرُوا﴾`, `Those who disbelieved were not …`, `النون تبقى؛ لام الَّذِينَ ساكنة`],
              [`يتبعه ضمير نصب متصل`, `وَلَمْ أَكُنْهُ`, `And I was not it`, `النون تبقى`],
            ] } },
            { box: { title: 'Careful', lines: [`مَا يَمْنَعُ الحَذْفَ فِي وَلَمْ أَكُنْهُ هُوَ الضَّمِيرُ المُتَّصِلُ، وَلَوْ كَانَ الخَبَرُ اسْمًا ظَاهِرًا لَجَازَ الحَذْفُ`] } },
            { html: `What blocks the حذف in وَلَمْ أَكُنْهُ is specifically the attached ضمير. Had the خبر been an اسم ظاهر instead of a ضمير, the حذف would have been available.`, list: false },
          ],
          exercise: {
            prompt: `وَلَمْ أَكُنْهُ, "and I was not it," keeps its نون even though the verb is مجزوم. What blocks the حذف here?`,
            kind: 'mcq',
            options: [`A ضمير نصب متصل follows the verb`, `The verb is not مجزوم`, `A ساكن follows the verb`, `The verb has no خبر at all`],
            correct: 0,
          },
        },
        {
          heading: 'حكمة حذف النون: كثرة المبنى وقلة المعنى',
          lines: [
            { html: `النحو gives the licence to drop the نون. The reason on the معنى side belongs to بلاغة.`, list: false },
            { box: { title: 'Rule', lines: [`كَثْرَةُ المَبْنَى تَدُلُّ عَلَى زِيَادَةِ المَعْنَى`] } },
            { html: `A longer صيغة — more letters, more word — points to more meaning; fewer letters point to less. قَتَلَ against قَتَّلَ is the standing illustration, since باب التفعيل shows <bdi>تكثير</bdi> on the strength of its extra letters. Run the principle in reverse: dropping the نون shortens the form, and the shortened form points at <bdi>تقليل</bdi> in the معنى.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿أَوَلَا يَذْكُرُ الإِنْسَانُ أَنَّا خَلَقْنَاهُ مِنْ قَبْلُ وَلَمْ يَكُ شَيْئًا﴾`] } },
            { html: `"Does man not remember that We created him before, when he was nothing?" وَلَمْ يَكُنْ شَيْئًا would also say "nothing," but more كَوْن would be left standing in the word. لَمْ يَكُ says he was nothing at all, because even the نون has gone from it.`, list: false },
            { box: { title: 'Example', lines: [`﴿وَلَمْ أَكُ بَغِيًّا﴾`] } },
            { html: `"And I was not unchaste." The dropped نون is what carries the sense of <em>not in the least</em>.`, list: false },
          ],
          exercise: {
            prompt: `وَلَمْ يَكُنْ شَيْئًا and لَمْ يَكُ شَيْئًا both mean "he was nothing," but the قرآن uses the shorter لَمْ يَكُ. What does the principle كثرة المبنى تدل على زيادة المعنى explain about that choice?`,
            kind: 'mcq',
            options: [`The shorter form, with the نون dropped, points to greater تقليل — "nothing at all"`, `The two forms carry identical meaning with no difference at all`, `لَمْ يَكُ is required whenever the verb is مرفوع`, `The نون was dropped only for the sake of poetic metre`],
            correct: 0,
          },
        },
        {
          heading: 'حذف كان مع اسمها بعد إن ولو الشرطيتين',
          lines: [
            { html: `كان is sometimes dropped together with its اسم, leaving only its خبر منصوب standing.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ يُحْذَفُ كَانَ مَعَ اسْمِهَا بَعْدَ إِنْ وَلَوِ الشَّرْطِيَّتَيْنِ`] } },
            { box: { title: 'Core Text', lines: [`«الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ»`] } },
            { html: `"Seek something, even a ring of iron." The تقدير is وَلَوْ كَانَ المُلْتَمَسُ خَاتَمًا — خَاتَمًا alone is left standing, and it stays منصوب as the surviving خبر.`, list: false },
            { box: { title: 'Core Text', lines: [`النَّاسُ مَجْزِيُّونَ بِأَعْمَالِهِمْ إِنْ خَيْرًا فَخَيْرٌ وَإِنْ شَرًّا فَشَرٌّ`] } },
            { html: `"People are recompensed for their deeds: if good, then good; if evil, then evil." Again the خبر alone is left standing and stays منصوب: خَيْرًا and شَرًّا, with كان and its اسم dropped after each إن.`, list: false },
          ],
          exercise: {
            prompt: `«الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ» drops كان and its اسم after لو الشرطية, leaving one word standing in نصب. Which word is it, and what role does it keep?`,
            kind: 'mcq',
            options: [`خَاتَمًا — it survives as the خبر of the elided كان`, `الْتَمِسْ — it survives as the فاعل of the elided كان`, `مِنْ — it survives as the اسم of the elided كان`, `حَدِيدٍ — it survives as the مبتدأ`],
            correct: 0,
          },
        },
        {
          heading: 'حذف كان مع اسمها في غير إن ولو: قراءة الكوفيين',
          lines: [
            { html: `The same حذف also occurs outside إن and لو, and there the grammarians divide.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿فَآمِنُوا خَيْرًا لَكُمْ﴾`] } },
            { html: `On the Kufi reading, the تقدير is فَآمِنُوا يَكُنِ الإِيمَانُ خَيْرًا لَكُمْ.`, list: false },
            { html: `آمِنُوا is أمر, and يَكُنْ is its جواب الأمر: the فعل يَكُنْ is محذوف and its اسم الإيمان is محذوف with it, leaving خَيْرًا standing as the خبر.`, list: false },
            { table: { title: 'إعراب ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾ — قراءة الكوفيين', headers: ['Word', 'Role'], rows: [
              [`فَآمِنُوا`, `فعل أمر`],
              [`[يَكُنِ الإِيمَانُ]`, `فعل ناقص واسمه، كلاهما محذوف — هو جواب الأمر`],
              [`خَيْرًا لَكُمْ`, `خبر كان الباقي منصوب`],
            ] } },
          ],
          exercise: {
            prompt: `On the Kufi reading of ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾, what exactly has been dropped before خَيْرًا?`,
            kind: 'mcq',
            options: [`يَكُنِ الإِيمَانُ — the فعل ناقص يكن and its اسم الإيمان, together, as جواب الأمر`, `Only آمِنُوا itself`, `A حرف جر before خَيْرًا`, `Nothing — the Kufi reading treats خَيْرًا as an ordinary مفعول به`],
            correct: 0,
          },
        },
        {
          heading: 'حذف كان مع اسمها: قراءة البصريين',
          lines: [
            { html: `The Basrians do not accept this حذف. On their view, كان is not omitted with its اسم at all, and خَيْرًا in the same ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾ is explained in one of two other ways.`, list: false },
            { table: { title: 'قراءة البصريين لـ ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾', headers: ['Function of خَيْرًا', 'Reading', 'Translation'], rows: [
              [`مفعول مطلق لآمنوا، والمفعول المطلق نفسه محذوف وخَيْرًا صفته`, `أَيْ آمِنُوا إِيمَانًا خَيْرًا`, `Believe with a belief that is better`],
              [`مفعول به لفعل مضمر`, `أَيْ وَاقْصِدُوا خَيْرًا، أَوِ ائْتُوا خَيْرًا`, `Aim at good, or bring good`],
            ] } },
            { html: `On the first reading, فَآمِنُوا خَيْرًا لَكُمْ is a single جملة, not an أمر followed by a جواب الأمر: believe firmly in Allah, which is better for you. On the second, two things are being asked for: bring إيمان, and do good.`, list: false },
          ],
          exercise: {
            prompt: `The Kufi reading of ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾ makes خَيْرًا the surviving خبر of an elided كان. The Basri reading rejects that حذف. Which of the following is one of the Basrians' own two explanations for خَيْرًا instead?`,
            kind: 'mcq',
            options: [`مفعول مطلق لآمنوا, with the مفعول مطلق itself elided and خَيْرًا standing as its صفة`, `اسم كان مؤخر`, `مضاف إليه لآمنوا`, `بدل من آمنوا`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `Which condition, if it follows one of يكون/تكون/أكون/نكون while مجزوم, blocks the حذف of its نون?`, options: [`A ضمير نصب متصل follows it`, `A متحرك follows it`, `It is preceded by لم`, `It agrees with a مؤنث اسم`], correct: 0 },
        { q: `كَثْرَةُ المَبْنَى تَدُلُّ عَلَى زِيَادَةِ المَعْنَى is the بلاغة principle behind حذف نون كان. What does it predict about the shorter لَمْ يَكُ compared to لَمْ يَكُنْ?`, options: [`The shorter form points to greater تقليل in the معنى`, `The two forms differ only in poetic metre, never in معنى`, `The shorter form always marks المستقبل`, `The longer form is ungrammatical`], correct: 0 },
        { q: `«الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ» drops كان and its اسم after which شرطية حرف؟`, options: [`لو`, `إن`, `لولا`, `لمّا`], correct: 0 },
        { q: `النَّاسُ مَجْزِيُّونَ بِأَعْمَالِهِمْ إِنْ خَيْرًا فَخَيْرٌ وَإِنْ شَرًّا فَشَرٌّ drops كان and its اسم after إن الشرطية twice. What stays standing each time, and in what إعراب؟`, options: [`The خبر alone, staying منصوب`, `The اسم alone, staying مرفوع`, `Both كان and its اسم survive; only the خبر is dropped`, `Nothing survives — the whole جملة is elided`], correct: 0 },
        { q: `On the Kufi reading of ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾, what role does خَيْرًا keep after يَكُنِ الإِيمَانُ is elided?`, options: [`خبر كان الباقي منصوب`, `فاعل`, `مضاف إليه`, `اسم كان`], correct: 0 },
        { q: `The Basrians reject the Kufi حذف for ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾. Which two roles do they instead propose for خَيْرًا؟`, options: [`مفعول مطلق (with its مطلق itself elided), or مفعول به لفعل مضمر`, `فاعل, or نائب فاعل`, `مبتدأ, or خبر`, `حال, or تمييز`], correct: 0 },
      ],
      bank: [
        { title: `صيغ كان التي تقبل حذف النون`, kind: 'mcq', prompt: `Which four صيغ of كان can drop their نون under the right conditions?`, options: [`يكون، تكون، أكون، نكون`, `كان، أصبح، أمسى، ظل`, `صار، ليس، ما دام، بات`, `يفعل، تفعل، أفعل، نفعل — for any فعل, not just كان`], correct: 0 },
        { title: `الشرط الأول لحذف النون`, kind: 'mcq', prompt: `What is the first of the three conditions for حذف نون كان?`, options: [`The verb must be مجزوم`, `The verb must be مرفوع`, `The verb must be منصوب`, `The verb must carry تنوين`], correct: 0 },
        { title: `لم نك من المصلين`, kind: 'mcq', prompt: `﴿لَمْ نَكُ مِنَ المُصَلِّينَ﴾ shows the نون dropped from لَمْ نَكُنْ. Why is the حذف valid here?`, options: [`The verb is مجزوم and nothing that blocks the حذف follows it`, `Because the verse is in الماضي`, `Because المصلين is مجرور`, `Because the verb has no اسم at all`], correct: 0 },
        { title: `لم يكن الذين كفروا: بقاء النون`, kind: 'mcq', prompt: `﴿لَمْ يَكُنِ الَّذِينَ كَفَرُوا﴾ keeps its نون rather than dropping it. Why?`, options: [`A ساكن follows — the لام of الَّذِينَ`, `The verb is not مجزوم`, `الَّذِينَ is a ضمير نصب متصل`, `النون never drops after لم`], correct: 0 },
        { title: `ولم أكنه: بقاء النون`, kind: 'mcq', prompt: `وَلَمْ أَكُنْهُ keeps its نون. What follows the verb that blocks the حذف?`, options: [`A ضمير نصب متصل`, `A ساكن letter`, `An اسم ظاهر`, `Nothing — the verb here is not مجزوم`], correct: 0 },
        { title: `لو كان الخبر اسما ظاهرا`, kind: 'mcq', prompt: `In وَلَمْ أَكُنْهُ, the حذف is blocked by the attached ضمير. Had the خبر instead been an اسم ظاهر, what does the lesson say would happen?`, options: [`The حذف of the نون would have been available`, `The حذف would still be blocked, for a different reason`, `The whole verb, not just its نون, would be dropped`, `The اسم ظاهر would itself need to be dropped`], correct: 0 },
        { title: `المبدأ: كثرة المبنى وزيادة المعنى`, kind: 'mcq', prompt: `Which principle explains why dropping the نون from كان's صيغ carries a معنى of its own, beyond mere brevity?`, options: [`كثرة المبنى تدل على زيادة المعنى — more letters signal more meaning, so fewer letters signal less`, `النحو never assigns معنى to a dropped letter`, `Only تنوين carries extra معنى when dropped`, `بلاغة has no bearing on نحو رules like هذا`], correct: 0 },
        { title: `قتل مقابل قتّل`, kind: 'mcq', prompt: `The lesson uses قَتَلَ against قَتَّلَ as the standing illustration for كثرة المبنى تدل على زيادة المعنى. What does قَتَّلَ's extra letters (باب التفعيل) indicate?`, options: [`تكثير — an intensified or repeated sense of the action`, `تقليل — a lessened sense of the action`, `No difference in معنى from قَتَلَ at all`, `That the verb has become ناقصا`], correct: 0 },
        { title: `ولم يك شيئا: التطبيق`, kind: 'mcq', prompt: `﴿وَلَمْ يَكُ شَيْئًا﴾ drops the نون from وَلَمْ يَكُنْ. What extra sense does the dropped نون add, per the لسان principle discussed?`, options: [`Emphasis that he was nothing at all — not in the least`, `That the event is in المستقبل, not الماضي`, `That the verb is now تام, not ناقص`, `No extra sense — the دخول is purely stylistic`], correct: 0 },
        { title: `ولم أك بغيا`, kind: 'mcq', prompt: `﴿وَلَمْ أَكُ بَغِيًّا﴾, "and I was not unchaste," drops the نون from أَكُنْ. What does the dropped نون carry here?`, options: [`The sense of "not in the least"`, `A change of tense from الماضي to المضارع`, `A shift from اسم كان مرفوع to منصوب`, `Nothing — the meaning is identical to أَكُنْ`], correct: 0 },
        { title: `شرطا حذف كان مع اسمها بعد إن ولو`, kind: 'mcq', prompt: `After which two شرطية particles can كان be dropped together with its اسم, leaving only the خبر standing?`, options: [`إن ولو`, `إذا ولمّا`, `لولا ولوما`, `متى وأينما`], correct: 0 },
        { title: `تقدير الالتمس ولو خاتما`, kind: 'mcq', prompt: `What is the full تقدير behind «الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ», once the elided كان and its اسم are restored?`, options: [`وَلَوْ كَانَ المُلْتَمَسُ خَاتَمًا`, `وَلَوْ كَانَ خَاتَمًا مَوْجُودًا فِي البَيْتِ`, `وَلَوْ يَكُونُ خَاتَمًا مِنْ ذَهَبٍ`, `وَلَوْ لَيْسَ خَاتَمًا مِنْ حَدِيدٍ`], correct: 0 },
        { title: `فآمنوا خيرا لكم: القراءتان`, kind: 'mcq', prompt: `Grammarians read ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾ two different ways. What is the core disagreement between the Kufi and Basri readings?`, options: [`Whether كان and its اسم are elided before خَيْرًا at all`, `Whether آمِنُوا is فعل أمر or فعل ماض`, `Whether خَيْرًا is مذكر or مؤنث`, `Whether the verse is خبرية or إنشائية`], correct: 0 },
        { title: `جواب الأمر عند الكوفيين`, kind: 'mcq', prompt: `On the Kufi reading of ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾, what grammatical role does the elided يَكُنِ الإِيمَانُ play relative to آمِنُوا؟`, options: [`جواب الأمر`, `بدل من آمِنُوا`, `حال من فاعل آمِنُوا`, `توكيد لآمِنُوا`], correct: 0 },
        { title: `القراءة الأولى عند البصريين`, kind: 'mcq', prompt: `On the first Basri reading of خَيْرًا in ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾, what is the full تقدير?`, options: [`أَيْ آمِنُوا إِيمَانًا خَيْرًا`, `أَيْ آمِنُوا يَكُنِ الإِيمَانُ خَيْرًا لَكُمْ`, `أَيْ كَانَ خَيْرًا لَكُمْ أَنْ تُؤْمِنُوا`, `أَيْ إِنْ آمَنْتُمْ خَيْرًا فَخَيْرٌ`], correct: 0 },
        { title: `القراءة الثانية عند البصريين`, kind: 'mcq', prompt: `On the second Basri reading, خَيْرًا is مفعول به لفعل مضمر. Which reconstruction fits that reading?`, options: [`أَيِ اقْصِدُوا خَيْرًا، أَوِ ائْتُوا خَيْرًا`, `أَيْ آمِنُوا إِيمَانًا خَيْرًا`, `أَيْ يَكُنِ الإِيمَانُ خَيْرًا لَكُمْ`, `أَيْ خَيْرٌ لَكُمُ الإِيمَانُ`], correct: 0 },
        {
          title: `تركيب: الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of «الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ», where كان and its اسم are dropped after لو.`,
          source: `الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ`,
          words: [`الْتَمِسْ`, `وَلَوْ`, `خَاتَمًا`, `مِنْ`, `حَدِيدٍ`],
          labels: [`فعل أمر`, `حرف شرط (كان واسمها محذوفان بعدها)`, `خبر كان المحذوفة، منصوب`, `حرف جر`, `اسم مجرور`],
          distractors: [`مبتدأ`, `فاعل`],
        },
      ],
    },
    // ---------------------------------------------------------------- L3
    {
      id: 'l3',
      title: 'أصبح وأضحى',
      subtitle: 'The Time-of-Day Sisters — كان’s five sisters, distinguished only by the part of day each one fixes',
      sourceRef: 'app-lessons/029',
      concepts: [
        {
          heading: 'أصبح: وقت الصباح، وغدا بمعناه',
          lines: [
            { html: `الأفعال الناقصة continue with five verbs that work exactly the way كان works: each enters on a مبتدأ and خبر, raises the first as اسم مرفوع, and puts the second in نصب. What differs between them is only the part of the day at which the اسم is described by the خبر.`, list: false },
            { box: { title: 'Definition', lines: [`أَصْبَحَ: لِاتِّصَافِ الِاسْمِ بِالخَبَرِ وَقْتَ الصَّبَاحِ`] } },
            { html: `The word that was مبتدأ, now the اسم, held the quality named by the خبر during the morning.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا يَتَرَقَّبُ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا`,
                translation: `He was in the city that morning, afraid and watchful.`,
                cells: [`فَأَصْبَحَ`, `فِي المَدِينَةِ`, `خَائِفًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص + اسمه ضمير مستتر يعود على موسى` }, { start: 1, end: 1, role: `جار ومجرور` }, { start: 2, end: 2, role: `خبر أصبح` }] },
                ],
              },
            },
            { html: `The verse is about سيدنا موسى عليه السلام: أصبح carries its أصل meaning here, the morning period, since الخوف is what موسى was متصف with في الصباح.`, list: false },
            { box: { title: 'Careful', lines: [`قَدْ يُؤْخَذُ يَتَرَقَّبُ خَبَرًا ثَانِيًا، وَحِينَئِذٍ تَأْتِي مَسْأَلَةُ الحَالِ المُتَدَاخِلَةِ`] } },
            { box: { title: 'Rule', lines: [`يَأْتِي غَدَا بِمَعْنَى أَصْبَحَ`] } },
            { html: `<bdi>غَدَا يَغْدُو غُدُوًّا</bdi> belongs to the morning; the same root gives غُدُوًّا وَعَشِيًّا, morning and evening. Many books of نحو leave غدا out of the list of الأفعال الناقصة; others include it.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿وَغَدَوْا عَلَىٰ حَرْدٍ قَادِرِينَ﴾`] } },
            { table: { title: 'قراءتا غَدَوْا', headers: ['Reading of غَدَوْا', 'إعراب of قَادِرِينَ', 'Sense'], rows: [
              [`فعل ناقص، بمعنى أصبح`, `خبر`, `In the morning they were able to carry out what they had set on`],
              [`فعل تام، بمعنى الخروج صباحا`, `حال`, `They set out in the morning, able to carry it out`],
            ] } },
          ],
          exercise: {
            prompt: `﴿وَغَدَوْا عَلَىٰ حَرْدٍ قَادِرِينَ﴾ can be read two ways. If غَدَوْا is read as فعل ناقص بمعنى أصبح, what إعراب does قَادِرِينَ take?`,
            kind: 'mcq',
            options: [`خبر`, `حال`, `فاعل`, `مضاف إليه`],
            correct: 0,
          },
        },
        {
          heading: 'أضحى: وقت الضحى',
          lines: [
            { box: { title: 'Definition', lines: [`أَضْحَى: لِاتِّصَافِ الِاسْمِ بِالخَبَرِ وَقْتَ الضُّحَى`] } },
            { html: `<bdi>الضُّحَى</bdi> is the forenoon, the part of the day before noon — the time of صلاة الضحى.`, list: false },
            { box: { title: 'Example', lines: [`أَضْحَى الرَّجُلُ عَامِلًا`] } },
            {
              tarkeebDiagram: {
                sentence: `أَضْحَى الرَّجُلُ عَامِلًا`,
                translation: `The man was working in the forenoon.`,
                cells: [`أَضْحَى`, `الرَّجُلُ`, `عَامِلًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم أضحى` }, { start: 2, end: 2, role: `خبر أضحى` }] },
                ],
              },
            },
            { box: { title: 'Careful', lines: [`لَمْ يَرِدْ أَضْحَى بِهَذَا المَعْنَى فِي القُرْآنِ، وَلِذَا كَانَ المِثَالُ هُنَا مِثَالًا مُصَنَّعًا`] } },
            { html: `أضحى in this ناقص sense does not occur in the قرآن, and no ready حديث example is found for it either — which is why أَضْحَى الرَّجُلُ عَامِلًا above is a constructed example rather than a quotation.`, list: false },
          ],
          exercise: {
            prompt: `Unlike أصبح, ظل, and بات, أضحى in its الأفعال الناقصة sense has no قرآنية or حديث example on record. What does that make أَضْحَى الرَّجُلُ عَامِلًا?`,
            kind: 'mcq',
            options: [`A constructed example, not a quotation`, `A weak, rejected use of أضحى`, `Proof that أضحى is not really one of أخوات كان`, `A poetic-only usage`],
            correct: 0,
          },
        },
        {
          heading: 'أمسى: وقت المساء',
          lines: [
            { box: { title: 'Definition', lines: [`أَمْسَى: لِاتِّصَافِ الِاسْمِ بِالخَبَرِ وَقْتَ المَسَاءِ`] } },
            { box: { title: 'Example', lines: [`أَمْسَى الرَّجُلُ كَالًّا`] } },
            { html: `"The man was weary in the evening." <bdi>كَالّ</bdi> means worn out, spent.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `أَمْسَى الرَّجُلُ كَالًّا`,
                translation: `The man was weary in the evening.`,
                cells: [`أَمْسَى`, `الرَّجُلُ`, `كَالًّا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم أمسى` }, { start: 2, end: 2, role: `خبر أمسى` }] },
                ],
              },
            },
          ],
          exercise: {
            prompt: `أَمْسَى الرَّجُلُ كَالًّا describes الرجل as worn out during a specific part of the day. Which part?`,
            kind: 'mcq',
            options: [`المساء, the evening`, `الصباح, the morning`, `الضحى, the forenoon`, `الليل, the night`],
            correct: 0,
          },
        },
        {
          heading: 'ظل: وقت الظل، وهو النهار',
          lines: [
            { box: { title: 'Definition', lines: [`ظَلَّ: لِاتِّصَافِ الِاسْمِ بِالخَبَرِ وَقْتَ الظِّلِّ، وَهُوَ النَّهَارُ`] } },
            { html: `<bdi>الظِّلّ</bdi> stands here for the daytime, so ظَلَّ describes the اسم by the خبر across the day.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿وَانْظُرْ إِلَىٰ إِلَٰهِكَ الَّذِي ظَلْتَ عَلَيْهِ عَاكِفًا﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `ظَلْتَ عَلَيْهِ عَاكِفًا`,
                translation: `That you stayed devoted to.`,
                cells: [`ظَلْـ`, `ـتَ`, `عَلَيْهِ`, `عَاكِفًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم ظلّ` }, { start: 2, end: 2, role: `جار ومجرور متعلق بعاكف` }, { start: 3, end: 3, role: `خبر ظلّ` }] },
                ],
              },
            },
            { html: `موسى عليه السلام is speaking to the man who set the calf up as a god: look at the thing you took for a god, the one you have gone on being عاكف over.`, list: false },
            { box: { title: 'Careful', lines: [`قَدْ يَسْقُطُ مَعْنَى النَّهَارِ مِنْ ظَلَّ، فَيَكُونُ المُرَادُ مُجَرَّدَ الاسْتِمْرَارِ لَا امْتِدَادَ اليَوْمِ كُلِّهِ`] } },
            { html: `The day sense sits inside ظَلَّ, but it can drop out — here the reading is simply <em>remained</em>, in the sense of لا زال, rather than "remained all day long."`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ تُحْذَفُ إِحْدَى لَامَيْهِ`] } },
            { html: `﴿ظَلْتَ﴾ is originally <bdi>ظَلِلْتَ</bdi>. One of the two لام has been taken out, leaving ظَلْتَ.`, list: false },
          ],
          exercise: {
            prompt: `﴿ظَلْتَ﴾ in ﴿ظَلْتَ عَلَيْهِ عَاكِفًا﴾ is a shortened form. What is its original form, and what happened to it?`,
            kind: 'mcq',
            options: [`Originally ظَلِلْتَ, with one of its two لام letters dropped`, `Originally ظَلَلْتُ, with its final تاء dropped`, `Originally تَظَلَّلْتَ, with the initial تاء dropped`, `Originally ظَالَلْتَ, with its ألف dropped`],
            correct: 0,
          },
        },
        {
          heading: 'بات: وقت المبيت، وهو الليل',
          lines: [
            { box: { title: 'Definition', lines: [`بَاتَ: لِاتِّصَافِ الِاسْمِ بِالخَبَرِ وَقْتَ المَبِيتِ، وَهُوَ اللَّيْلُ`] } },
            { box: { title: 'Core Text', lines: [`﴿وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا`,
                translation: `Pass the night before their Lord in سجود and قيام.`,
                cells: [`يَبِيتُـ`, `ـونَ`, `لِرَبِّهِمْ`, `سُجَّدًا وَقِيَامًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم بات` }, { start: 2, end: 2, role: `جار ومجرور` }, { start: 3, end: 3, role: `خبر بات` }] },
                ],
              },
            },
            { html: `The night meaning is the one intended: عباد الرحمن are described, during the night, by سجود and قيام. They spend the night making سجدة and standing in قيام before Allah سبحانه وتعالى.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا﴾ describes عباد الرحمن by their خبر during a specific part of the day. Which one?`,
            kind: 'mcq',
            options: [`المبيت, the night`, `الصباح, the morning`, `الظل, the daytime`, `الضحى, the forenoon`],
            correct: 0,
          },
        },
        {
          heading: 'طول المدة: مقارنة الخمسة',
          lines: [
            { html: `The five verbs do not fix periods of equal length.`, list: false },
            { table: { title: 'طول المدة التي يحددها كل فعل', headers: ['Term', 'Period', 'Length'], rows: [
              [`ظَلَّ`, `النهار, the whole day`, `longest`],
              [`بَاتَ`, `الليل, the whole night`, `equally long`],
              [`أَصْبَحَ`, `الصباح`, `shorter`],
              [`أَضْحَى`, `الضحى`, `shorter`],
              [`أَمْسَى`, `المساء`, `shorter`],
            ] } },
            { html: `ظَلَّ and بَاتَ each take in a full half of the twenty-four hours, which puts them together against the other three.`, list: false },
            { box: { title: 'Careful', lines: [`النَّهَارُ فِيهِ حَرَكَةٌ، وَاللَّيْلُ فِيهِ سُكُونٌ، فَظَلَّ يُنَاسِبُ الحَرَكَةَ وَبَاتَ يُنَاسِبُ السُّكُونَ`] } },
            { html: `The two long ones are not coloured alike. النهار carries <bdi>حركة</bdi>, movement and activity, so ظَلَّ suggests something being carried on through the day. اللَّيْل carries the reverse: less حركة, <bdi>سكون</bdi>, sleep — so بَاتَ has a passive weight, the sense of passing the night in some state rather than working through it.`, list: false },
          ],
          exercise: {
            prompt: `Of the five time-of-day sisters, which two fix a period covering a full half of the twenty-four hours, rather than a shorter stretch?`,
            kind: 'mcq',
            options: [`ظل and بات`, `أصبح and أضحى`, `أمسى and أضحى`, `أصبح and بات`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `أصبح، أضحى، أمسى، ظل, and بات all work the way كان works. What is the only thing that differs between them?`, options: [`The part of the day at which the اسم is described by the خبر`, `Whether they take an اسم at all`, `Whether their خبر is مرفوع or منصوب`, `Whether they can be مجزوم`], correct: 0 },
        { q: `﴿فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا يَتَرَقَّبُ﴾ describes سيدنا موسى at a specific time. Which one؟`, options: [`الصباح`, `الضحى`, `المساء`, `المبيت`], correct: 0 },
        { q: `غَدَا يَغْدُو غُدُوًّا can carry the meaning of أصبح. What is true of غدا's place in the list of أخوات كان?`, options: [`Many books of نحو leave it out; others include it`, `Every book of نحو lists it as the fourteenth verb`, `It is universally rejected as an أخت of كان`, `It only ever functions as فعل تام, never ناقص`], correct: 0 },
        { q: `Unlike أصبح, ظل, and بات, what is distinctive about أضحى among the five time-of-day sisters?`, options: [`It has no قرآن or ready حديث example in the ناقص sense — the lesson's own example is constructed`, `It cannot take a خبر منصوب`, `It is the only one restricted to poetry`, `It always functions as فعل تام`], correct: 0 },
        { q: `﴿ظَلْتَ﴾, from ظَلَّ عَلَيْهِ عَاكِفًا, is a shortened form of a longer original. What happened to produce it؟`, options: [`It is originally ظَلِلْتَ, with one of its two لام letters dropped`, `It is originally تَظَلَّلْتَ`, `It is originally ظَالَلْتَ`, `No letters were dropped — ظَلْتَ is the base form`], correct: 0 },
        { q: `Comparing the periods the five sisters fix, which pair covers a full half of the day each, against the other three's shorter stretches؟`, options: [`ظل and بات`, `أصبح and أمسى`, `أضحى and بات`, `أصبح and ظل`], correct: 0 },
      ],
      bank: [
        { title: `الأفعال الخمسة: القاعدة المشتركة`, kind: 'mcq', prompt: `أصبح، أضحى، أمسى، ظل, and بات all share the same عمل as كان. What is that shared عمل?`, options: [`Raising the مبتدأ as اسم مرفوع and putting the خبر in نصب`, `Putting both the اسم and الخبر in نصب`, `Requiring a فاعل rather than an اسم`, `Only ever appearing with a محذوف خبر`], correct: 0 },
        { title: `أصبح: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines أصبح as a فعل ناقص؟`, options: [`It describes the اسم by the خبر during الصباح`, `It describes the اسم by the خبر during الليل`, `It describes the اسم by the خبر during كل اليوم`, `It negates the خبر entirely`], correct: 0 },
        { title: `فأصبح في المدينة خائفا: موسى`, kind: 'mcq', prompt: `﴿فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا يَتَرَقَّبُ﴾ is about which نبي؟`, options: [`سيدنا موسى عليه السلام`, `سيدنا يوسف عليه السلام`, `سيدنا يعقوب عليه السلام`, `سيدنا إبراهيم عليه السلام`], correct: 0 },
        { title: `يترقب: خبر ثانٍ`, kind: 'mcq', prompt: `In ﴿فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا يَتَرَقَّبُ﴾, يَتَرَقَّبُ may be taken as which role, raising the question of حال متداخلة؟`, options: [`خبر ثانٍ لأصبح`, `فاعل لأصبح`, `مضاف إليه`, `بدل من خائفا`], correct: 0 },
        { title: `غدوا على حرد قادرين: القراءتان`, kind: 'mcq', prompt: `﴿وَغَدَوْا عَلَىٰ حَرْدٍ قَادِرِينَ﴾ allows two readings of غَدَوْا — فعل ناقص بمعنى أصبح, or فعل تام meaning "to set out in the morning." On the فعل تام reading, what is قَادِرِينَ؟`, options: [`حال`, `خبر`, `مفعول به`, `نائب فاعل`], correct: 0 },
        { title: `أضحى: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines أضحى as a فعل ناقص؟`, options: [`It describes the اسم by the خبر during الضحى, the forenoon`, `It describes the اسم by the خبر during الصباح, the morning`, `It describes the اسم by the خبر during المساء, the evening`, `It describes the اسم by the خبر during المبيت, the night`], correct: 0 },
        { title: `أضحى الرجل عاملا`, kind: 'mcq', prompt: `أَضْحَى الرَّجُلُ عَامِلًا means "the man was working" during which part of the day؟`, options: [`الضحى, the forenoon`, `الصباح, the morning`, `المساء, the evening`, `المبيت, the night`], correct: 0 },
        { title: `أضحى: غياب المثال القرآني`, kind: 'mcq', prompt: `Why does the lesson describe أَضْحَى الرَّجُلُ عَامِلًا as a "constructed" example rather than a quotation؟`, options: [`أضحى in this ناقص sense has no قرآن occurrence and no readily found حديث example`, `أضحى is not actually one of أخوات كان`, `The sentence uses a rare word`, `أضحى cannot take a اسم ظاهر`], correct: 0 },
        { title: `أمسى: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines أمسى as a فعل ناقص؟`, options: [`It describes the اسم by the خبر during المساء, the evening`, `It describes the اسم by the خبر during الصباح, the morning`, `It describes the اسم by the خبر during الظل, the daytime`, `It describes the اسم by the خبر during المبيت, the night`], correct: 0 },
        { title: `أمسى الرجل كالا: معنى كالّ`, kind: 'mcq', prompt: `أَمْسَى الرَّجُلُ كَالًّا describes الرجل as كَالّ in the evening. What does كَالّ mean؟`, options: [`Worn out, spent`, `Joyful, energetic`, `Hasty`, `Devoted, steadfast`], correct: 0 },
        { title: `ظل: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines ظل as a فعل ناقص؟`, options: [`It describes the اسم by the خبر during الظل, standing here for النهار`, `It describes the اسم by the خبر during المساء`, `It describes the اسم by the خبر during المبيت`, `It negates the خبر`], correct: 0 },
        { title: `ظلت عليه عاكفا: المخاطب`, kind: 'mcq', prompt: `﴿وَانْظُرْ إِلَىٰ إِلَٰهِكَ الَّذِي ظَلْتَ عَلَيْهِ عَاكِفًا﴾ — موسى عليه السلام is speaking to whom about what؟`, options: [`The man who set the calf up as a god, about his devotion to it`, `فرعون, about his claim to divinity`, `هارون عليه السلام, about guarding the قوم`, `بنو إسرائيل, about their journey`], correct: 0 },
        { title: `سقوط معنى النهار من ظل`, kind: 'mcq', prompt: `In ﴿ظَلْتَ عَلَيْهِ عَاكِفًا﴾, does ظَلَّ still carry its full "all day long" sense؟`, options: [`No — the day sense can drop out, leaving simply "remained," in the sense of لا زال`, `Yes — ظل always means the state held for the entire day`, `No — here ظل means المبيت, the night`, `Yes, and additionally it marks الاستقبال`], correct: 0 },
        { title: `بات: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines بات as a فعل ناقص؟`, options: [`It describes the اسم by the خبر during المبيت, the night`, `It describes the اسم by the خبر during الضحى`, `It describes the اسم by the خبر during الظل`, `It describes the اسم by the خبر during الصباح`], correct: 0 },
        { title: `الذين يبيتون لربهم: عباد الرحمن`, kind: 'mcq', prompt: `﴿وَالَّذِينَ يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا﴾ describes عباد الرحمن doing what during the night؟`, options: [`Making سجدة and standing in قيام before Allah`, `Sleeping undisturbed`, `Traveling toward مكة`, `Reciting only in silence, without سجود or قيام`], correct: 0 },
        { title: `طول المدة: الأطول`, kind: 'mcq', prompt: `Comparing the five time-of-day sisters' periods, which one is described as the longest؟`, options: [`ظل, covering النهار, the whole day`, `أصبح, covering الصباح`, `أمسى, covering المساء`, `أضحى, covering الضحى`], correct: 0 },
        { title: `حركة النهار وسكون الليل`, kind: 'mcq', prompt: `The lesson distinguishes ظل from بات even though both cover a full half of the day. What distinguishes them؟`, options: [`النهار carries حركة, so ظل suggests activity carried on through the day; الليل carries سكون, so بات carries a more passive weight`, `ظل only occurs in the قرآن; بات only occurs in حديث`, `ظل takes a منصوب اسم; بات takes a مرفوع اسم`, `There is no real difference between them`], correct: 0 },
        { title: `الأفعال الخمسة: مقارنة عامة`, kind: 'mcq', prompt: `Of the five time-of-day sisters, which three fix a shorter stretch of the day rather than a full half of it؟`, options: [`أصبح، أضحى، وأمسى`, `ظل، بات، وأصبح`, `أضحى، ظل، وبات`, `أمسى، بات، وظل`], correct: 0 },
        { title: `غدا: الجذر والمعنى`, kind: 'mcq', prompt: `غَدَا يَغْدُو غُدُوًّا shares its root with the phrase غُدُوًّا وَعَشِيًّا. What does that phrase mean؟`, options: [`Morning and evening`, `Day and night`, `Sunrise and sunset only`, `Every hour of the day`], correct: 0 },
        {
          title: `تركيب: فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا.`,
          source: `فَأَصْبَحَ فِي المَدِينَةِ خَائِفًا`,
          words: [`فَأَصْبَحَ`, `فِي المَدِينَةِ`, `خَائِفًا`],
          labels: [`فعل ناقص + اسمه ضمير مستتر`, `جار ومجرور`, `خبر أصبح`],
          distractors: [`مبتدأ`, `فاعل`],
        },
        {
          title: `تركيب: أَضْحَى الرَّجُلُ عَامِلًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in أَضْحَى الرَّجُلُ عَامِلًا.`,
          source: `أَضْحَى الرَّجُلُ عَامِلًا`,
          words: [`أَضْحَى`, `الرَّجُلُ`, `عَامِلًا`],
          labels: [`فعل ناقص`, `اسم أضحى`, `خبر أضحى`],
          distractors: [`فاعل`, `مضاف إليه`],
        },
        {
          title: `تركيب: أَمْسَى الرَّجُلُ كَالًّا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in أَمْسَى الرَّجُلُ كَالًّا.`,
          source: `أَمْسَى الرَّجُلُ كَالًّا`,
          words: [`أَمْسَى`, `الرَّجُلُ`, `كَالًّا`],
          labels: [`فعل ناقص`, `اسم أمسى`, `خبر أمسى`],
          distractors: [`نعت`, `بدل`],
        },
        {
          title: `تركيب: ظَلْتَ عَلَيْهِ عَاكِفًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of ظَلْتَ عَلَيْهِ عَاكِفًا.`,
          source: `ظَلْتَ عَلَيْهِ عَاكِفًا`,
          words: [`ظَلْـ`, `ـتَ`, `عَلَيْهِ`, `عَاكِفًا`],
          labels: [`فعل ناقص`, `اسم ظلّ`, `جار ومجرور متعلق بعاكف`, `خبر ظلّ`],
          distractors: [`مضاف إليه`, `فاعل`],
        },
        {
          title: `تركيب: يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا.`,
          source: `يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا وَقِيَامًا`,
          words: [`يَبِيتُـ`, `ـونَ`, `لِرَبِّهِمْ`, `سُجَّدًا وَقِيَامًا`],
          labels: [`فعل ناقص`, `اسم بات`, `جار ومجرور`, `خبر بات`],
          distractors: [`حال`, `مبتدأ`],
        },
      ],
    },
    // ---------------------------------------------------------------- L4
    {
      id: 'l4',
      title: 'صار وأخواتها',
      subtitle: 'صار and Its Borrowed Meaning — تحول الذات and تحول الصفات, then which verbs can carry صار’s sense',
      sourceRef: 'app-lessons/030',
      concepts: [
        {
          heading: 'صار: تحول الذات وتحول الصفات',
          lines: [
            { html: `<bdi>صار</bdi> is the seventh of الأفعال الناقصة. Its meaning is <bdi>تحول</bdi> — to become, to pass from one حال to another. As a فعل ناقص it takes the مبتدأ as its اسم and the خبر as its خبر, and what it reports is that the اسم has come to be the خبر.`, list: false },
            { box: { title: 'Definition', lines: [`صَارَ: لِتَحَوُّلِ الذَّاتِ وَتَحَوُّلِ الصِّفَاتِ`] } },
            { table: { title: 'نوعا التحول في صار', headers: ['Kind', 'What changes', 'Example', 'Translation'], rows: [
              [`تحول الذات`, `The thing itself; one item becomes another item, essence and all`, `صَارَ الخَمْرُ خَلًّا`, `The wine became vinegar`],
              [`تحول الصفات`, `Only the صفة; the entity stays what it was`, `صَارَ المُذْنِبُ مُتَّقِيًا`, `The sinner became God-fearing`],
            ] } },
            { html: `In صَارَ الخَمْرُ خَلًّا the whole substance has turned into something else. In صَارَ المُذْنِبُ مُتَّقِيًا it is the same person throughout, and what has moved is the description attached to him: مذنب out, متقٍ in.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `صَارَ الخَمْرُ خَلًّا`,
                translation: `The wine became vinegar.`,
                cells: [`صَارَ`, `الخَمْرُ`, `خَلًّا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم صار مرفوع` }, { start: 2, end: 2, role: `خبر صار منصوب` }] },
                ],
              },
            },
            {
              tarkeebDiagram: {
                sentence: `صَارَ المُذْنِبُ مُتَّقِيًا`,
                translation: `The sinner became God-fearing.`,
                cells: [`صَارَ`, `المُذْنِبُ`, `مُتَّقِيًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم صار مرفوع` }, { start: 2, end: 2, role: `خبر صار منصوب` }] },
                ],
              },
            },
            { box: { title: 'Careful', lines: [`الوَجْهُ الفَصِيحُ صَارَتِ الخَمْرُ خَلًّا؛ لِأَنَّ خَمْرًا مُؤَنَّثٌ، وَوُرُودُهُ بِلَا تَاءٍ يَبْدُو كَالسَّهْوِ`] } },
            { html: `The wording as it stands is صَارَ الخَمْرُ خَلًّا.`, list: false },
            { html: `خمر is مؤنث, so صَارَتِ الخَمْرُ خَلًّا is what would be expected — the form without the تاء looks like a slip.`, list: false },
          ],
          exercise: {
            prompt: `In صَارَ الخَمْرُ خَلًّا the whole substance turns into something else, while in صَارَ المُذْنِبُ مُتَّقِيًا the same person remains, only the description changes. Which is تحول الصفات؟`,
            kind: 'mcq',
            options: [`صَارَ المُذْنِبُ مُتَّقِيًا`, `صَارَ الخَمْرُ خَلًّا`, `Both are تحول الذات`, `Neither is a real instance of تحول`],
            correct: 0,
          },
        },
        {
          heading: 'الأفعال الست التي تأتي بمعنى صار',
          lines: [
            { box: { title: 'Rule', lines: [`قَدْ تَكُونُ كَانَ وَأَصْبَحَ وَأَضْحَى وَأَمْسَى وَظَلَّ وَبَاتَ بِمَعْنَى صَارَ`] } },
            { html: `Each of these six may report a change from one state to another, exactly as صار does.`, list: false },
            { box: { title: 'Rule', lines: [`إِذَا كَانَتْ كَلِمَةٌ بِمَعْنَى كَلِمَةٍ أُخْرَى لَا يَزُولُ عَنْهَا مَعْنَاهَا الأَصْلِيُّ زَوَالًا تَامًّا`] } },
            { html: `Saying that one word carries the meaning of another never means it has swapped identities with it. Its own original meaning stays present in some measure. If أصبح carries the sense of صار, the صبح inside it is still doing work — otherwise there would have been no reason to reach for أصبح when صار was available. The same holds for أمسى, for ظل, and for the rest.`, list: false },
            { box: { title: 'Careful', lines: [`لَيْسَ لِكُلِّ اسْتِعْمَالٍ جَوَابٌ مَنْشُورٌ عَمَّا يُفِيدُهُ المَعْنَى البَاقِي، فَلْيُحْمَلِ المَبْدَأُ وَلْيُحْتَفَظْ بِالسُّؤَالِ حَيْثُ تُثِيرُهُ آيَةٌ بِعَيْنِهَا`] } },
            { html: `Not every occurrence has a settled published answer for what the retained original meaning contributes. Hold the principle, and where a particular verse raises the question, keep the question and look for the answer over time.`, list: false },
          ],
          exercise: {
            prompt: `If أصبح is used بمعنى صار in a verse, what does the rule إِذَا كَانَتْ كَلِمَةٌ بِمَعْنَى كَلِمَةٍ أُخْرَى لَا يَزُولُ عَنْهَا مَعْنَاهَا الأَصْلِيُّ زَوَالًا تَامًّا say about أصبح's own original morning-sense (الصبح)?`,
            kind: 'mcq',
            options: [`It stays present in some measure — it doesn't vanish just because أصبح now carries صار's sense`, `It disappears entirely once أصبح means صار`, `It only survives when أصبح is فعل تام, never ناقص`, `It transfers fully onto صار itself`],
            correct: 0,
          },
        },
        {
          heading: 'كان بمعنى صار',
          lines: [
            { box: { title: 'Core Text', lines: [`﴿فَسَجَدَ الْمَلَائِكَةُ كُلُّهُمْ أَجْمَعُونَ إِلَّا إِبْلِيسَ اسْتَكْبَرَ وَكَانَ مِنَ الْكَافِرِينَ﴾`] } },
            { html: `"The angels prostrated to Ādam, all of them together, except إبليس. He refused out of استكبار, and he was among the disbelievers." إبليس is the استثناء from the general سجود.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `وَكَانَ مِنَ الْكَافِرِينَ`,
                translation: `And he was among the disbelievers.`,
                cells: [`وَكَانَ`, `(هُوَ)`, `مِنَ الْكَافِرِينَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم كان، ضمير مستتر` }, { start: 2, end: 2, role: `شبه جملة في محل نصب خبر كان` }] },
                ],
              },
            },
            { html: `The مفسرون differ over what كان is doing here.`, list: false },
            { table: { title: 'قراءتا وَكَانَ مِنَ الْكَافِرِينَ', headers: ['Reading', 'What it says about إبليس'], rows: [
              [`كان على حقيقتها الأصلية`, `He always was among الكافرين — the سجود and عبادة seen from him were outward appearance only`],
              [`كان بمعنى صار، قراءة مجازية`, `He became one of الكافرين, after having been in سجود وعبادة`],
            ] } },
            { html: `On the second reading, the obvious question is why كان was used at all, if صار is what is meant. The answer is that the ماضي sense built into كان does not leave: it says this outcome was already destined for him, so that although he became a kafir, nothing was overturned in the process — the change came out of his own nature.`, list: false },
            { box: { title: 'Rule', lines: [`كَانَ بِمَعْنَى صَارَ يَدُلُّ عَلَى أَنَّ التَّحَوُّلَ مِنْ طَبِيعَتِهِ`] } },
          ],
          exercise: {
            prompt: `On the second reading of ﴿وَكَانَ مِنَ الْكَافِرِينَ﴾ (كان بمعنى صار), why does the answer given not treat the use of كان, rather than صار, as arbitrary?`,
            kind: 'mcq',
            options: [`كان's own ماضي sense signals the outcome was already destined — the change came from إبليس's own nature`, `كان and صار are simply synonyms with no difference at all`, `صار cannot grammatically follow إلّا in an استثناء`, `كان here is فعل تام, not ناقص, so the question doesn't arise`],
            correct: 0,
          },
        },
        {
          heading: 'أصبح بمعنى صار',
          lines: [
            { box: { title: 'Core Text', lines: [`﴿كُنْتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا﴾`] } },
            { html: `"You were enemies, and He joined your hearts together, and by His favour you became brothers."`, list: false },
            {
              tarkeebDiagram: {
                sentence: `فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا`,
                translation: `And by His favour you became brothers.`,
                cells: [`فَأَصْبَحْـ`, `ـتُمْ`, `بِنِعْمَتِهِ`, `إِخْوَانًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص بمعنى صار` }, { start: 1, end: 1, role: `اسم أصبح` }, { start: 2, end: 2, role: `جار ومجرور` }, { start: 3, end: 3, role: `خبر أصبح منصوب` }] },
                ],
              },
            },
            { html: `فَصِرْتُمْ بِنِعْمَتِهِ إِخْوَانًا was available, and أصبح was used instead. أصبح is built on صبح, which carries freshness, morning, new light, the turn out of darkness into brightness. The people addressed had been living in يثرب with war, bloodshed, enmity, rancour and hatred among them.`, list: false },
            { html: `فَأَصْبَحْتُمْ pictures them waking to find themselves brothers, after the Prophet ﷺ had worked on them, taken their بيعة, and reconciled them — a fresh dawn for المدينة المنورة, and the change reached well past the city, to the face of the whole world. صرتم would report the change and carry none of that. والله أعلم.`, list: false },
          ],
          exercise: {
            prompt: `﴿فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا﴾ could have said فَصِرْتُمْ بِنِعْمَتِهِ إِخْوَانًا instead. What does أصبح add that صرتم would not have carried?`,
            kind: 'mcq',
            options: [`The image of a fresh dawn — أصبح is built on صبح, freshness and new light after the darkness of enmity`, `Nothing — the two verbs are fully interchangeable in every respect`, `A shift in tense from الماضي to المستقبل`, `A change from خبر منصوب to خبر مرفوع`],
            correct: 0,
          },
        },
        {
          heading: 'ظل بمعنى صار',
          lines: [
            { box: { title: 'Core Text', lines: [`﴿وَإِذَا بُشِّرَ أَحَدُهُمْ بِمَا ضَرَبَ لِلرَّحْمَٰنِ مَثَلًا ظَلَّ وَجْهُهُ مُسْوَدًّا وَهُوَ كَظِيمٌ﴾`] } },
            { html: `"When one of them is given news of the very thing he strikes as a likeness for the Most Merciful, his face turns dark and he is choked with rage." The likeness they strike for Allah is that the ملائكة are His daughters, بنات الله — the verse turns that on them: give one of them the same news about himself, and his own face goes dark.`, list: false },
            {
              tarkeebDiagram: {
                sentence: `ظَلَّ وَجْهُهُ مُسْوَدًّا`,
                translation: `His face turns dark.`,
                cells: [`ظَلَّ`, `وَجْهُهُ`, `مُسْوَدًّا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص بمعنى صار` }, { start: 1, end: 1, role: `اسم ظل مرفوع` }, { start: 2, end: 2, role: `خبر ظل منصوب` }] },
                ],
              },
            },
            { html: `Two reasons are given for ظل here rather than أصبح or صار: (1) ظل is built on ظِلّ, shade and darkness, which suits مُسَوَّدًّا, darkening and blackness — أصبح would have brought morning brightness into a verse about a face going dark, pulling against the image instead of with it; (2) ظل carries <bdi>امتداد</bdi>, a stretch of time — the state holds through the day and does not come to an end, while صار reports the change and says nothing about how long it lasts.`, list: false },
            { box: { title: 'Rule', lines: [`لَعَلَّ الفَائِدَةَ فِي كَلِمَةِ ظَلَّ أَنَّهَا تُنَاسِبُ كَلِمَةَ مُسْوَدًّا، وَكَذَلِكَ فِي ظَلَّ امْتِدَادٌ لَيْسَ فِي صَارَ`] } },
            { html: `والله أعلم.`, list: false },
          ],
          exercise: {
            prompt: `Two reasons are suggested for why ﴿ظَلَّ وَجْهُهُ مُسْوَدًّا﴾ uses ظل rather than أصبح or صار. Which pair correctly names them?`,
            kind: 'mcq',
            options: [`ظل's root suits darkening (unlike أصبح's brightness), and ظل carries امتداد, duration, which صار lacks`, `ظل is the only one of the three that can take a خبر منصوب`, `ظل is مذكر while أصبح and صار are مؤنث`, `ظل is قياسي while أصبح and صار are سماعي`],
            correct: 0,
          },
        },
        {
          heading: 'أفعال أخرى بمعنى صار: ارتد وعاد واستحال',
          lines: [
            { html: `Outside كان وأخواتها, further أفعال come in the meaning of صار.`, list: false },
            { table: { title: 'أفعال أخرى بمعنى صار', headers: ['Term', 'Example', 'Translation', 'What it adds beyond صار'], rows: [
              [`ارتدّ`, `﴿فَارْتَدَّ بَصِيرًا﴾`, `He became seeing`, `Becoming something one had been before`],
              [`عاد`, `﴿أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا﴾`, `Or you will return into our ملة`, `Returning to a former state, here only on the speakers' own زعم`],
              [`استحال`, `إِنَّ العَدَاوَةَ تَسْتَحِيلُ مَوَدَّةً`, `Enmity turns into affection`, `A state turning into its opposite`],
            ] } },
            {
              tarkeebDiagram: {
                sentence: `فَارْتَدَّ بَصِيرًا`,
                translation: `He became seeing.`,
                cells: [`فَارْتَدَّ`, `بَصِيرًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص بمعنى صار + اسمه ضمير مستتر` }, { start: 1, end: 1, role: `خبر ارتدّ منصوب` }] },
                ],
              },
            },
            { html: `يعقوب عليه السلام had lost his sight from grief over يوسف: ﴿وَابْيَضَّتْ عَيْنَاهُ مِنَ الْحُزْنِ فَهُوَ كَظِيمٌ﴾. When the shirt was sent back and cast over his face, فَارْتَدَّ بَصِيرًا — he became seeing. ارتدّ is from ردّ, to return, so what it reports is that he became seeing <em>again</em>, back to a state he had held before — صار on its own does not carry that.`, list: false },
            { box: { title: 'Rule', lines: [`لَعَلَّ الفَائِدَةَ فِي كَلِمَةِ ارْتَدَّ الدَّلَالَةُ عَلَى الصَّيْرُورَةِ إِلَى حَالٍ سَابِقٍ`] } },
            { html: `عاد likewise reports return: some read ﴿لَتَعُودُنَّ فِي مِلَّتِنَا﴾ بمعنى صار, since شعيب was never actually in his people's ملة for him to return to it. The easier answer keeps عاد on its own meaning of going back, read as the قوم's own زعم — before نبوة, شعيب did not speak against their شرك, so it looked to them as though he later changed his religion.`, list: false },
            { box: { title: 'Rule', lines: [`العَوْدُ إِلَى مِلَّةِ الكُفْرِ بِاعْتِبَارِ زَعْمِ قَوْمِهِ المُتَكَلِّمُونَ، وَإِلَّا فَلَمْ يَكُنْ نَبِيٌّ عَلَى الكُفْرِ قَطُّ`] } },
            { html: `استحال likewise reports a change of state: إِنَّ العَدَاوَةَ تَسْتَحِيلُ مَوَدَّةً بِتَدَارُكِ الهَفَوَاتِ بِالحَسَنَاتِ, "enmity turns into affection, by making good the slips with acts of kindness" — someone treats you badly and you repay it with good, and that turns العداوة into مودة.`, list: false },
          ],
          exercise: {
            prompt: `Of ارتدّ, عاد, and استحال, which one specifically adds the sense of becoming something one had already been before, rather than simply changing state?`,
            kind: 'mcq',
            options: [`ارتدّ — from ردّ, to return, so فَارْتَدَّ بَصِيرًا means he became seeing again`, `استحال — since it names a state turning into its opposite`, `عاد — since it always names a real, undisputed return to a former state`, `None of the three carries any sense of return`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `صَارَ المُذْنِبُ مُتَّقِيًا keeps the same person throughout, only changing the description attached to him. Which kind of تحول does صار report here؟`, options: [`تحول الصفات`, `تحول الذات`, `Neither — this is not really تحول at all`, `Both types at once`], correct: 0 },
        { q: `The wording صَارَ الخَمْرُ خَلًّا omits a تاء التأنيث that خمر, being مؤنث, would seem to require. What does the lesson say about this?`, options: [`صَارَتِ الخَمْرُ خَلًّا is the expected فصيح wording; the form without التاء looks like a slip`, `خمر is مذكر, so no تاء is expected at all`, `صار never takes a تاء التأنيث under any circumstance`, `The omission is a deliberate بلاغي device with a stated purpose`], correct: 0 },
        { q: `أصبح carries the sense of صار in ﴿فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا﴾. What does the rule on retained original meaning say should still be true of أصبح's own صبح-sense here؟`, options: [`It stays present in some measure, which is part of why أصبح was chosen over صار`, `It vanishes completely once أصبح means صار`, `It transfers onto إِخْوَانًا instead of staying in أصبح`, `It only applies to كان, not to أصبح`], correct: 0 },
        { q: `On the قراءة مجازية of ﴿وَكَانَ مِنَ الْكَافِرِينَ﴾ (كان بمعنى صار), what does the rule كَانَ بِمَعْنَى صَارَ يَدُلُّ عَلَى أَنَّ التَّحَوُّلَ مِنْ طَبِيعَتِهِ add that صار alone would not؟`, options: [`That the change came from إبليس's own nature, already destined, rather than being an arbitrary shift`, `That إبليس never actually disbelieved`, `That the verse must be read حقيقةً, not مجازًا`, `That كان here is فعل تام`], correct: 0 },
        { q: `Two reasons are given for using ظل rather than أصبح or صار in ﴿ظَلَّ وَجْهُهُ مُسْوَدًّا﴾. What are they؟`, options: [`ظل's root image suits darkening rather than brightness, and it carries امتداد (duration) that صار lacks`, `ظل is the only one of the three that can govern a خبر at all`, `ظل is مبني while أصبح and صار are معربة`, `ظل only appears with a مؤنث اسم`], correct: 0 },
        { q: `فَارْتَدَّ بَصِيرًا reports يعقوب عليه السلام regaining his sight. What does ارتدّ add here that صار alone would not؟`, options: [`That he became seeing again — back to a state he had already held before`, `That his sight became permanently damaged`, `That the change was gradual rather than sudden`, `That the change was against his own طبيعة`], correct: 0 },
      ],
      bank: [
        { title: `صار: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines صار as a فعل ناقص؟`, options: [`It reports تحول الذات or تحول الصفات — the اسم coming to be the خبر`, `It negates the خبر entirely`, `It only ever reports تحول الذات, never تحول الصفات`, `It requires a فاعل rather than an اسم`], correct: 0 },
        { title: `تحول الذات: صار الخمر خلا`, kind: 'mcq', prompt: `صَارَ الخَمْرُ خَلًّا reports the whole substance turning into something else, essence and all. Which kind of تحول is this؟`, options: [`تحول الذات`, `تحول الصفات`, `لا تحول هنا أصلا`, `كلا النوعين معا`], correct: 0 },
        { title: `تحول الصفات: صار المذنب متقيا`, kind: 'mcq', prompt: `In صَارَ المُذْنِبُ مُتَّقِيًا, the person stays the same throughout. What changes?`, options: [`Only the صفة attached to him — مذنب out, متقٍ in`, `His essential ذات, into an entirely different entity`, `Nothing changes — the sentence reports no تحول`, `His اسم changes from مرفوع to منصوب`], correct: 0 },
        { title: `الأفعال الست بمعنى صار`, kind: 'mcq', prompt: `Which six verbs, according to the rule قَدْ تَكُونُ كَانَ وَأَصْبَحَ وَأَضْحَى وَأَمْسَى وَظَلَّ وَبَاتَ بِمَعْنَى صَارَ, can also carry صار's meaning of change?`, options: [`كان، أصبح، أضحى، أمسى، ظل، وبات`, `ليس، ما دام، ما زال، ما فتئ، ما برح، وما انفك`, `صار، عاد، ارتد، استحال، آض، وراح`, `كان، ليس، صار، ظل، ما دام، وبات`], correct: 0 },
        { title: `مبدأ بقاء المعنى الأصلي`, kind: 'mcq', prompt: `When ظل carries the meaning of صار, what does the rule on retained meaning say about ظل's own original الظل sense?`, options: [`It doesn't vanish completely — it stays present in some measure`, `It disappears the instant ظل means صار`, `It transfers onto صار instead of staying in ظل`, `The rule only applies to أصبح, not to ظل`], correct: 0 },
        { title: `كان بمعنى صار: القراءة الأولى`, kind: 'mcq', prompt: `On the حقيقي reading of ﴿وَكَانَ مِنَ الْكَافِرِينَ﴾, what does it say about إبليس?`, options: [`He always was among الكافرين; his سجود and عبادة were only outward appearance`, `He became a disbeliever only at that moment`, `He was never among the ملائكة to begin with`, `He repented afterward and left الكافرين`], correct: 0 },
        { title: `كان بمعنى صار: القراءة الثانية`, kind: 'mcq', prompt: `On the مجازي reading of ﴿وَكَانَ مِنَ الْكَافِرِينَ﴾ (كان بمعنى صار), what does it say about إبليس؟`, options: [`He became one of الكافرين, after having been in سجود وعبادة`, `He was always among الكافرين from the start`, `He never actually disbelieved`, `He is described as كافر only metaphorically, not literally`], correct: 0 },
        { title: `لماذا استُعملت كان لا صار`, kind: 'mcq', prompt: `If كان بمعنى صار in ﴿وَكَانَ مِنَ الْكَافِرِينَ﴾, why not simply use صار directly?`, options: [`كان's own ماضي sense signals the outcome was already destined for إبليس, from his own nature`, `صار cannot follow إلّا in an استثناء`, `كان and صار are not actually interchangeable in any context`, `The verse requires a فعل تام, and صار is always ناقص`], correct: 0 },
        { title: `أصبحتم إخوانا: السياق`, kind: 'mcq', prompt: `﴿فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا﴾ follows a description of the addressees as أعداء whose hearts Allah joined together. What historical situation does this describe؟`, options: [`The people of يثرب, reconciled by the Prophet ﷺ after war and enmity among them`, `The Quraysh accepting Islam after the conquest of مكة`, `The الأنصار welcoming the المهاجرون after الهجرة`, `A dispute between two individuals resolved by a judge`], correct: 0 },
        { title: `لماذا أصبح لا صار (الإخوان)`, kind: 'mcq', prompt: `فَصِرْتُمْ بِنِعْمَتِهِ إِخْوَانًا was available as an alternative to فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا. What image does أصبح add that صرتم would not carry؟`, options: [`A fresh dawn, new light breaking after the darkness of enmity — the sense built into صبح`, `A stronger emphasis on permanence than صار carries`, `A shift from خبر منصوب to خبر مرفوع`, `Nothing — the two are fully interchangeable here`], correct: 0 },
        { title: `ظل وجهه مسودا: السياق`, kind: 'mcq', prompt: `﴿ظَلَّ وَجْهُهُ مُسْوَدًّا وَهُوَ كَظِيمٌ﴾ describes a reaction to being told what news about himself؟`, options: [`That he himself has been given a daughter — the same claim he makes about الرحمن having daughters`, `That he has lost his wealth`, `That his sins have been forgiven`, `That his family has emigrated`], correct: 0 },
        { title: `لماذا ظل لا أصبح (الوجه المسود)`, kind: 'mcq', prompt: `Why would أصبح have been a poor choice in ﴿ظَلَّ وَجْهُهُ مُسْوَدًّا﴾, according to the lesson؟`, options: [`أصبح's root carries morning brightness, which pulls against a verse describing a face going dark`, `أصبح cannot take a خبر منصوب`, `أصبح is restricted to human subjects only`, `أصبح never occurs with a صفة مشبهة as its خبر`], correct: 0 },
        { title: `لماذا ظل لا صار (الامتداد)`, kind: 'mcq', prompt: `Beyond suiting the image of darkening, what second reason favors ظل over صار in ﴿ظَلَّ وَجْهُهُ مُسْوَدًّا﴾؟`, options: [`ظل carries امتداد — the state holds through the day — while صار reports only the change, without duration`, `ظل is grammatically required after بُشِّرَ`, `صار cannot take a مرفوع اسم`, `ظل is more common in poetry than صار`], correct: 0 },
        { title: `ارتد بصيرا: يعقوب ويوسف`, kind: 'mcq', prompt: `فَارْتَدَّ بَصِيرًا reports يعقوب عليه السلام regaining his sight after what event؟`, options: [`يوسف's shirt being sent back and cast over his face`, `A دعاء he made after years of waiting`, `A miracle performed by يوسف directly`, `The passage of enough time for his grief to fade naturally`], correct: 0 },
        { title: `معنى ارتد الإضافي`, kind: 'mcq', prompt: `ارتدّ is built on ردّ, to return. What does that root add to فَارْتَدَّ بَصِيرًا beyond what صار alone would say؟`, options: [`That يعقوب became seeing again — he had held that state before`, `That his sight became permanently perfect, better than before`, `That the change happened gradually over years`, `Nothing — ارتدّ and صار carry identical senses`], correct: 0 },
        { title: `عاد في ملتنا: القراءتان`, kind: 'mcq', prompt: `﴿أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا﴾ is addressed to شعيب عليه السلام. Why does the lesson prefer keeping عاد on its own meaning of "returning," read as the قوم's own زعم, over a صار reading؟`, options: [`No نبي was ever upon كفر, so a true "return" to it is impossible — the wording instead reflects the قوم's own mistaken assumption`, `عاد can never mean صار under any circumstance in Arabic`, `شعيب's ملة before نبوة was identical to his قوم's شرك`, `The قرآن never permits two readings of the same verse`], correct: 0 },
        { title: `استحال مودة: تدارك الهفوات`, kind: 'mcq', prompt: `إِنَّ العَدَاوَةَ تَسْتَحِيلُ مَوَدَّةً بِتَدَارُكِ الهَفَوَاتِ بِالحَسَنَاتِ describes enmity turning into affection. What is said to bring that change about؟`, options: [`Repaying someone's bad treatment with acts of kindness`, `Simply waiting for enough time to pass`, `Formally ending the relationship first`, `A third party intervening to mediate`], correct: 0 },
        {
          title: `تركيب: صَارَ الخَمْرُ خَلًّا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in صَارَ الخَمْرُ خَلًّا.`,
          source: `صَارَ الخَمْرُ خَلًّا`,
          words: [`صَارَ`, `الخَمْرُ`, `خَلًّا`],
          labels: [`فعل ناقص`, `اسم صار مرفوع`, `خبر صار منصوب`],
          distractors: [`فاعل`, `مضاف إليه`],
        },
        {
          title: `تركيب: صَارَ المُذْنِبُ مُتَّقِيًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in صَارَ المُذْنِبُ مُتَّقِيًا.`,
          source: `صَارَ المُذْنِبُ مُتَّقِيًا`,
          words: [`صَارَ`, `المُذْنِبُ`, `مُتَّقِيًا`],
          labels: [`فعل ناقص`, `اسم صار مرفوع`, `خبر صار منصوب`],
          distractors: [`نعت`, `بدل`],
        },
        {
          title: `تركيب: وَكَانَ مِنَ الْكَافِرِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَكَانَ مِنَ الْكَافِرِينَ.`,
          source: `وَكَانَ مِنَ الْكَافِرِينَ`,
          words: [`وَكَانَ`, `(هُوَ)`, `مِنَ الْكَافِرِينَ`],
          labels: [`فعل ناقص`, `اسم كان، ضمير مستتر`, `شبه جملة في محل نصب خبر كان`],
          distractors: [`فاعل`, `مضاف إليه`],
        },
        {
          title: `تركيب: فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا.`,
          source: `فَأَصْبَحْتُمْ بِنِعْمَتِهِ إِخْوَانًا`,
          words: [`فَأَصْبَحْـ`, `ـتُمْ`, `بِنِعْمَتِهِ`, `إِخْوَانًا`],
          labels: [`فعل ناقص بمعنى صار`, `اسم أصبح`, `جار ومجرور`, `خبر أصبح منصوب`],
          distractors: [`حال`, `فاعل`],
        },
        {
          title: `تركيب: ظَلَّ وَجْهُهُ مُسْوَدًّا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in ظَلَّ وَجْهُهُ مُسْوَدًّا.`,
          source: `ظَلَّ وَجْهُهُ مُسْوَدًّا`,
          words: [`ظَلَّ`, `وَجْهُهُ`, `مُسْوَدًّا`],
          labels: [`فعل ناقص بمعنى صار`, `اسم ظل مرفوع`, `خبر ظل منصوب`],
          distractors: [`مضاف إليه`, `نعت`],
        },
        {
          title: `تركيب: فَارْتَدَّ بَصِيرًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَارْتَدَّ بَصِيرًا.`,
          source: `فَارْتَدَّ بَصِيرًا`,
          words: [`فَارْتَدَّ`, `بَصِيرًا`],
          labels: [`فعل ناقص بمعنى صار + اسمه ضمير مستتر`, `خبر ارتدّ منصوب`],
          distractors: [`فاعل`, `مفعول به`],
        },
      ],
    },
    // ---------------------------------------------------------------- L5
    {
      id: 'l5',
      title: 'أفعال الاستمرار',
      subtitle: 'The Continuity Verbs — four أخوات كان whose older, complete-verb meaning still works inside their ناقص use',
      sourceRef: 'app-lessons/031',
      concepts: [
        {
          heading: 'ما برح: معناه الأصلي وشرط السياق المكاني',
          lines: [
            { html: `Four more of كان وأخواتها, all of them <bdi>للاستمرار</bdi>. Each one says that something continues, that it stays in the state named by the خبر. What separates them is the meaning each one carried before it joined this group: all four were ordinary complete أفعال first, and that older meaning is still working inside the ناقص use.`, list: false },
            { table: { title: 'أفعال الاستمرار الأربعة', headers: ['Term', 'Sense underneath it', 'Example', 'Translation'], rows: [
              [`مَا بَرِحَ`, `has not left the place`, `﴿لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾`, `We will not leave off being devoted to it`],
              [`مَا انْفَكَّ`, `has not broken free of it`, `مَا انْفَكَّ المُذْنِبُ رَاجِيًا`, `The sinner has not ceased to be hopeful`],
              [`مَا زَالَ`, `has not come to an end`, `﴿فَمَا زِلْتُمْ فِي شَكٍّ﴾`, `You have not ceased to be in doubt`],
              [`مَا فَتِئَ`, `has not been stilled, quenched, or forgotten`, `﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾`, `By Allah, you will not cease to remember Yusuf`],
            ] } },
            { box: { title: 'Core Text', lines: [`الثَّامِنُ مَا بَرِحَ، وَهُوَ لِلِاسْتِمْرَارِ`] } },
            { box: { title: 'Core Text', lines: [`﴿قَالُوا لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ`,
                translation: `We will not leave off being devoted to it.`,
                cells: [`لَنْ`, `نَبْرَحَ`, `عَلَيْهِ`, `عَاكِفِينَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف نفي ونصب` }, { start: 1, end: 1, role: `فعل ناقص منصوب + اسمها ضمير مستتر` }, { start: 2, end: 2, role: `جار ومجرور متعلق بعاكفين` }, { start: 3, end: 3, role: `خبرها منصوب بالياء` }] },
                ],
              },
            },
            { html: `بنو إسرائيل are speaking about the calf: they would stay at it حَتَّى يَرْجِعَ إِلَيْنَا مُوسَى, "until Musa came back to them." بَرِحَ on its own means <bdi>تَرْكُ المَكَانِ</bdi>, leaving a place — بَرِحْتُ is "I left this spot."`, list: false },
            { box: { title: 'Careful', lines: [`مَعْنَى كَلِمَةِ بَرِحَ تَرْكُ المَكَانِ، وَلَمْ يَأْتِ فِي التَّنْزِيلِ إِلَّا فِي سِيَاقِ المَكَانِ`] } },
            { html: `Since the root sense is leaving a place, ما برح goes with staying somewhere physically rather than remaining in a condition. لَنْ أَبْرَحَ قَائِمًا and لَنْ أَبْرَحَ قَاعِدًا fit it, because standing and sitting are ways of being in a place. مَا بَرِحَ حَزِينًا, "he remained grieved," names a state rather than a place, and that is not the work برح is built for — in التنزيل the word appears only in the context of place.`, list: false },
          ],
          exercise: {
            prompt: `بَرِحَ on its own means تَرْكُ المَكَانِ, leaving a place. Given that root sense, which of the following best fits how ما برح is actually used, per the Careful box؟`,
            kind: 'mcq',
            options: [`لَنْ أَبْرَحَ قَائِمًا — standing is a way of being in a place`, `مَا بَرِحَ حَزِينًا — grief is a state, not a place`, `Either sentence fits ما برح equally well`, `ما برح cannot be used with any منصوب خبر at all`],
            correct: 0,
          },
        },
        {
          heading: 'ما انفك: معناه الأصلي',
          lines: [
            { box: { title: 'Core Text', lines: [`التَّاسِعُ مَا انْفَكَّ، وَهُوَ لِلِاسْتِمْرَارِ، نَحْوُ: مَا انْفَكَّ المُذْنِبُ رَاجِيًا`] } },
            {
              tarkeebDiagram: {
                sentence: `مَا انْفَكَّ المُذْنِبُ رَاجِيًا`,
                translation: `The sinner has not ceased to be hopeful.`,
                cells: [`مَا`, `انْفَكَّ`, `المُذْنِبُ`, `رَاجِيًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `نفي` }, { start: 1, end: 1, role: `فعل ناقص` }, { start: 2, end: 2, role: `اسمها مرفوع` }, { start: 3, end: 3, role: `خبرها منصوب` }] },
                ],
              },
            },
            { box: { title: 'Definition', lines: [`انْفَكَّ مُطَاوِعُ فَكَّ، وَهُوَ مِنْ فَكَّ الأَسِيرَ إِذَا خَلَّصَهُ وَأَطْلَقَ سَرَاحَهُ`] } },
            { html: `فَكَّ الأَسِيرَ is to free a captive and let him go. Do that to someone and فَكَّهُ فَانْفَكَّ: he came loose, separated, dislodged, taken away from whatever held him. That is what ما انفك says of a person: he has not broken free of the thing, has not been released from it. The word does not occur in the Qur'an — a line of poetry is where it is most likely to be met.`, list: false },
            { box: { title: 'Careful', lines: [`الأَقْيَسُ أَنْ يَنْفَكَّ المَرْءُ عَمَّا يُرْغَبُ فِي التَّخَلُّصِ مِنْهُ، لَا عَمَّا يُرْجَى دَوَامُهُ`] } },
            { html: `Measured against that root sense, مَا انْفَكَّ المُذْنِبُ رَاجِيًا is not the sharpest illustration, since رَجَاء is not something anyone wants to break free of. Turn the example round and it fits better: مَا انْفَكَّ الرَّجُلُ مُذْنِبًا, "the man is still sinful," meaning he has not yet broken free of his sins — انفكّ is at its most natural when what is being escaped is something you would want to escape.`, list: false },
          ],
          exercise: {
            prompt: `انفكّ is مطاوع فكّ, built on freeing a captive — coming loose from something that held you. Why does the lesson call مَا انْفَكَّ المُذْنِبُ رَاجِيًا "not the sharpest illustration" of that root sense؟`,
            kind: 'mcq',
            options: [`رَجَاء isn't something anyone would want to break free of, unlike مَا انْفَكَّ الرَّجُلُ مُذْنِبًا, which fits the root sense better`, `المُذْنِبُ is not a valid اسم انفك at all`, `رَاجِيًا cannot grammatically serve as a خبر`, `انفكّ never occurs with a human اسم`], correct: 0,
          },
        },
        {
          heading: 'ما زال: معنى الزوال',
          lines: [
            { box: { title: 'Core Text', lines: [`العَاشِرُ مَا زَالَ، وَهُوَ لِلِاسْتِمْرَارِ`] } },
            { box: { title: 'Core Text', lines: [`﴿فَمَا زِلْتُمْ فِي شَكٍّ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `فَمَا زِلْتُمْ فِي شَكٍّ`,
                translation: `You have not ceased to be in doubt.`,
                cells: [`مَا`, `زِلْ`, `تُمْ`, `فِي شَكٍّ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `نفي` }, { start: 1, end: 1, role: `فعل ناقص` }, { start: 2, end: 2, role: `اسمها` }, { start: 3, end: 3, role: `شبه جملة في محل نصب خبر` }] },
                ],
              },
            },
            { html: `زَالَ means to come to an end: when the sun's climb finishes at its height, that is <bdi>زَوَال</bdi>, a rising that has ended. ما زال accordingly says that something has not come to an end.`, list: false },
            { box: { title: 'Careful', lines: [`كَلِمَةُ مَا زَالَ تُفِيدُ تَوَقُّعَ التَّحَوُّلِ وَالِانْقِطَاعِ`] } },
            { html: `ما زال carries the expectation that the state ought to have changed and broken off — it has not, but an ending was looked for.`, list: false },
          ],
          exercise: {
            prompt: `Beyond simply saying a state continues, what extra sense does ما زال carry according to the Careful box كَلِمَةُ مَا زَالَ تُفِيدُ تَوَقُّعَ التَّحَوُّلِ وَالِانْقِطَاعِ؟`,
            kind: 'mcq',
            options: [`An expectation that the state ought to have changed or ended by now, even though it hasn't`, `That the state will certainly end within the next moment`, `That the state has never been expected to change at all`, `That the speaker doubts the state is real`],
            correct: 0,
          },
        },
        {
          heading: 'ما فتئ: المعاني الثلاثة',
          lines: [
            { box: { title: 'Core Text', lines: [`الحَادِيَ عَشَرَ مَا فَتِئَ، وَهُوَ لِلِاسْتِمْرَارِ`] } },
            { box: { title: 'Core Text', lines: [`﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ`,
                translation: `By Allah, you will not cease to remember Yusuf.`,
                cells: [`تَاللهِ`, `تَفْتَأُ`, `(أنت)`, `تَذْكُرُ يُوسُفَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `قسم` }, { start: 1, end: 1, role: `فعل ناقص، والنفي محذوف` }, { start: 2, end: 2, role: `اسمها ضمير مستتر` }, { start: 3, end: 3, role: `جملة في محل نصب خبر` }] },
                ],
              },
            },
            { html: `The words are addressed to يعقوب عليه السلام about his grief. This is the one place the فعل occurs in the Qur'an, and the choice of it repays a close look, because three separate uses of the root stand behind it.`, list: false },
            { table: { title: 'معاني فتئ الثلاثة', headers: ['Example', 'Translation', 'Sense carried'], rows: [
              [`فَتَأَهُ عَنِ الأَمْرِ إِذَا سَكَّنَهُ`, `he settled him about the matter`, `being given سكون from something`],
              [`فَتَأْتُ النَّارَ إِذَا أَطْفَأْتُهَا`, `I put the fire out`, `a fire extinguished`],
              [`فَتِئْتُ عَنِ الأَمْرِ إِذَا نَسِيتُهُ`, `I forgot the matter`, `forgetting`],
            ] } },
            { html: `سكون, an extinguished fire, forgetting — all three sit inside the single word. ﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ therefore says: you will not be given rest from him, your burning for him will not be put out, you will not forget him. "You will continue to remember Yusuf" drops every one of those layers, and English leaves no better option.`, list: false },
          ],
          exercise: {
            prompt: `﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ draws on three older senses of فتئ at once — سكون, an extinguished fire, and forgetting. Why does the lesson say an English translation like "you will continue to remember Yusuf" falls short؟`,
            kind: 'mcq',
            options: [`It drops all three layered senses — rest, being put out, and forgetting — that فتئ carries together`, `English has no word at all for "remember"`, `The Arabic verse doesn't actually mean "continue to remember"`, `فتئ in this verse means something unrelated to continuity`],
            correct: 0,
          },
        },
        {
          heading: 'شرطا عمل هذه الأربعة',
          lines: [
            { html: `Two restrictions apply to all four verbs of هذا الباب.`, list: false },
            { box: { title: 'Rule', lines: [`هَذِهِ الأَرْبَعَةُ نَاقِصَةُ التَّصَرُّفِ، فَيَأْتِي مِنْهَا المَاضِي وَالمُضَارِعُ لَا غَيْرُ`] } },
            { html: `They are <bdi>ناقص التصرف</bdi>. Only the ماضي and the مضارع are formed from them: مَا فَتِئَ and تَفْتَأُ, مَا بَرِحَ and يَبْرَحُ — no أمر, no اسم فاعل, nothing beyond those two forms.`, list: false },
            { box: { title: 'Rule', lines: [`لَا تَعْمَلُ عَمَلَ الفِعْلِ النَّاقِصِ إِلَّا إِذَا تَقَدَّمَهَا نَهْيٌ أَوْ نَفْيٌ أَوْ دُعَاءٌ`] } },
            { html: `They do the عمل of a فعل ناقص — raising an اسم and putting the خبر in نصب — only when a نهي, a نفي, or a دعاء comes in front of them. The sense of نفي has to be there first. The نفي itself takes more than one shape: <bdi>ما</bdi> in ما برح, ما انفك, and ما زال, and <bdi>لن</bdi> in ﴿لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾.`, list: false },
          ],
          exercise: {
            prompt: `Why does ﴿لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ still count as a valid ناقص use of برح, even though it uses لن rather than ما؟`,
            kind: 'mcq',
            options: [`Because these four only need نفي of some kind before them, and لن is one of the shapes نفي can take`, `Because لن always converts a فعل ناقص into a فعل تام`, `Because لن is a form of نداء, which is the same as a دعاء`, `It doesn't — ﴿لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ is actually an exception to the rule`],
            correct: 0,
          },
        },
        {
          heading: 'حذف النفي بعد القسم، وزال الناقص مقابل زال التام',
          lines: [
            { box: { title: 'Rule', lines: [`يَجُوزُ حَذْفُ النَّفْيِ بَعْدَ القَسَمِ إِنْ كَانَ الفِعْلُ مُضَارِعًا مَنْفِيًّا بِلَا`] } },
            { html: `Two conditions hold together here: a قسم comes first, and the فعل following it is a مضارع carrying the نفي لا — that لا may then be dropped.`, list: false },
            { box: { title: 'Core Text', lines: [`يَمِينَ اللهِ أَبْرَحُ قَاعِدًا`] } },
            {
              tarkeebDiagram: {
                sentence: `يَمِينَ اللهِ أَبْرَحُ قَاعِدًا`,
                translation: `By Allah, I shall not leave off sitting.`,
                cells: [`يَمِينَ اللهِ`, `أَبْرَحُ`, `(أنا)`, `قَاعِدًا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `قسم` }, { start: 1, end: 1, role: `فعل ناقص، والنفي محذوف` }, { start: 2, end: 2, role: `اسمها ضمير مستتر` }, { start: 3, end: 3, role: `خبرها منصوب` }] },
                ],
              },
            },
            { html: `The reading is لَا أَبْرَحُ قَاعِدًا — the لا has been removed because the قسم precedes it. ﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ is built the same way: تَلَفْظِ الجَلالَةِ is the قسم and the reading is لَا تَفْتَأُ. This is what lets تَفْتَأُ work as a فعل ناقص there although no نفي is visible on the surface — the نفي is intended, only dropped.`, list: false },
            { box: { title: 'Rule', lines: [`زَالَ وَيَزَالُ فِعْلَانِ نَاقِصَانِ، وَزَالَ وَيَزُولُ فِعْلَانِ تَامَّانِ مَصْدَرُهُمَا زَوَالٌ`] } },
            { table: { title: 'زال الناقص وزال التام', headers: ['Form', 'Type', 'What it requires'], rows: [
              [`زَالَ يَزَالُ`, `ناقص`, `an اسم مرفوع and a خبر منصوب`],
              [`زَالَ يَزُولُ`, `تامّ، مصدره زَوَالٌ`, `a فاعل only, with no خبر`],
            ] } },
            { html: `Two different أفعال share one ماضي and part company in the مضارع.`, list: false },
            { html: `زَالَ يَزُولُ means to come to an end, to cease to exist.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿إِنَّ اللهَ يُمْسِكُ السَّمَاوَاتِ وَالأَرْضَ أَنْ تَزُولَا﴾`] } },
            { html: `"Allah holds the heavens and the earth in place lest they come to an end." Nothing follows تَزُولَا as a خبر, because this زال needs none — the sense is that they should not pass away, not slip out of their orbit.`, list: false },
          ],
          exercise: {
            prompt: `﴿أَنْ تَزُولَا﴾ in ﴿إِنَّ اللهَ يُمْسِكُ السَّمَاوَاتِ وَالأَرْضَ أَنْ تَزُولَا﴾ has no خبر following it. What does that tell you about زال here؟`,
            kind: 'mcq',
            options: [`It is زَالَ يَزُولُ, the فعل تام — الألف is simply its فاعل, with no خبر required`, `It is زَالَ يَزَالُ, the فعل ناقص, with a محذوف خبر`, `It is a copying error — every زال requires a خبر`, `It is فعل أمر, addressed to السماوات والأرض`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `ما برح، ما انفك، ما زال, and ما فتئ were all ordinary complete أفعال before joining كان وأخواتها. What does the lesson say about their older meaning once they became أفعال ناقصة؟`, options: [`It is still working inside the ناقص use, not erased by it`, `It disappears completely once they join أفعال الاستمرار`, `It only survives in ما زال, not in the other three`, `It only applies to poetry, never to قرآنية usage`], correct: 0 },
        { q: `بَرِحَ on its own means تَرْكُ المَكَانِ, leaving a place. What does the Careful box say this implies about where ما برح naturally fits؟`, options: [`With staying somewhere physically, not with remaining in an abstract state`, `Only with states of emotion, such as grief or joy`, `Only with actions performed at night`, `It fits equally well with places and abstract states`], correct: 0 },
        { q: `انفكّ is مطاوع فكّ, built on freeing a captive. What does ما انفك say about a person, per that root sense؟`, options: [`That he has not broken free of, not been released from, the thing named`, `That he has just been released from the thing named`, `That he never had any connection to the thing named`, `That he is actively trying to reach the thing named`], correct: 0 },
        { q: `ما زال carries more than plain continuation. What extra sense does the Careful box add؟`, options: [`An expectation that the state ought to have changed or ended, which it has not`, `Certainty that the state will end immediately`, `Doubt about whether the state is real at all`, `That the state only ever applies to weather or time`], correct: 0 },
        { q: `Which condition must precede ما برح، ما انفك، ما زال, or ما فتئ before any of them can act as a فعل ناقص؟`, options: [`A نهي, a نفي, or a دعاء`, `A ظرف زمان`, `An اسم إشارة`, `A حرف جر`], correct: 0 },
        { q: `زَالَ يَزَالُ and زَالَ يَزُولُ share the same ماضي but differ in the مضارع. What is the key difference between them؟`, options: [`زَالَ يَزَالُ is ناقص, needing an اسم and خبر; زَالَ يَزُولُ is تام, needing only a فاعل`, `زَالَ يَزَالُ is تام; زَالَ يَزُولُ is ناقص`, `They are simply two spellings of the exact same verb with no functional difference`, `زَالَ يَزُولُ can never appear in المضارع at all`], correct: 0 },
      ],
      bank: [
        { title: `أفعال الاستمرار: الأصل المشترك`, kind: 'mcq', prompt: `What do ما برح، ما انفك، ما زال, and ما فتئ have in common, beyond all being أفعال ناقصة للاستمرار؟`, options: [`Each was originally an ordinary complete فعل, and that older meaning still works inside the ناقص use`, `Each is restricted to appearing only in الأمر`, `None of them can ever take a خبر منصوب`, `Each requires a preceding اسم إشارة`], correct: 0 },
        { title: `ما برح: معناه الأصلي`, kind: 'mcq', prompt: `What is the root, pre-نحوي meaning of بَرِحَ on its own؟`, options: [`تَرْكُ المَكَانِ — leaving a place`, `نِسْيَانُ الأَمْرِ — forgetting a matter`, `التَّخَلُّصُ مِنَ الأَسْرِ — breaking free of captivity`, `الوُصُولُ إِلَى غَايَةٍ — reaching an end point`], correct: 0 },
        { title: `لن نبرح عليه عاكفين: بنو إسرائيل`, kind: 'mcq', prompt: `﴿قَالُوا لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ is spoken by بنو إسرائيل about what؟`, options: [`Staying devoted to the calf until موسى returned`, `Staying in مصر rather than crossing the sea`, `Refusing to enter الأرض المقدسة`, `Continuing to build the golden calf itself`], correct: 0 },
        { title: `شرط السياق المكاني لما برح`, kind: 'mcq', prompt: `Per the Careful box on ما برح, which of the following fits its root sense of تَرْكُ المَكَانِ best؟`, options: [`لَنْ أَبْرَحَ قَاعِدًا — sitting is a way of being in a place`, `مَا بَرِحَ حَزِينًا — grief has nothing to do with a place`, `Both fit the root sense equally`, `Neither fits, since ما برح never occurs in the قرآن`], correct: 0 },
        { title: `لماذا لا يقال ما برح حزينا`, kind: 'mcq', prompt: `Why does the lesson say مَا بَرِحَ حَزِينًا is not the work ما برح is naturally built for؟`, options: [`حزين names a state, not a physical place, and برح's root sense is about leaving a place`, `حزين cannot ever serve as a خبر`, `The قرآن explicitly forbids this combination`, `برح only ever takes a اسم ظاهر, never an implied one`], correct: 0 },
        { title: `ما انفك: معناه الأصلي`, kind: 'mcq', prompt: `Which of the following correctly explains the root of انفكّ؟`, options: [`مطاوع فكّ — from فك الأسير, to free a captive and let him loose`, `مطاوع بقي — from remaining in place`, `مطاوع نسي — from forgetting something`, `مطاوع زال — from coming to an end`], correct: 0 },
        { title: `ما انفك المذنب راجيا: مدى الملاءمة`, kind: 'mcq', prompt: `Why does the lesson call مَا انْفَكَّ المُذْنِبُ رَاجِيًا an imperfect illustration of انفكّ's root sense؟`, options: [`رجاء is not something a person would want to break free of`, `المذنب cannot serve as اسم انفك`, `راجيا is not a valid خبر form`, `انفكّ never takes a human اسم`], correct: 0 },
        { title: `المثال الأنسب لما انفك`, kind: 'mcq', prompt: `Which example does the lesson offer as a better fit for انفكّ's root sense than مَا انْفَكَّ المُذْنِبُ رَاجِيًا؟`, options: [`مَا انْفَكَّ الرَّجُلُ مُذْنِبًا — he has not yet broken free of his sins`, `مَا انْفَكَّ الرَّجُلُ سَعِيدًا — he has not broken free of happiness`, `مَا انْفَكَّ الرَّجُلُ قَائِمًا — he has not broken free of standing`, `مَا انْفَكَّ الرَّجُلُ فِي بَيْتِهِ — he has not broken free of his house`], correct: 0 },
        { title: `ما زال: معنى الزوال`, kind: 'mcq', prompt: `زَالَ on its own relates to the sun's climb ending at its height — زَوَال. What does ما زال say, built on that root؟`, options: [`That something has not come to an end`, `That something has just now come to an end`, `That something is certain to end at noon`, `That something never had a beginning`], correct: 0 },
        { title: `ما زال: توقع التحول`, kind: 'mcq', prompt: `What does the Careful box say ما زال adds beyond simply "the state continues"؟`, options: [`An expectation that the state should have changed by now, though it hasn't`, `A guarantee that the state will never change`, `A claim that the state began only recently`, `Nothing — ما زال is functionally identical to plain continuation with no extra nuance`], correct: 0 },
        { title: `ما فتئ: المعاني الثلاثة`, kind: 'mcq', prompt: `The lesson identifies three older senses combined inside فتئ. Which set is correct؟`, options: [`سكون from a matter, a fire extinguished, and forgetting`, `Leaving a place, forgetting, and breaking free of captivity`, `Reaching an end point, extinguishing, and beginning anew`, `Certainty, doubt, and repetition`], correct: 0 },
        { title: `تالله تفتأ تذكر يوسف: المخاطب`, kind: 'mcq', prompt: `﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ is addressed to which نبي, about his grief؟`, options: [`يعقوب عليه السلام`, `يوسف عليه السلام`, `موسى عليه السلام`, `إبراهيم عليه السلام`], correct: 0 },
        { title: `القيد الأول: ناقص التصرف`, kind: 'mcq', prompt: `ما برح، ما انفك، ما زال, and ما فتئ are described as ناقصة التصرف. What does that mean؟`, options: [`Only their ماضي and مضارع forms exist — no أمر, no اسم فاعل`, `They can never appear in الماضي`, `They can only appear preceded by إن الشرطية`, `They lose their نون under every condition`], correct: 0 },
        { title: `القيد الثاني: تقدم نفي أو نهي أو دعاء`, kind: 'mcq', prompt: `Beyond being ناقصة التصرف, what second condition must be met before these four can act as أفعال ناقصة (raising an اسم, putting the خبر in نصب)؟`, options: [`A نهي, a نفي, or a دعاء must precede them`, `They must be preceded by a اسم إشارة`, `They must appear at the very start of the جملة`, `They must be preceded by a حرف جر`], correct: 0 },
        { title: `أشكال النفي المتقدمة`, kind: 'mcq', prompt: `The نفي required before these four verbs can take more than one shape. Which two are named in the lesson؟`, options: [`ما, and لن`, `لا, and إن`, `لم, and لمّا`, `غير, and سوى`], correct: 0 },
        { title: `حذف النفي بعد القسم: الشرطان`, kind: 'mcq', prompt: `Under which two conditions together may the نفي لا be dropped after a قسم, per يَجُوزُ حَذْفُ النَّفْيِ بَعْدَ القَسَمِ إِنْ كَانَ الفِعْلُ مُضَارِعًا مَنْفِيًّا بِلَا؟`, options: [`A قسم precedes, and the following فعل is مضارع منفي بلا`, `A قسم precedes, and the following فعل is فعل أمر`, `A نهي precedes, and the following فعل is ماضي`, `Any فعل مضارع, regardless of what precedes it`], correct: 0 },
        { title: `يمين الله أبرح قاعدا: التقدير`, kind: 'mcq', prompt: `يَمِينَ اللهِ أَبْرَحُ قَاعِدًا shows no visible نفي before أَبْرَحُ. What is the intended reading, once the dropped لا is restored؟`, options: [`لَا أَبْرَحُ قَاعِدًا`, `قَدْ أَبْرَحُ قَاعِدًا`, `سَوْفَ أَبْرَحُ قَاعِدًا`, `أَبْرَحُ قَاعِدًا بِلَا شَرْطٍ`], correct: 0 },
        { title: `زال يزال مقابل زال يزول`, kind: 'mcq', prompt: `زَالَ يَزَالُ and زَالَ يَزُولُ share one ماضي form but differ in المضارع. Which one is ناقص, requiring an اسم and خبر؟`, options: [`زَالَ يَزَالُ`, `زَالَ يَزُولُ`, `Both are equally ناقصان`, `Neither is ناقص — both are always تامان`], correct: 0 },
        { title: `أن تزولا: زال التام`, kind: 'mcq', prompt: `﴿إِنَّ اللهَ يُمْسِكُ السَّمَاوَاتِ وَالأَرْضَ أَنْ تَزُولَا﴾ uses تَزُولَا with no خبر following. What role does الألف play here؟`, options: [`فاعل لفعل تام`, `اسم فعل ناقص مرفوع`, `مفعول به`, `توكيد للفاعل المستتر`], correct: 0 },
        {
          title: `تركيب: لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ.`,
          source: `لَنْ نَبْرَحَ عَلَيْهِ عَاكِفِينَ`,
          words: [`لَنْ`, `نَبْرَحَ`, `عَلَيْهِ`, `عَاكِفِينَ`],
          labels: [`حرف نفي ونصب`, `فعل ناقص منصوب + اسمها ضمير مستتر`, `جار ومجرور متعلق بعاكفين`, `خبرها منصوب بالياء`],
          distractors: [`مبتدأ`, `فعل أمر`],
        },
        {
          title: `تركيب: مَا انْفَكَّ المُذْنِبُ رَاجِيًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in مَا انْفَكَّ المُذْنِبُ رَاجِيًا.`,
          source: `مَا انْفَكَّ المُذْنِبُ رَاجِيًا`,
          words: [`مَا`, `انْفَكَّ`, `المُذْنِبُ`, `رَاجِيًا`],
          labels: [`نفي`, `فعل ناقص`, `اسمها مرفوع`, `خبرها منصوب`],
          distractors: [`حرف جر`, `فاعل`],
        },
        {
          title: `تركيب: فَمَا زِلْتُمْ فِي شَكٍّ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of فَمَا زِلْتُمْ فِي شَكٍّ.`,
          source: `فَمَا زِلْتُمْ فِي شَكٍّ`,
          words: [`مَا`, `زِلْ`, `تُمْ`, `فِي شَكٍّ`],
          labels: [`نفي`, `فعل ناقص`, `اسمها`, `شبه جملة في محل نصب خبر`],
          distractors: [`مضاف إليه`, `حال`],
        },
        {
          title: `تركيب: تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ.`,
          source: `تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ`,
          words: [`تَاللهِ`, `تَفْتَأُ`, `(أنت)`, `تَذْكُرُ يُوسُفَ`],
          labels: [`قسم`, `فعل ناقص، والنفي محذوف`, `اسمها ضمير مستتر`, `جملة في محل نصب خبر`],
          distractors: [`فاعل`, `مفعول به`],
        },
        {
          title: `تركيب: يَمِينَ اللهِ أَبْرَحُ قَاعِدًا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of يَمِينَ اللهِ أَبْرَحُ قَاعِدًا.`,
          source: `يَمِينَ اللهِ أَبْرَحُ قَاعِدًا`,
          words: [`يَمِينَ اللهِ`, `أَبْرَحُ`, `(أنا)`, `قَاعِدًا`],
          labels: [`قسم`, `فعل ناقص، والنفي محذوف`, `اسمها ضمير مستتر`, `خبرها منصوب`],
          distractors: [`مضاف إليه`, `حال`],
        },
      ],
    },
    // ---------------------------------------------------------------- L6
    {
      id: 'l6',
      title: 'دام وليس',
      subtitle: 'Closing the List — the last two أخوات كان, then word order and تامة usage across the whole family',
      sourceRef: 'app-lessons/032',
      concepts: [
        {
          heading: 'ما دام: توقيت بمدة الاتصاف',
          lines: [
            { html: `ما دام and ليس are the twelfth and thirteenth of كان وأخواتها, and the last two of the group.`, list: false },
            { box: { title: 'Definition', lines: [`الثَّانِيَ عَشَرَ مَا دَامَ، وَهُوَ لِتَوْقِيتِ مَا قَبْلَهُ بِمُدَّةِ اتِّصَافِ الِاسْمِ بِالْخَبَرِ`] } },
            { html: `ما دام sets a time limit on the statement that came before it. The limit is the stretch of time during which the اسم carries the description named by the خبر — in plain terms, it amounts to "as long as."`, list: false },
            { box: { title: 'Core Text', lines: [`﴿وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `مَا دُمْتُ حَيًّا`,
                translation: `For as long as I remain alive.`,
                cells: [`مَا دُمْـ`, `ـتُ`, `حَيًّا`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `اسم ما دام` }, { start: 2, end: 2, role: `خبر ما دام` }] },
                ],
              },
            },
            { html: `The ruling stated before ما دام, أَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ, holds for exactly as long as the اسم (the تاء) stays متصف with the خبر (حياة). The moment that description ends, the timing set by ما دام ends with it.`, list: false },
          ],
          exercise: {
            prompt: `﴿وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا﴾ ties the ruling before ما دام to a specific limit. What sets that limit?`,
            kind: 'mcq',
            options: [`The stretch of time during which the اسم stays described by the خبر — here, as long as حياة lasts`, `A fixed number of days named elsewhere in the verse`, `The lifetime of the person being addressed, not the speaker`, `ما دام here sets no limit at all — it is purely emphatic`],
            correct: 0,
          },
        },
        {
          heading: 'نيابة ما عن ما دام',
          lines: [
            { box: { title: 'Rule', lines: [`قَدْ تَقُومُ كَلِمَةُ مَا وَحْدَهَا مَقَامَ مَا دَامَ`] } },
            { html: `Rather than the full ما دام, the word ما can stand alone in its place. This happens often.`, list: false },
            { box: { title: 'Core Text', lines: [`«وَاللهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ» أي: ما دام`] } },
            { html: `"Allah is in the aid of the servant for as long as the servant is in the aid of his brother."`, list: false },
            { box: { title: 'Careful', lines: [`هَذِهِ مَا بِمَعْنَى مَا دَامَ لَا بِمَعْنَى النَّفْيِ، وَالسِّيَاقُ هُوَ الفَيْصَلُ، وَمِنْ عَلَامَاتِهِ كَثْرَةُ مَجِيءِ كَانَ بَعْدَهَا`] } },
            { html: `The ما here carries the meaning of ما دام, not نفي. Context settles which one is intended, and a useful indicator is that this ما is frequently followed by كان.`, list: false },
            { box: { title: 'Rule', lines: [`وَيَكْثُرُ ذَلِكَ قَبْلَ لَمْ`] } },
            { html: `The substitution is most frequent directly before لم.`, list: false },
            { box: { title: 'Core Text', lines: [`«يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ»`] } },
            { html: `"The دعاء of one of you is answered for as long as he does not hasten." The hastening meant here is the person saying: I made دعاء to my Lord and He did not answer me.`, list: false },
          ],
          exercise: {
            prompt: `«يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ» uses ما standing alone rather than the full ما دام. Which of these is a useful indicator, per the lesson, that this ما carries the meaning of ما دام rather than نفي?`,
            kind: 'mcq',
            options: [`This substitution is especially frequent directly before لم`, `It only ever appears at the very start of a حديث`, `It always requires a following اسم إشارة`, `It can never be followed by كان`],
            correct: 0,
          },
        },
        {
          heading: 'ليس: نفي الحال',
          lines: [
            { box: { title: 'Definition', lines: [`الثَّالِثَ عَشَرَ: لَيْسَ، وَهُوَ لِنَفْيِ الْحَالِ`] } },
            { html: `ليس negates the حال, the present state of affairs.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿لَيْسَ عَلَيْكَ هُدَاهُمْ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `لَيْسَ عَلَيْكَ هُدَاهُمْ`,
                translation: `Their guidance is not upon you.`,
                cells: [`لَيْسَ`, `عَلَيْكَ`, `هُدَاهُمْ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `خبر ليس مقدم` }, { start: 2, end: 2, role: `اسم ليس مؤخر` }] },
                ],
              },
            },
            { html: `The duty laid on the Prophet ﷺ is to convey the message and to work at guiding people. Whether they actually come onto guidance is not placed on him.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿لَيْسَ عَلَيْكَ هُدَاهُمْ﴾, the خبر عَلَيْكَ comes before the اسم هُدَاهُمْ. What order does this show?`,
            kind: 'mcq',
            options: [`خبر ليس مقدم, then اسم ليس مؤخر`, `اسم ليس مقدم, then خبر ليس مؤخر`, `Neither word is اسم or خبر — both are مفعول به`, `عَلَيْكَ is a مبتدأ separate from ليس's own جملة`],
            correct: 0,
          },
        },
        {
          heading: 'عدم تصرف ما دام وليس',
          lines: [
            { box: { title: 'Rule', lines: [`مَا دَامَ وَلَيْسَ غَيْرُ مُتَصَرِّفَيْنِ، فَلَا يَأْتِي مِنْهُ إِلَّا الْمَاضِي`] } },
            { html: `Neither verb conjugates through the tenses. Only the ماضي occurs — there is no مضارع for either one: يَلِيسُ is not said, and مَا يَدُومُ is not used in this sense.`, list: false },
            { html: `What does change is the person ending attached to that ماضي — مَا دُمْتُ, لَسْتُ, and the rest. Nothing beyond that.`, list: false },
          ],
          exercise: {
            prompt: `Which of the following correctly describes ما دام and ليس's own تصرف?`,
            kind: 'mcq',
            options: [`Neither has a مضارع in this sense — only the ماضي occurs, with its person ending changing`, `Both freely form ماضي, مضارع, and أمر, like a fully متصرف فعل`, `ليس has a مضارع, but ما دام does not`, `ما دام has a مضارع, but ليس does not`],
            correct: 0,
          },
        },
        {
          heading: 'وقوع الأفعال الناقصة تامة',
          lines: [
            { box: { title: 'Definition', lines: [`الْفِعْلُ التَّامُّ مَا يَكْتَفِي بِفَاعِلِهِ وَلَا يَحْتَاجُ إِلَى خَبَرٍ، نَحْوُ: كَانَتْ حَرْبٌ`] } },
            { table: { title: 'الفعل الناقص مقابل الفعل التام', headers: ['Type', 'Requirement', 'Example', 'Translation'], rows: [
              [`فعل ناقص`, `Takes an اسم and a خبر; the meaning is not complete without the خبر`, `مَا دُمْتُ حَيًّا`, `as long as I am alive`],
              [`فعل تام`, `Takes a فاعل and stops there`, `كَانَتْ حَرْبٌ`, `there was a war`],
            ] } },
            {
              tarkeebDiagram: {
                sentence: `كَانَتْ حَرْبٌ`,
                translation: `There was a war.`,
                cells: [`كَانَتْ`, `حَرْبٌ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل تام` }, { start: 1, end: 1, role: `فاعل` }] },
                ],
              },
            },
            { html: `The sentence is not saying that one thing is something else — it states that something existed. Once كان carries the sense of existing, the فعل with its فاعل is enough.`, list: false },
            { box: { title: 'Rule', lines: [`قَدْ تَكُونُ كَانَ وَأَخَوَاتُهَا تَامَّةً إِلَّا مَا زَالَ وَمَا فَتِئَ وَلَيْسَ`] } },
            { html: `All of كان وأخواتها can occur تامة, with three exceptions: ما زال, ما فتئ, and ليس are never تامة — they remain ناقصة wherever they appear.`, list: false },
            { table: { title: 'أمثلة على وقوع الأفعال الناقصة تامة', headers: ['Verb', 'Sense as ناقص', 'Sense as تام', 'Example', 'Translation'], rows: [
              [`كَانَ`, `links an اسم to a خبر`, `to exist`, `﴿وَإِنْ كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَى مَيْسَرَةٍ﴾`, `And if there is one in hardship, then grant respite until ease`],
              [`أَمْسَى`, `for the اسم to be in the state named by the خبر at evening`, `to enter the evening`, `﴿فَسُبْحَانَ اللهِ حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ﴾`, `So glory be to Allah when you enter the evening and when you enter the morning`],
              [`مَا دَامَ`, `times what precedes it by the اسم's being described by the خبر`, `to endure, to last`, `﴿خَالِدِينَ فِيهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ﴾`, `Abiding therein as long as the heavens and the earth endure`],
              [`صَارَ`, `to become`, `to go to, to reach`, `صَارُوا إِلَى مَصِيرِهِمْ`, `They went to their final destination`],
            ] } },
            { box: { title: 'Core Text', lines: [`﴿وَإِنْ كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَى مَيْسَرَةٍ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `وَإِنْ كَانَ ذُو عُسْرَةٍ`,
                translation: `And if there is one in hardship.`,
                cells: [`كَانَ`, `ذُو عُسْرَةٍ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل تام` }, { start: 1, end: 1, role: `فاعل` }] },
                ],
              },
            },
            { html: `عُسْرَة is difficulty and hardship: the person owes a debt and has no way to repay it. كان here means to exist, ذُو عُسْرَةٍ is its فاعل, and there is no خبر. The instruction that follows is not to press the debtor, but to give him respite until he has the means to earn and pay back.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿خَالِدِينَ فِيهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ`,
                translation: `As long as the heavens and the earth endure.`,
                cells: [`مَا دَامَتِ`, `السَّمَاوَاتُ وَالْأَرْضُ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل تام` }, { start: 1, end: 1, role: `فاعل` }] },
                ],
              },
            },
            { html: `The sense is not that the heavens are described as being something — it is that they endure, with no خبر present; السَّمَاوَاتُ وَالْأَرْضُ together are the فاعل.`, list: false },
            { html: `أَمْسَى and صَارَ can occur تامة the same way: تُمْسُونَ above simply means to enter the evening, and صَارُوا إِلَى مَصِيرِهِمْ means they went to, arrived at, their final destination — فعل and فاعل, nothing further in either case.`, list: false },
          ],
          exercise: {
            prompt: `The lesson names three of كان وأخواتها that can never occur تامة — they remain ناقصة wherever they appear. Which three?`,
            kind: 'mcq',
            options: [`ما زال، ما فتئ، وليس`, `كان، أصبح، وصار`, `أضحى، أمسى، وظل`, `ما دام، بات، وما انفك`],
            correct: 0,
          },
        },
        {
          heading: 'توسط الخبر وتقديم معمول الخبر',
          lines: [
            { box: { title: 'Rule', lines: [`يَجُوزُ تَوَسُّطُ الْخَبَرِ بَيْنَ الْفِعْلِ النَّاقِصِ وَاسْمِهِ`] } },
            { html: `The خبر may sit between the فعل ناقص and its اسم, giving the order: فعل ناقص, then خبر, then اسم.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ`,
                translation: `Helping the believers was a duty upon Us.`,
                cells: [`كَانَ`, `حَقًّا`, `عَلَيْنَا`, `نَصْرُ الْمُؤْمِنِينَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `فعل ناقص` }, { start: 1, end: 1, role: `خبر كان مقدم` }, { start: 2, end: 2, role: `متعلق بالخبر` }, { start: 3, end: 3, role: `اسم كان مؤخر` }] },
                ],
              },
            },
            { box: { title: 'Rule', lines: [`يَجُوزُ تَقْدِيمُ مَعْمُولِ الْخَبَرِ عَلَى الْفِعْلِ النَّاقِصِ`] } },
            { html: `The معمول of the خبر may be brought forward ahead of the فعل ناقص itself.`, list: false },
            { box: { title: 'Core Text', lines: [`﴿أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ﴾`] } },
            {
              tarkeebDiagram: {
                sentence: `أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ`,
                translation: `Is it these whom they used to worship?`,
                cells: [`أَ`, `هَؤُلَاءِ`, `إِيَّاكُمْ`, `كَانُـ`, `ـوا`, `يَعْبُدُونَ`],
                rows: [
                  { position: 'above', labels: [{ start: 0, end: 0, role: `حرف استفهام` }, { start: 1, end: 1, role: `مبتدأ` }, { start: 2, end: 2, role: `مفعول به مقدم ليعبدون` }, { start: 3, end: 4, role: `فعل ناقص + اسم كان` }, { start: 5, end: 5, role: `خبر كان` }] },
                ],
              },
            },
            { html: `هَؤُلَاءِ is the مبتدأ, and the جملة إِيَّاكُمْ كَانُوا يَعْبُدُونَ is its خبر. Inside that جملة, كان is the فعل ناقص, the واو is its اسم, and يَعْبُدُونَ is its خبر.`, list: false },
            { html: `إِيَّاكُمْ is the معمول of يَعْبُدُونَ, and it has come before كان rather than after it.`, list: false },
            { box: { title: 'Rule', lines: [`آضَ وَعَادَ وَغَدَا وَرَاحَ مِنَ الْأَفْعَالِ النَّاقِصَةِ عِنْدَ الْبَعْضِ`] } },
            { html: `Some grammarians count these four among الأفعال الناقصة, beyond the thirteen already covered. Certain books list them; others do not mention them at all.`, list: false },
          ],
          exercise: {
            prompt: `In ﴿أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ﴾, إِيَّاكُمْ sits ahead of كَانُوا. What is إِيَّاكُمْ's actual grammatical relationship, and what has happened to its position?`,
            kind: 'mcq',
            options: [`It is the معمول of يَعْبُدُونَ (خبر كان), fronted ahead of الفعل الناقص كان itself`, `It is اسم كان, simply appearing before the فعل rather than after it`, `It is a second مبتدأ alongside هَؤُلَاءِ`, `It is خبر كان مقدم, with يَعْبُدُونَ left as اسمها مؤخر`],
            correct: 0,
          },
        },
      ],
      quiz: [
        { q: `ما دام sets a time limit on the statement before it. What exactly defines that limit?`, options: [`The stretch of time during which the اسم stays described by the خبر`, `A fixed calendar period stated separately`, `The lifetime of the addressee only, never the speaker`, `The limit is left entirely open, with no defined end`], correct: 0 },
        { q: `«يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ» uses ما standing in for the fuller ما دام. What indicator does the lesson give for recognizing this substitution?`, options: [`It is especially frequent directly before لم`, `It is only ever found at the end of a verse`, `It always appears with a following نداء`, `It can never be followed by a فعل ماض`], correct: 0 },
        { q: `﴿لَيْسَ عَلَيْكَ هُدَاهُمْ﴾ places عَلَيْكَ before هُدَاهُمْ. What does ليس negate here, and what is the order of اسمها and خبرها؟`, options: [`It negates الحال; خبر ليس مقدم, اسم ليس مؤخر`, `It negates الماضي; اسم ليس مقدم, خبر ليس مؤخر`, `It negates المستقبل; both terms are مرفوعان`, `It negates nothing on its own — النفي comes from a separate word`], correct: 0 },
        { q: `Which of the following correctly describes ما دام and ليس's own تصرف?`, options: [`Neither has a مضارع in this sense; only the ماضي occurs, with its person ending changing`, `Both fully conjugate through ماضي, مضارع, and أمر`, `ما دام has an أمر form, but ليس does not`, `ليس has a مضارع, but ما دام does not`], correct: 0 },
        { q: `All of كان وأخواتها can occur تامة except three, which remain ناقصة wherever they appear. Which three؟`, options: [`ما زال، ما فتئ، وليس`, `كان، صار، وأصبح`, `أضحى، أمسى، وبات`, `ظل، ما دام، وما برح`], correct: 0 },
        { q: `In ﴿أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ﴾, what has happened to إِيَّاكُمْ relative to كَانُوا؟`, options: [`إِيَّاكُمْ, the معمول of يَعْبُدُونَ, has been fronted ahead of الفعل الناقص كان`, `إِيَّاكُمْ has become اسم كان itself`, `إِيَّاكُمْ has become خبر كان مقدم`, `No fronting has occurred — إِيَّاكُمْ is in its normal position`], correct: 0 },
      ],
      bank: [
        { title: `ما دام: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines ما دام as a فعل ناقص؟`, options: [`It times the preceding statement by the stretch during which the اسم is described by the خبر`, `It negates the خبر entirely`, `It marks a future event stated in the ماضي`, `It reports a change from one state to another`], correct: 0 },
        { title: `ما دمت حيا: تطبيق`, kind: 'mcq', prompt: `﴿وَأَوْصَانِي بِالصَّلَاةِ وَالزَّكَاةِ مَا دُمْتُ حَيًّا﴾ — for how long does the ruling before ما دام hold, according to the lesson؟`, options: [`For as long as the اسم (the تاء) stays متصف with الخبر (حياة)`, `For exactly one full lifetime, regardless of health`, `Only until the first صلاة is performed`, `The ruling has no time limit at all`], correct: 0 },
        { title: `نيابة ما عن ما دام`, kind: 'mcq', prompt: `Which rule explains ما standing alone with the meaning of ما دام, as in «مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ»؟`, options: [`قَدْ تَقُومُ كَلِمَةُ مَا وَحْدَهَا مَقَامَ مَا دَامَ`, `قَدْ يُحْذَفُ كَانَ مَعَ اسْمِهِ بَعْدَ مَا`, `مَا لَا تَعْمَلُ إِلَّا مَعَ الْمَاضِي`, `مَا هُنَا حَرْفٌ زَائِدٌ لَا مَعْنَى لَهُ`], correct: 0 },
        { title: `يستجاب لأحدكم ما لم يعجل`, kind: 'mcq', prompt: `«يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ» — what does the hastening (العجلة) named here refer to؟`, options: [`Saying "I made دعاء and He did not answer me"`, `Rushing through the words of the دعاء itself`, `Making دعاء more than once in a day`, `Asking for something forbidden`], correct: 0 },
        { title: `ليس: نفي الحال`, kind: 'mcq', prompt: `Which of the following correctly defines ليس as a فعل ناقص؟`, options: [`It negates الحال, the present state of affairs`, `It times a preceding statement by a stretch of duration`, `It reports تحول, a change from one state to another`, `It marks الاستقبال, a certain future event`], correct: 0 },
        { title: `ليس عليك هداهم: خبر مقدم واسم مؤخر`, kind: 'mcq', prompt: `In ﴿لَيْسَ عَلَيْكَ هُدَاهُمْ﴾, what are the roles of عَلَيْكَ and هُدَاهُمْ respectively؟`, options: [`عَلَيْكَ is خبر ليس مقدم, and هُدَاهُمْ is اسم ليس مؤخر`, `عَلَيْكَ is اسم ليس مقدم, and هُدَاهُمْ is خبر ليس مؤخر`, `Both words are أسماء ليس at once`, `عَلَيْكَ is a separate جار ومجرور unrelated to ليس`], correct: 0 },
        { title: `مسؤولية النبي ﷺ في الآية`, kind: 'mcq', prompt: `﴿لَيْسَ عَلَيْكَ هُدَاهُمْ﴾ places a boundary on the Prophet's ﷺ duty. What is that duty, per the lesson؟`, options: [`To convey the message and work at guiding people — not to guarantee they actually accept guidance`, `To guarantee every listener accepts guidance`, `To avoid speaking to disbelievers altogether`, `To judge who deserves guidance and who does not`], correct: 0 },
        { title: `عدم تصرف ما دام وليس`, kind: 'mcq', prompt: `مَا دَامَ وَلَيْسَ غَيْرُ مُتَصَرِّفَيْنِ. What does this rule say about their مضارع forms?`, options: [`Neither has one — يَلِيسُ and مَا يَدُومُ (in this sense) are not used`, `Both have regular مضارع forms, just rarely used`, `ليس has a مضارع, but ما دام lacks one`, `ما دام has a مضارع, but ليس lacks one`], correct: 0 },
        { title: `الفعل التام: التعريف`, kind: 'mcq', prompt: `Which of the following correctly defines الفعل التام؟`, options: [`It is satisfied with its فاعل and does not need a خبر, as in كَانَتْ حَرْبٌ`, `It always requires both an اسم and a خبر`, `It can never take a فاعل at all`, `It is restricted to appearing in الأمر`], correct: 0 },
        { title: `الاستثناءات من وقوع تامة`, kind: 'mcq', prompt: `قَدْ تَكُونُ كَانَ وَأَخَوَاتُهَا تَامَّةً إِلَّا مَا زَالَ وَمَا فَتِئَ وَلَيْسَ. What does this rule establish؟`, options: [`Every أخت of كان can occur as فعل تام except these three, which stay ناقصة everywhere`, `No أخت of كان can ever occur as فعل تام`, `Only these three can occur as فعل تام; the rest cannot`, `The rule applies only to poetry, never to قرآن or حديث`], correct: 0 },
        { title: `كانت حرب: كان تامة`, kind: 'mcq', prompt: `كَانَتْ حَرْبٌ, "there was a war," uses كان as فعل تام. What does حَرْبٌ serve as, since no خبر follows؟`, options: [`فاعل`, `اسم كان`, `خبر كان`, `مفعول به`], correct: 0 },
        { title: `كان ذو عسرة: كان تامة أخرى`, kind: 'mcq', prompt: `﴿وَإِنْ كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ إِلَى مَيْسَرَةٍ﴾ uses كان تامة, meaning "to exist." What does ذُو عُسْرَةٍ serve as؟`, options: [`فاعل`, `اسم كان مؤخر`, `خبر كان مقدم`, `بدل من كان`], correct: 0 },
        { title: `ما دامت السماوات والأرض: ما دام تامة`, kind: 'mcq', prompt: `﴿خَالِدِينَ فِيهَا مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ﴾ uses ما دام تامة, meaning "to endure." What role does السَّمَاوَاتُ وَالْأَرْضُ play؟`, options: [`فاعل`, `اسم ما دام`, `خبر ما دام`, `مفعول به لما دام`], correct: 0 },
        { title: `أمسى وصار: وقوعهما تامين`, kind: 'mcq', prompt: `When أَمْسَى and صَارَ occur as أفعال تامة, what do they mean respectively, per the lesson؟`, options: [`أمسى: to enter the evening; صار: to go to, to arrive at`, `أمسى: to become wealthy; صار: to remain silent`, `Both mean "to exist," identical to كان تامة`, `أمسى: to forget; صار: to remember`], correct: 0 },
        { title: `توسط الخبر بين الفعل الناقص واسمه`, kind: 'mcq', prompt: `يَجُوزُ تَوَسُّطُ الْخَبَرِ بَيْنَ الْفِعْلِ النَّاقِصِ وَاسْمِهِ describes which possible word order؟`, options: [`فعل ناقص، ثم خبر، ثم اسم`, `اسم، ثم خبر، ثم فعل ناقص`, `خبر، ثم اسم، ثم فعل ناقص`, `The خبر can never separate الفعل الناقص from اسمه`], correct: 0 },
        { title: `كان حقا علينا نصر المؤمنين: التوسط`, kind: 'mcq', prompt: `﴿كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ﴾ places حَقًّا before نَصْرُ الْمُؤْمِنِينَ. What are their respective roles؟`, options: [`حَقًّا is خبر كان مقدم; نَصْرُ الْمُؤْمِنِينَ is اسم كان مؤخر`, `حَقًّا is اسم كان مقدم; نَصْرُ الْمُؤْمِنِينَ is خبر كان مؤخر`, `Both words are خبر كان at once`, `نَصْرُ الْمُؤْمِنِينَ is فاعل, not اسم كان`], correct: 0 },
        { title: `تقديم معمول الخبر: أهؤلاء إياكم`, kind: 'mcq', prompt: `In ﴿أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ﴾, what rule licenses إِيَّاكُمْ appearing ahead of كَانُوا؟`, options: [`يَجُوزُ تَقْدِيمُ مَعْمُولِ الْخَبَرِ عَلَى الْفِعْلِ النَّاقِصِ`, `يَجُوزُ حَذْفُ الْفِعْلِ النَّاقِصِ مَعَ اسْمِهِ`, `يَجُوزُ تَوَسُّطُ الْخَبَرِ بَيْنَ الْفِعْلِ وَاسْمِهِ فَقَطْ`, `لَا يَجُوزُ تَقْدِيمُ مَعْمُولِ الْخَبَرِ عَلَى الْإِطْلَاقِ`], correct: 0 },
        { title: `آض وعاد وغدا وراح`, kind: 'mcq', prompt: `Beyond the thirteen core members of كان وأخواتها, which four verbs does the lesson note some grammarians also count among الأفعال الناقصة؟`, options: [`آضَ، عَادَ، غَدَا، وَرَاحَ`, `صَارَ، لَيْسَ، ظَلَّ، وَبَاتَ`, `كَادَ، عَسَى، أَوْشَكَ، وَحَرَى`, `نِعْمَ، بِئْسَ، حَبَّذَا، وَسَاءَ`], correct: 0 },
        {
          title: `تركيب: مَا دُمْتُ حَيًّا`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of مَا دُمْتُ حَيًّا.`,
          source: `مَا دُمْتُ حَيًّا`,
          words: [`مَا دُمْـ`, `ـتُ`, `حَيًّا`],
          labels: [`فعل ناقص`, `اسم ما دام`, `خبر ما دام`],
          distractors: [`فاعل`, `حرف نفي`],
        },
        {
          title: `تركيب: لَيْسَ عَلَيْكَ هُدَاهُمْ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of لَيْسَ عَلَيْكَ هُدَاهُمْ.`,
          source: `لَيْسَ عَلَيْكَ هُدَاهُمْ`,
          words: [`لَيْسَ`, `عَلَيْكَ`, `هُدَاهُمْ`],
          labels: [`فعل ناقص`, `خبر ليس مقدم`, `اسم ليس مؤخر`],
          distractors: [`مبتدأ`, `فاعل`],
        },
        {
          title: `تركيب: كَانَتْ حَرْبٌ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each word in كَانَتْ حَرْبٌ (كان here is فعل تام).`,
          source: `كَانَتْ حَرْبٌ`,
          words: [`كَانَتْ`, `حَرْبٌ`],
          labels: [`فعل تام`, `فاعل`],
          distractors: [`اسم كان`, `خبر كان`],
        },
        {
          title: `تركيب: وَإِنْ كَانَ ذُو عُسْرَةٍ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of وَإِنْ كَانَ ذُو عُسْرَةٍ (كان here is فعل تام).`,
          source: `وَإِنْ كَانَ ذُو عُسْرَةٍ`,
          words: [`كَانَ`, `ذُو عُسْرَةٍ`],
          labels: [`فعل تام`, `فاعل`],
          distractors: [`اسم كان`, `خبر كان`],
        },
        {
          title: `تركيب: كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ.`,
          source: `كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ`,
          words: [`كَانَ`, `حَقًّا`, `عَلَيْنَا`, `نَصْرُ الْمُؤْمِنِينَ`],
          labels: [`فعل ناقص`, `خبر كان مقدم`, `متعلق بالخبر`, `اسم كان مؤخر`],
          distractors: [`فاعل`, `مضاف إليه`],
        },
        {
          title: `تركيب: أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ`,
          kind: 'tarkeeb',
          instruction: `Identify the grammatical role of each part of أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ.`,
          source: `أَهَؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ`,
          words: [`أَ`, `هَؤُلَاءِ`, `إِيَّاكُمْ`, `كَانُوا`, `يَعْبُدُونَ`],
          labels: [`حرف استفهام`, `مبتدأ`, `مفعول به مقدم ليعبدون`, `فعل ناقص + اسمه (واو الجماعة)`, `خبر كان`],
          distractors: [`حال`, `مضاف إليه`],
        },
      ],
    },
  ],
};

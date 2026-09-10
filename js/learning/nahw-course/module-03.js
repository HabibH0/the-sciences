import { card as c, rows as r, labelled as l, visual as v, question as q, plan } from './helpers.js';

// Display wording only. The complete original strings remain the answer values.
const analysisLabels = {
  'فعل مضارع مرفوع، وعلامة رفعه الضمة الظاهرة': 'مضارع مرفوع بضمة ظاهرة',
  'فاعل مرفوع، وعلامة رفعه الضمة الظاهرة': 'فاعل مرفوع بضمة ظاهرة',
  'اسم مجرور، وعلامة جره الكسرة الظاهرة': 'اسم مجرور بكسرة ظاهرة',
  'فعل مضارع مرفوع، وعلامة رفعه الضمة المقدرة': 'مضارع مرفوع بضمة مقدرة',
  'فاعل مرفوع، وعلامة رفعه الضمة المقدرة': 'فاعل مرفوع بضمة مقدرة',
  'اسم مجرور، وعلامة جره الكسرة المقدرة': 'اسم مجرور بكسرة مقدرة',
  'فعل مضارع مبني على السكون لاتصاله بنون النسوة': 'مضارع مبني بالسكون لنون النسوة',
  'ضمير منفصل مبني في محل رفع': 'ضمير منفصل مبني، محله رفع',
  'جار ومجرور، والهاء ضمير مبني في محل جر': 'جار ومجرور؛ هاء مبنية بمحل جر',
  'جار ومجرور، والهاء ضمير مبني في محل نصب': 'جار ومجرور؛ هاء مبنية بمحل نصب',
};

export const plans = {
  '03/l1': plan(11, 'The Governor and the Governed', [
    [c('Cause, receiver and effect', l(0, 'Three connected terms'), 1, l(2, 'How they work together'))],
    [c('A governor produces a state', 0, l(1, 'The definition in use'), 2, l(3, 'What لن changes')),
      c('Locate the governor in the sentence', 4)],
    [c('Which words can govern?', 0, r(1, 0, 1, 2), l(2, 'Different classes, different capacities')),
      c('A sentence does not itself govern', r(1, 3, 4), l(3, 'A governed structure needs its عامل'))],
    [c('Meaning without grammatical government', 0, 1, 2, l(3, 'Negation remains meaningful')),
      c('عاطل and مهمل describe عمل', 4, 5, l(6, 'Neither name removes meaning'))],
    [c('A governed word receives a state', 0, 1, 2, l(3, 'What صاحب receives')),
      c('Identify both sides of the relationship', 4, l(5, 'A governor and its receiver'))],
    [c('Nouns receive grammatical states', 0, r(1, 0), l(2, 'The اسم الفعل exception')),
      c('A past form can have a grammatical محل', r(1, 1), 3, 4),
      c('Particles, sentences and phrases', r(1, 2, 3, 4)),
      c('A question about the terminology', 5)],
    [c('Words that do not receive إعراب', 0, 1, r(2, 0, 1)),
      c('Governing and being governed differ', r(2, 2, 3), l(3, 'A particle can govern without receiving'))],
  ], [
    ['Three terms', 'عامل causes a state; معمول receives it; إعراب is its effect.'],
    ['Government', 'Every فعل governs; only some أسماء and حروف do.'],
    ['Meaning', 'عاطل and مهمل deny grammatical عمل, not meaning.'],
    ['Receiving إعراب', 'Distinguish ending from محل. No حرف receives إعراب.'],
  ], { copy: {
    '0:0': 'Beyond the single كلمة, three terms describe grammatical change.',
    '0:2': 'An عامل acts on a معمول; the resulting state is إعراب. This lesson defines the first two, before إعراب itself.',
    '2:2': 'Every فعل governs a فاعل, نائب فاعل, object or another connected element. Governing and non-governing حروف are roughly balanced; لن governs. Few أسماء govern: certain مشتقات and مصادر under their conditions. Most do no عمل.',
    '2:3': 'Neither جملة كبرى nor جملة صغرى governs. An عامل produces the جار ومجرور or ظرف; the شبه الجملة itself is always معمول, never عامل.',
    '3:6': 'A حرف always carries meaning. مهمل and عاطل deny grammatical عمل, not its contribution to meaning.',
    '4:5': 'In قام زيد, قام governs and زيد receives رفع as فاعل. Every عامل needs a معمول, and every معمول needs an عامل.',
    '5:2': 'جاء زيدٌ, رأيت زيدًا and مررت بزيدٍ show رفع, نصب and جر. اسم الفعل is excluded: it resembles a verb of a kind that is not معمول.',
    '5:3': 'A ناصب or جازم governs مضارع: لن نشركَ and لم يفعلْ. A ماضي keeps its مبني ending, but can be منصوب محلا after أن in بعد أن نزغ الشيطان, or مجزوم محلا after إن in إن فعلت.',
    '5:5': 'A past verb after a ناصب or جازم is called منصوب or مجزوم محلا. Why is a plain past verb not called مرفوع محلا? This is a question for reflection; the source gives no separate rule to answer it.',
    '6:3': 'لن governs; some uses of ما do not. Both are حروف, so neither receives إعراب. A جملة filling خبر, حال, صفة or مفعول به is معمول; one with no such position is not. Every شبه الجملة is معمول through its attachment to an عامل.',
  }, visuals: {
    '5:3': v('Do not invent a rule from the question', ['منصوب محلا / مجزوم محلا', 'After a ناصب or جازم'], ['مرفوع محلا؟', 'The source leaves this as a reflection']),
  } }),
  '03/l2': plan(12, 'Grammatical Inflection', [
    [c('The effect of the governor', 0, l(1, 'Where the effect appears')),
      c('Cause, receiver and effect', 2, 3)],
    [c('Three linguistic senses of إعراب', 0, 1)],
    [c('How the grammatical state appears', 0, 1, l(2, 'The route through these lessons'))],
    [c('A sign you can hear or see', 0, 1, 2, l(4, 'The visible signs')),
      c('Analyse the pronounced endings', 3)],
  ], [
    ['Definition', 'إعراب is the effect of an عامل at the end of a كلمة.'],
    ['Linguistic senses', 'إظهار clarifies; إزالة الفساد removes ambiguity; تحسين improves wording.'],
    ['Three types', 'لفظي is pronounced; تقديري is blocked; محلي belongs to the position.'],
    ['Visible signs', 'The ضمة in يجتهدُ المؤمنُ and كسرة in الخيرِ are إعراب لفظي.'],
  ], { analysisLabels, copy: {
    '0:1': 'An عامل causes a state at a word’s end. Its أثر is إعراب, which can appear as ضمة, فتحة, كسرة or سكون according to the word and position.',
    '0:2': 'The three terms form one chain.',
    '1:0': 'These are linguistic senses of إعراب, separate from its technical definition. They explain what it does in a sentence.',
    '2:0': 'The three types describe how a grammatical state appears.',
    '2:2': 'This lesson covers لفظي. The next distinguishes تقديري from محلي, where the sign does not appear in the لفظ.',
    '3:1': 'The sign of الإعراب اللفظي can be heard or seen at the word’s end.',
    '3:4': 'The ضمة on يجتهد and المؤمن, and كسرة on الخير, are visible: إعراب لفظي.',
  } }),
  '03/l3': plan(13, 'Estimated and Positional Inflection', [
    [c('A barrier prevents the sign appearing', 0, 1, 2, l(4, 'The effect of ألف مقصورة')),
      c('Estimate each grammatical sign', 3)],
    [c('The word still accepts إعراب', 0, l(1, 'Capacity and pronunciation differ'), 2)],
    [c('The ending cannot carry a changing sign', 0, 1, 2, 4, 5),
      c('Analyse the fixed forms by محل', 3)],
    [c('Why a مبني ending stays fixed', l(0, 'A structural difference'), l(1, 'The verb’s ending'), l(2, 'The pronouns'))],
    [c('Hidden sign or fixed ending?', 0, 1, l(2, 'Compare the word’s capacity'))],
  ], [
    ['تقديري', 'The word is معرب; a مانع prevents its sign being pronounced.'],
    ['محلي', 'A fixed form or structure cannot show a sign; its grammatical position carries the judgement.'],
    ['Examples', 'يسعى has an estimated sign. تسعين is مبني through نون النسوة.'],
    ['Pronouns', 'أنتن and the هاء in إليه are مبني by their nature as pronouns.'],
  ], { analysisLabels, copy: {
    '0:1': 'A مانع prevents the إعراب sign from appearing in pronunciation.',
    '0:4': 'The ألف مقصورة endings prevent the ضمة and كسرة from being pronounced.',
    '1:1': 'The word remains معرب and accepts a grammatical state. The علامة exists in judgement, but is مقدرة: a مانع blocks its sound, not the word’s capacity.',
    '1:2': 'This differs from a form that cannot carry a changing sign. The following cards explain المحلي and compare the two.',
    '2:1': 'مبني words and structures can occupy a grammatical محل without carrying a changing إعراب sign.',
    '2:4': 'تسعين is مبني على السكون because of نون النسوة.',
    '2:5': 'أنتن and the هاء in إليه are also مبني. Their endings stay fixed, but their grammatical positions give them إعراب محلي.',
    '3:0': 'In تقديري, a معرب word’s sign is blocked. In محلي, a مبني ending is fixed by structure, not by an عامل. It has no changing sign to pronounce.',
    '3:1': 'تسعين is مبني على السكون through اتصال بنون النسوة, not through a مانع.',
    '3:2': 'أنتن is ضمير منفصل; هاء in إليه is ضمير متصل. Both are مبني by nature. None of these three forms can show a changing ending, with or without an عامل.',
    '4:0': 'Neither has a visible sign. Ask what the word itself can carry.',
    '4:2': 'تقديري belongs to a معرب word with a hidden sign. محلي belongs to the position of a مبني word or a structure that cannot show إعراب directly.',
  }, visuals: {
    '3:0': v('What fixes the form?', ['تسعين', 'Its connection to نون النسوة'], ['أنتن · الهاء', 'Pronouns are مبني by nature']),
  }, analysisItemLabels: { 'bank-16': { 'فاعل مرفوع بضمة مقدرة': 'فاعل مرفوع بضمة ظاهرة' } } }),
};

export const checks = {
  '03/l1': [
    q('Which term names what causes a grammatical state?', null, 'Distinguish cause, receiver and effect.'),
    q('لن makes نشرك منصوب. What does that make لن?', null, 'Apply ما يوجب حالة.'),
    q('What do الجملة and شبه الجملة share in العمل?', ['Neither governs; شبه الجملة is always معمول.', 'Both are always عامل, never معمول.', 'الجملة always governs; شبه الجملة never does.', 'Both govern only in poetry.'], 'Ask whether the structure itself produces the state.'),
    q('Does calling ما in ما أشركنا عاطل or مهمل make it meaningless?', ['No; it still negates but does no عمل.', 'Yes; both names deny all meaning.', 'Yes, only before a past verb.', 'عاطل denies meaning; مهمل does not.'], 'Separate grammatical government from meaning.'),
    q('زيد receives رفع as فاعل in قام زيد. What is it?', null, 'Apply ما يقبل حالة.'),
    q('After أن in بعد أن نزغ الشيطان, how is the fixed ماضي described?', ['منصوب محلا; نصب belongs to its position.', 'منصوب لفظا; its ending changes.', 'مرفوع محلا; all past verbs default to رفع.', 'It has no grammatical state.'], 'The wording remains مبني.'),
    q('لن governs. Does that make لن معمول as well?', ['No; no حرف receives إعراب.', 'Yes; governing implies receiving.', 'No; لن is not عامل in the first place.', 'Yes, only when it enters an اسم.'], 'Test each side of the relationship separately.'),
  ],
  '03/l2': [
    q('What produces the أثر called إعراب?', ['The عامل acting on a معمول.', 'The معمول acting on itself.', 'تنوين alone, without an عامل.', 'The whole جملة, regardless of عامل.'], 'The effect has a cause.'),
    q('Which linguistic sense of إعراب removes ambiguity?', null, 'Recall the three linguistic senses.'),
    q('Which type of إعراب appears in pronunciation?', ['لفظي: its sign is pronounced.', 'تقديري: a مانع hides its sign.', 'محلي: the judgement belongs to محل.', 'None; all signs are silent.'], 'Is the sign present in the لفظ?'),
    q('The endings in يجتهدُ المؤمنُ في الخيرِ are audible. Which إعراب?', null, 'Identify what appears on the words themselves.'),
  ],
  '03/l3': [
    q('ألف مقصورة blocks the signs in يسعى الفتى إلى الهدى. Which إعراب?', null, 'A مانع stops pronunciation.'),
    q('Does a مانع in إعراب تقديري stop the word carrying إعراب?', ['No; it is معرب, but the sign is unpronounced.', 'Yes; a مانع always makes it مبني.', 'Yes for مضارع, but not اسم.', 'No, only for a weak letter other than ألف.'], 'Separate capacity from pronunciation.'),
    q('The fixed forms تسعين أنتن إليه have grammatical positions. Which إعراب?', ['محلي: the forms cannot carry a changing sign.', 'لفظي: the signs appear in the wording.', 'تقديري: their signs are only estimated.', 'None; no form is معرب.'], 'The judgement belongs to their محل.'),
    q('Why is تسعين مبني على السكون?', null, 'Identify what is attached to the verb.'),
    q('What separates يسعى from تسعين when neither shows a sign?', ['يسعى is معرب with a مانع; تسعين is مبني.', 'Both are تقديري: neither sign appears.', 'Both are محلي: neither ending changes.', 'يسعى is مبني; تسعين is معرب.'], 'Ask whether each form can carry a changing sign.'),
  ],
};
export const quizzes = {
  '03/l1': [q('What receives a grammatical state?'), q('لن makes نشرك منصوب. What is لن?'), q('Which statement about الجملة and شبه الجملة is true?'), q('What does عاطل or مهمل mean for ما in ما أشركنا?', ['No grammatical عمل, but meaning remains.', 'No meaning at all.', 'Always مبني in every context.', 'It can never precede a فعل.']), q('زيد receives رفع in قام زيد. What is its role?'), q('Which is not غير المعمول?', ['مضارع entered upon by a ناصب.', 'اسم الفعل, which behaves like a verb.', 'الأمر, with its fixed ending.', 'الحروف, which never receive إعراب.'])],
  '03/l2': [q('What produces the أثر called إعراب?', ['العامل causes the effect.', 'المعمول only receives the effect.', 'تنوين is a possible sign.', 'The جملة regardless of عامل.']), q('Which linguistic sense removes ambiguity?'), q('Which linguistic sense makes meanings clear?'), q('What defines الإعراب اللفظي?'), q('The كسرة in الخيرِ is audible. Which إعراب?'), q('Which pair names two types of إعراب?')],
  '03/l3': [q('What defines الإعراب التقديري?'), q('Why are the signs hidden in يسعى الفتى إلى الهدى?', ['ألف مقصورة prevents pronunciation.', 'الفتى and الهدى are مبني.', 'يسعى has no فاعل.', 'في is غير عامل and produces no effect.']), q('Is a word with إعراب تقديري معرب or مبني?', ['معرب; only its sign’s sound is blocked.', 'مبني; it never had a changing ending.', 'Neither; it has no grammatical state.', 'It depends on whether it is اسم or فعل.']), q('What defines الإعراب المحلي?'), q('Why is تسعين مبني على السكون?'), q('What separates التقديري from المحلي?', ['معرب with a hidden sign versus مبني with a محل.', 'تقديري is only for verbs; محلي only for nouns.', 'They name the same thing.', 'تقديري is heard; محلي is written only.'])],
};

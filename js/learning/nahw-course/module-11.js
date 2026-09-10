import { card as c, rows as r, labelled as l, visual as v, question as q, plan } from './helpers.js';

export const plans = {
  '11/l1': plan(50, 'Emphasis with Added باء', [
    [c('Emphasis without a separate attachment', 0, 1, 2)],
    [c('Two names for the same class', 0, 1, 2), c('Omitting it changes the rhetorical force', 3, 4)],
    [c('Emphasising a denial or a question', 0, 1, 2, 3)],
    [c('Reinforcing a noun with نفس', r(1, 0), 2, 3), c('Exclamation and sudden discovery', 0, r(1, 1, 2), 4)],
    [c('Before حسب or its predicate', 0, 1, 2), c('The same emphasis beyond حسب', 3, 4)],
    [c('كفى meaning “suffice”', 0, r(1, 0), 2), c('كفى meaning “protect”', 3, r(1, 1), 4)],
  ], [
    ['زائد / صلة', 'Emphasis without a separate تعلق. The noun retains its grammatical role.'],
    ['Regular uses', 'Negative or interrogative خبر; نفس; exclamation’s فاعل; مبتدأ after إذا الفجائية.'],
    ['حسب', 'Attested before حسب as مبتدأ, or before its خبر.'],
    ['كفى', 'Added باء with “suffice”, not with “protect”.'],
  ], { copy: {
    '0:0': 'أصلي has its own meaning and تعلق to a verb or equivalent. شبيه بالزائد has meaning without that requirement. زائد supplies emphasis.',
    '0:2': 'The added particle has no separate تعلق. Its noun still has a role, such as فاعل or خبر, despite surface جر. It is the particle, not the noun, that can be removed from the base structure.',
    '1:1': 'The naming reflects two grammatical schools.',
    '1:4': 'أليس الله بأحكم الحاكمين, “Is Allah not the most just of judges?”, has greater emphasis than أليس الله أحكم الحاكمين. Both obey Arabic grammar; omitting باء loses rhetorical force.',
    '2:0': 'The first صلة particle is emphatic باء.',
    '2:3': 'باء intensifies the denial; ظلام remains خبر.',
    '3:3': 'تأكيد لفظي repeats the word. تأكيد معنوي reinforces it with نفس or عين. Without باء: نظف الأمير المسجد نفسه. The core meaning remains; باء is especially common with نفس.',
    '3:4': 'هم remains فاعل in the exclamation. In the sudden discovery, ابن is مبتدأ: جر in form, رفع in position. باء reinforces the surprise.',
    '4:2': 'In بحسبك, حسب is مبتدأ and أن تصوم its خبر. In حسبك بزيد, حسب is still مبتدأ, but باء now precedes the خبر.',
    '4:4': 'When someone prays for an absent brother, the angel replies ولك بمثله, “And for you the same”. Commentators identify the same emphatic باء: compare ولك مثله, with مثل as مبتدأ مؤخر.',
    '5:2': 'الله is فاعل despite surface جر: الله كاف شهيدا, “Allah is sufficient as a witness”.',
    '5:4': 'The second meaning is وقى, “protect or spare from”. In “Allah spared the believers the fighting”, باء does not appear on the فاعل: the meaning is protection, not sufficiency.',
  }, boxCopy: {
    '0:1': ['الزائد يفيد التأكيد، ولا يتعلق مع مجروره بفعل أو شبهه.'],
    '2:1': ['تزاد الباء في خبر النفي بليس أو ما، والاستفهام بهل.'],
    '3:0': ['تزاد الباء قياسا مع نفس، وفاعل أَفْعِلْ بِهِ، والمبتدأ بعد إذا الفجائية.'],
  }, tableCopy: {
    '1:2': { 0: ['البصرة', 'حرف زائد', 'Extra to the base structure; still adds emphasis.'], 1: ['الكوفة', 'حرف صلة', 'Avoids calling Quranic wording “extra”; serves eloquence.'] },
  } }),
};

export const checks = {
  '11/l1': [q('What distinguishes added باء from an original preposition?', ['Emphasis without separate attachment to a verb.', 'It makes every following noun فاعلا.', 'It makes every following noun مبتدأ.', 'It gives surface رفع instead of جر.'], 'The noun keeps its own role beneath surface جر.'),
    q('Why do الكوفيون prefer the name حرف صلة?', ['To avoid calling Quranic wording “extra”.', 'These particles never occur in the Quran.', 'البصريون call them original prepositions.', 'They always have an independent meaning.'], 'The disagreement concerns the name, not the emphasis.'),
    q('What does باء add in ليس بظلام للعبيد?', ['An intensified denial of injustice.', 'A change from خبر to اسم ليس.', 'A direct object for ليس.', 'A question replacing the denial.'], 'ظلام retains its role as خبر.'),
    q('What is هم in أسمع بهم despite surface جر?', ['فاعل of the exclamation.', 'مفعول به.', 'مبتدأ.', 'نائب فاعل.'], 'Surface case and grammatical role are distinct.'),
    q('Where is باء in حسبك بزيد, compared with بحسبك أن تصوم?', ['Before خبر, rather than مبتدأ حسب.', 'Before a فاعل in both.', 'There is no added باء in حسبك بزيد.', 'Before an omitted verb of supplication.'], 'Locate حسب first.'),
    q('Why is there no added باء in وكفى الله المؤمنين القتال?', ['كفى means protect, not suffice.', 'الله can never receive جر.', 'القتال blocks the preposition.', 'وقى takes objects without a subject.'], 'The permission depends on كفى’s meaning.')],
};
export const quizzes = {
  '11/l1': [q('What contrasts with زائد’s emphasis without separate تعلق?', ['أصلي: independent meaning and attachment.', 'عطف: no governed مجرور.', 'اسم فعل: government like a verb.', 'مضاف إليه: follows a مضاف.']),
    q('Why use the name حرف صلة?', ['To avoid calling Quranic wording “extra”.', 'It carries more meaning than زائد.', 'زائد is reserved for conjunctions.', 'صلة never precedes a مجرور.']),
    q('What role does قائم retain in هل زيد بقائم?', ['خبر; باء adds emphasis.', 'فاعل.', 'مفعول به.', 'مضاف إليه.']),
    q('What is ابن in فإذا بابنه يصلي?'), q('What is حسب in بحسبك أن تصوم...?'),
    q('What licenses باء in كفى بالله شهيدا?', ['كفى means suffice, حسب.', 'الله is always مجرور.', 'شهيدا forces باء to appear.', 'كفى has no فاعل.'])],
};

Object.assign(plans, {
  '11/l2': plan(51, 'Making Generality Explicit with مِن', [
    [c('After the declarative كم', 0, 1, 2, 3), c('A second analysis of من آية', 4, 5)],
    [c('Negation and a question that denies', 0, r(1, 0, 1)), c('A genuine question with هل', r(1, 2), 2), c('Surface جر, underlying مبتدأ', 3, 4)],
    [c('Nobody at all: removing a possible reading', 0, 1, 2)],
    [c('Can added مِن appear in affirmative speech?', 0, 1, 2), c('What the partitive reading excludes', 3)],
  ], [
    ['كم الخبرية', 'Added مِن can precede its تمييز; another analysis treats مِن as أصلي.'],
    ['غير موجب', 'Negation, a question of denial, or a genuine هل question.'],
    ['عموم', 'مِن closes the possible “not one, but more” reading.'],
    ['Disagreement', 'الكوفيون والأخفش also allow affirmative uses; the given جمهور reading is partitive.'],
  ], { copy: {
    '0:0': 'مِن now has a third use: emphasis. Earlier uses were أصلي and تبعيضي, classified as شبيه بالزائد.',
    '0:3': '“How many clear signs We gave them!” آية is تمييز of كم الخبرية.',
    '0:5': 'Some instead treat مِن as أصلي. The whole phrase من آية becomes تمييز غير صريح, rather than the noun alone. Both analyses account for the sentence.',
    '1:2': 'هل من خالق means “There is no creator other than Allah”: a question expressing denial. هل من مزيد, Hell’s reply when asked if it is full, is read here as a genuine question. هل with an indefinite noun also licenses added مِن.',
    '1:4': 'مزيد retains رفع in position. Restore the omitted خبر: هل من مزيد موجود؟ Added مِن changes the visible ending, not the noun’s role.',
    '2:1': 'ما جاءنا رجل normally means no man came. A secondary reading denies just one man, leaving open that two or more came: احتمال الإفراد.',
    '2:2': 'ما جاءنا من رجل closes that possibility: nobody at all. Hence مِن للتنصيص على العموم, making generality explicit.',
    '3:1': 'The course contrasts two readings of اعبدوا الله واتقوه وأطيعون يغفر لكم من ذنوبكم: “Worship Allah, fear Him and obey me; He will forgive your sins.”',
    '3:3': 'The stated partitive interpretation distinguishes حقوق الله, such as shirk, from حقوق العباد, such as debts or unresolved riba dealings. Entering Islam wipes out the former; claims owed to people still require settlement. This explains the proposed exclusion, لإخراج حقوق العباد.',
  }, boxCopy: { '1:0': ['تزاد مِن في النفي، والاستفهام بمعناه، والاستفهام بهل.'],
    '3:0': ['يجيز الكوفيون والأخفش زيادة مِن في الكلام الموجب أيضا.'] },
    visuals: { '2:0': v('What the added particle settles', ['ما جاءنا رجل', 'Normally none; “not one” remains possible'], ['ما جاءنا من رجل', 'Explicitly no man at all']),
      '3:1': v('The distinction in this interpretation', ['حقوق الله', 'Obligations owed to Allah'], ['حقوق العباد', 'Claims owed to other people']) } }),
});
Object.assign(checks, {
  '11/l2': [q('What is آية in كم آتيناهم من آية بينة?', null, 'كم is declarative here.'),
    q('Why does هل من خالق غير الله express non-affirmation?', ['Its question means لا خالق غير الله.', 'هل licenses مِن regardless of every condition.', 'خالق is definite, though مِن requires indefinite.', 'مِن never occurs with هل.'], 'Identify the intended denial.'),
    q('What possibility does مِن close in ما جاءنا من رجل?', ['Not one man, while two or more came.', 'رجل might be a subject rather than an object.', 'ما might make it affirmative.', 'رجل might itself be dual.'], 'مِن makes the general denial explicit.'),
    q('What is excluded in the stated partitive reading of من ذنوبكم?', ['حقوق العباد: claims owed to people.', 'حقوق الله: obligations owed to Allah.', 'All sins, without any forgiveness.', 'Nothing is excluded.'], 'Compare the two categories in this interpretation.')],
});
Object.assign(quizzes, {
  '11/l2': [q('What is آية in كم آتيناهم من آية بينة?'), q('What licenses added مِن in ما جاءنا من بشير?', ['Negative speech, كلام غير موجب.', 'Affirmative speech.', 'بشير is definite.', 'An imperative verb is required.']),
    q('Why is مِن allowed in the genuine question هل من مزيد?', ['هل with an indefinite noun licenses this use.', 'هل never allows it in genuine questions.', 'مزيد is definite.', 'Only Hell as speaker licenses it.']),
    q('What does مِن do in ما جاءنا من رجل?', ['Makes the sweeping denial explicit.', 'Introduces ambiguity.', 'Makes رجل definite.', 'Does not affect meaning.']),
    q('What follows from the added مِن reading of من ذنوبكم?', ['All the sins referred to are included.', 'No sins are forgiven.', 'Only claims owed to people are forgiven.', 'It says nothing about scope.']),
    q('Which claims remain in the stated partitive interpretation?', ['حقوق العباد, owed to people.', 'حقوق الله alone.', 'Both are automatically erased.', 'Neither can ever be erased.'])],
});

Object.assign(plans, {
  '11/l3': plan(52, 'Denial, Clarification and Strengthening', [
    [c('لام الجحود reinforces negated كان', 0, 1, 2, 3), c('Why النحّاس preferred لام النفي', 4, 5)],
    [c('Does the denial target intention or action?', 0, 1)],
    [c('Clarifying the participants in love or dislike', 0, 1, 2, 3), c('Follow the particle to identify the lover', 4, 5)],
    [c('A prayer expressed through a مصدر', 0, 1, 2)],
    [c('Clarification after اسم فعل', 0, 1, 2), c('Two analyses of هيت لك', 3, 4, 5)],
    [c('Strengthening a link to a fronted object', 0, 1, 2, 3), c('Strengthening a verb-like noun’s government', 4, 5), c('Government and meaning are distinct', 6, 7)],
  ], [
    ['الجحود', 'Reinforces negated كان; النحّاس preferred the name لام النفي.'],
    ['Two analyses', 'البصريون: أصلي with implied intention. الكوفيون: added emphasis.'],
    ['التبيين', 'Clarifies a participant after love/dislike, a مصدر of prayer, or اسم فعل.'],
    ['التقوية', 'Strengthens government of a fronted معمول or a verb-like noun.'],
  ], { copy: {
    '0:0': 'لام has already expressed تخصيص، ملك، شبه الملك and تعليل. This lesson turns to emphatic and strengthening uses.',
    '0:3': '“Allah would not wrong them.” The traditional name is لام الجحود. جحد literally means denying what one knows; the technical name labels the grammatical construction.',
    '0:5': 'النحّاس preferred لام النفي: its function is to reinforce the existing negation in ما كان. He found no extra benefit in the more specific term جحود.',
    '1:0': 'The schools also disagree over the underlying structure.',
    '2:1': 'لام التبيين, also لام البيان, clarifies a participant. One setting is تعجب or تفضيل involving حب or بغض.',
    '2:3': '“How much I love the Messenger of Allah ﷺ!” The speaker loves; رسول الله is the beloved introduced by لام.',
    '2:5': 'إلى identifies the lover: ليوسف وأخوه أحب إلى أبينا means their father loves Yusuf and his brother. The speaker likewise remains the lover with إليّ in the table. Dislike follows the pattern: وما أبغضني لما نهى الله ورسوله عنه, “How I hate what Allah and His Messenger forbade!”',
    '3:0': 'A منصوب مصدر may replace a verb of دعاء, for or against someone. لام then clarifies its participant.',
    '3:2': '“For those who disbelieve, destruction!” تعسا is مفعول مطلق of omitted تعسوا. In this account, لهم identifies the people expressed by the lost واو subject: compare تعسوا تعسهم.',
    '4:0': 'The third setting follows اسم فعل.',
    '4:2': '“Far, far off is what you are promised!” لام clarifies the participant after هيهات.',
    '4:4': 'The meaning assigned to هيت changes the role of لك.',
    '5:1': 'A fronted معمول weakens the usual verb-to-object link.',
    '5:3': '“If you interpret visions.” Compare أعبر الرؤيا, with the object after the verb. Fronting الرؤيا motivates strengthening لام. A verb-like noun also has weaker government than a true verb.',
    '5:5': '“Doing whatever He wills.” فعّال is صيغة مبالغة, a noun with weaker government than its verb. لام strengthens its link to ما يريد, as it can with اسم فاعل.',
  }, boxCopy: { '2:0': ['لام التبيين توضّح صاحب الفعل أو المتعلّق به بحسب التركيب.'],
    '5:0': ['لام التقوية مع معمول الفعل المقدّم، ومع معمول شبه الفعل.'] }, tableCopy: {
    '1:1': { 0: ['البصريون', 'ما كان قاصدا ليفعل', 'أصلي؛ متعلق بقاصدا', 'Denying intention is stronger than denying action.'],
      1: ['الكوفيون', 'ما كان يفعل', 'زائد للتوكيد', 'Compare باء in ليس زيد بقائم.'] },
    '2:4': { 0: ['ما أحبني لرسول الله ﷺ', 'The speaker: المحب.', 'رسول الله: المحبوب.'],
      1: ['ما أحب رسول الله ﷺ إليّ', 'The speaker: المحب.', 'رسول الله: المحبوب.'] },
    '4:5': { 0: ['أقبل!', 'اسم فعل أمر؛ فاعله أنت مستتر', 'لام التبيين تؤكد المخاطب.'],
      1: ['تهيأتُ', 'اسم فعل بمعنى الماضي', 'لام أصلية للتعليل؛ مفعول له.'] },
    '5:7': { 0: ['مِن الزائدة', 'Meaning: ما من أحد makes the denial explicit.'],
      1: ['لام التقوية', 'Government: the link between عامل and معمول.'] },
  } }),
  '11/l4': plan(53, 'Added كاف and Less Common Prepositions', [
    [c('Likeness denied emphatically', 0, 1, 2, 3)],
    [c('Two readings of كمثله', 0, 1, 2, 3)],
    [c('Usage can make repetition emphatic', 0, 1, 2, 3)],
    [c('Beyond the main inventory', 0, 1), c('لعل with جر in the dialect of عقيل', 2, 3), c('خلا and عدا in exception', 4, 5)],
    [c('متى meaning مِن in هذيل', r(0, 0), 1, 2), c('كي with interrogative ما', r(0, 1), 3, 4), c('How كيمه is formed', 5, 6, 7, 8)],
  ], [
    ['Added كاف', 'The account here reads ليس كمثله شيء as an emphatic denial of likeness.'],
    ['Further uses', 'لعل in عقيل; متى meaning مِن in هذيل; خلا and عدا for exception.'],
    ['كي + ما', 'Interrogative كيمه means “why”; كي governs ما.'],
    ['The ending', 'ما loses its ألف after a preposition; هاء السكت supports a pause.'],
  ], { copy: {
    '0:0': 'كاف is the fourth صلة particle. Its original use gives likeness, تشبيه.',
    '0:2': '“Nothing is like Him.” كاف and مثل both carry likeness. The added كاف analysis reads their combination within ليس as emphatic denial, not another likeness.',
    '1:1': 'Compare the scope of denial.',
    '1:3': 'This motivates the added reading.',
    '2:1': 'Language follows shared usage, not arithmetic.',
    '2:2': 'In some dialects, “I didn’t see nobody” means “I saw nobody at all”. Two negative forms reinforce one denial rather than cancelling it.',
    '2:3': 'Similarly, the added كاف analysis treats repeated likeness as emphatic denial. Other grammatical analyses also exist.',
    '3:0': 'The main inventory is complete: thirteen أصلي, three شبيه بالزائد, and four صلة particles: باء، مِن، لام، كاف. Further words have prepositional uses in particular dialects or analyses.',
    '3:3': '“Perhaps Allah favoured you over us.” Familiar لعل, a verb-like particle of hope or apprehension, gives its اسم نصب and خبر رفع. In عقيل’s prepositional use, اللهِ has جر rather than اللهَ.',
    '3:5': 'خلا and عدا make exceptions like إلا and حاشا. The course foregrounds their verb analysis and also records prepositional uses. In ما خلا and ما عدا, ما is مصدرية, not negation.',
    '4:2': 'متى normally means “when” in a question or condition. هذيل also uses it for مِن: شربن بماء البحر ثم ترفعت متى لجج خضر لهن نئيج, “They drank sea water, then rose from deep green waters, roaring.” متى لجج means من لجج.',
    '4:4': 'Compare لكي تعلم, “so that you know”, where كي gives المضارع نصب. With interrogative ما, كي is prepositional; the whole combination means لِمَ, “why”.',
    '4:6': '“Why did you disobey Allah?”',
    '4:8': 'Interrogative ما regularly loses its ألف after a preposition. Compare عمّ يتساءلون, “About what do they ask?”, from عن + ما. هاء السكت is an added pause marker.',
  }, boxCopy: { '1:0': ['الكاف زائدة في التحليل المعروض.'],
    '3:4': ['خلا وعدا للاستثناء، ويستعملان فعلين أو حرفي جر.'],
    '4:3': ['كي حرف جر للتعليل إذا دخلت على ما الاستفهامية: كيمه؟'] }, tableCopy: {
    '1:2': { 0: ['Literal', 'Independent likeness.', 'Denies likeness to a counterpart, not directly the counterpart itself.'],
      1: ['Added reading', 'كاف reinforces مثل.', 'Nothing resembles Him at all.'] },
    '4:7': { 0: ['كي', 'Preposition for reason.'], 1: ['ما', 'Interrogative; its ألف drops.'], 2: ['هاء', 'هاء السكت; supports the pause, not a pronoun.'] },
  } }),
});
Object.assign(checks, {
  '11/l3': [q('What is لام in فما كان الله ليظلمهم traditionally called?', null, 'It reinforces the denial after ما كان.'),
    q('Why do البصريون restore ما كان قاصدا ليفعل?', ['Denying intention is stronger than denying the act.', 'لام can never be added.', 'الكوفيون wholly agree.', 'ما كان has no خبر.'], 'Compare intention with the action itself.'),
    q('Who loves in ما أحبني لرسول الله ﷺ?', ['The speaker, represented by ني.', 'رسول الله is the lover here.', 'Both equally.', 'Neither is identified.'], 'لام introduces the beloved in this wording.'),
    q('What does لهم clarify after تعسا replaces تعسوا?', ['The omitted verb’s subject.', 'لام itself becomes the subject.', 'It reverses the prayer’s meaning.', 'It makes تعسا a direct object.'], 'Restore تعسوا تعسهم.'),
    q('If هيت means تهيأت, what is لك?', ['مفعول له with original لام.', 'The same لام التبيين as the command reading.', 'خبر مقدم.', 'بدل replacing هيت.'], 'Compare “I am ready for you” with “Come!”'),
    q('How does لام التقوية differ from added مِن?', ['لام strengthens government; مِن strengthens meaning.', 'Both strengthen meaning only.', 'Both strengthen government only.', 'لام never accompanies a fronted object.'], 'Distinguish عمل from معنى.')],
  '11/l4': [q('What does added كاف contribute beside مثل here?', ['Emphasis on likeness within the denial.', 'A second independent likeness.', 'It cancels مثل entirely.', 'It reverses the إضافة.'], 'Read the phrase within ليس.'),
    q('What objection does the lesson raise to a literal two-layer reading?', ['It assumes a counterpart and only denies likeness to it.', 'It denies all divine attributes.', 'ليس cannot govern two كاف particles.', 'It gives exactly the added reading.'], 'Distinguish the stated objection from other possible analyses.'),
    q('What does the negative-concord comparison illustrate?', ['Repetition may reinforce one meaning in actual usage.', 'Arabic and English grammar are identical.', 'كاف must always be original.', 'مثل is ungrammatical alone.'], 'Think of dialectal “I didn’t see nobody”.'),
    q('What changes in عقيل’s prepositional لعل?', ['Its noun has جر instead of نصب.', 'Its noun disappears.', 'Its noun has رفع.', 'Its noun becomes مبني with no إعراب.'], 'Compare لعل اللهِ with لعل اللهَ.'),
    q('What happens to interrogative ما in كيمه, as in عمّ?', ['Its ألف drops after the preposition.', 'An ألف is added.', 'Its ألف stays.', 'هاء drops instead of ألف.'], 'Reconstruct عن + ما.')],
});
Object.assign(quizzes, {
  '11/l3': [q('What does جحد literally mean in the traditional term?', ['Denying something one knows.', 'Affirming something unknown.', 'Comparing two things.', 'Glorifying something known.']),
    q('How do الكوفيون classify لام الجحود?', ['Added for emphasis.', 'Original, governing an object.', 'A conjunction.', 'A conditional answer particle.']),
    // Correct the displayed target sentence so the original role-swap answer remains valid.
    q('From ما أحبني لرسول الله ﷺ to ما أحبني إلى رسول الله ﷺ, how do the roles change?', ['رسول الله becomes lover; the speaker beloved.', 'The semantic roles stay the same.', 'Both become lovers, with no beloved.', 'Neither role can be identified.']),
    q('What does لهم identify in the account of تعسا لهم?', ['The omitted subject واو of تعسوا.', 'تعسا as its own subject.', 'A second direct object.', 'Nothing connected to the verb.']),
    q('What kind of word is هيهات?'), q('What does لام reinforce in للرؤيا تعبرون?', ['The verb’s link to its fronted object.', 'The generality of الرؤيا.', 'A change of تعبرون into اسم فاعل.', 'It has no grammatical function.'])],
  '11/l4': [q('What does added كاف contribute in ليس كمثله شيء?', ['Emphasis within the denial of likeness.', 'A second independent likeness.', 'It removes the predicate.', 'Nothing at all.']),
    q('What contrast does this lesson draw for كاف here?', ['Literal two-layer reading assumes a counterpart; added reading denies likeness.', 'Original denies attributes; added denies nothing.', 'Both readings must be identical.', 'An original كاف makes the sentence ungrammatical.']),
    q('What does the negative-concord analogy illustrate?', ['Usage may make repeated elements emphatic.', 'Arabic and English grammar are identical.', 'كاف can never be original elsewhere.', 'مثل always requires كاف.']),
    q('Which dialect gives لعل a prepositional use?', ['عقيل.', 'هذيل, as a conjunction.', 'Every standard use of لعل.', 'No dialect allows it.']),
    q('Which analysis of خلا and عدا does the course foreground?', ['Verbs; ما in ما خلا and ما عدا is مصدرية.', 'Prepositions, like supposed prepositional إلا.', 'Exception nouns only.', 'Conjunctions.']),
    q('What is the final ه in كيمه?', ['هاء السكت: a pause marker.', 'A third-person pronoun.', 'A feminine تاء.', 'A second interrogative particle.'])],
});

Object.assign(plans, {
  '11/l5': plan(54, 'Omitting a Preposition', [
    [c('A regular omission before أن or أنّ', 0, 1, 2), c('The understood باء after أمر', 3, 4)],
    [c('Witnessing: باء may be stated or omitted', 0, 1), c('Permission is not an obligation', 2, 3)],
    [c('An omission known through attested usage', 0, 1, 2, 3)],
    [c('Two names for omission and reconnection', 0, 1, 2), c('The noun’s new case after omission', 3)],
  ], [
    ['قياسا', 'Before أن or أنّ when the intended relation remains clear.'],
    ['جائز', 'The preposition may remain; context and بلاغة guide the choice.'],
    ['سماعا', 'Other omissions depend on attested usage, as in كفروا ربهم.'],
    ['نزع الخافض', 'The former مجرور can become منصوب after the preposition is removed.'],
  ], { copy: {
    '0:0': 'After the preposition inventory, we ask when the particle can be omitted while its relation remains understood.',
    '0:2': 'The course motivates this by the heaviness of adjacent particles. Omission before أن or أنّ is regular when the intended preposition remains clear. Understood meaning does not require the visible noun to keep جر.',
    '0:4': '“Allah commands you to return trusts to their owners.” Compare ويأمرون بالمعروف, “They enjoin what is right”. The same باء is understood before أن تؤدوا.',
    '1:1': '“Bear witness that I am free of what you associate.” Restore واشهدوا بأني. Compare واشهد بأنا مسلمون, “Bear witness that we are Muslims”, where باء remains.',
    '1:3': 'نحو establishes permission, not a command to omit. Both forms can be grammatical. Why a verse chooses one wording requires its context and بلاغة, beyond this rule alone.',
    '2:1': 'Other omissions are سماعي: known from usage, without this general أن / أنّ rule.',
    '2:3': '“ʿAd disbelieved in their Lord.” Compare وللذين كفروا بربهم عذاب جهنم, “For those who disbelieve in their Lord is Hell’s punishment”. باء is omitted in كفروا ربهم, although neither أن nor أنّ follows.',
    '3:1': 'Two names describe removing the intermediary and reconnecting the verb to the noun.',
    '3:3': 'In كفروا ربهم, ربهم becomes منصوب بنزع الخافض. خافض is another name for حرف الجر. Compare بربهم with جر: omission changes the visible case while preserving the understood relation.',
  }, boxCopy: { '3:0': ['حذف وإيصال، أو اتساع. ومن نتائجه النصب بنزع الخافض.'] },
    tableCopy: { '3:2': { 0: ['حذف وإيصال', 'Remove the preposition and connect to the noun directly.'], 1: ['اتساع', 'Expansion beyond the usual preposition-plus-noun structure.'] } },
    visuals: { '3:1': v('A changed ending with the same relation', ['بِرَبِّهِمْ', 'With باء: جر'], ['رَبَّهُمْ', 'Without باء: نصب']) } }),
  '11/l6': plan(55, 'Exception with إلّا', [
    [c('A particle that gives one noun نصب', 0, 1, 2, 3)],
    [c('An exception within or outside the group', 0, 1)],
    [c('The governor in the disconnected exception', 0, 1)],
    [c('Two accounts of the connected exception', 0, 1, 2, 3)],
  ], [
    ['إلا', 'The next governor category: نصب of one noun in the construction taught here.'],
    ['متصل / منقطع', 'The excluded item belongs to the preceding group, or lies outside it.'],
    ['منقطع', 'This course assigns the نصب to إلا.'],
    ['متصل', 'Two presented accounts: the preceding verb through إلا, or إلا itself.'],
  ], { copy: {
    '0:0': 'The preceding category gives جر to one noun. The next category in this inventory gives نصب to one noun and contains إلا.',
    '0:3': '“They prostrated, except Iblis.” إلا marks exception. Iblis, who did not prostrate, is set apart with نصب. This example concerns the group addressed by the command.',
    '1:0': 'Ask whether the excluded item belongs to the group being discussed.',
    '2:1': 'In the course’s account of منقطع, إلا supplies نصب: the excluded item is not part of the group governed by the preceding action. The next card contrasts the two offered accounts of متصل.',
    '3:1': 'جاء الناس إلا زيدا: “The people came except Zayd.”',
    '3:3': 'Both explain the same نصب. زيد remains مستثنى, not an ordinary direct object of جاء.',
  }, boxCopy: { '2:0': ['في العرض هنا: عامل المنقطع إلا، وفي عامل المتصل خلاف.'],
    '3:0': ['في عامل المتصل خلاف.'] }, tableCopy: {
    '1:1': { 0: ['متصل', 'A member of the group, excluded from the judgement.', 'فسجدوا إلا إبليس: treating the group as those addressed.'],
      1: ['منقطع', 'Outside the preceding group; an exceptional contrast.', 'The contrast does not require membership.'] },
    '3:2': { 0: ['The preceding verb', 'جاء through إلا.', 'The verb gives نصب; إلا marks exception.'],
      1: ['إلا itself', 'The particle.', 'إلا gives نصب in both kinds.'] },
  } }),
});
Object.assign(checks, {
  '11/l5': [q('Which preposition is understood in يأمركم أن تؤدوا?', ['باء, regularly omitted before أن.', 'مِن, because أمر never takes a direct object.', 'على, because الأمانات requires height.', 'None; the comparison uses a different verb.'], 'Compare ويأمرون بالمعروف.'),
    q('What does جائز mean for omitting باء before أنّ?', ['Both stating and omitting it can be grammatical.', 'Only stating it is grammatical.', 'Only omitting it is grammatical.', 'بلاغة always forbids omission.'], 'Permission does not mean obligation.'),
    q('How is omission in كفروا ربهم established?', ['Attested usage, سماعا.', 'كفر never takes a preposition.', 'عاد itself licenses omission.', 'Negation licenses it here.'], 'There is no following أن or أنّ.'),
    q('What is the resulting نصب called?', null, 'خافض is another name for the removed preposition.')],
  '11/l6': [q('Which category contains إلا in this inventory?', ['A particle giving نصب to one noun.', 'An original preposition.', 'A شبه زائد preposition.', 'A conjunction.'], 'Look at إبليسَ in the example.'),
    q('Treating Iblis as one of those addressed, what kind of exception is this?', null, 'The group is defined by the command’s addressees.'),
    q('Which governor is assigned to منقطع in this account?', ['إلا: the item is outside the preceding action’s group.', 'Always the preceding verb.', 'The مستثنى منه.', 'There is no governor.'], 'Compare the separate discussion of متصل.'),
    q('What does the first account say of زيدا in جاء الناس إلا زيدا?', ['It receives نصب from جاء through إلا.', 'It replaces الناس as فاعل.', 'It is the مستثنى منه.', 'It is a second مبتدأ.'], 'The dispute concerns the governor of the exception.')],
});
Object.assign(quizzes, {
  '11/l5': [q('What motivation does the course give for omission before أن / أنّ?', ['Relieving adjacent particles’ heaviness.', 'They never allow a preposition.', 'Only negation licenses omission.', 'It occurs only in poetry.']),
    q('What does ويأمرون بالمعروف help identify in يأمركم أن تؤدوا?', ['An understood باء before أن.', 'أمر never takes باء.', 'أن is a preposition.', 'الأمانات is مفعول مطلق.']),
    q('What guides keeping or omitting باء in the compared verses?', ['Context and بلاغة; نحو establishes permission.', 'A rule forbidding omission before أنّ.', 'A rule forbidding retention before أنّ.', 'Negation versus affirmation alone.']),
    q('Which kind of omission appears in كفروا ربهم?', ['سماعي, established by usage.', 'The regular أن / أنّ pattern.', 'No omission occurs.', 'Obligatory omission.']),
    q('How does كفروا بربهم clarify كفروا ربهم?', ['It identifies the omitted باء.', 'It proves كفر has no object.', 'It makes ربهم the subject.', 'It provides no comparison.']), q('What is the resulting نصب called?')],
  '11/l6': [q('Which case does إلا give in the construction taught here?'), q('Who prostrated in فسجدوا إلا إبليس?', ['The angels.', 'The prophets.', 'Human beings.', 'The jinn excluding Iblis.']),
    q('What defines استثناء منقطع?', ['The item is outside the preceding group.', 'The item belongs to the preceding group.', 'It always has رفع.', 'It never uses إلا.']),
    q('Which governor is assigned to منقطع in the course’s account?', ['إلا itself.', 'Always the preceding verb.', 'No account is presented.', 'The مستثنى منه.']),
    q('What competes with إلا as the governor in the connected example?', ['The verb جاء through إلا.', 'The subject الناس.', 'No governor at all.', 'زيد is actually مرفوع.']),
    q('Does this course select one of the two connected-exception accounts?', ['No; it presents both.', 'Yes; only the preceding verb.', 'Yes; only إلا.', 'The question never arises.'])],
});

import { card as c, rows as r, part as p, visual as v, question as q, plan } from './helpers.js';

export const plans = {
  '27/l1': plan(127, 'The State and Its Bearer', [
    [c('A description related to the action', 0, 1, 2), c('A حال can describe the subject', 3, 4, 5), c('A حال can describe the object', 6, 7), c('A حال from an إضافة complement', 8, 9)],
    [c('Identify the صاحب الحال', 0, 1, 2)],
    [c('A fronted حال with an indefinite bearer', 0, r(1,0), p(2,0)), c('A specified indefinite bearer', r(1,1), p(2,1)), c('Negation or a related construction', r(1,2), p(2,2)), c('A clause joined by و', r(1,3), p(2,3)), c('A rare unrestricted indefinite', 3, 4)],
    [c('The حال itself is normally indefinite', 0, 1, 2, 3)],
    [c('A noun interpreted as a description', 0, r(1,0), p(2,0)), c('Reciprocal action', r(1,1), p(2,1)), c('A sequence of ranks', r(1,2), 3)],
    [c('A noun preparing for its adjective', 0, r(1,0), p(2,0)), c('A numerical state', r(1,1), p(2,1)), c('The original material', r(1,2), 3), c('What the material becomes', r(1,3), 4)],
  ], [
    ['حال', 'A supplementary description related to its bearer and the action.'],
    ['صاحب الحال', 'Normally definite and earlier; several licenses admit indefinites.'],
    ['Indefiniteness', 'The حال is normally indefinite, including by interpretation.'],
    ['Form', 'A derivative is usual; the source distinguishes two groups of underived forms.'],
  ], { copy:{
    '0:0':'الحال is the sixth منصوب in this sequence.',
    '0:2':'A حال describes its صاحب in relation to the action. فضلة means outside the basic predication, not dispensable in every sentence: removing it can destroy the intended meaning. Concurrency is usual; anticipated and lasting states follow later.',
    '0:3':'The bearer may be subject, object or another eligible noun, including an إضافة complement under its conditions.',
    '0:5':'وادعوه مخلصين له الدين describes the callers as sincere. Its bearer is the attached واو الجماعة in ادعوه, not a hidden “you”.',
    '0:7':'In إنا أرسلناك بالحق بشيرا ونذيرا, بشيرا and coordinated نذيرا describe the object كاف, the one sent as bearer of good news and warning.',
    '0:9':'In إلى الله مرجعكم جميعا, جميعا describes كم, the genitive إضافة complement. مرجع expresses returning, which supports this relation; not every arbitrary مضاف إليه freely licenses a حال.',
    '1:1':'Every حال has a bearer, صاحب الحال or ذو الحال, just as a نعت has a منعوت.',
    '1:2':'The bearer normally precedes the حال.',
    '2:0':'The bearer is normally definite. The following source licenses allow an indefinite.',
    '2:4':'The prayer report describes the Prophet ﷺ sitting and men behind him standing: صلى ... قاعدا وصلى وراءه رجال قياما. The source treats رجال as a rare bare indefinite bearer without one of these licenses. Other grammarians allow this more widely when the predication is useful.',
    '3:1':'The حال’s normal indefiniteness contrasts with its bearer’s normal definiteness.',
    '3:3':'In إذا دعي الله وحده كفرتم, وحده means alone or exclusively. It really is an إضافة form, interpreted descriptively as منفردا or موحّدا in the account taught. No hidden tanwin is required.',
    '4:0':'A non-clausal حال is normally a derivative. The source gives three ways to interpret an underived noun descriptively.',
    '4:3':'وجاء ربك والملك صفا صفا illustrates ordering: the angels are rank after rank, interpreted as مرتبين. The repetition describes sequence, not two unrelated numerical objects.',
    '5:0':'The source also groups four underived uses without requiring a derivative paraphrase. Some grammarians still supply such paraphrases, so the grouping is an analytical convention.',
    '5:3':'أأسجد لمن خلقت طينا, “Shall I prostrate to one You created from clay?”, illustrates original material in the adopted حال account. The explanatory خلقتَه reveals the bearer’s returning object pronoun.',
    '5:4':'For a resulting form, compare وتنحتون الجبال بيوتا, with بيوتا as a resulting حال in one account. The source quotes وتنحتون من الجبال بيوتا instead, where بيوتا is commonly a direct object. Both describe homes made from mountains, but the constructions are not interchangeable analyses.',
  }, copyParts:{'2:2':[
    'رأيت راكبا رجلا, “I saw a man riding”, puts راكبا before indefinite رجلا. Fronting the حال licenses its indefinite bearer.',
    'In فيها يفرق كل أمر حكيم أمرا من عندنا, the source adopts أمرا as حال. Its proposed bearer أمرٍ is specified by حكيم. من عندنا qualifies the حال itself; it is not what specifies that earlier bearer. Other analyses of أمرا also exist.',
    'لا يصلين أحد غافلا illustrates prohibition. وما أهلكنا من قرية إلا ولها كتاب معلوم illustrates negation. These are the source’s نفي أو شبهه contexts, including questions, which can license an indefinite bearer.',
    'أو كالذي مر على قرية وهي خاوية على عروشها joins the descriptive clause by و. قرية is indefinite; the linked clause explains its ruined state.',
  ],'4:2':[
    'بدا وجهه قمرا, “his face appeared like a moon”, interprets قمر as مشابها للقمر. The noun becomes a description through comparison.',
    'بعته يدا بيد means an immediate hand-to-hand exchange. كلمته فاه إلى فيّ means speaking face to face. Both illustrate مفاعلة, a reciprocal relation between the two parties.',
  ],'5:2':[
    'In إنا أنزلناه قرآنا عربيا, قرآنا prepares for the intended adjective عربيا. قرآن is the underived حال موطئة; عربيا is its descriptive adjective, not a second underived حال as the source’s question suggests.',
    'فتم ميقات ربه أربعين ليلة illustrates a numerical حال in the source’s account: the appointed term completed as forty nights. Other analyses treat أربعين as ظرف, object or تمييز; exercises specify the adopted حال reading.',
  ]}, boxCopy:{'0:1':['الحال: وصف فضلة يبيّن هيئة صاحبه.'],'1:0':['لكل حال صاحب؛ والأصل تقدمه عليها.'],'2:3':['الحال من نكرة محضة بلا مسوغ قليل في حساب المصدر.']}, tableCopy:{'2:1':{
    0:['تقديم الحال','رأيت راكبا رجلا'],1:['تخصيص صاحبها','كل أمر حكيم؛ أمرا من عندنا'],2:['نفي أو شبهه','لا يصلين أحد غافلا'],3:['واو الحال','وهي خاوية على عروشها'],
  },'4:1':{0:['تشبيه','بدا وجهه قمرا','مشابها للقمر'],1:['مفاعلة','بعته يدا بيد','مناجزة أو مقابلة'],2:['ترتيب','وجاء ربك والملك صفا صفا','مرتبين']},'5:1':{0:['موصوفة','إنا أنزلناه قرآنا عربيا'],1:['عدد','فتم ميقات ربه أربعين ليلة'],2:['أصل','أأسجد لمن خلقت طينا'],3:['فرع','وتنحتون الجبال بيوتا']}}, analysisItemLabels:{'bank-18':{'جار ومجرور متعلق بأرسلناك':'جار ومجرور متعلق بنذيرا'}} }),
  '27/l2': plan(128, 'Lasting States and Added Information', [
    [c('A passing state', 0, 1, 2), c('An enduring quality', 3, 4)],
    [c('A حال adds a distinct meaning', 0, 1, 2), c('A حال reinforces existing meaning', 3, 4)],
    [c('Past narration: a disputed category', 0, r(1,0), p(2,0)), c('Concurrent with the action', r(1,1), p(2,1)), c('An anticipated state', r(1,2), p(2,2))],
    [c('Two questions about one حال', 0, 1), c('Keep the three distinctions separate', 2)],
  ], [
    ['Persistence', 'متنقلة changes; لازمة, ثابتة or دائمة expresses a lasting quality.'],
    ['Information', 'مؤسسة adds meaning; مؤكدة reinforces it.'],
    ['Time', 'مقارنة accompanies; مقدرة anticipates. محكية is a disputed narration category.'],
    ['Combination', 'A حال can receive labels answering different questions.'],
  ], { copy:{
    '0:0':'First ask whether the described state changes or persists.',
    '0:2':'وجاءوا أباهم عشاء يبكون describes the sons weeping when they arrive. Weeping is a passing state, متنقلة, the usual pattern.',
    '0:4':'وخلق الإنسان ضعيفا presents human weakness as an enduring feature. ضعيفا is لازمة, also ثابتة or دائمة, in this reading. It does not claim that every person’s degree of weakness is identical at every moment.',
    '1:0':'Next ask whether the حال adds distinct information or reinforces what is already expressed.',
    '1:2':'ولا تمش في الأرض مرحا prohibits an arrogant manner of walking. مرحا is مؤسسة, also مبينة. Removing it would wrongly turn this into a prohibition of walking itself; فضلة does not mean irrelevant to the intended meaning.',
    '1:4':'ولا تعثوا في الأرض مفسدين repeats the corruption meaning of تعثوا through مفسدين. This is مؤكدة in the account taught.',
    '2:0':'Timing is normally measured against the governing action. The source adds a past-narration category whose basis needs qualification.',
    '3:0':'These distinctions ask different questions and can apply together.',
    '3:1':'يبكون is both متنقلة, because weeping passes, and مقارنة, because it accompanies the sons’ arrival. One label concerns persistence, the other relative timing; neither replaces the other.',
  }, copyParts:{'2:2':[
    'The source calls وقد بلغني الكبر محكية because reaching old age precedes the utterance. But old age persists at that time. Many grammarians reject speech-time alone as a separate حال category and compare the state with its governor instead. A past verb does not automatically mean a state already ended.',
    'In وجاءوا أباهم عشاء يبكون, the weeping coincides with their coming: مقارنة. A past narrated event can still contain a حال concurrent with its own action.',
    'فادخلوها خالدين presents enduring residence as anticipated at entry: مقدرة or مستقبلة in the taught account. Its duration unfolds after entry, rather than being completed at that instant. Other commentaries also discuss a concurrent interpretation.',
  ]}, tableCopy:{'2:1':{0:['محكية','Past narration, as grouped by the source','قال رب أنى يكون لي غلام وقد بلغني الكبر'],1:['مقارنة','Alongside its governor','وجاءوا أباهم عشاء يبكون'],2:['مقدرة','Anticipated at entry','فادخلوها خالدين']},'3:2':{0:['الثبات','متنقلة؛ لازمة، ثابتة، دائمة'],1:['الإفادة','مؤسسة، مبينة؛ مؤكدة'],2:['الزمن','محكية، ماضية؛ مقارنة، حاضرة؛ مقدرة، مستقبلة']}}, visuals:{'3:0':v('The sons arrive weeping',['متنقلة','A state that passes'],['مقارنة','Concurrent with arrival'])}, analysisItemLabels:{'bank-15':{'فعل ماضٍ وفاعله':'فعل ماضٍ وفاعله صاحب الحال','مفعول به وصاحب الحال':'مفعول به منصوب','فاعل وصاحب الحال':'مبتدأ وصاحب الحال'},'bank-16':{'حال مقارِنة':'حال من المفعول به','حال مؤسِّسة':'تمييز منصوب'}} }),
  '27/l3': plan(129, 'Intended, Multiple and Related States', [
    [c('The state itself is intended', 0, 1, 2), c('A noun prepares for its adjective', 3, 4)],
    [c('Several states of one bearer', 0, 1, 2), c('A state nested inside another', 3, 4)],
    [c('The bearer or something related to it', 0, 1, 2), c('Their humbled eyes', 3, 4)],
    [c('Choose only applicable distinctions', 0, 2), c('Persistence, information and time', r(1,0,1,2)), c('Intention, multiplicity and relation', r(1,3,4,5)), c('The form of a non-clausal حال', r(1,6))],
  ], [
    ['Intention', 'مقصودة is itself intended; موطئة introduces its adjective.'],
    ['Multiplicity', 'مترادفة shares a bearer; متداخلة depends on a pronoun inside another حال.'],
    ['Relation', 'حقيقية describes the bearer; سببية describes something related.'],
    ['Scope', 'Use only relevant categories; multiplicity and word form do not apply to every حال.'],
  ], { copy:{
    '0:0':'Ask whether the حال itself carries the intended description.',
    '0:2':'يبكون directly conveys the sons’ weeping. This is مقصودة, the normal pattern.',
    '0:4':'In إنا أنزلناه قرآنا عربيا, قرآن introduces the adjective عربيا that supplies the intended description. This is موطئة, the same underived, qualified حال discussed earlier.',
    '1:0':'With several أحوال, identify the bearer of each rather than assuming their relations are identical.',
    '1:2':'يحشر الناس يوم القيامة حفاة عراة غرلا describes people as barefoot, naked and uncircumcised. All three directly describe الناس: مترادفة. The term means successive descriptions here, not that the three words are synonyms.',
    '1:4':'خالدين فيها is a حال. In the nested account, لا يخفف عنهم العذاب describes the hidden هم inside خالدين: خالدين وهم لا يخفف عنهم. This is متداخلة. Another independent حال or resumed-sentence account is also possible; exercises use the stated nested reading.',
    '2:0':'A حال may describe its bearer directly or through something related to it.',
    '2:2':'حقيقية directly describes the bearer. سببية describes a related entity, not a motive or cause in the مفعول لأجله sense.',
    '2:4':'خشعا أبصارهم يخرجون من الأجداث describes the emerging people through their humbled eyes. In the source’s سببية account, خشعا raises أبصارهم, which contains their returning pronoun. Other analyses and readings exist; this is the related-eyes account taught.',
    '3:0':'The summary has seven rows, not the six stated in its introduction. They organize different aspects of الحال, but not every row applies to every example.',
    '3:2':'يبكون can be متنقلة, مقارنة and مقصودة together. Multiplicity applies only when there is more than one حال. مشتقة versus جامدة classifies a non-clausal word, not the entire finite clause يبكون.',
  }, boxCopy:{'2:1':['حقيقية: تصف صاحبها؛ سببية: تصف ما يتعلق به.']}, tableCopy:{'3:1':{0:['الثبات','متنقلة؛ لازمة، ثابتة، دائمة'],1:['الإفادة','مؤسسة، مبينة؛ مؤكدة'],2:['الزمن','محكية، ماضية؛ مقارنة، حاضرة؛ مقدرة، مستقبلة'],3:['القصد','مقصودة؛ موطئة'],4:['التعدد','مترادفة: صاحب مشترك؛ متداخلة: ضمير في الأولى'],5:['التعلق','حقيقية: صاحبها؛ سببية: ما يتعلق به'],6:['الاشتقاق','مشتقة؛ جامدة مؤولة: تشبيه، مفاعلة، ترتيب؛ جامدة غير مؤولة: موصوفة، عدد، أصل، فرع']}}, visuals:{'3:0':v('Different questions about يبكون',['متنقلة','Does the state persist?'],['مقارنة','When is it realized?'],['مقصودة','Is this the intended description?'])}, analysisItemLabels:{'bank-15':{'حال جامدة غير مؤوَّلة، موصوفة (الحال الموطِّئة)':'حال مشتقة مقصودة بذاتها','نعت لـ"قرآنًا" يحمل الوصف الحقيقي':'نعت مرفوع لـ"قرآنًا"','حال حقيقية':'حال من الفاعل'},'bank-16':{'حال حقيقية':'مفعول به منصوب','فعل مضارع مبني للمجهول':'مضارع مجهول','فعل ماضٍ مبني للمجهول':'ماضٍ مجهول','فعل مضارع مبني للمعلوم':'مضارع معلوم','نائب فاعل وصاحب الحال':'نائب فاعل، صاحب الحال','حال أولى (مترادفة)':'حال ١ مترادفة','حال ثانية (مترادفة)':'حال ٢ مترادفة','حال ثالثة (مترادفة)':'حال ٣ مترادفة'}} }),
};

export const checks = {
  '27/l1':[
    q('What is كم, the bearer of جميعا in مرجعكم جميعا?', ['مضاف إليه','نعت','حرف جر','مبتدأ'], 'Identify its relation to مرجع.'),
    q('What is the default order?', ['Bearer, then حال','حال, then bearer','One combined word','The bearer is always omitted'], 'Every حال describes an identifiable bearer.'),
    q('What licenses indefinite رجلا in رأيت راكبا رجلا?', ['The حال is fronted','A description specifies رجل','Negation precedes it','A و joins the حال'], 'Identify what changed from the normal order.'),
    q('How is وحده understood as حال?', ['Descriptively, as منفردا or موحدا','Every pronoun exempts حال from the rule','It is actually the bearer','It has hidden tanwin'], 'Its real إضافة form receives an indefinite interpretation.'),
    q('What descriptive sense does يدا بيد illustrate?', ['Reciprocal action','Comparison','Sequence','No possible descriptive reading'], 'The exchange involves the two parties together.'),
    q('What is قرآن in the adopted قرآنا عربيا analysis?', ['حال موطئة','حال مؤسسة','حال مؤكدة','حال مقصودة'], 'It prepares for its adjective عربيا.'),
  ],
  '27/l2':[
    q('How is ضعيفا classified by persistence in the taught reading?', ['لازمة، ثابتة، دائمة','متنقلة','مؤسسة','مقدرة'], 'Human weakness is presented as an enduring feature.'),
    q('How is مفسدين classified by information in ولا تعثوا ... مفسدين?', ['مؤكدة','مؤسسة','متنقلة','مقدرة'], 'It reinforces the corruption meaning of the verb.'),
    q('Which timing account is taught for خالدين after فادخلوها?', ['مقدرة، مستقبلة','محكية، ماضية','مقارنة، حاضرة','لازمة، ثابتة'], 'Residence unfolds beyond the instant of entry.'),
    q('Why can يبكون be both متنقلة and مقارنة?', ['The labels answer independent questions','Only one can really apply','They are synonyms','Timing cancels persistence'], 'One concerns duration, the other relation to arrival.'),
  ],
  '27/l3':[
    q('What is the counterpart of موطئة when the حال itself is intended?', ['مقصودة','محكية','حقيقية','متداخلة'], 'Use the intention distinction.'),
    q('What describes حفاة عراة غرلا sharing الناس as bearer?', ['مترادفة','متداخلة','محكية','حقيقية'], 'All three directly describe the same people.'),
    q('In the related-eyes account, what type is خشعا?', ['سببية','حقيقية','مقصودة','متنقلة'], 'It describes أبصارهم, related to the emerging people.'),
    q('Which pair classifies independent informational contribution?', ['مؤسسة ومؤكدة','محكية ومقارنة','مترادفة ومتداخلة','حقيقية وسببية'], 'Ask whether the حال adds or reinforces meaning.'),
  ],
};

export const quizzes = {
  '27/l1':[
    q('What does a حال normally do?', ['Describes its bearer in relation to the action','Describes an unchanging appearance in every case','Always replaces the basic predicate','Describes only the subject']),
    q('What is the bearer of جميعا in مرجعكم جميعا?', ['An إضافة complement','The verbal subject','A direct object','The predicate']),
    q('How does the source classify bare رجال with قياما in the prayer report?', ['Rare without one of its listed licenses','The mandatory default','Impossible Arabic','Allowed only in poetry']),
    q('How is وحده interpreted as حال?', ['منفردا or موحدا','An unrestricted exemption','It is not a حال here','With hidden tanwin']),
    q('What does يدا بيد illustrate?', ['Reciprocity','Comparison','Sequence','No descriptive interpretation']),
    q('In the source’s numerical حال account, how is أربعين grouped?', ['Underived without required derivative reinterpretation','Underived with required derivative reinterpretation','An ordinary derivative','Only a preparatory حال']),
  ],
  '27/l2':[
    q('What persistence label is taught for خلق الإنسان ضعيفا?', ['لازمة، ثابتة','متنقلة','مؤسسة','مقارنة']),
    q('What information label describes مرحا in ولا تمش ... مرحا?', ['مؤسسة، مبينة','مؤكدة','لازمة','محكية']),
    q('What information label describes مفسدين reinforcing تعثوا?', ['مؤكدة','مؤسسة','متنقلة','مقدرة']),
    q('Which disputed label does the source give وقد بلغني الكبر?', ['محكية، ماضية','مقارنة، حاضرة','مقدرة، مستقبلة','لازمة، ثابتة']),
    q('Which anticipated-state label is taught for فادخلوها خالدين?', ['مقدرة، مستقبلة','محكية، ماضية','مقارنة، حاضرة','مؤسسة، مبينة']),
    q('What does يبكون being متنقلة and مقارنة show?', ['The labels classify different aspects','Only one label can be valid','Every passing state must be concurrent','Concurrent cancels passing']),
  ],
  '27/l3':[
    q('What intention label is taught for قرآنا before عربيا?', ['موطئة','مقصودة','محكية','سببية']),
    q('What intention label describes يبكون itself conveying weeping?', ['مقصودة','موطئة','لازمة','متداخلة']),
    q('What multiplicity label describes حفاة عراة غرلا?', ['مترادفة','متداخلة','محكية','حقيقية']),
    q('In the stated nested account, what describes لا يخفف after خالدين?', ['متداخلة','مترادفة','مؤسسة','سببية']),
    q('What label applies to خشعا in the related-eyes account?', ['سببية','حقيقية','مقصودة','متنقلة']),
    q('Which pair classifies the relation to the bearer?', ['حقيقية وسببية','مؤسسة ومؤكدة','محكية ومقارنة','مترادفة ومتداخلة']),
  ],
};

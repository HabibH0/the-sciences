// Options retain their original indices, including every distractor's claim.
// These are display adapters only; source exercises and final quizzes are intact.
import { SARF_QUIZZES } from './sarf-course/index.js';
import { COURSE_CHECKS, COURSE_QUIZZES } from './nahw-course/index.js';
const q = (prompt, options, hint) => ({ prompt, ...(options ? { options } : {}), ...(hint ? { hint } : {}) });
export const FOUNDATION_CHECKS = {
  '01/l2': [
    q('لَفْظُ الجَلالَةِ has meaning without tense. What is it?', null, 'Distinguish meaning from a form that indicates tense.'),
    q('In إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ, who is مسند إليه?', ['إبراهيم: الإسناد إليه', 'لحليم: النداء', 'إنّ: الإضافة', 'إبراهيم: التنوين'], 'Identify the person something is said about.'),
    q('In لَيْسَ مِنَ امْبِرِّ امْصِيَامُ فِي امْسَفَرِ, what is ام?', ['أل التعريف in حِمْير', 'تنوين in قريش', 'ياء النداء in تميم', 'لام الابتداء in حِمْير'], 'Recall the dialectal marker of definiteness.'),
    q('Why is the added ن sound in وَالعِتَابَا not a noun sign?', ['تنوين الترنم: rhyme, even on فعل or حرف.', 'تنوين التمكين: directly marks an اسم.', 'نون التوكيد: a verb sign.', 'ياء المخاطبة: a command sign.'], 'العتاب already has أل. Test what else accepts this sound.'),
    q('Does لام make يَكُونَ مجرور in لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا?', ['No; لام governs the whole اسم مؤول.', 'Yes; any فعل after حرف جر is مجرور.', 'No; يكون is always مرفوع.', 'Yes, for مضارع but not ماضي.'], 'Distinguish the verb from the complete interpreted construction.'),
    q('Is ليت a منادى in يَا لَيْتَ قَوْمِي يَعْلَمُونَ?', ['No; ليت is not being called.', 'Yes; everything after يا is منادى.', 'Yes; ليت is an اسم.', 'No; ليت never follows يا elsewhere.'], 'Look for genuine calling, not just position after يا.'),
  ],
  '01/l3': [
    q('What matters when a construction stands as an اسم?', ['Its noun position, not a one-word appearance.', 'The number of letters.', 'Beginning with أل.', 'Masculine or feminine gender.'], 'A whole construction can fill one grammatical position.'),
    q('الصَّوْمُ directly fills a noun role. Which kind is it?', null, 'Does this noun require reinterpretation?'),
    q('Why is أَنْ تَصُومُوا together the مبتدأ in وَأَنْ تَصُومُوا خَيْرٌ?', ['حرف مصدر + جملة form one مصدر.', 'أن alone is already اسم صريح.', 'تصوموا alone carries تنوين.', 'Every مبتدأ must be two words.'], 'Identify both parts of the interpreted unit.'),
    q('What is another name for الموصوف?', null, 'It names the thing capable of being described.'),
    q('عِلْمٌ exists in its possessor. Which kind of اسم ذات is it?', null, 'Does knowledge exist independently?'),
    q('عَالِمٌ describes someone with عِلْمٌ. Which kind of noun is it?', null, 'Distinguish a meaning from the description of its possessor.'),
  ],
  '01/l4': [
    q('Can يَعْبُدُ alone choose present or future?', ['No; shared between حال and استقبال.', 'Yes; always حال.', 'Yes; always استقبال.', 'No; it never indicates time.'], 'Its form allows two time readings.'),
    q('Can a فعل ever have no فاعل at all?', ['No; the doer can be understood.', 'Yes; جامدة verbs have none.', 'Yes; أمر needs no doer.', 'Yes; passive verbs have none.'], 'Distinguish an unmentioned doer from no doer.'),
    q('Do future readings make فاعل and المنصورون verbs?', ['No; their هيئة is a noun form.', 'Yes; any contextual time makes a verb.', 'Yes; غدًا makes a word a verb.', 'No; تنوين is a verb pattern.'], 'Time must be indicated by the form’s coining, not context alone.'),
    q('Name the heavy and light ن in لَيُسْجَنَنَّ and لَيَكُونًا.', ['نون التوكيد الثقيلة والخفيفة', 'تاء التأنيث الثقيلة والخفيفة', 'السين والسوف', 'لم ولن'], 'The light form is written as تنوين in these examples.'),
    q('Why is صَهْ, “be quiet”, not فعل أمر?', ['It cannot accept ياء المخاطبة: صهي.', 'It expresses no request.', 'It is passive.', 'It occurs only in poetry.'], 'A request alone is not enough: apply both command tests.'),
    q('What supports the Kufan view that نعم and بئس are أسماء?', ['A جار enters: على بئس العير.', 'Both begin with نون.', 'Both accept ياء المخاطبة.', 'تنوين proves they are verbs.'], 'Compare their evidence with the Basran test of تاء التأنيث.'),
  ],
  '01/l5': [
    q('What completes في’s meaning of “in”?', ['An اسم: البيت in في البيت.', 'تنوين attached to في.', 'Another حرف جر before it.', 'Nothing; it is complete alone.'], 'A particle’s meaning is completed through something else.'),
    q('هل and بل accept no noun or verb signs. What are they?', null, 'Consider which class remains.'),
    q('How do the two senses of ب differ?', ['Alphabet: مبنى. Preposition: معنى.', 'مبنى takes تنوين; معنى cannot.', 'مبنى occurs only in poetry.', 'There is no difference.'], 'Spelling and sentence grammar ask different questions.'),
    q('After فتحة, what are ساكن ي and و in الخَيْرُ فِي التَّوْبَةِ?', null, 'Compare the vowel before each letter with its matching vowel.'),
  ],
  '02/l1': [
    q('What makes several words a جملة?', ['إسناد: attributing something to something.', 'At least three words.', 'تنوين on the last word.', 'A حرف جر anywhere.'], 'Count the essential relationship, not the words.'),
    q('In قَامَ زَيْدٌ, which is المسند إليه?', ['زيد as فاعل', 'قام as فعل', 'زيد as مبتدأ', 'قام as خبر'], 'Who is the action attributed to?'),
    q('In ضَرَبَ زَيْدٌ عَمْرًا, what is عمرا outside the core?', null, 'The عمدة is فعل and فاعل.'),
    q('What turns بيت into a sentence such as البيت كبير?', ['إسناد: كبير attributed to البيت.', 'Adding تنوين.', 'Adding أل.', 'Repeating بيت twice.'], 'Naming a thing alone does not make a judgement.'),
    q('وَخَلَقَ كُلَّ شَيْءٍ opens with خلق. Which type is it?', null, 'Identify the opening word of the core.'),
    q('Why is إِيَّاكَ نَعْبُدُ فعلية?', ['إياك is فضلة; نعبد + hidden فاعل is core.', 'إياك is itself a verb.', 'نعبد is فضلة; إياك alone is core.', 'It is اسمية because إياك opens it.'], 'Look past the fronted object to the عمدة.'),
  ],
  '02/l2': [
    q('Does certain truth remove الله واحد from خبرية?', ['No; it is still a report judged true.', 'Yes; certainty makes it إنشائية.', 'Yes; only false reports are خبرية.', 'No; it has no إسناد.'], 'The category does not require doubt about the truth.'),
    q('أَإِلَهٌ مَعَ اللهِ asks. Which category is it?', ['إنشائية: استفهام', 'خبرية: can be judged true', 'إنشائية: نداء', 'خبرية: استفهام is reporting'], 'Identify what the speaker does.'),
    q('Without همزة, what does إِلَهٌ مَعَ اللهِ become?', ['خبرية: a false report.', 'Still إنشائية: similar words.', 'شرطية: an implied إن.', 'صغرى: inside a larger sentence.'], 'Removing the question marker changes the speech act.'),
    q('What does فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ communicate?', ['A stern report: the deliberate liar’s fate.', 'An invitation to sit in the Fire.', 'A question about who deserves it.', 'A prayer for the speaker’s safety.'], 'Distinguish command wording from its warning function.'),
    q('In وَاللهُ يَعْلَمُ, name the inner and whole sentences.', ['يعلم: صغرى. والله يعلم: كبرى.', 'يعلم: كبرى. والله يعلم: صغرى.', 'Both are كبرى.', 'Both are صغرى.'], 'The inner sentence fills the position of خبر.'),
  ],
  '02/l3': [
    q('عندك fills the صلة in الَّذِي عِنْدَكَ. What is it?', null, 'It resembles a sentence without being one in outward form.'),
    q('Which structure is فِي مَكَّةَ?', null, 'Identify the first word and the noun it governs.'),
    q('In عِنْدَ الكَعْبَةِ, is عند a حرف جر?', ['No; a ظرف noun, with مضاف إليه.', 'Yes; a preposition like في.', 'Yes; because الكعبة is مجرور.', 'No; عند never takes إضافة.'], 'A مجرور noun can follow more than one kind of word.'),
    q('Why call all جار ومجرور ظرف, even with لام، كاف، رُبَّ?', ['تغليب: the dominant sense names all.', 'لام، كاف، رب were originally ظروف.', 'ظرف applied only to prepositions.', 'A scribal error in grammar books.'], 'Recall how the name extended from عند/فوق and في/على.'),
    q('What is the second explanation for this shared name?', ['متعلَّق is needed as مظروف is needed.', 'جار ومجرور always means time.', 'A real ظرف must stand beside it.', 'The older جار ومجرور gave ظرف its name.'], 'Compare the structural need of each expression.'),
  ],
  '02/l4': [
    q('If the phrase is متعلِّق, what is its عامل called?', null, 'Notice the vowel on the لام.'),
    q('Can كان or ثبت replace implied أرسلنا in وَإِلَى عَادٍ أَخَاهُمْ هُودًا?', ['No; the specific verb is required: لغو.', 'Yes; any general word can replace it.', 'No; omission makes it مستقر.', 'Yes; every omitted عامل is general.'], 'Omitted and general are different conditions.'),
    q('What hidden element is absent from ظرف لغو?', ['ضمير يعود إلى مبتدأ، صاحب حال، منعوت أو موصول.', 'تنوين making the phrase definite.', 'A حرف جر.', 'A mentioned governing verb.'], 'لغو refers to absence of a hidden pronoun, not uselessness.'),
    q('What governs the oath تَاللهِ in تَاللهِ تَفْتَأُ?', ['Specific omitted أقسم: ظرف لغو.', 'General omitted ثبت: ظرف مستقر.', 'No عامل is needed in an oath.', 'The visible verb تفتأ.'], 'An oath without باء is one of the fixed omission patterns.'),
    q('What kind of implied ثابت governs إِنَّكَ عَلَى صِرَاطٍ مُسْتَقِيمٍ?', ['General وجود: ظرف مستقر.', 'Specific as أرسلنا: ظرف لغو.', 'Not omitted; ثابت is written.', 'A حرف جر, not اسم or فعل.'], 'Identify whether the implied word expresses general existence.'),
    q('In فَخَرَجَ عَلَى قَوْمِهِ فِي زِينَتِهِ, what is في زينته?', ['ظرف مستقر as حال.', 'ظرف لغو attached to خرج.', 'Neither; it has no عامل.', 'اسم مؤول from إن and its sentence.'], 'It describes the state in which he came out.'),
  ],
  '02/l5': [
    q('What does مفيد mean in الكلام قول مفيد?', ['The listener needs no further meaning.', 'No إعراب mistakes.', 'Contains a ناسخ.', 'A report that is true.'], 'Ask whether stopping leaves the sense complete.'),
    q('Is إِنْ تَصْدُقْ complete كلام?', ['No; add جواب: إن تصدق تنج.', 'Yes; تصدق names an action.', 'Yes; مضارع names ongoing action.', 'No; there is no مسند إليه.'], 'The listener is still waiting for the result of the condition.'),
    q('Is every جملة also كلام?', ['No; إسناد can leave meaning incomplete.', 'Yes; the terms mean exactly the same.', 'No; except sentences opening with فعل.', 'Yes, when a ناسخ is present.'], 'كلام adds a requirement beyond the sentence structure.'),
    q('Which three features define غير موجب?', null, 'Recall negation, prohibition and questioning.'),
    q('Why is لَا تُشْرِكْ بِاللهِ غير موجب?', ['It contains نهي.', 'It is موجب: none of the three features.', 'It contains استفهام.', 'It is not كلام at all.'], 'Identify the function of لا here.'),
  ],
};

export const FOUNDATION_QUIZZES = {
  '01/l2': [
    q('Which definition describes الاسم?', ['Own meaning without tense.', 'Own meaning tied to tense.', 'Meaning completed through another.', 'Any meaningful لفظ, nothing more.']),
    q('Which noun sign appears in هُدًى?'), q('Which noun sign appears in يَا نُوحُ?'),
    q('In لَيْسَ مِنَ امْبِرِّ امْصِيَامُ فِي امْسَفَرِ, what does ام replace?'),
    q('In لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا, what is يكون’s state?', ['منصوب by أن مقدرة; لام governs the اسم مؤول.', 'مجرور: حرف جر precedes it.', 'مبني: all مضارع after لام are مبنية.', 'مرفوع: لام never affects a verb.']),
    q('Is ليت a منادى in يَا لَيْتَ قَوْمِي يَعْلَمُونَ?', ['No; يا strengthens a wish.', 'Yes; every word after يا is منادى.', 'Yes; ليت is a noun.', 'No; يا never precedes a noun.']),
  ],
  '01/l3': [q('الصَّوْمُ directly fills a noun role. Which kind is it?'),
    q('What defines الاسم المؤول?', ['حرف مصدر + following جملة, as one مصدر.', 'The noun alone, without a construction.', 'A ذات capable of taking a صفة.', 'A description of a موصوف.']),
    q('In وَأَنْ تَصُومُوا خَيْرٌ, what role does أَنْ تَصُومُوا fill?'),
    q('رَجُلٌ exists in itself. Which kind of اسم ذات is it?'),
    q('عِلْمٌ exists in its possessor. Which kind is it?'),
    q('In رَجُلٌ صَالِحٌ, what is صالح’s role?')],
  '01/l4': [q('What defines الفعل?', ['Own meaning tied to tense.', 'Own meaning without tense.', 'Meaning completed through another.', 'Description of a موصوف.']),
    q('Which three meanings does جَلَسَ carry?'), q('In نَصَرَ, what are ن ص ر and فَعَلَ called?'),
    q('Why is أمس not a verb?', ['Time through مادة, not هيئة coined for it.', 'It never refers to the past.', 'It accepts تاء التأنيث.', 'It accepts ياء المخاطبة.']),
    q('Which verb type does لم mark in لَمْ يَلِدْ?'),
    q('اجلس accepts ياء المخاطبة; صه cannot. What follows?', ['اجلس is أمر; صه has طلب through مادة.', 'Both are أمر because both request.', 'Neither: no written نون التوكيد.', 'Only صه is أمر: it resists ياء المخاطبة.'])],
  '01/l5': [q('What defines الحرف?', ['Meaning completed through another.', 'Own meaning tied to tense.', 'Own meaning without tense.', 'Description of a موصوف.']),
    q('في’s meaning needs what follows. What does this show?', ['A particle’s meaning needs another.', 'It always carries تنوين.', 'It never appears with a noun.', 'It behaves exactly like a verb.']),
    q('هل and بل accept no noun or verb signs. What are they?'),
    q('As alphabet letters, which kind are ف، ع، ل?'),
    q('As grammatical particles, which kind are في، إن، بل، لا?'),
    q('In وَكُونُوا مَعَ الصَّادِقِينَ, ساكن و follows ضمة. What is it?')],
  '02/l1': [q('What are مسند and مسند إليه together called?'), q('In قَامَ زَيْدٌ, identify the مسند and its form.'),
    q('Outside the core ضرب زيد, what is عمرا in ضَرَبَ زَيْدٌ عَمْرًا?'), q('Which sentence type is وَخَلَقَ كُلَّ شَيْءٍ?'),
    q('Does إِنَّ اللهَ غَفُورٌ رَحِيمٌ remain اسمية?', ['Yes; its underlying core is nominal, على الأصح.', 'No; every ناسخ makes it verbal.', 'No; إنّ makes it conditional.', 'Yes; because إنّ has تنوين.']),
    q('Why is إِيَّاكَ نَعْبُدُ فعلية?', ['إياك is فضلة; نعبد + hidden فاعل is core.', 'إياك itself is a verb.', 'نعبد is فضلة; إياك alone is core.', 'إياك has تنوين, forcing فعلية.'])],
  '02/l2': [q('What defines الجملة الخبرية?', ['A report judged truthful or false.', 'Speech not judged truthful or false.', 'A sentence beginning with an اسم.', 'A sentence containing another sentence.']),
    q('Does certain truth remove الله واحد from خبرية?', ['No; it remains a report judged true.', 'Yes; certain truths are إنشائية.', 'Yes; only false statements are خبرية.', 'No; it lacks إسناد.']),
    q('أَإِلَهٌ مَعَ اللهِ asks a question. Which category is it?'),
    q('What does فَلْيَتَبَوَّأْ مَقْعَدَهُ مِنَ النَّارِ communicate?', ['A stern warning: the liar’s place in the Fire.', 'An invitation to sit in the Fire.', 'A question about who deserves it.', 'A prayer that he be spared.']),
    q('What defines الجملة الصغرى?', ['A sentence in one word’s place inside another.', 'A sentence beginning with a verb.', 'Speech judged truthful or false.', 'The larger containing sentence.']),
    q('In اللهُ يَعْلَمُ, what is the sentence يعلم as خبر called?')],
  '02/l3': [q('What is عندك, filling the صلة in الَّذِي عِنْدَكَ, called?'),
    q('What are the two structures of شبه الجملة?'),
    q('What are عند، فوق، تحت، خلف grammatically?', ['Nouns; what follows is مضاف إليه.', 'Prepositions; what follows is مجرور.', 'Verbs carrying time.', 'Conjunctions joining words.']),
    q('Why call جار ومجرور ظرف, even with لام، كاف، رُبَّ?', ['تغليب from عند/فوق and في/على.', 'ظرف is the only term for حرف جر.', 'لام، كاف، رب were originally ظروف.', 'Every جار ومجرور denotes place.']),
    q('What is the second reason for this shared name?', ['Needs متعلَّق as ظرف needs مظروف.', 'It always denotes time.', 'It needs a real ظرف nearby.', 'It shares حروف with النداء.']),
    q('What do فِي مَكَّةَ and عِنْدَ الكَعْبَةِ share?', ['Both are structures of شبه الجملة.', 'Both are nominal sentences.', 'Both are types of إنشاء.', 'Both are pillars of إسناد.'])],
  '02/l4': [q('What is the عامل of a متعلِّق phrase called?'), q('What are شبه الجملة’s two types by عامل?'),
    q('إلى قومه attaches to stated أرسلنا in لَقَدْ أَرْسَلْنَا نُوحًا إِلَى قَوْمِهِ. Which type?'),
    q('What hidden element is absent from ظرف لغو?', ['ضمير يعود إلى مبتدأ، صاحب حال، منعوت أو موصول.', 'تنوين, an ending mark.', 'حرف عطف, a linking word.', 'ناسخ, a governing word.']),
    q('What does the general عامل of ظرف مستقر express?'),
    q('Why must the omitted عامل in صلة be a verb?', ['A موصول’s صلة must be a جملة.', 'صلة never contains شبه الجملة.', 'مستقر can never be a verb.', 'اسم موصول always requires حرف جر.'])],
  '02/l5': [q('What defines الكلام?'),
    q('What does ما يحسن السكوت عليه mean?', ['The listener needs no further meaning.', 'The report must be true.', 'The speech must contain a ناسخ.', 'The sentence must begin with a verb.']),
    q('Is إِنْ تَصْدُقْ complete كلام?', ['No; add جواب: إن تصدق تنج.', 'Yes; تصدق names an action.', 'Yes; مضارع names ongoing action.', 'No; it has no مسند إليه.']),
    q('Is every جملة also كلام?', ['No; إسناد can leave meaning incomplete.', 'Yes; both terms mean the same.', 'No; كلام is broader than جملة.', 'Yes, if it contains a verb.']),
    q('Which features make speech غير موجب?'), q('لا الناهية in لَا تُشْرِكْ بِاللهِ makes it which category?')],
};

export function foundationCheck(lesson, index) {
  return (FOUNDATION_CHECKS[lesson.learningKey] || COURSE_CHECKS[lesson.learningKey])?.[index];
}
export function foundationQuiz(lesson, index) {
  const display = lesson.learningModel === 'mizan-sarf' ? SARF_QUIZZES[lesson.learningKey]?.[index]
    : lesson.learningModel === 'mizan-nahw' && (FOUNDATION_QUIZZES[lesson.learningKey] || COURSE_QUIZZES[lesson.learningKey])?.[index];
  return display ? { ...lesson.quiz[index], ...display, q: display.prompt } : lesson.quiz[index];
}

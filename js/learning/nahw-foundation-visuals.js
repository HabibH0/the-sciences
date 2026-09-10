// Redundant visual comparisons reinforce the source copy. Phones retain every
// learning detail in the source panels and can omit these duplicate diagrams.
// Each item has an Arabic term, a label, and optionally a complete Arabic
// quotation appended to the label in its own direction scope.
const visual = (caption, ...items) => ({ caption, items });
export const FOUNDATION_VISUALS = {
  '01/l2': {
    '0:0': visual('Meaning without a tense', ['الله', 'اسم'], ['الرَّحْمٰن', 'اسم'], ['الرَّحِيم', 'اسم']),
    '1:3': visual('The first part of an إضافة', ['رَبِّ', 'مضاف'], ['العَالَمِينَ', 'مضاف إليه']),
    '3:0': visual('What the sound tells you', ['هُدًى', 'Grammatical تنوين'], ['تنوين الترنم', 'Poetic sound and rhythm']),
    '4:1': visual('What receives جر?', ['أنّ', 'A particle'], ['أنّ + الجملة', 'The whole مصدر مؤول']),
    '5:0': visual('Two explanations of يا', ['حرف تنبيه', 'Calls attention'], ['حرف نداء', 'The منادى is omitted']),
  },
  '01/l3': {
    '0:0': visual('Two forms, one noun position', ['الصَّوْمُ', 'The noun itself'], ['أَنْ تَصُومُوا', 'Interpreted as one مصدر']),
    '1:0': visual('One noun, several possible roles', ['الصَّوْمُ', 'مبتدأ · فاعل · مفعول به']),
    '3:0': visual('Two names for the same idea', ['الموصوف', 'The thing being described'], ['اسم الذات', 'The same category']),
  },
  '01/l4': {
    '2:1': visual('Lexical time is not verb tense', ['أمس', 'Past'], ['الآن', 'Present'], ['غدًا', 'Future']),
    '4:1': visual('Both command tests must pass', ['طلب', 'صه requests silence'], ['ياء المخاطبة', 'صه cannot accept it']),
    '5:0': visual('The disagreement over نعم and بئس', ['البصريون', 'أفعال: accept تاء التأنيث'], ['الكوفيون', 'أسماء: a جار can enter']),
  },
  '01/l5': {
    '1:0': visual('No noun signs and no verb signs', ['هَلْ', 'حرف'], ['بَلْ', 'حرف']),
    '3:1': visual('Fatḥah before a soft letter', ['الخَيْر', 'ساكن ي after فتحة'], ['التَّوْبَة', 'ساكن و after فتحة']),
  },
  '02/l1': {
    '1:0': visual('What is the statement about?', ['زَيْدٌ', 'مسند إليه'], ['قَائِمٌ', 'What is said about Zayd']),
    '2:1': visual('Context completes the reply', ['هَلْ أَكَلْتَ؟', 'The question'], ['لا', 'Understood: ', 'لا، لم آكل']),
    '5:1': visual('Look through the ناسخ to the core', ['ما هذا بشرًا', 'Core opens with هذا'], ['وكان الله عليمًا حكيمًا', 'Nominal core: الله عليم حكيم']),
    '5:3': visual('The verb is understood after إن', ['وإن أحد من المشركين استجارك', 'The visible wording'], ['وإن استجارك أحد من المشركين', 'The underlying verbal structure']),
  },
  '02/l2': {
    '0:0': visual('A report and a question', ['زَيْدٌ قَائِمٌ', 'A statement to judge'], ['أَإِلَهٌ مَعَ اللهِ', 'A question being asked']),
    '0:1': visual('Certainty does not change the category', ['الله واحد', 'Certainly true; still خبرية'], ['زيد قائم', 'A report judged against reality']),
    '2:1': visual('Emphasis within a report', ['إِيَّاكَ نَعْبُدُ', 'Worship is for Allah alone'], ['وَإِيَّاكَ نَسْتَعِينُ', 'Help is sought from Allah alone']),
  },
  '02/l3': {
    '0:0': visual('The relative pronoun needs its صلة', ['الَّذِي', 'اسم موصول'], ['عِنْدَكَ', 'شبه الجملة fills the صلة']),
    '0:1': visual('Read ظرف in its context', ['المفعول فيه', 'A grammatical function'], ['فوق · تحت · عند', 'Words used as ظروف'], ['شبه الجملة', 'The whole expression']),
    '3:0': visual('A shared name through تغليب', ['عند · فوق', 'Original ظرفية'], ['في · على', 'A similar meaning'], ['لام · كاف · رب', 'The name extends to the class']),
    '4:0': visual('A shared need for attachment', ['جار ومجرور', 'Needs متعلَّق'], ['ظرف', 'Needs مظروف']),
  },
  '02/l4': {
    '0:0': visual('Notice the vowel on ل', ['متعلِّق', 'The شبه الجملة'], ['متعلَّق به', 'Its governing عامل']),
    '1:1': visual('Specific even when unmentioned', ['وإلى عاد أخاهم هودًا', 'The written expression'], ['وأرسلنا إلى عاد أخاهم هودًا', 'The required specific governor']),
    '2:0': visual('What does لغو mean here?', ['لغو', 'Free of the relevant hidden pronoun'], ['ظرف خاص', 'A more direct description']),
    '5:3': visual('Two attachments in one آية', ['على قومه', 'لغو: attached to خرج'], ['في زينته', 'مستقر: functioning as حال']),
    '5:4': visual('Supply a sentence for the صلة', ['الذي في مكة', 'The expressed phrase'], ['استقر', 'An understood verb, not مستقر']),
    '5:5': visual('Two levels of analysis', ['مستقر', 'The omitted عامل'], ['ظرف مستقر', 'The شبه الجملة itself']),
  },
  '02/l5': {
    '0:0': visual('Two parts of the definition', ['قول', 'Meaningful speech'], ['مفيد', 'Complete enough to stop']),
    '2:0': visual('An additional condition', ['جملة', 'Contains إسناد'], ['كلام', 'إسناد and a complete meaning']),
  },
};

export const FOUNDATION_LABELS = {
  '01/l2': { '0:1': 'Meaning and tense', '0:2': 'Recognise the pattern', '1:2': 'What is spoken about', '1:4': 'Governed by باء', '1:5': 'The إضافة relationship', '1:8': 'Noun behaviour', '2:0': 'The familiar marker', '2:4': 'Read the equivalents', '3:0': 'The grammatical sign', '3:2': 'The poetic exception', '3:5': 'Read and test the verse', '4:1': 'What the rule excludes', '4:3': 'Apply the rule to يكون', '4:5': 'Apply the rule to أنّ', '5:2': 'Calling or expressing grief?', '5:3': 'Two grammatical accounts' },
  '01/l3': { '0:0': 'A division by form', '0:2': 'Look at the grammatical position', '1:1': 'No reinterpretation needed', '1:3': 'One noun in the sentence', '2:1': 'How the unit is formed', '2:3': 'Both parts together', '2:5': 'Why it can be مبتدأ', '3:0': 'Now classify by meaning', '3:2': 'Two names, one idea', '4:0': 'Two kinds of اسم الذات', '4:3': 'Where does it exist?', '5:1': 'The definition in use', '5:3': 'Identify each part', '5:6': 'Meaning, rather than إعراب' },
  '01/l4': { '0:1': 'Meaning joined to time', '0:3': 'Present or future?', '1:0': 'Three meanings together', '1:2': 'Test it in جلس', '2:0': 'Two components', '2:2': 'Apply the distinction', '2:4': 'Lexical and contextual time', '2:6': 'Read the examples', '2:7': 'Why they remain nouns', '3:0': 'Across verb forms', '3:3': 'The opening letters', '3:4': 'Two forms of emphasis', '3:6': 'The two Qurʾānic instances', '3:7': 'Shared by two tenses', '4:0': 'Visible and semantic signs', '4:2': 'Both conditions are needed', '4:4': 'Requests in action', '4:6': 'Why صه fails the test', '4:8': 'Both conditions are met', '5:0': 'A grammatical disagreement', '5:1': 'Weigh the two arguments' },
  '01/l5': { '0:1': 'Meaning through another', '0:2': 'Place and emphasis', '1:0': 'A test by exclusion', '1:1': 'Apply both sets of signs', '2:0': 'Context determines the sense', '2:2': 'The spelling letters', '2:3': 'The same visible ب', '3:0': 'The condition for مد', '3:3': 'Read the vowels', '3:4': 'The condition for لين', '3:6': 'Keep the difference clear' },
  '02/l1': { '0:0': 'From words to sentences', '0:2': 'The essential relationship', '0:4': 'The sentence core', '1:0': 'Read the statement', '1:1': 'What is spoken about', '1:3': 'Identify زيد', '1:4': 'What is attributed', '1:6': 'Identify قائم', '1:8': 'Order can change', '2:0': 'Outside the minimum core', '2:2': 'Identify the عمدة', '2:3': 'Identify the added object', '2:5': 'The omitted part remains understood', '3:0': 'Naming needs a judgement', '4:0': 'Classify by هيئة', '4:2': 'Read the opening of the core', '5:0': 'With and without a ناسخ', '5:2': 'The core stays nominal', '5:4': 'The stronger position', '5:6': 'Fronting does not decide the type', '5:9': 'Supply the omitted verb' },
  '02/l2': { '0:0': 'A classification by meaning', '0:2': 'Truth and the type of statement', '1:0': 'Speech that performs an act', '1:2': 'What these examples share', '2:0': 'Focus on the act', '2:3': 'One marker changes the function', '2:4': 'Emphasis within information', '3:0': 'Wording and function', '3:3': 'Praise through a statement', '3:4': 'A report made more forceful', '4:0': 'A different classification', '4:2': 'Find the inner sentence', '4:4': 'Compare the two kinds of خبر' },
  '02/l3': { '0:0': 'Resembling a sentence', '0:2': 'The need for a صلة', '0:3': 'How the phrase fills the position', '0:4': 'Context selects the meaning', '1:0': 'A division by structure', '1:3': 'The two parts together', '2:0': 'The second structure', '2:2': 'A ظرف is a noun', '3:0': 'A loose usage of the name', '3:1': 'How the name was extended', '4:0': 'A second explanation' },
  '02/l4': { '0:0': 'Phrase and governing element', '0:1': 'Classify by the عامل', '1:0': 'A specific governor', '1:2': 'The attachment in this example', '1:4': 'The meaning requires this verb', '2:0': 'What لغو means here', '2:1': 'The absent pronoun', '3:0': 'When omission is required', '3:2': 'A fixed pattern', '4:0': 'The meaning of the general governor', '4:3': 'Supply the understood word', '4:5': 'What the full name records', '5:0': 'Several grammatical positions', '5:2': 'State the analysis precisely', '5:4': 'Go beyond saying متعلق', '5:6': 'Compare the two attachments', '5:7': 'Attached to the stated verb', '5:8': 'Describing his state', '5:9': 'Why the governor must be a verb', '5:11': 'Distinguish the two levels' },
  '02/l5': { '0:1': 'The complete benefit', '0:3': 'When stopping is fitting', '1:1': 'The listener has the full meaning', '1:3': 'Both essential parts are stated', '1:5': 'What is still missing?', '1:7': 'The answer completes the condition', '2:0': 'A narrower category', '2:1': 'Both requirements must hold', '3:0': 'Look for these three features', '4:2': 'Classify the complete sentence' },
};

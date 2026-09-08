// Curriculum is language-led. Planned units are authoring slots, never counted
// as playable lessons or presented as locked achievements.
export const SKILLS = [
  ['vocabulary', 'Vocabulary in context'], ['recognition', 'Recognition speed'],
  ['chunking', 'Sentence chunking'], ['reference', 'Pronoun and reference tracking'],
  ['syntax', 'Syntax recognition'], ['clause-links', 'Clause relationships'],
  ['constructions', 'Literary constructions'], ['morphology', 'Morphology in context'],
  ['inference', 'Inference from context'], ['paraphrase', 'Arabic paraphrasing'],
  ['comprehension', 'Connected comprehension'], ['poetry', 'Poetry processing'],
].map(([id, title]) => ({ id: `skill-${id}`, title, kind: 'skill' }));

export const ARCHETYPES = Object.fromEntries([
  ['discovery', 'Discovery', 'Predict, notice a pattern, then return to the original.'],
  ['vocabulary-immersion', 'Vocabulary immersion', 'Build a useful cluster through context, recall and word families.'],
  ['sentence-lab', 'Sentence lab', 'Separate clauses, connect references and reconstruct meaning.'],
  ['rapid-recognition', 'Rapid recognition', 'Make short decisions; accuracy comes before speed.'],
  ['context-inference', 'Context inference', 'Use clues before opening a gloss.'],
  ['narrative', 'Follow a story', 'Track people, events and causes across a connected narrative.'],
  ['reconstruction', 'Reconstruction', 'Restore Arabic from its meaning and relationships.'],
  ['arabic-only', 'بالعربية', 'Understand Arabic through simpler Arabic.'],
  ['contrast', 'Contrast', 'Distinguish similar forms and meanings.'],
  ['root-family', 'Word families', 'Recognise useful derivatives in context.'],
  ['collocation', 'Words together', 'Practise natural combinations and expressions.'],
  ['poetry-decoding', 'Inside a bayt', 'Recover prose order before interpreting imagery.'],
  ['paraphrase', 'Say it more simply', 'Move from literary Arabic to a simpler Arabic expression.'],
  ['review-mix', 'Review mix', 'Retrieve older language in different contexts.'],
  ['unseen-challenge', 'Unseen checkpoint', 'Try a reserved source passage with support initially closed.'],
  ['extensive', 'Read for the whole', 'Follow a longer passage with fewer interruptions.'],
  ['micro-drill', 'Focused repair', 'Recover weak vocabulary or structures with new examples.'],
  ['diagnostic', 'Find your starting point', 'Try progressively harder Arabic; a wrong answer is useful evidence.'],
].map(([id, title, purpose]) => [id, { id, title, purpose }]));

const stages = [
  ['Foundations of literary Arabic', 'Understand short sentences in meaningful groups.', [
    ['daily-actions', 'Actions and their setting', 'Locate actions, places and times.'],
    ['time-and-sequence', 'Time and sequence', 'Follow before, after, then and until.'],
    ['description-and-manner', 'Description and manner', 'Read a description without inventing an event.'],
    ['nominal-foundations', 'Nominal sentences', 'Connect a topic to what is said about it.'],
    ['objects-and-ownership', 'Objects and ownership', 'Resolve basic attached pronouns.'],
    ['foundation-fluency', 'Sentence fluency', 'Read short connected passages with less support.'],
  ]],
  ['Narrative Arabic', 'Follow connected prose without translating each word.', [
    ['people-and-reference', 'People and references', 'Keep participants and objects distinct.'],
    ['narrative-links', 'Events and reasons', 'Follow time, purpose and consequence.'],
    ['description-in-stories', 'Description inside a story', 'Read habitual actions and relative descriptions.'],
    ['dialogue', 'Dialogue and reported speech', 'Follow speakers and what each person knows.'],
    ['background-events', 'Background and interruption', 'Distinguish لما، إذ، بينما and simultaneous states.'],
    ['narrative-fluency', 'A connected narrative', 'Summarise an unfolding story in Arabic.'],
  ]],
  ['Connected classical prose', 'Keep longer dependencies together.', [
    ['long-dependencies', 'Holding the sentence together', 'Recover omitted subjects and longer references.'],
    ['embedded-clauses', 'Inside another clause', 'Follow nested statements and questions.'],
    ['relative-chains', 'Long relative clauses', 'Return to the noun after a long description.'],
    ['masdar-and-participle', 'Actions as nouns', 'Process verbal nouns and participles.'],
    ['fronting', 'Flexible word order', 'Recognise fronted objects and delayed subjects.'],
    ['prose-fluency', 'Connected prose challenge', 'Read with longer gaps between dependencies.'],
  ]],
  ['Literary expressions and style', 'Recognise common expressions as units of meaning.', [
    ['change-and-continuation', 'Change and continuation', 'Recognise sudden, continuing and completed events.'],
    ['sudden-events', 'Sudden events', 'Process ما إن…حتى، إذا به، فما كان منه إلا أن.'],
    ['onset', 'Beginning to act', 'Read أخذ، جعل and أخذ في in context.'],
    ['continuation', 'Continuing and barely doing', 'Distinguish ظل، طالما and لا يكاد.'],
    ['restriction', 'Restriction and likeness', 'Understand إنما، ليس إلا and كأنما.'],
    ['patterns-in-prose', 'Patterns across prose', 'Recognise familiar constructions in new genres.'],
  ]],
  ['Advanced prose', 'Understand compressed descriptions, arguments and implications.', [
    ['reason-and-judgement', 'Reason and judgement', 'Separate evidence, judgement and implied conclusions.'],
    ['rhetoric-and-inference', 'Description and inference', 'Track contrasts, rhetoric and unspoken meaning.'],
    ['dense-noun-phrases', 'Dense noun phrases', 'Unpack abstract nominal structures.'],
    ['classical-idiom', 'Classical idiom', 'Read fixed expressions and semantic range.'],
    ['argumentation', 'Following an argument', 'Connect claims, objections and consequences.'],
    ['humour-and-wisdom', 'Humour and wisdom', 'Infer what the writer leaves unstated.'],
  ]],
  ['Poetry', 'Process verse as Arabic and reconstruct its relationships.', [
    ['poetic-order', 'From verse to prose', 'Recover prose order and implied connections.'],
    ['imagery-and-compression', 'Images and compressed meaning', 'Connect literal structure to imagery.'],
    ['poetic-lexicon', 'Poetic vocabulary', 'Recognise recurring words without memorising every rarity.'],
    ['ellipsis-in-verse', 'What the verse leaves out', 'Restore omitted elements carefully.'],
    ['across-hemistichs', 'Across the two halves', 'Keep meaning continuous across a bayt.'],
    ['independent-poetry', 'Independent poetry', 'Read a sequence of verses with minimal support.'],
  ]],
];
export const LITERATURE_STAGES = stages.map(([title, description, units], i) => ({
  id: i + 1, title, description,
  units: units.map(([id, title, objective]) => ({ id, title, objective, stage: i + 1, plannedLessonCount: 6 })),
}));
export const LITERATURE_UNITS = LITERATURE_STAGES.flatMap(s => s.units);

// The order is authored per unit, not imposed by an archetype template.
// Existing IDs survive; revision 2 separates their previous exercise evidence.
export const LEGACY_PLANS = {
  'early-morning': [1, 'daily-actions', 'discovery', ['notice', 'word', 'phrase', 'build', 'decode', 'clean', 'transfer-build', 'transfer-meaning']],
  'first-prepare-then-go': [1, 'daily-actions', 'narrative', ['notice', 'build', 'word', 'decode', 'meaning', 'clean', 'transfer-1', 'transfer-2']],
  'near-and-far': [1, 'daily-actions', 'collocation', ['word', 'notice', 'build', 'transfer-1', 'decode', 'clean', 'transfer-2']],
  'at-the-appointed-time': [1, 'time-and-sequence', 'context-inference', ['decode', 'word', 'notice', 'build', 'clean', 'transfer-1', 'transfer-2']],
  'a-little-later': [1, 'time-and-sequence', 'rapid-recognition', ['word', 'notice', 'meaning', 'transfer-meaning', 'build', 'decode', 'clean', 'transfer-build']],
  'before-sunset': [1, 'time-and-sequence', 'reconstruction', ['build', 'notice', 'word', 'transfer-1', 'decode', 'clean', 'transfer-2']],
  'from-after-until': [1, 'time-and-sequence', 'contrast', ['notice', 'word', 'build', 'meaning', 'decode', 'clean', 'transfer-1', 'transfer-2']],
  'stay-for-a-while': [1, 'description-and-manner', 'sentence-lab', ['build', 'word', 'notice', 'decode', 'clean', 'transfer-build', 'transfer-meaning']],
  'how-an-action-is-done': [1, 'description-and-manner', 'collocation', ['word', 'build', 'notice', 'decode', 'transfer-1', 'clean', 'transfer-2']],
  'some-days': [1, 'description-and-manner', 'arabic-only', ['notice', 'build', 'decode', 'clean', 'transfer-1', 'transfer-2']],
  'follow-the-pronoun': [2, 'people-and-reference', 'sentence-lab', ['notice', 'build', 'word', 'decode', 'meaning', 'clean', 'transfer-build', 'transfer-meaning']],
  'keep-track-of-the-ticket': [2, 'people-and-reference', 'narrative', ['notice', 'build', 'decode', 'word', 'clean', 'transfer-1', 'transfer-2']],
  'someone-in-a-state': [2, 'people-and-reference', 'reconstruction', ['build', 'notice', 'decode', 'word', 'clean', 'transfer-build', 'transfer-meaning']],
  'when-the-story-turns': [2, 'narrative-links', 'discovery', ['notice', 'word', 'build', 'decode', 'clean', 'transfer-build', 'transfer-meaning']],
  'going-for-a-reason': [2, 'narrative-links', 'context-inference', ['decode', 'notice', 'build', 'word', 'meaning', 'clean', 'transfer-1', 'transfer-2']],
  'the-reason-for-returning': [2, 'narrative-links', 'paraphrase', ['notice', 'build', 'decode', 'meaning', 'clean', 'transfer-1', 'transfer-2']],
  'the-one-who-grows-food': [2, 'description-in-stories', 'sentence-lab', ['notice', 'build', 'word', 'decode', 'clean', 'transfer-1', 'transfer-2']],
  'younger-than-me': [2, 'description-in-stories', 'contrast', ['notice', 'word', 'build', 'decode', 'transfer-1', 'clean', 'transfer-2']],
  'cheap-but-clean': [2, 'description-in-stories', 'arabic-only', ['notice', 'build', 'decode', 'clean', 'transfer-1', 'transfer-2']],
  'every-night-she-would': [2, 'description-in-stories', 'narrative', ['notice', 'word', 'meaning', 'build', 'decode', 'clean', 'transfer-1', 'transfer-2']],
  'an-unspoken-subject': [3, 'long-dependencies', 'sentence-lab', ['notice', 'build', 'word', 'decode', 'clean', 'transfer-1', 'transfer-2']],
  'two-people-one-reference': [3, 'long-dependencies', 'reconstruction', ['build', 'notice', 'decode', 'word', 'clean', 'transfer-1', 'transfer-2']],
  'while-another-event-happens': [3, 'long-dependencies', 'narrative', ['notice', 'word', 'build', 'decode', 'meaning', 'clean', 'transfer-1', 'transfer-2']],
  'until-the-moment': [4, 'change-and-continuation', 'discovery', ['notice', 'word', 'build', 'decode', 'clean', 'transfer-build', 'transfer-meaning']],
  'not-long-before': [4, 'change-and-continuation', 'contrast', ['notice', 'word', 'build', 'decode', 'clean', 'transfer-1', 'transfer-2']],
  'the-action-continues': [4, 'change-and-continuation', 'context-inference', ['decode', 'word', 'notice', 'build', 'clean', 'transfer-1', 'transfer-2']],
  'poetry-back-to-prose': [6, 'poetic-order', 'poetry-decoding', ['notice', 'build', 'word', 'decode', 'meaning', 'clean', 'transfer-build', 'transfer-meaning']],
  'darkness-takes-flight': [6, 'imagery-and-compression', 'poetry-decoding', ['notice', 'word', 'build', 'decode', 'meaning', 'clean', 'transfer-build', 'transfer-meaning']],
};

export const TYPE_SKILLS = {
  contextual_vocabulary: ['vocabulary', 'inference'], choose_meaning: ['vocabulary'],
  chunk_sentence: ['chunking'], reorder_chunks: ['chunking', 'syntax'],
  pronoun_reference: ['reference'], clause_relationship: ['clause-links'],
  sentence_reconstruction: ['syntax', 'paraphrase'], arabic_paraphrase: ['paraphrase'],
  grammatical_function: ['syntax'], contextual_fill_blank: ['vocabulary'],
  interpretation_choice: ['inference'], poetry_reorder: ['poetry', 'syntax'],
  comprehension: ['comprehension'], transfer_example: ['comprehension'],
  synonym_contrast: ['vocabulary'], collocation_choice: ['vocabulary'],
  root_family: ['morphology'], rapid_recognition: ['recognition'],
  match_pairs: ['vocabulary'], typed_recall: ['vocabulary'], clause_boundary: ['chunking', 'clause-links'],
};

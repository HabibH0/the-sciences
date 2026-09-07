"""Compile authored lesson choreography without rewriting the teaching Markdown."""
import re


def section_blocks(markdown):
    return [s.strip() for s in re.split(r'(?=^#{2,3} )', markdown, flags=re.MULTILINE) if s.strip()]


def compile_learning_steps(lesson, flow, concepts):
    blocks = section_blocks(lesson['markdown'])
    visited = []
    steps = []
    for index, step in enumerate(flow):
        ids = step.get('concepts', [])
        if any(cid not in lesson['metadata']['concepts'] for cid in ids):
            raise ValueError(f"Lesson flow references an unrelated concept: {lesson['metadata']['id']}")
        if step['kind'] == 'teach':
            section = step['section']
            if not isinstance(section, int) or not 0 <= section < len(blocks):
                raise ValueError(f"Invalid lesson section: {lesson['metadata']['id']}")
            visited.append(section)
            markdown = blocks[section]
            heading = markdown.splitlines()[0].lstrip('# ').strip()
            steps.append({'id': f'section_{section}', 'kind': 'teach', 'title': heading,
                          'markdown': markdown, 'concepts': ids,
                          'presentation': step.get('presentation', 'idea')})
        elif step['kind'] == 'practice':
            if not ids or not 1 <= step.get('limit', 1) <= 8:
                raise ValueError(f"Invalid practice step: {lesson['metadata']['id']}")
            steps.append({'id': f'practice_{index}', **step})
        else:
            raise ValueError(f"Unknown learning step kind: {step['kind']}")
    if visited != list(range(len(blocks))):
        raise ValueError(f"Lesson flow must preserve every source section once, in order: {lesson['metadata']['id']}")
    return steps


def presentation_item(item, example, template, concepts):
    """Repair prompt/input contracts from explicit source fields; keep stable base IDs."""
    item['prompt'] = template['prompt']
    if isinstance(item['answer'], (str, bool, int)) and item['options'] and item['answer'] not in item['options']:
        item['options'].append(item['answer'])
    item['response_options'] = template.get('response_options', {})
    family = template['id']
    # Ask only for the response this template actually collects and grades.
    prompts = {
        'classify_inference_family': 'Which kind of inference is used here?',
        'classify_value': 'Is the claim in this proposition true?',
        'identify_syllogism_components': 'Identify the minor term (S), major term (P), and middle term (M).',
        'classify_fallacy_level': 'Is this fallacy formal or informal?',
        'diagnose_part_whole': 'Which part–whole fallacy occurs in this argument?',
        'diagnose_relevance_rhetoric': 'Which relevance or rhetorical fallacy occurs here?',
        'diagnose_faulty_support': 'Which fallacy makes this support inadequate?',
        'diagnose_causal_error': 'Which causal fallacy occurs in this argument?',
        'diagnose_two_wrongs': 'Which fallacy is used to justify this action?',
        'distinguish_near_neighbours': 'Which fallacy best describes this argument?',
        'evaluate_analogy': 'Does the comparison support the conclusion? Name any fallacy.',
    }
    item['prompt'] = prompts.get(family, item['prompt'])
    if family == 'recognise_proposition':
        item['prompt'] = 'What is this expression doing?'
        item['answer'] = example.get('expression_kind', 'Making a claim')
        item['options'] = ['Making a claim', 'Asking a question', 'Giving an instruction', 'Naming something']
        item['interaction'] = 'single_choice'
        item['feedback']['hints'] = [
            'Ask whether the expression asserts something, asks something, directs an action, or simply names something.',
            'A claim can be true or false. It still expresses a judgement even if you disagree with it.'
        ]
        item['feedback']['distractors'] = {}
        item['feedback']['correct'] = ('This makes a claim about its subject. It is a proposition because the claim can be true or false; you are not being asked whether you agree with it.')
    if family == 'choose_relation_diagram':
        item['options'] = list(template['options'])
        item['interaction'] = 'diagram_choice'
    if family == 'identify_component':
        component = ('subject','predicate','quantifier','copula')[(int(item['id'].rsplit('v',1)[1])-1)%4]
        item['prompt'] = template['prompt'].replace('{component}', component)
        item['answer'] = example['proposition'][component]
        item['concepts'] = [component]
        item['feedback']['correct'] = concept_definition(concepts[component])
    if family == 'identify_signification_role':
        role = ('signifier','signified')[(int(item['id'].rsplit('v',1)[1])-1)%2]
        item['prompt'] = template['prompt'].replace('{role}', role)
        item['answer'] = example['signification'][role]
        item['concepts'] = [role]
    if family == 'construct_proposition':
        p = example['proposition']
        item['stimulus'] = f"Form: {p['form']}\nSubject: {p['subject'].replace('_',' ')}\nPredicate: {p['predicate'].replace('_',' ')}"
        item['answer'] = example['render']['en']
        item['word_bank'] = list(dict.fromkeys(['All','No','Some',p['subject'].replace('_',' '),'are','are not',p['predicate'].replace('_',' ')]))
        item['interaction'] = 'sentence_builder'
    if family == 'translate_categorical':
        item['stimulus'] = example['original']
    if family == 'nominalise_expression':
        item['prompt'] = 'Which kind of expression was converted into a noun phrase?'
        normalized = example['normalized']
        item['stimulus'] = (f"Original: {example['original']}\n\n"
                            f"Noun phrase in the translation: {normalized['predicate'].replace('_', ' ')}")
    if family == 'perform_conversion':
        item['prompt'] = 'Does the proposed conversion follow from the original proposition?'
        item['stimulus'] = (f"Original: {example['original']['text']}\n\n"
                            f"Proposed conversion: {example['result']['text']}")
        if example['original']['form'] == 'A':
            item['stimulus'] += '\n\nAssume the original proposition is true and its subject class has at least one member.'
        item['answer'] = example['valid']
        item['options'] = [True, False]
        item['interaction'] = 'single_choice'
    if family == 'interpret_venn_representation':
        item['stimulus'] = 'Read the markings in the diagram. Which categorical form do they represent?'
        item['diagram'] = example['venn']
    if family == 'diagnose_distribution':
        item['prompt'] = 'Determine whether each term is distributed.'
        item['interaction'] = 'structured_form'
    if family == 'compare_definition_faults':
        item['prompt'] = 'Which fault, if any, does this definition contain?'
    if family in ('classify_signification', 'diagnose_signification'):
        if not example.get('context') or not example.get('signification', {}).get('expression'):
            raise ValueError(f"Signification exercise needs an expression and intended context: {example['id']}")
        expression = example['signification']['expression']
        if expression == 'quran':
            expression = 'Quran'
        item['prompt'] = f'How is the word “{expression}” used in the stated context?'
    if family == 'diagnose_relation':
        item['prompt'] = 'Classify the relationship between these universals.'
    # Prefer the exact example's authored explanation to broad template-level definitions.
    rationale = example.get('rationale') or example.get('definition', {}).get('rationale')
    if rationale:
        item['feedback']['correct'] = rationale
    if isinstance(item['feedback']['correct'], dict):
        item['feedback']['correct'] = item['feedback']['correct']['en']
    return item


def concept_definition(concept):
    definition = concept.get('definition')
    if isinstance(definition, dict):
        return definition['en']
    return definition or ' '.join(concept.get('knowledge', []))

from __future__ import annotations

from collections import Counter, defaultdict
from copy import deepcopy
from pathlib import Path
import json
import re
import sys

import yaml
from learning_presentation import compile_learning_steps, presentation_item


ROOT = Path(__file__).resolve().parents[1]
DIST = ROOT / "dist"
AEIO = {
    "A": {"quantifier": "all", "copula": "are", "quantity": "universal", "quality": "affirmative", "distribution": {"subject": True, "predicate": False}, "venn": {"subject_position": "left", "predicate_position": "right", "shaded_regions": ["subject_only"], "x_regions": []}},
    "E": {"quantifier": "no", "copula": "are", "quantity": "universal", "quality": "negative", "distribution": {"subject": True, "predicate": True}, "venn": {"subject_position": "left", "predicate_position": "right", "shaded_regions": ["overlap"], "x_regions": []}},
    "I": {"quantifier": "some", "copula": "are", "quantity": "particular", "quality": "affirmative", "distribution": {"subject": False, "predicate": False}, "venn": {"subject_position": "left", "predicate_position": "right", "shaded_regions": [], "x_regions": ["overlap"]}},
    "O": {"quantifier": "some", "copula": "are_not", "quantity": "particular", "quality": "negative", "distribution": {"subject": False, "predicate": True}, "venn": {"subject_position": "left", "predicate_position": "right", "shaded_regions": [], "x_regions": ["subject_only"]}},
}


def load_yaml(path: Path):
    return yaml.safe_load(path.read_text(encoding="utf-8"))


def parse_lesson(path: Path):
    text = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\s*\r?\n(.*?)\r?\n---\s*\r?\n", text, re.DOTALL)
    if not match:
        raise ValueError(f"Lesson has no YAML frontmatter: {path}")
    return {"metadata": yaml.safe_load(match.group(1)), "markdown": text[match.end():].strip()}


def dot_get(data, path):
    if path == "type":
        return data.get("type")
    current = data
    for part in path.split("."):
        if not isinstance(current, dict) or part not in current:
            return None
        current = current[part]
    return current


def render_categorical(form, subject, predicate):
    if form == "A":
        return f"All {subject} are {predicate}."
    if form == "E":
        return f"No {subject} are {predicate}."
    if form == "I":
        return f"Some {subject} are {predicate}."
    return f"Some {subject} are not {predicate}."


def synthesize_categorical(vocabulary, rules):
    terms = vocabulary["vocabulary_pool"]["terms"]
    labels = [(item["id"], item["label"]) for item in terms]
    limit = min(rules["categorical_matrix"]["pair_limit"], len(labels) // 2)
    generated = []
    for index in range(limit):
        subject_id, subject_label = labels[index * 2]
        predicate_id, predicate_label = labels[index * 2 + 1]
        for form in rules["categorical_matrix"]["forms"]:
            props = AEIO[form]
            generated.append({
                "id": f"generated_categorical_{index + 1}_{form.lower()}",
                "type": "categorical_proposition",
                "generated": True,
                "assessment_domain": "logical_structure",
                "truth_evaluable": False,
                "render": {"en": render_categorical(form, subject_label, predicate_label)},
                "proposition": {
                    "subject": subject_id,
                    "predicate": predicate_id,
                    "quantifier": props["quantifier"],
                    "copula": props["copula"],
                    "quantity": props["quantity"],
                    "quality": props["quality"],
                    "form": form,
                    "distribution": deepcopy(props["distribution"]),
                },
                "venn": deepcopy(props["venn"]),
            })
    return generated


def synthesize_obversions(categorical_examples):
    mappings = {"A": "E", "E": "A", "I": "O", "O": "I"}
    generated = []
    for example in categorical_examples[:16]:
        original = example["proposition"]
        form = original["form"]
        output = mappings[form]
        subject = original["subject"]
        predicate = original["predicate"]
        complement = f"non_{predicate}"
        result_text = render_categorical(output, subject, complement)
        generated.append({
            "id": f"generated_obversion_{example['id']}",
            "type": "direct_transformation",
            "generated": True,
            "operation": "obversion",
            "original": {"text": example["render"]["en"], "form": form, "subject": subject, "predicate": predicate},
            "result": {"text": result_text, "form": output, "subject": subject, "predicate": complement},
            "valid": True,
        })
    return generated


def synthesize_syllogisms(base_examples, rules):
    generated = []
    for base in [item for item in base_examples if item.get("type") == "categorical_syllogism"]:
        for index, triple in enumerate(rules["syllogism_relabeling"]["triples"], 1):
            item = deepcopy(base)
            item["id"] = f"generated_syllogism_{base['id']}_{index}"
            item["generated"] = True
            item["terms"] = deepcopy(triple)
            for key in ("major_premise", "minor_premise", "conclusion"):
                proposition = item[key]
                left, right = proposition["terms"]
                proposition["text"] = render_categorical(proposition["form"], triple[left], triple[right])
            generated.append(item)
    return generated


def synthesize_hypotheticals(rules):
    patterns = {
        "modus_ponens": (lambda p, q: (p, q, True)),
        "modus_tollens": (lambda p, q: (f"not_{q}", f"not_{p}", True)),
        "affirming_consequent": (lambda p, q: (q, p, False)),
        "denying_antecedent": (lambda p, q: (f"not_{p}", f"not_{q}", False)),
    }
    generated = []
    for index, scenario in enumerate(rules["hypothetical_scenarios"], 1):
        p, q = scenario["antecedent"], scenario["consequent"]
        for pattern, build in patterns.items():
            second, conclusion, valid = build(p, q)
            generated.append({"id": f"generated_hypothetical_{index}_{pattern}", "type": "hypothetical_argument", "generated": True, "pattern": pattern, "antecedent": p, "consequent": q, "second_premise": second, "conclusion": conclusion, "valid": valid})
    return generated


def synthesize_disjunctions(base_examples):
    generated = []
    for base in [item for item in base_examples if item.get("type") == "disjunctive_argument"]:
        item = deepcopy(base)
        item["id"] = f"generated_disjunction_complement_{base['id']}"
        item["generated"] = True
        item["move"] = "denying" if base["move"] == "affirming" else "affirming"
        validity = {"strong": {"affirming": True, "denying": True}, "inclusive": {"affirming": False, "denying": True}, "exclusive_nonexhaustive": {"affirming": True, "denying": False}}
        item["valid"] = validity[item["relationship"]][item["move"]]
        generated.append(item)
    return generated


def synthesize_reasoning_cases(rules):
    generated = []
    for index, case in enumerate(rules.get("induction_scenarios", []), 1):
        generated.append({"id": f"generated_induction_{index}", "type": "induction_case", "generated": True, **case})
    for index, case in enumerate(rules.get("analogy_scenarios", []), 1):
        generated.append({"id": f"generated_analogy_{index}", "type": "analogy_case", "generated": True, **case})
    return generated


def stimulus_for(example):
    if isinstance(example.get("render"), dict) and example["render"].get("en"):
        text = example["render"]["en"]
        if example.get("context"):
            text += f"\n\nContext: {example['context']}"
        return text
    if isinstance(example.get("original"), str):
        return example["original"]
    if isinstance(example.get("original"), dict) and example["original"].get("text"):
        return example["original"]["text"]
    if example.get("statements"):
        return " / ".join(example["statements"])
    return json.dumps({key: value for key, value in example.items() if key not in {"id", "generated"}}, ensure_ascii=False, separators=(",", ":"))


def answer_for(example, profile):
    template_id = profile["id"]
    if template_id == "classify_inference_family":
        return {"direct_transformation": "direct_inference", "categorical_syllogism": "deduction", "hypothetical_argument": "deduction", "pure_hypothetical_argument": "deduction", "disjunctive_argument": "deduction", "induction_case": "induction", "analogy_case": "analogy"}[example["type"]]
    if template_id == "repair_relevance_rhetoric":
        return {"must_address_original_claim": True, "must_use_neutral_language": True, "must_supply_relevant_support": True}
    if "answer_constant" in profile:
        return profile["answer_constant"]
    if "answer_paths" in profile:
        return {path.split(".")[-1]: dot_get(example, path) for path in profile["answer_paths"]}
    return dot_get(example, profile["answer_path"])


def compatible(example, profile):
    if example.get("type") not in profile["example_types"]:
        return False
    if profile.get("operation_filter") and example.get("operation") not in profile["operation_filter"]:
        return False
    if profile.get("fallacy_filter") and example.get("fallacy") not in profile["fallacy_filter"]:
        return False
    return True


def concept_explanation(concept_ids, concepts):
    parts = []
    for concept_id in concept_ids[:2]:
        raw_definition = concepts[concept_id].get("definition", {})
        definition = raw_definition.get("en") if isinstance(raw_definition, dict) else raw_definition
        if definition:
            parts.append(definition)
    return " ".join(parts) or "Apply the stated rule and verify every structural condition."


def concept_title(concept):
    title = concept.get("title", {})
    return title.get("en", concept["id"]) if isinstance(title, dict) else str(title)


def concept_definition(concept):
    definition = concept.get("definition")
    if isinstance(definition, dict):
        definition = definition.get("en")
    if definition:
        return str(definition)
    knowledge = concept.get("knowledge", [])
    if knowledge:
        return str(knowledge[0])
    return f"The course concept named {concept_title(concept)}."


def build_concept_review_items(concepts, misconception_lookup, lessons):
    clues = load_yaml(ROOT / 'pedagogy' / 'recognition_clues.yaml')['clues']
    by_type = defaultdict(list)
    for concept in concepts.values():
        by_type[concept["type"]].append(concept)
    items = []
    prompts = {
        "recognise": ["Which concept matches this definition?", "Name the concept described here."],
        "recall": ["State the core meaning of this concept.", "Give the course definition or rule."],
        "prerequisite": ["Which concepts should be secure before this one?", "Identify this concept's prerequisite knowledge."],
    }
    for concept_id, concept in concepts.items():
        title = concept_title(concept)
        definition = concept_definition(concept)
        peer_ids = list(dict.fromkeys(cid for lesson in lessons.values() if concept_id in lesson['metadata']['concepts'] for cid in lesson['metadata']['concepts'] if cid != concept_id))[:3]
        peers = [concept_title(concepts[cid]) for cid in peer_ids]
        tasks = [
            ("recognise", definition, title, [title, *peers], 2, "recognition"),
            ("recall", title, definition, [], 3, "recognition"),
            ("prerequisite", title, concept.get("prerequisites", []), [], 3, "identification"),
        ]
        for task, stimulus, answer, options, stage, family in tasks:
            clue = clues.get(concept_id, {}) if task == 'recognise' else {}
            stimulus = clue.get('stimulus', stimulus)
            answer = clue.get('answer', answer)
            options = clue.get('options', options)
            for variant, prompt in enumerate(prompts[task], 1):
                item_id = f"concept_review::{concept_id}::{task}::v{variant}"
                items.append({
                    "id": item_id,
                    "unit": "cross_course_review",
                    "template": "concept_review",
                    "family": family,
                    "concepts": [concept_id, *peer_ids] if task == 'recognise' else [concept_id],
                    "difficulty": stage,
                    "stage": stage,
                    "assessment_domain": "knowledge" if task != "prerequisite" else "prerequisite_graph",
                    "interaction": "single_choice" if options else "free_response_normalized",
                    "prompt": clue.get('prompt', prompt),
                    "stimulus": stimulus,
                    "answer": answer,
                    "options": options,
                    "feedback": {"correct": clue.get('feedback', definition), "hints": ["Recall the defining feature of each concept.", "Compare that feature with the description, one alternative at a time."], "distractors": {}},
                    "scoring": {"max_points": 1, "hint_penalty": 0.2, "floor_after_hint": 0.4},
                    "source_example": None,
                    "generated_example": True,
                })
    return items


def best_misconception(template, distractor, unit_tags):
    haystack = "_".join([template["id"], *template.get("concepts", []), str(distractor)]).lower()
    scored = []
    for tag in unit_tags:
        tokens = [token for token in tag.lower().split("_") if len(token) > 3]
        scored.append((sum(token in haystack for token in tokens), tag))
    return max(scored)[1] if scored else None


def main():
    concepts = {}
    for path in sorted((ROOT / "concepts").glob("*.yaml")):
        concept = load_yaml(path)["concept"]
        concepts[concept["id"]] = concept

    course = load_yaml(ROOT / "course.yaml")
    flow_path = ROOT / 'pedagogy' / 'lesson_flows.yaml'
    lesson_flows = load_yaml(flow_path)['lessons'] if flow_path.exists() else {}
    lesson_visuals = load_yaml(ROOT / 'pedagogy' / 'lesson_visuals.yaml')['lessons']
    units = []
    lessons = {}
    for reference in course["units"]:
        path = ROOT / reference["path"]
        unit_data = load_yaml(path)
        for topic in unit_data.get("topics", []):
            lesson_path = path.parent / topic["lesson"]
            lesson = parse_lesson(lesson_path)
            if lesson['metadata']['id'] in lesson_flows:
                lesson['learning_steps'] = compile_learning_steps(lesson, lesson_flows[lesson['metadata']['id']], concepts)
                visuals = lesson_visuals.get(lesson['metadata']['id'], {})
                for step in lesson['learning_steps']:
                    if step['id'] in visuals:
                        if step['kind'] != 'teach':
                            raise ValueError('Visuals must belong to teaching steps')
                        step['visual'] = visuals[step['id']]
                        visual = step['visual']
                        presets = {'definition': ['narrow', 'sound', 'broad', 'circular'], 'relations': ['equal', 'disjoint', 'subset', 'overlap'], 'proposition': [], 'categorical': ['A','E','I','O'], 'square': ['contrary','subcontrary','contradictory','subaltern'], 'syllogism': ['1','2','3','4']}
                        if visual.get('kind') not in presets or not isinstance(visual.get('title'), str) or not isinstance(visual.get('caption'), str):
                            raise ValueError('Invalid lesson visual')
                        if 'initial' in visual and visual['initial'] not in presets[visual['kind']]:
                            raise ValueError('Invalid visual initial state')
                if set(visuals) - {step['id'] for step in lesson['learning_steps']}:
                    raise ValueError('Visual references a missing teaching section')
            lessons[lesson["metadata"]["id"]] = lesson
            topic["lesson_id"] = lesson["metadata"]["id"]
        units.append(unit_data)

    misconceptions_by_unit = {}
    misconception_lookup = {}
    for path in sorted((ROOT / "misconceptions").glob("*.yaml")):
        data = load_yaml(path)
        misconceptions_by_unit[data["unit"]] = data["misconceptions"]
        misconception_lookup.update({item["id"]: item for item in data["misconceptions"]})

    vocabulary = {load_yaml(path)["vocabulary_pool"]["id"]: load_yaml(path)["vocabulary_pool"] for path in sorted((ROOT / "vocabulary").glob("*.yaml"))}
    family_data = load_yaml(ROOT / "pedagogy" / "exercise_families.yaml")
    profile_data = load_yaml(ROOT / "pedagogy" / "template_profiles.yaml")
    profiles = profile_data["profiles"]
    distractor_sets = profile_data["distractor_sets"]
    rules = load_yaml(ROOT / "generators" / "generation_rules.yaml")

    templates = {}
    template_units = {}
    authored_examples = []
    for path in sorted((ROOT / "exercises").glob("*.yaml")):
        data = load_yaml(path)
        unit_id = data["exercise_set"]["unit"]
        for template in data.get("templates", []):
            templates[template["id"]] = template
            template_units[template["id"]] = unit_id
        authored_examples.extend(data.get("examples", []))

    generated_categorical = synthesize_categorical({"vocabulary_pool": vocabulary["propositions"]}, rules)
    synthetic_examples = []
    synthetic_examples.extend(generated_categorical)
    synthetic_examples.extend(synthesize_obversions(generated_categorical))
    synthetic_examples.extend(synthesize_syllogisms(authored_examples, rules))
    synthetic_examples.extend(synthesize_hypotheticals(rules))
    synthetic_examples.extend(synthesize_disjunctions(authored_examples))
    synthetic_examples.extend(synthesize_reasoning_cases(rules))
    all_examples = authored_examples + synthetic_examples

    practice_items = []
    item_index = {}
    concept_item_counts = Counter()
    concept_application_counts = Counter()
    prefixes = rules["surface_variants"]["prompt_prefixes"][:rules["surface_variants"]["per_item"]]
    for template_id, template in templates.items():
        profile = {"id": template_id, **profiles[template_id]}
        family = family_data["families"][template["family"]]
        unit_id = template_units[template_id]
        unit_tags = [item["id"] for item in misconceptions_by_unit.get(unit_id, [])]
        for example in all_examples:
            if not compatible(example, profile):
                continue
            answer = answer_for(example, profile)
            template_prefixes = prefixes + [prefixes[-1]] if template_id == 'identify_component' else prefixes
            for variant, prefix in enumerate(template_prefixes, 1):
                item_id = f"{template_id}::{example['id']}::v{variant}"
                options = deepcopy(distractor_sets.get(profile.get("distractors"), []))
                distractor_feedback = {}
                if options:
                    for option in options:
                        if option != answer:
                            tag = best_misconception(template, option, unit_tags)
                            distractor_feedback[str(option)] = {"misconception": tag, "message": misconception_lookup.get(tag, {}).get("remediation", "Recheck the deciding property.")}
                hints = family_data["hint_ladders"][family["hint_ladder"]]
                item = {
                    "id": item_id,
                    "unit": unit_id,
                    "template": template_id,
                    "family": template["family"],
                    "concepts": template["concepts"],
                    "difficulty": template["difficulty"],
                    "stage": profile.get("stage", family["default_stage"]),
                    "assessment_domain": profile["domain"],
                    "interaction": family["interaction"],
                    "prompt": f"{prefix} {template['prompt']}",
                    "stimulus": stimulus_for(example),
                    "answer": answer,
                    "options": options,
                    "feedback": {"correct": concept_explanation(template["concepts"], concepts), "hints": hints, "distractors": distractor_feedback},
                    "scoring": family_data["scoring"].get(family["interaction"], family_data["scoring"]["default"]),
                    "source_example": example["id"],
                    "generated_example": bool(example.get("generated")),
                }
                item = presentation_item(item, example, template, concepts)
                practice_items.append(item)
                item_index[item_id] = item
                for concept_id in template["concepts"]:
                    concept_item_counts[concept_id] += 1
                    if item["stage"] >= 4:
                        concept_application_counts[concept_id] += 1

    for check in load_yaml(ROOT / 'pedagogy' / 'definition_checks.yaml')['checks']:
        base = item_index[f"evaluate_definition::{check['example']}::v1"]
        item = deepcopy(base)
        item.update(id=f"definition_check::{check['example']}::v1", template='definition_check',
                    concepts=[check['concept']], prompt=check['prompt'], answer=check['answer'],
                    options=[True, False], interaction='single_choice', difficulty=2, stage=2)
        item['feedback']['distractors'] = {}
        practice_items.append(item)
        item_index[item['id']] = item
        concept_item_counts[check['concept']] += 1

    for item in build_concept_review_items(concepts, misconception_lookup, lessons):
        practice_items.append(item)
        item_index[item["id"]] = item
        concept_item_counts[item["concepts"][0]] += 1

    assessment_data = load_yaml(ROOT / "assessments" / "assessments.yaml")
    assessment_defaults = assessment_data["defaults"]
    compiled_assessments = []
    for assessment in assessment_data["assessments"]:
        compiled = {**assessment_defaults, **assessment}
        resolved = []
        for reference in assessment["items"]:
            item_id = f"{reference['template']}::{reference['example']}::v1"
            if item_id not in item_index:
                raise ValueError(f"Assessment {assessment['id']} references unavailable item {item_id}")
            resolved.append({"item_id": item_id, "weight": reference.get("weight", 1)})
        compiled["items"] = resolved
        compiled_assessments.append(compiled)

    minimum = rules["quality_thresholds"]["minimum_items_per_concept"]
    application_minimum = rules["quality_thresholds"]["minimum_application_items_per_core_concept"]
    uncovered = sorted(concept_id for concept_id in concepts if concept_item_counts[concept_id] < minimum)
    underpowered = sorted(concept_id for concept_id in rules["quality_thresholds"]["core_concepts"] if concept_application_counts[concept_id] < application_minimum)
    incomplete_feedback = [item["id"] for item in practice_items if item["answer"] is None or len(item["feedback"]["hints"]) < 2 or not item["feedback"]["correct"]]
    if uncovered or underpowered or incomplete_feedback:
        raise ValueError(f"Production quality thresholds failed: uncovered={uncovered}, underpowered={underpowered}, incomplete_feedback={len(incomplete_feedback)}")

    runtime = {
        "schema_version": 1,
        "build": {"generator_seed": rules["seed"], "content_version": course.get("content_version", "1.0.0")},
        "course": course,
        "units": units,
        "lessons": lessons,
        "concepts": concepts,
        "misconceptions": misconception_lookup,
        "vocabulary": vocabulary,
        "pedagogy": {"stages": family_data["stages"], "families": family_data["families"], "accessibility": family_data["accessibility"]},
        "practice_items": practice_items,
        "assessments": compiled_assessments,
    }
    report = {
        "status": "passed",
        "counts": {
            "units": len(units), "lessons": len(lessons), "concepts": len(concepts), "templates": len(templates),
            "authored_examples": len(authored_examples), "synthetic_examples": len(synthetic_examples),
            "practice_items": len(practice_items), "assessments": len(compiled_assessments),
            "fixed_assessment_items": sum(len(item["items"]) for item in compiled_assessments),
        },
        "coverage": {"minimum_items_per_concept": minimum, "core_application_minimum": application_minimum, "lowest_concept_item_count": min(concept_item_counts.values()), "lowest_core_application_count": min(concept_application_counts[item] for item in rules["quality_thresholds"]["core_concepts"]), "concept_item_counts": dict(sorted(concept_item_counts.items())), "core_application_counts": {item: concept_application_counts[item] for item in rules["quality_thresholds"]["core_concepts"]}},
        "quality_checks": {"all_concepts_covered": True, "core_concepts_powered": True, "answers_complete": True, "staged_hints_complete": True, "assessment_references_resolved": True},
    }

    DIST.mkdir(exist_ok=True)
    (DIST / "course.runtime.json").write_text(json.dumps(runtime, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    (DIST / "quality-report.json").write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(json.dumps(report["counts"], ensure_ascii=False))


if __name__ == "__main__":
    try:
        main()
    except Exception as exc:
        print(f"Compilation failed: {exc}", file=sys.stderr)
        raise

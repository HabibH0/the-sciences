from pathlib import Path
from collections import Counter
import re
import sys
import yaml

ROOT = Path(__file__).resolve().parents[1]
CONCEPTS_DIR = ROOT / "concepts"
UNITS_DIR = ROOT / "units"
EXERCISES_DIR = ROOT / "exercises"
PEDAGOGY_DIR = ROOT / "pedagogy"
ASSESSMENTS_DIR = ROOT / "assessments"

EXPECTED_AEIO = {
    "A": {"quantity": "universal", "quality": "affirmative", "subject": True, "predicate": False},
    "E": {"quantity": "universal", "quality": "negative", "subject": True, "predicate": True},
    "I": {"quantity": "particular", "quality": "affirmative", "subject": False, "predicate": False},
    "O": {"quantity": "particular", "quality": "negative", "subject": False, "predicate": True},
}

EXPECTED_VENN = {
    "A": {"shaded_regions": ["subject_only"], "x_regions": []},
    "E": {"shaded_regions": ["overlap"], "x_regions": []},
    "I": {"shaded_regions": [], "x_regions": ["overlap"]},
    "O": {"shaded_regions": [], "x_regions": ["subject_only"]},
}

VALID_MODES = {"necessary", "contingent", "impossible"}
VALID_EVIDENCE_BASES = {"empirical", "rational", "moral_or_religious"}

OBVERSION_MAP = {"A": "E", "E": "A", "I": "O", "O": "I"}
SQUARE_RELATIONS = {
    frozenset(("A", "O")): ("contradiction", "exactly_one_true"),
    frozenset(("E", "I")): ("contradiction", "exactly_one_true"),
    frozenset(("A", "E")): ("contrariety", "not_both_true"),
    frozenset(("I", "O")): ("subcontrariety", "not_both_false"),
    frozenset(("A", "I")): ("subalternation", "truth_descends"),
    frozenset(("E", "O")): ("subalternation", "truth_descends"),
}
FIGURE_PATTERNS = {
    1: (["M", "P"], ["S", "M"]),
    2: (["P", "M"], ["S", "M"]),
    3: (["M", "P"], ["M", "S"]),
    4: (["P", "M"], ["M", "S"]),
}
HYPOTHETICAL_VALIDITY = {
    "modus_ponens": True,
    "modus_tollens": True,
    "affirming_consequent": False,
    "denying_antecedent": False,
}
DISJUNCTION_RULES = {
    "strong": {"both_allowed": False, "neither_allowed": False, "affirming": True, "denying": True},
    "inclusive": {"both_allowed": True, "neither_allowed": False, "affirming": False, "denying": True},
    "exclusive_nonexhaustive": {"both_allowed": False, "neither_allowed": True, "affirming": True, "denying": False},
}
FALLACY_MECHANISMS = {
    "affirming_consequent_fallacy": ("formal", "invalid_form"),
    "composition_fallacy": ("informal", "part_to_whole"),
    "division_fallacy": ("informal", "whole_to_part"),
    "equivocation_fallacy": ("informal", "meaning_shift"),
    "ad_hominem_fallacy": ("informal", "person_attack"),
    "loaded_language_fallacy": ("informal", "emotion_for_evidence"),
    "straw_man_fallacy": ("informal", "distorted_claim"),
    "red_herring_fallacy": ("informal", "distraction"),
    "circular_argument": ("informal", "premise_repeats_conclusion"),
    "appeal_to_ignorance": ("informal", "absence_as_proof"),
    "irrelevant_authority": ("informal", "irrelevant_expertise"),
    "false_cause": ("informal", "sequence_for_causation"),
    "correlation_causation_fallacy": ("informal", "correlation_for_causation"),
    "slippery_slope_fallacy": ("informal", "weak_chain"),
    "two_wrongs_fallacy": ("informal", "another_wrong_as_justification"),
}

REQUIRED_CONCEPT_FIELDS = ("id", "title", "type", "prerequisites")
REQUIRED_TEMPLATE_FIELDS = ("id", "family", "concepts", "difficulty", "prompt")
VALID_CONCEPT_TYPES = {
    "definition", "component", "classification", "rule", "relationship",
    "procedure", "transformation", "inference", "representation",
    "exception", "terminology",
}
VALID_RELATIONS = {
    "coextensive",
    "disjoint",
    "absolute_generality_and_specificity",
    "partial_overlap",
}


def load_yaml(path):
    with path.open("r", encoding="utf-8") as handle:
        return yaml.safe_load(handle)


def find_duplicates(values):
    return [value for value, count in Counter(values).items() if count > 1]


def parse_frontmatter(path):
    text = path.read_text(encoding="utf-8")
    match = re.match(r"\A---\s*\r?\n(.*?)\r?\n---\s*\r?\n", text, re.DOTALL)
    return yaml.safe_load(match.group(1)) if match else None


errors = []
concepts = {}

# Load concepts and check the core concept schema.
for path in sorted(CONCEPTS_DIR.glob("*.yaml")):
    data = load_yaml(path)
    if not isinstance(data, dict) or "concept" not in data:
        errors.append(f"{path}: missing top-level 'concept'")
        continue

    concept = data["concept"]
    missing = [field for field in REQUIRED_CONCEPT_FIELDS if field not in concept]
    if missing:
        errors.append(f"{path}: missing required fields {missing}")
        continue

    cid = concept["id"]
    if cid in concepts:
        errors.append(f"{path}: duplicate concept id '{cid}'")
    if path.stem != cid:
        errors.append(f"{path}: filename must match concept id '{cid}'")
    if concept["type"] not in VALID_CONCEPT_TYPES:
        errors.append(f"{path}: invalid concept type '{concept['type']}'")
    concepts[cid] = (path, concept)

# Validate prerequisites and detect prerequisite cycles.
for cid, (path, concept) in concepts.items():
    for prereq in concept.get("prerequisites", []):
        if prereq not in concepts:
            errors.append(f"{path}: prerequisite '{prereq}' does not exist")
        if prereq == cid:
            errors.append(f"{path}: concept cannot require itself")

visiting = set()
visited = set()


def visit(cid, trail):
    if cid in visiting:
        errors.append("Prerequisite cycle: " + " -> ".join(trail + [cid]))
        return
    if cid in visited:
        return
    visiting.add(cid)
    for prereq in concepts[cid][1].get("prerequisites", []):
        if prereq in concepts:
            visit(prereq, trail + [cid])
    visiting.remove(cid)
    visited.add(cid)


for concept_id in concepts:
    visit(concept_id, [])

# Preserve the starter's deterministic A/E/I/O invariant checks.
for cid, (path, concept) in concepts.items():
    props = concept.get("properties", {})
    symbol = props.get("symbol")
    if symbol not in EXPECTED_AEIO:
        continue
    expected = EXPECTED_AEIO[symbol]
    distribution = props.get("distribution", {})
    if props.get("quantity") != expected["quantity"]:
        errors.append(f"{path}: {symbol}-proposition must have quantity '{expected['quantity']}'")
    if props.get("quality") != expected["quality"]:
        errors.append(f"{path}: {symbol}-proposition must have quality '{expected['quality']}'")
    if distribution.get("subject") != expected["subject"]:
        errors.append(f"{path}: {symbol}-proposition subject distribution is invalid")
    if distribution.get("predicate") != expected["predicate"]:
        errors.append(f"{path}: {symbol}-proposition predicate distribution is invalid")


# Validate the deterministic Venn rules stored in representation concepts.
for cid, (path, concept) in concepts.items():
    props = concept.get("properties", {})
    form = props.get("form")
    if concept.get("type") != "representation" or form not in EXPECTED_VENN:
        continue
    for mark in ("shaded_regions", "x_regions"):
        if props.get(mark) != EXPECTED_VENN[form][mark]:
            errors.append(f"{path}: invalid {mark} for {form}-proposition Venn representation")

# Load course and units; validate unit paths, topic references, and lesson files.
course_data = load_yaml(ROOT / "course.yaml")
course_unit_ids = []
for unit_ref in course_data.get("units", []):
    unit_id = unit_ref.get("id")
    course_unit_ids.append(unit_id)
    unit_path = ROOT / unit_ref.get("path", "")
    if not unit_path.exists():
        errors.append(f"course.yaml: unit path does not exist for '{unit_id}'")
        continue
    unit_data = load_yaml(unit_path)
    unit = unit_data.get("unit", {})
    if unit.get("id") != unit_id:
        errors.append(f"{unit_path}: unit id does not match course.yaml")

if find_duplicates(course_unit_ids):
    errors.append(f"course.yaml: duplicate unit ids {find_duplicates(course_unit_ids)}")

unit_concept_coverage = {}
for path in sorted(UNITS_DIR.glob("**/unit.yaml")):
    data = load_yaml(path)
    unit = data.get("unit", {})
    uid = unit.get("id")
    covered = set()
    for resource_field in ("misconceptions", "vocabulary_pool"):
        resource_ref = data.get(resource_field)
        if resource_ref and not (path.parent / resource_ref).resolve().exists():
            errors.append(f"{path}: missing {resource_field} resource '{resource_ref}'")
    for topic in data.get("topics", []):
        topic_concepts = topic.get("concepts", [])
        covered.update(topic_concepts)
        for cid in topic_concepts:
            if cid not in concepts:
                errors.append(f"{path}: topic '{topic.get('id')}' references unknown concept '{cid}'")
        lesson_path = path.parent / topic.get("lesson", "")
        if not lesson_path.exists():
            errors.append(f"{path}: missing lesson '{topic.get('lesson')}'")
            continue
        metadata = parse_frontmatter(lesson_path)
        if metadata:
            lesson_refs = set(metadata.get("concepts", []))
            missing_from_lesson = set(topic_concepts) - lesson_refs
            if missing_from_lesson:
                errors.append(f"{lesson_path}: missing topic concepts {sorted(missing_from_lesson)}")
    unit_concept_coverage[uid] = covered

# Validate exercise templates, concept references, example IDs, and Unit 1 rules.
exercise_coverage = {}
all_example_ids = []
all_template_ids = []
for path in sorted(EXERCISES_DIR.glob("*.yaml")):
    data = load_yaml(path)
    exercise_set = data.get("exercise_set", {})
    uid = exercise_set.get("unit")
    covered = set()
    template_ids = []
    for template in data.get("templates", []):
        missing = [field for field in REQUIRED_TEMPLATE_FIELDS if field not in template]
        if missing:
            errors.append(f"{path}: exercise template missing fields {missing}")
            continue
        template_ids.append(template["id"])
        all_template_ids.append(template["id"])
        if not 1 <= template["difficulty"] <= 7:
            errors.append(f"{path}: exercise '{template['id']}' difficulty must be 1-7")
        for cid in template.get("concepts", []):
            covered.add(cid)
            if cid not in concepts:
                errors.append(f"{path}: exercise '{template['id']}' references unknown concept '{cid}'")
    for duplicate in find_duplicates(template_ids):
        errors.append(f"{path}: duplicate template id '{duplicate}'")

    for example in data.get("examples", []):
        example_id = example.get("id")
        if not example_id:
            errors.append(f"{path}: example has no id")
            continue
        all_example_ids.append(example_id)
        if example.get("type") == "categorical_proposition":
            proposition = example.get("proposition", {})
            for part in ("subject", "predicate", "quantifier", "copula"):
                if not isinstance(proposition.get(part), str) or not proposition[part].strip():
                    errors.append(f"{path}: example '{example_id}' requires text for {part}; quote words such as 'no' in YAML")
            symbol = proposition.get("form")
            if symbol not in EXPECTED_AEIO:
                errors.append(f"{path}: example '{example_id}' has invalid A/E/I/O form")
            else:
                expected = EXPECTED_AEIO[symbol]
                distribution = proposition.get("distribution", {})
                for key in ("quantity", "quality"):
                    if proposition.get(key) != expected[key]:
                        errors.append(f"{path}: example '{example_id}' has invalid {key} for {symbol}")
                for term in ("subject", "predicate"):
                    if distribution.get(term) != expected[term]:
                        errors.append(f"{path}: example '{example_id}' has invalid {term} distribution for {symbol}")

                venn = example.get("venn")
                if venn:
                    if venn.get("subject_position") != "left" or venn.get("predicate_position") != "right":
                        errors.append(f"{path}: example '{example_id}' violates the Venn circle convention")
                    for mark in ("shaded_regions", "x_regions"):
                        if venn.get(mark) != EXPECTED_VENN[symbol][mark]:
                            errors.append(f"{path}: example '{example_id}' has invalid Venn {mark} for {symbol}")

        if example.get("type") == "modal_proposition":
            modal = example.get("modal", {})
            if modal.get("mode") not in VALID_MODES:
                errors.append(f"{path}: example '{example_id}' has invalid modal mode")
            if modal.get("evidence_basis") not in VALID_EVIDENCE_BASES:
                errors.append(f"{path}: example '{example_id}' has invalid evidence basis")

        if example.get("type") == "categorical_translation":
            normalized = example.get("normalized", {})
            missing = [key for key in ("subject", "predicate", "quantifier", "copula") if not normalized.get(key)]
            if not example.get("original") or not example.get("render") or missing:
                errors.append(f"{path}: translation '{example_id}' is incomplete; missing {missing}")

        if example.get("type") == "only_translation" and len(example.get("accepted_readings", [])) != 2:
            errors.append(f"{path}: only-translation '{example_id}' must preserve exactly two readings")

        if example.get("type") == "direct_transformation":
            operation = example.get("operation")
            original = example.get("original", {})
            result = example.get("result", {})
            if result.get("subject") != original.get("predicate") and operation != "obversion":
                errors.append(f"{path}: transformation '{example_id}' did not swap subject and predicate")
            if operation == "obversion":
                if result.get("subject") != original.get("subject"):
                    errors.append(f"{path}: obversion '{example_id}' must retain its subject")
                if result.get("form") != OBVERSION_MAP.get(original.get("form")) or example.get("valid") is not True:
                    errors.append(f"{path}: obversion '{example_id}' has an invalid form mapping")
            elif operation == "conversion_by_limitation":
                if (original.get("form"), result.get("form"), example.get("valid")) != ("A", "I", True):
                    errors.append(f"{path}: conversion by limitation '{example_id}' must map A to I validly")
            elif operation == "conversion":
                expected_valid = original.get("form") in {"E", "I"}
                if example.get("valid") is not expected_valid:
                    errors.append(f"{path}: conversion '{example_id}' has the wrong validity")
                if expected_valid and result.get("form") != original.get("form"):
                    errors.append(f"{path}: simple conversion '{example_id}' changed form")

        if example.get("type") == "square_pair":
            key = frozenset(example.get("forms", []))
            expected = SQUARE_RELATIONS.get(key)
            if not expected or (example.get("relationship"), example.get("truth_rule")) != expected:
                errors.append(f"{path}: square pair '{example_id}' has an invalid relationship or truth rule")
            if example.get("conditions_match") is not True:
                errors.append(f"{path}: square pair '{example_id}' must match contradiction conditions")

        if example.get("type") == "categorical_syllogism":
            major = example.get("major_premise", {})
            minor = example.get("minor_premise", {})
            conclusion = example.get("conclusion", {})
            figure = example.get("figure")
            if set(example.get("terms", {})) != {"S", "P", "M"}:
                errors.append(f"{path}: syllogism '{example_id}' must define S, P, and M")
            if figure not in FIGURE_PATTERNS or (major.get("terms"), minor.get("terms")) != FIGURE_PATTERNS.get(figure):
                errors.append(f"{path}: syllogism '{example_id}' has an invalid figure pattern")
            expected_mood = "".join(str(item.get("form", "")) for item in (major, minor, conclusion))
            if example.get("mood") != expected_mood:
                errors.append(f"{path}: syllogism '{example_id}' mood must be '{expected_mood}'")
            if example.get("valid") != (len(example.get("failed_rules", [])) == 0):
                errors.append(f"{path}: syllogism '{example_id}' validity conflicts with failed rules")

        if example.get("type") == "hypothetical_argument":
            expected_valid = HYPOTHETICAL_VALIDITY.get(example.get("pattern"))
            if expected_valid is None or example.get("valid") is not expected_valid:
                errors.append(f"{path}: hypothetical argument '{example_id}' has invalid pattern metadata")

        if example.get("type") == "disjunctive_argument":
            rules = DISJUNCTION_RULES.get(example.get("relationship"))
            if not rules:
                errors.append(f"{path}: disjunction '{example_id}' has an unknown relationship")
            else:
                for key in ("both_allowed", "neither_allowed"):
                    if example.get(key) is not rules[key]:
                        errors.append(f"{path}: disjunction '{example_id}' has invalid {key}")
                if example.get("valid") is not rules.get(example.get("move")):
                    errors.append(f"{path}: disjunction '{example_id}' has invalid move validity")

        if example.get("type") == "fallacy_case":
            fallacy = example.get("fallacy")
            expected = FALLACY_MECHANISMS.get(fallacy)
            if not expected:
                errors.append(f"{path}: fallacy case '{example_id}' has an unknown fallacy")
            elif (example.get("level"), example.get("mechanism")) != expected:
                errors.append(f"{path}: fallacy case '{example_id}' has inconsistent level or mechanism")
            if not example.get("render", {}).get("en"):
                errors.append(f"{path}: fallacy case '{example_id}' requires learner-facing English text")

        if example.get("type") == "universal_pair":
            universals = example.get("universals", {})
            relation = universals.get("relation")
            membership = universals.get("membership", {})
            if relation not in VALID_RELATIONS:
                errors.append(f"{path}: example '{example_id}' has invalid universal relation")
            elif relation == "coextensive" and not (
                membership.get("all_left_are_right") is True
                and membership.get("all_right_are_left") is True
            ):
                errors.append(f"{path}: coextensive example '{example_id}' violates membership rules")
            elif relation == "disjoint" and membership.get("some_shared") is not False:
                errors.append(f"{path}: disjoint example '{example_id}' must have no shared members")
            elif relation == "absolute_generality_and_specificity" and not (
                membership.get("all_narrower_are_broader") is True
                and membership.get("all_broader_are_narrower") is False
            ):
                errors.append(f"{path}: nested example '{example_id}' violates one-way inclusion")
            elif relation == "partial_overlap" and not all(
                membership.get(key) is True
                for key in ("some_shared", "some_left_not_right", "some_right_not_left")
            ):
                errors.append(f"{path}: overlap example '{example_id}' lacks all three membership facts")
    exercise_coverage[uid] = covered

for duplicate in find_duplicates(all_example_ids):
    errors.append(f"Duplicate exercise example id '{duplicate}'")
for duplicate in find_duplicates(all_template_ids):
    errors.append(f"Duplicate exercise template id '{duplicate}'")

# Every concept placed in a unit must have at least one exercise template.
for uid, unit_concepts in unit_concept_coverage.items():
    missing = unit_concepts - exercise_coverage.get(uid, set())
    if missing:
        errors.append(f"Unit '{uid}' concepts missing exercise coverage: {sorted(missing)}")

# Validate the production pedagogy and generator configuration.
family_data = load_yaml(PEDAGOGY_DIR / "exercise_families.yaml")
profile_data = load_yaml(PEDAGOGY_DIR / "template_profiles.yaml")
families = family_data.get("families", {})
hint_ladders = family_data.get("hint_ladders", {})
profiles = profile_data.get("profiles", {})

missing_profiles = set(all_template_ids) - set(profiles)
extra_profiles = set(profiles) - set(all_template_ids)
if missing_profiles:
    errors.append(f"Production profiles missing templates: {sorted(missing_profiles)}")
if extra_profiles:
    errors.append(f"Production profiles reference unknown templates: {sorted(extra_profiles)}")

for path in sorted(EXERCISES_DIR.glob("*.yaml")):
    data = load_yaml(path)
    for template in data.get("templates", []):
        family = families.get(template.get("family"))
        if not family:
            errors.append(f"{path}: template '{template['id']}' has no production family definition")
        elif family.get("hint_ladder") not in hint_ladders:
            errors.append(f"{path}: template '{template['id']}' has no valid hint ladder")

for template_id, profile in profiles.items():
    if not 1 <= profile.get("stage", 0) <= 7:
        errors.append(f"template profile '{template_id}' requires stage 1-7")
    if not profile.get("domain") or not profile.get("example_types"):
        errors.append(f"template profile '{template_id}' requires domain and example_types")
    answer_fields = [field for field in ("answer_path", "answer_paths", "answer_constant") if field in profile]
    if len(answer_fields) != 1:
        errors.append(f"template profile '{template_id}' requires exactly one answer resolver")

rules = load_yaml(ROOT / "generators" / "generation_rules.yaml")
thresholds = rules.get("quality_thresholds", {})
for concept_id in thresholds.get("core_concepts", []):
    if concept_id not in concepts:
        errors.append(f"generation rules reference unknown core concept '{concept_id}'")
if thresholds.get("minimum_items_per_concept", 0) < 8:
    errors.append("production minimum_items_per_concept must be at least 8")
if thresholds.get("minimum_application_items_per_core_concept", 0) < 12:
    errors.append("production minimum_application_items_per_core_concept must be at least 12")

# Validate fixed assessments independently of the runtime compiler.
assessment_data = load_yaml(ASSESSMENTS_DIR / "assessments.yaml")
assessment_ids = []
checkpoint_units = set()
for assessment in assessment_data.get("assessments", []):
    aid = assessment.get("id")
    assessment_ids.append(aid)
    refs = assessment.get("items", [])
    ref_keys = [(item.get("template"), item.get("example")) for item in refs]
    if len(refs) < (20 if assessment.get("type") == "final" else 10):
        errors.append(f"assessment '{aid}' does not contain enough fixed items")
    if len(ref_keys) != len(set(ref_keys)):
        errors.append(f"assessment '{aid}' contains duplicate template/example references")
    for template_id, example_id in ref_keys:
        if template_id not in all_template_ids:
            errors.append(f"assessment '{aid}' references unknown template '{template_id}'")
        if example_id not in all_example_ids:
            errors.append(f"assessment '{aid}' references unknown example '{example_id}'")
    if assessment.get("type") == "unit_checkpoint":
        checkpoint_units.add(assessment.get("unit"))

for duplicate in find_duplicates(assessment_ids):
    errors.append(f"Duplicate assessment id '{duplicate}'")
if checkpoint_units != set(unit_concept_coverage):
    errors.append(f"Unit checkpoint coverage mismatch: {sorted(checkpoint_units)}")

if errors:
    print("Content validation failed:\n")
    for error in errors:
        print(f"- {error}")
    sys.exit(1)

print(
    "Content validation passed. "
    f"{len(concepts)} concepts, "
    f"{len(course_unit_ids)} units, and "
    f"{len(all_example_ids)} structured examples loaded successfully."
)

# Manṭiq Production Course Content System

This folder is the production content architecture for a mastery-based Manṭiq course.

The core principle is:

> **The textbook provides the scholarship; the app provides the pedagogy.**

The source textbook should remain authoritative for explanations, terminology, and course order. The app converts that material into structured concepts, exercises, mastery checks, and spaced review.

## Recommended content stack

- **Markdown (`.md`)** — learner-facing explanations and worked examples
- **YAML (`.yaml`)** — course structure, concepts, prerequisites, examples, exercise templates, mastery rules
- **JSON** — optional compiled runtime format
- **Database** — user progress only; do not store canonical course content there

## Directory structure

```text
mantiq_content_starter/
├── course.yaml
├── README.md
├── concepts/
│   ├── proposition.yaml
│   ├── subject.yaml
│   ├── predicate.yaml
│   ├── quantifier.yaml
│   ├── copula.yaml
│   ├── quality.yaml
│   ├── quantity.yaml
│   ├── a_proposition.yaml
│   ├── e_proposition.yaml
│   ├── i_proposition.yaml
│   ├── o_proposition.yaml
│   └── distribution.yaml
├── units/
│   └── 02-propositions/
│       ├── unit.yaml
│       └── lessons/
│           ├── 01-structure.md
│           ├── 02-quality-and-quantity.md
│           └── 03-distribution.md
├── exercises/
│   └── propositions.yaml
├── schemas/
│   ├── concept.schema.json
│   ├── lesson.schema.json
│   └── exercise.schema.json
├── tools/
│   └── validate_content.py
└── requirements.txt
```

## Authoring workflow

For each textbook section:

```text
Textbook section
    ↓
Extract atomic concepts
    ↓
Define prerequisites
    ↓
Write learner-facing explanation
    ↓
Add structured examples
    ↓
Attach exercise families
    ↓
Define mastery requirements
    ↓
Validate content
```

Do not structure the curriculum around textbook page numbers. Store page numbers only as source metadata.

## Core identifiers

Use stable lowercase `snake_case` IDs.

Good:

```text
a_proposition
universal_proposition
subject_distribution
```

Avoid IDs tied to page numbers:

```text
page_22_rule_1
```

## Content vs user data

Canonical course content belongs in this repository.

User-specific data belongs in the application database, for example:

```text
user_id
concept_id
mastery_score
last_reviewed
next_review
correct_attempts
incorrect_attempts
highest_difficulty
```

## Validation

Install PyYAML:

```bash
pip install -r requirements.txt
```

Then run:

```bash
python tools/validate_content.py
```

The starter validator checks:

- duplicate concept IDs
- missing prerequisite concepts
- unknown lesson concept references
- unknown exercise concept references
- invalid A/E/I/O structural properties
- missing required fields

Extend it as the course grows.

## Suggested app-side compilation

A production app can compile YAML + Markdown into JSON at build time:

```text
/content
   ↓
validator
   ↓
compiler
   ↓
compiled-course.json
   ↓
app runtime
```

This keeps authoring pleasant while giving the app a predictable runtime representation.

## Implemented textbook content

The starter now includes Unit 1, **Terms** (printed pages 11–17), and the full
Unit 2, **Propositions** (printed pages 19–29).

Unit 1 provides:

- 4 topics and 15 atomic concepts
- 4 Markdown lessons with worked examples and guided checks
- English titles, the textbook's Arabic terminology, and transliteration
- explicit prerequisite links
- reusable definition, signification, term-scope, and universal-relation
  exercise templates
- 13 structured examples, including deterministic set-membership facts for all
  four Venn relationships
- misconception tags, a curated vocabulary pool, mastery requirements, and a
  1/3/10/30-day review policy

The Unit 1 entry point is `units/01-terms/unit.yaml`, and its reusable exercise
set is `exercises/terms.yaml`.

Unit 2 provides:

- 8 topics covering structure, value, quality and quantity, A/E/I/O forms,
  distribution, mode, categorical translation, and Venn representation
- 8 Markdown lessons and 31 linked atomic concepts
- 16 reusable exercise templates and deterministic structured examples
- Arabic terminology and transliteration where introduced by the textbook
- misconception-led remediation, a controlled vocabulary pool, mastery rules,
  spaced review, and interleaving with Unit 1
- validator checks for A/E/I/O properties, Venn markings, modal labels, and
  categorical translations

The Unit 2 entry point is `units/02-propositions/unit.yaml`, and its reusable
exercise set is `exercises/propositions.yaml`.

Unit 3, **Inference** (printed pages 31–69), provides:

- the textbook's four sections: direct inference, deduction, induction, and
  analogy
- 13 topics and Markdown lessons, with 58 linked atomic concepts
- conversion, obversion, the square of opposition, categorical syllogisms,
  hypothetical and disjunctive syllogisms, induction, and analogy
- all eight categorical-syllogism rules and their associated fallacies
- 18 reusable exercise templates and 28 deterministic structured examples
- misconception remediation, controlled vocabulary, mastery requirements,
  spaced review, and interleaving with Units 1 and 2
- validator checks for direct transformations, square relationships, figure and
  mood, hypothetical validity, and disjunction rules

The Unit 3 entry point is `units/03-inference/unit.yaml`, and its reusable
exercise set is `exercises/inference.yaml`.

Unit 4, **Informal Fallacies** (printed pages 71–74), provides:

- 5 topics and Markdown lessons covering formal/informal errors, part-whole and
  meaning errors, rhetoric and relevance, faulty evidence, and causal reasoning
- 16 linked concepts covering every fallacy named in the textbook
- 9 reusable exercise templates and 16 structured diagnostic cases
- misconception-specific remediation, neutral-language and causal vocabulary,
  mastery requirements, spaced review, and interleaving with earlier units
- validator checks that each fallacy case's level, label, and mechanism agree

The Unit 4 entry point is `units/04-informal-fallacies/unit.yaml`, and its
reusable exercise set is `exercises/informal_fallacies.yaml`.

## Complete textbook coverage

The authored course now covers all instructional units in the textbook, from
printed page 11 through printed page 74:

- 4 units and 30 lessons
- 120 atomic concepts with validated prerequisite links
- 52 reusable exercise templates
- 75 structured examples and diagnostic cases
- deterministic checks for categorical forms, Venn diagrams, transformations,
  inference rules, syllogisms, disjunctions, and informal fallacies

Front matter and the index remain source navigation rather than learner units.

## Production learning layer

The authored material is compiled into an app-ready runtime instead of being
parsed repeatedly in the learner interface. The production layer adds:

- family-specific interactions, cognitive stages, hint ladders, scoring, and
  accessibility requirements in `pedagogy/`;
- deterministic categorical, syllogistic, hypothetical, inductive, and analogy
  generators in `generators/`;
- fixed diagnostic, unit-checkpoint, and final assessments in `assessments/`;
- a per-concept mastery and review reference engine in `runtime/`;
- a compiled runtime and machine-readable coverage report in `dist/`.

The current production build contains:

- 103 authored seed examples and 101 deterministically generated examples;
- 3,321 answerable practice items with staged hints and feedback;
- at least 8 items for every concept;
- at least 12 application items for each designated core concept;
- 6 fixed assessments containing 100 assessment item references.

### Build and test

```bash
python tools/validate_content.py
python tools/compile_content.py
python tools/test_content_pipeline.py
```

The build is deterministic. `dist/course.runtime.json` is the application
payload, while `dist/quality-report.json` records coverage and passed release
checks. Do not edit either compiled file manually.

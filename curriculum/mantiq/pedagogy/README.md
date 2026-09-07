# Learning presentation

`lesson_flows.yaml` choreographs all 30 lessons into teaching and practice steps. A teaching step names a zero-based Markdown section, its concepts, and a presentation style. Practice steps request a small set of suitable questions for concepts taught so far. Guided practice does not count as independent mastery evidence.

The compiler requires every original Markdown section exactly once and in order. Full lessons, Arabic terminology, and textbook source references remain available in the lesson notebook. It does not paraphrase the textbook.

`tools/learning_presentation.py` adapts the exercise contracts: resolves component/signification placeholders, focuses their concept tags, supplies missing canonical choice options, adds a fourth component variant for the copula, presents Venn markings as diagrams, builds categorical propositions from a word bank, and uses the original sentence for translation. Tasks requesting diagnosis/comparison without a supplied error or second example are relabelled as classification. Example-specific authored rationales take precedence over generic correct feedback.

The compiled bank contains 3,370 items. The application currently admits 3,286, including reflection; 84 remain excluded because their structured stimuli lack sufficient learner-facing information. These are reported in `app/reports/content-diagnostics.json`. This is a presentation repair, not a scholarly revalidation of every source item.

Edit this YAML and the source exercise files, then run `npm run content:build` from `app/`. Do not edit the generated runtime directly.

`definition_checks.yaml` adds three focused checks against the supplied definition examples. Recognition distractors now come from concepts in the same lesson, and their concepts must have been introduced before those questions are selected.

`lesson_visuals.yaml` attaches interactive visual explanations to 17 teaching steps across 11 lessons. It defines the initial diagram state, heading, and caption; the compiler rejects unknown visual kinds and invalid presets. The six visual families cover definition scope, universal relationships, proposition parts, categorical forms and distribution, the traditional square of opposition, and syllogism figures. Text diagrams are replaced only in the illustrated lesson card; the original Markdown remains in the notebook. Diagram-choice exercises use authored canonical options and actual graphical choices.

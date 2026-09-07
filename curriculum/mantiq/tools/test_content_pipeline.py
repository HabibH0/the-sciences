from hashlib import sha256
from pathlib import Path
import json
import sys
import unittest


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tools"))
import compile_content  # noqa: E402


class ContentPipelineTests(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        compile_content.main()
        cls.runtime_path = ROOT / "dist" / "course.runtime.json"
        cls.report_path = ROOT / "dist" / "quality-report.json"
        cls.runtime = json.loads(cls.runtime_path.read_text(encoding="utf-8"))
        cls.report = json.loads(cls.report_path.read_text(encoding="utf-8"))

    def test_runtime_counts_and_unique_ids(self):
        counts = self.report["counts"]
        self.assertEqual(counts["units"], 4)
        self.assertEqual(counts["lessons"], 30)
        self.assertEqual(counts["concepts"], 120)
        self.assertGreaterEqual(counts["practice_items"], 2500)
        ids = [item["id"] for item in self.runtime["practice_items"]]
        self.assertEqual(len(ids), len(set(ids)))

    def test_every_item_is_answerable_and_teachable(self):
        for item in self.runtime["practice_items"]:
            self.assertIsNotNone(item["answer"], item["id"])
            self.assertTrue(item["prompt"], item["id"])
            self.assertTrue(item["stimulus"], item["id"])
            self.assertTrue(item["feedback"]["correct"], item["id"])
            self.assertGreaterEqual(len(item["feedback"]["hints"]), 2, item["id"])

    def test_generated_categorical_invariants(self):
        expected = {
            "A": ("universal", "affirmative", True, False),
            "E": ("universal", "negative", True, True),
            "I": ("particular", "affirmative", False, False),
            "O": ("particular", "negative", False, True),
        }
        examples = {}
        for item in self.runtime["practice_items"]:
            if item["source_example"] and item["source_example"].startswith("generated_categorical_"):
                examples[item["source_example"]] = item
        self.assertGreaterEqual(len(examples), 32)
        for item in examples.values():
            answer = item["answer"]
            if not isinstance(answer, dict) or "form" not in answer:
                continue
            quantity, quality, subject, predicate = expected[answer["form"]]
            self.assertEqual(answer["quantity"], quantity)
            self.assertEqual(answer["quality"], quality)
            self.assertEqual(answer["distribution"], {"subject": subject, "predicate": predicate})

    def test_production_coverage_thresholds(self):
        coverage = self.report["coverage"]
        self.assertGreaterEqual(coverage["lowest_concept_item_count"], coverage["minimum_items_per_concept"])
        self.assertGreaterEqual(coverage["lowest_core_application_count"], coverage["core_application_minimum"])

    def test_fixed_assessments_resolve(self):
        item_ids = {item["id"] for item in self.runtime["practice_items"]}
        self.assertEqual(len(self.runtime["assessments"]), 6)
        for assessment in self.runtime["assessments"]:
            self.assertGreaterEqual(len(assessment["items"]), 10)
            for reference in assessment["items"]:
                self.assertIn(reference["item_id"], item_ids)

    def test_compilation_is_deterministic(self):
        before = sha256(self.runtime_path.read_bytes()).hexdigest()
        compile_content.main()
        after = sha256(self.runtime_path.read_bytes()).hexdigest()
        self.assertEqual(before, after)


if __name__ == "__main__":
    unittest.main(verbosity=2)

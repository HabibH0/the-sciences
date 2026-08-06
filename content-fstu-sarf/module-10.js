// Module 10 — Unit 9: الْمُرَكَّبُ (First Steps to Understanding Sarf, Unit 9, pp. 264-296)
//
// Converted from content-fstu-sarf/unit9-lesson1.js .. unit9-lesson5.js plus
// unit9-summary.js, following the same conversion pattern as module-01.js and
// module-09.js: raw sections/blocks -> concepts/lines, raw exercise items ->
// MCQ exercise.items, raw quiz/exerciseBank/vocab -> quiz/bank[]. l1 covers
// the Introduction — the nine types of مُرَكَّبٌ and how إِعْلَالٌ / تَخْفِيْفٌ
// interact on a doubly-weak root (unit9-lesson1.js, no vocab -- the unit's
// vocab starts with Part 1; its raw exercise is a "match" type against a
// shared 9-way combination-name pool, converted accordingly). l2 covers
// Parts 1-3, مِثَالٌ combined with مَهْمُوْزُ الْعَيْنِ / مَهْمُوْزُ اللَّامِ /
// مُضَاعَفٌ: وَأَدَ، اِسْتَيْأَسَ، وَطِئَ، اِتَّكَأَ، وَدَّ، وَادَّ
// (unit9-lesson2.js). l3 covers Parts 4-5, أَجْوَفُ combined with
// مَهْمُوْزُ الْفَاءِ / مَهْمُوْزُ اللَّامِ: آدَ، آلَ، شَاءَ، جَاءَ، بَاءَ، أَجَاءَ
// (unit9-lesson3.js). l4 covers Parts 6-7, نَاقِصٌ combined with
// مَهْمُوْزُ الْفَاءِ / مَهْمُوْزُ الْعَيْنِ: أَبَى، أَسِيَ، أَتَى، أَلَا، أَدَّى،
// آتَى، اِيْتَلَى، رَأَى، رَاءَى، أَرَى، تَرَاءَى (unit9-lesson4.js, the largest
// lesson -- 11 sections/verbs). l5 covers Parts 8-9, لَفِيْفٌ combined with
// مَهْمُوْزُ الْفَاءِ / مَهْمُوْزُ الْعَيْنِ: أَوَى، آوَى، وَأَى (unit9-lesson5.js).
// l2-l5 have non-empty vocab[] arrays and got the full 3-direction
// vocab-bank treatment (rule 4). l6 is the trailing "Unit 9 Summary" review
// lesson (no exercise, no summary sidebar -- mirrors module-01.js's l13 /
// module-09.js's l5), built from unit9-summary.js's nine master
// تَصْرِيْفٌ صَغِيْرٌ tables (Parts 1-9, pp. 292-293), a quiz blending 5 of the
// unit's 10 keyTerms with 10 content questions grounded directly in those
// master tables, and a bank covering the unit's full 34-verb vocabulary
// (3-direction) plus all 21 exerciseBank questions (pp. 294-295).
// Module id is 's-u9'.
//
// In every لَفِيْفٌ/أَجْوَفُ/نَاقِصٌ/مِثَالٌ combination lesson, both weak-letter
// rule sets are kept in full wherever the raw source states them applying
// simultaneously (e.g. آدَ: أَجْوَفُ vowel lengthening AND مَهْمُوْزٌ
// تَخْفِيْفٌ both apply in the same صِيْغَةٌ) -- nothing is simplified or
// dropped when two rule sets meet on one root, per this unit's own defining
// topic.
//
// TODO: unit9-lesson3.js's vocab glosses THREE different verbs (آضَ، آلَ،
// بَاءَ) with the identical English string "to return" (and
// unit9-summary.js's own master vocab list repeats the آلَ/بَاءَ pair of
// that same collision). This is the raw source text as written (not
// introduced by this conversion) -- per vocab-bank rule 4 and precedent
// (module-09.js's TODO for its colour-verb collisions), the "en-ar" MCQ
// generator still emits one item per vocab entry and never repeats the same
// option string twice within a single question, but a learner could
// legitimately give any of the three Arabic forms as "the" answer to
// "What is the Arabic word for 'to return'?" since the book itself glosses
// all three that way. Left as-is rather than inventing a disambiguating
// English gloss not present in the source.
// TODO: unit9-summary.js (p. 296) glosses اِيْتَلَى as "to put to the test",
// while unit9-lesson4.js's own Part 6 vocab (p. 284) glosses the SAME verb
// as "to take an oath". Both raw glosses are kept verbatim in their
// respective lesson (l4's bank) and the summary (l6's bank) rather than
// silently picking one, per the raw source's own note about this
// discrepancy.
export default {
  "id": "s-u9",
  "title": "الْمُرَكَّبُ",
  "heading": "الْفِعْلُ غَيْرُ السَّالِمِ",
  "blurb": "الْمُرَكَّب: verbs whose root combines two weak-letter categories at once.",
  "lessons": [
    {
      "id": "l1",
      "title": "مُقَدِّمَةٌ",
      "subtitle": "Introduction to مُرَكَّبٌ — verbs combining مَهْمُوْزٌ, مُعْتَلٌّ, or مُضَاعَفٌ, and how إِعْلَالٌ and تَخْفِيْفٌ interact",
      "concepts": [
        {
          "heading": "What is مُرَكَّبٌ?",
          "lines": [
            {
              "html": "<bdi>مُرَكَّبٌ</bdi> is a word which is a combination of any of the following: 1. <bdi>مَهْمُوْزٌ</bdi> (a verb containing a hamzah). 2. <bdi>مُعْتَلٌّ</bdi> (a verb containing a weak letter): <bdi>مِثَالٌ</bdi>, <bdi>أَجْوَفُ</bdi>, or <bdi>نَاقِصٌ</bdi>. 3. <bdi>مُضَاعَفٌ</bdi> (a verb whose second and third root letters are the same).",
              "list": false
            },
            {
              "html": "There are nine types of <bdi>مُرَكَّبٌ</bdi>. These are shown in the table below (— means no example of that combination exists).",
              "list": false
            },
            {
              "table": {
                "title": "The Nine Types of مُرَكَّبٌ",
                "headers": [
                  "Type of حَرْفُ الْعِلَّةِ",
                  "مَهْمُوْزٌ / مُضَاعَفٌ",
                  "Example"
                ],
                "rows": [
                  [
                    "مِثَالٌ",
                    "مَهْمُوْزُ الْفَاءِ",
                    "—"
                  ],
                  [
                    "مِثَالٌ",
                    "مَهْمُوْزُ الْعَيْنِ",
                    "وَأَدَ، اِسْتَيْأَسَ"
                  ],
                  [
                    "مِثَالٌ",
                    "مَهْمُوْزُ اللَّامِ",
                    "وَطِئَ، اِتَّكَأَ"
                  ],
                  [
                    "مِثَالٌ",
                    "مُضَاعَفٌ",
                    "وَدَّ، وَادَّ"
                  ],
                  [
                    "أَجْوَفُ",
                    "مَهْمُوْزُ الْفَاءِ",
                    "آدَ، آلَ"
                  ],
                  [
                    "أَجْوَفُ",
                    "مَهْمُوْزُ الْعَيْنِ",
                    "—"
                  ],
                  [
                    "أَجْوَفُ",
                    "مَهْمُوْزُ اللَّامِ",
                    "شَاءَ، جَاءَ، بَاءَ، أَجَاءَ"
                  ],
                  [
                    "أَجْوَفُ",
                    "مُضَاعَفٌ",
                    "—"
                  ],
                  [
                    "نَاقِصٌ",
                    "مَهْمُوْزُ الْفَاءِ",
                    "أَبَى، أَسِيَ، أَتَى، أَلَا، أَدَّى، آتَى، اِيْتَلَى"
                  ],
                  [
                    "نَاقِصٌ",
                    "مَهْمُوْزُ الْعَيْنِ",
                    "رَأَى، رَاءَى، أَرَى، تَرَاءَى"
                  ],
                  [
                    "نَاقِصٌ",
                    "مَهْمُوْزُ اللَّامِ",
                    "—"
                  ],
                  [
                    "نَاقِصٌ",
                    "مُضَاعَفٌ",
                    "—"
                  ],
                  [
                    "لَفِيْفٌ مَقْرُوْنٌ",
                    "مَهْمُوْزُ الْفَاءِ",
                    "أَوَى، آوَى"
                  ],
                  [
                    "لَفِيْفٌ مَفْرُوْقٌ",
                    "مَهْمُوْزُ الْعَيْنِ",
                    "وَأَى"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is a مُرَكَّبٌ?",
            "kind": "mcq",
            "options": ["A verb whose three root letters are all strong", "A word which combines any of: مَهْمُوْزٌ, مُعْتَلٌّ, or مُضَاعَفٌ", "A verb with four root letters", "A verb that has no مَصْدَرٌ"],
            "correct": 1
          }
        },
        {
          "heading": "Changes to مُرَكَّبٌ",
          "lines": [
            {
              "html": "In most cases, the <bdi>إِعْلَالٌ</bdi> (vowel change) of the <bdi>مُعْتَلٌّ</bdi> takes place. However, in some verbs, <bdi>تَخْفِيْفٌ</bdi> (lightening of the hamzah) takes place along with <bdi>إِعْلَالٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>آبَى</bdi> — <bdi>الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ</bdi> of <bdi>أَبَى يَأْبَى</bdi> — a <bdi>نَاقِصٌ</bdi> and <bdi>مَهْمُوْزُ الْفَاءِ</bdi> verb",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this example, the <bdi>إِعْلَالٌ</bdi> of <bdi>نَاقِصٌ</bdi> applies throughout the <bdi>تَصْرِيْفٌ كَبِيْرٌ</bdi>. In addition, the <bdi>تَخْفِيْفٌ</bdi> of <bdi>مَهْمُوْزٌ</bdi> also takes place in this <bdi>صِيْغَةٌ</bdi>: the two hamzahs of <bdi>أَأْبَى</bdi> merge into a maddah, giving <bdi>آبَى</bdi>.",
              "list": false
            },
            {
              "html": "Some <bdi>مُرَكَّبٌ</bdi> verbs remain unchanged, e.g. <bdi>تَوَكَّأَ</bdi> (below). As there are no additional rules to them, their conjugations are not discussed in this book.",
              "list": false
            },
            {
              "table": {
                "title": "تَوَكَّأَ — a مُرَكَّبٌ verb that remains unchanged",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَوَكَّأَ",
                    "يَتَوَكَّأُ",
                    "تَوَكُّؤًا",
                    "تُوُكِّئَ",
                    "يُتَوَكَّأُ",
                    "تَوَكُّؤًا",
                    "تَوَكَّأْ",
                    "لَا تَتَوَكَّأْ",
                    "مُتَوَكِّئٌ",
                    "مُتَوَكَّأٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Which change takes place in most مُرَكَّبٌ verbs?",
            "kind": "mcq",
            "options": ["The تَخْفِيْفٌ of the hamzah only", "The إِعْلَالٌ of the مُعْتَلٌّ", "No change at all", "The doubling of the middle letter"],
            "correct": 1
          }
        }
      ],
      "summary": {
        "title": "Introduction: مُرَكَّبٌ",
        "rows": [
          {
            "label": "A word combining مَهْمُوْزٌ, مُعْتَلٌّ (مِثَالٌ، أَجْوَفُ، نَاقِصٌ), or مُضَاعَفٌ",
            "arabic": "مُرَكَّبٌ",
            "meaning": "A word combining مَهْمُوْزٌ, مُعْتَلٌّ (مِثَالٌ، أَجْوَفُ، نَاقِصٌ), or مُضَاعَفٌ",
            "unlockAt": 0
          },
          {
            "label": "The vowel change of the مُعْتَلٌّ — applies in most cases",
            "arabic": "إِعْلَالٌ",
            "meaning": "The vowel change of the مُعْتَلٌّ — applies in most cases",
            "unlockAt": 1
          },
          {
            "label": "Lightening of the hamzah — takes place along with إِعْلَالٌ in some verbs",
            "arabic": "تَخْفِيْفٌ",
            "meaning": "Lightening of the hamzah — takes place along with إِعْلَالٌ in some verbs",
            "unlockAt": 3
          },
          {
            "label": "Example: I refuse — إِعْلَالٌ of نَاقِصٌ + تَخْفِيْفٌ of مَهْمُوْزٌ",
            "arabic": "آبَى (from أَأْبَى)",
            "meaning": "Example: I refuse — إِعْلَالٌ of نَاقِصٌ + تَخْفِيْفٌ of مَهْمُوْزٌ",
            "unlockAt": 4
          },
          {
            "label": "Some مُرَكَّبٌ verbs remain unchanged — no additional rules apply",
            "arabic": "تَوَكَّأَ",
            "meaning": "Some مُرَكَّبٌ verbs remain unchanged — no additional rules apply",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "What is a مُرَكَّبٌ?",
          "options": [
            "A verb whose three root letters are all strong",
            "A word which combines any of: مَهْمُوْزٌ, مُعْتَلٌّ, or مُضَاعَفٌ",
            "A verb with four root letters",
            "A verb that has no مَصْدَرٌ"
          ],
          "correct": 1,
          "explanation": "مُرَكَّبٌ is a word which is a combination of any of: مَهْمُوْزٌ, مُعْتَلٌّ (نَاقِصٌ، أَجْوَفُ، مِثَالٌ), and مُضَاعَفٌ."
        },
        {
          "q": "How many types of مُرَكَّبٌ are there?",
          "options": [
            "Seven",
            "Eight",
            "Nine",
            "Twelve"
          ],
          "correct": 2,
          "explanation": "There are nine types of مُرَكَّبٌ — the combinations that actually occur, such as مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ and لَفِيْفٌ مَفْرُوْقٌ وَمَهْمُوْزُ الْعَيْنِ."
        },
        {
          "q": "Which change takes place in most مُرَكَّبٌ verbs?",
          "options": [
            "The تَخْفِيْفٌ of the hamzah only",
            "The إِعْلَالٌ of the مُعْتَلٌّ",
            "No change at all",
            "The doubling of the middle letter"
          ],
          "correct": 1,
          "explanation": "In most cases, the إِعْلَالٌ of the مُعْتَلٌّ takes place. In some verbs, تَخْفِيْفٌ takes place along with إِعْلَالٌ."
        },
        {
          "q": "آبَى is الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى يَأْبَى. What produced its maddah (آ)?",
          "options": [
            "The إِعْلَالٌ of the نَاقِصٌ",
            "The dropping of the ي",
            "The تَخْفِيْفٌ of the two hamzahs of أَأْبَى",
            "The addition of the pronoun أَنَا"
          ],
          "correct": 2,
          "explanation": "The first person مضارع would be أَأْبَى; the تَخْفِيْفٌ of the مَهْمُوْزٌ merges the two hamzahs into a maddah: آبَى."
        },
        {
          "q": "Which of the following combinations has NO example?",
          "options": [
            "أَجْوَفُ وَمَهْمُوْزُ الْعَيْنِ",
            "أَجْوَفُ وَمَهْمُوْزُ اللَّامِ",
            "مِثَالٌ وَمُضَاعَفٌ",
            "نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ"
          ],
          "correct": 0,
          "explanation": "The introduction table marks أَجْوَفُ وَمَهْمُوْزُ الْعَيْنِ (like مِثَالٌ وَمَهْمُوْزُ الْفَاءِ and نَاقِصٌ وَمَهْمُوْزُ اللَّامِ) as having no example."
        },
        {
          "q": "Why aren't further conjugation rules given for verbs like تَوَكَّأَ?",
          "options": [
            "Because they are too difficult",
            "Because such مُرَكَّبٌ verbs remain unchanged — no additional rules apply to them",
            "Because they only occur in poetry",
            "Because they have no ماضي forms"
          ],
          "correct": 1,
          "explanation": "Some مُرَكَّبٌ verbs remain unchanged (e.g. تَوَكَّأَ يَتَوَكَّأُ تَوَكُّؤًا); as there are no additional rules to them, their conjugations are not discussed."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "اِتَّكَأَ (root و ك أ) is which type of مُرَكَّبٌ?",
          "options": [
            "مِثَالٌ وَمَهْمُوْزُ اللَّامِ",
            "مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ",
            "أَجْوَفُ وَمَهْمُوْزُ اللَّامِ",
            "نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ"
          ],
          "correct": 0,
          "explanation": "Its root begins with و (a مثال root) and ends in hamzah (مهموز اللام). In اِتَّكَأَ the و has been assimilated into the ت of بَاب افْتِعَال."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "جَاءَ is listed in the introduction table as an example of…",
          "options": [
            "أَجْوَفُ وَمَهْمُوْزُ اللَّامِ",
            "أَجْوَفُ وَمَهْمُوْزُ الْفَاءِ",
            "نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ",
            "لَفِيْفٌ مَقْرُوْنٌ وَمَهْمُوْزُ الْفَاءِ"
          ],
          "correct": 0,
          "explanation": "جَاءَ (root ج ي أ) has a weak middle letter (أجوف) and a hamzah as its final root letter (مهموز اللام), alongside شَاءَ، بَاءَ، أَجَاءَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of the following is an example of مِثَالٌ وَمُضَاعَفٌ?",
          "options": [
            "وَادَّ",
            "وَطِئَ",
            "وَأَدَ",
            "أَدَّى"
          ],
          "correct": 0,
          "explanation": "وَادَّ (and وَدَّ) combine a و-initial root with a doubled letter. وَطِئَ is مثال ومهموز اللام, وَأَدَ is مثال ومهموز العين, and أَدَّى is ناقص ومهموز الفاء."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The introduction table lists رَأَى، رَاءَى، أَرَى، تَرَاءَى together. What combination are they?",
          "options": [
            "نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ",
            "نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ",
            "أَجْوَفُ وَمَهْمُوْزُ الْعَيْنِ",
            "لَفِيْفٌ مَفْرُوْقٌ وَمَهْمُوْزُ الْعَيْنِ"
          ],
          "correct": 0,
          "explanation": "They are all built on the root ر أ ي: weak final letter (ناقص) with the hamzah as middle root letter (مهموز العين)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What distinguishes لَفِيْفٌ مَقْرُوْنٌ (e.g. أَوَى) from لَفِيْفٌ مَفْرُوْقٌ (e.g. وَأَى)?",
          "options": [
            "In مقرون the two weak letters are adjoined; in مفروق they are separated",
            "مقرون has a hamzah; مفروق does not",
            "مقرون is always passive; مفروق is always active",
            "There is no difference — they are two names for one type"
          ],
          "correct": 0,
          "explanation": "أَوَى (أ و ي) has its two weak letters next to each other (مقرون); وَأَى (و أ ي) has them separated by the hamzah (مفروق)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In which صِيْغَةٌ of أَبَى يَأْبَى does تَخْفِيْفٌ take place in addition to إِعْلَالٌ?",
          "options": [
            "الْمُتَكَلِّمُ of the الْمُضَارِعُ الْمَعْلُوْمُ — آبَى",
            "الْغَائِبُ of the الْمَاضِيْ — أَبَى",
            "الْغَائِبُوْنَ of the الْمُضَارِعُ — يَأْبَوْنَ",
            "الْمُتَكَلِّمُوْنَ of the الْمُضَارِعُ — نَأْبَى"
          ],
          "correct": 0,
          "explanation": "أَأْبَى ('I refuse') carries two hamzahs; تَخْفِيْفٌ merges them into آبَى. The إِعْلَالٌ of ناقص applies throughout the whole تصريف كبير."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The اسْمُ الْفَاعِلِ of the unchanged مُرَكَّبٌ verb تَوَكَّأَ is…",
          "options": [
            "مُتَوَكِّئٌ",
            "مُتَوَكَّأٌ",
            "تَوَكُّؤٌ",
            "مُوَكِّئٌ"
          ],
          "correct": 0,
          "explanation": "تَوَكَّأَ conjugates with no additional changes: اسم الفاعل مُتَوَكِّئٌ, اسم المفعول مُتَوَكَّأٌ."
        }
      ]
    },
    {
      "id": "l2",
      "title": "الْمِثَالُ الْمُرَكَّبُ",
      "subtitle": "مِثَالٌ Combinations — وَأَدَ، اِسْتَيْأَسَ، وَطِئَ، اِتَّكَأَ، وَدَّ، وَادَّ",
      "concepts": [
        {
          "heading": "Part 1: مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ — وَأَدَ (بَابُ ضَرَبَ يَضْرِبُ)",
          "lines": [
            {
              "html": "<bdi>وَأَدَ</bdi> (to bury alive, root <bdi>و أ د</bdi>) begins with <bdi>و</bdi> and has a hamzah as its middle root letter. The rule of <bdi>مِثَالٌ</bdi> applies: the <bdi>و</bdi> is dropped in the <bdi>الْمُضَارِعُ الْمَعْلُوْمُ</bdi> of <bdi>بَاب ضَرَبَ</bdi> (<bdi>يَئِدُ</bdi>, like <bdi>وَعَدَ يَعِدُ</bdi>) and therefore also in the <bdi>الْأَمْرُ</bdi> (<bdi>إِدْ</bdi>) and <bdi>النَّهْيُ</bdi> (<bdi>لَا تَئِدْ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — وَأَدَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "وَأَدَ",
                    "يَئِدُ",
                    "وَأْدًا",
                    "وُئِدَ",
                    "يُوْأَدُ",
                    "وَأْدًا",
                    "إِدْ",
                    "لَا تَئِدْ",
                    "وَائِدٌ",
                    "مَوْءُوْدٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — وَأَدَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "وَأَدَ",
                    "يَئِدُ",
                    "وُئِدَ",
                    "يُوْأَدُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "وَأَدَا",
                    "يَئِدَانِ",
                    "وُئِدَا",
                    "يُوْأَدَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "وَأَدُوْا",
                    "يَئِدُوْنَ",
                    "وُئِدُوْا",
                    "يُوْأَدُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "وَأَدَتْ",
                    "تَئِدُ",
                    "وُئِدَتْ",
                    "تُوْأَدُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "وَأَدَتَا",
                    "تَئِدَانِ",
                    "وُئِدَتَا",
                    "تُوْأَدَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "وَأَدْنَ",
                    "يَئِدْنَ",
                    "وُئِدْنَ",
                    "يُوْأَدْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "وَأَدْتَ",
                    "تَئِدُ",
                    "وُئِدْتَ",
                    "تُوْأَدُ",
                    "إِدْ",
                    "لَا تَئِدْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "وَأَدْتُمَا",
                    "تَئِدَانِ",
                    "وُئِدْتُمَا",
                    "تُوْأَدَانِ",
                    "إِدَا",
                    "لَا تَئِدَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "وَأَدْتُمْ",
                    "تَئِدُوْنَ",
                    "وُئِدْتُمْ",
                    "تُوْأَدُوْنَ",
                    "إِدُوْا",
                    "لَا تَئِدُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "وَأَدْتِ",
                    "تَئِدِيْنَ",
                    "وُئِدْتِ",
                    "تُوْأَدِيْنَ",
                    "إِدِيْ",
                    "لَا تَئِدِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "وَأَدْتُمَا",
                    "تَئِدَانِ",
                    "وُئِدْتُمَا",
                    "تُوْأَدَانِ",
                    "إِدَا",
                    "لَا تَئِدَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "وَأَدْتُنَّ",
                    "تَئِدْنَ",
                    "وُئِدْتُنَّ",
                    "تُوْأَدْنَ",
                    "إِدْنَ",
                    "لَا تَئِدْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "وَأَدْتُ",
                    "أَئِدُ",
                    "وُئِدْتُ",
                    "أُوْأَدُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "وَأَدْنَا",
                    "نَئِدُ",
                    "وُئِدْنَا",
                    "نُوْأَدُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — وَأَدَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "وَائِدٌ",
                    "مَوْءُوْدٌ"
                  ],
                  [
                    "Dual (m)",
                    "وَائِدَانِ",
                    "مَوْءُوْدَانِ"
                  ],
                  [
                    "Plural (m)",
                    "وَائِدُوْنَ",
                    "مَوْءُوْدُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "وَائِدَةٌ",
                    "مَوْءُوْدَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "وَائِدَتَانِ",
                    "مَوْءُوْدَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "وَائِدَاتٌ",
                    "مَوْءُوْدَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يَئِدُ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ من الْمُضَارِعِ الْمَعْلُوْمِ of وَأَدَ — He buries alive", "اِسْمُ الْمَفْعُوْلِ (feminine singular) of وَأَدَ — a buried-alive girl", "الْمُخَاطَبُ من الْأَمْرِ of وَطِئَ — Tread! (m/s)", "الْغَائِبُ من الْمَاضِي الْمَجْهُوْلِ of اِتَّكَأَ — It was leant upon"],
            "correct": 0
          }
        },
        {
          "heading": "Part 1 (continued): اِسْتَيْأَسَ — (X) بَاب اسْتِفْعَال",
          "lines": [
            {
              "html": "<bdi>اِسْتَيْأَسَ</bdi> (to give up hope) is <bdi>مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ</bdi> in <bdi>بَاب اسْتِفْعَال</bdi>. Its conjugation follows the sound pattern of <bdi>اسْتِفْعَال</bdi>; in the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> the <bdi>ي</bdi> becomes <bdi>و</bdi> after the dammah: <bdi>اُسْتُوْئِسَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِسْتَيْأَسَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِسْتَيْأَسَ",
                    "يَسْتَيْئِسُ",
                    "اِسْتِيْئَاسًا",
                    "اُسْتُوْئِسَ",
                    "يُسْتَيْأَسُ",
                    "اِسْتِيْئَاسًا",
                    "اِسْتَيْئِسْ",
                    "لَا تَسْتَيْئِسْ",
                    "مُسْتَيْئِسٌ",
                    "مُسْتَيْأَسٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِسْتَيْأَسَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِسْتَيْأَسَ",
                    "يَسْتَيْئِسُ",
                    "اُسْتُوْئِسَ",
                    "يُسْتَيْأَسُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِسْتَيْأَسَا",
                    "يَسْتَيْئِسَانِ",
                    "اُسْتُوْئِسَا",
                    "يُسْتَيْأَسَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِسْتَيْأَسُوْا",
                    "يَسْتَيْئِسُوْنَ",
                    "اُسْتُوْئِسُوْا",
                    "يُسْتَيْأَسُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِسْتَيْأَسَتْ",
                    "تَسْتَيْئِسُ",
                    "اُسْتُوْئِسَتْ",
                    "تُسْتَيْأَسُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِسْتَيْأَسَتَا",
                    "تَسْتَيْئِسَانِ",
                    "اُسْتُوْئِسَتَا",
                    "تُسْتَيْأَسَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِسْتَيْأَسْنَ",
                    "يَسْتَيْئِسْنَ",
                    "اُسْتُوْئِسْنَ",
                    "يُسْتَيْأَسْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِسْتَيْأَسْتَ",
                    "تَسْتَيْئِسُ",
                    "اُسْتُوْئِسْتَ",
                    "تُسْتَيْأَسُ",
                    "اِسْتَيْئِسْ",
                    "لَا تَسْتَيْئِسْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْتَيْأَسْتُمَا",
                    "تَسْتَيْئِسَانِ",
                    "اُسْتُوْئِسْتُمَا",
                    "تُسْتَيْأَسَانِ",
                    "اِسْتَيْئِسَا",
                    "لَا تَسْتَيْئِسَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْتَيْأَسْتُمْ",
                    "تَسْتَيْئِسُوْنَ",
                    "اُسْتُوْئِسْتُمْ",
                    "تُسْتَيْأَسُوْنَ",
                    "اِسْتَيْئِسُوْا",
                    "لَا تَسْتَيْئِسُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْتَيْأَسْتِ",
                    "تَسْتَيْئِسِيْنَ",
                    "اُسْتُوْئِسْتِ",
                    "تُسْتَيْأَسِيْنَ",
                    "اِسْتَيْئِسِيْ",
                    "لَا تَسْتَيْئِسِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْتَيْأَسْتُمَا",
                    "تَسْتَيْئِسَانِ",
                    "اُسْتُوْئِسْتُمَا",
                    "تُسْتَيْأَسَانِ",
                    "اِسْتَيْئِسَا",
                    "لَا تَسْتَيْئِسَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْتَيْأَسْتُنَّ",
                    "تَسْتَيْئِسْنَ",
                    "اُسْتُوْئِسْتُنَّ",
                    "تُسْتَيْأَسْنَ",
                    "اِسْتَيْئِسْنَ",
                    "لَا تَسْتَيْئِسْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِسْتَيْأَسْتُ",
                    "أَسْتَيْئِسُ",
                    "اُسْتُوْئِسْتُ",
                    "أُسْتَيْأَسُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِسْتَيْأَسْنَا",
                    "نَسْتَيْئِسُ",
                    "اُسْتُوْئِسْنَا",
                    "نُسْتَيْأَسُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — اِسْتَيْأَسَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُسْتَيْئِسٌ",
                    "مُسْتَيْأَسٌ"
                  ],
                  [
                    "Dual (m)",
                    "مُسْتَيْئِسَانِ",
                    "مُسْتَيْأَسَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُسْتَيْئِسُوْنَ",
                    "مُسْتَيْأَسُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُسْتَيْئِسَةٌ",
                    "مُسْتَيْأَسَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُسْتَيْئِسَتَانِ",
                    "مُسْتَيْأَسَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُسْتَيْئِسَاتٌ",
                    "مُسْتَيْأَسَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "لَا تَسْتَيْئِسْ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ من النَّهْيِ of اِسْتَيْأَسَ — Do not give up hope! (m/s)", "الْغَائِبُ من الْمُضَارِعِ الْمَعْلُوْمِ of وَأَدَ — He buries alive", "اِسْمُ الْمَفْعُوْلِ (feminine singular) of وَأَدَ — a buried-alive girl", "الْمُخَاطَبُ من الْأَمْرِ of وَطِئَ — Tread! (m/s)"],
            "correct": 0
          }
        },
        {
          "heading": "Part 2: مِثَالٌ وَمَهْمُوْزُ اللَّامِ — وَطِئَ (بَابُ سَمِعَ يَسْمَعُ)",
          "lines": [
            {
              "html": "<bdi>وَطِئَ</bdi> (to tread on, root <bdi>و ط أ</bdi>) begins with <bdi>و</bdi> and ends in a hamzah. The <bdi>و</bdi> drops in the <bdi>الْمُضَارِعُ الْمَعْلُوْمُ</bdi> (<bdi>يَطَأُ</bdi>) and consequently in the <bdi>الْأَمْرُ</bdi>, which is reduced to <bdi>طَأْ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — وَطِئَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "وَطِئَ",
                    "يَطَأُ",
                    "وَطْأً",
                    "وُطِئَ",
                    "يُوْطَأُ",
                    "وَطْأً",
                    "طَأْ",
                    "لَا تَطَأْ",
                    "وَاطِئٌ",
                    "مَوْطُوْءٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — وَطِئَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "وَطِئَ",
                    "يَطَأُ",
                    "وُطِئَ",
                    "يُوْطَأُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "وَطِئَا",
                    "يَطَآنِ",
                    "وُطِئَا",
                    "يُوْطَآنِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "وَطِئُوْا",
                    "يَطَؤُوْنَ",
                    "وُطِئُوْا",
                    "يُوْطَؤُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "وَطِئَتْ",
                    "تَطَأُ",
                    "وُطِئَتْ",
                    "تُوْطَأُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "وَطِئَتَا",
                    "تَطَآنِ",
                    "وُطِئَتَا",
                    "تُوْطَآنِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "وَطِئْنَ",
                    "يَطَأْنَ",
                    "وُطِئْنَ",
                    "يُوْطَأْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "وَطِئْتَ",
                    "تَطَأُ",
                    "وُطِئْتَ",
                    "تُوْطَأُ",
                    "طَأْ",
                    "لَا تَطَأْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "وَطِئْتُمَا",
                    "تَطَآنِ",
                    "وُطِئْتُمَا",
                    "تُوْطَآنِ",
                    "طَآ",
                    "لَا تَطَآ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "وَطِئْتُمْ",
                    "تَطَؤُوْنَ",
                    "وُطِئْتُمْ",
                    "تُوْطَؤُوْنَ",
                    "طَؤُوْا",
                    "لَا تَطَؤُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "وَطِئْتِ",
                    "تَطَئِيْنَ",
                    "وُطِئْتِ",
                    "تُوْطَئِيْنَ",
                    "طَئِيْ",
                    "لَا تَطَئِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "وَطِئْتُمَا",
                    "تَطَآنِ",
                    "وُطِئْتُمَا",
                    "تُوْطَآنِ",
                    "طَآ",
                    "لَا تَطَآ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "وَطِئْتُنَّ",
                    "تَطَأْنَ",
                    "وُطِئْتُنَّ",
                    "تُوْطَأْنَ",
                    "طَأْنَ",
                    "لَا تَطَأْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "وَطِئْتُ",
                    "أَطَأُ",
                    "وُطِئْتُ",
                    "أُوْطَأُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "وَطِئْنَا",
                    "نَطَأُ",
                    "وُطِئْنَا",
                    "نُوْطَأُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — وَطِئَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "وَاطِئٌ",
                    "مَوْطُوْءٌ"
                  ],
                  [
                    "Dual (m)",
                    "وَاطِئَانِ",
                    "مَوْطُوْءَانِ"
                  ],
                  [
                    "Plural (m)",
                    "وَاطِئُوْنَ",
                    "مَوْطُوْءُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "وَاطِئَةٌ",
                    "مَوْطُوْءَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "وَاطِئَتَانِ",
                    "مَوْطُوْءَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "وَاطِئَاتٌ",
                    "مَوْطُوْءَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "طَأْ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ من الْأَمْرِ of وَطِئَ — Tread! (m/s)", "الْغَائِبُ من الْمَاضِي الْمَجْهُوْلِ of اِتَّكَأَ — It was leant upon", "الْمُخَاطَبَاتُ من الْأَمْرِ of وَدَّ — Love! (f/p)", "الْغَائِبُ من الْمَاضِي الْمَجْهُوْلِ of وَادَّ — He was befriended"],
            "correct": 0
          }
        },
        {
          "heading": "Part 2 (continued): اِتَّكَأَ — (VIII) بَاب افْتِعَال",
          "lines": [
            {
              "html": "<bdi>اِتَّكَأَ</bdi> (to lean, recline, root <bdi>و ك أ</bdi>) is <bdi>مِثَالٌ وَمَهْمُوْزُ اللَّامِ</bdi> in <bdi>بَاب افْتِعَال</bdi>. The rule of <bdi>مِثَالٌ</bdi> in <bdi>افْتِعَال</bdi> applies: the <bdi>و</bdi> changes into <bdi>ت</bdi> and is assimilated into the <bdi>ت</bdi> of the <bdi>باب</bdi>, giving the doubled <bdi>تّ</bdi> of <bdi>اِتَّكَأَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِتَّكَأَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِتَّكَأَ",
                    "يَتَّكِئُ",
                    "اِتِّكَاءً",
                    "اُتُّكِئَ",
                    "يُتَّكَأُ",
                    "اِتِّكَاءً",
                    "اِتَّكِئْ",
                    "لَا تَتَّكِئْ",
                    "مُتَّكِئٌ",
                    "مُتَّكَأٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِتَّكَأَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِتَّكَأَ",
                    "يَتَّكِئُ",
                    "اُتُّكِئَ",
                    "يُتَّكَأُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِتَّكَآ",
                    "يَتَّكِئَانِ",
                    "اُتُّكِئَا",
                    "يُتَّكَآنِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِتَّكَؤُوْا",
                    "يَتَّكِئُوْنَ",
                    "اُتُّكِئُوْا",
                    "يُتَّكَؤُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِتَّكَأَتْ",
                    "تَتَّكِئُ",
                    "اُتُّكِئَتْ",
                    "تُتَّكَأُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِتَّكَأَتَا",
                    "تَتَّكِئَانِ",
                    "اُتُّكِئَتَا",
                    "تُتَّكَآنِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِتَّكَأْنَ",
                    "يَتَّكِئْنَ",
                    "اُتُّكِئْنَ",
                    "يُتَّكَأْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِتَّكَأْتَ",
                    "تَتَّكِئُ",
                    "اُتُّكِئْتَ",
                    "تُتَّكَأُ",
                    "اِتَّكِئْ",
                    "لَا تَتَّكِئْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِتَّكَأْتُمَا",
                    "تَتَّكِئَانِ",
                    "اُتُّكِئْتُمَا",
                    "تُتَّكَآنِ",
                    "اِتَّكِئَا",
                    "لَا تَتَّكِئَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِتَّكَأْتُمْ",
                    "تَتَّكِئُوْنَ",
                    "اُتُّكِئْتُمْ",
                    "تُتَّكَؤُوْنَ",
                    "اِتَّكِئُوْا",
                    "لَا تَتَّكِئُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِتَّكَأْتِ",
                    "تَتَّكِئِيْنَ",
                    "اُتُّكِئْتِ",
                    "تُتَّكَئِيْنَ",
                    "اِتَّكِئِيْ",
                    "لَا تَتَّكِئِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِتَّكَأْتُمَا",
                    "تَتَّكِئَانِ",
                    "اُتُّكِئْتُمَا",
                    "تُتَّكَآنِ",
                    "اِتَّكِئَا",
                    "لَا تَتَّكِئَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِتَّكَأْتُنَّ",
                    "تَتَّكِئْنَ",
                    "اُتُّكِئْتُنَّ",
                    "تُتَّكَأْنَ",
                    "اِتَّكِئْنَ",
                    "لَا تَتَّكِئْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِتَّكَأْتُ",
                    "أَتَّكِئُ",
                    "اُتُّكِئْتُ",
                    "أُتَّكَأُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِتَّكَأْنَا",
                    "نَتَّكِئُ",
                    "اُتُّكِئْنَا",
                    "نُتَّكَأُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — اِتَّكَأَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُتَّكِئٌ",
                    "مُتَّكَأٌ"
                  ],
                  [
                    "Dual (m)",
                    "مُتَّكِئَانِ",
                    "مُتَّكَآنِ"
                  ],
                  [
                    "Plural (m)",
                    "مُتَّكِئُوْنَ",
                    "مُتَّكَؤُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُتَّكِئَةٌ",
                    "مُتَّكَأَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُتَّكِئَتَانِ",
                    "مُتَّكَأَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُتَّكِئَاتٌ",
                    "مُتَّكَآتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اُتُّكِئَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ من الْمَاضِي الْمَجْهُوْلِ of اِتَّكَأَ — It was leant upon", "الْمُخَاطَبَاتُ من الْأَمْرِ of وَدَّ — Love! (f/p)", "الْغَائِبُ من الْمَاضِي الْمَجْهُوْلِ of وَادَّ — He was befriended", "الْمُخَاطَبُ من النَّهْيِ of اِسْتَيْأَسَ — Do not give up hope! (m/s)"],
            "correct": 0
          }
        },
        {
          "heading": "Part 3: مِثَالٌ وَمُضَاعَفٌ — وَدَّ (بَابُ سَمِعَ يَسْمَعُ)",
          "lines": [
            {
              "html": "<bdi>وَدَّ</bdi> (to love, root <bdi>و د د</bdi>) combines a <bdi>و</bdi>-initial root with a doubled letter. The <bdi>إِدْغَامٌ</bdi> (assimilation) of <bdi>مُضَاعَفٌ</bdi> applies (<bdi>وَدَّ، يَوَدُّ</bdi>); in the feminine plural forms the <bdi>إدغام</bdi> is broken (<bdi>وَدِدْنَ، يَوْدَدْنَ</bdi>).",
              "list": false
            },
            {
              "html": "In the <bdi>الْأَمْرُ</bdi> of <bdi>الْمُخَاطَبَاتُ</bdi>, the <bdi>إدغام</bdi> is broken (<bdi>تَوْدَدْنَ</bdi> → <bdi>وْدَدْنَ</bdi>) and a <bdi>هَمْزَةُ الْوَصْلِ</bdi> is required; the <bdi>و</bdi> then changes into <bdi>ي</bdi> after the kasrah: <bdi>اِيْدَدْنَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — وَدَّ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "وَدَّ",
                    "يَوَدُّ",
                    "وُدًّا",
                    "وُدَّ",
                    "يُوَدُّ",
                    "وُدًّا",
                    "وَدَّ",
                    "لَا تَوَدَّ",
                    "وَادٌّ",
                    "مَوْدُوْدٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — وَدَّ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "وَدَّ",
                    "يَوَدُّ",
                    "وُدَّ",
                    "يُوَدُّ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "وَدَّا",
                    "يَوَدَّانِ",
                    "وُدَّا",
                    "يُوَدَّانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "وَدُّوْا",
                    "يَوَدُّوْنَ",
                    "وُدُّوْا",
                    "يُوَدُّوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "وَدَّتْ",
                    "تَوَدُّ",
                    "وُدَّتْ",
                    "تُوَدُّ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "وَدَّتَا",
                    "تَوَدَّانِ",
                    "وُدَّتَا",
                    "تُوَدَّانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "وَدِدْنَ",
                    "يَوْدَدْنَ",
                    "وُدِدْنَ",
                    "يُوْدَدْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "وَدِدْتَ",
                    "تَوَدُّ",
                    "وُدِدْتَ",
                    "تُوَدُّ",
                    "وَدَّ",
                    "لَا تَوَدَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "وَدِدْتُمَا",
                    "تَوَدَّانِ",
                    "وُدِدْتُمَا",
                    "تُوَدَّانِ",
                    "وَدَّا",
                    "لَا تَوَدَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "وَدِدْتُمْ",
                    "تَوَدُّوْنَ",
                    "وُدِدْتُمْ",
                    "تُوَدُّوْنَ",
                    "وَدُّوْا",
                    "لَا تَوَدُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "وَدِدْتِ",
                    "تَوَدِّيْنَ",
                    "وُدِدْتِ",
                    "تُوَدِّيْنَ",
                    "وَدِّيْ",
                    "لَا تَوَدِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "وَدِدْتُمَا",
                    "تَوَدَّانِ",
                    "وُدِدْتُمَا",
                    "تُوَدَّانِ",
                    "وَدَّا",
                    "لَا تَوَدَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "وَدِدْتُنَّ",
                    "تَوْدَدْنَ",
                    "وُدِدْتُنَّ",
                    "تُوْدَدْنَ",
                    "اِيْدَدْنَ",
                    "لَا تَوْدَدْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "وَدِدْتُ",
                    "أَوَدُّ",
                    "وُدِدْتُ",
                    "أُوَدُّ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "وَدِدْنَا",
                    "نَوَدُّ",
                    "وُدِدْنَا",
                    "نُوَدُّ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — وَدَّ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "وَادٌّ",
                    "مَوْدُوْدٌ"
                  ],
                  [
                    "Dual (m)",
                    "وَادَّانِ",
                    "مَوْدُوْدَانِ"
                  ],
                  [
                    "Plural (m)",
                    "وَادُّوْنَ",
                    "مَوْدُوْدُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "وَادَّةٌ",
                    "مَوْدُوْدَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "وَادَّتَانِ",
                    "مَوْدُوْدَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "وَادَّاتٌ",
                    "مَوْدُوْدَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اِيْدَدْنَ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبَاتُ من الْأَمْرِ of وَدَّ — Love! (f/p)", "الْغَائِبُ من الْمَاضِي الْمَجْهُوْلِ of وَادَّ — He was befriended", "الْمُخَاطَبُ من النَّهْيِ of اِسْتَيْأَسَ — Do not give up hope! (m/s)", "الْغَائِبُ من الْمُضَارِعِ الْمَعْلُوْمِ of وَأَدَ — He buries alive"],
            "correct": 0
          }
        },
        {
          "heading": "Part 3 (continued): وَادَّ — (III) بَاب مُفَاعَلَة",
          "lines": [
            {
              "html": "<bdi>وَادَّ</bdi> (to make friends) is <bdi>مِثَالٌ وَمُضَاعَفٌ</bdi> in <bdi>بَاب مُفَاعَلَة</bdi>. In the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> the alif of <bdi>مُفَاعَلَة</bdi> changes into <bdi>و</bdi> after the dammah: <bdi>وُوْدَّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — وَادَّ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "وَادَّ",
                    "يُوَادُّ",
                    "مُوَادَّةً",
                    "وُوْدَّ",
                    "يُوَادُّ",
                    "مُوَادَّةً",
                    "وَادَّ",
                    "لَا تُوَادَّ",
                    "مُوَادٌّ",
                    "مُوَادٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — وَادَّ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "وَادَّ",
                    "يُوَادُّ",
                    "وُوْدَّ",
                    "يُوَادُّ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "وَادَّا",
                    "يُوَادَّانِ",
                    "وُوْدَّا",
                    "يُوَادَّانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "وَادُّوْا",
                    "يُوَادُّوْنَ",
                    "وُوْدُّوْا",
                    "يُوَادُّوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "وَادَّتْ",
                    "تُوَادُّ",
                    "وُوْدَّتْ",
                    "تُوَادُّ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "وَادَّتَا",
                    "تُوَادَّانِ",
                    "وُوْدَّتَا",
                    "تُوَادَّانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "وَادَدْنَ",
                    "يُوَادِدْنَ",
                    "وُوْدِدْنَ",
                    "يُوَادَدْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "وَادَدْتَ",
                    "تُوَادُّ",
                    "وُوْدِدْتَ",
                    "تُوَادُّ",
                    "وَادَّ",
                    "لَا تُوَادَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "وَادَدْتُمَا",
                    "تُوَادَّانِ",
                    "وُوْدِدْتُمَا",
                    "تُوَادَّانِ",
                    "وَادَّا",
                    "لَا تُوَادَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "وَادَدْتُمْ",
                    "تُوَادُّوْنَ",
                    "وُوْدِدْتُمْ",
                    "تُوَادُّوْنَ",
                    "وَادُّوْا",
                    "لَا تُوَادُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "وَادَدْتِ",
                    "تُوَادِّيْنَ",
                    "وُوْدِدْتِ",
                    "تُوَادِّيْنَ",
                    "وَادِّيْ",
                    "لَا تُوَادِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "وَادَدْتُمَا",
                    "تُوَادَّانِ",
                    "وُوْدِدْتُمَا",
                    "تُوَادَّانِ",
                    "وَادَّا",
                    "لَا تُوَادَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "وَادَدْتُنَّ",
                    "تُوَادِدْنَ",
                    "وُوْدِدْتُنَّ",
                    "تُوَادَدْنَ",
                    "وَادِدْنَ",
                    "لَا تُوَادِدْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "وَادَدْتُ",
                    "أُوَادُّ",
                    "وُوْدِدْتُ",
                    "أُوَادُّ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "وَادَدْنَا",
                    "نُوَادُّ",
                    "وُوْدِدْنَا",
                    "نُوَادُّ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — وَادَّ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُوَادٌّ",
                    "مُوَادٌّ"
                  ],
                  [
                    "Dual (m)",
                    "مُوَادَّانِ",
                    "مُوَادَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُوَادُّوْنَ",
                    "مُوَادُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُوَادَّةٌ",
                    "مُوَادَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُوَادَّتَانِ",
                    "مُوَادَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُوَادَّاتٌ",
                    "مُوَادَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "وُوْدَّ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ من الْمَاضِي الْمَجْهُوْلِ of وَادَّ — He was befriended", "الْمُخَاطَبُ من النَّهْيِ of اِسْتَيْأَسَ — Do not give up hope! (m/s)", "الْغَائِبُ من الْمُضَارِعِ الْمَعْلُوْمِ of وَأَدَ — He buries alive", "اِسْمُ الْمَفْعُوْلِ (feminine singular) of وَأَدَ — a buried-alive girl"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 1–3: مِثَالٌ Combinations",
        "rows": [
          {
            "label": "مثال ومهموز العين — باب ضرب; the و drops in the مضارع",
            "arabic": "وَأَدَ يَئِدُ وَأْدًا",
            "meaning": "مثال ومهموز العين — باب ضرب; the و drops in the مضارع",
            "unlockAt": 0
          },
          {
            "label": "مثال ومهموز العين — باب استفعال; passive اُسْتُوْئِسَ",
            "arabic": "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "meaning": "مثال ومهموز العين — باب استفعال; passive اُسْتُوْئِسَ",
            "unlockAt": 1
          },
          {
            "label": "مثال ومهموز اللام — باب سمع; أمر is طَأْ",
            "arabic": "وَطِئَ يَطَأُ وَطْأً",
            "meaning": "مثال ومهموز اللام — باب سمع; أمر is طَأْ",
            "unlockAt": 2
          },
          {
            "label": "مثال ومهموز اللام — باب افتعال; و assimilated into تّ",
            "arabic": "اِتَّكَأَ يَتَّكِئُ",
            "meaning": "مثال ومهموز اللام — باب افتعال; و assimilated into تّ",
            "unlockAt": 3
          },
          {
            "label": "مثال ومضاعف — باب سمع; أمر مخاطبات is اِيْدَدْنَ",
            "arabic": "وَدَّ يَوَدُّ وُدًّا",
            "meaning": "مثال ومضاعف — باب سمع; أمر مخاطبات is اِيْدَدْنَ",
            "unlockAt": 4
          },
          {
            "label": "مثال ومضاعف — باب مفاعلة; passive ماضي is وُوْدَّ",
            "arabic": "وَادَّ يُوَادُّ مُوَادَّةً",
            "meaning": "مثال ومضاعف — باب مفاعلة; passive ماضي is وُوْدَّ",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the الْمُضَارِعُ الْمَعْلُوْمُ of وَأَدَ?",
          "options": [
            "يَوْأَدُ",
            "يَئِدُ",
            "يُوْأَدُ",
            "يَأْوِدُ"
          ],
          "correct": 1,
          "explanation": "وَأَدَ is a مثال in باب ضرب, so the و drops in the مضارع: يَئِدُ (like وَعَدَ يَعِدُ). يُوْأَدُ is the passive مضارع."
        },
        {
          "q": "The الْأَمْرُ of وَطِئَ يَطَأُ is…",
          "options": [
            "اِوْطَأْ",
            "طَأْ",
            "أَطِئْ",
            "اِيْطَأْ"
          ],
          "correct": 1,
          "explanation": "The مضارع has already lost the و (يَطَأُ); dropping the prefix leaves طَأ with a sukun: طَأْ."
        },
        {
          "q": "In اِتَّكَأَ, what happened to the و of the root و ك أ?",
          "options": [
            "It was dropped without replacement",
            "It changed into ت and was assimilated into the ت of بَاب افْتِعَال",
            "It changed into a hamzah",
            "It changed into an alif"
          ],
          "correct": 1,
          "explanation": "The rule of مثال in باب افتعال: the و becomes ت and merges with the باب's ت, giving اِتَّكَأَ يَتَّكِئُ."
        },
        {
          "q": "Which صِيْغَةٌ of the الْأَمْرُ of وَدَّ is اِيْدَدْنَ?",
          "options": [
            "الْمُخَاطَبَاتُ — Love! (f/p)",
            "الْمُخَاطَبُوْنَ — Love! (m/p)",
            "الْمُخَاطَبَةُ — Love! (f/s)",
            "الْغَائِبَاتُ — They (f/p) loved"
          ],
          "correct": 0,
          "explanation": "The feminine plural breaks the إدغام (ـدَدْنَ), needs a همزة الوصل, and the و becomes ي after the kasrah: اِيْدَدْنَ."
        },
        {
          "q": "What is the الْمَاضِي الْمَجْهُوْلُ of وَادَّ?",
          "options": [
            "وُدَّ",
            "وُوْدَّ",
            "وَادَّ",
            "أُوْدِدَ"
          ],
          "correct": 1,
          "explanation": "In the passive ماضي of باب مفاعلة the alif changes into و after the dammah: وُوْدَّ. وُدَّ is the passive of وَدَّ (باب سمع)."
        },
        {
          "q": "What is the الْمَاضِي الْمَجْهُوْلُ of اِسْتَيْأَسَ?",
          "options": [
            "اُسْتُيْئِسَ",
            "اُسْتُوْئِسَ",
            "اِسْتَيْأَسَ",
            "اُسْتِيْئَاسٌ"
          ],
          "correct": 1,
          "explanation": "The ي changes into و after the dammah of the passive: اُسْتُوْئِسَ يُسْتَيْأَسُ."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "وُئِدَتْ means…",
          "options": [
            "She was buried alive",
            "She buried alive",
            "You (f/s) buried alive",
            "She was frightened"
          ],
          "correct": 0,
          "explanation": "وُئِدَ is the الْمَاضِي الْمَجْهُوْلُ of وَأَدَ; with the feminine sign ت it is الْغَائِبَةُ: 'She was buried alive'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The النَّهْيُ of وَأَدَ for الْمُخَاطَبُ is…",
          "options": [
            "لَا تَئِدْ",
            "لَا تُوْأَدْ",
            "لَا تَوْأَدْ",
            "لَا تَطَأْ"
          ],
          "correct": 0,
          "explanation": "The مضارع يَئِدُ gives تَئِدُ for the second person; in the نهي it becomes لَا تَئِدْ. لَا تَطَأْ is from وَطِئَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of the following is the اِسْمُ الْفَاعِلِ of اِتَّكَأَ?",
          "options": [
            "مُتَّكِئٌ",
            "مُتَّكَأٌ",
            "وَاكِئٌ",
            "مُوْتَكِئٌ"
          ],
          "correct": 0,
          "explanation": "بَاب افْتِعَال: اسم الفاعل مُتَّكِئٌ (with kasrah), اسم المفعول مُتَّكَأٌ (with fathah)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "يَوَدُّ means…",
          "options": [
            "He loves",
            "He was loved",
            "Love! (m/s)",
            "He makes friends"
          ],
          "correct": 0,
          "explanation": "وَدَّ يَوَدُّ (باب سمع) = to love; يَوَدُّ is الْغَائِبُ of the مضارع المعلوم. يُوَادُّ is 'he makes friends' (from وَادَّ)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In the الْمَاضِيْ of وَدَّ, which صِيْغَةٌ breaks the إِدْغَامٌ?",
          "options": [
            "الْغَائِبَاتُ and all the forms after it (وَدِدْنَ، وَدِدْتَ…)",
            "الْغَائِبُ only",
            "الْغَائِبَانِ and الْغَائِبُوْنَ",
            "None — the إدغام is kept throughout"
          ],
          "correct": 0,
          "explanation": "When the pronoun begins with a consonant (نَ، تَ، تُمَا…), the إدغام is broken: وَدِدْنَ، وَدِدْتَ، وَدِدْتُ، وَدِدْنَا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of وَادَّ are…",
          "options": [
            "Both مُوَادٌّ — they share the same form",
            "مُوَادٌّ and مَوْدُوْدٌ",
            "وَادٌّ and مُوَادٌّ",
            "مُوَادِدٌ and مُوَادَدٌ"
          ],
          "correct": 0,
          "explanation": "Because of the إدغام, the فاعل (مُوَادِدٌ) and مفعول (مُوَادَدٌ) both surface as مُوَادٌّ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر وَأْدًا, write الْغَائِبَانِ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "وَأَدَا",
            "وَأَدُوْا",
            "وُئِدَا",
            "وَأَدَتَا"
          ],
          "correct": 0,
          "explanation": "The verb is وَأَدَ; third person masculine dual of the active ماضي: وَأَدَا. وُئِدَا is the passive; وَأَدَتَا is the feminine dual."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر وَأْدًا, write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَوْءُوْدُوْنَ",
            "مَوْءُوْدَاتٌ",
            "وَائِدُوْنَ",
            "مَوْءُوْدَانِ"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of وَأَدَ is مَوْءُوْدٌ; masculine plural: مَوْءُوْدُوْنَ. وَائِدُوْنَ is the فاعل plural."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر وَأْرًا, write الْمُتَكَلِّمُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ.",
          "options": [
            "وُئِرْنَا",
            "وَأَرْنَا",
            "وُئِرْنَ",
            "نُوْأَرُ"
          ],
          "correct": 0,
          "explanation": "The verb is وَأَرَ (to frighten), passive ماضي وُئِرَ; 'We were frightened' = وُئِرْنَا. وُئِرْنَ is 'They (f/p) were frightened'."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر مُوَادَّةً, write الْمُخَاطَبُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تُوَادَّ",
            "لَا تَوَدَّ",
            "لَا تُوَادِدْنَ",
            "لَا تَئِدْ"
          ],
          "correct": 0,
          "explanation": "The verb is وَادَّ يُوَادُّ; the نهي of the second person masculine singular is لَا تُوَادَّ. لَا تَوَدَّ belongs to وَدَّ."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "The Quranic word الْمَوْءُوْدَةُ (Surah at-Takwir) is which form of وَأَدَ?",
          "options": [
            "اِسْمُ الْمَفْعُوْلِ, feminine singular — the girl buried alive",
            "اِسْمُ الْفَاعِلِ, feminine singular — the one who buries alive",
            "الْمَاضِي الْمَجْهُوْلُ — she was buried alive",
            "الْمَصْدَرُ — burying alive"
          ],
          "correct": 0,
          "explanation": "الْمَوْءُوْدَةُ is the feminine singular اسم مفعول of وَأَدَ يَئِدُ وَأْدًا (مثال ومهموز العين)."
        },
        {
          "title": "to bury alive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bury alive\"?",
          "options": [
            "وَأَدَ يَئِدُ",
            "وَأَرَ يَئِرُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "وَطِئَ يَطَأُ"
          ],
          "correct": 0
        },
        {
          "title": "to bury alive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَأَدَ يَئِدُ mean?",
          "options": [
            "to bury alive",
            "to frighten",
            "to give up hope",
            "to tread on"
          ],
          "correct": 0
        },
        {
          "title": "to bury alive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَأَدَ يَئِدُ?",
          "options": [
            "وَأْدًا",
            "وَأْرًا",
            "اِسْتِيْئَاسًا",
            "وَطْأً"
          ],
          "correct": 0
        },
        {
          "title": "to frighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to frighten\"?",
          "options": [
            "وَأَرَ يَئِرُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "وَطِئَ يَطَأُ",
            "اِتَّكَأَ يَتَّكِئُ"
          ],
          "correct": 0
        },
        {
          "title": "to frighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَأَرَ يَئِرُ mean?",
          "options": [
            "to frighten",
            "to give up hope",
            "to tread on",
            "to lean, recline"
          ],
          "correct": 0
        },
        {
          "title": "to frighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَأَرَ يَئِرُ?",
          "options": [
            "وَأْرًا",
            "اِسْتِيْئَاسًا",
            "وَطْأً",
            "اِتِّكَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give up hope\"?",
          "options": [
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "وَطِئَ يَطَأُ",
            "اِتَّكَأَ يَتَّكِئُ",
            "وَدَّ يَوَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْأَسَ يَسْتَيْئِسُ mean?",
          "options": [
            "to give up hope",
            "to tread on",
            "to lean, recline",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْأَسَ يَسْتَيْئِسُ?",
          "options": [
            "اِسْتِيْئَاسًا",
            "وَطْأً",
            "اِتِّكَاءً",
            "وُدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to tread on",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tread on\"?",
          "options": [
            "وَطِئَ يَطَأُ",
            "اِتَّكَأَ يَتَّكِئُ",
            "وَدَّ يَوَدُّ",
            "وَادَّ يُوَادُّ"
          ],
          "correct": 0
        },
        {
          "title": "to tread on",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَطِئَ يَطَأُ mean?",
          "options": [
            "to tread on",
            "to lean, recline",
            "to love",
            "to make friends"
          ],
          "correct": 0
        },
        {
          "title": "to tread on (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَطِئَ يَطَأُ?",
          "options": [
            "وَطْأً",
            "اِتِّكَاءً",
            "وُدًّا",
            "مُوَادَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to lean, recline",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lean, recline\"?",
          "options": [
            "اِتَّكَأَ يَتَّكِئُ",
            "وَدَّ يَوَدُّ",
            "وَادَّ يُوَادُّ",
            "وَأَدَ يَئِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to lean, recline",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّكَأَ يَتَّكِئُ mean?",
          "options": [
            "to lean, recline",
            "to love",
            "to make friends",
            "to bury alive"
          ],
          "correct": 0
        },
        {
          "title": "to lean, recline (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّكَأَ يَتَّكِئُ?",
          "options": [
            "اِتِّكَاءً",
            "وُدًّا",
            "مُوَادَّةً",
            "وَأْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to love\"?",
          "options": [
            "وَدَّ يَوَدُّ",
            "وَادَّ يُوَادُّ",
            "وَأَدَ يَئِدُ",
            "وَأَرَ يَئِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَدَّ يَوَدُّ mean?",
          "options": [
            "to love",
            "to make friends",
            "to bury alive",
            "to frighten"
          ],
          "correct": 0
        },
        {
          "title": "to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَدَّ يَوَدُّ?",
          "options": [
            "وُدًّا",
            "مُوَادَّةً",
            "وَأْدًا",
            "وَأْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to make friends",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make friends\"?",
          "options": [
            "وَادَّ يُوَادُّ",
            "وَأَدَ يَئِدُ",
            "وَأَرَ يَئِرُ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to make friends",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَادَّ يُوَادُّ mean?",
          "options": [
            "to make friends",
            "to bury alive",
            "to frighten",
            "to give up hope"
          ],
          "correct": 0
        },
        {
          "title": "to make friends (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَادَّ يُوَادُّ?",
          "options": [
            "مُوَادَّةً",
            "وَأْدًا",
            "وَأْرًا",
            "اِسْتِيْئَاسًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "الْأَجْوَفُ الْمُرَكَّبُ",
      "subtitle": "أَجْوَفُ Combinations — آدَ، آلَ، شَاءَ، جَاءَ، بَاءَ، أَجَاءَ",
      "concepts": [
        {
          "heading": "Part 4: أَجْوَفُ وَمَهْمُوْزُ الْفَاءِ — آدَ (بَابُ ضَرَبَ يَضْرِبُ)",
          "lines": [
            {
              "html": "<bdi>آدَ</bdi> (to be strong, root <bdi>أ ي د</bdi>) has a hamzah as its <bdi>فَاءُ الْكَلِمَةِ</bdi> and a weak <bdi>ي</bdi> as its <bdi>عَيْنُ الْكَلِمَةِ</bdi> — so both the rules of <bdi>الْمَهْمُوْزُ</bdi> and the rules of <bdi>الْأَجْوَفُ</bdi> apply at once. In the <bdi>الْمَاضِيْ</bdi> the two fathahs <bdi>أَيَدَ</bdi> give <bdi>أَادَ</bdi>, and <bdi>فَتْحَةٌ</bdi> + <bdi>أَلِفٌ</bdi> becomes a <bdi>مَدَّةٌ</bdi>: <bdi>آدَ</bdi>. In the <bdi>الْمُضَارِعُ</bdi> the pattern of <bdi>بَاب ضَرَبَ</bdi> gives <bdi>يَأْيِدُ</bdi> → <bdi>يَئِيْدُ</bdi> (<bdi>كَسْرَةٌ</bdi> + sakin hamzah ← <bdi>يَاءٌ</bdi>, then the <bdi>أَجْوَف</bdi> lengthening).",
              "list": false
            },
            {
              "html": "Wherever the weak <bdi>عَيْنٌ</bdi> is dropped (before a pronoun that begins with a consonant, and in the feminine plurals), the initial hamzah takes a kasrah: <bdi>إِدْنَ، إِدْتَّ، إِدْنَا</bdi>. The book prints the <bdi>ت</bdi> of these forms with a shaddah (<bdi>إِدْتَّ، إِدْتُّمَا، إِدْتُّمْ</bdi>) to show the assimilation of the <bdi>د</bdi> into the <bdi>ت</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> is <bdi>إِيْدَ</bdi> (<bdi>كَسْرَةٌ</bdi> + sakin hamzah ← <bdi>يَاءٌ</bdi>), while the <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> is <bdi>يُؤَادُ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — آدَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "آدَ",
                    "يَئِيْدُ",
                    "أَيْدًا",
                    "إِيْدَ",
                    "يُؤَادُ",
                    "أَيْدًا",
                    "إِدْ",
                    "لَا تَئِدْ",
                    "آيِدٌ",
                    "مَئِيْدٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — آدَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "آدَ",
                    "يَئِيْدُ",
                    "إِيْدَ",
                    "يُؤَادُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "آدَا",
                    "يَئِيْدَانِ",
                    "إِيْدَا",
                    "يُؤَادَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "آدُوْا",
                    "يَئِيْدُوْنَ",
                    "إِيْدُوْا",
                    "يُؤَادُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "آدَتْ",
                    "تَئِيْدُ",
                    "إِيْدَتْ",
                    "تُؤَادُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "آدَتَا",
                    "تَئِيْدَانِ",
                    "إِيْدَتَا",
                    "تُؤَادَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "إِدْنَ",
                    "يَئِدْنَ",
                    "إِدْنَ",
                    "يُؤَدْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "إِدْتَّ",
                    "تَئِيْدُ",
                    "إِدْتَّ",
                    "تُؤَادُ",
                    "إِدْ",
                    "لَا تَئِدْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "إِدْتُّمَا",
                    "تَئِيْدَانِ",
                    "إِدْتُّمَا",
                    "تُؤَادَانِ",
                    "إِيْدَا",
                    "لَا تَئِيْدَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "إِدْتُّمْ",
                    "تَئِيْدُوْنَ",
                    "إِدْتُّمْ",
                    "تُؤَادُوْنَ",
                    "إِيْدُوْا",
                    "لَا تَئِيْدُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "إِدْتِّ",
                    "تَئِيْدِيْنَ",
                    "إِدْتِّ",
                    "تُؤَادِيْنَ",
                    "إِيْدِيْ",
                    "لَا تَئِيْدِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "إِدْتُّمَا",
                    "تَئِيْدَانِ",
                    "إِدْتُّمَا",
                    "تُؤَادَانِ",
                    "إِيْدَا",
                    "لَا تَئِيْدَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "إِدْتُّنَّ",
                    "تَئِدْنَ",
                    "إِدْتُّنَّ",
                    "تُؤَدْنَ",
                    "إِدْنَ",
                    "لَا تَئِدْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "إِدْتُّ",
                    "أَئِيْدُ",
                    "إِدْتُّ",
                    "أُؤَادُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "إِدْنَا",
                    "نَئِيْدُ",
                    "إِدْنَا",
                    "نُؤَادُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — آدَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "آيِدٌ",
                    "مَئِيْدٌ"
                  ],
                  [
                    "Dual (m)",
                    "آيِدَانِ",
                    "مَئِيْدَانِ"
                  ],
                  [
                    "Plural (m)",
                    "آيِدُوْنَ",
                    "مَئِيْدُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "آيِدَةٌ",
                    "مَئِيْدَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "آيِدَتَانِ",
                    "مَئِيْدَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "آيِدَاتٌ",
                    "مَئِيْدَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يَئِيْدُ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of آدَ — He is strong", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آلَ — It was returned to", "الْمُخَاطَبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of شَاءَ — You (m/p) wished", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of جَاءَ — He/it was brought"],
            "correct": 0
          }
        },
        {
          "heading": "Part 4 (continued): آلَ (بَابُ نَصَرَ يَنْصُرُ)",
          "lines": [
            {
              "html": "<bdi>آلَ</bdi> (to return, root <bdi>أ و ل</bdi>) is the same combination in <bdi>بَاب نَصَرَ</bdi>. The <bdi>الْمَاضِيْ أَوَلَ</bdi> → <bdi>أَالَ</bdi> → <bdi>آلَ</bdi>; the <bdi>الْمُضَارِعُ يَأْوُلُ</bdi> → <bdi>يَؤُوْلُ</bdi> (<bdi>ضَمَّةٌ</bdi> + sakin hamzah ← <bdi>وَاوٌ</bdi>). When the weak <bdi>عَيْنٌ</bdi> falls away, the fāʾ hamzah takes a dammah — <bdi>أُلْنَ، أُلْتَ</bdi> — because the dropped letter is a <bdi>وَاوٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> is <bdi>إِيْلَ</bdi> (like <bdi>قِيْلَ</bdi>) and the <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> is <bdi>يُؤَالُ</bdi>; the <bdi>الْأَمْرُ</bdi> is <bdi>أُلْ</bdi> and the <bdi>النَّهْيُ لَا تَؤُلْ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — آلَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "آلَ",
                    "يَؤُوْلُ",
                    "أَوْلًا",
                    "إِيْلَ",
                    "يُؤَالُ",
                    "أَوْلًا",
                    "أُلْ",
                    "لَا تَؤُلْ",
                    "آيِلٌ",
                    "مَؤُوْلٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — آلَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "آلَ",
                    "يَؤُوْلُ",
                    "إِيْلَ",
                    "يُؤَالُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "آلَا",
                    "يَؤُوْلَانِ",
                    "إِيْلَا",
                    "يُؤَالَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "آلُوْا",
                    "يَؤُوْلُوْنَ",
                    "إِيْلُوْا",
                    "يُؤَالُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "آلَتْ",
                    "تَؤُوْلُ",
                    "إِيْلَتْ",
                    "تُؤَالُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "آلَتَا",
                    "تَؤُوْلَانِ",
                    "إِيْلَتَا",
                    "تُؤَالَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أُلْنَ",
                    "يَؤُلْنَ",
                    "إِلْنَ",
                    "يُؤَلْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أُلْتَ",
                    "تَؤُوْلُ",
                    "إِلْتَ",
                    "تُؤَالُ",
                    "أُلْ",
                    "لَا تَؤُلْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أُلْتُمَا",
                    "تَؤُوْلَانِ",
                    "إِلْتُمَا",
                    "تُؤَالَانِ",
                    "أُوْلَا",
                    "لَا تَؤُوْلَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أُلْتُمْ",
                    "تَؤُوْلُوْنَ",
                    "إِلْتُمْ",
                    "تُؤَالُوْنَ",
                    "أُوْلُوْا",
                    "لَا تَؤُوْلُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أُلْتِ",
                    "تَؤُوْلِيْنَ",
                    "إِلْتِ",
                    "تُؤَالِيْنَ",
                    "أُوْلِيْ",
                    "لَا تَؤُوْلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أُلْتُمَا",
                    "تَؤُوْلَانِ",
                    "إِلْتُمَا",
                    "تُؤَالَانِ",
                    "أُوْلَا",
                    "لَا تَؤُوْلَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أُلْتُنَّ",
                    "تَؤُلْنَ",
                    "إِلْتُنَّ",
                    "تُؤَلْنَ",
                    "أُلْنَ",
                    "لَا تَؤُلْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أُلْتُ",
                    "أَؤُوْلُ",
                    "إِلْتُ",
                    "أُؤَالُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أُلْنَا",
                    "نَؤُوْلُ",
                    "إِلْنَا",
                    "نُؤَالُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — آلَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "آيِلٌ",
                    "مَؤُوْلٌ"
                  ],
                  [
                    "Dual (m)",
                    "آيِلَانِ",
                    "مَؤُوْلَانِ"
                  ],
                  [
                    "Plural (m)",
                    "آيِلُوْنَ",
                    "مَؤُوْلُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "آيِلَةٌ",
                    "مَؤُوْلَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "آيِلَتَانِ",
                    "مَؤُوْلَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "آيِلَاتٌ",
                    "مَؤُوْلَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "إِيْلَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آلَ — It was returned to", "الْمُخَاطَبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of شَاءَ — You (m/p) wished", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of جَاءَ — He/it was brought", "الْمُخَاطَبُ مِنَ الْأَمْرِ of بَاءَ — Return! (m/s)"],
            "correct": 0
          }
        },
        {
          "heading": "Part 5: أَجْوَفُ وَمَهْمُوْزُ اللَّامِ — شَاءَ (بَابُ سَمِعَ يَسْمَعُ)",
          "lines": [
            {
              "html": "<bdi>شَاءَ</bdi> (to wish, root <bdi>ش ي أ</bdi>) has a weak <bdi>ي</bdi> as its <bdi>عَيْنٌ</bdi> and a hamzah as its <bdi>لَامٌ</bdi>. The <bdi>أَجْوَف</bdi> rule turns <bdi>شَيِئَ</bdi> into <bdi>شَاءَ</bdi> and <bdi>يَشْيَأُ</bdi> into <bdi>يَشَاءُ</bdi>; the ending hamzah then behaves exactly like the hamzah of <bdi>قَرَأَ</bdi>. Before a consonantal pronoun the alif drops and the <bdi>ش</bdi> takes a kasrah: <bdi>شِئْنَ، شِئْتَ</bdi>.",
              "list": false
            },
            {
              "html": "The <bdi>اِسْمُ الْفَاعِلِ</bdi> brings two hamzahs together (<bdi>شَائِئٌ</bdi>). In the singular the book writes it as the <bdi>مَنْقُوْصٌ</bdi> form <bdi>شَاءٍ</bdi>, but the two hamzahs re-appear in all the other forms: <bdi>شَائِئَانِ، شَائِئُوْنَ، شَائِئَةٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — شَاءَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "شَاءَ",
                    "يَشَاءُ",
                    "مَشِيْئَةً",
                    "شِيْءَ",
                    "يُشَاءُ",
                    "مَشِيْئَةً",
                    "شَأْ",
                    "لَا تَشَأْ",
                    "شَاءٍ",
                    "مَشِيْءٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — شَاءَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "شَاءَ",
                    "يَشَاءُ",
                    "شِيْءَ",
                    "يُشَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "شَاءَا",
                    "يَشَاءَانِ",
                    "شِيْئَا",
                    "يُشَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "شَاءُوْا",
                    "يَشَاءُوْنَ",
                    "شِيْئُوْا",
                    "يُشَاءُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "شَاءَتْ",
                    "تَشَاءُ",
                    "شِيْئَتْ",
                    "تُشَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "شَاءَتَا",
                    "تَشَاءَانِ",
                    "شِيْئَتَا",
                    "تُشَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "شِئْنَ",
                    "يَشَأْنَ",
                    "شِئْنَ",
                    "يُشَأْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "شِئْتَ",
                    "تَشَاءُ",
                    "شِئْتَ",
                    "تُشَاءُ",
                    "شَأْ",
                    "لَا تَشَأْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "شِئْتُمَا",
                    "تَشَاءَانِ",
                    "شِئْتُمَا",
                    "تُشَاءَانِ",
                    "شَاءَا",
                    "لَا تَشَاءَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "شِئْتُمْ",
                    "تَشَاءُوْنَ",
                    "شِئْتُمْ",
                    "تُشَاءُوْنَ",
                    "شَاءُوْا",
                    "لَا تَشَاءُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "شِئْتِ",
                    "تَشَائِيْنَ",
                    "شِئْتِ",
                    "تُشَائِيْنَ",
                    "شَائِيْ",
                    "لَا تَشَائِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "شِئْتُمَا",
                    "تَشَاءَانِ",
                    "شِئْتُمَا",
                    "تُشَاءَانِ",
                    "شَاءَا",
                    "لَا تَشَاءَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "شِئْتُنَّ",
                    "تَشَأْنَ",
                    "شِئْتُنَّ",
                    "تُشَأْنَ",
                    "شَأْنَ",
                    "لَا تَشَأْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "شِئْتُ",
                    "أَشَاءُ",
                    "شِئْتُ",
                    "أُشَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "شِئْنَا",
                    "نَشَاءُ",
                    "شِئْنَا",
                    "نُشَاءُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — شَاءَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "شَاءٍ",
                    "مَشِيْءٌ"
                  ],
                  [
                    "Dual (m)",
                    "شَائِئَانِ",
                    "مَشِيْئَانِ"
                  ],
                  [
                    "Plural (m)",
                    "شَائِئُوْنَ",
                    "مَشِيْئُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "شَائِئَةٌ",
                    "مَشِيْئَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "شَائِئَتَانِ",
                    "مَشِيْئَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "شَائِئَاتٌ",
                    "مَشِيْئَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "شِئْتُمْ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of شَاءَ — You (m/p) wished", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of جَاءَ — He/it was brought", "الْمُخَاطَبُ مِنَ الْأَمْرِ of بَاءَ — Return! (m/s)", "اِسْمُ الْمَفْعُوْلِ of شَاءَ — that which is wished"],
            "correct": 0
          }
        },
        {
          "heading": "Part 5 (continued): جَاءَ (بَابُ ضَرَبَ يَضْرِبُ)",
          "lines": [
            {
              "html": "<bdi>جَاءَ</bdi> (to come, root <bdi>ج ي أ</bdi>) is the same combination in <bdi>بَاب ضَرَبَ</bdi>, so the <bdi>الْمُضَارِعُ</bdi> keeps a long <bdi>ي</bdi>: <bdi>يَجِيْءُ</bdi>. The <bdi>الْأَمْرُ</bdi> is <bdi>جِئْ</bdi> and the <bdi>الْمَاضِي الْمَجْهُوْلُ جِيْءَ</bdi> — the very form used in the Quran: <bdi>﴿وَجِيْءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — جَاءَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "جَاءَ",
                    "يَجِيْءُ",
                    "مَجِيْئًا",
                    "جِيْءَ",
                    "يُجَاءُ",
                    "مَجِيْئًا",
                    "جِئْ",
                    "لَا تَجِئْ",
                    "جَاءٍ",
                    "مَجِيْءٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — جَاءَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "جَاءَ",
                    "يَجِيْءُ",
                    "جِيْءَ",
                    "يُجَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "جَاءَا",
                    "يَجِيْئَانِ",
                    "جِيْئَا",
                    "يُجَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "جَاءُوْا",
                    "يَجِيْئُوْنَ",
                    "جِيْئُوْا",
                    "يُجَاءُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "جَاءَتْ",
                    "تَجِيْءُ",
                    "جِيْئَتْ",
                    "تُجَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "جَاءَتَا",
                    "تَجِيْئَانِ",
                    "جِيْئَتَا",
                    "تُجَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "جِئْنَ",
                    "يَجِئْنَ",
                    "جِئْنَ",
                    "يُجَأْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "جِئْتَ",
                    "تَجِيْءُ",
                    "جِئْتَ",
                    "تُجَاءُ",
                    "جِئْ",
                    "لَا تَجِئْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "جِئْتُمَا",
                    "تَجِيْئَانِ",
                    "جِئْتُمَا",
                    "تُجَاءَانِ",
                    "جِيْئَا",
                    "لَا تَجِيْئَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "جِئْتُمْ",
                    "تَجِيْئُوْنَ",
                    "جِئْتُمْ",
                    "تُجَاءُوْنَ",
                    "جِيْئُوْا",
                    "لَا تَجِيْئُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "جِئْتِ",
                    "تَجِيْئِيْنَ",
                    "جِئْتِ",
                    "تُجَائِيْنَ",
                    "جِيْئِيْ",
                    "لَا تَجِيْئِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "جِئْتُمَا",
                    "تَجِيْئَانِ",
                    "جِئْتُمَا",
                    "تُجَاءَانِ",
                    "جِيْئَا",
                    "لَا تَجِيْئَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "جِئْتُنَّ",
                    "تَجِئْنَ",
                    "جِئْتُنَّ",
                    "تُجَأْنَ",
                    "جِئْنَ",
                    "لَا تَجِئْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "جِئْتُ",
                    "أَجِيْءُ",
                    "جِئْتُ",
                    "أُجَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "جِئْنَا",
                    "نَجِيْءُ",
                    "جِئْنَا",
                    "نُجَاءُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — جَاءَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "جَاءٍ",
                    "مَجِيْءٌ"
                  ],
                  [
                    "Dual (m)",
                    "جَائِئَانِ",
                    "مَجِيْئَانِ"
                  ],
                  [
                    "Plural (m)",
                    "جَائِئُوْنَ",
                    "مَجِيْئُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "جَائِئَةٌ",
                    "مَجِيْئَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "جَائِئَتَانِ",
                    "مَجِيْئَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "جَائِئَاتٌ",
                    "مَجِيْئَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "جِيْءَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of جَاءَ — He/it was brought", "الْمُخَاطَبُ مِنَ الْأَمْرِ of بَاءَ — Return! (m/s)", "اِسْمُ الْمَفْعُوْلِ of شَاءَ — that which is wished", "الْمُخَاطَبُ مِنَ النَّهْيِ of أَجَاءَ — Do not force (someone) to a place! (m/s)"],
            "correct": 0
          }
        },
        {
          "heading": "Part 5 (continued): بَاءَ (بَابُ نَصَرَ يَنْصُرُ)",
          "lines": [
            {
              "html": "<bdi>بَاءَ</bdi> (to return, root <bdi>ب و أ</bdi>) is the same combination in <bdi>بَاب نَصَرَ</bdi>; the <bdi>عَيْنٌ</bdi> is a <bdi>وَاوٌ</bdi>, so the <bdi>الْمُضَارِعُ</bdi> is <bdi>يَبُوْءُ</bdi> and the shortened forms take a dammah: <bdi>بُؤْنَ، بُؤْتَ، بُؤْ</bdi>. Note that the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> still takes a kasrah — <bdi>بِيْءَ، بِئْتَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — بَاءَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "بَاءَ",
                    "يَبُوْءُ",
                    "بَوْءًا",
                    "بِيْءَ",
                    "يُبَاءُ",
                    "بَوْءًا",
                    "بُؤْ",
                    "لَا تَبُؤْ",
                    "بَاءٍ",
                    "مَبُوْءٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — بَاءَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "بَاءَ",
                    "يَبُوْءُ",
                    "بِيْءَ",
                    "يُبَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "بَاءَا",
                    "يَبُوْءَانِ",
                    "بِيْئَا",
                    "يُبَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "بَاءُوْا",
                    "يَبُوْءُوْنَ",
                    "بِيْئُوْا",
                    "يُبَاءُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "بَاءَتْ",
                    "تَبُوْءُ",
                    "بِيْئَتْ",
                    "تُبَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "بَاءَتَا",
                    "تَبُوْءَانِ",
                    "بِيْئَتَا",
                    "تُبَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "بُؤْنَ",
                    "يَبُؤْنَ",
                    "بِئْنَ",
                    "يُبَأْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "بُؤْتَ",
                    "تَبُوْءُ",
                    "بِئْتَ",
                    "تُبَاءُ",
                    "بُؤْ",
                    "لَا تَبُؤْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "بُؤْتُمَا",
                    "تَبُوْءَانِ",
                    "بِئْتُمَا",
                    "تُبَاءَانِ",
                    "بُوْءَا",
                    "لَا تَبُوْءَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "بُؤْتُمْ",
                    "تَبُوْءُوْنَ",
                    "بِئْتُمْ",
                    "تُبَاءُوْنَ",
                    "بُوْءُوْا",
                    "لَا تَبُوْءُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "بُؤْتِ",
                    "تَبُوْئِيْنَ",
                    "بِئْتِ",
                    "تُبَائِيْنَ",
                    "بُوْئِيْ",
                    "لَا تَبُوْئِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "بُؤْتُمَا",
                    "تَبُوْءَانِ",
                    "بِئْتُمَا",
                    "تُبَاءَانِ",
                    "بُوْءَا",
                    "لَا تَبُوْءَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "بُؤْتُنَّ",
                    "تَبُؤْنَ",
                    "بِئْتُنَّ",
                    "تُبَأْنَ",
                    "بُؤْنَ",
                    "لَا تَبُؤْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "بُؤْتُ",
                    "أَبُوْءُ",
                    "بِئْتُ",
                    "أُبَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "بُؤْنَا",
                    "نَبُوْءُ",
                    "بِئْنَا",
                    "نُبَاءُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — بَاءَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "بَاءٍ",
                    "مَبُوْءٌ"
                  ],
                  [
                    "Dual (m)",
                    "بَائِئَانِ",
                    "مَبُوْءَانِ"
                  ],
                  [
                    "Plural (m)",
                    "بَائِئُوْنَ",
                    "مَبُوْءُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "بَائِئَةٌ",
                    "مَبُوْءَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "بَائِئَتَانِ",
                    "مَبُوْءَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "بَائِئَاتٌ",
                    "مَبُوْءَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "بُؤْ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ مِنَ الْأَمْرِ of بَاءَ — Return! (m/s)", "اِسْمُ الْمَفْعُوْلِ of شَاءَ — that which is wished", "الْمُخَاطَبُ مِنَ النَّهْيِ of أَجَاءَ — Do not force (someone) to a place! (m/s)", "اِسْمُ الْفَاعِلِ (feminine plural) of آلَ — those (f/p) that return"],
            "correct": 0
          }
        },
        {
          "heading": "Part 5 (continued): أَجَاءَ — (IV) بَاب إِفْعَال",
          "lines": [
            {
              "html": "<bdi>أَجَاءَ</bdi> (to force to a place) is <bdi>جَاءَ</bdi> in <bdi>بَاب إِفْعَال</bdi>. The <bdi>أَجْوَف</bdi> rule of <bdi>إِفْعَال</bdi> applies: <bdi>أَجْوَأَ</bdi> → <bdi>أَجَاءَ</bdi> in the <bdi>الْمَاضِيْ</bdi>, and <bdi>يُجْوِئُ</bdi> → <bdi>يُجِيْءُ</bdi> in the <bdi>الْمُضَارِعُ</bdi>. When the weak letter is dropped, the <bdi>عَيْنٌ</bdi> position simply disappears: <bdi>أَجَأْتَ، أَجِئْ</bdi>.",
              "list": false
            },
            {
              "html": "The <bdi>اِسْمُ الْفَاعِلِ مُجِيْءٌ</bdi> and the <bdi>الْمُضَارِعُ الْمَعْلُوْمُ يُجِيْءُ</bdi> are written the same way apart from the prefix — compare <bdi>مُجَاءٌ</bdi> (<bdi>اسم المفعول</bdi>) with <bdi>يُجَاءُ</bdi> (<bdi>المضارع المجهول</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَجَاءَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَجَاءَ",
                    "يُجِيْءُ",
                    "إِجَاءَةً",
                    "أُجِيْءَ",
                    "يُجَاءُ",
                    "إِجَاءَةً",
                    "أَجِئْ",
                    "لَا تُجِئْ",
                    "مُجِيْءٌ",
                    "مُجَاءٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَجَاءَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَجَاءَ",
                    "يُجِيْءُ",
                    "أُجِيْءَ",
                    "يُجَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَجَاءَا",
                    "يُجِيْئَانِ",
                    "أُجِيْئَا",
                    "يُجَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَجَاءُوْا",
                    "يُجِيْئُوْنَ",
                    "أُجِيْئُوْا",
                    "يُجَاءُوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَجَاءَتْ",
                    "تُجِيْءُ",
                    "أُجِيْئَتْ",
                    "تُجَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَجَاءَتَا",
                    "تُجِيْئَانِ",
                    "أُجِيْئَتَا",
                    "تُجَاءَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَجَأْنَ",
                    "يُجِئْنَ",
                    "أُجِئْنَ",
                    "يُجَأْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَجَأْتَ",
                    "تُجِيْءُ",
                    "أُجِئْتَ",
                    "تُجَاءُ",
                    "أَجِئْ",
                    "لَا تُجِئْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَجَأْتُمَا",
                    "تُجِيْئَانِ",
                    "أُجِئْتُمَا",
                    "تُجَاءَانِ",
                    "أَجِيْئَا",
                    "لَا تُجِيْئَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَجَأْتُمْ",
                    "تُجِيْئُوْنَ",
                    "أُجِئْتُمْ",
                    "تُجَاءُوْنَ",
                    "أَجِيْئُوْا",
                    "لَا تُجِيْئُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَجَأْتِ",
                    "تُجِيْئِيْنَ",
                    "أُجِئْتِ",
                    "تُجَائِيْنَ",
                    "أَجِيْئِيْ",
                    "لَا تُجِيْئِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَجَأْتُمَا",
                    "تُجِيْئَانِ",
                    "أُجِئْتُمَا",
                    "تُجَاءَانِ",
                    "أَجِيْئَا",
                    "لَا تُجِيْئَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَجَأْتُنَّ",
                    "تُجِئْنَ",
                    "أُجِئْتُنَّ",
                    "تُجَأْنَ",
                    "أَجِئْنَ",
                    "لَا تُجِئْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَجَأْتُ",
                    "أُجِيْءُ",
                    "أُجِئْتُ",
                    "أُجَاءُ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَجَأْنَا",
                    "نُجِيْءُ",
                    "أُجِئْنَا",
                    "نُجَاءُ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَجَاءَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُجِيْءٌ",
                    "مُجَاءٌ"
                  ],
                  [
                    "Dual (m)",
                    "مُجِيْئَانِ",
                    "مُجَاءَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُجِيْئُوْنَ",
                    "مُجَاءُوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُجِيْئَةٌ",
                    "مُجَاءَةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُجِيْئَتَانِ",
                    "مُجَاءَتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُجِيْئَاتٌ",
                    "مُجَاءَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "لَا تُجِئْ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ مِنَ النَّهْيِ of أَجَاءَ — Do not force (someone) to a place! (m/s)", "اِسْمُ الْفَاعِلِ (feminine plural) of آلَ — those (f/p) that return", "الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of آدَ — He is strong", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آلَ — It was returned to"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 4–5: أَجْوَفُ Combinations",
        "rows": [
          {
            "label": "أجوف ومهموز الفاء — باب ضرب; مجهول إِيْدَ، أمر إِدْ",
            "arabic": "آدَ يَئِيْدُ أَيْدًا",
            "meaning": "أجوف ومهموز الفاء — باب ضرب; مجهول إِيْدَ، أمر إِدْ",
            "unlockAt": 0
          },
          {
            "label": "أجوف ومهموز الفاء — باب نصر; مجهول إِيْلَ، أمر أُلْ",
            "arabic": "آلَ يَؤُوْلُ أَوْلًا",
            "meaning": "أجوف ومهموز الفاء — باب نصر; مجهول إِيْلَ، أمر أُلْ",
            "unlockAt": 1
          },
          {
            "label": "أجوف ومهموز اللام — باب سمع; أمر شَأْ، فاعل شَاءٍ",
            "arabic": "شَاءَ يَشَاءُ مَشِيْئَةً",
            "meaning": "أجوف ومهموز اللام — باب سمع; أمر شَأْ، فاعل شَاءٍ",
            "unlockAt": 2
          },
          {
            "label": "أجوف ومهموز اللام — باب ضرب; مجهول جِيْءَ، أمر جِئْ",
            "arabic": "جَاءَ يَجِيْءُ مَجِيْئًا",
            "meaning": "أجوف ومهموز اللام — باب ضرب; مجهول جِيْءَ، أمر جِئْ",
            "unlockAt": 4
          },
          {
            "label": "أجوف ومهموز اللام — باب نصر; أمر بُؤْ، مجهول بِيْءَ",
            "arabic": "بَاءَ يَبُوْءُ بَوْءًا",
            "meaning": "أجوف ومهموز اللام — باب نصر; أمر بُؤْ، مجهول بِيْءَ",
            "unlockAt": 5
          },
          {
            "label": "أجوف ومهموز اللام — باب إفعال; أمر أَجِئْ، فاعل مُجِيْءٌ",
            "arabic": "أَجَاءَ يُجِيْءُ إِجَاءَةً",
            "meaning": "أجوف ومهموز اللام — باب إفعال; أمر أَجِئْ، فاعل مُجِيْءٌ",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "Why is the الْمَاضِيْ of the root أ ي د written آدَ?",
          "options": [
            "The عَيْنٌ was dropped and a مَدَّةٌ added for decoration",
            "أَيَدَ → أَادَ (the weak ي becomes an alif), and فَتْحَةٌ + أَلِفٌ ← مَدَّةٌ",
            "The hamzah was replaced by an alif",
            "It is an irregular form with no rule"
          ],
          "correct": 1,
          "explanation": "First the أَجْوَف rule turns أَيَدَ into أَادَ; then the مَهْمُوْز rule فَتْحَةٌ + أَلِفٌ ← مَدَّةٌ gives آدَ."
        },
        {
          "q": "What is the الْمُضَارِعُ الْمَجْهُوْلُ of آلَ يَؤُوْلُ?",
          "options": [
            "يُؤَالُ",
            "إِيْلَ",
            "يَؤُوْلُ",
            "يُؤَادُ"
          ],
          "correct": 0,
          "explanation": "الْمَاضِي الْمَجْهُوْلُ is إِيْلَ and الْمُضَارِعُ الْمَجْهُوْلُ is يُؤَالُ. يُؤَادُ is the passive مضارع of آدَ."
        },
        {
          "q": "The الْأَمْرُ of شَاءَ يَشَاءُ for الْمُخَاطَبُ is…",
          "options": [
            "اِشْأْ",
            "شَأْ",
            "شِئْ",
            "شَاءَ"
          ],
          "correct": 1,
          "explanation": "Dropping the ت of تَشَاءُ leaves شَاء; the أَجْوَف shortening then gives شَأْ. شِئْ is the أمر of جَاءَ's pattern (جِئْ), not of شَاءَ."
        },
        {
          "q": "Which of these is the الْمَاضِي الْمَجْهُوْلُ of بَاءَ يَبُوْءُ?",
          "options": [
            "بُؤْ",
            "بِيْءَ",
            "يُبَاءُ",
            "بَاءَ"
          ],
          "correct": 1,
          "explanation": "Even though the عَيْنٌ is a وَاوٌ, the passive ماضي of the أجوف takes a kasrah: بِيْءَ (like قِيْلَ). يُبَاءُ is the passive مضارع."
        },
        {
          "q": "In which بَابٌ is أَجَاءَ يُجِيْءُ إِجَاءَةً?",
          "options": [
            "(IV) بَاب إِفْعَال",
            "(II) بَاب تَفْعِيْل",
            "(VIII) بَاب اِفْتِعَال",
            "بَاب ضَرَبَ يَضْرِبُ"
          ],
          "correct": 0,
          "explanation": "The pattern أَفْعَلَ يُفْعِلُ إِفْعَالًا — here أَجَاءَ يُجِيْءُ إِجَاءَةً — is بَاب إِفْعَال (Form IV)."
        },
        {
          "q": "What happens to the اِسْمُ الْفَاعِلِ of شَاءَ، جَاءَ and بَاءَ in the singular?",
          "options": [
            "It keeps both hamzahs: شَائِئٌ، جَائِئٌ، بَائِئٌ",
            "It is written as a مَنْقُوْصٌ: شَاءٍ، جَاءٍ، بَاءٍ",
            "It becomes a مَدَّةٌ: شَآءٌ، جَآءٌ، بَآءٌ",
            "It is identical to the اِسْمُ الْمَفْعُوْلِ"
          ],
          "correct": 1,
          "explanation": "The singular is written as شَاءٍ، جَاءٍ، بَاءٍ; the two hamzahs re-appear in the other forms (شَائِئَانِ، جَائِئُوْنَ…)."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "إِدْنَ is which صِيْغَةٌ of آدَ?",
          "options": [
            "الْغَائِبَاتُ مِنَ الْمَاضِي الْمَعْلُوْمِ — They (f/p) were strong",
            "الْمُخَاطَبَاتُ مِنَ الْأَمْرِ only",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ",
            "الْمُتَكَلِّمُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ"
          ],
          "correct": 0,
          "explanation": "Before the pronoun نَ the weak عَيْنٌ is dropped and the hamzah takes a kasrah: إِدْنَ. (The same spelling also serves as the الْمُخَاطَبَاتُ of the الْأَمْرُ, but the ماضي reading is the one asked for here.)"
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which pair correctly gives الْأَمْرُ and النَّهْيُ of آلَ?",
          "options": [
            "أُلْ / لَا تَؤُلْ",
            "إِدْ / لَا تَئِدْ",
            "أُوْلُ / لَا تَأْلُ",
            "آلَ / لَا تَؤُوْلَ"
          ],
          "correct": 0,
          "explanation": "The مضارع is يَؤُوْلُ → تَؤُوْلُ; the جزم shortens it to تَؤُلْ, so the أمر is أُلْ and the نهي لَا تَؤُلْ. إِدْ / لَا تَئِدْ belongs to آدَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَشَائِيْنَ is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبَةُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of شَاءَ — You (f/s) wish",
            "الْمُخَاطَبَاتُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of شَاءَ",
            "الْغَائِبَاتُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of شَاءَ",
            "الْمُخَاطَبَةُ مِنَ النَّهْيِ of شَاءَ"
          ],
          "correct": 0,
          "explanation": "The feminine singular addressee of the مضارع is تَشَائِيْنَ; the feminine plural would be تَشَأْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The الْمَصْدَرُ of جَاءَ يَجِيْءُ is…",
          "options": [
            "مَجِيْئًا",
            "مَجِيْءٌ",
            "إِجَاءَةً",
            "جِيْئًا"
          ],
          "correct": 0,
          "explanation": "جَاءَ يَجِيْءُ مَجِيْئًا. مَجِيْءٌ is the اسم المفعول and إِجَاءَةً is the مصدر of أَجَاءَ (باب إفعال)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "بُؤْتُنَّ means…",
          "options": [
            "You (f/p) returned",
            "You (m/p) returned",
            "They (f/p) returned",
            "You (f/p) were returned to"
          ],
          "correct": 0,
          "explanation": "The pronoun تُنَّ is the feminine plural addressee. They (f/p) returned would be بُؤْنَ, and you (m/p) returned بُؤْتُمْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which form of أَجَاءَ is أُجِيْئَتْ?",
          "options": [
            "الْغَائِبَةُ مِنَ الْمَاضِي الْمَجْهُوْلِ — She was forced to a place",
            "الْغَائِبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ",
            "الْغَائِبَةُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ",
            "الْمُخَاطَبَةُ مِنَ الْمَاضِي الْمَجْهُوْلِ"
          ],
          "correct": 0,
          "explanation": "أُجِيْءَ is the passive ماضي; with the feminine ت it is أُجِيْئَتْ. The active would be أَجَاءَتْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the difference between يُجِيْءُ and يُجَاءُ?",
          "options": [
            "يُجِيْءُ is the active مضارع of أَجَاءَ; يُجَاءُ is its passive مضارع",
            "يُجِيْءُ is the passive; يُجَاءُ is the active",
            "They are both passive, from different أبواب",
            "يُجِيْءُ is a مصدر and يُجَاءُ a verb"
          ],
          "correct": 0,
          "explanation": "بَاب إِفْعَال: أَجَاءَ يُجِيْءُ (معلوم) and أُجِيْءَ يُجَاءُ (مجهول)."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر أَيْدًا, write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "آيِدُوْنَ",
            "مَئِيْدُوْنَ",
            "آيِدَاتٌ",
            "آيِدَانِ"
          ],
          "correct": 0,
          "explanation": "The مصدر أَيْدًا belongs to آدَ يَئِيْدُ. Its اسم الفاعل is آيِدٌ; the masculine plural is آيِدُوْنَ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر أَيْدًا, write الْمُفْرَدَةُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَئِيْدَةٌ",
            "آيِدَةٌ",
            "مَئِيْدَاتٌ",
            "مَئِيْدَتَانِ"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of آدَ is مَئِيْدٌ; the feminine singular is مَئِيْدَةٌ. آيِدَةٌ is the feminine اسم الفاعل."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر أَوْلًا, write الْغَائِبَةُ مِنَ الْمَاضِي الْمَجْهُوْلِ.",
          "options": [
            "إِيْلَتْ",
            "آلَتْ",
            "أُلْتِ",
            "تُؤَالُ"
          ],
          "correct": 0,
          "explanation": "The مصدر أَوْلًا belongs to آلَ; its passive ماضي is إِيْلَ, and with the feminine ت it becomes إِيْلَتْ. آلَتْ is the active."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر مَشِيْئَةً, write الْمُخَاطَبَتَانِ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "تَشَاءَانِ",
            "يَشَاءَانِ",
            "تُشَاءَانِ",
            "شِئْتُمَا"
          ],
          "correct": 0,
          "explanation": "The feminine dual addressee of the active مضارع of شَاءَ is تَشَاءَانِ — identical in form to الْمُخَاطَبَانِ. يَشَاءَانِ is الْغَائِبَانِ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر مَجِيْئًا, write الْمُخَاطَبَاتُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَجِئْنَ",
            "لَا تَجِيْئُوْا",
            "لَا تَجِيْئِيْ",
            "لَا تَجِئْ"
          ],
          "correct": 0,
          "explanation": "The feminine plural addressee of the نهي of جَاءَ is لَا تَجِئْنَ (the long ي is shortened before the نَ)."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر إِجَاءَةً, write الْمُثَنَّاةُ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُجِيْئَتَانِ",
            "مُجِيْئَانِ",
            "مُجَاءَتَانِ",
            "مُجِيْئَاتٌ"
          ],
          "correct": 0,
          "explanation": "الْمُثَنَّاةُ is the feminine dual. اسم الفاعل of أَجَاءَ is مُجِيْءٌ → feminine مُجِيْئَةٌ → dual مُجِيْئَتَانِ. مُجِيْئَانِ is the masculine dual."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "The Quranic word ﴿جَاءُوْا﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of جَاءَ — They (m/p) came",
            "الْمُخَاطَبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of جَاءَ",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of جَاءَ",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ of جَاءَ"
          ],
          "correct": 0,
          "explanation": "جَاءُوْا carries the وَاوُ الْجَمَاعَةِ of the third person masculine plural of the active ماضي. 'You (m/p) came' would be جِئْتُمْ."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿تَشَاءُوْنَ﴾ is which صِيْغَةٌ, and from which verb?",
          "options": [
            "الْمُخَاطَبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of شَاءَ — you (m/p) wish",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of شَاءَ",
            "الْمُخَاطَبُوْنَ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ of شَاءَ",
            "الْمُخَاطَبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of شَاءَ"
          ],
          "correct": 0,
          "explanation": "The ت prefix marks the second person and وْنَ the masculine plural: تَشَاءُوْنَ. The third person would be يَشَاءُوْنَ and the passive تُشَاءُوْنَ."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿يَسُوْءُوْنَ﴾ is built on which verb?",
          "options": [
            "سَاءَ يَسُوْءُ سُوْءًا (أجوف ومهموز اللام, باب نصر)",
            "شَاءَ يَشَاءُ مَشِيْئَةً (باب سمع)",
            "بَاءَ يَبُوْءُ بَوْءًا (باب نصر)",
            "أَضَاءَ يُضِيْءُ إِضَاءَةً (باب إفعال)"
          ],
          "correct": 0,
          "explanation": "يَسُوْءُوْنَ is الْغَائِبُوْنَ of the active مضارع of سَاءَ يَسُوْءُ — 'they (m/p) make bad / grieve'. بَاءَ would give يَبُوْءُوْنَ."
        },
        {
          "title": "to be strong",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be strong\"?",
          "options": [
            "آدَ يَئِيْدُ",
            "آضَ يَئِيْضُ",
            "آلَ يَؤُوْلُ",
            "آهَ يَؤُوْهُ"
          ],
          "correct": 0
        },
        {
          "title": "to be strong",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آدَ يَئِيْدُ mean?",
          "options": [
            "to be strong",
            "to return",
            "to moan",
            "to wish"
          ],
          "correct": 0
        },
        {
          "title": "to be strong (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آدَ يَئِيْدُ?",
          "options": [
            "أَيْدًا",
            "أَيْضًا",
            "أَوْلًا",
            "أَوْهًا"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "آضَ يَئِيْضُ",
            "آلَ يَؤُوْلُ",
            "آهَ يَؤُوْهُ",
            "شَاءَ يَشَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آضَ يَئِيْضُ mean?",
          "options": [
            "to return",
            "to moan",
            "to wish",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آضَ يَئِيْضُ?",
          "options": [
            "أَيْضًا",
            "أَوْلًا",
            "أَوْهًا",
            "مَشِيْئَةً"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "آلَ يَؤُوْلُ",
            "آهَ يَؤُوْهُ",
            "شَاءَ يَشَاءُ",
            "جَاءَ يَجِيْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آلَ يَؤُوْلُ mean?",
          "options": [
            "to return",
            "to moan",
            "to wish",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آلَ يَؤُوْلُ?",
          "options": [
            "أَوْلًا",
            "أَوْهًا",
            "مَشِيْئَةً",
            "مَجِيْئًا"
          ],
          "correct": 0
        },
        {
          "title": "to moan",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to moan\"?",
          "options": [
            "آهَ يَؤُوْهُ",
            "شَاءَ يَشَاءُ",
            "جَاءَ يَجِيْءُ",
            "بَاءَ يَبُوْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to moan",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آهَ يَؤُوْهُ mean?",
          "options": [
            "to moan",
            "to wish",
            "to come",
            "to return"
          ],
          "correct": 0
        },
        {
          "title": "to moan (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آهَ يَؤُوْهُ?",
          "options": [
            "أَوْهًا",
            "مَشِيْئَةً",
            "مَجِيْئًا",
            "بَوْءًا"
          ],
          "correct": 0
        },
        {
          "title": "to wish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wish\"?",
          "options": [
            "شَاءَ يَشَاءُ",
            "جَاءَ يَجِيْءُ",
            "بَاءَ يَبُوْءُ",
            "سَاءَ يَسُوْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to wish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاءَ يَشَاءُ mean?",
          "options": [
            "to wish",
            "to come",
            "to return",
            "to become bad"
          ],
          "correct": 0
        },
        {
          "title": "to wish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَاءَ يَشَاءُ?",
          "options": [
            "مَشِيْئَةً",
            "مَجِيْئًا",
            "بَوْءًا",
            "سُوْءًا"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come\"?",
          "options": [
            "جَاءَ يَجِيْءُ",
            "بَاءَ يَبُوْءُ",
            "سَاءَ يَسُوْءُ",
            "أَضَاءَ يُضِيْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَاءَ يَجِيْءُ mean?",
          "options": [
            "to come",
            "to return",
            "to become bad",
            "to enlighten"
          ],
          "correct": 0
        },
        {
          "title": "to come (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَاءَ يَجِيْءُ?",
          "options": [
            "مَجِيْئًا",
            "بَوْءًا",
            "سُوْءًا",
            "إِضَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "بَاءَ يَبُوْءُ",
            "سَاءَ يَسُوْءُ",
            "أَضَاءَ يُضِيْءُ",
            "أَجَاءَ يُجِيْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَاءَ يَبُوْءُ mean?",
          "options": [
            "to return",
            "to become bad",
            "to enlighten",
            "to force to a place"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَاءَ يَبُوْءُ?",
          "options": [
            "بَوْءًا",
            "سُوْءًا",
            "إِضَاءَةً",
            "إِجَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to become bad",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become bad\"?",
          "options": [
            "سَاءَ يَسُوْءُ",
            "أَضَاءَ يُضِيْءُ",
            "أَجَاءَ يُجِيْءُ",
            "آدَ يَئِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to become bad",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَاءَ يَسُوْءُ mean?",
          "options": [
            "to become bad",
            "to enlighten",
            "to force to a place",
            "to be strong"
          ],
          "correct": 0
        },
        {
          "title": "to become bad (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَاءَ يَسُوْءُ?",
          "options": [
            "سُوْءًا",
            "إِضَاءَةً",
            "إِجَاءَةً",
            "أَيْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to enlighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to enlighten\"?",
          "options": [
            "أَضَاءَ يُضِيْءُ",
            "أَجَاءَ يُجِيْءُ",
            "آدَ يَئِيْدُ",
            "آضَ يَئِيْضُ"
          ],
          "correct": 0
        },
        {
          "title": "to enlighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَضَاءَ يُضِيْءُ mean?",
          "options": [
            "to enlighten",
            "to force to a place",
            "to be strong",
            "to return"
          ],
          "correct": 0
        },
        {
          "title": "to enlighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَضَاءَ يُضِيْءُ?",
          "options": [
            "إِضَاءَةً",
            "إِجَاءَةً",
            "أَيْدًا",
            "أَيْضًا"
          ],
          "correct": 0
        },
        {
          "title": "to force to a place",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to force to a place\"?",
          "options": [
            "أَجَاءَ يُجِيْءُ",
            "آدَ يَئِيْدُ",
            "آضَ يَئِيْضُ",
            "آلَ يَؤُوْلُ"
          ],
          "correct": 0
        },
        {
          "title": "to force to a place",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجَاءَ يُجِيْءُ mean?",
          "options": [
            "to force to a place",
            "to be strong",
            "to return",
            "to moan"
          ],
          "correct": 0
        },
        {
          "title": "to force to a place (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَجَاءَ يُجِيْءُ?",
          "options": [
            "إِجَاءَةً",
            "أَيْدًا",
            "أَيْضًا",
            "أَوْلًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "النَّاقِصُ الْمُرَكَّبُ",
      "subtitle": "نَاقِصٌ Combinations — أَبَى، أَسِيَ، أَتَى، أَلَا، أَدَّى، آتَى، اِيْتَلَى، رَأَى، رَاءَى، أَرَى، تَرَاءَى",
      "concepts": [
        {
          "heading": "Part 6: نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ — أَبَى (بَاب فَتَحَ يَفْتَحُ)",
          "lines": [
            {
              "html": "<bdi>أَبَى</bdi> (to reject, root <bdi>أ ب ي</bdi>) has a hamzah as its <bdi>فَاءُ الْكَلِمَةِ</bdi> and a weak <bdi>ي</bdi> as its <bdi>لَامُ الْكَلِمَةِ</bdi>. The <bdi>نَاقِص</bdi> rules govern the ending (<bdi>أَبَى، أَبَوْا، أَبَتْ</bdi>) while the <bdi>مَهْمُوْز</bdi> rules govern the beginning: in the <bdi>الْمُضَارِعُ يَأْبَى</bdi> the hamzah is sākin, and in the <bdi>الْمُتَكَلِّم</bdi> it meets another hamzah — <bdi>أَأْبَى</bdi> → <bdi>آبَى</bdi> (<bdi>فَتْحَةٌ</bdi> + sakin hamzah ← <bdi>أَلِفٌ</bdi>/<bdi>مَدَّةٌ</bdi>).",
              "list": false
            },
            {
              "html": "The <bdi>الْأَمْرُ</bdi> needs a <bdi>هَمْزَةُ الْوَصْلِ</bdi>: <bdi>اِأْبَ</bdi> → <bdi>اِيْبَ</bdi> (<bdi>كَسْرَةٌ</bdi> + sakin hamzah ← <bdi>يَاءٌ</bdi>). The same <bdi>تَخْفِيْف</bdi> gives <bdi>أُوْبَى</bdi> in the <bdi>الْمُتَكَلِّم</bdi> of the <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> (<bdi>ضَمَّةٌ</bdi> + sakin hamzah ← <bdi>وَاوٌ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَبَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَبَى",
                    "يَأْبَى",
                    "إِبَاءً",
                    "أُبِيَ",
                    "يُؤْبَى",
                    "إِبَاءً",
                    "اِيْبَ",
                    "لَا تَأْبَ",
                    "آبٍ",
                    "مَأْبِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَبَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَبَى",
                    "يَأْبَى",
                    "أُبِيَ",
                    "يُؤْبَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَبَيَا",
                    "يَأْبَيَانِ",
                    "أُبِيَا",
                    "يُؤْبَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَبَوْا",
                    "يَأْبَوْنَ",
                    "أُبُوْا",
                    "يُؤْبَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَبَتْ",
                    "تَأْبَى",
                    "أُبِيَتْ",
                    "تُؤْبَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَبَتَا",
                    "تَأْبَيَانِ",
                    "أُبِيَتَا",
                    "تُؤْبَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَبَيْنَ",
                    "يَأْبَيْنَ",
                    "أُبِيْنَ",
                    "يُؤْبَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَبَيْتَ",
                    "تَأْبَى",
                    "أُبِيْتَ",
                    "تُؤْبَى",
                    "اِيْبَ",
                    "لَا تَأْبَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَبَيْتُمَا",
                    "تَأْبَيَانِ",
                    "أُبِيْتُمَا",
                    "تُؤْبَيَانِ",
                    "اِيْبَيَا",
                    "لَا تَأْبَيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَبَيْتُمْ",
                    "تَأْبَوْنَ",
                    "أُبِيْتُمْ",
                    "تُؤْبَوْنَ",
                    "اِيْبَوْا",
                    "لَا تَأْبَوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَبَيْتِ",
                    "تَأْبَيْنَ",
                    "أُبِيْتِ",
                    "تُؤْبَيْنَ",
                    "اِيْبَيْ",
                    "لَا تَأْبَيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَبَيْتُمَا",
                    "تَأْبَيَانِ",
                    "أُبِيْتُمَا",
                    "تُؤْبَيَانِ",
                    "اِيْبَيَا",
                    "لَا تَأْبَيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَبَيْتُنَّ",
                    "تَأْبَيْنَ",
                    "أُبِيْتُنَّ",
                    "تُؤْبَيْنَ",
                    "اِيْبَيْنَ",
                    "لَا تَأْبَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَبَيْتُ",
                    "آبَى",
                    "أُبِيْتُ",
                    "أُوْبَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَبَيْنَا",
                    "نَأْبَى",
                    "أُبِيْنَا",
                    "نُؤْبَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَبَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "آبٍ",
                    "مَأْبِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "آبِيَانِ",
                    "مَأْبِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "آبُوْنَ",
                    "مَأْبِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "آبِيَةٌ",
                    "مَأْبِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "آبِيَتَانِ",
                    "مَأْبِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "آبِيَاتٌ",
                    "مَأْبِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اِيْبَ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ مِنَ الْأَمْرِ of أَبَى — Reject! (m/s)", "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى — I reject", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آتَى — He was given", "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of أَدَّى — Fulfil! (m/p)"],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (continued): أَسِيَ (بَاب سَمِعَ يَسْمَعُ)",
          "lines": [
            {
              "html": "<bdi>أَسِيَ</bdi> (to be sad, root <bdi>أ س ي</bdi>) is the same combination in <bdi>بَاب سَمِعَ</bdi>. Because the <bdi>لَامٌ</bdi> carries a kasrah in the <bdi>الْمَاضِيْ</bdi>, the <bdi>ي</bdi> is kept (<bdi>أَسِيَ</bdi>) but drops before the <bdi>وَاوُ الْجَمَاعَةِ</bdi>: <bdi>أَسُوْا</bdi>. The <bdi>مَصْدَرٌ أَسًى</bdi> is a <bdi>مَقْصُوْرٌ</bdi> noun.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَسِيَ",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَسِيَ",
                    "يَأْسَى",
                    "أَسًى",
                    "أُسِيَ",
                    "يُؤْسَى",
                    "أَسًى",
                    "اِيْسَ",
                    "لَا تَأْسَ",
                    "آسٍ",
                    "مَأْسِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَسِيَ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَسِيَ",
                    "يَأْسَى",
                    "أُسِيَ",
                    "يُؤْسَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَسِيَا",
                    "يَأْسَيَانِ",
                    "أُسِيَا",
                    "يُؤْسَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَسُوْا",
                    "يَأْسَوْنَ",
                    "أُسُوْا",
                    "يُؤْسَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَسِيَتْ",
                    "تَأْسَى",
                    "أُسِيَتْ",
                    "تُؤْسَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَسِيَتَا",
                    "تَأْسَيَانِ",
                    "أُسِيَتَا",
                    "تُؤْسَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَسِيْنَ",
                    "يَأْسَيْنَ",
                    "أُسِيْنَ",
                    "يُؤْسَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَسِيْتَ",
                    "تَأْسَى",
                    "أُسِيْتَ",
                    "تُؤْسَى",
                    "اِيْسَ",
                    "لَا تَأْسَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَسِيْتُمَا",
                    "تَأْسَيَانِ",
                    "أُسِيْتُمَا",
                    "تُؤْسَيَانِ",
                    "اِيْسَيَا",
                    "لَا تَأْسَيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَسِيْتُمْ",
                    "تَأْسَوْنَ",
                    "أُسِيْتُمْ",
                    "تُؤْسَوْنَ",
                    "اِيْسَوْا",
                    "لَا تَأْسَوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَسِيْتِ",
                    "تَأْسَيْنَ",
                    "أُسِيْتِ",
                    "تُؤْسَيْنَ",
                    "اِيْسَيْ",
                    "لَا تَأْسَيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَسِيْتُمَا",
                    "تَأْسَيَانِ",
                    "أُسِيْتُمَا",
                    "تُؤْسَيَانِ",
                    "اِيْسَيَا",
                    "لَا تَأْسَيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَسِيْتُنَّ",
                    "تَأْسَيْنَ",
                    "أُسِيْتُنَّ",
                    "تُؤْسَيْنَ",
                    "اِيْسَيْنَ",
                    "لَا تَأْسَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَسِيْتُ",
                    "آسَى",
                    "أُسِيْتُ",
                    "أُوْسَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَسِيْنَا",
                    "نَأْسَى",
                    "أُسِيْنَا",
                    "نُؤْسَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَسِيَ",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "آسٍ",
                    "مَأْسِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "آسِيَانِ",
                    "مَأْسِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "آسُوْنَ",
                    "مَأْسِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "آسِيَةٌ",
                    "مَأْسِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "آسِيَتَانِ",
                    "مَأْسِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "آسِيَاتٌ",
                    "مَأْسِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The اِسْمُ الْمَفْعُوْلِ of أَسِيَ is…",
            "kind": "mcq",
            "options": ["مَأْسِيٌّ", "آسٍ", "مَأْسُوٌّ", "مَأْبِيٌّ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (continued): أَتَى (بَابُ ضَرَبَ يَضْرِبُ)",
          "lines": [
            {
              "html": "<bdi>أَتَى</bdi> (to come, root <bdi>أ ت ي</bdi>) is the same combination in <bdi>بَاب ضَرَبَ</bdi>, so the <bdi>الْمُضَارِعُ</bdi> ends in a kasrah-bearing <bdi>ي</bdi>: <bdi>يَأْتِيْ</bdi>. The Quran uses both the <bdi>الْأَمْرُ اِيْتِ</bdi> (‘bring!’) and the <bdi>الْمَاضِي الْمَجْهُوْلُ أُتِيَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَتَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَتَى",
                    "يَأْتِيْ",
                    "إِتْيَانًا",
                    "أُتِيَ",
                    "يُؤْتَى",
                    "إِتْيَانًا",
                    "اِيْتِ",
                    "لَا تَأْتِ",
                    "آتٍ",
                    "مَأْتِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَتَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَتَى",
                    "يَأْتِيْ",
                    "أُتِيَ",
                    "يُؤْتَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَتَيَا",
                    "يَأْتِيَانِ",
                    "أُتِيَا",
                    "يُؤْتَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَتَوْا",
                    "يَأْتُوْنَ",
                    "أُتُوْا",
                    "يُؤْتَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَتَتْ",
                    "تَأْتِيْ",
                    "أُتِيَتْ",
                    "تُؤْتَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَتَتَا",
                    "تَأْتِيَانِ",
                    "أُتِيَتَا",
                    "تُؤْتَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَتَيْنَ",
                    "يَأْتِيْنَ",
                    "أُتِيْنَ",
                    "يُؤْتَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَتَيْتَ",
                    "تَأْتِيْ",
                    "أُتِيْتَ",
                    "تُؤْتَى",
                    "اِيْتِ",
                    "لَا تَأْتِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَتَيْتُمَا",
                    "تَأْتِيَانِ",
                    "أُتِيْتُمَا",
                    "تُؤْتَيَانِ",
                    "اِيْتِيَا",
                    "لَا تَأْتِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَتَيْتُمْ",
                    "تَأْتُوْنَ",
                    "أُتِيْتُمْ",
                    "تُؤْتَوْنَ",
                    "اِيْتُوْا",
                    "لَا تَأْتُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَتَيْتِ",
                    "تَأْتِيْنَ",
                    "أُتِيْتِ",
                    "تُؤْتَيْنَ",
                    "اِيْتِيْ",
                    "لَا تَأْتِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَتَيْتُمَا",
                    "تَأْتِيَانِ",
                    "أُتِيْتُمَا",
                    "تُؤْتَيَانِ",
                    "اِيْتِيَا",
                    "لَا تَأْتِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَتَيْتُنَّ",
                    "تَأْتِيْنَ",
                    "أُتِيْتُنَّ",
                    "تُؤْتَيْنَ",
                    "اِيْتِيْنَ",
                    "لَا تَأْتِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَتَيْتُ",
                    "آتِيْ",
                    "أُتِيْتُ",
                    "أُوْتَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَتَيْنَا",
                    "نَأْتِيْ",
                    "أُتِيْنَا",
                    "نُؤْتَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَتَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "آتٍ",
                    "مَأْتِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "آتِيَانِ",
                    "مَأْتِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "آتُوْنَ",
                    "مَأْتِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "آتِيَةٌ",
                    "مَأْتِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "آتِيَتَانِ",
                    "مَأْتِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "آتِيَاتٌ",
                    "مَأْتِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The Quranic word ﴿أَتَى﴾ is which صِيْغَةٌ?",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَتَى — He came", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of أَتَى", "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of آتَى", "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ of أَتَى"],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (continued): أَلَا (بَاب نَصَرَ يَنْصُرُ)",
          "lines": [
            {
              "html": "<bdi>أَلَا</bdi> (to neglect, to fail to do, root <bdi>أ ل و</bdi>) has a <bdi>وَاوٌ</bdi> as its <bdi>لَامٌ</bdi>, so the <bdi>الْمُضَارِعُ</bdi> ends in <bdi>وْ</bdi>: <bdi>يَأْلُوْ</bdi>. The <bdi>هَمْزَةُ الْوَصْلِ</bdi> of the <bdi>الْأَمْرُ</bdi> takes a dammah and the sākin hamzah after it becomes a <bdi>وَاوٌ</bdi>: <bdi>اُأْلُ</bdi> → <bdi>أُوْلُ</bdi>.",
              "list": false
            },
            {
              "html": "The <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> turns the <bdi>وَاوٌ</bdi> into a <bdi>ي</bdi> because of the preceding kasrah: <bdi>أُلِوَ</bdi> → <bdi>أُلِيَ</bdi>, and the <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> is <bdi>يُؤْلَى</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَلَا",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَلَا",
                    "يَأْلُوْ",
                    "أَلْوًا",
                    "أُلِيَ",
                    "يُؤْلَى",
                    "أَلْوًا",
                    "أُوْلُ",
                    "لَا تَأْلُ",
                    "آلٍ",
                    "مَأْلُوٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَلَا",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَلَا",
                    "يَأْلُوْ",
                    "أُلِيَ",
                    "يُؤْلَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَلَوَا",
                    "يَأْلُوَانِ",
                    "أُلِيَا",
                    "يُؤْلَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَلَوْا",
                    "يَأْلُوْنَ",
                    "أُلُوْا",
                    "يُؤْلَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَلَتْ",
                    "تَأْلُوْ",
                    "أُلِيَتْ",
                    "تُؤْلَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَلَتَا",
                    "تَأْلُوَانِ",
                    "أُلِيَتَا",
                    "تُؤْلَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَلَوْنَ",
                    "يَأْلُوْنَ",
                    "أُلِيْنَ",
                    "يُؤْلَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَلَوْتَ",
                    "تَأْلُوْ",
                    "أُلِيْتَ",
                    "تُؤْلَى",
                    "أُوْلُ",
                    "لَا تَأْلُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَلَوْتُمَا",
                    "تَأْلُوَانِ",
                    "أُلِيْتُمَا",
                    "تُؤْلَيَانِ",
                    "أُوْلُوَا",
                    "لَا تَأْلُوَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَلَوْتُمْ",
                    "تَأْلُوْنَ",
                    "أُلِيْتُمْ",
                    "تُؤْلَوْنَ",
                    "أُوْلُوْا",
                    "لَا تَأْلُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَلَوْتِ",
                    "تَأْلِيْنَ",
                    "أُلِيْتِ",
                    "تُؤْلَيْنَ",
                    "أُوْلِيْ",
                    "لَا تَأْلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَلَوْتُمَا",
                    "تَأْلُوَانِ",
                    "أُلِيْتُمَا",
                    "تُؤْلَيَانِ",
                    "أُوْلُوَا",
                    "لَا تَأْلُوَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَلَوْتُنَّ",
                    "تَأْلُوْنَ",
                    "أُلِيْتُنَّ",
                    "تُؤْلَيْنَ",
                    "أُوْلُوْنَ",
                    "لَا تَأْلُوْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَلَوْتُ",
                    "آلُوْ",
                    "أُلِيْتُ",
                    "أُوْلَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَلَوْنَا",
                    "نَأْلُوْ",
                    "أُلِيْنَا",
                    "نُؤْلَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَلَا",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "آلٍ",
                    "مَأْلُوٌّ"
                  ],
                  [
                    "Dual (m)",
                    "آلِيَانِ",
                    "مَأْلُوَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "آلُوْنَ",
                    "مَأْلُوُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "آلِيَةٌ",
                    "مَأْلُوَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "آلِيَتَانِ",
                    "مَأْلُوَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "آلِيَاتٌ",
                    "مَأْلُوَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "تَأْلِيْنَ is which صِيْغَةٌ of أَلَا?",
            "kind": "mcq",
            "options": ["الْمُخَاطَبَةُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ — You (f/s) neglect", "الْمُخَاطَبَاتُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ", "الْغَائِبَاتُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ", "الْمُخَاطَبَةُ مِنَ النَّهْيِ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (continued): أَدَّى — (II) بَاب تَفْعِيْل",
          "lines": [
            {
              "html": "<bdi>أَدَّى</bdi> (to fulfil, root <bdi>أ د ي</bdi>) is <bdi>نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ</bdi> in <bdi>بَاب تَفْعِيْل</bdi>. The doubled <bdi>عَيْنٌ</bdi> of the <bdi>باب</bdi> is unaffected; the initial hamzah is voweled throughout the <bdi>الْمَاضِيْ</bdi> (<bdi>أَدَّى</bdi>) and joins the <bdi>ؤ</bdi> of the <bdi>مُضَارِع</bdi> prefix (<bdi>يُؤَدِّيْ</bdi>). The <bdi>مَصْدَرٌ</bdi> is <bdi>تَأْدِيَةً</bdi> rather than <bdi>تَأْدِيْيًا</bdi> because of the <bdi>نَاقِص</bdi> rule.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَدَّى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَدَّى",
                    "يُؤَدِّيْ",
                    "تَأْدِيَةً",
                    "أُدِّيَ",
                    "يُؤَدَّى",
                    "تَأْدِيَةً",
                    "أَدِّ",
                    "لَا تُؤَدِّ",
                    "مُؤَدٍّ",
                    "مُؤَدًّى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَدَّى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَدَّى",
                    "يُؤَدِّيْ",
                    "أُدِّيَ",
                    "يُؤَدَّى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَدَّيَا",
                    "يُؤَدِّيَانِ",
                    "أُدِّيَا",
                    "يُؤَدَّيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَدَّوْا",
                    "يُؤَدُّوْنَ",
                    "أُدُّوْا",
                    "يُؤَدَّوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَدَّتْ",
                    "تُؤَدِّيْ",
                    "أُدِّيَتْ",
                    "تُؤَدَّى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَدَّتَا",
                    "تُؤَدِّيَانِ",
                    "أُدِّيَتَا",
                    "تُؤَدَّيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَدَّيْنَ",
                    "يُؤَدِّيْنَ",
                    "أُدِّيْنَ",
                    "يُؤَدَّيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَدَّيْتَ",
                    "تُؤَدِّيْ",
                    "أُدِّيْتَ",
                    "تُؤَدَّى",
                    "أَدِّ",
                    "لَا تُؤَدِّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَدَّيْتُمَا",
                    "تُؤَدِّيَانِ",
                    "أُدِّيْتُمَا",
                    "تُؤَدَّيَانِ",
                    "أَدِّيَا",
                    "لَا تُؤَدِّيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَدَّيْتُمْ",
                    "تُؤَدُّوْنَ",
                    "أُدِّيْتُمْ",
                    "تُؤَدَّوْنَ",
                    "أَدُّوْا",
                    "لَا تُؤَدُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَدَّيْتِ",
                    "تُؤَدِّيْنَ",
                    "أُدِّيْتِ",
                    "تُؤَدَّيْنَ",
                    "أَدِّيْ",
                    "لَا تُؤَدِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَدَّيْتُمَا",
                    "تُؤَدِّيَانِ",
                    "أُدِّيْتُمَا",
                    "تُؤَدَّيَانِ",
                    "أَدِّيَا",
                    "لَا تُؤَدِّيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَدَّيْتُنَّ",
                    "تُؤَدِّيْنَ",
                    "أُدِّيْتُنَّ",
                    "تُؤَدَّيْنَ",
                    "أَدِّيْنَ",
                    "لَا تُؤَدِّيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَدَّيْتُ",
                    "أُؤَدِّيْ",
                    "أُدِّيْتُ",
                    "أُؤَدَّى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَدَّيْنَا",
                    "نُؤَدِّيْ",
                    "أُدِّيْنَا",
                    "نُؤَدَّى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَدَّى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُؤَدٍّ",
                    "مُؤَدًّى"
                  ],
                  [
                    "Dual (m)",
                    "مُؤَدِّيَانِ",
                    "مُؤَدَّيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُؤَدُّوْنَ",
                    "مُؤَدَّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُؤَدِّيَةٌ",
                    "مُؤَدَّاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُؤَدِّيَتَانِ",
                    "مُؤَدَّاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُؤَدِّيَاتٌ",
                    "مُؤَدَّيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "أَدُّوْا is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of أَدَّى — Fulfil! (m/p)", "الْمُخَاطَبُ مِنَ الْأَمْرِ of رَأَى — See! (m/s)", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of رَاءَى — He was shown off to", "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَرَى — Show! (m/s)"],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (continued): آتَى — (IV) بَاب إِفْعَال",
          "lines": [
            {
              "html": "<bdi>آتَى</bdi> (to give, root <bdi>أ ت ي</bdi>) is <bdi>نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ</bdi> in <bdi>بَاب إِفْعَال</bdi>. Two hamzahs meet in the <bdi>الْمَاضِيْ</bdi> — <bdi>أَأْتَى</bdi> → <bdi>آتَى</bdi> — and the same <bdi>تَخْفِيْف</bdi> gives the <bdi>مَصْدَرٌ إِيْتَاءً</bdi> (<bdi>كَسْرَةٌ</bdi> + sakin hamzah ← <bdi>يَاءٌ</bdi>) and the <bdi>الْمَاضِي الْمَجْهُوْلُ أُوْتِيَ</bdi> (<bdi>ضَمَّةٌ</bdi> + sakin hamzah ← <bdi>وَاوٌ</bdi>).",
              "list": false
            },
            {
              "html": "<bdi>﴿وَآتُوا الزَّكَاةَ﴾</bdi> — <bdi>آتُوْا</bdi> is the <bdi>الْمُخَاطَبُوْنَ</bdi> of the <bdi>الْأَمْرُ</bdi> of <bdi>آتَى</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — آتَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "آتَى",
                    "يُؤْتِيْ",
                    "إِيْتَاءً",
                    "أُوْتِيَ",
                    "يُؤْتَى",
                    "إِيْتَاءً",
                    "آتِ",
                    "لَا تُؤْتِ",
                    "مُؤْتٍ",
                    "مُؤْتًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — آتَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "آتَى",
                    "يُؤْتِيْ",
                    "أُوْتِيَ",
                    "يُؤْتَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "آتَيَا",
                    "يُؤْتِيَانِ",
                    "أُوْتِيَا",
                    "يُؤْتَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "آتَوْا",
                    "يُؤْتُوْنَ",
                    "أُوْتُوْا",
                    "يُؤْتَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "آتَتْ",
                    "تُؤْتِيْ",
                    "أُوْتِيَتْ",
                    "تُؤْتَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "آتَتَا",
                    "تُؤْتِيَانِ",
                    "أُوْتِيَتَا",
                    "تُؤْتَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "آتَيْنَ",
                    "يُؤْتِيْنَ",
                    "أُوْتِيْنَ",
                    "يُؤْتَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "آتَيْتَ",
                    "تُؤْتِيْ",
                    "أُوْتِيْتَ",
                    "تُؤْتَى",
                    "آتِ",
                    "لَا تُؤْتِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "آتَيْتُمَا",
                    "تُؤْتِيَانِ",
                    "أُوْتِيْتُمَا",
                    "تُؤْتَيَانِ",
                    "آتِيَا",
                    "لَا تُؤْتِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "آتَيْتُمْ",
                    "تُؤْتُوْنَ",
                    "أُوْتِيْتُمْ",
                    "تُؤْتَوْنَ",
                    "آتُوْا",
                    "لَا تُؤْتُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "آتَيْتِ",
                    "تُؤْتِيْنَ",
                    "أُوْتِيْتِ",
                    "تُؤْتَيْنَ",
                    "آتِيْ",
                    "لَا تُؤْتِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "آتَيْتُمَا",
                    "تُؤْتِيَانِ",
                    "أُوْتِيْتُمَا",
                    "تُؤْتَيَانِ",
                    "آتِيَا",
                    "لَا تُؤْتِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "آتَيْتُنَّ",
                    "تُؤْتِيْنَ",
                    "أُوْتِيْتُنَّ",
                    "تُؤْتَيْنَ",
                    "آتِيْنَ",
                    "لَا تُؤْتِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "آتَيْتُ",
                    "أُوْتِيْ",
                    "أُوْتِيْتُ",
                    "أُوْتَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "آتَيْنَا",
                    "نُؤْتِيْ",
                    "أُوْتِيْنَا",
                    "نُؤْتَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — آتَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُؤْتٍ",
                    "مُؤْتًى"
                  ],
                  [
                    "Dual (m)",
                    "مُؤْتِيَانِ",
                    "مُؤْتَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُؤْتُوْنَ",
                    "مُؤْتَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُؤْتِيَةٌ",
                    "مُؤْتَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُؤْتِيَتَانِ",
                    "مُؤْتَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُؤْتِيَاتٌ",
                    "مُؤْتَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "أُوْتِيَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آتَى — He was given", "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of أَدَّى — Fulfil! (m/p)", "الْمُخَاطَبُ مِنَ الْأَمْرِ of رَأَى — See! (m/s)", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of رَاءَى — He was shown off to"],
            "correct": 0
          }
        },
        {
          "heading": "Part 6 (continued): اِيْتَلَى — (VIII) بَاب اِفْتِعَال",
          "lines": [
            {
              "html": "<bdi>اِيْتَلَى</bdi> (to take an oath, root <bdi>أ ل و</bdi>) is <bdi>نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ</bdi> in <bdi>بَاب اِفْتِعَال</bdi>. The <bdi>هَمْزَةُ الْوَصْلِ</bdi> carries a kasrah and the root hamzah after it is sākin, so <bdi>اِأْتَلَى</bdi> → <bdi>اِيْتَلَى</bdi>. The <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> has a dammah before the sākin hamzah: <bdi>اُأْتُلِيَ</bdi> → <bdi>أُوْتُلِيَ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>﴿وَلَا يَأْتَلِ أُولُو الْفَضْلِ مِنكُمْ﴾</bdi> — <bdi>يَأْتَلِ</bdi> is the <bdi>جزم</bdi> (nahy) form of <bdi>يَأْتَلِيْ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِيْتَلَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِيْتَلَى",
                    "يَأْتَلِيْ",
                    "اِيْتِلَاءً",
                    "أُوْتُلِيَ",
                    "يُؤْتَلَى",
                    "اِيْتِلَاءً",
                    "اِيْتَلِ",
                    "لَا تَأْتَلِ",
                    "مُؤْتَلٍ",
                    "مُؤْتَلًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِيْتَلَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِيْتَلَى",
                    "يَأْتَلِيْ",
                    "أُوْتُلِيَ",
                    "يُؤْتَلَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِيْتَلَيَا",
                    "يَأْتَلِيَانِ",
                    "أُوْتُلِيَا",
                    "يُؤْتَلَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِيْتَلَوْا",
                    "يَأْتَلُوْنَ",
                    "أُوْتُلُوْا",
                    "يُؤْتَلَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِيْتَلَتْ",
                    "تَأْتَلِيْ",
                    "أُوْتُلِيَتْ",
                    "تُؤْتَلَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِيْتَلَتَا",
                    "تَأْتَلِيَانِ",
                    "أُوْتُلِيَتَا",
                    "تُؤْتَلَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِيْتَلَيْنَ",
                    "يَأْتَلِيْنَ",
                    "أُوْتُلِيْنَ",
                    "يُؤْتَلَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِيْتَلَيْتَ",
                    "تَأْتَلِيْ",
                    "أُوْتُلِيْتَ",
                    "تُؤْتَلَى",
                    "اِيْتَلِ",
                    "لَا تَأْتَلِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِيْتَلَيْتُمَا",
                    "تَأْتَلِيَانِ",
                    "أُوْتُلِيْتُمَا",
                    "تُؤْتَلَيَانِ",
                    "اِيْتَلِيَا",
                    "لَا تَأْتَلِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِيْتَلَيْتُمْ",
                    "تَأْتَلُوْنَ",
                    "أُوْتُلِيْتُمْ",
                    "تُؤْتَلَوْنَ",
                    "اِيْتَلُوْا",
                    "لَا تَأْتَلُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِيْتَلَيْتِ",
                    "تَأْتَلِيْنَ",
                    "أُوْتُلِيْتِ",
                    "تُؤْتَلَيْنَ",
                    "اِيْتَلِيْ",
                    "لَا تَأْتَلِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِيْتَلَيْتُمَا",
                    "تَأْتَلِيَانِ",
                    "أُوْتُلِيْتُمَا",
                    "تُؤْتَلَيَانِ",
                    "اِيْتَلِيَا",
                    "لَا تَأْتَلِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِيْتَلَيْتُنَّ",
                    "تَأْتَلِيْنَ",
                    "أُوْتُلِيْتُنَّ",
                    "تُؤْتَلَيْنَ",
                    "اِيْتَلِيْنَ",
                    "لَا تَأْتَلِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِيْتَلَيْتُ",
                    "آتَلِيْ",
                    "أُوْتُلِيْتُ",
                    "أُوْتَلَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِيْتَلَيْنَا",
                    "نَأْتَلِيْ",
                    "أُوْتُلِيْنَا",
                    "نُؤْتَلَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — اِيْتَلَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُؤْتَلٍ",
                    "مُؤْتَلًى"
                  ],
                  [
                    "Dual (m)",
                    "مُؤْتَلِيَانِ",
                    "مُؤْتَلَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُؤْتَلُوْنَ",
                    "مُؤْتَلَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُؤْتَلِيَةٌ",
                    "مُؤْتَلَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُؤْتَلِيَتَانِ",
                    "مُؤْتَلَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُؤْتَلِيَاتٌ",
                    "مُؤْتَلَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the الْمَاضِي الْمَجْهُوْلُ of اِيْتَلَى?",
            "kind": "mcq",
            "options": ["أُوْتُلِيَ", "أُوْتِيَ", "اُوْتُلِيَ", "أُتِيَ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 7: نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ — رَأَى (بَاب فَتَحَ يَفْتَحُ)",
          "lines": [
            {
              "html": "<bdi>رَأَى</bdi> (to see, root <bdi>ر أ ي</bdi>) has a hamzah as its <bdi>عَيْنٌ</bdi> and a weak <bdi>ي</bdi> as its <bdi>لَامٌ</bdi>. Its most striking feature is that the hamzah is dropped altogether in the <bdi>الْمُضَارِعُ</bdi>: <bdi>يَرْأَى</bdi> → <bdi>يَرَى</bdi>. It is dropped in the <bdi>الْأَمْرُ</bdi> too, which is reduced to the single letter <bdi>رَ</bdi>.",
              "list": false
            },
            {
              "html": "The hamzah is kept in the <bdi>الْمَاضِيْ</bdi> (<bdi>رَأَى، رَأَيْتَ</bdi>) and in the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> (<bdi>رُئِيَ</bdi>), and it re-appears in the <bdi>اِسْمُ الْفَاعِلِ رَاءٍ</bdi> and the <bdi>اِسْمُ الْمَفْعُوْلِ مَرْئِيٌّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — رَأَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "رَأَى",
                    "يَرَى",
                    "رُؤْيَةً",
                    "رُئِيَ",
                    "يُرَى",
                    "رُؤْيَةً",
                    "رَ",
                    "لَا تَرَ",
                    "رَاءٍ",
                    "مَرْئِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — رَأَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "رَأَى",
                    "يَرَى",
                    "رُئِيَ",
                    "يُرَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "رَأَيَا",
                    "يَرَيَانِ",
                    "رُئِيَا",
                    "يُرَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "رَأَوْا",
                    "يَرَوْنَ",
                    "رُؤُوْا",
                    "يُرَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "رَأَتْ",
                    "تَرَى",
                    "رُئِيَتْ",
                    "تُرَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "رَأَتَا",
                    "تَرَيَانِ",
                    "رُئِيَتَا",
                    "تُرَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "رَأَيْنَ",
                    "يَرَيْنَ",
                    "رُئِيْنَ",
                    "يُرَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "رَأَيْتَ",
                    "تَرَى",
                    "رُئِيْتَ",
                    "تُرَى",
                    "رَ",
                    "لَا تَرَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "رَأَيْتُمَا",
                    "تَرَيَانِ",
                    "رُئِيْتُمَا",
                    "تُرَيَانِ",
                    "رَيَا",
                    "لَا تَرَيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "رَأَيْتُمْ",
                    "تَرَوْنَ",
                    "رُئِيْتُمْ",
                    "تُرَوْنَ",
                    "رَوْا",
                    "لَا تَرَوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "رَأَيْتِ",
                    "تَرَيْنَ",
                    "رُئِيْتِ",
                    "تُرَيْنَ",
                    "رَيْ",
                    "لَا تَرَيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "رَأَيْتُمَا",
                    "تَرَيَانِ",
                    "رُئِيْتُمَا",
                    "تُرَيَانِ",
                    "رَيَا",
                    "لَا تَرَيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "رَأَيْتُنَّ",
                    "تَرَيْنَ",
                    "رُئِيْتُنَّ",
                    "تُرَيْنَ",
                    "رَيْنَ",
                    "لَا تَرَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "رَأَيْتُ",
                    "أَرَى",
                    "رُئِيْتُ",
                    "أُرَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "رَأَيْنَا",
                    "نَرَى",
                    "رُئِيْنَا",
                    "نُرَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — رَأَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "رَاءٍ",
                    "مَرْئِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "رَائِيَانِ",
                    "مَرْئِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "رَاءُوْنَ",
                    "مَرْئِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "رَائِيَةٌ",
                    "مَرْئِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "رَائِيَتَانِ",
                    "مَرْئِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "رَائِيَاتٌ",
                    "مَرْئِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "رَ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ مِنَ الْأَمْرِ of رَأَى — See! (m/s)", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of رَاءَى — He was shown off to", "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَرَى — Show! (m/s)", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of تَرَاءَى — He was appeared to"],
            "correct": 0
          }
        },
        {
          "heading": "Part 7 (continued): رَاءَى — (III) بَاب مُفَاعَلَة",
          "lines": [
            {
              "html": "<bdi>رَاءَى</bdi> (to show off, root <bdi>ر أ ي</bdi>) is <bdi>نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ</bdi> in <bdi>بَاب مُفَاعَلَة</bdi>. Here the hamzah is not dropped: the alif of <bdi>مُفَاعَلَة</bdi> comes before it (<bdi>رَاءَى يُرَائِيْ</bdi>). In the <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> that alif becomes a <bdi>وَاوٌ</bdi> after the dammah: <bdi>رُوْئِيَ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — رَاءَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "رَاءَى",
                    "يُرَائِيْ",
                    "مُرَاءَاةً",
                    "رُوْئِيَ",
                    "يُرَاءَى",
                    "مُرَاءَاةً",
                    "رَاءِ",
                    "لَا تُرَاءِ",
                    "مُرَاءٍ",
                    "مُرَاءًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — رَاءَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "رَاءَى",
                    "يُرَائِيْ",
                    "رُوْئِيَ",
                    "يُرَاءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "رَاءَيَا",
                    "يُرَائِيَانِ",
                    "رُوْئِيَا",
                    "يُرَاءَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "رَاءَوْا",
                    "يُرَاءُوْنَ",
                    "رُوْئُوْا",
                    "يُرَاءَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "رَاءَتْ",
                    "تُرَائِيْ",
                    "رُوْئِيَتْ",
                    "تُرَاءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "رَاءَتَا",
                    "تُرَائِيَانِ",
                    "رُوْئِيَتَا",
                    "تُرَاءَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "رَاءَيْنَ",
                    "يُرَائِيْنَ",
                    "رُوْئِيْنَ",
                    "يُرَاءَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "رَاءَيْتَ",
                    "تُرَائِيْ",
                    "رُوْئِيْتَ",
                    "تُرَاءَى",
                    "رَاءِ",
                    "لَا تُرَاءِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "رَاءَيْتُمَا",
                    "تُرَائِيَانِ",
                    "رُوْئِيْتُمَا",
                    "تُرَاءَيَانِ",
                    "رَائِيَا",
                    "لَا تُرَائِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "رَاءَيْتُمْ",
                    "تُرَاءُوْنَ",
                    "رُوْئِيْتُمْ",
                    "تُرَاءَوْنَ",
                    "رَاءُوْا",
                    "لَا تُرَاءُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "رَاءَيْتِ",
                    "تُرَائِيْنَ",
                    "رُوْئِيْتِ",
                    "تُرَاءَيْنَ",
                    "رَائِيْ",
                    "لَا تُرَائِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "رَاءَيْتُمَا",
                    "تُرَائِيَانِ",
                    "رُوْئِيْتُمَا",
                    "تُرَاءَيَانِ",
                    "رَائِيَا",
                    "لَا تُرَائِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "رَاءَيْتُنَّ",
                    "تُرَائِيْنَ",
                    "رُوْئِيْتُنَّ",
                    "تُرَاءَيْنَ",
                    "رَائِيْنَ",
                    "لَا تُرَائِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "رَاءَيْتُ",
                    "أُرَائِيْ",
                    "رُوْئِيْتُ",
                    "أُرَاءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "رَاءَيْنَا",
                    "نُرَائِيْ",
                    "رُوْئِيْنَا",
                    "نُرَاءَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — رَاءَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُرَاءٍ",
                    "مُرَاءًى"
                  ],
                  [
                    "Dual (m)",
                    "مُرَائِيَانِ",
                    "مُرَاءَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُرَاءُوْنَ",
                    "مُرَاءَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُرَائِيَةٌ",
                    "مُرَاءَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُرَائِيَتَانِ",
                    "مُرَاءَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُرَائِيَاتٌ",
                    "مُرَاءَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "رُوْئِيَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of رَاءَى — He was shown off to", "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَرَى — Show! (m/s)", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of تَرَاءَى — He was appeared to", "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَبَى — Reject! (m/s)"],
            "correct": 0
          }
        },
        {
          "heading": "Part 7 (continued): أَرَى — (IV) بَاب إِفْعَال",
          "lines": [
            {
              "html": "<bdi>أَرَى</bdi> (to show, root <bdi>ر أ ي</bdi>) is <bdi>رَأَى</bdi> in <bdi>بَاب إِفْعَال</bdi>. As in the <bdi>ثُلَاثِيّ</bdi>, the hamzah is dropped: <bdi>أَرْأَى</bdi> → <bdi>أَرَى</bdi>, <bdi>يُرْئِيْ</bdi> → <bdi>يُرِيْ</bdi>. The result is an unusually short conjugation — the <bdi>الْأَمْرُ</bdi> is <bdi>أَرِ</bdi> and the <bdi>النَّهْيُ لَا تُرِ</bdi>.",
              "list": false
            },
            {
              "html": "Take care to distinguish the <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> of <bdi>أَرَى</bdi> (<bdi>يُرَى</bdi>) from that of <bdi>رَأَى</bdi> — they are identical in form; only the context and the <bdi>الْمَاضِيْ</bdi> (<bdi>أُرِيَ</bdi> vs <bdi>رُئِيَ</bdi>) tell them apart.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَرَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَرَى",
                    "يُرِيْ",
                    "إِرَاءَةً",
                    "أُرِيَ",
                    "يُرَى",
                    "إِرَاءَةً",
                    "أَرِ",
                    "لَا تُرِ",
                    "مُرٍ",
                    "مُرًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَرَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَرَى",
                    "يُرِيْ",
                    "أُرِيَ",
                    "يُرَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَرَيَا",
                    "يُرِيَانِ",
                    "أُرِيَا",
                    "يُرَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَرَوْا",
                    "يُرُوْنَ",
                    "أُرُوْا",
                    "يُرَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَرَتْ",
                    "تُرِيْ",
                    "أُرِيَتْ",
                    "تُرَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَرَتَا",
                    "تُرِيَانِ",
                    "أُرِيَتَا",
                    "تُرَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَرَيْنَ",
                    "يُرِيْنَ",
                    "أُرِيْنَ",
                    "يُرَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَرَيْتَ",
                    "تُرِيْ",
                    "أُرِيْتَ",
                    "تُرَى",
                    "أَرِ",
                    "لَا تُرِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَرَيْتُمَا",
                    "تُرِيَانِ",
                    "أُرِيْتُمَا",
                    "تُرَيَانِ",
                    "أَرِيَا",
                    "لَا تُرِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَرَيْتُمْ",
                    "تُرُوْنَ",
                    "أُرِيْتُمْ",
                    "تُرَوْنَ",
                    "أَرُوْا",
                    "لَا تُرُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَرَيْتِ",
                    "تُرِيْنَ",
                    "أُرِيْتِ",
                    "تُرَيْنَ",
                    "أَرِيْ",
                    "لَا تُرِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَرَيْتُمَا",
                    "تُرِيَانِ",
                    "أُرِيْتُمَا",
                    "تُرَيَانِ",
                    "أَرِيَا",
                    "لَا تُرِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَرَيْتُنَّ",
                    "تُرِيْنَ",
                    "أُرِيْتُنَّ",
                    "تُرَيْنَ",
                    "أَرِيْنَ",
                    "لَا تُرِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَرَيْتُ",
                    "أُرِيْ",
                    "أُرِيْتُ",
                    "أُرَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَرَيْنَا",
                    "نُرِيْ",
                    "أُرِيْنَا",
                    "نُرَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَرَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُرٍ",
                    "مُرًى"
                  ],
                  [
                    "Dual (m)",
                    "مُرِيَانِ",
                    "مُرَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُرُوْنَ",
                    "مُرَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُرِيَةٌ",
                    "مُرَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُرِيَتَانِ",
                    "مُرَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُرِيَاتٌ",
                    "مُرَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "أَرِ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ مِنَ الْأَمْرِ of أَرَى — Show! (m/s)", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of تَرَاءَى — He was appeared to", "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَبَى — Reject! (m/s)", "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى — I reject"],
            "correct": 0
          }
        },
        {
          "heading": "Part 7 (continued): تَرَاءَى — (VI) بَاب تَفَاعُل",
          "lines": [
            {
              "html": "<bdi>تَرَاءَى</bdi> (to present oneself, to appear, root <bdi>ر أ ي</bdi>) is <bdi>نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ</bdi> in <bdi>بَاب تَفَاعُل</bdi>. Like <bdi>بَاب مُفَاعَلَة</bdi> it keeps the hamzah after the alif. The <bdi>الْمَاضِي الْمَجْهُوْلُ</bdi> of <bdi>تَفَاعُل</bdi> is <bdi>تُفُوْعِلَ</bdi>, which here gives <bdi>تُرُوْئِيَ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>﴿فَلَمَّا تَرَاءَى الْجَمْعَانِ﴾</bdi> — <bdi>تَرَاءَى</bdi> is the <bdi>الْغَائِبُ</bdi> of the <bdi>الْمَاضِي الْمَعْلُوْمُ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَرَاءَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَرَاءَى",
                    "يَتَرَاءَى",
                    "تَرَائِيًا",
                    "تُرُوْئِيَ",
                    "يُتَرَاءَى",
                    "تَرَائِيًا",
                    "تَرَاءَ",
                    "لَا تَتَرَاءَ",
                    "مُتَرَاءٍ",
                    "مُتَرَاءًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَرَاءَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَرَاءَى",
                    "يَتَرَاءَى",
                    "تُرُوْئِيَ",
                    "يُتَرَاءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَرَاءَيَا",
                    "يَتَرَاءَيَانِ",
                    "تُرُوْئِيَا",
                    "يُتَرَاءَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَرَاءَوْا",
                    "يَتَرَاءَوْنَ",
                    "تُرُوْئُوْا",
                    "يُتَرَاءَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَرَاءَتْ",
                    "تَتَرَاءَى",
                    "تُرُوْئِيَتْ",
                    "تُتَرَاءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَرَاءَتَا",
                    "تَتَرَاءَيَانِ",
                    "تُرُوْئِيَتَا",
                    "تُتَرَاءَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَرَاءَيْنَ",
                    "يَتَرَاءَيْنَ",
                    "تُرُوْئِيْنَ",
                    "يُتَرَاءَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَرَاءَيْتَ",
                    "تَتَرَاءَى",
                    "تُرُوْئِيْتَ",
                    "تُتَرَاءَى",
                    "تَرَاءَ",
                    "لَا تَتَرَاءَ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَرَاءَيْتُمَا",
                    "تَتَرَاءَيَانِ",
                    "تُرُوْئِيْتُمَا",
                    "تُتَرَاءَيَانِ",
                    "تَرَاءَيَا",
                    "لَا تَتَرَاءَيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَرَاءَيْتُمْ",
                    "تَتَرَاءَوْنَ",
                    "تُرُوْئِيْتُمْ",
                    "تُتَرَاءَوْنَ",
                    "تَرَاءَوْا",
                    "لَا تَتَرَاءَوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَرَاءَيْتِ",
                    "تَتَرَاءَيْنَ",
                    "تُرُوْئِيْتِ",
                    "تُتَرَاءَيْنَ",
                    "تَرَاءَيْ",
                    "لَا تَتَرَاءَيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَرَاءَيْتُمَا",
                    "تَتَرَاءَيَانِ",
                    "تُرُوْئِيْتُمَا",
                    "تُتَرَاءَيَانِ",
                    "تَرَاءَيَا",
                    "لَا تَتَرَاءَيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَرَاءَيْتُنَّ",
                    "تَتَرَاءَيْنَ",
                    "تُرُوْئِيْتُنَّ",
                    "تُتَرَاءَيْنَ",
                    "تَرَاءَيْنَ",
                    "لَا تَتَرَاءَيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَرَاءَيْتُ",
                    "أَتَرَاءَى",
                    "تُرُوْئِيْتُ",
                    "أُتَرَاءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَرَاءَيْنَا",
                    "نَتَرَاءَى",
                    "تُرُوْئِيْنَا",
                    "نُتَرَاءَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — تَرَاءَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُتَرَاءٍ",
                    "مُتَرَاءًى"
                  ],
                  [
                    "Dual (m)",
                    "مُتَرَائِيَانِ",
                    "مُتَرَاءَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُتَرَاءُوْنَ",
                    "مُتَرَاءَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُتَرَائِيَةٌ",
                    "مُتَرَاءَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُتَرَائِيَتَانِ",
                    "مُتَرَاءَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُتَرَائِيَاتٌ",
                    "مُتَرَاءَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "تُرُوْئِيَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of تَرَاءَى — He was appeared to", "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَبَى — Reject! (m/s)", "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى — I reject", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آتَى — He was given"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 6–7: نَاقِصٌ Combinations",
        "rows": [
          {
            "label": "ناقص ومهموز الفاء — باب فتح; أمر اِيْبَ",
            "arabic": "أَبَى يَأْبَى إِبَاءً",
            "meaning": "ناقص ومهموز الفاء — باب فتح; أمر اِيْبَ",
            "unlockAt": 0
          },
          {
            "label": "ناقص ومهموز الفاء — باب سمع; أمر اِيْسَ",
            "arabic": "أَسِيَ يَأْسَى أَسًى",
            "meaning": "ناقص ومهموز الفاء — باب سمع; أمر اِيْسَ",
            "unlockAt": 0
          },
          {
            "label": "ناقص ومهموز الفاء — باب ضرب; أمر اِيْتِ",
            "arabic": "أَتَى يَأْتِيْ إِتْيَانًا",
            "meaning": "ناقص ومهموز الفاء — باب ضرب; أمر اِيْتِ",
            "unlockAt": 1
          },
          {
            "label": "ناقص ومهموز الفاء — باب نصر; أمر أُوْلُ، مجهول أُلِيَ",
            "arabic": "أَلَا يَأْلُوْ أَلْوًا",
            "meaning": "ناقص ومهموز الفاء — باب نصر; أمر أُوْلُ، مجهول أُلِيَ",
            "unlockAt": 2
          },
          {
            "label": "ناقص ومهموز الفاء — باب تفعيل; أمر أَدِّ",
            "arabic": "أَدَّى يُؤَدِّيْ تَأْدِيَةً",
            "meaning": "ناقص ومهموز الفاء — باب تفعيل; أمر أَدِّ",
            "unlockAt": 2
          },
          {
            "label": "ناقص ومهموز الفاء — باب إفعال; مجهول أُوْتِيَ، أمر آتِ",
            "arabic": "آتَى يُؤْتِيْ إِيْتَاءً",
            "meaning": "ناقص ومهموز الفاء — باب إفعال; مجهول أُوْتِيَ، أمر آتِ",
            "unlockAt": 3
          },
          {
            "label": "ناقص ومهموز الفاء — باب افتعال; مجهول أُوْتُلِيَ",
            "arabic": "اِيْتَلَى يَأْتَلِيْ اِيْتِلَاءً",
            "meaning": "ناقص ومهموز الفاء — باب افتعال; مجهول أُوْتُلِيَ",
            "unlockAt": 4
          },
          {
            "label": "ناقص ومهموز العين — باب فتح; the hamzah drops in the مضارع and أمر (رَ)",
            "arabic": "رَأَى يَرَى رُؤْيَةً",
            "meaning": "ناقص ومهموز العين — باب فتح; the hamzah drops in the مضارع and أمر (رَ)",
            "unlockAt": 5
          },
          {
            "label": "ناقص ومهموز العين — باب مفاعلة; مجهول رُوْئِيَ",
            "arabic": "رَاءَى يُرَائِيْ مُرَاءَاةً",
            "meaning": "ناقص ومهموز العين — باب مفاعلة; مجهول رُوْئِيَ",
            "unlockAt": 5
          },
          {
            "label": "ناقص ومهموز العين — باب إفعال; أمر أَرِ، نهي لَا تُرِ",
            "arabic": "أَرَى يُرِيْ إِرَاءَةً",
            "meaning": "ناقص ومهموز العين — باب إفعال; أمر أَرِ، نهي لَا تُرِ",
            "unlockAt": 6
          },
          {
            "label": "ناقص ومهموز العين — باب تفاعل; مجهول تُرُوْئِيَ",
            "arabic": "تَرَاءَى يَتَرَاءَى تَرَائِيًا",
            "meaning": "ناقص ومهموز العين — باب تفاعل; مجهول تُرُوْئِيَ",
            "unlockAt": 7
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the الْمُتَكَلِّمُ of the الْمُضَارِعُ الْمَعْلُوْمُ of أَبَى?",
          "options": [
            "أَأْبَى",
            "آبَى",
            "أُوْبَى",
            "نَأْبَى"
          ],
          "correct": 1,
          "explanation": "أَأْبَى has fathah + a sākin hamzah, which becomes a مَدَّةٌ: آبَى. أُوْبَى is the الْمُتَكَلِّم of the passive مضارع, and نَأْبَى is 'we reject'."
        },
        {
          "q": "The الْأَمْرُ of أَلَا يَأْلُوْ for الْمُخَاطَبُ is…",
          "options": [
            "اِيْلُ",
            "أُوْلُ",
            "أُلْ",
            "آلُ"
          ],
          "correct": 1,
          "explanation": "The همزة الوصل takes a dammah (because the مضارع has a dammah), and dammah + sākin hamzah ← وَاوٌ: اُأْلُ → أُوْلُ. أُلْ is the أمر of آلَ (Lesson 3)."
        },
        {
          "q": "Why is the الْمَصْدَرُ of آتَى written إِيْتَاءً and not إِأْتَاءً?",
          "options": [
            "Because a kasrah followed by a sākin hamzah changes the hamzah into a يَاءٌ",
            "Because the hamzah is always dropped in بَاب إِفْعَال",
            "Because the root's first letter is a يَاءٌ",
            "Because it is a نَاقِصٌ verb"
          ],
          "correct": 0,
          "explanation": "The rule of تَخْفِيْف: كَسْرَةٌ + sakin hamzah ← يَاءٌ. Hence إِأْتَاءً → إِيْتَاءً, and the same in the أمر اِيْتِ of أَتَى."
        },
        {
          "q": "What happens to the hamzah of رَأَى in the الْمُضَارِعُ?",
          "options": [
            "It becomes an alif",
            "It is dropped entirely: يَرْأَى → يَرَى",
            "It becomes a يَاءٌ",
            "It is doubled"
          ],
          "correct": 1,
          "explanation": "The عين hamzah of رَأَى is dropped in the مضارع and in the أمر, giving يَرَى and رَ. It returns in the ماضي (رَأَى) and in رُئِيَ، مَرْئِيٌّ."
        },
        {
          "q": "الْمَاضِي الْمَجْهُوْلُ of تَرَاءَى is…",
          "options": [
            "تُرُوْئِيَ",
            "رُوْئِيَ",
            "تَرُوْئِيَ",
            "أُرِيَ"
          ],
          "correct": 0,
          "explanation": "بَاب تَفَاعُل makes its passive ماضي on تُفُوْعِلَ: تُرُوْئِيَ. رُوْئِيَ is the passive of رَاءَى (مفاعلة) and أُرِيَ of أَرَى (إفعال)."
        },
        {
          "q": "Which two verbs of Part 7 share the very same الْمُضَارِعُ الْمَجْهُوْلُ يُرَى?",
          "options": [
            "رَأَى (باب فتح) and أَرَى (باب إفعال)",
            "رَاءَى (باب مفاعلة) and تَرَاءَى (باب تفاعل)",
            "أَرَى (باب إفعال) and رَاءَى (باب مفاعلة)",
            "رَأَى (باب فتح) and تَرَاءَى (باب تفاعل)"
          ],
          "correct": 0,
          "explanation": "Both رَأَى and أَرَى give يُرَى in the passive مضارع; they are told apart by their passive ماضي — رُئِيَ vs أُرِيَ."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "أَبَوْا is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَبَى — They (m/p) rejected",
            "الْمُخَاطَبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَبَى",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ of أَبَى"
          ],
          "correct": 0,
          "explanation": "The ى of أَبَى falls before the وَاوُ الْجَمَاعَةِ: أَبَوْا. The مضارع plural is يَأْبَوْنَ and the passive أُبُوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The اِسْمُ الْمَفْعُوْلِ of أَسِيَ is…",
          "options": [
            "مَأْسِيٌّ",
            "آسٍ",
            "مَأْسُوٌّ",
            "مَأْبِيٌّ"
          ],
          "correct": 0,
          "explanation": "مَفْعُوْلٌ of a ي-ending root gives مَفْعِيٌّ: مَأْسِيٌّ. آسٍ is the اسم الفاعل, and مَأْبِيٌّ belongs to أَبَى."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَأْلِيْنَ is which صِيْغَةٌ of أَلَا?",
          "options": [
            "الْمُخَاطَبَةُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ — You (f/s) neglect",
            "الْمُخَاطَبَاتُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ",
            "الْغَائِبَاتُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ",
            "الْمُخَاطَبَةُ مِنَ النَّهْيِ"
          ],
          "correct": 0,
          "explanation": "The وَاوٌ is replaced by a يَاءٌ before the ي of the feminine singular: تَأْلُوْ + ـيْنَ → تَأْلِيْنَ. The feminine plural is تَأْلُوْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which is the الْمَصْدَرُ of أَدَّى يُؤَدِّيْ?",
          "options": [
            "تَأْدِيَةً",
            "إِيْتَاءً",
            "تَأْسِيَةً",
            "اِيْتِلَاءً"
          ],
          "correct": 0,
          "explanation": "بَاب تَفْعِيْل of a نَاقِص root makes its مصدر on تَفْعِلَةً: تَأْدِيَةً. تَأْسِيَةً belongs to أَسَّى, and إِيْتَاءً to آتَى."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "آتُوْا is…",
          "options": [
            "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of آتَى — Give! (m/p)",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of آتَى",
            "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of أَتَى",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of آتَى"
          ],
          "correct": 0,
          "explanation": "The أمر of آتَى is آتِ; for the masculine plural it is آتُوْا. آتَوْا (with fathah before the واو) is the الْغَائِبُوْنَ of the ماضي, and the أمر of أَتَى is اِيْتُوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمَاضِي الْمَجْهُوْلُ of اِيْتَلَى?",
          "options": [
            "أُوْتُلِيَ",
            "أُوْتِيَ",
            "اُوْتُلِيَ",
            "أُتِيَ"
          ],
          "correct": 0,
          "explanation": "بَاب اِفْتِعَال makes its passive ماضي on اُفْتُعِلَ; here اُأْتُلِيَ → أُوْتُلِيَ (ضمة + sākin hamzah ← واو). أُوْتِيَ is the passive of آتَى."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "رَأَوْا and رُؤُوْا differ how?",
          "options": [
            "رَأَوْا is the active ماضي (They m/p saw); رُؤُوْا is the passive (They m/p were seen)",
            "رَأَوْا is the passive; رُؤُوْا is the active",
            "Both are active but from different أبواب",
            "رَأَوْا is a مضارع and رُؤُوْا a ماضي"
          ],
          "correct": 0,
          "explanation": "The passive of رَأَى is رُئِيَ; before the وَاوُ الْجَمَاعَةِ the ي falls and the ؤ takes a dammah: رُؤُوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "مُرَاءٍ is the اِسْمُ الْفَاعِلِ of which verb?",
          "options": [
            "رَاءَى (باب مفاعلة)",
            "أَرَى (باب إفعال)",
            "رَأَى (باب فتح)",
            "تَرَاءَى (باب تفاعل)"
          ],
          "correct": 0,
          "explanation": "مُفَاعِلٌ is the اسم الفاعل pattern of مُفَاعَلَة: مُرَائِيٌ → مُرَاءٍ. أَرَى gives مُرٍ, رَأَى gives رَاءٍ and تَرَاءَى gives مُتَرَاءٍ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر إِبَاءً, write الْمُخَاطَبُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَأْبَ",
            "لَا تَأْبَى",
            "لَا تَأْبَيْ",
            "اِيْبَ"
          ],
          "correct": 0,
          "explanation": "The مصدر إِبَاءً belongs to أَبَى يَأْبَى; the جزم of تَأْبَى drops the ى, giving لَا تَأْبَ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر إِتْيَانًا, write الْمُثَنَّى مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَأْتِيَّانِ",
            "آتِيَانِ",
            "مَأْتِيَّتَانِ",
            "مَأْتِيُّوْنَ"
          ],
          "correct": 0,
          "explanation": "الْمُثَنَّى is the masculine dual. اسم المفعول of أَتَى is مَأْتِيٌّ → dual مَأْتِيَّانِ. آتِيَانِ is the dual اسم الفاعل."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر أَلْوًا, write الْغَائِبَتَانِ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "تُؤْلَيَانِ",
            "يُؤْلَيَانِ",
            "تَأْلُوَانِ",
            "أُلِيَتَا"
          ],
          "correct": 0,
          "explanation": "The passive مضارع of أَلَا is يُؤْلَى; the feminine dual takes the ت prefix: تُؤْلَيَانِ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر إِيْتَاءً, write الْغَائِبَاتُ مِنَ الْمَاضِي الْمَعْلُوْمِ.",
          "options": [
            "آتَيْنَ",
            "أَتَيْنَ",
            "آتُوْا",
            "أُوْتِيْنَ"
          ],
          "correct": 0,
          "explanation": "إِيْتَاءً is the مصدر of آتَى; the feminine plural of the active ماضي is آتَيْنَ. أَتَيْنَ belongs to أَتَى, and أُوْتِيْنَ is the passive."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر تَأْدِيَةً, write الْمُثَنَّى مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُؤَدِّيَانِ",
            "مُؤَدَّيَانِ",
            "مُؤَدِّيَتَانِ",
            "مُؤَدُّوْنَ"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of أَدَّى is مُؤَدٍّ; the masculine dual restores the ي: مُؤَدِّيَانِ. مُؤَدَّيَانِ (with fathah) is the اسم المفعول dual."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر رُؤْيَةً, write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "رَاءُوْنَ",
            "رَائِيَاتٌ",
            "مَرْئِيُّوْنَ",
            "رَائِيَانِ"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of رَأَى is رَاءٍ; the masculine plural is رَاءُوْنَ. مَرْئِيُّوْنَ is the plural اسم المفعول."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر رُؤْيَةً, write الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "يُرَوْنَ",
            "يَرَوْنَ",
            "تُرَوْنَ",
            "رُؤُوْا"
          ],
          "correct": 0,
          "explanation": "The passive مضارع of رَأَى is يُرَى; the masculine plural is يُرَوْنَ. يَرَوْنَ is the active 'they see'."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر إِرَاءَةً, write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُرُوْنَ",
            "مُرَوْنَ",
            "رَاءُوْنَ",
            "مُرِيَاتٌ"
          ],
          "correct": 0,
          "explanation": "إِرَاءَةً is the مصدر of أَرَى; its اسم الفاعل is مُرٍ and the masculine plural مُرُوْنَ. مُرَوْنَ (with fathah) is the اسم المفعول plural."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر تَرَائِيًا, write جَمْعُ الْمُؤَنَّثِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُتَرَائِيَاتٌ",
            "مُتَرَاءَيَاتٌ",
            "مُتَرَاءُوْنَ",
            "مُتَرَائِيَتَانِ"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of تَرَاءَى is مُتَرَاءٍ; the feminine plural is مُتَرَائِيَاتٌ. مُتَرَاءَيَاتٌ is the اسم المفعول plural."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر مُرَاءَاةً, write جَمْعُ الْمُؤَنَّثِ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُرَاءَيَاتٌ",
            "مُرَائِيَاتٌ",
            "مُرَاءَاتَانِ",
            "مُرَاءُوْنَ"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of رَاءَى is مُرَاءًى; its feminine plural is مُرَاءَيَاتٌ. مُرَائِيَاتٌ is the اسم الفاعل plural."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر اِيْتِلَاءً, write الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "أُوْتَلَى",
            "آتَلِيْ",
            "نُؤْتَلَى",
            "أُوْتُلِيْتُ"
          ],
          "correct": 0,
          "explanation": "The passive مضارع of اِيْتَلَى is يُؤْتَلَى; the first person singular أُؤْتَلَى becomes أُوْتَلَى (ضمة + sākin hamzah ← واو). آتَلِيْ is the active first person."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "The Quranic word ﴿أَتَى﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَتَى — He came",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of أَتَى",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of آتَى",
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ of أَتَى"
          ],
          "correct": 0,
          "explanation": "أَتَى (without مَدَّة) is the ثلاثي مجرد 'he came'. آتَى (with مَدَّة) is بَاب إِفْعَال, 'he gave'; the passive is أُتِيَ."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿أَتَتْ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَتَى — She came",
            "الْمُخَاطَبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَتَى",
            "الْغَائِبَةُ مِنَ الْمَاضِي الْمَعْلُوْمِ of آتَى",
            "الْغَائِبَةُ مِنَ الْمَاضِي الْمَجْهُوْلِ of أَتَى"
          ],
          "correct": 0,
          "explanation": "The ى of أَتَى falls before the sākin ت of the feminine: أَتَتْ. آتَتْ (with مَدَّة) would be 'she gave'."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿فَأَبَوْا﴾ contains which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَبَى — so they (m/p) refused",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى",
            "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of أَبَى",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَجْهُوْلِ of أَبَى"
          ],
          "correct": 0,
          "explanation": "فَ + أَبَوْا; أَبَوْا is the third person masculine plural of the active ماضي of أَبَى. The مضارع would be يَأْبَوْنَ."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿يَرَوْنَ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of رَأَى — They (m/p) see",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ of رَأَى",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of رَأَى",
            "الْمُخَاطَبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of رَأَى"
          ],
          "correct": 0,
          "explanation": "يَرَوْنَ is the active مضارع, third person masculine plural. The passive is يُرَوْنَ and the ماضي رَأَوْا."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿لَا يُؤَدِّهِ﴾ contains which صِيْغَةٌ?",
          "options": [
            "The جزم (نهي/negated جواب) of يُؤَدِّيْ — 'he does not fulfil it', from أَدَّى",
            "The الْمَاضِي الْمَجْهُوْلُ of أَدَّى",
            "The الْأَمْرُ of أَدَّى",
            "The اِسْمُ الْفَاعِلِ of أَدَّى"
          ],
          "correct": 0,
          "explanation": "يُؤَدِّيْ in the جزم loses its final ي: يُؤَدِّ, here with the pronoun هِ attached — لَا يُؤَدِّهِ."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿أَبَى﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَبَى — He refused",
            "الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى",
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَبَى",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of أَبَى"
          ],
          "correct": 0,
          "explanation": "أَبَى is the third person masculine singular of the active ماضي; the مضارع is يَأْبَى and the passive أُبِيَ."
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reject\"?",
          "options": [
            "أَبَى يَأْبَى",
            "أَسِيَ يَأْسَى",
            "أَتَى يَأْتِيْ",
            "أَلَا يَأْلُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبَى يَأْبَى mean?",
          "options": [
            "to reject",
            "to be sad",
            "to come",
            "to neglect, to fail to do"
          ],
          "correct": 0
        },
        {
          "title": "to reject (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبَى يَأْبَى?",
          "options": [
            "إِبَاءً",
            "أَسًى",
            "إِتْيَانًا",
            "أَلْوًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sad",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sad\"?",
          "options": [
            "أَسِيَ يَأْسَى",
            "أَتَى يَأْتِيْ",
            "أَلَا يَأْلُوْ",
            "أَدَّى يُؤَدِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be sad",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسِيَ يَأْسَى mean?",
          "options": [
            "to be sad",
            "to come",
            "to neglect, to fail to do",
            "to fulfil"
          ],
          "correct": 0
        },
        {
          "title": "to be sad (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسِيَ يَأْسَى?",
          "options": [
            "أَسًى",
            "إِتْيَانًا",
            "أَلْوًا",
            "تَأْدِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come\"?",
          "options": [
            "أَتَى يَأْتِيْ",
            "أَلَا يَأْلُوْ",
            "أَدَّى يُؤَدِّيْ",
            "أَسَّى يُؤَسِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَتَى يَأْتِيْ mean?",
          "options": [
            "to come",
            "to neglect, to fail to do",
            "to fulfil",
            "to extort, enjoin"
          ],
          "correct": 0
        },
        {
          "title": "to come (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَتَى يَأْتِيْ?",
          "options": [
            "إِتْيَانًا",
            "أَلْوًا",
            "تَأْدِيَةً",
            "تَأْسِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to neglect, to fail to do",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to neglect, to fail to do\"?",
          "options": [
            "أَلَا يَأْلُوْ",
            "أَدَّى يُؤَدِّيْ",
            "أَسَّى يُؤَسِّيْ",
            "آتَى يُؤْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to neglect, to fail to do",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَلَا يَأْلُوْ mean?",
          "options": [
            "to neglect, to fail to do",
            "to fulfil",
            "to extort, enjoin",
            "to give"
          ],
          "correct": 0
        },
        {
          "title": "to neglect, to fail to do (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَلَا يَأْلُوْ?",
          "options": [
            "أَلْوًا",
            "تَأْدِيَةً",
            "تَأْسِيَةً",
            "إِيْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fulfil\"?",
          "options": [
            "أَدَّى يُؤَدِّيْ",
            "أَسَّى يُؤَسِّيْ",
            "آتَى يُؤْتِيْ",
            "آلَى يُؤْلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَّى يُؤَدِّيْ mean?",
          "options": [
            "to fulfil",
            "to extort, enjoin",
            "to give",
            "to swear"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَدَّى يُؤَدِّيْ?",
          "options": [
            "تَأْدِيَةً",
            "تَأْسِيَةً",
            "إِيْتَاءً",
            "إِيْلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to extort, enjoin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to extort, enjoin\"?",
          "options": [
            "أَسَّى يُؤَسِّيْ",
            "آتَى يُؤْتِيْ",
            "آلَى يُؤْلِيْ",
            "اِيْتَلَى يَأْتَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to extort, enjoin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسَّى يُؤَسِّيْ mean?",
          "options": [
            "to extort, enjoin",
            "to give",
            "to swear",
            "to take an oath"
          ],
          "correct": 0
        },
        {
          "title": "to extort, enjoin (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسَّى يُؤَسِّيْ?",
          "options": [
            "تَأْسِيَةً",
            "إِيْتَاءً",
            "إِيْلَاءً",
            "اِيْتِلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to give",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give\"?",
          "options": [
            "آتَى يُؤْتِيْ",
            "آلَى يُؤْلِيْ",
            "اِيْتَلَى يَأْتَلِيْ",
            "رَأَى يَرَى"
          ],
          "correct": 0
        },
        {
          "title": "to give",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آتَى يُؤْتِيْ mean?",
          "options": [
            "to give",
            "to swear",
            "to take an oath",
            "to see"
          ],
          "correct": 0
        },
        {
          "title": "to give (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آتَى يُؤْتِيْ?",
          "options": [
            "إِيْتَاءً",
            "إِيْلَاءً",
            "اِيْتِلَاءً",
            "رُؤْيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to swear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to swear\"?",
          "options": [
            "آلَى يُؤْلِيْ",
            "اِيْتَلَى يَأْتَلِيْ",
            "رَأَى يَرَى",
            "نَأَى يَنْأَى"
          ],
          "correct": 0
        },
        {
          "title": "to swear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آلَى يُؤْلِيْ mean?",
          "options": [
            "to swear",
            "to take an oath",
            "to see",
            "to be far"
          ],
          "correct": 0
        },
        {
          "title": "to swear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آلَى يُؤْلِيْ?",
          "options": [
            "إِيْلَاءً",
            "اِيْتِلَاءً",
            "رُؤْيَةً",
            "نَأْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to take an oath",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take an oath\"?",
          "options": [
            "اِيْتَلَى يَأْتَلِيْ",
            "رَأَى يَرَى",
            "نَأَى يَنْأَى",
            "رَاءَى يُرَائِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to take an oath",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِيْتَلَى يَأْتَلِيْ mean?",
          "options": [
            "to take an oath",
            "to see",
            "to be far",
            "to show off"
          ],
          "correct": 0
        },
        {
          "title": "to take an oath (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِيْتَلَى يَأْتَلِيْ?",
          "options": [
            "اِيْتِلَاءً",
            "رُؤْيَةً",
            "نَأْيًا",
            "مُرَاءَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to see",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to see\"?",
          "options": [
            "رَأَى يَرَى",
            "نَأَى يَنْأَى",
            "رَاءَى يُرَائِيْ",
            "أَرَى يُرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to see",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَأَى يَرَى mean?",
          "options": [
            "to see",
            "to be far",
            "to show off",
            "to show"
          ],
          "correct": 0
        },
        {
          "title": "to see (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَأَى يَرَى?",
          "options": [
            "رُؤْيَةً",
            "نَأْيًا",
            "مُرَاءَاةً",
            "إِرَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be far\"?",
          "options": [
            "نَأَى يَنْأَى",
            "رَاءَى يُرَائِيْ",
            "أَرَى يُرِيْ",
            "تَرَاءَى يَتَرَاءَى"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَأَى يَنْأَى mean?",
          "options": [
            "to be far",
            "to show off",
            "to show",
            "to present oneself, to appear"
          ],
          "correct": 0
        },
        {
          "title": "to be far (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَأَى يَنْأَى?",
          "options": [
            "نَأْيًا",
            "مُرَاءَاةً",
            "إِرَاءَةً",
            "تَرَائِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to show off",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to show off\"?",
          "options": [
            "رَاءَى يُرَائِيْ",
            "أَرَى يُرِيْ",
            "تَرَاءَى يَتَرَاءَى",
            "أَبَى يَأْبَى"
          ],
          "correct": 0
        },
        {
          "title": "to show off",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَاءَى يُرَائِيْ mean?",
          "options": [
            "to show off",
            "to show",
            "to present oneself, to appear",
            "to reject"
          ],
          "correct": 0
        },
        {
          "title": "to show off (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَاءَى يُرَائِيْ?",
          "options": [
            "مُرَاءَاةً",
            "إِرَاءَةً",
            "تَرَائِيًا",
            "إِبَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to show",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to show\"?",
          "options": [
            "أَرَى يُرِيْ",
            "تَرَاءَى يَتَرَاءَى",
            "أَبَى يَأْبَى",
            "أَسِيَ يَأْسَى"
          ],
          "correct": 0
        },
        {
          "title": "to show",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرَى يُرِيْ mean?",
          "options": [
            "to show",
            "to present oneself, to appear",
            "to reject",
            "to be sad"
          ],
          "correct": 0
        },
        {
          "title": "to show (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَرَى يُرِيْ?",
          "options": [
            "إِرَاءَةً",
            "تَرَائِيًا",
            "إِبَاءً",
            "أَسًى"
          ],
          "correct": 0
        },
        {
          "title": "to present oneself, to appear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to present oneself, to appear\"?",
          "options": [
            "تَرَاءَى يَتَرَاءَى",
            "أَبَى يَأْبَى",
            "أَسِيَ يَأْسَى",
            "أَتَى يَأْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to present oneself, to appear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَاءَى يَتَرَاءَى mean?",
          "options": [
            "to present oneself, to appear",
            "to reject",
            "to be sad",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to present oneself, to appear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَاءَى يَتَرَاءَى?",
          "options": [
            "تَرَائِيًا",
            "إِبَاءً",
            "أَسًى",
            "إِتْيَانًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "اللَّفِيْفُ الْمُرَكَّبُ",
      "subtitle": "لَفِيْفٌ Combinations — أَوَى، آوَى، وَأَى",
      "concepts": [
        {
          "heading": "Part 8: لَفِيْفٌ مَقْرُوْنٌ وَمَهْمُوْزُ الْفَاءِ — أَوَى (بَابُ ضَرَبَ يَضْرِبُ)",
          "lines": [
            {
              "html": "<bdi>أَوَى</bdi> (to seek refuge, root <bdi>أ و ي</bdi>) is a triple case: a hamzah as the <bdi>فَاءُ الْكَلِمَةِ</bdi> and two weak letters side by side — <bdi>و</bdi> as the <bdi>عَيْنٌ</bdi> and <bdi>ي</bdi> as the <bdi>لَامٌ</bdi> — which makes it <bdi>لَفِيْفٌ مَقْرُوْنٌ</bdi>. Because the two weak letters are joined, only the <bdi>لَامٌ</bdi> is treated as weak, so the verb is conjugated exactly like a <bdi>نَاقِصٌ</bdi> of <bdi>بَاب ضَرَبَ</bdi>, with the <bdi>مَهْمُوْز</bdi> rules applied to the initial hamzah.",
              "list": false
            },
            {
              "html": "The <bdi>الْأَمْرُ</bdi> needs a <bdi>هَمْزَةُ الْوَصْلِ</bdi> with a kasrah, and <bdi>كَسْرَةٌ</bdi> + sakin hamzah ← <bdi>يَاءٌ</bdi>: <bdi>اِأْوِ</bdi> → <bdi>اِيْوِ</bdi>. In the <bdi>الْمُتَكَلِّم</bdi> of the <bdi>الْمُضَارِعُ الْمَعْلُوْمُ</bdi> two hamzahs meet: <bdi>أَأْوِيْ</bdi> → <bdi>آوِيْ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>الْمَصْدَرُ</bdi> is <bdi>أَيًّا</bdi>: the <bdi>و</bdi> and <bdi>ي</bdi> come together (<bdi>أَوْيًا</bdi>), and the assimilation <bdi>و</bdi> + <bdi>ي</bdi> → <bdi>يّ</bdi> gives <bdi>أَيًّا</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَوَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَوَى",
                    "يَأْوِيْ",
                    "أَيًّا",
                    "أُوِيَ",
                    "يُؤْوَى",
                    "أَيًّا",
                    "اِيْوِ",
                    "لَا تَأْوِ",
                    "آوٍ",
                    "مَأْوِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَوَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَوَى",
                    "يَأْوِيْ",
                    "أُوِيَ",
                    "يُؤْوَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَوَيَا",
                    "يَأْوِيَانِ",
                    "أُوِيَا",
                    "يُؤْوَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَوَوْا",
                    "يَأْوُوْنَ",
                    "أُوُوْا",
                    "يُؤْوَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَوَتْ",
                    "تَأْوِيْ",
                    "أُوِيَتْ",
                    "تُؤْوَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَوَتَا",
                    "تَأْوِيَانِ",
                    "أُوِيَتَا",
                    "تُؤْوَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَوَيْنَ",
                    "يَأْوِيْنَ",
                    "أُوِيْنَ",
                    "يُؤْوَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَوَيْتَ",
                    "تَأْوِيْ",
                    "أُوِيْتَ",
                    "تُؤْوَى",
                    "اِيْوِ",
                    "لَا تَأْوِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَوَيْتُمَا",
                    "تَأْوِيَانِ",
                    "أُوِيْتُمَا",
                    "تُؤْوَيَانِ",
                    "اِيْوِيَا",
                    "لَا تَأْوِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَوَيْتُمْ",
                    "تَأْوُوْنَ",
                    "أُوِيْتُمْ",
                    "تُؤْوَوْنَ",
                    "اِيْوُوْا",
                    "لَا تَأْوُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَوَيْتِ",
                    "تَأْوِيْنَ",
                    "أُوِيْتِ",
                    "تُؤْوَيْنَ",
                    "اِيْوِيْ",
                    "لَا تَأْوِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَوَيْتُمَا",
                    "تَأْوِيَانِ",
                    "أُوِيْتُمَا",
                    "تُؤْوَيَانِ",
                    "اِيْوِيَا",
                    "لَا تَأْوِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَوَيْتُنَّ",
                    "تَأْوِيْنَ",
                    "أُوِيْتُنَّ",
                    "تُؤْوَيْنَ",
                    "اِيْوِيْنَ",
                    "لَا تَأْوِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَوَيْتُ",
                    "آوِيْ",
                    "أُوِيْتُ",
                    "أُوْوَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَوَيْنَا",
                    "نَأْوِيْ",
                    "أُوِيْنَا",
                    "نُؤْوَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — أَوَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "آوٍ",
                    "مَأْوِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "آوِيَانِ",
                    "مَأْوِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "آوُوْنَ",
                    "مَأْوِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "آوِيَةٌ",
                    "مَأْوِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "آوِيَتَانِ",
                    "مَأْوِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "آوِيَاتٌ",
                    "مَأْوِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اِيْوِ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ مِنَ الْأَمْرِ of أَوَى — Seek refuge! (m/s)", "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَوَى — I seek refuge", "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آوَى — He was given shelter", "اِسْمُ الْمَفْعُوْلِ of أَوَى — that which is taken as a refuge"],
            "correct": 0
          }
        },
        {
          "heading": "Part 8 (continued): آوَى — (IV) بَاب إِفْعَال",
          "lines": [
            {
              "html": "<bdi>آوَى</bdi> (to give shelter) is <bdi>أَوَى</bdi> in <bdi>بَاب إِفْعَال</bdi>. The prefixed hamzah of the <bdi>باب</bdi> meets the sākin root hamzah — <bdi>أَأْوَى</bdi> → <bdi>آوَى</bdi> — and the same <bdi>تَخْفِيْف</bdi> gives the <bdi>مَصْدَرٌ إِيْوَاءً</bdi> and the <bdi>الْمَاضِي الْمَجْهُوْلُ أُوْوِيَ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>﴿أَلَمْ يَجِدْكَ يَتِيمًا فَآوَىٰ﴾</bdi> — <bdi>آوَى</bdi> here is the <bdi>الْغَائِبُ</bdi> of the <bdi>الْمَاضِي الْمَعْلُوْمُ</bdi>: 'and He gave shelter'.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — آوَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "آوَى",
                    "يُؤْوِيْ",
                    "إِيْوَاءً",
                    "أُوْوِيَ",
                    "يُؤْوَى",
                    "إِيْوَاءً",
                    "آوِ",
                    "لَا تُؤْوِ",
                    "مُؤْوٍ",
                    "مُؤْوًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — آوَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "آوَى",
                    "يُؤْوِيْ",
                    "أُوْوِيَ",
                    "يُؤْوَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "آوَيَا",
                    "يُؤْوِيَانِ",
                    "أُوْوِيَا",
                    "يُؤْوَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "آوَوْا",
                    "يُؤْوُوْنَ",
                    "أُوْوُوْا",
                    "يُؤْوَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "آوَتْ",
                    "تُؤْوِيْ",
                    "أُوْوِيَتْ",
                    "تُؤْوَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "آوَتَا",
                    "تُؤْوِيَانِ",
                    "أُوْوِيَتَا",
                    "تُؤْوَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "آوَيْنَ",
                    "يُؤْوِيْنَ",
                    "أُوْوِيْنَ",
                    "يُؤْوَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "آوَيْتَ",
                    "تُؤْوِيْ",
                    "أُوْوِيْتَ",
                    "تُؤْوَى",
                    "آوِ",
                    "لَا تُؤْوِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "آوَيْتُمَا",
                    "تُؤْوِيَانِ",
                    "أُوْوِيْتُمَا",
                    "تُؤْوَيَانِ",
                    "آوِيَا",
                    "لَا تُؤْوِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "آوَيْتُمْ",
                    "تُؤْوُوْنَ",
                    "أُوْوِيْتُمْ",
                    "تُؤْوَوْنَ",
                    "آوُوْا",
                    "لَا تُؤْوُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "آوَيْتِ",
                    "تُؤْوِيْنَ",
                    "أُوْوِيْتِ",
                    "تُؤْوَيْنَ",
                    "آوِيْ",
                    "لَا تُؤْوِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "آوَيْتُمَا",
                    "تُؤْوِيَانِ",
                    "أُوْوِيْتُمَا",
                    "تُؤْوَيَانِ",
                    "آوِيَا",
                    "لَا تُؤْوِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "آوَيْتُنَّ",
                    "تُؤْوِيْنَ",
                    "أُوْوِيْتُنَّ",
                    "تُؤْوَيْنَ",
                    "آوِيْنَ",
                    "لَا تُؤْوِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "آوَيْتُ",
                    "أُوْوِيْ",
                    "أُوْوِيْتُ",
                    "أُوْوَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "آوَيْنَا",
                    "نُؤْوِيْ",
                    "أُوْوِيْنَا",
                    "نُؤْوَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — آوَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "مُؤْوٍ",
                    "مُؤْوًى"
                  ],
                  [
                    "Dual (m)",
                    "مُؤْوِيَانِ",
                    "مُؤْوَيَانِ"
                  ],
                  [
                    "Plural (m)",
                    "مُؤْوُوْنَ",
                    "مُؤْوَوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "مُؤْوِيَةٌ",
                    "مُؤْوَاةٌ"
                  ],
                  [
                    "Dual (f)",
                    "مُؤْوِيَتَانِ",
                    "مُؤْوَاتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "مُؤْوِيَاتٌ",
                    "مُؤْوَيَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "أُوْوِيَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آوَى — He was given shelter", "اِسْمُ الْمَفْعُوْلِ of أَوَى — that which is taken as a refuge", "الْمُخَاطَبُ مِنَ الْأَمْرِ of وَأَى — Promise! (m/s)", "الْغَائِبُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ of وَأَى — He is promised"],
            "correct": 0
          }
        },
        {
          "heading": "Part 9: لَفِيْفٌ مَفْرُوْقٌ وَمَهْمُوْزُ الْعَيْنِ — وَأَى (بَابُ ضَرَبَ يَضْرِبُ)",
          "lines": [
            {
              "html": "<bdi>وَأَى</bdi> (to make a promise, root <bdi>و أ ي</bdi>) has a weak <bdi>و</bdi> as its <bdi>فَاءٌ</bdi> and a weak <bdi>ي</bdi> as its <bdi>لَامٌ</bdi>, separated by the hamzah of its <bdi>عَيْنٌ</bdi> — that is <bdi>لَفِيْفٌ مَفْرُوْقٌ</bdi>. Both weak-letter rules apply at once: the <bdi>مِثَال</bdi> rule drops the <bdi>و</bdi> in the <bdi>الْمُضَارِعُ</bdi> (<bdi>يَوْئِيْ</bdi> → <bdi>يَئِيْ</bdi>, like <bdi>وَعَدَ يَعِدُ</bdi>), and the <bdi>نَاقِص</bdi> rules govern the ending.",
              "list": false
            },
            {
              "html": "The result is the shortest <bdi>أَمْرٌ</bdi> in the whole book: with the <bdi>و</bdi> already gone and the final <bdi>ي</bdi> dropped by the <bdi>جزم</bdi>, only the hamzah is left — <bdi>إِ</bdi>. The <bdi>النَّهْيُ</bdi> is likewise <bdi>لَا تَئِ</bdi>.",
              "list": false
            },
            {
              "html": "The <bdi>الْمُضَارِعُ الْمَجْهُوْلُ</bdi> keeps the <bdi>و</bdi>, which becomes long after the dammah: <bdi>يُوْءَى، تُوْءَى</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — وَأَى",
                "headers": [
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "وَأَى",
                    "يَئِيْ",
                    "وَأْيًا",
                    "وُئِيَ",
                    "يُوْءَى",
                    "وَأْيًا",
                    "إِ",
                    "لَا تَئِ",
                    "وَاءٍ",
                    "مَوْئِيٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — وَأَى",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "اَلْأَمْرُ",
                  "اَلنَّهْيُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "وَأَى",
                    "يَئِيْ",
                    "وُئِيَ",
                    "يُوْءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "وَأَيَا",
                    "يَئِيَانِ",
                    "وُئِيَا",
                    "يُوْءَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "وَأَوْا",
                    "يَؤُوْنَ",
                    "وُؤُوْا",
                    "يُوْءَوْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "وَأَتْ",
                    "تَئِيْ",
                    "وُئِيَتْ",
                    "تُوْءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "وَأَتَا",
                    "تَئِيَانِ",
                    "وُئِيَتَا",
                    "تُوْءَيَانِ",
                    "—",
                    "—"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "وَأَيْنَ",
                    "يَئِيْنَ",
                    "وُئِيْنَ",
                    "يُوْءَيْنَ",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "وَأَيْتَ",
                    "تَئِيْ",
                    "وُئِيْتَ",
                    "تُوْءَى",
                    "إِ",
                    "لَا تَئِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "وَأَيْتُمَا",
                    "تَئِيَانِ",
                    "وُئِيْتُمَا",
                    "تُوْءَيَانِ",
                    "إِيَا",
                    "لَا تَئِيَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "وَأَيْتُمْ",
                    "تَؤُوْنَ",
                    "وُئِيْتُمْ",
                    "تُوْءَوْنَ",
                    "أُوْا",
                    "لَا تَؤُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "وَأَيْتِ",
                    "تَئِيْنَ",
                    "وُئِيْتِ",
                    "تُوْءَيْنَ",
                    "إِيْ",
                    "لَا تَئِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "وَأَيْتُمَا",
                    "تَئِيَانِ",
                    "وُئِيْتُمَا",
                    "تُوْءَيَانِ",
                    "إِيَا",
                    "لَا تَئِيَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "وَأَيْتُنَّ",
                    "تَئِيْنَ",
                    "وُئِيْتُنَّ",
                    "تُوْءَيْنَ",
                    "إِيْنَ",
                    "لَا تَئِيْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "وَأَيْتُ",
                    "أَئِيْ",
                    "وُئِيْتُ",
                    "أُوْءَى",
                    "—",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "وَأَيْنَا",
                    "نَئِيْ",
                    "وُئِيْنَا",
                    "نُوْءَى",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ وَاسْمُ الْمَفْعُوْلِ — وَأَى",
                "headers": [
                  "Form",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "Singular (m)",
                    "وَاءٍ",
                    "مَوْئِيٌّ"
                  ],
                  [
                    "Dual (m)",
                    "وَائِيَانِ",
                    "مَوْئِيَّانِ"
                  ],
                  [
                    "Plural (m)",
                    "وَاءُوْنَ",
                    "مَوْئِيُّوْنَ"
                  ],
                  [
                    "Singular (f)",
                    "وَائِيَةٌ",
                    "مَوْئِيَّةٌ"
                  ],
                  [
                    "Dual (f)",
                    "وَائِيَتَانِ",
                    "مَوْئِيَّتَانِ"
                  ],
                  [
                    "Plural (f)",
                    "وَائِيَاتٌ",
                    "مَوْئِيَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "إِ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبُ مِنَ الْأَمْرِ of وَأَى — Promise! (m/s)", "الْغَائِبُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ of وَأَى — He is promised", "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of وَأَى — They (m/p) promised", "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of آوَى — Give shelter! (m/p)"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 8–9: لَفِيْفٌ Combinations",
        "rows": [
          {
            "label": "لفيف مقرون ومهموز الفاء — باب ضرب; أمر اِيْوِ، مجهول أُوِيَ، فاعل آوٍ",
            "arabic": "أَوَى يَأْوِيْ أَيًّا",
            "meaning": "لفيف مقرون ومهموز الفاء — باب ضرب; أمر اِيْوِ، مجهول أُوِيَ، فاعل آوٍ",
            "unlockAt": 0
          },
          {
            "label": "لفيف مقرون ومهموز الفاء — باب إفعال; مجهول أُوْوِيَ، أمر آوِ، فاعل مُؤْوٍ",
            "arabic": "آوَى يُؤْوِيْ إِيْوَاءً",
            "meaning": "لفيف مقرون ومهموز الفاء — باب إفعال; مجهول أُوْوِيَ، أمر آوِ، فاعل مُؤْوٍ",
            "unlockAt": 2
          },
          {
            "label": "لفيف مفروق ومهموز العين — باب ضرب; the و drops in the مضارع, أمر is the single letter إِ",
            "arabic": "وَأَى يَئِيْ وَأْيًا",
            "meaning": "لفيف مفروق ومهموز العين — باب ضرب; the و drops in the مضارع, أمر is the single letter إِ",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "Why is أَوَى called لَفِيْفٌ مَقْرُوْنٌ?",
          "options": [
            "Because its two weak letters (و and ي) are joined, standing next to each other as عَيْنٌ and لَامٌ",
            "Because its two weak letters are separated by a sound letter",
            "Because it has a hamzah and a doubled letter",
            "Because its first letter is a weak وَاوٌ"
          ],
          "correct": 0,
          "explanation": "مَقْرُوْنٌ means 'joined': the root أ و ي has و and ي side by side. مَفْرُوْقٌ ('separated') describes a root such as و أ ي."
        },
        {
          "q": "What is the الْمَصْدَرُ of أَوَى يَأْوِيْ?",
          "options": [
            "أَيًّا",
            "أَوْيًا",
            "إِيْوَاءً",
            "وَأْيًا"
          ],
          "correct": 0,
          "explanation": "أَوْيًا becomes أَيًّا by the assimilation of the و into the ي. إِيْوَاءً is the مصدر of آوَى and وَأْيًا that of وَأَى."
        },
        {
          "q": "Which pair correctly gives الْأَمْرُ and النَّهْيُ of آوَى?",
          "options": [
            "آوِ / لَا تُؤْوِ",
            "اِيْوِ / لَا تَأْوِ",
            "آوِيْ / لَا تُؤْوِيْ",
            "أُوْوِ / لَا تُؤْوَ"
          ],
          "correct": 0,
          "explanation": "بَاب إِفْعَال: the مضارع is يُؤْوِيْ, so the أمر is آوِ and the نهي لَا تُؤْوِ. اِيْوِ / لَا تَأْوِ belong to the ثلاثي أَوَى."
        },
        {
          "q": "The الْأَمْرُ of وَأَى for الْمُخَاطَبُ is the single letter…",
          "options": [
            "إِ",
            "وَ",
            "ئِ",
            "أَ"
          ],
          "correct": 0,
          "explanation": "The مضارع تَئِيْ loses its ت (أمر) and its final ي (جزم), leaving nothing but the hamzah with a kasrah: إِ."
        },
        {
          "q": "What is the الْمَاضِي الْمَجْهُوْلُ of وَأَى?",
          "options": [
            "وُئِيَ",
            "أُوِيَ",
            "يُوْءَى",
            "وُؤُوْا"
          ],
          "correct": 0,
          "explanation": "وُئِيَ is the passive ماضي; يُوْءَى is the passive مضارع, and وُؤُوْا its masculine plural. أُوِيَ is the passive of أَوَى."
        },
        {
          "q": "Which of these is the اِسْمُ الْفَاعِلِ of وَأَى?",
          "options": [
            "وَاءٍ",
            "آوٍ",
            "مُؤْوٍ",
            "مَوْئِيٌّ"
          ],
          "correct": 0,
          "explanation": "فَاعِلٌ of و أ ي gives وَائِيٌ → وَاءٍ. آوٍ is the فاعل of أَوَى, مُؤْوٍ that of آوَى, and مَوْئِيٌّ is the اسم المفعول of وَأَى."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "أَوَوْا is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَوَى — They (m/p) sought refuge",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of آوَى",
            "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of أَوَى",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَوَى"
          ],
          "correct": 0,
          "explanation": "أَوَوْا (without a مَدَّة) is the ثلاثي مجرد. آوَوْا (with a مَدَّة) is بَاب إِفْعَال — 'they gave shelter'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The الْمُتَكَلِّمُ of the الْمُضَارِعُ الْمَجْهُوْلُ of أَوَى is…",
          "options": [
            "أُوْوَى",
            "آوِيْ",
            "نُؤْوَى",
            "أُوِيْتُ"
          ],
          "correct": 0,
          "explanation": "أُؤْوَى has a dammah followed by a sākin hamzah, which becomes a وَاوٌ: أُوْوَى. آوِيْ is the active first person and أُوِيْتُ the passive ماضي."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَأْوُوْنَ means…",
          "options": [
            "You (m/p) seek refuge",
            "They (m/p) seek refuge",
            "You (m/p) are given shelter",
            "You (f/p) seek refuge"
          ],
          "correct": 0,
          "explanation": "The ت marks the second person and وْنَ the masculine plural of the active مضارع of أَوَى. They (m/p) would be يَأْوُوْنَ; the feminine plural is تَأْوِيْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which form of آوَى is مُؤْوًى?",
          "options": [
            "اِسْمُ الْمَفْعُوْلِ — one who is given shelter",
            "اِسْمُ الْفَاعِلِ — one who gives shelter",
            "الْمَصْدَرُ",
            "الْمَاضِي الْمَجْهُوْلُ"
          ],
          "correct": 0,
          "explanation": "بَاب إِفْعَال: مُؤْوٍ (kasrah) is the اسم الفاعل and مُؤْوًى (fathah) the اسم المفعول; the مصدر is إِيْوَاءً."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Why does the الْمُضَارِعُ of وَأَى lose its وَاوٌ?",
          "options": [
            "Because of the rule of الْمِثَالُ — a و as فَاءُ الْكَلِمَةِ drops in the مضارع of this pattern (compare وَعَدَ يَعِدُ)",
            "Because of the rule of الْأَجْوَفُ",
            "Because the hamzah swallows it",
            "Because the مصدر has no و"
          ],
          "correct": 0,
          "explanation": "وَأَى is a مِثَالٌ as well as a نَاقِصٌ; the مِثَال rule drops the و in the مضارع: يَوْئِيْ → يَئِيْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَؤُوْنَ is which صِيْغَةٌ of وَأَى?",
          "options": [
            "الْمُخَاطَبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ — You (m/p) promise",
            "الْمُخَاطَبَاتُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ",
            "الْمُخَاطَبُوْنَ مِنَ النَّهْيِ"
          ],
          "correct": 0,
          "explanation": "The final ي falls before the وَاوُ الْجَمَاعَةِ and the hamzah takes a dammah: تَؤُوْنَ. The third person is يَؤُوْنَ and the feminine plural تَئِيْنَ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر أَيًّا, write الْمُخَاطَبَانِ مِنَ الْأَمْرِ.",
          "options": [
            "اِيْوِيَا",
            "اِيْوُوْا",
            "أَوَيْتُمَا",
            "آوِيَا"
          ],
          "correct": 0,
          "explanation": "The مصدر أَيًّا belongs to أَوَى يَأْوِيْ; the dual of the أمر is اِيْوِيَا. آوِيَا is the أمر dual of آوَى (باب إفعال)."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر إِيْوَاءً, write الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "يُؤْوِيْ",
            "يَأْوِيْ",
            "يُؤْوَى",
            "آوَى"
          ],
          "correct": 0,
          "explanation": "إِيْوَاءً is the مصدر of آوَى (باب إفعال); its active مضارع is يُؤْوِيْ. يَأْوِيْ belongs to the ثلاثي أَوَى and يُؤْوَى is the passive."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر أَيًّا, write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "آوُوْنَ",
            "مَأْوِيُّوْنَ",
            "آوِيَاتٌ",
            "مُؤْوُوْنَ"
          ],
          "correct": 0,
          "explanation": "اسم الفاعل of أَوَى is آوٍ; its masculine plural is آوُوْنَ. مُؤْوُوْنَ is the plural فاعل of آوَى."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "Using the مصدر وَأْيًا, write الْغَائِبَاتُ مِنَ الْمَاضِي الْمَجْهُوْلِ.",
          "options": [
            "وُئِيْنَ",
            "وَأَيْنَ",
            "يُوْءَيْنَ",
            "وُؤُوْا"
          ],
          "correct": 0,
          "explanation": "The passive ماضي of وَأَى is وُئِيَ; the feminine plural is وُئِيْنَ. وَأَيْنَ is the active and يُوْءَيْنَ the passive مضارع."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "The Quranic word ﴿آوَى﴾ is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of آوَى (باب إفعال) — He gave shelter",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَوَى (باب ضرب)",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of آوَى",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of آوَى"
          ],
          "correct": 0,
          "explanation": "The مَدَّة marks بَاب إِفْعَال: آوَى 'he sheltered' (﴿فَآوَىٰ﴾). Without the مَدَّة, أَوَى means 'he took refuge'."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿آوِي﴾ (as in ﴿سَآوِي إِلَىٰ جَبَلٍ﴾) is which صِيْغَةٌ?",
          "options": [
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَوَى — I will take refuge",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of آوَى",
            "الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of آوَى",
            "اِسْمُ الْفَاعِلِ of أَوَى"
          ],
          "correct": 0,
          "explanation": "أَأْوِيْ (first person of يَأْوِيْ) becomes آوِيْ by فَتْحَةٌ + sakin hamzah ← مَدَّةٌ; with the prefix سَـ it means 'I shall take refuge'."
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek refuge\"?",
          "options": [
            "أَوَى يَأْوِيْ",
            "آوَى يُؤْوِيْ",
            "وَأَى يَئِيْ",
            "أَوَى"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَوَى يَأْوِيْ mean?",
          "options": [
            "to seek refuge",
            "to give shelter",
            "to make a promise"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَوَى يَأْوِيْ?",
          "options": [
            "أَيًّا",
            "إِيْوَاءً",
            "وَأْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to give shelter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give shelter\"?",
          "options": [
            "آوَى يُؤْوِيْ",
            "وَأَى يَئِيْ",
            "أَوَى يَأْوِيْ",
            "أُوِيَ"
          ],
          "correct": 0
        },
        {
          "title": "to give shelter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آوَى يُؤْوِيْ mean?",
          "options": [
            "to give shelter",
            "to make a promise",
            "to seek refuge"
          ],
          "correct": 0
        },
        {
          "title": "to give shelter (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آوَى يُؤْوِيْ?",
          "options": [
            "إِيْوَاءً",
            "وَأْيًا",
            "أَيًّا"
          ],
          "correct": 0
        },
        {
          "title": "to make a promise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make a promise\"?",
          "options": [
            "وَأَى يَئِيْ",
            "أَوَى يَأْوِيْ",
            "آوَى يُؤْوِيْ",
            "لَا تَأْوِ"
          ],
          "correct": 0
        },
        {
          "title": "to make a promise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَأَى يَئِيْ mean?",
          "options": [
            "to make a promise",
            "to seek refuge",
            "to give shelter"
          ],
          "correct": 0
        },
        {
          "title": "to make a promise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَأَى يَئِيْ?",
          "options": [
            "وَأْيًا",
            "أَيًّا",
            "إِيْوَاءً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "المراجعة",
      "subtitle": "The master table of every مُرَكَّبٌ combination (Parts 1–9) and the full unit vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 9 Summary",
          "lines": [
            {
              "html": "This is a cumulative review of Unit 9: the master تَصْرِيْفٌ صَغِيْرٌ table for every مُرَكَّبٌ verb across the unit's nine combinations (Parts 1–9), plus the full unit-end verb vocabulary. Nothing here is new — the quiz below draws only on terms and facts already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            },
            {
              "table": {
                "title": "Part 1 — مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ (p. 292)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "ضَرَب",
                    "وَأَدَ",
                    "يَئِدُ",
                    "وَأْدًا",
                    "وُئِدَ",
                    "يُوْأَدُ",
                    "وَأْدًا",
                    "إِدْ",
                    "لَا تَئِدْ",
                    "وَائِدٌ",
                    "مَوْءُوْدٌ"
                  ],
                  [
                    "اِسْتِفْعَالٌ (X)",
                    "اِسْتَيْأَسَ",
                    "يَسْتَيْئِسُ",
                    "اِسْتِيْئَاسًا",
                    "اُسْتُوْئِسَ",
                    "يُسْتَيْأَسُ",
                    "اِسْتِيْئَاسًا",
                    "اِسْتَيْئِسْ",
                    "لَا تَسْتَيْئِسْ",
                    "مُسْتَيْئِسٌ",
                    "مُسْتَيْأَسٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 2 — مِثَالٌ وَمَهْمُوْزُ اللَّامِ (p. 292)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "سَمِع",
                    "وَطِئَ",
                    "يَطَأُ",
                    "وَطْأً",
                    "وُطِئَ",
                    "يُوْطَأُ",
                    "وَطْأً",
                    "طَأْ",
                    "لَا تَطَأْ",
                    "وَاطِئٌ",
                    "مَوْطُوْءٌ"
                  ],
                  [
                    "اِفْتِعَالٌ (VIII)",
                    "اِتَّكَأَ",
                    "يَتَّكِئُ",
                    "اِتِّكَاءً",
                    "اُتُّكِئَ",
                    "يُتَّكَأُ",
                    "اِتِّكَاءً",
                    "اِتَّكِئْ",
                    "لَا تَتَّكِئْ",
                    "مُتَّكِئٌ",
                    "مُتَّكَأٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 3 — مِثَالٌ وَمُضَاعَفٌ (p. 292)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "سَمِع",
                    "وَدَّ",
                    "يَوَدُّ",
                    "وُدًّا",
                    "وُدَّ",
                    "يُوَدُّ",
                    "وُدًّا",
                    "وَدَّ",
                    "لَا تَوَدَّ",
                    "وَادٌّ",
                    "مَوْدُوْدٌ"
                  ],
                  [
                    "مُفَاعَلَةٌ (III)",
                    "وَادَّ",
                    "يُوَادُّ",
                    "مُوَادَّةً",
                    "وُوْدَّ",
                    "يُوَادُّ",
                    "مُوَادَّةً",
                    "وَادَّ",
                    "لَا تُوَادَّ",
                    "مُوَادٌّ",
                    "مُوَادٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 4 — أَجْوَفُ وَمَهْمُوْزُ الْفَاءِ (p. 292)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "ضَرَب",
                    "آدَ",
                    "يَئِيْدُ",
                    "أَيْدًا",
                    "إِيْدَ",
                    "يُؤَادُ",
                    "أَيْدًا",
                    "إِدْ",
                    "لَا تَئِدْ",
                    "آيِدٌ",
                    "مَئِيْدٌ"
                  ],
                  [
                    "نَصَر",
                    "آلَ",
                    "يَؤُوْلُ",
                    "أَوْلًا",
                    "إِيْلَ",
                    "يُؤَالُ",
                    "أَوْلًا",
                    "أُلْ",
                    "لَا تَؤُلْ",
                    "آيِلٌ",
                    "مَؤُوْلٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 5 — أَجْوَفُ وَمَهْمُوْزُ اللَّامِ (p. 292)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "سَمِع",
                    "شَاءَ",
                    "يَشَاءُ",
                    "مَشِيْئَةً",
                    "شِيْءَ",
                    "يُشَاءُ",
                    "مَشِيْئَةً",
                    "شَأْ",
                    "لَا تَشَأْ",
                    "شَاءٍ",
                    "مَشِيْءٌ"
                  ],
                  [
                    "ضَرَب",
                    "جَاءَ",
                    "يَجِيْءُ",
                    "مَجِيْئًا",
                    "جِيْءَ",
                    "يُجَاءُ",
                    "مَجِيْئًا",
                    "جِئْ",
                    "لَا تَجِئْ",
                    "جَاءٍ",
                    "مَجِيْءٌ"
                  ],
                  [
                    "نَصَر",
                    "بَاءَ",
                    "يَبُوْءُ",
                    "بَوْءًا",
                    "بِيْءَ",
                    "يُبَاءُ",
                    "بَوْءًا",
                    "بُؤْ",
                    "لَا تَبُؤْ",
                    "بَاءٍ",
                    "مَبُوْءٌ"
                  ],
                  [
                    "إِفْعَالٌ (IV)",
                    "أَجَاءَ",
                    "يُجِيْءُ",
                    "إِجَاءَةً",
                    "أُجِيْءَ",
                    "يُجَاءُ",
                    "إِجَاءَةً",
                    "أَجِئْ",
                    "لَا تُجِئْ",
                    "مُجِيْءٌ",
                    "مُجَاءٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 6 — نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ (p. 293)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "فَتَح",
                    "أَبَى",
                    "يَأْبَى",
                    "إِبَاءً",
                    "أُبِيَ",
                    "يُؤْبَى",
                    "إِبَاءً",
                    "اِيْبَ",
                    "لَا تَأْبَ",
                    "آبٍ",
                    "مَأْبِيٌّ"
                  ],
                  [
                    "سَمِع",
                    "أَسِيَ",
                    "يَأْسَى",
                    "أَسًى",
                    "أُسِيَ",
                    "يُؤْسَى",
                    "أَسًى",
                    "اِيْسَ",
                    "لَا تَأْسَ",
                    "آسٍ",
                    "مَأْسِيٌّ"
                  ],
                  [
                    "ضَرَب",
                    "أَتَى",
                    "يَأْتِيْ",
                    "إِتْيَانًا",
                    "أُتِيَ",
                    "يُؤْتَى",
                    "إِتْيَانًا",
                    "اِيْتِ",
                    "لَا تَأْتِ",
                    "آتٍ",
                    "مَأْتِيٌّ"
                  ],
                  [
                    "نَصَر",
                    "أَلَا",
                    "يَأْلُوْ",
                    "أَلْوًا",
                    "أُلِيَ",
                    "يُؤْلَى",
                    "أَلْوًا",
                    "أُوْلُ",
                    "لَا تَأْلُ",
                    "آلٍ",
                    "مَأْلُوٌّ"
                  ],
                  [
                    "تَفْعِيْلٌ (II)",
                    "أَدَّى",
                    "يُؤَدِّيْ",
                    "تَأْدِيَةً",
                    "أُدِّيَ",
                    "يُؤَدَّى",
                    "تَأْدِيَةً",
                    "أَدِّ",
                    "لَا تُؤَدِّ",
                    "مُؤَدٍّ",
                    "مُؤَدًّى"
                  ],
                  [
                    "إِفْعَالٌ (IV)",
                    "آتَى",
                    "يُؤْتِيْ",
                    "إِيْتَاءً",
                    "أُوْتِيَ",
                    "يُؤْتَى",
                    "إِيْتَاءً",
                    "آتِ",
                    "لَا تُؤْتِ",
                    "مُؤْتٍ",
                    "مُؤْتًى"
                  ],
                  [
                    "اِفْتِعَالٌ (VIII)",
                    "اِيْتَلَى",
                    "يَأْتَلِيْ",
                    "اِيْتِلَاءً",
                    "أُوْتُلِيَ",
                    "يُؤْتَلَى",
                    "اِيْتِلَاءً",
                    "اِيْتَلِ",
                    "لَا تَأْتَلِ",
                    "مُؤْتَلٍ",
                    "مُؤْتَلًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 7 — نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ (p. 293)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "فَتَح",
                    "رَأَى",
                    "يَرَى",
                    "رُؤْيَةً",
                    "رُئِيَ",
                    "يُرَى",
                    "رُؤْيَةً",
                    "رَ",
                    "لَا تَرَ",
                    "رَاءٍ",
                    "مَرْئِيٌّ"
                  ],
                  [
                    "مُفَاعَلَةٌ (III)",
                    "رَاءَى",
                    "يُرَائِيْ",
                    "مُرَاءَاةً",
                    "رُوْئِيَ",
                    "يُرَاءَى",
                    "مُرَاءَاةً",
                    "رَاءِ",
                    "لَا تُرَاءِ",
                    "مُرَاءٍ",
                    "مُرَاءًى"
                  ],
                  [
                    "إِفْعَالٌ (IV)",
                    "أَرَى",
                    "يُرِيْ",
                    "إِرَاءَةً",
                    "أُرِيَ",
                    "يُرَى",
                    "إِرَاءَةً",
                    "أَرِ",
                    "لَا تُرِ",
                    "مُرٍ",
                    "مُرًى"
                  ],
                  [
                    "تَفَاعُلٌ (VI)",
                    "تَرَاءَى",
                    "يَتَرَاءَى",
                    "تَرَائِيًا",
                    "تُرُوْئِيَ",
                    "يُتَرَاءَى",
                    "تَرَائِيًا",
                    "تَرَاءَ",
                    "لَا تَتَرَاءَ",
                    "مُتَرَاءٍ",
                    "مُتَرَاءًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 8 — لَفِيْفٌ مَقْرُوْنٌ وَمَهْمُوْزُ الْفَاءِ (p. 293)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "ضَرَب",
                    "أَوَى",
                    "يَأْوِيْ",
                    "أَيًّا",
                    "أُوِيَ",
                    "يُؤْوَى",
                    "أَيًّا",
                    "اِيْوِ",
                    "لَا تَأْوِ",
                    "آوٍ",
                    "مَأْوِيٌّ"
                  ],
                  [
                    "إِفْعَالٌ (IV)",
                    "آوَى",
                    "يُؤْوِيْ",
                    "إِيْوَاءً",
                    "أُوْوِيَ",
                    "يُؤْوَى",
                    "إِيْوَاءً",
                    "آوِ",
                    "لَا تُؤْوِ",
                    "مُؤْوٍ",
                    "مُؤْوًى"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Part 9 — لَفِيْفٌ مَفْرُوْقٌ وَمَهْمُوْزُ الْعَيْنِ (p. 293)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِي الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِي الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "ضَرَب",
                    "وَأَى",
                    "يَئِيْ",
                    "وَأْيًا",
                    "وُئِيَ",
                    "يُوْءَى",
                    "وَأْيًا",
                    "إِ",
                    "لَا تَئِ",
                    "وَاءٍ",
                    "مَوْئِيٌّ"
                  ]
                ]
              }
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does مُرَكَّبٌ mean?",
          "options": [
            "Verbs combining two kinds of weakness",
            "Part 1 — a و-initial verb with a middle hamzah",
            "Part 2 — a و-initial verb with an ending hamzah",
            "Part 3 — a و-initial verb with a doubled letter"
          ],
          "correct": 0
        },
        {
          "q": "What does مِثَالٌ وَمَهْمُوْزُ اللَّامِ mean?",
          "options": [
            "Part 2 — a و-initial verb with an ending hamzah",
            "Part 4 — a hollow verb with an initial hamzah",
            "Part 5 — a hollow verb with an ending hamzah",
            "Part 6 — a defective verb with an initial hamzah"
          ],
          "correct": 0
        },
        {
          "q": "What does أَجْوَفُ وَمَهْمُوْزُ الْفَاءِ mean?",
          "options": [
            "Part 4 — a hollow verb with an initial hamzah",
            "Part 7 — a defective verb with a middle hamzah",
            "Part 8 — joined-weak-letter verb with an initial hamzah",
            "Part 9 — separated-weak-letter verb with a middle hamzah"
          ],
          "correct": 0
        },
        {
          "q": "What does نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ mean?",
          "options": [
            "Part 6 — a defective verb with an initial hamzah",
            "Verbs combining two kinds of weakness",
            "Part 1 — a و-initial verb with a middle hamzah",
            "Part 2 — a و-initial verb with an ending hamzah"
          ],
          "correct": 0
        },
        {
          "q": "What does لَفِيْفٌ مَقْرُوْنٌ وَمَهْمُوْزُ الْفَاءِ mean?",
          "options": [
            "Part 8 — joined-weak-letter verb with an initial hamzah",
            "Part 3 — a و-initial verb with a doubled letter",
            "Part 4 — a hollow verb with an initial hamzah",
            "Part 5 — a hollow verb with an ending hamzah"
          ],
          "correct": 0
        },
        {
          "q": "In Part 1's summary table, وَأَدَ (بَاب ضَرَبَ) is paired with which مَزِيْدٌ فِيْهِ verb?",
          "options": [
            "اِسْتَيْأَسَ (بَاب اِسْتِفْعَال، X)",
            "اِتَّكَأَ (بَاب اِفْتِعَال، VIII)",
            "وَادَّ (بَاب مُفَاعَلَة، III)",
            "آتَى (بَاب إِفْعَال، IV)"
          ],
          "correct": 0,
          "explanation": "Part 1 (مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ) pairs the ثُلَاثِيٌّ وَأَدَ يَئِدُ with the بَاب اِسْتِفْعَال verb اِسْتَيْأَسَ يَسْتَيْئِسُ."
        },
        {
          "q": "In Part 3's summary table (مِثَالٌ وَمُضَاعَفٌ), what is the الْمَاضِي الْمَجْهُوْلُ of وَادَّ (بَاب مُفَاعَلَة)?",
          "options": [
            "وُوْدَّ",
            "وُدَّ",
            "وَادَّ",
            "أُوْدِدَ"
          ],
          "correct": 0,
          "explanation": "The Part 3 table gives وَادَّ's passive ماضي as وُوْدَّ (the alif of مُفَاعَلَة becomes وَاوٌ after the dammah); وُدَّ belongs to وَدَّ (بَاب سَمِعَ)."
        },
        {
          "q": "According to the Part 4 summary table (أَجْوَفُ وَمَهْمُوْزُ الْفَاءِ), which بَابٌ is آلَ conjugated on, as opposed to آدَ?",
          "options": [
            "آلَ is بَاب نَصَرَ; آدَ is بَاب ضَرَبَ",
            "آلَ is بَاب ضَرَبَ; آدَ is بَاب نَصَرَ",
            "Both are بَاب سَمِعَ",
            "آلَ is بَاب إِفْعَال; آدَ is بَاب ضَرَبَ"
          ],
          "correct": 0,
          "explanation": "The Part 4 table lists آدَ يَئِيْدُ under بَاب ضَرَبَ and آلَ يَؤُوْلُ under بَاب نَصَرَ — the same combination, two different أَبْوَاب."
        },
        {
          "q": "Part 5's summary table (أَجْوَفُ وَمَهْمُوْزُ اللَّامِ) lists four verbs. Which one is بَاب إِفْعَال?",
          "options": [
            "أَجَاءَ",
            "شَاءَ",
            "جَاءَ",
            "بَاءَ"
          ],
          "correct": 0,
          "explanation": "شَاءَ is بَاب سَمِعَ, جَاءَ is بَاب ضَرَبَ, بَاءَ is بَاب نَصَرَ, and أَجَاءَ is the only مَزِيْدٌ فِيْهِ entry, on بَاب إِفْعَال (IV)."
        },
        {
          "q": "Part 6's summary table (نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ) lists seven verbs across seven different أَبْوَاب. Which باب is اِيْتَلَى on?",
          "options": [
            "بَاب اِفْتِعَال (VIII)",
            "بَاب إِفْعَال (IV)",
            "بَاب تَفْعِيْل (II)",
            "بَاب نَصَرَ"
          ],
          "correct": 0,
          "explanation": "The Part 6 table's last row is اِيْتَلَى يَأْتَلِيْ اِيْتِلَاءً on بَاب اِفْتِعَال (VIII), with passive ماضي أُوْتُلِيَ."
        },
        {
          "q": "In Part 7's summary table (نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ), what is the الْمَاضِي الْمَجْهُوْلُ of تَرَاءَى (بَاب تَفَاعُل)?",
          "options": [
            "تُرُوْئِيَ",
            "رُوْئِيَ",
            "أُرِيَ",
            "رُئِيَ"
          ],
          "correct": 0,
          "explanation": "The Part 7 row for تَرَاءَى gives its passive ماضي as تُرُوْئِيَ (pattern تُفُوْعِلَ); رُوْئِيَ belongs to رَاءَى and رُئِيَ to رَأَى."
        },
        {
          "q": "Part 8's summary table (لَفِيْفٌ مَقْرُوْنٌ وَمَهْمُوْزُ الْفَاءِ) lists two verbs. What is the الْأَمْرُ of the ثُلَاثِيٌّ verb أَوَى?",
          "options": [
            "اِيْوِ",
            "آوِ",
            "أُوْ",
            "إِوِ"
          ],
          "correct": 0,
          "explanation": "The Part 8 table gives أَوَى's أمر as اِيْوِ (with a هَمْزَةُ الْوَصْلِ); آوِ belongs to the بَاب إِفْعَال verb آوَى."
        },
        {
          "q": "Part 9's summary table (لَفِيْفٌ مَفْرُوْقٌ وَمَهْمُوْزُ الْعَيْنِ) has only one verb, on which بَابٌ?",
          "options": [
            "بَاب ضَرَبَ يَضْرِبُ",
            "بَاب سَمِعَ يَسْمَعُ",
            "بَاب نَصَرَ يَنْصُرُ",
            "بَاب فَتَحَ يَفْتَحُ"
          ],
          "correct": 0,
          "explanation": "Part 9's single verb, وَأَى يَئِيْ وَأْيًا, is conjugated on بَاب ضَرَبَ يَضْرِبُ."
        },
        {
          "q": "Across the whole master table (Parts 1–9), how many combinations of مُرَكَّبٌ are documented, and what does each combination's right-hand column show?",
          "options": [
            "Nine combinations; the right-hand column names the بَابٌ of that row's verb",
            "Nine combinations; the right-hand column gives the مَصْدَرٌ",
            "Seven combinations; the right-hand column gives the root letters",
            "Nine combinations; the right-hand column gives the اِسْمُ الْفَاعِلِ"
          ],
          "correct": 0,
          "explanation": "The Summary prints one block per combination (Parts 1–9), with the بَابٌ named in the right-hand column of each row (e.g. ضَرَب، اِسْتِفْعَالٌ (X)…)."
        },
        {
          "q": "Which two Parts of the master table pair a ثُلَاثِيٌّ verb with a بَاب مُفَاعَلَة (III) verb built on the same weak-letter combination?",
          "options": [
            "Part 3 (وَدَّ / وَادَّ) and Part 7 (رَأَى / رَاءَى)",
            "Part 1 (وَأَدَ / اِسْتَيْأَسَ) and Part 6 (أَبَى / أَدَّى)",
            "Part 4 (آدَ / آلَ) and Part 5 (شَاءَ / جَاءَ)",
            "Part 8 (أَوَى / آوَى) and Part 9 (وَأَى)"
          ],
          "correct": 0,
          "explanation": "Part 3 pairs وَدَّ (سَمِعَ) with وَادَّ (مُفَاعَلَة), and Part 7 pairs رَأَى (فَتَحَ) with رَاءَى (مُفَاعَلَة) — both times the مُفَاعَلَة verb keeps the same weak-letter combination as its ثُلَاثِيٌّ counterpart."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "رُؤْيَةً: write الْمُثَنَّاةُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَرْئِيَّتَانِ",
            "مَرْئِيَّانِ",
            "رَائِيَتَانِ",
            "مَرْئِيَّاتٌ"
          ],
          "correct": 0,
          "explanation": "الْمُثَنَّاةُ is the feminine dual. اسم المفعول of رَأَى is مَرْئِيٌّ → feminine مَرْئِيَّةٌ → dual مَرْئِيَّتَانِ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "رُؤْيَةً: write الْمُفْرَدُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَرْئِيٌّ",
            "رَاءٍ",
            "مَرْئِيَّةٌ",
            "مُرًى"
          ],
          "correct": 0,
          "explanation": "The masculine singular اسم المفعول of رَأَى is مَرْئِيٌّ. رَاءٍ is the اسم الفاعل and مُرًى the اسم المفعول of أَرَى."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "أَيًّا: write الْمُخَاطَبَانِ مِنَ الْأَمْرِ.",
          "options": [
            "اِيْوِيَا",
            "آوِيَا",
            "أَوَيْتُمَا",
            "اِيْوُوْا"
          ],
          "correct": 0,
          "explanation": "أَيًّا is the مصدر of أَوَى يَأْوِيْ; the dual of its أمر is اِيْوِيَا. آوِيَا belongs to آوَى (باب إفعال)."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "وَأْدًا: write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَوْءُوْدُوْنَ",
            "وَائِدُوْنَ",
            "مَوْءُوْدَاتٌ",
            "مَوْءُوْدَانِ"
          ],
          "correct": 0,
          "explanation": "اسم المفعول of وَأَدَ is مَوْءُوْدٌ; the masculine plural is مَوْءُوْدُوْنَ."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "إِيْوَاءً: write الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "يُؤْوِيْ",
            "يَأْوِيْ",
            "يُؤْوَى",
            "أُوْوِيَ"
          ],
          "correct": 0,
          "explanation": "إِيْوَاءً is the مصدر of آوَى (باب إفعال); its active مضارع is يُؤْوِيْ. يَأْوِيْ belongs to the ثلاثي أَوَى."
        },
        {
          "title": "Book Exercise 1 (p. 294)",
          "kind": "mcq",
          "prompt": "أَيْدًا: write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "آيِدُوْنَ",
            "مَئِيْدُوْنَ",
            "آيِلُوْنَ",
            "آيِدَاتٌ"
          ],
          "correct": 0,
          "explanation": "أَيْدًا is the مصدر of آدَ يَئِيْدُ; its اسم الفاعل is آيِدٌ → masculine plural آيِدُوْنَ. آيِلُوْنَ belongs to آلَ."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿آتُوْنِي﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of آتَى (باب إفعال) — Bring me!",
            "الْغَائِبُوْنَ مِنَ الْمَاضِي الْمَعْلُوْمِ of آتَى",
            "الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ of أَتَى (باب ضرب)",
            "الْمُخَاطَبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of آتَى"
          ],
          "correct": 0,
          "explanation": "آتُوْا is the masculine plural of the أمر of آتَى, here with the object pronoun نِيْ. The أمر of أَتَى would be اِيْتُوْا."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿الْمَوْءُوْدَةُ﴾ (Surah at-Takwīr) is which form of وَأَدَ?",
          "options": [
            "اِسْمُ الْمَفْعُوْلِ, feminine singular — the girl buried alive",
            "اِسْمُ الْفَاعِلِ, feminine singular",
            "الْمَاضِي الْمَجْهُوْلُ — she was buried alive",
            "الْمَصْدَرُ — burying alive"
          ],
          "correct": 0,
          "explanation": "مَوْءُوْدٌ is the اسم المفعول of وَأَدَ يَئِدُ وَأْدًا (مثال ومهموز العين); with the ة it is the feminine singular."
        },
        {
          "title": "Book Exercise 2 (p. 294)",
          "kind": "mcq",
          "prompt": "﴿قَرَأَهُ﴾ contains which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of قَرَأَ — he recited it",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of قَرَأَ",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of قَرَأَ",
            "اِسْمُ الْفَاعِلِ of قَرَأَ"
          ],
          "correct": 0,
          "explanation": "قَرَأَ يَقْرَأُ (مهموز اللام, Unit 3) with the attached pronoun هُ. The passive would be قُرِئَ and the أمر اِقْرَأْ."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "رَ — give its صِيْغَةٌ, بَابٌ, verb type and root letters.",
          "options": [
            "الْمُخَاطَبُ مِنَ الْأَمْرِ، بَاب فَتَحَ، نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ، ر أ ي",
            "الْمُخَاطَبُ مِنَ النَّهْيِ، بَاب فَتَحَ، نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ، ر أ ي",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ، بَاب إِفْعَال، نَاقِصٌ وَمَهْمُوْزُ الْعَيْنِ، ر أ ي",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ، بَاب ضَرَبَ، نَاقِصٌ وَمَهْمُوْزُ الْفَاءِ، أ ر ي"
          ],
          "correct": 0,
          "explanation": "رَ is the أمر of رَأَى يَرَى (بَاب فَتَحَ): the hamzah is dropped in the مضارع and the ى by the جزم. لَا تَرَ would be the نهي and أَرِ the أمر of أَرَى."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "أُرِيَ is…",
          "options": [
            "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of أَرَى (بَاب إِفْعَال) — he was shown",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ of رَأَى (بَاب فَتَحَ)",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَرَى",
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ of رَأَى"
          ],
          "correct": 0,
          "explanation": "The passive ماضي of أَرَى is أُرِيَ; that of رَأَى is رُئِيَ. أَرَى (with fathah) is the active ماضي."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "أُرَى is…",
          "options": [
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ — I am seen / I am shown",
            "الْغَائِبُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of أَرَى",
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of رَأَى"
          ],
          "correct": 0,
          "explanation": "The passive مضارع is يُرَى; the first person singular is أُرَى. أَرَى (with fathah on the hamzah) is 'I see' or the ماضي of أَرَى."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "تَرَاءَ is…",
          "options": [
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of تَرَاءَى (بَاب تَفَاعُل) — Appear! (m/s)",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of تَرَاءَى",
            "الْمُخَاطَبُ مِنَ النَّهْيِ of تَرَاءَى",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of رَاءَى (بَاب مُفَاعَلَة)"
          ],
          "correct": 0,
          "explanation": "The مضارع يَتَرَاءَى → تَتَرَاءَى; dropping the prefix and the ى gives the أمر تَرَاءَ. The نهي is لَا تَتَرَاءَ and the ماضي تَرَاءَى."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "مُرَاءُوْنَ is…",
          "options": [
            "جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ of رَاءَى (بَاب مُفَاعَلَة) — those who show off",
            "جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْمَفْعُوْلِ of رَاءَى",
            "جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ of أَرَى (بَاب إِفْعَال)",
            "الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of رَاءَى"
          ],
          "correct": 0,
          "explanation": "مُرَاءٍ is the اسم الفاعل of رَاءَى; its masculine plural is مُرَاءُوْنَ. The اسم المفعول plural is مُرَاءَوْنَ, and the مضارع plural يُرَاءُوْنَ."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "لَا تَئِدْ is…",
          "options": [
            "الْمُخَاطَبُ مِنَ النَّهْيِ، بَاب ضَرَبَ، مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ، و أ د",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ، بَاب ضَرَبَ، مِثَالٌ وَمَهْمُوْزُ الْعَيْنِ، و أ د",
            "الْمُخَاطَبُ مِنَ النَّهْيِ، بَاب سَمِعَ، مِثَالٌ وَمَهْمُوْزُ اللَّامِ، و ط أ",
            "الْمُخَاطَبُ مِنَ النَّهْيِ، بَاب نَصَرَ، أَجْوَفُ وَمَهْمُوْزُ الْفَاءِ، أ و ل"
          ],
          "correct": 0,
          "explanation": "The same spelling serves both وَأَدَ (مثال ومهموز العين، و أ د) and آدَ (أجوف ومهموز الفاء، أ ي د); here it is taken as وَأَدَ يَئِدُ of بَاب ضَرَبَ."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "آتِ is…",
          "options": [
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of آتَى (بَاب إِفْعَال) — Give! (m/s)",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَتَى (بَاب ضَرَبَ)",
            "اِسْمُ الْفَاعِلِ of أَتَى",
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَتَى"
          ],
          "correct": 0,
          "explanation": "آتِ (with a مَدَّة and a kasrah, no تنوين) is the أمر of آتَى. The أمر of أَتَى is اِيْتِ, the اسم الفاعل آتٍ and the first person مضارع آتِيْ."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "آتٍ is…",
          "options": [
            "اِسْمُ الْفَاعِلِ of أَتَى (بَاب ضَرَبَ) — one who comes",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of آتَى",
            "اِسْمُ الْفَاعِلِ of آتَى (بَاب إِفْعَال)",
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَتَى"
          ],
          "correct": 0,
          "explanation": "The تنوين marks a noun: آتٍ is the مَنْقُوْص اسم الفاعل of أَتَى. The اسم الفاعل of آتَى is مُؤْتٍ."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "How do أَتَوْا and آتَوْا differ?",
          "options": [
            "أَتَوْا = they (m/p) came (أَتَى، بَاب ضَرَبَ); آتَوْا = they (m/p) gave (آتَى، بَاب إِفْعَال)",
            "أَتَوْا = they gave; آتَوْا = they came",
            "أَتَوْا is active and آتَوْا passive of the same verb",
            "أَتَوْا is a ماضي and آتَوْا an أمر"
          ],
          "correct": 0,
          "explanation": "The مَدَّة marks بَاب إِفْعَال. Both are الْغَائِبُوْنَ of the الْمَاضِي الْمَعْلُوْمُ; the أمر 'give!' (m/p) is آتُوْا with a dammah before the واو."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "أَوَى is…",
          "options": [
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ، بَاب ضَرَبَ، لَفِيْفٌ مَقْرُوْنٌ وَمَهْمُوْزُ الْفَاءِ، أ و ي",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ، بَاب إِفْعَال، لَفِيْفٌ مَقْرُوْنٌ وَمَهْمُوْزُ الْفَاءِ، أ و ي",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَجْهُوْلِ، بَاب ضَرَبَ، لَفِيْفٌ مَفْرُوْقٌ، و أ ي",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ، بَاب ضَرَبَ، لَفِيْفٌ مَقْرُوْنٌ، أ و ي"
          ],
          "correct": 0,
          "explanation": "أَوَى يَأْوِيْ أَيًّا 'he sought refuge'. With a مَدَّة (آوَى) it is بَاب إِفْعَال 'he gave shelter'; the passive is أُوِيَ and the أمر اِيْوِ."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "آوِ is…",
          "options": [
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of آوَى (بَاب إِفْعَال) — Give shelter! (m/s)",
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَوَى",
            "اِسْمُ الْفَاعِلِ of أَوَى",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of أَوَى"
          ],
          "correct": 0,
          "explanation": "آوِ (no ي, no تنوين) is the أمر of آوَى. آوِيْ (with ي) is 'I seek refuge', آوٍ (with تنوين) the اسم الفاعل, and اِيْوِ the أمر of أَوَى."
        },
        {
          "title": "Book Exercise 3 (p. 295)",
          "kind": "mcq",
          "prompt": "آوِيْ is…",
          "options": [
            "الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ of أَوَى — I seek refuge",
            "الْمُخَاطَبُ مِنَ الْأَمْرِ of آوَى",
            "اِسْمُ الْفَاعِلِ of آوَى",
            "الْغَائِبُ مِنَ الْمَاضِي الْمَعْلُوْمِ of آوَى"
          ],
          "correct": 0,
          "explanation": "أَأْوِيْ → آوِيْ (فَتْحَةٌ + sakin hamzah ← مَدَّةٌ). The أمر of آوَى is آوِ, its اسم الفاعل مُؤْوٍ and its ماضي آوَى."
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reject\"?",
          "options": [
            "أَبَى يَأْبَى",
            "اِتَّكَأَ يَتَّكِئُ",
            "أَتَى يَأْتِيْ",
            "آتَى يُؤْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبَى يَأْبَى mean?",
          "options": [
            "to reject",
            "to lean, recline",
            "to come",
            "to give"
          ],
          "correct": 0
        },
        {
          "title": "to reject (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبَى يَأْبَى?",
          "options": [
            "إِبَاءً",
            "اِتِّكَاءً",
            "إِتْيَانًا",
            "إِيْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to lean, recline",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lean, recline\"?",
          "options": [
            "اِتَّكَأَ يَتَّكِئُ",
            "أَتَى يَأْتِيْ",
            "آتَى يُؤْتِيْ",
            "أَجَاءَ يُجِيْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to lean, recline",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّكَأَ يَتَّكِئُ mean?",
          "options": [
            "to lean, recline",
            "to come",
            "to give",
            "to force to a place"
          ],
          "correct": 0
        },
        {
          "title": "to lean, recline (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّكَأَ يَتَّكِئُ?",
          "options": [
            "اِتِّكَاءً",
            "إِتْيَانًا",
            "إِيْتَاءً",
            "إِجَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come\"?",
          "options": [
            "أَتَى يَأْتِيْ",
            "آتَى يُؤْتِيْ",
            "أَجَاءَ يُجِيْءُ",
            "آدَ يَئِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَتَى يَأْتِيْ mean?",
          "options": [
            "to come",
            "to give",
            "to force to a place",
            "to be strong"
          ],
          "correct": 0
        },
        {
          "title": "to come (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَتَى يَأْتِيْ?",
          "options": [
            "إِتْيَانًا",
            "إِيْتَاءً",
            "إِجَاءَةً",
            "أَيْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to give",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give\"?",
          "options": [
            "آتَى يُؤْتِيْ",
            "أَجَاءَ يُجِيْءُ",
            "آدَ يَئِيْدُ",
            "أَدَّى يُؤَدِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to give",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آتَى يُؤْتِيْ mean?",
          "options": [
            "to give",
            "to force to a place",
            "to be strong",
            "to fulfil"
          ],
          "correct": 0
        },
        {
          "title": "to give (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آتَى يُؤْتِيْ?",
          "options": [
            "إِيْتَاءً",
            "إِجَاءَةً",
            "أَيْدًا",
            "تَأْدِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to force to a place",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to force to a place\"?",
          "options": [
            "أَجَاءَ يُجِيْءُ",
            "آدَ يَئِيْدُ",
            "أَدَّى يُؤَدِّيْ",
            "أَرَى يُرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to force to a place",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجَاءَ يُجِيْءُ mean?",
          "options": [
            "to force to a place",
            "to be strong",
            "to fulfil",
            "to show"
          ],
          "correct": 0
        },
        {
          "title": "to force to a place (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَجَاءَ يُجِيْءُ?",
          "options": [
            "إِجَاءَةً",
            "أَيْدًا",
            "تَأْدِيَةً",
            "إِرَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be strong",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be strong\"?",
          "options": [
            "آدَ يَئِيْدُ",
            "أَدَّى يُؤَدِّيْ",
            "أَرَى يُرِيْ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to be strong",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آدَ يَئِيْدُ mean?",
          "options": [
            "to be strong",
            "to fulfil",
            "to show",
            "to give up hope"
          ],
          "correct": 0
        },
        {
          "title": "to be strong (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آدَ يَئِيْدُ?",
          "options": [
            "أَيْدًا",
            "تَأْدِيَةً",
            "إِرَاءَةً",
            "اِسْتِيْئَاسًا"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fulfil\"?",
          "options": [
            "أَدَّى يُؤَدِّيْ",
            "أَرَى يُرِيْ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "أَسِيَ يَأْسَى"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَّى يُؤَدِّيْ mean?",
          "options": [
            "to fulfil",
            "to show",
            "to give up hope",
            "to be sad"
          ],
          "correct": 0
        },
        {
          "title": "to fulfil (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَدَّى يُؤَدِّيْ?",
          "options": [
            "تَأْدِيَةً",
            "إِرَاءَةً",
            "اِسْتِيْئَاسًا",
            "أَسًى"
          ],
          "correct": 0
        },
        {
          "title": "to show",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to show\"?",
          "options": [
            "أَرَى يُرِيْ",
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "أَسِيَ يَأْسَى",
            "أَسَّى يُؤَسِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to show",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرَى يُرِيْ mean?",
          "options": [
            "to show",
            "to give up hope",
            "to be sad",
            "to extort, enjoin"
          ],
          "correct": 0
        },
        {
          "title": "to show (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَرَى يُرِيْ?",
          "options": [
            "إِرَاءَةً",
            "اِسْتِيْئَاسًا",
            "أَسًى",
            "تَأْسِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give up hope\"?",
          "options": [
            "اِسْتَيْأَسَ يَسْتَيْئِسُ",
            "أَسِيَ يَأْسَى",
            "أَسَّى يُؤَسِّيْ",
            "آضَ يَئِيْضُ"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْأَسَ يَسْتَيْئِسُ mean?",
          "options": [
            "to give up hope",
            "to be sad",
            "to extort, enjoin",
            "to return"
          ],
          "correct": 0
        },
        {
          "title": "to give up hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْأَسَ يَسْتَيْئِسُ?",
          "options": [
            "اِسْتِيْئَاسًا",
            "أَسًى",
            "تَأْسِيَةً",
            "أَيْضًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sad",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sad\"?",
          "options": [
            "أَسِيَ يَأْسَى",
            "أَسَّى يُؤَسِّيْ",
            "آضَ يَئِيْضُ",
            "أَضَاءَ يُضِيْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to be sad",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسِيَ يَأْسَى mean?",
          "options": [
            "to be sad",
            "to extort, enjoin",
            "to return",
            "to enlighten"
          ],
          "correct": 0
        },
        {
          "title": "to be sad (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسِيَ يَأْسَى?",
          "options": [
            "أَسًى",
            "تَأْسِيَةً",
            "أَيْضًا",
            "إِضَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to extort, enjoin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to extort, enjoin\"?",
          "options": [
            "أَسَّى يُؤَسِّيْ",
            "آضَ يَئِيْضُ",
            "أَضَاءَ يُضِيْءُ",
            "آلَ يَؤُوْلُ"
          ],
          "correct": 0
        },
        {
          "title": "to extort, enjoin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسَّى يُؤَسِّيْ mean?",
          "options": [
            "to extort, enjoin",
            "to return",
            "to enlighten",
            "to neglect, to fail to do"
          ],
          "correct": 0
        },
        {
          "title": "to extort, enjoin (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسَّى يُؤَسِّيْ?",
          "options": [
            "تَأْسِيَةً",
            "أَيْضًا",
            "إِضَاءَةً",
            "أَوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "آضَ يَئِيْضُ",
            "أَضَاءَ يُضِيْءُ",
            "آلَ يَؤُوْلُ",
            "أَلَا يَأْلُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آضَ يَئِيْضُ mean?",
          "options": [
            "to return",
            "to enlighten",
            "to neglect, to fail to do",
            "to swear"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آضَ يَئِيْضُ?",
          "options": [
            "أَيْضًا",
            "إِضَاءَةً",
            "أَوْلًا",
            "أَلْوًا"
          ],
          "correct": 0
        },
        {
          "title": "to enlighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to enlighten\"?",
          "options": [
            "أَضَاءَ يُضِيْءُ",
            "آلَ يَؤُوْلُ",
            "أَلَا يَأْلُوْ",
            "آلَى يُؤْلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to enlighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَضَاءَ يُضِيْءُ mean?",
          "options": [
            "to enlighten",
            "to return",
            "to neglect, to fail to do",
            "to swear"
          ],
          "correct": 0
        },
        {
          "title": "to enlighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَضَاءَ يُضِيْءُ?",
          "options": [
            "إِضَاءَةً",
            "أَوْلًا",
            "أَلْوًا",
            "إِيْلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "آلَ يَؤُوْلُ",
            "أَلَا يَأْلُوْ",
            "آلَى يُؤْلِيْ",
            "آهَ يَؤُوْهُ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آلَ يَؤُوْلُ mean?",
          "options": [
            "to return",
            "to neglect, to fail to do",
            "to swear",
            "to moan"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آلَ يَؤُوْلُ?",
          "options": [
            "أَوْلًا",
            "أَلْوًا",
            "إِيْلَاءً",
            "أَوْهًا"
          ],
          "correct": 0
        },
        {
          "title": "to neglect, to fail to do",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to neglect, to fail to do\"?",
          "options": [
            "أَلَا يَأْلُوْ",
            "آلَى يُؤْلِيْ",
            "آهَ يَؤُوْهُ",
            "أَوَى يَأْوِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to neglect, to fail to do",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَلَا يَأْلُوْ mean?",
          "options": [
            "to neglect, to fail to do",
            "to swear",
            "to moan",
            "to seek refuge"
          ],
          "correct": 0
        },
        {
          "title": "to neglect, to fail to do (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَلَا يَأْلُوْ?",
          "options": [
            "أَلْوًا",
            "إِيْلَاءً",
            "أَوْهًا",
            "أَيًّا"
          ],
          "correct": 0
        },
        {
          "title": "to swear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to swear\"?",
          "options": [
            "آلَى يُؤْلِيْ",
            "آهَ يَؤُوْهُ",
            "أَوَى يَأْوِيْ",
            "آوَى يُؤْوِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to swear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آلَى يُؤْلِيْ mean?",
          "options": [
            "to swear",
            "to moan",
            "to seek refuge",
            "to give shelter"
          ],
          "correct": 0
        },
        {
          "title": "to swear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آلَى يُؤْلِيْ?",
          "options": [
            "إِيْلَاءً",
            "أَوْهًا",
            "أَيًّا",
            "إِيْوَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to moan",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to moan\"?",
          "options": [
            "آهَ يَؤُوْهُ",
            "أَوَى يَأْوِيْ",
            "آوَى يُؤْوِيْ",
            "اِيْتَلَى يَأْتَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to moan",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آهَ يَؤُوْهُ mean?",
          "options": [
            "to moan",
            "to seek refuge",
            "to give shelter",
            "to put to the test"
          ],
          "correct": 0
        },
        {
          "title": "to moan (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آهَ يَؤُوْهُ?",
          "options": [
            "أَوْهًا",
            "أَيًّا",
            "إِيْوَاءً",
            "اِيْتِلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek refuge\"?",
          "options": [
            "أَوَى يَأْوِيْ",
            "آوَى يُؤْوِيْ",
            "اِيْتَلَى يَأْتَلِيْ",
            "بَاءَ يَبُوْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَوَى يَأْوِيْ mean?",
          "options": [
            "to seek refuge",
            "to give shelter",
            "to put to the test",
            "to return"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَوَى يَأْوِيْ?",
          "options": [
            "أَيًّا",
            "إِيْوَاءً",
            "اِيْتِلَاءً",
            "بَوْءًا"
          ],
          "correct": 0
        },
        {
          "title": "to give shelter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give shelter\"?",
          "options": [
            "آوَى يُؤْوِيْ",
            "اِيْتَلَى يَأْتَلِيْ",
            "بَاءَ يَبُوْءُ",
            "تَرَاءَى يَتَرَاءَى"
          ],
          "correct": 0
        },
        {
          "title": "to give shelter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آوَى يُؤْوِيْ mean?",
          "options": [
            "to give shelter",
            "to put to the test",
            "to return",
            "to present oneself, to appear"
          ],
          "correct": 0
        },
        {
          "title": "to give shelter (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آوَى يُؤْوِيْ?",
          "options": [
            "إِيْوَاءً",
            "اِيْتِلَاءً",
            "بَوْءًا",
            "تَرَائِيًا"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to put to the test\"?",
          "options": [
            "اِيْتَلَى يَأْتَلِيْ",
            "بَاءَ يَبُوْءُ",
            "تَرَاءَى يَتَرَاءَى",
            "جَاءَ يَجِيْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِيْتَلَى يَأْتَلِيْ mean?",
          "options": [
            "to put to the test",
            "to return",
            "to present oneself, to appear",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to put to the test (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِيْتَلَى يَأْتَلِيْ?",
          "options": [
            "اِيْتِلَاءً",
            "بَوْءًا",
            "تَرَائِيًا",
            "مَجِيْئًا"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "بَاءَ يَبُوْءُ",
            "تَرَاءَى يَتَرَاءَى",
            "جَاءَ يَجِيْءُ",
            "رَاءَى يُرَائِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَاءَ يَبُوْءُ mean?",
          "options": [
            "to return",
            "to present oneself, to appear",
            "to come",
            "to show off"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَاءَ يَبُوْءُ?",
          "options": [
            "بَوْءًا",
            "تَرَائِيًا",
            "مَجِيْئًا",
            "مُرَاءَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to present oneself, to appear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to present oneself, to appear\"?",
          "options": [
            "تَرَاءَى يَتَرَاءَى",
            "جَاءَ يَجِيْءُ",
            "رَاءَى يُرَائِيْ",
            "رَأَى يَرَى"
          ],
          "correct": 0
        },
        {
          "title": "to present oneself, to appear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَاءَى يَتَرَاءَى mean?",
          "options": [
            "to present oneself, to appear",
            "to come",
            "to show off",
            "to see"
          ],
          "correct": 0
        },
        {
          "title": "to present oneself, to appear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَاءَى يَتَرَاءَى?",
          "options": [
            "تَرَائِيًا",
            "مَجِيْئًا",
            "مُرَاءَاةً",
            "رُؤْيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come\"?",
          "options": [
            "جَاءَ يَجِيْءُ",
            "رَاءَى يُرَائِيْ",
            "رَأَى يَرَى",
            "سَاءَ يَسُوْءُ"
          ],
          "correct": 0
        },
        {
          "title": "to come",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَاءَ يَجِيْءُ mean?",
          "options": [
            "to come",
            "to show off",
            "to see",
            "to become bad"
          ],
          "correct": 0
        },
        {
          "title": "to come (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَاءَ يَجِيْءُ?",
          "options": [
            "مَجِيْئًا",
            "مُرَاءَاةً",
            "رُؤْيَةً",
            "سُوْءًا"
          ],
          "correct": 0
        },
        {
          "title": "to show off",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to show off\"?",
          "options": [
            "رَاءَى يُرَائِيْ",
            "رَأَى يَرَى",
            "سَاءَ يَسُوْءُ",
            "شَاءَ يَشَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "to show off",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَاءَى يُرَائِيْ mean?",
          "options": [
            "to show off",
            "to see",
            "to become bad",
            "to wish"
          ],
          "correct": 0
        },
        {
          "title": "to show off (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَاءَى يُرَائِيْ?",
          "options": [
            "مُرَاءَاةً",
            "رُؤْيَةً",
            "سُوْءًا",
            "مَشِيْئَةً"
          ],
          "correct": 0
        },
        {
          "title": "to see",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to see\"?",
          "options": [
            "رَأَى يَرَى",
            "سَاءَ يَسُوْءُ",
            "شَاءَ يَشَاءُ",
            "نَأَى يَنْأَى"
          ],
          "correct": 0
        },
        {
          "title": "to see",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَأَى يَرَى mean?",
          "options": [
            "to see",
            "to become bad",
            "to wish",
            "to be far"
          ],
          "correct": 0
        },
        {
          "title": "to see (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَأَى يَرَى?",
          "options": [
            "رُؤْيَةً",
            "سُوْءًا",
            "مَشِيْئَةً",
            "نَأْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to become bad",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become bad\"?",
          "options": [
            "سَاءَ يَسُوْءُ",
            "شَاءَ يَشَاءُ",
            "نَأَى يَنْأَى",
            "وَادَّ يُوَادُّ"
          ],
          "correct": 0
        },
        {
          "title": "to become bad",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَاءَ يَسُوْءُ mean?",
          "options": [
            "to become bad",
            "to wish",
            "to be far",
            "to make friends"
          ],
          "correct": 0
        },
        {
          "title": "to become bad (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَاءَ يَسُوْءُ?",
          "options": [
            "سُوْءًا",
            "مَشِيْئَةً",
            "نَأْيًا",
            "مُوَادَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to wish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wish\"?",
          "options": [
            "شَاءَ يَشَاءُ",
            "نَأَى يَنْأَى",
            "وَادَّ يُوَادُّ",
            "وَأَدَ يَئِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to wish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاءَ يَشَاءُ mean?",
          "options": [
            "to wish",
            "to be far",
            "to make friends",
            "to bury alive"
          ],
          "correct": 0
        },
        {
          "title": "to wish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَاءَ يَشَاءُ?",
          "options": [
            "مَشِيْئَةً",
            "نَأْيًا",
            "مُوَادَّةً",
            "وَأْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be far\"?",
          "options": [
            "نَأَى يَنْأَى",
            "وَادَّ يُوَادُّ",
            "وَأَدَ يَئِدُ",
            "وَأَرَ يَئِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَأَى يَنْأَى mean?",
          "options": [
            "to be far",
            "to make friends",
            "to bury alive",
            "to frighten"
          ],
          "correct": 0
        },
        {
          "title": "to be far (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَأَى يَنْأَى?",
          "options": [
            "نَأْيًا",
            "مُوَادَّةً",
            "وَأْدًا",
            "وَأْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to make friends",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make friends\"?",
          "options": [
            "وَادَّ يُوَادُّ",
            "وَأَدَ يَئِدُ",
            "وَأَرَ يَئِرُ",
            "وَأَى يَئِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to make friends",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَادَّ يُوَادُّ mean?",
          "options": [
            "to make friends",
            "to bury alive",
            "to frighten",
            "to make a promise"
          ],
          "correct": 0
        },
        {
          "title": "to make friends (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَادَّ يُوَادُّ?",
          "options": [
            "مُوَادَّةً",
            "وَأْدًا",
            "وَأْرًا",
            "وَأْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to bury alive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bury alive\"?",
          "options": [
            "وَأَدَ يَئِدُ",
            "وَأَرَ يَئِرُ",
            "وَأَى يَئِيْ",
            "وَدَّ يَوَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to bury alive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَأَدَ يَئِدُ mean?",
          "options": [
            "to bury alive",
            "to frighten",
            "to make a promise",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "to bury alive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَأَدَ يَئِدُ?",
          "options": [
            "وَأْدًا",
            "وَأْرًا",
            "وَأْيًا",
            "وُدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to frighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to frighten\"?",
          "options": [
            "وَأَرَ يَئِرُ",
            "وَأَى يَئِيْ",
            "وَدَّ يَوَدُّ",
            "وَطِئَ يَطَأُ"
          ],
          "correct": 0
        },
        {
          "title": "to frighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَأَرَ يَئِرُ mean?",
          "options": [
            "to frighten",
            "to make a promise",
            "to love",
            "to tread on"
          ],
          "correct": 0
        },
        {
          "title": "to frighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَأَرَ يَئِرُ?",
          "options": [
            "وَأْرًا",
            "وَأْيًا",
            "وُدًّا",
            "وَطْأً"
          ],
          "correct": 0
        },
        {
          "title": "to make a promise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make a promise\"?",
          "options": [
            "وَأَى يَئِيْ",
            "وَدَّ يَوَدُّ",
            "وَطِئَ يَطَأُ",
            "أَبَى يَأْبَى"
          ],
          "correct": 0
        },
        {
          "title": "to make a promise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَأَى يَئِيْ mean?",
          "options": [
            "to make a promise",
            "to love",
            "to tread on",
            "to reject"
          ],
          "correct": 0
        },
        {
          "title": "to make a promise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَأَى يَئِيْ?",
          "options": [
            "وَأْيًا",
            "وُدًّا",
            "وَطْأً",
            "إِبَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to love\"?",
          "options": [
            "وَدَّ يَوَدُّ",
            "وَطِئَ يَطَأُ",
            "أَبَى يَأْبَى",
            "اِتَّكَأَ يَتَّكِئُ"
          ],
          "correct": 0
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَدَّ يَوَدُّ mean?",
          "options": [
            "to love",
            "to tread on",
            "to reject",
            "to lean, recline"
          ],
          "correct": 0
        },
        {
          "title": "to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَدَّ يَوَدُّ?",
          "options": [
            "وُدًّا",
            "وَطْأً",
            "إِبَاءً",
            "اِتِّكَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to tread on",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tread on\"?",
          "options": [
            "وَطِئَ يَطَأُ",
            "أَبَى يَأْبَى",
            "اِتَّكَأَ يَتَّكِئُ",
            "أَتَى يَأْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to tread on",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَطِئَ يَطَأُ mean?",
          "options": [
            "to tread on",
            "to reject",
            "to lean, recline",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to tread on (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَطِئَ يَطَأُ?",
          "options": [
            "وَطْأً",
            "إِبَاءً",
            "اِتِّكَاءً",
            "إِتْيَانًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

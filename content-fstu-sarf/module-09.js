// Module 09 — Unit 8: الْمُضَاعَفُ (First Steps to Understanding Sarf, Unit 8, pp. 240-262)
//
// Converted from content-fstu-sarf/unit8-lesson1.js .. unit8-lesson4.js plus
// unit8-summary.js, following the same conversion pattern as module-01.js and
// module-08.js: raw sections/blocks -> concepts/lines, raw exercise items ->
// MCQ exercise.items, raw quiz/exerciseBank/vocab -> quiz/bank[]. l1 covers
// the Introduction and the rules of إِدْغَامٌ / فَكٌّ (unit8-lesson1.js, no
// vocab -- the unit's vocab starts with Part 1). l2 covers Parts 1-3, the
// ثُلَاثِيٌّ مُجَرَّدُ models بَرَّ (بَاب سَمِعَ)، فَرَّ (بَاب ضَرَبَ)، مَدَّ
// (بَاب نَصَرَ) (unit8-lesson2.js). l3 covers Parts 4-8, أَبْوَاب تَفْعِيْل،
// مُفَاعَلَة، إِفْعَال، تَفَعُّل، تَفَاعُل (II-VI) (unit8-lesson3.js). l4
// covers Parts 9-14, أَبْوَاب اِنْفِعَال، اِفْتِعَال، اِفْعِلَال، اِسْتِفْعَال،
// اِفْعِيْلَال (VII-XI) and the رُبَاعِيٌّ بَاب اِفْعِلَّال (unit8-lesson4.js).
// l2-l4 have non-empty vocab[] arrays and got the full 3-direction
// vocab-bank treatment (rule 4). l5 is the trailing "Unit 8 Summary" review
// lesson (no exercise, no summary sidebar -- mirrors module-01.js's l13 /
// module-08.js's l3), built from unit8-summary.js's master تصريف صغير
// table (p. 257) plus a study-aid table of where إِدْغَامٌ does and does not
// occur, a quiz blending 5 of the unit's 9 keyTerms with 9 content
// questions grounded in the summary tables, and a bank covering the unit's
// full 54-verb vocabulary (3-direction) plus all 39 exerciseBank questions
// (pp. 258-260). Module id is 's-u8'.
//
// TODO: the raw vocab in unit8-lesson4.js and unit8-summary.js glosses
// several distinct colour/intensive verb pairs with the IDENTICAL English
// string -- "to be red" for both اِحْمَرَّ (IX) and اِحْمَارَّ (XI); "to be
// yellow" for both اِصْفَرَّ (IX) and اِصْفَارَّ (XI); "to be black" for
// اِسْوَدَّ (IX) and اِسْوَادَّ (XI) (and unit8-lesson4.js's own list also
// glosses اِدْهَامَّ (XI) as "to be black", a third entry sharing that exact
// string -- unit8-summary.js instead glosses اِدْهَامَّ as "to become
// black", so that one collision is resolved at the unit level). This is
// the raw source text as written (not introduced by this conversion): the
// textbook does not distinguish the plain-IX and intensive-XI colour verbs
// in English gloss. Per vocab-bank rule 4, the "en-ar"/"ar-en" MCQ
// distractor generator skips any candidate whose value is IDENTICAL to the
// item's own correct answer, so no single question has two indistinguishable
// options -- but a learner could still legitimately give the "wrong" one of
// the pair as the Arabic answer to e.g. "What is the Arabic word for 'to be
// red'?" since both verbs translate that way in this book. Left as-is
// rather than inventing a disambiguating gloss not present in the source.
export default {
  "id": "s-u8",
  "title": "الْمُضَاعَفُ",
  "heading": "الْفِعْلُ غَيْرُ السَّالِمِ",
  "blurb": "الْمُضَاعَف: the doubled verb, and when its two identical letters merge or break apart.",
  "lessons": [
    {
      "id": "l1",
      "title": "مُقَدِّمَةٌ",
      "subtitle": "Introduction to الْمُضَاعَفُ — where إِدْغَامٌ merges the doubled letter, and where it stays apart (فَكٌّ)",
      "concepts": [
        {
          "heading": "Introduction",
          "lines": [
            {
              "html": "<bdi>مُضَاعَفٌ</bdi> is a word in which a root letter is repeated.",
              "list": false
            },
            {
              "html": "<bdi>رَدَّ</bdi> — the root is <bdi>ر د د</bdi> — the second and third root letters are the same",
              "list": true,
              "bullet": true
            },
            {
              "html": "There are two <bdi>أَبْوَابٌ</bdi> of <bdi>الثُّلَاثِيُّ الْمَزِيْدُ فِيْهِ</bdi> and one of <bdi>الرُّبَاعِيُّ الْمَزِيْدُ فِيْهِ</bdi> which are <bdi>صَحِيْحٌ</bdi>, but because of the <bdi>حَرْفٌ زَائِدٌ</bdi> being the same as the root letter, the rules of <bdi>مُضَاعَفٌ</bdi> also apply to them.",
              "list": false
            },
            {
              "table": {
                "title": "أَبْوَابٌ treated as مُضَاعَفٌ despite being صَحِيْحٌ",
                "headers": [
                  "بَابٌ",
                  "Scale"
                ],
                "rows": [
                  [
                    "(IX)",
                    "اِفْعَلَّ يَفْعَلُّ اِفْعِلَالًا"
                  ],
                  [
                    "(XI)",
                    "اِفْعَالَّ يَفْعَالُّ اِفْعِيْلَالًا"
                  ],
                  [
                    "(IV — quadriliteral)",
                    "اِفْعَلَلَّ يَفْعَلِلُّ اِفْعِلَّالًا"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is a مُضَاعَفٌ?",
            "kind": "mcq",
            "options": ["A word whose first root letter is a و or ي", "A word in which a root letter is repeated", "A word containing a هَمْزَةٌ", "A word whose middle root letter is a weak letter"],
            "correct": 1
          }
        },
        {
          "heading": "Changes to مُضَاعَفٌ — إِدْغَامٌ",
          "lines": [
            {
              "html": "<bdi>إِدْغَامٌ</bdi>: to merge two letters. <bdi>إِدْغَامٌ</bdi> occurs in three places: 1. <bdi>الْمَاضِيْ</bdi>. 2. <bdi>الْمُضَارِعُ</bdi> after <bdi>نَقْلٌ</bdi>. 3. <bdi>اِسْمُ الْفَاعِلِ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>رَدَدَ</bdi> ← (<bdi>إِدْغَامٌ</bdi>) ← <bdi>رَدَّ</bdi> — 1. In <bdi>الْمَاضِيْ</bdi>, the two identical letters merge",
              "list": true,
              "bullet": true
            },
            {
              "html": "In <bdi>الْمَاضِيْ</bdi>, <bdi>إِدْغَامٌ</bdi> does not take place from <bdi>الْغَائِبَاتُ</bdi> to <bdi>الْمُتَكَلِّمُوْنَ</bdi>, i.e. <bdi>رَدَدْنَ، رَدَدْتَ</bdi> … <bdi>رَدَدْنَا</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَرْدُدُ</bdi> ← (<bdi>نَقْلٌ</bdi>) ← <bdi>يَرُدْدُ</bdi> ← (<bdi>إِدْغَامٌ</bdi>) ← <bdi>يَرُدُّ</bdi> — 2. In <bdi>الْمُضَارِعُ</bdi>, the harakah of the first repeated letter is first transferred (<bdi>نَقْلٌ</bdi>) to the preceding letter, then <bdi>إِدْغَامٌ</bdi> takes place",
              "list": true,
              "bullet": true
            },
            {
              "html": "In <bdi>الْمُضَارِعُ</bdi>, <bdi>إِدْغَامٌ</bdi> does not take place in <bdi>الْغَائِبَاتُ</bdi> or <bdi>الْمُخَاطَبَاتُ</bdi>, i.e. <bdi>يَرْدُدْنَ، تَرْدُدْنَ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>رَادِدٌ</bdi> ← (<bdi>إِدْغَامٌ</bdi>) ← <bdi>رَادٌّ</bdi> — 3. In <bdi>اِسْمُ الْفَاعِلِ</bdi>, the two identical letters merge",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "In which three places does إِدْغَامٌ occur?",
            "kind": "mcq",
            "options": ["الْمَاضِيْ، الْمَصْدَرُ، اِسْمُ الْمَفْعُوْلِ", "الْمَاضِيْ، الْمُضَارِعُ (after نَقْلٌ)، اِسْمُ الْفَاعِلِ", "الْأَمْرُ، النَّهْيُ، اِسْمُ الْمَفْعُوْلِ", "الْمُضَارِعُ، الْمَصْدَرُ، اِسْمُ الْفَاعِلِ"],
            "correct": 1
          }
        },
        {
          "heading": "الْأَمْرُ and النَّهْيُ",
          "lines": [
            {
              "html": "<bdi>الْأَمْرُ</bdi> of <bdi>الْمُخَاطَبُ</bdi> and <bdi>النَّهْيُ</bdi> can be formed in two ways: 1. With <bdi>إِدْغَامٌ</bdi> and: a <bdi>فَتْحَةٌ</bdi> on the <bdi>لَامُ الْكَلِمَةِ</bdi>; a <bdi>كَسْرَةٌ</bdi> on the <bdi>لَامُ الْكَلِمَةِ</bdi>; or a <bdi>ضَمَّةٌ</bdi> on the <bdi>لَامُ الْكَلِمَةِ</bdi> (only verbs from <bdi>بَاب نَصَرَ</bdi>). 2. Without <bdi>إِدْغَامٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "Forms of الْأَمْرُ and النَّهْيُ",
                "headers": [
                  "",
                  "بَاب سَمِعَ",
                  "بَاب ضَرَبَ",
                  "بَاب نَصَرَ"
                ],
                "rows": [
                  [
                    "الْإِدْغَامُ + فَتْحَةٌ",
                    "بَرَّ، لَا تَبَرَّ",
                    "فِرَّ، لَا تَفِرَّ",
                    "مُدَّ، لَا تَمُدَّ"
                  ],
                  [
                    "الْإِدْغَامُ + كَسْرَةٌ",
                    "بَرِّ، لَا تَبَرِّ",
                    "فِرِّ، لَا تَفِرِّ",
                    "مُدِّ، لَا تَمُدِّ"
                  ],
                  [
                    "الْإِدْغَامُ + ضَمَّةٌ",
                    "—",
                    "—",
                    "مُدُّ، لَا تَمُدُّ"
                  ],
                  [
                    "Without الْإِدْغَامُ",
                    "اِبْرَرْ، لَا تَبْرَرْ",
                    "اِفْرِرْ، لَا تَفْرِرْ",
                    "اُمْدُدْ، لَا تَمْدُدْ"
                  ]
                ]
              }
            },
            {
              "html": "In the tables of this unit, only the first form (<bdi>إِدْغَامٌ</bdi> with a <bdi>فَتْحَةٌ</bdi>) is mentioned. However, they should be learnt with all three or four forms.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "الْأَمْرُ with إِدْغَامٌ and a ضَمَّةٌ on the لَامُ الْكَلِمَةِ (e.g. مُدُّ) is allowed for…",
            "kind": "mcq",
            "options": ["verbs from all أَبْوَابٌ", "verbs from بَاب سَمِعَ only", "verbs from بَاب ضَرَبَ only", "verbs from بَاب نَصَرَ only"],
            "correct": 3
          }
        },
        {
          "heading": "Dictionary Note",
          "lines": [
            {
              "html": "<bdi>مُضَاعَفٌ</bdi> verbs are listed in dictionaries in two ways: 1. As a two-letter word, i.e. the word <bdi>بَرَّ</bdi> will be listed under <bdi>ب ر</bdi> and therefore appear as the first entry word under <bdi>ب ر</bdi>. 2. As a three-letter word, i.e. the word <bdi>بَرَّ</bdi> will be listed under <bdi>ب ر ر</bdi> and therefore appear after the entry of <bdi>ب ر ذ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Looked up as a two-letter word, where does بَرَّ appear in the dictionary?",
            "kind": "mcq",
            "options": ["As the first entry word under ب ر", "After the entry of ب ر ذ", "Under the letter ر", "Under the scale فَعَّلَ"],
            "correct": 0
          }
        },
        {
          "heading": "Where إِدْغَامٌ Occurs — Overview",
          "lines": [
            {
              "html": "The <bdi>صِيَغٌ</bdi> of <bdi>مُضَاعَفٌ</bdi> verbs which undergo <bdi>إِدْغَامٌ</bdi> are summarised below (<bdi>إِدْغَامٌ</bdi> = the form merges; — = no <bdi>إِدْغَامٌ</bdi>). <bdi>الْأَمْرُ</bdi> and <bdi>النَّهْيُ</bdi> exist only for the <bdi>مُخَاطَبٌ</bdi> forms, and <bdi>اِسْمُ الْفَاعِلِ</bdi> / <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> have six noun forms (singular, dual, plural × masculine, feminine), shown against the six rows of the <bdi>مُخَاطَبٌ</bdi> set.",
              "list": false
            },
            {
              "table": {
                "title": "صِيَغٌ which undergo إِدْغَامٌ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَانِ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَةُ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "—",
                    "إِدْغَامٌ",
                    "—",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "—",
                    "إِدْغَامٌ",
                    "—",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "—",
                    "إِدْغَامٌ",
                    "—",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "—",
                    "إِدْغَامٌ",
                    "—",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "—",
                    "إِدْغَامٌ",
                    "—",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "إِدْغَامٌ",
                    "—"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "—",
                    "إِدْغَامٌ",
                    "—"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "—",
                    "إِدْغَامٌ",
                    "—",
                    "إِدْغَامٌ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "—",
                    "إِدْغَامٌ",
                    "—",
                    "إِدْغَامٌ",
                    "",
                    "",
                    "",
                    ""
                  ]
                ]
              }
            },
            {
              "html": "In short: in <bdi>الْمَاضِيْ</bdi>, <bdi>إِدْغَامٌ</bdi> occurs only in the first five <bdi>صِيَغٌ</bdi> (<bdi>الْغَائِبُ</bdi> to <bdi>الْغَائِبَتَانِ</bdi>). In <bdi>الْمُضَارِعُ</bdi>, it occurs in every <bdi>صِيْغَةٌ</bdi> except <bdi>الْغَائِبَاتُ</bdi> and <bdi>الْمُخَاطَبَاتُ</bdi>. In <bdi>الْأَمْرُ</bdi> and <bdi>النَّهْيُ</bdi>, it occurs in every <bdi>صِيْغَةٌ</bdi> except <bdi>الْمُخَاطَبَاتُ</bdi>. All six forms of <bdi>اِسْمُ الْفَاعِلِ</bdi> undergo <bdi>إِدْغَامٌ</bdi>, and <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> never does (e.g. <bdi>مَرْدُوْدٌ</bdi>).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In the conjugation of الْمَاضِيْ, from which صِيْغَةٌ onwards does إِدْغَامٌ stop taking place?",
            "kind": "mcq",
            "options": ["From الْغَائِبَةُ onwards", "From الْغَائِبَاتُ to الْمُتَكَلِّمُوْنَ", "From الْمُخَاطَبَاتُ onwards only", "It occurs in all 14 صِيَغٌ"],
            "correct": 1
          }
        }
      ],
      "summary": {
        "title": "Introduction: Rules of الْمُضَاعَفُ",
        "rows": [
          {
            "label": "A word in which a root letter is repeated, e.g. رَدَّ",
            "arabic": "مُضَاعَفٌ",
            "meaning": "A word in which a root letter is repeated, e.g. رَدَّ",
            "unlockAt": 0
          },
          {
            "label": "To merge two letters",
            "arabic": "إِدْغَامٌ",
            "meaning": "To merge two letters",
            "unlockAt": 1
          },
          {
            "label": "Transferring the harakah to the preceding letter (in الْمُضَارِعُ, before إِدْغَامٌ)",
            "arabic": "نَقْلٌ",
            "meaning": "Transferring the harakah to the preceding letter (in الْمُضَارِعُ, before إِدْغَامٌ)",
            "unlockAt": 3
          },
          {
            "label": "صَحِيْحٌ abwāb treated as مُضَاعَفٌ",
            "arabic": "اِفْعَلَّ (IX)، اِفْعَالَّ (XI)، اِفْعَلَلَّ (IV)",
            "meaning": "صَحِيْحٌ abwāb treated as مُضَاعَفٌ",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "What is a مُضَاعَفٌ?",
          "options": [
            "A word whose first root letter is a و or ي",
            "A word in which a root letter is repeated",
            "A word containing a هَمْزَةٌ",
            "A word whose middle root letter is a weak letter"
          ],
          "correct": 1,
          "explanation": "مُضَاعَفٌ is a word in which a root letter is repeated, e.g. رَدَّ from the root ر د د."
        },
        {
          "q": "What does إِدْغَامٌ mean?",
          "options": [
            "To drop a letter",
            "To transfer a harakah",
            "To merge two letters",
            "To add a حَرْفٌ زَائِدٌ"
          ],
          "correct": 2,
          "explanation": "إِدْغَامٌ is to merge two letters, e.g. رَدَدَ becomes رَدَّ."
        },
        {
          "q": "In which three places does إِدْغَامٌ occur?",
          "options": [
            "الْمَاضِيْ، الْمَصْدَرُ، اِسْمُ الْمَفْعُوْلِ",
            "الْمَاضِيْ، الْمُضَارِعُ (after نَقْلٌ)، اِسْمُ الْفَاعِلِ",
            "الْأَمْرُ، النَّهْيُ، اِسْمُ الْمَفْعُوْلِ",
            "الْمُضَارِعُ، الْمَصْدَرُ، اِسْمُ الْفَاعِلِ"
          ],
          "correct": 1,
          "explanation": "إِدْغَامٌ occurs in: 1. الْمَاضِيْ (رَدَدَ ← رَدَّ), 2. الْمُضَارِعُ after نَقْلٌ (يَرْدُدُ ← يَرُدُّ), 3. اِسْمُ الْفَاعِلِ (رَادِدٌ ← رَادٌّ)."
        },
        {
          "q": "In the conjugation of الْمَاضِيْ, from which صِيْغَةٌ onwards does إِدْغَامٌ stop taking place?",
          "options": [
            "From الْغَائِبَةُ onwards",
            "From الْغَائِبَاتُ to الْمُتَكَلِّمُوْنَ",
            "From الْمُخَاطَبَاتُ onwards only",
            "It occurs in all 14 صِيَغٌ"
          ],
          "correct": 1,
          "explanation": "إِدْغَامٌ does not take place from الْغَائِبَاتُ to الْمُتَكَلِّمُوْنَ, e.g. رَدَدْنَ، رَدَدْتَ … رَدَدْنَا."
        },
        {
          "q": "الْأَمْرُ with إِدْغَامٌ and a ضَمَّةٌ on the لَامُ الْكَلِمَةِ (e.g. مُدُّ) is allowed for…",
          "options": [
            "verbs from all أَبْوَابٌ",
            "verbs from بَاب سَمِعَ only",
            "verbs from بَاب ضَرَبَ only",
            "verbs from بَاب نَصَرَ only"
          ],
          "correct": 3,
          "explanation": "The ضَمَّةٌ option is only for verbs from بَاب نَصَرَ, giving مُدَّ، مُدِّ، مُدُّ and اُمْدُدْ — four forms in total."
        },
        {
          "q": "Which of the following أَبْوَابٌ is صَحِيْحٌ yet follows the rules of مُضَاعَفٌ?",
          "options": [
            "بَاب تَفْعِيْل (II)",
            "بَاب اِفْعِلَال (IX)",
            "بَاب اِسْتِفْعَال (X)",
            "بَاب مُفَاعَلَة (III)"
          ],
          "correct": 1,
          "explanation": "بَاب اِفْعِلَال (IX), بَاب اِفْعِيْلَال (XI) and the quadriliteral بَاب اِفْعِلَّال (IV) are صَحِيْحٌ, but because the حَرْفٌ زَائِدٌ is the same as the root letter, the rules of مُضَاعَفٌ also apply to them."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which process turns يَرْدُدُ into يَرُدْدُ before إِدْغَامٌ can occur?",
          "options": [
            "نَقْلٌ",
            "قَلْبٌ",
            "حَذْفٌ",
            "إِبْدَالٌ"
          ],
          "correct": 0,
          "explanation": "نَقْلٌ transfers the harakah of the first repeated letter to the preceding sākin letter: يَرْدُدُ ← يَرُدْدُ, then إِدْغَامٌ gives يَرُدُّ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In الْمُضَارِعُ, which two صِيَغٌ never undergo إِدْغَامٌ?",
          "options": [
            "الْغَائِبَاتُ and الْمُخَاطَبَاتُ",
            "الْغَائِبُ and الْغَائِبَةُ",
            "الْمُتَكَلِّمُ and الْمُتَكَلِّمُوْنَ",
            "الْمُخَاطَبَانِ and الْمُخَاطَبَتَانِ"
          ],
          "correct": 0,
          "explanation": "إِدْغَامٌ does not take place in الْغَائِبَاتُ or الْمُخَاطَبَاتُ, e.g. يَرْدُدْنَ، تَرْدُدْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The اِسْمُ الْفَاعِلِ of a مُضَاعَفٌ verb such as رَدَّ is…",
          "options": [
            "رَادٌّ",
            "رَادِدٌ",
            "مَرْدُوْدٌ",
            "رَدَّادٌ"
          ],
          "correct": 0,
          "explanation": "اِسْمُ الْفَاعِلِ undergoes إِدْغَامٌ: رَادِدٌ ← رَادٌّ. (مَرْدُوْدٌ is اِسْمُ الْمَفْعُوْلِ, which never merges.)"
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "How many correct ways are there to say 'do not extend!' (النَّهْيُ of مَدَّ, from بَاب نَصَرَ) to one male?",
          "options": [
            "Four: لَا تَمُدَّ، لَا تَمُدِّ، لَا تَمُدُّ، لَا تَمْدُدْ",
            "One: لَا تَمْدُدْ only",
            "Two: لَا تَمُدَّ and لَا تَمْدُدْ only",
            "Three: with فَتْحَةٌ، كَسْرَةٌ، or ضَمَّةٌ only"
          ],
          "correct": 0,
          "explanation": "Verbs from بَاب نَصَرَ allow إِدْغَامٌ with فَتْحَةٌ، كَسْرَةٌ، or ضَمَّةٌ, plus the form without إِدْغَامٌ — four forms in total."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "A مُضَاعَفٌ verb from بَاب سَمِعَ or بَاب ضَرَبَ has how many forms of الْأَمْرُ?",
          "options": [
            "Three: إِدْغَامٌ with فَتْحَةٌ, إِدْغَامٌ with كَسْرَةٌ, and without إِدْغَامٌ",
            "Four, like بَاب نَصَرَ",
            "Two: with and without إِدْغَامٌ",
            "One only"
          ],
          "correct": 0,
          "explanation": "The ضَمَّةٌ option is exclusive to بَاب نَصَرَ, so بَاب سَمِعَ and بَاب ضَرَبَ have three forms, e.g. بَرَّ، بَرِّ، اِبْرَرْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Looked up as a two-letter word, where does بَرَّ appear in the dictionary?",
          "options": [
            "As the first entry word under ب ر",
            "After the entry of ب ر ذ",
            "Under the letter ر",
            "Under the scale فَعَّلَ"
          ],
          "correct": 0,
          "explanation": "Listed as a two-letter word it appears first under ب ر; listed as a three-letter word (ب ر ر) it appears after ب ر ذ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of the following forms of رَدَّ shows إِدْغَامٌ?",
          "options": [
            "رُدَّتْ",
            "رَدَدْتُمْ",
            "يَرْدُدْنَ",
            "مَرْدُوْدَةٌ"
          ],
          "correct": 0,
          "explanation": "رُدَّتْ (الْمَاضِيْ الْمَجْهُوْلُ، الْغَائِبَةُ) is within the first five صِيَغٌ, so it merges. رَدَدْتُمْ is مُخَاطَبٌ past, يَرْدُدْنَ is الْغَائِبَاتُ, and اِسْمُ الْمَفْعُوْلِ never merges."
        }
      ]
    },
    {
      "id": "l2",
      "title": "الثُّلَاثِيُّ الْمُجَرَّدُ",
      "subtitle": "الْمُضَاعَفُ from the ثُلَاثِيٌّ مُجَرَّدٌ abwāb: بَاب سَمِعَ، بَاب ضَرَبَ، بَاب نَصَرَ",
      "concepts": [
        {
          "heading": "Part 1: الْمُضَاعَفُ مِنْ بَاب سَمِعَ يَسْمَعُ",
          "lines": [
            {
              "html": "The example verb is <bdi>بَرَّ يَبَرُّ بِرًّا</bdi> (root <bdi>ب ر ر</bdi>): to be reverent. On <bdi>بَاب سَمِعَ</bdi> the <bdi>عَيْنُ الْكَلِمَةِ</bdi> of <bdi>الْمُضَارِعُ</bdi> carries a <bdi>فَتْحَةٌ</bdi> after <bdi>نَقْلٌ</bdi>, i.e. <bdi>يَبَرُّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — بَرَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "بَرَّ",
                    "يَبَرُّ",
                    "بِرًّا",
                    "بُرَّ",
                    "يُبَرُّ",
                    "بِرًّا",
                    "بَرَّ",
                    "لَا تَبَرَّ",
                    "بَارٌّ",
                    "مَبْرُوْرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — بَرَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "بَرَّ",
                    "يَبَرُّ",
                    "بُرَّ",
                    "يُبَرُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "بَرَّا",
                    "يَبَرَّانِ",
                    "بُرَّا",
                    "يُبَرَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "بَرُّوْا",
                    "يَبَرُّوْنَ",
                    "بُرُّوْا",
                    "يُبَرُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "بَرَّتْ",
                    "تَبَرُّ",
                    "بُرَّتْ",
                    "تُبَرُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "بَرَّتَا",
                    "تَبَرَّانِ",
                    "بُرَّتَا",
                    "تُبَرَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "بَرِرْنَ",
                    "يَبْرَرْنَ",
                    "بُرِرْنَ",
                    "يُبْرَرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "بَرِرْتَ",
                    "تَبَرُّ",
                    "بُرِرْتَ",
                    "تُبَرُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "بَرِرْتُمَا",
                    "تَبَرَّانِ",
                    "بُرِرْتُمَا",
                    "تُبَرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "بَرِرْتُمْ",
                    "تَبَرُّوْنَ",
                    "بُرِرْتُمْ",
                    "تُبَرُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "بَرِرْتِ",
                    "تَبَرِّيْنَ",
                    "بُرِرْتِ",
                    "تُبَرِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "بَرِرْتُمَا",
                    "تَبَرَّانِ",
                    "بُرِرْتُمَا",
                    "تُبَرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "بَرِرْتُنَّ",
                    "تَبْرَرْنَ",
                    "بُرِرْتُنَّ",
                    "تُبْرَرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "بَرِرْتُ",
                    "أَبَرُّ",
                    "بُرِرْتُ",
                    "أُبَرُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "بَرِرْنَا",
                    "نَبَرُّ",
                    "بُرِرْنَا",
                    "نُبَرُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — بَرَّ (الْأَمْرُ and النَّهْيُ)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "بَرَّ",
                    "لَا تَبَرَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "بَرَّا",
                    "لَا تَبَرَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "بَرُّوْا",
                    "لَا تَبَرُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "بَرِّيْ",
                    "لَا تَبَرِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "بَرَّا",
                    "لَا تَبَرَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِبْرَرْنَ",
                    "لَا تَبْرَرْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — بَرَّ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "بَارٌّ",
                    "مَبْرُوْرٌ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "بَارَّانِ",
                    "مَبْرُوْرَانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "بَارُّوْنَ",
                    "مَبْرُوْرُوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "بَارَّةٌ",
                    "مَبْرُوْرَةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "بَارَّتَانِ",
                    "مَبْرُوْرَتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "بَارَّاتٌ",
                    "مَبْرُوْرَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The الْمُضَارِعُ of بَرَّ (بَاب سَمِعَ) is…",
            "kind": "mcq",
            "options": ["يَبِرُّ", "يَبُرُّ", "يَبَرُّ", "يُبَرُّ"],
            "correct": 2
          }
        },
        {
          "heading": "Part 2: الْمُضَاعَفُ مِنْ بَاب ضَرَبَ يَضْرِبُ",
          "lines": [
            {
              "html": "The example verb is <bdi>فَرَّ يَفِرُّ فِرَارًا</bdi> (root <bdi>ف ر ر</bdi>): to flee. On <bdi>بَاب ضَرَبَ</bdi> the <bdi>عَيْنُ الْكَلِمَةِ</bdi> of <bdi>الْمُضَارِعُ</bdi> carries a <bdi>كَسْرَةٌ</bdi> after <bdi>نَقْلٌ</bdi>, i.e. <bdi>يَفِرُّ</bdi>, and <bdi>الْأَمْرُ</bdi> with <bdi>إِدْغَامٌ</bdi> therefore begins <bdi>فِرَّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — فَرَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "فَرَّ",
                    "يَفِرُّ",
                    "فِرَارًا",
                    "فُرَّ",
                    "يُفَرُّ",
                    "فِرَارًا",
                    "فِرَّ",
                    "لَا تَفِرَّ",
                    "فَارٌّ",
                    "مَفْرُوْرٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — فَرَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "فَرَّ",
                    "يَفِرُّ",
                    "فُرَّ",
                    "يُفَرُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "فَرَّا",
                    "يَفِرَّانِ",
                    "فُرَّا",
                    "يُفَرَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "فَرُّوْا",
                    "يَفِرُّوْنَ",
                    "فُرُّوْا",
                    "يُفَرُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "فَرَّتْ",
                    "تَفِرُّ",
                    "فُرَّتْ",
                    "تُفَرُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "فَرَّتَا",
                    "تَفِرَّانِ",
                    "فُرَّتَا",
                    "تُفَرَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "فَرَرْنَ",
                    "يَفْرِرْنَ",
                    "فُرِرْنَ",
                    "يُفْرَرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "فَرَرْتَ",
                    "تَفِرُّ",
                    "فُرِرْتَ",
                    "تُفَرُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "فَرَرْتُمَا",
                    "تَفِرَّانِ",
                    "فُرِرْتُمَا",
                    "تُفَرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "فَرَرْتُمْ",
                    "تَفِرُّوْنَ",
                    "فُرِرْتُمْ",
                    "تُفَرُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "فَرَرْتِ",
                    "تَفِرِّيْنَ",
                    "فُرِرْتِ",
                    "تُفَرِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "فَرَرْتُمَا",
                    "تَفِرَّانِ",
                    "فُرِرْتُمَا",
                    "تُفَرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "فَرَرْتُنَّ",
                    "تَفْرِرْنَ",
                    "فُرِرْتُنَّ",
                    "تُفْرَرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "فَرَرْتُ",
                    "أَفِرُّ",
                    "فُرِرْتُ",
                    "أُفَرُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "فَرَرْنَا",
                    "نَفِرُّ",
                    "فُرِرْنَا",
                    "نُفَرُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — فَرَّ (الْأَمْرُ and النَّهْيُ)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "فِرَّ",
                    "لَا تَفِرَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "فِرَّا",
                    "لَا تَفِرَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "فِرُّوْا",
                    "لَا تَفِرُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "فِرِّيْ",
                    "لَا تَفِرِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "فِرَّا",
                    "لَا تَفِرَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِفْرِرْنَ",
                    "لَا تَفْرِرْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — فَرَّ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "فَارٌّ",
                    "مَفْرُوْرٌ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "فَارَّانِ",
                    "مَفْرُوْرَانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "فَارُّوْنَ",
                    "مَفْرُوْرُوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "فَارَّةٌ",
                    "مَفْرُوْرَةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "فَارَّتَانِ",
                    "مَفْرُوْرَتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "فَارَّاتٌ",
                    "مَفْرُوْرَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "فَرَّ يَفِرُّ belongs to which بَابٌ?",
            "kind": "mcq",
            "options": ["بَاب سَمِعَ", "بَاب ضَرَبَ", "بَاب نَصَرَ", "بَاب فَتَحَ"],
            "correct": 1
          }
        },
        {
          "heading": "Part 3: الْمُضَاعَفُ مِنْ بَاب نَصَرَ يَنْصُرُ",
          "lines": [
            {
              "html": "The example verb is <bdi>مَدَّ يَمُدُّ مَدًّا</bdi> (root <bdi>م د د</bdi>): to extend. On <bdi>بَاب نَصَرَ</bdi> the <bdi>عَيْنُ الْكَلِمَةِ</bdi> of <bdi>الْمُضَارِعُ</bdi> carries a <bdi>ضَمَّةٌ</bdi> after <bdi>نَقْلٌ</bdi>, i.e. <bdi>يَمُدُّ</bdi>. Only this <bdi>بَابٌ</bdi> additionally allows <bdi>الْأَمْرُ</bdi> and <bdi>النَّهْيُ</bdi> with <bdi>إِدْغَامٌ</bdi> and a <bdi>ضَمَّةٌ</bdi> (<bdi>مُدُّ، لَا تَمُدُّ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — مَدَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "مَدَّ",
                    "يَمُدُّ",
                    "مَدًّا",
                    "مُدَّ",
                    "يُمَدُّ",
                    "مَدًّا",
                    "مُدَّ",
                    "لَا تَمُدَّ",
                    "مَادٌّ",
                    "مَمْدُوْدٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — مَدَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "مَدَّ",
                    "يَمُدُّ",
                    "مُدَّ",
                    "يُمَدُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "مَدَّا",
                    "يَمُدَّانِ",
                    "مُدَّا",
                    "يُمَدَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "مَدُّوْا",
                    "يَمُدُّوْنَ",
                    "مُدُّوْا",
                    "يُمَدُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "مَدَّتْ",
                    "تَمُدُّ",
                    "مُدَّتْ",
                    "تُمَدُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "مَدَّتَا",
                    "تَمُدَّانِ",
                    "مُدَّتَا",
                    "تُمَدَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "مَدَدْنَ",
                    "يَمْدُدْنَ",
                    "مُدِدْنَ",
                    "يُمْدَدْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "مَدَدْتَ",
                    "تَمُدُّ",
                    "مُدِدْتَ",
                    "تُمَدُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "مَدَدْتُمَا",
                    "تَمُدَّانِ",
                    "مُدِدْتُمَا",
                    "تُمَدَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "مَدَدْتُمْ",
                    "تَمُدُّوْنَ",
                    "مُدِدْتُمْ",
                    "تُمَدُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "مَدَدْتِ",
                    "تَمُدِّيْنَ",
                    "مُدِدْتِ",
                    "تُمَدِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "مَدَدْتُمَا",
                    "تَمُدَّانِ",
                    "مُدِدْتُمَا",
                    "تُمَدَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "مَدَدْتُنَّ",
                    "تَمْدُدْنَ",
                    "مُدِدْتُنَّ",
                    "تُمْدَدْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "مَدَدْتُ",
                    "أَمُدُّ",
                    "مُدِدْتُ",
                    "أُمَدُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "مَدَدْنَا",
                    "نَمُدُّ",
                    "مُدِدْنَا",
                    "نُمَدُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — مَدَّ (الْأَمْرُ and النَّهْيُ)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "مُدَّ",
                    "لَا تَمُدَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "مُدَّا",
                    "لَا تَمُدَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "مُدُّوْا",
                    "لَا تَمُدُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "مُدِّيْ",
                    "لَا تَمُدِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "مُدَّا",
                    "لَا تَمُدَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اُمْدُدْنَ",
                    "لَا تَمْدُدْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — مَدَّ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مَادٌّ",
                    "مَمْدُوْدٌ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مَادَّانِ",
                    "مَمْدُوْدَانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مَادُّوْنَ",
                    "مَمْدُوْدُوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مَادَّةٌ",
                    "مَمْدُوْدَةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مَادَّتَانِ",
                    "مَمْدُوْدَتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مَادَّاتٌ",
                    "مَمْدُوْدَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Which of these is a valid الْأَمْرُ of مَدَّ that is NOT possible for بَرَّ or فَرَّ?",
            "kind": "mcq",
            "options": ["مُدُّ (ضَمَّةٌ with إِدْغَامٌ)", "مُدَّ (فَتْحَةٌ)", "مُدِّ (كَسْرَةٌ)", "اُمْدُدْ (without إِدْغَامٌ)"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 1–3: الْمُضَاعَفُ الْمُجَرَّدُ",
        "rows": [
          {
            "label": "فَتْحَةٌ on the عَيْن in الْمُضَارِعُ; أَمْرٌ: بَرَّ / بَرِّ / اِبْرَرْ",
            "arabic": "بَاب سَمِعَ: بَرَّ يَبَرُّ بِرًّا",
            "meaning": "فَتْحَةٌ on the عَيْن in الْمُضَارِعُ; أَمْرٌ: بَرَّ / بَرِّ / اِبْرَرْ",
            "unlockAt": 0
          },
          {
            "label": "كَسْرَةٌ on the عَيْن in الْمُضَارِعُ; أَمْرٌ: فِرَّ / فِرِّ / اِفْرِرْ",
            "arabic": "بَاب ضَرَبَ: فَرَّ يَفِرُّ فِرَارًا",
            "meaning": "كَسْرَةٌ on the عَيْن in الْمُضَارِعُ; أَمْرٌ: فِرَّ / فِرِّ / اِفْرِرْ",
            "unlockAt": 1
          },
          {
            "label": "ضَمَّةٌ on the عَيْن in الْمُضَارِعُ; أَمْرٌ: مُدَّ / مُدِّ / مُدُّ / اُمْدُدْ",
            "arabic": "بَاب نَصَرَ: مَدَّ يَمُدُّ مَدًّا",
            "meaning": "ضَمَّةٌ on the عَيْن in الْمُضَارِعُ; أَمْرٌ: مُدَّ / مُدِّ / مُدُّ / اُمْدُدْ",
            "unlockAt": 3
          },
          {
            "label": "اِسْمُ الْفَاعِلِ always shows إِدْغَامٌ",
            "arabic": "بَارٌّ، فَارٌّ، مَادٌّ",
            "meaning": "اِسْمُ الْفَاعِلِ always shows إِدْغَامٌ",
            "unlockAt": 4
          },
          {
            "label": "اِسْمُ الْمَفْعُوْلِ never shows إِدْغَامٌ",
            "arabic": "مَبْرُوْرٌ، مَفْرُوْرٌ، مَمْدُوْدٌ",
            "meaning": "اِسْمُ الْمَفْعُوْلِ never shows إِدْغَامٌ",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "The الْمُضَارِعُ of بَرَّ (بَاب سَمِعَ) is…",
          "options": [
            "يَبِرُّ",
            "يَبُرُّ",
            "يَبَرُّ",
            "يُبَرُّ"
          ],
          "correct": 2,
          "explanation": "On بَاب سَمِعَ (يَفْعَلُ) the عَيْن carries a فَتْحَةٌ after نَقْلٌ: يَبَرُّ. (يُبَرُّ is the passive.)"
        },
        {
          "q": "فَرَّ يَفِرُّ belongs to which بَابٌ?",
          "options": [
            "بَاب سَمِعَ",
            "بَاب ضَرَبَ",
            "بَاب نَصَرَ",
            "بَاب فَتَحَ"
          ],
          "correct": 1,
          "explanation": "The كَسْرَةٌ on the عَيْن of the مُضَارِعُ (يَفِرُّ from يَفْرِرُ) shows بَاب ضَرَبَ (يَفْعِلُ)."
        },
        {
          "q": "'They (f/p) extended' — the الْغَائِبَاتُ of مَدَّ in الْمَاضِيْ — is…",
          "options": [
            "مَدَّتَا",
            "مَدَدْنَ",
            "مَدُّوْا",
            "مَدَدْنَا"
          ],
          "correct": 1,
          "explanation": "إِدْغَامٌ stops from الْغَائِبَاتُ onwards, so the two دs separate: مَدَدْنَ. (مَدَدْنَا is 'we extended'.)"
        },
        {
          "q": "The الْمَاضِيْ الْمَجْهُوْلُ of فَرَّ (he was fled from / it was fled) is…",
          "options": [
            "فُرَّ",
            "فَرَّ",
            "فُرِرْتَ",
            "يُفَرُّ"
          ],
          "correct": 0,
          "explanation": "The passive past merges like the active in the first five صِيَغٌ: فُرِرَ ← فُرَّ. يُفَرُّ is the passive مُضَارِعٌ."
        },
        {
          "q": "The اِسْمُ الْمَفْعُوْلِ of بَرَّ is…",
          "options": [
            "بَارٌّ",
            "مَبَرٌّ",
            "مَبْرُوْرٌ",
            "بَرِيْرٌ"
          ],
          "correct": 2,
          "explanation": "اِسْمُ الْمَفْعُوْلِ is on the scale مَفْعُوْلٌ and never undergoes إِدْغَامٌ: مَبْرُوْرٌ. بَارٌّ is اِسْمُ الْفَاعِلِ."
        },
        {
          "q": "Which of these is a valid الْأَمْرُ of مَدَّ that is NOT possible for بَرَّ or فَرَّ?",
          "options": [
            "مُدُّ (ضَمَّةٌ with إِدْغَامٌ)",
            "مُدَّ (فَتْحَةٌ)",
            "مُدِّ (كَسْرَةٌ)",
            "اُمْدُدْ (without إِدْغَامٌ)"
          ],
          "correct": 0,
          "explanation": "الْأَمْرُ with إِدْغَامٌ and a ضَمَّةٌ is only for verbs from بَاب نَصَرَ, e.g. مُدُّ. The فَتْحَةٌ, كَسْرَةٌ, and non-إِدْغَامٌ forms exist in all three abwāb."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "بَرِرْتُمْ means…",
          "options": [
            "You (m/p) were reverent",
            "They (m/p) were reverent",
            "You (f/p) were reverent",
            "We were reverent"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبُوْنَ of the مَاضِيْ takes تُمْ, and the doubled letters stay separate: بَرِرْتُمْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which form is the الْمُضَارِعُ الْمَجْهُوْلُ of مَدَّ for الْغَائِبَاتُ?",
          "options": [
            "يُمْدَدْنَ",
            "يَمْدُدْنَ",
            "يُمَدُّوْنَ",
            "تُمْدَدْنَ"
          ],
          "correct": 0,
          "explanation": "The passive prefix takes ضَمَّةٌ and the عَيْن a فَتْحَةٌ, with no إِدْغَامٌ in الْغَائِبَاتُ: يُمْدَدْنَ. (تُمْدَدْنَ is الْمُخَاطَبَاتُ.)"
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Flee! (you f/s)' with إِدْغَامٌ is…",
          "options": [
            "فِرِّيْ",
            "فِرَّ",
            "اِفْرِرْ",
            "فِرُّوْا"
          ],
          "correct": 0,
          "explanation": "الْأَمْرُ of الْمُخَاطَبَةُ ends in يْ: فِرِّيْ. فِرَّ is (m/s) and فِرُّوْا is (m/p)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the difference between فَرَرْنَا and فُرِرْنَا?",
          "options": [
            "فَرَرْنَا = we fled (active); فُرِرْنَا = passive 'we were fled from'",
            "They are identical in meaning",
            "فَرَرْنَا = they (f/p) fled; فُرِرْنَا = we fled",
            "فَرَرْنَا is مُضَارِعٌ and فُرِرْنَا is مَاضٍ"
          ],
          "correct": 0,
          "explanation": "Both are الْمُتَكَلِّمُوْنَ of the مَاضِيْ; the ضَمَّةٌ–كَسْرَةٌ pattern (فُرِرْ) marks الْمَجْهُوْلُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "بَارَّاتٌ is…",
          "options": [
            "اِسْمُ الْفَاعِلِ، جَمْعُ الْمُؤَنَّثِ — reverent women",
            "اِسْمُ الْمَفْعُوْلِ، جَمْعُ الْمُؤَنَّثِ",
            "الْمَاضِيْ of الْغَائِبَاتُ",
            "اِسْمُ الْفَاعِلِ، الْمُثَنَّاةُ"
          ],
          "correct": 0,
          "explanation": "بَارٌّ (with إِدْغَامٌ) is اِسْمُ الْفَاعِلِ; its feminine plural is بَارَّاتٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَمُدِّيْنَ is which صِيْغَةٌ of يَمُدُّ?",
          "options": [
            "الْمُخَاطَبَةُ — you (f/s) extend",
            "الْمُخَاطَبَاتُ — you (f/p) extend",
            "الْغَائِبَةُ — she extends",
            "الْمُخَاطَبُ — you (m/s) extend"
          ],
          "correct": 0,
          "explanation": "The ending ِيْنَ marks الْمُخَاطَبَةُ: تَمُدِّيْنَ. الْمُخَاطَبَاتُ would be تَمْدُدْنَ (no إِدْغَامٌ)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which pair of forms of بَرَّ is written identically?",
          "options": [
            "الْأَمْرُ (with فَتْحَةٌ) بَرَّ and الْمَاضِيْ بَرَّ",
            "الْمَاضِيْ بَرَّ and الْمُضَارِعُ يَبَرُّ",
            "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ",
            "النَّهْيُ and الْمُضَارِعُ الْمَجْهُوْلُ"
          ],
          "correct": 0,
          "explanation": "With إِدْغَامٌ and a فَتْحَةٌ, the أَمْرٌ of بَرَّ is بَرَّ — the same written form as the مَاضِيْ; context distinguishes them."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "زَلَّ يَزِلُّ (to slip) follows the same بَابٌ as…",
          "options": [
            "فَرَّ يَفِرُّ",
            "بَرَّ يَبَرُّ",
            "مَدَّ يَمُدُّ",
            "سَمِعَ يَسْمَعُ"
          ],
          "correct": 0,
          "explanation": "يَزِلُّ has a كَسْرَةٌ on the عَيْن, so زَلَّ is from بَاب ضَرَبَ like فَرَّ يَفِرُّ."
        },
        {
          "title": "to touch, feel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to touch, feel\"?",
          "options": [
            "مَسَّ يَمَسُّ",
            "لَذَّ يَلَذُّ",
            "بَرَّ يَبَرُّ",
            "عَضَّ يَعَضُّ"
          ],
          "correct": 0
        },
        {
          "title": "to touch, feel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسَّ يَمَسُّ mean?",
          "options": [
            "to touch, feel",
            "to enjoy",
            "to be reverent",
            "to bite"
          ],
          "correct": 0
        },
        {
          "title": "to touch, feel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَسَّ يَمَسُّ?",
          "options": [
            "مَسًّا",
            "لَذَّةً",
            "بِرًّا",
            "عَضًّا"
          ],
          "correct": 0
        },
        {
          "title": "to enjoy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to enjoy\"?",
          "options": [
            "لَذَّ يَلَذُّ",
            "بَرَّ يَبَرُّ",
            "عَضَّ يَعَضُّ",
            "ضَلَّ يَضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to enjoy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَذَّ يَلَذُّ mean?",
          "options": [
            "to enjoy",
            "to be reverent",
            "to bite",
            "to go astray"
          ],
          "correct": 0
        },
        {
          "title": "to enjoy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَذَّ يَلَذُّ?",
          "options": [
            "لَذَّةً",
            "بِرًّا",
            "عَضًّا",
            "ضَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be reverent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be reverent\"?",
          "options": [
            "بَرَّ يَبَرُّ",
            "عَضَّ يَعَضُّ",
            "ضَلَّ يَضِلُّ",
            "فَرَّ يَفِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be reverent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَرَّ يَبَرُّ mean?",
          "options": [
            "to be reverent",
            "to bite",
            "to go astray",
            "to flee"
          ],
          "correct": 0
        },
        {
          "title": "to be reverent (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَرَّ يَبَرُّ?",
          "options": [
            "بِرًّا",
            "عَضًّا",
            "ضَلَالًا",
            "فِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to bite",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bite\"?",
          "options": [
            "عَضَّ يَعَضُّ",
            "ضَلَّ يَضِلُّ",
            "فَرَّ يَفِرُّ",
            "تَبَّ يَتِبُّ"
          ],
          "correct": 0
        },
        {
          "title": "to bite",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَضَّ يَعَضُّ mean?",
          "options": [
            "to bite",
            "to go astray",
            "to flee",
            "to perish"
          ],
          "correct": 0
        },
        {
          "title": "to bite (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَضَّ يَعَضُّ?",
          "options": [
            "عَضًّا",
            "ضَلَالًا",
            "فِرَارًا",
            "تَبًّا"
          ],
          "correct": 0
        },
        {
          "title": "to go astray",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to go astray\"?",
          "options": [
            "ضَلَّ يَضِلُّ",
            "فَرَّ يَفِرُّ",
            "تَبَّ يَتِبُّ",
            "زَلَّ يَزِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to go astray",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَلَّ يَضِلُّ mean?",
          "options": [
            "to go astray",
            "to flee",
            "to perish",
            "to slip"
          ],
          "correct": 0
        },
        {
          "title": "to go astray (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَلَّ يَضِلُّ?",
          "options": [
            "ضَلَالًا",
            "فِرَارًا",
            "تَبًّا",
            "زَلَلًا"
          ],
          "correct": 0
        },
        {
          "title": "to flee",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to flee\"?",
          "options": [
            "فَرَّ يَفِرُّ",
            "تَبَّ يَتِبُّ",
            "زَلَّ يَزِلُّ",
            "مَرَّ يَمُرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to flee",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَرَّ يَفِرُّ mean?",
          "options": [
            "to flee",
            "to perish",
            "to slip",
            "to pass"
          ],
          "correct": 0
        },
        {
          "title": "to flee (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَرَّ يَفِرُّ?",
          "options": [
            "فِرَارًا",
            "تَبًّا",
            "زَلَلًا",
            "مُرُوْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to perish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perish\"?",
          "options": [
            "تَبَّ يَتِبُّ",
            "زَلَّ يَزِلُّ",
            "مَرَّ يَمُرُّ",
            "مَدَّ يَمُدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to perish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَبَّ يَتِبُّ mean?",
          "options": [
            "to perish",
            "to slip",
            "to pass",
            "to extend"
          ],
          "correct": 0
        },
        {
          "title": "to perish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَبَّ يَتِبُّ?",
          "options": [
            "تَبًّا",
            "زَلَلًا",
            "مُرُوْرًا",
            "مَدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to slip",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to slip\"?",
          "options": [
            "زَلَّ يَزِلُّ",
            "مَرَّ يَمُرُّ",
            "مَدَّ يَمُدُّ",
            "شَدَّ يَشُدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to slip",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَلَّ يَزِلُّ mean?",
          "options": [
            "to slip",
            "to pass",
            "to extend",
            "to tighten"
          ],
          "correct": 0
        },
        {
          "title": "to slip (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَلَّ يَزِلُّ?",
          "options": [
            "زَلَلًا",
            "مُرُوْرًا",
            "مَدًّا",
            "شَدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to pass",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to pass\"?",
          "options": [
            "مَرَّ يَمُرُّ",
            "مَدَّ يَمُدُّ",
            "شَدَّ يَشُدُّ",
            "صَدَّ يَصُدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to pass",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرَّ يَمُرُّ mean?",
          "options": [
            "to pass",
            "to extend",
            "to tighten",
            "to turn away"
          ],
          "correct": 0
        },
        {
          "title": "to pass (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَرَّ يَمُرُّ?",
          "options": [
            "مُرُوْرًا",
            "مَدًّا",
            "شَدًّا",
            "صَدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to extend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to extend\"?",
          "options": [
            "مَدَّ يَمُدُّ",
            "شَدَّ يَشُدُّ",
            "صَدَّ يَصُدُّ",
            "مَسَّ يَمَسُّ"
          ],
          "correct": 0
        },
        {
          "title": "to extend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَدَّ يَمُدُّ mean?",
          "options": [
            "to extend",
            "to tighten",
            "to turn away",
            "to touch, feel"
          ],
          "correct": 0
        },
        {
          "title": "to extend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَدَّ يَمُدُّ?",
          "options": [
            "مَدًّا",
            "شَدًّا",
            "صَدًّا",
            "مَسًّا"
          ],
          "correct": 0
        },
        {
          "title": "to tighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tighten\"?",
          "options": [
            "شَدَّ يَشُدُّ",
            "صَدَّ يَصُدُّ",
            "مَسَّ يَمَسُّ",
            "لَذَّ يَلَذُّ"
          ],
          "correct": 0
        },
        {
          "title": "to tighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَدَّ يَشُدُّ mean?",
          "options": [
            "to tighten",
            "to turn away",
            "to touch, feel",
            "to enjoy"
          ],
          "correct": 0
        },
        {
          "title": "to tighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَدَّ يَشُدُّ?",
          "options": [
            "شَدًّا",
            "صَدًّا",
            "مَسًّا",
            "لَذَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to turn away",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to turn away\"?",
          "options": [
            "صَدَّ يَصُدُّ",
            "مَسَّ يَمَسُّ",
            "لَذَّ يَلَذُّ",
            "بَرَّ يَبَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to turn away",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدَّ يَصُدُّ mean?",
          "options": [
            "to turn away",
            "to touch, feel",
            "to enjoy",
            "to be reverent"
          ],
          "correct": 0
        },
        {
          "title": "to turn away (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَدَّ يَصُدُّ?",
          "options": [
            "صَدًّا",
            "مَسًّا",
            "لَذَّةً",
            "بِرًّا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "الْمَزِيْدُ فِيْهِ الْأَوَّلُ",
      "subtitle": "الْمُضَاعَفُ from أَبْوَاب تَفْعِيْل، مُفَاعَلَة، إِفْعَال، تَفَعُّل، تَفَاعُل (II–VI)",
      "concepts": [
        {
          "heading": "Part 4: الْمُضَاعَفُ مِنْ بَاب تَفْعِيْل (II)",
          "lines": [
            {
              "html": "The example verb is <bdi>حَبَّبَ يُحَبِّبُ تَحْبِيْبًا</bdi> (root <bdi>ح ب ب</bdi>): to cause to love. In <bdi>بَاب تَفْعِيْل</bdi> no <bdi>إِدْغَامٌ</bdi> of the repeated root letters takes place — the <bdi>مُضَاعَفٌ</bdi> conjugates exactly like a regular <bdi>صَحِيْحٌ</bdi> verb of this <bdi>بَابٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — حَبَّبَ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "حَبَّبَ",
                    "يُحَبِّبُ",
                    "تَحْبِيْبًا",
                    "حُبِّبَ",
                    "يُحَبَّبُ",
                    "تَحْبِيْبًا",
                    "حَبِّبْ",
                    "لَا تُحَبِّبْ",
                    "مُحَبِّبٌ",
                    "مُحَبَّبٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — حَبَّبَ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "حَبَّبَ",
                    "يُحَبِّبُ",
                    "حُبِّبَ",
                    "يُحَبَّبُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "حَبَّبَا",
                    "يُحَبِّبَانِ",
                    "حُبِّبَا",
                    "يُحَبَّبَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "حَبَّبُوْا",
                    "يُحَبِّبُوْنَ",
                    "حُبِّبُوْا",
                    "يُحَبَّبُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "حَبَّبَتْ",
                    "تُحَبِّبُ",
                    "حُبِّبَتْ",
                    "تُحَبَّبُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "حَبَّبَتَا",
                    "تُحَبِّبَانِ",
                    "حُبِّبَتَا",
                    "تُحَبَّبَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "حَبَّبْنَ",
                    "يُحَبِّبْنَ",
                    "حُبِّبْنَ",
                    "يُحَبَّبْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "حَبَّبْتَ",
                    "تُحَبِّبُ",
                    "حُبِّبْتَ",
                    "تُحَبَّبُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "حَبَّبْتُمَا",
                    "تُحَبِّبَانِ",
                    "حُبِّبْتُمَا",
                    "تُحَبَّبَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "حَبَّبْتُمْ",
                    "تُحَبِّبُوْنَ",
                    "حُبِّبْتُمْ",
                    "تُحَبَّبُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "حَبَّبْتِ",
                    "تُحَبِّبِيْنَ",
                    "حُبِّبْتِ",
                    "تُحَبَّبِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "حَبَّبْتُمَا",
                    "تُحَبِّبَانِ",
                    "حُبِّبْتُمَا",
                    "تُحَبَّبَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "حَبَّبْتُنَّ",
                    "تُحَبِّبْنَ",
                    "حُبِّبْتُنَّ",
                    "تُحَبَّبْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "حَبَّبْتُ",
                    "أُحَبِّبُ",
                    "حُبِّبْتُ",
                    "أُحَبَّبُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "حَبَّبْنَا",
                    "نُحَبِّبُ",
                    "حُبِّبْنَا",
                    "نُحَبَّبُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — حَبَّبَ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "حَبِّبْ",
                    "لَا تُحَبِّبْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "حَبِّبَا",
                    "لَا تُحَبِّبَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "حَبِّبُوْا",
                    "لَا تُحَبِّبُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "حَبِّبِيْ",
                    "لَا تُحَبِّبِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "حَبِّبَا",
                    "لَا تُحَبِّبَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "حَبِّبْنَ",
                    "لَا تُحَبِّبْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — حَبَّبَ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُحَبِّبٌ",
                    "مُحَبَّبٌ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُحَبِّبَانِ",
                    "مُحَبَّبَانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُحَبِّبُوْنَ",
                    "مُحَبَّبُوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُحَبِّبَةٌ",
                    "مُحَبَّبَةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُحَبِّبَتَانِ",
                    "مُحَبَّبَتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُحَبِّبَاتٌ",
                    "مُحَبَّبَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The اِسْمُ الْمَفْعُوْلِ of حَبَّبَ (II) is…",
            "kind": "mcq",
            "options": ["مُحَبَّبٌ", "مُحَبِّبٌ", "مُحَبٌّ", "مَحْبُوْبٌ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 5: الْمُضَاعَفُ مِنْ بَاب مُفَاعَلَة (III)",
          "lines": [
            {
              "html": "The example verb is <bdi>شَاقَّ يُشَاقُّ مُشَاقَّةً</bdi> (root <bdi>ش ق ق</bdi>): to act adversely. <bdi>إِدْغَامٌ</bdi> takes place as in the <bdi>مُجَرَّدٌ</bdi>. Note two special points: the <bdi>الْمَاضِيْ الْمَجْهُوْلُ</bdi> is <bdi>شُوْقَّ</bdi> (the <bdi>ا</bdi> of the <bdi>بَابٌ</bdi> becomes <bdi>و</bdi> after the <bdi>ضَمَّةٌ</bdi>), and <bdi>اِسْمُ الْفَاعِلِ</bdi> and <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> share the same form, <bdi>مُشَاقٌّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — شَاقَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "شَاقَّ",
                    "يُشَاقُّ",
                    "مُشَاقَّةً",
                    "شُوْقَّ",
                    "يُشَاقُّ",
                    "مُشَاقَّةً",
                    "شَاقَّ",
                    "لَا تُشَاقَّ",
                    "مُشَاقٌّ",
                    "مُشَاقٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — شَاقَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "شَاقَّ",
                    "يُشَاقُّ",
                    "شُوْقَّ",
                    "يُشَاقُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "شَاقَّا",
                    "يُشَاقَّانِ",
                    "شُوْقَّا",
                    "يُشَاقَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "شَاقُّوْا",
                    "يُشَاقُّوْنَ",
                    "شُوْقُّوْا",
                    "يُشَاقُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "شَاقَّتْ",
                    "تُشَاقُّ",
                    "شُوْقَّتْ",
                    "تُشَاقُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "شَاقَّتَا",
                    "تُشَاقَّانِ",
                    "شُوْقَّتَا",
                    "تُشَاقَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "شَاقَقْنَ",
                    "يُشَاقِقْنَ",
                    "شُوْقِقْنَ",
                    "يُشَاقَقْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "شَاقَقْتَ",
                    "تُشَاقُّ",
                    "شُوْقِقْتَ",
                    "تُشَاقُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "شَاقَقْتُمَا",
                    "تُشَاقَّانِ",
                    "شُوْقِقْتُمَا",
                    "تُشَاقَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "شَاقَقْتُمْ",
                    "تُشَاقُّوْنَ",
                    "شُوْقِقْتُمْ",
                    "تُشَاقُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "شَاقَقْتِ",
                    "تُشَاقِّيْنَ",
                    "شُوْقِقْتِ",
                    "تُشَاقِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "شَاقَقْتُمَا",
                    "تُشَاقَّانِ",
                    "شُوْقِقْتُمَا",
                    "تُشَاقَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "شَاقَقْتُنَّ",
                    "تُشَاقِقْنَ",
                    "شُوْقِقْتُنَّ",
                    "تُشَاقَقْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "شَاقَقْتُ",
                    "أُشَاقُّ",
                    "شُوْقِقْتُ",
                    "أُشَاقُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "شَاقَقْنَا",
                    "نُشَاقُّ",
                    "شُوْقِقْنَا",
                    "نُشَاقُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — شَاقَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "شَاقَّ",
                    "لَا تُشَاقَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "شَاقَّا",
                    "لَا تُشَاقَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "شَاقُّوْا",
                    "لَا تُشَاقُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "شَاقِّيْ",
                    "لَا تُشَاقِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "شَاقَّا",
                    "لَا تُشَاقَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "شَاقِقْنَ",
                    "لَا تُشَاقِقْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — شَاقَّ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُشَاقٌّ",
                    "مُشَاقٌّ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُشَاقَّانِ",
                    "مُشَاقَّانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُشَاقُّوْنَ",
                    "مُشَاقُّوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُشَاقَّةٌ",
                    "مُشَاقَّةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُشَاقَّتَانِ",
                    "مُشَاقَّتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُشَاقَّاتٌ",
                    "مُشَاقَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The الْمَاضِيْ الْمَجْهُوْلُ of شَاقَّ (III) is…",
            "kind": "mcq",
            "options": ["شُوْقَّ", "شُقَّ", "شُاقَّ", "شُقِقَ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 6: الْمُضَاعَفُ مِنْ بَاب إِفْعَال (IV)",
          "lines": [
            {
              "html": "The example verb is <bdi>أَحَبَّ يُحِبُّ إِحْبَابًا</bdi> (root <bdi>ح ب ب</bdi>): to love. <bdi>إِدْغَامٌ</bdi> takes place after <bdi>نَقْلٌ</bdi>, e.g. <bdi>يُحْبِبُ</bdi> ← <bdi>يُحِبُّ</bdi>. <bdi>اِسْمُ الْفَاعِلِ</bdi> is <bdi>مُحِبٌّ</bdi> and <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> is <bdi>مُحَبٌّ</bdi> — distinguished only by the <bdi>كَسْرَةٌ</bdi> / <bdi>فَتْحَةٌ</bdi> before the <bdi>شَدَّةٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — أَحَبَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "أَحَبَّ",
                    "يُحِبُّ",
                    "إِحْبَابًا",
                    "أُحِبَّ",
                    "يُحَبُّ",
                    "إِحْبَابًا",
                    "أَحِبَّ",
                    "لَا تُحِبَّ",
                    "مُحِبٌّ",
                    "مُحَبٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — أَحَبَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "أَحَبَّ",
                    "يُحِبُّ",
                    "أُحِبَّ",
                    "يُحَبُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "أَحَبَّا",
                    "يُحِبَّانِ",
                    "أُحِبَّا",
                    "يُحَبَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "أَحَبُّوْا",
                    "يُحِبُّوْنَ",
                    "أُحِبُّوْا",
                    "يُحَبُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "أَحَبَّتْ",
                    "تُحِبُّ",
                    "أُحِبَّتْ",
                    "تُحَبُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "أَحَبَّتَا",
                    "تُحِبَّانِ",
                    "أُحِبَّتَا",
                    "تُحَبَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "أَحْبَبْنَ",
                    "يُحْبِبْنَ",
                    "أُحْبِبْنَ",
                    "يُحْبَبْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "أَحْبَبْتَ",
                    "تُحِبُّ",
                    "أُحْبِبْتَ",
                    "تُحَبُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَحْبَبْتُمَا",
                    "تُحِبَّانِ",
                    "أُحْبِبْتُمَا",
                    "تُحَبَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَحْبَبْتُمْ",
                    "تُحِبُّوْنَ",
                    "أُحْبِبْتُمْ",
                    "تُحَبُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَحْبَبْتِ",
                    "تُحِبِّيْنَ",
                    "أُحْبِبْتِ",
                    "تُحَبِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَحْبَبْتُمَا",
                    "تُحِبَّانِ",
                    "أُحْبِبْتُمَا",
                    "تُحَبَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَحْبَبْتُنَّ",
                    "تُحْبِبْنَ",
                    "أُحْبِبْتُنَّ",
                    "تُحْبَبْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَحْبَبْتُ",
                    "أُحِبُّ",
                    "أُحْبِبْتُ",
                    "أُحَبُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "أَحْبَبْنَا",
                    "نُحِبُّ",
                    "أُحْبِبْنَا",
                    "نُحَبُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — أَحَبَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "أَحِبَّ",
                    "لَا تُحِبَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "أَحِبَّا",
                    "لَا تُحِبَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "أَحِبُّوْا",
                    "لَا تُحِبُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "أَحِبِّيْ",
                    "لَا تُحِبِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "أَحِبَّا",
                    "لَا تُحِبَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "أَحْبِبْنَ",
                    "لَا تُحْبِبْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — أَحَبَّ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُحِبٌّ",
                    "مُحَبٌّ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُحِبَّانِ",
                    "مُحَبَّانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُحِبُّوْنَ",
                    "مُحَبُّوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُحِبَّةٌ",
                    "مُحَبَّةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُحِبَّتَانِ",
                    "مُحَبَّتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُحِبَّاتٌ",
                    "مُحَبَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How are اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of أَحَبَّ distinguished?",
            "kind": "mcq",
            "options": ["مُحِبٌّ (كَسْرَةٌ) is الْفَاعِلُ and مُحَبٌّ (فَتْحَةٌ) is الْمَفْعُوْلُ", "They are identical in form", "الْمَفْعُوْلُ takes a و: مَحْبُوْبٌ", "الْفَاعِلُ has no شَدَّةٌ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 7: الْمُضَاعَفُ مِنْ بَاب تَفَعُّل (V)",
          "lines": [
            {
              "html": "The example verb is <bdi>تَحَقَّقَ يَتَحَقَّقُ تَحَقُّقًا</bdi> (root <bdi>ح ق ق</bdi>): to prove true. Like <bdi>بَاب تَفْعِيْل</bdi>, no <bdi>إِدْغَامٌ</bdi> of the repeated root letters takes place — the conjugation is fully regular.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَحَقَّقَ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَحَقَّقَ",
                    "يَتَحَقَّقُ",
                    "تَحَقُّقًا",
                    "تُحُقِّقَ",
                    "يُتَحَقَّقُ",
                    "تَحَقُّقًا",
                    "تَحَقَّقْ",
                    "لَا تَتَحَقَّقْ",
                    "مُتَحَقِّقٌ",
                    "مُتَحَقَّقٌ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَحَقَّقَ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَحَقَّقَ",
                    "يَتَحَقَّقُ",
                    "تُحُقِّقَ",
                    "يُتَحَقَّقُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَحَقَّقَا",
                    "يَتَحَقَّقَانِ",
                    "تُحُقِّقَا",
                    "يُتَحَقَّقَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَحَقَّقُوْا",
                    "يَتَحَقَّقُوْنَ",
                    "تُحُقِّقُوْا",
                    "يُتَحَقَّقُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَحَقَّقَتْ",
                    "تَتَحَقَّقُ",
                    "تُحُقِّقَتْ",
                    "تُتَحَقَّقُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَحَقَّقَتَا",
                    "تَتَحَقَّقَانِ",
                    "تُحُقِّقَتَا",
                    "تُتَحَقَّقَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَحَقَّقْنَ",
                    "يَتَحَقَّقْنَ",
                    "تُحُقِّقْنَ",
                    "يُتَحَقَّقْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَحَقَّقْتَ",
                    "تَتَحَقَّقُ",
                    "تُحُقِّقْتَ",
                    "تُتَحَقَّقُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَحَقَّقْتُمَا",
                    "تَتَحَقَّقَانِ",
                    "تُحُقِّقْتُمَا",
                    "تُتَحَقَّقَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَحَقَّقْتُمْ",
                    "تَتَحَقَّقُوْنَ",
                    "تُحُقِّقْتُمْ",
                    "تُتَحَقَّقُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَحَقَّقْتِ",
                    "تَتَحَقَّقِيْنَ",
                    "تُحُقِّقْتِ",
                    "تُتَحَقَّقِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَحَقَّقْتُمَا",
                    "تَتَحَقَّقَانِ",
                    "تُحُقِّقْتُمَا",
                    "تُتَحَقَّقَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَحَقَّقْتُنَّ",
                    "تَتَحَقَّقْنَ",
                    "تُحُقِّقْتُنَّ",
                    "تُتَحَقَّقْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَحَقَّقْتُ",
                    "أَتَحَقَّقُ",
                    "تُحُقِّقْتُ",
                    "أُتَحَقَّقُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَحَقَّقْنَا",
                    "نَتَحَقَّقُ",
                    "تُحُقِّقْنَا",
                    "نُتَحَقَّقُ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — تَحَقَّقَ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "تَحَقَّقْ",
                    "لَا تَتَحَقَّقْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَحَقَّقَا",
                    "لَا تَتَحَقَّقَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَحَقَّقُوْا",
                    "لَا تَتَحَقَّقُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَحَقَّقِيْ",
                    "لَا تَتَحَقَّقِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَحَقَّقَا",
                    "لَا تَتَحَقَّقَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَحَقَّقْنَ",
                    "لَا تَتَحَقَّقْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — تَحَقَّقَ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُتَحَقِّقٌ",
                    "مُتَحَقَّقٌ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُتَحَقِّقَانِ",
                    "مُتَحَقَّقَانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُتَحَقِّقُوْنَ",
                    "مُتَحَقَّقُوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُتَحَقِّقَةٌ",
                    "مُتَحَقَّقَةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُتَحَقِّقَتَانِ",
                    "مُتَحَقَّقَتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُتَحَقِّقَاتٌ",
                    "مُتَحَقَّقَاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "تَتَحَقَّقِيْنَ is…",
            "kind": "mcq",
            "options": ["الْمُخَاطَبَةُ of يَتَحَقَّقُ — you (f/s) prove true", "الْمُخَاطَبَاتُ — you (f/p) prove true", "الْغَائِبَةُ — she proves true", "الْمَاضِيْ of الْمُخَاطَبَةِ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 8: الْمُضَاعَفُ مِنْ بَاب تَفَاعُل (VI)",
          "lines": [
            {
              "html": "The example verb is <bdi>تَحَاجَّ يَتَحَاجُّ تَحَاجًّا</bdi> (root <bdi>ح ج ج</bdi>): to carry on a dispute. <bdi>إِدْغَامٌ</bdi> takes place as in <bdi>بَاب مُفَاعَلَة</bdi>; the <bdi>الْمَاضِيْ الْمَجْهُوْلُ</bdi> is <bdi>تُحُوْجَّ</bdi> (the <bdi>ا</bdi> becomes <bdi>و</bdi>), and <bdi>اِسْمُ الْفَاعِلِ</bdi> and <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> share the form <bdi>مُتَحَاجٌّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — تَحَاجَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "تَحَاجَّ",
                    "يَتَحَاجُّ",
                    "تَحَاجًّا",
                    "تُحُوْجَّ",
                    "يُتَحَاجُّ",
                    "تَحَاجًّا",
                    "تَحَاجَّ",
                    "لَا تَتَحَاجَّ",
                    "مُتَحَاجٌّ",
                    "مُتَحَاجٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — تَحَاجَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "تَحَاجَّ",
                    "يَتَحَاجُّ",
                    "تُحُوْجَّ",
                    "يُتَحَاجُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "تَحَاجَّا",
                    "يَتَحَاجَّانِ",
                    "تُحُوْجَّا",
                    "يُتَحَاجَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "تَحَاجُّوْا",
                    "يَتَحَاجُّوْنَ",
                    "تُحُوْجُّوْا",
                    "يُتَحَاجُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَحَاجَّتْ",
                    "تَتَحَاجُّ",
                    "تُحُوْجَّتْ",
                    "تُتَحَاجُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَحَاجَّتَا",
                    "تَتَحَاجَّانِ",
                    "تُحُوْجَّتَا",
                    "تُتَحَاجَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "تَحَاجَجْنَ",
                    "يَتَحَاجَجْنَ",
                    "تُحُوْجِجْنَ",
                    "يُتَحَاجَجْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَحَاجَجْتَ",
                    "تَتَحَاجُّ",
                    "تُحُوْجِجْتَ",
                    "تُتَحَاجُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَحَاجَجْتُمَا",
                    "تَتَحَاجَّانِ",
                    "تُحُوْجِجْتُمَا",
                    "تُتَحَاجَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَحَاجَجْتُمْ",
                    "تَتَحَاجُّوْنَ",
                    "تُحُوْجِجْتُمْ",
                    "تُتَحَاجُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَحَاجَجْتِ",
                    "تَتَحَاجِّيْنَ",
                    "تُحُوْجِجْتِ",
                    "تُتَحَاجِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَحَاجَجْتُمَا",
                    "تَتَحَاجَّانِ",
                    "تُحُوْجِجْتُمَا",
                    "تُتَحَاجَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَحَاجَجْتُنَّ",
                    "تَتَحَاجَجْنَ",
                    "تُحُوْجِجْتُنَّ",
                    "تُتَحَاجَجْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "تَحَاجَجْتُ",
                    "أَتَحَاجُّ",
                    "تُحُوْجِجْتُ",
                    "أُتَحَاجُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "تَحَاجَجْنَا",
                    "نَتَحَاجُّ",
                    "تُحُوْجِجْنَا",
                    "نُتَحَاجُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — تَحَاجَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "تَحَاجَّ",
                    "لَا تَتَحَاجَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَحَاجَّا",
                    "لَا تَتَحَاجَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَحَاجُّوْا",
                    "لَا تَتَحَاجُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَحَاجِّيْ",
                    "لَا تَتَحَاجِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَحَاجَّا",
                    "لَا تَتَحَاجَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَحَاجَجْنَ",
                    "لَا تَتَحَاجَجْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — تَحَاجَّ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُتَحَاجٌّ",
                    "مُتَحَاجٌّ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُتَحَاجَّانِ",
                    "مُتَحَاجَّانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُتَحَاجُّوْنَ",
                    "مُتَحَاجُّوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُتَحَاجَّةٌ",
                    "مُتَحَاجَّةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُتَحَاجَّتَانِ",
                    "مُتَحَاجَّتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُتَحَاجَّاتٌ",
                    "مُتَحَاجَّاتٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The الْمَاضِيْ الْمَجْهُوْلُ of تَحَاجَّ (VI) is…",
            "kind": "mcq",
            "options": ["تُحُوْجَّ", "تُحِجَّ", "تَحُوْجِجَ", "حُوْجَّ"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 4–8: الْمُضَاعَفُ from Abwāb II–VI",
        "rows": [
          {
            "label": "No إِدْغَامٌ — conjugates like a regular صَحِيْحٌ verb",
            "arabic": "حَبَّبَ يُحَبِّبُ تَحْبِيْبًا (II)",
            "meaning": "No إِدْغَامٌ — conjugates like a regular صَحِيْحٌ verb",
            "unlockAt": 0
          },
          {
            "label": "إِدْغَامٌ; passive شُوْقَّ; فَاعِلٌ = مَفْعُوْلٌ = مُشَاقٌّ",
            "arabic": "شَاقَّ يُشَاقُّ مُشَاقَّةً (III)",
            "meaning": "إِدْغَامٌ; passive شُوْقَّ; فَاعِلٌ = مَفْعُوْلٌ = مُشَاقٌّ",
            "unlockAt": 1
          },
          {
            "label": "إِدْغَامٌ; فَاعِلٌ مُحِبٌّ vs مَفْعُوْلٌ مُحَبٌّ",
            "arabic": "أَحَبَّ يُحِبُّ إِحْبَابًا (IV)",
            "meaning": "إِدْغَامٌ; فَاعِلٌ مُحِبٌّ vs مَفْعُوْلٌ مُحَبٌّ",
            "unlockAt": 3
          },
          {
            "label": "No إِدْغَامٌ — fully regular; passive تُحُقِّقَ",
            "arabic": "تَحَقَّقَ يَتَحَقَّقُ تَحَقُّقًا (V)",
            "meaning": "No إِدْغَامٌ — fully regular; passive تُحُقِّقَ",
            "unlockAt": 4
          },
          {
            "label": "إِدْغَامٌ; passive تُحُوْجَّ; فَاعِلٌ = مَفْعُوْلٌ = مُتَحَاجٌّ",
            "arabic": "تَحَاجَّ يَتَحَاجُّ تَحَاجًّا (VI)",
            "meaning": "إِدْغَامٌ; passive تُحُوْجَّ; فَاعِلٌ = مَفْعُوْلٌ = مُتَحَاجٌّ",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "In which two of these أَبْوَابٌ does the مُضَاعَفٌ conjugate with NO إِدْغَامٌ at all?",
          "options": [
            "بَاب تَفْعِيْل (II) and بَاب تَفَعُّل (V)",
            "بَاب مُفَاعَلَة (III) and بَاب تَفَاعُل (VI)",
            "بَاب إِفْعَال (IV) and بَاب تَفْعِيْل (II)",
            "بَاب إِفْعَال (IV) and بَاب تَفَعُّل (V)"
          ],
          "correct": 0,
          "explanation": "حَبَّبَ (II) and تَحَقَّقَ (V) conjugate like regular صَحِيْحٌ verbs; the شَدَّةٌ in them is the بَابٌ's own doubling of the عَيْن, not إِدْغَامٌ of the root letters."
        },
        {
          "q": "The الْمَاضِيْ الْمَجْهُوْلُ of شَاقَّ (III) is…",
          "options": [
            "شُوْقَّ",
            "شُقَّ",
            "شُاقَّ",
            "شُقِقَ"
          ],
          "correct": 0,
          "explanation": "In the passive of بَاب مُفَاعَلَة the ا changes to و after the ضَمَّةٌ: شُوْقَّ."
        },
        {
          "q": "The الْمُضَارِعُ الْمَعْلُوْمُ of أَحَبَّ (IV) is…",
          "options": [
            "يُحِبُّ",
            "يُحَبُّ",
            "يَحْبَبُ",
            "يُحَبِّبُ"
          ],
          "correct": 0,
          "explanation": "يُحْبِبُ undergoes نَقْلٌ then إِدْغَامٌ: يُحِبُّ. يُحَبُّ is the passive, and يُحَبِّبُ belongs to بَاب تَفْعِيْل."
        },
        {
          "q": "How are اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of أَحَبَّ distinguished?",
          "options": [
            "مُحِبٌّ (كَسْرَةٌ) is الْفَاعِلُ and مُحَبٌّ (فَتْحَةٌ) is الْمَفْعُوْلُ",
            "They are identical in form",
            "الْمَفْعُوْلُ takes a و: مَحْبُوْبٌ",
            "الْفَاعِلُ has no شَدَّةٌ"
          ],
          "correct": 0,
          "explanation": "After إِدْغَامٌ only the harakah before the شَدَّةٌ differs: مُحِبٌّ (one who loves) vs مُحَبٌّ (one who is loved)."
        },
        {
          "q": "In بَاب مُفَاعَلَة and بَاب تَفَاعُل, what is special about اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of the مُضَاعَفٌ?",
          "options": [
            "They share exactly the same form (مُشَاقٌّ، مُتَحَاجٌّ)",
            "Neither of them exists",
            "Only اِسْمُ الْفَاعِلِ undergoes إِدْغَامٌ",
            "They take the scale مَفْعُوْلٌ"
          ],
          "correct": 0,
          "explanation": "The كَسْرَةٌ of the فَاعِلٌ and the فَتْحَةٌ of the مَفْعُوْلُ both disappear into the إِدْغَامٌ, leaving one shared form: مُشَاقٌّ and مُتَحَاجٌّ."
        },
        {
          "q": "The الْمَاضِيْ الْمَجْهُوْلُ of تَحَاجَّ (VI) is…",
          "options": [
            "تُحُوْجَّ",
            "تُحِجَّ",
            "تَحُوْجِجَ",
            "حُوْجَّ"
          ],
          "correct": 0,
          "explanation": "On the pattern of تُفُوْعِلَ with إِدْغَامٌ: تُحُوْجَّ — the ا of the بَابٌ becomes و."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "أَحْبَبْنَ means…",
          "options": [
            "They (f/p) loved",
            "We loved",
            "You (f/p) loved",
            "They (f/d) loved"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of أَحَبَّ; from الْغَائِبَاتُ onwards the مَاضِيْ does not merge: أَحْبَبْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which is the الْأَمْرُ of أَحَبَّ for one male?",
          "options": [
            "أَحِبَّ",
            "حَبِّبْ",
            "تَحَبَّبْ",
            "اِسْتَحِبَّ"
          ],
          "correct": 0,
          "explanation": "بَاب إِفْعَال gives أَحِبَّ (also أَحِبِّ and أَحْبِبْ). حَبِّبْ is from بَاب تَفْعِيْل."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تُشَاقِقْنَ is…",
          "options": [
            "الْمُخَاطَبَاتُ of the مُضَارِع of شَاقَّ — you (f/p) act adversely (no إِدْغَامٌ)",
            "الْمُخَاطَبَةُ — you (f/s) act adversely",
            "الْغَائِبَاتُ — they (f/p) act adversely",
            "الْمَاضِيْ الْمَجْهُوْلُ of شَاقَّ"
          ],
          "correct": 0,
          "explanation": "The prefix تُـ with the ending قْنَ and separated قs marks الْمُخَاطَبَاتُ; الْغَائِبَاتُ would be يُشَاقِقْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The اِسْمُ الْمَفْعُوْلِ of حَبَّبَ (II) is…",
          "options": [
            "مُحَبَّبٌ",
            "مُحَبِّبٌ",
            "مُحَبٌّ",
            "مَحْبُوْبٌ"
          ],
          "correct": 0,
          "explanation": "Form II gives مُحَبَّبٌ (فَتْحَةٌ on the عَيْن). مُحَبِّبٌ is its اِسْمُ الْفَاعِلِ; مُحَبٌّ is the اِسْمُ الْمَفْعُوْلِ of أَحَبَّ (IV)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Do not love! (you m/p)' from أَحَبَّ is…",
          "options": [
            "لَا تُحِبُّوْا",
            "لَا تُحِبَّ",
            "لَا تُحْبِبْنَ",
            "لَا تُحَبِّبُوْا"
          ],
          "correct": 0,
          "explanation": "النَّهْيُ of الْمُخَاطَبُوْنَ: لَا تُحِبُّوْا. لَا تُحْبِبْنَ is (f/p) and لَا تُحَبِّبُوْا is from بَاب تَفْعِيْل."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَتَحَقَّقِيْنَ is…",
          "options": [
            "الْمُخَاطَبَةُ of يَتَحَقَّقُ — you (f/s) prove true",
            "الْمُخَاطَبَاتُ — you (f/p) prove true",
            "الْغَائِبَةُ — she proves true",
            "الْمَاضِيْ of الْمُخَاطَبَةِ"
          ],
          "correct": 0,
          "explanation": "The ending ِيْنَ marks الْمُخَاطَبَةُ. الْمُخَاطَبَاتُ would be تَتَحَقَّقْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which verb means 'to love one another'?",
          "options": [
            "تَحَابَّ",
            "أَحَبَّ",
            "حَبَّبَ",
            "تَحَبَّبَ"
          ],
          "correct": 0,
          "explanation": "تَحَابَّ يَتَحَابُّ تَحَابًّا (VI) = to love one another. أَحَبَّ = to love, حَبَّبَ = to cause to love, تَحَبَّبَ = to show love."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The مَصْدَرٌ of شَاقَّ is…",
          "options": [
            "مُشَاقَّةً",
            "شِقَاقًا فقط",
            "تَشَاقًّا",
            "إِشْقَاقًا"
          ],
          "correct": 0,
          "explanation": "بَاب مُفَاعَلَة gives the مَصْدَرٌ on the scale مُفَاعَلَةٌ: مُشَاقَّةً (to act adversely)."
        },
        {
          "title": "to glorify",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to glorify\"?",
          "options": [
            "هَلَّلَ يُهَلِّلُ",
            "هَدَّدَ يُهَدِّدُ",
            "حَبَّبَ يُحَبِّبُ",
            "خَفَّفَ يُخَفِّفُ"
          ],
          "correct": 0
        },
        {
          "title": "to glorify",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَلَّلَ يُهَلِّلُ mean?",
          "options": [
            "to glorify",
            "to threaten",
            "to cause to love",
            "to make lighter"
          ],
          "correct": 0
        },
        {
          "title": "to glorify (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَلَّلَ يُهَلِّلُ?",
          "options": [
            "تَهْلِيْلًا",
            "تَهْدِيْدًا",
            "تَحْبِيْبًا",
            "تَخْفِيْفًا"
          ],
          "correct": 0
        },
        {
          "title": "to threaten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to threaten\"?",
          "options": [
            "هَدَّدَ يُهَدِّدُ",
            "حَبَّبَ يُحَبِّبُ",
            "خَفَّفَ يُخَفِّفُ",
            "حَاجَّ يُحَاجُّ"
          ],
          "correct": 0
        },
        {
          "title": "to threaten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَدَّدَ يُهَدِّدُ mean?",
          "options": [
            "to threaten",
            "to cause to love",
            "to make lighter",
            "to argue"
          ],
          "correct": 0
        },
        {
          "title": "to threaten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَدَّدَ يُهَدِّدُ?",
          "options": [
            "تَهْدِيْدًا",
            "تَحْبِيْبًا",
            "تَخْفِيْفًا",
            "مُحَاجَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to cause to love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cause to love\"?",
          "options": [
            "حَبَّبَ يُحَبِّبُ",
            "خَفَّفَ يُخَفِّفُ",
            "حَاجَّ يُحَاجُّ",
            "شَاقَّ يُشَاقُّ"
          ],
          "correct": 0
        },
        {
          "title": "to cause to love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَبَّبَ يُحَبِّبُ mean?",
          "options": [
            "to cause to love",
            "to make lighter",
            "to argue",
            "to act adversely"
          ],
          "correct": 0
        },
        {
          "title": "to cause to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَبَّبَ يُحَبِّبُ?",
          "options": [
            "تَحْبِيْبًا",
            "تَخْفِيْفًا",
            "مُحَاجَّةً",
            "مُشَاقَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to make lighter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make lighter\"?",
          "options": [
            "خَفَّفَ يُخَفِّفُ",
            "حَاجَّ يُحَاجُّ",
            "شَاقَّ يُشَاقُّ",
            "أَضَلَّ يُضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to make lighter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَفَّفَ يُخَفِّفُ mean?",
          "options": [
            "to make lighter",
            "to argue",
            "to act adversely",
            "to misguide"
          ],
          "correct": 0
        },
        {
          "title": "to make lighter (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَفَّفَ يُخَفِّفُ?",
          "options": [
            "تَخْفِيْفًا",
            "مُحَاجَّةً",
            "مُشَاقَّةً",
            "إِضْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to argue",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to argue\"?",
          "options": [
            "حَاجَّ يُحَاجُّ",
            "شَاقَّ يُشَاقُّ",
            "أَضَلَّ يُضِلُّ",
            "أَعَدَّ يُعِدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to argue",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاجَّ يُحَاجُّ mean?",
          "options": [
            "to argue",
            "to act adversely",
            "to misguide",
            "to prepare"
          ],
          "correct": 0
        },
        {
          "title": "to argue (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَاجَّ يُحَاجُّ?",
          "options": [
            "مُحَاجَّةً",
            "مُشَاقَّةً",
            "إِضْلَالًا",
            "إِعْدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to act adversely",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to act adversely\"?",
          "options": [
            "شَاقَّ يُشَاقُّ",
            "أَضَلَّ يُضِلُّ",
            "أَعَدَّ يُعِدُّ",
            "أَحَبَّ يُحِبُّ"
          ],
          "correct": 0
        },
        {
          "title": "to act adversely",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاقَّ يُشَاقُّ mean?",
          "options": [
            "to act adversely",
            "to misguide",
            "to prepare",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "to act adversely (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَاقَّ يُشَاقُّ?",
          "options": [
            "مُشَاقَّةً",
            "إِضْلَالًا",
            "إِعْدَادًا",
            "إِحْبَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to misguide",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to misguide\"?",
          "options": [
            "أَضَلَّ يُضِلُّ",
            "أَعَدَّ يُعِدُّ",
            "أَحَبَّ يُحِبُّ",
            "أَسَرَّ يُسِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to misguide",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَضَلَّ يُضِلُّ mean?",
          "options": [
            "to misguide",
            "to prepare",
            "to love",
            "to conceal"
          ],
          "correct": 0
        },
        {
          "title": "to misguide (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَضَلَّ يُضِلُّ?",
          "options": [
            "إِضْلَالًا",
            "إِعْدَادًا",
            "إِحْبَابًا",
            "إِسْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to prepare",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prepare\"?",
          "options": [
            "أَعَدَّ يُعِدُّ",
            "أَحَبَّ يُحِبُّ",
            "أَسَرَّ يُسِرُّ",
            "تَشَتَّتَ يَتَشَتَّتُ"
          ],
          "correct": 0
        },
        {
          "title": "to prepare",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعَدَّ يُعِدُّ mean?",
          "options": [
            "to prepare",
            "to love",
            "to conceal",
            "to be scattered"
          ],
          "correct": 0
        },
        {
          "title": "to prepare (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَعَدَّ يُعِدُّ?",
          "options": [
            "إِعْدَادًا",
            "إِحْبَابًا",
            "إِسْرَارًا",
            "تَشَتُّتًا"
          ],
          "correct": 0
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to love\"?",
          "options": [
            "أَحَبَّ يُحِبُّ",
            "أَسَرَّ يُسِرُّ",
            "تَشَتَّتَ يَتَشَتَّتُ",
            "تَحَبَّبَ يَتَحَبَّبُ"
          ],
          "correct": 0
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحَبَّ يُحِبُّ mean?",
          "options": [
            "to love",
            "to conceal",
            "to be scattered",
            "to show love"
          ],
          "correct": 0
        },
        {
          "title": "to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحَبَّ يُحِبُّ?",
          "options": [
            "إِحْبَابًا",
            "إِسْرَارًا",
            "تَشَتُّتًا",
            "تَحَبُّبًا"
          ],
          "correct": 0
        },
        {
          "title": "to conceal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to conceal\"?",
          "options": [
            "أَسَرَّ يُسِرُّ",
            "تَشَتَّتَ يَتَشَتَّتُ",
            "تَحَبَّبَ يَتَحَبَّبُ",
            "تَحَقَّقَ يَتَحَقَّقُ"
          ],
          "correct": 0
        },
        {
          "title": "to conceal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسَرَّ يُسِرُّ mean?",
          "options": [
            "to conceal",
            "to be scattered",
            "to show love",
            "to prove true"
          ],
          "correct": 0
        },
        {
          "title": "to conceal (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسَرَّ يُسِرُّ?",
          "options": [
            "إِسْرَارًا",
            "تَشَتُّتًا",
            "تَحَبُّبًا",
            "تَحَقُّقًا"
          ],
          "correct": 0
        },
        {
          "title": "to be scattered",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be scattered\"?",
          "options": [
            "تَشَتَّتَ يَتَشَتَّتُ",
            "تَحَبَّبَ يَتَحَبَّبُ",
            "تَحَقَّقَ يَتَحَقَّقُ",
            "تَكَرَّرَ يَتَكَرَّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be scattered",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَشَتَّتَ يَتَشَتَّتُ mean?",
          "options": [
            "to be scattered",
            "to show love",
            "to prove true",
            "to be repeated"
          ],
          "correct": 0
        },
        {
          "title": "to be scattered (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَشَتَّتَ يَتَشَتَّتُ?",
          "options": [
            "تَشَتُّتًا",
            "تَحَبُّبًا",
            "تَحَقُّقًا",
            "تَكَرُّرًا"
          ],
          "correct": 0
        },
        {
          "title": "to show love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to show love\"?",
          "options": [
            "تَحَبَّبَ يَتَحَبَّبُ",
            "تَحَقَّقَ يَتَحَقَّقُ",
            "تَكَرَّرَ يَتَكَرَّرُ",
            "تَسَارَّ يَتَسَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to show love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَبَّبَ يَتَحَبَّبُ mean?",
          "options": [
            "to show love",
            "to prove true",
            "to be repeated",
            "to exchange secrets"
          ],
          "correct": 0
        },
        {
          "title": "to show love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَبَّبَ يَتَحَبَّبُ?",
          "options": [
            "تَحَبُّبًا",
            "تَحَقُّقًا",
            "تَكَرُّرًا",
            "تَسَارًّا"
          ],
          "correct": 0
        },
        {
          "title": "to prove true",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prove true\"?",
          "options": [
            "تَحَقَّقَ يَتَحَقَّقُ",
            "تَكَرَّرَ يَتَكَرَّرُ",
            "تَسَارَّ يَتَسَارُّ",
            "تَعَارَّ يَتَعَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to prove true",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَقَّقَ يَتَحَقَّقُ mean?",
          "options": [
            "to prove true",
            "to be repeated",
            "to exchange secrets",
            "to stay awake at night"
          ],
          "correct": 0
        },
        {
          "title": "to prove true (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَقَّقَ يَتَحَقَّقُ?",
          "options": [
            "تَحَقُّقًا",
            "تَكَرُّرًا",
            "تَسَارًّا",
            "تَعَارًّا"
          ],
          "correct": 0
        },
        {
          "title": "to be repeated",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be repeated\"?",
          "options": [
            "تَكَرَّرَ يَتَكَرَّرُ",
            "تَسَارَّ يَتَسَارُّ",
            "تَعَارَّ يَتَعَارُّ",
            "تَحَاجَّ يَتَحَاجُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be repeated",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَكَرَّرَ يَتَكَرَّرُ mean?",
          "options": [
            "to be repeated",
            "to exchange secrets",
            "to stay awake at night",
            "to carry on a dispute"
          ],
          "correct": 0
        },
        {
          "title": "to be repeated (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَكَرَّرَ يَتَكَرَّرُ?",
          "options": [
            "تَكَرُّرًا",
            "تَسَارًّا",
            "تَعَارًّا",
            "تَحَاجًّا"
          ],
          "correct": 0
        },
        {
          "title": "to exchange secrets",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to exchange secrets\"?",
          "options": [
            "تَسَارَّ يَتَسَارُّ",
            "تَعَارَّ يَتَعَارُّ",
            "تَحَاجَّ يَتَحَاجُّ",
            "تَحَابَّ يَتَحَابُّ"
          ],
          "correct": 0
        },
        {
          "title": "to exchange secrets",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَسَارَّ يَتَسَارُّ mean?",
          "options": [
            "to exchange secrets",
            "to stay awake at night",
            "to carry on a dispute",
            "to love one another"
          ],
          "correct": 0
        },
        {
          "title": "to exchange secrets (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَسَارَّ يَتَسَارُّ?",
          "options": [
            "تَسَارًّا",
            "تَعَارًّا",
            "تَحَاجًّا",
            "تَحَابًّا"
          ],
          "correct": 0
        },
        {
          "title": "to stay awake at night",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to stay awake at night\"?",
          "options": [
            "تَعَارَّ يَتَعَارُّ",
            "تَحَاجَّ يَتَحَاجُّ",
            "تَحَابَّ يَتَحَابُّ",
            "هَلَّلَ يُهَلِّلُ"
          ],
          "correct": 0
        },
        {
          "title": "to stay awake at night",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعَارَّ يَتَعَارُّ mean?",
          "options": [
            "to stay awake at night",
            "to carry on a dispute",
            "to love one another",
            "to glorify"
          ],
          "correct": 0
        },
        {
          "title": "to stay awake at night (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعَارَّ يَتَعَارُّ?",
          "options": [
            "تَعَارًّا",
            "تَحَاجًّا",
            "تَحَابًّا",
            "تَهْلِيْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a dispute",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to carry on a dispute\"?",
          "options": [
            "تَحَاجَّ يَتَحَاجُّ",
            "تَحَابَّ يَتَحَابُّ",
            "هَلَّلَ يُهَلِّلُ",
            "هَدَّدَ يُهَدِّدُ"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a dispute",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَاجَّ يَتَحَاجُّ mean?",
          "options": [
            "to carry on a dispute",
            "to love one another",
            "to glorify",
            "to threaten"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a dispute (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَاجَّ يَتَحَاجُّ?",
          "options": [
            "تَحَاجًّا",
            "تَحَابًّا",
            "تَهْلِيْلًا",
            "تَهْدِيْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to love one another",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to love one another\"?",
          "options": [
            "تَحَابَّ يَتَحَابُّ",
            "هَلَّلَ يُهَلِّلُ",
            "هَدَّدَ يُهَدِّدُ",
            "حَبَّبَ يُحَبِّبُ"
          ],
          "correct": 0
        },
        {
          "title": "to love one another",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَابَّ يَتَحَابُّ mean?",
          "options": [
            "to love one another",
            "to glorify",
            "to threaten",
            "to cause to love"
          ],
          "correct": 0
        },
        {
          "title": "to love one another (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَابَّ يَتَحَابُّ?",
          "options": [
            "تَحَابًّا",
            "تَهْلِيْلًا",
            "تَهْدِيْدًا",
            "تَحْبِيْبًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "الْمَزِيْدُ فِيْهِ الثَّانِيْ",
      "subtitle": "الْمُضَاعَفُ from أَبْوَاب اِنْفِعَال، اِفْتِعَال، اِفْعِلَال، اِسْتِفْعَال، اِفْعِيْلَال and the رُبَاعِيٌّ بَاب اِفْعِلَّال (VII–XI)",
      "concepts": [
        {
          "heading": "Part 9: الْمُضَاعَفُ مِنْ بَاب اِنْفِعَال (VII) — p. 251",
          "lines": [
            {
              "html": "The example verb is <bdi>اِنْشَقَّ يَنْشَقُّ اِنْشِقَاقًا</bdi> (root <bdi>ش ق ق</bdi>): to split. <bdi>إِدْغَامٌ</bdi> takes place exactly as in the <bdi>مُجَرَّدٌ</bdi>: the two <bdi>ق</bdi>'s merge whenever the second one carries a harakah, and they separate whenever it becomes sākin — i.e. in <bdi>الْغَائِبَاتُ، الْمُخَاطَبَاتُ</bdi> and all the <bdi>مَاضِيْ</bdi> forms from <bdi>الْغَائِبَاتُ</bdi> onwards.",
              "list": false
            },
            {
              "html": "<bdi>بَاب اِنْفِعَال</bdi> is always <bdi>لَازِمٌ</bdi> (intransitive). It therefore has NO <bdi>مَجْهُوْلٌ</bdi> and NO <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> — the book leaves those boxes empty (shown here as —).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِنْشَقَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِنْشَقَّ",
                    "يَنْشَقُّ",
                    "اِنْشِقَاقًا",
                    "—",
                    "—",
                    "—",
                    "اِنْشَقَّ",
                    "لَا تَنْشَقَّ",
                    "مُنْشَقٌّ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِنْشَقَّ (verb forms; مَجْهُوْلٌ not used)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِنْشَقَّ",
                    "يَنْشَقُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِنْشَقَّا",
                    "يَنْشَقَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِنْشَقُّوْا",
                    "يَنْشَقُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِنْشَقَّتْ",
                    "تَنْشَقُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِنْشَقَّتَا",
                    "تَنْشَقَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِنْشَقَقْنَ",
                    "يَنْشَقِقْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِنْشَقَقْتَ",
                    "تَنْشَقُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِنْشَقَقْتُمَا",
                    "تَنْشَقَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِنْشَقَقْتُمْ",
                    "تَنْشَقُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِنْشَقَقْتِ",
                    "تَنْشَقِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِنْشَقَقْتُمَا",
                    "تَنْشَقَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِنْشَقَقْتُنَّ",
                    "تَنْشَقِقْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِنْشَقَقْتُ",
                    "أَنْشَقُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِنْشَقَقْنَا",
                    "نَنْشَقُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — اِنْشَقَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِنْشَقَّ",
                    "لَا تَنْشَقَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِنْشَقَّا",
                    "لَا تَنْشَقَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِنْشَقُّوْا",
                    "لَا تَنْشَقُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِنْشَقِّيْ",
                    "لَا تَنْشَقِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِنْشَقَّا",
                    "لَا تَنْشَقَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِنْشَقِقْنَ",
                    "لَا تَنْشَقِقْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ — اِنْشَقَّ (no اِسْمُ الْمَفْعُوْلِ)",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُنْشَقٌّ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُنْشَقَّانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُنْشَقُّوْنَ",
                    "—"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُنْشَقَّةٌ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُنْشَقَّتَانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُنْشَقَّاتٌ",
                    "—"
                  ]
                ]
              }
            },
            {
              "html": "<bdi>اِنْسَلَّ يَنْسَلُّ اِنْسِلَالًا</bdi> — to sneak away",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِنْفَكَّ يَنْفَكُّ اِنْفِكَاكًا</bdi> — to unwind",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِنْقَضَّ يَنْقَضُّ اِنْقِضَاضًا</bdi> — to descend upon",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "اِنْشَقَقْتُنَّ is…",
            "kind": "mcq",
            "options": ["الْمَاضِيْ الْمَعْلُوْمُ، الْمُخَاطَبَاتُ of اِنْشَقَّ — you (f/p) split", "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبَاتُ of اِنْشَقَّ", "الْمَاضِيْ الْمَجْهُوْلُ، الْمُخَاطَبَاتُ of اِنْشَقَّ", "الْمُضَارِعُ الْمَعْلُوْمُ، الْمُخَاطَبَاتُ of اِنْشَقَّ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 10: الْمُضَاعَفُ مِنْ بَاب اِفْتِعَال (VIII) — p. 252",
          "lines": [
            {
              "html": "The example verb is <bdi>اِشْتَدَّ يَشْتَدُّ اِشْتِدَادًا</bdi> (root <bdi>ش د د</bdi>): to intensify. This is the only one of the six <bdi>أَبْوَابٌ</bdi> of this lesson that has a full <bdi>مَجْهُوْلٌ</bdi>. The passive <bdi>مَاضِيْ</bdi> is <bdi>اُشْتُدَّ</bdi>, and — as always in the <bdi>مُضَاعَفٌ</bdi> — the merger breaks apart in <bdi>الْغَائِبَاتُ</bdi> / <bdi>الْمُخَاطَبَاتُ</bdi> and in the <bdi>مَاضِيْ</bdi> from <bdi>الْغَائِبَاتُ</bdi> onwards (<bdi>اُشْتُدِدْنَ، اُشْتُدِدْتَ</bdi> …).",
              "list": false
            },
            {
              "html": "After <bdi>إِدْغَامٌ</bdi> the <bdi>اِسْمُ الْفَاعِلِ</bdi> and the <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> of <bdi>بَاب اِفْتِعَال</bdi> fall together in one shared form: <bdi>مُشْتَدٌّ</bdi> (the <bdi>كَسْرَةٌ</bdi> of <bdi>مُفْتَعِلٌ</bdi> and the <bdi>فَتْحَةٌ</bdi> of <bdi>مُفْتَعَلٌ</bdi> both vanish into the <bdi>شَدَّةٌ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِشْتَدَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِشْتَدَّ",
                    "يَشْتَدُّ",
                    "اِشْتِدَادًا",
                    "اُشْتُدَّ",
                    "يُشْتَدُّ",
                    "اِشْتِدَادًا",
                    "اِشْتَدَّ",
                    "لَا تَشْتَدَّ",
                    "مُشْتَدٌّ",
                    "مُشْتَدٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِشْتَدَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِشْتَدَّ",
                    "يَشْتَدُّ",
                    "اُشْتُدَّ",
                    "يُشْتَدُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِشْتَدَّا",
                    "يَشْتَدَّانِ",
                    "اُشْتُدَّا",
                    "يُشْتَدَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِشْتَدُّوْا",
                    "يَشْتَدُّوْنَ",
                    "اُشْتُدُّوْا",
                    "يُشْتَدُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِشْتَدَّتْ",
                    "تَشْتَدُّ",
                    "اُشْتُدَّتْ",
                    "تُشْتَدُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِشْتَدَّتَا",
                    "تَشْتَدَّانِ",
                    "اُشْتُدَّتَا",
                    "تُشْتَدَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِشْتَدَدْنَ",
                    "يَشْتَدِدْنَ",
                    "اُشْتُدِدْنَ",
                    "يُشْتَدَدْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِشْتَدَدْتَ",
                    "تَشْتَدُّ",
                    "اُشْتُدِدْتَ",
                    "تُشْتَدُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِشْتَدَدْتُمَا",
                    "تَشْتَدَّانِ",
                    "اُشْتُدِدْتُمَا",
                    "تُشْتَدَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِشْتَدَدْتُمْ",
                    "تَشْتَدُّوْنَ",
                    "اُشْتُدِدْتُمْ",
                    "تُشْتَدُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِشْتَدَدْتِ",
                    "تَشْتَدِّيْنَ",
                    "اُشْتُدِدْتِ",
                    "تُشْتَدِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِشْتَدَدْتُمَا",
                    "تَشْتَدَّانِ",
                    "اُشْتُدِدْتُمَا",
                    "تُشْتَدَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِشْتَدَدْتُنَّ",
                    "تَشْتَدِدْنَ",
                    "اُشْتُدِدْتُنَّ",
                    "تُشْتَدَدْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِشْتَدَدْتُ",
                    "أَشْتَدُّ",
                    "اُشْتُدِدْتُ",
                    "أُشْتَدُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِشْتَدَدْنَا",
                    "نَشْتَدُّ",
                    "اُشْتُدِدْنَا",
                    "نُشْتَدُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — اِشْتَدَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِشْتَدَّ",
                    "لَا تَشْتَدَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِشْتَدَّا",
                    "لَا تَشْتَدَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِشْتَدُّوْا",
                    "لَا تَشْتَدُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِشْتَدِّيْ",
                    "لَا تَشْتَدِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِشْتَدَّا",
                    "لَا تَشْتَدَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِشْتَدِدْنَ",
                    "لَا تَشْتَدِدْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — اِشْتَدَّ (identical)",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُشْتَدٌّ",
                    "مُشْتَدٌّ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُشْتَدَّانِ",
                    "مُشْتَدَّانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُشْتَدُّوْنَ",
                    "مُشْتَدُّوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُشْتَدَّةٌ",
                    "مُشْتَدَّةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُشْتَدَّتَانِ",
                    "مُشْتَدَّتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُشْتَدَّاتٌ",
                    "مُشْتَدَّاتٌ"
                  ]
                ]
              }
            },
            {
              "html": "<bdi>اِضْطَرَّ يَضْطَرُّ اِضْطِرَارًا</bdi> — to force",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِغْتَرَّ يَغْتَرُّ اِغْتِرَارًا</bdi> — to be deceived",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِهْتَمَّ يَهْتَمُّ اِهْتِمَامًا</bdi> — to worry about",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "In بَاب اِفْتِعَال, the اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of the مُضَاعَفٌ are…",
            "kind": "mcq",
            "options": ["Identical — both مُشْتَدٌّ", "مُشْتَدِدٌ and مُشْتَدَدٌ", "مُشْتَدٌّ and مَشْدُوْدٌ", "Non-existent, because the بَابٌ is لَازِمٌ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 11: الْمُضَاعَفُ مِنْ بَاب اِفْعِلَال (IX) — p. 253",
          "lines": [
            {
              "html": "The example verb is <bdi>اِحْمَرَّ يَحْمَرُّ اِحْمِرَارًا</bdi> (root <bdi>ح م ر</bdi>): to be red. <bdi>بَاب اِفْعِلَال</bdi> is used for colours and physical defects, and it is <bdi>لَازِمٌ</bdi> — so, like <bdi>بَاب اِنْفِعَال</bdi>, it has no <bdi>مَجْهُوْلٌ</bdi> and no <bdi>اِسْمُ الْمَفْعُوْلِ</bdi>. Its <bdi>اِسْمُ الْفَاعِلِ</bdi> is on the scale <bdi>مُفْعَلٌّ</bdi>: <bdi>مُحْمَرٌّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِحْمَرَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِحْمَرَّ",
                    "يَحْمَرُّ",
                    "اِحْمِرَارًا",
                    "—",
                    "—",
                    "—",
                    "اِحْمَرَّ",
                    "لَا تَحْمَرَّ",
                    "مُحْمَرٌّ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِحْمَرَّ (verb forms; مَجْهُوْلٌ not used)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِحْمَرَّ",
                    "يَحْمَرُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِحْمَرَّا",
                    "يَحْمَرَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِحْمَرُّوْا",
                    "يَحْمَرُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِحْمَرَّتْ",
                    "تَحْمَرُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِحْمَرَّتَا",
                    "تَحْمَرَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِحْمَرَرْنَ",
                    "يَحْمَرِرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِحْمَرَرْتَ",
                    "تَحْمَرُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِحْمَرَرْتُمَا",
                    "تَحْمَرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِحْمَرَرْتُمْ",
                    "تَحْمَرُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِحْمَرَرْتِ",
                    "تَحْمَرِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِحْمَرَرْتُمَا",
                    "تَحْمَرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِحْمَرَرْتُنَّ",
                    "تَحْمَرِرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِحْمَرَرْتُ",
                    "أَحْمَرُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِحْمَرَرْنَا",
                    "نَحْمَرُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — اِحْمَرَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِحْمَرَّ",
                    "لَا تَحْمَرَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِحْمَرَّا",
                    "لَا تَحْمَرَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِحْمَرُّوْا",
                    "لَا تَحْمَرُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِحْمَرِّيْ",
                    "لَا تَحْمَرِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِحْمَرَّا",
                    "لَا تَحْمَرَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِحْمَرِرْنَ",
                    "لَا تَحْمَرِرْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ — اِحْمَرَّ (no اِسْمُ الْمَفْعُوْلِ)",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُحْمَرٌّ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُحْمَرَّانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُحْمَرُّوْنَ",
                    "—"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُحْمَرَّةٌ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُحْمَرَّتَانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُحْمَرَّاتٌ",
                    "—"
                  ]
                ]
              }
            },
            {
              "html": "<bdi>اِخْضَرَّ يَخْضَرُّ اِخْضِرَارًا</bdi> — to be green",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِصْفَرَّ يَصْفَرُّ اِصْفِرَارًا</bdi> — to be yellow",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِسْوَدَّ يَسْوَدُّ اِسْوِدَادًا</bdi> — to be black",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "Why does بَاب اِفْعِلَال (اِحْمَرَّ) have no اِسْمُ الْمَفْعُوْلِ?",
            "kind": "mcq",
            "options": ["It is لَازِمٌ (intransitive), so it has no passive at all", "Its اِسْمُ الْمَفْعُوْلِ is identical to its اِسْمُ الْفَاعِلِ", "Its root letters are all weak", "The إِدْغَامٌ makes the form impossible to pronounce"],
            "correct": 0
          }
        },
        {
          "heading": "Part 12: الْمُضَاعَفُ مِنْ بَاب اِسْتِفْعَال (X) — p. 254",
          "lines": [
            {
              "html": "The example verb is <bdi>اِسْتَحَبَّ يَسْتَحِبُّ اِسْتِحْبَابًا</bdi> (root <bdi>ح ب ب</bdi>): to like. Like <bdi>بَاب إِفْعَال</bdi>, this <bdi>بَابٌ</bdi> needs <bdi>نَقْلٌ</bdi> before <bdi>إِدْغَامٌ</bdi>: <bdi>يَسْتَحْبِبُ</bdi> ← <bdi>يَسْتَحِبُّ</bdi>. The <bdi>مَجْهُوْلٌ</bdi> is complete here: <bdi>اُسْتُحِبَّ يُسْتَحَبُّ</bdi>. <bdi>اِسْمُ الْفَاعِلِ مُسْتَحِبٌّ</bdi> and <bdi>اِسْمُ الْمَفْعُوْلِ مُسْتَحَبٌّ</bdi> differ only in the harakah before the <bdi>شَدَّةٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِسْتَحَبَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِسْتَحَبَّ",
                    "يَسْتَحِبُّ",
                    "اِسْتِحْبَابًا",
                    "اُسْتُحِبَّ",
                    "يُسْتَحَبُّ",
                    "اِسْتِحْبَابًا",
                    "اِسْتَحِبَّ",
                    "لَا تَسْتَحِبَّ",
                    "مُسْتَحِبٌّ",
                    "مُسْتَحَبٌّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِسْتَحَبَّ (verb forms)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِسْتَحَبَّ",
                    "يَسْتَحِبُّ",
                    "اُسْتُحِبَّ",
                    "يُسْتَحَبُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِسْتَحَبَّا",
                    "يَسْتَحِبَّانِ",
                    "اُسْتُحِبَّا",
                    "يُسْتَحَبَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِسْتَحَبُّوْا",
                    "يَسْتَحِبُّوْنَ",
                    "اُسْتُحِبُّوْا",
                    "يُسْتَحَبُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِسْتَحَبَّتْ",
                    "تَسْتَحِبُّ",
                    "اُسْتُحِبَّتْ",
                    "تُسْتَحَبُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِسْتَحَبَّتَا",
                    "تَسْتَحِبَّانِ",
                    "اُسْتُحِبَّتَا",
                    "تُسْتَحَبَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِسْتَحْبَبْنَ",
                    "يَسْتَحْبِبْنَ",
                    "اُسْتُحْبِبْنَ",
                    "يُسْتَحْبَبْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِسْتَحْبَبْتَ",
                    "تَسْتَحِبُّ",
                    "اُسْتُحْبِبْتَ",
                    "تُسْتَحَبُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْتَحْبَبْتُمَا",
                    "تَسْتَحِبَّانِ",
                    "اُسْتُحْبِبْتُمَا",
                    "تُسْتَحَبَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْتَحْبَبْتُمْ",
                    "تَسْتَحِبُّوْنَ",
                    "اُسْتُحْبِبْتُمْ",
                    "تُسْتَحَبُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْتَحْبَبْتِ",
                    "تَسْتَحِبِّيْنَ",
                    "اُسْتُحْبِبْتِ",
                    "تُسْتَحَبِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْتَحْبَبْتُمَا",
                    "تَسْتَحِبَّانِ",
                    "اُسْتُحْبِبْتُمَا",
                    "تُسْتَحَبَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْتَحْبَبْتُنَّ",
                    "تَسْتَحْبِبْنَ",
                    "اُسْتُحْبِبْتُنَّ",
                    "تُسْتَحْبَبْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِسْتَحْبَبْتُ",
                    "أَسْتَحِبُّ",
                    "اُسْتُحْبِبْتُ",
                    "أُسْتَحَبُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِسْتَحْبَبْنَا",
                    "نَسْتَحِبُّ",
                    "اُسْتُحْبِبْنَا",
                    "نُسْتَحَبُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — اِسْتَحَبَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِسْتَحِبَّ",
                    "لَا تَسْتَحِبَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِسْتَحِبَّا",
                    "لَا تَسْتَحِبَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِسْتَحِبُّوْا",
                    "لَا تَسْتَحِبُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِسْتَحِبِّيْ",
                    "لَا تَسْتَحِبِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِسْتَحِبَّا",
                    "لَا تَسْتَحِبَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِسْتَحْبِبْنَ",
                    "لَا تَسْتَحْبِبْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ — اِسْتَحَبَّ",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُسْتَحِبٌّ",
                    "مُسْتَحَبٌّ"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُسْتَحِبَّانِ",
                    "مُسْتَحَبَّانِ"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُسْتَحِبُّوْنَ",
                    "مُسْتَحَبُّوْنَ"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُسْتَحِبَّةٌ",
                    "مُسْتَحَبَّةٌ"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُسْتَحِبَّتَانِ",
                    "مُسْتَحَبَّتَانِ"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُسْتَحِبَّاتٌ",
                    "مُسْتَحَبَّاتٌ"
                  ]
                ]
              }
            },
            {
              "html": "<bdi>اِسْتَحَقَّ يَسْتَحِقُّ اِسْتِحْقَاقًا</bdi> — to deserve",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِسْتَقَرَّ يَسْتَقِرُّ اِسْتِقْرَارًا</bdi> — to settle",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِسْتَمَرَّ يَسْتَمِرُّ اِسْتِمْرَارًا</bdi> — to continue",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "The الْمُضَارِعُ الْمَعْلُوْمُ of اِسْتَحَبَّ is…",
            "kind": "mcq",
            "options": ["يَسْتَحِبُّ", "يُسْتَحَبُّ", "يَسْتَحَبُّ", "يَسْتَحْبِبُ"],
            "correct": 0
          }
        },
        {
          "heading": "Part 13: الْمُضَاعَفُ مِنْ بَاب اِفْعِيْلَال (XI) — p. 255",
          "lines": [
            {
              "html": "The example verb is <bdi>اِحْمَارَّ يَحْمَارُّ اِحْمِيْرَارًا</bdi> (root <bdi>ح م ر</bdi>): to be red. <bdi>بَاب اِفْعِيْلَال</bdi> is the intensive counterpart of <bdi>بَاب اِفْعِلَال</bdi> — the same meaning with an extra <bdi>أَلِفٌ</bdi> (and <bdi>يَاءٌ</bdi> in the <bdi>مَصْدَرٌ</bdi>). It is likewise <bdi>لَازِمٌ</bdi>: no <bdi>مَجْهُوْلٌ</bdi>, no <bdi>اِسْمُ الْمَفْعُوْلِ</bdi>. Its <bdi>اِسْمُ الْفَاعِلِ</bdi> is <bdi>مُحْمَارٌّ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِحْمَارَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِحْمَارَّ",
                    "يَحْمَارُّ",
                    "اِحْمِيْرَارًا",
                    "—",
                    "—",
                    "—",
                    "اِحْمَارَّ",
                    "لَا تَحْمَارَّ",
                    "مُحْمَارٌّ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِحْمَارَّ (verb forms; مَجْهُوْلٌ not used)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِحْمَارَّ",
                    "يَحْمَارُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِحْمَارَّا",
                    "يَحْمَارَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِحْمَارُّوْا",
                    "يَحْمَارُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِحْمَارَّتْ",
                    "تَحْمَارُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِحْمَارَّتَا",
                    "تَحْمَارَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِحْمَارَرْنَ",
                    "يَحْمَارِرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِحْمَارَرْتَ",
                    "تَحْمَارُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِحْمَارَرْتُمَا",
                    "تَحْمَارَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِحْمَارَرْتُمْ",
                    "تَحْمَارُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِحْمَارَرْتِ",
                    "تَحْمَارِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِحْمَارَرْتُمَا",
                    "تَحْمَارَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِحْمَارَرْتُنَّ",
                    "تَحْمَارِرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِحْمَارَرْتُ",
                    "أَحْمَارُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِحْمَارَرْنَا",
                    "نَحْمَارُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — اِحْمَارَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِحْمَارَّ",
                    "لَا تَحْمَارَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِحْمَارَّا",
                    "لَا تَحْمَارَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِحْمَارُّوْا",
                    "لَا تَحْمَارُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِحْمَارِّيْ",
                    "لَا تَحْمَارِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِحْمَارَّا",
                    "لَا تَحْمَارَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِحْمَارِرْنَ",
                    "لَا تَحْمَارِرْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ — اِحْمَارَّ (no اِسْمُ الْمَفْعُوْلِ)",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُحْمَارٌّ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُحْمَارَّانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُحْمَارُّوْنَ",
                    "—"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُحْمَارَّةٌ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُحْمَارَّتَانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُحْمَارَّاتٌ",
                    "—"
                  ]
                ]
              }
            },
            {
              "html": "<bdi>اِصْفَارَّ يَصْفَارُّ اِصْفِيْرَارًا</bdi> — to be yellow",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِدْهَامَّ يَدْهَامُّ اِدْهِيْمَامًا</bdi> — to be black",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِسْوَادَّ يَسْوَادُّ اِسْوِيْدَادًا</bdi> — to be black",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "اِحْمَرَّ and اِحْمَارَّ both mean 'to be red'. What distinguishes them?",
            "kind": "mcq",
            "options": ["اِحْمَرَّ is بَاب اِفْعِلَال (IX); اِحْمَارَّ is the intensive بَاب اِفْعِيْلَال (XI), with an extra أَلِفٌ and the مَصْدَرٌ اِحْمِيْرَارًا", "اِحْمَرَّ is the passive of اِحْمَارَّ", "اِحْمَارَّ is رُبَاعِيٌّ while اِحْمَرَّ is ثُلَاثِيٌّ", "اِحْمَارَّ has a مَجْهُوْلٌ but اِحْمَرَّ does not"],
            "correct": 0
          }
        },
        {
          "heading": "Part 14: الْمُضَاعَفُ مِنْ بَاب اِفْعِلَّال — p. 256",
          "lines": [
            {
              "html": "The example verb is <bdi>اِقْشَعَرَّ يَقْشَعِرُّ اِقْشِعْرَارًا</bdi> (root <bdi>ق ش ع ر</bdi>): to tremble. This is a quadriliteral (<bdi>رُبَاعِيٌّ</bdi>) <bdi>بَابٌ</bdi>, so the doubled letter is the last root letter. It is <bdi>لَازِمٌ</bdi> — no <bdi>مَجْهُوْلٌ</bdi> and no <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> — and its <bdi>اِسْمُ الْفَاعِلِ</bdi> is <bdi>مُقْشَعِرٌّ</bdi>. Note that the <bdi>مُضَارِعٌ</bdi> has a <bdi>كَسْرَةٌ</bdi> before the <bdi>شَدَّةٌ</bdi> (<bdi>يَقْشَعِرُّ</bdi>) whereas the <bdi>مَاضِيْ</bdi> has a <bdi>فَتْحَةٌ</bdi> (<bdi>اِقْشَعَرَّ</bdi>).",
              "list": false
            },
            {
              "html": "The book heads this Part '<bdi>بَاب اِفْعِلَّال</bdi> (IV)' — the Roman numeral belongs to the <bdi>رُبَاعِيٌّ مَزِيْدٌ فِيْهِ</bdi> series, not to the <bdi>ثُلَاثِيٌّ</bdi> series numbered I–XI above. It is reproduced as printed.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ — اِقْشَعَرَّ",
                "headers": [
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "اِقْشَعَرَّ",
                    "يَقْشَعِرُّ",
                    "اِقْشِعْرَارًا",
                    "—",
                    "—",
                    "—",
                    "اِقْشَعِرَّ",
                    "لَا تَقْشَعِرَّ",
                    "مُقْشَعِرٌّ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — اِقْشَعَرَّ (verb forms; مَجْهُوْلٌ not used)",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "اِقْشَعَرَّ",
                    "يَقْشَعِرُّ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "اِقْشَعَرَّا",
                    "يَقْشَعِرَّانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "اِقْشَعَرُّوْا",
                    "يَقْشَعِرُّوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "اِقْشَعَرَّتْ",
                    "تَقْشَعِرُّ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "اِقْشَعَرَّتَا",
                    "تَقْشَعِرَّانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "اِقْشَعْرَرْنَ",
                    "يَقْشَعْرِرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "اِقْشَعْرَرْتَ",
                    "تَقْشَعِرُّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِقْشَعْرَرْتُمَا",
                    "تَقْشَعِرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِقْشَعْرَرْتُمْ",
                    "تَقْشَعِرُّوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِقْشَعْرَرْتِ",
                    "تَقْشَعِرِّيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِقْشَعْرَرْتُمَا",
                    "تَقْشَعِرَّانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِقْشَعْرَرْتُنَّ",
                    "تَقْشَعْرِرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "اِقْشَعْرَرْتُ",
                    "أَقْشَعِرُّ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "اِقْشَعْرَرْنَا",
                    "نَقْشَعِرُّ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ and النَّهْيُ — اِقْشَعَرَّ",
                "headers": [
                  "الصِّيْغَةُ",
                  "الْأَمْرُ",
                  "النَّهْيُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِقْشَعِرَّ",
                    "لَا تَقْشَعِرَّ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "اِقْشَعِرَّا",
                    "لَا تَقْشَعِرَّا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "اِقْشَعِرُّوْا",
                    "لَا تَقْشَعِرُّوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "اِقْشَعِرِّيْ",
                    "لَا تَقْشَعِرِّيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "اِقْشَعِرَّا",
                    "لَا تَقْشَعِرَّا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "اِقْشَعْرِرْنَ",
                    "لَا تَقْشَعْرِرْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "اِسْمُ الْفَاعِلِ — اِقْشَعَرَّ (no اِسْمُ الْمَفْعُوْلِ)",
                "headers": [
                  "",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مُقْشَعِرٌّ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مُقْشَعِرَّانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مُقْشَعِرُّوْنَ",
                    "—"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مُقْشَعِرَّةٌ",
                    "—"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مُقْشَعِرَّتَانِ",
                    "—"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مُقْشَعِرَّاتٌ",
                    "—"
                  ]
                ]
              }
            },
            {
              "html": "<bdi>اِطْمَأَنَّ يَطْمَئِنُّ اِطْمِئْنَانًا</bdi> — to be calm",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِشْمَأَزَّ يَشْمَئِزُّ اِشْمِئْزَازًا</bdi> — to shudder",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>اِضْمَحَلَّ يَضْمَحِلُّ اِضْمِحْلَالًا</bdi> — to dwindle",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "اِقْشَعَرَّ يَقْشَعِرُّ belongs to which kind of بَابٌ?",
            "kind": "mcq",
            "options": ["A رُبَاعِيٌّ مَزِيْدٌ فِيْهِ بَابٌ (اِفْعِلَّال) — its doubled letter is the fourth root letter", "A ثُلَاثِيٌّ مُجَرَّدٌ بَابٌ", "بَاب اِفْعِلَال (IX)", "بَاب اِسْتِفْعَال (X)"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 9–14: الْمُضَاعَفُ from Abwāb VII–XI and اِفْعِلَّال",
        "rows": [
          {
            "label": "لَازِمٌ — no مَجْهُوْلٌ, no اِسْمُ الْمَفْعُوْلِ; فَاعِلٌ مُنْشَقٌّ",
            "arabic": "اِنْشَقَّ يَنْشَقُّ اِنْشِقَاقًا (VII)",
            "meaning": "لَازِمٌ — no مَجْهُوْلٌ, no اِسْمُ الْمَفْعُوْلِ; فَاعِلٌ مُنْشَقٌّ",
            "unlockAt": 0
          },
          {
            "label": "Full مَجْهُوْلٌ اُشْتُدَّ يُشْتَدُّ; فَاعِلٌ = مَفْعُوْلٌ = مُشْتَدٌّ",
            "arabic": "اِشْتَدَّ يَشْتَدُّ اِشْتِدَادًا (VIII)",
            "meaning": "Full مَجْهُوْلٌ اُشْتُدَّ يُشْتَدُّ; فَاعِلٌ = مَفْعُوْلٌ = مُشْتَدٌّ",
            "unlockAt": 1
          },
          {
            "label": "Colours/defects, لَازِمٌ; فَاعِلٌ مُحْمَرٌّ",
            "arabic": "اِحْمَرَّ يَحْمَرُّ اِحْمِرَارًا (IX)",
            "meaning": "Colours/defects, لَازِمٌ; فَاعِلٌ مُحْمَرٌّ",
            "unlockAt": 2
          },
          {
            "label": "نَقْلٌ then إِدْغَامٌ; فَاعِلٌ مُسْتَحِبٌّ vs مَفْعُوْلٌ مُسْتَحَبٌّ",
            "arabic": "اِسْتَحَبَّ يَسْتَحِبُّ اِسْتِحْبَابًا (X)",
            "meaning": "نَقْلٌ then إِدْغَامٌ; فَاعِلٌ مُسْتَحِبٌّ vs مَفْعُوْلٌ مُسْتَحَبٌّ",
            "unlockAt": 3
          },
          {
            "label": "Intensive of IX, لَازِمٌ; فَاعِلٌ مُحْمَارٌّ",
            "arabic": "اِحْمَارَّ يَحْمَارُّ اِحْمِيْرَارًا (XI)",
            "meaning": "Intensive of IX, لَازِمٌ; فَاعِلٌ مُحْمَارٌّ",
            "unlockAt": 4
          },
          {
            "label": "رُبَاعِيٌّ بَاب اِفْعِلَّال, لَازِمٌ; فَاعِلٌ مُقْشَعِرٌّ",
            "arabic": "اِقْشَعَرَّ يَقْشَعِرُّ اِقْشِعْرَارًا",
            "meaning": "رُبَاعِيٌّ بَاب اِفْعِلَّال, لَازِمٌ; فَاعِلٌ مُقْشَعِرٌّ",
            "unlockAt": 5
          },
          {
            "label": "In every بَابٌ the إِدْغَامٌ breaks apart here (يَنْشَقِقْنَ، تَشْتَدِدْنَ، يَحْمَرِرْنَ …)",
            "arabic": "الْغَائِبَاتُ / الْمُخَاطَبَاتُ",
            "meaning": "In every بَابٌ the إِدْغَامٌ breaks apart here (يَنْشَقِقْنَ، تَشْتَدِدْنَ، يَحْمَرِرْنَ …)",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "Of Abwāb VII–XI and اِفْعِلَّال, which أَبْوَاب have a complete مَجْهُوْلٌ (passive)?",
          "options": [
            "بَاب اِفْتِعَال (VIII) — and بَاب اِسْتِفْعَال (X)",
            "بَاب اِنْفِعَال (VII) only",
            "بَاب اِفْعِلَال (IX) and بَاب اِفْعِيْلَال (XI)",
            "بَاب اِفْعِلَّال only"
          ],
          "correct": 0,
          "explanation": "اِشْتَدَّ (VIII) and اِسْتَحَبَّ (X) are the only two that are مُتَعَدٍّ-capable; their مَجْهُوْلٌ columns are filled in (اُشْتُدَّ يُشْتَدُّ، اُسْتُحِبَّ يُسْتَحَبُّ). Bābs VII, IX, XI and اِفْعِلَّال are لَازِمٌ, so those boxes are left empty."
        },
        {
          "q": "The الْمُضَارِعُ الْمَعْلُوْمُ of اِسْتَحَبَّ is…",
          "options": [
            "يَسْتَحِبُّ",
            "يُسْتَحَبُّ",
            "يَسْتَحَبُّ",
            "يَسْتَحْبِبُ"
          ],
          "correct": 0,
          "explanation": "يَسْتَحْبِبُ undergoes نَقْلٌ (the كَسْرَةٌ moves back onto the ح) and then إِدْغَامٌ: يَسْتَحِبُّ. يُسْتَحَبُّ is the passive."
        },
        {
          "q": "Why does بَاب اِفْعِلَال (اِحْمَرَّ) have no اِسْمُ الْمَفْعُوْلِ?",
          "options": [
            "It is لَازِمٌ (intransitive), so it has no passive at all",
            "Its اِسْمُ الْمَفْعُوْلِ is identical to its اِسْمُ الْفَاعِلِ",
            "Its root letters are all weak",
            "The إِدْغَامٌ makes the form impossible to pronounce"
          ],
          "correct": 0,
          "explanation": "بَاب اِفْعِلَال expresses colours and physical defects and is always intransitive, so it has no مَجْهُوْلٌ and no اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "q": "اِحْمَرَّ and اِحْمَارَّ both mean 'to be red'. What distinguishes them?",
          "options": [
            "اِحْمَرَّ is بَاب اِفْعِلَال (IX); اِحْمَارَّ is the intensive بَاب اِفْعِيْلَال (XI), with an extra أَلِفٌ and the مَصْدَرٌ اِحْمِيْرَارًا",
            "اِحْمَرَّ is the passive of اِحْمَارَّ",
            "اِحْمَارَّ is رُبَاعِيٌّ while اِحْمَرَّ is ثُلَاثِيٌّ",
            "اِحْمَارَّ has a مَجْهُوْلٌ but اِحْمَرَّ does not"
          ],
          "correct": 0,
          "explanation": "بَاب اِفْعِيْلَال is the intensive counterpart of بَاب اِفْعِلَال: اِحْمَرَّ يَحْمَرُّ اِحْمِرَارًا vs اِحْمَارَّ يَحْمَارُّ اِحْمِيْرَارًا. Both are لَازِمٌ."
        },
        {
          "q": "In بَاب اِفْتِعَال, the اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ of the مُضَاعَفٌ are…",
          "options": [
            "Identical — both مُشْتَدٌّ",
            "مُشْتَدِدٌ and مُشْتَدَدٌ",
            "مُشْتَدٌّ and مَشْدُوْدٌ",
            "Non-existent, because the بَابٌ is لَازِمٌ"
          ],
          "correct": 0,
          "explanation": "The كَسْرَةٌ of مُفْتَعِلٌ and the فَتْحَةٌ of مُفْتَعَلٌ both disappear into the إِدْغَامٌ, leaving one shared form مُشْتَدٌّ."
        },
        {
          "q": "اِقْشَعَرَّ يَقْشَعِرُّ belongs to which kind of بَابٌ?",
          "options": [
            "A رُبَاعِيٌّ مَزِيْدٌ فِيْهِ بَابٌ (اِفْعِلَّال) — its doubled letter is the fourth root letter",
            "A ثُلَاثِيٌّ مُجَرَّدٌ بَابٌ",
            "بَاب اِفْعِلَال (IX)",
            "بَاب اِسْتِفْعَال (X)"
          ],
          "correct": 0,
          "explanation": "The root is ق ش ع ر — four letters. بَاب اِفْعِلَّال doubles the last root letter, giving اِقْشَعَرَّ يَقْشَعِرُّ اِقْشِعْرَارًا."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "اِنْشَقَقْتُنَّ is…",
          "options": [
            "الْمَاضِيْ الْمَعْلُوْمُ، الْمُخَاطَبَاتُ of اِنْشَقَّ — you (f/p) split",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبَاتُ of اِنْشَقَّ",
            "الْمَاضِيْ الْمَجْهُوْلُ، الْمُخَاطَبَاتُ of اِنْشَقَّ",
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْمُخَاطَبَاتُ of اِنْشَقَّ"
          ],
          "correct": 0,
          "explanation": "The pronoun تُنَّ is second person feminine plural. الْغَائِبَاتُ would be اِنْشَقَقْنَ, and بَاب اِنْفِعَال has no مَجْهُوْلٌ at all."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The مَصْدَرٌ of اِحْمَارَّ is…",
          "options": [
            "اِحْمِيْرَارًا",
            "اِحْمِرَارًا",
            "تَحْمِيْرًا",
            "مُحْمَارَّةً"
          ],
          "correct": 0,
          "explanation": "بَاب اِفْعِيْلَال takes the scale اِفْعِيْلَالًا: اِحْمِيْرَارًا. اِحْمِرَارًا is the مَصْدَرٌ of اِحْمَرَّ (بَاب اِفْعِلَال)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Do not intensify! (you f/p)' from اِشْتَدَّ is…",
          "options": [
            "لَا تَشْتَدِدْنَ",
            "لَا تَشْتَدُّوْا",
            "لَا تَشْتَدَّا",
            "لَا تَشْتَدِّيْ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ never merges: the two د's separate, giving لَا تَشْتَدِدْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "الْمَاضِيْ الْمَجْهُوْلُ of اِسْتَحَبَّ (الْغَائِبُ) is…",
          "options": [
            "اُسْتُحِبَّ",
            "اِسْتَحَبَّ",
            "يُسْتَحَبُّ",
            "اُسْتُحْبِبَ"
          ],
          "correct": 0,
          "explanation": "The passive past of بَاب اِسْتِفْعَال is اُسْتُفْعِلَ; with إِدْغَامٌ this becomes اُسْتُحِبَّ. يُسْتَحَبُّ is the passive present."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which verb means 'to descend upon'?",
          "options": [
            "اِنْقَضَّ",
            "اِنْفَكَّ",
            "اِنْسَلَّ",
            "اِنْشَقَّ"
          ],
          "correct": 0,
          "explanation": "اِنْقَضَّ يَنْقَضُّ اِنْقِضَاضًا = to descend upon. اِنْفَكَّ = to unwind, اِنْسَلَّ = to sneak away, اِنْشَقَّ = to split."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَحْمَارِرْنَ is which صِيْغَةٌ?",
          "options": [
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْمُخَاطَبَاتُ of اِحْمَارَّ",
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبَاتُ of اِحْمَارَّ",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْمُخَاطَبَاتُ of اِحْمَارَّ",
            "النَّهْيُ of الْمُخَاطَبَاتِ from اِحْمَارَّ"
          ],
          "correct": 0,
          "explanation": "The prefix تَـ with the ending ـْنَ marks الْمُخَاطَبَاتُ; الْغَائِبَاتُ would be يَحْمَارِرْنَ, and the نَهْيٌ would carry لَا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The اِسْمُ الْفَاعِلِ of اِقْشَعَرَّ, feminine plural, is…",
          "options": [
            "مُقْشَعِرَّاتٌ",
            "مُقْشَعَرَّاتٌ",
            "مُقْشَعِرُّوْنَ",
            "مُقْشَعِرَّتَانِ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْفَاعِلِ is مُقْشَعِرٌّ (كَسْرَةٌ before the شَدَّةٌ); جَمْعُ الْمُؤَنَّثِ is مُقْشَعِرَّاتٌ. مُقْشَعِرَّتَانِ is the dual."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which pair of forms shows that the إِدْغَامٌ has broken apart?",
          "options": [
            "يَشْتَدِدْنَ and تَنْشَقِقْنَ",
            "يَشْتَدُّ and يَنْشَقُّ",
            "مُشْتَدٌّ and مُنْشَقٌّ",
            "اِشْتَدَّا and اِنْشَقَّا"
          ],
          "correct": 0,
          "explanation": "In الْغَائِبَاتُ / الْمُخَاطَبَاتُ the last root letter takes a sukūn (ـْنَ), so the two identical letters cannot merge: يَشْتَدِدْنَ، تَنْشَقِقْنَ."
        },
        {
          "title": "to sneak away",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sneak away\"?",
          "options": [
            "اِنْسَلَّ يَنْسَلُّ",
            "اِنْشَقَّ يَنْشَقُّ",
            "اِنْفَكَّ يَنْفَكُّ",
            "اِنْقَضَّ يَنْقَضُّ"
          ],
          "correct": 0
        },
        {
          "title": "to sneak away",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْسَلَّ يَنْسَلُّ mean?",
          "options": [
            "to sneak away",
            "to split",
            "to unwind",
            "to descend upon"
          ],
          "correct": 0
        },
        {
          "title": "to sneak away (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْسَلَّ يَنْسَلُّ?",
          "options": [
            "اِنْسِلَالًا",
            "اِنْشِقَاقًا",
            "اِنْفِكَاكًا",
            "اِنْقِضَاضًا"
          ],
          "correct": 0
        },
        {
          "title": "to split",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to split\"?",
          "options": [
            "اِنْشَقَّ يَنْشَقُّ",
            "اِنْفَكَّ يَنْفَكُّ",
            "اِنْقَضَّ يَنْقَضُّ",
            "اِشْتَدَّ يَشْتَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to split",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْشَقَّ يَنْشَقُّ mean?",
          "options": [
            "to split",
            "to unwind",
            "to descend upon",
            "to intensify"
          ],
          "correct": 0
        },
        {
          "title": "to split (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْشَقَّ يَنْشَقُّ?",
          "options": [
            "اِنْشِقَاقًا",
            "اِنْفِكَاكًا",
            "اِنْقِضَاضًا",
            "اِشْتِدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to unwind",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to unwind\"?",
          "options": [
            "اِنْفَكَّ يَنْفَكُّ",
            "اِنْقَضَّ يَنْقَضُّ",
            "اِشْتَدَّ يَشْتَدُّ",
            "اِضْطَرَّ يَضْطَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to unwind",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْفَكَّ يَنْفَكُّ mean?",
          "options": [
            "to unwind",
            "to descend upon",
            "to intensify",
            "to force"
          ],
          "correct": 0
        },
        {
          "title": "to unwind (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْفَكَّ يَنْفَكُّ?",
          "options": [
            "اِنْفِكَاكًا",
            "اِنْقِضَاضًا",
            "اِشْتِدَادًا",
            "اِضْطِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to descend upon",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to descend upon\"?",
          "options": [
            "اِنْقَضَّ يَنْقَضُّ",
            "اِشْتَدَّ يَشْتَدُّ",
            "اِضْطَرَّ يَضْطَرُّ",
            "اِغْتَرَّ يَغْتَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to descend upon",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْقَضَّ يَنْقَضُّ mean?",
          "options": [
            "to descend upon",
            "to intensify",
            "to force",
            "to be deceived"
          ],
          "correct": 0
        },
        {
          "title": "to descend upon (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْقَضَّ يَنْقَضُّ?",
          "options": [
            "اِنْقِضَاضًا",
            "اِشْتِدَادًا",
            "اِضْطِرَارًا",
            "اِغْتِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to intensify",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to intensify\"?",
          "options": [
            "اِشْتَدَّ يَشْتَدُّ",
            "اِضْطَرَّ يَضْطَرُّ",
            "اِغْتَرَّ يَغْتَرُّ",
            "اِهْتَمَّ يَهْتَمُّ"
          ],
          "correct": 0
        },
        {
          "title": "to intensify",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِشْتَدَّ يَشْتَدُّ mean?",
          "options": [
            "to intensify",
            "to force",
            "to be deceived",
            "to worry about"
          ],
          "correct": 0
        },
        {
          "title": "to intensify (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِشْتَدَّ يَشْتَدُّ?",
          "options": [
            "اِشْتِدَادًا",
            "اِضْطِرَارًا",
            "اِغْتِرَارًا",
            "اِهْتِمَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to force",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to force\"?",
          "options": [
            "اِضْطَرَّ يَضْطَرُّ",
            "اِغْتَرَّ يَغْتَرُّ",
            "اِهْتَمَّ يَهْتَمُّ",
            "اِحْمَرَّ يَحْمَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to force",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِضْطَرَّ يَضْطَرُّ mean?",
          "options": [
            "to force",
            "to be deceived",
            "to worry about",
            "to be red"
          ],
          "correct": 0
        },
        {
          "title": "to force (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِضْطَرَّ يَضْطَرُّ?",
          "options": [
            "اِضْطِرَارًا",
            "اِغْتِرَارًا",
            "اِهْتِمَامًا",
            "اِحْمِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be deceived",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be deceived\"?",
          "options": [
            "اِغْتَرَّ يَغْتَرُّ",
            "اِهْتَمَّ يَهْتَمُّ",
            "اِحْمَرَّ يَحْمَرُّ",
            "اِخْضَرَّ يَخْضَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be deceived",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِغْتَرَّ يَغْتَرُّ mean?",
          "options": [
            "to be deceived",
            "to worry about",
            "to be red",
            "to be green"
          ],
          "correct": 0
        },
        {
          "title": "to be deceived (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِغْتَرَّ يَغْتَرُّ?",
          "options": [
            "اِغْتِرَارًا",
            "اِهْتِمَامًا",
            "اِحْمِرَارًا",
            "اِخْضِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to worry about",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to worry about\"?",
          "options": [
            "اِهْتَمَّ يَهْتَمُّ",
            "اِحْمَرَّ يَحْمَرُّ",
            "اِخْضَرَّ يَخْضَرُّ",
            "اِصْفَرَّ يَصْفَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to worry about",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِهْتَمَّ يَهْتَمُّ mean?",
          "options": [
            "to worry about",
            "to be red",
            "to be green",
            "to be yellow"
          ],
          "correct": 0
        },
        {
          "title": "to worry about (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِهْتَمَّ يَهْتَمُّ?",
          "options": [
            "اِهْتِمَامًا",
            "اِحْمِرَارًا",
            "اِخْضِرَارًا",
            "اِصْفِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be red\"?",
          "options": [
            "اِحْمَرَّ يَحْمَرُّ",
            "اِخْضَرَّ يَخْضَرُّ",
            "اِصْفَرَّ يَصْفَرُّ",
            "اِسْوَدَّ يَسْوَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْمَرَّ يَحْمَرُّ mean?",
          "options": [
            "to be red",
            "to be green",
            "to be yellow",
            "to be black"
          ],
          "correct": 0
        },
        {
          "title": "to be red (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْمَرَّ يَحْمَرُّ?",
          "options": [
            "اِحْمِرَارًا",
            "اِخْضِرَارًا",
            "اِصْفِرَارًا",
            "اِسْوِدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to be green",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be green\"?",
          "options": [
            "اِخْضَرَّ يَخْضَرُّ",
            "اِصْفَرَّ يَصْفَرُّ",
            "اِسْوَدَّ يَسْوَدُّ",
            "اِسْتَحَبَّ يَسْتَحِبُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be green",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِخْضَرَّ يَخْضَرُّ mean?",
          "options": [
            "to be green",
            "to be yellow",
            "to be black",
            "to like"
          ],
          "correct": 0
        },
        {
          "title": "to be green (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِخْضَرَّ يَخْضَرُّ?",
          "options": [
            "اِخْضِرَارًا",
            "اِصْفِرَارًا",
            "اِسْوِدَادًا",
            "اِسْتِحْبَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be yellow\"?",
          "options": [
            "اِصْفَرَّ يَصْفَرُّ",
            "اِسْوَدَّ يَسْوَدُّ",
            "اِسْتَحَبَّ يَسْتَحِبُّ",
            "اِسْتَحَقَّ يَسْتَحِقُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِصْفَرَّ يَصْفَرُّ mean?",
          "options": [
            "to be yellow",
            "to be black",
            "to like",
            "to deserve"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِصْفَرَّ يَصْفَرُّ?",
          "options": [
            "اِصْفِرَارًا",
            "اِسْوِدَادًا",
            "اِسْتِحْبَابًا",
            "اِسْتِحْقَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be black\"?",
          "options": [
            "اِسْوَدَّ يَسْوَدُّ",
            "اِسْتَحَبَّ يَسْتَحِبُّ",
            "اِسْتَحَقَّ يَسْتَحِقُّ",
            "اِسْتَقَرَّ يَسْتَقِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْوَدَّ يَسْوَدُّ mean?",
          "options": [
            "to be black",
            "to like",
            "to deserve",
            "to settle"
          ],
          "correct": 0
        },
        {
          "title": "to be black (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْوَدَّ يَسْوَدُّ?",
          "options": [
            "اِسْوِدَادًا",
            "اِسْتِحْبَابًا",
            "اِسْتِحْقَاقًا",
            "اِسْتِقْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to like",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to like\"?",
          "options": [
            "اِسْتَحَبَّ يَسْتَحِبُّ",
            "اِسْتَحَقَّ يَسْتَحِقُّ",
            "اِسْتَقَرَّ يَسْتَقِرُّ",
            "اِسْتَمَرَّ يَسْتَمِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to like",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَحَبَّ يَسْتَحِبُّ mean?",
          "options": [
            "to like",
            "to deserve",
            "to settle",
            "to continue"
          ],
          "correct": 0
        },
        {
          "title": "to like (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَحَبَّ يَسْتَحِبُّ?",
          "options": [
            "اِسْتِحْبَابًا",
            "اِسْتِحْقَاقًا",
            "اِسْتِقْرَارًا",
            "اِسْتِمْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to deserve",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deserve\"?",
          "options": [
            "اِسْتَحَقَّ يَسْتَحِقُّ",
            "اِسْتَقَرَّ يَسْتَقِرُّ",
            "اِسْتَمَرَّ يَسْتَمِرُّ",
            "اِحْمَارَّ يَحْمَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to deserve",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَحَقَّ يَسْتَحِقُّ mean?",
          "options": [
            "to deserve",
            "to settle",
            "to continue",
            "to be red"
          ],
          "correct": 0
        },
        {
          "title": "to deserve (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَحَقَّ يَسْتَحِقُّ?",
          "options": [
            "اِسْتِحْقَاقًا",
            "اِسْتِقْرَارًا",
            "اِسْتِمْرَارًا",
            "اِحْمِيْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to settle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to settle\"?",
          "options": [
            "اِسْتَقَرَّ يَسْتَقِرُّ",
            "اِسْتَمَرَّ يَسْتَمِرُّ",
            "اِحْمَارَّ يَحْمَارُّ",
            "اِصْفَارَّ يَصْفَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to settle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَقَرَّ يَسْتَقِرُّ mean?",
          "options": [
            "to settle",
            "to continue",
            "to be red",
            "to be yellow"
          ],
          "correct": 0
        },
        {
          "title": "to settle (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَقَرَّ يَسْتَقِرُّ?",
          "options": [
            "اِسْتِقْرَارًا",
            "اِسْتِمْرَارًا",
            "اِحْمِيْرَارًا",
            "اِصْفِيْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to continue",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to continue\"?",
          "options": [
            "اِسْتَمَرَّ يَسْتَمِرُّ",
            "اِحْمَارَّ يَحْمَارُّ",
            "اِصْفَارَّ يَصْفَارُّ",
            "اِدْهَامَّ يَدْهَامُّ"
          ],
          "correct": 0
        },
        {
          "title": "to continue",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَمَرَّ يَسْتَمِرُّ mean?",
          "options": [
            "to continue",
            "to be red",
            "to be yellow",
            "to be black"
          ],
          "correct": 0
        },
        {
          "title": "to continue (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَمَرَّ يَسْتَمِرُّ?",
          "options": [
            "اِسْتِمْرَارًا",
            "اِحْمِيْرَارًا",
            "اِصْفِيْرَارًا",
            "اِدْهِيْمَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be red\"?",
          "options": [
            "اِحْمَارَّ يَحْمَارُّ",
            "اِصْفَارَّ يَصْفَارُّ",
            "اِدْهَامَّ يَدْهَامُّ",
            "اِسْوَادَّ يَسْوَادُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْمَارَّ يَحْمَارُّ mean?",
          "options": [
            "to be red",
            "to be yellow",
            "to be black",
            "to tremble"
          ],
          "correct": 0
        },
        {
          "title": "to be red (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْمَارَّ يَحْمَارُّ?",
          "options": [
            "اِحْمِيْرَارًا",
            "اِصْفِيْرَارًا",
            "اِدْهِيْمَامًا",
            "اِسْوِيْدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be yellow\"?",
          "options": [
            "اِصْفَارَّ يَصْفَارُّ",
            "اِدْهَامَّ يَدْهَامُّ",
            "اِسْوَادَّ يَسْوَادُّ",
            "اِقْشَعَرَّ يَقْشَعِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِصْفَارَّ يَصْفَارُّ mean?",
          "options": [
            "to be yellow",
            "to be black",
            "to tremble",
            "to be calm"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِصْفَارَّ يَصْفَارُّ?",
          "options": [
            "اِصْفِيْرَارًا",
            "اِدْهِيْمَامًا",
            "اِسْوِيْدَادًا",
            "اِقْشِعْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be black\"?",
          "options": [
            "اِدْهَامَّ يَدْهَامُّ",
            "اِسْوَادَّ يَسْوَادُّ",
            "اِقْشَعَرَّ يَقْشَعِرُّ",
            "اِطْمَأَنَّ يَطْمَئِنُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِدْهَامَّ يَدْهَامُّ mean?",
          "options": [
            "to be black",
            "to tremble",
            "to be calm",
            "to shudder"
          ],
          "correct": 0
        },
        {
          "title": "to be black (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِدْهَامَّ يَدْهَامُّ?",
          "options": [
            "اِدْهِيْمَامًا",
            "اِسْوِيْدَادًا",
            "اِقْشِعْرَارًا",
            "اِطْمِئْنَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be black\"?",
          "options": [
            "اِسْوَادَّ يَسْوَادُّ",
            "اِقْشَعَرَّ يَقْشَعِرُّ",
            "اِطْمَأَنَّ يَطْمَئِنُّ",
            "اِشْمَأَزَّ يَشْمَئِزُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْوَادَّ يَسْوَادُّ mean?",
          "options": [
            "to be black",
            "to tremble",
            "to be calm",
            "to shudder"
          ],
          "correct": 0
        },
        {
          "title": "to be black (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْوَادَّ يَسْوَادُّ?",
          "options": [
            "اِسْوِيْدَادًا",
            "اِقْشِعْرَارًا",
            "اِطْمِئْنَانًا",
            "اِشْمِئْزَازًا"
          ],
          "correct": 0
        },
        {
          "title": "to tremble",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tremble\"?",
          "options": [
            "اِقْشَعَرَّ يَقْشَعِرُّ",
            "اِطْمَأَنَّ يَطْمَئِنُّ",
            "اِشْمَأَزَّ يَشْمَئِزُّ",
            "اِضْمَحَلَّ يَضْمَحِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to tremble",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِقْشَعَرَّ يَقْشَعِرُّ mean?",
          "options": [
            "to tremble",
            "to be calm",
            "to shudder",
            "to dwindle"
          ],
          "correct": 0
        },
        {
          "title": "to tremble (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِقْشَعَرَّ يَقْشَعِرُّ?",
          "options": [
            "اِقْشِعْرَارًا",
            "اِطْمِئْنَانًا",
            "اِشْمِئْزَازًا",
            "اِضْمِحْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be calm",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be calm\"?",
          "options": [
            "اِطْمَأَنَّ يَطْمَئِنُّ",
            "اِشْمَأَزَّ يَشْمَئِزُّ",
            "اِضْمَحَلَّ يَضْمَحِلُّ",
            "اِنْسَلَّ يَنْسَلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be calm",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِطْمَأَنَّ يَطْمَئِنُّ mean?",
          "options": [
            "to be calm",
            "to shudder",
            "to dwindle",
            "to sneak away"
          ],
          "correct": 0
        },
        {
          "title": "to be calm (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِطْمَأَنَّ يَطْمَئِنُّ?",
          "options": [
            "اِطْمِئْنَانًا",
            "اِشْمِئْزَازًا",
            "اِضْمِحْلَالًا",
            "اِنْسِلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to shudder",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to shudder\"?",
          "options": [
            "اِشْمَأَزَّ يَشْمَئِزُّ",
            "اِضْمَحَلَّ يَضْمَحِلُّ",
            "اِنْسَلَّ يَنْسَلُّ",
            "اِنْشَقَّ يَنْشَقُّ"
          ],
          "correct": 0
        },
        {
          "title": "to shudder",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِشْمَأَزَّ يَشْمَئِزُّ mean?",
          "options": [
            "to shudder",
            "to dwindle",
            "to sneak away",
            "to split"
          ],
          "correct": 0
        },
        {
          "title": "to shudder (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِشْمَأَزَّ يَشْمَئِزُّ?",
          "options": [
            "اِشْمِئْزَازًا",
            "اِضْمِحْلَالًا",
            "اِنْسِلَالًا",
            "اِنْشِقَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to dwindle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to dwindle\"?",
          "options": [
            "اِضْمَحَلَّ يَضْمَحِلُّ",
            "اِنْسَلَّ يَنْسَلُّ",
            "اِنْشَقَّ يَنْشَقُّ",
            "اِنْفَكَّ يَنْفَكُّ"
          ],
          "correct": 0
        },
        {
          "title": "to dwindle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِضْمَحَلَّ يَضْمَحِلُّ mean?",
          "options": [
            "to dwindle",
            "to sneak away",
            "to split",
            "to unwind"
          ],
          "correct": 0
        },
        {
          "title": "to dwindle (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِضْمَحَلَّ يَضْمَحِلُّ?",
          "options": [
            "اِضْمِحْلَالًا",
            "اِنْسِلَالًا",
            "اِنْشِقَاقًا",
            "اِنْفِكَاكًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "المراجعة",
      "subtitle": "The master conjugation table, the study-aid table of where إِدْغَامٌ does and does not occur, and the full unit vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 8 Summary",
          "lines": [
            {
              "html": "This is a cumulative review of Unit 8: every model <bdi>مُضَاعَفٌ</bdi> verb across the <bdi>أَبْوَاب</bdi>, the master <bdi>تَصْرِيْفٌ صَغِيْرٌ</bdi> table, a study-aid table of where <bdi>إِدْغَامٌ</bdi> does and does not occur, and the full unit-end verb vocabulary. Nothing here is new — the quiz below draws only on terms and facts already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            },
            {
              "table": {
                "title": "Summary — التَّصْرِيْفُ الصَّغِيْرُ of every مُضَاعَفٌ verb of Unit 8 (p. 257)",
                "headers": [
                  "الْبَابُ",
                  "الْمَاضِيْ الْمَعْلُوْمُ",
                  "الْمُضَارِعُ الْمَعْلُوْمُ",
                  "الْمَصْدَرُ",
                  "الْمَاضِيْ الْمَجْهُوْلُ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ",
                  "الْمَصْدَرُ",
                  "الْأَمْرُ",
                  "النَّهْيُ",
                  "اِسْمُ الْفَاعِلِ",
                  "اِسْمُ الْمَفْعُوْلِ"
                ],
                "rows": [
                  [
                    "سَمِعَ",
                    "بَرَّ",
                    "يَبَرُّ",
                    "بِرًّا",
                    "بُرَّ",
                    "يُبَرُّ",
                    "بِرًّا",
                    "بَرَّ",
                    "لَا تَبَرَّ",
                    "بَارٌّ",
                    "مَبْرُوْرٌ"
                  ],
                  [
                    "ضَرَبَ",
                    "فَرَّ",
                    "يَفِرُّ",
                    "فِرَارًا",
                    "فُرَّ",
                    "يُفَرُّ",
                    "فِرَارًا",
                    "فِرَّ",
                    "لَا تَفِرَّ",
                    "فَارٌّ",
                    "مَفْرُوْرٌ"
                  ],
                  [
                    "نَصَرَ",
                    "مَدَّ",
                    "يَمُدُّ",
                    "مَدًّا",
                    "مُدَّ",
                    "يُمَدُّ",
                    "مَدًّا",
                    "مُدَّ",
                    "لَا تَمُدَّ",
                    "مَادٌّ",
                    "مَمْدُوْدٌ"
                  ],
                  [
                    "تَفْعِيْلًا (II)",
                    "حَبَّبَ",
                    "يُحَبِّبُ",
                    "تَحْبِيْبًا",
                    "حُبِّبَ",
                    "يُحَبَّبُ",
                    "تَحْبِيْبًا",
                    "حَبِّبْ",
                    "لَا تُحَبِّبْ",
                    "مُحَبِّبٌ",
                    "مُحَبَّبٌ"
                  ],
                  [
                    "مُفَاعَلَةً (III)",
                    "شَاقَّ",
                    "يُشَاقُّ",
                    "مُشَاقَّةً",
                    "شُوْقَّ",
                    "يُشَاقُّ",
                    "مُشَاقَّةً",
                    "شَاقَّ",
                    "لَا تُشَاقَّ",
                    "مُشَاقٌّ",
                    "مُشَاقٌّ"
                  ],
                  [
                    "إِفْعَالًا (IV)",
                    "أَحَبَّ",
                    "يُحِبُّ",
                    "إِحْبَابًا",
                    "أُحِبَّ",
                    "يُحَبُّ",
                    "إِحْبَابًا",
                    "أَحِبَّ",
                    "لَا تُحِبَّ",
                    "مُحِبٌّ",
                    "مُحَبٌّ"
                  ],
                  [
                    "تَفَعُّلًا (V)",
                    "تَحَقَّقَ",
                    "يَتَحَقَّقُ",
                    "تَحَقُّقًا",
                    "تُحُقِّقَ",
                    "يُتَحَقَّقُ",
                    "تَحَقُّقًا",
                    "تَحَقَّقْ",
                    "لَا تَتَحَقَّقْ",
                    "مُتَحَقِّقٌ",
                    "مُتَحَقَّقٌ"
                  ],
                  [
                    "تَفَاعُلًا (VI)",
                    "تَحَاجَّ",
                    "يَتَحَاجُّ",
                    "تَحَاجًّا",
                    "تُحُوْجَّ",
                    "يُتَحَاجُّ",
                    "تَحَاجًّا",
                    "تَحَاجَّ",
                    "لَا تَتَحَاجَّ",
                    "مُتَحَاجٌّ",
                    "مُتَحَاجٌّ"
                  ],
                  [
                    "اِنْفِعَالًا (VII)",
                    "اِنْشَقَّ",
                    "يَنْشَقُّ",
                    "اِنْشِقَاقًا",
                    "—",
                    "—",
                    "—",
                    "اِنْشَقَّ",
                    "لَا تَنْشَقَّ",
                    "مُنْشَقٌّ",
                    "—"
                  ],
                  [
                    "اِفْتِعَالًا (VIII)",
                    "اِشْتَدَّ",
                    "يَشْتَدُّ",
                    "اِشْتِدَادًا",
                    "اُشْتُدَّ",
                    "يُشْتَدُّ",
                    "اِشْتِدَادًا",
                    "اِشْتَدَّ",
                    "لَا تَشْتَدَّ",
                    "مُشْتَدٌّ",
                    "مُشْتَدٌّ"
                  ],
                  [
                    "اِفْعِلَالًا (IX)",
                    "اِحْمَرَّ",
                    "يَحْمَرُّ",
                    "اِحْمِرَارًا",
                    "—",
                    "—",
                    "—",
                    "اِحْمَرَّ",
                    "لَا تَحْمَرَّ",
                    "مُحْمَرٌّ",
                    "—"
                  ],
                  [
                    "اِسْتِفْعَالًا (X)",
                    "اِسْتَحَبَّ",
                    "يَسْتَحِبُّ",
                    "اِسْتِحْبَابًا",
                    "اُسْتُحِبَّ",
                    "يُسْتَحَبُّ",
                    "اِسْتِحْبَابًا",
                    "اِسْتَحِبَّ",
                    "لَا تَسْتَحِبَّ",
                    "مُسْتَحِبٌّ",
                    "مُسْتَحَبٌّ"
                  ],
                  [
                    "اِفْعِيْلَالًا (XI)",
                    "اِحْمَارَّ",
                    "يَحْمَارُّ",
                    "اِحْمِيْرَارًا",
                    "—",
                    "—",
                    "—",
                    "اِحْمَارَّ",
                    "لَا تَحْمَارَّ",
                    "مُحْمَارٌّ",
                    "—"
                  ],
                  [
                    "اِفْعِلَّالًا (IV)",
                    "اِقْشَعَرَّ",
                    "يَقْشَعِرُّ",
                    "اِقْشِعْرَارًا",
                    "—",
                    "—",
                    "—",
                    "اِقْشَعِرَّ",
                    "لَا تَقْشَعِرَّ",
                    "مُقْشَعِرٌّ",
                    "—"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "Where the إِدْغَامٌ does and does not happen in Unit 8",
                "headers": [
                  "Case",
                  "Example",
                  "Why"
                ],
                "rows": [
                  [
                    "الْغَائِبَاتُ / الْمُخَاطَبَاتُ of the مُضَارِعُ",
                    "يَمْدُدْنَ، يَشْتَدِدْنَ، يَحْمَرِرْنَ، يَقْشَعْرِرْنَ",
                    "The last root letter takes a sukūn before ـْنَ, so the two identical letters cannot merge"
                  ],
                  [
                    "الْمَاضِيْ from الْغَائِبَاتُ onwards",
                    "مَدَدْنَ، اِشْتَدَدْتَ، اِحْمَارَرْتُنَّ، اِقْشَعْرَرْنَا",
                    "The سَاكِن pronoun endings force the letters apart"
                  ],
                  [
                    "بَاب تَفْعِيْل (II) and بَاب تَفَعُّل (V)",
                    "حَبَّبَ يُحَبِّبُ، تَحَقَّقَ يَتَحَقَّقُ",
                    "No إِدْغَامٌ at all — the شَدَّةٌ belongs to the بَابٌ, not to the root"
                  ],
                  [
                    "بَاب مُفَاعَلَة (III) and بَاب تَفَاعُل (VI) passives",
                    "شُوْقَّ، تُحُوْجَّ",
                    "The أَلِفٌ of the بَابٌ becomes وَاوٌ after the ضَمَّةٌ"
                  ],
                  [
                    "نَقْلٌ before إِدْغَامٌ",
                    "يُحْبِبُ ← يُحِبُّ، يَسْتَحْبِبُ ← يَسْتَحِبُّ",
                    "أَبْوَاب إِفْعَال (IV) and اِسْتِفْعَال (X) move the كَسْرَةٌ back first"
                  ],
                  [
                    "فَاعِلٌ = مَفْعُوْلٌ after إِدْغَامٌ",
                    "مُشَاقٌّ، مُتَحَاجٌّ، مُشْتَدٌّ",
                    "The distinguishing كَسْرَةٌ / فَتْحَةٌ vanishes into the شَدَّةٌ"
                  ],
                  [
                    "لَازِمٌ أَبْوَابٌ",
                    "اِنْشَقَّ (VII)، اِحْمَرَّ (IX)، اِحْمَارَّ (XI)، اِقْشَعَرَّ",
                    "No مَجْهُوْلٌ and no اِسْمُ الْمَفْعُوْلِ — those boxes stay empty"
                  ]
                ]
              }
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does مُضَاعَفٌ mean?",
          "options": [
            "Verbs with a double letter in their root letters",
            "Merging two identical letters into one with a شَدَّةٌ",
            "Moving a harakah back onto the preceding sākin letter",
            "An intransitive verb (no object, hence no مَجْهُوْلٌ)"
          ],
          "correct": 0
        },
        {
          "q": "What does إِدْغَامٌ mean?",
          "options": [
            "Merging two identical letters into one with a شَدَّةٌ",
            "Verbs with a double letter in their root letters",
            "Moving a harakah back onto the preceding sākin letter",
            "An intransitive verb (no object, hence no مَجْهُوْلٌ)"
          ],
          "correct": 0
        },
        {
          "q": "What does نَقْلٌ mean?",
          "options": [
            "Moving a harakah back onto the preceding sākin letter",
            "Verbs with a double letter in their root letters",
            "Merging two identical letters into one with a شَدَّةٌ",
            "An intransitive verb (no object, hence no مَجْهُوْلٌ)"
          ],
          "correct": 0
        },
        {
          "q": "What does لَازِمٌ mean?",
          "options": [
            "An intransitive verb (no object, hence no مَجْهُوْلٌ)",
            "Verbs with a double letter in their root letters",
            "Merging two identical letters into one with a شَدَّةٌ",
            "Moving a harakah back onto the preceding sākin letter"
          ],
          "correct": 0
        },
        {
          "q": "What does الْحَرْفُ الْمُضَعَّفُ mean?",
          "options": [
            "The doubled letter (the عَيْن and لَام of the same kind)",
            "Verbs with a double letter in their root letters",
            "Merging two identical letters into one with a شَدَّةٌ",
            "Moving a harakah back onto the preceding sākin letter"
          ],
          "correct": 0
        },
        {
          "q": "According to the master summary table, which four أَبْوَابٌ have every مَجْهُوْلٌ cell and the اِسْمُ الْمَفْعُوْلِ cell left blank?",
          "options": [
            "اِنْفِعَالًا (VII)، اِفْعِلَالًا (IX)، اِفْعِيْلَالًا (XI)، and اِفْعِلَّالًا",
            "تَفْعِيْلًا (II) and تَفَعُّلًا (V)",
            "مُفَاعَلَةً (III) and تَفَاعُلًا (VI)",
            "اِفْتِعَالًا (VIII) and اِسْتِفْعَالًا (X)"
          ],
          "correct": 0,
          "explanation": "اِنْشَقَّ (VII)، اِحْمَرَّ (IX)، اِحْمَارَّ (XI) and اِقْشَعَرَّ (اِفْعِلَّال) are all لَازِمٌ, so the master table leaves their مَجْهُوْلٌ and اِسْمُ الْمَفْعُوْلِ cells blank."
        },
        {
          "q": "In which two أَبْوَابٌ does the doubled root letter show NO إِدْغَامٌ at all, conjugating like a fully regular صَحِيْحٌ verb?",
          "options": [
            "تَفْعِيْلًا (II) and تَفَعُّلًا (V)",
            "مُفَاعَلَةً (III) and تَفَاعُلًا (VI)",
            "إِفْعَالًا (IV) and اِسْتِفْعَالًا (X)",
            "اِنْفِعَالًا (VII) and اِفْتِعَالًا (VIII)"
          ],
          "correct": 0,
          "explanation": "حَبَّبَ (II) and تَحَقَّقَ (V) conjugate like regular صَحِيْحٌ verbs; the شَدَّةٌ in them belongs to the بَابٌ itself, not to a merger of the root letters."
        },
        {
          "q": "In the passives of بَاب مُفَاعَلَة (III) and بَاب تَفَاعُل (VI), what happens to the أَلِفٌ of the بَابٌ, e.g. in شُوْقَّ and تُحُوْجَّ?",
          "options": [
            "It becomes a وَاوٌ after the ضَمَّةٌ",
            "It is dropped entirely",
            "It becomes a يَاءٌ",
            "It stays unchanged"
          ],
          "correct": 0,
          "explanation": "The study-aid table (Unit 8 Summary) notes: the أَلِفٌ of the بَابٌ becomes وَاوٌ after the ضَمَّةٌ, e.g. شَاقَّ → شُوْقَّ and تَحَاجَّ → تُحُوْجَّ."
        },
        {
          "q": "Which two أَبْوَابٌ require نَقْلٌ (moving the harakah back) before إِدْغَامٌ can take place in the الْمُضَارِعُ, e.g. يُحْبِبُ ← يُحِبُّ؟",
          "options": [
            "إِفْعَالًا (IV) and اِسْتِفْعَالًا (X)",
            "تَفْعِيْلًا (II) and تَفَعُّلًا (V)",
            "مُفَاعَلَةً (III) and تَفَاعُلًا (VI)",
            "اِنْفِعَالًا (VII) and اِفْعِلَالًا (IX)"
          ],
          "correct": 0,
          "explanation": "أَبْوَاب إِفْعَال (IV) and اِسْتِفْعَال (X) move the كَسْرَةٌ back first (يُحْبِبُ ← يُحِبُّ، يَسْتَحْبِبُ ← يَسْتَحِبُّ), then إِدْغَامٌ takes place."
        },
        {
          "q": "In which two صِيَغٌ does the مُضَارِعٌ of a مُضَاعَفٌ verb never undergo إِدْغَامٌ, e.g. يَمْدُدْنَ and تَمْدُدْنَ?",
          "options": [
            "الْغَائِبَاتُ and الْمُخَاطَبَاتُ",
            "الْغَائِبُ and الْغَائِبَةُ",
            "الْمُتَكَلِّمُ and الْمُتَكَلِّمُوْنَ",
            "الْمُخَاطَبَانِ and الْمُخَاطَبَتَانِ"
          ],
          "correct": 0,
          "explanation": "The last root letter takes a sukūn before ـْنَ in الْغَائِبَاتُ and الْمُخَاطَبَاتُ, so the two identical letters cannot merge."
        },
        {
          "q": "After إِدْغَامٌ, in which three أَبْوَابٌ do اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ fall together into one identical shared form, e.g. مُشَاقٌّ، مُتَحَاجٌّ، مُشْتَدٌّ?",
          "options": [
            "مُفَاعَلَةً (III)، تَفَاعُلًا (VI)، and اِفْتِعَالًا (VIII)",
            "إِفْعَالًا (IV)، اِسْتِفْعَالًا (X)، and تَفْعِيْلًا (II)",
            "اِنْفِعَالًا (VII)، اِفْعِلَالًا (IX)، and اِفْعِيْلَالًا (XI)",
            "تَفَعُّلًا (V) and اِفْعِلَّالًا"
          ],
          "correct": 0,
          "explanation": "In مُفَاعَلَة، تَفَاعُل and اِفْتِعَال the distinguishing كَسْرَةٌ (فَاعِلٌ) / فَتْحَةٌ (مَفْعُوْلٌ) both vanish into the شَدَّةٌ, leaving one shared form."
        },
        {
          "q": "اِحْمَرَّ (بَاب اِفْعِلَال، IX) and اِحْمَارَّ (بَاب اِفْعِيْلَال، XI) both mean \"to be red\". What distinguishes them?",
          "options": [
            "اِحْمَارَّ is the intensive counterpart of اِحْمَرَّ, with an extra أَلِفٌ and مَصْدَرٌ اِحْمِيْرَارًا",
            "اِحْمَرَّ is the passive of اِحْمَارَّ",
            "اِحْمَارَّ is رُبَاعِيٌّ while اِحْمَرَّ is ثُلَاثِيٌّ",
            "اِحْمَارَّ has a مَجْهُوْلٌ but اِحْمَرَّ does not"
          ],
          "correct": 0,
          "explanation": "بَاب اِفْعِيْلَال (XI) is the intensive counterpart of بَاب اِفْعِلَال (IX): اِحْمَرَّ يَحْمَرُّ اِحْمِرَارًا vs اِحْمَارَّ يَحْمَارُّ اِحْمِيْرَارًا. Both are لَازِمٌ."
        },
        {
          "q": "اِقْشَعَرَّ يَقْشَعِرُّ اِقْشِعْرَارًا differs from the other ten أَبْوَابٌ of Unit 8 in what way?",
          "options": [
            "It is a رُبَاعِيٌّ (four-letter root) بَابٌ — the doubled letter is the fourth root letter, not the second/third",
            "It is the only بَابٌ with a full مَجْهُوْلٌ",
            "It is مُتَعَدٍّ while all the others are لَازِمٌ",
            "It has no اِسْمُ الْفَاعِلِ"
          ],
          "correct": 0,
          "explanation": "All other أَبْوَابٌ of Unit 8 are ثُلَاثِيٌّ (three-letter root, second and third letters doubled). اِقْشَعَرَّ is built on the four root letters ق ش ع ر, with the last one doubled."
        },
        {
          "q": "Which two of the eleven ثُلَاثِيٌّ مَزِيْدٌ فِيْهِ أَبْوَابٌ in this unit are the only ones with a complete مَجْهُوْلٌ (passive)?",
          "options": [
            "اِفْتِعَالًا (VIII) and اِسْتِفْعَالًا (X)",
            "اِنْفِعَالًا (VII) and اِفْعِلَالًا (IX)",
            "مُفَاعَلَةً (III) and تَفَاعُلًا (VI)",
            "تَفْعِيْلًا (II) and إِفْعَالًا (IV)"
          ],
          "correct": 0,
          "explanation": "اِشْتَدَّ (VIII) and اِسْتَحَبَّ (X) are the only two مُتَعَدٍّ-capable أَبْوَابٌ among the لَازِمٌ-heavy group VII–XI, so only they have filled-in مَجْهُوْلٌ columns."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "بِرًّا: write الْغَائِبَانِ مِنَ الْمَاضِيْ الْمَعْلُوْمِ.",
          "options": [
            "بَرَّا",
            "بَرَرْنَ",
            "يَبَرَّانِ",
            "بُرَّا"
          ],
          "correct": 0,
          "explanation": "بِرًّا is the مَصْدَرٌ of بَرَّ يَبَرُّ (بَاب سَمِعَ). The dual of the active past is بَرَّا; بُرَّا would be the passive."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "مُشَاقَّةً: write الْمُخَاطَبَانِ مِنَ الْأَمْرِ.",
          "options": [
            "شَاقَّا",
            "شَاقُّوْا",
            "شَاقِقْنَ",
            "لَا تُشَاقَّا"
          ],
          "correct": 0,
          "explanation": "مُشَاقَّةً is the مَصْدَرٌ of شَاقَّ (بَاب مُفَاعَلَة). The أَمْرٌ for You (two) is شَاقَّا; لَا تُشَاقَّا is the نَهْيُ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "مَدًّا: write الْمُفْرَدُ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مَادٌّ",
            "مَمْدُوْدٌ",
            "مُمِدٌّ",
            "مَادَّةٌ"
          ],
          "correct": 0,
          "explanation": "مَدَّ يَمُدُّ (بَاب نَصَرَ) gives the اِسْمُ الْفَاعِلِ مَادٌّ (from مَادِدٌ after إِدْغَامٌ). مَمْدُوْدٌ is the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِسْتِحْبَابًا: write الْغَائِبُ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "يَسْتَحِبُّ",
            "يُسْتَحَبُّ",
            "اِسْتَحَبَّ",
            "يَسْتَحْبِبُ"
          ],
          "correct": 0,
          "explanation": "بَاب اِسْتِفْعَال: يَسْتَحْبِبُ undergoes نَقْلٌ then إِدْغَامٌ, giving يَسْتَحِبُّ. يُسْتَحَبُّ is the مَجْهُوْلٌ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِنْشِقَاقًا: write الْمُخَاطَبُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَنْشَقَّ",
            "لَا تَنْشَقِّيْ",
            "اِنْشَقَّ",
            "لَا تُنْشَقَّ"
          ],
          "correct": 0,
          "explanation": "The نَهْيُ of اِنْشَقَّ for You (m/s) is لَا تَنْشَقَّ. لَا تَنْشَقِّيْ is feminine singular; بَاب اِنْفِعَال has no مَجْهُوْلٌ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "بِرًّا: write الْمُفْرَدُ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَبْرُوْرٌ",
            "بَارٌّ",
            "مُبِرٌّ",
            "مَبْرُوْرَةٌ"
          ],
          "correct": 0,
          "explanation": "بَرَّ is ثُلَاثِيٌّ مُجَرَّدٌ, so its اِسْمُ الْمَفْعُوْلِ is on the scale مَفْعُوْلٌ: مَبْرُوْرٌ. بَارٌّ is the اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "فِرَارًا: write الْغَائِبَةُ مِنَ الْمَاضِيْ الْمَجْهُوْلِ.",
          "options": [
            "فُرَّتْ",
            "فَرَّتْ",
            "فُرِرْنَ",
            "تُفَرُّ"
          ],
          "correct": 0,
          "explanation": "The passive past of فَرَّ is فُرَّ; for She it is فُرَّتْ. فَرَّتْ is the active, and تُفَرُّ is the passive present."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِحْمِرَارًا: write الْمُثَنَّى مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُحْمَرَّانِ",
            "مُحْمَارَّانِ",
            "مُحْمَرَّتَانِ",
            "مُحْمَرُّوْنَ"
          ],
          "correct": 0,
          "explanation": "اِحْمِرَارًا is the مَصْدَرٌ of اِحْمَرَّ (بَاب اِفْعِلَال); its اِسْمُ الْفَاعِلِ is مُحْمَرٌّ, dual مُحْمَرَّانِ. مُحْمَارَّانِ belongs to اِحْمَارَّ (XI)."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "مَدًّا: write الْغَائِبُوْنَ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "يُمَدُّوْنَ",
            "يَمُدُّوْنَ",
            "يُمْدَدْنَ",
            "مُدُّوْا"
          ],
          "correct": 0,
          "explanation": "The passive present of مَدَّ is يُمَدُّ; for They (m/p) it is يُمَدُّوْنَ. يَمُدُّوْنَ is the active."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِسْتِحْبَابًا: write الْمُثَنَّى مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُسْتَحَبَّانِ",
            "مُسْتَحِبَّانِ",
            "مُسْتَحَبَّتَانِ",
            "مُسْتَحَبُّوْنَ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ of اِسْتَحَبَّ is مُسْتَحَبٌّ (فَتْحَةٌ before the شَدَّةٌ); its dual is مُسْتَحَبَّانِ. مُسْتَحِبَّانِ (كَسْرَةٌ) is the اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِحْمِرَارًا: write الْغَائِبَاتُ مِنَ الْمَاضِيْ الْمَعْلُوْمِ.",
          "options": [
            "اِحْمَرَرْنَ",
            "اِحْمَرَّتَا",
            "يَحْمَرِرْنَ",
            "اِحْمَرَرْتُنَّ"
          ],
          "correct": 0,
          "explanation": "From الْغَائِبَاتُ onwards the مَاضِيْ does not merge: اِحْمَرَرْنَ. اِحْمَرَرْتُنَّ is الْمُخَاطَبَاتُ and يَحْمَرِرْنَ is the مُضَارِعُ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "بِرًّا: write الْمُخَاطَبَاتُ مِنَ النَّهْيِ.",
          "options": [
            "لَا تَبْرَرْنَ",
            "لَا تَبَرَّ",
            "لَا يَبْرَرْنَ",
            "لَا تَبَرِّيْ"
          ],
          "correct": 0,
          "explanation": "بَرَّ يَبَرُّ is بَاب سَمِعَ; the نَهْيُ for You (f/p) breaks the إِدْغَامٌ: لَا تَبْرَرْنَ. لَا يَبْرَرْنَ would be الْغَائِبَاتُ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِشْتِدَادًا: write الْغَائِبَتَانِ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "تُشْتَدَّانِ",
            "يُشْتَدَّانِ",
            "تَشْتَدَّانِ",
            "اُشْتُدَّتَا"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَتَانِ takes the تَـ prefix; the passive present is يُشْتَدُّ, so the feminine dual is تُشْتَدَّانِ. يُشْتَدَّانِ is الْغَائِبَانِ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "مُشَاقَّةً: write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُشَاقُّوْنَ",
            "مُشَاقَّاتٌ",
            "مُشْتَدُّوْنَ",
            "مُشَاقَّانِ"
          ],
          "correct": 0,
          "explanation": "In بَاب مُفَاعَلَة the اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ are both مُشَاقٌّ; the masculine plural is مُشَاقُّوْنَ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "إِحْبَابًا: write الْمُخَاطَبَةُ مِنَ الْمَاضِيْ الْمَعْلُوْمِ.",
          "options": [
            "أَحْبَبْتِ",
            "أَحْبَبْتَ",
            "أُحْبِبْتِ",
            "أَحَبَّتْ"
          ],
          "correct": 0,
          "explanation": "إِحْبَابًا is the مَصْدَرٌ of أَحَبَّ (بَاب إِفْعَال). You (f/s) is أَحْبَبْتِ with a كَسْرَةٌ on the تَ; أُحْبِبْتِ is the passive."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "تَحَاجًّا: write الْمُخَاطَبُوْنَ مِنَ الْأَمْرِ.",
          "options": [
            "تَحَاجُّوْا",
            "تَحَاجَجْنَ",
            "لَا تَتَحَاجُّوْا",
            "يَتَحَاجُّوْنَ"
          ],
          "correct": 0,
          "explanation": "تَحَاجًّا is the مَصْدَرٌ of تَحَاجَّ (بَاب تَفَاعُل); the أَمْرٌ for You (m/p) is تَحَاجُّوْا."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "فِرَارًا: write جَمْعُ الْمُذَكَّرِ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مَفْرُوْرُوْنَ",
            "فَارُّوْنَ",
            "مَفْرُوْرَاتٌ",
            "مَفْرُوْرَانِ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْمَفْعُوْلِ of فَرَّ is مَفْرُوْرٌ; جَمْعُ الْمُذَكَّرِ is مَفْرُوْرُوْنَ. فَارُّوْنَ is the plural اِسْمُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِسْتِحْبَابًا: write الْمُخَاطَبَتَانِ مِنَ الْمُضَارِعِ الْمَعْلُوْمِ.",
          "options": [
            "تَسْتَحِبَّانِ",
            "يَسْتَحِبَّانِ",
            "تُسْتَحَبَّانِ",
            "تَسْتَحْبِبْنَ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَتَانِ and الْمُخَاطَبَانِ share the same form تَسْتَحِبَّانِ. تُسْتَحَبَّانِ is the مَجْهُوْلٌ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "فِرَارًا: write الْمُتَكَلِّمُوْنَ مِنَ الْمَاضِيْ الْمَجْهُوْلِ.",
          "options": [
            "فُرِرْنَا",
            "فَرَرْنَا",
            "فُرِرْتُ",
            "نُفَرُّ"
          ],
          "correct": 0,
          "explanation": "The passive past of فَرَّ before the pronoun نَا breaks the إِدْغَامٌ and takes a كَسْرَةٌ: فُرِرْنَا. فَرَرْنَا is the active."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِشْتِدَادًا: write الْمُتَكَلِّمُ مِنَ الْمُضَارِعِ الْمَجْهُوْلِ.",
          "options": [
            "أُشْتَدُّ",
            "أَشْتَدُّ",
            "نُشْتَدُّ",
            "اُشْتُدِدْتُ"
          ],
          "correct": 0,
          "explanation": "The مُضَارِعُ الْمَجْهُوْلُ prefix carries a ضَمَّةٌ: أُشْتَدُّ. أَشْتَدُّ is the active and نُشْتَدُّ is الْمُتَكَلِّمُوْنَ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِنْشِقَاقًا: write الْمُفْرَدَةُ مِنَ اسْمِ الْفَاعِلِ.",
          "options": [
            "مُنْشَقَّةٌ",
            "مُنْشَقٌّ",
            "مُنْشَقَّاتٌ",
            "مَشْقُوْقَةٌ"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ الْفَاعِلِ of اِنْشَقَّ is مُنْشَقٌّ; its feminine singular is مُنْشَقَّةٌ. بَاب اِنْفِعَال has no اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 3 (p. 259)",
          "kind": "mcq",
          "prompt": "اِشْتِدَادًا: write جَمْعُ الْمُؤَنَّثِ مِنَ اسْمِ الْمَفْعُوْلِ.",
          "options": [
            "مُشْتَدَّاتٌ",
            "مُشْتَدِّاتٌ",
            "مُشْتَدَّتَانِ",
            "مَشْدُوْدَاتٌ"
          ],
          "correct": 0,
          "explanation": "In بَاب اِفْتِعَال the اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ are both مُشْتَدٌّ after إِدْغَامٌ; جَمْعُ الْمُؤَنَّثِ is مُشْتَدَّاتٌ."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿الضَّالِّيْنَ﴾ is which form?",
          "options": [
            "اِسْمُ الْفَاعِلِ of ضَلَّ, masculine plural — 'those who go astray'",
            "اِسْمُ الْمَفْعُوْلِ of ضَلَّ, masculine plural",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبُوْنَ of ضَلَّ",
            "اِسْمُ الْفَاعِلِ of أَضَلَّ, masculine plural"
          ],
          "correct": 0,
          "explanation": "ضَلَّ يَضِلُّ ضَلَالًا gives the اِسْمُ الْفَاعِلِ ضَالٌّ (from ضَالِلٌ); the masculine plural in the مَنْصُوْب/مَجْرُوْر state is الضَّالِّيْنَ. مُضِلٌّ would be from أَضَلَّ."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿رُدُّوْا﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمَاضِيْ الْمَجْهُوْلُ، الْغَائِبُوْنَ of رَدَّ — 'they were returned'",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبُوْنَ of رَدَّ",
            "الْأَمْرُ of الْمُخَاطَبُوْنَ from رَدَّ",
            "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبُوْنَ of رَدَّ"
          ],
          "correct": 0,
          "explanation": "The ضَمَّةٌ on the ر marks the مَجْهُوْلٌ: رُدَّ → رُدُّوْا. The active would be رَدُّوْا and the أَمْرٌ رُدُّوْا only with a هَمْزَةُ الْوَصْلِ context."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿يَطْمَئِنُّ﴾ belongs to which بَابٌ?",
          "options": [
            "بَاب اِفْعِلَّال — the رُبَاعِيٌّ مُضَاعَفٌ اِطْمَأَنَّ يَطْمَئِنُّ اِطْمِئْنَانًا",
            "بَاب اِفْعِلَال (IX)",
            "بَاب اِنْفِعَال (VII)",
            "بَاب اِفْتِعَال (VIII)"
          ],
          "correct": 0,
          "explanation": "اِطْمَأَنَّ is built on the four root letters ط م أ ن with the last one doubled — the same pattern as اِقْشَعَرَّ يَقْشَعِرُّ."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿اِصْفَرَّتْ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبَةُ of اِصْفَرَّ (بَاب اِفْعِلَال) — 'it turned yellow'",
            "الْمَاضِيْ الْمَجْهُوْلُ، الْغَائِبَةُ of اِصْفَرَّ",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبَةُ of اِصْفَارَّ (بَاب اِفْعِيْلَال)",
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبَةُ of اِصْفَرَّ"
          ],
          "correct": 0,
          "explanation": "اِصْفَرَّ يَصْفَرُّ اِصْفِرَارًا is بَاب اِفْعِلَال — a colour verb, لَازِمٌ, so it has no مَجْهُوْلٌ. اِصْفَارَّتْ (with أَلِفٌ) would be بَاب اِفْعِيْلَال."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿مُدْهَامَّتَانِ﴾ is which form?",
          "options": [
            "اِسْمُ الْفَاعِلِ of اِدْهَامَّ (بَاب اِفْعِيْلَال), feminine dual — 'two dark green ones'",
            "اِسْمُ الْمَفْعُوْلِ of اِدْهَامَّ, feminine dual",
            "اِسْمُ الْفَاعِلِ of اِدْهَمَّ (بَاب اِفْعِلَال), feminine dual",
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبَتَانِ of اِدْهَامَّ"
          ],
          "correct": 0,
          "explanation": "اِدْهَامَّ يَدْهَامُّ اِدْهِيْمَامًا is بَاب اِفْعِيْلَال; its اِسْمُ الْفَاعِلِ is مُدْهَامٌّ, feminine dual مُدْهَامَّتَانِ. Being لَازِمٌ it has no اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿تَنْشَقُّ﴾ is which صِيْغَةٌ, and from which بَابٌ?",
          "options": [
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبَةُ of اِنْشَقَّ (بَاب اِنْفِعَال) — 'it splits'",
            "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبَةُ of اِنْشَقَّ",
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْمُخَاطَبَةُ of شَقَّ (بَاب نَصَرَ)",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبَةُ of اِنْشَقَّ"
          ],
          "correct": 0,
          "explanation": "The نـ of the بَابٌ is visible in تَنْشَقُّ. بَاب اِنْفِعَال is لَازِمٌ, so a مَجْهُوْلٌ reading is impossible; the same form also serves الْمُخَاطَبُ."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿شَاقُّوْا﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبُوْنَ of شَاقَّ (بَاب مُفَاعَلَة) — 'they opposed'",
            "الْأَمْرُ of الْمُخَاطَبُوْنَ from شَاقَّ",
            "الْمَاضِيْ الْمَجْهُوْلُ، الْغَائِبُوْنَ of شَاقَّ",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبُوْنَ of شَقَّ"
          ],
          "correct": 0,
          "explanation": "شَاقَّ يُشَاقُّ مُشَاقَّةً is بَاب مُفَاعَلَة; They (m/p) of the active past is شَاقُّوْا. The passive would be شُوْقُّوْا."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿تَقْشَعِرُّ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبَةُ of اِقْشَعَرَّ — 'it shivers'",
            "الْمَاضِيْ الْمَعْلُوْمُ، الْغَائِبَةُ of اِقْشَعَرَّ",
            "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبَةُ of اِقْشَعَرَّ",
            "الْأَمْرُ of الْمُخَاطَبَةِ from اِقْشَعَرَّ"
          ],
          "correct": 0,
          "explanation": "اِقْشَعَرَّ يَقْشَعِرُّ اِقْشِعْرَارًا (بَاب اِفْعِلَّال); for She the مُضَارِعُ prefix is تَـ, giving تَقْشَعِرُّ. The بَابٌ is لَازِمٌ, so there is no مَجْهُوْلٌ."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿مُطْمَئِنٌّ﴾ is which form?",
          "options": [
            "اِسْمُ الْفَاعِلِ of اِطْمَأَنَّ — 'one who is at peace'",
            "اِسْمُ الْمَفْعُوْلِ of اِطْمَأَنَّ",
            "الْمَصْدَرُ of اِطْمَأَنَّ",
            "اِسْمُ الْفَاعِلِ of أَطْمَنَ (بَاب إِفْعَال)"
          ],
          "correct": 0,
          "explanation": "بَاب اِفْعِلَّال forms its اِسْمُ الْفَاعِلِ on the scale مُفْعَلِلٌّ: مُطْمَئِنٌّ (compare مُقْشَعِرٌّ). Its مَصْدَرٌ is اِطْمِئْنَانًا, and being لَازِمٌ it has no اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 4 (p. 260)",
          "kind": "mcq",
          "prompt": "﴿يُضِلُّ﴾ is which صِيْغَةٌ?",
          "options": [
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبُ of أَضَلَّ (بَاب إِفْعَال) — 'he misguides'",
            "الْمُضَارِعُ الْمَجْهُوْلُ، الْغَائِبُ of أَضَلَّ",
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبُ of ضَلَّ",
            "الْمُضَارِعُ الْمَعْلُوْمُ، الْغَائِبُ of اِضْطَرَّ"
          ],
          "correct": 0,
          "explanation": "أَضَلَّ يُضِلُّ إِضْلَالًا: the ضَمَّةٌ prefix with a كَسْرَةٌ before the شَدَّةٌ marks the active of بَاب إِفْعَال. يُضَلُّ (فَتْحَةٌ) would be the passive, and يَضِلُّ is the مُجَرَّدٌ ضَلَّ."
        },
        {
          "title": "Book Exercise 5 (p. 260)",
          "kind": "mcq",
          "prompt": "عَادَّانِ: state its root letters and its type.",
          "options": [
            "ع د د — مُضَاعَفٌ",
            "ع و د — أَجْوَفُ",
            "ع د و — نَاقِصٌ",
            "و ع د — مِثَالٌ"
          ],
          "correct": 0,
          "explanation": "عَادَّانِ is the dual of عَادٌّ, the اِسْمُ الْفَاعِلِ of عَدَّ يَعُدُّ — root ع د د, a doubled (مُضَاعَفٌ) verb."
        },
        {
          "title": "Book Exercise 5 (p. 260)",
          "kind": "mcq",
          "prompt": "عَائِدَانِ: state its root letters and its type.",
          "options": [
            "ع و د — أَجْوَفُ",
            "ع د د — مُضَاعَفٌ",
            "ع ي د — نَاقِصٌ",
            "و ع د — مِثَالٌ"
          ],
          "correct": 0,
          "explanation": "عَائِدَانِ is the dual of عَائِدٌ, the اِسْمُ الْفَاعِلِ of عَادَ يَعُوْدُ — root ع و د, with the weak letter in the middle (أَجْوَفُ)."
        },
        {
          "title": "Book Exercise 5 (p. 260)",
          "kind": "mcq",
          "prompt": "دَاعِيَانِ: state its root letters and its type.",
          "options": [
            "د ع و — نَاقِصٌ",
            "د ع ي — أَجْوَفُ",
            "د ع ع — مُضَاعَفٌ",
            "و د ع — مِثَالٌ"
          ],
          "correct": 0,
          "explanation": "دَاعِيَانِ is the dual of دَاعٍ, the اِسْمُ الْفَاعِلِ of دَعَا يَدْعُوْ — root د ع و, with the weak letter last (نَاقِصٌ)."
        },
        {
          "title": "Book Exercise 5 (p. 260)",
          "kind": "mcq",
          "prompt": "وَعَدْتُ: state its root letters and its type.",
          "options": [
            "و ع د — مِثَالٌ",
            "ع و د — أَجْوَفُ",
            "ع د د — مُضَاعَفٌ",
            "د ع و — نَاقِصٌ"
          ],
          "correct": 0,
          "explanation": "وَعَدْتُ is الْمُتَكَلِّمُ of وَعَدَ يَعِدُ — root و ع د, with the weak letter first (مِثَالٌ)."
        },
        {
          "title": "Book Exercise 5 (p. 260)",
          "kind": "mcq",
          "prompt": "عَدَدْتُ: state its root letters and its type.",
          "options": [
            "ع د د — مُضَاعَفٌ",
            "ع و د — أَجْوَفُ",
            "و ع د — مِثَالٌ",
            "ع د و — نَاقِصٌ"
          ],
          "correct": 0,
          "explanation": "عَدَدْتُ is الْمُتَكَلِّمُ of عَدَّ يَعُدُّ — root ع د د. Before the pronoun تُ the إِدْغَامٌ breaks apart, showing both د's."
        },
        {
          "title": "Book Exercise 5 (p. 260)",
          "kind": "mcq",
          "prompt": "تَعُوْدُ and تَعُدُّ differ how?",
          "options": [
            "تَعُوْدُ is أَجْوَفُ (root ع و د, 'you return'); تَعُدُّ is مُضَاعَفٌ (root ع د د, 'you count')",
            "Both are مُضَاعَفٌ; only the meaning differs",
            "تَعُوْدُ is نَاقِصٌ and تَعُدُّ is مِثَالٌ",
            "تَعُوْدُ is the passive of تَعُدُّ"
          ],
          "correct": 0,
          "explanation": "The وَاوٌ in تَعُوْدُ is a root letter (ع و د, أَجْوَفُ); the شَدَّةٌ in تَعُدُّ is the merger of two د's (ع د د, مُضَاعَفٌ)."
        },
        {
          "title": "Book Exercise 5 (p. 260)",
          "kind": "mcq",
          "prompt": "تَعِدُ: state its root letters and its type.",
          "options": [
            "و ع د — مِثَالٌ (the وَاوٌ is dropped in the مُضَارِعُ)",
            "ع د د — مُضَاعَفٌ",
            "ع و د — أَجْوَفُ",
            "ع د و — نَاقِصٌ"
          ],
          "correct": 0,
          "explanation": "وَعَدَ يَعِدُ is مِثَالٌ وَاوِيٌّ: the initial وَاوٌ is dropped in the مُضَارِعُ, so تَعِدُ has only ع and د visible."
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to love\"?",
          "options": [
            "أَحَبَّ يُحِبُّ",
            "اِحْمَارَّ يَحْمَارُّ",
            "اِحْمَرَّ يَحْمَرُّ",
            "اِخْضَرَّ يَخْضَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحَبَّ يُحِبُّ mean?",
          "options": [
            "to love",
            "to be red",
            "to be green",
            "to become black"
          ],
          "correct": 0
        },
        {
          "title": "to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحَبَّ يُحِبُّ?",
          "options": [
            "إِحْبَابًا",
            "اِحْمِيْرَارًا",
            "اِحْمِرَارًا",
            "اِخْضِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be red\"?",
          "options": [
            "اِحْمَارَّ يَحْمَارُّ",
            "اِحْمَرَّ يَحْمَرُّ",
            "اِخْضَرَّ يَخْضَرُّ",
            "اِدْهَامَّ يَدْهَامُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْمَارَّ يَحْمَارُّ mean?",
          "options": [
            "to be red",
            "to be green",
            "to become black",
            "to like"
          ],
          "correct": 0
        },
        {
          "title": "to be red (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْمَارَّ يَحْمَارُّ?",
          "options": [
            "اِحْمِيْرَارًا",
            "اِحْمِرَارًا",
            "اِخْضِرَارًا",
            "اِدْهِيْمَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be red\"?",
          "options": [
            "اِحْمَرَّ يَحْمَرُّ",
            "اِخْضَرَّ يَخْضَرُّ",
            "اِدْهَامَّ يَدْهَامُّ",
            "اِسْتَحَبَّ يَسْتَحِبُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be red",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْمَرَّ يَحْمَرُّ mean?",
          "options": [
            "to be red",
            "to be green",
            "to become black",
            "to like"
          ],
          "correct": 0
        },
        {
          "title": "to be red (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْمَرَّ يَحْمَرُّ?",
          "options": [
            "اِحْمِرَارًا",
            "اِخْضِرَارًا",
            "اِدْهِيْمَامًا",
            "اِسْتِحْبَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to be green",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be green\"?",
          "options": [
            "اِخْضَرَّ يَخْضَرُّ",
            "اِدْهَامَّ يَدْهَامُّ",
            "اِسْتَحَبَّ يَسْتَحِبُّ",
            "اِسْتَحَقَّ يَسْتَحِقُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be green",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِخْضَرَّ يَخْضَرُّ mean?",
          "options": [
            "to be green",
            "to become black",
            "to like",
            "to deserve"
          ],
          "correct": 0
        },
        {
          "title": "to be green (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِخْضَرَّ يَخْضَرُّ?",
          "options": [
            "اِخْضِرَارًا",
            "اِدْهِيْمَامًا",
            "اِسْتِحْبَابًا",
            "اِسْتِحْقَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to become black",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become black\"?",
          "options": [
            "اِدْهَامَّ يَدْهَامُّ",
            "اِسْتَحَبَّ يَسْتَحِبُّ",
            "اِسْتَحَقَّ يَسْتَحِقُّ",
            "اِسْتَقَرَّ يَسْتَقِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to become black",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِدْهَامَّ يَدْهَامُّ mean?",
          "options": [
            "to become black",
            "to like",
            "to deserve",
            "to settle"
          ],
          "correct": 0
        },
        {
          "title": "to become black (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِدْهَامَّ يَدْهَامُّ?",
          "options": [
            "اِدْهِيْمَامًا",
            "اِسْتِحْبَابًا",
            "اِسْتِحْقَاقًا",
            "اِسْتِقْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to like",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to like\"?",
          "options": [
            "اِسْتَحَبَّ يَسْتَحِبُّ",
            "اِسْتَحَقَّ يَسْتَحِقُّ",
            "اِسْتَقَرَّ يَسْتَقِرُّ",
            "اِسْتَمَرَّ يَسْتَمِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to like",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَحَبَّ يَسْتَحِبُّ mean?",
          "options": [
            "to like",
            "to deserve",
            "to settle",
            "to continue"
          ],
          "correct": 0
        },
        {
          "title": "to like (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَحَبَّ يَسْتَحِبُّ?",
          "options": [
            "اِسْتِحْبَابًا",
            "اِسْتِحْقَاقًا",
            "اِسْتِقْرَارًا",
            "اِسْتِمْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to deserve",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deserve\"?",
          "options": [
            "اِسْتَحَقَّ يَسْتَحِقُّ",
            "اِسْتَقَرَّ يَسْتَقِرُّ",
            "اِسْتَمَرَّ يَسْتَمِرُّ",
            "أَسَرَّ يُسِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to deserve",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَحَقَّ يَسْتَحِقُّ mean?",
          "options": [
            "to deserve",
            "to settle",
            "to continue",
            "to conceal"
          ],
          "correct": 0
        },
        {
          "title": "to deserve (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَحَقَّ يَسْتَحِقُّ?",
          "options": [
            "اِسْتِحْقَاقًا",
            "اِسْتِقْرَارًا",
            "اِسْتِمْرَارًا",
            "إِسْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to settle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to settle\"?",
          "options": [
            "اِسْتَقَرَّ يَسْتَقِرُّ",
            "اِسْتَمَرَّ يَسْتَمِرُّ",
            "أَسَرَّ يُسِرُّ",
            "اِسْوَادَّ يَسْوَادُّ"
          ],
          "correct": 0
        },
        {
          "title": "to settle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَقَرَّ يَسْتَقِرُّ mean?",
          "options": [
            "to settle",
            "to continue",
            "to conceal",
            "to be black"
          ],
          "correct": 0
        },
        {
          "title": "to settle (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَقَرَّ يَسْتَقِرُّ?",
          "options": [
            "اِسْتِقْرَارًا",
            "اِسْتِمْرَارًا",
            "إِسْرَارًا",
            "اِسْوِيْدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to continue",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to continue\"?",
          "options": [
            "اِسْتَمَرَّ يَسْتَمِرُّ",
            "أَسَرَّ يُسِرُّ",
            "اِسْوَادَّ يَسْوَادُّ",
            "اِسْوَدَّ يَسْوَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to continue",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَمَرَّ يَسْتَمِرُّ mean?",
          "options": [
            "to continue",
            "to conceal",
            "to be black",
            "to intensify"
          ],
          "correct": 0
        },
        {
          "title": "to continue (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَمَرَّ يَسْتَمِرُّ?",
          "options": [
            "اِسْتِمْرَارًا",
            "إِسْرَارًا",
            "اِسْوِيْدَادًا",
            "اِسْوِدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to conceal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to conceal\"?",
          "options": [
            "أَسَرَّ يُسِرُّ",
            "اِسْوَادَّ يَسْوَادُّ",
            "اِسْوَدَّ يَسْوَدُّ",
            "اِشْتَدَّ يَشْتَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to conceal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسَرَّ يُسِرُّ mean?",
          "options": [
            "to conceal",
            "to be black",
            "to intensify",
            "to shudder"
          ],
          "correct": 0
        },
        {
          "title": "to conceal (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسَرَّ يُسِرُّ?",
          "options": [
            "إِسْرَارًا",
            "اِسْوِيْدَادًا",
            "اِسْوِدَادًا",
            "اِشْتِدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be black\"?",
          "options": [
            "اِسْوَادَّ يَسْوَادُّ",
            "اِسْوَدَّ يَسْوَدُّ",
            "اِشْتَدَّ يَشْتَدُّ",
            "اِشْمَأَزَّ يَشْمَئِزُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْوَادَّ يَسْوَادُّ mean?",
          "options": [
            "to be black",
            "to intensify",
            "to shudder",
            "to be yellow"
          ],
          "correct": 0
        },
        {
          "title": "to be black (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْوَادَّ يَسْوَادُّ?",
          "options": [
            "اِسْوِيْدَادًا",
            "اِسْوِدَادًا",
            "اِشْتِدَادًا",
            "اِشْمِئْزَازًا"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be black\"?",
          "options": [
            "اِسْوَدَّ يَسْوَدُّ",
            "اِشْتَدَّ يَشْتَدُّ",
            "اِشْمَأَزَّ يَشْمَئِزُّ",
            "اِصْفَارَّ يَصْفَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be black",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْوَدَّ يَسْوَدُّ mean?",
          "options": [
            "to be black",
            "to intensify",
            "to shudder",
            "to be yellow"
          ],
          "correct": 0
        },
        {
          "title": "to be black (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْوَدَّ يَسْوَدُّ?",
          "options": [
            "اِسْوِدَادًا",
            "اِشْتِدَادًا",
            "اِشْمِئْزَازًا",
            "اِصْفِيْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to intensify",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to intensify\"?",
          "options": [
            "اِشْتَدَّ يَشْتَدُّ",
            "اِشْمَأَزَّ يَشْمَئِزُّ",
            "اِصْفَارَّ يَصْفَارُّ",
            "اِصْفَرَّ يَصْفَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to intensify",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِشْتَدَّ يَشْتَدُّ mean?",
          "options": [
            "to intensify",
            "to shudder",
            "to be yellow",
            "to force"
          ],
          "correct": 0
        },
        {
          "title": "to intensify (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِشْتَدَّ يَشْتَدُّ?",
          "options": [
            "اِشْتِدَادًا",
            "اِشْمِئْزَازًا",
            "اِصْفِيْرَارًا",
            "اِصْفِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to shudder",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to shudder\"?",
          "options": [
            "اِشْمَأَزَّ يَشْمَئِزُّ",
            "اِصْفَارَّ يَصْفَارُّ",
            "اِصْفَرَّ يَصْفَرُّ",
            "اِضْطَرَّ يَضْطَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to shudder",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِشْمَأَزَّ يَشْمَئِزُّ mean?",
          "options": [
            "to shudder",
            "to be yellow",
            "to force",
            "to misguide"
          ],
          "correct": 0
        },
        {
          "title": "to shudder (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِشْمَأَزَّ يَشْمَئِزُّ?",
          "options": [
            "اِشْمِئْزَازًا",
            "اِصْفِيْرَارًا",
            "اِصْفِرَارًا",
            "اِضْطِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be yellow\"?",
          "options": [
            "اِصْفَارَّ يَصْفَارُّ",
            "اِصْفَرَّ يَصْفَرُّ",
            "اِضْطَرَّ يَضْطَرُّ",
            "أَضَلَّ يُضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِصْفَارَّ يَصْفَارُّ mean?",
          "options": [
            "to be yellow",
            "to force",
            "to misguide",
            "to dwindle"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِصْفَارَّ يَصْفَارُّ?",
          "options": [
            "اِصْفِيْرَارًا",
            "اِصْفِرَارًا",
            "اِضْطِرَارًا",
            "إِضْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be yellow\"?",
          "options": [
            "اِصْفَرَّ يَصْفَرُّ",
            "اِضْطَرَّ يَضْطَرُّ",
            "أَضَلَّ يُضِلُّ",
            "اِضْمَحَلَّ يَضْمَحِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِصْفَرَّ يَصْفَرُّ mean?",
          "options": [
            "to be yellow",
            "to force",
            "to misguide",
            "to dwindle"
          ],
          "correct": 0
        },
        {
          "title": "to be yellow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِصْفَرَّ يَصْفَرُّ?",
          "options": [
            "اِصْفِرَارًا",
            "اِضْطِرَارًا",
            "إِضْلَالًا",
            "اِضْمِحْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to force",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to force\"?",
          "options": [
            "اِضْطَرَّ يَضْطَرُّ",
            "أَضَلَّ يُضِلُّ",
            "اِضْمَحَلَّ يَضْمَحِلُّ",
            "اِطْمَأَنَّ يَطْمَئِنُّ"
          ],
          "correct": 0
        },
        {
          "title": "to force",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِضْطَرَّ يَضْطَرُّ mean?",
          "options": [
            "to force",
            "to misguide",
            "to dwindle",
            "to be calm"
          ],
          "correct": 0
        },
        {
          "title": "to force (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِضْطَرَّ يَضْطَرُّ?",
          "options": [
            "اِضْطِرَارًا",
            "إِضْلَالًا",
            "اِضْمِحْلَالًا",
            "اِطْمِئْنَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to misguide",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to misguide\"?",
          "options": [
            "أَضَلَّ يُضِلُّ",
            "اِضْمَحَلَّ يَضْمَحِلُّ",
            "اِطْمَأَنَّ يَطْمَئِنُّ",
            "أَعَدَّ يُعِدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to misguide",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَضَلَّ يُضِلُّ mean?",
          "options": [
            "to misguide",
            "to dwindle",
            "to be calm",
            "to prepare"
          ],
          "correct": 0
        },
        {
          "title": "to misguide (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَضَلَّ يُضِلُّ?",
          "options": [
            "إِضْلَالًا",
            "اِضْمِحْلَالًا",
            "اِطْمِئْنَانًا",
            "إِعْدَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to dwindle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to dwindle\"?",
          "options": [
            "اِضْمَحَلَّ يَضْمَحِلُّ",
            "اِطْمَأَنَّ يَطْمَئِنُّ",
            "أَعَدَّ يُعِدُّ",
            "اِغْتَرَّ يَغْتَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to dwindle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِضْمَحَلَّ يَضْمَحِلُّ mean?",
          "options": [
            "to dwindle",
            "to be calm",
            "to prepare",
            "to be deceived"
          ],
          "correct": 0
        },
        {
          "title": "to dwindle (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِضْمَحَلَّ يَضْمَحِلُّ?",
          "options": [
            "اِضْمِحْلَالًا",
            "اِطْمِئْنَانًا",
            "إِعْدَادًا",
            "اِغْتِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be calm",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be calm\"?",
          "options": [
            "اِطْمَأَنَّ يَطْمَئِنُّ",
            "أَعَدَّ يُعِدُّ",
            "اِغْتَرَّ يَغْتَرُّ",
            "اِقْشَعَرَّ يَقْشَعِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be calm",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِطْمَأَنَّ يَطْمَئِنُّ mean?",
          "options": [
            "to be calm",
            "to prepare",
            "to be deceived",
            "to tremble"
          ],
          "correct": 0
        },
        {
          "title": "to be calm (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِطْمَأَنَّ يَطْمَئِنُّ?",
          "options": [
            "اِطْمِئْنَانًا",
            "إِعْدَادًا",
            "اِغْتِرَارًا",
            "اِقْشِعْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to prepare",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prepare\"?",
          "options": [
            "أَعَدَّ يُعِدُّ",
            "اِغْتَرَّ يَغْتَرُّ",
            "اِقْشَعَرَّ يَقْشَعِرُّ",
            "اِنْسَلَّ يَنْسَلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to prepare",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعَدَّ يُعِدُّ mean?",
          "options": [
            "to prepare",
            "to be deceived",
            "to tremble",
            "to sneak away"
          ],
          "correct": 0
        },
        {
          "title": "to prepare (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَعَدَّ يُعِدُّ?",
          "options": [
            "إِعْدَادًا",
            "اِغْتِرَارًا",
            "اِقْشِعْرَارًا",
            "اِنْسِلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be deceived",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be deceived\"?",
          "options": [
            "اِغْتَرَّ يَغْتَرُّ",
            "اِقْشَعَرَّ يَقْشَعِرُّ",
            "اِنْسَلَّ يَنْسَلُّ",
            "اِنْشَقَّ يَنْشَقُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be deceived",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِغْتَرَّ يَغْتَرُّ mean?",
          "options": [
            "to be deceived",
            "to tremble",
            "to sneak away",
            "to split"
          ],
          "correct": 0
        },
        {
          "title": "to be deceived (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِغْتَرَّ يَغْتَرُّ?",
          "options": [
            "اِغْتِرَارًا",
            "اِقْشِعْرَارًا",
            "اِنْسِلَالًا",
            "اِنْشِقَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to tremble",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tremble\"?",
          "options": [
            "اِقْشَعَرَّ يَقْشَعِرُّ",
            "اِنْسَلَّ يَنْسَلُّ",
            "اِنْشَقَّ يَنْشَقُّ",
            "اِنْفَكَّ يَنْفَكُّ"
          ],
          "correct": 0
        },
        {
          "title": "to tremble",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِقْشَعَرَّ يَقْشَعِرُّ mean?",
          "options": [
            "to tremble",
            "to sneak away",
            "to split",
            "to unwind"
          ],
          "correct": 0
        },
        {
          "title": "to tremble (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِقْشَعَرَّ يَقْشَعِرُّ?",
          "options": [
            "اِقْشِعْرَارًا",
            "اِنْسِلَالًا",
            "اِنْشِقَاقًا",
            "اِنْفِكَاكًا"
          ],
          "correct": 0
        },
        {
          "title": "to sneak away",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sneak away\"?",
          "options": [
            "اِنْسَلَّ يَنْسَلُّ",
            "اِنْشَقَّ يَنْشَقُّ",
            "اِنْفَكَّ يَنْفَكُّ",
            "اِنْقَضَّ يَنْقَضُّ"
          ],
          "correct": 0
        },
        {
          "title": "to sneak away",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْسَلَّ يَنْسَلُّ mean?",
          "options": [
            "to sneak away",
            "to split",
            "to unwind",
            "to descend upon"
          ],
          "correct": 0
        },
        {
          "title": "to sneak away (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْسَلَّ يَنْسَلُّ?",
          "options": [
            "اِنْسِلَالًا",
            "اِنْشِقَاقًا",
            "اِنْفِكَاكًا",
            "اِنْقِضَاضًا"
          ],
          "correct": 0
        },
        {
          "title": "to split",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to split\"?",
          "options": [
            "اِنْشَقَّ يَنْشَقُّ",
            "اِنْفَكَّ يَنْفَكُّ",
            "اِنْقَضَّ يَنْقَضُّ",
            "اِهْتَمَّ يَهْتَمُّ"
          ],
          "correct": 0
        },
        {
          "title": "to split",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْشَقَّ يَنْشَقُّ mean?",
          "options": [
            "to split",
            "to unwind",
            "to descend upon",
            "to worry about"
          ],
          "correct": 0
        },
        {
          "title": "to split (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْشَقَّ يَنْشَقُّ?",
          "options": [
            "اِنْشِقَاقًا",
            "اِنْفِكَاكًا",
            "اِنْقِضَاضًا",
            "اِهْتِمَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to unwind",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to unwind\"?",
          "options": [
            "اِنْفَكَّ يَنْفَكُّ",
            "اِنْقَضَّ يَنْقَضُّ",
            "اِهْتَمَّ يَهْتَمُّ",
            "بَرَّ يَبَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to unwind",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْفَكَّ يَنْفَكُّ mean?",
          "options": [
            "to unwind",
            "to descend upon",
            "to worry about",
            "to be reverent"
          ],
          "correct": 0
        },
        {
          "title": "to unwind (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْفَكَّ يَنْفَكُّ?",
          "options": [
            "اِنْفِكَاكًا",
            "اِنْقِضَاضًا",
            "اِهْتِمَامًا",
            "بِرًّا"
          ],
          "correct": 0
        },
        {
          "title": "to descend upon",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to descend upon\"?",
          "options": [
            "اِنْقَضَّ يَنْقَضُّ",
            "اِهْتَمَّ يَهْتَمُّ",
            "بَرَّ يَبَرُّ",
            "تَبَّ يَتِبُّ"
          ],
          "correct": 0
        },
        {
          "title": "to descend upon",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْقَضَّ يَنْقَضُّ mean?",
          "options": [
            "to descend upon",
            "to worry about",
            "to be reverent",
            "to perish"
          ],
          "correct": 0
        },
        {
          "title": "to descend upon (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْقَضَّ يَنْقَضُّ?",
          "options": [
            "اِنْقِضَاضًا",
            "اِهْتِمَامًا",
            "بِرًّا",
            "تَبًّا"
          ],
          "correct": 0
        },
        {
          "title": "to worry about",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to worry about\"?",
          "options": [
            "اِهْتَمَّ يَهْتَمُّ",
            "بَرَّ يَبَرُّ",
            "تَبَّ يَتِبُّ",
            "تَحَابَّ يَتَحَابُّ"
          ],
          "correct": 0
        },
        {
          "title": "to worry about",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِهْتَمَّ يَهْتَمُّ mean?",
          "options": [
            "to worry about",
            "to be reverent",
            "to perish",
            "to love one another"
          ],
          "correct": 0
        },
        {
          "title": "to worry about (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِهْتَمَّ يَهْتَمُّ?",
          "options": [
            "اِهْتِمَامًا",
            "بِرًّا",
            "تَبًّا",
            "تَحَابًّا"
          ],
          "correct": 0
        },
        {
          "title": "to be reverent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be reverent\"?",
          "options": [
            "بَرَّ يَبَرُّ",
            "تَبَّ يَتِبُّ",
            "تَحَابَّ يَتَحَابُّ",
            "تَحَاجَّ يَتَحَاجُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be reverent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَرَّ يَبَرُّ mean?",
          "options": [
            "to be reverent",
            "to perish",
            "to love one another",
            "to carry on a dispute"
          ],
          "correct": 0
        },
        {
          "title": "to be reverent (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَرَّ يَبَرُّ?",
          "options": [
            "بِرًّا",
            "تَبًّا",
            "تَحَابًّا",
            "تَحَاجًّا"
          ],
          "correct": 0
        },
        {
          "title": "to perish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perish\"?",
          "options": [
            "تَبَّ يَتِبُّ",
            "تَحَابَّ يَتَحَابُّ",
            "تَحَاجَّ يَتَحَاجُّ",
            "تَحَبَّبَ يَتَحَبَّبُ"
          ],
          "correct": 0
        },
        {
          "title": "to perish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَبَّ يَتِبُّ mean?",
          "options": [
            "to perish",
            "to love one another",
            "to carry on a dispute",
            "to show love"
          ],
          "correct": 0
        },
        {
          "title": "to perish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَبَّ يَتِبُّ?",
          "options": [
            "تَبًّا",
            "تَحَابًّا",
            "تَحَاجًّا",
            "تَحَبُّبًا"
          ],
          "correct": 0
        },
        {
          "title": "to love one another",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to love one another\"?",
          "options": [
            "تَحَابَّ يَتَحَابُّ",
            "تَحَاجَّ يَتَحَاجُّ",
            "تَحَبَّبَ يَتَحَبَّبُ",
            "تَحَقَّقَ يَتَحَقَّقُ"
          ],
          "correct": 0
        },
        {
          "title": "to love one another",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَابَّ يَتَحَابُّ mean?",
          "options": [
            "to love one another",
            "to carry on a dispute",
            "to show love",
            "to prove true"
          ],
          "correct": 0
        },
        {
          "title": "to love one another (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَابَّ يَتَحَابُّ?",
          "options": [
            "تَحَابًّا",
            "تَحَاجًّا",
            "تَحَبُّبًا",
            "تَحَقُّقًا"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a dispute",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to carry on a dispute\"?",
          "options": [
            "تَحَاجَّ يَتَحَاجُّ",
            "تَحَبَّبَ يَتَحَبَّبُ",
            "تَحَقَّقَ يَتَحَقَّقُ",
            "تَسَارَّ يَتَسَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a dispute",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَاجَّ يَتَحَاجُّ mean?",
          "options": [
            "to carry on a dispute",
            "to show love",
            "to prove true",
            "to exchange secrets"
          ],
          "correct": 0
        },
        {
          "title": "to carry on a dispute (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَاجَّ يَتَحَاجُّ?",
          "options": [
            "تَحَاجًّا",
            "تَحَبُّبًا",
            "تَحَقُّقًا",
            "تَسَارًّا"
          ],
          "correct": 0
        },
        {
          "title": "to show love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to show love\"?",
          "options": [
            "تَحَبَّبَ يَتَحَبَّبُ",
            "تَحَقَّقَ يَتَحَقَّقُ",
            "تَسَارَّ يَتَسَارُّ",
            "تَشَتَّتَ يَتَشَتَّتُ"
          ],
          "correct": 0
        },
        {
          "title": "to show love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَبَّبَ يَتَحَبَّبُ mean?",
          "options": [
            "to show love",
            "to prove true",
            "to exchange secrets",
            "to be scattered"
          ],
          "correct": 0
        },
        {
          "title": "to show love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَبَّبَ يَتَحَبَّبُ?",
          "options": [
            "تَحَبُّبًا",
            "تَحَقُّقًا",
            "تَسَارًّا",
            "تَشَتُّتًا"
          ],
          "correct": 0
        },
        {
          "title": "to prove true",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prove true\"?",
          "options": [
            "تَحَقَّقَ يَتَحَقَّقُ",
            "تَسَارَّ يَتَسَارُّ",
            "تَشَتَّتَ يَتَشَتَّتُ",
            "تَعَارَّ يَتَعَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to prove true",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَقَّقَ يَتَحَقَّقُ mean?",
          "options": [
            "to prove true",
            "to exchange secrets",
            "to be scattered",
            "to stay awake at night"
          ],
          "correct": 0
        },
        {
          "title": "to prove true (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَقَّقَ يَتَحَقَّقُ?",
          "options": [
            "تَحَقُّقًا",
            "تَسَارًّا",
            "تَشَتُّتًا",
            "تَعَارًّا"
          ],
          "correct": 0
        },
        {
          "title": "to exchange secrets",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to exchange secrets\"?",
          "options": [
            "تَسَارَّ يَتَسَارُّ",
            "تَشَتَّتَ يَتَشَتَّتُ",
            "تَعَارَّ يَتَعَارُّ",
            "تَكَرَّرَ يَتَكَرَّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to exchange secrets",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَسَارَّ يَتَسَارُّ mean?",
          "options": [
            "to exchange secrets",
            "to be scattered",
            "to stay awake at night",
            "to be repeated"
          ],
          "correct": 0
        },
        {
          "title": "to exchange secrets (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَسَارَّ يَتَسَارُّ?",
          "options": [
            "تَسَارًّا",
            "تَشَتُّتًا",
            "تَعَارًّا",
            "تَكَرُّرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be scattered",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be scattered\"?",
          "options": [
            "تَشَتَّتَ يَتَشَتَّتُ",
            "تَعَارَّ يَتَعَارُّ",
            "تَكَرَّرَ يَتَكَرَّرُ",
            "حَاجَّ يُحَاجُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be scattered",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَشَتَّتَ يَتَشَتَّتُ mean?",
          "options": [
            "to be scattered",
            "to stay awake at night",
            "to be repeated",
            "to argue"
          ],
          "correct": 0
        },
        {
          "title": "to be scattered (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَشَتَّتَ يَتَشَتَّتُ?",
          "options": [
            "تَشَتُّتًا",
            "تَعَارًّا",
            "تَكَرُّرًا",
            "مُحَاجَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to stay awake at night",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to stay awake at night\"?",
          "options": [
            "تَعَارَّ يَتَعَارُّ",
            "تَكَرَّرَ يَتَكَرَّرُ",
            "حَاجَّ يُحَاجُّ",
            "حَبَّبَ يُحَبِّبُ"
          ],
          "correct": 0
        },
        {
          "title": "to stay awake at night",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعَارَّ يَتَعَارُّ mean?",
          "options": [
            "to stay awake at night",
            "to be repeated",
            "to argue",
            "to cause to love"
          ],
          "correct": 0
        },
        {
          "title": "to stay awake at night (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعَارَّ يَتَعَارُّ?",
          "options": [
            "تَعَارًّا",
            "تَكَرُّرًا",
            "مُحَاجَّةً",
            "تَحْبِيْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to be repeated",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be repeated\"?",
          "options": [
            "تَكَرَّرَ يَتَكَرَّرُ",
            "حَاجَّ يُحَاجُّ",
            "حَبَّبَ يُحَبِّبُ",
            "خَفَّفَ يُخَفِّفُ"
          ],
          "correct": 0
        },
        {
          "title": "to be repeated",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَكَرَّرَ يَتَكَرَّرُ mean?",
          "options": [
            "to be repeated",
            "to argue",
            "to cause to love",
            "to make lighter"
          ],
          "correct": 0
        },
        {
          "title": "to be repeated (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَكَرَّرَ يَتَكَرَّرُ?",
          "options": [
            "تَكَرُّرًا",
            "مُحَاجَّةً",
            "تَحْبِيْبًا",
            "تَخْفِيْفًا"
          ],
          "correct": 0
        },
        {
          "title": "to argue",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to argue\"?",
          "options": [
            "حَاجَّ يُحَاجُّ",
            "حَبَّبَ يُحَبِّبُ",
            "خَفَّفَ يُخَفِّفُ",
            "زَلَّ يَزِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to argue",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاجَّ يُحَاجُّ mean?",
          "options": [
            "to argue",
            "to cause to love",
            "to make lighter",
            "to slip"
          ],
          "correct": 0
        },
        {
          "title": "to argue (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَاجَّ يُحَاجُّ?",
          "options": [
            "مُحَاجَّةً",
            "تَحْبِيْبًا",
            "تَخْفِيْفًا",
            "زَلَلًا"
          ],
          "correct": 0
        },
        {
          "title": "to cause to love",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cause to love\"?",
          "options": [
            "حَبَّبَ يُحَبِّبُ",
            "خَفَّفَ يُخَفِّفُ",
            "زَلَّ يَزِلُّ",
            "شَاقَّ يُشَاقُّ"
          ],
          "correct": 0
        },
        {
          "title": "to cause to love",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَبَّبَ يُحَبِّبُ mean?",
          "options": [
            "to cause to love",
            "to make lighter",
            "to slip",
            "to act adversely"
          ],
          "correct": 0
        },
        {
          "title": "to cause to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَبَّبَ يُحَبِّبُ?",
          "options": [
            "تَحْبِيْبًا",
            "تَخْفِيْفًا",
            "زَلَلًا",
            "مُشَاقَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to make lighter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make lighter\"?",
          "options": [
            "خَفَّفَ يُخَفِّفُ",
            "زَلَّ يَزِلُّ",
            "شَاقَّ يُشَاقُّ",
            "شَدَّ يَشُدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to make lighter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَفَّفَ يُخَفِّفُ mean?",
          "options": [
            "to make lighter",
            "to slip",
            "to act adversely",
            "to tighten"
          ],
          "correct": 0
        },
        {
          "title": "to make lighter (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَفَّفَ يُخَفِّفُ?",
          "options": [
            "تَخْفِيْفًا",
            "زَلَلًا",
            "مُشَاقَّةً",
            "شَدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to slip",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to slip\"?",
          "options": [
            "زَلَّ يَزِلُّ",
            "شَاقَّ يُشَاقُّ",
            "شَدَّ يَشُدُّ",
            "صَدَّ يَصُدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to slip",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَلَّ يَزِلُّ mean?",
          "options": [
            "to slip",
            "to act adversely",
            "to tighten",
            "to turn away"
          ],
          "correct": 0
        },
        {
          "title": "to slip (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَلَّ يَزِلُّ?",
          "options": [
            "زَلَلًا",
            "مُشَاقَّةً",
            "شَدًّا",
            "صَدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to act adversely",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to act adversely\"?",
          "options": [
            "شَاقَّ يُشَاقُّ",
            "شَدَّ يَشُدُّ",
            "صَدَّ يَصُدُّ",
            "ضَلَّ يَضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to act adversely",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاقَّ يُشَاقُّ mean?",
          "options": [
            "to act adversely",
            "to tighten",
            "to turn away",
            "to go astray"
          ],
          "correct": 0
        },
        {
          "title": "to act adversely (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَاقَّ يُشَاقُّ?",
          "options": [
            "مُشَاقَّةً",
            "شَدًّا",
            "صَدًّا",
            "ضَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to tighten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to tighten\"?",
          "options": [
            "شَدَّ يَشُدُّ",
            "صَدَّ يَصُدُّ",
            "ضَلَّ يَضِلُّ",
            "عَضَّ يَعَضُّ"
          ],
          "correct": 0
        },
        {
          "title": "to tighten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَدَّ يَشُدُّ mean?",
          "options": [
            "to tighten",
            "to turn away",
            "to go astray",
            "to bite"
          ],
          "correct": 0
        },
        {
          "title": "to tighten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَدَّ يَشُدُّ?",
          "options": [
            "شَدًّا",
            "صَدًّا",
            "ضَلَالًا",
            "عَضًّا"
          ],
          "correct": 0
        },
        {
          "title": "to turn away",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to turn away\"?",
          "options": [
            "صَدَّ يَصُدُّ",
            "ضَلَّ يَضِلُّ",
            "عَضَّ يَعَضُّ",
            "فَرَّ يَفِرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to turn away",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدَّ يَصُدُّ mean?",
          "options": [
            "to turn away",
            "to go astray",
            "to bite",
            "to flee"
          ],
          "correct": 0
        },
        {
          "title": "to turn away (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَدَّ يَصُدُّ?",
          "options": [
            "صَدًّا",
            "ضَلَالًا",
            "عَضًّا",
            "فِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to go astray",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to go astray\"?",
          "options": [
            "ضَلَّ يَضِلُّ",
            "عَضَّ يَعَضُّ",
            "فَرَّ يَفِرُّ",
            "لَذَّ يَلَذُّ"
          ],
          "correct": 0
        },
        {
          "title": "to go astray",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَلَّ يَضِلُّ mean?",
          "options": [
            "to go astray",
            "to bite",
            "to flee",
            "to enjoy"
          ],
          "correct": 0
        },
        {
          "title": "to go astray (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَلَّ يَضِلُّ?",
          "options": [
            "ضَلَالًا",
            "عَضًّا",
            "فِرَارًا",
            "لَذَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to bite",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bite\"?",
          "options": [
            "عَضَّ يَعَضُّ",
            "فَرَّ يَفِرُّ",
            "لَذَّ يَلَذُّ",
            "مَدَّ يَمُدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to bite",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَضَّ يَعَضُّ mean?",
          "options": [
            "to bite",
            "to flee",
            "to enjoy",
            "to extend"
          ],
          "correct": 0
        },
        {
          "title": "to bite (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَضَّ يَعَضُّ?",
          "options": [
            "عَضًّا",
            "فِرَارًا",
            "لَذَّةً",
            "مَدًّا"
          ],
          "correct": 0
        },
        {
          "title": "to flee",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to flee\"?",
          "options": [
            "فَرَّ يَفِرُّ",
            "لَذَّ يَلَذُّ",
            "مَدَّ يَمُدُّ",
            "مَرَّ يَمُرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to flee",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَرَّ يَفِرُّ mean?",
          "options": [
            "to flee",
            "to enjoy",
            "to extend",
            "to pass"
          ],
          "correct": 0
        },
        {
          "title": "to flee (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَرَّ يَفِرُّ?",
          "options": [
            "فِرَارًا",
            "لَذَّةً",
            "مَدًّا",
            "مُرُوْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to enjoy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to enjoy\"?",
          "options": [
            "لَذَّ يَلَذُّ",
            "مَدَّ يَمُدُّ",
            "مَرَّ يَمُرُّ",
            "مَسَّ يَمَسُّ"
          ],
          "correct": 0
        },
        {
          "title": "to enjoy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَذَّ يَلَذُّ mean?",
          "options": [
            "to enjoy",
            "to extend",
            "to pass",
            "to touch, feel"
          ],
          "correct": 0
        },
        {
          "title": "to enjoy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَذَّ يَلَذُّ?",
          "options": [
            "لَذَّةً",
            "مَدًّا",
            "مُرُوْرًا",
            "مَسًّا"
          ],
          "correct": 0
        },
        {
          "title": "to extend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to extend\"?",
          "options": [
            "مَدَّ يَمُدُّ",
            "مَرَّ يَمُرُّ",
            "مَسَّ يَمَسُّ",
            "هَدَّدَ يُهَدِّدُ"
          ],
          "correct": 0
        },
        {
          "title": "to extend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَدَّ يَمُدُّ mean?",
          "options": [
            "to extend",
            "to pass",
            "to touch, feel",
            "to threaten"
          ],
          "correct": 0
        },
        {
          "title": "to extend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَدَّ يَمُدُّ?",
          "options": [
            "مَدًّا",
            "مُرُوْرًا",
            "مَسًّا",
            "تَهْدِيْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to pass",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to pass\"?",
          "options": [
            "مَرَّ يَمُرُّ",
            "مَسَّ يَمَسُّ",
            "هَدَّدَ يُهَدِّدُ",
            "هَلَّلَ يُهَلِّلُ"
          ],
          "correct": 0
        },
        {
          "title": "to pass",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرَّ يَمُرُّ mean?",
          "options": [
            "to pass",
            "to touch, feel",
            "to threaten",
            "to glorify"
          ],
          "correct": 0
        },
        {
          "title": "to pass (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَرَّ يَمُرُّ?",
          "options": [
            "مُرُوْرًا",
            "مَسًّا",
            "تَهْدِيْدًا",
            "تَهْلِيْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to touch, feel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to touch, feel\"?",
          "options": [
            "مَسَّ يَمَسُّ",
            "هَدَّدَ يُهَدِّدُ",
            "هَلَّلَ يُهَلِّلُ",
            "أَحَبَّ يُحِبُّ"
          ],
          "correct": 0
        },
        {
          "title": "to touch, feel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسَّ يَمَسُّ mean?",
          "options": [
            "to touch, feel",
            "to threaten",
            "to glorify",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "to touch, feel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَسَّ يَمَسُّ?",
          "options": [
            "مَسًّا",
            "تَهْدِيْدًا",
            "تَهْلِيْلًا",
            "إِحْبَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to threaten",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to threaten\"?",
          "options": [
            "هَدَّدَ يُهَدِّدُ",
            "هَلَّلَ يُهَلِّلُ",
            "أَحَبَّ يُحِبُّ",
            "اِحْمَارَّ يَحْمَارُّ"
          ],
          "correct": 0
        },
        {
          "title": "to threaten",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَدَّدَ يُهَدِّدُ mean?",
          "options": [
            "to threaten",
            "to glorify",
            "to love",
            "to be red"
          ],
          "correct": 0
        },
        {
          "title": "to threaten (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَدَّدَ يُهَدِّدُ?",
          "options": [
            "تَهْدِيْدًا",
            "تَهْلِيْلًا",
            "إِحْبَابًا",
            "اِحْمِيْرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to glorify",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to glorify\"?",
          "options": [
            "هَلَّلَ يُهَلِّلُ",
            "أَحَبَّ يُحِبُّ",
            "اِحْمَارَّ يَحْمَارُّ",
            "اِحْمَرَّ يَحْمَرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to glorify",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَلَّلَ يُهَلِّلُ mean?",
          "options": [
            "to glorify",
            "to love",
            "to be red",
            "to be green"
          ],
          "correct": 0
        },
        {
          "title": "to glorify (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَلَّلَ يُهَلِّلُ?",
          "options": [
            "تَهْلِيْلًا",
            "إِحْبَابًا",
            "اِحْمِيْرَارًا",
            "اِحْمِرَارًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

// Module 01 — The Verb (First Steps to Understanding Sarf, Unit 1, pp. 16-71)
//
// Converted from content-fstu-sarf/unit1-lesson1.js..unit1-lesson12.js plus
// unit1-summary.js, following the same conversion pattern as the sister
// "From the Start" course (see content-fstu/module-01.js's schema notes):
// raw sections/blocks -> concepts/lines, raw exercise items -> MCQ
// exercise.items, raw quiz/exerciseBank/vocab -> quiz/bank[]. l13 is a
// cumulative "Unit 1 Summary" review lesson (no exercise, no summary
// sidebar -- mirrors content-fstu/module-03.js's l6), built from
// unit1-summary.js's key terms and unit-end verb vocabulary.
export default {
  "id": "s-u1",
  "title": "الفعل",
  "heading": "أَسَاسِيَّاتُ الْفِعْلِ",
  "blurb": "An introduction to verb conjugation: the fourteen صِيَغ, the two tenses, and the ten أَبْوَاب patterns.",
  "lessons": [
    {
      "id": "l1",
      "title": "مُقَدِّمَةٌ",
      "subtitle": "Introduction: Verbs and Conjugation — فِعْلٌ and ضَمِيْرٌ, and the fourteen صِيَغٌ",
      "concepts": [
        {
          "heading": "The Components of a Verb",
          "lines": [
            {
              "html": "An Arabic verb must contain the following two components: (1) <bdi>فِعْلٌ</bdi>: the verb. (2) <bdi>ضَمِيْرٌ</bdi>: the pronoun — the person, gender, and number of the one carrying out the action.",
              "list": false
            },
            {
              "html": "<bdi>فَعَلْتُمْ</bdi> — consists of a verb (<bdi>فَعَلَ</bdi>) and a subject pronoun (<bdi>تُمْ</bdi>)",
              "list": true,
              "bullet": true
            },
            {
              "html": "The pronoun attached to the verb can be changed into different forms to show different person, gender, and number. This change is called conjugation, <bdi>تَصْرِيْفٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In فَعَلْتُمْ, which part is the subject pronoun (ضَمِيْرٌ)?",
            "kind": "mcq",
            "options": ["فَعَلَ", "تُمْ", "فَ", "لْتُ"],
            "correct": 1
          }
        },
        {
          "heading": "Person",
          "lines": [
            {
              "html": "There are three types of persons: (1) Third person, i.e., he, she, or they. In Arabic, this is called <bdi>غَائِبٌ</bdi>; the person being spoken about. (2) Second person, i.e., you. In Arabic, this is called <bdi>مُخَاطَبٌ</bdi>; the addressee. (3) First person, i.e., I or we. In Arabic this is called <bdi>مُتَكَلِّمٌ</bdi>; the person speaking about themselves.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the غَائِبٌ؟",
            "kind": "mcq",
            "options": ["The addressee — 'you'", "The person being spoken about — 'he, she, or they'", "The person speaking about themselves — 'I or we'", "The feminine gender"],
            "correct": 1
          }
        },
        {
          "heading": "Gender",
          "lines": [
            {
              "html": "In Arabic, there are two genders: (1) Masculine, <bdi>مُذَكَّرٌ</bdi>. (2) Feminine, <bdi>مُؤَنَّثٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Which term names the feminine gender?",
            "kind": "mcq",
            "options": ["مُذَكَّرٌ", "مُؤَنَّثٌ", "مُفْرَدٌ", "جَمْعٌ"],
            "correct": 1
          }
        },
        {
          "heading": "Number",
          "lines": [
            {
              "html": "There are three numbers: (1) Singular, <bdi>مُفْرَدٌ</bdi>. (2) Dual, <bdi>مُثَنًّى</bdi>. (3) Plural, <bdi>جَمْعٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "مُثَنًّى refers to which number?",
            "kind": "mcq",
            "options": ["Singular", "Dual", "Plural", "Neither singular, dual, nor plural"],
            "correct": 1
          }
        },
        {
          "heading": "Conjugation",
          "lines": [
            {
              "html": "A verb can be conjugated into different forms to reflect different types of pronouns. Each form of the verb with the pronoun is known as a <bdi>صِيْغَةٌ</bdi>. Its plural is <bdi>صِيَغٌ</bdi>.",
              "list": false
            },
            {
              "html": "The first person, <bdi>الْمُتَكَلِّمُ</bdi>, does not have a dual and it is shared for both masculine and feminine. As a result, there are only 14 <bdi>صِيَغٌ</bdi>, not 18.",
              "list": false
            },
            {
              "html": "It is important to memorise the name of all the <bdi>صِيَغٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "The 14 صِيَغٌ",
                "headers": [
                  "صِيْغَةٌ",
                  "Person",
                  "Gender",
                  "Number",
                  "English"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "Third Person",
                    "Masculine",
                    "Singular",
                    "He/It"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "Third Person",
                    "Masculine",
                    "Dual",
                    "They (m/d)"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "Third Person",
                    "Masculine",
                    "Plural",
                    "They (m/p)"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "Third Person",
                    "Feminine",
                    "Singular",
                    "She/It"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "Third Person",
                    "Feminine",
                    "Dual",
                    "They (f/d)"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "Third Person",
                    "Feminine",
                    "Plural",
                    "They (f/p)"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "Second Person",
                    "Masculine",
                    "Singular",
                    "You (m/s)"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "Second Person",
                    "Masculine",
                    "Dual",
                    "You (m/d)"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "Second Person",
                    "Masculine",
                    "Plural",
                    "You (m/p)"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "Second Person",
                    "Feminine",
                    "Singular",
                    "You (f/s)"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "Second Person",
                    "Feminine",
                    "Dual",
                    "You (f/d)"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "Second Person",
                    "Feminine",
                    "Plural",
                    "You (f/p)"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "First Person",
                    "Masculine/Feminine",
                    "Singular",
                    "I"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "First Person",
                    "Masculine/Feminine",
                    "Dual/Plural",
                    "We"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "الْمُخَاطَبَةُ is…",
            "kind": "mcq",
            "options": ["You (f/s)", "You (m/s)", "You (f/d)", "She/It"],
            "correct": 0
          }
        },
        {
          "heading": "Notes",
          "lines": [
            {
              "html": "In English, number and gender cannot be determined in 'they' and 'you'. The following abbreviations are used to clarify them: m (masculine), f (feminine), s (singular), d (dual), p (plural).",
              "list": false
            },
            {
              "html": "The word 'it' is used for inanimate objects or for the neutral gender. In Arabic, there is no neutral gender. Instead, the <bdi>صِيَغٌ</bdi> of <bdi>الْغَائِبُ</bdi> and <bdi>الْغَائِبَةُ</bdi> are used for the word 'it'.",
              "list": false
            },
            {
              "html": "<bdi>سَقَطَ</bdi> — It (he) fell",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>سَقَطَتْ</bdi> — It (she) fell",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "There is no neutral gender in Arabic, so 'it fell' for a feminine noun is…",
            "kind": "mcq",
            "options": ["سَقَطَ", "سَقَطَتْ", "سَقَطُوْا", "سَقَطْتُ"],
            "correct": 1
          }
        }
      ],
      "summary": {
        "title": "Introduction",
        "rows": [
          {
            "label": "Verb",
            "arabic": "فِعْلٌ",
            "meaning": "Verb",
            "unlockAt": 0
          },
          {
            "label": "Pronoun",
            "arabic": "ضَمِيْرٌ",
            "meaning": "Pronoun",
            "unlockAt": 0
          },
          {
            "label": "Conjugation",
            "arabic": "تَصْرِيْفٌ",
            "meaning": "Conjugation",
            "unlockAt": 1
          },
          {
            "label": "Verb form",
            "arabic": "صِيْغَةٌ (صِيَغٌ)",
            "meaning": "Verb form",
            "unlockAt": 1
          },
          {
            "label": "Masculine",
            "arabic": "مُذَكَّرٌ",
            "meaning": "Masculine",
            "unlockAt": 2
          },
          {
            "label": "Feminine",
            "arabic": "مُؤَنَّثٌ",
            "meaning": "Feminine",
            "unlockAt": 2
          },
          {
            "label": "Singular",
            "arabic": "مُفْرَدٌ",
            "meaning": "Singular",
            "unlockAt": 3
          },
          {
            "label": "Dual",
            "arabic": "مُثَنًّى",
            "meaning": "Dual",
            "unlockAt": 4
          },
          {
            "label": "Plural",
            "arabic": "جَمْعٌ",
            "meaning": "Plural",
            "unlockAt": 4
          },
          {
            "label": "Third person",
            "arabic": "غَائِبٌ",
            "meaning": "Third person",
            "unlockAt": 5
          },
          {
            "label": "Second person",
            "arabic": "مُخَاطَبٌ",
            "meaning": "Second person",
            "unlockAt": 5
          },
          {
            "label": "First person",
            "arabic": "مُتَكَلِّمٌ",
            "meaning": "First person",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "An Arabic verb must contain which two components?",
          "options": [
            "A verb (فِعْلٌ) and a noun (اِسْمٌ)",
            "A verb (فِعْلٌ) and a pronoun (ضَمِيْرٌ)",
            "A pronoun (ضَمِيْرٌ) and a particle (حَرْفٌ)",
            "A root and a تَنْوِيْنٌ"
          ],
          "correct": 1,
          "explanation": "Every Arabic verb contains a فِعْلٌ (the verb) and a ضَمِيْرٌ (the pronoun showing the person, gender, and number of the doer), e.g. فَعَلْتُمْ = فَعَلَ + تُمْ."
        },
        {
          "q": "Changing the pronoun of a verb into different forms to show different person, gender, and number is called…",
          "options": [
            "صِيْغَةٌ",
            "إِعْرَابٌ",
            "تَصْرِيْفٌ",
            "مُثَنًّى"
          ],
          "correct": 2,
          "explanation": "This change is called conjugation, تَصْرِيْفٌ. Each resulting form of the verb with its pronoun is a صِيْغَةٌ."
        },
        {
          "q": "What is the غَائِبٌ?",
          "options": [
            "The addressee — 'you'",
            "The person being spoken about — 'he, she, or they'",
            "The person speaking about themselves — 'I or we'",
            "The feminine gender"
          ],
          "correct": 1,
          "explanation": "غَائِبٌ is the third person: the person being spoken about (he, she, they). مُخَاطَبٌ is the addressee (you), and مُتَكَلِّمٌ is the speaker (I, we)."
        },
        {
          "q": "Why are there only 14 صِيَغٌ and not 18?",
          "options": [
            "Because the third person has no dual",
            "Because the feminine forms are shared with the masculine",
            "Because the first person (الْمُتَكَلِّمُ) has no dual and is shared for both genders",
            "Because the second person has no plural"
          ],
          "correct": 2,
          "explanation": "الْمُتَكَلِّمُ does not have a dual, and its forms are shared for masculine and feminine — removing 4 forms from the possible 18."
        },
        {
          "q": "Which صِيْغَةٌ is \"You (f/p)\"?",
          "options": [
            "الْمُخَاطَبَاتُ",
            "الْمُخَاطَبُوْنَ",
            "الْغَائِبَاتُ",
            "الْمُخَاطَبَتَانِ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ is second person, feminine, plural = You (f/p). الْمُخَاطَبُوْنَ is You (m/p), الْغَائِبَاتُ is They (f/p), and الْمُخَاطَبَتَانِ is You (f/d)."
        },
        {
          "q": "How is the English word 'it' expressed in Arabic, given that Arabic has no neutral gender?",
          "options": [
            "With a special neutral صِيْغَةٌ",
            "With the صِيَغٌ of الْغَائِبُ and الْغَائِبَةُ",
            "With the صِيَغٌ of الْمُتَكَلِّمُ",
            "It is simply left out of the sentence"
          ],
          "correct": 1,
          "explanation": "Arabic uses the third-person singular forms for 'it': سَقَطَ 'it (he) fell', سَقَطَتْ 'it (she) fell'."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In فَعَلْتُمْ, which part is the subject pronoun (ضَمِيْرٌ)?",
          "options": [
            "فَعَلَ",
            "تُمْ",
            "فَ",
            "لْتُ"
          ],
          "correct": 1,
          "explanation": "فَعَلْتُمْ = the verb فَعَلَ + the subject pronoun تُمْ. Every Arabic verb contains a verb and a pronoun."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "How many صِيَغٌ are there in total?",
          "options": [
            "18",
            "16",
            "14",
            "12"
          ],
          "correct": 2,
          "explanation": "There are 14 صِيَغٌ, not 18, because الْمُتَكَلِّمُ has no dual and is shared for both genders."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which صِيْغَةٌ is \"They (f/d)\"?",
          "options": [
            "الْغَائِبَتَانِ",
            "الْغَائِبَانِ",
            "الْغَائِبَاتُ",
            "الْمُخَاطَبَتَانِ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَتَانِ is third person, feminine, dual. الْغَائِبَانِ is They (m/d), الْغَائِبَاتُ is They (f/p), and الْمُخَاطَبَتَانِ is You (f/d)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "الْمُخَاطَبُ refers to…",
          "options": [
            "The person being spoken about — 'he'",
            "The addressee — 'You (m/s)'",
            "The speaker — 'I'",
            "The addressee — 'You (m/p)'"
          ],
          "correct": 1,
          "explanation": "مُخَاطَبٌ is the second person (the addressee); الْمُخَاطَبُ specifically is masculine singular: You (m/s)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The صِيْغَةٌ الْمُتَكَلِّمُوْنَ (\"We\") covers which numbers?",
          "options": [
            "Singular only",
            "Plural only",
            "Dual and plural",
            "Singular, dual, and plural"
          ],
          "correct": 2,
          "explanation": "The first person has no separate dual, so الْمُتَكَلِّمُوْنَ covers both dual and plural — and both genders."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In the abbreviations used by the book, what does (f/d) mean?",
          "options": [
            "Feminine dual",
            "Feminine definite",
            "First person dual",
            "Feminine plural"
          ],
          "correct": 0,
          "explanation": "m = masculine, f = feminine, s = singular, d = dual, p = plural — so (f/d) is feminine dual."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "There is no neutral gender in Arabic, so 'it fell' for a feminine noun is…",
          "options": [
            "سَقَطَ",
            "سَقَطَتْ",
            "سَقَطُوْا",
            "سَقَطْتُ"
          ],
          "correct": 1,
          "explanation": "The صِيَغٌ of الْغَائِبُ and الْغَائِبَةُ are used for \"it\": سَقَطَتْ = \"It (she) fell\"."
        }
      ]
    },
    {
      "id": "l2",
      "title": "الْمَاضِيْ",
      "subtitle": "The Past Tense — the conjugation of its fourteen صِيَغٌ",
      "concepts": [
        {
          "heading": "الْمَاضِيْ",
          "lines": [
            {
              "html": "In Arabic, the past tense verb is called <bdi>الْمَاضِيْ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>فَتَحَ زَيْدٌ</bdi> — Zaid opened",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What is the past tense verb called in Arabic?",
            "kind": "mcq",
            "options": ["الْمُضَارِعُ", "الْمَاضِيْ", "الْمَصْدَرُ", "الْأَمْرُ"],
            "correct": 1
          }
        },
        {
          "heading": "Types of Pronouns",
          "lines": [
            {
              "html": "There are two types of pronouns: (1) <bdi>ضَمِيْرٌ مُسْتَتِرٌ</bdi>: pronouns within the verb. (2) <bdi>ضَمِيْرٌ بَارِزٌ</bdi>: pronouns attached to the verb.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is a ضَمِيْرٌ مُسْتَتِرٌ؟",
            "kind": "mcq",
            "options": ["A pronoun attached to the end of the verb", "A pronoun hidden within the verb", "A sign that the verb is feminine", "The silent أَلِفٌ written after و"],
            "correct": 1
          }
        },
        {
          "heading": "Pronouns with الْفِعْلُ الْمَاضِيْ",
          "lines": [
            {
              "html": "In the conjugation of <bdi>الْفِعْلُ الْمَاضِيْ</bdi>, two <bdi>صِيْغَةٌ</bdi> have a <bdi>ضَمِيْرٌ مُسْتَتِرٌ</bdi>; the <bdi>صِيْغَةٌ</bdi> of <bdi>الْغَائِبُ</bdi> and <bdi>الْغَائِبَةُ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>جَلَسَ</bdi> (<bdi>هُوَ</bdi>) — the pronoun <bdi>هُوَ</bdi> (he) is hidden",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>جَلَسَتْ</bdi> (<bdi>هِيَ</bdi>) — the pronoun <bdi>هِيَ</bdi> (she) is hidden",
              "list": true,
              "bullet": true
            },
            {
              "html": "In the remaining <bdi>صِيَغٌ</bdi>, the pronouns are visible.",
              "list": false
            },
            {
              "html": "<bdi>جَلَسْتُ</bdi> (<bdi>تُ</bdi>)<bdi>، جَلَسْنَا</bdi> (<bdi>نَا</bdi>) — the pronouns <bdi>تُ</bdi> (I) and <bdi>نَا</bdi> (We) can be seen at the end of the verb",
              "list": true,
              "bullet": true
            },
            {
              "html": "The <bdi>ت</bdi> at the end of <bdi>الْغَائِبَةُ</bdi> and <bdi>الْغَائِبَتَانِ</bdi> is a sign to indicate the verb is feminine; it is not a pronoun, e.g. <bdi>جَلَسَتْ</bdi>، <bdi>جَلَسَتَا</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In the conjugation of الْمَاضِيْ, which two صِيَغٌ have a ضَمِيْرٌ مُسْتَتِرٌ؟",
            "kind": "mcq",
            "options": ["الْمُتَكَلِّمُ and الْمُتَكَلِّمُوْنَ", "الْمُخَاطَبُ and الْمُخَاطَبَةُ", "الْغَائِبُ and الْغَائِبَةُ", "الْغَائِبَانِ and الْغَائِبَتَانِ"],
            "correct": 2
          }
        },
        {
          "heading": "Conjugation of الْمَاضِيْ",
          "lines": [
            {
              "html": "The conjugation of <bdi>الْمَاضِيْ</bdi> is given below. Memorising this conjugation, and all consequent conjugations, is essential to identifying, understanding, and translating Arabic verbs. Learn the column of <bdi>الْمَاضِيْ</bdi>, pausing after each set.",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of الْمَاضِيْ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "Pronoun",
                  "Translation"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "فَتَحَ",
                    "(هُوَ)",
                    "He/It opened"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "فَتَحَا",
                    "(ا)",
                    "They (m/d) opened"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "فَتَحُوْا",
                    "(و)",
                    "They (m/p) opened"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "فَتَحَتْ",
                    "(هِيَ)",
                    "She/It opened"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "فَتَحَتَا",
                    "(ا)",
                    "They (f/d) opened"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "فَتَحْنَ",
                    "(نَ)",
                    "They (f/p) opened"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "فَتَحْتَ",
                    "(تَ)",
                    "You (m/s) opened"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "فَتَحْتُمَا",
                    "(تُمَا)",
                    "You (m/d) opened"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "فَتَحْتُمْ",
                    "(تُمْ)",
                    "You (m/p) opened"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "فَتَحْتِ",
                    "(تِ)",
                    "You (f/s) opened"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "فَتَحْتُمَا",
                    "(تُمَا)",
                    "You (f/d) opened"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "فَتَحْتُنَّ",
                    "(تُنَّ)",
                    "You (f/p) opened"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "فَتَحْتُ",
                    "(تُ)",
                    "I opened"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "فَتَحْنَا",
                    "(نَا)",
                    "We opened"
                  ]
                ]
              }
            },
            {
              "html": "A silent <bdi>أَلِفٌ</bdi> is written at the end of <bdi>الْغَائِبُوْنَ</bdi>, e.g. <bdi>جَلَسُوْا</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "فَتَحَتْ is…",
            "kind": "mcq",
            "options": ["الْغَائِبَةُ — She/It opened", "الْغَائِبَانِ — They (m/d) opened", "الْغَائِبَاتُ — They (f/p) opened", "الْمُخَاطَبَةُ — You (f/s) opened"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 1: الْمَاضِيْ",
        "rows": [
          {
            "label": "Past tense",
            "arabic": "الْمَاضِيْ",
            "meaning": "Past tense",
            "unlockAt": 0
          },
          {
            "label": "Hidden pronoun",
            "arabic": "ضَمِيْرٌ مُسْتَتِرٌ",
            "meaning": "Hidden pronoun",
            "unlockAt": 2
          },
          {
            "label": "Visible pronoun",
            "arabic": "ضَمِيْرٌ بَارِزٌ",
            "meaning": "Visible pronoun",
            "unlockAt": 4
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the past tense verb called in Arabic?",
          "options": [
            "الْمُضَارِعُ",
            "الْمَاضِيْ",
            "الْمَصْدَرُ",
            "الْأَمْرُ"
          ],
          "correct": 1,
          "explanation": "The past tense verb is called الْمَاضِيْ, e.g. فَتَحَ زَيْدٌ — 'Zaid opened'."
        },
        {
          "q": "What is a ضَمِيْرٌ مُسْتَتِرٌ?",
          "options": [
            "A pronoun attached to the end of the verb",
            "A pronoun hidden within the verb",
            "A sign that the verb is feminine",
            "The silent أَلِفٌ written after و"
          ],
          "correct": 1,
          "explanation": "A ضَمِيْرٌ مُسْتَتِرٌ is a hidden pronoun within the verb; a ضَمِيْرٌ بَارِزٌ is a visible pronoun attached to the verb."
        },
        {
          "q": "In the conjugation of الْمَاضِيْ, which two صِيَغٌ have a ضَمِيْرٌ مُسْتَتِرٌ?",
          "options": [
            "الْمُتَكَلِّمُ and الْمُتَكَلِّمُوْنَ",
            "الْمُخَاطَبُ and الْمُخَاطَبَةُ",
            "الْغَائِبُ and الْغَائِبَةُ",
            "الْغَائِبَانِ and الْغَائِبَتَانِ"
          ],
          "correct": 2,
          "explanation": "Only الْغَائِبُ (e.g. جَلَسَ، هُوَ hidden) and الْغَائِبَةُ (e.g. جَلَسَتْ، هِيَ hidden) have hidden pronouns; all other صِيَغٌ show a visible pronoun."
        },
        {
          "q": "In جَلَسَتْ, what is the ت at the end?",
          "options": [
            "The pronoun 'she'",
            "A sign indicating the verb is feminine — not a pronoun",
            "The pronoun 'you'",
            "A silent letter with no purpose"
          ],
          "correct": 1,
          "explanation": "The ت at the end of الْغَائِبَةُ and الْغَائِبَتَانِ is a feminine sign, not a pronoun. The actual pronoun (هِيَ) is hidden."
        },
        {
          "q": "What is written at the end of the الْغَائِبُوْنَ form, e.g. جَلَسُوْا?",
          "options": [
            "A silent أَلِفٌ",
            "A pronounced أَلِفٌ",
            "A تَنْوِيْنٌ",
            "A feminine sign"
          ],
          "correct": 0,
          "explanation": "A silent أَلِفٌ is written after the و of الْغَائِبُوْنَ, e.g. جَلَسُوْا — it is not pronounced."
        },
        {
          "q": "Which pronoun is visible in فَتَحْنَا, and what does the verb mean?",
          "options": [
            "نَ — \"They (f/p) opened\"",
            "نَا — \"We opened\"",
            "ا — \"They (m/d) opened\"",
            "تُ — \"I opened\""
          ],
          "correct": 1,
          "explanation": "The visible pronoun is نَا (we): فَتَحْنَا = \"We opened\". Compare فَتَحْنَ with نَ = \"They (f/p) opened\"."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which صِيْغَةٌ is فَتَحْتَ, and what does it mean?",
          "options": [
            "الْمُخَاطَبُ — You (m/s) opened",
            "الْمُتَكَلِّمُ — I opened",
            "الْمُخَاطَبَةُ — You (f/s) opened",
            "الْغَائِبُ — He opened"
          ],
          "correct": 0,
          "explanation": "The visible pronoun تَ (with a fathah) is second person masculine singular: 'You (m/s) opened'. Compare تُ (I) and تِ (You f/s)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In جَلَسَ ('He sat'), where is the pronoun?",
          "options": [
            "It is the ج at the start",
            "It is hidden within the verb (هُوَ) — a ضَمِيْرٌ مُسْتَتِرٌ",
            "It is the fathah at the end",
            "There is no pronoun in this verb"
          ],
          "correct": 1,
          "explanation": "الْغَائِبُ is one of the two صِيَغٌ of الْمَاضِيْ with a hidden pronoun — the هُوَ is understood within the verb."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "فَتَحَتَا means…",
          "options": [
            "They (f/d) opened",
            "They (m/d) opened",
            "She opened",
            "You (f/d) opened"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَتَانِ: the ت is the feminine sign and the ا is the dual pronoun — 'They (f/d) opened'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which two صِيَغٌ of الْمَاضِيْ share exactly the same form, e.g. فَتَحْتُمَا?",
          "options": [
            "الْمُخَاطَبَانِ and الْمُخَاطَبَتَانِ",
            "الْغَائِبَانِ and الْغَائِبَتَانِ",
            "الْمُتَكَلِّمُ and الْمُخَاطَبُ",
            "الْغَائِبُوْنَ and الْمُتَكَلِّمُوْنَ"
          ],
          "correct": 0,
          "explanation": "The second person dual pronoun تُمَا is shared by the masculine and feminine, so You (m/d) and You (f/d) are both فَتَحْتُمَا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the difference between فَتَحْنَ and فَتَحْنَا?",
          "options": [
            "فَتَحْنَ = They (f/p) opened; فَتَحْنَا = We opened",
            "فَتَحْنَ = We opened; فَتَحْنَا = They (f/p) opened",
            "They are two spellings of the same صِيْغَةٌ",
            "فَتَحْنَ = You (f/p) opened; فَتَحْنَا = They (f/d) opened"
          ],
          "correct": 0,
          "explanation": "نَ is the third person feminine plural pronoun (الْغَائِبَاتُ); نَا is the first person pronoun (الْمُتَكَلِّمُوْنَ)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The visible pronoun in فَتَحْتِ is…",
          "options": [
            "تِ — You (f/s)",
            "تَ — You (m/s)",
            "تُ — I",
            "هِيَ — She"
          ],
          "correct": 0,
          "explanation": "تِ with a kasrah is the second person feminine singular pronoun: فَتَحْتِ = 'You (f/s) opened'."
        },
        {
          "title": "Book Exercise 2 (p. 21)",
          "kind": "mcq",
          "prompt": "A مَاضِيْ verb ending in the pronoun تُمَا is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبَانِ / الْمُخَاطَبَتَانِ — You (m/d) / You (f/d)",
            "الْمُخَاطَبُوْنَ — You (m/p)",
            "الْغَائِبَانِ — They (m/d)",
            "الْمُتَكَلِّمُوْنَ — We"
          ],
          "correct": 0,
          "explanation": "تُمَا is the second person dual pronoun, shared by the masculine and feminine: You (m/d) and You (f/d)."
        },
        {
          "title": "Book Exercise 2 (p. 21)",
          "kind": "mcq",
          "prompt": "A مَاضِيْ verb ending in the pronoun تُنَّ is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبَاتُ — You (f/p)",
            "الْغَائِبَاتُ — They (f/p)",
            "الْمُخَاطَبُوْنَ — You (m/p)",
            "الْمُخَاطَبَةُ — You (f/s)"
          ],
          "correct": 0,
          "explanation": "تُنَّ is the second person feminine plural pronoun: You (f/p), e.g. فَتَحْتُنَّ."
        },
        {
          "title": "Book Exercise 2 (p. 21)",
          "kind": "mcq",
          "prompt": "A مَاضِيْ verb ending in the pronoun وْ (with a silent أَلِفٌ) is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبُوْنَ — They (m/p)",
            "الْغَائِبَانِ — They (m/d)",
            "الْمُتَكَلِّمُوْنَ — We",
            "الْغَائِبَاتُ — They (f/p)"
          ],
          "correct": 0,
          "explanation": "The و is the third person masculine plural pronoun, written with a silent أَلِفٌ: جَلَسُوْا — They (m/p)."
        },
        {
          "title": "Book Exercise 3 (p. 22)",
          "kind": "mcq",
          "prompt": "بَعَثْنَا means…",
          "options": [
            "We sent",
            "They (f/p) sent",
            "You (m/p) sent",
            "I sent"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ with the visible pronoun نَا: 'We sent'. (بَعَثَ = to send, to resurrect.)"
        },
        {
          "title": "Book Exercise 3 (p. 22)",
          "kind": "mcq",
          "prompt": "جَعَلُوْا means…",
          "options": [
            "They (m/p) made",
            "They (m/d) made",
            "We made",
            "You (m/p) made"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ with the pronoun و (and silent أَلِفٌ): 'They (m/p) made'. (جَعَلَ = to make.)"
        },
        {
          "title": "Book Exercise 3 (p. 22)",
          "kind": "mcq",
          "prompt": "ذَهَبَتْ means…",
          "options": [
            "She went",
            "You (f/s) went",
            "They (f/p) went",
            "He went"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَةُ — the ت is the feminine sign and the pronoun هِيَ is hidden: 'She went'. (ذَهَبَ = to go.)"
        },
        {
          "title": "Book Exercise 3 (p. 22)",
          "kind": "mcq",
          "prompt": "فَتَحْتُنَّ means…",
          "options": [
            "You (f/p) opened",
            "They (f/p) opened",
            "You (f/d) opened",
            "You (m/p) opened"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ with the visible pronoun تُنَّ: 'You (f/p) opened'."
        },
        {
          "title": "Book Exercise 3 (p. 22)",
          "kind": "mcq",
          "prompt": "رَفَعَا means…",
          "options": [
            "They (m/d) elevated",
            "They (m/p) elevated",
            "We elevated",
            "You (m/d) elevated"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَانِ with the dual pronoun ا: 'They (m/d) elevated'. (رَفَعَ = to elevate.)"
        },
        {
          "title": "Book Exercise 4 (p. 22)",
          "kind": "mcq",
          "prompt": "'I bowed' in Arabic is…",
          "options": [
            "رَكَعْتُ",
            "رَكَعْتَ",
            "رَكَعْنَا",
            "رَكَعَتْ"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ takes the pronoun تُ: رَكَعْتُ. (رَكَعَ = to bow.) رَكَعْتَ is 'You (m/s) bowed' and رَكَعَتْ is 'She bowed'."
        },
        {
          "title": "Book Exercise 4 (p. 22)",
          "kind": "mcq",
          "prompt": "'They (f/d) asked' in Arabic is…",
          "options": [
            "سَأَلَتَا",
            "سَأَلَا",
            "سَأَلْنَ",
            "سَأَلْتُمَا"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَتَانِ: feminine sign ت + dual pronoun ا = سَأَلَتَا. (سَأَلَ = to ask.)"
        },
        {
          "title": "Book Exercise 4 (p. 22)",
          "kind": "mcq",
          "prompt": "'You (m/p) cursed' in Arabic is…",
          "options": [
            "لَعَنْتُمْ",
            "لَعَنُوْا",
            "لَعَنْتُنَّ",
            "لَعَنْتُمَا"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبُوْنَ takes the pronoun تُمْ: لَعَنْتُمْ. (لَعَنَ = to curse.)"
        },
        {
          "title": "Book Exercise 5 (p. 23)",
          "kind": "mcq",
          "prompt": "Change the gender of سَأَلْنَ whilst keeping the number and person the same.",
          "options": [
            "سَأَلُوْا",
            "سَأَلَا",
            "سَأَلْتُنَّ",
            "سَأَلَتْ"
          ],
          "correct": 0,
          "explanation": "سَأَلْنَ is They (f/p); the masculine counterpart (same person and number) is الْغَائِبُوْنَ: سَأَلُوْا."
        },
        {
          "title": "Book Exercise 5 (p. 23)",
          "kind": "mcq",
          "prompt": "Change the gender of فَتَحْتُمَا (You m/d) whilst keeping the number and person the same.",
          "options": [
            "فَتَحْتُمَا — the form stays the same",
            "فَتَحْتُمْ",
            "فَتَحَتَا",
            "فَتَحْتُنَّ"
          ],
          "correct": 0,
          "explanation": "The second person dual تُمَا is shared by both genders, so the form is unchanged: فَتَحْتُمَا (You f/d)."
        },
        {
          "title": "Book Exercise 5 (p. 23)",
          "kind": "mcq",
          "prompt": "Change the gender of جَعَلَا whilst keeping the number and person the same.",
          "options": [
            "جَعَلَتَا",
            "جَعَلُوْا",
            "جَعَلْنَ",
            "جَعَلَتْ"
          ],
          "correct": 0,
          "explanation": "جَعَلَا is They (m/d); the feminine counterpart is الْغَائِبَتَانِ: جَعَلَتَا."
        },
        {
          "title": "to send, to resurrect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send, to resurrect\"?",
          "options": [
            "بَعَثَ يَبْعَثُ",
            "جَعَلَ يَجْعَلُ",
            "ذَهَبَ يَذْهَبُ",
            "رَفَعَ يَرْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to send, to resurrect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعَثَ يَبْعَثُ mean?",
          "options": [
            "to send, to resurrect",
            "to make",
            "to go",
            "to elevate"
          ],
          "correct": 0
        },
        {
          "title": "to send, to resurrect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعَثَ يَبْعَثُ?",
          "options": [
            "بَعْثًا",
            "جَعْلًا",
            "ذَهَابًا",
            "رَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to make",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make\"?",
          "options": [
            "جَعَلَ يَجْعَلُ",
            "ذَهَبَ يَذْهَبُ",
            "رَفَعَ يَرْفَعُ",
            "رَكَعَ يَرْكَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to make",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَعَلَ يَجْعَلُ mean?",
          "options": [
            "to make",
            "to go",
            "to elevate",
            "to bow"
          ],
          "correct": 0
        },
        {
          "title": "to make (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَعَلَ يَجْعَلُ?",
          "options": [
            "جَعْلًا",
            "ذَهَابًا",
            "رَفْعًا",
            "رُكُوْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to go",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to go\"?",
          "options": [
            "ذَهَبَ يَذْهَبُ",
            "رَفَعَ يَرْفَعُ",
            "رَكَعَ يَرْكَعُ",
            "سَأَلَ يَسْأَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to go",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَهَبَ يَذْهَبُ mean?",
          "options": [
            "to go",
            "to elevate",
            "to bow",
            "to ask"
          ],
          "correct": 0
        },
        {
          "title": "to go (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَهَبَ يَذْهَبُ?",
          "options": [
            "ذَهَابًا",
            "رَفْعًا",
            "رُكُوْعًا",
            "سُؤَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to elevate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to elevate\"?",
          "options": [
            "رَفَعَ يَرْفَعُ",
            "رَكَعَ يَرْكَعُ",
            "سَأَلَ يَسْأَلُ",
            "سَحَرَ يَسْحَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to elevate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَفَعَ يَرْفَعُ mean?",
          "options": [
            "to elevate",
            "to bow",
            "to ask",
            "to bewitch"
          ],
          "correct": 0
        },
        {
          "title": "to elevate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَفَعَ يَرْفَعُ?",
          "options": [
            "رَفْعًا",
            "رُكُوْعًا",
            "سُؤَالًا",
            "سِحْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to bow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bow\"?",
          "options": [
            "رَكَعَ يَرْكَعُ",
            "سَأَلَ يَسْأَلُ",
            "سَحَرَ يَسْحَرُ",
            "صَلَحَ يَصْلُحُ"
          ],
          "correct": 0
        },
        {
          "title": "to bow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَكَعَ يَرْكَعُ mean?",
          "options": [
            "to bow",
            "to ask",
            "to bewitch",
            "to act righteously"
          ],
          "correct": 0
        },
        {
          "title": "to bow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَكَعَ يَرْكَعُ?",
          "options": [
            "رُكُوْعًا",
            "سُؤَالًا",
            "سِحْرًا",
            "صَلَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to ask",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ask\"?",
          "options": [
            "سَأَلَ يَسْأَلُ",
            "سَحَرَ يَسْحَرُ",
            "صَلَحَ يَصْلُحُ",
            "فَتَحَ يَفْتَحُ"
          ],
          "correct": 0
        },
        {
          "title": "to ask",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَأَلَ يَسْأَلُ mean?",
          "options": [
            "to ask",
            "to bewitch",
            "to act righteously",
            "to open"
          ],
          "correct": 0
        },
        {
          "title": "to ask (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَأَلَ يَسْأَلُ?",
          "options": [
            "سُؤَالًا",
            "سِحْرًا",
            "صَلَاحًا",
            "فَتْحًا"
          ],
          "correct": 0
        },
        {
          "title": "to bewitch",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bewitch\"?",
          "options": [
            "سَحَرَ يَسْحَرُ",
            "صَلَحَ يَصْلُحُ",
            "فَتَحَ يَفْتَحُ",
            "قَرَأَ يَقْرَأُ"
          ],
          "correct": 0
        },
        {
          "title": "to bewitch",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَحَرَ يَسْحَرُ mean?",
          "options": [
            "to bewitch",
            "to act righteously",
            "to open",
            "to read"
          ],
          "correct": 0
        },
        {
          "title": "to bewitch (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَحَرَ يَسْحَرُ?",
          "options": [
            "سِحْرًا",
            "صَلَاحًا",
            "فَتْحًا",
            "قِرَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to act righteously",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to act righteously\"?",
          "options": [
            "صَلَحَ يَصْلُحُ",
            "فَتَحَ يَفْتَحُ",
            "قَرَأَ يَقْرَأُ",
            "لَعَنَ يَلْعَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to act righteously",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَلَحَ يَصْلُحُ mean?",
          "options": [
            "to act righteously",
            "to open",
            "to read",
            "to curse"
          ],
          "correct": 0
        },
        {
          "title": "to act righteously (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَلَحَ يَصْلُحُ?",
          "options": [
            "صَلَاحًا",
            "فَتْحًا",
            "قِرَاءَةً",
            "لَعْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to open",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to open\"?",
          "options": [
            "فَتَحَ يَفْتَحُ",
            "قَرَأَ يَقْرَأُ",
            "لَعَنَ يَلْعَنُ",
            "نَفَعَ يَنْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to open",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَتَحَ يَفْتَحُ mean?",
          "options": [
            "to open",
            "to read",
            "to curse",
            "to profit, benefit"
          ],
          "correct": 0
        },
        {
          "title": "to open (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَتَحَ يَفْتَحُ?",
          "options": [
            "فَتْحًا",
            "قِرَاءَةً",
            "لَعْنًا",
            "نَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to read\"?",
          "options": [
            "قَرَأَ يَقْرَأُ",
            "لَعَنَ يَلْعَنُ",
            "نَفَعَ يَنْفَعُ",
            "بَعَثَ يَبْعَثُ"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَرَأَ يَقْرَأُ mean?",
          "options": [
            "to read",
            "to curse",
            "to profit, benefit",
            "to send, to resurrect"
          ],
          "correct": 0
        },
        {
          "title": "to read (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَرَأَ يَقْرَأُ?",
          "options": [
            "قِرَاءَةً",
            "لَعْنًا",
            "نَفْعًا",
            "بَعْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to curse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to curse\"?",
          "options": [
            "لَعَنَ يَلْعَنُ",
            "نَفَعَ يَنْفَعُ",
            "بَعَثَ يَبْعَثُ",
            "جَعَلَ يَجْعَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to curse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَعَنَ يَلْعَنُ mean?",
          "options": [
            "to curse",
            "to profit, benefit",
            "to send, to resurrect",
            "to make"
          ],
          "correct": 0
        },
        {
          "title": "to curse (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَعَنَ يَلْعَنُ?",
          "options": [
            "لَعْنًا",
            "نَفْعًا",
            "بَعْثًا",
            "جَعْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to profit, benefit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to profit, benefit\"?",
          "options": [
            "نَفَعَ يَنْفَعُ",
            "بَعَثَ يَبْعَثُ",
            "جَعَلَ يَجْعَلُ",
            "ذَهَبَ يَذْهَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to profit, benefit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَفَعَ يَنْفَعُ mean?",
          "options": [
            "to profit, benefit",
            "to send, to resurrect",
            "to make",
            "to go"
          ],
          "correct": 0
        },
        {
          "title": "to profit, benefit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَفَعَ يَنْفَعُ?",
          "options": [
            "نَفْعًا",
            "بَعْثًا",
            "جَعْلًا",
            "ذَهَابًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "الْمُضَارِعُ",
      "subtitle": "The Present and Future Tense — its four components and the conjugation of its fourteen صِيَغٌ",
      "concepts": [
        {
          "heading": "The Two Tenses of الْمُضَارِعُ",
          "lines": [
            {
              "html": "In Arabic, the word <bdi>الْمُضَارِعُ</bdi> is used to denote two tenses: (1) The present tense, known in Arabic as <bdi>حَالٌ</bdi>. (2) The future tense, known in Arabic as <bdi>مُسْتَقْبَلٌ</bdi>.",
              "list": false
            },
            {
              "html": "There are two types of present tense: Present habitual — an action that takes place regularly ('Zaid walks'), and present continuous — an action that is taking place right now ('Zaid is walking'). The future tense is 'Zaid will walk'.",
              "list": false
            },
            {
              "html": "The context of the sentence or paragraph will help determine which tense is being referred to.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "The word الْمُضَارِعُ is used to denote which two tenses?",
            "kind": "mcq",
            "options": ["Past and present", "Present (حَالٌ) and future (مُسْتَقْبَلٌ)", "Past and future", "Imperative and future"],
            "correct": 1
          }
        },
        {
          "heading": "The Components of a صِيْغَةٌ of الْمُضَارِعُ",
          "lines": [
            {
              "html": "Each <bdi>صِيْغَةٌ</bdi> of <bdi>الْمُضَارِعُ</bdi> is made up of four components: (1) The verb, <bdi>فِعْلٌ</bdi>. (2) The pronoun, <bdi>ضَمِيْرٌ</bdi>. (3) The <bdi>حَرْفُ الْمُضَارِعِ</bdi> — the letter which precedes <bdi>الْمُضَارِعُ</bdi>. These are <bdi>أ</bdi>، <bdi>ت</bdi>، <bdi>ي</bdi> or <bdi>ن</bdi>. A mnemonic for these is <bdi>نَأْتِيْ</bdi>. (4) The <bdi>عَلَامَةُ الْإِعْرَابِ</bdi> — a <bdi>حَرَكَةٌ</bdi> or letter which indicates the state of the verb (discussed later, in Part 5).",
              "list": false
            },
            {
              "table": {
                "title": "The components of الْمُضَارِعُ (in يَفْتَحُوْنَ)",
                "headers": [
                  "حَرْفُ الْمُضَارِعِ",
                  "Verb فِعْلٌ",
                  "Pronoun ضَمِيْرٌ",
                  "عَلَامَةُ الْإِعْرَابِ"
                ],
                "rows": [
                  [
                    "يَـ",
                    "ـفْتَحُـ",
                    "ـوْ",
                    "نَ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Which letters are the حَرْفُ الْمُضَارِعِ, and what is their mnemonic?",
            "kind": "mcq",
            "options": ["أ، ت، ي، ن — the mnemonic نَأْتِيْ", "و، ا، ي — the weak letters", "ف، ع، ل — the scale letters", "س، ل، ن — the mnemonic سَلَنْ"],
            "correct": 0
          }
        },
        {
          "heading": "Hidden Pronouns in الْمُضَارِعُ",
          "lines": [
            {
              "html": "In <bdi>الْفِعْلُ الْمُضَارِعُ</bdi>, five <bdi>صِيْغَةٌ</bdi> have a <bdi>ضَمِيْرٌ مُسْتَتِرٌ</bdi> (hidden pronoun): the <bdi>صِيْغَةٌ</bdi> of <bdi>الْغَائِبُ</bdi>، <bdi>الْغَائِبَةُ</bdi>، <bdi>الْمُخَاطَبُ</bdi>، <bdi>الْمُتَكَلِّمُ</bdi> and <bdi>الْمُتَكَلِّمُوْنَ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>يَفْتَحُ</bdi> (<bdi>هُوَ</bdi>) — He opens — <bdi>هُوَ</bdi> is hidden",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>تَفْتَحُ</bdi> (<bdi>هِيَ</bdi>) — She opens — <bdi>هِيَ</bdi> is hidden",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>تَفْتَحُ</bdi> (<bdi>أَنْتَ</bdi>) — You (m/s) open — <bdi>أَنْتَ</bdi> is hidden",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>أَفْتَحُ</bdi> (<bdi>أَنَا</bdi>) — I open — <bdi>أَنَا</bdi> is hidden",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>نَفْتَحُ</bdi> (<bdi>نَحْنُ</bdi>) — We open — <bdi>نَحْنُ</bdi> is hidden",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "How many صِيَغٌ of الْفِعْلُ الْمُضَارِعُ have a ضَمِيْرٌ مُسْتَتِرٌ (hidden pronoun)?",
            "kind": "mcq",
            "options": ["Two", "Three", "Five", "Seven"],
            "correct": 2
          }
        },
        {
          "heading": "Conjugation of الْمُضَارِعُ",
          "lines": [
            {
              "html": "The conjugation of <bdi>الْمُضَارِعُ</bdi> is given below. Each form covers the present habitual, present continuous, and future.",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of الْمُضَارِعُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمُضَارِعُ",
                  "Pronoun",
                  "Translation"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَفْتَحُ",
                    "(هُوَ)",
                    "He opens, is opening, will open"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَفْتَحَانِ",
                    "(ا)",
                    "They (m/d) open, are opening, will open"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَفْتَحُوْنَ",
                    "(و)",
                    "They (m/p) open, are opening, will open"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَفْتَحُ",
                    "(هِيَ)",
                    "She opens, is opening, will open"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَفْتَحَانِ",
                    "(ا)",
                    "They (f/d) open, are opening, will open"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَفْتَحْنَ",
                    "(نَ)",
                    "They (f/p) open, are opening, will open"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَفْتَحُ",
                    "(أَنْتَ)",
                    "You (m/s) open, are opening, will open"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَفْتَحَانِ",
                    "(ا)",
                    "You (m/d) open, are opening, will open"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَفْتَحُوْنَ",
                    "(و)",
                    "You (m/p) open, are opening, will open"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَفْتَحِيْنَ",
                    "(ي)",
                    "You (f/s) open, are opening, will open"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَفْتَحَانِ",
                    "(ا)",
                    "You (f/d) open, are opening, will open"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَفْتَحْنَ",
                    "(نَ)",
                    "You (f/p) open, are opening, will open"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَفْتَحُ",
                    "(أَنَا)",
                    "I open, am opening, will open"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نَفْتَحُ",
                    "(نَحْنُ)",
                    "We open, are opening, will open"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يَفْتَحُوْنَ is…",
            "kind": "mcq",
            "options": ["الْغَائِبُوْنَ — They (m/p) open", "الْمُتَكَلِّمُوْنَ — We open", "الْغَائِبَاتُ — They (f/p) open", "الْمُخَاطَبَاتُ — You (f/p) open"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 2: الْمُضَارِعُ",
        "rows": [
          {
            "label": "Present and Future Tense",
            "arabic": "الْمُضَارِعُ",
            "meaning": "Present and Future Tense",
            "unlockAt": 0
          },
          {
            "label": "Present",
            "arabic": "حَالٌ",
            "meaning": "Present",
            "unlockAt": 1
          },
          {
            "label": "Future",
            "arabic": "مُسْتَقْبَلٌ",
            "meaning": "Future",
            "unlockAt": 3
          },
          {
            "label": "Letters which precede a فِعْلٌ مُضَارِعٌ",
            "arabic": "حَرْفُ الْمُضَارِعِ",
            "meaning": "Letters which precede a فِعْلٌ مُضَارِعٌ",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "The word الْمُضَارِعُ is used to denote which two tenses?",
          "options": [
            "Past and present",
            "Present (حَالٌ) and future (مُسْتَقْبَلٌ)",
            "Past and future",
            "Imperative and future"
          ],
          "correct": 1,
          "explanation": "الْمُضَارِعُ covers the present tense (حَالٌ) — habitual and continuous — and the future tense (مُسْتَقْبَلٌ). Context determines which is meant."
        },
        {
          "q": "How many components make up each صِيْغَةٌ of الْمُضَارِعُ?",
          "options": [
            "Two",
            "Three",
            "Four",
            "Five"
          ],
          "correct": 2,
          "explanation": "Four: the verb (فِعْلٌ), the pronoun (ضَمِيْرٌ), the حَرْفُ الْمُضَارِعِ, and the عَلَامَةُ الْإِعْرَابِ."
        },
        {
          "q": "Which letters are the حَرْفُ الْمُضَارِعِ, and what is their mnemonic?",
          "options": [
            "أ، ت، ي، ن — the mnemonic نَأْتِيْ",
            "و، ا، ي — the weak letters",
            "ف، ع، ل — the scale letters",
            "س، ل، ن — the mnemonic سَلَنْ"
          ],
          "correct": 0,
          "explanation": "The حَرْفُ الْمُضَارِعِ is one of أ، ت، ي or ن, remembered with the mnemonic نَأْتِيْ."
        },
        {
          "q": "How many صِيَغٌ of الْفِعْلُ الْمُضَارِعُ have a ضَمِيْرٌ مُسْتَتِرٌ (hidden pronoun)?",
          "options": [
            "Two",
            "Three",
            "Five",
            "Seven"
          ],
          "correct": 2,
          "explanation": "Five: الْغَائِبُ (هُوَ), الْغَائِبَةُ (هِيَ), الْمُخَاطَبُ (أَنْتَ), الْمُتَكَلِّمُ (أَنَا), and الْمُتَكَلِّمُوْنَ (نَحْنُ). In الْمَاضِيْ only two صِيَغٌ had hidden pronouns."
        },
        {
          "q": "Which صِيْغَةٌ is تَفْتَحِيْنَ?",
          "options": [
            "الْمُخَاطَبَةُ — You (f/s) open",
            "الْغَائِبَةُ — She opens",
            "الْمُخَاطَبَاتُ — You (f/p) open",
            "الْمُخَاطَبُ — You (m/s) open"
          ],
          "correct": 0,
          "explanation": "The pronoun ي after the verb marks the second person feminine singular: 'You (f/s) open, are opening, will open'."
        },
        {
          "q": "In يَفْتَحُوْنَ, what is the final نَ?",
          "options": [
            "The pronoun 'they'",
            "A feminine sign",
            "The عَلَامَةُ الْإِعْرَابِ — a sign of the verb's state",
            "Part of the root of the verb"
          ],
          "correct": 2,
          "explanation": "يَفْتَحُوْنَ = حَرْفُ الْمُضَارِعِ (يَـ) + verb + pronoun (و) + عَلَامَةُ الْإِعْرَابِ (نَ). The pronoun is the و, not the نَ."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'Zaid is walking' is which type of tense?",
          "options": [
            "Present habitual",
            "Present continuous",
            "Future",
            "Past continuous"
          ],
          "correct": 1,
          "explanation": "Present continuous is an action taking place right now ('is walking'); present habitual is a regular action ('walks'); the future is 'will walk'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which THREE صِيَغٌ share the identical form تَفْتَحَانِ?",
          "options": [
            "الْغَائِبَتَانِ، الْمُخَاطَبَانِ، الْمُخَاطَبَتَانِ",
            "الْغَائِبَانِ، الْغَائِبَتَانِ، الْمُخَاطَبَانِ",
            "الْمُخَاطَبَانِ، الْمُخَاطَبَتَانِ، الْمُتَكَلِّمُوْنَ",
            "الْغَائِبَانِ، الْمُخَاطَبَانِ، الْمُخَاطَبَتَانِ"
          ],
          "correct": 0,
          "explanation": "تَفْتَحَانِ is They (f/d), You (m/d), and You (f/d). The masculine third person dual is يَفْتَحَانِ, with يـ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the difference between يَفْتَحْنَ and تَفْتَحْنَ?",
          "options": [
            "يَفْتَحْنَ = They (f/p) open; تَفْتَحْنَ = You (f/p) open",
            "يَفْتَحْنَ = You (f/p) open; تَفْتَحْنَ = They (f/p) open",
            "They are the same صِيْغَةٌ written two ways",
            "يَفْتَحْنَ = They (m/p) open; تَفْتَحْنَ = We open"
          ],
          "correct": 0,
          "explanation": "Both end in the pronoun نَ; the حَرْفُ الْمُضَارِعِ distinguishes them — يـ for الْغَائِبَاتُ, تـ for الْمُخَاطَبَاتُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In أَفْتَحُ ('I open'), where is the pronoun?",
          "options": [
            "It is the أ at the start",
            "It is hidden within the verb (أَنَا) — a ضَمِيْرٌ مُسْتَتِرٌ",
            "It is the dammah at the end",
            "There is no pronoun in this صِيْغَةٌ"
          ],
          "correct": 1,
          "explanation": "The أ is the حَرْفُ الْمُضَارِعِ, not a pronoun. الْمُتَكَلِّمُ is one of the five صِيَغٌ of الْمُضَارِعُ whose pronoun (أَنَا) is hidden."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَفْتَحُ can mean…",
          "options": [
            "'She opens' or 'You (m/s) open'",
            "'He opens' or 'She opens'",
            "'You (m/s) open' or 'You (f/s) open'",
            "'She opens' only"
          ],
          "correct": 0,
          "explanation": "تَفْتَحُ is shared by الْغَائِبَةُ (hidden هِيَ) and الْمُخَاطَبُ (hidden أَنْتَ). 'You (f/s)' is the distinct form تَفْتَحِيْنَ."
        },
        {
          "title": "Book Exercise 2 (p. 26)",
          "kind": "mcq",
          "prompt": "A مُضَارِعٌ beginning with تَـ and ending in ـُوْنَ (e.g. تَفْعَلُوْنَ) is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبُوْنَ — You (m/p)",
            "الْغَائِبُوْنَ — They (m/p)",
            "الْمُخَاطَبَاتُ — You (f/p)",
            "الْمُتَكَلِّمُوْنَ — We"
          ],
          "correct": 0,
          "explanation": "The تـ prefix marks the second person here, and the pronoun و marks masculine plural: You (m/p). They (m/p) would begin with يـ."
        },
        {
          "title": "Book Exercise 2 (p. 26)",
          "kind": "mcq",
          "prompt": "A مُضَارِعٌ beginning with تَـ and ending in ـِيْنَ (e.g. تَفْعَلِيْنَ) is which صِيْغَةٌ?",
          "options": [
            "الْمُخَاطَبَةُ — You (f/s)",
            "الْمُخَاطَبَاتُ — You (f/p)",
            "الْغَائِبَةُ — She",
            "الْغَائِبَتَانِ — They (f/d)"
          ],
          "correct": 0,
          "explanation": "The pronoun ي after the verb belongs only to الْمُخَاطَبَةُ: You (f/s)."
        },
        {
          "title": "Book Exercise 2 (p. 26)",
          "kind": "mcq",
          "prompt": "A مُضَارِعٌ beginning with يَـ and ending in the pronoun نَ (e.g. يَفْعَلْنَ) is which صِيْغَةٌ?",
          "options": [
            "الْغَائِبَاتُ — They (f/p)",
            "الْمُخَاطَبَاتُ — You (f/p)",
            "الْغَائِبُوْنَ — They (m/p)",
            "الْمُتَكَلِّمُوْنَ — We"
          ],
          "correct": 0,
          "explanation": "يـ prefix + نَ pronoun = third person feminine plural, الْغَائِبَاتُ."
        },
        {
          "title": "Book Exercise 2 (p. 26)",
          "kind": "mcq",
          "prompt": "A مُضَارِعٌ beginning with نَـ with no visible pronoun (e.g. نَفْعَلُ) is which صِيْغَةٌ?",
          "options": [
            "الْمُتَكَلِّمُوْنَ — We",
            "الْمُتَكَلِّمُ — I",
            "الْغَائِبَاتُ — They (f/p)",
            "الْمُخَاطَبُ — You (m/s)"
          ],
          "correct": 0,
          "explanation": "The نـ prefix is the حَرْفُ الْمُضَارِعِ of الْمُتَكَلِّمُوْنَ; the pronoun نَحْنُ is hidden."
        },
        {
          "title": "Book Exercise 3 (p. 27)",
          "kind": "mcq",
          "prompt": "تَرْكَعُوْنَ means…",
          "options": [
            "You (m/p) bow",
            "They (m/p) bow",
            "You (f/p) bow",
            "We bow"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبُوْنَ: تـ prefix + pronoun و — 'You (m/p) bow, are bowing, will bow'. (رَكَعَ يَرْكَعُ = to bow.)"
        },
        {
          "title": "Book Exercise 3 (p. 27)",
          "kind": "mcq",
          "prompt": "يَقْرَؤُوْنَ means…",
          "options": [
            "They (m/p) read",
            "You (m/p) read",
            "They (m/d) read",
            "They (f/p) read"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ: يـ prefix + pronoun و — 'They (m/p) read, are reading, will read'. (قَرَأَ يَقْرَأُ = to read.)"
        },
        {
          "title": "Book Exercise 3 (p. 27)",
          "kind": "mcq",
          "prompt": "أَسْأَلُ means…",
          "options": [
            "I ask",
            "We ask",
            "He asks",
            "You (m/s) ask"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ: the أ is the حَرْفُ الْمُضَارِعِ and أَنَا is hidden — 'I ask, am asking, will ask'. (سَأَلَ يَسْأَلُ = to ask.)"
        },
        {
          "title": "Book Exercise 3 (p. 27)",
          "kind": "mcq",
          "prompt": "تَجْعَلْنَ means…",
          "options": [
            "You (f/p) make",
            "They (f/p) make",
            "You (f/d) make",
            "You (m/p) make"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ: تـ prefix + pronoun نَ — \"You (f/p) make\". They (f/p) would be يَجْعَلْنَ."
        },
        {
          "title": "Book Exercise 4 (p. 27)",
          "kind": "mcq",
          "prompt": "'She bewitches' in Arabic is…",
          "options": [
            "تَسْحَرُ",
            "يَسْحَرُ",
            "تَسْحَرِيْنَ",
            "سَحَرَتْ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَةُ of الْمُضَارِعُ takes the تـ prefix with a hidden هِيَ: تَسْحَرُ. سَحَرَتْ is the past 'she bewitched'. (سَحَرَ يَسْحَرُ = to bewitch.)"
        },
        {
          "title": "Book Exercise 4 (p. 27)",
          "kind": "mcq",
          "prompt": "'We send' in Arabic is…",
          "options": [
            "نَبْعَثُ",
            "يَبْعَثُ",
            "أَبْعَثُ",
            "بَعَثْنَا"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمُضَارِعُ takes the نـ prefix: نَبْعَثُ. بَعَثْنَا is the past 'we sent'. (بَعَثَ يَبْعَثُ = to send.)"
        },
        {
          "title": "Book Exercise 4 (p. 27)",
          "kind": "mcq",
          "prompt": "'They (f/d) make' in Arabic is…",
          "options": [
            "تَجْعَلَانِ",
            "يَجْعَلَانِ",
            "تَجْعَلْنَ",
            "جَعَلَتَا"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَتَانِ of الْمُضَارِعُ is تَجْعَلَانِ — note the تـ prefix even though it is third person. يَجْعَلَانِ is the masculine dual."
        },
        {
          "title": "Book Exercise 5 (p. 27)",
          "kind": "mcq",
          "prompt": "Change the gender of يَرْكَعْنَ whilst keeping the number and person the same.",
          "options": [
            "يَرْكَعُوْنَ",
            "تَرْكَعْنَ",
            "يَرْكَعَانِ",
            "تَرْكَعُوْنَ"
          ],
          "correct": 0,
          "explanation": "يَرْكَعْنَ is They (f/p); the masculine counterpart (third person plural) is الْغَائِبُوْنَ: يَرْكَعُوْنَ."
        },
        {
          "title": "Book Exercise 5 (p. 27)",
          "kind": "mcq",
          "prompt": "Change the gender of تَقْرَئِيْنَ (You f/s read) whilst keeping the number and person the same.",
          "options": [
            "تَقْرَأُ",
            "يَقْرَأُ",
            "تَقْرَأَانِ",
            "أَقْرَأُ"
          ],
          "correct": 0,
          "explanation": "The masculine counterpart of الْمُخَاطَبَةُ is الْمُخَاطَبُ: تَقْرَأُ (with the pronoun أَنْتَ hidden)."
        },
        {
          "title": "Book Exercise 6 (p. 27)",
          "kind": "mcq",
          "prompt": "Change بَعَثُوْا from الْمَاضِيْ to الْمُضَارِعُ whilst keeping the number, gender, and person the same.",
          "options": [
            "يَبْعَثُوْنَ",
            "تَبْعَثُوْنَ",
            "يَبْعَثَانِ",
            "نَبْعَثُ"
          ],
          "correct": 0,
          "explanation": "بَعَثُوْا is الْغَائِبُوْنَ ('They m/p sent'); its مُضَارِعٌ is يَبْعَثُوْنَ ('They m/p send'). The book's model: فَعَلْتُنَّ ⇦ تَفْعَلْنَ."
        },
        {
          "title": "Book Exercise 6 (p. 27)",
          "kind": "mcq",
          "prompt": "Change رَفَعْتُمْ from الْمَاضِيْ to الْمُضَارِعُ whilst keeping the number, gender, and person the same.",
          "options": [
            "تَرْفَعُوْنَ",
            "يَرْفَعُوْنَ",
            "تَرْفَعَانِ",
            "نَرْفَعُ"
          ],
          "correct": 0,
          "explanation": "رَفَعْتُمْ is الْمُخَاطَبُوْنَ ('You m/p elevated'); its مُضَارِعٌ is تَرْفَعُوْنَ."
        },
        {
          "title": "Book Exercise 6 (p. 27)",
          "kind": "mcq",
          "prompt": "Change لَعَنْتِ from الْمَاضِيْ to الْمُضَارِعُ whilst keeping the number, gender, and person the same.",
          "options": [
            "تَلْعَنِيْنَ",
            "تَلْعَنُ",
            "يَلْعَنَّ",
            "تَلْعَنَّ"
          ],
          "correct": 0,
          "explanation": "لَعَنْتِ is الْمُخَاطَبَةُ ('You f/s cursed'); its مُضَارِعٌ is تَلْعَنِيْنَ."
        },
        {
          "title": "Book Exercise 6 (p. 27)",
          "kind": "mcq",
          "prompt": "Change نَفَعْنَا from الْمَاضِيْ to الْمُضَارِعُ whilst keeping the number, gender, and person the same.",
          "options": [
            "نَنْفَعُ",
            "يَنْفَعُ",
            "أَنْفَعُ",
            "تَنْفَعُ"
          ],
          "correct": 0,
          "explanation": "نَفَعْنَا is الْمُتَكَلِّمُوْنَ ('We profited'); its مُضَارِعٌ is نَنْفَعُ ('We profit')."
        },
        {
          "title": "Book Exercise 7 (p. 28)",
          "kind": "mcq",
          "prompt": "Change أَرْكَعُ from الْمُضَارِعُ to الْمَاضِيْ whilst keeping the number, gender, and person the same.",
          "options": [
            "رَكَعْتُ",
            "رَكَعَ",
            "رَكَعْنَا",
            "رَكَعْتَ"
          ],
          "correct": 0,
          "explanation": "أَرْكَعُ is الْمُتَكَلِّمُ ('I bow'); its مَاضِيْ is رَكَعْتُ ('I bowed')."
        },
        {
          "title": "Book Exercise 7 (p. 28)",
          "kind": "mcq",
          "prompt": "Change تَفْتَحِيْنَ from الْمُضَارِعُ to الْمَاضِيْ whilst keeping the number, gender, and person the same.",
          "options": [
            "فَتَحْتِ",
            "فَتَحَتْ",
            "فَتَحْتَ",
            "فَتَحْتُنَّ"
          ],
          "correct": 0,
          "explanation": "تَفْتَحِيْنَ is الْمُخَاطَبَةُ ('You f/s open'); its مَاضِيْ is فَتَحْتِ with the pronoun تِ."
        },
        {
          "title": "Book Exercise 7 (p. 28)",
          "kind": "mcq",
          "prompt": "Change تَذْهَبْنَ from الْمُضَارِعُ to الْمَاضِيْ whilst keeping the number, gender, and person the same.",
          "options": [
            "ذَهَبْتُنَّ",
            "ذَهَبْنَ",
            "ذَهَبْتُمْ",
            "ذَهَبَتَا"
          ],
          "correct": 0,
          "explanation": "تَذْهَبْنَ is الْمُخَاطَبَاتُ ('You f/p go'); its مَاضِيْ is ذَهَبْتُنَّ. ذَهَبْنَ is the third person 'They (f/p) went'."
        },
        {
          "title": "Book Exercise 7 (p. 28)",
          "kind": "mcq",
          "prompt": "Change تَنْفَعُوْنَ from الْمُضَارِعُ to الْمَاضِيْ whilst keeping the number, gender, and person the same.",
          "options": [
            "نَفَعْتُمْ",
            "نَفَعُوْا",
            "نَفَعْنَا",
            "نَفَعْتُنَّ"
          ],
          "correct": 0,
          "explanation": "تَنْفَعُوْنَ is الْمُخَاطَبُوْنَ ('You m/p profit'); its مَاضِيْ is نَفَعْتُمْ. نَفَعُوْا is 'They (m/p) profited'."
        }
      ]
    },
    {
      "id": "l4",
      "title": "الْأَبْوَابُ",
      "subtitle": "The Scale of a Verb — the فَاءُ/عَيْنُ/لَامُ الْكَلِمَةِ scale, بَاب فَتَحَ and بَاب سَمِعَ",
      "concepts": [
        {
          "heading": "Scale of a Verb",
          "lines": [
            {
              "html": "The letters <bdi>ف</bdi>، <bdi>ع</bdi> and <bdi>ل</bdi> are used as a scale for all words. For example, the scale of the verb <bdi>ذَهَبَ</bdi> is <bdi>فَعَلَ</bdi>. Each letter of a word is named after the letter it corresponds to: in <bdi>ذَهَبَ</bdi>, the <bdi>ذ</bdi> is labelled the <bdi>فَاءُ الْكَلِمَةِ</bdi>, the <bdi>هـ</bdi> is labelled the <bdi>عَيْنُ الْكَلِمَةِ</bdi>, and the <bdi>ب</bdi> is labelled the <bdi>لَامُ الْكَلِمَةِ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "The scale applied to ذَهَبَ",
                "headers": [
                  "فَاءُ الْكَلِمَةِ",
                  "عَيْنُ الْكَلِمَةِ",
                  "لَامُ الْكَلِمَةِ"
                ],
                "rows": [
                  [
                    "فَـ",
                    "ـعَـ",
                    "ـلَ"
                  ],
                  [
                    "ذَ",
                    "هَـ",
                    "ـبَ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In the word ذَهَبَ, the letter هـ is labelled…",
            "kind": "mcq",
            "options": ["فَاءُ الْكَلِمَةِ", "عَيْنُ الْكَلِمَةِ", "لَامُ الْكَلِمَةِ", "حَرْفُ الْمُضَارِعِ"],
            "correct": 1
          }
        },
        {
          "heading": "The حَرَكَةٌ of the عَيْنُ الْكَلِمَةِ",
          "lines": [
            {
              "html": "The <bdi>عَيْنُ الْكَلِمَةِ</bdi> of a <bdi>الْمَاضِيْ</bdi> can have any of the three <bdi>حَرَكَاتٌ</bdi>, i.e., <bdi>فَتْحَةٌ</bdi>، <bdi>ضَمَّةٌ</bdi> or <bdi>كَسْرَةٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "The عَيْنُ الْكَلِمَةِ of الْمَاضِيْ",
                "headers": [
                  "فَاءُ الْكَلِمَةِ",
                  "عَيْنُ الْكَلِمَةِ",
                  "لَامُ الْكَلِمَةِ"
                ],
                "rows": [
                  [
                    "فَـ",
                    "ـتَـ",
                    "ـحَ"
                  ],
                  [
                    "كَـ",
                    "ـرُ",
                    "مَ"
                  ],
                  [
                    "سَـ",
                    "ـمِـ",
                    "ـعَ"
                  ]
                ]
              }
            },
            {
              "html": "Similarly, the <bdi>عَيْنُ الْكَلِمَةِ</bdi> of the <bdi>الْمُضَارِعُ</bdi> can have any of the three <bdi>حَرَكَاتٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "The عَيْنُ الْكَلِمَةِ of الْمُضَارِعُ",
                "headers": [
                  "حَرْفُ الْمُضَارِعِ",
                  "فَاءُ الْكَلِمَةِ",
                  "عَيْنُ الْكَلِمَةِ",
                  "لَامُ الْكَلِمَةِ"
                ],
                "rows": [
                  [
                    "يَـ",
                    "ـفْـ",
                    "ـتَـ",
                    "ـحُ"
                  ],
                  [
                    "يَـ",
                    "كْـ",
                    "ـرُ",
                    "مُ"
                  ],
                  [
                    "يَـ",
                    "ضْـ",
                    "ـرِ",
                    "بُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "The عَيْنُ الْكَلِمَةِ of a الْمَاضِيْ can carry…",
            "kind": "mcq",
            "options": ["Only a فَتْحَةٌ", "Only a فَتْحَةٌ or كَسْرَةٌ", "Any of the three حَرَكَاتٌ: فَتْحَةٌ، ضَمَّةٌ or كَسْرَةٌ", "Only a سُكُوْنٌ"],
            "correct": 2
          }
        },
        {
          "heading": "Combinations of Verbs — الْأَبْوَابُ",
          "lines": [
            {
              "html": "Based on the various combinations of the <bdi>عَيْنُ الْكَلِمَةِ</bdi> of <bdi>الْمَاضِيْ</bdi> and <bdi>الْمُضَارِعُ</bdi>, verbs are divided into different categories. Each of these is called a <bdi>بَابٌ</bdi>; its plural is <bdi>أَبْوَابٌ</bdi>. Each <bdi>بَابٌ</bdi> is named after one commonly used verb which falls on that pattern.",
              "list": false
            },
            {
              "html": "In theory there are nine possible combinations, but only six are used. These are: (1) <bdi>فَتَحَ يَفْتَحُ</bdi> (2) <bdi>سَمِعَ يَسْمَعُ</bdi> (3) <bdi>ضَرَبَ يَضْرِبُ</bdi> (4) <bdi>نَصَرَ يَنْصُرُ</bdi> (5) <bdi>كَرُمَ يَكْرُمُ</bdi> (6) <bdi>حَسِبَ يَحْسِبُ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "The six أَبْوَابٌ (rows: الْمَاضِيْ pattern; columns: الْمُضَارِعُ pattern)",
                "headers": [
                  "",
                  "يَفْعَلُ",
                  "يَفْعِلُ",
                  "يَفْعُلُ"
                ],
                "rows": [
                  [
                    "فَعَلَ",
                    "فَتَحَ يَفْتَحُ",
                    "ضَرَبَ يَضْرِبُ",
                    "نَصَرَ يَنْصُرُ"
                  ],
                  [
                    "فَعِلَ",
                    "سَمِعَ يَسْمَعُ",
                    "حَسِبَ يَحْسِبُ",
                    "-"
                  ],
                  [
                    "فَعُلَ",
                    "-",
                    "-",
                    "كَرُمَ يَكْرُمُ"
                  ]
                ]
              }
            },
            {
              "html": "The names of the <bdi>أَبْوَابٌ</bdi> are sometimes represented by the first letter of the verb. For example, the <bdi>بَابٌ</bdi> of <bdi>فَتَحَ</bdi> is represented by a (<bdi>ف</bdi>), <bdi>سَمِعَ</bdi> by a (<bdi>س</bdi>), etc.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is a بَابٌ؟",
            "kind": "mcq",
            "options": ["A category of verbs based on the combination of the عَيْنُ الْكَلِمَةِ of الْمَاضِيْ and الْمُضَارِعُ", "A category of verbs based on the number of letters", "The pronoun attached to a verb", "The sign of the grammatical state of the verb"],
            "correct": 0
          }
        },
        {
          "heading": "بَاب فَتَحَ يَفْتَحُ",
          "lines": [
            {
              "html": "The conjugation of verbs on the pattern <bdi>فَتَحَ يَفْتَحُ</bdi> is given below. The <bdi>عَيْنُ الْكَلِمَةِ</bdi> has a <bdi>فَتْحَةٌ</bdi> in both <bdi>الْمَاضِيْ</bdi> and <bdi>الْمُضَارِعُ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of بَاب فَتَحَ يَفْتَحُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "الْمُضَارِعُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "فَتَحَ",
                    "يَفْتَحُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "فَتَحَا",
                    "يَفْتَحَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "فَتَحُوْا",
                    "يَفْتَحُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "فَتَحَتْ",
                    "تَفْتَحُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "فَتَحَتَا",
                    "تَفْتَحَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "فَتَحْنَ",
                    "يَفْتَحْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "فَتَحْتَ",
                    "تَفْتَحُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "فَتَحْتُمَا",
                    "تَفْتَحَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "فَتَحْتُمْ",
                    "تَفْتَحُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "فَتَحْتِ",
                    "تَفْتَحِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "فَتَحْتُمَا",
                    "تَفْتَحَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "فَتَحْتُنَّ",
                    "تَفْتَحْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "فَتَحْتُ",
                    "أَفْتَحُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "فَتَحْنَا",
                    "نَفْتَحُ"
                  ]
                ]
              }
            },
            {
              "html": "All verbs discussed until now (Lessons 2 and 3) were from <bdi>بَاب فَتَحَ يَفْتَحُ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "All the verbs studied in Lessons 2 and 3 (e.g. فَتَحَ، ذَهَبَ، رَفَعَ) were from which بَابٌ؟",
            "kind": "mcq",
            "options": ["بَاب فَتَحَ يَفْتَحُ", "بَاب سَمِعَ يَسْمَعُ", "بَاب ضَرَبَ يَضْرِبُ", "بَاب حَسِبَ يَحْسِبُ"],
            "correct": 0
          }
        },
        {
          "heading": "بَاب سَمِعَ يَسْمَعُ",
          "lines": [
            {
              "html": "The conjugation of verbs on the pattern <bdi>سَمِعَ يَسْمَعُ</bdi> is given below. The <bdi>عَيْنُ الْكَلِمَةِ</bdi> has a <bdi>كَسْرَةٌ</bdi> in <bdi>الْمَاضِيْ</bdi> and a <bdi>فَتْحَةٌ</bdi> in <bdi>الْمُضَارِعُ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of بَاب سَمِعَ يَسْمَعُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "الْمُضَارِعُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "سَمِعَ",
                    "يَسْمَعُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "سَمِعَا",
                    "يَسْمَعَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "سَمِعُوْا",
                    "يَسْمَعُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "سَمِعَتْ",
                    "تَسْمَعُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "سَمِعَتَا",
                    "تَسْمَعَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "سَمِعْنَ",
                    "يَسْمَعْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "سَمِعْتَ",
                    "تَسْمَعُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "سَمِعْتُمَا",
                    "تَسْمَعَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "سَمِعْتُمْ",
                    "تَسْمَعُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "سَمِعْتِ",
                    "تَسْمَعِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "سَمِعْتُمَا",
                    "تَسْمَعَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "سَمِعْتُنَّ",
                    "تَسْمَعْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "سَمِعْتُ",
                    "أَسْمَعُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "سَمِعْنَا",
                    "نَسْمَعُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the pattern of بَاب سَمِعَ يَسْمَعُ؟",
            "kind": "mcq",
            "options": ["فَعَلَ يَفْعَلُ", "فَعِلَ يَفْعَلُ", "فَعِلَ يَفْعِلُ", "فَعُلَ يَفْعُلُ"],
            "correct": 1
          }
        }
      ],
      "summary": {
        "title": "Part 3: الْأَبْوَابُ (Scale, بَاب فَتَحَ and بَاب سَمِعَ)",
        "rows": [
          {
            "label": "Verb category — a combination of الْمَاضِيْ and الْمُضَارِعُ",
            "arabic": "بَابٌ (أَبْوَابٌ)",
            "meaning": "Verb category — a combination of الْمَاضِيْ and الْمُضَارِعُ",
            "unlockAt": 0
          },
          {
            "label": "The first letter of الْمَاضِيْ",
            "arabic": "فَاءُ الْكَلِمَةِ",
            "meaning": "The first letter of الْمَاضِيْ",
            "unlockAt": 1
          },
          {
            "label": "The second letter of الْمَاضِيْ",
            "arabic": "عَيْنُ الْكَلِمَةِ",
            "meaning": "The second letter of الْمَاضِيْ",
            "unlockAt": 2
          },
          {
            "label": "The third letter of الْمَاضِيْ",
            "arabic": "لَامُ الْكَلِمَةِ",
            "meaning": "The third letter of الْمَاضِيْ",
            "unlockAt": 3
          },
          {
            "label": "بَابٌ with فَتْحَةٌ in الْمَاضِيْ and فَتْحَةٌ in الْمُضَارِعُ",
            "arabic": "فَتَحَ يَفْتَحُ",
            "meaning": "بَابٌ with فَتْحَةٌ in الْمَاضِيْ and فَتْحَةٌ in الْمُضَارِعُ",
            "unlockAt": 4
          },
          {
            "label": "بَابٌ with كَسْرَةٌ in الْمَاضِيْ and فَتْحَةٌ in الْمُضَارِعُ",
            "arabic": "سَمِعَ يَسْمَعُ",
            "meaning": "بَابٌ with كَسْرَةٌ in الْمَاضِيْ and فَتْحَةٌ in الْمُضَارِعُ",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "Which letters are used as a scale for all Arabic words?",
          "options": [
            "أ، ت، ي، ن",
            "ف، ع، ل",
            "و، ا، ي",
            "س، م، ع"
          ],
          "correct": 1,
          "explanation": "The letters ف، ع and ل form the scale: e.g. the scale of ذَهَبَ is فَعَلَ."
        },
        {
          "q": "In the word ذَهَبَ, the letter هـ is labelled…",
          "options": [
            "فَاءُ الْكَلِمَةِ",
            "عَيْنُ الْكَلِمَةِ",
            "لَامُ الْكَلِمَةِ",
            "حَرْفُ الْمُضَارِعِ"
          ],
          "correct": 1,
          "explanation": "The ذ is the فَاءُ الْكَلِمَةِ, the هـ is the عَيْنُ الْكَلِمَةِ, and the ب is the لَامُ الْكَلِمَةِ."
        },
        {
          "q": "What is a بَابٌ?",
          "options": [
            "A category of verbs based on the combination of the عَيْنُ الْكَلِمَةِ of الْمَاضِيْ and الْمُضَارِعُ",
            "A category of verbs based on the number of letters",
            "The pronoun attached to a verb",
            "The sign of the grammatical state of the verb"
          ],
          "correct": 0,
          "explanation": "Verbs are divided into أَبْوَابٌ based on the حَرَكَةٌ of the عَيْنُ الْكَلِمَةِ in الْمَاضِيْ and الْمُضَارِعُ. Each بَابٌ is named after one commonly used verb on that pattern."
        },
        {
          "q": "In theory there are nine possible combinations of the عَيْنُ الْكَلِمَةِ. How many are actually used?",
          "options": [
            "Nine",
            "Three",
            "Six",
            "Four"
          ],
          "correct": 2,
          "explanation": "Only six are used: فَتَحَ يَفْتَحُ، سَمِعَ يَسْمَعُ، ضَرَبَ يَضْرِبُ، نَصَرَ يَنْصُرُ، كَرُمَ يَكْرُمُ، حَسِبَ يَحْسِبُ."
        },
        {
          "q": "What is the pattern of بَاب سَمِعَ يَسْمَعُ?",
          "options": [
            "فَعَلَ يَفْعَلُ",
            "فَعِلَ يَفْعَلُ",
            "فَعِلَ يَفْعِلُ",
            "فَعُلَ يَفْعُلُ"
          ],
          "correct": 1,
          "explanation": "سَمِعَ has a كَسْرَةٌ on the عَيْنُ الْكَلِمَةِ in الْمَاضِيْ (فَعِلَ) and a فَتْحَةٌ in الْمُضَارِعُ (يَفْعَلُ)."
        },
        {
          "q": "When the أَبْوَابٌ are represented by a single letter, what does (س) stand for?",
          "options": [
            "بَاب سَمِعَ يَسْمَعُ",
            "بَاب نَصَرَ يَنْصُرُ",
            "بَاب حَسِبَ يَحْسِبُ",
            "The سُكُوْنٌ on the لَامُ الْكَلِمَةِ"
          ],
          "correct": 0,
          "explanation": "The names of the أَبْوَابٌ are sometimes represented by the first letter of the verb: (ف) for فَتَحَ, (س) for سَمِعَ, etc."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The عَيْنُ الْكَلِمَةِ of a الْمَاضِيْ can carry…",
          "options": [
            "Only a فَتْحَةٌ",
            "Only a فَتْحَةٌ or كَسْرَةٌ",
            "Any of the three حَرَكَاتٌ: فَتْحَةٌ، ضَمَّةٌ or كَسْرَةٌ",
            "Only a سُكُوْنٌ"
          ],
          "correct": 2,
          "explanation": "Both the الْمَاضِيْ and الْمُضَارِعُ can have any of the three حَرَكَاتٌ on the عَيْنُ الْكَلِمَةِ, e.g. فَتَحَ، كَرُمَ، سَمِعَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which بَابٌ has a فَتْحَةٌ on the عَيْنُ الْكَلِمَةِ in BOTH الْمَاضِيْ and الْمُضَارِعُ?",
          "options": [
            "بَاب فَتَحَ يَفْتَحُ",
            "بَاب سَمِعَ يَسْمَعُ",
            "بَاب نَصَرَ يَنْصُرُ",
            "بَاب كَرُمَ يَكْرُمُ"
          ],
          "correct": 0,
          "explanation": "فَتَحَ يَفْتَحُ is the فَعَلَ يَفْعَلُ combination — فَتْحَةٌ in both tenses."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of these combinations is NOT one of the six used أَبْوَابٌ?",
          "options": [
            "فَعِلَ يَفْعِلُ (حَسِبَ يَحْسِبُ)",
            "فَعُلَ يَفْعَلُ",
            "فَعَلَ يَفْعُلُ (نَصَرَ يَنْصُرُ)",
            "فَعِلَ يَفْعَلُ (سَمِعَ يَسْمَعُ)"
          ],
          "correct": 1,
          "explanation": "فَعُلَ only combines with يَفْعُلُ (بَاب كَرُمَ يَكْرُمُ). فَعُلَ يَفْعَلُ is one of the three theoretical combinations that are not used."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The مُضَارِعٌ of سَمِعَ ('he heard') is…",
          "options": [
            "يَسْمَعُ",
            "يَسْمِعُ",
            "يَسْمُعُ",
            "أَسْمَعُ"
          ],
          "correct": 0,
          "explanation": "In بَاب سَمِعَ يَسْمَعُ the عَيْنُ الْكَلِمَةِ takes a فَتْحَةٌ in الْمُضَارِعُ: يَسْمَعُ 'he hears'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "All the verbs studied in Lessons 2 and 3 (e.g. فَتَحَ، ذَهَبَ، رَفَعَ) were from which بَابٌ?",
          "options": [
            "بَاب فَتَحَ يَفْتَحُ",
            "بَاب سَمِعَ يَسْمَعُ",
            "بَاب ضَرَبَ يَضْرِبُ",
            "بَاب حَسِبَ يَحْسِبُ"
          ],
          "correct": 0,
          "explanation": "The book notes after the فَتَحَ conjugation table: all verbs discussed until now were from بَاب فَتَحَ يَفْتَحُ."
        },
        {
          "title": "Book Exercise 2 (p. 33)",
          "kind": "mcq",
          "prompt": "خَسِرَا means…",
          "options": [
            "They (m/d) lost",
            "They (m/p) lost",
            "You (m/d) lost",
            "We lost"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَانِ with the dual pronoun ا: 'They (m/d) lost'. (خَسِرَ يَخْسَرُ = to lose.)"
        },
        {
          "title": "Book Exercise 2 (p. 33)",
          "kind": "mcq",
          "prompt": "تَعْمَلْنَ means…",
          "options": [
            "You (f/p) do",
            "They (f/p) do",
            "You (f/s) do",
            "You (m/p) do"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ of الْمُضَارِعُ: تـ prefix + pronoun نَ — 'You (f/p) do, are doing'. (عَمِلَ يَعْمَلُ = to do.)"
        },
        {
          "title": "Book Exercise 2 (p. 33)",
          "kind": "mcq",
          "prompt": "لَبِثْتُنَّ means…",
          "options": [
            "You (f/p) stayed",
            "They (f/p) stayed",
            "You (m/p) stayed",
            "You (f/d) stayed"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ of الْمَاضِيْ with the pronoun تُنَّ: 'You (f/p) stayed'. (لَبِثَ يَلْبَثُ = to stay, remain.)"
        },
        {
          "title": "Book Exercise 2 (p. 33)",
          "kind": "mcq",
          "prompt": "يَعْلَمَانِ means…",
          "options": [
            "They (m/d) know",
            "They (f/d) know",
            "You (m/d) know",
            "They (m/p) know"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَانِ of الْمُضَارِعُ: يـ prefix + dual pronoun ا — 'They (m/d) know'. (عَلِمَ يَعْلَمُ = to know.)"
        },
        {
          "title": "Book Exercise 2 (p. 33)",
          "kind": "mcq",
          "prompt": "حَزِنَتْ means…",
          "options": [
            "She was grieved",
            "You (f/s) were grieved",
            "They (f/p) were grieved",
            "I was grieved"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَةُ of الْمَاضِيْ — the ت is the feminine sign and هِيَ is hidden: 'She was grieved'. (حَزِنَ يَحْزَنُ = to be grieved.)"
        },
        {
          "title": "Book Exercise 2 (p. 33)",
          "kind": "mcq",
          "prompt": "يَرْكَبُوْنَ means…",
          "options": [
            "They (m/p) ride",
            "You (m/p) ride",
            "They (m/d) ride",
            "They (f/p) ride"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ of الْمُضَارِعُ: يـ prefix + pronoun و — 'They (m/p) ride, are riding, will ride'. (رَكِبَ يَرْكَبُ = to ride.)"
        },
        {
          "title": "Book Exercise 3 (p. 33)",
          "kind": "mcq",
          "prompt": "'We know' in Arabic is…",
          "options": [
            "نَعْلَمُ",
            "عَلِمْنَا",
            "يَعْلَمُ",
            "نَعْمَلُ"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمُضَارِعُ takes the نـ prefix: نَعْلَمُ. (عَلِمْنَا = 'we knew'; نَعْمَلُ = 'we do', from عَمِلَ.)"
        },
        {
          "title": "Book Exercise 3 (p. 33)",
          "kind": "mcq",
          "prompt": "'You (m/d) ridiculed' in Arabic is…",
          "options": [
            "سَخِرْتُمَا",
            "سَخِرَا",
            "سَخِرْتُمْ",
            "تَسْخَرَانِ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَانِ of الْمَاضِيْ takes the pronoun تُمَا: سَخِرْتُمَا. (سَخِرَ يَسْخَرُ = to ridicule.)"
        },
        {
          "title": "Book Exercise 3 (p. 33)",
          "kind": "mcq",
          "prompt": "'They (f/p) disliked' in Arabic is…",
          "options": [
            "كَرِهْنَ",
            "كَرِهْتُنَّ",
            "كَرِهُوْا",
            "يَكْرَهْنَ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of الْمَاضِيْ takes the pronoun نَ: كَرِهْنَ 'They (f/p) disliked'. (كَرِهَ يَكْرَهُ = to dislike.)"
        },
        {
          "title": "Book Exercise 3 (p. 33)",
          "kind": "mcq",
          "prompt": "'She has mercy' in Arabic is…",
          "options": [
            "تَرْحَمُ",
            "يَرْحَمُ",
            "رَحِمَتْ",
            "تَرْحَمِيْنَ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَةُ of الْمُضَارِعُ takes the تـ prefix with هِيَ hidden: تَرْحَمُ. (رَحِمَ يَرْحَمُ = to have mercy.)"
        },
        {
          "title": "to hear, listen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hear, listen\"?",
          "options": [
            "سَمِعَ يَسْمَعُ",
            "رَكِبَ يَرْكَبُ",
            "حَزِنَ يَحْزَنُ",
            "سَخِرَ يَسْخَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to hear, listen",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمِعَ يَسْمَعُ mean?",
          "options": [
            "to hear, listen",
            "to ride",
            "to be grieved",
            "to ridicule"
          ],
          "correct": 0
        },
        {
          "title": "to hear, listen (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَمِعَ يَسْمَعُ?",
          "options": [
            "سَمْعًا",
            "رُكُوْبًا",
            "حُزْنًا",
            "سُخْرِيَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to ride",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ride\"?",
          "options": [
            "رَكِبَ يَرْكَبُ",
            "حَزِنَ يَحْزَنُ",
            "سَخِرَ يَسْخَرُ",
            "لَبِثَ يَلْبَثُ"
          ],
          "correct": 0
        },
        {
          "title": "to ride",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَكِبَ يَرْكَبُ mean?",
          "options": [
            "to ride",
            "to be grieved",
            "to ridicule",
            "to stay, remain"
          ],
          "correct": 0
        },
        {
          "title": "to ride (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَكِبَ يَرْكَبُ?",
          "options": [
            "رُكُوْبًا",
            "حُزْنًا",
            "سُخْرِيَّةً",
            "لُبْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to be grieved",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be grieved\"?",
          "options": [
            "حَزِنَ يَحْزَنُ",
            "سَخِرَ يَسْخَرُ",
            "لَبِثَ يَلْبَثُ",
            "شَهِدَ يَشْهَدُ"
          ],
          "correct": 0
        },
        {
          "title": "to be grieved",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَزِنَ يَحْزَنُ mean?",
          "options": [
            "to be grieved",
            "to ridicule",
            "to stay, remain",
            "to bear witness"
          ],
          "correct": 0
        },
        {
          "title": "to be grieved (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَزِنَ يَحْزَنُ?",
          "options": [
            "حُزْنًا",
            "سُخْرِيَّةً",
            "لُبْثًا",
            "شَهَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to ridicule",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ridicule\"?",
          "options": [
            "سَخِرَ يَسْخَرُ",
            "لَبِثَ يَلْبَثُ",
            "شَهِدَ يَشْهَدُ",
            "حَفِظَ يَحْفَظُ"
          ],
          "correct": 0
        },
        {
          "title": "to ridicule",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَخِرَ يَسْخَرُ mean?",
          "options": [
            "to ridicule",
            "to stay, remain",
            "to bear witness",
            "to guard"
          ],
          "correct": 0
        },
        {
          "title": "to ridicule (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَخِرَ يَسْخَرُ?",
          "options": [
            "سُخْرِيَّةً",
            "لُبْثًا",
            "شَهَادَةً",
            "حِفْظًا"
          ],
          "correct": 0
        },
        {
          "title": "to stay, remain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to stay, remain\"?",
          "options": [
            "لَبِثَ يَلْبَثُ",
            "شَهِدَ يَشْهَدُ",
            "حَفِظَ يَحْفَظُ",
            "عَلِمَ يَعْلَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to stay, remain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبِثَ يَلْبَثُ mean?",
          "options": [
            "to stay, remain",
            "to bear witness",
            "to guard",
            "to know"
          ],
          "correct": 0
        },
        {
          "title": "to stay, remain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَبِثَ يَلْبَثُ?",
          "options": [
            "لُبْثًا",
            "شَهَادَةً",
            "حِفْظًا",
            "عِلْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to bear witness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bear witness\"?",
          "options": [
            "شَهِدَ يَشْهَدُ",
            "حَفِظَ يَحْفَظُ",
            "عَلِمَ يَعْلَمُ",
            "خَسِرَ يَخْسَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to bear witness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَهِدَ يَشْهَدُ mean?",
          "options": [
            "to bear witness",
            "to guard",
            "to know",
            "to lose"
          ],
          "correct": 0
        },
        {
          "title": "to bear witness (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَهِدَ يَشْهَدُ?",
          "options": [
            "شَهَادَةً",
            "حِفْظًا",
            "عِلْمًا",
            "خُسْرَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to guard",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to guard\"?",
          "options": [
            "حَفِظَ يَحْفَظُ",
            "عَلِمَ يَعْلَمُ",
            "خَسِرَ يَخْسَرُ",
            "عَمِلَ يَعْمَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to guard",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَفِظَ يَحْفَظُ mean?",
          "options": [
            "to guard",
            "to know",
            "to lose",
            "to do"
          ],
          "correct": 0
        },
        {
          "title": "to guard (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَفِظَ يَحْفَظُ?",
          "options": [
            "حِفْظًا",
            "عِلْمًا",
            "خُسْرَانًا",
            "عَمَلًا"
          ],
          "correct": 0
        },
        {
          "title": "to know",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to know\"?",
          "options": [
            "عَلِمَ يَعْلَمُ",
            "خَسِرَ يَخْسَرُ",
            "عَمِلَ يَعْمَلُ",
            "رَحِمَ يَرْحَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to know",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَلِمَ يَعْلَمُ mean?",
          "options": [
            "to know",
            "to lose",
            "to do",
            "to have mercy"
          ],
          "correct": 0
        },
        {
          "title": "to know (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَلِمَ يَعْلَمُ?",
          "options": [
            "عِلْمًا",
            "خُسْرَانًا",
            "عَمَلًا",
            "رَحْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to lose",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lose\"?",
          "options": [
            "خَسِرَ يَخْسَرُ",
            "عَمِلَ يَعْمَلُ",
            "رَحِمَ يَرْحَمُ",
            "كَرِهَ يَكْرَهُ"
          ],
          "correct": 0
        },
        {
          "title": "to lose",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَسِرَ يَخْسَرُ mean?",
          "options": [
            "to lose",
            "to do",
            "to have mercy",
            "to dislike"
          ],
          "correct": 0
        },
        {
          "title": "to lose (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَسِرَ يَخْسَرُ?",
          "options": [
            "خُسْرَانًا",
            "عَمَلًا",
            "رَحْمَةً",
            "كَرَاهَةً"
          ],
          "correct": 0
        },
        {
          "title": "to do",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to do\"?",
          "options": [
            "عَمِلَ يَعْمَلُ",
            "رَحِمَ يَرْحَمُ",
            "كَرِهَ يَكْرَهُ",
            "سَمِعَ يَسْمَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to do",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَمِلَ يَعْمَلُ mean?",
          "options": [
            "to do",
            "to have mercy",
            "to dislike",
            "to hear, listen"
          ],
          "correct": 0
        },
        {
          "title": "to do (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَمِلَ يَعْمَلُ?",
          "options": [
            "عَمَلًا",
            "رَحْمَةً",
            "كَرَاهَةً",
            "سَمْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to have mercy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to have mercy\"?",
          "options": [
            "رَحِمَ يَرْحَمُ",
            "كَرِهَ يَكْرَهُ",
            "سَمِعَ يَسْمَعُ",
            "رَكِبَ يَرْكَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to have mercy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَحِمَ يَرْحَمُ mean?",
          "options": [
            "to have mercy",
            "to dislike",
            "to hear, listen",
            "to ride"
          ],
          "correct": 0
        },
        {
          "title": "to have mercy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَحِمَ يَرْحَمُ?",
          "options": [
            "رَحْمَةً",
            "كَرَاهَةً",
            "سَمْعًا",
            "رُكُوْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to dislike",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to dislike\"?",
          "options": [
            "كَرِهَ يَكْرَهُ",
            "سَمِعَ يَسْمَعُ",
            "رَكِبَ يَرْكَبُ",
            "حَزِنَ يَحْزَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to dislike",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَرِهَ يَكْرَهُ mean?",
          "options": [
            "to dislike",
            "to hear, listen",
            "to ride",
            "to be grieved"
          ],
          "correct": 0
        },
        {
          "title": "to dislike (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَرِهَ يَكْرَهُ?",
          "options": [
            "كَرَاهَةً",
            "سَمْعًا",
            "رُكُوْبًا",
            "حُزْنًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "بَاب ضَرَبَ وَبَاب نَصَرَ",
      "subtitle": "Two More أَبْوَابٌ — both with فَتْحَةٌ in الْمَاضِيْ",
      "concepts": [
        {
          "heading": "بَاب ضَرَبَ يَضْرِبُ",
          "lines": [
            {
              "html": "The conjugation of verbs on the pattern <bdi>ضَرَبَ يَضْرِبُ</bdi> is given below. The <bdi>عَيْنُ الْكَلِمَةِ</bdi> has a <bdi>فَتْحَةٌ</bdi> in <bdi>الْمَاضِيْ</bdi> and a <bdi>كَسْرَةٌ</bdi> in <bdi>الْمُضَارِعُ</bdi> (<bdi>فَعَلَ يَفْعِلُ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of بَاب ضَرَبَ يَضْرِبُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "الْمُضَارِعُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "ضَرَبَ",
                    "يَضْرِبُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "ضَرَبَا",
                    "يَضْرِبَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "ضَرَبُوْا",
                    "يَضْرِبُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "ضَرَبَتْ",
                    "تَضْرِبُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "ضَرَبَتَا",
                    "تَضْرِبَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "ضَرَبْنَ",
                    "يَضْرِبْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "ضَرَبْتَ",
                    "تَضْرِبُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "ضَرَبْتُمَا",
                    "تَضْرِبَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "ضَرَبْتُمْ",
                    "تَضْرِبُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "ضَرَبْتِ",
                    "تَضْرِبِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "ضَرَبْتُمَا",
                    "تَضْرِبَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "ضَرَبْتُنَّ",
                    "تَضْرِبْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "ضَرَبْتُ",
                    "أَضْرِبُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "ضَرَبْنَا",
                    "نَضْرِبُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the pattern of بَاب ضَرَبَ يَضْرِبُ؟",
            "kind": "mcq",
            "options": ["فَعَلَ يَفْعِلُ", "فَعَلَ يَفْعَلُ", "فَعِلَ يَفْعِلُ", "فَعَلَ يَفْعُلُ"],
            "correct": 0
          }
        },
        {
          "heading": "بَاب نَصَرَ يَنْصُرُ",
          "lines": [
            {
              "html": "The conjugation of verbs on the pattern <bdi>نَصَرَ يَنْصُرُ</bdi> is given below. The <bdi>عَيْنُ الْكَلِمَةِ</bdi> has a <bdi>فَتْحَةٌ</bdi> in <bdi>الْمَاضِيْ</bdi> and a <bdi>ضَمَّةٌ</bdi> in <bdi>الْمُضَارِعُ</bdi> (<bdi>فَعَلَ يَفْعُلُ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of بَاب نَصَرَ يَنْصُرُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "الْمُضَارِعُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "نَصَرَ",
                    "يَنْصُرُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "نَصَرَا",
                    "يَنْصُرَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "نَصَرُوْا",
                    "يَنْصُرُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "نَصَرَتْ",
                    "تَنْصُرُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "نَصَرَتَا",
                    "تَنْصُرَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "نَصَرْنَ",
                    "يَنْصُرْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "نَصَرْتَ",
                    "تَنْصُرُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "نَصَرْتُمَا",
                    "تَنْصُرَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "نَصَرْتُمْ",
                    "تَنْصُرُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "نَصَرْتِ",
                    "تَنْصُرِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "نَصَرْتُمَا",
                    "تَنْصُرَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "نَصَرْتُنَّ",
                    "تَنْصُرْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "نَصَرْتُ",
                    "أَنْصُرُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نَصَرْنَا",
                    "نَنْصُرُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the pattern of بَاب نَصَرَ يَنْصُرُ؟",
            "kind": "mcq",
            "options": ["فَعَلَ يَفْعُلُ", "فَعُلَ يَفْعُلُ", "فَعَلَ يَفْعِلُ", "فَعِلَ يَفْعَلُ"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 3: الْأَبْوَابُ (بَاب ضَرَبَ and بَاب نَصَرَ)",
        "rows": [
          {
            "label": "بَابٌ with فَتْحَةٌ in الْمَاضِيْ and كَسْرَةٌ in الْمُضَارِعُ",
            "arabic": "ضَرَبَ يَضْرِبُ",
            "meaning": "بَابٌ with فَتْحَةٌ in الْمَاضِيْ and كَسْرَةٌ in الْمُضَارِعُ",
            "unlockAt": 0
          },
          {
            "label": "بَابٌ with فَتْحَةٌ in الْمَاضِيْ and ضَمَّةٌ in الْمُضَارِعُ",
            "arabic": "نَصَرَ يَنْصُرُ",
            "meaning": "بَابٌ with فَتْحَةٌ in الْمَاضِيْ and ضَمَّةٌ in الْمُضَارِعُ",
            "unlockAt": 3
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the pattern of بَاب ضَرَبَ يَضْرِبُ?",
          "options": [
            "فَعَلَ يَفْعِلُ",
            "فَعَلَ يَفْعَلُ",
            "فَعِلَ يَفْعِلُ",
            "فَعَلَ يَفْعُلُ"
          ],
          "correct": 0,
          "explanation": "ضَرَبَ has a فَتْحَةٌ on the عَيْنُ الْكَلِمَةِ in الْمَاضِيْ and a كَسْرَةٌ in الْمُضَارِعُ: فَعَلَ يَفْعِلُ."
        },
        {
          "q": "What is the pattern of بَاب نَصَرَ يَنْصُرُ?",
          "options": [
            "فَعَلَ يَفْعُلُ",
            "فَعُلَ يَفْعُلُ",
            "فَعَلَ يَفْعِلُ",
            "فَعِلَ يَفْعَلُ"
          ],
          "correct": 0,
          "explanation": "نَصَرَ has a فَتْحَةٌ in الْمَاضِيْ and a ضَمَّةٌ in الْمُضَارِعُ: فَعَلَ يَفْعُلُ."
        },
        {
          "q": "The مُضَارِعٌ of غَفَرَ ('he forgave') is…",
          "options": [
            "يَغْفِرُ",
            "يَغْفَرُ",
            "يَغْفُرُ",
            "أَغْفِرُ"
          ],
          "correct": 0,
          "explanation": "غَفَرَ is from بَاب ضَرَبَ يَضْرِبُ, so its مُضَارِعٌ takes a كَسْرَةٌ on the عَيْنُ الْكَلِمَةِ: يَغْفِرُ. (غَفَرَ يَغْفِرُ مَغْفِرَةً = to forgive.)"
        },
        {
          "q": "The مُضَارِعٌ of دَخَلَ ('he entered') is…",
          "options": [
            "يَدْخُلُ",
            "يَدْخِلُ",
            "يَدْخَلُ",
            "نَدْخُلُ"
          ],
          "correct": 0,
          "explanation": "دَخَلَ is from بَاب نَصَرَ يَنْصُرُ, so its مُضَارِعٌ takes a ضَمَّةٌ: يَدْخُلُ. (دَخَلَ يَدْخُلُ دُخُوْلًا = to enter.)"
        },
        {
          "q": "أَضْرِبُ means…",
          "options": [
            "I hit",
            "We hit",
            "He hits",
            "You (m/s) hit"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ of الْمُضَارِعُ: the أ is the حَرْفُ الْمُضَارِعِ and أَنَا is hidden — 'I hit, am hitting, will hit'."
        },
        {
          "q": "How do بَاب ضَرَبَ and بَاب نَصَرَ differ, given that both have فَعَلَ in الْمَاضِيْ?",
          "options": [
            "They differ in the حَرَكَةٌ of the عَيْنُ الْكَلِمَةِ of الْمُضَارِعُ: كَسْرَةٌ for ضَرَبَ, ضَمَّةٌ for نَصَرَ",
            "They differ in the pronouns they take",
            "They differ in the حَرْفُ الْمُضَارِعِ letters",
            "They do not differ at all"
          ],
          "correct": 0,
          "explanation": "The صِيَغٌ and pronouns are identical across the أَبْوَابٌ; only the حَرَكَةٌ of the عَيْنُ الْكَلِمَةِ changes — يَضْرِبُ (kasrah) vs يَنْصُرُ (dammah)."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of these verbs is from بَاب نَصَرَ يَنْصُرُ?",
          "options": [
            "عَبَدَ يَعْبُدُ",
            "حَمَلَ يَحْمِلُ",
            "سَمِعَ يَسْمَعُ",
            "فَتَحَ يَفْتَحُ"
          ],
          "correct": 0,
          "explanation": "عَبَدَ يَعْبُدُ has فَتْحَةٌ in الْمَاضِيْ and ضَمَّةٌ in الْمُضَارِعُ — the pattern of نَصَرَ يَنْصُرُ. حَمَلَ يَحْمِلُ is from بَاب ضَرَبَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of these verbs is from بَاب ضَرَبَ يَضْرِبُ?",
          "options": [
            "كَسَبَ يَكْسِبُ",
            "خَلَقَ يَخْلُقُ",
            "رَحِمَ يَرْحَمُ",
            "ذَهَبَ يَذْهَبُ"
          ],
          "correct": 0,
          "explanation": "كَسَبَ يَكْسِبُ ('to earn') has فَتْحَةٌ in الْمَاضِيْ and كَسْرَةٌ in الْمُضَارِعُ — the pattern of ضَرَبَ يَضْرِبُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'They (f/p) hit' (past) in Arabic is…",
          "options": [
            "ضَرَبْنَ",
            "ضَرَبْنَا",
            "يَضْرِبْنَ",
            "ضَرَبْتُنَّ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of الْمَاضِيْ takes the pronoun نَ: ضَرَبْنَ. ضَرَبْنَا is 'we hit' and يَضْرِبْنَ is the مُضَارِعٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "تَنْصُرِيْنَ means…",
          "options": [
            "You (f/s) help",
            "You (f/p) help",
            "She helps",
            "You (m/s) help"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَةُ of الْمُضَارِعُ: the pronoun ي marks 'You (f/s) help, are helping, will help'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The مَصْدَرٌ of قَدَرَ يَقْدِرُ ('to have power') is…",
          "options": [
            "قُدْرَةً",
            "قَدْرًا",
            "مَقْدُوْرًا",
            "قِرَاءَةً"
          ],
          "correct": 0,
          "explanation": "The vocab entry is قَدَرَ يَقْدِرُ قُدْرَةً — 'to have power'."
        },
        {
          "title": "Book Exercise 2 (p. 35)",
          "kind": "mcq",
          "prompt": "ظَلَمَ means…",
          "options": [
            "He oppressed",
            "He was oppressed",
            "I oppressed",
            "He oppresses"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُ of الْمَاضِيْ with هُوَ hidden: 'He wronged/oppressed'. (ظَلَمَ يَظْلِمُ = to wrong, oppress.)"
        },
        {
          "title": "Book Exercise 2 (p. 35)",
          "kind": "mcq",
          "prompt": "تَحْمِلِيْنَ means…",
          "options": [
            "You (f/s) carry",
            "You (m/s) carry",
            "They (f/p) carry",
            "You (f/d) carry"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَةُ of الْمُضَارِعُ with the pronoun ي: 'You (f/s) carry, are carrying'. (حَمَلَ يَحْمِلُ = to carry.)"
        },
        {
          "title": "Book Exercise 2 (p. 35)",
          "kind": "mcq",
          "prompt": "يَمْلِكُوْنَ means…",
          "options": [
            "They (m/p) own",
            "You (m/p) own",
            "They (m/d) own",
            "We own"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ of الْمُضَارِعُ: يـ prefix + pronoun و — 'They (m/p) own'. (مَلَكَ يَمْلِكُ = to own, have the ability.)"
        },
        {
          "title": "Book Exercise 2 (p. 35)",
          "kind": "mcq",
          "prompt": "عَقَلْنَا means…",
          "options": [
            "We understood",
            "They (f/p) understood",
            "We understand",
            "You (m/p) understood"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمَاضِيْ with the pronoun نَا: 'We understood'. (عَقَلَ يَعْقِلُ = to understand.)"
        },
        {
          "title": "Book Exercise 3 (p. 35)",
          "kind": "mcq",
          "prompt": "'You (m/s) lied' in Arabic is…",
          "options": [
            "كَذَبْتَ",
            "كَذَبْتِ",
            "كَذَبْتُ",
            "تَكْذِبُ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبُ of الْمَاضِيْ takes the pronoun تَ (fathah): كَذَبْتَ. (كَذَبَ يَكْذِبُ = to lie.)"
        },
        {
          "title": "Book Exercise 3 (p. 35)",
          "kind": "mcq",
          "prompt": "'We will descend' in Arabic is…",
          "options": [
            "نَهْبِطُ",
            "هَبَطْنَا",
            "يَهْبِطُ",
            "أَهْبِطُ"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمُضَارِعُ (which covers the future): نَهْبِطُ 'we descend / will descend'. (هَبَطَ يَهْبِطُ = to descend.)"
        },
        {
          "title": "Book Exercise 3 (p. 35)",
          "kind": "mcq",
          "prompt": "'You (m/d) forgave' in Arabic is…",
          "options": [
            "غَفَرْتُمَا",
            "غَفَرَا",
            "غَفَرْتُمْ",
            "تَغْفِرَانِ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَانِ of الْمَاضِيْ takes the pronoun تُمَا: غَفَرْتُمَا. (غَفَرَ يَغْفِرُ = to forgive.)"
        },
        {
          "title": "Book Exercise 3 (p. 35)",
          "kind": "mcq",
          "prompt": "'They (f/d) oppressed' in Arabic is…",
          "options": [
            "ظَلَمَتَا",
            "ظَلَمَا",
            "ظَلَمْنَ",
            "ظَلَمْتُمَا"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَتَانِ: feminine sign ت + dual pronoun ا = ظَلَمَتَا. (ظَلَمَ يَظْلِمُ = to oppress.)"
        },
        {
          "title": "Book Exercise 2 (p. 37)",
          "kind": "mcq",
          "prompt": "نَصَرْتُ means…",
          "options": [
            "I helped",
            "You (m/s) helped",
            "We helped",
            "She helped"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ of الْمَاضِيْ with the pronoun تُ (dammah): 'I helped'. (نَصَرَ يَنْصُرُ = to help.)"
        },
        {
          "title": "Book Exercise 2 (p. 37)",
          "kind": "mcq",
          "prompt": "يَذْكُرْنَ means…",
          "options": [
            "They (f/p) remember",
            "You (f/p) remember",
            "They (m/p) remember",
            "We remember"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of الْمُضَارِعُ: يـ prefix + pronoun نَ — 'They (f/p) remember'. (ذَكَرَ يَذْكُرُ = to remember.)"
        },
        {
          "title": "Book Exercise 2 (p. 37)",
          "kind": "mcq",
          "prompt": "بَلَغْنَا means…",
          "options": [
            "We reached",
            "They (f/p) reached",
            "We reach",
            "You (m/p) reached"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمَاضِيْ with the pronoun نَا: 'We reached'. (بَلَغَ يَبْلُغُ = to reach.)"
        },
        {
          "title": "Book Exercise 2 (p. 37)",
          "kind": "mcq",
          "prompt": "تَعْبُدُوْنَ means…",
          "options": [
            "You (m/p) worship",
            "They (m/p) worship",
            "You (f/p) worship",
            "We worship"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبُوْنَ of الْمُضَارِعُ: تـ prefix + pronoun و — 'You (m/p) worship, are worshipping'. (عَبَدَ يَعْبُدُ = to worship.)"
        },
        {
          "title": "Book Exercise 3 (p. 37)",
          "kind": "mcq",
          "prompt": "'We provided' in Arabic is…",
          "options": [
            "رَزَقْنَا",
            "نَرْزُقُ",
            "رَزَقْنَ",
            "رَزَقُوْا"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمَاضِيْ takes نَا: رَزَقْنَا. نَرْزُقُ is the مُضَارِعٌ 'we provide'. (رَزَقَ يَرْزُقُ = to provide.)"
        },
        {
          "title": "Book Exercise 3 (p. 37)",
          "kind": "mcq",
          "prompt": "'He will create' in Arabic is…",
          "options": [
            "يَخْلُقُ",
            "خَلَقَ",
            "يَخْلِقُ",
            "نَخْلُقُ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُ of الْمُضَارِعُ (covers the future): يَخْلُقُ 'he creates / will create' — ضَمَّةٌ on the عَيْنُ الْكَلِمَةِ, as خَلَقَ is from بَاب نَصَرَ."
        },
        {
          "title": "Book Exercise 3 (p. 37)",
          "kind": "mcq",
          "prompt": "'They (m/d) killed' in Arabic is…",
          "options": [
            "قَتَلَا",
            "قَتَلُوْا",
            "قَتَلَتَا",
            "قَتَلْتُمَا"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَانِ of الْمَاضِيْ takes the dual pronoun ا: قَتَلَا. (قَتَلَ يَقْتُلُ = to kill.)"
        },
        {
          "title": "Book Exercise 3 (p. 37)",
          "kind": "mcq",
          "prompt": "'I am worshipping' in Arabic is…",
          "options": [
            "أَعْبُدُ",
            "نَعْبُدُ",
            "عَبَدْتُ",
            "يَعْبُدُ"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ of الْمُضَارِعُ (covers the present continuous): أَعْبُدُ 'I worship / am worshipping'. عَبَدْتُ is the past."
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forgive\"?",
          "options": [
            "غَفَرَ يَغْفِرُ",
            "حَمَلَ يَحْمِلُ",
            "قَدَرَ يَقْدِرُ",
            "صَبَرَ يَصْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَفَرَ يَغْفِرُ mean?",
          "options": [
            "to forgive",
            "to carry",
            "to have power",
            "to bear with patience"
          ],
          "correct": 0
        },
        {
          "title": "to forgive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَفَرَ يَغْفِرُ?",
          "options": [
            "مَغْفِرَةً",
            "حَمْلًا",
            "قُدْرَةً",
            "صَبْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to carry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to carry\"?",
          "options": [
            "حَمَلَ يَحْمِلُ",
            "قَدَرَ يَقْدِرُ",
            "صَبَرَ يَصْبِرُ",
            "كَذَبَ يَكْذِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to carry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَمَلَ يَحْمِلُ mean?",
          "options": [
            "to carry",
            "to have power",
            "to bear with patience",
            "to lie"
          ],
          "correct": 0
        },
        {
          "title": "to carry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَمَلَ يَحْمِلُ?",
          "options": [
            "حَمْلًا",
            "قُدْرَةً",
            "صَبْرًا",
            "كِذْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to have power",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to have power\"?",
          "options": [
            "قَدَرَ يَقْدِرُ",
            "صَبَرَ يَصْبِرُ",
            "كَذَبَ يَكْذِبُ",
            "ضَرَبَ يَضْرِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to have power",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَدَرَ يَقْدِرُ mean?",
          "options": [
            "to have power",
            "to bear with patience",
            "to lie",
            "to hit"
          ],
          "correct": 0
        },
        {
          "title": "to have power (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَدَرَ يَقْدِرُ?",
          "options": [
            "قُدْرَةً",
            "صَبْرًا",
            "كِذْبًا",
            "ضَرْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to bear with patience",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bear with patience\"?",
          "options": [
            "صَبَرَ يَصْبِرُ",
            "كَذَبَ يَكْذِبُ",
            "ضَرَبَ يَضْرِبُ",
            "كَسَبَ يَكْسِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to bear with patience",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَبَرَ يَصْبِرُ mean?",
          "options": [
            "to bear with patience",
            "to lie",
            "to hit",
            "to earn"
          ],
          "correct": 0
        },
        {
          "title": "to bear with patience (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَبَرَ يَصْبِرُ?",
          "options": [
            "صَبْرًا",
            "كِذْبًا",
            "ضَرْبًا",
            "كَسْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to lie",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lie\"?",
          "options": [
            "كَذَبَ يَكْذِبُ",
            "ضَرَبَ يَضْرِبُ",
            "كَسَبَ يَكْسِبُ",
            "ظَلَمَ يَظْلِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to lie",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَذَبَ يَكْذِبُ mean?",
          "options": [
            "to lie",
            "to hit",
            "to earn",
            "to wrong, oppress"
          ],
          "correct": 0
        },
        {
          "title": "to lie (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَبَ يَكْذِبُ?",
          "options": [
            "كِذْبًا",
            "ضَرْبًا",
            "كَسْبًا",
            "ظُلْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to hit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hit\"?",
          "options": [
            "ضَرَبَ يَضْرِبُ",
            "كَسَبَ يَكْسِبُ",
            "ظَلَمَ يَظْلِمُ",
            "مَلَكَ يَمْلِكُ"
          ],
          "correct": 0
        },
        {
          "title": "to hit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَرَبَ يَضْرِبُ mean?",
          "options": [
            "to hit",
            "to earn",
            "to wrong, oppress",
            "to own, have the ability"
          ],
          "correct": 0
        },
        {
          "title": "to hit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَرَبَ يَضْرِبُ?",
          "options": [
            "ضَرْبًا",
            "كَسْبًا",
            "ظُلْمًا",
            "مُلْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to earn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to earn\"?",
          "options": [
            "كَسَبَ يَكْسِبُ",
            "ظَلَمَ يَظْلِمُ",
            "مَلَكَ يَمْلِكُ",
            "عَرَفَ يَعْرِفُ"
          ],
          "correct": 0
        },
        {
          "title": "to earn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَسَبَ يَكْسِبُ mean?",
          "options": [
            "to earn",
            "to wrong, oppress",
            "to own, have the ability",
            "to recognise"
          ],
          "correct": 0
        },
        {
          "title": "to earn (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَسَبَ يَكْسِبُ?",
          "options": [
            "كَسْبًا",
            "ظُلْمًا",
            "مُلْكًا",
            "مَعْرِفَةً"
          ],
          "correct": 0
        },
        {
          "title": "to wrong, oppress",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wrong, oppress\"?",
          "options": [
            "ظَلَمَ يَظْلِمُ",
            "مَلَكَ يَمْلِكُ",
            "عَرَفَ يَعْرِفُ",
            "هَبَطَ يَهْبِطُ"
          ],
          "correct": 0
        },
        {
          "title": "to wrong, oppress",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظَلَمَ يَظْلِمُ mean?",
          "options": [
            "to wrong, oppress",
            "to own, have the ability",
            "to recognise",
            "to descend"
          ],
          "correct": 0
        },
        {
          "title": "to wrong, oppress (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ظَلَمَ يَظْلِمُ?",
          "options": [
            "ظُلْمًا",
            "مُلْكًا",
            "مَعْرِفَةً",
            "هُبُوْطًا"
          ],
          "correct": 0
        },
        {
          "title": "to own, have the ability",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to own, have the ability\"?",
          "options": [
            "مَلَكَ يَمْلِكُ",
            "عَرَفَ يَعْرِفُ",
            "هَبَطَ يَهْبِطُ",
            "عَقَلَ يَعْقِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to own, have the ability",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَلَكَ يَمْلِكُ mean?",
          "options": [
            "to own, have the ability",
            "to recognise",
            "to descend",
            "to understand"
          ],
          "correct": 0
        },
        {
          "title": "to own, have the ability (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَلَكَ يَمْلِكُ?",
          "options": [
            "مُلْكًا",
            "مَعْرِفَةً",
            "هُبُوْطًا",
            "عَقْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to recognise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recognise\"?",
          "options": [
            "عَرَفَ يَعْرِفُ",
            "هَبَطَ يَهْبِطُ",
            "عَقَلَ يَعْقِلُ",
            "عَبَدَ يَعْبُدُ"
          ],
          "correct": 0
        },
        {
          "title": "to recognise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَرَفَ يَعْرِفُ mean?",
          "options": [
            "to recognise",
            "to descend",
            "to understand",
            "to worship"
          ],
          "correct": 0
        },
        {
          "title": "to recognise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَرَفَ يَعْرِفُ?",
          "options": [
            "مَعْرِفَةً",
            "هُبُوْطًا",
            "عَقْلًا",
            "عِبَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to descend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to descend\"?",
          "options": [
            "هَبَطَ يَهْبِطُ",
            "عَقَلَ يَعْقِلُ",
            "عَبَدَ يَعْبُدُ",
            "نَصَرَ يَنْصُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to descend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَبَطَ يَهْبِطُ mean?",
          "options": [
            "to descend",
            "to understand",
            "to worship",
            "to help"
          ],
          "correct": 0
        },
        {
          "title": "to descend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَبَطَ يَهْبِطُ?",
          "options": [
            "هُبُوْطًا",
            "عَقْلًا",
            "عِبَادَةً",
            "نَصْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to understand\"?",
          "options": [
            "عَقَلَ يَعْقِلُ",
            "عَبَدَ يَعْبُدُ",
            "نَصَرَ يَنْصُرُ",
            "خَلَقَ يَخْلُقُ"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقَلَ يَعْقِلُ mean?",
          "options": [
            "to understand",
            "to worship",
            "to help",
            "to create"
          ],
          "correct": 0
        },
        {
          "title": "to understand (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَقَلَ يَعْقِلُ?",
          "options": [
            "عَقْلًا",
            "عِبَادَةً",
            "نَصْرًا",
            "خَلْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to worship",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to worship\"?",
          "options": [
            "عَبَدَ يَعْبُدُ",
            "نَصَرَ يَنْصُرُ",
            "خَلَقَ يَخْلُقُ",
            "بَلَغَ يَبْلُغُ"
          ],
          "correct": 0
        },
        {
          "title": "to worship",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَبَدَ يَعْبُدُ mean?",
          "options": [
            "to worship",
            "to help",
            "to create",
            "to reach"
          ],
          "correct": 0
        },
        {
          "title": "to worship (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَبَدَ يَعْبُدُ?",
          "options": [
            "عِبَادَةً",
            "نَصْرًا",
            "خَلْقًا",
            "بُلُوْغًا"
          ],
          "correct": 0
        },
        {
          "title": "to help",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to help\"?",
          "options": [
            "نَصَرَ يَنْصُرُ",
            "خَلَقَ يَخْلُقُ",
            "بَلَغَ يَبْلُغُ",
            "دَخَلَ يَدْخُلُ"
          ],
          "correct": 0
        },
        {
          "title": "to help",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَصَرَ يَنْصُرُ mean?",
          "options": [
            "to help",
            "to create",
            "to reach",
            "to enter"
          ],
          "correct": 0
        },
        {
          "title": "to help (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَصَرَ يَنْصُرُ?",
          "options": [
            "نَصْرًا",
            "خَلْقًا",
            "بُلُوْغًا",
            "دُخُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to create",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to create\"?",
          "options": [
            "خَلَقَ يَخْلُقُ",
            "بَلَغَ يَبْلُغُ",
            "دَخَلَ يَدْخُلُ",
            "تَرَكَ يَتْرُكُ"
          ],
          "correct": 0
        },
        {
          "title": "to create",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَلَقَ يَخْلُقُ mean?",
          "options": [
            "to create",
            "to reach",
            "to enter",
            "to leave"
          ],
          "correct": 0
        },
        {
          "title": "to create (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَلَقَ يَخْلُقُ?",
          "options": [
            "خَلْقًا",
            "بُلُوْغًا",
            "دُخُوْلًا",
            "تَرْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to reach",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reach\"?",
          "options": [
            "بَلَغَ يَبْلُغُ",
            "دَخَلَ يَدْخُلُ",
            "تَرَكَ يَتْرُكُ",
            "ذَكَرَ يَذْكُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to reach",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَلَغَ يَبْلُغُ mean?",
          "options": [
            "to reach",
            "to enter",
            "to leave",
            "to remember"
          ],
          "correct": 0
        },
        {
          "title": "to reach (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَلَغَ يَبْلُغُ?",
          "options": [
            "بُلُوْغًا",
            "دُخُوْلًا",
            "تَرْكًا",
            "ذِكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to enter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to enter\"?",
          "options": [
            "دَخَلَ يَدْخُلُ",
            "تَرَكَ يَتْرُكُ",
            "ذَكَرَ يَذْكُرُ",
            "حَشَرَ يَحْشُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to enter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَخَلَ يَدْخُلُ mean?",
          "options": [
            "to enter",
            "to leave",
            "to remember",
            "to gather"
          ],
          "correct": 0
        },
        {
          "title": "to enter (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَخَلَ يَدْخُلُ?",
          "options": [
            "دُخُوْلًا",
            "تَرْكًا",
            "ذِكْرًا",
            "حَشْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to leave",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to leave\"?",
          "options": [
            "تَرَكَ يَتْرُكُ",
            "ذَكَرَ يَذْكُرُ",
            "حَشَرَ يَحْشُرُ",
            "رَزَقَ يَرْزُقُ"
          ],
          "correct": 0
        },
        {
          "title": "to leave",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَكَ يَتْرُكُ mean?",
          "options": [
            "to leave",
            "to remember",
            "to gather",
            "to provide"
          ],
          "correct": 0
        },
        {
          "title": "to leave (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَكَ يَتْرُكُ?",
          "options": [
            "تَرْكًا",
            "ذِكْرًا",
            "حَشْرًا",
            "رِزْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to remember",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to remember\"?",
          "options": [
            "ذَكَرَ يَذْكُرُ",
            "حَشَرَ يَحْشُرُ",
            "رَزَقَ يَرْزُقُ",
            "حَكَمَ يَحْكُمُ"
          ],
          "correct": 0
        },
        {
          "title": "to remember",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَكَرَ يَذْكُرُ mean?",
          "options": [
            "to remember",
            "to gather",
            "to provide",
            "to judge"
          ],
          "correct": 0
        },
        {
          "title": "to remember (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَكَرَ يَذْكُرُ?",
          "options": [
            "ذِكْرًا",
            "حَشْرًا",
            "رِزْقًا",
            "حُكْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to gather",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to gather\"?",
          "options": [
            "حَشَرَ يَحْشُرُ",
            "رَزَقَ يَرْزُقُ",
            "حَكَمَ يَحْكُمُ",
            "قَتَلَ يَقْتُلُ"
          ],
          "correct": 0
        },
        {
          "title": "to gather",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَشَرَ يَحْشُرُ mean?",
          "options": [
            "to gather",
            "to provide",
            "to judge",
            "to kill"
          ],
          "correct": 0
        },
        {
          "title": "to gather (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَشَرَ يَحْشُرُ?",
          "options": [
            "حَشْرًا",
            "رِزْقًا",
            "حُكْمًا",
            "قَتْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to provide",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to provide\"?",
          "options": [
            "رَزَقَ يَرْزُقُ",
            "حَكَمَ يَحْكُمُ",
            "قَتَلَ يَقْتُلُ",
            "خَرَجَ يَخْرُجُ"
          ],
          "correct": 0
        },
        {
          "title": "to provide",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَزَقَ يَرْزُقُ mean?",
          "options": [
            "to provide",
            "to judge",
            "to kill",
            "to come out"
          ],
          "correct": 0
        },
        {
          "title": "to provide (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَزَقَ يَرْزُقُ?",
          "options": [
            "رِزْقًا",
            "حُكْمًا",
            "قَتْلًا",
            "خُرُوْجًا"
          ],
          "correct": 0
        },
        {
          "title": "to judge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to judge\"?",
          "options": [
            "حَكَمَ يَحْكُمُ",
            "قَتَلَ يَقْتُلُ",
            "خَرَجَ يَخْرُجُ",
            "غَفَرَ يَغْفِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to judge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَكَمَ يَحْكُمُ mean?",
          "options": [
            "to judge",
            "to kill",
            "to come out",
            "to forgive"
          ],
          "correct": 0
        },
        {
          "title": "to judge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَكَمَ يَحْكُمُ?",
          "options": [
            "حُكْمًا",
            "قَتْلًا",
            "خُرُوْجًا",
            "مَغْفِرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to kill",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to kill\"?",
          "options": [
            "قَتَلَ يَقْتُلُ",
            "خَرَجَ يَخْرُجُ",
            "غَفَرَ يَغْفِرُ",
            "حَمَلَ يَحْمِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to kill",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَتَلَ يَقْتُلُ mean?",
          "options": [
            "to kill",
            "to come out",
            "to forgive",
            "to carry"
          ],
          "correct": 0
        },
        {
          "title": "to kill (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَتَلَ يَقْتُلُ?",
          "options": [
            "قَتْلًا",
            "خُرُوْجًا",
            "مَغْفِرَةً",
            "حَمْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to come out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come out\"?",
          "options": [
            "خَرَجَ يَخْرُجُ",
            "غَفَرَ يَغْفِرُ",
            "حَمَلَ يَحْمِلُ",
            "قَدَرَ يَقْدِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to come out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَرَجَ يَخْرُجُ mean?",
          "options": [
            "to come out",
            "to forgive",
            "to carry",
            "to have power"
          ],
          "correct": 0
        },
        {
          "title": "to come out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَرَجَ يَخْرُجُ?",
          "options": [
            "خُرُوْجًا",
            "مَغْفِرَةً",
            "حَمْلًا",
            "قُدْرَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "بَاب كَرُمَ وَبَاب حَسِبَ",
      "subtitle": "The Last Two أَبْوَابٌ, Plus Revision — identifying possible أَبْوَابٌ from a verb’s حَرَكَةٌ",
      "concepts": [
        {
          "heading": "بَاب كَرُمَ يَكْرُمُ",
          "lines": [
            {
              "html": "The conjugation of verbs on the pattern <bdi>كَرُمَ يَكْرُمُ</bdi> is given below. The <bdi>عَيْنُ الْكَلِمَةِ</bdi> has a <bdi>ضَمَّةٌ</bdi> in both <bdi>الْمَاضِيْ</bdi> and <bdi>الْمُضَارِعُ</bdi> (<bdi>فَعُلَ يَفْعُلُ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of بَاب كَرُمَ يَكْرُمُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "الْمُضَارِعُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "كَرُمَ",
                    "يَكْرُمُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "كَرُمَا",
                    "يَكْرُمَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "كَرُمُوْا",
                    "يَكْرُمُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "كَرُمَتْ",
                    "تَكْرُمُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "كَرُمَتَا",
                    "تَكْرُمَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "كَرُمْنَ",
                    "يَكْرُمْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "كَرُمْتَ",
                    "تَكْرُمُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "كَرُمْتُمَا",
                    "تَكْرُمَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "كَرُمْتُمْ",
                    "تَكْرُمُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "كَرُمْتِ",
                    "تَكْرُمِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "كَرُمْتُمَا",
                    "تَكْرُمَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "كَرُمْتُنَّ",
                    "تَكْرُمْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "كَرُمْتُ",
                    "أَكْرُمُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "كَرُمْنَا",
                    "نَكْرُمُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the pattern of بَاب كَرُمَ يَكْرُمُ؟",
            "kind": "mcq",
            "options": ["فَعُلَ يَفْعُلُ", "فَعَلَ يَفْعُلُ", "فَعُلَ يَفْعَلُ", "فَعِلَ يَفْعِلُ"],
            "correct": 0
          }
        },
        {
          "heading": "Stative Verbs",
          "lines": [
            {
              "html": "Most verbs from <bdi>كَرُمَ يَكْرُمُ</bdi> are stative verbs, i.e., 'to be' verbs. These are translated with an auxiliary verb, which shows the tense, followed by the state.",
              "list": false
            },
            {
              "table": {
                "title": "Translating stative verbs (example: فَرِحَ / يَفْرَحُ — to be happy)",
                "headers": [
                  "الْفِعْلُ",
                  "Tense",
                  "Translation"
                ],
                "rows": [
                  [
                    "فَرِحَ",
                    "الْمَاضِيْ — Past",
                    "The man was happy. / The man became happy."
                  ],
                  [
                    "يَفْرَحُ",
                    "الْمُضَارِعُ — Present Habitual",
                    "The man is happy."
                  ],
                  [
                    "يَفْرَحُ",
                    "الْمُضَارِعُ — Present Continuous",
                    "The man is happy."
                  ],
                  [
                    "يَفْرَحُ",
                    "الْمُضَارِعُ — Future",
                    "The man will be happy."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How is the مَاضِيْ of a stative verb like فَرِحَ translated؟",
            "kind": "mcq",
            "options": ["'The man was happy' or 'The man became happy'", "'The man is happy' only", "'The man will be happy'", "'Be happy!'"],
            "correct": 0
          }
        },
        {
          "heading": "بَاب حَسِبَ يَحْسِبُ",
          "lines": [
            {
              "html": "The conjugation of verbs on the pattern <bdi>حَسِبَ يَحْسِبُ</bdi> is given below. The <bdi>عَيْنُ الْكَلِمَةِ</bdi> has a <bdi>كَسْرَةٌ</bdi> in both <bdi>الْمَاضِيْ</bdi> and <bdi>الْمُضَارِعُ</bdi> (<bdi>فَعِلَ يَفْعِلُ</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of بَاب حَسِبَ يَحْسِبُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "الْمُضَارِعُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "حَسِبَ",
                    "يَحْسِبُ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "حَسِبَا",
                    "يَحْسِبَانِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "حَسِبُوْا",
                    "يَحْسِبُوْنَ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "حَسِبَتْ",
                    "تَحْسِبُ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "حَسِبَتَا",
                    "تَحْسِبَانِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "حَسِبْنَ",
                    "يَحْسِبْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "حَسِبْتَ",
                    "تَحْسِبُ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "حَسِبْتُمَا",
                    "تَحْسِبَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "حَسِبْتُمْ",
                    "تَحْسِبُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "حَسِبْتِ",
                    "تَحْسِبِيْنَ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "حَسِبْتُمَا",
                    "تَحْسِبَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "حَسِبْتُنَّ",
                    "تَحْسِبْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "حَسِبْتُ",
                    "أَحْسِبُ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "حَسِبْنَا",
                    "نَحْسِبُ"
                  ]
                ]
              }
            },
            {
              "html": "This pattern is very rare and very few words come on this pattern.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the pattern of بَاب حَسِبَ يَحْسِبُ, and how common is it؟",
            "kind": "mcq",
            "options": ["فَعِلَ يَفْعِلُ — very rare; very few words come on it", "فَعِلَ يَفْعَلُ — very common", "فَعَلَ يَفْعِلُ — very rare", "فَعُلَ يَفْعُلُ — fairly common"],
            "correct": 0
          }
        },
        {
          "heading": "Revision: Identifying the Possible أَبْوَابٌ",
          "lines": [
            {
              "html": "Given a single verb form, the <bdi>حَرَكَةٌ</bdi> of its <bdi>عَيْنُ الْكَلِمَةِ</bdi> tells you which <bdi>أَبْوَابٌ</bdi> it could possibly be from. For a <bdi>مَاضِيْ</bdi>: a <bdi>فَتْحَةٌ</bdi> allows <bdi>ف، ض، ن</bdi> (the <bdi>مُضَارِعُ</bdi> is unknown); a <bdi>كَسْرَةٌ</bdi> allows <bdi>س، ح</bdi>; a <bdi>ضَمَّةٌ</bdi> allows only <bdi>ك</bdi>. For a <bdi>مُضَارِعٌ</bdi>: a <bdi>فَتْحَةٌ</bdi> allows <bdi>ف، س</bdi>; a <bdi>كَسْرَةٌ</bdi> allows <bdi>ض، ح</bdi>; a <bdi>ضَمَّةٌ</bdi> allows <bdi>ن، ك</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>أَبَقَ</bdi> — <bdi>مَاضِيْ</bdi> with a <bdi>فَتْحَةٌ</bdi> on the <bdi>عَيْن</bdi> — could be from <bdi>ف، ض،</bdi> or <bdi>ن</bdi> (not <bdi>س، ك،</bdi> or <bdi>ح</bdi>)",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "صَعِقَ (مَاضِيْ, كَسْرَةٌ on the عَيْن) could possibly be from…",
            "kind": "mcq",
            "options": ["س or ح", "ف or س", "ن or ك", "ف, ض or ن"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 3: الْأَبْوَابُ",
        "rows": [
          {
            "label": "Combinations of الْمَاضِيْ and الْمُضَارِعُ",
            "arabic": "بَابٌ (أَبْوَابٌ)",
            "meaning": "Combinations of الْمَاضِيْ and الْمُضَارِعُ",
            "unlockAt": 0
          },
          {
            "label": "The first letter of الْمَاضِيْ",
            "arabic": "فَاءُ الْكَلِمَةِ",
            "meaning": "The first letter of الْمَاضِيْ",
            "unlockAt": 1
          },
          {
            "label": "The second letter of الْمَاضِيْ",
            "arabic": "عَيْنُ الْكَلِمَةِ",
            "meaning": "The second letter of الْمَاضِيْ",
            "unlockAt": 3
          },
          {
            "label": "The third letter of الْمَاضِيْ",
            "arabic": "لَامُ الْكَلِمَةِ",
            "meaning": "The third letter of الْمَاضِيْ",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the pattern of بَاب كَرُمَ يَكْرُمُ?",
          "options": [
            "فَعُلَ يَفْعُلُ",
            "فَعَلَ يَفْعُلُ",
            "فَعُلَ يَفْعَلُ",
            "فَعِلَ يَفْعِلُ"
          ],
          "correct": 0,
          "explanation": "كَرُمَ has a ضَمَّةٌ on the عَيْنُ الْكَلِمَةِ in both الْمَاضِيْ and الْمُضَارِعُ: فَعُلَ يَفْعُلُ."
        },
        {
          "q": "Most verbs from بَاب كَرُمَ يَكْرُمُ are…",
          "options": [
            "Stative verbs ('to be' verbs)",
            "Verbs of motion",
            "Passive verbs",
            "Imperative verbs"
          ],
          "correct": 0,
          "explanation": "Most كَرُمَ verbs are stative, e.g. حَسُنَ 'to be good'. They are translated with an auxiliary verb showing the tense, followed by the state."
        },
        {
          "q": "How is the مَاضِيْ of a stative verb like فَرِحَ translated?",
          "options": [
            "'The man was happy' or 'The man became happy'",
            "'The man is happy' only",
            "'The man will be happy'",
            "'Be happy!'"
          ],
          "correct": 0,
          "explanation": "The auxiliary verb carries the tense: past = 'was/became happy'; مُضَارِعٌ = 'is happy' (present) or 'will be happy' (future)."
        },
        {
          "q": "What is the pattern of بَاب حَسِبَ يَحْسِبُ, and how common is it?",
          "options": [
            "فَعِلَ يَفْعِلُ — very rare; very few words come on it",
            "فَعِلَ يَفْعَلُ — very common",
            "فَعَلَ يَفْعِلُ — very rare",
            "فَعُلَ يَفْعُلُ — fairly common"
          ],
          "correct": 0,
          "explanation": "حَسِبَ يَحْسِبُ is فَعِلَ يَفْعِلُ (kasrah in both tenses). The book notes this pattern is very rare."
        },
        {
          "q": "A مَاضِيْ verb with a ضَمَّةٌ on its عَيْنُ الْكَلِمَةِ can only be from which بَابٌ?",
          "options": [
            "بَاب كَرُمَ يَكْرُمُ",
            "بَاب نَصَرَ يَنْصُرُ",
            "بَاب سَمِعَ يَسْمَعُ",
            "بَاب فَتَحَ يَفْتَحُ"
          ],
          "correct": 0,
          "explanation": "فَعُلَ occurs only in the combination فَعُلَ يَفْعُلُ — بَاب كَرُمَ. (نَصَرَ has the ضَمَّةٌ in the مُضَارِعُ, not the مَاضِيْ.)"
        },
        {
          "q": "تَكْرُمِيْنَ means…",
          "options": [
            "You (f/s) are noble",
            "You (m/s) are noble",
            "She is noble",
            "You (f/p) are noble"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَةُ of الْمُضَارِعُ with the pronoun ي; كَرُمَ is stative, so it is translated 'You (f/s) are noble / will be noble'."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of these verbs is from بَاب كَرُمَ يَكْرُمُ?",
          "options": [
            "حَسُنَ يَحْسُنُ",
            "حَسِبَ يَحْسِبُ",
            "حَشَرَ يَحْشُرُ",
            "حَزِنَ يَحْزَنُ"
          ],
          "correct": 0,
          "explanation": "حَسُنَ يَحْسُنُ ('to be good') has a ضَمَّةٌ in both tenses — بَاب كَرُمَ. حَسِبَ is from بَاب حَسِبَ, حَشَرَ from بَاب نَصَرَ, and حَزِنَ from بَاب سَمِعَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The مُضَارِعٌ of نَعِمَ ('to live in comfort') is…",
          "options": [
            "يَنْعِمُ",
            "يَنْعَمُ",
            "يَنْعُمُ",
            "نَنْعِمُ"
          ],
          "correct": 0,
          "explanation": "نَعِمَ is from the rare بَاب حَسِبَ يَحْسِبُ (kasrah in both tenses): نَعِمَ يَنْعِمُ نِعْمَةً."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "How would يَكْبُرُ ('he becomes big') best be translated in the future?",
          "options": [
            "He will become big",
            "He became big",
            "Become big!",
            "He had become big"
          ],
          "correct": 0,
          "explanation": "كَبُرَ is a stative verb from بَاب كَرُمَ; the مُضَارِعٌ in future meaning is translated with 'will': 'he will become big/old'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The مَصْدَرٌ of حَسِبَ يَحْسِبُ ('to consider') is…",
          "options": [
            "حِسْبَانًا",
            "حُسْنًا",
            "حِسَابًا",
            "مَحْسُوْبًا"
          ],
          "correct": 0,
          "explanation": "The vocab entry is حَسِبَ يَحْسِبُ حِسْبَانًا — 'to consider'."
        },
        {
          "title": "Book Exercise 2 (p. 39)",
          "kind": "mcq",
          "prompt": "حَسُنَ means…",
          "options": [
            "He was good / became good",
            "He considered",
            "He is doing good",
            "He gathered"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُ of the stative verb حَسُنَ يَحْسُنُ: 'He was/became good'. (Compare حَسِبَ 'he considered'.)"
        },
        {
          "title": "Book Exercise 2 (p. 39)",
          "kind": "mcq",
          "prompt": "خَبُثُوْا means…",
          "options": [
            "They (m/p) were bad",
            "You (m/p) were bad",
            "They (m/d) were bad",
            "They (m/p) are bad"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ of الْمَاضِيْ with the pronoun و: 'They (m/p) were/became bad'. (خَبُثَ يَخْبُثُ = to be bad.)"
        },
        {
          "title": "Book Exercise 2 (p. 39)",
          "kind": "mcq",
          "prompt": "يَكْرُمُوْنَ means…",
          "options": [
            "They (m/p) are noble",
            "You (m/p) are noble",
            "They (m/p) were noble",
            "We are noble"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ of الْمُضَارِعُ: 'They (m/p) are / will be noble'. كَرُمَ is stative, so an auxiliary 'to be' is used."
        },
        {
          "title": "Book Exercise 2 (p. 39)",
          "kind": "mcq",
          "prompt": "تَكْبُرَانِ means…",
          "options": [
            "They (f/d) / You (m/d or f/d) become big",
            "They (m/d) become big",
            "You (m/p) become big",
            "They (f/p) become big"
          ],
          "correct": 0,
          "explanation": "تَفْعُلَانِ is shared by الْغَائِبَتَانِ، الْمُخَاطَبَانِ and الْمُخَاطَبَتَانِ. (كَبُرَ يَكْبُرُ = to become big, old.)"
        },
        {
          "title": "Book Exercise 3 (p. 39)",
          "kind": "mcq",
          "prompt": "'It (f) is noble' in Arabic is…",
          "options": [
            "تَكْرُمُ",
            "يَكْرُمُ",
            "كَرُمَتْ",
            "تَكْرُمِيْنَ"
          ],
          "correct": 0,
          "explanation": "'It' for a feminine noun uses الْغَائِبَةُ; the مُضَارِعُ is تَكْرُمُ. كَرُمَتْ is the past 'it (f) was noble'."
        },
        {
          "title": "Book Exercise 3 (p. 39)",
          "kind": "mcq",
          "prompt": "'You (m/s) look' in Arabic is…",
          "options": [
            "تَبْصُرُ",
            "تَبْصُرِيْنَ",
            "بَصُرْتَ",
            "يَبْصُرُ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبُ of الْمُضَارِعُ: تَبْصُرُ (with أَنْتَ hidden). (بَصُرَ يَبْصُرُ = to look.)"
        },
        {
          "title": "Book Exercise 3 (p. 39)",
          "kind": "mcq",
          "prompt": "'They (f/p) were good' in Arabic is…",
          "options": [
            "حَسُنَّ",
            "حَسُنَتْ",
            "حَسُنُوْا",
            "تَحْسُنَّ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of الْمَاضِيْ takes the pronoun نَ: حَسُنَ + نَ = حَسُنَّ (the two ن merge in writing)."
        },
        {
          "title": "Revision Exercise 1 (p. 41)",
          "kind": "mcq",
          "prompt": "أَبَقَ is a مَاضِيْ with a فَتْحَةٌ on its عَيْن. Which أَبْوَابٌ could it be from?",
          "options": [
            "ف، ض، ن",
            "س، ح",
            "ك only",
            "ف، س"
          ],
          "correct": 0,
          "explanation": "A مَاضِيْ on فَعَلَ pairs with يَفْعَلُ، يَفْعِلُ or يَفْعُلُ — i.e. بَاب فَتَحَ، ضَرَبَ or نَصَرَ. (This is the book's worked example.)"
        },
        {
          "title": "Revision Exercise 1 (p. 41)",
          "kind": "mcq",
          "prompt": "صَعِقَ is a مَاضِيْ with a كَسْرَةٌ on its عَيْن. Which أَبْوَابٌ could it be from?",
          "options": [
            "س، ح",
            "ف، ض، ن",
            "ن، ك",
            "ض، ح"
          ],
          "correct": 0,
          "explanation": "A مَاضِيْ on فَعِلَ pairs with يَفْعَلُ (بَاب سَمِعَ) or يَفْعِلُ (بَاب حَسِبَ)."
        },
        {
          "title": "Revision Exercise 1 (p. 41)",
          "kind": "mcq",
          "prompt": "تَدْرُسُوْنَ is a مُضَارِعٌ with a ضَمَّةٌ on its عَيْن. Which أَبْوَابٌ could it be from?",
          "options": [
            "ن، ك",
            "ف، س",
            "ض، ح",
            "ك only"
          ],
          "correct": 0,
          "explanation": "A مُضَارِعٌ on يَفْعُلُ pairs with فَعَلَ (بَاب نَصَرَ) or فَعُلَ (بَاب كَرُمَ)."
        },
        {
          "title": "Revision Exercise 1 (p. 41)",
          "kind": "mcq",
          "prompt": "يَحْلِفُوْنَ is a مُضَارِعٌ with a كَسْرَةٌ on its عَيْن. Which أَبْوَابٌ could it be from?",
          "options": [
            "ض، ح",
            "ف، س",
            "ن، ك",
            "س، ح"
          ],
          "correct": 0,
          "explanation": "A مُضَارِعٌ on يَفْعِلُ pairs with فَعَلَ (بَاب ضَرَبَ) or فَعِلَ (بَاب حَسِبَ)."
        },
        {
          "title": "Revision Exercise 1 (p. 41)",
          "kind": "mcq",
          "prompt": "يَهْجَعْنَ is a مُضَارِعٌ with a فَتْحَةٌ on its عَيْن. Which أَبْوَابٌ could it be from?",
          "options": [
            "ف، س",
            "ض، ح",
            "ن، ك",
            "ف، ض، ن"
          ],
          "correct": 0,
          "explanation": "A مُضَارِعٌ on يَفْعَلُ pairs with فَعَلَ (بَاب فَتَحَ) or فَعِلَ (بَاب سَمِعَ)."
        },
        {
          "title": "to be bad",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be bad\"?",
          "options": [
            "خَبُثَ يَخْبُثُ",
            "بَصُرَ يَبْصُرُ",
            "كَرُمَ يَكْرُمُ",
            "بَعُدَ يَبْعُدُ"
          ],
          "correct": 0
        },
        {
          "title": "to be bad",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَبُثَ يَخْبُثُ mean?",
          "options": [
            "to be bad",
            "to look",
            "to be noble",
            "to be far"
          ],
          "correct": 0
        },
        {
          "title": "to be bad (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَبُثَ يَخْبُثُ?",
          "options": [
            "خُبْثًا",
            "بَصِيْرَةً",
            "كَرَامَةً",
            "بُعْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to look",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to look\"?",
          "options": [
            "بَصُرَ يَبْصُرُ",
            "كَرُمَ يَكْرُمُ",
            "بَعُدَ يَبْعُدُ",
            "كَبُرَ يَكْبُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to look",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَصُرَ يَبْصُرُ mean?",
          "options": [
            "to look",
            "to be noble",
            "to be far",
            "to become big, old"
          ],
          "correct": 0
        },
        {
          "title": "to look (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَصُرَ يَبْصُرُ?",
          "options": [
            "بَصِيْرَةً",
            "كَرَامَةً",
            "بُعْدًا",
            "كِبَرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be noble",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be noble\"?",
          "options": [
            "كَرُمَ يَكْرُمُ",
            "بَعُدَ يَبْعُدُ",
            "كَبُرَ يَكْبُرُ",
            "حَرُمَ يَحْرُمُ"
          ],
          "correct": 0
        },
        {
          "title": "to be noble",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَرُمَ يَكْرُمُ mean?",
          "options": [
            "to be noble",
            "to be far",
            "to become big, old",
            "to be impermissible"
          ],
          "correct": 0
        },
        {
          "title": "to be noble (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَرُمَ يَكْرُمُ?",
          "options": [
            "كَرَامَةً",
            "بُعْدًا",
            "كِبَرًا",
            "حُرْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be far\"?",
          "options": [
            "بَعُدَ يَبْعُدُ",
            "كَبُرَ يَكْبُرُ",
            "حَرُمَ يَحْرُمُ",
            "كَثُرَ يَكْثُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعُدَ يَبْعُدُ mean?",
          "options": [
            "to be far",
            "to become big, old",
            "to be impermissible",
            "to be more, abundant"
          ],
          "correct": 0
        },
        {
          "title": "to be far (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعُدَ يَبْعُدُ?",
          "options": [
            "بُعْدًا",
            "كِبَرًا",
            "حُرْمَةً",
            "كَثْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to become big, old",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become big, old\"?",
          "options": [
            "كَبُرَ يَكْبُرُ",
            "حَرُمَ يَحْرُمُ",
            "كَثُرَ يَكْثُرُ",
            "حَسُنَ يَحْسُنُ"
          ],
          "correct": 0
        },
        {
          "title": "to become big, old",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَبُرَ يَكْبُرُ mean?",
          "options": [
            "to become big, old",
            "to be impermissible",
            "to be more, abundant",
            "to be good"
          ],
          "correct": 0
        },
        {
          "title": "to become big, old (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَبُرَ يَكْبُرُ?",
          "options": [
            "كِبَرًا",
            "حُرْمَةً",
            "كَثْرَةً",
            "حُسْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to be impermissible",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be impermissible\"?",
          "options": [
            "حَرُمَ يَحْرُمُ",
            "كَثُرَ يَكْثُرُ",
            "حَسُنَ يَحْسُنُ",
            "نَعِمَ يَنْعِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to be impermissible",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَرُمَ يَحْرُمُ mean?",
          "options": [
            "to be impermissible",
            "to be more, abundant",
            "to be good",
            "to live in comfort"
          ],
          "correct": 0
        },
        {
          "title": "to be impermissible (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَرُمَ يَحْرُمُ?",
          "options": [
            "حُرْمَةً",
            "كَثْرَةً",
            "حُسْنًا",
            "نِعْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be more, abundant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be more, abundant\"?",
          "options": [
            "كَثُرَ يَكْثُرُ",
            "حَسُنَ يَحْسُنُ",
            "نَعِمَ يَنْعِمُ",
            "حَسِبَ يَحْسِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to be more, abundant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَثُرَ يَكْثُرُ mean?",
          "options": [
            "to be more, abundant",
            "to be good",
            "to live in comfort",
            "to consider"
          ],
          "correct": 0
        },
        {
          "title": "to be more, abundant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَثُرَ يَكْثُرُ?",
          "options": [
            "كَثْرَةً",
            "حُسْنًا",
            "نِعْمَةً",
            "حِسْبَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be good",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be good\"?",
          "options": [
            "حَسُنَ يَحْسُنُ",
            "نَعِمَ يَنْعِمُ",
            "حَسِبَ يَحْسِبُ",
            "خَبُثَ يَخْبُثُ"
          ],
          "correct": 0
        },
        {
          "title": "to be good",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَسُنَ يَحْسُنُ mean?",
          "options": [
            "to be good",
            "to live in comfort",
            "to consider",
            "to be bad"
          ],
          "correct": 0
        },
        {
          "title": "to be good (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَسُنَ يَحْسُنُ?",
          "options": [
            "حُسْنًا",
            "نِعْمَةً",
            "حِسْبَانًا",
            "خُبْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to live in comfort",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to live in comfort\"?",
          "options": [
            "نَعِمَ يَنْعِمُ",
            "حَسِبَ يَحْسِبُ",
            "خَبُثَ يَخْبُثُ",
            "بَصُرَ يَبْصُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to live in comfort",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَعِمَ يَنْعِمُ mean?",
          "options": [
            "to live in comfort",
            "to consider",
            "to be bad",
            "to look"
          ],
          "correct": 0
        },
        {
          "title": "to live in comfort (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَعِمَ يَنْعِمُ?",
          "options": [
            "نِعْمَةً",
            "حِسْبَانًا",
            "خُبْثًا",
            "بَصِيْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to consider",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to consider\"?",
          "options": [
            "حَسِبَ يَحْسِبُ",
            "خَبُثَ يَخْبُثُ",
            "بَصُرَ يَبْصُرُ",
            "كَرُمَ يَكْرُمُ"
          ],
          "correct": 0
        },
        {
          "title": "to consider",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَسِبَ يَحْسِبُ mean?",
          "options": [
            "to consider",
            "to be bad",
            "to look",
            "to be noble"
          ],
          "correct": 0
        },
        {
          "title": "to consider (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَسِبَ يَحْسِبُ?",
          "options": [
            "حِسْبَانًا",
            "خُبْثًا",
            "بَصِيْرَةً",
            "كَرَامَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "الْمَجْهُوْلُ",
      "subtitle": "The Passive Voice — forming and translating فِعْلٌ مَجْهُوْلٌ",
      "concepts": [
        {
          "heading": "Active and Passive Voice",
          "lines": [
            {
              "html": "Verbs can be divided into two categories according to voice. (1) Active voice: a verb in which the subject is mentioned, e.g. 'The thief stole the wealth.' The active voice is the original form of the verb. It is called <bdi>فِعْلٌ مَعْلُوْمٌ فَاعِلُهُ</bdi> — a verb whose subject is known — shortened to <bdi>فِعْلٌ مَعْلُوْمٌ</bdi>. (2) Passive voice: a verb in which the subject is not mentioned, and the verb is attributed to the direct object, e.g. 'The bike was stolen.' It is called <bdi>فِعْلٌ مَجْهُوْلٌ فَاعِلُهُ</bdi> — a verb whose subject is not mentioned — shortened to <bdi>فِعْلٌ مَجْهُوْلٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is a فِعْلٌ مَجْهُوْلٌ؟",
            "kind": "mcq",
            "options": ["A verb whose subject is mentioned", "A verb whose subject is not mentioned, attributed to the direct object", "A verb with no direct object", "A negated verb"],
            "correct": 1
          }
        },
        {
          "heading": "Translating الْفِعْلُ الْمَجْهُوْلُ",
          "lines": [
            {
              "html": "The passive voice is translated by adding the auxiliary verb 'to be' (was, is, is being, will be) to the past participle of the main verb: 'The bike was [auxiliary verb] stolen [past participle of the main verb].' The tense is shown in the auxiliary verb, not the main verb, as the past participle remains the same in all tenses.",
              "list": false
            },
            {
              "table": {
                "title": "Active and passive in each tense",
                "headers": [
                  "Tense",
                  "Active Voice",
                  "Passive Voice"
                ],
                "rows": [
                  [
                    "الْمَاضِيْ — Past",
                    "The thief stole the bike.",
                    "The bike was stolen."
                  ],
                  [
                    "الْمُضَارِعُ — Present Habitual",
                    "The thief steals the bike.",
                    "The bike is stolen."
                  ],
                  [
                    "الْمُضَارِعُ — Present Continuous",
                    "The thief is stealing the bike.",
                    "The bike is being stolen."
                  ],
                  [
                    "الْمُضَارِعُ — Future",
                    "The thief will steal the bike.",
                    "The bike will be stolen."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In the English translation of a passive verb, where is the tense shown؟",
            "kind": "mcq",
            "options": ["In the auxiliary verb ('to be'), not the main verb", "In the past participle", "In the direct object", "It cannot be shown"],
            "correct": 0
          }
        },
        {
          "heading": "الْمَاضِي الْمَجْهُوْلُ",
          "lines": [
            {
              "html": "The passive of <bdi>الْمَاضِيْ</bdi> is formed by: (1) Leaving the harakah of the last letter as it is. (2) Giving the penultimate letter a <bdi>كَسْرَةٌ</bdi>. (3) Giving the remaining letters a <bdi>ضَمَّةٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>بَعَثَ ⟵ بُعِثَ</bdi> — 'he sent' becomes 'he was sent'",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "الْمَاضِي الْمَجْهُوْلُ across الْأَبْوَابُ",
                "headers": [
                  "بَابٌ",
                  "الْمَاضِي الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "فَتَحَ يَفْتَحُ",
                    "فُتِحَ"
                  ],
                  [
                    "سَمِعَ يَسْمَعُ",
                    "سُمِعَ"
                  ],
                  [
                    "ضَرَبَ يَضْرِبُ",
                    "ضُرِبَ"
                  ],
                  [
                    "نَصَرَ يَنْصُرُ",
                    "نُصِرَ"
                  ]
                ]
              }
            },
            {
              "html": "(1) <bdi>الْفِعْلُ الْمَجْهُوْلُ</bdi> is formed in the same way for all <bdi>الْأَبْوَابُ</bdi>. (2) Verbs from <bdi>بَاب كَرُمَ يَكْرُمُ</bdi> do not occur in the <bdi>مَجْهُوْلٌ</bdi> form.",
              "list": false
            },
            {
              "table": {
                "title": "Conjugation of الْمَاضِي الْمَجْهُوْلُ (verb فَتَحَ يَفْتَحُ)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "Translation"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "فُتِحَ",
                    "He/It was opened"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "فُتِحَا",
                    "They (m/d) were opened"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "فُتِحُوْا",
                    "They (m/p) were opened"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "فُتِحَتْ",
                    "She/It was opened"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "فُتِحَتَا",
                    "They (f/d) were opened"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "فُتِحْنَ",
                    "They (f/p) were opened"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "فُتِحْتَ",
                    "You (m/s) were opened"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "فُتِحْتُمَا",
                    "You (m/d) were opened"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "فُتِحْتُمْ",
                    "You (m/p) were opened"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "فُتِحْتِ",
                    "You (f/s) were opened"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "فُتِحْتُمَا",
                    "You (f/d) were opened"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "فُتِحْتُنَّ",
                    "You (f/p) were opened"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "فُتِحْتُ",
                    "I was opened"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "فُتِحْنَا",
                    "We were opened"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How is الْمَاضِي الْمَجْهُوْلُ formed؟",
            "kind": "mcq",
            "options": ["First letter dammah, penultimate fathah, rest unchanged", "Last letter unchanged, penultimate kasrah, remaining letters dammah", "All letters take a kasrah", "Last letter sukun, first letter kasrah"],
            "correct": 1
          }
        },
        {
          "heading": "الْمُضَارِعُ الْمَجْهُوْلُ",
          "lines": [
            {
              "html": "The passive of <bdi>الْمُضَارِعُ</bdi> is formed by: (1) Giving the first letter a <bdi>ضَمَّةٌ</bdi>. (2) Giving the penultimate letter a <bdi>فَتْحَةٌ</bdi>. (3) Leaving the harakah of the remaining letters as they are.",
              "list": false
            },
            {
              "html": "<bdi>يَبْعَثُ ⟵ يُبْعَثُ</bdi> — 'he sends' becomes 'he is sent'",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "الْمُضَارِعُ الْمَجْهُوْلُ across الْأَبْوَابُ",
                "headers": [
                  "بَابٌ",
                  "الْمُضَارِعُ الْمَجْهُوْلُ"
                ],
                "rows": [
                  [
                    "فَتَحَ يَفْتَحُ",
                    "يُفْتَحُ"
                  ],
                  [
                    "سَمِعَ يَسْمَعُ",
                    "يُسْمَعُ"
                  ],
                  [
                    "ضَرَبَ يَضْرِبُ",
                    "يُضْرَبُ"
                  ],
                  [
                    "نَصَرَ يَنْصُرُ",
                    "يُنْصَرُ"
                  ]
                ]
              }
            },
            {
              "html": "<bdi>الْفِعْلُ الْمَجْهُوْلُ</bdi> is formed in the same way for all <bdi>الْأَبْوَابُ</bdi> — the passive <bdi>مُضَارِعٌ</bdi> of every <bdi>بَابٌ</bdi> looks the same (<bdi>يُفْعَلُ</bdi>).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How is الْمُضَارِعُ الْمَجْهُوْلُ formed؟",
            "kind": "mcq",
            "options": ["First letter dammah, penultimate letter fathah, the rest as they are", "First letter kasrah, penultimate dammah", "Penultimate kasrah, remaining letters dammah", "The حَرْفُ الْمُضَارِعِ is removed"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 4: الْمَجْهُوْلُ",
        "rows": [
          {
            "label": "Active Voice",
            "arabic": "فِعْلٌ مَعْلُوْمٌ فَاعِلُهُ",
            "meaning": "Active Voice",
            "unlockAt": 0
          },
          {
            "label": "Passive Voice",
            "arabic": "فِعْلٌ مَجْهُوْلٌ فَاعِلُهُ",
            "meaning": "Passive Voice",
            "unlockAt": 3
          }
        ]
      },
      "quiz": [
        {
          "q": "What is a فِعْلٌ مَجْهُوْلٌ?",
          "options": [
            "A verb whose subject is mentioned",
            "A verb whose subject is not mentioned, attributed to the direct object",
            "A verb with no direct object",
            "A negated verb"
          ],
          "correct": 1,
          "explanation": "The passive voice (فِعْلٌ مَجْهُوْلٌ فَاعِلُهُ) is a verb in which the subject is not mentioned and the verb is attributed to the direct object, e.g. 'The bike was stolen.'"
        },
        {
          "q": "How is الْمَاضِي الْمَجْهُوْلُ formed?",
          "options": [
            "First letter dammah, penultimate fathah, rest unchanged",
            "Last letter unchanged, penultimate kasrah, remaining letters dammah",
            "All letters take a kasrah",
            "Last letter sukun, first letter kasrah"
          ],
          "correct": 1,
          "explanation": "For the passive مَاضِيْ: keep the last letter's harakah, give the penultimate a كَسْرَةٌ, and the remaining letters a ضَمَّةٌ — بَعَثَ ⟵ بُعِثَ."
        },
        {
          "q": "How is الْمُضَارِعُ الْمَجْهُوْلُ formed?",
          "options": [
            "First letter dammah, penultimate letter fathah, the rest as they are",
            "First letter kasrah, penultimate dammah",
            "Penultimate kasrah, remaining letters dammah",
            "The حَرْفُ الْمُضَارِعِ is removed"
          ],
          "correct": 0,
          "explanation": "For the passive مُضَارِعٌ: dammah on the first letter, fathah on the penultimate, the rest unchanged — يَبْعَثُ ⟵ يُبْعَثُ."
        },
        {
          "q": "Which بَابٌ does NOT occur in the مَجْهُوْلٌ form?",
          "options": [
            "بَاب كَرُمَ يَكْرُمُ",
            "بَاب فَتَحَ يَفْتَحُ",
            "بَاب سَمِعَ يَسْمَعُ",
            "بَاب نَصَرَ يَنْصُرُ"
          ],
          "correct": 0,
          "explanation": "Verbs from بَاب كَرُمَ يَكْرُمُ (mostly stative 'to be' verbs) do not occur in the passive."
        },
        {
          "q": "In the English translation of a passive verb, where is the tense shown?",
          "options": [
            "In the auxiliary verb ('to be'), not the main verb",
            "In the past participle",
            "In the direct object",
            "It cannot be shown"
          ],
          "correct": 0,
          "explanation": "The past participle stays the same in all tenses ('stolen'); the auxiliary changes: was / is / is being / will be stolen."
        },
        {
          "q": "The passive of يَضْرِبُ ('he hits') is…",
          "options": [
            "يُضْرَبُ",
            "ضُرِبَ",
            "يُضْرِبُ",
            "يَضْرَبُ"
          ],
          "correct": 0,
          "explanation": "First letter dammah + penultimate fathah: يُضْرَبُ 'he is hit'. ضُرِبَ is the passive مَاضِيْ 'he was hit'."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The active voice is called فِعْلٌ مَعْلُوْمٌ because…",
          "options": [
            "its subject is known/mentioned",
            "its object is known",
            "it is well known among grammarians",
            "it only occurs in the past tense"
          ],
          "correct": 0,
          "explanation": "فِعْلٌ مَعْلُوْمٌ فَاعِلُهُ means 'a verb whose subject is known'. The passive is فِعْلٌ مَجْهُوْلٌ فَاعِلُهُ — its subject is not mentioned."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The passive مَاضِيْ of سَمِعَ is…",
          "options": [
            "سُمِعَ",
            "سَمُعَ",
            "يُسْمَعُ",
            "سُمِّعَ"
          ],
          "correct": 0,
          "explanation": "The مَجْهُوْلٌ is formed the same way for all أَبْوَابٌ: سَمِعَ ⟵ سُمِعَ 'it was heard'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "'The bike is being stolen' corresponds to which Arabic tense and voice?",
          "options": [
            "الْمُضَارِعُ الْمَجْهُوْلُ (present continuous)",
            "الْمَاضِي الْمَجْهُوْلُ",
            "الْمُضَارِعُ الْمَعْلُوْمُ (present continuous)",
            "الْمَاضِي الْمَعْلُوْمُ"
          ],
          "correct": 0,
          "explanation": "'Is being stolen' is passive present continuous — covered by الْمُضَارِعُ الْمَجْهُوْلُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Once in the passive, the مُضَارِعٌ of every بَابٌ looks the same. What is the shared pattern?",
          "options": [
            "يُفْعَلُ",
            "يُفْعِلُ",
            "يَفْعُلُ",
            "يُفْعُلُ"
          ],
          "correct": 0,
          "explanation": "يُفْتَحُ، يُسْمَعُ، يُضْرَبُ، يُنْصَرُ — all on يُفْعَلُ: dammah on the first letter, fathah on the penultimate."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "فُتِحْتُ means…",
          "options": [
            "I was opened",
            "I opened",
            "You (m/s) were opened",
            "It was opened"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُ of الْمَاضِي الْمَجْهُوْلِ with the pronoun تُ: 'I was opened'. The active is فَتَحْتُ 'I opened'."
        },
        {
          "title": "Book Exercise 2 (p. 46)",
          "kind": "mcq",
          "prompt": "تُرِكْنَ means…",
          "options": [
            "They (f/p) were left",
            "They (f/p) left",
            "You (f/p) were left",
            "We were left"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of الْمَاضِي الْمَجْهُوْلِ: تُرِكَ + نَ — 'They (f/p) were left'. (تَرَكَ = to leave.)"
        },
        {
          "title": "Book Exercise 2 (p. 46)",
          "kind": "mcq",
          "prompt": "حُشِرُوْا means…",
          "options": [
            "They (m/p) were gathered",
            "They (m/p) gathered",
            "You (m/p) were gathered",
            "They (m/d) were gathered"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ of الْمَاضِي الْمَجْهُوْلِ with the pronoun و: 'They (m/p) were gathered'. (حَشَرَ = to gather.)"
        },
        {
          "title": "Book Exercise 2 (p. 46)",
          "kind": "mcq",
          "prompt": "كُذِبَتْ means…",
          "options": [
            "She was lied to",
            "She lied",
            "You (f/s) were lied to",
            "They (f/d) were lied to"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَةُ of الْمَاضِي الْمَجْهُوْلِ — the ت is the feminine sign: 'She was lied to'. (كَذَبَ = to lie.)"
        },
        {
          "title": "Book Exercise 2 (p. 46)",
          "kind": "mcq",
          "prompt": "ضُرِبْتُمْ means…",
          "options": [
            "You (m/p) were hit",
            "You (m/p) hit",
            "They (m/p) were hit",
            "You (m/d) were hit"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبُوْنَ of الْمَاضِي الْمَجْهُوْلِ with the pronoun تُمْ: 'You (m/p) were hit'. The active would be ضَرَبْتُمْ."
        },
        {
          "title": "Book Exercise 3 (p. 46)",
          "kind": "mcq",
          "prompt": "Convert to the passive, keeping the صِيْغَةٌ: رَحِمْتُ ('I showed mercy') ⟵ …",
          "options": [
            "رُحِمْتُ",
            "رَحِمْتَ",
            "يُرْحَمُ",
            "رُحِمَ"
          ],
          "correct": 0,
          "explanation": "Dammah on the first letter, kasrah on the penultimate: رُحِمْتُ 'I was shown mercy'. (Model: رَفَعْنَا ⟵ رُفِعْنَا 'We were elevated'.)"
        },
        {
          "title": "Book Exercise 3 (p. 46)",
          "kind": "mcq",
          "prompt": "Convert to the passive, keeping the صِيْغَةٌ: سَمِعْتُمْ ('You m/p heard') ⟵ …",
          "options": [
            "سُمِعْتُمْ",
            "سَمِعْتُمَا",
            "تُسْمَعُوْنَ",
            "سُمِعُوْا"
          ],
          "correct": 0,
          "explanation": "سُمِعْتُمْ = 'You (m/p) were heard'. تُسْمَعُوْنَ is the passive مُضَارِعٌ, not the مَاضِيْ."
        },
        {
          "title": "Book Exercise 3 (p. 46)",
          "kind": "mcq",
          "prompt": "Convert to the passive, keeping the صِيْغَةٌ: عَرَفَتْ ('She recognised') ⟵ …",
          "options": [
            "عُرِفَتْ",
            "عَرُفَتْ",
            "تُعْرَفُ",
            "عُرِفْتِ"
          ],
          "correct": 0,
          "explanation": "عُرِفَتْ = 'She was recognised'. عُرِفْتِ would be 'You (f/s) were recognised'."
        },
        {
          "title": "Book Exercise 3 (p. 46)",
          "kind": "mcq",
          "prompt": "Convert to the passive, keeping the صِيْغَةٌ: لَعَنْتُمَا ('You m/d cursed') ⟵ …",
          "options": [
            "لُعِنْتُمَا",
            "لُعِنَا",
            "لُعِنْتُمْ",
            "تُلْعَنَانِ"
          ],
          "correct": 0,
          "explanation": "The pronoun تُمَا stays; only the harakat change: لُعِنْتُمَا 'You (m/d) were cursed'."
        },
        {
          "title": "Book Exercise 5 (p. 49)",
          "kind": "mcq",
          "prompt": "يُلْعَنُوْنَ means…",
          "options": [
            "They (m/p) are cursed",
            "They (m/p) curse",
            "You (m/p) are cursed",
            "They (m/p) were cursed"
          ],
          "correct": 0,
          "explanation": "الْغَائِبُوْنَ of الْمُضَارِعِ الْمَجْهُوْلِ: 'They (m/p) are / will be cursed'. The active is يَلْعَنُوْنَ."
        },
        {
          "title": "Book Exercise 5 (p. 49)",
          "kind": "mcq",
          "prompt": "تُقْرَأُ means…",
          "options": [
            "It (f) is read",
            "She reads",
            "It (f) was read",
            "You (m/s) read"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَةُ (or الْمُخَاطَبُ) of الْمُضَارِعِ الْمَجْهُوْلِ: 'It (she) is read / You (m/s) are read'. The active is تَقْرَأُ."
        },
        {
          "title": "Book Exercise 5 (p. 49)",
          "kind": "mcq",
          "prompt": "نُبْعَثُ means…",
          "options": [
            "We are resurrected",
            "We resurrect",
            "We were resurrected",
            "They are resurrected"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمُضَارِعِ الْمَجْهُوْلِ: 'We are / will be resurrected'. (بَعَثَ = to send, to resurrect.)"
        },
        {
          "title": "Book Exercise 5 (p. 49)",
          "kind": "mcq",
          "prompt": "تُسْمَعِيْنَ means…",
          "options": [
            "You (f/s) are heard",
            "You (f/s) hear",
            "You (f/p) are heard",
            "She is heard"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَةُ of الْمُضَارِعِ الْمَجْهُوْلِ with the pronoun ي: 'You (f/s) are heard'."
        },
        {
          "title": "Book Exercise 6 (p. 49)",
          "kind": "mcq",
          "prompt": "'We are forgiven' in Arabic is…",
          "options": [
            "نُغْفَرُ",
            "نَغْفِرُ",
            "غُفِرْنَا",
            "يُغْفَرُ"
          ],
          "correct": 0,
          "explanation": "الْمُتَكَلِّمُوْنَ of الْمُضَارِعِ الْمَجْهُوْلِ: نُغْفَرُ. نَغْفِرُ is active ('we forgive') and غُفِرْنَا is past passive ('we were forgiven')."
        },
        {
          "title": "Book Exercise 6 (p. 49)",
          "kind": "mcq",
          "prompt": "'They (f/p) are lied to' in Arabic is…",
          "options": [
            "يُكْذَبْنَ",
            "يَكْذِبْنَ",
            "كُذِبْنَ",
            "تُكْذَبْنَ"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ of الْمُضَارِعِ الْمَجْهُوْلِ: يُكْذَبْنَ. تُكْذَبْنَ would be 'You (f/p) are lied to'."
        },
        {
          "title": "Book Exercise 6 (p. 49)",
          "kind": "mcq",
          "prompt": "'You (m/d) are protected' in Arabic is…",
          "options": [
            "تُحْفَظَانِ",
            "تَحْفَظَانِ",
            "حُفِظْتُمَا",
            "يُحْفَظَانِ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَانِ of الْمُضَارِعِ الْمَجْهُوْلِ: تُحْفَظَانِ. (حَفِظَ = to guard, protect.)"
        }
      ]
    },
    {
      "id": "l8",
      "title": "إِعْرَابُ الْفِعْلِ",
      "subtitle": "The Grammatical States of the Verb — مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْزُوْمٌ",
      "concepts": [
        {
          "heading": "Declinable and Non-Declinable Verbs",
          "lines": [
            {
              "html": "Verbs are of two types according to their declension: (1) Non-declinable verbs: <bdi>صِيَغٌ</bdi> whose endings do not change. In Arabic, these are called <bdi>مَبْنِيٌّ</bdi>. (2) Declinable verbs: <bdi>صِيَغٌ</bdi> whose endings change due to particles that precede them. In Arabic, these are called <bdi>مُعْرَبٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What does مَبْنِيٌّ mean؟",
            "kind": "mcq",
            "options": ["Non-declinable — the ending does not change", "Declinable — the ending changes due to preceding particles", "Passive voice", "The default state of the verb"],
            "correct": 0
          }
        },
        {
          "heading": "Irab of الْفِعْلُ الْمَاضِيْ",
          "lines": [
            {
              "html": "All <bdi>صِيَغٌ</bdi> of <bdi>الْفِعْلُ الْمَاضِيْ</bdi> are <bdi>مَبْنِيٌّ</bdi>, non-declinable: they do not change irrespective of any particle that may precede them. Four <bdi>صِيَغٌ</bdi> always have a <bdi>فَتْحَةٌ</bdi> — they are <bdi>مَبْنِيٌّ عَلَى الْفَتْحِ</bdi> (<bdi>فَتَحَ، فَتَحَا، فَتَحَتْ، فَتَحَتَا</bdi>). One <bdi>صِيْغَةٌ</bdi> always has a <bdi>ضَمَّةٌ</bdi> — it is <bdi>مَبْنِيٌّ عَلَى الضَّمِّ</bdi> (<bdi>فَتَحُوْا</bdi>). The remaining <bdi>صِيَغٌ</bdi> always have a <bdi>سُكُوْنٌ</bdi> — they are <bdi>مَبْنِيٌّ عَلَى السُّكُوْنِ</bdi> (e.g. <bdi>فَتَحْنَ، فَتَحْنَا</bdi>).",
              "list": false
            },
            {
              "table": {
                "title": "The irab of الْمَاضِيْ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمَاضِيْ",
                  "إِعْرَابٌ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "فَتَحَ",
                    "مَبْنِيٌّ عَلَى الْفَتْحِ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "فَتَحَا",
                    "مَبْنِيٌّ عَلَى الْفَتْحِ"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "فَتَحُوْا",
                    "مَبْنِيٌّ عَلَى الضَّمِّ"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "فَتَحَتْ",
                    "مَبْنِيٌّ عَلَى الْفَتْحِ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "فَتَحَتَا",
                    "مَبْنِيٌّ عَلَى الْفَتْحِ"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "فَتَحْنَ",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "فَتَحْتَ",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "فَتَحْتُمَا",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "فَتَحْتُمْ",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "فَتَحْتِ",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "فَتَحْتُمَا",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "فَتَحْتُنَّ",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "فَتَحْتُ",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "فَتَحْنَا",
                    "مَبْنِيٌّ عَلَى السُّكُوْنِ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the irab of ALL صِيَغٌ of الْفِعْلُ الْمَاضِيْ؟",
            "kind": "mcq",
            "options": ["They are all مَبْنِيٌّ (non-declinable)", "They are all مُعْرَبٌ (declinable)", "Some are مُعْرَبٌ and some مَبْنِيٌّ", "They are all مَرْفُوْعٌ by default"],
            "correct": 0
          }
        },
        {
          "heading": "Irab of الْفِعْلُ الْمُضَارِعُ",
          "lines": [
            {
              "html": "All <bdi>صِيَغٌ</bdi> of <bdi>الْفِعْلُ الْمُضَارِعُ</bdi> occur in three grammatical states: (1) <bdi>مَرْفُوْعٌ</bdi>: the default state of <bdi>الْفِعْلُ الْمُضَارِعُ</bdi>; it remains in this state unless it is preceded by a particle which changes this, e.g. <bdi>يَفْتَحُ</bdi>. (2) <bdi>مَنْصُوْبٌ</bdi>: a <bdi>فِعْلٌ مُضَارِعٌ</bdi> becomes <bdi>مَنْصُوْبٌ</bdi> when it is preceded by a particle which renders it <bdi>مَنْصُوْبٌ</bdi>. Such a particle is called <bdi>حَرْفٌ نَاصِبٌ</bdi>. One such particle is <bdi>لَنْ</bdi>, e.g. <bdi>لَنْ يَفْتَحَ</bdi>. (3) <bdi>مَجْزُوْمٌ</bdi>: a <bdi>فِعْلٌ مُضَارِعٌ</bdi> becomes <bdi>مَجْزُوْمٌ</bdi> when it is preceded by a particle which renders it <bdi>مَجْزُوْمٌ</bdi>. Such a particle is called <bdi>حَرْفٌ جَازِمٌ</bdi>. One such particle is <bdi>لَمْ</bdi>, e.g. <bdi>لَمْ يَفْتَحْ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the three grammatical states of الْفِعْلُ الْمُضَارِعُ؟",
            "kind": "mcq",
            "options": ["مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْزُوْمٌ", "مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْرُوْرٌ", "مَاضٍ، حَالٌ، مُسْتَقْبَلٌ", "مَبْنِيٌّ، مُعْرَبٌ، مَجْهُوْلٌ"],
            "correct": 0
          }
        },
        {
          "heading": "Recognising the State of الْمُضَارِعُ",
          "lines": [
            {
              "html": "The state of <bdi>الْمُضَارِعُ</bdi> is shown by the <bdi>عَلَامَةُ الْإِعْرَابِ</bdi>. There are three types of <bdi>صِيَغٌ</bdi> of <bdi>الْفِعْلُ الْمُضَارِعُ</bdi>: (1) Those which do not end in a <bdi>نُوْنٌ</bdi>: the <bdi>لَامُ الْكَلِمَةِ</bdi> has a <bdi>ضَمَّةٌ</bdi> in the <bdi>مَرْفُوْعٌ</bdi> state, a <bdi>فَتْحَةٌ</bdi> in the <bdi>مَنْصُوْبٌ</bdi> state, and a <bdi>سُكُوْنٌ</bdi> in the <bdi>مَجْزُوْمٌ</bdi> state (<bdi>يَفْتَحُ، لَنْ يَفْتَحَ، لَمْ يَفْتَحْ</bdi>). (2) Those which end in a <bdi>نُوْنُ الْإِعْرَابِ</bdi> — a <bdi>نُوْنٌ</bdi> occurring after the pronoun: it remains in the <bdi>مَرْفُوْعٌ</bdi> state and drops in the <bdi>مَنْصُوْبٌ</bdi> and <bdi>مَجْزُوْمٌ</bdi> states (<bdi>يَفْتَحَانِ، لَنْ يَفْتَحَا، لَمْ يَفْتَحَا</bdi>). (3) <bdi>الْغَائِبَاتُ</bdi> and <bdi>الْمُخَاطَبَاتُ</bdi>, which have a <bdi>ضَمِيْرٌ</bdi> in the form of a <bdi>نُوْنٌ</bdi> at the end — the <bdi>نُوْنُ النِّسْوَةِ</bdi>: these <bdi>صِيَغٌ</bdi> are <bdi>مَبْنِيٌّ</bdi>; they remain the same in all three states (<bdi>يَفْعَلْنَ، لَنْ يَفْعَلْنَ، لَمْ يَفْعَلْنَ</bdi>).",
              "list": false
            },
            {
              "html": "Differentiating between <bdi>نُوْنُ الْإِعْرَابِ</bdi> and <bdi>نُوْنُ النِّسْوَةِ</bdi>: the <bdi>نُوْنُ الْإِعْرَابِ</bdi> comes after the pronoun (e.g. after the <bdi>و</bdi> in <bdi>يَفْعَلُوْنَ</bdi>) to show the <bdi>فِعْلٌ مُضَارِعٌ</bdi> is <bdi>مَرْفُوْعٌ</bdi>. The <bdi>نُوْنٌ</bdi> at the end of <bdi>الْغَائِبَاتُ</bdi> and <bdi>الْمُخَاطَبَاتُ</bdi> (<bdi>يَفْعَلْنَ</bdi>) is the <bdi>ضَمِيْرٌ</bdi> itself — a pronoun, not a sign of irab.",
              "list": false
            },
            {
              "table": {
                "title": "The irab of الْمُضَارِعُ",
                "headers": [
                  "صِيْغَةٌ",
                  "الْمُضَارِعُ الْمَرْفُوْعُ",
                  "الْمُضَارِعُ الْمَنْصُوْبُ",
                  "الْمُضَارِعُ الْمَجْزُوْمُ"
                ],
                "rows": [
                  [
                    "الْغَائِبُ",
                    "يَفْتَحُ",
                    "لَنْ يَفْتَحَ",
                    "لَمْ يَفْتَحْ"
                  ],
                  [
                    "الْغَائِبَانِ",
                    "يَفْتَحَانِ",
                    "لَنْ يَفْتَحَا",
                    "لَمْ يَفْتَحَا"
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "يَفْتَحُوْنَ",
                    "لَنْ يَفْتَحُوْا",
                    "لَمْ يَفْتَحُوْا"
                  ],
                  [
                    "الْغَائِبَةُ",
                    "تَفْتَحُ",
                    "لَنْ تَفْتَحَ",
                    "لَمْ تَفْتَحْ"
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "تَفْتَحَانِ",
                    "لَنْ تَفْتَحَا",
                    "لَمْ تَفْتَحَا"
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "يَفْتَحْنَ",
                    "لَنْ يَفْتَحْنَ",
                    "لَمْ يَفْتَحْنَ"
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "تَفْتَحُ",
                    "لَنْ تَفْتَحَ",
                    "لَمْ تَفْتَحْ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "تَفْتَحَانِ",
                    "لَنْ تَفْتَحَا",
                    "لَمْ تَفْتَحَا"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "تَفْتَحُوْنَ",
                    "لَنْ تَفْتَحُوْا",
                    "لَمْ تَفْتَحُوْا"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "تَفْتَحِيْنَ",
                    "لَنْ تَفْتَحِيْ",
                    "لَمْ تَفْتَحِيْ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "تَفْتَحَانِ",
                    "لَنْ تَفْتَحَا",
                    "لَمْ تَفْتَحَا"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "تَفْتَحْنَ",
                    "لَنْ تَفْتَحْنَ",
                    "لَمْ تَفْتَحْنَ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "أَفْتَحُ",
                    "لَنْ أَفْتَحَ",
                    "لَمْ أَفْتَحْ"
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "نَفْتَحُ",
                    "لَنْ نَفْتَحَ",
                    "لَمْ نَفْتَحْ"
                  ]
                ]
              }
            },
            {
              "html": "More details of conjugating <bdi>مَنْصُوْبٌ</bdi> and <bdi>مَجْزُوْمٌ</bdi> verbs are discussed in Unit 12.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why does يَفْعَلْنَ stay the same after لَنْ and لَمْ؟",
            "kind": "mcq",
            "options": ["Because its final نَ is the نُوْنُ النِّسْوَةِ — a pronoun — making the صِيْغَةٌ مَبْنِيٌّ", "Because لَنْ and لَمْ have no effect on any verb", "Because its final نَ is the نُوْنُ الْإِعْرَابِ", "Because it is a مَاضٍ form"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 5: الْإِعْرَابُ",
        "rows": [
          {
            "label": "Grammatical state",
            "arabic": "إِعْرَابٌ",
            "meaning": "Grammatical state",
            "unlockAt": 0
          },
          {
            "label": "Non-declinable",
            "arabic": "مَبْنِيٌّ",
            "meaning": "Non-declinable",
            "unlockAt": 0
          },
          {
            "label": "Declinable",
            "arabic": "مُعْرَبٌ",
            "meaning": "Declinable",
            "unlockAt": 1
          },
          {
            "label": "Sign of grammatical state",
            "arabic": "عَلَامَةُ الْإِعْرَابِ",
            "meaning": "Sign of grammatical state",
            "unlockAt": 1
          },
          {
            "label": "Default state of a verb",
            "arabic": "مَرْفُوْعٌ",
            "meaning": "Default state of a verb",
            "unlockAt": 2
          },
          {
            "label": "State of a verb when it is preceded by a حَرْفٌ نَاصِبٌ",
            "arabic": "مَنْصُوْبٌ",
            "meaning": "State of a verb when it is preceded by a حَرْفٌ نَاصِبٌ",
            "unlockAt": 3
          },
          {
            "label": "State of a verb when it is preceded by a حَرْفٌ جَازِمٌ",
            "arabic": "مَجْزُوْمٌ",
            "meaning": "State of a verb when it is preceded by a حَرْفٌ جَازِمٌ",
            "unlockAt": 3
          },
          {
            "label": "A particle which renders the following verb مَنْصُوْبٌ",
            "arabic": "حَرْفٌ نَاصِبٌ",
            "meaning": "A particle which renders the following verb مَنْصُوْبٌ",
            "unlockAt": 4
          },
          {
            "label": "A particle which renders the following verb مَجْزُوْمٌ",
            "arabic": "حَرْفٌ جَازِمٌ",
            "meaning": "A particle which renders the following verb مَجْزُوْمٌ",
            "unlockAt": 5
          },
          {
            "label": "The نُوْنٌ which is a pronoun for الْغَائِبَاتُ and الْمُخَاطَبَاتُ",
            "arabic": "نُوْنُ النِّسْوَةِ",
            "meaning": "The نُوْنٌ which is a pronoun for الْغَائِبَاتُ and الْمُخَاطَبَاتُ",
            "unlockAt": 5
          },
          {
            "label": "The نُوْنٌ which shows that the verb is مَرْفُوْعٌ",
            "arabic": "نُوْنُ الْإِعْرَابِ",
            "meaning": "The نُوْنٌ which shows that the verb is مَرْفُوْعٌ",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "What does مَبْنِيٌّ mean?",
          "options": [
            "Non-declinable — the ending does not change",
            "Declinable — the ending changes due to preceding particles",
            "Passive voice",
            "The default state of the verb"
          ],
          "correct": 0,
          "explanation": "مَبْنِيٌّ verbs never change their endings; مُعْرَبٌ verbs change due to particles that precede them."
        },
        {
          "q": "What is the irab of ALL صِيَغٌ of الْفِعْلُ الْمَاضِيْ?",
          "options": [
            "They are all مَبْنِيٌّ (non-declinable)",
            "They are all مُعْرَبٌ (declinable)",
            "Some are مُعْرَبٌ and some مَبْنِيٌّ",
            "They are all مَرْفُوْعٌ by default"
          ],
          "correct": 0,
          "explanation": "All صِيَغٌ of الْمَاضِيْ are مَبْنِيٌّ — four عَلَى الْفَتْحِ, one عَلَى الضَّمِّ (فَتَحُوْا), and the rest عَلَى السُّكُوْنِ."
        },
        {
          "q": "Which صِيْغَةٌ of الْمَاضِيْ is مَبْنِيٌّ عَلَى الضَّمِّ?",
          "options": [
            "فَتَحُوْا",
            "فَتَحَ",
            "فَتَحْنَا",
            "فَتَحَتَا"
          ],
          "correct": 0,
          "explanation": "Only الْغَائِبُوْنَ (فَتَحُوْا) is مَبْنِيٌّ عَلَى الضَّمِّ. فَتَحَ and فَتَحَتَا are عَلَى الْفَتْحِ; فَتَحْنَا is عَلَى السُّكُوْنِ."
        },
        {
          "q": "What are the three grammatical states of الْفِعْلُ الْمُضَارِعُ?",
          "options": [
            "مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْزُوْمٌ",
            "مَرْفُوْعٌ، مَنْصُوْبٌ، مَجْرُوْرٌ",
            "مَاضٍ، حَالٌ، مُسْتَقْبَلٌ",
            "مَبْنِيٌّ، مُعْرَبٌ، مَجْهُوْلٌ"
          ],
          "correct": 0,
          "explanation": "The مُضَارِعٌ is مَرْفُوْعٌ by default, مَنْصُوْبٌ after a حَرْفٌ نَاصِبٌ (e.g. لَنْ), and مَجْزُوْمٌ after a حَرْفٌ جَازِمٌ (e.g. لَمْ). (مَجْرُوْرٌ is a state of nouns, not verbs.)"
        },
        {
          "q": "What happens to the نُوْنُ الْإِعْرَابِ in the مَنْصُوْبٌ and مَجْزُوْمٌ states?",
          "options": [
            "It drops — يَفْتَحَانِ becomes لَنْ يَفْتَحَا / لَمْ يَفْتَحَا",
            "It takes a فَتْحَةٌ",
            "It takes a سُكُوْنٌ",
            "Nothing — it always remains"
          ],
          "correct": 0,
          "explanation": "The نُوْنُ الْإِعْرَابِ remains only in the مَرْفُوْعٌ state and drops in the مَنْصُوْبٌ and مَجْزُوْمٌ states."
        },
        {
          "q": "Why does يَفْعَلْنَ stay the same after لَنْ and لَمْ?",
          "options": [
            "Because its final نَ is the نُوْنُ النِّسْوَةِ — a pronoun — making the صِيْغَةٌ مَبْنِيٌّ",
            "Because لَنْ and لَمْ have no effect on any verb",
            "Because its final نَ is the نُوْنُ الْإِعْرَابِ",
            "Because it is a مَاضٍ form"
          ],
          "correct": 0,
          "explanation": "الْغَائِبَاتُ and الْمُخَاطَبَاتُ end in the نُوْنُ النِّسْوَةِ, which is a ضَمِيْرٌ, not a sign of irab — these صِيَغٌ are مَبْنِيٌّ and remain the same in all three states."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In يَفْتَحُ ⟵ لَنْ يَفْتَحَ ⟵ لَمْ يَفْتَحْ, the لَامُ الْكَلِمَةِ carries…",
          "options": [
            "ضَمَّةٌ (marfu), فَتْحَةٌ (mansub), سُكُوْنٌ (majzum)",
            "فَتْحَةٌ (marfu), ضَمَّةٌ (mansub), سُكُوْنٌ (majzum)",
            "ضَمَّةٌ (marfu), سُكُوْنٌ (mansub), فَتْحَةٌ (majzum)",
            "كَسْرَةٌ (marfu), فَتْحَةٌ (mansub), ضَمَّةٌ (majzum)"
          ],
          "correct": 0,
          "explanation": "For صِيَغٌ that do not end in a نُوْنٌ: dammah in مَرْفُوْعٌ, fathah in مَنْصُوْبٌ, sukun in مَجْزُوْمٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "لَنْ is a…",
          "options": [
            "حَرْفٌ نَاصِبٌ — it renders the مُضَارِعٌ مَنْصُوْبٌ",
            "حَرْفٌ جَازِمٌ — it renders the مُضَارِعٌ مَجْزُوْمٌ",
            "حَرْفُ نَفْيٍ that leaves the verb مَرْفُوْعٌ",
            "pronoun"
          ],
          "correct": 0,
          "explanation": "لَنْ is a حَرْفٌ نَاصِبٌ (e.g. لَنْ يَفْتَحَ); لَمْ is a حَرْفٌ جَازِمٌ (e.g. لَمْ يَفْتَحْ)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In يَفْعَلُوْنَ, the pronoun and the عَلَامَةُ الْإِعْرَابِ are respectively…",
          "options": [
            "و (pronoun) and نَ (sign of irab)",
            "نَ (pronoun) and و (sign of irab)",
            "يـ (pronoun) and نَ (sign of irab)",
            "و (pronoun) and the ضَمَّةٌ (sign of irab)"
          ],
          "correct": 0,
          "explanation": "The و is the فَاعِلٌ (pronoun) and the نَ after it is the نُوْنُ الْإِعْرَابِ, showing the verb is مَرْفُوْعٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The مَجْزُوْمٌ form of تَفْتَحِيْنَ is…",
          "options": [
            "لَمْ تَفْتَحِيْ",
            "لَمْ تَفْتَحِيْنَ",
            "لَمْ تَفْتَحْ",
            "لَمْ تَفْتَحَا"
          ],
          "correct": 0,
          "explanation": "تَفْتَحِيْنَ ends in the نُوْنُ الْإِعْرَابِ, which drops in the مَجْزُوْمٌ state: لَمْ تَفْتَحِيْ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which of the following صِيَغٌ of الْمَاضِيْ is مَبْنِيٌّ عَلَى الْفَتْحِ?",
          "options": [
            "فَتَحَتَا",
            "فَتَحْتُمْ",
            "فَتَحُوْا",
            "فَتَحْنَ"
          ],
          "correct": 0,
          "explanation": "The four صِيَغٌ built on فَتْحٌ are فَتَحَ، فَتَحَا، فَتَحَتْ، فَتَحَتَا. فَتَحْتُمْ and فَتَحْنَ are عَلَى السُّكُوْنِ; فَتَحُوْا is عَلَى الضَّمِّ."
        },
        {
          "title": "Book Exercise 1 (p. 56)",
          "kind": "mcq",
          "prompt": "لَمْ أَذْهَبْ is which صِيْغَةٌ and state?",
          "options": [
            "الْمُتَكَلِّمُ — مُضَارِعٌ مَجْزُوْمٌ",
            "الْمُتَكَلِّمُ — مُضَارِعٌ مَنْصُوْبٌ",
            "الْمُتَكَلِّمُوْنَ — مُضَارِعٌ مَجْزُوْمٌ",
            "الْغَائِبُ — مُضَارِعٌ مَجْزُوْمٌ"
          ],
          "correct": 0,
          "explanation": "أَذْهَبُ is الْمُتَكَلِّمُ; after the حَرْفٌ جَازِمٌ لَمْ it becomes مَجْزُوْمٌ with a سُكُوْنٌ: لَمْ أَذْهَبْ 'I did not go'."
        },
        {
          "title": "Book Exercise 1 (p. 56)",
          "kind": "mcq",
          "prompt": "لَنْ يَعْقِلْنَ is which صِيْغَةٌ and state?",
          "options": [
            "الْغَائِبَاتُ — مَبْنِيٌّ; the form does not change after لَنْ",
            "الْغَائِبَاتُ — مَنْصُوْبٌ with a dropped نُوْنٌ",
            "الْمُخَاطَبَاتُ — مَجْزُوْمٌ",
            "الْغَائِبُوْنَ — مَنْصُوْبٌ"
          ],
          "correct": 0,
          "explanation": "يَعْقِلْنَ is الْغَائِبَاتُ; its final نَ is the نُوْنُ النِّسْوَةِ (a pronoun), so the صِيْغَةٌ is مَبْنِيٌّ and remains the same after لَنْ."
        },
        {
          "title": "Book Exercise 1 (p. 56)",
          "kind": "mcq",
          "prompt": "لَمْ تَجْعَلَا is which صِيْغَةٌ and state?",
          "options": [
            "الْغَائِبَتَانِ / الْمُخَاطَبَانِ / الْمُخَاطَبَتَانِ — مُضَارِعٌ مَجْزُوْمٌ",
            "الْغَائِبَانِ — مُضَارِعٌ مَجْزُوْمٌ",
            "الْمُخَاطَبَانِ — مُضَارِعٌ مَرْفُوْعٌ",
            "الْغَائِبَتَانِ — مَاضٍ"
          ],
          "correct": 0,
          "explanation": "تَجْعَلَانِ loses its نُوْنُ الْإِعْرَابِ after لَمْ: لَمْ تَجْعَلَا. The تـ prefix dual form is shared by three صِيَغٌ."
        },
        {
          "title": "Book Exercise 1 (p. 56)",
          "kind": "mcq",
          "prompt": "نَكْثُرُ is which صِيْغَةٌ and state?",
          "options": [
            "الْمُتَكَلِّمُوْنَ — مُضَارِعٌ مَرْفُوْعٌ",
            "الْمُتَكَلِّمُوْنَ — مُضَارِعٌ مَنْصُوْبٌ",
            "الْمُتَكَلِّمُ — مُضَارِعٌ مَرْفُوْعٌ",
            "الْغَائِبَاتُ — مَبْنِيٌّ"
          ],
          "correct": 0,
          "explanation": "No particle precedes it, so it stays in the default مَرْفُوْعٌ state with a ضَمَّةٌ: نَكْثُرُ 'we are abundant'."
        },
        {
          "title": "Book Exercise 1 (p. 56)",
          "kind": "mcq",
          "prompt": "لَنْ يَكْرُمُوْا is which صِيْغَةٌ and state?",
          "options": [
            "الْغَائِبُوْنَ — مُضَارِعٌ مَنْصُوْبٌ (the نُوْنُ الْإِعْرَابِ has dropped)",
            "الْغَائِبُوْنَ — مُضَارِعٌ مَرْفُوْعٌ",
            "الْمُخَاطَبُوْنَ — مُضَارِعٌ مَنْصُوْبٌ",
            "الْغَائِبُوْنَ — مَاضٍ مَبْنِيٌّ عَلَى الضَّمِّ"
          ],
          "correct": 0,
          "explanation": "يَكْرُمُوْنَ after the حَرْفٌ نَاصِبٌ لَنْ becomes لَنْ يَكْرُمُوْا — the نُوْنُ الْإِعْرَابِ drops: 'They (m/p) will never be noble'."
        },
        {
          "title": "Book Exercise 1 (p. 56)",
          "kind": "mcq",
          "prompt": "لَمْ يُكْرَمُوْا (passive) is which صِيْغَةٌ and state?",
          "options": [
            "الْغَائِبُوْنَ — مُضَارِعٌ مَجْهُوْلٌ مَجْزُوْمٌ",
            "الْغَائِبُوْنَ — مُضَارِعٌ مَعْلُوْمٌ مَجْزُوْمٌ",
            "الْمُخَاطَبُوْنَ — مُضَارِعٌ مَجْهُوْلٌ مَنْصُوْبٌ",
            "الْغَائِبُوْنَ — مَاضٍ مَجْهُوْلٌ"
          ],
          "correct": 0,
          "explanation": "The dammah on the حَرْفُ الْمُضَارِعِ marks the passive; لَمْ makes it مَجْزُوْمٌ, dropping the نُوْنُ الْإِعْرَابِ."
        }
      ]
    },
    {
      "id": "l9",
      "title": "نَفْيُ الْفِعْلِ",
      "subtitle": "Negating the Verb — the particles مَا، لَا، لَمْ، لَنْ",
      "concepts": [
        {
          "heading": "مُثْبَتٌ and مَنْفِيٌّ",
          "lines": [
            {
              "html": "Verbs are either affirmative or negative. An affirmative verb is one that shows that the action took place. This is called <bdi>مُثْبَتٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>جَلَسَ زَيْدٌ</bdi> — Zaid sat.",
              "list": true,
              "bullet": true
            },
            {
              "html": "A negative verb is one that shows that the action did not take place. This is called <bdi>مَنْفِيٌّ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>مَا جَلَسَ زَيْدٌ</bdi> — Zaid did not sit.",
              "list": true,
              "bullet": true
            },
            {
              "html": "A verb is <bdi>مَنْفِيٌّ</bdi> when it is preceded by a <bdi>حَرْفُ نَفْيٍ</bdi>, a negative particle. A verb without such a particle will be <bdi>مُثْبَتٌ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is an affirmative verb called in Arabic؟",
            "kind": "mcq",
            "options": ["مَنْفِيٌّ", "مُثْبَتٌ", "مَجْهُوْلٌ", "مَجْزُوْمٌ"],
            "correct": 1
          }
        },
        {
          "heading": "Negative Particles for الْمَاضِيْ",
          "lines": [
            {
              "html": "There are various particles to make a verb negative. <bdi>الْمَاضِيْ</bdi> is made negative by adding the particle <bdi>مَا</bdi> at the beginning.",
              "list": false
            },
            {
              "html": "<bdi>مَا ذَهَبَ زَيْدٌ</bdi> — Zaid did not go.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "Which particle is used to make الْمَاضِيْ negative؟",
            "kind": "mcq",
            "options": ["لَمْ", "لَنْ", "مَا", "لَا"],
            "correct": 2
          }
        },
        {
          "heading": "Negative Particles for الْمُضَارِعُ",
          "lines": [
            {
              "html": "<bdi>الْمُضَارِعُ</bdi> is made <bdi>مَنْفِيٌّ</bdi> by adding any of the following particles: (1) <bdi>لَمْ</bdi> — this gives <bdi>الْمُضَارِعُ</bdi> a negative meaning in the past tense. The <bdi>فِعْلٌ مُضَارِعٌ</bdi> after <bdi>لَمْ</bdi> will be in the <bdi>مَجْزُوْمٌ</bdi> state.",
              "list": false
            },
            {
              "html": "<bdi>لَمْ يَذْهَبْ زَيْدٌ</bdi> — Zaid did not go.",
              "list": true,
              "bullet": true
            },
            {
              "html": "(2) <bdi>مَا</bdi> — this gives <bdi>الْمُضَارِعُ</bdi> a negative meaning in the present tense, habitual or continuous.",
              "list": false
            },
            {
              "html": "<bdi>مَا يَذْهَبُ زَيْدٌ</bdi> — Present habitual: Zaid does not go. / Present continuous: Zaid is not going.",
              "list": true,
              "bullet": true
            },
            {
              "html": "(3) <bdi>لَا</bdi> — this gives <bdi>الْمُضَارِعُ</bdi> a negative meaning in the present habitual, present continuous, or future tense.",
              "list": false
            },
            {
              "html": "<bdi>لَا يَذْهَبُ زَيْدٌ</bdi> — Present habitual: Zaid does not go. / Present continuous: Zaid is not going. / Future: Zaid will not go.",
              "list": true,
              "bullet": true
            },
            {
              "html": "(4) <bdi>لَنْ</bdi> — this gives <bdi>الْمُضَارِعُ</bdi> an emphatic negative meaning in the future tense. The <bdi>فِعْلٌ مُضَارِعٌ</bdi> after <bdi>لَنْ</bdi> will be in the <bdi>مَنْصُوْبٌ</bdi> state.",
              "list": false
            },
            {
              "html": "<bdi>لَنْ يَذْهَبَ زَيْدٌ</bdi> — Zaid will not go.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What meaning does لَمْ give to الْمُضَارِعُ, and what state does the verb take؟",
            "kind": "mcq",
            "options": ["A past-tense negative meaning; the verb becomes مَجْزُوْمٌ", "A future negative meaning; the verb becomes مَنْصُوْبٌ", "A present negative meaning; the verb stays مَرْفُوْعٌ", "A past-tense negative meaning; the verb becomes مَنْصُوْبٌ"],
            "correct": 0
          }
        },
        {
          "heading": "Summary of the Negative Particles",
          "lines": [
            {
              "html": "The following table summarises the negative particles.",
              "list": false
            },
            {
              "table": {
                "title": "Summary of the Negative Particles",
                "headers": [
                  "Particle",
                  "Verb that follows",
                  "Tense of the verb after adding the حَرْفُ نَفْيٍ",
                  "Example",
                  "Translation"
                ],
                "rows": [
                  [
                    "لَمْ",
                    "الْمُضَارِعُ",
                    "Past",
                    "لَمْ يَذْهَبْ زَيْدٌ",
                    "Zaid did not go."
                  ],
                  [
                    "مَا",
                    "الْمَاضِيْ",
                    "Past",
                    "مَا ذَهَبَ زَيْدٌ",
                    "Zaid did not go."
                  ],
                  [
                    "مَا",
                    "الْمُضَارِعُ",
                    "Present",
                    "مَا يَذْهَبُ زَيْدٌ",
                    "Zaid is not going."
                  ],
                  [
                    "لَا",
                    "الْمُضَارِعُ",
                    "Present / Future",
                    "لَا يَذْهَبُ زَيْدٌ",
                    "Zaid does not go. / Zaid is not going. / Zaid will not go."
                  ],
                  [
                    "لَنْ",
                    "الْمُضَارِعُ",
                    "Future",
                    "لَنْ يَذْهَبَ زَيْدٌ",
                    "Zaid will not go."
                  ]
                ]
              }
            },
            {
              "html": "Note the irab: <bdi>لَمْ</bdi> is a <bdi>حَرْفٌ جَازِمٌ</bdi>, so the verb after it is <bdi>مَجْزُوْمٌ</bdi> (<bdi>لَمْ يَذْهَبْ</bdi>). <bdi>لَنْ</bdi> is a <bdi>حَرْفٌ نَاصِبٌ</bdi>, so the verb after it is <bdi>مَنْصُوْبٌ</bdi> (<bdi>لَنْ يَذْهَبَ</bdi>). <bdi>مَا</bdi> and <bdi>لَا</bdi> leave the <bdi>مُضَارِعٌ</bdi> in its default <bdi>مَرْفُوْعٌ</bdi> state (<bdi>مَا يَذْهَبُ، لَا يَذْهَبُ</bdi>).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Which two particles negate الْمُضَارِعُ without changing its مَرْفُوْعٌ state؟",
            "kind": "mcq",
            "options": ["مَا and لَا", "لَمْ and لَنْ", "لَمْ and مَا", "لَنْ and لَا"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 6: نَفْيُ الْفِعْلِ",
        "rows": [
          {
            "label": "Affirmative",
            "arabic": "مُثْبَتٌ",
            "meaning": "Affirmative",
            "unlockAt": 0
          },
          {
            "label": "Negative",
            "arabic": "مَنْفِيٌّ",
            "meaning": "Negative",
            "unlockAt": 2
          },
          {
            "label": "Negative particle",
            "arabic": "حَرْفُ نَفْيٍ",
            "meaning": "Negative particle",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "What is an affirmative verb called in Arabic?",
          "options": [
            "مَنْفِيٌّ",
            "مُثْبَتٌ",
            "مَجْهُوْلٌ",
            "مَجْزُوْمٌ"
          ],
          "correct": 1,
          "explanation": "A verb showing that the action took place is مُثْبَتٌ; one showing that it did not take place is مَنْفِيٌّ."
        },
        {
          "q": "When is a verb مَنْفِيٌّ?",
          "options": [
            "When it is preceded by a حَرْفُ نَفْيٍ",
            "When it ends in a سُكُوْنٌ",
            "When it is in the مَاضِيْ tense",
            "When it has a hidden pronoun"
          ],
          "correct": 0,
          "explanation": "A verb is مَنْفِيٌّ when a negative particle (حَرْفُ نَفْيٍ) precedes it. Without such a particle it is مُثْبَتٌ."
        },
        {
          "q": "Which particle is used to make الْمَاضِيْ negative?",
          "options": [
            "لَمْ",
            "لَنْ",
            "مَا",
            "لَا"
          ],
          "correct": 2,
          "explanation": "الْمَاضِيْ is made negative by adding مَا at the beginning, e.g. مَا ذَهَبَ زَيْدٌ — 'Zaid did not go'."
        },
        {
          "q": "What meaning does لَمْ give to الْمُضَارِعُ, and what state does the verb take?",
          "options": [
            "A past-tense negative meaning; the verb becomes مَجْزُوْمٌ",
            "A future negative meaning; the verb becomes مَنْصُوْبٌ",
            "A present negative meaning; the verb stays مَرْفُوْعٌ",
            "A past-tense negative meaning; the verb becomes مَنْصُوْبٌ"
          ],
          "correct": 0,
          "explanation": "لَمْ gives الْمُضَارِعُ a negative meaning in the past tense and renders it مَجْزُوْمٌ: لَمْ يَذْهَبْ زَيْدٌ — 'Zaid did not go'."
        },
        {
          "q": "Which particle gives الْمُضَارِعُ an emphatic negative meaning in the future tense?",
          "options": [
            "مَا",
            "لَا",
            "لَنْ",
            "لَمْ"
          ],
          "correct": 2,
          "explanation": "لَنْ gives an emphatic future negative and makes the verb مَنْصُوْبٌ: لَنْ يَذْهَبَ زَيْدٌ — 'Zaid will not go'."
        },
        {
          "q": "لَا يَذْهَبُ زَيْدٌ can be translated in how many ways, and which?",
          "options": [
            "One way: 'Zaid will not go'",
            "Two ways: present habitual and past",
            "Three ways: 'Zaid does not go', 'Zaid is not going', 'Zaid will not go'",
            "Three ways: past, present and past perfect"
          ],
          "correct": 2,
          "explanation": "لَا gives الْمُضَارِعُ a negative meaning in the present habitual, present continuous, or future tense — all three translations are possible."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which two particles negate الْمُضَارِعُ without changing its مَرْفُوْعٌ state?",
          "options": [
            "مَا and لَا",
            "لَمْ and لَنْ",
            "لَمْ and مَا",
            "لَنْ and لَا"
          ],
          "correct": 0,
          "explanation": "مَا and لَا are not عَامِلٌ over the verb: مَا يَذْهَبُ، لَا يَذْهَبُ keep the dammah. لَمْ makes it مَجْزُوْمٌ and لَنْ makes it مَنْصُوْبٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which particle can negate BOTH الْمَاضِيْ and الْمُضَارِعُ?",
          "options": [
            "مَا",
            "لَمْ",
            "لَنْ",
            "لَا"
          ],
          "correct": 0,
          "explanation": "مَا precedes الْمَاضِيْ (مَا ذَهَبَ زَيْدٌ — past) and also الْمُضَارِعُ (مَا يَذْهَبُ زَيْدٌ — present). لَمْ، لَنْ and لَا only precede الْمُضَارِعُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "لَمْ يَذْهَبْ زَيْدٌ and مَا ذَهَبَ زَيْدٌ …",
          "options": [
            "both mean 'Zaid did not go' — a past-tense negative",
            "mean 'Zaid did not go' and 'Zaid will not go' respectively",
            "mean 'Zaid is not going' and 'Zaid did not go' respectively",
            "are both future negatives"
          ],
          "correct": 0,
          "explanation": "لَمْ + مُضَارِعٌ gives a past-tense negative meaning, exactly like مَا + مَاضٍ. Both translate as 'Zaid did not go'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In لَنْ تَسْخَرَ, why does the لَامُ الْكَلِمَةِ carry a فَتْحَةٌ?",
          "options": [
            "Because لَنْ is a حَرْفٌ نَاصِبٌ, making the verb مَنْصُوْبٌ",
            "Because لَنْ is a حَرْفٌ جَازِمٌ, making the verb مَجْزُوْمٌ",
            "Because the verb is مَاضٍ",
            "Because the verb is مَجْهُوْلٌ"
          ],
          "correct": 0,
          "explanation": "لَنْ renders الْمُضَارِعُ مَنْصُوْبٌ, whose sign on a صِيْغَةٌ not ending in a نُوْنٌ is a فَتْحَةٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "How would you negate يَفْتَحُوْنَ with لَمْ?",
          "options": [
            "لَمْ يَفْتَحُوْا",
            "لَمْ يَفْتَحُوْنَ",
            "لَمْ يَفْتَحُوْ",
            "لَمْ يَفْتَحْنَ"
          ],
          "correct": 0,
          "explanation": "لَمْ makes the verb مَجْزُوْمٌ, so the نُوْنُ الْإِعْرَابِ drops: لَمْ يَفْتَحُوْا (the أَلِفٌ after the و is silent)."
        },
        {
          "title": "Book Exercise 1 (p. 57)",
          "kind": "mcq",
          "prompt": "Make ذَهَبْتُمْ negative and translate.",
          "options": [
            "مَا ذَهَبْتُمْ — You (m/p) did not go",
            "لَمْ ذَهَبْتُمْ — You (m/p) did not go",
            "لَا ذَهَبْتُمْ — You (m/p) are not going",
            "لَنْ ذَهَبْتُمْ — You (m/p) will not go"
          ],
          "correct": 0,
          "explanation": "الْمَاضِيْ is negated with مَا only; لَمْ، لَنْ and لَا are used with الْمُضَارِعُ."
        },
        {
          "title": "Book Exercise 1 (p. 57)",
          "kind": "mcq",
          "prompt": "Make صَلَحَتْ negative and translate.",
          "options": [
            "مَا صَلَحَتْ — She did not act righteously",
            "مَا صَلَحَتْ — They (f/p) did not act righteously",
            "لَمْ تَصْلَحْ — She was not righteous (مَاضٍ)",
            "لَا صَلَحَتْ — She is not righteous"
          ],
          "correct": 0,
          "explanation": "صَلَحَتْ is الْغَائِبَةُ of الْمَاضِيْ; adding مَا gives مَا صَلَحَتْ — 'She did not act righteously'."
        },
        {
          "title": "Book Exercise 1 (p. 57)",
          "kind": "mcq",
          "prompt": "Make رُفِعْتُمَا negative and translate.",
          "options": [
            "مَا رُفِعْتُمَا — You two were not elevated",
            "مَا رُفِعْتُمَا — You two did not elevate",
            "لَمْ رُفِعْتُمَا — You two were not elevated",
            "مَا رَفَعْتُمَا — You two were not elevated"
          ],
          "correct": 0,
          "explanation": "رُفِعْتُمَا is مَاضٍ مَجْهُوْلٌ (passive) of الْمُخَاطَبَانِ / الْمُخَاطَبَتَانِ; مَا negates it: 'You two were not elevated'."
        },
        {
          "title": "Book Exercise 1 (p. 57)",
          "kind": "mcq",
          "prompt": "Make سُئِلْنَ negative and translate.",
          "options": [
            "مَا سُئِلْنَ — They (f/p) were not asked",
            "مَا سُئِلْنَ — They (f/p) did not ask",
            "مَا سَأَلْنَ — They (f/p) were not asked",
            "لَا سُئِلْنَ — They (f/p) are not asked"
          ],
          "correct": 0,
          "explanation": "سُئِلْنَ is a مَاضٍ مَجْهُوْلٌ of الْغَائِبَاتُ (the pronoun نَ). With مَا: 'They (f/p) were not asked'."
        },
        {
          "title": "Book Exercise 2 (p. 58)",
          "kind": "mcq",
          "prompt": "Translate لَمْ يَحْزَنْ.",
          "options": [
            "He was not grieved",
            "He will not be grieved",
            "He is not grieved",
            "They (m/p) were not grieved"
          ],
          "correct": 0,
          "explanation": "لَمْ gives الْمُضَارِعُ a past-tense negative meaning and makes it مَجْزُوْمٌ (sukun on the لَامُ الْكَلِمَةِ)."
        },
        {
          "title": "Book Exercise 2 (p. 58)",
          "kind": "mcq",
          "prompt": "Translate لَا يَرْكَبَانِ (give all possible translations).",
          "options": [
            "They (m/d) do not ride / are not riding / will not ride",
            "They (m/d) did not ride",
            "They (m/p) do not ride / are not riding",
            "They (f/d) will not ride only"
          ],
          "correct": 0,
          "explanation": "لَا covers present habitual, present continuous and future. يَرْكَبَانِ is الْغَائِبَانِ, still مَرْفُوْعٌ (the نُوْنُ الْإِعْرَابِ remains)."
        },
        {
          "title": "Book Exercise 2 (p. 58)",
          "kind": "mcq",
          "prompt": "Translate لَنْ تَعْلَمِيْ.",
          "options": [
            "You (f/s) will never know",
            "You (f/s) do not know",
            "You (f/s) did not know",
            "You (f/p) will never know"
          ],
          "correct": 0,
          "explanation": "لَنْ gives an emphatic future negative and makes the verb مَنْصُوْبٌ — the نُوْنُ الْإِعْرَابِ of تَعْلَمِيْنَ (الْمُخَاطَبَةُ) drops."
        },
        {
          "title": "Book Exercise 2 (p. 58)",
          "kind": "mcq",
          "prompt": "Translate مَا نُرْحَمُ.",
          "options": [
            "We are not shown mercy",
            "We do not show mercy",
            "We were not shown mercy",
            "We will not be shown mercy"
          ],
          "correct": 0,
          "explanation": "نُرْحَمُ is مُضَارِعٌ مَجْهُوْلٌ of الْمُتَكَلِّمُوْنَ; مَا gives a present negative: 'We are not shown mercy / We do not receive mercy'."
        },
        {
          "title": "Book Exercise 2 (p. 58)",
          "kind": "mcq",
          "prompt": "Translate لَمْ تُحْفَظُوْا.",
          "options": [
            "You (m/p) were not protected",
            "You (m/p) did not protect",
            "You (m/p) will not be protected",
            "You (m/p) are not protected"
          ],
          "correct": 0,
          "explanation": "A مُضَارِعٌ مَجْهُوْلٌ made مَجْزُوْمٌ by لَمْ (the نُوْنُ الْإِعْرَابِ has dropped), giving a past passive meaning."
        },
        {
          "title": "Book Exercise 3 (p. 59)",
          "kind": "mcq",
          "prompt": "Make يَقْدِرَانِ negative with (لَا), adjusting the irab where necessary.",
          "options": [
            "لَا يَقْدِرَانِ",
            "لَا يَقْدِرَا",
            "لَا يَقْدِرْنَ",
            "لَا يَقْدِرُوْا"
          ],
          "correct": 0,
          "explanation": "لَا is neither نَاصِبٌ nor جَازِمٌ, so the verb stays مَرْفُوْعٌ and keeps its نُوْنُ الْإِعْرَابِ: لَا يَقْدِرَانِ."
        },
        {
          "title": "Book Exercise 3 (p. 59)",
          "kind": "mcq",
          "prompt": "Make يُضْرَبُوْنَ negative with (لَنْ), adjusting the irab where necessary.",
          "options": [
            "لَنْ يُضْرَبُوْا",
            "لَنْ يُضْرَبُوْنَ",
            "لَنْ يُضْرَبْنَ",
            "لَنْ يَضْرِبُوْا"
          ],
          "correct": 0,
          "explanation": "لَنْ makes the verb مَنْصُوْبٌ, so the نُوْنُ الْإِعْرَابِ drops: لَنْ يُضْرَبُوْا — 'They (m/p) will never be hit'."
        },
        {
          "title": "Book Exercise 3 (p. 59)",
          "kind": "mcq",
          "prompt": "Make يَعْرِفْنَ negative with (لَمْ), adjusting the irab where necessary.",
          "options": [
            "لَمْ يَعْرِفْنَ — the form is unchanged",
            "لَمْ يَعْرِفُوْا",
            "لَمْ يَعْرِفَا",
            "لَمْ يَعْرِفْ"
          ],
          "correct": 0,
          "explanation": "The final نَ of الْغَائِبَاتُ is the نُوْنُ النِّسْوَةِ, a pronoun — the صِيْغَةٌ is مَبْنِيٌّ and does not change after لَمْ."
        },
        {
          "title": "Book Exercise 3 (p. 59)",
          "kind": "mcq",
          "prompt": "Make نَخْرُجُ negative with (لَمْ), adjusting the irab where necessary.",
          "options": [
            "لَمْ نَخْرُجْ",
            "لَمْ نَخْرُجَ",
            "لَمْ نَخْرُجُ",
            "لَمْ خَرَجْنَا"
          ],
          "correct": 0,
          "explanation": "لَمْ is a حَرْفٌ جَازِمٌ: the لَامُ الْكَلِمَةِ takes a سُكُوْنٌ — لَمْ نَخْرُجْ 'We did not come out'."
        },
        {
          "title": "Book Exercise 3 (p. 59)",
          "kind": "mcq",
          "prompt": "Make كُذِبَتْ negative with (مَا).",
          "options": [
            "مَا كُذِبَتْ — She was not lied to",
            "لَمْ تُكْذَبْ — She was not lied to",
            "مَا كَذَبَتْ — She did not lie",
            "لَا كُذِبَتْ — She is not lied to"
          ],
          "correct": 0,
          "explanation": "كُذِبَتْ is a مَاضٍ مَجْهُوْلٌ; الْمَاضِيْ takes مَا and its form does not change (it is مَبْنِيٌّ)."
        },
        {
          "title": "Book Exercise 3 (p. 59)",
          "kind": "mcq",
          "prompt": "Make تَمْلِكَانِ negative with (لَنْ), adjusting the irab where necessary.",
          "options": [
            "لَنْ تَمْلِكَا",
            "لَنْ تَمْلِكَانِ",
            "لَنْ تَمْلِكْنَ",
            "لَمْ تَمْلِكَا"
          ],
          "correct": 0,
          "explanation": "لَنْ renders the verb مَنْصُوْبٌ, dropping the نُوْنُ الْإِعْرَابِ: لَنْ تَمْلِكَا."
        }
      ]
    },
    {
      "id": "l10",
      "title": "الْأَمْرُ وَالنَّهْيُ",
      "subtitle": "The Imperative and the Negative Command — forming both from الْمُضَارِعُ",
      "concepts": [
        {
          "heading": "الْأَمْرُ",
          "lines": [
            {
              "html": "<bdi>الْأَمْرُ</bdi> is the imperative tense used to issue a command.",
              "list": false
            },
            {
              "html": "<bdi>اِصْبِرْ</bdi> — Be patient",
              "list": true,
              "bullet": true
            },
            {
              "html": "<bdi>الْأَمْرُ</bdi> is made from <bdi>الْمُضَارِعُ</bdi>. However, since you can only directly command someone who is in front of you, <bdi>الْأَمْرُ</bdi> only occurs with the <bdi>صِيَغٌ</bdi> of <bdi>مُخَاطَبٌ</bdi>.",
              "list": false
            },
            {
              "html": "This is formed by: (1) Removing the <bdi>حَرْفُ الْمُضَارِعِ</bdi>. (2) Adding a temporary hamzah, <bdi>هَمْزَةُ الْوَصْلِ</bdi>, at the beginning. (3) Making the verb <bdi>مَجْزُوْمٌ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "Forming الْأَمْرُ from الْمُضَارِعُ",
                "headers": [
                  "الْمُضَارِعُ",
                  "① Make it مَجْزُوْمٌ",
                  "② Remove the حَرْفُ الْمُضَارِعِ",
                  "③ Add هَمْزَةُ الْوَصْلِ"
                ],
                "rows": [
                  [
                    "تَفْعَلُ",
                    "تَفْعَلْ",
                    "فْعَلْ",
                    "اِفْعَلْ"
                  ],
                  [
                    "تَفْعَلَانِ",
                    "تَفْعَلَا",
                    "فْعَلَا",
                    "اِفْعَلَا"
                  ],
                  [
                    "تَفْعَلُوْنَ",
                    "تَفْعَلُوْا",
                    "فْعَلُوْا",
                    "اِفْعَلُوْا"
                  ],
                  [
                    "تَفْعَلِيْنَ",
                    "تَفْعَلِيْ",
                    "فْعَلِيْ",
                    "اِفْعَلِيْ"
                  ],
                  [
                    "تَفْعَلَانِ",
                    "تَفْعَلَا",
                    "فْعَلَا",
                    "اِفْعَلَا"
                  ],
                  [
                    "تَفْعَلْنَ",
                    "تَفْعَلْنَ",
                    "فْعَلْنَ",
                    "اِفْعَلْنَ"
                  ]
                ]
              }
            },
            {
              "html": "The <bdi>هَمْزَةُ الْوَصْلِ</bdi> placed at the beginning of <bdi>الْأَمْرُ</bdi> will carry a <bdi>كَسْرَةٌ</bdi> unless the <bdi>عَيْنُ الْكَلِمَةِ</bdi> of the <bdi>مُضَارِعٌ</bdi> has a <bdi>ضَمَّةٌ</bdi>. In that case the <bdi>هَمْزَةُ الْوَصْلِ</bdi> will have a <bdi>ضَمَّةٌ</bdi>, e.g. <bdi>اِفْتَحْ</bdi>، <bdi>اِصْبِرْ</bdi>، <bdi>أُنْصُرْ</bdi>.",
              "list": false
            },
            {
              "html": "A <bdi>هَمْزَةُ الْوَصْلِ</bdi> only carries a <bdi>فَتْحَةٌ</bdi>، <bdi>ضَمَّةٌ</bdi> or <bdi>كَسْرَةٌ</bdi> when it comes at the very beginning of a sentence. If it does not come at the very beginning of the sentence, it will not be pronounced, e.g. <bdi>اِفْعَلْ</bdi> becomes <bdi>وَافْعَلْ</bdi> / <bdi>فَافْعَلْ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the three steps in forming الْأَمْرُ؟",
            "kind": "mcq",
            "options": ["Remove the حَرْفُ الْمُضَارِعِ, add a هَمْزَةُ الْوَصْلِ, make the verb مَجْزُوْمٌ", "Add لَا, remove the نُوْنٌ, make the verb مَنْصُوْبٌ", "Remove the pronoun, add a تَنْوِيْنٌ, make the verb مَرْفُوْعٌ", "Remove the لَامُ الْكَلِمَةِ, add a هَمْزَةٌ, make the verb مَبْنِيٌّ"],
            "correct": 0
          }
        },
        {
          "heading": "النَّهْيُ",
          "lines": [
            {
              "html": "<bdi>النَّهْيُ</bdi> is a negative command.",
              "list": false
            },
            {
              "html": "<bdi>لَا تَكْذِبْ</bdi> — Do not lie.",
              "list": true,
              "bullet": true
            },
            {
              "html": "This is formed from the <bdi>الْمُخَاطَبُ</bdi> of <bdi>الْمُضَارِعُ</bdi> by: (1) Making the verb <bdi>مَجْزُوْمٌ</bdi>. (2) Placing a <bdi>لَا النَّهْيِ</bdi> before it.",
              "list": false
            },
            {
              "table": {
                "title": "Forming النَّهْيُ from الْمُضَارِعُ",
                "headers": [
                  "الْمُضَارِعُ",
                  "① Make it مَجْزُوْمٌ",
                  "② Place لَا النَّهْيِ before it"
                ],
                "rows": [
                  [
                    "تَفْعَلُ",
                    "تَفْعَلْ",
                    "لَا تَفْعَلْ"
                  ],
                  [
                    "تَفْعَلَانِ",
                    "تَفْعَلَا",
                    "لَا تَفْعَلَا"
                  ],
                  [
                    "تَفْعَلُوْنَ",
                    "تَفْعَلُوْا",
                    "لَا تَفْعَلُوْا"
                  ],
                  [
                    "تَفْعَلِيْنَ",
                    "تَفْعَلِيْ",
                    "لَا تَفْعَلِيْ"
                  ],
                  [
                    "تَفْعَلَانِ",
                    "تَفْعَلَا",
                    "لَا تَفْعَلَا"
                  ],
                  [
                    "تَفْعَلْنَ",
                    "تَفْعَلْنَ",
                    "لَا تَفْعَلْنَ"
                  ]
                ]
              }
            },
            {
              "table": {
                "title": "الْأَمْرُ of five common verbs (from the book's Exercise 1 model row, p. 61)",
                "headers": [
                  "صِيْغَةٌ",
                  "الْأَمْرُ",
                  "الْأَمْرُ",
                  "الْأَمْرُ",
                  "الْأَمْرُ",
                  "الْأَمْرُ"
                ],
                "rows": [
                  [
                    "الْمُخَاطَبُ",
                    "اِفْتَحْ",
                    "اِسْمَعْ",
                    "اِضْرِبْ",
                    "أُنْصُرْ",
                    "أُكْرُمْ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How is النَّهْيُ formed؟",
            "kind": "mcq",
            "options": ["By making the الْمُخَاطَبُ of الْمُضَارِعُ مَجْزُوْمٌ and placing لَا النَّهْيِ before it", "By making the الْمُضَارِعُ مَنْصُوْبٌ and placing لَنْ before it", "By adding a هَمْزَةُ الْوَصْلِ and لَا", "By placing مَا before الْمَاضِيْ"],
            "correct": 0
          }
        },
        {
          "heading": "لَا as حَرْفُ نَفْيٍ and as حَرْفُ نَهْيٍ",
          "lines": [
            {
              "html": "The particle <bdi>لَا</bdi> can function as both a <bdi>حَرْفُ نَفْيٍ</bdi> and a <bdi>حَرْفُ نَهْيٍ</bdi>. A <bdi>نَفْيٌ</bdi> is a negative statement that shows that an action did/does not take place.",
              "list": false
            },
            {
              "html": "<bdi>لَا تَجْلِسُوْنَ</bdi> — You do not sit. / You are not sitting.",
              "list": true,
              "bullet": true
            },
            {
              "html": "A <bdi>نَهْيٌ</bdi> is a prohibition; a command to the addressee not to do something.",
              "list": false
            },
            {
              "html": "<bdi>لَا تَجْلِسُوْا</bdi> — Do not sit.",
              "list": true,
              "bullet": true
            },
            {
              "html": "A <bdi>مَنْفِيٌّ</bdi> verb is <bdi>مَرْفُوْعٌ</bdi> and a <bdi>نَهْيٌ</bdi> is <bdi>مَجْزُوْمٌ</bdi>. So the <bdi>نُوْنُ الْإِعْرَابِ</bdi> tells them apart: <bdi>لَا تَجْلِسُوْنَ</bdi> (statement) vs <bdi>لَا تَجْلِسُوْا</bdi> (prohibition).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the difference between لَا تَجْلِسُوْنَ and لَا تَجْلِسُوْا؟",
            "kind": "mcq",
            "options": ["لَا تَجْلِسُوْنَ is a نَفْيٌ ('You do not sit') and is مَرْفُوْعٌ; لَا تَجْلِسُوْا is a نَهْيٌ ('Do not sit') and is مَجْزُوْمٌ", "لَا تَجْلِسُوْنَ is a نَهْيٌ and لَا تَجْلِسُوْا is a نَفْيٌ", "They mean exactly the same thing", "لَا تَجْلِسُوْنَ is مَنْصُوْبٌ and لَا تَجْلِسُوْا is مَرْفُوْعٌ"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 7: الْأَمْرُ وَالنَّهْيُ",
        "rows": [
          {
            "label": "Imperative",
            "arabic": "الْأَمْرُ",
            "meaning": "Imperative",
            "unlockAt": 0
          },
          {
            "label": "Negative command",
            "arabic": "النَّهْيُ",
            "meaning": "Negative command",
            "unlockAt": 2
          },
          {
            "label": "Temporary hamza",
            "arabic": "هَمْزَةُ الْوَصْلِ",
            "meaning": "Temporary hamza",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "Why does الْأَمْرُ only occur with the صِيَغٌ of مُخَاطَبٌ?",
          "options": [
            "Because you can only directly command someone who is in front of you",
            "Because الْأَمْرُ is made from الْمَاضِيْ",
            "Because the غَائِبُ forms are مَبْنِيٌّ",
            "Because الْأَمْرُ has no pronouns"
          ],
          "correct": 0,
          "explanation": "الْأَمْرُ is made from الْمُضَارِعُ but, since a command is addressed to the person in front of you, only the six مُخَاطَبٌ صِيَغ occur."
        },
        {
          "q": "What are the three steps in forming الْأَمْرُ?",
          "options": [
            "Remove the حَرْفُ الْمُضَارِعِ, add a هَمْزَةُ الْوَصْلِ, make the verb مَجْزُوْمٌ",
            "Add لَا, remove the نُوْنٌ, make the verb مَنْصُوْبٌ",
            "Remove the pronoun, add a تَنْوِيْنٌ, make the verb مَرْفُوْعٌ",
            "Remove the لَامُ الْكَلِمَةِ, add a هَمْزَةٌ, make the verb مَبْنِيٌّ"
          ],
          "correct": 0,
          "explanation": "تَفْعَلُ ⟵ تَفْعَلْ (مَجْزُوْمٌ) ⟵ فْعَلْ (حَرْفُ الْمُضَارِعِ removed) ⟵ اِفْعَلْ (هَمْزَةُ الْوَصْلِ added)."
        },
        {
          "q": "When does the هَمْزَةُ الْوَصْلِ of الْأَمْرُ carry a ضَمَّةٌ?",
          "options": [
            "When the عَيْنُ الْكَلِمَةِ of the مُضَارِعٌ has a ضَمَّةٌ",
            "Always",
            "When the verb is feminine",
            "When the verb is plural"
          ],
          "correct": 0,
          "explanation": "The default is a كَسْرَةٌ (اِفْتَحْ، اِصْبِرْ); only when the عَيْنُ الْكَلِمَةِ of the مُضَارِعٌ has a ضَمَّةٌ does it take a ضَمَّةٌ, e.g. يَنْصُرُ ⟵ أُنْصُرْ."
        },
        {
          "q": "What happens to the هَمْزَةُ الْوَصْلِ in وَافْعَلْ / فَافْعَلْ?",
          "options": [
            "It is not pronounced, because it is not at the very beginning of the sentence",
            "It carries a فَتْحَةٌ",
            "It is written as a هَمْزَةُ الْقَطْعِ",
            "It becomes a مَدَّةٌ"
          ],
          "correct": 0,
          "explanation": "A هَمْزَةُ الْوَصْلِ only carries a فَتْحَةٌ، ضَمَّةٌ or كَسْرَةٌ at the very beginning of a sentence; otherwise it is not pronounced."
        },
        {
          "q": "How is النَّهْيُ formed?",
          "options": [
            "By making the الْمُخَاطَبُ of الْمُضَارِعُ مَجْزُوْمٌ and placing لَا النَّهْيِ before it",
            "By making the الْمُضَارِعُ مَنْصُوْبٌ and placing لَنْ before it",
            "By adding a هَمْزَةُ الْوَصْلِ and لَا",
            "By placing مَا before الْمَاضِيْ"
          ],
          "correct": 0,
          "explanation": "تَفْعَلُ ⟵ تَفْعَلْ ⟵ لَا تَفْعَلْ. Unlike الْأَمْرُ, the حَرْفُ الْمُضَارِعِ is kept and no هَمْزَةُ الْوَصْلِ is added."
        },
        {
          "q": "What is the difference between لَا تَجْلِسُوْنَ and لَا تَجْلِسُوْا?",
          "options": [
            "لَا تَجْلِسُوْنَ is a نَفْيٌ ('You do not sit') and is مَرْفُوْعٌ; لَا تَجْلِسُوْا is a نَهْيٌ ('Do not sit') and is مَجْزُوْمٌ",
            "لَا تَجْلِسُوْنَ is a نَهْيٌ and لَا تَجْلِسُوْا is a نَفْيٌ",
            "They mean exactly the same thing",
            "لَا تَجْلِسُوْنَ is مَنْصُوْبٌ and لَا تَجْلِسُوْا is مَرْفُوْعٌ"
          ],
          "correct": 0,
          "explanation": "لَا can be a حَرْفُ نَفْيٍ or a حَرْفُ نَهْيٍ; the نُوْنُ الْإِعْرَابِ tells them apart — retained for the مَنْفِيٌّ (مَرْفُوْعٌ) verb, dropped for the نَهْيٌ (مَجْزُوْمٌ)."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْأَمْرُ form of تَنْصُرُوْنَ?",
          "options": [
            "أُنْصُرُوْا",
            "اِنْصُرُوْا",
            "أُنْصُرُوْنَ",
            "لَا تَنْصُرُوْا"
          ],
          "correct": 0,
          "explanation": "Make it مَجْزُوْمٌ (تَنْصُرُوْا), drop the تـ (نْصُرُوْا), add the هَمْزَةُ الْوَصْلِ. Since the عَيْنُ الْكَلِمَةِ of يَنْصُرُ has a ضَمَّةٌ, the hamzah takes a ضَمَّةٌ: أُنْصُرُوْا."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which صِيْغَةٌ is اِفْعَلِيْ?",
          "options": [
            "الْمُخَاطَبَةُ — You (f/s)",
            "الْمُخَاطَبَاتُ — You (f/p)",
            "الْمُخَاطَبَتَانِ — You (f/d)",
            "الْمُخَاطَبُوْنَ — You (m/p)"
          ],
          "correct": 0,
          "explanation": "تَفْعَلِيْنَ ⟵ تَفْعَلِيْ ⟵ فْعَلِيْ ⟵ اِفْعَلِيْ — the second person feminine singular."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which صِيْغَةٌ of الْأَمْرُ is completely unchanged from its مُضَارِعٌ base apart from the prefix change?",
          "options": [
            "اِفْعَلْنَ — because the نُوْنُ النِّسْوَةِ is a pronoun and never drops",
            "اِفْعَلْ",
            "اِفْعَلَا",
            "اِفْعَلُوْا"
          ],
          "correct": 0,
          "explanation": "تَفْعَلْنَ is مَبْنِيٌّ (its final نَ is the نُوْنُ النِّسْوَةِ), so making it مَجْزُوْمٌ changes nothing: تَفْعَلْنَ ⟵ فْعَلْنَ ⟵ اِفْعَلْنَ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Why is there no هَمْزَةُ الْوَصْلِ in النَّهْيُ?",
          "options": [
            "Because the حَرْفُ الْمُضَارِعِ is not removed in النَّهْيُ",
            "Because النَّهْيُ is made from الْمَاضِيْ",
            "Because لَا already begins with a hamzah",
            "Because النَّهْيُ is مَرْفُوْعٌ"
          ],
          "correct": 0,
          "explanation": "النَّهْيُ keeps the تـ of الْمُضَارِعُ; the هَمْزَةُ الْوَصْلِ is only needed in الْأَمْرُ, where removing the حَرْفُ الْمُضَارِعِ would leave a سَاكِنٌ first letter."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "The الْأَمْرُ of يَكْرُمُ is…",
          "options": [
            "أُكْرُمْ",
            "اِكْرِمْ",
            "اِكْرَمْ",
            "أُكْرِمْ"
          ],
          "correct": 0,
          "explanation": "The عَيْنُ الْكَلِمَةِ of يَكْرُمُ carries a ضَمَّةٌ, so the هَمْزَةُ الْوَصْلِ takes a ضَمَّةٌ: أُكْرُمْ."
        },
        {
          "title": "Book Exercise 2 (p. 61)",
          "kind": "mcq",
          "prompt": "Translate أُنْصُرْنَ and give the صِيْغَةٌ.",
          "options": [
            "Help! (f/p) — الْمُخَاطَبَاتُ",
            "Help! (m/p) — الْمُخَاطَبُوْنَ",
            "They (f/p) helped — الْغَائِبَاتُ",
            "Do not help (f/p) — الْمُخَاطَبَاتُ"
          ],
          "correct": 0,
          "explanation": "The final نَ is the نُوْنُ النِّسْوَةِ of الْمُخَاطَبَاتُ, and the ضَمَّةٌ on the hamzah follows the ضَمَّةٌ of يَنْصُرُ."
        },
        {
          "title": "Book Exercise 2 (p. 61)",
          "kind": "mcq",
          "prompt": "Translate ﴿وَاشْهَدُوْا﴾ and give the صِيْغَةٌ.",
          "options": [
            "And bear witness! (m/p) — الْمُخَاطَبُوْنَ",
            "And they (m/p) bore witness — الْغَائِبُوْنَ",
            "And bear witness! (f/p) — الْمُخَاطَبَاتُ",
            "And do not bear witness (m/p) — الْمُخَاطَبُوْنَ"
          ],
          "correct": 0,
          "explanation": "الْأَمْرُ of الْمُخَاطَبُوْنَ; the هَمْزَةُ الْوَصْلِ is not pronounced after the وَ."
        },
        {
          "title": "Book Exercise 2 (p. 61)",
          "kind": "mcq",
          "prompt": "Translate ﴿فَادْخُلِيْ﴾ and give the صِيْغَةٌ.",
          "options": [
            "So enter! (f/s) — الْمُخَاطَبَةُ",
            "So enter! (m/s) — الْمُخَاطَبُ",
            "So they (f/p) entered — الْغَائِبَاتُ",
            "So enter! (f/d) — الْمُخَاطَبَتَانِ"
          ],
          "correct": 0,
          "explanation": "The final يْ (from تَدْخُلِيْنَ) marks الْمُخَاطَبَةُ. The هَمْزَةُ الْوَصْلِ after فَـ is not pronounced."
        },
        {
          "title": "Book Exercise 2 (p. 61)",
          "kind": "mcq",
          "prompt": "Translate ﴿اهْبِطَا﴾ and give the صِيْغَةٌ.",
          "options": [
            "Descend! (d) — الْمُخَاطَبَانِ / الْمُخَاطَبَتَانِ",
            "Descend! (m/p) — الْمُخَاطَبُوْنَ",
            "They two descended — الْغَائِبَانِ",
            "Descend! (m/s) — الْمُخَاطَبُ"
          ],
          "correct": 0,
          "explanation": "From تَهْبِطَانِ: drop the نُوْنُ الْإِعْرَابِ and the تـ, add the هَمْزَةُ الْوَصْلِ — the dual form is shared by both genders."
        },
        {
          "title": "Book Exercise 3 (p. 61)",
          "kind": "mcq",
          "prompt": "'Listen (f/p)' in Arabic is…",
          "options": [
            "اِسْمَعْنَ",
            "اِسْمَعُوْا",
            "اِسْمَعِيْ",
            "اِسْمَعَا"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ ends in the نُوْنُ النِّسْوَةِ: اِسْمَعْنَ. (سَمِعَ يَسْمَعُ — to hear, listen.)"
        },
        {
          "title": "Book Exercise 3 (p. 61)",
          "kind": "mcq",
          "prompt": "'Bow (m/p)' in Arabic is…",
          "options": [
            "اِرْكَعُوْا",
            "اِرْكَعْنَ",
            "أُرْكُعُوْا",
            "اِرْكَعَا"
          ],
          "correct": 0,
          "explanation": "رَكَعَ يَرْكَعُ — the عَيْنُ الْكَلِمَةِ has a فَتْحَةٌ, so the hamzah takes a كَسْرَةٌ; الْمُخَاطَبُوْنَ takes the و: اِرْكَعُوْا."
        },
        {
          "title": "Book Exercise 3 (p. 61)",
          "kind": "mcq",
          "prompt": "'Read (m/d)' in Arabic is…",
          "options": [
            "اِقْرَآ",
            "اِقْرَؤُوْا",
            "أُقْرُآ",
            "اِقْرَئِيْ"
          ],
          "correct": 0,
          "explanation": "قَرَأَ يَقْرَأُ — الْأَمْرُ of the dual is اِقْرَآ (اِقْرَأَا). The عَيْنُ الْكَلِمَةِ has a فَتْحَةٌ, so the hamzah takes a كَسْرَةٌ."
        },
        {
          "title": "Book Exercise 3 (p. 61)",
          "kind": "mcq",
          "prompt": "'Worship (m/p)' in Arabic is…",
          "options": [
            "أُعْبُدُوْا",
            "اِعْبَدُوْا",
            "أُعْبُدْنَ",
            "اِعْبِدُوْا"
          ],
          "correct": 0,
          "explanation": "عَبَدَ يَعْبُدُ — the عَيْنُ الْكَلِمَةِ carries a ضَمَّةٌ, so the هَمْزَةُ الْوَصْلِ takes a ضَمَّةٌ: أُعْبُدُوْا."
        },
        {
          "title": "Book Exercise 5 (p. 63)",
          "kind": "mcq",
          "prompt": "Translate لَا تَكْذِبِيْ and give the صِيْغَةٌ.",
          "options": [
            "Do not lie (f/s) — الْمُخَاطَبَةُ",
            "Do not lie (f/p) — الْمُخَاطَبَاتُ",
            "You (f/s) do not lie — الْمُخَاطَبَةُ",
            "Do not lie (m/s) — الْمُخَاطَبُ"
          ],
          "correct": 0,
          "explanation": "تَكْذِبِيْنَ ⟵ تَكْذِبِيْ (مَجْزُوْمٌ, نُوْنُ الْإِعْرَابِ dropped) with لَا النَّهْيِ — a prohibition to a single female."
        },
        {
          "title": "Book Exercise 5 (p. 63)",
          "kind": "mcq",
          "prompt": "Translate ﴿وَلَا تَحْزَنُوْا﴾ and give the صِيْغَةٌ.",
          "options": [
            "And do not grieve (m/p) — الْمُخَاطَبُوْنَ",
            "And you (m/p) do not grieve — الْمُخَاطَبُوْنَ",
            "And do not grieve (f/p) — الْمُخَاطَبَاتُ",
            "And they (m/p) did not grieve — الْغَائِبُوْنَ"
          ],
          "correct": 0,
          "explanation": "The نُوْنُ الْإِعْرَابِ of تَحْزَنُوْنَ has dropped, showing the verb is مَجْزُوْمٌ — a نَهْيٌ, not a نَفْيٌ."
        },
        {
          "title": "Book Exercise 5 (p. 63)",
          "kind": "mcq",
          "prompt": "Translate لَا تَظْلِمْنَ and give the صِيْغَةٌ.",
          "options": [
            "Do not oppress (f/p) — الْمُخَاطَبَاتُ",
            "Do not oppress (m/p) — الْمُخَاطَبُوْنَ",
            "They (f/p) do not oppress — الْغَائِبَاتُ",
            "Do not oppress (f/d) — الْمُخَاطَبَتَانِ"
          ],
          "correct": 0,
          "explanation": "The نَ is the نُوْنُ النِّسْوَةِ of الْمُخَاطَبَاتُ; the صِيْغَةٌ is مَبْنِيٌّ so it is unchanged after لَا."
        },
        {
          "title": "Book Exercise 6 (p. 63)",
          "kind": "mcq",
          "prompt": "'Don't kill (f/p)' in Arabic is…",
          "options": [
            "لَا تَقْتُلْنَ",
            "لَا تَقْتُلُوْا",
            "لَا تَقْتُلِيْ",
            "لَا تَقْتُلَا"
          ],
          "correct": 0,
          "explanation": "قَتَلَ يَقْتُلُ; الْمُخَاطَبَاتُ is تَقْتُلْنَ, unchanged in the مَجْزُوْمٌ state: لَا تَقْتُلْنَ."
        },
        {
          "title": "Book Exercise 6 (p. 63)",
          "kind": "mcq",
          "prompt": "'Don't carry (f/d)' in Arabic is…",
          "options": [
            "لَا تَحْمِلَا",
            "لَا تَحْمِلَانِ",
            "لَا تَحْمِلْنَ",
            "لَا تَحْمِلِيْ"
          ],
          "correct": 0,
          "explanation": "حَمَلَ يَحْمِلُ; تَحْمِلَانِ loses its نُوْنُ الْإِعْرَابِ in the مَجْزُوْمٌ state: لَا تَحْمِلَا."
        },
        {
          "title": "Book Exercise 6 (p. 63)",
          "kind": "mcq",
          "prompt": "'Don't worship (f/s)' in Arabic is…",
          "options": [
            "لَا تَعْبُدِيْ",
            "لَا تَعْبُدْنَ",
            "لَا تَعْبُدُوْا",
            "لَا تَعْبُدْ"
          ],
          "correct": 0,
          "explanation": "تَعْبُدِيْنَ ⟵ تَعْبُدِيْ with لَا النَّهْيِ — الْمُخَاطَبَةُ."
        },
        {
          "title": "Book Exercise 7 (p. 64)",
          "kind": "mcq",
          "prompt": "Translate تُسْمَعُوْنَ, differentiating the type of verb.",
          "options": [
            "You (m/p) are heard — مُضَارِعٌ مَجْهُوْلٌ",
            "You (m/p) hear — مُضَارِعٌ مَعْلُوْمٌ",
            "You (m/p) heard — مَاضٍ مَعْلُوْمٌ",
            "You (m/p) were heard — مَاضٍ مَجْهُوْلٌ"
          ],
          "correct": 0,
          "explanation": "The ضَمَّةٌ on the حَرْفُ الْمُضَارِعِ marks the passive: تُسْمَعُوْنَ 'you (m/p) are heard'. Compare تَسْمَعُوْنَ 'you (m/p) hear'."
        },
        {
          "title": "Book Exercise 7 (p. 64)",
          "kind": "mcq",
          "prompt": "Translate لَا تَسْمَعُوْنَ vs لَا تَسْمَعُوْا.",
          "options": [
            "'You (m/p) do not hear' (نَفْيٌ) vs 'Do not hear!' (نَهْيٌ)",
            "'Do not hear!' vs 'You (m/p) do not hear'",
            "Both mean 'Do not hear!'",
            "'You (m/p) will not hear' vs 'You (m/p) did not hear'"
          ],
          "correct": 0,
          "explanation": "The retained نُوْنُ الْإِعْرَابِ shows a مَرْفُوْعٌ verb (a statement); the dropped نُوْنٌ shows a مَجْزُوْمٌ verb (a prohibition)."
        },
        {
          "title": "Book Exercise 7 (p. 64)",
          "kind": "mcq",
          "prompt": "Translate لَنْ تُرْحَمَ.",
          "options": [
            "You (m/s) will never be shown mercy",
            "You (m/s) will never show mercy",
            "Do not show mercy (m/s)",
            "You (m/s) were not shown mercy"
          ],
          "correct": 0,
          "explanation": "تُرْحَمُ is مُضَارِعٌ مَجْهُوْلٌ; لَنْ makes it مَنْصُوْبٌ (فَتْحَةٌ on the لَامُ الْكَلِمَةِ) with an emphatic future negative meaning."
        },
        {
          "title": "Book Exercise 7 (p. 64)",
          "kind": "mcq",
          "prompt": "Translate لُعِنَتْ.",
          "options": [
            "She was cursed — مَاضٍ مَجْهُوْلٌ",
            "She cursed — مَاضٍ مَعْلُوْمٌ",
            "She is cursed — مُضَارِعٌ مَجْهُوْلٌ",
            "They (f/p) were cursed — مَاضٍ مَجْهُوْلٌ"
          ],
          "correct": 0,
          "explanation": "The ضَمَّةٌ on the فَاءُ الْكَلِمَةِ and كَسْرَةٌ on the عَيْنُ الْكَلِمَةِ mark the مَاضٍ مَجْهُوْلٌ; the ت is the feminine sign of الْغَائِبَةُ."
        },
        {
          "title": "Book Exercise 7 (p. 64)",
          "kind": "mcq",
          "prompt": "Translate اِسْمَعُوْا.",
          "options": [
            "Listen! (m/p) — الْأَمْرُ",
            "They (m/p) listened — الْمَاضِيْ",
            "You (m/p) listen — الْمُضَارِعُ",
            "Do not listen (m/p) — النَّهْيُ"
          ],
          "correct": 0,
          "explanation": "The هَمْزَةُ الْوَصْلِ with a كَسْرَةٌ plus the dropped تـ identify it as الْأَمْرُ of الْمُخَاطَبُوْنَ."
        }
      ]
    },
    {
      "id": "l11",
      "title": "اِسْمُ الْفَاعِلِ وَاِسْمُ الْمَفْعُوْلِ",
      "subtitle": "The Active and Passive Participle — how each is built and used",
      "concepts": [
        {
          "heading": "مُشْتَقَّاتٌ — Derived Nouns",
          "lines": [
            {
              "html": "Some <bdi>أَسْمَاءٌ</bdi> are derived from the <bdi>مَصْدَرٌ</bdi>. These derived nouns are called <bdi>مُشْتَقٌّ</bdi>. In this unit, we will cover the following <bdi>مُشْتَقَّاتٌ</bdi>: (1) <bdi>اِسْمُ الْفَاعِلِ</bdi>. (2) <bdi>اِسْمُ الْمَفْعُوْلِ</bdi>.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is a مُشْتَقٌّ؟",
            "kind": "mcq",
            "options": ["A noun derived from the مَصْدَرٌ", "A verb in the passive voice", "A particle that negates a verb", "A pronoun hidden in the verb"],
            "correct": 0
          }
        },
        {
          "heading": "Constructing the اِسْمُ الْفَاعِلِ",
          "lines": [
            {
              "html": "The <bdi>اِسْمُ الْفَاعِلِ</bdi>, the active participle, is formed by placing the letters of <bdi>الْمَاضِيْ</bdi> in the pattern of <bdi>فَاعِلٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>رَزَقَ يَرْزُقُ رِزْقًا ⟵ رَازِقٌ</bdi> — provider, one who provides",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The dual, plural and feminine forms of اِسْمُ الْفَاعِلِ",
                "headers": [
                  "صِيْغَةٌ",
                  "اِسْمُ الْفَاعِلِ",
                  "Translation"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "فَاعِلٌ",
                    "Doing, doer, the one who does (m/s)"
                  ],
                  [
                    "الْمُثَنَّى",
                    "فَاعِلَانِ",
                    "Doing, doers, those who do (m/d)"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "فَاعِلُوْنَ",
                    "Doing, doers, those who do (m/p)"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "فَاعِلَةٌ",
                    "Doing, doer, the one who does (f/s)"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "فَاعِلَتَانِ",
                    "Doing, doers, those who do (f/d)"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "فَاعِلَاتٌ",
                    "Doing, doers, those who do (f/p)"
                  ]
                ]
              }
            },
            {
              "html": "The <bdi>اِسْمُ الْفَاعِلِ</bdi> of words from <bdi>بَاب كَرُمَ يَكْرُمُ</bdi> do not come on this pattern, e.g. <bdi>كَرُمَ يَكْرُمُ كَرَامَةً ⟵ كَرِيْمٌ</bdi> (noble).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "On which pattern is the اِسْمُ الْفَاعِلِ formed؟",
            "kind": "mcq",
            "options": ["مَفْعُوْلٌ", "فَاعِلٌ", "فَعِيْلٌ", "مِفْعَالٌ"],
            "correct": 1
          }
        },
        {
          "heading": "Usage of the اِسْمُ الْفَاعِلِ",
          "lines": [
            {
              "html": "The active participle, <bdi>اِسْمُ الْفَاعِلِ</bdi>, can be used in one of three ways: 1. In a verbal meaning: present or near future with active meaning.",
              "list": false
            },
            {
              "html": "<bdi>الرَّجُلُ جَالِسٌ</bdi> — The man is sitting. / The man is going to sit.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. As a noun which shows the person/thing which carries out the action.",
              "list": false
            },
            {
              "html": "<bdi>الْخَالِقُ</bdi> — the Creator",
              "list": true,
              "bullet": true
            },
            {
              "html": "Sometimes, there may not be a single English equivalent to the <bdi>اِسْمُ الْفَاعِلِ</bdi>. Instead, the phrase \"the one who …\" or \"those who …\" must be used.",
              "list": false
            },
            {
              "html": "<bdi>الْجَالِسُ</bdi> — the one who sits",
              "list": true,
              "bullet": true
            },
            {
              "html": "3. As an adjective.",
              "list": false
            },
            {
              "html": "<bdi>صَادِقٌ</bdi> — truthful",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What are the three usages of the اِسْمُ الْفَاعِلِ؟",
            "kind": "mcq",
            "options": ["In a verbal meaning (present/near future, active), as a noun for the doer, and as an adjective", "In a past meaning, as a particle, and as a pronoun", "As a command, as a prohibition, and as a negation", "As a مَصْدَرٌ, as a مُضَارِعٌ, and as an أَمْرٌ"],
            "correct": 0
          }
        },
        {
          "heading": "Constructing the اِسْمُ الْمَفْعُوْلِ",
          "lines": [
            {
              "html": "The <bdi>اِسْمُ الْمَفْعُوْلِ</bdi>, the passive participle, is formed by placing the letters of <bdi>الْمَاضِيْ</bdi> in the pattern of <bdi>مَفْعُوْلٌ</bdi>.",
              "list": false
            },
            {
              "html": "<bdi>رَزَقَ يَرْزُقُ رِزْقًا ⟵ مَرْزُوْقٌ</bdi> — provided, one who is provided",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The dual, plural and feminine forms of اِسْمُ الْمَفْعُوْلِ",
                "headers": [
                  "صِيْغَةٌ",
                  "اِسْمُ الْمَفْعُوْلِ",
                  "Translation"
                ],
                "rows": [
                  [
                    "الْمُفْرَدُ",
                    "مَفْعُوْلٌ",
                    "the one which is done (m/s)"
                  ],
                  [
                    "الْمُثَنَّى",
                    "مَفْعُوْلَانِ",
                    "those which are done (m/d)"
                  ],
                  [
                    "جَمْعُ الْمُذَكَّرِ",
                    "مَفْعُوْلُوْنَ",
                    "those which are done (m/p)"
                  ],
                  [
                    "الْمُفْرَدَةُ",
                    "مَفْعُوْلَةٌ",
                    "the one which is done (f/s)"
                  ],
                  [
                    "الْمُثَنَّاةُ",
                    "مَفْعُوْلَتَانِ",
                    "those which are done (f/d)"
                  ],
                  [
                    "جَمْعُ الْمُؤَنَّثِ",
                    "مَفْعُوْلَاتٌ",
                    "those which are done (f/p)"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "On which pattern is the اِسْمُ الْمَفْعُوْلِ formed؟",
            "kind": "mcq",
            "options": ["فَاعِلٌ", "فَعُوْلٌ", "مَفْعُوْلٌ", "مُفْعِلٌ"],
            "correct": 2
          }
        },
        {
          "heading": "Usage of the اِسْمُ الْمَفْعُوْلِ",
          "lines": [
            {
              "html": "The passive participle, <bdi>اِسْمُ الْمَفْعُوْلِ</bdi>, can be used in one of three ways: 1. In a verbal meaning: present or near future with passive meaning.",
              "list": false
            },
            {
              "html": "<bdi>الْبَابُ مَفْتُوْحٌ</bdi> — The door is being opened. / The door is going to be opened.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. As a noun which shows the person/thing upon which the action is carried out.",
              "list": false
            },
            {
              "html": "<bdi>الْمَخْلُوْقُ</bdi> — the creation",
              "list": true,
              "bullet": true
            },
            {
              "html": "3. As an adjective.",
              "list": false
            },
            {
              "html": "<bdi>مَلْعُوْنٌ</bdi> — cursed",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "الْبَابُ مَفْتُوْحٌ illustrates which usage of the اِسْمُ الْمَفْعُوْلِ؟",
            "kind": "mcq",
            "options": ["A verbal meaning: present or near future with passive meaning", "A noun showing the thing upon which the action is carried out", "An adjective", "A مَصْدَرٌ"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 8: اِسْمُ الْفَاعِلِ وَاِسْمُ الْمَفْعُوْلِ",
        "rows": [
          {
            "label": "A noun derived from the مَصْدَرٌ",
            "arabic": "مُشْتَقٌّ",
            "meaning": "A noun derived from the مَصْدَرٌ",
            "unlockAt": 0
          },
          {
            "label": "Active participle — pattern فَاعِلٌ (e.g. رَازِقٌ)",
            "arabic": "اِسْمُ الْفَاعِلِ",
            "meaning": "Active participle — pattern فَاعِلٌ (e.g. رَازِقٌ)",
            "unlockAt": 1
          },
          {
            "label": "Passive participle — pattern مَفْعُوْلٌ (e.g. مَرْزُوْقٌ)",
            "arabic": "اِسْمُ الْمَفْعُوْلِ",
            "meaning": "Passive participle — pattern مَفْعُوْلٌ (e.g. مَرْزُوْقٌ)",
            "unlockAt": 2
          },
          {
            "label": "The six forms of اِسْمُ الْفَاعِلِ",
            "arabic": "فَاعِلٌ، فَاعِلَانِ، فَاعِلُوْنَ، فَاعِلَةٌ، فَاعِلَتَانِ، فَاعِلَاتٌ",
            "meaning": "The six forms of اِسْمُ الْفَاعِلِ",
            "unlockAt": 3
          },
          {
            "label": "The six forms of اِسْمُ الْمَفْعُوْلِ",
            "arabic": "مَفْعُوْلٌ، مَفْعُوْلَانِ، مَفْعُوْلُوْنَ، مَفْعُوْلَةٌ، مَفْعُوْلَتَانِ، مَفْعُوْلَاتٌ",
            "meaning": "The six forms of اِسْمُ الْمَفْعُوْلِ",
            "unlockAt": 4
          },
          {
            "label": "Verbs of this بَابٌ do not form اِسْمُ الْفَاعِلِ on the فَاعِلٌ pattern",
            "arabic": "كَرُمَ يَكْرُمُ ⟵ كَرِيْمٌ",
            "meaning": "Verbs of this بَابٌ do not form اِسْمُ الْفَاعِلِ on the فَاعِلٌ pattern",
            "unlockAt": 5
          }
        ]
      },
      "quiz": [
        {
          "q": "What is a مُشْتَقٌّ?",
          "options": [
            "A noun derived from the مَصْدَرٌ",
            "A verb in the passive voice",
            "A particle that negates a verb",
            "A pronoun hidden in the verb"
          ],
          "correct": 0,
          "explanation": "Some أَسْمَاءٌ are derived from the مَصْدَرٌ; these derived nouns are called مُشْتَقٌّ. اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ are two of them."
        },
        {
          "q": "On which pattern is the اِسْمُ الْفَاعِلِ formed?",
          "options": [
            "مَفْعُوْلٌ",
            "فَاعِلٌ",
            "فَعِيْلٌ",
            "مِفْعَالٌ"
          ],
          "correct": 1,
          "explanation": "The letters of الْمَاضِيْ are placed in the pattern فَاعِلٌ: رَزَقَ ⟵ رَازِقٌ ('provider, one who provides')."
        },
        {
          "q": "On which pattern is the اِسْمُ الْمَفْعُوْلِ formed?",
          "options": [
            "فَاعِلٌ",
            "فَعُوْلٌ",
            "مَفْعُوْلٌ",
            "مُفْعِلٌ"
          ],
          "correct": 2,
          "explanation": "The letters of الْمَاضِيْ are placed in the pattern مَفْعُوْلٌ: رَزَقَ ⟵ مَرْزُوْقٌ ('provided, one who is provided')."
        },
        {
          "q": "What are the three usages of the اِسْمُ الْفَاعِلِ?",
          "options": [
            "In a verbal meaning (present/near future, active), as a noun for the doer, and as an adjective",
            "In a past meaning, as a particle, and as a pronoun",
            "As a command, as a prohibition, and as a negation",
            "As a مَصْدَرٌ, as a مُضَارِعٌ, and as an أَمْرٌ"
          ],
          "correct": 0,
          "explanation": "الرَّجُلُ جَالِسٌ (verbal), الْخَالِقُ (noun for the doer), صَادِقٌ (adjective)."
        },
        {
          "q": "Which verbs do NOT form their اِسْمُ الْفَاعِلِ on the فَاعِلٌ pattern?",
          "options": [
            "Verbs of بَاب كَرُمَ يَكْرُمُ, e.g. كَرُمَ ⟵ كَرِيْمٌ",
            "Verbs of بَاب فَتَحَ يَفْتَحُ",
            "Verbs of بَاب نَصَرَ يَنْصُرُ",
            "All passive verbs"
          ],
          "correct": 0,
          "explanation": "The book notes that the اِسْمُ الْفَاعِلِ of words from بَاب كَرُمَ يَكْرُمُ do not come on this pattern: كَرُمَ يَكْرُمُ كَرَامَةً ⟵ كَرِيْمٌ ('noble')."
        },
        {
          "q": "الْبَابُ مَفْتُوْحٌ illustrates which usage of the اِسْمُ الْمَفْعُوْلِ?",
          "options": [
            "A verbal meaning: present or near future with passive meaning",
            "A noun showing the thing upon which the action is carried out",
            "An adjective",
            "A مَصْدَرٌ"
          ],
          "correct": 0,
          "explanation": "It translates as 'The door is being opened' or 'The door is going to be opened' — a verbal, passive meaning. الْمَخْلُوْقُ is the noun usage and مَلْعُوْنٌ the adjectival usage."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the اِسْمُ الْفَاعِلِ of جَلَسَ, and how may it be translated?",
          "options": [
            "جَالِسٌ — 'sitting' / 'the one who sits'",
            "مَجْلُوْسٌ — 'sat upon'",
            "جَلِيْسٌ — 'a sitter'",
            "جُلُوْسٌ — 'sitting' (مَصْدَرٌ)"
          ],
          "correct": 0,
          "explanation": "On the pattern فَاعِلٌ: جَالِسٌ. Where no single English word exists, the phrase 'the one who …' is used: الْجَالِسُ 'the one who sits'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which form of the اِسْمُ الْفَاعِلِ is فَاعِلَتَانِ?",
          "options": [
            "الْمُثَنَّاةُ — the feminine dual",
            "الْمُثَنَّى — the masculine dual",
            "جَمْعُ الْمُؤَنَّثِ — the feminine plural",
            "الْمُفْرَدَةُ — the feminine singular"
          ],
          "correct": 0,
          "explanation": "فَاعِلَانِ is the masculine dual; فَاعِلَتَانِ (with the ت) is the feminine dual."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What does مَفْعُوْلَاتٌ mean?",
          "options": [
            "Those which are done (f/p)",
            "Those which are done (m/p)",
            "Those who do (f/p)",
            "The one which is done (f/s)"
          ],
          "correct": 0,
          "explanation": "The ending ـَاتٌ is جَمْعُ الْمُؤَنَّثِ; مَفْعُوْلٌ is passive, so it means 'those which are done (f/p)'."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "الْخَالِقُ and الْمَخْلُوْقُ mean, respectively…",
          "options": [
            "the Creator and the creation",
            "the creation and the Creator",
            "creating and created (both adjectives)",
            "the one who is created and the one who creates"
          ],
          "correct": 0,
          "explanation": "خَلَقَ ⟵ خَالِقٌ (active participle: the one who creates) and مَخْلُوْقٌ (passive participle: that which is created)."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which participle would you use for 'cursed', and what usage is it?",
          "options": [
            "مَلْعُوْنٌ — اِسْمُ الْمَفْعُوْلِ used as an adjective",
            "لَاعِنٌ — اِسْمُ الْفَاعِلِ used as an adjective",
            "مَلْعُوْنٌ — اِسْمُ الْفَاعِلِ used as a noun",
            "لَعْنٌ — a مَصْدَرٌ"
          ],
          "correct": 0,
          "explanation": "لَعَنَ ⟵ مَلْعُوْنٌ on the مَفْعُوْلٌ pattern; the book lists it as the adjectival usage of the اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Book Exercise 2 (p. 67)",
          "kind": "mcq",
          "prompt": "Translate قَاتِلَانِ and give the صِيْغَةٌ.",
          "options": [
            "Two killers, those who kill (m/d) — الْمُثَنَّى",
            "Two who are killed (m/d) — الْمُثَنَّى",
            "Killers (m/p) — جَمْعُ الْمُذَكَّرِ",
            "Two killers (f/d) — الْمُثَنَّاةُ"
          ],
          "correct": 0,
          "explanation": "قَتَلَ on the فَاعِلٌ pattern gives قَاتِلٌ; the dual masculine is قَاتِلَانِ."
        },
        {
          "title": "Book Exercise 2 (p. 67)",
          "kind": "mcq",
          "prompt": "Translate ذَاكِرَاتٌ and give the صِيْغَةٌ.",
          "options": [
            "Those who remember (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "Those who are remembered (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "Those who remember (m/p) — جَمْعُ الْمُذَكَّرِ",
            "The one who remembers (f/s) — الْمُفْرَدَةُ"
          ],
          "correct": 0,
          "explanation": "ذَكَرَ ⟵ ذَاكِرٌ (active); the feminine plural is ذَاكِرَاتٌ."
        },
        {
          "title": "Book Exercise 2 (p. 67)",
          "kind": "mcq",
          "prompt": "Translate الْقَادِرَتَانِ and give the صِيْغَةٌ.",
          "options": [
            "The two who have power (f/d) — الْمُثَنَّاةُ",
            "The two who have power (m/d) — الْمُثَنَّى",
            "Those who have power (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "The two over whom there is power (f/d) — الْمُثَنَّاةُ"
          ],
          "correct": 0,
          "explanation": "قَدَرَ ⟵ قَادِرٌ; فَاعِلَتَانِ is the feminine dual — 'the two (f) who have power'."
        },
        {
          "title": "Book Exercise 2 (p. 67)",
          "kind": "mcq",
          "prompt": "Translate الْكَاذِبُوْنَ and give the صِيْغَةٌ.",
          "options": [
            "The liars, those who lie (m/p) — جَمْعُ الْمُذَكَّرِ",
            "Those who are lied to (m/p) — جَمْعُ الْمُذَكَّرِ",
            "The liars (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "The liar (m/s) — الْمُفْرَدُ"
          ],
          "correct": 0,
          "explanation": "كَذَبَ ⟵ كَاذِبٌ; فَاعِلُوْنَ is the masculine plural."
        },
        {
          "title": "Book Exercise 3 (p. 67)",
          "kind": "mcq",
          "prompt": "'Readers (m/p)' as an اِسْمُ الْفَاعِلِ is…",
          "options": [
            "قَارِئُوْنَ",
            "مَقْرُوْءُوْنَ",
            "قَارِئَاتٌ",
            "قَارِئَانِ"
          ],
          "correct": 0,
          "explanation": "قَرَأَ on the فَاعِلٌ pattern gives قَارِئٌ; جَمْعُ الْمُذَكَّرِ is قَارِئُوْنَ."
        },
        {
          "title": "Book Exercise 3 (p. 67)",
          "kind": "mcq",
          "prompt": "'Those who curse (f/d)' as an اِسْمُ الْفَاعِلِ is…",
          "options": [
            "لَاعِنَتَانِ",
            "لَاعِنَانِ",
            "لَاعِنَاتٌ",
            "مَلْعُوْنَتَانِ"
          ],
          "correct": 0,
          "explanation": "لَعَنَ ⟵ لَاعِنٌ; the feminine dual is فَاعِلَتَانِ = لَاعِنَتَانِ."
        },
        {
          "title": "Book Exercise 3 (p. 67)",
          "kind": "mcq",
          "prompt": "'Those who elevate (m/p)' as an اِسْمُ الْفَاعِلِ is…",
          "options": [
            "رَافِعُوْنَ",
            "مَرْفُوْعُوْنَ",
            "رَافِعَاتٌ",
            "رَافِعَانِ"
          ],
          "correct": 0,
          "explanation": "رَفَعَ ⟵ رَافِعٌ; جَمْعُ الْمُذَكَّرِ is رَافِعُوْنَ. (مَرْفُوْعُوْنَ would be 'those who are elevated'.)"
        },
        {
          "title": "Book Exercise 3 (p. 67)",
          "kind": "mcq",
          "prompt": "'The one who resurrects (m/s)' as an اِسْمُ الْفَاعِلِ is…",
          "options": [
            "بَاعِثٌ",
            "مَبْعُوْثٌ",
            "بَاعِثَةٌ",
            "بَعْثٌ"
          ],
          "correct": 0,
          "explanation": "بَعَثَ ⟵ بَاعِثٌ (active). مَبْعُوْثٌ is the passive participle, 'one who is resurrected'."
        },
        {
          "title": "Book Exercise 5 (p. 69)",
          "kind": "mcq",
          "prompt": "Translate مَتْرُوْكَانِ and give the صِيْغَةٌ.",
          "options": [
            "Two which are left (m/d) — الْمُثَنَّى",
            "Two who leave (m/d) — الْمُثَنَّى",
            "Those which are left (m/p) — جَمْعُ الْمُذَكَّرِ",
            "Two which are left (f/d) — الْمُثَنَّاةُ"
          ],
          "correct": 0,
          "explanation": "تَرَكَ ⟵ مَتْرُوْكٌ (passive); مَفْعُوْلَانِ is the masculine dual."
        },
        {
          "title": "Book Exercise 5 (p. 69)",
          "kind": "mcq",
          "prompt": "Translate مَحْفُوْظَةٌ and give the صِيْغَةٌ.",
          "options": [
            "The one which is protected (f/s) — الْمُفْرَدَةُ",
            "The one who protects (f/s) — الْمُفْرَدَةُ",
            "Those which are protected (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "The one which is protected (m/s) — الْمُفْرَدُ"
          ],
          "correct": 0,
          "explanation": "حَفِظَ ⟵ مَحْفُوْظٌ; مَفْعُوْلَةٌ is the feminine singular of the passive participle."
        },
        {
          "title": "Book Exercise 5 (p. 69)",
          "kind": "mcq",
          "prompt": "Translate مَغْفُوْرُوْنَ and give the صِيْغَةٌ.",
          "options": [
            "Those who are forgiven (m/p) — جَمْعُ الْمُذَكَّرِ",
            "Those who forgive (m/p) — جَمْعُ الْمُذَكَّرِ",
            "Those who are forgiven (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "The one who is forgiven (m/s) — الْمُفْرَدُ"
          ],
          "correct": 0,
          "explanation": "غَفَرَ ⟵ مَغْفُوْرٌ; مَفْعُوْلُوْنَ is the masculine plural — 'those who are forgiven'."
        },
        {
          "title": "Book Exercise 5 (p. 69)",
          "kind": "mcq",
          "prompt": "Translate مَعْقُوْلَاتٌ and give the صِيْغَةٌ.",
          "options": [
            "Those which are understood (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "Those who understand (f/p) — جَمْعُ الْمُؤَنَّثِ",
            "Those which are understood (m/p) — جَمْعُ الْمُذَكَّرِ",
            "That which is understood (f/s) — الْمُفْرَدَةُ"
          ],
          "correct": 0,
          "explanation": "عَقَلَ ⟵ مَعْقُوْلٌ; مَفْعُوْلَاتٌ is the feminine plural."
        },
        {
          "title": "Book Exercise 6 (p. 69)",
          "kind": "mcq",
          "prompt": "'Heard (f/d)' as an اِسْمُ الْمَفْعُوْلِ is…",
          "options": [
            "مَسْمُوْعَتَانِ",
            "مَسْمُوْعَانِ",
            "سَامِعَتَانِ",
            "مَسْمُوْعَاتٌ"
          ],
          "correct": 0,
          "explanation": "سَمِعَ ⟵ مَسْمُوْعٌ; مَفْعُوْلَتَانِ is the feminine dual."
        },
        {
          "title": "Book Exercise 6 (p. 69)",
          "kind": "mcq",
          "prompt": "'Cursed (m/d)' as an اِسْمُ الْمَفْعُوْلِ is…",
          "options": [
            "مَلْعُوْنَانِ",
            "لَاعِنَانِ",
            "مَلْعُوْنَتَانِ",
            "مَلْعُوْنُوْنَ"
          ],
          "correct": 0,
          "explanation": "لَعَنَ ⟵ مَلْعُوْنٌ; مَفْعُوْلَانِ is the masculine dual."
        },
        {
          "title": "Book Exercise 6 (p. 69)",
          "kind": "mcq",
          "prompt": "'Those who are lied to (f/p)' as an اِسْمُ الْمَفْعُوْلِ is…",
          "options": [
            "مَكْذُوْبَاتٌ",
            "كَاذِبَاتٌ",
            "مَكْذُوْبُوْنَ",
            "مَكْذُوْبَتَانِ"
          ],
          "correct": 0,
          "explanation": "كَذَبَ ⟵ مَكْذُوْبٌ; مَفْعُوْلَاتٌ is the feminine plural."
        },
        {
          "title": "Book Exercise 6 (p. 69)",
          "kind": "mcq",
          "prompt": "'Those who are oppressed (f/d)' as an اِسْمُ الْمَفْعُوْلِ is…",
          "options": [
            "مَظْلُوْمَتَانِ",
            "مَظْلُوْمَانِ",
            "ظَالِمَتَانِ",
            "مَظْلُوْمَاتٌ"
          ],
          "correct": 0,
          "explanation": "ظَلَمَ ⟵ مَظْلُوْمٌ; the feminine dual is مَفْعُوْلَتَانِ = مَظْلُوْمَتَانِ."
        }
      ]
    },
    {
      "id": "l12",
      "title": "التَّصْرِيْفُ الصَّغِيْرُ وَالْكَبِيْرُ",
      "subtitle": "The Short and Full Conjugation of a Verb",
      "concepts": [
        {
          "heading": "Part 9: التَّصْرِيْفُ الصَّغِيْرُ",
          "lines": [
            {
              "html": "We have now discussed the <bdi>تَصْرِيْفٌ</bdi> of a single verb. There is another <bdi>تَصْرِيْفٌ</bdi> called <bdi>التَّصْرِيْفُ الصَّغِيْرُ</bdi>. This is made up of the first word of each of the main <bdi>تَصَارِيْفُ</bdi>.",
              "list": false
            },
            {
              "html": "The purpose of learning the <bdi>التَّصْرِيْفُ الصَّغِيْرُ</bdi> is to help a student to quickly identify and conjugate the various forms of the verb.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الصَّغِيْرُ",
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
                    "فَتَحَ",
                    "يَفْتَحُ",
                    "فَتْحًا",
                    "فُتِحَ",
                    "يُفْتَحُ",
                    "فَتْحًا",
                    "اِفْتَحْ",
                    "لَا تَفْتَحْ",
                    "فَاتِحٌ",
                    "مَفْتُوْحٌ"
                  ],
                  [
                    "سَمِعَ",
                    "يَسْمَعُ",
                    "سَمْعًا",
                    "سُمِعَ",
                    "يُسْمَعُ",
                    "سَمْعًا",
                    "اِسْمَعْ",
                    "لَا تَسْمَعْ",
                    "سَامِعٌ",
                    "مَسْمُوْعٌ"
                  ],
                  [
                    "ضَرَبَ",
                    "يَضْرِبُ",
                    "ضَرْبًا",
                    "ضُرِبَ",
                    "يُضْرَبُ",
                    "ضَرْبًا",
                    "اِضْرِبْ",
                    "لَا تَضْرِبْ",
                    "ضَارِبٌ",
                    "مَضْرُوْبٌ"
                  ],
                  [
                    "نَصَرَ",
                    "يَنْصُرُ",
                    "نَصْرًا",
                    "نُصِرَ",
                    "يُنْصَرُ",
                    "نَصْرًا",
                    "أُنْصُرْ",
                    "لَا تَنْصُرْ",
                    "نَاصِرٌ",
                    "مَنْصُوْرٌ"
                  ],
                  [
                    "كَرُمَ",
                    "يَكْرُمُ",
                    "كَرَامَةً",
                    "—",
                    "—",
                    "—",
                    "أُكْرُمْ",
                    "لَا تَكْرُمْ",
                    "كَرِيْمٌ",
                    "—"
                  ],
                  [
                    "حَسِبَ",
                    "يَحْسِبُ",
                    "حِسْبَانًا",
                    "حُسِبَ",
                    "يُحْسَبُ",
                    "حِسْبَانًا",
                    "اِحْسِبْ",
                    "لَا تَحْسِبْ",
                    "حَاسِبٌ",
                    "مَحْسُوْبٌ"
                  ]
                ]
              }
            },
            {
              "html": "The row of <bdi>كَرُمَ يَكْرُمُ</bdi> is left blank in the book for the <bdi>مَجْهُوْلٌ</bdi> forms and the <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> (shown here as —): verbs of this <bdi>بَابٌ</bdi> are intransitive, so they have no passive, and their <bdi>اِسْمُ الْفَاعِلِ</bdi> is irregular (<bdi>كَرِيْمٌ</bdi>, not <bdi>كَارِمٌ</bdi>).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is التَّصْرِيْفُ الصَّغِيْرُ made up of؟",
            "kind": "mcq",
            "options": ["The first word of each of the main تَصَارِيْفُ", "All 14 صِيَغٌ of the مَاضِيْ", "Only the مَاضِيْ and the مُضَارِعُ", "The full conjugation of a single verb"],
            "correct": 0
          }
        },
        {
          "heading": "Part 10: التَّصْرِيْفُ الْكَبِيْرُ",
          "lines": [
            {
              "html": "The full conjugation of a single verb is given in the table below. This is called <bdi>التَّصْرِيْفُ الْكَبِيْرُ</bdi>.",
              "list": false
            },
            {
              "table": {
                "title": "التَّصْرِيْفُ الْكَبِيْرُ — the full conjugation of فَتَحَ",
                "headers": [
                  "صِيْغَةٌ",
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
                    "فَتَحَ",
                    "يَفْتَحُ",
                    "فُتِحَ",
                    "يُفْتَحُ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَانِ",
                    "فَتَحَا",
                    "يَفْتَحَانِ",
                    "فُتِحَا",
                    "يُفْتَحَانِ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبُوْنَ",
                    "فَتَحُوْا",
                    "يَفْتَحُوْنَ",
                    "فُتِحُوْا",
                    "يُفْتَحُوْنَ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَةُ",
                    "فَتَحَتْ",
                    "تَفْتَحُ",
                    "فُتِحَتْ",
                    "تُفْتَحُ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَتَانِ",
                    "فَتَحَتَا",
                    "تَفْتَحَانِ",
                    "فُتِحَتَا",
                    "تُفْتَحَانِ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْغَائِبَاتُ",
                    "فَتَحْنَ",
                    "يَفْتَحْنَ",
                    "فُتِحْنَ",
                    "يُفْتَحْنَ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْمُخَاطَبُ",
                    "فَتَحْتَ",
                    "تَفْتَحُ",
                    "فُتِحْتَ",
                    "تُفْتَحُ",
                    "اِفْتَحْ",
                    "لَا تَفْتَحْ",
                    "فَاتِحٌ",
                    "مَفْتُوْحٌ"
                  ],
                  [
                    "الْمُخَاطَبَانِ",
                    "فَتَحْتُمَا",
                    "تَفْتَحَانِ",
                    "فُتِحْتُمَا",
                    "تُفْتَحَانِ",
                    "اِفْتَحَا",
                    "لَا تَفْتَحَا",
                    "فَاتِحَانِ",
                    "مَفْتُوْحَانِ"
                  ],
                  [
                    "الْمُخَاطَبُوْنَ",
                    "فَتَحْتُمْ",
                    "تَفْتَحُوْنَ",
                    "فُتِحْتُمْ",
                    "تُفْتَحُوْنَ",
                    "اِفْتَحُوْا",
                    "لَا تَفْتَحُوْا",
                    "فَاتِحُوْنَ",
                    "مَفْتُوْحُوْنَ"
                  ],
                  [
                    "الْمُخَاطَبَةُ",
                    "فَتَحْتِ",
                    "تَفْتَحِيْنَ",
                    "فُتِحْتِ",
                    "تُفْتَحِيْنَ",
                    "اِفْتَحِيْ",
                    "لَا تَفْتَحِيْ",
                    "فَاتِحَةٌ",
                    "مَفْتُوْحَةٌ"
                  ],
                  [
                    "الْمُخَاطَبَتَانِ",
                    "فَتَحْتُمَا",
                    "تَفْتَحَانِ",
                    "فُتِحْتُمَا",
                    "تُفْتَحَانِ",
                    "اِفْتَحَا",
                    "لَا تَفْتَحَا",
                    "فَاتِحَتَانِ",
                    "مَفْتُوْحَتَانِ"
                  ],
                  [
                    "الْمُخَاطَبَاتُ",
                    "فَتَحْتُنَّ",
                    "تَفْتَحْنَ",
                    "فُتِحْتُنَّ",
                    "تُفْتَحْنَ",
                    "اِفْتَحْنَ",
                    "لَا تَفْتَحْنَ",
                    "فَاتِحَاتٌ",
                    "مَفْتُوْحَاتٌ"
                  ],
                  [
                    "الْمُتَكَلِّمُ",
                    "فَتَحْتُ",
                    "أَفْتَحُ",
                    "فُتِحْتُ",
                    "أُفْتَحُ",
                    "",
                    "",
                    "",
                    ""
                  ],
                  [
                    "الْمُتَكَلِّمُوْنَ",
                    "فَتَحْنَا",
                    "نَفْتَحُ",
                    "فُتِحْنَا",
                    "نُفْتَحُ",
                    "",
                    "",
                    "",
                    ""
                  ]
                ]
              }
            },
            {
              "html": "The <bdi>الْأَمْرُ</bdi>، <bdi>النَّهْيُ</bdi>، <bdi>اِسْمُ الْفَاعِلِ</bdi> and <bdi>اِسْمُ الْمَفْعُوْلِ</bdi> columns are only filled for the six <bdi>مُخَاطَبٌ</bdi> rows in the book: a command can only be issued to the person in front of you, and the participles are listed against the corresponding singular/dual/plural forms.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In التَّصْرِيْفُ الْكَبِيْرُ of فَتَحَ, which columns are filled only for the مُخَاطَبٌ rows؟",
            "kind": "mcq",
            "options": ["الْأَمْرُ، النَّهْيُ، اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ", "الْمَاضِيْ and الْمُضَارِعُ", "الْمَاضِيْ الْمَجْهُوْلُ only", "None — every column is filled for all 14 rows"],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Parts 9 & 10: التَّصْرِيْفُ الصَّغِيْرُ وَالتَّصْرِيْفُ الْكَبِيْرُ",
        "rows": [
          {
            "label": "The short conjugation: the first word of each of the main تَصَارِيْفُ",
            "arabic": "التَّصْرِيْفُ الصَّغِيْرُ",
            "meaning": "The short conjugation: the first word of each of the main تَصَارِيْفُ",
            "unlockAt": 0
          },
          {
            "label": "The full conjugation of a single verb through all 14 صِيَغٌ",
            "arabic": "التَّصْرِيْفُ الْكَبِيْرُ",
            "meaning": "The full conjugation of a single verb through all 14 صِيَغٌ",
            "unlockAt": 1
          },
          {
            "label": "The ten items of a تَصْرِيْفٌ صَغِيْرٌ, in order",
            "arabic": "فَتَحَ يَفْتَحُ فَتْحًا فُتِحَ يُفْتَحُ فَتْحًا اِفْتَحْ لَا تَفْتَحْ فَاتِحٌ مَفْتُوْحٌ",
            "meaning": "The ten items of a تَصْرِيْفٌ صَغِيْرٌ, in order",
            "unlockAt": 3
          },
          {
            "label": "The purpose of the التَّصْرِيْفُ الصَّغِيْرُ is to help the student quickly identify and conjugate the various forms of the verb",
            "arabic": "الْغَرَضُ",
            "meaning": "The purpose of the التَّصْرِيْفُ الصَّغِيْرُ is to help the student quickly identify and conjugate the various forms of the verb",
            "unlockAt": 4
          },
          {
            "label": "This بَابٌ has no مَجْهُوْلٌ and no اِسْمُ الْمَفْعُوْلِ; its اِسْمُ الْفَاعِلِ is كَرِيْمٌ",
            "arabic": "كَرُمَ يَكْرُمُ",
            "meaning": "This بَابٌ has no مَجْهُوْلٌ and no اِسْمُ الْمَفْعُوْلِ; its اِسْمُ الْفَاعِلِ is كَرِيْمٌ",
            "unlockAt": 6
          }
        ]
      },
      "quiz": [
        {
          "q": "What is التَّصْرِيْفُ الصَّغِيْرُ made up of?",
          "options": [
            "The first word of each of the main تَصَارِيْفُ",
            "All 14 صِيَغٌ of the مَاضِيْ",
            "Only the مَاضِيْ and the مُضَارِعُ",
            "The full conjugation of a single verb"
          ],
          "correct": 0,
          "explanation": "التَّصْرِيْفُ الصَّغِيْرُ lists the first word of each main تَصْرِيْفٌ, e.g. فَتَحَ يَفْتَحُ فَتْحًا فُتِحَ يُفْتَحُ فَتْحًا اِفْتَحْ لَا تَفْتَحْ فَاتِحٌ مَفْتُوْحٌ."
        },
        {
          "q": "What is the purpose of learning التَّصْرِيْفُ الصَّغِيْرُ?",
          "options": [
            "To help a student quickly identify and conjugate the various forms of the verb",
            "To learn the grammatical states of nouns",
            "To memorise the meanings of particles",
            "To learn the plural forms of nouns"
          ],
          "correct": 0,
          "explanation": "This is the reason the book gives on p. 70."
        },
        {
          "q": "What is التَّصْرِيْفُ الْكَبِيْرُ?",
          "options": [
            "The full conjugation of a single verb",
            "The first word of each main تَصْرِيْفٌ",
            "A list of the أَبْوَابٌ",
            "The conjugation of the أَمْرُ only"
          ],
          "correct": 0,
          "explanation": "التَّصْرِيْفُ الْكَبِيْرُ gives every صِيْغَةٌ of الْمَاضِيْ، الْمُضَارِعُ (active and passive), الْأَمْرُ، النَّهْيُ، اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ for one verb."
        },
        {
          "q": "In the تَصْرِيْف صَغِيْر of نَصَرَ, what is the الْأَمْرُ?",
          "options": [
            "أُنْصُرْ",
            "اِنْصَرْ",
            "اِنْصِرْ",
            "لَا تَنْصُرْ"
          ],
          "correct": 0,
          "explanation": "The عَيْنُ الْكَلِمَةِ of يَنْصُرُ has a ضَمَّةٌ, so the هَمْزَةُ الْوَصْلِ carries a ضَمَّةٌ: أُنْصُرْ. لَا تَنْصُرْ is the النَّهْيُ."
        },
        {
          "q": "Why are cells left blank in the كَرُمَ يَكْرُمُ row of the تَصْرِيْف صَغِيْر table?",
          "options": [
            "This بَابٌ has no مَجْهُوْلٌ forms and no اِسْمُ الْمَفْعُوْلِ",
            "The book ran out of space",
            "Its forms are identical to نَصَرَ",
            "It has no الْأَمْرُ"
          ],
          "correct": 0,
          "explanation": "The book leaves the مَاضِيْ مَجْهُوْل، مُضَارِع مَجْهُوْل، its مَصْدَر and the اِسْمُ الْمَفْعُوْلِ blank; the اِسْمُ الْفَاعِلِ is the irregular كَرِيْمٌ."
        },
        {
          "q": "In التَّصْرِيْفُ الْكَبِيْرُ of فَتَحَ, which columns are filled only for the مُخَاطَبٌ rows?",
          "options": [
            "الْأَمْرُ، النَّهْيُ، اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ",
            "الْمَاضِيْ and الْمُضَارِعُ",
            "الْمَاضِيْ الْمَجْهُوْلُ only",
            "None — every column is filled for all 14 rows"
          ],
          "correct": 0,
          "explanation": "The last four columns are given against the six مُخَاطَبٌ صِيَغ only; the غَائِبٌ and مُتَكَلِّمٌ rows have just the four مَاضٍ/مُضَارِعٌ columns."
        }
      ],
      "bank": [
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which item comes immediately after الْمُضَارِعُ الْمَجْهُوْلُ and its مَصْدَرٌ in التَّصْرِيْفُ الصَّغِيْرُ?",
          "options": [
            "الْأَمْرُ",
            "النَّهْيُ",
            "اِسْمُ الْفَاعِلِ",
            "اِسْمُ الْمَفْعُوْلِ"
          ],
          "correct": 0,
          "explanation": "The order is: الْمَاضِيْ الْمَعْلُوْمُ، الْمُضَارِعُ الْمَعْلُوْمُ، الْمَصْدَرُ، الْمَاضِيْ الْمَجْهُوْلُ، الْمُضَارِعُ الْمَجْهُوْلُ، الْمَصْدَرُ، الْأَمْرُ، النَّهْيُ، اِسْمُ الْفَاعِلِ، اِسْمُ الْمَفْعُوْلِ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "What is the الْمُضَارِعُ الْمَجْهُوْلُ of ضَرَبَ?",
          "options": [
            "يُضْرَبُ",
            "يَضْرِبُ",
            "ضُرِبَ",
            "يُضْرِبُ"
          ],
          "correct": 0,
          "explanation": "The مُضَارِعٌ مَجْهُوْلٌ takes a ضَمَّةٌ on the حَرْفُ الْمُضَارِعِ and a فَتْحَةٌ on the عَيْنُ الْكَلِمَةِ: يُضْرَبُ. ضُرِبَ is the مَاضٍ مَجْهُوْلٌ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In التَّصْرِيْفُ الْكَبِيْرُ of فَتَحَ, what is the مَاضٍ مَجْهُوْلٌ of الْمُخَاطَبَاتُ?",
          "options": [
            "فُتِحْتُنَّ",
            "فَتَحْتُنَّ",
            "فُتِحْنَ",
            "تُفْتَحْنَ"
          ],
          "correct": 0,
          "explanation": "الْمُخَاطَبَاتُ takes the pronoun تُنَّ; the passive puts a ضَمَّةٌ on the فَاءُ الْكَلِمَةِ and a كَسْرَةٌ on the عَيْنُ الْكَلِمَةِ: فُتِحْتُنَّ. فُتِحْنَ is الْغَائِبَاتُ."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "In التَّصْرِيْفُ الْكَبِيْرُ, the اِسْمُ الْفَاعِلِ against الْمُخَاطَبَتَانِ is…",
          "options": [
            "فَاتِحَتَانِ",
            "فَاتِحَانِ",
            "فَاتِحَاتٌ",
            "مَفْتُوْحَتَانِ"
          ],
          "correct": 0,
          "explanation": "The feminine dual of فَاعِلٌ is فَاعِلَتَانِ = فَاتِحَتَانِ. مَفْتُوْحَتَانِ is the اِسْمُ الْمَفْعُوْلِ of the same row."
        },
        {
          "title": "Lesson content",
          "kind": "mcq",
          "prompt": "Which صِيْغَةٌ has the same form in the مَاضٍ مَعْلُوْم as another صِيْغَةٌ in the تَصْرِيْف كَبِيْر of فَتَحَ?",
          "options": [
            "الْمُخَاطَبَانِ and الْمُخَاطَبَتَانِ — both فَتَحْتُمَا",
            "الْغَائِبُ and الْغَائِبَةُ",
            "الْمُتَكَلِّمُ and الْمُتَكَلِّمُوْنَ",
            "الْغَائِبَاتُ and الْمُخَاطَبَاتُ"
          ],
          "correct": 0,
          "explanation": "The second person dual pronoun تُمَا is shared by both genders, so both rows read فَتَحْتُمَا (and فُتِحْتُمَا in the passive)."
        },
        {
          "title": "Book Exercise 1 (p. 70)",
          "kind": "mcq",
          "prompt": "Complete the تَصْرِيْف صَغِيْر of بَعْثًا: what are the مَاضِيْ and مُضَارِع?",
          "options": [
            "بَعَثَ يَبْعَثُ",
            "بَعُدَ يَبْعُدُ",
            "بَعَثَ يَبْعِثُ",
            "بُعِثَ يُبْعَثُ"
          ],
          "correct": 0,
          "explanation": "بَعْثًا is the مَصْدَرٌ of بَعَثَ يَبْعَثُ ('to send, to resurrect') — بَاب فَتَحَ يَفْتَحُ. بُعِثَ يُبْعَثُ is its مَجْهُوْلٌ."
        },
        {
          "title": "Book Exercise 1 (p. 70)",
          "kind": "mcq",
          "prompt": "Complete the تَصْرِيْف صَغِيْر of بَعْثًا: what are the اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ?",
          "options": [
            "بَاعِثٌ / مَبْعُوْثٌ",
            "مَبْعُوْثٌ / بَاعِثٌ",
            "بَعِيْثٌ / مَبْعُوْثٌ",
            "بَاعِثٌ / بَعِيْثٌ"
          ],
          "correct": 0,
          "explanation": "The patterns فَاعِلٌ and مَفْعُوْلٌ applied to بَعَثَ give بَاعِثٌ and مَبْعُوْثٌ."
        },
        {
          "title": "Book Exercise 1 (p. 70)",
          "kind": "mcq",
          "prompt": "Complete the تَصْرِيْف صَغِيْر of رَحْمَةً: what are the أَمْر and نَهْي?",
          "options": [
            "اِرْحَمْ / لَا تَرْحَمْ",
            "أُرْحُمْ / لَا تَرْحَمْ",
            "اِرْحِمْ / لَا تَرْحِمْ",
            "اِرْحَمْ / لَنْ تَرْحَمَ"
          ],
          "correct": 0,
          "explanation": "رَحِمَ يَرْحَمُ: the عَيْنُ الْكَلِمَةِ has a فَتْحَةٌ, so the هَمْزَةُ الْوَصْلِ takes a كَسْرَةٌ. The نَهْي is لَا + مُضَارِعٌ مَجْزُوْمٌ."
        },
        {
          "title": "Book Exercise 1 (p. 70)",
          "kind": "mcq",
          "prompt": "Complete the تَصْرِيْف صَغِيْر of صَبْرًا: what are the مَاضٍ مَجْهُوْل and مُضَارِع مَجْهُوْل?",
          "options": [
            "صُبِرَ يُصْبَرُ",
            "صَبَرَ يَصْبِرُ",
            "صُبِرَ يُصْبِرُ",
            "صَبِرَ يُصْبَرُ"
          ],
          "correct": 0,
          "explanation": "صَبَرَ يَصْبِرُ صَبْرًا; the passive is formed with a ضَمَّةٌ on the first letter and a كَسْرَةٌ (مَاضٍ) / فَتْحَةٌ (مُضَارِعٌ) on the عَيْنُ الْكَلِمَةِ."
        },
        {
          "title": "Book Exercise 1 (p. 70)",
          "kind": "mcq",
          "prompt": "Complete the تَصْرِيْف صَغِيْر of تَرْكًا: what is the أَمْر?",
          "options": [
            "أُتْرُكْ",
            "اِتْرُكْ",
            "اِتْرَكْ",
            "أُتْرِكْ"
          ],
          "correct": 0,
          "explanation": "تَرَكَ يَتْرُكُ: the عَيْنُ الْكَلِمَةِ carries a ضَمَّةٌ, so the هَمْزَةُ الْوَصْلِ carries a ضَمَّةٌ: أُتْرُكْ."
        },
        {
          "title": "Book Exercise 1 (p. 70)",
          "kind": "mcq",
          "prompt": "Complete the تَصْرِيْف صَغِيْر of كِبَرًا: what is the اِسْمُ الْفَاعِلِ?",
          "options": [
            "كَبِيْرٌ",
            "كَابِرٌ",
            "مَكْبُوْرٌ",
            "كَابِرَةٌ"
          ],
          "correct": 0,
          "explanation": "كَبُرَ يَكْبُرُ كِبَرًا is from بَاب كَرُمَ يَكْرُمُ, whose اِسْمُ الْفَاعِلِ does not come on the فَاعِلٌ pattern: كَبِيْرٌ."
        },
        {
          "title": "Book Exercise 1 (p. 70)",
          "kind": "mcq",
          "prompt": "Complete the تَصْرِيْف صَغِيْر of كِبَرًا: what is the نَهْي?",
          "options": [
            "لَا تَكْبُرْ",
            "لَا تَكْبَرْ",
            "لَا تُكْبَرْ",
            "لَنْ تَكْبُرَ"
          ],
          "correct": 0,
          "explanation": "The مُضَارِع is يَكْبُرُ, so الْمُخَاطَبُ is تَكْبُرُ; made مَجْزُوْمٌ with لَا النَّهْيِ it becomes لَا تَكْبُرْ."
        }
      ]
    },
    {
      "id": "l13",
      "title": "المراجعة",
      "subtitle": "Key terms and unit vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 1 Summary",
          "lines": [
            {
              "html": "This is a cumulative review of Unit 1: every key morphological term covered so far, plus the full unit-end verb vocabulary. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does تَصْرِيْفٌ mean?",
          "options": [
            "Conjugation",
            "Verb form",
            "Grammatical state",
            "Pronoun"
          ],
          "correct": 0
        },
        {
          "q": "What does صِيْغَةٌ mean?",
          "options": [
            "Verb form",
            "Conjugation",
            "Masculine",
            "Past tense"
          ],
          "correct": 0
        },
        {
          "q": "What does مُذَكَّرٌ mean?",
          "options": [
            "Masculine",
            "Feminine",
            "Singular",
            "Third person"
          ],
          "correct": 0
        },
        {
          "q": "What does مُفْرَدٌ mean?",
          "options": [
            "Singular",
            "Dual",
            "Plural",
            "Masculine"
          ],
          "correct": 0
        },
        {
          "q": "What does غَائِبٌ mean?",
          "options": [
            "Third person",
            "Second person",
            "First person",
            "Hidden pronoun"
          ],
          "correct": 0
        },
        {
          "q": "What does مُتَكَلِّمٌ mean?",
          "options": [
            "First person",
            "Third person",
            "Second person",
            "Visible pronoun"
          ],
          "correct": 0
        },
        {
          "q": "What does مَاضٍ mean?",
          "options": [
            "Past tense",
            "Present and Future Tense",
            "Grammatical state",
            "Negative"
          ],
          "correct": 0
        },
        {
          "q": "What does مُسْتَتِرٌ mean?",
          "options": [
            "Hidden pronoun",
            "Visible pronoun",
            "Pronoun",
            "Negative particle"
          ],
          "correct": 0
        },
        {
          "q": "What does مُضَارِعٌ mean?",
          "options": [
            "Present and Future Tense",
            "Past tense",
            "Future",
            "Present"
          ],
          "correct": 0
        },
        {
          "q": "What does بَابٌ (plural أَبْوَابٌ) mean?",
          "options": [
            "Combinations of الْمَاضِيْ and الْمُضَارِعُ",
            "The first letter of الْمَاضِيْ",
            "Grammatical state",
            "A particle which makes the verb مَجْزُوْمٌ"
          ],
          "correct": 0
        },
        {
          "q": "What does فِعْلٌ مَعْلُوْمٌ فَاعِلُهُ mean?",
          "options": [
            "Active voice",
            "Passive voice",
            "Affirmative",
            "Non-declinable"
          ],
          "correct": 0
        },
        {
          "q": "What does إِعْرَابٌ mean?",
          "options": [
            "Grammatical state",
            "Sign of grammatical state",
            "Conjugation",
            "Verb form"
          ],
          "correct": 0
        },
        {
          "q": "What does مَبْنِيٌّ mean?",
          "options": [
            "Non-declinable",
            "Declinable",
            "Default state of a verb",
            "Active participle"
          ],
          "correct": 0
        },
        {
          "q": "What does مَرْفُوْعٌ mean?",
          "options": [
            "Default state of a verb",
            "State of a verb (preceded by لَنْ)",
            "State of a verb (preceded by لَمْ)",
            "Sign of grammatical state"
          ],
          "correct": 0
        },
        {
          "q": "What does مُثْبَتٌ mean?",
          "options": [
            "Affirmative",
            "Negative",
            "Negative particle",
            "Declinable"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفُ نَفْيٍ mean?",
          "options": [
            "Negative particle",
            "Negative",
            "A particle which makes the verb مَنْصُوْبٌ",
            "A particle which makes the verb مَجْزُوْمٌ"
          ],
          "correct": 0
        },
        {
          "q": "What does اِسْمُ الْفَاعِلِ mean?",
          "options": [
            "Active participle",
            "Passive participle",
            "The short conjugation",
            "The full conjugation"
          ],
          "correct": 0
        },
        {
          "q": "What does التَّصْرِيْفُ الْكَبِيْرُ mean?",
          "options": [
            "The full conjugation",
            "The short conjugation",
            "Conjugation",
            "Verb form"
          ],
          "correct": 0
        }
      ],
      "bank": [
        {
          "title": "to look",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to look\"?",
          "options": [
            "بَصُرَ يَبْصُرُ",
            "بَعَثَ يَبْعَثُ",
            "بَعُدَ يَبْعُدُ",
            "بَلَغَ يَبْلُغُ"
          ],
          "correct": 0
        },
        {
          "title": "to look",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَصُرَ يَبْصُرُ mean?",
          "options": [
            "to look",
            "to send, to resurrect",
            "to be far",
            "to reach"
          ],
          "correct": 0
        },
        {
          "title": "to look (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَصُرَ يَبْصُرُ?",
          "options": [
            "بَصِيْرَةً",
            "بَعْثًا",
            "بُعْدًا",
            "بُلُوْغًا"
          ],
          "correct": 0
        },
        {
          "title": "to send, to resurrect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send, to resurrect\"?",
          "options": [
            "بَعَثَ يَبْعَثُ",
            "بَعُدَ يَبْعُدُ",
            "بَلَغَ يَبْلُغُ",
            "تَرَكَ يَتْرُكُ"
          ],
          "correct": 0
        },
        {
          "title": "to send, to resurrect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعَثَ يَبْعَثُ mean?",
          "options": [
            "to send, to resurrect",
            "to be far",
            "to reach",
            "to leave"
          ],
          "correct": 0
        },
        {
          "title": "to send, to resurrect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعَثَ يَبْعَثُ?",
          "options": [
            "بَعْثًا",
            "بُعْدًا",
            "بُلُوْغًا",
            "تَرْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be far\"?",
          "options": [
            "بَعُدَ يَبْعُدُ",
            "بَلَغَ يَبْلُغُ",
            "تَرَكَ يَتْرُكُ",
            "جَعَلَ يَجْعَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to be far",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعُدَ يَبْعُدُ mean?",
          "options": [
            "to be far",
            "to reach",
            "to leave",
            "to make"
          ],
          "correct": 0
        },
        {
          "title": "to be far (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعُدَ يَبْعُدُ?",
          "options": [
            "بُعْدًا",
            "بُلُوْغًا",
            "تَرْكًا",
            "جَعْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to reach",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reach\"?",
          "options": [
            "بَلَغَ يَبْلُغُ",
            "تَرَكَ يَتْرُكُ",
            "جَعَلَ يَجْعَلُ",
            "حَرُمَ يَحْرُمُ"
          ],
          "correct": 0
        },
        {
          "title": "to reach",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَلَغَ يَبْلُغُ mean?",
          "options": [
            "to reach",
            "to leave",
            "to make",
            "to be impermissible"
          ],
          "correct": 0
        },
        {
          "title": "to reach (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَلَغَ يَبْلُغُ?",
          "options": [
            "بُلُوْغًا",
            "تَرْكًا",
            "جَعْلًا",
            "حُرْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to leave",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to leave\"?",
          "options": [
            "تَرَكَ يَتْرُكُ",
            "جَعَلَ يَجْعَلُ",
            "حَرُمَ يَحْرُمُ",
            "حَزِنَ يَحْزَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to leave",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَكَ يَتْرُكُ mean?",
          "options": [
            "to leave",
            "to make",
            "to be impermissible",
            "to be grieved"
          ],
          "correct": 0
        },
        {
          "title": "to leave (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَكَ يَتْرُكُ?",
          "options": [
            "تَرْكًا",
            "جَعْلًا",
            "حُرْمَةً",
            "حُزْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to make",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make\"?",
          "options": [
            "جَعَلَ يَجْعَلُ",
            "حَرُمَ يَحْرُمُ",
            "حَزِنَ يَحْزَنُ",
            "حَسِبَ يَحْسِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to make",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَعَلَ يَجْعَلُ mean?",
          "options": [
            "to make",
            "to be impermissible",
            "to be grieved",
            "to consider"
          ],
          "correct": 0
        },
        {
          "title": "to make (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَعَلَ يَجْعَلُ?",
          "options": [
            "جَعْلًا",
            "حُرْمَةً",
            "حُزْنًا",
            "حِسْبَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be impermissible",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be impermissible\"?",
          "options": [
            "حَرُمَ يَحْرُمُ",
            "حَزِنَ يَحْزَنُ",
            "حَسِبَ يَحْسِبُ",
            "حَسُنَ يَحْسُنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be impermissible",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَرُمَ يَحْرُمُ mean?",
          "options": [
            "to be impermissible",
            "to be grieved",
            "to consider",
            "to be good"
          ],
          "correct": 0
        },
        {
          "title": "to be impermissible (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَرُمَ يَحْرُمُ?",
          "options": [
            "حُرْمَةً",
            "حُزْنًا",
            "حِسْبَانًا",
            "حُسْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to be grieved",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be grieved\"?",
          "options": [
            "حَزِنَ يَحْزَنُ",
            "حَسِبَ يَحْسِبُ",
            "حَسُنَ يَحْسُنُ",
            "حَشَرَ يَحْشُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be grieved",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَزِنَ يَحْزَنُ mean?",
          "options": [
            "to be grieved",
            "to consider",
            "to be good",
            "to gather"
          ],
          "correct": 0
        },
        {
          "title": "to be grieved (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَزِنَ يَحْزَنُ?",
          "options": [
            "حُزْنًا",
            "حِسْبَانًا",
            "حُسْنًا",
            "حَشْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to consider",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to consider\"?",
          "options": [
            "حَسِبَ يَحْسِبُ",
            "حَسُنَ يَحْسُنُ",
            "حَشَرَ يَحْشُرُ",
            "حَفِظَ يَحْفَظُ"
          ],
          "correct": 0
        },
        {
          "title": "to consider",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَسِبَ يَحْسِبُ mean?",
          "options": [
            "to consider",
            "to be good",
            "to gather",
            "to guard"
          ],
          "correct": 0
        },
        {
          "title": "to consider (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَسِبَ يَحْسِبُ?",
          "options": [
            "حِسْبَانًا",
            "حُسْنًا",
            "حَشْرًا",
            "حِفْظًا"
          ],
          "correct": 0
        },
        {
          "title": "to be good",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be good\"?",
          "options": [
            "حَسُنَ يَحْسُنُ",
            "حَشَرَ يَحْشُرُ",
            "حَفِظَ يَحْفَظُ",
            "حَكَمَ يَحْكُمُ"
          ],
          "correct": 0
        },
        {
          "title": "to be good",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَسُنَ يَحْسُنُ mean?",
          "options": [
            "to be good",
            "to gather",
            "to guard",
            "to judge"
          ],
          "correct": 0
        },
        {
          "title": "to be good (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَسُنَ يَحْسُنُ?",
          "options": [
            "حُسْنًا",
            "حَشْرًا",
            "حِفْظًا",
            "حُكْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to gather",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to gather\"?",
          "options": [
            "حَشَرَ يَحْشُرُ",
            "حَفِظَ يَحْفَظُ",
            "حَكَمَ يَحْكُمُ",
            "حَمَلَ يَحْمِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to gather",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَشَرَ يَحْشُرُ mean?",
          "options": [
            "to gather",
            "to guard",
            "to judge",
            "to carry"
          ],
          "correct": 0
        },
        {
          "title": "to gather (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَشَرَ يَحْشُرُ?",
          "options": [
            "حَشْرًا",
            "حِفْظًا",
            "حُكْمًا",
            "حَمْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to guard",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to guard\"?",
          "options": [
            "حَفِظَ يَحْفَظُ",
            "حَكَمَ يَحْكُمُ",
            "حَمَلَ يَحْمِلُ",
            "خَبُثَ يَخْبُثُ"
          ],
          "correct": 0
        },
        {
          "title": "to guard",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَفِظَ يَحْفَظُ mean?",
          "options": [
            "to guard",
            "to judge",
            "to carry",
            "to be bad"
          ],
          "correct": 0
        },
        {
          "title": "to guard (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَفِظَ يَحْفَظُ?",
          "options": [
            "حِفْظًا",
            "حُكْمًا",
            "حَمْلًا",
            "خُبْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to judge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to judge\"?",
          "options": [
            "حَكَمَ يَحْكُمُ",
            "حَمَلَ يَحْمِلُ",
            "خَبُثَ يَخْبُثُ",
            "خَرَجَ يَخْرُجُ"
          ],
          "correct": 0
        },
        {
          "title": "to judge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَكَمَ يَحْكُمُ mean?",
          "options": [
            "to judge",
            "to carry",
            "to be bad",
            "to come out"
          ],
          "correct": 0
        },
        {
          "title": "to judge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَكَمَ يَحْكُمُ?",
          "options": [
            "حُكْمًا",
            "حَمْلًا",
            "خُبْثًا",
            "خُرُوْجًا"
          ],
          "correct": 0
        },
        {
          "title": "to carry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to carry\"?",
          "options": [
            "حَمَلَ يَحْمِلُ",
            "خَبُثَ يَخْبُثُ",
            "خَرَجَ يَخْرُجُ",
            "خَسِرَ يَخْسَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to carry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَمَلَ يَحْمِلُ mean?",
          "options": [
            "to carry",
            "to be bad",
            "to come out",
            "to lose"
          ],
          "correct": 0
        },
        {
          "title": "to carry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَمَلَ يَحْمِلُ?",
          "options": [
            "حَمْلًا",
            "خُبْثًا",
            "خُرُوْجًا",
            "خُسْرَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be bad",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be bad\"?",
          "options": [
            "خَبُثَ يَخْبُثُ",
            "خَرَجَ يَخْرُجُ",
            "خَسِرَ يَخْسَرُ",
            "خَلَقَ يَخْلُقُ"
          ],
          "correct": 0
        },
        {
          "title": "to be bad",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَبُثَ يَخْبُثُ mean?",
          "options": [
            "to be bad",
            "to come out",
            "to lose",
            "to create"
          ],
          "correct": 0
        },
        {
          "title": "to be bad (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَبُثَ يَخْبُثُ?",
          "options": [
            "خُبْثًا",
            "خُرُوْجًا",
            "خُسْرَانًا",
            "خَلْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to come out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come out\"?",
          "options": [
            "خَرَجَ يَخْرُجُ",
            "خَسِرَ يَخْسَرُ",
            "خَلَقَ يَخْلُقُ",
            "دَخَلَ يَدْخُلُ"
          ],
          "correct": 0
        },
        {
          "title": "to come out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَرَجَ يَخْرُجُ mean?",
          "options": [
            "to come out",
            "to lose",
            "to create",
            "to enter"
          ],
          "correct": 0
        },
        {
          "title": "to come out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَرَجَ يَخْرُجُ?",
          "options": [
            "خُرُوْجًا",
            "خُسْرَانًا",
            "خَلْقًا",
            "دُخُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to lose",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lose\"?",
          "options": [
            "خَسِرَ يَخْسَرُ",
            "خَلَقَ يَخْلُقُ",
            "دَخَلَ يَدْخُلُ",
            "ذَكَرَ يَذْكُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to lose",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَسِرَ يَخْسَرُ mean?",
          "options": [
            "to lose",
            "to create",
            "to enter",
            "to remember"
          ],
          "correct": 0
        },
        {
          "title": "to lose (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَسِرَ يَخْسَرُ?",
          "options": [
            "خُسْرَانًا",
            "خَلْقًا",
            "دُخُوْلًا",
            "ذِكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to create",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to create\"?",
          "options": [
            "خَلَقَ يَخْلُقُ",
            "دَخَلَ يَدْخُلُ",
            "ذَكَرَ يَذْكُرُ",
            "ذَهَبَ يَذْهَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to create",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَلَقَ يَخْلُقُ mean?",
          "options": [
            "to create",
            "to enter",
            "to remember",
            "to go"
          ],
          "correct": 0
        },
        {
          "title": "to create (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَلَقَ يَخْلُقُ?",
          "options": [
            "خَلْقًا",
            "دُخُوْلًا",
            "ذِكْرًا",
            "ذَهَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to enter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to enter\"?",
          "options": [
            "دَخَلَ يَدْخُلُ",
            "ذَكَرَ يَذْكُرُ",
            "ذَهَبَ يَذْهَبُ",
            "رَحِمَ يَرْحَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to enter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَخَلَ يَدْخُلُ mean?",
          "options": [
            "to enter",
            "to remember",
            "to go",
            "to have mercy"
          ],
          "correct": 0
        },
        {
          "title": "to enter (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَخَلَ يَدْخُلُ?",
          "options": [
            "دُخُوْلًا",
            "ذِكْرًا",
            "ذَهَابًا",
            "رَحْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to remember",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to remember\"?",
          "options": [
            "ذَكَرَ يَذْكُرُ",
            "ذَهَبَ يَذْهَبُ",
            "رَحِمَ يَرْحَمُ",
            "رَزَقَ يَرْزُقُ"
          ],
          "correct": 0
        },
        {
          "title": "to remember",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَكَرَ يَذْكُرُ mean?",
          "options": [
            "to remember",
            "to go",
            "to have mercy",
            "to provide"
          ],
          "correct": 0
        },
        {
          "title": "to remember (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَكَرَ يَذْكُرُ?",
          "options": [
            "ذِكْرًا",
            "ذَهَابًا",
            "رَحْمَةً",
            "رِزْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to go",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to go\"?",
          "options": [
            "ذَهَبَ يَذْهَبُ",
            "رَحِمَ يَرْحَمُ",
            "رَزَقَ يَرْزُقُ",
            "رَفَعَ يَرْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to go",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَهَبَ يَذْهَبُ mean?",
          "options": [
            "to go",
            "to have mercy",
            "to provide",
            "to elevate"
          ],
          "correct": 0
        },
        {
          "title": "to go (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَهَبَ يَذْهَبُ?",
          "options": [
            "ذَهَابًا",
            "رَحْمَةً",
            "رِزْقًا",
            "رَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to have mercy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to have mercy\"?",
          "options": [
            "رَحِمَ يَرْحَمُ",
            "رَزَقَ يَرْزُقُ",
            "رَفَعَ يَرْفَعُ",
            "رَكِبَ يَرْكَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to have mercy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَحِمَ يَرْحَمُ mean?",
          "options": [
            "to have mercy",
            "to provide",
            "to elevate",
            "to ride"
          ],
          "correct": 0
        },
        {
          "title": "to have mercy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَحِمَ يَرْحَمُ?",
          "options": [
            "رَحْمَةً",
            "رِزْقًا",
            "رَفْعًا",
            "رُكُوْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to provide",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to provide\"?",
          "options": [
            "رَزَقَ يَرْزُقُ",
            "رَفَعَ يَرْفَعُ",
            "رَكِبَ يَرْكَبُ",
            "رَكَعَ يَرْكَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to provide",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَزَقَ يَرْزُقُ mean?",
          "options": [
            "to provide",
            "to elevate",
            "to ride",
            "to bow"
          ],
          "correct": 0
        },
        {
          "title": "to provide (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَزَقَ يَرْزُقُ?",
          "options": [
            "رِزْقًا",
            "رَفْعًا",
            "رُكُوْبًا",
            "رُكُوْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to elevate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to elevate\"?",
          "options": [
            "رَفَعَ يَرْفَعُ",
            "رَكِبَ يَرْكَبُ",
            "رَكَعَ يَرْكَعُ",
            "سَأَلَ يَسْئَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to elevate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَفَعَ يَرْفَعُ mean?",
          "options": [
            "to elevate",
            "to ride",
            "to bow",
            "to ask"
          ],
          "correct": 0
        },
        {
          "title": "to elevate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَفَعَ يَرْفَعُ?",
          "options": [
            "رَفْعًا",
            "رُكُوْبًا",
            "رُكُوْعًا",
            "سُؤَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to ride",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ride\"?",
          "options": [
            "رَكِبَ يَرْكَبُ",
            "رَكَعَ يَرْكَعُ",
            "سَأَلَ يَسْئَلُ",
            "سَحَرَ يَسْحَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to ride",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَكِبَ يَرْكَبُ mean?",
          "options": [
            "to ride",
            "to bow",
            "to ask",
            "to bewitch"
          ],
          "correct": 0
        },
        {
          "title": "to ride (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَكِبَ يَرْكَبُ?",
          "options": [
            "رُكُوْبًا",
            "رُكُوْعًا",
            "سُؤَالًا",
            "سِحْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to bow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bow\"?",
          "options": [
            "رَكَعَ يَرْكَعُ",
            "سَأَلَ يَسْئَلُ",
            "سَحَرَ يَسْحَرُ",
            "سَخِرَ يَسْخَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to bow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَكَعَ يَرْكَعُ mean?",
          "options": [
            "to bow",
            "to ask",
            "to bewitch",
            "to ridicule"
          ],
          "correct": 0
        },
        {
          "title": "to bow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَكَعَ يَرْكَعُ?",
          "options": [
            "رُكُوْعًا",
            "سُؤَالًا",
            "سِحْرًا",
            "سُخْرِيَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to ask",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ask\"?",
          "options": [
            "سَأَلَ يَسْئَلُ",
            "سَحَرَ يَسْحَرُ",
            "سَخِرَ يَسْخَرُ",
            "سَمِعَ يَسْمَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to ask",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَأَلَ يَسْئَلُ mean?",
          "options": [
            "to ask",
            "to bewitch",
            "to ridicule",
            "to hear, listen"
          ],
          "correct": 0
        },
        {
          "title": "to ask (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَأَلَ يَسْئَلُ?",
          "options": [
            "سُؤَالًا",
            "سِحْرًا",
            "سُخْرِيَّةً",
            "سَمْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to bewitch",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bewitch\"?",
          "options": [
            "سَحَرَ يَسْحَرُ",
            "سَخِرَ يَسْخَرُ",
            "سَمِعَ يَسْمَعُ",
            "شَهِدَ يَشْهَدُ"
          ],
          "correct": 0
        },
        {
          "title": "to bewitch",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَحَرَ يَسْحَرُ mean?",
          "options": [
            "to bewitch",
            "to ridicule",
            "to hear, listen",
            "to bear witness"
          ],
          "correct": 0
        },
        {
          "title": "to bewitch (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَحَرَ يَسْحَرُ?",
          "options": [
            "سِحْرًا",
            "سُخْرِيَّةً",
            "سَمْعًا",
            "شَهَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to ridicule",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ridicule\"?",
          "options": [
            "سَخِرَ يَسْخَرُ",
            "سَمِعَ يَسْمَعُ",
            "شَهِدَ يَشْهَدُ",
            "صَبَرَ يَصْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to ridicule",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَخِرَ يَسْخَرُ mean?",
          "options": [
            "to ridicule",
            "to hear, listen",
            "to bear witness",
            "to bear with patience"
          ],
          "correct": 0
        },
        {
          "title": "to ridicule (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَخِرَ يَسْخَرُ?",
          "options": [
            "سُخْرِيَّةً",
            "سَمْعًا",
            "شَهَادَةً",
            "صَبْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to hear, listen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hear, listen\"?",
          "options": [
            "سَمِعَ يَسْمَعُ",
            "شَهِدَ يَشْهَدُ",
            "صَبَرَ يَصْبِرُ",
            "صَلَحَ يَصْلَحُ"
          ],
          "correct": 0
        },
        {
          "title": "to hear, listen",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمِعَ يَسْمَعُ mean?",
          "options": [
            "to hear, listen",
            "to bear witness",
            "to bear with patience",
            "to act righteously"
          ],
          "correct": 0
        },
        {
          "title": "to hear, listen (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَمِعَ يَسْمَعُ?",
          "options": [
            "سَمْعًا",
            "شَهَادَةً",
            "صَبْرًا",
            "صَلَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to bear witness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bear witness\"?",
          "options": [
            "شَهِدَ يَشْهَدُ",
            "صَبَرَ يَصْبِرُ",
            "صَلَحَ يَصْلَحُ",
            "ضَرَبَ يَضْرِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to bear witness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَهِدَ يَشْهَدُ mean?",
          "options": [
            "to bear witness",
            "to bear with patience",
            "to act righteously",
            "to hit"
          ],
          "correct": 0
        },
        {
          "title": "to bear witness (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَهِدَ يَشْهَدُ?",
          "options": [
            "شَهَادَةً",
            "صَبْرًا",
            "صَلَاحًا",
            "ضَرْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to bear with patience",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bear with patience\"?",
          "options": [
            "صَبَرَ يَصْبِرُ",
            "صَلَحَ يَصْلَحُ",
            "ضَرَبَ يَضْرِبُ",
            "ظَلَمَ يَظْلِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to bear with patience",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَبَرَ يَصْبِرُ mean?",
          "options": [
            "to bear with patience",
            "to act righteously",
            "to hit",
            "to wrong, oppress"
          ],
          "correct": 0
        },
        {
          "title": "to bear with patience (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَبَرَ يَصْبِرُ?",
          "options": [
            "صَبْرًا",
            "صَلَاحًا",
            "ضَرْبًا",
            "ظُلْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to act righteously",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to act righteously\"?",
          "options": [
            "صَلَحَ يَصْلَحُ",
            "ضَرَبَ يَضْرِبُ",
            "ظَلَمَ يَظْلِمُ",
            "عَبَدَ يَعْبُدُ"
          ],
          "correct": 0
        },
        {
          "title": "to act righteously",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَلَحَ يَصْلَحُ mean?",
          "options": [
            "to act righteously",
            "to hit",
            "to wrong, oppress",
            "to worship"
          ],
          "correct": 0
        },
        {
          "title": "to act righteously (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَلَحَ يَصْلَحُ?",
          "options": [
            "صَلَاحًا",
            "ضَرْبًا",
            "ظُلْمًا",
            "عِبَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to hit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hit\"?",
          "options": [
            "ضَرَبَ يَضْرِبُ",
            "ظَلَمَ يَظْلِمُ",
            "عَبَدَ يَعْبُدُ",
            "عَرَفَ يَعْرِفُ"
          ],
          "correct": 0
        },
        {
          "title": "to hit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَرَبَ يَضْرِبُ mean?",
          "options": [
            "to hit",
            "to wrong, oppress",
            "to worship",
            "to recognise"
          ],
          "correct": 0
        },
        {
          "title": "to hit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَرَبَ يَضْرِبُ?",
          "options": [
            "ضَرْبًا",
            "ظُلْمًا",
            "عِبَادَةً",
            "مَعْرِفَةً"
          ],
          "correct": 0
        },
        {
          "title": "to wrong, oppress",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wrong, oppress\"?",
          "options": [
            "ظَلَمَ يَظْلِمُ",
            "عَبَدَ يَعْبُدُ",
            "عَرَفَ يَعْرِفُ",
            "عَقَلَ يَعْقِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to wrong, oppress",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظَلَمَ يَظْلِمُ mean?",
          "options": [
            "to wrong, oppress",
            "to worship",
            "to recognise",
            "to understand"
          ],
          "correct": 0
        },
        {
          "title": "to wrong, oppress (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ظَلَمَ يَظْلِمُ?",
          "options": [
            "ظُلْمًا",
            "عِبَادَةً",
            "مَعْرِفَةً",
            "عَقْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to worship",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to worship\"?",
          "options": [
            "عَبَدَ يَعْبُدُ",
            "عَرَفَ يَعْرِفُ",
            "عَقَلَ يَعْقِلُ",
            "عَلِمَ يَعْلَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to worship",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَبَدَ يَعْبُدُ mean?",
          "options": [
            "to worship",
            "to recognise",
            "to understand",
            "to know"
          ],
          "correct": 0
        },
        {
          "title": "to worship (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَبَدَ يَعْبُدُ?",
          "options": [
            "عِبَادَةً",
            "مَعْرِفَةً",
            "عَقْلًا",
            "عِلْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to recognise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recognise\"?",
          "options": [
            "عَرَفَ يَعْرِفُ",
            "عَقَلَ يَعْقِلُ",
            "عَلِمَ يَعْلَمُ",
            "عَمِلَ يَعْمَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to recognise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَرَفَ يَعْرِفُ mean?",
          "options": [
            "to recognise",
            "to understand",
            "to know",
            "to do"
          ],
          "correct": 0
        },
        {
          "title": "to recognise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَرَفَ يَعْرِفُ?",
          "options": [
            "مَعْرِفَةً",
            "عَقْلًا",
            "عِلْمًا",
            "عَمَلًا"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to understand\"?",
          "options": [
            "عَقَلَ يَعْقِلُ",
            "عَلِمَ يَعْلَمُ",
            "عَمِلَ يَعْمَلُ",
            "غَفَرَ يَغْفِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقَلَ يَعْقِلُ mean?",
          "options": [
            "to understand",
            "to know",
            "to do",
            "to forgive"
          ],
          "correct": 0
        },
        {
          "title": "to understand (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَقَلَ يَعْقِلُ?",
          "options": [
            "عَقْلًا",
            "عِلْمًا",
            "عَمَلًا",
            "مَغْفِرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to know",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to know\"?",
          "options": [
            "عَلِمَ يَعْلَمُ",
            "عَمِلَ يَعْمَلُ",
            "غَفَرَ يَغْفِرُ",
            "فَتَحَ يَفْتَحُ"
          ],
          "correct": 0
        },
        {
          "title": "to know",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَلِمَ يَعْلَمُ mean?",
          "options": [
            "to know",
            "to do",
            "to forgive",
            "to open"
          ],
          "correct": 0
        },
        {
          "title": "to know (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَلِمَ يَعْلَمُ?",
          "options": [
            "عِلْمًا",
            "عَمَلًا",
            "مَغْفِرَةً",
            "فَتْحًا"
          ],
          "correct": 0
        },
        {
          "title": "to do",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to do\"?",
          "options": [
            "عَمِلَ يَعْمَلُ",
            "غَفَرَ يَغْفِرُ",
            "فَتَحَ يَفْتَحُ",
            "قَتَلَ يَقْتُلُ"
          ],
          "correct": 0
        },
        {
          "title": "to do",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَمِلَ يَعْمَلُ mean?",
          "options": [
            "to do",
            "to forgive",
            "to open",
            "to kill"
          ],
          "correct": 0
        },
        {
          "title": "to do (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَمِلَ يَعْمَلُ?",
          "options": [
            "عَمَلًا",
            "مَغْفِرَةً",
            "فَتْحًا",
            "قَتْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forgive\"?",
          "options": [
            "غَفَرَ يَغْفِرُ",
            "فَتَحَ يَفْتَحُ",
            "قَتَلَ يَقْتُلُ",
            "قَدَرَ يَقْدِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to forgive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَفَرَ يَغْفِرُ mean?",
          "options": [
            "to forgive",
            "to open",
            "to kill",
            "to have power"
          ],
          "correct": 0
        },
        {
          "title": "to forgive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَفَرَ يَغْفِرُ?",
          "options": [
            "مَغْفِرَةً",
            "فَتْحًا",
            "قَتْلًا",
            "قُدْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to open",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to open\"?",
          "options": [
            "فَتَحَ يَفْتَحُ",
            "قَتَلَ يَقْتُلُ",
            "قَدَرَ يَقْدِرُ",
            "قَرَأَ يَقْرَأُ"
          ],
          "correct": 0
        },
        {
          "title": "to open",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَتَحَ يَفْتَحُ mean?",
          "options": [
            "to open",
            "to kill",
            "to have power",
            "to read"
          ],
          "correct": 0
        },
        {
          "title": "to open (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَتَحَ يَفْتَحُ?",
          "options": [
            "فَتْحًا",
            "قَتْلًا",
            "قُدْرَةً",
            "قِرَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to kill",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to kill\"?",
          "options": [
            "قَتَلَ يَقْتُلُ",
            "قَدَرَ يَقْدِرُ",
            "قَرَأَ يَقْرَأُ",
            "كَبُرَ يَكْبُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to kill",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَتَلَ يَقْتُلُ mean?",
          "options": [
            "to kill",
            "to have power",
            "to read",
            "to become big, old"
          ],
          "correct": 0
        },
        {
          "title": "to kill (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَتَلَ يَقْتُلُ?",
          "options": [
            "قَتْلًا",
            "قُدْرَةً",
            "قِرَاءَةً",
            "كِبَرًا"
          ],
          "correct": 0
        },
        {
          "title": "to have power",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to have power\"?",
          "options": [
            "قَدَرَ يَقْدِرُ",
            "قَرَأَ يَقْرَأُ",
            "كَبُرَ يَكْبُرُ",
            "كَثُرَ يَكْثُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to have power",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَدَرَ يَقْدِرُ mean?",
          "options": [
            "to have power",
            "to read",
            "to become big, old",
            "to be more, abundant"
          ],
          "correct": 0
        },
        {
          "title": "to have power (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَدَرَ يَقْدِرُ?",
          "options": [
            "قُدْرَةً",
            "قِرَاءَةً",
            "كِبَرًا",
            "كَثْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to read\"?",
          "options": [
            "قَرَأَ يَقْرَأُ",
            "كَبُرَ يَكْبُرُ",
            "كَثُرَ يَكْثُرُ",
            "كَذَبَ يَكْذِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to read",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَرَأَ يَقْرَأُ mean?",
          "options": [
            "to read",
            "to become big, old",
            "to be more, abundant",
            "to lie"
          ],
          "correct": 0
        },
        {
          "title": "to read (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَرَأَ يَقْرَأُ?",
          "options": [
            "قِرَاءَةً",
            "كِبَرًا",
            "كَثْرَةً",
            "كِذْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to become big, old",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become big, old\"?",
          "options": [
            "كَبُرَ يَكْبُرُ",
            "كَثُرَ يَكْثُرُ",
            "كَذَبَ يَكْذِبُ",
            "كَرُمَ يَكْرُمُ"
          ],
          "correct": 0
        },
        {
          "title": "to become big, old",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَبُرَ يَكْبُرُ mean?",
          "options": [
            "to become big, old",
            "to be more, abundant",
            "to lie",
            "to be noble"
          ],
          "correct": 0
        },
        {
          "title": "to become big, old (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَبُرَ يَكْبُرُ?",
          "options": [
            "كِبَرًا",
            "كَثْرَةً",
            "كِذْبًا",
            "كَرَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be more, abundant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be more, abundant\"?",
          "options": [
            "كَثُرَ يَكْثُرُ",
            "كَذَبَ يَكْذِبُ",
            "كَرُمَ يَكْرُمُ",
            "كَرِهَ يَكْرَهُ"
          ],
          "correct": 0
        },
        {
          "title": "to be more, abundant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَثُرَ يَكْثُرُ mean?",
          "options": [
            "to be more, abundant",
            "to lie",
            "to be noble",
            "to dislike"
          ],
          "correct": 0
        },
        {
          "title": "to be more, abundant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَثُرَ يَكْثُرُ?",
          "options": [
            "كَثْرَةً",
            "كِذْبًا",
            "كَرَامَةً",
            "كَرَاهَةً"
          ],
          "correct": 0
        },
        {
          "title": "to lie",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lie\"?",
          "options": [
            "كَذَبَ يَكْذِبُ",
            "كَرُمَ يَكْرُمُ",
            "كَرِهَ يَكْرَهُ",
            "كَسَبَ يَكْسِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to lie",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَذَبَ يَكْذِبُ mean?",
          "options": [
            "to lie",
            "to be noble",
            "to dislike",
            "to earn"
          ],
          "correct": 0
        },
        {
          "title": "to lie (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَبَ يَكْذِبُ?",
          "options": [
            "كِذْبًا",
            "كَرَامَةً",
            "كَرَاهَةً",
            "كَسْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to be noble",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be noble\"?",
          "options": [
            "كَرُمَ يَكْرُمُ",
            "كَرِهَ يَكْرَهُ",
            "كَسَبَ يَكْسِبُ",
            "لَبِثَ يَلْبَثُ"
          ],
          "correct": 0
        },
        {
          "title": "to be noble",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَرُمَ يَكْرُمُ mean?",
          "options": [
            "to be noble",
            "to dislike",
            "to earn",
            "to stay, remain"
          ],
          "correct": 0
        },
        {
          "title": "to be noble (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَرُمَ يَكْرُمُ?",
          "options": [
            "كَرَامَةً",
            "كَرَاهَةً",
            "كَسْبًا",
            "لُبْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to dislike",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to dislike\"?",
          "options": [
            "كَرِهَ يَكْرَهُ",
            "كَسَبَ يَكْسِبُ",
            "لَبِثَ يَلْبَثُ",
            "لَعَنَ يَلْعَنُ"
          ],
          "correct": 0
        },
        {
          "title": "to dislike",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَرِهَ يَكْرَهُ mean?",
          "options": [
            "to dislike",
            "to earn",
            "to stay, remain",
            "to curse"
          ],
          "correct": 0
        },
        {
          "title": "to dislike (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَرِهَ يَكْرَهُ?",
          "options": [
            "كَرَاهَةً",
            "كَسْبًا",
            "لُبْثًا",
            "لَعْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to earn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to earn\"?",
          "options": [
            "كَسَبَ يَكْسِبُ",
            "لَبِثَ يَلْبَثُ",
            "لَعَنَ يَلْعَنُ",
            "مَلَكَ يَمْلِكُ"
          ],
          "correct": 0
        },
        {
          "title": "to earn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَسَبَ يَكْسِبُ mean?",
          "options": [
            "to earn",
            "to stay, remain",
            "to curse",
            "to own, have the ability"
          ],
          "correct": 0
        },
        {
          "title": "to earn (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَسَبَ يَكْسِبُ?",
          "options": [
            "كَسْبًا",
            "لُبْثًا",
            "لَعْنًا",
            "مُلْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to stay, remain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to stay, remain\"?",
          "options": [
            "لَبِثَ يَلْبَثُ",
            "لَعَنَ يَلْعَنُ",
            "مَلَكَ يَمْلِكُ",
            "نَصَرَ يَنْصُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to stay, remain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبِثَ يَلْبَثُ mean?",
          "options": [
            "to stay, remain",
            "to curse",
            "to own, have the ability",
            "to help"
          ],
          "correct": 0
        },
        {
          "title": "to stay, remain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَبِثَ يَلْبَثُ?",
          "options": [
            "لُبْثًا",
            "لَعْنًا",
            "مُلْكًا",
            "نَصْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to curse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to curse\"?",
          "options": [
            "لَعَنَ يَلْعَنُ",
            "مَلَكَ يَمْلِكُ",
            "نَصَرَ يَنْصُرُ",
            "نَعِمَ يَنْعِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to curse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَعَنَ يَلْعَنُ mean?",
          "options": [
            "to curse",
            "to own, have the ability",
            "to help",
            "to live in comfort"
          ],
          "correct": 0
        },
        {
          "title": "to curse (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَعَنَ يَلْعَنُ?",
          "options": [
            "لَعْنًا",
            "مُلْكًا",
            "نَصْرًا",
            "نَعْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to own, have the ability",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to own, have the ability\"?",
          "options": [
            "مَلَكَ يَمْلِكُ",
            "نَصَرَ يَنْصُرُ",
            "نَعِمَ يَنْعِمُ",
            "نَفَعَ يَنْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to own, have the ability",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَلَكَ يَمْلِكُ mean?",
          "options": [
            "to own, have the ability",
            "to help",
            "to live in comfort",
            "to profit, benefit"
          ],
          "correct": 0
        },
        {
          "title": "to own, have the ability (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَلَكَ يَمْلِكُ?",
          "options": [
            "مُلْكًا",
            "نَصْرًا",
            "نَعْمَةً",
            "نَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to help",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to help\"?",
          "options": [
            "نَصَرَ يَنْصُرُ",
            "نَعِمَ يَنْعِمُ",
            "نَفَعَ يَنْفَعُ",
            "هَبَطَ يَهْبِطُ"
          ],
          "correct": 0
        },
        {
          "title": "to help",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَصَرَ يَنْصُرُ mean?",
          "options": [
            "to help",
            "to live in comfort",
            "to profit, benefit",
            "to descend"
          ],
          "correct": 0
        },
        {
          "title": "to help (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَصَرَ يَنْصُرُ?",
          "options": [
            "نَصْرًا",
            "نَعْمَةً",
            "نَفْعًا",
            "هُبُوْطًا"
          ],
          "correct": 0
        },
        {
          "title": "to live in comfort",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to live in comfort\"?",
          "options": [
            "نَعِمَ يَنْعِمُ",
            "نَفَعَ يَنْفَعُ",
            "هَبَطَ يَهْبِطُ",
            "بَصُرَ يَبْصُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to live in comfort",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَعِمَ يَنْعِمُ mean?",
          "options": [
            "to live in comfort",
            "to profit, benefit",
            "to descend",
            "to look"
          ],
          "correct": 0
        },
        {
          "title": "to live in comfort (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَعِمَ يَنْعِمُ?",
          "options": [
            "نَعْمَةً",
            "نَفْعًا",
            "هُبُوْطًا",
            "بَصِيْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to profit, benefit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to profit, benefit\"?",
          "options": [
            "نَفَعَ يَنْفَعُ",
            "هَبَطَ يَهْبِطُ",
            "بَصُرَ يَبْصُرُ",
            "بَعَثَ يَبْعَثُ"
          ],
          "correct": 0
        },
        {
          "title": "to profit, benefit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَفَعَ يَنْفَعُ mean?",
          "options": [
            "to profit, benefit",
            "to descend",
            "to look",
            "to send, to resurrect"
          ],
          "correct": 0
        },
        {
          "title": "to profit, benefit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَفَعَ يَنْفَعُ?",
          "options": [
            "نَفْعًا",
            "هُبُوْطًا",
            "بَصِيْرَةً",
            "بَعْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to descend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to descend\"?",
          "options": [
            "هَبَطَ يَهْبِطُ",
            "بَصُرَ يَبْصُرُ",
            "بَعَثَ يَبْعَثُ",
            "بَعُدَ يَبْعُدُ"
          ],
          "correct": 0
        },
        {
          "title": "to descend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَبَطَ يَهْبِطُ mean?",
          "options": [
            "to descend",
            "to look",
            "to send, to resurrect",
            "to be far"
          ],
          "correct": 0
        },
        {
          "title": "to descend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَبَطَ يَهْبِطُ?",
          "options": [
            "هُبُوْطًا",
            "بَصِيْرَةً",
            "بَعْثًا",
            "بُعْدًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

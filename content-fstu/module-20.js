// Module 20 — جُمْلَةُ الشَّرْطِ: the Conditional Sentence (From the Start,
// Unit 6, Part 3, pp. 571-588)
//
// Converted from content-fstu-new/unit6-lesson6..16.js. Same conversion
// pattern as module-04..19.js (see module-04.js header comment); continues
// module-19.js's l1..l5 (source lessons 1..5) within the same Unit 6.
// Covers all of Part 3: real conditionals (إِنْ + أَسْمَاءُ الشَّرْطِ) and
// unreal conditionals (لَوْ، لَوْلَا), including their special concessive
// (وَلَوْ/وَإِنْ) and pragmatic (request/wish) uses. Unit 6 has no
// unitN-summary.js per Part -- module-21.js's final "المراجعة" lesson,
// built from unit6-summary.js, reviews all of Unit 6 (Parts 1-6) at once.

export default {
  "id": "f-jumla-shart",
  "title": "جُمْلَةُ الشَّرْطِ",
  "heading": "اَلْوَحْدَةُ السَّادِسَةُ",
  "blurb": "اَلشَّرْط: the conditional sentence, its tools, real vs. unreal conditionals, and their special uses.",
  "lessons": [
    {
      "id": "l1",
      "title": "أركان الشرط",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "The three pieces of a conditional sentence",
          "lines": [
            {
              "html": "A conditional sentence is comprised of a conditional conjunction — words like if, when, whenever, whoever — and two clauses: a condition clause and a result clause.",
              "list": false
            },
            {
              "html": "In Arabic, the conditional conjunction is called أَدَاةُ الشَّرْطِ, the condition clause is called the شَرْطٌ, and the result clause is called the جَوَابُ الشَّرْطِ.",
              "list": false
            },
            {
              "html": "The book's illustration is in English: \"If you work hard, you will be successful.\" 'If' is the conditional conjunction, 'you work hard' is the شَرْطٌ, and 'you will be successful' is the جَوَابُ الشَّرْطِ.",
              "list": false
            },
            {
              "table": {
                "title": "The construction of a conditional sentence",
                "headers": [
                  "أَدَاةُ الشَّرْطِ",
                  "شَرْطٌ",
                  "جَوَابُ الشَّرْطِ"
                ],
                "rows": [
                  [
                    "the conjunction",
                    "the condition clause",
                    "the result clause"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What are the three pieces of a conditional sentence, and what are their Arabic names؟",
            "kind": "mcq",
            "options": [
              "أَدَاةُ الشَّرْطِ (conjunction), شَرْطٌ (condition clause), and جَوَابُ الشَّرْطِ (result clause)",
              "مُبْتَدَأٌ, خَبَرٌ, and نَعْتٌ",
              "نِدَاءٌ, حَرْفُ النِّدَاءِ, and مُنَادًى",
              "قَسَمٌ and جَوَابُ الْقَسَمِ only"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Conditional conjunctions — the two kinds",
          "lines": [
            {
              "html": "There are two types of conditional conjunctions: nouns, اِسْمُ الشَّرْطِ, and particles, حَرْفُ الشَّرْطِ. The term أَدَاةُ الشَّرْطِ is used to refer to both types.",
              "list": false
            },
            {
              "table": {
                "title": "أَسْمَاءُ الشَّرْطِ — the nine nouns",
                "headers": [
                  "Arabic",
                  "English"
                ],
                "rows": [
                  [
                    "مَنْ",
                    "whoever"
                  ],
                  [
                    "مَا",
                    "whatever"
                  ],
                  [
                    "أَيْنَ",
                    "wherever"
                  ],
                  [
                    "مَتَى",
                    "whenever"
                  ],
                  [
                    "أَيَّانَ",
                    "whenever"
                  ],
                  [
                    "كَيْفَ",
                    "however"
                  ],
                  [
                    "أَنَّى",
                    "from wherever, however"
                  ],
                  [
                    "كَمْ",
                    "however many"
                  ],
                  [
                    "أَيُّ",
                    "whichever"
                  ]
                ]
              }
            },
            {
              "html": "These nouns are also used as أَسْمَاءُ الاسْتِفْهَامِ — the same nine words that ask who, what, where, when, how and how many. That is worth holding on to, because it is the key to parsing them.",
              "list": false
            },
            {
              "html": "The أَسْمَاءُ الشَّرْطِ are عَامِلٌ; they render the مُضَارِع in both the condition and the result to be in the مَجْزُوْم state.",
              "list": false
            },
            {
              "table": {
                "title": "حُرُوْفُ الشَّرْطِ — the three particles",
                "headers": [
                  "Arabic",
                  "English",
                  "Governing?"
                ],
                "rows": [
                  [
                    "إِنْ",
                    "if",
                    "عَامِلٌ — both verbs become مَجْزُوْمٌ"
                  ],
                  [
                    "لَوْ",
                    "if",
                    "غَيْرُ عَامِلٍ"
                  ],
                  [
                    "لَوْلَا",
                    "if",
                    "غَيْرُ عَامِلٍ"
                  ]
                ]
              }
            },
            {
              "html": "So of the twelve أَدَوَات, ten are عَامِل — the nine nouns and إِنْ — and only لَوْ and لَوْلَا leave the verbs alone. That division is not accidental: as the next lessons show, إِنْ and the nouns build real conditionals, while لَوْ and لَوْلَا build unreal ones.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the two kinds of أَدَاةُ الشَّرْطِ, and which nine words double as both؟",
            "kind": "mcq",
            "options": [
              "اِسْمُ الشَّرْطِ (nouns) and حَرْفُ الشَّرْطِ (particles) — the nine أسماء الشرط are the same words as أَسْمَاءُ الِاسْتِفْهَامِ",
              "Only particles exist; there are no noun conjunctions",
              "Only nouns exist; there are no particle conjunctions",
              "The nine nouns are unrelated to the interrogative words"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The two types of conditional sentence",
          "lines": [
            {
              "table": {
                "title": "Types of conditional sentences",
                "headers": [
                  "Type",
                  "Meaning"
                ],
                "rows": [
                  [
                    "Real conditionals",
                    "conditions which may be met"
                  ],
                  [
                    "Unreal conditionals",
                    "conditions which cannot be met"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the difference between real and unreal conditionals؟",
            "kind": "mcq",
            "options": [
              "Real conditionals are conditions which may be met; unreal conditionals are conditions which cannot be met",
              "Real conditionals are always about the past; unreal are always about the future",
              "There is no meaningful difference between them",
              "Real conditionals never take a جَوَابٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Constructing real conditionals",
          "lines": [
            {
              "html": "Real conditionals are constructed using either of the following أَدَاةُ الشَّرْطِ: an اِسْمُ الشَّرْطِ, or the حَرْفُ الشَّرْطِ إِنْ.",
              "list": false
            },
            {
              "html": "1. The أَسْمَاءُ الشَّرْطِ.",
              "list": false
            },
            {
              "html": "مَنْ يَجْتَهِدْ يَنْجَحْ — Whoever works hard succeeds.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The tarkeeb of the أَسْمَاءُ الشَّرْطِ will be the same as أَسْمَاءُ الاسْتِفْهَامِ (see p. 428). Here مَنْ takes the slot it would take in a question — a مُبْتَدَأٌ — and the verb after it is its خَبَرٌ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَنْ يَجْتَهِدْ يَنْجَحْ",
                "translation": "Whoever works hard succeeds.",
                "cells": [
                  "مَنْ",
                  "يَجْتَهِدْ",
                  "يَنْجَحْ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "جَوَابُ الشَّرْطِ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "خَبَرٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Book slip: the diagram on p. 573 labels يَنْجَحْ as فِعْلٌ وَفَاعِلٌ (أَنْتَ). The hidden doer in مَنْ يَجْتَهِدْ يَنْجَحْ is هُوَ, as the box under يَجْتَهِدْ correctly shows; the (أَنْتَ) has been carried over from the إِنْ تَجْتَهِدْ تَنْجَحْ diagram immediately below it. The label is reproduced here as printed.",
              "list": false
            },
            {
              "html": "2. The حَرْفُ الشَّرْطِ إِنْ.",
              "list": false
            },
            {
              "html": "إِنْ تَجْتَهِدْ تَنْجَحْ — If you work hard, you will succeed.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In tarkeeb, إِنْ is not labelled.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنْ تَجْتَهِدْ تَنْجَحْ",
                "translation": "If you work hard, you will succeed.",
                "cells": [
                  "إِنْ",
                  "تَجْتَهِدْ",
                  "تَنْجَحْ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "جَوَابُ الشَّرْطِ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice the difference the two أَدَوَات make to the diagram. An اِسْمُ الشَّرْطِ is a noun, so it must fill a slot — مُبْتَدَأٌ, مَفْعُوْلٌ بِهِ, مَفْعُوْلٌ فِيْهِ, whatever the sense of the sentence requires. A حَرْفٌ fills no slot at all, which is why إِنْ is written into the diagram but left without a label of its own.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In مَنْ يَجْتَهِدْ يَنْجَحْ, what slot does the اِسْمُ الشَّرْطِ مَنْ fill, and why does إِنْ in a similar sentence get no such label؟",
            "kind": "mcq",
            "options": [
              "مَنْ fills the مُبْتَدَأٌ slot because it is a noun; إِنْ is a حَرْفٌ and fills no slot at all, so it is written into the diagram unlabelled",
              "Both مَنْ and إِنْ are always the فَاعِلٌ",
              "مَنْ is never given a slot; only إِنْ is",
              "Neither ever receives a slot in the diagram"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The conditional sentence and its conjunctions",
        "rows": [
          {
            "label": "The three pieces",
            "arabic": "أَدَاةُ الشَّرْطِ + شَرْطٌ + جَوَابُ الشَّرْطِ",
            "meaning": "conjunction, condition, result"
          },
          {
            "label": "Nouns",
            "arabic": "مَنْ، مَا، أَيْنَ، مَتَى، أَيَّانَ، كَيْفَ، أَنَّى، كَمْ، أَيُّ",
            "meaning": "nine — the same words as the أَسْمَاءُ الاسْتِفْهَام"
          },
          {
            "label": "Particles",
            "arabic": "إِنْ، لَوْ، لَوْلَا",
            "meaning": "three"
          },
          {
            "label": "عَامِل",
            "arabic": "اَلْأَسْمَاءُ التِّسْعَةُ وَإِنْ",
            "meaning": "both verbs become مَجْزُوْمٌ"
          },
          {
            "label": "غَيْرُ عَامِل",
            "arabic": "لَوْ وَلَوْلَا",
            "meaning": "they leave the verbs alone"
          },
          {
            "label": "Real conditionals",
            "arabic": "بِاسْمِ الشَّرْطِ أَوْ بِإِنْ",
            "meaning": "conditions which may be met"
          }
        ]
      },
      "quiz": [
        {
          "q": "What are the Arabic names for the three pieces of a conditional sentence?",
          "options": [
            "أَدَاةُ الشَّرْطِ، شَرْطٌ، جَوَابُ الشَّرْطِ",
            "قَسَمٌ، شَرْطٌ، جَوَابٌ",
            "نِدَاءٌ، شَرْطٌ، جَزَاءٌ",
            "مُبْتَدَأٌ، خَبَرٌ، نَعْتٌ"
          ],
          "correct": 0,
          "explanation": "The conjunction, the condition clause and the result clause."
        },
        {
          "q": "How many أَسْمَاءُ الشَّرْطِ are there?",
          "options": [
            "three",
            "six",
            "nine",
            "twelve"
          ],
          "correct": 2,
          "explanation": "مَنْ، مَا، أَيْنَ، مَتَى، أَيَّانَ، كَيْفَ، أَنَّى، كَمْ، أَيُّ."
        },
        {
          "q": "Besides building conditionals, what else are the أَسْمَاءُ الشَّرْطِ (مَنْ، مَا، أَيْنَ…) commonly used as?",
          "options": [
            "أَسْمَاءُ الْمَوْصُوْلِ",
            "أَسْمَاءُ الْإِشَارَةِ",
            "أَسْمَاءُ التَّفْضِيْلِ",
            "أَسْمَاءُ الاسْتِفْهَامِ"
          ],
          "correct": 3,
          "explanation": "And their tarkeeb follows the same pattern as when they ask a question."
        },
        {
          "q": "Which of the three حُرُوْفُ الشَّرْطِ is عَامِلٌ?",
          "options": [
            "لَوْ",
            "إِنْ",
            "لَوْلَا",
            "all three"
          ],
          "correct": 1,
          "explanation": "إِنْ makes both verbs مَجْزُوْمٌ; لَوْ and لَوْلَا do not."
        },
        {
          "q": "Which أَدَوَات are used to build a real conditional?",
          "options": [
            "an اِسْمُ الشَّرْطِ, or the particle إِنْ",
            "لَوْ and لَوْلَا only",
            "any of the twelve",
            "only إِنْ"
          ],
          "correct": 0,
          "explanation": "لَوْ and لَوْلَا belong to the unreal conditional."
        },
        {
          "q": "Why is إِنْ left unlabelled in tarkeeb?",
          "options": [
            "Because it is optional",
            "Because it is a mistake in the book",
            "Because it is a حَرْفٌ and so fills no slot",
            "Because it is مَجْزُوْمٌ"
          ],
          "correct": 2,
          "explanation": "An اِسْمُ الشَّرْطِ, being a noun, must occupy a slot; a particle need not."
        }
      ],
      "bank": [
        {
          "title": "مَنْ يَجْتَهِدْ يَنْجَحْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 573)",
          "sentence": "مَنْ يَجْتَهِدْ يَنْجَحْ",
          "translation": "Whoever works hard succeeds.",
          "cells": [
            "مَنْ",
            "يَجْتَهِدْ",
            "يَنْجَحْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "خَبَرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ تَجْتَهِدْ تَنْجَحْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 573)",
          "sentence": "إِنْ تَجْتَهِدْ تَنْجَحْ",
          "translation": "If you work hard, you will succeed.",
          "cells": [
            "إِنْ",
            "تَجْتَهِدْ",
            "تَنْجَحْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "أَنَّى تَكُنْ يَأْتِكَ الْمَوْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 2",
          "sentence": "أَنَّى تَكُنْ يَأْتِكَ الْمَوْتُ",
          "translation": "Wherever you may be, death will come to you.",
          "cells": [
            "أَنَّى",
            "تَكُنْ",
            "يَأْتِكَ",
            "الْمَوْتُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "خَبَرُ كَانَ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "كَيْفَ تُعَامِلُوا النَّاسَ يُعَامِلُوْكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 6",
          "sentence": "كَيْفَ تُعَامِلُوا النَّاسَ يُعَامِلُوْكُمْ",
          "translation": "However you treat people, they will treat you.",
          "cells": [
            "كَيْفَ",
            "تُعَامِلُوا",
            "النَّاسَ",
            "يُعَامِلُوْكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَالٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أَيْنَ تَعْمَلْ يَكْتُبْهُ اللهُ وَيُحَاسِبْكَ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 8",
          "sentence": "أَيْنَ تَعْمَلْ يَكْتُبْهُ اللهُ وَيُحَاسِبْكَ بِهِ",
          "translation": "Wherever you act, Allah records it and will call you to account for it.",
          "cells": [
            "أَيْنَ",
            "تَعْمَلْ",
            "يَكْتُبْهُ",
            "اللهُ",
            "وَيُحَاسِبْكَ بِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جُمْلَةٌ مَعْطُوْفَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "كَمْ آيَةً يَحْفَظْ طَالِبٌ يَسْمَعْهُ الْمُعَلِّمُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 9",
          "sentence": "كَمْ آيَةً يَحْفَظْ طَالِبٌ يَسْمَعْهُ الْمُعَلِّمُ",
          "translation": "However many verses a student memorises, the teacher listens to him.",
          "cells": [
            "كَمْ",
            "آيَةً",
            "يَحْفَظْ",
            "طَالِبٌ",
            "يَسْمَعْهُ",
            "الْمُعَلِّمُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "تَمْيِيْزٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أَيَّ عِلْمٍ مِنْ عُلُوْمِ الْإِسْلَامِ تَطْلُبْ يَنْفَعْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 14",
          "sentence": "أَيَّ عِلْمٍ مِنْ عُلُوْمِ الْإِسْلَامِ تَطْلُبْ يَنْفَعْكَ",
          "translation": "Whichever of the sciences of Islam you seek will benefit you.",
          "cells": [
            "أَيَّ",
            "عِلْمٍ",
            "مِنْ عُلُوْمِ الْإِسْلَامِ",
            "تَطْلُبْ",
            "يَنْفَعْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا تُنْفِقِيْ فِيْ سَبِيْلِ اللهِ يُكْتَبْ وَتُؤْجَرِيْ عَلَيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 15",
          "sentence": "مَا تُنْفِقِيْ فِيْ سَبِيْلِ اللهِ يُكْتَبْ وَتُؤْجَرِيْ عَلَيْهِ",
          "translation": "Whatever you (f) spend in the path of Allah is recorded, and you are rewarded for it.",
          "cells": [
            "مَا",
            "تُنْفِقِيْ",
            "فِيْ سَبِيْلِ اللهِ",
            "يُكْتَبْ",
            "وَتُؤْجَرِيْ عَلَيْهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْهُوْلٌ وَنَائِبُ الْفَاعِلِ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جُمْلَةٌ مَعْطُوْفَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أَيَّانَ يُبْعَثُوْا مِنَ الْقُبُوْرِ يُحَاسَبُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 20",
          "sentence": "أَيَّانَ يُبْعَثُوْا مِنَ الْقُبُوْرِ يُحَاسَبُوْا",
          "translation": "Whenever they are raised from the graves, they will be brought to account.",
          "cells": [
            "أَيَّانَ",
            "يُبْعَثُوْا",
            "مِنَ الْقُبُوْرِ",
            "يُحَاسَبُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَجْهُوْلٌ وَنَائِبُ الْفَاعِلِ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْهُوْلٌ ثَانٍ وَنَائِبُ الْفَاعِلِ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "فَاعِلٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "مَتَى تَحْسُدُوا النَّاسَ عَلَى مَا آتَاهُمُ اللهُ لَا تَشْكُرُوْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 21",
          "sentence": "مَتَى تَحْسُدُوا النَّاسَ عَلَى مَا آتَاهُمُ اللهُ لَا تَشْكُرُوْهُ",
          "translation": "Whenever you envy people for what Allah has given them, you will not be grateful to Him.",
          "cells": [
            "مَتَى",
            "تَحْسُدُوا",
            "النَّاسَ",
            "عَلَى مَا آتَاهُمُ اللهُ",
            "لَا تَشْكُرُوْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In إِنْ تَشْكُرُوا اللهَ يَزِدْكُمْ, what state are the two verbs in?",
          "options": [
            "both مَرْفُوْعٌ",
            "both مَنْصُوْبٌ",
            "both مَجْزُوْمٌ",
            "the first مَجْزُوْمٌ, the second مَرْفُوْعٌ"
          ],
          "correct": 2,
          "explanation": "إِنْ is عَامِلٌ over both the شَرْط and the جَوَاب."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 9",
          "kind": "mcq",
          "prompt": "In كَمْ آيَةً يَحْفَظْ طَالِبٌ يَسْمَعْهُ الْمُعَلِّمُ, why is آيَةً مَنْصُوْبَة?",
          "options": [
            "Because it is the مَفْعُوْلٌ بِهِ of يَحْفَظْ",
            "Because it is a تَمْيِيْزٌ after كَمْ",
            "Because it is a حَالٌ",
            "Because كَمْ causes naṣb"
          ],
          "correct": 1,
          "explanation": "كَمْ takes a singular مَنْصُوْب تَمْيِيْز, exactly as in a question."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 14",
          "kind": "mcq",
          "prompt": "In أَيَّ عِلْمٍ مِنْ عُلُوْمِ الْإِسْلَامِ تَطْلُبْ يَنْفَعْكَ, what is عِلْمٍ?",
          "options": [
            "a تَمْيِيْزٌ",
            "the مَفْعُوْلٌ بِهِ",
            "the مُضَافٌ إِلَيْهِ of أَيَّ",
            "a نَعْتٌ"
          ],
          "correct": 2,
          "explanation": "أَيُّ is always a مُضَافٌ, whether it asks or conditions."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In كَيْفَ تُعَامِلُوا النَّاسَ يُعَامِلُوْكُمْ, which slot does كَيْفَ fill?",
          "options": [
            "مُبْتَدَأٌ",
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 1,
          "explanation": "'In whatever manner' — the same slot كَيْفَ fills as a question word."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 8",
          "kind": "mcq",
          "prompt": "In أَيْنَ تَعْمَلْ يَكْتُبْهُ اللهُ, which slot does أَيْنَ fill?",
          "options": [
            "مَفْعُوْلٌ فِيْهِ of place",
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "'Wherever you act' — a place adverb."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 2",
          "kind": "mcq",
          "prompt": "In أَنَّى تَكُنْ يَأْتِكَ الْمَوْتُ, what is أَنَّى?",
          "options": [
            "the اِسْمُ كَانَ",
            "the خَبَرُ كَانَ, brought forward",
            "a حَرْفُ شَرْطٍ",
            "the فَاعِلٌ of يَأْتِ"
          ],
          "correct": 1,
          "explanation": "'Wherever you may be' — كَانَ needs a خَبَر, and أَنَّى supplies it."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 15",
          "kind": "mcq",
          "prompt": "In مَا تُنْفِقِيْ فِيْ سَبِيْلِ اللهِ يُكْتَبْ, what shows تُنْفِقِيْ is مَجْزُوْمَة?",
          "options": [
            "the kasrah at the end",
            "the dropped nūn of the feminine-addressee ending",
            "the sukūn on the last letter",
            "nothing shows it"
          ],
          "correct": 1,
          "explanation": "تُنْفِقِيْنَ becomes تُنْفِقِيْ — the nūn is the jazm marker for the five verbs."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 20",
          "kind": "mcq",
          "prompt": "In أَيَّانَ يُبْعَثُوْا مِنَ الْقُبُوْرِ يُحَاسَبُوْا, what is the voice of both verbs?",
          "options": [
            "both مَعْلُوْمٌ",
            "both مَجْهُوْلٌ",
            "the first مَجْهُوْلٌ, the second مَعْلُوْمٌ",
            "neither is a verb"
          ],
          "correct": 1,
          "explanation": "'Whenever they are raised… they will be brought to account.'"
        },
        {
          "title": "condition",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"condition\"?",
          "options": [
            "شَرْطٌ",
            "قَبْرٌ",
            "فَضْلٌ",
            "نَجَحَ يَنْجَحُ"
          ],
          "correct": 0
        },
        {
          "title": "condition",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرْطٌ mean?",
          "options": [
            "condition",
            "grave",
            "bounty, favour",
            "to succeed"
          ],
          "correct": 0
        },
        {
          "title": "condition (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَرْطٌ?",
          "options": [
            "شُرُوْطٌ",
            "آيَاتٌ",
            "قُبُوْرٌ",
            "أَدَوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "tool, particle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tool, particle\"?",
          "options": [
            "أَدَاةٌ",
            "آيَةٌ",
            "اِجْتَهَدَ يَجْتَهِدُ",
            "حَسَدَ يَحْسُدُ"
          ],
          "correct": 0
        },
        {
          "title": "tool, particle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَاةٌ mean?",
          "options": [
            "tool, particle",
            "verse",
            "to strive",
            "to envy"
          ],
          "correct": 0
        },
        {
          "title": "tool, particle (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَدَاةٌ?",
          "options": [
            "أَدَوَاتٌ",
            "شُرُوْطٌ",
            "آيَاتٌ",
            "قُبُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "death",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"death\"?",
          "options": [
            "مَوْتٌ",
            "فَضْلٌ",
            "نَجَحَ يَنْجَحُ",
            "بَعَثَ يَبْعَثُ"
          ],
          "correct": 0
        },
        {
          "title": "death",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَوْتٌ mean?",
          "options": [
            "death",
            "bounty, favour",
            "to succeed",
            "to resurrect, send forth"
          ],
          "correct": 0
        },
        {
          "title": "grave",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"grave\"?",
          "options": [
            "قَبْرٌ",
            "اِجْتَهَدَ يَجْتَهِدُ",
            "حَسَدَ يَحْسُدُ",
            "اِعْتَصَمَ يَعْتَصِمُ"
          ],
          "correct": 0
        },
        {
          "title": "grave",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَبْرٌ mean?",
          "options": [
            "grave",
            "to strive",
            "to envy",
            "to hold fast"
          ],
          "correct": 0
        },
        {
          "title": "grave (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَبْرٌ?",
          "options": [
            "قُبُوْرٌ",
            "آيَاتٌ",
            "أَدَوَاتٌ",
            "شُرُوْطٌ"
          ],
          "correct": 0
        },
        {
          "title": "verse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"verse\"?",
          "options": [
            "آيَةٌ",
            "نَجَحَ يَنْجَحُ",
            "بَعَثَ يَبْعَثُ",
            "شَرْطٌ"
          ],
          "correct": 0
        },
        {
          "title": "verse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آيَةٌ mean?",
          "options": [
            "verse",
            "to succeed",
            "to resurrect, send forth",
            "condition"
          ],
          "correct": 0
        },
        {
          "title": "verse (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of آيَةٌ?",
          "options": [
            "آيَاتٌ",
            "شُرُوْطٌ",
            "قُبُوْرٌ",
            "أَدَوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "bounty, favour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bounty, favour\"?",
          "options": [
            "فَضْلٌ",
            "حَسَدَ يَحْسُدُ",
            "اِعْتَصَمَ يَعْتَصِمُ",
            "أَدَاةٌ"
          ],
          "correct": 0
        },
        {
          "title": "bounty, favour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَضْلٌ mean?",
          "options": [
            "bounty, favour",
            "to envy",
            "to hold fast",
            "tool, particle"
          ],
          "correct": 0
        },
        {
          "title": "to strive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to strive\"?",
          "options": [
            "اِجْتَهَدَ يَجْتَهِدُ",
            "بَعَثَ يَبْعَثُ",
            "شَرْطٌ",
            "مَوْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to strive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتَهَدَ يَجْتَهِدُ mean?",
          "options": [
            "to strive",
            "to resurrect, send forth",
            "condition",
            "death"
          ],
          "correct": 0
        },
        {
          "title": "to strive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِجْتَهَدَ يَجْتَهِدُ?",
          "options": [
            "اِجْتِهَادًا",
            "نَجَاحًا",
            "بَعْثًا",
            "حَسَدًا"
          ],
          "correct": 0
        },
        {
          "title": "to succeed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to succeed\"?",
          "options": [
            "نَجَحَ يَنْجَحُ",
            "اِعْتَصَمَ يَعْتَصِمُ",
            "أَدَاةٌ",
            "قَبْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to succeed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَجَحَ يَنْجَحُ mean?",
          "options": [
            "to succeed",
            "to hold fast",
            "tool, particle",
            "grave"
          ],
          "correct": 0
        },
        {
          "title": "to succeed (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَجَحَ يَنْجَحُ?",
          "options": [
            "نَجَاحًا",
            "حَسَدًا",
            "اِعْتِصَامًا",
            "اِجْتِهَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to envy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to envy\"?",
          "options": [
            "حَسَدَ يَحْسُدُ",
            "شَرْطٌ",
            "مَوْتٌ",
            "آيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to envy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَسَدَ يَحْسُدُ mean?",
          "options": [
            "to envy",
            "condition",
            "death",
            "verse"
          ],
          "correct": 0
        },
        {
          "title": "to envy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَسَدَ يَحْسُدُ?",
          "options": [
            "حَسَدًا",
            "بَعْثًا",
            "اِجْتِهَادًا",
            "نَجَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to resurrect, send forth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to resurrect, send forth\"?",
          "options": [
            "بَعَثَ يَبْعَثُ",
            "أَدَاةٌ",
            "قَبْرٌ",
            "فَضْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to resurrect, send forth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعَثَ يَبْعَثُ mean?",
          "options": [
            "to resurrect, send forth",
            "tool, particle",
            "grave",
            "bounty, favour"
          ],
          "correct": 0
        },
        {
          "title": "to resurrect, send forth (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَعَثَ يَبْعَثُ?",
          "options": [
            "بَعْثًا",
            "اِعْتِصَامًا",
            "نَجَاحًا",
            "اِجْتِهَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to hold fast",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hold fast\"?",
          "options": [
            "اِعْتَصَمَ يَعْتَصِمُ",
            "مَوْتٌ",
            "آيَةٌ",
            "اِجْتَهَدَ يَجْتَهِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to hold fast",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِعْتَصَمَ يَعْتَصِمُ mean?",
          "options": [
            "to hold fast",
            "death",
            "verse",
            "to strive"
          ],
          "correct": 0
        },
        {
          "title": "to hold fast (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِعْتَصَمَ يَعْتَصِمُ?",
          "options": [
            "اِعْتِصَامًا",
            "اِجْتِهَادًا",
            "حَسَدًا",
            "نَجَاحًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "الشرط الحقيقي",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "Two kinds of real conditional",
          "lines": [
            {
              "html": "There are two types of real conditionals: the zero conditional and the first conditional. The Arabic is written the same way for both; it is the English that must choose.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Since Arabic writes zero and first conditionals identically, what decides which English translation to use؟",
            "kind": "mcq",
            "options": [
              "Context — whether the result describes a general truth (zero) or a specific future possibility (first)",
              "The gender of the verb",
              "Whether إِنْ or an اِسْمُ الشَّرْطِ is used",
              "There is no way to tell; both are always translated the same"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Zero conditionals",
          "lines": [
            {
              "html": "General truths and situations that occur all the time are represented by zero conditionals. The present tense is used in both the condition and the result clause.",
              "list": false
            },
            {
              "html": "The book's illustration is in English: \"If you work hard, you are successful.\"",
              "list": false
            },
            {
              "html": "This is the reading to take for proverbs, statements of religious law, and anything phrased as a rule about how things are: مَنْ يَجْتَهِدْ يَنْجَحْ — 'whoever works hard succeeds', not 'will succeed'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What tense pattern marks a zero conditional in English, and what does it express؟",
            "kind": "mcq",
            "options": [
              "Present tense in both clauses, expressing general truths ('whoever works hard succeeds')",
              "Past tense in both clauses, expressing history",
              "Present then future, expressing a specific future possibility",
              "Future tense in both clauses"
            ],
            "correct": 0
          }
        },
        {
          "heading": "First conditionals",
          "lines": [
            {
              "html": "Future situations which may occur in the future are represented by first conditionals. The present tense is used in the condition clause, and the future tense with the infinitive in the result clause.",
              "list": false
            },
            {
              "html": "The book's illustration is in English: \"If you work hard, you will be successful.\"",
              "list": false
            },
            {
              "html": "The context will help determine the meaning of the Arabic sentence. إِنْ تُؤْمِنْ بِاللهِ تَدْخُلِ الْجَنَّةَ is naturally a first conditional — 'you will enter Paradise' — because entering Paradise is a future event; إِنْ تَظْلِمِ النَّاسَ يُعَذِّبْكَ اللهُ is likewise future. But إِنْ تَحْفَظْ لِسَانَكَ تَسْلَمْ works either way.",
              "list": false
            },
            {
              "table": {
                "title": "Zero and first conditionals — the book's summary",
                "headers": [
                  "Type",
                  "أَدَاة",
                  "شَرْطٌ (Condition)",
                  "جَوَابُ الشَّرْطِ (Result)"
                ],
                "rows": [
                  [
                    "Zero (General Truths)",
                    "If",
                    "you work hard (Present)",
                    "you are successful (Present)"
                  ],
                  [
                    "First (Future Possible)",
                    "If",
                    "you work hard (Present)",
                    "you will be successful (Future)"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What tense pattern marks a first conditional in English؟",
            "kind": "mcq",
            "options": [
              "Present tense in the condition, future tense in the result",
              "Past tense in both clauses",
              "Present tense in both clauses",
              "Future tense in the condition, present in the result"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Notes on the comma",
          "lines": [
            {
              "html": "If the condition clause is mentioned first, a comma is placed between the two clauses. If the result clause is mentioned first, the comma will be omitted.",
              "list": false
            },
            {
              "html": "The book's two illustrations, in English: \"If you work hard, you will be successful.\" and \"You will be successful if you work hard.\"",
              "list": false
            },
            {
              "html": "This is a point of English punctuation, not of Arabic grammar, but it matters for the translations Habib will be writing out. Arabic almost always puts the شَرْط first, so the comma will almost always be needed.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When is a comma required between the شَرْط and جَوَاب clauses in the English translation؟",
            "kind": "mcq",
            "options": [
              "When the condition clause is mentioned first (which is almost always the case in Arabic); no comma is needed when the result comes first",
              "Always, regardless of order",
              "Never, regardless of order",
              "Only when لَوْ is used"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Translating a real conditional",
        "rows": [
          {
            "label": "Zero",
            "arabic": "لِلْحَقَائِقِ الْعَامَّةِ",
            "meaning": "general truths — present in both clauses"
          },
          {
            "label": "Example",
            "arabic": "مَنْ يَجْتَهِدْ يَنْجَحْ",
            "meaning": "whoever works hard succeeds"
          },
          {
            "label": "First",
            "arabic": "لِمَا قَدْ يَقَعُ فِي الْمُسْتَقْبَلِ",
            "meaning": "future possibility — present, then 'will'"
          },
          {
            "label": "Example",
            "arabic": "إِنْ تُؤْمِنْ بِاللهِ تَدْخُلِ الْجَنَّةَ",
            "meaning": "if you believe, you will enter Paradise"
          },
          {
            "label": "Deciding",
            "arabic": "اَلسِّيَاقُ",
            "meaning": "context decides which of the two is meant"
          },
          {
            "label": "Punctuation",
            "arabic": "اَلْفَاصِلَةُ",
            "meaning": "comma when the condition comes first; none when it comes second"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does a zero conditional represent?",
          "options": [
            "future possibilities",
            "general truths and situations that occur all the time",
            "impossible conditions",
            "past events"
          ],
          "correct": 1,
          "explanation": "Proverbs and standing rules take this reading."
        },
        {
          "q": "Which tenses does the English zero conditional use?",
          "options": [
            "present, then future",
            "past, then present",
            "future, then present",
            "present in both clauses"
          ],
          "correct": 3,
          "explanation": "'If you work hard, you are successful.'"
        },
        {
          "q": "Which tenses does the English first conditional use?",
          "options": [
            "present in both",
            "past in both",
            "present in the condition, future in the result",
            "future in both"
          ],
          "correct": 2,
          "explanation": "'If you work hard, you will be successful.'"
        },
        {
          "q": "How is the Arabic written differently for the two types?",
          "options": [
            "It is not — the context decides the meaning",
            "The zero uses إِنْ, the first uses مَنْ",
            "The first uses سَوْفَ in the result",
            "The zero uses the مَاضِي"
          ],
          "correct": 0,
          "explanation": "The book says explicitly: 'The context will help determine the meaning of the Arabic sentence.'"
        },
        {
          "q": "When is a comma placed between the two clauses?",
          "options": [
            "always",
            "when the condition clause is mentioned first",
            "when the result clause is mentioned first",
            "never"
          ],
          "correct": 1,
          "explanation": "'You will be successful if you work hard' takes no comma."
        },
        {
          "q": "Why does the comma rule matter so often in practice?",
          "options": [
            "Because Arabic has no punctuation",
            "Because the جَوَاب is always first",
            "Because إِنْ demands it",
            "Because Arabic almost always puts the شَرْط first"
          ],
          "correct": 3,
          "explanation": "So the English translation will nearly always need the comma."
        }
      ],
      "bank": [
        {
          "title": "إِنْ تَشْكُرُوا اللهَ يَزِدْكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 1",
          "sentence": "إِنْ تَشْكُرُوا اللهَ يَزِدْكُمْ",
          "translation": "If you are grateful to Allah, He will increase you.",
          "cells": [
            "إِنْ",
            "تَشْكُرُوا",
            "اللهَ",
            "يَزِدْكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ تُؤْمِنْ بِاللهِ تَدْخُلِ الْجَنَّةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 3",
          "sentence": "إِنْ تُؤْمِنْ بِاللهِ تَدْخُلِ الْجَنَّةَ",
          "translation": "If you believe in Allah, you will enter Paradise.",
          "cells": [
            "إِنْ",
            "تُؤْمِنْ",
            "بِاللهِ",
            "تَدْخُلِ",
            "الْجَنَّةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنْ تَدْعُ اللهَ يَسْتَجِبْ دُعَاءَكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 4",
          "sentence": "إِنْ تَدْعُ اللهَ يَسْتَجِبْ دُعَاءَكَ",
          "translation": "If you call upon Allah, He will answer your supplication.",
          "cells": [
            "إِنْ",
            "تَدْعُ",
            "اللهَ",
            "يَسْتَجِبْ",
            "دُعَاءَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَاللهِ إِنْ تَحْفَظْ لِسَانَكَ تَسْلَمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 5",
          "sentence": "وَاللهِ إِنْ تَحْفَظْ لِسَانَكَ تَسْلَمْ",
          "translation": "By Allah, if you guard your tongue you will be safe.",
          "cells": [
            "وَاللهِ",
            "إِنْ",
            "تَحْفَظْ",
            "لِسَانَكَ",
            "تَسْلَمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "قَسَمٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ لِفِعْلٍ مَحْذُوْفٍ (أُقْسِمُ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ تَسْتَغْفِرِ اللهَ يَغْفِرْ لَكَ ذُنُوْبَكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 7",
          "sentence": "إِنْ تَسْتَغْفِرِ اللهَ يَغْفِرْ لَكَ ذُنُوْبَكَ",
          "translation": "If you seek Allah's forgiveness, He will forgive you your sins.",
          "cells": [
            "إِنْ",
            "تَسْتَغْفِرِ",
            "اللهَ",
            "يَغْفِرْ",
            "لَكَ",
            "ذُنُوْبَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَاللهِ إِنْ تَصْدُقِ النَّاسَ يُبَارِكِ اللهُ فِيْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 10",
          "sentence": "وَاللهِ إِنْ تَصْدُقِ النَّاسَ يُبَارِكِ اللهُ فِيْكَ",
          "translation": "By Allah, if you are truthful with people, Allah will bless you.",
          "cells": [
            "وَاللهِ",
            "إِنْ",
            "تَصْدُقِ",
            "النَّاسَ",
            "يُبَارِكِ",
            "اللهُ فِيْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "قَسَمٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ لِفِعْلٍ مَحْذُوْفٍ (أُقْسِمُ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فَاعِلٌ مَعَ غَيْرِ الصَّرِيْحِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ يَشَأْ يَرْحَمْكُمْ أَوْ إِنْ يَشَأْ يُعَذِّبْكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 12",
          "sentence": "إِنْ يَشَأْ يَرْحَمْكُمْ أَوْ إِنْ يَشَأْ يُعَذِّبْكُمْ",
          "translation": "If He wills, He will have mercy on you; or if He wills, He will punish you.",
          "cells": [
            "إِنْ",
            "يَشَأْ",
            "يَرْحَمْكُمْ",
            "أَوْ",
            "إِنْ يَشَأْ يُعَذِّبْكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ الشَّرْطِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جُمْلَةٌ مَعْطُوْفَةٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَإِنْ تَدْعُوْهُمْ إِلَى الْهُدَى لَا يَسْمَعُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 13",
          "sentence": "وَإِنْ تَدْعُوْهُمْ إِلَى الْهُدَى لَا يَسْمَعُوْا",
          "translation": "And if you call them to guidance, they will not hear.",
          "cells": [
            "وَ",
            "إِنْ",
            "تَدْعُوْهُمْ",
            "إِلَى الْهُدَى",
            "لَا يَسْمَعُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ تَعْتَصِمُوْا بِكِتَابِ اللهِ وَسُنَّةِ رَسُوْلِهِ تَهْتَدُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 17",
          "sentence": "إِنْ تَعْتَصِمُوْا بِكِتَابِ اللهِ وَسُنَّةِ رَسُوْلِهِ تَهْتَدُوْا",
          "translation": "If you hold fast to the Book of Allah and the Sunnah of His Messenger ﷺ, you will be guided.",
          "cells": [
            "إِنْ",
            "تَعْتَصِمُوْا",
            "بِكِتَابِ اللهِ",
            "وَسُنَّةِ رَسُوْلِهِ",
            "تَهْتَدُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَمَنْ يُؤْمِنْ بِاللهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ اللهُ جَنَّاتٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 3), item 22",
          "sentence": "وَمَنْ يُؤْمِنْ بِاللهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ اللهُ جَنَّاتٍ",
          "translation": "And whoever believes in Allah and does righteousness, Allah will admit him into gardens.",
          "cells": [
            "وَمَنْ",
            "يُؤْمِنْ بِاللهِ",
            "وَيَعْمَلْ صَالِحًا",
            "يُدْخِلْهُ",
            "اللهُ",
            "جَنَّاتٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "خَبَرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جُمْلَةٌ مَعْطُوْفَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "Is إِنْ تُؤْمِنْ بِاللهِ تَدْخُلِ الْجَنَّةَ better read as a zero or a first conditional?",
          "options": [
            "zero — it is a general truth",
            "first — entering Paradise is a future event",
            "neither; it is unreal",
            "both readings are equally natural"
          ],
          "correct": 1,
          "explanation": "Context decides, and the result here lies in the future."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 4",
          "kind": "mcq",
          "prompt": "In إِنْ تَدْعُ اللهَ يَسْتَجِبْ دُعَاءَكَ, what shows تَدْعُ is مَجْزُوْم?",
          "options": [
            "the sukūn on the ع",
            "the dropped wāw of تَدْعُو",
            "the kasrah",
            "nothing shows it"
          ],
          "correct": 1,
          "explanation": "A verb ending in a weak letter drops it for jazm."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 7",
          "kind": "mcq",
          "prompt": "In إِنْ تَسْتَغْفِرِ اللهَ, why does تَسْتَغْفِرْ end in a kasrah?",
          "options": [
            "Because it is مَجْرُوْرٌ",
            "Because it is not مَجْزُوْمٌ after all",
            "To avoid two sukūns meeting with the ال of اَللهَ",
            "Because إِنْ requires a kasrah"
          ],
          "correct": 2,
          "explanation": "A standard adjustment; the verb is still مَجْزُوْمٌ."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 5",
          "kind": "mcq",
          "prompt": "In وَاللهِ إِنْ تَحْفَظْ لِسَانَكَ تَسْلَمْ, how many of Unit 6's constructions are present?",
          "options": [
            "one — a conditional",
            "two — an oath and a conditional",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "وَاللهِ is the قَسَم; the conditional follows as its جَوَاب."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 12",
          "kind": "mcq",
          "prompt": "In ﴿إِنْ يَشَأْ يَرْحَمْكُمْ أَوْ إِنْ يَشَأْ يُعَذِّبْكُمْ﴾, what does أَوْ join?",
          "options": [
            "two words",
            "two whole conditional sentences",
            "a شَرْط to a جَوَاب",
            "two objects"
          ],
          "correct": 1,
          "explanation": "Each half is a complete إِنْ construction."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 13",
          "kind": "mcq",
          "prompt": "In ﴿وَإِنْ تَدْعُوْهُمْ إِلَى الْهُدَى لَا يَسْمَعُوْا﴾, what shows both verbs are مَجْزُوْم?",
          "options": [
            "the dropped nūn of the plural ending in each",
            "the sukūn on the last letter of each",
            "the kasrah on each",
            "the لَا"
          ],
          "correct": 0,
          "explanation": "تَدْعُوْنَ becomes تَدْعُوْا, يَسْمَعُوْنَ becomes يَسْمَعُوْا."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 16",
          "kind": "mcq",
          "prompt": "In إِنْ تَظْلِمِ النَّاسَ يُعَذِّبْكَ اللهُ يَوْمَ يَحْشُرُ النَّاسَ, what is يَوْمَ يَحْشُرُ النَّاسَ?",
          "options": [
            "a second جَوَابُ الشَّرْطِ",
            "a نَعْتٌ",
            "an اِسْمٌ مُؤَوَّلٌ of time — a مَفْعُوْلٌ فِيْهِ",
            "a حَالٌ"
          ],
          "correct": 2,
          "explanation": "يَوْمَ as a مُضَافٌ to a sentence, from Unit 5, Section 3, Part 9."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 3), item 22",
          "kind": "mcq",
          "prompt": "In وَمَنْ يُؤْمِنْ بِاللهِ وَيَعْمَلْ صَالِحًا يُدْخِلْهُ اللهُ جَنَّاتٍ, how many verbs are in the شَرْط?",
          "options": [
            "one",
            "two, joined by وَ and both مَجْزُوْم",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "يُؤْمِنْ and يَعْمَلْ; the جَوَاب is يُدْخِلْهُ."
        },
        {
          "title": "supplication",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"supplication\"?",
          "options": [
            "دُعَاءٌ",
            "جَنَّةٌ",
            "شَكَرَ يَشْكُرُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "supplication",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دُعَاءٌ mean?",
          "options": [
            "supplication",
            "garden",
            "to be grateful",
            "to answer, respond"
          ],
          "correct": 0
        },
        {
          "title": "supplication (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دُعَاءٌ?",
          "options": [
            "أَدْعِيَةٌ",
            "أَنْهَارٌ",
            "جَنَّاتٌ",
            "أَلْسِنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "tongue",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tongue\"?",
          "options": [
            "لِسَانٌ",
            "نَهْرٌ",
            "زَادَ يَزِيْدُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ"
          ],
          "correct": 0
        },
        {
          "title": "tongue",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لِسَانٌ mean?",
          "options": [
            "tongue",
            "river",
            "to increase, add",
            "to seek forgiveness"
          ],
          "correct": 0
        },
        {
          "title": "tongue (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لِسَانٌ?",
          "options": [
            "أَلْسِنَةٌ",
            "أَدْعِيَةٌ",
            "أَنْهَارٌ",
            "جَنَّاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "guidance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"guidance\"?",
          "options": [
            "هُدًى",
            "شَكَرَ يَشْكُرُ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِهْتَدَى يَهْتَدِيْ"
          ],
          "correct": 0
        },
        {
          "title": "guidance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هُدًى mean?",
          "options": [
            "guidance",
            "to be grateful",
            "to answer, respond",
            "to be guided"
          ],
          "correct": 0
        },
        {
          "title": "garden",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"garden\"?",
          "options": [
            "جَنَّةٌ",
            "زَادَ يَزِيْدُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "حَشَرَ يَحْشُرُ"
          ],
          "correct": 0
        },
        {
          "title": "garden",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَنَّةٌ mean?",
          "options": [
            "garden",
            "to increase, add",
            "to seek forgiveness",
            "to gather"
          ],
          "correct": 0
        },
        {
          "title": "garden (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَنَّةٌ?",
          "options": [
            "جَنَّاتٌ",
            "أَنْهَارٌ",
            "أَلْسِنَةٌ",
            "أَدْعِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "river",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"river\"?",
          "options": [
            "نَهْرٌ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "اِهْتَدَى يَهْتَدِيْ",
            "سَلِمَ يَسْلَمُ"
          ],
          "correct": 0
        },
        {
          "title": "river",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَهْرٌ mean?",
          "options": [
            "river",
            "to answer, respond",
            "to be guided",
            "to be safe"
          ],
          "correct": 0
        },
        {
          "title": "river (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَهْرٌ?",
          "options": [
            "أَنْهَارٌ",
            "أَدْعِيَةٌ",
            "جَنَّاتٌ",
            "أَلْسِنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be grateful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be grateful\"?",
          "options": [
            "شَكَرَ يَشْكُرُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "حَشَرَ يَحْشُرُ",
            "دُعَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be grateful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَكَرَ يَشْكُرُ mean?",
          "options": [
            "to be grateful",
            "to seek forgiveness",
            "to gather",
            "supplication"
          ],
          "correct": 0
        },
        {
          "title": "to be grateful (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَكَرَ يَشْكُرُ?",
          "options": [
            "شُكْرًا",
            "اِسْتِجَابَةً",
            "اِهْتِدَاءً",
            "سَلَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to increase, add",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to increase, add\"?",
          "options": [
            "زَادَ يَزِيْدُ",
            "اِهْتَدَى يَهْتَدِيْ",
            "سَلِمَ يَسْلَمُ",
            "لِسَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to increase, add",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَادَ يَزِيْدُ mean?",
          "options": [
            "to increase, add",
            "to be guided",
            "to be safe",
            "tongue"
          ],
          "correct": 0
        },
        {
          "title": "to increase, add (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَادَ يَزِيْدُ?",
          "options": [
            "زِيَادَةً",
            "اِسْتِغْفَارًا",
            "حَشْرًا",
            "شُكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to answer, respond",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to answer, respond\"?",
          "options": [
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "حَشَرَ يَحْشُرُ",
            "دُعَاءٌ",
            "هُدًى"
          ],
          "correct": 0
        },
        {
          "title": "to answer, respond",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَجَابَ يَسْتَجِيْبُ mean?",
          "options": [
            "to answer, respond",
            "to gather",
            "supplication",
            "guidance"
          ],
          "correct": 0
        },
        {
          "title": "to answer, respond (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَجَابَ يَسْتَجِيْبُ?",
          "options": [
            "اِسْتِجَابَةً",
            "اِهْتِدَاءً",
            "سَلَامَةً",
            "زِيَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to seek forgiveness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek forgiveness\"?",
          "options": [
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "سَلِمَ يَسْلَمُ",
            "لِسَانٌ",
            "جَنَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to seek forgiveness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَغْفَرَ يَسْتَغْفِرُ mean?",
          "options": [
            "to seek forgiveness",
            "to be safe",
            "tongue",
            "garden"
          ],
          "correct": 0
        },
        {
          "title": "to seek forgiveness (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَغْفَرَ يَسْتَغْفِرُ?",
          "options": [
            "اِسْتِغْفَارًا",
            "حَشْرًا",
            "شُكْرًا",
            "اِسْتِجَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be guided",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be guided\"?",
          "options": [
            "اِهْتَدَى يَهْتَدِيْ",
            "دُعَاءٌ",
            "هُدًى",
            "نَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be guided",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِهْتَدَى يَهْتَدِيْ mean?",
          "options": [
            "to be guided",
            "supplication",
            "guidance",
            "river"
          ],
          "correct": 0
        },
        {
          "title": "to be guided (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِهْتَدَى يَهْتَدِيْ?",
          "options": [
            "اِهْتِدَاءً",
            "سَلَامَةً",
            "زِيَادَةً",
            "اِسْتِغْفَارًا"
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
            "لِسَانٌ",
            "جَنَّةٌ",
            "شَكَرَ يَشْكُرُ"
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
            "tongue",
            "garden",
            "to be grateful"
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
            "شُكْرًا",
            "اِسْتِجَابَةً",
            "اِهْتِدَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be safe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be safe\"?",
          "options": [
            "سَلِمَ يَسْلَمُ",
            "هُدًى",
            "نَهْرٌ",
            "زَادَ يَزِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to be safe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَلِمَ يَسْلَمُ mean?",
          "options": [
            "to be safe",
            "guidance",
            "river",
            "to increase, add"
          ],
          "correct": 0
        },
        {
          "title": "to be safe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَلِمَ يَسْلَمُ?",
          "options": [
            "سَلَامَةً",
            "زِيَادَةً",
            "اِسْتِغْفَارًا",
            "حَشْرًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "الفاء الرابطة في الشرط",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "The verb of the condition clause",
          "lines": [
            {
              "html": "The شَرْط and the جَوَابُ الشَّرْطِ may also be sentences without a فِعْلٌ مُضَارِعٌ.",
              "list": false
            },
            {
              "html": "The verb in the شَرْط is primarily a فِعْلٌ مُضَارِعٌ which is مَجْزُوْمٌ.",
              "list": false
            },
            {
              "html": "إِنْ تَصْدُقْ — If you speak the truth",
              "list": true,
              "bullet": true
            },
            {
              "html": "However, it can also be one of two other things.",
              "list": false
            },
            {
              "html": "1. A فِعْلٌ مَاضٍ. This is translated as a فِعْلٌ مُضَارِعٌ.",
              "list": false
            },
            {
              "html": "إِنْ صَدَقْتَ — If you speak the truth",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. The فِعْلٌ نَاقِصٌ of كَانَ. This كَانَ is not translated as was/were.",
              "list": false
            },
            {
              "html": "إِنْ كُنْتَ صَادِقًا — If you are truthful",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The different forms of the شَرْط",
                "headers": [
                  "Form",
                  "Shape"
                ],
                "rows": [
                  [
                    "مُضَارِعٌ",
                    "مَنْ يَفْعَلْ …"
                  ],
                  [
                    "مَاضٍ",
                    "مَنْ فَعَلَ …"
                  ],
                  [
                    "كَانَ",
                    "مَنْ كَانَ فَاعِلًا …"
                  ]
                ]
              }
            },
            {
              "html": "The important consequence is for translation. A مَاضٍ in the شَرْط is not a past tense: إِنْ صَدَقْتَ means 'if you speak the truth', not 'if you spoke the truth'. And مَنْ كَانَ مَرِيْضًا is 'whoever is ill', not 'whoever was ill'. The conditional frame overrides the tense of the verb inside it.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Besides a مُضَارِعٌ مَجْزُوْمٌ, what two other verb forms can appear in the شَرْط, and how are they translated؟",
            "kind": "mcq",
            "options": [
              "A فِعْلٌ مَاضٍ (translated as present, not past) or the فِعْلٌ نَاقِصٌ كَانَ (not translated as 'was/were')",
              "Only a مُضَارِعٌ مَرْفُوْعٌ is ever allowed",
              "Only a فِعْلُ أَمْرٍ is allowed",
              "Only a passive verb is allowed"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The verb of the result clause",
          "lines": [
            {
              "html": "The جَوَابُ الشَّرْطِ is primarily one of two things.",
              "list": false
            },
            {
              "html": "1. A جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مُضَارِعٌ in the مَجْزُوْم state, without any additions like سَ or لَنْ.",
              "list": false
            },
            {
              "html": "إِنْ تَجْتَهِدْ تَنْجَحْ — If you work hard, you are successful.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. A فِعْلٌ مَاضٍ with a مُضَارِع meaning.",
              "list": false
            },
            {
              "html": "إِنِ اجْتَهَدتَّ نَجَحْتَ — If you work hard, you are successful.",
              "list": true,
              "bullet": true
            },
            {
              "html": "If, however, the جَوَابُ الشَّرْطِ is neither of the above two, it will be preceded by a فَ.",
              "list": false
            },
            {
              "html": "إِنْ يَضْرِبْكَ زَيْدٌ فَلَا تَضْرِبْهُ — If Zaid hits you, do not hit him.",
              "list": true,
              "bullet": true
            },
            {
              "html": "This فَ is not translated, and in tarkeeb it is labelled as رَابِطَةٌ — the فَ used to join the شَرْط with the جَوَاب.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنْ يَضْرِبْكَ زَيْدٌ فَلَا تَضْرِبْهُ",
                "translation": "If Zaid hits you, do not hit him.",
                "cells": [
                  "إِنْ",
                  "يَضْرِبْكَ",
                  "زَيْدٌ",
                  "فَ",
                  "لَا تَضْرِبْهُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "رَابِطَةٌ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "جَوَابُ شَرْطٍ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فَاعِلٌ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ) مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "The different forms of the جَوَابُ شَرْطٍ",
                "headers": [
                  "Form",
                  "Note",
                  "Example"
                ],
                "rows": [
                  [
                    "مُضَارِعٌ مَجْزُوْمٌ",
                    "without additions",
                    "يَنْجَحْ"
                  ],
                  [
                    "مَاضٍ",
                    "with a مُضَارِع meaning",
                    "نَجَحَ"
                  ],
                  [
                    "Other",
                    "preceded by a فَ",
                    "فَهُوَ نَاجِحٌ، فَسَيَنْجَحُ، …"
                  ]
                ]
              }
            },
            {
              "html": "A useful working test: if the result clause could not stand as a bare مَجْزُوْم verb — because it is a nominal sentence, or an أَمْر or نَهْي, or carries سَ / سَوْفَ / لَنْ / قَدْ / إِنَّ — then it needs the فَ. That single rule accounts for nearly every فَ in Exercise 2.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When is the جَوَابُ الشَّرْطِ preceded by a فَ (the فَاءُ الرَّابِطَةِ)؟",
            "kind": "mcq",
            "options": [
              "When it is neither a bare مُضَارِعٌ مَجْزُوْمٌ nor a فِعْلٌ مَاضٍ with مُضَارِع meaning — e.g. when it is a command or a negative sentence",
              "Always, with no exception",
              "Never — the فَ is only used with إِذَا",
              "Only when the شَرْط itself has no verb"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Non-مُضَارِع clauses, and the linking فَ",
        "rows": [
          {
            "label": "شَرْط 1",
            "arabic": "مُضَارِعٌ مَجْزُوْمٌ",
            "meaning": "إِنْ تَصْدُقْ — the primary form"
          },
          {
            "label": "شَرْط 2",
            "arabic": "مَاضٍ",
            "meaning": "إِنْ صَدَقْتَ — translated as a present"
          },
          {
            "label": "شَرْط 3",
            "arabic": "كَانَ",
            "meaning": "إِنْ كُنْتَ صَادِقًا — not 'were'"
          },
          {
            "label": "جَوَاب 1",
            "arabic": "مُضَارِعٌ مَجْزُوْمٌ",
            "meaning": "no سَ، لَنْ or other addition"
          },
          {
            "label": "جَوَاب 2",
            "arabic": "مَاضٍ بِمَعْنَى الْمُضَارِعِ",
            "meaning": "نَجَحَ for 'you succeed'"
          },
          {
            "label": "Anything else",
            "arabic": "فَاءٌ رَابِطَةٌ",
            "meaning": "untranslated; labelled رَابِطَةٌ in tarkeeb"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the primary form of the verb in the شَرْط?",
          "options": [
            "a مَاضٍ",
            "كَانَ",
            "a مُضَارِعٌ in the مَجْزُوْم state",
            "an أَمْر"
          ],
          "correct": 2,
          "explanation": "إِنْ تَصْدُقْ — the other two forms are alternatives."
        },
        {
          "q": "How is a مَاضٍ in the شَرْط translated?",
          "options": [
            "as a مُضَارِع",
            "as a past tense",
            "as a future",
            "as a command"
          ],
          "correct": 0,
          "explanation": "إِنْ صَدَقْتَ is 'if you speak the truth', not 'if you spoke'."
        },
        {
          "q": "How is the كَانَ of إِنْ كُنْتَ صَادِقًا translated?",
          "options": [
            "as 'was' or 'were'",
            "not as was/were — 'if you are truthful'",
            "as 'will be'",
            "it is left out entirely and the sentence is nominal"
          ],
          "correct": 1,
          "explanation": "The book states this explicitly."
        },
        {
          "q": "Which additions on the verb of the جَوَاب force a فَ?",
          "options": [
            "only لَنْ",
            "none — the جَوَاب never takes a فَ",
            "only سَ",
            "any addition, such as سَ or لَنْ — and anything that is not a bare مَجْزُوْم verb or a مَاضٍ"
          ],
          "correct": 3,
          "explanation": "The two allowed forms are a bare مَجْزُوْم مُضَارِع, or a مَاضٍ with a present meaning."
        },
        {
          "q": "What is this فَ called in tarkeeb?",
          "options": [
            "حَرْفُ عَطْفٍ",
            "فَاءٌ زَائِدَةٌ",
            "رَابِطَةٌ",
            "حَرْفُ شَرْطٍ"
          ],
          "correct": 2,
          "explanation": "It joins the شَرْط to its جَوَاب, and is not translated."
        },
        {
          "q": "In إِنْ يَضْرِبْكَ زَيْدٌ فَلَا تَضْرِبْهُ, why is the فَ needed?",
          "options": [
            "Because the جَوَاب is a نَهْي, not a bare مَجْزُوْم verb",
            "Because زَيْدٌ is a proper noun",
            "Because the شَرْط is مُضَارِع",
            "Because إِنْ requires it"
          ],
          "correct": 0,
          "explanation": "لَا تَضْرِبْهُ cannot itself be the مَجْزُوْم جَوَاب."
        }
      ],
      "bank": [
        {
          "title": "إِنْ يَضْرِبْكَ زَيْدٌ فَلَا تَضْرِبْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 577)",
          "sentence": "إِنْ يَضْرِبْكَ زَيْدٌ فَلَا تَضْرِبْهُ",
          "translation": "If Zaid hits you, do not hit him.",
          "cells": [
            "إِنْ",
            "يَضْرِبْكَ",
            "زَيْدٌ",
            "فَ",
            "لَا تَضْرِبْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ) مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ كُنْتُمْ تُحِبُّوْنَ اللهَ فَاتَّبِعُوْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 1",
          "sentence": "إِنْ كُنْتُمْ تُحِبُّوْنَ اللهَ فَاتَّبِعُوْنِيْ",
          "translation": "If you love Allah, then follow me.",
          "cells": [
            "إِنْ",
            "كُنْتُمْ",
            "تُحِبُّوْنَ اللهَ",
            "فَ",
            "اتَّبِعُوْنِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (ي)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "مَنْ سَرَّهُ مَدْحُ النَّاسِ لَهُ حَزَنَهُ ذَمُّهُمْ لَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 2",
          "sentence": "مَنْ سَرَّهُ مَدْحُ النَّاسِ لَهُ حَزَنَهُ ذَمُّهُمْ لَهُ",
          "translation": "Whoever is pleased by people's praise of him is grieved by their criticism of him.",
          "cells": [
            "مَنْ",
            "سَرَّهُ",
            "مَدْحُ النَّاسِ لَهُ",
            "حَزَنَهُ",
            "ذَمُّهُمْ لَهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَإِنْ كَذَّبُوْكَ فَقُلْ لِيْ عَمَلِيْ وَلَكُمْ عَمَلُكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 3",
          "sentence": "وَإِنْ كَذَّبُوْكَ فَقُلْ لِيْ عَمَلِيْ وَلَكُمْ عَمَلُكُمْ",
          "translation": "And if they deny you, say: for me is my deed and for you is your deed.",
          "cells": [
            "وَ",
            "إِنْ",
            "كَذَّبُوْكَ",
            "فَ",
            "قُلْ",
            "لِيْ عَمَلِيْ وَلَكُمْ عَمَلُكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَقُوْلُ الْقَوْلِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ أَغْضَبْتُكَ الْيَوْمَ فَقَدْ أَغْضَبْتَنِيْ مِرَارًا مِنْ قَبْلُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 4",
          "sentence": "إِنْ أَغْضَبْتُكَ الْيَوْمَ فَقَدْ أَغْضَبْتَنِيْ مِرَارًا مِنْ قَبْلُ",
          "translation": "If I have angered you today, you have angered me many times before.",
          "cells": [
            "إِنْ",
            "أَغْضَبْتُكَ",
            "الْيَوْمَ",
            "فَ",
            "قَدْ أَغْضَبْتَنِيْ",
            "مِرَارًا مِنْ قَبْلُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مُؤَكَّدٌ وَفَاعِلٌ (تَ) وَمَفْعُوْلٌ بِهِ (ي)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ مَعَ غَيْرِ الصَّرِيْحِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ مَاتَ النَّبِيُّ مُحَمَّدٌ فَإِنَّ اللهَ حَيٌّ لَا يَمُوْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 5",
          "sentence": "إِنْ مَاتَ النَّبِيُّ مُحَمَّدٌ فَإِنَّ اللهَ حَيٌّ لَا يَمُوْتُ",
          "translation": "If the Prophet Muḥammad ﷺ dies, then Allah is Ever-Living and does not die.",
          "cells": [
            "إِنْ",
            "مَاتَ",
            "النَّبِيُّ مُحَمَّدٌ",
            "فَ",
            "إِنَّ اللهَ",
            "حَيٌّ لَا يَمُوْتُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "مَنْ كَانَ عِنْدَهُ مَالٌ كَثِيْرٌ فَقَدْ وَجَبَتْ عَلَيْهِ الزَّكَاةُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 6",
          "sentence": "مَنْ كَانَ عِنْدَهُ مَالٌ كَثِيْرٌ فَقَدْ وَجَبَتْ عَلَيْهِ الزَّكَاةُ",
          "translation": "Whoever has much wealth, Zakāh is obligatory upon him.",
          "cells": [
            "مَنْ",
            "كَانَ",
            "عِنْدَهُ",
            "مَالٌ كَثِيْرٌ",
            "فَ",
            "قَدْ وَجَبَتْ عَلَيْهِ الزَّكَاةُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ كَانَ مُؤَخَّرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنْ تَصْبِرُوْا وَتَتَّقُوْا فَسَوْفَ يُؤْتِيْكُمُ اللهُ أَجْرًا عَظِيْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 7",
          "sentence": "إِنْ تَصْبِرُوْا وَتَتَّقُوْا فَسَوْفَ يُؤْتِيْكُمُ اللهُ أَجْرًا عَظِيْمًا",
          "translation": "If you are patient and God-fearing, Allah will give you a great reward.",
          "cells": [
            "إِنْ",
            "تَصْبِرُوْا",
            "وَتَتَّقُوْا",
            "فَ",
            "سَوْفَ يُؤْتِيْكُمُ",
            "اللهُ أَجْرًا عَظِيْمًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جُمْلَةٌ مَعْطُوْفَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مُسْتَقْبَلٌ وَمَفْعُوْلٌ بِهِ (كُمْ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فَاعِلٌ وَمَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ يُنْزِلِ اللهُ عَلَيْكُمْ عَذَابًا مِنَ السَّمَاءِ فَلَا نَاصِرَ لَكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 9",
          "sentence": "إِنْ يُنْزِلِ اللهُ عَلَيْكُمْ عَذَابًا مِنَ السَّمَاءِ فَلَا نَاصِرَ لَكُمْ",
          "translation": "If Allah sends down a punishment upon you from the sky, there is no helper for you.",
          "cells": [
            "إِنْ",
            "يُنْزِلِ",
            "اللهُ",
            "عَلَيْكُمْ عَذَابًا مِنَ السَّمَاءِ",
            "فَ",
            "لَا نَاصِرَ لَكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ مَعَ غَيْرِ الصَّرِيْحِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ بِلَا النَّافِيَةِ لِلْجِنْسِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "مَنْ كَانَ مَرِيْضًا فِيْ شَهْرِ رَمَضَانَ فَلْيَصُمْ فِيْ غَيْرِ رَمَضَانَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 3), item 11",
          "sentence": "مَنْ كَانَ مَرِيْضًا فِيْ شَهْرِ رَمَضَانَ فَلْيَصُمْ فِيْ غَيْرِ رَمَضَانَ",
          "translation": "Whoever is ill in the month of Ramaḍān, let him fast outside Ramaḍān.",
          "cells": [
            "مَنْ",
            "كَانَ",
            "مَرِيْضًا",
            "فِيْ شَهْرِ رَمَضَانَ",
            "فَ",
            "لْيَصُمْ فِيْ غَيْرِ رَمَضَانَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In ﴿إِنْ كُنْتُمْ تُحِبُّوْنَ اللهَ فَاتَّبِعُوْنِيْ﴾, why is the فَ present?",
          "options": [
            "Because the شَرْط uses كَانَ",
            "Because the جَوَاب is an أَمْر, which cannot be the bare مَجْزُوْم جَوَاب",
            "Because the verse is Qur'ānic",
            "Because تُحِبُّوْنَ is مَرْفُوْع"
          ],
          "correct": 1,
          "explanation": "Commands always take the linking فَ."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 2",
          "kind": "mcq",
          "prompt": "In مَنْ سَرَّهُ مَدْحُ النَّاسِ لَهُ حَزَنَهُ ذَمُّهُمْ لَهُ, why is there no فَ?",
          "options": [
            "Because مَنْ never takes one",
            "Because the sentence is a proverb",
            "Because the جَوَاب is a مَاضٍ carrying a مُضَارِع meaning — an allowed form",
            "The book has omitted it by mistake"
          ],
          "correct": 2,
          "explanation": "حَزَنَهُ is past in form but present in meaning."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 4",
          "kind": "mcq",
          "prompt": "In إِنْ أَغْضَبْتُكَ الْيَوْمَ فَقَدْ أَغْضَبْتَنِيْ مِرَارًا, what forces the فَ?",
          "options": [
            "the word الْيَوْمَ",
            "the قَدْ before the verb",
            "the مَاضٍ in the شَرْط",
            "the word مِرَارًا"
          ],
          "correct": 1,
          "explanation": "قَدْ is an addition, so the جَوَاب is no longer one of the two bare forms."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 5",
          "kind": "mcq",
          "prompt": "In إِنْ مَاتَ النَّبِيُّ مُحَمَّدٌ ﷺ فَإِنَّ اللهَ حَيٌّ لَا يَمُوْتُ, what kind of sentence is the جَوَاب?",
          "options": [
            "a جُمْلَةٌ فِعْلِيَّةٌ with a bare مَجْزُوْم verb",
            "a مَاضٍ",
            "an أَمْر",
            "a جُمْلَةٌ اسْمِيَّةٌ introduced by إِنَّ"
          ],
          "correct": 3,
          "explanation": "A nominal جَوَاب always needs the linking فَ."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In مَنْ كَانَ عِنْدَهُ مَالٌ كَثِيْرٌ فَقَدْ وَجَبَتْ عَلَيْهِ الزَّكَاةُ, how should كَانَ be rendered?",
          "options": [
            "'whoever has' — not 'whoever had'",
            "'whoever had'",
            "'whoever will have'",
            "it is not translated at all"
          ],
          "correct": 0,
          "explanation": "The كَانَ of a شَرْط is not translated as was/were."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 9",
          "kind": "mcq",
          "prompt": "In إِنْ يُنْزِلِ اللهُ عَلَيْكُمْ عَذَابًا مِنَ السَّمَاءِ فَلَا نَاصِرَ لَكُمْ, what is فَلَا نَاصِرَ لَكُمْ?",
          "options": [
            "a verbal sentence",
            "a nominal جَوَاب with لَا النَّافِيَةُ لِلْجِنْسِ — hence the فَ",
            "a command",
            "a second شَرْط"
          ],
          "correct": 1,
          "explanation": "'Then there is no helper for you' — no verb at all, so the فَ is required."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 11",
          "kind": "mcq",
          "prompt": "In مَنْ كَانَ مَرِيْضًا فِيْ شَهْرِ رَمَضَانَ فَلْيَصُمْ فِيْ غَيْرِ رَمَضَانَ, what is فَلْيَصُمْ?",
          "options": [
            "a مُضَارِعٌ مَجْزُوْمٌ as the bare جَوَاب",
            "a مَاضٍ",
            "a command with the لَامُ الْأَمْرِ, so the فَ is needed",
            "a نَهْي"
          ],
          "correct": 2,
          "explanation": "'Let him fast' — an أَمْر form, which cannot be the bare جَوَاب."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 3), item 12",
          "kind": "mcq",
          "prompt": "In إِنِ ابْتَلَاكَ اللهُ بِمُصِيْبَةٍ فَكَمْ مِنْ نِعْمَةٍ أَنْعَمَ بِهَا عَلَيْكَ, what kind of جَوَاب is this?",
          "options": [
            "a bare مَجْزُوْم verb",
            "a مَاضٍ with a present meaning",
            "a نَهْي",
            "a nominal sentence opening with كَمْ الْخَبَرِيَّة — hence the فَ"
          ],
          "correct": 3,
          "explanation": "'How many a blessing He has bestowed on you' — كَمْ here states, it does not ask."
        },
        {
          "title": "praise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"praise\"?",
          "options": [
            "مَدْحٌ",
            "عَذَابٌ",
            "أَجْرٌ",
            "سَرَّ يَسُرُّ"
          ],
          "correct": 0
        },
        {
          "title": "praise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَدْحٌ mean?",
          "options": [
            "praise",
            "punishment",
            "reward",
            "to please, delight"
          ],
          "correct": 0
        },
        {
          "title": "criticism, blame",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"criticism, blame\"?",
          "options": [
            "ذَمٌّ",
            "نَاصِرٌ",
            "مِرَارًا",
            "وَجَبَ يَجِبُ"
          ],
          "correct": 0
        },
        {
          "title": "criticism, blame",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَمٌّ mean?",
          "options": [
            "criticism, blame",
            "helper",
            "many times, repeatedly",
            "to be obligatory"
          ],
          "correct": 0
        },
        {
          "title": "calamity, affliction",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"calamity, affliction\"?",
          "options": [
            "مُصِيْبَةٌ",
            "أَجْرٌ",
            "سَرَّ يَسُرُّ",
            "أَنْزَلَ يُنْزِلُ"
          ],
          "correct": 0
        },
        {
          "title": "calamity, affliction",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُصِيْبَةٌ mean?",
          "options": [
            "calamity, affliction",
            "reward",
            "to please, delight",
            "to send down"
          ],
          "correct": 0
        },
        {
          "title": "punishment",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"punishment\"?",
          "options": [
            "عَذَابٌ",
            "مِرَارًا",
            "وَجَبَ يَجِبُ",
            "أَصَابَ يُصِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "punishment",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَذَابٌ mean?",
          "options": [
            "punishment",
            "many times, repeatedly",
            "to be obligatory",
            "to strike, befall"
          ],
          "correct": 0
        },
        {
          "title": "helper",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"helper\"?",
          "options": [
            "نَاصِرٌ",
            "سَرَّ يَسُرُّ",
            "أَنْزَلَ يُنْزِلُ",
            "اِبْتَلَى يَبْتَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "helper",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَاصِرٌ mean?",
          "options": [
            "helper",
            "to please, delight",
            "to send down",
            "to test, try"
          ],
          "correct": 0
        },
        {
          "title": "reward",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"reward\"?",
          "options": [
            "أَجْرٌ",
            "وَجَبَ يَجِبُ",
            "أَصَابَ يُصِيْبُ",
            "مَدْحٌ"
          ],
          "correct": 0
        },
        {
          "title": "reward",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجْرٌ mean?",
          "options": [
            "reward",
            "to be obligatory",
            "to strike, befall",
            "praise"
          ],
          "correct": 0
        },
        {
          "title": "many times, repeatedly",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"many times, repeatedly\"?",
          "options": [
            "مِرَارًا",
            "أَنْزَلَ يُنْزِلُ",
            "اِبْتَلَى يَبْتَلِيْ",
            "ذَمٌّ"
          ],
          "correct": 0
        },
        {
          "title": "many times, repeatedly",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِرَارًا mean?",
          "options": [
            "many times, repeatedly",
            "to send down",
            "to test, try",
            "criticism, blame"
          ],
          "correct": 0
        },
        {
          "title": "to please, delight",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to please, delight\"?",
          "options": [
            "سَرَّ يَسُرُّ",
            "أَصَابَ يُصِيْبُ",
            "مَدْحٌ",
            "مُصِيْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to please, delight",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَرَّ يَسُرُّ mean?",
          "options": [
            "to please, delight",
            "to strike, befall",
            "praise",
            "calamity, affliction"
          ],
          "correct": 0
        },
        {
          "title": "to please, delight (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَرَّ يَسُرُّ?",
          "options": [
            "سُرُوْرًا",
            "إِنْزَالًا",
            "اِبْتِلَاءً",
            "وُجُوْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to be obligatory",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be obligatory\"?",
          "options": [
            "وَجَبَ يَجِبُ",
            "اِبْتَلَى يَبْتَلِيْ",
            "ذَمٌّ",
            "عَذَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be obligatory",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَجَبَ يَجِبُ mean?",
          "options": [
            "to be obligatory",
            "to test, try",
            "criticism, blame",
            "punishment"
          ],
          "correct": 0
        },
        {
          "title": "to be obligatory (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَجَبَ يَجِبُ?",
          "options": [
            "وُجُوْبًا",
            "إِصَابَةً",
            "سُرُوْرًا",
            "إِنْزَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to send down",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send down\"?",
          "options": [
            "أَنْزَلَ يُنْزِلُ",
            "مَدْحٌ",
            "مُصِيْبَةٌ",
            "نَاصِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to send down",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْزَلَ يُنْزِلُ mean?",
          "options": [
            "to send down",
            "praise",
            "calamity, affliction",
            "helper"
          ],
          "correct": 0
        },
        {
          "title": "to send down (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْزَلَ يُنْزِلُ?",
          "options": [
            "إِنْزَالًا",
            "اِبْتِلَاءً",
            "وُجُوْبًا",
            "سُرُوْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to strike, befall",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to strike, befall\"?",
          "options": [
            "أَصَابَ يُصِيْبُ",
            "ذَمٌّ",
            "عَذَابٌ",
            "أَجْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to strike, befall",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَصَابَ يُصِيْبُ mean?",
          "options": [
            "to strike, befall",
            "criticism, blame",
            "punishment",
            "reward"
          ],
          "correct": 0
        },
        {
          "title": "to strike, befall (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَصَابَ يُصِيْبُ?",
          "options": [
            "إِصَابَةً",
            "سُرُوْرًا",
            "إِنْزَالًا",
            "وُجُوْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to test, try",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to test, try\"?",
          "options": [
            "اِبْتَلَى يَبْتَلِيْ",
            "مُصِيْبَةٌ",
            "نَاصِرٌ",
            "مِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to test, try",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَلَى يَبْتَلِيْ mean?",
          "options": [
            "to test, try",
            "calamity, affliction",
            "helper",
            "many times, repeatedly"
          ],
          "correct": 0
        },
        {
          "title": "to test, try (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَلَى يَبْتَلِيْ?",
          "options": [
            "اِبْتِلَاءً",
            "وُجُوْبًا",
            "إِصَابَةً",
            "سُرُوْرًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "نفي الشرط والجواب",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "The two negating particles",
          "lines": [
            {
              "html": "The verb of the شَرْط is made negative by adding the particle لَمْ. The verb of the جَوَابُ الشَّرْطِ is made negative by adding a مَا or لَا.",
              "list": false
            },
            {
              "html": "إِنْ لَمْ تَجْتَهِدْ لَا تَنْجَحْ — If you do not work hard, you will not be successful.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنْ لَمْ تَجْتَهِدْ لَا تَنْجَحْ",
                "translation": "If you do not work hard, you will not be successful.",
                "cells": [
                  "إِنْ",
                  "لَمْ",
                  "تَجْتَهِدْ",
                  "لَا",
                  "تَنْجَحْ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "جَوَابُ الشَّرْطِ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفُ نَفْيٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Why لَمْ and not لَا in the شَرْط? Because لَمْ already puts the verb into the مَجْزُوْم state, which is exactly the state the شَرْط requires. لَا النَّافِيَة does not, so it would leave the verb مَرْفُوْع and break the construction. In the جَوَاب, by contrast, the أَدَاة itself is still doing the jazm, so a plain لَا or مَا is enough.",
              "list": false
            },
            {
              "table": {
                "title": "Negating each clause",
                "headers": [
                  "Clause",
                  "Particle",
                  "Example"
                ],
                "rows": [
                  [
                    "شَرْطٌ",
                    "لَمْ",
                    "إِنْ لَمْ تَجْتَهِدْ"
                  ],
                  [
                    "جَوَابُ الشَّرْطِ",
                    "لَا or مَا",
                    "لَا تَنْجَحْ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Why does the شَرْط use لَمْ to negate rather than لَا, while the جَوَابُ الشَّرْطِ can use plain لَا or مَا؟",
            "kind": "mcq",
            "options": [
              "لَمْ already puts the verb into the مَجْزُوْمٌ state the شَرْط requires, whereas لَا النَّافِيَة does not; the جَوَاب doesn't need the negator itself to do jazm since the أَدَاة already handles it",
              "There is no real reason — either particle works identically in both clauses",
              "لَا is grammatically forbidden anywhere in a conditional sentence",
              "لَمْ can only be used in the جَوَاب, never the شَرْط"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Translating with 'unless'",
          "lines": [
            {
              "html": "The negative verb in a conditional can be translated as 'unless'.",
              "list": false
            },
            {
              "html": "إِنْ لَمْ تَجْتَهِدْ لَا تَنْجَحْ — Unless you work hard, you will not be successful.",
              "list": true,
              "bullet": true
            },
            {
              "html": "So the one Arabic sentence has two good English renderings: 'If you do not work hard, you will not be successful', and 'Unless you work hard, you will not be successful'. The second is often the more natural, and it is worth reaching for whenever إِنْ لَمْ opens a sentence.",
              "list": false
            },
            {
              "html": "Notice that 'unless' absorbs the negation of the شَرْط only. The جَوَاب keeps its own negative: 'unless you work hard, you will not succeed'. Dropping both negatives — 'unless you work hard, you succeed' — reverses the sense.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How can إِنْ لَمْ … لَا/مَا … be rendered more naturally in English, and what must be preserved when doing so؟",
            "kind": "mcq",
            "options": [
              "As 'unless…', but the جَوَاب's own negative must still be kept ('unless you work hard, you will not succeed') — dropping it reverses the meaning",
              "As 'unless', and the جَوَاب's negative can be safely dropped",
              "As a plain affirmative with no trace of negation",
              "It cannot be translated with 'unless' under any circumstance"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Negating a conditional sentence",
        "rows": [
          {
            "label": "شَرْط",
            "arabic": "لَمْ",
            "meaning": "إِنْ لَمْ تَجْتَهِدْ — 'if you do not work hard'"
          },
          {
            "label": "Why لَمْ",
            "arabic": "يَجْزِمُ الْفِعْلَ",
            "meaning": "it already gives the jazm the شَرْط needs"
          },
          {
            "label": "جَوَاب",
            "arabic": "لَا أَوْ مَا",
            "meaning": "لَا تَنْجَحْ — 'you will not succeed'"
          },
          {
            "label": "Reading 1",
            "arabic": "إِنْ لَمْ …",
            "meaning": "'if you do not…'"
          },
          {
            "label": "Reading 2",
            "arabic": "إِنْ لَمْ …",
            "meaning": "'unless you…' — often the better English"
          },
          {
            "label": "Careful",
            "arabic": "اَلنَّفْيُ فِي الْجَوَابِ يَبْقَى",
            "meaning": "'unless' absorbs only the شَرْط's negative"
          }
        ]
      },
      "quiz": [
        {
          "q": "Which particle negates the verb of the شَرْط?",
          "options": [
            "لَا",
            "لَمْ",
            "مَا",
            "لَنْ"
          ],
          "correct": 1,
          "explanation": "إِنْ لَمْ تَجْتَهِدْ."
        },
        {
          "q": "Which particles may negate the verb of the جَوَابُ الشَّرْطِ?",
          "options": [
            "لَمْ only",
            "لَنْ only",
            "سَ or سَوْفَ",
            "مَا or لَا"
          ],
          "correct": 3,
          "explanation": "لَا تَنْجَحْ, or مَا with the same sense."
        },
        {
          "q": "Why is لَمْ used in the شَرْط rather than لَا?",
          "options": [
            "Because لَمْ already puts the verb into the مَجْزُوْم state that the شَرْط requires",
            "Because لَا is only for commands",
            "Because لَمْ is past tense",
            "There is no reason; both are equally correct"
          ],
          "correct": 0,
          "explanation": "لَا النَّافِيَة would leave the verb مَرْفُوْع."
        },
        {
          "q": "How else can a negated conditional be translated?",
          "options": [
            "with 'although'",
            "with 'because'",
            "with 'unless'",
            "with 'whenever'"
          ],
          "correct": 2,
          "explanation": "'Unless you work hard, you will not be successful.'"
        },
        {
          "q": "In the 'unless' rendering, what happens to the negative of the جَوَاب?",
          "options": [
            "It is dropped as well",
            "It stays — 'you will not be successful'",
            "It becomes a question",
            "It moves to the front"
          ],
          "correct": 1,
          "explanation": "'Unless' absorbs only the negation of the condition clause."
        },
        {
          "q": "In إِنْ لَمْ تَكُنْ أَجْوِبَتُكَ صَحِيْحَةً …, what has been negated?",
          "options": [
            "a مُضَارِع verb",
            "an أَمْر",
            "a nominal sentence with no verb",
            "the فِعْلٌ نَاقِصٌ كَانَ"
          ],
          "correct": 3,
          "explanation": "لَمْ يَكُنْ — كَانَ can take the negating لَمْ like any other مُضَارِع."
        }
      ],
      "bank": [
        {
          "title": "إِنْ لَمْ تَجْتَهِدْ لَا تَنْجَحْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 579)",
          "sentence": "إِنْ لَمْ تَجْتَهِدْ لَا تَنْجَحْ",
          "translation": "Unless you work hard, you will not be successful.",
          "cells": [
            "إِنْ",
            "لَمْ",
            "تَجْتَهِدْ",
            "لَا",
            "تَنْجَحْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ) ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "رَابِطَةٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تَجْتَهِدْ لَا تَفُزْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 1",
          "sentence": "إِنْ لَمْ تَجْتَهِدْ لَا تَفُزْ",
          "translation": "Unless you work hard, you will not succeed.",
          "cells": [
            "إِنْ",
            "لَمْ تَجْتَهِدْ",
            "لَا تَفُزْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ بِلَمْ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَنْفِيٌّ بِلَا وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تُطِعْنَ أَبَوَيْكُنَّ يَحْزَنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 2",
          "sentence": "إِنْ لَمْ تُطِعْنَ أَبَوَيْكُنَّ يَحْزَنَا",
          "translation": "If you (f. pl.) do not obey your parents, they will be saddened.",
          "cells": [
            "إِنْ",
            "لَمْ تُطِعْنَ",
            "أَبَوَيْكُنَّ",
            "يَحْزَنَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (نَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (ا)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تَصْدُقِيْ لَا يُحْبِبْكِ النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 3",
          "sentence": "إِنْ لَمْ تَصْدُقِيْ لَا يُحْبِبْكِ النَّاسُ",
          "translation": "Unless you (f.) are truthful, people will not love you.",
          "cells": [
            "إِنْ",
            "لَمْ تَصْدُقِيْ",
            "لَا يُحْبِبْكِ",
            "النَّاسُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (أَنْتِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَنْفِيٌّ وَمَفْعُوْلٌ بِهِ (كِ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تُسْرِعْ يَكُنْ جَوَابُكَ صَحِيْحًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 4",
          "sentence": "إِنْ لَمْ تُسْرِعْ يَكُنْ جَوَابُكَ صَحِيْحًا",
          "translation": "If you do not hurry, your answer will be correct.",
          "cells": [
            "إِنْ",
            "لَمْ تُسْرِعْ",
            "يَكُنْ",
            "جَوَابُكَ",
            "صَحِيْحًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تَعْرِفْ رَبَّكَ تَعِشْ عِيْشَةَ الْبَهَائِمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 5",
          "sentence": "إِنْ لَمْ تَعْرِفْ رَبَّكَ تَعِشْ عِيْشَةَ الْبَهَائِمِ",
          "translation": "Unless you know your Lord, you will live the life of the beasts.",
          "cells": [
            "إِنْ",
            "لَمْ تَعْرِفْ",
            "رَبَّكَ",
            "تَعِشْ",
            "عِيْشَةَ الْبَهَائِمِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تَطْلُبُوا الْعِلْمَ صِغَارًا تَبْقَوْا جَاهِلِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 6",
          "sentence": "إِنْ لَمْ تَطْلُبُوا الْعِلْمَ صِغَارًا تَبْقَوْا جَاهِلِيْنَ",
          "translation": "Unless you seek knowledge while young, you will remain ignorant.",
          "cells": [
            "إِنْ",
            "لَمْ تَطْلُبُوا",
            "الْعِلْمَ",
            "صِغَارًا",
            "تَبْقَوْا",
            "جَاهِلِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَالٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (و)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ بَقِيَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تَشْرَبَا مَاءً تَعْطَشَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 7",
          "sentence": "إِنْ لَمْ تَشْرَبَا مَاءً تَعْطَشَا",
          "translation": "If you two do not drink water, you will thirst.",
          "cells": [
            "إِنْ",
            "لَمْ تَشْرَبَا",
            "مَاءً",
            "تَعْطَشَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (ا)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (ا)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ يَحْضُرْنَ الدُّرُوْسَ كُلَّ يَوْمٍ لَا يَفْهَمْنَهَا فَهْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 8",
          "sentence": "إِنْ لَمْ يَحْضُرْنَ الدُّرُوْسَ كُلَّ يَوْمٍ لَا يَفْهَمْنَهَا فَهْمًا",
          "translation": "If they (f.) do not attend the lessons every day, they will not understand them properly.",
          "cells": [
            "إِنْ",
            "لَمْ يَحْضُرْنَ",
            "الدُّرُوْسَ",
            "كُلَّ يَوْمٍ",
            "لَا يَفْهَمْنَهَا",
            "فَهْمًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (نَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (نَ) وَمَفْعُوْلٌ بِهِ (هَا)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنْ لَمْ تَكُنْ أَجْوِبَتُكَ صَحِيْحَةً لَا يَغْضَبْ عَلَيْكَ أُسْتَاذُكَ بَلْ يَنْصُرْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 3), item 10",
          "sentence": "إِنْ لَمْ تَكُنْ أَجْوِبَتُكَ صَحِيْحَةً لَا يَغْضَبْ عَلَيْكَ أُسْتَاذُكَ بَلْ يَنْصُرْكَ",
          "translation": "If your answers are not correct, your teacher will not be angry with you but will help you.",
          "cells": [
            "إِنْ",
            "لَمْ تَكُنْ",
            "أَجْوِبَتُكَ",
            "صَحِيْحَةً",
            "لَا يَغْضَبْ عَلَيْكَ أُسْتَاذُكَ",
            "بَلْ يَنْصُرْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ مَنْفِيٌّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جُمْلَةٌ مَعْطُوْفَةٌ بِبَلْ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 2",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ تُطِعْنَ أَبَوَيْكُنَّ يَحْزَنَا, what is أَبَوَيْكُنَّ?",
          "options": [
            "a plural مَرْفُوْع noun",
            "a dual مَنْصُوْب noun, مُضَافٌ to the pronoun كُنَّ",
            "a singular مَجْرُوْر noun",
            "the فَاعِلٌ of يَحْزَنَا"
          ],
          "correct": 1,
          "explanation": "'Your two parents' — and يَحْزَنَا, the جَوَاب, agrees with them as a dual."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ تَصْدُقِيْ لَا يُحْبِبْكِ النَّاسُ, what shows تَصْدُقِيْ is مَجْزُوْمَة?",
          "options": [
            "the sukūn at the end",
            "the kasrah",
            "the dropped nūn of the feminine-addressee ending",
            "nothing shows it"
          ],
          "correct": 2,
          "explanation": "تَصْدُقِيْنَ becomes تَصْدُقِيْ."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 5",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ تَعْرِفْ رَبَّكَ تَعِشْ عِيْشَةَ الْبَهَائِمِ, what is عِيْشَةَ الْبَهَائِمِ?",
          "options": [
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ",
            "a مَفْعُوْلٌ مُطْلَقٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "عَاشَ يَعِيْشُ takes no object; the مَصْدَر describes the manner of living."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ تَطْلُبُوا الْعِلْمَ صِغَارًا تَبْقَوْا جَاهِلِيْنَ, what is صِغَارًا?",
          "options": [
            "a حَالٌ — 'while young'",
            "a تَمْيِيْزٌ",
            "a second مَفْعُوْلٌ بِهِ",
            "a نَعْتٌ of الْعِلْمَ"
          ],
          "correct": 0,
          "explanation": "It describes the state of the doers at the time of the action."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 7",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ تَشْرَبَا مَاءً تَعْطَشَا وَإِنْ لَمْ تَأْكُلَا تَجُوْعَا, what number are all four verbs?",
          "options": [
            "singular",
            "dual",
            "plural",
            "mixed"
          ],
          "correct": 1,
          "explanation": "Each has lost the nūn of the dual for jazm."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 8",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ يَحْضُرْنَ الدُّرُوْسَ … لَا يَفْهَمْنَهَا فَهْمًا, why do the verbs not visibly change for jazm?",
          "options": [
            "Because they are مَرْفُوْع after all",
            "Because they are feminine-plural forms, which are مَبْنِيّ and do not change",
            "Because لَمْ does not cause jazm",
            "Because they are past tense"
          ],
          "correct": 1,
          "explanation": "The نُوْنُ النِّسْوَةِ makes the verb مَبْنِيٌّ, so no jazm marker appears."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 9",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ يَبْلُغِ الضُّيُوْفُ قَبْلَ الْمَغْرِبِ نَرْجِعْ إِلَى بُيُوْتِنَا, why does يَبْلُغْ end in a kasrah?",
          "options": [
            "Because it is مَجْرُوْر",
            "Because the doers are plural",
            "To avoid two sukūns meeting with the ال of الضُّيُوْفُ",
            "Because لَمْ demands it"
          ],
          "correct": 2,
          "explanation": "The same adjustment met with إِنْ تَسْتَغْفِرِ اللهَ."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 3), item 10",
          "kind": "mcq",
          "prompt": "In إِنْ لَمْ تَكُنْ أَجْوِبَتُكَ صَحِيْحَةً لَا يَغْضَبْ عَلَيْكَ أُسْتَاذُكَ بَلْ يَنْصُرْكَ, what does بَلْ do?",
          "options": [
            "It negates the whole sentence",
            "It sets aside the negated statement and puts يَنْصُرْكَ in its place",
            "It introduces a second condition",
            "It is a حَرْفُ شَرْطٍ"
          ],
          "correct": 1,
          "explanation": "'Not angry — rather, he will help you.'"
        },
        {
          "title": "beast, animal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"beast, animal\"?",
          "options": [
            "بَهِيْمَةٌ",
            "عِيْشَةٌ",
            "فَازَ يَفُوْزُ",
            "أَسْرَعَ يُسْرِعُ"
          ],
          "correct": 0
        },
        {
          "title": "beast, animal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَهِيْمَةٌ mean?",
          "options": [
            "beast, animal",
            "way of living",
            "to succeed, attain",
            "to hurry"
          ],
          "correct": 0
        },
        {
          "title": "beast, animal (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَهِيْمَةٌ?",
          "options": [
            "بَهَائِمُ",
            "جَاهِلُوْنَ",
            "دُرُوْسٌ",
            "أَجْوِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "answer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"answer\"?",
          "options": [
            "جَوَابٌ",
            "جَاهِلٌ",
            "أَطَاعَ يُطِيْعُ",
            "عَطِشَ يَعْطَشُ"
          ],
          "correct": 0
        },
        {
          "title": "answer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَوَابٌ mean?",
          "options": [
            "answer",
            "ignorant",
            "to obey",
            "to be thirsty"
          ],
          "correct": 0
        },
        {
          "title": "answer (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَوَابٌ?",
          "options": [
            "أَجْوِبَةٌ",
            "بَهَائِمُ",
            "جَاهِلُوْنَ",
            "دُرُوْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "lesson",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lesson\"?",
          "options": [
            "دَرْسٌ",
            "فَازَ يَفُوْزُ",
            "أَسْرَعَ يُسْرِعُ",
            "جَاعَ يَجُوْعُ"
          ],
          "correct": 0
        },
        {
          "title": "lesson",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَرْسٌ mean?",
          "options": [
            "lesson",
            "to succeed, attain",
            "to hurry",
            "to be hungry"
          ],
          "correct": 0
        },
        {
          "title": "lesson (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَرْسٌ?",
          "options": [
            "دُرُوْسٌ",
            "أَجْوِبَةٌ",
            "بَهَائِمُ",
            "جَاهِلُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "way of living",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"way of living\"?",
          "options": [
            "عِيْشَةٌ",
            "أَطَاعَ يُطِيْعُ",
            "عَطِشَ يَعْطَشُ",
            "حَضَرَ يَحْضُرُ"
          ],
          "correct": 0
        },
        {
          "title": "way of living",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عِيْشَةٌ mean?",
          "options": [
            "way of living",
            "to obey",
            "to be thirsty",
            "to attend"
          ],
          "correct": 0
        },
        {
          "title": "ignorant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ignorant\"?",
          "options": [
            "جَاهِلٌ",
            "أَسْرَعَ يُسْرِعُ",
            "جَاعَ يَجُوْعُ",
            "بَلَغَ يَبْلُغُ"
          ],
          "correct": 0
        },
        {
          "title": "ignorant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَاهِلٌ mean?",
          "options": [
            "ignorant",
            "to hurry",
            "to be hungry",
            "to reach, arrive"
          ],
          "correct": 0
        },
        {
          "title": "ignorant (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَاهِلٌ?",
          "options": [
            "جَاهِلُوْنَ",
            "بَهَائِمُ",
            "دُرُوْسٌ",
            "أَجْوِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to succeed, attain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to succeed, attain\"?",
          "options": [
            "فَازَ يَفُوْزُ",
            "عَطِشَ يَعْطَشُ",
            "حَضَرَ يَحْضُرُ",
            "بَهِيْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to succeed, attain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَازَ يَفُوْزُ mean?",
          "options": [
            "to succeed, attain",
            "to be thirsty",
            "to attend",
            "beast, animal"
          ],
          "correct": 0
        },
        {
          "title": "to succeed, attain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَازَ يَفُوْزُ?",
          "options": [
            "فَوْزًا",
            "إِسْرَاعًا",
            "جُوْعًا",
            "بُلُوْغًا"
          ],
          "correct": 0
        },
        {
          "title": "to obey",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to obey\"?",
          "options": [
            "أَطَاعَ يُطِيْعُ",
            "جَاعَ يَجُوْعُ",
            "بَلَغَ يَبْلُغُ",
            "جَوَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to obey",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَطَاعَ يُطِيْعُ mean?",
          "options": [
            "to obey",
            "to be hungry",
            "to reach, arrive",
            "answer"
          ],
          "correct": 0
        },
        {
          "title": "to obey (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَطَاعَ يُطِيْعُ?",
          "options": [
            "إِطَاعَةً",
            "عَطَشًا",
            "حُضُوْرًا",
            "فَوْزًا"
          ],
          "correct": 0
        },
        {
          "title": "to hurry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hurry\"?",
          "options": [
            "أَسْرَعَ يُسْرِعُ",
            "حَضَرَ يَحْضُرُ",
            "بَهِيْمَةٌ",
            "دَرْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to hurry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسْرَعَ يُسْرِعُ mean?",
          "options": [
            "to hurry",
            "to attend",
            "beast, animal",
            "lesson"
          ],
          "correct": 0
        },
        {
          "title": "to hurry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسْرَعَ يُسْرِعُ?",
          "options": [
            "إِسْرَاعًا",
            "جُوْعًا",
            "بُلُوْغًا",
            "إِطَاعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be thirsty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be thirsty\"?",
          "options": [
            "عَطِشَ يَعْطَشُ",
            "بَلَغَ يَبْلُغُ",
            "جَوَابٌ",
            "عِيْشَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be thirsty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَطِشَ يَعْطَشُ mean?",
          "options": [
            "to be thirsty",
            "to reach, arrive",
            "answer",
            "way of living"
          ],
          "correct": 0
        },
        {
          "title": "to be thirsty (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَطِشَ يَعْطَشُ?",
          "options": [
            "عَطَشًا",
            "حُضُوْرًا",
            "فَوْزًا",
            "إِسْرَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to be hungry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be hungry\"?",
          "options": [
            "جَاعَ يَجُوْعُ",
            "بَهِيْمَةٌ",
            "دَرْسٌ",
            "جَاهِلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be hungry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَاعَ يَجُوْعُ mean?",
          "options": [
            "to be hungry",
            "beast, animal",
            "lesson",
            "ignorant"
          ],
          "correct": 0
        },
        {
          "title": "to be hungry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَاعَ يَجُوْعُ?",
          "options": [
            "جُوْعًا",
            "بُلُوْغًا",
            "إِطَاعَةً",
            "عَطَشًا"
          ],
          "correct": 0
        },
        {
          "title": "to attend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to attend\"?",
          "options": [
            "حَضَرَ يَحْضُرُ",
            "جَوَابٌ",
            "عِيْشَةٌ",
            "فَازَ يَفُوْزُ"
          ],
          "correct": 0
        },
        {
          "title": "to attend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَضَرَ يَحْضُرُ mean?",
          "options": [
            "to attend",
            "answer",
            "way of living",
            "to succeed, attain"
          ],
          "correct": 0
        },
        {
          "title": "to attend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَضَرَ يَحْضُرُ?",
          "options": [
            "حُضُوْرًا",
            "فَوْزًا",
            "إِسْرَاعًا",
            "جُوْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to reach, arrive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reach, arrive\"?",
          "options": [
            "بَلَغَ يَبْلُغُ",
            "دَرْسٌ",
            "جَاهِلٌ",
            "أَطَاعَ يُطِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "to reach, arrive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَلَغَ يَبْلُغُ mean?",
          "options": [
            "to reach, arrive",
            "lesson",
            "ignorant",
            "to obey"
          ],
          "correct": 0
        },
        {
          "title": "to reach, arrive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَلَغَ يَبْلُغُ?",
          "options": [
            "بُلُوْغًا",
            "إِطَاعَةً",
            "عَطَشًا",
            "حُضُوْرًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "الجواب المقدم",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "The rule",
          "lines": [
            {
              "html": "Sometimes, in a conditional sentence, the جَوَاب may precede the شَرْط. In this case, the أَدَاةُ الشَّرْطِ will not cause the جَوَاب to be مَجْزُوْمٌ.",
              "list": false
            },
            {
              "html": "أَجْتَهِدُ إِنِ اجْتَهَدتَّ — I will work hard if you work hard.",
              "list": true,
              "bullet": true
            },
            {
              "html": "أَجْتَهِدُ keeps its ḍammah — it is مَرْفُوْعٌ, not مَجْزُوْمٌ. The أَدَاة governs only what comes after it, so a جَوَاب that has been moved in front of it is out of its reach.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَجْتَهِدُ إِنِ اجْتَهَدتَّ",
                "translation": "I will work hard if you work hard.",
                "cells": [
                  "أَجْتَهِدُ",
                  "إِنْ",
                  "اجْتَهَدتَّ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "شَرْطٌ مُؤَخَّرٌ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Two consequences follow. First, no فَاءٌ رَابِطَةٌ is ever needed — the فَ joins a جَوَاب that comes after the شَرْط, and there is nothing to join here. Second, the English comma disappears, exactly as the note on p. 574 said: 'You will be successful if you work hard.'",
              "list": false
            },
            {
              "table": {
                "title": "The two orders compared",
                "headers": [
                  "Order",
                  "State of the جَوَاب verb",
                  "Example"
                ],
                "rows": [
                  [
                    "شَرْطٌ then جَوَابٌ",
                    "مَجْزُوْمٌ",
                    "إِنْ تَجْتَهِدْ تَنْجَحْ"
                  ],
                  [
                    "جَوَابٌ then شَرْطٌ",
                    "unaffected — مَرْفُوْعٌ, or an أَمْر or نَهْي",
                    "أَجْتَهِدُ إِنِ اجْتَهَدتَّ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What happens to the جَوَاب's verb when it is moved in front of the شَرْط, as in أَجْتَهِدُ إِنِ اجْتَهَدتَّ؟",
            "kind": "mcq",
            "options": [
              "It is no longer مَجْزُوْمٌ — the أَدَاة only governs what comes after it, so a fronted جَوَاب escapes its effect",
              "It becomes مَجْزُوْمٌ even more strongly",
              "It is deleted entirely",
              "It becomes مَجْرُوْرٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Why this shape is so common",
          "lines": [
            {
              "html": "Look at Exercise 4: every one of its eight sentences opens with a command or a prohibition, and every one closes with إِنْ كُنْتَ or إِنْ كُنْتُمْ. That is the natural home of the جَوَابٌ مُقَدَّمٌ — an instruction given first, with the qualifying condition attached afterwards.",
              "list": false
            },
            {
              "html": "كُلْ إِنْ كُنْتَ جَائِعًا — Eat if you are hungry.",
              "list": true,
              "bullet": true
            },
            {
              "html": "لَا تَصُمْ إِنْ كُنْتَ مَرِيْضًا — Do not fast if you are ill.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Notice also that كُنْتَ here is not 'were'. As Lesson 8 established, the كَانَ of a شَرْط carries a present meaning: 'if you are hungry', 'if you are ill'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the most common real-world shape for a جَوَابٌ مُقَدَّمٌ, and why is a فَاءُ رَابِطَةٌ never needed with it؟",
            "kind": "mcq",
            "options": [
              "A command or prohibition given first, with the condition attached afterwards (e.g. إِنْ كُنْتَ) — the فَ only joins a جَوَاب that comes AFTER the شَرْط, and here there's nothing to join",
              "A question followed by a statement; the فَ is required here too",
              "It only occurs with نَهْي sentences, and the فَ is always required",
              "It never occurs with commands"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The جَوَابٌ مُقَدَّمٌ",
        "rows": [
          {
            "label": "The rule",
            "arabic": "قَدْ يَتَقَدَّمُ الْجَوَابُ",
            "meaning": "the result may come before the condition"
          },
          {
            "label": "Effect",
            "arabic": "لَا يُجْزَمُ",
            "meaning": "the أَدَاة does not make it مَجْزُوْم"
          },
          {
            "label": "Example",
            "arabic": "أَجْتَهِدُ إِنِ اجْتَهَدتَّ",
            "meaning": "أَجْتَهِدُ keeps its ḍammah"
          },
          {
            "label": "In tarkeeb",
            "arabic": "جَوَابُ شَرْطٍ مُقَدَّمٌ + شَرْطٌ مُؤَخَّرٌ",
            "meaning": "the two labels of the diagram"
          },
          {
            "label": "No فَ",
            "arabic": "لَا رَابِطَةَ",
            "meaning": "the linking فَ is never needed in this order"
          },
          {
            "label": "Typical shape",
            "arabic": "أَمْرٌ أَوْ نَهْيٌ ثُمَّ إِنْ كُنْتَ …",
            "meaning": "an instruction, then its condition"
          }
        ]
      },
      "quiz": [
        {
          "q": "What happens when the جَوَاب precedes the شَرْط?",
          "options": [
            "It becomes مَنْصُوْبٌ",
            "It must take a فَ",
            "The أَدَاةُ الشَّرْطِ does not make it مَجْزُوْمٌ",
            "The sentence is no longer conditional"
          ],
          "correct": 2,
          "explanation": "أَجْتَهِدُ keeps its ḍammah in أَجْتَهِدُ إِنِ اجْتَهَدتَّ."
        },
        {
          "q": "Why does the أَدَاة not reach a fronted جَوَاب?",
          "options": [
            "Because an عَامِل governs only what comes after it",
            "Because إِنْ is غَيْرُ عَامِلٍ",
            "Because the verb is first person",
            "Because there is no شَرْط"
          ],
          "correct": 0,
          "explanation": "The جَوَاب has moved out of its reach."
        },
        {
          "q": "In أَجْتَهِدُ إِنِ اجْتَهَدتَّ, where the جَوَاب comes before the شَرْط, what are the two tarkeeb labels used?",
          "options": [
            "شَرْطٌ and جَوَابُ الشَّرْطِ",
            "قَسَمٌ and جَوَابُ الْقَسَمِ",
            "مُبْتَدَأٌ and خَبَرٌ",
            "جَوَابُ شَرْطٍ مُقَدَّمٌ and شَرْطٌ مُؤَخَّرٌ"
          ],
          "correct": 3,
          "explanation": "'Brought forward' and 'placed later'."
        },
        {
          "q": "When the جَوَاب comes before the شَرْط (جَوَابُ شَرْطٍ مُقَدَّمٌ), is a فَاءٌ رَابِطَةٌ ever needed?",
          "options": [
            "Yes, always",
            "No — the فَ joins a جَوَاب that follows the شَرْط",
            "Only with an أَمْر",
            "Only with a nominal جَوَاب"
          ],
          "correct": 1,
          "explanation": "There is nothing for it to join here."
        },
        {
          "q": "In كُلْ إِنْ كُنْتَ جَائِعًا, how is كُنْتَ translated?",
          "options": [
            "'you were'",
            "'you will be'",
            "'you are'",
            "it is left untranslated"
          ],
          "correct": 2,
          "explanation": "The كَانَ of a شَرْط is not rendered as was/were."
        },
        {
          "q": "What kind of sentence is the جَوَاب in every item of Exercise 4?",
          "options": [
            "an أَمْر or a نَهْي",
            "a nominal sentence",
            "a مَاضٍ",
            "a question"
          ],
          "correct": 0,
          "explanation": "An instruction first, its condition afterwards — the natural home of this shape."
        }
      ],
      "bank": [
        {
          "title": "أَجْتَهِدُ إِنِ اجْتَهَدتَّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 580)",
          "sentence": "أَجْتَهِدُ إِنِ اجْتَهَدتَّ",
          "translation": "I will work hard if you work hard.",
          "cells": [
            "أَجْتَهِدُ",
            "إِنْ",
            "اجْتَهَدتَّ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "كُلْ إِنْ كُنْتَ جَائِعًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 1",
          "sentence": "كُلْ إِنْ كُنْتَ جَائِعًا",
          "translation": "Eat if you are hungry.",
          "cells": [
            "كُلْ",
            "إِنْ",
            "كُنْتَ",
            "جَائِعًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَصُمْ إِنْ كُنْتَ مَرِيْضًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 2",
          "sentence": "لَا تَصُمْ إِنْ كُنْتَ مَرِيْضًا",
          "translation": "Do not fast if you are ill.",
          "cells": [
            "لَا",
            "تَصُمْ",
            "إِنْ",
            "كُنْتَ",
            "مَرِيْضًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "لَا النَّاهِيَةُ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "رَابِطَةٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اِتَّقُوا اللهَ إِنْ كُنْتُمْ مُؤْمِنِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 3",
          "sentence": "اِتَّقُوا اللهَ إِنْ كُنْتُمْ مُؤْمِنِيْنَ",
          "translation": "Fear Allah if you are believers.",
          "cells": [
            "اِتَّقُوا",
            "اللهَ",
            "إِنْ",
            "كُنْتُمْ",
            "مُؤْمِنِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُمْ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أُنْصُرِ الْفُقَرَاءَ وَالْمَسَاكِيْنَ إِنْ كَانَ عِنْدَكَ مَالٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 4",
          "sentence": "أُنْصُرِ الْفُقَرَاءَ وَالْمَسَاكِيْنَ إِنْ كَانَ عِنْدَكَ مَالٌ",
          "translation": "Help the poor and the needy if you have wealth.",
          "cells": [
            "أُنْصُرِ",
            "الْفُقَرَاءَ وَالْمَسَاكِيْنَ",
            "إِنْ",
            "كَانَ",
            "عِنْدَكَ",
            "مَالٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ مُقَدَّمٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "اِسْمُ كَانَ مُؤَخَّرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "رَابِطَةٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا تَذْهَبْ إِلَى الْمَدْرَسَةِ إِنْ كُنْتَ مَرِيْضًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 5",
          "sentence": "لَا تَذْهَبْ إِلَى الْمَدْرَسَةِ إِنْ كُنْتَ مَرِيْضًا",
          "translation": "Do not go to school if you are ill.",
          "cells": [
            "لَا تَذْهَبْ",
            "إِلَى الْمَدْرَسَةِ",
            "إِنْ",
            "كُنْتَ",
            "مَرِيْضًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "رَابِطَةٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "فَاسْأَلُوْا أَهْلَ الذِّكْرِ إِنْ كُنْتُمْ لَا تَعْلَمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 6",
          "sentence": "فَاسْأَلُوْا أَهْلَ الذِّكْرِ إِنْ كُنْتُمْ لَا تَعْلَمُوْنَ",
          "translation": "So ask the people of knowledge if you do not know.",
          "cells": [
            "فَاسْأَلُوْا",
            "أَهْلَ الذِّكْرِ",
            "إِنْ",
            "كُنْتُمْ",
            "لَا تَعْلَمُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُمْ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "وَاشْكُرُوْا نِعْمَتَ اللهِ إِنْ كُنْتُمْ إِيَّاهُ تَعْبُدُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 7",
          "sentence": "وَاشْكُرُوْا نِعْمَتَ اللهِ إِنْ كُنْتُمْ إِيَّاهُ تَعْبُدُوْنَ",
          "translation": "And be grateful for the favour of Allah if it is Him you worship.",
          "cells": [
            "وَاشْكُرُوْا",
            "نِعْمَتَ اللهِ",
            "إِنْ",
            "كُنْتُمْ",
            "إِيَّاهُ",
            "تَعْبُدُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُمْ)"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ مُقَدَّمٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "رَابِطَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اِعْمَلْ صَالِحًا إِنْ كُنْتَ تَرْجُو اللهَ وَالْيَوْمَ الْآخِرَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 3), item 8",
          "sentence": "اِعْمَلْ صَالِحًا إِنْ كُنْتَ تَرْجُو اللهَ وَالْيَوْمَ الْآخِرَ",
          "translation": "Do righteousness if you hope for Allah and the Last Day.",
          "cells": [
            "اِعْمَلْ",
            "صَالِحًا",
            "إِنْ",
            "كُنْتَ",
            "تَرْجُو اللهَ وَالْيَوْمَ الْآخِرَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جَوَابُ شَرْطٍ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "شَرْطٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In كُلْ إِنْ كُنْتَ جَائِعًا, what is كُلْ?",
          "options": [
            "the شَرْط",
            "the جَوَابُ الشَّرْطِ, brought forward",
            "a مُنَادًى",
            "a رَابِطَةٌ"
          ],
          "correct": 1,
          "explanation": "The condition follows it, so it is a جَوَابٌ مُقَدَّمٌ."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), item 4",
          "kind": "mcq",
          "prompt": "In أُنْصُرِ الْفُقَرَاءَ وَالْمَسَاكِيْنَ إِنْ كَانَ عِنْدَكَ مَالٌ, what is مَالٌ?",
          "options": [
            "the خَبَرُ كَانَ",
            "the فَاعِلٌ of أُنْصُرْ",
            "the اِسْمُ كَانَ, placed after its خَبَر عِنْدَكَ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "'If there is wealth with you' — a خَبَر مُقَدَّم and an اِسْم مُؤَخَّر inside كَانَ."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In ﴿فَاسْأَلُوْا أَهْلَ الذِّكْرِ إِنْ كُنْتُمْ لَا تَعْلَمُوْنَ﴾, what is the خَبَرُ كَانَ?",
          "options": [
            "أَهْلَ الذِّكْرِ",
            "the whole sentence لَا تَعْلَمُوْنَ",
            "كُنْتُمْ",
            "there is none"
          ],
          "correct": 1,
          "explanation": "A negated verbal sentence can serve as the خَبَر of كَانَ."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), item 7",
          "kind": "mcq",
          "prompt": "In ﴿وَاشْكُرُوْا نِعْمَتَ اللهِ إِنْ كُنْتُمْ إِيَّاهُ تَعْبُدُوْنَ﴾, why is إِيَّاهُ used rather than an attached pronoun?",
          "options": [
            "Because the object has been brought before its verb, so it needs a detached form",
            "Because تَعْبُدُوْنَ is plural",
            "Because it follows كَانَ",
            "Because the verse is a command"
          ],
          "correct": 0,
          "explanation": "An attached pronoun cannot stand ahead of the verb; the fronting also gives the sense 'it is Him you worship'."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), item 8",
          "kind": "mcq",
          "prompt": "In اِعْمَلْ صَالِحًا إِنْ كُنْتَ تَرْجُو اللهَ, why is تَرْجُو not مَجْزُوْمَة?",
          "options": [
            "Because إِنْ is غَيْرُ عَامِلٍ",
            "Because it ends in a wāw",
            "Because it is the خَبَرُ كَانَ inside the شَرْط, not the شَرْط verb itself",
            "Because it comes after a مَاضٍ"
          ],
          "correct": 2,
          "explanation": "The verb إِنْ governs is كُنْتَ; تَرْجُو sits inside it."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), items 2 and 5",
          "kind": "mcq",
          "prompt": "What do لَا تَصُمْ and لَا تَذْهَبْ have in common as جَوَاب clauses?",
          "options": [
            "Both are nominal",
            "Both are prohibitions placed before their شَرْط",
            "Both are مَجْزُوْم by إِنْ",
            "Both require a فَاءٌ رَابِطَةٌ"
          ],
          "correct": 1,
          "explanation": "Their sukūn comes from لَا النَّاهِيَة, not from the أَدَاة."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "In ﴿اِتَّقُوا اللهَ إِنْ كُنْتُمْ مُؤْمِنِيْنَ﴾, what is مُؤْمِنِيْنَ?",
          "options": [
            "the اِسْمُ كَانَ",
            "the خَبَرُ كَانَ",
            "a نَعْتٌ",
            "the مَفْعُوْلٌ بِهِ of اِتَّقُوا"
          ],
          "correct": 1,
          "explanation": "The تُمْ of كُنْتُمْ is the اِسْم; مُؤْمِنِيْنَ is the مَنْصُوْب خَبَر."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 3), all items",
          "kind": "mcq",
          "prompt": "None of the eight sentences of Exercise 4 contains a فَاءٌ رَابِطَةٌ. Why?",
          "options": [
            "Because the جَوَاب precedes the شَرْط in each, so there is nothing to link",
            "Because they are all commands",
            "Because they all use إِنْ",
            "Because the فَ is optional"
          ],
          "correct": 0,
          "explanation": "The linking فَ belongs only to a جَوَاب that follows its شَرْط."
        },
        {
          "title": "hungry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hungry\"?",
          "options": [
            "جَائِعٌ",
            "مِسْكِيْنٌ",
            "مَدْرَسَةٌ",
            "أَكَلَ يَأْكُلُ"
          ],
          "correct": 0
        },
        {
          "title": "hungry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَائِعٌ mean?",
          "options": [
            "hungry",
            "needy one",
            "school",
            "to eat"
          ],
          "correct": 0
        },
        {
          "title": "hungry (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَائِعٌ?",
          "options": [
            "جِيَاعٌ",
            "مَسَاكِيْنُ",
            "مَرْضَى",
            "فُقَرَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "ill",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ill\"?",
          "options": [
            "مَرِيْضٌ",
            "ذِكْرٌ",
            "صَامَ يَصُوْمُ",
            "رَجَا يَرْجُوْ"
          ],
          "correct": 0
        },
        {
          "title": "ill",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرِيْضٌ mean?",
          "options": [
            "ill",
            "remembrance, revelation",
            "to fast",
            "to hope for"
          ],
          "correct": 0
        },
        {
          "title": "ill (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَرِيْضٌ?",
          "options": [
            "مَرْضَى",
            "مَدَارِسُ",
            "فُقَرَاءُ",
            "جِيَاعٌ"
          ],
          "correct": 0
        },
        {
          "title": "poor one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"poor one\"?",
          "options": [
            "فَقِيْرٌ",
            "مَدْرَسَةٌ",
            "أَكَلَ يَأْكُلُ",
            "سَأَلَ يَسْأَلُ"
          ],
          "correct": 0
        },
        {
          "title": "poor one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَقِيْرٌ mean?",
          "options": [
            "poor one",
            "school",
            "to eat",
            "to ask"
          ],
          "correct": 0
        },
        {
          "title": "poor one (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَقِيْرٌ?",
          "options": [
            "فُقَرَاءُ",
            "جِيَاعٌ",
            "مَسَاكِيْنُ",
            "مَرْضَى"
          ],
          "correct": 0
        },
        {
          "title": "needy one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"needy one\"?",
          "options": [
            "مِسْكِيْنٌ",
            "صَامَ يَصُوْمُ",
            "رَجَا يَرْجُوْ",
            "جَائِعٌ"
          ],
          "correct": 0
        },
        {
          "title": "needy one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِسْكِيْنٌ mean?",
          "options": [
            "needy one",
            "to fast",
            "to hope for",
            "hungry"
          ],
          "correct": 0
        },
        {
          "title": "needy one (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِسْكِيْنٌ?",
          "options": [
            "مَسَاكِيْنُ",
            "مَرْضَى",
            "مَدَارِسُ",
            "جِيَاعٌ"
          ],
          "correct": 0
        },
        {
          "title": "remembrance, revelation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"remembrance, revelation\"?",
          "options": [
            "ذِكْرٌ",
            "أَكَلَ يَأْكُلُ",
            "سَأَلَ يَسْأَلُ",
            "مَرِيْضٌ"
          ],
          "correct": 0
        },
        {
          "title": "remembrance, revelation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذِكْرٌ mean?",
          "options": [
            "remembrance, revelation",
            "to eat",
            "to ask",
            "ill"
          ],
          "correct": 0
        },
        {
          "title": "school",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"school\"?",
          "options": [
            "مَدْرَسَةٌ",
            "رَجَا يَرْجُوْ",
            "جَائِعٌ",
            "فَقِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "school",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَدْرَسَةٌ mean?",
          "options": [
            "school",
            "to hope for",
            "hungry",
            "poor one"
          ],
          "correct": 0
        },
        {
          "title": "school (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَدْرَسَةٌ?",
          "options": [
            "مَدَارِسُ",
            "مَسَاكِيْنُ",
            "مَرْضَى",
            "جِيَاعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to fast",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fast\"?",
          "options": [
            "صَامَ يَصُوْمُ",
            "سَأَلَ يَسْأَلُ",
            "مَرِيْضٌ",
            "مِسْكِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to fast",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَامَ يَصُوْمُ mean?",
          "options": [
            "to fast",
            "to ask",
            "ill",
            "needy one"
          ],
          "correct": 0
        },
        {
          "title": "to fast (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَامَ يَصُوْمُ?",
          "options": [
            "صَوْمًا",
            "سُؤَالًا",
            "رَجَاءً",
            "أَكْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to eat",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to eat\"?",
          "options": [
            "أَكَلَ يَأْكُلُ",
            "جَائِعٌ",
            "فَقِيْرٌ",
            "ذِكْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to eat",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكَلَ يَأْكُلُ mean?",
          "options": [
            "to eat",
            "hungry",
            "poor one",
            "remembrance, revelation"
          ],
          "correct": 0
        },
        {
          "title": "to eat (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَكَلَ يَأْكُلُ?",
          "options": [
            "أَكْلًا",
            "صَوْمًا",
            "سُؤَالًا",
            "رَجَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to hope for",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope for\"?",
          "options": [
            "رَجَا يَرْجُوْ",
            "مَرِيْضٌ",
            "مِسْكِيْنٌ",
            "مَدْرَسَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to hope for",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَجَا يَرْجُوْ mean?",
          "options": [
            "to hope for",
            "ill",
            "needy one",
            "school"
          ],
          "correct": 0
        },
        {
          "title": "to hope for (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَجَا يَرْجُوْ?",
          "options": [
            "رَجَاءً",
            "أَكْلًا",
            "صَوْمًا",
            "سُؤَالًا"
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
            "فَقِيْرٌ",
            "ذِكْرٌ",
            "صَامَ يَصُوْمُ"
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
            "poor one",
            "remembrance, revelation",
            "to fast"
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
            "رَجَاءً",
            "أَكْلًا",
            "صَوْمًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "إن وإذا",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "The difference in meaning",
          "lines": [
            {
              "html": "إِذَا is used for events which are certain to occur, i.e. in the meaning of 'when' (see p. 450). إِنْ is used for uncertain events, i.e. in the meaning of 'if'.",
              "list": false
            },
            {
              "html": "إِذَا ذَهَبْتَ — When you go",
              "list": true,
              "bullet": true
            },
            {
              "html": "إِنْ تَذْهَبْ — If you go",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The two side by side",
                "headers": [
                  "Particle",
                  "Certainty",
                  "English",
                  "Example"
                ],
                "rows": [
                  [
                    "إِذَا",
                    "certain to occur",
                    "when",
                    "إِذَا ذَهَبْتَ"
                  ],
                  [
                    "إِنْ",
                    "uncertain",
                    "if",
                    "إِنْ تَذْهَبْ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the core difference in MEANING between إِذَا and إِنْ؟",
            "kind": "mcq",
            "options": [
              "إِذَا is used for events certain to occur ('when'); إِنْ is used for uncertain events ('if')",
              "إِذَا is for uncertain events; إِنْ is for certain ones",
              "Both mean exactly the same thing with no distinction",
              "إِذَا is only used with negative sentences"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The difference in grammar",
          "lines": [
            {
              "html": "The instruction to Exercise 5 asks you to notice the difference between the شَرْطٌ and the sentence مَفْعُوْلٌ فِيْهِ. That is the grammatical half of the comparison, and it matters as much as the meaning.",
              "list": false
            },
            {
              "html": "إِنْ is a حَرْفُ شَرْطٍ. It builds a genuine conditional: a شَرْطٌ and a جَوَابُ الشَّرْطِ, with both verbs مَجْزُوْمٌ. إِذَا is not a حَرْفُ شَرْطٍ at all — it is a ظَرْفٌ, a word of time, met back in Unit 5, Section 3. The sentence after it is its مُضَافٌ إِلَيْهِ, and the whole unit fills a مَفْعُوْلٌ فِيْهِ slot in the main sentence. Neither verb is مَجْزُوْمٌ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِذَا اسْتَيْقَظْتَ فَاذْكُرِ اللهَ",
                "translation": "When you wake up, remember Allah.",
                "cells": [
                  "إِذَا",
                  "اسْتَيْقَظْتَ",
                  "فَ",
                  "اذْكُرِ",
                  "اللهَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "رَابِطَةٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "ظَرْفٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Compare that with an إِنْ sentence from the same exercise, where the two halves are labelled شَرْطٌ and جَوَابُ الشَّرْطِ and both verbs carry a sukūn.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنْ تَنْصُرِ اللهَ يَنْصُرْكَ",
                "translation": "If you help Allah, He will help you.",
                "cells": [
                  "إِنْ",
                  "تَنْصُرِ",
                  "اللهَ",
                  "يَنْصُرْكَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "جَوَابُ الشَّرْطِ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "A quick test on the page: إِذَا is almost always followed by a مَاضٍ that keeps its normal ending, and the second clause almost always carries a فَ. إِنْ is followed by a مُضَارِعٌ مَجْزُوْمٌ, and the فَ appears only when the جَوَاب needs it. Exercise 5 alternates the two deliberately.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the core difference in GRAMMAR between إِذَا and إِنْ؟",
            "kind": "mcq",
            "options": [
              "إِنْ is a genuine حَرْفُ شَرْطٍ that makes both verbs مَجْزُوْمٌ; إِذَا is a ظَرْفٌ whose following sentence is a مُضَافٌ إِلَيْهِ, with neither verb مَجْزُوْمٌ",
              "Both make their verbs مَجْزُوْمٌ identically",
              "إِذَا is a حَرْفُ شَرْطٍ and إِنْ is a ظَرْفٌ — the reverse of the truth",
              "Neither has any grammatical effect on the following verb"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "إِنْ against إِذَا",
        "rows": [
          {
            "label": "إِذَا",
            "arabic": "لِمَا هُوَ مُحَقَّقُ الْوُقُوْعِ",
            "meaning": "certain to occur — 'when'"
          },
          {
            "label": "إِنْ",
            "arabic": "لِمَا هُوَ غَيْرُ مُحَقَّقٍ",
            "meaning": "uncertain — 'if'"
          },
          {
            "label": "إِذَا is",
            "arabic": "ظَرْفٌ",
            "meaning": "a word of time, not a حَرْفُ شَرْطٍ"
          },
          {
            "label": "Its unit",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "the sentence after it is its مُضَافٌ إِلَيْهِ"
          },
          {
            "label": "إِنْ is",
            "arabic": "حَرْفُ شَرْطٍ عَامِلٌ",
            "meaning": "شَرْطٌ + جَوَابُ الشَّرْطِ, both مَجْزُوْم"
          },
          {
            "label": "On the page",
            "arabic": "إِذَا + مَاضٍ ثُمَّ فَ",
            "meaning": "the usual shape of an إِذَا sentence"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does إِذَا convey?",
          "options": [
            "an event certain to occur — 'when'",
            "an uncertain event — 'if'",
            "an impossible event",
            "a past event"
          ],
          "correct": 0,
          "explanation": "إِذَا ذَهَبْتَ — 'when you go'."
        },
        {
          "q": "What does إِنْ convey?",
          "options": [
            "certainty",
            "a command",
            "uncertainty — 'if'",
            "a wish"
          ],
          "correct": 2,
          "explanation": "إِنْ تَذْهَبْ — 'if you go'."
        },
        {
          "q": "Grammatically, what is إِذَا?",
          "options": [
            "a حَرْفُ شَرْطٍ",
            "a ظَرْفٌ — a word of time",
            "an اِسْمُ شَرْطٍ",
            "a حَرْفُ عَطْفٍ"
          ],
          "correct": 1,
          "explanation": "That is why its clause is a مَفْعُوْلٌ فِيْهِ, not a شَرْطٌ."
        },
        {
          "q": "What is the sentence after إِذَا, grammatically?",
          "options": [
            "its جَوَابٌ",
            "a صِلَةٌ",
            "a نَعْتٌ",
            "its مُضَافٌ إِلَيْهِ"
          ],
          "correct": 3,
          "explanation": "A ظَرْفٌ can take a whole sentence as its مُضَافٌ إِلَيْهِ."
        },
        {
          "q": "Are the verbs of an إِذَا sentence مَجْزُوْم?",
          "options": [
            "No — إِذَا is not عَامِلٌ over them",
            "Yes, both are",
            "Only the first",
            "Only the second"
          ],
          "correct": 0,
          "explanation": "Unlike إِنْ, it causes no jazm at all."
        },
        {
          "q": "What shape does an إِذَا sentence usually take on the page?",
          "options": [
            "إِذَا with two مُضَارِع verbs",
            "إِذَا with a مَاضٍ, and a فَ before the second clause",
            "إِذَا with a nominal sentence only",
            "إِذَا at the end of the sentence"
          ],
          "correct": 1,
          "explanation": "Every إِذَا item in Exercise 5 follows exactly this shape."
        }
      ],
      "bank": [
        {
          "title": "إِنْ تَنْصُرِ اللهَ يَنْصُرْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 1",
          "sentence": "إِنْ تَنْصُرِ اللهَ يَنْصُرْكَ",
          "translation": "If you help Allah, He will help you.",
          "cells": [
            "إِنْ",
            "تَنْصُرِ",
            "اللهَ",
            "يَنْصُرْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "رَابِطَةٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِذَا اسْتَيْقَظْتَ فَاذْكُرِ اللهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 2",
          "sentence": "إِذَا اسْتَيْقَظْتَ فَاذْكُرِ اللهَ",
          "translation": "When you wake up, remember Allah.",
          "cells": [
            "إِذَا",
            "اسْتَيْقَظْتَ",
            "فَ",
            "اذْكُرِ",
            "اللهَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "ظَرْفٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "جَوَابُ الشَّرْطِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ تَسْتَيْقِظْ قَبْلِيْ فَأَيْقِظْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 3",
          "sentence": "إِنْ تَسْتَيْقِظْ قَبْلِيْ فَأَيْقِظْنِيْ",
          "translation": "If you wake before me, wake me.",
          "cells": [
            "إِنْ",
            "تَسْتَيْقِظْ",
            "قَبْلِيْ",
            "فَ",
            "أَيْقِظْنِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ) وَمَفْعُوْلٌ بِهِ (ي)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِذَا جَاءَ نَصْرُ اللهِ فَاشْكُرُوا اللهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 4",
          "sentence": "إِذَا جَاءَ نَصْرُ اللهِ فَاشْكُرُوا اللهَ",
          "translation": "When the help of Allah comes, be grateful to Allah.",
          "cells": [
            "إِذَا",
            "جَاءَ نَصْرُ اللهِ",
            "فَ",
            "اشْكُرُوا",
            "اللهَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "ظَرْفٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "جَوَابُ الشَّرْطِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِذَا تَكَلَّمْتَ فَاصْدُقْ وَلَا تَكْذِبْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 5",
          "sentence": "إِذَا تَكَلَّمْتَ فَاصْدُقْ وَلَا تَكْذِبْ",
          "translation": "When you speak, be truthful and do not lie.",
          "cells": [
            "إِذَا",
            "تَكَلَّمْتَ",
            "فَ",
            "اصْدُقْ",
            "وَلَا تَكْذِبْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جُمْلَةٌ مَعْطُوْفَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "ظَرْفٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "جَوَابُ الشَّرْطِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِذَا رَأَيْتَ أَخَاكَ فَسَلِّمْ عَلَيْهِ مِنِّيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 6",
          "sentence": "إِذَا رَأَيْتَ أَخَاكَ فَسَلِّمْ عَلَيْهِ مِنِّيْ",
          "translation": "When you see your brother, give him my greetings.",
          "cells": [
            "إِذَا",
            "رَأَيْتَ أَخَاكَ",
            "فَ",
            "سَلِّمْ",
            "عَلَيْهِ مِنِّيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "ظَرْفٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "جَوَابُ الشَّرْطِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ تَرَ الْكَعْبَةَ بِعَيْنَيْكَ يُعْجِبْكَ حُسْنُهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 7",
          "sentence": "إِنْ تَرَ الْكَعْبَةَ بِعَيْنَيْكَ يُعْجِبْكَ حُسْنُهَا",
          "translation": "If you see the Kaʿbah with your own eyes, its beauty will please you.",
          "cells": [
            "إِنْ",
            "تَرَ",
            "الْكَعْبَةَ",
            "بِعَيْنَيْكَ",
            "يُعْجِبْكَ",
            "حُسْنُهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "رَابِطَةٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ تَجْلِسْ مَعَ الْعُلَمَاءِ يَنْفَعْكَ عِلْمُهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 8",
          "sentence": "إِنْ تَجْلِسْ مَعَ الْعُلَمَاءِ يَنْفَعْكَ عِلْمُهُمْ",
          "translation": "If you sit with the scholars, their knowledge will benefit you.",
          "cells": [
            "إِنْ",
            "تَجْلِسْ",
            "مَعَ الْعُلَمَاءِ",
            "يَنْفَعْكَ",
            "عِلْمُهُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ الشَّرْطِ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "رَابِطَةٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنْ يَسْأَلْكَ الْأُسْتَاذُ فَاصْدُقْ وَلَا تَكْذِبْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 9",
          "sentence": "إِنْ يَسْأَلْكَ الْأُسْتَاذُ فَاصْدُقْ وَلَا تَكْذِبْ",
          "translation": "If the teacher asks you, be truthful and do not lie.",
          "cells": [
            "إِنْ",
            "يَسْأَلْكَ",
            "الْأُسْتَاذُ",
            "فَ",
            "اصْدُقْ وَلَا تَكْذِبْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ مَعَ الْمَعْطُوْفِ عَلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِذَا جَلَسْتَ فِي الدَّرْسِ فَاسْتَمِعْ إِلَى الْأُسْتَاذِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Unit 6, Part 3), item 10",
          "sentence": "إِذَا جَلَسْتَ فِي الدَّرْسِ فَاسْتَمِعْ إِلَى الْأُسْتَاذِ",
          "translation": "When you sit in the lesson, listen to the teacher.",
          "cells": [
            "إِذَا",
            "جَلَسْتَ فِي الدَّرْسِ",
            "فَ",
            "اسْتَمِعْ",
            "إِلَى الْأُسْتَاذِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "ظَرْفٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "جَوَابُ الشَّرْطِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 2",
          "kind": "mcq",
          "prompt": "In إِذَا اسْتَيْقَظْتَ فَاذْكُرِ اللهَ, what is إِذَا اسْتَيْقَظْتَ?",
          "options": [
            "the شَرْطُ",
            "a مَفْعُوْلٌ فِيْهِ",
            "a حَالٌ",
            "the جَوَابُ الشَّرْطِ"
          ],
          "correct": 1,
          "explanation": "The very distinction the exercise instruction asks you to notice."
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In إِنْ تَنْصُرِ اللهَ يَنْصُرْكَ, why is there no فَ before يَنْصُرْكَ?",
          "options": [
            "Because إِنْ forbids it",
            "Because the جَوَاب is a bare مَجْزُوْم مُضَارِع, which needs no linking فَ",
            "Because the sentence is Qur'ānic",
            "Because the جَوَاب comes first"
          ],
          "correct": 1,
          "explanation": "One of the two forms that stand without the فَ."
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "In إِنْ تَسْتَيْقِظْ قَبْلِيْ فَأَيْقِظْنِيْ, why is the فَ needed?",
          "options": [
            "Because إِذَا is understood",
            "Because قَبْلِيْ intervenes",
            "Because the جَوَاب is an أَمْر",
            "Because the verbs are from the same root"
          ],
          "correct": 2,
          "explanation": "A command cannot be the bare مَجْزُوْم جَوَاب."
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 4",
          "kind": "mcq",
          "prompt": "Why is إِذَا rather than إِنْ used in إِذَا جَاءَ نَصْرُ اللهِ فَاشْكُرُوا اللهَ?",
          "options": [
            "Because the help of Allah is certain to come",
            "Because the verb is مَاضٍ",
            "Because the جَوَاب is a command",
            "Because اللهِ is definite"
          ],
          "correct": 0,
          "explanation": "إِذَا is for what will certainly occur."
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 7",
          "kind": "mcq",
          "prompt": "In إِنْ تَرَ الْكَعْبَةَ بِعَيْنَيْكَ يُعْجِبْكَ حُسْنُهَا, what has happened to تَرَى?",
          "options": [
            "Nothing — it is written in full",
            "The alif maqṣūrah has been dropped for jazm",
            "It has become مَنْصُوْبَة",
            "It has become مَاضٍ"
          ],
          "correct": 1,
          "explanation": "A verb ending in a weak letter loses it in the مَجْزُوْم state."
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 8",
          "kind": "mcq",
          "prompt": "In إِنْ تَجْلِسْ مَعَ الْعُلَمَاءِ يَنْفَعْكَ عِلْمُهُمْ, what is عِلْمُهُمْ?",
          "options": [
            "the مَفْعُوْلٌ بِهِ",
            "the فَاعِلٌ of يَنْفَعْ",
            "a مُبْتَدَأٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "The كَ attached to the verb is the object; the knowledge is the doer."
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 9",
          "kind": "mcq",
          "prompt": "In إِنْ يَسْأَلْكَ الْأُسْتَاذُ فَاصْدُقْ وَلَا تَكْذِبْ, how many commands follow the one فَ?",
          "options": [
            "one",
            "two — an أَمْر and a نَهْي",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "The فَ links the first, and وَ joins the second to it."
        },
        {
          "title": "Book Exercise 5 (Unit 6, Part 3), item 10",
          "kind": "mcq",
          "prompt": "In إِذَا جَلَسْتَ فِي الدَّرْسِ فَاسْتَمِعْ إِلَى الْأُسْتَاذِ, how should إِذَا be translated?",
          "options": [
            "'if'",
            "'unless'",
            "'when'",
            "'whenever you might'"
          ],
          "correct": 2,
          "explanation": "Sitting in the lesson is taken as certain, so 'when'."
        },
        {
          "title": "the Kaʿbah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the Kaʿbah\"?",
          "options": [
            "كَعْبَةٌ",
            "نَصْرٌ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "تَكَلَّمَ يَتَكَلَّمُ"
          ],
          "correct": 0
        },
        {
          "title": "the Kaʿbah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَعْبَةٌ mean?",
          "options": [
            "the Kaʿbah",
            "help, victory",
            "to wake up",
            "to speak"
          ],
          "correct": 0
        },
        {
          "title": "beauty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"beauty\"?",
          "options": [
            "حُسْنٌ",
            "أَخٌ",
            "أَيْقَظَ يُوْقِظُ",
            "سَلَّمَ يُسَلِّمُ"
          ],
          "correct": 0
        },
        {
          "title": "beauty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حُسْنٌ mean?",
          "options": [
            "beauty",
            "brother",
            "to wake someone",
            "to greet"
          ],
          "correct": 0
        },
        {
          "title": "eye",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"eye\"?",
          "options": [
            "عَيْنٌ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "تَكَلَّمَ يَتَكَلَّمُ",
            "اِسْتَمَعَ يَسْتَمِعُ"
          ],
          "correct": 0
        },
        {
          "title": "eye",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَيْنٌ mean?",
          "options": [
            "eye",
            "to wake up",
            "to speak",
            "to listen"
          ],
          "correct": 0
        },
        {
          "title": "help, victory",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"help, victory\"?",
          "options": [
            "نَصْرٌ",
            "أَيْقَظَ يُوْقِظُ",
            "سَلَّمَ يُسَلِّمُ",
            "جَلَسَ يَجْلِسُ"
          ],
          "correct": 0
        },
        {
          "title": "help, victory",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَصْرٌ mean?",
          "options": [
            "help, victory",
            "to wake someone",
            "to greet",
            "to sit"
          ],
          "correct": 0
        },
        {
          "title": "brother",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"brother\"?",
          "options": [
            "أَخٌ",
            "تَكَلَّمَ يَتَكَلَّمُ",
            "اِسْتَمَعَ يَسْتَمِعُ",
            "كَعْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "brother",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخٌ mean?",
          "options": [
            "brother",
            "to speak",
            "to listen",
            "the Kaʿbah"
          ],
          "correct": 0
        },
        {
          "title": "to wake up",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wake up\"?",
          "options": [
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "سَلَّمَ يُسَلِّمُ",
            "جَلَسَ يَجْلِسُ",
            "حُسْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to wake up",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَيْقَظَ يَسْتَيْقِظُ mean?",
          "options": [
            "to wake up",
            "to greet",
            "to sit",
            "beauty"
          ],
          "correct": 0
        },
        {
          "title": "to wake up (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَيْقَظَ يَسْتَيْقِظُ?",
          "options": [
            "اِسْتِيْقَاظًا",
            "تَسْلِيْمًا",
            "جُلُوْسًا",
            "تَكَلُّمًا"
          ],
          "correct": 0
        },
        {
          "title": "to wake someone",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wake someone\"?",
          "options": [
            "أَيْقَظَ يُوْقِظُ",
            "اِسْتَمَعَ يَسْتَمِعُ",
            "كَعْبَةٌ",
            "عَيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to wake someone",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْقَظَ يُوْقِظُ mean?",
          "options": [
            "to wake someone",
            "to listen",
            "the Kaʿbah",
            "eye"
          ],
          "correct": 0
        },
        {
          "title": "to wake someone (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَيْقَظَ يُوْقِظُ?",
          "options": [
            "إِيْقَاظًا",
            "اِسْتِمَاعًا",
            "اِسْتِيْقَاظًا",
            "تَسْلِيْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to speak",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to speak\"?",
          "options": [
            "تَكَلَّمَ يَتَكَلَّمُ",
            "جَلَسَ يَجْلِسُ",
            "حُسْنٌ",
            "نَصْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to speak",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَكَلَّمَ يَتَكَلَّمُ mean?",
          "options": [
            "to speak",
            "to sit",
            "beauty",
            "help, victory"
          ],
          "correct": 0
        },
        {
          "title": "to speak (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَكَلَّمَ يَتَكَلَّمُ?",
          "options": [
            "تَكَلُّمًا",
            "جُلُوْسًا",
            "إِيْقَاظًا",
            "اِسْتِمَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to greet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to greet\"?",
          "options": [
            "سَلَّمَ يُسَلِّمُ",
            "كَعْبَةٌ",
            "عَيْنٌ",
            "أَخٌ"
          ],
          "correct": 0
        },
        {
          "title": "to greet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَلَّمَ يُسَلِّمُ mean?",
          "options": [
            "to greet",
            "the Kaʿbah",
            "eye",
            "brother"
          ],
          "correct": 0
        },
        {
          "title": "to greet (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَلَّمَ يُسَلِّمُ?",
          "options": [
            "تَسْلِيْمًا",
            "اِسْتِيْقَاظًا",
            "تَكَلُّمًا",
            "جُلُوْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to listen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to listen\"?",
          "options": [
            "اِسْتَمَعَ يَسْتَمِعُ",
            "حُسْنٌ",
            "نَصْرٌ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ"
          ],
          "correct": 0
        },
        {
          "title": "to listen",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَمَعَ يَسْتَمِعُ mean?",
          "options": [
            "to listen",
            "beauty",
            "help, victory",
            "to wake up"
          ],
          "correct": 0
        },
        {
          "title": "to listen (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَمَعَ يَسْتَمِعُ?",
          "options": [
            "اِسْتِمَاعًا",
            "إِيْقَاظًا",
            "تَسْلِيْمًا",
            "اِسْتِيْقَاظًا"
          ],
          "correct": 0
        },
        {
          "title": "to sit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sit\"?",
          "options": [
            "جَلَسَ يَجْلِسُ",
            "عَيْنٌ",
            "أَخٌ",
            "أَيْقَظَ يُوْقِظُ"
          ],
          "correct": 0
        },
        {
          "title": "to sit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَلَسَ يَجْلِسُ mean?",
          "options": [
            "to sit",
            "eye",
            "brother",
            "to wake someone"
          ],
          "correct": 0
        },
        {
          "title": "to sit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَلَسَ يَجْلِسُ?",
          "options": [
            "جُلُوْسًا",
            "تَكَلُّمًا",
            "اِسْتِمَاعًا",
            "إِيْقَاظًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "الشرط غير الحقيقي",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "What an unreal conditional is",
          "lines": [
            {
              "html": "Unreal conditionals relate to circumstances in which the results are unlikely to occur or cannot be changed. There are two types: the second conditional and the third conditional.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What do the second and third conditionals have in common, as opposed to zero/first؟",
            "kind": "mcq",
            "options": [
              "Both are unreal conditionals — results that are unlikely to occur or cannot be changed",
              "Both use the مُضَارِعٌ مَجْزُوْمٌ, just like real conditionals",
              "Both are only used for religious rulings",
              "Both require the أَدَاة إِنْ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Second conditional",
          "lines": [
            {
              "html": "Conditions which are possible but unlikely to be met are represented by the second conditional. These are expressed using the past tense in the condition clause and would, should, could, might, etc. in the result clause.",
              "list": false
            },
            {
              "html": "The book's illustration is in English: \"If you worked hard, you would be successful.\" This can also be translated by placing 'were' at the beginning of the sentence, followed by the infinitive: \"Were you to work hard, you would be successful.\"",
              "list": false
            },
            {
              "html": "Note: the condition clause is translated using the past tense, even though it gives a future meaning — the past tense here indicates distance from reality, not past events.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In the second conditional, why is the condition clause translated with the PAST tense even though it describes a FUTURE possibility؟",
            "kind": "mcq",
            "options": [
              "Because the past tense here signals distance from reality (unlikelihood), not an actual past event",
              "Because Arabic literally means the event already happened",
              "It is simply a translation error the book acknowledges",
              "Because the شَرْط always refers to yesterday"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Third conditional",
          "lines": [
            {
              "html": "Past situations which cannot be changed are represented by the third conditional. These are expressed using the past tense with 'had' in the condition clause and would have, should have, could have, might have, etc. in the result clause, followed by the past participle.",
              "list": false
            },
            {
              "html": "The book's illustration is in English: \"If you had worked hard, you would have been successful.\" This can also be translated by placing 'had' at the beginning of the sentence, followed by the past tense: \"Had you worked hard, you would have been successful.\"",
              "list": false
            },
            {
              "table": {
                "title": "The four conditionals gathered",
                "headers": [
                  "Type",
                  "شَرْطٌ (Condition)",
                  "جَوَابُ الشَّرْطِ (Result)"
                ],
                "rows": [
                  [
                    "Zero (General Truths)",
                    "you work hard (Present)",
                    "you are successful (Present)"
                  ],
                  [
                    "First (Future: Possible)",
                    "you work hard (Present)",
                    "you will be successful (Future)"
                  ],
                  [
                    "Second (Future: Possible, Unlikely)",
                    "you worked hard (Past)",
                    "you would be successful (Would + infinitive)"
                  ],
                  [
                    "Third (Past, Unchangeable)",
                    "you had worked hard (Had + past)",
                    "you would have been successful (Would have + past participle)"
                  ]
                ]
              }
            },
            {
              "html": "Arabic makes no distinction between the second and the third. لَوِ اجْتَهَدتَّ لَنَجَحْتَ carries both readings, and the book gives both underneath it. As with the zero and first conditionals, the context decides which English to use.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why does Arabic make no distinction between the second and third conditional the way English does؟",
            "kind": "mcq",
            "options": [
              "Because لَوِ اجْتَهَدتَّ لَنَجَحْتَ carries both readings identically in Arabic, and only context (via the English translation) decides which applies",
              "Because Arabic has no unreal conditionals at all",
              "Because Arabic only ever expresses the third conditional",
              "Because English also makes no such distinction"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Constructing unreal conditions",
          "lines": [
            {
              "html": "The unreal conditional is constructed by adding one of the following حَرْفُ الشَّرْطِ: لَوْ, or لَوْلَا. The حَرْفُ الشَّرْطِ used in unreal conditionals are غَيْرُ عَامِلٍ — they cause no jazm at all.",
              "list": false
            },
            {
              "html": "لَوْ can be followed by a جُمْلَةٌ فِعْلِيَّةٌ or a جُمْلَةٌ اسْمِيَّةٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is true of the two particles used to build unreal conditionals, لَوْ and لَوْلَا؟",
            "kind": "mcq",
            "options": [
              "Both are غَيْرُ عَامِلٍ — they cause no jazm at all, unlike إِنْ",
              "Both are عَامِلٌ, causing jazm exactly like إِنْ",
              "Only لَوْ is عَامِلٌ; لَوْلَا is not",
              "Only لَوْلَا is عَامِلٌ; لَوْ is not"
            ],
            "correct": 0
          }
        },
        {
          "heading": "لَوْ with a جُمْلَةٌ فِعْلِيَّةٌ",
          "lines": [
            {
              "html": "لَوْ is usually followed by a فِعْلٌ مَاضٍ in both the شَرْط and the جَوَابُ الشَّرْطِ. The جَوَاب of لَوْ is often preceded by a لَامٌ, known as لَامُ الْجَوَابِ.",
              "list": false
            },
            {
              "html": "لَوِ اجْتَهَدتَّ لَنَجَحْتَ — If you worked hard, you would be successful. / If you had worked hard, you would have been successful.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَوِ اجْتَهَدتَّ لَنَجَحْتَ",
                "translation": "If you worked hard, you would be successful.",
                "cells": [
                  "لَوْ",
                  "اجْتَهَدتَّ",
                  "لَ",
                  "نَجَحْتَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "جَوَابُ شَرْطٍ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "لَامُ الْجَوَابِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Three things separate this from an إِنْ sentence. The particle is غَيْرُ عَامِلٍ, so both verbs keep their normal endings; both verbs are مَاضٍ rather than مُضَارِع; and the جَوَاب is marked by لَ, not by the فَاءُ الرَّابِطَة. When the جَوَاب is negative the لَ is joined to مَا — لَمَا أَخْطَأْتَ, 'you would not have erred'.",
              "list": false
            },
            {
              "table": {
                "title": "إِنْ against لَوْ",
                "headers": [
                  "",
                  "إِنْ",
                  "لَوْ"
                ],
                "rows": [
                  [
                    "Type",
                    "real conditional",
                    "unreal conditional"
                  ],
                  [
                    "Governing?",
                    "عَامِلٌ — both verbs مَجْزُوْمٌ",
                    "غَيْرُ عَامِلٍ"
                  ],
                  [
                    "Usual verb",
                    "مُضَارِعٌ",
                    "مَاضٍ in both clauses"
                  ],
                  [
                    "Marker on the جَوَاب",
                    "فَاءٌ رَابِطَةٌ, when needed",
                    "لَامُ الْجَوَابِ, often"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What three things distinguish a لَوْ sentence from an إِنْ sentence, as in لَوِ اجْتَهَدتَّ لَنَجَحْتَ؟",
            "kind": "mcq",
            "options": [
              "لَوْ is غَيْرُ عَامِلٍ (verbs keep normal endings), both verbs are مَاضٍ rather than مُضَارِع, and the جَوَاب is marked by لَامُ الْجَوَابِ rather than a فَاءُ رَابِطَةٌ",
              "There is no real difference between the two constructions",
              "لَوْ always requires a مُضَارِعٌ مَجْزُوْمٌ exactly like إِنْ",
              "لَوْ never marks its جَوَاب with anything at all"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Unreal conditionals",
        "rows": [
          {
            "label": "Meaning",
            "arabic": "مَا لَا يُتَوَقَّعُ وُقُوْعُهُ",
            "meaning": "results unlikely, or now unchangeable"
          },
          {
            "label": "Second",
            "arabic": "مُمْكِنٌ لٰكِنْ بَعِيْدٌ",
            "meaning": "'if you worked hard, you would…'"
          },
          {
            "label": "Third",
            "arabic": "مَاضٍ لَا يُغَيَّرُ",
            "meaning": "'if you had worked hard, you would have…'"
          },
          {
            "label": "Particles",
            "arabic": "لَوْ وَلَوْلَا",
            "meaning": "both غَيْرُ عَامِلٍ"
          },
          {
            "label": "Usual verbs",
            "arabic": "مَاضٍ فِي الشَّرْطِ وَالْجَوَابِ",
            "meaning": "not the مُضَارِع of a real conditional"
          },
          {
            "label": "The marker",
            "arabic": "لَامُ الْجَوَابِ",
            "meaning": "لَنَجَحْتَ; with a negative, لَمَا"
          }
        ]
      },
      "quiz": [
        {
          "q": "What do unreal conditionals describe?",
          "options": [
            "general truths",
            "results which are unlikely to occur or cannot be changed",
            "future possibilities",
            "commands"
          ],
          "correct": 1,
          "explanation": "Hence the two types: the unlikely, and the unchangeable."
        },
        {
          "q": "Which English tense is used in the condition clause of a second conditional?",
          "options": [
            "present",
            "future",
            "past perfect",
            "past"
          ],
          "correct": 3,
          "explanation": "'If you worked hard…' — a past form with a future sense."
        },
        {
          "q": "In an unreal لَوْ conditional, both الشَّرْطُ and الْجَوَابُ use a مَاضٍ verb. What does that past-tense form actually indicate?",
          "options": [
            "distance from reality, not past events",
            "a completed action",
            "a habitual action",
            "politeness"
          ],
          "correct": 0,
          "explanation": "It is the grammar of unreality, not of time."
        },
        {
          "q": "How is a third conditional expressed in English?",
          "options": [
            "present, then 'will'",
            "past, then 'would'",
            "'had' + past, then 'would have' + past participle",
            "'were' + infinitive in both clauses"
          ],
          "correct": 2,
          "explanation": "'If you had worked hard, you would have been successful.'"
        },
        {
          "q": "Which two particles build an unreal conditional in Arabic?",
          "options": [
            "إِنْ and إِذَا",
            "لَوْ and لَوْلَا",
            "مَنْ and مَا",
            "لَمْ and لَنْ"
          ],
          "correct": 1,
          "explanation": "Both are غَيْرُ عَامِلٍ."
        },
        {
          "q": "What is the لَ on the جَوَاب of لَوْ called?",
          "options": [
            "فَاءٌ رَابِطَةٌ",
            "لَامُ الْأَمْرِ",
            "لَامُ التَّعْلِيْلِ",
            "لَامُ الْجَوَابِ"
          ],
          "correct": 3,
          "explanation": "لَوِ اجْتَهَدتَّ لَنَجَحْتَ."
        }
      ],
      "bank": [
        {
          "title": "لَوِ اجْتَهَدتَّ لَنَجَحْتَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 583)",
          "sentence": "لَوِ اجْتَهَدتَّ لَنَجَحْتَ",
          "translation": "If you worked hard, you would be successful.",
          "cells": [
            "لَوْ",
            "اجْتَهَدتَّ",
            "لَ",
            "نَجَحْتَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ) ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَوْ أَذْنَبْتُمْ لَحُرِمْتُمْ كَثِيْرًا مِنْ رِزْقِكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 1",
          "sentence": "لَوْ أَذْنَبْتُمْ لَحُرِمْتُمْ كَثِيْرًا مِنْ رِزْقِكُمْ",
          "translation": "If you sinned, you would be deprived of much of your provision.",
          "cells": [
            "لَوْ",
            "أَذْنَبْتُمْ",
            "لَ",
            "حُرِمْتُمْ",
            "كَثِيْرًا مِنْ رِزْقِكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْهُوْلٌ وَنَائِبُ الْفَاعِلِ (تُمْ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوِ اجْتَهَدَتِ اجْتِهَادًا لَفَاقَتْ أَقْرَانَهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 2",
          "sentence": "لَوِ اجْتَهَدَتِ اجْتِهَادًا لَفَاقَتْ أَقْرَانَهَا",
          "translation": "Had she striven properly, she would have surpassed her peers.",
          "cells": [
            "لَوْ",
            "اجْتَهَدَتِ",
            "اجْتِهَادًا",
            "لَ",
            "فَاقَتْ",
            "أَقْرَانَهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ) ثَانٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ قَرَأْتَ مِنَ الْمُصْحَفِ لَمَا أَخْطَأْتَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 3",
          "sentence": "لَوْ قَرَأْتَ مِنَ الْمُصْحَفِ لَمَا أَخْطَأْتَ",
          "translation": "Had you read from the muṣḥaf, you would not have erred.",
          "cells": [
            "لَوْ",
            "قَرَأْتَ",
            "مِنَ الْمُصْحَفِ",
            "لَمَا",
            "أَخْطَأْتَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ) ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ ذَاقُوْا حَلَاوَةَ الْإِيْمَانِ لَمَا تَرَكُوا الصَّلَوَاتِ الْمَكْتُوْبَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 4",
          "sentence": "لَوْ ذَاقُوْا حَلَاوَةَ الْإِيْمَانِ لَمَا تَرَكُوا الصَّلَوَاتِ الْمَكْتُوْبَةَ",
          "translation": "Had they tasted the sweetness of faith, they would not have abandoned the prescribed prayers.",
          "cells": [
            "لَوْ",
            "ذَاقُوْا",
            "حَلَاوَةَ الْإِيْمَانِ",
            "لَمَا",
            "تَرَكُوا",
            "الصَّلَوَاتِ الْمَكْتُوْبَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (و) ثَانٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَوْ وَضَعْتُمُ الْأَشْيَاءَ فِيْ مَوَاضِعِهَا لَوَجَدْتُمُوْهَا حِيْنَ احْتَجْتُمْ إِلَيْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 5",
          "sentence": "لَوْ وَضَعْتُمُ الْأَشْيَاءَ فِيْ مَوَاضِعِهَا لَوَجَدْتُمُوْهَا حِيْنَ احْتَجْتُمْ إِلَيْهَا",
          "translation": "Had you put things in their places, you would have found them when you needed them.",
          "cells": [
            "لَوْ",
            "وَضَعْتُمُ",
            "الْأَشْيَاءَ فِيْ مَوَاضِعِهَا",
            "لَ",
            "وَجَدْتُمُوْهَا",
            "حِيْنَ احْتَجْتُمْ إِلَيْهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ مَعَ غَيْرِ الصَّرِيْحِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُمْ) وَمَفْعُوْلٌ بِهِ (هَا)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ أَنْزَلَ اللهُ كُلَّ آيَةٍ لِكُفَّارِ مَكَّةَ لَمَا آمَنُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 6",
          "sentence": "لَوْ أَنْزَلَ اللهُ كُلَّ آيَةٍ لِكُفَّارِ مَكَّةَ لَمَا آمَنُوْا",
          "translation": "Had Allah sent down every sign to the disbelievers of Makkah, they would not have believed.",
          "cells": [
            "لَوْ",
            "أَنْزَلَ",
            "اللهُ",
            "كُلَّ آيَةٍ لِكُفَّارِ مَكَّةَ",
            "لَمَا",
            "آمَنُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ مَعَ غَيْرِ الصَّرِيْحِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَوْ نَظَرُوْا إِلَى السَّمَاءِ وَالْأَرْضِ نَظَرَ فِكْرٍ لَعَرَفُوْا أَنَّ لَهُمَا خَالِقًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 7",
          "sentence": "لَوْ نَظَرُوْا إِلَى السَّمَاءِ وَالْأَرْضِ نَظَرَ فِكْرٍ لَعَرَفُوْا أَنَّ لَهُمَا خَالِقًا",
          "translation": "Had they looked at the heavens and the earth with a thoughtful look, they would have known that the two have a Creator.",
          "cells": [
            "لَوْ",
            "نَظَرُوْا",
            "إِلَى السَّمَاءِ وَالْأَرْضِ",
            "نَظَرَ فِكْرٍ",
            "لَ",
            "عَرَفُوْا",
            "أَنَّ لَهُمَا خَالِقًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (و) ثَانٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "اِسْمٌ مُؤَوَّلٌ — مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَلَوْ كَانَ فِي الْمَسْجِدِ مِنْبَرٌ لَوَعَظَ جَالِسًا عَلَيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 8",
          "sentence": "وَلَوْ كَانَ فِي الْمَسْجِدِ مِنْبَرٌ لَوَعَظَ جَالِسًا عَلَيْهِ",
          "translation": "Had there been a minbar in the mosque, he would have admonished them seated on it.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "فِي الْمَسْجِدِ",
            "مِنْبَرٌ",
            "لَ",
            "وَعَظَ",
            "جَالِسًا عَلَيْهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ كَانَ مُؤَخَّرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ تَرَكْتَ الضِّحْكَ وَالْكَلَامَ فِي الْفَصْلِ لَفَهِمْتَ الدَّرْسَ فَهْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Unit 6, Part 3), item 9",
          "sentence": "لَوْ تَرَكْتَ الضِّحْكَ وَالْكَلَامَ فِي الْفَصْلِ لَفَهِمْتَ الدَّرْسَ فَهْمًا",
          "translation": "Had you left off laughing and talking in class, you would have understood the lesson well.",
          "cells": [
            "لَوْ",
            "تَرَكْتَ",
            "الضِّحْكَ وَالْكَلَامَ",
            "فِي الْفَصْلِ",
            "لَ",
            "فَهِمْتَ",
            "الدَّرْسَ فَهْمًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ) ثَانٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ مَعَ الْمَفْعُوْلِ الْمُطْلَقِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In لَوْ أَذْنَبْتُمْ لَحُرِمْتُمْ كَثِيْرًا مِنْ رِزْقِكُمْ, what voice is حُرِمْتُمْ?",
          "options": [
            "مَعْلُوْمٌ",
            "مَجْهُوْلٌ — 'you would be deprived'",
            "an أَمْر",
            "a نَهْي"
          ],
          "correct": 1,
          "explanation": "The لَامُ الْجَوَابِ sits on a passive verb here."
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 2",
          "kind": "mcq",
          "prompt": "In لَوِ اجْتَهَدَتِ اجْتِهَادًا لَفَاقَتْ أَقْرَانَهَا, what is اجْتِهَادًا?",
          "options": [
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ",
            "a مَفْعُوْلٌ مُطْلَقٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "The مَصْدَر of the same verb, emphasising it."
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "In لَوْ قَرَأْتَ مِنَ الْمُصْحَفِ لَمَا أَخْطَأْتَ, what is لَمَا?",
          "options": [
            "the لَامُ الْجَوَابِ joined to the negating مَا",
            "a single word meaning 'when'",
            "a حَرْفُ شَرْطٍ",
            "an اِسْمٌ مَوْصُوْلٌ"
          ],
          "correct": 0,
          "explanation": "'You would not have erred' — the جَوَاب is negative."
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 5",
          "kind": "mcq",
          "prompt": "In لَوْ وَضَعْتُمُ الْأَشْيَاءَ فِيْ مَوَاضِعِهَا لَوَجَدْتُمُوْهَا حِيْنَ احْتَجْتُمْ إِلَيْهَا, what is حِيْنَ احْتَجْتُمْ?",
          "options": [
            "a نَعْتٌ",
            "a مَفْعُوْلٌ فِيْهِ — a ظَرْف with a sentence مُضَافٌ إِلَيْهِ",
            "a second جَوَاب",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "The same construction as إِذَا, met in the previous lesson."
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In لَوْ أَنْزَلَ اللهُ كُلَّ آيَةٍ لِكُفَّارِ مَكَّةَ لَمَا آمَنُوْا بَلْ زَادُوْا كُفْرًا, what does بَلْ introduce?",
          "options": [
            "a second شَرْط",
            "a question",
            "what would have happened instead of belief",
            "a new sentence unrelated to the condition"
          ],
          "correct": 2,
          "explanation": "'They would not have believed — rather, they would have increased in disbelief.'"
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 7",
          "kind": "mcq",
          "prompt": "In لَوْ نَظَرُوْا … نَظَرَ فِكْرٍ لَعَرَفُوْا أَنَّ لَهُمَا خَالِقًا, what is أَنَّ لَهُمَا خَالِقًا?",
          "options": [
            "a نَعْتٌ",
            "a second شَرْط",
            "a حَالٌ",
            "an اِسْمٌ مُؤَوَّلٌ — the مَفْعُوْلٌ بِهِ of عَرَفُوْا"
          ],
          "correct": 3,
          "explanation": "أَنَّ with its اِسْم and خَبَر, standing as one noun."
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 8",
          "kind": "mcq",
          "prompt": "In وَلَوْ كَانَ فِي الْمَسْجِدِ مِنْبَرٌ لَوَعَظَ جَالِسًا عَلَيْهِ, what is مِنْبَرٌ?",
          "options": [
            "the اِسْمُ كَانَ, placed after its خَبَر",
            "the خَبَرُ كَانَ",
            "the فَاعِلٌ of وَعَظَ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "فِي الْمَسْجِدِ is a خَبَر مُقَدَّم; 'had there been a minbar in the mosque'."
        },
        {
          "title": "Book Exercise 6 (Unit 6, Part 3), item 9",
          "kind": "mcq",
          "prompt": "In لَوْ تَرَكْتَ … وَاسْتَمَعْتَ … اسْتِمَاعًا لَفَهِمْتَ الدَّرْسَ فَهْمًا, how many مَفْعُوْلٌ مُطْلَق are there?",
          "options": [
            "none",
            "one",
            "two — اسْتِمَاعًا and فَهْمًا",
            "three"
          ],
          "correct": 2,
          "explanation": "One in the شَرْط, one in the جَوَاب."
        },
        {
          "title": "provision, sustenance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"provision, sustenance\"?",
          "options": [
            "رِزْقٌ",
            "مَوْضِعٌ",
            "مِنْبَرٌ",
            "قَاضٍ"
          ],
          "correct": 0
        },
        {
          "title": "provision, sustenance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رِزْقٌ mean?",
          "options": [
            "provision, sustenance",
            "place, position",
            "pulpit",
            "judge"
          ],
          "correct": 0
        },
        {
          "title": "provision, sustenance (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رِزْقٌ?",
          "options": [
            "أَرْزَاقٌ",
            "مَنَابِرُ",
            "قُضَاةٌ",
            "مَوَاضِعُ"
          ],
          "correct": 0
        },
        {
          "title": "peer, equal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"peer, equal\"?",
          "options": [
            "قَرِيْنٌ",
            "طُغْيَانٌ",
            "كُرْسِيٌّ",
            "أَذْنَبَ يُذْنِبُ"
          ],
          "correct": 0
        },
        {
          "title": "peer, equal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَرِيْنٌ mean?",
          "options": [
            "peer, equal",
            "transgression",
            "chair",
            "to sin"
          ],
          "correct": 0
        },
        {
          "title": "peer, equal (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَرِيْنٌ?",
          "options": [
            "أَقْرَانٌ",
            "كَرَاسِيُّ",
            "أَرْزَاقٌ",
            "مَنَابِرُ"
          ],
          "correct": 0
        },
        {
          "title": "sweetness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sweetness\"?",
          "options": [
            "حَلَاوَةٌ",
            "مِنْبَرٌ",
            "قَاضٍ",
            "فَاقَ يَفُوْقُ"
          ],
          "correct": 0
        },
        {
          "title": "sweetness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَلَاوَةٌ mean?",
          "options": [
            "sweetness",
            "pulpit",
            "judge",
            "to surpass"
          ],
          "correct": 0
        },
        {
          "title": "place, position",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"place, position\"?",
          "options": [
            "مَوْضِعٌ",
            "كُرْسِيٌّ",
            "أَذْنَبَ يُذْنِبُ",
            "أَخْطَأَ يُخْطِئُ"
          ],
          "correct": 0
        },
        {
          "title": "place, position",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَوْضِعٌ mean?",
          "options": [
            "place, position",
            "chair",
            "to sin",
            "to err"
          ],
          "correct": 0
        },
        {
          "title": "place, position (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَوْضِعٌ?",
          "options": [
            "مَوَاضِعُ",
            "أَرْزَاقٌ",
            "مَنَابِرُ",
            "قُضَاةٌ"
          ],
          "correct": 0
        },
        {
          "title": "transgression",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"transgression\"?",
          "options": [
            "طُغْيَانٌ",
            "قَاضٍ",
            "فَاقَ يَفُوْقُ",
            "ذَاقَ يَذُوْقُ"
          ],
          "correct": 0
        },
        {
          "title": "transgression",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طُغْيَانٌ mean?",
          "options": [
            "transgression",
            "judge",
            "to surpass",
            "to taste"
          ],
          "correct": 0
        },
        {
          "title": "pulpit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pulpit\"?",
          "options": [
            "مِنْبَرٌ",
            "أَذْنَبَ يُذْنِبُ",
            "أَخْطَأَ يُخْطِئُ",
            "اِحْتَاجَ يَحْتَاجُ"
          ],
          "correct": 0
        },
        {
          "title": "pulpit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِنْبَرٌ mean?",
          "options": [
            "pulpit",
            "to sin",
            "to err",
            "to need"
          ],
          "correct": 0
        },
        {
          "title": "pulpit (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِنْبَرٌ?",
          "options": [
            "مَنَابِرُ",
            "مَوَاضِعُ",
            "قُضَاةٌ",
            "أَقْرَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "chair",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"chair\"?",
          "options": [
            "كُرْسِيٌّ",
            "فَاقَ يَفُوْقُ",
            "ذَاقَ يَذُوْقُ",
            "آثَرَ يُؤْثِرُ"
          ],
          "correct": 0
        },
        {
          "title": "chair",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كُرْسِيٌّ mean?",
          "options": [
            "chair",
            "to surpass",
            "to taste",
            "to prefer"
          ],
          "correct": 0
        },
        {
          "title": "chair (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كُرْسِيٌّ?",
          "options": [
            "كَرَاسِيُّ",
            "مَنَابِرُ",
            "أَرْزَاقٌ",
            "مَوَاضِعُ"
          ],
          "correct": 0
        },
        {
          "title": "judge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"judge\"?",
          "options": [
            "قَاضٍ",
            "أَخْطَأَ يُخْطِئُ",
            "اِحْتَاجَ يَحْتَاجُ",
            "رِزْقٌ"
          ],
          "correct": 0
        },
        {
          "title": "judge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَاضٍ mean?",
          "options": [
            "judge",
            "to err",
            "to need",
            "provision, sustenance"
          ],
          "correct": 0
        },
        {
          "title": "judge (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَاضٍ?",
          "options": [
            "قُضَاةٌ",
            "كَرَاسِيُّ",
            "أَقْرَانٌ",
            "مَنَابِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to sin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sin\"?",
          "options": [
            "أَذْنَبَ يُذْنِبُ",
            "ذَاقَ يَذُوْقُ",
            "آثَرَ يُؤْثِرُ",
            "قَرِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to sin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَذْنَبَ يُذْنِبُ mean?",
          "options": [
            "to sin",
            "to taste",
            "to prefer",
            "peer, equal"
          ],
          "correct": 0
        },
        {
          "title": "to sin (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَذْنَبَ يُذْنِبُ?",
          "options": [
            "إِذْنَابًا",
            "فَوْقًا",
            "ذَوْقًا",
            "إِيْثَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to surpass",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to surpass\"?",
          "options": [
            "فَاقَ يَفُوْقُ",
            "اِحْتَاجَ يَحْتَاجُ",
            "رِزْقٌ",
            "حَلَاوَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to surpass",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَاقَ يَفُوْقُ mean?",
          "options": [
            "to surpass",
            "to need",
            "provision, sustenance",
            "sweetness"
          ],
          "correct": 0
        },
        {
          "title": "to surpass (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَاقَ يَفُوْقُ?",
          "options": [
            "فَوْقًا",
            "إِخْطَاءً",
            "اِحْتِيَاجًا",
            "إِذْنَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to err",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to err\"?",
          "options": [
            "أَخْطَأَ يُخْطِئُ",
            "آثَرَ يُؤْثِرُ",
            "قَرِيْنٌ",
            "مَوْضِعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to err",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخْطَأَ يُخْطِئُ mean?",
          "options": [
            "to err",
            "to prefer",
            "peer, equal",
            "place, position"
          ],
          "correct": 0
        },
        {
          "title": "to err (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَخْطَأَ يُخْطِئُ?",
          "options": [
            "إِخْطَاءً",
            "ذَوْقًا",
            "إِيْثَارًا",
            "فَوْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to taste",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to taste\"?",
          "options": [
            "ذَاقَ يَذُوْقُ",
            "رِزْقٌ",
            "حَلَاوَةٌ",
            "طُغْيَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to taste",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَاقَ يَذُوْقُ mean?",
          "options": [
            "to taste",
            "provision, sustenance",
            "sweetness",
            "transgression"
          ],
          "correct": 0
        },
        {
          "title": "to taste (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَاقَ يَذُوْقُ?",
          "options": [
            "ذَوْقًا",
            "اِحْتِيَاجًا",
            "إِذْنَابًا",
            "إِخْطَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to need",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to need\"?",
          "options": [
            "اِحْتَاجَ يَحْتَاجُ",
            "قَرِيْنٌ",
            "مَوْضِعٌ",
            "مِنْبَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to need",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَاجَ يَحْتَاجُ mean?",
          "options": [
            "to need",
            "peer, equal",
            "place, position",
            "pulpit"
          ],
          "correct": 0
        },
        {
          "title": "to need (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَاجَ يَحْتَاجُ?",
          "options": [
            "اِحْتِيَاجًا",
            "إِيْثَارًا",
            "فَوْقًا",
            "ذَوْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to prefer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prefer\"?",
          "options": [
            "آثَرَ يُؤْثِرُ",
            "حَلَاوَةٌ",
            "طُغْيَانٌ",
            "كُرْسِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to prefer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آثَرَ يُؤْثِرُ mean?",
          "options": [
            "to prefer",
            "sweetness",
            "transgression",
            "chair"
          ],
          "correct": 0
        },
        {
          "title": "to prefer (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of آثَرَ يُؤْثِرُ?",
          "options": [
            "إِيْثَارًا",
            "إِذْنَابًا",
            "إِخْطَاءً",
            "اِحْتِيَاجًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l8",
      "title": "لو مع الجملة الاسمية",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "Two ways it happens",
          "lines": [
            {
              "html": "لَوْ can also be followed by a جُمْلَةٌ اسْمِيَّةٌ. This occurs in two ways: the nominal sentence may be preceded by the فِعْلٌ نَاقِصٌ of كَانَ, or its مُبْتَدَأٌ may be an اِسْمٌ مُؤَوَّلٌ with أَنَّ, the خَبَرٌ being hidden.",
              "list": false
            },
            {
              "html": "The reason for both devices is the same: لَوْ wants a verb after it. كَانَ supplies one, and أَنَّ turns the whole nominal sentence into a single noun that can serve as a مُبْتَدَأٌ. Arabic does not simply place لَوْ in front of a bare مُبْتَدَأٌ and خَبَرٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why can't لَوْ simply be placed in front of a bare مُبْتَدَأٌ and خَبَرٌ, and what two devices solve this؟",
            "kind": "mcq",
            "options": [
              "لَوْ wants a verb after it; كَانَ supplies one, or أَنَّ turns the whole nominal sentence into a single noun that can be the مُبْتَدَأٌ",
              "لَوْ can never be followed by a nominal sentence under any circumstance",
              "لَوْ requires two verbs, supplied by doubling كَانَ",
              "There is no real restriction; both devices are purely stylistic"
            ],
            "correct": 0
          }
        },
        {
          "heading": "1. Preceded by the فِعْلٌ نَاقِصٌ of كَانَ",
          "lines": [
            {
              "html": "لَوْ كَانَ الْمُعَلِّمُ صَحِيْحًا لَحَضَرَ الدَّرْسَ — Had the teacher been healthy, he would have attended the lesson.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَوْ كَانَ الْمُعَلِّمُ صَحِيْحًا لَحَضَرَ الدَّرْسَ",
                "translation": "Had the teacher been healthy, he would have attended the lesson.",
                "cells": [
                  "لَوْ",
                  "كَانَ",
                  "الْمُعَلِّمُ",
                  "صَحِيْحًا",
                  "لَ",
                  "حَضَرَ",
                  "الدَّرْسَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 3,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 4,
                        "end": 6,
                        "role": "جَوَابُ شَرْطٍ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ نَاقِصٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "اِسْمُ كَانَ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "خَبَرُ كَانَ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "لَامُ الْجَوَابِ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                      },
                      {
                        "start": 6,
                        "end": 6,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "This is the commonest shape by far. Exercise 7 has eleven sentences and nine of them open with لَوْ كَانَ in one form or another — including لَوْ كَانَ فِي الْكَأْسِ مَاءٌ and لَوْ كَانَ عِنْدِيْ مَالٌ, where the خَبَر comes first and the اِسْم after it.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In لَوْ كَانَ الْمُعَلِّمُ صَحِيْحًا لَحَضَرَ الدَّرْسَ, what job does كَانَ do؟",
            "kind": "mcq",
            "options": [
              "It supplies the verb لَوْ requires, taking اِسْمُ كَانَ and خَبَرُ كَانَ to carry the nominal idea 'the teacher being healthy'",
              "It negates the whole شَرْط",
              "It has no function and can be removed",
              "It replaces the لَامُ الْجَوَابِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "2. The مُبْتَدَأ as an اِسْمٌ مُؤَوَّلٌ with أَنَّ",
          "lines": [
            {
              "html": "The second way is that the مُبْتَدَأٌ is an اِسْمٌ مُؤَوَّلٌ formed with أَنَّ, and the خَبَرٌ is hidden — مَحْذُوْفٌ.",
              "list": false
            },
            {
              "html": "لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ — If you worked hard, you would be successful. / If you had worked hard, you would have been successful.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ",
                "translation": "If you worked hard, you would be successful.",
                "cells": [
                  "لَوْ",
                  "أَنَّ",
                  "كَ",
                  "اجْتَهَدتَّ",
                  "لَ",
                  "نَجَحْتَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 3,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "جَوَابُ شَرْطٍ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 3,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "لَامُ الْجَوَابِ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "اِسْمُ أَنَّ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "خَبَرُ أَنَّ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Read the diagram from the bottom up. أَنَّ is a حَرْفٌ مَوْصُوْلٌ with كَ اجْتَهَدتَّ as its صِلَة, so أَنَّكَ اجْتَهَدتَّ is one noun — 'your having worked hard'. That noun is the مُبْتَدَأٌ of the شَرْط, and its خَبَر is left unsaid: 'were your having worked hard [a fact]…'.",
              "list": false
            },
            {
              "html": "The book writes the hidden خَبَر into the diagram as an empty box marked مَحْذُوْفٌ. That is worth copying into the app, because a slot with nothing in it is exactly what the learner needs to see; the English 'if only you had worked hard' has the same shape, trailing off before its main clause.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ, what is the مُبْتَدَأٌ, and what happens to its خَبَرٌ؟",
            "kind": "mcq",
            "options": [
              "The اِسْمٌ مُؤَوَّلٌ أَنَّكَ اجْتَهَدتَّ is the مُبْتَدَأٌ, and its خَبَرٌ is hidden (مَحْذُوْفٌ)",
              "كَ alone is the مُبْتَدَأٌ, with اجتهدت as its خبر",
              "There is no مُبْتَدَأٌ in this sentence",
              "لَوْ itself is the خَبَرٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "لَوْ before a nominal sentence",
        "rows": [
          {
            "label": "Why",
            "arabic": "لَوْ تَطْلُبُ فِعْلًا",
            "meaning": "لَوْ wants a verb after it"
          },
          {
            "label": "Way 1",
            "arabic": "لَوْ كَانَ …",
            "meaning": "كَانَ supplies the verb"
          },
          {
            "label": "Example",
            "arabic": "لَوْ كَانَ الْمُعَلِّمُ صَحِيْحًا لَحَضَرَ الدَّرْسَ",
            "meaning": "had the teacher been healthy…"
          },
          {
            "label": "Way 2",
            "arabic": "لَوْ أَنَّ …",
            "meaning": "an اِسْمٌ مُؤَوَّلٌ as the مُبْتَدَأ"
          },
          {
            "label": "Its خَبَر",
            "arabic": "مَحْذُوْفٌ",
            "meaning": "left unsaid — an empty box in the diagram"
          },
          {
            "label": "Example",
            "arabic": "لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ",
            "meaning": "if you had worked hard…"
          }
        ]
      },
      "quiz": [
        {
          "q": "In how many ways can لَوْ be followed by a nominal sentence?",
          "options": [
            "two",
            "three",
            "one",
            "four"
          ],
          "correct": 0,
          "explanation": "With كَانَ, or with أَنَّ and a hidden خَبَر."
        },
        {
          "q": "What does كَانَ supply in لَوْ كَانَ الْمُعَلِّمُ صَحِيْحًا?",
          "options": [
            "a مُبْتَدَأ",
            "a تَمْيِيْز",
            "the verb that لَوْ requires after it",
            "a linking فَ"
          ],
          "correct": 2,
          "explanation": "لَوْ does not sit directly before a bare مُبْتَدَأ and خَبَر."
        },
        {
          "q": "In لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ, what slot does أَنَّكَ اجْتَهَدتَّ fill?",
          "options": [
            "خَبَرٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "مُبْتَدَأٌ"
          ],
          "correct": 3,
          "explanation": "It is an اِسْمٌ مُؤَوَّلٌ standing as the subject of the شَرْط."
        },
        {
          "q": "In لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ, what happens to the خَبَر of the مُبْتَدَأ أَنَّكَ اجْتَهَدتَّ؟",
          "options": [
            "It is the جَوَابُ الشَّرْطِ",
            "It is hidden — مَحْذُوْفٌ",
            "It is اجْتَهَدتَّ",
            "It is the لَام"
          ],
          "correct": 1,
          "explanation": "The book draws it as an empty box in the diagram."
        },
        {
          "q": "In the deeper tarkeeb analysis of لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ, what is أَنَّ called?",
          "options": [
            "a حَرْفٌ مَوْصُوْلٌ, with كَ اجْتَهَدتَّ as its صِلَة",
            "a حَرْفُ شَرْطٍ",
            "a حَرْفُ عَطْفٍ",
            "a رَابِطَةٌ"
          ],
          "correct": 0,
          "explanation": "That is what turns the whole clause into a single noun."
        },
        {
          "q": "Which shape is by far the commoner in Exercise 7?",
          "options": [
            "لَوْ أَنَّ",
            "لَوْلَا",
            "لَوْ كَانَ",
            "لَوْ with a bare مُبْتَدَأ"
          ],
          "correct": 2,
          "explanation": "Nine of the twelve sentences open with لَوْ كَانَ."
        }
      ],
      "bank": [
        {
          "title": "لَوْ كَانَ الْمُعَلِّمُ صَحِيْحًا لَحَضَرَ الدَّرْسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 585)",
          "sentence": "لَوْ كَانَ الْمُعَلِّمُ صَحِيْحًا لَحَضَرَ الدَّرْسَ",
          "translation": "Had the teacher been healthy, he would have attended the lesson.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "الْمُعَلِّمُ",
            "صَحِيْحًا",
            "لَ",
            "حَضَرَ",
            "الدَّرْسَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 585)",
          "sentence": "لَوْ أَنَّكَ اجْتَهَدتَّ لَنَجَحْتَ",
          "translation": "If you had worked hard, you would have been successful.",
          "cells": [
            "لَوْ",
            "أَنَّ",
            "كَ",
            "اجْتَهَدتَّ",
            "لَ",
            "نَجَحْتَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ كَانَ يَخَافُ اللهَ لَمَا عَصَاهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 1",
          "sentence": "لَوْ كَانَ يَخَافُ اللهَ لَمَا عَصَاهُ",
          "translation": "Had he feared Allah, he would not have disobeyed Him.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "يَخَافُ اللهَ",
            "لَمَا",
            "عَصَاهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ كَانَ الثَّوْبُ طَاهِرًا لَلَبِسْتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 2",
          "sentence": "لَوْ كَانَ الثَّوْبُ طَاهِرًا لَلَبِسْتُهُ",
          "translation": "Had the garment been pure, I would have worn it.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "الثَّوْبُ",
            "طَاهِرًا",
            "لَ",
            "لَبِسْتُهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ كَانَ فِي الْكَأْسِ مَاءٌ لَشَرِبْتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 3",
          "sentence": "لَوْ كَانَ فِي الْكَأْسِ مَاءٌ لَشَرِبْتُهُ",
          "translation": "Had there been water in the cup, I would have drunk it.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "فِي الْكَأْسِ",
            "مَاءٌ",
            "لَ",
            "شَرِبْتُهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ كَانَ مُؤَخَّرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَوْ كَانَتِ الْأَصْنَامُ آلِهَةً لَنَفَعَتْهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 5",
          "sentence": "لَوْ كَانَتِ الْأَصْنَامُ آلِهَةً لَنَفَعَتْهُمْ",
          "translation": "Had the idols been gods, they would have benefited them.",
          "cells": [
            "لَوْ",
            "كَانَتِ",
            "الْأَصْنَامُ",
            "آلِهَةً",
            "لَ",
            "نَفَعَتْهُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ كُنْتَ تَسْمَعُ الدَّرْسَ لَفَهِمْتَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 6",
          "sentence": "لَوْ كُنْتَ تَسْمَعُ الدَّرْسَ لَفَهِمْتَهُ",
          "translation": "Had you been listening to the lesson, you would have understood it.",
          "cells": [
            "لَوْ",
            "كُنْتَ",
            "تَسْمَعُ الدَّرْسَ",
            "لَ",
            "فَهِمْتَهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ أَنَّهُمْ عَرَفُوا اللهَ مَا عَبَدُوا الْأَصْنَامَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 7",
          "sentence": "لَوْ أَنَّهُمْ عَرَفُوا اللهَ مَا عَبَدُوا الْأَصْنَامَ",
          "translation": "Had they known Allah, they would not have worshipped the idols.",
          "cells": [
            "لَوْ",
            "أَنَّهُمْ عَرَفُوا اللهَ",
            "مَا",
            "عَبَدُوا",
            "الْأَصْنَامَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ وَخَبَرُهُ مَحْذُوْفٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "لَامُ الْجَوَابِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ كَانَ لِلْمَسْجِدِ مِحْرَابٌ لَقَامَ الْإِمَامُ فِيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 9",
          "sentence": "لَوْ كَانَ لِلْمَسْجِدِ مِحْرَابٌ لَقَامَ الْإِمَامُ فِيْهِ",
          "translation": "Had the mosque had a miḥrāb, the imām would have stood in it.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "لِلْمَسْجِدِ",
            "مِحْرَابٌ",
            "لَ",
            "قَامَ",
            "الْإِمَامُ فِيْهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ كَانَ مُؤَخَّرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فَاعِلٌ مَعَ غَيْرِ الصَّرِيْحِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ أَنَّ الْوَلَدَ نَامَ بَعْدَ الْعِشَاءِ لَاسْتَيْقَظَ لِلصَّلَاةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 12",
          "sentence": "لَوْ أَنَّ الْوَلَدَ نَامَ بَعْدَ الْعِشَاءِ لَاسْتَيْقَظَ لِلصَّلَاةِ",
          "translation": "Had the boy slept after ʿIshā', he would have woken for the prayer.",
          "cells": [
            "لَوْ",
            "أَنَّ",
            "الْوَلَدَ",
            "نَامَ بَعْدَ الْعِشَاءِ",
            "لَ",
            "اسْتَيْقَظَ لِلصَّلَاةِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) مَعَ غَيْرِ الصَّرِيْحِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In لَوْ كَانَ يَخَافُ اللهَ لَمَا عَصَاهُ, what is the خَبَرُ كَانَ?",
          "options": [
            "اللهَ",
            "the verbal sentence يَخَافُ اللهَ",
            "لَمَا عَصَاهُ",
            "there is none"
          ],
          "correct": 1,
          "explanation": "A whole verbal sentence can be the خَبَر of كَانَ."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "In لَوْ كَانَ فِي الْكَأْسِ مَاءٌ لَشَرِبْتُهُ, what is مَاءٌ?",
          "options": [
            "the خَبَرُ كَانَ",
            "the فَاعِلٌ of شَرِبْتُ",
            "the اِسْمُ كَانَ, coming after its خَبَر",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "فِي الْكَأْسِ is a خَبَر مُقَدَّم — 'had there been water in the cup'."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 5",
          "kind": "mcq",
          "prompt": "In لَوْ كَانَتِ الْأَصْنَامُ آلِهَةً لَنَفَعَتْهُمْ, why is آلِهَةً مَنْصُوْبَة?",
          "options": [
            "Because it is the مَفْعُوْلٌ بِهِ of نَفَعَتْ",
            "Because it is the خَبَرُ كَانَ",
            "Because it is a حَالٌ",
            "Because لَوْ causes naṣb"
          ],
          "correct": 1,
          "explanation": "اَلْأَصْنَامُ is the مَرْفُوْع اِسْم; آلِهَةً is the مَنْصُوْب خَبَر."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In لَوْ كُنْتَ تَسْمَعُ الدَّرْسَ لَفَهِمْتَهُ, what does كَانَ with a مُضَارِع خَبَر give?",
          "options": [
            "a simple past",
            "a past continuous — 'had you been listening'",
            "a future",
            "a command"
          ],
          "correct": 1,
          "explanation": "The same كَانَ + مُضَارِع construction met in Unit 5, Section 1."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 7",
          "kind": "mcq",
          "prompt": "In لَوْ أَنَّهُمْ عَرَفُوا اللهَ مَا عَبَدُوا الْأَصْنَامَ, what is missing that the book's model sentence has?",
          "options": [
            "the شَرْط",
            "the لَامُ الْجَوَابِ — the negative جَوَاب here begins with a bare مَا",
            "the أَدَاةُ الشَّرْطِ",
            "the جَوَاب"
          ],
          "correct": 1,
          "explanation": "The book calls the لَام 'often', not always; a negated جَوَاب may drop it."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 9",
          "kind": "mcq",
          "prompt": "In لَوْ كَانَ لِلْمَسْجِدِ مِحْرَابٌ لَقَامَ الْإِمَامُ فِيْهِ, what does لِلْمَسْجِدِ express?",
          "options": [
            "possession — 'had the mosque had a miḥrāb'",
            "purpose",
            "the doer of قَامَ",
            "a comparison"
          ],
          "correct": 0,
          "explanation": "A لِ of possession serving as the خَبَر مُقَدَّم of كَانَ."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 11",
          "kind": "mcq",
          "prompt": "In لَوْ كَانَ عِنْدِيْ مَالٌ لَذَهَبْتُ إِلَى مَكَّةَ لِأَحُجَّ, what is لِأَحُجَّ?",
          "options": [
            "a second جَوَابُ شَرْطٍ",
            "an اِسْمٌ مُؤَوَّلٌ of purpose — a مَفْعُوْلٌ لَهُ",
            "a حَالٌ",
            "a نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "لِ with a hidden أَنْ, from Unit 5, Section 3, Part 6."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 12",
          "kind": "mcq",
          "prompt": "In لَوْ أَنَّ الْوَلَدَ نَامَ بَعْدَ الْعِشَاءِ لَاسْتَيْقَظَ لِلصَّلَاةِ, what is اَلْوَلَدَ?",
          "options": [
            "the فَاعِلٌ of نَامَ",
            "the اِسْمُ أَنَّ",
            "the مُبْتَدَأٌ",
            "a مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "The whole أَنَّ unit is then the مُبْتَدَأ, with its خَبَر hidden."
        },
        {
          "title": "garment",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"garment\"?",
          "options": [
            "ثَوْبٌ",
            "إِلٰهٌ",
            "وَسِخٌ",
            "عَصَى يَعْصِيْ"
          ],
          "correct": 0
        },
        {
          "title": "garment",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ثَوْبٌ mean?",
          "options": [
            "garment",
            "god, deity",
            "dirty",
            "to disobey"
          ],
          "correct": 0
        },
        {
          "title": "garment (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ثَوْبٌ?",
          "options": [
            "ثِيَابٌ",
            "مَحَارِيْبُ",
            "كُؤُوْسٌ",
            "آلِهَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "pure, clean",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pure, clean\"?",
          "options": [
            "طَاهِرٌ",
            "مِحْرَابٌ",
            "عَاقِلٌ",
            "لَبِسَ يَلْبَسُ"
          ],
          "correct": 0
        },
        {
          "title": "pure, clean",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَاهِرٌ mean?",
          "options": [
            "pure, clean",
            "prayer niche",
            "sensible one",
            "to wear"
          ],
          "correct": 0
        },
        {
          "title": "cup, glass",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"cup, glass\"?",
          "options": [
            "كَأْسٌ",
            "وَسِخٌ",
            "عَصَى يَعْصِيْ",
            "غَسَلَ يَغْسِلُ"
          ],
          "correct": 0
        },
        {
          "title": "cup, glass",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَأْسٌ mean?",
          "options": [
            "cup, glass",
            "dirty",
            "to disobey",
            "to wash"
          ],
          "correct": 0
        },
        {
          "title": "cup, glass (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَأْسٌ?",
          "options": [
            "كُؤُوْسٌ",
            "ثِيَابٌ",
            "مَحَارِيْبُ",
            "آلِهَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "god, deity",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"god, deity\"?",
          "options": [
            "إِلٰهٌ",
            "عَاقِلٌ",
            "لَبِسَ يَلْبَسُ",
            "حَجَّ يَحُجُّ"
          ],
          "correct": 0
        },
        {
          "title": "god, deity",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِلٰهٌ mean?",
          "options": [
            "god, deity",
            "sensible one",
            "to wear",
            "to perform Ḥajj"
          ],
          "correct": 0
        },
        {
          "title": "god, deity (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِلٰهٌ?",
          "options": [
            "آلِهَةٌ",
            "كُؤُوْسٌ",
            "عُقَلَاءُ",
            "ثِيَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "prayer niche",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"prayer niche\"?",
          "options": [
            "مِحْرَابٌ",
            "عَصَى يَعْصِيْ",
            "غَسَلَ يَغْسِلُ",
            "خَافَ يَخَافُ"
          ],
          "correct": 0
        },
        {
          "title": "prayer niche",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِحْرَابٌ mean?",
          "options": [
            "prayer niche",
            "to disobey",
            "to wash",
            "to fear"
          ],
          "correct": 0
        },
        {
          "title": "prayer niche (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِحْرَابٌ?",
          "options": [
            "مَحَارِيْبُ",
            "آلِهَةٌ",
            "ثِيَابٌ",
            "كُؤُوْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "dirty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"dirty\"?",
          "options": [
            "وَسِخٌ",
            "لَبِسَ يَلْبَسُ",
            "حَجَّ يَحُجُّ",
            "ثَوْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "dirty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَسِخٌ mean?",
          "options": [
            "dirty",
            "to wear",
            "to perform Ḥajj",
            "garment"
          ],
          "correct": 0
        },
        {
          "title": "sensible one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sensible one\"?",
          "options": [
            "عَاقِلٌ",
            "غَسَلَ يَغْسِلُ",
            "خَافَ يَخَافُ",
            "طَاهِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "sensible one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَاقِلٌ mean?",
          "options": [
            "sensible one",
            "to wash",
            "to fear",
            "pure, clean"
          ],
          "correct": 0
        },
        {
          "title": "sensible one (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَاقِلٌ?",
          "options": [
            "عُقَلَاءُ",
            "ثِيَابٌ",
            "آلِهَةٌ",
            "كُؤُوْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to disobey",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to disobey\"?",
          "options": [
            "عَصَى يَعْصِيْ",
            "حَجَّ يَحُجُّ",
            "ثَوْبٌ",
            "كَأْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to disobey",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَصَى يَعْصِيْ mean?",
          "options": [
            "to disobey",
            "to perform Ḥajj",
            "garment",
            "cup, glass"
          ],
          "correct": 0
        },
        {
          "title": "to disobey (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَصَى يَعْصِيْ?",
          "options": [
            "عِصْيَانًا",
            "غَسْلًا",
            "خَوْفًا",
            "لُبْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to wear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wear\"?",
          "options": [
            "لَبِسَ يَلْبَسُ",
            "خَافَ يَخَافُ",
            "طَاهِرٌ",
            "إِلٰهٌ"
          ],
          "correct": 0
        },
        {
          "title": "to wear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبِسَ يَلْبَسُ mean?",
          "options": [
            "to wear",
            "to fear",
            "pure, clean",
            "god, deity"
          ],
          "correct": 0
        },
        {
          "title": "to wear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَبِسَ يَلْبَسُ?",
          "options": [
            "لُبْسًا",
            "حَجًّا",
            "عِصْيَانًا",
            "غَسْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to wash",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wash\"?",
          "options": [
            "غَسَلَ يَغْسِلُ",
            "ثَوْبٌ",
            "كَأْسٌ",
            "مِحْرَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to wash",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَسَلَ يَغْسِلُ mean?",
          "options": [
            "to wash",
            "garment",
            "cup, glass",
            "prayer niche"
          ],
          "correct": 0
        },
        {
          "title": "to wash (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَسَلَ يَغْسِلُ?",
          "options": [
            "غَسْلًا",
            "خَوْفًا",
            "لُبْسًا",
            "عِصْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to perform Ḥajj",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform Ḥajj\"?",
          "options": [
            "حَجَّ يَحُجُّ",
            "طَاهِرٌ",
            "إِلٰهٌ",
            "وَسِخٌ"
          ],
          "correct": 0
        },
        {
          "title": "to perform Ḥajj",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَجَّ يَحُجُّ mean?",
          "options": [
            "to perform Ḥajj",
            "pure, clean",
            "god, deity",
            "dirty"
          ],
          "correct": 0
        },
        {
          "title": "to perform Ḥajj (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَجَّ يَحُجُّ?",
          "options": [
            "حَجًّا",
            "عِصْيَانًا",
            "غَسْلًا",
            "لُبْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fear\"?",
          "options": [
            "خَافَ يَخَافُ",
            "كَأْسٌ",
            "مِحْرَابٌ",
            "عَاقِلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَافَ يَخَافُ mean?",
          "options": [
            "to fear",
            "cup, glass",
            "prayer niche",
            "sensible one"
          ],
          "correct": 0
        },
        {
          "title": "to fear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَافَ يَخَافُ?",
          "options": [
            "خَوْفًا",
            "لُبْسًا",
            "حَجًّا",
            "عِصْيَانًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l9",
      "title": "لولا",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "The construction",
          "lines": [
            {
              "html": "لَوْلَا is followed by a جُمْلَةٌ اسْمِيَّةٌ in which the خَبَرٌ is مَحْذُوْفٌ. This is translated as 'were it not for' or 'had it not been for'. This is used for third conditionals.",
              "list": false
            },
            {
              "html": "لَوْلَا الْأَنْبِيَاءُ لَضَلَّ النَّاسُ — Were it not for the Prophets, people would have been misguided. / Had it not been for the Prophets, people would have been misguided.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The جَوَابٌ of لَوْلَا is often preceded by لَامُ الْجَوَابِ, exactly as with لَوْ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَوْلَا الْأَنْبِيَاءُ لَضَلَّ النَّاسُ",
                "translation": "Were it not for the Prophets, people would have been misguided.",
                "cells": [
                  "لَوْلَا",
                  "الْأَنْبِيَاءُ",
                  "لَ",
                  "ضَلَّ",
                  "النَّاسُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 2,
                        "end": 4,
                        "role": "جَوَابُ شَرْطٍ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "لَامُ الْجَوَابِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فَاعِلٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The book draws an empty box after اَلْأَنْبِيَاءُ marked مَحْذُوْفٌ: the خَبَر of the مُبْتَدَأ, understood as مَوْجُوْدُوْنَ, 'present'. So the literal shape is 'were the Prophets not [present], people would have gone astray'. That hidden خَبَر is the whole reason لَوْلَا translates as a phrase rather than a word.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What does لَوْلَا mean, and what is always true of the خَبَرٌ of the جُمْلَةٌ اسْمِيَّةٌ that follows it؟",
            "kind": "mcq",
            "options": [
              "'Were it not for' / 'had it not been for'; the خَبَرٌ is always مَحْذُوْفٌ (hidden), understood as something like 'present'",
              "If, with an always-stated خَبَرٌ",
              "'When', with no خَبَرٌ at all",
              "'Unless', with a doubled خَبَرٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "What follows لَوْلَا",
          "lines": [
            {
              "html": "Because the word after لَوْلَا is a مُبْتَدَأٌ, it is مَرْفُوْعٌ — اَلْأَنْبِيَاءُ, اَلْمَصَائِبُ, اَلْقَلَمُ, اَلْكَعْبَةُ. That is the quickest check on the page: لَوْ is followed by a verb, لَوْلَا by a مَرْفُوْع noun.",
              "list": false
            },
            {
              "table": {
                "title": "لَوْ against لَوْلَا",
                "headers": [
                  "",
                  "لَوْ",
                  "لَوْلَا"
                ],
                "rows": [
                  [
                    "What follows",
                    "usually a فِعْلٌ مَاضٍ",
                    "a مُبْتَدَأٌ, مَرْفُوْعٌ"
                  ],
                  [
                    "The خَبَر",
                    "written out where there is one",
                    "always مَحْذُوْفٌ"
                  ],
                  [
                    "English",
                    "'if… would', 'if… had… would have'",
                    "'were it not for', 'had it not been for'"
                  ],
                  [
                    "The جَوَاب",
                    "often with لَامُ الْجَوَابِ",
                    "often with لَامُ الْجَوَابِ"
                  ]
                ]
              }
            },
            {
              "html": "لَوْلَا may also be followed by أَنَّ, giving the same اِسْمٌ مُؤَوَّلٌ shape met with لَوْ in the last lesson: لَوْلَا أَنَّ الدَّرْسَ فِي اللَّيْلِ لَحَضَرْتُهُ — 'were the lesson not at night, I would have attended it'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How can you quickly tell لَوْ apart from لَوْلَا just by what follows each؟",
            "kind": "mcq",
            "options": [
              "لَوْ is usually followed by a verb (فِعْلٌ مَاضٍ); لَوْلَا is followed by a مَرْفُوْع noun (a مُبْتَدَأٌ)",
              "Both are always followed by exactly the same kind of word",
              "لَوْلَا is followed by a verb and لَوْ by a noun — the reverse of the truth",
              "Neither is ever followed by anything specific"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "لَوْلَا",
        "rows": [
          {
            "label": "What follows",
            "arabic": "جُمْلَةٌ اسْمِيَّةٌ",
            "meaning": "a مُبْتَدَأ, مَرْفُوْع"
          },
          {
            "label": "Its خَبَر",
            "arabic": "مَحْذُوْفٌ دَائِمًا",
            "meaning": "always left unsaid"
          },
          {
            "label": "English",
            "arabic": "لَوْلَا",
            "meaning": "'were it not for' / 'had it not been for'"
          },
          {
            "label": "Type",
            "arabic": "لِلشَّرْطِ الْمُحَالِ",
            "meaning": "used for third conditionals"
          },
          {
            "label": "Example",
            "arabic": "لَوْلَا الْأَنْبِيَاءُ لَضَلَّ النَّاسُ",
            "meaning": "were it not for the Prophets…"
          },
          {
            "label": "The جَوَاب",
            "arabic": "لَامُ الْجَوَابِ غَالِبًا",
            "meaning": "لَضَلَّ; with a negative, لَمَا"
          }
        ]
      },
      "quiz": [
        {
          "q": "What follows لَوْلَا?",
          "options": [
            "a فِعْلٌ مَاضٍ",
            "a جُمْلَةٌ اسْمِيَّةٌ whose خَبَر is hidden",
            "a مُضَارِعٌ مَجْزُوْمٌ",
            "another أَدَاةُ شَرْطٍ"
          ],
          "correct": 1,
          "explanation": "Hence the word after it is مَرْفُوْعٌ."
        },
        {
          "q": "How is لَوْلَا translated?",
          "options": [
            "'unless'",
            "'when'",
            "'although'",
            "'were it not for' / 'had it not been for'"
          ],
          "correct": 3,
          "explanation": "Both renderings are given by the book."
        },
        {
          "q": "Which conditional type does لَوْلَا express?",
          "options": [
            "zero",
            "first",
            "third",
            "second"
          ],
          "correct": 2,
          "explanation": "The past that cannot now be changed."
        },
        {
          "q": "What is the state of the noun straight after لَوْلَا?",
          "options": [
            "مَرْفُوْعٌ — it is a مُبْتَدَأ",
            "مَنْصُوْبٌ",
            "مَجْرُوْرٌ",
            "مَجْزُوْمٌ"
          ],
          "correct": 0,
          "explanation": "اَلْأَنْبِيَاءُ، اَلْمَصَائِبُ، اَلْكَعْبَةُ — all مَرْفُوْع."
        },
        {
          "q": "What is drawn as an empty box in the book's diagram?",
          "options": [
            "the أَدَاةُ الشَّرْطِ",
            "the خَبَر of the مُبْتَدَأ, marked مَحْذُوْفٌ",
            "the جَوَابُ الشَّرْطِ",
            "the فَاعِل"
          ],
          "correct": 1,
          "explanation": "Understood as مَوْجُوْدُوْنَ — 'present'."
        },
        {
          "q": "What is the quickest way to tell لَوْ from لَوْلَا on the page?",
          "options": [
            "لَوْ is longer",
            "لَوْلَا always ends a sentence",
            "لَوْ takes a فَاء, لَوْلَا a لَام",
            "لَوْ is followed by a verb; لَوْلَا by a مَرْفُوْع noun"
          ],
          "correct": 3,
          "explanation": "Both take the لَامُ الْجَوَابِ, so that is no help."
        }
      ],
      "bank": [
        {
          "title": "لَوْلَا الْأَنْبِيَاءُ لَضَلَّ النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 586)",
          "sentence": "لَوْلَا الْأَنْبِيَاءُ لَضَلَّ النَّاسُ",
          "translation": "Were it not for the Prophets, people would have been misguided.",
          "cells": [
            "لَوْلَا",
            "الْأَنْبِيَاءُ",
            "لَ",
            "ضَلَّ",
            "النَّاسُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا الْمَصَائِبُ لَمَا عَرَفْنَا النِّعَمَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 1",
          "sentence": "لَوْلَا الْمَصَائِبُ لَمَا عَرَفْنَا النِّعَمَ",
          "translation": "Were it not for calamities, we would not have known blessings.",
          "cells": [
            "لَوْلَا",
            "الْمَصَائِبُ",
            "لَمَا",
            "عَرَفْنَا",
            "النِّعَمَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا الْقَلَمُ وَالْكِتَابُ لَضَاعَ الْعِلْمُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 2",
          "sentence": "لَوْلَا الْقَلَمُ وَالْكِتَابُ لَضَاعَ الْعِلْمُ",
          "translation": "Were it not for the pen and the book, knowledge would have been lost.",
          "cells": [
            "لَوْلَا",
            "الْقَلَمُ",
            "وَالْكِتَابُ",
            "لَ",
            "ضَاعَ",
            "الْعِلْمُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا تِلْكَ الْعَلَامَةُ لَمَا عَرَفْنَا بَيْتَكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 3",
          "sentence": "لَوْلَا تِلْكَ الْعَلَامَةُ لَمَا عَرَفْنَا بَيْتَكَ",
          "translation": "Were it not for that sign, we would not have recognised your house.",
          "cells": [
            "لَوْلَا",
            "تِلْكَ",
            "الْعَلَامَةُ",
            "لَمَا",
            "عَرَفْنَا",
            "بَيْتَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "بَدَلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا أَنَّ الدَّرْسَ فِي اللَّيْلِ لَحَضَرْتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 5",
          "sentence": "لَوْلَا أَنَّ الدَّرْسَ فِي اللَّيْلِ لَحَضَرْتُهُ",
          "translation": "Were the lesson not at night, I would have attended it.",
          "cells": [
            "لَوْلَا",
            "أَنَّ",
            "الدَّرْسَ",
            "فِي اللَّيْلِ",
            "لَ",
            "حَضَرْتُهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا الْكَعْبَةُ لَمَا سَافَرَ النَّاسُ إِلَى مَكَّةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 6",
          "sentence": "لَوْلَا الْكَعْبَةُ لَمَا سَافَرَ النَّاسُ إِلَى مَكَّةَ",
          "translation": "Were it not for the Kaʿbah, people would not have travelled to Makkah.",
          "cells": [
            "لَوْلَا",
            "الْكَعْبَةُ",
            "لَمَا",
            "سَافَرَ",
            "النَّاسُ",
            "إِلَى مَكَّةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا أَنَّ بَابَ الْمَسْجِدِ مُغْلَقٌ لَصَلَّيْنَا فِيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 7",
          "sentence": "لَوْلَا أَنَّ بَابَ الْمَسْجِدِ مُغْلَقٌ لَصَلَّيْنَا فِيْهِ",
          "translation": "Were the door of the mosque not locked, we would have prayed in it.",
          "cells": [
            "لَوْلَا",
            "أَنَّ",
            "بَابَ الْمَسْجِدِ",
            "مُغْلَقٌ",
            "لَ",
            "صَلَّيْنَا فِيْهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا) مَعَ غَيْرِ الصَّرِيْحِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "فَاعِلٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا مَرَضُ جَدِّيْ لَصَامَ يَوْمَيْنِ كُلَّ أُسْبُوْعٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 8",
          "sentence": "لَوْلَا مَرَضُ جَدِّيْ لَصَامَ يَوْمَيْنِ كُلَّ أُسْبُوْعٍ",
          "translation": "Were it not for my grandfather's illness, he would have fasted two days every week.",
          "cells": [
            "لَوْلَا",
            "مَرَضُ",
            "جَدِّيْ",
            "لَ",
            "صَامَ",
            "يَوْمَيْنِ كُلَّ أُسْبُوْعٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا الْعُلَمَاءُ لَمَا وَصَلَ إِلَيْنَا عِلْمُ الْقُرْآنِ وَالْحَدِيْثِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 10",
          "sentence": "لَوْلَا الْعُلَمَاءُ لَمَا وَصَلَ إِلَيْنَا عِلْمُ الْقُرْآنِ وَالْحَدِيْثِ",
          "translation": "Were it not for the scholars, the knowledge of the Qur'ān and Ḥadīth would not have reached us.",
          "cells": [
            "لَوْلَا",
            "الْعُلَمَاءُ",
            "لَمَا",
            "وَصَلَ",
            "إِلَيْنَا",
            "عِلْمُ الْقُرْآنِ وَالْحَدِيْثِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا الْعِبَادَةُ وَطَلَبُ الْعِلْمِ مَا ذُقْتُ حَلَاوَةَ الْحَيَاةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 12",
          "sentence": "لَوْلَا الْعِبَادَةُ وَطَلَبُ الْعِلْمِ مَا ذُقْتُ حَلَاوَةَ الْحَيَاةِ",
          "translation": "Were it not for worship and the seeking of knowledge, I would not have tasted the sweetness of life.",
          "cells": [
            "لَوْلَا",
            "الْعِبَادَةُ",
            "وَطَلَبُ الْعِلْمِ",
            "مَا",
            "ذُقْتُ",
            "حَلَاوَةَ الْحَيَاةِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "لَامُ الْجَوَابِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In لَوْلَا الْمَصَائِبُ لَمَا عَرَفْنَا النِّعَمَ, what is اَلْمَصَائِبُ?",
          "options": [
            "the فَاعِلٌ of عَرَفْنَا",
            "the مُبْتَدَأ, with a hidden خَبَر",
            "a مَفْعُوْلٌ بِهِ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "'Were calamities not [there]…'."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 2",
          "kind": "mcq",
          "prompt": "In لَوْلَا الْقَلَمُ وَالْكِتَابُ لَضَاعَ الْعِلْمُ, why are both nouns مَرْفُوْع?",
          "options": [
            "Because they are the فَاعِل of ضَاعَ",
            "Because they are definite",
            "Because they are the مُبْتَدَأ of the شَرْط, joined by وَ",
            "Because لَوْلَا causes rafʿ directly"
          ],
          "correct": 2,
          "explanation": "The second is a مَعْطُوْف on the first, so it copies its state."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "In لَوْلَا تِلْكَ الْعَلَامَةُ لَمَا عَرَفْنَا بَيْتَكَ, what is اَلْعَلَامَةُ?",
          "options": [
            "a نَعْتٌ",
            "the خَبَرٌ",
            "a بَدَلٌ of تِلْكَ",
            "the فَاعِلٌ"
          ],
          "correct": 2,
          "explanation": "A definite ال-noun after an اِسْمُ إِشَارَةٍ is a بَدَلٌ."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 5",
          "kind": "mcq",
          "prompt": "In لَوْلَا أَنَّ الدَّرْسَ فِي اللَّيْلِ لَحَضَرْتُهُ, what is اَلدَّرْسَ?",
          "options": [
            "the مُبْتَدَأ",
            "the اِسْمُ أَنَّ",
            "a مَفْعُوْلٌ بِهِ",
            "the خَبَرُ أَنَّ"
          ],
          "correct": 1,
          "explanation": "فِي اللَّيْلِ is the خَبَرُ أَنَّ, and the whole أَنَّ unit is the مُبْتَدَأ."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 8",
          "kind": "mcq",
          "prompt": "In لَوْلَا مَرَضُ جَدِّيْ لَصَامَ يَوْمَيْنِ كُلَّ أُسْبُوْعٍ, what is مَرَضُ?",
          "options": [
            "a مُبْتَدَأ, itself a مُضَاف",
            "the فَاعِلٌ of صَامَ",
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ"
          ],
          "correct": 0,
          "explanation": "جَدِّيْ is its مُضَافٌ إِلَيْهِ."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 10",
          "kind": "mcq",
          "prompt": "In لَوْلَا الْعُلَمَاءُ لَمَا وَصَلَ إِلَيْنَا عِلْمُ الْقُرْآنِ وَالْحَدِيْثِ, what is عِلْمُ?",
          "options": [
            "the مُبْتَدَأ",
            "the فَاعِلٌ of وَصَلَ",
            "a مَفْعُوْلٌ بِهِ",
            "a بَدَلٌ"
          ],
          "correct": 1,
          "explanation": "The doer has been placed after the جَارٌّ وَمَجْرُوْرٌ إِلَيْنَا."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 11",
          "kind": "mcq",
          "prompt": "In لَوْلَا الْأَدَبُ لَعَاشَ النَّاسُ عِيْشَةَ الْأُسْدِ, what is عِيْشَةَ الْأُسْدِ?",
          "options": [
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ",
            "a مَفْعُوْلٌ مُطْلَقٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "The same shape as عِيْشَةَ الْبَهَائِمِ in Exercise 3."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 12",
          "kind": "mcq",
          "prompt": "In لَوْلَا الْعِبَادَةُ وَطَلَبُ الْعِلْمِ مَا ذُقْتُ حَلَاوَةَ الْحَيَاةِ, what is absent that most items in the exercise have?",
          "options": [
            "the شَرْط",
            "the لَامُ الْجَوَابِ",
            "the مُبْتَدَأ",
            "the جَوَاب"
          ],
          "correct": 1,
          "explanation": "The book says the لَام is 'often' present, not always."
        },
        {
          "title": "prophet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"prophet\"?",
          "options": [
            "نَبِيٌّ",
            "أُسْبُوْعٌ",
            "أَسَدٌ",
            "حَيَاةٌ"
          ],
          "correct": 0
        },
        {
          "title": "prophet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَبِيٌّ mean?",
          "options": [
            "prophet",
            "week",
            "lion",
            "life"
          ],
          "correct": 0
        },
        {
          "title": "prophet (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَبِيٌّ?",
          "options": [
            "أَنْبِيَاءُ",
            "أَسَابِيْعُ",
            "أُسْدٌ",
            "عَلَامَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "pen",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pen\"?",
          "options": [
            "قَلَمٌ",
            "أَدَبٌ",
            "عِبَادَةٌ",
            "ضَلَّ يَضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "pen",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَلَمٌ mean?",
          "options": [
            "pen",
            "manners, refinement",
            "worship",
            "to go astray"
          ],
          "correct": 0
        },
        {
          "title": "pen (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَلَمٌ?",
          "options": [
            "أَقْلَامٌ",
            "آدَابٌ",
            "أَنْبِيَاءُ",
            "أَسَابِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "sign, mark",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sign, mark\"?",
          "options": [
            "عَلَامَةٌ",
            "أَسَدٌ",
            "حَيَاةٌ",
            "ضَاعَ يَضِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "sign, mark",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَلَامَةٌ mean?",
          "options": [
            "sign, mark",
            "lion",
            "life",
            "to be lost"
          ],
          "correct": 0
        },
        {
          "title": "sign, mark (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَلَامَةٌ?",
          "options": [
            "عَلَامَاتٌ",
            "أُسْدٌ",
            "أَقْلَامٌ",
            "آدَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "week",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"week\"?",
          "options": [
            "أُسْبُوْعٌ",
            "عِبَادَةٌ",
            "ضَلَّ يَضِلُّ",
            "سَافَرَ يُسَافِرُ"
          ],
          "correct": 0
        },
        {
          "title": "week",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُسْبُوْعٌ mean?",
          "options": [
            "week",
            "worship",
            "to go astray",
            "to travel"
          ],
          "correct": 0
        },
        {
          "title": "week (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُسْبُوْعٌ?",
          "options": [
            "أَسَابِيْعُ",
            "أَنْبِيَاءُ",
            "عَلَامَاتٌ",
            "أُسْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "manners, refinement",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"manners, refinement\"?",
          "options": [
            "أَدَبٌ",
            "حَيَاةٌ",
            "ضَاعَ يَضِيْعُ",
            "تَلَا يَتْلُوْ"
          ],
          "correct": 0
        },
        {
          "title": "manners, refinement",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَبٌ mean?",
          "options": [
            "manners, refinement",
            "life",
            "to be lost",
            "to recite"
          ],
          "correct": 0
        },
        {
          "title": "manners, refinement (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَدَبٌ?",
          "options": [
            "آدَابٌ",
            "أَقْلَامٌ",
            "أَسَابِيْعُ",
            "أَنْبِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "lion",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lion\"?",
          "options": [
            "أَسَدٌ",
            "ضَلَّ يَضِلُّ",
            "سَافَرَ يُسَافِرُ",
            "وَصَلَ يَصِلُ"
          ],
          "correct": 0
        },
        {
          "title": "lion",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسَدٌ mean?",
          "options": [
            "lion",
            "to go astray",
            "to travel",
            "to reach, arrive"
          ],
          "correct": 0
        },
        {
          "title": "lion (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَسَدٌ?",
          "options": [
            "أُسْدٌ",
            "عَلَامَاتٌ",
            "آدَابٌ",
            "أَقْلَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "worship",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"worship\"?",
          "options": [
            "عِبَادَةٌ",
            "ضَاعَ يَضِيْعُ",
            "تَلَا يَتْلُوْ",
            "نَبِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "worship",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عِبَادَةٌ mean?",
          "options": [
            "worship",
            "to be lost",
            "to recite",
            "prophet"
          ],
          "correct": 0
        },
        {
          "title": "life",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"life\"?",
          "options": [
            "حَيَاةٌ",
            "سَافَرَ يُسَافِرُ",
            "وَصَلَ يَصِلُ",
            "قَلَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "life",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَيَاةٌ mean?",
          "options": [
            "life",
            "to travel",
            "to reach, arrive",
            "pen"
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
            "تَلَا يَتْلُوْ",
            "نَبِيٌّ",
            "عَلَامَةٌ"
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
            "to recite",
            "prophet",
            "sign, mark"
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
            "تِلَاوَةً",
            "ضَيَاعًا",
            "مُسَافَرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be lost",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be lost\"?",
          "options": [
            "ضَاعَ يَضِيْعُ",
            "وَصَلَ يَصِلُ",
            "قَلَمٌ",
            "أُسْبُوْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be lost",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَاعَ يَضِيْعُ mean?",
          "options": [
            "to be lost",
            "to reach, arrive",
            "pen",
            "week"
          ],
          "correct": 0
        },
        {
          "title": "to be lost (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَاعَ يَضِيْعُ?",
          "options": [
            "ضَيَاعًا",
            "وُصُوْلًا",
            "مُسَافَرَةً",
            "ضَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to travel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to travel\"?",
          "options": [
            "سَافَرَ يُسَافِرُ",
            "نَبِيٌّ",
            "عَلَامَةٌ",
            "أَدَبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to travel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَافَرَ يُسَافِرُ mean?",
          "options": [
            "to travel",
            "prophet",
            "sign, mark",
            "manners, refinement"
          ],
          "correct": 0
        },
        {
          "title": "to travel (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَافَرَ يُسَافِرُ?",
          "options": [
            "مُسَافَرَةً",
            "ضَلَالًا",
            "تِلَاوَةً",
            "ضَيَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to recite",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recite\"?",
          "options": [
            "تَلَا يَتْلُوْ",
            "قَلَمٌ",
            "أُسْبُوْعٌ",
            "أَسَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to recite",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَا يَتْلُوْ mean?",
          "options": [
            "to recite",
            "pen",
            "week",
            "lion"
          ],
          "correct": 0
        },
        {
          "title": "to recite (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَا يَتْلُوْ?",
          "options": [
            "تِلَاوَةً",
            "ضَيَاعًا",
            "وُصُوْلًا",
            "ضَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to reach, arrive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reach, arrive\"?",
          "options": [
            "وَصَلَ يَصِلُ",
            "عَلَامَةٌ",
            "أَدَبٌ",
            "عِبَادَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to reach, arrive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَصَلَ يَصِلُ mean?",
          "options": [
            "to reach, arrive",
            "sign, mark",
            "manners, refinement",
            "worship"
          ],
          "correct": 0
        },
        {
          "title": "to reach, arrive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَصَلَ يَصِلُ?",
          "options": [
            "وُصُوْلًا",
            "مُسَافَرَةً",
            "ضَلَالًا",
            "ضَيَاعًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l10",
      "title": "ولو وإن حالًا",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "The construction",
          "lines": [
            {
              "html": "The conditional particles إِنْ and لَوْ can be preceded by a وَاوٌ حَالِيَّةٌ to give the meaning of 'even though' or 'even if'.",
              "list": false
            },
            {
              "html": "أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ — Be fair to people even though they wronged you.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The sentence after وَلَوْ becomes the حَالٌ, and the جَوَابُ الشَّرْطِ is مَحْذُوْفٌ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ",
                "translation": "Be fair to people even though they wronged you.",
                "cells": [
                  "أَنْصِفُوْا",
                  "النَّاسَ",
                  "وَ",
                  "لَوْ",
                  "ظَلَمُوْكُمْ",
                  "(مَحْذُوْفٌ)"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلٌ وَفَاعِلٌ (و)"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "وَاوٌ حَالِيَّةٌ"
                      },
                      {
                        "start": 3,
                        "end": 5,
                        "role": "حَالٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 4,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "جَوَابُ شَرْطٍ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فِعْلٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Book slip: the shaded example box on p. 587 prints ظَلَمُوْكَ, with a singular 'you', while the tarkeeb diagram beneath it prints ظَلَمُوْكُمْ. Since the command أَنْصِفُوْا is plural, the diagram's form is the consistent one, and it is the one reproduced here.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What meaning results when a وَاوٌ حَالِيَّةٌ precedes إِنْ or لَوْ, as in أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ؟",
            "kind": "mcq",
            "options": [
              "'Even though' / 'even if' — a concession, with the sentence after وَلَوْ/وَإِنْ becoming the حَالٌ and the جَوَابُ الشَّرْطِ حَذْف",
              "A plain new independent conditional, unconnected to the sentence before it",
              "A negation of the whole sentence",
              "A question"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Reading the diagram",
          "lines": [
            {
              "html": "Two levels are at work. On the top level the sentence is simply an أَمْر with its object, followed by a حَالٌ — 'be fair to people, [while] they having wronged you'. On the level below, that حَالٌ is itself a conditional: لَوْ ظَلَمُوْكُمْ is its شَرْط, and its جَوَاب is left unsaid.",
              "list": false
            },
            {
              "html": "That hidden جَوَاب is what produces the concessive sense. 'Even though they wronged you' is short for 'even if they wronged you, [be fair to them]' — the result has already been stated at the front of the sentence, so there is no need to repeat it.",
              "list": false
            },
            {
              "table": {
                "title": "The two particles in this use",
                "headers": [
                  "Shape",
                  "English",
                  "Example"
                ],
                "rows": [
                  [
                    "وَلَوْ",
                    "even though",
                    "أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ"
                  ],
                  [
                    "وَإِنْ",
                    "even if",
                    "أَتَوَضَّأُ لِكُلِّ صَلَاةٍ وَإِنْ كُنْتُ مُتَوَضِّئًا"
                  ]
                ]
              }
            },
            {
              "html": "Keep the وَاو straight in your mind. This is not the وَاوُ الْعَطْفِ joining two sentences, nor the وَاوُ الْقَسَمِ of Part 2; it is the وَاوُ الْحَالِيَّةُ, the same wāw met long ago before a حَالٌ sentence. Recognising it is what tells you the clause is concessive rather than a second, independent conditional.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why is the جَوَابُ الشَّرْطِ left unsaid in this وَلَوْ/وَإِنْ construction؟",
            "kind": "mcq",
            "options": [
              "Because the result has already been stated at the front of the sentence (the main command/statement), so repeating it would be redundant",
              "Because Arabic conditionals never state a جَوَاب",
              "Because وَلَوْ makes the whole clause ungrammatical without a جَوَاب",
              "Because the شَرْط itself is missing here too"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "وَلَوْ and وَإِنْ as a حَال",
        "rows": [
          {
            "label": "The shape",
            "arabic": "وَاوٌ حَالِيَّةٌ + إِنْ أَوْ لَوْ",
            "meaning": "'even though' / 'even if'"
          },
          {
            "label": "The clause",
            "arabic": "حَالٌ",
            "meaning": "the sentence after the wāw fills a حَال slot"
          },
          {
            "label": "Its جَوَاب",
            "arabic": "مَحْذُوْفٌ",
            "meaning": "already stated at the front of the sentence"
          },
          {
            "label": "Example",
            "arabic": "أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ",
            "meaning": "be fair even though they wronged you"
          },
          {
            "label": "Example",
            "arabic": "وَإِنْ كُنْتُ مُتَوَضِّئًا",
            "meaning": "even if I am already in wuḍū'"
          },
          {
            "label": "The wāw",
            "arabic": "لَيْسَتْ عَاطِفَةً وَلَا لِلْقَسَمِ",
            "meaning": "neither conjunction nor oath — it is حَالِيَّة"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is placed before إِنْ or لَوْ to give the sense 'even though'?",
          "options": [
            "a فَاءٌ رَابِطَةٌ",
            "a لَامُ الْجَوَابِ",
            "a وَاوٌ حَالِيَّةٌ",
            "a حَرْفُ نَفْيٍ"
          ],
          "correct": 2,
          "explanation": "The same wāw that introduces a حَالٌ sentence elsewhere."
        },
        {
          "q": "In أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ, what does the conditional clause after the وَاوٌ حَالِيَّةٌ become?",
          "options": [
            "a حَالٌ",
            "a نَعْتٌ",
            "a second جَوَابُ الشَّرْطِ",
            "a مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 0,
          "explanation": "The whole conditional sits inside a حَال slot."
        },
        {
          "q": "In أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ, what happens to the جَوَابُ الشَّرْطِ of the inner لَوْ conditional?",
          "options": [
            "It comes first",
            "It is مَحْذُوْفٌ — left unsaid",
            "It takes a فَ",
            "It becomes مَجْزُوْمٌ"
          ],
          "correct": 1,
          "explanation": "The result has already been stated at the head of the sentence."
        },
        {
          "q": "Why does the hidden جَوَاب of the inner لَوْ/إِنْ clause produce the 'even though' / 'even if' sense?",
          "options": [
            "Because لَوْ means 'even'",
            "Because the wāw means 'though'",
            "Because a hidden جَوَاب always means concession",
            "Because the result would just repeat the main clause"
          ],
          "correct": 3,
          "explanation": "'Even if they wronged you, [be fair to them]' — no need to say it twice."
        },
        {
          "q": "After a وَاوٌ حَالِيَّةٌ (as in وَإِنْ كُنْتُ مُتَوَضِّئًا), which meaning does وَإِنْ usually carry?",
          "options": [
            "'when'",
            "'unless'",
            "'even if'",
            "'because'"
          ],
          "correct": 2,
          "explanation": "وَلَوْ tends towards 'even though'; وَإِنْ towards 'even if'."
        },
        {
          "q": "The وَاوٌ حَالِيَّةٌ of وَلَوْ / وَإِنْ is easy to confuse with two other wāws. Which is it NOT?",
          "options": [
            "the وَاوُ الْعَطْفِ or the وَاوُ الْقَسَمِ",
            "the وَاوُ الْحَالِيَّةُ",
            "a wāw at all",
            "a wāw before a sentence"
          ],
          "correct": 0,
          "explanation": "Telling it apart from those two is what makes the clause read as concessive."
        }
      ],
      "bank": [
        {
          "title": "أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 587)",
          "sentence": "أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ",
          "translation": "Be fair to people even though they wronged you.",
          "cells": [
            "أَنْصِفُوْا",
            "النَّاسَ",
            "وَ",
            "لَوْ",
            "ظَلَمُوْكُمْ",
            "(مَحْذُوْفٌ)"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 4,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "لَامُ الْجَوَابِ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا تَظْلِمِ النَّاسَ وَلَوْ ظَلَمُوْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Unit 6, Part 3), item 1",
          "sentence": "لَا تَظْلِمِ النَّاسَ وَلَوْ ظَلَمُوْكَ",
          "translation": "Do not wrong people, even though they have wronged you.",
          "cells": [
            "لَا تَظْلِمِ",
            "النَّاسَ",
            "وَ",
            "لَوْ ظَلَمُوْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "شَرْطٌ وَجَوَابُهُ مَحْذُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "لَامُ الْجَوَابِ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَتَوَضَّأُ لِكُلِّ صَلَاةٍ وَإِنْ كُنْتُ مُتَوَضِّئًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Unit 6, Part 3), item 2",
          "sentence": "أَتَوَضَّأُ لِكُلِّ صَلَاةٍ وَإِنْ كُنْتُ مُتَوَضِّئًا",
          "translation": "I perform wuḍū' for every prayer, even if I am already in wuḍū'.",
          "cells": [
            "أَتَوَضَّأُ",
            "لِكُلِّ صَلَاةٍ",
            "وَ",
            "إِنْ",
            "كُنْتُ",
            "مُتَوَضِّئًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَنْ يُفْلِحَ الظَّالِمُ وَإِنْ جَمَعَ جَبَلًا مِنْ ذَهَبٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Unit 6, Part 3), item 3",
          "sentence": "لَنْ يُفْلِحَ الظَّالِمُ وَإِنْ جَمَعَ جَبَلًا مِنْ ذَهَبٍ",
          "translation": "The wrongdoer will never succeed, even if he amasses a mountain of gold.",
          "cells": [
            "لَنْ",
            "يُفْلِحَ",
            "الظَّالِمُ",
            "وَ",
            "إِنْ",
            "جَمَعَ جَبَلًا مِنْ ذَهَبٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَنَصْبٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "شَرْطٌ وَجَوَابُهُ مَحْذُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا تَسْجُدُوْا لِأَحَدٍ غَيْرِ اللهِ وَإِنْ قَطَعُوْا رَأْسَكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Unit 6, Part 3), item 4",
          "sentence": "لَا تَسْجُدُوْا لِأَحَدٍ غَيْرِ اللهِ وَإِنْ قَطَعُوْا رَأْسَكُمْ",
          "translation": "Do not prostrate to anyone other than Allah, even if they cut off your head.",
          "cells": [
            "لَا تَسْجُدُوْا",
            "لِأَحَدٍ",
            "غَيْرِ اللهِ",
            "وَ",
            "إِنْ قَطَعُوْا رَأْسَكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "شَرْطٌ وَجَوَابُهُ مَحْذُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَسْأَلُ أُمِّيْ أَنْ تَدْعُوَ لِيْ وَلَوْ كَانَتْ قَالَتْ لِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Unit 6, Part 3), item 5",
          "sentence": "أَسْأَلُ أُمِّيْ أَنْ تَدْعُوَ لِيْ وَلَوْ كَانَتْ قَالَتْ لِيْ",
          "translation": "I ask my mother to pray for me, even though she has said to me…",
          "cells": [
            "أَسْأَلُ",
            "أُمِّيْ",
            "أَنْ تَدْعُوَ لِيْ",
            "وَ",
            "لَوْ كَانَتْ قَالَتْ لِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمٌ مُؤَوَّلٌ — مَفْعُوْلٌ بِهِ ثَانٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "شَرْطٌ وَجَوَابُهُ مَحْذُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "لَامُ الْجَوَابِ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَ جَدُّ أَحْمَدَ سُلَيْمَانُ يُصَلِّيْ الصَّلَوَاتِ كُلَّهَا فِي الْمَسْجِدِ وَإِنْ كَانَ مَرِيْضًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Unit 6, Part 3), item 6",
          "sentence": "كَانَ جَدُّ أَحْمَدَ سُلَيْمَانُ يُصَلِّيْ الصَّلَوَاتِ كُلَّهَا فِي الْمَسْجِدِ وَإِنْ كَانَ مَرِيْضًا",
          "translation": "Aḥmad's grandfather Sulaymān used to pray all the prayers in the mosque, even if he was ill.",
          "cells": [
            "كَانَ",
            "جَدُّ أَحْمَدَ",
            "سُلَيْمَانُ",
            "يُصَلِّيْ الصَّلَوَاتِ كُلَّهَا فِي الْمَسْجِدِ",
            "وَ",
            "إِنْ كَانَ مَرِيْضًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "بَدَلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "شَرْطٌ وَجَوَابُهُ مَحْذُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 9 (Unit 6, Part 3), item 1",
          "kind": "mcq",
          "prompt": "In لَا تَظْلِمِ النَّاسَ وَلَوْ ظَلَمُوْكَ, what is لَوْ ظَلَمُوْكَ?",
          "options": [
            "the جَوَابُ الشَّرْطِ",
            "a حَالٌ whose own جَوَاب is hidden",
            "a نَعْتٌ of النَّاسَ",
            "a second command"
          ],
          "correct": 1,
          "explanation": "The وَاو before it is حَالِيَّة."
        },
        {
          "title": "Book Exercise 9 (Unit 6, Part 3), item 2",
          "kind": "mcq",
          "prompt": "In أَتَوَضَّأُ لِكُلِّ صَلَاةٍ وَإِنْ كُنْتُ مُتَوَضِّئًا, what is مُتَوَضِّئًا?",
          "options": [
            "the اِسْمُ كَانَ",
            "the خَبَرُ كَانَ",
            "a حَالٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "The تُ of كُنْتُ is the اِسْم; مُتَوَضِّئًا is the مَنْصُوْب خَبَر."
        },
        {
          "title": "Book Exercise 9 (Unit 6, Part 3), item 3",
          "kind": "mcq",
          "prompt": "In لَنْ يُفْلِحَ الظَّالِمُ وَإِنْ جَمَعَ جَبَلًا مِنْ ذَهَبٍ, what does لَنْ contribute?",
          "options": [
            "It makes the main clause a firm negative future",
            "It makes the sentence conditional",
            "It negates the حَال",
            "It is the جَوَابُ الشَّرْطِ"
          ],
          "correct": 0,
          "explanation": "'Will never succeed' — with the concession attached afterwards."
        },
        {
          "title": "Book Exercise 9 (Unit 6, Part 3), item 4",
          "kind": "mcq",
          "prompt": "In لَا تَسْجُدُوْا لِأَحَدٍ غَيْرِ اللهِ, what is غَيْرِ?",
          "options": [
            "a مُضَافٌ إِلَيْهِ of أَحَدٍ",
            "a نَعْتٌ of أَحَدٍ",
            "a بَدَلٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "It describes أَحَدٍ and copies its مَجْرُوْر state."
        },
        {
          "title": "Book Exercise 9 (Unit 6, Part 3), item 5",
          "kind": "mcq",
          "prompt": "In دَائِمًا أَسْأَلُ أُمِّيْ أَنْ تَدْعُوَ لِيْ …, what is أَنْ تَدْعُوَ لِيْ?",
          "options": [
            "a حَالٌ",
            "an اِسْمٌ مُؤَوَّلٌ — the second مَفْعُوْلٌ بِهِ of أَسْأَلُ",
            "a جَوَابُ شَرْطٍ",
            "a نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "سَأَلَ takes two objects: whom you ask, and what you ask for."
        },
        {
          "title": "Book Exercise 9 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In كَانَ جَدُّ أَحْمَدَ سُلَيْمَانُ يُصَلِّيْ …, what is سُلَيْمَانُ?",
          "options": [
            "the خَبَرُ كَانَ",
            "a نَعْتٌ",
            "a بَدَلٌ of جَدُّ أَحْمَدَ",
            "the فَاعِلٌ of يُصَلِّيْ"
          ],
          "correct": 2,
          "explanation": "It names the same person again, so it copies the مَرْفُوْع state."
        },
        {
          "title": "Book Exercise 9 (Unit 6, Part 3), item 6",
          "kind": "mcq",
          "prompt": "In the same sentence, what does كَانَ … يُصَلِّيْ give?",
          "options": [
            "a simple past",
            "a future",
            "a command",
            "a habitual past — 'used to pray'"
          ],
          "correct": 3,
          "explanation": "كَانَ with a مُضَارِع خَبَر, from Unit 5, Section 1."
        },
        {
          "title": "Book example (Unit 6, Part 3, p. 587)",
          "kind": "mcq",
          "prompt": "In أَنْصِفُوا النَّاسَ وَلَوْ ظَلَمُوْكُمْ, which slot does the whole وَلَوْ clause fill?",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "It describes the state in which the command is to be carried out."
        },
        {
          "title": "gold",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"gold\"?",
          "options": [
            "ذَهَبٌ",
            "ظَالِمٌ",
            "أَنْصَفَ يُنْصِفُ",
            "أَفْلَحَ يُفْلِحُ"
          ],
          "correct": 0
        },
        {
          "title": "gold",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَهَبٌ mean?",
          "options": [
            "gold",
            "wrongdoer",
            "to be fair, do justice",
            "to succeed, prosper"
          ],
          "correct": 0
        },
        {
          "title": "mountain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"mountain\"?",
          "options": [
            "جَبَلٌ",
            "جَدٌّ",
            "تَوَضَّأَ يَتَوَضَّأُ",
            "جَمَعَ يَجْمَعُ"
          ],
          "correct": 0
        },
        {
          "title": "mountain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَبَلٌ mean?",
          "options": [
            "mountain",
            "grandfather",
            "to perform wuḍū'",
            "to gather, amass"
          ],
          "correct": 0
        },
        {
          "title": "mountain (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَبَلٌ?",
          "options": [
            "جِبَالٌ",
            "رُؤُوْسٌ",
            "أَجْدَادٌ",
            "ظَالِمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "head",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"head\"?",
          "options": [
            "رَأْسٌ",
            "أَنْصَفَ يُنْصِفُ",
            "أَفْلَحَ يُفْلِحُ",
            "سَجَدَ يَسْجُدُ"
          ],
          "correct": 0
        },
        {
          "title": "head",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَأْسٌ mean?",
          "options": [
            "head",
            "to be fair, do justice",
            "to succeed, prosper",
            "to prostrate"
          ],
          "correct": 0
        },
        {
          "title": "head (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَأْسٌ?",
          "options": [
            "رُؤُوْسٌ",
            "ظَالِمُوْنَ",
            "جِبَالٌ",
            "أَجْدَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "wrongdoer",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wrongdoer\"?",
          "options": [
            "ظَالِمٌ",
            "تَوَضَّأَ يَتَوَضَّأُ",
            "جَمَعَ يَجْمَعُ",
            "قَطَعَ يَقْطَعُ"
          ],
          "correct": 0
        },
        {
          "title": "wrongdoer",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظَالِمٌ mean?",
          "options": [
            "wrongdoer",
            "to perform wuḍū'",
            "to gather, amass",
            "to cut"
          ],
          "correct": 0
        },
        {
          "title": "wrongdoer (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ظَالِمٌ?",
          "options": [
            "ظَالِمُوْنَ",
            "أَجْدَادٌ",
            "رُؤُوْسٌ",
            "جِبَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "grandfather",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"grandfather\"?",
          "options": [
            "جَدٌّ",
            "أَفْلَحَ يُفْلِحُ",
            "سَجَدَ يَسْجُدُ",
            "ذَهَبٌ"
          ],
          "correct": 0
        },
        {
          "title": "grandfather",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَدٌّ mean?",
          "options": [
            "grandfather",
            "to succeed, prosper",
            "to prostrate",
            "gold"
          ],
          "correct": 0
        },
        {
          "title": "grandfather (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَدٌّ?",
          "options": [
            "أَجْدَادٌ",
            "جِبَالٌ",
            "ظَالِمُوْنَ",
            "رُؤُوْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be fair, do justice",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be fair, do justice\"?",
          "options": [
            "أَنْصَفَ يُنْصِفُ",
            "جَمَعَ يَجْمَعُ",
            "قَطَعَ يَقْطَعُ",
            "جَبَلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be fair, do justice",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْصَفَ يُنْصِفُ mean?",
          "options": [
            "to be fair, do justice",
            "to gather, amass",
            "to cut",
            "mountain"
          ],
          "correct": 0
        },
        {
          "title": "to be fair, do justice (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْصَفَ يُنْصِفُ?",
          "options": [
            "إِنْصَافًا",
            "جَمْعًا",
            "قَطْعًا",
            "إِفْلَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to perform wuḍū'",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform wuḍū'\"?",
          "options": [
            "تَوَضَّأَ يَتَوَضَّأُ",
            "سَجَدَ يَسْجُدُ",
            "ذَهَبٌ",
            "رَأْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to perform wuḍū'",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَوَضَّأَ يَتَوَضَّأُ mean?",
          "options": [
            "to perform wuḍū'",
            "to prostrate",
            "gold",
            "head"
          ],
          "correct": 0
        },
        {
          "title": "to perform wuḍū' (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَوَضَّأَ يَتَوَضَّأُ?",
          "options": [
            "تَوَضُّؤًا",
            "سُجُوْدًا",
            "إِنْصَافًا",
            "جَمْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to succeed, prosper",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to succeed, prosper\"?",
          "options": [
            "أَفْلَحَ يُفْلِحُ",
            "قَطَعَ يَقْطَعُ",
            "جَبَلٌ",
            "ظَالِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to succeed, prosper",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَفْلَحَ يُفْلِحُ mean?",
          "options": [
            "to succeed, prosper",
            "to cut",
            "mountain",
            "wrongdoer"
          ],
          "correct": 0
        },
        {
          "title": "to succeed, prosper (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَفْلَحَ يُفْلِحُ?",
          "options": [
            "إِفْلَاحًا",
            "قَطْعًا",
            "تَوَضُّؤًا",
            "سُجُوْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to gather, amass",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to gather, amass\"?",
          "options": [
            "جَمَعَ يَجْمَعُ",
            "ذَهَبٌ",
            "رَأْسٌ",
            "جَدٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to gather, amass",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَمَعَ يَجْمَعُ mean?",
          "options": [
            "to gather, amass",
            "gold",
            "head",
            "grandfather"
          ],
          "correct": 0
        },
        {
          "title": "to gather, amass (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَمَعَ يَجْمَعُ?",
          "options": [
            "جَمْعًا",
            "إِنْصَافًا",
            "إِفْلَاحًا",
            "قَطْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to prostrate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prostrate\"?",
          "options": [
            "سَجَدَ يَسْجُدُ",
            "جَبَلٌ",
            "ظَالِمٌ",
            "أَنْصَفَ يُنْصِفُ"
          ],
          "correct": 0
        },
        {
          "title": "to prostrate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَجَدَ يَسْجُدُ mean?",
          "options": [
            "to prostrate",
            "mountain",
            "wrongdoer",
            "to be fair, do justice"
          ],
          "correct": 0
        },
        {
          "title": "to prostrate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَجَدَ يَسْجُدُ?",
          "options": [
            "سُجُوْدًا",
            "تَوَضُّؤًا",
            "جَمْعًا",
            "إِنْصَافًا"
          ],
          "correct": 0
        },
        {
          "title": "to cut",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cut\"?",
          "options": [
            "قَطَعَ يَقْطَعُ",
            "رَأْسٌ",
            "جَدٌّ",
            "تَوَضَّأَ يَتَوَضَّأُ"
          ],
          "correct": 0
        },
        {
          "title": "to cut",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَطَعَ يَقْطَعُ mean?",
          "options": [
            "to cut",
            "head",
            "grandfather",
            "to perform wuḍū'"
          ],
          "correct": 0
        },
        {
          "title": "to cut (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَطَعَ يَقْطَعُ?",
          "options": [
            "قَطْعًا",
            "إِفْلَاحًا",
            "سُجُوْدًا",
            "تَوَضُّؤًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l11",
      "title": "لو للطلب والتمني",
      "subtitle": "Part 3: Conditional Sentences",
      "concepts": [
        {
          "heading": "لَوْ for requests",
          "lines": [
            {
              "html": "The conditional particle لَوْ can be used to make a request. The sentence after لَوْ will be a فِعْلٌ مَاضٍ. In this case the جَوَابُ الشَّرْطِ is مَحْذُوْفٌ. This is translated as 'why don't you' or 'could you kindly'.",
              "list": false
            },
            {
              "html": "لَوْ جَلَسْتَ هُنَاكَ — Could you kindly sit over there.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَوْ جَلَسْتَ هُنَاكَ",
                "translation": "Could you kindly sit over there.",
                "cells": [
                  "لَوْ",
                  "جَلَسْتَ",
                  "هُنَاكَ",
                  "(مَحْذُوْفٌ)"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "شَرْطٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "جَوَابُ شَرْطٍ"
                      }
                    ]
                  },
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ شَرْطٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The politeness comes from what is left unsaid. 'If you were to sit over there…' trails off before naming any consequence, and that unfinished quality is exactly what softens it into a request. English does the same with 'if you wouldn't mind…'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does لَوْ turn into a polite request, as in لَوْ جَلَسْتَ هُنَاكَ؟",
            "kind": "mcq",
            "options": [
              "The جَوَابُ الشَّرْطِ is left unsaid (مَحْذُوْفٌ), and that unfinished, trailing-off quality is exactly what softens it into a request",
              "By adding a special request particle before لَوْ",
              "By putting the verb into the أَمْرٌ form",
              "By negating the شَرْط"
            ],
            "correct": 0
          }
        },
        {
          "heading": "لَوْ for wishes",
          "lines": [
            {
              "html": "The particle لَوْ can also be used to express a wish. In this case too, the جَوَابُ الشَّرْطِ is omitted.",
              "list": false
            },
            {
              "html": "لَوْ لَمْ أُضَيِّعْ وَقْتِيْ — If only I did not waste my time.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The difference between the two uses is one of person and of tone rather than of grammar. Both are a شَرْط with no جَوَاب. A second-person verb makes it a request; a first-person verb, usually with regret behind it, makes it a wish.",
              "list": false
            },
            {
              "table": {
                "title": "لَوْ with a hidden جَوَاب",
                "headers": [
                  "Use",
                  "Typical verb",
                  "English",
                  "Example"
                ],
                "rows": [
                  [
                    "request",
                    "second person, مَاضٍ",
                    "could you kindly… / why don't you…",
                    "لَوْ جَلَسْتَ هُنَاكَ"
                  ],
                  [
                    "wish",
                    "first person, often negated",
                    "if only…",
                    "لَوْ لَمْ أُضَيِّعْ وَقْتِيْ"
                  ]
                ]
              }
            },
            {
              "html": "This completes the picture of لَوْ. It builds an unreal conditional with لَامُ الْجَوَابِ (Lesson 12); it takes كَانَ or أَنَّ before a nominal sentence (Lesson 13); it makes a concession after a وَاوٌ حَالِيَّةٌ (Lesson 15); and, with its جَوَاب dropped altogether, it makes a request or a wish.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What single grammatical feature distinguishes a لَوْ-request from a لَوْ-wish, given that both drop the جَوَاب؟",
            "kind": "mcq",
            "options": [
              "Person and tone: a second-person verb makes it a request, while a first-person verb (often with regret) makes it a wish",
              "The request always uses مَاضٍ and the wish always uses مُضَارِعٌ",
              "The request is always negative and the wish is always positive",
              "There is no way to distinguish them at all"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "لَوْ with its جَوَاب dropped",
        "rows": [
          {
            "label": "Request",
            "arabic": "لَوْ + مَاضٍ",
            "meaning": "'could you kindly…' / 'why don't you…'"
          },
          {
            "label": "Example",
            "arabic": "لَوْ جَلَسْتَ هُنَاكَ",
            "meaning": "could you kindly sit over there"
          },
          {
            "label": "Wish",
            "arabic": "لَوْ + مَاضٍ",
            "meaning": "'if only…'"
          },
          {
            "label": "Example",
            "arabic": "لَوْ لَمْ أُضَيِّعْ وَقْتِيْ",
            "meaning": "if only I did not waste my time"
          },
          {
            "label": "Both",
            "arabic": "جَوَابُ الشَّرْطِ مَحْذُوْفٌ",
            "meaning": "the sentence is left unfinished"
          },
          {
            "label": "Telling them apart",
            "arabic": "اَلشَّخْصُ وَالنَّبْرَةُ",
            "meaning": "second person = request; first person = wish"
          }
        ]
      },
      "quiz": [
        {
          "q": "What form of verb follows لَوْ when it makes a request?",
          "options": [
            "a فِعْلٌ مَاضٍ",
            "a مُضَارِعٌ مَجْزُوْمٌ",
            "an أَمْر",
            "a nominal sentence"
          ],
          "correct": 0,
          "explanation": "لَوْ جَلَسْتَ هُنَاكَ."
        },
        {
          "q": "When لَوْ جَلَسْتَ هُنَاكَ makes a polite request rather than a real condition, what happens to the جَوَابُ الشَّرْطِ?",
          "options": [
            "It takes a فَ",
            "It comes first",
            "It is مَحْذُوْفٌ",
            "It becomes مَجْزُوْمٌ"
          ],
          "correct": 2,
          "explanation": "The sentence is deliberately left unfinished."
        },
        {
          "q": "How is لَوْ جَلَسْتَ هُنَاكَ translated?",
          "options": [
            "'If you sat there, you would…'",
            "'Could you kindly sit over there' / 'Why don't you sit over there'",
            "'When you sit there'",
            "'Unless you sit there'"
          ],
          "correct": 1,
          "explanation": "A polite request, not a statement of consequence."
        },
        {
          "q": "Besides a polite request, what other use of لَوْ does لَوْ لَمْ أُضَيِّعْ وَقْتِيْ show?",
          "options": [
            "a command",
            "a question",
            "an oath",
            "a wish"
          ],
          "correct": 3,
          "explanation": "لَوْ لَمْ أُضَيِّعْ وَقْتِيْ — 'if only…'."
        },
        {
          "q": "What tells a request apart from a wish?",
          "options": [
            "the person of the verb and the tone — second person for a request, first for a wish",
            "the presence of a لَام",
            "the state of the verb",
            "the particle used"
          ],
          "correct": 0,
          "explanation": "The grammar of the two is identical."
        },
        {
          "q": "Why does dropping the جَوَاب soften the sentence?",
          "options": [
            "Because it makes the verb مَجْزُوْم",
            "Because it removes the conditional meaning entirely",
            "Because no consequence is named — the sentence trails off",
            "Because it turns the verb into a command"
          ],
          "correct": 2,
          "explanation": "English does the same with 'if you wouldn't mind…'."
        }
      ],
      "bank": [
        {
          "title": "لَوْ جَلَسْتَ هُنَاكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 588)",
          "sentence": "لَوْ جَلَسْتَ هُنَاكَ",
          "translation": "Could you kindly sit over there.",
          "cells": [
            "لَوْ",
            "جَلَسْتَ",
            "هُنَاكَ",
            "(مَحْذُوْفٌ)"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "لَامُ الْجَوَابِ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَوْ لَمْ أُضَيِّعْ وَقْتِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 3, p. 588)",
          "sentence": "لَوْ لَمْ أُضَيِّعْ وَقْتِيْ",
          "translation": "If only I did not waste my time.",
          "cells": [
            "لَوْ",
            "لَمْ",
            "أُضَيِّعْ",
            "وَقْتِيْ",
            "(مَحْذُوْفٌ)"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "لَامُ الْجَوَابِ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَوْ كَانَ الْبَابُ مَفْتُوْحًا لَدَخَلْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 4",
          "sentence": "لَوْ كَانَ الْبَابُ مَفْتُوْحًا لَدَخَلْتُ",
          "translation": "Had the door been open, I would have entered.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "الْبَابُ",
            "مَفْتُوْحًا",
            "لَ",
            "دَخَلْتُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْ كَانُوْا عُقَلَاءَ مَا فَعَلُوْا أَشْيَاءَ مِثْلَ هٰذِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 8",
          "sentence": "لَوْ كَانُوْا عُقَلَاءَ مَا فَعَلُوْا أَشْيَاءَ مِثْلَ هٰذِهِ",
          "translation": "Had they been sensible, they would not have done things like these.",
          "cells": [
            "لَوْ",
            "كَانُوْا",
            "عُقَلَاءَ",
            "مَا",
            "فَعَلُوْا",
            "أَشْيَاءَ مِثْلَ هٰذِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "لَامُ الْجَوَابِ",
            "رَابِطَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَوْ كَانَ عِنْدَهَا مَاءٌ لَغَسَلَتْ يَدَهَا الْوَسِخَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 10",
          "sentence": "لَوْ كَانَ عِنْدَهَا مَاءٌ لَغَسَلَتْ يَدَهَا الْوَسِخَةَ",
          "translation": "Had she had water, she would have washed her dirty hand.",
          "cells": [
            "لَوْ",
            "كَانَ",
            "عِنْدَهَا",
            "مَاءٌ",
            "لَ",
            "غَسَلَتْ",
            "يَدَهَا الْوَسِخَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ كَانَ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ كَانَ مُؤَخَّرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَوْ كَانَ عِنْدِيْ مَالٌ لَذَهَبْتُ إِلَى مَكَّةَ لِأَحُجَّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Unit 6, Part 3), item 11",
          "sentence": "لَوْ كَانَ عِنْدِيْ مَالٌ لَذَهَبْتُ إِلَى مَكَّةَ لِأَحُجَّ",
          "translation": "Had I had wealth, I would have gone to Makkah to perform Ḥajj.",
          "cells": [
            "لَوْ",
            "كَانَ عِنْدِيْ مَالٌ",
            "لَ",
            "ذَهَبْتُ",
            "إِلَى مَكَّةَ",
            "لِأَحُجَّ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ مَعَ خَبَرِهِ وَاسْمِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "اِسْمٌ مُؤَوَّلٌ — مَفْعُوْلٌ لَهُ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا الضُّيُوْفُ لَمَا أَقَمْنَا فِي الْبَيْتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 4",
          "sentence": "لَوْلَا الضُّيُوْفُ لَمَا أَقَمْنَا فِي الْبَيْتِ",
          "translation": "Were it not for the guests, we would not have stayed in the house.",
          "cells": [
            "لَوْلَا",
            "الضُّيُوْفُ",
            "لَمَا",
            "أَقَمْنَا",
            "فِي الْبَيْتِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَوْلَا رَمَضَانُ لَمَا تَلَا الْقُرْآنَ كَثِيْرٌ مِنَ النَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Unit 6, Part 3), item 9",
          "sentence": "لَوْلَا رَمَضَانُ لَمَا تَلَا الْقُرْآنَ كَثِيْرٌ مِنَ النَّاسِ",
          "translation": "Were it not for Ramaḍān, many people would not have recited the Qur'ān.",
          "cells": [
            "لَوْلَا",
            "رَمَضَانُ",
            "لَمَا",
            "تَلَا",
            "الْقُرْآنَ",
            "كَثِيْرٌ مِنَ النَّاسِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "جَوَابُ شَرْطٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ شَرْطٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "لَامُ الْجَوَابِ مَعَ حَرْفِ النَّفْيِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book example (Unit 6, Part 3, p. 588)",
          "kind": "mcq",
          "prompt": "How does لَوْ جَلَسْتَ هُنَاكَ differ grammatically from لَوْ جَلَسْتَ هُنَاكَ لَرَأَيْتَ الْإِمَامَ?",
          "options": [
            "The first has no جَوَاب; the second has one",
            "The first uses a مُضَارِع",
            "The second is not a conditional",
            "There is no difference"
          ],
          "correct": 0,
          "explanation": "That single omission is what turns it into a request."
        },
        {
          "title": "Book example (Unit 6, Part 3, p. 588)",
          "kind": "mcq",
          "prompt": "In لَوْ لَمْ أُضَيِّعْ وَقْتِيْ, why is أُضَيِّعْ مَجْزُوْمَة?",
          "options": [
            "Because لَوْ is عَامِلٌ",
            "Because لَمْ precedes it",
            "Because it is a wish",
            "Because وَقْتِيْ is a مُضَاف"
          ],
          "correct": 1,
          "explanation": "لَوْ is غَيْرُ عَامِلٍ; the jazm comes from لَمْ."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 4",
          "kind": "mcq",
          "prompt": "Is لَوْ كَانَ الْبَابُ مَفْتُوْحًا لَدَخَلْتُ a request, a wish, or an unreal conditional?",
          "options": [
            "a request",
            "a wish",
            "an unreal conditional — its جَوَاب is stated",
            "a concession"
          ],
          "correct": 2,
          "explanation": "لَدَخَلْتُ carries the لَامُ الْجَوَابِ."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 8",
          "kind": "mcq",
          "prompt": "In لَوْ كَانُوْا عُقَلَاءَ مَا فَعَلُوْا أَشْيَاءَ مِثْلَ هٰذِهِ, why is عُقَلَاءَ without tanwīn?",
          "options": [
            "Because it is a مُضَافٌ",
            "Because it is definite",
            "Because it is مَمْنُوْعٌ مِنَ الصَّرْفِ",
            "Because كَانَ removes the tanwīn"
          ],
          "correct": 2,
          "explanation": "The فُعَلَاءُ plural pattern is barred from tanwīn."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 10",
          "kind": "mcq",
          "prompt": "In لَوْ كَانَ عِنْدَهَا مَاءٌ لَغَسَلَتْ يَدَهَا الْوَسِخَةَ, what is اَلْوَسِخَةَ?",
          "options": [
            "a بَدَلٌ",
            "a حَالٌ",
            "the مَفْعُوْلٌ بِهِ",
            "a نَعْتٌ of يَدَهَا"
          ],
          "correct": 3,
          "explanation": "يَدَهَا is definite by إِضَافَة, so its نَعْت carries the ال."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 4",
          "kind": "mcq",
          "prompt": "In لَوْلَا الضُّيُوْفُ لَمَا أَقَمْنَا فِي الْبَيْتِ, what does the sentence mean?",
          "options": [
            "Were it not for the guests, we would not have stayed in the house",
            "If the guests come, we will stay",
            "Could you kindly stay with the guests",
            "The guests stayed in the house"
          ],
          "correct": 0,
          "explanation": "لَوْلَا with a negated جَوَاب."
        },
        {
          "title": "Book Exercise 8 (Unit 6, Part 3), item 9",
          "kind": "mcq",
          "prompt": "In لَوْلَا رَمَضَانُ لَمَا تَلَا الْقُرْآنَ كَثِيْرٌ مِنَ النَّاسِ, what is كَثِيْرٌ?",
          "options": [
            "a نَعْتٌ",
            "the فَاعِلٌ of تَلَا",
            "the مَفْعُوْلٌ بِهِ",
            "the مُبْتَدَأ after لَوْلَا"
          ],
          "correct": 1,
          "explanation": "The object الْقُرْآنَ has been placed before the doer."
        },
        {
          "title": "Book Exercise 7 (Unit 6, Part 3), item 11",
          "kind": "mcq",
          "prompt": "In لَوْ كَانَ عِنْدِيْ مَالٌ لَذَهَبْتُ إِلَى مَكَّةَ لِأَحُجَّ, how many اِسْمٌ مُؤَوَّلٌ units are there?",
          "options": [
            "none",
            "one — لِأَحُجَّ",
            "two",
            "three"
          ],
          "correct": 1,
          "explanation": "لِ with a hidden أَنْ, giving the purpose."
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time\"?",
          "options": [
            "وَقْتٌ",
            "ضَيْفٌ",
            "ضَيَّعَ يُضَيِّعُ",
            "أَقَامَ يُقِيْمُ"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَقْتٌ mean?",
          "options": [
            "time",
            "guest",
            "to waste",
            "to stay, reside"
          ],
          "correct": 0
        },
        {
          "title": "there",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"there\"?",
          "options": [
            "هُنَاكَ",
            "شَيْءٌ",
            "جَلَسَ يَجْلِسُ",
            "دَخَلَ يَدْخُلُ"
          ],
          "correct": 0
        },
        {
          "title": "there",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هُنَاكَ mean?",
          "options": [
            "there",
            "thing",
            "to sit",
            "to enter"
          ],
          "correct": 0
        },
        {
          "title": "open",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"open\"?",
          "options": [
            "مَفْتُوْحٌ",
            "ضَيَّعَ يُضَيِّعُ",
            "أَقَامَ يُقِيْمُ",
            "وَقْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "open",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَفْتُوْحٌ mean?",
          "options": [
            "open",
            "to waste",
            "to stay, reside",
            "time"
          ],
          "correct": 0
        },
        {
          "title": "guest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"guest\"?",
          "options": [
            "ضَيْفٌ",
            "جَلَسَ يَجْلِسُ",
            "دَخَلَ يَدْخُلُ",
            "هُنَاكَ"
          ],
          "correct": 0
        },
        {
          "title": "guest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَيْفٌ mean?",
          "options": [
            "guest",
            "to sit",
            "to enter",
            "there"
          ],
          "correct": 0
        },
        {
          "title": "thing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"thing\"?",
          "options": [
            "شَيْءٌ",
            "أَقَامَ يُقِيْمُ",
            "وَقْتٌ",
            "مَفْتُوْحٌ"
          ],
          "correct": 0
        },
        {
          "title": "thing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَيْءٌ mean?",
          "options": [
            "thing",
            "to stay, reside",
            "time",
            "open"
          ],
          "correct": 0
        },
        {
          "title": "to waste",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to waste\"?",
          "options": [
            "ضَيَّعَ يُضَيِّعُ",
            "دَخَلَ يَدْخُلُ",
            "هُنَاكَ",
            "ضَيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to waste",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَيَّعَ يُضَيِّعُ mean?",
          "options": [
            "to waste",
            "to enter",
            "there",
            "guest"
          ],
          "correct": 0
        },
        {
          "title": "to waste (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَيَّعَ يُضَيِّعُ?",
          "options": [
            "تَضْيِيْعًا",
            "إِقَامَةً",
            "جُلُوْسًا",
            "دُخُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to sit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sit\"?",
          "options": [
            "جَلَسَ يَجْلِسُ",
            "وَقْتٌ",
            "مَفْتُوْحٌ",
            "شَيْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to sit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَلَسَ يَجْلِسُ mean?",
          "options": [
            "to sit",
            "time",
            "open",
            "thing"
          ],
          "correct": 0
        },
        {
          "title": "to sit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَلَسَ يَجْلِسُ?",
          "options": [
            "جُلُوْسًا",
            "دُخُوْلًا",
            "إِقَامَةً",
            "تَضْيِيْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to stay, reside",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to stay, reside\"?",
          "options": [
            "أَقَامَ يُقِيْمُ",
            "هُنَاكَ",
            "ضَيْفٌ",
            "ضَيَّعَ يُضَيِّعُ"
          ],
          "correct": 0
        },
        {
          "title": "to stay, reside",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَامَ يُقِيْمُ mean?",
          "options": [
            "to stay, reside",
            "there",
            "guest",
            "to waste"
          ],
          "correct": 0
        },
        {
          "title": "to stay, reside (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَقَامَ يُقِيْمُ?",
          "options": [
            "إِقَامَةً",
            "تَضْيِيْعًا",
            "دُخُوْلًا",
            "جُلُوْسًا"
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
            "مَفْتُوْحٌ",
            "شَيْءٌ",
            "جَلَسَ يَجْلِسُ"
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
            "open",
            "thing",
            "to sit"
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
            "جُلُوْسًا",
            "تَضْيِيْعًا",
            "إِقَامَةً"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

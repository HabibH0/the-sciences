// Module 16 — اَلِاسْمُ الْمُؤَوَّلُ built with a حَرْفٌ مَوْصُوْلٌ: مُبْتَدَأٌ,
// خَبَرٌ, فَاعِلٌ and مَفْعُوْلٌ بِهِ (From the Start, Unit 5, Section 3,
// Introduction + Parts 1-4, pp. 498-515)
//
// Converted from content-fstu-new/unit5-3-lesson1..7.js. Same conversion
// pattern as module-04..15.js (see module-04.js header comment). l1 is the
// densest lesson in the unit (8 sections/concepts) since it is the
// section's Introduction, covering all four حُرُوْفٌ مَوْصُوْلَةٌ at once;
// l3 is the shortest (a single concept), mirroring how briefly the source
// book treats the خَبَرٌ slot compared with the others. Concept exercises
// are freshly authored per concept, one per sections[] entry.

export default {
  "id": "f-ism-muawwal-mubtada-fail",
  "title": "الِاسْمُ الْمُؤَوَّلُ",
  "heading": "اَلْوَحْدَةُ الْخَامِسَةُ",
  "subheading": "اَلْقِسْمُ الثَّالِثُ",
  "blurb": "اَلِاسْمُ الْمُؤَوَّل: built from a حَرْف مَوْصُوْل, and the first four slots it can fill.",
  "lessons": [
    {
      "id": "l1",
      "title": "الحروف الموصولة",
      "subtitle": "Introduction: حَرْفٌ مَوْصُوْلٌ with اِسْمٌ مُؤَوَّلٌ",
      "concepts": [
        {
          "heading": "Introduction: Nested Sentences",
          "lines": [
            {
              "html": "The following table summarises the different types of nested sentences.",
              "list": false
            },
            {
              "table": {
                "title": "Nested Sentences",
                "headers": [
                  "Directly without a مَوْصُوْلٌ",
                  "With a مَوْصُوْلٌ"
                ],
                "rows": [
                  [
                    "جُمْلَةٌ صُغْرَى",
                    "اِسْمٌ مُؤَوَّلٌ"
                  ],
                  [
                    "—",
                    "with an اِسْمٌ مَوْصُوْلٌ or with a حَرْفٌ مَوْصُوْلٌ"
                  ]
                ]
              }
            },
            {
              "html": "We have already discussed directly nested sentences and nested sentences with an اِسْمٌ مَوْصُوْلٌ. In this section we will discuss nested sentences with a حَرْفٌ مَوْصُوْلٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does an indirectly nested sentence built with a حَرْفٌ مَوْصُوْلٌ (اِسْمٌ مُؤَوَّلٌ) differ from one built with an اِسْمٌ مَوْصُوْلٌ, in terms of what precedes the صِلَةٌ؟",
            "kind": "mcq",
            "options": [
              "A حَرْفٌ (particle) precedes it instead of an اِسْمٌ (noun)",
              "There is no difference at all",
              "A حَرْفٌ مَوْصُوْلٌ never takes a صِلَةٌ",
              "An اِسْمٌ مُؤَوَّلٌ can never fill a sentence slot"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The حُرُوْفٌ مَوْصُوْلَةٌ",
          "lines": [
            {
              "html": "There are two types of حَرْفٌ مَوْصُوْلٌ: 1. Unrestricted, 2. Restricted. There are three unrestricted حَرْفٌ مَوْصُوْلٌ that can be used universally in any slot: أَنَّ، مَا، أَنْ. There is one restricted حَرْفٌ مَوْصُوْلٌ that can only be used in a specific slot: كَيْ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How many حُرُوْفٌ مَوْصُوْلَةٌ are there, and how are they split؟",
            "kind": "mcq",
            "options": [
              "Three unrestricted (أَنَّ، مَا، أَنْ) usable in any slot, and one restricted (كَيْ) usable only in one slot",
              "Four, all usable in any slot",
              "Two unrestricted and two restricted",
              "Only one, أَنَّ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The حَرْفٌ مَوْصُوْلٌ of أَنَّ",
          "lines": [
            {
              "html": "أَنَّ is used when the sentence after it is in the indicative mood: it comprises of statements conveying facts, descriptions, scheduled events, etc.",
              "list": false
            },
            {
              "html": "اَلْحَقُّ أَنَّكَ لَا تَكْذِبُ — The truth is that you do not lie.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In the above example, the sentence after اَلْحَقُّ is factual, so it is preceded by أَنَّ. Grammar: أَنَّ is a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ which is followed by its اِسْمٌ and خَبَرٌ. Together, these become one of the slots of the main sentence.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَنَّكَ لَا تَكْذِبُ",
                "translation": "that you do not lie",
                "cells": [
                  "أَنَّ",
                  "كَ",
                  "لَا تَكْذِبُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "…"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
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
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "اِسْمُ أَنَّ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "خَبَرُ أَنَّ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Translation: the اِسْمٌ مُؤَوَّلٌ with أَنَّ is translated as the word 'that'.",
              "list": false
            },
            {
              "html": "أَنَّكَ لَا تَكْذِبُ — that you do not lie",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "When is أَنَّ used to build an اِسْمٌ مُؤَوَّلٌ, and what follows it؟",
            "kind": "mcq",
            "options": [
              "When the sentence is in the indicative mood (facts, descriptions); it is followed by its own اِسْمٌ and خَبَرٌ",
              "When the sentence is in the subjunctive mood; it is followed by a مُضَارِعٌ verb",
              "Only with quoted speech",
              "Only in the مَفْعُوْلٌ لَهُ slot"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The حَرْفٌ مَوْصُوْلٌ of مَا",
          "lines": [
            {
              "html": "مَا is also used when the sentence after it is in the indicative mood. Grammar: the حَرْفٌ مَوْصُوْلٌ of مَا is غَيْرُ عَامِلٍ. Along with its صِلَةٌ, it becomes one of the slots of a sentence.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَا تَصْدُقُ",
                "translation": "that you speak the truth / your speaking the truth",
                "cells": [
                  "مَا",
                  "تَصْدُقُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "…"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "أَنَّ is followed by an اِسْمٌ and خَبَرٌ, whilst مَا is followed by a verb.",
              "list": false
            },
            {
              "html": "Translation: the اِسْمٌ مُؤَوَّلٌ with مَا can be translated in two different ways: 1. By adding 'that' before the verb. The subject is mentioned before the verb: 'that you speak the truth'. 2. As a gerund (adding -ing after the verb). The subject can be mentioned before the gerund in a possessive structure, or omitted altogether: 'your speaking the truth / speaking the truth'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What follows the حَرْفٌ مَوْصُوْلٌ مَا, and how does that differ from what follows أَنَّ؟",
            "kind": "mcq",
            "options": [
              "مَا is followed by a verb, whereas أَنَّ is followed by an اِسْمٌ and خَبَرٌ",
              "مَا is followed by an اِسْمٌ and خَبَرٌ, exactly like أَنَّ",
              "مَا is followed by nothing at all",
              "مَا is followed by another مَا"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Differentiating between مَا as an اِسْمٌ مَوْصُوْلٌ and as a حَرْفٌ مَوْصُوْلٌ",
          "lines": [
            {
              "html": "The particle مَا can be used as either اِسْمٌ مَوْصُوْلٌ or حَرْفٌ مَوْصُوْلٌ. When مَا is used as an اِسْمٌ مَوْصُوْلٌ, it will have a noun meaning: … مَا تَكْتُبُ = 'what you write'. When مَا is used as a حَرْفٌ مَوْصُوْلٌ, it will have a verb meaning: … مَا تَكْتُبُ = 'that you write'. In many cases, مَا can be interpreted as both. The following table explains how to differentiate between the two structures based on the عَائِدٌ.",
              "list": false
            },
            {
              "table": {
                "title": "مَا مَوْصُوْلَةٌ",
                "headers": [
                  "صِلَةٌ contains an عَائِدٌ",
                  "صِلَةٌ does not contain an عَائِدٌ but a slot is available for it",
                  "صِلَةٌ does not contain an عَائِدٌ and no slot is available for it"
                ],
                "rows": [
                  [
                    "اِسْمٌ مَوْصُوْلٌ",
                    "اِسْمٌ مَوْصُوْلٌ or حَرْفٌ مَوْصُوْلٌ",
                    "حَرْفٌ مَوْصُوْلٌ"
                  ],
                  [
                    "… مَا كَتَبْتَهُ — what you wrote",
                    "… مَا كَتَبْتَ (هُ) — what you wrote / … مَا كَتَبْتَ — that you wrote",
                    "… مَا كَتَبْتَ جَوَابًا — that you wrote an answer"
                  ]
                ]
              }
            },
            {
              "html": "In Example 2, a ضَمِيْرٌ is assumed to be hidden, therefore مَا is an اِسْمٌ مَوْصُوْلٌ. In Example 3, there is no ضَمِيْرٌ assumed to be hidden, therefore مَا is a حَرْفٌ مَوْصُوْلٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How do you tell whether مَا is functioning as an اِسْمٌ مَوْصُوْلٌ or a حَرْفٌ مَوْصُوْلٌ؟",
            "kind": "mcq",
            "options": [
              "By whether the صِلَةٌ contains an عَائِدٌ (or has an available slot for one) — if not, مَا is a حَرْفٌ مَوْصُوْلٌ",
              "By the tense of the following verb only",
              "اِسْمٌ مَوْصُوْلٌ and حَرْفٌ مَوْصُوْلٌ readings are always identical in meaning",
              "By whether مَا comes at the start or end of the sentence"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The حَرْفٌ مَوْصُوْلٌ of أَنْ",
          "lines": [
            {
              "html": "أَنْ is used when the sentence after it is in the subjunctive mood: its contents are subjective, conveying recommendations, doubts, wishes, etc., i.e. things which are possible, but not certain.",
              "list": false
            },
            {
              "html": "أَرْجُوْ أَنْ تَصْدُقَ — I hope that you speak the truth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Grammar: the particle أَنْ is عَامِلٌ: it causes the following فِعْلٌ مُضَارِعٌ to become مَنْصُوْبٌ. The particle أَنْ and its صِلَةٌ become one of the slots of the main sentence.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَنْ تَصْدُقَ",
                "translation": "that you speak the truth",
                "cells": [
                  "أَنْ",
                  "تَصْدُقَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "…"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Translation: the اِسْمٌ مُؤَوَّلٌ with أَنْ can be translated in three different ways: 1. Adding 'that' before the subject and verb: 'that you speak the truth'. 2. As a gerund (adding -ing after the verb). The subject of this can be mentioned before the gerund in a possessive structure, or omitted altogether: 'speaking the truth / your speaking the truth'. 3. As an infinitive (adding 'to' before the verb). The subject of this can be mentioned if it is preceded by the word 'for', or it can be omitted altogether: 'to speak the truth / for you to speak the truth'.",
              "list": false
            },
            {
              "html": "Negating the صِلَةٌ after أَنْ: the صِلَةٌ of أَنْ is made negative by adding the حَرْفُ نَفْيٍ of لَا. The أَنْ and لَا are written and pronounced as a single word: أَنْ لَا ← أَلَّا. However, in tarkib, both are written separately.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَلَّا تَكْذِبَ",
                "translation": "not lying / your not lying / not to lie / for you not to lie / that you do not lie",
                "cells": [
                  "أَنْ",
                  "لَا",
                  "تَكْذِبَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "…"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "حَرْفُ نَفْيٍ"
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
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What mood does أَنْ require, and what grammatical effect does it have؟",
            "kind": "mcq",
            "options": [
              "The subjunctive mood; it is عَامِلٌ and makes the following فِعْلٌ مُضَارِعٌ مَنْصُوْبٌ",
              "The indicative mood; it has no grammatical effect",
              "The imperative mood; it makes the following verb مَجْزُوْمٌ",
              "It has no required mood or effect"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The Restricted حَرْفٌ مَوْصُوْلٌ of كَيْ",
          "lines": [
            {
              "html": "كَيْ is also used when the sentence after it is in the subjunctive mood. The particle كَيْ and its صِلَةٌ become the مَفْعُوْلٌ لَهُ. Grammar: the particle كَيْ is عَامِلٌ: it causes the following فِعْلٌ مُضَارِعٌ to become مَنْصُوْبٌ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "كَيْ يَهْدُوا النَّاسَ",
                "translation": "so that they guide the people / to guide the people",
                "cells": [
                  "كَيْ",
                  "يَهْدُوا",
                  "النَّاسَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "مَفْعُوْلٌ لَهُ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُمْ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
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
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Translation of كَيْ: كَيْ and its صِلَةٌ can be translated in two ways: 1. By adding 'so that' before the subject, verb and other parts of the sentence: 'so that they guide the people'. 2. As an infinitive (adding 'to' before the verb) without the subject: 'to guide the people'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is special about the حَرْفٌ مَوْصُوْلٌ كَيْ compared with أَنَّ، مَا and أَنْ؟",
            "kind": "mcq",
            "options": [
              "It is restricted — its اِسْمٌ مُؤَوَّلٌ can only occur as the مَفْعُوْلٌ لَهُ",
              "It is the only one that is غَيْرُ عَامِلٍ",
              "It is the only one that can be an اِسْمٌ مَوْصُوْلٌ too",
              "It never takes a صِلَةٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Uses of an اِسْمٌ مُؤَوَّلٌ",
          "lines": [
            {
              "html": "An اِسْمٌ مُؤَوَّلٌ occurs in a جُمْلَةٌ اسْمِيَّةٌ, a جُمْلَةٌ فِعْلِيَّةٌ or in a phrase. In a جُمْلَةٌ اسْمِيَّةٌ, an اِسْمٌ مُؤَوَّلٌ occurs as: 1. مُبْتَدَأٌ, 2. خَبَرٌ. In a جُمْلَةٌ فِعْلِيَّةٌ, an اِسْمٌ مُؤَوَّلٌ occurs as: 1. فَاعِلٌ, 2. مَفْعُوْلٌ بِهِ or مَفْعُوْلٌ بِهِ ثَانٍ, 3. مَفْعُوْلٌ فِيْهِ, 4. مَفْعُوْلٌ لَهُ, 5. مَفْعُوْلٌ مُطْلَقٌ, 6. مُسْتَثْنًى. In a phrase, an اِسْمٌ مُؤَوَّلٌ occurs as: 1. مَعْطُوْفٌ, 2. مُضَافٌ إِلَيْهِ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In a جُمْلَةٌ اسْمِيَّةٌ, which two slots can an اِسْمٌ مُؤَوَّلٌ occur in؟",
            "kind": "mcq",
            "options": [
              "مُبْتَدَأٌ and خَبَرٌ",
              "فَاعِلٌ and مَفْعُوْلٌ بِهِ",
              "مُضَافٌ and مُضَافٌ إِلَيْهِ",
              "حَالٌ and تَمْيِيْزٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The حُرُوْفٌ مَوْصُوْلَةٌ",
        "rows": [
          {
            "label": "أَنَّ",
            "arabic": "Indicative Mood",
            "meaning": "followed by an اِسْمٌ and خَبَرٌ — عَامِلٌ"
          },
          {
            "label": "مَا",
            "arabic": "Indicative Mood",
            "meaning": "followed by a جُمْلَةٌ فِعْلِيَّةٌ — غَيْرُ عَامِلٍ"
          },
          {
            "label": "أَنْ",
            "arabic": "Subjunctive Mood",
            "meaning": "followed by a مُضَارِعٌ — عَامِلٌ"
          },
          {
            "label": "كَيْ",
            "arabic": "Subjunctive Mood",
            "meaning": "followed by a مُضَارِعٌ — عَامِلٌ; restricted to the مَفْعُوْلٌ لَهُ slot"
          }
        ]
      },
      "quiz": [
        {
          "q": "Which حُرُوْفٌ مَوْصُوْلَةٌ are used when the following sentence is in the indicative mood?",
          "options": [
            "أَنْ and كَيْ",
            "أَنْ and مَا",
            "أَنَّ and مَا",
            "أَنَّ and كَيْ"
          ],
          "correct": 2,
          "explanation": "أَنَّ and مَا take the indicative mood (facts, descriptions); أَنْ and كَيْ take the subjunctive mood."
        },
        {
          "q": "What follows the حَرْفٌ مَوْصُوْلٌ of أَنَّ?",
          "options": [
            "Its اِسْمٌ and خَبَرٌ — أَنَّ is a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "A فِعْلٌ مَاضٍ only",
            "A مُضَارِعٌ which becomes مَنْصُوْبٌ",
            "A جَارٌّ and مَجْرُوْرٌ"
          ],
          "correct": 0,
          "explanation": "أَنَّ is followed by an اِسْمٌ and خَبَرٌ, whilst مَا is followed by a verb."
        },
        {
          "q": "What effect does the particle أَنْ have on the following فِعْلٌ مُضَارِعٌ?",
          "options": [
            "No effect — it is غَيْرُ عَامِلٍ",
            "It makes it مَجْزُوْمٌ",
            "It makes it مَرْفُوْعٌ",
            "It makes it مَنْصُوْبٌ"
          ],
          "correct": 3,
          "explanation": "أَنْ is عَامِلٌ: it causes the following فِعْلٌ مُضَارِعٌ to become مَنْصُوْبٌ."
        },
        {
          "q": "The restricted حَرْفٌ مَوْصُوْلٌ of كَيْ can only be used in which slot?",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ لَهُ",
            "فَاعِلٌ",
            "مُبْتَدَأٌ"
          ],
          "correct": 1,
          "explanation": "كَيْ and its صِلَةٌ become the مَفْعُوْلٌ لَهُ of the main sentence."
        },
        {
          "q": "In … مَا كَتَبْتَ جَوَابًا, why must مَا be a حَرْفٌ مَوْصُوْلٌ?",
          "options": [
            "Because the صِلَةٌ contains an عَائِدٌ",
            "Because مَا always has a noun meaning",
            "Because the صِلَةٌ does not contain an عَائِدٌ and no slot is available for it — جَوَابًا fills the slot",
            "Because the verb is مَنْصُوْبٌ"
          ],
          "correct": 2,
          "explanation": "When no عَائِدٌ exists and no slot is available for one, مَا can only be a حَرْفٌ مَوْصُوْلٌ: 'that you wrote an answer'."
        },
        {
          "q": "How are أَنْ and the حَرْفُ نَفْيٍ of لَا written and pronounced?",
          "options": [
            "Always separately: أَنْ لَا",
            "As a single word: أَلَّا — though in tarkib both are written separately",
            "As إِلَّا",
            "As لَنْ"
          ],
          "correct": 1,
          "explanation": "أَنْ لَا ← أَلَّا. In tarkib, أَنْ is labelled حَرْفٌ مَوْصُوْلٌ and لَا is labelled حَرْفُ نَفْيٍ."
        }
      ],
      "bank": [
        {
          "title": "أَنَّ الْعِلْمَ يَنْفَعُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Introduction)",
          "sentence": "أَنَّ الْعِلْمَ يَنْفَعُ",
          "translation": "that knowledge benefits",
          "cells": [
            "أَنَّ",
            "الْعِلْمَ",
            "يَنْفَعُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "اِسْمُ كَانَ",
            "مُبْتَدَأٌ",
            "حَرْفُ نَفْيٍ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "أَنَّهُمْ لَا يَغْتَابُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Introduction)",
          "sentence": "أَنَّهُمْ لَا يَغْتَابُوْنَ",
          "translation": "that they do not backbite",
          "cells": [
            "أَنَّهُمْ",
            "لَا",
            "يَغْتَابُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُمْ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "اِسْمُ أَنَّ",
            "حَرْفُ حَصْرٍ",
            "فِعْلٌ نَاقِصٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "مَا تَبْتَسِمُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Introduction)",
          "sentence": "مَا تَبْتَسِمُ",
          "translation": "that you smile / your smiling",
          "cells": [
            "مَا",
            "تَبْتَسِمُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "اِسْمٌ مَوْصُوْلٌ",
            "حَرْفُ نَفْيٍ",
            "خَبَرٌ",
            "عَائِدٌ"
          ]
        },
        {
          "title": "مَا عَطِشْنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Introduction)",
          "sentence": "مَا عَطِشْنَا",
          "translation": "that we became thirsty / our becoming thirsty",
          "cells": [
            "مَا",
            "عَطِشْنَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                }
              ]
            }
          ],
          "distractors": [
            "اِسْمٌ مَوْصُوْلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَرْفُ عَطْفٍ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "أَلَّا يَغْضَبْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Introduction)",
          "sentence": "أَلَّا يَغْضَبْنَ",
          "translation": "that they (f) do not become angry / their not becoming angry",
          "cells": [
            "أَنْ",
            "لَا",
            "يَغْضَبْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُنَّ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَا النَّافِيَةُ",
            "اِسْمٌ مَوْصُوْلٌ",
            "خَبَرُ أَنَّ",
            "مَفْعُوْلٌ لَهُ"
          ]
        },
        {
          "title": "أَنْ تَفُوْقِيْ أَقْرَانَكِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 3, Introduction)",
          "sentence": "أَنْ تَفُوْقِيْ أَقْرَانَكِ",
          "translation": "that you (f) surpass your peers / to surpass your peers",
          "cells": [
            "أَنْ",
            "تَفُوْقِيْ",
            "أَقْرَانَكِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ جَرٍّ",
            "اِسْمُ أَنَّ",
            "مُسْتَثْنًى",
            "نَعْتٌ"
          ]
        },
        {
          "title": "كَيْ تَشْبَعَ الْبَنَاتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Introduction)",
          "sentence": "كَيْ تَشْبَعَ الْبَنَاتُ",
          "translation": "so that the girls eat their fill",
          "cells": [
            "كَيْ",
            "تَشْبَعَ",
            "الْبَنَاتُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
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
            "حَرْفُ اسْتِثْنَاءٍ",
            "مَفْعُوْلٌ بِهِ",
            "اِسْمٌ مَوْصُوْلٌ",
            "حَرْفُ نَفْيٍ"
          ]
        },
        {
          "title": "كَيْ لَا يَجُوْعَ الْأَوْلَادُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 3, Introduction)",
          "sentence": "كَيْ لَا يَجُوْعَ الْأَوْلَادُ",
          "translation": "so that the children do not go hungry",
          "cells": [
            "كَيْ",
            "لَا",
            "يَجُوْعَ",
            "الْأَوْلَادُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ"
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
                }
              ]
            }
          ],
          "distractors": [
            "مَا النَّافِيَةُ",
            "مَفْعُوْلٌ بِهِ",
            "اِسْمُ كَانَ",
            "حَرْفُ حَصْرٍ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "… أَنَّنَا لَا نَجْزَعُ translates as…",
          "options": [
            "that we are not impatient",
            "so that we are not impatient",
            "as long as we are not impatient",
            "not to be impatient"
          ],
          "correct": 0,
          "explanation": "The اِسْمٌ مُؤَوَّلٌ with أَنَّ is translated with the word 'that': 'that we are not impatient'."
        },
        {
          "title": "Book Exercise 3 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "In … مَا وَضَعْتَهُ, the مَوْصُوْلٌ of مَا is…",
          "options": [
            "an اِسْمٌ مَوْصُوْلٌ — the صِلَةٌ contains the عَائِدٌ of هُ",
            "a حَرْفٌ مَوْصُوْلٌ — no عَائِدٌ is possible",
            "a حَرْفُ نَفْيٍ",
            "a حَرْفُ حَصْرٍ"
          ],
          "correct": 0,
          "explanation": "When the صِلَةٌ contains an عَائِدٌ, the مَوْصُوْلٌ is an اِسْمٌ مَوْصُوْلٌ: 'what you put down'."
        },
        {
          "title": "Book Exercise 3 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "In … مَا نَسِيْتُ الْآخِرَةَ, the مَوْصُوْلٌ of مَا is…",
          "options": [
            "an اِسْمٌ مَوْصُوْلٌ — الْآخِرَةَ is the عَائِدٌ",
            "either اِسْمٌ or حَرْفٌ مَوْصُوْلٌ",
            "a حَرْفٌ مَوْصُوْلٌ — the مَفْعُوْلٌ بِهِ slot is filled by الْآخِرَةَ, so no slot is available for an عَائِدٌ",
            "a مَا النَّافِيَةُ"
          ],
          "correct": 2,
          "explanation": "No عَائِدٌ exists and no slot is available for one, so مَا is a حَرْفٌ مَوْصُوْلٌ: 'that I forgot the hereafter'."
        },
        {
          "title": "Book Exercise 3 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "In … مَا تَدْرُسُ, the مَوْصُوْلٌ of مَا is…",
          "options": [
            "only an اِسْمٌ مَوْصُوْلٌ",
            "only a حَرْفٌ مَوْصُوْلٌ",
            "a حَرْفُ تَحْقِيْقٍ",
            "either an اِسْمٌ مَوْصُوْلٌ ('what you study', with a hidden عَائِدٌ) or a حَرْفٌ مَوْصُوْلٌ ('that you study')"
          ],
          "correct": 3,
          "explanation": "The صِلَةٌ contains no عَائِدٌ but a slot is available for one, so both interpretations are possible."
        },
        {
          "title": "Book Exercise 4 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "In … أَلَّا يَغْضَبْنَ, which two words have been joined together?",
          "options": [
            "إِنْ + لَا",
            "أَنْ + لَا",
            "أَنَّ + لَا",
            "إِلَى + لَا"
          ],
          "correct": 1,
          "explanation": "The صِلَةٌ of أَنْ is negated with لَا; the two are written and pronounced as one word: أَلَّا."
        },
        {
          "title": "Book Exercise 5 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "In a sentence, which slot do كَيْ and its صِلَةٌ occupy (e.g. … كَيْ يَنْجَحُوا فِي الْاِمْتِحَانِ)?",
          "options": [
            "مَفْعُوْلٌ فِيْهِ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ لَهُ",
            "خَبَرٌ"
          ],
          "correct": 2,
          "explanation": "كَيْ is restricted: it and its صِلَةٌ always become the مَفْعُوْلٌ لَهُ ('so that…')."
        },
        {
          "title": "Book Exercise 4 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "Why does the verb in … أَنْ تَنْظُرَ إِلَى أَبَوَيْكَ end in a فَتْحَةٌ?",
          "options": [
            "It agrees with أَبَوَيْكَ",
            "Every verb after إِلَى is مَنْصُوْبٌ",
            "It is a فِعْلٌ مَاضٍ",
            "أَنْ is عَامِلٌ and makes the following فِعْلٌ مُضَارِعٌ مَنْصُوْبٌ"
          ],
          "correct": 3,
          "explanation": "The particle أَنْ causes the following فِعْلٌ مُضَارِعٌ to become مَنْصُوْبٌ: تَنْظُرَ."
        },
        {
          "title": "Book Exercise 5 (Section 3, Introduction)",
          "kind": "mcq",
          "prompt": "… كَيْ لَا يَجُوْعَ الْأَوْلَادُ translates as…",
          "options": [
            "because the children went hungry",
            "so that the children do not go hungry",
            "that the children are hungry",
            "as long as the children do not go hungry"
          ],
          "correct": 1,
          "explanation": "كَيْ = 'so that'; the لَا negates the صِلَةٌ: 'so that the children do not go hungry'."
        }
      ]
    },
    {
      "id": "l2",
      "title": "الاسم المؤول مبتدأ",
      "subtitle": "Part 1: The مُبْتَدَأٌ and مُبْتَدَأٌ مُؤَخَّرٌ as an اِسْمٌ مُؤَوَّلٌ",
      "concepts": [
        {
          "heading": "The مُبْتَدَأٌ as an اِسْمٌ مُؤَوَّلٌ",
          "lines": [
            {
              "html": "The مُبْتَدَأٌ or مُبْتَدَأٌ مُؤَخَّرٌ can occur as an اِسْمٌ مُؤَوَّلٌ.",
              "list": false
            },
            {
              "html": "أَنْ تَصُوْمُوْا خَيْرٌ — Fasting / To fast / That you fast is better.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَنْ تَصُوْمُوْا خَيْرٌ",
                "translation": "Fasting is better.",
                "cells": [
                  "أَنْ",
                  "تَصُوْمُوْا",
                  "خَيْرٌ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
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
                        "role": "فِعْلٌ وَفَاعِلٌ (و)"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In أَنْ تَصُوْمُوْا خَيْرٌ, what slot does أَنْ تَصُوْمُوْا fill؟",
            "kind": "mcq",
            "options": [
              "The مُبْتَدَأٌ, with خَيْرٌ as the خَبَرٌ",
              "The خَبَرٌ, with خَيْرٌ as the مُبْتَدَأٌ",
              "The فَاعِلٌ",
              "The مَفْعُوْلٌ بِهِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The اِسْمٌ مُؤَوَّلٌ as a مُبْتَدَأٌ مُؤَخَّرٌ with أَنْ",
          "lines": [
            {
              "html": "إِنَّ مِنَ السُّنَّةِ أَنْ تَأْكُلَ بِيَمِيْنِكَ — Eating / To eat / That you eat with your right hand is from the sunnah.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنَّ مِنَ السُّنَّةِ أَنْ تَأْكُلَ بِيَمِيْنِكَ",
                "translation": "It is from the sunnah to eat with your right hand.",
                "cells": [
                  "إِنَّ",
                  "مِنَ",
                  "السُّنَّةِ",
                  "أَنْ",
                  "تَأْكُلَ",
                  "بِيَمِيْنِكَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "خَبَرُ إِنَّ الْمُقَدَّمُ"
                      },
                      {
                        "start": 3,
                        "end": 5,
                        "role": "اِسْمُ إِنَّ الْمُؤَخَّرُ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَجْرُوْرٌ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فِعْلٌ وَفَاعِلٌ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "آلَةٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In إِنَّ مِنَ السُّنَّةِ أَنْ تَأْكُلَ بِيَمِيْنِكَ, what role does the أَنْ clause play؟",
            "kind": "mcq",
            "options": [
              "It is the اِسْمُ إِنَّ الْمُؤَخَّرُ, with مِنَ السُّنَّةِ as the fronted خَبَرُ إِنَّ",
              "It is the خَبَرُ إِنَّ",
              "It is the فَاعِلٌ of a hidden verb",
              "It has no slot in the sentence"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The اِسْمٌ مُؤَوَّلٌ as a مُبْتَدَأٌ مُؤَخَّرٌ with أَنَّ",
          "lines": [
            {
              "html": "مِنْ عَقِيْدَةِ الْمُؤْمِنِيْنَ أَنَّ اللهَ وَاحِدٌ — That Allah is One is a Muslim's belief.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "مِنْ عَقِيْدَةِ الْمُؤْمِنِيْنَ أَنَّ اللهَ وَاحِدٌ",
                "translation": "It is a Muslim's belief that Allah is One.",
                "cells": [
                  "مِنْ",
                  "عَقِيْدَةِ",
                  "الْمُؤْمِنِيْنَ",
                  "أَنَّ",
                  "اللهَ",
                  "وَاحِدٌ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "خَبَرٌ مُقَدَّمٌ"
                      },
                      {
                        "start": 3,
                        "end": 5,
                        "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مُضَافٌ إِلَيْهِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "اِسْمُ أَنَّ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "خَبَرُ أَنَّ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَجْرُوْرٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In مِنْ عَقِيْدَةِ الْمُؤْمِنِيْنَ أَنَّ اللهَ وَاحِدٌ, what is أَنَّ اللهَ وَاحِدٌ؟",
            "kind": "mcq",
            "options": [
              "The مُبْتَدَأٌ مُؤَخَّرٌ, with مِنْ عَقِيْدَةِ الْمُؤْمِنِيْنَ as the خَبَرٌ مُقَدَّمٌ",
              "The خَبَرٌ مُقَدَّمٌ",
              "A مُضَافٌ إِلَيْهِ",
              "A حَالٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Translation",
          "lines": [
            {
              "html": "These can be translated in two ways: 1. Translating the مُبْتَدَأٌ or مُبْتَدَأٌ مُؤَخَّرٌ first, followed by the خَبَرٌ: 'Fasting/To fast/That you fast is better. Eating/To eat/That you eat with your right hand is from the sunnah. That Allah is One is a Muslim's belief.' 2. Placing an anticipatory 'it' before the خَبَرٌ followed by the مُبْتَدَأٌ: 'It is better to fast/that you fast. It is from the sunnah to eat/that you eat with your right hand. It is a Muslim's belief that Allah is one.'",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What are the two ways of translating an اِسْمٌ مُؤَوَّلٌ that is a مُبْتَدَأٌ or مُبْتَدَأٌ مُؤَخَّرٌ؟",
            "kind": "mcq",
            "options": [
              "Translating the مُبْتَدَأٌ first then the خَبَرٌ, or placing an anticipatory 'it' before the خَبَرٌ then the مُبْتَدَأٌ",
              "Only ever translating word for word",
              "Always dropping the مُبْتَدَأٌ entirely",
              "Always adding 'that' and nothing else"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Notes: حُرُوْفٌ جَارَّةٌ within the خَبَرٌ مُقَدَّمٌ",
          "lines": [
            {
              "html": "Different حُرُوْفٌ جَارَّةٌ can occur within the خَبَرٌ مُقَدَّمٌ of an اِسْمٌ مُؤَوَّلٌ. Some have their own unique translations. 1. عَلَى: this is translated as 'responsibility', 'duty', etc.",
              "list": false
            },
            {
              "html": "عَلَيْكَ أَنْ تَخْدِمَ وَالِدَيْكَ — It is your duty to serve your parents.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. لِ: this is translated as: a) 'Right', 'allowed', 'can', etc. if it is preceded by an affirmative sentence.",
              "list": false
            },
            {
              "html": "لَكَ أَنْ تَجْلِسَ هُنَا — You can sit here.",
              "list": true,
              "bullet": true
            },
            {
              "html": "b) 'Has no right to', 'should not', or 'it does not befit' if it is preceded by a negative sentence.",
              "list": false
            },
            {
              "html": "لَيْسَ لَكَ أَنْ تَجْلِسَ هُنَا — You are not allowed to sit here.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "How is the حَرْفُ جَرٍّ لِ rendered within a خَبَرٌ مُقَدَّمٌ when it follows a NEGATIVE sentence, as in لَيْسَ لَكَ أَنْ تَجْلِسَ هُنَا؟",
            "kind": "mcq",
            "options": [
              "'Has no right to' / 'should not' / 'it does not befit'",
              "'Right' / 'allowed' / 'can'",
              "'Responsibility' / 'duty'",
              "It is simply left untranslated"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اِسْمٌ مُؤَوَّلٌ as مُبْتَدَأٌ / مُبْتَدَأٌ مُؤَخَّرٌ",
        "rows": [
          {
            "label": "مُبْتَدَأٌ",
            "arabic": "أَنْ تَصُوْمُوْا خَيْرٌ",
            "meaning": "Fasting / To fast / That you fast is better"
          },
          {
            "label": "مُبْتَدَأٌ مُؤَخَّرٌ with أَنْ",
            "arabic": "إِنَّ مِنَ السُّنَّةِ أَنْ تَأْكُلَ بِيَمِيْنِكَ",
            "meaning": "after a خَبَرٌ مُقَدَّمٌ"
          },
          {
            "label": "مُبْتَدَأٌ مُؤَخَّرٌ with أَنَّ",
            "arabic": "مِنْ عَقِيْدَةِ الْمُؤْمِنِيْنَ أَنَّ اللهَ وَاحِدٌ",
            "meaning": "That Allah is One is a Muslim's belief"
          },
          {
            "label": "عَلَى / لِ",
            "arabic": "duty / right",
            "meaning": "عَلَيْكَ أَنْ = it is your duty to; لَكَ أَنْ = you can; لَيْسَ لَكَ أَنْ = you have no right to"
          }
        ]
      },
      "quiz": [
        {
          "q": "In أَنْ تَصُوْمُوْا خَيْرٌ, which slot does the اِسْمٌ مُؤَوَّلٌ occupy?",
          "options": [
            "خَبَرٌ",
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "أَنْ تَصُوْمُوْا is the مُبْتَدَأٌ; خَيْرٌ is its خَبَرٌ: 'Fasting is better.'"
        },
        {
          "q": "What are the two ways of translating a sentence whose مُبْتَدَأٌ is an اِسْمٌ مُؤَوَّلٌ?",
          "options": [
            "Translating the مُبْتَدَأٌ first, or placing an anticipatory 'it' before the خَبَرٌ",
            "Past tense or future tense",
            "As a question or as a statement",
            "Only one translation is possible"
          ],
          "correct": 0,
          "explanation": "'That you fast is better' or 'It is better that you fast.'"
        },
        {
          "q": "In عَلَيْكَ أَنْ تَخْدِمَ وَالِدَيْكَ, how is عَلَى translated?",
          "options": [
            "on top of",
            "against",
            "as 'duty/responsibility': 'It is your duty to serve your parents'",
            "as 'can'"
          ],
          "correct": 2,
          "explanation": "The جَارٌّ of عَلَى within the خَبَرٌ مُقَدَّمٌ gives the meaning of duty or responsibility."
        },
        {
          "q": "When does لِ give the meaning of 'has no right to / should not'?",
          "options": [
            "When it is preceded by an affirmative sentence",
            "When it is followed by أَنَّ",
            "Always",
            "When it is preceded by a negative sentence"
          ],
          "correct": 3,
          "explanation": "لَيْسَ لَكَ أَنْ تَجْلِسَ هُنَا = 'You are not allowed to sit here.' After an affirmative sentence لِ = 'right, allowed, can'."
        },
        {
          "q": "In إِنَّ مِنَ السُّنَّةِ أَنْ تَأْكُلَ بِيَمِيْنِكَ, what is مِنَ السُّنَّةِ?",
          "options": [
            "اِسْمُ إِنَّ الْمُؤَخَّرُ",
            "مُبْتَدَأٌ",
            "خَبَرُ إِنَّ الْمُقَدَّمُ",
            "صِلَةٌ"
          ],
          "correct": 2,
          "explanation": "The خَبَرٌ of إِنَّ has been brought forward; the اِسْمٌ مُؤَوَّلٌ is the اِسْمُ إِنَّ الْمُؤَخَّرُ."
        }
      ],
      "bank": [
        {
          "title": "مِنَ الْكَبَائِرِ أَنْ تُشْرِكَ بِاللهِ شَيْئًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 1)",
          "sentence": "مِنَ الْكَبَائِرِ أَنْ تُشْرِكَ بِاللهِ شَيْئًا",
          "translation": "It is from the major sins to associate anything with Allah.",
          "cells": [
            "مِنَ",
            "الْكَبَائِرِ",
            "أَنْ",
            "تُشْرِكَ",
            "بِاللهِ",
            "شَيْئًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَارٌّ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَجْرُوْرٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرُ إِنَّ الْمُقَدَّمُ",
            "مُبْتَدَأٌ",
            "مُضَافٌ إِلَيْهِ",
            "اِسْمُ أَنَّ"
          ]
        },
        {
          "title": "إِنَّ مِنَ الْعِلْمِ أَنْ تَقُوْلَ لَا أَعْلَمُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 1)",
          "sentence": "إِنَّ مِنَ الْعِلْمِ أَنْ تَقُوْلَ لَا أَعْلَمُ",
          "translation": "Indeed it is from knowledge to say 'I do not know'.",
          "cells": [
            "إِنَّ",
            "مِنَ",
            "الْعِلْمِ",
            "أَنْ",
            "تَقُوْلَ",
            "لَا أَعْلَمُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرُ إِنَّ الْمُقَدَّمُ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "اِسْمُ إِنَّ الْمُؤَخَّرُ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَارٌّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَجْرُوْرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "اِسْمُ إِنَّ",
            "خَبَرٌ مُقَدَّمٌ",
            "فِعْلٌ نَاقِصٌ",
            "مُبْتَدَأٌ مُؤَخَّرٌ"
          ]
        },
        {
          "title": "إِنَّ مِنَ الْإِيْمَانِ أَنْ تُحِبَّ الصَّحَابَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 1)",
          "sentence": "إِنَّ مِنَ الْإِيْمَانِ أَنْ تُحِبَّ الصَّحَابَةَ",
          "translation": "Indeed it is from faith to love the Sahabah.",
          "cells": [
            "إِنَّ",
            "مِنَ",
            "الْإِيْمَانِ",
            "أَنْ",
            "تُحِبَّ",
            "الصَّحَابَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرُ إِنَّ الْمُقَدَّمُ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "اِسْمُ إِنَّ الْمُؤَخَّرُ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَارٌّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَجْرُوْرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "اِسْمُ أَنَّ",
            "حَرْفُ نَفْيٍ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "عَلَيْكَ أَنْ تَجْتَنِبَ مَا حَرَّمَ اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 1)",
          "sentence": "عَلَيْكَ أَنْ تَجْتَنِبَ مَا حَرَّمَ اللهُ",
          "translation": "It is your duty to avoid what Allah has forbidden.",
          "cells": [
            "عَلَيْكَ",
            "أَنْ",
            "تَجْتَنِبَ",
            "مَا",
            "حَرَّمَ",
            "اللهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 5,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَارٌّ - مَجْرُوْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرُ إِنَّ الْمُقَدَّمُ",
            "مَفْعُوْلٌ فِيْهِ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "لَكَ أَنْ تَجْلِسَ هُنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Part 1 teaching text",
          "sentence": "لَكَ أَنْ تَجْلِسَ هُنَا",
          "translation": "You can sit here.",
          "cells": [
            "لَكَ",
            "أَنْ",
            "تَجْلِسَ",
            "هُنَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَارٌّ - مَجْرُوْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            "مُبْتَدَأٌ",
            "حَالٌ",
            "مَفْعُوْلٌ لَهُ",
            "اِسْمُ إِنَّ الْمُؤَخَّرُ"
          ]
        },
        {
          "title": "عَلَيْكَ أَنْ تَخْدِمَ وَالِدَيْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Part 1 teaching text",
          "sentence": "عَلَيْكَ أَنْ تَخْدِمَ وَالِدَيْكَ",
          "translation": "It is your duty to serve your parents.",
          "cells": [
            "عَلَيْكَ",
            "أَنْ",
            "تَخْدِمَ",
            "وَالِدَيْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَارٌّ - مَجْرُوْرٌ"
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
            "فَاعِلٌ",
            "خَبَرُ كَانَ",
            "اِسْمٌ مَوْصُوْلٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "مِنْ آدَابِ تِلَاوَةِ الْقُرْآنِ أَنْ تَسْتَقْبِلَ الْقِبْلَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 1)",
          "sentence": "مِنْ آدَابِ تِلَاوَةِ الْقُرْآنِ أَنْ تَسْتَقْبِلَ الْقِبْلَةَ",
          "translation": "It is from the etiquettes of reciting the Quran to face the qiblah.",
          "cells": [
            "مِنْ",
            "آدَابِ",
            "تِلَاوَةِ",
            "الْقُرْآنِ",
            "أَنْ",
            "تَسْتَقْبِلَ",
            "الْقِبْلَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَارٌّ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَجْرُوْرٌ - مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ - مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "اِسْمُ أَنَّ"
          ]
        },
        {
          "title": "إِنَّ مِنْ عَلَامَةِ النِّفَاقِ أَنْ يَكْذِبَ الْمَرْءُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 1)",
          "sentence": "إِنَّ مِنْ عَلَامَةِ النِّفَاقِ أَنْ يَكْذِبَ الْمَرْءُ",
          "translation": "Indeed it is from the signs of hypocrisy that a person lies.",
          "cells": [
            "إِنَّ",
            "مِنْ",
            "عَلَامَةِ",
            "النِّفَاقِ",
            "أَنْ",
            "يَكْذِبَ",
            "الْمَرْءُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "خَبَرُ إِنَّ الْمُقَدَّمُ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "اِسْمُ إِنَّ الْمُؤَخَّرُ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَارٌّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَجْرُوْرٌ - مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ مُؤَخَّرٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "اِسْمُ أَنَّ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 1)",
          "kind": "mcq",
          "prompt": "إِنَّ مِنَ الْعِلْمِ أَنْ تَقُوْلَ لَا أَعْلَمُ translates as…",
          "options": [
            "Indeed it is from knowledge to say 'I do not know'",
            "Knowledge is not to be spoken",
            "Indeed the scholar says 'I do not know'",
            "So that you say 'I do not know'"
          ],
          "correct": 0,
          "explanation": "The اِسْمٌ مُؤَوَّلٌ of أَنْ تَقُوْلَ لَا أَعْلَمُ is the اِسْمُ إِنَّ الْمُؤَخَّرُ."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 1)",
          "kind": "mcq",
          "prompt": "In عَلَيْكَ أَنْ تَجْتَنِبَ مَا حَرَّمَ اللهُ, the جَارٌّ of عَلَى gives which meaning?",
          "options": [
            "ability",
            "permission",
            "duty/responsibility: 'It is your duty to avoid what Allah has forbidden'",
            "hope"
          ],
          "correct": 2,
          "explanation": "عَلَى within the خَبَرٌ مُقَدَّمٌ is translated as 'responsibility, duty'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 1)",
          "kind": "mcq",
          "prompt": "In مِنَ الْكَبَائِرِ أَنْ تُشْرِكَ بِاللهِ شَيْئًا, the اِسْمٌ مُؤَوَّلٌ occupies which slot?",
          "options": [
            "خَبَرٌ مُقَدَّمٌ",
            "مُبْتَدَأٌ مُؤَخَّرٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ لَهُ"
          ],
          "correct": 1,
          "explanation": "مِنَ الْكَبَائِرِ is the خَبَرٌ مُقَدَّمٌ, so أَنْ تُشْرِكَ بِاللهِ شَيْئًا is the مُبْتَدَأٌ مُؤَخَّرٌ."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 1)",
          "kind": "mcq",
          "prompt": "لَيْسَ لَكَ أَنْ تَمُرَّ بَيْنَ يَدَيْ مَنْ يُصَلِّيْ translates as…",
          "options": [
            "You may pass in front of one who is praying",
            "It is your duty to pass in front of one who is praying",
            "The one praying should not pass in front of you",
            "You have no right to pass in front of one who is praying"
          ],
          "correct": 3,
          "explanation": "لِ preceded by a negative sentence (لَيْسَ) = 'has no right to / should not'."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 1)",
          "kind": "mcq",
          "prompt": "In لَيْسَ لَنَا أَنْ نَسْتَرِيْحَ إِلَّا بَعْدَ الْاِمْتِحَانِ, the لِ of لَنَا gives which meaning?",
          "options": [
            "'have no right to / should not' — because it is preceded by a negative sentence",
            "'can / are allowed' — because it is affirmative",
            "'duty' — like عَلَى",
            "possession — 'ours'"
          ],
          "correct": 0,
          "explanation": "The sentence is negated with لَيْسَ, so لِ = 'has no right to / should not'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 1)",
          "kind": "mcq",
          "prompt": "In إِنَّ مِنَ الْإِيْمَانِ أَنْ تُحِبَّ الصَّحَابَةَ, why is the verb تُحِبَّ مَنْصُوْبٌ?",
          "options": [
            "Because إِنَّ is a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "Because أَنْ is عَامِلٌ and makes the following مُضَارِعٌ مَنْصُوْبٌ",
            "Because الصَّحَابَةَ is مَنْصُوْبٌ",
            "Because the sentence is negative"
          ],
          "correct": 1,
          "explanation": "أَنْ causes the following فِعْلٌ مُضَارِعٌ to become مَنْصُوْبٌ: تُحِبَّ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 1)",
          "kind": "mcq",
          "prompt": "Which structure does مِنْ آيَاتِ اللهِ أَنَّهُ خَلَقَ السَّمَاوَاتِ وَالْأَرْض use?",
          "options": [
            "اِسْمٌ مُؤَوَّلٌ as فَاعِلٌ",
            "اِسْمٌ مُؤَوَّلٌ as مَفْعُوْلٌ بِهِ",
            "خَبَرٌ مُقَدَّمٌ + اِسْمٌ مُؤَوَّلٌ with أَنَّ as مُبْتَدَأٌ مُؤَخَّرٌ",
            "اِسْمٌ مُؤَوَّلٌ as مُسْتَثْنًى"
          ],
          "correct": 2,
          "explanation": "مِنْ آيَاتِ اللهِ is the fronted خَبَرٌ; the اِسْمٌ مُؤَوَّلٌ with أَنَّ is the مُبْتَدَأٌ مُؤَخَّرٌ."
        },
        {
          "title": "major sin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"major sin\"?",
          "options": [
            "كَبِيْرَةٌ",
            "مَعْلُوْمٌ",
            "شَفَةٌ",
            "عَلَامَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "major sin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَبِيْرَةٌ mean?",
          "options": [
            "major sin",
            "known",
            "lip",
            "sign"
          ],
          "correct": 0
        },
        {
          "title": "major sin (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَبِيْرَةٌ?",
          "options": [
            "كَبَائِرُ",
            "آدَابٌ",
            "عُقُوْلٌ",
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
            "أَدَبٌ",
            "عَقْلٌ",
            "كَبِيْرَةٌ"
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
            "manner, etiquette",
            "intellect",
            "major sin"
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
            "شِفَاهٌ",
            "عَلَامَاتٌ",
            "لُغَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "language",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"language\"?",
          "options": [
            "لُغَةٌ",
            "شَفَةٌ",
            "عَلَامَةٌ",
            "لِسَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "language",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لُغَةٌ mean?",
          "options": [
            "language",
            "lip",
            "sign",
            "tongue"
          ],
          "correct": 0
        },
        {
          "title": "language (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لُغَةٌ?",
          "options": [
            "لُغَاتٌ",
            "عُقُوْلٌ",
            "كَبَائِرُ",
            "آدَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "known",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"known\"?",
          "options": [
            "مَعْلُوْمٌ",
            "عَقْلٌ",
            "كَبِيْرَةٌ",
            "لُغَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "known",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَعْلُوْمٌ mean?",
          "options": [
            "known",
            "intellect",
            "major sin",
            "language"
          ],
          "correct": 0
        },
        {
          "title": "manner, etiquette",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"manner, etiquette\"?",
          "options": [
            "أَدَبٌ",
            "عَلَامَةٌ",
            "لِسَانٌ",
            "مَعْلُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "manner, etiquette",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَبٌ mean?",
          "options": [
            "manner, etiquette",
            "sign",
            "tongue",
            "known"
          ],
          "correct": 0
        },
        {
          "title": "manner, etiquette (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَدَبٌ?",
          "options": [
            "آدَابٌ",
            "كَبَائِرُ",
            "لُغَاتٌ",
            "عُقُوْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "lip",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lip\"?",
          "options": [
            "شَفَةٌ",
            "كَبِيْرَةٌ",
            "لُغَةٌ",
            "أَدَبٌ"
          ],
          "correct": 0
        },
        {
          "title": "lip",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَفَةٌ mean?",
          "options": [
            "lip",
            "major sin",
            "language",
            "manner, etiquette"
          ],
          "correct": 0
        },
        {
          "title": "lip (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَفَةٌ?",
          "options": [
            "شِفَاهٌ",
            "أَلْسِنَةٌ",
            "آدَابٌ",
            "عَلَامَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "intellect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"intellect\"?",
          "options": [
            "عَقْلٌ",
            "لِسَانٌ",
            "مَعْلُوْمٌ",
            "شَفَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "intellect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقْلٌ mean?",
          "options": [
            "intellect",
            "tongue",
            "known",
            "lip"
          ],
          "correct": 0
        },
        {
          "title": "intellect (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَقْلٌ?",
          "options": [
            "عُقُوْلٌ",
            "لُغَاتٌ",
            "شِفَاهٌ",
            "كَبَائِرُ"
          ],
          "correct": 0
        },
        {
          "title": "sign",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sign\"?",
          "options": [
            "عَلَامَةٌ",
            "لُغَةٌ",
            "أَدَبٌ",
            "عَقْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "sign",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَلَامَةٌ mean?",
          "options": [
            "sign",
            "language",
            "manner, etiquette",
            "intellect"
          ],
          "correct": 0
        },
        {
          "title": "sign (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَلَامَةٌ?",
          "options": [
            "عَلَامَاتٌ",
            "آدَابٌ",
            "عُقُوْلٌ",
            "أَلْسِنَةٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "الاسم المؤول خبرًا",
      "subtitle": "Part 2: The خَبَرٌ as an اِسْمٌ مُؤَوَّلٌ",
      "concepts": [
        {
          "heading": "The خَبَرٌ as an اِسْمٌ مُؤَوَّلٌ",
          "lines": [
            {
              "html": "The خَبَرٌ can occur as an اِسْمٌ مُؤَوَّلٌ.",
              "list": false
            },
            {
              "html": "اَلْحَقُّ أَنَّكَ تَجْتَهِدُ — The truth is that you work hard.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلْحَقُّ أَنَّكَ تَجْتَهِدُ",
                "translation": "The truth is that you work hard.",
                "cells": [
                  "اَلْحَقُّ",
                  "أَنَّكَ",
                  "تَجْتَهِدُ"
                ],
                "rows": [
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
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
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
                        "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (كَ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "خَبَرٌ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In اَلْحَقُّ أَنَّكَ تَجْتَهِدُ, what is أَنَّكَ تَجْتَهِدُ؟",
            "kind": "mcq",
            "options": [
              "The خَبَرٌ of the مُبْتَدَأٌ اَلْحَقُّ",
              "The مُبْتَدَأٌ itself",
              "A مُضَافٌ إِلَيْهِ",
              "The فَاعِلٌ of a hidden verb"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اِسْمٌ مُؤَوَّلٌ as خَبَرٌ",
        "rows": [
          {
            "label": "خَبَرٌ",
            "arabic": "اَلْحَقُّ أَنَّكَ تَجْتَهِدُ",
            "meaning": "The truth is that you work hard"
          },
          {
            "label": "with أَنَّ",
            "arabic": "أَنَّ + اِسْمٌ + خَبَرٌ",
            "meaning": "indicative mood — facts"
          },
          {
            "label": "with أَنْ",
            "arabic": "أَنْ + مُضَارِعٌ مَنْصُوْبٌ",
            "meaning": "subjunctive mood — recommendations, definitions"
          }
        ]
      },
      "quiz": [
        {
          "q": "In اَلْحَقُّ أَنَّكَ تَجْتَهِدُ, which slot does the اِسْمٌ مُؤَوَّلٌ occupy?",
          "options": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "خَبَرٌ",
            "مَفْعُوْلٌ بِهِ"
          ],
          "correct": 2,
          "explanation": "اَلْحَقُّ is the مُبْتَدَأٌ; أَنَّكَ تَجْتَهِدُ is the خَبَرٌ: 'The truth is that you work hard.'"
        },
        {
          "q": "In the tarkib of أَنَّكَ, how is the word labelled?",
          "options": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (كَ)",
            "حَرْفٌ مَوْصُوْلٌ only",
            "اِسْمُ أَنَّ only",
            "مُبْتَدَأٌ"
          ],
          "correct": 0,
          "explanation": "The اِسْمٌ of أَنَّ is the attached pronoun كَ, so both are labelled together."
        },
        {
          "q": "Which حَرْفٌ مَوْصُوْلٌ is used in التَّقْوَى أَنْ تَجْتَنِبَ الْمَعَاصِيَ, and in which mood?",
          "options": [
            "أَنَّ — indicative",
            "أَنْ — subjunctive; the verb تَجْتَنِبَ is مَنْصُوْبٌ",
            "مَا — indicative",
            "كَيْ — subjunctive"
          ],
          "correct": 1,
          "explanation": "أَنْ takes the subjunctive mood and makes the following مُضَارِعٌ مَنْصُوْبٌ."
        },
        {
          "q": "How would الْعِلْمُ أَنْ تَعْمَلَ لَا أَنْ تَحْفَظَ be translated?",
          "options": [
            "Knowledge is memorising, not acting",
            "Act upon knowledge so that you memorise it",
            "Knowledge does not benefit",
            "Knowledge is to act, not (merely) to memorise"
          ],
          "correct": 3,
          "explanation": "Both أَنْ تَعْمَلَ and أَنْ تَحْفَظَ are أَسْمَاءٌ مُؤَوَّلَةٌ; the first is the خَبَرٌ."
        },
        {
          "q": "What is the difference between أَنْ تَصُوْمُوْا خَيْرٌ and اَلْحَقُّ أَنَّكَ تَجْتَهِدُ?",
          "options": [
            "In the first the اِسْمٌ مُؤَوَّلٌ is the مُبْتَدَأٌ; in the second it is the خَبَرٌ",
            "In both the اِسْمٌ مُؤَوَّلٌ is the خَبَرٌ",
            "In both the اِسْمٌ مُؤَوَّلٌ is the مُبْتَدَأٌ",
            "The first has no اِسْمٌ مُؤَوَّلٌ"
          ],
          "correct": 0,
          "explanation": "An اِسْمٌ مُؤَوَّلٌ can fill either slot of the جُمْلَةٌ اسْمِيَّةٌ."
        }
      ],
      "bank": [
        {
          "title": "اَلْحَقُّ أَنَّكَ تَجْتَهِدُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Part 2 teaching text",
          "sentence": "اَلْحَقُّ أَنَّكَ تَجْتَهِدُ",
          "translation": "The truth is that you work hard.",
          "cells": [
            "اَلْحَقُّ",
            "أَنَّكَ",
            "تَجْتَهِدُ"
          ],
          "rows": [
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
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (كَ)"
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
            "اِسْمُ أَنَّ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَرْفٌ مَوْصُوْلٌ"
          ]
        },
        {
          "title": "التَّقْوَى أَنْ تَجْتَنِبَ الْمَعَاصِيَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 2)",
          "sentence": "التَّقْوَى أَنْ تَجْتَنِبَ الْمَعَاصِيَ",
          "translation": "Taqwa is to avoid acts of disobedience.",
          "cells": [
            "اَلتَّقْوَى",
            "أَنْ",
            "تَجْتَنِبَ",
            "الْمَعَاصِيَ"
          ],
          "rows": [
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
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "خَبَرُ إِنَّ",
            "فَاعِلٌ",
            "اِسْمُ أَنَّ",
            "مَفْعُوْلٌ لَهُ"
          ]
        },
        {
          "title": "الْعِلْمُ أَنْ تَعْمَلَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 2)",
          "sentence": "الْعِلْمُ أَنْ تَعْمَلَ",
          "translation": "Knowledge is to act.",
          "cells": [
            "اَلْعِلْمُ",
            "أَنْ",
            "تَعْمَلَ"
          ],
          "rows": [
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
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "خَبَرُ كَانَ",
            "مَفْعُوْلٌ بِهِ",
            "اِسْمٌ مَوْصُوْلٌ"
          ]
        },
        {
          "title": "الْعَقْلُ أَلَّا تَتَكَلَّمَ بِمَا يَضُرُّكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 2)",
          "sentence": "الْعَقْلُ أَلَّا تَتَكَلَّمَ بِمَا يَضُرُّكَ",
          "translation": "Intelligence is not to speak about what harms you.",
          "cells": [
            "اَلْعَقْلُ",
            "أَنْ",
            "لَا",
            "تَتَكَلَّمَ",
            "بِمَا يَضُرُّكَ"
          ],
          "rows": [
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
                  "end": 4,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَا النَّافِيَةُ",
            "خَبَرُ أَنَّ",
            "حَرْفُ حَصْرٍ",
            "اِسْمُ إِنَّ"
          ]
        },
        {
          "title": "السُّنَّةُ أَنْ تَتَّبِعَ الرَّسُوْلَ فِيْمَا أَمَرَنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 2)",
          "sentence": "السُّنَّةُ أَنْ تَتَّبِعَ الرَّسُوْلَ فِيْمَا أَمَرَنَا",
          "translation": "The sunnah is to follow the Messenger in what he commanded us.",
          "cells": [
            "اَلسُّنَّةُ",
            "أَنْ",
            "تَتَّبِعَ",
            "الرَّسُوْلَ",
            "فِيْمَا أَمَرَنَا"
          ],
          "rows": [
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
                  "end": 4,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "role": "جَارٌّ - مَجْرُوْرٌ"
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
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ مُقَدَّمٌ",
            "اِسْمُ أَنَّ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "الْبِرُّ أَنْ تُطِيْعَ أَبَاكَ وَأُمَّكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 2)",
          "sentence": "الْبِرُّ أَنْ تُطِيْعَ أَبَاكَ وَأُمَّكَ",
          "translation": "Righteousness is to obey your father and your mother.",
          "cells": [
            "اَلْبِرُّ",
            "أَنْ",
            "تُطِيْعَ",
            "أَبَاكَ",
            "وَ",
            "أُمَّكَ"
          ],
          "rows": [
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
                  "end": 5,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ - مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَعْطُوْفٌ"
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
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "خَبَرُ أَنَّ",
            "مُضَافٌ إِلَيْهِ",
            "حَرْفُ نَفْيٍ"
          ]
        },
        {
          "title": "وَأَلَّا تَعُقَّهُمَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 2)",
          "sentence": "وَأَلَّا تَعُقَّهُمَا",
          "translation": "…and not to disobey them both.",
          "cells": [
            "وَ",
            "أَنْ",
            "لَا",
            "تَعُقَّهُمَا"
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
                  "role": "مَعْطُوْفٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 3,
                  "end": 3,
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
            "مَعْطُوْفٌ عَلَيْهِ",
            "مَا النَّافِيَةُ",
            "مُسْتَثْنًى",
            "خَبَرُ أَنَّ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 2)",
          "kind": "mcq",
          "prompt": "التَّقْوَى أَنْ تَجْتَنِبَ الْمَعَاصِيَ translates as…",
          "options": [
            "Taqwa is to avoid acts of disobedience",
            "Avoid taqwa and disobedience",
            "Taqwa prevents disobedience",
            "So that you avoid disobedience with taqwa"
          ],
          "correct": 0,
          "explanation": "The اِسْمٌ مُؤَوَّلٌ is the خَبَرٌ of التَّقْوَى."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 2)",
          "kind": "mcq",
          "prompt": "In الْعَقْلُ أَلَّا تَتَكَلَّمَ بِمَا يَضُرُّكَ, the word أَلَّا is made up of…",
          "options": [
            "إِلَّا + أَنْ",
            "أَنَّ + لَا",
            "أَنْ + لَا — the حَرْفٌ مَوْصُوْلٌ with a negated صِلَةٌ",
            "لَا + لَا"
          ],
          "correct": 2,
          "explanation": "أَنْ لَا is written and pronounced as أَلَّا: 'Intelligence is not to speak about what harms you.'"
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 2)",
          "kind": "mcq",
          "prompt": "In السُّنَّةُ أَنْ تَتَّبِعَ الرَّسُوْلَ فِيْمَا أَمَرَنَا, the مُبْتَدَأٌ is…",
          "options": [
            "أَنْ تَتَّبِعَ",
            "السُّنَّةُ",
            "الرَّسُوْلَ",
            "فِيْمَا أَمَرَنَا"
          ],
          "correct": 1,
          "explanation": "السُّنَّةُ is the مُبْتَدَأٌ; the اِسْمٌ مُؤَوَّلٌ is its خَبَرٌ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 2)",
          "kind": "mcq",
          "prompt": "In الْبِرُّ أَنْ تُطِيْعَ أَبَاكَ وَأُمَّكَ وَأَلَّا تَعُقَّهُمَا, what does the second وَ join?",
          "options": [
            "Two verbs only",
            "The مُبْتَدَأٌ and the خَبَرٌ",
            "أَبَاكَ and أُمَّكَ",
            "Two أَسْمَاءٌ مُؤَوَّلَةٌ — أَنْ تُطِيْعَ… and أَلَّا تَعُقَّهُمَا are joined as مَعْطُوْفٌ"
          ],
          "correct": 3,
          "explanation": "Righteousness is to obey your father and mother AND not to disobey them — two joined أَسْمَاءٌ مُؤَوَّلَةٌ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 2)",
          "kind": "mcq",
          "prompt": "Why is the verb تَجْتَنِبَ in التَّقْوَى أَنْ تَجْتَنِبَ الْمَعَاصِيَ in the مَنْصُوْبٌ state?",
          "options": [
            "It agrees with الْمَعَاصِيَ",
            "أَنْ is عَامِلٌ and makes the following فِعْلٌ مُضَارِعٌ مَنْصُوْبٌ",
            "The مُبْتَدَأٌ makes it مَنْصُوْبٌ",
            "It is a فِعْلٌ مَاضٍ"
          ],
          "correct": 1,
          "explanation": "The حَرْفٌ مَوْصُوْلٌ of أَنْ governs the verb of its صِلَةٌ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 2)",
          "kind": "mcq",
          "prompt": "الْعِلْمُ أَنْ تَعْمَلَ لَا أَنْ تَحْفَظَ translates as…",
          "options": [
            "Knowledge is neither action nor memorisation",
            "Do not act upon your memorisation",
            "Knowledge is to act, not (merely) to memorise",
            "Memorise knowledge so that you act"
          ],
          "correct": 2,
          "explanation": "The first اِسْمٌ مُؤَوَّلٌ is the خَبَرٌ; the second is joined to it with لَا ('not')."
        },
        {
          "title": "futile activity",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"futile activity\"?",
          "options": [
            "لَهْوٌ",
            "مَنْسَكٌ",
            "سَرِيْعٌ",
            "عِقَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "futile activity",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَهْوٌ mean?",
          "options": [
            "futile activity",
            "ritual",
            "swift",
            "punishment"
          ],
          "correct": 0
        },
        {
          "title": "ruling",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ruling\"?",
          "options": [
            "مَسْأَلَةٌ",
            "رُوْحٌ",
            "عَاشُوْرَاءُ",
            "لَهْوٌ"
          ],
          "correct": 0
        },
        {
          "title": "ruling",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسْأَلَةٌ mean?",
          "options": [
            "ruling",
            "soul",
            "Ashura (10th Muharram)",
            "futile activity"
          ],
          "correct": 0
        },
        {
          "title": "ruling (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَسْأَلَةٌ?",
          "options": [
            "مَسَائِلُ",
            "سِرَاعٌ، سُرْعَانُ",
            "مَنَاسِكُ",
            "مَعَاصٍ"
          ],
          "correct": 0
        },
        {
          "title": "disobedience",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"disobedience\"?",
          "options": [
            "مَعْصِيَةٌ",
            "سَرِيْعٌ",
            "عِقَابٌ",
            "مَسْأَلَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "disobedience",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَعْصِيَةٌ mean?",
          "options": [
            "disobedience",
            "swift",
            "punishment",
            "ruling"
          ],
          "correct": 0
        },
        {
          "title": "disobedience (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَعْصِيَةٌ?",
          "options": [
            "مَعَاصٍ",
            "مَسَائِلُ",
            "أَرْوَاحٌ",
            "مَنَاسِكُ"
          ],
          "correct": 0
        },
        {
          "title": "ritual",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ritual\"?",
          "options": [
            "مَنْسَكٌ",
            "عَاشُوْرَاءُ",
            "لَهْوٌ",
            "مَعْصِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "ritual",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَنْسَكٌ mean?",
          "options": [
            "ritual",
            "Ashura (10th Muharram)",
            "futile activity",
            "disobedience"
          ],
          "correct": 0
        },
        {
          "title": "ritual (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَنْسَكٌ?",
          "options": [
            "مَنَاسِكُ",
            "مَعَاصٍ",
            "سِرَاعٌ، سُرْعَانُ",
            "مَسَائِلُ"
          ],
          "correct": 0
        },
        {
          "title": "soul",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"soul\"?",
          "options": [
            "رُوْحٌ",
            "عِقَابٌ",
            "مَسْأَلَةٌ",
            "مَنْسَكٌ"
          ],
          "correct": 0
        },
        {
          "title": "soul",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رُوْحٌ mean?",
          "options": [
            "soul",
            "punishment",
            "ruling",
            "ritual"
          ],
          "correct": 0
        },
        {
          "title": "soul (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رُوْحٌ?",
          "options": [
            "أَرْوَاحٌ",
            "مَنَاسِكُ",
            "مَسَائِلُ",
            "مَعَاصٍ"
          ],
          "correct": 0
        },
        {
          "title": "swift",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"swift\"?",
          "options": [
            "سَرِيْعٌ",
            "لَهْوٌ",
            "مَعْصِيَةٌ",
            "رُوْحٌ"
          ],
          "correct": 0
        },
        {
          "title": "swift",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَرِيْعٌ mean?",
          "options": [
            "swift",
            "futile activity",
            "disobedience",
            "soul"
          ],
          "correct": 0
        },
        {
          "title": "swift (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَرِيْعٌ?",
          "options": [
            "سِرَاعٌ، سُرْعَانُ",
            "أَرْوَاحٌ",
            "مَعَاصٍ",
            "مَسَائِلُ"
          ],
          "correct": 0
        },
        {
          "title": "Ashura (10th Muharram)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Ashura (10th Muharram)\"?",
          "options": [
            "عَاشُوْرَاءُ",
            "مَسْأَلَةٌ",
            "مَنْسَكٌ",
            "سَرِيْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "Ashura (10th Muharram)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَاشُوْرَاءُ mean?",
          "options": [
            "Ashura (10th Muharram)",
            "ruling",
            "ritual",
            "swift"
          ],
          "correct": 0
        },
        {
          "title": "punishment",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"punishment\"?",
          "options": [
            "عِقَابٌ",
            "مَعْصِيَةٌ",
            "رُوْحٌ",
            "عَاشُوْرَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "punishment",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عِقَابٌ mean?",
          "options": [
            "punishment",
            "disobedience",
            "soul",
            "Ashura (10th Muharram)"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "الاسم المؤول فاعلاً",
      "subtitle": "Part 3: The فَاعِلٌ as an اِسْمٌ مُؤَوَّلٌ",
      "concepts": [
        {
          "heading": "The فَاعِلٌ as an اِسْمٌ مُؤَوَّلٌ",
          "lines": [
            {
              "html": "The فَاعِلٌ can occur as an اِسْمٌ مُؤَوَّلٌ built with أَنْ or أَنَّ. This is the structure behind a very large family of everyday Arabic sentences — those built on verbs like يَجِبُ, يَحِلُّ, يَجُوْزُ, يَنْبَغِيْ, يُمْكِنُ, يَسُرُّ and يُعْجِبُ.",
              "list": false
            },
            {
              "html": "يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ — Speaking the truth is incumbent upon you.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ",
                "translation": "Speaking the truth is incumbent upon you.",
                "cells": [
                  "يَجِبُ",
                  "عَلَيْكَ",
                  "أَنْ",
                  "تَصْدُقَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                      },
                      {
                        "start": 2,
                        "end": 3,
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
                        "role": "جَارٌّ – مَجْرُوْرٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَرْفٌ مَوْصُوْلٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "صِلَةٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Read the diagram and the structure becomes plain. يَجِبُ is the verb; عَلَيْكَ is its indirect object, which the book labels مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ; and أَنْ تَصْدُقَ — the حَرْفٌ مَوْصُوْلٌ with its صِلَةٌ — is the فَاعِلٌ. Literally: 'your speaking the truth is obligatory upon you'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ, what is the فَاعِلٌ of يَجِبُ؟",
            "kind": "mcq",
            "options": [
              "أَنْ تَصْدُقَ (the حَرْفٌ مَوْصُوْلٌ with its صِلَةٌ)",
              "عَلَيْكَ",
              "يَجِبُ has no فَاعِلٌ",
              "تَصْدُقَ alone, without أَنْ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Two ways of translating",
          "lines": [
            {
              "html": "1. Translating the فَاعِلٌ first, followed by the main verb. English offers three natural shapes for this, all equally correct.",
              "list": false
            },
            {
              "html": "يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ — Speaking the truth is incumbent upon you.",
              "list": true,
              "bullet": true
            },
            {
              "html": "يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ — To speak the truth is incumbent upon you.",
              "list": true,
              "bullet": true
            },
            {
              "html": "يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ — That you speak the truth is incumbent upon you.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. Adding an anticipatory 'it' before the main verb, followed by the فَاعِلٌ.",
              "list": false
            },
            {
              "html": "يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ — It is incumbent upon you to speak the truth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The second method usually reads best in English, and it has the advantage of keeping the Arabic word order intact. The first is closer to the grammar and is worth practising, because it makes visible that the أَنْ clause really is the subject of the sentence.",
              "list": false
            },
            {
              "table": {
                "title": "The two methods side by side",
                "headers": [
                  "Method",
                  "Shape",
                  "Example"
                ],
                "rows": [
                  [
                    "1",
                    "فَاعِلٌ first, then the verb",
                    "Speaking the truth / To speak the truth / That you speak the truth … is incumbent upon you"
                  ],
                  [
                    "2",
                    "anticipatory 'it', then the فَاعِلٌ",
                    "It is incumbent upon you to speak the truth"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What are the two ways of translating an اِسْمٌ مُؤَوَّلٌ that is a فَاعِلٌ, as with يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ؟",
            "kind": "mcq",
            "options": [
              "Translating the فَاعِلٌ first then the verb, or adding an anticipatory 'it' before the verb then the فَاعِلٌ",
              "Only ever using 'it'",
              "Only ever translating the فَاعِلٌ first",
              "Reversing the whole sentence word order"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Two Notes",
          "lines": [
            {
              "html": "1. When an اِسْمٌ مُؤَوَّلٌ becomes the فَاعِلٌ, the verb will always be in the masculine form. There is no feminine option to consider, because the أَنْ clause has no gender of its own — so يَجِبُ, never تَجِبُ.",
              "list": false
            },
            {
              "html": "2. The verb يَنْبَغِيْ can be translated by adding the word 'should' before the verb within the اِسْمٌ مُؤَوَّلٌ.",
              "list": false
            },
            {
              "html": "يَنْبَغِيْ لَكَ أَنْ تَجْتَهِدَ فِيْ دُرُوْسِكَ — You should work hard in your lessons.",
              "list": true,
              "bullet": true
            },
            {
              "html": "That rendering is worth memorising, because 'it is appropriate for you that you strive in your lessons' is stiff English for what is a very ordinary Arabic sentence. The same trick applies to the negative: لَا يَنْبَغِيْ becomes 'should not'.",
              "list": false
            },
            {
              "html": "لَا يَنْبَغِيْ لِأَحَدٍ أَنْ يُضَيِّعَ وَقْتَهُ فِي اللَّهْوِ — No one should waste his time in futile activity.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "Why is the verb always masculine (يَجِبُ, never تَجِبُ) when its فَاعِلٌ is an اِسْمٌ مُؤَوَّلٌ؟",
            "kind": "mcq",
            "options": [
              "Because the أَنْ clause has no gender of its own",
              "Because أَنْ is always masculine",
              "Because the verb يَجِبُ is a special exception with no rule behind it",
              "Because the فَاعِلٌ is always hidden"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 3 — the فَاعِلٌ as an اِسْمٌ مُؤَوَّلٌ",
        "rows": [
          {
            "label": "Built with",
            "arabic": "أَنْ or أَنَّ",
            "meaning": "the حَرْفٌ مَوْصُوْلٌ plus its صِلَةٌ"
          },
          {
            "label": "Book example",
            "arabic": "يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ",
            "meaning": "the أَنْ clause is the فَاعِلٌ of يَجِبُ"
          },
          {
            "label": "عَلَيْكَ",
            "arabic": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "meaning": "an indirect object carried by a preposition"
          },
          {
            "label": "Method 1",
            "arabic": "فَاعِلٌ first",
            "meaning": "'Speaking the truth / To speak the truth / That you speak the truth is incumbent upon you'"
          },
          {
            "label": "Method 2",
            "arabic": "anticipatory 'it'",
            "meaning": "'It is incumbent upon you to speak the truth'"
          },
          {
            "label": "Note 1",
            "arabic": "always masculine",
            "meaning": "the verb never takes the feminine form before a مُؤَوَّل فَاعِل"
          },
          {
            "label": "Note 2",
            "arabic": "يَنْبَغِيْ = 'should'",
            "meaning": "يَنْبَغِيْ لَكَ أَنْ تَجْتَهِدَ — 'you should work hard'"
          }
        ]
      },
      "quiz": [
        {
          "q": "In يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ, what is أَنْ تَصْدُقَ?",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "فَاعِلٌ",
            "خَبَرٌ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "The حَرْفٌ مَوْصُوْلٌ with its صِلَةٌ forms the اِسْمٌ مُؤَوَّلٌ which does the action of يَجِبُ."
        },
        {
          "q": "In يَجِبُ عَلَيْكَ أَنْ تَصْدُقَ, what is عَلَيْكَ called?",
          "options": [
            "حَالٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "It is an object reached through a preposition rather than directly — 'not explicit'."
        },
        {
          "q": "Which is an example of the second method of translation?",
          "options": [
            "'Speaking the truth is incumbent upon you'",
            "'To speak the truth is incumbent upon you'",
            "'That you speak the truth is incumbent upon you'",
            "'It is incumbent upon you to speak the truth'"
          ],
          "correct": 3,
          "explanation": "The anticipatory 'it' comes first and the فَاعِلٌ is pushed to the end."
        },
        {
          "q": "Why is the verb always masculine when the فَاعِلٌ is an اِسْمٌ مُؤَوَّلٌ?",
          "options": [
            "Because أَنْ is masculine",
            "Because the أَنْ clause has no gender of its own",
            "Because the verb precedes its فَاعِلٌ",
            "Because the صِلَةٌ is a verb"
          ],
          "correct": 1,
          "explanation": "There is nothing to trigger the feminine, so the default masculine form is used."
        },
        {
          "q": "How is يَنْبَغِيْ best translated?",
          "options": [
            "as 'must'",
            "as 'is possible'",
            "by adding 'should' before the verb inside the اِسْمٌ مُؤَوَّلٌ",
            "by omitting it entirely"
          ],
          "correct": 2,
          "explanation": "يَنْبَغِيْ لَكَ أَنْ تَجْتَهِدَ becomes 'you should work hard'."
        },
        {
          "q": "Like يَجِبُ, which pair of verbs can each take a whole اِسْمٌ مُؤَوَّلٌ (أَنْ + مُضَارِعٌ) as their فَاعِلٌ?",
          "options": [
            "يَحِلُّ and يَجُوْزُ",
            "يَقْتُلُ and يَشْرَبُ",
            "يَغْتَابُ and يَلْعَنُ",
            "يَعْمَلُ and يَأْخُذُ"
          ],
          "correct": 0,
          "explanation": "The other verbs listed all sit inside the صِلَةٌ; يَحِلُّ and يَجُوْزُ are the main verbs."
        }
      ],
      "bank": [
        {
          "title": "لَا يَحِلُّ لِمُسْلِمٍ أَنْ يَغْتَابَ أَخَاهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "لَا يَحِلُّ لِمُسْلِمٍ أَنْ يَغْتَابَ أَخَاهُ",
          "translation": "It is not permissible for a Muslim to backbite his brother.",
          "cells": [
            "لَا",
            "يَحِلُّ",
            "لِمُسْلِمٍ",
            "أَنْ",
            "يَغْتَابَ",
            "أَخَاهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يَجِبُ عَلَيْنَا أَنْ نَشْكُرَ اللهَ عَلَى نِعَمِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "يَجِبُ عَلَيْنَا أَنْ نَشْكُرَ اللهَ عَلَى نِعَمِهِ",
          "translation": "It is obligatory upon us to thank Allah for His favours.",
          "cells": [
            "يَجِبُ",
            "عَلَيْنَا",
            "أَنْ",
            "نَشْكُرَ",
            "اللهَ",
            "عَلَى نِعَمِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَنْبَغِيْ لِطَالِبِ عِلْمٍ أَنْ يَعْمَلَ بِعِلْمِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "يَنْبَغِيْ لِطَالِبِ عِلْمٍ أَنْ يَعْمَلَ بِعِلْمِهِ",
          "translation": "A student of knowledge should act upon his knowledge.",
          "cells": [
            "يَنْبَغِيْ",
            "لِطَالِبِ",
            "عِلْمٍ",
            "أَنْ",
            "يَعْمَلَ",
            "بِعِلْمِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 5,
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
                  "role": "جَارٌّ وَمَجْرُوْرٌ وَمُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يَسُرُّ الْمُعَلِّمَ أَنَّ الطُّلَّابَ يَجْتَهِدُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "يَسُرُّ الْمُعَلِّمَ أَنَّ الطُّلَّابَ يَجْتَهِدُوْنَ",
          "translation": "It pleases the teacher that the students strive.",
          "cells": [
            "يَسُرُّ",
            "الْمُعَلِّمَ",
            "أَنَّ",
            "الطُّلَّابَ",
            "يَجْتَهِدُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا يَجُوْزُ لِمُسْلِمٍ أَنْ يَلْعَنَ أَحَدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "لَا يَجُوْزُ لِمُسْلِمٍ أَنْ يَلْعَنَ أَحَدًا",
          "translation": "It is not allowed for a Muslim to curse anyone.",
          "cells": [
            "لَا",
            "يَجُوْزُ",
            "لِمُسْلِمٍ",
            "أَنْ",
            "يَلْعَنَ",
            "أَحَدًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "خَبَرٌ",
            "مُبْتَدَأٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا يَنْبَغِيْ لِأَحَدٍ أَنْ يُضَيِّعَ وَقْتَهُ فِي اللَّهْوِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "لَا يَنْبَغِيْ لِأَحَدٍ أَنْ يُضَيِّعَ وَقْتَهُ فِي اللَّهْوِ",
          "translation": "No one should waste his time in futile activity.",
          "cells": [
            "لَا",
            "يَنْبَغِيْ",
            "لِأَحَدٍ",
            "أَنْ",
            "يُضَيِّعَ",
            "وَقْتَهُ",
            "فِي اللَّهْوِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "هَلْ يُمْكِنُ لَكَ أَنْ تَأْتِيَ مَعِيْ إِلَى السُّوْقِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "هَلْ يُمْكِنُ لَكَ أَنْ تَأْتِيَ مَعِيْ إِلَى السُّوْقِ",
          "translation": "Is it possible for you to come with me to the market?",
          "cells": [
            "هَلْ",
            "يُمْكِنُ",
            "لَكَ",
            "أَنْ",
            "تَأْتِيَ",
            "مَعِيْ",
            "إِلَى السُّوْقِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ اسْتِفْهَامٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يَظْهَرُ أَنَّ هٰذَا الطَّالِبَ يَطْلُبُ الْعِلْمَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "يَظْهَرُ أَنَّ هٰذَا الطَّالِبَ يَطْلُبُ الْعِلْمَ",
          "translation": "It appears that this student seeks knowledge.",
          "cells": [
            "يَظْهَرُ",
            "أَنَّ",
            "هٰذَا الطَّالِبَ",
            "يَطْلُبُ",
            "الْعِلْمَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
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
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ",
            "نَعْتٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا يَحِلُّ لِمُسْلِمٍ أَنْ يَأْخُذَ مَالَ غَيْرِهِ بِغَيْرِ إِذْنِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "لَا يَحِلُّ لِمُسْلِمٍ أَنْ يَأْخُذَ مَالَ غَيْرِهِ بِغَيْرِ إِذْنِهِ",
          "translation": "It is not permissible for a Muslim to take another's wealth without his permission.",
          "cells": [
            "لَا يَحِلُّ",
            "لِمُسْلِمٍ",
            "أَنْ",
            "يَأْخُذَ",
            "مَالَ",
            "غَيْرِهِ",
            "بِغَيْرِ إِذْنِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَنْفِيٌّ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 6,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "بَلَغَنَا أَنَّ النَّبِيَّ كَانَ يَصُوْمُ عَاشُوْرَاءَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 3)",
          "sentence": "بَلَغَنَا أَنَّ النَّبِيَّ كَانَ يَصُوْمُ عَاشُوْرَاءَ",
          "translation": "It has reached us that the Prophet used to fast Ashura.",
          "cells": [
            "بَلَغَنَا",
            "أَنَّ",
            "النَّبِيَّ",
            "كَانَ",
            "يَصُوْمُ",
            "عَاشُوْرَاءَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 5,
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
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "مُبْتَدَأٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "In لَا يَحِلُّ لِمُسْلِمٍ أَنْ يَغْتَابَ أَخَاهُ, which word is the فَاعِلٌ of يَحِلُّ?",
          "options": [
            "لِمُسْلِمٍ",
            "أَخَاهُ",
            "the whole unit أَنْ يَغْتَابَ أَخَاهُ",
            "a concealed هُوَ"
          ],
          "correct": 2,
          "explanation": "The اِسْمٌ مُؤَوَّلٌ is what is not permissible; لِمُسْلِمٍ names the person it is not permissible for."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "In لَا يَحِلُّ لِمُسْلِمٍ أَنْ يَغْتَابَ أَخَاهُ, why is يَغْتَابَ مَنْصُوْبٌ?",
          "options": [
            "Because it follows a negation",
            "Because أَنْ is a حَرْفُ نَصْبٍ governing the مُضَارِع",
            "Because أَخَاهُ is مَنْصُوْبٌ",
            "Because it is the فَاعِلٌ"
          ],
          "correct": 1,
          "explanation": "أَنْ puts the following مُضَارِع into the مَنْصُوْب state; that fatḥah is the mark of the مُؤَوَّل."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "In يَسُرُّ الْمُعَلِّمَ أَنَّ الطُّلَّابَ يَجْتَهِدُوْنَ كَثِيْرًا, what is الْمُعَلِّمَ?",
          "options": [
            "the فَاعِلٌ",
            "a direct مَفْعُوْلٌ بِهِ",
            "a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 1,
          "explanation": "سَرَّ takes its object directly, without a preposition: 'it pleases the teacher that…'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "In كَانَ يُغْضِبُ أَبِيْ أَنَّ أَخِيْ كَانَ يَضْرِبُ أُخْتَنَا, what does the outer كَانَ do?",
          "options": [
            "It makes the whole statement past continuous — 'it used to anger my father that…'",
            "It negates the sentence",
            "It is the main verb, with يُغْضِبُ as its فَاعِلٌ",
            "It governs أَنَّ"
          ],
          "correct": 0,
          "explanation": "كَانَ + مُضَارِعٌ gives the habitual past; the أَنَّ clause is still the فَاعِلٌ of يُغْضِبُ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "لَا يَنْبَغِيْ لِأَحَدٍ أَنْ يُضَيِّعَ وَقْتَهُ فِي اللَّهْوِ is best rendered as…",
          "options": [
            "No one is able to waste his time in futile activity",
            "No one should waste his time in futile activity",
            "It is not permitted for anyone to waste time",
            "No one wastes his time in futile activity"
          ],
          "correct": 1,
          "explanation": "Note 2 gives 'should' for يَنْبَغِيْ, and the negative form gives 'should not'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "In هَلْ غَابَ عَنْكَ أَنَّ أَبَاكَ وَأُمَّكَ أَحْسَنَا إِلَيْكَ صَغِيْرًا؟, what is صَغِيْرًا?",
          "options": [
            "تَمْيِيْزٌ",
            "نَعْتٌ of إِلَيْكَ",
            "حَالٌ describing the addressee",
            "مَفْعُوْلٌ بِهِ ثَانٍ"
          ],
          "correct": 2,
          "explanation": "'when you were small' — a state, not a description of a stated noun."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "In يَنْبَغِيْ لِطَالِبِ عِلْمٍ أَنْ يَكُوْنَ مَعَهُ كِتَابٌ فِيْ سَائِرِ أَوْقَاتِهِ, what is كِتَابٌ?",
          "options": [
            "the اِسْمُ كَانَ, delayed after its fronted خَبَرٌ مَعَهُ",
            "the خَبَرُ كَانَ",
            "the فَاعِلٌ of يَنْبَغِيْ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 0,
          "explanation": "مَعَهُ is the fronted خَبَرُ كَانَ and كِتَابٌ its delayed اِسْم: 'that a book be with him at all times'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 3)",
          "kind": "mcq",
          "prompt": "Which of these sentences uses أَنَّ rather than أَنْ?",
          "options": [
            "يَجِبُ عَلَيْنَا أَنْ نَشْكُرَ اللهَ",
            "لَا يَجُوْزُ لِمُسْلِمٍ أَنْ يَلْعَنَ أَحَدًا",
            "يَظْهَرُ أَنَّ هٰذَا الطَّالِبَ يَطْلُبُ الْعِلْمَ",
            "يَنْبَغِيْ لِطَالِبِ عِلْمٍ أَنْ يَعْمَلَ بِعِلْمِهِ"
          ],
          "correct": 2,
          "explanation": "أَنَّ is followed by a noun in the مَنْصُوْب state; أَنْ is followed by a مُضَارِع verb."
        },
        {
          "title": "to please, delight",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to please, delight\"?",
          "options": [
            "أَعْجَبَ يُعْجِبُ",
            "اِنْبَغَى يَنْبَغِيْ",
            "سَرَّ يَسُرُّ",
            "وَجَبَ يَجِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to please, delight",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَعْجَبَ يُعْجِبُ mean?",
          "options": [
            "to please, delight",
            "to be suitable, appropriate, necessary",
            "to make happy",
            "to be compulsory"
          ],
          "correct": 0
        },
        {
          "title": "to please, delight (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَعْجَبَ يُعْجِبُ?",
          "options": [
            "إِعْجَابًا",
            "اِنْبِغَاءً",
            "سُرُوْرًا، مَسَرَّةً",
            "وُجُوْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to make angry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make angry\"?",
          "options": [
            "أَغْضَبَ يُغْضِبُ",
            "حَلَّ يَحِلُّ",
            "ظَهَرَ يَظْهَرُ",
            "لَهْوٌ"
          ],
          "correct": 0
        },
        {
          "title": "to make angry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَغْضَبَ يُغْضِبُ mean?",
          "options": [
            "to make angry",
            "to be permissible",
            "to become apparent",
            "futile activity"
          ],
          "correct": 0
        },
        {
          "title": "to make angry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَغْضَبَ يُغْضِبُ?",
          "options": [
            "إِغْضَابًا",
            "حَلَالًا",
            "ظُهُوْرًا",
            "إِعْجَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to be possible",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be possible\"?",
          "options": [
            "أَمْكَنَ يُمْكِنُ",
            "سَرَّ يَسُرُّ",
            "وَجَبَ يَجِبُ",
            "مَعْصِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be possible",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمْكَنَ يُمْكِنُ mean?",
          "options": [
            "to be possible",
            "to make happy",
            "to be compulsory",
            "disobedience, sin"
          ],
          "correct": 0
        },
        {
          "title": "to be possible (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَمْكَنَ يُمْكِنُ?",
          "options": [
            "إِمْكَانًا",
            "سُرُوْرًا، مَسَرَّةً",
            "وُجُوْبًا",
            "إِغْضَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to be suitable, appropriate, necessary",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be suitable, appropriate, necessary\"?",
          "options": [
            "اِنْبَغَى يَنْبَغِيْ",
            "ظَهَرَ يَظْهَرُ",
            "لَهْوٌ",
            "فَصْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be suitable, appropriate, necessary",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْبَغَى يَنْبَغِيْ mean?",
          "options": [
            "to be suitable, appropriate, necessary",
            "to become apparent",
            "futile activity",
            "class, classroom"
          ],
          "correct": 0
        },
        {
          "title": "to be suitable, appropriate, necessary (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْبَغَى يَنْبَغِيْ?",
          "options": [
            "اِنْبِغَاءً",
            "ظُهُوْرًا",
            "إِعْجَابًا",
            "إِمْكَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be permissible",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be permissible\"?",
          "options": [
            "حَلَّ يَحِلُّ",
            "وَجَبَ يَجِبُ",
            "مَعْصِيَةٌ",
            "إِذْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be permissible",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَلَّ يَحِلُّ mean?",
          "options": [
            "to be permissible",
            "to be compulsory",
            "disobedience, sin",
            "permission"
          ],
          "correct": 0
        },
        {
          "title": "to be permissible (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَلَّ يَحِلُّ?",
          "options": [
            "حَلَالًا",
            "وُجُوْبًا",
            "إِغْضَابًا",
            "اِنْبِغَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to make happy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make happy\"?",
          "options": [
            "سَرَّ يَسُرُّ",
            "لَهْوٌ",
            "فَصْلٌ",
            "أَعْجَبَ يُعْجِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to make happy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَرَّ يَسُرُّ mean?",
          "options": [
            "to make happy",
            "futile activity",
            "class, classroom",
            "to please, delight"
          ],
          "correct": 0
        },
        {
          "title": "to make happy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَرَّ يَسُرُّ?",
          "options": [
            "سُرُوْرًا، مَسَرَّةً",
            "إِعْجَابًا",
            "إِمْكَانًا",
            "حَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to become apparent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to become apparent\"?",
          "options": [
            "ظَهَرَ يَظْهَرُ",
            "مَعْصِيَةٌ",
            "إِذْنٌ",
            "أَغْضَبَ يُغْضِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to become apparent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظَهَرَ يَظْهَرُ mean?",
          "options": [
            "to become apparent",
            "disobedience, sin",
            "permission",
            "to make angry"
          ],
          "correct": 0
        },
        {
          "title": "to become apparent (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ظَهَرَ يَظْهَرُ?",
          "options": [
            "ظُهُوْرًا",
            "إِغْضَابًا",
            "اِنْبِغَاءً",
            "سُرُوْرًا، مَسَرَّةً"
          ],
          "correct": 0
        },
        {
          "title": "to be compulsory",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be compulsory\"?",
          "options": [
            "وَجَبَ يَجِبُ",
            "فَصْلٌ",
            "أَعْجَبَ يُعْجِبُ",
            "أَمْكَنَ يُمْكِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to be compulsory",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَجَبَ يَجِبُ mean?",
          "options": [
            "to be compulsory",
            "class, classroom",
            "to please, delight",
            "to be possible"
          ],
          "correct": 0
        },
        {
          "title": "to be compulsory (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَجَبَ يَجِبُ?",
          "options": [
            "وُجُوْبًا",
            "إِمْكَانًا",
            "حَلَالًا",
            "ظُهُوْرًا"
          ],
          "correct": 0
        },
        {
          "title": "futile activity",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"futile activity\"?",
          "options": [
            "لَهْوٌ",
            "إِذْنٌ",
            "أَغْضَبَ يُغْضِبُ",
            "اِنْبَغَى يَنْبَغِيْ"
          ],
          "correct": 0
        },
        {
          "title": "futile activity",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَهْوٌ mean?",
          "options": [
            "futile activity",
            "permission",
            "to make angry",
            "to be suitable, appropriate, necessary"
          ],
          "correct": 0
        },
        {
          "title": "futile activity (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لَهْوٌ?",
          "options": [
            "—",
            "فُصُوْلٌ",
            "مَعَاصِيْ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "disobedience, sin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"disobedience, sin\"?",
          "options": [
            "مَعْصِيَةٌ",
            "أَعْجَبَ يُعْجِبُ",
            "أَمْكَنَ يُمْكِنُ",
            "حَلَّ يَحِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "disobedience, sin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَعْصِيَةٌ mean?",
          "options": [
            "disobedience, sin",
            "to please, delight",
            "to be possible",
            "to be permissible"
          ],
          "correct": 0
        },
        {
          "title": "disobedience, sin (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَعْصِيَةٌ?",
          "options": [
            "مَعَاصِيْ",
            "—",
            "فُصُوْلٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "class, classroom",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"class, classroom\"?",
          "options": [
            "فَصْلٌ",
            "أَغْضَبَ يُغْضِبُ",
            "اِنْبَغَى يَنْبَغِيْ",
            "سَرَّ يَسُرُّ"
          ],
          "correct": 0
        },
        {
          "title": "class, classroom",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَصْلٌ mean?",
          "options": [
            "class, classroom",
            "to make angry",
            "to be suitable, appropriate, necessary",
            "to make happy"
          ],
          "correct": 0
        },
        {
          "title": "class, classroom (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَصْلٌ?",
          "options": [
            "فُصُوْلٌ",
            "—",
            "—",
            "مَعَاصِيْ"
          ],
          "correct": 0
        },
        {
          "title": "permission",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"permission\"?",
          "options": [
            "إِذْنٌ",
            "أَمْكَنَ يُمْكِنُ",
            "حَلَّ يَحِلُّ",
            "ظَهَرَ يَظْهَرُ"
          ],
          "correct": 0
        },
        {
          "title": "permission",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِذْنٌ mean?",
          "options": [
            "permission",
            "to be possible",
            "to be permissible",
            "to become apparent"
          ],
          "correct": 0
        },
        {
          "title": "permission (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِذْنٌ?",
          "options": [
            "—",
            "مَعَاصِيْ",
            "—",
            "فُصُوْلٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "أنْ مفعولاً به",
      "subtitle": "Part 4: The مَفْعُوْلٌ بِهِ as an اِسْمٌ مُؤَوَّلٌ",
      "concepts": [
        {
          "heading": "The مَفْعُوْلٌ بِهِ as an اِسْمٌ مُؤَوَّلٌ",
          "lines": [
            {
              "html": "A مَفْعُوْلٌ بِهِ can occur as an اِسْمٌ مُؤَوَّلٌ. This can happen in two ways: 1. As an اِسْمٌ مُؤَوَّلٌ with أَنْ, and 2. As an اِسْمٌ مُؤَوَّلٌ with أَنَّ. This lesson takes the first; the second follows in the next lesson.",
              "list": false
            },
            {
              "html": "The مَفْعُوْلٌ بِهِ can occur as an اِسْمٌ مُؤَوَّلٌ with أَنْ. Since أَنْ is followed by a مُضَارِعٌ verb in the مَنْصُوْب state, this construction expresses something wished for, feared, hoped for, intended, commanded or forbidden — not something reported as fact.",
              "list": false
            },
            {
              "html": "أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ — I hope that Allah forgives me.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ",
                "translation": "I hope that Allah forgives me.",
                "cells": [
                  "أَرْجُوْ",
                  "أَنْ",
                  "يَغْفِرَ",
                  "اللهُ",
                  "لِيْ"
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
                        "end": 4,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
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
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                        "end": 4,
                        "role": "صِلَةٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The word 'that' can also be removed from the translation. Both renderings are correct English and the book gives both.",
              "list": false
            },
            {
              "html": "أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ — I hope Allah forgives me.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What kind of meaning does a مَفْعُوْلٌ بِهِ built as an اِسْمٌ مُؤَوَّلٌ with أَنْ typically express؟",
            "kind": "mcq",
            "options": [
              "Something wished for, feared, hoped for, intended, commanded or forbidden — not something reported as fact",
              "A plain statement of fact",
              "A question",
              "A negation"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Notes — the omitted حَرْفٌ جَارٌّ",
          "lines": [
            {
              "html": "An اِسْمٌ مُؤَوَّلٌ can also occur as the مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ — the object reached through a preposition. In this case, the حَرْفٌ جَارٌّ is commonly omitted.",
              "list": false
            },
            {
              "html": "The book's illustration is the verb أَمَرَ. It takes two objects, and the second occurs with the حَرْفٌ جَارٌّ بِ.",
              "list": false
            },
            {
              "html": "اَللهُ يَأْمُرُكُمْ بِالصِّدْقِ — Allah commands you to speak the truth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "However, when that second object occurs as an اِسْمٌ مُؤَوَّلٌ, the بِ is usually omitted.",
              "list": false
            },
            {
              "html": "اَللهُ يَأْمُرُكُمْ أَنْ تَصْدُقُوْا — Allah commands you to speak the truth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "This is worth watching for, because the missing preposition can make a verb look transitive when it is not. نَهَى, مَنَعَ, أَمَرَ and their like all behave this way: نَهَانَا اللهُ أَنْ نَعْبُدَ الْأَصْنَامَ stands for نَهَانَا عَنْ أَنْ نَعْبُدَ, 'Allah forbade us from worshipping the idols'.",
              "list": false
            },
            {
              "table": {
                "title": "With and without the اِسْمٌ مُؤَوَّلٌ",
                "headers": [
                  "Object type",
                  "Example",
                  "حَرْفٌ جَارٌّ"
                ],
                "rows": [
                  [
                    "ordinary noun",
                    "اَللهُ يَأْمُرُكُمْ بِالصِّدْقِ",
                    "present — بِ"
                  ],
                  [
                    "اِسْمٌ مُؤَوَّلٌ",
                    "اَللهُ يَأْمُرُكُمْ أَنْ تَصْدُقُوْا",
                    "usually omitted"
                  ]
                ]
              }
            },
            {
              "html": "أَلَّا is simply أَنْ joined to لَا, as in أَمَرَنَا أُسْتَاذُنَا أَلَّا نَتَكَلَّمَ — 'our teacher instructed us not to speak'. The verb after it stays مَنْصُوْبٌ, exactly as it would after a bare أَنْ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When an اِسْمٌ مُؤَوَّلٌ becomes the second object of a verb like أَمَرَ or نَهَى that normally reaches its object through a حَرْفٌ جَارٌّ, what usually happens to that حَرْفٌ جَارٌّ؟",
            "kind": "mcq",
            "options": [
              "It is usually omitted",
              "It is always kept",
              "It is replaced by a different preposition",
              "It turns into أَنَّ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 4 — أَنْ with a مَفْعُوْلٌ بِهِ",
        "rows": [
          {
            "label": "Two forms",
            "arabic": "أَنْ and أَنَّ",
            "meaning": "this lesson covers أَنْ; the next covers أَنَّ"
          },
          {
            "label": "Book example",
            "arabic": "أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ",
            "meaning": "'I hope that Allah forgives me'"
          },
          {
            "label": "'that' optional",
            "arabic": "—",
            "meaning": "'I hope Allah forgives me' is equally correct"
          },
          {
            "label": "Meaning of أَنْ",
            "arabic": "مُضَارِعٌ مَنْصُوْبٌ",
            "meaning": "something wished, feared, intended or commanded — not reported fact"
          },
          {
            "label": "Note",
            "arabic": "the حَرْفٌ جَارٌّ drops",
            "meaning": "يَأْمُرُكُمْ بِالصِّدْقِ but يَأْمُرُكُمْ أَنْ تَصْدُقُوْا"
          },
          {
            "label": "أَلَّا",
            "arabic": "أَنْ + لَا",
            "meaning": "'that … not', with the verb still مَنْصُوْبٌ"
          }
        ]
      },
      "quiz": [
        {
          "q": "In أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ, what is أَنْ يَغْفِرَ اللهُ لِيْ?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "The whole اِسْمٌ مُؤَوَّلٌ receives the action of أَرْجُوْ."
        },
        {
          "q": "In أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ, what is لِيْ labelled?",
          "options": [
            "حَالٌ",
            "نَعْتٌ",
            "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "It is an object reached through a preposition, inside the صِلَةٌ."
        },
        {
          "q": "What happens to the حَرْفٌ جَارٌّ when the object is an اِسْمٌ مُؤَوَّلٌ, as in يَأْمُرُكُمْ بِالصِّدْقِ ← يَأْمُرُكُمْ أَنْ تَصْدُقُوْا?",
          "options": [
            "It must be repeated",
            "It is commonly omitted",
            "It changes to مِنْ",
            "It moves after the verb"
          ],
          "correct": 1,
          "explanation": "يَأْمُرُكُمْ بِالصِّدْقِ becomes يَأْمُرُكُمْ أَنْ تَصْدُقُوْا, with بِ dropped."
        },
        {
          "q": "Which verb illustrates the omitted preposition?",
          "options": [
            "أَمَرَ",
            "رَجَا",
            "غَفَرَ",
            "صَدَقَ"
          ],
          "correct": 0,
          "explanation": "أَمَرَ takes two objects and the second normally carries بِ."
        },
        {
          "q": "أَلَّا نَتَكَلَّمَ is made up of…",
          "options": [
            "أَنَّ + لَا",
            "أَنْ + لَا",
            "أَلَا, a question particle",
            "إِلَّا"
          ],
          "correct": 1,
          "explanation": "أَنْ joins with لَا in writing; the verb stays مَنْصُوْبٌ."
        },
        {
          "q": "Why does أَنْ suit verbs of hoping, wanting and commanding?",
          "options": [
            "Because it is followed by a past-tense verb",
            "Because it reports facts",
            "Because the مُضَارِعٌ after it expresses something not yet realised",
            "Because it takes a noun in the مَنْصُوْب state"
          ],
          "correct": 2,
          "explanation": "أَنَّ reports information; أَنْ points at an act still to come about."
        }
      ],
      "bank": [
        {
          "title": "أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ",
          "translation": "I hope that Allah forgives me.",
          "cells": [
            "أَرْجُوْ",
            "أَنْ",
            "يَغْفِرَ",
            "اللهُ",
            "لِيْ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
          "title": "﴿يُرِيْدُوْنَ أَنْ يُبَدِّلُوْا كَلَامَ اللهِ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "﴿يُرِيْدُوْنَ أَنْ يُبَدِّلُوْا كَلَامَ اللهِ﴾",
          "translation": "They wish to change the speech of Allah.",
          "cells": [
            "يُرِيْدُوْنَ",
            "أَنْ",
            "يُبَدِّلُوْا",
            "كَلَامَ",
            "اللهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (وْ)"
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (وْ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ وَمُضَافٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَلَا تُحِبُّوْنَ أَنْ يَغْفِرَ اللهُ لَكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "أَلَا تُحِبُّوْنَ أَنْ يَغْفِرَ اللهُ لَكُمْ",
          "translation": "Do you not love that Allah should forgive you?",
          "cells": [
            "أَلَا",
            "تُحِبُّوْنَ",
            "أَنْ",
            "يَغْفِرَ",
            "اللهُ",
            "لَكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ اسْتِفْهَامٍ وَنَفْيٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وْ)"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "تَمْيِيْزٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَمَرَنَا أُسْتَاذُنَا أَلَّا نَتَكَلَّمَ أَثْنَاءَ الدَّرْسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "أَمَرَنَا أُسْتَاذُنَا أَلَّا نَتَكَلَّمَ أَثْنَاءَ الدَّرْسِ",
          "translation": "Our teacher instructed us not to speak during the lesson.",
          "cells": [
            "أَمَرَنَا",
            "أُسْتَاذُنَا",
            "أَلَّا",
            "نَتَكَلَّمَ",
            "أَثْنَاءَ الدَّرْسِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ وَحَرْفُ نَفْيٍ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "نَهَانَا اللهُ أَنْ نَعْبُدَ الْأَصْنَامَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "نَهَانَا اللهُ أَنْ نَعْبُدَ الْأَصْنَامَ",
          "translation": "Allah forbade us from worshipping the idols.",
          "cells": [
            "نَهَانَا",
            "اللهُ",
            "أَنْ",
            "نَعْبُدَ",
            "الْأَصْنَامَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَمَرَ اللهُ الْمُسْلِمِيْنَ أَنْ يَحُجُّوْا بَيْتَهُ الْكَعْبَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "أَمَرَ اللهُ الْمُسْلِمِيْنَ أَنْ يَحُجُّوْا بَيْتَهُ الْكَعْبَةَ",
          "translation": "Allah commanded the Muslims to perform Hajj to His House, the Ka'bah.",
          "cells": [
            "أَمَرَ",
            "اللهُ",
            "الْمُسْلِمِيْنَ",
            "أَنْ",
            "يَحُجُّوْا",
            "بَيْتَهُ",
            "الْكَعْبَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (وْ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "بَدَلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "مُضَافٌ إِلَيْهِ"
          ]
        },
        {
          "title": "لَنْ يَقْدِرَ أَحَدٌ غَيْرُ اللهِ أَنْ يَخْلُقَ شَيْئًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "لَنْ يَقْدِرَ أَحَدٌ غَيْرُ اللهِ أَنْ يَخْلُقَ شَيْئًا",
          "translation": "No one other than Allah will ever be able to create anything.",
          "cells": [
            "لَنْ",
            "يَقْدِرَ",
            "أَحَدٌ",
            "غَيْرُ اللهِ",
            "أَنْ",
            "يَخْلُقَ",
            "شَيْئًا"
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
                  "end": 3,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُسْتَثْنًى",
            "حَالٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَللهُ يَأْمُرُكُمْ أَنْ تَصْدُقُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "اَللهُ يَأْمُرُكُمْ أَنْ تَصْدُقُوْا",
          "translation": "Allah commands you to speak the truth.",
          "cells": [
            "اَللهُ",
            "يَأْمُرُكُمْ",
            "أَنْ",
            "تَصْدُقُوْا"
          ],
          "rows": [
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَرَادَ إِبْرَاهِيْمُ أَنْ يَمْنَعَ النَّاسَ مِنْ عِبَادَةِ الْأَصْنَامِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "أَرَادَ إِبْرَاهِيْمُ أَنْ يَمْنَعَ النَّاسَ مِنْ عِبَادَةِ الْأَصْنَامِ",
          "translation": "Ibrahim wanted to stop the people from worshipping idols.",
          "cells": [
            "أَرَادَ",
            "إِبْرَاهِيْمُ",
            "أَنْ",
            "يَمْنَعَ",
            "النَّاسَ",
            "مِنْ عِبَادَةِ الْأَصْنَامِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَمَرَ اللهُ مُوْسَى وَأَخَاهُ هَارُوْنَ أَنْ يَذْهَبَا إِلَى فِرْعَوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 3, Part 4)",
          "sentence": "أَمَرَ اللهُ مُوْسَى وَأَخَاهُ هَارُوْنَ أَنْ يَذْهَبَا إِلَى فِرْعَوْنَ",
          "translation": "Allah commanded Musa and his brother Harun to go to Pharaoh.",
          "cells": [
            "أَمَرَ",
            "اللهُ",
            "مُوْسَى",
            "وَأَخَاهُ هَارُوْنَ",
            "أَنْ",
            "يَذْهَبَا",
            "إِلَى فِرْعَوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (ا)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In نَرْجُو أَنْ يَغْفِرَ اللهُ لَنَا ذُنُوْبَنَا كُلَّهَا, what is كُلَّهَا?",
          "options": [
            "بَدَلٌ",
            "تَأْكِيْدٌ of ذُنُوْبَنَا",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "كُلٌّ with a matching pronoun emphasises the noun before it: 'all our sins'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In لَنْ يَقْدِرَ أَحَدٌ غَيْرُ اللهِ أَنْ يَخْلُقَ شَيْئًا, what is غَيْرُ اللهِ?",
          "options": [
            "a مُسْتَثْنًى",
            "a نَعْتٌ of أَحَدٌ",
            "the فَاعِلٌ",
            "a بَدَلٌ from اللهِ"
          ],
          "correct": 1,
          "explanation": "It describes أَحَدٌ and follows it in the مَرْفُوْع state: 'anyone other than Allah'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In نَهَانَا اللهُ أَنْ نَعْبُدَ الْأَصْنَامَ, which preposition has been omitted before أَنْ?",
          "options": [
            "بِ",
            "عَنْ",
            "إِلَى",
            "مِنْ"
          ],
          "correct": 1,
          "explanation": "نَهَى … عَنْ is the full form; the عَنْ drops before an اِسْمٌ مُؤَوَّلٌ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In أَمَرَ اللهُ الْمُسْلِمِيْنَ أَنْ يَحُجُّوْا بَيْتَهُ الْكَعْبَةَ, what is الْكَعْبَةَ?",
          "options": [
            "نَعْتٌ",
            "بَدَلٌ from بَيْتَهُ",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ بِهِ ثَانٍ"
          ],
          "correct": 1,
          "explanation": "It names the same thing again more precisely and takes the same case."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In أَرَادَ إِبْرَاهِيْمُ ﷺ أَنْ يَمْنَعَ النَّاسَ مِنْ عِبَادَةِ الْأَصْنَامِ, why is مِنْ kept here?",
          "options": [
            "Because إِبْرَاهِيْمُ is a proper noun",
            "Because عِبَادَةِ is an ordinary noun, not an اِسْمٌ مُؤَوَّلٌ",
            "Because مَنَعَ always keeps مِنْ",
            "Because the sentence is affirmative"
          ],
          "correct": 1,
          "explanation": "The preposition is dropped only when the object it governs becomes an اِسْمٌ مُؤَوَّلٌ."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In ﴿إِنِّيْ أَخَافُ أَنْ يُكَذِّبُوْنِ﴾, what is the نِ at the end?",
          "options": [
            "نُوْنُ النِّسْوَةِ",
            "نُوْنُ الْإِعْرَابِ",
            "نُوْنُ الْوِقَايَةِ with an omitted يَاء object pronoun",
            "part of the root"
          ],
          "correct": 2,
          "explanation": "The full form is يُكَذِّبُوْنِيْ; the protective nūn remains and the yā' is dropped: 'that they will deny me'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In تَطْلُبُ الْأُمُّ مِنَ الْأَوْلَادِ كُلِّهِمْ أَنْ يَسْتَيْقِظُوْا قَبْلَ الْفَجْرِ, what is كُلِّهِمْ?",
          "options": [
            "the فَاعِلٌ",
            "a تَأْكِيْدٌ of الْأَوْلَادِ, matching it in the مَجْرُوْر state",
            "a بَدَلٌ from الْأُمُّ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "The emphasis word follows its noun in case: 'from all the children'."
        },
        {
          "title": "Book Exercise 1 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In أَمَرَ اللهُ مُوْسَى وَأَخَاهُ هَارُوْنَ ﷺ أَنْ يَذْهَبَا إِلَى فِرْعَوْنَ, what does the dual ending on يَذْهَبَا reflect?",
          "options": [
            "That أَنْ is dual",
            "That the two commanded persons, Musa and Harun, are the doers",
            "That فِرْعَوْنَ is dual",
            "That أَمَرَ has two objects"
          ],
          "correct": 1,
          "explanation": "The صِلَةٌ carries its own فَاعِلٌ — here the alif of the dual referring to both prophets."
        },
        {
          "title": "to refuse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to refuse\"?",
          "options": [
            "أَبَى يَأْبَى",
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِعْتَقَدَ يَعْتَقِدُ",
            "تَمَنَّى يَتَمَنَّى"
          ],
          "correct": 0
        },
        {
          "title": "to refuse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبَى يَأْبَى mean?",
          "options": [
            "to refuse",
            "to be able to",
            "to believe",
            "to desire"
          ],
          "correct": 0
        },
        {
          "title": "to refuse (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبَى يَأْبَى?",
          "options": [
            "إِبَاءً",
            "اِسْتِطَاعَةً",
            "اِعْتِقَادًا",
            "تَمَنِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to intend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to intend\"?",
          "options": [
            "أَرَادَ يُرِيْدُ",
            "أَشْهَدَ يُشْهِدُ",
            "بَشَّرَ يُبَشِّرُ",
            "دَرَى يَدْرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to intend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرَادَ يُرِيْدُ mean?",
          "options": [
            "to intend",
            "to make witness",
            "to give glad tidings",
            "to know"
          ],
          "correct": 0
        },
        {
          "title": "to intend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَرَادَ يُرِيْدُ?",
          "options": [
            "إِرَادَةً",
            "إِشْهَادًا",
            "تَبْشِيْرًا",
            "دِرَايَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be ashamed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be ashamed\"?",
          "options": [
            "اِسْتَحْيَى يَسْتَحْيِيْ",
            "اِعْتَقَدَ يَعْتَقِدُ",
            "تَمَنَّى يَتَمَنَّى",
            "شَهِدَ يَشْهَدُ"
          ],
          "correct": 0
        },
        {
          "title": "to be ashamed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَحْيَى يَسْتَحْيِيْ mean?",
          "options": [
            "to be ashamed",
            "to believe",
            "to desire",
            "to testify, witness"
          ],
          "correct": 0
        },
        {
          "title": "to be ashamed (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَحْيَى يَسْتَحْيِيْ?",
          "options": [
            "اِسْتِحْيَاءً",
            "اِعْتِقَادًا",
            "تَمَنِّيًا",
            "شَهَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be able to",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be able to\"?",
          "options": [
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "بَشَّرَ يُبَشِّرُ",
            "دَرَى يَدْرِيْ",
            "قَدَرَ يَقْدِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be able to",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَطَاعَ يَسْتَطِيْعُ mean?",
          "options": [
            "to be able to",
            "to give glad tidings",
            "to know",
            "to be able to"
          ],
          "correct": 0
        },
        {
          "title": "to be able to (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَطَاعَ يَسْتَطِيْعُ?",
          "options": [
            "اِسْتِطَاعَةً",
            "تَبْشِيْرًا",
            "دِرَايَةً",
            "قُدْرَةً"
          ],
          "correct": 0
        },
        {
          "title": "to make witness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make witness\"?",
          "options": [
            "أَشْهَدَ يُشْهِدُ",
            "تَمَنَّى يَتَمَنَّى",
            "شَهِدَ يَشْهَدُ",
            "كَرِهَ يَكْرَهُ"
          ],
          "correct": 0
        },
        {
          "title": "to make witness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَشْهَدَ يُشْهِدُ mean?",
          "options": [
            "to make witness",
            "to desire",
            "to testify, witness",
            "to dislike"
          ],
          "correct": 0
        },
        {
          "title": "to make witness (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَشْهَدَ يُشْهِدُ?",
          "options": [
            "إِشْهَادًا",
            "تَمَنِّيًا",
            "شَهَادَةً",
            "كَرَاهَةً"
          ],
          "correct": 0
        },
        {
          "title": "to believe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to believe\"?",
          "options": [
            "اِعْتَقَدَ يَعْتَقِدُ",
            "دَرَى يَدْرِيْ",
            "قَدَرَ يَقْدِرُ",
            "مَنَعَ يَمْنَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to believe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِعْتَقَدَ يَعْتَقِدُ mean?",
          "options": [
            "to believe",
            "to know",
            "to be able to",
            "to stop, prohibit, forbid"
          ],
          "correct": 0
        },
        {
          "title": "to believe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِعْتَقَدَ يَعْتَقِدُ?",
          "options": [
            "اِعْتِقَادًا",
            "دِرَايَةً",
            "قُدْرَةً",
            "مَنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to give glad tidings",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give glad tidings\"?",
          "options": [
            "بَشَّرَ يُبَشِّرُ",
            "شَهِدَ يَشْهَدُ",
            "كَرِهَ يَكْرَهُ",
            "نَهَى يَنْهَى"
          ],
          "correct": 0
        },
        {
          "title": "to give glad tidings",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَشَّرَ يُبَشِّرُ mean?",
          "options": [
            "to give glad tidings",
            "to testify, witness",
            "to dislike",
            "to prohibit"
          ],
          "correct": 0
        },
        {
          "title": "to give glad tidings (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَشَّرَ يُبَشِّرُ?",
          "options": [
            "تَبْشِيْرًا",
            "شَهَادَةً",
            "كَرَاهَةً",
            "نَهْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to desire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to desire\"?",
          "options": [
            "تَمَنَّى يَتَمَنَّى",
            "قَدَرَ يَقْدِرُ",
            "مَنَعَ يَمْنَعُ",
            "أَبَى يَأْبَى"
          ],
          "correct": 0
        },
        {
          "title": "to desire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَمَنَّى يَتَمَنَّى mean?",
          "options": [
            "to desire",
            "to be able to",
            "to stop, prohibit, forbid",
            "to refuse"
          ],
          "correct": 0
        },
        {
          "title": "to desire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَمَنَّى يَتَمَنَّى?",
          "options": [
            "تَمَنِّيًا",
            "قُدْرَةً",
            "مَنْعًا",
            "إِبَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to know",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to know\"?",
          "options": [
            "دَرَى يَدْرِيْ",
            "كَرِهَ يَكْرَهُ",
            "نَهَى يَنْهَى",
            "أَرَادَ يُرِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to know",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَرَى يَدْرِيْ mean?",
          "options": [
            "to know",
            "to dislike",
            "to prohibit",
            "to intend"
          ],
          "correct": 0
        },
        {
          "title": "to know (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَرَى يَدْرِيْ?",
          "options": [
            "دِرَايَةً",
            "كَرَاهَةً",
            "نَهْيًا",
            "إِرَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to testify, witness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to testify, witness\"?",
          "options": [
            "شَهِدَ يَشْهَدُ",
            "مَنَعَ يَمْنَعُ",
            "أَبَى يَأْبَى",
            "اِسْتَحْيَى يَسْتَحْيِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to testify, witness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَهِدَ يَشْهَدُ mean?",
          "options": [
            "to testify, witness",
            "to stop, prohibit, forbid",
            "to refuse",
            "to be ashamed"
          ],
          "correct": 0
        },
        {
          "title": "to testify, witness (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَهِدَ يَشْهَدُ?",
          "options": [
            "شَهَادَةً",
            "مَنْعًا",
            "إِبَاءً",
            "اِسْتِحْيَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be able to",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be able to\"?",
          "options": [
            "قَدَرَ يَقْدِرُ",
            "نَهَى يَنْهَى",
            "أَرَادَ يُرِيْدُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "to be able to",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَدَرَ يَقْدِرُ mean?",
          "options": [
            "to be able to",
            "to prohibit",
            "to intend",
            "to be able to"
          ],
          "correct": 0
        },
        {
          "title": "to be able to (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَدَرَ يَقْدِرُ?",
          "options": [
            "قُدْرَةً",
            "نَهْيًا",
            "إِرَادَةً",
            "اِسْتِطَاعَةً"
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
            "أَبَى يَأْبَى",
            "اِسْتَحْيَى يَسْتَحْيِيْ",
            "أَشْهَدَ يُشْهِدُ"
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
            "to refuse",
            "to be ashamed",
            "to make witness"
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
            "إِبَاءً",
            "اِسْتِحْيَاءً",
            "إِشْهَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to stop, prohibit, forbid",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to stop, prohibit, forbid\"?",
          "options": [
            "مَنَعَ يَمْنَعُ",
            "أَرَادَ يُرِيْدُ",
            "اِسْتَطَاعَ يَسْتَطِيْعُ",
            "اِعْتَقَدَ يَعْتَقِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to stop, prohibit, forbid",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَنَعَ يَمْنَعُ mean?",
          "options": [
            "to stop, prohibit, forbid",
            "to intend",
            "to be able to",
            "to believe"
          ],
          "correct": 0
        },
        {
          "title": "to stop, prohibit, forbid (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَنَعَ يَمْنَعُ?",
          "options": [
            "مَنْعًا",
            "إِرَادَةً",
            "اِسْتِطَاعَةً",
            "اِعْتِقَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to prohibit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prohibit\"?",
          "options": [
            "نَهَى يَنْهَى",
            "اِسْتَحْيَى يَسْتَحْيِيْ",
            "أَشْهَدَ يُشْهِدُ",
            "بَشَّرَ يُبَشِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to prohibit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَهَى يَنْهَى mean?",
          "options": [
            "to prohibit",
            "to be ashamed",
            "to make witness",
            "to give glad tidings"
          ],
          "correct": 0
        },
        {
          "title": "to prohibit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَهَى يَنْهَى?",
          "options": [
            "نَهْيًا",
            "اِسْتِحْيَاءً",
            "إِشْهَادًا",
            "تَبْشِيْرًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "أنّ مفعولاً به",
      "subtitle": "Part 4: The مَفْعُوْلٌ بِهِ as an اِسْمٌ مُؤَوَّلٌ",
      "concepts": [
        {
          "heading": "أَنَّ with a مَفْعُوْلٌ بِهِ",
          "lines": [
            {
              "html": "The مَفْعُوْلٌ بِهِ can occur as an اِسْمٌ مُؤَوَّلٌ with أَنَّ. This is used with verbs which have a meaning of information or knowledge, and whose مَفْعُوْلٌ بِهِ is in the indicative mood — that is, whose object is a statement of fact rather than an act still to be brought about.",
              "list": false
            },
            {
              "html": "يَعْلَمُوْنَ أَنَّ اللهَ رَبُّهُمْ — They know that Allah is their Lord.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَعْلَمُوْنَ أَنَّ اللهَ رَبُّهُمْ",
                "translation": "They know that Allah is their Lord.",
                "cells": [
                  "يَعْلَمُوْنَ",
                  "أَنَّ",
                  "اللهَ",
                  "رَبُّهُمْ"
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
                        "end": 3,
                        "role": "مَفْعُوْلٌ بِهِ"
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
                ]
              }
            },
            {
              "html": "This is the natural companion of the previous lesson. أَنْ takes a مُضَارِعٌ verb and reports something wanted, hoped for or commanded; أَنَّ takes a noun in the مَنْصُوْب state and reports something known, believed, seen, heard, remembered or forgotten. Which one a verb takes follows from what the verb means.",
              "list": false
            },
            {
              "table": {
                "title": "أَنْ and أَنَّ compared as مَفْعُوْلٌ بِهِ",
                "headers": [
                  "",
                  "أَنْ",
                  "أَنَّ"
                ],
                "rows": [
                  [
                    "Followed by",
                    "a مُضَارِعٌ verb, مَنْصُوْبٌ",
                    "a noun in the مَنْصُوْب state, then its خَبَرٌ"
                  ],
                  [
                    "Verb types",
                    "hoping, wanting, fearing, commanding, forbidding",
                    "knowing, believing, seeing, hearing, remembering, forgetting"
                  ],
                  [
                    "Reports",
                    "something not yet realised",
                    "a statement of fact"
                  ],
                  [
                    "Example",
                    "أَرْجُوْ أَنْ يَغْفِرَ اللهُ لِيْ",
                    "يَعْلَمُوْنَ أَنَّ اللهَ رَبُّهُمْ"
                  ],
                  [
                    "English",
                    "'I hope that Allah forgives me'",
                    "'They know that Allah is their Lord'"
                  ]
                ]
              }
            },
            {
              "html": "With أَنَّ, the English 'that' is usually kept, because dropping it can obscure where the reported statement begins. With أَنْ it may be dropped freely, as the previous lesson showed.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What kind of verbs take أَنَّ (rather than أَنْ) when their مَفْعُوْلٌ بِهِ is an اِسْمٌ مُؤَوَّلٌ؟",
            "kind": "mcq",
            "options": [
              "Verbs of knowing, believing, seeing, hearing, remembering or forgetting — reporting a statement of fact",
              "Verbs of hoping, wanting or fearing",
              "Only the verb قَالَ",
              "Only imperative verbs"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Quotation with رَوَى",
          "lines": [
            {
              "html": "The quotation of the verb رَوَى يَرْوِيْ رِوَايَةً — to narrate — can be followed by an اِسْمٌ مُؤَوَّلٌ with أَنَّ, which becomes its quotation. The person from whom the narration is transmitted comes with عَنْ.",
              "list": false
            },
            {
              "html": "رَوَى الْإِمَامُ مُسْلِمٌ عَنْ أَبِيْ مَالِكٍ أَنَّ رَسُوْلَ اللهِ ﷺ قَالَ: «اَلصَّلَاةُ نُوْرٌ» — Imam Muslim narrates from Abu Malik that the Messenger of Allah ﷺ said: Salah is light.",
              "list": true,
              "bullet": true
            },
            {
              "html": "It is common for the verb and subject to be removed, leaving the chain to begin directly with عَنْ.",
              "list": false
            },
            {
              "html": "عَنْ أَبِيْ مَالِكٍ أَنَّ رَسُوْلَ اللهِ ﷺ قَالَ: «اَلصَّلَاةُ نُوْرٌ» — (It is narrated) from Abu Malik that the Messenger of Allah ﷺ said: Salah is light.",
              "list": true,
              "bullet": true
            },
            {
              "html": "This is why so many ḥadīth begin with the bare word عَنْ. Nothing is missing grammatically that the reader cannot supply: رَوَى فُلَانٌ is understood, and the English rendering restores it as '(it is narrated)'.",
              "list": false
            },
            {
              "html": "Notice the layering in the full form. أَنَّ رَسُوْلَ اللهِ قَالَ is the مَفْعُوْلٌ بِهِ of رَوَى; within it, رَسُوْلَ اللهِ is the اِسْمُ أَنَّ and the sentence قَالَ … is its خَبَرٌ; and within that, the words in quotation marks are the quotation of قَالَ. Three levels, each a slot inside the one above.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In hadith chains that begin with a bare عَنْ, what has typically been omitted؟",
            "kind": "mcq",
            "options": [
              "The verb رَوَى and its subject (e.g. 'so-and-so narrated'), understood from context",
              "The whole أَنَّ clause",
              "The name of the narrator",
              "Nothing — the sentence is simply incomplete"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "أَنَّ as a مَفْعُوْلٌ بِهِ, and quotation with رَوَى",
        "rows": [
          {
            "label": "Used with",
            "arabic": "verbs of information or knowledge",
            "meaning": "عَلِمَ, دَرَى, رَأَى, سَمِعَ, نَسِيَ, اِعْتَقَدَ, شَهِدَ, ذَكَرَ"
          },
          {
            "label": "Book example",
            "arabic": "يَعْلَمُوْنَ أَنَّ اللهَ رَبُّهُمْ",
            "meaning": "'They know that Allah is their Lord'"
          },
          {
            "label": "Structure",
            "arabic": "أَنَّ + اِسْمٌ مَنْصُوْبٌ + خَبَرٌ",
            "meaning": "the whole unit is one مَفْعُوْلٌ بِهِ"
          },
          {
            "label": "Versus أَنْ",
            "arabic": "أَنْ + مُضَارِعٌ مَنْصُوْبٌ",
            "meaning": "wishing and commanding rather than reporting"
          },
          {
            "label": "رَوَى",
            "arabic": "رَوَى … عَنْ … أَنَّ …",
            "meaning": "the narrator's source comes with عَنْ, the report with أَنَّ"
          },
          {
            "label": "Common shortening",
            "arabic": "عَنْ أَبِيْ مَالِكٍ أَنَّ …",
            "meaning": "the verb and its subject are dropped — '(it is narrated) from…'"
          }
        ]
      },
      "quiz": [
        {
          "q": "With which kind of verb is أَنَّ used as a مَفْعُوْلٌ بِهِ?",
          "options": [
            "verbs of wishing and commanding",
            "verbs of information or knowledge",
            "verbs of motion",
            "any transitive verb"
          ],
          "correct": 1,
          "explanation": "The object of such a verb is a reported fact, which is what أَنَّ introduces."
        },
        {
          "q": "In يَعْلَمُوْنَ أَنَّ اللهَ رَبُّهُمْ, what is رَبُّهُمْ?",
          "options": [
            "خَبَرُ أَنَّ",
            "اِسْمُ أَنَّ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ ثَانٍ"
          ],
          "correct": 0,
          "explanation": "اللهَ is the اِسْم in the مَنْصُوْب state and رَبُّهُمْ the مَرْفُوْع خَبَر."
        },
        {
          "q": "What is أَنَّ called in the tarkeeb?",
          "options": [
            "حَرْفٌ مَوْصُوْلٌ",
            "حَرْفُ نَصْبٍ",
            "حَرْفُ جَرٍّ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
          ],
          "correct": 3,
          "explanation": "أَنَّ belongs to the إِنَّ family, labelled حُرُوْفٌ مُشَبَّهَةٌ بِالْفِعْلِ."
        },
        {
          "q": "In a narration with رَوَى, what does عَنْ introduce?",
          "options": [
            "the content of the report",
            "the person from whom the narration is transmitted",
            "the book it was recorded in",
            "the time of the narration"
          ],
          "correct": 1,
          "explanation": "رَوَى الْإِمَامُ مُسْلِمٌ عَنْ أَبِيْ مَالِكٍ — the source comes with عَنْ, the report with أَنَّ."
        },
        {
          "q": "Why do many narrations begin simply with عَنْ?",
          "options": [
            "Because عَنْ can mean 'that'",
            "Because the verb رَوَى and its subject are commonly removed",
            "Because أَنَّ has been dropped",
            "Because the report is a question"
          ],
          "correct": 1,
          "explanation": "The reader supplies رَوَى فُلَانٌ; English restores it as '(it is narrated)'."
        },
        {
          "q": "Which sentence would require أَنْ rather than أَنَّ?",
          "options": [
            "'I know that he came'",
            "'I heard that he came'",
            "'I want him to come'",
            "'I saw that he came'"
          ],
          "correct": 2,
          "explanation": "Wanting concerns something not yet realised, so أَنْ with a مُضَارِعٌ verb."
        }
      ],
      "bank": [
        {
          "title": "يَعْلَمُوْنَ أَنَّ اللهَ رَبُّهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "يَعْلَمُوْنَ أَنَّ اللهَ رَبُّهُمْ",
          "translation": "They know that Allah is their Lord.",
          "cells": [
            "يَعْلَمُوْنَ",
            "أَنَّ",
            "اللهَ",
            "رَبُّهُمْ"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "فَاعِلٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "أَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُ اللهِ",
          "translation": "I testify that Muhammad is the servant of Allah.",
          "cells": [
            "أَشْهَدُ",
            "أَنَّ",
            "مُحَمَّدًا",
            "عَبْدُ",
            "اللهِ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 4,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَعْتَقِدُ أَنَّ اللهَ يَقْدِرُ عَلَى كُلِّ شَيْءٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "أَعْتَقِدُ أَنَّ اللهَ يَقْدِرُ عَلَى كُلِّ شَيْءٍ",
          "translation": "I believe that Allah has power over everything.",
          "cells": [
            "أَعْتَقِدُ",
            "أَنَّ",
            "اللهَ",
            "يَقْدِرُ",
            "عَلَى كُلِّ شَيْءٍ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 4,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مَوْصُوْلٌ",
            "فَاعِلٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَلَا تَدْرُوْنَ أَنَّ اللهَ فَرَضَ عَلَيْكُمُ الْحَجَّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "أَلَا تَدْرُوْنَ أَنَّ اللهَ فَرَضَ عَلَيْكُمُ الْحَجَّ",
          "translation": "Do you not know that Allah has made Hajj obligatory upon you?",
          "cells": [
            "أَلَا",
            "تَدْرُوْنَ",
            "أَنَّ",
            "اللهَ",
            "فَرَضَ عَلَيْكُمُ",
            "الْحَجَّ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ اسْتِفْهَامٍ وَنَفْيٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "ذَكَرَتْ لِيْ أُمِّيْ أَنَّهَا رَأَتْ مُعَلِّمَتِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "ذَكَرَتْ لِيْ أُمِّيْ أَنَّهَا رَأَتْ مُعَلِّمَتِيْ",
          "translation": "My mother mentioned to me that she saw my teacher (f).",
          "cells": [
            "ذَكَرَتْ",
            "لِيْ",
            "أُمِّيْ",
            "أَنَّهَا",
            "رَأَتْ",
            "مُعَلِّمَتِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هَا)"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
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
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "نَعْتٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "رَأَيْتُ أَنَّ هٰذَا الطَّالِبَ يَحْضُرُ الدُّرُوْسَ كُلَّ يَوْمٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "رَأَيْتُ أَنَّ هٰذَا الطَّالِبَ يَحْضُرُ الدُّرُوْسَ كُلَّ يَوْمٍ",
          "translation": "I saw that this student attends the lessons every day.",
          "cells": [
            "رَأَيْتُ",
            "أَنَّ",
            "هٰذَا الطَّالِبَ",
            "يَحْضُرُ",
            "الدُّرُوْسَ",
            "كُلَّ يَوْمٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 1,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 5,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "هَلْ نَسِيْتَ أَنَّ هٰذَا الشَّهْرَ شَهْرُ رَمَضَانَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "هَلْ نَسِيْتَ أَنَّ هٰذَا الشَّهْرَ شَهْرُ رَمَضَانَ",
          "translation": "Have you forgotten that this month is the month of Ramadan?",
          "cells": [
            "هَلْ",
            "نَسِيْتَ",
            "أَنَّ",
            "هٰذَا الشَّهْرَ",
            "شَهْرُ",
            "رَمَضَانَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ اسْتِفْهَامٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَعْتٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَوْمَئِذٍ يَعْرِفُ النَّاسُ أَنَّ السَّاعَةَ لَا رَيْبَ فِيْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "يَوْمَئِذٍ يَعْرِفُ النَّاسُ أَنَّ السَّاعَةَ لَا رَيْبَ فِيْهَا",
          "translation": "On that day people will know that there is no doubt about the Hour.",
          "cells": [
            "يَوْمَئِذٍ",
            "يَعْرِفُ",
            "النَّاسُ",
            "أَنَّ",
            "السَّاعَةَ",
            "لَا رَيْبَ فِيْهَا"
          ],
          "rows": [
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
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "نَعْتٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "عَنْ أَبِيْ مَالِكٍ أَنَّ رَسُوْلَ اللهِ قَالَ: «اَلصَّلَاةُ نُوْرٌ»",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "عَنْ أَبِيْ مَالِكٍ أَنَّ رَسُوْلَ اللهِ قَالَ: «اَلصَّلَاةُ نُوْرٌ»",
          "translation": "(It is narrated) from Abu Malik that the Messenger of Allah said: Salah is light.",
          "cells": [
            "عَنْ أَبِيْ مَالِكٍ",
            "أَنَّ",
            "رَسُوْلَ اللهِ",
            "قَالَ",
            "اَلصَّلَاةُ نُوْرٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ (لِفِعْلٍ مَحْذُوْفٍ)"
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
                  "end": 4,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَقُوْلُ الْقَوْلِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "نَرَى أَنَّ كَثِيْرًا مِنَ النَّاسِ لَا يَشْكُرُوْنَ اللهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 3, Part 4)",
          "sentence": "نَرَى أَنَّ كَثِيْرًا مِنَ النَّاسِ لَا يَشْكُرُوْنَ اللهَ",
          "translation": "We see that many people do not thank Allah.",
          "cells": [
            "نَرَى",
            "أَنَّ",
            "كَثِيْرًا",
            "مِنَ النَّاسِ",
            "لَا يَشْكُرُوْنَ",
            "اللهَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 1,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "end": 3,
                  "role": "اِسْمُ أَنَّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "خَبَرُ أَنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (و)"
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
            "فَاعِلٌ",
            "تَمْيِيْزٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In أَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُ اللهِ وَرَسُوْلُهُ, what is مُحَمَّدًا?",
          "options": [
            "مَفْعُوْلٌ بِهِ of أَشْهَدُ",
            "اِسْمُ أَنَّ",
            "خَبَرُ أَنَّ",
            "بَدَلٌ"
          ],
          "correct": 1,
          "explanation": "The whole أَنَّ unit is the object of أَشْهَدُ; within it مُحَمَّدًا is the اِسْم."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In أَعْتَقِدُ أَنَّ اللهَ يَقْدِرُ عَلَى كُلِّ شَيْءٍ, the خَبَرُ أَنَّ is…",
          "options": [
            "a single noun",
            "a شِبْهُ جُمْلَةٍ",
            "a جُمْلَةٌ فِعْلِيَّةٌ — يَقْدِرُ عَلَى كُلِّ شَيْءٍ",
            "omitted"
          ],
          "correct": 2,
          "explanation": "The خَبَرٌ of أَنَّ may be a single word, a شِبْهُ جُمْلَةٍ or a whole sentence."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In ذَكَرَتْ لِيْ أُمِّيْ أَنَّهَا رَأَتْ مُعَلِّمَتِيْ, what is the هَا attached to أَنَّ?",
          "options": [
            "خَبَرُ أَنَّ",
            "اِسْمُ أَنَّ",
            "مَفْعُوْلٌ بِهِ",
            "مُضَافٌ إِلَيْهِ"
          ],
          "correct": 1,
          "explanation": "An attached pronoun after أَنَّ takes the place of the مَنْصُوْب noun."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In نَرَى أَنَّ كَثِيْرًا مِنَ النَّاسِ لَا يَشْكُرُوْنَ اللهَ, why is كَثِيْرًا مَنْصُوْبٌ?",
          "options": [
            "It is the مَفْعُوْلٌ بِهِ of نَرَى",
            "It is the اِسْمُ أَنَّ",
            "It is a حَالٌ",
            "It is a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "أَنَّ puts its noun into the مَنْصُوْب state; مِنَ النَّاسِ then specifies it."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In سَمِعْنَا أَنَّ بَعْضَ الْعُلَمَاءِ كَانُوْا لَا يَقْرَؤُوْنَ الْكُتُبَ إِلَّا مُتَوَضِّئِيْنَ, what is مُتَوَضِّئِيْنَ?",
          "options": [
            "نَعْتٌ of الْكُتُبَ",
            "a حَالٌ restricted by إِلَّا",
            "تَمْيِيْزٌ",
            "خَبَرُ كَانَ"
          ],
          "correct": 1,
          "explanation": "With لَا … إِلَّا the حَالٌ slot is the one being restricted: 'only while in a state of wudu'."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In يَوْمَئِذٍ يَعْرِفُ النَّاسُ أَنَّ السَّاعَةَ لَا رَيْبَ فِيْهَا, what is لَا رَيْبَ فِيْهَا?",
          "options": [
            "the اِسْمُ أَنَّ",
            "the خَبَرُ أَنَّ, a جُمْلَةٌ اسْمِيَّةٌ with لَا النَّافِيَةُ لِلْجِنْسِ",
            "a نَعْتٌ of السَّاعَةَ",
            "a separate sentence"
          ],
          "correct": 1,
          "explanation": "السَّاعَةَ is the اِسْم and the negating sentence 'there is no doubt about it' is its خَبَرٌ."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا أَحْمَدُ وَأَصْدِقَاؤُهُ يُسَافِرُوْنَ إِذْ عَلِمَ أَنَّ أُمَّهُ قَدْ مَرِضَتْ, what does إِذْ signal?",
          "options": [
            "a reported fact",
            "إِذْ الْفُجَائِيَّةُ — the sudden event answering بَيْنَمَا",
            "a time in the past",
            "a quotation"
          ],
          "correct": 1,
          "explanation": "بَيْنَمَا … إِذْ is the pairing studied in Section 1: 'while … suddenly'."
        },
        {
          "title": "Book Exercise 2 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "Which verb in Exercise 2 does NOT belong to the information-or-knowledge family?",
          "options": [
            "أَعْتَقِدُ",
            "نَسِيْتَ",
            "أَرَادَ",
            "سَمِعْنَا"
          ],
          "correct": 2,
          "explanation": "أَرَادَ concerns intention, so it takes أَنْ with a مُضَارِعٌ, not أَنَّ."
        },
        {
          "title": "to narrate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to narrate\"?",
          "options": [
            "رَوَى يَرْوِيْ",
            "ذَكَرَ يَذْكُرُ",
            "مَرِضَ يَمْرَضُ",
            "رَيْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to narrate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَوَى يَرْوِيْ mean?",
          "options": [
            "to narrate",
            "to mention",
            "to fall ill",
            "doubt"
          ],
          "correct": 0
        },
        {
          "title": "to narrate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَوَى يَرْوِيْ?",
          "options": [
            "رِوَايَةً",
            "ذِكْرًا",
            "مَرَضًا",
            "دَفْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to make obligatory",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make obligatory\"?",
          "options": [
            "فَرَضَ يَفْرِضُ",
            "نَسِيَ يَنْسَى",
            "تُرَابٌ",
            "اَلسَّاعَةُ"
          ],
          "correct": 0
        },
        {
          "title": "to make obligatory",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَرَضَ يَفْرِضُ mean?",
          "options": [
            "to make obligatory",
            "to forget",
            "soil, dust",
            "the Hour"
          ],
          "correct": 0
        },
        {
          "title": "to make obligatory (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَرَضَ يَفْرِضُ?",
          "options": [
            "فَرْضًا",
            "نِسْيَانًا",
            "رِوَايَةً",
            "ذِكْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to bury",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bury\"?",
          "options": [
            "دَفَنَ يَدْفِنُ",
            "مَرِضَ يَمْرَضُ",
            "رَيْبٌ",
            "آلَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to bury",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَفَنَ يَدْفِنُ mean?",
          "options": [
            "to bury",
            "to fall ill",
            "doubt",
            "favours, bounties"
          ],
          "correct": 0
        },
        {
          "title": "to bury (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَفَنَ يَدْفِنُ?",
          "options": [
            "دَفْنًا",
            "مَرَضًا",
            "فَرْضًا",
            "نِسْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to mention",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to mention\"?",
          "options": [
            "ذَكَرَ يَذْكُرُ",
            "تُرَابٌ",
            "اَلسَّاعَةُ",
            "مُتَوَضِّئٌ"
          ],
          "correct": 0
        },
        {
          "title": "to mention",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَكَرَ يَذْكُرُ mean?",
          "options": [
            "to mention",
            "soil, dust",
            "the Hour",
            "in a state of wudu"
          ],
          "correct": 0
        },
        {
          "title": "to mention (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَكَرَ يَذْكُرُ?",
          "options": [
            "ذِكْرًا",
            "رِوَايَةً",
            "دَفْنًا",
            "مَرَضًا"
          ],
          "correct": 0
        },
        {
          "title": "to forget",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forget\"?",
          "options": [
            "نَسِيَ يَنْسَى",
            "رَيْبٌ",
            "آلَاءٌ",
            "مُبَارَكٌ"
          ],
          "correct": 0
        },
        {
          "title": "to forget",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَسِيَ يَنْسَى mean?",
          "options": [
            "to forget",
            "doubt",
            "favours, bounties",
            "blessed"
          ],
          "correct": 0
        },
        {
          "title": "to forget (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَسِيَ يَنْسَى?",
          "options": [
            "نِسْيَانًا",
            "فَرْضًا",
            "ذِكْرًا",
            "رِوَايَةً"
          ],
          "correct": 0
        },
        {
          "title": "to fall ill",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fall ill\"?",
          "options": [
            "مَرِضَ يَمْرَضُ",
            "اَلسَّاعَةُ",
            "مُتَوَضِّئٌ",
            "رَوَى يَرْوِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to fall ill",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرِضَ يَمْرَضُ mean?",
          "options": [
            "to fall ill",
            "the Hour",
            "in a state of wudu",
            "to narrate"
          ],
          "correct": 0
        },
        {
          "title": "to fall ill (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَرِضَ يَمْرَضُ?",
          "options": [
            "مَرَضًا",
            "دَفْنًا",
            "نِسْيَانًا",
            "فَرْضًا"
          ],
          "correct": 0
        },
        {
          "title": "soil, dust",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"soil, dust\"?",
          "options": [
            "تُرَابٌ",
            "آلَاءٌ",
            "مُبَارَكٌ",
            "فَرَضَ يَفْرِضُ"
          ],
          "correct": 0
        },
        {
          "title": "soil, dust",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تُرَابٌ mean?",
          "options": [
            "soil, dust",
            "favours, bounties",
            "blessed",
            "to make obligatory"
          ],
          "correct": 0
        },
        {
          "title": "soil, dust (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تُرَابٌ?",
          "options": [
            "أَتْرِبَةٌ",
            "مُتَوَضِّئُوْنَ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "doubt",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"doubt\"?",
          "options": [
            "رَيْبٌ",
            "مُتَوَضِّئٌ",
            "رَوَى يَرْوِيْ",
            "دَفَنَ يَدْفِنُ"
          ],
          "correct": 0
        },
        {
          "title": "doubt",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَيْبٌ mean?",
          "options": [
            "doubt",
            "in a state of wudu",
            "to narrate",
            "to bury"
          ],
          "correct": 0
        },
        {
          "title": "doubt (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَيْبٌ?",
          "options": [
            "—",
            "—",
            "—",
            "مُتَوَضِّئُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "the Hour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the Hour\"?",
          "options": [
            "اَلسَّاعَةُ",
            "مُبَارَكٌ",
            "فَرَضَ يَفْرِضُ",
            "ذَكَرَ يَذْكُرُ"
          ],
          "correct": 0
        },
        {
          "title": "the Hour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اَلسَّاعَةُ mean?",
          "options": [
            "the Hour",
            "blessed",
            "to make obligatory",
            "to mention"
          ],
          "correct": 0
        },
        {
          "title": "the Hour (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of اَلسَّاعَةُ?",
          "options": [
            "—",
            "أَتْرِبَةٌ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "favours, bounties",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"favours, bounties\"?",
          "options": [
            "آلَاءٌ",
            "رَوَى يَرْوِيْ",
            "دَفَنَ يَدْفِنُ",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "favours, bounties",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آلَاءٌ mean?",
          "options": [
            "favours, bounties",
            "to narrate",
            "to bury",
            "to forget"
          ],
          "correct": 0
        },
        {
          "title": "favours, bounties (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of آلَاءٌ?",
          "options": [
            "—",
            "—",
            "مُتَوَضِّئُوْنَ",
            "أَتْرِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "in a state of wudu",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"in a state of wudu\"?",
          "options": [
            "مُتَوَضِّئٌ",
            "فَرَضَ يَفْرِضُ",
            "ذَكَرَ يَذْكُرُ",
            "مَرِضَ يَمْرَضُ"
          ],
          "correct": 0
        },
        {
          "title": "in a state of wudu",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُتَوَضِّئٌ mean?",
          "options": [
            "in a state of wudu",
            "to make obligatory",
            "to mention",
            "to fall ill"
          ],
          "correct": 0
        },
        {
          "title": "in a state of wudu (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُتَوَضِّئٌ?",
          "options": [
            "مُتَوَضِّئُوْنَ",
            "—",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "blessed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"blessed\"?",
          "options": [
            "مُبَارَكٌ",
            "دَفَنَ يَدْفِنُ",
            "نَسِيَ يَنْسَى",
            "تُرَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "blessed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُبَارَكٌ mean?",
          "options": [
            "blessed",
            "to bury",
            "to forget",
            "soil, dust"
          ],
          "correct": 0
        },
        {
          "title": "blessed (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُبَارَكٌ?",
          "options": [
            "—",
            "—",
            "أَتْرِبَةٌ",
            "—"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "أنْ الموصولة والتفسيرية",
      "subtitle": "Part 4: The مَفْعُوْلٌ بِهِ as an اِسْمٌ مُؤَوَّلٌ",
      "concepts": [
        {
          "heading": "Summary of Part 4",
          "lines": [
            {
              "html": "The book closes Part 4 with a short table summarising the مَفْعُوْلٌ بِهِ as an اِسْمٌ مُؤَوَّلٌ.",
              "list": false
            },
            {
              "table": {
                "title": "اِسْمٌ مُؤَوَّلٌ as a مَفْعُوْلٌ بِهِ",
                "headers": [
                  "With أَنَّ",
                  "With أَنْ"
                ],
                "rows": [
                  [
                    "… أَنَّهُ يَغْفِرُ الذُّنُوْبَ",
                    "… أَنْ يَغْفِرَ لِيْ"
                  ]
                ]
              }
            },
            {
              "html": "Note the difference in the verb after each. أَنَّ leaves يَغْفِرُ in its usual مَرْفُوْع form because the verb belongs to the خَبَرٌ of أَنَّ and is not governed by it. أَنْ pulls يَغْفِرَ into the مَنْصُوْب state, because أَنْ is عَامِلٌ — it governs what follows.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why does the verb after أَنَّ (e.g. يَغْفِرُ) stay مَرْفُوْعٌ, while the verb after أَنْ (e.g. يَغْفِرَ) becomes مَنْصُوْبٌ؟",
            "kind": "mcq",
            "options": [
              "The verb after أَنَّ belongs to its خَبَرٌ and isn't governed by أَنَّ, whereas أَنْ is عَامِلٌ and directly governs the following مُضَارِعٌ",
              "There is no real difference between the two",
              "أَنَّ always negates the following verb",
              "أَنْ never affects the following verb"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Differentiating between أَنْ الْمَوْصُوْلَةُ and أَنْ التَّفْسِيْرِيَّةُ",
          "lines": [
            {
              "html": "There is a second أَنْ which looks identical on the page but does an entirely different job. أَنْ التَّفْسِيْرِيَّةُ — the explanatory أَنْ — introduces the actual words of what was said, rather than forming an اِسْمٌ مُؤَوَّلٌ. It differs from the حَرْفٌ مَوْصُوْلٌ of أَنْ in a few ways.",
              "list": false
            },
            {
              "html": "a) أَنْ التَّفْسِيْرِيَّةُ is غَيْرُ عَامِلٍ and can precede a فِعْلٌ مَاضٍ, a فِعْلُ أَمْرٍ or a جُمْلَةٌ اسْمِيَّةٌ. أَنْ الْمَوْصُوْلَةُ is عَامِلٌ; it changes the following فِعْلٌ مُضَارِعٌ to the مَنْصُوْب state.",
              "list": false
            },
            {
              "html": "b) أَنْ التَّفْسِيْرِيَّةُ is not translated. أَنْ الْمَصْدَرِيَّةُ — another name for the مَوْصُوْلَة — is translated as an infinitive or a gerund.",
              "list": false
            },
            {
              "html": "نَادَتِ الْأُمُّ أَنِ اصْدُقْ — The mother called out: Speak the truth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "أَرَادَتِ الْأُمُّ أَنْ يَصْدُقَ الْوَلَدُ — The mother wanted the child to speak the truth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In the first, اصْدُقْ is a command and is not affected by أَنْ at all; the أَنْ is simply the hinge between the verb of calling and the words called out, and disappears in English behind a colon. In the second, يَصْدُقَ carries a fatḥah that only أَنْ can have put there, and the whole أَنْ clause becomes 'the child to speak the truth'.",
              "list": false
            },
            {
              "table": {
                "title": "The two أَنْ compared",
                "headers": [
                  "",
                  "مَوْصُوْلَةٌ",
                  "تَفْسِيْرِيَّةٌ"
                ],
                "rows": [
                  [
                    "Translation",
                    "Gerund / Infinitive",
                    "(Omitted)"
                  ],
                  [
                    "Following sentence",
                    "فِعْلٌ مُضَارِعٌ",
                    "جُمْلَةٌ اسْمِيَّةٌ / جُمْلَةٌ فِعْلِيَّةٌ"
                  ],
                  [
                    "Governance",
                    "عَامِلٌ",
                    "غَيْرُ عَامِلٍ"
                  ]
                ]
              }
            },
            {
              "html": "The kasrah on أَنِ in أَنِ اصْدُقْ is not a case ending — أَنْ is a حَرْفٌ and has none. It is there only to avoid two sukūns meeting when the following word begins with a hamzat al-waṣl.",
              "list": false
            },
            {
              "html": "In practice, the test that settles it fastest is the verb form. A مَاضٍ or an أَمْر after أَنْ can only be التَّفْسِيْرِيَّة, since الْمَوْصُوْلَة has nothing to govern in those forms. A مُضَارِع in the مَنْصُوْب state can only be الْمَوْصُوْلَة. The verb that introduces the clause helps too: verbs of calling out, revealing and writing take التَّفْسِيْرِيَّة, while verbs of wanting, commanding and hoping take الْمَوْصُوْلَة.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is the fastest test for telling أَنْ الْمَوْصُوْلَةُ apart from أَنْ التَّفْسِيْرِيَّةُ؟",
            "kind": "mcq",
            "options": [
              "The verb form after it: a مَاضٍ or أَمْر can only be التَّفْسِيْرِيَّة, while a مَنْصُوْب مُضَارِع can only be الْمَوْصُوْلَة",
              "Whether the sentence is a question",
              "The gender of the subject",
              "Whether the sentence is Qur'anic"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The two أَنْ",
        "rows": [
          {
            "label": "مَوْصُوْلَةٌ (مَصْدَرِيَّةٌ)",
            "arabic": "عَامِلٌ",
            "meaning": "puts the following مُضَارِع into the مَنْصُوْب state"
          },
          {
            "label": "تَفْسِيْرِيَّةٌ",
            "arabic": "غَيْرُ عَامِلٍ",
            "meaning": "changes nothing that follows it"
          },
          {
            "label": "What follows مَوْصُوْلَةٌ",
            "arabic": "فِعْلٌ مُضَارِعٌ",
            "meaning": "only that"
          },
          {
            "label": "What follows تَفْسِيْرِيَّةٌ",
            "arabic": "مَاضٍ, أَمْرٌ or a جُمْلَةٌ اسْمِيَّةٌ",
            "meaning": "a complete sentence of any kind"
          },
          {
            "label": "Translating مَوْصُوْلَةٌ",
            "arabic": "infinitive or gerund",
            "meaning": "'to speak the truth' / 'speaking the truth'"
          },
          {
            "label": "Translating تَفْسِيْرِيَّةٌ",
            "arabic": "omitted",
            "meaning": "'called out: Speak the truth'"
          },
          {
            "label": "Part 4 summary",
            "arabic": "أَنْ يَغْفِرَ لِيْ / أَنَّهُ يَغْفِرُ الذُّنُوْبَ",
            "meaning": "the two forms of the مُؤَوَّل object"
          }
        ]
      },
      "quiz": [
        {
          "q": "أَنْ التَّفْسِيْرِيَّةُ is…",
          "options": [
            "عَامِلٌ",
            "غَيْرُ عَامِلٍ",
            "a noun",
            "a حَرْفُ جَرٍّ"
          ],
          "correct": 1,
          "explanation": "It does not govern; the verb after it keeps whatever form it would have had anyway."
        },
        {
          "q": "Which can follow أَنْ التَّفْسِيْرِيَّةُ but not أَنْ الْمَوْصُوْلَةُ?",
          "options": [
            "a مُضَارِعٌ verb",
            "a فِعْلُ أَمْرٍ",
            "a مَصْدَرٌ",
            "a حَرْفٌ"
          ],
          "correct": 1,
          "explanation": "أَنْ الْمَوْصُوْلَةُ can only govern a مُضَارِع; a command or a past verb points to التَّفْسِيْرِيَّة."
        },
        {
          "q": "How is أَنْ التَّفْسِيْرِيَّةُ translated?",
          "options": [
            "as 'that'",
            "as an infinitive",
            "as a gerund",
            "it is not translated"
          ],
          "correct": 3,
          "explanation": "It disappears in English, usually behind a colon introducing the quoted words."
        },
        {
          "q": "What other name is given to أَنْ الْمَوْصُوْلَةُ?",
          "options": [
            "أَنْ الشَّرْطِيَّةُ",
            "أَنْ الْمَصْدَرِيَّةُ",
            "أَنْ الزَّائِدَةُ",
            "أَنْ النَّاصِبَةُ"
          ],
          "correct": 1,
          "explanation": "Because the clause it forms is equivalent in meaning to a مَصْدَرٌ."
        },
        {
          "q": "Why does أَنَّ leave يَغْفِرُ in the مَرْفُوْع state in أَنَّهُ يَغْفِرُ الذُّنُوْبَ?",
          "options": [
            "Because أَنَّ never governs",
            "Because the verb belongs to the خَبَرٌ of أَنَّ, not to أَنَّ itself",
            "Because الذُّنُوْبَ is مَنْصُوْبٌ",
            "Because the هُ is attached"
          ],
          "correct": 1,
          "explanation": "أَنَّ governs its اِسْم; the verb inside the خَبَرٌ is untouched."
        },
        {
          "q": "Why is أَنِ written with a kasrah in أَنِ اصْدُقْ?",
          "options": [
            "Because it is مَجْرُوْرٌ",
            "Because it is a noun here",
            "To avoid two sukūns meeting before a hamzat al-waṣl",
            "Because the following verb is a command"
          ],
          "correct": 2,
          "explanation": "It is a purely phonetic adjustment, not a case ending."
        }
      ],
      "bank": [
        {
          "title": "أَرَادَتِ الْأُمُّ أَنْ يَصْدُقَ الْوَلَدُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "أَرَادَتِ الْأُمُّ أَنْ يَصْدُقَ الْوَلَدُ",
          "translation": "The mother wanted the child to speak the truth.",
          "cells": [
            "أَرَادَتِ",
            "الْأُمُّ",
            "أَنْ",
            "يَصْدُقَ",
            "الْوَلَدُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
            "أَنْ التَّفْسِيْرِيَّةُ",
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "نَادَتِ الْأُمُّ أَنِ اصْدُقْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "نَادَتِ الْأُمُّ أَنِ اصْدُقْ",
          "translation": "The mother called out: Speak the truth.",
          "cells": [
            "نَادَتِ",
            "الْأُمُّ",
            "أَنِ",
            "اصْدُقْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَقُوْلُ الْقَوْلِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ"
          ]
        },
        {
          "title": "أَمَرَ اللهُ الْأَنْبِيَاءَ أَنْ يَعْبُدُوْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "أَمَرَ اللهُ الْأَنْبِيَاءَ أَنْ يَعْبُدُوْهُ",
          "translation": "Allah commanded the prophets to worship Him.",
          "cells": [
            "أَمَرَ",
            "اللهُ",
            "الْأَنْبِيَاءَ",
            "أَنْ",
            "يَعْبُدُوْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "أَنْ التَّفْسِيْرِيَّةُ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَوْحَى اللهُ إِلَى الْأَنْبِيَاءِ أَنِ اعْبُدُوْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "أَوْحَى اللهُ إِلَى الْأَنْبِيَاءِ أَنِ اعْبُدُوْنِيْ",
          "translation": "Allah revealed to the prophets: Worship Me.",
          "cells": [
            "أَوْحَى",
            "اللهُ",
            "إِلَى الْأَنْبِيَاءِ",
            "أَنِ",
            "اعْبُدُوْنِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَقُوْلُ الْقَوْلِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (وْ) وَمَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "خَبَرٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "نَادَى الْأَنْبِيَاءُ أَنْ لَا تَكْذِبُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "نَادَى الْأَنْبِيَاءُ أَنْ لَا تَكْذِبُوْا",
          "translation": "The prophets called out: Do not lie.",
          "cells": [
            "نَادَى",
            "الْأَنْبِيَاءُ",
            "أَنْ",
            "لَا",
            "تَكْذِبُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَقُوْلُ الْقَوْلِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ نَهْيٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (وْ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "مَفْعُوْلٌ بِهِ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "قَالَ الْأَنْبِيَاءُ لِلنَّاسِ لَا تَكْذِبُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "قَالَ الْأَنْبِيَاءُ لِلنَّاسِ لَا تَكْذِبُوْا",
          "translation": "The prophets said to the people: Do not lie.",
          "cells": [
            "قَالَ",
            "الْأَنْبِيَاءُ",
            "لِلنَّاسِ",
            "لَا تَكْذِبُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَقُوْلُ الْقَوْلِ"
                }
              ]
            }
          ],
          "distractors": [
            "أَنْ التَّفْسِيْرِيَّةُ",
            "حَرْفٌ مَوْصُوْلٌ",
            "صِلَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "نَهَى الْأَنْبِيَاءُ النَّاسَ أَنْ يَكْذِبُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "نَهَى الْأَنْبِيَاءُ النَّاسَ أَنْ يَكْذِبُوْا",
          "translation": "The prophets forbade the people from lying.",
          "cells": [
            "نَهَى",
            "الْأَنْبِيَاءُ",
            "النَّاسَ",
            "أَنْ",
            "يَكْذِبُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مَوْصُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "صِلَةٌ"
                }
              ]
            }
          ],
          "distractors": [
            "أَنْ التَّفْسِيْرِيَّةُ",
            "مَقُوْلُ الْقَوْلِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "قَالَ اللهُ لِلْأَنْبِيَاءِ اعْبُدُوْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 3, Part 4)",
          "sentence": "قَالَ اللهُ لِلْأَنْبِيَاءِ اعْبُدُوْنِيْ",
          "translation": "Allah said to the prophets: Worship Me.",
          "cells": [
            "قَالَ",
            "اللهُ",
            "لِلْأَنْبِيَاءِ",
            "اعْبُدُوْنِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَقُوْلُ الْقَوْلِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (وْ) وَمَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مَوْصُوْلٌ",
            "أَنْ التَّفْسِيْرِيَّةُ",
            "صِلَةٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In أَوْحَى اللهُ إِلَى الْأَنْبِيَاءِ أَنِ اعْبُدُوْنِيْ, which أَنْ is this?",
          "options": [
            "مَوْصُوْلَةٌ",
            "تَفْسِيْرِيَّةٌ",
            "شَرْطِيَّةٌ",
            "زَائِدَةٌ"
          ],
          "correct": 1,
          "explanation": "اعْبُدُوْنِيْ is a command, which أَنْ الْمَوْصُوْلَةُ could not govern."
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In أَمَرَ اللهُ الْأَنْبِيَاءَ أَنْ يَعْبُدُوْهُ, what shows that يَعْبُدُوْا is مَنْصُوْبٌ?",
          "options": [
            "the ḍammah on the last letter",
            "the dropped nūn of the plural ending",
            "the attached pronoun هُ",
            "nothing — it is مَرْفُوْعٌ"
          ],
          "correct": 1,
          "explanation": "The five verbs show نَصْب by dropping the nūn: يَعْبُدُوْنَ becomes يَعْبُدُوْا."
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "قَالَ اللهُ لِلْأَنْبِيَاءِ اعْبُدُوْنِيْ contains no أَنْ because…",
          "options": [
            "the quotation is a command",
            "قَالَ introduces its quotation directly, with no linking particle",
            "the أَنْ has been omitted for brevity",
            "لِلْأَنْبِيَاءِ takes its place"
          ],
          "correct": 1,
          "explanation": "قَالَ is the one verb of speech that never needs a particle before its quotation."
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "In نَهَى الْأَنْبِيَاءُ النَّاسَ أَنْ يَكْذِبُوْا, the أَنْ unit is…",
          "options": [
            "the مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ, with عَنْ omitted",
            "the فَاعِلٌ",
            "a تَفْسِيْرِيَّة clause",
            "a حَالٌ"
          ],
          "correct": 0,
          "explanation": "نَهَى … عَنْ is the full form, and the preposition drops before an اِسْمٌ مُؤَوَّلٌ."
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "نَادَى الْأَنْبِيَاءُ أَنْ لَا تَكْذِبُوْا and قَالَ الْأَنْبِيَاءُ لِلنَّاسِ لَا تَكْذِبُوْا differ in that…",
          "options": [
            "the first quotes and the second does not",
            "the first uses أَنْ التَّفْسِيْرِيَّةُ where the second needs no particle at all",
            "the first is a command and the second a statement",
            "the first is negated and the second is not"
          ],
          "correct": 1,
          "explanation": "Both quote a prohibition; only the verb of speech differs, and with it the need for أَنْ."
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "Which verb type most reliably signals أَنْ التَّفْسِيْرِيَّةُ?",
          "options": [
            "verbs of wanting and hoping",
            "verbs of calling out, revealing and writing",
            "verbs of knowledge",
            "verbs of motion"
          ],
          "correct": 1,
          "explanation": "Such verbs carry a sense of speech, and what follows أَنْ is the words themselves."
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "أَرَادَتِ الْأُمُّ أَنْ يَصْدُقَ الْوَلَدُ is rendered as…",
          "options": [
            "The mother wanted: the child spoke the truth",
            "The mother wanted the child to speak the truth",
            "The mother said to the child: speak the truth",
            "The mother's wish was the child"
          ],
          "correct": 1,
          "explanation": "أَنْ الْمَصْدَرِيَّةُ becomes an English infinitive, and الْوَلَدُ is the فَاعِلٌ inside the صِلَةٌ."
        },
        {
          "title": "Book Exercise 3 (Section 3, Part 4)",
          "kind": "mcq",
          "prompt": "What may follow أَنْ التَّفْسِيْرِيَّةُ?",
          "options": [
            "only a مُضَارِعٌ verb",
            "only a مَاضٍ verb",
            "a جُمْلَةٌ اسْمِيَّةٌ or a جُمْلَةٌ فِعْلِيَّةٌ",
            "only an اِسْمٌ"
          ],
          "correct": 2,
          "explanation": "It introduces a whole sentence of either type, since it governs nothing."
        },
        {
          "title": "to call out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call out\"?",
          "options": [
            "نَادَى يُنَادِيْ",
            "كَذَبَ يَكْذِبُ",
            "تَفْسِيْرِيَّةٌ",
            "أَوْحَى يُوْحِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to call out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَادَى يُنَادِيْ mean?",
          "options": [
            "to call out",
            "to lie",
            "explanatory",
            "to reveal, inspire"
          ],
          "correct": 0
        },
        {
          "title": "to call out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَادَى يُنَادِيْ?",
          "options": [
            "مُنَادَاةً، نِدَاءً",
            "كَذِبًا",
            "صِدْقًا",
            "إِيْحَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to reveal, inspire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reveal, inspire\"?",
          "options": [
            "أَوْحَى يُوْحِيْ",
            "نَبِيٌّ",
            "عَامِلٌ",
            "صَدَقَ يَصْدُقُ"
          ],
          "correct": 0
        },
        {
          "title": "to reveal, inspire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَوْحَى يُوْحِيْ mean?",
          "options": [
            "to reveal, inspire",
            "prophet",
            "governing (a following word)",
            "to speak the truth"
          ],
          "correct": 0
        },
        {
          "title": "to reveal, inspire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَوْحَى يُوْحِيْ?",
          "options": [
            "إِيْحَاءً",
            "مُنَادَاةً، نِدَاءً",
            "كَذِبًا",
            "صِدْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to speak the truth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to speak the truth\"?",
          "options": [
            "صَدَقَ يَصْدُقُ",
            "تَفْسِيْرِيَّةٌ",
            "نَادَى يُنَادِيْ",
            "كَذَبَ يَكْذِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to speak the truth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدَقَ يَصْدُقُ mean?",
          "options": [
            "to speak the truth",
            "explanatory",
            "to call out",
            "to lie"
          ],
          "correct": 0
        },
        {
          "title": "to speak the truth (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَدَقَ يَصْدُقُ?",
          "options": [
            "صِدْقًا",
            "إِيْحَاءً",
            "مُنَادَاةً، نِدَاءً",
            "كَذِبًا"
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
            "عَامِلٌ",
            "أَوْحَى يُوْحِيْ",
            "نَبِيٌّ"
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
            "governing (a following word)",
            "to reveal, inspire",
            "prophet"
          ],
          "correct": 0
        },
        {
          "title": "to lie (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَبَ يَكْذِبُ?",
          "options": [
            "كَذِبًا",
            "صِدْقًا",
            "إِيْحَاءً",
            "مُنَادَاةً، نِدَاءً"
          ],
          "correct": 0
        },
        {
          "title": "prophet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"prophet\"?",
          "options": [
            "نَبِيٌّ",
            "نَادَى يُنَادِيْ",
            "صَدَقَ يَصْدُقُ",
            "تَفْسِيْرِيَّةٌ"
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
            "to call out",
            "to speak the truth",
            "explanatory"
          ],
          "correct": 0
        },
        {
          "title": "explanatory",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"explanatory\"?",
          "options": [
            "تَفْسِيْرِيَّةٌ",
            "أَوْحَى يُوْحِيْ",
            "كَذَبَ يَكْذِبُ",
            "عَامِلٌ"
          ],
          "correct": 0
        },
        {
          "title": "explanatory",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَفْسِيْرِيَّةٌ mean?",
          "options": [
            "explanatory",
            "to reveal, inspire",
            "to lie",
            "governing (a following word)"
          ],
          "correct": 0
        },
        {
          "title": "governing (a following word)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"governing (a following word)\"?",
          "options": [
            "عَامِلٌ",
            "صَدَقَ يَصْدُقُ",
            "نَبِيٌّ",
            "نَادَى يُنَادِيْ"
          ],
          "correct": 0
        },
        {
          "title": "governing (a following word)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَامِلٌ mean?",
          "options": [
            "governing (a following word)",
            "to speak the truth",
            "prophet",
            "to call out"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

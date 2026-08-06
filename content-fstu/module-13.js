// Module 13 — The مَعْطُوْفٌ, بَدَلٌ and مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى,
// and the Special Time/Place Adverbs (From the Start, Unit 5, Section 1,
// Parts 3-6, pp. 438-458)
//
// Converted from content-fstu-new/unit5-1-lesson10..24.js. Same conversion
// pattern as module-04..12.js (see module-04.js header comment). Lesson
// ids l1..l15 map to source lessons 10..24 in order (this module picks up
// where module-12.js's l1..l9 (source lessons 1..9) left off, within the
// same Unit 5 Section 1). Concept exercises are freshly authored per
// concept, one per sections[] entry.

export default {
  "id": "f-sughra-atf-badal-mudaf",
  "title": "الْمَعْطُوْفُ وَالْبَدَلُ وَالْمُضَافُ إِلَيْهِ",
  "heading": "اَلْوَحْدَةُ الْخَامِسَةُ",
  "subheading": "اَلْقِسْمُ الْأَوَّلُ",
  "blurb": "اَلْجُمْلَةُ الصُّغْرَى as مَعْطُوْف, بَدَل, and مُضَاف إِلَيْه — plus the time/place adverbs that always take one.",
  "lessons": [
    {
      "id": "l1",
      "title": "المعطوف جملةً",
      "subtitle": "Part 4: The مَعْطُوْفٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "Recap: The Three Kinds of حَال Sentence",
          "lines": [
            {
              "html": "Before moving on, it is worth fixing the حَال system in place. A حَال may be a single اِسْم, or a whole جُمْلَة — and if it is a sentence, it is either فِعْلِيَّة or اِسْمِيَّة.",
              "list": false
            },
            {
              "table": {
                "title": "Summary of the حَال",
                "headers": [
                  "Type",
                  "Example",
                  "Meaning"
                ],
                "rows": [
                  [
                    "اِسْمٌ",
                    "جَاءَ زَيْدٌ رَاكِبًا",
                    "Simultaneous state"
                  ],
                  [
                    "فِعْلِيَّةٌ — مُضَارِعٌ",
                    "جَاءَ زَيْدٌ يَرْكَبُ",
                    "Simultaneous state"
                  ],
                  [
                    "فِعْلِيَّةٌ — مَاضٍ",
                    "جَاءَ زَيْدٌ وَقَدْ ذَهَبَ النَّاسُ",
                    "Prior state, or contrast"
                  ],
                  [
                    "اِسْمِيَّةٌ",
                    "جَلَسَ زَيْدٌ وَالنَّاسُ قَائِمُوْنَ",
                    "Simultaneous state, or contrast"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "A حَالٌ can be a single اِسْمٌ or a whole جُمْلَةٌ. If it is a sentence, what are the two kinds؟",
            "kind": "mcq",
            "options": [
              "فِعْلِيَّةٌ or اِسْمِيَّةٌ",
              "مَاضٍ or مُضَارِعٌ only",
              "مُبْتَدَأٌ or خَبَرٌ",
              "مَعْرِفَةٌ or نَكِرَةٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The مَعْطُوْفٌ as a جُمْلَةٌ صُغْرَى",
          "lines": [
            {
              "html": "The مَعْطُوْفٌ can occur as a جُمْلَةٌ صُغْرَى if the مَعْطُوْفٌ عَلَيْهِ is itself a جُمْلَةٌ صُغْرَى. In that case the two nested sentences join together to fill a single slot.",
              "list": false
            },
            {
              "html": "زَيْدٌ جَاءَ وَذَهَبَ — Zaid came and went.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "زَيْدٌ جَاءَ وَذَهَبَ",
                "translation": "Zaid came and went.",
                "cells": [
                  "زَيْدٌ",
                  "جَاءَ",
                  "وَ",
                  "ذَهَبَ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَعْطُوْفٌ عَلَيْهِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَرْفُ عَطْفٍ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَعْطُوْفٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Read the two lower rows carefully. The middle row analyses each nested sentence internally; the bottom row shows how they are joined. Together they form the single خَبَر of زَيْدٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When does the مَعْطُوْفٌ occur as a جُمْلَةٌ صُغْرَى؟",
            "kind": "mcq",
            "options": [
              "When the مَعْطُوْفٌ عَلَيْهِ before it is itself a جُمْلَةٌ صُغْرَى",
              "Whenever a حَرْفُ عَطْفٍ appears anywhere in the sentence",
              "Only after إِنَّ",
              "Never — the مَعْطُوْف is always a single word"
            ],
            "correct": 0
          }
        },
        {
          "heading": "When the Sentences Stay Independent",
          "lines": [
            {
              "html": "If the sentence before the حَرْفُ عَطْفٍ is an independent sentence rather than a جُمْلَةٌ صُغْرَى, both sentences will be independent — that is, they do not come together to form a single slot.",
              "list": false
            },
            {
              "html": "جَاءَ زَيْدٌ وَذَهَبَ — Zaid came and went.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "جَاءَ زَيْدٌ وَذَهَبَ",
                "translation": "Zaid came and went.",
                "cells": [
                  "جَاءَ",
                  "زَيْدٌ",
                  "وَ",
                  "ذَهَبَ"
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
                        "role": "حَرْفُ عَطْفٍ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice that the two sentences translate identically into English, but their tarkib differs completely. In زَيْدٌ جَاءَ وَذَهَبَ the pair fills the خَبَر slot; in جَاءَ زَيْدٌ وَذَهَبَ there is no slot for them to fill, so no مَعْطُوْف labels appear at all.",
              "list": false
            },
            {
              "table": {
                "title": "The Deciding Test",
                "headers": [
                  "What comes before the وَ",
                  "Result"
                ],
                "rows": [
                  [
                    "A جُمْلَةٌ صُغْرَى",
                    "The second sentence is a مَعْطُوْف; both fill one slot"
                  ],
                  [
                    "An independent sentence",
                    "Both stay independent; no مَعْطُوْف labels"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In جَاءَ زَيْدٌ وَذَهَبَ, why do no مَعْطُوْفٌ labels appear even though it translates identically to زَيْدٌ جَاءَ وَذَهَبَ؟",
            "kind": "mcq",
            "options": [
              "Because the first sentence جَاءَ زَيْدٌ is already independent, not a جُمْلَةٌ صُغْرَى, so there's no nested slot for the second to join",
              "Because وَذَهَبَ has no فَاعِلٌ",
              "Because جَاءَ is مَجْهُوْلٌ",
              "Because word order never affects tarkib"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The مَعْطُوْفٌ as a Nested Sentence",
        "rows": [
          {
            "label": "When it happens",
            "arabic": "إِذَا كَانَ الْمَعْطُوْفُ عَلَيْهِ جُمْلَةً صُغْرَى",
            "meaning": "The مَعْطُوْف is a جُمْلَةٌ صُغْرَى only if the مَعْطُوْفٌ عَلَيْهِ is one too."
          },
          {
            "label": "Example",
            "arabic": "زَيْدٌ جَاءَ وَذَهَبَ",
            "meaning": "جَاءَ is the خَبَر, and ذَهَبَ is joined to it; together they fill one slot."
          },
          {
            "label": "The labels used",
            "arabic": "مَعْطُوْفٌ عَلَيْهِ + حَرْفُ عَطْفٍ + مَعْطُوْفٌ",
            "meaning": "These sit on a lower row beneath the internal analysis of each sentence."
          },
          {
            "label": "The other case",
            "arabic": "جَاءَ زَيْدٌ وَذَهَبَ",
            "meaning": "If the first sentence is independent, both stay independent and no مَعْطُوْف labels appear."
          },
          {
            "label": "Same English, different tarkib",
            "arabic": "زَيْدٌ جَاءَ وَذَهَبَ ↔ جَاءَ زَيْدٌ وَذَهَبَ",
            "meaning": "Both translate as 'Zaid came and went', but only the first forms a single slot."
          },
          {
            "label": "The test",
            "arabic": "مَا قَبْلَ الْوَاوِ",
            "meaning": "Look at what precedes the وَ: a nested sentence gives a مَعْطُوْف; a complete one does not."
          }
        ]
      },
      "quiz": [
        {
          "q": "When can the مَعْطُوْفٌ occur as a جُمْلَةٌ صُغْرَى?",
          "options": [
            "When the مَعْطُوْفٌ عَلَيْهِ is itself a جُمْلَةٌ صُغْرَى",
            "Whenever a وَ appears",
            "Only in nominal sentences",
            "Only after a past-tense verb"
          ],
          "correct": 0,
          "explanation": "The two nested sentences then join to fill a single slot in the main sentence."
        },
        {
          "q": "In زَيْدٌ جَاءَ وَذَهَبَ, which slot do جَاءَ وَذَهَبَ fill together?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ",
            "حَالٌ"
          ],
          "correct": 2,
          "explanation": "زَيْدٌ is the مُبْتَدَأ, and the joined pair of verbal sentences is its خَبَر."
        },
        {
          "q": "What happens if the sentence before the حَرْفُ عَطْفٍ is independent?",
          "options": [
            "The second becomes a حَال",
            "Both sentences stay independent and form no single slot",
            "The second becomes a مَفْعُوْلٌ بِهِ",
            "The وَ is dropped"
          ],
          "correct": 1,
          "explanation": "In جَاءَ زَيْدٌ وَذَهَبَ there is no slot for them to fill, so no مَعْطُوْف labels appear."
        },
        {
          "q": "How do زَيْدٌ جَاءَ وَذَهَبَ and جَاءَ زَيْدٌ وَذَهَبَ compare?",
          "options": [
            "They differ in meaning but share a tarkib",
            "They differ in both meaning and tarkib",
            "They are identical in every way",
            "They share a translation but differ completely in tarkib"
          ],
          "correct": 3,
          "explanation": "Both mean 'Zaid came and went'; only the first forms a مَعْطُوْف structure."
        },
        {
          "q": "Which three labels appear on the lower row of a مَعْطُوْف structure?",
          "options": [
            "مُضَافٌ, مُضَافٌ إِلَيْهِ, نَعْتٌ",
            "مَعْطُوْفٌ عَلَيْهِ, حَرْفُ عَطْفٍ, مَعْطُوْفٌ",
            "مُؤَكَّدٌ, تَأْكِيْدٌ, حَالٌ",
            "مُبْتَدَأٌ, خَبَرٌ, بَدَلٌ"
          ],
          "correct": 1,
          "explanation": "They sit beneath the internal analysis of each nested sentence."
        },
        {
          "q": "What is the quickest test for whether a مَعْطُوْف structure has formed?",
          "options": [
            "Look at what precedes the وَ",
            "Look at the tense of the second verb",
            "Count the words",
            "Check whether the subject is definite"
          ],
          "correct": 0,
          "explanation": "A جُمْلَةٌ صُغْرَى before the وَ gives a مَعْطُوْف; a complete sentence does not."
        }
      ],
      "bank": [
        {
          "title": "زَيْدٌ جَاءَ وَذَهَبَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 439 (Section 1, Part 4)",
          "sentence": "زَيْدٌ جَاءَ وَذَهَبَ",
          "translation": "Zaid came and went.",
          "cells": [
            "زَيْدٌ",
            "جَاءَ",
            "وَ",
            "ذَهَبَ"
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
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "وَاوٌ حَالِيَّةٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "جَاءَ زَيْدٌ وَذَهَبَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 439 (Section 1, Part 4)",
          "sentence": "جَاءَ زَيْدٌ وَذَهَبَ",
          "translation": "Zaid came and went.",
          "cells": [
            "جَاءَ",
            "زَيْدٌ",
            "وَ",
            "ذَهَبَ"
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَعْطُوْفٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "يُحْيِي اللّٰهُ وَيُمِيْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "يُحْيِي اللّٰهُ وَيُمِيْتُ",
          "translation": "Allah gives life and causes death.",
          "cells": [
            "يُحْيِي",
            "اللّٰهُ",
            "وَ",
            "يُمِيْتُ"
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَعْطُوْفٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "اَللّٰهُ يُحْيِيْ وَيُمِيْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "اَللّٰهُ يُحْيِيْ وَيُمِيْتُ",
          "translation": "Allah gives life and causes death.",
          "cells": [
            "اَللّٰهُ",
            "يُحْيِيْ",
            "وَ",
            "يُمِيْتُ"
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
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "وَاوٌ حَالِيَّةٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنَّ اللّٰهَ يَهْدِيْ وَيُضِلُّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "إِنَّ اللّٰهَ يَهْدِيْ وَيُضِلُّ",
          "translation": "Indeed Allah guides and leads astray.",
          "cells": [
            "إِنَّ",
            "اللّٰهَ",
            "يَهْدِيْ",
            "وَ",
            "يُضِلُّ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "مُبْتَدَأٌ",
            "وَاوٌ حَالِيَّةٌ"
          ]
        },
        {
          "title": "صَلَّى الْمُسْلِمُوْنَ وَصَامُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "صَلَّى الْمُسْلِمُوْنَ وَصَامُوْا",
          "translation": "The Muslims prayed and fasted.",
          "cells": [
            "صَلَّى",
            "الْمُسْلِمُوْنَ",
            "وَ",
            "صَامُوْا"
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَعْطُوْفٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "كَانُوْا يُذْنِبُوْنَ ثُمَّ يَسْتَغْفِرُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "كَانُوْا يُذْنِبُوْنَ ثُمَّ يَسْتَغْفِرُوْنَ",
          "translation": "They used to sin and then seek forgiveness.",
          "cells": [
            "كَانُوْا",
            "يُذْنِبُوْنَ",
            "ثُمَّ",
            "يَسْتَغْفِرُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "مُبْتَدَأٌ",
            "وَاوٌ حَالِيَّةٌ"
          ]
        },
        {
          "title": "نُؤْمِنُ بِالرُّسُلِ وَنَتَّبِعُهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "نُؤْمِنُ بِالرُّسُلِ وَنَتَّبِعُهُمْ",
          "translation": "We believe in the messengers and follow them.",
          "cells": [
            "نُؤْمِنُ",
            "بِالرُّسُلِ",
            "وَ",
            "نَتَّبِعُهُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (نَحْنُ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ وَمَفْعُوْلٌ بِهِ (هُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَعْطُوْفٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "نَحْنُ آمَنَّا بِالرُّسُلِ وَاتَّبَعْنَاهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "نَحْنُ آمَنَّا بِالرُّسُلِ وَاتَّبَعْنَاهُمْ",
          "translation": "We believed in the messengers and followed them.",
          "cells": [
            "نَحْنُ",
            "آمَنَّا بِالرُّسُلِ",
            "وَ",
            "اتَّبَعْنَاهُمْ"
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
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "وَاوٌ حَالِيَّةٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِنَّ هٰؤُلَاءِ صَبَرُوْا وَلَمْ يَجْزَعُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "إِنَّ هٰؤُلَاءِ صَبَرُوْا وَلَمْ يَجْزَعُوْا",
          "translation": "Indeed these people were patient and did not panic.",
          "cells": [
            "إِنَّ",
            "هٰؤُلَاءِ",
            "صَبَرُوْا",
            "وَ",
            "لَمْ يَجْزَعُوْا"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "وَاوٌ حَالِيَّةٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "فَاطِمَةُ حَضَرَتِ الْيَوْمَ وَغَابَتْ أَمْسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "فَاطِمَةُ حَضَرَتِ الْيَوْمَ وَغَابَتْ أَمْسِ",
          "translation": "Fatimah attended today and was absent yesterday.",
          "cells": [
            "فَاطِمَةُ",
            "حَضَرَتِ الْيَوْمَ",
            "وَ",
            "غَابَتْ أَمْسِ"
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
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "وَاوٌ حَالِيَّةٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَشَى النَّاسُ إِلَى الْمَسْجِدِ وَلَمْ يَرْكَبُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 4)",
          "sentence": "مَشَى النَّاسُ إِلَى الْمَسْجِدِ وَلَمْ يَرْكَبُوْا",
          "translation": "The people walked to the masjid and did not ride.",
          "cells": [
            "مَشَى",
            "النَّاسُ",
            "إِلَى الْمَسْجِدِ",
            "وَ",
            "لَمْ يَرْكَبُوْا"
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
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ مَعَ حَرْفِ النَّفْيِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَعْطُوْفٌ",
            "حَالٌ",
            "مُبْتَدَأٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "In يُحْيِي اللّٰهُ وَيُمِيْتُ, is the sentence after the وَ a مَعْطُوْف?",
          "options": [
            "Yes — it joins the first to form one slot",
            "No — the first sentence is independent, so both stay independent",
            "Yes — it is a حَال",
            "No — it is a مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "The verb comes first, so يُحْيِي اللّٰهُ is a complete sentence before the وَ arrives."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "In اَللّٰهُ يُحْيِيْ وَيُمِيْتُ, what slot do the two verbs fill together?",
          "options": [
            "فَاعِلٌ",
            "خَبَرٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "اَللّٰهُ is the مُبْتَدَأ, so the joined verbal sentences form its خَبَر."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "In إِنَّ اللّٰهَ يَهْدِيْ وَيُضِلُّ, why is يُضِلُّ a مَعْطُوْف?",
          "options": [
            "Because يَهْدِيْ is the خَبَرُ إِنَّ — a جُمْلَةٌ صُغْرَى",
            "Because إِنَّ requires a مَعْطُوْف",
            "Because both verbs are مُضَارِع",
            "Because اللّٰهَ is مَنْصُوْب"
          ],
          "correct": 0,
          "explanation": "The مَعْطُوْفٌ عَلَيْهِ must itself be nested for the second sentence to join it."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "In كَانُوْا يُذْنِبُوْنَ ثُمَّ يَسْتَغْفِرُوْنَ, what is ثُمَّ?",
          "options": [
            "A حَرْفُ عَطْفٍ joining the second nested sentence",
            "A وَاوٌ حَالِيَّةٌ",
            "A حَرْفُ جَرٍّ",
            "A حَرْفُ نَفْيٍ"
          ],
          "correct": 0,
          "explanation": "يُذْنِبُوْنَ is the خَبَرُ كَانَ, so the sentence after ثُمَّ joins it as a مَعْطُوْف."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "In نَحْنُ آمَنَّا بِالرُّسُلِ وَاتَّبَعْنَاهُمْ, why is the second verb a مَعْطُوْف?",
          "options": [
            "Because آمَنَّا is the خَبَر of the مُبْتَدَأ نَحْنُ",
            "Because both verbs are past tense",
            "Because الرُّسُل is definite",
            "Because نَحْنُ is a pronoun"
          ],
          "correct": 0,
          "explanation": "Starting with the pronoun makes the verbal sentence a جُمْلَةٌ صُغْرَى."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "In صَلَّى الْمُسْلِمُوْنَ وَصَامُوْا, are the two sentences joined into one slot?",
          "options": [
            "Yes — as مَعْطُوْفٌ عَلَيْهِ and مَعْطُوْفٌ",
            "No — the first is a complete verbal sentence, so both stay independent",
            "Yes — as two حَال",
            "No — the second is a حَال"
          ],
          "correct": 1,
          "explanation": "The verb-first order makes the first sentence complete before the وَ."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "In إِنَّ هٰؤُلَاءِ صَبَرُوْا وَلَمْ يَجْزَعُوْا, what does the لَمْ construction contribute?",
          "options": [
            "A negative past-tense meaning inside the مَعْطُوْف",
            "A prohibition",
            "A حَال",
            "A question"
          ],
          "correct": 0,
          "explanation": "'They were patient and did not panic' — the second nested sentence is negated with لَمْ."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 4)",
          "kind": "mcq",
          "prompt": "How does فَاطِمَةُ حَضَرَتِ الْيَوْمَ وَغَابَتْ أَمْسِ differ from اَلْيَوْمَ حَضَرَتْ فَاطِمَةُ وَغَابَتْ أَمْسِ?",
          "options": [
            "In the first, the verbs form a مَعْطُوْف pair filling the خَبَر; in the second they are independent",
            "They have opposite meanings",
            "The second has no verb",
            "There is no difference"
          ],
          "correct": 0,
          "explanation": "Fronting فَاطِمَةُ makes it a مُبْتَدَأ, which turns what follows into a جُمْلَةٌ صُغْرَى."
        },
        {
          "title": "guest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"guest\"?",
          "options": [
            "ضَيْفٌ",
            "قَائِمٌ",
            "أَحْيَا يُحْيِيْ",
            "هَدَى يَهْدِيْ"
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
            "standing",
            "to give life",
            "to guide"
          ],
          "correct": 0
        },
        {
          "title": "guest (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ضَيْفٌ?",
          "options": [
            "ضُيُوْفٌ",
            "قَائِمُوْنَ",
            "رَاكِبُوْنَ",
            "ذُنُوْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "sin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sin\"?",
          "options": [
            "ذَنْبٌ",
            "أَمْسِ",
            "أَمَاتَ يُمِيْتُ",
            "أَضَلَّ يُضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "sin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَنْبٌ mean?",
          "options": [
            "sin",
            "yesterday",
            "to cause to die",
            "to lead astray"
          ],
          "correct": 0
        },
        {
          "title": "sin (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ذَنْبٌ?",
          "options": [
            "ذُنُوْبٌ",
            "ضُيُوْفٌ",
            "قَائِمُوْنَ",
            "رَاكِبُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "riding",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"riding\"?",
          "options": [
            "رَاكِبٌ",
            "أَحْيَا يُحْيِيْ",
            "هَدَى يَهْدِيْ",
            "أَذْنَبَ يُذْنِبُ"
          ],
          "correct": 0
        },
        {
          "title": "riding",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَاكِبٌ mean?",
          "options": [
            "riding",
            "to give life",
            "to guide",
            "to commit a sin"
          ],
          "correct": 0
        },
        {
          "title": "riding (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَاكِبٌ?",
          "options": [
            "رَاكِبُوْنَ",
            "ذُنُوْبٌ",
            "ضُيُوْفٌ",
            "قَائِمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "standing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"standing\"?",
          "options": [
            "قَائِمٌ",
            "أَمَاتَ يُمِيْتُ",
            "أَضَلَّ يُضِلُّ",
            "مَشَى يَمْشِيْ"
          ],
          "correct": 0
        },
        {
          "title": "standing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَائِمٌ mean?",
          "options": [
            "standing",
            "to cause to die",
            "to lead astray",
            "to walk"
          ],
          "correct": 0
        },
        {
          "title": "standing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَائِمٌ?",
          "options": [
            "قَائِمُوْنَ",
            "رَاكِبُوْنَ",
            "ذُنُوْبٌ",
            "ضُيُوْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "yesterday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"yesterday\"?",
          "options": [
            "أَمْسِ",
            "هَدَى يَهْدِيْ",
            "أَذْنَبَ يُذْنِبُ",
            "جَزِعَ يَجْزَعُ"
          ],
          "correct": 0
        },
        {
          "title": "yesterday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمْسِ mean?",
          "options": [
            "yesterday",
            "to guide",
            "to commit a sin",
            "to panic, be alarmed"
          ],
          "correct": 0
        },
        {
          "title": "to give life",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give life\"?",
          "options": [
            "أَحْيَا يُحْيِيْ",
            "أَضَلَّ يُضِلُّ",
            "مَشَى يَمْشِيْ",
            "ضَيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "to give life",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْيَا يُحْيِيْ mean?",
          "options": [
            "to give life",
            "to lead astray",
            "to walk",
            "guest"
          ],
          "correct": 0
        },
        {
          "title": "to give life (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحْيَا يُحْيِيْ?",
          "options": [
            "إِحْيَاءً",
            "هِدَايَةً",
            "إِذْنَابًا",
            "جَزَعًا"
          ],
          "correct": 0
        },
        {
          "title": "to cause to die",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cause to die\"?",
          "options": [
            "أَمَاتَ يُمِيْتُ",
            "أَذْنَبَ يُذْنِبُ",
            "جَزِعَ يَجْزَعُ",
            "ذَنْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to cause to die",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمَاتَ يُمِيْتُ mean?",
          "options": [
            "to cause to die",
            "to commit a sin",
            "to panic, be alarmed",
            "sin"
          ],
          "correct": 0
        },
        {
          "title": "to cause to die (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَمَاتَ يُمِيْتُ?",
          "options": [
            "إِمَاتَةً",
            "إِضْلَالًا",
            "مَشْيًا",
            "إِحْيَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to guide",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to guide\"?",
          "options": [
            "هَدَى يَهْدِيْ",
            "مَشَى يَمْشِيْ",
            "ضَيْفٌ",
            "رَاكِبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to guide",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَدَى يَهْدِيْ mean?",
          "options": [
            "to guide",
            "to walk",
            "guest",
            "riding"
          ],
          "correct": 0
        },
        {
          "title": "to guide (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَدَى يَهْدِيْ?",
          "options": [
            "هِدَايَةً",
            "إِذْنَابًا",
            "جَزَعًا",
            "إِمَاتَةً"
          ],
          "correct": 0
        },
        {
          "title": "to lead astray",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to lead astray\"?",
          "options": [
            "أَضَلَّ يُضِلُّ",
            "جَزِعَ يَجْزَعُ",
            "ذَنْبٌ",
            "قَائِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to lead astray",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَضَلَّ يُضِلُّ mean?",
          "options": [
            "to lead astray",
            "to panic, be alarmed",
            "sin",
            "standing"
          ],
          "correct": 0
        },
        {
          "title": "to lead astray (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَضَلَّ يُضِلُّ?",
          "options": [
            "إِضْلَالًا",
            "مَشْيًا",
            "إِحْيَاءً",
            "هِدَايَةً"
          ],
          "correct": 0
        },
        {
          "title": "to commit a sin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to commit a sin\"?",
          "options": [
            "أَذْنَبَ يُذْنِبُ",
            "ضَيْفٌ",
            "رَاكِبٌ",
            "أَمْسِ"
          ],
          "correct": 0
        },
        {
          "title": "to commit a sin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَذْنَبَ يُذْنِبُ mean?",
          "options": [
            "to commit a sin",
            "guest",
            "riding",
            "yesterday"
          ],
          "correct": 0
        },
        {
          "title": "to commit a sin (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَذْنَبَ يُذْنِبُ?",
          "options": [
            "إِذْنَابًا",
            "جَزَعًا",
            "إِمَاتَةً",
            "إِضْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to walk\"?",
          "options": [
            "مَشَى يَمْشِيْ",
            "ذَنْبٌ",
            "قَائِمٌ",
            "أَحْيَا يُحْيِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to walk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَشَى يَمْشِيْ mean?",
          "options": [
            "to walk",
            "sin",
            "standing",
            "to give life"
          ],
          "correct": 0
        },
        {
          "title": "to walk (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَشَى يَمْشِيْ?",
          "options": [
            "مَشْيًا",
            "إِحْيَاءً",
            "هِدَايَةً",
            "إِذْنَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to panic, be alarmed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to panic, be alarmed\"?",
          "options": [
            "جَزِعَ يَجْزَعُ",
            "رَاكِبٌ",
            "أَمْسِ",
            "أَمَاتَ يُمِيْتُ"
          ],
          "correct": 0
        },
        {
          "title": "to panic, be alarmed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزِعَ يَجْزَعُ mean?",
          "options": [
            "to panic, be alarmed",
            "riding",
            "yesterday",
            "to cause to die"
          ],
          "correct": 0
        },
        {
          "title": "to panic, be alarmed (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزِعَ يَجْزَعُ?",
          "options": [
            "جَزَعًا",
            "إِمَاتَةً",
            "إِضْلَالًا",
            "مَشْيًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "البدل جملةً وظرف الزمان",
      "subtitle": "Parts 5–6: The بَدَلٌ and مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The بَدَلٌ as a جُمْلَةٌ صُغْرَى",
          "lines": [
            {
              "html": "The بَدَلٌ can occur as a جُمْلَةٌ صُغْرَى. When it does, it will be punctuated by a semicolon in the English translation — the second sentence restates the first in more detail.",
              "list": false
            },
            {
              "html": "إِنَّ اللّٰهَ أَنْعَمَ عَلَيْكَ جَعَلَكَ مُؤْمِنًا — Indeed, Allah bestowed His favour upon you; He made you a believer.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنَّ اللّٰهَ أَنْعَمَ عَلَيْكَ جَعَلَكَ مُؤْمِنًا",
                "translation": "Indeed, Allah bestowed His favour upon you; He made you a believer.",
                "cells": [
                  "إِنَّ",
                  "اللّٰهَ",
                  "أَنْعَمَ",
                  "عَلَيْكَ",
                  "جَعَلَكَ",
                  "مُؤْمِنًا"
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
                        "role": "اِسْمُ إِنَّ"
                      },
                      {
                        "start": 2,
                        "end": 5,
                        "role": "خَبَرُ إِنَّ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 3,
                        "role": "مُبْدَلٌ مِنْهُ"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "بَدَلٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice there is no حَرْفُ عَطْفٍ between the two sentences. That absence is what distinguishes a بَدَل from a مَعْطُوْف: the بَدَل restates, whereas the مَعْطُوْف adds.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What punctuation mark shows up in the English translation when a بَدَلٌ occurs as a جُمْلَةٌ صُغْرَى؟",
            "kind": "mcq",
            "options": [
              "A semicolon — the second sentence restates the first in more detail",
              "A colon introducing a quotation",
              "A comma joining two equal items",
              "None — بدل sentences are never punctuated differently"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The مُضَافٌ إِلَيْهِ as a Sentence — Regular Adverbs",
          "lines": [
            {
              "html": "The مُضَافٌ إِلَيْهِ can also occur as a جُمْلَةٌ صُغْرَى. The مُضَاف of these sentences is of two types: regular adverbs of time, and special adverbs of time.",
              "list": false
            },
            {
              "html": "The مُضَافٌ إِلَيْهِ of regular adverbs of time such as حِيْنٌ, يَوْمٌ and سَنَةٌ can occur as a جُمْلَةٌ صُغْرَى. These adverbs are translated by placing the word 'the' before the adverb of time, followed by the مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "يَوْمَ مَاتَتْ أُمُّهُ — the day his mother died",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "بَكَى الرَّجُلُ يَوْمَ مَاتَتْ أُمُّهُ",
                "translation": "The man wept the day his mother died.",
                "cells": [
                  "بَكَى",
                  "الرَّجُلُ",
                  "يَوْمَ",
                  "مَاتَتْ",
                  "أُمُّهُ"
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
                        "role": "مَفْعُوْلٌ فِيْهِ"
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
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "حِيْنَ and its مُضَافٌ إِلَيْهِ can be translated as either 'the time' or 'when' — حِيْنَ رَجَعَ وَلَدُهُ, 'the time / when his son returned'.",
              "list": false
            },
            {
              "table": {
                "title": "Translating Regular Time Adverbs with a Sentence",
                "headers": [
                  "Arabic",
                  "English"
                ],
                "rows": [
                  [
                    "يَوْمَ مَاتَتْ أُمُّهُ",
                    "the day his mother died"
                  ],
                  [
                    "سَنَةَ مَاتَ جَدُّهُ",
                    "the year his grandfather died"
                  ],
                  [
                    "حِيْنَ رَجَعَ وَلَدُهُ",
                    "the time / when his son returned"
                  ],
                  [
                    "سَاعَةَ جَاءَ الضُّيُوْفُ",
                    "the hour the guests came"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What can the مُضَافٌ إِلَيْهِ of a regular time adverb (يَوْمٌ، حِيْنٌ، سَنَةٌ, etc.) be?",
            "kind": "mcq",
            "options": [
              "Either an ordinary noun or a whole nested sentence",
              "Only a nested sentence, never an ordinary noun",
              "Only a pronoun",
              "Only a proper noun"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The بَدَلٌ and the مُضَافٌ إِلَيْهِ as Nested Sentences",
        "rows": [
          {
            "label": "The بَدَلٌ as a sentence",
            "arabic": "إِنَّ اللّٰهَ أَنْعَمَ عَلَيْكَ جَعَلَكَ مُؤْمِنًا",
            "meaning": "The second sentence restates the first in more detail; punctuated with a semicolon."
          },
          {
            "label": "How to spot it",
            "arabic": "بِلَا حَرْفِ عَطْفٍ",
            "meaning": "No حَرْفُ عَطْفٍ joins the two — that is what separates a بَدَل from a مَعْطُوْف."
          },
          {
            "label": "Its labels",
            "arabic": "مُبْدَلٌ مِنْهُ + بَدَلٌ",
            "meaning": "These sit on a lower row beneath the internal analysis of each sentence."
          },
          {
            "label": "The مُضَافٌ إِلَيْهِ as a sentence",
            "arabic": "نَوْعَانِ مِنَ الْمُضَافِ",
            "meaning": "The مُضَاف is either a regular adverb of time or a special adverb of time."
          },
          {
            "label": "Regular adverbs",
            "arabic": "حِيْنٌ، يَوْمٌ، سَنَةٌ",
            "meaning": "Translated with 'the' before the adverb, then the nested sentence: يَوْمَ مَاتَتْ أُمُّهُ, 'the day his mother died'."
          },
          {
            "label": "حِيْنَ specifically",
            "arabic": "حِيْنَ رَجَعَ وَلَدُهُ",
            "meaning": "May be rendered as 'the time' or simply 'when'."
          }
        ]
      },
      "quiz": [
        {
          "q": "How is a بَدَلٌ that is a جُمْلَةٌ صُغْرَى punctuated in English?",
          "options": [
            "With a comma",
            "With a semicolon",
            "With a colon",
            "With a dash"
          ],
          "correct": 1,
          "explanation": "'Allah bestowed His favour upon you; He made you a believer.'"
        },
        {
          "q": "What distinguishes a بَدَل sentence from a مَعْطُوْف sentence?",
          "options": [
            "The بَدَل has no حَرْفُ عَطْفٍ before it",
            "The بَدَل must be nominal",
            "The بَدَل comes first",
            "The بَدَل is always negative"
          ],
          "correct": 0,
          "explanation": "The بَدَل restates the first sentence; the مَعْطُوْف adds a new one and needs a joining particle."
        },
        {
          "q": "What two types of مُضَاف can head a مُضَافٌ إِلَيْهِ that is a sentence?",
          "options": [
            "Regular adverbs of place and special adverbs of place",
            "Regular adverbs of time and special adverbs of time",
            "Nouns and pronouns",
            "Verbs and particles"
          ],
          "correct": 1,
          "explanation": "This lesson covers the regular ones; the special ones follow later in Part 6."
        },
        {
          "q": "How are regular adverbs of time with a nested sentence translated?",
          "options": [
            "By placing 'the' before the adverb, followed by the مُضَافٌ إِلَيْهِ",
            "By omitting the adverb entirely",
            "By adding 'because' before the sentence",
            "By turning the adverb into a verb"
          ],
          "correct": 0,
          "explanation": "يَوْمَ مَاتَتْ أُمُّهُ — 'the day his mother died'."
        },
        {
          "q": "Which two renderings does حِيْنَ allow?",
          "options": [
            "'the place' or 'where'",
            "'the reason' or 'why'",
            "'the time' or 'when'",
            "'the manner' or 'how'"
          ],
          "correct": 2,
          "explanation": "حِيْنَ رَجَعَ وَلَدُهُ — 'the time / when his son returned'."
        },
        {
          "q": "In بَكَى الرَّجُلُ يَوْمَ مَاتَتْ أُمُّهُ, which slot does the whole إِضَافَة fill?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ"
          ],
          "correct": 2,
          "explanation": "The time adverb with its nested sentence fills the adverbial-of-time slot."
        }
      ],
      "bank": [
        {
          "title": "إِنَّ اللّٰهَ أَنْعَمَ عَلَيْكَ جَعَلَكَ مُؤْمِنًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 440 (Section 1, Part 5)",
          "sentence": "إِنَّ اللّٰهَ أَنْعَمَ عَلَيْكَ جَعَلَكَ مُؤْمِنًا",
          "translation": "Indeed Allah bestowed His favour upon you; He made you a believer.",
          "cells": [
            "إِنَّ",
            "اللّٰهَ",
            "أَنْعَمَ",
            "عَلَيْكَ",
            "جَعَلَكَ",
            "مُؤْمِنًا"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 3,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "بَدَلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَعْطُوْفٌ",
            "حَرْفُ عَطْفٍ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "بَكَى الرَّجُلُ يَوْمَ مَاتَتْ أُمُّهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 441 (Section 1, Part 6)",
          "sentence": "بَكَى الرَّجُلُ يَوْمَ مَاتَتْ أُمُّهُ",
          "translation": "The man wept the day his mother died.",
          "cells": [
            "بَكَى",
            "الرَّجُلُ",
            "يَوْمَ",
            "مَاتَتْ",
            "أُمُّهُ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "حِيْنَ رَجَعَ وَلَدُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 441 (Section 1, Part 6)",
          "sentence": "حِيْنَ رَجَعَ وَلَدُهُ",
          "translation": "the time / when his son returned",
          "cells": [
            "حِيْنَ",
            "رَجَعَ",
            "وَلَدُهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "سَنَةَ مَاتَ جَدُّهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "سَنَةَ مَاتَ جَدُّهُ",
          "translation": "the year his grandfather died",
          "cells": [
            "سَنَةَ",
            "مَاتَ",
            "جَدُّهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "حِيْنَ يَرَوْنَ الْعَذَابَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "حِيْنَ يَرَوْنَ الْعَذَابَ",
          "translation": "when they see the punishment",
          "cells": [
            "حِيْنَ",
            "يَرَوْنَ",
            "الْعَذَابَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "سَاعَةَ جَاءَ الضُّيُوْفُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "سَاعَةَ جَاءَ الضُّيُوْفُ",
          "translation": "the hour the guests came",
          "cells": [
            "سَاعَةَ",
            "جَاءَ",
            "الضُّيُوْفُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "صَبَاحَ نُسَافِرُ إِلَى مَكَّةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "صَبَاحَ نُسَافِرُ إِلَى مَكَّةَ",
          "translation": "the morning we travel to Makkah",
          "cells": [
            "صَبَاحَ",
            "نُسَافِرُ",
            "إِلَى مَكَّةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (نَحْنُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَسَاءَ رَجَعْنَا مِنَ السُّوْقِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "مَسَاءَ رَجَعْنَا مِنَ السُّوْقِ",
          "translation": "the evening we returned from the market",
          "cells": [
            "مَسَاءَ",
            "رَجَعْنَا",
            "مِنَ السُّوْقِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَيْلَةَ رَأَيْنَا الْقَمَرَ قَبْلَ رَمَضَانَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "لَيْلَةَ رَأَيْنَا الْقَمَرَ قَبْلَ رَمَضَانَ",
          "translation": "the night we saw the moon before Ramadan",
          "cells": [
            "لَيْلَةَ",
            "رَأَيْنَا",
            "الْقَمَرَ",
            "قَبْلَ رَمَضَانَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "بَدَلٌ",
            "نَعْتٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "يَوْمَ تَابُوْا مِنْ جَمِيْعِ ذُنُوْبِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "يَوْمَ تَابُوْا مِنْ جَمِيْعِ ذُنُوْبِهِمْ",
          "translation": "the day they repented from all their sins",
          "cells": [
            "يَوْمَ",
            "تَابُوْا",
            "مِنْ",
            "جَمِيْعِ",
            "ذُنُوْبِهِمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "أُسْبُوْعَ لَمْ تَحْضُرِ الدَّرْسَ لِمَرَضِكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "أُسْبُوْعَ لَمْ تَحْضُرِ الدَّرْسَ لِمَرَضِكَ",
          "translation": "the week you did not attend the lesson because of your illness",
          "cells": [
            "أُسْبُوْعَ",
            "لَمْ",
            "تَحْضُرِ",
            "الدَّرْسَ",
            "لِمَرَضِكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "بَدَلٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "بَكَى الْوَلَدُ سَاعَةَ رَجَعَ أَبُوْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 6)",
          "sentence": "بَكَى الْوَلَدُ سَاعَةَ رَجَعَ أَبُوْهُ",
          "translation": "The boy wept the hour his father returned.",
          "cells": [
            "بَكَى",
            "الْوَلَدُ",
            "سَاعَةَ",
            "رَجَعَ",
            "أَبُوْهُ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "Book p. 440 (Section 1, Part 5)",
          "kind": "mcq",
          "prompt": "In إِنَّ اللّٰهَ أَنْعَمَ عَلَيْكَ جَعَلَكَ مُؤْمِنًا, what is مُؤْمِنًا?",
          "options": [
            "A حَال",
            "A مَفْعُوْلٌ بِهِ ثَانٍ of جَعَلَ",
            "A نَعْت",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "جَعَلَ takes two objects: the attached كَ and مُؤْمِنًا."
        },
        {
          "title": "Book p. 440 (Section 1, Part 5)",
          "kind": "mcq",
          "prompt": "In إِنَّ اللّٰهَ أَنْعَمَ عَلَيْكَ جَعَلَكَ مُؤْمِنًا, which two words together are the مُبْدَلٌ مِنْهُ?",
          "options": [
            "إِنَّ اللّٰهَ",
            "أَنْعَمَ عَلَيْكَ",
            "جَعَلَكَ مُؤْمِنًا",
            "اللّٰهَ alone"
          ],
          "correct": 1,
          "explanation": "The first nested sentence is restated by the second, which is the بَدَل."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Translate: سَنَةَ مَاتَ جَدُّهُ",
          "options": [
            "his grandfather's year of death",
            "the year his grandfather died",
            "since his grandfather died",
            "when will his grandfather die"
          ],
          "correct": 1,
          "explanation": "'The' + the adverb + the nested sentence is the standard rendering."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In حِيْنَ يَرَوْنَ الْعَذَابَ, what is the مُضَافٌ إِلَيْهِ?",
          "options": [
            "الْعَذَابَ alone",
            "The whole verbal sentence يَرَوْنَ الْعَذَابَ",
            "حِيْنَ",
            "There is none"
          ],
          "correct": 1,
          "explanation": "The nested sentence, complete with its own object, fills the مُضَافٌ إِلَيْهِ slot."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In سَاعَةَ جَاءَ الضُّيُوْفُ, what is الضُّيُوْفُ?",
          "options": [
            "The مُضَافٌ إِلَيْهِ",
            "The فَاعِل of جَاءَ, inside the nested sentence",
            "A نَعْت",
            "A بَدَل"
          ],
          "correct": 1,
          "explanation": "The whole sentence جَاءَ الضُّيُوْفُ is the مُضَافٌ إِلَيْهِ; within it, الضُّيُوْفُ is the subject."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In يَوْمَ تَابُوْا مِنْ جَمِيْعِ ذُنُوْبِهِمْ, what does جَمِيْع illustrate?",
          "options": [
            "A quantifier in a direct slot, مُضَافٌ to the noun itself",
            "A مُؤَكَّدٌ – تَأْكِيْدٌ structure",
            "A حَال",
            "A تَمْيِيْز"
          ],
          "correct": 0,
          "explanation": "جَمِيْع is مُضَاف to ذُنُوْبِهِمْ rather than to a pronoun, so it fills a slot directly."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In أُسْبُوْعَ لَمْ تَحْضُرِ الدَّرْسَ لِمَرَضِكَ, what does لِمَرَضِكَ express?",
          "options": [
            "The time of the absence",
            "The reason for the absence",
            "The place of the absence",
            "The manner of the absence"
          ],
          "correct": 1,
          "explanation": "The لِ of reason gives a مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ inside the nested sentence."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Why can a negated sentence like لَمْ تَحْضُرِ الدَّرْسَ still be a مُضَافٌ إِلَيْهِ?",
          "options": [
            "Because a nested sentence may be of any kind, affirmative or negative",
            "Because لَمْ turns it into a noun",
            "Because أُسْبُوْع requires a negative",
            "It cannot — a negated sentence can never fill this slot"
          ],
          "correct": 0,
          "explanation": "What matters is that a complete sentence occupies the slot, not its polarity."
        },
        {
          "title": "time, moment",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, moment\"?",
          "options": [
            "حِيْنٌ",
            "صَبَاحٌ",
            "لَيْلَةٌ",
            "جَدٌّ"
          ],
          "correct": 0
        },
        {
          "title": "time, moment",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حِيْنٌ mean?",
          "options": [
            "time, moment",
            "morning",
            "night",
            "grandfather"
          ],
          "correct": 0
        },
        {
          "title": "time, moment (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حِيْنٌ?",
          "options": [
            "أَحْيَانٌ",
            "أَصْبَاحٌ",
            "لَيَالٍ",
            "أَجْدَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "year",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"year\"?",
          "options": [
            "سَنَةٌ",
            "مَسَاءٌ",
            "أُسْبُوْعٌ",
            "مَرَضٌ"
          ],
          "correct": 0
        },
        {
          "title": "year",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَنَةٌ mean?",
          "options": [
            "year",
            "evening",
            "week",
            "illness"
          ],
          "correct": 0
        },
        {
          "title": "year (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَنَةٌ?",
          "options": [
            "سِنُوْنَ",
            "أَمْسِيَةٌ",
            "أَسَابِيْعُ",
            "أَمْرَاضٌ"
          ],
          "correct": 0
        },
        {
          "title": "hour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hour\"?",
          "options": [
            "سَاعَةٌ",
            "لَيْلَةٌ",
            "جَدٌّ",
            "أَنْعَمَ يُنْعِمُ"
          ],
          "correct": 0
        },
        {
          "title": "hour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَاعَةٌ mean?",
          "options": [
            "hour",
            "night",
            "grandfather",
            "to bestow a favour"
          ],
          "correct": 0
        },
        {
          "title": "hour (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَاعَةٌ?",
          "options": [
            "سَاعَاتٌ",
            "لَيَالٍ",
            "أَجْدَادٌ",
            "أَحْيَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "morning",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"morning\"?",
          "options": [
            "صَبَاحٌ",
            "أُسْبُوْعٌ",
            "مَرَضٌ",
            "جَعَلَ يَجْعَلُ"
          ],
          "correct": 0
        },
        {
          "title": "morning",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَبَاحٌ mean?",
          "options": [
            "morning",
            "week",
            "illness",
            "to make, render"
          ],
          "correct": 0
        },
        {
          "title": "morning (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَبَاحٌ?",
          "options": [
            "أَصْبَاحٌ",
            "أَسَابِيْعُ",
            "أَمْرَاضٌ",
            "سِنُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "evening",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"evening\"?",
          "options": [
            "مَسَاءٌ",
            "جَدٌّ",
            "أَنْعَمَ يُنْعِمُ",
            "بَكَى يَبْكِيْ"
          ],
          "correct": 0
        },
        {
          "title": "evening",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسَاءٌ mean?",
          "options": [
            "evening",
            "grandfather",
            "to bestow a favour",
            "to weep"
          ],
          "correct": 0
        },
        {
          "title": "evening (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَسَاءٌ?",
          "options": [
            "أَمْسِيَةٌ",
            "أَجْدَادٌ",
            "أَحْيَانٌ",
            "سَاعَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "night",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"night\"?",
          "options": [
            "لَيْلَةٌ",
            "مَرَضٌ",
            "جَعَلَ يَجْعَلُ",
            "حِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "night",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَيْلَةٌ mean?",
          "options": [
            "night",
            "illness",
            "to make, render",
            "time, moment"
          ],
          "correct": 0
        },
        {
          "title": "night (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لَيْلَةٌ?",
          "options": [
            "لَيَالٍ",
            "أَمْرَاضٌ",
            "سِنُوْنَ",
            "أَصْبَاحٌ"
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
            "أَنْعَمَ يُنْعِمُ",
            "بَكَى يَبْكِيْ",
            "سَنَةٌ"
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
            "to bestow a favour",
            "to weep",
            "year"
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
            "أَحْيَانٌ",
            "سَاعَاتٌ",
            "أَمْسِيَةٌ"
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
            "جَعَلَ يَجْعَلُ",
            "حِيْنٌ",
            "سَاعَةٌ"
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
            "to make, render",
            "time, moment",
            "hour"
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
            "سِنُوْنَ",
            "أَصْبَاحٌ",
            "لَيَالٍ"
          ],
          "correct": 0
        },
        {
          "title": "illness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"illness\"?",
          "options": [
            "مَرَضٌ",
            "بَكَى يَبْكِيْ",
            "سَنَةٌ",
            "صَبَاحٌ"
          ],
          "correct": 0
        },
        {
          "title": "illness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرَضٌ mean?",
          "options": [
            "illness",
            "to weep",
            "year",
            "morning"
          ],
          "correct": 0
        },
        {
          "title": "illness (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَرَضٌ?",
          "options": [
            "أَمْرَاضٌ",
            "سَاعَاتٌ",
            "أَمْسِيَةٌ",
            "أَسَابِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "to bestow a favour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bestow a favour\"?",
          "options": [
            "أَنْعَمَ يُنْعِمُ",
            "حِيْنٌ",
            "سَاعَةٌ",
            "مَسَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to bestow a favour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْعَمَ يُنْعِمُ mean?",
          "options": [
            "to bestow a favour",
            "time, moment",
            "hour",
            "evening"
          ],
          "correct": 0
        },
        {
          "title": "to make, render",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make, render\"?",
          "options": [
            "جَعَلَ يَجْعَلُ",
            "سَنَةٌ",
            "صَبَاحٌ",
            "لَيْلَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to make, render",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَعَلَ يَجْعَلُ mean?",
          "options": [
            "to make, render",
            "year",
            "morning",
            "night"
          ],
          "correct": 0
        },
        {
          "title": "to weep",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to weep\"?",
          "options": [
            "بَكَى يَبْكِيْ",
            "سَاعَةٌ",
            "مَسَاءٌ",
            "أُسْبُوْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to weep",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَكَى يَبْكِيْ mean?",
          "options": [
            "to weep",
            "hour",
            "evening",
            "week"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "ظرف الزمان: ملحوظات",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "Note 1 — The إِضَافَة Usually Becomes the مَفْعُوْلٌ فِيْهِ, but Not Always",
          "lines": [
            {
              "html": "In the previous lesson every example of a time adverb with a nested sentence filled the مَفْعُوْلٌ فِيْهِ slot — يَوْمَ مَاتَتْ أُمُّهُ answered the question 'when?'. That is the normal case, but it is not the only one. The whole إِضَافَة is a noun phrase, and a noun phrase can fill any slot the sentence needs.",
              "list": false
            },
            {
              "html": "يَخَافُ الْمُؤْمِنُوْنَ يَوْمَ يَقُوْمُوْنَ أَمَامَ رَبِّ الْعَالَمِيْنَ — The believers fear the Day they will stand in front of the Lord of the worlds.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Here يَوْمَ is not telling us when the believers fear. It is telling us what they fear. The whole phrase يَوْمَ يَقُوْمُوْنَ أَمَامَ رَبِّ الْعَالَمِيْنَ is therefore the مَفْعُوْلٌ بِهِ of يَخَافُ, not a مَفْعُوْلٌ فِيْهِ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَخَافُ الْمُؤْمِنُوْنَ يَوْمَ يَقُوْمُوْنَ أَمَامَ رَبِّ الْعَالَمِيْنَ",
                "translation": "The believers fear the Day they will stand in front of the Lord of the worlds.",
                "cells": [
                  "يَخَافُ",
                  "الْمُؤْمِنُوْنَ",
                  "يَوْمَ",
                  "يَقُوْمُوْنَ",
                  "أَمَامَ",
                  "رَبِّ",
                  "الْعَالَمِيْنَ"
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
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 3,
                        "end": 6,
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
                        "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                      },
                      {
                        "start": 4,
                        "end": 6,
                        "role": "مَفْعُوْلٌ فِيْهِ"
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
                        "end": 6,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 6,
                        "end": 6,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "A quick test: ask the verb its own question. If 'when?' is answered, the phrase is a مَفْعُوْلٌ فِيْهِ. If 'what?' is answered — fear what, await what, remember what — it is a مَفْعُوْلٌ بِهِ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How do you tell whether a time-adverb إِضَافَة is a مَفْعُوْلٌ فِيْهِ or a مَفْعُوْلٌ بِهِ؟",
            "kind": "mcq",
            "options": [
              "Ask the verb its own question: 'when?' means مفعول فيه, 'what?' means مفعول به",
              "It is always مفعول فيه",
              "Check whether it comes before or after the verb",
              "Check whether the verb is ماضٍ or مضارع"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 2 — The Adverb May Be مُعْرَبٌ or مَنْصُوْبٌ",
          "lines": [
            {
              "html": "When an adverb is مُضَافٌ to a sentence it may take either of two إِعْرَاب treatments: it may be مُعْرَبٌ, taking whatever ending its slot in the sentence calls for, or it may simply be مَنْصُوْبٌ regardless of that slot. Both are correct and the book shows them side by side.",
              "list": false
            },
            {
              "html": "ذَلِكَ يَوْمُ رَأَيْتُكَ لِأَوَّلِ مَرَّةٍ — That was the day I saw you for the first time.",
              "list": true,
              "bullet": true
            },
            {
              "html": "ذَلِكَ يَوْمَ رَأَيْتُكَ لِأَوَّلِ مَرَّةٍ — That was the day I saw you for the first time.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In the first, يَوْمُ is مُعْرَبٌ — it is the خَبَر of ذَلِكَ, so it takes a ضَمَّة. In the second, يَوْمَ is simply مَنْصُوْبٌ because it is an adverb مُضَاف to a sentence. The meaning does not change.",
              "list": false
            },
            {
              "table": {
                "title": "The Two Treatments",
                "headers": [
                  "Treatment",
                  "Example",
                  "Why that ending"
                ],
                "rows": [
                  [
                    "مُعْرَبٌ",
                    "ذَلِكَ يَوْمُ رَأَيْتُكَ",
                    "The slot decides: it is the خَبَر, so مَرْفُوْعٌ"
                  ],
                  [
                    "مَنْصُوْبٌ",
                    "ذَلِكَ يَوْمَ رَأَيْتُكَ",
                    "The adverb takes a فَتْحَة simply because it is مُضَاف to a sentence"
                  ]
                ]
              }
            },
            {
              "tarkeebDiagram": {
                "sentence": "ذَلِكَ يَوْمُ رَأَيْتُكَ لِأَوَّلِ مَرَّةٍ",
                "translation": "That was the day I saw you for the first time.",
                "cells": [
                  "ذَلِكَ",
                  "يَوْمُ",
                  "رَأَيْتُكَ",
                  "لِ",
                  "أَوَّلِ",
                  "مَرَّةٍ"
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
                        "start": 1,
                        "end": 1,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 2,
                        "end": 5,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (كَ)"
                      },
                      {
                        "start": 3,
                        "end": 5,
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 3,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "When an adverb is مُضَافٌ to a sentence, what are its two possible إِعْرَاب treatments؟",
            "kind": "mcq",
            "options": [
              "مُعْرَبٌ (taking whatever ending its own slot calls for) or simply مَنْصُوْبٌ regardless of that slot",
              "Only مَجْرُوْرٌ",
              "Only مَرْفُوْعٌ",
              "It must always agree with the verb's mood"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 3 — يَوْمَ as the مَفْعُوْلٌ بِهِ of an Omitted أُذْكُرْ",
          "lines": [
            {
              "html": "A very common Qur'anic pattern: يَوْمَ together with its مُضَافٌ إِلَيْهِ is the مَفْعُوْلٌ بِهِ of the verb أُذْكُرْ, 'remember'. The verb itself is then commonly removed, leaving the phrase standing on its own at the head of the sentence.",
              "list": false
            },
            {
              "html": "يَوْمَ يَحْشُرُهُمْ جَمِيْعًا — (Remember) the day He will gather them all.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Nothing is missing grammatically — the removed أُذْكُرْ is understood, and يَوْمَ keeps its فَتْحَة as its مَفْعُوْلٌ بِهِ. When you meet a bare يَوْمَ at the start of an āyah with no verb before it, supply أُذْكُرْ mentally and the parsing falls into place.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَوْمَ يَحْشُرُهُمْ جَمِيْعًا",
                "translation": "(Remember) the day He will gather them all.",
                "cells": [
                  "يَوْمَ",
                  "يَحْشُرُهُمْ",
                  "جَمِيْعًا"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
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
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "تَأْكِيْدٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The same removal explains أَذْكُرُ يَوْمَ رَأَيْتُ الْكَعْبَةَ لِأَوَّلِ مَرَّةٍ, 'I remember the day I saw the Ka'bah for the first time' — here the verb is left in place, so you can see plainly what is understood in the shorter form.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In the common Qur'anic pattern where a bare يَوْمَ opens an āyah with no verb before it, what should you supply mentally؟",
            "kind": "mcq",
            "options": [
              "The omitted verb أُذْكُرْ, of which يَوْمَ is the مَفْعُوْلٌ بِهِ",
              "A hidden كَانَ",
              "An omitted إِنَّ",
              "Nothing — the sentence is simply incomplete"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Regular Time Adverbs with a Nested Sentence — the Three Notes",
        "rows": [
          {
            "label": "Usual slot",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "Most of the time the adverb plus its nested sentence answers 'when?' and fills the adverbial slot."
          },
          {
            "label": "Other slots",
            "arabic": "يَخَافُ الْمُؤْمِنُوْنَ يَوْمَ يَقُوْمُوْنَ",
            "meaning": "The whole إِضَافَة is a noun phrase, so it can also be a مَفْعُوْلٌ بِهِ, a خَبَر, or any other slot."
          },
          {
            "label": "The test",
            "arabic": "مَتَى؟ أَمْ مَاذَا؟",
            "meaning": "If the phrase answers 'when?', it is مَفْعُوْلٌ فِيْهِ; if it answers 'what?', it is مَفْعُوْلٌ بِهِ."
          },
          {
            "label": "Two إِعْرَاب treatments",
            "arabic": "مُعْرَبٌ / مَنْصُوْبٌ",
            "meaning": "ذَلِكَ يَوْمُ رَأَيْتُكَ (slot-driven) and ذَلِكَ يَوْمَ رَأَيْتُكَ (adverbial فَتْحَة) are both correct."
          },
          {
            "label": "The omitted verb",
            "arabic": "(أُذْكُرْ) يَوْمَ يَحْشُرُهُمْ جَمِيْعًا",
            "meaning": "يَوْمَ is frequently the مَفْعُوْلٌ بِهِ of أُذْكُرْ, and that verb is commonly removed."
          },
          {
            "label": "Reading a bare يَوْمَ",
            "arabic": "قَدِّرْ أُذْكُرْ",
            "meaning": "When an āyah opens with يَوْمَ and no verb precedes it, supply أُذْكُرْ and the tarkeeb resolves."
          }
        ]
      },
      "quiz": [
        {
          "q": "In يَخَافُ الْمُؤْمِنُوْنَ يَوْمَ يَقُوْمُوْنَ أَمَامَ رَبِّ الْعَالَمِيْنَ, what slot does يَوْمَ fill?",
          "options": [
            "مَفْعُوْلٌ فِيْهِ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "It names what the believers fear, not when they fear, so it is the object of يَخَافُ."
        },
        {
          "q": "Which question, when answered by the phrase, tells you it is a مَفْعُوْلٌ فِيْهِ rather than a مَفْعُوْلٌ بِهِ?",
          "options": [
            "'What?'",
            "'Why?'",
            "'When?'",
            "'How?'"
          ],
          "correct": 2,
          "explanation": "An adverbial of time answers 'when?'; an object answers 'what?'."
        },
        {
          "q": "When an adverb is مُضَافٌ to a sentence, which two إِعْرَاب treatments are allowed?",
          "options": [
            "مُعْرَبٌ or مَنْصُوْبٌ",
            "مَرْفُوْعٌ or مَجْرُوْرٌ only",
            "مَبْنِيٌّ or مَجْزُوْمٌ",
            "Always مَجْرُوْرٌ"
          ],
          "correct": 0,
          "explanation": "ذَلِكَ يَوْمُ رَأَيْتُكَ and ذَلِكَ يَوْمَ رَأَيْتُكَ are both acceptable."
        },
        {
          "q": "Why does يَوْمُ carry a ضَمَّة in ذَلِكَ يَوْمُ رَأَيْتُكَ لِأَوَّلِ مَرَّةٍ?",
          "options": [
            "Because every مُضَاف is مَرْفُوْعٌ",
            "Because رَأَيْتُ demands it",
            "Because it follows ذَلِكَ",
            "Because it is treated as مُعْرَبٌ and its slot is the خَبَر"
          ],
          "correct": 3,
          "explanation": "Under the مُعْرَب treatment the ending is decided by the slot, and the slot here is the خَبَر of ذَلِكَ."
        },
        {
          "q": "In يَوْمَ يَحْشُرُهُمْ جَمِيْعًا, which verb is understood but removed?",
          "options": [
            "كَانَ",
            "أُذْكُرْ",
            "قَالَ",
            "جَاءَ"
          ],
          "correct": 1,
          "explanation": "يَوْمَ is its مَفْعُوْلٌ بِهِ; the imperative أُذْكُرْ is commonly dropped."
        },
        {
          "q": "In يَوْمَ يَحْشُرُهُمْ جَمِيْعًا, what is جَمِيْعًا?",
          "options": [
            "The تَأْكِيْد of the attached هُمْ",
            "The فَاعِل of يَحْشُرُ",
            "A حَال of يَوْمَ",
            "The مُضَافٌ إِلَيْهِ"
          ],
          "correct": 0,
          "explanation": "It emphasises that the gathering leaves none of them out."
        }
      ],
      "bank": [
        {
          "title": "يَخَافُ الْمُؤْمِنُوْنَ يَوْمَ يَقُوْمُوْنَ أَمَامَ رَبِّ الْعَالَمِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 443, Note 1 (Section 1, Part 6)",
          "sentence": "يَخَافُ الْمُؤْمِنُوْنَ يَوْمَ يَقُوْمُوْنَ أَمَامَ رَبِّ الْعَالَمِيْنَ",
          "translation": "The believers fear the Day they will stand in front of the Lord of the worlds.",
          "cells": [
            "يَخَافُ",
            "الْمُؤْمِنُوْنَ",
            "يَوْمَ",
            "يَقُوْمُوْنَ",
            "أَمَامَ",
            "رَبِّ",
            "الْعَالَمِيْنَ"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 6,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "ذَلِكَ يَوْمُ رَأَيْتُكَ لِأَوَّلِ مَرَّةٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 443, Note 2 (Section 1, Part 6)",
          "sentence": "ذَلِكَ يَوْمُ رَأَيْتُكَ لِأَوَّلِ مَرَّةٍ",
          "translation": "That was the day I saw you for the first time.",
          "cells": [
            "ذَلِكَ",
            "يَوْمُ",
            "رَأَيْتُكَ",
            "لِ",
            "أَوَّلِ",
            "مَرَّةٍ"
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
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "يَوْمَ يَحْشُرُهُمْ جَمِيْعًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 443, Note 3 (Section 1, Part 6)",
          "sentence": "يَوْمَ يَحْشُرُهُمْ جَمِيْعًا",
          "translation": "(Remember) the day He will gather them all.",
          "cells": [
            "يَوْمَ",
            "يَحْشُرُهُمْ",
            "جَمِيْعًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "تَأْكِيْدٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "تَقْرَأُ الْأُمُّ الْكُتُبَ لَيْلًا حِيْنَ يَنَامُ الْأَوْلَادُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 6)",
          "sentence": "تَقْرَأُ الْأُمُّ الْكُتُبَ لَيْلًا حِيْنَ يَنَامُ الْأَوْلَادُ",
          "translation": "The mother reads the books at night when the children sleep.",
          "cells": [
            "تَقْرَأُ",
            "الْأُمُّ",
            "الْكُتُبَ",
            "لَيْلًا",
            "حِيْنَ",
            "يَنَامُ",
            "الْأَوْلَادُ"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَ رَسُوْلُ اللهِ يَتَبَسَّمُ حِيْنَ يَلْقَى النَّاسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 6)",
          "sentence": "كَانَ رَسُوْلُ اللهِ يَتَبَسَّمُ حِيْنَ يَلْقَى النَّاسَ",
          "translation": "The Messenger of Allah ﷺ used to smile when he met people.",
          "cells": [
            "كَانَ",
            "رَسُوْلُ",
            "اللهِ",
            "يَتَبَسَّمُ",
            "حِيْنَ",
            "يَلْقَى",
            "النَّاسَ"
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
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "خَبَرُ كَانَ"
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
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "حَزِنَ الصَّحَابَةُ كُلُّهُمْ حِيْنَ مَاتَ رَسُوْلُ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 6)",
          "sentence": "حَزِنَ الصَّحَابَةُ كُلُّهُمْ حِيْنَ مَاتَ رَسُوْلُ اللهِ",
          "translation": "The Companions, all of them, grieved when the Messenger of Allah ﷺ died.",
          "cells": [
            "حَزِنَ",
            "الصَّحَابَةُ",
            "كُلُّهُمْ",
            "حِيْنَ",
            "مَاتَ",
            "رَسُوْلُ",
            "اللهِ"
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
                  "role": "تَأْكِيْدٌ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "فَاعِلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "صَلَّى أَبُوْ بَكْرٍ بِالنَّاسِ فِيْ مَسْجِدِ الرَّسُوْلِ حِيْنَ مَرِضَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 6)",
          "sentence": "صَلَّى أَبُوْ بَكْرٍ بِالنَّاسِ فِيْ مَسْجِدِ الرَّسُوْلِ حِيْنَ مَرِضَ",
          "translation": "Abu Bakr ؓ led the people in prayer in the Messenger's ﷺ masjid when he fell ill.",
          "cells": [
            "صَلَّى",
            "أَبُوْ",
            "بَكْرٍ",
            "بِالنَّاسِ",
            "فِيْ",
            "مَسْجِدِ",
            "الرَّسُوْلِ",
            "حِيْنَ",
            "مَرِضَ"
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
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 7,
                  "end": 8,
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
                  "role": "مُضَافٌ"
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
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 8,
                  "end": 8,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَذْكُرُ يَوْمَ رَأَيْتُ الْكَعْبَةَ لِأَوَّلِ مَرَّةٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 6)",
          "sentence": "أَذْكُرُ يَوْمَ رَأَيْتُ الْكَعْبَةَ لِأَوَّلِ مَرَّةٍ",
          "translation": "I remember the day I saw the Ka'bah for the first time.",
          "cells": [
            "أَذْكُرُ",
            "يَوْمَ",
            "رَأَيْتُ",
            "الْكَعْبَةَ",
            "لِ",
            "أَوَّلِ",
            "مَرَّةٍ"
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
                  "end": 6,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَنْتَظِرُ لَيْلَةَ نَرَى هِلَالَ رَمَضَانَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 6)",
          "sentence": "أَنْتَظِرُ لَيْلَةَ نَرَى هِلَالَ رَمَضَانَ",
          "translation": "I await the night we see the crescent of Ramadan.",
          "cells": [
            "أَنْتَظِرُ",
            "لَيْلَةَ",
            "نَرَى",
            "هِلَالَ",
            "رَمَضَانَ"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 3,
                  "end": 4,
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كَانَ ذَلِكَ الْيَوْمُ يَوْمَ رَجَعْنَا مِنَ الْقَرْيَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 6)",
          "sentence": "كَانَ ذَلِكَ الْيَوْمُ يَوْمَ رَجَعْنَا مِنَ الْقَرْيَةِ",
          "translation": "That day was the day we returned from the village.",
          "cells": [
            "كَانَ",
            "ذَلِكَ",
            "الْيَوْمُ",
            "يَوْمَ",
            "رَجَعْنَا",
            "مِنَ",
            "الْقَرْيَةِ"
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
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "بَدَلٌ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "نَحْشُرُ الْمُجْرِمِيْنَ يَوْمَ يُنْفَخُ فِي الصُّوْرِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 6)",
          "sentence": "نَحْشُرُ الْمُجْرِمِيْنَ يَوْمَ يُنْفَخُ فِي الصُّوْرِ",
          "translation": "We shall gather the criminals the day the horn is blown.",
          "cells": [
            "نَحْشُرُ",
            "الْمُجْرِمِيْنَ",
            "يَوْمَ",
            "يُنْفَخُ",
            "فِي",
            "الصُّوْرِ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 5,
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
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "نَائِبُ فَاعِلٍ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
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
          "title": "كَانَ يَوْمُ وُلِدَ رَسُوْلُ اللهِ خَيْرَ أَيَّامِ الدُّنْيَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 6)",
          "sentence": "كَانَ يَوْمُ وُلِدَ رَسُوْلُ اللهِ خَيْرَ أَيَّامِ الدُّنْيَا",
          "translation": "The day the Messenger of Allah ﷺ was born was the best of the days of this world.",
          "cells": [
            "كَانَ",
            "يَوْمُ",
            "وُلِدَ",
            "رَسُوْلُ",
            "اللهِ",
            "خَيْرَ",
            "أَيَّامِ",
            "الدُّنْيَا"
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
                  "end": 4,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 5,
                  "end": 7,
                  "role": "خَبَرُ كَانَ"
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
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "نَائِبُ فَاعِلٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
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
          "title": "Book Exercise 2 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In تَقْرَأُ الْأُمُّ الْكُتُبَ لَيْلًا حِيْنَ يَنَامُ الْأَوْلَادُ, how many مَفْعُوْلٌ فِيْهِ does the sentence contain?",
          "options": [
            "None",
            "One",
            "Two",
            "Three"
          ],
          "correct": 2,
          "explanation": "لَيْلًا is one, and the whole phrase حِيْنَ يَنَامُ الْأَوْلَادُ is a second."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In حَزِنَ الصَّحَابَةُ كُلُّهُمْ حِيْنَ مَاتَ رَسُوْلُ اللهِ, what is كُلُّهُمْ?",
          "options": [
            "The فَاعِل",
            "The تَأْكِيْد of الصَّحَابَةُ",
            "A بَدَل of حِيْنَ",
            "A حَال"
          ],
          "correct": 1,
          "explanation": "It follows its noun in case and emphasises that every one of them grieved."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانَ رَسُوْلُ اللهِ ﷺ يَتَبَسَّمُ حِيْنَ يَلْقَى النَّاسَ, what does the كَانَ + مُضَارِع pairing convey?",
          "options": [
            "A single completed act in the past",
            "A habitual or repeated action in the past",
            "A future intention",
            "A command"
          ],
          "correct": 1,
          "explanation": "'He used to smile' — the habitual past we met earlier in this section."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِنَّ ذَلِكَ الرَّجُلَ سَافَرَ … سَنَةَ تَزَوَّجَ صَدِيْقُهُ خَالِدٌ, what is خَالِدٌ?",
          "options": [
            "The فَاعِل of تَزَوَّجَ",
            "A بَدَل of صَدِيْقُهُ",
            "A مَفْعُوْلٌ بِهِ",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "صَدِيْقُهُ is the فَاعِل; خَالِدٌ names him and matches him in case, so it is a بَدَل."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Translate: أَذْكُرُ يَوْمَ رَأَيْتُ الْكَعْبَةَ لِأَوَّلِ مَرَّةٍ",
          "options": [
            "I will remember the Ka'bah one day",
            "I remember the day I saw the Ka'bah for the first time",
            "Remember the first day of the Ka'bah",
            "The day I remember the Ka'bah is the first"
          ],
          "correct": 1,
          "explanation": "Here أَذْكُرُ is written out, showing plainly the verb that is dropped in يَوْمَ يَحْشُرُهُمْ جَمِيْعًا."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In نَحْشُرُ الْمُجْرِمِيْنَ يَوْمَ يُنْفَخُ فِي الصُّوْرِ, what is فِي الصُّوْرِ inside the nested sentence?",
          "options": [
            "The فَاعِل of يُنْفَخُ",
            "The نَائِبُ فَاعِلٍ غَيْرُ صَرِيْحٍ",
            "A مَفْعُوْلٌ بِهِ",
            "A تَأْكِيْد"
          ],
          "correct": 1,
          "explanation": "يُنْفَخُ is مَجْهُوْل and has no explicit doer, so the جَارّ وَمَجْرُوْر stands in as the deputy subject."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانَ ذَلِكَ الْيَوْمُ يَوْمَ رَجَعْنَا مِنَ الْقَرْيَةِ, what is الْيَوْمُ?",
          "options": [
            "The خَبَرُ كَانَ",
            "A بَدَل of ذَلِكَ",
            "A نَعْت of يَوْمَ",
            "A مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 1,
          "explanation": "ذَلِكَ is the اِسْمُ كَانَ and الْيَوْمُ restates it, so it is a بَدَل — the خَبَر is the second يَوْمَ with its nested sentence."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Why is لَيْلَةَ a مَفْعُوْلٌ بِهِ rather than a مَفْعُوْلٌ فِيْهِ in أَنْتَظِرُ لَيْلَةَ نَرَى هِلَالَ رَمَضَانَ?",
          "options": [
            "Because لَيْلَة can never be adverbial",
            "Because اِنْتَظَرَ needs an object and the night itself is what is awaited",
            "Because it is مَنْصُوْب",
            "Because it comes after the verb"
          ],
          "correct": 1,
          "explanation": "Applying the test: the phrase answers 'awaiting what?', not 'awaiting when?'."
        },
        {
          "title": "to get married",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to get married\"?",
          "options": [
            "تَزَوَّجَ يَتَزَوَّجُ",
            "كَشَفَ يَكْشِفُ",
            "اِحْتَرَقَ يَحْتَرِقُ",
            "خَزِيَ يَخْزَى"
          ],
          "correct": 0
        },
        {
          "title": "to get married",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَزَوَّجَ يَتَزَوَّجُ mean?",
          "options": [
            "to get married",
            "to uncover, to remove",
            "to burn",
            "to be disgraced"
          ],
          "correct": 0
        },
        {
          "title": "to get married (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَزَوَّجَ يَتَزَوَّجُ?",
          "options": [
            "تَزَوُّجًا",
            "كَشْفًا",
            "اِحْتِرَاقًا",
            "خِزْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take (life); in the مَجْهُوْل تُوُفِّيَ, to die\"?",
          "options": [
            "تَوَفَّى يَتَوَفَّى",
            "أَبْصَرَ يُبْصِرُ",
            "أَخْزَى يُخْزِيْ",
            "أَنْجَى يُنْجِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَوَفَّى يَتَوَفَّى mean?",
          "options": [
            "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die",
            "to see",
            "to disgrace",
            "to save"
          ],
          "correct": 0
        },
        {
          "title": "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَوَفَّى يَتَوَفَّى?",
          "options": [
            "تَوَفِّيًا",
            "إِبْصَارًا",
            "إِخْزَاءً",
            "إِنْجَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to narrate, to relate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to narrate, to relate\"?",
          "options": [
            "حَدَّثَ يُحَدِّثُ",
            "اِحْتَرَقَ يَحْتَرِقُ",
            "خَزِيَ يَخْزَى",
            "تَزَوَّجَ يَتَزَوَّجُ"
          ],
          "correct": 0
        },
        {
          "title": "to narrate, to relate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَدَّثَ يُحَدِّثُ mean?",
          "options": [
            "to narrate, to relate",
            "to burn",
            "to be disgraced",
            "to get married"
          ],
          "correct": 0
        },
        {
          "title": "to narrate, to relate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَدَّثَ يُحَدِّثُ?",
          "options": [
            "تَحْدِيْثًا",
            "اِحْتِرَاقًا",
            "خِزْيًا",
            "تَزَوُّجًا"
          ],
          "correct": 0
        },
        {
          "title": "to uncover, to remove",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to uncover, to remove\"?",
          "options": [
            "كَشَفَ يَكْشِفُ",
            "أَخْزَى يُخْزِيْ",
            "أَنْجَى يُنْجِيْ",
            "تَوَفَّى يَتَوَفَّى"
          ],
          "correct": 0
        },
        {
          "title": "to uncover, to remove",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَشَفَ يَكْشِفُ mean?",
          "options": [
            "to uncover, to remove",
            "to disgrace",
            "to save",
            "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die"
          ],
          "correct": 0
        },
        {
          "title": "to uncover, to remove (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَشَفَ يَكْشِفُ?",
          "options": [
            "كَشْفًا",
            "إِخْزَاءً",
            "إِنْجَاءً",
            "تَوَفِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to see",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to see\"?",
          "options": [
            "أَبْصَرَ يُبْصِرُ",
            "خَزِيَ يَخْزَى",
            "تَزَوَّجَ يَتَزَوَّجُ",
            "حَدَّثَ يُحَدِّثُ"
          ],
          "correct": 0
        },
        {
          "title": "to see",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْصَرَ يُبْصِرُ mean?",
          "options": [
            "to see",
            "to be disgraced",
            "to get married",
            "to narrate, to relate"
          ],
          "correct": 0
        },
        {
          "title": "to see (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْصَرَ يُبْصِرُ?",
          "options": [
            "إِبْصَارًا",
            "خِزْيًا",
            "تَزَوُّجًا",
            "تَحْدِيْثًا"
          ],
          "correct": 0
        },
        {
          "title": "to burn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to burn\"?",
          "options": [
            "اِحْتَرَقَ يَحْتَرِقُ",
            "أَنْجَى يُنْجِيْ",
            "تَوَفَّى يَتَوَفَّى",
            "كَشَفَ يَكْشِفُ"
          ],
          "correct": 0
        },
        {
          "title": "to burn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَرَقَ يَحْتَرِقُ mean?",
          "options": [
            "to burn",
            "to save",
            "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die",
            "to uncover, to remove"
          ],
          "correct": 0
        },
        {
          "title": "to burn (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَرَقَ يَحْتَرِقُ?",
          "options": [
            "اِحْتِرَاقًا",
            "إِنْجَاءً",
            "تَوَفِّيًا",
            "كَشْفًا"
          ],
          "correct": 0
        },
        {
          "title": "to disgrace",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to disgrace\"?",
          "options": [
            "أَخْزَى يُخْزِيْ",
            "تَزَوَّجَ يَتَزَوَّجُ",
            "حَدَّثَ يُحَدِّثُ",
            "أَبْصَرَ يُبْصِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to disgrace",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخْزَى يُخْزِيْ mean?",
          "options": [
            "to disgrace",
            "to get married",
            "to narrate, to relate",
            "to see"
          ],
          "correct": 0
        },
        {
          "title": "to disgrace (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَخْزَى يُخْزِيْ?",
          "options": [
            "إِخْزَاءً",
            "تَزَوُّجًا",
            "تَحْدِيْثًا",
            "إِبْصَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be disgraced",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be disgraced\"?",
          "options": [
            "خَزِيَ يَخْزَى",
            "تَوَفَّى يَتَوَفَّى",
            "كَشَفَ يَكْشِفُ",
            "اِحْتَرَقَ يَحْتَرِقُ"
          ],
          "correct": 0
        },
        {
          "title": "to be disgraced",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَزِيَ يَخْزَى mean?",
          "options": [
            "to be disgraced",
            "to take (life); in the مَجْهُوْل تُوُفِّيَ, to die",
            "to uncover, to remove",
            "to burn"
          ],
          "correct": 0
        },
        {
          "title": "to be disgraced (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَزِيَ يَخْزَى?",
          "options": [
            "خِزْيًا",
            "تَوَفِّيًا",
            "كَشْفًا",
            "اِحْتِرَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to save",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to save\"?",
          "options": [
            "أَنْجَى يُنْجِيْ",
            "حَدَّثَ يُحَدِّثُ",
            "أَبْصَرَ يُبْصِرُ",
            "أَخْزَى يُخْزِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to save",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْجَى يُنْجِيْ mean?",
          "options": [
            "to save",
            "to narrate, to relate",
            "to see",
            "to disgrace"
          ],
          "correct": 0
        },
        {
          "title": "to save (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْجَى يُنْجِيْ?",
          "options": [
            "إِنْجَاءً",
            "تَحْدِيْثًا",
            "إِبْصَارًا",
            "إِخْزَاءً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "لمّا",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "What Makes an Adverb 'Special'",
          "lines": [
            {
              "html": "The regular adverbs of the previous lessons — يَوْمٌ, حِيْنٌ, سَنَةٌ, لَيْلَةٌ — may take a sentence as their مُضَافٌ إِلَيْهِ, but they need not. They can equally be مُضَاف to an ordinary noun, as in يَوْمَ الْجُمُعَةِ.",
              "list": false
            },
            {
              "html": "The special adverbs are different: they are always مُضَافٌ to a following sentence. A sentence is the only thing they ever take. Together with that مُضَافٌ إِلَيْهِ they become the مَفْعُوْلٌ فِيْهِ of the main sentence.",
              "list": false
            },
            {
              "table": {
                "title": "The Special Adverbs",
                "headers": [
                  "Type",
                  "The adverbs",
                  "Count"
                ],
                "rows": [
                  [
                    "Special adverbs of time",
                    "لَمَّا، كُلَّمَا، إِذْ، إِذَا، مُذْ، مُنْذُ",
                    "six"
                  ],
                  [
                    "Special adverbs of place",
                    "حَيْثُ",
                    "one"
                  ]
                ]
              }
            },
            {
              "html": "Each of the seven has its own conditions — which kind of sentence follows it, which tense the main verb takes, and how it is rendered in English. The remaining lessons of Part 6 take them one at a time.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What distinguishes the special adverbs (لَمَّا، كُلَّمَا، إِذْ، إِذَا، مُذْ، مُنْذُ، حَيْثُ) from the regular ones؟",
            "kind": "mcq",
            "options": [
              "They are always مُضَافٌ to a following sentence — a sentence is the only thing they ever take",
              "They can never be مُضَافٌ to anything",
              "They only appear in the Qur'an",
              "They are always مَنْصُوْبٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "لَمَّا",
          "lines": [
            {
              "html": "The مُضَافٌ إِلَيْهِ of لَمَّا is a جُمْلَةٌ فِعْلِيَّةٌ consisting of a فِعْلٌ مَاضٍ. The verb of the main sentence will also be a فِعْلٌ مَاضٍ. It is translated as 'when', with a past-tense meaning throughout.",
              "list": false
            },
            {
              "html": "صَلَّيْتُ لَمَّا سَمِعْتُ الْأَذَانَ — I prayed when I heard the athan.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "صَلَّيْتُ لَمَّا سَمِعْتُ الْأَذَانَ",
                "translation": "I prayed when I heard the athan.",
                "cells": [
                  "صَلَّيْتُ",
                  "لَمَّا",
                  "سَمِعْتُ",
                  "الْأَذَانَ"
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
                        "end": 3,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Read the diagram from the outside in. The blue row at the top shows the two slots of the main sentence: the verb-with-its-doer, and the adverbial that tells us when. The green row at the bottom then splits that adverbial into لَمَّا (the مُضَاف) and the whole nested sentence سَمِعْتُ الْأَذَانَ (the مُضَافٌ إِلَيْهِ). The middle row parses that nested sentence in its own right.",
              "list": false
            },
            {
              "html": "The مَفْعُوْلٌ فِيْهِ with لَمَّا can come both before and after the main verb. Word order is free; the parsing does not change.",
              "list": false
            },
            {
              "html": "لَمَّا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ — When I heard the athan, I went to the masjid.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَمَّا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ",
                "translation": "When I heard the athan, I went to the masjid.",
                "cells": [
                  "لَمَّا",
                  "سَمِعْتُ",
                  "الْأَذَانَ",
                  "ذَهَبْتُ",
                  "إِلَى",
                  "الْمَسْجِدِ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                        "start": 4,
                        "end": 4,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "لَمَّا at a Glance",
                "headers": [
                  "Feature",
                  "Rule"
                ],
                "rows": [
                  [
                    "Its مُضَافٌ إِلَيْهِ",
                    "A جُمْلَةٌ فِعْلِيَّةٌ whose verb is a فِعْلٌ مَاضٍ"
                  ],
                  [
                    "The main verb",
                    "Also a فِعْلٌ مَاضٍ"
                  ],
                  [
                    "English rendering",
                    "'when', past tense"
                  ],
                  [
                    "Slot in the main sentence",
                    "مَفْعُوْلٌ فِيْهِ"
                  ],
                  [
                    "Position",
                    "Free — before or after the main verb"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What kind of sentence does لَمَّا require, and how is it translated؟",
            "kind": "mcq",
            "options": [
              "A جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ, translated 'when' with a past meaning throughout",
              "A جُمْلَةٌ اسْمِيَّةٌ, translated 'while'",
              "Either kind of sentence, translated 'whenever'",
              "A مُضَارِع sentence, translated 'when' in the future"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The Special Adverbs and لَمَّا",
        "rows": [
          {
            "label": "What is special",
            "arabic": "دَائِمًا مُضَافٌ إِلَى جُمْلَةٍ",
            "meaning": "These adverbs are always مُضَاف to a following sentence — they never take a single noun."
          },
          {
            "label": "Their slot",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "The adverb together with its nested sentence becomes the مَفْعُوْلٌ فِيْهِ of the main sentence."
          },
          {
            "label": "Six of time",
            "arabic": "لَمَّا، كُلَّمَا، إِذْ، إِذَا، مُذْ، مُنْذُ",
            "meaning": "Each has its own tense conditions and its own English rendering."
          },
          {
            "label": "One of place",
            "arabic": "حَيْثُ",
            "meaning": "The single special adverb of place."
          },
          {
            "label": "لَمَّا — its sentence",
            "arabic": "جُمْلَةٌ فِعْلِيَّةٌ بِفِعْلٍ مَاضٍ",
            "meaning": "And the verb of the main sentence is a فِعْلٌ مَاضٍ too."
          },
          {
            "label": "لَمَّا — its meaning",
            "arabic": "صَلَّيْتُ لَمَّا سَمِعْتُ الْأَذَانَ",
            "meaning": "'when', past tense: 'I prayed when I heard the athan.' It may stand before or after the main verb."
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the defining feature of a special adverb?",
          "options": [
            "It is always مَجْرُوْر",
            "It is always مُضَافٌ to a following sentence",
            "It always comes at the end of the sentence",
            "It never takes a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 1,
          "explanation": "A regular adverb may take a noun or a sentence; a special adverb takes only a sentence."
        },
        {
          "q": "How many special adverbs of time are there, and how many of place?",
          "options": [
            "Four and two",
            "Five and one",
            "Six and one",
            "Seven and none"
          ],
          "correct": 2,
          "explanation": "لَمَّا، كُلَّمَا، إِذْ، إِذَا، مُذْ، مُنْذُ of time, and حَيْثُ of place."
        },
        {
          "q": "What slot does a special adverb with its nested sentence fill in the main sentence?",
          "options": [
            "مَفْعُوْلٌ فِيْهِ",
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ",
            "حَالٌ"
          ],
          "correct": 0,
          "explanation": "Unlike the regular adverbs, which may land in several slots, the special ones settle in the adverbial slot."
        },
        {
          "q": "What kind of sentence must follow لَمَّا?",
          "options": [
            "A جُمْلَةٌ اسْمِيَّةٌ",
            "A جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مُضَارِعٌ",
            "A جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ",
            "Any sentence at all"
          ],
          "correct": 2,
          "explanation": "And the main sentence's verb is a فِعْلٌ مَاضٍ as well."
        },
        {
          "q": "How is لَمَّا rendered in English?",
          "options": [
            "'whenever'",
            "'when', with a past meaning",
            "'since'",
            "'where'"
          ],
          "correct": 1,
          "explanation": "صَلَّيْتُ لَمَّا سَمِعْتُ الْأَذَانَ — 'I prayed when I heard the athan.'"
        },
        {
          "q": "Where may the مَفْعُوْلٌ فِيْهِ formed with لَمَّا stand relative to the main verb?",
          "options": [
            "Only before it",
            "Only after it",
            "Only at the very end of the sentence",
            "Either before or after it"
          ],
          "correct": 3,
          "explanation": "صَلَّيْتُ لَمَّا سَمِعْتُ الْأَذَانَ and لَمَّا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ are both correct."
        }
      ],
      "bank": [
        {
          "title": "صَلَّيْتُ لَمَّا سَمِعْتُ الْأَذَانَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 445 (Section 1, Part 6)",
          "sentence": "صَلَّيْتُ لَمَّا سَمِعْتُ الْأَذَانَ",
          "translation": "I prayed when I heard the athan.",
          "cells": [
            "صَلَّيْتُ",
            "لَمَّا",
            "سَمِعْتُ",
            "الْأَذَانَ"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَمَّا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 445, Note (Section 1, Part 6)",
          "sentence": "لَمَّا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ",
          "translation": "When I heard the athan, I went to the masjid.",
          "cells": [
            "لَمَّا",
            "سَمِعْتُ",
            "الْأَذَانَ",
            "ذَهَبْتُ",
            "إِلَى",
            "الْمَسْجِدِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "لَمَّا أَخَذْتُ قَلَمَهُ غَضِبَ عَلَيَّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا أَخَذْتُ قَلَمَهُ غَضِبَ عَلَيَّ",
          "translation": "When I took his pen, he became angry with me.",
          "cells": [
            "لَمَّا",
            "أَخَذْتُ",
            "قَلَمَهُ",
            "غَضِبَ",
            "عَلَيَّ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَذَّبُوْا بِالْحَقِّ لَمَّا جَاءَهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "كَذَّبُوْا بِالْحَقِّ لَمَّا جَاءَهُمْ",
          "translation": "They rejected the truth as false when it came to them.",
          "cells": [
            "كَذَّبُوْا",
            "بِالْحَقِّ",
            "لَمَّا",
            "جَاءَهُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "أَكَلَ الرِّجَالُ الْغَدَاءَ لَمَّا رَجَعُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "أَكَلَ الرِّجَالُ الْغَدَاءَ لَمَّا رَجَعُوْا",
          "translation": "The men ate lunch when they returned.",
          "cells": [
            "أَكَلَ",
            "الرِّجَالُ",
            "الْغَدَاءَ",
            "لَمَّا",
            "رَجَعُوْا"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَمَّا دَخَلَ الْأَبُ الْبَيْتَ رَأَى ابْنَهُ بَاكِيًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا دَخَلَ الْأَبُ الْبَيْتَ رَأَى ابْنَهُ بَاكِيًا",
          "translation": "When the father entered the house, he saw his son weeping.",
          "cells": [
            "لَمَّا",
            "دَخَلَ",
            "الْأَبُ",
            "الْبَيْتَ",
            "رَأَى",
            "ابْنَهُ",
            "بَاكِيًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
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
                  "role": "حَالٌ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "لَمَّا بَدَأَ الْمُعَلِّمُ الدَّرْسَ سَكَتَ الطُّلَّابُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا بَدَأَ الْمُعَلِّمُ الدَّرْسَ سَكَتَ الطُّلَّابُ",
          "translation": "When the teacher began the lesson, the students fell silent.",
          "cells": [
            "لَمَّا",
            "بَدَأَ",
            "الْمُعَلِّمُ",
            "الدَّرْسَ",
            "سَكَتَ",
            "الطُّلَّابُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَتِلْكَ الْقُرَى أَهْلَكْنَاهُمْ لَمَّا ظَلَمُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "وَتِلْكَ الْقُرَى أَهْلَكْنَاهُمْ لَمَّا ظَلَمُوْا",
          "translation": "And those towns — We destroyed them when they wronged.",
          "cells": [
            "وَ",
            "تِلْكَ",
            "الْقُرَى",
            "أَهْلَكْنَاهُمْ",
            "لَمَّا",
            "ظَلَمُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ اسْتِئْنَافٍ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 3,
                  "end": 5,
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
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "بَدَلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "لَمَّا غَرَبَتِ الشَّمْسُ أَكَلَ الصَّائِمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا غَرَبَتِ الشَّمْسُ أَكَلَ الصَّائِمُوْنَ",
          "translation": "When the sun set, the fasting people ate.",
          "cells": [
            "لَمَّا",
            "غَرَبَتِ",
            "الشَّمْسُ",
            "أَكَلَ",
            "الصَّائِمُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَمَّا رَجَعَتِ الْأُمُّ إِلَى الْبَيْتِ فَرِحَ الطِّفْلُ فَرَحًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا رَجَعَتِ الْأُمُّ إِلَى الْبَيْتِ فَرِحَ الطِّفْلُ فَرَحًا",
          "translation": "When the mother returned to the house, the child rejoiced greatly.",
          "cells": [
            "لَمَّا",
            "رَجَعَتِ",
            "الْأُمُّ",
            "إِلَى الْبَيْتِ",
            "فَرِحَ",
            "الطِّفْلُ",
            "فَرَحًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَمَّا جَلَسَ الْجَدُّ عَلَى الْكُرْسِيِّ اجْتَمَعَ الْأَوْلَادُ حَوْلَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا جَلَسَ الْجَدُّ عَلَى الْكُرْسِيِّ اجْتَمَعَ الْأَوْلَادُ حَوْلَهُ",
          "translation": "When the grandfather sat on the chair, the children gathered around him.",
          "cells": [
            "لَمَّا",
            "جَلَسَ",
            "الْجَدُّ",
            "عَلَى الْكُرْسِيِّ",
            "اجْتَمَعَ",
            "الْأَوْلَادُ",
            "حَوْلَهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَمَّا ابْتَلَى اللهُ يَعْقُوْبَ وَأَيُّوْبَ صَبَرَا صَبْرًا جَمِيْلًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا ابْتَلَى اللهُ يَعْقُوْبَ وَأَيُّوْبَ صَبَرَا صَبْرًا جَمِيْلًا",
          "translation": "When Allah tested Ya'qub and Ayyub ؑ, they bore it with beautiful patience.",
          "cells": [
            "لَمَّا",
            "ابْتَلَى",
            "اللهُ",
            "يَعْقُوْبَ",
            "وَ",
            "أَيُّوْبَ",
            "صَبَرَا",
            "صَبْرًا",
            "جَمِيْلًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَلِفُ الِاثْنَيْنِ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "نَعْتٌ"
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
                },
                {
                  "start": 1,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            }
          ],
          "distractors": [
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "لَمَّا تَأَخَّرَ الطُّلَّابُ عَنِ الدَّرْسِ غَضِبَ الْأُسْتَاذُ عَلَيْهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 1, Part 6)",
          "sentence": "لَمَّا تَأَخَّرَ الطُّلَّابُ عَنِ الدَّرْسِ غَضِبَ الْأُسْتَاذُ عَلَيْهِمْ",
          "translation": "When the students were late for the lesson, the teacher became angry with them.",
          "cells": [
            "لَمَّا",
            "تَأَخَّرَ",
            "الطُّلَّابُ",
            "عَنِ الدَّرْسِ",
            "غَضِبَ",
            "الْأُسْتَاذُ",
            "عَلَيْهِمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمَّا أَخَذْتُ قَلَمَهُ غَضِبَ عَلَيَّ, which words make up the مُضَافٌ إِلَيْهِ of لَمَّا?",
          "options": [
            "قَلَمَهُ alone",
            "أَخَذْتُ قَلَمَهُ",
            "غَضِبَ عَلَيَّ",
            "The whole sentence after لَمَّا, including غَضِبَ"
          ],
          "correct": 1,
          "explanation": "The nested sentence ends where the main sentence resumes at غَضِبَ."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In ﴿كَذَّبُوا بِالْحَقِّ لَمَّا جَاءَهُمْ﴾, what is بِالْحَقِّ?",
          "options": [
            "The مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ of كَذَّبُوا",
            "The فَاعِل",
            "The مُضَافٌ إِلَيْهِ of لَمَّا",
            "A حَال"
          ],
          "correct": 0,
          "explanation": "كَذَّبَ reaches its object through the preposition بِ, so the جَارّ وَمَجْرُوْر fills the object slot."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمَّا دَخَلَ الْأَبُ الْبَيْتَ رَأَى ابْنَهُ بَاكِيًا, what is بَاكِيًا?",
          "options": [
            "A نَعْت of ابْنَهُ",
            "A تَمْيِيْز",
            "A حَال of ابْنَهُ",
            "A بَدَل"
          ],
          "correct": 2,
          "explanation": "It describes the state the son was in at the moment of the seeing, and it is نَكِرَة while ابْنَهُ is مَعْرِفَة."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمَّا رَجَعَتِ الْأُمُّ إِلَى الْبَيْتِ فَرِحَ الطِّفْلُ فَرَحًا, what is فَرَحًا?",
          "options": [
            "A حَال",
            "A مَفْعُوْلٌ مُطْلَقٌ",
            "A تَمْيِيْز",
            "A مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "It is the مَصْدَر of the very verb before it, emphasising the action."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In ﴿وَتِلْكَ الْقُرَى أَهْلَكْنَاهُمْ لَمَّا ظَلَمُوا﴾, what is الْقُرَى?",
          "options": [
            "The خَبَر of تِلْكَ",
            "A بَدَل of تِلْكَ",
            "The مَفْعُوْلٌ بِهِ of أَهْلَكْنَا",
            "The مُضَافٌ إِلَيْهِ of لَمَّا"
          ],
          "correct": 1,
          "explanation": "تِلْكَ is the مُبْتَدَأ and الْقُرَى names it, so it is a بَدَل; the خَبَر is the sentence أَهْلَكْنَاهُمْ لَمَّا ظَلَمُوا."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمَّا جَلَسَ الْجَدُّ عَلَى الْكُرْسِيِّ اجْتَمَعَ الْأَوْلَادُ حَوْلَهُ, how many مَفْعُوْلٌ فِيْهِ are there in the main sentence?",
          "options": [
            "None",
            "One",
            "Two",
            "Three"
          ],
          "correct": 2,
          "explanation": "The لَمَّا phrase is one, of time; حَوْلَهُ is a second, of place."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Translate: لَمَّا غَرَبَتِ الشَّمْسُ أَكَلَ الصَّائِمُوْنَ",
          "options": [
            "Whenever the sun sets, the fasting people eat",
            "When the sun set, the fasting people ate",
            "Since the sun set, the fasting people have eaten",
            "Where the sun sets, the fasting people eat"
          ],
          "correct": 1,
          "explanation": "لَمَّا is 'when' with a past meaning — 'whenever' belongs to كُلَّمَا and 'since' to مُذْ and مُنْذُ."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمَّا ابْتَلَى اللهُ يَعْقُوْبَ وَأَيُّوْبَ صَبَرَا صَبْرًا جَمِيْلًا, what does the أَلِف on صَبَرَا tell you?",
          "options": [
            "The verb is مَجْهُوْل",
            "The doer is dual — the two prophets just named",
            "The verb is مَنْصُوْب",
            "The doer is feminine plural"
          ],
          "correct": 1,
          "explanation": "أَلِفُ الِاثْنَيْنِ is the attached doer, referring back to يَعْقُوْب and أَيُّوْب inside the nested sentence."
        },
        {
          "title": "lunch",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lunch\"?",
          "options": [
            "غَدَاءٌ",
            "بَلَدٌ",
            "اِبْتَلَى يَبْتَلِيْ",
            "سَكَتَ يَسْكُتُ"
          ],
          "correct": 0
        },
        {
          "title": "lunch",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَدَاءٌ mean?",
          "options": [
            "lunch",
            "town, country",
            "to test, to try",
            "to be silent"
          ],
          "correct": 0
        },
        {
          "title": "lunch (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غَدَاءٌ?",
          "options": [
            "أَغْذِيَةٌ",
            "بِلَادٌ",
            "كَرَاسِيُّ",
            "شُمُوْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "sun",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sun\"?",
          "options": [
            "شَمْسٌ",
            "غَرَبَ يَغْرُبُ",
            "اِجْتَمَعَ يَجْتَمِعُ",
            "تَأَخَّرَ يَتَأَخَّرُ"
          ],
          "correct": 0
        },
        {
          "title": "sun",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَمْسٌ mean?",
          "options": [
            "sun",
            "to set (of the sun)",
            "to gather, to assemble",
            "to be late"
          ],
          "correct": 0
        },
        {
          "title": "sun (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَمْسٌ?",
          "options": [
            "شُمُوْسٌ",
            "أَغْذِيَةٌ",
            "بِلَادٌ",
            "كَرَاسِيُّ"
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
            "اِبْتَلَى يَبْتَلِيْ",
            "سَكَتَ يَسْكُتُ",
            "كَذَّبَ يُكَذِّبُ"
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
            "to test, to try",
            "to be silent",
            "to belie, to reject as false"
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
            "شُمُوْسٌ",
            "أَغْذِيَةٌ",
            "بِلَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "town, country",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"town, country\"?",
          "options": [
            "بَلَدٌ",
            "اِجْتَمَعَ يَجْتَمِعُ",
            "تَأَخَّرَ يَتَأَخَّرُ",
            "أَهْلَكَ يُهْلِكُ"
          ],
          "correct": 0
        },
        {
          "title": "town, country",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَلَدٌ mean?",
          "options": [
            "town, country",
            "to gather, to assemble",
            "to be late",
            "to destroy"
          ],
          "correct": 0
        },
        {
          "title": "town, country (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَلَدٌ?",
          "options": [
            "بِلَادٌ",
            "كَرَاسِيُّ",
            "شُمُوْسٌ",
            "أَغْذِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to set (of the sun)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to set (of the sun)\"?",
          "options": [
            "غَرَبَ يَغْرُبُ",
            "سَكَتَ يَسْكُتُ",
            "كَذَّبَ يُكَذِّبُ",
            "بَنَى يَبْنِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to set (of the sun)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَرَبَ يَغْرُبُ mean?",
          "options": [
            "to set (of the sun)",
            "to be silent",
            "to belie, to reject as false",
            "to build"
          ],
          "correct": 0
        },
        {
          "title": "to set (of the sun) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَرَبَ يَغْرُبُ?",
          "options": [
            "غُرُوْبًا",
            "بِنَاءً",
            "اِجْتِمَاعًا",
            "تَأَخُّرًا"
          ],
          "correct": 0
        },
        {
          "title": "to test, to try",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to test, to try\"?",
          "options": [
            "اِبْتَلَى يَبْتَلِيْ",
            "تَأَخَّرَ يَتَأَخَّرُ",
            "أَهْلَكَ يُهْلِكُ",
            "غَدَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to test, to try",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَلَى يَبْتَلِيْ mean?",
          "options": [
            "to test, to try",
            "to be late",
            "to destroy",
            "lunch"
          ],
          "correct": 0
        },
        {
          "title": "to test, to try (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَلَى يَبْتَلِيْ?",
          "options": [
            "اِبْتِلَاءً",
            "غُرُوْبًا",
            "سُكُوْتًا",
            "تَكْذِيْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to gather, to assemble",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to gather, to assemble\"?",
          "options": [
            "اِجْتَمَعَ يَجْتَمِعُ",
            "كَذَّبَ يُكَذِّبُ",
            "بَنَى يَبْنِيْ",
            "شَمْسٌ"
          ],
          "correct": 0
        },
        {
          "title": "to gather, to assemble",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتَمَعَ يَجْتَمِعُ mean?",
          "options": [
            "to gather, to assemble",
            "to belie, to reject as false",
            "to build",
            "sun"
          ],
          "correct": 0
        },
        {
          "title": "to gather, to assemble (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِجْتَمَعَ يَجْتَمِعُ?",
          "options": [
            "اِجْتِمَاعًا",
            "اِبْتِلَاءً",
            "تَأَخُّرًا",
            "إِهْلَاكًا"
          ],
          "correct": 0
        },
        {
          "title": "to be silent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be silent\"?",
          "options": [
            "سَكَتَ يَسْكُتُ",
            "أَهْلَكَ يُهْلِكُ",
            "غَدَاءٌ",
            "كُرْسِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to be silent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَكَتَ يَسْكُتُ mean?",
          "options": [
            "to be silent",
            "to destroy",
            "lunch",
            "chair"
          ],
          "correct": 0
        },
        {
          "title": "to be silent (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَكَتَ يَسْكُتُ?",
          "options": [
            "سُكُوْتًا",
            "اِجْتِمَاعًا",
            "تَكْذِيْبًا",
            "بِنَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be late",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be late\"?",
          "options": [
            "تَأَخَّرَ يَتَأَخَّرُ",
            "بَنَى يَبْنِيْ",
            "شَمْسٌ",
            "بَلَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be late",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَأَخَّرَ يَتَأَخَّرُ mean?",
          "options": [
            "to be late",
            "to build",
            "sun",
            "town, country"
          ],
          "correct": 0
        },
        {
          "title": "to be late (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَأَخَّرَ يَتَأَخَّرُ?",
          "options": [
            "تَأَخُّرًا",
            "سُكُوْتًا",
            "إِهْلَاكًا",
            "غُرُوْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to belie, to reject as false",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to belie, to reject as false\"?",
          "options": [
            "كَذَّبَ يُكَذِّبُ",
            "غَدَاءٌ",
            "كُرْسِيٌّ",
            "غَرَبَ يَغْرُبُ"
          ],
          "correct": 0
        },
        {
          "title": "to belie, to reject as false",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَذَّبَ يُكَذِّبُ mean?",
          "options": [
            "to belie, to reject as false",
            "lunch",
            "chair",
            "to set (of the sun)"
          ],
          "correct": 0
        },
        {
          "title": "to belie, to reject as false (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَّبَ يُكَذِّبُ?",
          "options": [
            "تَكْذِيْبًا",
            "تَأَخُّرًا",
            "بِنَاءً",
            "اِبْتِلَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to destroy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to destroy\"?",
          "options": [
            "أَهْلَكَ يُهْلِكُ",
            "شَمْسٌ",
            "بَلَدٌ",
            "اِبْتَلَى يَبْتَلِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to destroy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَهْلَكَ يُهْلِكُ mean?",
          "options": [
            "to destroy",
            "sun",
            "town, country",
            "to test, to try"
          ],
          "correct": 0
        },
        {
          "title": "to destroy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَهْلَكَ يُهْلِكُ?",
          "options": [
            "إِهْلَاكًا",
            "تَكْذِيْبًا",
            "غُرُوْبًا",
            "اِجْتِمَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to build",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to build\"?",
          "options": [
            "بَنَى يَبْنِيْ",
            "كُرْسِيٌّ",
            "غَرَبَ يَغْرُبُ",
            "اِجْتَمَعَ يَجْتَمِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to build",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَنَى يَبْنِيْ mean?",
          "options": [
            "to build",
            "chair",
            "to set (of the sun)",
            "to gather, to assemble"
          ],
          "correct": 0
        },
        {
          "title": "to build (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَنَى يَبْنِيْ?",
          "options": [
            "بِنَاءً",
            "إِهْلَاكًا",
            "اِبْتِلَاءً",
            "سُكُوْتًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "كلما",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The مُضَافٌ إِلَيْهِ of كُلَّمَا is a جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ — the same requirement we met with لَمَّا. It is translated as 'whenever'.",
              "list": false
            },
            {
              "html": "Where كُلَّمَا parts company with لَمَّا is tense. لَمَّا is locked to the past: one event, once, already over. كُلَّمَا denotes a repeated event, and that repetition may lie in the past, the present, or the future. The Arabic verb stays مَاضٍ in form either way; context alone decides how you render it in English.",
              "list": false
            },
            {
              "html": "سَلِّمْ عَلَى وَالِدَيْكَ كُلَّمَا دَخَلْتَ الْبَيْتَ — Greet your parents whenever you enter the house.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Notice that دَخَلْتَ is مَاضٍ in form yet renders as the English present 'you enter'. The main verb here is an أَمْر, which tells us the instruction is a standing one — so the repetition is present and ongoing rather than finished.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "سَلِّمْ عَلَى وَالِدَيْكَ كُلَّمَا دَخَلْتَ الْبَيْتَ",
                "translation": "Greet your parents whenever you enter the house.",
                "cells": [
                  "سَلِّمْ",
                  "عَلَى",
                  "وَالِدَيْكَ",
                  "كُلَّمَا",
                  "دَخَلْتَ",
                  "الْبَيْتَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                      },
                      {
                        "start": 3,
                        "end": 5,
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
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
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
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How does كُلَّمَا differ from لَمَّا in meaning, even though both require a فِعْلٌ مَاضٍ؟",
            "kind": "mcq",
            "options": [
              "كُلَّمَا denotes a repeated event (past, present or future); لَمَّا is one past occasion, over and done",
              "كُلَّمَا is only used in questions",
              "لَمَّا can take a nominal sentence and كُلَّمَا cannot",
              "There is no difference in meaning"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Reading the Tense from Context",
          "lines": [
            {
              "html": "Because كُلَّمَا itself carries no tense, the surrounding sentence supplies it. Three signals do most of the work: the mood of the main verb, whether the statement is a general truth, and whether the passage is narrating something that has already happened.",
              "list": false
            },
            {
              "table": {
                "title": "Three Contexts, Three Renderings",
                "headers": [
                  "Sentence",
                  "Signal",
                  "Rendering"
                ],
                "rows": [
                  [
                    "سَلِّمْ عَلَى وَالِدَيْكَ كُلَّمَا دَخَلْتَ الْبَيْتَ",
                    "The main verb is an أَمْر — a standing instruction",
                    "'whenever you enter'"
                  ],
                  [
                    "كُلَّمَا تُبْتَ إِلَى اللهِ غَفَرَ لَكَ ذُنُوْبَكَ",
                    "A general truth about how Allah deals with His servants",
                    "'whenever you turn … He forgives'"
                  ],
                  [
                    "كُلَّمَا جَاءَهُمْ رَسُوْلٌ كَذَّبُوْا",
                    "A narration about past nations",
                    "'whenever a messenger came … they belied'"
                  ]
                ]
              }
            },
            {
              "html": "A useful contrast to keep: لَمَّا سَمِعْتُ الْأَذَانَ صَلَّيْتُ is 'when I heard the athan I prayed' — one occasion. كُلَّمَا سَمِعْتُ الْأَذَانَ صَلَّيْتُ is 'whenever I heard the athan I prayed' — a habit. The only change is the adverb.",
              "list": false
            },
            {
              "html": "كُلَّمَا ازْدَدْنَا عِلْمًا زِدْنَا جَهْلًا — Whenever we increase in knowledge, we increase in ignorance.",
              "list": true,
              "bullet": true
            },
            {
              "html": "كُلَّمَا تُبْتَ إِلَى اللهِ غَفَرَ لَكَ ذُنُوْبَكَ — Whenever you turn to Allah in repentance, He forgives you your sins.",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "كُلَّمَا at a Glance",
                "headers": [
                  "Feature",
                  "Rule"
                ],
                "rows": [
                  [
                    "Its مُضَافٌ إِلَيْهِ",
                    "A جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ"
                  ],
                  [
                    "English rendering",
                    "'whenever'"
                  ],
                  [
                    "Tense",
                    "Past, present or future — determined by context"
                  ],
                  [
                    "Slot in the main sentence",
                    "مَفْعُوْلٌ فِيْهِ"
                  ],
                  [
                    "Compare with لَمَّا",
                    "لَمَّا is one past occasion; كُلَّمَا is repetition"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Since كُلَّمَا carries no tense of its own, what tells you how to render it in English؟",
            "kind": "mcq",
            "options": [
              "Context — e.g. the mood of the main verb, whether it's a general truth, or a narration of the past",
              "The gender of the subject",
              "Whether إِذَا appears nearby",
              "The position of the adverb in the sentence"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "كُلَّمَا",
        "rows": [
          {
            "label": "Its sentence",
            "arabic": "جُمْلَةٌ فِعْلِيَّةٌ بِفِعْلٍ مَاضٍ",
            "meaning": "Same requirement as لَمَّا — the nested verb must be a فِعْلٌ مَاضٍ."
          },
          {
            "label": "Its meaning",
            "arabic": "كُلَّمَا = whenever",
            "meaning": "It marks a repeated event rather than a single one."
          },
          {
            "label": "Its tense",
            "arabic": "مَاضٍ أَوْ حَالٌ أَوْ مُسْتَقْبَلٌ",
            "meaning": "The مَاضٍ form does not fix the English tense; context supplies past, present or future."
          },
          {
            "label": "Its slot",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "كُلَّمَا with its nested sentence is the adverbial of the main sentence."
          },
          {
            "label": "The book's example",
            "arabic": "سَلِّمْ عَلَى وَالِدَيْكَ كُلَّمَا دَخَلْتَ الْبَيْتَ",
            "meaning": "'Greet your parents whenever you enter the house' — an أَمْر main verb signals a standing habit."
          },
          {
            "label": "Against لَمَّا",
            "arabic": "مَرَّةٌ وَاحِدَةٌ أَمْ تَكْرَارٌ",
            "meaning": "لَمَّا = one past occasion, 'when'. كُلَّمَا = repetition, 'whenever'."
          }
        ]
      },
      "quiz": [
        {
          "q": "What kind of verb must the sentence after كُلَّمَا contain?",
          "options": [
            "فِعْلٌ مُضَارِعٌ",
            "فِعْلٌ أَمْرٌ",
            "فِعْلٌ مَاضٍ",
            "Any verb at all"
          ],
          "correct": 2,
          "explanation": "Like لَمَّا, كُلَّمَا takes a جُمْلَةٌ فِعْلِيَّةٌ whose verb is a فِعْلٌ مَاضٍ."
        },
        {
          "q": "How is كُلَّمَا rendered in English?",
          "options": [
            "'whenever'",
            "'when'",
            "'since'",
            "'wherever'"
          ],
          "correct": 0,
          "explanation": "It marks repetition, not a single occasion."
        },
        {
          "q": "Which tenses can a كُلَّمَا sentence denote?",
          "options": [
            "Only the past",
            "Only the present",
            "Past or present, never future",
            "Past, present or future"
          ],
          "correct": 3,
          "explanation": "The verb's مَاضٍ form does not fix the tense; the context does."
        },
        {
          "q": "In سَلِّمْ عَلَى وَالِدَيْكَ كُلَّمَا دَخَلْتَ الْبَيْتَ, why is دَخَلْتَ rendered as an English present?",
          "options": [
            "Because دَخَلَ has no past form",
            "Because the main verb is an أَمْر, marking a standing instruction",
            "Because it follows a preposition",
            "Because الْبَيْتَ is definite"
          ],
          "correct": 1,
          "explanation": "A command to do something repeatedly points to an ongoing habit, so 'whenever you enter'."
        },
        {
          "q": "What is the difference in meaning between لَمَّا سَمِعْتُ الْأَذَانَ صَلَّيْتُ and كُلَّمَا سَمِعْتُ الْأَذَانَ صَلَّيْتُ?",
          "options": [
            "The first is a habit, the second a single occasion",
            "The first is future, the second past",
            "The first is a single occasion, the second a habit",
            "There is no difference"
          ],
          "correct": 2,
          "explanation": "لَمَّا reports one event; كُلَّمَا reports a repeated one."
        },
        {
          "q": "What slot does كُلَّمَا with its nested sentence fill?",
          "options": [
            "خَبَرٌ",
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 3,
          "explanation": "As with all the special adverbs, it becomes the adverbial of the main sentence."
        }
      ],
      "bank": [
        {
          "title": "سَلِّمْ عَلَى وَالِدَيْكَ كُلَّمَا دَخَلْتَ الْبَيْتَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 446 (Section 1, Part 6)",
          "sentence": "سَلِّمْ عَلَى وَالِدَيْكَ كُلَّمَا دَخَلْتَ الْبَيْتَ",
          "translation": "Greet your parents whenever you enter the house.",
          "cells": [
            "سَلِّمْ",
            "عَلَى",
            "وَالِدَيْكَ",
            "كُلَّمَا",
            "دَخَلْتَ",
            "الْبَيْتَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 5,
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
                  "role": "جَارٌّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كُلَّمَا ذَكَرْتُ أَبِيْ دَعَوْتُ لَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا ذَكَرْتُ أَبِيْ دَعَوْتُ لَهُ",
          "translation": "Whenever I remember my father, I supplicate for him.",
          "cells": [
            "كُلَّمَا",
            "ذَكَرْتُ",
            "أَبِيْ",
            "دَعَوْتُ",
            "لَهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "كُلَّمَا ازْدَدْنَا عِلْمًا زِدْنَا جَهْلًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا ازْدَدْنَا عِلْمًا زِدْنَا جَهْلًا",
          "translation": "Whenever we increase in knowledge, we increase in ignorance.",
          "cells": [
            "كُلَّمَا",
            "ازْدَدْنَا",
            "عِلْمًا",
            "زِدْنَا",
            "جَهْلًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "تَمْيِيْزٌ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كُلَّمَا أَصَابَتْنَا مُصِيْبَةٌ قُلْنَا إِنَّا لِلّٰهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا أَصَابَتْنَا مُصِيْبَةٌ قُلْنَا إِنَّا لِلّٰهِ",
          "translation": "Whenever a calamity strikes us, we say 'Indeed we belong to Allah'.",
          "cells": [
            "كُلَّمَا",
            "أَصَابَتْنَا",
            "مُصِيْبَةٌ",
            "قُلْنَا",
            "إِنَّا لِلّٰهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (نَا)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كُلَّمَا تُبْتَ إِلَى اللهِ غَفَرَ لَكَ ذُنُوْبَكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا تُبْتَ إِلَى اللهِ غَفَرَ لَكَ ذُنُوْبَكَ",
          "translation": "Whenever you turn to Allah in repentance, He forgives you your sins.",
          "cells": [
            "كُلَّمَا",
            "تُبْتَ",
            "إِلَى",
            "اللهِ",
            "غَفَرَ",
            "لَكَ",
            "ذُنُوْبَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 3,
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
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَدْعُوْ لِوَالِدَيَّ كُلَّمَا دَعَوْتُ لِنَفْسِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "أَدْعُوْ لِوَالِدَيَّ كُلَّمَا دَعَوْتُ لِنَفْسِيْ",
          "translation": "I supplicate for my parents whenever I supplicate for myself.",
          "cells": [
            "أَدْعُوْ",
            "لِوَالِدَيَّ",
            "كُلَّمَا",
            "دَعَوْتُ",
            "لِنَفْسِيْ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "كُلَّمَا جَاءَهُمْ رَسُوْلٌ كَذَّبُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا جَاءَهُمْ رَسُوْلٌ كَذَّبُوْا",
          "translation": "Whenever a messenger came to them, they belied him.",
          "cells": [
            "كُلَّمَا",
            "جَاءَهُمْ",
            "رَسُوْلٌ",
            "كَذَّبُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُمْ)"
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كُلَّمَا سَجَدْتَ سَجْدَةً رَفَعَكَ اللهُ بِهَا دَرَجَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا سَجَدْتَ سَجْدَةً رَفَعَكَ اللهُ بِهَا دَرَجَةً",
          "translation": "Whenever you make a prostration, Allah raises you a rank by it.",
          "cells": [
            "كُلَّمَا",
            "سَجَدْتَ",
            "سَجْدَةً",
            "رَفَعَكَ",
            "اللهُ",
            "بِهَا",
            "دَرَجَةً"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
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
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "تَمْيِيْزٌ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كُلَّمَا قَرَأْتَ آيَةً مِنْ كِتَابِ اللهِ كَتَبَ اللهُ لَكَ أَجْرًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا قَرَأْتَ آيَةً مِنْ كِتَابِ اللهِ كَتَبَ اللهُ لَكَ أَجْرًا",
          "translation": "Whenever you read a verse from the Book of Allah, Allah writes a reward for you.",
          "cells": [
            "كُلَّمَا",
            "قَرَأْتَ",
            "آيَةً",
            "مِنْ كِتَابِ اللهِ",
            "كَتَبَ",
            "اللهُ",
            "لَكَ",
            "أَجْرًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 7,
                  "end": 7,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "role": "نَعْتٌ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كُلَّمَا مَشَيْتَ إِلَى الْمَسْجِدِ رُفِعَتْ دَرَجَاتُكَ عِنْدَ اللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا مَشَيْتَ إِلَى الْمَسْجِدِ رُفِعَتْ دَرَجَاتُكَ عِنْدَ اللهِ",
          "translation": "Whenever you walk to the masjid, your ranks are raised with Allah.",
          "cells": [
            "كُلَّمَا",
            "مَشَيْتَ",
            "إِلَى الْمَسْجِدِ",
            "رُفِعَتْ",
            "دَرَجَاتُكَ",
            "عِنْدَ",
            "اللهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "نَائِبُ فَاعِلٍ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
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
          "title": "كُلَّمَا شَرِبْتُ مَاءً أَوْ أَكَلْتُ طَعَامًا شَكَرْتُ اللهَ عَلَى نِعْمَتِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا شَرِبْتُ مَاءً أَوْ أَكَلْتُ طَعَامًا شَكَرْتُ اللهَ عَلَى نِعْمَتِهِ",
          "translation": "Whenever I drink water or eat food, I thank Allah for His blessing.",
          "cells": [
            "كُلَّمَا",
            "شَرِبْتُ",
            "مَاءً",
            "أَوْ",
            "أَكَلْتُ",
            "طَعَامًا",
            "شَكَرْتُ",
            "اللهَ",
            "عَلَى نِعْمَتِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كُلَّمَا قَامَتِ الْمُؤْمِنَاتُ يَدْعُوْنَ اللهَ فَاضَتْ أَعْيُنُهُنَّ دُمُوْعًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا قَامَتِ الْمُؤْمِنَاتُ يَدْعُوْنَ اللهَ فَاضَتْ أَعْيُنُهُنَّ دُمُوْعًا",
          "translation": "Whenever the believing women stand supplicating to Allah, their eyes overflow with tears.",
          "cells": [
            "كُلَّمَا",
            "قَامَتِ",
            "الْمُؤْمِنَاتُ",
            "يَدْعُوْنَ",
            "اللهَ",
            "فَاضَتْ",
            "أَعْيُنُهُنَّ",
            "دُمُوْعًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "تَمْيِيْزٌ"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نُوْنُ النِّسْوَةِ)"
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
            "نَعْتٌ",
            "بَدَلٌ",
            "تَأْكِيْدٌ",
            "مَفْعُوْلٌ مُطْلَقٌ"
          ]
        },
        {
          "title": "كُلَّمَا دَعَوْتُهُمْ جَعَلُوْا أَصَابِعَهُمْ فِيْ آذَانِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 6)",
          "sentence": "كُلَّمَا دَعَوْتُهُمْ جَعَلُوْا أَصَابِعَهُمْ فِيْ آذَانِهِمْ",
          "translation": "Whenever I called them, they put their fingers in their ears.",
          "cells": [
            "كُلَّمَا",
            "دَعَوْتُهُمْ",
            "جَعَلُوْا",
            "أَصَابِعَهُمْ",
            "فِيْ",
            "آذَانِهِمْ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُلَّمَا ازْدَدْنَا عِلْمًا زِدْنَا جَهْلًا, what are عِلْمًا and جَهْلًا?",
          "options": [
            "Both مَفْعُوْلٌ بِهِ",
            "Both تَمْيِيْز",
            "Both حَال",
            "Both مَفْعُوْلٌ مُطْلَقٌ"
          ],
          "correct": 1,
          "explanation": "They specify in what respect the increase occurred, which is the work of the تَمْيِيْز."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُلَّمَا أَصَابَتْنَا مُصِيْبَةٌ قُلْنَا إِنَّا لِلّٰهِ, what is مُصِيْبَةٌ?",
          "options": [
            "The مَفْعُوْلٌ بِهِ of أَصَابَتْ",
            "The فَاعِل of أَصَابَتْ",
            "The مُضَافٌ إِلَيْهِ of كُلَّمَا on its own",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "The attached نَا is the object — the calamity is what does the striking, so it is مَرْفُوْع."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُلَّمَا سَجَدْتَ سَجْدَةً رَفَعَكَ اللهُ بِهَا دَرَجَةً, what is سَجْدَةً?",
          "options": [
            "A تَمْيِيْز",
            "A حَال",
            "A مَفْعُوْلٌ مُطْلَقٌ",
            "A نَعْت"
          ],
          "correct": 2,
          "explanation": "It is the مَصْدَر of سَجَدَ used to count the action — one prostration."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُلَّمَا سَجَدْتَ سَجْدَةً رَفَعَكَ اللهُ بِهَا دَرَجَةً, what is دَرَجَةً?",
          "options": [
            "A تَمْيِيْز, specifying by how much He raises you",
            "A second مَفْعُوْلٌ مُطْلَقٌ",
            "The فَاعِل of رَفَعَ",
            "A بَدَل of اللهُ"
          ],
          "correct": 0,
          "explanation": "It answers 'raised by what measure?', which is the تَمْيِيْز's question."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُلَّمَا مَشَيْتَ إِلَى الْمَسْجِدِ رُفِعَتْ دَرَجَاتُكَ, what is دَرَجَاتُكَ?",
          "options": [
            "The فَاعِل of رُفِعَتْ",
            "The نَائِبُ فَاعِلٍ of رُفِعَتْ",
            "The مَفْعُوْلٌ بِهِ of رُفِعَتْ",
            "The مُضَافٌ إِلَيْهِ of كُلَّمَا"
          ],
          "correct": 1,
          "explanation": "رُفِعَتْ is مَجْهُوْل: the doer is unmentioned and the former object steps into the subject slot."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُلَّمَا قَامَتِ الْمُؤْمِنَاتُ يَدْعُوْنَ اللهَ فَاضَتْ أَعْيُنُهُنَّ دُمُوْعًا, what is يَدْعُوْنَ اللهَ?",
          "options": [
            "A second مَفْعُوْلٌ فِيْهِ",
            "A حَال describing the believing women as they stand",
            "A نَعْت of الْمُؤْمِنَاتُ",
            "The خَبَر of the sentence"
          ],
          "correct": 1,
          "explanation": "A مُضَارِع sentence after a definite noun describes the state it is in — the حَال we met in Part 3."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Why is دُمُوْعًا مَنْصُوْب in فَاضَتْ أَعْيُنُهُنَّ دُمُوْعًا?",
          "options": [
            "It is the object of فَاضَتْ",
            "It is a تَمْيِيْز, telling us in what respect the eyes overflowed",
            "It is a حَال of أَعْيُنُهُنَّ",
            "It is a مَفْعُوْلٌ مُطْلَقٌ"
          ],
          "correct": 1,
          "explanation": "فَاضَ is intransitive; دُمُوْعًا specifies the substance of the overflowing."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُلَّمَا شَرِبْتُ مَاءً أَوْ أَكَلْتُ طَعَامًا شَكَرْتُ اللهَ, how far does the مُضَافٌ إِلَيْهِ of كُلَّمَا extend?",
          "options": [
            "Only as far as مَاءً",
            "As far as طَعَامًا, taking in both joined sentences",
            "To the end of the whole sentence",
            "It has no مُضَافٌ إِلَيْهِ here"
          ],
          "correct": 1,
          "explanation": "أَوْ joins a second nested sentence to the first, and both together fill the مُضَافٌ إِلَيْهِ slot; the main sentence begins at شَكَرْتُ."
        },
        {
          "title": "calamity, affliction",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"calamity, affliction\"?",
          "options": [
            "مُصِيْبَةٌ",
            "أَجْرٌ",
            "دَمْعٌ",
            "أُذُنٌ"
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
            "tear",
            "ear"
          ],
          "correct": 0
        },
        {
          "title": "calamity, affliction (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُصِيْبَةٌ?",
          "options": [
            "مَصَائِبُ",
            "أُجُوْرٌ",
            "دُمُوْعٌ",
            "آذَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "prostration",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"prostration\"?",
          "options": [
            "سَجْدَةٌ",
            "نِعْمَةٌ",
            "أُصْبُعٌ",
            "قَارِئٌ"
          ],
          "correct": 0
        },
        {
          "title": "prostration",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَجْدَةٌ mean?",
          "options": [
            "prostration",
            "blessing, favour",
            "finger",
            "reciter"
          ],
          "correct": 0
        },
        {
          "title": "prostration (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَجْدَةٌ?",
          "options": [
            "سَجَدَاتٌ",
            "نِعَمٌ",
            "أَصَابِعُ",
            "قُرَّاءُ"
          ],
          "correct": 0
        },
        {
          "title": "rank, degree",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"rank, degree\"?",
          "options": [
            "دَرَجَةٌ",
            "دَمْعٌ",
            "أُذُنٌ",
            "اِزْدَادَ يَزْدَادُ"
          ],
          "correct": 0
        },
        {
          "title": "rank, degree",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَرَجَةٌ mean?",
          "options": [
            "rank, degree",
            "tear",
            "ear",
            "to increase (intransitive)"
          ],
          "correct": 0
        },
        {
          "title": "rank, degree (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَرَجَةٌ?",
          "options": [
            "دَرَجَاتٌ",
            "دُمُوْعٌ",
            "آذَانٌ",
            "مَصَائِبُ"
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
            "أُصْبُعٌ",
            "قَارِئٌ",
            "تَابَ يَتُوْبُ"
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
            "finger",
            "reciter",
            "to repent, to turn back"
          ],
          "correct": 0
        },
        {
          "title": "reward (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَجْرٌ?",
          "options": [
            "أُجُوْرٌ",
            "أَصَابِعُ",
            "قُرَّاءُ",
            "سَجَدَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "blessing, favour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"blessing, favour\"?",
          "options": [
            "نِعْمَةٌ",
            "أُذُنٌ",
            "اِزْدَادَ يَزْدَادُ",
            "اِبْتَسَمَ يَبْتَسِمُ"
          ],
          "correct": 0
        },
        {
          "title": "blessing, favour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نِعْمَةٌ mean?",
          "options": [
            "blessing, favour",
            "ear",
            "to increase (intransitive)",
            "to smile"
          ],
          "correct": 0
        },
        {
          "title": "blessing, favour (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نِعْمَةٌ?",
          "options": [
            "نِعَمٌ",
            "آذَانٌ",
            "مَصَائِبُ",
            "دَرَجَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "tear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tear\"?",
          "options": [
            "دَمْعٌ",
            "قَارِئٌ",
            "تَابَ يَتُوْبُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "tear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَمْعٌ mean?",
          "options": [
            "tear",
            "reciter",
            "to repent, to turn back",
            "to be arrogant"
          ],
          "correct": 0
        },
        {
          "title": "tear (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَمْعٌ?",
          "options": [
            "دُمُوْعٌ",
            "قُرَّاءُ",
            "سَجَدَاتٌ",
            "أُجُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "finger",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"finger\"?",
          "options": [
            "أُصْبُعٌ",
            "اِزْدَادَ يَزْدَادُ",
            "اِبْتَسَمَ يَبْتَسِمُ",
            "كَسَبَ يَكْسِبُ"
          ],
          "correct": 0
        },
        {
          "title": "finger",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُصْبُعٌ mean?",
          "options": [
            "finger",
            "to increase (intransitive)",
            "to smile",
            "to earn"
          ],
          "correct": 0
        },
        {
          "title": "finger (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُصْبُعٌ?",
          "options": [
            "أَصَابِعُ",
            "مَصَائِبُ",
            "دَرَجَاتٌ",
            "نِعَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "ear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ear\"?",
          "options": [
            "أُذُنٌ",
            "تَابَ يَتُوْبُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "أَنْفَقَ يُنْفِقُ"
          ],
          "correct": 0
        },
        {
          "title": "ear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُذُنٌ mean?",
          "options": [
            "ear",
            "to repent, to turn back",
            "to be arrogant",
            "to spend"
          ],
          "correct": 0
        },
        {
          "title": "ear (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُذُنٌ?",
          "options": [
            "آذَانٌ",
            "سَجَدَاتٌ",
            "أُجُوْرٌ",
            "دُمُوْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "reciter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"reciter\"?",
          "options": [
            "قَارِئٌ",
            "اِبْتَسَمَ يَبْتَسِمُ",
            "كَسَبَ يَكْسِبُ",
            "فَاضَ يَفِيْضُ"
          ],
          "correct": 0
        },
        {
          "title": "reciter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَارِئٌ mean?",
          "options": [
            "reciter",
            "to smile",
            "to earn",
            "to overflow"
          ],
          "correct": 0
        },
        {
          "title": "reciter (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَارِئٌ?",
          "options": [
            "قُرَّاءُ",
            "دَرَجَاتٌ",
            "نِعَمٌ",
            "أَصَابِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to increase (intransitive)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to increase (intransitive)\"?",
          "options": [
            "اِزْدَادَ يَزْدَادُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "أَنْفَقَ يُنْفِقُ",
            "رَفَعَ يَرْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to increase (intransitive)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِزْدَادَ يَزْدَادُ mean?",
          "options": [
            "to increase (intransitive)",
            "to be arrogant",
            "to spend",
            "to raise"
          ],
          "correct": 0
        },
        {
          "title": "to increase (intransitive) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِزْدَادَ يَزْدَادُ?",
          "options": [
            "اِزْدِيَادًا",
            "كَسْبًا",
            "فَيْضًا",
            "إِصَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to repent, to turn back",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to repent, to turn back\"?",
          "options": [
            "تَابَ يَتُوْبُ",
            "كَسَبَ يَكْسِبُ",
            "فَاضَ يَفِيْضُ",
            "أَصَابَ يُصِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to repent, to turn back",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَابَ يَتُوْبُ mean?",
          "options": [
            "to repent, to turn back",
            "to earn",
            "to overflow",
            "to strike, to befall"
          ],
          "correct": 0
        },
        {
          "title": "to repent, to turn back (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَابَ يَتُوْبُ?",
          "options": [
            "تَوْبَةً",
            "إِنْفَاقًا",
            "رَفْعًا",
            "اِزْدِيَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to smile",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to smile\"?",
          "options": [
            "اِبْتَسَمَ يَبْتَسِمُ",
            "أَنْفَقَ يُنْفِقُ",
            "رَفَعَ يَرْفَعُ",
            "مُصِيْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to smile",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِبْتَسَمَ يَبْتَسِمُ mean?",
          "options": [
            "to smile",
            "to spend",
            "to raise",
            "calamity, affliction"
          ],
          "correct": 0
        },
        {
          "title": "to smile (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِبْتَسَمَ يَبْتَسِمُ?",
          "options": [
            "اِبْتِسَامًا",
            "فَيْضًا",
            "إِصَابَةً",
            "تَوْبَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be arrogant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be arrogant\"?",
          "options": [
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "فَاضَ يَفِيْضُ",
            "أَصَابَ يُصِيْبُ",
            "سَجْدَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be arrogant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَكْبَرَ يَسْتَكْبِرُ mean?",
          "options": [
            "to be arrogant",
            "to overflow",
            "to strike, to befall",
            "prostration"
          ],
          "correct": 0
        },
        {
          "title": "to be arrogant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَكْبَرَ يَسْتَكْبِرُ?",
          "options": [
            "اِسْتِكْبَارًا",
            "رَفْعًا",
            "اِزْدِيَادًا",
            "اِبْتِسَامًا"
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
            "رَفَعَ يَرْفَعُ",
            "مُصِيْبَةٌ",
            "دَرَجَةٌ"
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
            "to raise",
            "calamity, affliction",
            "rank, degree"
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
            "إِصَابَةً",
            "تَوْبَةً",
            "اِسْتِكْبَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to spend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to spend\"?",
          "options": [
            "أَنْفَقَ يُنْفِقُ",
            "أَصَابَ يُصِيْبُ",
            "سَجْدَةٌ",
            "أَجْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to spend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْفَقَ يُنْفِقُ mean?",
          "options": [
            "to spend",
            "to strike, to befall",
            "prostration",
            "reward"
          ],
          "correct": 0
        },
        {
          "title": "to spend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْفَقَ يُنْفِقُ?",
          "options": [
            "إِنْفَاقًا",
            "اِزْدِيَادًا",
            "اِبْتِسَامًا",
            "كَسْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to overflow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to overflow\"?",
          "options": [
            "فَاضَ يَفِيْضُ",
            "مُصِيْبَةٌ",
            "دَرَجَةٌ",
            "نِعْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to overflow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَاضَ يَفِيْضُ mean?",
          "options": [
            "to overflow",
            "calamity, affliction",
            "rank, degree",
            "blessing, favour"
          ],
          "correct": 0
        },
        {
          "title": "to overflow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَاضَ يَفِيْضُ?",
          "options": [
            "فَيْضًا",
            "تَوْبَةً",
            "اِسْتِكْبَارًا",
            "إِنْفَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to raise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to raise\"?",
          "options": [
            "رَفَعَ يَرْفَعُ",
            "سَجْدَةٌ",
            "أَجْرٌ",
            "دَمْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to raise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَفَعَ يَرْفَعُ mean?",
          "options": [
            "to raise",
            "prostration",
            "reward",
            "tear"
          ],
          "correct": 0
        },
        {
          "title": "to raise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَفَعَ يَرْفَعُ?",
          "options": [
            "رَفْعًا",
            "اِبْتِسَامًا",
            "كَسْبًا",
            "فَيْضًا"
          ],
          "correct": 0
        },
        {
          "title": "to strike, to befall",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to strike, to befall\"?",
          "options": [
            "أَصَابَ يُصِيْبُ",
            "دَرَجَةٌ",
            "نِعْمَةٌ",
            "أُصْبُعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to strike, to befall",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَصَابَ يُصِيْبُ mean?",
          "options": [
            "to strike, to befall",
            "rank, degree",
            "blessing, favour",
            "finger"
          ],
          "correct": 0
        },
        {
          "title": "to strike, to befall (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَصَابَ يُصِيْبُ?",
          "options": [
            "إِصَابَةً",
            "اِسْتِكْبَارًا",
            "إِنْفَاقًا",
            "رَفْعًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "إذ",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The مُضَافٌ إِلَيْهِ of إِذْ can be a جُمْلَةٌ فِعْلِيَّةٌ or a جُمْلَةٌ اسْمِيَّةٌ. It is translated as 'when'.",
              "list": false
            },
            {
              "html": "This is the first loosening of the pattern. لَمَّا and كُلَّمَا both insisted on a verbal sentence with a مَاضٍ verb; إِذْ accepts either kind of sentence. What follows it may be a verb with its doer, or a مُبْتَدَأ with its خَبَر.",
              "list": false
            },
            {
              "html": "نَصَرَ اللهُ النَّبِيَّ إِذْ أَخْرَجَهُ قَوْمُهُ — Allah assisted the Prophet ﷺ when his people expelled him.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "نَصَرَ اللهُ النَّبِيَّ إِذْ أَخْرَجَهُ قَوْمُهُ",
                "translation": "Allah assisted the Prophet ﷺ when his people expelled him.",
                "cells": [
                  "نَصَرَ",
                  "اللهُ",
                  "النَّبِيَّ",
                  "إِذْ",
                  "أَخْرَجَهُ",
                  "قَوْمُهُ"
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
                        "end": 5,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
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
                        "end": 5,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Note the order inside أَخْرَجَهُ قَوْمُهُ: the object is attached to the verb and the doer follows as a separate word. It is قَوْمُهُ that did the expelling, and the هُ that was expelled.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does إِذْ loosen the pattern set by لَمَّا and كُلَّمَا؟",
            "kind": "mcq",
            "options": [
              "Its مُضَافٌ إِلَيْهِ can be either a جُمْلَةٌ فِعْلِيَّةٌ or a جُمْلَةٌ اسْمِيَّةٌ, not just a ماضٍ verbal sentence",
              "It never takes a مُضَافٌ إِلَيْهِ at all",
              "It can only take a مُضَارِع verb",
              "It is translated as 'whenever' instead of 'when'"
            ],
            "correct": 0
          }
        },
        {
          "heading": "إِذْ with a Nominal Sentence",
          "lines": [
            {
              "html": "When a جُمْلَةٌ اسْمِيَّةٌ follows إِذْ, the whole مُبْتَدَأ-and-خَبَر pair is the مُضَافٌ إِلَيْهِ, and the analysis of that pair sits on the row beneath.",
              "list": false
            },
            {
              "html": "صَلَّيْتُ إِذِ الْمُؤَذِّنُ فِي الْمَسْجِدِ — I prayed when the mu'adhdhin was in the masjid.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "صَلَّيْتُ إِذِ الْمُؤَذِّنُ فِي الْمَسْجِدِ",
                "translation": "I prayed when the mu'adhdhin was in the masjid.",
                "cells": [
                  "صَلَّيْتُ",
                  "إِذِ",
                  "الْمُؤَذِّنُ",
                  "فِي",
                  "الْمَسْجِدِ"
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
                        "end": 4,
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
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 2,
                        "end": 4,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 3,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Every sentence in the book's Exercise 6 happens to be verbal, so it is worth holding a nominal instance in mind as well: ﴿وَإِذْ أَنْتُمْ أَجِنَّةٌ فِيْ بُطُوْنِ أُمَّهَاتِكُمْ﴾ — 'and when you were fetuses in the bellies of your mothers'. أَنْتُمْ is the مُبْتَدَأ, أَجِنَّةٌ the خَبَر, and the two together are the مُضَافٌ إِلَيْهِ of إِذْ.",
              "list": false
            },
            {
              "table": {
                "title": "The Three Special Adverbs So Far",
                "headers": [
                  "Adverb",
                  "Its sentence",
                  "English"
                ],
                "rows": [
                  [
                    "لَمَّا",
                    "جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ",
                    "'when' — one past occasion"
                  ],
                  [
                    "كُلَّمَا",
                    "جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ",
                    "'whenever' — repetition, any tense"
                  ],
                  [
                    "إِذْ",
                    "جُمْلَةٌ فِعْلِيَّةٌ or جُمْلَةٌ اسْمِيَّةٌ",
                    "'when'"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In صَلَّيْتُ إِذِ الْمُؤَذِّنُ فِي الْمَسْجِدِ, what fills the مُضَافٌ إِلَيْهِ of إِذِ؟",
            "kind": "mcq",
            "options": [
              "The whole nominal sentence الْمُؤَذِّنُ فِي الْمَسْجِدِ (مبتدأ + خبر)",
              "Only الْمُؤَذِّنُ",
              "Only فِي الْمَسْجِدِ",
              "There is no مضاف إليه here"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "إِذْ",
        "rows": [
          {
            "label": "Its sentence",
            "arabic": "جُمْلَةٌ فِعْلِيَّةٌ أَوْ جُمْلَةٌ اسْمِيَّةٌ",
            "meaning": "Unlike لَمَّا and كُلَّمَا, إِذْ accepts either kind of sentence as its مُضَافٌ إِلَيْهِ."
          },
          {
            "label": "Its meaning",
            "arabic": "إِذْ = when",
            "meaning": "A single occasion, like لَمَّا — not the repetition of كُلَّمَا."
          },
          {
            "label": "The book's example",
            "arabic": "نَصَرَ اللهُ النَّبِيَّ إِذْ أَخْرَجَهُ قَوْمُهُ",
            "meaning": "'Allah assisted the Prophet ﷺ when his people expelled him.'"
          },
          {
            "label": "With a nominal sentence",
            "arabic": "إِذِ الْمُؤَذِّنُ فِي الْمَسْجِدِ",
            "meaning": "The مُبْتَدَأ and خَبَر together fill the مُضَافٌ إِلَيْهِ slot; they are parsed on the row below."
          },
          {
            "label": "Its usual slot",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "As with all the special adverbs."
          },
          {
            "label": "Reading the diagram",
            "arabic": "مُضَافٌ + مُضَافٌ إِلَيْهِ",
            "meaning": "The green row splits the adverbial into إِذْ and the whole nested sentence; the row beneath parses that sentence on its own terms."
          }
        ]
      },
      "quiz": [
        {
          "q": "What kind of sentence may follow إِذْ?",
          "options": [
            "Only a جُمْلَةٌ فِعْلِيَّةٌ",
            "Only a جُمْلَةٌ اسْمِيَّةٌ",
            "Either a جُمْلَةٌ فِعْلِيَّةٌ or a جُمْلَةٌ اسْمِيَّةٌ",
            "Only a sentence beginning with كَانَ"
          ],
          "correct": 2,
          "explanation": "This is what sets إِذْ apart from لَمَّا and كُلَّمَا, which both require a verbal sentence."
        },
        {
          "q": "How is إِذْ translated?",
          "options": [
            "'when'",
            "'whenever'",
            "'since'",
            "'where'"
          ],
          "correct": 0,
          "explanation": "Like لَمَّا it marks a single occasion, not a repeated one."
        },
        {
          "q": "In نَصَرَ اللهُ النَّبِيَّ إِذْ أَخْرَجَهُ قَوْمُهُ, who did the expelling?",
          "options": [
            "اللهُ",
            "النَّبِيَّ",
            "The attached هُ in أَخْرَجَهُ",
            "قَوْمُهُ"
          ],
          "correct": 3,
          "explanation": "قَوْمُهُ is مَرْفُوْع and so is the doer; the attached هُ is the one expelled."
        },
        {
          "q": "When a nominal sentence follows إِذْ, what fills the مُضَافٌ إِلَيْهِ slot?",
          "options": [
            "The مُبْتَدَأ alone",
            "The خَبَر alone",
            "Neither — إِذْ takes no مُضَافٌ إِلَيْهِ then",
            "The مُبْتَدَأ and خَبَر together"
          ],
          "correct": 3,
          "explanation": "The whole sentence occupies the slot; its internal parsing goes on the row below."
        },
        {
          "q": "In صَلَّيْتُ إِذِ الْمُؤَذِّنُ فِي الْمَسْجِدِ, what is الْمُؤَذِّنُ?",
          "options": [
            "The فَاعِل of صَلَّيْتُ",
            "The مُبْتَدَأ of the nested nominal sentence",
            "A بَدَل of إِذْ",
            "A حَال"
          ],
          "correct": 1,
          "explanation": "الْمُؤَذِّنُ فِي الْمَسْجِدِ is a جُمْلَةٌ اسْمِيَّةٌ filling the مُضَافٌ إِلَيْهِ slot; inside it الْمُؤَذِّنُ is the مُبْتَدَأ and the جَارّ وَمَجْرُوْر the خَبَر."
        },
        {
          "q": "Which of the three adverbs met so far can denote a repeated event?",
          "options": [
            "لَمَّا",
            "إِذْ",
            "كُلَّمَا",
            "All three equally"
          ],
          "correct": 2,
          "explanation": "لَمَّا and إِذْ both report a single occasion; only كُلَّمَا means 'whenever'."
        }
      ],
      "bank": [
        {
          "title": "نَصَرَ اللهُ النَّبِيَّ إِذْ أَخْرَجَهُ قَوْمُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 447 (Section 1, Part 6)",
          "sentence": "نَصَرَ اللهُ النَّبِيَّ إِذْ أَخْرَجَهُ قَوْمُهُ",
          "translation": "Allah assisted the Prophet ﷺ when his people expelled him.",
          "cells": [
            "نَصَرَ",
            "اللهُ",
            "النَّبِيَّ",
            "إِذْ",
            "أَخْرَجَهُ",
            "قَوْمُهُ"
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
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "صَلَّيْتُ إِذِ الْمُؤَذِّنُ فِي الْمَسْجِدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 447 (Section 1, Part 6)",
          "sentence": "صَلَّيْتُ إِذِ الْمُؤَذِّنُ فِي الْمَسْجِدِ",
          "translation": "I prayed when the mu'adhdhin was in the masjid.",
          "cells": [
            "صَلَّيْتُ",
            "إِذِ",
            "الْمُؤَذِّنُ",
            "فِي",
            "الْمَسْجِدِ"
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
                  "end": 4,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَكَذَّبَ بِالصِّدْقِ إِذْ جَاءَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "وَكَذَّبَ بِالصِّدْقِ إِذْ جَاءَهُ",
          "translation": "And he belied the truth when it came to him.",
          "cells": [
            "وَ",
            "كَذَّبَ",
            "بِالصِّدْقِ",
            "إِذْ",
            "جَاءَهُ"
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
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "إِنَّهُ قَدْ نَصَرَنِيْ نَصْرًا إِذْ كُنْتُ فَقِيْرًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "إِنَّهُ قَدْ نَصَرَنِيْ نَصْرًا إِذْ كُنْتُ فَقِيْرًا",
          "translation": "Indeed he truly helped me when I was poor.",
          "cells": [
            "إِنَّهُ",
            "قَدْ",
            "نَصَرَنِيْ",
            "نَصْرًا",
            "إِذْ",
            "كُنْتُ",
            "فَقِيْرًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُ)"
                },
                {
                  "start": 1,
                  "end": 6,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ تَحْقِيْقٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (يْ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "ضَرَبَنِيْ زَيْدٌ إِذْ أَغْضَبْتُهُ إِغْضَابًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "ضَرَبَنِيْ زَيْدٌ إِذْ أَغْضَبْتُهُ إِغْضَابًا",
          "translation": "Zaid struck me when I angered him greatly.",
          "cells": [
            "ضَرَبَنِيْ",
            "زَيْدٌ",
            "إِذْ",
            "أَغْضَبْتُهُ",
            "إِغْضَابًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (يْ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَ رَسُوْلُ اللهِ ابْنَ أَرْبَعِيْنَ سَنَةً إِذْ بَعَثَهُ اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "كَانَ رَسُوْلُ اللهِ ابْنَ أَرْبَعِيْنَ سَنَةً إِذْ بَعَثَهُ اللهُ",
          "translation": "The Messenger of Allah ﷺ was forty years old when Allah sent him.",
          "cells": [
            "كَانَ",
            "رَسُوْلُ",
            "اللهِ",
            "ابْنَ",
            "أَرْبَعِيْنَ",
            "سَنَةً",
            "إِذْ",
            "بَعَثَهُ",
            "اللهُ"
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
                  "end": 2,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 6,
                  "end": 8,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "تَمْيِيْزٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "مَفْعُوْلٌ مُطْلَقٌ"
          ]
        },
        {
          "title": "هَلْ سَمِعْتَ أَحْمَدَ إِذْ كَانَ يُحَدِّثُ عَنْ أَخْبَارِ سَفَرِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "هَلْ سَمِعْتَ أَحْمَدَ إِذْ كَانَ يُحَدِّثُ عَنْ أَخْبَارِ سَفَرِهِ",
          "translation": "Did you hear Ahmad when he was speaking about the news of his journey?",
          "cells": [
            "هَلْ",
            "سَمِعْتَ",
            "أَحْمَدَ",
            "إِذْ",
            "كَانَ",
            "يُحَدِّثُ",
            "عَنْ",
            "أَخْبَارِ",
            "سَفَرِهِ"
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
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (هُوَ)"
                },
                {
                  "start": 5,
                  "end": 8,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 8,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "جَارٌّ"
                },
                {
                  "start": 7,
                  "end": 8,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "تَزَوَّجَتْ زَيْنَبُ إِذْ كَانَ عُمْرُهَا خَمْسًا وَعِشْرِيْنَ سَنَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "تَزَوَّجَتْ زَيْنَبُ إِذْ كَانَ عُمْرُهَا خَمْسًا وَعِشْرِيْنَ سَنَةً",
          "translation": "Zaynab married when her age was twenty-five years.",
          "cells": [
            "تَزَوَّجَتْ",
            "زَيْنَبُ",
            "إِذْ",
            "كَانَ",
            "عُمْرُهَا",
            "خَمْسًا",
            "وَعِشْرِيْنَ",
            "سَنَةً"
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
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 7,
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
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ كَانَ"
                },
                {
                  "start": 5,
                  "end": 7,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كَانَ رَسُوْلُ اللهِ طِفْلًا صَغِيْرًا إِذْ تُوُفِّيَتْ أُمُّهُ آمِنَةُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "كَانَ رَسُوْلُ اللهِ طِفْلًا صَغِيْرًا إِذْ تُوُفِّيَتْ أُمُّهُ آمِنَةُ",
          "translation": "The Messenger of Allah ﷺ was a small child when his mother Aminah passed away.",
          "cells": [
            "كَانَ",
            "رَسُوْلُ",
            "اللهِ",
            "طِفْلًا",
            "صَغِيْرًا",
            "إِذْ",
            "تُوُفِّيَتْ",
            "أُمُّهُ",
            "آمِنَةُ"
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
                  "role": "نَعْتٌ"
                },
                {
                  "start": 5,
                  "end": 8,
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
                  "role": "مُضَافٌ"
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
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "نَائِبُ فَاعِلٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "بَدَلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كَانَ النَّاسُ فِيْ بُيُوْتِهِمْ وَأَسْوَاقِهِمْ إِذْ زُلْزِلَتِ الْأَرْضُ زِلْزَالًا شَدِيْدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "كَانَ النَّاسُ فِيْ بُيُوْتِهِمْ وَأَسْوَاقِهِمْ إِذْ زُلْزِلَتِ الْأَرْضُ زِلْزَالًا شَدِيْدًا",
          "translation": "The people were in their houses and their markets when the earth was shaken a severe shaking.",
          "cells": [
            "كَانَ",
            "النَّاسُ",
            "فِيْ",
            "بُيُوْتِهِمْ",
            "وَ",
            "أَسْوَاقِهِمْ",
            "إِذْ",
            "زُلْزِلَتِ",
            "الْأَرْضُ",
            "زِلْزَالًا",
            "شَدِيْدًا"
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
                  "end": 5,
                  "role": "خَبَرُ كَانَ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 6,
                  "end": 10,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
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
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 10,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "نَائِبُ فَاعِلٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "قَدْ أَحْسَنَ بِيْ إِذْ أَخْرَجَنِيْ مِنَ السِّجْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 6)",
          "sentence": "قَدْ أَحْسَنَ بِيْ إِذْ أَخْرَجَنِيْ مِنَ السِّجْنِ",
          "translation": "He was truly good to me when He brought me out of the prison.",
          "cells": [
            "قَدْ",
            "أَحْسَنَ",
            "بِيْ",
            "إِذْ",
            "أَخْرَجَنِيْ",
            "مِنَ",
            "السِّجْنِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ تَحْقِيْقٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (يْ)"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَارٌّ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِنَّهُ قَدْ نَصَرَنِيْ نَصْرًا إِذْ كُنْتُ فَقِيْرًا, what is نَصْرًا?",
          "options": [
            "A تَمْيِيْز",
            "A حَال",
            "A مَفْعُوْلٌ مُطْلَقٌ",
            "A مَفْعُوْلٌ بِهِ ثَانٍ"
          ],
          "correct": 2,
          "explanation": "It is the مَصْدَر of the verb itself, placed after it to emphasise the action."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِنَّهُ قَدْ نَصَرَنِيْ نَصْرًا إِذْ كُنْتُ فَقِيْرًا, what kind of sentence follows إِذْ?",
          "options": [
            "A nominal sentence",
            "A verbal sentence, since كَانَ is a verb",
            "Neither — it is a single word",
            "A conditional sentence"
          ],
          "correct": 1,
          "explanation": "كُنْتُ فَقِيْرًا is a فِعْلٌ نَاقِصٌ with its اِسْم and خَبَر, so the sentence is verbal in form."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانَ رَسُوْلُ اللهِ ابْنَ أَرْبَعِيْنَ سَنَةً إِذْ بَعَثَهُ اللهُ, what is سَنَةً?",
          "options": [
            "The مُضَافٌ إِلَيْهِ of أَرْبَعِيْنَ",
            "The تَمْيِيْز of أَرْبَعِيْنَ",
            "A نَعْت of ابْنَ",
            "A مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 1,
          "explanation": "Numbers from eleven upward take a singular مَنْصُوْب تَمْيِيْز; أَرْبَعِيْنَ itself is the مُضَافٌ إِلَيْهِ of ابْنَ."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانَ رَسُوْلُ اللهِ طِفْلًا صَغِيْرًا إِذْ تُوُفِّيَتْ أُمُّهُ آمِنَةُ, what is آمِنَةُ?",
          "options": [
            "The فَاعِل of تُوُفِّيَتْ",
            "A بَدَل of أُمُّهُ",
            "A حَال",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "أُمُّهُ is the نَائِبُ فَاعِلٍ and آمِنَةُ names her, matching it in case — the classic بَدَل."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانَ النَّاسُ فِيْ بُيُوْتِهِمْ وَأَسْوَاقِهِمْ إِذْ زُلْزِلَتِ الْأَرْضُ, why is الْأَرْضُ مَرْفُوْع?",
          "options": [
            "It is the فَاعِل of زُلْزِلَتْ",
            "It is the اِسْمُ كَانَ",
            "It is the نَائِبُ فَاعِلٍ of a مَجْهُوْل verb",
            "It is a بَدَل of النَّاسُ"
          ],
          "correct": 2,
          "explanation": "زُلْزِلَتْ names no doer, so the thing shaken steps into the subject slot."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانَ النَّاسُ فِيْ بُيُوْتِهِمْ وَأَسْوَاقِهِمْ إِذْ زُلْزِلَتِ الْأَرْضُ, what is فِيْ بُيُوْتِهِمْ وَأَسْوَاقِهِمْ?",
          "options": [
            "The خَبَرُ كَانَ, غَيْرُ صَرِيْحٍ",
            "The مُضَافٌ إِلَيْهِ of إِذْ",
            "A مَفْعُوْلٌ بِهِ",
            "A حَال of النَّاسُ"
          ],
          "correct": 0,
          "explanation": "A جَارّ وَمَجْرُوْر can serve as the خَبَر of كَانَ; 'the people were in their houses'."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In ضَرَبَنِيْ زَيْدٌ إِذْ أَغْضَبْتُهُ إِغْضَابًا, who angered whom?",
          "options": [
            "Zaid angered the speaker",
            "The speaker angered Zaid",
            "Both angered one another",
            "The sentence does not say"
          ],
          "correct": 1,
          "explanation": "أَغْضَبْتُهُ: the تُ is the doer — the speaker — and the هُ is Zaid."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In هَلْ سَمِعْتَ أَحْمَدَ إِذْ كَانَ يُحَدِّثُ عَنْ أَخْبَارِ سَفَرِهِ, what is يُحَدِّثُ عَنْ أَخْبَارِ سَفَرِهِ?",
          "options": [
            "The اِسْمُ كَانَ",
            "The خَبَرُ كَانَ, a nested verbal sentence",
            "A حَال of أَحْمَدَ",
            "A second مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 1,
          "explanation": "كَانَ + مُضَارِع again gives the habitual past: 'when he used to speak about the news of his journey'."
        },
        {
          "title": "body",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"body\"?",
          "options": [
            "جَسَدٌ",
            "سِجْنٌ",
            "هِلَالٌ",
            "دَوَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "body",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَسَدٌ mean?",
          "options": [
            "body",
            "jail, prison",
            "crescent",
            "medicine"
          ],
          "correct": 0
        },
        {
          "title": "body (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَسَدٌ?",
          "options": [
            "أَجْسَادٌ",
            "سُجُوْنٌ",
            "أَهِلَّةٌ",
            "أَدْوِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "news",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"news\"?",
          "options": [
            "خَبَرٌ",
            "طَبِيْبٌ",
            "جَسَدٌ",
            "سِجْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "news",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَبَرٌ mean?",
          "options": [
            "news",
            "doctor",
            "body",
            "jail, prison"
          ],
          "correct": 0
        },
        {
          "title": "news (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَبَرٌ?",
          "options": [
            "أَخْبَارٌ",
            "أَطِبَّاءُ",
            "أَجْسَادٌ",
            "سُجُوْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "medicine",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"medicine\"?",
          "options": [
            "دَوَاءٌ",
            "هِلَالٌ",
            "خَبَرٌ",
            "طَبِيْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "medicine",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَوَاءٌ mean?",
          "options": [
            "medicine",
            "crescent",
            "news",
            "doctor"
          ],
          "correct": 0
        },
        {
          "title": "medicine (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَوَاءٌ?",
          "options": [
            "أَدْوِيَةٌ",
            "أَهِلَّةٌ",
            "أَخْبَارٌ",
            "أَطِبَّاءُ"
          ],
          "correct": 0
        },
        {
          "title": "jail, prison",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"jail, prison\"?",
          "options": [
            "سِجْنٌ",
            "جَسَدٌ",
            "دَوَاءٌ",
            "هِلَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "jail, prison",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سِجْنٌ mean?",
          "options": [
            "jail, prison",
            "body",
            "medicine",
            "crescent"
          ],
          "correct": 0
        },
        {
          "title": "jail, prison (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سِجْنٌ?",
          "options": [
            "سُجُوْنٌ",
            "أَجْسَادٌ",
            "أَدْوِيَةٌ",
            "أَهِلَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "doctor",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"doctor\"?",
          "options": [
            "طَبِيْبٌ",
            "خَبَرٌ",
            "سِجْنٌ",
            "جَسَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "doctor",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَبِيْبٌ mean?",
          "options": [
            "doctor",
            "news",
            "jail, prison",
            "body"
          ],
          "correct": 0
        },
        {
          "title": "doctor (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طَبِيْبٌ?",
          "options": [
            "أَطِبَّاءُ",
            "أَخْبَارٌ",
            "سُجُوْنٌ",
            "أَجْسَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "crescent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"crescent\"?",
          "options": [
            "هِلَالٌ",
            "دَوَاءٌ",
            "طَبِيْبٌ",
            "خَبَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "crescent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هِلَالٌ mean?",
          "options": [
            "crescent",
            "medicine",
            "doctor",
            "news"
          ],
          "correct": 0
        },
        {
          "title": "crescent (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of هِلَالٌ?",
          "options": [
            "أَهِلَّةٌ",
            "أَدْوِيَةٌ",
            "أَطِبَّاءُ",
            "أَخْبَارٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "تتمة إذ",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "Note 1 — إِذْ in Other Slots",
          "lines": [
            {
              "html": "إِذْ and its مُضَافٌ إِلَيْهِ usually occur as the مَفْعُوْلٌ فِيْهِ. However, they can also come in other slots, such as the مَفْعُوْلٌ بِهِ and the بَدَل.",
              "list": false
            },
            {
              "html": "This is the same freedom we saw with the regular adverbs in Lesson 12: an إِضَافَة is a noun phrase, and a noun phrase goes wherever the sentence has room for it.",
              "list": false
            },
            {
              "html": "لَا أَنْسَى يَوْمَ الْعِيْدِ إِذِ اجْتَمَعَ النَّاسُ كُلُّهُمْ — I will not forget the day of Eid, when all the people gathered.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Here يَوْمَ الْعِيْدِ is the مَفْعُوْلٌ بِهِ of أَنْسَى, and إِذْ with its nested sentence restates that day in more detail. It is therefore the بَدَل of the مَفْعُوْلٌ بِهِ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَا أَنْسَى يَوْمَ الْعِيْدِ إِذِ اجْتَمَعَ النَّاسُ كُلُّهُمْ",
                "translation": "I will not forget the day of Eid, when all the people gathered.",
                "cells": [
                  "لَا",
                  "أَنْسَى",
                  "يَوْمَ",
                  "الْعِيْدِ",
                  "إِذِ",
                  "اجْتَمَعَ",
                  "النَّاسُ",
                  "كُلُّهُمْ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 4,
                        "end": 7,
                        "role": "بَدَلٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مُضَافٌ إِلَيْهِ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 5,
                        "end": 7,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 5,
                        "end": 5,
                        "role": "فِعْلٌ"
                      },
                      {
                        "start": 6,
                        "end": 6,
                        "role": "فَاعِلٌ"
                      },
                      {
                        "start": 7,
                        "end": 7,
                        "role": "تَأْكِيْدٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The comma in the English translation is doing the same work the بَدَل does in the Arabic: it marks the second phrase as a restatement of the first rather than a new item.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Besides the مَفْعُوْلٌ فِيْهِ, in which other slots can إِذْ and its nested sentence occur؟",
            "kind": "mcq",
            "options": [
              "Slots such as the مَفْعُوْلٌ بِهِ and the بَدَلٌ",
              "Only the فَاعِلٌ",
              "Only the مُبْتَدَأٌ",
              "It can never occur in another slot"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Note 2 — إِذْ in the Qur'an",
          "lines": [
            {
              "html": "In the Qur'an, إِذْ and its مُضَافٌ إِلَيْهِ commonly become the مَفْعُوْلٌ بِهِ of أُذْكُرْ.",
              "list": false
            },
            {
              "html": "وَاذْكُرُوْا إِذْ كُنْتُمْ قَلِيْلًا — And remember when (the time) you were few.",
              "list": true,
              "bullet": true
            },
            {
              "html": "And, exactly as with يَوْمَ in Lesson 12, it is common for the verb أُذْكُرْ to be removed before إِذْ. What remains is a phrase that begins with وَإِذْ and appears to have no verb governing it.",
              "list": false
            },
            {
              "html": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ — And (remember) when We said to the angels: Prostrate to Adam.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ",
                "translation": "And (remember) when We said to the angels: Prostrate to Adam.",
                "cells": [
                  "وَ",
                  "إِذْ",
                  "قُلْنَا",
                  "لِلْمَلَائِكَةِ",
                  "اسْجُدُوْا",
                  "لِآدَمَ"
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
                        "end": 5,
                        "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                        "end": 5,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                      },
                      {
                        "start": 4,
                        "end": 5,
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
                        "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "Two Removals Side by Side",
                "headers": [
                  "Adverb",
                  "Full form",
                  "With the verb removed"
                ],
                "rows": [
                  [
                    "يَوْمَ",
                    "أَذْكُرُ يَوْمَ رَأَيْتُ الْكَعْبَةَ",
                    "يَوْمَ يَحْشُرُهُمْ جَمِيْعًا"
                  ],
                  [
                    "إِذْ",
                    "وَاذْكُرُوْا إِذْ كُنْتُمْ قَلِيْلًا",
                    "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ"
                  ]
                ]
              }
            },
            {
              "html": "A practical reading habit: whenever an āyah opens with وَإِذْ and you cannot find a verb for it to attach to, supply أُذْكُرْ. The English 'And (remember) when …' captures it.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In the Qur'anic pattern وَإِذْ قُلْنَا لِلْمَلَائِكَةِ..., what has been removed before إِذْ؟",
            "kind": "mcq",
            "options": [
              "The verb أُذْكُرْ, of which إِذْ and its nested sentence are the مَفْعُوْلٌ بِهِ",
              "The subject of قُلْنَا",
              "A hidden إِنَّ",
              "Nothing has been removed"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The Two Notes on إِذْ",
        "rows": [
          {
            "label": "Its usual slot",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "Most of the time إِذْ with its sentence is the adverbial of time."
          },
          {
            "label": "Other slots",
            "arabic": "مَفْعُوْلٌ بِهِ وَبَدَلٌ",
            "meaning": "It can also fill the object slot, or restate an earlier phrase as a بَدَل."
          },
          {
            "label": "The بَدَل example",
            "arabic": "لَا أَنْسَى يَوْمَ الْعِيْدِ إِذِ اجْتَمَعَ النَّاسُ كُلُّهُمْ",
            "meaning": "يَوْمَ الْعِيْدِ is the مَفْعُوْلٌ بِهِ; the إِذْ phrase restates it, so it is its بَدَل."
          },
          {
            "label": "In the Qur'an",
            "arabic": "وَاذْكُرُوْا إِذْ كُنْتُمْ قَلِيْلًا",
            "meaning": "إِذْ with its sentence commonly serves as the مَفْعُوْلٌ بِهِ of أُذْكُرْ."
          },
          {
            "label": "The removal",
            "arabic": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ",
            "meaning": "أُذْكُرْ is commonly dropped before إِذْ, leaving وَإِذْ standing at the head of the āyah."
          },
          {
            "label": "Reading habit",
            "arabic": "قَدِّرْ أُذْكُرْ",
            "meaning": "When وَإِذْ opens an āyah with no governing verb, supply أُذْكُرْ — 'And (remember) when …'."
          }
        ]
      },
      "quiz": [
        {
          "q": "Which slot does إِذْ with its nested sentence usually fill?",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ فِيْهِ",
            "بَدَلٌ",
            "خَبَرٌ"
          ],
          "correct": 1,
          "explanation": "The adverbial of time is its default; the other slots are the exception."
        },
        {
          "q": "In لَا أَنْسَى يَوْمَ الْعِيْدِ إِذِ اجْتَمَعَ النَّاسُ كُلُّهُمْ, what is the إِذْ phrase?",
          "options": [
            "The مَفْعُوْلٌ بِهِ of أَنْسَى",
            "A حَال of يَوْمَ الْعِيْدِ",
            "The بَدَل of the مَفْعُوْلٌ بِهِ",
            "A نَعْت of الْعِيْدِ"
          ],
          "correct": 2,
          "explanation": "يَوْمَ الْعِيْدِ already holds the object slot; the إِذْ phrase restates it."
        },
        {
          "q": "In لَا أَنْسَى يَوْمَ الْعِيْدِ إِذِ اجْتَمَعَ النَّاسُ كُلُّهُمْ, what is كُلُّهُمْ?",
          "options": [
            "The تَأْكِيْد of النَّاسُ",
            "A بَدَل of النَّاسُ",
            "The فَاعِل of اجْتَمَعَ",
            "A تَمْيِيْز"
          ],
          "correct": 0,
          "explanation": "It follows النَّاسُ in case and stresses that not one of them was absent."
        },
        {
          "q": "Of which verb is إِذْ commonly the مَفْعُوْلٌ بِهِ in the Qur'an?",
          "options": [
            "قَالَ",
            "كَانَ",
            "جَاءَ",
            "أُذْكُرْ"
          ],
          "correct": 3,
          "explanation": "وَاذْكُرُوْا إِذْ كُنْتُمْ قَلِيْلًا shows the verb in place."
        },
        {
          "q": "What happens to أُذْكُرْ in وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ?",
          "options": [
            "It is removed, and understood",
            "It is turned into a مَصْدَر",
            "It appears later in the āyah",
            "It is replaced by وَ"
          ],
          "correct": 0,
          "explanation": "The removal is common enough that a bare وَإِذْ at the head of an āyah should prompt you to supply it."
        },
        {
          "q": "Dropping أُذْكُرْ before وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ most closely parallels which earlier structure?",
          "options": [
            "كَانَ with a مُضَارِع for the habitual past",
            "يَوْمَ as the مَفْعُوْلٌ بِهِ of a removed أُذْكُرْ",
            "The حَال as a verbal sentence",
            "The مَعْطُوْف as a nested sentence"
          ],
          "correct": 1,
          "explanation": "Lesson 12's يَوْمَ يَحْشُرُهُمْ جَمِيْعًا is the same phenomenon with a regular adverb."
        }
      ],
      "bank": [
        {
          "title": "لَا أَنْسَى يَوْمَ الْعِيْدِ إِذِ اجْتَمَعَ النَّاسُ كُلُّهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 448, Note 1 (Section 1, Part 6)",
          "sentence": "لَا أَنْسَى يَوْمَ الْعِيْدِ إِذِ اجْتَمَعَ النَّاسُ كُلُّهُمْ",
          "translation": "I will not forget the day of Eid, when all the people gathered.",
          "cells": [
            "لَا",
            "أَنْسَى",
            "يَوْمَ",
            "الْعِيْدِ",
            "إِذِ",
            "اجْتَمَعَ",
            "النَّاسُ",
            "كُلُّهُمْ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 7,
                  "role": "بَدَلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 5,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "تَأْكِيْدٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَاذْكُرُوْا إِذْ كُنْتُمْ قَلِيْلًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 448, Note 2 (Section 1, Part 6)",
          "sentence": "وَاذْكُرُوْا إِذْ كُنْتُمْ قَلِيْلًا",
          "translation": "And remember when (the time) you were few.",
          "cells": [
            "وَ",
            "اذْكُرُوْا",
            "إِذْ",
            "كُنْتُمْ",
            "قَلِيْلًا"
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
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 448, Note 2 (Section 1, Part 6)",
          "sentence": "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ",
          "translation": "And (remember) when We said to the angels: Prostrate to Adam.",
          "cells": [
            "وَ",
            "إِذْ",
            "قُلْنَا",
            "لِلْمَلَائِكَةِ",
            "اسْجُدُوْا",
            "لِآدَمَ"
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
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 5,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَإِذْ آتَيْنَا مُوْسَى الْكِتَابَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 6)",
          "sentence": "وَإِذْ آتَيْنَا مُوْسَى الْكِتَابَ",
          "translation": "And (remember) when We gave Musa the Book.",
          "cells": [
            "وَ",
            "إِذْ",
            "آتَيْنَا",
            "مُوْسَى",
            "الْكِتَابَ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَإِذْ نَجَّيْنَاكُمْ مِنْ آلِ فِرْعَوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 6)",
          "sentence": "وَإِذْ نَجَّيْنَاكُمْ مِنْ آلِ فِرْعَوْنَ",
          "translation": "And (remember) when We rescued you from the people of Pharaoh.",
          "cells": [
            "وَ",
            "إِذْ",
            "نَجَّيْنَاكُمْ",
            "مِنْ",
            "آلِ",
            "فِرْعَوْنَ"
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
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                },
                {
                  "start": 3,
                  "end": 5,
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
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
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
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ لَا تُشْرِكْ بِاللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 6)",
          "sentence": "وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ لَا تُشْرِكْ بِاللهِ",
          "translation": "And (remember) when Luqman said to his son: Do not associate partners with Allah.",
          "cells": [
            "وَ",
            "إِذْ",
            "قَالَ",
            "لُقْمَانُ",
            "لِابْنِهِ",
            "لَا",
            "تُشْرِكْ",
            "بِاللهِ"
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
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 5,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ نَهْيٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَرْفُ نَفْيٍ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَإِذْ قَالَ إِبْرَاهِيْمُ لِأَبِيْهِ آزَرَ أَتَتَّخِذُ أَصْنَامًا آلِهَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 6)",
          "sentence": "وَإِذْ قَالَ إِبْرَاهِيْمُ لِأَبِيْهِ آزَرَ أَتَتَّخِذُ أَصْنَامًا آلِهَةً",
          "translation": "And (remember) when Ibrahim said to his father Azar: Do you take idols as deities?",
          "cells": [
            "وَ",
            "إِذْ",
            "قَالَ",
            "إِبْرَاهِيْمُ",
            "لِأَبِيْهِ",
            "آزَرَ",
            "أَ",
            "تَتَّخِذُ",
            "أَصْنَامًا",
            "آلِهَةً"
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
                  "end": 9,
                  "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                  "end": 9,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 6,
                  "end": 9,
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
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "بَدَلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ اسْتِفْهَامٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَإِذْ نَادَى رَبُّكَ مُوْسَى أَنِ ائْتِ الْقَوْمَ الظَّالِمِيْنَ قَوْمَ فِرْعَوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 6)",
          "sentence": "وَإِذْ نَادَى رَبُّكَ مُوْسَى أَنِ ائْتِ الْقَوْمَ الظَّالِمِيْنَ قَوْمَ فِرْعَوْنَ",
          "translation": "And (remember) when your Lord called Musa: Go to the wrongdoing people, the people of Pharaoh.",
          "cells": [
            "وَ",
            "إِذْ",
            "نَادَى",
            "رَبُّكَ",
            "مُوْسَى",
            "أَنِ",
            "ائْتِ",
            "الْقَوْمَ",
            "الظَّالِمِيْنَ",
            "قَوْمَ",
            "فِرْعَوْنَ"
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
                  "end": 10,
                  "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                  "end": 10,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 10,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ تَفْسِيْرٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 9,
                  "end": 10,
                  "role": "بَدَلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 9,
                  "end": 9,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "اذْكُرُوْا نِعْمَةَ اللهِ عَلَيْكُمْ إِذْ جَعَلَ فِيْكُمْ أَنْبِيَاءَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 6)",
          "sentence": "اذْكُرُوْا نِعْمَةَ اللهِ عَلَيْكُمْ إِذْ جَعَلَ فِيْكُمْ أَنْبِيَاءَ",
          "translation": "Remember the favour of Allah upon you, when He placed prophets among you.",
          "cells": [
            "اذْكُرُوْا",
            "نِعْمَةَ",
            "اللهِ",
            "عَلَيْكُمْ",
            "إِذْ",
            "جَعَلَ",
            "فِيْكُمْ",
            "أَنْبِيَاءَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 7,
                  "role": "بَدَلٌ"
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
                  "role": "نَعْتٌ غَيْرُ صَرِيْحٍ"
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
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "إِذْ قَالَ مُوْسَى لِقَوْمِهِ اذْكُرُوْا نِعْمَةَ اللهِ عَلَيْكُمْ إِذْ أَنْجَاكُمْ مِنْ آلِ فِرْعَوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 6)",
          "sentence": "إِذْ قَالَ مُوْسَى لِقَوْمِهِ اذْكُرُوْا نِعْمَةَ اللهِ عَلَيْكُمْ إِذْ أَنْجَاكُمْ مِنْ آلِ فِرْعَوْنَ",
          "translation": "(Remember) when Musa said to his people: Remember the favour of Allah upon you, when He saved you from the people of Pharaoh.",
          "cells": [
            "إِذْ",
            "قَالَ",
            "مُوْسَى",
            "لِقَوْمِهِ",
            "اذْكُرُوْا",
            "نِعْمَةَ اللهِ",
            "عَلَيْكُمْ",
            "إِذْ",
            "أَنْجَاكُمْ",
            "مِنْ آلِ فِرْعَوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 9,
                  "role": "مَفْعُوْلٌ بِهِ لِفِعْلٍ مَحْذُوْفٍ (أُذْكُرْ)"
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
                },
                {
                  "start": 1,
                  "end": 9,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 9,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "نَعْتٌ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 7,
                  "end": 9,
                  "role": "بَدَلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 8,
                  "end": 9,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 8,
                  "end": 8,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In وَإِذْ آتَيْنَا مُوْسَى الْكِتَابَ, how many objects does آتَيْنَا take?",
          "options": [
            "None",
            "One",
            "Two",
            "Three"
          ],
          "correct": 2,
          "explanation": "مُوْسَى is the first and الْكِتَابَ the second — آتَى is a verb of giving."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In وَإِذْ نَجَّيْنَاكُمْ مِنْ آلِ فِرْعَوْنَ, what is فِرْعَوْنَ?",
          "options": [
            "The مُضَافٌ إِلَيْهِ of آلِ",
            "A بَدَل of آلِ",
            "The مَفْعُوْلٌ بِهِ of نَجَّيْنَا",
            "A نَعْت"
          ],
          "correct": 0,
          "explanation": "آلِ فِرْعَوْنَ is an إِضَافَة, and the whole جَارّ وَمَجْرُوْر is the second object of the verb."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In وَإِذْ قَالَ لُقْمَانُ لِابْنِهِ لَا تُشْرِكْ بِاللهِ, what is لَا?",
          "options": [
            "A حَرْفُ نَفْيٍ",
            "A حَرْفُ نَهْيٍ, since تُشْرِكْ is مَجْزُوْم",
            "A حَرْفُ عَطْفٍ",
            "A حَرْفُ جَرٍّ"
          ],
          "correct": 1,
          "explanation": "The سُكُون on the last letter shows the verb is مَجْزُوْم, which marks a prohibition rather than a denial."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In وَإِذْ قَالَ إِبْرَاهِيْمُ لِأَبِيْهِ آزَرَ …, what is آزَرَ?",
          "options": [
            "The فَاعِل of قَالَ",
            "A بَدَل of أَبِيْهِ",
            "A مَفْعُوْلٌ بِهِ",
            "A حَال"
          ],
          "correct": 1,
          "explanation": "It names the father just mentioned, and shares his مَجْرُوْر position."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In أَتَتَّخِذُ أَصْنَامًا آلِهَةً, what are أَصْنَامًا and آلِهَةً?",
          "options": [
            "The first and second objects of تَتَّخِذُ",
            "A مَفْعُوْلٌ بِهِ and its نَعْت",
            "A تَمْيِيْز and a حَال",
            "A مُضَاف and its مُضَافٌ إِلَيْهِ"
          ],
          "correct": 0,
          "explanation": "اِتَّخَذَ takes two objects: 'do you take idols [as] deities?'"
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In وَإِذْ نَادَى رَبُّكَ مُوْسَى … قَوْمَ فِرْعَوْنَ, what is قَوْمَ فِرْعَوْنَ?",
          "options": [
            "The فَاعِل of ائْتِ",
            "A بَدَل of الْقَوْمَ الظَّالِمِيْنَ",
            "A مَفْعُوْلٌ فِيْهِ",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "It identifies which wrongdoing people are meant, and matches them in case."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In اذْكُرُوْا نِعْمَةَ اللهِ عَلَيْكُمْ إِذْ جَعَلَ فِيْكُمْ أَنْبِيَاءَ, what is the إِذْ phrase?",
          "options": [
            "The مَفْعُوْلٌ بِهِ of اذْكُرُوْا",
            "The بَدَل of نِعْمَةَ اللهِ",
            "A حَال of أَنْبِيَاءَ",
            "A نَعْت of عَلَيْكُمْ"
          ],
          "correct": 1,
          "explanation": "نِعْمَةَ اللهِ already fills the object slot; the إِذْ phrase spells out what that favour was."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذْ قَالَ مُوْسَى لِقَوْمِهِ اذْكُرُوْا نِعْمَةَ اللهِ عَلَيْكُمْ إِذْ أَنْجَاكُمْ …, do the two إِذْ phrases fill the same slot?",
          "options": [
            "Yes, both are مَفْعُوْلٌ فِيْهِ",
            "Yes, both are بَدَل",
            "No — the first is the object of a removed أُذْكُرْ, the second a بَدَل of نِعْمَةَ اللهِ",
            "No — the first is a حَال and the second an object"
          ],
          "correct": 2,
          "explanation": "The same word can sit in different slots in the same sentence; each is judged by what governs it."
        },
        {
          "title": "idol",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"idol\"?",
          "options": [
            "صَنَمٌ",
            "مَلَكٌ",
            "نِعْمَةٌ",
            "نَجَّى يُنَجِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "idol",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَنَمٌ mean?",
          "options": [
            "idol",
            "angel",
            "favour, blessing",
            "to rescue"
          ],
          "correct": 0
        },
        {
          "title": "idol (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَنَمٌ?",
          "options": [
            "أَصْنَامٌ",
            "مَلَائِكَةٌ",
            "نِعَمٌ",
            "أَنْبِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "deity, god",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"deity, god\"?",
          "options": [
            "إِلٰهٌ",
            "آلٌ",
            "آتَى يُؤْتِيْ",
            "نَادَى يُنَادِيْ"
          ],
          "correct": 0
        },
        {
          "title": "deity, god",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِلٰهٌ mean?",
          "options": [
            "deity, god",
            "family, folk",
            "to give",
            "to call out"
          ],
          "correct": 0
        },
        {
          "title": "deity, god (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِلٰهٌ?",
          "options": [
            "آلِهَةٌ",
            "—",
            "أَصْنَامٌ",
            "مَلَائِكَةٌ"
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
            "نِعْمَةٌ",
            "نَجَّى يُنَجِّيْ",
            "أَشْرَكَ يُشْرِكُ"
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
            "favour, blessing",
            "to rescue",
            "to associate partners"
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
            "نِعَمٌ",
            "آلِهَةٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "angel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"angel\"?",
          "options": [
            "مَلَكٌ",
            "آتَى يُؤْتِيْ",
            "نَادَى يُنَادِيْ",
            "اِتَّخَذَ يَتَّخِذُ"
          ],
          "correct": 0
        },
        {
          "title": "angel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَلَكٌ mean?",
          "options": [
            "angel",
            "to give",
            "to call out",
            "to take, to adopt"
          ],
          "correct": 0
        },
        {
          "title": "angel (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَلَكٌ?",
          "options": [
            "مَلَائِكَةٌ",
            "أَصْنَامٌ",
            "أَنْبِيَاءُ",
            "نِعَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "family, folk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"family, folk\"?",
          "options": [
            "آلٌ",
            "نَجَّى يُنَجِّيْ",
            "أَشْرَكَ يُشْرِكُ",
            "سَجَدَ يَسْجُدُ"
          ],
          "correct": 0
        },
        {
          "title": "family, folk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آلٌ mean?",
          "options": [
            "family, folk",
            "to rescue",
            "to associate partners",
            "to prostrate"
          ],
          "correct": 0
        },
        {
          "title": "family, folk (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of آلٌ?",
          "options": [
            "—",
            "آلِهَةٌ",
            "مَلَائِكَةٌ",
            "أَصْنَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "favour, blessing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"favour, blessing\"?",
          "options": [
            "نِعْمَةٌ",
            "نَادَى يُنَادِيْ",
            "اِتَّخَذَ يَتَّخِذُ",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "favour, blessing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نِعْمَةٌ mean?",
          "options": [
            "favour, blessing",
            "to call out",
            "to take, to adopt",
            "to forget"
          ],
          "correct": 0
        },
        {
          "title": "favour, blessing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نِعْمَةٌ?",
          "options": [
            "نِعَمٌ",
            "أَنْبِيَاءُ",
            "—",
            "آلِهَةٌ"
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
            "أَشْرَكَ يُشْرِكُ",
            "سَجَدَ يَسْجُدُ",
            "صَنَمٌ"
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
            "to associate partners",
            "to prostrate",
            "idol"
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
            "إِشْرَاكًا",
            "سُجُوْدًا",
            "تَنْجِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to rescue",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rescue\"?",
          "options": [
            "نَجَّى يُنَجِّيْ",
            "اِتَّخَذَ يَتَّخِذُ",
            "نَسِيَ يَنْسَى",
            "إِلٰهٌ"
          ],
          "correct": 0
        },
        {
          "title": "to rescue",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَجَّى يُنَجِّيْ mean?",
          "options": [
            "to rescue",
            "to take, to adopt",
            "to forget",
            "deity, god"
          ],
          "correct": 0
        },
        {
          "title": "to rescue (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَجَّى يُنَجِّيْ?",
          "options": [
            "تَنْجِيَةً",
            "اِتِّخَاذًا",
            "نِسْيَانًا",
            "مُنَادَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to call out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call out\"?",
          "options": [
            "نَادَى يُنَادِيْ",
            "سَجَدَ يَسْجُدُ",
            "صَنَمٌ",
            "نَبِيٌّ"
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
            "to prostrate",
            "idol",
            "prophet"
          ],
          "correct": 0
        },
        {
          "title": "to call out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَادَى يُنَادِيْ?",
          "options": [
            "مُنَادَاةً",
            "سُجُوْدًا",
            "إِيْتَاءً",
            "إِشْرَاكًا"
          ],
          "correct": 0
        },
        {
          "title": "to associate partners",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to associate partners\"?",
          "options": [
            "أَشْرَكَ يُشْرِكُ",
            "نَسِيَ يَنْسَى",
            "إِلٰهٌ",
            "مَلَكٌ"
          ],
          "correct": 0
        },
        {
          "title": "to associate partners",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَشْرَكَ يُشْرِكُ mean?",
          "options": [
            "to associate partners",
            "to forget",
            "deity, god",
            "angel"
          ],
          "correct": 0
        },
        {
          "title": "to associate partners (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَشْرَكَ يُشْرِكُ?",
          "options": [
            "إِشْرَاكًا",
            "نِسْيَانًا",
            "تَنْجِيَةً",
            "اِتِّخَاذًا"
          ],
          "correct": 0
        },
        {
          "title": "to take, to adopt",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take, to adopt\"?",
          "options": [
            "اِتَّخَذَ يَتَّخِذُ",
            "صَنَمٌ",
            "نَبِيٌّ",
            "آلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to take, to adopt",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّخَذَ يَتَّخِذُ mean?",
          "options": [
            "to take, to adopt",
            "idol",
            "prophet",
            "family, folk"
          ],
          "correct": 0
        },
        {
          "title": "to take, to adopt (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّخَذَ يَتَّخِذُ?",
          "options": [
            "اِتِّخَاذًا",
            "إِيْتَاءً",
            "مُنَادَاةً",
            "سُجُوْدًا"
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
            "إِلٰهٌ",
            "مَلَكٌ",
            "نِعْمَةٌ"
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
            "deity, god",
            "angel",
            "favour, blessing"
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
            "تَنْجِيَةً",
            "إِشْرَاكًا",
            "نِسْيَانًا"
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
            "نَبِيٌّ",
            "آلٌ",
            "آتَى يُؤْتِيْ"
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
            "prophet",
            "family, folk",
            "to give"
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
            "مُنَادَاةً",
            "اِتِّخَاذًا",
            "إِيْتَاءً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l8",
      "title": "تنوين العوض",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The مُضَافٌ إِلَيْهِ which occurs as a sentence can be replaced by a تَنْوِيْنُ الْعِوَضِ — a 'tanween of substitution'. The sentence is dropped and a tanween is written in its place, standing in for everything that was removed.",
              "list": false
            },
            {
              "html": "This is quite common with words such as يَوْمَئِذٍ, 'that day', and حِيْنَئِذٍ, 'that time'. Both were originally two words followed by a whole جُمْلَة as a مُضَافٌ إِلَيْهِ.",
              "list": false
            },
            {
              "html": "يَوْمَ إِذْ ذَهَبْتُ — the day when I went",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَوْمَ إِذْ ذَهَبْتُ",
                "translation": "the day when I went",
                "cells": [
                  "يَوْمَ",
                  "إِذْ",
                  "ذَهَبْتُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "مَفْعُوْلٌ فِيْهِ"
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
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "مُضَافٌ إِلَيْهِ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Two إِضَافَة relationships are stacked here: يَوْمَ is مُضَاف to إِذْ, and إِذْ in turn is مُضَاف to the sentence ذَهَبْتُ. Remove that sentence, put a tanween on إِذْ in its place, and join the two remaining words: يَوْمَئِذٍ.",
              "list": false
            },
            {
              "table": {
                "title": "How the Contraction Works",
                "headers": [
                  "Full form",
                  "What is removed",
                  "Result"
                ],
                "rows": [
                  [
                    "يَوْمَ إِذْ ذَهَبْتُ",
                    "the sentence ذَهَبْتُ",
                    "يَوْمَئِذٍ"
                  ],
                  [
                    "حِيْنَ إِذْ يَنْدَمُ النَّاسُ",
                    "the sentence يَنْدَمُ النَّاسُ",
                    "حِيْنَئِذٍ"
                  ],
                  [
                    "لَيْلَةَ إِذْ رَأَيْنَا الْهِلَالَ",
                    "the sentence رَأَيْنَا الْهِلَالَ",
                    "لَيْلَتَئِذٍ"
                  ],
                  [
                    "سَاعَةَ إِذْ رَأَيْتُ الْإِمَامَ",
                    "the sentence رَأَيْتُ الْإِمَامَ",
                    "سَاعَتَئِذٍ"
                  ]
                ]
              }
            },
            {
              "html": "The kasratayn on إِذٍ is not an ordinary tanween of indefiniteness. It is a placeholder — it tells you a whole sentence once stood there and has been taken out.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is تَنْوِيْنُ الْعِوَضِ, as seen in يَوْمَئِذٍ؟",
            "kind": "mcq",
            "options": [
              "A tanween that replaces a whole nested sentence removed from a stacked إضافة (يَوْمَ إِذْ + sentence)",
              "An ordinary tanween of indefiniteness",
              "A tanween that marks the دُعَاء case",
              "A tanween added only to proper nouns"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Reading and Parsing the Contracted Form",
          "lines": [
            {
              "html": "Because the removed sentence is recoverable from context, the contracted word simply points back to whatever has just been mentioned: 'that day', 'that time'. In English a demonstrative does the same work.",
              "list": false
            },
            {
              "html": "يَوْمَئِذٍ يَخْسَرُ الظَّالِمُوْنَ — That day the wrongdoers will lose.",
              "list": true,
              "bullet": true
            },
            {
              "html": "يُنْفَخُ فِي الصُّوْرِ وَحِيْنَئِذٍ يَخْرُجُوْنَ مِنْ قُبُوْرِهِمْ — The horn will be blown, and at that time they will come out of their graves.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In the second example the first clause supplies the missing sentence: 'at the time when the horn is blown'. This is the normal pattern — a sentence sets the scene, and حِيْنَئِذٍ then hangs the next event on it.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَوْمَئِذٍ يَخْسَرُ الظَّالِمُوْنَ",
                "translation": "That day the wrongdoers will lose.",
                "cells": [
                  "يَوْمَئِذٍ",
                  "يَخْسَرُ",
                  "الظَّالِمُوْنَ"
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
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "In the tarkeeb the contracted word occupies a single cell. Its slot is still the مَفْعُوْلٌ فِيْهِ, and the row beneath records that the cell holds both a مُضَاف and its مُضَافٌ إِلَيْهِ, the latter reduced to a tanween.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How is a contracted word like يَوْمَئِذٍ or حِيْنَئِذٍ normally understood؟",
            "kind": "mcq",
            "options": [
              "As pointing back to a sentence just mentioned in context — like an English demonstrative ('that day')",
              "As referring to a sentence that comes later in the passage",
              "As having no meaning at all",
              "As always meaning 'today'"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "تَنْوِيْنُ الْعِوَضِ",
        "rows": [
          {
            "label": "The rule",
            "arabic": "تَنْوِيْنُ الْعِوَضِ",
            "meaning": "A مُضَافٌ إِلَيْهِ that is a sentence may be removed and replaced by a tanween standing in its place."
          },
          {
            "label": "The two common words",
            "arabic": "يَوْمَئِذٍ، حِيْنَئِذٍ",
            "meaning": "'that day' and 'that time'."
          },
          {
            "label": "The original form",
            "arabic": "يَوْمَ إِذْ ذَهَبْتُ",
            "meaning": "Two words followed by a جُمْلَة: يَوْمَ is مُضَاف to إِذْ, and إِذْ is مُضَاف to the sentence."
          },
          {
            "label": "The contraction",
            "arabic": "يَوْمَ إِذْ ذَهَبْتُ ← يَوْمَئِذٍ",
            "meaning": "Drop the sentence, put a tanween on إِذْ, and write the two words as one."
          },
          {
            "label": "Others of the same shape",
            "arabic": "لَيْلَتَئِذٍ، سَاعَتَئِذٍ",
            "meaning": "Any regular time adverb can contract in the same way."
          },
          {
            "label": "Its slot",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "The contracted word still fills the adverbial slot; the row below marks it as a مُضَاف with its مُضَافٌ إِلَيْهِ reduced to a tanween."
          }
        ]
      },
      "quiz": [
        {
          "q": "What does a تَنْوِيْنُ الْعِوَضِ stand in for?",
          "options": [
            "A removed مُضَاف",
            "A removed مُضَافٌ إِلَيْهِ that was a sentence",
            "A removed حَرْفُ جَرٍّ",
            "A removed فَاعِل"
          ],
          "correct": 1,
          "explanation": "It is a placeholder for the whole nested sentence."
        },
        {
          "q": "What was يَوْمَئِذٍ before the contraction?",
          "options": [
            "One word with an ordinary tanween",
            "يَوْمٌ followed by a نَعْت",
            "Two words followed by a جُمْلَة as a مُضَافٌ إِلَيْهِ",
            "يَوْمٌ with an attached pronoun"
          ],
          "correct": 2,
          "explanation": "يَوْمَ إِذْ ذَهَبْتُ — two words and then the sentence."
        },
        {
          "q": "In the full form يَوْمَ إِذْ ذَهَبْتُ, what is إِذْ?",
          "options": [
            "The مُضَافٌ إِلَيْهِ of يَوْمَ, and itself مُضَاف to ذَهَبْتُ",
            "A حَرْفُ عَطْفٍ",
            "The فَاعِل of ذَهَبْتُ",
            "A نَعْت of يَوْمَ"
          ],
          "correct": 0,
          "explanation": "Two إِضَافَة relationships are stacked, and the contraction removes the innermost one."
        },
        {
          "q": "How is حِيْنَئِذٍ rendered in English?",
          "options": [
            "'the day'",
            "'whenever'",
            "'since then'",
            "'at that time'"
          ],
          "correct": 3,
          "explanation": "It points back to a time the preceding sentence has already established."
        },
        {
          "q": "In يَوْمَئِذٍ يَخْسَرُ الظَّالِمُوْنَ, what slot does يَوْمَئِذٍ fill?",
          "options": [
            "مَفْعُوْلٌ فِيْهِ",
            "فَاعِلٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ],
          "correct": 0,
          "explanation": "The contraction changes the word's shape, not its role in the sentence."
        },
        {
          "q": "In يُنْفَخُ فِي الصُّوْرِ وَحِيْنَئِذٍ يَخْرُجُوْنَ مِنْ قُبُوْرِهِمْ, where does the reader recover the removed sentence from?",
          "options": [
            "From the verb يَخْرُجُوْنَ",
            "From the first clause, يُنْفَخُ فِي الصُّوْرِ",
            "From مِنْ قُبُوْرِهِمْ",
            "It cannot be recovered"
          ],
          "correct": 1,
          "explanation": "'At the time when the horn is blown' — the scene-setting clause supplies it."
        }
      ],
      "bank": [
        {
          "title": "يَوْمَ إِذْ ذَهَبْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 449 (Section 1, Part 6)",
          "sentence": "يَوْمَ إِذْ ذَهَبْتُ",
          "translation": "the day when I went",
          "cells": [
            "يَوْمَ",
            "إِذْ",
            "ذَهَبْتُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَيْلَتَئِذٍ رَأَيْنَا الْهِلَالَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "لَيْلَتَئِذٍ رَأَيْنَا الْهِلَالَ",
          "translation": "That night we saw the crescent.",
          "cells": [
            "لَيْلَتَئِذٍ",
            "رَأَيْنَا",
            "الْهِلَالَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَيُسْأَلَنَّ الْعِبَادُ يَوْمَئِذٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "لَيُسْأَلَنَّ الْعِبَادُ يَوْمَئِذٍ",
          "translation": "The servants will surely be questioned that day.",
          "cells": [
            "لَ",
            "يُسْأَلَنَّ",
            "الْعِبَادُ",
            "يَوْمَئِذٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "لَامُ التَّأْكِيْدِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَائِبُ فَاعِلٍ"
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
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
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
          "title": "يَوْمَئِذٍ يَخْسَرُ الظَّالِمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "يَوْمَئِذٍ يَخْسَرُ الظَّالِمُوْنَ",
          "translation": "That day the wrongdoers will lose.",
          "cells": [
            "يَوْمَئِذٍ",
            "يَخْسَرُ",
            "الظَّالِمُوْنَ"
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
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "حِيْنَئِذٍ يَنْدَمُ النَّاسُ جَمِيْعًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "حِيْنَئِذٍ يَنْدَمُ النَّاسُ جَمِيْعًا",
          "translation": "At that time all the people will regret.",
          "cells": [
            "حِيْنَئِذٍ",
            "يَنْدَمُ",
            "النَّاسُ",
            "جَمِيْعًا"
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
                  "end": 3,
                  "role": "تَأْكِيْدٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "سَاعَتَئِذٍ رَأَيْتُ الْإِمَامَ قَائِمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "سَاعَتَئِذٍ رَأَيْتُ الْإِمَامَ قَائِمًا",
          "translation": "At that hour I saw the imam standing.",
          "cells": [
            "سَاعَتَئِذٍ",
            "رَأَيْتُ",
            "الْإِمَامَ",
            "قَائِمًا"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
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
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "يَوْمَئِذٍ لَا تَنْفَعُ الشَّفَاعَةُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "يَوْمَئِذٍ لَا تَنْفَعُ الشَّفَاعَةُ",
          "translation": "That day intercession will not benefit.",
          "cells": [
            "يَوْمَئِذٍ",
            "لَا",
            "تَنْفَعُ",
            "الشَّفَاعَةُ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَوْمَئِذٍ يَدْخُلُ أَصْحَابُ الْجَنَّةِ الْجَنَّةَ وَأَصْحَابُ النَّارِ النَّارَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "يَوْمَئِذٍ يَدْخُلُ أَصْحَابُ الْجَنَّةِ الْجَنَّةَ وَأَصْحَابُ النَّارِ النَّارَ",
          "translation": "That day the people of Paradise will enter Paradise and the people of the Fire the Fire.",
          "cells": [
            "يَوْمَئِذٍ",
            "يَدْخُلُ",
            "أَصْحَابُ",
            "الْجَنَّةِ",
            "الْجَنَّةَ",
            "وَ",
            "أَصْحَابُ النَّارِ",
            "النَّارَ"
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
                  "end": 3,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 7,
                  "end": 7,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يُنْفَخُ فِي الصُّوْرِ وَحِيْنَئِذٍ يَخْرُجُوْنَ مِنْ قُبُوْرِهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "يُنْفَخُ فِي الصُّوْرِ وَحِيْنَئِذٍ يَخْرُجُوْنَ مِنْ قُبُوْرِهِمْ",
          "translation": "The horn will be blown, and at that time they will come out of their graves.",
          "cells": [
            "يُنْفَخُ",
            "فِي الصُّوْرِ",
            "وَ",
            "حِيْنَئِذٍ",
            "يَخْرُجُوْنَ",
            "مِنْ قُبُوْرِهِمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَائِبُ فَاعِلٍ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "مَعْطُوْفٌ عَلَيْهِ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
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
          "title": "يَأْتِيْ كُلَّ إِنْسَانٍ مَوْتُهُ وَحِيْنَئِذٍ لَا يَنْفَعُ دَوَاءٌ وَلَا طَبِيْبٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "يَأْتِيْ كُلَّ إِنْسَانٍ مَوْتُهُ وَحِيْنَئِذٍ لَا يَنْفَعُ دَوَاءٌ وَلَا طَبِيْبٌ",
          "translation": "Every person's death comes to him, and at that time neither medicine nor a doctor benefits.",
          "cells": [
            "يَأْتِيْ",
            "كُلَّ",
            "إِنْسَانٍ",
            "مَوْتُهُ",
            "وَ",
            "حِيْنَئِذٍ",
            "لَا",
            "يَنْفَعُ",
            "دَوَاءٌ",
            "وَلَا",
            "طَبِيْبٌ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "حَرْفُ عَطْفٍ وَنَفْيٍ"
                },
                {
                  "start": 10,
                  "end": 10,
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
                  "role": "مُضَافٌ"
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
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يُؤَذِّنُ الْمُؤَذِّنُ وَحِيْنَئِذٍ يَقُوْمُ الْمُسْلِمُوْنَ وَالْمُسْلِمَاتُ مُصَلِّيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "يُؤَذِّنُ الْمُؤَذِّنُ وَحِيْنَئِذٍ يَقُوْمُ الْمُسْلِمُوْنَ وَالْمُسْلِمَاتُ مُصَلِّيْنَ",
          "translation": "The mu'adhdhin calls the athan, and at that time the Muslim men and women stand to pray.",
          "cells": [
            "يُؤَذِّنُ",
            "الْمُؤَذِّنُ",
            "وَ",
            "حِيْنَئِذٍ",
            "يَقُوْمُ",
            "الْمُسْلِمُوْنَ",
            "وَ",
            "الْمُسْلِمَاتُ",
            "مُصَلِّيْنَ"
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 8,
                  "end": 8,
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
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "تُزَلْزَلُ الْأَرْضُ يَوْمَ الْقِيَامَةِ وَيَوْمَئِذٍ تُحَدِّثُ الْأَرْضُ أَخْبَارَهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "تُزَلْزَلُ الْأَرْضُ يَوْمَ الْقِيَامَةِ وَيَوْمَئِذٍ تُحَدِّثُ الْأَرْضُ أَخْبَارَهَا",
          "translation": "The earth will be shaken on the Day of Resurrection, and that day the earth will relate its news.",
          "cells": [
            "تُزَلْزَلُ",
            "الْأَرْضُ",
            "يَوْمَ",
            "الْقِيَامَةِ",
            "وَ",
            "يَوْمَئِذٍ",
            "تُحَدِّثُ",
            "الْأَرْضُ",
            "أَخْبَارَهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَائِبُ فَاعِلٍ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "تَمْيِيْزٌ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يُحْشَرُ النَّاسُ يَوْمَ الْقِيَامَةِ وَحِيْنَئِذٍ لَا يَنْفَعُ مَالٌ وَلَا بَنُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 1, Part 6)",
          "sentence": "يُحْشَرُ النَّاسُ يَوْمَ الْقِيَامَةِ وَحِيْنَئِذٍ لَا يَنْفَعُ مَالٌ وَلَا بَنُوْنَ",
          "translation": "The people will be gathered on the Day of Resurrection, and at that time neither wealth nor sons will benefit.",
          "cells": [
            "يُحْشَرُ",
            "النَّاسُ",
            "يَوْمَ",
            "الْقِيَامَةِ",
            "وَ",
            "حِيْنَئِذٍ",
            "لَا",
            "يَنْفَعُ",
            "مَالٌ",
            "وَلَا",
            "بَنُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَائِبُ فَاعِلٍ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "حَرْفُ عَطْفٍ وَنَفْيٍ"
                },
                {
                  "start": 10,
                  "end": 10,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "What was لَيْلَتَئِذٍ before the tanween replaced the sentence?",
          "options": [
            "لَيْلَةٌ with a نَعْت",
            "لَيْلَةَ إِذْ + a sentence",
            "لَيْلَةَ with an attached pronoun",
            "لَيْلٌ + إِذَا"
          ],
          "correct": 1,
          "explanation": "Exactly the shape of يَوْمَئِذٍ, only with لَيْلَةَ as the outer مُضَاف."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَيُسْأَلَنَّ الْعِبَادُ يَوْمَئِذٍ, why is الْعِبَادُ مَرْفُوْع?",
          "options": [
            "It is the فَاعِل of يُسْأَلُ",
            "It is the نَائِبُ فَاعِلٍ, since the verb is مَجْهُوْل",
            "It is a مُبْتَدَأ",
            "It is a بَدَل of يَوْمَئِذٍ"
          ],
          "correct": 1,
          "explanation": "The servants are the ones questioned, and no questioner is named."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In حِيْنَئِذٍ يَنْدَمُ النَّاسُ جَمِيْعًا, what is جَمِيْعًا?",
          "options": [
            "A حَال",
            "A تَمْيِيْز",
            "The تَأْكِيْد of النَّاسُ",
            "A بَدَل"
          ],
          "correct": 2,
          "explanation": "It stresses that not one of them is excepted."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In سَاعَتَئِذٍ رَأَيْتُ الْإِمَامَ قَائِمًا, what is قَائِمًا?",
          "options": [
            "A نَعْت of الْإِمَامَ",
            "A حَال of الْإِمَامَ",
            "A تَمْيِيْز",
            "A second مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "It is نَكِرَة while الْإِمَامَ is مَعْرِفَة, so it describes his state rather than defining him."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In يَأْتِيْ كُلَّ إِنْسَانٍ مَوْتُهُ, which word is the فَاعِل?",
          "options": [
            "كُلَّ",
            "إِنْسَانٍ",
            "مَوْتُهُ",
            "There is none"
          ],
          "correct": 2,
          "explanation": "Death is what comes; كُلَّ إِنْسَانٍ is مَنْصُوْب as the object of يَأْتِيْ."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In يُؤَذِّنُ الْمُؤَذِّنُ وَحِيْنَئِذٍ يَقُوْمُ الْمُسْلِمُوْنَ وَالْمُسْلِمَاتُ مُصَلِّيْنَ, what is مُصَلِّيْنَ?",
          "options": [
            "A نَعْت of الْمُسْلِمَاتُ",
            "A حَال of the two joined subjects",
            "A تَمْيِيْز",
            "A مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "It is مَنْصُوْب and نَكِرَة, describing the state they stand in — to pray."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In تُزَلْزَلُ الْأَرْضُ يَوْمَ الْقِيَامَةِ وَيَوْمَئِذٍ تُحَدِّثُ الْأَرْضُ أَخْبَارَهَا, how many مَفْعُوْلٌ فِيْهِ does the whole sentence contain?",
          "options": [
            "None",
            "One",
            "Two",
            "Three"
          ],
          "correct": 2,
          "explanation": "يَوْمَ الْقِيَامَةِ in the first clause and يَوْمَئِذٍ in the second."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمْ أَفْهَمِ الدَّرْسَ الْيَوْمَ وَأَسْأَلُ الْأُسْتَاذَ غَدًا وَحِيْنَئِذٍ أَفْهَمُهُ, what does حِيْنَئِذٍ point back to?",
          "options": [
            "The time of not understanding today",
            "The time of asking the teacher tomorrow",
            "The time of the lesson itself",
            "Nothing in the sentence"
          ],
          "correct": 1,
          "explanation": "'And at that time' — that is, when the asking has happened — 'I will understand it'."
        },
        {
          "title": "to emphasise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to emphasise\"?",
          "options": [
            "أَكَّدَ يُؤَكِّدُ",
            "رَفَعَ يَرْفَعُ",
            "نَفَى يَنْفِيْ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to emphasise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكَّدَ يُؤَكِّدُ mean?",
          "options": [
            "to emphasise",
            "to make مَرْفُوْعٌ",
            "to negate",
            "to face, to turn towards"
          ],
          "correct": 0
        },
        {
          "title": "to emphasise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَكَّدَ يُؤَكِّدُ?",
          "options": [
            "تَأْكِيْدًا، تَوْكِيْدًا",
            "رَفْعًا",
            "نَفْيًا",
            "اِسْتِقْبَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to make مَجْرُوْرٌ",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make مَجْرُوْرٌ\"?",
          "options": [
            "جَرَّ يَجُرُّ",
            "نَصَبَ يَنْصِبُ",
            "اِسْتَعَاذَ يَسْتَعِيْذُ",
            "اِسْتَمَعَ يَسْتَمِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to make مَجْرُوْرٌ",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَرَّ يَجُرُّ mean?",
          "options": [
            "to make مَجْرُوْرٌ",
            "to make مَنْصُوْبٌ",
            "to seek refuge",
            "to listen"
          ],
          "correct": 0
        },
        {
          "title": "to make مَجْرُوْرٌ (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَرَّ يَجُرُّ?",
          "options": [
            "جَرًّا",
            "نَصْبًا",
            "اِسْتِعَاذَةً",
            "اِسْتِمَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to make مَجْزُوْمٌ",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make مَجْزُوْمٌ\"?",
          "options": [
            "جَزَمَ يَجْزِمُ",
            "نَفَى يَنْفِيْ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "زَجَرَ يَزْجُرُ"
          ],
          "correct": 0
        },
        {
          "title": "to make مَجْزُوْمٌ",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزَمَ يَجْزِمُ mean?",
          "options": [
            "to make مَجْزُوْمٌ",
            "to negate",
            "to face, to turn towards",
            "to scold"
          ],
          "correct": 0
        },
        {
          "title": "to make مَجْزُوْمٌ (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزَمَ يَجْزِمُ?",
          "options": [
            "جَزْمًا",
            "نَفْيًا",
            "اِسْتِقْبَالًا",
            "زَجْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to make مَرْفُوْعٌ",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make مَرْفُوْعٌ\"?",
          "options": [
            "رَفَعَ يَرْفَعُ",
            "اِسْتَعَاذَ يَسْتَعِيْذُ",
            "اِسْتَمَعَ يَسْتَمِعُ",
            "شَاءَ يَشَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "to make مَرْفُوْعٌ",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَفَعَ يَرْفَعُ mean?",
          "options": [
            "to make مَرْفُوْعٌ",
            "to seek refuge",
            "to listen",
            "to wish, to desire"
          ],
          "correct": 0
        },
        {
          "title": "to make مَرْفُوْعٌ (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَفَعَ يَرْفَعُ?",
          "options": [
            "رَفْعًا",
            "اِسْتِعَاذَةً",
            "اِسْتِمَاعًا",
            "مَشِيْئَةً"
          ],
          "correct": 0
        },
        {
          "title": "to make مَنْصُوْبٌ",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make مَنْصُوْبٌ\"?",
          "options": [
            "نَصَبَ يَنْصِبُ",
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "زَجَرَ يَزْجُرُ",
            "عَطَسَ يَعْطِسُ"
          ],
          "correct": 0
        },
        {
          "title": "to make مَنْصُوْبٌ",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَصَبَ يَنْصِبُ mean?",
          "options": [
            "to make مَنْصُوْبٌ",
            "to face, to turn towards",
            "to scold",
            "to sneeze"
          ],
          "correct": 0
        },
        {
          "title": "to make مَنْصُوْبٌ (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَصَبَ يَنْصِبُ?",
          "options": [
            "نَصْبًا",
            "اِسْتِقْبَالًا",
            "زَجْرًا",
            "عُطَاسًا"
          ],
          "correct": 0
        },
        {
          "title": "to negate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to negate\"?",
          "options": [
            "نَفَى يَنْفِيْ",
            "اِسْتَمَعَ يَسْتَمِعُ",
            "شَاءَ يَشَاءُ",
            "مَرَّ يَمُرُّ"
          ],
          "correct": 0
        },
        {
          "title": "to negate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَفَى يَنْفِيْ mean?",
          "options": [
            "to negate",
            "to listen",
            "to wish, to desire",
            "to pass"
          ],
          "correct": 0
        },
        {
          "title": "to negate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَفَى يَنْفِيْ?",
          "options": [
            "نَفْيًا",
            "اِسْتِمَاعًا",
            "مَشِيْئَةً",
            "مُرُوْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek refuge\"?",
          "options": [
            "اِسْتَعَاذَ يَسْتَعِيْذُ",
            "زَجَرَ يَزْجُرُ",
            "عَطَسَ يَعْطِسُ",
            "يَبِسَ يَيْبَسُ"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَعَاذَ يَسْتَعِيْذُ mean?",
          "options": [
            "to seek refuge",
            "to scold",
            "to sneeze",
            "to be dry"
          ],
          "correct": 0
        },
        {
          "title": "to seek refuge (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَعَاذَ يَسْتَعِيْذُ?",
          "options": [
            "اِسْتِعَاذَةً",
            "زَجْرًا",
            "عُطَاسًا",
            "يُبْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to face, to turn towards",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to face, to turn towards\"?",
          "options": [
            "اِسْتَقْبَلَ يَسْتَقْبِلُ",
            "شَاءَ يَشَاءُ",
            "مَرَّ يَمُرُّ",
            "أَكَّدَ يُؤَكِّدُ"
          ],
          "correct": 0
        },
        {
          "title": "to face, to turn towards",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَقْبَلَ يَسْتَقْبِلُ mean?",
          "options": [
            "to face, to turn towards",
            "to wish, to desire",
            "to pass",
            "to emphasise"
          ],
          "correct": 0
        },
        {
          "title": "to face, to turn towards (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَقْبَلَ يَسْتَقْبِلُ?",
          "options": [
            "اِسْتِقْبَالًا",
            "مَشِيْئَةً",
            "مُرُوْرًا",
            "تَأْكِيْدًا، تَوْكِيْدًا"
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
            "عَطَسَ يَعْطِسُ",
            "يَبِسَ يَيْبَسُ",
            "جَرَّ يَجُرُّ"
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
            "to sneeze",
            "to be dry",
            "to make مَجْرُوْرٌ"
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
            "عُطَاسًا",
            "يُبْسًا",
            "جَرًّا"
          ],
          "correct": 0
        },
        {
          "title": "to scold",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to scold\"?",
          "options": [
            "زَجَرَ يَزْجُرُ",
            "مَرَّ يَمُرُّ",
            "أَكَّدَ يُؤَكِّدُ",
            "جَزَمَ يَجْزِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to scold",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَجَرَ يَزْجُرُ mean?",
          "options": [
            "to scold",
            "to pass",
            "to emphasise",
            "to make مَجْزُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to scold (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَجَرَ يَزْجُرُ?",
          "options": [
            "زَجْرًا",
            "مُرُوْرًا",
            "تَأْكِيْدًا، تَوْكِيْدًا",
            "جَزْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to wish, to desire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wish, to desire\"?",
          "options": [
            "شَاءَ يَشَاءُ",
            "يَبِسَ يَيْبَسُ",
            "جَرَّ يَجُرُّ",
            "رَفَعَ يَرْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to wish, to desire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَاءَ يَشَاءُ mean?",
          "options": [
            "to wish, to desire",
            "to be dry",
            "to make مَجْرُوْرٌ",
            "to make مَرْفُوْعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to wish, to desire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَاءَ يَشَاءُ?",
          "options": [
            "مَشِيْئَةً",
            "يُبْسًا",
            "جَرًّا",
            "رَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to sneeze",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sneeze\"?",
          "options": [
            "عَطَسَ يَعْطِسُ",
            "أَكَّدَ يُؤَكِّدُ",
            "جَزَمَ يَجْزِمُ",
            "نَصَبَ يَنْصِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to sneeze",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَطَسَ يَعْطِسُ mean?",
          "options": [
            "to sneeze",
            "to emphasise",
            "to make مَجْزُوْمٌ",
            "to make مَنْصُوْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to sneeze (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَطَسَ يَعْطِسُ?",
          "options": [
            "عُطَاسًا",
            "تَأْكِيْدًا، تَوْكِيْدًا",
            "جَزْمًا",
            "نَصْبًا"
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
            "جَرَّ يَجُرُّ",
            "رَفَعَ يَرْفَعُ",
            "نَفَى يَنْفِيْ"
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
            "to make مَجْرُوْرٌ",
            "to make مَرْفُوْعٌ",
            "to negate"
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
            "جَرًّا",
            "رَفْعًا",
            "نَفْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to be dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be dry\"?",
          "options": [
            "يَبِسَ يَيْبَسُ",
            "جَزَمَ يَجْزِمُ",
            "نَصَبَ يَنْصِبُ",
            "اِسْتَعَاذَ يَسْتَعِيْذُ"
          ],
          "correct": 0
        },
        {
          "title": "to be dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَبِسَ يَيْبَسُ mean?",
          "options": [
            "to be dry",
            "to make مَجْزُوْمٌ",
            "to make مَنْصُوْبٌ",
            "to seek refuge"
          ],
          "correct": 0
        },
        {
          "title": "to be dry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of يَبِسَ يَيْبَسُ?",
          "options": [
            "يُبْسًا",
            "جَزْمًا",
            "نَصْبًا",
            "اِسْتِعَاذَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l9",
      "title": "إذا",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "The مُضَافٌ إِلَيْهِ of إِذَا is a جُمْلَةٌ فِعْلِيَّةٌ, usually with a فِعْلٌ مَاضٍ. However, it denotes a present habitual or a future meaning. It is translated as 'when'.",
              "list": false
            },
            {
              "html": "This is the point to hold on to. إِذَا looks past and means present or future. Where لَمَّا reports something that happened once and is over, إِذَا describes what happens as a rule, or what will happen when the moment arrives.",
              "list": false
            },
            {
              "html": "إِذَا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ — When I hear the athan, I go to the masjid.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Both verbs, سَمِعْتُ and ذَهَبْتُ, are مَاضٍ in form; both are present in meaning. Compare it with the لَمَّا sentence from Lesson 13, which is word-for-word almost identical: لَمَّا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ, 'When I heard the athan, I went to the masjid.' Only the adverb differs, and with it the whole tense.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِذَا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ",
                "translation": "When I hear the athan, I go to the masjid.",
                "cells": [
                  "إِذَا",
                  "سَمِعْتُ",
                  "الْأَذَانَ",
                  "ذَهَبْتُ",
                  "إِلَى",
                  "الْمَسْجِدِ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 2,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                      },
                      {
                        "start": 4,
                        "end": 5,
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مَجْرُوْرٌ"
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
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "The Four Time Adverbs Compared",
                "headers": [
                  "Adverb",
                  "Its verb",
                  "Meaning"
                ],
                "rows": [
                  [
                    "لَمَّا",
                    "فِعْلٌ مَاضٍ",
                    "'when' — one occasion, past"
                  ],
                  [
                    "كُلَّمَا",
                    "فِعْلٌ مَاضٍ",
                    "'whenever' — repeated, any tense"
                  ],
                  [
                    "إِذْ",
                    "either kind of sentence",
                    "'when' — one occasion"
                  ],
                  [
                    "إِذَا",
                    "usually فِعْلٌ مَاضٍ",
                    "'when' — habitual present or future"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Although إِذَا usually takes a فِعْلٌ مَاضٍ, what tense does it actually convey؟",
            "kind": "mcq",
            "options": [
              "A present habitual or future meaning",
              "A past meaning, exactly like لَمَّا",
              "A pure future only, never present",
              "It has no tense meaning of its own"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Negating the Sentence after إِذَا",
          "lines": [
            {
              "html": "If the sentence after إِذَا is negative, it comes with the negative particle لَمْ. The verb then appears as a مُضَارِع made مَجْزُوْم by لَمْ, but the meaning stays exactly where إِذَا put it — habitual present or future.",
              "list": false
            },
            {
              "html": "إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ الدَّرْسَ رَاجَعْنَا الدُّرُوْسَ — When the teacher does not attend the class, we revise the lessons.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ الدَّرْسَ رَاجَعْنَا الدُّرُوْسَ",
                "translation": "When the teacher does not attend the class, we revise the lessons.",
                "cells": [
                  "إِذَا",
                  "لَمْ",
                  "يَحْضُرِ",
                  "الْمُعَلِّمُ",
                  "الدَّرْسَ",
                  "رَاجَعْنَا",
                  "الدُّرُوْسَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 4,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
                        "start": 0,
                        "end": 0,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 1,
                        "end": 4,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 1,
                        "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                        "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice the kasrah on يَحْضُرِ. The verb is مَجْزُوْم, so its last letter should carry a سُكُون; the kasrah is only there to avoid two سُكُون meeting when الدَّرْسَ follows with its own hamzatul wasl.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When the sentence after إِذَا is negative, which particle is used, and what happens to the verb؟",
            "kind": "mcq",
            "options": [
              "لَمْ, which makes the following مُضَارِع verb مَجْزُوْمٌ",
              "لَا, which leaves the verb unaffected",
              "مَا, which makes the verb مَنْصُوْبٌ",
              "لَنْ, which makes the verb future"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "إِذَا",
        "rows": [
          {
            "label": "Its sentence",
            "arabic": "جُمْلَةٌ فِعْلِيَّةٌ، عَادَةً بِفِعْلٍ مَاضٍ",
            "meaning": "A verbal sentence, usually with a مَاضٍ verb."
          },
          {
            "label": "Its meaning",
            "arabic": "إِذَا = when",
            "meaning": "Despite the مَاضٍ form, it denotes a habitual present or a future event."
          },
          {
            "label": "The book's example",
            "arabic": "إِذَا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ",
            "meaning": "'When I hear the athan, I go to the masjid.'"
          },
          {
            "label": "Against لَمَّا",
            "arabic": "إِذَا ≠ لَمَّا",
            "meaning": "The same words with لَمَّا would read 'When I heard the athan, I went' — one finished occasion."
          },
          {
            "label": "Negation",
            "arabic": "إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ",
            "meaning": "A negated sentence after إِذَا comes with لَمْ, which makes the مُضَارِع مَجْزُوْم."
          },
          {
            "label": "Its slot",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "As with the other special adverbs."
          }
        ]
      },
      "quiz": [
        {
          "q": "What kind of sentence usually follows إِذَا?",
          "options": [
            "A جُمْلَةٌ اسْمِيَّةٌ",
            "A جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ",
            "A جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ أَمْرٌ",
            "Either kind equally"
          ],
          "correct": 1,
          "explanation": "A verbal sentence, and its verb is usually مَاضٍ in form."
        },
        {
          "q": "What tense does an إِذَا sentence denote?",
          "options": [
            "A finished past event",
            "A habitual present or a future event",
            "Always the future only",
            "Always the past perfect"
          ],
          "correct": 1,
          "explanation": "The مَاضٍ form is misleading here — the meaning is present or future."
        },
        {
          "q": "What is the difference between إِذَا سَمِعْتُ الْأَذَانَ ذَهَبْتُ and لَمَّا سَمِعْتُ الْأَذَانَ ذَهَبْتُ?",
          "options": [
            "There is none",
            "The first is a question",
            "The first is habitual present; the second is a single past event",
            "The first is negative"
          ],
          "correct": 2,
          "explanation": "Only the adverb changes, and it carries the whole tense difference."
        },
        {
          "q": "Which particle negates the sentence after إِذَا?",
          "options": [
            "لَا",
            "مَا",
            "لَنْ",
            "لَمْ"
          ],
          "correct": 3,
          "explanation": "إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ الدَّرْسَ — 'when the teacher does not attend'."
        },
        {
          "q": "What does لَمْ do to the مُضَارِع verb that follows it?",
          "options": [
            "Makes it مَجْزُوْم and negates it",
            "Makes it مَنْصُوْب",
            "Makes it مَرْفُوْع",
            "Turns it into a مَاضٍ"
          ],
          "correct": 0,
          "explanation": "It is a حَرْفُ نَفْيٍ وَجَزْمٍ — it both negates and cuts the ending."
        },
        {
          "q": "In إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ الدَّرْسَ, why does يَحْضُرِ end in a kasrah rather than a سُكُون?",
          "options": [
            "Because it is مَجْرُوْر",
            "To avoid two سُكُون meeting with the following word",
            "Because إِذَا demands it",
            "Because the verb is feminine"
          ],
          "correct": 1,
          "explanation": "The verb is مَجْزُوْم; the kasrah is only a device for easy pronunciation."
        }
      ],
      "bank": [
        {
          "title": "إِذَا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 450 (Section 1, Part 6)",
          "sentence": "إِذَا سَمِعْتُ الْأَذَانَ ذَهَبْتُ إِلَى الْمَسْجِدِ",
          "translation": "When I hear the athan, I go to the masjid.",
          "cells": [
            "إِذَا",
            "سَمِعْتُ",
            "الْأَذَانَ",
            "ذَهَبْتُ",
            "إِلَى",
            "الْمَسْجِدِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ الدَّرْسَ رَاجَعْنَا الدُّرُوْسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 450 (Section 1, Part 6)",
          "sentence": "إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ الدَّرْسَ رَاجَعْنَا الدُّرُوْسَ",
          "translation": "When the teacher does not attend the class, we revise the lessons.",
          "cells": [
            "إِذَا",
            "لَمْ",
            "يَحْضُرِ",
            "الْمُعَلِّمُ",
            "الدَّرْسَ",
            "رَاجَعْنَا",
            "الدُّرُوْسَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَاذْكُرْ رَبَّكَ إِذَا نَسِيْتَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "وَاذْكُرْ رَبَّكَ إِذَا نَسِيْتَ",
          "translation": "And remember your Lord when you forget.",
          "cells": [
            "وَ",
            "اذْكُرْ",
            "رَبَّكَ",
            "إِذَا",
            "نَسِيْتَ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنَّ اللهَ إِذَا أَحَبَّ قَوْمًا ابْتَلَاهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِنَّ اللهَ إِذَا أَحَبَّ قَوْمًا ابْتَلَاهُمْ",
          "translation": "Indeed Allah, when He loves a people, tests them.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "إِذَا",
            "أَحَبَّ",
            "قَوْمًا",
            "ابْتَلَاهُمْ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا تَابَ الْعَبْدُ تَابَ اللهُ عَلَيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِذَا تَابَ الْعَبْدُ تَابَ اللهُ عَلَيْهِ",
          "translation": "When the servant repents, Allah turns to him in forgiveness.",
          "cells": [
            "إِذَا",
            "تَابَ",
            "الْعَبْدُ",
            "تَابَ",
            "اللهُ",
            "عَلَيْهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَإِذَا أَصَابَتْهُمْ مُصِيْبَةٌ قَالُوْا إِنَّا لِلّٰهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "وَإِذَا أَصَابَتْهُمْ مُصِيْبَةٌ قَالُوْا إِنَّا لِلّٰهِ",
          "translation": "And when a calamity strikes them, they say 'Indeed we belong to Allah'.",
          "cells": [
            "وَ",
            "إِذَا",
            "أَصَابَتْهُمْ",
            "مُصِيْبَةٌ",
            "قَالُوْا",
            "إِنَّا لِلّٰهِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُمْ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا جَاءَ الْمَوْتُ لَا يَنْفَعُ طَبِيْبٌ وَلَا دَوَاءٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِذَا جَاءَ الْمَوْتُ لَا يَنْفَعُ طَبِيْبٌ وَلَا دَوَاءٌ",
          "translation": "When death comes, neither a doctor nor medicine benefits.",
          "cells": [
            "إِذَا",
            "جَاءَ",
            "الْمَوْتُ",
            "لَا",
            "يَنْفَعُ",
            "طَبِيْبٌ",
            "وَلَا",
            "دَوَاءٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ نَفْيٍ"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ وَنَفْيٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَعْطُوْفٌ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "مَفْعُوْلٌ بِهِ",
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِنَّ الْمُنَافِقِيْنَ إِذَا قَامُوْا إِلَى الصَّلَاةِ قَامُوْا كُسَالَى",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِنَّ الْمُنَافِقِيْنَ إِذَا قَامُوْا إِلَى الصَّلَاةِ قَامُوْا كُسَالَى",
          "translation": "Indeed the hypocrites, when they stand for the prayer, stand lazily.",
          "cells": [
            "إِنَّ",
            "الْمُنَافِقِيْنَ",
            "إِذَا",
            "قَامُوْا",
            "إِلَى الصَّلَاةِ",
            "قَامُوْا",
            "كُسَالَى"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 6,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "مُرُوْا أَوْلَادَكُمْ بِالصَّلَاةِ إِذَا بَلَغُوْا سَبْعَ سِنِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "مُرُوْا أَوْلَادَكُمْ بِالصَّلَاةِ إِذَا بَلَغُوْا سَبْعَ سِنِيْنَ",
          "translation": "Command your children to pray when they reach seven years.",
          "cells": [
            "مُرُوْا",
            "أَوْلَادَكُمْ",
            "بِالصَّلَاةِ",
            "إِذَا",
            "بَلَغُوْا",
            "سَبْعَ",
            "سِنِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا جَاءَ رَمَضَانُ ازْدَادَ الْمُصَلُّوْنَ فِي الْمَسَاجِدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِذَا جَاءَ رَمَضَانُ ازْدَادَ الْمُصَلُّوْنَ فِي الْمَسَاجِدِ",
          "translation": "When Ramadan comes, those who pray in the masjids increase.",
          "cells": [
            "إِذَا",
            "جَاءَ",
            "رَمَضَانُ",
            "ازْدَادَ",
            "الْمُصَلُّوْنَ",
            "فِي",
            "الْمَسَاجِدِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَارٌّ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِذَا دَخَلَتْ لَمْ عَلَى الْمُضَارِعِ جَزَمَتْهُ وَإِذَا دَخَلَتْهُ أَنْ نَصَبَتْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِذَا دَخَلَتْ لَمْ عَلَى الْمُضَارِعِ جَزَمَتْهُ وَإِذَا دَخَلَتْهُ أَنْ نَصَبَتْهُ",
          "translation": "When لَمْ enters upon the مُضَارِع it makes it مَجْزُوْم, and when أَنْ enters upon it, it makes it مَنْصُوْب.",
          "cells": [
            "إِذَا",
            "دَخَلَتْ",
            "لَمْ",
            "عَلَى الْمُضَارِعِ",
            "جَزَمَتْهُ",
            "وَ",
            "إِذَا",
            "دَخَلَتْهُ",
            "أَنْ",
            "نَصَبَتْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ) وَمَفْعُوْلٌ بِهِ (هُ) ثَانٍ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ) ثَالِثٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا دَخَلَتْ نُوْنُ التَّأْكِيْدِ سَقَطَتِ الضَّمَّةُ مِنْ آخِرِ الْمُضَارِعِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِذَا دَخَلَتْ نُوْنُ التَّأْكِيْدِ سَقَطَتِ الضَّمَّةُ مِنْ آخِرِ الْمُضَارِعِ",
          "translation": "When the نُوْنُ التَّأْكِيْدِ enters, the dammah falls from the end of the مُضَارِع.",
          "cells": [
            "إِذَا",
            "دَخَلَتْ",
            "نُوْنُ",
            "التَّأْكِيْدِ",
            "سَقَطَتِ",
            "الضَّمَّةُ",
            "مِنْ",
            "آخِرِ",
            "الْمُضَارِعِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 6,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                  "end": 3,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "جَارٌّ"
                },
                {
                  "start": 7,
                  "end": 8,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِذَا رَأَى الْكَافِرُ الْعَذَابَ يَوْمَ الْقِيَامَةِ يَنْدَمُ وَحِيْنَئِذٍ لَا تَنْفَعُ النَّدَامَةُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِذَا رَأَى الْكَافِرُ الْعَذَابَ يَوْمَ الْقِيَامَةِ يَنْدَمُ وَحِيْنَئِذٍ لَا تَنْفَعُ النَّدَامَةُ",
          "translation": "When the disbeliever sees the punishment on the Day of Resurrection he regrets, and at that time regret does not benefit.",
          "cells": [
            "إِذَا",
            "رَأَى",
            "الْكَافِرُ",
            "الْعَذَابَ",
            "يَوْمَ الْقِيَامَةِ",
            "يَنْدَمُ",
            "وَ",
            "حِيْنَئِذٍ",
            "لَا",
            "تَنْفَعُ",
            "النَّدَامَةُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "فَاعِلٌ"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ وَمُضَافٌ إِلَيْهِ (بِتَنْوِيْنِ الْعِوَضِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا طَلَعَتِ الشَّمْسُ خَرَجَ وَقْتُ الْفَجْرِ وَإِذَا غَرَبَتْ دَخَلَ وَقْتُ الْمَغْرِبِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 6)",
          "sentence": "إِذَا طَلَعَتِ الشَّمْسُ خَرَجَ وَقْتُ الْفَجْرِ وَإِذَا غَرَبَتْ دَخَلَ وَقْتُ الْمَغْرِبِ",
          "translation": "When the sun rises the time of Fajr goes out, and when it sets the time of Maghrib comes in.",
          "cells": [
            "إِذَا",
            "طَلَعَتِ",
            "الشَّمْسُ",
            "خَرَجَ",
            "وَقْتُ",
            "الْفَجْرِ",
            "وَ",
            "إِذَا",
            "غَرَبَتْ",
            "دَخَلَ",
            "وَقْتُ الْمَغْرِبِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "فَاعِلٌ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِنَّ اللهَ إِذَا أَحَبَّ قَوْمًا ابْتَلَاهُمْ, what is the خَبَرُ إِنَّ?",
          "options": [
            "قَوْمًا",
            "ابْتَلَاهُمْ alone",
            "The whole sentence إِذَا أَحَبَّ قَوْمًا ابْتَلَاهُمْ",
            "There is none"
          ],
          "correct": 2,
          "explanation": "A جُمْلَةٌ صُغْرَى can serve as the خَبَر, and here it carries its own adverbial inside it."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا تَابَ الْعَبْدُ تَابَ اللهُ عَلَيْهِ, what is عَلَيْهِ?",
          "options": [
            "The مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ of the second تَابَ",
            "The فَاعِل",
            "The مُضَافٌ إِلَيْهِ of إِذَا",
            "A حَال"
          ],
          "correct": 0,
          "explanation": "تَابَ عَلَى means 'to turn to someone in forgiveness'; the object comes through the preposition."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِنَّ الْمُنَافِقِيْنَ إِذَا قَامُوْا إِلَى الصَّلَاةِ قَامُوْا كُسَالَى, what is كُسَالَى?",
          "options": [
            "A نَعْت",
            "A حَال",
            "A تَمْيِيْز",
            "A بَدَل"
          ],
          "correct": 1,
          "explanation": "It describes the state in which they stand — 'they stand lazily'."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مُرُوْا أَوْلَادَكُمْ بِالصَّلَاةِ إِذَا بَلَغُوْا سَبْعَ سِنِيْنَ, what is سِنِيْنَ?",
          "options": [
            "A تَمْيِيْز of سَبْعَ",
            "The مُضَافٌ إِلَيْهِ of سَبْعَ",
            "A بَدَل of أَوْلَادَكُمْ",
            "A حَال"
          ],
          "correct": 1,
          "explanation": "Numbers three to ten are مُضَاف to their counted noun, which comes in the plural and مَجْرُوْر."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا دَخَلَتْ لَمْ عَلَى الْمُضَارِعِ جَزَمَتْهُ, what is the doer of دَخَلَتْ?",
          "options": [
            "الْمُضَارِعِ",
            "The particle لَمْ itself",
            "A hidden هِيَ",
            "جَزَمَتْهُ"
          ],
          "correct": 1,
          "explanation": "The sentence talks about grammar: لَمْ is the subject that 'enters upon' the مُضَارِع."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا دَخَلَتْ نُوْنُ التَّأْكِيْدِ سَقَطَتِ الضَّمَّةُ مِنْ آخِرِ الْمُضَارِعِ, what is الضَّمَّةُ?",
          "options": [
            "The مَفْعُوْلٌ بِهِ of سَقَطَتْ",
            "The فَاعِل of سَقَطَتْ",
            "A بَدَل of نُوْنُ التَّأْكِيْدِ",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "سَقَطَ is intransitive — the dammah is the thing that falls away."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا رَأَى الْكَافِرُ الْعَذَابَ يَوْمَ الْقِيَامَةِ يَنْدَمُ وَحِيْنَئِذٍ لَا تَنْفَعُ النَّدَامَةُ, what does حِيْنَئِذٍ refer back to?",
          "options": [
            "The Day of Resurrection, when he sees the punishment",
            "The time of the disbeliever's death",
            "The time the verse was revealed",
            "Nothing — it is an ordinary tanween"
          ],
          "correct": 0,
          "explanation": "The تَنْوِيْنُ الْعِوَضِ stands in for the sentence just given, exactly as in the previous lesson."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Compare ﴿وَإِذَا أَصَابَتْهُمْ مُصِيْبَةٌ قَالُوا إِنَّا لِلّٰهِ﴾ with the كُلَّمَا version met earlier. What changes?",
          "options": [
            "The doer changes",
            "Nothing at all",
            "'Whenever' becomes 'when', and repetition becomes a habitual rule",
            "The sentence becomes negative"
          ],
          "correct": 2,
          "explanation": "كُلَّمَا counts the occasions; إِذَا states what is done as a matter of course."
        },
        {
          "title": "lazy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lazy\"?",
          "options": [
            "كَسْلَانُ",
            "وَقْتٌ",
            "بَلَغَ يَبْلُغُ",
            "سَقَطَ يَسْقُطُ"
          ],
          "correct": 0
        },
        {
          "title": "lazy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَسْلَانُ mean?",
          "options": [
            "lazy",
            "time, appointed time",
            "to reach, to attain",
            "to fall, to drop"
          ],
          "correct": 0
        },
        {
          "title": "lazy (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَسْلَانُ?",
          "options": [
            "كُسَالَى",
            "أَوْقَاتٌ",
            "أَعْذِبَةٌ",
            "نَدَامَاتٌ"
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
            "مُنَافِقٌ",
            "طَلَعَ يَطْلُعُ",
            "رَاجَعَ يُرَاجِعُ"
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
            "hypocrite",
            "to rise (of the sun)",
            "to revise"
          ],
          "correct": 0
        },
        {
          "title": "punishment (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَذَابٌ?",
          "options": [
            "أَعْذِبَةٌ",
            "مُنَافِقُوْنَ",
            "نَدَامَاتٌ",
            "كُسَالَى"
          ],
          "correct": 0
        },
        {
          "title": "regret",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"regret\"?",
          "options": [
            "نَدَامَةٌ",
            "بَلَغَ يَبْلُغُ",
            "سَقَطَ يَسْقُطُ",
            "نَدِمَ يَنْدَمُ"
          ],
          "correct": 0
        },
        {
          "title": "regret",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَدَامَةٌ mean?",
          "options": [
            "regret",
            "to reach, to attain",
            "to fall, to drop",
            "to regret"
          ],
          "correct": 0
        },
        {
          "title": "regret (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَدَامَةٌ?",
          "options": [
            "نَدَامَاتٌ",
            "كُسَالَى",
            "أَوْقَاتٌ",
            "أَعْذِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "time, appointed time",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, appointed time\"?",
          "options": [
            "وَقْتٌ",
            "طَلَعَ يَطْلُعُ",
            "رَاجَعَ يُرَاجِعُ",
            "أَحَبَّ يُحِبُّ"
          ],
          "correct": 0
        },
        {
          "title": "time, appointed time",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَقْتٌ mean?",
          "options": [
            "time, appointed time",
            "to rise (of the sun)",
            "to revise",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "time, appointed time (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَقْتٌ?",
          "options": [
            "أَوْقَاتٌ",
            "أَعْذِبَةٌ",
            "مُنَافِقُوْنَ",
            "كُسَالَى"
          ],
          "correct": 0
        },
        {
          "title": "hypocrite",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hypocrite\"?",
          "options": [
            "مُنَافِقٌ",
            "سَقَطَ يَسْقُطُ",
            "نَدِمَ يَنْدَمُ",
            "أَمَرَ يَأْمُرُ"
          ],
          "correct": 0
        },
        {
          "title": "hypocrite",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُنَافِقٌ mean?",
          "options": [
            "hypocrite",
            "to fall, to drop",
            "to regret",
            "to command"
          ],
          "correct": 0
        },
        {
          "title": "hypocrite (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُنَافِقٌ?",
          "options": [
            "مُنَافِقُوْنَ",
            "نَدَامَاتٌ",
            "كُسَالَى",
            "أَعْذِبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to reach, to attain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reach, to attain\"?",
          "options": [
            "بَلَغَ يَبْلُغُ",
            "رَاجَعَ يُرَاجِعُ",
            "أَحَبَّ يُحِبُّ",
            "كَسْلَانُ"
          ],
          "correct": 0
        },
        {
          "title": "to reach, to attain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَلَغَ يَبْلُغُ mean?",
          "options": [
            "to reach, to attain",
            "to revise",
            "to love",
            "lazy"
          ],
          "correct": 0
        },
        {
          "title": "to reach, to attain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَلَغَ يَبْلُغُ?",
          "options": [
            "بُلُوْغًا",
            "سُقُوْطًا",
            "نَدَمًا",
            "أَمْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to rise (of the sun)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rise (of the sun)\"?",
          "options": [
            "طَلَعَ يَطْلُعُ",
            "نَدِمَ يَنْدَمُ",
            "أَمَرَ يَأْمُرُ",
            "عَذَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to rise (of the sun)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَلَعَ يَطْلُعُ mean?",
          "options": [
            "to rise (of the sun)",
            "to regret",
            "to command",
            "punishment"
          ],
          "correct": 0
        },
        {
          "title": "to rise (of the sun) (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَلَعَ يَطْلُعُ?",
          "options": [
            "طُلُوْعًا",
            "مُرَاجَعَةً",
            "إِحْبَابًا",
            "بُلُوْغًا"
          ],
          "correct": 0
        },
        {
          "title": "to fall, to drop",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fall, to drop\"?",
          "options": [
            "سَقَطَ يَسْقُطُ",
            "أَحَبَّ يُحِبُّ",
            "كَسْلَانُ",
            "نَدَامَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to fall, to drop",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَقَطَ يَسْقُطُ mean?",
          "options": [
            "to fall, to drop",
            "to love",
            "lazy",
            "regret"
          ],
          "correct": 0
        },
        {
          "title": "to fall, to drop (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَقَطَ يَسْقُطُ?",
          "options": [
            "سُقُوْطًا",
            "نَدَمًا",
            "أَمْرًا",
            "طُلُوْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to revise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to revise\"?",
          "options": [
            "رَاجَعَ يُرَاجِعُ",
            "أَمَرَ يَأْمُرُ",
            "عَذَابٌ",
            "وَقْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to revise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَاجَعَ يُرَاجِعُ mean?",
          "options": [
            "to revise",
            "to command",
            "punishment",
            "time, appointed time"
          ],
          "correct": 0
        },
        {
          "title": "to revise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَاجَعَ يُرَاجِعُ?",
          "options": [
            "مُرَاجَعَةً",
            "إِحْبَابًا",
            "بُلُوْغًا",
            "سُقُوْطًا"
          ],
          "correct": 0
        },
        {
          "title": "to regret",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to regret\"?",
          "options": [
            "نَدِمَ يَنْدَمُ",
            "كَسْلَانُ",
            "نَدَامَةٌ",
            "مُنَافِقٌ"
          ],
          "correct": 0
        },
        {
          "title": "to regret",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَدِمَ يَنْدَمُ mean?",
          "options": [
            "to regret",
            "lazy",
            "regret",
            "hypocrite"
          ],
          "correct": 0
        },
        {
          "title": "to regret (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَدِمَ يَنْدَمُ?",
          "options": [
            "نَدَمًا",
            "أَمْرًا",
            "طُلُوْعًا",
            "مُرَاجَعَةً"
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
            "عَذَابٌ",
            "وَقْتٌ",
            "بَلَغَ يَبْلُغُ"
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
            "punishment",
            "time, appointed time",
            "to reach, to attain"
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
            "بُلُوْغًا",
            "سُقُوْطًا",
            "نَدَمًا"
          ],
          "correct": 0
        },
        {
          "title": "to command",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to command\"?",
          "options": [
            "أَمَرَ يَأْمُرُ",
            "نَدَامَةٌ",
            "مُنَافِقٌ",
            "طَلَعَ يَطْلُعُ"
          ],
          "correct": 0
        },
        {
          "title": "to command",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمَرَ يَأْمُرُ mean?",
          "options": [
            "to command",
            "regret",
            "hypocrite",
            "to rise (of the sun)"
          ],
          "correct": 0
        },
        {
          "title": "to command (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَمَرَ يَأْمُرُ?",
          "options": [
            "أَمْرًا",
            "طُلُوْعًا",
            "مُرَاجَعَةً",
            "إِحْبَابًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l10",
      "title": "الفاء الرابطة وما الصلة",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "فَاءٌ رَابِطَةٌ",
          "lines": [
            {
              "html": "If إِذَا and its مُضَافٌ إِلَيْهِ come at the beginning of the sentence, the particle فَ is usually added to the sentence after it. This is most common when the verb is an أَمْرٌ. The فَ is not translated.",
              "list": false
            },
            {
              "html": "إِذَا سَأَلْتَ فَاسْأَلِ اللهَ — When you (need to) ask anyone, ask Allah.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In tarkib this is labelled فَاءٌ رَابِطَةٌ — the فَاء which joins the مَفْعُوْلٌ فِيْهِ to the rest of the sentence. It carries no meaning of its own; it is a seam, not a word.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِذَا سَأَلْتَ فَاسْأَلِ اللهَ",
                "translation": "When you (need to) ask anyone, ask Allah.",
                "cells": [
                  "إِذَا",
                  "سَأَلْتَ",
                  "فَ",
                  "اسْأَلِ",
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
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
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
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
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
              "html": "Do not confuse this فَ with the فَاءُ الْعَطْفِ. The latter joins two things of equal standing and does mean something — 'and then'. The فَاءٌ رَابِطَةٌ joins an adverbial to the sentence it belongs to, and means nothing at all.",
              "list": false
            },
            {
              "table": {
                "title": "Where the فَاءٌ رَابِطَةٌ Appears",
                "headers": [
                  "Condition",
                  "Example"
                ],
                "rows": [
                  [
                    "إِذَا opens the sentence and the main verb is an أَمْر",
                    "إِذَا عَطَسْتَ فَاحْمَدِ اللهَ"
                  ],
                  [
                    "The main verb is a prohibition",
                    "إِذَا سَمِعْتَ أَحَدًا يَغْتَابُ آخَرَ فَلَا تَجْلِسْ مَعَهُ"
                  ],
                  [
                    "Two إِذَا clauses joined, each with its own فَ",
                    "إِذَا أَكَلْتَ فَسَمِّ اللهَ وَإِذَا فَرَغْتَ فَاحْمَدْهُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is the فَاءٌ رَابِطَةٌ that often follows إِذَا at the start of a sentence؟",
            "kind": "mcq",
            "options": [
              "A seam that links the مَفْعُوْلٌ فِيْهِ to the rest of the sentence, carrying no meaning of its own",
              "A حَرْفُ عَطْفٍ meaning 'and then'",
              "A particle that negates the following verb",
              "The same فَ as فَاءُ السَّبَبِيَّةِ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "مَا الصِّلَةِ",
          "lines": [
            {
              "html": "Sometimes إِذَا is followed by the particle مَا. This is known as مَا الصِّلَةِ — the مَا which creates emphasis but does not affect the grammar.",
              "list": false
            },
            {
              "html": "إِذَا مَا مَرَّ يَوْمٌ ذَهَبَ بَعْضُكَ — When a day passes, a part of you passes.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Everything is parsed as though the مَا were not there. إِذَا is still the مُضَاف, the sentence مَرَّ يَوْمٌ is still its مُضَافٌ إِلَيْهِ, and the whole is still the مَفْعُوْلٌ فِيْهِ. The مَا simply sits between them, adding weight.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِذَا مَا مَرَّ يَوْمٌ ذَهَبَ بَعْضُكَ",
                "translation": "When a day passes, a part of you passes.",
                "cells": [
                  "إِذَا",
                  "مَا",
                  "مَرَّ",
                  "يَوْمٌ",
                  "ذَهَبَ",
                  "بَعْضُكَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 3,
                        "role": "مَفْعُوْلٌ فِيْهِ"
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
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَا الصِّلَةِ"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "مُضَافٌ إِلَيْهِ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "A مَا that neither negates nor asks nor stands for anything is worth flagging as you read. Here it is صِلَة; elsewhere the same letters are a negative particle or a relative pronoun, and the difference is decided by what surrounds it.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What does مَا الصِّلَةِ do when it follows إِذَا؟",
            "kind": "mcq",
            "options": [
              "Adds emphasis without affecting the grammar — everything is parsed as though it weren't there",
              "Turns the following verb into a question",
              "Negates the whole sentence",
              "Replaces the مُضَافٌ إِلَيْهِ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "فَاءٌ رَابِطَةٌ and مَا الصِّلَةِ",
        "rows": [
          {
            "label": "When the فَ appears",
            "arabic": "إِذَا فِيْ أَوَّلِ الْجُمْلَةِ",
            "meaning": "When إِذَا and its مُضَافٌ إِلَيْهِ open the sentence, فَ is usually added to what follows."
          },
          {
            "label": "Most common with",
            "arabic": "فِعْلُ الْأَمْرِ",
            "meaning": "It is most often seen when the main verb is a command."
          },
          {
            "label": "Its translation",
            "arabic": "لَا تُتَرْجَمُ",
            "meaning": "The فَ is not translated at all."
          },
          {
            "label": "Its label",
            "arabic": "فَاءٌ رَابِطَةٌ",
            "meaning": "The فَاء which joins the مَفْعُوْلٌ فِيْهِ to the rest of the sentence — a seam, not a word."
          },
          {
            "label": "مَا الصِّلَةِ",
            "arabic": "إِذَا مَا مَرَّ يَوْمٌ ذَهَبَ بَعْضُكَ",
            "meaning": "إِذَا is sometimes followed by مَا, which creates emphasis but does not affect the grammar."
          },
          {
            "label": "Parsing with مَا",
            "arabic": "كَأَنَّهَا لَيْسَتْ مَوْجُوْدَةً",
            "meaning": "Parse as though it were absent: إِذَا is still the مُضَاف and the sentence after it still the مُضَافٌ إِلَيْهِ."
          }
        ]
      },
      "quiz": [
        {
          "q": "When is the فَاءٌ رَابِطَةٌ usually added?",
          "options": [
            "When إِذَا comes at the end of the sentence",
            "When إِذَا and its مُضَافٌ إِلَيْهِ come at the beginning of the sentence",
            "Whenever a مَاضٍ verb is used",
            "Only in questions"
          ],
          "correct": 1,
          "explanation": "The فَ marks the seam between the fronted adverbial and the rest of the sentence."
        },
        {
          "q": "With which kind of main verb is the فَاءٌ رَابِطَةٌ most common?",
          "options": [
            "فِعْلٌ أَمْرٌ",
            "فِعْلٌ مَاضٍ",
            "فِعْلٌ مَجْهُوْلٌ",
            "فِعْلٌ نَاقِصٌ"
          ],
          "correct": 0,
          "explanation": "إِذَا عَطَسْتَ فَاحْمَدِ اللهَ, إِذَا سَأَلْتَ فَاسْأَلِ اللهَ — commands throughout."
        },
        {
          "q": "How is the فَاءٌ رَابِطَةٌ translated?",
          "options": [
            "'and then'",
            "'so'",
            "'because'",
            "It is not translated"
          ],
          "correct": 3,
          "explanation": "It has a grammatical job but no meaning of its own."
        },
        {
          "q": "What does مَا الصِّلَةِ do to the grammar of the sentence?",
          "options": [
            "Nothing — it only creates emphasis",
            "It negates the sentence",
            "It makes the verb مَنْصُوْب",
            "It turns إِذَا into a question word"
          ],
          "correct": 0,
          "explanation": "Parse the sentence exactly as though the مَا were absent."
        },
        {
          "q": "In إِذَا مَا مَرَّ يَوْمٌ ذَهَبَ بَعْضُكَ, what is the مُضَافٌ إِلَيْهِ of إِذَا?",
          "options": [
            "مَا",
            "مَا مَرَّ",
            "مَرَّ يَوْمٌ",
            "ذَهَبَ بَعْضُكَ"
          ],
          "correct": 2,
          "explanation": "The sentence after the مَا fills the slot; the مَا itself takes no role."
        },
        {
          "q": "What distinguishes a فَاءٌ رَابِطَةٌ from a فَاءُ الْعَطْفِ?",
          "options": [
            "The رَابِطَة joins two equal items and means 'and then'",
            "The رَابِطَة joins an adverbial to its sentence and means nothing",
            "The رَابِطَة always precedes a noun",
            "There is no difference"
          ],
          "correct": 1,
          "explanation": "The عَطْف فَاء joins equals and carries meaning; the رَابِطَة only marks a seam."
        }
      ],
      "bank": [
        {
          "title": "إِذَا سَأَلْتَ فَاسْأَلِ اللهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 451 (Section 1, Part 6)",
          "sentence": "إِذَا سَأَلْتَ فَاسْأَلِ اللهَ",
          "translation": "When you (need to) ask anyone, ask Allah.",
          "cells": [
            "إِذَا",
            "سَأَلْتَ",
            "فَ",
            "اسْأَلِ",
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
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
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
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
            "حَرْفُ عَطْفٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِذَا مَا مَرَّ يَوْمٌ ذَهَبَ بَعْضُكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 451 (Section 1, Part 6)",
          "sentence": "إِذَا مَا مَرَّ يَوْمٌ ذَهَبَ بَعْضُكَ",
          "translation": "When a day passes, a part of you passes.",
          "cells": [
            "إِذَا",
            "مَا",
            "مَرَّ",
            "يَوْمٌ",
            "ذَهَبَ",
            "بَعْضُكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَا الصِّلَةِ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَرْفُ نَفْيٍ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِذَا عَطَسْتَ فَاحْمَدِ اللهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا عَطَسْتَ فَاحْمَدِ اللهَ",
          "translation": "When you sneeze, praise Allah.",
          "cells": [
            "إِذَا",
            "عَطَسْتَ",
            "فَ",
            "احْمَدِ",
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا اسْتَعَنْتَ فَاسْتَعِنْ بِاللهِ",
          "translation": "When you seek help, seek help from Allah.",
          "cells": [
            "إِذَا",
            "اسْتَعَنْتَ",
            "فَ",
            "اسْتَعِنْ",
            "بِاللهِ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوْا لَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوْا لَهُ",
          "translation": "And when the Qur'an is recited, listen to it.",
          "cells": [
            "وَ",
            "إِذَا",
            "قُرِئَ",
            "الْقُرْآنُ",
            "فَ",
            "اسْتَمِعُوْا",
            "لَهُ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 6,
                  "end": 6,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَائِبُ فَاعِلٍ"
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
          "title": "إِذَا أَكَلْتَ فَسَمِّ اللهَ وَإِذَا فَرَغْتَ فَاحْمَدْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا أَكَلْتَ فَسَمِّ اللهَ وَإِذَا فَرَغْتَ فَاحْمَدْهُ",
          "translation": "When you eat, mention Allah's name, and when you finish, praise Him.",
          "cells": [
            "إِذَا",
            "أَكَلْتَ",
            "فَ",
            "سَمِّ",
            "اللهَ",
            "وَ",
            "إِذَا",
            "فَرَغْتَ",
            "فَ",
            "احْمَدْهُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ) وَمَفْعُوْلٌ بِهِ (هُ)"
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
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا نِمْتَ عَنِ الصَّلَاةِ فَصَلِّهَا إِذَا اسْتَيْقَظْتَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا نِمْتَ عَنِ الصَّلَاةِ فَصَلِّهَا إِذَا اسْتَيْقَظْتَ",
          "translation": "When you sleep through the prayer, pray it when you wake up.",
          "cells": [
            "إِذَا",
            "نِمْتَ",
            "عَنِ الصَّلَاةِ",
            "فَ",
            "صَلِّهَا",
            "إِذَا",
            "اسْتَيْقَظْتَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ) وَمَفْعُوْلٌ بِهِ (هَا)"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ) ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِذَا جَلَسْتَ فِي الدَّرْسِ فَاسْتَمِعْ إِلَى الْمُعَلِّمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا جَلَسْتَ فِي الدَّرْسِ فَاسْتَمِعْ إِلَى الْمُعَلِّمِ",
          "translation": "When you sit in the lesson, listen to the teacher.",
          "cells": [
            "إِذَا",
            "جَلَسْتَ",
            "فِي الدَّرْسِ",
            "فَ",
            "اسْتَمِعْ",
            "إِلَى الْمُعَلِّمِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "إِذَا سَمِعْتَ أَحَدًا يَغْتَابُ آخَرَ فَلَا تَجْلِسْ مَعَهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا سَمِعْتَ أَحَدًا يَغْتَابُ آخَرَ فَلَا تَجْلِسْ مَعَهُ",
          "translation": "When you hear someone backbiting another, do not sit with him.",
          "cells": [
            "إِذَا",
            "سَمِعْتَ",
            "أَحَدًا",
            "يَغْتَابُ",
            "آخَرَ",
            "فَ",
            "لَا",
            "تَجْلِسْ",
            "مَعَهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ نَهْيٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "حَرْفُ نَفْيٍ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا رَأَيْتَ أَحَدًا يَظْلِمُ النَّاسَ فَاغْسِلْ يَدَكَ مِنْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا رَأَيْتَ أَحَدًا يَظْلِمُ النَّاسَ فَاغْسِلْ يَدَكَ مِنْهُ",
          "translation": "When you see someone wronging people, wash your hand of him.",
          "cells": [
            "إِذَا",
            "رَأَيْتَ",
            "أَحَدًا",
            "يَظْلِمُ",
            "النَّاسَ",
            "فَ",
            "اغْسِلْ",
            "يَدَكَ",
            "مِنْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
                  "end": 4,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "حَرْفُ عَطْفٍ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِذَا أَرَدْتَ تِلَاوَةَ الْقُرْآنِ فَتَوَضَّأْ وَاسْتَقْبِلِ الْقِبْلَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "إِذَا أَرَدْتَ تِلَاوَةَ الْقُرْآنِ فَتَوَضَّأْ وَاسْتَقْبِلِ الْقِبْلَةَ",
          "translation": "When you intend to recite the Qur'an, perform wudu and face the qiblah.",
          "cells": [
            "إِذَا",
            "أَرَدْتَ",
            "تِلَاوَةَ",
            "الْقُرْآنِ",
            "فَ",
            "تَوَضَّأْ",
            "وَ",
            "اسْتَقْبِلِ",
            "الْقِبْلَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ) ثَانٍ"
                },
                {
                  "start": 8,
                  "end": 8,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 3,
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 6)",
          "sentence": "فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ",
          "translation": "So when you recite the Qur'an, seek refuge with Allah from the accursed devil.",
          "cells": [
            "فَ",
            "إِذَا",
            "قَرَأْتَ",
            "الْقُرْآنَ",
            "فَ",
            "اسْتَعِذْ",
            "بِاللهِ",
            "مِنَ",
            "الشَّيْطَانِ",
            "الرَّجِيْمِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "رَابِطَةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 7,
                  "end": 9,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ ثَانٍ"
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
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
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
                  "start": 7,
                  "end": 7,
                  "role": "جَارٌّ"
                },
                {
                  "start": 8,
                  "end": 9,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 8,
                  "end": 8,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In ﴿وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ﴾, why is الْقُرْآنُ مَرْفُوْع?",
          "options": [
            "It is the فَاعِل of قُرِئَ",
            "It is the نَائِبُ فَاعِلٍ, since قُرِئَ is مَجْهُوْل",
            "It is a مُبْتَدَأ",
            "It is the مُضَافٌ إِلَيْهِ of إِذَا on its own"
          ],
          "correct": 1,
          "explanation": "No reciter is named; the thing recited steps into the subject slot."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا أَكَلْتَ فَسَمِّ اللهَ وَإِذَا فَرَغْتَ فَاحْمَدْهُ, how many فَاءٌ رَابِطَةٌ are there?",
          "options": [
            "None",
            "One",
            "Two",
            "Three"
          ],
          "correct": 2,
          "explanation": "Each إِذَا clause brings its own — فَسَمِّ and فَاحْمَدْهُ."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا سَمِعْتَ أَحَدًا يَغْتَابُ آخَرَ فَلَا تَجْلِسْ مَعَهُ, what is يَغْتَابُ آخَرَ?",
          "options": [
            "A نَعْت of أَحَدًا",
            "A حَال of أَحَدًا",
            "A second مَفْعُوْلٌ بِهِ",
            "The مُضَافٌ إِلَيْهِ of إِذَا"
          ],
          "correct": 1,
          "explanation": "A مُضَارِع sentence after an indefinite noun would be a نَعْت, but after a heard-and-witnessed object it describes the state — the pattern of Part 3."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا سَمِعْتَ أَحَدًا يَغْتَابُ آخَرَ فَلَا تَجْلِسْ مَعَهُ, what is لَا?",
          "options": [
            "A حَرْفُ نَفْيٍ",
            "A حَرْفُ نَهْيٍ, since تَجْلِسْ is مَجْزُوْم",
            "Part of the فَاءٌ رَابِطَةٌ",
            "A حَرْفُ عَطْفٍ"
          ],
          "correct": 1,
          "explanation": "'Do not sit' — the سُكُون on تَجْلِسْ shows the prohibition."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا نِمْتَ عَنِ الصَّلَاةِ فَصَلِّهَا إِذَا اسْتَيْقَظْتَ, how many إِذَا phrases are there and what are their slots?",
          "options": [
            "One, a مَفْعُوْلٌ فِيْهِ",
            "Two, both مَفْعُوْلٌ فِيْهِ",
            "Two, one مَفْعُوْلٌ فِيْهِ and one مَفْعُوْلٌ بِهِ",
            "Two, one مَفْعُوْلٌ فِيْهِ and one بَدَل"
          ],
          "correct": 1,
          "explanation": "The first sets the condition, the second the moment of making it up — both adverbials of time."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In إِذَا أَرَدْتَ تِلَاوَةَ الْقُرْآنِ فَتَوَضَّأْ وَاسْتَقْبِلِ الْقِبْلَةَ, what joins the two commands?",
          "options": [
            "A second فَاءٌ رَابِطَةٌ",
            "A وَاوُ الْعَطْفِ",
            "A وَاوٌ حَالِيَّةٌ",
            "Nothing — they are separate sentences"
          ],
          "correct": 1,
          "explanation": "One فَ is enough for the seam; the وَ then joins the second command to the first."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In ﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ﴾, what are the two فَاء particles doing?",
          "options": [
            "Both are رَابِطَة",
            "Both are عَطْف",
            "The first joins this āyah to what precedes; the second is the رَابِطَة",
            "The first is رَابِطَة; the second is عَطْف"
          ],
          "correct": 2,
          "explanation": "The opening فَ links the verse to the passage before it; the فَ before اسْتَعِذْ marks the seam after the fronted adverbial."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In ﴿فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللهِ مِنَ الشَّيْطَانِ الرَّجِيْمِ﴾, what is الرَّجِيْمِ?",
          "options": [
            "A بَدَل of الشَّيْطَانِ",
            "A نَعْت of الشَّيْطَانِ",
            "A حَال",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "It follows its noun in definiteness and case, describing rather than restating it."
        },
        {
          "title": "qiblah, prayer direction",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"qiblah, prayer direction\"?",
          "options": [
            "قِبْلَةٌ",
            "شَيْطَانٌ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "فَرَغَ يَفْرُغُ"
          ],
          "correct": 0
        },
        {
          "title": "qiblah, prayer direction",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِبْلَةٌ mean?",
          "options": [
            "qiblah, prayer direction",
            "devil",
            "to seek help",
            "to finish"
          ],
          "correct": 0
        },
        {
          "title": "qiblah, prayer direction (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قِبْلَةٌ?",
          "options": [
            "قِبَلٌ",
            "شَيَاطِيْنُ",
            "تِلَاوَاتٌ",
            "أَيْدٍ"
          ],
          "correct": 0
        },
        {
          "title": "recitation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"recitation\"?",
          "options": [
            "تِلَاوَةٌ",
            "بَعْضٌ",
            "سَمَّى يُسَمِّيْ",
            "نَامَ يَنَامُ"
          ],
          "correct": 0
        },
        {
          "title": "recitation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تِلَاوَةٌ mean?",
          "options": [
            "recitation",
            "part, portion",
            "to mention Allah's name",
            "to sleep"
          ],
          "correct": 0
        },
        {
          "title": "recitation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تِلَاوَةٌ?",
          "options": [
            "تِلَاوَاتٌ",
            "أَبْعَاضٌ",
            "أَيْدٍ",
            "قِبَلٌ"
          ],
          "correct": 0
        },
        {
          "title": "hand",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hand\"?",
          "options": [
            "يَدٌ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "فَرَغَ يَفْرُغُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ"
          ],
          "correct": 0
        },
        {
          "title": "hand",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَدٌ mean?",
          "options": [
            "hand",
            "to seek help",
            "to finish",
            "to wake up"
          ],
          "correct": 0
        },
        {
          "title": "hand (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of يَدٌ?",
          "options": [
            "أَيْدٍ",
            "قِبَلٌ",
            "شَيَاطِيْنُ",
            "تِلَاوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "devil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"devil\"?",
          "options": [
            "شَيْطَانٌ",
            "سَمَّى يُسَمِّيْ",
            "نَامَ يَنَامُ",
            "اِغْتَابَ يَغْتَابُ"
          ],
          "correct": 0
        },
        {
          "title": "devil",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَيْطَانٌ mean?",
          "options": [
            "devil",
            "to mention Allah's name",
            "to sleep",
            "to backbite"
          ],
          "correct": 0
        },
        {
          "title": "devil (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَيْطَانٌ?",
          "options": [
            "شَيَاطِيْنُ",
            "تِلَاوَاتٌ",
            "أَبْعَاضٌ",
            "قِبَلٌ"
          ],
          "correct": 0
        },
        {
          "title": "part, portion",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"part, portion\"?",
          "options": [
            "بَعْضٌ",
            "فَرَغَ يَفْرُغُ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "غَسَلَ يَغْسِلُ"
          ],
          "correct": 0
        },
        {
          "title": "part, portion",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعْضٌ mean?",
          "options": [
            "part, portion",
            "to finish",
            "to wake up",
            "to wash"
          ],
          "correct": 0
        },
        {
          "title": "part, portion (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَعْضٌ?",
          "options": [
            "أَبْعَاضٌ",
            "أَيْدٍ",
            "قِبَلٌ",
            "تِلَاوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to seek help",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to seek help\"?",
          "options": [
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "نَامَ يَنَامُ",
            "اِغْتَابَ يَغْتَابُ",
            "أَرَادَ يُرِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "to seek help",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَعَانَ يَسْتَعِيْنُ mean?",
          "options": [
            "to seek help",
            "to sleep",
            "to backbite",
            "to want, to intend"
          ],
          "correct": 0
        },
        {
          "title": "to seek help (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَعَانَ يَسْتَعِيْنُ?",
          "options": [
            "اِسْتِعَانَةً",
            "وُضُوْءًا",
            "تَسْمِيَةً",
            "نَوْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to mention Allah's name",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to mention Allah's name\"?",
          "options": [
            "سَمَّى يُسَمِّيْ",
            "اِسْتَيْقَظَ يَسْتَيْقِظُ",
            "غَسَلَ يَغْسِلُ",
            "تَوَضَّأَ يَتَوَضَّأُ"
          ],
          "correct": 0
        },
        {
          "title": "to mention Allah's name",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمَّى يُسَمِّيْ mean?",
          "options": [
            "to mention Allah's name",
            "to wake up",
            "to wash",
            "to perform wudu"
          ],
          "correct": 0
        },
        {
          "title": "to mention Allah's name (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَمَّى يُسَمِّيْ?",
          "options": [
            "تَسْمِيَةً",
            "حَمْدًا",
            "فَرَاغًا",
            "اِسْتِيْقَاظًا"
          ],
          "correct": 0
        },
        {
          "title": "to finish",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to finish\"?",
          "options": [
            "فَرَغَ يَفْرُغُ",
            "اِغْتَابَ يَغْتَابُ",
            "أَرَادَ يُرِيْدُ",
            "حَمِدَ يَحْمَدُ"
          ],
          "correct": 0
        },
        {
          "title": "to finish",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَرَغَ يَفْرُغُ mean?",
          "options": [
            "to finish",
            "to backbite",
            "to want, to intend",
            "to praise"
          ],
          "correct": 0
        },
        {
          "title": "to finish (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَرَغَ يَفْرُغُ?",
          "options": [
            "فَرَاغًا",
            "اِسْتِعَانَةً",
            "نَوْمًا",
            "اِغْتِيَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to sleep",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sleep\"?",
          "options": [
            "نَامَ يَنَامُ",
            "غَسَلَ يَغْسِلُ",
            "تَوَضَّأَ يَتَوَضَّأُ",
            "قِبْلَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to sleep",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَامَ يَنَامُ mean?",
          "options": [
            "to sleep",
            "to wash",
            "to perform wudu",
            "qiblah, prayer direction"
          ],
          "correct": 0
        },
        {
          "title": "to sleep (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَامَ يَنَامُ?",
          "options": [
            "نَوْمًا",
            "تَسْمِيَةً",
            "اِسْتِيْقَاظًا",
            "غَسْلًا"
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
            "أَرَادَ يُرِيْدُ",
            "حَمِدَ يَحْمَدُ",
            "تِلَاوَةٌ"
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
            "to want, to intend",
            "to praise",
            "recitation"
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
            "فَرَاغًا",
            "اِغْتِيَابًا",
            "إِرَادَةً"
          ],
          "correct": 0
        },
        {
          "title": "to backbite",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to backbite\"?",
          "options": [
            "اِغْتَابَ يَغْتَابُ",
            "تَوَضَّأَ يَتَوَضَّأُ",
            "قِبْلَةٌ",
            "يَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to backbite",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِغْتَابَ يَغْتَابُ mean?",
          "options": [
            "to backbite",
            "to perform wudu",
            "qiblah, prayer direction",
            "hand"
          ],
          "correct": 0
        },
        {
          "title": "to backbite (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِغْتَابَ يَغْتَابُ?",
          "options": [
            "اِغْتِيَابًا",
            "نَوْمًا",
            "غَسْلًا",
            "وُضُوْءًا"
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
            "حَمِدَ يَحْمَدُ",
            "تِلَاوَةٌ",
            "شَيْطَانٌ"
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
            "to praise",
            "recitation",
            "devil"
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
            "اِسْتِيْقَاظًا",
            "إِرَادَةً",
            "حَمْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to want, to intend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to want, to intend\"?",
          "options": [
            "أَرَادَ يُرِيْدُ",
            "قِبْلَةٌ",
            "يَدٌ",
            "بَعْضٌ"
          ],
          "correct": 0
        },
        {
          "title": "to want, to intend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرَادَ يُرِيْدُ mean?",
          "options": [
            "to want, to intend",
            "qiblah, prayer direction",
            "hand",
            "part, portion"
          ],
          "correct": 0
        },
        {
          "title": "to want, to intend (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَرَادَ يُرِيْدُ?",
          "options": [
            "إِرَادَةً",
            "اِغْتِيَابًا",
            "وُضُوْءًا",
            "اِسْتِعَانَةً"
          ],
          "correct": 0
        },
        {
          "title": "to perform wudu",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform wudu\"?",
          "options": [
            "تَوَضَّأَ يَتَوَضَّأُ",
            "تِلَاوَةٌ",
            "شَيْطَانٌ",
            "اِسْتَعَانَ يَسْتَعِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "to perform wudu",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَوَضَّأَ يَتَوَضَّأُ mean?",
          "options": [
            "to perform wudu",
            "recitation",
            "devil",
            "to seek help"
          ],
          "correct": 0
        },
        {
          "title": "to perform wudu (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَوَضَّأَ يَتَوَضَّأُ?",
          "options": [
            "وُضُوْءًا",
            "غَسْلًا",
            "حَمْدًا",
            "تَسْمِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to praise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to praise\"?",
          "options": [
            "حَمِدَ يَحْمَدُ",
            "يَدٌ",
            "بَعْضٌ",
            "سَمَّى يُسَمِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "to praise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَمِدَ يَحْمَدُ mean?",
          "options": [
            "to praise",
            "hand",
            "part, portion",
            "to mention Allah's name"
          ],
          "correct": 0
        },
        {
          "title": "to praise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَمِدَ يَحْمَدُ?",
          "options": [
            "حَمْدًا",
            "إِرَادَةً",
            "اِسْتِعَانَةً",
            "فَرَاغًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l11",
      "title": "إذا الفجائية",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Sentence of Surprise",
          "lines": [
            {
              "html": "A sentence may be followed by another which shows an unexpected event. In English we do it with a word like 'suddenly': 'I left the house one sunny morning, and suddenly, a few hours later it was pouring.'",
              "list": false
            },
            {
              "html": "In Arabic, either of two words creates this meaning: إِذَا الْفُجَائِيَّةُ and إِذْ الْفُجَائِيَّةُ. This lesson takes the first; the next takes the second.",
              "list": false
            },
            {
              "html": "Note carefully that this إِذَا is a different creature from the one in the previous two lessons. That إِذَا was a special adverb, مُضَاف to a following sentence, filling the مَفْعُوْلٌ فِيْهِ slot. This one is neither an adverb nor a مُضَاف. It takes no slot in the sentence at all — it simply announces that what follows was not expected.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does إِذَا الْفُجَائِيَّةُ differ from the special-adverb إِذَا of the previous lessons؟",
            "kind": "mcq",
            "options": [
              "It takes no slot in the sentence at all, rather than being مُضَافٌ to a following sentence as a مَفْعُوْلٌ فِيْهِ",
              "It is مُضَافٌ to an even longer sentence",
              "It only appears with أَمْر verbs",
              "It is simply another spelling of the same word with no difference"
            ],
            "correct": 0
          }
        },
        {
          "heading": "إِذَا الْفُجَائِيَّةُ",
          "lines": [
            {
              "html": "The word إِذَا can be used to show an unexpected or surprising event. It is translated as 'suddenly', 'when suddenly', 'lo and behold', or simply 'when'.",
              "list": false
            },
            {
              "html": "It has two firm requirements: it is preceded by a فَ, and it is followed by a جُمْلَةٌ اسْمِيَّةٌ. The shape is always the same — a sentence, then فَ, then إِذَا, then a nominal sentence.",
              "list": false
            },
            {
              "table": {
                "title": "The Shape",
                "headers": [
                  "First",
                  "Then",
                  "Then",
                  "Then"
                ],
                "rows": [
                  [
                    "جُمْلَةٌ",
                    "فَ",
                    "إِذَا",
                    "جُمْلَةٌ اسْمِيَّةٌ"
                  ]
                ]
              }
            },
            {
              "html": "أَلْقَى مُوْسَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ — Musa threw his staff and lo, it was a serpent.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In tarkib the فَ is labelled a حَرْفُ عَطْفٍ, and the إِذَا is labelled إِذَا الْفُجَائِيَّةُ. The sentence after it becomes a new sentence, parsed on its own terms: هِيَ is the مُبْتَدَأ and ثُعْبَانٌ the خَبَر.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَلْقَى مُوْسَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ",
                "translation": "Musa threw his staff and lo, it was a serpent.",
                "cells": [
                  "أَلْقَى",
                  "مُوْسَى",
                  "عَصَاهُ",
                  "فَ",
                  "إِذَا",
                  "هِيَ",
                  "ثُعْبَانٌ"
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
                        "end": 3,
                        "role": "حَرْفُ عَطْفٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "إِذَا الْفُجَائِيَّةُ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 6,
                        "end": 6,
                        "role": "خَبَرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Because the إِذَا takes no slot, there is no green row here — no مُضَاف, no مُضَافٌ إِلَيْهِ. That absence is the quickest way to tell the two إِذَا apart on a diagram.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What two things must always surround إِذَا الْفُجَائِيَّةُ؟",
            "kind": "mcq",
            "options": [
              "A فَ before it, and a جُمْلَةٌ اسْمِيَّةٌ after it",
              "A حَرْفُ نَفْيٍ before it, and a فِعْلٌ مَاضٍ after it",
              "Nothing before it, and a فِعْلٌ أَمْرٍ after it",
              "إِذْ before it, and بَيْنَمَا after it"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Two Notes on the مُبْتَدَأ that Follows",
          "lines": [
            {
              "html": "Note 1. The مُبْتَدَأ after إِذَا الْفُجَائِيَّةُ can be preceded by a حَرْفُ صِلَةٍ of بِ. The بِ adds nothing to the meaning and does not change the parsing — the word after it is still the مُبْتَدَأ.",
              "list": false
            },
            {
              "html": "دَخَلْنَا الْفَصْلَ فَإِذَا بِزَيْدٍ جَالِسٌ — We entered the class and there was Zaid sitting.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "دَخَلْنَا الْفَصْلَ فَإِذَا بِزَيْدٍ جَالِسٌ",
                "translation": "We entered the class and there was Zaid sitting.",
                "cells": [
                  "دَخَلْنَا",
                  "الْفَصْلَ",
                  "فَ",
                  "إِذَا",
                  "بِ",
                  "زَيْدٍ",
                  "جَالِسٌ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَرْفُ عَطْفٍ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "إِذَا الْفُجَائِيَّةُ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "حَرْفُ صِلَةٍ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 6,
                        "end": 6,
                        "role": "خَبَرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Note 2. The مُبْتَدَأ after إِذَا الْفُجَائِيَّةُ can also occur as a نَكِرَةٌ. This is worth flagging, because the ordinary rule is that a مُبْتَدَأ must be مَعْرِفَة. The surprise construction is one of the recognised exceptions.",
              "list": false
            },
            {
              "html": "خَرَجْتُ مِنَ الدُّكَّانِ فَإِذَا طِفْلٌ عِنْدَ الْبَابِ — I came out of the shop and lo, there was a child at the door.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "خَرَجْتُ مِنَ الدُّكَّانِ فَإِذَا طِفْلٌ عِنْدَ الْبَابِ",
                "translation": "I came out of the shop and lo, there was a child at the door.",
                "cells": [
                  "خَرَجْتُ",
                  "مِنَ",
                  "الدُّكَّانِ",
                  "فَ",
                  "إِذَا",
                  "طِفْلٌ",
                  "عِنْدَ",
                  "الْبَابِ"
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
                        "end": 2,
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفُ عَطْفٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "إِذَا الْفُجَائِيَّةُ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 6,
                        "end": 7,
                        "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
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
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 6,
                        "end": 6,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 7,
                        "end": 7,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "The Two إِذَا Compared",
                "headers": [
                  "",
                  "إِذَا the special adverb",
                  "إِذَا الْفُجَائِيَّةُ"
                ],
                "rows": [
                  [
                    "What follows",
                    "A جُمْلَةٌ فِعْلِيَّةٌ",
                    "A جُمْلَةٌ اسْمِيَّةٌ"
                  ],
                  [
                    "What precedes",
                    "Anything, or nothing",
                    "Always a فَ"
                  ],
                  [
                    "Its slot",
                    "مُضَاف — the whole is a مَفْعُوْلٌ فِيْهِ",
                    "No slot at all"
                  ],
                  [
                    "Meaning",
                    "'when' — habitual or future",
                    "'and lo', 'suddenly'"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is unusual about the مُبْتَدَأ after إِذَا الْفُجَائِيَّةُ, compared with the normal rule for a مُبْتَدَأ؟",
            "kind": "mcq",
            "options": [
              "It can be نَكِرَةٌ (indefinite), even though a مُبْتَدَأٌ normally must be مَعْرِفَةٌ",
              "It must always be مَجْرُوْرٌ",
              "It cannot take a خَبَرٌ",
              "It must be a pronoun"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "إِذَا الْفُجَائِيَّةُ",
        "rows": [
          {
            "label": "What it does",
            "arabic": "تُفِيْدُ الْمُفَاجَأَةَ",
            "meaning": "It marks the sentence after it as an unexpected or surprising event."
          },
          {
            "label": "Its translations",
            "arabic": "فَجْأَةً",
            "meaning": "'suddenly', 'when suddenly', 'lo and behold', or simply 'when'."
          },
          {
            "label": "What precedes it",
            "arabic": "فَ",
            "meaning": "It is always preceded by a فَ, labelled a حَرْفُ عَطْفٍ."
          },
          {
            "label": "What follows it",
            "arabic": "جُمْلَةٌ اسْمِيَّةٌ",
            "meaning": "A nominal sentence, which becomes a new sentence and is parsed on its own."
          },
          {
            "label": "Note 1 — the بِ",
            "arabic": "فَإِذَا بِزَيْدٍ جَالِسٌ",
            "meaning": "The مُبْتَدَأ may be preceded by a حَرْفُ صِلَةٍ of بِ, which changes nothing."
          },
          {
            "label": "Note 2 — an indefinite مُبْتَدَأ",
            "arabic": "فَإِذَا طِفْلٌ عِنْدَ الْبَابِ",
            "meaning": "The مُبْتَدَأ after it may be نَكِرَة — one of the recognised exceptions to the usual rule."
          }
        ]
      },
      "quiz": [
        {
          "q": "What does إِذَا الْفُجَائِيَّةُ express?",
          "options": [
            "A habitual action",
            "An unexpected or surprising event",
            "A condition",
            "A negation"
          ],
          "correct": 1,
          "explanation": "'suddenly', 'lo and behold' — the sentence after it was not anticipated."
        },
        {
          "q": "What must precede إِذَا الْفُجَائِيَّةُ?",
          "options": [
            "وَ",
            "فَ",
            "ثُمَّ",
            "Nothing in particular"
          ],
          "correct": 1,
          "explanation": "In tarkib that فَ is labelled a حَرْفُ عَطْفٍ."
        },
        {
          "q": "What kind of sentence must follow إِذَا الْفُجَائِيَّةُ?",
          "options": [
            "A جُمْلَةٌ فِعْلِيَّةٌ with a مَاضٍ verb",
            "A جُمْلَةٌ فِعْلِيَّةٌ with a مُضَارِع verb",
            "Any sentence",
            "A جُمْلَةٌ اسْمِيَّةٌ"
          ],
          "correct": 3,
          "explanation": "This is the clearest formal difference from the adverb إِذَا, which takes a verbal sentence."
        },
        {
          "q": "What slot does إِذَا الْفُجَائِيَّةُ fill in the sentence?",
          "options": [
            "None — it takes no slot",
            "مَفْعُوْلٌ فِيْهِ",
            "مُبْتَدَأٌ",
            "خَبَرٌ"
          ],
          "correct": 0,
          "explanation": "It is not a مُضَاف and has no مُضَافٌ إِلَيْهِ; the sentence after it starts afresh."
        },
        {
          "q": "In دَخَلْنَا الْفَصْلَ فَإِذَا بِزَيْدٍ جَالِسٌ, what is the بِ before زَيْدٍ?",
          "options": [
            "A حَرْفُ جَرٍّ making a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "Part of the word زَيْد",
            "A حَرْفُ صِلَةٍ, which does not change the parsing",
            "A حَرْفُ عَطْفٍ"
          ],
          "correct": 2,
          "explanation": "زَيْدٍ remains the مُبْتَدَأ despite the kasrah."
        },
        {
          "q": "Why is طِفْلٌ acceptable as a مُبْتَدَأ in فَإِذَا طِفْلٌ عِنْدَ الْبَابِ?",
          "options": [
            "Because عِنْدَ الْبَابِ makes it definite",
            "Because a مُبْتَدَأ after إِذَا الْفُجَائِيَّةُ may be نَكِرَة",
            "Because it is مَرْفُوْع",
            "Because the sentence is verbal"
          ],
          "correct": 1,
          "explanation": "The surprise construction is a recognised exception to the rule that a مُبْتَدَأ is مَعْرِفَة."
        }
      ],
      "bank": [
        {
          "title": "أَلْقَى مُوْسَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 452 (Section 1, Part 6)",
          "sentence": "أَلْقَى مُوْسَى عَصَاهُ فَإِذَا هِيَ ثُعْبَانٌ",
          "translation": "Musa threw his staff and lo, it was a serpent.",
          "cells": [
            "أَلْقَى",
            "مُوْسَى",
            "عَصَاهُ",
            "فَ",
            "إِذَا",
            "هِيَ",
            "ثُعْبَانٌ"
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
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "دَخَلْنَا الْفَصْلَ فَإِذَا بِزَيْدٍ جَالِسٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 453, Note 1 (Section 1, Part 6)",
          "sentence": "دَخَلْنَا الْفَصْلَ فَإِذَا بِزَيْدٍ جَالِسٌ",
          "translation": "We entered the class and there was Zaid sitting.",
          "cells": [
            "دَخَلْنَا",
            "الْفَصْلَ",
            "فَ",
            "إِذَا",
            "بِ",
            "زَيْدٍ",
            "جَالِسٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ صِلَةٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ جَرٍّ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "خَرَجْتُ مِنَ الدُّكَّانِ فَإِذَا طِفْلٌ عِنْدَ الْبَابِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 453, Note 2 (Section 1, Part 6)",
          "sentence": "خَرَجْتُ مِنَ الدُّكَّانِ فَإِذَا طِفْلٌ عِنْدَ الْبَابِ",
          "translation": "I came out of the shop and lo, there was a child at the door.",
          "cells": [
            "خَرَجْتُ",
            "مِنَ",
            "الدُّكَّانِ",
            "فَ",
            "إِذَا",
            "طِفْلٌ",
            "عِنْدَ",
            "الْبَابِ"
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
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
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
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "أَبَوَاكَ يُرَبِّيَانِكَ صَغِيْرًا وَيُحْسِنَانِ إِلَيْكَ فَإِذَا أَنْتَ تَعُقُّهُمَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 6)",
          "sentence": "أَبَوَاكَ يُرَبِّيَانِكَ صَغِيْرًا وَيُحْسِنَانِ إِلَيْكَ فَإِذَا أَنْتَ تَعُقُّهُمَا",
          "translation": "Your parents raise you when you are small and are good to you, and then suddenly you are undutiful to them.",
          "cells": [
            "أَبَوَاكَ",
            "يُرَبِّيَانِكَ",
            "صَغِيْرًا",
            "وَ",
            "يُحْسِنَانِ",
            "إِلَيْكَ",
            "فَ",
            "إِذَا",
            "أَنْتَ",
            "تَعُقُّهُمَا"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مُبْتَدَأٌ ثَانٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "خَبَرٌ ثَانٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَلِفُ الِاثْنَيْنِ) وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَالٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَلِفُ الِاثْنَيْنِ)"
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
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كُنَّا نَمْشِيْ فِي الْحَدِيْقَةِ إِذْ نَظَرْنَا إِلَى السَّمَاءِ فَإِذَا الْهِلَالُ أَمَامَنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 6)",
          "sentence": "كُنَّا نَمْشِيْ فِي الْحَدِيْقَةِ إِذْ نَظَرْنَا إِلَى السَّمَاءِ فَإِذَا الْهِلَالُ أَمَامَنَا",
          "translation": "We were walking in the garden when we looked at the sky, and lo, the crescent was in front of us.",
          "cells": [
            "كُنَّا",
            "نَمْشِيْ",
            "فِي الْحَدِيْقَةِ",
            "إِذْ",
            "نَظَرْنَا",
            "إِلَى السَّمَاءِ",
            "فَ",
            "إِذَا",
            "الْهِلَالُ",
            "أَمَامَنَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (نَا)"
                },
                {
                  "start": 1,
                  "end": 5,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 9,
                  "end": 9,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "الْبَارِحَةَ كُنْتُ أَجْلِسُ أَكْتُبُ دُرُوْسِيْ وَأَحْفَظُهَا فَإِذَا دَمٌ يَسِيْلُ عَلَى أُصْبُعِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 6)",
          "sentence": "الْبَارِحَةَ كُنْتُ أَجْلِسُ أَكْتُبُ دُرُوْسِيْ وَأَحْفَظُهَا فَإِذَا دَمٌ يَسِيْلُ عَلَى أُصْبُعِيْ",
          "translation": "Last night I was sitting writing my lessons and memorising them, and suddenly blood was flowing on my finger.",
          "cells": [
            "الْبَارِحَةَ",
            "كُنْتُ",
            "أَجْلِسُ",
            "أَكْتُبُ",
            "دُرُوْسِيْ",
            "وَ",
            "أَحْفَظُهَا",
            "فَ",
            "إِذَا",
            "دَمٌ",
            "يَسِيْلُ عَلَى أُصْبُعِيْ"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُ)"
                },
                {
                  "start": 2,
                  "end": 6,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 10,
                  "end": 10,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 3,
                  "end": 6,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا) وَمَفْعُوْلٌ بِهِ (هَا)"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "لَقَدْ أَرْسَلَ اللهُ إِلَى ثَمُوْدَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللهَ فَإِذَا هُمْ يَكْفُرُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 6)",
          "sentence": "لَقَدْ أَرْسَلَ اللهُ إِلَى ثَمُوْدَ أَخَاهُمْ صَالِحًا أَنِ اعْبُدُوا اللهَ فَإِذَا هُمْ يَكْفُرُوْنَ",
          "translation": "Allah sent to Thamud their brother Salih ؑ, saying: Worship Allah — and lo, they were disbelieving.",
          "cells": [
            "لَقَدْ",
            "أَرْسَلَ",
            "اللهُ",
            "إِلَى ثَمُوْدَ",
            "أَخَاهُمْ",
            "صَالِحًا",
            "أَنِ",
            "اعْبُدُوا اللهَ",
            "فَ",
            "إِذَا",
            "هُمْ",
            "يَكْفُرُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ تَحْقِيْقٍ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "بَدَلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ تَفْسِيْرٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "جُمْلَةٌ تَفْسِيْرِيَّةٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 11,
                  "end": 11,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "جَاءَ الْكَافِرِيْنَ رُسُلُهُمْ بِآيَاتٍ بَيِّنَاتٍ مِنَ اللهِ فَإِذَا هُمْ مِنَ الْآيَاتِ يَضْحَكُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 6)",
          "sentence": "جَاءَ الْكَافِرِيْنَ رُسُلُهُمْ بِآيَاتٍ بَيِّنَاتٍ مِنَ اللهِ فَإِذَا هُمْ مِنَ الْآيَاتِ يَضْحَكُوْنَ",
          "translation": "Their messengers came to the disbelievers with clear signs from Allah, and lo, they were laughing at the signs.",
          "cells": [
            "جَاءَ",
            "الْكَافِرِيْنَ",
            "رُسُلُهُمْ",
            "بِآيَاتٍ",
            "بَيِّنَاتٍ",
            "مِنَ اللهِ",
            "فَ",
            "إِذَا",
            "هُمْ",
            "مِنَ الْآيَاتِ",
            "يَضْحَكُوْنَ"
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
                  "end": 2,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "نَعْتٌ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 9,
                  "end": 10,
                  "role": "خَبَرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 9,
                  "end": 9,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كَانُوْا يُخْرِجُوْنَ الْمَاءَ مِنَ الْبِئْرِ كُلَّ يَوْمٍ فَذَهَبُوْا إِلَيْهَا يَوْمًا فَإِذَا هِيَ يَابِسَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 6)",
          "sentence": "كَانُوْا يُخْرِجُوْنَ الْمَاءَ مِنَ الْبِئْرِ كُلَّ يَوْمٍ فَذَهَبُوْا إِلَيْهَا يَوْمًا فَإِذَا هِيَ يَابِسَةٌ",
          "translation": "They used to draw water from the well every day, then they went to it one day, and lo, it was dry.",
          "cells": [
            "كَانُوْا",
            "يُخْرِجُوْنَ",
            "الْمَاءَ",
            "مِنَ الْبِئْرِ",
            "كُلَّ يَوْمٍ",
            "فَ",
            "ذَهَبُوْا",
            "إِلَيْهَا",
            "يَوْمًا",
            "فَ",
            "إِذَا",
            "هِيَ",
            "يَابِسَةٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 11,
                  "end": 11,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 12,
                  "end": 12,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَمْسِ ذَهَبَ التَّاجِرُ إِلَى السُّوْقِ وَفَتَحَ بَابَ دُكَّانِهِ وَدَخَلَهُ فَإِذَا الْأَشْيَاءُ كُلُّهَا عَلَى الْأَرْضِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 6)",
          "sentence": "أَمْسِ ذَهَبَ التَّاجِرُ إِلَى السُّوْقِ وَفَتَحَ بَابَ دُكَّانِهِ وَدَخَلَهُ فَإِذَا الْأَشْيَاءُ كُلُّهَا عَلَى الْأَرْضِ",
          "translation": "Yesterday the merchant went to the market, opened the door of his shop and entered it, and lo, all the things were on the ground.",
          "cells": [
            "أَمْسِ",
            "ذَهَبَ",
            "التَّاجِرُ",
            "إِلَى السُّوْقِ",
            "وَ",
            "فَتَحَ",
            "بَابَ",
            "دُكَّانِهِ",
            "وَ",
            "دَخَلَهُ",
            "فَ",
            "إِذَا",
            "الْأَشْيَاءُ",
            "كُلُّهَا",
            "عَلَى الْأَرْضِ"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 11,
                  "end": 11,
                  "role": "إِذَا الْفُجَائِيَّةُ"
                },
                {
                  "start": 12,
                  "end": 12,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 13,
                  "end": 13,
                  "role": "تَأْكِيْدٌ"
                },
                {
                  "start": 14,
                  "end": 14,
                  "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In أَبَوَاكَ يُرَبِّيَانِكَ صَغِيْرًا وَيُحْسِنَانِ إِلَيْكَ فَإِذَا أَنْتَ تَعُقُّهُمَا, what is صَغِيْرًا?",
          "options": [
            "A نَعْت of أَبَوَاكَ",
            "A حَال of the attached كَ",
            "A تَمْيِيْز",
            "A second مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "'They raise you while you are small' — it describes the state of the one being raised."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُنَّا نَمْشِيْ فِي الْحَدِيْقَةِ إِذْ نَظَرْنَا إِلَى السَّمَاءِ فَإِذَا الْهِلَالُ أَمَامَنَا, how do the إِذْ and the إِذَا differ?",
          "options": [
            "They are the same word spelt two ways",
            "إِذْ is the special adverb; إِذَا here is الْفُجَائِيَّةُ",
            "إِذْ is الْفُجَائِيَّةُ; إِذَا is the adverb",
            "Both are الْفُجَائِيَّةُ"
          ],
          "correct": 1,
          "explanation": "إِذْ is مُضَاف to نَظَرْنَا إِلَى السَّمَاءِ; the إِذَا after the فَ takes no slot and introduces the surprise."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In الْبَارِحَةَ كُنْتُ أَجْلِسُ أَكْتُبُ دُرُوْسِيْ … فَإِذَا دَمٌ يَسِيْلُ عَلَى أُصْبُعِيْ, what is دَمٌ?",
          "options": [
            "An indefinite مُبْتَدَأ",
            "The فَاعِل of يَسِيْلُ",
            "A تَمْيِيْز",
            "The خَبَر"
          ],
          "correct": 0,
          "explanation": "Note 2 in action — the مُبْتَدَأ after إِذَا الْفُجَائِيَّةُ may be نَكِرَة, and يَسِيْلُ عَلَى أُصْبُعِيْ is its خَبَر."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَقَدْ أَرْسَلَ اللهُ إِلَى ثَمُوْدَ أَخَاهُمْ صَالِحًا …, what is صَالِحًا?",
          "options": [
            "A نَعْت of أَخَاهُمْ",
            "A حَال",
            "A بَدَل of أَخَاهُمْ",
            "A second مَفْعُوْلٌ بِهِ"
          ],
          "correct": 2,
          "explanation": "It names the brother just referred to and matches him in case."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In جَاءَ الْكَافِرِيْنَ رُسُلُهُمْ بِآيَاتٍ بَيِّنَاتٍ, which word is the فَاعِل of جَاءَ?",
          "options": [
            "الْكَافِرِيْنَ",
            "رُسُلُهُمْ",
            "آيَاتٍ",
            "بَيِّنَاتٍ"
          ],
          "correct": 1,
          "explanation": "الْكَافِرِيْنَ is مَنْصُوْب — the object — and the messengers are the ones who came."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانُوا يُخْرِجُوْنَ الْمَاءَ مِنَ الْبِئْرِ كُلَّ يَوْمٍ … فَإِذَا هِيَ يَابِسَةٌ, what does the كَانَ + مُضَارِع convey?",
          "options": [
            "A single past act",
            "A habitual past — 'they used to draw water'",
            "A future promise",
            "A command"
          ],
          "correct": 1,
          "explanation": "The habit is exactly what makes the dry well a surprise when they arrive."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In أَمْسِ ذَهَبَ التَّاجِرُ … فَإِذَا الْأَشْيَاءُ كُلُّهَا عَلَى الْأَرْضِ, what is كُلُّهَا?",
          "options": [
            "The خَبَر of الْأَشْيَاءُ",
            "A بَدَل of الْأَشْيَاءُ",
            "The تَأْكِيْد of الْأَشْيَاءُ",
            "A حَال"
          ],
          "correct": 2,
          "explanation": "It follows the مُبْتَدَأ in case and stresses that nothing was left in place; عَلَى الْأَرْضِ is the خَبَر."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Why is a فَ always needed before إِذَا الْفُجَائِيَّةُ?",
          "options": [
            "Because it makes the following verb مَنْصُوْب",
            "Because it joins the surprise sentence to the sentence that set the scene",
            "Because إِذَا cannot begin a word",
            "Because it negates the sentence"
          ],
          "correct": 1,
          "explanation": "The surprise only lands if there is something to be surprised against, and the فَ ties the two together."
        },
        {
          "title": "staff, stick",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"staff, stick\"?",
          "options": [
            "عَصًا",
            "بِئْرٌ",
            "صَوْتٌ",
            "ثَمَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "staff, stick",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَصًا mean?",
          "options": [
            "staff, stick",
            "well",
            "sound, voice",
            "fruit"
          ],
          "correct": 0
        },
        {
          "title": "staff, stick (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَصًا?",
          "options": [
            "عِصِيٌّ",
            "آبَارٌ",
            "أَصْوَاتٌ",
            "أَثْمَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "serpent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"serpent\"?",
          "options": [
            "ثُعْبَانٌ",
            "دَمٌ",
            "تَاجِرٌ",
            "رُمَّانَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "serpent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ثُعْبَانٌ mean?",
          "options": [
            "serpent",
            "blood",
            "merchant",
            "pomegranate"
          ],
          "correct": 0
        },
        {
          "title": "serpent (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ثُعْبَانٌ?",
          "options": [
            "ثَعَابِيْنُ",
            "دِمَاءٌ",
            "تُجَّارٌ",
            "رُمَّانَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "shop",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"shop\"?",
          "options": [
            "دُكَّانٌ",
            "صَوْتٌ",
            "ثَمَرٌ",
            "الْبَارِحَةَ"
          ],
          "correct": 0
        },
        {
          "title": "shop",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دُكَّانٌ mean?",
          "options": [
            "shop",
            "sound, voice",
            "fruit",
            "last night"
          ],
          "correct": 0
        },
        {
          "title": "shop (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دُكَّانٌ?",
          "options": [
            "دَكَاكِيْنُ",
            "أَصْوَاتٌ",
            "أَثْمَارٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "well",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"well\"?",
          "options": [
            "بِئْرٌ",
            "تَاجِرٌ",
            "رُمَّانَةٌ",
            "يَابِسٌ"
          ],
          "correct": 0
        },
        {
          "title": "well",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بِئْرٌ mean?",
          "options": [
            "well",
            "merchant",
            "pomegranate",
            "dry"
          ],
          "correct": 0
        },
        {
          "title": "well (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بِئْرٌ?",
          "options": [
            "آبَارٌ",
            "تُجَّارٌ",
            "رُمَّانَاتٌ",
            "يَابِسُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "blood",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"blood\"?",
          "options": [
            "دَمٌ",
            "ثَمَرٌ",
            "الْبَارِحَةَ",
            "أَلْقَى يُلْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "blood",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَمٌ mean?",
          "options": [
            "blood",
            "fruit",
            "last night",
            "to throw"
          ],
          "correct": 0
        },
        {
          "title": "blood (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَمٌ?",
          "options": [
            "دِمَاءٌ",
            "أَثْمَارٌ",
            "—",
            "عِصِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "sound, voice",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sound, voice\"?",
          "options": [
            "صَوْتٌ",
            "رُمَّانَةٌ",
            "يَابِسٌ",
            "رَبَّى يُرَبِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "sound, voice",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَوْتٌ mean?",
          "options": [
            "sound, voice",
            "pomegranate",
            "dry",
            "to raise, to bring up"
          ],
          "correct": 0
        },
        {
          "title": "sound, voice (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَوْتٌ?",
          "options": [
            "أَصْوَاتٌ",
            "رُمَّانَاتٌ",
            "يَابِسُوْنَ",
            "ثَعَابِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "merchant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"merchant\"?",
          "options": [
            "تَاجِرٌ",
            "الْبَارِحَةَ",
            "أَلْقَى يُلْقِيْ",
            "أَحْسَنَ يُحْسِنُ"
          ],
          "correct": 0
        },
        {
          "title": "merchant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَاجِرٌ mean?",
          "options": [
            "merchant",
            "last night",
            "to throw",
            "to be good to"
          ],
          "correct": 0
        },
        {
          "title": "merchant (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَاجِرٌ?",
          "options": [
            "تُجَّارٌ",
            "—",
            "عِصِيٌّ",
            "دَكَاكِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "fruit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"fruit\"?",
          "options": [
            "ثَمَرٌ",
            "يَابِسٌ",
            "رَبَّى يُرَبِّيْ",
            "عَقَّ يَعُقُّ"
          ],
          "correct": 0
        },
        {
          "title": "fruit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ثَمَرٌ mean?",
          "options": [
            "fruit",
            "dry",
            "to raise, to bring up",
            "to be undutiful to a parent"
          ],
          "correct": 0
        },
        {
          "title": "fruit (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ثَمَرٌ?",
          "options": [
            "أَثْمَارٌ",
            "يَابِسُوْنَ",
            "ثَعَابِيْنُ",
            "آبَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "pomegranate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pomegranate\"?",
          "options": [
            "رُمَّانَةٌ",
            "أَلْقَى يُلْقِيْ",
            "أَحْسَنَ يُحْسِنُ",
            "سَالَ يَسِيْلُ"
          ],
          "correct": 0
        },
        {
          "title": "pomegranate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رُمَّانَةٌ mean?",
          "options": [
            "pomegranate",
            "to throw",
            "to be good to",
            "to flow"
          ],
          "correct": 0
        },
        {
          "title": "pomegranate (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رُمَّانَةٌ?",
          "options": [
            "رُمَّانَاتٌ",
            "عِصِيٌّ",
            "دَكَاكِيْنُ",
            "دِمَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "last night",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"last night\"?",
          "options": [
            "الْبَارِحَةَ",
            "رَبَّى يُرَبِّيْ",
            "عَقَّ يَعُقُّ",
            "أَسْرَعَ يُسْرِعُ"
          ],
          "correct": 0
        },
        {
          "title": "last night",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does الْبَارِحَةَ mean?",
          "options": [
            "last night",
            "to raise, to bring up",
            "to be undutiful to a parent",
            "to hurry"
          ],
          "correct": 0
        },
        {
          "title": "last night (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of الْبَارِحَةَ?",
          "options": [
            "—",
            "ثَعَابِيْنُ",
            "آبَارٌ",
            "أَصْوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "dry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"dry\"?",
          "options": [
            "يَابِسٌ",
            "أَحْسَنَ يُحْسِنُ",
            "سَالَ يَسِيْلُ",
            "سَخَّرَ يُسَخِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "dry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَابِسٌ mean?",
          "options": [
            "dry",
            "to be good to",
            "to flow",
            "to subject, to make subservient"
          ],
          "correct": 0
        },
        {
          "title": "dry (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of يَابِسٌ?",
          "options": [
            "يَابِسُوْنَ",
            "دَكَاكِيْنُ",
            "دِمَاءٌ",
            "تُجَّارٌ"
          ],
          "correct": 0
        },
        {
          "title": "to throw",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to throw\"?",
          "options": [
            "أَلْقَى يُلْقِيْ",
            "عَقَّ يَعُقُّ",
            "أَسْرَعَ يُسْرِعُ",
            "عَصَى يَعْصِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to throw",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَلْقَى يُلْقِيْ mean?",
          "options": [
            "to throw",
            "to be undutiful to a parent",
            "to hurry",
            "to disobey"
          ],
          "correct": 0
        },
        {
          "title": "to throw (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَلْقَى يُلْقِيْ?",
          "options": [
            "إِلْقَاءً",
            "عِصْيَانًا",
            "إِحْسَانًا",
            "سَيَلَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to raise, to bring up",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to raise, to bring up\"?",
          "options": [
            "رَبَّى يُرَبِّيْ",
            "سَالَ يَسِيْلُ",
            "سَخَّرَ يُسَخِّرُ",
            "عَصًا"
          ],
          "correct": 0
        },
        {
          "title": "to raise, to bring up",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَبَّى يُرَبِّيْ mean?",
          "options": [
            "to raise, to bring up",
            "to flow",
            "to subject, to make subservient",
            "staff, stick"
          ],
          "correct": 0
        },
        {
          "title": "to raise, to bring up (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَبَّى يُرَبِّيْ?",
          "options": [
            "تَرْبِيَةً",
            "إِلْقَاءً",
            "عُقُوْقًا",
            "إِسْرَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to be good to",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be good to\"?",
          "options": [
            "أَحْسَنَ يُحْسِنُ",
            "أَسْرَعَ يُسْرِعُ",
            "عَصَى يَعْصِيْ",
            "ثُعْبَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be good to",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْسَنَ يُحْسِنُ mean?",
          "options": [
            "to be good to",
            "to hurry",
            "to disobey",
            "serpent"
          ],
          "correct": 0
        },
        {
          "title": "to be good to (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحْسَنَ يُحْسِنُ?",
          "options": [
            "إِحْسَانًا",
            "تَرْبِيَةً",
            "سَيَلَانًا",
            "تَسْخِيْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to be undutiful to a parent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be undutiful to a parent\"?",
          "options": [
            "عَقَّ يَعُقُّ",
            "سَخَّرَ يُسَخِّرُ",
            "عَصًا",
            "دُكَّانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be undutiful to a parent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقَّ يَعُقُّ mean?",
          "options": [
            "to be undutiful to a parent",
            "to subject, to make subservient",
            "staff, stick",
            "shop"
          ],
          "correct": 0
        },
        {
          "title": "to be undutiful to a parent (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَقَّ يَعُقُّ?",
          "options": [
            "عُقُوْقًا",
            "إِحْسَانًا",
            "إِسْرَاعًا",
            "عِصْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to flow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to flow\"?",
          "options": [
            "سَالَ يَسِيْلُ",
            "عَصَى يَعْصِيْ",
            "ثُعْبَانٌ",
            "بِئْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to flow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَالَ يَسِيْلُ mean?",
          "options": [
            "to flow",
            "to disobey",
            "serpent",
            "well"
          ],
          "correct": 0
        },
        {
          "title": "to flow (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَالَ يَسِيْلُ?",
          "options": [
            "سَيَلَانًا",
            "عُقُوْقًا",
            "تَسْخِيْرًا",
            "إِلْقَاءً"
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
            "عَصًا",
            "دُكَّانٌ",
            "دَمٌ"
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
            "staff, stick",
            "shop",
            "blood"
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
            "سَيَلَانًا",
            "عِصْيَانًا",
            "تَرْبِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to subject, to make subservient",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to subject, to make subservient\"?",
          "options": [
            "سَخَّرَ يُسَخِّرُ",
            "ثُعْبَانٌ",
            "بِئْرٌ",
            "صَوْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to subject, to make subservient",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَخَّرَ يُسَخِّرُ mean?",
          "options": [
            "to subject, to make subservient",
            "serpent",
            "well",
            "sound, voice"
          ],
          "correct": 0
        },
        {
          "title": "to subject, to make subservient (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَخَّرَ يُسَخِّرُ?",
          "options": [
            "تَسْخِيْرًا",
            "إِسْرَاعًا",
            "إِلْقَاءً",
            "إِحْسَانًا"
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
            "دُكَّانٌ",
            "دَمٌ",
            "تَاجِرٌ"
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
            "shop",
            "blood",
            "merchant"
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
            "تَسْخِيْرًا",
            "تَرْبِيَةً",
            "عُقُوْقًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l12",
      "title": "إذ الفجائية",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "Like إِذَا, the word إِذْ can also be used to show an unexpected event. But it comes with its own frame: it is preceded by a sentence with the adverb بَيْنَمَا, 'whilst', which is itself followed by a جُمْلَةٌ اسْمِيَّةٌ.",
              "list": false
            },
            {
              "table": {
                "title": "The Shape",
                "headers": [
                  "First",
                  "Then",
                  "Then",
                  "Then"
                ],
                "rows": [
                  [
                    "بَيْنَمَا",
                    "جُمْلَةٌ اسْمِيَّةٌ",
                    "إِذْ",
                    "جُمْلَةٌ"
                  ]
                ]
              }
            },
            {
              "html": "So بَيْنَمَا is the مُضَاف and the nominal sentence after it is its مُضَافٌ إِلَيْهِ — the two together making the مَفْعُوْلٌ فِيْهِ that sets the scene. Then إِذْ arrives, taking no slot at all, and the sentence after it delivers the surprise.",
              "list": false
            },
            {
              "html": "بَيْنَمَا نَحْنُ نَسْمَعُ الدَّرْسَ إِذْ سَمِعْنَا صَوْتًا — Whilst we were listening to the lesson, we suddenly heard a sound.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The book gives a second rendering of the same sentence: 'We were listening to the lesson when we suddenly heard a sound.' Either works — the first fronts the 'whilst', the second keeps the English word order natural.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "بَيْنَمَا نَحْنُ نَسْمَعُ الدَّرْسَ إِذْ سَمِعْنَا صَوْتًا",
                "translation": "Whilst we were listening to the lesson, we suddenly heard a sound.",
                "cells": [
                  "بَيْنَمَا",
                  "نَحْنُ",
                  "نَسْمَعُ",
                  "الدَّرْسَ",
                  "إِذْ",
                  "سَمِعْنَا",
                  "صَوْتًا"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 3,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "إِذْ الْفُجَائِيَّةُ"
                      },
                      {
                        "start": 5,
                        "end": 5,
                        "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
                        "start": 1,
                        "end": 1,
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 2,
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
                        "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
                        "start": 0,
                        "end": 0,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 1,
                        "end": 3,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Read the diagram outward from بَيْنَمَا: it is the مُضَاف, the nominal sentence نَحْنُ نَسْمَعُ الدَّرْسَ is its مُضَافٌ إِلَيْهِ, and inside that sentence نَحْنُ is the مُبْتَدَأ with the verbal sentence نَسْمَعُ الدَّرْسَ as its خَبَر. Three levels in one phrase.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What frame surrounds إِذْ الْفُجَائِيَّةُ؟",
            "kind": "mcq",
            "options": [
              "بَيْنَمَا followed by a جُمْلَةٌ اسْمِيَّةٌ, then إِذْ, then the surprising sentence",
              "A فَ before it and a جملة اسمية after it, exactly like إِذَا الْفُجَائِيَّةُ",
              "It stands completely alone with nothing before or after it",
              "إِنَّ before it and a خبر after it"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The Two Constructions of Surprise Side by Side",
          "lines": [
            {
              "html": "Both إِذَا الْفُجَائِيَّةُ and إِذْ الْفُجَائِيَّةُ mark an unexpected turn, but they are mirror images of each other in almost every detail.",
              "list": false
            },
            {
              "table": {
                "title": "إِذَا الْفُجَائِيَّةُ against إِذْ الْفُجَائِيَّةُ",
                "headers": [
                  "",
                  "إِذَا الْفُجَائِيَّةُ",
                  "إِذْ الْفُجَائِيَّةُ"
                ],
                "rows": [
                  [
                    "What precedes it",
                    "A sentence, then a فَ",
                    "بَيْنَمَا + a جُمْلَةٌ اسْمِيَّةٌ"
                  ],
                  [
                    "What follows it",
                    "A جُمْلَةٌ اسْمِيَّةٌ",
                    "A جُمْلَة, usually verbal"
                  ],
                  [
                    "The nominal sentence",
                    "Comes after the particle",
                    "Comes before it, after بَيْنَمَا"
                  ],
                  [
                    "Its own slot",
                    "None",
                    "None"
                  ]
                ]
              }
            },
            {
              "html": "Notice what the two share: neither particle takes a slot in the tarkeeb. That is what 'الْفُجَائِيَّة' means in practice — the word does a job of meaning without doing a job of grammar.",
              "list": false
            },
            {
              "html": "Do not confuse this إِذْ with the special adverb إِذْ of Lesson 15. The adverb is مُضَاف to the sentence that follows it and the whole is a مَفْعُوْلٌ فِيْهِ. This one is preceded by بَيْنَمَا and holds no slot. The presence of بَيْنَمَا is the giveaway.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What do إِذَا الْفُجَائِيَّةُ and إِذْ الْفُجَائِيَّةُ have in common؟",
            "kind": "mcq",
            "options": [
              "Neither particle takes a slot in the tarkeeb",
              "Both require a فِعْلٌ مَاضٍ immediately after them",
              "Both are مُضَافٌ to the sentence that follows",
              "Both can only appear at the very start of a passage"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "إِذْ الْفُجَائِيَّةُ",
        "rows": [
          {
            "label": "What it does",
            "arabic": "تُفِيْدُ الْمُفَاجَأَةَ",
            "meaning": "Like إِذَا الْفُجَائِيَّةُ, it marks what follows as unexpected."
          },
          {
            "label": "Its frame",
            "arabic": "بَيْنَمَا + جُمْلَةٌ اسْمِيَّةٌ + إِذْ + جُمْلَةٌ",
            "meaning": "It is always preceded by a بَيْنَمَا clause whose content is a nominal sentence."
          },
          {
            "label": "بَيْنَمَا",
            "arabic": "بَيْنَمَا = whilst",
            "meaning": "It is the مُضَاف; the nominal sentence after it is the مُضَافٌ إِلَيْهِ, and the two are the مَفْعُوْلٌ فِيْهِ."
          },
          {
            "label": "The book's example",
            "arabic": "بَيْنَمَا نَحْنُ نَسْمَعُ الدَّرْسَ إِذْ سَمِعْنَا صَوْتًا",
            "meaning": "'Whilst we were listening to the lesson, we suddenly heard a sound.'"
          },
          {
            "label": "Its own slot",
            "arabic": "لَا مَحَلَّ لَهَا",
            "meaning": "إِذْ الْفُجَائِيَّةُ takes no slot; the sentence after it is parsed on its own."
          },
          {
            "label": "Against the adverb إِذْ",
            "arabic": "وُجُوْدُ بَيْنَمَا",
            "meaning": "The adverb إِذْ is مُضَاف to what follows; this one is preceded by بَيْنَمَا and governs nothing."
          }
        ]
      },
      "quiz": [
        {
          "q": "What must precede إِذْ الْفُجَائِيَّةُ?",
          "options": [
            "A فَ",
            "A sentence with the adverb بَيْنَمَا",
            "A حَرْفُ عَطْفٍ",
            "Nothing in particular"
          ],
          "correct": 1,
          "explanation": "The بَيْنَمَا clause sets the scene that the surprise interrupts."
        },
        {
          "q": "What follows بَيْنَمَا?",
          "options": [
            "A جُمْلَةٌ اسْمِيَّةٌ",
            "A جُمْلَةٌ فِعْلِيَّةٌ with a مَاضٍ verb",
            "A single noun",
            "Nothing — إِذْ comes straight after it"
          ],
          "correct": 0,
          "explanation": "بَيْنَمَا نَحْنُ نَسْمَعُ الدَّرْسَ — نَحْنُ is the مُبْتَدَأ and the verbal sentence its خَبَر."
        },
        {
          "q": "How is بَيْنَمَا translated?",
          "options": [
            "'suddenly'",
            "'since'",
            "'whenever'",
            "'whilst'"
          ],
          "correct": 3,
          "explanation": "It marks the ongoing situation that gets interrupted."
        },
        {
          "q": "In بَيْنَمَا نَحْنُ نَسْمَعُ الدَّرْسَ إِذْ سَمِعْنَا صَوْتًا, what is the مُضَافٌ إِلَيْهِ of بَيْنَمَا?",
          "options": [
            "نَحْنُ alone",
            "نَسْمَعُ الدَّرْسَ alone",
            "The whole nominal sentence نَحْنُ نَسْمَعُ الدَّرْسَ",
            "سَمِعْنَا صَوْتًا"
          ],
          "correct": 2,
          "explanation": "The nested sentence fills the slot; its own مُبْتَدَأ and خَبَر are parsed a row below."
        },
        {
          "q": "What slot does إِذْ الْفُجَائِيَّةُ itself occupy?",
          "options": [
            "None",
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ",
            "مُضَافٌ"
          ],
          "correct": 0,
          "explanation": "Both particles of surprise do a job of meaning without doing a job of grammar."
        },
        {
          "q": "What is the quickest way to tell this إِذْ from the special adverb إِذْ?",
          "options": [
            "The vowel on the ذ",
            "The presence of بَيْنَمَا before it",
            "Whether the sentence is a question",
            "Its position at the end of the sentence"
          ],
          "correct": 1,
          "explanation": "The adverb إِذْ is مُضَاف to what follows; the الْفُجَائِيَّة one always sits inside a بَيْنَمَا frame."
        }
      ],
      "bank": [
        {
          "title": "بَيْنَمَا نَحْنُ نَسْمَعُ الدَّرْسَ إِذْ سَمِعْنَا صَوْتًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 454 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا نَحْنُ نَسْمَعُ الدَّرْسَ إِذْ سَمِعْنَا صَوْتًا",
          "translation": "Whilst we were listening to the lesson, we suddenly heard a sound.",
          "cells": [
            "بَيْنَمَا",
            "نَحْنُ",
            "نَسْمَعُ",
            "الدَّرْسَ",
            "إِذْ",
            "سَمِعْنَا",
            "صَوْتًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذْ الْفُجَائِيَّةُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
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
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "بَيْنَمَا الْإِمَامُ يَتْلُو الْقُرْآنَ إِذْ بَكَى وَبَكَى النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا الْإِمَامُ يَتْلُو الْقُرْآنَ إِذْ بَكَى وَبَكَى النَّاسُ",
          "translation": "Whilst the imam was reciting the Qur'an, he suddenly wept and the people wept.",
          "cells": [
            "بَيْنَمَا",
            "الْإِمَامُ",
            "يَتْلُو",
            "الْقُرْآنَ",
            "إِذْ",
            "بَكَى",
            "وَ",
            "بَكَى",
            "النَّاسُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذْ الْفُجَائِيَّةُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "فَاعِلٌ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "بَيْنَمَا الْأَوْلَادُ يَلْعَبُوْنَ فِي الْحَدِيْقَةِ إِذْ نَزَلَ الْمَطَرُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا الْأَوْلَادُ يَلْعَبُوْنَ فِي الْحَدِيْقَةِ إِذْ نَزَلَ الْمَطَرُ",
          "translation": "Whilst the children were playing in the garden, the rain suddenly fell.",
          "cells": [
            "بَيْنَمَا",
            "الْأَوْلَادُ",
            "يَلْعَبُوْنَ",
            "فِي الْحَدِيْقَةِ",
            "إِذْ",
            "نَزَلَ",
            "الْمَطَرُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذْ الْفُجَائِيَّةُ"
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
                  "start": 0,
                  "end": 0,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "بَيْنَمَا أَنَا أَسْتَرِيْحُ فِيْ غُرْفَتِيْ إِذْ نَادَتْنِيْ أُمِّيْ أَنِ انْصُرْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا أَنَا أَسْتَرِيْحُ فِيْ غُرْفَتِيْ إِذْ نَادَتْنِيْ أُمِّيْ أَنِ انْصُرْنِيْ",
          "translation": "Whilst I was resting in my room, my mother suddenly called me, saying: Help me.",
          "cells": [
            "بَيْنَمَا",
            "أَنَا",
            "أَسْتَرِيْحُ",
            "فِيْ غُرْفَتِيْ",
            "إِذْ",
            "نَادَتْنِيْ",
            "أُمِّيْ",
            "أَنِ",
            "انْصُرْنِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذْ الْفُجَائِيَّةُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (يْ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "حَرْفُ تَفْسِيْرٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "جُمْلَةٌ تَفْسِيْرِيَّةٌ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "بَيْنَمَا الطُّلَّابُ يُطَالِعُوْنَ كُتُبَهُمْ إِذْ رَأَوْا نَارًا مِنَ الدُّكَّانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا الطُّلَّابُ يُطَالِعُوْنَ كُتُبَهُمْ إِذْ رَأَوْا نَارًا مِنَ الدُّكَّانِ",
          "translation": "Whilst the students were reading their books, they suddenly saw a fire coming from the shop.",
          "cells": [
            "بَيْنَمَا",
            "الطُّلَّابُ",
            "يُطَالِعُوْنَ",
            "كُتُبَهُمْ",
            "إِذْ",
            "رَأَوْا",
            "نَارًا",
            "مِنَ الدُّكَّانِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذْ الْفُجَائِيَّةُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "بَيْنَمَا هَذَا الْوَلَدُ يَضْرِبُ أُخْتَهُ إِذْ دَخَلَ أَبُوْهُمَا وَأُمُّهُمَا الْغُرْفَةَ فَمَنَعَاهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا هَذَا الْوَلَدُ يَضْرِبُ أُخْتَهُ إِذْ دَخَلَ أَبُوْهُمَا وَأُمُّهُمَا الْغُرْفَةَ فَمَنَعَاهُ",
          "translation": "Whilst this boy was hitting his sister, their father and their mother suddenly entered the room and stopped him.",
          "cells": [
            "بَيْنَمَا",
            "هَذَا",
            "الْوَلَدُ",
            "يَضْرِبُ",
            "أُخْتَهُ",
            "إِذْ",
            "دَخَلَ",
            "أَبُوْهُمَا",
            "وَ",
            "أُمُّهُمَا",
            "الْغُرْفَةَ",
            "فَ",
            "مَنَعَاهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "إِذْ الْفُجَائِيَّةُ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 11,
                  "end": 11,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 12,
                  "end": 12,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَلِفُ الِاثْنَيْنِ) وَمَفْعُوْلٌ بِهِ (هُ)"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 2,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "بَدَلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "بَيْنَمَا أَنَا وَفَاطِمَةُ نَتَحَدَّثُ إِذْ غَضِبَتْ عَلَيَّ غَضْبَةً شَدِيْدَةً وَصَاحَتْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا أَنَا وَفَاطِمَةُ نَتَحَدَّثُ إِذْ غَضِبَتْ عَلَيَّ غَضْبَةً شَدِيْدَةً وَصَاحَتْ",
          "translation": "Whilst Fatimah and I were talking, she suddenly became severely angry with me and shouted.",
          "cells": [
            "بَيْنَمَا",
            "أَنَا",
            "وَ",
            "فَاطِمَةُ",
            "نَتَحَدَّثُ",
            "إِذْ",
            "غَضِبَتْ",
            "عَلَيَّ",
            "غَضْبَةً",
            "شَدِيْدَةً",
            "وَ",
            "صَاحَتْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "إِذْ الْفُجَائِيَّةُ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 11,
                  "end": 11,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ) ثَانٍ"
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
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "بَيْنَمَا النَّاسُ فِيْ بُيُوْتِهِمْ وَدَكَاكِيْنِهِمْ وَمَدَارِسِهِمْ إِذْ زُلْزِلَتِ الْأَرْضُ زِلْزَالًا شَدِيْدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا النَّاسُ فِيْ بُيُوْتِهِمْ وَدَكَاكِيْنِهِمْ وَمَدَارِسِهِمْ إِذْ زُلْزِلَتِ الْأَرْضُ زِلْزَالًا شَدِيْدًا",
          "translation": "Whilst the people were in their houses, their shops and their schools, the earth was suddenly shaken a severe shaking.",
          "cells": [
            "بَيْنَمَا",
            "النَّاسُ",
            "فِيْ",
            "بُيُوْتِهِمْ",
            "وَدَكَاكِيْنِهِمْ",
            "وَمَدَارِسِهِمْ",
            "إِذْ",
            "زُلْزِلَتِ",
            "الْأَرْضُ",
            "زِلْزَالًا",
            "شَدِيْدًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "إِذْ الْفُجَائِيَّةُ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "نَائِبُ فَاعِلٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "نَعْتٌ"
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
                },
                {
                  "start": 1,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "بَيْنَمَا النَّاسُ فِيْ ظُلُمَاتِ الْكُفْرِ وَعِبَادَةِ الْأَصْنَامِ إِذْ أَرْسَلَ اللهُ نَبِيًّا فَأَخْرَجَهُمْ مِنْ تِلْكَ الظُّلُمَاتِ إِلَى نُوْرِ الْإِسْلَامِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 6)",
          "sentence": "بَيْنَمَا النَّاسُ فِيْ ظُلُمَاتِ الْكُفْرِ وَعِبَادَةِ الْأَصْنَامِ إِذْ أَرْسَلَ اللهُ نَبِيًّا فَأَخْرَجَهُمْ مِنْ تِلْكَ الظُّلُمَاتِ إِلَى نُوْرِ الْإِسْلَامِ",
          "translation": "Whilst the people were in the darknesses of disbelief and idol-worship, Allah suddenly sent a prophet who brought them out of those darknesses into the light of Islam.",
          "cells": [
            "بَيْنَمَا",
            "النَّاسُ",
            "فِيْ ظُلُمَاتِ الْكُفْرِ",
            "وَعِبَادَةِ الْأَصْنَامِ",
            "إِذْ",
            "أَرْسَلَ",
            "اللهُ",
            "نَبِيًّا",
            "فَ",
            "أَخْرَجَهُمْ",
            "مِنْ تِلْكَ الظُّلُمَاتِ",
            "إِلَى نُوْرِ الْإِسْلَامِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "إِذْ الْفُجَائِيَّةُ"
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
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                },
                {
                  "start": 10,
                  "end": 10,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 11,
                  "end": 11,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ ثَانٍ"
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
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا الْإِمَامُ يَتْلُو الْقُرْآنَ إِذْ بَكَى وَبَكَى النَّاسُ, what is يَتْلُو الْقُرْآنَ?",
          "options": [
            "A حَال of الْإِمَامُ",
            "The خَبَر of الْإِمَامُ",
            "A نَعْت of الْإِمَامُ",
            "The مُضَافٌ إِلَيْهِ of إِذْ"
          ],
          "correct": 1,
          "explanation": "بَيْنَمَا requires a nominal sentence, so الْإِمَامُ is the مُبْتَدَأ and the verbal sentence its خَبَر."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا الْأَوْلَادُ يَلْعَبُوْنَ فِي الْحَدِيْقَةِ إِذْ نَزَلَ الْمَطَرُ, what is الْمَطَرُ?",
          "options": [
            "The مُبْتَدَأ of the second sentence",
            "The فَاعِل of نَزَلَ",
            "A بَدَل of الْأَوْلَادُ",
            "A مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "The surprise sentence after إِذْ is verbal, and the rain is what does the falling."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا هَذَا الْوَلَدُ يَضْرِبُ أُخْتَهُ …, what is الْوَلَدُ?",
          "options": [
            "The خَبَر of هَذَا",
            "A بَدَل of هَذَا",
            "A نَعْت of أُخْتَهُ",
            "The فَاعِل of يَضْرِبُ"
          ],
          "correct": 1,
          "explanation": "هَذَا is the مُبْتَدَأ and الْوَلَدُ names it; the خَبَر is the verbal sentence يَضْرِبُ أُخْتَهُ."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا هَذَا الْوَلَدُ يَضْرِبُ أُخْتَهُ إِذْ دَخَلَ أَبُوْهُمَا وَأُمُّهُمَا الْغُرْفَةَ فَمَنَعَاهُ, what does the أَلِف on فَمَنَعَاهُ tell you?",
          "options": [
            "The verb is مَجْهُوْل",
            "The doers are dual — the father and the mother",
            "The verb is مَنْصُوْب",
            "The object is dual"
          ],
          "correct": 1,
          "explanation": "أَلِفُ الِاثْنَيْنِ refers back to أَبُوْهُمَا وَأُمُّهُمَا; the attached هُ is the boy."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا أَنَا وَفَاطِمَةُ نَتَحَدَّثُ إِذْ غَضِبَتْ عَلَيَّ غَضْبَةً شَدِيْدَةً, what is غَضْبَةً?",
          "options": [
            "A حَال",
            "A تَمْيِيْز",
            "A مَفْعُوْلٌ مُطْلَقٌ",
            "A مَفْعُوْلٌ بِهِ"
          ],
          "correct": 2,
          "explanation": "It is the مَصْدَر of the verb before it, and شَدِيْدَةً is its نَعْت."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا النَّاسُ فِيْ بُيُوْتِهِمْ … إِذْ زُلْزِلَتِ الْأَرْضُ, what is the خَبَر of النَّاسُ?",
          "options": [
            "زُلْزِلَتِ الْأَرْضُ",
            "The جَارّ وَمَجْرُوْر فِيْ بُيُوْتِهِمْ and what is joined to it",
            "إِذْ",
            "There is none"
          ],
          "correct": 1,
          "explanation": "A جَارّ وَمَجْرُوْر can serve as a خَبَر — 'the people were in their houses'."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In بَيْنَمَا النَّاسُ فِيْ ظُلُمَاتِ الْكُفْرِ … إِذْ أَرْسَلَ اللهُ نَبِيًّا فَأَخْرَجَهُمْ …, what does the فَ before أَخْرَجَهُمْ do?",
          "options": [
            "It is a فَاءٌ رَابِطَةٌ",
            "It joins the second verb to the first, marking sequence",
            "It negates the verb",
            "It introduces the surprise"
          ],
          "correct": 1,
          "explanation": "The surprise is already introduced by إِذْ; this فَ is an ordinary حَرْفُ عَطْفٍ."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Why does the بَيْنَمَا clause always contain a nominal sentence rather than a verbal one?",
          "options": [
            "Because بَيْنَمَا cannot precede a verb at all",
            "Because the construction describes an ongoing state that the surprise interrupts",
            "Because verbal sentences cannot be مُضَافٌ إِلَيْهِ",
            "Because بَيْنَمَا is itself a verb"
          ],
          "correct": 1,
          "explanation": "A مُبْتَدَأ with a مُضَارِع خَبَر describes something in progress — exactly the setting a sudden event needs."
        },
        {
          "title": "whilst",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"whilst\"?",
          "options": [
            "بَيْنَمَا",
            "نُوْرٌ",
            "مَدْرَسَةٌ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ"
          ],
          "correct": 0
        },
        {
          "title": "whilst",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَيْنَمَا mean?",
          "options": [
            "whilst",
            "light",
            "school",
            "to rest"
          ],
          "correct": 0
        },
        {
          "title": "whilst (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَيْنَمَا?",
          "options": [
            "—",
            "أَنْوَارٌ",
            "مَدَارِسُ",
            "نِيْرَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "rain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"rain\"?",
          "options": [
            "مَطَرٌ",
            "ظُلْمَةٌ",
            "تَلَا يَتْلُو",
            "طَالَعَ يُطَالِعُ"
          ],
          "correct": 0
        },
        {
          "title": "rain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَطَرٌ mean?",
          "options": [
            "rain",
            "darkness",
            "to recite",
            "to read, to study"
          ],
          "correct": 0
        },
        {
          "title": "rain (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَطَرٌ?",
          "options": [
            "أَمْطَارٌ",
            "ظُلُمَاتٌ",
            "—",
            "أَنْوَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "fire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"fire\"?",
          "options": [
            "نَارٌ",
            "مَدْرَسَةٌ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "نَزَلَ يَنْزِلُ"
          ],
          "correct": 0
        },
        {
          "title": "fire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَارٌ mean?",
          "options": [
            "fire",
            "school",
            "to rest",
            "to descend, to fall"
          ],
          "correct": 0
        },
        {
          "title": "fire (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَارٌ?",
          "options": [
            "نِيْرَانٌ",
            "مَدَارِسُ",
            "أَمْطَارٌ",
            "ظُلُمَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "light",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"light\"?",
          "options": [
            "نُوْرٌ",
            "تَلَا يَتْلُو",
            "طَالَعَ يُطَالِعُ",
            "مَنَعَ يَمْنَعُ"
          ],
          "correct": 0
        },
        {
          "title": "light",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نُوْرٌ mean?",
          "options": [
            "light",
            "to recite",
            "to read, to study",
            "to prevent, to stop"
          ],
          "correct": 0
        },
        {
          "title": "light (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نُوْرٌ?",
          "options": [
            "أَنْوَارٌ",
            "—",
            "نِيْرَانٌ",
            "مَدَارِسُ"
          ],
          "correct": 0
        },
        {
          "title": "darkness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"darkness\"?",
          "options": [
            "ظُلْمَةٌ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "نَزَلَ يَنْزِلُ",
            "صَاحَ يَصِيْحُ"
          ],
          "correct": 0
        },
        {
          "title": "darkness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظُلْمَةٌ mean?",
          "options": [
            "darkness",
            "to rest",
            "to descend, to fall",
            "to shout"
          ],
          "correct": 0
        },
        {
          "title": "darkness (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ظُلْمَةٌ?",
          "options": [
            "ظُلُمَاتٌ",
            "أَمْطَارٌ",
            "أَنْوَارٌ",
            "—"
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
            "طَالَعَ يُطَالِعُ",
            "مَنَعَ يَمْنَعُ",
            "تَحَدَّثَ يَتَحَدَّثُ"
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
            "to read, to study",
            "to prevent, to stop",
            "to speak, to converse"
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
            "نِيْرَانٌ",
            "ظُلُمَاتٌ",
            "أَمْطَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "to recite",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recite\"?",
          "options": [
            "تَلَا يَتْلُو",
            "نَزَلَ يَنْزِلُ",
            "صَاحَ يَصِيْحُ",
            "زَلْزَلَ يُزَلْزِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to recite",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَلَا يَتْلُو mean?",
          "options": [
            "to recite",
            "to descend, to fall",
            "to shout",
            "to shake violently"
          ],
          "correct": 0
        },
        {
          "title": "to recite (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَلَا يَتْلُو?",
          "options": [
            "تِلَاوَةً",
            "مُطَالَعَةً",
            "مَنْعًا",
            "تَحَدُّثًا"
          ],
          "correct": 0
        },
        {
          "title": "to rest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to rest\"?",
          "options": [
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "مَنَعَ يَمْنَعُ",
            "تَحَدَّثَ يَتَحَدَّثُ",
            "بَيْنَمَا"
          ],
          "correct": 0
        },
        {
          "title": "to rest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَرَاحَ يَسْتَرِيْحُ mean?",
          "options": [
            "to rest",
            "to prevent, to stop",
            "to speak, to converse",
            "whilst"
          ],
          "correct": 0
        },
        {
          "title": "to rest (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَرَاحَ يَسْتَرِيْحُ?",
          "options": [
            "اِسْتِرَاحَةً",
            "نُزُوْلًا",
            "صِيَاحًا",
            "زَلْزَلَةً"
          ],
          "correct": 0
        },
        {
          "title": "to read, to study",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to read, to study\"?",
          "options": [
            "طَالَعَ يُطَالِعُ",
            "صَاحَ يَصِيْحُ",
            "زَلْزَلَ يُزَلْزِلُ",
            "مَطَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to read, to study",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَالَعَ يُطَالِعُ mean?",
          "options": [
            "to read, to study",
            "to shout",
            "to shake violently",
            "rain"
          ],
          "correct": 0
        },
        {
          "title": "to read, to study (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَالَعَ يُطَالِعُ?",
          "options": [
            "مُطَالَعَةً",
            "مَنْعًا",
            "تَحَدُّثًا",
            "تِلَاوَةً"
          ],
          "correct": 0
        },
        {
          "title": "to descend, to fall",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to descend, to fall\"?",
          "options": [
            "نَزَلَ يَنْزِلُ",
            "تَحَدَّثَ يَتَحَدَّثُ",
            "بَيْنَمَا",
            "نَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "to descend, to fall",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَزَلَ يَنْزِلُ mean?",
          "options": [
            "to descend, to fall",
            "to speak, to converse",
            "whilst",
            "fire"
          ],
          "correct": 0
        },
        {
          "title": "to descend, to fall (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَزَلَ يَنْزِلُ?",
          "options": [
            "نُزُوْلًا",
            "صِيَاحًا",
            "زَلْزَلَةً",
            "اِسْتِرَاحَةً"
          ],
          "correct": 0
        },
        {
          "title": "to prevent, to stop",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to prevent, to stop\"?",
          "options": [
            "مَنَعَ يَمْنَعُ",
            "زَلْزَلَ يُزَلْزِلُ",
            "مَطَرٌ",
            "نُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to prevent, to stop",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَنَعَ يَمْنَعُ mean?",
          "options": [
            "to prevent, to stop",
            "to shake violently",
            "rain",
            "light"
          ],
          "correct": 0
        },
        {
          "title": "to prevent, to stop (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَنَعَ يَمْنَعُ?",
          "options": [
            "مَنْعًا",
            "تَحَدُّثًا",
            "تِلَاوَةً",
            "مُطَالَعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to shout",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to shout\"?",
          "options": [
            "صَاحَ يَصِيْحُ",
            "بَيْنَمَا",
            "نَارٌ",
            "ظُلْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to shout",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَاحَ يَصِيْحُ mean?",
          "options": [
            "to shout",
            "whilst",
            "fire",
            "darkness"
          ],
          "correct": 0
        },
        {
          "title": "to shout (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَاحَ يَصِيْحُ?",
          "options": [
            "صِيَاحًا",
            "زَلْزَلَةً",
            "اِسْتِرَاحَةً",
            "نُزُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to speak, to converse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to speak, to converse\"?",
          "options": [
            "تَحَدَّثَ يَتَحَدَّثُ",
            "مَطَرٌ",
            "نُوْرٌ",
            "مَدْرَسَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to speak, to converse",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَحَدَّثَ يَتَحَدَّثُ mean?",
          "options": [
            "to speak, to converse",
            "rain",
            "light",
            "school"
          ],
          "correct": 0
        },
        {
          "title": "to speak, to converse (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَحَدَّثَ يَتَحَدَّثُ?",
          "options": [
            "تَحَدُّثًا",
            "تِلَاوَةً",
            "مُطَالَعَةً",
            "مَنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to shake violently",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to shake violently\"?",
          "options": [
            "زَلْزَلَ يُزَلْزِلُ",
            "نَارٌ",
            "ظُلْمَةٌ",
            "تَلَا يَتْلُو"
          ],
          "correct": 0
        },
        {
          "title": "to shake violently",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَلْزَلَ يُزَلْزِلُ mean?",
          "options": [
            "to shake violently",
            "fire",
            "darkness",
            "to recite"
          ],
          "correct": 0
        },
        {
          "title": "to shake violently (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَلْزَلَ يُزَلْزِلُ?",
          "options": [
            "زَلْزَلَةً",
            "اِسْتِرَاحَةً",
            "نُزُوْلًا",
            "صِيَاحًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l13",
      "title": "مذ ومنذ بالجملة",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "Two Adverbs, Two Possibilities",
          "lines": [
            {
              "html": "مُذْ and مُنْذُ are adverbs which can be followed by either of two things: a جُمْلَةٌ فِعْلِيَّةٌ, or a single اِسْم. This lesson takes the first; the second follows in the next lesson.",
              "list": false
            },
            {
              "html": "The two words are interchangeable. مُنْذُ is simply the fuller form of مُذْ, and the book's exercises use them side by side with no difference in meaning.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What two things can مُذْ and مُنْذُ be followed by؟",
            "kind": "mcq",
            "options": [
              "A جُمْلَةٌ فِعْلِيَّةٌ, or a single اِسْمٌ",
              "Only a جُمْلَةٌ اسْمِيَّةٌ",
              "Only a pronoun",
              "Only the name of a day"
            ],
            "correct": 0
          }
        },
        {
          "heading": "مُذْ and مُنْذُ Followed by a جُمْلَةٌ فِعْلِيَّةٌ",
          "lines": [
            {
              "html": "When مُذْ and مُنْذُ are followed by a جُمْلَةٌ فِعْلِيَّةٌ, they become مُضَافٌ. The مُضَافٌ إِلَيْهِ is usually comprised of a فِعْلٌ مَاضٍ, and the sentence before them is usually negative. They are translated as 'since'.",
              "list": false
            },
            {
              "table": {
                "title": "The Shape",
                "headers": [
                  "First",
                  "Then",
                  "Then"
                ],
                "rows": [
                  [
                    "جُمْلَةٌ فِعْلِيَّةٌ — usually negative",
                    "مُذْ / مُنْذُ",
                    "جُمْلَةٌ فِعْلِيَّةٌ (مَاضٍ)"
                  ]
                ]
              }
            },
            {
              "html": "مَا رَأَيْتُهُ مُذْ لَقِيْتُهُ فِيْ بَيْتِكَ — I have not seen him since I met him at your house.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The negative in the main sentence is what makes 'since' natural in English. 'I have not seen him since …' measures a stretch of time in which nothing happened, and مُذْ marks where that stretch begins.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَا رَأَيْتُهُ مُذْ لَقِيْتُهُ فِيْ بَيْتِكَ",
                "translation": "I have not seen him since I met him at your house.",
                "cells": [
                  "مَا",
                  "رَأَيْتُهُ",
                  "مُذْ",
                  "لَقِيْتُهُ",
                  "فِيْ بَيْتِكَ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                      },
                      {
                        "start": 2,
                        "end": 4,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ) ثَانٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The word 'usually' does real work in both conditions. مَا أَكَلَ أَحَدٌ مُنْذُ غَرَبَتِ الشَّمْسُ has the expected negative, but كَانَ الرَّجُلُ حَزِيْنًا مُذْ تُوُفِّيَتْ زَوْجَتُهُ is affirmative and perfectly correct: 'The man has been sad since his wife passed away.'",
              "list": false
            },
            {
              "table": {
                "title": "The Two Negative Particles You Will Meet Here",
                "headers": [
                  "Particle",
                  "What follows",
                  "Example"
                ],
                "rows": [
                  [
                    "مَا",
                    "A فِعْلٌ مَاضٍ, unchanged",
                    "مَا خَدَعْتُ أَحَدًا مُنْذُ وَعَدْتُكَ"
                  ],
                  [
                    "لَمْ",
                    "A فِعْلٌ مُضَارِعٌ made مَجْزُوْم",
                    "لَمْ يَكْذِبْ ذَلِكَ الْوَلَدُ مُذْ زَجَرَهُ وَالِدُهُ"
                  ]
                ]
              }
            },
            {
              "html": "Both give a past negative in English. مَا خَدَعْتُ is 'I have not deceived' and لَمْ يَكْذِبْ is 'he has not lied' — the difference is in the Arabic machinery, not in the meaning.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When مُذْ/مُنْذُ are مُضَافٌ to a جُمْلَةٌ فِعْلِيَّةٌ, what is typically true of the sentence before them؟",
            "kind": "mcq",
            "options": [
              "It is usually negative — which is what makes 'since' natural in English",
              "It is always a command",
              "It must be a جملة اسمية",
              "It must contain كَانَ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "مُذْ and مُنْذُ with a Sentence",
        "rows": [
          {
            "label": "What can follow them",
            "arabic": "جُمْلَةٌ فِعْلِيَّةٌ أَوِ اسْمٌ",
            "meaning": "These two adverbs take either a verbal sentence or a single noun. This lesson covers the sentence."
          },
          {
            "label": "With a sentence",
            "arabic": "يَصِيْرَانِ مُضَافًا",
            "meaning": "They become the مُضَاف, and the sentence after them the مُضَافٌ إِلَيْهِ."
          },
          {
            "label": "The nested verb",
            "arabic": "فِعْلٌ مَاضٍ",
            "meaning": "The مُضَافٌ إِلَيْهِ is usually a sentence with a مَاضٍ verb."
          },
          {
            "label": "The main sentence",
            "arabic": "مَنْفِيَّةٌ عَادَةً",
            "meaning": "The sentence before them is usually negative — with مَا, or with لَمْ over a مُضَارِع."
          },
          {
            "label": "Their meaning",
            "arabic": "مُذْ / مُنْذُ = since",
            "meaning": "They mark the point from which a stretch of time is measured."
          },
          {
            "label": "The book's example",
            "arabic": "مَا رَأَيْتُهُ مُذْ لَقِيْتُهُ فِيْ بَيْتِكَ",
            "meaning": "'I have not seen him since I met him at your house.'"
          }
        ]
      },
      "quiz": [
        {
          "q": "What two things can follow مُذْ and مُنْذُ?",
          "options": [
            "A verb or a particle",
            "A جُمْلَةٌ فِعْلِيَّةٌ or an اِسْم",
            "A جُمْلَةٌ اسْمِيَّةٌ or a pronoun",
            "Only a sentence"
          ],
          "correct": 1,
          "explanation": "مُذْ and مُنْذُ can be followed by either a جُمْلَةٌ فِعْلِيَّةٌ or an اِسْم."
        },
        {
          "q": "When a جُمْلَةٌ فِعْلِيَّةٌ follows them, what do مُذْ and مُنْذُ become?",
          "options": [
            "مُضَافٌ",
            "مُضَافٌ إِلَيْهِ",
            "مَفْعُوْلٌ بِهِ",
            "حَرْفُ جَرٍّ"
          ],
          "correct": 0,
          "explanation": "The sentence after them fills the مُضَافٌ إِلَيْهِ slot, and the whole is a مَفْعُوْلٌ فِيْهِ."
        },
        {
          "q": "What kind of verb does that nested sentence usually contain?",
          "options": [
            "فِعْلٌ مُضَارِعٌ",
            "فِعْلٌ أَمْرٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "فِعْلٌ مَاضٍ"
          ],
          "correct": 3,
          "explanation": "مُذْ لَقِيْتُهُ, مُنْذُ وَعَدْتُكَ, مُذْ تَابَ — all مَاضٍ."
        },
        {
          "q": "What is usually true of the sentence before مُذْ or مُنْذُ?",
          "options": [
            "It is usually negative",
            "It is usually a question",
            "It is always nominal",
            "It always contains كَانَ"
          ],
          "correct": 0,
          "explanation": "'I have not seen him since …' — a stretch of time in which nothing happened."
        },
        {
          "q": "How are مُذْ and مُنْذُ translated?",
          "options": [
            "'when'",
            "'since'",
            "'whilst'",
            "'whenever'"
          ],
          "correct": 1,
          "explanation": "They mark the starting point of a period."
        },
        {
          "q": "Is كَانَ الرَّجُلُ حَزِيْنًا مُذْ تُوُفِّيَتْ زَوْجَتُهُ correct, given that the main sentence is affirmative?",
          "options": [
            "Yes — the negative is usual but not required",
            "No — مُذْ requires a negative",
            "No — كَانَ cannot appear with مُذْ",
            "Yes, but only because of تُوُفِّيَتْ"
          ],
          "correct": 0,
          "explanation": "'The man has been sad since his wife passed away' is a perfectly ordinary sentence."
        }
      ],
      "bank": [
        {
          "title": "مَا رَأَيْتُهُ مُذْ لَقِيْتُهُ فِيْ بَيْتِكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 455 (Section 1, Part 6)",
          "sentence": "مَا رَأَيْتُهُ مُذْ لَقِيْتُهُ فِيْ بَيْتِكَ",
          "translation": "I have not seen him since I met him at your house.",
          "cells": [
            "مَا",
            "رَأَيْتُهُ",
            "مُذْ",
            "لَقِيْتُهُ",
            "فِيْ بَيْتِكَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ) ثَانٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَا خَدَعْتُ أَحَدًا مُنْذُ وَعَدْتُكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "مَا خَدَعْتُ أَحَدًا مُنْذُ وَعَدْتُكَ",
          "translation": "I have not deceived anyone since I promised you.",
          "cells": [
            "مَا",
            "خَدَعْتُ",
            "أَحَدًا",
            "مُنْذُ",
            "وَعَدْتُكَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَا أَكَلَ أَحَدٌ مُنْذُ غَرَبَتِ الشَّمْسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "مَا أَكَلَ أَحَدٌ مُنْذُ غَرَبَتِ الشَّمْسُ",
          "translation": "No one has eaten since the sun set.",
          "cells": [
            "مَا",
            "أَكَلَ",
            "أَحَدٌ",
            "مُنْذُ",
            "غَرَبَتِ",
            "الشَّمْسُ"
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
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
            "مَفْعُوْلٌ بِهِ",
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كَانَ الرَّجُلُ حَزِيْنًا مُذْ تُوُفِّيَتْ زَوْجَتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "كَانَ الرَّجُلُ حَزِيْنًا مُذْ تُوُفِّيَتْ زَوْجَتُهُ",
          "translation": "The man has been sad since his wife passed away.",
          "cells": [
            "كَانَ",
            "الرَّجُلُ",
            "حَزِيْنًا",
            "مُذْ",
            "تُوُفِّيَتْ",
            "زَوْجَتُهُ"
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
                  "role": "خَبَرُ كَانَ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "نَائِبُ فَاعِلٍ"
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
          "title": "لَمْ يَكْذِبْ ذَلِكَ الْوَلَدُ مُذْ زَجَرَهُ وَالِدُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "لَمْ يَكْذِبْ ذَلِكَ الْوَلَدُ مُذْ زَجَرَهُ وَالِدُهُ",
          "translation": "That boy has not lied since his father scolded him.",
          "cells": [
            "لَمْ",
            "يَكْذِبْ",
            "ذَلِكَ",
            "الْوَلَدُ",
            "مُذْ",
            "زَجَرَهُ",
            "وَالِدُهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "بَدَلٌ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا اجْتَمَعَ أَهْلُ أَحْمَدَ مُنْذُ تُوُفِّيَ أَبُوْهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "مَا اجْتَمَعَ أَهْلُ أَحْمَدَ مُنْذُ تُوُفِّيَ أَبُوْهُمْ",
          "translation": "Ahmad's family have not gathered since their father passed away.",
          "cells": [
            "مَا",
            "اجْتَمَعَ",
            "أَهْلُ",
            "أَحْمَدَ",
            "مُنْذُ",
            "تُوُفِّيَ",
            "أَبُوْهُمْ"
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
                  "end": 3,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "نَائِبُ فَاعِلٍ"
                }
              ]
            }
          ],
          "distractors": [
            "تَمْيِيْزٌ",
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَمْ يَشْرَبْ هَذَا الرَّجُلُ خَمْرًا مُذْ تَابَ مِنْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "لَمْ يَشْرَبْ هَذَا الرَّجُلُ خَمْرًا مُذْ تَابَ مِنْهَا",
          "translation": "This man has not drunk wine since he repented from it.",
          "cells": [
            "لَمْ",
            "يَشْرَبْ",
            "هَذَا",
            "الرَّجُلُ",
            "خَمْرًا",
            "مُذْ",
            "تَابَ",
            "مِنْهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "بَدَلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَمْ يَنْسَ الطُّلَّابُ هَذِهِ الْقَاعِدَةَ مُذْ عَلِمُوْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "لَمْ يَنْسَ الطُّلَّابُ هَذِهِ الْقَاعِدَةَ مُذْ عَلِمُوْهَا",
          "translation": "The students have not forgotten this rule since they learnt it.",
          "cells": [
            "لَمْ",
            "يَنْسَ",
            "الطُّلَّابُ",
            "هَذِهِ",
            "الْقَاعِدَةَ",
            "مُذْ",
            "عَلِمُوْهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "بَدَلٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ) وَمَفْعُوْلٌ بِهِ (هَا)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا تَرَكَتْ فَاطِمَةُ صَلَاةً مُذْ بَلَغَتْ عَشْرَ سِنِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "مَا تَرَكَتْ فَاطِمَةُ صَلَاةً مُذْ بَلَغَتْ عَشْرَ سِنِيْنَ",
          "translation": "Fatimah has not left a single prayer since she reached ten years.",
          "cells": [
            "مَا",
            "تَرَكَتْ",
            "فَاطِمَةُ",
            "صَلَاةً",
            "مُذْ",
            "بَلَغَتْ",
            "عَشْرَ",
            "سِنِيْنَ"
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
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَمْ يَتَأَخَّرْ مُصْعَبٌ وَأُخْتُهُ مُذْ زَجَرَتْهُمَا الْمُعَلِّمَةُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "لَمْ يَتَأَخَّرْ مُصْعَبٌ وَأُخْتُهُ مُذْ زَجَرَتْهُمَا الْمُعَلِّمَةُ",
          "translation": "Mus'ab and his sister have not been late since the teacher scolded them.",
          "cells": [
            "لَمْ",
            "يَتَأَخَّرْ",
            "مُصْعَبٌ",
            "وَ",
            "أُخْتُهُ",
            "مُذْ",
            "زَجَرَتْهُمَا",
            "الْمُعَلِّمَةُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَعْطُوْفٌ"
                },
                {
                  "start": 5,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (هُمَا)"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "فَاعِلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَا غَرِقَ أَحَدٌ فِيْ هَذَا النَّهْرِ مُنْذُ نَهَى الْأَمِيْرُ النَّاسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "مَا غَرِقَ أَحَدٌ فِيْ هَذَا النَّهْرِ مُنْذُ نَهَى الْأَمِيْرُ النَّاسَ",
          "translation": "No one has drowned in this river since the leader forbade the people.",
          "cells": [
            "مَا",
            "غَرِقَ",
            "أَحَدٌ",
            "فِيْ",
            "هَذَا",
            "النَّهْرِ",
            "مُنْذُ",
            "نَهَى",
            "الْأَمِيْرُ",
            "النَّاسَ"
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
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 6,
                  "end": 9,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "بَدَلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 9,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 9,
                  "end": 9,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا سَافَرَتْ هَؤُلَاءِ الْبَنَاتُ مُنْذُ مَرِضَ أَخُوْهُنَّ الْكَبِيْرُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "مَا سَافَرَتْ هَؤُلَاءِ الْبَنَاتُ مُنْذُ مَرِضَ أَخُوْهُنَّ الْكَبِيْرُ",
          "translation": "These girls have not travelled since their elder brother fell ill.",
          "cells": [
            "مَا",
            "سَافَرَتْ",
            "هَؤُلَاءِ",
            "الْبَنَاتُ",
            "مُنْذُ",
            "مَرِضَ",
            "أَخُوْهُنَّ",
            "الْكَبِيْرُ"
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
                  "end": 3,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُبْدَلٌ مِنْهُ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "بَدَلٌ"
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
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "لَمْ تَغِبْ آمِنَةُ مِنَ الْمَدْرَسَةِ مُذْ غَابَتْ يَوْمَ تُوُفِّيَ جَدُّهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 1, Part 6)",
          "sentence": "لَمْ تَغِبْ آمِنَةُ مِنَ الْمَدْرَسَةِ مُذْ غَابَتْ يَوْمَ تُوُفِّيَ جَدُّهَا",
          "translation": "Aminah has not been absent from school since she was absent the day her grandfather passed away.",
          "cells": [
            "لَمْ",
            "تَغِبْ",
            "آمِنَةُ",
            "مِنَ الْمَدْرَسَةِ",
            "مُذْ",
            "غَابَتْ",
            "يَوْمَ",
            "تُوُفِّيَ",
            "جَدُّهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                },
                {
                  "start": 6,
                  "end": 8,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 8,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 7,
                  "end": 7,
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 8,
                  "end": 8,
                  "role": "نَائِبُ فَاعِلٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "تَمْيِيْزٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مَا أَكَلَ أَحَدٌ مُنْذُ غَرَبَتِ الشَّمْسُ, how is أَحَدٌ best rendered?",
          "options": [
            "'someone'",
            "'one'",
            "'no one', because of the negative",
            "'each'"
          ],
          "correct": 2,
          "explanation": "أَحَد under a negation carries the sense of 'not anyone at all'."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كَانَ الرَّجُلُ حَزِيْنًا مُذْ تُوُفِّيَتْ زَوْجَتُهُ, why is زَوْجَتُهُ مَرْفُوْع?",
          "options": [
            "It is the فَاعِل of تُوُفِّيَتْ",
            "It is the نَائِبُ فَاعِلٍ, since تُوُفِّيَتْ is مَجْهُوْل",
            "It is the اِسْمُ كَانَ",
            "It is a بَدَل of الرَّجُلُ"
          ],
          "correct": 1,
          "explanation": "تُوُفِّيَ is the مَجْهُوْل of تَوَفَّى — literally 'she was taken'."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمْ يَكْذِبْ ذَلِكَ الْوَلَدُ مُذْ زَجَرَهُ وَالِدُهُ, what is الْوَلَدُ?",
          "options": [
            "The فَاعِل of يَكْذِبْ on its own",
            "A بَدَل of ذَلِكَ, the two together being the فَاعِل",
            "The مُضَافٌ إِلَيْهِ of مُذْ",
            "A نَعْت of وَالِدُهُ"
          ],
          "correct": 1,
          "explanation": "The demonstrative and the noun it names together fill the subject slot."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مَا تَرَكَتْ فَاطِمَةُ صَلَاةً مُذْ بَلَغَتْ عَشْرَ سِنِيْنَ, what is سِنِيْنَ?",
          "options": [
            "A تَمْيِيْز of عَشْرَ",
            "The مُضَافٌ إِلَيْهِ of عَشْرَ",
            "A بَدَل of صَلَاةً",
            "A حَال"
          ],
          "correct": 1,
          "explanation": "Numbers three to ten are مُضَاف to their counted noun, which is plural and مَجْرُوْر."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمْ يَتَأَخَّرْ مُصْعَبٌ وَأُخْتُهُ مُذْ زَجَرَتْهُمَا الْمُعَلِّمَةُ, who did the scolding?",
          "options": [
            "مُصْعَبٌ",
            "أُخْتُهُ",
            "الْمُعَلِّمَةُ",
            "The attached هُمَا"
          ],
          "correct": 2,
          "explanation": "الْمُعَلِّمَةُ is مَرْفُوْع and so is the doer; the هُمَا is the pair scolded."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمْ يَشْرَبْ هَذَا الرَّجُلُ خَمْرًا مُذْ تَابَ مِنْهَا, what does the هَا in مِنْهَا refer to?",
          "options": [
            "الرَّجُلُ",
            "خَمْرًا",
            "مُذْ",
            "The whole sentence"
          ],
          "correct": 1,
          "explanation": "خَمْر is feminine, and the man repented from it — that is what he stopped drinking."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مَا غَرِقَ أَحَدٌ فِيْ هَذَا النَّهْرِ مُنْذُ نَهَى الْأَمِيْرُ النَّاسَ, what is النَّهْرِ?",
          "options": [
            "A بَدَل of هَذَا, inside the جَارّ وَمَجْرُوْر",
            "The فَاعِل of غَرِقَ",
            "The مُضَافٌ إِلَيْهِ of مُنْذُ",
            "A تَمْيِيْز"
          ],
          "correct": 0,
          "explanation": "The demonstrative هَذَا is the مَجْرُوْر, and النَّهْرِ names it and shares its case."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمْ تَغِبْ آمِنَةُ مِنَ الْمَدْرَسَةِ مُذْ غَابَتْ يَوْمَ تُوُفِّيَ جَدُّهَا, how many مَفْعُوْلٌ فِيْهِ are nested inside one another?",
          "options": [
            "None",
            "One",
            "Two",
            "Three"
          ],
          "correct": 2,
          "explanation": "مُذْ غَابَتْ … is one, and يَوْمَ تُوُفِّيَ جَدُّهَا sits inside it as a second."
        },
        {
          "title": "wine",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wine\"?",
          "options": [
            "خَمْرٌ",
            "أَمِيْرٌ",
            "وَعَدَ يَعِدُ",
            "تَرَكَ يَتْرُكُ"
          ],
          "correct": 0
        },
        {
          "title": "wine",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَمْرٌ mean?",
          "options": [
            "wine",
            "leader, commander",
            "to promise",
            "to leave, to abandon"
          ],
          "correct": 0
        },
        {
          "title": "wine (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَمْرٌ?",
          "options": [
            "خُمُوْرٌ",
            "أُمَرَاءُ",
            "أَنْهَارٌ",
            "قَوَاعِدُ"
          ],
          "correct": 0
        },
        {
          "title": "rule, principle",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"rule, principle\"?",
          "options": [
            "قَاعِدَةٌ",
            "خَدَعَ يَخْدَعُ",
            "كَذَبَ يَكْذِبُ",
            "غَرِقَ يَغْرَقُ"
          ],
          "correct": 0
        },
        {
          "title": "rule, principle",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَاعِدَةٌ mean?",
          "options": [
            "rule, principle",
            "to deceive",
            "to lie",
            "to drown"
          ],
          "correct": 0
        },
        {
          "title": "rule, principle (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَاعِدَةٌ?",
          "options": [
            "قَوَاعِدُ",
            "خُمُوْرٌ",
            "أُمَرَاءُ",
            "أَنْهَارٌ"
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
            "وَعَدَ يَعِدُ",
            "تَرَكَ يَتْرُكُ",
            "نَهَى يَنْهَى"
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
            "to promise",
            "to leave, to abandon",
            "to forbid"
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
            "قَوَاعِدُ",
            "خُمُوْرٌ",
            "أُمَرَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "leader, commander",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"leader, commander\"?",
          "options": [
            "أَمِيْرٌ",
            "كَذَبَ يَكْذِبُ",
            "غَرِقَ يَغْرَقُ",
            "غَابَ يَغِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "leader, commander",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمِيْرٌ mean?",
          "options": [
            "leader, commander",
            "to lie",
            "to drown",
            "to be absent"
          ],
          "correct": 0
        },
        {
          "title": "leader, commander (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَمِيْرٌ?",
          "options": [
            "أُمَرَاءُ",
            "أَنْهَارٌ",
            "قَوَاعِدُ",
            "خُمُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to deceive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deceive\"?",
          "options": [
            "خَدَعَ يَخْدَعُ",
            "تَرَكَ يَتْرُكُ",
            "نَهَى يَنْهَى",
            "مَرِضَ يَمْرَضُ"
          ],
          "correct": 0
        },
        {
          "title": "to deceive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَدَعَ يَخْدَعُ mean?",
          "options": [
            "to deceive",
            "to leave, to abandon",
            "to forbid",
            "to fall ill"
          ],
          "correct": 0
        },
        {
          "title": "to deceive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَدَعَ يَخْدَعُ?",
          "options": [
            "خِدَاعًا",
            "مَرَضًا",
            "كَذِبًا",
            "غَرَقًا"
          ],
          "correct": 0
        },
        {
          "title": "to promise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to promise\"?",
          "options": [
            "وَعَدَ يَعِدُ",
            "غَرِقَ يَغْرَقُ",
            "غَابَ يَغِيْبُ",
            "خَمْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to promise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَعَدَ يَعِدُ mean?",
          "options": [
            "to promise",
            "to drown",
            "to be absent",
            "wine"
          ],
          "correct": 0
        },
        {
          "title": "to promise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَعَدَ يَعِدُ?",
          "options": [
            "وَعْدًا",
            "خِدَاعًا",
            "تَرْكًا",
            "نَهْيًا"
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
            "نَهَى يَنْهَى",
            "مَرِضَ يَمْرَضُ",
            "قَاعِدَةٌ"
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
            "to forbid",
            "to fall ill",
            "rule, principle"
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
            "وَعْدًا",
            "غَرَقًا",
            "غِيَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to leave, to abandon",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to leave, to abandon\"?",
          "options": [
            "تَرَكَ يَتْرُكُ",
            "غَابَ يَغِيْبُ",
            "خَمْرٌ",
            "نَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to leave, to abandon",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَكَ يَتْرُكُ mean?",
          "options": [
            "to leave, to abandon",
            "to be absent",
            "wine",
            "river"
          ],
          "correct": 0
        },
        {
          "title": "to leave, to abandon (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَكَ يَتْرُكُ?",
          "options": [
            "تَرْكًا",
            "كَذِبًا",
            "نَهْيًا",
            "مَرَضًا"
          ],
          "correct": 0
        },
        {
          "title": "to drown",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to drown\"?",
          "options": [
            "غَرِقَ يَغْرَقُ",
            "مَرِضَ يَمْرَضُ",
            "قَاعِدَةٌ",
            "أَمِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to drown",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَرِقَ يَغْرَقُ mean?",
          "options": [
            "to drown",
            "to fall ill",
            "rule, principle",
            "leader, commander"
          ],
          "correct": 0
        },
        {
          "title": "to drown (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَرِقَ يَغْرَقُ?",
          "options": [
            "غَرَقًا",
            "تَرْكًا",
            "غِيَابًا",
            "خِدَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to forbid",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forbid\"?",
          "options": [
            "نَهَى يَنْهَى",
            "خَمْرٌ",
            "نَهْرٌ",
            "خَدَعَ يَخْدَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to forbid",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَهَى يَنْهَى mean?",
          "options": [
            "to forbid",
            "wine",
            "river",
            "to deceive"
          ],
          "correct": 0
        },
        {
          "title": "to forbid (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَهَى يَنْهَى?",
          "options": [
            "نَهْيًا",
            "غَرَقًا",
            "مَرَضًا",
            "وَعْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to be absent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be absent\"?",
          "options": [
            "غَابَ يَغِيْبُ",
            "قَاعِدَةٌ",
            "أَمِيْرٌ",
            "وَعَدَ يَعِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to be absent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَابَ يَغِيْبُ mean?",
          "options": [
            "to be absent",
            "rule, principle",
            "leader, commander",
            "to promise"
          ],
          "correct": 0
        },
        {
          "title": "to be absent (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَابَ يَغِيْبُ?",
          "options": [
            "غِيَابًا",
            "نَهْيًا",
            "خِدَاعًا",
            "كَذِبًا"
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
            "نَهْرٌ",
            "خَدَعَ يَخْدَعُ",
            "كَذَبَ يَكْذِبُ"
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
            "river",
            "to deceive",
            "to lie"
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
            "غِيَابًا",
            "وَعْدًا",
            "تَرْكًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l14",
      "title": "مذ ومنذ بالاسم",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Rule",
          "lines": [
            {
              "html": "When مُذْ and مُنْذُ are followed by an اِسْمٌ rather than a sentence, they become a حَرْفٌ جَارٌّ. This is a change of category, not merely of company: in the previous lesson they were adverbs and مُضَاف; here they are prepositions, and the noun after them is مَجْرُوْر.",
              "list": false
            },
            {
              "html": "The English rendering then depends on what kind of noun follows. Usually, if they are followed by a نَكِرَةٌ — an indefinite word — they are translated as 'for'; and if they are followed by the name of a day, they are translated as 'since'.",
              "list": false
            },
            {
              "html": "مَا رَأَيْتُهُ مُذْ يَوْمَيْنِ — I have not seen him for two days.",
              "list": true,
              "bullet": true
            },
            {
              "html": "مَا رَأَيْتُهُ مُذْ يَوْمِ الْجُمُعَةِ — I have not seen him since Friday.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The logic behind the two renderings is that an indefinite noun names a length of time — two days, six hours, three months — while the name of a day names a point in time. A length takes 'for'; a point takes 'since'.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَا رَأَيْتُهُ مُذْ يَوْمَيْنِ",
                "translation": "I have not seen him for two days.",
                "cells": [
                  "مَا",
                  "رَأَيْتُهُ",
                  "مُذْ",
                  "يَوْمَيْنِ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مَجْرُوْرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Compare this green row with the one in the previous lesson. There مُذْ was labelled مُضَافٌ and the sentence after it مُضَافٌ إِلَيْهِ. Here it is جَارٌّ and the noun after it مَجْرُوْرٌ. Same word, different label — decided entirely by what follows it.",
              "list": false
            },
            {
              "table": {
                "title": "مُذْ and مُنْذُ — the Two Cases",
                "headers": [
                  "What follows",
                  "What they become",
                  "Green-row labels",
                  "English"
                ],
                "rows": [
                  [
                    "A جُمْلَةٌ فِعْلِيَّةٌ",
                    "مُضَافٌ",
                    "مُضَافٌ / مُضَافٌ إِلَيْهِ",
                    "'since I met him'"
                  ],
                  [
                    "An indefinite اِسْم",
                    "حَرْفٌ جَارٌّ",
                    "جَارٌّ / مَجْرُوْرٌ",
                    "'for two days'"
                  ],
                  [
                    "The name of a day",
                    "حَرْفٌ جَارٌّ",
                    "جَارٌّ / مَجْرُوْرٌ",
                    "'since Friday'"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "When مُذْ and مُنْذُ are followed by an اِسْمٌ instead of a sentence, what do they become؟",
            "kind": "mcq",
            "options": [
              "A حَرْفٌ جَارٌّ, with the following noun مَجْرُوْرٌ",
              "They stay مُضَافٌ, exactly as with a sentence",
              "A فِعْلٌ نَاقِصٌ",
              "A حَرْفُ نَفْيٍ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Reading the Noun after Them",
          "lines": [
            {
              "html": "Most of the nouns in the book's exercise are counted expressions: تِسْعَةِ أَيَّامٍ, أَرْبَعَةِ أَيَّامٍ, سِتِّ سَاعَاتٍ, خَمْسِ سَنَوَاتٍ. In each the number is مَجْرُوْر after مُذْ, and the counted noun is مُضَافٌ إِلَيْهِ to that number — two green rows stacked.",
              "list": false
            },
            {
              "html": "لَمْ نَشْرَبْ مَاءً مُذْ سِتِّ سَاعَاتٍ — We have not drunk water for six hours.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The days of the week all take the same shape: يَوْمُ with the name of the day as its مُضَافٌ إِلَيْهِ, the whole thing مَجْرُوْر after مُذْ.",
              "list": false
            },
            {
              "table": {
                "title": "The Days of the Week",
                "headers": [
                  "Arabic",
                  "English"
                ],
                "rows": [
                  [
                    "يَوْمُ الْأَحَدِ",
                    "Sunday"
                  ],
                  [
                    "يَوْمُ الْإِثْنَيْنِ",
                    "Monday"
                  ],
                  [
                    "يَوْمُ الثُّلَاثَاءِ",
                    "Tuesday"
                  ],
                  [
                    "يَوْمُ الْأَرْبِعَاءِ",
                    "Wednesday"
                  ],
                  [
                    "يَوْمُ الْخَمِيْسِ",
                    "Thursday"
                  ],
                  [
                    "يَوْمُ الْجُمُعَةِ",
                    "Friday"
                  ],
                  [
                    "يَوْمُ السَّبْتِ",
                    "Saturday"
                  ]
                ]
              }
            },
            {
              "html": "زَمَنٍ طَوِيْلٍ, 'a long time', is indefinite, so it takes 'for': مَا رَأَى الْمُسَافِرُوْنَ أَهْلَهُمْ مُذْ زَمَنٍ طَوِيْلٍ — 'The travellers have not seen their family for a long time.'",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How do you decide between translating مُذْ/مُنْذُ + noun as 'for' or as 'since'؟",
            "kind": "mcq",
            "options": [
              "'For' if the noun is an indefinite length of time; 'since' if it names a point in time such as a day",
              "'For' is always used with the days of the week",
              "'Since' is used only with numbers",
              "There is no difference — both mean the same"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "مُذْ and مُنْذُ with a Noun",
        "rows": [
          {
            "label": "What they become",
            "arabic": "حَرْفٌ جَارٌّ",
            "meaning": "Followed by an اِسْم rather than a sentence, they cease to be adverbs and become prepositions."
          },
          {
            "label": "The green row",
            "arabic": "جَارٌّ + مَجْرُوْرٌ",
            "meaning": "Not مُضَاف and مُضَافٌ إِلَيْهِ, as they were with a sentence."
          },
          {
            "label": "With a نَكِرَة",
            "arabic": "مُذْ يَوْمَيْنِ",
            "meaning": "Translated 'for' — an indefinite noun names a length of time."
          },
          {
            "label": "With the name of a day",
            "arabic": "مُذْ يَوْمِ الْجُمُعَةِ",
            "meaning": "Translated 'since' — the name of a day names a point in time."
          },
          {
            "label": "Counted expressions",
            "arabic": "مُذْ سِتِّ سَاعَاتٍ",
            "meaning": "The number is مَجْرُوْر after مُذْ, and the counted noun is مُضَافٌ إِلَيْهِ to the number."
          },
          {
            "label": "The whole phrase",
            "arabic": "مَفْعُوْلٌ فِيْهِ",
            "meaning": "Whichever case applies, the phrase still fills the adverbial slot of the main sentence."
          }
        ]
      },
      "quiz": [
        {
          "q": "What do مُذْ and مُنْذُ become when followed by an اِسْم?",
          "options": [
            "مُضَافٌ",
            "حَرْفٌ جَارٌّ",
            "مَفْعُوْلٌ بِهِ",
            "فِعْلٌ نَاقِصٌ"
          ],
          "correct": 1,
          "explanation": "The noun after them is then مَجْرُوْر, and the green row reads جَارٌّ / مَجْرُوْرٌ."
        },
        {
          "q": "How are مُذْ and مُنْذُ translated when followed by an indefinite word?",
          "options": [
            "'since'",
            "'when'",
            "'for'",
            "'whenever'"
          ],
          "correct": 2,
          "explanation": "مُذْ يَوْمَيْنِ — 'for two days'. An indefinite noun names a length of time."
        },
        {
          "q": "How are مُذْ and مُنْذُ translated when followed by the name of a day?",
          "options": [
            "'since'",
            "'for'",
            "'during'",
            "'until'"
          ],
          "correct": 0,
          "explanation": "مُذْ يَوْمِ الْجُمُعَةِ — 'since Friday'. A named day is a point, not a length."
        },
        {
          "q": "In مَا رَأَيْتُهُ مُذْ يَوْمِ الْجُمُعَةِ, what is الْجُمُعَةِ?",
          "options": [
            "The مَجْرُوْر of مُذْ",
            "The مُضَافٌ إِلَيْهِ of يَوْمِ",
            "A نَعْت of يَوْمِ",
            "A بَدَل of يَوْمِ"
          ],
          "correct": 1,
          "explanation": "يَوْمِ is the مَجْرُوْر of مُذْ, and it is itself مُضَاف to the name of the day."
        },
        {
          "q": "What decides whether مُذْ is a مُضَاف or a حَرْفٌ جَارٌّ?",
          "options": [
            "Whether the main sentence is negative",
            "Whether it is spelt مُذْ or مُنْذُ",
            "Whether a sentence or a noun follows it",
            "Its position in the sentence"
          ],
          "correct": 2,
          "explanation": "A sentence after it makes it a مُضَاف; a noun after it makes it a preposition."
        },
        {
          "q": "In لَمْ نَشْرَبْ مَاءً مُذْ سِتِّ سَاعَاتٍ, what is سَاعَاتٍ?",
          "options": [
            "The مَجْرُوْر of مُذْ",
            "A تَمْيِيْز",
            "The مُضَافٌ إِلَيْهِ of سِتِّ",
            "A نَعْت"
          ],
          "correct": 2,
          "explanation": "سِتِّ is the مَجْرُوْر of مُذْ, and the counted noun is مُضَافٌ إِلَيْهِ to the number."
        }
      ],
      "bank": [
        {
          "title": "مَا رَأَيْتُهُ مُذْ يَوْمَيْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 456 (Section 1, Part 6)",
          "sentence": "مَا رَأَيْتُهُ مُذْ يَوْمَيْنِ",
          "translation": "I have not seen him for two days.",
          "cells": [
            "مَا",
            "رَأَيْتُهُ",
            "مُذْ",
            "يَوْمَيْنِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "مَا رَأَيْتُهُ مُذْ يَوْمِ الْجُمُعَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 456 (Section 1, Part 6)",
          "sentence": "مَا رَأَيْتُهُ مُذْ يَوْمِ الْجُمُعَةِ",
          "translation": "I have not seen him since Friday.",
          "cells": [
            "مَا",
            "رَأَيْتُهُ",
            "مُذْ",
            "يَوْمِ",
            "الْجُمُعَةِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
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
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "مَا رَأَيْتُكَ مُنْذُ تِسْعَةِ أَيَّامٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "مَا رَأَيْتُكَ مُنْذُ تِسْعَةِ أَيَّامٍ",
          "translation": "I have not seen you for nine days.",
          "cells": [
            "مَا",
            "رَأَيْتُكَ",
            "مُنْذُ",
            "تِسْعَةِ",
            "أَيَّامٍ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
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
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا صَامَتِ الْمَرِيْضَةُ مُذْ شَهْرَيْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "مَا صَامَتِ الْمَرِيْضَةُ مُذْ شَهْرَيْنِ",
          "translation": "The sick woman has not fasted for two months.",
          "cells": [
            "مَا",
            "صَامَتِ",
            "الْمَرِيْضَةُ",
            "مُذْ",
            "شَهْرَيْنِ"
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
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَمْ نَشْرَبْ مَاءً مُذْ سِتِّ سَاعَاتٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "لَمْ نَشْرَبْ مَاءً مُذْ سِتِّ سَاعَاتٍ",
          "translation": "We have not drunk water for six hours.",
          "cells": [
            "لَمْ",
            "نَشْرَبْ",
            "مَاءً",
            "مُذْ",
            "سِتِّ",
            "سَاعَاتٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
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
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا غَسَلُوا الثِّيَابَ مُنْذُ يَوْمِ الْأَحَدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "مَا غَسَلُوا الثِّيَابَ مُنْذُ يَوْمِ الْأَحَدِ",
          "translation": "They have not washed the clothes since Sunday.",
          "cells": [
            "مَا",
            "غَسَلُوا",
            "الثِّيَابَ",
            "مُنْذُ",
            "يَوْمِ",
            "الْأَحَدِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
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
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "هَلْ طَالَعْتَ كُتُبَكَ مُذْ يَوْمِ السَّبْتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "هَلْ طَالَعْتَ كُتُبَكَ مُذْ يَوْمِ السَّبْتِ",
          "translation": "Have you read your books since Saturday?",
          "cells": [
            "هَلْ",
            "طَالَعْتَ",
            "كُتُبَكَ",
            "مُذْ",
            "يَوْمِ",
            "السَّبْتِ"
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
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
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
            "حَرْفُ نَفْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَمْ أُسَافِرْ مُذْ ثَلَاثَةِ أَشْهُرٍ أَوْ أَرْبَعَةٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "لَمْ أُسَافِرْ مُذْ ثَلَاثَةِ أَشْهُرٍ أَوْ أَرْبَعَةٍ",
          "translation": "I have not travelled for three months or four.",
          "cells": [
            "لَمْ",
            "أُسَافِرْ",
            "مُذْ",
            "ثَلَاثَةِ",
            "أَشْهُرٍ",
            "أَوْ",
            "أَرْبَعَةٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 2,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
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
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَعْطُوْفٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا سَافَرْنَا إِلَى مَكَّةَ مُذْ خَمْسِ سَنَوَاتٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "مَا سَافَرْنَا إِلَى مَكَّةَ مُذْ خَمْسِ سَنَوَاتٍ",
          "translation": "We have not travelled to Makkah for five years.",
          "cells": [
            "مَا",
            "سَافَرْنَا",
            "إِلَى",
            "مَكَّةَ",
            "مُذْ",
            "خَمْسِ",
            "سَنَوَاتٍ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَجْرُوْرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا جَلَسَ الطُّلَّابُ فِي الْفَصْلِ مُذْ أُسْبُوْعٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "مَا جَلَسَ الطُّلَّابُ فِي الْفَصْلِ مُذْ أُسْبُوْعٍ",
          "translation": "The students have not sat in the classroom for a week.",
          "cells": [
            "مَا",
            "جَلَسَ",
            "الطُّلَّابُ",
            "فِي",
            "الْفَصْلِ",
            "مُذْ",
            "أُسْبُوْعٍ"
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
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَارٌّ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "مَا كَلَّمْتُ صَدِيْقِيْ ذَاكِرًا مُنْذُ يَوْمِ الْأَرْبِعَاءِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "مَا كَلَّمْتُ صَدِيْقِيْ ذَاكِرًا مُنْذُ يَوْمِ الْأَرْبِعَاءِ",
          "translation": "I have not spoken to my friend Dhakir since Wednesday.",
          "cells": [
            "مَا",
            "كَلَّمْتُ",
            "صَدِيْقِيْ",
            "ذَاكِرًا",
            "مُنْذُ",
            "يَوْمِ",
            "الْأَرْبِعَاءِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "بَدَلٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مَا رَأَى الْمُسَافِرُوْنَ أَهْلَهُمْ مُذْ زَمَنٍ طَوِيْلٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "مَا رَأَى الْمُسَافِرُوْنَ أَهْلَهُمْ مُذْ زَمَنٍ طَوِيْلٍ",
          "translation": "The travellers have not seen their family for a long time.",
          "cells": [
            "مَا",
            "رَأَى",
            "الْمُسَافِرُوْنَ",
            "أَهْلَهُمْ",
            "مُذْ",
            "زَمَنٍ",
            "طَوِيْلٍ"
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
                  "role": "فَاعِلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَارٌّ"
                },
                {
                  "start": 5,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُضَافٌ",
            "مُضَافٌ إِلَيْهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَمْ تَكْتُبِ الطَّالِبَةُ الْكَسْلَى دُرُوْسَهَا مُذْ خَمْسَةِ أَيَّامٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 6)",
          "sentence": "لَمْ تَكْتُبِ الطَّالِبَةُ الْكَسْلَى دُرُوْسَهَا مُذْ خَمْسَةِ أَيَّامٍ",
          "translation": "The lazy student has not written her lessons for five days.",
          "cells": [
            "لَمْ",
            "تَكْتُبِ",
            "الطَّالِبَةُ",
            "الْكَسْلَى",
            "دُرُوْسَهَا",
            "مُذْ",
            "خَمْسَةِ",
            "أَيَّامٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "role": "نَعْتٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 5,
                  "end": 7,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "جَارٌّ"
                },
                {
                  "start": 6,
                  "end": 7,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 6,
                  "end": 6,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 7,
                  "end": 7,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مَا صَامَتِ الْمَرِيْضَةُ مُذْ شَهْرَيْنِ, why is 'for' the right rendering rather than 'since'?",
          "options": [
            "Because صَامَ is intransitive",
            "Because شَهْرَيْنِ is indefinite and names a length of time",
            "Because the sentence is negative",
            "Because شَهْرَيْنِ is dual"
          ],
          "correct": 1,
          "explanation": "The rule turns on definiteness, not on the verb or the number."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمْ أُسَافِرْ مُذْ ثَلَاثَةِ أَشْهُرٍ أَوْ أَرْبَعَةٍ, what is أَرْبَعَةٍ?",
          "options": [
            "A بَدَل of أَشْهُرٍ",
            "A مَعْطُوْف on ثَلَاثَةِ",
            "A نَعْت of أَشْهُرٍ",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "أَوْ joins it to the first number, and it takes the same مَجْرُوْر ending."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In هَلْ طَالَعْتَ كُتُبَكَ مُذْ يَوْمِ السَّبْتِ, what is هَلْ?",
          "options": [
            "A حَرْفُ نَفْيٍ",
            "A حَرْفُ اسْتِفْهَامٍ",
            "A حَرْفُ عَطْفٍ",
            "A حَرْفُ جَرٍّ"
          ],
          "correct": 1,
          "explanation": "It turns the statement into a yes-or-no question and takes no slot."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مَا كَلَّمْتُ صَدِيْقِيْ ذَاكِرًا مُنْذُ يَوْمِ الْأَرْبِعَاءِ, what is ذَاكِرًا?",
          "options": [
            "A حَال of صَدِيْقِيْ",
            "A بَدَل of صَدِيْقِيْ, naming the friend",
            "A تَمْيِيْز",
            "A second مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "It is the friend's name, and it shares the مَنْصُوْب position of the object."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مَا سَافَرْنَا إِلَى مَكَّةَ مُذْ خَمْسِ سَنَوَاتٍ, how many جَارّ وَمَجْرُوْر pairs are there?",
          "options": [
            "None",
            "One",
            "Two",
            "Three"
          ],
          "correct": 2,
          "explanation": "إِلَى مَكَّةَ is one, and مُذْ خَمْسِ is the second — مُذْ is a preposition here."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In مَا رَأَى الْمُسَافِرُوْنَ أَهْلَهُمْ مُذْ زَمَنٍ طَوِيْلٍ, what is طَوِيْلٍ?",
          "options": [
            "A بَدَل of زَمَنٍ",
            "A نَعْت of زَمَنٍ",
            "A حَال of الْمُسَافِرُوْنَ",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "It matches زَمَنٍ in case, number and indefiniteness — the marks of a نَعْت."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَمْ تَكْتُبِ الطَّالِبَةُ الْكَسْلَى دُرُوْسَهَا مُذْ خَمْسَةِ أَيَّامٍ, why does تَكْتُبِ end in a kasrah?",
          "options": [
            "It is مَجْرُوْر after لَمْ",
            "It is مَجْزُوْم, and the kasrah avoids two سُكُون meeting",
            "It is مَنْصُوْب",
            "Because the doer is feminine"
          ],
          "correct": 1,
          "explanation": "The same device we met with إِذَا لَمْ يَحْضُرِ الْمُعَلِّمُ."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "Why does مُذْ take two different green-row labels across Lessons 22 and 23?",
          "options": [
            "Because the spelling changes",
            "Because its category changes with what follows it",
            "Because the main verb changes",
            "It does not — مُذْ is labelled the same way every time"
          ],
          "correct": 1,
          "explanation": "A sentence after it makes it an adverb and مُضَاف; a noun after it makes it a حَرْفٌ جَارٌّ."
        },
        {
          "title": "Sunday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Sunday\"?",
          "options": [
            "الْأَحَدُ",
            "الْأَرْبِعَاءُ",
            "الْجُمُعَةُ",
            "لَحْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "Sunday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does الْأَحَدُ mean?",
          "options": [
            "Sunday",
            "Wednesday",
            "Friday",
            "meat"
          ],
          "correct": 0
        },
        {
          "title": "Sunday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of الْأَحَدُ?",
          "options": [
            "—",
            "—",
            "—",
            "لُحُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "Monday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Monday\"?",
          "options": [
            "الْإِثْنَيْنِ",
            "الْخَمِيْسُ",
            "السَّبْتُ",
            "ثَوْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "Monday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does الْإِثْنَيْنِ mean?",
          "options": [
            "Monday",
            "Thursday",
            "Saturday",
            "garment"
          ],
          "correct": 0
        },
        {
          "title": "Monday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of الْإِثْنَيْنِ?",
          "options": [
            "—",
            "—",
            "—",
            "ثِيَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "Tuesday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Tuesday\"?",
          "options": [
            "الثُّلَاثَاءُ",
            "الْجُمُعَةُ",
            "لَحْمٌ",
            "زَمَنٌ"
          ],
          "correct": 0
        },
        {
          "title": "Tuesday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does الثُّلَاثَاءُ mean?",
          "options": [
            "Tuesday",
            "Friday",
            "meat",
            "time, period"
          ],
          "correct": 0
        },
        {
          "title": "Tuesday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of الثُّلَاثَاءُ?",
          "options": [
            "—",
            "—",
            "لُحُوْمٌ",
            "أَزْمَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "Wednesday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Wednesday\"?",
          "options": [
            "الْأَرْبِعَاءُ",
            "السَّبْتُ",
            "ثَوْبٌ",
            "شَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "Wednesday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does الْأَرْبِعَاءُ mean?",
          "options": [
            "Wednesday",
            "Saturday",
            "garment",
            "month"
          ],
          "correct": 0
        },
        {
          "title": "Wednesday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of الْأَرْبِعَاءُ?",
          "options": [
            "—",
            "—",
            "ثِيَابٌ",
            "أَشْهُرٌ"
          ],
          "correct": 0
        },
        {
          "title": "Thursday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Thursday\"?",
          "options": [
            "الْخَمِيْسُ",
            "لَحْمٌ",
            "زَمَنٌ",
            "صَامَ يَصُوْمُ"
          ],
          "correct": 0
        },
        {
          "title": "Thursday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does الْخَمِيْسُ mean?",
          "options": [
            "Thursday",
            "meat",
            "time, period",
            "to fast"
          ],
          "correct": 0
        },
        {
          "title": "Thursday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of الْخَمِيْسُ?",
          "options": [
            "—",
            "لُحُوْمٌ",
            "أَزْمَانٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "Friday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Friday\"?",
          "options": [
            "الْجُمُعَةُ",
            "ثَوْبٌ",
            "شَهْرٌ",
            "كَلَّمَ يُكَلِّمُ"
          ],
          "correct": 0
        },
        {
          "title": "Friday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does الْجُمُعَةُ mean?",
          "options": [
            "Friday",
            "garment",
            "month",
            "to speak to"
          ],
          "correct": 0
        },
        {
          "title": "Friday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of الْجُمُعَةُ?",
          "options": [
            "—",
            "ثِيَابٌ",
            "أَشْهُرٌ",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "Saturday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Saturday\"?",
          "options": [
            "السَّبْتُ",
            "زَمَنٌ",
            "صَامَ يَصُوْمُ",
            "حَضَرَ يَحْضُرُ"
          ],
          "correct": 0
        },
        {
          "title": "Saturday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does السَّبْتُ mean?",
          "options": [
            "Saturday",
            "time, period",
            "to fast",
            "to attend"
          ],
          "correct": 0
        },
        {
          "title": "Saturday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of السَّبْتُ?",
          "options": [
            "—",
            "أَزْمَانٌ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "meat",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"meat\"?",
          "options": [
            "لَحْمٌ",
            "شَهْرٌ",
            "كَلَّمَ يُكَلِّمُ",
            "الْأَحَدُ"
          ],
          "correct": 0
        },
        {
          "title": "meat",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَحْمٌ mean?",
          "options": [
            "meat",
            "month",
            "to speak to",
            "Sunday"
          ],
          "correct": 0
        },
        {
          "title": "meat (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لَحْمٌ?",
          "options": [
            "لُحُوْمٌ",
            "أَشْهُرٌ",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "garment",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"garment\"?",
          "options": [
            "ثَوْبٌ",
            "صَامَ يَصُوْمُ",
            "حَضَرَ يَحْضُرُ",
            "الْإِثْنَيْنِ"
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
            "to fast",
            "to attend",
            "Monday"
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
            "—",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "time, period",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, period\"?",
          "options": [
            "زَمَنٌ",
            "كَلَّمَ يُكَلِّمُ",
            "الْأَحَدُ",
            "الثُّلَاثَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "time, period",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَمَنٌ mean?",
          "options": [
            "time, period",
            "to speak to",
            "Sunday",
            "Tuesday"
          ],
          "correct": 0
        },
        {
          "title": "time, period (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of زَمَنٌ?",
          "options": [
            "أَزْمَانٌ",
            "—",
            "—",
            "—"
          ],
          "correct": 0
        },
        {
          "title": "month",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"month\"?",
          "options": [
            "شَهْرٌ",
            "حَضَرَ يَحْضُرُ",
            "الْإِثْنَيْنِ",
            "الْأَرْبِعَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "month",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَهْرٌ mean?",
          "options": [
            "month",
            "to attend",
            "Monday",
            "Wednesday"
          ],
          "correct": 0
        },
        {
          "title": "month (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَهْرٌ?",
          "options": [
            "أَشْهُرٌ",
            "—",
            "—",
            "—"
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
            "الْأَحَدُ",
            "الثُّلَاثَاءُ",
            "الْخَمِيْسُ"
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
            "Sunday",
            "Tuesday",
            "Thursday"
          ],
          "correct": 0
        },
        {
          "title": "to speak to",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to speak to\"?",
          "options": [
            "كَلَّمَ يُكَلِّمُ",
            "الْإِثْنَيْنِ",
            "الْأَرْبِعَاءُ",
            "الْجُمُعَةُ"
          ],
          "correct": 0
        },
        {
          "title": "to speak to",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَلَّمَ يُكَلِّمُ mean?",
          "options": [
            "to speak to",
            "Monday",
            "Wednesday",
            "Friday"
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
            "الثُّلَاثَاءُ",
            "الْخَمِيْسُ",
            "السَّبْتُ"
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
            "Tuesday",
            "Thursday",
            "Saturday"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l15",
      "title": "حيث",
      "subtitle": "Part 6: The مُضَافٌ إِلَيْهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Only Special Adverb of Place",
          "lines": [
            {
              "html": "The six special adverbs of time are now behind us. There is one special adverb of place, and it is حَيْثُ.",
              "list": false
            },
            {
              "html": "The مُضَافٌ إِلَيْهِ of حَيْثُ is usually a جُمْلَةٌ فِعْلِيَّةٌ. However, it sometimes occurs as a جُمْلَةٌ اسْمِيَّةٌ. It is translated as 'where' or 'wherever'.",
              "list": false
            },
            {
              "html": "جَلَسَتْ فَاطِمَةُ حَيْثُ جَلَسَتْ أُمُّهَا — Fatimah sat where her mother sat.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "جَلَسَتْ فَاطِمَةُ حَيْثُ جَلَسَتْ أُمُّهَا",
                "translation": "Fatimah sat where her mother sat.",
                "cells": [
                  "جَلَسَتْ",
                  "فَاطِمَةُ",
                  "حَيْثُ",
                  "جَلَسَتْ",
                  "أُمُّهَا"
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
                        "role": "مَفْعُوْلٌ فِيْهِ"
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
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مُضَافٌ"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The structure is exactly what we have seen throughout Part 6, only the question answered is 'where?' rather than 'when?'. حَيْثُ is the مُضَاف, the sentence after it the مُضَافٌ إِلَيْهِ, and the two together the مَفْعُوْلٌ فِيْهِ.",
              "list": false
            },
            {
              "html": "نَجْتَمِعُ حَيْثُ النَّاسُ قَائِمُوْنَ — We gather where the people are standing.",
              "list": true,
              "bullet": true
            },
            {
              "html": "This is the less common case: a nominal sentence after حَيْثُ. النَّاسُ is the مُبْتَدَأ and قَائِمُوْنَ the خَبَر, and the pair together fill the مُضَافٌ إِلَيْهِ slot.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What kind of sentence usually follows حَيْثُ, and what does it mean؟",
            "kind": "mcq",
            "options": [
              "Usually a جُمْلَةٌ فِعْلِيَّةٌ (sometimes اسمية), meaning 'where' or 'wherever'",
              "Always a جُمْلَةٌ اسْمِيَّةٌ, meaning 'when'",
              "Only a single noun, meaning 'there'",
              "A مُضَارِع verb only, meaning 'wherever'"
            ],
            "correct": 0
          }
        },
        {
          "heading": "حَيْثُ Preceded by مِنْ",
          "lines": [
            {
              "html": "The word حَيْثُ is often preceded by the particle مِنْ. The whole جَارّ وَمَجْرُوْر is then the adverbial of the main sentence, and inside it حَيْثُ keeps its usual إِضَافَة with the sentence that follows.",
              "list": false
            },
            {
              "html": "يَرْزُقُ اللهُ الْعِبَادَ مِنْ حَيْثُ لَا يَعْلَمُوْنَ — Allah provides servants from where they do not know.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَرْزُقُ اللهُ الْعِبَادَ مِنْ حَيْثُ لَا يَعْلَمُوْنَ",
                "translation": "Allah provides servants from where they do not know.",
                "cells": [
                  "يَرْزُقُ",
                  "اللهُ",
                  "الْعِبَادَ",
                  "مِنْ",
                  "حَيْثُ",
                  "لَا",
                  "يَعْلَمُوْنَ"
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
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 3,
                        "end": 3,
                        "role": "جَارٌّ"
                      },
                      {
                        "start": 4,
                        "end": 6,
                        "role": "مَجْرُوْرٌ"
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
                        "end": 6,
                        "role": "مُضَافٌ إِلَيْهِ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 5,
                        "end": 5,
                        "role": "حَرْفُ نَفْيٍ"
                      },
                      {
                        "start": 6,
                        "end": 6,
                        "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice that حَيْثُ never changes its ending. It is مَبْنِيٌّ on a ضَمَّة, so it reads حَيْثُ even after مِنْ, where an ordinary noun would take a kasrah. Do not let the ضَمَّة tempt you into reading it as a subject.",
              "list": false
            },
            {
              "html": "With حَيْثُ the set is complete. The book closes Part 6 with a consolidated table of all seven, which is reproduced below — it is the single most useful page in the Part to keep in front of you while revising.",
              "list": false
            },
            {
              "table": {
                "title": "Summary of the Special Adverbs (Book p. 458)",
                "headers": [
                  "Adverb",
                  "Translation",
                  "Structure of the مُضَافٌ إِلَيْهِ",
                  "Structure of the main sentence",
                  "Tense"
                ],
                "rows": [
                  [
                    "لَمَّا",
                    "When",
                    "جُمْلَةٌ فِعْلِيَّةٌ: مَاضٍ",
                    "مَاضٍ",
                    "Past"
                  ],
                  [
                    "كُلَّمَا",
                    "Whenever",
                    "جُمْلَةٌ فِعْلِيَّةٌ: مَاضٍ",
                    "مَاضٍ",
                    "Present, Future"
                  ],
                  [
                    "إِذْ",
                    "When",
                    "جُمْلَةٌ فِعْلِيَّةٌ: مَاضٍ — or جُمْلَةٌ اسْمِيَّةٌ",
                    "مَاضٍ or مُضَارِعٌ",
                    "Past, Present, Future"
                  ],
                  [
                    "إِذَا",
                    "When",
                    "جُمْلَةٌ فِعْلِيَّةٌ: مَاضٍ",
                    "مَاضٍ",
                    "Future"
                  ],
                  [
                    "مُذْ / مُنْذُ",
                    "Since",
                    "جُمْلَةٌ فِعْلِيَّةٌ — or an اِسْم",
                    "—",
                    "Past"
                  ],
                  [
                    "حَيْثُ",
                    "Where, Wherever",
                    "جُمْلَةٌ فِعْلِيَّةٌ — or جُمْلَةٌ اسْمِيَّةٌ",
                    "—",
                    "—"
                  ]
                ]
              }
            },
            {
              "html": "Two entries in the table are left blank, and deliberately so. مُذْ and مُنْذُ place no requirement on the main sentence beyond its usual negative, and حَيْثُ places none at all — it is an adverb of place, so tense is simply not its business.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What happens to حَيْثُ's ending when it is preceded by مِنْ؟",
            "kind": "mcq",
            "options": [
              "Nothing — حَيْثُ is مَبْنِيٌّ on a ضَمَّة and keeps that ending even after a preposition",
              "It becomes مَجْرُوْرٌ with a kasrah, like an ordinary noun",
              "It becomes مَنْصُوْبٌ",
              "It drops its final letter"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "حَيْثُ",
        "rows": [
          {
            "label": "Its type",
            "arabic": "ظَرْفُ مَكَانٍ",
            "meaning": "The single special adverb of place, alongside the six of time."
          },
          {
            "label": "Its sentence",
            "arabic": "جُمْلَةٌ فِعْلِيَّةٌ عَادَةً",
            "meaning": "Usually a verbal sentence, but a nominal one occurs too."
          },
          {
            "label": "Its meaning",
            "arabic": "حَيْثُ = where, wherever",
            "meaning": "It answers 'where?' rather than 'when?'."
          },
          {
            "label": "The book's example",
            "arabic": "جَلَسَتْ فَاطِمَةُ حَيْثُ جَلَسَتْ أُمُّهَا",
            "meaning": "'Fatimah sat where her mother sat.'"
          },
          {
            "label": "With مِنْ",
            "arabic": "مِنْ حَيْثُ لَا يَعْلَمُوْنَ",
            "meaning": "حَيْثُ is often preceded by مِنْ; the whole جَارّ وَمَجْرُوْر is then the adverbial."
          },
          {
            "label": "Its ending",
            "arabic": "مَبْنِيٌّ عَلَى الضَّمِّ",
            "meaning": "حَيْثُ never changes — it keeps its ضَمَّة even after a preposition."
          }
        ]
      },
      "quiz": [
        {
          "q": "How many special adverbs of place are there?",
          "options": [
            "Six",
            "Two",
            "None",
            "One"
          ],
          "correct": 3,
          "explanation": "حَيْثُ alone, against six adverbs of time."
        },
        {
          "q": "What usually follows حَيْثُ?",
          "options": [
            "A جُمْلَةٌ اسْمِيَّةٌ",
            "A جُمْلَةٌ فِعْلِيَّةٌ",
            "A single noun",
            "A preposition"
          ],
          "correct": 1,
          "explanation": "A verbal sentence is the usual case; a nominal one occurs sometimes."
        },
        {
          "q": "How is حَيْثُ translated?",
          "options": [
            "'when' or 'whenever'",
            "'since' or 'for'",
            "'where' or 'wherever'",
            "'whilst'"
          ],
          "correct": 2,
          "explanation": "It is the one adverb in the set that answers 'where?'."
        },
        {
          "q": "In يَرْزُقُ اللهُ الْعِبَادَ مِنْ حَيْثُ لَا يَعْلَمُوْنَ, what is the whole مِنْ حَيْثُ … phrase?",
          "options": [
            "A مَفْعُوْلٌ بِهِ",
            "A مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ",
            "A حَال",
            "A بَدَل of الْعِبَادَ"
          ],
          "correct": 1,
          "explanation": "A جَارّ وَمَجْرُوْر filling the adverbial slot is 'غَيْرُ صَرِيْحٍ' — indirect."
        },
        {
          "q": "Why does حَيْثُ keep a ضَمَّة even after مِنْ?",
          "options": [
            "Because it is the فَاعِل",
            "Because مِنْ does not govern it",
            "Because it is مَبْنِيٌّ عَلَى الضَّمِّ and never changes",
            "Because it is مَرْفُوْع as a مُبْتَدَأ"
          ],
          "correct": 2,
          "explanation": "It is indeclinable, so the ضَمَّة is fixed and carries no case information."
        },
        {
          "q": "In نَجْتَمِعُ حَيْثُ النَّاسُ قَائِمُوْنَ, what fills the مُضَافٌ إِلَيْهِ slot?",
          "options": [
            "النَّاسُ alone",
            "قَائِمُوْنَ alone",
            "The whole nominal sentence النَّاسُ قَائِمُوْنَ",
            "نَجْتَمِعُ"
          ],
          "correct": 2,
          "explanation": "The مُبْتَدَأ and its خَبَر together occupy the slot; they are parsed a row below."
        }
      ],
      "bank": [
        {
          "title": "جَلَسَتْ فَاطِمَةُ حَيْثُ جَلَسَتْ أُمُّهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 457 (Section 1, Part 6)",
          "sentence": "جَلَسَتْ فَاطِمَةُ حَيْثُ جَلَسَتْ أُمُّهَا",
          "translation": "Fatimah sat where her mother sat.",
          "cells": [
            "جَلَسَتْ",
            "فَاطِمَةُ",
            "حَيْثُ",
            "جَلَسَتْ",
            "أُمُّهَا"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَرْزُقُ اللهُ الْعِبَادَ مِنْ حَيْثُ لَا يَعْلَمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 457 (Section 1, Part 6)",
          "sentence": "يَرْزُقُ اللهُ الْعِبَادَ مِنْ حَيْثُ لَا يَعْلَمُوْنَ",
          "translation": "Allah provides servants from where they do not know.",
          "cells": [
            "يَرْزُقُ",
            "اللهُ",
            "الْعِبَادَ",
            "مِنْ",
            "حَيْثُ",
            "لَا",
            "يَعْلَمُوْنَ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَارٌّ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "مَجْرُوْرٌ"
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
                  "end": 6,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كُلُوْا مِنْهَا حَيْثُ شِئْتُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "كُلُوْا مِنْهَا حَيْثُ شِئْتُمْ",
          "translation": "Eat from it wherever you wish.",
          "cells": [
            "كُلُوْا",
            "مِنْهَا",
            "حَيْثُ",
            "شِئْتُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَامْضُوْا حَيْثُ تُؤْمَرُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "وَامْضُوْا حَيْثُ تُؤْمَرُوْنَ",
          "translation": "And proceed wherever you are commanded.",
          "cells": [
            "وَ",
            "امْضُوْا",
            "حَيْثُ",
            "تُؤْمَرُوْنَ"
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
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 3,
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
                  "role": "فِعْلٌ مَجْهُوْلٌ وَنَائِبُ فَاعِلٍ (وَاوُ الْجَمَاعَةِ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَا تَجْلِسْ حَيْثُ يَمُرُّ النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "لَا تَجْلِسْ حَيْثُ يَمُرُّ النَّاسُ",
          "translation": "Do not sit where people pass.",
          "cells": [
            "لَا",
            "تَجْلِسْ",
            "حَيْثُ",
            "يَمُرُّ",
            "النَّاسُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَهْيٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
            "حَرْفُ نَفْيٍ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "نَجْتَمِعُ حَيْثُ النَّاسُ قَائِمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "نَجْتَمِعُ حَيْثُ النَّاسُ قَائِمُوْنَ",
          "translation": "We gather where the people are standing.",
          "cells": [
            "نَجْتَمِعُ",
            "حَيْثُ",
            "النَّاسُ",
            "قَائِمُوْنَ"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كُنْتُ أَنْتَظِرُ لَكَ حَيْثُ وَعَدْتَنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "كُنْتُ أَنْتَظِرُ لَكَ حَيْثُ وَعَدْتَنِيْ",
          "translation": "I was waiting for you where you promised me.",
          "cells": [
            "كُنْتُ",
            "أَنْتَظِرُ",
            "لَكَ",
            "حَيْثُ",
            "وَعَدْتَنِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (تُ)"
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ) وَمَفْعُوْلٌ بِهِ (يْ)"
                }
              ]
            }
          ],
          "distractors": [
            "خَبَرٌ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَرْزُقُكُمْ مِنْ حَيْثُ لَا تَحْتَسِبُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "يَرْزُقُكُمْ مِنْ حَيْثُ لَا تَحْتَسِبُوْنَ",
          "translation": "He provides for you from where you do not reckon.",
          "cells": [
            "يَرْزُقُكُمْ",
            "مِنْ",
            "حَيْثُ",
            "لَا",
            "تَحْتَسِبُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                },
                {
                  "start": 1,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "تَنْزِلُ الْبَرَكَةُ حَيْثُ يُصَلِّي النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "تَنْزِلُ الْبَرَكَةُ حَيْثُ يُصَلِّي النَّاسُ",
          "translation": "Blessing descends where the people pray.",
          "cells": [
            "تَنْزِلُ",
            "الْبَرَكَةُ",
            "حَيْثُ",
            "يُصَلِّي",
            "النَّاسُ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 4,
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
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَوْمَ الْجُمُعَةِ أَجْلِسُ حَيْثُ أَرَى الْإِمَامَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "يَوْمَ الْجُمُعَةِ أَجْلِسُ حَيْثُ أَرَى الْإِمَامَ",
          "translation": "On Friday I sit where I can see the imam.",
          "cells": [
            "يَوْمَ",
            "الْجُمُعَةِ",
            "أَجْلِسُ",
            "حَيْثُ",
            "أَرَى",
            "الْإِمَامَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ ثَانٍ"
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
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُضَافٌ إِلَيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا)"
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "نَدْرُسُ حَيْثُ لَا يَبْلُغُنَا أَصْوَاتُ النَّاسِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "نَدْرُسُ حَيْثُ لَا يَبْلُغُنَا أَصْوَاتُ النَّاسِ",
          "translation": "We study where the voices of people do not reach us.",
          "cells": [
            "نَدْرُسُ",
            "حَيْثُ",
            "لَا",
            "يَبْلُغُنَا",
            "أَصْوَاتُ",
            "النَّاسِ"
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
                  "role": "مُضَافٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
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
                  "role": "فِعْلٌ وَمَفْعُوْلٌ بِهِ (نَا)"
                },
                {
                  "start": 4,
                  "end": 5,
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
            "حَرْفُ نَهْيٍ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "نَدْخُلُ الْمَسْجِدَ مِنْ حَيْثُ يَخْرُجُ النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "نَدْخُلُ الْمَسْجِدَ مِنْ حَيْثُ يَخْرُجُ النَّاسُ",
          "translation": "We enter the masjid from where the people come out.",
          "cells": [
            "نَدْخُلُ",
            "الْمَسْجِدَ",
            "مِنْ",
            "حَيْثُ",
            "يَخْرُجُ",
            "النَّاسُ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَارٌّ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "مَجْرُوْرٌ"
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
                  "end": 5,
                  "role": "مُضَافٌ إِلَيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
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
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "تَنْزِلُ الرَّحْمَةُ حَيْثُ يَجْتَمِعُ النَّاسُ لِلْعِلْمِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "تَنْزِلُ الرَّحْمَةُ حَيْثُ يَجْتَمِعُ النَّاسُ لِلْعِلْمِ",
          "translation": "Mercy descends where the people gather for knowledge.",
          "cells": [
            "تَنْزِلُ",
            "الرَّحْمَةُ",
            "حَيْثُ",
            "يَجْتَمِعُ",
            "النَّاسُ",
            "لِلْعِلْمِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 5,
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
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَا تَمُرُّوْا حَيْثُ يُصَلِّي النَّاسُ وَيَسْجُدُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 6)",
          "sentence": "لَا تَمُرُّوْا حَيْثُ يُصَلِّي النَّاسُ وَيَسْجُدُوْنَ",
          "translation": "Do not pass where the people pray and prostrate.",
          "cells": [
            "لَا",
            "تَمُرُّوْا",
            "حَيْثُ",
            "يُصَلِّي",
            "النَّاسُ",
            "وَ",
            "يَسْجُدُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَهْيٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُضَافٌ"
                },
                {
                  "start": 3,
                  "end": 6,
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
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ) ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَفْيٍ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In ﴿وَامْضُوا حَيْثُ تُؤْمَرُوْنَ﴾, what is تُؤْمَرُوْنَ?",
          "options": [
            "A مَعْلُوْم verb with وَاوُ الْجَمَاعَةِ as its doer",
            "A مَجْهُوْل verb whose نَائِبُ فَاعِلٍ is the attached وَاو",
            "A مَاضٍ verb",
            "An أَمْر verb"
          ],
          "correct": 1,
          "explanation": "'Where you are commanded' — the commander is not named, so the addressees stand in as the subject."
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَا تَجْلِسْ حَيْثُ يَمُرُّ النَّاسُ, what is لَا?",
          "options": [
            "A حَرْفُ نَفْيٍ",
            "A حَرْفُ نَهْيٍ, since تَجْلِسْ is مَجْزُوْم",
            "Part of حَيْثُ",
            "A حَرْفُ عَطْفٍ"
          ],
          "correct": 1,
          "explanation": "The سُكُون on the verb's last letter marks the prohibition."
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In كُنْتُ أَنْتَظِرُ لَكَ حَيْثُ وَعَدْتَنِيْ, what does the كَانَ + مُضَارِع pairing convey?",
          "options": [
            "A single completed act",
            "A continuous or habitual past — 'I was waiting'",
            "A command",
            "A future intention"
          ],
          "correct": 1,
          "explanation": "The pattern we met in Lesson 3 of this section: 'I used to wait / I was waiting for you.'"
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In نَدْرُسُ حَيْثُ لَا يَبْلُغُنَا أَصْوَاتُ النَّاسِ, which word is the فَاعِل of يَبْلُغُ?",
          "options": [
            "نَا",
            "أَصْوَاتُ",
            "النَّاسِ",
            "حَيْثُ"
          ],
          "correct": 1,
          "explanation": "The voices are what reach; the attached نَا is the object reached."
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In تَنْزِلُ الرَّحْمَةُ حَيْثُ يَجْتَمِعُ النَّاسُ لِلْعِلْمِ, what does لِلْعِلْمِ express?",
          "options": [
            "The place of the gathering",
            "The time of the gathering",
            "The reason for the gathering",
            "The manner of the gathering"
          ],
          "correct": 2,
          "explanation": "The لِ of reason gives a مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ — they gather for knowledge."
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In نَدْخُلُ الْمَسْجِدَ مِنْ حَيْثُ يَخْرُجُ النَّاسُ, what is الْمَسْجِدَ?",
          "options": [
            "The مَجْرُوْر of مِنْ",
            "The مَفْعُوْلٌ بِهِ of نَدْخُلُ",
            "A مَفْعُوْلٌ فِيْهِ",
            "The مُضَافٌ إِلَيْهِ of حَيْثُ"
          ],
          "correct": 1,
          "explanation": "دَخَلَ takes a direct object in Arabic — 'we enter the masjid'."
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "In لَا تَمُرُّوْا حَيْثُ يُصَلِّي النَّاسُ وَيَسْجُدُوْنَ, how far does the مُضَافٌ إِلَيْهِ of حَيْثُ extend?",
          "options": [
            "To النَّاسُ only",
            "To يُصَلِّي only",
            "To the end, taking in the joined verb يَسْجُدُوْنَ",
            "It has none"
          ],
          "correct": 2,
          "explanation": "The وَ joins a second verbal sentence, and both together fill the slot."
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 6)",
          "kind": "mcq",
          "prompt": "What is the one structural difference between حَيْثُ and the six special adverbs of time?",
          "options": [
            "It answers 'where?' rather than 'when?'",
            "It takes no مُضَافٌ إِلَيْهِ",
            "It is never مُضَاف",
            "It cannot be preceded by a preposition"
          ],
          "correct": 0,
          "explanation": "Structurally it behaves exactly like them; only the question it answers differs."
        },
        {
          "title": "blessing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"blessing\"?",
          "options": [
            "بَرَكَةٌ",
            "عَبْدٌ",
            "مَضَى يَمْضِيْ",
            "أَمَرَ يَأْمُرُ"
          ],
          "correct": 0
        },
        {
          "title": "blessing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَرَكَةٌ mean?",
          "options": [
            "blessing",
            "servant, worshipper",
            "to proceed, to go on",
            "to command"
          ],
          "correct": 0
        },
        {
          "title": "blessing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَرَكَةٌ?",
          "options": [
            "بَرَكَاتٌ",
            "عِبَادٌ",
            "عُلُوْمٌ",
            "رَحَمَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "mercy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"mercy\"?",
          "options": [
            "رَحْمَةٌ",
            "رَزَقَ يَرْزُقُ",
            "اِحْتَسَبَ يَحْتَسِبُ",
            "بَلَغَ يَبْلُغُ"
          ],
          "correct": 0
        },
        {
          "title": "mercy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَحْمَةٌ mean?",
          "options": [
            "mercy",
            "to provide sustenance",
            "to reckon, to expect",
            "to reach"
          ],
          "correct": 0
        },
        {
          "title": "mercy (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَحْمَةٌ?",
          "options": [
            "رَحَمَاتٌ",
            "بَرَكَاتٌ",
            "عِبَادٌ",
            "عُلُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "knowledge",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"knowledge\"?",
          "options": [
            "عِلْمٌ",
            "مَضَى يَمْضِيْ",
            "أَمَرَ يَأْمُرُ",
            "سَجَدَ يَسْجُدُ"
          ],
          "correct": 0
        },
        {
          "title": "knowledge",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عِلْمٌ mean?",
          "options": [
            "knowledge",
            "to proceed, to go on",
            "to command",
            "to prostrate"
          ],
          "correct": 0
        },
        {
          "title": "knowledge (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عِلْمٌ?",
          "options": [
            "عُلُوْمٌ",
            "رَحَمَاتٌ",
            "بَرَكَاتٌ",
            "عِبَادٌ"
          ],
          "correct": 0
        },
        {
          "title": "servant, worshipper",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"servant, worshipper\"?",
          "options": [
            "عَبْدٌ",
            "اِحْتَسَبَ يَحْتَسِبُ",
            "بَلَغَ يَبْلُغُ",
            "بَرَكَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "servant, worshipper",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَبْدٌ mean?",
          "options": [
            "servant, worshipper",
            "to reckon, to expect",
            "to reach",
            "blessing"
          ],
          "correct": 0
        },
        {
          "title": "servant, worshipper (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَبْدٌ?",
          "options": [
            "عِبَادٌ",
            "عُلُوْمٌ",
            "رَحَمَاتٌ",
            "بَرَكَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to provide sustenance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to provide sustenance\"?",
          "options": [
            "رَزَقَ يَرْزُقُ",
            "أَمَرَ يَأْمُرُ",
            "سَجَدَ يَسْجُدُ",
            "رَحْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to provide sustenance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَزَقَ يَرْزُقُ mean?",
          "options": [
            "to provide sustenance",
            "to command",
            "to prostrate",
            "mercy"
          ],
          "correct": 0
        },
        {
          "title": "to provide sustenance (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَزَقَ يَرْزُقُ?",
          "options": [
            "رِزْقًا",
            "اِحْتِسَابًا",
            "بُلُوْغًا",
            "مُضِيًّا"
          ],
          "correct": 0
        },
        {
          "title": "to proceed, to go on",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to proceed, to go on\"?",
          "options": [
            "مَضَى يَمْضِيْ",
            "بَلَغَ يَبْلُغُ",
            "بَرَكَةٌ",
            "عِلْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to proceed, to go on",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَضَى يَمْضِيْ mean?",
          "options": [
            "to proceed, to go on",
            "to reach",
            "blessing",
            "knowledge"
          ],
          "correct": 0
        },
        {
          "title": "to proceed, to go on (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَضَى يَمْضِيْ?",
          "options": [
            "مُضِيًّا",
            "أَمْرًا",
            "سُجُوْدًا",
            "اِحْتِسَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to reckon, to expect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reckon, to expect\"?",
          "options": [
            "اِحْتَسَبَ يَحْتَسِبُ",
            "سَجَدَ يَسْجُدُ",
            "رَحْمَةٌ",
            "عَبْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to reckon, to expect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَسَبَ يَحْتَسِبُ mean?",
          "options": [
            "to reckon, to expect",
            "to prostrate",
            "mercy",
            "servant, worshipper"
          ],
          "correct": 0
        },
        {
          "title": "to reckon, to expect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَسَبَ يَحْتَسِبُ?",
          "options": [
            "اِحْتِسَابًا",
            "بُلُوْغًا",
            "رِزْقًا",
            "أَمْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to command",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to command\"?",
          "options": [
            "أَمَرَ يَأْمُرُ",
            "بَرَكَةٌ",
            "عِلْمٌ",
            "رَزَقَ يَرْزُقُ"
          ],
          "correct": 0
        },
        {
          "title": "to command",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمَرَ يَأْمُرُ mean?",
          "options": [
            "to command",
            "blessing",
            "knowledge",
            "to provide sustenance"
          ],
          "correct": 0
        },
        {
          "title": "to command (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَمَرَ يَأْمُرُ?",
          "options": [
            "أَمْرًا",
            "سُجُوْدًا",
            "مُضِيًّا",
            "بُلُوْغًا"
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
            "رَحْمَةٌ",
            "عَبْدٌ",
            "مَضَى يَمْضِيْ"
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
            "mercy",
            "servant, worshipper",
            "to proceed, to go on"
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
            "رِزْقًا",
            "اِحْتِسَابًا",
            "سُجُوْدًا"
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
            "عِلْمٌ",
            "رَزَقَ يَرْزُقُ",
            "اِحْتَسَبَ يَحْتَسِبُ"
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
            "knowledge",
            "to provide sustenance",
            "to reckon, to expect"
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
            "مُضِيًّا",
            "أَمْرًا",
            "رِزْقًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

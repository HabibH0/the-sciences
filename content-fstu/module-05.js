// Module 05 — The Verbal Sentence (From the Start, Unit 2, Section 2, pp. 83-134)
//
// Converted from content-fstu-new/unit2-lesson6..15.js + unit2-summary.js.
// Same conversion pattern as module-04.js (see its header comment). The
// final lesson is a review-only lesson generated from unit2-summary.js's
// keyTerms/nouns/verbs (no new teaching content, no exercise gate -- just a
// larger quiz plus a big vocab-only practice bank), mirroring how Unit 1's
// summary became content-fstu/module-03.js's final lesson.
export default {
  "id": "f-jumla-filiyya",
  "title": "اَلْجُمْلَةُ الْفِعْلِيَّةُ",
  "heading": "اَلْوَحْدَةُ الثَّانِيَةُ",
  "blurb": "اَلْجُمْلَةُ الْفِعْلِيَّةُ: الْفَاعِل, the verb's object/adverb slots, الْحَال, التَّمْيِيْز, and الاِسْتِثْنَاء.",
  "lessons": [
    {
      "id": "l1",
      "title": "الفاعل",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "Introduction: جُمْلَةٌ فِعْلِيَّةٌ",
          "lines": [
            {
              "html": "اَلْجُمْلَةُ الْفِعْلِيَّةُ is a sentence which starts with a verb. It is comprised of two essential slots found in every جملة فعلية: 1. Verb, 2. Subject/Deputy Subject. The remaining slots are non-essential; a sentence does not have to include them: Object, Indirect Object, Adverbs of Time and Place, Adverbs of Degree and Frequency, Adverbs of Reason, State, Clarification, Exclusion.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Every جملة فعلية has two ESSENTIAL slots — the rest (object, adverbs, etc.) are optional. What are the two essentials?",
            "kind": "mcq",
            "options": [
              "The verb, and the subject / deputy subject",
              "The verb, and the object",
              "The subject, and the object",
              "The مبتدأ, and the خبر"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The Subject — فَاعِلٌ",
          "lines": [
            {
              "html": "The subject is the one who is carrying out the action. In Arabic, the subject of a جملة فعلية is called فَاعِلٌ. The فَاعِلٌ is مَرْفُوْعٌ. The فَاعِلٌ comes after the فِعْلٌ. However, when translating, the فَاعِلٌ should be written first.",
              "list": false
            },
            {
              "html": "ذَهَبَ زَيْدٌ — Zaid went.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "ذَهَبَ زَيْدٌ",
                "translation": "Zaid went.",
                "cells": [
                  "ذَهَبَ",
                  "زَيْدٌ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "If the verb is مَنْفِيٌّ, the negative particle will be labelled as حَرْفُ نَفْيٍ.",
              "list": false
            },
            {
              "html": "مَا جَاءَ الرَّجُلُ — The man did not come.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَا جَاءَ الرَّجُلُ",
                "translation": "The man did not come.",
                "cells": [
                  "مَا",
                  "جَاءَ",
                  "الرَّجُلُ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Remember, in a جملة اسمية the subject is called مُبْتَدَأٌ, and in a جملة فعلية it is called فَاعِلٌ. In English, they are both called the subject.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "ذَهَبَ زَيْدٌ",
            "kind": "mcq",
            "options": [
              "جملة اسمية — subject is the مبتدأ",
              "جملة فعلية — subject is the فاعل"
            ],
            "correct": 1
          }
        },
        {
          "heading": "Feminine Subjects",
          "lines": [
            {
              "html": "If the فَاعِلٌ is feminine, مُؤَنَّثٌ, the verb must be in its feminine form.",
              "list": false
            },
            {
              "html": "جَلَسَتْ فَاطِمَةُ — Fatima sat.",
              "list": true,
              "bullet": true
            },
            {
              "html": "تَجْلِسُ فَاطِمَةُ — Fatima sits / is sitting / will sit.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "فَاطِمَةُ is a feminine فاعل. Which form of جَلَسَ must the verb take?",
            "kind": "mcq",
            "options": [
              "جَلَسَتْ",
              "جَلَسَ",
              "تَجْلِسُ",
              "يَجْلِسُ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Stative and Dynamic Verbs",
          "lines": [
            {
              "html": "Regular verbs show the occurrence of an action; these are known as dynamic verbs, e.g. to eat, to walk. Some verbs show a state, usually verbs with 'to be', e.g. to be sick; these are known as stative verbs. A stative verb is translated with an auxiliary verb (is, was, will be) which shows the tense, followed by the state — like a جملة اسمية.",
              "list": false
            },
            {
              "table": {
                "title": "Translating a Stative Verb (فَرِحَ — to be happy)",
                "headers": [
                  "اَلْفِعْلُ",
                  "Tense",
                  "Translation"
                ],
                "rows": [
                  [
                    "فَرِحَ (اَلْمَاضِيْ)",
                    "Past",
                    "The man was happy. / The man became happy."
                  ],
                  [
                    "يَفْرَحُ (اَلْمُضَارِعُ)",
                    "Present Habitual",
                    "The man is happy."
                  ],
                  [
                    "يَفْرَحُ (اَلْمُضَارِعُ)",
                    "Present Continuous",
                    "The man is happy."
                  ],
                  [
                    "يَفْرَحُ (اَلْمُضَارِعُ)",
                    "Future",
                    "The man will be happy."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "فَرِحَ is a stative verb (to be happy). How is its ماضٍ form translated?",
            "kind": "mcq",
            "options": [
              "With an auxiliary + the state: 'was/became happy'",
              "'is happy' (present)",
              "'will be happy' (future)",
              "'Be happy!' (a command)"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "جُمْلَةٌ فِعْلِيَّةٌ — essentials",
        "rows": [
          {
            "label": "فِعْلٌ",
            "arabic": "Verb",
            "meaning": "ماضٍ or مضارع; معلوم or مجهول; agrees with the فاعل in gender"
          },
          {
            "label": "فَاعِلٌ",
            "arabic": "Subject",
            "meaning": "مَرْفُوْعٌ; comes after the verb; translated first"
          },
          {
            "label": "حَرْفُ نَفْيٍ",
            "arabic": "negative particle",
            "meaning": "labelled in black ink, e.g. مَا، لَمْ، لَا، لَنْ"
          }
        ]
      },
      "quiz": [
        {
          "q": "What defines a جُمْلَةٌ فِعْلِيَّةٌ?",
          "options": [
            "A sentence containing any verb",
            "A sentence which STARTS with a verb",
            "A sentence with two nouns",
            "A negative sentence"
          ],
          "correct": 1,
          "explanation": "It begins with a فعل; its two essential slots are the verb and the subject/deputy subject."
        },
        {
          "q": "Which two slots are essential in every جملة فعلية?",
          "options": [
            "Verb and Object",
            "Verb and Subject/Deputy Subject",
            "Subject and Object",
            "Verb and Adverb"
          ],
          "correct": 1,
          "explanation": "All other slots (objects, adverbs, حال, تمييز, استثناء) are non-essential."
        },
        {
          "q": "What is the irab of the فَاعِلٌ, and where does it come?",
          "options": [
            "مَنْصُوْبٌ, before the verb",
            "مَرْفُوْعٌ, after the verb (but translated first)",
            "مَجْرُوْرٌ, after the object",
            "مَرْفُوْعٌ, before the verb"
          ],
          "correct": 1,
          "explanation": "ذَهَبَ زَيْدٌ — Zaid went."
        },
        {
          "q": "What is the difference between مُبْتَدَأٌ and فَاعِلٌ?",
          "options": [
            "They are two names for the same thing",
            "مبتدأ = subject of a جملة اسمية; فاعل = subject of a جملة فعلية",
            "فاعل is always a person; مبتدأ is always a thing",
            "مبتدأ is منصوب; فاعل is مرفوع"
          ],
          "correct": 1,
          "explanation": "In English both are simply called the subject."
        },
        {
          "q": "How is a stative verb like فَرِحَ translated?",
          "options": [
            "With an auxiliary verb showing the tense, then the state: 'was/became happy'",
            "As a command",
            "Always as '-ing'",
            "It cannot be translated"
          ],
          "correct": 0,
          "explanation": "Stative verbs translate like a جملة اسمية: is/was/will be + state."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 1 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Is ذَهَبَ زَيْدٌ a جملة اسمية or a جملة فعلية — and why?",
          "options": [
            "جملة اسمية — it contains a noun",
            "جملة فعلية — it starts with a verb",
            "جملة اسمية — Zaid is the subject",
            "Neither — it is a phrase"
          ],
          "correct": 1,
          "explanation": "A جملة فعلية is a sentence which STARTS with a verb; its subject is the فاعل."
        },
        {
          "title": "Book Exercise 1 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In جَاءَ الْأَنْبِيَاءُ, the word الْأَنْبِيَاءُ is…",
          "options": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "نَائِبُ الْفَاعِلِ",
            "فَاعِلٌ"
          ],
          "correct": 3,
          "explanation": "The doer of the action after the verb of a جملة فعلية is the فاعل."
        },
        {
          "title": "Book Exercise 1 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Why does الْمَاءُ in خَرَجَ الْمَاءُ end in a ضَمَّةٌ?",
          "options": [
            "The فاعل is always مَرْفُوْعٌ",
            "It is the خبر",
            "It is a مفعول به",
            "Words with ال are always مرفوعة"
          ],
          "correct": 0,
          "explanation": "'The water came out' — the water is the doer (فاعل), and the فاعل is مَرْفُوْعٌ."
        },
        {
          "title": "Book Exercise 3 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Complete with the correct verb form: … الْأُخْتُ (قَرَأَ)",
          "options": [
            "قَرَأَ",
            "قَرَأَتْ",
            "يَقْرَأُ",
            "قَرَآ"
          ],
          "correct": 1,
          "explanation": "The فاعل (الأخت) is feminine, so the verb must take its feminine form: قَرَأَتْ."
        },
        {
          "title": "Book Exercise 1 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In مَا كَذَبَ الطِّفْلُ, what is مَا labelled as in tarkeeb?",
          "options": [
            "مَا الْمُشَبَّهَةُ بِلَيْسَ",
            "حَرْفُ حَصْرٍ",
            "حَرْفُ نَفْيٍ — labelled in black ink",
            "اِسْمٌ مَوْصُوْلٌ"
          ],
          "correct": 2,
          "explanation": "Before a verb, مَا is a negative particle; it is not one of the main parts of the sentence."
        },
        {
          "title": "Book Exercise 1 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "لَمْ يَقُمِ الْأَعْمَامُ translates as…",
          "options": [
            "The uncles did not stand",
            "The uncles do not stand",
            "The uncles will not stand",
            "The uncles stood"
          ],
          "correct": 0,
          "explanation": "لَمْ + مضارع مجزوم = past negative."
        },
        {
          "title": "Book Exercise 4 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "حَزِنَ الْعَبْدُ translates as…",
          "options": [
            "The servant saddened others",
            "The servant is sad",
            "The servant will grieve",
            "The servant was/became sad"
          ],
          "correct": 3,
          "explanation": "A stative ماضي is translated with an auxiliary + the state: 'was/became sad'."
        },
        {
          "title": "ذَهَبَ زَيْدٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 85)",
          "sentence": "ذَهَبَ زَيْدٌ",
          "translation": "Zaid went.",
          "cells": [
            "ذَهَبَ",
            "زَيْدٌ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "مَا جَاءَ الرَّجُلُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 85)",
          "sentence": "مَا جَاءَ الرَّجُلُ",
          "translation": "The man did not come.",
          "cells": [
            "مَا",
            "جَاءَ",
            "الرَّجُلُ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "جَاءَ الْأَنْبِيَاءُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 2, Part 1)",
          "sentence": "جَاءَ الْأَنْبِيَاءُ",
          "translation": "The prophets came.",
          "cells": [
            "جَاءَ",
            "الْأَنْبِيَاءُ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "خَرَجَ الْمَاءُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 2, Part 1)",
          "sentence": "خَرَجَ الْمَاءُ",
          "translation": "The water came out.",
          "cells": [
            "خَرَجَ",
            "الْمَاءُ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "صَدَقَ الْمُسْلِمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 2, Part 1)",
          "sentence": "صَدَقَ الْمُسْلِمُوْنَ",
          "translation": "The Muslims told the truth.",
          "cells": [
            "صَدَقَ",
            "الْمُسْلِمُوْنَ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "لَنْ يُسَافِرَ الْأَبُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 2, Part 1)",
          "sentence": "لَنْ يُسَافِرَ الْأَبُ",
          "translation": "The father will not travel.",
          "cells": [
            "لَنْ",
            "يُسَافِرَ",
            "الْأَبُ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "صَامَتْ فَاطِمَةُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 2, Part 1)",
          "sentence": "صَامَتْ فَاطِمَةُ",
          "translation": "Fatima fasted.",
          "cells": [
            "صَامَتْ",
            "فَاطِمَةُ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "لَمْ تَقُمِ الْبَنَاتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 2, Part 1)",
          "sentence": "لَمْ تَقُمِ الْبَنَاتُ",
          "translation": "The girls did not stand.",
          "cells": [
            "لَمْ",
            "تَقُمِ",
            "الْبَنَاتُ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "to enter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to enter\"?",
          "options": [
            "دَخَلَ يَدْخُلُ",
            "هَدَى يَهْدِيْ",
            "خَافَ يَخَافُ",
            "خَرَجَ يَخْرُجُ"
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
            "to be guided, find the right way",
            "to guide",
            "to misguide"
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
            "إِتْيَانًا",
            "سُكُوْتًا",
            "قُعُوْدًا"
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
            "أَتَى يَأْتِيْ",
            "قَعَدَ يَقْعُدُ",
            "عَدَلَ يَعْدِلُ"
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
            "to do, work",
            "to guide",
            "to be impatient"
          ],
          "correct": 0
        },
        {
          "title": "to disobey (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَصَى يَعْصِيْ?",
          "options": [
            "مَعْصِيَةً",
            "هِدَايَةً، هُدًى",
            "عَمَلًا",
            "ضَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to do, work",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to do, work\"?",
          "options": [
            "عَمِلَ يَعْمَلُ",
            "خَرَجَ يَخْرُجُ",
            "رَضِيَ يَرْضَى",
            "أَضَلَّ يُضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to do, work",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَمِلَ يَعْمَلُ mean?",
          "options": [
            "to do, work",
            "to misguide",
            "to guide",
            "to be just"
          ],
          "correct": 0
        },
        {
          "title": "to do, work (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَمِلَ يَعْمَلُ?",
          "options": [
            "عَمَلًا",
            "إِطَاعَةً، طَاعَةً",
            "إِفْلَاحًا",
            "رِضْوَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to sit down",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sit down\"?",
          "options": [
            "قَعَدَ يَقْعُدُ",
            "اِهْتَدَى يَهْتَدِيْ",
            "جَمَعَ يَجْمَعُ",
            "سَكَتَ يَسْكُتُ"
          ],
          "correct": 0
        },
        {
          "title": "to sit down",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَعَدَ يَقْعُدُ mean?",
          "options": [
            "to sit down",
            "to come",
            "to fear",
            "to guide"
          ],
          "correct": 0
        },
        {
          "title": "to sit down (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَعَدَ يَقْعُدُ?",
          "options": [
            "قُعُوْدًا",
            "جَزَعًا",
            "عَمَلًا",
            "مَعْصِيَةً"
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
            "ضَلَّ يَضِلُّ",
            "اِهْتَدَى يَهْتَدِيْ",
            "أَتَى يَأْتِيْ"
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
            "to disobey",
            "to collect, gather",
            "to be humble"
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
            "إِفْلَاحًا",
            "عَمَلًا",
            "مَعْصِيَةً"
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
            "أَطَاعَ يُطِيْعُ",
            "قَعَدَ يَقْعُدُ",
            "عَصَى يَعْصِيْ"
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
            "to earn",
            "to enter",
            "to be quiet"
          ],
          "correct": 0
        },
        {
          "title": "to guide (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَدَى يَهْدِيْ?",
          "options": [
            "هِدَايَةً، هُدًى",
            "إِفْلَاحًا",
            "إِطَاعَةً، طَاعَةً",
            "خَوْفًا"
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
            "قَعَدَ يَقْعُدُ",
            "كَسَبَ يَكْسِبُ",
            "عَدَلَ يَعْدِلُ"
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
            "to be just",
            "to obey",
            "to collect, gather"
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
            "عَدْلًا",
            "إِضْلَالًا",
            "جَزَعًا"
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
            "اِهْتَدَى يَهْتَدِيْ",
            "عَدَلَ يَعْدِلُ",
            "جَزِعَ يَجْزَعُ"
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
            "to be quiet",
            "to guide",
            "to sit down"
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
            "ضَلَالًا",
            "رِضْوَانًا",
            "عَمَلًا"
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
            "خَرَجَ يَخْرُجُ",
            "عَمِلَ يَعْمَلُ",
            "عَدَلَ يَعْدِلُ"
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
            "to be guided, find the right way",
            "to be impatient",
            "to sit down"
          ],
          "correct": 0
        },
        {
          "title": "to obey (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَطَاعَ يُطِيْعُ?",
          "options": [
            "إِطَاعَةً، طَاعَةً",
            "جَمْعًا",
            "قُعُوْدًا",
            "كَسْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to collect, gather",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to collect, gather\"?",
          "options": [
            "جَمَعَ يَجْمَعُ",
            "رَضِيَ يَرْضَى",
            "ضَلَّ يَضِلُّ",
            "عَمِلَ يَعْمَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to collect, gather",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَمَعَ يَجْمَعُ mean?",
          "options": [
            "to collect, gather",
            "to come out, leave",
            "to obey",
            "to sit down"
          ],
          "correct": 0
        },
        {
          "title": "to collect, gather (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَمَعَ يَجْمَعُ?",
          "options": [
            "جَمْعًا",
            "دُخُوْلًا",
            "مَعْصِيَةً",
            "سُكُوْتًا"
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
            "خَرَجَ يَخْرُجُ",
            "كَسَبَ يَكْسِبُ",
            "أَفْلَحَ يُفْلِحُ"
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
            "to sit down",
            "to enter",
            "to be just"
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
            "إِضْلَالًا",
            "إِطَاعَةً، طَاعَةً",
            "جَزَعًا"
          ],
          "correct": 0
        },
        {
          "title": "to come out, leave",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come out, leave\"?",
          "options": [
            "خَرَجَ يَخْرُجُ",
            "سَكَتَ يَسْكُتُ",
            "اِهْتَدَى يَهْتَدِيْ",
            "جَمَعَ يَجْمَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to come out, leave",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَرَجَ يَخْرُجُ mean?",
          "options": [
            "to come out, leave",
            "to misguide",
            "to disobey",
            "to be misled"
          ],
          "correct": 0
        },
        {
          "title": "to come out, leave (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَرَجَ يَخْرُجُ?",
          "options": [
            "خُرُوْجًا",
            "خَوْفًا",
            "إِضْلَالًا",
            "اِهْتِدَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to be happy with, approve of",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be happy with, approve of\"?",
          "options": [
            "رَضِيَ يَرْضَى",
            "خَافَ يَخَافُ",
            "دَخَلَ يَدْخُلُ",
            "أَفْلَحَ يُفْلِحُ"
          ],
          "correct": 0
        },
        {
          "title": "to be happy with, approve of",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَضِيَ يَرْضَى mean?",
          "options": [
            "to be happy with, approve of",
            "to sit down",
            "to earn",
            "to guide"
          ],
          "correct": 0
        },
        {
          "title": "to be happy with, approve of (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَضِيَ يَرْضَى?",
          "options": [
            "رِضْوَانًا",
            "إِفْلَاحًا",
            "سُكُوْتًا",
            "عَمَلًا"
          ],
          "correct": 0
        },
        {
          "title": "to be quiet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be quiet\"?",
          "options": [
            "سَكَتَ يَسْكُتُ",
            "أَضَلَّ يُضِلُّ",
            "خَافَ يَخَافُ",
            "خَشَعَ يَخْشَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to be quiet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَكَتَ يَسْكُتُ mean?",
          "options": [
            "to be quiet",
            "to come out, leave",
            "to be humble",
            "to enter"
          ],
          "correct": 0
        },
        {
          "title": "to be quiet (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَكَتَ يَسْكُتُ?",
          "options": [
            "سُكُوْتًا",
            "عَدْلًا",
            "هِدَايَةً، هُدًى",
            "ضَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be misled",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be misled\"?",
          "options": [
            "ضَلَّ يَضِلُّ",
            "عَدَلَ يَعْدِلُ",
            "جَمَعَ يَجْمَعُ",
            "عَمِلَ يَعْمَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to be misled",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَلَّ يَضِلُّ mean?",
          "options": [
            "to be misled",
            "to do, work",
            "to be quiet",
            "to be just"
          ],
          "correct": 0
        },
        {
          "title": "to be misled (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَلَّ يَضِلُّ?",
          "options": [
            "ضَلَالًا",
            "اِهْتِدَاءً",
            "عَمَلًا",
            "رِضْوَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be just",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be just\"?",
          "options": [
            "عَدَلَ يَعْدِلُ",
            "كَسَبَ يَكْسِبُ",
            "عَصَى يَعْصِيْ",
            "خَافَ يَخَافُ"
          ],
          "correct": 0
        },
        {
          "title": "to be just",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَدَلَ يَعْدِلُ mean?",
          "options": [
            "to be just",
            "to earn",
            "to enter",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to be just (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَدَلَ يَعْدِلُ?",
          "options": [
            "عَدْلًا",
            "اِهْتِدَاءً",
            "خَوْفًا",
            "إِفْلَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to be successful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be successful\"?",
          "options": [
            "أَفْلَحَ يُفْلِحُ",
            "رَضِيَ يَرْضَى",
            "عَصَى يَعْصِيْ",
            "أَضَلَّ يُضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to be successful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَفْلَحَ يُفْلِحُ mean?",
          "options": [
            "to be successful",
            "to do, work",
            "to come out, leave",
            "to be misled"
          ],
          "correct": 0
        },
        {
          "title": "to be successful (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَفْلَحَ يُفْلِحُ?",
          "options": [
            "إِفْلَاحًا",
            "خَوْفًا",
            "إِضْلَالًا",
            "سُكُوْتًا"
          ],
          "correct": 0
        },
        {
          "title": "to be guided, find the right way",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be guided, find the right way\"?",
          "options": [
            "اِهْتَدَى يَهْتَدِيْ",
            "خَشَعَ يَخْشَعُ",
            "أَطَاعَ يُطِيْعُ",
            "كَسَبَ يَكْسِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to be guided, find the right way",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِهْتَدَى يَهْتَدِيْ mean?",
          "options": [
            "to be guided, find the right way",
            "to be successful",
            "to be misled",
            "to misguide"
          ],
          "correct": 0
        },
        {
          "title": "to be guided, find the right way (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِهْتَدَى يَهْتَدِيْ?",
          "options": [
            "اِهْتِدَاءً",
            "مَعْصِيَةً",
            "إِتْيَانًا",
            "عَمَلًا"
          ],
          "correct": 0
        },
        {
          "title": "to be impatient",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be impatient\"?",
          "options": [
            "جَزِعَ يَجْزَعُ",
            "دَخَلَ يَدْخُلُ",
            "جَمَعَ يَجْمَعُ",
            "عَدَلَ يَعْدِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to be impatient",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزِعَ يَجْزَعُ mean?",
          "options": [
            "to be impatient",
            "to be happy with, approve of",
            "to be successful",
            "to be humble"
          ],
          "correct": 0
        },
        {
          "title": "to be impatient (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزِعَ يَجْزَعُ?",
          "options": [
            "جَزَعًا",
            "إِفْلَاحًا",
            "خَوْفًا",
            "كَسْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to be humble",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be humble\"?",
          "options": [
            "خَشَعَ يَخْشَعُ",
            "هَدَى يَهْدِيْ",
            "خَرَجَ يَخْرُجُ",
            "سَكَتَ يَسْكُتُ"
          ],
          "correct": 0
        },
        {
          "title": "to be humble",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَشَعَ يَخْشَعُ mean?",
          "options": [
            "to be humble",
            "to enter",
            "to collect, gather",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to be humble (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَشَعَ يَخْشَعُ?",
          "options": [
            "خُشُوْعًا",
            "عَدْلًا",
            "إِطَاعَةً، طَاعَةً",
            "قُعُوْدًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "المفعول به",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "The Object — مَفْعُوْلٌ بِهِ",
          "lines": [
            {
              "html": "The object is the one upon whom the action is carried out. In Arabic, the object is called مَفْعُوْلٌ بِهِ. The مفعول به is مَنْصُوْبٌ. The مفعول به comes after the فَاعِلٌ in both English and Arabic.",
              "list": false
            },
            {
              "html": "شَرِبَ الرَّجُلُ الْمَاءَ — The man drank the water.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "شَرِبَ الرَّجُلُ الْمَاءَ",
                "translation": "The man drank the water.",
                "cells": [
                  "شَرِبَ",
                  "الرَّجُلُ",
                  "الْمَاءَ"
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
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "شَرِبَ الرَّجُلُ الْمَاءَ",
            "kind": "mcq",
            "options": [
              "فاعل: الرَّجُلُ — مفعول به: الْمَاءَ",
              "فاعل: الْمَاءَ — مفعول به: الرَّجُلُ",
              "فاعل: شَرِبَ — مفعول به: الْمَاءَ",
              "فاعل: الرَّجُلُ — مفعول به: شَرِبَ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Negative Sentences with نَكِرَةٌ Words",
          "lines": [
            {
              "html": "In a negative sentence, if the فَاعِلٌ is نَكِرَةٌ, the word 'no' will be added to the فاعل, instead of 'a', and the negative particle will be omitted.",
              "list": false
            },
            {
              "html": "مَا جَاءَ رَجُلٌ — No man came. (NOT: A man did not come.)",
              "list": true,
              "bullet": true
            },
            {
              "html": "If the مفعول به is نكرة, the word 'any' will be added to the مفعول به, and the negative particle will be translated as normal.",
              "list": false
            },
            {
              "html": "مَا شَرِبَ الْوَلَدُ مَاءً — The child did not drink any water.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The words أَحَدٌ (one, anyone) and شَيْءٌ (anything) are commonly used in negative sentences.",
              "list": false
            },
            {
              "html": "مَا سَأَلَ الْوَلَدُ أَحَدًا — The child did not ask anyone.",
              "list": true,
              "bullet": true
            },
            {
              "html": "مَا سَقَطَ شَيْءٌ — Nothing fell.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "مَا جَاءَ رَجُلٌ — رَجُلٌ here is نَكِرَةٌ. How should this be translated?",
            "kind": "mcq",
            "options": [
              "'No man came'",
              "'A man did not come'",
              "'The man did not come'",
              "'Did a man come?'"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Direct and Indirect Object — مَفْعُوْلٌ بِهِ ثَانٍ",
          "lines": [
            {
              "html": "Some verbs can have two objects: I gave YOU a PEN. The first object, the indirect object, is called the مَفْعُوْلٌ بِهِ, and the second object, the direct object, is called the مَفْعُوْلٌ بِهِ ثَانٍ. The مفعول به ثان is also مَنْصُوْبٌ and usually comes after the مفعول به.",
              "list": false
            },
            {
              "html": "جَعَلَ اللهُ مُحَمَّدًا نَبِيًّا — Allah made Muhammad ﷺ a prophet.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "جَعَلَ اللهُ مُحَمَّدًا نَبِيًّا",
                "translation": "Allah made Muhammad ﷺ a prophet.",
                "cells": [
                  "جَعَلَ",
                  "اللهُ",
                  "مُحَمَّدًا",
                  "نَبِيًّا"
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
                        "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Sometimes, the English translation of the مفعول به ثان will have to be adjusted to suit the English style.",
              "list": false
            },
            {
              "html": "أَنْذَرَ الرَّسُوْلُ النَّاسَ الْعَذَابَ — The Prophet warned the people of/about the punishment.",
              "list": true,
              "bullet": true
            },
            {
              "html": "If the مفعول به ثان is an adjective, it must agree with the مفعول به in number and gender. If it is a noun, it does not have to.",
              "list": false
            },
            {
              "table": {
                "title": "The مَفْعُوْلٌ بِهِ ثَانٍ: Adjective vs Noun",
                "headers": [
                  "Adjective",
                  "Noun"
                ],
                "rows": [
                  [
                    "جَعَلَ اللهُ الشَّمْسَ كَبِيْرَةً",
                    "جَعَلَ اللهُ الشَّمْسَ ضِيَاءً"
                  ],
                  [
                    "Must agree with the مفعول به in number and gender",
                    "Does not have to agree with the مفعول به in number nor gender"
                  ]
                ]
              }
            },
            {
              "html": "If an Arabic verb is translated as multiple English words, it is usually better to translate the مفعول به between the two words, e.g. to give to drink.",
              "list": false
            },
            {
              "html": "سَقَى أَحْمَدُ فَاطِمَةَ مَاءً — Ahmad gave Fatima water to drink. (NOT: Ahmad gave to drink Fatima water.)",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "جَعَلَ اللهُ مُحَمَّدًا نَبِيًّا",
            "kind": "mcq",
            "options": [
              "فاعل: لَفْظُ الجَلالَةِ — مفعول به: مُحَمَّدًا — مفعول به ثان: نَبِيًّا",
              "فاعل: لَفْظُ الجَلالَةِ — مفعول به: نَبِيًّا — مفعول به ثان: مُحَمَّدًا",
              "فاعل: مُحَمَّدًا — مفعول به: لَفْظُ الجَلالَةِ — مفعول به ثان: نَبِيًّا",
              "فاعل: لَفْظُ الجَلالَةِ — مفعول به: مُحَمَّدًا"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Objects of the جملة فعلية",
        "rows": [
          {
            "label": "مَفْعُوْلٌ بِهِ",
            "arabic": "Object",
            "meaning": "مَنْصُوْبٌ; comes after the فاعل"
          },
          {
            "label": "مَفْعُوْلٌ بِهِ ثَانٍ",
            "arabic": "Second (direct) object",
            "meaning": "مَنْصُوْبٌ; usually after the مفعول به"
          },
          {
            "label": "Negative + نكرة فاعل",
            "arabic": "مَا جَاءَ رَجُلٌ",
            "meaning": "'No man came'"
          },
          {
            "label": "Negative + نكرة مفعول به",
            "arabic": "مَا شَرِبَ الْوَلَدُ مَاءً",
            "meaning": "'…did not drink ANY water'"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the irab of the مَفْعُوْلٌ بِهِ, and where does it come?",
          "options": [
            "مَرْفُوْعٌ, before the verb",
            "مَنْصُوْبٌ, after the فاعل",
            "مَجْرُوْرٌ, after the فاعل",
            "مَنْصُوْبٌ, before the فاعل always"
          ],
          "correct": 1,
          "explanation": "شَرِبَ الرَّجُلُ الْمَاءَ — the object الْمَاءَ is منصوب."
        },
        {
          "q": "How is مَا جَاءَ رَجُلٌ best translated?",
          "options": [
            "A man did not come",
            "No man came",
            "The man did not come",
            "No men came"
          ],
          "correct": 1,
          "explanation": "Indefinite فاعل in a negative: add 'no' to the subject and drop the negative in translation."
        },
        {
          "q": "How is an indefinite مفعول به in a negative sentence translated?",
          "options": [
            "With 'no' before it",
            "With 'any' before it, keeping the negative on the verb",
            "It is left out",
            "With 'the' before it"
          ],
          "correct": 1,
          "explanation": "مَا شَرِبَ الْوَلَدُ مَاءً = The child did not drink ANY water."
        },
        {
          "q": "In 'I gave you a pen', which is the مَفْعُوْلٌ بِهِ ثَانٍ?",
          "options": [
            "'I'",
            "'you' — the indirect object",
            "'a pen' — the second, direct object",
            "'gave'"
          ],
          "correct": 2,
          "explanation": "First object (indirect) = مفعول به; second object (direct) = مفعول به ثان."
        },
        {
          "q": "Which words are commonly used in negative sentences for 'anyone' and 'anything'?",
          "options": [
            "أَحَدٌ and شَيْءٌ",
            "رَجُلٌ and مَاءٌ",
            "كُلٌّ and بَعْضٌ",
            "مَنْ and مَا"
          ],
          "correct": 0,
          "explanation": "مَا سَأَلَ الْوَلَدُ أَحَدًا — مَا سَقَطَ شَيْءٌ."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 5 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "يَرْزُقُ اللهُ الْعِبَادَ translates as…",
          "options": [
            "Allah provides for the servants",
            "The servants provide for Allah",
            "Allah provided the provision",
            "The servants are provided"
          ],
          "correct": 0,
          "explanation": "فاعل = لَفْظُ الجَلالَةِ; مفعول به = الْعِبَادَ."
        },
        {
          "title": "Book Exercise 5 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In أَكَلَ الْوَلَدُ اللَّحْمَ, the word اللَّحْمَ is…",
          "options": [
            "فَاعِلٌ",
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ"
          ],
          "correct": 2,
          "explanation": "The meat is what the action falls upon — the object, مَنْصُوْبٌ, after the فاعل."
        },
        {
          "title": "Book Exercise 5 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In لَا يَخَافُ الْكَافِرُ اللهَ, why does لَفْظَ الجَلالَةِ end in a فَتْحَةٌ?",
          "options": [
            "It is the فاعل",
            "لَا makes the following noun منصوبا",
            "It is a مستثنى",
            "It is the مفعول به, and the مفعول به is مَنْصُوْبٌ"
          ],
          "correct": 3,
          "explanation": "The disbeliever (فاعل، مرفوع) does not fear Allah (مفعول به، منصوب)."
        },
        {
          "title": "Book Exercise 7 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In جَعَلَ اللهُ الْقُرْآنَ نُوْرًا, the word نُوْرًا is…",
          "options": [
            "مَفْعُوْلٌ بِهِ ثَانٍ — the second (direct) object",
            "حَالٌ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "جَعَلَ takes two objects: الْقُرْآنَ (مفعول به) and نُوْرًا (مفعول به ثان) — both منصوب."
        },
        {
          "title": "Book Exercise 6 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Which sentence means 'No teacher came'?",
          "options": [
            "مَا جَاءَ الْمُعَلِّمُ",
            "لَمْ يَأْتِ مُعَلِّمٌ",
            "جَاءَ مُعَلِّمٌ",
            "لَمْ يَأْتِ الْمُعَلِّمُ"
          ],
          "correct": 1,
          "explanation": "Negative + نكرة فاعل → 'no' is added to the subject and the negative is dropped in translation."
        },
        {
          "title": "Book Exercise 6 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In مَا رَأَى الْمُعَلِّمُ أَحَدًا, the word أَحَدًا is…",
          "options": [
            "the فاعل — 'no one saw the teacher'",
            "a حال",
            "the مفعول به — 'anyone' in a negative sentence",
            "a مفعول فيه"
          ],
          "correct": 2,
          "explanation": "أَحَدٌ (anyone) is a common منصوب object in negative sentences."
        },
        {
          "title": "Book Exercise 7 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "سَقَى الْوَلَدُ الْأُمَّ مَاءً translates as…",
          "options": [
            "The mother gave the boy water",
            "The boy gave the mother water to drink",
            "The boy drank the mother's water",
            "The boy gave to drink the mother water"
          ],
          "correct": 1,
          "explanation": "The مفعول به is translated between 'gave…to drink'."
        },
        {
          "title": "شَرِبَ الرَّجُلُ الْمَاءَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 88)",
          "sentence": "شَرِبَ الرَّجُلُ الْمَاءَ",
          "translation": "The man drank the water.",
          "cells": [
            "شَرِبَ",
            "الرَّجُلُ",
            "الْمَاءَ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "بَعَثَ اللهُ النَّبِيِّيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 2, Part 1)",
          "sentence": "بَعَثَ اللهُ النَّبِيِّيْنَ",
          "translation": "Allah sent the prophets.",
          "cells": [
            "بَعَثَ",
            "اللهُ",
            "النَّبِيِّيْنَ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "خَلَقَ اللهُ السَّمَاوَاتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 2, Part 1)",
          "sentence": "خَلَقَ اللهُ السَّمَاوَاتِ",
          "translation": "Allah created the heavens.",
          "cells": [
            "خَلَقَ",
            "اللهُ",
            "السَّمَاوَاتِ"
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
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "لَا يَخَافُ الْكَافِرُ اللهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 2, Part 1)",
          "sentence": "لَا يَخَافُ الْكَافِرُ اللهَ",
          "translation": "The disbeliever does not fear Allah.",
          "cells": [
            "لَا",
            "يَخَافُ",
            "الْكَافِرُ",
            "اللهَ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "جَعَلَ اللهُ مُحَمَّدًا نَبِيًّا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 90)",
          "sentence": "جَعَلَ اللهُ مُحَمَّدًا نَبِيًّا",
          "translation": "Allah made Muhammad ﷺ a prophet.",
          "cells": [
            "جَعَلَ",
            "اللهُ",
            "مُحَمَّدًا",
            "نَبِيًّا"
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
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "سَقَى الْوَلَدُ الْأُمَّ مَاءً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 2, Part 1)",
          "sentence": "سَقَى الْوَلَدُ الْأُمَّ مَاءً",
          "translation": "The boy gave the mother water to drink.",
          "cells": [
            "سَقَى",
            "الْوَلَدُ",
            "الْأُمَّ",
            "مَاءً"
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
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "أَنْذَرَ الرُّسُلُ النَّاسَ الْعَذَابَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 2, Part 1)",
          "sentence": "أَنْذَرَ الرُّسُلُ النَّاسَ الْعَذَابَ",
          "translation": "The messengers warned the people of the punishment.",
          "cells": [
            "أَنْذَرَ",
            "الرُّسُلُ",
            "النَّاسَ",
            "الْعَذَابَ"
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
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "مَا سَأَلَ الْوَلَدُ أَحَدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 2, Part 1)",
          "sentence": "مَا سَأَلَ الْوَلَدُ أَحَدًا",
          "translation": "The child did not ask anyone.",
          "cells": [
            "مَا",
            "سَأَلَ",
            "الْوَلَدُ",
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
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "devil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"devil\"?",
          "options": [
            "شَيْطَانٌ",
            "كَسَا يَكْسُوْ",
            "عِلْمٌ",
            "أَنْفَقَ يُنْفِقُ"
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
            "path",
            "sins",
            "to feed"
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
            "ذُنُوْبٌ",
            "تُجَّارٌ",
            "أَدْيَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "path",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"path\"?",
          "options": [
            "صِرَاطٌ",
            "كَذَّبَ يُكَذِّبُ",
            "تَاجِرٌ",
            "آتَى يُؤْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "path",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صِرَاطٌ mean?",
          "options": [
            "path",
            "to give",
            "honey",
            "to promise"
          ],
          "correct": 0
        },
        {
          "title": "path (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صِرَاطٌ?",
          "options": [
            "صُرُطٌ",
            "شَيَاطِيْنُ",
            "آنِيَةٌ",
            "أَدْيَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "honey",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"honey\"?",
          "options": [
            "عَسَلٌ",
            "حَاجٌّ",
            "مَلَأَ يَمْلَأُ",
            "دِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "honey",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَسَلٌ mean?",
          "options": [
            "honey",
            "sins",
            "to give to drink",
            "to feed"
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
            "أَنْفَقَ يُنْفِقُ",
            "وَعَدَ يَعِدُ",
            "حَاجٌّ"
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
            "to promise",
            "to give to drink",
            "businessman"
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
            "لُحُوْمٌ",
            "شَيَاطِيْنُ",
            "حُجَّاجٌ"
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
            "اِتَّخَذَ يَتَّخِذُ",
            "آتَى يُؤْتِيْ",
            "أَطْعَمَ يُطْعِمُ"
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
            "to give",
            "to kill, murder",
            "honey"
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
            "ذُنُوْبٌ",
            "تُجَّارٌ",
            "حُجَّاجٌ"
          ],
          "correct": 0
        },
        {
          "title": "container",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"container\"?",
          "options": [
            "إِنَاءٌ",
            "صِرَاطٌ",
            "وَهَبَ يَهَبُ",
            "لَحْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "container",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِنَاءٌ mean?",
          "options": [
            "container",
            "devil",
            "to promise",
            "to give, grant"
          ],
          "correct": 0
        },
        {
          "title": "container (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِنَاءٌ?",
          "options": [
            "آنِيَةٌ",
            "تُجَّارٌ",
            "ذُنُوْبٌ",
            "عُلُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "businessman",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"businessman\"?",
          "options": [
            "تَاجِرٌ",
            "إِنَاءٌ",
            "أَرَى يُرِيْ",
            "لَحْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "businessman",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَاجِرٌ mean?",
          "options": [
            "businessman",
            "to spend",
            "container",
            "to give, grant"
          ],
          "correct": 0
        },
        {
          "title": "businessman (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَاجِرٌ?",
          "options": [
            "تُجَّارٌ",
            "عُلُوْمٌ",
            "أَدْيَانٌ",
            "لُحُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "Haji (one who has performed Hajj)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Haji (one who has performed Hajj)\"?",
          "options": [
            "حَاجٌّ",
            "قَتَلَ يَقْتُلُ",
            "آتَى يُؤْتِيْ",
            "أَنْفَقَ يُنْفِقُ"
          ],
          "correct": 0
        },
        {
          "title": "Haji (one who has performed Hajj)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاجٌّ mean?",
          "options": [
            "Haji (one who has performed Hajj)",
            "meat",
            "religion, retribution",
            "to reject"
          ],
          "correct": 0
        },
        {
          "title": "Haji (one who has performed Hajj) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَاجٌّ?",
          "options": [
            "حُجَّاجٌ",
            "تُجَّارٌ",
            "عُلُوْمٌ",
            "آنِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "religion, retribution",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"religion, retribution\"?",
          "options": [
            "دِيْنٌ",
            "أَنْفَقَ يُنْفِقُ",
            "أَرَى يُرِيْ",
            "كَسَا يَكْسُوْ"
          ],
          "correct": 0
        },
        {
          "title": "religion, retribution",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دِيْنٌ mean?",
          "options": [
            "religion, retribution",
            "honey",
            "to promise",
            "meat"
          ],
          "correct": 0
        },
        {
          "title": "religion, retribution (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دِيْنٌ?",
          "options": [
            "أَدْيَانٌ",
            "لُحُوْمٌ",
            "شَيَاطِيْنُ",
            "آنِيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "sins",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sins\"?",
          "options": [
            "ذَنْبٌ",
            "اِتَّخَذَ يَتَّخِذُ",
            "وَعَدَ يَعِدُ",
            "شَيْطَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "sins",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَنْبٌ mean?",
          "options": [
            "sins",
            "to give to drink",
            "meat",
            "to kill, murder"
          ],
          "correct": 0
        },
        {
          "title": "sins (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ذَنْبٌ?",
          "options": [
            "ذُنُوْبٌ",
            "آنِيَةٌ",
            "تُجَّارٌ",
            "عُلُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to kill, murder",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to kill, murder\"?",
          "options": [
            "قَتَلَ يَقْتُلُ",
            "أَطْعَمَ يُطْعِمُ",
            "كَسَا يَكْسُوْ",
            "أَرَى يُرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to kill, murder",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَتَلَ يَقْتُلُ mean?",
          "options": [
            "to kill, murder",
            "honey",
            "to take as",
            "Haji (one who has performed Hajj)"
          ],
          "correct": 0
        },
        {
          "title": "to kill, murder (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَتَلَ يَقْتُلُ?",
          "options": [
            "قَتْلًا",
            "مَلْأً",
            "وَعْدًا",
            "إِطْعَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reject\"?",
          "options": [
            "كَذَّبَ يُكَذِّبُ",
            "قَتَلَ يَقْتُلُ",
            "آتَى يُؤْتِيْ",
            "عِلْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَذَّبَ يُكَذِّبُ mean?",
          "options": [
            "to reject",
            "to spend",
            "path",
            "to take as"
          ],
          "correct": 0
        },
        {
          "title": "to reject (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَّبَ يُكَذِّبُ?",
          "options": [
            "تَكْذِيْبًا",
            "هِبَةً",
            "مَلْأً",
            "كَسْوًا"
          ],
          "correct": 0
        },
        {
          "title": "to clothe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to clothe\"?",
          "options": [
            "كَسَا يَكْسُوْ",
            "صِرَاطٌ",
            "حَاجٌّ",
            "أَنْفَقَ يُنْفِقُ"
          ],
          "correct": 0
        },
        {
          "title": "to clothe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَسَا يَكْسُوْ mean?",
          "options": [
            "to clothe",
            "container",
            "businessman",
            "Haji (one who has performed Hajj)"
          ],
          "correct": 0
        },
        {
          "title": "to clothe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَسَا يَكْسُوْ?",
          "options": [
            "كَسْوًا",
            "اِتِّخَاذًا",
            "سَقْيًا",
            "إِيْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to fill",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fill\"?",
          "options": [
            "مَلَأَ يَمْلَأُ",
            "حَاجٌّ",
            "ذَنْبٌ",
            "سَقَى يَسْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to fill",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَلَأَ يَمْلَأُ mean?",
          "options": [
            "to fill",
            "to promise",
            "religion, retribution",
            "Haji (one who has performed Hajj)"
          ],
          "correct": 0
        },
        {
          "title": "to fill (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَلَأَ يَمْلَأُ?",
          "options": [
            "مَلْأً",
            "كَسْوًا",
            "إِيْتَاءً",
            "إِنْفَاقًا"
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
            "عِلْمٌ",
            "ذَنْبٌ",
            "اِتَّخَذَ يَتَّخِذُ"
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
            "knowledge",
            "to take as",
            "honey"
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
            "مَلْأً",
            "إِيْتَاءً",
            "إِنْفَاقًا"
          ],
          "correct": 0
        },
        {
          "title": "to give, grant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give, grant\"?",
          "options": [
            "وَهَبَ يَهَبُ",
            "أَطْعَمَ يُطْعِمُ",
            "تَاجِرٌ",
            "إِنَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to give, grant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَهَبَ يَهَبُ mean?",
          "options": [
            "to give, grant",
            "devil",
            "to promise",
            "Haji (one who has performed Hajj)"
          ],
          "correct": 0
        },
        {
          "title": "to give, grant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَهَبَ يَهَبُ?",
          "options": [
            "هِبَةً",
            "إِطْعَامًا",
            "إِنْفَاقًا",
            "وَعْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to take as",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take as\"?",
          "options": [
            "اِتَّخَذَ يَتَّخِذُ",
            "صِرَاطٌ",
            "إِنَاءٌ",
            "سَقَى يَسْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to take as",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّخَذَ يَتَّخِذُ mean?",
          "options": [
            "to take as",
            "to feed",
            "knowledge",
            "to fill"
          ],
          "correct": 0
        },
        {
          "title": "to take as (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّخَذَ يَتَّخِذُ?",
          "options": [
            "اِتِّخَاذًا",
            "سَقْيًا",
            "هِبَةً",
            "مَلْأً"
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
            "إِنَاءٌ",
            "لَحْمٌ",
            "أَرَى يُرِيْ"
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
            "to show",
            "container",
            "Haji (one who has performed Hajj)"
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
            "سَقْيًا",
            "مَلْأً",
            "تَكْذِيْبًا"
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
            "كَذَّبَ يُكَذِّبُ",
            "آتَى يُؤْتِيْ",
            "شَيْطَانٌ"
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
            "to give to drink",
            "path",
            "to promise"
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
            "كَسْوًا",
            "تَكْذِيْبًا",
            "إِيْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to feed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to feed\"?",
          "options": [
            "أَطْعَمَ يُطْعِمُ",
            "مَلَأَ يَمْلَأُ",
            "قَتَلَ يَقْتُلُ",
            "عِلْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to feed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَطْعَمَ يُطْعِمُ mean?",
          "options": [
            "to feed",
            "religion, retribution",
            "devil",
            "to reject"
          ],
          "correct": 0
        },
        {
          "title": "to feed (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَطْعَمَ يُطْعِمُ?",
          "options": [
            "إِطْعَامًا",
            "كَسْوًا",
            "قَتْلًا",
            "إِرَاءَةً"
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
            "عَسَلٌ",
            "دِيْنٌ",
            "آتَى يُؤْتِيْ"
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
            "religion, retribution",
            "sins",
            "knowledge"
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
            "كَسْوًا",
            "تَكْذِيْبًا",
            "هِبَةً"
          ],
          "correct": 0
        },
        {
          "title": "to give to drink",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give to drink\"?",
          "options": [
            "سَقَى يَسْقِيْ",
            "آتَى يُؤْتِيْ",
            "حَاجٌّ",
            "عِلْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to give to drink",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَقَى يَسْقِيْ mean?",
          "options": [
            "to give to drink",
            "to fill",
            "container",
            "Haji (one who has performed Hajj)"
          ],
          "correct": 0
        },
        {
          "title": "to give to drink (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَقَى يَسْقِيْ?",
          "options": [
            "سَقْيًا",
            "قَتْلًا",
            "إِطْعَامًا",
            "إِنْفَاقًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "نائب الفاعل",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "نَائِبُ الْفَاعِلِ",
          "lines": [
            {
              "html": "If the verb is in the passive form, فِعْلٌ مَجْهُوْلٌ, the فَاعِلٌ is removed and the مَفْعُوْلٌ بِهِ takes the place of the فاعل. In this case, the مفعول به is now called نَائِبُ الْفَاعِلِ; the deputy subject. The نائب الفاعل follows the same rules as the فاعل: it is مَرْفُوْعٌ and the gender of the verb will agree with it.",
              "list": false
            },
            {
              "html": "In tarkib, if the verb is مَجْهُوْلٌ, it must be labelled as such (فِعْلٌ مَجْهُوْلٌ). If it is مَعْلُوْمٌ, it is not necessary to label it as معلوم as this is the default state.",
              "list": false
            },
            {
              "html": "سَمِعَتِ الْبِنْتُ الْقُرْآنَ — The girl heard the Quran. (فِعْلٌ مَعْلُوْمٌ — active)",
              "list": true,
              "bullet": true
            },
            {
              "html": "سُمِعَ الْقُرْآنُ — The Quran was heard. (فِعْلٌ مَجْهُوْلٌ — passive)",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "سَمِعَتِ الْبِنْتُ الْقُرْآنَ",
                "translation": "The girl heard the Quran.",
                "cells": [
                  "سَمِعَتِ",
                  "الْبِنْتُ",
                  "الْقُرْآنَ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "tarkeebDiagram": {
                "sentence": "سُمِعَ الْقُرْآنُ",
                "translation": "The Quran was heard.",
                "cells": [
                  "سُمِعَ",
                  "الْقُرْآنُ"
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
                        "role": "نَائِبُ الْفَاعِلِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "Translation of the فِعْلٌ مَجْهُوْلٌ",
                "headers": [
                  "اَلْفِعْلُ",
                  "Tense",
                  "Translation"
                ],
                "rows": [
                  [
                    "سُمِعَ الْقُرْآنُ (اَلْمَاضِيْ)",
                    "Past",
                    "The Quran was heard."
                  ],
                  [
                    "يُسْمَعُ الْقُرْآنُ (اَلْمُضَارِعُ)",
                    "Present Habitual",
                    "The Quran is heard."
                  ],
                  [
                    "يُسْمَعُ الْقُرْآنُ (اَلْمُضَارِعُ)",
                    "Present Continuous",
                    "The Quran is being heard."
                  ],
                  [
                    "يُسْمَعُ الْقُرْآنُ (اَلْمُضَارِعُ)",
                    "Future",
                    "The Quran will be heard."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "غَفَرَ اللهُ الذَّنْبَ",
            "kind": "mcq",
            "options": [
              "غُفِرَ الذَّنْبُ",
              "غَفَرَ الذَّنْبُ",
              "غُفِرَ الذَّنْبَ",
              "غُفِرَ اللهُ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The فِعْلٌ مَجْهُوْلٌ of a Verb with Two مَفْعُوْلٌ بِهِ",
          "lines": [
            {
              "html": "If a verb has two مفعول به, the first will become the نَائِبُ الْفَاعِلِ and will be مَرْفُوْعٌ. The second will remain the مَفْعُوْلٌ بِهِ and will remain مَنْصُوْبٌ.",
              "list": false
            },
            {
              "html": "أَعْطَى اللهُ زَيْدًا مَالًا — Allah gave Zaid wealth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "أُعْطِيَ زَيْدٌ مَالًا — Zaid was given wealth.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "أُعْطِيَ زَيْدٌ مَالًا",
                "translation": "Zaid was given wealth.",
                "cells": [
                  "أُعْطِيَ",
                  "زَيْدٌ",
                  "مَالًا"
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
                        "role": "نَائِبُ الْفَاعِلِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "أَعْطَى اللهُ زَيْدًا مَالًا",
            "kind": "mcq",
            "options": [
              "أُعْطِيَ زَيْدٌ مَالًا",
              "أُعْطِيَ زَيْدًا مَالًا",
              "أُعْطِيَ اللهُ مَالًا",
              "أُعْطِيَ زَيْدٌ مَالٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "نَائِبُ الْفَاعِلِ",
        "rows": [
          {
            "label": "فِعْلٌ مَجْهُوْلٌ",
            "arabic": "passive verb",
            "meaning": "must be labelled مجهول in tarkeeb"
          },
          {
            "label": "نَائِبُ الْفَاعِلِ",
            "arabic": "deputy subject",
            "meaning": "مَرْفُوْعٌ; verb agrees with it in gender"
          },
          {
            "label": "Two-object verbs",
            "arabic": "أُعْطِيَ زَيْدٌ مَالًا",
            "meaning": "first object → نائب الفاعل (مرفوع); second stays مفعول به (منصوب)"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the نَائِبُ الْفَاعِلِ?",
          "options": [
            "The subject of a جملة اسمية",
            "The object that takes the place of the removed فاعل when the verb is مجهول",
            "A second object",
            "A negative particle"
          ],
          "correct": 1,
          "explanation": "The deputy subject: سُمِعَ الْقُرْآنُ — the Quran 'deputises' for the removed subject."
        },
        {
          "q": "What is the irab of the نائب الفاعل?",
          "options": [
            "مَنْصُوْبٌ",
            "مَجْرُوْرٌ",
            "مَرْفُوْعٌ",
            "مَجْزُوْمٌ"
          ],
          "correct": 2,
          "explanation": "It follows the same rules as the فاعل — it is مرفوع and the verb agrees with its gender."
        },
        {
          "q": "In tarkeeb, when must the verb be labelled with its voice?",
          "options": [
            "Always, for both معلوم and مجهول",
            "Only when it is مجهول — معلوم is the default",
            "Only when it is معلوم",
            "Never"
          ],
          "correct": 1,
          "explanation": "فِعْلٌ مَجْهُوْلٌ must be labelled; معلوم need not be."
        },
        {
          "q": "يُسْمَعُ الْقُرْآنُ can be translated as…",
          "options": [
            "The Quran was heard",
            "The Quran is heard / is being heard / will be heard",
            "He hears the Quran",
            "Listen to the Quran!"
          ],
          "correct": 1,
          "explanation": "Passive مضارع covers the three مضارع tenses."
        },
        {
          "q": "When a two-object verb becomes مجهول, what happens?",
          "options": [
            "Both objects become مرفوع",
            "The first object becomes نائب الفاعل (مرفوع); the second stays مفعول به (منصوب)",
            "The second object becomes نائب الفاعل",
            "Both objects stay منصوب"
          ],
          "correct": 1,
          "explanation": "أُعْطِيَ زَيْدٌ مَالًا — Zaid was given wealth."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 9 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In خُلِقَ آدَمُ, the word آدَمُ is…",
          "options": [
            "فَاعِلٌ",
            "نَائِبُ الْفَاعِلِ",
            "مَفْعُوْلٌ بِهِ",
            "مُبْتَدَأٌ"
          ],
          "correct": 1,
          "explanation": "With a فعل مجهول, the object takes the place of the removed فاعل: the deputy subject."
        },
        {
          "title": "Book Exercise 9 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Why is الْمَاءُ مَرْفُوْعٌ in مَا شُرِبَ الْمَاءُ?",
          "options": [
            "The نائب الفاعل follows the same rules as the فاعل — it is مَرْفُوْعٌ",
            "مَا makes the following words مرفوعة",
            "It is the مبتدأ",
            "It is a مفعول به"
          ],
          "correct": 0,
          "explanation": "'The water was not drunk' — the deputy subject of the passive verb is مرفوع."
        },
        {
          "title": "Book Exercise 9 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Why is the verb feminine in خُلِقَتِ الْجَنَّةُ?",
          "options": [
            "Passive verbs are always feminine",
            "The verb agrees with the removed فاعل",
            "The verb agrees with the نائب الفاعل (الْجَنَّةُ), which is feminine",
            "It is a pronunciation rule before ال"
          ],
          "correct": 2,
          "explanation": "Like the فاعل, the نائب الفاعل determines the gender of the verb."
        },
        {
          "title": "Book Exercise 10 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Rewrite with a فعل مجهول: هَدَى اللهُ النَّاسَ",
          "options": [
            "هُدِيَ النَّاسُ",
            "هَدَى النَّاسُ",
            "هُدِيَ النَّاسَ",
            "يَهْدِي النَّاسُ"
          ],
          "correct": 0,
          "explanation": "The فاعل is dropped; النَّاسُ becomes the مرفوع deputy subject."
        },
        {
          "title": "Book Exercise 12 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In أُوْتِيَ مُوْسَى التَّوْرَاةَ, the word التَّوْرَاةَ is…",
          "options": [
            "نَائِبُ الْفَاعِلِ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ بِهِ — the second object stays مَنْصُوْبٌ"
          ],
          "correct": 3,
          "explanation": "With a two-object verb, the FIRST object (مُوْسَى) becomes نائب الفاعل; the second remains مفعول به."
        },
        {
          "title": "Book Exercise 9 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "لَنْ يُعْبَدَ الصَّنَمُ translates as…",
          "options": [
            "The idol was not worshipped",
            "The idol does not worship",
            "The idol will NOT be worshipped",
            "Do not worship the idol!"
          ],
          "correct": 2,
          "explanation": "لَنْ + passive مضارع منصوب = emphatic future negative passive."
        },
        {
          "title": "Book Exercise 12 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "جُعِلَ نُوْحٌ نَبِيًّا translates as…",
          "options": [
            "Nuh made a prophet",
            "Nuh was made a prophet",
            "Allah made Nuh a prophet",
            "A prophet was made Nuh"
          ],
          "correct": 1,
          "explanation": "Passive of a two-object verb: نُوْحٌ = نائب الفاعل, نَبِيًّا stays منصوب."
        },
        {
          "title": "سُمِعَ الْقُرْآنُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 93)",
          "sentence": "سُمِعَ الْقُرْآنُ",
          "translation": "The Quran was heard.",
          "cells": [
            "سُمِعَ",
            "الْقُرْآنُ"
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
                  "role": "نَائِبُ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "خُلِقَ آدَمُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 2, Part 1)",
          "sentence": "خُلِقَ آدَمُ",
          "translation": "Adam was created.",
          "cells": [
            "خُلِقَ",
            "آدَمُ"
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
                  "role": "نَائِبُ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "خُلِقَتِ السَّمَاءُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 2, Part 1)",
          "sentence": "خُلِقَتِ السَّمَاءُ",
          "translation": "The sky was created.",
          "cells": [
            "خُلِقَتِ",
            "السَّمَاءُ"
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
                  "role": "نَائِبُ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "بُعِثَ الْأَنْبِيَاءُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 2, Part 1)",
          "sentence": "بُعِثَ الْأَنْبِيَاءُ",
          "translation": "The prophets were sent.",
          "cells": [
            "بُعِثَ",
            "الْأَنْبِيَاءُ"
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
                  "role": "نَائِبُ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "مَا شُرِبَ الْمَاءُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 2, Part 1)",
          "sentence": "مَا شُرِبَ الْمَاءُ",
          "translation": "The water was not drunk.",
          "cells": [
            "مَا",
            "شُرِبَ",
            "الْمَاءُ"
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
                  "role": "فِعْلٌ مَجْهُوْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَائِبُ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "أُعْطِيَ زَيْدٌ مَالًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 95)",
          "sentence": "أُعْطِيَ زَيْدٌ مَالًا",
          "translation": "Zaid was given wealth.",
          "cells": [
            "أُعْطِيَ",
            "زَيْدٌ",
            "مَالًا"
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
                  "role": "نَائِبُ الْفَاعِلِ"
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
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ",
            "فَاعِلٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "أُوْتِيَ مُوْسَى التَّوْرَاةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 2, Part 1)",
          "sentence": "أُوْتِيَ مُوْسَى التَّوْرَاةَ",
          "translation": "Musa was given the Tawrah.",
          "cells": [
            "أُوْتِيَ",
            "مُوْسَى",
            "التَّوْرَاةَ"
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
                  "role": "نَائِبُ الْفَاعِلِ"
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
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ",
            "فَاعِلٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "وُعِدَ الْمُؤْمِنُوْنَ الْجَنَّةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 2, Part 1)",
          "sentence": "وُعِدَ الْمُؤْمِنُوْنَ الْجَنَّةَ",
          "translation": "The believers were promised Paradise.",
          "cells": [
            "وُعِدَ",
            "الْمُؤْمِنُوْنَ",
            "الْجَنَّةَ"
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
                  "role": "نَائِبُ الْفَاعِلِ"
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
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ",
            "فَاعِلٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "God-fearing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"God-fearing\"?",
          "options": [
            "مُتَّقٍ",
            "مَلَكٌ",
            "مُبَارَكٌ",
            "نَاصِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "God-fearing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُتَّقٍ mean?",
          "options": [
            "God-fearing",
            "happy",
            "migrant",
            "helper"
          ],
          "correct": 0
        },
        {
          "title": "God-fearing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُتَّقٍ?",
          "options": [
            "مُتَّقُوْنَ",
            "أَنْصَارٌ",
            "مَلَائِكَةٌ",
            "أَغْنِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "happy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"happy\"?",
          "options": [
            "مَسْرُوْرٌ",
            "جُزْءٌ",
            "مُتَّقٍ",
            "مُبَارَكٌ"
          ],
          "correct": 0
        },
        {
          "title": "happy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسْرُوْرٌ mean?",
          "options": [
            "happy",
            "migrant",
            "lesson",
            "rich, independent"
          ],
          "correct": 0
        },
        {
          "title": "happy (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَسْرُوْرٌ?",
          "options": [
            "مَسْرُوْرُوْنَ",
            "مُتَّقُوْنَ",
            "دُرُوْسٌ",
            "أَنْصَارٌ"
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
            "دَرْسٌ",
            "نَاصِرٌ",
            "مُهَاجِرٌ"
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
            "lesson",
            "migrant",
            "helper"
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
            "أَنْصَارٌ",
            "أَغْنِيَاءُ",
            "أَجْزَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "migrant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"migrant\"?",
          "options": [
            "مُهَاجِرٌ",
            "شِرْكٌ",
            "مُبَارَكٌ",
            "جُزْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "migrant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُهَاجِرٌ mean?",
          "options": [
            "migrant",
            "part",
            "helper",
            "polytheism"
          ],
          "correct": 0
        },
        {
          "title": "migrant (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُهَاجِرٌ?",
          "options": [
            "مُهَاجِرُوْنَ",
            "مُتَّقُوْنَ",
            "أَنْصَارٌ",
            "مَسْرُوْرُوْنَ"
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
            "مَسْرُوْرٌ",
            "شِرْكٌ",
            "جُزْءٌ"
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
            "migrant",
            "rich, independent",
            "God-fearing"
          ],
          "correct": 0
        },
        {
          "title": "helper (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَاصِرٌ?",
          "options": [
            "أَنْصَارٌ",
            "أَغْنِيَاءُ",
            "أَجْزَاءٌ",
            "مَلَائِكَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "part",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"part\"?",
          "options": [
            "جُزْءٌ",
            "مُبَارَكٌ",
            "نَاصِرٌ",
            "مَلَكٌ"
          ],
          "correct": 0
        },
        {
          "title": "part",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جُزْءٌ mean?",
          "options": [
            "part",
            "God-fearing",
            "angel",
            "lesson"
          ],
          "correct": 0
        },
        {
          "title": "part (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جُزْءٌ?",
          "options": [
            "أَجْزَاءٌ",
            "مُهَاجِرُوْنَ",
            "مَسْرُوْرُوْنَ",
            "أَغْنِيَاءُ"
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
            "مُتَّقٍ",
            "غَنِيٌّ",
            "مَسْرُوْرٌ"
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
            "angel",
            "part",
            "rich, independent"
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
            "أَجْزَاءٌ",
            "مَلَائِكَةٌ",
            "أَغْنِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "polytheism",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"polytheism\"?",
          "options": [
            "شِرْكٌ",
            "نَاصِرٌ",
            "دَرْسٌ",
            "جُزْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "polytheism",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شِرْكٌ mean?",
          "options": [
            "polytheism",
            "angel",
            "happy",
            "migrant"
          ],
          "correct": 0
        },
        {
          "title": "rich, independent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"rich, independent\"?",
          "options": [
            "غَنِيٌّ",
            "مَلَكٌ",
            "جُزْءٌ",
            "مُتَّقٍ"
          ],
          "correct": 0
        },
        {
          "title": "rich, independent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَنِيٌّ mean?",
          "options": [
            "rich, independent",
            "helper",
            "happy",
            "part"
          ],
          "correct": 0
        },
        {
          "title": "rich, independent (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غَنِيٌّ?",
          "options": [
            "أَغْنِيَاءُ",
            "أَنْصَارٌ",
            "مَلَائِكَةٌ",
            "مُهَاجِرُوْنَ"
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
            "مُتَّقٍ",
            "مَلَكٌ",
            "نَاصِرٌ"
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
            "polytheism",
            "angel",
            "happy"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "المفعول فيه",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "مَفْعُوْلٌ فِيْهِ",
          "lines": [
            {
              "html": "An adverb gives more information regarding the verb. Some adverbs show the time or place in which the action takes place. In Arabic, this is called مَفْعُوْلٌ فِيْهِ. The مفعول فيه is مَنْصُوْبٌ. It can come at the beginning or at the end of the sentence in both Arabic and English.",
              "list": false
            },
            {
              "html": "جَاءَ الضُّيُوْفُ الْبَارِحَةَ — The guests came last night.",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلْبَارِحَةَ جَاءَ الضُّيُوْفُ — Last night, the guests came.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "جَاءَ الضُّيُوْفُ الْبَارِحَةَ",
                "translation": "The guests came last night.",
                "cells": [
                  "جَاءَ",
                  "الضُّيُوْفُ",
                  "الْبَارِحَةَ"
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
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "يَنَامُ النَّاسُ لَيْلًا",
            "kind": "mcq",
            "options": [
              "لَيْلًا — at night",
              "النَّاسُ — the people",
              "لَيْلًا — night",
              "يَنَامُ — sleep"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Translation of the مَفْعُوْلٌ فِيْهِ",
          "lines": [
            {
              "html": "1. Words like 'at', 'on', 'in', etc. may need to be added to the translation of a مفعول فيه.",
              "list": false
            },
            {
              "html": "صَلَّى الرَّجُلُ لَيْلًا — The man prayed at night.",
              "list": true,
              "bullet": true
            },
            {
              "html": "2. The word يَوْمٌ on its own means 'day'; with ال (اَلْيَوْمَ) it means 'today'. 3. أَحْيَانٌ, the plural of حِيْنٌ (time), is translated as 'sometimes'. 4. The word قَطُّ is used with a negative فِعْلٌ مَاضٍ.",
              "list": false
            },
            {
              "html": "مَا عَبَدَ الْأَنْبِيَاءُ صَنَمًا قَطُّ — The prophets did not EVER worship an idol.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "مَا غَابَ خَالِدٌ قَطُّ",
            "kind": "mcq",
            "options": [
              "قَطُّ — ever (with negative past)",
              "خَالِدٌ — Khalid",
              "مَا — not",
              "قَطُّ — only"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Multiple مَفْعُوْلٌ فِيْهِ and جملة اسمية",
          "lines": [
            {
              "html": "One sentence may have multiple مفعول فيه.",
              "list": false
            },
            {
              "html": "اَلْيَوْمَ قَرَأَتْ فَاطِمَةُ سَاعَةً — Today, Fatima read for an hour.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلْيَوْمَ قَرَأَتْ فَاطِمَةُ سَاعَةً",
                "translation": "Today, Fatima read for an hour.",
                "cells": [
                  "اَلْيَوْمَ",
                  "قَرَأَتْ",
                  "فَاطِمَةُ",
                  "سَاعَةً"
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
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "A جملة اسمية with a فعل ناقص can also have a مفعول فيه.",
              "list": false
            },
            {
              "html": "كَانَ زَيْدٌ مَرِيْضًا الْبَارِحَةَ — Zaid was sick last night.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "كَانَ زَيْدٌ مَرِيْضًا الْبَارِحَةَ",
                "translation": "Zaid was sick last night.",
                "cells": [
                  "كَانَ",
                  "زَيْدٌ",
                  "مَرِيْضًا",
                  "الْبَارِحَةَ"
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
                        "end": 3,
                        "role": "مَفْعُوْلٌ فِيْهِ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "كَانَ زَيْدٌ مَرِيْضًا الْبَارِحَةَ is a جملة اسمية (with كان) that still has a مَفْعُوْلٌ فِيْهِ. Which word is it?",
            "kind": "mcq",
            "options": [
              "الْبَارِحَةَ",
              "زَيْدٌ",
              "مَرِيْضًا",
              "كَانَ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "مَفْعُوْلٌ فِيْهِ — Adverb of Time/Place",
        "rows": [
          {
            "label": "Irab",
            "arabic": "مَنْصُوْبٌ",
            "meaning": "can come at the start or end of the sentence"
          },
          {
            "label": "Translation",
            "arabic": "at / on / in …",
            "meaning": "may need adding"
          },
          {
            "label": "اَلْيَوْمَ",
            "arabic": "today",
            "meaning": "(يَوْمٌ alone = day)"
          },
          {
            "label": "أَحْيَانًا",
            "arabic": "sometimes",
            "meaning": "plural of حِيْنٌ"
          },
          {
            "label": "قَطُّ",
            "arabic": "ever",
            "meaning": "with a negative فعل ماضٍ"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does the مَفْعُوْلٌ فِيْهِ show, and what is its irab?",
          "options": [
            "The reason for the action; مرفوع",
            "The time or place of the action; مَنْصُوْبٌ",
            "The degree of the action; مجرور",
            "The doer of the action; مرفوع"
          ],
          "correct": 1,
          "explanation": "It is the adverb of time/place, always منصوب."
        },
        {
          "q": "Where can the مفعول فيه come in the sentence?",
          "options": [
            "Only at the end",
            "Only at the beginning",
            "At the beginning or at the end",
            "Only directly after the verb"
          ],
          "correct": 2,
          "explanation": "جَاءَ الضُّيُوْفُ الْبَارِحَةَ or اَلْبَارِحَةَ جَاءَ الضُّيُوْفُ."
        },
        {
          "q": "What is the difference between يَوْمٌ and اَلْيَوْمَ?",
          "options": [
            "They both mean 'today'",
            "يَوْمٌ = day; اَلْيَوْمَ = today",
            "يَوْمٌ = today; اَلْيَوْمَ = day",
            "There is no difference"
          ],
          "correct": 1,
          "explanation": "Adding ال changes 'day' to 'today'."
        },
        {
          "q": "With what kind of verb is قَطُّ used, and how is it translated?",
          "options": [
            "With a negative فعل ماضٍ; 'ever'",
            "With an affirmative مضارع; 'always'",
            "With a command; 'now'",
            "With any verb; 'never mind'"
          ],
          "correct": 0,
          "explanation": "مَا عَبَدَ الْأَنْبِيَاءُ صَنَمًا قَطُّ = did not EVER worship."
        },
        {
          "q": "How is أَحْيَانًا translated?",
          "options": [
            "always",
            "sometimes",
            "everywhere",
            "for an hour"
          ],
          "correct": 1,
          "explanation": "أَحْيَانٌ (plural of حِيْنٌ) = sometimes."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 14 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In يَنَامُ النَّاسُ لَيْلًا, the word لَيْلًا is…",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "مَفْعُوْلٌ مُطْلَقٌ",
            "مَفْعُوْلٌ فِيْهِ"
          ],
          "correct": 3,
          "explanation": "'People sleep AT night' — the adverb of time, مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 14 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "What is the role and irab of يَوْمَيْنِ in صَامَتِ الْبَنَاتُ يَوْمَيْنِ?",
          "options": [
            "مَفْعُوْلٌ فِيْهِ — مَنْصُوْبٌ ('for two days')",
            "مَفْعُوْلٌ بِهِ — مَنْصُوْبٌ (the girls fasted the two days)",
            "فَاعِلٌ — مَرْفُوْعٌ",
            "تَمْيِيْزٌ — مَجْرُوْرٌ"
          ],
          "correct": 0,
          "explanation": "It shows the time during which the action happened; the dual takes ـَيْنِ for نصب."
        },
        {
          "title": "Book Exercise 14 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In أَمْسِ حَزِنَتْ زَيْنَبُ, where does the مفعول فيه come — and is that allowed?",
          "options": [
            "At the end only — the sentence is wrong",
            "It cannot be determined",
            "At the beginning (أَمْسِ) — allowed, since the مفعول فيه may come at the start or end",
            "أَمْسِ is not a مفعول فيه"
          ],
          "correct": 2,
          "explanation": "'Yesterday, Zainab was sad' — the adverb may be fronted in both Arabic and English."
        },
        {
          "title": "Book Exercise 15 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Choose the suitable مفعول فيه: لَمْ يَكْذِبْ نَبِيٌّ … (بَعْدُ / قَطُّ)",
          "options": [
            "قَطُّ — 'No prophet ever lied'",
            "بَعْدُ — 'No prophet lied yet'",
            "both are equally right",
            "neither fits"
          ],
          "correct": 0,
          "explanation": "قَطُّ goes with the negative past: not EVER."
        },
        {
          "title": "Book Exercise 16 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In لَيْسَتِ الطِّفْلَةُ مَرِيْضَةً الْيَوْمَ, the word الْيَوْمَ is…",
          "options": [
            "خَبَرُ لَيْسَ",
            "مَفْعُوْلٌ فِيْهِ — a جملة اسمية can also have one",
            "حَالٌ",
            "مُبْتَدَأٌ"
          ],
          "correct": 1,
          "explanation": "'The little girl is not ill TODAY' — the adverb of time joins the جملة اسمية."
        },
        {
          "title": "Book Exercise 16 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "كَانَ زَيْدٌ مَرِيْضًا شَهْرًا translates as…",
          "options": [
            "Zaid was sick last month only",
            "Zaid was sick for a month",
            "Zaid will be sick for a month",
            "Zaid is sick this month"
          ],
          "correct": 1,
          "explanation": "A جملة اسمية with كان can also carry a مفعول فيه: 'for a month'."
        },
        {
          "title": "Book Exercise 14 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "لَمْ يَذْهَبِ التَّاجِرُ بَعْدُ translates as…",
          "options": [
            "The businessman did not go far",
            "The businessman has not gone yet",
            "The businessman will not go later",
            "The businessman never goes"
          ],
          "correct": 1,
          "explanation": "بَعْدُ = yet / until now."
        },
        {
          "title": "جَاءَ الضُّيُوْفُ الْبَارِحَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 96)",
          "sentence": "جَاءَ الضُّيُوْفُ الْبَارِحَةَ",
          "translation": "The guests came last night.",
          "cells": [
            "جَاءَ",
            "الضُّيُوْفُ",
            "الْبَارِحَةَ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "صَلَّى الرَّجُلُ لَيْلًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 96)",
          "sentence": "صَلَّى الرَّجُلُ لَيْلًا",
          "translation": "The man prayed at night.",
          "cells": [
            "صَلَّى",
            "الرَّجُلُ",
            "لَيْلًا"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "مَا عَبَدَ الْأَنْبِيَاءُ صَنَمًا قَطُّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 96)",
          "sentence": "مَا عَبَدَ الْأَنْبِيَاءُ صَنَمًا قَطُّ",
          "translation": "The prophets did not ever worship an idol.",
          "cells": [
            "مَا",
            "عَبَدَ",
            "الْأَنْبِيَاءُ",
            "صَنَمًا",
            "قَطُّ"
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
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "اَلْيَوْمَ قَرَأَتْ فَاطِمَةُ سَاعَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 98)",
          "sentence": "اَلْيَوْمَ قَرَأَتْ فَاطِمَةُ سَاعَةً",
          "translation": "Today, Fatima read for an hour.",
          "cells": [
            "اَلْيَوْمَ",
            "قَرَأَتْ",
            "فَاطِمَةُ",
            "سَاعَةً"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "مَفْعُوْلٌ مُطْلَقٌ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "كَانَ زَيْدٌ مَرِيْضًا الْبَارِحَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 98)",
          "sentence": "كَانَ زَيْدٌ مَرِيْضًا الْبَارِحَةَ",
          "translation": "Zaid was sick last night.",
          "cells": [
            "كَانَ",
            "زَيْدٌ",
            "مَرِيْضًا",
            "الْبَارِحَةَ"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "صَامَتِ الْبَنَاتُ يَوْمَيْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 2, Part 1)",
          "sentence": "صَامَتِ الْبَنَاتُ يَوْمَيْنِ",
          "translation": "The girls fasted for two days.",
          "cells": [
            "صَامَتِ",
            "الْبَنَاتُ",
            "يَوْمَيْنِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "لَيْسَتِ الطِّفْلَةُ مَرِيْضَةً الْيَوْمَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 16 (Section 2, Part 1)",
          "sentence": "لَيْسَتِ الطِّفْلَةُ مَرِيْضَةً الْيَوْمَ",
          "translation": "The little girl is not ill today.",
          "cells": [
            "لَيْسَتِ",
            "الطِّفْلَةُ",
            "مَرِيْضَةً",
            "الْيَوْمَ"
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
                  "role": "اِسْمُ لَيْسَ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ لَيْسَ"
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
            "فِعْلٌ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "فِعْلٌ مَجْهُوْلٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "يَكُوْنُ الْأَخُ مُتْعَبًا مَسَاءً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 16 (Section 2, Part 1)",
          "sentence": "يَكُوْنُ الْأَخُ مُتْعَبًا مَسَاءً",
          "translation": "The brother will be tired in the evening.",
          "cells": [
            "يَكُوْنُ",
            "الْأَخُ",
            "مُتْعَبًا",
            "مَسَاءً"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "minute",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"minute\"?",
          "options": [
            "دَقِيْقَةٌ",
            "مَسَاءٌ",
            "أَبَدٌ",
            "يَوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "minute",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَقِيْقَةٌ mean?",
          "options": [
            "minute",
            "day",
            "always, ever",
            "month"
          ],
          "correct": 0
        },
        {
          "title": "minute (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَقِيْقَةٌ?",
          "options": [
            "دَقَائِقُ",
            "أَحْيَانٌ",
            "أَسَابِيْعُ",
            "شُهُوْرٌ، أَشْهُرٌ"
          ],
          "correct": 0
        },
        {
          "title": "time, while, hour, Day of Judgement",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, while, hour, Day of Judgement\"?",
          "options": [
            "سَاعَةٌ",
            "بَعْدُ (مَبْنِيٌّ)",
            "قَطُّ (مَبْنِيٌّ)",
            "اَلْآنَ"
          ],
          "correct": 0
        },
        {
          "title": "time, while, hour, Day of Judgement",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَاعَةٌ mean?",
          "options": [
            "time, while, hour, Day of Judgement",
            "tomorrow",
            "yesterday",
            "always, ever"
          ],
          "correct": 0
        },
        {
          "title": "time, while, hour, Day of Judgement (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَاعَةٌ?",
          "options": [
            "سَاعَاتٌ",
            "أَحْيَانٌ",
            "دَقَائِقُ",
            "أَيَّامٌ"
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
            "أُسْبُوْعٌ",
            "نَهَارٌ",
            "آنٌ"
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
            "day/daytime",
            "yet, until now",
            "always"
          ],
          "correct": 0
        },
        {
          "title": "month (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَهْرٌ?",
          "options": [
            "شُهُوْرٌ، أَشْهُرٌ",
            "أَيَّامٌ",
            "أَحْيَانٌ",
            "أَسَابِيْعُ"
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
            "حِيْنٌ",
            "يَوْمٌ",
            "نَهَارٌ"
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
            "yesterday",
            "time",
            "yet, until now"
          ],
          "correct": 0
        },
        {
          "title": "tomorrow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tomorrow\"?",
          "options": [
            "غَدٌ",
            "آنٌ",
            "أُسْبُوْعٌ",
            "حِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "tomorrow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَدٌ mean?",
          "options": [
            "tomorrow",
            "time, while, hour, Day of Judgement",
            "day",
            "ever"
          ],
          "correct": 0
        },
        {
          "title": "ever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ever\"?",
          "options": [
            "قَطُّ (مَبْنِيٌّ)",
            "شَهْرٌ",
            "نَهَارٌ",
            "اَلْآنَ"
          ],
          "correct": 0
        },
        {
          "title": "ever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَطُّ (مَبْنِيٌّ) mean?",
          "options": [
            "ever",
            "minute",
            "tomorrow",
            "yesterday"
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
            "شَهْرٌ",
            "أُسْبُوْعٌ",
            "صَبَاحٌ"
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
            "day/daytime",
            "ever",
            "yet, until now"
          ],
          "correct": 0
        },
        {
          "title": "day/daytime",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"day/daytime\"?",
          "options": [
            "نَهَارٌ",
            "حِيْنٌ",
            "يَوْمٌ",
            "دَقِيْقَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "day/daytime",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَهَارٌ mean?",
          "options": [
            "day/daytime",
            "morning",
            "day",
            "tomorrow"
          ],
          "correct": 0
        },
        {
          "title": "day",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"day\"?",
          "options": [
            "يَوْمٌ",
            "بَعْدُ (مَبْنِيٌّ)",
            "أُسْبُوْعٌ",
            "دَقِيْقَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "day",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَوْمٌ mean?",
          "options": [
            "day",
            "tomorrow",
            "month",
            "yesterday"
          ],
          "correct": 0
        },
        {
          "title": "day (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of يَوْمٌ?",
          "options": [
            "أَيَّامٌ",
            "سَاعَاتٌ",
            "شُهُوْرٌ، أَشْهُرٌ",
            "دَقَائِقُ"
          ],
          "correct": 0
        },
        {
          "title": "always, ever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"always, ever\"?",
          "options": [
            "أَبَدٌ",
            "سَاعَةٌ",
            "بَعْدُ (مَبْنِيٌّ)",
            "دَقِيْقَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "always, ever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبَدٌ mean?",
          "options": [
            "always, ever",
            "week",
            "month",
            "tomorrow"
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
            "يَوْمٌ",
            "اَلْبَارِحَةُ",
            "مَسَاءٌ"
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
            "minute",
            "ever",
            "now, just now"
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
            "أَيَّامٌ",
            "شُهُوْرٌ، أَشْهُرٌ",
            "سَاعَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "yesterday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"yesterday\"?",
          "options": [
            "أَمْسِ (مَبْنِيٌّ)",
            "مَسَاءٌ",
            "بَعْدُ (مَبْنِيٌّ)",
            "قَطُّ (مَبْنِيٌّ)"
          ],
          "correct": 0
        },
        {
          "title": "yesterday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمْسِ (مَبْنِيٌّ) mean?",
          "options": [
            "yesterday",
            "day",
            "evening",
            "morning"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time\"?",
          "options": [
            "آنٌ",
            "دَقِيْقَةٌ",
            "دَائِمٌ",
            "بَعْدُ (مَبْنِيٌّ)"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آنٌ mean?",
          "options": [
            "time",
            "week",
            "month",
            "morning"
          ],
          "correct": 0
        },
        {
          "title": "now, just now",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"now, just now\"?",
          "options": [
            "اَلْآنَ",
            "بَعْدُ (مَبْنِيٌّ)",
            "آنٌ",
            "شَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "now, just now",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اَلْآنَ mean?",
          "options": [
            "now, just now",
            "week",
            "tomorrow",
            "month"
          ],
          "correct": 0
        },
        {
          "title": "last night",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"last night\"?",
          "options": [
            "اَلْبَارِحَةُ",
            "أُسْبُوْعٌ",
            "يَوْمٌ",
            "نَهَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "last night",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اَلْبَارِحَةُ mean?",
          "options": [
            "last night",
            "always, ever",
            "evening",
            "now, just now"
          ],
          "correct": 0
        },
        {
          "title": "yet, until now",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"yet, until now\"?",
          "options": [
            "بَعْدُ (مَبْنِيٌّ)",
            "يَوْمٌ",
            "صَبَاحٌ",
            "شَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "yet, until now",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعْدُ (مَبْنِيٌّ) mean?",
          "options": [
            "yet, until now",
            "now, just now",
            "minute",
            "ever"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time\"?",
          "options": [
            "حِيْنٌ",
            "يَوْمٌ",
            "أُسْبُوْعٌ",
            "سَاعَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حِيْنٌ mean?",
          "options": [
            "time",
            "always, ever",
            "morning",
            "day"
          ],
          "correct": 0
        },
        {
          "title": "time (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حِيْنٌ?",
          "options": [
            "أَحْيَانٌ",
            "أَسَابِيْعُ",
            "شُهُوْرٌ، أَشْهُرٌ",
            "سَاعَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "always",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"always\"?",
          "options": [
            "دَائِمٌ",
            "شَهْرٌ",
            "غَدٌ",
            "مَسَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "always",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَائِمٌ mean?",
          "options": [
            "always",
            "ever",
            "week",
            "last night"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "المفعول المطلق والمفعول له",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "مَفْعُوْلٌ مُطْلَقٌ — Adverbs of Degree and Frequency",
          "lines": [
            {
              "html": "Some adverbs show the degree to which an action occurs, or the frequency with which it takes place: 'The boy was EXTREMELY patient. The man performed Hajj TWICE.' In Arabic, this is called مَفْعُوْلٌ مُطْلَقٌ. The مفعول مطلق is مَنْصُوْبٌ and نَكِرَةٌ.",
              "list": false
            },
            {
              "html": "Adverbs of Degree: the مفعول مطلق which shows the degree is usually the مَصْدَرٌ of the main verb or of a synonym of the main verb. It usually comes after the فاعل, and the مفعول به if there is one. With stative verbs it is translated as 'so', 'very', 'extremely', etc. With dynamic verbs it can be translated in different ways; sometimes it simply cannot be reflected in translation.",
              "list": false
            },
            {
              "html": "جَلَسَ الرَّجُلُ جُلُوْسًا — مصدر of the main verb itself",
              "list": true,
              "bullet": true
            },
            {
              "html": "جَلَسَ الرَّجُلُ قُعُوْدًا — مصدر of a synonym of the main verb",
              "list": true,
              "bullet": true
            },
            {
              "html": "صَبَرَ يَعْقُوْبُ ﷺ صَبْرًا — Yaqub was very patient.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "صَبَرَ يَعْقُوْبُ ﷺ صَبْرًا",
                "translation": "Yaqub was very patient.",
                "cells": [
                  "صَبَرَ",
                  "يَعْقُوْبُ ﷺ",
                  "صَبْرًا"
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
                        "role": "مَفْعُوْلٌ مُطْلَقٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Adverbs of Frequency: when the مفعول مطلق shows the frequency of an action, it can be: 1. A مصدر in the pattern of فَعْلَةٌ, which can be made dual and plural. 2. A normal noun — the word مَرَّةٌ (plural مَرَّاتٌ) is commonly used.",
              "list": false
            },
            {
              "html": "جَلَسَ الْوَلَدُ جَلْسَةً — The boy sat once.",
              "list": true,
              "bullet": true
            },
            {
              "html": "جَلَسَ الْوَلَدُ جَلْسَتَيْنِ — The boy sat twice.",
              "list": true,
              "bullet": true
            },
            {
              "html": "جَلَسَ الْوَلَدُ جَلَسَاتٍ — The boy sat a few times.",
              "list": true,
              "bullet": true
            },
            {
              "html": "غَابَتِ الْمُعَلِّمَةُ مَرَّتَيْنِ — The teacher was absent twice.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "جَلَسَ الْوَلَدُ جَلْسَتَيْنِ",
            "kind": "mcq",
            "options": [
              "مَفْعُوْلٌ مُطْلَقٌ (degree/frequency)",
              "مَفْعُوْلٌ لَهُ (reason)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "مَفْعُوْلٌ لَهُ — Adverbs of Reason",
          "lines": [
            {
              "html": "Some adverbs show the reason why the subject carries out the verb: 'The man fasts IN HOPE OF REWARD.' In Arabic, this is called مَفْعُوْلٌ لَهُ. The مفعول له is usually a مصدر which is نَكِرَةٌ and مَنْصُوْبٌ. It can be translated as 'because of', 'due to', 'in', etc.",
              "list": false
            },
            {
              "html": "يَصُوْمُ الرَّجُلُ احْتِسَابًا — The man fasts in hope of reward.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَصُوْمُ الرَّجُلُ احْتِسَابًا",
                "translation": "The man fasts in hope of reward.",
                "cells": [
                  "يَصُوْمُ",
                  "الرَّجُلُ",
                  "احْتِسَابًا"
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
                        "role": "مَفْعُوْلٌ لَهُ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "صَبَرَ يُوْسُفُ احْتِسَابًا",
            "kind": "mcq",
            "options": [
              "مَفْعُوْلٌ مُطْلَقٌ (degree/frequency)",
              "مَفْعُوْلٌ لَهُ (reason)"
            ],
            "correct": 1
          }
        },
        {
          "heading": "Differentiating Between مَفْعُوْلٌ مُطْلَقٌ and مَفْعُوْلٌ لَهُ",
          "lines": [
            {
              "html": "The مفعول مطلق is the مصدر of the MAIN verb, whilst the مفعول له is a مصدر of ANOTHER verb.",
              "list": false
            },
            {
              "table": {
                "title": "مَفْعُوْلٌ مُطْلَقٌ vs مَفْعُوْلٌ لَهُ",
                "headers": [
                  "مَصْدَرٌ of…",
                  "Label",
                  "Meaning",
                  "Example",
                  "Translation"
                ],
                "rows": [
                  [
                    "the main verb",
                    "مَفْعُوْلٌ مُطْلَقٌ",
                    "Emphasis",
                    "صَبَرَ يَعْقُوْبُ ﷺ صَبْرًا",
                    "Yaqub was very patient."
                  ],
                  [
                    "another verb",
                    "مَفْعُوْلٌ لَهُ",
                    "Reason",
                    "صَبَرَ يَعْقُوْبُ ﷺ رَغْبَةً",
                    "Yaqub was patient in hope."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "بَكَى الرَّجُلُ بُكَاءً",
            "kind": "mcq",
            "options": [
              "مَفْعُوْلٌ مُطْلَقٌ (degree/frequency)",
              "مَفْعُوْلٌ لَهُ (reason)"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "مَفْعُوْلٌ مُطْلَقٌ vs مَفْعُوْلٌ لَهُ",
        "rows": [
          {
            "label": "مَفْعُوْلٌ مُطْلَقٌ",
            "arabic": "masdar of the MAIN verb",
            "meaning": "degree ('very, extremely') or frequency ('x times'); منصوب، نكرة"
          },
          {
            "label": "Frequency patterns",
            "arabic": "فَعْلَةٌ / مَرَّةٌ",
            "meaning": "جَلْسَةً once، جَلْسَتَيْنِ twice، جَلَسَاتٍ a few times; مَرَّتَيْنِ twice"
          },
          {
            "label": "مَفْعُوْلٌ لَهُ",
            "arabic": "masdar of ANOTHER verb",
            "meaning": "reason: 'because of, due to, in'; منصوب، نكرة"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the مَفْعُوْلٌ مُطْلَقٌ of degree usually made of?",
          "options": [
            "The مصدر of the main verb or of a synonym of the main verb",
            "The مصدر of a completely different verb",
            "An adjective",
            "A particle"
          ],
          "correct": 0,
          "explanation": "صَبَرَ … صَبْرًا — the masdar of the verb itself, showing intensity."
        },
        {
          "q": "What are the irab and definiteness of the مفعول مطلق and مفعول له?",
          "options": [
            "مرفوع and معرفة",
            "منصوب and نكرة",
            "مجرور and نكرة",
            "منصوب and معرفة"
          ],
          "correct": 1,
          "explanation": "Both are منصوب, indefinite masdars."
        },
        {
          "q": "How is 'The boy sat twice' expressed?",
          "options": [
            "جَلَسَ الْوَلَدُ جَلْسَتَيْنِ",
            "جَلَسَ الْوَلَدُ جُلُوْسًا",
            "جَلَسَ الْوَلَدُ جَلْسَةً",
            "جَلَسَ الْوَلَدُ جَلَسَاتٍ"
          ],
          "correct": 0,
          "explanation": "The فَعْلَةٌ masdar in the dual = twice. (جَلْسَةً = once; جَلَسَاتٍ = a few times.)"
        },
        {
          "q": "Which word is commonly used as a normal noun for frequency?",
          "options": [
            "مَرَّةٌ (ج مَرَّاتٌ)",
            "حِيْنٌ",
            "قَطُّ",
            "دَائِمٌ"
          ],
          "correct": 0,
          "explanation": "غَابَتِ الْمُعَلِّمَةُ مَرَّتَيْنِ = The teacher was absent twice."
        },
        {
          "q": "How do you tell a مفعول له from a مفعول مطلق?",
          "options": [
            "The مفعول له comes before the verb",
            "The مفعول مطلق is the masdar of the main verb (emphasis); the مفعول له is a masdar of another verb (reason)",
            "The مفعول له is always مرفوع",
            "There is no difference"
          ],
          "correct": 1,
          "explanation": "صَبْرًا after صَبَرَ = very patient; رَغْبَةً after صَبَرَ = patient in hope."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 17 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In صَبَرَ يُوْسُفُ صَبْرًا, the word صَبْرًا is…",
          "options": [
            "مَفْعُوْلٌ لَهُ",
            "مَفْعُوْلٌ مُطْلَقٌ — the masdar of the main verb, showing degree",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "The masdar of صَبَرَ itself emphasises the action: 'Yusuf was VERY patient.'"
        },
        {
          "title": "Book Exercise 20 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In صَلَّى النَّاسُ رِيَاءً, the word رِيَاءً is…",
          "options": [
            "مَفْعُوْلٌ مُطْلَقٌ",
            "مَفْعُوْلٌ بِهِ",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ لَهُ — the reason: 'to show off'"
          ],
          "correct": 3,
          "explanation": "رِيَاءٌ is the masdar of a DIFFERENT verb (رَاءَى), so it gives the reason for praying."
        },
        {
          "title": "Book Exercise 19 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Which sentence means 'The imam bowed twice'?",
          "options": [
            "رَكَعَ الْإِمَامُ رَكْعَةً",
            "رَكَعَ الْإِمَامُ رُكُوْعًا",
            "رَكَعَ الْإِمَامُ رَكْعَتَيْنِ",
            "رَكَعَ الْإِمَامُ رَكَعَاتٍ"
          ],
          "correct": 2,
          "explanation": "The فَعْلَةٌ masdar in the dual = twice (رَكْعَةً = once; رَكَعَاتٍ = a few times)."
        },
        {
          "title": "Book Exercise 21 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In بَكَى الرَّجُلُ حُزْنًا, the word حُزْنًا is…",
          "options": [
            "مَفْعُوْلٌ لَهُ — he cried because of sadness",
            "مَفْعُوْلٌ مُطْلَقٌ — he cried a lot",
            "مَفْعُوْلٌ بِهِ — he cried sadness",
            "حَالٌ — he cried sadly"
          ],
          "correct": 0,
          "explanation": "حُزْنٌ is the masdar of a different verb (حَزِنَ), so it gives the reason."
        },
        {
          "title": "Book Exercise 21 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In بَكَى الرَّجُلُ بُكَاءً, the word بُكَاءً is…",
          "options": [
            "مَفْعُوْلٌ لَهُ — the reason for crying",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ مُطْلَقٌ — the masdar of the main verb, emphasising the crying",
            "نَائِبُ الْفَاعِلِ"
          ],
          "correct": 2,
          "explanation": "بُكَاءٌ is the masdar of بَكَى itself → emphasis/degree, not reason."
        },
        {
          "title": "Book Exercise 17 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "فَرِحَ الْأَوْلَادُ فَرَحًا translates as…",
          "options": [
            "The children were very happy",
            "The children were happy because of joy",
            "The children became happy once",
            "The children play happily"
          ],
          "correct": 0,
          "explanation": "مفعول مطلق of a stative verb: 'so/very happy'."
        },
        {
          "title": "Book Exercise 19 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "سَجَدَ النَّاسُ سَجْدَتَيْنِ translates as…",
          "options": [
            "The people prostrated once",
            "The people prostrated a few times",
            "The people prostrated in fear",
            "The people prostrated twice"
          ],
          "correct": 3,
          "explanation": "Dual of the فَعْلَةٌ masdar = twice."
        },
        {
          "title": "صَبَرَ يَعْقُوْبُ صَبْرًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 99)",
          "sentence": "صَبَرَ يَعْقُوْبُ صَبْرًا",
          "translation": "Yaqub was very patient.",
          "cells": [
            "صَبَرَ",
            "يَعْقُوْبُ",
            "صَبْرًا"
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
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "ظَلَمَ فِرْعَوْنُ ظُلْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 17 (Section 2, Part 1)",
          "sentence": "ظَلَمَ فِرْعَوْنُ ظُلْمًا",
          "translation": "Fir'awn oppressed greatly.",
          "cells": [
            "ظَلَمَ",
            "فِرْعَوْنُ",
            "ظُلْمًا"
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
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "يُحِبُّ النَّاسُ الْمَالَ حُبًّا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 17 (Section 2, Part 1)",
          "sentence": "يُحِبُّ النَّاسُ الْمَالَ حُبًّا",
          "translation": "People love wealth greatly.",
          "cells": [
            "يُحِبُّ",
            "النَّاسُ",
            "الْمَالَ",
            "حُبًّا"
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
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "رَكَعَ الْإِمَامُ رَكْعَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 19 (Section 2, Part 1)",
          "sentence": "رَكَعَ الْإِمَامُ رَكْعَةً",
          "translation": "The imam bowed once.",
          "cells": [
            "رَكَعَ",
            "الْإِمَامُ",
            "رَكْعَةً"
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
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "غَابَتِ الْمُعَلِّمَةُ مَرَّتَيْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 19 (Section 2, Part 1)",
          "sentence": "غَابَتِ الْمُعَلِّمَةُ مَرَّتَيْنِ",
          "translation": "The teacher was absent twice.",
          "cells": [
            "غَابَتِ",
            "الْمُعَلِّمَةُ",
            "مَرَّتَيْنِ"
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
                  "role": "مَفْعُوْلٌ مُطْلَقٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "يَصُوْمُ الرَّجُلُ احْتِسَابًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 102)",
          "sentence": "يَصُوْمُ الرَّجُلُ احْتِسَابًا",
          "translation": "The man fasts in hope of reward.",
          "cells": [
            "يَصُوْمُ",
            "الرَّجُلُ",
            "احْتِسَابًا"
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
                  "role": "مَفْعُوْلٌ لَهُ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "سَجَدَ الْعِبَادُ شُكْرًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 20 (Section 2, Part 1)",
          "sentence": "سَجَدَ الْعِبَادُ شُكْرًا",
          "translation": "The servants prostrated out of gratitude.",
          "cells": [
            "سَجَدَ",
            "الْعِبَادُ",
            "شُكْرًا"
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
                  "role": "مَفْعُوْلٌ لَهُ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "تَسْتَغْفِرُ الْمُؤْمِنَاتُ اللهَ رَهْبَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 21 (Section 2, Part 1)",
          "sentence": "تَسْتَغْفِرُ الْمُؤْمِنَاتُ اللهَ رَهْبَةً",
          "translation": "The believing women seek Allah's forgiveness out of fear.",
          "cells": [
            "تَسْتَغْفِرُ",
            "الْمُؤْمِنَاتُ",
            "اللهَ",
            "رَهْبَةً"
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
                  "role": "مَفْعُوْلٌ لَهُ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "to recite clearly",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recite clearly\"?",
          "options": [
            "رَتَّلَ يُرَتِّلُ",
            "تَلَا يَتْلُوْ",
            "رَهِبَ يَرْهَبُ",
            "رَغِبَ يَرْغَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to recite clearly",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَتَّلَ يُرَتِّلُ mean?",
          "options": [
            "to recite clearly",
            "to hope, desire",
            "to fear",
            "to prostrate"
          ],
          "correct": 0
        },
        {
          "title": "to recite clearly (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَتَّلَ يُرَتِّلُ?",
          "options": [
            "تَرْتِيْلًا",
            "حَسَدًا",
            "سُجُوْدًا",
            "تِلَاوَةً"
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
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "اِعْتَمَرَ يَعْتَمِرُ",
            "اِحْتَرَمَ يَحْتَرِمُ"
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
            "to love",
            "to desire",
            "to fear"
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
            "ضَرْبًا",
            "حَسَدًا",
            "رِيَاءً، مُرَاءَاةً"
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
            "سُمْعَةٌ",
            "دَعَا يَدْعُوْ",
            "صَلَّى يُصَلِّيْ"
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
            "to call, supplicate",
            "to seek forgiveness",
            "to show off"
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
            "رَغْبَةً، رَغَبًا",
            "اِحْتِسَابًا",
            "صَلَاةً"
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
            "حَسَدَ يَحْسُدُ",
            "رَغِبَ يَرْغَبُ",
            "دَعَا يَدْعُوْ"
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
            "to desire",
            "to perform salah",
            "to seek forgiveness"
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
            "رُكُوْعًا",
            "إِحْبَابًا، حُبًّا",
            "اِحْتِسَابًا"
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
            "صَلَّى يُصَلِّيْ",
            "سُمْعَةٌ",
            "حَسَدَ يَحْسُدُ"
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
            "to bow",
            "to hope, desire",
            "to perform Umrah"
          ],
          "correct": 0
        },
        {
          "title": "to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحَبَّ يُحِبُّ?",
          "options": [
            "إِحْبَابًا، حُبًّا",
            "اِحْتِرَامًا",
            "دَعْوَةً، دُعَاءً",
            "اِحْتِسَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to perform Umrah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform Umrah\"?",
          "options": [
            "اِعْتَمَرَ يَعْتَمِرُ",
            "سَجَدَ يَسْجُدُ",
            "دَعَا يَدْعُوْ",
            "اِحْتَرَمَ يَحْتَرِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to perform Umrah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِعْتَمَرَ يَعْتَمِرُ mean?",
          "options": [
            "to perform Umrah",
            "to recite clearly",
            "to love",
            "to desire"
          ],
          "correct": 0
        },
        {
          "title": "to perform Umrah (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِعْتَمَرَ يَعْتَمِرُ?",
          "options": [
            "اِعْتِمَارًا",
            "إِحْبَابًا، حُبًّا",
            "رَهْبَةً، رَهَبًا",
            "رَغْبَةً، رَغَبًا"
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
            "سَجَدَ يَسْجُدُ",
            "سُمْعَةٌ",
            "ضَرَبَ يَضْرِبُ"
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
            "to call, supplicate",
            "to perform Umrah",
            "to seek forgiveness"
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
            "رُكُوْعًا",
            "رِيَاءً، مُرَاءَاةً",
            "اِحْتِرَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to call, supplicate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call, supplicate\"?",
          "options": [
            "دَعَا يَدْعُوْ",
            "حَسَدَ يَحْسُدُ",
            "رَغِبَ يَرْغَبُ",
            "رَتَّلَ يُرَتِّلُ"
          ],
          "correct": 0
        },
        {
          "title": "to call, supplicate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَعَا يَدْعُوْ mean?",
          "options": [
            "to call, supplicate",
            "to hit",
            "to hope, desire",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "to call, supplicate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَعَا يَدْعُوْ?",
          "options": [
            "دَعْوَةً، دُعَاءً",
            "طَمَعًا",
            "صَلَاةً",
            "إِحْبَابًا، حُبًّا"
          ],
          "correct": 0
        },
        {
          "title": "to hope, desire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope, desire\"?",
          "options": [
            "رَغِبَ يَرْغَبُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "سُمْعَةٌ",
            "رَتَّلَ يُرَتِّلُ"
          ],
          "correct": 0
        },
        {
          "title": "to hope, desire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَغِبَ يَرْغَبُ mean?",
          "options": [
            "to hope, desire",
            "to love",
            "to prostrate",
            "to desire"
          ],
          "correct": 0
        },
        {
          "title": "to hope, desire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَغِبَ يَرْغَبُ?",
          "options": [
            "رَغْبَةً، رَغَبًا",
            "ضَرْبًا",
            "حَسَدًا",
            "تِلَاوَةً"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fear\"?",
          "options": [
            "رَهِبَ يَرْهَبُ",
            "رَكَعَ يَرْكَعُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "رَتَّلَ يُرَتِّلُ"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَهِبَ يَرْهَبُ mean?",
          "options": [
            "to fear",
            "show",
            "to prostrate",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "to fear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَهِبَ يَرْهَبُ?",
          "options": [
            "رَهْبَةً، رَهَبًا",
            "تَرْتِيْلًا",
            "اِحْتِسَابًا",
            "صَلَاةً"
          ],
          "correct": 0
        },
        {
          "title": "show",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"show\"?",
          "options": [
            "سُمْعَةٌ",
            "رَغِبَ يَرْغَبُ",
            "اِحْتَسَبَ يَحْتَسِبُ",
            "تَلَا يَتْلُوْ"
          ],
          "correct": 0
        },
        {
          "title": "show",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سُمْعَةٌ mean?",
          "options": [
            "show",
            "to recite clearly",
            "to perform Umrah",
            "to respect, honour"
          ],
          "correct": 0
        },
        {
          "title": "to desire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to desire\"?",
          "options": [
            "طَمِعَ يَطْمَعُ",
            "تَلَا يَتْلُوْ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "اِعْتَمَرَ يَعْتَمِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to desire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَمِعَ يَطْمَعُ mean?",
          "options": [
            "to desire",
            "to hope, desire",
            "to recite",
            "to hit"
          ],
          "correct": 0
        },
        {
          "title": "to desire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَمِعَ يَطْمَعُ?",
          "options": [
            "طَمَعًا",
            "حَسَدًا",
            "اِسْتِغْفَارًا",
            "اِعْتِمَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform salah\"?",
          "options": [
            "صَلَّى يُصَلِّيْ",
            "رَتَّلَ يُرَتِّلُ",
            "رَاءَى يُرَائِيْ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَلَّى يُصَلِّيْ mean?",
          "options": [
            "to perform salah",
            "to prostrate",
            "to hit",
            "to hope, desire"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَلَّى يُصَلِّيْ?",
          "options": [
            "صَلَاةً",
            "اِعْتِمَارًا",
            "رَهْبَةً، رَهَبًا",
            "اِحْتِرَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to respect, honour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to respect, honour\"?",
          "options": [
            "اِحْتَرَمَ يَحْتَرِمُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "صَلَّى يُصَلِّيْ",
            "سَجَدَ يَسْجُدُ"
          ],
          "correct": 0
        },
        {
          "title": "to respect, honour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَرَمَ يَحْتَرِمُ mean?",
          "options": [
            "to respect, honour",
            "show",
            "to love",
            "to prostrate"
          ],
          "correct": 0
        },
        {
          "title": "to respect, honour (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَرَمَ يَحْتَرِمُ?",
          "options": [
            "اِحْتِرَامًا",
            "تِلَاوَةً",
            "صَلَاةً",
            "ضَرْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to hope for reward",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope for reward\"?",
          "options": [
            "اِحْتَسَبَ يَحْتَسِبُ",
            "سُمْعَةٌ",
            "رَغِبَ يَرْغَبُ",
            "دَعَا يَدْعُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to hope for reward",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَسَبَ يَحْتَسِبُ mean?",
          "options": [
            "to hope for reward",
            "to fear",
            "to recite",
            "to respect, honour"
          ],
          "correct": 0
        },
        {
          "title": "to hope for reward (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَسَبَ يَحْتَسِبُ?",
          "options": [
            "اِحْتِسَابًا",
            "حَسَدًا",
            "سُجُوْدًا",
            "اِعْتِمَارًا"
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
            "رَغِبَ يَرْغَبُ",
            "ضَرَبَ يَضْرِبُ",
            "سَجَدَ يَسْجُدُ"
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
            "to respect, honour",
            "to recite clearly",
            "to perform Umrah"
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
            "رُكُوْعًا",
            "صَلَاةً",
            "رَغْبَةً، رَغَبًا"
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
            "رَغِبَ يَرْغَبُ",
            "سُمْعَةٌ",
            "رَكَعَ يَرْكَعُ"
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
            "to desire",
            "to prostrate",
            "to love"
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
            "رُكُوْعًا",
            "تِلَاوَةً",
            "ضَرْبًا"
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
            "سَجَدَ يَسْجُدُ",
            "أَحَبَّ يُحِبُّ",
            "تَلَا يَتْلُوْ"
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
            "to perform Umrah",
            "show",
            "to hope for reward"
          ],
          "correct": 0
        },
        {
          "title": "to show off (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَاءَى يُرَائِيْ?",
          "options": [
            "رِيَاءً، مُرَاءَاةً",
            "حَسَدًا",
            "رُكُوْعًا",
            "إِحْبَابًا، حُبًّا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "الحال",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "حَالٌ",
          "lines": [
            {
              "html": "Some adverbs describe the condition of the subject or object at the time of the verb: 'The man came RIDING.' In Arabic, this is called حَالٌ. The حال is مَنْصُوْبٌ and نَكِرَةٌ. The حال is usually translated by adding -ing or -ly to the verb, e.g. crying, riding, quietly, patiently. The حال comes in the pattern of اِسْمُ الْفَاعِلِ or اِسْمُ الْمَفْعُوْلِ.",
              "list": false
            },
            {
              "html": "جَاءَ الرَّجُلُ رَاكِبًا — The man came riding.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "جَاءَ الرَّجُلُ رَاكِبًا",
                "translation": "The man came riding.",
                "cells": [
                  "جَاءَ",
                  "الرَّجُلُ",
                  "رَاكِبًا"
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
                        "role": "حَالٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The حال agrees with the noun it is describing in number and gender.",
              "list": false
            },
            {
              "table": {
                "title": "Agreement of the حَالٌ",
                "headers": [
                  "",
                  "مُفْرَدٌ",
                  "مُثَنًّى",
                  "جَمْعٌ"
                ],
                "rows": [
                  [
                    "مُذَكَّرٌ",
                    "جَاءَ الرَّجُلُ رَاكِبًا",
                    "جَاءَ الرَّجُلَانِ رَاكِبَيْنِ",
                    "جَاءَ الرِّجَالُ رَاكِبِيْنَ"
                  ],
                  [
                    "مُؤَنَّثٌ",
                    "جَاءَتِ الْمَرْأَةُ رَاكِبَةً",
                    "جَاءَتِ الْمَرْأَتَانِ رَاكِبَتَيْنِ",
                    "جَاءَتِ النِّسَاءُ رَاكِبَاتٍ"
                  ]
                ]
              }
            },
            {
              "html": "مَعًا: the word مَعَ on its own means 'with'. When it is نَكِرَةٌ (مَعًا), it becomes the حال and is translated as 'together', 'all together' or 'at the same time'.",
              "list": false
            },
            {
              "html": "جَاءَ الضُّيُوْفُ مَعًا — The guests came together.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "تَأْكُلُ الطَّالِبَةُ … (شَاكِرٌ)",
            "kind": "mcq",
            "options": [
              "تَأْكُلُ الطَّالِبَةُ شَاكِرَةً",
              "تَأْكُلُ الطَّالِبَةُ شَاكِرٌ",
              "تَأْكُلُ الطَّالِبَةُ شَاكِرًا",
              "تَأْكُلُ الطَّالِبَةُ شَاكِرَاتٍ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "حَالٌ — State",
        "rows": [
          {
            "label": "Irab",
            "arabic": "مَنْصُوْبٌ، نَكِرَةٌ",
            "meaning": "describes the condition of subject/object at the time of the verb"
          },
          {
            "label": "Pattern",
            "arabic": "اسم الفاعل / اسم المفعول",
            "meaning": "translated with -ing or -ly"
          },
          {
            "label": "Agreement",
            "arabic": "number and gender",
            "meaning": "with the noun it describes"
          },
          {
            "label": "مَعًا",
            "arabic": "together / at the same time",
            "meaning": "مَعَ as نكرة becomes a حال"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does the حَالٌ describe?",
          "options": [
            "The time of the action",
            "The condition of the subject or object at the time of the verb",
            "The reason for the action",
            "The frequency of the action"
          ],
          "correct": 1,
          "explanation": "جَاءَ الرَّجُلُ رَاكِبًا — 'riding' describes the man's state as he came."
        },
        {
          "q": "What are the irab and definiteness of the حال?",
          "options": [
            "مرفوع، معرفة",
            "منصوب، نكرة",
            "مجرور، نكرة",
            "منصوب، معرفة"
          ],
          "correct": 1,
          "explanation": "The حال is مَنْصُوْبٌ and نَكِرَةٌ."
        },
        {
          "q": "In which patterns does the حال come?",
          "options": [
            "اسم الفاعل or اسم المفعول",
            "أَفْعَلُ only",
            "مصدر only",
            "فَعْلَةٌ only"
          ],
          "correct": 0,
          "explanation": "e.g. رَاكِبًا (active participle), مَسْرُوْرًا (passive participle)."
        },
        {
          "q": "With what does the حال agree?",
          "options": [
            "With the verb in tense",
            "With the noun it is describing, in number and gender",
            "With the مفعول فيه",
            "It never agrees with anything"
          ],
          "correct": 1,
          "explanation": "جَاءَتِ النِّسَاءُ رَاكِبَاتٍ — feminine plural agrees."
        },
        {
          "q": "What does مَعًا mean when used as a حال?",
          "options": [
            "'with him'",
            "'together / all together / at the same time'",
            "'quickly'",
            "'always'"
          ],
          "correct": 1,
          "explanation": "جَاءَ الضُّيُوْفُ مَعًا = The guests came together."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 23 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In جَلَسَ النَّاسُ سَامِعِيْنَ, the word سَامِعِيْنَ is…",
          "options": [
            "خَبَرٌ",
            "حَالٌ — the state of the people as they sat",
            "مَفْعُوْلٌ بِهِ",
            "نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "'The people sat LISTENING' — a منصوب اسم فاعل describing the فاعل."
        },
        {
          "title": "Book Exercise 23 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Why does سَاكِتَةً in مَا جَلَسَتِ الْبِنْتُ سَاكِتَةً end in fathatain?",
          "options": [
            "It is the خبر of مَا",
            "It agrees with a منصوب مبتدأ",
            "It is a مفعول به",
            "The حال is مَنْصُوْبٌ and نَكِرَةٌ"
          ],
          "correct": 3,
          "explanation": "The state ('quiet') is always a منصوب نكرة."
        },
        {
          "title": "Book Exercise 24 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Add the حال: جَاءَ الْأَصْدِقَاءُ … (مُسْرِعٌ)",
          "options": [
            "مُسْرِعِيْنَ",
            "مُسْرِعًا",
            "مُسْرِعُوْنَ",
            "مُسْرِعَاتٍ"
          ],
          "correct": 0,
          "explanation": "Masculine plural منصوب: مُسْرِعِيْنَ — the حال agrees in number and gender."
        },
        {
          "title": "Book Exercise 24 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Add the حال: رَأَتِ الْبِنْتُ الْجَدَّ … (سَالِمٌ)",
          "options": [
            "سَالِمَةً — agreeing with the girl",
            "سَالِمٌ",
            "سَالِمًا — agreeing with the grandfather (the object)",
            "سَالِمِيْنَ"
          ],
          "correct": 2,
          "explanation": "The حال here describes the object (الجدّ): she saw him safe and sound."
        },
        {
          "title": "Book Exercise 23 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "دَخَلَتِ الطِّفْلَةُ بَاكِيَةً translates as…",
          "options": [
            "The little girl entered crying",
            "The little girl cried after entering",
            "The crying girl was entered",
            "The little girl entered the crying room"
          ],
          "correct": 0,
          "explanation": "بَاكِيَةً — feminine حال agreeing with الطفلة."
        },
        {
          "title": "Book text (p. 105)",
          "kind": "mcq",
          "prompt": "In جَاءَ الضُّيُوْفُ مَعًا, the word مَعًا is…",
          "options": [
            "a preposition meaning 'with'",
            "a مفعول فيه",
            "a مفعول مطلق",
            "a حَالٌ meaning 'together / at the same time'"
          ],
          "correct": 3,
          "explanation": "When مَعَ is نكرة (مَعًا), it becomes the حال: 'The guests came together.'"
        },
        {
          "title": "Book Exercise 23 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "The حال صَابِرِيْنَ in صَامَ الْمُسْلِمُوْنَ صَابِرِيْنَ comes in which pattern?",
          "options": [
            "اِسْمُ الْفَاعِلِ",
            "اِسْمُ الْمَفْعُوْلِ",
            "مَصْدَرٌ",
            "اِسْمُ التَّفْضِيْلِ"
          ],
          "correct": 0,
          "explanation": "The حال comes as اسم الفاعل or اسم المفعول; صَابِرٌ is an active participle."
        },
        {
          "title": "جَاءَ الرَّجُلُ رَاكِبًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 104)",
          "sentence": "جَاءَ الرَّجُلُ رَاكِبًا",
          "translation": "The man came riding.",
          "cells": [
            "جَاءَ",
            "الرَّجُلُ",
            "رَاكِبًا"
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
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "ذَهَبَتِ النِّسَاءُ رَاكِبَاتٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 23 (Section 2, Part 1)",
          "sentence": "ذَهَبَتِ النِّسَاءُ رَاكِبَاتٍ",
          "translation": "The women went riding.",
          "cells": [
            "ذَهَبَتِ",
            "النِّسَاءُ",
            "رَاكِبَاتٍ"
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
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "جَاءَ الرَّجُلَانِ مَاشِيَيْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 23 (Section 2, Part 1)",
          "sentence": "جَاءَ الرَّجُلَانِ مَاشِيَيْنِ",
          "translation": "The two men came walking.",
          "cells": [
            "جَاءَ",
            "الرَّجُلَانِ",
            "مَاشِيَيْنِ"
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
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "دَخَلَتِ الطِّفْلَةُ بَاكِيَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 23 (Section 2, Part 1)",
          "sentence": "دَخَلَتِ الطِّفْلَةُ بَاكِيَةً",
          "translation": "The little girl entered crying.",
          "cells": [
            "دَخَلَتِ",
            "الطِّفْلَةُ",
            "بَاكِيَةً"
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
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "سَمِعَتِ الْأُمُّ الطِّفْلَ بَاكِيًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 23 (Section 2, Part 1)",
          "sentence": "سَمِعَتِ الْأُمُّ الطِّفْلَ بَاكِيًا",
          "translation": "The mother heard the child crying.",
          "cells": [
            "سَمِعَتِ",
            "الْأُمُّ",
            "الطِّفْلَ",
            "بَاكِيًا"
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
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "صَامَ الْمُسْلِمُوْنَ صَابِرِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 23 (Section 2, Part 1)",
          "sentence": "صَامَ الْمُسْلِمُوْنَ صَابِرِيْنَ",
          "translation": "The Muslims fasted patiently.",
          "cells": [
            "صَامَ",
            "الْمُسْلِمُوْنَ",
            "صَابِرِيْنَ"
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
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "جَاءَ الضُّيُوْفُ مَعًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 105)",
          "sentence": "جَاءَ الضُّيُوْفُ مَعًا",
          "translation": "The guests came together.",
          "cells": [
            "جَاءَ",
            "الضُّيُوْفُ",
            "مَعًا"
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
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "يُصَلِّي الْمُسْلِمُوْنَ خَاشِعِيْنَ دَائِمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 23 (Section 2, Part 1)",
          "sentence": "يُصَلِّي الْمُسْلِمُوْنَ خَاشِعِيْنَ دَائِمًا",
          "translation": "The Muslims always pray humbly.",
          "cells": [
            "يُصَلِّي",
            "الْمُسْلِمُوْنَ",
            "خَاشِعِيْنَ",
            "دَائِمًا"
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
                  "role": "حَالٌ"
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
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "to give a lecture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give a lecture\"?",
          "options": [
            "خَطَبَ يَخْطُبُ",
            "زَادَ يَزِيْدُ",
            "أَرْسَلَ يُرْسِلُ",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "to give a lecture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَطَبَ يَخْطُبُ mean?",
          "options": [
            "to give a lecture",
            "to hope",
            "to forget",
            "to buy"
          ],
          "correct": 0
        },
        {
          "title": "to give a lecture (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَطَبَ يَخْطُبُ?",
          "options": [
            "خُطْبَةً",
            "رُكُوْبًا",
            "ضِحْكًا",
            "بُكَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope\"?",
          "options": [
            "رَجَا يَرْجُوْ",
            "رَكِبَ يَرْكَبُ",
            "تَرَكَ يَتْرُكُ",
            "أَرْسَلَ يُرْسِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَجَا يَرْجُوْ mean?",
          "options": [
            "to hope",
            "to cry",
            "to increase",
            "to take, seize"
          ],
          "correct": 0
        },
        {
          "title": "to hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَجَا يَرْجُوْ?",
          "options": [
            "رَجَاءً",
            "رُكُوْبًا",
            "أَخْذًا",
            "تَرْكًا"
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
            "نَسِيَ يَنْسَى",
            "أَرْسَلَ يُرْسِلُ",
            "تَرَكَ يَتْرُكُ"
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
            "to sell",
            "to hope",
            "to forget"
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
            "نِسْيَانًا",
            "مَشْيًا",
            "تَرْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to increase\"?",
          "options": [
            "زَادَ يَزِيْدُ",
            "اِزْدَادَ يَزْدَادُ",
            "اِشْتَرَى يَشْتَرِيْ",
            "مَشَى يَمْشِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَادَ يَزِيْدُ mean?",
          "options": [
            "to increase",
            "to forget",
            "to send",
            "to give a lecture"
          ],
          "correct": 0
        },
        {
          "title": "to increase (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَادَ يَزِيْدُ?",
          "options": [
            "زِيَادَةً",
            "أَخْذًا",
            "رُكُوْبًا",
            "خُطْبَةً"
          ],
          "correct": 0
        },
        {
          "title": "to laugh",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to laugh\"?",
          "options": [
            "ضَحِكَ يَضْحَكُ",
            "بَاعَ يَبِيْعُ",
            "اِشْتَرَى يَشْتَرِيْ",
            "تَرَكَ يَتْرُكُ"
          ],
          "correct": 0
        },
        {
          "title": "to laugh",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَحِكَ يَضْحَكُ mean?",
          "options": [
            "to laugh",
            "to send",
            "to increase",
            "to give a lecture"
          ],
          "correct": 0
        },
        {
          "title": "to laugh (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَحِكَ يَضْحَكُ?",
          "options": [
            "ضِحْكًا",
            "إِرْسَالًا",
            "تَرْكًا",
            "اِشْتِرَاءً"
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
            "ضَحِكَ يَضْحَكُ",
            "اِزْدَادَ يَزْدَادُ",
            "تَرَكَ يَتْرُكُ"
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
            "to buy",
            "to ride",
            "to give a lecture"
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
            "زِيَادَةً",
            "نِسْيَانًا",
            "ضِحْكًا"
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
            "رَجَا يَرْجُوْ",
            "رَكِبَ يَرْكَبُ",
            "بَاعَ يَبِيْعُ"
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
            "to sell",
            "to increase",
            "to cry"
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
            "اِشْتِرَاءً",
            "تَرْكًا",
            "مَشْيًا"
          ],
          "correct": 0
        },
        {
          "title": "to take, seize",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take, seize\"?",
          "options": [
            "أَخَذَ يَأْخُذُ",
            "ضَحِكَ يَضْحَكُ",
            "نَسِيَ يَنْسَى",
            "مَشَى يَمْشِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to take, seize",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخَذَ يَأْخُذُ mean?",
          "options": [
            "to take, seize",
            "to increase",
            "to forget",
            "to ride"
          ],
          "correct": 0
        },
        {
          "title": "to take, seize (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَخَذَ يَأْخُذُ?",
          "options": [
            "أَخْذًا",
            "تَرْكًا",
            "مَشْيًا",
            "بَيْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to send",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send\"?",
          "options": [
            "أَرْسَلَ يُرْسِلُ",
            "نَسِيَ يَنْسَى",
            "ضَحِكَ يَضْحَكُ",
            "رَجَا يَرْجُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to send",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرْسَلَ يُرْسِلُ mean?",
          "options": [
            "to send",
            "to forget",
            "to hope",
            "to ride"
          ],
          "correct": 0
        },
        {
          "title": "to send (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَرْسَلَ يُرْسِلُ?",
          "options": [
            "إِرْسَالًا",
            "اِشْتِرَاءً",
            "بُكَاءً",
            "أَخْذًا"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to increase\"?",
          "options": [
            "اِزْدَادَ يَزْدَادُ",
            "نَسِيَ يَنْسَى",
            "خَطَبَ يَخْطُبُ",
            "رَجَا يَرْجُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِزْدَادَ يَزْدَادُ mean?",
          "options": [
            "to increase",
            "to ride",
            "to hope",
            "to leave"
          ],
          "correct": 0
        },
        {
          "title": "to increase (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِزْدَادَ يَزْدَادُ?",
          "options": [
            "اِزْدِيَادًا",
            "خُطْبَةً",
            "ضِحْكًا",
            "أَخْذًا"
          ],
          "correct": 0
        },
        {
          "title": "to buy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to buy\"?",
          "options": [
            "اِشْتَرَى يَشْتَرِيْ",
            "أَرْسَلَ يُرْسِلُ",
            "بَاعَ يَبِيْعُ",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "to buy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِشْتَرَى يَشْتَرِيْ mean?",
          "options": [
            "to buy",
            "to send",
            "to cry",
            "to increase"
          ],
          "correct": 0
        },
        {
          "title": "to buy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِشْتَرَى يَشْتَرِيْ?",
          "options": [
            "اِشْتِرَاءً",
            "ضِحْكًا",
            "زِيَادَةً",
            "تَرْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to sell",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sell\"?",
          "options": [
            "بَاعَ يَبِيْعُ",
            "رَجَا يَرْجُوْ",
            "بَكَى يَبْكِيْ",
            "ضَحِكَ يَضْحَكُ"
          ],
          "correct": 0
        },
        {
          "title": "to sell",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَاعَ يَبِيْعُ mean?",
          "options": [
            "to sell",
            "to send",
            "to take, seize",
            "to give a lecture"
          ],
          "correct": 0
        },
        {
          "title": "to sell (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَاعَ يَبِيْعُ?",
          "options": [
            "بَيْعًا",
            "زِيَادَةً",
            "مَشْيًا",
            "رَجَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to cry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cry\"?",
          "options": [
            "بَكَى يَبْكِيْ",
            "زَادَ يَزِيْدُ",
            "خَطَبَ يَخْطُبُ",
            "أَرْسَلَ يُرْسِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to cry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَكَى يَبْكِيْ mean?",
          "options": [
            "to cry",
            "to send",
            "to ride",
            "to forget"
          ],
          "correct": 0
        },
        {
          "title": "to cry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَكَى يَبْكِيْ?",
          "options": [
            "بُكَاءً",
            "اِشْتِرَاءً",
            "ضِحْكًا",
            "أَخْذًا"
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
            "رَكِبَ يَرْكَبُ",
            "مَشَى يَمْشِيْ",
            "أَرْسَلَ يُرْسِلُ"
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
            "to ride",
            "to send",
            "to forget"
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
            "رُكُوْبًا",
            "زِيَادَةً",
            "ضِحْكًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "التمييز",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "تَمْيِيْزٌ",
          "lines": [
            {
              "html": "Some adverbs clarify any ambiguity that may occur in a sentence: 'Allah increased the Prophet IN KNOWLEDGE.' In Arabic, this is called تَمْيِيْزٌ. The تمييز is مَنْصُوْبٌ and نَكِرَةٌ. The تمييز is translated as 'with', 'in', 'of', etc.",
              "list": false
            },
            {
              "html": "زَادَ اللهُ النَّبِيَّ ﷺ عِلْمًا — Allah increased the Prophet ﷺ in knowledge.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "زَادَ اللهُ النَّبِيَّ ﷺ عِلْمًا",
                "translation": "Allah increased the Prophet ﷺ in knowledge.",
                "cells": [
                  "زَادَ",
                  "اللهُ",
                  "النَّبِيَّ ﷺ",
                  "عِلْمًا"
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
                        "role": "تَمْيِيْزٌ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "زَادَ اللهُ النَّبِيَّ عِلْمًا",
            "kind": "mcq",
            "options": [
              "عِلْمًا — in knowledge",
              "اللهُ — Allah",
              "النَّبِيَّ — the Prophet",
              "عِلْمًا — knowledge"
            ],
            "correct": 0
          }
        },
        {
          "heading": "تَمْيِيْزٌ in a جُمْلَةٌ اسْمِيَّةٌ",
          "lines": [
            {
              "html": "A جملة اسمية may also have a تمييز.",
              "list": false
            },
            {
              "html": "اَلْإِنَاءُ مَمْلُوْءٌ مَاءً — The container is filled with water.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلْإِنَاءُ مَمْلُوْءٌ مَاءً",
                "translation": "The container is filled with water.",
                "cells": [
                  "اَلْإِنَاءُ",
                  "مَمْلُوْءٌ",
                  "مَاءً"
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
                        "end": 1,
                        "role": "خَبَرٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "تَمْيِيْزٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "It is common for an اِسْمُ التَّفْضِيْلِ to have a تمييز. The translation of these may have to be adjusted.",
              "list": false
            },
            {
              "html": "اَلطُّلَّابُ أَكْثَرُ احْتِرَامًا — The students are most respectful.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "اَلْقُرْآنُ أَشَدُّ نُوْرًا",
            "kind": "mcq",
            "options": [
              "نُوْرًا — in light",
              "اَلْقُرْآنُ — the Quran",
              "أَشَدُّ — most severe",
              "نُوْرًا — light"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "تَمْيِيْزٌ — Clarification",
        "rows": [
          {
            "label": "Irab",
            "arabic": "مَنْصُوْبٌ، نَكِرَةٌ",
            "meaning": "clarifies ambiguity"
          },
          {
            "label": "Translation",
            "arabic": "with / in / of",
            "meaning": "may need adjusting"
          },
          {
            "label": "In جملة اسمية",
            "arabic": "اَلْإِنَاءُ مَمْلُوْءٌ مَاءً",
            "meaning": "common with اسم التفضيل: أَكْثَرُ احْتِرَامًا"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the function of the تَمْيِيْزٌ?",
          "options": [
            "To show the time of the action",
            "To clarify any ambiguity in the sentence",
            "To negate the sentence",
            "To show the doer"
          ],
          "correct": 1,
          "explanation": "'Allah increased the Prophet' — in what? — عِلْمًا: in knowledge."
        },
        {
          "q": "What are the irab and definiteness of the تمييز?",
          "options": [
            "مرفوع، معرفة",
            "منصوب، نكرة",
            "مجرور، معرفة",
            "مرفوع، نكرة"
          ],
          "correct": 1,
          "explanation": "Like the حال and مفعول له, it is a منصوب نكرة."
        },
        {
          "q": "How is the تمييز usually translated?",
          "options": [
            "'with', 'in', 'of'",
            "'because of'",
            "'-ing'",
            "'except'"
          ],
          "correct": 0,
          "explanation": "e.g. filled WITH water, increased IN knowledge, a litre OF milk."
        },
        {
          "q": "Which type of noun commonly takes a تمييز in a جملة اسمية?",
          "options": [
            "اِسْمُ التَّفْضِيْلِ",
            "اسم الإشارة",
            "الأسماء الخمسة",
            "المصدر"
          ],
          "correct": 0,
          "explanation": "اَلطُّلَّابُ أَكْثَرُ احْتِرَامًا = The students are most respectful."
        },
        {
          "q": "اَلْإِنَاءُ مَمْلُوْءٌ مَاءً translates as…",
          "options": [
            "The container is filled with water",
            "The container filled the water",
            "The water filled a container",
            "The container is water"
          ],
          "correct": 0,
          "explanation": "مبتدأ + خبر + تمييز."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 25 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In زَادَ اللهُ النَّبِيَّ عِلْمًا, the word عِلْمًا is…",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ مُطْلَقٌ",
            "تَمْيِيْزٌ — it clarifies what the increase was in",
            "حَالٌ"
          ],
          "correct": 2,
          "explanation": "'Allah increased the Prophet ﷺ IN KNOWLEDGE' — the clarification is منصوب ونكرة."
        },
        {
          "title": "Book Exercise 25 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Which word is the تمييز in مَلَأَ الرَّجُلُ الْإِنَاءَ مَاءً?",
          "options": [
            "مَاءً",
            "الْإِنَاءَ",
            "الرَّجُلُ",
            "مَلَأَ"
          ],
          "correct": 0,
          "explanation": "الْإِنَاءَ is the مفعول به (what he filled); مَاءً clarifies WITH WHAT he filled it."
        },
        {
          "title": "Book Exercise 26 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In اَلْإِنَاءُ مَمْلُوْءٌ لَبَنًا, the word مَمْلُوْءٌ is…",
          "options": [
            "تَمْيِيْزٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "خَبَرٌ — and لَبَنًا is the تمييز"
          ],
          "correct": 3,
          "explanation": "A جملة اسمية can also carry a تمييز: 'The container is filled with milk.'"
        },
        {
          "title": "Book Exercise 26 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Why is عِلْمًا added after أَكْثَرُ in اَلْعُلَمَاءُ أَكْثَرُ عِلْمًا?",
          "options": [
            "It is the مفعول به of أَكْثَرُ",
            "It is a تمييز clarifying in what respect they are 'most' — common with اسم التفضيل",
            "It is a مفعول مطلق emphasising the verb",
            "It marks the plural"
          ],
          "correct": 1,
          "explanation": "اسم التفضيل is often ambiguous, so a تمييز states the respect: 'greatest IN KNOWLEDGE'."
        },
        {
          "title": "Book Exercise 25 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In اِزْدَادَ الْمُؤْمِنُوْنَ إِيْمَانًا, the word إِيْمَانًا is…",
          "options": [
            "تَمْيِيْزٌ — it clarifies what they increased in",
            "مَفْعُوْلٌ مُطْلَقٌ — the masdar of اِزْدَادَ",
            "مَفْعُوْلٌ بِهِ",
            "مَفْعُوْلٌ لَهُ"
          ],
          "correct": 0,
          "explanation": "إِيْمَانٌ is not the masdar of اِزْدَادَ; it removes the ambiguity of the increase."
        },
        {
          "title": "Book Exercise 25 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "اِشْتَرَى الْوَلَدُ لِتْرَيْنِ لَبَنًا translates as…",
          "options": [
            "The boy bought milk twice",
            "The boy bought two litres of milk",
            "The boy sold two litres of milk",
            "The boy bought a litre of milk"
          ],
          "correct": 1,
          "explanation": "لِتْرَيْنِ (dual) + تمييز لَبَنًا = two litres OF milk."
        },
        {
          "title": "Book Exercise 26 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "اَلْمُتَّقُوْنَ خَيْرٌ أَجْرًا translates as…",
          "options": [
            "The God-fearing earn wages",
            "Goodness rewards the God-fearing",
            "The God-fearing are better in reward",
            "The God-fearing are the least rewarded"
          ],
          "correct": 2,
          "explanation": "خَيْرٌ + تمييز أَجْرًا: better in (respect of) reward."
        },
        {
          "title": "زَادَ اللهُ النَّبِيَّ عِلْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 106)",
          "sentence": "زَادَ اللهُ النَّبِيَّ عِلْمًا",
          "translation": "Allah increased the Prophet ﷺ in knowledge.",
          "cells": [
            "زَادَ",
            "اللهُ",
            "النَّبِيَّ",
            "عِلْمًا"
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
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "اَلْإِنَاءُ مَمْلُوْءٌ مَاءً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 107)",
          "sentence": "اَلْإِنَاءُ مَمْلُوْءٌ مَاءً",
          "translation": "The container is filled with water.",
          "cells": [
            "اَلْإِنَاءُ",
            "مَمْلُوْءٌ",
            "مَاءً"
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
                  "end": 1,
                  "role": "خَبَرٌ"
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
            "فَاعِلٌ",
            "اِسْمُ كَانَ",
            "اِسْمُ إِنَّ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اَلطُّلَّابُ أَكْثَرُ احْتِرَامًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 107)",
          "sentence": "اَلطُّلَّابُ أَكْثَرُ احْتِرَامًا",
          "translation": "The students are most respectful.",
          "cells": [
            "اَلطُّلَّابُ",
            "أَكْثَرُ",
            "احْتِرَامًا"
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
                  "end": 1,
                  "role": "خَبَرٌ"
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
            "فَاعِلٌ",
            "اِسْمُ كَانَ",
            "اِسْمُ إِنَّ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اِزْدَادَ الْمُؤْمِنُوْنَ إِيْمَانًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 25 (Section 2, Part 1)",
          "sentence": "اِزْدَادَ الْمُؤْمِنُوْنَ إِيْمَانًا",
          "translation": "The believers increased in faith.",
          "cells": [
            "اِزْدَادَ",
            "الْمُؤْمِنُوْنَ",
            "إِيْمَانًا"
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
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "مَلَأَ الرَّجُلُ الْإِنَاءَ مَاءً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 25 (Section 2, Part 1)",
          "sentence": "مَلَأَ الرَّجُلُ الْإِنَاءَ مَاءً",
          "translation": "The man filled the container with water.",
          "cells": [
            "مَلَأَ",
            "الرَّجُلُ",
            "الْإِنَاءَ",
            "مَاءً"
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
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "بَاعَ التَّاجِرُ رِطْلًا عَسَلًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 25 (Section 2, Part 1)",
          "sentence": "بَاعَ التَّاجِرُ رِطْلًا عَسَلًا",
          "translation": "The businessman sold a pound of honey.",
          "cells": [
            "بَاعَ",
            "التَّاجِرُ",
            "رِطْلًا",
            "عَسَلًا"
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
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "يَمْلَأُ الْمُؤْمِنُ الْمِيْزَانَ حَسَنَاتٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 25 (Section 2, Part 1)",
          "sentence": "يَمْلَأُ الْمُؤْمِنُ الْمِيْزَانَ حَسَنَاتٍ",
          "translation": "The believer fills the scale with good deeds.",
          "cells": [
            "يَمْلَأُ",
            "الْمُؤْمِنُ",
            "الْمِيْزَانَ",
            "حَسَنَاتٍ"
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
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "كَانَتِ الدُّنْيَا مَمْلُوْءَةً ظُلْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 26 (Section 2, Part 1)",
          "sentence": "كَانَتِ الدُّنْيَا مَمْلُوْءَةً ظُلْمًا",
          "translation": "The world was filled with oppression.",
          "cells": [
            "كَانَتِ",
            "الدُّنْيَا",
            "مَمْلُوْءَةً",
            "ظُلْمًا"
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
                  "end": 3,
                  "role": "تَمْيِيْزٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ"
          ]
        },
        {
          "title": "pound (weight)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pound (weight)\"?",
          "options": [
            "رِطْلٌ",
            "شَرٌّ",
            "خَيْرٌ",
            "حَسَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "pound (weight)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رِطْلٌ mean?",
          "options": [
            "pound (weight)",
            "evil deed",
            "better",
            "reward, wage"
          ],
          "correct": 0
        },
        {
          "title": "pound (weight) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رِطْلٌ?",
          "options": [
            "أَرْطَالٌ",
            "خِيَارٌ",
            "حَقَائِبُ",
            "مَوَازِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "evil deed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"evil deed\"?",
          "options": [
            "سَيِّئَةٌ",
            "شَرٌّ",
            "أَقَلُّ",
            "حَقِيْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "evil deed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَيِّئَةٌ mean?",
          "options": [
            "evil deed",
            "less, least",
            "more, most",
            "litre"
          ],
          "correct": 0
        },
        {
          "title": "evil deed (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَيِّئَةٌ?",
          "options": [
            "سَيِّئَاتٌ",
            "أَرْطَالٌ",
            "مَوَازِيْنُ",
            "حَقَائِبُ"
          ],
          "correct": 0
        },
        {
          "title": "worse, worst, evil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"worse, worst, evil\"?",
          "options": [
            "شَرٌّ",
            "حَسَنَةٌ",
            "أَحْسَنُ",
            "حَقِيْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "worse, worst, evil",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرٌّ mean?",
          "options": [
            "worse, worst, evil",
            "evil deed",
            "bag",
            "severe, severest"
          ],
          "correct": 0
        },
        {
          "title": "worse, worst, evil (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَرٌّ?",
          "options": [
            "شِرَارٌ",
            "سَيِّئَاتٌ",
            "خِيَارٌ",
            "مَوَازِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "milk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"milk\"?",
          "options": [
            "لَبَنٌ",
            "حَقِيْبَةٌ",
            "أَحْسَنُ",
            "خَيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "milk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبَنٌ mean?",
          "options": [
            "milk",
            "reward, recompense",
            "pound (weight)",
            "severe, severest"
          ],
          "correct": 0
        },
        {
          "title": "milk (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لَبَنٌ?",
          "options": [
            "أَلْبَانٌ",
            "لِتْرَاتٌ",
            "سَيِّئَاتٌ",
            "أَرْطَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "litre",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"litre\"?",
          "options": [
            "لِتْرٌ",
            "أَقَلُّ",
            "خَيْرٌ",
            "حَسَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "litre",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لِتْرٌ mean?",
          "options": [
            "litre",
            "reward, recompense",
            "pound (weight)",
            "bag"
          ],
          "correct": 0
        },
        {
          "title": "litre (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لِتْرٌ?",
          "options": [
            "لِتْرَاتٌ",
            "مَوَازِيْنُ",
            "أُجُوْرٌ",
            "حَقَائِبُ"
          ],
          "correct": 0
        },
        {
          "title": "scale",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"scale\"?",
          "options": [
            "مِيْزَانٌ",
            "أَجْرٌ",
            "سَيِّئَةٌ",
            "حَسَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "scale",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِيْزَانٌ mean?",
          "options": [
            "scale",
            "severe, severest",
            "pound (weight)",
            "better, best, goodness"
          ],
          "correct": 0
        },
        {
          "title": "scale (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِيْزَانٌ?",
          "options": [
            "مَوَازِيْنُ",
            "أُجُوْرٌ",
            "شِرَارٌ",
            "خِيَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "reward, wage",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"reward, wage\"?",
          "options": [
            "أَجْرٌ",
            "شَرٌّ",
            "سَيِّئَةٌ",
            "أَقَلُّ"
          ],
          "correct": 0
        },
        {
          "title": "reward, wage",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجْرٌ mean?",
          "options": [
            "reward, wage",
            "litre",
            "milk",
            "pound (weight)"
          ],
          "correct": 0
        },
        {
          "title": "reward, wage (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَجْرٌ?",
          "options": [
            "أُجُوْرٌ",
            "حَقَائِبُ",
            "أَلْبَانٌ",
            "خِيَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "better",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"better\"?",
          "options": [
            "أَحْسَنُ",
            "مِيْزَانٌ",
            "أَجْرٌ",
            "أَكْثَرُ"
          ],
          "correct": 0
        },
        {
          "title": "better",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْسَنُ mean?",
          "options": [
            "better",
            "reward, wage",
            "worse, worst, evil",
            "reward, recompense"
          ],
          "correct": 0
        },
        {
          "title": "reward, recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"reward, recompense\"?",
          "options": [
            "ثَوَابٌ",
            "مِيْزَانٌ",
            "أَحْسَنُ",
            "حَقِيْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "reward, recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ثَوَابٌ mean?",
          "options": [
            "reward, recompense",
            "evil deed",
            "better",
            "worse, worst, evil"
          ],
          "correct": 0
        },
        {
          "title": "good deed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"good deed\"?",
          "options": [
            "حَسَنَةٌ",
            "رِطْلٌ",
            "أَقَلُّ",
            "سَيِّئَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "good deed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَسَنَةٌ mean?",
          "options": [
            "good deed",
            "milk",
            "less, least",
            "reward, recompense"
          ],
          "correct": 0
        },
        {
          "title": "good deed (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَسَنَةٌ?",
          "options": [
            "حَسَنَاتٌ",
            "أَرْطَالٌ",
            "مَوَازِيْنُ",
            "حَقَائِبُ"
          ],
          "correct": 0
        },
        {
          "title": "bag",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bag\"?",
          "options": [
            "حَقِيْبَةٌ",
            "أَجْرٌ",
            "حَسَنَةٌ",
            "أَحْسَنُ"
          ],
          "correct": 0
        },
        {
          "title": "bag",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَقِيْبَةٌ mean?",
          "options": [
            "bag",
            "litre",
            "good deed",
            "evil deed"
          ],
          "correct": 0
        },
        {
          "title": "bag (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَقِيْبَةٌ?",
          "options": [
            "حَقَائِبُ",
            "أَلْبَانٌ",
            "خِيَارٌ",
            "شِرَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "better, best, goodness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"better, best, goodness\"?",
          "options": [
            "خَيْرٌ",
            "أَشَدُّ",
            "لِتْرٌ",
            "سَيِّئَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "better, best, goodness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَيْرٌ mean?",
          "options": [
            "better, best, goodness",
            "scale",
            "worse, worst, evil",
            "good deed"
          ],
          "correct": 0
        },
        {
          "title": "better, best, goodness (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَيْرٌ?",
          "options": [
            "خِيَارٌ",
            "حَقَائِبُ",
            "أَلْبَانٌ",
            "سَيِّئَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "severe, severest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"severe, severest\"?",
          "options": [
            "أَشَدُّ",
            "لِتْرٌ",
            "أَقَلُّ",
            "رِطْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "severe, severest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَشَدُّ mean?",
          "options": [
            "severe, severest",
            "less, least",
            "worse, worst, evil",
            "milk"
          ],
          "correct": 0
        },
        {
          "title": "more, most",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more, most\"?",
          "options": [
            "أَكْثَرُ",
            "أَقَلُّ",
            "حَسَنَةٌ",
            "أَجْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "more, most",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكْثَرُ mean?",
          "options": [
            "more, most",
            "worse, worst, evil",
            "milk",
            "good deed"
          ],
          "correct": 0
        },
        {
          "title": "less, least",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"less, least\"?",
          "options": [
            "أَقَلُّ",
            "أَكْثَرُ",
            "أَشَدُّ",
            "خَيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "less, least",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَلُّ mean?",
          "options": [
            "less, least",
            "reward, wage",
            "evil deed",
            "more, most"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l8",
      "title": "الاستثناء",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "اِسْتِثْنَاءٌ",
          "lines": [
            {
              "html": "An exclusion is to remove someone or something from a judgement: 'The students came EXCEPT Zaid.' In Arabic, exclusion is called اِسْتِثْنَاءٌ. The word إِلَّا, 'except', is used for exclusion. This is called حَرْفُ الْاِسْتِثْنَاءِ, the particle of exclusion. The word after إِلَّا is called مُسْتَثْنًى, the excluded. The مستثنى is مَنْصُوْبٌ.",
              "list": false
            },
            {
              "html": "جَاءَ الطُّلَّابُ إِلَّا زَيْدًا — The students came except Zaid.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In tarkib, the element from which the exclusion is taking place, مُسْتَثْنًى مِنْهُ, must be mentioned — e.g. مُسْتَثْنًى مِنَ الْفَاعِلِ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "جَاءَ الطُّلَّابُ إِلَّا زَيْدًا",
                "translation": "The students came except Zaid.",
                "cells": [
                  "جَاءَ",
                  "الطُّلَّابُ",
                  "إِلَّا",
                  "زَيْدًا"
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
                        "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مُسْتَثْنًى مِنَ الْفَاعِلِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "A جملة اسمية may also have a مستثنى. (Here the label is مُسْتَثْنًى مِنَ الْمُبْتَدَأِ.)",
              "list": false
            },
            {
              "html": "اَلطُّلَّابُ مُجْتَهِدُوْنَ إِلَّا زَيْدًا — The students are hardworking except Zaid.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلطُّلَّابُ مُجْتَهِدُوْنَ إِلَّا زَيْدًا",
                "translation": "The students are hardworking except Zaid.",
                "cells": [
                  "اَلطُّلَّابُ",
                  "مُجْتَهِدُوْنَ",
                  "إِلَّا",
                  "زَيْدًا"
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
                        "end": 1,
                        "role": "خَبَرٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "مُسْتَثْنًى مِنَ الْمُبْتَدَأِ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "جَاءَ الطُّلَّابُ إِلَّا زَيْدًا",
            "kind": "mcq",
            "options": [
              "مستثنى: زَيْدًا — مستثنى منه: الطُّلَّابُ (الفاعل)",
              "مستثنى: الطُّلَّابُ — مستثنى منه: زَيْدًا",
              "مستثنى: زَيْدًا — مستثنى منه: جَاءَ",
              "مستثنى: إِلَّا — مستثنى منه: الطُّلَّابُ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اِسْتِثْنَاءٌ — Exclusion",
        "rows": [
          {
            "label": "إِلَّا",
            "arabic": "حَرْفُ الْاِسْتِثْنَاءِ",
            "meaning": "'except'"
          },
          {
            "label": "مُسْتَثْنًى",
            "arabic": "the excluded",
            "meaning": "مَنْصُوْبٌ — the word after إِلَّا"
          },
          {
            "label": "مُسْتَثْنًى مِنْهُ",
            "arabic": "excluded from",
            "meaning": "must be mentioned in tarkeeb (e.g. مِنَ الْفَاعِلِ / مِنَ الْمُبْتَدَأِ)"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is اِسْتِثْنَاءٌ?",
          "options": [
            "Emphasising part of a sentence",
            "Removing someone or something from a judgement",
            "Making a sentence negative",
            "Asking a question"
          ],
          "correct": 1,
          "explanation": "'The students came except Zaid' — Zaid is removed from the judgement."
        },
        {
          "q": "What is the word after إِلَّا called, and what is its irab?",
          "options": [
            "مُسْتَثْنًى مِنْهُ — مرفوع",
            "مُسْتَثْنًى — مَنْصُوْبٌ",
            "مفعول به — منصوب",
            "خبر — مرفوع"
          ],
          "correct": 1,
          "explanation": "The excluded (مستثنى) is منصوب: إِلَّا زَيْدًا."
        },
        {
          "q": "What must be mentioned in the tarkeeb of an exclusion?",
          "options": [
            "The tense of the verb",
            "The مُسْتَثْنًى مِنْهُ — the element from which the exclusion takes place",
            "The plural of the مستثنى",
            "The root letters of إِلَّا"
          ],
          "correct": 1,
          "explanation": "e.g. مُسْتَثْنًى مِنَ الْفَاعِلِ in جَاءَ الطُّلَّابُ إِلَّا زَيْدًا."
        },
        {
          "q": "Can a جملة اسمية have a مستثنى?",
          "options": [
            "No, only a جملة فعلية",
            "Yes — e.g. اَلطُّلَّابُ مُجْتَهِدُوْنَ إِلَّا زَيْدًا",
            "Only when it has كَانَ",
            "Only in the Quran"
          ],
          "correct": 1,
          "explanation": "'The students are hardworking except Zaid' — مستثنى من المبتدأ."
        },
        {
          "q": "What is إِلَّا called when used for exclusion?",
          "options": [
            "حَرْفُ نَفْيٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ"
          ],
          "correct": 1,
          "explanation": "The particle of exclusion. (When there is no مستثنى منه in a negative sentence, it becomes حرف حصر — next lessons.)"
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 27 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In اَلطُّلَّابُ مُجْتَهِدُوْنَ إِلَّا زَيْدًا, the word زَيْدًا is…",
          "options": [
            "مُسْتَثْنًى — the excluded",
            "مُسْتَثْنًى مِنْهُ",
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ"
          ],
          "correct": 0,
          "explanation": "The word after إِلَّا is the مستثنى, and it is مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 27 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "Why is الْمَلِكَ منصوب in عَدَلَ النَّاسُ إِلَّا الْمَلِكَ?",
          "options": [
            "It is the مفعول به of عَدَلَ",
            "It is the فاعل",
            "The مُسْتَثْنًى after إِلَّا is مَنْصُوْبٌ",
            "It is a تمييز"
          ],
          "correct": 2,
          "explanation": "'The people were just except the king' — the excluded is always منصوب."
        },
        {
          "title": "Book Exercise 27 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In جَاءَ النَّاسُ الْيَوْمَ إِلَّا رَجُلَيْنِ, the مُسْتَثْنًى مِنْهُ is…",
          "options": [
            "الْيَوْمَ",
            "رَجُلَيْنِ",
            "جَاءَ",
            "النَّاسُ — the فاعل from which the exclusion is made"
          ],
          "correct": 3,
          "explanation": "The two men are excluded from 'the people' — labelled مُسْتَثْنًى مِنَ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 27 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In صَامَ الْأَوْلَادُ شَهْرًا إِلَّا يَوْمَيْنِ, what is يَوْمَيْنِ excluded from?",
          "options": [
            "From الْأَوْلَادُ (the فاعل)",
            "From شَهْرًا (the مفعول فيه — the time period)",
            "From صَامَ (the verb)",
            "Nothing — إِلَّا is for emphasis here"
          ],
          "correct": 1,
          "explanation": "Two days are removed from the month of fasting: مُسْتَثْنًى مِنَ الْمَفْعُوْلِ فِيْهِ."
        },
        {
          "title": "Book Exercise 27 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "In يَغْفِرُ اللهُ الذُّنُوْبَ إِلَّا الشِّرْكَ, the word إِلَّا is labelled…",
          "options": [
            "حَرْفُ نَفْيٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ — the sentence is affirmative with a مستثنى منه",
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ"
          ],
          "correct": 1,
          "explanation": "The مستثنى منه (الذُّنُوْبَ) is mentioned, so إِلَّا = 'except', and الشِّرْكَ is منصوب."
        },
        {
          "title": "Book Exercise 27 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "مَا غَابَتْ فَاطِمَةُ قَطُّ إِلَّا يَوْمًا translates as…",
          "options": [
            "Fatima was absent every day except one",
            "Only Fatima was absent one day",
            "Fatima was not ever absent except one day",
            "Fatima will never be absent again"
          ],
          "correct": 2,
          "explanation": "Exclusion of one day from her never being absent."
        },
        {
          "title": "Book Exercise 29 (Section 2, Part 1)",
          "kind": "mcq",
          "prompt": "صَامَ الْأَوْلَادُ يَوْمَيْنِ إِلَّا زَيْدًا translates as…",
          "options": [
            "The children fasted for two days, except Zaid",
            "Zaid alone fasted for two days",
            "The children fasted except for two days",
            "Zaid fasted two more days than the children"
          ],
          "correct": 0,
          "explanation": "Zaid is excluded from the فاعل (the children)."
        },
        {
          "title": "جَاءَ الطُّلَّابُ إِلَّا زَيْدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 108)",
          "sentence": "جَاءَ الطُّلَّابُ إِلَّا زَيْدًا",
          "translation": "The students came except Zaid.",
          "cells": [
            "جَاءَ",
            "الطُّلَّابُ",
            "إِلَّا",
            "زَيْدًا"
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
                  "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُسْتَثْنًى مِنَ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "اَلطُّلَّابُ مُجْتَهِدُوْنَ إِلَّا زَيْدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 108)",
          "sentence": "اَلطُّلَّابُ مُجْتَهِدُوْنَ إِلَّا زَيْدًا",
          "translation": "The students are hardworking except Zaid.",
          "cells": [
            "اَلطُّلَّابُ",
            "مُجْتَهِدُوْنَ",
            "إِلَّا",
            "زَيْدًا"
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
                  "end": 1,
                  "role": "خَبَرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُسْتَثْنًى مِنَ الْمُبْتَدَأِ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "اِسْمُ كَانَ",
            "اِسْمُ إِنَّ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "عَدَلَ النَّاسُ إِلَّا الْمَلِكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 27 (Section 2, Part 1)",
          "sentence": "عَدَلَ النَّاسُ إِلَّا الْمَلِكَ",
          "translation": "The people were just except the king.",
          "cells": [
            "عَدَلَ",
            "النَّاسُ",
            "إِلَّا",
            "الْمَلِكَ"
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
                  "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مُسْتَثْنًى مِنَ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "جَاءَ النَّاسُ الْيَوْمَ إِلَّا رَجُلَيْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 27 (Section 2, Part 1)",
          "sentence": "جَاءَ النَّاسُ الْيَوْمَ إِلَّا رَجُلَيْنِ",
          "translation": "The people came today except two men.",
          "cells": [
            "جَاءَ",
            "النَّاسُ",
            "الْيَوْمَ",
            "إِلَّا",
            "رَجُلَيْنِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُسْتَثْنًى مِنَ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "يَغْفِرُ اللهُ الذُّنُوْبَ إِلَّا الشِّرْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 27 (Section 2, Part 1)",
          "sentence": "يَغْفِرُ اللهُ الذُّنُوْبَ إِلَّا الشِّرْكَ",
          "translation": "Allah forgives the sins except polytheism.",
          "cells": [
            "يَغْفِرُ",
            "اللهُ",
            "الذُّنُوْبَ",
            "إِلَّا",
            "الشِّرْكَ"
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
                  "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُسْتَثْنًى مِنَ الْمَفْعُوْلِ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "صَامَ الْأَوْلَادُ شَهْرًا إِلَّا يَوْمَيْنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 27 (Section 2, Part 1)",
          "sentence": "صَامَ الْأَوْلَادُ شَهْرًا إِلَّا يَوْمَيْنِ",
          "translation": "The children fasted for a month except two days.",
          "cells": [
            "صَامَ",
            "الْأَوْلَادُ",
            "شَهْرًا",
            "إِلَّا",
            "يَوْمَيْنِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُسْتَثْنًى مِنَ الْمَفْعُوْلِ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "فَهِمَتِ الطَّالِبَاتُ الدَّرْسَ إِلَّا بِنْتًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 27 (Section 2, Part 1)",
          "sentence": "فَهِمَتِ الطَّالِبَاتُ الدَّرْسَ إِلَّا بِنْتًا",
          "translation": "The students understood the lesson except one girl.",
          "cells": [
            "فَهِمَتِ",
            "الطَّالِبَاتُ",
            "الدَّرْسَ",
            "إِلَّا",
            "بِنْتًا"
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
                  "role": "حَرْفُ الْاِسْتِثْنَاءِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُسْتَثْنًى مِنَ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ",
            "مُبْتَدَأٌ",
            "نَائِبُ الْفَاعِلِ"
          ]
        },
        {
          "title": "to open",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to open\"?",
          "options": [
            "فَتَحَ يَفْتَحُ",
            "قَالَ يَقُوْلُ",
            "عَلِمَ يَعْلَمُ",
            "وَضَعَ يَضَعُ"
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
            "to understand",
            "to write, prescribe",
            "to put"
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
            "عِلْمًا",
            "صُنْعًا",
            "إِنْعَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to understand\"?",
          "options": [
            "فَهِمَ يَفْهَمُ",
            "أَنْعَمَ يُنْعِمُ",
            "فَتَحَ يَفْتَحُ",
            "عَلِمَ يَعْلَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَهِمَ يَفْهَمُ mean?",
          "options": [
            "to understand",
            "to write, prescribe",
            "to memorise, protect",
            "to make, manufacture, do"
          ],
          "correct": 0
        },
        {
          "title": "to understand (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَهِمَ يَفْهَمُ?",
          "options": [
            "فَهْمًا",
            "فَتْحًا",
            "إِنْعَامًا",
            "صُنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to say",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to say\"?",
          "options": [
            "قَالَ يَقُوْلُ",
            "حَفِظَ يَحْفَظُ",
            "وَضَعَ يَضَعُ",
            "كَتَبَ يَكْتُبُ"
          ],
          "correct": 0
        },
        {
          "title": "to say",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَالَ يَقُوْلُ mean?",
          "options": [
            "to say",
            "to memorise, protect",
            "to write, prescribe",
            "to put"
          ],
          "correct": 0
        },
        {
          "title": "to say (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَالَ يَقُوْلُ?",
          "options": [
            "قَوْلًا",
            "فَهْمًا",
            "عِلْمًا",
            "إِنْعَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to write, prescribe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to write, prescribe\"?",
          "options": [
            "كَتَبَ يَكْتُبُ",
            "رَجَعَ يَرْجِعُ",
            "عَلِمَ يَعْلَمُ",
            "أَنْعَمَ يُنْعِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to write, prescribe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَتَبَ يَكْتُبُ mean?",
          "options": [
            "to write, prescribe",
            "to favour",
            "to put",
            "to return"
          ],
          "correct": 0
        },
        {
          "title": "to write, prescribe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَتَبَ يَكْتُبُ?",
          "options": [
            "كِتَابَةً",
            "وَضْعًا",
            "فَهْمًا",
            "فَتْحًا"
          ],
          "correct": 0
        },
        {
          "title": "to put",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to put\"?",
          "options": [
            "وَضَعَ يَضَعُ",
            "فَهِمَ يَفْهَمُ",
            "رَجَعَ يَرْجِعُ",
            "أَنْعَمَ يُنْعِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to put",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَضَعَ يَضَعُ mean?",
          "options": [
            "to put",
            "to write, prescribe",
            "to make, manufacture, do",
            "to open"
          ],
          "correct": 0
        },
        {
          "title": "to put (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَضَعَ يَضَعُ?",
          "options": [
            "وَضْعًا",
            "إِنْعَامًا",
            "حِفْظًا",
            "صُنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to favour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to favour\"?",
          "options": [
            "أَنْعَمَ يُنْعِمُ",
            "عَلِمَ يَعْلَمُ",
            "وَضَعَ يَضَعُ",
            "قَالَ يَقُوْلُ"
          ],
          "correct": 0
        },
        {
          "title": "to favour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْعَمَ يُنْعِمُ mean?",
          "options": [
            "to favour",
            "to open",
            "to say",
            "to memorise, protect"
          ],
          "correct": 0
        },
        {
          "title": "to favour (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْعَمَ يُنْعِمُ?",
          "options": [
            "إِنْعَامًا",
            "حِفْظًا",
            "قَوْلًا",
            "عِلْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to memorise, protect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to memorise, protect\"?",
          "options": [
            "حَفِظَ يَحْفَظُ",
            "فَتَحَ يَفْتَحُ",
            "صَنَعَ يَصْنَعُ",
            "فَهِمَ يَفْهَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to memorise, protect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَفِظَ يَحْفَظُ mean?",
          "options": [
            "to memorise, protect",
            "to say",
            "to favour",
            "to make, manufacture, do"
          ],
          "correct": 0
        },
        {
          "title": "to memorise, protect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَفِظَ يَحْفَظُ?",
          "options": [
            "حِفْظًا",
            "صُنْعًا",
            "كِتَابَةً",
            "عِلْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "رَجَعَ يَرْجِعُ",
            "وَضَعَ يَضَعُ",
            "حَفِظَ يَحْفَظُ",
            "أَنْعَمَ يُنْعِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَجَعَ يَرْجِعُ mean?",
          "options": [
            "to return",
            "to say",
            "to understand",
            "to write, prescribe"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَجَعَ يَرْجِعُ?",
          "options": [
            "رُجُوْعًا",
            "حِفْظًا",
            "وَضْعًا",
            "إِنْعَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to make, manufacture, do",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make, manufacture, do\"?",
          "options": [
            "صَنَعَ يَصْنَعُ",
            "قَالَ يَقُوْلُ",
            "أَنْعَمَ يُنْعِمُ",
            "فَتَحَ يَفْتَحُ"
          ],
          "correct": 0
        },
        {
          "title": "to make, manufacture, do",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَنَعَ يَصْنَعُ mean?",
          "options": [
            "to make, manufacture, do",
            "to put",
            "to understand",
            "to favour"
          ],
          "correct": 0
        },
        {
          "title": "to make, manufacture, do (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَنَعَ يَصْنَعُ?",
          "options": [
            "صُنْعًا",
            "كِتَابَةً",
            "وَضْعًا",
            "فَتْحًا"
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
            "فَتَحَ يَفْتَحُ",
            "قَالَ يَقُوْلُ",
            "وَضَعَ يَضَعُ"
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
            "to return",
            "to say",
            "to understand"
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
            "فَتْحًا",
            "إِنْعَامًا",
            "رُجُوْعًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l9",
      "title": "توكيد الفعل وأدوات المستقبل",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "Specifying the Future — سَ and سَوْفَ",
          "lines": [
            {
              "html": "A فعل مضارع can have three tenses: present habitual, present continuous, and future. There are two particles which can be prefixed to a فعل مضارع to specify its meaning to the future: 1. سَ specifies the مضارع to the near future, translated as 'soon'. 2. سَوْفَ specifies the مضارع to the distant future; it is best left untranslated.",
              "list": false
            },
            {
              "html": "سَيَذْهَبُ زَيْدٌ — Zaid will soon go.",
              "list": true,
              "bullet": true
            },
            {
              "html": "سَوْفَ يَذْهَبُ زَيْدٌ — Zaid will go.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "سَ + مضارع",
            "kind": "mcq",
            "options": [
              "near future — 'will soon'",
              "distant future — 'will'",
              "'indeed / did / has done'",
              "emphatic future negative — verb becomes منصوب"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Emphasising the Verb — قَدْ and لَقَدْ",
          "lines": [
            {
              "html": "The particle قَدْ can be added before a verb to emphasise it. قَدْ is called حَرْفُ تَحْقِيْقٍ and is غَيْرُ عَامِلٍ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "قَدْ ذَهَبَ زَيْدٌ",
                "translation": "Indeed, Zaid went.",
                "cells": [
                  "قَدْ",
                  "ذَهَبَ",
                  "زَيْدٌ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Translation of قَدْ: 1. Before الماضي it can be translated (a) by adding 'indeed' or 'certainly' at the beginning of the sentence, followed by a comma; (b) by adding the emphatic 'do/did' before the verb; or (c) by adding 'has/have' followed by the past participle of the verb: 'Indeed, Zaid went / Zaid did go / Zaid has gone'. 2. Before المضارع it can be translated (a) as 'indeed' or 'certainly'; or (b) as 'sometimes' or 'maybe' — this قَدْ is known as حَرْفُ تَقْلِيْلٍ. The context will help determine the meaning.",
              "list": false
            },
            {
              "html": "قَدْ يَعْلَمُ اللهُ — Indeed, Allah knows.",
              "list": true,
              "bullet": true
            },
            {
              "html": "قَدْ يَصْدُقُ الْكَذُوْبُ — Sometimes, a liar speaks the truth.",
              "list": true,
              "bullet": true
            },
            {
              "html": "كَانَ is also a verb (فعل ناقص), so it can also have قَدْ or لَقَدْ before it.",
              "list": false
            },
            {
              "html": "قَدْ كَانَ مُحَمَّدٌ صَادِقًا — Indeed, Muhammad was honest.",
              "list": true,
              "bullet": true
            },
            {
              "html": "A لَامُ الْاِبْتِدَاءِ can also come before قَدْ (لَقَدْ) to create extra emphasis. This will not be reflected in the translation.",
              "list": false
            },
            {
              "html": "لَقَدْ سَمِعَ اللهُ — Indeed, Allah has heard.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَقَدْ سَمِعَ اللهُ",
                "translation": "Indeed, Allah has heard.",
                "cells": [
                  "لَ",
                  "قَدْ",
                  "سَمِعَ",
                  "اللهُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "لَامُ الْاِبْتِدَاءِ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "حَرْفُ تَحْقِيْقٍ"
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
                ]
              }
            },
            {
              "html": "لَامُ الْاِبْتِدَاءِ can also be added to a فعل مضارع. This creates emphasis and specifies the مضارع to the present tense, unless there is context denoting otherwise.",
              "list": false
            },
            {
              "html": "لَيَفْتَحُ الرَّجُلُ الْبَابَ — Indeed, the man is opening the door.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "قَدْ + مضارع",
            "kind": "mcq",
            "options": [
              "'indeed' OR 'sometimes/maybe'",
              "'indeed / did / has done'",
              "distant future — 'will'",
              "emphatic future negative — verb becomes منصوب"
            ],
            "correct": 0
          }
        },
        {
          "heading": "نُوْنُ التَّأْكِيْدِ and لَنْ",
          "lines": [
            {
              "html": "The particle نَّ can be added to a فعل مضارع to create emphasis. This is called نُوْنُ التَّأْكِيْدِ, the ن of emphasis. It is added by: 1. Placing a لَامُ الْاِبْتِدَاءِ before the فعل مضارع; 2. Changing the مضارع to مَبْنِيٌّ with a فَتْحَةٌ; 3. Adding the particle نَّ to the end.",
              "list": false
            },
            {
              "html": "لَ + يَنْصُرُ + نَّ ← لَيَنْصُرَنَّ الْمُسْلِمِيْنَ — building the emphasised form",
              "list": true,
              "bullet": true
            },
            {
              "html": "The نُوْنُ التَّأْكِيْدِ is translated as 'most certainly' or 'most definitely'. When a نُوْنُ التَّأْكِيْدِ comes on a فعل مضارع, the مضارع will be translated in the future tense.",
              "list": false
            },
            {
              "html": "لَيَنْصُرَنَّ اللهُ الْمُسْلِمِيْنَ — Allah will most definitely help the Muslims.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَيَنْصُرَنَّ اللهُ الْمُسْلِمِيْنَ",
                "translation": "Allah will most definitely help the Muslims.",
                "cells": [
                  "لَ",
                  "يَنْصُرَ",
                  "نَّ",
                  "اللهُ",
                  "الْمُسْلِمِيْنَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "لَامُ الْاِبْتِدَاءِ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فِعْلٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "نُوْنُ التَّأْكِيْدِ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The negative particle لَنْ can be brought before a فعل مضارع to give an emphatic negative meaning in the future tense, rendering it مَنْصُوْبٌ.",
              "list": false
            },
            {
              "html": "لَنْ يَذْهَبَ زَيْدٌ — Zaid will NOT go.",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "Summary of Verb Emphasis",
                "headers": [
                  "Tense",
                  "Affirmative",
                  "Negative"
                ],
                "rows": [
                  [
                    "Past",
                    "قَدْ — قَدْ صَدَقَ الْوَلَدُ",
                    "قَطُّ — مَا كَذَبَ الْوَلَدُ قَطُّ"
                  ],
                  [
                    "Present",
                    "لَامُ الْاِبْتِدَاءِ — لَيَصْدُقُ الْوَلَدُ",
                    "—"
                  ],
                  [
                    "Future",
                    "لَامُ الْاِبْتِدَاءِ + نُوْنُ التَّأْكِيْدِ — لَيَصْدُقَنَّ الْوَلَدُ",
                    "لَنْ — لَنْ يَكْذِبَ الْوَلَدُ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "لَـ … ـنَّ + مضارع",
            "kind": "mcq",
            "options": [
              "'will most definitely' (future emphasis)",
              "near future — 'will soon'",
              "'indeed' OR 'sometimes/maybe'",
              "emphatic future negative — verb becomes منصوب"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Verb Emphasis",
        "rows": [
          {
            "label": "Past — affirmative",
            "arabic": "قَدْ صَدَقَ الْوَلَدُ",
            "meaning": "Indeed, the boy told the truth"
          },
          {
            "label": "Past — negative",
            "arabic": "مَا كَذَبَ الْوَلَدُ قَطُّ",
            "meaning": "The boy did not ever lie"
          },
          {
            "label": "Present",
            "arabic": "لَيَصْدُقُ الْوَلَدُ",
            "meaning": "لام الابتداء — Indeed, the boy is telling the truth"
          },
          {
            "label": "Future — affirmative",
            "arabic": "لَيَصْدُقَنَّ الْوَلَدُ",
            "meaning": "لام الابتداء + نون التأكيد — most definitely"
          },
          {
            "label": "Future — negative",
            "arabic": "لَنْ يَكْذِبَ الْوَلَدُ",
            "meaning": "will NOT lie"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the difference between سَ and سَوْفَ?",
          "options": [
            "سَ = near future ('soon'); سَوْفَ = distant future (untranslated)",
            "سَ = distant future; سَوْفَ = near future",
            "Both mean the past",
            "سَ negates; سَوْفَ emphasises"
          ],
          "correct": 0,
          "explanation": "سَيَذْهَبُ = will soon go; سَوْفَ يَذْهَبُ = will go."
        },
        {
          "q": "What is قَدْ called, and does it govern?",
          "options": [
            "حَرْفُ تَحْقِيْقٍ; it is غَيْرُ عَامِلٍ",
            "حَرْفُ نَفْيٍ; it makes the verb مجزوم",
            "حَرْفُ حَصْرٍ; it makes the verb منصوب",
            "فِعْلٌ نَاقِصٌ; it governs an اسم and خبر"
          ],
          "correct": 0,
          "explanation": "A particle of emphasis that causes no irab change."
        },
        {
          "q": "قَدْ يَصْدُقُ الْكَذُوْبُ is best translated as…",
          "options": [
            "Sometimes, a liar speaks the truth (حرف تقليل)",
            "Indeed, the liar spoke the truth",
            "The liar will most definitely speak the truth",
            "The liar never speaks the truth"
          ],
          "correct": 0,
          "explanation": "قَدْ + مضارع can mean 'sometimes/maybe' — context decides."
        },
        {
          "q": "How is the نُوْنُ التَّأْكِيْدِ added to a فعل مضارع?",
          "options": [
            "لام الابتداء before it, the مضارع becomes مبني with a فتحة, and نَّ is added at the end",
            "Just add نَّ to the end",
            "Add لَنْ before it",
            "Change the ي to a ت"
          ],
          "correct": 0,
          "explanation": "لَ + يَنْصُرَ + نَّ ← لَيَنْصُرَنَّ."
        },
        {
          "q": "What does لَامُ الْاِبْتِدَاءِ on a فعل مضارع do?",
          "options": [
            "Creates emphasis and specifies the present tense (unless context says otherwise)",
            "Makes the verb مجزوم",
            "Specifies the past",
            "Makes it negative"
          ],
          "correct": 0,
          "explanation": "لَيَفْتَحُ الرَّجُلُ الْبَابَ = Indeed, the man is opening the door."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 1 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "In سَيَرْجِعُ الْحُجَّاجُ, what does the prefix سَ indicate?",
          "options": [
            "The distant future",
            "Emphasis on the past",
            "The near future — 'will soon return'",
            "Negation"
          ],
          "correct": 2,
          "explanation": "سَ specifies the مضارع to the near future ('soon'); سَوْفَ gives the distant future."
        },
        {
          "title": "Book Exercise 2 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "In قَدْ حَفِظَ الْوَلَدُ الْقُرْآنَ, the particle قَدْ is labelled…",
          "options": [
            "حَرْفُ تَحْقِيْقٍ — a particle of emphasis, غَيْرُ عَامِلٍ",
            "حَرْفُ نَفْيٍ",
            "حَرْفُ حَصْرٍ",
            "فِعْلٌ نَاقِصٌ"
          ],
          "correct": 0,
          "explanation": "قَدْ + ماضي = 'indeed / did / has memorised'; it causes no irab change."
        },
        {
          "title": "Book text (p. 112)",
          "kind": "mcq",
          "prompt": "In قَدْ يَصْدُقُ الْكَذُوْبُ ('Sometimes, a liar speaks the truth'), this قَدْ is known as…",
          "options": [
            "حَرْفُ تَحْقِيْقٍ only",
            "حَرْفُ نَفْيٍ",
            "لَامُ الْاِبْتِدَاءِ",
            "حَرْفُ تَقْلِيْلٍ — قَدْ + مضارع meaning 'sometimes/maybe'"
          ],
          "correct": 3,
          "explanation": "Before a مضارع, قَدْ can mean 'indeed' OR 'sometimes' — context decides; the second usage is حرف تقليل."
        },
        {
          "title": "Book Exercise 3 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "Which is the correct emphasised form of يَحْفَظُ with نُوْنُ التَّأْكِيْدِ?",
          "options": [
            "لَيَحْفَظُنَّ",
            "لَيَحْفَظَنَّ",
            "سَيَحْفَظَنَّ",
            "لَنْ يَحْفَظَنَّ"
          ],
          "correct": 1,
          "explanation": "لام الابتداء + مضارع made مبني with a فتحة + نَّ: لَيَحْفَظَنَّ الْقُرْآنُ."
        },
        {
          "title": "Book Exercise 4 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "In لَنْ يُفْلِحَ ظَالِمٌ, what does لَنْ do to the verb?",
          "options": [
            "It makes it مجزوم and gives a past negative",
            "Nothing — it is غير عامل",
            "It gives an emphatic future negative and makes the مضارع مَنْصُوْبًا",
            "It makes the verb feminine"
          ],
          "correct": 2,
          "explanation": "Hence the فتحة on يُفْلِحَ: 'No oppressor will succeed.'"
        },
        {
          "title": "Book Exercise 2 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "«قَدْ أَفْلَحَ الْمُؤْمِنُوْنَ» translates as…",
          "options": [
            "Indeed, the believers have succeeded",
            "Sometimes the believers succeed",
            "The believers will succeed",
            "Have the believers succeeded?"
          ],
          "correct": 0,
          "explanation": "قَدْ + ماضي = indeed / have + past participle."
        },
        {
          "title": "Book Exercise 3 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "لَيَمُوْتَنَّ النَّاسُ translates as…",
          "options": [
            "People are dying",
            "People have died",
            "People may die",
            "People will most definitely die"
          ],
          "correct": 3,
          "explanation": "لام الابتداء + نون التأكيد = most certainly/definitely (future)."
        },
        {
          "title": "قَدْ ذَهَبَ زَيْدٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 112)",
          "sentence": "قَدْ ذَهَبَ زَيْدٌ",
          "translation": "Indeed, Zaid went. / Zaid did go. / Zaid has gone.",
          "cells": [
            "قَدْ",
            "ذَهَبَ",
            "زَيْدٌ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَفْيٍ",
            "لَامُ الْاِبْتِدَاءِ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "لَقَدْ سَمِعَ اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 114)",
          "sentence": "لَقَدْ سَمِعَ اللهُ",
          "translation": "Indeed, Allah has heard.",
          "cells": [
            "لَ",
            "قَدْ",
            "سَمِعَ",
            "اللهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "لَامُ الْاِبْتِدَاءِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ تَحْقِيْقٍ"
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
            "لَامٌ مُزَحْلَقَةٌ",
            "حَرْفُ نَفْيٍ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "قَدْ كَانَ مُحَمَّدٌ صَادِقًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 113)",
          "sentence": "قَدْ كَانَ مُحَمَّدٌ صَادِقًا",
          "translation": "Indeed, Muhammad was honest.",
          "cells": [
            "قَدْ",
            "كَانَ",
            "مُحَمَّدٌ",
            "صَادِقًا"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَفْيٍ",
            "لَامُ الْاِبْتِدَاءِ",
            "فِعْلٌ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
          ]
        },
        {
          "title": "لَيَنْصُرَنَّ اللهُ الْمُسْلِمِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 115)",
          "sentence": "لَيَنْصُرَنَّ اللهُ الْمُسْلِمِيْنَ",
          "translation": "Allah will most definitely help the Muslims.",
          "cells": [
            "لَ",
            "يَنْصُرَ",
            "نَّ",
            "اللهُ",
            "الْمُسْلِمِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "لَامُ الْاِبْتِدَاءِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نُوْنُ التَّأْكِيْدِ"
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
                }
              ]
            }
          ],
          "distractors": [
            "لَامٌ مُزَحْلَقَةٌ",
            "حَرْفُ تَحْقِيْقٍ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "لَيَحْفَظَنَّ الْقُرْآنُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 2, Part 2)",
          "sentence": "لَيَحْفَظَنَّ الْقُرْآنُ",
          "translation": "The Quran will most definitely be preserved.",
          "cells": [
            "لَ",
            "يَحْفَظَ",
            "نَّ",
            "الْقُرْآنُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "لَامُ الْاِبْتِدَاءِ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نُوْنُ التَّأْكِيْدِ"
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
            "لَامٌ مُزَحْلَقَةٌ",
            "حَرْفُ تَحْقِيْقٍ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "لَنْ يُفْلِحَ ظَالِمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 2, Part 2)",
          "sentence": "لَنْ يُفْلِحَ ظَالِمٌ",
          "translation": "No oppressor will succeed.",
          "cells": [
            "لَنْ",
            "يُفْلِحَ",
            "ظَالِمٌ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "لَنْ يَغْفِرَ اللهُ الشِّرْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Section 2, Part 2)",
          "sentence": "لَنْ يَغْفِرَ اللهُ الشِّرْكَ",
          "translation": "Allah will not forgive polytheism.",
          "cells": [
            "لَنْ",
            "يَغْفِرَ",
            "اللهُ",
            "الشِّرْكَ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "clear, clear proof",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"clear, clear proof\"?",
          "options": [
            "بَيِّنَةٌ",
            "بَشِيْرٌ",
            "مَوْعِظَةٌ",
            "بَصِيْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "clear, clear proof",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَيِّنَةٌ mean?",
          "options": [
            "clear, clear proof",
            "bearer of glad tidings",
            "admonition",
            "enlightenment, insight"
          ],
          "correct": 0
        },
        {
          "title": "clear, clear proof (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَيِّنَةٌ?",
          "options": [
            "بَيِّنَاتٌ",
            "بَصَائِرُ",
            "حِكَمٌ",
            "مَوَاعِظُ"
          ],
          "correct": 0
        },
        {
          "title": "truth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"truth\"?",
          "options": [
            "حَقٌّ",
            "حِكْمَةٌ",
            "بَصِيْرَةٌ",
            "بَيِّنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "truth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَقٌّ mean?",
          "options": [
            "truth",
            "wisdom",
            "admonition",
            "enlightenment, insight"
          ],
          "correct": 0
        },
        {
          "title": "admonition",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"admonition\"?",
          "options": [
            "مَوْعِظَةٌ",
            "بَصِيْرَةٌ",
            "حِكْمَةٌ",
            "بَيِّنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "admonition",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَوْعِظَةٌ mean?",
          "options": [
            "admonition",
            "truth",
            "enlightenment, insight",
            "clear, clear proof"
          ],
          "correct": 0
        },
        {
          "title": "admonition (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَوْعِظَةٌ?",
          "options": [
            "مَوَاعِظُ",
            "حِكَمٌ",
            "بَصَائِرُ",
            "بَيِّنَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "wisdom",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wisdom\"?",
          "options": [
            "حِكْمَةٌ",
            "حَقٌّ",
            "بَشِيْرٌ",
            "بَيِّنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "wisdom",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حِكْمَةٌ mean?",
          "options": [
            "wisdom",
            "enlightenment, insight",
            "admonition",
            "bearer of glad tidings"
          ],
          "correct": 0
        },
        {
          "title": "wisdom (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حِكْمَةٌ?",
          "options": [
            "حِكَمٌ",
            "بَيِّنَاتٌ",
            "مَوَاعِظُ",
            "بَصَائِرُ"
          ],
          "correct": 0
        },
        {
          "title": "bearer of glad tidings",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bearer of glad tidings\"?",
          "options": [
            "بَشِيْرٌ",
            "بَيِّنَةٌ",
            "بَصِيْرَةٌ",
            "حِكْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "bearer of glad tidings",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَشِيْرٌ mean?",
          "options": [
            "bearer of glad tidings",
            "truth",
            "admonition",
            "clear, clear proof"
          ],
          "correct": 0
        },
        {
          "title": "enlightenment, insight",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"enlightenment, insight\"?",
          "options": [
            "بَصِيْرَةٌ",
            "حَقٌّ",
            "بَشِيْرٌ",
            "مَوْعِظَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "enlightenment, insight",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَصِيْرَةٌ mean?",
          "options": [
            "enlightenment, insight",
            "bearer of glad tidings",
            "wisdom",
            "clear, clear proof"
          ],
          "correct": 0
        },
        {
          "title": "enlightenment, insight (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَصِيْرَةٌ?",
          "options": [
            "بَصَائِرُ",
            "حِكَمٌ",
            "مَوَاعِظُ",
            "بَيِّنَاتٌ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l10",
      "title": "التقديم والحصر",
      "subtitle": "Section 2: اَلْجُمْلَةُ الْفِعْلِيَّةُ",
      "concepts": [
        {
          "heading": "Order of a Sentence — Fronting (مُقَدَّمٌ)",
          "lines": [
            {
              "html": "In Arabic, sentence structure is very flexible. Bringing any part of a sentence before its usual place creates emphasis. For example, the مفعول به can be brought before the فاعل or even the فعل. The fronted element is labelled as مُقَدَّمٌ, and in tarkeeb it can be underlined in red.",
              "list": false
            },
            {
              "html": "يَعْبُدُ الْمُسْلِمُوْنَ اللهَ — The Muslims worship Allah. (usual order)",
              "list": true,
              "bullet": true
            },
            {
              "html": "يَعْبُدُ اللهَ الْمُسْلِمُوْنَ — the مفعول به brought before the فاعل",
              "list": true,
              "bullet": true
            },
            {
              "html": "اللهَ يَعْبُدُ الْمُسْلِمُوْنَ — the مفعول به brought before even the فعل",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "اللهَ يَعْبُدُ الْمُسْلِمُوْنَ",
                "translation": "Muslims worship ALLAH.",
                "cells": [
                  "اللهَ",
                  "يَعْبُدُ",
                  "الْمُسْلِمُوْنَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "مَفْعُوْلٌ بِهِ مُقَدَّمٌ"
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
                  }
                ]
              }
            },
            {
              "html": "This emphasis can be translated in three ways: 1. Underlining or using italics: 'Muslims worship ALLAH.' 2. Using the word 'only' before the emphasised element: 'The Muslims worship only Allah.' 3. Changing the sentence structure: 'It is Allah who the Muslims worship.'",
              "list": false
            },
            {
              "html": "If a sentence starts with a مَنْصُوْبٌ word, it will be a مَفْعُوْلٌ مُقَدَّمٌ and not the مبتدأ: اللهُ رَبٌّ = جملة اسمية; اللهَ يَعْبُدُ الْمُسْلِمُوْنَ = جملة فعلية.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "اللهَ يَعْبُدُ الْمُسْلِمُوْنَ fronts the مفعول به before even the فعل. What is this fronted word labelled?",
            "kind": "mcq",
            "options": [
              "مَفْعُوْلٌ بِهِ مُقَدَّمٌ",
              "مُبْتَدَأٌ",
              "فَاعِلٌ",
              "خَبَرٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "إِلَّا for Emphasis — حَرْفُ حَصْرٍ",
          "lines": [
            {
              "html": "If إِلَّا occurs in a negative sentence and the مُسْتَثْنًى مِنْهُ is omitted, it will not be for exclusion. Instead, it will be for emphasis. The negative particle and إِلَّا together are translated as 'only', placed before the point of emphasis. In tarkeeb, إِلَّا is labelled as حَرْفُ حَصْرٍ, a particle of emphasis. The word after it will not be the مستثنى; it keeps its normal role (فاعل، مفعول به etc.).",
              "list": false
            },
            {
              "html": "لَا يَعْبُدُ الْمُسْلِمُوْنَ إِلَّا اللهَ — Muslims worship only Allah.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَا يَعْبُدُ الْمُسْلِمُوْنَ إِلَّا اللهَ",
                "translation": "Muslims worship only Allah.",
                "cells": [
                  "لَا",
                  "يَعْبُدُ",
                  "الْمُسْلِمُوْنَ",
                  "إِلَّا",
                  "اللهَ"
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
                        "role": "حَرْفُ حَصْرٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "Uses of إِلَّا in a Negative Sentence",
                "headers": [
                  "مُسْتَثْنًى مِنْهُ Mentioned",
                  "مُسْتَثْنًى مِنْهُ not Mentioned"
                ],
                "rows": [
                  [
                    "Exclusion",
                    "Emphasis"
                  ],
                  [
                    "لَا يَعْبُدُ الْمُسْلِمُوْنَ أَحَدًا إِلَّا اللهَ",
                    "لَا يَعْبُدُ الْمُسْلِمُوْنَ إِلَّا اللهَ"
                  ],
                  [
                    "The Muslims do not worship anyone except Allah.",
                    "The Muslims do not worship … except Allah. (= only Allah)"
                  ]
                ]
              }
            },
            {
              "html": "The خبر of مَا الْمُشَبَّهَةُ بِلَيْسَ will be مَرْفُوْعٌ if it is preceded by إِلَّا.",
              "list": false
            },
            {
              "html": "مَا مُحَمَّدٌ ﷺ إِلَّا رَسُوْلٌ — Muhammad ﷺ is only a Messenger.",
              "list": true,
              "bullet": true
            },
            {
              "html": "When the point of emphasis is the فَاعِلٌ, it occurs after إِلَّا and is labelled as فَاعِلٌ مُؤَخَّرٌ, the delayed فاعل.",
              "list": false
            },
            {
              "html": "لَا يَعْبُدُ اللهَ إِلَّا مُؤْمِنٌ — Only a believer worships Allah.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَا يَعْبُدُ اللهَ إِلَّا مُؤْمِنٌ",
                "translation": "Only a believer worships Allah.",
                "cells": [
                  "لَا",
                  "يَعْبُدُ",
                  "اللهَ",
                  "إِلَّا",
                  "مُؤْمِنٌ"
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
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفُ حَصْرٍ"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "فَاعِلٌ مُؤَخَّرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "If a feminine فاعل is the point of emphasis after إِلَّا, the verb remains masculine.",
              "list": false
            },
            {
              "html": "مَا قَامَ إِلَّا فَاطِمَةُ — Only Fatima stood. (NOT: مَا قَامَتْ إِلَّا فَاطِمَةُ)",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "Differentiating Between إِلَّا for Exclusion and Emphasis",
                "headers": [
                  "",
                  "Affirmative — مُسْتَثْنًى مِنْهُ mentioned",
                  "Negative — مُسْتَثْنًى مِنْهُ mentioned",
                  "Negative — مُسْتَثْنًى مِنْهُ not mentioned"
                ],
                "rows": [
                  [
                    "Label",
                    "حَرْفُ اسْتِثْنَاءٍ",
                    "حَرْفُ اسْتِثْنَاءٍ",
                    "حَرْفُ حَصْرٍ"
                  ],
                  [
                    "Purpose",
                    "Exclusion",
                    "Exclusion",
                    "Emphasis"
                  ],
                  [
                    "Translation",
                    "Except",
                    "Except",
                    "Only"
                  ],
                  [
                    "Governance",
                    "عَامِلٌ",
                    "عَامِلٌ",
                    "غَيْرُ عَامِلٍ"
                  ],
                  [
                    "Following Word",
                    "مُسْتَثْنًى — مَنْصُوْبٌ",
                    "مُسْتَثْنًى — مَنْصُوْبٌ",
                    "Varies"
                  ],
                  [
                    "Example",
                    "جَاءَ الرِّجَالُ إِلَّا زَيْدًا — The men came except Zaid.",
                    "مَا جَاءَ الرِّجَالُ إِلَّا زَيْدًا — The men did not come except Zaid.",
                    "مَا جَاءَ إِلَّا زَيْدٌ — Only Zaid came."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "مَا أَكَلَ إِلَّا أَحْمَدُ",
            "kind": "mcq",
            "options": [
              "حَرْفُ اسْتِثْنَاءٍ — 'except'",
              "حَرْفُ حَصْرٍ — 'only'"
            ],
            "correct": 1
          }
        },
        {
          "heading": "إِنْ النَّافِيَةُ and إِنَّمَا",
          "lines": [
            {
              "html": "إِنْ is a negative particle which is used with إِلَّا as a حرف حصر to emphasise both a جملة اسمية and جملة فعلية. إِنْ النَّافِيَةُ is غَيْرُ عَامِلٍ, so there is no change to the noun or verb after it. It is translated as 'only' or 'surely'.",
              "list": false
            },
            {
              "html": "إِنِ الرَّجُلُ إِلَّا قَائِمٌ — The man is surely standing.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنِ الرَّجُلُ إِلَّا قَائِمٌ",
                "translation": "The man is surely standing.",
                "cells": [
                  "إِنِ",
                  "الرَّجُلُ",
                  "إِلَّا",
                  "قَائِمٌ"
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
                        "role": "مُبْتَدَأٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَرْفُ حَصْرٍ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "خَبَرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "When it precedes a فعل مضارع, it is translated in the present tense.",
              "list": false
            },
            {
              "html": "إِنْ يَرْجُو الْمُؤْمِنُوْنَ إِلَّا الْجَنَّةَ — The believers hope only for Jannah.",
              "list": true,
              "bullet": true
            },
            {
              "html": "إِنَّمَا is a particle of emphasis, حَرْفُ حَصْرٍ. It can precede both a جملة اسمية and جملة فعلية, and is translated as 'only' or 'surely'. It is غَيْرُ عَامِلٍ; it does not affect the irab of subsequent words.",
              "list": false
            },
            {
              "html": "إِنَّمَا الرَّجُلُ كَاذِبٌ — The man is only a liar. / The man is surely a liar.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنَّمَا الرَّجُلُ كَاذِبٌ",
                "translation": "The man is only a liar.",
                "cells": [
                  "إِنَّمَا",
                  "الرَّجُلُ",
                  "كَاذِبٌ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "حَرْفُ حَصْرٍ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "مُبْتَدَأٌ"
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
            },
            {
              "html": "The point of emphasis in a sentence with إِنَّمَا comes at the END of the sentence. Therefore, the order of the sentence changes to have the emphasised word at the end.",
              "list": false
            },
            {
              "html": "إِنَّمَا يَنَامُ الطِّفْلُ نَهَارًا — The child sleeps ONLY during the day.",
              "list": true,
              "bullet": true
            },
            {
              "html": "إِنَّمَا يَنَامُ نَهَارًا الطِّفْلُ — ONLY the child sleeps during the day.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "إِنَّمَا الرَّجُلُ كَاذِبٌ places its point of emphasis (كَاذِبٌ) where in the sentence?",
            "kind": "mcq",
            "options": [
              "At the END",
              "Right after إِنَّمَا",
              "At the beginning",
              "It has no fixed position"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Emphasis — single parts of a sentence",
        "rows": [
          {
            "label": "Fronting",
            "arabic": "مُقَدَّمٌ",
            "meaning": "أَمْسِ صَامَ زَيْدٌ — moved part underlined in red; translate with italics/only/'It is X who…'"
          },
          {
            "label": "حَرْفُ حَصْرٍ",
            "arabic": "مَا صَامَ زَيْدٌ إِلَّا أَمْسِ",
            "meaning": "negative + إلا, no مستثنى منه = 'only'"
          },
          {
            "label": "فَاعِلٌ مُؤَخَّرٌ",
            "arabic": "لَا يَعْبُدُ اللهَ إِلَّا مُؤْمِنٌ",
            "meaning": "the delayed فاعل after إلا; verb stays masculine even for a feminine فاعل"
          },
          {
            "label": "إِنْ النَّافِيَةُ",
            "arabic": "إِنِ الرَّجُلُ إِلَّا قَائِمٌ",
            "meaning": "negative + إلا = surely/only; غير عامل"
          },
          {
            "label": "إِنَّمَا",
            "arabic": "إِنَّمَا الرَّجُلُ كَاذِبٌ",
            "meaning": "only/surely; point of emphasis at the END; غير عامل"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does fronting a part of a sentence (making it مُقَدَّمٌ) do?",
          "options": [
            "It creates emphasis on the fronted part",
            "It makes the sentence a question",
            "It changes the tense",
            "It makes the sentence negative"
          ],
          "correct": 0,
          "explanation": "اللهَ يَعْبُدُ الْمُسْلِمُوْنَ emphasises 'Allah' — the fronted مفعول به."
        },
        {
          "q": "A sentence that starts with a مَنْصُوْبٌ word is…",
          "options": [
            "a جملة اسمية with a منصوب مبتدأ",
            "a جملة فعلية whose مفعول به has been fronted (مَفْعُوْلٌ مُقَدَّمٌ)",
            "always wrong",
            "a negative sentence"
          ],
          "correct": 1,
          "explanation": "A مبتدأ must be مرفوع — so a منصوب opener is a fronted object."
        },
        {
          "q": "When is إِلَّا a حَرْفُ حَصْرٍ rather than a حرف استثناء?",
          "options": [
            "In a negative sentence where the مستثنى منه is NOT mentioned",
            "In any affirmative sentence",
            "In a negative sentence with a مستثنى منه",
            "Whenever it follows كان"
          ],
          "correct": 0,
          "explanation": "Then the negative + إلا = 'only', and the following word keeps its normal role."
        },
        {
          "q": "In لَا يَعْبُدُ اللهَ إِلَّا مُؤْمِنٌ, the word مُؤْمِنٌ is labelled…",
          "options": [
            "مُسْتَثْنًى",
            "فَاعِلٌ مُؤَخَّرٌ — the delayed subject",
            "مفعول به",
            "خبر"
          ],
          "correct": 1,
          "explanation": "'Only a believer worships Allah' — the emphasised فاعل comes after إلا."
        },
        {
          "q": "Where does the point of emphasis come in a sentence with إِنَّمَا?",
          "options": [
            "At the beginning",
            "Directly after إِنَّمَا",
            "At the END of the sentence",
            "It cannot be determined"
          ],
          "correct": 2,
          "explanation": "إِنَّمَا يَنَامُ الطِّفْلُ نَهَارًا = The child sleeps ONLY during the day."
        },
        {
          "q": "What is true of إِنْ النَّافِيَةُ?",
          "options": [
            "It is عَامِلٌ and makes the verb مجزوم",
            "It is used with إِلَّا, is غَيْرُ عَامِلٍ, and is translated 'only/surely'",
            "It is the same as إِنَّ",
            "It only occurs in the جملة فعلية"
          ],
          "correct": 1,
          "explanation": "إِنِ الرَّجُلُ إِلَّا قَائِمٌ = The man is surely standing."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 5 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "اَلْآخِرَةَ يَرْجُوْ الْمُتَّقُوْنَ starts with a مَنْصُوْبٌ word. What does this tell you?",
          "options": [
            "اَلْآخِرَةَ is a منصوب مبتدأ",
            "It is a جملة فعلية whose مفعول به has been fronted for emphasis (مَفْعُوْلٌ بِهِ مُقَدَّمٌ)",
            "The sentence is ungrammatical",
            "It must be a question"
          ],
          "correct": 1,
          "explanation": "A مبتدأ must be مرفوع — so a منصوب opener is a fronted object: 'It is the hereafter that the God-fearing hope for.'"
        },
        {
          "title": "Book Exercise 8 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "In لَا يَغْفِرُ الذُّنُوْبَ إِلَّا اللهُ, the word إِلَّا is…",
          "options": [
            "حَرْفُ الْاِسْتِثْنَاءِ — 'except'",
            "حَرْفُ نَفْيٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ حَصْرٍ — negative sentence with no مستثنى منه, so it means 'only'"
          ],
          "correct": 3,
          "explanation": "'Only Allah forgives sins' — the word after it keeps its normal role."
        },
        {
          "title": "Book Exercise 8 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "In لَا يَعْلَمُ الْغَيْبَ إِلَّا اللهُ, the word لَفْظُ الجَلالَةِ is labelled…",
          "options": [
            "مُسْتَثْنًى",
            "فَاعِلٌ مُؤَخَّرٌ — the delayed subject, hence مَرْفُوْعٌ",
            "مَفْعُوْلٌ بِهِ",
            "مُبْتَدَأٌ"
          ],
          "correct": 1,
          "explanation": "When the point of emphasis is the فاعل, it comes after إِلَّا and stays مرفوع."
        },
        {
          "title": "Book Exercise 9 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "مَا مَاتَ إِلَّا الطِّفْلَةُ — why is the verb masculine?",
          "options": [
            "It is a mistake in the book",
            "When a feminine فاعل is the point of emphasis after إلا, the verb remains masculine",
            "الطفلة is actually masculine",
            "Verbs are always masculine"
          ],
          "correct": 1,
          "explanation": "مَا قَامَ إِلَّا فَاطِمَةُ ✓ — مَا قَامَتْ إِلَّا فَاطِمَةُ ✗."
        },
        {
          "title": "Book Exercise 11 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "In إِنْ زَيْدٌ إِلَّا عَبْدٌ, the particle إِنْ is…",
          "options": [
            "إِنْ النَّافِيَةُ — a negative particle used with إِلَّا as حرف حصر; غَيْرُ عَامِلٍ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ (a light form of إِنَّ)",
            "حَرْفُ شَرْطٍ ('if')",
            "حَرْفُ اسْتِثْنَاءٍ"
          ],
          "correct": 0,
          "explanation": "إِنْ … إِلَّا = 'only/surely'; no irab changes: 'Zaid is only a servant.'"
        },
        {
          "title": "Book Exercise 13 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "In إِنَّمَا غَابَتْ خَدِيْجَةُ يَوْمَيْنِ, where is the point of emphasis?",
          "options": [
            "On إِنَّمَا itself",
            "On غَابَتْ, directly after إِنَّمَا",
            "On خَدِيْجَةُ",
            "On يَوْمَيْنِ — with إِنَّمَا the emphasis falls at the END of the sentence"
          ],
          "correct": 3,
          "explanation": "'Khadijah was absent only two days' — the order changes to put the emphasised word last."
        },
        {
          "title": "Book Exercise 7 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "مَا مُحَمَّدٌ إِلَّا عَبْدٌ translates as…",
          "options": [
            "Muhammad ﷺ is only a servant",
            "Muhammad ﷺ is not a servant",
            "No one except Muhammad ﷺ is a servant",
            "Muhammad ﷺ was a servant"
          ],
          "correct": 0,
          "explanation": "مَا + إِلَّا with no مستثنى منه = 'only'; the خبر of مَا stays مَرْفُوْعٌ before إِلَّا."
        },
        {
          "title": "Book Exercise 13 (Section 2, Part 2)",
          "kind": "mcq",
          "prompt": "إِنَّمَا الْإِلٰهُ وَاحِدٌ translates as…",
          "options": [
            "If God is One",
            "Is God One?",
            "Surely, God is only One",
            "God was One"
          ],
          "correct": 2,
          "explanation": "إِنَّمَا = only/surely; غير عامل — the emphasis falls on وَاحِدٌ at the end."
        },
        {
          "title": "اللهَ يَعْبُدُ الْمُسْلِمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 117)",
          "sentence": "اللهَ يَعْبُدُ الْمُسْلِمُوْنَ",
          "translation": "It is Allah who the Muslims worship.",
          "cells": [
            "اللهَ",
            "يَعْبُدُ",
            "الْمُسْلِمُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ بِهِ مُقَدَّمٌ"
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
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "مُبْتَدَأٌ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "لَا يَعْبُدُ الْمُسْلِمُوْنَ إِلَّا اللهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 119)",
          "sentence": "لَا يَعْبُدُ الْمُسْلِمُوْنَ إِلَّا اللهَ",
          "translation": "The Muslims worship only Allah.",
          "cells": [
            "لَا",
            "يَعْبُدُ",
            "الْمُسْلِمُوْنَ",
            "إِلَّا",
            "اللهَ"
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
                  "role": "حَرْفُ حَصْرٍ"
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
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "لَا يَعْبُدُ اللهَ إِلَّا مُؤْمِنٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 120)",
          "sentence": "لَا يَعْبُدُ اللهَ إِلَّا مُؤْمِنٌ",
          "translation": "Only a believer worships Allah.",
          "cells": [
            "لَا",
            "يَعْبُدُ",
            "اللهَ",
            "إِلَّا",
            "مُؤْمِنٌ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ حَصْرٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ مُؤَخَّرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "مَا مُحَمَّدٌ إِلَّا رَسُوْلٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 2, Part 2)",
          "sentence": "مَا مُحَمَّدٌ إِلَّا رَسُوْلٌ",
          "translation": "Muhammad ﷺ is only a Messenger.",
          "cells": [
            "مَا",
            "مُحَمَّدٌ",
            "إِلَّا",
            "رَسُوْلٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَا الْمُشَبَّهَةُ بِلَيْسَ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ مَا"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ حَصْرٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ مَا (مَرْفُوْعٌ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "اِسْمُ لَيْسَ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "حَرْفُ نَفْيٍ"
          ]
        },
        {
          "title": "لَا يَعْلَمُ الْغَيْبَ إِلَّا اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 8 (Section 2, Part 2)",
          "sentence": "لَا يَعْلَمُ الْغَيْبَ إِلَّا اللهُ",
          "translation": "Only Allah knows the unseen.",
          "cells": [
            "لَا",
            "يَعْلَمُ",
            "الْغَيْبَ",
            "إِلَّا",
            "اللهُ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ حَصْرٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ مُؤَخَّرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ نَاقِصٌ",
            "فِعْلٌ مَجْهُوْلٌ"
          ]
        },
        {
          "title": "إِنِ الرَّجُلُ إِلَّا قَائِمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 123)",
          "sentence": "إِنِ الرَّجُلُ إِلَّا قَائِمٌ",
          "translation": "The man is surely standing.",
          "cells": [
            "إِنِ",
            "الرَّجُلُ",
            "إِلَّا",
            "قَائِمٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ نَفْيٍ (إِنْ النَّافِيَةُ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ حَصْرٍ"
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
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فَاعِلٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "إِنَّمَا الرَّجُلُ كَاذِبٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 124)",
          "sentence": "إِنَّمَا الرَّجُلُ كَاذِبٌ",
          "translation": "The man is only/surely a liar.",
          "cells": [
            "إِنَّمَا",
            "الرَّجُلُ",
            "كَاذِبٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ حَصْرٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "حَرْفُ نَفْيٍ",
            "حَرْفُ عَطْفٍ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "إِنَّمَا يُسَافِرُ الرِّجَالُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 13 (Section 2, Part 2)",
          "sentence": "إِنَّمَا يُسَافِرُ الرِّجَالُ",
          "translation": "Only the men travel.",
          "cells": [
            "إِنَّمَا",
            "يُسَافِرُ",
            "الرِّجَالُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ حَصْرٍ"
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
            }
          ],
          "distractors": [
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "حَرْفُ نَفْيٍ",
            "حَرْفُ عَطْفٍ",
            "فِعْلٌ نَاقِصٌ"
          ]
        },
        {
          "title": "to cure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cure\"?",
          "options": [
            "شَفَى يَشْفِيْ",
            "تُفَّاحَةٌ",
            "آخِرَةٌ",
            "حُجْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to cure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَفَى يَشْفِيْ mean?",
          "options": [
            "to cure",
            "window",
            "thing",
            "room"
          ],
          "correct": 0
        },
        {
          "title": "to cure (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَفَى يَشْفِيْ?",
          "options": [
            "شِفَاءً",
            "نَوَافِذُ",
            "عَالَمُوْنَ",
            "غُرَفٌ، غُرُفَاتٌ"
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
            "بَشَرٌ",
            "وَاحِدٌ",
            "حُجْرَةٌ"
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
            "stone",
            "door",
            "window"
          ],
          "correct": 0
        },
        {
          "title": "thing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَيْءٌ?",
          "options": [
            "أَشْيَاءُ",
            "عَالَمُوْنَ",
            "أَحْجَارٌ، حِجَارَةٌ",
            "أَبْوَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "world",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"world\"?",
          "options": [
            "عَالَمٌ",
            "وَاحِدٌ",
            "آخِرَةٌ",
            "بَشَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "world",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَالَمٌ mean?",
          "options": [
            "world",
            "stone",
            "room",
            "human being"
          ],
          "correct": 0
        },
        {
          "title": "world (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَالَمٌ?",
          "options": [
            "عَالَمُوْنَ",
            "أَبْوَابٌ",
            "حُجُرَاتٌ",
            "تُفَّاحَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"room\"?",
          "options": [
            "غُرْفَةٌ",
            "عَالَمٌ",
            "وَاحِدٌ",
            "بَشَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غُرْفَةٌ mean?",
          "options": [
            "room",
            "door",
            "stone",
            "hereafter"
          ],
          "correct": 0
        },
        {
          "title": "room (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غُرْفَةٌ?",
          "options": [
            "غُرَفٌ، غُرُفَاتٌ",
            "أَشْيَاءُ",
            "أَبْوَابٌ",
            "عَالَمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "window",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"window\"?",
          "options": [
            "نَافِذَةٌ",
            "حَجَرٌ",
            "تُفَّاحَةٌ",
            "بَشَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "window",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَافِذَةٌ mean?",
          "options": [
            "window",
            "world",
            "one",
            "to cure"
          ],
          "correct": 0
        },
        {
          "title": "window (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَافِذَةٌ?",
          "options": [
            "نَوَافِذُ",
            "حُجُرَاتٌ",
            "تُفَّاحَاتٌ",
            "غُرَفٌ، غُرُفَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one\"?",
          "options": [
            "وَاحِدٌ",
            "غُرْفَةٌ",
            "حُجْرَةٌ",
            "شَيْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَاحِدٌ mean?",
          "options": [
            "one",
            "apple",
            "stone",
            "to cure"
          ],
          "correct": 0
        },
        {
          "title": "hereafter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hereafter\"?",
          "options": [
            "آخِرَةٌ",
            "حُجْرَةٌ",
            "شَيْءٌ",
            "شَفَى يَشْفِيْ"
          ],
          "correct": 0
        },
        {
          "title": "hereafter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آخِرَةٌ mean?",
          "options": [
            "hereafter",
            "stone",
            "human being",
            "world"
          ],
          "correct": 0
        },
        {
          "title": "door",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"door\"?",
          "options": [
            "بَابٌ",
            "غُرْفَةٌ",
            "آخِرَةٌ",
            "شَيْءٌ"
          ],
          "correct": 0
        },
        {
          "title": "door",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَابٌ mean?",
          "options": [
            "door",
            "apple",
            "room",
            "window"
          ],
          "correct": 0
        },
        {
          "title": "door (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَابٌ?",
          "options": [
            "أَبْوَابٌ",
            "نَوَافِذُ",
            "أَحْجَارٌ، حِجَارَةٌ",
            "تُفَّاحَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "human being",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"human being\"?",
          "options": [
            "بَشَرٌ",
            "بَابٌ",
            "شَيْءٌ",
            "غُرْفَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "human being",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَشَرٌ mean?",
          "options": [
            "human being",
            "door",
            "thing",
            "hereafter"
          ],
          "correct": 0
        },
        {
          "title": "apple",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"apple\"?",
          "options": [
            "تُفَّاحَةٌ",
            "شَفَى يَشْفِيْ",
            "آخِرَةٌ",
            "غُرْفَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "apple",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تُفَّاحَةٌ mean?",
          "options": [
            "apple",
            "thing",
            "stone",
            "window"
          ],
          "correct": 0
        },
        {
          "title": "apple (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تُفَّاحَةٌ?",
          "options": [
            "تُفَّاحَاتٌ",
            "أَبْوَابٌ",
            "أَحْجَارٌ، حِجَارَةٌ",
            "عَالَمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "stone",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"stone\"?",
          "options": [
            "حَجَرٌ",
            "غُرْفَةٌ",
            "تُفَّاحَةٌ",
            "وَاحِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "stone",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَجَرٌ mean?",
          "options": [
            "stone",
            "apple",
            "door",
            "room"
          ],
          "correct": 0
        },
        {
          "title": "stone (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَجَرٌ?",
          "options": [
            "أَحْجَارٌ، حِجَارَةٌ",
            "تُفَّاحَاتٌ",
            "حُجُرَاتٌ",
            "أَبْوَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"room\"?",
          "options": [
            "حُجْرَةٌ",
            "تُفَّاحَةٌ",
            "شَفَى يَشْفِيْ",
            "غُرْفَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حُجْرَةٌ mean?",
          "options": [
            "room",
            "hereafter",
            "apple",
            "one"
          ],
          "correct": 0
        },
        {
          "title": "room (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حُجْرَةٌ?",
          "options": [
            "حُجُرَاتٌ",
            "نَوَافِذُ",
            "أَشْيَاءُ",
            "عَالَمُوْنَ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l11",
      "title": "المراجعة",
      "subtitle": "Key terms and master vocabulary — no new material, just review",
      "concepts": [
        {
          "heading": "Unit 2 Summary",
          "lines": [
            {
              "html": "This is a cumulative review: every key grammar term covered so far, plus the full noun and verb vocabulary from every lesson. Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does جُمْلَةٌ فِعْلِيَّةٌ mean?",
          "options": [
            "a sentence that begins with a فعل",
            "auxiliary verb",
            "a particle of emphasis",
            "a sentence comprised of a مبتدأ and خبر"
          ],
          "correct": 0
        },
        {
          "q": "What does جُمْلَةٌ اسْمِيَّةٌ mean?",
          "options": [
            "a sentence comprised of a مبتدأ and خبر",
            "grammatical analysis of a sentence",
            "was not",
            "the subject of a sentence with كان or إنّ"
          ],
          "correct": 0
        },
        {
          "q": "What does فَاعِلٌ mean?",
          "options": [
            "subject (of a جملة فعلية)",
            "not (resembles ليس)",
            "a sentence that begins with a فعل",
            "was not"
          ],
          "correct": 0
        },
        {
          "q": "What does مُبْتَدَأٌ mean?",
          "options": [
            "subject (of a جملة اسمية)",
            "a particle of emphasis",
            "was not",
            "adverb of time/place"
          ],
          "correct": 0
        },
        {
          "q": "What does نَائِبُ الْفَاعِلِ mean?",
          "options": [
            "substitute/deputy subject",
            "adverb of degree",
            "a sentence comprised of a مبتدأ and خبر",
            "exclusion"
          ],
          "correct": 0
        },
        {
          "q": "What does خَبَرٌ mean?",
          "options": [
            "information",
            "is not",
            "subject (of a جملة اسمية)",
            "state"
          ],
          "correct": 0
        },
        {
          "q": "What does مَفْعُوْلٌ بِهِ mean?",
          "options": [
            "object",
            "substitute/deputy subject",
            "auxiliary verb",
            "a particle of restriction"
          ],
          "correct": 0
        },
        {
          "q": "What does تَرْكِيْبٌ mean?",
          "options": [
            "grammatical analysis of a sentence",
            "was",
            "a لام for emphasis",
            "indirect object"
          ],
          "correct": 0
        },
        {
          "q": "What does مَفْعُوْلٌ بِهِ ثَانٍ mean?",
          "options": [
            "indirect object",
            "a particle of restriction",
            "a sentence that begins with a فعل",
            "auxiliary verb"
          ],
          "correct": 0
        },
        {
          "q": "What does فِعْلٌ نَاقِصٌ mean?",
          "options": [
            "auxiliary verb",
            "subject (of a جملة فعلية)",
            "the information of a sentence with كان or إنّ",
            "subject (of a جملة اسمية)"
          ],
          "correct": 0
        },
        {
          "q": "What does مَفْعُوْلٌ فِيْهِ mean?",
          "options": [
            "adverb of time/place",
            "a particle which resembles the verb",
            "is not",
            "the information of a sentence with كان or إنّ"
          ],
          "correct": 0
        },
        {
          "q": "What does كَانَ mean?",
          "options": [
            "was",
            "grammatical analysis of a sentence",
            "a sentence comprised of a مبتدأ and خبر",
            "will be"
          ],
          "correct": 0
        },
        {
          "q": "What does مَفْعُوْلٌ مُطْلَقٌ mean?",
          "options": [
            "adverb of degree",
            "will be",
            "adverb of reason",
            "substitute/deputy subject"
          ],
          "correct": 0
        },
        {
          "q": "What does يَكُوْنُ mean?",
          "options": [
            "will be",
            "exclusion",
            "the information of a sentence with كان or إنّ",
            "the subject of a sentence with كان or إنّ"
          ],
          "correct": 0
        },
        {
          "q": "What does مَفْعُوْلٌ لَهُ mean?",
          "options": [
            "adverb of reason",
            "was not",
            "state",
            "a negative particle (with إلا = only)"
          ],
          "correct": 0
        },
        {
          "q": "What does لَيْسَ mean?",
          "options": [
            "is not",
            "will be",
            "subject (of a جملة اسمية)",
            "not (resembles ليس)"
          ],
          "correct": 0
        },
        {
          "q": "What does حَالٌ mean?",
          "options": [
            "state",
            "was",
            "a particle of emphasis",
            "indirect object"
          ],
          "correct": 0
        },
        {
          "q": "What does مَا كَانَ mean?",
          "options": [
            "was not",
            "a sentence comprised of a مبتدأ and خبر",
            "grammatical analysis of a sentence",
            "not (resembles ليس)"
          ],
          "correct": 0
        },
        {
          "q": "What does تَمْيِيْزٌ mean?",
          "options": [
            "clarification",
            "will not be",
            "was",
            "a sentence comprised of a مبتدأ and خبر"
          ],
          "correct": 0
        },
        {
          "q": "What does لَا يَكُوْنُ mean?",
          "options": [
            "will not be",
            "a لام for emphasis",
            "adverb of degree",
            "was not"
          ],
          "correct": 0
        },
        {
          "q": "What does مُسْتَثْنًى mean?",
          "options": [
            "exclusion",
            "a particle of restriction",
            "a particle of emphasis",
            "a particle of emphasis"
          ],
          "correct": 0
        },
        {
          "q": "What does اِسْمُ كَانَ / إِنَّ mean?",
          "options": [
            "the subject of a sentence with كان or إنّ",
            "will not be",
            "a particle which resembles the verb",
            "a particle of emphasis"
          ],
          "correct": 0
        },
        {
          "q": "What does خَبَرُ كَانَ / إِنَّ mean?",
          "options": [
            "the information of a sentence with كان or إنّ",
            "object",
            "a particle of emphasis",
            "adverb of reason"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفُ تَحْقِيْقٍ (قَدْ) mean?",
          "options": [
            "a particle of emphasis",
            "adverb of time/place",
            "subject (of a جملة اسمية)",
            "a particle of restriction"
          ],
          "correct": 0
        },
        {
          "q": "What does مَا النَّافِيَةُ mean?",
          "options": [
            "not (resembles ليس)",
            "subject (of a جملة فعلية)",
            "a لام for emphasis",
            "will not be"
          ],
          "correct": 0
        },
        {
          "q": "What does نُوْنُ التَّأْكِيْدِ mean?",
          "options": [
            "a particle of emphasis",
            "will be",
            "a particle of restriction",
            "the subject of a sentence with كان or إنّ"
          ],
          "correct": 0
        },
        {
          "q": "What does إِنْ النَّافِيَةُ mean?",
          "options": [
            "a negative particle (with إلا = only)",
            "object",
            "adverb of reason",
            "state"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفُ حَصْرٍ mean?",
          "options": [
            "a particle of restriction",
            "a particle of emphasis",
            "grammatical analysis of a sentence",
            "is not"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ mean?",
          "options": [
            "a particle which resembles the verb",
            "clarification",
            "subject (of a جملة اسمية)",
            "will not be"
          ],
          "correct": 0
        },
        {
          "q": "What does إِنَّمَا mean?",
          "options": [
            "a particle of emphasis",
            "a لام for emphasis",
            "a لام for emphasis",
            "the subject of a sentence with كان or إنّ"
          ],
          "correct": 0
        },
        {
          "q": "What does لَامُ الْاِبْتِدَاءِ mean?",
          "options": [
            "a لام for emphasis",
            "a sentence comprised of a مبتدأ and خبر",
            "grammatical analysis of a sentence",
            "adverb of reason"
          ],
          "correct": 0
        },
        {
          "q": "What does لَامٌ مُزَحْلَقَةٌ mean?",
          "options": [
            "a لام for emphasis",
            "auxiliary verb",
            "a particle of restriction",
            "was not"
          ],
          "correct": 0
        }
      ],
      "bank": [
        {
          "title": "reward, recompense",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"reward, recompense\"?",
          "options": [
            "ثَوَابٌ",
            "مُتَّقٍ",
            "لِتْرٌ",
            "وَضَعَ يَضَعُ"
          ],
          "correct": 0
        },
        {
          "title": "reward, recompense",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ثَوَابٌ mean?",
          "options": [
            "reward, recompense",
            "to hit",
            "religion, retribution",
            "time"
          ],
          "correct": 0
        },
        {
          "title": "always, ever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"always, ever\"?",
          "options": [
            "أَبَدٌ",
            "زَادَ يَزِيْدُ",
            "سَكَتَ يَسْكُتُ",
            "اِتَّخَذَ يَتَّخِذُ"
          ],
          "correct": 0
        },
        {
          "title": "always, ever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبَدٌ mean?",
          "options": [
            "always, ever",
            "Haji (one who has performed Hajj)",
            "to understand",
            "angel"
          ],
          "correct": 0
        },
        {
          "title": "part",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"part\"?",
          "options": [
            "جُزْءٌ",
            "أَرْسَلَ يُرْسِلُ",
            "أَتَى يَأْتِيْ",
            "دَقِيْقَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "part",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جُزْءٌ mean?",
          "options": [
            "part",
            "clear, clear proof",
            "to give, grant",
            "to do, work"
          ],
          "correct": 0
        },
        {
          "title": "part (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جُزْءٌ?",
          "options": [
            "أَجْزَاءٌ",
            "أَحْيَانٌ",
            "أَغْنِيَاءُ",
            "أَحْجَارٌ، حِجَارَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "reward, wage",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"reward, wage\"?",
          "options": [
            "أَجْرٌ",
            "رِطْلٌ",
            "رَغِبَ يَرْغَبُ",
            "آنٌ"
          ],
          "correct": 0
        },
        {
          "title": "reward, wage",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجْرٌ mean?",
          "options": [
            "reward, wage",
            "pound (weight)",
            "bag",
            "to send"
          ],
          "correct": 0
        },
        {
          "title": "reward, wage (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَجْرٌ?",
          "options": [
            "أُجُوْرٌ",
            "مَوَاعِظُ",
            "حَقَائِبُ",
            "شَيَاطِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "Haji (one who has performed Hajj)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Haji (one who has performed Hajj)\"?",
          "options": [
            "حَاجٌّ",
            "وَعَدَ يَعِدُ",
            "خَافَ يَخَافُ",
            "صَلَّى يُصَلِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "Haji (one who has performed Hajj)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاجٌّ mean?",
          "options": [
            "Haji (one who has performed Hajj)",
            "wisdom",
            "migrant",
            "to fear"
          ],
          "correct": 0
        },
        {
          "title": "Haji (one who has performed Hajj) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَاجٌّ?",
          "options": [
            "حُجَّاجٌ",
            "شِرَارٌ",
            "مُتَّقُوْنَ",
            "مَسْرُوْرُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "better",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"better\"?",
          "options": [
            "أَحْسَنُ",
            "اَلْآنَ",
            "حَقٌّ",
            "خَشَعَ يَخْشَعُ"
          ],
          "correct": 0
        },
        {
          "title": "better",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْسَنُ mean?",
          "options": [
            "better",
            "rich, independent",
            "to feed",
            "to return"
          ],
          "correct": 0
        },
        {
          "title": "stone",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"stone\"?",
          "options": [
            "حَجَرٌ",
            "رَاءَى يُرَائِيْ",
            "رَجَا يَرْجُوْ",
            "حُجْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "stone",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَجَرٌ mean?",
          "options": [
            "stone",
            "part",
            "to reject",
            "reward, recompense"
          ],
          "correct": 0
        },
        {
          "title": "stone (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَجَرٌ?",
          "options": [
            "أَحْجَارٌ، حِجَارَةٌ",
            "خِيَارٌ",
            "ذُنُوْبٌ",
            "أَيَّامٌ"
          ],
          "correct": 0
        },
        {
          "title": "hereafter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hereafter\"?",
          "options": [
            "آخِرَةٌ",
            "عَالَمٌ",
            "خَافَ يَخَافُ",
            "مَوْعِظَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "hereafter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آخِرَةٌ mean?",
          "options": [
            "hereafter",
            "always",
            "to give, grant",
            "window"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"room\"?",
          "options": [
            "حُجْرَةٌ",
            "أَفْلَحَ يُفْلِحُ",
            "أَحْسَنُ",
            "سَاعَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حُجْرَةٌ mean?",
          "options": [
            "room",
            "to be humble",
            "thing",
            "to cure"
          ],
          "correct": 0
        },
        {
          "title": "room (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حُجْرَةٌ?",
          "options": [
            "حُجُرَاتٌ",
            "أَنْصَارٌ",
            "دَقَائِقُ",
            "مَوَاعِظُ"
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
            "قَتَلَ يَقْتُلُ",
            "اِعْتَمَرَ يَعْتَمِرُ",
            "حَاجٌّ"
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
            "to collect, gather",
            "to give to drink",
            "to be humble"
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
            "لِتْرَاتٌ",
            "عَالَمُوْنَ",
            "أَنْصَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "good deed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"good deed\"?",
          "options": [
            "حَسَنَةٌ",
            "ضَلَّ يَضِلُّ",
            "أَرْسَلَ يُرْسِلُ",
            "تَرَكَ يَتْرُكُ"
          ],
          "correct": 0
        },
        {
          "title": "good deed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَسَنَةٌ mean?",
          "options": [
            "good deed",
            "worse, worst, evil",
            "to collect, gather",
            "month"
          ],
          "correct": 0
        },
        {
          "title": "good deed (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَسَنَةٌ?",
          "options": [
            "حَسَنَاتٌ",
            "لِتْرَاتٌ",
            "حُجَّاجٌ",
            "صُرُطٌ"
          ],
          "correct": 0
        },
        {
          "title": "severe, severest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"severe, severest\"?",
          "options": [
            "أَشَدُّ",
            "كَتَبَ يَكْتُبُ",
            "عِلْمٌ",
            "رَجَا يَرْجُوْ"
          ],
          "correct": 0
        },
        {
          "title": "severe, severest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَشَدُّ mean?",
          "options": [
            "severe, severest",
            "to return",
            "migrant",
            "to earn"
          ],
          "correct": 0
        },
        {
          "title": "truth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"truth\"?",
          "options": [
            "حَقٌّ",
            "أَطَاعَ يُطِيْعُ",
            "كَسَا يَكْسُوْ",
            "مِيْزَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "truth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَقٌّ mean?",
          "options": [
            "truth",
            "to sit",
            "to fear",
            "litre"
          ],
          "correct": 0
        },
        {
          "title": "less, least",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"less, least\"?",
          "options": [
            "أَقَلُّ",
            "فَهِمَ يَفْهَمُ",
            "مَلَكٌ",
            "خَرَجَ يَخْرُجُ"
          ],
          "correct": 0
        },
        {
          "title": "less, least",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَقَلُّ mean?",
          "options": [
            "less, least",
            "to perform salah",
            "to favour",
            "devil"
          ],
          "correct": 0
        },
        {
          "title": "bag",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bag\"?",
          "options": [
            "حَقِيْبَةٌ",
            "كَسَا يَكْسُوْ",
            "جَمَعَ يَجْمَعُ",
            "شَيْطَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "bag",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَقِيْبَةٌ mean?",
          "options": [
            "bag",
            "to fill",
            "room",
            "litre"
          ],
          "correct": 0
        },
        {
          "title": "bag (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَقِيْبَةٌ?",
          "options": [
            "حَقَائِبُ",
            "صُرُطٌ",
            "بَصَائِرُ",
            "أُجُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "more, most",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"more, most\"?",
          "options": [
            "أَكْثَرُ",
            "مَسْرُوْرٌ",
            "شَيْطَانٌ",
            "رِطْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "more, most",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكْثَرُ mean?",
          "options": [
            "more, most",
            "to hope",
            "to obey",
            "to clothe"
          ],
          "correct": 0
        },
        {
          "title": "wisdom",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wisdom\"?",
          "options": [
            "حِكْمَةٌ",
            "ذَنْبٌ",
            "أَتَى يَأْتِيْ",
            "هَدَى يَهْدِيْ"
          ],
          "correct": 0
        },
        {
          "title": "wisdom",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حِكْمَةٌ mean?",
          "options": [
            "wisdom",
            "morning",
            "container",
            "room"
          ],
          "correct": 0
        },
        {
          "title": "wisdom (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حِكْمَةٌ?",
          "options": [
            "حِكَمٌ",
            "عُلُوْمٌ",
            "نَوَافِذُ",
            "عَالَمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "yesterday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"yesterday\"?",
          "options": [
            "أَمْسِ (مَبْنِيٌّ)",
            "سُمْعَةٌ",
            "خَطَبَ يَخْطُبُ",
            "وَاحِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "yesterday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَمْسِ (مَبْنِيٌّ) mean?",
          "options": [
            "yesterday",
            "to prostrate",
            "severe, severest",
            "to know"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time\"?",
          "options": [
            "حِيْنٌ",
            "آتَى يُؤْتِيْ",
            "رَغِبَ يَرْغَبُ",
            "عِلْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حِيْنٌ mean?",
          "options": [
            "time",
            "blessed",
            "week",
            "always, ever"
          ],
          "correct": 0
        },
        {
          "title": "time (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حِيْنٌ?",
          "options": [
            "أَحْيَانٌ",
            "صُرُطٌ",
            "سَاعَاتٌ",
            "أَجْزَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time\"?",
          "options": [
            "آنٌ",
            "بَشَرٌ",
            "قَعَدَ يَقْعُدُ",
            "اَلْآنَ"
          ],
          "correct": 0
        },
        {
          "title": "time",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آنٌ mean?",
          "options": [
            "time",
            "bearer of glad tidings",
            "polytheism",
            "apple"
          ],
          "correct": 0
        },
        {
          "title": "better, best, goodness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"better, best, goodness\"?",
          "options": [
            "خَيْرٌ",
            "دَائِمٌ",
            "فَتَحَ يَفْتَحُ",
            "دَخَلَ يَدْخُلُ"
          ],
          "correct": 0
        },
        {
          "title": "better, best, goodness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَيْرٌ mean?",
          "options": [
            "better, best, goodness",
            "to increase",
            "thing",
            "to be quiet"
          ],
          "correct": 0
        },
        {
          "title": "better, best, goodness (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَيْرٌ?",
          "options": [
            "خِيَارٌ",
            "مَلَائِكَةٌ",
            "حَقَائِبُ",
            "نَوَافِذُ"
          ],
          "correct": 0
        },
        {
          "title": "now, just now",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"now, just now\"?",
          "options": [
            "اَلْآنَ",
            "بَشِيْرٌ",
            "قَتَلَ يَقْتُلُ",
            "بَشَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "now, just now",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اَلْآنَ mean?",
          "options": [
            "now, just now",
            "bearer of glad tidings",
            "thing",
            "to disobey"
          ],
          "correct": 0
        },
        {
          "title": "always",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"always\"?",
          "options": [
            "دَائِمٌ",
            "غَدٌ",
            "غُرْفَةٌ",
            "لَحْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "always",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَائِمٌ mean?",
          "options": [
            "always",
            "God-fearing",
            "admonition",
            "blessed"
          ],
          "correct": 0
        },
        {
          "title": "container",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"container\"?",
          "options": [
            "إِنَاءٌ",
            "أَفْلَحَ يُفْلِحُ",
            "اِزْدَادَ يَزْدَادُ",
            "مَسَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "container",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِنَاءٌ mean?",
          "options": [
            "container",
            "blessed",
            "to take as",
            "always"
          ],
          "correct": 0
        },
        {
          "title": "container (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِنَاءٌ?",
          "options": [
            "آنِيَةٌ",
            "أَجْزَاءٌ",
            "تُجَّارٌ",
            "أَبْوَابٌ"
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
            "خَطَبَ يَخْطُبُ",
            "يَوْمٌ",
            "مُتَّقٍ"
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
            "reward, recompense",
            "better",
            "to misguide"
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
            "خِيَارٌ",
            "ذُنُوْبٌ",
            "عُلُوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "door",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"door\"?",
          "options": [
            "بَابٌ",
            "قَالَ يَقُوْلُ",
            "صَلَّى يُصَلِّيْ",
            "عَدَلَ يَعْدِلُ"
          ],
          "correct": 0
        },
        {
          "title": "door",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَابٌ mean?",
          "options": [
            "door",
            "to forget",
            "polytheism",
            "worse, worst, evil"
          ],
          "correct": 0
        },
        {
          "title": "door (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَابٌ?",
          "options": [
            "أَبْوَابٌ",
            "مُتَّقُوْنَ",
            "أَلْبَانٌ",
            "أَدْيَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "minute",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"minute\"?",
          "options": [
            "دَقِيْقَةٌ",
            "قَتَلَ يَقْتُلُ",
            "حُجْرَةٌ",
            "جَزِعَ يَجْزَعُ"
          ],
          "correct": 0
        },
        {
          "title": "minute",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَقِيْقَةٌ mean?",
          "options": [
            "minute",
            "world",
            "to forget",
            "good deed"
          ],
          "correct": 0
        },
        {
          "title": "minute (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَقِيْقَةٌ?",
          "options": [
            "دَقَائِقُ",
            "أَحْيَانٌ",
            "مَوَاعِظُ",
            "تُجَّارٌ"
          ],
          "correct": 0
        },
        {
          "title": "last night",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"last night\"?",
          "options": [
            "اَلْبَارِحَةُ",
            "آخِرَةٌ",
            "فَتَحَ يَفْتَحُ",
            "اِتَّخَذَ يَتَّخِذُ"
          ],
          "correct": 0
        },
        {
          "title": "last night",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اَلْبَارِحَةُ mean?",
          "options": [
            "last night",
            "clear, clear proof",
            "room",
            "thing"
          ],
          "correct": 0
        },
        {
          "title": "religion, retribution",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"religion, retribution\"?",
          "options": [
            "دِيْنٌ",
            "ثَوَابٌ",
            "رَضِيَ يَرْضَى",
            "شَفَى يَشْفِيْ"
          ],
          "correct": 0
        },
        {
          "title": "religion, retribution",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دِيْنٌ mean?",
          "options": [
            "religion, retribution",
            "businessman",
            "to obey",
            "Haji (one who has performed Hajj)"
          ],
          "correct": 0
        },
        {
          "title": "religion, retribution (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دِيْنٌ?",
          "options": [
            "أَدْيَانٌ",
            "مَوَازِيْنُ",
            "دَقَائِقُ",
            "أَغْنِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "human being",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"human being\"?",
          "options": [
            "بَشَرٌ",
            "أَطْعَمَ يُطْعِمُ",
            "عَالَمٌ",
            "نَهَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "human being",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَشَرٌ mean?",
          "options": [
            "human being",
            "knowledge",
            "to guide",
            "to fill"
          ],
          "correct": 0
        },
        {
          "title": "sins",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sins\"?",
          "options": [
            "ذَنْبٌ",
            "أُسْبُوْعٌ",
            "أَبَدٌ",
            "اَلْبَارِحَةُ"
          ],
          "correct": 0
        },
        {
          "title": "sins",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَنْبٌ mean?",
          "options": [
            "sins",
            "to misguide",
            "worse, worst, evil",
            "to leave, let"
          ],
          "correct": 0
        },
        {
          "title": "sins (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ذَنْبٌ?",
          "options": [
            "ذُنُوْبٌ",
            "شِرَارٌ",
            "شَيَاطِيْنُ",
            "صُرُطٌ"
          ],
          "correct": 0
        },
        {
          "title": "bearer of glad tidings",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bearer of glad tidings\"?",
          "options": [
            "بَشِيْرٌ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "نَهَارٌ",
            "زَادَ يَزِيْدُ"
          ],
          "correct": 0
        },
        {
          "title": "bearer of glad tidings",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَشِيْرٌ mean?",
          "options": [
            "bearer of glad tidings",
            "door",
            "to sit",
            "to envy"
          ],
          "correct": 0
        },
        {
          "title": "pound (weight)",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pound (weight)\"?",
          "options": [
            "رِطْلٌ",
            "حَقِيْبَةٌ",
            "أَفْلَحَ يُفْلِحُ",
            "نَاصِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "pound (weight)",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رِطْلٌ mean?",
          "options": [
            "pound (weight)",
            "to earn",
            "to call, supplicate",
            "businessman"
          ],
          "correct": 0
        },
        {
          "title": "pound (weight) (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رِطْلٌ?",
          "options": [
            "أَرْطَالٌ",
            "أُجُوْرٌ",
            "بَيِّنَاتٌ",
            "أَحْيَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "enlightenment, insight",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"enlightenment, insight\"?",
          "options": [
            "بَصِيْرَةٌ",
            "إِنَاءٌ",
            "حُجْرَةٌ",
            "بَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "enlightenment, insight",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَصِيْرَةٌ mean?",
          "options": [
            "enlightenment, insight",
            "to come",
            "to come out, leave",
            "to respect, honour"
          ],
          "correct": 0
        },
        {
          "title": "enlightenment, insight (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَصِيْرَةٌ?",
          "options": [
            "بَصَائِرُ",
            "أَلْبَانٌ",
            "سَيِّئَاتٌ",
            "أَجْزَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "time, while, hour, Day of Judgement",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, while, hour, Day of Judgement\"?",
          "options": [
            "سَاعَةٌ",
            "حَسَنَةٌ",
            "أَمْسِ (مَبْنِيٌّ)",
            "سَكَتَ يَسْكُتُ"
          ],
          "correct": 0
        },
        {
          "title": "time, while, hour, Day of Judgement",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَاعَةٌ mean?",
          "options": [
            "time, while, hour, Day of Judgement",
            "now, just now",
            "to laugh",
            "polytheism"
          ],
          "correct": 0
        },
        {
          "title": "time, while, hour, Day of Judgement (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَاعَةٌ?",
          "options": [
            "سَاعَاتٌ",
            "عَالَمُوْنَ",
            "ذُنُوْبٌ",
            "شِرَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "yet, until now",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"yet, until now\"?",
          "options": [
            "بَعْدُ (مَبْنِيٌّ)",
            "حِيْنٌ",
            "خَطَبَ يَخْطُبُ",
            "حَسَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "yet, until now",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعْدُ (مَبْنِيٌّ) mean?",
          "options": [
            "yet, until now",
            "polytheism",
            "to take, seize",
            "migrant"
          ],
          "correct": 0
        },
        {
          "title": "show",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"show\"?",
          "options": [
            "سُمْعَةٌ",
            "أَقَلُّ",
            "مَلَأَ يَمْلَأُ",
            "دِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "show",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سُمْعَةٌ mean?",
          "options": [
            "show",
            "to show",
            "to be humble",
            "to give to drink"
          ],
          "correct": 0
        },
        {
          "title": "clear, clear proof",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"clear, clear proof\"?",
          "options": [
            "بَيِّنَةٌ",
            "لَبَنٌ",
            "مَسْرُوْرٌ",
            "خَرَجَ يَخْرُجُ"
          ],
          "correct": 0
        },
        {
          "title": "clear, clear proof",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَيِّنَةٌ mean?",
          "options": [
            "clear, clear proof",
            "to increase",
            "happy",
            "to kill, murder"
          ],
          "correct": 0
        },
        {
          "title": "clear, clear proof (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَيِّنَةٌ?",
          "options": [
            "بَيِّنَاتٌ",
            "أَغْنِيَاءُ",
            "ذُنُوْبٌ",
            "مَوَازِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "evil deed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"evil deed\"?",
          "options": [
            "سَيِّئَةٌ",
            "حَسَدَ يَحْسُدُ",
            "لَحْمٌ",
            "بَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "evil deed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَيِّئَةٌ mean?",
          "options": [
            "evil deed",
            "to clothe",
            "to recite clearly",
            "reward, wage"
          ],
          "correct": 0
        },
        {
          "title": "evil deed (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَيِّئَةٌ?",
          "options": [
            "سَيِّئَاتٌ",
            "أَنْصَارٌ",
            "شَيَاطِيْنُ",
            "دَقَائِقُ"
          ],
          "correct": 0
        },
        {
          "title": "businessman",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"businessman\"?",
          "options": [
            "تَاجِرٌ",
            "أَحْسَنُ",
            "شَرٌّ",
            "مَلَكٌ"
          ],
          "correct": 0
        },
        {
          "title": "businessman",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَاجِرٌ mean?",
          "options": [
            "businessman",
            "container",
            "to write, prescribe",
            "to call, supplicate"
          ],
          "correct": 0
        },
        {
          "title": "businessman (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَاجِرٌ?",
          "options": [
            "تُجَّارٌ",
            "أَشْيَاءُ",
            "أَغْنِيَاءُ",
            "مُتَّقُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "worse, worst, evil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"worse, worst, evil\"?",
          "options": [
            "شَرٌّ",
            "خَيْرٌ",
            "رَكِبَ يَرْكَبُ",
            "خَشَعَ يَخْشَعُ"
          ],
          "correct": 0
        },
        {
          "title": "worse, worst, evil",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرٌّ mean?",
          "options": [
            "worse, worst, evil",
            "religion, retribution",
            "God-fearing",
            "tomorrow"
          ],
          "correct": 0
        },
        {
          "title": "worse, worst, evil (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَرٌّ?",
          "options": [
            "شِرَارٌ",
            "تُجَّارٌ",
            "غُرَفٌ، غُرُفَاتٌ",
            "أَبْوَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "apple",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"apple\"?",
          "options": [
            "تُفَّاحَةٌ",
            "نَافِذَةٌ",
            "يَوْمٌ",
            "سَقَى يَسْقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "apple",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تُفَّاحَةٌ mean?",
          "options": [
            "apple",
            "to love",
            "week",
            "show"
          ],
          "correct": 0
        },
        {
          "title": "apple (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تُفَّاحَةٌ?",
          "options": [
            "تُفَّاحَاتٌ",
            "حَسَنَاتٌ",
            "شُهُوْرٌ، أَشْهُرٌ",
            "نَوَافِذُ"
          ],
          "correct": 0
        },
        {
          "title": "polytheism",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"polytheism\"?",
          "options": [
            "شِرْكٌ",
            "قَعَدَ يَقْعُدُ",
            "غَنِيٌّ",
            "وَهَبَ يَهَبُ"
          ],
          "correct": 0
        },
        {
          "title": "polytheism",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شِرْكٌ mean?",
          "options": [
            "polytheism",
            "to cure",
            "to enter",
            "milk"
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
            "حَقِيْبَةٌ",
            "نَافِذَةٌ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ"
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
            "enlightenment, insight",
            "to disobey",
            "last night"
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
            "حُجَّاجٌ",
            "نَوَافِذُ",
            "حَسَنَاتٌ"
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
            "شَيْطَانٌ",
            "اِتَّخَذَ يَتَّخِذُ",
            "سَجَدَ يَسْجُدُ"
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
            "severe, severest",
            "wisdom",
            "to give"
          ],
          "correct": 0
        },
        {
          "title": "month (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَهْرٌ?",
          "options": [
            "شُهُوْرٌ، أَشْهُرٌ",
            "حُجَّاجٌ",
            "أَلْبَانٌ",
            "لُحُوْمٌ"
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
            "مَسْرُوْرٌ",
            "صَلَّى يُصَلِّيْ",
            "صِرَاطٌ"
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
            "clear, clear proof",
            "to be happy with, approve of",
            "pound (weight)"
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
            "حَاجٌّ",
            "سَيِّئَةٌ",
            "بَاعَ يَبِيْعُ"
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
            "ever",
            "bearer of glad tidings",
            "week"
          ],
          "correct": 0
        },
        {
          "title": "thing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَيْءٌ?",
          "options": [
            "أَشْيَاءُ",
            "مَوَازِيْنُ",
            "ذُنُوْبٌ",
            "حَقَائِبُ"
          ],
          "correct": 0
        },
        {
          "title": "God-fearing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"God-fearing\"?",
          "options": [
            "مُتَّقٍ",
            "وَهَبَ يَهَبُ",
            "أَقَلُّ",
            "حِكْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "God-fearing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُتَّقٍ mean?",
          "options": [
            "God-fearing",
            "to be quiet",
            "to be humble",
            "to memorise, protect"
          ],
          "correct": 0
        },
        {
          "title": "God-fearing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُتَّقٍ?",
          "options": [
            "مُتَّقُوْنَ",
            "تُجَّارٌ",
            "أُجُوْرٌ",
            "حَقَائِبُ"
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
            "ثَوَابٌ",
            "رَجَا يَرْجُوْ",
            "عَلِمَ يَعْلَمُ"
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
            "reward, wage",
            "pound (weight)",
            "hereafter"
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
            "أَرْطَالٌ",
            "أَسَابِيْعُ",
            "أَحْيَانٌ"
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
            "مُهَاجِرٌ",
            "قَطُّ (مَبْنِيٌّ)",
            "سَجَدَ يَسْجُدُ"
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
            "God-fearing",
            "to misguide",
            "to prostrate"
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
            "مَوْعِظَةٌ",
            "جَزِعَ يَجْزَعُ",
            "حَقٌّ"
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
            "God-fearing",
            "to perform salah",
            "to be misled"
          ],
          "correct": 0
        },
        {
          "title": "happy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"happy\"?",
          "options": [
            "مَسْرُوْرٌ",
            "رَجَعَ يَرْجِعُ",
            "سَقَى يَسْقِيْ",
            "فَهِمَ يَفْهَمُ"
          ],
          "correct": 0
        },
        {
          "title": "happy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسْرُوْرٌ mean?",
          "options": [
            "happy",
            "admonition",
            "to cry",
            "better"
          ],
          "correct": 0
        },
        {
          "title": "happy (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَسْرُوْرٌ?",
          "options": [
            "مَسْرُوْرُوْنَ",
            "لِتْرَاتٌ",
            "أَحْيَانٌ",
            "شَيَاطِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "path",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"path\"?",
          "options": [
            "صِرَاطٌ",
            "أَطْعَمَ يُطْعِمُ",
            "قَتَلَ يَقْتُلُ",
            "آنٌ"
          ],
          "correct": 0
        },
        {
          "title": "path",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صِرَاطٌ mean?",
          "options": [
            "path",
            "to collect, gather",
            "to clothe",
            "reward, wage"
          ],
          "correct": 0
        },
        {
          "title": "path (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صِرَاطٌ?",
          "options": [
            "صُرُطٌ",
            "أَيَّامٌ",
            "مُتَّقُوْنَ",
            "شَيَاطِيْنُ"
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
            "خَرَجَ يَخْرُجُ",
            "ذَنْبٌ",
            "خَافَ يَخَافُ"
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
            "week",
            "businessman",
            "tomorrow"
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
            "أَلْبَانٌ",
            "مَسْرُوْرُوْنَ",
            "حَسَنَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "world",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"world\"?",
          "options": [
            "عَالَمٌ",
            "شَرٌّ",
            "رَتَّلَ يُرَتِّلُ",
            "ضَرَبَ يَضْرِبُ"
          ],
          "correct": 0
        },
        {
          "title": "world",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَالَمٌ mean?",
          "options": [
            "world",
            "blessed",
            "ever",
            "time"
          ],
          "correct": 0
        },
        {
          "title": "world (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَالَمٌ?",
          "options": [
            "عَالَمُوْنَ",
            "غُرَفٌ، غُرُفَاتٌ",
            "أَلْبَانٌ",
            "أَبْوَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "migrant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"migrant\"?",
          "options": [
            "مُهَاجِرٌ",
            "مَلَكٌ",
            "رَغِبَ يَرْغَبُ",
            "أَضَلَّ يُضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "migrant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُهَاجِرٌ mean?",
          "options": [
            "migrant",
            "to recite clearly",
            "to be just",
            "bearer of glad tidings"
          ],
          "correct": 0
        },
        {
          "title": "migrant (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُهَاجِرٌ?",
          "options": [
            "مُهَاجِرُوْنَ",
            "حَقَائِبُ",
            "دَقَائِقُ",
            "حُجَّاجٌ"
          ],
          "correct": 0
        },
        {
          "title": "honey",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"honey\"?",
          "options": [
            "عَسَلٌ",
            "سَاعَةٌ",
            "شَهْرٌ",
            "رَهِبَ يَرْهَبُ"
          ],
          "correct": 0
        },
        {
          "title": "honey",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَسَلٌ mean?",
          "options": [
            "honey",
            "litre",
            "admonition",
            "to bow"
          ],
          "correct": 0
        },
        {
          "title": "admonition",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"admonition\"?",
          "options": [
            "مَوْعِظَةٌ",
            "صَنَعَ يَصْنَعُ",
            "أُسْبُوْعٌ",
            "ذَنْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "admonition",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَوْعِظَةٌ mean?",
          "options": [
            "admonition",
            "stone",
            "to forget",
            "to fear"
          ],
          "correct": 0
        },
        {
          "title": "admonition (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَوْعِظَةٌ?",
          "options": [
            "مَوَاعِظُ",
            "أَسَابِيْعُ",
            "عَالَمُوْنَ",
            "حُجُرَاتٌ"
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
            "مِيْزَانٌ",
            "وَعَدَ يَعِدُ",
            "اِحْتَرَمَ يَحْتَرِمُ"
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
            "to obey",
            "wisdom",
            "to love"
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
            "مَوَاعِظُ",
            "سَيِّئَاتٌ",
            "أَرْطَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "scale",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"scale\"?",
          "options": [
            "مِيْزَانٌ",
            "حِكْمَةٌ",
            "رَتَّلَ يُرَتِّلُ",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "scale",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِيْزَانٌ mean?",
          "options": [
            "scale",
            "to be quiet",
            "more, most",
            "to fear"
          ],
          "correct": 0
        },
        {
          "title": "scale (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِيْزَانٌ?",
          "options": [
            "مَوَازِيْنُ",
            "أَشْيَاءُ",
            "نَوَافِذُ",
            "أَسَابِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "tomorrow",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tomorrow\"?",
          "options": [
            "غَدٌ",
            "ذَنْبٌ",
            "اَلْآنَ",
            "أَطْعَمَ يُطْعِمُ"
          ],
          "correct": 0
        },
        {
          "title": "tomorrow",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَدٌ mean?",
          "options": [
            "tomorrow",
            "wisdom",
            "to fill",
            "milk"
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
            "أَشَدُّ",
            "عَصَى يَعْصِيْ",
            "خَافَ يَخَافُ"
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
            "to bow",
            "to desire",
            "to be guided, find the right way"
          ],
          "correct": 0
        },
        {
          "title": "helper (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَاصِرٌ?",
          "options": [
            "أَنْصَارٌ",
            "حَسَنَاتٌ",
            "حُجُرَاتٌ",
            "مَوَازِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"room\"?",
          "options": [
            "غُرْفَةٌ",
            "جَمَعَ يَجْمَعُ",
            "سَجَدَ يَسْجُدُ",
            "قَالَ يَقُوْلُ"
          ],
          "correct": 0
        },
        {
          "title": "room",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غُرْفَةٌ mean?",
          "options": [
            "room",
            "bag",
            "to hit",
            "blessed"
          ],
          "correct": 0
        },
        {
          "title": "room (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غُرْفَةٌ?",
          "options": [
            "غُرَفٌ، غُرُفَاتٌ",
            "مُهَاجِرُوْنَ",
            "سَيِّئَاتٌ",
            "سَاعَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "window",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"window\"?",
          "options": [
            "نَافِذَةٌ",
            "غَدٌ",
            "إِنَاءٌ",
            "رَغِبَ يَرْغَبُ"
          ],
          "correct": 0
        },
        {
          "title": "window",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَافِذَةٌ mean?",
          "options": [
            "window",
            "one",
            "room",
            "to cure"
          ],
          "correct": 0
        },
        {
          "title": "window (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَافِذَةٌ?",
          "options": [
            "نَوَافِذُ",
            "مَوَازِيْنُ",
            "حَسَنَاتٌ",
            "أَسَابِيْعُ"
          ],
          "correct": 0
        },
        {
          "title": "rich, independent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"rich, independent\"?",
          "options": [
            "غَنِيٌّ",
            "اِحْتَرَمَ يَحْتَرِمُ",
            "سَجَدَ يَسْجُدُ",
            "شِرْكٌ"
          ],
          "correct": 0
        },
        {
          "title": "rich, independent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَنِيٌّ mean?",
          "options": [
            "rich, independent",
            "to hope, desire",
            "to perform salah",
            "good deed"
          ],
          "correct": 0
        },
        {
          "title": "rich, independent (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غَنِيٌّ?",
          "options": [
            "أَغْنِيَاءُ",
            "أَرْطَالٌ",
            "لُحُوْمٌ",
            "مَلَائِكَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "day/daytime",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"day/daytime\"?",
          "options": [
            "نَهَارٌ",
            "ثَوَابٌ",
            "أَنْفَقَ يُنْفِقُ",
            "خَيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "day/daytime",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَهَارٌ mean?",
          "options": [
            "day/daytime",
            "to misguide",
            "to cure",
            "admonition"
          ],
          "correct": 0
        },
        {
          "title": "ever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"ever\"?",
          "options": [
            "قَطُّ (مَبْنِيٌّ)",
            "مِيْزَانٌ",
            "مَشَى يَمْشِيْ",
            "أَنْفَقَ يُنْفِقُ"
          ],
          "correct": 0
        },
        {
          "title": "ever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَطُّ (مَبْنِيٌّ) mean?",
          "options": [
            "ever",
            "rich, independent",
            "sins",
            "to be successful"
          ],
          "correct": 0
        },
        {
          "title": "one",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one\"?",
          "options": [
            "وَاحِدٌ",
            "قَتَلَ يَقْتُلُ",
            "سَيِّئَةٌ",
            "رَكَعَ يَرْكَعُ"
          ],
          "correct": 0
        },
        {
          "title": "one",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَاحِدٌ mean?",
          "options": [
            "one",
            "Haji (one who has performed Hajj)",
            "admonition",
            "evil deed"
          ],
          "correct": 0
        },
        {
          "title": "milk",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"milk\"?",
          "options": [
            "لَبَنٌ",
            "سُمْعَةٌ",
            "أَرَى يُرِيْ",
            "حَسَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "milk",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبَنٌ mean?",
          "options": [
            "milk",
            "to clothe",
            "to call, supplicate",
            "to hope, desire"
          ],
          "correct": 0
        },
        {
          "title": "milk (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لَبَنٌ?",
          "options": [
            "أَلْبَانٌ",
            "أَسَابِيْعُ",
            "حِكَمٌ",
            "تُفَّاحَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "day",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"day\"?",
          "options": [
            "يَوْمٌ",
            "أَتَى يَأْتِيْ",
            "رَتَّلَ يُرَتِّلُ",
            "نَهَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "day",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَوْمٌ mean?",
          "options": [
            "day",
            "to bow",
            "to sit",
            "to promise"
          ],
          "correct": 0
        },
        {
          "title": "day (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of يَوْمٌ?",
          "options": [
            "أَيَّامٌ",
            "أَشْيَاءُ",
            "مُتَّقُوْنَ",
            "حِكَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "litre",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"litre\"?",
          "options": [
            "لِتْرٌ",
            "زَادَ يَزِيْدُ",
            "نَافِذَةٌ",
            "دَعَا يَدْعُوْ"
          ],
          "correct": 0
        },
        {
          "title": "litre",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لِتْرٌ mean?",
          "options": [
            "litre",
            "to fear",
            "to leave, let",
            "to love"
          ],
          "correct": 0
        },
        {
          "title": "litre (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of لِتْرٌ?",
          "options": [
            "لِتْرَاتٌ",
            "مَلَائِكَةٌ",
            "مَوَازِيْنُ",
            "أَغْنِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "to leave, let",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to leave, let\"?",
          "options": [
            "تَرَكَ يَتْرُكُ",
            "أَرْسَلَ يُرْسِلُ",
            "حَفِظَ يَحْفَظُ",
            "ثَوَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to leave, let",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَرَكَ يَتْرُكُ mean?",
          "options": [
            "to leave, let",
            "now, just now",
            "to memorise, protect",
            "lesson"
          ],
          "correct": 0
        },
        {
          "title": "to leave, let (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَرَكَ يَتْرُكُ?",
          "options": [
            "تَرْكًا",
            "إِيْتَاءً",
            "اِشْتِرَاءً",
            "خَوْفًا"
          ],
          "correct": 0
        },
        {
          "title": "to take as",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take as\"?",
          "options": [
            "اِتَّخَذَ يَتَّخِذُ",
            "عَمِلَ يَعْمَلُ",
            "رَتَّلَ يُرَتِّلُ",
            "رَكِبَ يَرْكَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to take as",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّخَذَ يَتَّخِذُ mean?",
          "options": [
            "to take as",
            "to give a lecture",
            "thing",
            "last night"
          ],
          "correct": 0
        },
        {
          "title": "to take as (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّخَذَ يَتَّخِذُ?",
          "options": [
            "اِتِّخَاذًا",
            "ضَرْبًا",
            "إِطَاعَةً، طَاعَةً",
            "رَغْبَةً، رَغَبًا"
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
            "اَلْبَارِحَةُ",
            "مَشَى يَمْشِيْ",
            "آتَى يُؤْتِيْ"
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
            "clear, clear proof",
            "to perform salah",
            "to laugh"
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
            "اِشْتِرَاءً",
            "إِطْعَامًا",
            "كَسْبًا"
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
            "دَرْسٌ",
            "شَهْرٌ",
            "اَلْآنَ"
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
            "ever",
            "devil",
            "worse, worst, evil"
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
            "رِضْوَانًا",
            "مَعْصِيَةً",
            "تَرْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to be impatient",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be impatient\"?",
          "options": [
            "جَزِعَ يَجْزَعُ",
            "حَجَرٌ",
            "حَقٌّ",
            "دَخَلَ يَدْخُلُ"
          ],
          "correct": 0
        },
        {
          "title": "to be impatient",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَزِعَ يَجْزَعُ mean?",
          "options": [
            "to be impatient",
            "migrant",
            "to disobey",
            "container"
          ],
          "correct": 0
        },
        {
          "title": "to be impatient (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَزِعَ يَجْزَعُ?",
          "options": [
            "جَزَعًا",
            "إِطَاعَةً، طَاعَةً",
            "إِحْبَابًا، حُبًّا",
            "اِهْتِدَاءً"
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
            "غُرْفَةٌ",
            "نَسِيَ يَنْسَى",
            "رَضِيَ يَرْضَى"
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
            "less, least",
            "to perform salah",
            "to bow"
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
            "اِشْتِرَاءً",
            "طَمَعًا",
            "وَعْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to collect, gather",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to collect, gather\"?",
          "options": [
            "جَمَعَ يَجْمَعُ",
            "أَطَاعَ يُطِيْعُ",
            "سَاعَةٌ",
            "مِيْزَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to collect, gather",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَمَعَ يَجْمَعُ mean?",
          "options": [
            "to collect, gather",
            "knowledge",
            "apple",
            "admonition"
          ],
          "correct": 0
        },
        {
          "title": "to collect, gather (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of جَمَعَ يَجْمَعُ?",
          "options": [
            "جَمْعًا",
            "رُكُوْعًا",
            "رِضْوَانًا",
            "مَلْأً"
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
            "أَنْعَمَ يُنْعِمُ",
            "حَسَنَةٌ",
            "نَافِذَةٌ"
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
            "severe, severest",
            "God-fearing",
            "path"
          ],
          "correct": 0
        },
        {
          "title": "to love (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحَبَّ يُحِبُّ?",
          "options": [
            "إِحْبَابًا، حُبًّا",
            "حَسَدًا",
            "اِسْتِغْفَارًا",
            "بَيْعًا"
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
            "عِلْمٌ",
            "قَطُّ (مَبْنِيٌّ)",
            "خَافَ يَخَافُ"
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
            "now, just now",
            "bag",
            "path"
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
            "وَعْدًا",
            "اِزْدِيَادًا",
            "قَتْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to respect, honour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to respect, honour\"?",
          "options": [
            "اِحْتَرَمَ يَحْتَرِمُ",
            "رَكَعَ يَرْكَعُ",
            "حَسَنَةٌ",
            "دَقِيْقَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to respect, honour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَرَمَ يَحْتَرِمُ mean?",
          "options": [
            "to respect, honour",
            "stone",
            "to recite clearly",
            "yet, until now"
          ],
          "correct": 0
        },
        {
          "title": "to respect, honour (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَرَمَ يَحْتَرِمُ?",
          "options": [
            "اِحْتِرَامًا",
            "رَجَاءً",
            "سُجُوْدًا",
            "مَلْأً"
          ],
          "correct": 0
        },
        {
          "title": "to memorise, protect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to memorise, protect\"?",
          "options": [
            "حَفِظَ يَحْفَظُ",
            "دَقِيْقَةٌ",
            "مُبَارَكٌ",
            "خَطَبَ يَخْطُبُ"
          ],
          "correct": 0
        },
        {
          "title": "to memorise, protect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَفِظَ يَحْفَظُ mean?",
          "options": [
            "to memorise, protect",
            "to be quiet",
            "to come",
            "to be humble"
          ],
          "correct": 0
        },
        {
          "title": "to memorise, protect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَفِظَ يَحْفَظُ?",
          "options": [
            "حِفْظًا",
            "كَسْوًا",
            "سَقْيًا",
            "رَغْبَةً، رَغَبًا"
          ],
          "correct": 0
        },
        {
          "title": "to hope for reward",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope for reward\"?",
          "options": [
            "اِحْتَسَبَ يَحْتَسِبُ",
            "سَيِّئَةٌ",
            "بَابٌ",
            "خَطَبَ يَخْطُبُ"
          ],
          "correct": 0
        },
        {
          "title": "to hope for reward",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَسَبَ يَحْتَسِبُ mean?",
          "options": [
            "to hope for reward",
            "to fill",
            "polytheism",
            "to respect, honour"
          ],
          "correct": 0
        },
        {
          "title": "to hope for reward (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَسَبَ يَحْتَسِبُ?",
          "options": [
            "اِحْتِسَابًا",
            "تَكْذِيْبًا",
            "مَعْصِيَةً",
            "سَقْيًا"
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
            "ثَوَابٌ",
            "تَلَا يَتْلُوْ",
            "ضَحِكَ يَضْحَكُ"
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
            "to misguide",
            "to write, prescribe",
            "to be successful"
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
            "دُخُوْلًا",
            "بَيْعًا",
            "إِطَاعَةً، طَاعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to take, seize",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take, seize\"?",
          "options": [
            "أَخَذَ يَأْخُذُ",
            "مَسْرُوْرٌ",
            "فَتَحَ يَفْتَحُ",
            "إِنَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to take, seize",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخَذَ يَأْخُذُ mean?",
          "options": [
            "to take, seize",
            "last night",
            "businessman",
            "evening"
          ],
          "correct": 0
        },
        {
          "title": "to take, seize (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَخَذَ يَأْخُذُ?",
          "options": [
            "أَخْذًا",
            "إِرْسَالًا",
            "اِزْدِيَادًا",
            "كَسْوًا"
          ],
          "correct": 0
        },
        {
          "title": "to come out, leave",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to come out, leave\"?",
          "options": [
            "خَرَجَ يَخْرُجُ",
            "زَادَ يَزِيْدُ",
            "عَدَلَ يَعْدِلُ",
            "بَيِّنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to come out, leave",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَرَجَ يَخْرُجُ mean?",
          "options": [
            "to come out, leave",
            "part",
            "window",
            "time"
          ],
          "correct": 0
        },
        {
          "title": "to come out, leave (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَرَجَ يَخْرُجُ?",
          "options": [
            "خُرُوْجًا",
            "كَسْوًا",
            "هِبَةً",
            "مَعْصِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to send",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send\"?",
          "options": [
            "أَرْسَلَ يُرْسِلُ",
            "كَسَا يَكْسُوْ",
            "قَالَ يَقُوْلُ",
            "شَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to send",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرْسَلَ يُرْسِلُ mean?",
          "options": [
            "to send",
            "to spend",
            "to leave, let",
            "last night"
          ],
          "correct": 0
        },
        {
          "title": "to send (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَرْسَلَ يُرْسِلُ?",
          "options": [
            "إِرْسَالًا",
            "هِبَةً",
            "مَلْأً",
            "رَغْبَةً، رَغَبًا"
          ],
          "correct": 0
        },
        {
          "title": "to be humble",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be humble\"?",
          "options": [
            "خَشَعَ يَخْشَعُ",
            "حَفِظَ يَحْفَظُ",
            "حِكْمَةٌ",
            "شَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be humble",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَشَعَ يَخْشَعُ mean?",
          "options": [
            "to be humble",
            "to do, work",
            "path",
            "to take, seize"
          ],
          "correct": 0
        },
        {
          "title": "to be humble (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَشَعَ يَخْشَعُ?",
          "options": [
            "خُشُوْعًا",
            "ضِحْكًا",
            "عَدْلًا",
            "طَمَعًا"
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
            "جُزْءٌ",
            "شَيْطَانٌ",
            "شِرْكٌ"
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
            "meat",
            "better",
            "to come"
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
            "زِيَادَةً",
            "اِحْتِرَامًا",
            "كِتَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to give a lecture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give a lecture\"?",
          "options": [
            "خَطَبَ يَخْطُبُ",
            "عَصَى يَعْصِيْ",
            "حَسَدَ يَحْسُدُ",
            "بَشِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to give a lecture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَطَبَ يَخْطُبُ mean?",
          "options": [
            "to give a lecture",
            "to be successful",
            "to come out, leave",
            "to respect, honour"
          ],
          "correct": 0
        },
        {
          "title": "to give a lecture (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَطَبَ يَخْطُبُ?",
          "options": [
            "خُطْبَةً",
            "اِزْدِيَادًا",
            "إِضْلَالًا",
            "هِدَايَةً، هُدًى"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to increase\"?",
          "options": [
            "اِزْدَادَ يَزْدَادُ",
            "صِرَاطٌ",
            "حَجَرٌ",
            "تَلَا يَتْلُوْ"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِزْدَادَ يَزْدَادُ mean?",
          "options": [
            "to increase",
            "month",
            "part",
            "hereafter"
          ],
          "correct": 0
        },
        {
          "title": "to increase (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِزْدَادَ يَزْدَادُ?",
          "options": [
            "اِزْدِيَادًا",
            "اِحْتِرَامًا",
            "رَجَاءً",
            "دَعْوَةً، دُعَاءً"
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
            "وَعَدَ يَعِدُ",
            "أَقَلُّ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ"
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
            "to envy",
            "now, just now",
            "more, most"
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
            "رَغْبَةً، رَغَبًا",
            "تَرْكًا",
            "وَعْدًا"
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
            "صَبَاحٌ",
            "حَسَدَ يَحْسُدُ",
            "رِطْلٌ"
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
            "evil deed",
            "to give, grant",
            "to favour"
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
            "قُعُوْدًا",
            "عَمَلًا",
            "اِحْتِرَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to call, supplicate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call, supplicate\"?",
          "options": [
            "دَعَا يَدْعُوْ",
            "تَاجِرٌ",
            "سَقَى يَسْقِيْ",
            "رَغِبَ يَرْغَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to call, supplicate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَعَا يَدْعُوْ mean?",
          "options": [
            "to call, supplicate",
            "to know",
            "rich, independent",
            "helper"
          ],
          "correct": 0
        },
        {
          "title": "to call, supplicate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَعَا يَدْعُوْ?",
          "options": [
            "دَعْوَةً، دُعَاءً",
            "رَغْبَةً، رَغَبًا",
            "جَمْعًا",
            "صُنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to buy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to buy\"?",
          "options": [
            "اِشْتَرَى يَشْتَرِيْ",
            "ثَوَابٌ",
            "حَسَدَ يَحْسُدُ",
            "أَرَى يُرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to buy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِشْتَرَى يَشْتَرِيْ mean?",
          "options": [
            "to buy",
            "to recite clearly",
            "bag",
            "devil"
          ],
          "correct": 0
        },
        {
          "title": "to buy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِشْتَرَى يَشْتَرِيْ?",
          "options": [
            "اِشْتِرَاءً",
            "هِدَايَةً، هُدًى",
            "رُجُوْعًا",
            "سَقْيًا"
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
            "دِيْنٌ",
            "مَسْرُوْرٌ",
            "رَكَعَ يَرْكَعُ"
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
            "to hope",
            "part",
            "litre"
          ],
          "correct": 0
        },
        {
          "title": "to show off (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَاءَى يُرَائِيْ?",
          "options": [
            "رِيَاءً، مُرَاءَاةً",
            "رَهْبَةً، رَهَبًا",
            "إِطْعَامًا",
            "بُكَاءً"
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
            "اَلْبَارِحَةُ",
            "كَتَبَ يَكْتُبُ",
            "مَسْرُوْرٌ"
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
            "to collect, gather",
            "polytheism",
            "minute"
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
            "اِعْتِمَارًا",
            "خُطْبَةً",
            "عَدْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to recite clearly",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to recite clearly\"?",
          "options": [
            "رَتَّلَ يُرَتِّلُ",
            "سَجَدَ يَسْجُدُ",
            "إِنَاءٌ",
            "أَفْلَحَ يُفْلِحُ"
          ],
          "correct": 0
        },
        {
          "title": "to recite clearly",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَتَّلَ يُرَتِّلُ mean?",
          "options": [
            "to recite clearly",
            "wisdom",
            "to come out, leave",
            "door"
          ],
          "correct": 0
        },
        {
          "title": "to recite clearly (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَتَّلَ يُرَتِّلُ?",
          "options": [
            "تَرْتِيْلًا",
            "كَسْبًا",
            "دُخُوْلًا",
            "قَوْلًا"
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
            "صَلَّى يُصَلِّيْ",
            "قَتَلَ يَقْتُلُ",
            "آتَى يُؤْتِيْ"
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
            "rich, independent",
            "to take, seize",
            "angel"
          ],
          "correct": 0
        },
        {
          "title": "to obey (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَطَاعَ يُطِيْعُ?",
          "options": [
            "إِطَاعَةً، طَاعَةً",
            "اِحْتِرَامًا",
            "سُجُوْدًا",
            "تَرْتِيْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to hope",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope\"?",
          "options": [
            "رَجَا يَرْجُوْ",
            "مَوْعِظَةٌ",
            "اَلْآنَ",
            "سُمْعَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to hope",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَجَا يَرْجُوْ mean?",
          "options": [
            "to hope",
            "world",
            "to give",
            "to return"
          ],
          "correct": 0
        },
        {
          "title": "to hope (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَجَا يَرْجُوْ?",
          "options": [
            "رَجَاءً",
            "ضَلَالًا",
            "عَدْلًا",
            "دُخُوْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to feed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to feed\"?",
          "options": [
            "أَطْعَمَ يُطْعِمُ",
            "حَجَرٌ",
            "جَمَعَ يَجْمَعُ",
            "بَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to feed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَطْعَمَ يُطْعِمُ mean?",
          "options": [
            "to feed",
            "door",
            "to be misled",
            "to be successful"
          ],
          "correct": 0
        },
        {
          "title": "to feed (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَطْعَمَ يُطْعِمُ?",
          "options": [
            "إِطْعَامًا",
            "فَتْحًا",
            "وَضْعًا",
            "جَمْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to return\"?",
          "options": [
            "رَجَعَ يَرْجِعُ",
            "أَشَدُّ",
            "سَجَدَ يَسْجُدُ",
            "شَيْطَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to return",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَجَعَ يَرْجِعُ mean?",
          "options": [
            "to return",
            "to envy",
            "to be misled",
            "yet, until now"
          ],
          "correct": 0
        },
        {
          "title": "to return (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَجَعَ يَرْجِعُ?",
          "options": [
            "رُجُوْعًا",
            "صُنْعًا",
            "حِفْظًا",
            "وَعْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to perform Umrah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform Umrah\"?",
          "options": [
            "اِعْتَمَرَ يَعْتَمِرُ",
            "رِطْلٌ",
            "اِزْدَادَ يَزْدَادُ",
            "سَاعَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to perform Umrah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِعْتَمَرَ يَعْتَمِرُ mean?",
          "options": [
            "to perform Umrah",
            "to enter",
            "scale",
            "to cry"
          ],
          "correct": 0
        },
        {
          "title": "to perform Umrah (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِعْتَمَرَ يَعْتَمِرُ?",
          "options": [
            "اِعْتِمَارًا",
            "ضِحْكًا",
            "وَضْعًا",
            "صُنْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to be happy with, approve of",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be happy with, approve of\"?",
          "options": [
            "رَضِيَ يَرْضَى",
            "شِرْكٌ",
            "اِحْتَسَبَ يَحْتَسِبُ",
            "يَوْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be happy with, approve of",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَضِيَ يَرْضَى mean?",
          "options": [
            "to be happy with, approve of",
            "to respect, honour",
            "to envy",
            "to promise"
          ],
          "correct": 0
        },
        {
          "title": "to be happy with, approve of (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَضِيَ يَرْضَى?",
          "options": [
            "رِضْوَانًا",
            "اِعْتِمَارًا",
            "هِدَايَةً، هُدًى",
            "تَكْذِيْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to be successful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be successful\"?",
          "options": [
            "أَفْلَحَ يُفْلِحُ",
            "عَصَى يَعْصِيْ",
            "دَخَلَ يَدْخُلُ",
            "ذَنْبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be successful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَفْلَحَ يُفْلِحُ mean?",
          "options": [
            "to be successful",
            "to fear",
            "to fear",
            "reward, wage"
          ],
          "correct": 0
        },
        {
          "title": "to be successful (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَفْلَحَ يُفْلِحُ?",
          "options": [
            "إِفْلَاحًا",
            "إِتْيَانًا",
            "رَغْبَةً، رَغَبًا",
            "رِضْوَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to hope, desire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hope, desire\"?",
          "options": [
            "رَغِبَ يَرْغَبُ",
            "أَشَدُّ",
            "سَيِّئَةٌ",
            "أَخَذَ يَأْخُذُ"
          ],
          "correct": 0
        },
        {
          "title": "to hope, desire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَغِبَ يَرْغَبُ mean?",
          "options": [
            "to hope, desire",
            "more, most",
            "part",
            "to recite clearly"
          ],
          "correct": 0
        },
        {
          "title": "to hope, desire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَغِبَ يَرْغَبُ?",
          "options": [
            "رَغْبَةً، رَغَبًا",
            "كَسْوًا",
            "خُرُوْجًا",
            "إِفْلَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to favour",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to favour\"?",
          "options": [
            "أَنْعَمَ يُنْعِمُ",
            "جَمَعَ يَجْمَعُ",
            "رَضِيَ يَرْضَى",
            "عَالَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to favour",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنْعَمَ يُنْعِمُ mean?",
          "options": [
            "to favour",
            "to walk",
            "one",
            "polytheism"
          ],
          "correct": 0
        },
        {
          "title": "to favour (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَنْعَمَ يُنْعِمُ?",
          "options": [
            "إِنْعَامًا",
            "شِفَاءً",
            "جَمْعًا",
            "رَغْبَةً، رَغَبًا"
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
            "قَتَلَ يَقْتُلُ",
            "عَالَمٌ",
            "قَعَدَ يَقْعُدُ"
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
            "to show off",
            "stone",
            "to misguide"
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
            "إِطْعَامًا",
            "عَدْلًا",
            "هِبَةً"
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
            "سُمْعَةٌ",
            "أَفْلَحَ يُفْلِحُ",
            "اِتَّخَذَ يَتَّخِذُ"
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
            "to do, work",
            "path",
            "migrant"
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
            "اِتِّخَاذًا",
            "هِدَايَةً، هُدًى",
            "اِهْتِدَاءً"
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
            "اِعْتَمَرَ يَعْتَمِرُ",
            "مَسْرُوْرٌ",
            "صَنَعَ يَصْنَعُ"
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
            "less, least",
            "to say",
            "apple"
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
            "اِزْدِيَادًا",
            "خُشُوْعًا",
            "سُكُوْتًا"
          ],
          "correct": 0
        },
        {
          "title": "to be guided, find the right way",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be guided, find the right way\"?",
          "options": [
            "اِهْتَدَى يَهْتَدِيْ",
            "ضَرَبَ يَضْرِبُ",
            "كَتَبَ يَكْتُبُ",
            "هَدَى يَهْدِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be guided, find the right way",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِهْتَدَى يَهْتَدِيْ mean?",
          "options": [
            "to be guided, find the right way",
            "evening",
            "religion, retribution",
            "to perform Umrah"
          ],
          "correct": 0
        },
        {
          "title": "to be guided, find the right way (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِهْتَدَى يَهْتَدِيْ?",
          "options": [
            "اِهْتِدَاءً",
            "إِطَاعَةً، طَاعَةً",
            "تِلَاوَةً",
            "وَعْدًا"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fear\"?",
          "options": [
            "رَهِبَ يَرْهَبُ",
            "ذَنْبٌ",
            "تُفَّاحَةٌ",
            "آنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَهِبَ يَرْهَبُ mean?",
          "options": [
            "to fear",
            "to be quiet",
            "better",
            "to hope for reward"
          ],
          "correct": 0
        },
        {
          "title": "to fear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَهِبَ يَرْهَبُ?",
          "options": [
            "رَهْبَةً، رَهَبًا",
            "عِلْمًا",
            "ضَلَالًا",
            "تَكْذِيْبًا"
          ],
          "correct": 0
        },
        {
          "title": "to sell",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sell\"?",
          "options": [
            "بَاعَ يَبِيْعُ",
            "دِيْنٌ",
            "مَشَى يَمْشِيْ",
            "عَالَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to sell",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَاعَ يَبِيْعُ mean?",
          "options": [
            "to sell",
            "morning",
            "to hit",
            "to laugh"
          ],
          "correct": 0
        },
        {
          "title": "to sell (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَاعَ يَبِيْعُ?",
          "options": [
            "بَيْعًا",
            "إِحْبَابًا، حُبًّا",
            "اِحْتِسَابًا",
            "رِضْوَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to increase\"?",
          "options": [
            "زَادَ يَزِيْدُ",
            "عَمِلَ يَعْمَلُ",
            "اِتَّخَذَ يَتَّخِذُ",
            "حَسَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to increase",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَادَ يَزِيْدُ mean?",
          "options": [
            "to increase",
            "room",
            "good deed",
            "to kill, murder"
          ],
          "correct": 0
        },
        {
          "title": "to increase (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of زَادَ يَزِيْدُ?",
          "options": [
            "زِيَادَةً",
            "جَمْعًا",
            "جَزَعًا",
            "رَهْبَةً، رَهَبًا"
          ],
          "correct": 0
        },
        {
          "title": "to cry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cry\"?",
          "options": [
            "بَكَى يَبْكِيْ",
            "رِطْلٌ",
            "بَاعَ يَبِيْعُ",
            "وَاحِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to cry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَكَى يَبْكِيْ mean?",
          "options": [
            "to cry",
            "tomorrow",
            "to hope",
            "to reject"
          ],
          "correct": 0
        },
        {
          "title": "to cry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَكَى يَبْكِيْ?",
          "options": [
            "بُكَاءً",
            "إِنْعَامًا",
            "تَرْكًا",
            "بَيْعًا"
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
            "ثَوَابٌ",
            "خَطَبَ يَخْطُبُ",
            "غَنِيٌّ"
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
            "meat",
            "to increase",
            "to write, prescribe"
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
            "إِيْتَاءً",
            "كَسْوًا",
            "إِرَاءَةً"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to understand\"?",
          "options": [
            "فَهِمَ يَفْهَمُ",
            "قَتَلَ يَقْتُلُ",
            "وَاحِدٌ",
            "غَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to understand",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَهِمَ يَفْهَمُ mean?",
          "options": [
            "to understand",
            "businessman",
            "more, most",
            "to sell"
          ],
          "correct": 0
        },
        {
          "title": "to understand (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of فَهِمَ يَفْهَمُ?",
          "options": [
            "فَهْمًا",
            "فَتْحًا",
            "إِنْعَامًا",
            "رِضْوَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to give to drink",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give to drink\"?",
          "options": [
            "سَقَى يَسْقِيْ",
            "مَلَكٌ",
            "صَبَاحٌ",
            "تَرَكَ يَتْرُكُ"
          ],
          "correct": 0
        },
        {
          "title": "to give to drink",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَقَى يَسْقِيْ mean?",
          "options": [
            "to give to drink",
            "to give, grant",
            "day",
            "to take, seize"
          ],
          "correct": 0
        },
        {
          "title": "to give to drink (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَقَى يَسْقِيْ?",
          "options": [
            "سَقْيًا",
            "رَهْبَةً، رَهَبًا",
            "بُكَاءً",
            "مَعْصِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to say",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to say\"?",
          "options": [
            "قَالَ يَقُوْلُ",
            "أَنْعَمَ يُنْعِمُ",
            "اَلْآنَ",
            "جَمَعَ يَجْمَعُ"
          ],
          "correct": 0
        },
        {
          "title": "to say",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَالَ يَقُوْلُ mean?",
          "options": [
            "to say",
            "part",
            "evening",
            "to memorise, protect"
          ],
          "correct": 0
        },
        {
          "title": "to say (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَالَ يَقُوْلُ?",
          "options": [
            "قَوْلًا",
            "إِنْعَامًا",
            "طَمَعًا",
            "إِضْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to be quiet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be quiet\"?",
          "options": [
            "سَكَتَ يَسْكُتُ",
            "اِعْتَمَرَ يَعْتَمِرُ",
            "أَتَى يَأْتِيْ",
            "نَاصِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be quiet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَكَتَ يَسْكُتُ mean?",
          "options": [
            "to be quiet",
            "meat",
            "always, ever",
            "bearer of glad tidings"
          ],
          "correct": 0
        },
        {
          "title": "to be quiet (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of سَكَتَ يَسْكُتُ?",
          "options": [
            "سُكُوْتًا",
            "هِدَايَةً، هُدًى",
            "خُشُوْعًا",
            "ضَلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to kill, murder",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to kill, murder\"?",
          "options": [
            "قَتَلَ يَقْتُلُ",
            "تَاجِرٌ",
            "وَضَعَ يَضَعُ",
            "أَشَدُّ"
          ],
          "correct": 0
        },
        {
          "title": "to kill, murder",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَتَلَ يَقْتُلُ mean?",
          "options": [
            "to kill, murder",
            "to forget",
            "polytheism",
            "to come"
          ],
          "correct": 0
        },
        {
          "title": "to kill, murder (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَتَلَ يَقْتُلُ?",
          "options": [
            "قَتْلًا",
            "اِهْتِدَاءً",
            "رُجُوْعًا",
            "صَلَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to cure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to cure\"?",
          "options": [
            "شَفَى يَشْفِيْ",
            "مَوْعِظَةٌ",
            "أَضَلَّ يُضِلُّ",
            "حِيْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to cure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَفَى يَشْفِيْ mean?",
          "options": [
            "to cure",
            "to fear",
            "to take, seize",
            "hereafter"
          ],
          "correct": 0
        },
        {
          "title": "to cure (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَفَى يَشْفِيْ?",
          "options": [
            "شِفَاءً",
            "رَغْبَةً، رَغَبًا",
            "عِلْمًا",
            "اِحْتِسَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to sit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to sit\"?",
          "options": [
            "قَعَدَ يَقْعُدُ",
            "رَضِيَ يَرْضَى",
            "لِتْرٌ",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "to sit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَعَدَ يَقْعُدُ mean?",
          "options": [
            "to sit",
            "to show",
            "angel",
            "to take, seize"
          ],
          "correct": 0
        },
        {
          "title": "to sit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَعَدَ يَقْعُدُ?",
          "options": [
            "قُعُوْدًا",
            "شِفَاءً",
            "سَقْيًا",
            "إِضْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to perform salah\"?",
          "options": [
            "صَلَّى يُصَلِّيْ",
            "آتَى يُؤْتِيْ",
            "وَعَدَ يَعِدُ",
            "نَسِيَ يَنْسَى"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَلَّى يُصَلِّيْ mean?",
          "options": [
            "to perform salah",
            "to cure",
            "last night",
            "truth"
          ],
          "correct": 0
        },
        {
          "title": "to perform salah (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَلَّى يُصَلِّيْ?",
          "options": [
            "صَلَاةً",
            "دُخُوْلًا",
            "بُكَاءً",
            "أَخْذًا"
          ],
          "correct": 0
        },
        {
          "title": "to write, prescribe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to write, prescribe\"?",
          "options": [
            "كَتَبَ يَكْتُبُ",
            "اِعْتَمَرَ يَعْتَمِرُ",
            "عَالَمٌ",
            "خَرَجَ يَخْرُجُ"
          ],
          "correct": 0
        },
        {
          "title": "to write, prescribe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَتَبَ يَكْتُبُ mean?",
          "options": [
            "to write, prescribe",
            "worse, worst, evil",
            "to do, work",
            "to forget"
          ],
          "correct": 0
        },
        {
          "title": "to write, prescribe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَتَبَ يَكْتُبُ?",
          "options": [
            "كِتَابَةً",
            "رُجُوْعًا",
            "إِحْبَابًا، حُبًّا",
            "إِتْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to make, manufacture, do",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make, manufacture, do\"?",
          "options": [
            "صَنَعَ يَصْنَعُ",
            "دَقِيْقَةٌ",
            "رَجَا يَرْجُوْ",
            "مُتَّقٍ"
          ],
          "correct": 0
        },
        {
          "title": "to make, manufacture, do",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَنَعَ يَصْنَعُ mean?",
          "options": [
            "to make, manufacture, do",
            "to memorise, protect",
            "to laugh",
            "to give to drink"
          ],
          "correct": 0
        },
        {
          "title": "to make, manufacture, do (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَنَعَ يَصْنَعُ?",
          "options": [
            "صُنْعًا",
            "ضَلَالًا",
            "اِشْتِرَاءً",
            "وَضْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reject\"?",
          "options": [
            "كَذَّبَ يُكَذِّبُ",
            "ذَنْبٌ",
            "اِتَّخَذَ يَتَّخِذُ",
            "أَضَلَّ يُضِلُّ"
          ],
          "correct": 0
        },
        {
          "title": "to reject",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَذَّبَ يُكَذِّبُ mean?",
          "options": [
            "to reject",
            "time",
            "to disobey",
            "evil deed"
          ],
          "correct": 0
        },
        {
          "title": "to reject (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَذَّبَ يُكَذِّبُ?",
          "options": [
            "تَكْذِيْبًا",
            "مَشْيًا",
            "مَعْصِيَةً",
            "إِيْتَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to laugh",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to laugh\"?",
          "options": [
            "ضَحِكَ يَضْحَكُ",
            "اِزْدَادَ يَزْدَادُ",
            "تَاجِرٌ",
            "وَعَدَ يَعِدُ"
          ],
          "correct": 0
        },
        {
          "title": "to laugh",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَحِكَ يَضْحَكُ mean?",
          "options": [
            "to laugh",
            "part",
            "show",
            "to write, prescribe"
          ],
          "correct": 0
        },
        {
          "title": "to laugh (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَحِكَ يَضْحَكُ?",
          "options": [
            "ضِحْكًا",
            "إِرَاءَةً",
            "جَمْعًا",
            "رَجَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to clothe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to clothe\"?",
          "options": [
            "كَسَا يَكْسُوْ",
            "كَذَّبَ يُكَذِّبُ",
            "سَجَدَ يَسْجُدُ",
            "حَسَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to clothe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَسَا يَكْسُوْ mean?",
          "options": [
            "to clothe",
            "human being",
            "to understand",
            "to enter"
          ],
          "correct": 0
        },
        {
          "title": "to clothe (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَسَا يَكْسُوْ?",
          "options": [
            "كَسْوًا",
            "جَمْعًا",
            "إِرَاءَةً",
            "تَكْذِيْبًا"
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
            "لَبَنٌ",
            "أَشَدُّ",
            "اَلْبَارِحَةُ"
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
            "to say",
            "bag",
            "door"
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
            "تِلَاوَةً",
            "اِعْتِمَارًا",
            "عِلْمًا"
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
            "أَتَى يَأْتِيْ",
            "طَمِعَ يَطْمَعُ",
            "بَابٌ"
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
            "to envy",
            "to be guided, find the right way",
            "to sit"
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
            "رُجُوْعًا",
            "تَكْذِيْبًا",
            "نِسْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be misled",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be misled\"?",
          "options": [
            "ضَلَّ يَضِلُّ",
            "اِشْتَرَى يَشْتَرِيْ",
            "صِرَاطٌ",
            "سُمْعَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be misled",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَلَّ يَضِلُّ mean?",
          "options": [
            "to be misled",
            "businessman",
            "clear, clear proof",
            "to give to drink"
          ],
          "correct": 0
        },
        {
          "title": "to be misled (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَلَّ يَضِلُّ?",
          "options": [
            "ضَلَالًا",
            "حِفْظًا",
            "رِيَاءً، مُرَاءَاةً",
            "تَكْذِيْبًا"
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
            "خَطَبَ يَخْطُبُ",
            "صَنَعَ يَصْنَعُ",
            "بَابٌ"
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
            "to feed",
            "to hope, desire",
            "to be misled"
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
            "خُطْبَةً",
            "ضَلَالًا",
            "تَرْتِيْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to desire",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to desire\"?",
          "options": [
            "طَمِعَ يَطْمَعُ",
            "سُمْعَةٌ",
            "سَيِّئَةٌ",
            "بَشِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to desire",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَمِعَ يَطْمَعُ mean?",
          "options": [
            "to desire",
            "to understand",
            "to be guided, find the right way",
            "to show off"
          ],
          "correct": 0
        },
        {
          "title": "to desire (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَمِعَ يَطْمَعُ?",
          "options": [
            "طَمَعًا",
            "إِيْتَاءً",
            "إِرَاءَةً",
            "رُكُوْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to fill",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fill\"?",
          "options": [
            "مَلَأَ يَمْلَأُ",
            "شَيْءٌ",
            "أَنْعَمَ يُنْعِمُ",
            "وَهَبَ يَهَبُ"
          ],
          "correct": 0
        },
        {
          "title": "to fill",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَلَأَ يَمْلَأُ mean?",
          "options": [
            "to fill",
            "apple",
            "path",
            "to desire"
          ],
          "correct": 0
        },
        {
          "title": "to fill (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَلَأَ يَمْلَأُ?",
          "options": [
            "مَلْأً",
            "رَغْبَةً، رَغَبًا",
            "إِطْعَامًا",
            "مَعْصِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be just",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be just\"?",
          "options": [
            "عَدَلَ يَعْدِلُ",
            "طَمِعَ يَطْمَعُ",
            "أَرْسَلَ يُرْسِلُ",
            "اِحْتَسَبَ يَحْتَسِبُ"
          ],
          "correct": 0
        },
        {
          "title": "to be just",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَدَلَ يَعْدِلُ mean?",
          "options": [
            "to be just",
            "worse, worst, evil",
            "to spend",
            "bearer of glad tidings"
          ],
          "correct": 0
        },
        {
          "title": "to be just (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَدَلَ يَعْدِلُ?",
          "options": [
            "عَدْلًا",
            "صَلَاةً",
            "اِهْتِدَاءً",
            "إِرْسَالًا"
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
            "عَلِمَ يَعْلَمُ",
            "رَاءَى يُرَائِيْ",
            "بَاعَ يَبِيْعُ"
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
            "to spend",
            "to write, prescribe",
            "yet, until now"
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
            "زِيَادَةً",
            "إِنْعَامًا",
            "إِضْلَالًا"
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
            "أَنْفَقَ يُنْفِقُ",
            "آتَى يُؤْتِيْ",
            "أَكْثَرُ"
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
            "businessman",
            "day",
            "yesterday"
          ],
          "correct": 0
        },
        {
          "title": "to disobey (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَصَى يَعْصِيْ?",
          "options": [
            "مَعْصِيَةً",
            "قَتْلًا",
            "مَشْيًا",
            "اِحْتِسَابًا"
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
            "عَسَلٌ",
            "رَتَّلَ يُرَتِّلُ",
            "ضَرَبَ يَضْرِبُ"
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
            "to write, prescribe",
            "to be guided, find the right way",
            "to increase"
          ],
          "correct": 0
        },
        {
          "title": "to guide (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَدَى يَهْدِيْ?",
          "options": [
            "هِدَايَةً، هُدًى",
            "رُجُوْعًا",
            "إِحْبَابًا، حُبًّا",
            "صَلَاةً"
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
            "شَيْءٌ",
            "سَقَى يَسْقِيْ",
            "صَنَعَ يَصْنَعُ"
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
            "to give",
            "to walk",
            "knowledge"
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
            "إِنْفَاقًا",
            "قَتْلًا",
            "خَوْفًا"
          ],
          "correct": 0
        },
        {
          "title": "to put",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to put\"?",
          "options": [
            "وَضَعَ يَضَعُ",
            "سَاعَةٌ",
            "بَكَى يَبْكِيْ",
            "مِيْزَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to put",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَضَعَ يَضَعُ mean?",
          "options": [
            "to put",
            "to be just",
            "less, least",
            "to perform Umrah"
          ],
          "correct": 0
        },
        {
          "title": "to put (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَضَعَ يَضَعُ?",
          "options": [
            "وَضْعًا",
            "إِتْيَانًا",
            "رِضْوَانًا",
            "رُجُوْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to do, work",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to do, work\"?",
          "options": [
            "عَمِلَ يَعْمَلُ",
            "أَطْعَمَ يُطْعِمُ",
            "سَقَى يَسْقِيْ",
            "أَجْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to do, work",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَمِلَ يَعْمَلُ mean?",
          "options": [
            "to do, work",
            "to hit",
            "stone",
            "to give"
          ],
          "correct": 0
        },
        {
          "title": "to do, work (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَمِلَ يَعْمَلُ?",
          "options": [
            "عَمَلًا",
            "إِتْيَانًا",
            "إِرَاءَةً",
            "مَلْأً"
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
            "سَكَتَ يَسْكُتُ",
            "رَجَا يَرْجُوْ",
            "بَكَى يَبْكِيْ"
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
            "to come out, leave",
            "pound (weight)",
            "litre"
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
            "حِفْظًا",
            "قَوْلًا",
            "طَمَعًا"
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
            "أَرْسَلَ يُرْسِلُ",
            "صَنَعَ يَصْنَعُ",
            "تَرَكَ يَتْرُكُ"
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
            "last night",
            "month",
            "to spend"
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
            "إِتْيَانًا",
            "طَمَعًا",
            "إِضْلَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to give, grant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to give, grant\"?",
          "options": [
            "وَهَبَ يَهَبُ",
            "طَمِعَ يَطْمَعُ",
            "شَيْءٌ",
            "شِرْكٌ"
          ],
          "correct": 0
        },
        {
          "title": "to give, grant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَهَبَ يَهَبُ mean?",
          "options": [
            "to give, grant",
            "to misguide",
            "to know",
            "to respect, honour"
          ],
          "correct": 0
        },
        {
          "title": "to give, grant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَهَبَ يَهَبُ?",
          "options": [
            "هِبَةً",
            "إِفْلَاحًا",
            "إِيْتَاءً",
            "سُجُوْدًا"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

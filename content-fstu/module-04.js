// Module 04 — The Nominal Sentence (From the Start, Unit 2, Section 1, pp. 61-81)
//
// l1-l3 converted from unit2-lesson1..3.js; l4-l5 added in the same pass as
// module-05 (rest of Unit 2). Same conversion pattern throughout Unit 2 (see
// content-fstu/module-01.js for the base Unit 1 pattern), plus:
// exercise.items authored as MCQ with distractors (source type was
// "transform"/"classify", free-form or shared-option answers);
// lesson.tarkeeb[] becomes bank[] items with kind:'tarkeeb' and the
// cells[]/rows[] diagram schema (see flattenTarkeebSlots in content/index.js);
// inline "tarkeeb" teaching blocks become concept lines with a
// .tarkeebDiagram field (read-only worked example); vocab[] becomes 3
// bank[] items per word (en-ar/ar-en/form) via vocabType tagging.
export default {
  "id": "f-jumla-ismiyya",
  "title": "الجملة الاسمية",
  "heading": "اَلْوَحْدَةُ الثَّانِيَةُ",
  "blurb": "اَلْجُمْلَةُ الاِسْمِيَّةُ: الْمُبْتَدَأُ and الْخَبَرُ, and the أَفْعَال نَاقِصَة that precede them.",
  "lessons": [
    {
      "id": "l1",
      "title": "الجملة الاسمية",
      "subtitle": "Section 1: اَلْجُمْلَةُ الْاِسْمِيَّةُ",
      "concepts": [
        {
          "heading": "Introduction: Sentences",
          "lines": [
            {
              "html": "In Unit 1, nouns, verbs, and particles were discussed. In this unit, we learn how to put the different types of words together to form sentences. In Arabic, a sentence is called a جُمْلَةٌ (plural جُمَلٌ). There are two types of sentences: 1. اَلْجُمْلَةُ الْاِسْمِيَّةُ, 2. اَلْجُمْلَةُ الْفِعْلِيَّةُ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "A جُمْلَةٌ (sentence) in Arabic is divided into two types. What are they?",
            "kind": "mcq",
            "options": [
              "اَلْجُمْلَةُ الْاِسْمِيَّةُ and اَلْجُمْلَةُ الْفِعْلِيَّةُ",
              "اَلْمُفْرَدُ and اَلْمُرَكَّبُ",
              "اَلاِسْمُ and اَلْفِعْلُ",
              "اَلْمَاضِيْ and اَلْمُضَارِعُ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اَلْجُمْلَةُ الْاِسْمِيَّةُ",
          "lines": [
            {
              "html": "اَلْجُمْلَةُ الْاِسْمِيَّةُ is a sentence which is made up of two parts or slots: 1. مُبْتَدَأٌ: the subject, i.e. the thing you are talking about. 2. خَبَرٌ: the information regarding the مُبْتَدَأٌ.",
              "list": false
            },
            {
              "html": "اَلرَّجُلُ صَادِقٌ — The man is truthful. — 'the man' is the مُبْتَدَأٌ, 'truthful' is the خَبَرٌ",
              "list": true,
              "bullet": true
            },
            {
              "html": "Rules of مُبْتَدَأٌ and خَبَرٌ: 1. The مُبْتَدَأٌ is given first, followed by the خَبَرٌ. 2. The مُبْتَدَأٌ must be a noun in the مَرْفُوْعٌ state. 3. The خَبَرٌ must match the مُبْتَدَأٌ in Irab, Number and Gender (ING), but not Definite and Indefinite; the مُبْتَدَأٌ is definite and the خَبَرٌ is indefinite.",
              "list": false
            },
            {
              "table": {
                "title": "Agreement of the خَبَرٌ with the مُبْتَدَأٌ",
                "headers": [
                  "",
                  "مُفْرَدٌ",
                  "مُثَنًّى",
                  "جَمْعٌ"
                ],
                "rows": [
                  [
                    "مُذَكَّرٌ",
                    "اَلرَّجُلُ صَادِقٌ",
                    "اَلرَّجُلَانِ صَادِقَانِ",
                    "اَلرِّجَالُ صَادِقُوْنَ"
                  ],
                  [
                    "مُؤَنَّثٌ",
                    "اَلْأُخْتُ صَادِقَةٌ",
                    "اَلْأُخْتَانِ صَادِقَتَانِ",
                    "اَلْأَخَوَاتُ صَادِقَاتٌ"
                  ]
                ]
              }
            },
            {
              "html": "Translation: in Arabic there is no word for 'is' or 'are'; however, they must be added to the English translation: The man IS truthful. The men ARE truthful.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "اَلْبِنْتَانِ …",
            "kind": "mcq",
            "options": [
              "صَادِقَتَانِ",
              "صَادِقَةٌ",
              "صَادِقَانِ",
              "صَادِقَاتٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Grammatical Analysis — تَرْكِيْبٌ",
          "lines": [
            {
              "html": "In Arabic grammar, we analyse sentences by breaking them down word by word to understand the meaning and function of each word. This is called تَرْكِيْبٌ (parsing). The text is written in black ink and the label of the main parts of the sentence in blue above it.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَلنَّبِيَّانِ صَادِقَانِ",
                "translation": "The two prophets are truthful.",
                "cells": [
                  "اَلنَّبِيَّانِ",
                  "صَادِقَانِ"
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
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In the تركيب diagram for اَلنَّبِيَّانِ صَادِقَانِ, where are the grammatical role labels (مُبْتَدَأٌ، خَبَرٌ) written?",
            "kind": "mcq",
            "options": [
              "Above the words, in a different colour",
              "Below the words, in the same ink as the text",
              "They aren't written, only memorised",
              "In brackets after each word"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Sentence: جُمْلَةٌ — جُمْلَةٌ اسْمِيَّةٌ",
        "rows": [
          {
            "label": "مُبْتَدَأٌ",
            "arabic": "Subject",
            "meaning": "مَعْرِفَةٌ، مَرْفُوْعٌ"
          },
          {
            "label": "خَبَرٌ",
            "arabic": "Information",
            "meaning": "نَكِرَةٌ، مَرْفُوْعٌ"
          },
          {
            "label": "Agreement",
            "arabic": "ING",
            "meaning": "Agree in irab, number, and gender — not in definiteness"
          }
        ]
      },
      "quiz": [
        {
          "q": "What are the two parts of a جُمْلَةٌ اسْمِيَّةٌ?",
          "options": [
            "فِعْلٌ and فَاعِلٌ",
            "مُبْتَدَأٌ and خَبَرٌ",
            "اِسْمٌ and حَرْفٌ",
            "مُبْتَدَأٌ and فَاعِلٌ"
          ],
          "correct": 1,
          "explanation": "The مُبْتَدَأٌ (subject) comes first, followed by the خَبَرٌ (information about it)."
        },
        {
          "q": "In which state must the مُبْتَدَأٌ be?",
          "options": [
            "مَنْصُوْبٌ",
            "مَجْرُوْرٌ",
            "مَرْفُوْعٌ",
            "مَجْزُوْمٌ"
          ],
          "correct": 2,
          "explanation": "Both the مُبْتَدَأٌ and the خَبَرٌ of a plain جملة اسمية are مَرْفُوْعٌ."
        },
        {
          "q": "In what must the خَبَرٌ match the مُبْتَدَأٌ?",
          "options": [
            "Irab, Number and Gender — but NOT definiteness",
            "Definiteness only",
            "Irab, Number, Gender and Definiteness",
            "Gender only"
          ],
          "correct": 0,
          "explanation": "ING: Irab, Number, Gender. The مُبْتَدَأٌ is definite while the خَبَرٌ is indefinite."
        },
        {
          "q": "Why must 'is/are' be added when translating a جملة اسمية?",
          "options": [
            "Because كَانَ is hidden in every sentence",
            "Because Arabic has no word for 'is' or 'are'",
            "Because the خَبَرٌ is a verb",
            "It is optional"
          ],
          "correct": 1,
          "explanation": "اَلرَّجُلُ صَادِقٌ is literally 'the man truthful' — English requires 'is'."
        },
        {
          "q": "What is تَرْكِيْبٌ?",
          "options": [
            "Translating a sentence into English",
            "Breaking a sentence down word by word to understand each word's function (parsing)",
            "Adding harakāt to a sentence",
            "Making a sentence negative"
          ],
          "correct": 1,
          "explanation": "Tarkeeb = grammatical analysis: labelling each word's role, written above the words."
        }
      ],
      "bank": [
        {
          "title": "اَلنَّبِيُّ صَادِقٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 1)",
          "sentence": "اَلنَّبِيُّ صَادِقٌ",
          "translation": "The prophet is truthful.",
          "cells": [
            "اَلنَّبِيُّ",
            "صَادِقٌ"
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
          "title": "اَلنَّبِيَّانِ صَادِقَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 1)",
          "sentence": "اَلنَّبِيَّانِ صَادِقَانِ",
          "translation": "The two prophets are truthful.",
          "cells": [
            "اَلنَّبِيَّانِ",
            "صَادِقَانِ"
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
          "title": "اَلْأُمُّ صَائِمَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 1)",
          "sentence": "اَلْأُمُّ صَائِمَةٌ",
          "translation": "The mother is fasting.",
          "cells": [
            "اَلْأُمُّ",
            "صَائِمَةٌ"
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
          "title": "اَللهُ رَحِيْمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 1)",
          "sentence": "اَللهُ رَحِيْمٌ",
          "translation": "Allah is merciful.",
          "cells": [
            "اَللهُ",
            "رَحِيْمٌ"
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
          "title": "اَلْقَلَمُ كَبِيْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 1)",
          "sentence": "اَلْقَلَمُ كَبِيْرٌ",
          "translation": "The pen is big.",
          "cells": [
            "اَلْقَلَمُ",
            "كَبِيْرٌ"
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
          "title": "اَلرِّجَالُ صَائِمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 1)",
          "sentence": "اَلرِّجَالُ صَائِمُوْنَ",
          "translation": "The men are fasting.",
          "cells": [
            "اَلرِّجَالُ",
            "صَائِمُوْنَ"
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
          "title": "اَلْمُعَلِّمُوْنَ مُخْلِصُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 1)",
          "sentence": "اَلْمُعَلِّمُوْنَ مُخْلِصُوْنَ",
          "translation": "The teachers are sincere.",
          "cells": [
            "اَلْمُعَلِّمُوْنَ",
            "مُخْلِصُوْنَ"
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
          "title": "اَلْمَرْأَتَانِ كَاذِبَتَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 1)",
          "sentence": "اَلْمَرْأَتَانِ كَاذِبَتَانِ",
          "translation": "The two women are lying.",
          "cells": [
            "اَلْمَرْأَتَانِ",
            "كَاذِبَتَانِ"
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
          "title": "Book Exercise 1 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "اَلْأَنْبِيَاءُ صَادِقُوْنَ translates as…",
          "options": [
            "The prophets are truthful",
            "The two prophets are truthful",
            "The prophet is truthful",
            "The truthful prophets"
          ],
          "correct": 0,
          "explanation": "Plural مبتدأ with plural خبر: 'The prophets are truthful.'"
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In اَلنَّبِيُّ صَادِقٌ, the word صَادِقٌ is…",
          "options": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "خَبَرٌ",
            "مَفْعُوْلٌ بِهِ"
          ],
          "correct": 2,
          "explanation": "It is the information given about the مُبْتَدَأٌ (اَلنَّبِيُّ) — the خَبَرٌ."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "Why does اَلْمَاءُ in اَلْمَاءُ بَارِدٌ end in a ضَمَّةٌ?",
          "options": [
            "It is a مفعول به",
            "The مُبْتَدَأٌ must be a noun in the مَرْفُوْعٌ state",
            "Every word with ال takes a ضمة",
            "It is مَنْصُوْبٌ"
          ],
          "correct": 1,
          "explanation": "Rule 2 of the جملة اسمية: the مبتدأ is مَرْفُوْعٌ — and the خبر (بَارِدٌ) matches it in irab."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "Which خَبَرٌ correctly completes اَلْبَنَاتُ …?",
          "options": [
            "صَادِقُوْنَ",
            "صَادِقَةٌ",
            "صَادِقَانِ",
            "صَادِقَاتٌ"
          ],
          "correct": 3,
          "explanation": "اَلْبَنَاتُ is a feminine plural, so the خبر must agree in number and gender: صَادِقَاتٌ."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "Complete with the correct form of (كَبِيْرٌ): اَلنَّجْمَانِ …",
          "options": [
            "كَبِيْرٌ",
            "كَبِيْرَانِ",
            "كَبِيْرُوْنَ",
            "كَبِيْرَتَانِ"
          ],
          "correct": 1,
          "explanation": "Masculine dual مبتدأ needs a masculine dual خبر: كَبِيْرَانِ."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "Which sentence BREAKS the agreement rules of مُبْتَدَأٌ and خَبَرٌ?",
          "options": [
            "اَلرِّجَالُ صَائِمُوْنَ",
            "اَلْمَرْأَتَانِ كَاذِبَتَانِ",
            "اَلرَّجُلُ صَادِقَةٌ",
            "اَللهُ رَحِيْمٌ"
          ],
          "correct": 2,
          "explanation": "اَلرَّجُلُ is masculine but صَادِقَةٌ is feminine — the خبر must match the مبتدأ in gender."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In اَلْأُمُّ صَائِمَةٌ, which word is definite and which is indefinite?",
          "options": [
            "اَلْأُمُّ is definite (the مبتدأ); صَائِمَةٌ is indefinite (the خبر)",
            "Both are definite",
            "اَلْأُمُّ is indefinite; صَائِمَةٌ is definite",
            "Both are indefinite"
          ],
          "correct": 0,
          "explanation": "The مبتدأ is مَعْرِفَةٌ and the خبر is نَكِرَةٌ — they do NOT match in definiteness."
        },
        {
          "title": "old",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"old\"?",
          "options": [
            "قَدِيْمٌ",
            "بَيْتٌ",
            "صَغِيْرٌ",
            "ضَعِيْفٌ"
          ],
          "correct": 0
        },
        {
          "title": "old",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَدِيْمٌ mean?",
          "options": [
            "old",
            "cold",
            "mosque",
            "weak"
          ],
          "correct": 0
        },
        {
          "title": "old (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَدِيْمٌ?",
          "options": [
            "قُدَمَاءُ",
            "ضُعَفَاءُ",
            "مَسَاجِدُ",
            "صِغَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "cold",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"cold\"?",
          "options": [
            "بَارِدٌ",
            "قَوِيٌّ",
            "صَغِيْرٌ",
            "جَدِيْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "cold",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَارِدٌ mean?",
          "options": [
            "cold",
            "school",
            "strong",
            "weak"
          ],
          "correct": 0
        },
        {
          "title": "strong",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"strong\"?",
          "options": [
            "قَوِيٌّ",
            "جَدِيْدٌ",
            "بَيْتٌ",
            "مَسْجِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "strong",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَوِيٌّ mean?",
          "options": [
            "strong",
            "cold",
            "old",
            "house"
          ],
          "correct": 0
        },
        {
          "title": "strong (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَوِيٌّ?",
          "options": [
            "أَقْوِيَاءُ",
            "قُدَمَاءُ",
            "جُدُدٌ",
            "بُيُوْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "house",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"house\"?",
          "options": [
            "بَيْتٌ",
            "بَارِدٌ",
            "كَبِيْرٌ",
            "مَسْجِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "house",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَيْتٌ mean?",
          "options": [
            "house",
            "big",
            "old",
            "cold"
          ],
          "correct": 0
        },
        {
          "title": "house (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَيْتٌ?",
          "options": [
            "بُيُوْتٌ",
            "قُدَمَاءُ",
            "ضُعَفَاءُ",
            "مَسَاجِدُ"
          ],
          "correct": 0
        },
        {
          "title": "big",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"big\"?",
          "options": [
            "كَبِيْرٌ",
            "جَدِيْدٌ",
            "قَدِيْمٌ",
            "بَيْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "big",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَبِيْرٌ mean?",
          "options": [
            "big",
            "old",
            "weak",
            "house"
          ],
          "correct": 0
        },
        {
          "title": "big (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of كَبِيْرٌ?",
          "options": [
            "كِبَارٌ",
            "بُيُوْتٌ",
            "قُدَمَاءُ",
            "ضُعَفَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "new",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"new\"?",
          "options": [
            "جَدِيْدٌ",
            "صَغِيْرٌ",
            "كَبِيْرٌ",
            "بَارِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "new",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَدِيْدٌ mean?",
          "options": [
            "new",
            "weak",
            "old",
            "school"
          ],
          "correct": 0
        },
        {
          "title": "new (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَدِيْدٌ?",
          "options": [
            "جُدُدٌ",
            "صِغَارٌ",
            "ضُعَفَاءُ",
            "أَقْوِيَاءُ"
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
            "صَغِيْرٌ",
            "قَوِيٌّ",
            "قَدِيْمٌ"
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
            "old",
            "cold",
            "house"
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
            "بُيُوْتٌ",
            "كِبَارٌ",
            "جُدُدٌ"
          ],
          "correct": 0
        },
        {
          "title": "small",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"small\"?",
          "options": [
            "صَغِيْرٌ",
            "مَدْرَسَةٌ",
            "بَارِدٌ",
            "مَسْجِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "small",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَغِيْرٌ mean?",
          "options": [
            "small",
            "strong",
            "mosque",
            "new"
          ],
          "correct": 0
        },
        {
          "title": "small (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَغِيْرٌ?",
          "options": [
            "صِغَارٌ",
            "قُدَمَاءُ",
            "مَسَاجِدُ",
            "كِبَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "mosque",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"mosque\"?",
          "options": [
            "مَسْجِدٌ",
            "قَوِيٌّ",
            "قَدِيْمٌ",
            "مَدْرَسَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "mosque",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسْجِدٌ mean?",
          "options": [
            "mosque",
            "cold",
            "school",
            "old"
          ],
          "correct": 0
        },
        {
          "title": "mosque (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَسْجِدٌ?",
          "options": [
            "مَسَاجِدُ",
            "بُيُوْتٌ",
            "قُدَمَاءُ",
            "صِغَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "weak",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"weak\"?",
          "options": [
            "ضَعِيْفٌ",
            "قَوِيٌّ",
            "كَبِيْرٌ",
            "جَدِيْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "weak",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَعِيْفٌ mean?",
          "options": [
            "weak",
            "big",
            "school",
            "old"
          ],
          "correct": 0
        },
        {
          "title": "weak (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ضَعِيْفٌ?",
          "options": [
            "ضُعَفَاءُ",
            "بُيُوْتٌ",
            "أَقْوِيَاءُ",
            "مَدَارِسُ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "الفعل الناقص",
      "subtitle": "Section 1: اَلْجُمْلَةُ الْاِسْمِيَّةُ",
      "concepts": [
        {
          "heading": "What is a فِعْلٌ نَاقِصٌ?",
          "lines": [
            {
              "html": "Additional words can be added to a جُمْلَةٌ اسْمِيَّةٌ to create specific meanings. A فِعْلٌ نَاقِصٌ is an auxiliary verb which precedes a جُمْلَةٌ اسْمِيَّةٌ. Two of the أَفْعَالٌ نَاقِصَةٌ are: كَانَ and لَيْسَ.",
              "list": false
            },
            {
              "html": "Grammatical changes when a فِعْلٌ نَاقِصٌ precedes a جملة اسمية: 1. The مُبْتَدَأٌ is called the اِسْمٌ of that فعل ناقص and remains مَرْفُوْعٌ. 2. The خَبَرٌ is called the خَبَرٌ of that فعل ناقص and becomes مَنْصُوْبٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When a فِعْلٌ نَاقِصٌ precedes a جملة اسمية, what happens to the خَبَرٌ؟",
            "kind": "mcq",
            "options": [
              "It is renamed خَبَرُ [the فعل ناقص] and becomes مَنْصُوْبٌ",
              "It stays مَرْفُوْعٌ, unchanged",
              "It becomes the فَاعِلٌ",
              "It is dropped from the sentence"
            ],
            "correct": 0
          }
        },
        {
          "heading": "كَانَ and مَا كَانَ",
          "lines": [
            {
              "html": "كَانَ changes the جملة اسمية to the past tense: 'was'.",
              "list": false
            },
            {
              "html": "زَيْدٌ مَرِيْضٌ — Zaid is ill.",
              "list": true,
              "bullet": true
            },
            {
              "html": "كَانَ زَيْدٌ مَرِيْضًا — Zaid was ill.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The tarkeeb before and after adding كَانَ:",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "زَيْدٌ مَرِيْضٌ",
                "translation": "Zaid is ill.",
                "cells": [
                  "زَيْدٌ",
                  "مَرِيْضٌ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "tarkeebDiagram": {
                "sentence": "كَانَ زَيْدٌ مَرِيْضًا",
                "translation": "Zaid was ill.",
                "cells": [
                  "كَانَ",
                  "زَيْدٌ",
                  "مَرِيْضًا"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The negative particle مَا can be added to كَانَ to give a negative past tense meaning: 'was not'. In tarkeeb, this مَا is labelled as حَرْفُ نَفْيٍ. This, and all other حُرُوْفٌ which do not become one of the main parts of a sentence, should be labelled in black ink.",
              "list": false
            },
            {
              "html": "مَا كَانَ الرَّجُلُ مَرِيْضًا — The man was not ill.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَا كَانَ الرَّجُلُ مَرِيْضًا",
                "translation": "The man was not ill.",
                "cells": [
                  "مَا",
                  "كَانَ",
                  "الرَّجُلُ",
                  "مَرِيْضًا"
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
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "مَا كَانَ زَيْدٌ مَرِيْضًا means…",
            "kind": "mcq",
            "options": [
              "Zaid was not ill (past negative)",
              "Zaid was ill (past)",
              "Zaid will not be ill (future negative)",
              "Zaid is not ill (present negative)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "يَكُوْنُ and لَا يَكُوْنُ",
          "lines": [
            {
              "html": "يَكُوْنُ is the مُضَارِعٌ of كَانَ. It will also have an اِسْمٌ and خَبَرٌ and will change the جملة اسمية to the future tense: 'will be'.",
              "list": false
            },
            {
              "html": "يَكُوْنُ زَيْدٌ قَوِيًّا — Zaid will be strong.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "يَكُوْنُ زَيْدٌ قَوِيًّا",
                "translation": "Zaid will be strong.",
                "cells": [
                  "يَكُوْنُ",
                  "زَيْدٌ",
                  "قَوِيًّا"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The negative of this is made by adding a لَا before it: 'will not be'.",
              "list": false
            },
            {
              "html": "لَا يَكُوْنُ زَيْدٌ مَرِيْضًا — Zaid will not be ill.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَا يَكُوْنُ زَيْدٌ مَرِيْضًا",
                "translation": "Zaid will not be ill.",
                "cells": [
                  "لَا",
                  "يَكُوْنُ",
                  "زَيْدٌ",
                  "مَرِيْضًا"
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
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "لَا يَكُوْنُ زَيْدٌ مَرِيْضًا means…",
            "kind": "mcq",
            "options": [
              "Zaid will not be ill (future negative)",
              "Zaid will be ill (future)",
              "Zaid was not ill (past negative)",
              "Zaid is not ill (present negative)"
            ],
            "correct": 0
          }
        },
        {
          "heading": "لَيْسَ",
          "lines": [
            {
              "html": "لَيْسَ is another فعل ناقص. It changes the meaning of the جملة اسمية into the present negative: 'not'. لَيْسَ only occurs as الْفِعْلُ الْمَاضِيْ, not الْمُضَارِعُ.",
              "list": false
            },
            {
              "html": "لَيْسَ زَيْدٌ مَرِيْضًا — Zaid is not ill.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَيْسَ زَيْدٌ مَرِيْضًا",
                "translation": "Zaid is not ill.",
                "cells": [
                  "لَيْسَ",
                  "زَيْدٌ",
                  "مَرِيْضًا"
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
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "لَيْسَ زَيْدٌ مَرِيْضًا means…",
            "kind": "mcq",
            "options": [
              "Zaid is not ill (present negative)",
              "Zaid is ill (present)",
              "Zaid was not ill (past negative)",
              "Zaid will not be ill (future negative)"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "جملة اسمية with a فِعْلٌ نَاقِصٌ",
        "rows": [
          {
            "label": "كَانَ",
            "arabic": "was",
            "meaning": "مَا كَانَ = was not"
          },
          {
            "label": "يَكُوْنُ",
            "arabic": "will be",
            "meaning": "لَا يَكُوْنُ = will not be"
          },
          {
            "label": "لَيْسَ",
            "arabic": "is/are not",
            "meaning": "only occurs as الماضي"
          },
          {
            "label": "اِسْمُ كَانَ / لَيْسَ",
            "arabic": "subject",
            "meaning": "مَعْرِفَةٌ، مَرْفُوْعٌ — agree in number and gender"
          },
          {
            "label": "خَبَرُ كَانَ / لَيْسَ",
            "arabic": "information",
            "meaning": "نَكِرَةٌ، مَنْصُوْبٌ"
          }
        ]
      },
      "quiz": [
        {
          "q": "What happens to the مُبْتَدَأٌ and خَبَرٌ when a فعل ناقص precedes the sentence?",
          "options": [
            "Both become مَنْصُوْبٌ",
            "The مبتدأ becomes اِسْمُ كَانَ and stays مَرْفُوْعٌ; the خبر becomes خَبَرُ كَانَ and becomes مَنْصُوْبٌ",
            "The مبتدأ becomes مَنْصُوْبٌ and the خبر stays مَرْفُوْعٌ",
            "Nothing changes grammatically"
          ],
          "correct": 1,
          "explanation": "كَانَ زَيْدٌ مَرِيْضًا — note the فَتْحَةٌ on the خبر."
        },
        {
          "q": "What tense does كَانَ give the جملة اسمية?",
          "options": [
            "Present",
            "Future",
            "Past — 'was'",
            "Imperative"
          ],
          "correct": 2,
          "explanation": "كَانَ زَيْدٌ مَرِيْضًا = Zaid was ill."
        },
        {
          "q": "How is 'will not be' expressed?",
          "options": [
            "مَا كَانَ",
            "لَا يَكُوْنُ",
            "لَيْسَ",
            "لَمْ يَكُنْ"
          ],
          "correct": 1,
          "explanation": "لَا + يَكُوْنُ = will not be. (مَا كَانَ = was not; لَيْسَ = is not.)"
        },
        {
          "q": "Which is true of لَيْسَ?",
          "options": [
            "It gives a future negative and has a مضارع form",
            "It gives a present negative ('is/are not') and only occurs as الماضي",
            "It gives a past negative",
            "It is a حرف, not a verb"
          ],
          "correct": 1,
          "explanation": "لَيْسَ زَيْدٌ مَرِيْضًا = Zaid is not ill — despite its ماضي form, its meaning is present."
        },
        {
          "q": "In tarkeeb, how is the مَا of مَا كَانَ labelled?",
          "options": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ — in black ink, as it is not a main part of the sentence",
            "اِسْمُ كَانَ",
            "مُبْتَدَأٌ"
          ],
          "correct": 1,
          "explanation": "Particles that are not main parts of the sentence are labelled in black ink."
        }
      ],
      "bank": [
        {
          "title": "كَانَ الْبَيْتُ قَدِيْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "كَانَ الْبَيْتُ قَدِيْمًا",
          "translation": "The house was old.",
          "cells": [
            "كَانَ",
            "الْبَيْتُ",
            "قَدِيْمًا"
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
          "title": "كَانَ الرَّجُلُ مَرِيْضًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "كَانَ الرَّجُلُ مَرِيْضًا",
          "translation": "The man was ill.",
          "cells": [
            "كَانَ",
            "الرَّجُلُ",
            "مَرِيْضًا"
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
          "title": "مَا كَانَ الْمَاءُ بَارِدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 2)",
          "sentence": "مَا كَانَ الْمَاءُ بَارِدًا",
          "translation": "The water was not cold.",
          "cells": [
            "مَا",
            "كَانَ",
            "الْمَاءُ",
            "بَارِدًا"
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
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ"
          ]
        },
        {
          "title": "مَا كَانَ النَّاسُ أَقْوِيَاءَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 2)",
          "sentence": "مَا كَانَ النَّاسُ أَقْوِيَاءَ",
          "translation": "The people were not strong.",
          "cells": [
            "مَا",
            "كَانَ",
            "النَّاسُ",
            "أَقْوِيَاءَ"
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
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ"
          ]
        },
        {
          "title": "يَكُوْنُ الْمَاءُ بَارِدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 2)",
          "sentence": "يَكُوْنُ الْمَاءُ بَارِدًا",
          "translation": "The water will be cold.",
          "cells": [
            "يَكُوْنُ",
            "الْمَاءُ",
            "بَارِدًا"
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
          "title": "لَا يَكُوْنُ الطَّالِبُ مُجْتَهِدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 2)",
          "sentence": "لَا يَكُوْنُ الطَّالِبُ مُجْتَهِدًا",
          "translation": "The student will not be hardworking.",
          "cells": [
            "لَا",
            "يَكُوْنُ",
            "الطَّالِبُ",
            "مُجْتَهِدًا"
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
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ"
          ]
        },
        {
          "title": "لَيْسَ الْإِمَامُ مَرِيْضًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 2)",
          "sentence": "لَيْسَ الْإِمَامُ مَرِيْضًا",
          "translation": "The imam is not ill.",
          "cells": [
            "لَيْسَ",
            "الْإِمَامُ",
            "مَرِيْضًا"
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
          "title": "لَيْسَ الْقَوْمُ كَافِرِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 2)",
          "sentence": "لَيْسَ الْقَوْمُ كَافِرِيْنَ",
          "translation": "The nation is not disbelieving.",
          "cells": [
            "لَيْسَ",
            "الْقَوْمُ",
            "كَافِرِيْنَ"
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
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "كَانَ الْمَاءُ بَارِدًا translates as…",
          "options": [
            "The water is cold",
            "The water was cold",
            "The water will be cold",
            "The water is not cold"
          ],
          "correct": 1,
          "explanation": "كَانَ = was."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In كَانَ الْبَيْتُ قَدِيْمًا, the word قَدِيْمًا is…",
          "options": [
            "خَبَرُ كَانَ",
            "خَبَرٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ"
          ],
          "correct": 0,
          "explanation": "After the فعل ناقص, the خبر is called خَبَرُ كَانَ and becomes مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Why does مَرِيْضًا in كَانَ الرَّجُلُ مَرِيْضًا end in a فَتْحَةٌ?",
          "options": [
            "It is a مفعول به",
            "Every word after الرجل takes a فتحة",
            "The خبر of a فعل ناقص becomes مَنْصُوْبٌ",
            "It is مَجْرُوْرٌ"
          ],
          "correct": 2,
          "explanation": "كَانَ keeps its اسم مَرْفُوْعٌ but makes its خبر مَنْصُوْبٌ: مَرِيْضًا."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Change to the past tense: اَلْمَسْجِدُ كَبِيْرٌ",
          "options": [
            "كَانَ الْمَسْجِدُ كَبِيْرًا",
            "كَانَ الْمَسْجِدُ كَبِيْرٌ",
            "يَكُوْنُ الْمَسْجِدُ كَبِيْرًا",
            "لَيْسَ الْمَسْجِدُ كَبِيْرًا"
          ],
          "correct": 0,
          "explanation": "Add كَانَ and make the خبر مَنْصُوْبٌ: كَبِيْرًا."
        },
        {
          "title": "Book Exercise 8 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Make negative using لَيْسَ: اَلْقَمَرُ قَرِيْبٌ",
          "options": [
            "لَيْسَ الْقَمَرُ قَرِيْبٌ",
            "لَيْسَ الْقَمَرُ قَرِيْبًا",
            "مَا كَانَ الْقَمَرُ قَرِيْبًا",
            "لَا يَكُوْنُ الْقَمَرُ قَرِيْبًا"
          ],
          "correct": 1,
          "explanation": "لَيْسَ gives a present negative and makes its خبر مَنْصُوْبٌ: قَرِيْبًا."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Change الْعَذَابُ شَدِيْدٌ into the future tense:",
          "options": [
            "كَانَ الْعَذَابُ شَدِيْدًا",
            "الْعَذَابُ يَكُوْنُ شَدِيْدٌ",
            "لَيْسَ الْعَذَابُ شَدِيْدًا",
            "يَكُوْنُ الْعَذَابُ شَدِيْدًا"
          ],
          "correct": 3,
          "explanation": "يَكُوْنُ + خبر منصوب = 'The punishment will be severe.'"
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In مَا كَانَ الْمَاءُ بَارِدًا, what is مَا labelled as in tarkeeb?",
          "options": [
            "مَا الْمُشَبَّهَةُ بِلَيْسَ",
            "حَرْفُ حَصْرٍ",
            "حَرْفُ نَفْيٍ",
            "حَرْفُ تَحْقِيْقٍ"
          ],
          "correct": 2,
          "explanation": "The مَا before كَانَ is a negative particle (حَرْفُ نَفْيٍ, labelled in black ink): 'was not'."
        },
        {
          "title": "punishment",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"punishment\"?",
          "options": [
            "عَذَابٌ",
            "مُتْعَبٌ",
            "حُلْوٌ",
            "شَدِيْدٌ"
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
            "Jew",
            "tasty",
            "healthy, sound, intact"
          ],
          "correct": 0
        },
        {
          "title": "short",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"short\"?",
          "options": [
            "قَصِيْرٌ",
            "صَدِيْقٌ",
            "خَلِيْلٌ",
            "شَدِيْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "short",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَصِيْرٌ mean?",
          "options": [
            "short",
            "tired",
            "long, tall",
            "enemy"
          ],
          "correct": 0
        },
        {
          "title": "short (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَصِيْرٌ?",
          "options": [
            "قِصَارٌ",
            "مَرْضَى",
            "آلِهَةٌ",
            "أَصْدِقَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "lazy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"lazy\"?",
          "options": [
            "كَسْلَانُ",
            "يَهُوْدِيٌّ",
            "عَدُوٌّ",
            "نَشِيْطٌ"
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
            "healthy, sound, intact",
            "Christian",
            "idol"
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
            "تَمَرَاتٌ",
            "أَصْدِقَاءُ",
            "يَهُوْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "tasty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tasty\"?",
          "options": [
            "لَذِيْذٌ",
            "قَصِيْرٌ",
            "نَشِيْطٌ",
            "عَذَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "tasty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَذِيْذٌ mean?",
          "options": [
            "tasty",
            "Christian",
            "punishment",
            "lazy"
          ],
          "correct": 0
        },
        {
          "title": "tired",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"tired\"?",
          "options": [
            "مُتْعَبٌ",
            "يَسِيْرٌ",
            "لَذِيْذٌ",
            "مَرِيْضٌ"
          ],
          "correct": 0
        },
        {
          "title": "tired",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُتْعَبٌ mean?",
          "options": [
            "tired",
            "far",
            "easy",
            "long, tall"
          ],
          "correct": 0
        },
        {
          "title": "tired (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُتْعَبٌ?",
          "options": [
            "مُتْعَبُوْنَ",
            "تَمَرَاتٌ",
            "شِدَادٌ",
            "نَصَارَى"
          ],
          "correct": 0
        },
        {
          "title": "sick",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sick\"?",
          "options": [
            "مَرِيْضٌ",
            "شَدِيْدٌ",
            "سَالِمٌ",
            "حُلْوٌ"
          ],
          "correct": 0
        },
        {
          "title": "sick",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَرِيْضٌ mean?",
          "options": [
            "sick",
            "tired",
            "god, deity",
            "short"
          ],
          "correct": 0
        },
        {
          "title": "sick (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَرِيْضٌ?",
          "options": [
            "مَرْضَى",
            "مُتْعَبُوْنَ",
            "نُشَطَاءُ",
            "آلِهَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "active, energetic",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"active, energetic\"?",
          "options": [
            "نَشِيْطٌ",
            "شَدِيْدٌ",
            "إِلٰهٌ",
            "سَالِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "active, energetic",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَشِيْطٌ mean?",
          "options": [
            "active, energetic",
            "Jew",
            "healthy, sound, intact",
            "Christian"
          ],
          "correct": 0
        },
        {
          "title": "active, energetic (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَشِيْطٌ?",
          "options": [
            "نُشَطَاءُ",
            "مَرْضَى",
            "مُتْعَبُوْنَ",
            "بُعَدَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "easy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"easy\"?",
          "options": [
            "يَسِيْرٌ",
            "نَصْرَانِيٌّ",
            "عَدُوٌّ",
            "عَذَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "easy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَسِيْرٌ mean?",
          "options": [
            "easy",
            "close",
            "sick",
            "long, tall"
          ],
          "correct": 0
        },
        {
          "title": "date",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"date\"?",
          "options": [
            "تَمْرَةٌ",
            "شَدِيْدٌ",
            "مُتْعَبٌ",
            "مَرِيْضٌ"
          ],
          "correct": 0
        },
        {
          "title": "date",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَمْرَةٌ mean?",
          "options": [
            "date",
            "close",
            "sweet",
            "tasty"
          ],
          "correct": 0
        },
        {
          "title": "date (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of تَمْرَةٌ?",
          "options": [
            "تَمَرَاتٌ",
            "شِدَادٌ",
            "يَهُوْدٌ",
            "كُسَالَى"
          ],
          "correct": 0
        },
        {
          "title": "sweet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sweet\"?",
          "options": [
            "حُلْوٌ",
            "يَهُوْدِيٌّ",
            "مُتْعَبٌ",
            "عَذَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "sweet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حُلْوٌ mean?",
          "options": [
            "sweet",
            "tasty",
            "tired",
            "Jew"
          ],
          "correct": 0
        },
        {
          "title": "friend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"friend\"?",
          "options": [
            "خَلِيْلٌ",
            "يَهُوْدِيٌّ",
            "عَدُوٌّ",
            "عَذَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "friend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَلِيْلٌ mean?",
          "options": [
            "friend",
            "Jew",
            "sweet",
            "date"
          ],
          "correct": 0
        },
        {
          "title": "friend (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَلِيْلٌ?",
          "options": [
            "أَخِلَّاءُ",
            "أَصْدِقَاءُ",
            "أَعْدَاءٌ",
            "نَصَارَى"
          ],
          "correct": 0
        },
        {
          "title": "healthy, sound, intact",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"healthy, sound, intact\"?",
          "options": [
            "سَالِمٌ",
            "إِلٰهٌ",
            "تَمْرَةٌ",
            "مَرِيْضٌ"
          ],
          "correct": 0
        },
        {
          "title": "healthy, sound, intact",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَالِمٌ mean?",
          "options": [
            "healthy, sound, intact",
            "enemy",
            "lazy",
            "active, energetic"
          ],
          "correct": 0
        },
        {
          "title": "severe",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"severe\"?",
          "options": [
            "شَدِيْدٌ",
            "إِلٰهٌ",
            "عَذَابٌ",
            "لَذِيْذٌ"
          ],
          "correct": 0
        },
        {
          "title": "severe",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَدِيْدٌ mean?",
          "options": [
            "severe",
            "long, tall",
            "short",
            "god, deity"
          ],
          "correct": 0
        },
        {
          "title": "severe (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَدِيْدٌ?",
          "options": [
            "شِدَادٌ",
            "مُتْعَبُوْنَ",
            "نَصَارَى",
            "أَعْدَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "friend",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"friend\"?",
          "options": [
            "صَدِيْقٌ",
            "نَصْرَانِيٌّ",
            "تَمْرَةٌ",
            "عَدُوٌّ"
          ],
          "correct": 0
        },
        {
          "title": "friend",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدِيْقٌ mean?",
          "options": [
            "friend",
            "healthy, sound, intact",
            "easy",
            "idol"
          ],
          "correct": 0
        },
        {
          "title": "friend (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَدِيْقٌ?",
          "options": [
            "أَصْدِقَاءُ",
            "شِدَادٌ",
            "طِوَالٌ",
            "أَصْنَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "long, tall",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"long, tall\"?",
          "options": [
            "طَوِيْلٌ",
            "إِلٰهٌ",
            "حُلْوٌ",
            "كَسْلَانُ"
          ],
          "correct": 0
        },
        {
          "title": "long, tall",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَوِيْلٌ mean?",
          "options": [
            "long, tall",
            "short",
            "healthy, sound, intact",
            "lazy"
          ],
          "correct": 0
        },
        {
          "title": "long, tall (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طَوِيْلٌ?",
          "options": [
            "طِوَالٌ",
            "نُشَطَاءُ",
            "بُعَدَاءُ",
            "نَصَارَى"
          ],
          "correct": 0
        },
        {
          "title": "enemy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"enemy\"?",
          "options": [
            "عَدُوٌّ",
            "يَهُوْدِيٌّ",
            "قَصِيْرٌ",
            "كَسْلَانُ"
          ],
          "correct": 0
        },
        {
          "title": "enemy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَدُوٌّ mean?",
          "options": [
            "enemy",
            "idol",
            "punishment",
            "Jew"
          ],
          "correct": 0
        },
        {
          "title": "enemy (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَدُوٌّ?",
          "options": [
            "أَعْدَاءٌ",
            "نُشَطَاءُ",
            "طِوَالٌ",
            "يَهُوْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "close",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"close\"?",
          "options": [
            "قَرِيْبٌ",
            "خَلِيْلٌ",
            "مَرِيْضٌ",
            "يَسِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "close",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَرِيْبٌ mean?",
          "options": [
            "close",
            "sweet",
            "tasty",
            "far"
          ],
          "correct": 0
        },
        {
          "title": "far",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"far\"?",
          "options": [
            "بَعِيْدٌ",
            "صَدِيْقٌ",
            "لَذِيْذٌ",
            "صَنَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "far",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعِيْدٌ mean?",
          "options": [
            "far",
            "easy",
            "idol",
            "sick"
          ],
          "correct": 0
        },
        {
          "title": "far (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَعِيْدٌ?",
          "options": [
            "بُعَدَاءُ",
            "آلِهَةٌ",
            "نَصَارَى",
            "أَخِلَّاءُ"
          ],
          "correct": 0
        },
        {
          "title": "Christian",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Christian\"?",
          "options": [
            "نَصْرَانِيٌّ",
            "لَذِيْذٌ",
            "بَعِيْدٌ",
            "حُلْوٌ"
          ],
          "correct": 0
        },
        {
          "title": "Christian",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَصْرَانِيٌّ mean?",
          "options": [
            "Christian",
            "far",
            "tired",
            "friend"
          ],
          "correct": 0
        },
        {
          "title": "Christian (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَصْرَانِيٌّ?",
          "options": [
            "نَصَارَى",
            "نُشَطَاءُ",
            "آلِهَةٌ",
            "طِوَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "Jew",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Jew\"?",
          "options": [
            "يَهُوْدِيٌّ",
            "إِلٰهٌ",
            "لَذِيْذٌ",
            "طَوِيْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "Jew",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَهُوْدِيٌّ mean?",
          "options": [
            "Jew",
            "sick",
            "close",
            "enemy"
          ],
          "correct": 0
        },
        {
          "title": "Jew (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of يَهُوْدِيٌّ?",
          "options": [
            "يَهُوْدٌ",
            "نُشَطَاءُ",
            "أَخِلَّاءُ",
            "نَصَارَى"
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
            "صَدِيْقٌ",
            "صَنَمٌ",
            "قَرِيْبٌ"
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
            "close",
            "far",
            "sweet"
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
            "شِدَادٌ",
            "نَصَارَى",
            "قِصَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "idol",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"idol\"?",
          "options": [
            "صَنَمٌ",
            "إِلٰهٌ",
            "عَذَابٌ",
            "حُلْوٌ"
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
            "sick",
            "healthy, sound, intact",
            "active, energetic"
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
            "أَخِلَّاءُ",
            "آلِهَةٌ",
            "مَرْضَى"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "ما المشبهة بليس",
      "subtitle": "Section 1: اَلْجُمْلَةُ الْاِسْمِيَّةُ",
      "concepts": [
        {
          "heading": "The Gender of the فِعْلٌ نَاقِصٌ",
          "lines": [
            {
              "html": "If the اِسْمٌ of a فعل ناقص is feminine, مُؤَنَّثٌ, the فعل ناقص must be given in its feminine form.",
              "list": false
            },
            {
              "table": {
                "title": "Feminine Forms of the فِعْلٌ نَاقِصٌ",
                "headers": [
                  "Masculine Form",
                  "Feminine Form"
                ],
                "rows": [
                  [
                    "كَانَ — كَانَ زَيْدٌ صَائِمًا",
                    "كَانَتْ — كَانَتْ فَاطِمَةُ صَائِمَةً"
                  ],
                  [
                    "يَكُوْنُ — يَكُوْنُ زَيْدٌ صَائِمًا",
                    "تَكُوْنُ — تَكُوْنُ فَاطِمَةُ صَائِمَةً"
                  ],
                  [
                    "لَيْسَ — لَيْسَ زَيْدٌ صَائِمًا",
                    "لَيْسَتْ — لَيْسَتْ فَاطِمَةُ صَائِمَةً"
                  ]
                ]
              }
            },
            {
              "html": "كَانَتْ فَاطِمَةُ صَائِمَةً — Fatima was fasting.",
              "list": true,
              "bullet": true
            },
            {
              "html": "تَكُوْنُ فَاطِمَةُ صَائِمَةً — Fatima will be fasting.",
              "list": true,
              "bullet": true
            },
            {
              "html": "لَيْسَتْ فَاطِمَةُ صَائِمَةً — Fatima is not fasting.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "(كَانَ) فَاطِمَةُ جَالِسَةً →",
            "kind": "mcq",
            "options": [
              "كَانَتْ فَاطِمَةُ جَالِسَةً",
              "كَانَ فَاطِمَةُ جَالِسَةً",
              "تَكُوْنُ فَاطِمَةُ جَالِسَةً",
              "لَيْسَتْ فَاطِمَةُ جَالِسَةً"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Joining Two Words Together",
          "lines": [
            {
              "html": "If the word after the feminine form of the فعل ناقص has an ال, the تْ will change to a تِ for pronunciation purposes.",
              "list": false
            },
            {
              "html": "كَانَتْ فَاطِمَةُ نَشِيْطَةً — Fatima was active.",
              "list": true,
              "bullet": true
            },
            {
              "html": "كَانَتِ الْبِنْتُ نَشِيْطَةً — The girl was active. (كَانَتْ ← كَانَتِ before ال)",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "(لَيْسَ) الْأُمُّ نَشِيْطَةً →",
            "kind": "mcq",
            "options": [
              "لَيْسَتِ الْأُمُّ نَشِيْطَةً",
              "لَيْسَ الْأُمُّ نَشِيْطَةً",
              "لَيْسَتْ الْأُمُّ نَشِيْطَةً",
              "كَانَتِ الْأُمُّ نَشِيْطَةً"
            ],
            "correct": 0
          }
        },
        {
          "heading": "مَا الْمُشَبَّهَةُ بِلَيْسَ",
          "lines": [
            {
              "html": "The particle مَا can be added to a جُمْلَةٌ اسْمِيَّةٌ. It resembles لَيْسَ; it makes the sentence negative and changes its خَبَرٌ into the مَنْصُوْب state. In tarkeeb, this مَا is labelled as: مَا الْمُشَبَّهَةُ بِلَيْسَ (which resembles لَيْسَ).",
              "list": false
            },
            {
              "html": "مَا زَيْدٌ مَرِيْضًا — Zaid is not ill.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "مَا زَيْدٌ مَرِيْضًا",
                "translation": "Zaid is not ill.",
                "cells": [
                  "مَا",
                  "زَيْدٌ",
                  "مَرِيْضًا"
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
                        "role": "خَبَرُ مَا"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "مَا زَيْدٌ مَرِيْضًا behaves like a لَيْسَ sentence. What happens to its خَبَرٌ؟",
            "kind": "mcq",
            "options": [
              "It becomes مَنْصُوْبٌ, just like after لَيْسَ",
              "It stays مَرْفُوْعٌ",
              "It becomes مَجْرُوْرٌ",
              "This sentence has no خَبَرٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Summary: The Negative جُمْلَةٌ اسْمِيَّةٌ",
          "lines": [
            {
              "html": "The following table summarises the negative جُمْلَةٌ اسْمِيَّةٌ.",
              "list": false
            },
            {
              "table": {
                "title": "The Negative جُمْلَةٌ اسْمِيَّةٌ",
                "headers": [
                  "Tense",
                  "Particle",
                  "Example",
                  "Translation"
                ],
                "rows": [
                  [
                    "Past",
                    "مَا كَانَ",
                    "مَا كَانَ زَيْدٌ مَرِيْضًا",
                    "Zaid was not sick."
                  ],
                  [
                    "Present",
                    "لَيْسَ",
                    "لَيْسَ زَيْدٌ مَرِيْضًا",
                    "Zaid is not sick."
                  ],
                  [
                    "Present",
                    "مَا",
                    "مَا زَيْدٌ مَرِيْضًا",
                    "Zaid is not sick."
                  ],
                  [
                    "Future",
                    "لَا يَكُوْنُ",
                    "لَا يَكُوْنُ زَيْدٌ مَرِيْضًا",
                    "Zaid will not be sick."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Looking at the summary table, which particle gives a PRESENT negative meaning without being لَيْسَ؟",
            "kind": "mcq",
            "options": [
              "مَا (اَلْمُشَبَّهَةُ بِلَيْسَ)",
              "مَا كَانَ",
              "لَا يَكُوْنُ",
              "كَانَ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Negative جملة اسمية — all tenses",
        "rows": [
          {
            "label": "Past",
            "arabic": "مَا كَانَ زَيْدٌ مَرِيْضًا",
            "meaning": "Zaid was not sick"
          },
          {
            "label": "Present",
            "arabic": "لَيْسَ زَيْدٌ مَرِيْضًا",
            "meaning": "Zaid is not sick"
          },
          {
            "label": "Present",
            "arabic": "مَا زَيْدٌ مَرِيْضًا",
            "meaning": "Zaid is not sick (مَا الْمُشَبَّهَةُ بِلَيْسَ)"
          },
          {
            "label": "Future",
            "arabic": "لَا يَكُوْنُ زَيْدٌ مَرِيْضًا",
            "meaning": "Zaid will not be sick"
          },
          {
            "label": "Feminine forms",
            "arabic": "كَانَتْ، تَكُوْنُ، لَيْسَتْ",
            "meaning": "used when the اسم is مؤنث"
          }
        ]
      },
      "quiz": [
        {
          "q": "When must the فعل ناقص be in its feminine form?",
          "options": [
            "When the خبر is feminine",
            "When its اِسْمٌ is feminine",
            "Always",
            "Only in the future tense"
          ],
          "correct": 1,
          "explanation": "كَانَتْ فَاطِمَةُ صَائِمَةً — the اسم (فاطمة) is feminine."
        },
        {
          "q": "What are the feminine forms of كَانَ، يَكُوْنُ، لَيْسَ?",
          "options": [
            "كَانَتْ، تَكُوْنُ، لَيْسَتْ",
            "كَانَةٌ، يَكُوْنَةُ، لَيْسَةٌ",
            "كُنْتِ، تَكُوْنِيْنَ، لَسْتِ",
            "They have no feminine forms"
          ],
          "correct": 0,
          "explanation": "الماضي adds تْ; المضارع changes ي to ت."
        },
        {
          "q": "Why does كَانَتْ become كَانَتِ in كَانَتِ الْبِنْتُ نَشِيْطَةً?",
          "options": [
            "It is a spelling mistake",
            "The تْ takes a كَسْرَةٌ before ال for pronunciation purposes",
            "The verb becomes مجرور",
            "The بنت is dual"
          ],
          "correct": 1,
          "explanation": "A sākin تْ cannot join the following اَلْ — it is given a kasrah."
        },
        {
          "q": "What does مَا الْمُشَبَّهَةُ بِلَيْسَ do to a جملة اسمية?",
          "options": [
            "Makes it past tense",
            "Makes it negative and changes its خبر into the مَنْصُوْبٌ state, like لَيْسَ",
            "Makes it a question",
            "Makes it emphatic"
          ],
          "correct": 1,
          "explanation": "مَا زَيْدٌ مَرِيْضًا = Zaid is not ill — note the منصوب khabar مَرِيْضًا."
        },
        {
          "q": "مَا الْأَبُ ظَالِمًا translates as…",
          "options": [
            "The father was not unjust",
            "The father is not unjust",
            "The father will not be unjust",
            "Is the father unjust?"
          ],
          "correct": 1,
          "explanation": "مَا المشبهة بليس gives a present negative like لَيْسَ."
        }
      ],
      "bank": [
        {
          "title": "كَانَتْ فَاطِمَةُ جَالِسَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 2)",
          "sentence": "كَانَتْ فَاطِمَةُ جَالِسَةً",
          "translation": "Fatima was sitting.",
          "cells": [
            "كَانَتْ",
            "فَاطِمَةُ",
            "جَالِسَةً"
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
          "title": "كَانَتْ زَيْنَبُ شَاكِرَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 2)",
          "sentence": "كَانَتْ زَيْنَبُ شَاكِرَةً",
          "translation": "Zainab was thankful.",
          "cells": [
            "كَانَتْ",
            "زَيْنَبُ",
            "شَاكِرَةً"
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
          "title": "لَا تَكُوْنُ النِّسَاءُ أَعْدَاءً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 9 (Section 1, Part 2)",
          "sentence": "لَا تَكُوْنُ النِّسَاءُ أَعْدَاءً",
          "translation": "The women will not be enemies.",
          "cells": [
            "لَا",
            "تَكُوْنُ",
            "النِّسَاءُ",
            "أَعْدَاءً"
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
            "حَرْفُ حَصْرٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ الْاِسْتِثْنَاءِ",
            "فِعْلٌ"
          ]
        },
        {
          "title": "لَيْسَتِ الْأُمُّ نَشِيْطَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 2)",
          "sentence": "لَيْسَتِ الْأُمُّ نَشِيْطَةً",
          "translation": "The mother is not active.",
          "cells": [
            "لَيْسَتِ",
            "الْأُمُّ",
            "نَشِيْطَةً"
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
          "title": "كَانَتْ فَاطِمَةُ مَرِيْضَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 10 (Section 1, Part 2)",
          "sentence": "كَانَتْ فَاطِمَةُ مَرِيْضَةً",
          "translation": "Fatima was ill.",
          "cells": [
            "كَانَتْ",
            "فَاطِمَةُ",
            "مَرِيْضَةً"
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
          "title": "مَا الْمَاءُ بَارِدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 2)",
          "sentence": "مَا الْمَاءُ بَارِدًا",
          "translation": "The water is not cold.",
          "cells": [
            "مَا",
            "الْمَاءُ",
            "بَارِدًا"
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
                  "role": "خَبَرُ مَا"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "اِسْمُ لَيْسَ",
            "خَبَرٌ",
            "خَبَرُ لَيْسَ"
          ]
        },
        {
          "title": "مَا مُحَمَّدٌ كَاذِبًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 2)",
          "sentence": "مَا مُحَمَّدٌ كَاذِبًا",
          "translation": "Muhammad is not a liar.",
          "cells": [
            "مَا",
            "مُحَمَّدٌ",
            "كَاذِبًا"
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
                  "role": "خَبَرُ مَا"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "اِسْمُ لَيْسَ",
            "خَبَرٌ",
            "خَبَرُ لَيْسَ"
          ]
        },
        {
          "title": "مَا الْأَبُ ظَالِمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 11 (Section 1, Part 2)",
          "sentence": "مَا الْأَبُ ظَالِمًا",
          "translation": "The father is not unjust.",
          "cells": [
            "مَا",
            "الْأَبُ",
            "ظَالِمًا"
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
                  "role": "خَبَرُ مَا"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "اِسْمُ لَيْسَ",
            "خَبَرٌ",
            "خَبَرُ لَيْسَ"
          ]
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "لَيْسَتِ الْأُمُّ نَشِيْطَةً translates as…",
          "options": [
            "The mother is not active",
            "The mother was not active",
            "The mother will not be active",
            "The mother is active"
          ],
          "correct": 0,
          "explanation": "لَيْسَتْ = is not (feminine); the تِ appears before ال."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Choose the correct form: (كَانَ) فَاطِمَةُ جَالِسَةً",
          "options": [
            "كَانَ",
            "تَكُوْنُ",
            "كَانَتْ",
            "لَيْسَتْ"
          ],
          "correct": 2,
          "explanation": "The اسم (فَاطِمَةُ) is feminine, so the ماضي فعل ناقص takes its feminine form: كَانَتْ."
        },
        {
          "title": "Book Exercise 10 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Why is the verb written كَانَتِ in كَانَتِ الْبِنْتُ نَشِيْطَةً?",
          "options": [
            "The verb is dual",
            "The sākin تْ takes a كَسْرَةٌ before ال for pronunciation purposes",
            "Feminine verbs always end in a كسرة",
            "The verb is مَجْرُوْرٌ"
          ],
          "correct": 1,
          "explanation": "كَانَتْ ← كَانَتِ when the following word has ال."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In مَا الْأَبُ ظَالِمًا, the word مَا is labelled as…",
          "options": [
            "حَرْفُ تَحْقِيْقٍ",
            "حَرْفُ حَصْرٍ",
            "حَرْفُ اسْتِفْهَامٍ",
            "مَا الْمُشَبَّهَةُ بِلَيْسَ"
          ],
          "correct": 3,
          "explanation": "This مَا precedes a جملة اسمية, negates it like لَيْسَ, and makes the خبر مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Why does بَارِدًا in مَا الْمَاءُ بَارِدًا end in a فَتْحَةٌ?",
          "options": [
            "مَا الْمُشَبَّهَةُ بِلَيْسَ changes the خبر into the مَنْصُوْبُ state",
            "It is a مفعول به",
            "The word بَارِدٌ is غير منصرف",
            "It is a mistake — it should be بَارِدٌ"
          ],
          "correct": 0,
          "explanation": "Like لَيْسَ, this مَا keeps its اسم مرفوع and makes its خبر منصوب."
        },
        {
          "title": "Book Exercise 11 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Which sentence means 'The sisters are hardworking'?",
          "options": [
            "مَا الْأَخَوَاتُ مُجْتَهِدَاتٍ",
            "الْأَخَوَاتُ مُجْتَهِدَاتٌ",
            "كَانَتِ الْأَخَوَاتُ مُجْتَهِدَاتٍ",
            "لَيْسَتِ الْأَخَوَاتُ مُجْتَهِدَاتٍ"
          ],
          "correct": 1,
          "explanation": "The plain جملة اسمية is the affirmative present; the others are negative or past."
        },
        {
          "title": "Book Exercise 9 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Which sentence correctly means 'The girls will be tired'?",
          "options": [
            "كَانَتِ الْبَنَاتُ مُتْعَبَاتٍ",
            "يَكُوْنُ الْبَنَاتُ مُتْعَبَاتٍ",
            "تَكُوْنُ الْبَنَاتُ مُتْعَبَاتٍ",
            "لَيْسَتِ الْبَنَاتُ مُتْعَبَاتٍ"
          ],
          "correct": 2,
          "explanation": "Future + feminine اسم → the مضارع takes its feminine form: تَكُوْنُ."
        }
      ]
    },
    {
      "id": "l4",
      "title": "إنّ ولامَا التوكيد",
      "subtitle": "Section 1: اَلْجُمْلَةُ الْاِسْمِيَّةُ",
      "concepts": [
        {
          "heading": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — إِنَّ",
          "lines": [
            {
              "html": "A حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ is a particle which precedes a جُمْلَةٌ اسْمِيَّةٌ. إِنَّ is a حرف مشبه بالفعل which creates emphasis in the sentence. It can be translated as 'indeed' or 'certainly'. The word indeed or certainly is followed by a comma.",
              "list": false
            },
            {
              "html": "إِنَّ زَيْدًا صَادِقٌ — Indeed, Zaid is truthful.",
              "list": true,
              "bullet": true
            },
            {
              "html": "Grammatical changes with إِنَّ: 1. The مُبْتَدَأٌ is called the اِسْمٌ of that حرف مشبه بالفعل and becomes مَنْصُوْبٌ. 2. The خَبَرٌ is called the خَبَرٌ of that حرف مشبه بالفعل and remains مَرْفُوْعٌ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنَّ اللهَ غَفُوْرٌ",
                "translation": "Indeed, Allah is Forgiving.",
                "cells": [
                  "إِنَّ",
                  "اللهَ",
                  "غَفُوْرٌ"
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
                        "end": 2,
                        "role": "خَبَرُ إِنَّ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اَلْمَاءُ بَارِدٌ",
            "kind": "mcq",
            "options": [
              "إِنَّ الْمَاءَ بَارِدٌ",
              "إِنَّ الْمَاءُ بَارِدٌ",
              "إِنَّ الْمَاءَ بَارِدًا",
              "إِنَّ الْمَاءِ بَارِدٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "لَامُ الْاِبْتِدَاءِ",
          "lines": [
            {
              "html": "Sometimes, a لَ can be given at the beginning of a sentence. This is called لَامُ الْاِبْتِدَاءِ. It creates emphasis which is not always reflected in the translation; it can be shown using underlining or italics. This حرف does not cause the irab of the following word(s) to change: it is غَيْرُ عَامِلٍ. In tarkeeb, لَامُ الْاِبْتِدَاءِ does not become a main part of the sentence.",
              "list": false
            },
            {
              "html": "لَزَيْدٌ صَادِقٌ — Zaid IS truthful.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَزَيْدٌ صَادِقٌ",
                "translation": "Zaid IS truthful.",
                "cells": [
                  "لَ",
                  "زَيْدٌ",
                  "صَادِقٌ"
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
              "html": "If the word after لَامُ الْاِبْتِدَاءِ has أَلْ, the ا is not written: لَ + الْوَلَدُ ← لَلْوَلَدُ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "لَزَيْدٌ صَادِقٌ places لَامُ الْاِبْتِدَاءِ before the مُبْتَدَأٌ. Does this لَ change the irab of زَيْدٌ؟",
            "kind": "mcq",
            "options": [
              "No — it is غَيْرُ عَامِلٍ, the irab is unchanged",
              "Yes — زَيْدٌ becomes مَنْصُوْبٌ",
              "Yes — زَيْدٌ becomes مَجْرُوْرٌ",
              "Yes — it turns the sentence into a question"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اَللَّامُ الْمُزَحْلَقَةُ",
          "lines": [
            {
              "html": "Sometimes a لَ can be added to the خَبَرٌ of إِنَّ. In this case, it is called اَللَّامُ الْمُزَحْلَقَةُ. Like لَامُ الْاِبْتِدَاءِ, this creates additional emphasis which is not always reflected in the translation. This حرف is غَيْرُ عَامِلٍ and does not become one of the main parts of a sentence.",
              "list": false
            },
            {
              "html": "إِنَّ زَيْدًا لَصَادِقٌ — Indeed, Zaid IS truthful.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنَّ اللهَ لَغَفُوْرٌ",
                "translation": "Indeed, Allah IS Forgiving.",
                "cells": [
                  "إِنَّ",
                  "اللهَ",
                  "لَ",
                  "غَفُوْرٌ"
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
                        "end": 2,
                        "role": "لَامٌ مُزَحْلَقَةٌ"
                      },
                      {
                        "start": 3,
                        "end": 3,
                        "role": "خَبَرُ إِنَّ"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In إِنَّ زَيْدًا لَصَادِقٌ, where is اَللَّامُ الْمُزَحْلَقَةُ placed?",
            "kind": "mcq",
            "options": [
              "On the خَبَرُ of إِنَّ",
              "On the اِسْمُ of إِنَّ",
              "Before إِنَّ itself",
              "It replaces إِنَّ entirely"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Summary: Emphasised جُمْلَةٌ اسْمِيَّةٌ",
          "lines": [
            {
              "html": "The following table summarises the different particles that can be added to a جملة اسمية to create emphasis.",
              "list": false
            },
            {
              "table": {
                "title": "Emphasised جُمْلَةٌ اسْمِيَّةٌ",
                "headers": [
                  "إِنَّ",
                  "لَامُ الْاِبْتِدَاءِ",
                  "اَللَّامُ الْمُزَحْلَقَةُ"
                ],
                "rows": [
                  [
                    "إِنَّ زَيْدًا صَادِقٌ",
                    "لَزَيْدٌ صَادِقٌ",
                    "إِنَّ زَيْدًا لَصَادِقٌ"
                  ],
                  [
                    "Indeed, Zaid is truthful.",
                    "Zaid IS truthful.",
                    "Indeed, Zaid IS truthful."
                  ]
                ]
              }
            },
            {
              "html": "A جملة اسمية can therefore take several different forms. Using اَلْمَاءُ بَارِدٌ as the base sentence:",
              "list": false
            },
            {
              "table": {
                "title": "The Different Forms of a جُمْلَةٌ اسْمِيَّةٌ",
                "headers": [
                  "Arabic",
                  "Translation"
                ],
                "rows": [
                  [
                    "اَلْمَاءُ بَارِدٌ",
                    "The water is cold."
                  ],
                  [
                    "كَانَ الْمَاءُ بَارِدًا",
                    "The water was cold."
                  ],
                  [
                    "مَا كَانَ الْمَاءُ بَارِدًا",
                    "The water was not cold."
                  ],
                  [
                    "يَكُوْنُ الْمَاءُ بَارِدًا",
                    "The water will be cold."
                  ],
                  [
                    "لَا يَكُوْنُ الْمَاءُ بَارِدًا",
                    "The water will not be cold."
                  ],
                  [
                    "لَيْسَ الْمَاءُ بَارِدًا",
                    "The water is not cold."
                  ],
                  [
                    "مَا الْمَاءُ بَارِدًا",
                    "The water is not cold."
                  ],
                  [
                    "إِنَّ الْمَاءَ بَارِدٌ",
                    "Indeed, the water is cold."
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Looking at the full paradigm of اَلْمَاءُ بَارِدٌ, which form uses إِنَّ؟",
            "kind": "mcq",
            "options": [
              "إِنَّ الْمَاءَ بَارِدٌ",
              "كَانَ الْمَاءُ بَارِدًا",
              "لَيْسَ الْمَاءُ بَارِدًا",
              "مَا الْمَاءُ بَارِدًا"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Emphasised جملة اسمية",
        "rows": [
          {
            "label": "إِنَّ",
            "arabic": "إِنَّ زَيْدًا صَادِقٌ",
            "meaning": "Indeed, Zaid is truthful — اسم منصوب، خبر مرفوع"
          },
          {
            "label": "لَامُ الْاِبْتِدَاءِ",
            "arabic": "لَزَيْدٌ صَادِقٌ",
            "meaning": "Zaid IS truthful — غير عامل, on the مبتدأ"
          },
          {
            "label": "اَللَّامُ الْمُزَحْلَقَةُ",
            "arabic": "إِنَّ زَيْدًا لَصَادِقٌ",
            "meaning": "Indeed, Zaid IS truthful — غير عامل, on the خبر of إنّ"
          }
        ]
      },
      "quiz": [
        {
          "q": "What grammatical changes does إِنَّ cause?",
          "options": [
            "Its اسم becomes مَنْصُوْبٌ; its خبر remains مَرْفُوْعٌ",
            "Its اسم remains مَرْفُوْعٌ; its خبر becomes مَنْصُوْبٌ",
            "Both become مَنْصُوْبٌ",
            "No changes — it is غير عامل"
          ],
          "correct": 0,
          "explanation": "The opposite of كَانَ: إِنَّ زَيْدًا صَادِقٌ."
        },
        {
          "q": "How is إِنَّ translated?",
          "options": [
            "'was'",
            "'indeed' or 'certainly', followed by a comma",
            "'not'",
            "'only'"
          ],
          "correct": 1,
          "explanation": "إِنَّ زَيْدًا صَادِقٌ = Indeed, Zaid is truthful."
        },
        {
          "q": "What is لَامُ الْاِبْتِدَاءِ?",
          "options": [
            "A لَ at the beginning of a sentence creating emphasis; it is غَيْرُ عَامِلٍ",
            "A لَ that makes the following word مَجْرُوْرٌ",
            "The لَ of the future tense",
            "A negative particle"
          ],
          "correct": 0,
          "explanation": "لَزَيْدٌ صَادِقٌ — emphasis shown by underlining/italics, no irab change."
        },
        {
          "q": "What happens when لَامُ الْاِبْتِدَاءِ comes before a word with أَلْ?",
          "options": [
            "The ل is doubled",
            "The ا of أَلْ is not written: لَ + الْوَلَدُ ← لَلْوَلَدُ",
            "Nothing changes in writing",
            "The لَ is dropped"
          ],
          "correct": 1,
          "explanation": "لَلْوَلَدُ — the alif is dropped in writing."
        },
        {
          "q": "What is اَللَّامُ الْمُزَحْلَقَةُ?",
          "options": [
            "A لَ added to the اسم of إِنَّ",
            "A لَ added to the خبر of إِنَّ for extra emphasis; غَيْرُ عَامِلٍ",
            "The لَ of لَيْسَ",
            "A governing particle that makes the خبر منصوب"
          ],
          "correct": 1,
          "explanation": "إِنَّ اللهَ لَغَفُوْرٌ — the لَ 'slides' onto the khabar."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 12 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "إِنَّ الْعَذَابَ شَدِيْدٌ translates as…",
          "options": [
            "Indeed, the punishment is severe",
            "The punishment was severe",
            "The punishment is not severe",
            "The punishment will be severe"
          ],
          "correct": 0,
          "explanation": "إِنَّ = indeed/certainly, followed by a comma."
        },
        {
          "title": "Book Exercise 12 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "إِنَّ الْقُرْآنَ صَادِقٌ — why is الْقُرْآنَ منصوب?",
          "options": [
            "It is the خبر",
            "It is a مفعول به",
            "It is the اسم of إِنَّ, which إِنَّ makes مَنْصُوْبٌ",
            "It is غير منصرف"
          ],
          "correct": 2,
          "explanation": "إِنَّ governs its اسم into the منصوب state, while its خبر remains مرفوع."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Add إِنَّ to اَلْمَدْرَسَةُ قَرِيْبَةٌ:",
          "options": [
            "إِنَّ الْمَدْرَسَةُ قَرِيْبَةً",
            "إِنَّ الْمَدْرَسَةَ قَرِيْبَةٌ",
            "إِنَّ الْمَدْرَسَةَ قَرِيْبَةً",
            "إِنَّ الْمَدْرَسَةُ قَرِيْبَةٌ"
          ],
          "correct": 1,
          "explanation": "اسم إنّ منصوب (الْمَدْرَسَةَ), خبر مرفوع (قَرِيْبَةٌ)."
        },
        {
          "title": "Book Exercise 13 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Which is the correct result of adding إِنَّ to اَلْعَمَّانِ كَاذِبَانِ?",
          "options": [
            "إِنَّ الْعَمَّانِ كَاذِبَانِ",
            "إِنَّ الْعَمَّيْنِ كَاذِبَيْنِ",
            "إِنَّ الْعَمَّانِ كَاذِبَيْنِ",
            "إِنَّ الْعَمَّيْنِ كَاذِبَانِ"
          ],
          "correct": 3,
          "explanation": "The dual اسم becomes منصوب with ـَيْنِ, but the خبر stays مرفوع with ـَانِ."
        },
        {
          "title": "Book Exercise 14 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In لَزَيْدٌ طَوِيْلٌ, what effect does the لَ have on the irab of زَيْدٌ?",
          "options": [
            "None — لَامُ الْاِبْتِدَاءِ is غَيْرُ عَامِلٍ; it only adds emphasis",
            "It makes زَيْدٌ منصوبا",
            "It makes زَيْدٌ مجرورا",
            "It turns زَيْدٌ into the خبر"
          ],
          "correct": 0,
          "explanation": "لَامُ الْاِبْتِدَاءِ creates emphasis without changing any irab — زَيْدٌ stays a مرفوع مبتدأ."
        },
        {
          "title": "Book Exercise 15 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "إِنَّ اللهَ لَغَفُوْرٌ — the لَ on لَغَفُوْرٌ is…",
          "options": [
            "لَامُ الْاِبْتِدَاءِ",
            "the preposition لِ",
            "اَللَّامُ الْمُزَحْلَقَةُ — extra emphasis on the خبر of إِنَّ",
            "part of the word غَفُوْرٌ"
          ],
          "correct": 2,
          "explanation": "A لَ on the خبر of إِنَّ is the لام مزحلقة — غير عامل."
        },
        {
          "title": "Book Exercise 17 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "Which sentence means 'The mosque was big'?",
          "options": [
            "إِنَّ الْمَسْجِدَ كَبِيْرٌ",
            "كَانَ الْمَسْجِدُ كَبِيْرًا",
            "اَلْمَسْجِدُ كَبِيْرٌ",
            "لَيْسَ الْمَسْجِدُ كَبِيْرًا"
          ],
          "correct": 1,
          "explanation": "كَانَ gives the past tense; the others are emphatic, present affirmative, and negative."
        },
        {
          "title": "إِنَّ اللهَ غَفُوْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 74)",
          "sentence": "إِنَّ اللهَ غَفُوْرٌ",
          "translation": "Indeed, Allah is Forgiving.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "غَفُوْرٌ"
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
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "إِنَّ نُوْحًا نَبِيٌّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 2)",
          "sentence": "إِنَّ نُوْحًا نَبِيٌّ",
          "translation": "Indeed, Nuh is a prophet.",
          "cells": [
            "إِنَّ",
            "نُوْحًا",
            "نَبِيٌّ"
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
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "إِنَّ الشَّيْطَانَ كَاذِبٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 2)",
          "sentence": "إِنَّ الشَّيْطَانَ كَاذِبٌ",
          "translation": "Indeed, the devil is a liar.",
          "cells": [
            "إِنَّ",
            "الشَّيْطَانَ",
            "كَاذِبٌ"
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
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "إِنَّ الْمُسْلِمِيْنَ صَادِقُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 12 (Section 1, Part 2)",
          "sentence": "إِنَّ الْمُسْلِمِيْنَ صَادِقُوْنَ",
          "translation": "Indeed, the Muslims are truthful.",
          "cells": [
            "إِنَّ",
            "الْمُسْلِمِيْنَ",
            "صَادِقُوْنَ"
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
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "لَزَيْدٌ طَوِيْلٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 2)",
          "sentence": "لَزَيْدٌ طَوِيْلٌ",
          "translation": "Zaid IS tall.",
          "cells": [
            "لَ",
            "زَيْدٌ",
            "طَوِيْلٌ"
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
            "لَامٌ مُزَحْلَقَةٌ",
            "حَرْفُ تَحْقِيْقٍ",
            "فَاعِلٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "لَفَاطِمَةُ قَوِيَّةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 14 (Section 1, Part 2)",
          "sentence": "لَفَاطِمَةُ قَوِيَّةٌ",
          "translation": "Fatima IS strong.",
          "cells": [
            "لَ",
            "فَاطِمَةُ",
            "قَوِيَّةٌ"
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
            "لَامٌ مُزَحْلَقَةٌ",
            "حَرْفُ تَحْقِيْقٍ",
            "فَاعِلٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "إِنَّ اللهَ لَغَفُوْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 2)",
          "sentence": "إِنَّ اللهَ لَغَفُوْرٌ",
          "translation": "Indeed, Allah IS Forgiving.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "لَ",
            "غَفُوْرٌ"
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
                  "end": 2,
                  "role": "لَامٌ مُزَحْلَقَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "إِنَّ اللهَ لَسَمِيْعٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 15 (Section 1, Part 2)",
          "sentence": "إِنَّ اللهَ لَسَمِيْعٌ",
          "translation": "Indeed, Allah IS All-Hearing.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "لَ",
            "سَمِيْعٌ"
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
                  "end": 2,
                  "role": "لَامٌ مُزَحْلَقَةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "to forgive, overlook",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forgive, overlook\"?",
          "options": [
            "عَفَا يَعْفُوْ",
            "عَلِيْمٌ",
            "عَزِيْزٌ",
            "وَهَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to forgive, overlook",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَفَا يَعْفُوْ mean?",
          "options": [
            "to forgive, overlook",
            "Oft-Pardoning",
            "Forgiving",
            "The Grantor"
          ],
          "correct": 0
        },
        {
          "title": "to forgive, overlook (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَفَا يَعْفُوْ?",
          "options": [
            "عَفْوًا",
            "رَحْمَةً",
            "رُحَمَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "Oft-Pardoning",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Oft-Pardoning\"?",
          "options": [
            "عَفُوٌّ",
            "تَوَّابٌ",
            "عَفَا يَعْفُوْ",
            "عَزِيْزٌ"
          ],
          "correct": 0
        },
        {
          "title": "Oft-Pardoning",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَفُوٌّ mean?",
          "options": [
            "Oft-Pardoning",
            "Forgiving",
            "to have mercy",
            "All-Hearing"
          ],
          "correct": 0
        },
        {
          "title": "All-Knowing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"All-Knowing\"?",
          "options": [
            "عَلِيْمٌ",
            "رَحِمَ يَرْحَمُ",
            "وَهَّابٌ",
            "غَفُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "All-Knowing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَلِيْمٌ mean?",
          "options": [
            "All-Knowing",
            "to have mercy",
            "Forgiving",
            "The Grantor"
          ],
          "correct": 0
        },
        {
          "title": "Forgiving",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Forgiving\"?",
          "options": [
            "غَفُوْرٌ",
            "رَحِيْمٌ",
            "عَزِيْزٌ",
            "تَوَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "Forgiving",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَفُوْرٌ mean?",
          "options": [
            "Forgiving",
            "Most-Relenting",
            "The Grantor",
            "Merciful"
          ],
          "correct": 0
        },
        {
          "title": "The Grantor",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"The Grantor\"?",
          "options": [
            "وَهَّابٌ",
            "عَفُوٌّ",
            "رَحِيْمٌ",
            "تَوَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "The Grantor",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَهَّابٌ mean?",
          "options": [
            "The Grantor",
            "Forgiving",
            "All-Hearing",
            "to forgive, overlook"
          ],
          "correct": 0
        },
        {
          "title": "Most-Relenting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Most-Relenting\"?",
          "options": [
            "تَوَّابٌ",
            "عَزِيْزٌ",
            "وَهَّابٌ",
            "عَلِيْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "Most-Relenting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَوَّابٌ mean?",
          "options": [
            "Most-Relenting",
            "to forgive, overlook",
            "All-Knowing",
            "to have mercy"
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
            "عَفَا يَعْفُوْ",
            "سَمِيْعٌ",
            "عَفُوٌّ"
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
            "All-Knowing",
            "Most-Relenting",
            "All-Hearing"
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
            "عَفْوًا",
            "رُحَمَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "Merciful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Merciful\"?",
          "options": [
            "رَحِيْمٌ",
            "وَهَّابٌ",
            "رَحِمَ يَرْحَمُ",
            "تَوَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "Merciful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَحِيْمٌ mean?",
          "options": [
            "Merciful",
            "All-Knowing",
            "Oft-Pardoning",
            "Forgiving"
          ],
          "correct": 0
        },
        {
          "title": "Merciful (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَحِيْمٌ?",
          "options": [
            "رُحَمَاءُ",
            "رَحْمَةً",
            "عَفْوًا"
          ],
          "correct": 0
        },
        {
          "title": "All-Hearing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"All-Hearing\"?",
          "options": [
            "سَمِيْعٌ",
            "عَلِيْمٌ",
            "تَوَّابٌ",
            "عَفَا يَعْفُوْ"
          ],
          "correct": 0
        },
        {
          "title": "All-Hearing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمِيْعٌ mean?",
          "options": [
            "All-Hearing",
            "The Grantor",
            "Oft-Pardoning",
            "Most-Relenting"
          ],
          "correct": 0
        },
        {
          "title": "All-Mighty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"All-Mighty\"?",
          "options": [
            "عَزِيْزٌ",
            "عَفَا يَعْفُوْ",
            "عَلِيْمٌ",
            "وَهَّابٌ"
          ],
          "correct": 0
        },
        {
          "title": "All-Mighty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَزِيْزٌ mean?",
          "options": [
            "All-Mighty",
            "Merciful",
            "All-Knowing",
            "Oft-Pardoning"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "أنواع الخبر",
      "subtitle": "Section 1: اَلْجُمْلَةُ الْاِسْمِيَّةُ",
      "concepts": [
        {
          "heading": "The خَبَرٌ as a Noun",
          "lines": [
            {
              "html": "If the خَبَرٌ is an adjective, it must agree with the مُبْتَدَأٌ in both number and gender. However, if the خَبَرٌ is a noun, not an adjective, it does not need to agree in either number or gender.",
              "list": false
            },
            {
              "html": "اَلصِّدْقُ نَجَاةٌ — Truth is salvation. — the خبر (نَجَاةٌ) is a noun, so no gender agreement needed",
              "list": true,
              "bullet": true
            },
            {
              "html": "اَلْحَرْفُ قِسْمَانِ — Harf is two types. — the خبر (قِسْمَانِ) is a noun, so no number agreement needed",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "The خَبَرٌ: Adjective vs Noun",
                "headers": [
                  "خَبَرٌ as an Adjective",
                  "خَبَرٌ as a Noun"
                ],
                "rows": [
                  [
                    "Must agree with the مُبْتَدَأٌ in number and gender",
                    "Does not have to agree with the مُبْتَدَأٌ in number and gender"
                  ],
                  [
                    "اَلْأَوْلَادُ صَالِحُوْنَ",
                    "اَلْأَوْلَادُ نِعْمَةٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "اَلْأَوْلَادُ نِعْمَةٌ",
            "kind": "mcq",
            "options": [
              "Adjective خبر — agrees",
              "Noun خبر — no agreement needed"
            ],
            "correct": 1
          }
        },
        {
          "heading": "The خَبَرٌ as a Participle",
          "lines": [
            {
              "html": "The اِسْمُ الْفَاعِلِ and اِسْمُ الْمَفْعُوْلِ can also be used as a participle: a noun that represents a meaning of a verb. When they function as a participle, they express the present continuous or near future tense. The اِسْمُ الْفَاعِلِ gives a فِعْلٌ مَعْلُوْمٌ meaning and the اِسْمُ الْمَفْعُوْلِ gives a فِعْلٌ مَجْهُوْلٌ meaning.",
              "list": false
            },
            {
              "table": {
                "title": "Translation of Participles",
                "headers": [
                  "",
                  "Present",
                  "Near Future"
                ],
                "rows": [
                  [
                    "اِسْمُ الْفَاعِلِ — شَارِبٌ",
                    "… ing (drinking)",
                    "going to … (going to drink)"
                  ],
                  [
                    "اِسْمُ الْمَفْعُوْلِ — مَشْرُوْبٌ",
                    "being … (being drunk)",
                    "will be … (will be drunk)"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "شَارِبٌ used as a خبر participle can mean 'drinking' or 'going to drink'. Which participle is this, and which voice does it give?",
            "kind": "mcq",
            "options": [
              "اِسْمُ الْفَاعِلِ — active (فِعْلٌ مَعْلُوْمٌ) meaning",
              "اِسْمُ الْمَفْعُوْلِ — passive meaning",
              "مَصْدَرٌ — neither active nor passive",
              "صِفَةٌ مُشَبَّهَةٌ — an intense active meaning"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The خَبَرٌ",
        "rows": [
          {
            "label": "Adjective خبر",
            "arabic": "اَلْأَوْلَادُ صَالِحُوْنَ",
            "meaning": "Must agree with the مبتدأ in number and gender"
          },
          {
            "label": "Noun خبر",
            "arabic": "اَلْأَوْلَادُ نِعْمَةٌ",
            "meaning": "Does not have to agree in number or gender"
          },
          {
            "label": "اسم الفاعل as participle",
            "arabic": "ذَاهِبٌ",
            "meaning": "…ing / going to … (active meaning)"
          },
          {
            "label": "اسم المفعول as participle",
            "arabic": "مَظْلُوْمٌ",
            "meaning": "being … / will be … (passive meaning)"
          }
        ]
      },
      "quiz": [
        {
          "q": "When must the خَبَرٌ agree with the مُبْتَدَأٌ in number and gender?",
          "options": [
            "Always",
            "When the خبر is an adjective",
            "When the خبر is a noun",
            "Never"
          ],
          "correct": 1,
          "explanation": "Adjective khabar agrees; a noun khabar does not have to."
        },
        {
          "q": "Why is اَلصِّدْقُ نَجَاةٌ correct even though نَجَاةٌ is feminine and الصِّدْقُ is masculine?",
          "options": [
            "It is an exception that must be memorised",
            "The خبر is a noun, so it does not have to agree in gender",
            "الصِّدْقُ is actually feminine",
            "The sentence is a جملة فعلية"
          ],
          "correct": 1,
          "explanation": "'Truth is salvation' — noun khabar, no agreement required."
        },
        {
          "q": "When the اسم الفاعل is used as a participle, which tense does it express?",
          "options": [
            "Past",
            "Present continuous or near future",
            "Imperative",
            "Distant future only"
          ],
          "correct": 1,
          "explanation": "شَارِبٌ = drinking / going to drink."
        },
        {
          "q": "What meaning does the اسم المفعول give as a participle?",
          "options": [
            "A فِعْلٌ مَعْلُوْمٌ (active) meaning",
            "A فِعْلٌ مَجْهُوْلٌ (passive) meaning: being … / will be …",
            "A command",
            "A negative meaning"
          ],
          "correct": 1,
          "explanation": "مَشْرُوْبٌ = being drunk / will be drunk."
        },
        {
          "q": "اَلْأُخْتُ ذَاهِبَةٌ translates as…",
          "options": [
            "The sister went",
            "The sister is going / going to go",
            "The sister was made to go",
            "The sister does not go"
          ],
          "correct": 1,
          "explanation": "اسم الفاعل as khabar: present continuous or near future."
        }
      ],
      "bank": [
        {
          "title": "Book Exercise 18 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "اَلنَّاسُ أَقْسَامٌ translates as…",
          "options": [
            "The people are divided",
            "People are (of different) types",
            "The people are just",
            "People are a nation"
          ],
          "correct": 1,
          "explanation": "Noun khabar — no number agreement needed."
        },
        {
          "title": "Book Exercise 18 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "كَانَ إِبْرَاهِيْمُ أُمَّةً — why is the feminine أُمَّةً a valid خبر for the masculine إِبْرَاهِيْمُ?",
          "options": [
            "أُمَّةً is actually masculine",
            "كَانَ removes all agreement rules",
            "The sentence is an error",
            "The خبر is a noun, so it does not have to agree in gender"
          ],
          "correct": 3,
          "explanation": "Only an ADJECTIVE khabar must agree; a noun khabar ('a nation') need not."
        },
        {
          "title": "Book Exercise 18 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In إِنَّ الْمَالَ فِتْنَةٌ, the word فِتْنَةٌ is…",
          "options": [
            "اِسْمُ إِنَّ",
            "خَبَرُ إِنَّ",
            "تَمْيِيْزٌ",
            "مُبْتَدَأٌ"
          ],
          "correct": 1,
          "explanation": "إِنَّ makes its اسم (الْمَالَ) منصوب; the خبر (فِتْنَةٌ) remains مرفوع."
        },
        {
          "title": "Book Exercise 18 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "اَلْحَرْفُ قِسْمَانِ — why can the dual قِسْمَانِ be the خبر of the singular اَلْحَرْفُ?",
          "options": [
            "The خبر is a noun, so it does not have to agree in number",
            "A dual may describe any singular noun",
            "اَلْحَرْفُ is actually dual",
            "It cannot — the sentence is wrong"
          ],
          "correct": 0,
          "explanation": "'Harf is two types' — a noun khabar need not match in number or gender."
        },
        {
          "title": "Book Exercise 19 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In اَلْأُخْتُ ذَاهِبَةٌ, the participle ذَاهِبَةٌ expresses which tense?",
          "options": [
            "Past",
            "Imperative",
            "Present continuous or near future — 'is going / going to go'",
            "Distant future only"
          ],
          "correct": 2,
          "explanation": "The اسم الفاعل used as a participle gives the present continuous / near future."
        },
        {
          "title": "Book Exercise 19 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "إِنَّ الْقَوْمَ مَظْلُوْمُوْنَ translates as…",
          "options": [
            "Indeed, the nation is oppressive",
            "Indeed, the nation is being oppressed / will be oppressed",
            "The nation was oppressed",
            "Indeed, the nation oppresses"
          ],
          "correct": 1,
          "explanation": "اسم المفعول participle gives the passive meaning."
        },
        {
          "title": "Book Exercise 19 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In لَيْسَ الرَّجُلُ خَاسِرًا, the participle خَاسِرًا gives which kind of verbal meaning?",
          "options": [
            "A فِعْلٌ مَجْهُوْلٌ (passive) meaning",
            "A command",
            "A past tense meaning",
            "A فِعْلٌ مَعْلُوْمٌ (active) meaning — 'losing / going to lose'"
          ],
          "correct": 3,
          "explanation": "خَاسِرٌ is an اسم الفاعل, so its participle meaning is active; لَيْسَ negates it."
        },
        {
          "title": "اَلصِّدْقُ نَجَاةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 78)",
          "sentence": "اَلصِّدْقُ نَجَاةٌ",
          "translation": "Truth is salvation.",
          "cells": [
            "اَلصِّدْقُ",
            "نَجَاةٌ"
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
          "title": "اَلْقَمَرُ آيَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 18 (Section 1, Part 1)",
          "sentence": "اَلْقَمَرُ آيَةٌ",
          "translation": "The moon is a sign.",
          "cells": [
            "اَلْقَمَرُ",
            "آيَةٌ"
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
          "title": "اَلْجُمُعَةُ عِيْدٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 18 (Section 1, Part 1)",
          "sentence": "اَلْجُمُعَةُ عِيْدٌ",
          "translation": "Friday is an Eid.",
          "cells": [
            "اَلْجُمُعَةُ",
            "عِيْدٌ"
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
          "title": "إِنَّ الْمَالَ فِتْنَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 18 (Section 1, Part 1)",
          "sentence": "إِنَّ الْمَالَ فِتْنَةٌ",
          "translation": "Indeed, wealth is a trial.",
          "cells": [
            "إِنَّ",
            "الْمَالَ",
            "فِتْنَةٌ"
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
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "كَانَ إِبْرَاهِيْمُ أُمَّةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 18 (Section 1, Part 1)",
          "sentence": "كَانَ إِبْرَاهِيْمُ أُمَّةً",
          "translation": "Ibrahim was a nation.",
          "cells": [
            "كَانَ",
            "إِبْرَاهِيْمُ",
            "أُمَّةً"
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
          "title": "لَيْسَ الْقُرْآنُ أُسْطُوْرَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 18 (Section 1, Part 1)",
          "sentence": "لَيْسَ الْقُرْآنُ أُسْطُوْرَةً",
          "translation": "The Quran is not a legend.",
          "cells": [
            "لَيْسَ",
            "الْقُرْآنُ",
            "أُسْطُوْرَةً"
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
          "title": "اَلْأُخْتُ ذَاهِبَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 19 (Section 1, Part 1)",
          "sentence": "اَلْأُخْتُ ذَاهِبَةٌ",
          "translation": "The sister is going / going to go.",
          "cells": [
            "اَلْأُخْتُ",
            "ذَاهِبَةٌ"
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
          "title": "إِنَّ الْجَدَّ مُسَافِرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 19 (Section 1, Part 1)",
          "sentence": "إِنَّ الْجَدَّ مُسَافِرٌ",
          "translation": "Indeed, the grandfather is travelling / going to travel.",
          "cells": [
            "إِنَّ",
            "الْجَدَّ",
            "مُسَافِرٌ"
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
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فِعْلٌ نَاقِصٌ",
            "حَرْفُ نَفْيٍ",
            "مُبْتَدَأٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "Eid",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Eid\"?",
          "options": [
            "عِيْدٌ",
            "مَالٌ",
            "جُنَّةٌ",
            "فَرِيْضَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "Eid",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عِيْدٌ mean?",
          "options": [
            "Eid",
            "legend, tale, myth",
            "trial, test",
            "Friday"
          ],
          "correct": 0
        },
        {
          "title": "Eid (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عِيْدٌ?",
          "options": [
            "أَعْيَادٌ",
            "جُنَنٌ",
            "مَصَائِبُ",
            "فَرَائِضُ"
          ],
          "correct": 0
        },
        {
          "title": "trial, test",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"trial, test\"?",
          "options": [
            "فِتْنَةٌ",
            "ظُلْمَةٌ",
            "نُوْرٌ",
            "مَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "trial, test",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فِتْنَةٌ mean?",
          "options": [
            "trial, test",
            "religious duty, obligation",
            "blessing",
            "shield"
          ],
          "correct": 0
        },
        {
          "title": "trial, test (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فِتْنَةٌ?",
          "options": [
            "فِتَنٌ",
            "أُمَمٌ",
            "ظُلُمَاتٌ",
            "أَقْسَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "religious duty, obligation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"religious duty, obligation\"?",
          "options": [
            "فَرِيْضَةٌ",
            "بَرَكَةٌ",
            "بُرْهَانٌ",
            "أُسْطُوْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "religious duty, obligation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَرِيْضَةٌ mean?",
          "options": [
            "religious duty, obligation",
            "Friday",
            "shield",
            "calamity"
          ],
          "correct": 0
        },
        {
          "title": "religious duty, obligation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَرِيْضَةٌ?",
          "options": [
            "فَرَائِضُ",
            "فِتَنٌ",
            "بَرَاهِيْنُ",
            "مَصَائِبُ"
          ],
          "correct": 0
        },
        {
          "title": "type",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"type\"?",
          "options": [
            "قِسْمٌ",
            "فِتْنَةٌ",
            "نِعْمَةٌ",
            "مَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "type",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِسْمٌ mean?",
          "options": [
            "type",
            "blessing",
            "Eid",
            "nation"
          ],
          "correct": 0
        },
        {
          "title": "type (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قِسْمٌ?",
          "options": [
            "أَقْسَامٌ",
            "بَرَاهِيْنُ",
            "فِتَنٌ",
            "أَمْوَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "wealth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wealth\"?",
          "options": [
            "مَالٌ",
            "ظُلْمَةٌ",
            "فِتْنَةٌ",
            "جُنَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "wealth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَالٌ mean?",
          "options": [
            "wealth",
            "light",
            "blessing",
            "Eid"
          ],
          "correct": 0
        },
        {
          "title": "wealth (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَالٌ?",
          "options": [
            "أَمْوَالٌ",
            "نِعَمٌ",
            "آيَاتٌ",
            "بَرَكَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "calamity",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"calamity\"?",
          "options": [
            "مُصِيْبَةٌ",
            "نِعْمَةٌ",
            "أُمَّةٌ",
            "فِتْنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "calamity",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُصِيْبَةٌ mean?",
          "options": [
            "calamity",
            "Friday",
            "type",
            "Eid"
          ],
          "correct": 0
        },
        {
          "title": "calamity (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُصِيْبَةٌ?",
          "options": [
            "مَصَائِبُ",
            "أَنْوَارٌ",
            "نِعَمٌ",
            "بَرَاهِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "gift",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"gift\"?",
          "options": [
            "نِعْمَةٌ",
            "فِتْنَةٌ",
            "قِسْمٌ",
            "فَرِيْضَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "gift",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نِعْمَةٌ mean?",
          "options": [
            "gift",
            "calamity",
            "wealth",
            "proof"
          ],
          "correct": 0
        },
        {
          "title": "gift (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نِعْمَةٌ?",
          "options": [
            "نِعَمٌ",
            "أَسَاطِيْرُ",
            "فِتَنٌ",
            "بَرَاهِيْنُ"
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
            "نِعْمَةٌ",
            "جُنَّةٌ",
            "عِيْدٌ"
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
            "type",
            "religious duty, obligation",
            "nation"
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
            "أَمْوَالٌ",
            "بَرَاهِيْنُ",
            "فَرَائِضُ"
          ],
          "correct": 0
        },
        {
          "title": "legend, tale, myth",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"legend, tale, myth\"?",
          "options": [
            "أُسْطُوْرَةٌ",
            "ظُلْمَةٌ",
            "بَرَكَةٌ",
            "أُمَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "legend, tale, myth",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُسْطُوْرَةٌ mean?",
          "options": [
            "legend, tale, myth",
            "nation",
            "religious duty, obligation",
            "trial, test"
          ],
          "correct": 0
        },
        {
          "title": "legend, tale, myth (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُسْطُوْرَةٌ?",
          "options": [
            "أَسَاطِيْرُ",
            "أُمَمٌ",
            "جُنَنٌ",
            "بَرَكَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "nation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"nation\"?",
          "options": [
            "أُمَّةٌ",
            "عِيْدٌ",
            "جُمُعَةٌ",
            "أُسْطُوْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "nation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أُمَّةٌ mean?",
          "options": [
            "nation",
            "type",
            "calamity",
            "darkness"
          ],
          "correct": 0
        },
        {
          "title": "nation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أُمَّةٌ?",
          "options": [
            "أُمَمٌ",
            "جُمُعَاتٌ",
            "أَعْيَادٌ",
            "آيَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "verse, sign",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"verse, sign\"?",
          "options": [
            "آيَةٌ",
            "بُرْهَانٌ",
            "فَرِيْضَةٌ",
            "جُمُعَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "verse, sign",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does آيَةٌ mean?",
          "options": [
            "verse, sign",
            "Eid",
            "calamity",
            "blessing"
          ],
          "correct": 0
        },
        {
          "title": "verse, sign (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of آيَةٌ?",
          "options": [
            "آيَاتٌ",
            "أَمْوَالٌ",
            "نِعَمٌ",
            "ظُلُمَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "blessing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"blessing\"?",
          "options": [
            "بَرَكَةٌ",
            "فَرِيْضَةٌ",
            "بُرْهَانٌ",
            "مُصِيْبَةٌ"
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
            "nation",
            "gift",
            "religious duty, obligation"
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
            "جُمُعَاتٌ",
            "فَرَائِضُ",
            "جُنَنٌ"
          ],
          "correct": 0
        },
        {
          "title": "proof",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"proof\"?",
          "options": [
            "بُرْهَانٌ",
            "جُمُعَةٌ",
            "عِيْدٌ",
            "آيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "proof",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بُرْهَانٌ mean?",
          "options": [
            "proof",
            "darkness",
            "religious duty, obligation",
            "type"
          ],
          "correct": 0
        },
        {
          "title": "proof (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بُرْهَانٌ?",
          "options": [
            "بَرَاهِيْنُ",
            "جُمُعَاتٌ",
            "أَسَاطِيْرُ",
            "مَصَائِبُ"
          ],
          "correct": 0
        },
        {
          "title": "Friday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Friday\"?",
          "options": [
            "جُمُعَةٌ",
            "بُرْهَانٌ",
            "قِسْمٌ",
            "آيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "Friday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جُمُعَةٌ mean?",
          "options": [
            "Friday",
            "darkness",
            "type",
            "verse, sign"
          ],
          "correct": 0
        },
        {
          "title": "Friday (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جُمُعَةٌ?",
          "options": [
            "جُمُعَاتٌ",
            "آيَاتٌ",
            "أَمْوَالٌ",
            "أَقْسَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "shield",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"shield\"?",
          "options": [
            "جُنَّةٌ",
            "بُرْهَانٌ",
            "نِعْمَةٌ",
            "آيَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "shield",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جُنَّةٌ mean?",
          "options": [
            "shield",
            "light",
            "trial, test",
            "calamity"
          ],
          "correct": 0
        },
        {
          "title": "shield (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جُنَّةٌ?",
          "options": [
            "جُنَنٌ",
            "جُمُعَاتٌ",
            "فِتَنٌ",
            "أَسَاطِيْرُ"
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
            "فِتْنَةٌ",
            "نِعْمَةٌ",
            "فَرِيْضَةٌ"
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
            "blessing",
            "Eid",
            "wealth"
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
            "آيَاتٌ",
            "أَنْوَارٌ",
            "بَرَكَاتٌ"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

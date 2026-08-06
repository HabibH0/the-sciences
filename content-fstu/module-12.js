// Module 12 — The خَبَرٌ, مَفْعُوْلٌ بِهِ and حَالٌ as a جُمْلَةٌ صُغْرَى (From
// the Start, Unit 5, Section 1, Parts 1-3, pp. 418-437)
//
// Converted from content-fstu-new/unit5-1-lesson1..9.js. Same conversion
// pattern as module-04..11.js (see module-04.js header comment): sections[]
// -> concepts[] (text/note -> plain line, example -> bulleted line, table ->
// {table}, inline tarkeeb -> {tarkeebDiagram}); quiz[] renamed in place;
// tarkeeb[] -> bank[] kind:'tarkeeb'; exerciseBank[] -> bank[] kind:'mcq';
// vocab[] -> 3 bank[] items per word (en-ar/ar-en/form, masdar or plural)
// via vocabType tagging. Concept exercises are freshly authored per concept
// (not lifted from the source's single lesson-level exercise, which tests
// the lesson as a whole rather than one concept at a time).

export default {
  "id": "f-sughra-khabar-hal",
  "title": "الْخَبَرُ وَالْمَفْعُوْلُ بِهِ وَالْحَالُ",
  "heading": "اَلْوَحْدَةُ الْخَامِسَةُ",
  "subheading": "اَلْقِسْمُ الْأَوَّلُ",
  "blurb": "اَلْجُمْلَةُ الصُّغْرَى: a sentence nested inside a single word's slot, and its عَائِد pronoun.",
  "lessons": [
    {
      "id": "l1",
      "title": "الجملة الصغرى والكبرى",
      "subtitle": "Introduction: جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "Introduction: Nested Sentences",
          "lines": [
            {
              "html": "The slots of a sentence can be a noun, a pronoun or a phrase: 'I love the Prophet. I love him. I like his way.' In these examples, the noun (Prophet), the pronoun (him), and the phrase (his way) become the مَفْعُوْلٌ بِهِ. Similarly, a sentence can take the place of a slot within another sentence, i.e. one sentence can be nested within another. The nested sentence can occur in two ways: 1. Directly. 2. Indirectly.",
              "list": false
            },
            {
              "html": "Directly Nested Sentence: 'He said: I wrote a book.' In this example, the sentence 'I wrote a book' fits into the slot of the مَفْعُوْلٌ بِهِ directly, without any additions. A directly nested sentence is called a جُمْلَةٌ صُغْرَى.",
              "list": false
            },
            {
              "html": "Indirectly Nested Sentence: 'I like what he wrote. I like that he wrote it properly.' In these examples, the sentences 'he wrote' and 'he wrote it properly' are preceded by the words 'what' and 'that', which then allow them to fit into the slot of the مَفْعُوْلٌ بِهِ. An indirectly nested sentence is called an اِسْمٌ مُؤَوَّلٌ.",
              "list": false
            },
            {
              "table": {
                "title": "Summary of Nested Sentences",
                "headers": [
                  "",
                  "جُمْلَةٌ صُغْرَى",
                  "اِسْمٌ مُؤَوَّلٌ"
                ],
                "rows": [
                  [
                    "Type",
                    "Directly Nested",
                    "Indirectly Nested"
                  ],
                  [
                    "Discussed in",
                    "(Section 1)",
                    "(Sections 2 and 3)"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "A sentence nested inside another sentence's slot can occur in two ways. What are they?",
            "kind": "mcq",
            "options": [
              "Directly, or indirectly (introduced by a word like 'what' or 'that')",
              "As a مُبْتَدَأٌ or as a خَبَرٌ only",
              "As a فَاعِلٌ or as a نَائِبُ الْفَاعِلِ only",
              "Only directly — there is no indirect nesting"
            ],
            "correct": 0
          }
        },
        {
          "heading": "اَلْجُمْلَةُ الصُّغْرَى and اَلْجُمْلَةُ الْكُبْرَى",
          "lines": [
            {
              "html": "A directly nested sentence is called اَلْجُمْلَةُ الصُّغْرَى. The main sentence in which the جُمْلَةٌ صُغْرَى is nested is called اَلْجُمْلَةُ الْكُبْرَى.",
              "list": false
            },
            {
              "html": "قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ — I said: The boy cried last night. — the sentence بَكَى الْوَلَدُ الْبَارِحَةَ is the جُمْلَةٌ صُغْرَى of the main sentence",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ",
                "translation": "I said: The boy cried last night.",
                "cells": [
                  "قُلْتُ",
                  "بَكَى",
                  "الْوَلَدُ",
                  "الْبَارِحَةَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلٌ وَفَاعِلٌ"
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
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 1,
                        "end": 3,
                        "role": "اَلْجُمْلَةُ الصُّغْرَى"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Rules of a جُمْلَةٌ صُغْرَى: The entire جُمْلَةٌ صُغْرَى becomes a part of the جُمْلَةٌ كُبْرَى. However, the slots of the جُمْلَةٌ صُغْرَى remain independent; the irab of each word is based on its slot within the جُمْلَةٌ صُغْرَى. In the above example, the irab of the words بَكَى, اَلْوَلَدُ and الْبَارِحَةَ are due to them being the فِعْلٌ, فَاعِلٌ and مَفْعُوْلٌ فِيْهِ of the جُمْلَةٌ صُغْرَى.",
              "list": false
            },
            {
              "html": "كَانَ الرَّجُلُ [مَرِيْضًا] — مَرِيْضًا is governed by كَانَ because it is a single word which becomes the خَبَرٌ directly.",
              "list": true,
              "bullet": true
            },
            {
              "html": "كَانَ الرَّجُلُ [وَلَدُهُ مَرِيْضٌ] — مَرِيْضٌ becomes the خَبَرٌ of وَلَدٌ, therefore it is مَرْفُوْعٌ. The entire sentence then becomes the خَبَرٌ of كَانَ.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "In قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ, what determines the إعراب of بَكَى، اَلْوَلَدُ and اَلْبَارِحَةَ؟",
            "kind": "mcq",
            "options": [
              "Their own slots within the جُمْلَةٌ الصُّغْرَى, which stays grammatically independent inside the كُبْرَى",
              "The إعراب of قُلْتُ",
              "They are all مَبْنِيّ",
              "The إعراب of the جُمْلَةٌ الْكُبْرَى's مُبْتَدَأ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Uses of a اَلْجُمْلَةُ الصُّغْرَى",
          "lines": [
            {
              "html": "A جُمْلَةٌ صُغْرَى occurs in a جُمْلَةٌ اسْمِيَّةٌ, a جُمْلَةٌ فِعْلِيَّةٌ or in a phrase. In a جُمْلَةٌ اسْمِيَّةٌ, a جُمْلَةٌ صُغْرَى occurs as: 1. خَبَرٌ. In a جُمْلَةٌ فِعْلِيَّةٌ, a جُمْلَةٌ صُغْرَى occurs as: 1. مَفْعُوْلٌ بِهِ of the verb قَالَ يَقُوْلُ قَوْلًا. 2. حَالٌ. In a phrase, a جُمْلَةٌ صُغْرَى occurs as: 1. مَعْطُوْفٌ. 2. بَدَلٌ. 3. مُضَافٌ إِلَيْهِ of some words. 4. نَعْتٌ of a نَكِرَةٌ word.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In a جُمْلَةٌ فِعْلِيَّةٌ, in which two slots can a جُمْلَةٌ صُغْرَى occur?",
            "kind": "mcq",
            "options": [
              "The مَفْعُوْلٌ بِهِ of قَالَ يَقُوْلُ قَوْلًا, and the حَالٌ",
              "The فَاعِلٌ and the نَائِبُ الْفَاعِلِ",
              "The مُبْتَدَأٌ only",
              "The تَمْيِيْزٌ and the مُسْتَثْنَى"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Nested Sentences",
        "rows": [
          {
            "label": "جُمْلَةٌ كُبْرَى",
            "arabic": "Main Sentence",
            "meaning": "The sentence in which another sentence is nested"
          },
          {
            "label": "جُمْلَةٌ صُغْرَى",
            "arabic": "Directly Nested Sentence",
            "meaning": "Fits into a slot without any additions"
          },
          {
            "label": "اِسْمٌ مُؤَوَّلٌ",
            "arabic": "Indirectly Nested Sentence",
            "meaning": "Preceded by a word such as 'what' or 'that'"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is a جُمْلَةٌ صُغْرَى?",
          "options": [
            "A sentence nested directly into a slot of another sentence, without any additions",
            "A sentence preceded by a relative pronoun",
            "A sentence with no verb",
            "The main sentence in which another sentence is nested"
          ],
          "correct": 0,
          "explanation": "A directly nested sentence is a جملة صغرى; the main sentence is the جملة كبرى."
        },
        {
          "q": "In 'I like what he wrote', the nested sentence is…",
          "options": [
            "a جُمْلَةٌ صُغْرَى, because it has no additions",
            "a جُمْلَةٌ كُبْرَى",
            "an اِسْمٌ مُؤَوَّلٌ, because the word 'what' allows it to fit into the slot",
            "a خَبَرٌ"
          ],
          "correct": 2,
          "explanation": "The word 'what' precedes the sentence — an indirectly nested sentence is an اسم مؤول."
        },
        {
          "q": "What happens to the irab of the words inside a جُمْلَةٌ صُغْرَى?",
          "options": [
            "They all become مَنْصُوْبٌ because the صغرى fills a منصوب slot",
            "The slots remain independent; each word's irab is based on its slot within the صُغْرَى",
            "They all become مَبْنِيٌّ",
            "They take the irab of the جملة كبرى's first word"
          ],
          "correct": 1,
          "explanation": "The entire صغرى becomes part of the كبرى, but internally each word keeps its own slot and irab."
        },
        {
          "q": "Why is مَرِيْضٌ مَرْفُوْعٌ in كَانَ الرَّجُلُ وَلَدُهُ مَرِيْضٌ although the sentence has كَانَ?",
          "options": [
            "Because كان does not govern anything",
            "Because مريضٌ is the فاعل of كان",
            "Because it is the خَبَرٌ of وَلَدٌ inside the جملة صغرى; the whole sentence is the خبر of كان",
            "It is a printing error — it should be مريضًا"
          ],
          "correct": 2,
          "explanation": "The صغرى's slots are independent: مريضٌ is خبر of the مبتدأ ولدُه, and the whole جملة is خبر كان."
        },
        {
          "q": "In which slots can a جُمْلَةٌ صُغْرَى occur within a phrase?",
          "options": [
            "مَعْطُوْفٌ, بَدَلٌ, مُضَافٌ إِلَيْهِ of some words, and نَعْتٌ of a نكرة word",
            "فَاعِلٌ and نَائِبُ الْفَاعِلِ",
            "مُبْتَدَأٌ only",
            "حَرْفُ جَرٍّ and مَجْرُوْرٌ"
          ],
          "correct": 0,
          "explanation": "In a جملة اسمية it occurs as خبر; in a جملة فعلية as مفعول به of قال and as حال; in a phrase as معطوف, بدل, مضاف إليه and نعت."
        }
      ],
      "bank": [
        {
          "title": "قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 419)",
          "sentence": "قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ",
          "translation": "I said: The boy cried last night.",
          "cells": [
            "قُلْتُ",
            "بَكَى",
            "الْوَلَدُ",
            "الْبَارِحَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ"
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
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "مُضَافٌ إِلَيْهِ"
          ]
        },
        {
          "title": "كَانَ الرَّجُلُ مَرِيْضًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 419)",
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
            "فَاعِلٌ",
            "مُبْتَدَأٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "كَانَ الرَّجُلُ وَلَدُهُ مَرِيْضٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 419)",
          "sentence": "كَانَ الرَّجُلُ وَلَدُهُ مَرِيْضٌ",
          "translation": "The man — his son was ill.",
          "cells": [
            "كَانَ",
            "الرَّجُلُ",
            "وَلَدُهُ",
            "مَرِيْضٌ"
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
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "نَعْتٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "قَالَ: كَتَبْتُ كِتَابًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 418), adapted",
          "sentence": "قَالَ: كَتَبْتُ كِتَابًا",
          "translation": "He said: I wrote a book.",
          "cells": [
            "قَالَ",
            "كَتَبْتُ",
            "كِتَابًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 1,
                  "end": 2,
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
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "اَللهُ رَحْمَتُهُ وَاسِعَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 421), preview",
          "sentence": "اَللهُ رَحْمَتُهُ وَاسِعَةٌ",
          "translation": "Allah's mercy is vast.",
          "cells": [
            "اَللهُ",
            "رَحْمَتُهُ",
            "وَاسِعَةٌ"
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
            "فَاعِلٌ",
            "اِسْمُ كَانَ",
            "نَعْتٌ",
            "مُضَافٌ"
          ]
        },
        {
          "title": "كَانَ الرَّجُلُ مَالُهُ كَثِيْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Part 1), preview",
          "sentence": "كَانَ الرَّجُلُ مَالُهُ كَثِيْرٌ",
          "translation": "The man — his wealth was plentiful.",
          "cells": [
            "كَانَ",
            "الرَّجُلُ",
            "مَالُهُ",
            "كَثِيْرٌ"
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
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
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
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اَلنَّهْرُ مَاؤُهُ بَارِدٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Part 1), preview",
          "sentence": "اَلنَّهْرُ مَاؤُهُ بَارِدٌ",
          "translation": "The river's water is cold.",
          "cells": [
            "اَلنَّهْرُ",
            "مَاؤُهُ",
            "بَارِدٌ"
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
            "فَاعِلٌ",
            "اِسْمُ إِنَّ",
            "نَعْتٌ",
            "مَفْعُوْلٌ بِهِ"
          ]
        },
        {
          "title": "Book text (p. 418)",
          "kind": "mcq",
          "prompt": "In 'He said: I wrote a book', the nested sentence 'I wrote a book' occupies which slot of the main sentence?",
          "options": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "فَاعِلٌ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "The quotation fits directly into the slot of the مفعول به of 'said'."
        },
        {
          "title": "Book text (p. 419)",
          "kind": "mcq",
          "prompt": "In قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ, what is the role of الْبَارِحَةَ within the جُمْلَةٌ صُغْرَى?",
          "options": [
            "مَفْعُوْلٌ بِهِ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "خَبَرٌ"
          ],
          "correct": 2,
          "explanation": "It is an adverb of time ('last night') — the مفعول فيه of the صغرى بَكَى الْوَلَدُ الْبَارِحَةَ."
        },
        {
          "title": "Book text (p. 419)",
          "kind": "mcq",
          "prompt": "Which of the following is the جُمْلَةٌ كُبْرَى in قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ?",
          "options": [
            "بَكَى الْوَلَدُ الْبَارِحَةَ only",
            "الْوَلَدُ الْبَارِحَةَ only",
            "The entire sentence قُلْتُ: بَكَى الْوَلَدُ الْبَارِحَةَ",
            "قُلْتُ only"
          ],
          "correct": 2,
          "explanation": "The كبرى is the main sentence as a whole; the nested بكى الولد البارحة is its صغرى."
        },
        {
          "title": "Book text (p. 419)",
          "kind": "mcq",
          "prompt": "Why is مَرِيْضًا مَنْصُوْبٌ in كَانَ الرَّجُلُ مَرِيْضًا?",
          "options": [
            "It is a single word which becomes the خَبَرٌ of كَانَ directly, so كان governs it",
            "It is the اسم of كان",
            "It is inside a جملة صغرى",
            "All words after كان are منصوب"
          ],
          "correct": 0,
          "explanation": "A single-word خبر is governed by كان (خبر كان = منصوب); contrast with the صغرى ولدُه مريضٌ."
        },
        {
          "title": "Book text (p. 420)",
          "kind": "mcq",
          "prompt": "As which slot does a جُمْلَةٌ صُغْرَى occur in a جُمْلَةٌ اسْمِيَّةٌ?",
          "options": [
            "خَبَرٌ",
            "مُبْتَدَأٌ",
            "نَعْتٌ",
            "فَاعِلٌ"
          ],
          "correct": 0,
          "explanation": "In a جملة اسمية, the جملة صغرى occurs as the خبر."
        },
        {
          "title": "Book text (p. 420)",
          "kind": "mcq",
          "prompt": "In a جُمْلَةٌ فِعْلِيَّةٌ, a جُمْلَةٌ صُغْرَى occurs as…",
          "options": [
            "فَاعِلٌ and مَفْعُوْلٌ مُطْلَقٌ",
            "the مَفْعُوْلٌ بِهِ of قَالَ يَقُوْلُ قَوْلًا, and as حَالٌ",
            "نَائِبُ الْفَاعِلِ only",
            "تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "The two uses in a جملة فعلية are: the quotation (مفعول به of قال) and the حال."
        }
      ]
    },
    {
      "id": "l2",
      "title": "الجملة الصغرى خبرًا",
      "subtitle": "Part 1: The خَبَرٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The خَبَرٌ as a جُمْلَةٌ صُغْرَى and the عَائِدٌ",
          "lines": [
            {
              "html": "The خَبَرٌ can occur as a جُمْلَةٌ صُغْرَى, either an اسْمِيَّةٌ or فِعْلِيَّةٌ. In both cases, the صُغْرَى must contain a pronoun which refers to the مُبْتَدَأٌ. This pronoun is called the عَائِدٌ.",
              "list": false
            },
            {
              "html": "اَللهُ رَحْمَتُهُ وَاسِعَةٌ — Allah — His mercy is vast. The pronoun (هُ), which refers to the مُبْتَدَأٌ, is the عَائِدٌ.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What must every جُمْلَةٌ صُغْرَى that is a خَبَرٌ contain?",
            "kind": "mcq",
            "options": [
              "An عَائِدٌ — a pronoun referring back to the مُبْتَدَأٌ",
              "A حَرْفُ عَطْفٍ",
              "A second مُبْتَدَأٌ",
              "A فِعْلٌ نَاقِصٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The خَبَرٌ as a جُمْلَةٌ اسْمِيَّةٌ",
          "lines": [
            {
              "html": "In the following example, a جُمْلَةٌ اسْمِيَّةٌ is becoming the خَبَرٌ of the جُمْلَةٌ كُبْرَى. In tarkib, the slots of the جُمْلَةٌ صُغْرَى are written at the very bottom in blue ink. The phrases of the جُمْلَةٌ صُغْرَى are written above its main slots. The عَائِدٌ is underlined.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَللهُ رَحْمَتُهُ وَاسِعَةٌ",
                "translation": "Allah's mercy is vast.",
                "cells": [
                  "اَللهُ",
                  "رَحْمَتُهُ",
                  "وَاسِعَةٌ"
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
                        "role": "مُضَافٌ، مُضَافٌ إِلَيْهِ"
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
                        "role": "خَبَرٌ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Translation: When the خَبَرٌ is a جُمْلَةٌ صُغْرَى, it is translated as per the following steps: 1. Translate the خَبَرٌ on its own: 'His mercy is vast.' 2. Replace the عَائِدٌ in the خَبَرٌ with the مُبْتَدَأٌ: 'Allah's mercy is vast.' Be sure not to repeat the noun and the pronoun: 'Allah's mercy is vast' (correct), 'Allah his mercy is vast' (incorrect).",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How should اَللهُ رَحْمَتُهُ وَاسِعَةٌ be translated?",
            "kind": "mcq",
            "options": [
              "'Allah's mercy is vast' — replace the عَائِدٌ with the مُبْتَدَأٌ, don't repeat both",
              "'Allah, His mercy is vast' — keep both the noun and the pronoun",
              "'His mercy is vast' — drop the مُبْتَدَأٌ entirely",
              "'Vast is the mercy of Allah'"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The خَبَرٌ as a جُمْلَةٌ فِعْلِيَّةٌ",
          "lines": [
            {
              "html": "In the following example, a جُمْلَةٌ فِعْلِيَّةٌ is becoming the خَبَرٌ of the جُمْلَةٌ كُبْرَى. In this example, the جُمْلَةٌ صُغْرَى, i.e. خَلَقَ السَّمَاءَ وَالْأَرْضَ, becomes the خَبَرٌ of the جُمْلَةٌ كُبْرَى.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "اَللهُ خَلَقَ السَّمَاءَ وَالْأَرْضَ",
                "translation": "Allah created the skies and the earth.",
                "cells": [
                  "اَللهُ",
                  "خَلَقَ",
                  "السَّمَاءَ",
                  "وَ",
                  "الْأَرْضَ"
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
                        "start": 2,
                        "end": 4,
                        "role": "مَفْعُوْلٌ بِهِ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Translation: When the خَبَرٌ is a جُمْلَةٌ فِعْلِيَّةٌ, it is translated in the same manner as when the خَبَرٌ is a جُمْلَةٌ اسْمِيَّةٌ: 1. Translate the خَبَرٌ on its own: 'He created the skies and the earth.' 2. Replace the عَائِدٌ in the خَبَرٌ with the مُبْتَدَأٌ. The عَائِدٌ in this sentence is the ضَمِيْرٌ مُسْتَتِرٌ within خَلَقَ: 'Allah created the skies and the earth.' Be sure not to repeat the noun and the pronoun: 'Allah is he created the skies and the earth' is incorrect.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In اَللهُ خَلَقَ السَّمَاءَ وَالْأَرْضَ, where is the عَائِدٌ؟",
            "kind": "mcq",
            "options": [
              "The hidden ضَمِيْرٌ مُسْتَتِرٌ (هُوَ) inside خَلَقَ",
              "السَّمَاءَ",
              "The وَ before الْأَرْضَ",
              "There is no عَائِدٌ in a فعلية خبر"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "جُمْلَةٌ صُغْرَى — خَبَرٌ",
        "rows": [
          {
            "label": "جُمْلَةٌ اسْمِيَّةٌ",
            "arabic": "زَيْدٌ وَلَدُهُ قَائِمٌ",
            "meaning": "The خبر is a nominal صغرى with an عائد"
          },
          {
            "label": "جُمْلَةٌ فِعْلِيَّةٌ — مَاضٍ",
            "arabic": "زَيْدٌ قَامَ",
            "meaning": "The خبر is a verbal صغرى (past)"
          },
          {
            "label": "جُمْلَةٌ فِعْلِيَّةٌ — مُضَارِعٌ",
            "arabic": "زَيْدٌ يَقُوْمُ",
            "meaning": "The خبر is a verbal صغرى (present/future)"
          },
          {
            "label": "عَائِدٌ",
            "arabic": "Pronoun referring to the مُبْتَدَأٌ",
            "meaning": "Required in every صغرى that is a خبر; may be a ضمير مستتر"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the عَائِدٌ?",
          "options": [
            "The pronoun within the جملة صغرى which refers back to the مُبْتَدَأٌ",
            "The first word of the جملة كبرى",
            "A particle of emphasis",
            "The definite article"
          ],
          "correct": 0,
          "explanation": "Every صغرى that is a خبر must contain an عائد referring to the مبتدأ, e.g. the هُ in اَللهُ رَحْمَتُهُ وَاسِعَةٌ."
        },
        {
          "q": "Where is the عَائِدٌ in اَللهُ خَلَقَ السَّمَاءَ وَالْأَرْضَ?",
          "options": [
            "The word السَّمَاءَ",
            "The ضَمِيْرٌ مُسْتَتِرٌ (hidden pronoun) within خَلَقَ",
            "The وَ",
            "There is no عائد in this sentence"
          ],
          "correct": 1,
          "explanation": "The hidden هُوَ inside خَلَقَ refers back to the مبتدأ اَللهُ."
        },
        {
          "q": "What is the correct translation method for اَللهُ رَحْمَتُهُ وَاسِعَةٌ?",
          "options": [
            "Translate word by word: 'Allah his mercy is vast'",
            "Translate the خبر alone, then replace the عائد with the مبتدأ: 'Allah's mercy is vast'",
            "Ignore the مبتدأ: 'His mercy is vast'",
            "Add 'indeed': 'Indeed Allah, mercy is vast'"
          ],
          "correct": 1,
          "explanation": "Do not repeat the noun and the pronoun — the عائد is replaced by the مبتدأ."
        },
        {
          "q": "In زَيْدٌ وَلَدُهُ قَائِمٌ, the خَبَرٌ of the جملة كبرى is…",
          "options": [
            "وَلَدُهُ only",
            "قَائِمٌ only",
            "the entire جملة صغرى: وَلَدُهُ قَائِمٌ",
            "زَيْدٌ"
          ],
          "correct": 2,
          "explanation": "The whole nominal sentence ولده قائم becomes the خبر of زيد."
        },
        {
          "q": "How are the slots of the جُمْلَةٌ صُغْرَى written in tarkib diagrams?",
          "options": [
            "Above the main slots in red",
            "At the very bottom in blue ink, with the عائد underlined",
            "They are not written at all",
            "In brackets after the sentence"
          ],
          "correct": 1,
          "explanation": "The صغرى's slots go at the very bottom in blue; its phrases are written above them; the عائد is underlined."
        }
      ],
      "bank": [
        {
          "title": "اَللهُ رَحْمَتُهُ وَاسِعَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 421)",
          "sentence": "اَللهُ رَحْمَتُهُ وَاسِعَةٌ",
          "translation": "Allah's mercy is vast.",
          "cells": [
            "اَللهُ",
            "رَحْمَتُهُ",
            "وَاسِعَةٌ"
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
            "فَاعِلٌ",
            "اِسْمُ إِنَّ",
            "نَعْتٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اَللهُ خَلَقَ السَّمَاءَ وَالْأَرْضَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book text (p. 423)",
          "sentence": "اَللهُ خَلَقَ السَّمَاءَ وَالْأَرْضَ",
          "translation": "Allah created the skies and the earth.",
          "cells": [
            "اَللهُ",
            "خَلَقَ",
            "السَّمَاءَ",
            "وَ",
            "الْأَرْضَ"
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
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "اِسْمُ كَانَ",
            "بَدَلٌ",
            "مَفْعُوْلٌ فِيْهِ"
          ]
        },
        {
          "title": "اَلنَّهْرُ مَاؤُهُ بَارِدٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Part 1)",
          "sentence": "اَلنَّهْرُ مَاؤُهُ بَارِدٌ",
          "translation": "The river's water is cold.",
          "cells": [
            "اَلنَّهْرُ",
            "مَاؤُهُ",
            "بَارِدٌ"
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
            "فَاعِلٌ",
            "نَعْتٌ",
            "مُضَافٌ إِلَيْهِ",
            "خَبَرُ إِنَّ"
          ]
        },
        {
          "title": "إِنَّ الْبِنْتَ ثِيَابُهَا جَدِيْدَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Part 1)",
          "sentence": "إِنَّ الْبِنْتَ ثِيَابُهَا جَدِيْدَةٌ",
          "translation": "Indeed, the girl's clothes are new.",
          "cells": [
            "إِنَّ",
            "الْبِنْتَ",
            "ثِيَابُهَا",
            "جَدِيْدَةٌ"
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
                  "end": 3,
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
            "فِعْلٌ نَاقِصٌ",
            "اِسْمُ كَانَ",
            "فَاعِلٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "كَانَ الرَّجُلُ مَالُهُ كَثِيْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Part 1)",
          "sentence": "كَانَ الرَّجُلُ مَالُهُ كَثِيْرٌ",
          "translation": "The man — his wealth was plentiful.",
          "cells": [
            "كَانَ",
            "الرَّجُلُ",
            "مَالُهُ",
            "كَثِيْرٌ"
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
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
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
            "فِعْلٌ",
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "اِسْمُ إِنَّ"
          ]
        },
        {
          "title": "اَلْكُرْسِيُّ تَحْتَهُ كَلْبٌ صَغِيْرٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Part 1)",
          "sentence": "اَلْكُرْسِيُّ تَحْتَهُ كَلْبٌ صَغِيْرٌ",
          "translation": "The chair — under it is a small dog.",
          "cells": [
            "اَلْكُرْسِيُّ",
            "تَحْتَهُ",
            "كَلْبٌ",
            "صَغِيْرٌ"
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
                  "role": "خَبَرٌ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُبْتَدَأٌ مُؤَخَّرٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ فِيْهِ",
            "حَالٌ",
            "مُضَافٌ إِلَيْهِ"
          ]
        },
        {
          "title": "أُولٰئِكَ يُؤْمِنُوْنَ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Part 1)",
          "sentence": "أُولٰئِكَ يُؤْمِنُوْنَ بِهِ",
          "translation": "Those — they believe in it.",
          "cells": [
            "أُولٰئِكَ",
            "يُؤْمِنُوْنَ",
            "بِهِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "اِسْمُ إِنَّ",
            "حَالٌ",
            "مَفْعُوْلٌ فِيْهِ"
          ]
        },
        {
          "title": "اَلْبِنْتُ اسْتَيْقَظَتْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Part 1)",
          "sentence": "اَلْبِنْتُ اسْتَيْقَظَتْ",
          "translation": "The girl woke up.",
          "cells": [
            "اَلْبِنْتُ",
            "اسْتَيْقَظَتْ"
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
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "نَائِبُ الْفَاعِلِ",
            "حَالٌ",
            "اِسْمُ كَانَ"
          ]
        },
        {
          "title": "Book Exercise 1 (Part 1)",
          "kind": "mcq",
          "prompt": "In اَلْقُرْآنُ آيَاتُهُ بَيِّنَاتٌ, what is the role of آيَاتُهُ?",
          "options": [
            "The مُبْتَدَأٌ of the جملة صغرى (which is the خبر of القرآن)",
            "The خبر of القرآن directly",
            "The فاعل of a hidden verb",
            "A نعت of القرآن"
          ],
          "correct": 0,
          "explanation": "آياته بينات is a صغرى: آياته is its مبتدأ (with the عائد ـه), بينات its خبر; the whole صغرى is the خبر of القرآن."
        },
        {
          "title": "Book Exercise 1 (Part 1)",
          "kind": "mcq",
          "prompt": "إِنَّ الشَّيْطَانَ كَيْدُهُ ضَعِيْفٌ translates as…",
          "options": [
            "Indeed, the weak plot is Shaytan's",
            "Indeed, Shaytan's plot is weak",
            "Shaytan plots weakly",
            "Indeed, Shaytan is weak"
          ],
          "correct": 1,
          "explanation": "Translate the خبر (his plot is weak), then replace the عائد with the اسم إنّ: Shaytan's plot is weak."
        },
        {
          "title": "Book Exercise 1 (Part 1)",
          "kind": "mcq",
          "prompt": "In هٰذَا الْيَتِيْمُ أُمُّهُ صَالِحَةٌ, which word is the عَائِدٌ?",
          "options": [
            "هٰذَا",
            "the هُ in أُمُّهُ",
            "صَالِحَةٌ",
            "أُمُّ"
          ],
          "correct": 1,
          "explanation": "The pronoun هُ refers back to the مبتدأ (هذا اليتيم): 'This orphan's mother is righteous.'"
        },
        {
          "title": "Book Exercise 2 (Part 1)",
          "kind": "mcq",
          "prompt": "Rewriting حَقِيْبَةُ الْوَلَدِ ثَقِيْلَةٌ with الولد as the مُبْتَدَأٌ gives…",
          "options": [
            "اَلْوَلَدُ حَقِيْبَةٌ ثَقِيْلَةٌ",
            "حَقِيْبَتُهُ الْوَلَدُ ثَقِيْلَةٌ",
            "اَلْوَلَدُ حَقِيْبَتُهُ ثَقِيْلَةٌ",
            "اَلْوَلَدُ ثَقِيْلٌ"
          ],
          "correct": 2,
          "explanation": "The مضاف إليه becomes the مبتدأ, and an عائد (ـهُ) is attached: the boy — his bag is heavy."
        },
        {
          "title": "Book Exercise 3 (Part 1)",
          "kind": "mcq",
          "prompt": "In «اَللهُ يَرْزُقُهَا وَإِيَّاكُمْ», the خَبَرٌ is…",
          "options": [
            "يَرْزُقُهَا وَإِيَّاكُمْ — a جملة فعلية صغرى with a hidden عائد in the verb",
            "اَللهُ",
            "إِيَّاكُمْ only",
            "There is no خبر — it is a جملة فعلية"
          ],
          "correct": 0,
          "explanation": "الله is the مبتدأ; the verbal sentence with its ضمير مستتر (هو) as عائد is the خبر."
        },
        {
          "title": "Book Exercise 4 (Part 1)",
          "kind": "mcq",
          "prompt": "Rewriting خَلَقَ اللهُ السَّمَاوَاتِ as a جُمْلَةٌ اسْمِيَّةٌ with الله as the مُبْتَدَأٌ gives…",
          "options": [
            "اَلسَّمَاوَاتُ خَلَقَهَا اللهُ",
            "اَللهُ خَلَقَ السَّمَاوَاتِ",
            "خَلَقَ السَّمَاوَاتِ اللهُ",
            "اَللهُ خَالِقٌ"
          ],
          "correct": 1,
          "explanation": "الله is fronted as مبتتدأ; the جملة فعلية (with its hidden عائد) becomes the خبر."
        },
        {
          "title": "Book Exercise 4 (Part 1)",
          "kind": "mcq",
          "prompt": "Rewriting خَلَقَ اللهُ السَّمَاوَاتِ with السماوات as the مُبْتَدَأٌ gives…",
          "options": [
            "اَلسَّمَاوَاتُ خَلَقَ اللهُ",
            "اَلسَّمَاوَاتُ خَلَقَهَا اللهُ",
            "اَللهُ خَلَقَ السَّمَاوَاتِ",
            "خُلِقَتِ السَّمَاوَاتُ"
          ],
          "correct": 1,
          "explanation": "When the مفعول به becomes the مبتدأ, an explicit عائد (ـهَا) must be attached to the verb."
        },
        {
          "title": "to repent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to repent\"?",
          "options": [
            "تَابَ يَتُوْبُ",
            "طَهَّرَ يُطَهِّرُ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "اِنْتَظَرَ يَنْتَظِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to repent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَابَ يَتُوْبُ mean?",
          "options": [
            "to repent",
            "to clean",
            "to rest",
            "to wait"
          ],
          "correct": 0
        },
        {
          "title": "to repent (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَابَ يَتُوْبُ?",
          "options": [
            "تَوْبَةً",
            "تَطْهِيْرًا",
            "اِسْتِرَاحَةً",
            "اِنْتِظَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to study",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to study\"?",
          "options": [
            "دَرَسَ يَدْرُسُ",
            "أَخْرَجَ يُخْرِجُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "تَابَ يَتُوْبُ"
          ],
          "correct": 0
        },
        {
          "title": "to study",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَرَسَ يَدْرُسُ mean?",
          "options": [
            "to study",
            "to take out",
            "to act proudly",
            "to repent"
          ],
          "correct": 0
        },
        {
          "title": "to study (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَرَسَ يَدْرُسُ?",
          "options": [
            "دَرْسًا",
            "إِخْرَاجًا",
            "اِسْتِكْبَارًا",
            "تَوْبَةً"
          ],
          "correct": 0
        },
        {
          "title": "to read, study",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to read, study\"?",
          "options": [
            "طَالَعَ يُطَالِعُ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "اِنْتَظَرَ يَنْتَظِرُ",
            "دَرَسَ يَدْرُسُ"
          ],
          "correct": 0
        },
        {
          "title": "to read, study",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَالَعَ يُطَالِعُ mean?",
          "options": [
            "to read, study",
            "to rest",
            "to wait",
            "to study"
          ],
          "correct": 0
        },
        {
          "title": "to read, study (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَالَعَ يُطَالِعُ?",
          "options": [
            "مُطَالَعَةً",
            "اِسْتِرَاحَةً",
            "اِنْتِظَارًا",
            "دَرْسًا"
          ],
          "correct": 0
        },
        {
          "title": "to clean",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to clean\"?",
          "options": [
            "طَهَّرَ يُطَهِّرُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "تَابَ يَتُوْبُ",
            "طَالَعَ يُطَالِعُ"
          ],
          "correct": 0
        },
        {
          "title": "to clean",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَهَّرَ يُطَهِّرُ mean?",
          "options": [
            "to clean",
            "to act proudly",
            "to repent",
            "to read, study"
          ],
          "correct": 0
        },
        {
          "title": "to clean (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَهَّرَ يُطَهِّرُ?",
          "options": [
            "تَطْهِيْرًا",
            "اِسْتِكْبَارًا",
            "تَوْبَةً",
            "مُطَالَعَةً"
          ],
          "correct": 0
        },
        {
          "title": "to take out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to take out\"?",
          "options": [
            "أَخْرَجَ يُخْرِجُ",
            "اِنْتَظَرَ يَنْتَظِرُ",
            "دَرَسَ يَدْرُسُ",
            "طَهَّرَ يُطَهِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "to take out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخْرَجَ يُخْرِجُ mean?",
          "options": [
            "to take out",
            "to wait",
            "to study",
            "to clean"
          ],
          "correct": 0
        },
        {
          "title": "to take out (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَخْرَجَ يُخْرِجُ?",
          "options": [
            "إِخْرَاجًا",
            "اِنْتِظَارًا",
            "دَرْسًا",
            "تَطْهِيْرًا"
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
            "تَابَ يَتُوْبُ",
            "طَالَعَ يُطَالِعُ",
            "أَخْرَجَ يُخْرِجُ"
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
            "to repent",
            "to read, study",
            "to take out"
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
            "تَوْبَةً",
            "مُطَالَعَةً",
            "إِخْرَاجًا"
          ],
          "correct": 0
        },
        {
          "title": "to act proudly",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to act proudly\"?",
          "options": [
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "دَرَسَ يَدْرُسُ",
            "طَهَّرَ يُطَهِّرُ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ"
          ],
          "correct": 0
        },
        {
          "title": "to act proudly",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْتَكْبَرَ يَسْتَكْبِرُ mean?",
          "options": [
            "to act proudly",
            "to study",
            "to clean",
            "to rest"
          ],
          "correct": 0
        },
        {
          "title": "to act proudly (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِسْتَكْبَرَ يَسْتَكْبِرُ?",
          "options": [
            "اِسْتِكْبَارًا",
            "دَرْسًا",
            "تَطْهِيْرًا",
            "اِسْتِرَاحَةً"
          ],
          "correct": 0
        },
        {
          "title": "to wait",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wait\"?",
          "options": [
            "اِنْتَظَرَ يَنْتَظِرُ",
            "طَالَعَ يُطَالِعُ",
            "أَخْرَجَ يُخْرِجُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "to wait",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْتَظَرَ يَنْتَظِرُ mean?",
          "options": [
            "to wait",
            "to read, study",
            "to take out",
            "to act proudly"
          ],
          "correct": 0
        },
        {
          "title": "to wait (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْتَظَرَ يَنْتَظِرُ?",
          "options": [
            "اِنْتِظَارًا",
            "مُطَالَعَةً",
            "إِخْرَاجًا",
            "اِسْتِكْبَارًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "كان مع المضارع",
      "subtitle": "Part 1: Supplement",
      "concepts": [
        {
          "heading": "Forming the Past Continuous and Past Habitual",
          "lines": [
            {
              "html": "When the past tense is coupled with a فِعْلٌ مُضَارِعٌ, together they denote the past continuous or the past habitual tense.",
              "list": false
            },
            {
              "table": {
                "title": "The Formula",
                "headers": [
                  "Past tense",
                  "+",
                  "فِعْلٌ مُضَارِعٌ",
                  "="
                ],
                "rows": [
                  [
                    "Verb, noun or context",
                    "+",
                    "Word or meaning",
                    "Past continuous / past habitual"
                  ]
                ]
              }
            },
            {
              "html": "The فِعْلٌ نَاقِصٌ of كَانَ is commonly used with a فِعْلٌ مُضَارِعٌ to give this tense. The مُضَارِع verb, together with its subject, forms a جُمْلَةٌ صُغْرَى filling the خَبَرُ كَانَ slot.",
              "list": false
            },
            {
              "html": "كَانَ زَيْدٌ يَقْرَأُ — Zaid was reading. / Zaid used to read.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "كَانَ النَّاسُ يَعْبُدُوْنَ الْأَصْنَامَ",
                "translation": "The people used to worship the idols.",
                "cells": [
                  "كَانَ",
                  "النَّاسُ",
                  "يَعْبُدُوْنَ",
                  "الْأَصْنَامَ"
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
                        "end": 3,
                        "role": "خَبَرُ كَانَ"
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
                ]
              }
            },
            {
              "html": "Some verbs will be translated as the simple past tense even if they are preceded by كَانَ. ﴿كَانُوْا يَعْلَمُوْنَ﴾ means 'They knew' ✓, not 'They used to know' ✗ — because knowing is a state rather than a repeated act.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What tense results when a past-tense element (usually كَانَ) is coupled with a فِعْلٌ مُضَارِعٌ؟",
            "kind": "mcq",
            "options": [
              "The past continuous or past habitual",
              "The simple future",
              "The present perfect",
              "The imperative"
            ],
            "correct": 0
          }
        },
        {
          "heading": "إِنَّ and كَانَ Together",
          "lines": [
            {
              "html": "Sometimes a sentence may have both إِنَّ and كَانَ. The result is three levels of nesting: إِنَّ takes a اِسْم and a خَبَر; that خَبَر is a كَانَ sentence; and كَانَ's own خَبَر is a مُضَارِع sentence.",
              "list": false
            },
            {
              "html": "إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ — Indeed, Zaid used to go to the masjid.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ",
                "translation": "Indeed, Zaid used to go to the masjid.",
                "cells": [
                  "إِنَّ",
                  "زَيْدًا",
                  "كَانَ",
                  "يَذْهَبُ",
                  "إِلَى الْمَسْجِدِ"
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
                        "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (هُوَ)"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "خَبَرُ كَانَ"
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
                        "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Notice that كَانَ here carries its own hidden اِسْم (هُوَ), referring back to زَيْدًا. That is why the diagram labels it فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ together in one cell.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ, how many levels of nesting are there?",
            "kind": "mcq",
            "options": [
              "Three — خَبَرُ إِنَّ is a كَانَ sentence, and خَبَرُ كَانَ is a مُضَارِع sentence",
              "One",
              "Two",
              "None — it is a single flat sentence"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Past Tense with a فِعْلٌ مُضَارِعٌ",
        "rows": [
          {
            "label": "The formula",
            "arabic": "مَاضٍ + مُضَارِعٌ",
            "meaning": "A past-tense element plus a مُضَارِع verb gives the past continuous or past habitual."
          },
          {
            "label": "The usual carrier",
            "arabic": "كَانَ",
            "meaning": "The فِعْلٌ نَاقِصٌ كَانَ is commonly used with a مُضَارِع verb to form this tense."
          },
          {
            "label": "Example",
            "arabic": "كَانَ زَيْدٌ يَقْرَأُ",
            "meaning": "Zaid was reading. / Zaid used to read."
          },
          {
            "label": "Its tarkib",
            "arabic": "خَبَرُ كَانَ = جُمْلَةٌ فِعْلِيَّةٌ صُغْرَى",
            "meaning": "The مُضَارِع verb with its subject forms the جُمْلَةٌ صُغْرَى in the خَبَرُ كَانَ slot."
          },
          {
            "label": "The exception",
            "arabic": "﴿كَانُوْا يَعْلَمُوْنَ﴾",
            "meaning": "Some verbs are still rendered as the simple past: 'They knew', not 'They used to know'."
          },
          {
            "label": "إِنَّ with كَانَ",
            "arabic": "إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ",
            "meaning": "Three levels of nesting: the خَبَرُ إِنَّ is a كَانَ sentence whose own خَبَر is a مُضَارِع sentence."
          }
        ]
      },
      "quiz": [
        {
          "q": "What tense results from coupling a past-tense element with a فِعْلٌ مُضَارِعٌ?",
          "options": [
            "The simple future",
            "The past continuous or past habitual",
            "The present perfect",
            "The imperative"
          ],
          "correct": 1,
          "explanation": "كَانَ زَيْدٌ يَقْرَأُ can mean either 'Zaid was reading' or 'Zaid used to read'."
        },
        {
          "q": "Which verb is most commonly used to carry the past-tense element?",
          "options": [
            "لَيْسَ",
            "صَارَ",
            "كَانَ",
            "أَصْبَحَ"
          ],
          "correct": 2,
          "explanation": "كَانَ, being a فِعْلٌ نَاقِصٌ, takes the مُضَارِع sentence as its خَبَر."
        },
        {
          "q": "In كَانَ النَّاسُ يَعْبُدُوْنَ الْأَصْنَامَ, what fills the خَبَرُ كَانَ slot?",
          "options": [
            "النَّاسُ",
            "الْأَصْنَامَ",
            "يَعْبُدُوْنَ alone",
            "The whole جُمْلَةٌ فِعْلِيَّةٌ يَعْبُدُوْنَ الْأَصْنَامَ"
          ],
          "correct": 3,
          "explanation": "The nested verbal sentence, with its own فاعل and مَفْعُوْلٌ بِهِ, is the جُمْلَةٌ صُغْرَى."
        },
        {
          "q": "Why is ﴿كَانُوْا يَعْلَمُوْنَ﴾ translated as 'They knew' rather than 'They used to know'?",
          "options": [
            "Because عَلِمَ is a state rather than a repeated act",
            "Because كَانَ is plural here",
            "Because the verb has no object",
            "Because the sentence is Quranic"
          ],
          "correct": 0,
          "explanation": "عَلِمَ describes a state rather than a repeated act, so كَانَ + مُضَارِع here means simple past ('They knew') rather than 'used to'."
        },
        {
          "q": "In إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ, how many levels of nesting are there?",
          "options": [
            "One",
            "Two",
            "Three",
            "Four"
          ],
          "correct": 2,
          "explanation": "إِنَّ's خَبَر is a كَانَ sentence, and كَانَ's خَبَر is a مُضَارِع sentence."
        },
        {
          "q": "In إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ, where is the اِسْمُ كَانَ?",
          "options": [
            "It is زَيْدًا",
            "It is a hidden هُوَ inside كَانَ, referring back to زَيْدًا",
            "It is الْمَسْجِدِ",
            "There is none"
          ],
          "correct": 1,
          "explanation": "زَيْدًا is the اِسْمُ إِنَّ; كَانَ carries its own hidden اِسْم, which is why the diagram labels both in one cell."
        }
      ],
      "bank": [
        {
          "title": "كَانَ النَّاسُ يَعْبُدُوْنَ الْأَصْنَامَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 425 (Section 1, Part 1 Supplement)",
          "sentence": "كَانَ النَّاسُ يَعْبُدُوْنَ الْأَصْنَامَ",
          "translation": "The people used to worship the idols.",
          "cells": [
            "كَانَ",
            "النَّاسُ",
            "يَعْبُدُوْنَ",
            "الْأَصْنَامَ"
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
                  "end": 3,
                  "role": "خَبَرُ كَانَ"
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
            "فَاعِلٌ",
            "مُبْتَدَأٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 426 (Section 1, Part 1 Supplement)",
          "sentence": "إِنَّ زَيْدًا كَانَ يَذْهَبُ إِلَى الْمَسْجِدِ",
          "translation": "Indeed, Zaid used to go to the masjid.",
          "cells": [
            "إِنَّ",
            "زَيْدًا",
            "كَانَ",
            "يَذْهَبُ",
            "إِلَى الْمَسْجِدِ"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (هُوَ)"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "حَالٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كَانُوْا يَظْلِمُوْنَ أَنْفُسَهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "sentence": "كَانُوْا يَظْلِمُوْنَ أَنْفُسَهُمْ",
          "translation": "They used to wrong themselves.",
          "cells": [
            "كَانُوْا",
            "يَظْلِمُوْنَ",
            "أَنْفُسَهُمْ"
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
                  "end": 2,
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
            "مُبْتَدَأٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "حَالٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "﴿كَانُوْا يَكْفُرُوْنَ بِآيَاتِ اللّٰهِ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "sentence": "﴿كَانُوْا يَكْفُرُوْنَ بِآيَاتِ اللّٰهِ﴾",
          "translation": "They used to disbelieve in the signs of Allah.",
          "cells": [
            "كَانُوْا",
            "يَكْفُرُوْنَ",
            "بِ",
            "آيَاتِ",
            "اللّٰهِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "مُبْتَدَأٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَانَ رَسُوْلُ اللّٰهِ يَخْطُبُ قَائِمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "sentence": "كَانَ رَسُوْلُ اللّٰهِ يَخْطُبُ قَائِمًا",
          "translation": "The Messenger of Allah used to deliver the sermon standing.",
          "cells": [
            "كَانَ",
            "رَسُوْلُ",
            "اللّٰهِ",
            "يَخْطُبُ",
            "قَائِمًا"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ",
            "تَمْيِيْزٌ",
            "مُبْتَدَأٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "﴿كُنْتُمْ تَسْتَكْبِرُوْنَ فِي الْأَرْضِ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "sentence": "﴿كُنْتُمْ تَسْتَكْبِرُوْنَ فِي الْأَرْضِ﴾",
          "translation": "You used to be arrogant in the land.",
          "cells": [
            "كُنْتُمْ",
            "تَسْتَكْبِرُوْنَ",
            "فِي",
            "الْأَرْضِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (تُمْ)"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 3,
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
                  "end": 3,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "كَانَ الْمُسْلِمُوْنَ يَصُوْمُوْنَ فِيْ رَمَضَانَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "sentence": "كَانَ الْمُسْلِمُوْنَ يَصُوْمُوْنَ فِيْ رَمَضَانَ",
          "translation": "The Muslims used to fast in Ramadan.",
          "cells": [
            "كَانَ",
            "الْمُسْلِمُوْنَ",
            "يَصُوْمُوْنَ",
            "فِيْ",
            "رَمَضَانَ"
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
                  "end": 4,
                  "role": "خَبَرُ كَانَ"
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
                  "end": 4,
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
                  "end": 4,
                  "role": "مَجْرُوْرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أَكَانَ الطُّلَّابُ كُلُّهُمْ يَدْرُسُوْنَ الْبَارِحَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "sentence": "أَكَانَ الطُّلَّابُ كُلُّهُمْ يَدْرُسُوْنَ الْبَارِحَةَ",
          "translation": "Were all the students studying last night?",
          "cells": [
            "أَ",
            "كَانَ",
            "الطُّلَّابُ",
            "كُلُّهُمْ",
            "يَدْرُسُوْنَ",
            "الْبَارِحَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ اِسْتِفْهَامٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ نَاقِصٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "اِسْمُ كَانَ"
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
                  "start": 2,
                  "end": 2,
                  "role": "مُؤَكَّدٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "تَأْكِيْدٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "اِسْمُ اِسْتِفْهَامٍ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنَّ إِبْرَاهِيْمَ كَانَ نَبِيًّا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "sentence": "إِنَّ إِبْرَاهِيْمَ كَانَ نَبِيًّا",
          "translation": "Indeed Ibrahim was a prophet.",
          "cells": [
            "إِنَّ",
            "إِبْرَاهِيْمَ",
            "كَانَ",
            "نَبِيًّا"
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
                  "end": 3,
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
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (هُوَ)"
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
            "فَاعِلٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "إِنِّيْ كُنْتُ أَنْتَظِرُ لَكَ فِيْ ذٰلِكَ الْمَوْضِعِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "sentence": "إِنِّيْ كُنْتُ أَنْتَظِرُ لَكَ فِيْ ذٰلِكَ الْمَوْضِعِ",
          "translation": "Indeed I was waiting for you in that place.",
          "cells": [
            "إِنَّ",
            "يْ",
            "كُنْتُ",
            "أَنْتَظِرُ",
            "لَكَ",
            "فِيْ ذٰلِكَ الْمَوْضِعِ"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (تُ)"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "خَبَرُ كَانَ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "حَالٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "إِنَّ الصَّحَابَةَ كَانُوْا يَعْتَصِمُوْنَ بِاللّٰهِ جَمِيْعًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "sentence": "إِنَّ الصَّحَابَةَ كَانُوْا يَعْتَصِمُوْنَ بِاللّٰهِ جَمِيْعًا",
          "translation": "Indeed the Companions all used to hold firmly to Allah.",
          "cells": [
            "إِنَّ",
            "الصَّحَابَةَ",
            "كَانُوْا",
            "يَعْتَصِمُوْنَ",
            "بِاللّٰهِ",
            "جَمِيْعًا"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "خَبَرُ كَانَ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَالٌ"
                }
              ]
            }
          ],
          "distractors": [
            "تَأْكِيْدٌ",
            "تَمْيِيْزٌ",
            "مُبْتَدَأٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنَّ الْأَوْلَادَ كَانُوْا يَلْعَبُوْنَ فِي الْحَدِيْقَةِ الْبَارِحَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "sentence": "إِنَّ الْأَوْلَادَ كَانُوْا يَلْعَبُوْنَ فِي الْحَدِيْقَةِ الْبَارِحَةَ",
          "translation": "Indeed the children were playing in the garden last night.",
          "cells": [
            "إِنَّ",
            "الْأَوْلَادَ",
            "كَانُوْا",
            "يَلْعَبُوْنَ",
            "فِي الْحَدِيْقَةِ",
            "الْبَارِحَةَ"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "خَبَرُ كَانَ"
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
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ",
            "حَالٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "Translate: كَانُوْا يَظْلِمُوْنَ أَنْفُسَهُمْ",
          "options": [
            "They wronged one another.",
            "They used to wrong themselves.",
            "They will wrong themselves.",
            "They were wronged by themselves."
          ],
          "correct": 1,
          "explanation": "كَانُوْا with a مُضَارِع gives the habitual reading; أَنْفُسَهُمْ is the reflexive object."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "In كَانَ رَسُوْلُ اللّٰهِ ﷺ يَخْطُبُ قَائِمًا, what is قَائِمًا?",
          "options": [
            "خَبَرُ كَانَ",
            "A حَال describing the state of the subject while delivering the sermon",
            "A تَمْيِيْز",
            "The اِسْمُ كَانَ"
          ],
          "correct": 1,
          "explanation": "The whole يَخْطُبُ قَائِمًا is the خَبَرُ كَانَ; within it, قَائِمًا is the حَال."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "In أَكَانَ الطُّلَّابُ كُلُّهُمْ يَدْرُسُوْنَ الْبَارِحَةَ؟, which two Unit 4 topics appear?",
          "options": [
            "The interrogative أَ and the quantifier كُلّ",
            "The quantifier كُلّ and a rhetorical كَمْ",
            "The حَرْفُ صِلَةٍ and a تَأْكِيْدٌ لَفْظِيٌّ",
            "The reflexive نَفْس and the interrogative مَنْ"
          ],
          "correct": 0,
          "explanation": "أَ is the polar-question particle; كُلُّهُمْ is a تَأْكِيْدٌ مَعْنَوِيٌّ on الطُّلَّابُ."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "In كَانَ ثَمُوْدُ قَوْمُ صَالِحٍ يَعْبُدُوْنَ أَصْنَامًا, what is قَوْمُ صَالِحٍ?",
          "options": [
            "خَبَرُ كَانَ",
            "مَفْعُوْلٌ بِهِ",
            "A بَدَل of ثَمُوْدُ, inside the اِسْمُ كَانَ",
            "A حَال"
          ],
          "correct": 2,
          "explanation": "The إِضَافَة restates ثَمُوْدُ in more detail, which is the job of a بَدَل."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "In إِنَّ إِبْرَاهِيْمَ كَانَ نَبِيًّا, why is there no مُضَارِع verb?",
          "options": [
            "Because كَانَ can also take a plain noun as its خَبَر",
            "Because إِبْرَاهِيْم is a proper noun",
            "Because إِنَّ blocks the مُضَارِع",
            "Because نَبِيًّا is a verb"
          ],
          "correct": 0,
          "explanation": "The past-continuous formula needs a مُضَارِع; without one, كَانَ simply states a past fact."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "In إِنِّيْ كُنْتُ أَنْتَظِرُ لَكَ فِيْ ذٰلِكَ الْمَوْضِعِ, what is the اِسْمُ إِنَّ?",
          "options": [
            "The يْ attached to إِنَّ",
            "كُنْتُ",
            "الْمَوْضِعِ",
            "There is none"
          ],
          "correct": 0,
          "explanation": "The attached pronoun is the اِسْم; كُنْتُ أَنْتَظِرُ… is the خَبَر, itself a كَانَ sentence."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "In إِنَّ الصَّحَابَةَ كَانُوْا يَعْتَصِمُوْنَ بِاللّٰهِ جَمِيْعًا, what is جَمِيْعًا?",
          "options": [
            "A تَأْكِيْد of الصَّحَابَةَ",
            "A حَال describing the state of the subject",
            "A مَفْعُوْلٌ بِهِ",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "Standing alone as a نَكِرَة مَنْصُوْب, جَمِيْعًا is labelled a حَال, as Unit 4.2 established."
        },
        {
          "title": "Book Exercise 6 (Section 1, Part 1 Supplement)",
          "kind": "mcq",
          "prompt": "In إِنَّ الْمُرْسَلِيْنَ كُلَّهُمْ كَانُوْا يَدْعُوْنَ إِلَى اللّٰهِ, why is كُلَّ مَنْصُوْب?",
          "options": [
            "Because it agrees with الْمُرْسَلِيْنَ, the اِسْمُ إِنَّ",
            "Because كَانُوْا makes it مَنْصُوْب",
            "Because اللّٰه is مَجْرُوْر",
            "Because كُلّ is always مَنْصُوْب"
          ],
          "correct": 0,
          "explanation": "The مُؤَكَّد and تَأْكِيْد must share the same state, and the اِسْمُ إِنَّ is مَنْصُوْب."
        },
        {
          "title": "idol",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"idol\"?",
          "options": [
            "صَنَمٌ",
            "مُفْسِدٌ",
            "ظُهْرٌ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ"
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
            "corrupter",
            "noon, midday",
            "to rest"
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
            "مُفْسِدُوْنَ",
            "إِبِلٌ",
            "حَمِيْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "camel",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"camel\"?",
          "options": [
            "جَمَلٌ",
            "مَوْضِعٌ",
            "الْبَارِحَةَ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "camel",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جَمَلٌ mean?",
          "options": [
            "camel",
            "place",
            "last night",
            "to be arrogant"
          ],
          "correct": 0
        },
        {
          "title": "camel (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جَمَلٌ?",
          "options": [
            "إِبِلٌ",
            "مَوَاضِعُ",
            "حَمِيْرٌ",
            "أَصْنَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "donkey",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"donkey\"?",
          "options": [
            "حِمَارٌ",
            "ظُهْرٌ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "أَفْسَدَ يُفْسِدُ"
          ],
          "correct": 0
        },
        {
          "title": "donkey",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حِمَارٌ mean?",
          "options": [
            "donkey",
            "noon, midday",
            "to rest",
            "to spread corruption"
          ],
          "correct": 0
        },
        {
          "title": "donkey (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حِمَارٌ?",
          "options": [
            "حَمِيْرٌ",
            "أَصْنَامٌ",
            "مُفْسِدُوْنَ",
            "إِبِلٌ"
          ],
          "correct": 0
        },
        {
          "title": "corrupter",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"corrupter\"?",
          "options": [
            "مُفْسِدٌ",
            "الْبَارِحَةَ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "اِنْتَظَرَ يَنْتَظِرُ"
          ],
          "correct": 0
        },
        {
          "title": "corrupter",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُفْسِدٌ mean?",
          "options": [
            "corrupter",
            "last night",
            "to be arrogant",
            "to wait for"
          ],
          "correct": 0
        },
        {
          "title": "corrupter (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُفْسِدٌ?",
          "options": [
            "مُفْسِدُوْنَ",
            "إِبِلٌ",
            "مَوَاضِعُ",
            "أَصْنَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "place",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"place\"?",
          "options": [
            "مَوْضِعٌ",
            "اِسْتَرَاحَ يَسْتَرِيْحُ",
            "أَفْسَدَ يُفْسِدُ",
            "طَالَعَ يُطَالِعُ"
          ],
          "correct": 0
        },
        {
          "title": "place",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَوْضِعٌ mean?",
          "options": [
            "place",
            "to rest",
            "to spread corruption",
            "to study, read over"
          ],
          "correct": 0
        },
        {
          "title": "place (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَوْضِعٌ?",
          "options": [
            "مَوَاضِعُ",
            "حَمِيْرٌ",
            "أَصْنَامٌ",
            "إِبِلٌ"
          ],
          "correct": 0
        },
        {
          "title": "noon, midday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"noon, midday\"?",
          "options": [
            "ظُهْرٌ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "اِنْتَظَرَ يَنْتَظِرُ",
            "صَنَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "noon, midday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظُهْرٌ mean?",
          "options": [
            "noon, midday",
            "to be arrogant",
            "to wait for",
            "idol"
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
            "أَفْسَدَ يُفْسِدُ",
            "طَالَعَ يُطَالِعُ",
            "جَمَلٌ"
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
            "to spread corruption",
            "to study, read over",
            "camel"
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
            "اِنْتَظَرَ يَنْتَظِرُ",
            "صَنَمٌ",
            "حِمَارٌ"
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
            "to wait for",
            "idol",
            "donkey"
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
            "إِفْسَادًا",
            "مُطَالَعَةً",
            "اِسْتِكْبَارًا"
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
            "طَالَعَ يُطَالِعُ",
            "جَمَلٌ",
            "مُفْسِدٌ"
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
            "to study, read over",
            "camel",
            "corrupter"
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
            "اِنْتِظَارًا",
            "اِسْتِرَاحَةً",
            "إِفْسَادًا"
          ],
          "correct": 0
        },
        {
          "title": "to spread corruption",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to spread corruption\"?",
          "options": [
            "أَفْسَدَ يُفْسِدُ",
            "صَنَمٌ",
            "حِمَارٌ",
            "مَوْضِعٌ"
          ],
          "correct": 0
        },
        {
          "title": "to spread corruption",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَفْسَدَ يُفْسِدُ mean?",
          "options": [
            "to spread corruption",
            "idol",
            "donkey",
            "place"
          ],
          "correct": 0
        },
        {
          "title": "to spread corruption (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَفْسَدَ يُفْسِدُ?",
          "options": [
            "إِفْسَادًا",
            "مُطَالَعَةً",
            "اِسْتِكْبَارًا",
            "اِسْتِرَاحَةً"
          ],
          "correct": 0
        },
        {
          "title": "to wait for",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to wait for\"?",
          "options": [
            "اِنْتَظَرَ يَنْتَظِرُ",
            "جَمَلٌ",
            "مُفْسِدٌ",
            "ظُهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to wait for",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْتَظَرَ يَنْتَظِرُ mean?",
          "options": [
            "to wait for",
            "camel",
            "corrupter",
            "noon, midday"
          ],
          "correct": 0
        },
        {
          "title": "to wait for (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْتَظَرَ يَنْتَظِرُ?",
          "options": [
            "اِنْتِظَارًا",
            "اِسْتِرَاحَةً",
            "إِفْسَادًا",
            "اِسْتِكْبَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to study, read over",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to study, read over\"?",
          "options": [
            "طَالَعَ يُطَالِعُ",
            "حِمَارٌ",
            "مَوْضِعٌ",
            "الْبَارِحَةَ"
          ],
          "correct": 0
        },
        {
          "title": "to study, read over",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَالَعَ يُطَالِعُ mean?",
          "options": [
            "to study, read over",
            "donkey",
            "place",
            "last night"
          ],
          "correct": 0
        },
        {
          "title": "to study, read over (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَالَعَ يُطَالِعُ?",
          "options": [
            "مُطَالَعَةً",
            "اِسْتِكْبَارًا",
            "اِنْتِظَارًا",
            "اِسْتِرَاحَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "ضمير الشأن",
      "subtitle": "Part 1: The خَبَرٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Anticipatory Pronoun — ضَمِيْرُ الشَّأْنِ",
          "lines": [
            {
              "html": "In English, we sometimes use the word 'it' to introduce or anticipate the subject or object of a sentence — as in 'It is good that she is studying more'. Here the pronoun 'it' has no subject to which it refers. This is known as an anticipatory pronoun.",
              "list": false
            },
            {
              "html": "Similarly, in Arabic the pronoun هُوَ or هِيَ, or their مَنْصُوْب equivalents إِنَّهُ or إِنَّهَا, can be used as anticipatory pronouns. The masculine form is called ضَمِيْرُ الشَّأْنِ; the feminine form is called ضَمِيْرُ الْقِصَّةِ.",
              "list": false
            },
            {
              "html": "In Arabic, the anticipatory pronouns allude to the importance of the subsequent statement. This is translated in various ways, and sometimes it is left untranslated altogether.",
              "list": false
            },
            {
              "html": "هُوَ اللّٰهُ أَحَدٌ — [The truth] is that Allah is One.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "هُوَ اللّٰهُ أَحَدٌ",
                "translation": "[The truth] is that Allah is One.",
                "cells": [
                  "هُوَ",
                  "اللّٰهُ",
                  "أَحَدٌ"
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
              "html": "The whole nested sentence اللّٰهُ أَحَدٌ is the جُمْلَةٌ صُغْرَى filling the خَبَر slot of the anticipatory هُوَ. Unlike an ordinary مُبْتَدَأ pronoun, this هُوَ points forward rather than back.",
              "list": false
            },
            {
              "html": "إِنَّهُ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ — Indeed, the month of Ramadan is a blessed month.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "What is ضَمِيْرُ الشَّأْنِ / ضَمِيْرُ الْقِصَّةِ؟",
            "kind": "mcq",
            "options": [
              "An anticipatory pronoun (هُوَ/هِيَ or إِنَّهُ/إِنَّهَا) that introduces the sentence to come, rather than referring back to anything",
              "A pronoun that always refers back to the مُبْتَدَأٌ",
              "The عَائِدٌ of a نَعْتٌ sentence",
              "A pronoun used only in questions"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Distinguishing a مُبْتَدَأ from a مُقَدَّم Slot",
          "lines": [
            {
              "html": "If an اِسْم comes at the beginning of a sentence, it could either be a مُبْتَدَأ or a مُقَدَّم slot. When the word is مُعْرَب, the irab shows its function.",
              "list": false
            },
            {
              "table": {
                "title": "When the Irab Is Visible",
                "headers": [
                  "Sentence",
                  "Analysis"
                ],
                "rows": [
                  [
                    "زَيْدًا رَأَيْتُ",
                    "زَيْدًا is مَنْصُوْب, so it is the مَفْعُوْلٌ بِهِ مُقَدَّمٌ."
                  ],
                  [
                    "زَيْدٌ رَأَيْتُهُ",
                    "زَيْدٌ is مَرْفُوْع, so it is the مُبْتَدَأ — the verb already has its own object, the هُ."
                  ]
                ]
              }
            },
            {
              "html": "However, if the first word is مَبْنِيّ, the irab will not be apparent. To determine whether it is a مُبْتَدَأ or a مَفْعُوْلٌ بِهِ مُقَدَّمٌ, we analyse the sentence in more detail: if the verb after the noun has an عَائِد referring to the مَفْعُوْلٌ بِهِ, the first word is the مُبْتَدَأ; if it has no عَائِد, it becomes a مُقَدَّم slot.",
              "list": false
            },
            {
              "table": {
                "title": "When the Irab Is Hidden",
                "headers": [
                  "Sentence",
                  "عَائِد present?",
                  "Role of the first word"
                ],
                "rows": [
                  [
                    "مُوْسَى رَأَيْتُ",
                    "No",
                    "مَفْعُوْلٌ بِهِ مُقَدَّمٌ — deemed مَنْصُوْب"
                  ],
                  [
                    "مُوْسَى رَأَيْتُهُ",
                    "Yes (the هُ)",
                    "مُبْتَدَأٌ — deemed مَرْفُوْع"
                  ]
                ]
              }
            },
            {
              "html": "This rule is used to determine the grammatical function of other مَبْنِيّ nouns too, such as the أَسْمَاءُ الْاِسْتِفْهَامِ.",
              "list": false
            },
            {
              "html": "مَنْ رَأَيْتَ؟ / مَنْ رَأَيْتَهُ؟ — Who did you see? — the second has an عَائِد, so مَنْ is the مُبْتَدَأ.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The فَاعِل does not occur as a مُقَدَّم. If a مَرْفُوْع noun occurs first, it will be labelled a مُبْتَدَأ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When the first word of a sentence is مَبْنِيّ and shows no irab, how do you tell whether it is a مُبْتَدَأٌ or a مَفْعُوْلٌ بِهِ مُقَدَّمٌ؟",
            "kind": "mcq",
            "options": [
              "Check whether the following verb has an عَائِدٌ referring back to it — if so it's the مُبْتَدَأٌ, if not it's the مُقَدَّم",
              "Check its gender",
              "A مَبْنِيّ word is always the مُبْتَدَأٌ",
              "Check whether it has tanween"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The Anticipatory Pronoun and the مُبْتَدَأ / مُقَدَّم Test",
        "rows": [
          {
            "label": "What it is",
            "arabic": "ضَمِيْرُ الشَّأْنِ / ضَمِيْرُ الْقِصَّةِ",
            "meaning": "An anticipatory pronoun — هُوَ or هِيَ, or إِنَّهُ / إِنَّهَا — that introduces the statement to come."
          },
          {
            "label": "What it signals",
            "arabic": "أَهَمِّيَّةُ الْجُمْلَةِ التَّالِيَةِ",
            "meaning": "It alludes to the importance of the subsequent statement; it may be translated variously or left untranslated."
          },
          {
            "label": "Example",
            "arabic": "هُوَ اللّٰهُ أَحَدٌ",
            "meaning": "The nested sentence اللّٰهُ أَحَدٌ is the جُمْلَةٌ صُغْرَى filling the خَبَر slot."
          },
          {
            "label": "When the irab is visible",
            "arabic": "زَيْدًا رَأَيْتُ ↔ زَيْدٌ رَأَيْتُهُ",
            "meaning": "مَنْصُوْب means مَفْعُوْلٌ بِهِ مُقَدَّمٌ; مَرْفُوْع means مُبْتَدَأ."
          },
          {
            "label": "When the word is مَبْنِيّ",
            "arabic": "اُنْظُرْ إِلَى الْعَائِدِ",
            "meaning": "An عَائِد referring to the object means the first word is the مُبْتَدَأ; no عَائِد means it is a مُقَدَّم slot."
          },
          {
            "label": "The فَاعِل exception",
            "arabic": "لَا يَتَقَدَّمُ الْفَاعِلُ",
            "meaning": "The فَاعِل does not occur as a مُقَدَّم; a مَرْفُوْع noun coming first is always a مُبْتَدَأ."
          }
        ]
      },
      "quiz": [
        {
          "q": "What is an anticipatory pronoun?",
          "options": [
            "One which introduces or anticipates the subject or object rather than referring back to anything",
            "One which always comes last in the sentence",
            "One which replaces a verb",
            "One which must be مَنْصُوْب"
          ],
          "correct": 0,
          "explanation": "English 'It is good that she is studying more' uses the same device."
        },
        {
          "q": "What are the masculine and feminine anticipatory pronouns called?",
          "options": [
            "ضَمِيْرُ الْفَصْلِ and ضَمِيْرُ الْوَصْلِ",
            "ضَمِيْرُ الشَّأْنِ and ضَمِيْرُ الْقِصَّةِ",
            "ضَمِيْرٌ مُسْتَتِرٌ and ضَمِيْرٌ بَارِزٌ",
            "ضَمِيْرٌ مُتَّصِلٌ and ضَمِيْرٌ مُنْفَصِلٌ"
          ],
          "correct": 1,
          "explanation": "هُوَ / إِنَّهُ is the ضَمِيْرُ الشَّأْنِ; هِيَ / إِنَّهَا is the ضَمِيْرُ الْقِصَّةِ."
        },
        {
          "q": "What does an anticipatory pronoun signal in Arabic?",
          "options": [
            "That the sentence is a question",
            "That the verb is past tense",
            "The importance of the statement that follows",
            "That the subject is feminine"
          ],
          "correct": 2,
          "explanation": "It may be translated in various ways, or left untranslated entirely."
        },
        {
          "q": "In زَيْدٌ رَأَيْتُهُ, why can زَيْدٌ not be the مَفْعُوْلٌ بِهِ مُقَدَّمٌ?",
          "options": [
            "Because the verb already has its own مَفْعُوْلٌ بِهِ — the هُ",
            "Because زَيْدٌ is a proper noun",
            "Because رَأَى is intransitive",
            "Because زَيْدٌ has tanween"
          ],
          "correct": 0,
          "explanation": "Its مَرْفُوْع ending confirms this: it is the مُبْتَدَأ, and the verbal sentence is its خَبَر."
        },
        {
          "q": "How do you tell a مُبْتَدَأ from a مُقَدَّم slot when the first word is مَبْنِيّ?",
          "options": [
            "By the tense of the verb",
            "By whether the verb after it has an عَائِد referring to the object",
            "By the gender of the noun",
            "It cannot be determined"
          ],
          "correct": 1,
          "explanation": "مُوْسَى رَأَيْتُهُ has an عَائِد, so مُوْسَى is the مُبْتَدَأ; مُوْسَى رَأَيْتُ has none, so it is the fronted object."
        },
        {
          "q": "Why can a مَرْفُوْع noun at the start of a sentence never be a مُقَدَّم?",
          "options": [
            "Because مَرْفُوْع nouns cannot begin sentences",
            "Because the فَاعِل does not occur as a مُقَدَّم, so a fronted مَرْفُوْع noun is labelled a مُبْتَدَأ",
            "Because it would need an عَائِد",
            "Because a مُقَدَّم must be مَجْرُوْر"
          ],
          "correct": 1,
          "explanation": "The فَاعِل never occurs as a مُقَدَّم, so a fronted مَرْفُوْع noun at the start of a sentence must be labelled a مُبْتَدَأ instead."
        }
      ],
      "bank": [
        {
          "title": "هُوَ اللّٰهُ أَحَدٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 427 (Section 1, Part 1)",
          "sentence": "هُوَ اللّٰهُ أَحَدٌ",
          "translation": "[The truth] is that Allah is One.",
          "cells": [
            "هُوَ",
            "اللّٰهُ",
            "أَحَدٌ"
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
            "ضَمِيْرُ الْفَصْلِ",
            "خَبَرٌ مُقَدَّمٌ",
            "تَأْكِيْدٌ",
            "فَاعِلٌ"
          ]
        },
        {
          "title": "هِيَ السَّاعَةُ يَوْمٌ عَظِيْمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 1)",
          "sentence": "هِيَ السَّاعَةُ يَوْمٌ عَظِيْمٌ",
          "translation": "[The matter] is that the Hour is a mighty day.",
          "cells": [
            "هِيَ",
            "السَّاعَةُ",
            "يَوْمٌ",
            "عَظِيْمٌ"
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
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "ضَمِيْرُ الْفَصْلِ",
            "خَبَرٌ مُقَدَّمٌ",
            "تَأْكِيْدٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "هُوَ الْقُرْآنُ مَوْعِظَةٌ وَشِفَاءٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 1)",
          "sentence": "هُوَ الْقُرْآنُ مَوْعِظَةٌ وَشِفَاءٌ",
          "translation": "[The truth] is that the Quran is an admonition and a healing.",
          "cells": [
            "هُوَ",
            "الْقُرْآنُ",
            "مَوْعِظَةٌ",
            "وَ",
            "شِفَاءٌ"
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
                  "start": 1,
                  "end": 1,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 2,
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
            "ضَمِيْرُ الْفَصْلِ",
            "تَأْكِيْدٌ",
            "نَعْتٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "إِنَّهُ يَوْمُ الْجُمُعَةِ يَوْمُ الْعِيْدِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 1)",
          "sentence": "إِنَّهُ يَوْمُ الْجُمُعَةِ يَوْمُ الْعِيْدِ",
          "translation": "Indeed, Friday is the day of Eid.",
          "cells": [
            "إِنَّ",
            "هُ",
            "يَوْمُ الْجُمُعَةِ",
            "يَوْمُ الْعِيْدِ"
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
                  "role": "اِسْمُ إِنَّ (ضَمِيْرُ الشَّأْنِ)"
                },
                {
                  "start": 2,
                  "end": 3,
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
            "ضَمِيْرُ الْفَصْلِ",
            "مُضَافٌ إِلَيْهِ",
            "تَأْكِيْدٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنَّهُ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 1)",
          "sentence": "إِنَّهُ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ",
          "translation": "Indeed, the month of Ramadan is a blessed month.",
          "cells": [
            "إِنَّ",
            "هُ",
            "شَهْرُ رَمَضَانَ",
            "شَهْرٌ",
            "مُبَارَكٌ"
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
                  "role": "اِسْمُ إِنَّ (ضَمِيْرُ الشَّأْنِ)"
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
                  "start": 3,
                  "end": 3,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "نَعْتٌ"
                }
              ]
            }
          ],
          "distractors": [
            "ضَمِيْرُ الْفَصْلِ",
            "تَأْكِيْدٌ",
            "بَدَلٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "زَيْدًا رَأَيْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 428 (Section 1, Part 1)",
          "sentence": "زَيْدًا رَأَيْتُ",
          "translation": "It was Zaid whom I saw.",
          "cells": [
            "زَيْدًا",
            "رَأَيْتُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "زَيْدٌ رَأَيْتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 428 (Section 1, Part 1)",
          "sentence": "زَيْدٌ رَأَيْتُهُ",
          "translation": "Zaid — I saw him.",
          "cells": [
            "زَيْدٌ",
            "رَأَيْتُ",
            "هُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ (عَائِدٌ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ مُقَدَّمٌ",
            "فَاعِلٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "مُوْسَى رَأَيْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 428 (Section 1, Part 1)",
          "sentence": "مُوْسَى رَأَيْتُ",
          "translation": "It was Musa whom I saw.",
          "cells": [
            "مُوْسَى",
            "رَأَيْتُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "فَاعِلٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "مُوْسَى رَأَيْتُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 428 (Section 1, Part 1)",
          "sentence": "مُوْسَى رَأَيْتُهُ",
          "translation": "Musa — I saw him.",
          "cells": [
            "مُوْسَى",
            "رَأَيْتُ",
            "هُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ (عَائِدٌ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ مُقَدَّمٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "مَنْ رَأَيْتَ؟",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 428 (Section 1, Part 1)",
          "sentence": "مَنْ رَأَيْتَ؟",
          "translation": "Who did you see?",
          "cells": [
            "مَنْ",
            "رَأَيْتَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                }
              ]
            }
          ],
          "distractors": [
            "مُبْتَدَأٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "فَاعِلٌ",
            "حَالٌ مُقَدَّمٌ"
          ]
        },
        {
          "title": "مَنْ رَأَيْتَهُ؟",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 428 (Section 1, Part 1)",
          "sentence": "مَنْ رَأَيْتَهُ؟",
          "translation": "Who did you see?",
          "cells": [
            "مَنْ",
            "رَأَيْتَ",
            "هُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ (عَائِدٌ)"
                }
              ]
            }
          ],
          "distractors": [
            "مَفْعُوْلٌ بِهِ مُقَدَّمٌ",
            "خَبَرٌ مُقَدَّمٌ",
            "فَاعِلٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "هُوَ اللّٰهُ رَبُّنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 7 (Section 1, Part 1)",
          "sentence": "هُوَ اللّٰهُ رَبُّنَا",
          "translation": "[The truth] is that Allah is our Lord.",
          "cells": [
            "هُوَ",
            "اللّٰهُ",
            "رَبُّ",
            "نَا"
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
            "ضَمِيْرُ الْفَصْلِ",
            "خَبَرٌ مُقَدَّمٌ",
            "تَأْكِيْدٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In هِيَ السَّاعَةُ يَوْمٌ عَظِيْمٌ, what is the role of هِيَ?",
          "options": [
            "The مُبْتَدَأ, anticipating the sentence that follows",
            "The خَبَر",
            "A ضَمِيْرُ الْفَصْلِ",
            "A تَأْكِيْد for السَّاعَةُ"
          ],
          "correct": 0,
          "explanation": "It is the ضَمِيْرُ الْقِصَّةِ; السَّاعَةُ يَوْمٌ عَظِيْمٌ is the جُمْلَةٌ صُغْرَى filling its خَبَر slot."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In هُوَ الْقُرْآنُ مَوْعِظَةٌ وَشِفَاءٌ, which words form the خَبَر of هُوَ?",
          "options": [
            "الْقُرْآنُ alone",
            "مَوْعِظَةٌ alone",
            "The whole nested sentence الْقُرْآنُ مَوْعِظَةٌ وَشِفَاءٌ",
            "وَشِفَاءٌ alone"
          ],
          "correct": 2,
          "explanation": "An anticipatory pronoun always takes a full nested sentence as its خَبَر."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In إِنَّهُ يَوْمُ الْجُمُعَةِ يَوْمُ الْعِيْدِ, what is the هُ attached to إِنَّ?",
          "options": [
            "The خَبَرُ إِنَّ",
            "The اِسْمُ إِنَّ, functioning as a ضَمِيْرُ الشَّأْنِ",
            "A مُضَافٌ إِلَيْهِ",
            "A تَأْكِيْد"
          ],
          "correct": 1,
          "explanation": "إِنَّهُ is the مَنْصُوْب equivalent of the anticipatory هُوَ."
        },
        {
          "title": "Book Exercise 7 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In إِنَّهُ شَهْرُ رَمَضَانَ شَهْرٌ مُبَارَكٌ, why is شَهْرُ رَمَضَانَ مَرْفُوْع rather than مَنْصُوْب?",
          "options": [
            "Because it is the مُبْتَدَأ of the nested جُمْلَةٌ صُغْرَى, not the اِسْمُ إِنَّ",
            "Because رَمَضَان is a proper noun",
            "Because إِنَّ does not affect إِضَافَة structures",
            "Because مُبَارَكٌ is مَرْفُوْع"
          ],
          "correct": 0,
          "explanation": "The اِسْمُ إِنَّ is the anticipatory هُ; everything after it is a nested sentence with its own irab."
        },
        {
          "title": "Book p. 428 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "In مُوْسَى رَأَيْتُ, what is the role of مُوْسَى?",
          "options": [
            "مُبْتَدَأٌ",
            "مَفْعُوْلٌ بِهِ مُقَدَّمٌ, deemed مَنْصُوْب",
            "فَاعِلٌ",
            "خَبَرٌ مُقَدَّمٌ"
          ],
          "correct": 1,
          "explanation": "There is no عَائِد after it, so the fronted noun fills the object slot."
        },
        {
          "title": "Book p. 428 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "How does مَنْ رَأَيْتَهُ؟ differ in analysis from مَنْ رَأَيْتَ؟",
          "options": [
            "In the first مَنْ is the مُبْتَدَأ because of the عَائِد; in the second it is the fronted object",
            "The first is a statement",
            "The second has no verb",
            "They are analysed identically"
          ],
          "correct": 0,
          "explanation": "Both translate as 'Who did you see?', but the presence of the هُ changes the tarkib."
        },
        {
          "title": "Book p. 428 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "Why does the irab of زَيْدٌ / زَيْدًا settle the question immediately?",
          "options": [
            "Because زَيْد is مَبْنِيّ",
            "Because زَيْد is a proper noun",
            "Because زَيْد is مُعْرَب, so its ending shows its function directly",
            "Because زَيْد cannot be an object"
          ],
          "correct": 2,
          "explanation": "The عَائِد test is only needed when the first word is مَبْنِيّ and shows no ending."
        },
        {
          "title": "Book p. 428 (Section 1, Part 1)",
          "kind": "mcq",
          "prompt": "Which category of words does the عَائِد test also apply to?",
          "options": [
            "أَسْمَاءُ الْاِسْتِفْهَامِ, which are مَبْنِيّ",
            "The أَحْرُفُ الْجَوَابِ",
            "The quantifiers",
            "Verbs in the past tense"
          ],
          "correct": 0,
          "explanation": "مَنْ, مَا and the rest show no irab, so the presence of an عَائِد decides their slot."
        },
        {
          "title": "the Hour, Judgement Day",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"the Hour, Judgement Day\"?",
          "options": [
            "السَّاعَةُ",
            "مُبَارَكٌ",
            "عَظِيْمٌ",
            "شَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "the Hour, Judgement Day",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does السَّاعَةُ mean?",
          "options": [
            "the Hour, Judgement Day",
            "blessed",
            "great, mighty",
            "month"
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
            "يَوْمُ الْجُمُعَةِ",
            "أَحَدٌ",
            "عَائِدٌ"
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
            "Friday",
            "one, unique",
            "returning pronoun"
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
            "قِصَصٌ",
            "أَشْهُرٌ",
            "عِظَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "healing, cure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"healing, cure\"?",
          "options": [
            "شِفَاءٌ",
            "عَظِيْمٌ",
            "شَهْرٌ",
            "شَأْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "healing, cure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شِفَاءٌ mean?",
          "options": [
            "healing, cure",
            "great, mighty",
            "month",
            "matter, affair"
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
            "أَحَدٌ",
            "عَائِدٌ",
            "قِصَّةٌ"
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
            "one, unique",
            "returning pronoun",
            "story, account"
          ],
          "correct": 0
        },
        {
          "title": "Friday",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Friday\"?",
          "options": [
            "يَوْمُ الْجُمُعَةِ",
            "شَهْرٌ",
            "شَأْنٌ",
            "رَأَى يَرَى"
          ],
          "correct": 0
        },
        {
          "title": "Friday",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does يَوْمُ الْجُمُعَةِ mean?",
          "options": [
            "Friday",
            "month",
            "matter, affair",
            "to see"
          ],
          "correct": 0
        },
        {
          "title": "great, mighty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"great, mighty\"?",
          "options": [
            "عَظِيْمٌ",
            "عَائِدٌ",
            "قِصَّةٌ",
            "السَّاعَةُ"
          ],
          "correct": 0
        },
        {
          "title": "great, mighty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَظِيْمٌ mean?",
          "options": [
            "great, mighty",
            "returning pronoun",
            "story, account",
            "the Hour, Judgement Day"
          ],
          "correct": 0
        },
        {
          "title": "great, mighty (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَظِيْمٌ?",
          "options": [
            "عِظَامٌ",
            "قِصَصٌ",
            "أَشْهُرٌ",
            "مَوَاعِظُ"
          ],
          "correct": 0
        },
        {
          "title": "one, unique",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one, unique\"?",
          "options": [
            "أَحَدٌ",
            "شَأْنٌ",
            "رَأَى يَرَى",
            "مَوْعِظَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "one, unique",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحَدٌ mean?",
          "options": [
            "one, unique",
            "matter, affair",
            "to see",
            "admonition"
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
            "قِصَّةٌ",
            "السَّاعَةُ",
            "شِفَاءٌ"
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
            "story, account",
            "the Hour, Judgement Day",
            "healing, cure"
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
            "عِظَامٌ",
            "قِصَصٌ",
            "مَوَاعِظُ"
          ],
          "correct": 0
        },
        {
          "title": "returning pronoun",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"returning pronoun\"?",
          "options": [
            "عَائِدٌ",
            "رَأَى يَرَى",
            "مَوْعِظَةٌ",
            "مُبَارَكٌ"
          ],
          "correct": 0
        },
        {
          "title": "returning pronoun",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَائِدٌ mean?",
          "options": [
            "returning pronoun",
            "to see",
            "admonition",
            "blessed"
          ],
          "correct": 0
        },
        {
          "title": "matter, affair",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"matter, affair\"?",
          "options": [
            "شَأْنٌ",
            "السَّاعَةُ",
            "شِفَاءٌ",
            "يَوْمُ الْجُمُعَةِ"
          ],
          "correct": 0
        },
        {
          "title": "matter, affair",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَأْنٌ mean?",
          "options": [
            "matter, affair",
            "the Hour, Judgement Day",
            "healing, cure",
            "Friday"
          ],
          "correct": 0
        },
        {
          "title": "matter, affair (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَأْنٌ?",
          "options": [
            "شُؤُوْنٌ",
            "قِصَصٌ",
            "عِظَامٌ",
            "مَوَاعِظُ"
          ],
          "correct": 0
        },
        {
          "title": "story, account",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"story, account\"?",
          "options": [
            "قِصَّةٌ",
            "مَوْعِظَةٌ",
            "مُبَارَكٌ",
            "عَظِيْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "story, account",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قِصَّةٌ mean?",
          "options": [
            "story, account",
            "admonition",
            "blessed",
            "great, mighty"
          ],
          "correct": 0
        },
        {
          "title": "story, account (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قِصَّةٌ?",
          "options": [
            "قِصَصٌ",
            "مَوَاعِظُ",
            "أَشْهُرٌ",
            "عِظَامٌ"
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
            "شِفَاءٌ",
            "يَوْمُ الْجُمُعَةِ",
            "أَحَدٌ"
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
            "healing, cure",
            "Friday",
            "one, unique"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "مقول القول",
      "subtitle": "Part 2: The مَفْعُوْلٌ بِهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "Quotations Without أَنْ",
          "lines": [
            {
              "html": "The مَفْعُوْلٌ بِهِ can occur as a جُمْلَةٌ صُغْرَى when it is a quotation. There are two types of quotation: those without أَنْ, and those with أَنْ.",
              "list": false
            },
            {
              "html": "The quotation of the verbs قَالَ، يَقُوْلُ، قُلْ (to say) and سَأَلَ، يَسْأَلُ، سَلْ (to ask) occurs without the particle أَنْ.",
              "list": false
            },
            {
              "html": "The quotation can be a جُمْلَةٌ اِسْمِيَّةٌ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "قَالَ الرَّجُلُ: اَللّٰهُ رَحِيْمٌ",
                "translation": "The man said: Allah is merciful.",
                "cells": [
                  "قَالَ",
                  "الرَّجُلُ",
                  "اَللّٰهُ",
                  "رَحِيْمٌ"
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
                ]
              }
            },
            {
              "html": "The quotation can also be a جُمْلَةٌ فِعْلِيَّةٌ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "قَالَ الرَّجُلُ: خَلَقَ اللّٰهُ السَّمَاءَ",
                "translation": "The man said: Allah created the sky.",
                "cells": [
                  "قَالَ",
                  "الرَّجُلُ",
                  "خَلَقَ",
                  "اللّٰهُ",
                  "السَّمَاءَ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "The addressee is given as a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ with the حَرْفٌ جَارٌّ لِ — as in قُلْنَا لَكَ: اِجْلِسْ هُنَا, 'We said to you: Sit here.'",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Which two verbs introduce their quotation with no particle at all?",
            "kind": "mcq",
            "options": [
              "قَالَ يَقُوْلُ قُلْ, and سَأَلَ يَسْأَلُ سَلْ",
              "أَرْسَلَ and كَتَبَ",
              "نَادَى and عَهِدَ",
              "أَوْحَى and وَصَّى"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Quotations With أَنْ",
          "lines": [
            {
              "html": "The quotation of all other verbs is usually preceded by أَنْ. This is known as أَنْ التَّفْسِيْرِيَّةُ. It is غَيْرُ عَامِلٍ — it has no grammatical effect — and it is not translated.",
              "list": false
            },
            {
              "html": "﴿أَوْحَيْتُ إِلَى الْحَوَارِيِّيْنَ أَنْ آمِنُوْا بِيْ وَبِرَسُوْلِيْ﴾ — I inspired the helpers (of Isa): Believe in me and my messenger.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "﴿أَوْحَيْتُ إِلَى الْحَوَارِيِّيْنَ أَنْ آمِنُوْا بِيْ وَبِرَسُوْلِيْ﴾",
                "translation": "I inspired the helpers: Believe in me and my messenger.",
                "cells": [
                  "أَوْحَيْتُ",
                  "إِلَى الْحَوَارِيِّيْنَ",
                  "أَنْ",
                  "آمِنُوْا",
                  "بِيْ وَبِرَسُوْلِيْ"
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
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ ثَانٍ غَيْرُ صَرِيْحٍ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "table": {
                "title": "Verbs Which Require an أَنْ تَفْسِيْرِيَّةٌ",
                "headers": [
                  "English",
                  "Arabic"
                ],
                "rows": [
                  [
                    "to send",
                    "أَرْسَلَ يُرْسِلُ إِرْسَالًا"
                  ],
                  [
                    "to write, enjoin",
                    "كَتَبَ يَكْتُبُ كِتَابَةً"
                  ],
                  [
                    "to inspire, reveal",
                    "أَوْحَى يُوْحِيْ إِيْحَاءً"
                  ],
                  [
                    "to call out",
                    "نَادَى يُنَادِيْ مُنَادَاةً"
                  ],
                  [
                    "to make a covenant",
                    "عَهِدَ يَعْهَدُ عَهْدًا"
                  ],
                  [
                    "to advise, order",
                    "وَصَّى يُوَصِّيْ تَوْصِيَةً"
                  ]
                ]
              }
            },
            {
              "html": "Do not confuse أَنْ التَّفْسِيْرِيَّةُ with the أَنْ that makes a مُضَارِع verb مَنْصُوْب. The explanatory أَنْ has no effect at all on what follows — notice that آمِنُوْا keeps its imperative form.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What is أَنْ التَّفْسِيْرِيَّةُ؟",
            "kind": "mcq",
            "options": [
              "An explanatory particle before a quotation that has no grammatical effect and is not translated",
              "A particle that makes the following مُضَارِع verb مَنْصُوْبٌ",
              "A particle of negation",
              "A particle of emphasis attached to the verb"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The مَفْعُوْلٌ بِهِ as a جُمْلَةٌ صُغْرَى",
        "rows": [
          {
            "label": "When it happens",
            "arabic": "إِذَا كَانَ الْمَفْعُوْلُ بِهِ مَقُوْلًا",
            "meaning": "The مَفْعُوْلٌ بِهِ occurs as a nested sentence when it is a quotation."
          },
          {
            "label": "Verbs without أَنْ",
            "arabic": "قَالَ يَقُوْلُ قُلْ / سَأَلَ يَسْأَلُ سَلْ",
            "meaning": "The quotations of 'to say' and 'to ask' take no particle."
          },
          {
            "label": "Nominal quotation",
            "arabic": "قَالَ الرَّجُلُ: اَللّٰهُ رَحِيْمٌ",
            "meaning": "The nested sentence is a جُمْلَةٌ اِسْمِيَّةٌ."
          },
          {
            "label": "Verbal quotation",
            "arabic": "قَالَ الرَّجُلُ: خَلَقَ اللّٰهُ السَّمَاءَ",
            "meaning": "The nested sentence is a جُمْلَةٌ فِعْلِيَّةٌ."
          },
          {
            "label": "The addressee",
            "arabic": "قُلْنَا لَكَ: اِجْلِسْ هُنَا",
            "meaning": "Given as a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ with the حَرْفٌ جَارٌّ لِ."
          },
          {
            "label": "أَنْ التَّفْسِيْرِيَّةُ",
            "arabic": "غَيْرُ عَامِلٍ وَلَا تُتَرْجَمُ",
            "meaning": "All other verbs take أَنْ before the quotation; it has no grammatical effect and is not translated."
          },
          {
            "label": "Verbs requiring أَنْ",
            "arabic": "أَرْسَلَ، كَتَبَ، أَوْحَى، نَادَى، عَهِدَ، وَصَّى",
            "meaning": "The six verbs listed on page 431."
          }
        ]
      },
      "quiz": [
        {
          "q": "When does the مَفْعُوْلٌ بِهِ occur as a جُمْلَةٌ صُغْرَى?",
          "options": [
            "When it is a quotation",
            "When the verb is passive",
            "When it is مَعْرِفَة",
            "When it comes before the verb"
          ],
          "correct": 0,
          "explanation": "A quoted statement fills the object slot as a complete nested sentence."
        },
        {
          "q": "Which verbs take their quotation without أَنْ?",
          "options": [
            "أَوْحَى and نَادَى",
            "قَالَ and سَأَلَ",
            "كَتَبَ and وَصَّى",
            "أَرْسَلَ and عَهِدَ"
          ],
          "correct": 1,
          "explanation": "'To say' and 'to ask' introduce their quotations directly."
        },
        {
          "q": "What is أَنْ التَّفْسِيْرِيَّةُ?",
          "options": [
            "A particle that makes the verb after it مَنْصُوْب",
            "A particle of negation",
            "An explanatory particle before a quotation, with no grammatical effect",
            "A particle of emphasis"
          ],
          "correct": 2,
          "explanation": "It is غَيْرُ عَامِلٍ and is not translated; it merely introduces the quoted words."
        },
        {
          "q": "How is the addressee of a quotation expressed?",
          "options": [
            "As a فَاعِل",
            "As a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ with لِ",
            "As a حَال",
            "As a تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "قُلْنَا لَكَ: اِجْلِسْ هُنَا — 'We said to you: Sit here.'"
        },
        {
          "q": "In ﴿أَوْحَيْتُ إِلَى الْحَوَارِيِّيْنَ أَنْ آمِنُوْا…﴾, what tells you that أَنْ is غَيْرُ عَامِلٍ?",
          "options": [
            "آمِنُوْا keeps its imperative form rather than becoming مَنْصُوْب",
            "أَنْ comes after a preposition",
            "The verb is plural",
            "The sentence is Quranic"
          ],
          "correct": 0,
          "explanation": "The أَنْ that governs would require a مُضَارِع verb in the مَنْصُوْب state."
        },
        {
          "q": "Which of these verbs is NOT listed as requiring an أَنْ تَفْسِيْرِيَّةٌ?",
          "options": [
            "نَادَى",
            "عَهِدَ",
            "سَأَلَ",
            "وَصَّى"
          ],
          "correct": 2,
          "explanation": "سَأَلَ is one of the two verbs exempted, alongside قَالَ."
        }
      ],
      "bank": [
        {
          "title": "قَالَ الرَّجُلُ: اَللّٰهُ رَحِيْمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 430 (Section 1, Part 2)",
          "sentence": "قَالَ الرَّجُلُ: اَللّٰهُ رَحِيْمٌ",
          "translation": "The man said: Allah is merciful.",
          "cells": [
            "قَالَ",
            "الرَّجُلُ",
            "اَللّٰهُ",
            "رَحِيْمٌ"
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
            "حَالٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "قَالَ الرَّجُلُ: خَلَقَ اللّٰهُ السَّمَاءَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 430 (Section 1, Part 2)",
          "sentence": "قَالَ الرَّجُلُ: خَلَقَ اللّٰهُ السَّمَاءَ",
          "translation": "The man said: Allah created the sky.",
          "cells": [
            "قَالَ",
            "الرَّجُلُ",
            "خَلَقَ",
            "اللّٰهُ",
            "السَّمَاءَ"
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
                }
              ]
            }
          ],
          "distractors": [
            "حَالٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "قُلْنَا لَكَ: اِجْلِسْ هُنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 430 (Section 1, Part 2)",
          "sentence": "قُلْنَا لَكَ: اِجْلِسْ هُنَا",
          "translation": "We said to you: Sit here.",
          "cells": [
            "قُلْنَا",
            "لَكَ",
            "اِجْلِسْ",
            "هُنَا"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "﴿أَوْحَيْتُ إِلَى الْحَوَارِيِّيْنَ أَنْ آمِنُوْا بِيْ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 431 (Section 1, Part 2)",
          "sentence": "﴿أَوْحَيْتُ إِلَى الْحَوَارِيِّيْنَ أَنْ آمِنُوْا بِيْ﴾",
          "translation": "I inspired the helpers: Believe in me.",
          "cells": [
            "أَوْحَيْتُ",
            "إِلَى الْحَوَارِيِّيْنَ",
            "أَنْ",
            "آمِنُوْا",
            "بِيْ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿قَالُوْا نَعْبُدُ أَصْنَامًا﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "﴿قَالُوْا نَعْبُدُ أَصْنَامًا﴾",
          "translation": "They said: We worship idols.",
          "cells": [
            "قَالُوْا",
            "نَعْبُدُ",
            "أَصْنَامًا"
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
                  "end": 2,
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
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (نَحْنُ)"
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
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "فَاعِلٌ مُؤَخَّرٌ"
          ]
        },
        {
          "title": "﴿قَالُوا اتَّخَذَ اللّٰهُ وَلَدًا﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "﴿قَالُوا اتَّخَذَ اللّٰهُ وَلَدًا﴾",
          "translation": "They said: Allah has taken a son.",
          "cells": [
            "قَالُوا",
            "اتَّخَذَ",
            "اللّٰهُ",
            "وَلَدًا"
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
            "خَبَرٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿قَالُوْا إِنَّا كُنَّا ظَالِمِيْنَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "﴿قَالُوْا إِنَّا كُنَّا ظَالِمِيْنَ﴾",
          "translation": "They said: Indeed we were wrongdoers.",
          "cells": [
            "قَالُوْا",
            "إِنَّ",
            "نَا",
            "كُنَّا",
            "ظَالِمِيْنَ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (نَا)"
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
            "حَالٌ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "﴿قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "﴿قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ﴾",
          "translation": "We said to the angels: Prostrate to Adam.",
          "cells": [
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "فَاعِلٌ مُؤَخَّرٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "قَالَ لُقْمَانُ لِابْنِهِ: ﴿أُشْكُرْ لِلّٰهِ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "قَالَ لُقْمَانُ لِابْنِهِ: ﴿أُشْكُرْ لِلّٰهِ﴾",
          "translation": "Luqman said to his son: Be grateful to Allah.",
          "cells": [
            "قَالَ",
            "لُقْمَانُ",
            "لِابْنِهِ",
            "أُشْكُرْ",
            "لِلّٰهِ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "قَالَ الْأُسْتَاذُ: الْفِعْلُ ثَلَاثَةُ أَقْسَامٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "قَالَ الْأُسْتَاذُ: الْفِعْلُ ثَلَاثَةُ أَقْسَامٍ",
          "translation": "The teacher said: The verb has three categories.",
          "cells": [
            "قَالَ",
            "الْأُسْتَاذُ",
            "الْفِعْلُ",
            "ثَلَاثَةُ",
            "أَقْسَامٍ"
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
            "حَالٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "قَالَ الرُّسُلُ لِقَوْمِهِمْ: لَا تَتَّخِذُوا الْأَصْنَامَ آلِهَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "قَالَ الرُّسُلُ لِقَوْمِهِمْ: لَا تَتَّخِذُوا الْأَصْنَامَ آلِهَةً",
          "translation": "The messengers said to their people: Do not take idols as gods.",
          "cells": [
            "قَالَ",
            "الرُّسُلُ",
            "لِقَوْمِهِمْ",
            "لَا",
            "تَتَّخِذُوا",
            "الْأَصْنَامَ",
            "آلِهَةً"
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
                  "end": 6,
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
                  "role": "حَرْفُ نَهْيٍ"
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
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَفْيٍ",
            "حَالٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "سَأَلَ يَعْقُوْبُ أَبْنَاءَهُ: ﴿مَا تَعْبُدُوْنَ مِنْ بَعْدِيْ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 2)",
          "sentence": "سَأَلَ يَعْقُوْبُ أَبْنَاءَهُ: ﴿مَا تَعْبُدُوْنَ مِنْ بَعْدِيْ﴾",
          "translation": "Yaqub asked his sons: What will you worship after me?",
          "cells": [
            "سَأَلَ",
            "يَعْقُوْبُ",
            "أَبْنَاءَهُ",
            "مَا",
            "تَعْبُدُوْنَ",
            "مِنْ بَعْدِيْ"
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
                  "role": "مَفْعُوْلٌ بِهِ مُقَدَّمٌ"
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
            }
          ],
          "distractors": [
            "حَالٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿قَالُوْا نَعْبُدُ أَصْنَامًا﴾, which slot does the nested sentence fill?",
          "options": [
            "فَاعِلٌ",
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ",
            "حَالٌ"
          ],
          "correct": 1,
          "explanation": "The quoted words نَعْبُدُ أَصْنَامًا are the object of قَالُوْا."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿قَالُوْا إِنَّا كُنَّا ظَالِمِيْنَ﴾, what kind of sentence is the quotation?",
          "options": [
            "A جُمْلَةٌ اِسْمِيَّةٌ headed by إِنَّ",
            "A جُمْلَةٌ فِعْلِيَّةٌ",
            "A شِبْهُ الْجُمْلَةِ",
            "A single word"
          ],
          "correct": 0,
          "explanation": "إِنَّا كُنَّا ظَالِمِيْنَ has its own اِسْم and خَبَر, with كَانَ nested inside."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوْا لِآدَمَ﴾, what is لِلْمَلَائِكَةِ?",
          "options": [
            "The quotation itself",
            "The addressee, a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "A حَال",
            "The فاعل"
          ],
          "correct": 1,
          "explanation": "The لِ marks the party addressed, while the imperative sentence is the quotation."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In قَالَ لُقْمَانُ لِابْنِهِ: ﴿أُشْكُرْ لِلّٰهِ﴾, how many لِ phrases are there and what do they mark?",
          "options": [
            "Two — the addressee, and the object of the gratitude",
            "One — only the addressee",
            "Three",
            "None — both are حَرْفُ صِلَةٍ"
          ],
          "correct": 0,
          "explanation": "لِابْنِهِ names who is addressed; لِلّٰهِ sits inside the quotation itself."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In سَأَلَ يَعْقُوْبُ أَبْنَاءَهُ: ﴿مَا تَعْبُدُوْنَ مِنْ بَعْدِيْ﴾, how is the addressee expressed here?",
          "options": [
            "With لِ, as a مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ",
            "Directly, as a مَفْعُوْلٌ بِهِ",
            "As a حَال",
            "It is omitted"
          ],
          "correct": 1,
          "explanation": "سَأَلَ can take its addressee directly as a مَنْصُوْب object, unlike قَالَ."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In قَالَ الْأُسْتَاذُ: الْفِعْلُ ثَلَاثَةُ أَقْسَامٍ, what is the quotation?",
          "options": [
            "الْفِعْلُ alone",
            "ثَلَاثَةُ أَقْسَامٍ alone",
            "The whole nominal sentence الْفِعْلُ ثَلَاثَةُ أَقْسَامٍ",
            "الْأُسْتَاذُ"
          ],
          "correct": 2,
          "explanation": "الْأُسْتَاذُ is the فاعل; the complete nested sentence is the object."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In قَالَ الرُّسُلُ لِقَوْمِهِمْ: لَا تَتَّخِذُوا الْأَصْنَامَ آلِهَةً, how many objects does تَتَّخِذُوا take?",
          "options": [
            "One",
            "Two — الْأَصْنَامَ and آلِهَةً",
            "Three",
            "None"
          ],
          "correct": 1,
          "explanation": "اِتَّخَذَ takes two objects, both مَنْصُوْب, inside the quoted prohibition."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In يَسْأَلُوْنَ مَنْ خَلَقَ الْأَرْضَ وَالسَّمَاوَاتِ السَّبْعَ, what is the role of مَنْ?",
          "options": [
            "The مُبْتَدَأ of the quoted question",
            "A مَفْعُوْلٌ بِهِ مُقَدَّمٌ",
            "A حَرْفُ اِسْتِفْهَامٍ",
            "A مُضَافٌ إِلَيْهِ"
          ],
          "correct": 0,
          "explanation": "There is no عَائِد referring to an object, and the verb has its own فاعل implied — مَنْ heads the quoted question."
        },
        {
          "title": "to send",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to send\"?",
          "options": [
            "أَرْسَلَ يُرْسِلُ",
            "نَادَى يُنَادِيْ",
            "وَصَّى يُوَصِّيْ",
            "سَمَاءٌ"
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
            "to call out",
            "to advise, order",
            "sky, heaven"
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
            "مُنَادَاةً",
            "تَوْصِيَةً",
            "إِيْحَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to write, enjoin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to write, enjoin\"?",
          "options": [
            "كَتَبَ يَكْتُبُ",
            "عَهِدَ يَعْهَدُ",
            "حَوَارِيٌّ",
            "رَحِيْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to write, enjoin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَتَبَ يَكْتُبُ mean?",
          "options": [
            "to write, enjoin",
            "to make a covenant",
            "helper, disciple",
            "merciful"
          ],
          "correct": 0
        },
        {
          "title": "to write, enjoin (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَتَبَ يَكْتُبُ?",
          "options": [
            "كِتَابَةً",
            "عَهْدًا",
            "إِرْسَالًا",
            "مُنَادَاةً"
          ],
          "correct": 0
        },
        {
          "title": "to inspire, reveal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to inspire, reveal\"?",
          "options": [
            "أَوْحَى يُوْحِيْ",
            "وَصَّى يُوَصِّيْ",
            "سَمَاءٌ",
            "أَجْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to inspire, reveal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَوْحَى يُوْحِيْ mean?",
          "options": [
            "to inspire, reveal",
            "to advise, order",
            "sky, heaven",
            "reward, wage"
          ],
          "correct": 0
        },
        {
          "title": "to inspire, reveal (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَوْحَى يُوْحِيْ?",
          "options": [
            "إِيْحَاءً",
            "تَوْصِيَةً",
            "كِتَابَةً",
            "عَهْدًا"
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
            "حَوَارِيٌّ",
            "رَحِيْمٌ",
            "عَالَمٌ"
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
            "helper, disciple",
            "merciful",
            "worlds, creation"
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
            "إِرْسَالًا",
            "إِيْحَاءً",
            "تَوْصِيَةً"
          ],
          "correct": 0
        },
        {
          "title": "to make a covenant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make a covenant\"?",
          "options": [
            "عَهِدَ يَعْهَدُ",
            "سَمَاءٌ",
            "أَجْرٌ",
            "إِلٰهٌ"
          ],
          "correct": 0
        },
        {
          "title": "to make a covenant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَهِدَ يَعْهَدُ mean?",
          "options": [
            "to make a covenant",
            "sky, heaven",
            "reward, wage",
            "idol, god"
          ],
          "correct": 0
        },
        {
          "title": "to make a covenant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَهِدَ يَعْهَدُ?",
          "options": [
            "عَهْدًا",
            "كِتَابَةً",
            "مُنَادَاةً",
            "إِرْسَالًا"
          ],
          "correct": 0
        },
        {
          "title": "to advise, order",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to advise, order\"?",
          "options": [
            "وَصَّى يُوَصِّيْ",
            "رَحِيْمٌ",
            "عَالَمٌ",
            "أَرْسَلَ يُرْسِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to advise, order",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَصَّى يُوَصِّيْ mean?",
          "options": [
            "to advise, order",
            "merciful",
            "worlds, creation",
            "to send"
          ],
          "correct": 0
        },
        {
          "title": "to advise, order (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَصَّى يُوَصِّيْ?",
          "options": [
            "تَوْصِيَةً",
            "إِيْحَاءً",
            "عَهْدًا",
            "كِتَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "helper, disciple",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"helper, disciple\"?",
          "options": [
            "حَوَارِيٌّ",
            "أَجْرٌ",
            "إِلٰهٌ",
            "كَتَبَ يَكْتُبُ"
          ],
          "correct": 0
        },
        {
          "title": "helper, disciple",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَوَارِيٌّ mean?",
          "options": [
            "helper, disciple",
            "reward, wage",
            "idol, god",
            "to write, enjoin"
          ],
          "correct": 0
        },
        {
          "title": "helper, disciple (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَوَارِيٌّ?",
          "options": [
            "حَوَارِيُّوْنَ",
            "عَالَمُوْنَ",
            "سَمَاوَاتٌ",
            "أُجُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "sky, heaven",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sky, heaven\"?",
          "options": [
            "سَمَاءٌ",
            "عَالَمٌ",
            "أَرْسَلَ يُرْسِلُ",
            "أَوْحَى يُوْحِيْ"
          ],
          "correct": 0
        },
        {
          "title": "sky, heaven",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمَاءٌ mean?",
          "options": [
            "sky, heaven",
            "worlds, creation",
            "to send",
            "to inspire, reveal"
          ],
          "correct": 0
        },
        {
          "title": "sky, heaven (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of سَمَاءٌ?",
          "options": [
            "سَمَاوَاتٌ",
            "آلِهَةٌ",
            "رُحَمَاءُ",
            "عَالَمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "merciful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"merciful\"?",
          "options": [
            "رَحِيْمٌ",
            "إِلٰهٌ",
            "كَتَبَ يَكْتُبُ",
            "نَادَى يُنَادِيْ"
          ],
          "correct": 0
        },
        {
          "title": "merciful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَحِيْمٌ mean?",
          "options": [
            "merciful",
            "idol, god",
            "to write, enjoin",
            "to call out"
          ],
          "correct": 0
        },
        {
          "title": "merciful (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَحِيْمٌ?",
          "options": [
            "رُحَمَاءُ",
            "حَوَارِيُّوْنَ",
            "أُجُوْرٌ",
            "آلِهَةٌ"
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
            "أَرْسَلَ يُرْسِلُ",
            "أَوْحَى يُوْحِيْ",
            "عَهِدَ يَعْهَدُ"
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
            "to send",
            "to inspire, reveal",
            "to make a covenant"
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
            "سَمَاوَاتٌ",
            "عَالَمُوْنَ",
            "حَوَارِيُّوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "worlds, creation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"worlds, creation\"?",
          "options": [
            "عَالَمٌ",
            "كَتَبَ يَكْتُبُ",
            "نَادَى يُنَادِيْ",
            "وَصَّى يُوَصِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "worlds, creation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَالَمٌ mean?",
          "options": [
            "worlds, creation",
            "to write, enjoin",
            "to call out",
            "to advise, order"
          ],
          "correct": 0
        },
        {
          "title": "worlds, creation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَالَمٌ?",
          "options": [
            "عَالَمُوْنَ",
            "رُحَمَاءُ",
            "آلِهَةٌ",
            "سَمَاوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "idol, god",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"idol, god\"?",
          "options": [
            "إِلٰهٌ",
            "أَوْحَى يُوْحِيْ",
            "عَهِدَ يَعْهَدُ",
            "حَوَارِيٌّ"
          ],
          "correct": 0
        },
        {
          "title": "idol, god",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِلٰهٌ mean?",
          "options": [
            "idol, god",
            "to inspire, reveal",
            "to make a covenant",
            "helper, disciple"
          ],
          "correct": 0
        },
        {
          "title": "idol, god (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِلٰهٌ?",
          "options": [
            "آلِهَةٌ",
            "أُجُوْرٌ",
            "حَوَارِيُّوْنَ",
            "رُحَمَاءُ"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "أفعال القول",
      "subtitle": "Part 2: The مَفْعُوْلٌ بِهِ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Two Kinds of Quoting Verb",
          "lines": [
            {
              "html": "The following table sets the two kinds of quoting verb side by side. The difference is simply whether an أَنْ التَّفْسِيْرِيَّةُ is inserted before the quotation.",
              "list": false
            },
            {
              "table": {
                "title": "Verbs with Quotations",
                "headers": [
                  "Verb type",
                  "Addition",
                  "Example"
                ],
                "rows": [
                  [
                    "قَالَ / سَأَلَ",
                    "No additions",
                    "قُلْتُ: اُنْصُرْنِيْ"
                  ],
                  [
                    "Other verbs",
                    "أَنْ التَّفْسِيْرِيَّةُ",
                    "نَادَيْتُ أَنِ انْصُرْنِيْ"
                  ]
                ]
              }
            },
            {
              "html": "Notice that the quoted words themselves are identical in both rows — اُنْصُرْنِيْ. Only the presence of the particle differs, and since أَنْ التَّفْسِيْرِيَّةُ is غَيْرُ عَامِلٍ, it changes nothing else.",
              "list": false
            },
            {
              "html": "قَالَ زَيْدٌ: اُنْصُرْنِيْ — Zaid said: Help me.",
              "list": true,
              "bullet": true
            },
            {
              "html": "نَادَى زَيْدٌ أَنِ انْصُرْنِيْ — Zaid called out: Help me.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The kasrah on أَنِ before انْصُرْنِيْ is only there to avoid two sākin letters meeting; it says nothing about grammatical effect.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In قَالَ زَيْدٌ: اُنْصُرْنِيْ and نَادَى زَيْدٌ أَنِ انْصُرْنِيْ, what actually differs between the two quoted sentences?",
            "kind": "mcq",
            "options": [
              "Nothing — only the presence of أَنْ التَّفْسِيْرِيَّةُ before the quotation differs",
              "The quoted verb changes from imperative to مُضَارِع",
              "The first quotation is nominal, the second verbal",
              "The quoted verb becomes مَنْصُوْبٌ in the second"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Summary: The مَفْعُوْلٌ بِهِ as a Nested Sentence",
          "lines": [
            {
              "table": {
                "title": "Nested Sentences — جُمْلَةٌ صُغْرَى as the مَفْعُوْلٌ بِهِ",
                "headers": [
                  "Verbs",
                  "Particle",
                  "Example"
                ],
                "rows": [
                  [
                    "قَالَ يَقُوْلُ قُلْ / سَأَلَ يَسْأَلُ سُؤَالًا",
                    "Without أَنْ",
                    "قَالَ زَيْدٌ: اُنْصُرْنِيْ"
                  ],
                  [
                    "Other verbs",
                    "With أَنْ",
                    "نَادَى زَيْدٌ أَنِ انْصُرْنِيْ"
                  ]
                ]
              }
            },
            {
              "html": "In both cases the quoted sentence — whether اِسْمِيَّة or فِعْلِيَّة — is the جُمْلَةٌ صُغْرَى filling the مَفْعُوْلٌ بِهِ slot of the main sentence.",
              "list": false
            },
            {
              "table": {
                "title": "Vocab (p. 432)",
                "headers": [
                  "English",
                  "Arabic"
                ],
                "rows": [
                  [
                    "name",
                    "اِسْمٌ ج أَسْمَاءٌ"
                  ],
                  [
                    "stomach",
                    "بَطْنٌ ج بُطُوْنٌ"
                  ],
                  [
                    "finger",
                    "إِصْبَعٌ ج أَصَابِعُ (مث)"
                  ],
                  [
                    "misguided",
                    "ضَالٌّ ج وْنَ"
                  ],
                  [
                    "exam",
                    "اِمْتِحَانٌ ج اتٌ"
                  ],
                  [
                    "evening",
                    "عِشَاءٌ"
                  ],
                  [
                    "people",
                    "أَهْلٌ"
                  ],
                  [
                    "religion, creed",
                    "مِلَّةٌ ج مِلَلٌ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "Whether or not أَنْ التَّفْسِيْرِيَّةُ is present, what slot does the quoted sentence always fill?",
            "kind": "mcq",
            "options": [
              "The مَفْعُوْلٌ بِهِ of the main sentence",
              "The فَاعِلٌ",
              "The خَبَرٌ",
              "The حَالٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Quoting Verbs at a Glance",
        "rows": [
          {
            "label": "The exempt verbs",
            "arabic": "قَالَ يَقُوْلُ قُلْ / سَأَلَ يَسْأَلُ سُؤَالًا",
            "meaning": "Their quotations take no particle at all."
          },
          {
            "label": "All other verbs",
            "arabic": "أَنْ التَّفْسِيْرِيَّةُ",
            "meaning": "An explanatory أَنْ is inserted before the quotation."
          },
          {
            "label": "What the particle does",
            "arabic": "غَيْرُ عَامِلٍ",
            "meaning": "Nothing grammatically — the quoted words are identical with or without it."
          },
          {
            "label": "Compared",
            "arabic": "قُلْتُ: اُنْصُرْنِيْ ↔ نَادَيْتُ أَنِ انْصُرْنِيْ",
            "meaning": "Same quotation, one particle apart."
          },
          {
            "label": "The slot filled",
            "arabic": "مَفْعُوْلٌ بِهِ",
            "meaning": "In both cases the quoted sentence is the جُمْلَةٌ صُغْرَى in the object slot."
          }
        ]
      },
      "quiz": [
        {
          "q": "Which two verbs take their quotation with no additions?",
          "options": [
            "أَوْحَى and نَادَى",
            "قَالَ and سَأَلَ",
            "كَتَبَ and عَهِدَ",
            "أَرْسَلَ and وَصَّى"
          ],
          "correct": 1,
          "explanation": "قُلْتُ: اُنْصُرْنِيْ — nothing stands between the verb and the quotation."
        },
        {
          "q": "What is added before the quotation of all other verbs?",
          "options": [
            "أَنَّ",
            "إِنَّ",
            "أَنْ التَّفْسِيْرِيَّةُ",
            "قَدْ"
          ],
          "correct": 2,
          "explanation": "نَادَيْتُ أَنِ انْصُرْنِيْ."
        },
        {
          "q": "What is the difference between the quoted words in the two rows of the table?",
          "options": [
            "There is none — only the particle before them differs",
            "The second row's verb becomes مَنْصُوْب",
            "The second row's quotation must be nominal",
            "The first row's quotation cannot be an imperative"
          ],
          "correct": 0,
          "explanation": "اُنْصُرْنِيْ is identical in both, because أَنْ التَّفْسِيْرِيَّةُ is غَيْرُ عَامِلٍ."
        },
        {
          "q": "Why does أَنْ carry a kasrah in نَادَيْتُ أَنِ انْصُرْنِيْ?",
          "options": [
            "Because it governs the verb",
            "To avoid two sākin letters meeting",
            "Because the verb is an imperative",
            "Because نَادَى is a Form III verb"
          ],
          "correct": 1,
          "explanation": "The نْ of أَنْ and the hamzatul-wasl of انْصُرْ would otherwise clash; the kasrah says nothing about governance."
        },
        {
          "q": "Which slot does the quoted sentence fill in both cases?",
          "options": [
            "فَاعِلٌ",
            "خَبَرٌ",
            "حَالٌ",
            "مَفْعُوْلٌ بِهِ"
          ],
          "correct": 3,
          "explanation": "This is the whole point of Part 2: the object slot can be filled by a جُمْلَةٌ صُغْرَى."
        },
        {
          "q": "Which verb form still belongs in the 'no additions' row?",
          "options": [
            "قُلْ",
            "نَادِ",
            "أَوْحِ",
            "أَرْسِلْ"
          ],
          "correct": 0,
          "explanation": "The rule follows the verb's root, so all forms of قَالَ — including the imperative قُلْ — are exempt."
        }
      ],
      "bank": [
        {
          "title": "قَالَ زَيْدٌ: اُنْصُرْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 432 (Section 1, Part 2)",
          "sentence": "قَالَ زَيْدٌ: اُنْصُرْنِيْ",
          "translation": "Zaid said: Help me.",
          "cells": [
            "قَالَ",
            "زَيْدٌ",
            "اُنْصُرْ",
            "نِيْ"
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
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "أَنْ التَّفْسِيْرِيَّةُ",
            "حَالٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "نَادَى زَيْدٌ أَنِ انْصُرْنِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 432 (Section 1, Part 2)",
          "sentence": "نَادَى زَيْدٌ أَنِ انْصُرْنِيْ",
          "translation": "Zaid called out: Help me.",
          "cells": [
            "نَادَى",
            "زَيْدٌ",
            "أَنِ",
            "انْصُرْ",
            "نِيْ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "حَرْفُ نَصْبٍ",
            "حَرْفُ جَرٍّ",
            "حَالٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "﴿أَوْحَيْنَا إِلَيْكَ أَنِ اتَّبِعْ مِلَّةَ إِبْرَاهِيْمَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿أَوْحَيْنَا إِلَيْكَ أَنِ اتَّبِعْ مِلَّةَ إِبْرَاهِيْمَ﴾",
          "translation": "We inspired you: Follow the creed of Ibrahim.",
          "cells": [
            "أَوْحَيْنَا",
            "إِلَيْكَ",
            "أَنِ",
            "اتَّبِعْ",
            "مِلَّةَ",
            "إِبْرَاهِيْمَ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿وَصَّيْنَاهُمْ وَإِيَّاكُمْ أَنِ اتَّقُوا اللّٰهَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿وَصَّيْنَاهُمْ وَإِيَّاكُمْ أَنِ اتَّقُوا اللّٰهَ﴾",
          "translation": "We enjoined them and you: Fear Allah.",
          "cells": [
            "وَصَّيْنَا",
            "هُمْ",
            "وَ",
            "إِيَّاكُمْ",
            "أَنِ",
            "اتَّقُوا",
            "اللّٰهَ"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "تَأْكِيْدٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "﴿أَوْحَيْنَا إِلَى رَجُلٍ مِنْهُمْ أَنْ أَنْذِرِ النَّاسَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿أَوْحَيْنَا إِلَى رَجُلٍ مِنْهُمْ أَنْ أَنْذِرِ النَّاسَ﴾",
          "translation": "We inspired a man from among them: Warn the people.",
          "cells": [
            "أَوْحَيْنَا",
            "إِلَى رَجُلٍ",
            "مِنْهُمْ",
            "أَنْ",
            "أَنْذِرِ",
            "النَّاسَ"
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
                  "role": "جَارٌّ وَمَجْرُوْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "فَاعِلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَرْسَلَ اللّٰهُ الْأَنْبِيَاءَ إِلَى النَّاسِ أَنِ اعْبُدُوا اللّٰهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "أَرْسَلَ اللّٰهُ الْأَنْبِيَاءَ إِلَى النَّاسِ أَنِ اعْبُدُوا اللّٰهَ",
          "translation": "Allah sent the prophets to the people: Worship Allah.",
          "cells": [
            "أَرْسَلَ",
            "اللّٰهُ",
            "الْأَنْبِيَاءَ",
            "إِلَى النَّاسِ",
            "أَنِ",
            "اعْبُدُوا",
            "اللّٰهَ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿لَقَدْ بَعَثْنَا فِيْ كُلِّ أُمَّةٍ رَسُوْلًا أَنِ اعْبُدُوا اللّٰهَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿لَقَدْ بَعَثْنَا فِيْ كُلِّ أُمَّةٍ رَسُوْلًا أَنِ اعْبُدُوا اللّٰهَ﴾",
          "translation": "We sent in every nation a messenger: Worship Allah.",
          "cells": [
            "لَقَدْ",
            "بَعَثْنَا",
            "فِيْ",
            "كُلِّ",
            "أُمَّةٍ",
            "رَسُوْلًا",
            "أَنِ",
            "اعْبُدُوا اللّٰهَ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
            "حَرْفُ نَفْيٍ",
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "تَأْكِيْدٌ"
          ]
        },
        {
          "title": "﴿إِنَّا أَرْسَلْنَا نُوْحًا إِلَى قَوْمِهِ أَنْ أَنْذِرْ قَوْمَكَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿إِنَّا أَرْسَلْنَا نُوْحًا إِلَى قَوْمِهِ أَنْ أَنْذِرْ قَوْمَكَ﴾",
          "translation": "We sent Nuh to his people: Warn your people.",
          "cells": [
            "إِنَّا",
            "أَرْسَلْنَا",
            "نُوْحًا",
            "إِلَى قَوْمِهِ",
            "أَنْ",
            "أَنْذِرْ",
            "قَوْمَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاِسْمُهُ (نَا)"
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
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿أَلَمْ أَعْهَدْ إِلَيْكُمْ أَنْ لَا تَعْبُدُوا الشَّيْطَانَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿أَلَمْ أَعْهَدْ إِلَيْكُمْ أَنْ لَا تَعْبُدُوا الشَّيْطَانَ﴾",
          "translation": "Did I not enjoin upon you: Do not worship Shaytan?",
          "cells": [
            "أَ",
            "لَمْ",
            "أَعْهَدْ",
            "إِلَيْكُمْ",
            "أَنْ",
            "لَا",
            "تَعْبُدُوا",
            "الشَّيْطَانَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفُ اِسْتِفْهَامٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (أَنَا)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "اِسْمُ اِسْتِفْهَامٍ",
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿عَهِدْنَا إِلَى إِبْرَاهِيْمَ وَإِسْمَاعِيْلَ أَنْ طَهِّرَا بَيْتِيْ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿عَهِدْنَا إِلَى إِبْرَاهِيْمَ وَإِسْمَاعِيْلَ أَنْ طَهِّرَا بَيْتِيْ﴾",
          "translation": "We enjoined upon Ibrahim and Ismail: Purify My house.",
          "cells": [
            "عَهِدْنَا",
            "إِلَى إِبْرَاهِيْمَ",
            "وَ",
            "إِسْمَاعِيْلَ",
            "أَنْ",
            "طَهِّرَا",
            "بَيْتِيْ"
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
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
                },
                {
                  "start": 5,
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
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَلِفُ الْاِثْنَيْنِ)"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "تَأْكِيْدٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "﴿وَصَّيْنَا الْإِنْسَانَ بِوَالِدَيْهِ أَنِ اشْكُرْ لِيْ وَلِوَالِدَيْكَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿وَصَّيْنَا الْإِنْسَانَ بِوَالِدَيْهِ أَنِ اشْكُرْ لِيْ وَلِوَالِدَيْكَ﴾",
          "translation": "We enjoined upon man concerning his parents: Be grateful to Me and to your parents.",
          "cells": [
            "وَصَّيْنَا",
            "الْإِنْسَانَ",
            "بِوَالِدَيْهِ",
            "أَنِ",
            "اشْكُرْ",
            "لِيْ",
            "وَلِوَالِدَيْكَ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
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
            "حَرْفُ نَصْبٍ",
            "حَالٌ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿لَقَدْ أَرْسَلْنَا مُوْسَى بِآيَاتِنَا أَنْ أَخْرِجْ قَوْمَكَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Section 1, Part 2)",
          "sentence": "﴿لَقَدْ أَرْسَلْنَا مُوْسَى بِآيَاتِنَا أَنْ أَخْرِجْ قَوْمَكَ﴾",
          "translation": "We sent Musa with Our signs: Bring your people out.",
          "cells": [
            "لَقَدْ",
            "أَرْسَلْنَا",
            "مُوْسَى",
            "بِآيَاتِنَا",
            "أَنْ",
            "أَخْرِجْ",
            "قَوْمَكَ"
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
                  "role": "حَالٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "أَنْ التَّفْسِيْرِيَّةُ"
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
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
            "حَرْفُ نَفْيٍ",
            "حَرْفُ نَصْبٍ",
            "تَمْيِيْزٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿أَوْحَيْنَا إِلَيْكَ أَنِ اتَّبِعْ مِلَّةَ إِبْرَاهِيْمَ﴾, what is the role of أَنِ?",
          "options": [
            "أَنْ التَّفْسِيْرِيَّةُ, introducing the quotation",
            "A particle making the verb مَنْصُوْب",
            "A حَرْفُ جَرٍّ",
            "A حَرْفُ عَطْفٍ"
          ],
          "correct": 0,
          "explanation": "اتَّبِعْ keeps its imperative form, confirming the particle has no grammatical effect."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿وَصَّيْنَا هُمْ وَإِيَّاكُمْ أَنِ اتَّقُوا اللّٰهَ﴾, why is إِيَّاكُمْ used rather than كُمْ?",
          "options": [
            "Because a detached مَنْصُوْب pronoun is needed to coordinate onto هُمْ",
            "Because وَصَّى takes no attached pronouns",
            "Because كُمْ is مَجْرُوْر",
            "Because إِيَّا is a حَرْفُ صِلَةٍ"
          ],
          "correct": 0,
          "explanation": "An attached pronoun cannot stand alone after a حَرْفُ عَطْفٍ — the Unit 4.1 detached forms are required."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿أَوْحَيْنَا إِلَى رَجُلٍ مِنْهُمْ أَنْ أَنْذِرِ النَّاسَ﴾, what fills the object slot?",
          "options": [
            "إِلَى رَجُلٍ مِنْهُمْ",
            "النَّاسَ",
            "أَنْ alone",
            "The quoted sentence أَنْذِرِ النَّاسَ"
          ],
          "correct": 3,
          "explanation": "إِلَى رَجُلٍ is the addressee; the imperative sentence after أَنْ is the جُمْلَةٌ صُغْرَى."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In أَرْسَلَ اللّٰهُ الْأَنْبِيَاءَ إِلَى النَّاسِ أَنِ اعْبُدُوا اللّٰهَ, which two objects does أَرْسَلَ take?",
          "options": [
            "الْأَنْبِيَاءَ and the quoted sentence",
            "اللّٰهُ and الْأَنْبِيَاءَ",
            "النَّاسِ and اللّٰهَ",
            "Only the quoted sentence"
          ],
          "correct": 0,
          "explanation": "إِلَى النَّاسِ is a غَيْرُ صَرِيْح complement; the quotation is the second direct object."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿لَقَدْ بَعَثْنَا فِيْ كُلِّ أُمَّةٍ رَسُوْلًا أَنِ اعْبُدُوا اللّٰهَ﴾, what does كُلِّ أُمَّةٍ illustrate?",
          "options": [
            "A quantifier in a direct slot, مُضَافٌ to the noun itself",
            "A مُؤَكَّدٌ – تَأْكِيْدٌ structure",
            "A حَال",
            "A تَمْيِيْز"
          ],
          "correct": 0,
          "explanation": "كُلّ is مُضَاف to أُمَّةٍ rather than to a pronoun, so the pair sits inside the شِبْهُ الْجُمْلَة."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿أَلَمْ أَعْهَدْ إِلَيْكُمْ … أَنْ لَا تَعْبُدُوا الشَّيْطَانَ﴾, what kind of sentence is the quotation?",
          "options": [
            "A نَهْي — a prohibition",
            "A statement of fact",
            "A question",
            "A nominal sentence"
          ],
          "correct": 0,
          "explanation": "لَا تَعْبُدُوا is the prohibitive form; a quotation may be any kind of sentence."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿عَهِدْنَا إِلَى إِبْرَاهِيْمَ وَإِسْمَاعِيْلَ أَنْ طَهِّرَا بَيْتِيْ﴾, what does the أَلِف of طَهِّرَا mark?",
          "options": [
            "The feminine plural",
            "The dual subject — both of them addressed together",
            "A نُوْنُ التَّأْكِيْدِ",
            "A مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "The two names joined by وَ are the addressees, so the imperative takes the dual form."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 2)",
          "kind": "mcq",
          "prompt": "In ﴿لَقَدْ أَرْسَلْنَا مُوْسَى بِآيَاتِنَا أَنْ أَخْرِجْ قَوْمَكَ مِنَ الظُّلُمَاتِ إِلَى النُّوْرِ﴾, which words are the quotation?",
          "options": [
            "مُوْسَى بِآيَاتِنَا",
            "Everything from أَخْرِجْ to النُّوْرِ",
            "Only أَخْرِجْ قَوْمَكَ",
            "مِنَ الظُّلُمَاتِ إِلَى النُّوْرِ"
          ],
          "correct": 1,
          "explanation": "The whole imperative sentence, with its object and both شِبْهُ الْجُمْلَة, is the nested sentence."
        },
        {
          "title": "name",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"name\"?",
          "options": [
            "اِسْمٌ",
            "ضَالٌّ",
            "عِشَاءٌ",
            "مِلَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "name",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِسْمٌ mean?",
          "options": [
            "name",
            "misguided",
            "evening",
            "religion, creed"
          ],
          "correct": 0
        },
        {
          "title": "name (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of اِسْمٌ?",
          "options": [
            "أَسْمَاءٌ",
            "ضَالُّوْنَ",
            "أَهْلُوْنَ",
            "ظُلُمَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "stomach",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"stomach\"?",
          "options": [
            "بَطْنٌ",
            "اِمْتِحَانٌ",
            "أَهْلٌ",
            "ظُلْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "stomach",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَطْنٌ mean?",
          "options": [
            "stomach",
            "exam",
            "people, family",
            "darkness"
          ],
          "correct": 0
        },
        {
          "title": "stomach (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَطْنٌ?",
          "options": [
            "بُطُوْنٌ",
            "اِمْتِحَانَاتٌ",
            "مِلَلٌ",
            "أَنْوَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "finger",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"finger\"?",
          "options": [
            "إِصْبَعٌ",
            "عِشَاءٌ",
            "مِلَّةٌ",
            "نُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "finger",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِصْبَعٌ mean?",
          "options": [
            "finger",
            "evening",
            "religion, creed",
            "light"
          ],
          "correct": 0
        },
        {
          "title": "finger (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِصْبَعٌ?",
          "options": [
            "أَصَابِعُ",
            "أَهْلُوْنَ",
            "ظُلُمَاتٌ",
            "أَسْمَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "misguided",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"misguided\"?",
          "options": [
            "ضَالٌّ",
            "أَهْلٌ",
            "ظُلْمَةٌ",
            "طَهَّرَ يُطَهِّرُ"
          ],
          "correct": 0
        },
        {
          "title": "misguided",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَالٌّ mean?",
          "options": [
            "misguided",
            "people, family",
            "darkness",
            "to purify"
          ],
          "correct": 0
        },
        {
          "title": "misguided (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of ضَالٌّ?",
          "options": [
            "ضَالُّوْنَ",
            "مِلَلٌ",
            "أَنْوَارٌ",
            "بُطُوْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "exam",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"exam\"?",
          "options": [
            "اِمْتِحَانٌ",
            "مِلَّةٌ",
            "نُوْرٌ",
            "أَخْرَجَ يُخْرِجُ"
          ],
          "correct": 0
        },
        {
          "title": "exam",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِمْتِحَانٌ mean?",
          "options": [
            "exam",
            "religion, creed",
            "light",
            "to bring out"
          ],
          "correct": 0
        },
        {
          "title": "exam (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of اِمْتِحَانٌ?",
          "options": [
            "اِمْتِحَانَاتٌ",
            "ظُلُمَاتٌ",
            "أَسْمَاءٌ",
            "أَصَابِعُ"
          ],
          "correct": 0
        },
        {
          "title": "evening",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"evening\"?",
          "options": [
            "عِشَاءٌ",
            "ظُلْمَةٌ",
            "طَهَّرَ يُطَهِّرُ",
            "اِسْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "evening",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عِشَاءٌ mean?",
          "options": [
            "evening",
            "darkness",
            "to purify",
            "name"
          ],
          "correct": 0
        },
        {
          "title": "people, family",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"people, family\"?",
          "options": [
            "أَهْلٌ",
            "نُوْرٌ",
            "أَخْرَجَ يُخْرِجُ",
            "بَطْنٌ"
          ],
          "correct": 0
        },
        {
          "title": "people, family",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَهْلٌ mean?",
          "options": [
            "people, family",
            "light",
            "to bring out",
            "stomach"
          ],
          "correct": 0
        },
        {
          "title": "people, family (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَهْلٌ?",
          "options": [
            "أَهْلُوْنَ",
            "أَسْمَاءٌ",
            "أَصَابِعُ",
            "اِمْتِحَانَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "religion, creed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"religion, creed\"?",
          "options": [
            "مِلَّةٌ",
            "طَهَّرَ يُطَهِّرُ",
            "اِسْمٌ",
            "إِصْبَعٌ"
          ],
          "correct": 0
        },
        {
          "title": "religion, creed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِلَّةٌ mean?",
          "options": [
            "religion, creed",
            "to purify",
            "name",
            "finger"
          ],
          "correct": 0
        },
        {
          "title": "religion, creed (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِلَّةٌ?",
          "options": [
            "مِلَلٌ",
            "بُطُوْنٌ",
            "ضَالُّوْنَ",
            "أَهْلُوْنَ"
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
            "أَخْرَجَ يُخْرِجُ",
            "بَطْنٌ",
            "ضَالٌّ"
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
            "to bring out",
            "stomach",
            "misguided"
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
            "أَصَابِعُ",
            "اِمْتِحَانَاتٌ",
            "مِلَلٌ"
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
            "اِسْمٌ",
            "إِصْبَعٌ",
            "اِمْتِحَانٌ"
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
            "name",
            "finger",
            "exam"
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
            "ضَالُّوْنَ",
            "أَهْلُوْنَ",
            "ظُلُمَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to purify",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to purify\"?",
          "options": [
            "طَهَّرَ يُطَهِّرُ",
            "بَطْنٌ",
            "ضَالٌّ",
            "عِشَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "to purify",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَهَّرَ يُطَهِّرُ mean?",
          "options": [
            "to purify",
            "stomach",
            "misguided",
            "evening"
          ],
          "correct": 0
        },
        {
          "title": "to bring out",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bring out\"?",
          "options": [
            "أَخْرَجَ يُخْرِجُ",
            "إِصْبَعٌ",
            "اِمْتِحَانٌ",
            "أَهْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "to bring out",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخْرَجَ يُخْرِجُ mean?",
          "options": [
            "to bring out",
            "finger",
            "exam",
            "people, family"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "الحال بالمضارع",
      "subtitle": "Part 3: The حَالٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The حَالٌ as a جُمْلَةٌ صُغْرَى",
          "lines": [
            {
              "html": "The حَالٌ can occur as a جُمْلَةٌ صُغْرَى — either an اِسْمِيَّة or a فِعْلِيَّة. When the حَالٌ is a جُمْلَةٌ فِعْلِيَّةٌ, the verb inside it is either a فِعْلٌ مَاضٍ or a فِعْلٌ مُضَارِعٌ.",
              "list": false
            },
            {
              "html": "If the حَالٌ occurs as a sentence with a فِعْلٌ مُضَارِعٌ, it comes after the main sentence without any additions — no وَ, no pronoun, nothing.",
              "list": false
            },
            {
              "html": "This type of حَالٌ represents an action which occurs simultaneously with the main verb. It is translated using the present participle of the verb, without repeating the subject.",
              "list": false
            },
            {
              "html": "رَأَيْتُ زَيْدًا يُصَلِّيْ — I saw Zaid praying. ✓  (not: I saw Zaid, he is praying. ✗)",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "رَأَيْتُ زَيْدًا يُصَلِّيْ",
                "translation": "I saw Zaid praying.",
                "cells": [
                  "رَأَيْتُ",
                  "زَيْدًا",
                  "يُصَلِّيْ"
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
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَالٌ مِنَ الْمَفْعُوْلِ بِهِ"
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
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Note the label حَالٌ مِنَ الْمَفْعُوْلِ بِهِ — the state described belongs to Zaid, the object, not to the speaker. Which word the حَال describes is decided by the sense of the sentence.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When the حَالٌ is a جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مُضَارِعٌ, how does it attach to the main sentence?",
            "kind": "mcq",
            "options": [
              "It comes straight after the main sentence with no وَ and no pronoun",
              "It requires a وَاوٌ حَالِيَّةٌ",
              "It requires قَدْ",
              "It is joined by a حَرْفُ عَطْفٍ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Two حَال in One Sentence",
          "lines": [
            {
              "html": "One sentence can have two حَال without a حَرْفُ الْعَطْفِ between them. The word 'and' can be added in the translation even though no وَ appears in the Arabic.",
              "list": false
            },
            {
              "html": "رَأَيْتُ زَيْدًا سَاجِدًا يَدْعُو اللّٰهَ — I saw Zaid prostrating and praying to Allah.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "رَأَيْتُ زَيْدًا سَاجِدًا يَدْعُو اللّٰهَ",
                "translation": "I saw Zaid prostrating and praying to Allah.",
                "cells": [
                  "رَأَيْتُ",
                  "زَيْدًا",
                  "سَاجِدًا",
                  "يَدْعُو",
                  "اللّٰهَ"
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
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَالٌ"
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
                ]
              }
            },
            {
              "html": "Notice that the two حَال are of different kinds: سَاجِدًا is a single مَنْصُوْب word, while يَدْعُو اللّٰهَ is a whole nested sentence. Both fill حَال slots side by side.",
              "list": false
            },
            {
              "table": {
                "title": "Recognising this حَال",
                "headers": [
                  "Feature",
                  "What to look for"
                ],
                "rows": [
                  [
                    "Position",
                    "Immediately after the main sentence"
                  ],
                  [
                    "Additions",
                    "None — no وَ and no pronoun"
                  ],
                  [
                    "Verb",
                    "A فِعْلٌ مُضَارِعٌ"
                  ],
                  [
                    "Meaning",
                    "An action simultaneous with the main verb"
                  ],
                  [
                    "Translation",
                    "The present participle, without repeating the subject"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "In رَأَيْتُ زَيْدًا سَاجِدًا يَدْعُو اللّٰهَ, how many حَال are there, and how do they connect؟",
            "kind": "mcq",
            "options": [
              "Two — سَاجِدًا and يَدْعُو اللّٰهَ — sitting side by side with no حَرْفُ عَطْفٍ between them",
              "One long حَال made of both words",
              "Two, joined by a hidden وَ",
              "Only يَدْعُو اللّٰهَ is a حَالٌ; سَاجِدًا is a تَمْيِيْزٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The حَالٌ as a Verbal Sentence with a مُضَارِع",
        "rows": [
          {
            "label": "The two forms it can take",
            "arabic": "جُمْلَةٌ اِسْمِيَّةٌ أَوْ فِعْلِيَّةٌ",
            "meaning": "The حَال can occur as either kind of nested sentence."
          },
          {
            "label": "Its verb",
            "arabic": "فِعْلٌ مَاضٍ أَوْ مُضَارِعٌ",
            "meaning": "When the حَال is verbal, its verb is either a مَاضٍ or a مُضَارِع."
          },
          {
            "label": "With a مُضَارِع",
            "arabic": "بِلَا زِيَادَةٍ",
            "meaning": "It comes straight after the main sentence with no additions — no وَ, no pronoun."
          },
          {
            "label": "What it means",
            "arabic": "فِعْلٌ يَقَعُ مَعَ الْفِعْلِ الرَّئِيْسِيِّ",
            "meaning": "An action occurring simultaneously with the main verb."
          },
          {
            "label": "How to translate it",
            "arabic": "رَأَيْتُ زَيْدًا يُصَلِّيْ",
            "meaning": "'I saw Zaid praying' — the present participle, without repeating the subject."
          },
          {
            "label": "Two حَال together",
            "arabic": "رَأَيْتُ زَيْدًا سَاجِدًا يَدْعُو اللّٰهَ",
            "meaning": "No حَرْفُ عَطْفٍ is needed between them; 'and' may be supplied in the English."
          }
        ]
      },
      "quiz": [
        {
          "q": "In what two forms can the حَالٌ occur as a جُمْلَةٌ صُغْرَى?",
          "options": [
            "اِسْمِيَّة or فِعْلِيَّة",
            "مَاضٍ or أَمْر only",
            "مَرْفُوْع or مَجْرُوْر",
            "مُفْرَد or جَمْع"
          ],
          "correct": 0,
          "explanation": "And when it is فِعْلِيَّة, its verb is either a مَاضٍ or a مُضَارِع."
        },
        {
          "q": "What additions accompany a حَالٌ built on a فِعْلٌ مُضَارِعٌ?",
          "options": [
            "A وَ before it",
            "A pronoun referring to the subject",
            "None at all",
            "Both a وَ and a pronoun"
          ],
          "correct": 2,
          "explanation": "It comes straight after the main sentence, which is what makes it recognisable."
        },
        {
          "q": "What relationship does this kind of حَال express?",
          "options": [
            "An action occurring before the main verb",
            "An action occurring simultaneously with the main verb",
            "A reason for the main verb",
            "A place where the main verb happens"
          ],
          "correct": 1,
          "explanation": "That simultaneity is why English renders it with the present participle."
        },
        {
          "q": "Which translation of رَأَيْتُ زَيْدًا يُصَلِّيْ is correct?",
          "options": [
            "I saw Zaid, he is praying.",
            "I saw Zaid praying.",
            "I saw Zaid and prayed.",
            "Zaid saw me praying."
          ],
          "correct": 1,
          "explanation": "The subject is not repeated; the participle carries the simultaneous sense."
        },
        {
          "q": "In رَأَيْتُ زَيْدًا يُصَلِّيْ, which word does the حَال describe?",
          "options": [
            "The hidden فاعل of رَأَيْتُ",
            "زَيْدًا, the مَفْعُوْلٌ بِهِ",
            "The verb رَأَيْتُ itself",
            "Nothing in particular"
          ],
          "correct": 1,
          "explanation": "Hence the full label حَالٌ مِنَ الْمَفْعُوْلِ بِهِ; the sense decides which word it belongs to."
        },
        {
          "q": "What joins two حَال in رَأَيْتُ زَيْدًا سَاجِدًا يَدْعُو اللّٰهَ?",
          "options": [
            "A وَ",
            "A فَ",
            "Nothing — they sit side by side, though 'and' may be added in English",
            "A حَرْفُ جَرٍّ"
          ],
          "correct": 2,
          "explanation": "One is a single مَنْصُوْب word and the other a nested sentence, but both fill حَال slots."
        }
      ],
      "bank": [
        {
          "title": "رَأَيْتُ زَيْدًا يُصَلِّيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 433 (Section 1, Part 3)",
          "sentence": "رَأَيْتُ زَيْدًا يُصَلِّيْ",
          "translation": "I saw Zaid praying.",
          "cells": [
            "رَأَيْتُ",
            "زَيْدًا",
            "يُصَلِّيْ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَالٌ مِنَ الْمَفْعُوْلِ بِهِ"
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
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ بِهِ ثَانٍ"
          ]
        },
        {
          "title": "رَأَيْتُ زَيْدًا سَاجِدًا يَدْعُو اللّٰهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 433 (Section 1, Part 3)",
          "sentence": "رَأَيْتُ زَيْدًا سَاجِدًا يَدْعُو اللّٰهَ",
          "translation": "I saw Zaid prostrating and praying to Allah.",
          "cells": [
            "رَأَيْتُ",
            "زَيْدًا",
            "سَاجِدًا",
            "يَدْعُو",
            "اللّٰهَ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَالٌ"
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
            "نَعْتٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "نَدْعُو اللّٰهَ رَبَّنَا نَسْتَعِيْنُهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "نَدْعُو اللّٰهَ رَبَّنَا نَسْتَعِيْنُهُ",
          "translation": "We call upon Allah our Lord, seeking His help.",
          "cells": [
            "نَدْعُو",
            "اللّٰهَ",
            "رَبَّنَا",
            "نَسْتَعِيْنُ",
            "هُ"
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
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "حَالٌ مِنَ الْفَاعِلِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (نَحْنُ)"
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
            "تَمْيِيْزٌ",
            "خَبَرٌ",
            "مَفْعُوْلٌ فِيْهِ"
          ]
        },
        {
          "title": "طَافَ النَّاسُ يَذْكُرُوْنَ اللّٰهَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "طَافَ النَّاسُ يَذْكُرُوْنَ اللّٰهَ",
          "translation": "The people circumambulated, remembering Allah.",
          "cells": [
            "طَافَ",
            "النَّاسُ",
            "يَذْكُرُوْنَ",
            "اللّٰهَ"
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
                  "role": "حَالٌ مِنَ الْفَاعِلِ"
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
            "نَعْتٌ",
            "خَبَرٌ",
            "مَفْعُوْلٌ لَهُ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رَأَيْتُ الْإِمَامَ فِي الْمَسْجِدِ يَخْطُبُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "رَأَيْتُ الْإِمَامَ فِي الْمَسْجِدِ يَخْطُبُ",
          "translation": "I saw the imam in the masjid delivering the sermon.",
          "cells": [
            "رَأَيْتُ",
            "الْإِمَامَ",
            "فِي الْمَسْجِدِ",
            "يَخْطُبُ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَالٌ مِنَ الْمَفْعُوْلِ بِهِ"
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
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "خَبَرٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَبِثَتِ الْأُمُّ أَيَّامًا تَحْزَنُ عَلَى وَلَدِهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "لَبِثَتِ الْأُمُّ أَيَّامًا تَحْزَنُ عَلَى وَلَدِهَا",
          "translation": "The mother remained for days, grieving over her child.",
          "cells": [
            "لَبِثَتِ",
            "الْأُمُّ",
            "أَيَّامًا",
            "تَحْزَنُ",
            "عَلَى وَلَدِهَا"
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
                  "end": 4,
                  "role": "حَالٌ مِنَ الْفَاعِلِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (هِيَ)"
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
            "نَعْتٌ",
            "تَمْيِيْزٌ",
            "مَفْعُوْلٌ بِهِ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "رَأَيْتُ النَّاسَ يَطُوْفُوْنَ حَوْلَ الْكَعْبَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "رَأَيْتُ النَّاسَ يَطُوْفُوْنَ حَوْلَ الْكَعْبَةِ",
          "translation": "I saw the people circumambulating around the Kabah.",
          "cells": [
            "رَأَيْتُ",
            "النَّاسَ",
            "يَطُوْفُوْنَ",
            "حَوْلَ",
            "الْكَعْبَةِ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "حَالٌ مِنَ الْمَفْعُوْلِ بِهِ"
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
                  "role": "مُضَافٌ (ظَرْفٌ)"
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
            "نَعْتٌ",
            "خَبَرٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "وَجَدْتُ هٰؤُلَاءِ التُّجَّارَ يَخْدَعُوْنَ النَّاسَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "وَجَدْتُ هٰؤُلَاءِ التُّجَّارَ يَخْدَعُوْنَ النَّاسَ",
          "translation": "I found these merchants deceiving the people.",
          "cells": [
            "وَجَدْتُ",
            "هٰؤُلَاءِ",
            "التُّجَّارَ",
            "يَخْدَعُوْنَ",
            "النَّاسَ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "حَالٌ مِنَ الْمَفْعُوْلِ بِهِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "اِسْمُ الْإِشَارَةِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مُشَارٌ إِلَيْهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
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
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "وَجَدَ أَهْلُ مَكَّةَ آبَاءَهُمْ يَعْبُدُوْنَ الْأَصْنَامَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "وَجَدَ أَهْلُ مَكَّةَ آبَاءَهُمْ يَعْبُدُوْنَ الْأَصْنَامَ",
          "translation": "The people of Makkah found their forefathers worshipping the idols.",
          "cells": [
            "وَجَدَ",
            "أَهْلُ مَكَّةَ",
            "آبَاءَهُمْ",
            "يَعْبُدُوْنَ",
            "الْأَصْنَامَ"
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
                  "role": "حَالٌ مِنَ الْمَفْعُوْلِ بِهِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "خَبَرٌ",
            "بَدَلٌ",
            "مَفْعُوْلٌ فِيْهِ"
          ]
        },
        {
          "title": "سَمِعْتُ زَيْدًا يَقْرَأُ الْقُرْآنَ بَعْدَ صَلَاةِ الْفَجْرِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "سَمِعْتُ زَيْدًا يَقْرَأُ الْقُرْآنَ بَعْدَ صَلَاةِ الْفَجْرِ",
          "translation": "I heard Zaid reciting the Quran after the dawn prayer.",
          "cells": [
            "سَمِعْتُ",
            "زَيْدًا",
            "يَقْرَأُ",
            "الْقُرْآنَ",
            "بَعْدَ صَلَاةِ الْفَجْرِ"
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "حَالٌ مِنَ الْمَفْعُوْلِ بِهِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "يَصُوْمُ الْمُسْلِمُوْنَ أَيَّامَ رَمَضَانَ يَبْتَغُوْنَ أَجْرَ الْآخِرَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "يَصُوْمُ الْمُسْلِمُوْنَ أَيَّامَ رَمَضَانَ يَبْتَغُوْنَ أَجْرَ الْآخِرَةِ",
          "translation": "The Muslims fast the days of Ramadan, seeking the reward of the Hereafter.",
          "cells": [
            "يَصُوْمُ",
            "الْمُسْلِمُوْنَ",
            "أَيَّامَ رَمَضَانَ",
            "يَبْتَغُوْنَ",
            "أَجْرَ الْآخِرَةِ"
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
                  "end": 4,
                  "role": "حَالٌ مِنَ الْفَاعِلِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "نَعْتٌ",
            "خَبَرٌ",
            "مَفْعُوْلٌ لَهُ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "قَامَتِ الْمُعَلِّمَةُ أَمَامَ بَابِ الْمَدْرَسَةِ تُكَلِّمُ أُمَّ فَاطِمَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Section 1, Part 3)",
          "sentence": "قَامَتِ الْمُعَلِّمَةُ أَمَامَ بَابِ الْمَدْرَسَةِ تُكَلِّمُ أُمَّ فَاطِمَةَ",
          "translation": "The teacher stood in front of the school door, speaking to Fatimah's mother.",
          "cells": [
            "قَامَتِ",
            "الْمُعَلِّمَةُ",
            "أَمَامَ بَابِ الْمَدْرَسَةِ",
            "تُكَلِّمُ",
            "أُمَّ فَاطِمَةَ"
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
                  "end": 4,
                  "role": "حَالٌ مِنَ الْفَاعِلِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (هِيَ)"
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
            "خَبَرٌ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In نَدْعُو اللّٰهَ رَبَّنَا نَسْتَعِيْنُهُ, what is رَبَّنَا?",
          "options": [
            "A حَال",
            "A بَدَل of اللّٰهَ",
            "The فاعل",
            "A تَمْيِيْز"
          ],
          "correct": 1,
          "explanation": "It restates اللّٰهَ in more detail and shares its مَنْصُوْب state; نَسْتَعِيْنُهُ is then the حَال."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "Translate: طَافَ النَّاسُ يَذْكُرُوْنَ اللّٰهَ",
          "options": [
            "The people circumambulated, remembering Allah.",
            "The people remembered Allah and then circumambulated.",
            "The people who remember Allah circumambulated.",
            "Did the people circumambulate remembering Allah?"
          ],
          "correct": 0,
          "explanation": "The مُضَارِع sentence is a حَال describing the state of the فاعل during the tawaf."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In لَبِثَتِ الْأُمُّ أَيَّامًا تَحْزَنُ عَلَى وَلَدِهَا, what is أَيَّامًا?",
          "options": [
            "A حَال",
            "A مَفْعُوْلٌ بِهِ",
            "A مَفْعُوْلٌ فِيْهِ of time",
            "A تَمْيِيْز"
          ],
          "correct": 2,
          "explanation": "The حَال is تَحْزَنُ عَلَى وَلَدِهَا; أَيَّامًا separately gives the duration."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In وَجَدَ أَهْلُ مَكَّةَ آبَاءَهُمْ يَعْبُدُوْنَ الْأَصْنَامَ, which word does the حَال describe?",
          "options": [
            "أَهْلُ مَكَّةَ, the فاعل",
            "آبَاءَهُمْ, the مَفْعُوْلٌ بِهِ",
            "الْأَصْنَامَ",
            "The verb وَجَدَ"
          ],
          "correct": 1,
          "explanation": "It was the forefathers who were worshipping — the state belongs to the object."
        },
        {
          "title": "Book Exercise 1 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In هَلْ سَمِعْتُمُوْهُمْ يَغْتَابُوْنَ النَّاسَ؟, why is سَمِعْتُمُوْهُمْ spelled with a وَ?",
          "options": [
            "Because the verb is passive",
            "Because a وَ is inserted after تُمْ before an object pronoun",
            "Because هُمْ is plural",
            "Because هَلْ requires it"
          ],
          "correct": 1,
          "explanation": "This is the spelling rule from Unit 4.1; the حَال is the مُضَارِع sentence that follows."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In جَلَسَ النَّاسُ فِيْ بُيُوْتِهِمْ … يَأْكُلُوْنَ الْعَشَاءَ مَعَ أَهْلِهِمْ, what is the حَال?",
          "options": [
            "فِيْ بُيُوْتِهِمْ",
            "مَعَ أَهْلِهِمْ",
            "The whole sentence يَأْكُلُوْنَ الْعَشَاءَ مَعَ أَهْلِهِمْ",
            "الْعَشَاءَ"
          ],
          "correct": 2,
          "explanation": "The nested مُضَارِع sentence describes the state of the people while sitting."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In ضَرَبَ فَاطِمَةَ الصَّغِيْرَةَ أَخُوْهَا فَذَهَبَتْ إِلَى أُمِّهَا تَبْكِيْ وَتَشْتَكِيْهِ إِلَيْهَا, how many حَال are there?",
          "options": [
            "One — تَبْكِيْ",
            "Two — تَبْكِيْ and وَتَشْتَكِيْهِ إِلَيْهَا",
            "Three",
            "None"
          ],
          "correct": 1,
          "explanation": "Both مُضَارِع sentences describe Fatimah's state as she went; here a وَ does join them."
        },
        {
          "title": "Book Exercise 2 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In أَهْلُ مَكَّةَ وَجَدُوْا آبَاءَهُمْ يَعْبُدُوْنَ الْأَصْنَامَ … فَاتَّبَعُوْهَا فَضَلُّوْا عَنِ الصِّرَاطِ الْمُسْتَقِيْمِ, what does the فَ signal?",
          "options": [
            "A consequence — 'so they followed them, and so they strayed'",
            "A question",
            "A حَال",
            "A negation"
          ],
          "correct": 0,
          "explanation": "فَ is a حَرْفُ عَطْفٍ carrying the sense of sequence and result, distinct from the حَال construction."
        },
        {
          "title": "merchant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"merchant\"?",
          "options": [
            "تَاجِرٌ",
            "فَجْرٌ",
            "مَغْرِبٌ",
            "طَافَ يَطُوْفُ"
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
            "dawn",
            "sunset",
            "to circumambulate"
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
            "لَيَالٍ",
            "شَبَابٌ",
            "أَصْنَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "young man",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"young man\"?",
          "options": [
            "شَابٌّ",
            "لَيْلَةٌ",
            "سَنَةٌ",
            "حَزِنَ يَحْزَنُ"
          ],
          "correct": 0
        },
        {
          "title": "young man",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَابٌّ mean?",
          "options": [
            "young man",
            "night",
            "year",
            "to grieve"
          ],
          "correct": 0
        },
        {
          "title": "young man (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَابٌّ?",
          "options": [
            "شَبَابٌ",
            "سِنُوْنَ",
            "أَصْنَامٌ",
            "تُجَّارٌ"
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
            "مَغْرِبٌ",
            "طَافَ يَطُوْفُ",
            "خَتَمَ يَخْتِمُ"
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
            "sunset",
            "to circumambulate",
            "to complete, seal"
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
            "تُجَّارٌ",
            "لَيَالٍ",
            "شَبَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "dawn",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"dawn\"?",
          "options": [
            "فَجْرٌ",
            "سَنَةٌ",
            "حَزِنَ يَحْزَنُ",
            "تَلَا يَتْلُو"
          ],
          "correct": 0
        },
        {
          "title": "dawn",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَجْرٌ mean?",
          "options": [
            "dawn",
            "year",
            "to grieve",
            "to recite"
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
            "طَافَ يَطُوْفُ",
            "خَتَمَ يَخْتِمُ",
            "لَبِثَ يَلْبَثُ"
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
            "to circumambulate",
            "to complete, seal",
            "to remain, stay"
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
            "أَصْنَامٌ",
            "تُجَّارٌ",
            "شَبَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "sunset",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sunset\"?",
          "options": [
            "مَغْرِبٌ",
            "حَزِنَ يَحْزَنُ",
            "تَلَا يَتْلُو",
            "تَاجِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "sunset",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَغْرِبٌ mean?",
          "options": [
            "sunset",
            "to grieve",
            "to recite",
            "merchant"
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
            "خَتَمَ يَخْتِمُ",
            "لَبِثَ يَلْبَثُ",
            "شَابٌّ"
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
            "to complete, seal",
            "to remain, stay",
            "young man"
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
            "تُجَّارٌ",
            "أَصْنَامٌ",
            "شَبَابٌ"
          ],
          "correct": 0
        },
        {
          "title": "to circumambulate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to circumambulate\"?",
          "options": [
            "طَافَ يَطُوْفُ",
            "تَلَا يَتْلُو",
            "تَاجِرٌ",
            "صَنَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to circumambulate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَافَ يَطُوْفُ mean?",
          "options": [
            "to circumambulate",
            "to recite",
            "merchant",
            "idol"
          ],
          "correct": 0
        },
        {
          "title": "to circumambulate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَافَ يَطُوْفُ?",
          "options": [
            "طَوَافًا",
            "خَتْمًا",
            "لُبْثًا",
            "حُزْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to grieve",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to grieve\"?",
          "options": [
            "حَزِنَ يَحْزَنُ",
            "لَبِثَ يَلْبَثُ",
            "شَابٌّ",
            "فَجْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to grieve",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَزِنَ يَحْزَنُ mean?",
          "options": [
            "to grieve",
            "to remain, stay",
            "young man",
            "dawn"
          ],
          "correct": 0
        },
        {
          "title": "to grieve (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَزِنَ يَحْزَنُ?",
          "options": [
            "حُزْنًا",
            "تِلَاوَةً",
            "طَوَافًا",
            "خَتْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to complete, seal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to complete, seal\"?",
          "options": [
            "خَتَمَ يَخْتِمُ",
            "تَاجِرٌ",
            "صَنَمٌ",
            "لَيْلَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to complete, seal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَتَمَ يَخْتِمُ mean?",
          "options": [
            "to complete, seal",
            "merchant",
            "idol",
            "night"
          ],
          "correct": 0
        },
        {
          "title": "to complete, seal (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of خَتَمَ يَخْتِمُ?",
          "options": [
            "خَتْمًا",
            "لُبْثًا",
            "حُزْنًا",
            "طَوَافًا"
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
            "شَابٌّ",
            "فَجْرٌ",
            "مَغْرِبٌ"
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
            "young man",
            "dawn",
            "sunset"
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
            "طَوَافًا",
            "خَتْمًا",
            "حُزْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to remain, stay",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to remain, stay\"?",
          "options": [
            "لَبِثَ يَلْبَثُ",
            "صَنَمٌ",
            "لَيْلَةٌ",
            "سَنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to remain, stay",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَبِثَ يَلْبَثُ mean?",
          "options": [
            "to remain, stay",
            "idol",
            "night",
            "year"
          ],
          "correct": 0
        },
        {
          "title": "to remain, stay (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of لَبِثَ يَلْبَثُ?",
          "options": [
            "لُبْثًا",
            "حُزْنًا",
            "تِلَاوَةً",
            "طَوَافًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l8",
      "title": "الحال بالماضي",
      "subtitle": "Part 3: The حَالٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "The Form of a Past-Tense حَالٌ",
          "lines": [
            {
              "html": "If the حَالٌ occurs as a sentence with a فِعْلٌ مَاضٍ, it comes after the main sentence, but unlike the مُضَارِع type it does not stand bare.",
              "list": false
            },
            {
              "html": "The particle وَ must be added before the حَالٌ. This وَ is known as the وَاوٌ حَالِيَّةٌ. It is often followed by the particle قَدْ.",
              "list": false
            },
            {
              "table": {
                "title": "The Two Verbal حَال Compared",
                "headers": [
                  "Verb in the حَال",
                  "Additions",
                  "Example"
                ],
                "rows": [
                  [
                    "فِعْلٌ مُضَارِعٌ",
                    "None",
                    "رَأَيْتُ زَيْدًا يُصَلِّيْ"
                  ],
                  [
                    "فِعْلٌ مَاضٍ",
                    "وَاوٌ حَالِيَّةٌ, often with قَدْ",
                    "جِئْتُ وَقَدْ خَرَجْتَ"
                  ]
                ]
              }
            },
            {
              "tarkeebDiagram": {
                "sentence": "جِئْتُ وَقَدْ خَرَجْتَ",
                "translation": "I came but you had already left.",
                "cells": [
                  "جِئْتُ",
                  "وَ",
                  "قَدْ",
                  "خَرَجْتَ"
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
                        "end": 1,
                        "role": "وَاوٌ حَالِيَّةٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَرْفُ تَحْقِيْقٍ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                      }
                    ]
                  }
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "When the حَالٌ is a جُمْلَةٌ فِعْلِيَّةٌ with a فِعْلٌ مَاضٍ, what must precede it?",
            "kind": "mcq",
            "options": [
              "A وَاوٌ حَالِيَّةٌ, often followed by قَدْ",
              "Nothing at all, like the مُضَارِع حال",
              "A حَرْفُ اسْتِفْهَامٍ",
              "The particle لَمْ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The Two Meanings of a Past-Tense حَالٌ",
          "lines": [
            {
              "html": "This type of حَالٌ can carry two different meanings, and the context decides which applies.",
              "list": false
            },
            {
              "html": "1. A state prior to the occurrence of the main verb. This can be translated as 'but', 'already' or 'after'.",
              "list": false
            },
            {
              "html": "جِئْتُ وَقَدْ خَرَجْتَ — I came but you had already left. / I came after you had left. / You had already left when I came.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this example, خَرَجْتَ occurred prior to جِئْتُ.",
              "list": false
            },
            {
              "html": "2. A contrast to the meaning in the main sentence. This usually occurs after a question, a negative or a criticism, and can be translated as 'even though', 'although' or 'whereas'.",
              "list": false
            },
            {
              "html": "لِمَ لَمْ تُصَلِّ وَقَدْ أَمَرْتُكَ — Why did you not pray even though I instructed you to? / …although I instructed you to?",
              "list": true,
              "bullet": true
            },
            {
              "html": "A حَالٌ with a negative past-tense meaning is comprised of a فِعْلٌ مُضَارِعٌ with لَمْ — as in اِجْتَمَعَ النَّاسُ وَلَمْ يَأْتِ الْإِمَامُ بَعْدُ, 'The people have gathered but the imam has not come yet.'",
              "list": false
            },
            {
              "table": {
                "title": "Choosing the Right English Word",
                "headers": [
                  "Meaning",
                  "Typical context",
                  "English"
                ],
                "rows": [
                  [
                    "Prior state",
                    "A plain narrative",
                    "but, already, after"
                  ],
                  [
                    "Contrast",
                    "After a question, negative or criticism",
                    "even though, although, whereas"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "A past-tense حَالٌ occurring after a question, negative, or criticism typically carries which meaning?",
            "kind": "mcq",
            "options": [
              "Contrast — 'even though', 'although', 'whereas'",
              "A simultaneous state — 'whilst'",
              "A prior state only — 'already'",
              "A future state — 'once'"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The حَالٌ with a فِعْلٌ مَاضٍ",
        "rows": [
          {
            "label": "The required particle",
            "arabic": "وَاوٌ حَالِيَّةٌ",
            "meaning": "A وَ must be added before a past-tense حَال — unlike the مُضَارِع type, which stands bare."
          },
          {
            "label": "The usual companion",
            "arabic": "قَدْ",
            "meaning": "The وَاوٌ حَالِيَّةٌ is often followed by the particle قَدْ."
          },
          {
            "label": "Meaning 1 — prior state",
            "arabic": "جِئْتُ وَقَدْ خَرَجْتَ",
            "meaning": "A state before the main verb: 'I came but you had already left.'"
          },
          {
            "label": "Meaning 2 — contrast",
            "arabic": "لِمَ لَمْ تُصَلِّ وَقَدْ أَمَرْتُكَ",
            "meaning": "A contrast to the main sentence, usually after a question, negative or criticism: 'even though I instructed you to'."
          },
          {
            "label": "Negative past حَال",
            "arabic": "وَلَمْ + مُضَارِعٌ",
            "meaning": "اِجْتَمَعَ النَّاسُ وَلَمْ يَأْتِ الْإِمَامُ بَعْدُ — 'but the imam has not come yet.'"
          },
          {
            "label": "Its tarkib labels",
            "arabic": "وَاوٌ حَالِيَّةٌ / حَرْفُ تَحْقِيْقٍ / حَالٌ",
            "meaning": "The وَ and قَدْ are labelled as particles; only the verbal sentence itself is the حَال."
          }
        ]
      },
      "quiz": [
        {
          "q": "What must be added before a حَالٌ built on a فِعْلٌ مَاضٍ?",
          "options": [
            "The particle وَ, known as the وَاوٌ حَالِيَّةٌ",
            "The particle أَنْ",
            "A pronoun",
            "Nothing at all"
          ],
          "correct": 0,
          "explanation": "This is exactly what distinguishes it from the مُضَارِع type, which takes no additions."
        },
        {
          "q": "Which particle often follows the وَاوٌ حَالِيَّةٌ?",
          "options": [
            "لَنْ",
            "قَدْ",
            "إِنَّ",
            "هَلْ"
          ],
          "correct": 1,
          "explanation": "جِئْتُ وَقَدْ خَرَجْتَ — قَدْ is labelled a حَرْفُ تَحْقِيْقٍ."
        },
        {
          "q": "What are the two meanings a past-tense حَالٌ can carry?",
          "options": [
            "A place and a time",
            "A reason and a result",
            "A state prior to the main verb, or a contrast to it",
            "A quantity and a quality"
          ],
          "correct": 2,
          "explanation": "Context — especially whether a question or criticism precedes — decides which applies."
        },
        {
          "q": "Which English words render the 'prior state' meaning?",
          "options": [
            "even though, although, whereas",
            "but, already, after",
            "because, since, as",
            "while, during, throughout"
          ],
          "correct": 1,
          "explanation": "جِئْتُ وَقَدْ خَرَجْتَ — 'I came but you had already left.'"
        },
        {
          "q": "After what kind of main sentence does the 'contrast' meaning usually appear?",
          "options": [
            "A command",
            "A question, negative or criticism",
            "A nominal sentence",
            "A passive verb"
          ],
          "correct": 1,
          "explanation": "لِمَ لَمْ تُصَلِّ وَقَدْ أَمَرْتُكَ — a reproachful question."
        },
        {
          "q": "How is a حَالٌ with a negative past-tense meaning formed?",
          "options": [
            "With مَا and a مَاضٍ",
            "With لَنْ and a مُضَارِع",
            "With لَا and a مَاضٍ",
            "With لَمْ and a مُضَارِع"
          ],
          "correct": 3,
          "explanation": "وَلَمْ يَأْتِ الْإِمَامُ بَعْدُ — 'but the imam has not come yet.'"
        }
      ],
      "bank": [
        {
          "title": "جِئْتُ وَقَدْ خَرَجْتَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 435 (Section 1, Part 3)",
          "sentence": "جِئْتُ وَقَدْ خَرَجْتَ",
          "translation": "I came but you had already left.",
          "cells": [
            "جِئْتُ",
            "وَ",
            "قَدْ",
            "خَرَجْتَ"
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
                  "end": 1,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ تَحْقِيْقٍ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَرْفُ نَفْيٍ",
            "نَعْتٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "لِمَ لَمْ تُصَلِّ وَقَدْ أَمَرْتُكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 435 (Section 1, Part 3)",
          "sentence": "لِمَ لَمْ تُصَلِّ وَقَدْ أَمَرْتُكَ",
          "translation": "Why did you not pray even though I instructed you to?",
          "cells": [
            "لِمَ",
            "لَمْ",
            "تُصَلِّ",
            "وَ",
            "قَدْ",
            "أَمَرْتُكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
                },
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
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ تَحْقِيْقٍ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَرْفُ نَهْيٍ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "اِجْتَمَعَ النَّاسُ وَلَمْ يَأْتِ الْإِمَامُ بَعْدُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 435 (Section 1, Part 3)",
          "sentence": "اِجْتَمَعَ النَّاسُ وَلَمْ يَأْتِ الْإِمَامُ بَعْدُ",
          "translation": "The people have gathered but the imam has not come yet.",
          "cells": [
            "اِجْتَمَعَ",
            "النَّاسُ",
            "وَ",
            "لَمْ",
            "يَأْتِ",
            "الْإِمَامُ",
            "بَعْدُ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
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
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "نَعْتٌ",
            "خَبَرٌ"
          ]
        },
        {
          "title": "كَيْفَ تُصَلِّيْ وَلَمْ تَتَوَضَّأْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "كَيْفَ تُصَلِّيْ وَلَمْ تَتَوَضَّأْ",
          "translation": "How do you pray when you have not performed wudu?",
          "cells": [
            "كَيْفَ",
            "تُصَلِّيْ",
            "وَ",
            "لَمْ",
            "تَتَوَضَّأْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَالٌ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "وَاوٌ حَالِيَّةٌ"
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
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "خَبَرٌ مُقَدَّمٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا آمَنُكَ وَقَدْ خَدَعْتَنِيْ مِرَارًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "لَا آمَنُكَ وَقَدْ خَدَعْتَنِيْ مِرَارًا",
          "translation": "I do not trust you when you have deceived me many times.",
          "cells": [
            "لَا",
            "آمَنُكَ",
            "وَ",
            "قَدْ",
            "خَدَعْتَنِيْ",
            "مِرَارًا"
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
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (أَنَا) وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ تَحْقِيْقٍ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (تَ) وَمَفْعُوْلٌ بِهِ (نِيْ)"
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
            "حَرْفُ نَهْيٍ",
            "حَرْفُ عَطْفٍ",
            "تَمْيِيْزٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لِمَ تَصِيْحُوْنَ وَقَدْ قَامَ النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "لِمَ تَصِيْحُوْنَ وَقَدْ قَامَ النَّاسُ",
          "translation": "Why are you shouting when the people have already stood up?",
          "cells": [
            "لِمَ",
            "تَصِيْحُوْنَ",
            "وَ",
            "قَدْ",
            "قَامَ",
            "النَّاسُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ تَحْقِيْقٍ"
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
            "حَرْفُ عَطْفٍ",
            "حَرْفُ نَفْيٍ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "جَاءَ زَيْدٌ يَأْكُلُ وَجَاءَ أَحْمَدُ وَقَدْ أَكَلَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "جَاءَ زَيْدٌ يَأْكُلُ وَجَاءَ أَحْمَدُ وَقَدْ أَكَلَ",
          "translation": "Zaid came eating, and Ahmad came having already eaten.",
          "cells": [
            "جَاءَ زَيْدٌ",
            "يَأْكُلُ",
            "وَ",
            "جَاءَ أَحْمَدُ",
            "وَ",
            "قَدْ",
            "أَكَلَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَالٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ وَفَاعِلٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "حَرْفُ تَحْقِيْقٍ"
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
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَفْيٍ",
            "نَعْتٌ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "كَيْفَ يَدْخُلُ الْجَنَّةَ وَقَدْ كَفَرَ بِاللّٰهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "كَيْفَ يَدْخُلُ الْجَنَّةَ وَقَدْ كَفَرَ بِاللّٰهِ",
          "translation": "How will he enter Paradise even though he disbelieved in Allah?",
          "cells": [
            "كَيْفَ",
            "يَدْخُلُ",
            "الْجَنَّةَ",
            "وَ",
            "قَدْ",
            "كَفَرَ",
            "بِاللّٰهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَالٌ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (هُوَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ تَحْقِيْقٍ"
                },
                {
                  "start": 5,
                  "end": 6,
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
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (هُوَ)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "خَبَرٌ مُقَدَّمٌ",
            "حَرْفُ نَفْيٍ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "رَجَعَ الْحُجَّاجُ إِلَى الْبُيُوْتِ وَقَدْ غَفَرَ اللّٰهُ لَهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "رَجَعَ الْحُجَّاجُ إِلَى الْبُيُوْتِ وَقَدْ غَفَرَ اللّٰهُ لَهُمْ",
          "translation": "The pilgrims returned home, Allah having already forgiven them.",
          "cells": [
            "رَجَعَ",
            "الْحُجَّاجُ",
            "إِلَى الْبُيُوْتِ",
            "وَ",
            "قَدْ",
            "غَفَرَ اللّٰهُ",
            "لَهُمْ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ تَحْقِيْقٍ"
                },
                {
                  "start": 5,
                  "end": 6,
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
                  "role": "فِعْلٌ وَفَاعِلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَرْفُ نَفْيٍ",
            "خَبَرٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "كَيْفَ تَنْجَحُ فِي الْاِمْتِحَانِ وَكُنْتَ تُضَيِّعُ وَقْتَكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "كَيْفَ تَنْجَحُ فِي الْاِمْتِحَانِ وَكُنْتَ تُضَيِّعُ وَقْتَكَ",
          "translation": "How will you succeed in the exam when you used to waste your time?",
          "cells": [
            "كَيْفَ",
            "تَنْجَحُ",
            "فِي الْاِمْتِحَانِ",
            "وَ",
            "كُنْتَ",
            "تُضَيِّعُ وَقْتَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَالٌ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ فِيْهِ غَيْرُ صَرِيْحٍ"
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
                  "role": "فِعْلٌ نَاقِصٌ وَاِسْمُ كَانَ (تَ)"
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
            "حَرْفُ عَطْفٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "خَبَرٌ مُقَدَّمٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لِمَ يَسْجُدُوْنَ لِلْأَصْنَامِ وَقَدْ صَنَعُوْهَا بِأَيْدِيْهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "لِمَ يَسْجُدُوْنَ لِلْأَصْنَامِ وَقَدْ صَنَعُوْهَا بِأَيْدِيْهِمْ",
          "translation": "Why do they prostrate to idols when they made them with their own hands?",
          "cells": [
            "لِمَ",
            "يَسْجُدُوْنَ",
            "لِلْأَصْنَامِ",
            "وَ",
            "قَدْ",
            "صَنَعُوْهَا",
            "بِأَيْدِيْهِمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (وَاوُ الْجَمَاعَةِ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ تَحْقِيْقٍ"
                },
                {
                  "start": 5,
                  "end": 6,
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
                  "role": "فِعْلٌ وَفَاعِلٌ وَمَفْعُوْلٌ بِهِ (هَا)"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَرْفُ نَفْيٍ",
            "خَبَرٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أَكَلَ الطِّفْلُ الصَّائِمُ وَلَمْ تَغْرُبِ الشَّمْسُ بَعْدُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Section 1, Part 3)",
          "sentence": "أَكَلَ الطِّفْلُ الصَّائِمُ وَلَمْ تَغْرُبِ الشَّمْسُ بَعْدُ",
          "translation": "The fasting child ate although the sun had not yet set.",
          "cells": [
            "أَكَلَ",
            "الطِّفْلُ",
            "الصَّائِمُ",
            "وَ",
            "لَمْ",
            "تَغْرُبِ الشَّمْسُ",
            "بَعْدُ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 6,
                  "role": "حَالٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَنْعُوْتٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفُ نَفْيٍ وَجَزْمٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ وَفَاعِلٌ"
                },
                {
                  "start": 6,
                  "end": 6,
                  "role": "مَفْعُوْلٌ فِيْهِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "خَبَرٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In كَيْفَ تُصَلِّيْ وَلَمْ تَتَوَضَّأْ؟, which meaning does the حَال carry?",
          "options": [
            "A prior state — 'after you performed wudu'",
            "A contrast — 'even though you have not performed wudu'",
            "A reason",
            "A place"
          ],
          "correct": 1,
          "explanation": "It follows a reproachful question, and the لَمْ construction gives the negative past."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In لَا آمَنُكَ وَقَدْ خَدَعْتَنِيْ مِرَارًا, what is مِرَارًا?",
          "options": [
            "A حَال",
            "A مَفْعُوْلٌ مُطْلَقٌ giving the number of occurrences",
            "A تَمْيِيْز",
            "A نَعْت"
          ],
          "correct": 1,
          "explanation": "It counts the occurrences of the deceiving; the حَال is the whole وَقَدْ خَدَعْتَنِيْ clause."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In جَاءَ زَيْدٌ يَأْكُلُ وَجَاءَ أَحْمَدُ وَقَدْ أَكَلَ, how do the two حَال differ?",
          "options": [
            "The first is a مُضَارِع حَال with no additions; the second is a مَاضٍ حَال with وَقَدْ",
            "The first is nominal, the second verbal",
            "The first is negative, the second affirmative",
            "There is only one حَال"
          ],
          "correct": 0,
          "explanation": "'Zaid came eating, and Ahmad came having already eaten' — the contrast in form matches the contrast in timing."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In كَيْفَ يَدْخُلُ الْجَنَّةَ وَقَدْ كَفَرَ بِاللّٰهِ؟, why is the contrast reading correct?",
          "options": [
            "Because the main sentence is a reproachful question",
            "Because كَفَرَ is a past-tense verb",
            "Because الْجَنَّة is definite",
            "Because قَدْ is present"
          ],
          "correct": 0,
          "explanation": "'How will he enter Paradise even though he disbelieved in Allah?'"
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In رَجَعَ الْحُجَّاجُ إِلَى الْبُيُوْتِ وَقَدْ غَفَرَ اللّٰهُ لَهُمْ, which reading fits?",
          "options": [
            "Contrast — 'even though Allah forgave them'",
            "Prior state — 'having already been forgiven by Allah'",
            "A reason",
            "A place"
          ],
          "correct": 1,
          "explanation": "There is no question or criticism, and the forgiveness logically preceded the return."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In كَيْفَ تَنْجَحُ فِي الْاِمْتِحَانِ وَكُنْتَ تُضَيِّعُ وَقْتَكَ؟, what is nested inside the حَال?",
          "options": [
            "A كَانَ sentence whose خَبَر is itself a مُضَارِع sentence",
            "A quotation",
            "A شِبْهُ الْجُمْلَةِ only",
            "A single word"
          ],
          "correct": 0,
          "explanation": "كُنْتَ تُضَيِّعُ is the past-habitual formula from lesson 3, sitting inside the حَال slot."
        },
        {
          "title": "Book Exercise 3 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In لِمَ يَسْجُدُوْنَ لِلْأَصْنَامِ وَقَدْ صَنَعُوْهَا بِأَيْدِيْهِمْ؟, what does بِأَيْدِيْهِمْ express?",
          "options": [
            "The reason for making them",
            "The time of making them",
            "The instrument — 'with their own hands'",
            "The place of making them"
          ],
          "correct": 2,
          "explanation": "The بِ of instrument sits inside the حَال clause, sharpening the contrast."
        },
        {
          "title": "Book Exercise 4 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "Joining نَبْدَأُ الدَّرْسَ and نَقُوْلُ بِسْمِ اللّٰهِ as a حَال, what should be added?",
          "options": [
            "Nothing — the second verb is مُضَارِع",
            "A وَاوٌ حَالِيَّةٌ only",
            "A وَاوٌ حَالِيَّةٌ and قَدْ",
            "The particle أَنْ"
          ],
          "correct": 0,
          "explanation": "A مُضَارِع حَال takes no additions: نَبْدَأُ الدَّرْسَ نَقُوْلُ بِسْمِ اللّٰهِ."
        },
        {
          "title": "repeatedly, many times",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"repeatedly, many times\"?",
          "options": [
            "مِرَارًا",
            "بَعْثٌ",
            "صَائِمٌ",
            "صِحَّةٌ"
          ],
          "correct": 0
        },
        {
          "title": "repeatedly, many times",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِرَارًا mean?",
          "options": [
            "repeatedly, many times",
            "resurrection",
            "one who is fasting",
            "health"
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
            "غَنِيٌّ",
            "يَدٌ",
            "تَوَضَّأَ يَتَوَضَّأُ"
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
            "rich person",
            "hand",
            "to perform wudu"
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
            "أَيْدٍ",
            "أَغْنِيَاءُ",
            "حُجَّاجٌ"
          ],
          "correct": 0
        },
        {
          "title": "pilgrim",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"pilgrim\"?",
          "options": [
            "حَاجٌّ",
            "صَائِمٌ",
            "صِحَّةٌ",
            "صَاحَ يَصِيْحُ"
          ],
          "correct": 0
        },
        {
          "title": "pilgrim",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَاجٌّ mean?",
          "options": [
            "pilgrim",
            "one who is fasting",
            "health",
            "to shout"
          ],
          "correct": 0
        },
        {
          "title": "pilgrim (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَاجٌّ?",
          "options": [
            "حُجَّاجٌ",
            "أَصْنَامٌ",
            "صَائِمُوْنَ",
            "أَغْنِيَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "resurrection",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"resurrection\"?",
          "options": [
            "بَعْثٌ",
            "يَدٌ",
            "تَوَضَّأَ يَتَوَضَّأُ",
            "تَعَجَّبَ يَتَعَجَّبُ"
          ],
          "correct": 0
        },
        {
          "title": "resurrection",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَعْثٌ mean?",
          "options": [
            "resurrection",
            "hand",
            "to perform wudu",
            "to be amazed"
          ],
          "correct": 0
        },
        {
          "title": "rich person",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"rich person\"?",
          "options": [
            "غَنِيٌّ",
            "صِحَّةٌ",
            "صَاحَ يَصِيْحُ",
            "نَهَى يَنْهَى"
          ],
          "correct": 0
        },
        {
          "title": "rich person",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَنِيٌّ mean?",
          "options": [
            "rich person",
            "health",
            "to shout",
            "to forbid, prohibit"
          ],
          "correct": 0
        },
        {
          "title": "rich person (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of غَنِيٌّ?",
          "options": [
            "أَغْنِيَاءُ",
            "صَائِمُوْنَ",
            "أَصْنَامٌ",
            "حُجَّاجٌ"
          ],
          "correct": 0
        },
        {
          "title": "one who is fasting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one who is fasting\"?",
          "options": [
            "صَائِمٌ",
            "تَوَضَّأَ يَتَوَضَّأُ",
            "تَعَجَّبَ يَتَعَجَّبُ",
            "مِرَارًا"
          ],
          "correct": 0
        },
        {
          "title": "one who is fasting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَائِمٌ mean?",
          "options": [
            "one who is fasting",
            "to perform wudu",
            "to be amazed",
            "repeatedly, many times"
          ],
          "correct": 0
        },
        {
          "title": "one who is fasting (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَائِمٌ?",
          "options": [
            "صَائِمُوْنَ",
            "أَيْدٍ",
            "حُجَّاجٌ",
            "أَصْنَامٌ"
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
            "صَاحَ يَصِيْحُ",
            "نَهَى يَنْهَى",
            "صَنَمٌ"
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
            "to shout",
            "to forbid, prohibit",
            "idol"
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
            "أَصْنَامٌ",
            "أَغْنِيَاءُ",
            "حُجَّاجٌ"
          ],
          "correct": 0
        },
        {
          "title": "health",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"health\"?",
          "options": [
            "صِحَّةٌ",
            "تَعَجَّبَ يَتَعَجَّبُ",
            "مِرَارًا",
            "حَاجٌّ"
          ],
          "correct": 0
        },
        {
          "title": "health",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صِحَّةٌ mean?",
          "options": [
            "health",
            "to be amazed",
            "repeatedly, many times",
            "pilgrim"
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
            "نَهَى يَنْهَى",
            "صَنَمٌ",
            "بَعْثٌ"
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
            "to forbid, prohibit",
            "idol",
            "resurrection"
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
            "تَعَجُّبًا",
            "صِيَاحًا",
            "نَهْيًا"
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
            "مِرَارًا",
            "حَاجٌّ",
            "غَنِيٌّ"
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
            "repeatedly, many times",
            "pilgrim",
            "rich person"
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
            "نَهْيًا",
            "تَعَجُّبًا",
            "وُضُوْءًا"
          ],
          "correct": 0
        },
        {
          "title": "to be amazed",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be amazed\"?",
          "options": [
            "تَعَجَّبَ يَتَعَجَّبُ",
            "صَنَمٌ",
            "بَعْثٌ",
            "صَائِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be amazed",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَعَجَّبَ يَتَعَجَّبُ mean?",
          "options": [
            "to be amazed",
            "idol",
            "resurrection",
            "one who is fasting"
          ],
          "correct": 0
        },
        {
          "title": "to be amazed (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَعَجَّبَ يَتَعَجَّبُ?",
          "options": [
            "تَعَجُّبًا",
            "وُضُوْءًا",
            "نَهْيًا",
            "صِيَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to forbid, prohibit",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forbid, prohibit\"?",
          "options": [
            "نَهَى يَنْهَى",
            "حَاجٌّ",
            "غَنِيٌّ",
            "يَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to forbid, prohibit",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَهَى يَنْهَى mean?",
          "options": [
            "to forbid, prohibit",
            "pilgrim",
            "rich person",
            "hand"
          ],
          "correct": 0
        },
        {
          "title": "to forbid, prohibit (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَهَى يَنْهَى?",
          "options": [
            "نَهْيًا",
            "صِيَاحًا",
            "وُضُوْءًا",
            "تَعَجُّبًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l9",
      "title": "الحال جملة اسمية",
      "subtitle": "Part 3: The حَالٌ as a جُمْلَةٌ صُغْرَى",
      "concepts": [
        {
          "heading": "Form and the Two Meanings",
          "lines": [
            {
              "html": "When the حَالٌ is a جُمْلَةٌ اِسْمِيَّةٌ, it will be preceded by a وَاوٌ حَالِيَّةٌ. Unlike the past-tense verbal حَال, no قَدْ accompanies it — there is no verb for قَدْ to attach to.",
              "list": false
            },
            {
              "html": "This type of حَالٌ can have two meanings. The first is a state which occurs simultaneously with the main verb, translated as 'whilst'.",
              "list": false
            },
            {
              "html": "جِئْتُ وَأَنْتَ نَائِمٌ — I came whilst you were sleeping.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "جِئْتُ وَأَنْتَ نَائِمٌ",
                "translation": "I came whilst you were sleeping.",
                "cells": [
                  "جِئْتُ",
                  "وَ",
                  "أَنْتَ",
                  "نَائِمٌ"
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
                        "end": 1,
                        "role": "وَاوٌ حَالِيَّةٌ"
                      },
                      {
                        "start": 2,
                        "end": 3,
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
                        "role": "مُبْتَدَأٌ"
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
              "html": "The second meaning is a contrast to the meaning in the previous sentence, translated as 'whilst', 'even though', 'although' or 'whereas'.",
              "list": false
            },
            {
              "html": "يَعْبُدُوْنَ الْأَصْنَامَ وَهِيَ حِجَارَةٌ — They worship idols even though they are stones.",
              "list": true,
              "bullet": true
            }
          ],
          "exercise": {
            "prompt": "Why does a nominal (اسمية) حَالٌ never take قَدْ, unlike the past-tense verbal حَالٌ؟",
            "kind": "mcq",
            "options": [
              "Because there is no verb in it for قَدْ to attach to",
              "Because قَدْ is only used with مُضَارِع verbs",
              "Because a nominal حَالٌ cannot follow a وَاوٌ حَالِيَّةٌ",
              "Because قَدْ negates the sentence"
            ],
            "correct": 0
          }
        },
        {
          "heading": "After a Negative Main Sentence",
          "lines": [
            {
              "html": "If the main sentence is negative, the حَالٌ can be translated as 'as long as'.",
              "list": false
            },
            {
              "html": "لَا تَنَامُ الْأُمُّ وَالطِّفْلُ يَبْكِيْ — The mother does not sleep as long as the child is crying.",
              "list": true,
              "bullet": true
            },
            {
              "table": {
                "title": "Choosing the English Rendering",
                "headers": [
                  "Main sentence",
                  "Relationship",
                  "English"
                ],
                "rows": [
                  [
                    "Affirmative",
                    "Simultaneous state",
                    "whilst"
                  ],
                  [
                    "Affirmative, with a clash of sense",
                    "Contrast",
                    "whilst, even though, although, whereas"
                  ],
                  [
                    "Negative",
                    "Ongoing condition",
                    "as long as"
                  ]
                ]
              }
            },
            {
              "html": "Notice that the خَبَر of a nominal حَال may itself be a verbal sentence — as in وَالطِّفْلُ يَبْكِيْ, where يَبْكِيْ is a جُمْلَةٌ صُغْرَى nested one level deeper.",
              "list": false
            },
            {
              "table": {
                "title": "The Three Kinds of حَال Sentence Compared",
                "headers": [
                  "Type of حَال",
                  "وَاوٌ حَالِيَّةٌ?",
                  "قَدْ?"
                ],
                "rows": [
                  [
                    "فِعْلِيَّة with a مُضَارِع",
                    "No",
                    "No"
                  ],
                  [
                    "فِعْلِيَّة with a مَاضٍ",
                    "Yes",
                    "Often"
                  ],
                  [
                    "اِسْمِيَّة",
                    "Yes",
                    "No"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "When the main sentence is negative, how is a nominal حَالٌ typically rendered in English?",
            "kind": "mcq",
            "options": [
              "'as long as'",
              "'whilst'",
              "'even though'",
              "'after'"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The حَالٌ as a Nominal Sentence",
        "rows": [
          {
            "label": "Its required particle",
            "arabic": "وَاوٌ حَالِيَّةٌ",
            "meaning": "A nominal حَال is always preceded by a وَ; no قَدْ accompanies it."
          },
          {
            "label": "Meaning 1 — simultaneous",
            "arabic": "جِئْتُ وَأَنْتَ نَائِمٌ",
            "meaning": "'I came whilst you were sleeping.'"
          },
          {
            "label": "Meaning 2 — contrast",
            "arabic": "يَعْبُدُوْنَ الْأَصْنَامَ وَهِيَ حِجَارَةٌ",
            "meaning": "'They worship idols even though they are stones' — also 'whilst', 'although', 'whereas'."
          },
          {
            "label": "After a negative",
            "arabic": "لَا تَنَامُ الْأُمُّ وَالطِّفْلُ يَبْكِيْ",
            "meaning": "'The mother does not sleep as long as the child is crying.'"
          },
          {
            "label": "Nesting inside the حَال",
            "arabic": "وَالطِّفْلُ يَبْكِيْ",
            "meaning": "The خَبَر of a nominal حَال may itself be a verbal جُمْلَةٌ صُغْرَى."
          },
          {
            "label": "The three types compared",
            "arabic": "مُضَارِعٌ / مَاضٍ / اِسْمِيَّةٌ",
            "meaning": "Only the مُضَارِع type takes no وَ; only the مَاضٍ type commonly takes قَدْ."
          }
        ]
      },
      "quiz": [
        {
          "q": "What always precedes a حَالٌ that is a جُمْلَةٌ اِسْمِيَّةٌ?",
          "options": [
            "قَدْ",
            "أَنْ",
            "A وَاوٌ حَالِيَّةٌ",
            "Nothing"
          ],
          "correct": 2,
          "explanation": "Only the مُضَارِع type of حَال stands bare; both the مَاضٍ and اِسْمِيَّة types take a وَ."
        },
        {
          "q": "Why does قَدْ not accompany a nominal حَال?",
          "options": [
            "Because there is no verb for it to attach to",
            "Because قَدْ is only used in questions",
            "Because the وَ replaces it",
            "Because nominal sentences are always negative"
          ],
          "correct": 0,
          "explanation": "قَدْ is a verbal particle; a nominal sentence has a مُبْتَدَأ and خَبَر, not a verb."
        },
        {
          "q": "How is the simultaneous meaning of a nominal حَال translated?",
          "options": [
            "as long as",
            "whilst",
            "because",
            "after"
          ],
          "correct": 1,
          "explanation": "جِئْتُ وَأَنْتَ نَائِمٌ — 'I came whilst you were sleeping.'"
        },
        {
          "q": "Which set of words renders the contrast meaning?",
          "options": [
            "as long as, until, before",
            "because, since, therefore",
            "after, already, but",
            "whilst, even though, although, whereas"
          ],
          "correct": 3,
          "explanation": "يَعْبُدُوْنَ الْأَصْنَامَ وَهِيَ حِجَارَةٌ — 'even though they are stones'."
        },
        {
          "q": "How is the حَال translated when the main sentence is negative?",
          "options": [
            "as long as",
            "whilst",
            "even though",
            "after"
          ],
          "correct": 0,
          "explanation": "لَا تَنَامُ الْأُمُّ وَالطِّفْلُ يَبْكِيْ — 'as long as the child is crying'."
        },
        {
          "q": "In وَالطِّفْلُ يَبْكِيْ, what fills the خَبَر slot of the حَال?",
          "options": [
            "A single word",
            "A شِبْهُ الْجُمْلَةِ",
            "A verbal جُمْلَةٌ صُغْرَى",
            "Nothing — the خَبَر is omitted"
          ],
          "correct": 2,
          "explanation": "يَبْكِيْ is a verb with a hidden subject, so a nested sentence sits inside the حَال."
        }
      ],
      "bank": [
        {
          "title": "جِئْتُ وَأَنْتَ نَائِمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 437 (Section 1, Part 3)",
          "sentence": "جِئْتُ وَأَنْتَ نَائِمٌ",
          "translation": "I came whilst you were sleeping.",
          "cells": [
            "جِئْتُ",
            "وَ",
            "أَنْتَ",
            "نَائِمٌ"
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
                  "end": 1,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 3,
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
            "حَرْفُ عَطْفٍ",
            "حَرْفُ تَحْقِيْقٍ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يَعْبُدُوْنَ الْأَصْنَامَ وَهِيَ حِجَارَةٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 437 (Section 1, Part 3)",
          "sentence": "يَعْبُدُوْنَ الْأَصْنَامَ وَهِيَ حِجَارَةٌ",
          "translation": "They worship idols even though they are stones.",
          "cells": [
            "يَعْبُدُوْنَ",
            "الْأَصْنَامَ",
            "وَ",
            "هِيَ",
            "حِجَارَةٌ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
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
                  "role": "مُبْتَدَأٌ"
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
            "حَرْفُ عَطْفٍ",
            "ضَمِيْرُ الْفَصْلِ",
            "نَعْتٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "لَا تَنَامُ الْأُمُّ وَالطِّفْلُ يَبْكِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book p. 437 (Section 1, Part 3)",
          "sentence": "لَا تَنَامُ الْأُمُّ وَالطِّفْلُ يَبْكِيْ",
          "translation": "The mother does not sleep as long as the child is crying.",
          "cells": [
            "لَا",
            "تَنَامُ",
            "الْأُمُّ",
            "وَ",
            "الطِّفْلُ",
            "يَبْكِيْ"
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
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ نَهْيٍ",
            "حَرْفُ عَطْفٍ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "أَشْرَكُوْا بِاللّٰهِ وَهُوَ خَلَقَهُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "أَشْرَكُوْا بِاللّٰهِ وَهُوَ خَلَقَهُمْ",
          "translation": "They associated partners with Allah even though He created them.",
          "cells": [
            "أَشْرَكُوْا",
            "بِاللّٰهِ",
            "وَ",
            "هُوَ",
            "خَلَقَهُمْ"
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
                  "end": 2,
                  "role": "وَاوٌ حَالِيَّةٌ"
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
                  "role": "مُبْتَدَأٌ"
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
            "حَرْفُ عَطْفٍ",
            "ضَمِيْرُ الْفَصْلِ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "كَيْفَ تَعْصِي اللّٰهَ وَهُوَ يَرَاكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "كَيْفَ تَعْصِي اللّٰهَ وَهُوَ يَرَاكَ",
          "translation": "How do you disobey Allah whilst He sees you?",
          "cells": [
            "كَيْفَ",
            "تَعْصِي",
            "اللّٰهَ",
            "وَ",
            "هُوَ",
            "يَرَاكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَالٌ مُقَدَّمٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
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
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "خَبَرٌ مُقَدَّمٌ",
            "ضَمِيْرُ الْفَصْلِ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لِمَ لَا تَتَّبِعُ الرُّسُلَ وَهُمْ مُهْتَدُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "لِمَ لَا تَتَّبِعُ الرُّسُلَ وَهُمْ مُهْتَدُوْنَ",
          "translation": "Why do you not follow the messengers even though they are rightly guided?",
          "cells": [
            "لِمَ",
            "لَا",
            "تَتَّبِعُ",
            "الرُّسُلَ",
            "وَ",
            "هُمْ",
            "مُهْتَدُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مَفْعُوْلٌ لَهُ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ نَفْيٍ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 5,
                  "end": 6,
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
            "حَرْفُ نَهْيٍ",
            "حَرْفُ عَطْفٍ",
            "نَعْتٌ",
            "خَبَرٌ مُقَدَّمٌ"
          ]
        },
        {
          "title": "نَعْبُدُ اللّٰهَ وَنَحْنُ رَاجُوْنَ خَائِفُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "نَعْبُدُ اللّٰهَ وَنَحْنُ رَاجُوْنَ خَائِفُوْنَ",
          "translation": "We worship Allah whilst hoping and fearing.",
          "cells": [
            "نَعْبُدُ",
            "اللّٰهَ",
            "وَ",
            "نَحْنُ",
            "رَاجُوْنَ",
            "خَائِفُوْنَ"
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
                  "end": 3,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرٌ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "نَعْتٌ",
            "تَمْيِيْزٌ",
            "بَدَلٌ"
          ]
        },
        {
          "title": "﴿أَخَذَهُمُ الْعَذَابُ وَهُمْ ظَالِمُوْنَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "﴿أَخَذَهُمُ الْعَذَابُ وَهُمْ ظَالِمُوْنَ﴾",
          "translation": "The punishment seized them whilst they were wrongdoers.",
          "cells": [
            "أَخَذَ",
            "هُمُ",
            "الْعَذَابُ",
            "وَ",
            "هُمْ",
            "ظَالِمُوْنَ"
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
                  "role": "مَفْعُوْلٌ بِهِ مُقَدَّمٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ مُؤَخَّرٌ"
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
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفُ عَطْفٍ",
            "فَاعِلٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "﴿لَا يُعَذِّبُهُمُ اللّٰهُ وَهُمْ يَسْتَغْفِرُوْنَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "﴿لَا يُعَذِّبُهُمُ اللّٰهُ وَهُمْ يَسْتَغْفِرُوْنَ﴾",
          "translation": "Allah does not punish them as long as they seek forgiveness.",
          "cells": [
            "لَا",
            "يُعَذِّبُ",
            "هُمُ",
            "اللّٰهُ",
            "وَ",
            "هُمْ",
            "يَسْتَغْفِرُوْنَ"
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
                  "role": "مَفْعُوْلٌ بِهِ مُقَدَّمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ مُؤَخَّرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 5,
                  "end": 6,
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
            "حَرْفُ نَهْيٍ",
            "حَرْفُ عَطْفٍ",
            "فَاعِلٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "﴿وَأَغْرَقْنَا آلَ فِرْعَوْنَ وَأَنْتُمْ تَنْظُرُوْنَ﴾",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "﴿وَأَغْرَقْنَا آلَ فِرْعَوْنَ وَأَنْتُمْ تَنْظُرُوْنَ﴾",
          "translation": "And We drowned the people of Pharaoh whilst you were looking on.",
          "cells": [
            "أَغْرَقْنَا",
            "آلَ فِرْعَوْنَ",
            "وَ",
            "أَنْتُمْ",
            "تَنْظُرُوْنَ"
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
                  "role": "وَاوٌ حَالِيَّةٌ"
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
                  "role": "مُبْتَدَأٌ"
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
            "حَرْفُ عَطْفٍ",
            "فَاعِلٌ مُؤَخَّرٌ",
            "نَعْتٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "رَجَعَ الْأَوْلَادُ مِنَ الْحَدِيْقَةِ وَهُمْ مَسْرُوْرُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "رَجَعَ الْأَوْلَادُ مِنَ الْحَدِيْقَةِ وَهُمْ مَسْرُوْرُوْنَ",
          "translation": "The children returned from the garden whilst they were happy.",
          "cells": [
            "رَجَعَ",
            "الْأَوْلَادُ",
            "مِنَ الْحَدِيْقَةِ",
            "وَ",
            "هُمْ",
            "مَسْرُوْرُوْنَ"
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
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرٌ"
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
          "title": "لَا نَعْبُدُ الْأَنْبِيَاءَ وَالْأَوْلِيَاءَ وَهُمْ عِبَادٌ أَمْثَالُنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 5 (Section 1, Part 3)",
          "sentence": "لَا نَعْبُدُ الْأَنْبِيَاءَ وَالْأَوْلِيَاءَ وَهُمْ عِبَادٌ أَمْثَالُنَا",
          "translation": "We do not worship the prophets and the friends of Allah, as they are servants like us.",
          "cells": [
            "لَا",
            "نَعْبُدُ",
            "الْأَنْبِيَاءَ وَالْأَوْلِيَاءَ",
            "وَ",
            "هُمْ",
            "عِبَادٌ",
            "أَمْثَالُنَا"
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
                  "role": "فِعْلٌ وَفَاعِلٌ مُسْتَتِرٌ (نَحْنُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "وَاوٌ حَالِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 6,
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
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرٌ"
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
            "حَرْفُ نَهْيٍ",
            "حَرْفُ عَطْفٍ",
            "بَدَلٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In أَشْرَكُوْا بِاللّٰهِ وَهُوَ خَلَقَهُمْ, which meaning does the حَال carry?",
          "options": [
            "Simultaneous — 'whilst He created them'",
            "Contrast — 'even though He created them'",
            "As long as",
            "A reason"
          ],
          "correct": 1,
          "explanation": "The clash between associating partners and being created by Him is the point."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In كَيْفَ تَعْصِي اللّٰهَ وَهُوَ يَرَاكَ, what fills the خَبَر of the حَال?",
          "options": [
            "هُوَ",
            "The verbal sentence يَرَاكَ",
            "اللّٰهَ",
            "There is no خَبَر"
          ],
          "correct": 1,
          "explanation": "هُوَ is the مُبْتَدَأ and the verbal sentence يَرَاكَ is its خَبَر — a nested جُمْلَةٌ صُغْرَى."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In لِمَ لَا تَتَّبِعُ الرُّسُلَ وَهُمْ مُهْتَدُوْنَ؟, why does the contrast reading fit?",
          "options": [
            "Because the main sentence is a reproachful question",
            "Because مُهْتَدُوْنَ is plural",
            "Because الرُّسُل is definite",
            "Because there is no قَدْ"
          ],
          "correct": 0,
          "explanation": "'Why do you not follow the messengers even though they are rightly guided?'"
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In نَعْبُدُ اللّٰهَ وَنَحْنُ رَاجُوْنَ خَائِفُوْنَ, how many خَبَر does the حَال have?",
          "options": [
            "One",
            "Two — رَاجُوْنَ and خَائِفُوْنَ",
            "Three",
            "None"
          ],
          "correct": 1,
          "explanation": "A مُبْتَدَأ may carry more than one خَبَر; here both describe the state of worship."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In ﴿أَخَذَهُمُ الْعَذَابُ وَهُمْ ظَالِمُوْنَ﴾, what is الْعَذَابُ?",
          "options": [
            "The مَفْعُوْلٌ بِهِ",
            "The فَاعِلٌ مُؤَخَّرٌ",
            "Part of the حَال",
            "The مُبْتَدَأ"
          ],
          "correct": 1,
          "explanation": "هُمْ attached to the verb is the fronted object; the punishment is what seized them."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In ﴿لَا يُعَذِّبُهُمُ اللّٰهُ وَهُمْ يَسْتَغْفِرُوْنَ﴾, which rendering fits best?",
          "options": [
            "Allah does not punish them as long as they seek forgiveness.",
            "Allah punished them because they sought forgiveness.",
            "Allah will punish them after they seek forgiveness.",
            "Does Allah punish them whilst they seek forgiveness?"
          ],
          "correct": 0,
          "explanation": "The main sentence is negative, which triggers the 'as long as' reading."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In ﴿وَأَغْرَقْنَا آلَ فِرْعَوْنَ وَأَنْتُمْ تَنْظُرُوْنَ﴾, whose state does the حَال describe?",
          "options": [
            "آل فِرْعَوْن",
            "The نَا of أَغْرَقْنَا",
            "The addressees, 'you'",
            "Nobody in particular"
          ],
          "correct": 2,
          "explanation": "أَنْتُمْ is the مُبْتَدَأ of the حَال — 'whilst you were looking on'."
        },
        {
          "title": "Book Exercise 5 (Section 1, Part 3)",
          "kind": "mcq",
          "prompt": "In رَجَعَ الْأَوْلَادُ مِنَ الْحَدِيْقَةِ وَهُمْ مَسْرُوْرُوْنَ, which meaning applies?",
          "options": [
            "Contrast — 'even though they were happy'",
            "Simultaneous — 'whilst they were happy'",
            "As long as",
            "A reason"
          ],
          "correct": 1,
          "explanation": "There is no clash of sense, and the main sentence is affirmative."
        },
        {
          "title": "sleeping",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sleeping\"?",
          "options": [
            "نَائِمٌ",
            "رَاجٍ",
            "مَسْرُوْرٌ",
            "مِثْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "sleeping",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَائِمٌ mean?",
          "options": [
            "sleeping",
            "hoping",
            "happy, delighted",
            "like, similar"
          ],
          "correct": 0
        },
        {
          "title": "sleeping (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of نَائِمٌ?",
          "options": [
            "نَائِمُوْنَ",
            "رَاجُوْنَ",
            "مَسْرُوْرُوْنَ",
            "أَمْثَالٌ"
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
            "خَائِفٌ",
            "وَلِيٌّ",
            "عَالِمٌ"
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
            "fearing",
            "close friend of Allah",
            "scholar"
          ],
          "correct": 0
        },
        {
          "title": "stone (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of حَجَرٌ?",
          "options": [
            "حِجَارَةٌ",
            "خَائِفُوْنَ",
            "أَوْلِيَاءُ",
            "عُلَمَاءُ"
          ],
          "correct": 0
        },
        {
          "title": "rightly guided",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"rightly guided\"?",
          "options": [
            "مُهْتَدٍ",
            "مَسْرُوْرٌ",
            "مِثْلٌ",
            "أَشْرَكَ يُشْرِكُ"
          ],
          "correct": 0
        },
        {
          "title": "rightly guided",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُهْتَدٍ mean?",
          "options": [
            "rightly guided",
            "happy, delighted",
            "like, similar",
            "to associate partners"
          ],
          "correct": 0
        },
        {
          "title": "rightly guided (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُهْتَدٍ?",
          "options": [
            "مُهْتَدُوْنَ",
            "مَسْرُوْرُوْنَ",
            "أَمْثَالٌ",
            "نَائِمُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "hoping",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hoping\"?",
          "options": [
            "رَاجٍ",
            "وَلِيٌّ",
            "عَالِمٌ",
            "عَصَى يَعْصِيْ"
          ],
          "correct": 0
        },
        {
          "title": "hoping",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَاجٍ mean?",
          "options": [
            "hoping",
            "close friend of Allah",
            "scholar",
            "to disobey"
          ],
          "correct": 0
        },
        {
          "title": "hoping (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of رَاجٍ?",
          "options": [
            "رَاجُوْنَ",
            "أَوْلِيَاءُ",
            "عُلَمَاءُ",
            "حِجَارَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "fearing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"fearing\"?",
          "options": [
            "خَائِفٌ",
            "مِثْلٌ",
            "أَشْرَكَ يُشْرِكُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ"
          ],
          "correct": 0
        },
        {
          "title": "fearing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَائِفٌ mean?",
          "options": [
            "fearing",
            "like, similar",
            "to associate partners",
            "to seek forgiveness"
          ],
          "correct": 0
        },
        {
          "title": "fearing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَائِفٌ?",
          "options": [
            "خَائِفُوْنَ",
            "أَمْثَالٌ",
            "نَائِمُوْنَ",
            "مُهْتَدُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "happy, delighted",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"happy, delighted\"?",
          "options": [
            "مَسْرُوْرٌ",
            "عَالِمٌ",
            "عَصَى يَعْصِيْ",
            "نَائِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "happy, delighted",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَسْرُوْرٌ mean?",
          "options": [
            "happy, delighted",
            "scholar",
            "to disobey",
            "sleeping"
          ],
          "correct": 0
        },
        {
          "title": "happy, delighted (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مَسْرُوْرٌ?",
          "options": [
            "مَسْرُوْرُوْنَ",
            "عُلَمَاءُ",
            "حِجَارَةٌ",
            "رَاجُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "close friend of Allah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"close friend of Allah\"?",
          "options": [
            "وَلِيٌّ",
            "أَشْرَكَ يُشْرِكُ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "حَجَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "close friend of Allah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَلِيٌّ mean?",
          "options": [
            "close friend of Allah",
            "to associate partners",
            "to seek forgiveness",
            "stone"
          ],
          "correct": 0
        },
        {
          "title": "close friend of Allah (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَلِيٌّ?",
          "options": [
            "أَوْلِيَاءُ",
            "نَائِمُوْنَ",
            "مُهْتَدُوْنَ",
            "خَائِفُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "like, similar",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"like, similar\"?",
          "options": [
            "مِثْلٌ",
            "عَصَى يَعْصِيْ",
            "نَائِمٌ",
            "مُهْتَدٍ"
          ],
          "correct": 0
        },
        {
          "title": "like, similar",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مِثْلٌ mean?",
          "options": [
            "like, similar",
            "to disobey",
            "sleeping",
            "rightly guided"
          ],
          "correct": 0
        },
        {
          "title": "like, similar (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مِثْلٌ?",
          "options": [
            "أَمْثَالٌ",
            "حِجَارَةٌ",
            "رَاجُوْنَ",
            "مَسْرُوْرُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "scholar",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"scholar\"?",
          "options": [
            "عَالِمٌ",
            "اِسْتَغْفَرَ يَسْتَغْفِرُ",
            "حَجَرٌ",
            "رَاجٍ"
          ],
          "correct": 0
        },
        {
          "title": "scholar",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَالِمٌ mean?",
          "options": [
            "scholar",
            "to seek forgiveness",
            "stone",
            "hoping"
          ],
          "correct": 0
        },
        {
          "title": "scholar (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَالِمٌ?",
          "options": [
            "عُلَمَاءُ",
            "مُهْتَدُوْنَ",
            "خَائِفُوْنَ",
            "أَوْلِيَاءُ"
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
            "نَائِمٌ",
            "مُهْتَدٍ",
            "خَائِفٌ"
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
            "sleeping",
            "rightly guided",
            "fearing"
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
            "حَجَرٌ",
            "رَاجٍ",
            "مَسْرُوْرٌ"
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
            "stone",
            "hoping",
            "happy, delighted"
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
            "مُهْتَدٍ",
            "خَائِفٌ",
            "وَلِيٌّ"
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
            "rightly guided",
            "fearing",
            "close friend of Allah"
          ],
          "correct": 0
        }
      ]
    }
  ]
};

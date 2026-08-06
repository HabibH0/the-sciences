// Module 21 — جَوَابُ الْأَمْرِ وَالنَّهْيِ, اَلْجُمْلَةُ التَّعْلِيْلِيَّةُ, and
// اَلْجُمْلَةُ الِاسْتِدْرَاكِيَّةُ, plus Unit 6 Review (From the Start, Unit 6,
// Parts 4-6, pp. 589-602)
//
// l1-l10 converted from content-fstu-new/unit6-lesson17..26.js, same
// conversion pattern as module-04..20.js (see module-04.js header comment);
// continue module-19.js's/module-20.js's l1..l5/l1..l11 (source lessons
// 1..16) within the same Unit 6. Covers Parts 4-6: the sentence after a
// command/prohibition (Part 4), the reason-giving جُمْلَةٌ تَعْلِيْلِيَّةٌ
// (Part 5), and the presumption-removing جُمْلَةٌ اسْتِدْرَاكِيَّةٌ (Part 6)
// -- completing the six connections promised in Unit 6's own Introduction
// (see module-19.js's header). l11 ("المراجعة") is generated from
// unit6-summary.js's keyTerms/nouns/verbs/conditionalNouns/
// conditionalParticles -- no new teaching content, no exercise gate,
// mirroring modules 14/15/18's end-of-section review lessons. Its
// `conditionalNouns`/`conditionalParticles` lists (أَسْمَاءُ الشَّرْطِ /
// حُرُوْفُ الشَّرْطِ, already vocab-shaped) are folded into the practice
// bank alongside nouns/verbs, mirroring how module-08.js folded
// unit3-2-summary.js's flat `prepositions` list into its bank. Its six
// `structures` entries are each kept as their own reference-table concept,
// mirroring modules 15/18.

export default {
  "id": "f-jawab-taililiyya-istidrakiyya",
  "title": "جَوَابُ الْأَمْرِ وَأَخَوَاتُهَا",
  "heading": "اَلْوَحْدَةُ السَّادِسَةُ",
  "blurb": "The last three of Unit 6's six ways to join sentences, plus a full review of Unit 6.",
  "lessons": [
    {
      "id": "l1",
      "title": "جواب الأمر",
      "subtitle": "Part 4: Sentences after اَلْأَمْرُ and اَلنَّهْيُ",
      "concepts": [
        {
          "heading": "What Part 4 covers",
          "lines": [
            {
              "html": "A sentence comprised of a فِعْلُ أَمْرٍ or a فِعْلُ نَهْيٍ is sometimes followed by another sentence which shows the result of adhering, or not adhering, to the أَمْرٌ or نَهْيٌ. This second sentence is called جَوَابُ الْأَمْرِ or جَوَابُ النَّهْيِ.",
              "list": false
            },
            {
              "html": "This is the fourth of the six connections listed in the Introduction, and it is close kin to the conditional of Part 3. 'Worship Allah, you will enter Jannah' means 'if you worship Allah, you will enter Jannah' — which is exactly why the second verb comes out مَجْزُوْمٌ, as though an unspoken إِنْ stood before it.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How is جَوَابُ الْأَمْرِ/جَوَابُ النَّهْيِ related to the conditional sentences of Part 3؟",
            "kind": "mcq",
            "options": [
              "It works the same way as a conditional — 'Worship Allah, you will enter Jannah' means 'if you worship Allah...', which is why the second verb is مَجْزُوْمٌ as if an unspoken إِنْ preceded it",
              "It has no relation to conditionals at all",
              "It always requires the explicit particle إِنْ to be written",
              "It only occurs with negative commands"
            ],
            "correct": 0
          }
        },
        {
          "heading": "جَوَابُ الْأَمْرِ",
          "lines": [
            {
              "html": "The جَوَابُ الْأَمْرِ shows the result of adhering to the command.",
              "list": false
            },
            {
              "html": "The verb of the جَوَابُ الْأَمْرِ is a فِعْلٌ مُضَارِعٌ in the مَجْزُوْمٌ state. In translation, these sentences can be separated by a comma, or can be joined with the word 'and'.",
              "list": false
            },
            {
              "html": "أُعْبُدِ اللهَ تَدْخُلِ الْجَنَّةَ — Worship Allah, you will enter Jannah. / Worship Allah and you will enter Jannah.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "أُعْبُدِ اللهَ تَدْخُلِ الْجَنَّةَ",
                "translation": "Worship Allah, you will enter Jannah.",
                "cells": [
                  "أُعْبُدِ",
                  "اللهَ",
                  "تَدْخُلِ",
                  "الْجَنَّةَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "أَمْرٌ"
                      },
                      {
                        "start": 2,
                        "end": 3,
                        "role": "جَوَابُ أَمْرٍ"
                      }
                    ]
                  },
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
                        "end": 1,
                        "role": "مَفْعُوْلٌ بِهِ"
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
                  }
                ]
              }
            },
            {
              "html": "The jazm is the whole of the grammar here. تَدْخُلِ is not مَرْفُوْعٌ, so it is not simply a statement standing beside the command; the sukūn shows that it depends on the command being obeyed. The kasrah it carries is only there to avoid two sukūns meeting with the ال of الْجَنَّةَ.",
              "list": false
            },
            {
              "table": {
                "title": "The two sentences",
                "headers": [
                  "Sentence",
                  "Verb",
                  "Meaning"
                ],
                "rows": [
                  [
                    "أَمْرٌ",
                    "فِعْلُ أَمْرٍ",
                    "the command itself"
                  ],
                  [
                    "جَوَابُ أَمْرٍ",
                    "مُضَارِعٌ مَجْزُوْمٌ",
                    "the result of obeying it"
                  ]
                ]
              }
            },
            {
              "html": "Watch out for a look-alike. أُعْبُدِ اللهَ وَتَدْخُلُ الْجَنَّةَ, with a wāw and a مَرْفُوْع verb, would be two independent sentences joined by 'and' — no dependence, no promise. It is the missing wāw and the sukūn together that make a جَوَابُ أَمْرٍ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What state is the verb of the جَوَابُ الْأَمْرِ in, and how does that differ from an ordinary 'and' sentence like أُعْبُدِ اللهَ وَتَدْخُلُ الْجَنَّةَ؟",
            "kind": "mcq",
            "options": [
              "مَجْزُوْمٌ, showing dependence on the command being obeyed; a وَ + مَرْفُوْع verb would instead be two independent, unconnected sentences",
              "مَرْفُوْعٌ in both cases, with no real difference",
              "مَنْصُوْبٌ, exactly like the وَ version",
              "There is no difference between the two constructions"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "جَوَابُ الْأَمْرِ",
        "rows": [
          {
            "label": "Sentence 1",
            "arabic": "أَمْرٌ",
            "meaning": "the command"
          },
          {
            "label": "Sentence 2",
            "arabic": "جَوَابُ أَمْرٍ",
            "meaning": "the result of obeying it"
          },
          {
            "label": "Its verb",
            "arabic": "مُضَارِعٌ مَجْزُوْمٌ",
            "meaning": "the sukūn is the whole of the grammar"
          },
          {
            "label": "Example",
            "arabic": "أُعْبُدِ اللهَ تَدْخُلِ الْجَنَّةَ",
            "meaning": "worship Allah, you will enter Jannah"
          },
          {
            "label": "In English",
            "arabic": "بِفَاصِلَةٍ أَوْ بِـ and",
            "meaning": "a comma, or joined with 'and'"
          },
          {
            "label": "Not to be confused",
            "arabic": "وَتَدْخُلُ الْجَنَّةَ",
            "meaning": "with a wāw and rafʿ it is just a second statement"
          }
        ]
      },
      "quiz": [
        {
          "q": "What is the sentence after a command showing its result called?",
          "options": [
            "جَوَابُ الشَّرْطِ",
            "جَوَابُ الْأَمْرِ",
            "جَوَابُ الْقَسَمِ",
            "جَوَابُ النِّدَاءِ"
          ],
          "correct": 1,
          "explanation": "And after a prohibition, جَوَابُ النَّهْيِ."
        },
        {
          "q": "What state is the verb of the جَوَابُ الْأَمْرِ in?",
          "options": [
            "مَرْفُوْعٌ",
            "مَنْصُوْبٌ",
            "مَجْرُوْرٌ",
            "مَجْزُوْمٌ"
          ],
          "correct": 3,
          "explanation": "As though an unspoken إِنْ stood before it."
        },
        {
          "q": "أُعْبُدِ اللهَ تَدْخُلِ الْجَنَّةَ — how may these two sentences be joined in English?",
          "options": [
            "with a comma, or with the word 'and'",
            "with 'unless'",
            "with 'because'",
            "they cannot be joined"
          ],
          "correct": 0,
          "explanation": "'Worship Allah, you will enter Jannah' or '…and you will enter Jannah'."
        },
        {
          "q": "Why does تَدْخُلِ end in a kasrah in أُعْبُدِ اللهَ تَدْخُلِ الْجَنَّةَ?",
          "options": [
            "Because it is مَجْرُوْرٌ",
            "Because it is not مَجْزُوْمٌ",
            "To avoid two sukūns meeting with the ال that follows",
            "Because the أَمْر demands it"
          ],
          "correct": 2,
          "explanation": "The verb is still مَجْزُوْمٌ; the kasrah is only a phonetic adjustment."
        },
        {
          "q": "What would أُعْبُدِ اللهَ وَتَدْخُلُ الْجَنَّةَ be instead?",
          "options": [
            "the same sentence",
            "two independent sentences joined by 'and', with no dependence",
            "a conditional",
            "an oath"
          ],
          "correct": 1,
          "explanation": "The wāw and the rafʿ together break the link."
        },
        {
          "q": "Which construction of Part 3 does the جَوَابُ الْأَمْرِ most resemble?",
          "options": [
            "the وَاوٌ حَالِيَّةٌ concession",
            "لَوْلَا",
            "the جَوَابٌ مُقَدَّمٌ",
            "the real conditional with إِنْ"
          ],
          "correct": 3,
          "explanation": "'Worship Allah, you will enter Jannah' = 'if you worship Allah, you will enter'."
        }
      ],
      "bank": [
        {
          "title": "أُعْبُدِ اللهَ تَدْخُلِ الْجَنَّةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 4, p. 589)",
          "sentence": "أُعْبُدِ اللهَ تَدْخُلِ الْجَنَّةَ",
          "translation": "Worship Allah, you will enter Jannah.",
          "cells": [
            "أُعْبُدِ",
            "اللهَ",
            "تَدْخُلِ",
            "الْجَنَّةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
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
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ) ثَانٍ"
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
            "شَرْطٌ",
            "جَوَابُ الشَّرْطِ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "صُوْمُوْا تَصِحُّوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 1",
          "sentence": "صُوْمُوْا تَصِحُّوْا",
          "translation": "Fast and you will be healthy.",
          "cells": [
            "صُوْمُوْا",
            "تَصِحُّوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "مُبْتَدَأٌ",
            "خَبَرٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "فَاذْكُرُوْنِيْ أَذْكُرْكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 2",
          "sentence": "فَاذْكُرُوْنِيْ أَذْكُرْكُمْ",
          "translation": "So remember Me and I will remember you.",
          "cells": [
            "فَ",
            "اذْكُرُوْنِيْ",
            "أَذْكُرْكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
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
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (ي)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنَا) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أَحْسِنْ إِلَى النَّاسِ يُحِبُّوْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 3",
          "sentence": "أَحْسِنْ إِلَى النَّاسِ يُحِبُّوْكَ",
          "translation": "Be good to people and they will love you.",
          "cells": [
            "أَحْسِنْ",
            "إِلَى النَّاسِ",
            "يُحِبُّوْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ أَمْرٍ"
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
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اِقْبَلْ مِنَ النَّاسِ يَقْبَلِ اللهُ مِنْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 4",
          "sentence": "اِقْبَلْ مِنَ النَّاسِ يَقْبَلِ اللهُ مِنْكَ",
          "translation": "Accept from people and Allah will accept from you.",
          "cells": [
            "اِقْبَلْ",
            "مِنَ النَّاسِ",
            "يَقْبَلِ",
            "اللهُ",
            "مِنْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ أَمْرٍ"
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
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْزُوْمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ"
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
            "شَرْطٌ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أَدُّوْا زَكَاةَ أَمْوَالِكُمْ يُبَارِكِ اللهُ فِيْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 5",
          "sentence": "أَدُّوْا زَكَاةَ أَمْوَالِكُمْ يُبَارِكِ اللهُ فِيْهَا",
          "translation": "Pay the Zakāh of your wealth and Allah will bless it.",
          "cells": [
            "أَدُّوْا",
            "زَكَاةَ أَمْوَالِكُمْ",
            "يُبَارِكِ",
            "اللهُ",
            "فِيْهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ أَمْرٍ"
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
                  "role": "فِعْلٌ مَجْزُوْمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاعِلٌ"
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
            "شَرْطٌ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "آمِنُوْا بِاللهِ وَرَسُوْلِهِ تَفُوْزُوْا فَوْزًا عَظِيْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 6",
          "sentence": "آمِنُوْا بِاللهِ وَرَسُوْلِهِ تَفُوْزُوْا فَوْزًا عَظِيْمًا",
          "translation": "Believe in Allah and His Messenger and you will attain a great success.",
          "cells": [
            "آمِنُوْا",
            "بِاللهِ وَرَسُوْلِهِ",
            "تَفُوْزُوْا",
            "فَوْزًا عَظِيْمًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ أَمْرٍ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (و)"
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
            "شَرْطٌ",
            "رَابِطَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "يَاأَيُّهَا الْأَوْلَادُ احْتَرِمُوا النَّاسَ يَحْتَرِمُوْكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 7",
          "sentence": "يَاأَيُّهَا الْأَوْلَادُ احْتَرِمُوا النَّاسَ يَحْتَرِمُوْكُمْ",
          "translation": "O children, respect people and they will respect you.",
          "cells": [
            "يَاأَيُّهَا الْأَوْلَادُ",
            "احْتَرِمُوا",
            "النَّاسَ",
            "يَحْتَرِمُوْكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نِدَاءٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اِسْأَلِ الْأُسْتَاذَ يَشْرَحْ لَكَ الدَّرْسَ حَتَّى تَفْهَمَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 9",
          "sentence": "اِسْأَلِ الْأُسْتَاذَ يَشْرَحْ لَكَ الدَّرْسَ حَتَّى تَفْهَمَ",
          "translation": "Ask the teacher and he will explain the lesson to you so that you understand.",
          "cells": [
            "اِسْأَلِ",
            "الْأُسْتَاذَ",
            "يَشْرَحْ",
            "لَكَ الدَّرْسَ",
            "حَتَّى تَفْهَمَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ أَمْرٍ"
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
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (هُوَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ مَعَ غَيْرِ الصَّرِيْحِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمٌ مُؤَوَّلٌ — مَفْعُوْلٌ لَهُ"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "رَابِطَةٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "يَا بِنْتِيْ اصْبِرِيْ عَلَى مَا أَصَابَكِ يُؤْتِكِ اللهُ أَجْرًا عَظِيْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 4), item 12",
          "sentence": "يَا بِنْتِيْ اصْبِرِيْ عَلَى مَا أَصَابَكِ يُؤْتِكِ اللهُ أَجْرًا عَظِيْمًا",
          "translation": "My daughter, be patient with what has befallen you and Allah will give you a great reward.",
          "cells": [
            "يَا بِنْتِيْ",
            "اصْبِرِيْ",
            "عَلَى مَا أَصَابَكِ",
            "يُؤْتِكِ",
            "اللهُ أَجْرًا عَظِيْمًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نِدَاءٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (ي)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَمَفْعُوْلٌ بِهِ (كِ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ وَمَفْعُوْلٌ بِهِ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "شَرْطٌ",
            "رَابِطَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 1",
          "kind": "mcq",
          "prompt": "In صُوْمُوْا تَصِحُّوْا, what shows تَصِحُّوْا is مَجْزُوْمَة?",
          "options": [
            "the sukūn on the last letter",
            "the dropped nūn of the plural ending",
            "the kasrah",
            "nothing shows it"
          ],
          "correct": 1,
          "explanation": "تَصِحُّوْنَ becomes تَصِحُّوْا."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 2",
          "kind": "mcq",
          "prompt": "In ﴿فَاذْكُرُوْنِيْ أَذْكُرْكُمْ﴾, who is the doer of the جَوَاب verb?",
          "options": [
            "the same people who are commanded",
            "Allah — the جَوَاب need not share the doer of the أَمْر",
            "no one; it is passive",
            "it cannot be determined"
          ],
          "correct": 1,
          "explanation": "'Remember Me and I will remember you.'"
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 3",
          "kind": "mcq",
          "prompt": "In أَحْسِنْ إِلَى النَّاسِ يُحِبُّوْكَ, what is the جَوَابُ الْأَمْرِ?",
          "options": [
            "أَحْسِنْ",
            "إِلَى النَّاسِ",
            "يُحِبُّوْكَ",
            "there is none"
          ],
          "correct": 2,
          "explanation": "'They will love you' — the result of the good treatment."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 6",
          "kind": "mcq",
          "prompt": "In آمِنُوْا بِاللهِ وَرَسُوْلِهِ تَفُوْزُوْا فَوْزًا عَظِيْمًا, what is فَوْزًا?",
          "options": [
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ",
            "a مَفْعُوْلٌ مُطْلَقٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "The مَصْدَر of the same verb, with a نَعْت on it."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 7",
          "kind": "mcq",
          "prompt": "In يَاأَيُّهَا الْأَوْلَادُ، اِحْتَرِمُوا النَّاسَ يَحْتَرِمُوْكُمْ, how many of Unit 6's constructions appear?",
          "options": [
            "one",
            "two — a نِدَاء and an أَمْر with its جَوَاب",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "Part 1 and Part 4 in a single sentence."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 8",
          "kind": "mcq",
          "prompt": "In اُشْكُرُوا اللهَ عَلَى مَا رَزَقَكُمْ مِنَ النِّعَمِ يَزِدْكُمْ, what is مَا رَزَقَكُمْ?",
          "options": [
            "an اِسْمٌ مُؤَوَّلٌ, the object of the preposition عَلَى",
            "the جَوَابُ الْأَمْرِ",
            "a حَالٌ",
            "a نَعْتٌ of اللهَ"
          ],
          "correct": 0,
          "explanation": "'For what He has provided you' — Unit 5, Section 3 again."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 9",
          "kind": "mcq",
          "prompt": "In اِسْأَلِ الْأُسْتَاذَ يَشْرَحْ لَكَ الدَّرْسَ حَتَّى تَفْهَمَ, why is تَفْهَمَ مَنْصُوْبَة rather than مَجْزُوْمَة?",
          "options": [
            "Because it is a second جَوَابُ أَمْرٍ",
            "Because حَتَّى puts it in the مَنْصُوْب state",
            "Because it is first person",
            "It is a printing error"
          ],
          "correct": 1,
          "explanation": "حَتَّى with a hidden أَنْ — from Unit 5, Section 3, Part 6."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 4), item 14",
          "kind": "mcq",
          "prompt": "In اِرْحَمُوا النَّاسَ كَبِيْرَهُمْ وَصَغِيْرَهُمْ … يَرْحَمُوْكُمْ وَيَرْحَمْكُمُ اللهُ, what are كَبِيْرَهُمْ and صَغِيْرَهُمْ?",
          "options": [
            "the فَاعِل of the جَوَاب",
            "two حَال",
            "بَدَل of النَّاسَ, spelling out who is meant",
            "two تَمْيِيْز"
          ],
          "correct": 2,
          "explanation": "A بَدَلُ بَعْضٍ مِنْ كُلٍّ, listing the parts of the whole."
        },
        {
          "title": "Zakāh",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"Zakāh\"?",
          "options": [
            "زَكَاةٌ",
            "نِعْمَةٌ",
            "أَحْسَنَ يُحْسِنُ",
            "أَدَّى يُؤَدِّيْ"
          ],
          "correct": 0
        },
        {
          "title": "Zakāh",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does زَكَاةٌ mean?",
          "options": [
            "Zakāh",
            "blessing",
            "to do good",
            "to pay, fulfil"
          ],
          "correct": 0
        },
        {
          "title": "child, boy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"child, boy\"?",
          "options": [
            "وَلَدٌ",
            "صَحَّ يَصِحُّ",
            "قَبِلَ يَقْبَلُ",
            "اِحْتَرَمَ يَحْتَرِمُ"
          ],
          "correct": 0
        },
        {
          "title": "child, boy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَلَدٌ mean?",
          "options": [
            "child, boy",
            "to be healthy",
            "to accept",
            "to respect"
          ],
          "correct": 0
        },
        {
          "title": "success",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"success\"?",
          "options": [
            "فَوْزٌ",
            "أَحْسَنَ يُحْسِنُ",
            "أَدَّى يُؤَدِّيْ",
            "رَزَقَ يَرْزُقُ"
          ],
          "correct": 0
        },
        {
          "title": "success",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَوْزٌ mean?",
          "options": [
            "success",
            "to do good",
            "to pay, fulfil",
            "to provide"
          ],
          "correct": 0
        },
        {
          "title": "blessing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"blessing\"?",
          "options": [
            "نِعْمَةٌ",
            "قَبِلَ يَقْبَلُ",
            "اِحْتَرَمَ يَحْتَرِمُ",
            "شَرَحَ يَشْرَحُ"
          ],
          "correct": 0
        },
        {
          "title": "blessing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نِعْمَةٌ mean?",
          "options": [
            "blessing",
            "to accept",
            "to respect",
            "to explain"
          ],
          "correct": 0
        },
        {
          "title": "to be healthy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be healthy\"?",
          "options": [
            "صَحَّ يَصِحُّ",
            "أَدَّى يُؤَدِّيْ",
            "رَزَقَ يَرْزُقُ",
            "رَحِمَ يَرْحَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to be healthy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَحَّ يَصِحُّ mean?",
          "options": [
            "to be healthy",
            "to pay, fulfil",
            "to provide",
            "to have mercy"
          ],
          "correct": 0
        },
        {
          "title": "to be healthy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَحَّ يَصِحُّ?",
          "options": [
            "صِحَّةً",
            "رَحْمَةً",
            "قَبُوْلًا",
            "اِحْتِرَامًا"
          ],
          "correct": 0
        },
        {
          "title": "to do good",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to do good\"?",
          "options": [
            "أَحْسَنَ يُحْسِنُ",
            "اِحْتَرَمَ يَحْتَرِمُ",
            "شَرَحَ يَشْرَحُ",
            "زَكَاةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to do good",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَحْسَنَ يُحْسِنُ mean?",
          "options": [
            "to do good",
            "to respect",
            "to explain",
            "Zakāh"
          ],
          "correct": 0
        },
        {
          "title": "to do good (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَحْسَنَ يُحْسِنُ?",
          "options": [
            "إِحْسَانًا",
            "صِحَّةً",
            "أَدَاءً",
            "رِزْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to accept",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to accept\"?",
          "options": [
            "قَبِلَ يَقْبَلُ",
            "رَزَقَ يَرْزُقُ",
            "رَحِمَ يَرْحَمُ",
            "وَلَدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to accept",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَبِلَ يَقْبَلُ mean?",
          "options": [
            "to accept",
            "to provide",
            "to have mercy",
            "child, boy"
          ],
          "correct": 0
        },
        {
          "title": "to accept (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of قَبِلَ يَقْبَلُ?",
          "options": [
            "قَبُوْلًا",
            "إِحْسَانًا",
            "اِحْتِرَامًا",
            "شَرْحًا"
          ],
          "correct": 0
        },
        {
          "title": "to pay, fulfil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to pay, fulfil\"?",
          "options": [
            "أَدَّى يُؤَدِّيْ",
            "شَرَحَ يَشْرَحُ",
            "زَكَاةٌ",
            "فَوْزٌ"
          ],
          "correct": 0
        },
        {
          "title": "to pay, fulfil",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَّى يُؤَدِّيْ mean?",
          "options": [
            "to pay, fulfil",
            "to explain",
            "Zakāh",
            "success"
          ],
          "correct": 0
        },
        {
          "title": "to pay, fulfil (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَدَّى يُؤَدِّيْ?",
          "options": [
            "أَدَاءً",
            "قَبُوْلًا",
            "رِزْقًا",
            "رَحْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to respect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to respect\"?",
          "options": [
            "اِحْتَرَمَ يَحْتَرِمُ",
            "رَحِمَ يَرْحَمُ",
            "وَلَدٌ",
            "نِعْمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to respect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِحْتَرَمَ يَحْتَرِمُ mean?",
          "options": [
            "to respect",
            "to have mercy",
            "child, boy",
            "blessing"
          ],
          "correct": 0
        },
        {
          "title": "to respect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِحْتَرَمَ يَحْتَرِمُ?",
          "options": [
            "اِحْتِرَامًا",
            "أَدَاءً",
            "شَرْحًا",
            "صِحَّةً"
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
            "زَكَاةٌ",
            "فَوْزٌ",
            "صَحَّ يَصِحُّ"
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
            "Zakāh",
            "success",
            "to be healthy"
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
            "اِحْتِرَامًا",
            "رَحْمَةً",
            "إِحْسَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to explain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to explain\"?",
          "options": [
            "شَرَحَ يَشْرَحُ",
            "وَلَدٌ",
            "نِعْمَةٌ",
            "أَحْسَنَ يُحْسِنُ"
          ],
          "correct": 0
        },
        {
          "title": "to explain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرَحَ يَشْرَحُ mean?",
          "options": [
            "to explain",
            "child, boy",
            "blessing",
            "to do good"
          ],
          "correct": 0
        },
        {
          "title": "to explain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of شَرَحَ يَشْرَحُ?",
          "options": [
            "شَرْحًا",
            "رِزْقًا",
            "صِحَّةً",
            "قَبُوْلًا"
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
            "فَوْزٌ",
            "صَحَّ يَصِحُّ",
            "قَبِلَ يَقْبَلُ"
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
            "success",
            "to be healthy",
            "to accept"
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
            "شَرْحًا",
            "إِحْسَانًا",
            "أَدَاءً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l2",
      "title": "جواب النهي بلا فاء",
      "subtitle": "Part 4: Sentences after اَلْأَمْرُ and اَلنَّهْيُ",
      "concepts": [
        {
          "heading": "Two ways it occurs",
          "lines": [
            {
              "html": "The جَوَابُ النَّهْيِ shows the result of adhering, or of not adhering, to the command. It can occur in two ways: without a فَ before it, or with a فَ before it.",
              "list": false
            },
            {
              "table": {
                "title": "The two shapes",
                "headers": [
                  "Shape",
                  "What it shows",
                  "State of the verb"
                ],
                "rows": [
                  [
                    "without فَ",
                    "the result of adhering to the prohibition",
                    "مَجْزُوْمٌ"
                  ],
                  [
                    "with فَ",
                    "the result of not adhering to it",
                    "مَنْصُوْبٌ"
                  ]
                ]
              }
            },
            {
              "html": "The difference is not a matter of style. Without the فَ, لَا تَكْسَلْ تَنْجَحْ promises what follows from obeying: 'do not be lazy, you will succeed'. With the فَ, لَا تَكْسَلْ فَتَنْدَمَ warns of what follows from disobeying: 'do not be lazy, lest you regret it'. This lesson takes the first; the next takes the second.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What do the two shapes of جَوَابُ النَّهْيِ show, and what state does each put the verb in؟",
            "kind": "mcq",
            "options": [
              "Without فَ: result of adhering to the prohibition, مَجْزُوْمٌ; with فَ: result of NOT adhering, مَنْصُوْبٌ",
              "Both shapes show the same meaning and use the same state",
              "Without فَ means disobeying; with فَ means obeying — the reverse",
              "Neither shape has any effect on the verb's state"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The جَوَابُ النَّهْيِ without a فَ",
          "lines": [
            {
              "html": "The جَوَابُ النَّهْيِ without a فَ shows the result of adhering to the prohibition. The verb of the جَوَابُ النَّهْيِ is a فِعْلٌ مُضَارِعٌ in the مَجْزُوْم state. In translation, these sentences can be separated by a comma or can be joined with the word 'and'.",
              "list": false
            },
            {
              "html": "لَا تَكْفُرْ تَدْخُلِ الْجَنَّةَ — Do not disbelieve, you will enter Jannah. / Do not disbelieve and you will enter Jannah.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَا تَكْفُرْ تَدْخُلِ الْجَنَّةَ",
                "translation": "Do not disbelieve, you will enter Jannah.",
                "cells": [
                  "لَا تَكْفُرْ",
                  "تَدْخُلِ",
                  "الْجَنَّةَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "نَهْيٌ"
                      },
                      {
                        "start": 1,
                        "end": 2,
                        "role": "جَوَابُ النَّهْيِ"
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
                        "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
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
              "html": "The shape is identical to the جَوَابُ الْأَمْرِ of the previous lesson, and so is the reasoning: the sukūn on تَدْخُلِ shows that entering Jannah depends on the prohibition being kept, exactly as though an unspoken إِنْ لَمْ تَكْفُرْ stood in front of it.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In لَا تَكْفُرْ تَدْخُلِ الْجَنَّةَ, why is تَدْخُلِ مَجْزُوْمٌ rather than مَرْفُوْعٌ؟",
            "kind": "mcq",
            "options": [
              "Because entering Jannah depends on the prohibition being kept, exactly as though an unspoken إِنْ لَمْ تَكْفُرْ stood in front of it",
              "Because it follows a فِعْلُ نَهْيٍ automatically with no reason needed",
              "Because all verbs after a comma become مَجْزُوْمٌ",
              "It is actually مَرْفُوْعٌ, not مَجْزُوْمٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "جَوَابُ النَّهْيِ without a فَ",
        "rows": [
          {
            "label": "Sentence 1",
            "arabic": "نَهْيٌ",
            "meaning": "the prohibition"
          },
          {
            "label": "Sentence 2",
            "arabic": "جَوَابُ النَّهْيِ",
            "meaning": "the result of keeping it"
          },
          {
            "label": "Its verb",
            "arabic": "مُضَارِعٌ مَجْزُوْمٌ",
            "meaning": "no فَ, and a sukūn"
          },
          {
            "label": "Example",
            "arabic": "لَا تَكْفُرْ تَدْخُلِ الْجَنَّةَ",
            "meaning": "do not disbelieve, you will enter Jannah"
          },
          {
            "label": "In English",
            "arabic": "بِفَاصِلَةٍ أَوْ بِـ and",
            "meaning": "a comma, or joined with 'and'"
          },
          {
            "label": "Sense",
            "arabic": "وَعْدٌ لَا تَحْذِيْرٌ",
            "meaning": "a promise for obeying, not a warning"
          }
        ]
      },
      "quiz": [
        {
          "q": "In how many ways can the جَوَابُ النَّهْيِ occur?",
          "options": [
            "one",
            "two — with a فَ and without one",
            "three",
            "four"
          ],
          "correct": 1,
          "explanation": "And the two carry opposite meanings."
        },
        {
          "q": "What does the جَوَابُ النَّهْيِ WITHOUT a فَ show?",
          "options": [
            "the result of adhering to the prohibition",
            "the result of not adhering to it",
            "the reason for the prohibition",
            "a second prohibition"
          ],
          "correct": 0,
          "explanation": "'Do not disbelieve, you will enter Jannah.'"
        },
        {
          "q": "What state is its verb in?",
          "options": [
            "مَرْفُوْعٌ",
            "مَنْصُوْبٌ",
            "مَجْزُوْمٌ",
            "مَجْرُوْرٌ"
          ],
          "correct": 2,
          "explanation": "The same jazm as the جَوَابُ الْأَمْرِ."
        },
        {
          "q": "How may the two sentences be joined in English?",
          "options": [
            "with 'lest'",
            "with 'otherwise'",
            "with 'unless'",
            "with a comma, or with the word 'and'"
          ],
          "correct": 3,
          "explanation": "'Lest' and 'otherwise' belong to the shape with the فَ."
        },
        {
          "q": "What unspoken sentence does the jazm imply in لَا تَكْفُرْ تَدْخُلِ الْجَنَّةَ?",
          "options": [
            "إِنْ لَمْ تَكْفُرْ — 'if you do not disbelieve'",
            "إِنْ كَفَرْتَ — 'if you disbelieve'",
            "لَوْ كَفَرْتَ",
            "nothing is implied"
          ],
          "correct": 0,
          "explanation": "The جَوَاب depends on the prohibition being kept."
        },
        {
          "q": "Which of these is a جَوَابُ النَّهْيِ WITHOUT a فَ (no فَ, second verb مَجْزُوْمٌ) rather than the فَاءٌ سَبَبِيَّةٌ shape?",
          "options": [
            "لَا تَكْسَلْ فَتَنْدَمَ",
            "لَا تَكْسَلْ تَنْجَحْ",
            "لَا تَغْضَبْ فَيَمْلِكَكَ الشَّيْطَانُ",
            "لَا تَخْدَعِ النَّاسَ فَيُبْغِضُوْكَ"
          ],
          "correct": 1,
          "explanation": "No فَ, and the second verb carries a sukūn."
        }
      ],
      "bank": [
        {
          "title": "لَا تَكْفُرْ تَدْخُلِ الْجَنَّةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 4, p. 590)",
          "sentence": "لَا تَكْفُرْ تَدْخُلِ الْجَنَّةَ",
          "translation": "Do not disbelieve, you will enter Jannah.",
          "cells": [
            "لَا تَكْفُرْ",
            "تَدْخُلِ",
            "الْجَنَّةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "فِعْلٌ وَفَاعِلٌ (أَنْتَ)"
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
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَكْسَلْ تَنْجَحْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 1",
          "sentence": "لَا تَكْسَلْ تَنْجَحْ",
          "translation": "Do not be lazy and you will succeed.",
          "cells": [
            "لَا تَكْسَلْ",
            "تَنْجَحْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَوَابُ النَّهْيِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَنْسَ اللهَ لَا يَنْسَكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 2",
          "sentence": "لَا تَنْسَ اللهَ لَا يَنْسَكَ",
          "translation": "Do not forget Allah and He will not forget you.",
          "cells": [
            "لَا تَنْسَ",
            "اللهَ",
            "لَا",
            "يَنْسَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ نَفْيٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَسْتَكْبِرْ يُحِبَّكَ النَّاسُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 3",
          "sentence": "لَا تَسْتَكْبِرْ يُحِبَّكَ النَّاسُ",
          "translation": "Do not be arrogant and people will love you.",
          "cells": [
            "لَا تَسْتَكْبِرْ",
            "يُحِبَّكَ",
            "النَّاسُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "فِعْلٌ مَجْزُوْمٌ وَمَفْعُوْلٌ بِهِ (كَ)"
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
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَتَّبِعُوا الشَّيْطَانَ تَهْتَدُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 4",
          "sentence": "لَا تَتَّبِعُوا الشَّيْطَانَ تَهْتَدُوْا",
          "translation": "Do not follow Shayṭān and you will be guided.",
          "cells": [
            "لَا تَتَّبِعُوا",
            "الشَّيْطَانَ",
            "تَهْتَدُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ النَّهْيِ"
                }
              ]
            },
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَقُوْلُوْا إِلَّا الْحَقَّ تَسْلَمُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 5",
          "sentence": "لَا تَقُوْلُوْا إِلَّا الْحَقَّ تَسْلَمُوْا",
          "translation": "Say nothing but the truth and you will be safe.",
          "cells": [
            "لَا تَقُوْلُوْا",
            "إِلَّا",
            "الْحَقَّ",
            "تَسْلَمُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
                }
              ]
            },
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
                  "role": "حَرْفُ اسْتِثْنَاءٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تُذْنِبْ تَذُقْ حَلَاوَةَ الْإِيْمَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 6",
          "sentence": "لَا تُذْنِبْ تَذُقْ حَلَاوَةَ الْإِيْمَانِ",
          "translation": "Do not sin and you will taste the sweetness of faith.",
          "cells": [
            "لَا تُذْنِبْ",
            "تَذُقْ",
            "حَلَاوَةَ الْإِيْمَانِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (أَنْتَ)"
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
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَطْمَعْ فِيْ مَالِ النَّاسِ يُحِبُّوْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 7",
          "sentence": "لَا تَطْمَعْ فِيْ مَالِ النَّاسِ يُحِبُّوْكَ",
          "translation": "Do not covet people's wealth and they will love you.",
          "cells": [
            "لَا تَطْمَعْ",
            "فِيْ مَالِ النَّاسِ",
            "يُحِبُّوْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَبْدَأْ أَمْرًا بِغَيْرِ اسْمِ اللهِ يُبَارَكْ فِيْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 8",
          "sentence": "لَا تَبْدَأْ أَمْرًا بِغَيْرِ اسْمِ اللهِ يُبَارَكْ فِيْكَ",
          "translation": "Do not begin a matter without the name of Allah, and you will be blessed.",
          "cells": [
            "لَا تَبْدَأْ",
            "أَمْرًا",
            "بِغَيْرِ اسْمِ اللهِ",
            "يُبَارَكْ",
            "فِيْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَجْهُوْلٌ مَجْزُوْمٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "نَائِبُ الْفَاعِلِ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "فَاعِلٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَلْعَبْ مَعَ قَلَمِكَ تَفْهَمِ الدَّرْسَ فَهْمًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 4), item 10",
          "sentence": "لَا تَلْعَبْ مَعَ قَلَمِكَ تَفْهَمِ الدَّرْسَ فَهْمًا",
          "translation": "Do not play with your pen and you will understand the lesson well.",
          "cells": [
            "لَا تَلْعَبْ",
            "مَعَ قَلَمِكَ",
            "تَفْهَمِ",
            "الدَّرْسَ",
            "فَهْمًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ فِيْهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ"
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
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 4), item 2",
          "kind": "mcq",
          "prompt": "In لَا تَنْسَ اللهَ لَا يَنْسَكَ, what is unusual about the جَوَاب?",
          "options": [
            "It is itself negative",
            "It is مَنْصُوْبٌ",
            "It takes a فَ",
            "It is an أَمْر"
          ],
          "correct": 0,
          "explanation": "A negated جَوَاب is still مَجْزُوْمٌ — the لَا here is نَافِيَة."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 4), item 3",
          "kind": "mcq",
          "prompt": "In لَا تَسْتَكْبِرْ يُحِبَّكَ النَّاسُ, who loves whom?",
          "options": [
            "you love the people",
            "the people love you — اَلنَّاسُ is the doer",
            "no one; the sentence is negative",
            "it cannot be determined"
          ],
          "correct": 1,
          "explanation": "The كَ attached to the verb is the object."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 4), item 4",
          "kind": "mcq",
          "prompt": "In لَا تَتَّبِعُوا الشَّيْطَانَ تَهْتَدُوْا, what shows both verbs are مَجْزُوْم?",
          "options": [
            "the sukūn on each",
            "the kasrah on each",
            "the dropped nūn of the plural ending in each",
            "nothing shows it"
          ],
          "correct": 2,
          "explanation": "تَتَّبِعُوْنَ and تَهْتَدُوْنَ have both lost their nūn."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 4), item 5",
          "kind": "mcq",
          "prompt": "In لَا تَقُوْلُوْا إِلَّا الْحَقَّ تَسْلَمُوْا, what does إِلَّا do?",
          "options": [
            "It cancels the prohibition",
            "It restricts it — 'say nothing but the truth'",
            "It introduces the جَوَاب",
            "It is a حَرْفُ شَرْطٍ"
          ],
          "correct": 1,
          "explanation": "A negation with an exception yields a restriction."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 4), item 8",
          "kind": "mcq",
          "prompt": "In لَا تَبْدَأْ أَمْرًا بِغَيْرِ اسْمِ اللهِ يُبَارَكْ فِيْكَ, what voice is the جَوَاب verb?",
          "options": [
            "مَعْلُوْمٌ",
            "مَجْهُوْلٌ — 'you will be blessed'",
            "an أَمْر",
            "a نَهْي"
          ],
          "correct": 1,
          "explanation": "فِيْكَ is the نَائِبُ الْفَاعِلِ, غَيْرُ صَرِيْحٍ."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 4), item 10",
          "kind": "mcq",
          "prompt": "In لَا تَلْعَبْ مَعَ قَلَمِكَ تَفْهَمِ الدَّرْسَ فَهْمًا, what is فَهْمًا?",
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
          "title": "Book Exercise 2 (Unit 6, Part 4), item 9",
          "kind": "mcq",
          "prompt": "Why does لَا تُضَيِّعْ وَقْتَكَ تَنْجَحْ take no فَ?",
          "options": [
            "Because the verbs are from different roots",
            "Because success is the result of obeying the prohibition, not of breaking it",
            "Because وَقْتَكَ is a مُضَاف",
            "Because the sentence is short"
          ],
          "correct": 1,
          "explanation": "The فَ would turn the promise into a warning."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 4), item 6",
          "kind": "mcq",
          "prompt": "In لَا تُذْنِبْ تَذُقْ حَلَاوَةَ الْإِيْمَانِ, what is حَلَاوَةَ الْإِيْمَانِ?",
          "options": [
            "a حَالٌ",
            "the مَفْعُوْلٌ بِهِ of تَذُقْ",
            "a مَفْعُوْلٌ مُطْلَقٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "ذَاقَ takes a direct object; the phrase is an إِضَافَة."
        },
        {
          "title": "exam",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"exam\"?",
          "options": [
            "اِمْتِحَانٌ",
            "قَلَمٌ",
            "نَسِيَ يَنْسَى",
            "طَمِعَ يَطْمَعُ"
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
            "pen",
            "to forget",
            "to covet"
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
            "كَسِلَ يَكْسَلُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "بَدَأَ يَبْدَأُ"
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
            "to be lazy",
            "to be arrogant",
            "to begin"
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
            "نَسِيَ يَنْسَى",
            "طَمِعَ يَطْمَعُ",
            "ذَاقَ يَذُوْقُ"
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
            "to forget",
            "to covet",
            "to taste"
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
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "بَدَأَ يَبْدَأُ",
            "اِهْتَدَى يَهْتَدِيْ"
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
            "to be arrogant",
            "to begin",
            "to be guided"
          ],
          "correct": 0
        },
        {
          "title": "to be lazy",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be lazy\"?",
          "options": [
            "كَسِلَ يَكْسَلُ",
            "طَمِعَ يَطْمَعُ",
            "ذَاقَ يَذُوْقُ",
            "اِمْتِحَانٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be lazy",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَسِلَ يَكْسَلُ mean?",
          "options": [
            "to be lazy",
            "to covet",
            "to taste",
            "exam"
          ],
          "correct": 0
        },
        {
          "title": "to be lazy (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of كَسِلَ يَكْسَلُ?",
          "options": [
            "كَسَلًا",
            "نِسْيَانًا",
            "طَمَعًا",
            "ذَوْقًا"
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
            "بَدَأَ يَبْدَأُ",
            "اِهْتَدَى يَهْتَدِيْ",
            "حَقٌّ"
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
            "to begin",
            "to be guided",
            "truth"
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
            "اِسْتِكْبَارًا",
            "بَدْءًا",
            "اِهْتِدَاءً"
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
            "ذَاقَ يَذُوْقُ",
            "اِمْتِحَانٌ",
            "حَلَاوَةٌ"
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
            "to taste",
            "exam",
            "sweetness"
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
            "طَمَعًا",
            "ذَوْقًا",
            "كَسَلًا"
          ],
          "correct": 0
        },
        {
          "title": "to covet",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to covet\"?",
          "options": [
            "طَمِعَ يَطْمَعُ",
            "اِهْتَدَى يَهْتَدِيْ",
            "حَقٌّ",
            "قَلَمٌ"
          ],
          "correct": 0
        },
        {
          "title": "to covet",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَمِعَ يَطْمَعُ mean?",
          "options": [
            "to covet",
            "to be guided",
            "truth",
            "pen"
          ],
          "correct": 0
        },
        {
          "title": "to covet (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of طَمِعَ يَطْمَعُ?",
          "options": [
            "طَمَعًا",
            "بَدْءًا",
            "اِهْتِدَاءً",
            "نِسْيَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to begin",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to begin\"?",
          "options": [
            "بَدَأَ يَبْدَأُ",
            "اِمْتِحَانٌ",
            "حَلَاوَةٌ",
            "كَسِلَ يَكْسَلُ"
          ],
          "correct": 0
        },
        {
          "title": "to begin",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَدَأَ يَبْدَأُ mean?",
          "options": [
            "to begin",
            "exam",
            "sweetness",
            "to be lazy"
          ],
          "correct": 0
        },
        {
          "title": "to begin (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَدَأَ يَبْدَأُ?",
          "options": [
            "بَدْءًا",
            "ذَوْقًا",
            "كَسَلًا",
            "اِسْتِكْبَارًا"
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
            "حَقٌّ",
            "قَلَمٌ",
            "نَسِيَ يَنْسَى"
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
            "truth",
            "pen",
            "to forget"
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
            "اِهْتِدَاءً",
            "نِسْيَانًا",
            "طَمَعًا"
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
            "حَلَاوَةٌ",
            "كَسِلَ يَكْسَلُ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ"
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
            "sweetness",
            "to be lazy",
            "to be arrogant"
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
            "كَسَلًا",
            "اِسْتِكْبَارًا",
            "بَدْءًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l3",
      "title": "جواب النهي بالفاء",
      "subtitle": "Part 4: Sentences after اَلْأَمْرُ and اَلنَّهْيُ",
      "concepts": [
        {
          "heading": "The rule",
          "lines": [
            {
              "html": "The جَوَابُ النَّهْيِ with a فَ shows the result of NOT adhering to the prohibition. It is comprised of a فِعْلٌ مُضَارِعٌ in the مَنْصُوْب state. This can be translated as 'lest', 'otherwise', 'or', and the like.",
              "list": false
            },
            {
              "html": "لَا تَكْسَلْ فَتَنْدَمَ — Do not be lazy, lest you regret it. / Do not be lazy, or you will regret it. / Do not be lazy, otherwise you will regret it.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In tarkeeb, the فَ is labelled as فَاءُ السَّبَبِ.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَا تَكْسَلْ فَتَنْدَمَ",
                "translation": "Do not be lazy, lest you regret it.",
                "cells": [
                  "لَا تَكْسَلْ",
                  "فَ",
                  "تَنْدَمَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "نَهْيٌ"
                      },
                      {
                        "start": 1,
                        "end": 1,
                        "role": "فَاءُ السَّبَبِ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "جَوَابُ النَّهْيِ"
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
              "html": "Two things change together, and they must be read together. The فَ appears, and the verb goes from مَجْزُوْم to مَنْصُوْب. لَا تَكْسَلْ تَنْجَحْ, with a sukūn and no فَ, promises success for obeying; لَا تَكْسَلْ فَتَنْدَمَ, with the فَ and a fatḥah, warns of regret for disobeying. The fatḥah on تَنْدَمَ is the surest sign on the page.",
              "list": false
            },
            {
              "table": {
                "title": "The two جَوَاب shapes of Part 4",
                "headers": [
                  "Shape",
                  "Meaning",
                  "State",
                  "English"
                ],
                "rows": [
                  [
                    "لَا تَكْسَلْ تَنْجَحْ",
                    "result of obeying",
                    "مَجْزُوْمٌ",
                    "and you will succeed"
                  ],
                  [
                    "لَا تَكْسَلْ فَتَنْدَمَ",
                    "result of disobeying",
                    "مَنْصُوْبٌ",
                    "lest / otherwise / or you will regret"
                  ]
                ]
              }
            },
            {
              "html": "The name فَاءُ السَّبَبِ says what it does: it marks the second sentence as the consequence of the first. This is not the فَاءُ الرَّابِطَةِ of a conditional, which merely joins a جَوَاب to its شَرْط without changing the verb's state; the فَاءُ السَّبَبِ carries a hidden أَنْ with it, and that is what puts the verb into the مَنْصُوْب state.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "In لَا تَكْسَلْ فَتَنْدَمَ, what does the فَ signal, what is it called in tarkeeb, and what state does it put the following verb in؟",
            "kind": "mcq",
            "options": [
              "It signals the result of NOT obeying the prohibition, is called فَاءُ السَّبَبِ, and puts the following verb into the مَنْصُوْبٌ state (carrying a hidden أَنْ)",
              "It signals the result of obeying, is called فَاءُ الرَّابِطَةِ, and makes the verb مَجْزُوْمٌ",
              "It has no grammatical effect at all",
              "It negates the following verb"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "جَوَابُ النَّهْيِ with a فَ",
        "rows": [
          {
            "label": "What it shows",
            "arabic": "نَتِيْجَةُ عَدَمِ الِامْتِثَالِ",
            "meaning": "the result of NOT obeying"
          },
          {
            "label": "Its verb",
            "arabic": "مُضَارِعٌ مَنْصُوْبٌ",
            "meaning": "a fatḥah, not a sukūn"
          },
          {
            "label": "The particle",
            "arabic": "فَاءُ السَّبَبِ",
            "meaning": "its label in tarkeeb"
          },
          {
            "label": "Example",
            "arabic": "لَا تَكْسَلْ فَتَنْدَمَ",
            "meaning": "do not be lazy, lest you regret it"
          },
          {
            "label": "In English",
            "arabic": "lest / otherwise / or",
            "meaning": "all three are given by the book"
          },
          {
            "label": "Compare",
            "arabic": "لَا تَكْسَلْ تَنْجَحْ",
            "meaning": "no فَ, sukūn — a promise, not a warning"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does the جَوَابُ النَّهْيِ WITH a فَ show?",
          "options": [
            "the result of not adhering to the prohibition",
            "the result of adhering to it",
            "the reason for the prohibition",
            "a second prohibition"
          ],
          "correct": 0,
          "explanation": "It is a warning, not a promise."
        },
        {
          "q": "What state is its verb in?",
          "options": [
            "مَجْزُوْمٌ",
            "مَرْفُوْعٌ",
            "مَنْصُوْبٌ",
            "مَجْرُوْرٌ"
          ],
          "correct": 2,
          "explanation": "The fatḥah on تَنْدَمَ is the surest sign on the page."
        },
        {
          "q": "In لَا تَكْسَلْ فَتَنْدَمَ, what is the فَ before تَنْدَمَ called in tarkeeb?",
          "options": [
            "فَاءٌ رَابِطَةٌ",
            "فَاءٌ زَائِدَةٌ",
            "فَاءُ الْعَطْفِ",
            "فَاءُ السَّبَبِ"
          ],
          "correct": 3,
          "explanation": "It marks the second sentence as the consequence of the first."
        },
        {
          "q": "Which English words translate a فَاءُ السَّبَبِ?",
          "options": [
            "'and', 'then'",
            "'lest', 'otherwise', 'or'",
            "'unless', 'until'",
            "'because', 'since'"
          ],
          "correct": 1,
          "explanation": "All three are correct renderings."
        },
        {
          "q": "How does the فَاءُ السَّبَبِ differ from the فَاءُ الرَّابِطَةِ of Part 3?",
          "options": [
            "The فَاءُ السَّبَبِ carries a hidden أَنْ and so puts the verb into the مَنْصُوْب state",
            "The فَاءُ الرَّابِطَةِ is translated; this one is not",
            "There is no difference",
            "The فَاءُ السَّبَبِ comes at the end of a sentence"
          ],
          "correct": 0,
          "explanation": "The رَابِطَة merely joins and leaves the verb's state alone."
        },
        {
          "q": "What is the difference between لَا تَكْسَلْ تَنْجَحْ and لَا تَكْسَلْ فَتَنْدَمَ?",
          "options": [
            "Only the vocabulary",
            "The first is a promise for obeying; the second a warning for disobeying",
            "The first is a question",
            "The second is not a prohibition"
          ],
          "correct": 1,
          "explanation": "The فَ and the fatḥah go together and reverse the sense."
        }
      ],
      "bank": [
        {
          "title": "لَا تَكْسَلْ فَتَنْدَمَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 4, p. 591)",
          "sentence": "لَا تَكْسَلْ فَتَنْدَمَ",
          "translation": "Do not be lazy, lest you regret it.",
          "cells": [
            "لَا تَكْسَلْ",
            "فَ",
            "تَنْدَمَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ النَّهْيِ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "أَمْرٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَخْدَعِ النَّاسَ فَيُبْغِضُوْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 1",
          "sentence": "لَا تَخْدَعِ النَّاسَ فَيُبْغِضُوْكَ",
          "translation": "Do not deceive people, lest they hate you.",
          "cells": [
            "لَا تَخْدَعِ",
            "النَّاسَ",
            "فَ",
            "يُبْغِضُوْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (كَ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "أَمْرٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَغْضَبْ فَيَمْلِكَكَ الشَّيْطَانُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 2",
          "sentence": "لَا تَغْضَبْ فَيَمْلِكَكَ الشَّيْطَانُ",
          "translation": "Do not get angry, lest Shayṭān take possession of you.",
          "cells": [
            "لَا تَغْضَبْ",
            "فَ",
            "يَمْلِكَكَ",
            "الشَّيْطَانُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَمَفْعُوْلٌ بِهِ (كَ)"
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
            "رَابِطَةٌ",
            "أَمْرٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَضْحَكْ عَلَى أَحَدٍ فَيَبْتَلِيَكَ اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 3",
          "sentence": "لَا تَضْحَكْ عَلَى أَحَدٍ فَيَبْتَلِيَكَ اللهُ",
          "translation": "Do not laugh at anyone, lest Allah test you.",
          "cells": [
            "لَا تَضْحَكْ",
            "عَلَى أَحَدٍ",
            "فَ",
            "يَبْتَلِيَكَ",
            "اللهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَمَفْعُوْلٌ بِهِ (كَ)"
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
            "أَمْرٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَعُقَّ أَبَوَيْكَ فَيَحْزَنَا وَيَغْضَبَ اللهُ عَلَيْكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 4",
          "sentence": "لَا تَعُقَّ أَبَوَيْكَ فَيَحْزَنَا وَيَغْضَبَ اللهُ عَلَيْكَ",
          "translation": "Do not disobey your parents, lest they grieve and Allah be angry with you.",
          "cells": [
            "لَا تَعُقَّ",
            "أَبَوَيْكَ",
            "فَ",
            "يَحْزَنَا",
            "وَيَغْضَبَ اللهُ عَلَيْكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (ا)"
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
            "رَابِطَةٌ",
            "أَمْرٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَغْتَابُوا النَّاسَ فَتَخْسَرُوْا أُجُوْرَكُمْ وَتَنْدَمُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 5",
          "sentence": "لَا تَغْتَابُوا النَّاسَ فَتَخْسَرُوْا أُجُوْرَكُمْ وَتَنْدَمُوْا",
          "translation": "Do not backbite people, lest you lose your rewards and regret it.",
          "cells": [
            "لَا تَغْتَابُوا",
            "النَّاسَ",
            "فَ",
            "تَخْسَرُوْا",
            "أُجُوْرَكُمْ وَتَنْدَمُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جَوَابُ النَّهْيِ"
                }
              ]
            },
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ بِهِ مَعَ الْمَعْطُوْفِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "أَمْرٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَتْرُكِ الصَّلَاةَ فَتَبْكِيَ يَوْمَ الْقِيَامَةِ نَدَامَةً",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 6",
          "sentence": "لَا تَتْرُكِ الصَّلَاةَ فَتَبْكِيَ يَوْمَ الْقِيَامَةِ نَدَامَةً",
          "translation": "Do not abandon the prayer, lest you weep on the Day of Judgement in regret.",
          "cells": [
            "لَا تَتْرُكِ",
            "الصَّلَاةَ",
            "فَ",
            "تَبْكِيَ",
            "يَوْمَ الْقِيَامَةِ",
            "نَدَامَةً"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مَفْعُوْلٌ فِيْهِ"
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
            "رَابِطَةٌ",
            "أَمْرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا تَظْلِمِ النَّاسَ فَيُعَذِّبَكَ اللهُ عَذَابًا شَدِيْدًا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 7",
          "sentence": "لَا تَظْلِمِ النَّاسَ فَيُعَذِّبَكَ اللهُ عَذَابًا شَدِيْدًا",
          "translation": "Do not wrong people, lest Allah punish you with a severe punishment.",
          "cells": [
            "لَا تَظْلِمِ",
            "النَّاسَ",
            "فَ",
            "يُعَذِّبَكَ",
            "اللهُ",
            "عَذَابًا شَدِيْدًا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَمَفْعُوْلٌ بِهِ (كَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ"
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
            "رَابِطَةٌ",
            "أَمْرٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "لَا تُسْرِفْ مَالَكَ فِيْمَا لَا يُرْضِي اللهَ فَتَخْسَرَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 8",
          "sentence": "لَا تُسْرِفْ مَالَكَ فِيْمَا لَا يُرْضِي اللهَ فَتَخْسَرَ",
          "translation": "Do not squander your wealth on what does not please Allah, lest you lose out.",
          "cells": [
            "لَا تُسْرِفْ",
            "مَالَكَ",
            "فِيْمَا لَا يُرْضِي اللهَ",
            "فَ",
            "تَخْسَرَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "اِسْمٌ مُؤَوَّلٌ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "أَمْرٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَدْخُلْ بَيْتَ أَحَدٍ بِغَيْرِ إِذْنٍ فَتَرَى مَا لَا يَنْبَغِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 4), item 9",
          "sentence": "لَا تَدْخُلْ بَيْتَ أَحَدٍ بِغَيْرِ إِذْنٍ فَتَرَى مَا لَا يَنْبَغِيْ",
          "translation": "Do not enter anyone's house without permission, lest you see what is not fitting.",
          "cells": [
            "لَا تَدْخُلْ",
            "بَيْتَ أَحَدٍ",
            "بِغَيْرِ إِذْنٍ",
            "فَ",
            "تَرَى",
            "مَا لَا يَنْبَغِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "اِسْمٌ مُؤَوَّلٌ — مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "رَابِطَةٌ",
            "أَمْرٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 1",
          "kind": "mcq",
          "prompt": "In لَا تَخْدَعِ النَّاسَ فَيُبْغِضُوْكَ, what shows يُبْغِضُوْا is مَنْصُوْبَة?",
          "options": [
            "the sukūn",
            "the kasrah",
            "the dropped nūn of the plural ending",
            "nothing shows it"
          ],
          "correct": 2,
          "explanation": "The five verbs drop their nūn for both naṣb and jazm; here the فَ tells you which."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 2",
          "kind": "mcq",
          "prompt": "In لَا تَغْضَبْ فَيَمْلِكَكَ الشَّيْطَانُ, who is the doer of the جَوَاب verb?",
          "options": [
            "you",
            "اَلشَّيْطَانُ",
            "no one; it is passive",
            "it cannot be determined"
          ],
          "correct": 1,
          "explanation": "The كَ attached to the verb is its object."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 4",
          "kind": "mcq",
          "prompt": "In لَا تَعُقَّ أَبَوَيْكَ فَيَحْزَنَا وَيَغْضَبَ اللهُ عَلَيْكَ, how many verbs follow the one فَ?",
          "options": [
            "one",
            "two, both مَنْصُوْب",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "يَحْزَنَا and يَغْضَبَ; the naṣb carries across the وَ."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 5",
          "kind": "mcq",
          "prompt": "In لَا تَغْتَابُوا النَّاسَ فَتَخْسَرُوْا أُجُوْرَكُمْ وَتَنْدَمُوْا, what does the فَ warn of?",
          "options": [
            "what happens if you do not backbite",
            "what happens if you do backbite",
            "the reason for the prohibition",
            "nothing; it is a conjunction"
          ],
          "correct": 1,
          "explanation": "The فَاءُ السَّبَبِ always attaches the consequence of breaking the prohibition."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 6",
          "kind": "mcq",
          "prompt": "In لَا تَتْرُكِ الصَّلَاةَ فَتَبْكِيَ يَوْمَ الْقِيَامَةِ نَدَامَةً, what is نَدَامَةً?",
          "options": [
            "a حَالٌ",
            "a مَفْعُوْلٌ بِهِ",
            "a مَفْعُوْلٌ مُطْلَقٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 2,
          "explanation": "It states the manner of the weeping."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 7",
          "kind": "mcq",
          "prompt": "In لَا تَظْلِمِ النَّاسَ فَيُعَذِّبَكَ اللهُ عَذَابًا شَدِيْدًا, why does تَظْلِمْ end in a kasrah?",
          "options": [
            "Because it is مَنْصُوْبَة",
            "Because it is مَجْرُوْرَة",
            "To avoid two sukūns meeting with the ال of النَّاسَ",
            "Because لَا demands it"
          ],
          "correct": 2,
          "explanation": "The prohibited verb is still مَجْزُوْمٌ; only the جَوَاب is مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 9",
          "kind": "mcq",
          "prompt": "In لَا تَدْخُلْ بَيْتَ أَحَدٍ بِغَيْرِ إِذْنٍ فَتَرَى مَا لَا يَنْبَغِيْ, what is مَا لَا يَنْبَغِيْ?",
          "options": [
            "a نَعْتٌ",
            "an اِسْمٌ مُؤَوَّلٌ — the مَفْعُوْلٌ بِهِ of تَرَى",
            "a second جَوَاب",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "'What is not fitting' — the مَا مَوْصُوْلَة of Unit 5."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 4), item 10",
          "kind": "mcq",
          "prompt": "In لَا تَكْفُرْ بِمَا أَنْعَمَ اللهُ عَلَيْكَ مِنْ نِعَمٍ فَيُعَذِّبَكَ اللهُ, which word carries the naṣb marker?",
          "options": [
            "تَكْفُرْ",
            "أَنْعَمَ",
            "يُعَذِّبَ",
            "اللهُ"
          ],
          "correct": 2,
          "explanation": "Only the verb after the فَاءُ السَّبَبِ is مَنْصُوْبٌ."
        },
        {
          "title": "regret",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"regret\"?",
          "options": [
            "نَدَامَةٌ",
            "خَدَعَ يَخْدَعُ",
            "غَضِبَ يَغْضَبُ",
            "ضَحِكَ يَضْحَكُ"
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
            "to deceive",
            "to be angry",
            "to laugh"
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
            "أَبْغَضَ يُبْغِضُ",
            "مَلَكَ يَمْلِكُ",
            "اِبْتَلَى يَبْتَلِيْ"
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
            "to hate",
            "to own, possess",
            "to test, try"
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
            "غَضِبَ يَغْضَبُ",
            "ضَحِكَ يَضْحَكُ",
            "عَقَّ يَعُقُّ"
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
            "to be angry",
            "to laugh",
            "to be undutiful to"
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
            "مَلَكَ يَمْلِكُ",
            "اِبْتَلَى يَبْتَلِيْ",
            "اِغْتَابَ يَغْتَابُ"
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
            "to own, possess",
            "to test, try",
            "to backbite"
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
            "عُقُوْقًا",
            "خُسْرَانًا",
            "إِسْرَافًا"
          ],
          "correct": 0
        },
        {
          "title": "to hate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to hate\"?",
          "options": [
            "أَبْغَضَ يُبْغِضُ",
            "ضَحِكَ يَضْحَكُ",
            "عَقَّ يَعُقُّ",
            "خَسِرَ يَخْسَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to hate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْغَضَ يُبْغِضُ mean?",
          "options": [
            "to hate",
            "to laugh",
            "to be undutiful to",
            "to lose"
          ],
          "correct": 0
        },
        {
          "title": "to hate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْغَضَ يُبْغِضُ?",
          "options": [
            "إِبْغَاضًا",
            "اِغْتِيَابًا",
            "بُكَاءً",
            "خِدَاعًا"
          ],
          "correct": 0
        },
        {
          "title": "to be angry",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be angry\"?",
          "options": [
            "غَضِبَ يَغْضَبُ",
            "اِبْتَلَى يَبْتَلِيْ",
            "اِغْتَابَ يَغْتَابُ",
            "بَكَى يَبْكِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to be angry",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does غَضِبَ يَغْضَبُ mean?",
          "options": [
            "to be angry",
            "to test, try",
            "to backbite",
            "to weep"
          ],
          "correct": 0
        },
        {
          "title": "to be angry (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of غَضِبَ يَغْضَبُ?",
          "options": [
            "غَضَبًا",
            "خُسْرَانًا",
            "إِسْرَافًا",
            "إِبْغَاضًا"
          ],
          "correct": 0
        },
        {
          "title": "to own, possess",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to own, possess\"?",
          "options": [
            "مَلَكَ يَمْلِكُ",
            "عَقَّ يَعُقُّ",
            "خَسِرَ يَخْسَرُ",
            "أَسْرَفَ يُسْرِفُ"
          ],
          "correct": 0
        },
        {
          "title": "to own, possess",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَلَكَ يَمْلِكُ mean?",
          "options": [
            "to own, possess",
            "to be undutiful to",
            "to lose",
            "to be extravagant"
          ],
          "correct": 0
        },
        {
          "title": "to own, possess (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَلَكَ يَمْلِكُ?",
          "options": [
            "مِلْكًا",
            "بُكَاءً",
            "خِدَاعًا",
            "غَضَبًا"
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
            "اِغْتَابَ يَغْتَابُ",
            "بَكَى يَبْكِيْ",
            "نَدَامَةٌ"
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
            "to backbite",
            "to weep",
            "regret"
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
            "إِسْرَافًا",
            "إِبْغَاضًا",
            "مِلْكًا"
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
            "خَسِرَ يَخْسَرُ",
            "أَسْرَفَ يُسْرِفُ",
            "إِذْنٌ"
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
            "to lose",
            "to be extravagant",
            "permission"
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
            "خِدَاعًا",
            "غَضَبًا",
            "ضِحْكًا"
          ],
          "correct": 0
        },
        {
          "title": "to be undutiful to",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be undutiful to\"?",
          "options": [
            "عَقَّ يَعُقُّ",
            "بَكَى يَبْكِيْ",
            "نَدَامَةٌ",
            "أَجْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be undutiful to",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقَّ يَعُقُّ mean?",
          "options": [
            "to be undutiful to",
            "to weep",
            "regret",
            "reward, wage"
          ],
          "correct": 0
        },
        {
          "title": "to be undutiful to (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَقَّ يَعُقُّ?",
          "options": [
            "عُقُوْقًا",
            "إِبْغَاضًا",
            "مِلْكًا",
            "اِبْتِلَاءً"
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
            "أَسْرَفَ يُسْرِفُ",
            "إِذْنٌ",
            "خَدَعَ يَخْدَعُ"
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
            "to be extravagant",
            "permission",
            "to deceive"
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
            "غَضَبًا",
            "ضِحْكًا",
            "عُقُوْقًا"
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
            "نَدَامَةٌ",
            "أَجْرٌ",
            "أَبْغَضَ يُبْغِضُ"
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
            "regret",
            "reward, wage",
            "to hate"
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
            "مِلْكًا",
            "اِبْتِلَاءً",
            "اِغْتِيَابًا"
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
            "إِذْنٌ",
            "خَدَعَ يَخْدَعُ",
            "غَضِبَ يَغْضَبُ"
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
            "permission",
            "to deceive",
            "to be angry"
          ],
          "correct": 0
        },
        {
          "title": "to weep (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَكَى يَبْكِيْ?",
          "options": [
            "بُكَاءً",
            "ضِحْكًا",
            "عُقُوْقًا",
            "خُسْرَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to be extravagant",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be extravagant\"?",
          "options": [
            "أَسْرَفَ يُسْرِفُ",
            "أَجْرٌ",
            "أَبْغَضَ يُبْغِضُ",
            "مَلَكَ يَمْلِكُ"
          ],
          "correct": 0
        },
        {
          "title": "to be extravagant",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَسْرَفَ يُسْرِفُ mean?",
          "options": [
            "to be extravagant",
            "reward, wage",
            "to hate",
            "to own, possess"
          ],
          "correct": 0
        },
        {
          "title": "to be extravagant (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَسْرَفَ يُسْرِفُ?",
          "options": [
            "إِسْرَافًا",
            "اِبْتِلَاءً",
            "اِغْتِيَابًا",
            "بُكَاءً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l4",
      "title": "خلاصة جواب الأمر والنهي",
      "subtitle": "Part 4: Sentences after اَلْأَمْرُ and اَلنَّهْيُ",
      "concepts": [
        {
          "heading": "The book's summary table",
          "lines": [
            {
              "html": "Part 4 has produced exactly three shapes, and the table below sets all of them out at once. Read the third column first: the state of the verb in the second sentence is what carries the meaning.",
              "list": false
            },
            {
              "table": {
                "title": "Summary of جَوَابُ الْأَمْرِ and جَوَابُ النَّهْيِ",
                "headers": [
                  "Verb in the main sentence",
                  "Meaning of the following sentence",
                  "Iʿrāb of the verb in the following sentence",
                  "Example and translation"
                ],
                "rows": [
                  [
                    "اَلْأَمْرُ",
                    "result of adhering to the command",
                    "مَجْزُوْمٌ",
                    "اِجْتَهِدْ تَنْجَحْ — Work hard and you will be successful."
                  ],
                  [
                    "اَلنَّهْيُ",
                    "result of adhering to the prohibition",
                    "مَجْزُوْمٌ",
                    "لَا تَكْسَلْ تَنْجَحْ — Do not be lazy and you will be successful."
                  ],
                  [
                    "اَلنَّهْيُ",
                    "result of not adhering to the prohibition",
                    "فَ + مَنْصُوْبٌ",
                    "لَا تَكْسَلْ فَتَنْدَمَ — Do not be lazy, otherwise you will regret it."
                  ]
                ]
              }
            },
            {
              "html": "Notice that an أَمْر has only one shape. There is no فَ + مَنْصُوْب after a command in this Part, because a command has no 'result of not adhering' to attach — that meaning would need a prohibition. So: a sukūn always means the result of obeying, whichever of the two you started from; a فَ with a fatḥah can only follow a نَهْي.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why does an أَمْر have only ONE possible shape for what follows it, unlike a نَهْي which has two؟",
            "kind": "mcq",
            "options": [
              "A command has no 'result of not adhering' to attach — that meaning would need a prohibition instead",
              "Because commands can never be followed by anything",
              "Because commands always take the فَ + مَنْصُوْبٌ shape",
              "Because commands are always negative"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Joining two sentences",
          "lines": [
            {
              "html": "Exercise 4 works the other way round from the earlier exercises: it gives two separate sentences and asks you to join them, making whatever changes are necessary. Two decisions have to be made each time.",
              "list": false
            },
            {
              "html": "First, is the second sentence the result of obeying or of disobeying? Second, what does that do to its verb? If it is the result of obeying, drop any فَ and put the verb into the مَجْزُوْم state. If it is the result of disobeying, add a فَاءُ السَّبَبِ and put the verb into the مَنْصُوْب state.",
              "list": false
            },
            {
              "html": "لَا تَكْذِبْ / تَظْهَرُ الْبَرَكَةُ فِيْ حَيَاتِكَ ← لَا تَكْذِبْ تَظْهَرِ الْبَرَكَةُ فِيْ حَيَاتِكَ — Do not lie and blessing will appear in your life. — the result of obeying, so مَجْزُوْم",
              "list": true,
              "bullet": true
            },
            {
              "html": "لَا تَكْذِبْ / تُحْرَمُ الْبَرَكَةَ ← لَا تَكْذِبْ فَتُحْرَمَ الْبَرَكَةَ — Do not lie, lest you be deprived of blessing. — the result of disobeying, so فَ and مَنْصُوْب",
              "list": true,
              "bullet": true
            },
            {
              "html": "Watch for the forms that do not visibly change. A feminine-plural verb such as تَهْتَدِيْنَ or تَدْخُلْنَ is مَبْنِيٌّ and carries no jazm or naṣb marker, so joining alters nothing but the punctuation. Dual and masculine-plural verbs, by contrast, drop their nūn for both states: تَنْجَحَانِ becomes تَنْجَحَا, تَخْسَرُوْنَ becomes تَخْسَرُوْا.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When joining two separate sentences into a جَوَابُ الْأَمْرِ/النَّهْيِ pattern, what two decisions must be made, and what does each lead to؟",
            "kind": "mcq",
            "options": [
              "Whether the second sentence is the result of obeying or disobeying; obeying means drop any فَ and use مَجْزُوْمٌ, disobeying means add فَاءُ السَّبَبِ and use مَنْصُوْبٌ",
              "Only one decision is ever needed: whether to add a فَ",
              "Whether the verb is مَاضٍ or مُضَارِعٌ — nothing else matters",
              "Whether the sentence is a نِدَاءٌ or not"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "The three shapes of Part 4",
        "rows": [
          {
            "label": "After an أَمْر",
            "arabic": "مَجْزُوْمٌ",
            "meaning": "اِجْتَهِدْ تَنْجَحْ — result of obeying"
          },
          {
            "label": "After a نَهْي",
            "arabic": "مَجْزُوْمٌ",
            "meaning": "لَا تَكْسَلْ تَنْجَحْ — result of obeying"
          },
          {
            "label": "After a نَهْي",
            "arabic": "فَ + مَنْصُوْبٌ",
            "meaning": "لَا تَكْسَلْ فَتَنْدَمَ — result of disobeying"
          },
          {
            "label": "No fourth shape",
            "arabic": "لَا فَاءَ بَعْدَ الْأَمْرِ",
            "meaning": "a command has no 'result of not adhering'"
          },
          {
            "label": "Joining",
            "arabic": "اَلطَّاعَةُ ← جَزْمٌ",
            "meaning": "drop the فَ, put the verb in jazm"
          },
          {
            "label": "Joining",
            "arabic": "اَلْمُخَالَفَةُ ← فَاءٌ وَنَصْبٌ",
            "meaning": "add the فَاءُ السَّبَبِ, put the verb in naṣb"
          }
        ]
      },
      "quiz": [
        {
          "q": "How many shapes does the Part 4 summary table give?",
          "options": [
            "two",
            "three",
            "four",
            "six"
          ],
          "correct": 1,
          "explanation": "One after an أَمْر, and two after a نَهْي."
        },
        {
          "q": "What state is the verb in after an أَمْر?",
          "options": [
            "مَجْزُوْمٌ",
            "مَنْصُوْبٌ",
            "مَرْفُوْعٌ",
            "it varies"
          ],
          "correct": 0,
          "explanation": "اِجْتَهِدْ تَنْجَحْ."
        },
        {
          "q": "Why is there no فَ + مَنْصُوْب shape after an أَمْر?",
          "options": [
            "Because a command already contains a فَ",
            "Because commands are never followed by a جَوَاب",
            "Because the فَ only joins prohibitions",
            "Because a command has no 'result of not adhering' to attach"
          ],
          "correct": 3,
          "explanation": "That meaning needs a prohibition to work from."
        },
        {
          "q": "What does a sukūn on the second verb always mean in Part 4?",
          "options": [
            "the result of obeying",
            "the result of disobeying",
            "a second command",
            "nothing in particular"
          ],
          "correct": 0,
          "explanation": "Whichever of the two the first sentence was."
        },
        {
          "q": "When joining لَا تُضَيِّعُوْا وَقْتَكُمْ with تَخْسَرُوْنَ, what must you do?",
          "options": [
            "leave both unchanged",
            "add a فَ and drop the nūn — فَتَخْسَرُوْا",
            "put تَخْسَرُوْنَ in jazm with no فَ",
            "make the first verb مَنْصُوْبٌ"
          ],
          "correct": 1,
          "explanation": "Losing out is what follows from breaking the prohibition."
        },
        {
          "q": "Why does تَهْتَدِيْنَ not change when joined?",
          "options": [
            "Because it is مَرْفُوْعٌ",
            "Because it is a feminine-plural verb, which is مَبْنِيٌّ",
            "Because it has no nūn",
            "Because it is passive"
          ],
          "correct": 1,
          "explanation": "The نُوْنُ النِّسْوَةِ blocks any visible iʿrāb."
        }
      ],
      "bank": [
        {
          "title": "اِجْتَهِدْ تَنْجَحْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Summary table (Unit 6, Part 4, p. 592)",
          "sentence": "اِجْتَهِدْ تَنْجَحْ",
          "translation": "Work hard and you will be successful.",
          "cells": [
            "اِجْتَهِدْ",
            "تَنْجَحْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (أَنْتَ)"
                }
              ]
            }
          ],
          "distractors": [
            "نَهْيٌ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أُصْدُقُوْا تَظْهَرِ الْبَرَكَةُ فِيْ حَيَاتِكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 1",
          "sentence": "أُصْدُقُوْا تَظْهَرِ الْبَرَكَةُ فِيْ حَيَاتِكُمْ",
          "translation": "Be truthful and blessing will appear in your lives.",
          "cells": [
            "أُصْدُقُوْا",
            "تَظْهَرِ",
            "الْبَرَكَةُ",
            "فِيْ حَيَاتِكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "جَوَابُ أَمْرٍ"
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
                  "role": "فِعْلٌ مَجْزُوْمٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
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
            "نَهْيٌ",
            "فَاءُ السَّبَبِ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَكْذِبْ تَظْهَرِ الْبَرَكَةُ فِيْ حَيَاتِكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 2",
          "sentence": "لَا تَكْذِبْ تَظْهَرِ الْبَرَكَةُ فِيْ حَيَاتِكَ",
          "translation": "Do not lie and blessing will appear in your life.",
          "cells": [
            "لَا تَكْذِبْ",
            "تَظْهَرِ",
            "الْبَرَكَةُ",
            "فِيْ حَيَاتِكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "role": "فِعْلٌ مَجْزُوْمٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاعِلٌ"
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
            "أَمْرٌ",
            "فَاءُ السَّبَبِ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَكْذِبْ فَتُحْرَمَ الْبَرَكَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 3",
          "sentence": "لَا تَكْذِبْ فَتُحْرَمَ الْبَرَكَةَ",
          "translation": "Do not lie, lest you be deprived of blessing.",
          "cells": [
            "لَا تَكْذِبْ",
            "فَ",
            "تُحْرَمَ",
            "الْبَرَكَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْهُوْلٌ مَنْصُوْبٌ وَنَائِبُ الْفَاعِلِ (أَنْتَ)"
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
            "أَمْرٌ",
            "رَابِطَةٌ",
            "فَاعِلٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَسْتَكْبِرْ فَيُبْغِضَكَ اللهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 4",
          "sentence": "لَا تَسْتَكْبِرْ فَيُبْغِضَكَ اللهُ",
          "translation": "Do not be arrogant, lest Allah dislike you.",
          "cells": [
            "لَا تَسْتَكْبِرْ",
            "فَ",
            "يُبْغِضَكَ",
            "اللهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
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
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَمَفْعُوْلٌ بِهِ (كَ)"
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
            "أَمْرٌ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "تُوْبُوْا إِلَى اللهِ تُقْبَلْ تَوْبَتُكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 5",
          "sentence": "تُوْبُوْا إِلَى اللهِ تُقْبَلْ تَوْبَتُكُمْ",
          "translation": "Repent to Allah and your repentance will be accepted.",
          "cells": [
            "تُوْبُوْا",
            "إِلَى اللهِ",
            "تُقْبَلْ",
            "تَوْبَتُكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ أَمْرٍ"
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
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْهُوْلٌ مَجْزُوْمٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَائِبُ الْفَاعِلِ"
                }
              ]
            }
          ],
          "distractors": [
            "نَهْيٌ",
            "فَاءُ السَّبَبِ",
            "فَاعِلٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اِعْتَصِمْنَ بِكِتَابِ اللهِ تَهْتَدِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 6",
          "sentence": "اِعْتَصِمْنَ بِكِتَابِ اللهِ تَهْتَدِيْنَ",
          "translation": "Hold fast (f. pl.) to the Book of Allah and you will be guided.",
          "cells": [
            "اِعْتَصِمْنَ",
            "بِكِتَابِ اللهِ",
            "تَهْتَدِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (نَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَبْنِيٌّ وَفَاعِلٌ (نَ)"
                }
              ]
            }
          ],
          "distractors": [
            "نَهْيٌ",
            "فَاءُ السَّبَبِ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تُضَيِّعُوْا وَقْتَكُمْ فَتَخْسَرُوْا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 8",
          "sentence": "لَا تُضَيِّعُوْا وَقْتَكُمْ فَتَخْسَرُوْا",
          "translation": "Do not waste your time, lest you lose out.",
          "cells": [
            "لَا تُضَيِّعُوْا",
            "وَقْتَكُمْ",
            "فَ",
            "تَخْسَرُوْا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "جَوَابُ النَّهْيِ"
                }
              ]
            },
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "رَابِطَةٌ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "رَاجِعَا الدُّرُوْسَ تَنْجَحَا فِي الِامْتِحَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 9",
          "sentence": "رَاجِعَا الدُّرُوْسَ تَنْجَحَا فِي الِامْتِحَانِ",
          "translation": "Revise (you two) the lessons and you will succeed in the exam.",
          "cells": [
            "رَاجِعَا",
            "الدُّرُوْسَ",
            "تَنْجَحَا",
            "فِي الِامْتِحَانِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جَوَابُ أَمْرٍ"
                }
              ]
            },
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (ا)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فِعْلٌ مَجْزُوْمٌ وَفَاعِلٌ (ا)"
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
            "نَهْيٌ",
            "فَاءُ السَّبَبِ",
            "مُبْتَدَأٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَدْخُلُوْا بُيُوْتًا غَيْرَ بُيُوْتِكُمْ فَتَرَوْا مَا لَا يَنْبَغِيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 4), item 10",
          "sentence": "لَا تَدْخُلُوْا بُيُوْتًا غَيْرَ بُيُوْتِكُمْ فَتَرَوْا مَا لَا يَنْبَغِيْ",
          "translation": "Do not enter houses other than your own, lest you see what is not fitting.",
          "cells": [
            "لَا تَدْخُلُوْا",
            "بُيُوْتًا",
            "غَيْرَ بُيُوْتِكُمْ",
            "فَ",
            "تَرَوْا",
            "مَا لَا يَنْبَغِيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاءُ السَّبَبِ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جَوَابُ النَّهْيِ"
                }
              ]
            },
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
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "نَعْتٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَنْصُوْبٌ وَفَاعِلٌ (و)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "اِسْمٌ مُؤَوَّلٌ — مَفْعُوْلٌ بِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "رَابِطَةٌ",
            "حَالٌ",
            "تَمْيِيْزٌ"
          ]
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4), items 2 and 3",
          "kind": "mcq",
          "prompt": "Both begin لَا تَكْذِبْ. Why does one join with a فَ and the other without?",
          "options": [
            "Because one is longer",
            "Because one has a passive verb",
            "Because blessing appearing follows from obeying, while being deprived follows from disobeying",
            "There is no rule — it varies at random"
          ],
          "correct": 2,
          "explanation": "The meaning of the second sentence decides the shape."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4), item 1",
          "kind": "mcq",
          "prompt": "In أُصْدُقُوْا / تَظْهَرُ الْبَرَكَةُ, what happens to تَظْهَرُ when joined?",
          "options": [
            "It becomes تَظْهَرِ — مَجْزُوْمٌ, with a kasrah before the ال",
            "It becomes تَظْهَرَ",
            "It stays مَرْفُوْعَة",
            "It takes a فَ"
          ],
          "correct": 0,
          "explanation": "Jazm, with the usual adjustment to avoid two sukūns."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4), item 4",
          "kind": "mcq",
          "prompt": "In لَا تَسْتَكْبِرْ / يُبْغِضُكَ اللهُ, what is the joined form?",
          "options": [
            "لَا تَسْتَكْبِرْ يُبْغِضْكَ اللهُ",
            "لَا تَسْتَكْبِرْ فَيُبْغِضَكَ اللهُ",
            "لَا تَسْتَكْبِرْ وَيُبْغِضُكَ اللهُ",
            "no change is needed"
          ],
          "correct": 1,
          "explanation": "Being disliked by Allah is the consequence of arrogance, not of avoiding it."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4), item 5",
          "kind": "mcq",
          "prompt": "In تُوْبُوْا إِلَى اللهِ / تُقْبَلُ تَوْبَتُكُمْ, what is تَوْبَتُكُمْ in the joined sentence?",
          "options": [
            "the مَفْعُوْلٌ بِهِ",
            "the نَائِبُ الْفَاعِلِ of the مَجْزُوْم passive verb",
            "a مُبْتَدَأٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 1,
          "explanation": "تُقْبَلْ is مَجْهُوْلٌ, so its subject is a نَائِبُ الْفَاعِلِ."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4), item 7",
          "kind": "mcq",
          "prompt": "In اِجْتَنِبْنَ الْمَعَاصِيْ / تَدْخُلْنَ الْجَنَّةَ, what changes on joining?",
          "options": [
            "the verb takes a fatḥah",
            "the verb takes a sukūn",
            "nothing visible — the feminine-plural form is مَبْنِيٌّ",
            "a فَ must be added"
          ],
          "correct": 2,
          "explanation": "The meaning is still the result of obeying, so no فَ."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4), item 9",
          "kind": "mcq",
          "prompt": "In رَاجِعَا الدُّرُوْسَ / تَنْجَحَانِ, what is the joined form of the second verb?",
          "options": [
            "تَنْجَحَانِ",
            "تَنْجَحَا",
            "تَنْجَحُوْا",
            "تَنْجَحْنَ"
          ],
          "correct": 1,
          "explanation": "A dual verb drops its nūn in the مَجْزُوْم state."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4), item 10",
          "kind": "mcq",
          "prompt": "In لَا تَدْخُلُوْا بُيُوْتًا غَيْرَ بُيُوْتِكُمْ / تَرَوْنَ مَا لَا يَنْبَغِيْ, which shape is needed?",
          "options": [
            "فَ + مَنْصُوْبٌ — فَتَرَوْا",
            "مَجْزُوْمٌ with no فَ",
            "no change",
            "a وَاوٌ حَالِيَّةٌ"
          ],
          "correct": 0,
          "explanation": "Seeing what is unfitting is the consequence of entering, i.e. of disobeying."
        },
        {
          "title": "Book Summary table (Unit 6, Part 4, p. 592)",
          "kind": "mcq",
          "prompt": "Which of the three rows describes لَا تَكْسَلْ فَتَنْدَمَ?",
          "options": [
            "أَمْر, result of adhering",
            "نَهْي, result of adhering",
            "نَهْي, result of not adhering",
            "none of them"
          ],
          "correct": 2,
          "explanation": "The one row with فَ + مَنْصُوْبٌ."
        },
        {
          "title": "blessing, barakah",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"blessing, barakah\"?",
          "options": [
            "بَرَكَةٌ",
            "مَعْصِيَةٌ",
            "صَدَقَ يَصْدُقُ",
            "حَرَمَ يَحْرِمُ"
          ],
          "correct": 0
        },
        {
          "title": "blessing, barakah",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَرَكَةٌ mean?",
          "options": [
            "blessing, barakah",
            "act of disobedience",
            "to be truthful",
            "to deprive"
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
            "بَيْتٌ",
            "ظَهَرَ يَظْهَرُ",
            "تَابَ يَتُوْبُ"
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
            "house",
            "to appear",
            "to repent"
          ],
          "correct": 0
        },
        {
          "title": "repentance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"repentance\"?",
          "options": [
            "تَوْبَةٌ",
            "صَدَقَ يَصْدُقُ",
            "حَرَمَ يَحْرِمُ",
            "اِجْتَنَبَ يَجْتَنِبُ"
          ],
          "correct": 0
        },
        {
          "title": "repentance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَوْبَةٌ mean?",
          "options": [
            "repentance",
            "to be truthful",
            "to deprive",
            "to avoid"
          ],
          "correct": 0
        },
        {
          "title": "act of disobedience",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"act of disobedience\"?",
          "options": [
            "مَعْصِيَةٌ",
            "ظَهَرَ يَظْهَرُ",
            "تَابَ يَتُوْبُ",
            "رَاجَعَ يُرَاجِعُ"
          ],
          "correct": 0
        },
        {
          "title": "act of disobedience",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَعْصِيَةٌ mean?",
          "options": [
            "act of disobedience",
            "to appear",
            "to repent",
            "to revise"
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
            "حَرَمَ يَحْرِمُ",
            "اِجْتَنَبَ يَجْتَنِبُ",
            "اِنْبَغَى يَنْبَغِيْ"
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
            "to deprive",
            "to avoid",
            "to be fitting"
          ],
          "correct": 0
        },
        {
          "title": "to be truthful",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be truthful\"?",
          "options": [
            "صَدَقَ يَصْدُقُ",
            "تَابَ يَتُوْبُ",
            "رَاجَعَ يُرَاجِعُ",
            "بَرَكَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be truthful",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدَقَ يَصْدُقُ mean?",
          "options": [
            "to be truthful",
            "to repent",
            "to revise",
            "blessing, barakah"
          ],
          "correct": 0
        },
        {
          "title": "to be truthful (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of صَدَقَ يَصْدُقُ?",
          "options": [
            "صِدْقًا",
            "حِرْمَانًا",
            "اِجْتِنَابًا",
            "اِنْبِغَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to appear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to appear\"?",
          "options": [
            "ظَهَرَ يَظْهَرُ",
            "اِجْتَنَبَ يَجْتَنِبُ",
            "اِنْبَغَى يَنْبَغِيْ",
            "حَيَاةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to appear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ظَهَرَ يَظْهَرُ mean?",
          "options": [
            "to appear",
            "to avoid",
            "to be fitting",
            "life"
          ],
          "correct": 0
        },
        {
          "title": "to appear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ظَهَرَ يَظْهَرُ?",
          "options": [
            "ظُهُوْرًا",
            "تَوْبَةً",
            "مُرَاجَعَةً",
            "صِدْقًا"
          ],
          "correct": 0
        },
        {
          "title": "to deprive",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deprive\"?",
          "options": [
            "حَرَمَ يَحْرِمُ",
            "رَاجَعَ يُرَاجِعُ",
            "بَرَكَةٌ",
            "تَوْبَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to deprive",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَرَمَ يَحْرِمُ mean?",
          "options": [
            "to deprive",
            "to revise",
            "blessing, barakah",
            "repentance"
          ],
          "correct": 0
        },
        {
          "title": "to deprive (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَرَمَ يَحْرِمُ?",
          "options": [
            "حِرْمَانًا",
            "اِجْتِنَابًا",
            "اِنْبِغَاءً",
            "ظُهُوْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to repent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to repent\"?",
          "options": [
            "تَابَ يَتُوْبُ",
            "اِنْبَغَى يَنْبَغِيْ",
            "حَيَاةٌ",
            "مَعْصِيَةٌ"
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
            "to be fitting",
            "life",
            "act of disobedience"
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
            "مُرَاجَعَةً",
            "صِدْقًا",
            "حِرْمَانًا"
          ],
          "correct": 0
        },
        {
          "title": "to avoid",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to avoid\"?",
          "options": [
            "اِجْتَنَبَ يَجْتَنِبُ",
            "بَرَكَةٌ",
            "تَوْبَةٌ",
            "بَيْتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to avoid",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتَنَبَ يَجْتَنِبُ mean?",
          "options": [
            "to avoid",
            "blessing, barakah",
            "repentance",
            "house"
          ],
          "correct": 0
        },
        {
          "title": "to avoid (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِجْتَنَبَ يَجْتَنِبُ?",
          "options": [
            "اِجْتِنَابًا",
            "اِنْبِغَاءً",
            "ظُهُوْرًا",
            "تَوْبَةً"
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
            "حَيَاةٌ",
            "مَعْصِيَةٌ",
            "صَدَقَ يَصْدُقُ"
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
            "life",
            "act of disobedience",
            "to be truthful"
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
            "صِدْقًا",
            "حِرْمَانًا",
            "اِجْتِنَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to be fitting",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be fitting\"?",
          "options": [
            "اِنْبَغَى يَنْبَغِيْ",
            "تَوْبَةٌ",
            "بَيْتٌ",
            "ظَهَرَ يَظْهَرُ"
          ],
          "correct": 0
        },
        {
          "title": "to be fitting",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِنْبَغَى يَنْبَغِيْ mean?",
          "options": [
            "to be fitting",
            "repentance",
            "house",
            "to appear"
          ],
          "correct": 0
        },
        {
          "title": "to be fitting (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِنْبَغَى يَنْبَغِيْ?",
          "options": [
            "اِنْبِغَاءً",
            "ظُهُوْرًا",
            "تَوْبَةً",
            "مُرَاجَعَةً"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l5",
      "title": "الجملة التعليلية",
      "subtitle": "Part 5: جُمْلَةٌ تَعْلِيْلِيَّةٌ",
      "concepts": [
        {
          "heading": "What a جُمْلَةٌ تَعْلِيْلِيَّةٌ is",
          "lines": [
            {
              "html": "Sometimes, an independent sentence may show the cause or reason of the previous sentence, like a مَفْعُوْلٌ لَهُ. This is called a جُمْلَةٌ تَعْلِيْلِيَّةٌ.",
              "list": false
            },
            {
              "html": "A جُمْلَةٌ تَعْلِيْلِيَّةٌ is translated by adding 'for', 'because', 'so that' or 'perhaps' between the two sentences. Sometimes, no additions are made.",
              "list": false
            },
            {
              "html": "The book's illustration is in English: \"Be good to your parents because they looked after you when you were young.\" This is the same passage used in the Introduction on p. 562 — the one that showed two grammatically independent sentences with a logical link between them. Part 5 gives that link its name.",
              "list": false
            },
            {
              "html": "The comparison with the مَفْعُوْلٌ لَهُ is the key to the idea. In Unit 5 a single مَصْدَر such as رَغْبَةً could state why an action was done. Here a whole sentence does the same work, but without being nested inside the first — it stands beside it, complete in itself.",
              "list": false
            },
            {
              "table": {
                "title": "Types of جُمْلَةٌ تَعْلِيْلِيَّةٌ",
                "headers": [
                  "No.",
                  "Type"
                ],
                "rows": [
                  [
                    "1",
                    "with no additions"
                  ],
                  [
                    "2",
                    "with the فَ of حَرْفُ عَطْفٍ"
                  ],
                  [
                    "3",
                    "with the لَعَلَّ of حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What is a جُمْلَةٌ تَعْلِيْلِيَّةٌ, and to which earlier construction is it compared؟",
            "kind": "mcq",
            "options": [
              "An independent sentence showing the cause/reason of the previous one, like a مَفْعُوْلٌ لَهُ — but standing beside the first sentence rather than nested inside it",
              "A sentence nested inside another as its مَفْعُوْلٌ لَهُ, exactly like Unit 5's مَصْدَر phrase",
              "A question sentence",
              "A sentence that negates the one before it"
            ],
            "correct": 0
          }
        },
        {
          "heading": "A جُمْلَةٌ تَعْلِيْلِيَّةٌ with no additions",
          "lines": [
            {
              "html": "A جُمْلَةٌ تَعْلِيْلِيَّةٌ can occur without any additions to it — no particle at all joins the two sentences.",
              "list": false
            },
            {
              "html": "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ — Do good, for verily Allah loves those who do good.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this text, the second sentence — 'Allah loves those who do good' — shows the reason for the command in the first, 'be good'. The order is Action, then Reason.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ",
                "translation": "Do good, for verily Allah loves those who do good.",
                "cells": [
                  "أَحْسِنُوْا",
                  "إِنَّ",
                  "اللهَ",
                  "يُحِبُّ الْمُحْسِنِيْنَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "أَمْرٌ"
                      },
                      {
                        "start": 1,
                        "end": 3,
                        "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 0,
                        "end": 0,
                        "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                      },
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
                        "end": 3,
                        "role": "خَبَرُ إِنَّ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Almost every sentence in Exercise 1 has إِنَّ at the head of the second half, and that is no accident. With no particle to join the two sentences, إِنَّ is what signals that the second is not simply the next thing said but the ground of the first. Its usual English rendering here is 'for indeed' or 'because'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When a جُمْلَةٌ تَعْلِيْلِيَّةٌ has no additions joining it to the first sentence, what word commonly opens the second sentence, and why؟",
            "kind": "mcq",
            "options": [
              "إِنَّ, because with no particle to join the two sentences, إِنَّ is what signals the second is the ground/reason for the first",
              "لَا, to negate the first sentence",
              "أَنْ, to nest the second sentence",
              "There is no common opening word at all"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اَلْجُمْلَةُ التَّعْلِيْلِيَّةُ",
        "rows": [
          {
            "label": "What it is",
            "arabic": "جُمْلَةٌ تُبَيِّنُ السَّبَبَ",
            "meaning": "an independent sentence giving the reason for the last"
          },
          {
            "label": "Compare",
            "arabic": "كَالْمَفْعُوْلِ لَهُ",
            "meaning": "the same job a مَصْدَر does inside a sentence"
          },
          {
            "label": "In English",
            "arabic": "for / because / so that / perhaps",
            "meaning": "or sometimes with no addition at all"
          },
          {
            "label": "Type 1",
            "arabic": "بِلَا زِيَادَةٍ",
            "meaning": "no particle joins the two"
          },
          {
            "label": "Type 2",
            "arabic": "بِفَاءِ الْعَطْفِ",
            "meaning": "joined by a فَ"
          },
          {
            "label": "Type 3",
            "arabic": "بِلَعَلَّ",
            "meaning": "'so that', 'perhaps'"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does a جُمْلَةٌ تَعْلِيْلِيَّةٌ do?",
          "options": [
            "It shows the cause or reason of the previous sentence",
            "It states a condition",
            "It calls out to someone",
            "It swears an oath"
          ],
          "correct": 0,
          "explanation": "It is comparable to a مَفْعُوْلٌ لَهُ, but as a whole sentence rather than a single word."
        },
        {
          "q": "Which construction from an earlier unit does it resemble?",
          "options": [
            "the مَفْعُوْلٌ مُطْلَق",
            "the حَال",
            "the مَفْعُوْلٌ لَهُ",
            "the تَمْيِيْز"
          ],
          "correct": 2,
          "explanation": "Both give the reason; one is a word, the other a whole sentence."
        },
        {
          "q": "Which English words can translate a جُمْلَةٌ تَعْلِيْلِيَّةٌ?",
          "options": [
            "'when', 'while', 'as'",
            "'for', 'because', 'so that', 'perhaps'",
            "'unless', 'lest'",
            "'even though', 'even if'"
          ],
          "correct": 1,
          "explanation": "And sometimes no addition is made at all."
        },
        {
          "q": "How many types of جُمْلَةٌ تَعْلِيْلِيَّةٌ are there?",
          "options": [
            "two",
            "three",
            "four",
            "six"
          ],
          "correct": 1,
          "explanation": "With no additions, with a فَ, and with لَعَلَّ."
        },
        {
          "q": "What order do the two sentences come in?",
          "options": [
            "Reason, then Action",
            "Action, then Reason",
            "either order",
            "Reason only"
          ],
          "correct": 1,
          "explanation": "The Reason sentence explains the Action sentence that precedes it, so Action comes first."
        },
        {
          "q": "In أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ, what joins the two sentences?",
          "options": [
            "nothing — this is the type with no additions",
            "a فَ",
            "لَعَلَّ",
            "a وَاوٌ حَالِيَّةٌ"
          ],
          "correct": 0,
          "explanation": "إِنَّ belongs to the second sentence; it is not a joining particle."
        }
      ],
      "bank": [
        {
          "title": "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 5, p. 594)",
          "sentence": "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ",
          "translation": "Do good, for verily Allah loves those who do good.",
          "cells": [
            "أَحْسِنُوْا",
            "إِنَّ",
            "اللهَ",
            "يُحِبُّ الْمُحْسِنِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
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
                  "end": 3,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أُطْلُبِ الْعِلْمَ إِنَّ الْعِلْمَ يَنْفَعُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 1",
          "sentence": "أُطْلُبِ الْعِلْمَ إِنَّ الْعِلْمَ يَنْفَعُ",
          "translation": "Seek knowledge, for knowledge benefits.",
          "cells": [
            "أُطْلُبِ",
            "الْعِلْمَ",
            "إِنَّ الْعِلْمَ يَنْفَعُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اِغْسِلْ يَدَيْكَ إِنَّهُمَا وَسِخَتَانِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 2",
          "sentence": "اِغْسِلْ يَدَيْكَ إِنَّهُمَا وَسِخَتَانِ",
          "translation": "Wash your hands, for they are dirty.",
          "cells": [
            "اِغْسِلْ",
            "يَدَيْكَ",
            "إِنَّهُمَا",
            "وَسِخَتَانِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُمَا)"
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
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَا تُشْرِكُوْا بِاللهِ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيْمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 3",
          "sentence": "لَا تُشْرِكُوْا بِاللهِ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيْمٌ",
          "translation": "Do not associate partners with Allah, for shirk is a great wrong.",
          "cells": [
            "لَا تُشْرِكُوْا",
            "بِاللهِ",
            "إِنَّ",
            "الشِّرْكَ",
            "لَظُلْمٌ عَظِيْمٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ مُؤَكَّدٌ بِاللَّامِ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ النَّهْيِ",
            "فَاءُ السَّبَبِ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَا أَكْذِبُ إِنَّ الْكِذْبَ يَهْدِيْ إِلَى النَّارِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 4",
          "sentence": "لَا أَكْذِبُ إِنَّ الْكِذْبَ يَهْدِيْ إِلَى النَّارِ",
          "translation": "I do not lie, because lying leads to the Fire.",
          "cells": [
            "لَا أَكْذِبُ",
            "إِنَّ",
            "الْكِذْبَ",
            "يَهْدِيْ إِلَى النَّارِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جُمْلَةٌ خَبَرِيَّةٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (أَنَا)"
                },
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
                  "end": 3,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "أَمْرٌ",
            "نَهْيٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "وَاسْتَغْفِرُوا اللهَ إِنَّ اللهَ غَفُوْرٌ رَحِيْمٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 5",
          "sentence": "وَاسْتَغْفِرُوا اللهَ إِنَّ اللهَ غَفُوْرٌ رَحِيْمٌ",
          "translation": "And seek Allah's forgiveness, for Allah is Forgiving, Merciful.",
          "cells": [
            "وَاسْتَغْفِرُوا",
            "اللهَ",
            "إِنَّ",
            "اللهَ",
            "غَفُوْرٌ رَحِيْمٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اُنْظُرُوْا إِلَى السَّمَاءِ وَالْأَرْضِ إِنَّ فِيْهِمَا لَآيَاتٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 7",
          "sentence": "اُنْظُرُوْا إِلَى السَّمَاءِ وَالْأَرْضِ إِنَّ فِيْهِمَا لَآيَاتٍ",
          "translation": "Look at the heavens and the earth, for in them are signs.",
          "cells": [
            "اُنْظُرُوْا",
            "إِلَى السَّمَاءِ وَالْأَرْضِ",
            "إِنَّ",
            "فِيْهِمَا",
            "لَآيَاتٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ إِنَّ مُقَدَّمٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ إِنَّ مُؤَخَّرٌ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَاسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللهَ مَعَ الصَّابِرِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 8",
          "sentence": "وَاسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللهَ مَعَ الصَّابِرِيْنَ",
          "translation": "And seek help through patience and prayer, for Allah is with the patient.",
          "cells": [
            "وَاسْتَعِيْنُوْا",
            "بِالصَّبْرِ وَالصَّلَاةِ",
            "إِنَّ",
            "اللهَ",
            "مَعَ الصَّابِرِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "لَا تَتَّبِعُوْا خُطُوَاتِ الشَّيْطَانِ إِنَّهُ لَكُمْ عَدُوٌّ مُبِيْنٌ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 9",
          "sentence": "لَا تَتَّبِعُوْا خُطُوَاتِ الشَّيْطَانِ إِنَّهُ لَكُمْ عَدُوٌّ مُبِيْنٌ",
          "translation": "Do not follow the footsteps of Shayṭān, for he is a clear enemy to you.",
          "cells": [
            "لَا تَتَّبِعُوْا",
            "خُطُوَاتِ الشَّيْطَانِ",
            "إِنَّهُ",
            "لَكُمْ",
            "عَدُوٌّ مُبِيْنٌ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُ)"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ النَّهْيِ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "كُلُوْا وَاشْرَبُوْا وَلَا تُسْرِفُوْا إِنَّ اللهَ لَا يُحِبُّ الْمُسْرِفِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 5), item 10",
          "sentence": "كُلُوْا وَاشْرَبُوْا وَلَا تُسْرِفُوْا إِنَّ اللهَ لَا يُحِبُّ الْمُسْرِفِيْنَ",
          "translation": "Eat and drink and do not be extravagant, for Allah does not love the extravagant.",
          "cells": [
            "كُلُوْا وَاشْرَبُوْا",
            "وَلَا تُسْرِفُوْا",
            "إِنَّ",
            "اللهَ",
            "لَا يُحِبُّ الْمُسْرِفِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 1",
          "kind": "mcq",
          "prompt": "In أُطْلُبِ الْعِلْمَ إِنَّ الْعِلْمَ يَنْفَعُ, what is إِنَّ الْعِلْمَ يَنْفَعُ?",
          "options": [
            "the جَوَابُ الْأَمْرِ",
            "a جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "a حَالٌ",
            "a شَرْطٌ"
          ],
          "correct": 1,
          "explanation": "It gives the reason for the command, not its result."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 1",
          "kind": "mcq",
          "prompt": "How would you tell أُطْلُبِ الْعِلْمَ إِنَّ الْعِلْمَ يَنْفَعُ from a جَوَابُ أَمْرٍ?",
          "options": [
            "by the sukūn on the second verb",
            "by the فَ",
            "by the second sentence being complete and مَرْفُوْع, not a مَجْزُوْم verb",
            "there is no way to tell"
          ],
          "correct": 2,
          "explanation": "يَنْفَعُ keeps its ḍammah, so it depends on nothing."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 2",
          "kind": "mcq",
          "prompt": "In اِغْسِلْ يَدَيْكَ إِنَّهُمَا وَسِخَتَانِ, why is وَسِخَتَانِ dual?",
          "options": [
            "Because it agrees with the هُمَا, the اِسْمُ إِنَّ",
            "Because يَدَيْكَ is مَنْصُوْبٌ",
            "Because إِنَّ demands it",
            "Because the verb is an أَمْر"
          ],
          "correct": 0,
          "explanation": "A خَبَر agrees with its اِسْم in number and gender."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 3",
          "kind": "mcq",
          "prompt": "In لَا تُشْرِكُوْا بِاللهِ إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيْمٌ, what is the لَ on ظُلْمٌ?",
          "options": [
            "لَامُ الْجَوَابِ",
            "لَامُ الْأَمْرِ",
            "لَامُ التَّعْلِيْلِ",
            "the لَامُ التَّوْكِيْدِ that accompanies إِنَّ"
          ],
          "correct": 3,
          "explanation": "The same إِنَّ … لَ shape met in the oath table of Part 2."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 4",
          "kind": "mcq",
          "prompt": "In لَا أَكْذِبُ إِنَّ الْكِذْبَ يَهْدِيْ إِلَى النَّارِ, what kind of sentence is the first half?",
          "options": [
            "a نَهْي",
            "an أَمْر",
            "a statement — not every تَعْلِيْلِيَّة follows a command",
            "a question"
          ],
          "correct": 2,
          "explanation": "أَكْذِبُ is مَرْفُوْعٌ and first person: 'I do not lie'."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 7",
          "kind": "mcq",
          "prompt": "In اُنْظُرُوْا إِلَى السَّمَاءِ وَالْأَرْضِ إِنَّ فِيْهِمَا لَآيَاتٍ, what is فِيْهِمَا?",
          "options": [
            "the اِسْمُ إِنَّ",
            "the خَبَرُ إِنَّ, placed before the اِسْم",
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "لَآيَاتٍ is the delayed مَنْصُوْب اِسْم — hence the kasrah of the sound feminine plural."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 9",
          "kind": "mcq",
          "prompt": "In ﴿لَا تَتَّبِعُوْا خُطُوَاتِ الشَّيْطَانِ إِنَّهُ لَكُمْ عَدُوٌّ مُبِيْنٌ﴾, why is عَدُوٌّ مَرْفُوْع?",
          "options": [
            "Because it is the خَبَرُ إِنَّ",
            "Because it is the اِسْمُ إِنَّ",
            "Because لَكُمْ precedes it",
            "Because it is definite"
          ],
          "correct": 0,
          "explanation": "The هُ of إِنَّهُ is the اِسْم; لَكُمْ is extra material before the خَبَر."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 5), item 10",
          "kind": "mcq",
          "prompt": "In ﴿كُلُوْا وَاشْرَبُوْا وَلَا تُسْرِفُوْا إِنَّ اللهَ لَا يُحِبُّ الْمُسْرِفِيْنَ﴾, what does the تَعْلِيْلِيَّة explain?",
          "options": [
            "only the command to eat",
            "only the command to drink",
            "the prohibition against extravagance",
            "nothing; it is a separate verse"
          ],
          "correct": 2,
          "explanation": "The reason attaches to the sentence immediately before it."
        },
        {
          "title": "footsteps",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"footsteps\"?",
          "options": [
            "خُطْوَةٌ",
            "عَصْرٌ",
            "عَدُوٌّ",
            "اِسْتَعَانَ يَسْتَعِيْنُ"
          ],
          "correct": 0
        },
        {
          "title": "footsteps",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خُطْوَةٌ mean?",
          "options": [
            "footsteps",
            "time, age",
            "enemy",
            "to seek help"
          ],
          "correct": 0
        },
        {
          "title": "footsteps (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خُطْوَةٌ?",
          "options": [
            "خُطُوَاتٌ",
            "عُصُوْرٌ",
            "مُحْسِنُوْنَ",
            "صُوَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "body",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"body\"?",
          "options": [
            "جِسْمٌ",
            "مُبِيْنٌ",
            "مُحْسِنٌ",
            "غَسَلَ يَغْسِلُ"
          ],
          "correct": 0
        },
        {
          "title": "body",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جِسْمٌ mean?",
          "options": [
            "body",
            "clear, manifest",
            "one who does good",
            "to wash"
          ],
          "correct": 0
        },
        {
          "title": "body (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جِسْمٌ?",
          "options": [
            "أَجْسَامٌ",
            "أَعْدَاءٌ",
            "خُطُوَاتٌ",
            "عُصُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "form, picture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"form, picture\"?",
          "options": [
            "صُوْرَةٌ",
            "عَدُوٌّ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "نَظَرَ يَنْظُرُ"
          ],
          "correct": 0
        },
        {
          "title": "form, picture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صُوْرَةٌ mean?",
          "options": [
            "form, picture",
            "enemy",
            "to seek help",
            "to look"
          ],
          "correct": 0
        },
        {
          "title": "form, picture (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صُوْرَةٌ?",
          "options": [
            "صُوَرٌ",
            "مُحْسِنُوْنَ",
            "أَجْسَامٌ",
            "أَعْدَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "time, age",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, age\"?",
          "options": [
            "عَصْرٌ",
            "مُحْسِنٌ",
            "غَسَلَ يَغْسِلُ",
            "هَدَى يَهْدِيْ"
          ],
          "correct": 0
        },
        {
          "title": "time, age",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَصْرٌ mean?",
          "options": [
            "time, age",
            "one who does good",
            "to wash",
            "to guide, lead"
          ],
          "correct": 0
        },
        {
          "title": "time, age (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَصْرٌ?",
          "options": [
            "عُصُوْرٌ",
            "خُطُوَاتٌ",
            "صُوَرٌ",
            "مُحْسِنُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "clear, manifest",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"clear, manifest\"?",
          "options": [
            "مُبِيْنٌ",
            "اِسْتَعَانَ يَسْتَعِيْنُ",
            "نَظَرَ يَنْظُرُ",
            "خُطْوَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "clear, manifest",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُبِيْنٌ mean?",
          "options": [
            "clear, manifest",
            "to seek help",
            "to look",
            "footsteps"
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
            "غَسَلَ يَغْسِلُ",
            "هَدَى يَهْدِيْ",
            "جِسْمٌ"
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
            "to wash",
            "to guide, lead",
            "body"
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
            "صُوَرٌ",
            "مُحْسِنُوْنَ",
            "أَجْسَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "one who does good",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"one who does good\"?",
          "options": [
            "مُحْسِنٌ",
            "نَظَرَ يَنْظُرُ",
            "خُطْوَةٌ",
            "صُوْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "one who does good",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مُحْسِنٌ mean?",
          "options": [
            "one who does good",
            "to look",
            "footsteps",
            "form, picture"
          ],
          "correct": 0
        },
        {
          "title": "one who does good (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of مُحْسِنٌ?",
          "options": [
            "مُحْسِنُوْنَ",
            "عُصُوْرٌ",
            "خُطُوَاتٌ",
            "صُوَرٌ"
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
            "هَدَى يَهْدِيْ",
            "جِسْمٌ",
            "عَصْرٌ"
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
            "to guide, lead",
            "body",
            "time, age"
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
            "غَسْلًا",
            "هِدَايَةً",
            "نَظَرًا"
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
            "خُطْوَةٌ",
            "صُوْرَةٌ",
            "مُبِيْنٌ"
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
            "footsteps",
            "form, picture",
            "clear, manifest"
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
            "نَظَرًا",
            "اِسْتِعَانَةً",
            "هِدَايَةً"
          ],
          "correct": 0
        },
        {
          "title": "to look",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to look\"?",
          "options": [
            "نَظَرَ يَنْظُرُ",
            "جِسْمٌ",
            "عَصْرٌ",
            "عَدُوٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to look",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَظَرَ يَنْظُرُ mean?",
          "options": [
            "to look",
            "body",
            "time, age",
            "enemy"
          ],
          "correct": 0
        },
        {
          "title": "to look (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of نَظَرَ يَنْظُرُ?",
          "options": [
            "نَظَرًا",
            "هِدَايَةً",
            "غَسْلًا",
            "اِسْتِعَانَةً"
          ],
          "correct": 0
        },
        {
          "title": "to guide, lead",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to guide, lead\"?",
          "options": [
            "هَدَى يَهْدِيْ",
            "صُوْرَةٌ",
            "مُبِيْنٌ",
            "مُحْسِنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to guide, lead",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does هَدَى يَهْدِيْ mean?",
          "options": [
            "to guide, lead",
            "form, picture",
            "clear, manifest",
            "one who does good"
          ],
          "correct": 0
        },
        {
          "title": "to guide, lead (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of هَدَى يَهْدِيْ?",
          "options": [
            "هِدَايَةً",
            "اِسْتِعَانَةً",
            "نَظَرًا",
            "غَسْلًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l6",
      "title": "الجملة التعليلية بلعل",
      "subtitle": "Part 5: جُمْلَةٌ تَعْلِيْلِيَّةٌ",
      "concepts": [
        {
          "heading": "The construction",
          "lines": [
            {
              "html": "A جُمْلَةٌ تَعْلِيْلِيَّةٌ can occur with the حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ of لَعَلَّ.",
              "list": false
            },
            {
              "html": "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ — Fear Allah so that you may be successful.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this text, the second sentence — 'you may be successful' — shows the reason for the command in the first, 'Fear Allah'. As before, the order is Action, then Reason.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "لَعَلَّكُمْ تُفْلِحُوْنَ",
                "translation": "so that you may be successful",
                "cells": [
                  "لَعَلَّ",
                  "كُمْ",
                  "تُفْلِحُوْنَ"
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
                        "role": "اِسْمُ لَعَلَّ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "خَبَرُ لَعَلَّ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (و)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "لَعَلَّ is one of the sisters of إِنَّ, so it works exactly as they do: the word attached to it is its مَنْصُوْب اِسْم, and what follows is its خَبَر. Here the خَبَر is a whole verbal sentence, تُفْلِحُوْنَ, whose verb keeps its nūn — لَعَلَّ causes no jazm and no naṣb on it.",
              "list": false
            },
            {
              "html": "The natural English is 'so that you may…', which carries both the purpose and the note of hope that لَعَلَّ contains. 'Perhaps you will…' is also given by the book among the renderings of a تَعْلِيْلِيَّة, and works where the sentence is a statement rather than a command.",
              "list": false
            },
            {
              "table": {
                "title": "The three types of جُمْلَةٌ تَعْلِيْلِيَّةٌ so far",
                "headers": [
                  "Type",
                  "Marker",
                  "Typical English"
                ],
                "rows": [
                  [
                    "with no additions",
                    "none — usually إِنَّ opens the second sentence",
                    "for, because"
                  ],
                  [
                    "with لَعَلَّ",
                    "لَعَلَّ + its اِسْم and خَبَر",
                    "so that… may, perhaps"
                  ],
                  [
                    "with the فَ",
                    "فَ of حَرْفُ عَطْفٍ",
                    "for, so"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "How does لَعَلَّ function grammatically when it opens a جُمْلَةٌ تَعْلِيْلِيَّةٌ, and how is it typically translated in that role؟",
            "kind": "mcq",
            "options": [
              "Like a sister of إِنَّ — the following noun/pronoun is its مَنْصُوْب اِسْم and what follows that is its خَبَر; typically translated 'so that... may' or 'perhaps'",
              "As a plain حَرْفُ عَطْفٍ with no grammatical effect",
              "As a verb meaning 'to hope'",
              "As a particle that makes the following verb مَجْزُوْمٌ"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "A جُمْلَةٌ تَعْلِيْلِيَّةٌ with لَعَلَّ",
        "rows": [
          {
            "label": "The particle",
            "arabic": "لَعَلَّ",
            "meaning": "a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — a sister of إِنَّ"
          },
          {
            "label": "Its اِسْم",
            "arabic": "مَنْصُوْبٌ",
            "meaning": "usually an attached pronoun — كُمْ، هُمْ، هُمَا"
          },
          {
            "label": "Its خَبَر",
            "arabic": "جُمْلَةٌ فِعْلِيَّةٌ عَادَةً",
            "meaning": "the verb keeps its normal ending"
          },
          {
            "label": "Example",
            "arabic": "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ",
            "meaning": "fear Allah so that you may be successful"
          },
          {
            "label": "In English",
            "arabic": "so that … may",
            "meaning": "or 'perhaps', where the first half is a statement"
          },
          {
            "label": "Order",
            "arabic": "اَلْفِعْلُ ثُمَّ السَّبَبُ",
            "meaning": "Action, then Reason"
          }
        ]
      },
      "quiz": [
        {
          "q": "What kind of word is لَعَلَّ?",
          "options": [
            "a حَرْفُ شَرْطٍ",
            "a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "a حَرْفُ عَطْفٍ",
            "an اِسْمُ شَرْطٍ"
          ],
          "correct": 1,
          "explanation": "One of the sisters of إِنَّ."
        },
        {
          "q": "In لَعَلَّكُمْ تُفْلِحُوْنَ, what is كُمْ?",
          "options": [
            "the خَبَرُ لَعَلَّ",
            "the فَاعِل of تُفْلِحُوْنَ",
            "the اِسْمُ لَعَلَّ",
            "a مَفْعُوْلٌ بِهِ"
          ],
          "correct": 2,
          "explanation": "Attached to the particle and مَنْصُوْبٌ in place."
        },
        {
          "q": "In لَعَلَّكُمْ تُفْلِحُوْنَ, what is تُفْلِحُوْنَ?",
          "options": [
            "the اِسْمُ لَعَلَّ",
            "a نَعْتٌ",
            "a حَالٌ",
            "the خَبَرُ لَعَلَّ — a verbal sentence"
          ],
          "correct": 3,
          "explanation": "And its own doer is the wāw inside it."
        },
        {
          "q": "Does لَعَلَّ affect the state of the verb in its خَبَر?",
          "options": [
            "No — تُفْلِحُوْنَ keeps its nūn",
            "Yes, it makes it مَنْصُوْبٌ",
            "Yes, it makes it مَجْزُوْمٌ",
            "Only in the plural"
          ],
          "correct": 0,
          "explanation": "Unlike لِ or حَتَّى, لَعَلَّ governs a noun, not a verb."
        },
        {
          "q": "When لَعَلَّ opens a جُمْلَةٌ تَعْلِيْلِيَّةٌ (as in لَعَلَّكُمْ تُفْلِحُوْنَ), what is the natural English for it?",
          "options": [
            "'unless'",
            "'so that… may' / 'perhaps'",
            "'even if'",
            "'when'"
          ],
          "correct": 1,
          "explanation": "It carries purpose together with a note of hope."
        },
        {
          "q": "What order do the two sentences come in?",
          "options": [
            "Reason, then Action",
            "Action, then Reason",
            "either",
            "the reason is hidden"
          ],
          "correct": 1,
          "explanation": "The same diagram as the type with no additions."
        }
      ],
      "bank": [
        {
          "title": "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 5, p. 595)",
          "sentence": "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ",
          "translation": "Fear Allah so that you may be successful.",
          "cells": [
            "اِتَّقُوا",
            "اللهَ",
            "لَعَلَّ",
            "كُمْ",
            "تُفْلِحُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "يُرِيْكُمْ آيَاتِهِ لَعَلَّكُمْ تَعْقِلُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 1",
          "sentence": "يُرِيْكُمْ آيَاتِهِ لَعَلَّكُمْ تَعْقِلُوْنَ",
          "translation": "He shows you His signs so that you may understand.",
          "cells": [
            "يُرِيْكُمْ",
            "آيَاتِهِ",
            "لَعَلَّ",
            "كُمْ",
            "تَعْقِلُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "اُعْبُدُوْا رَبَّكُمْ لَعَلَّكُمْ تَتَّقُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 2",
          "sentence": "اُعْبُدُوْا رَبَّكُمْ لَعَلَّكُمْ تَتَّقُوْنَ",
          "translation": "Worship your Lord so that you may become God-fearing.",
          "cells": [
            "اُعْبُدُوْا",
            "رَبَّكُمْ",
            "لَعَلَّ",
            "كُمْ",
            "تَتَّقُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "فَاذْكُرُوْا آلَاءَ اللهِ لَعَلَّكُمْ تُفْلِحُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 3",
          "sentence": "فَاذْكُرُوْا آلَاءَ اللهِ لَعَلَّكُمْ تُفْلِحُوْنَ",
          "translation": "So remember the favours of Allah so that you may be successful.",
          "cells": [
            "فَاذْكُرُوْا",
            "آلَاءَ اللهِ",
            "لَعَلَّ",
            "كُمْ",
            "تُفْلِحُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنَّا جَعَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 4",
          "sentence": "إِنَّا جَعَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُوْنَ",
          "translation": "Indeed We have made it an Arabic Qur'ān so that you may understand.",
          "cells": [
            "إِنَّا",
            "جَعَلْنَاهُ",
            "قُرْآنًا عَرَبِيًّا",
            "لَعَلَّ",
            "كُمْ",
            "تَعْقِلُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (نَا)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "خَبَرُ إِنَّ — فِعْلٌ وَفَاعِلٌ (نَا) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ ثَانٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَرَزَقَكُمْ مِنَ الطَّيِّبَاتِ لَعَلَّكُمْ تَشْكُرُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 5",
          "sentence": "وَرَزَقَكُمْ مِنَ الطَّيِّبَاتِ لَعَلَّكُمْ تَشْكُرُوْنَ",
          "translation": "And He has provided you with good things so that you may be grateful.",
          "cells": [
            "وَرَزَقَكُمْ",
            "مِنَ الطَّيِّبَاتِ",
            "لَعَلَّ",
            "كُمْ",
            "تَشْكُرُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) وَمَفْعُوْلٌ بِهِ (كُمْ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "وَلَقَدْ آتَيْنَا مُوْسَى الْكِتَابَ لَعَلَّهُمْ يَهْتَدُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 6",
          "sentence": "وَلَقَدْ آتَيْنَا مُوْسَى الْكِتَابَ لَعَلَّهُمْ يَهْتَدُوْنَ",
          "translation": "And We certainly gave Mūsā the Book so that they may be guided.",
          "cells": [
            "وَلَقَدْ",
            "آتَيْنَا",
            "مُوْسَى",
            "الْكِتَابَ",
            "لَعَلَّ",
            "هُمْ يَهْتَدُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "حَرْفَا تَوْكِيْدٍ"
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
                  "role": "مَفْعُوْلٌ بِهِ ثَانٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "اِسْمُ لَعَلَّ مَعَ خَبَرِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "أُطِيْعُ وَالِدَيَّ لَعَلَّهُمَا يَرْضَيَانِ عَنِّيْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 7",
          "sentence": "أُطِيْعُ وَالِدَيَّ لَعَلَّهُمَا يَرْضَيَانِ عَنِّيْ",
          "translation": "I obey my parents so that they may be pleased with me.",
          "cells": [
            "أُطِيْعُ",
            "وَالِدَيَّ",
            "لَعَلَّ",
            "هُمَا",
            "يَرْضَيَانِ عَنِّيْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "إِنَّ اللهَ جَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ لَعَلَّكُمْ تَشْكُرُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 8",
          "sentence": "إِنَّ اللهَ جَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ لَعَلَّكُمْ تَشْكُرُوْنَ",
          "translation": "Indeed Allah has given you hearing and sight so that you may be grateful.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "جَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ",
            "لَعَلَّ",
            "كُمْ",
            "تَشْكُرُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ ثَانٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "يَاأَيُّهَا الَّذِيْنَ آمَنُوا ارْكَعُوْا وَاسْجُدُوْا لَعَلَّكُمْ تُفْلِحُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 5), item 9",
          "sentence": "يَاأَيُّهَا الَّذِيْنَ آمَنُوا ارْكَعُوْا وَاسْجُدُوْا لَعَلَّكُمْ تُفْلِحُوْنَ",
          "translation": "O you who believe, bow and prostrate so that you may be successful.",
          "cells": [
            "يَاأَيُّهَا الَّذِيْنَ آمَنُوا",
            "ارْكَعُوْا وَاسْجُدُوْا",
            "لَعَلَّ",
            "كُمْ",
            "تُفْلِحُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نِدَاءٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
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
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ",
            "نَعْتٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 1",
          "kind": "mcq",
          "prompt": "In ﴿يُرِيْكُمْ آيَاتِهِ لَعَلَّكُمْ تَعْقِلُوْنَ﴾, how many objects does يُرِيْ take?",
          "options": [
            "none",
            "one",
            "two — كُمْ and آيَاتِهِ",
            "three"
          ],
          "correct": 2,
          "explanation": "أَرَى is a doubly transitive verb: 'He shows you His signs'."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 4",
          "kind": "mcq",
          "prompt": "In ﴿إِنَّا جَعَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُوْنَ﴾, what is قُرْآنًا?",
          "options": [
            "the second مَفْعُوْلٌ بِهِ of جَعَلْنَا",
            "the اِسْمُ إِنَّ",
            "a حَالٌ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "جَعَلَ takes two objects; the هُ is the first."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 5",
          "kind": "mcq",
          "prompt": "In ﴿وَرَزَقَكُمْ مِنَ الطَّيِّبَاتِ لَعَلَّكُمْ تَشْكُرُوْنَ﴾, what kind of sentence gives the action?",
          "options": [
            "a command",
            "a prohibition",
            "a statement — a تَعْلِيْلِيَّة need not follow a command",
            "a question"
          ],
          "correct": 2,
          "explanation": "رَزَقَ is a plain past verb."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 6",
          "kind": "mcq",
          "prompt": "In ﴿وَلَقَدْ آتَيْنَا مُوْسَى الْكِتَابَ لَعَلَّهُمْ يَهْتَدُوْنَ﴾, who is the اِسْمُ لَعَلَّ?",
          "options": [
            "مُوْسَى",
            "the هُمْ — the people, not Mūsā",
            "the نَا of آتَيْنَا",
            "الْكِتَابَ"
          ],
          "correct": 1,
          "explanation": "The purpose is the guidance of the people the Book was given for."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 7",
          "kind": "mcq",
          "prompt": "In أُطِيْعُ وَالِدَيَّ لَعَلَّهُمَا يَرْضَيَانِ عَنِّيْ, why are the verbs dual?",
          "options": [
            "Because وَالِدَيَّ is dual, and هُمَا refers to it",
            "Because لَعَلَّ demands the dual",
            "Because أُطِيْعُ is first person",
            "It is a printing error"
          ],
          "correct": 0,
          "explanation": "'My two parents' — so the اِسْمُ لَعَلَّ and its verbs are all dual."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 8",
          "kind": "mcq",
          "prompt": "In إِنَّ اللهَ جَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ لَعَلَّكُمْ تَشْكُرُوْنَ, how many حُرُوْف مُشَبَّهَة بِالْفِعْل appear?",
          "options": [
            "one",
            "two — إِنَّ and لَعَلَّ",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "Each governs its own sentence."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 9",
          "kind": "mcq",
          "prompt": "In the long verse ﴿…ارْكَعُوْا وَاسْجُدُوْا وَاعْبُدُوْا رَبَّكُمْ وَافْعَلُوا الْخَيْرَ لَعَلَّكُمْ تُفْلِحُوْنَ﴾, what does the لَعَلَّ clause explain?",
          "options": [
            "only the last command",
            "only the first command",
            "all four commands together",
            "the نِدَاء at the start"
          ],
          "correct": 2,
          "explanation": "The reason attaches to the whole series of imperatives."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 5), item 3",
          "kind": "mcq",
          "prompt": "In ﴿فَاذْكُرُوْا آلَاءَ اللهِ لَعَلَّكُمْ تُفْلِحُوْنَ﴾, why is آلَاءَ مَنْصُوْبَة without tanwīn?",
          "options": [
            "Because it is a مُضَافٌ",
            "Because it is مَمْنُوْعٌ مِنَ الصَّرْفِ",
            "Because it follows a فَ",
            "Because it is plural"
          ],
          "correct": 0,
          "explanation": "اَللهِ is its مُضَافٌ إِلَيْهِ, so the tanwīn drops."
        },
        {
          "title": "favour, bounty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"favour, bounty\"?",
          "options": [
            "إِلًى",
            "طَيِّبَةٌ",
            "أَرَى يُرِيْ",
            "أَفْلَحَ يُفْلِحُ"
          ],
          "correct": 0
        },
        {
          "title": "favour, bounty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِلًى mean?",
          "options": [
            "favour, bounty",
            "good things",
            "to show",
            "to succeed, prosper"
          ],
          "correct": 0
        },
        {
          "title": "favour, bounty (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of إِلًى?",
          "options": [
            "آلَاءٌ",
            "وَالِدُوْنَ",
            "طَيِّبَاتٌ",
            "أَبْصَارٌ"
          ],
          "correct": 0
        },
        {
          "title": "hearing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"hearing\"?",
          "options": [
            "سَمْعٌ",
            "وَالِدٌ",
            "عَقَلَ يَعْقِلُ",
            "رَضِيَ يَرْضَى"
          ],
          "correct": 0
        },
        {
          "title": "hearing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سَمْعٌ mean?",
          "options": [
            "hearing",
            "parent",
            "to understand, reason",
            "to be pleased"
          ],
          "correct": 0
        },
        {
          "title": "sight",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sight\"?",
          "options": [
            "بَصَرٌ",
            "أَرَى يُرِيْ",
            "أَفْلَحَ يُفْلِحُ",
            "رَكَعَ يَرْكَعُ"
          ],
          "correct": 0
        },
        {
          "title": "sight",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَصَرٌ mean?",
          "options": [
            "sight",
            "to show",
            "to succeed, prosper",
            "to bow"
          ],
          "correct": 0
        },
        {
          "title": "sight (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of بَصَرٌ?",
          "options": [
            "أَبْصَارٌ",
            "طَيِّبَاتٌ",
            "آلَاءٌ",
            "وَالِدُوْنَ"
          ],
          "correct": 0
        },
        {
          "title": "good things",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"good things\"?",
          "options": [
            "طَيِّبَةٌ",
            "عَقَلَ يَعْقِلُ",
            "رَضِيَ يَرْضَى",
            "آتَى يُؤْتِيْ"
          ],
          "correct": 0
        },
        {
          "title": "good things",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَيِّبَةٌ mean?",
          "options": [
            "good things",
            "to understand, reason",
            "to be pleased",
            "to give"
          ],
          "correct": 0
        },
        {
          "title": "good things (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طَيِّبَةٌ?",
          "options": [
            "طَيِّبَاتٌ",
            "وَالِدُوْنَ",
            "أَبْصَارٌ",
            "آلَاءٌ"
          ],
          "correct": 0
        },
        {
          "title": "parent",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"parent\"?",
          "options": [
            "وَالِدٌ",
            "أَفْلَحَ يُفْلِحُ",
            "رَكَعَ يَرْكَعُ",
            "إِلًى"
          ],
          "correct": 0
        },
        {
          "title": "parent",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَالِدٌ mean?",
          "options": [
            "parent",
            "to succeed, prosper",
            "to bow",
            "favour, bounty"
          ],
          "correct": 0
        },
        {
          "title": "parent (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَالِدٌ?",
          "options": [
            "وَالِدُوْنَ",
            "آلَاءٌ",
            "طَيِّبَاتٌ",
            "أَبْصَارٌ"
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
            "رَضِيَ يَرْضَى",
            "آتَى يُؤْتِيْ",
            "سَمْعٌ"
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
            "to be pleased",
            "to give",
            "hearing"
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
            "رِضًا",
            "إِيْتَاءً",
            "إِفْلَاحًا"
          ],
          "correct": 0
        },
        {
          "title": "to understand, reason",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to understand, reason\"?",
          "options": [
            "عَقَلَ يَعْقِلُ",
            "رَكَعَ يَرْكَعُ",
            "إِلًى",
            "بَصَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to understand, reason",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَقَلَ يَعْقِلُ mean?",
          "options": [
            "to understand, reason",
            "to bow",
            "favour, bounty",
            "sight"
          ],
          "correct": 0
        },
        {
          "title": "to understand, reason (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَقَلَ يَعْقِلُ?",
          "options": [
            "عَقْلًا",
            "رُكُوْعًا",
            "إِرَاءَةً",
            "رِضًا"
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
            "آتَى يُؤْتِيْ",
            "سَمْعٌ",
            "طَيِّبَةٌ"
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
            "to give",
            "hearing",
            "good things"
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
            "إِيْتَاءً",
            "عَقْلًا",
            "رُكُوْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to be pleased",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be pleased\"?",
          "options": [
            "رَضِيَ يَرْضَى",
            "إِلًى",
            "بَصَرٌ",
            "وَالِدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be pleased",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رَضِيَ يَرْضَى mean?",
          "options": [
            "to be pleased",
            "favour, bounty",
            "sight",
            "parent"
          ],
          "correct": 0
        },
        {
          "title": "to be pleased (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of رَضِيَ يَرْضَى?",
          "options": [
            "رِضًا",
            "إِرَاءَةً",
            "إِفْلَاحًا",
            "إِيْتَاءً"
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
            "سَمْعٌ",
            "طَيِّبَةٌ",
            "أَرَى يُرِيْ"
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
            "hearing",
            "good things",
            "to show"
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
            "عَقْلًا",
            "رِضًا",
            "إِرَاءَةً"
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
            "بَصَرٌ",
            "وَالِدٌ",
            "عَقَلَ يَعْقِلُ"
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
            "sight",
            "parent",
            "to understand, reason"
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
            "إِفْلَاحًا",
            "رُكُوْعًا",
            "عَقْلًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l7",
      "title": "الجملة التعليلية بالفاء",
      "subtitle": "Part 5: جُمْلَةٌ تَعْلِيْلِيَّةٌ",
      "concepts": [
        {
          "heading": "The construction",
          "lines": [
            {
              "html": "A جُمْلَةٌ تَعْلِيْلِيَّةٌ can occur after the حَرْفُ عَطْفٍ of فَ, which is known as فَاءٌ سَبَبِيَّةٌ.",
              "list": false
            },
            {
              "html": "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ — Worship Allah because He created you.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this text, the second sentence — 'He created you' — shows the reason for the command in the first, 'Worship Allah'. The order is Action, then Reason.",
              "list": false
            },
            {
              "tarkeebDiagram": {
                "sentence": "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ",
                "translation": "Worship Allah because He created you.",
                "cells": [
                  "أُعْبُدُوا",
                  "اللهَ",
                  "فَ",
                  "إِنَّهُ",
                  "خَلَقَكَ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "أَمْرٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فَاءٌ سَبَبِيَّةٌ"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
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
                        "start": 3,
                        "end": 3,
                        "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُ)"
                      },
                      {
                        "start": 4,
                        "end": 4,
                        "role": "خَبَرُ إِنَّ"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "Do not confuse this with the فَاءُ السَّبَبِ of Part 4. That one follows a نَهْي, carries a hidden أَنْ and puts the following verb into the مَنْصُوْب state — لَا تَكْسَلْ فَتَنْدَمَ. This فَ is a plain حَرْفُ عَطْفٍ joining two complete sentences, and it changes nothing: فَإِنَّهُ خَلَقَكَ is a full إِنَّ sentence in its own right.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How is the فَاءٌ سَبَبِيَّةٌ of a جُمْلَةٌ تَعْلِيْلِيَّةٌ different from the فَاءُ السَّبَبِ of Part 4 (جَوَابُ النَّهْيِ)؟",
            "kind": "mcq",
            "options": [
              "This فَ is a plain حَرْفُ عَطْفٍ joining two complete, unchanged sentences; the Part 4 فَاءُ السَّبَبِ carries a hidden أَنْ and forces the following verb into the مَنْصُوْبٌ state",
              "They are exactly the same particle doing exactly the same job",
              "This فَ always negates the second sentence",
              "This فَ can only appear at the very start of a passage"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The reason may come first",
          "lines": [
            {
              "html": "The reason can also come before the action. In that case the فَ sits at the head of the second sentence — the one giving the action — and is best rendered 'so'.",
              "list": false
            },
            {
              "html": "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ — Allah is my Lord and your Lord, so worship Him.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In this text, the first sentence — 'Allah is my Lord and your Lord' — is the reason for the command in the second, 'worship Him'. The order is Reason, then Action.",
              "list": false
            },
            {
              "table": {
                "title": "The two orders with the فَ",
                "headers": [
                  "Order",
                  "English of the فَ",
                  "Example"
                ],
                "rows": [
                  [
                    "Action – Reason",
                    "because",
                    "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ"
                  ],
                  [
                    "Reason – Action",
                    "so",
                    "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ"
                  ]
                ]
              }
            },
            {
              "html": "A quick way to tell them apart on the page: فَإِنَّ almost always opens a reason, while فَ followed straight by an imperative — فَاعْبُدُوْهُ, فَاغْفِرْ, فَادْعُوْهُ — almost always opens an action whose reason has just been given. Exercise 3 alternates the two deliberately.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "When the reason comes BEFORE the action, as in اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ, how is the فَ best translated؟",
            "kind": "mcq",
            "options": [
              "'so' (Reason – Action order), as opposed to 'because' when the order is Action – Reason",
              "'but', regardless of order",
              "'when', regardless of order",
              "It is never translated in this order"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "A جُمْلَةٌ تَعْلِيْلِيَّةٌ with the فَ",
        "rows": [
          {
            "label": "The particle",
            "arabic": "فَاءٌ سَبَبِيَّةٌ",
            "meaning": "a حَرْفُ عَطْفٍ joining two whole sentences"
          },
          {
            "label": "Order 1",
            "arabic": "فِعْلٌ ثُمَّ سَبَبٌ",
            "meaning": "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ — 'because'"
          },
          {
            "label": "Order 2",
            "arabic": "سَبَبٌ ثُمَّ فِعْلٌ",
            "meaning": "اللهُ رَبِّيْ … فَاعْبُدُوْهُ — 'so'"
          },
          {
            "label": "Not to confuse",
            "arabic": "فَاءُ السَّبَبِ",
            "meaning": "that one follows a نَهْي and causes naṣb"
          },
          {
            "label": "This one",
            "arabic": "لَا تُغَيِّرُ شَيْئًا",
            "meaning": "it changes nothing in the sentence after it"
          },
          {
            "label": "On the page",
            "arabic": "فَإِنَّ ← سَبَبٌ ‖ فَ + أَمْرٌ ← فِعْلٌ",
            "meaning": "a quick way to tell which order you have"
          }
        ]
      },
      "quiz": [
        {
          "q": "In أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ (a جُمْلَةٌ تَعْلِيْلِيَّةٌ joining two whole sentences), what is this فَ called?",
          "options": [
            "فَاءٌ رَابِطَةٌ",
            "فَاءٌ زَائِدَةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "فَاءُ السَّبَبِ"
          ],
          "correct": 2,
          "explanation": "A حَرْفُ عَطْفٍ joining two complete sentences."
        },
        {
          "q": "How does it differ from the فَاءُ السَّبَبِ of Part 4?",
          "options": [
            "It changes nothing; the Part 4 one carries a hidden أَنْ and causes naṣb",
            "It is translated; the other is not",
            "It only follows a نَهْي",
            "There is no difference"
          ],
          "correct": 0,
          "explanation": "فَإِنَّهُ خَلَقَكَ is a full إِنَّ sentence, untouched by the فَ."
        },
        {
          "q": "In أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ, what order are the two sentences in?",
          "options": [
            "Reason – Action",
            "Action – Reason",
            "both at once",
            "neither"
          ],
          "correct": 1,
          "explanation": "The command comes first, its reason second."
        },
        {
          "q": "In ﴿اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ﴾, which sentence is the reason?",
          "options": [
            "فَاعْبُدُوْهُ",
            "neither; there is no reason",
            "both",
            "اللهُ رَبِّيْ وَرَبُّكُمْ"
          ],
          "correct": 3,
          "explanation": "Here the reason comes first and the action second."
        },
        {
          "q": "How is the فَ best rendered when the reason comes first?",
          "options": [
            "'because'",
            "'so'",
            "'lest'",
            "'unless'"
          ],
          "correct": 1,
          "explanation": "'…so worship Him.'"
        },
        {
          "q": "What usually signals that a reason follows?",
          "options": [
            "فَ followed by an imperative",
            "a وَاوٌ حَالِيَّةٌ",
            "لَعَلَّ at the end",
            "فَإِنَّ at the head of the second sentence"
          ],
          "correct": 3,
          "explanation": "فَ plus an imperative usually signals the action instead."
        }
      ],
      "bank": [
        {
          "title": "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 5, p. 596)",
          "sentence": "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ",
          "translation": "Worship Allah because He created you.",
          "cells": [
            "أُعْبُدُوا",
            "اللهَ",
            "فَ",
            "إِنَّهُ",
            "خَلَقَكَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 5, p. 596)",
          "sentence": "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ",
          "translation": "Allah is my Lord and your Lord, so worship Him.",
          "cells": [
            "اللهُ",
            "رَبِّيْ وَرَبُّكُمْ",
            "فَ",
            "اعْبُدُوْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "أَمْرٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اَلْخَمْرُ حَرَامٌ فَلَا تَشْرَبُوْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 1",
          "sentence": "اَلْخَمْرُ حَرَامٌ فَلَا تَشْرَبُوْهَا",
          "translation": "Wine is forbidden, so do not drink it.",
          "cells": [
            "اَلْخَمْرُ",
            "حَرَامٌ",
            "فَ",
            "لَا تَشْرَبُوْهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "نَهْيٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (هَا)"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ النَّهْيِ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَشْرَبُوا الْخَمْرَ فَإِنَّ اللهَ حَرَّمَهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 2",
          "sentence": "لَا تَشْرَبُوا الْخَمْرَ فَإِنَّ اللهَ حَرَّمَهَا",
          "translation": "Do not drink wine, because Allah has forbidden it.",
          "cells": [
            "لَا تَشْرَبُوا",
            "الْخَمْرَ",
            "فَ",
            "إِنَّ",
            "اللهَ",
            "حَرَّمَهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ إِنَّ"
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
            "جَوَابُ النَّهْيِ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 3",
          "sentence": "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا",
          "translation": "Our Lord, we have believed, so forgive us and have mercy on us.",
          "cells": [
            "رَبَّنَا",
            "آمَنَّا",
            "فَ",
            "اغْفِرْ لَنَا وَارْحَمْنَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نِدَاءٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "أَمْرٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُنَادًى مُضَافٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَا)"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ النِّدَاءِ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اُدْعُوا اللهَ فَإِنَّهُ يَسْتَجِيْبُ الدَّعَوَاتِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 4",
          "sentence": "اُدْعُوا اللهَ فَإِنَّهُ يَسْتَجِيْبُ الدَّعَوَاتِ",
          "translation": "Call upon Allah, because He answers supplications.",
          "cells": [
            "اُدْعُوا",
            "اللهَ",
            "فَ",
            "إِنَّهُ",
            "يَسْتَجِيْبُ الدَّعَوَاتِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "إِنَّ اللهَ يَسْتَجِيْبُ الدَّعَوَاتِ فَادْعُوْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 5",
          "sentence": "إِنَّ اللهَ يَسْتَجِيْبُ الدَّعَوَاتِ فَادْعُوْهُ",
          "translation": "Indeed Allah answers supplications, so call upon Him.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "يَسْتَجِيْبُ الدَّعَوَاتِ",
            "فَ",
            "ادْعُوْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "أَمْرٌ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "وَاصْبِرُوْا فَإِنَّ اللهَ مَعَ الصَّابِرِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 6",
          "sentence": "وَاصْبِرُوْا فَإِنَّ اللهَ مَعَ الصَّابِرِيْنَ",
          "translation": "And be patient, because Allah is with the patient.",
          "cells": [
            "وَاصْبِرُوْا",
            "فَ",
            "إِنَّ",
            "اللهَ",
            "مَعَ الصَّابِرِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَسْجُدُوْا لِلْأَصْنَامِ فَإِنَّهَا لَا تَضُرُّ وَلَا تَنْفَعُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 11",
          "sentence": "لَا تَسْجُدُوْا لِلْأَصْنَامِ فَإِنَّهَا لَا تَضُرُّ وَلَا تَنْفَعُ",
          "translation": "Do not prostrate to the idols, because they neither harm nor benefit.",
          "cells": [
            "لَا تَسْجُدُوْا",
            "لِلْأَصْنَامِ",
            "فَ",
            "إِنَّهَا",
            "لَا تَضُرُّ وَلَا تَنْفَعُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هَا)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ النَّهْيِ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "يَا تَاجِرُ لَا تَخْدَعِ النَّاسَ فَإِنَّ اللهَ يُحَاسِبُكَ يَوْمَ الْقِيَامَةِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 3 (Unit 6, Part 5), item 16",
          "sentence": "يَا تَاجِرُ لَا تَخْدَعِ النَّاسَ فَإِنَّ اللهَ يُحَاسِبُكَ يَوْمَ الْقِيَامَةِ",
          "translation": "O merchant, do not deceive people, because Allah will call you to account on the Day of Judgement.",
          "cells": [
            "يَا تَاجِرُ",
            "لَا تَخْدَعِ النَّاسَ",
            "فَ",
            "إِنَّ",
            "اللهَ",
            "يُحَاسِبُكَ يَوْمَ الْقِيَامَةِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "نِدَاءٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
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
                  "role": "اِسْمُ إِنَّ"
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
            "جَوَابُ النِّدَاءِ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), items 1 and 2",
          "kind": "mcq",
          "prompt": "اَلْخَمْرُ حَرَامٌ فَلَا تَشْرَبُوْهَا and لَا تَشْرَبُوا الْخَمْرَ فَإِنَّ اللهَ حَرَّمَهَا say the same thing. What differs?",
          "options": [
            "the order — Reason–Action in the first, Action–Reason in the second",
            "the meaning of the فَ",
            "the state of the verbs",
            "nothing"
          ],
          "correct": 0,
          "explanation": "The exercise pairs them deliberately."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), item 3",
          "kind": "mcq",
          "prompt": "In ﴿رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا﴾, what is رَبَّنَا?",
          "options": [
            "the مُبْتَدَأ",
            "a مُنَادًى with its حَرْفُ النِّدَاءِ dropped",
            "the فَاعِل of آمَنَّا",
            "a مَفْعُوْلٌ بِهِ"
          ],
          "correct": 1,
          "explanation": "Part 1 of this unit — يَا رَبَّنَا with the particle understood."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), items 4 and 5",
          "kind": "mcq",
          "prompt": "In items 4 and 5 the same two sentences appear in both orders. Which of item 5 carries the فَ?",
          "options": [
            "the reason, إِنَّ اللهَ يَسْتَجِيْبُ",
            "the action, فَادْعُوْهُ",
            "both",
            "neither"
          ],
          "correct": 1,
          "explanation": "When the reason comes first, the فَ heads the action."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), item 9",
          "kind": "mcq",
          "prompt": "In تَأَدَّبُوْا فَإِنَّ الْعِلْمَ لَا يُحْصَلُ إِلَّا بِالْأَدَبِ, what does لَا … إِلَّا express?",
          "options": [
            "a condition",
            "a restriction — knowledge is attained only through good manners",
            "a prohibition",
            "a wish"
          ],
          "correct": 1,
          "explanation": "Negation plus exception yields restriction."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), item 11",
          "kind": "mcq",
          "prompt": "In لَا تَسْجُدُوْا لِلْأَصْنَامِ فَإِنَّهَا لَا تَضُرُّ وَلَا تَنْفَعُ, what is the خَبَرُ إِنَّ?",
          "options": [
            "اَلْأَصْنَام",
            "the two negated verbs together",
            "the هَا",
            "there is none"
          ],
          "correct": 1,
          "explanation": "The هَا is the اِسْم; the verbal sentences that follow are its خَبَر."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), item 15",
          "kind": "mcq",
          "prompt": "In ﴿إِنَّ اللهَ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ هٰذَا صِرَاطٌ مُسْتَقِيْمٌ﴾, how many sentences follow the action?",
          "options": [
            "none",
            "one — هٰذَا صِرَاطٌ مُسْتَقِيْمٌ",
            "two",
            "three"
          ],
          "correct": 1,
          "explanation": "A closing statement, itself a further reason for the command."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), item 16",
          "kind": "mcq",
          "prompt": "In يَا تَاجِرُ، لَا تَخْدَعِ النَّاسَ فَإِنَّ اللهَ يُحَاسِبُكَ يَوْمَ الْقِيَامَةِ, how many of Unit 6's constructions appear?",
          "options": [
            "one",
            "two — a نِدَاء and a تَعْلِيْلِيَّة with فَ",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "Part 1 and Part 5 in a single sentence."
        },
        {
          "title": "Book Exercise 3 (Unit 6, Part 5), item 17",
          "kind": "mcq",
          "prompt": "In لَا أَجْلِسُ فِي الدَّرْسِ إِلَّا مُتَوَضِّئًا فَإِنَّهَا مِنْ آدَابِ الْعِلْمِ, what is مُتَوَضِّئًا?",
          "options": [
            "a مَفْعُوْلٌ بِهِ",
            "a حَالٌ",
            "a تَمْيِيْزٌ",
            "a خَبَرٌ"
          ],
          "correct": 1,
          "explanation": "'I do not sit except in a state of wuḍū'' — the state of the doer."
        },
        {
          "title": "wine",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wine\"?",
          "options": [
            "خَمْرٌ",
            "مُصِيْبَةٌ",
            "صِدْقٌ",
            "حَرَّمَ يُحَرِّمُ"
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
            "calamity",
            "truthfulness",
            "to forbid"
          ],
          "correct": 0
        },
        {
          "title": "supplication",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"supplication\"?",
          "options": [
            "دَعْوَةٌ",
            "تَاجِرٌ",
            "أَدَبٌ",
            "اِسْتَجَابَ يَسْتَجِيْبُ"
          ],
          "correct": 0
        },
        {
          "title": "supplication",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَعْوَةٌ mean?",
          "options": [
            "supplication",
            "merchant",
            "manners",
            "to answer, respond"
          ],
          "correct": 0
        },
        {
          "title": "supplication (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of دَعْوَةٌ?",
          "options": [
            "دَعَوَاتٌ",
            "آدَابٌ",
            "مَصَائِبُ",
            "صَدَقَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "charity",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"charity\"?",
          "options": [
            "صَدَقَةٌ",
            "صِدْقٌ",
            "حَرَّمَ يُحَرِّمُ",
            "دَفَعَ يَدْفَعُ"
          ],
          "correct": 0
        },
        {
          "title": "charity",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صَدَقَةٌ mean?",
          "options": [
            "charity",
            "truthfulness",
            "to forbid",
            "to ward off, push"
          ],
          "correct": 0
        },
        {
          "title": "charity (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صَدَقَةٌ?",
          "options": [
            "صَدَقَاتٌ",
            "دَعَوَاتٌ",
            "تُجَّارٌ",
            "مَصَائِبُ"
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
            "أَدَبٌ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "ضَرَّ يَضُرُّ"
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
            "manners",
            "to answer, respond",
            "to harm"
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
            "صَدَقَاتٌ",
            "آدَابٌ",
            "دَعَوَاتٌ"
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
            "حَرَّمَ يُحَرِّمُ",
            "دَفَعَ يَدْفَعُ",
            "تَأَدَّبَ يَتَأَدَّبُ"
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
            "to forbid",
            "to ward off, push",
            "to be well-mannered"
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
            "مَصَائِبُ",
            "دَعَوَاتٌ",
            "صَدَقَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "truthfulness",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"truthfulness\"?",
          "options": [
            "صِدْقٌ",
            "اِسْتَجَابَ يَسْتَجِيْبُ",
            "ضَرَّ يَضُرُّ",
            "خَمْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "truthfulness",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صِدْقٌ mean?",
          "options": [
            "truthfulness",
            "to answer, respond",
            "to harm",
            "wine"
          ],
          "correct": 0
        },
        {
          "title": "manners",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"manners\"?",
          "options": [
            "أَدَبٌ",
            "دَفَعَ يَدْفَعُ",
            "تَأَدَّبَ يَتَأَدَّبُ",
            "دَعْوَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "manners",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَدَبٌ mean?",
          "options": [
            "manners",
            "to ward off, push",
            "to be well-mannered",
            "supplication"
          ],
          "correct": 0
        },
        {
          "title": "manners (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of أَدَبٌ?",
          "options": [
            "آدَابٌ",
            "دَعَوَاتٌ",
            "مَصَائِبُ",
            "صَدَقَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to forbid",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to forbid\"?",
          "options": [
            "حَرَّمَ يُحَرِّمُ",
            "ضَرَّ يَضُرُّ",
            "خَمْرٌ",
            "صَدَقَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to forbid",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَرَّمَ يُحَرِّمُ mean?",
          "options": [
            "to forbid",
            "to harm",
            "wine",
            "charity"
          ],
          "correct": 0
        },
        {
          "title": "to forbid (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَرَّمَ يُحَرِّمُ?",
          "options": [
            "تَحْرِيْمًا",
            "دَفْعًا",
            "تَأَدُّبًا",
            "اِسْتِجَابَةً"
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
            "تَأَدَّبَ يَتَأَدَّبُ",
            "دَعْوَةٌ",
            "مُصِيْبَةٌ"
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
            "to be well-mannered",
            "supplication",
            "calamity"
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
            "ضَرَرًا",
            "تَحْرِيْمًا",
            "دَفْعًا"
          ],
          "correct": 0
        },
        {
          "title": "to ward off, push",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to ward off, push\"?",
          "options": [
            "دَفَعَ يَدْفَعُ",
            "خَمْرٌ",
            "صَدَقَةٌ",
            "تَاجِرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to ward off, push",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does دَفَعَ يَدْفَعُ mean?",
          "options": [
            "to ward off, push",
            "wine",
            "charity",
            "merchant"
          ],
          "correct": 0
        },
        {
          "title": "to ward off, push (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of دَفَعَ يَدْفَعُ?",
          "options": [
            "دَفْعًا",
            "تَأَدُّبًا",
            "اِسْتِجَابَةً",
            "تَحْرِيْمًا"
          ],
          "correct": 0
        },
        {
          "title": "to harm",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to harm\"?",
          "options": [
            "ضَرَّ يَضُرُّ",
            "دَعْوَةٌ",
            "مُصِيْبَةٌ",
            "صِدْقٌ"
          ],
          "correct": 0
        },
        {
          "title": "to harm",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَرَّ يَضُرُّ mean?",
          "options": [
            "to harm",
            "supplication",
            "calamity",
            "truthfulness"
          ],
          "correct": 0
        },
        {
          "title": "to harm (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ضَرَّ يَضُرُّ?",
          "options": [
            "ضَرَرًا",
            "تَحْرِيْمًا",
            "دَفْعًا",
            "اِسْتِجَابَةً"
          ],
          "correct": 0
        },
        {
          "title": "to be well-mannered",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be well-mannered\"?",
          "options": [
            "تَأَدَّبَ يَتَأَدَّبُ",
            "صَدَقَةٌ",
            "تَاجِرٌ",
            "أَدَبٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be well-mannered",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَأَدَّبَ يَتَأَدَّبُ mean?",
          "options": [
            "to be well-mannered",
            "charity",
            "merchant",
            "manners"
          ],
          "correct": 0
        },
        {
          "title": "to be well-mannered (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَأَدَّبَ يَتَأَدَّبُ?",
          "options": [
            "تَأَدُّبًا",
            "اِسْتِجَابَةً",
            "ضَرَرًا",
            "تَحْرِيْمًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l8",
      "title": "خلاصة الجملة التعليلية",
      "subtitle": "Part 5: جُمْلَةٌ تَعْلِيْلِيَّةٌ",
      "concepts": [
        {
          "heading": "The book's summary table",
          "lines": [
            {
              "html": "Part 5 has produced three types of جُمْلَةٌ تَعْلِيْلِيَّةٌ and four rows in the summary, because the type with the فَ can run in either order.",
              "list": false
            },
            {
              "table": {
                "title": "Joining Sentences Together — جُمْلَةٌ تَعْلِيْلِيَّةٌ",
                "headers": [
                  "Type",
                  "Order",
                  "Example"
                ],
                "rows": [
                  [
                    "Without Additions",
                    "Action – Reason",
                    "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ"
                  ],
                  [
                    "With لَعَلَّ",
                    "Action – Reason",
                    "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ"
                  ],
                  [
                    "With فَ",
                    "Action – Reason",
                    "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ"
                  ],
                  [
                    "With فَ",
                    "Reason – Action",
                    "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ"
                  ]
                ]
              }
            },
            {
              "html": "Only the فَ can reverse the order, and the reason is straightforward: without a particle, or with لَعَلَّ, there is nothing to mark which sentence depends on which — so the reason must follow. The فَ supplies that mark, and can therefore stand at the head of either half.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Why can only the فَ-type جُمْلَةٌ تَعْلِيْلِيَّةٌ reverse its order (Reason–Action as well as Action–Reason), unlike the no-addition or لَعَلَّ types؟",
            "kind": "mcq",
            "options": [
              "Without a particle, or with لَعَلَّ, there is nothing to mark which sentence depends on which, so the reason must always follow; the فَ itself supplies that mark and so can stand at the head of either half",
              "Because لَعَلَّ can never open a سبب sentence at all",
              "Because the no-addition type is always ungrammatical in Reason-Action order",
              "There is no restriction; all three types can reverse freely"
            ],
            "correct": 0
          }
        },
        {
          "heading": "Joining two sentences with the فَ",
          "lines": [
            {
              "html": "Exercise 4 gives two separate sentences and asks you to join them using فَ. Only one decision has to be made each time: which of the two is the action and which is the reason. The فَ then goes at the head of the second sentence, whichever that turns out to be.",
              "list": false
            },
            {
              "html": "اِعْدِلُوْا / إِنَّ اللهَ يُحِبُّ الْعَدْلَ ← اِعْدِلُوْا فَإِنَّ اللهَ يُحِبُّ الْعَدْلَ — Be just, because Allah loves justice.",
              "list": true,
              "bullet": true
            },
            {
              "html": "In every item of the exercise the first sentence is the command and the second gives the reason, so the فَ always attaches to the إِنَّ clause. Note that nothing else changes: no verb shifts its state, and no word is dropped.",
              "list": false
            },
            {
              "html": "Compare this with Exercise 4 of Part 4, which asked the same kind of question about a جَوَابُ الْأَمْرِ. There the joining changed the verb — jazm or naṣb, with or without a فَ. Here it changes nothing at all. That contrast is worth holding on to: a جَوَاب depends grammatically on what precedes it; a جُمْلَةٌ تَعْلِيْلِيَّةٌ depends on it only in meaning.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "Unlike joining a جَوَابُ الْأَمْرِ (Part 4), what happens to the verb's state when joining two sentences into a جُمْلَةٌ تَعْلِيْلِيَّةٌ with فَ؟",
            "kind": "mcq",
            "options": [
              "Nothing changes at all — no verb shifts to jazm or naṣb, since a جُمْلَةٌ تَعْلِيْلِيَّةٌ depends on the first sentence only in meaning, not grammatically",
              "The verb always becomes مَجْزُوْمٌ, exactly like a جَوَابُ الْأَمْرِ",
              "The verb always becomes مَنْصُوْبٌ, exactly like a جَوَابُ النَّهْيِ with فَ",
              "The verb is deleted entirely"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "Part 5 in four rows",
        "rows": [
          {
            "label": "Row 1",
            "arabic": "بِلَا زِيَادَةٍ",
            "meaning": "Action – Reason; إِنَّ opens the second half"
          },
          {
            "label": "Row 2",
            "arabic": "بِلَعَلَّ",
            "meaning": "Action – Reason; 'so that… may'"
          },
          {
            "label": "Row 3",
            "arabic": "بِالْفَاءِ",
            "meaning": "Action – Reason; 'because'"
          },
          {
            "label": "Row 4",
            "arabic": "بِالْفَاءِ",
            "meaning": "Reason – Action; 'so'"
          },
          {
            "label": "Why only the فَ reverses",
            "arabic": "اَلْفَاءُ عَلَامَةٌ",
            "meaning": "it marks which half depends on which"
          },
          {
            "label": "Joining",
            "arabic": "لَا يَتَغَيَّرُ شَيْءٌ",
            "meaning": "unlike Part 4, no verb changes its state"
          }
        ]
      },
      "quiz": [
        {
          "q": "How many rows does the Part 5 summary have?",
          "options": [
            "three",
            "four",
            "two",
            "six"
          ],
          "correct": 1,
          "explanation": "Three types, but the فَ type runs in two orders."
        },
        {
          "q": "Which type can put the Reason before the Action?",
          "options": [
            "the type with no additions",
            "the type with لَعَلَّ",
            "the type with the فَ",
            "all three"
          ],
          "correct": 2,
          "explanation": "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ."
        },
        {
          "q": "Why can only the فَ reverse the order?",
          "options": [
            "Because it is a حَرْفُ عَطْفٍ that marks which half depends on which",
            "Because it causes naṣb",
            "Because لَعَلَّ is too long",
            "Because إِنَّ cannot come first"
          ],
          "correct": 0,
          "explanation": "Without a marker the reason has to follow."
        },
        {
          "q": "When joining two sentences with a فَ, what changes in them?",
          "options": [
            "the verb of the second becomes مَجْزُوْمٌ",
            "the verb of the second becomes مَنْصُوْبٌ",
            "nothing — the فَ is simply added",
            "the first sentence loses its subject"
          ],
          "correct": 2,
          "explanation": "Unlike the جَوَاب of Part 4, a تَعْلِيْلِيَّة is independent."
        },
        {
          "q": "What is the difference between a جَوَاب and a جُمْلَةٌ تَعْلِيْلِيَّةٌ?",
          "options": [
            "A جَوَاب depends grammatically; a تَعْلِيْلِيَّة only in meaning",
            "A تَعْلِيْلِيَّة is always shorter",
            "A جَوَاب never takes a فَ",
            "There is no difference"
          ],
          "correct": 0,
          "explanation": "That is why the joining exercise of Part 4 changed verbs and this one does not."
        },
        {
          "q": "In every item of Exercise 4, where does the فَ go?",
          "options": [
            "at the head of the إِنَّ clause giving the reason",
            "at the head of the command",
            "at the end of the sentence",
            "it varies from item to item"
          ],
          "correct": 0,
          "explanation": "The command comes first in all six items."
        }
      ],
      "bank": [
        {
          "title": "اِعْدِلُوْا فَإِنَّ اللهَ يُحِبُّ الْعَدْلَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 5), item 1",
          "sentence": "اِعْدِلُوْا فَإِنَّ اللهَ يُحِبُّ الْعَدْلَ",
          "translation": "Be just, because Allah loves justice.",
          "cells": [
            "اِعْدِلُوْا",
            "فَ",
            "إِنَّ",
            "اللهَ",
            "يُحِبُّ الْعَدْلَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَدْخُلُوا الْغُرْفَةَ فَإِنَّ أُمَّكُمْ نَائِمَةٌ فِيْهَا",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 5), item 2",
          "sentence": "لَا تَدْخُلُوا الْغُرْفَةَ فَإِنَّ أُمَّكُمْ نَائِمَةٌ فِيْهَا",
          "translation": "Do not enter the room, because your mother is asleep in it.",
          "cells": [
            "لَا تَدْخُلُوا",
            "الْغُرْفَةَ",
            "فَ",
            "إِنَّ",
            "أُمَّكُمْ",
            "نَائِمَةٌ فِيْهَا"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "نَهْيٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ نَهْيٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ إِنَّ"
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
            "جَوَابُ النَّهْيِ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اِجْتَهِدْ فَإِنَّ الْفَضْلَ لَا يُحْصَلُ إِلَّا بِالِاجْتِهَادِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 5), item 3",
          "sentence": "اِجْتَهِدْ فَإِنَّ الْفَضْلَ لَا يُحْصَلُ إِلَّا بِالِاجْتِهَادِ",
          "translation": "Strive, because excellence is attained only through striving.",
          "cells": [
            "اِجْتَهِدْ",
            "فَ",
            "إِنَّ",
            "الْفَضْلَ",
            "لَا يُحْصَلُ",
            "إِلَّا بِالِاجْتِهَادِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "خَبَرُ إِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أَكْثِرُوْا مِنَ التِّلَاوَةِ فَإِنَّ هٰذَا الشَّهْرَ شَهْرُ الْقُرْآنِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 5), item 5",
          "sentence": "أَكْثِرُوْا مِنَ التِّلَاوَةِ فَإِنَّ هٰذَا الشَّهْرَ شَهْرُ الْقُرْآنِ",
          "translation": "Recite much, because this month is the month of the Qur'ān.",
          "cells": [
            "أَكْثِرُوْا",
            "مِنَ التِّلَاوَةِ",
            "فَ",
            "إِنَّ",
            "هٰذَا الشَّهْرَ",
            "شَهْرُ الْقُرْآنِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ إِنَّ مَعَ بَدَلِهِ"
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
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أَخْلِصُوْا فِي الْأَعْمَالِ فَإِنَّ اللهَ لَا يَقْبَلُ إِلَّا الْأَعْمَالَ الْخَالِصَةَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 4 (Unit 6, Part 5), item 6",
          "sentence": "أَخْلِصُوْا فِي الْأَعْمَالِ فَإِنَّ اللهَ لَا يَقْبَلُ إِلَّا الْأَعْمَالَ الْخَالِصَةَ",
          "translation": "Be sincere in your deeds, because Allah accepts only sincere deeds.",
          "cells": [
            "أَخْلِصُوْا",
            "فِي الْأَعْمَالِ",
            "فَ",
            "إِنَّ",
            "اللهَ",
            "لَا يَقْبَلُ إِلَّا الْأَعْمَالَ الْخَالِصَةَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ إِنَّ"
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
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Summary (Unit 6, Part 5, p. 597), row 1",
          "sentence": "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ",
          "translation": "Do good, for verily Allah loves those who do good.",
          "cells": [
            "أَحْسِنُوْا",
            "إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و)"
                }
              ]
            }
          ],
          "distractors": [
            "فَاءٌ سَبَبِيَّةٌ",
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Summary (Unit 6, Part 5, p. 597), row 2",
          "sentence": "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ",
          "translation": "Fear Allah so that you may be successful.",
          "cells": [
            "اِتَّقُوا اللهَ",
            "لَعَلَّ",
            "كُمْ",
            "تُفْلِحُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "أَمْرٌ"
                },
                {
                  "start": 1,
                  "end": 3,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
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
                  "role": "اِسْمُ لَعَلَّ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "خَبَرُ لَعَلَّ"
                }
              ]
            }
          ],
          "distractors": [
            "فَاءٌ سَبَبِيَّةٌ",
            "جَوَابُ أَمْرٍ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Summary (Unit 6, Part 5, p. 597), row 4",
          "sentence": "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ",
          "translation": "Allah is my Lord and your Lord, so worship Him.",
          "cells": [
            "اللهُ",
            "رَبِّيْ وَرَبُّكُمْ",
            "فَ",
            "اعْبُدُوْهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "فَاءٌ سَبَبِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "أَمْرٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلُ أَمْرٍ وَفَاعِلٌ (و) وَمَفْعُوْلٌ بِهِ (هُ)"
                }
              ]
            }
          ],
          "distractors": [
            "جَوَابُ أَمْرٍ",
            "فَاءُ السَّبَبِ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 5), item 1",
          "kind": "mcq",
          "prompt": "In اِعْدِلُوْا / إِنَّ اللهَ يُحِبُّ الْعَدْلَ, which sentence gives the reason?",
          "options": [
            "اِعْدِلُوْا",
            "إِنَّ اللهَ يُحِبُّ الْعَدْلَ",
            "both",
            "neither"
          ],
          "correct": 1,
          "explanation": "Allah's love of justice is why the command is given."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 5), item 2",
          "kind": "mcq",
          "prompt": "In لَا تَدْخُلُوا الْغُرْفَةَ فَإِنَّ أُمَّكُمْ نَائِمَةٌ فِيْهَا, what is نَائِمَةٌ?",
          "options": [
            "the اِسْمُ إِنَّ",
            "the خَبَرُ إِنَّ",
            "a حَالٌ",
            "a نَعْتٌ"
          ],
          "correct": 1,
          "explanation": "أُمَّكُمْ is the مَنْصُوْب اِسْم; نَائِمَةٌ is the مَرْفُوْع خَبَر."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 5), item 3",
          "kind": "mcq",
          "prompt": "In اِجْتَهِدْ فَإِنَّ الْفَضْلَ لَا يُحْصَلُ إِلَّا بِالِاجْتِهَادِ, what voice is يُحْصَلُ?",
          "options": [
            "مَعْلُوْمٌ",
            "مَجْهُوْلٌ — 'is attained'",
            "an أَمْر",
            "a نَهْي"
          ],
          "correct": 1,
          "explanation": "The doer is unstated; بِالِاجْتِهَادِ gives the means."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 5), item 5",
          "kind": "mcq",
          "prompt": "In أَكْثِرُوْا مِنَ التِّلَاوَةِ فَإِنَّ هٰذَا الشَّهْرَ شَهْرُ الْقُرْآنِ, what is اَلشَّهْرَ?",
          "options": [
            "a بَدَلٌ of هٰذَا, both together being the اِسْمُ إِنَّ",
            "the خَبَرُ إِنَّ",
            "a نَعْتٌ",
            "a مَفْعُوْلٌ بِهِ"
          ],
          "correct": 0,
          "explanation": "A definite ال-noun after an اِسْمُ إِشَارَةٍ is a بَدَلٌ."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 5), item 6",
          "kind": "mcq",
          "prompt": "In أَخْلِصُوْا فِي الْأَعْمَالِ فَإِنَّ اللهَ لَا يَقْبَلُ إِلَّا الْأَعْمَالَ الْخَالِصَةَ, what is اَلْخَالِصَةَ?",
          "options": [
            "a حَالٌ",
            "a تَمْيِيْزٌ",
            "a بَدَلٌ",
            "a نَعْتٌ of اَلْأَعْمَالَ"
          ],
          "correct": 3,
          "explanation": "Both are definite and مَنْصُوْب, so the second describes the first."
        },
        {
          "title": "Book Summary (Unit 6, Part 5, p. 597)",
          "kind": "mcq",
          "prompt": "Which row of the summary does اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ belong to?",
          "options": [
            "Without Additions, Action – Reason",
            "With لَعَلَّ, Action – Reason",
            "With فَ, Action – Reason",
            "With فَ, Reason – Action"
          ],
          "correct": 1,
          "explanation": "The second of the four rows."
        },
        {
          "title": "Book Summary (Unit 6, Part 5, p. 597)",
          "kind": "mcq",
          "prompt": "Which row does اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ belong to?",
          "options": [
            "With فَ, Reason – Action",
            "With فَ, Action – Reason",
            "With لَعَلَّ",
            "Without Additions"
          ],
          "correct": 0,
          "explanation": "The only row in which the reason comes first."
        },
        {
          "title": "Book Exercise 4 (Unit 6, Part 4) compared with Exercise 4 (Unit 6, Part 5)",
          "kind": "mcq",
          "prompt": "Both exercises ask you to join two sentences. What is the difference in what you must do?",
          "options": [
            "In Part 4 the verb of the second sentence must change state; in Part 5 nothing changes",
            "In Part 5 the verb must become مَجْزُوْمٌ",
            "In Part 4 no فَ is ever used",
            "There is no difference"
          ],
          "correct": 0,
          "explanation": "A جَوَاب is grammatically dependent; a تَعْلِيْلِيَّة is not."
        },
        {
          "title": "justice",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"justice\"?",
          "options": [
            "عَدْلٌ",
            "اِجْتِهَادٌ",
            "شَهْرٌ",
            "نَائِمٌ"
          ],
          "correct": 0
        },
        {
          "title": "justice",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَدْلٌ mean?",
          "options": [
            "justice",
            "striving",
            "month",
            "asleep"
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
            "تِلَاوَةٌ",
            "خَالِصٌ",
            "عَدَلَ يَعْدِلُ"
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
            "recitation",
            "sincere, pure",
            "to be just"
          ],
          "correct": 0
        },
        {
          "title": "excellence, bounty",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"excellence, bounty\"?",
          "options": [
            "فَضْلٌ",
            "شَهْرٌ",
            "نَائِمٌ",
            "أَخْلَصَ يُخْلِصُ"
          ],
          "correct": 0
        },
        {
          "title": "excellence, bounty",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَضْلٌ mean?",
          "options": [
            "excellence, bounty",
            "month",
            "asleep",
            "to be sincere"
          ],
          "correct": 0
        },
        {
          "title": "striving",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"striving\"?",
          "options": [
            "اِجْتِهَادٌ",
            "خَالِصٌ",
            "عَدَلَ يَعْدِلُ",
            "حَصَلَ يَحْصُلُ"
          ],
          "correct": 0
        },
        {
          "title": "striving",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِجْتِهَادٌ mean?",
          "options": [
            "striving",
            "sincere, pure",
            "to be just",
            "to obtain, attain"
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
            "نَائِمٌ",
            "أَخْلَصَ يُخْلِصُ",
            "أَكْثَرَ يُكْثِرُ"
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
            "asleep",
            "to be sincere",
            "to do much of"
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
            "عَدَلَ يَعْدِلُ",
            "حَصَلَ يَحْصُلُ",
            "عَدْلٌ"
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
            "to be just",
            "to obtain, attain",
            "justice"
          ],
          "correct": 0
        },
        {
          "title": "sincere, pure",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"sincere, pure\"?",
          "options": [
            "خَالِصٌ",
            "أَخْلَصَ يُخْلِصُ",
            "أَكْثَرَ يُكْثِرُ",
            "غُرْفَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "sincere, pure",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَالِصٌ mean?",
          "options": [
            "sincere, pure",
            "to be sincere",
            "to do much of",
            "room"
          ],
          "correct": 0
        },
        {
          "title": "asleep",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"asleep\"?",
          "options": [
            "نَائِمٌ",
            "حَصَلَ يَحْصُلُ",
            "عَدْلٌ",
            "فَضْلٌ"
          ],
          "correct": 0
        },
        {
          "title": "asleep",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does نَائِمٌ mean?",
          "options": [
            "asleep",
            "to obtain, attain",
            "justice",
            "excellence, bounty"
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
            "أَكْثَرَ يُكْثِرُ",
            "غُرْفَةٌ",
            "اِجْتِهَادٌ"
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
            "to do much of",
            "room",
            "striving"
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
            "حُصُوْلًا",
            "إِخْلَاصًا",
            "إِكْثَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to be sincere",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to be sincere\"?",
          "options": [
            "أَخْلَصَ يُخْلِصُ",
            "عَدْلٌ",
            "فَضْلٌ",
            "تِلَاوَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "to be sincere",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخْلَصَ يُخْلِصُ mean?",
          "options": [
            "to be sincere",
            "justice",
            "excellence, bounty",
            "recitation"
          ],
          "correct": 0
        },
        {
          "title": "to be sincere (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَخْلَصَ يُخْلِصُ?",
          "options": [
            "إِخْلَاصًا",
            "إِكْثَارًا",
            "حُصُوْلًا",
            "عَدْلًا"
          ],
          "correct": 0
        },
        {
          "title": "to obtain, attain",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to obtain, attain\"?",
          "options": [
            "حَصَلَ يَحْصُلُ",
            "غُرْفَةٌ",
            "اِجْتِهَادٌ",
            "شَهْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "to obtain, attain",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَصَلَ يَحْصُلُ mean?",
          "options": [
            "to obtain, attain",
            "room",
            "striving",
            "month"
          ],
          "correct": 0
        },
        {
          "title": "to obtain, attain (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَصَلَ يَحْصُلُ?",
          "options": [
            "حُصُوْلًا",
            "عَدْلًا",
            "إِكْثَارًا",
            "إِخْلَاصًا"
          ],
          "correct": 0
        },
        {
          "title": "to do much of",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to do much of\"?",
          "options": [
            "أَكْثَرَ يُكْثِرُ",
            "فَضْلٌ",
            "تِلَاوَةٌ",
            "خَالِصٌ"
          ],
          "correct": 0
        },
        {
          "title": "to do much of",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكْثَرَ يُكْثِرُ mean?",
          "options": [
            "to do much of",
            "excellence, bounty",
            "recitation",
            "sincere, pure"
          ],
          "correct": 0
        },
        {
          "title": "to do much of (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَكْثَرَ يُكْثِرُ?",
          "options": [
            "إِكْثَارًا",
            "إِخْلَاصًا",
            "عَدْلًا",
            "حُصُوْلًا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l9",
      "title": "الجملة الاستدراكية بلكنّ",
      "subtitle": "Part 6: جُمْلَةٌ اسْتِدْرَاكِيَّةٌ",
      "concepts": [
        {
          "heading": "What a جُمْلَةٌ اسْتِدْرَاكِيَّةٌ is",
          "lines": [
            {
              "html": "Sometimes, an independent sentence may be used to remove a presumption arising from the previous sentence. This is called a جُمْلَةٌ اسْتِدْرَاكِيَّةٌ. It is translated by adding 'but' or 'however' before it.",
              "list": false
            },
            {
              "html": "Note the wording: it removes a presumption, not a statement. 'Zainab fasted' invites the assumption that Fatima did too; the second sentence takes that assumption away without contradicting the first. That is exactly what English 'but' does, and it is why اِسْتِدْرَاك — 'setting straight' — is the name given to it.",
              "list": false
            },
            {
              "table": {
                "title": "Types of جُمْلَةٌ اسْتِدْرَاكِيَّةٌ",
                "headers": [
                  "No.",
                  "Type"
                ],
                "rows": [
                  [
                    "1",
                    "with لٰكِنَّ"
                  ],
                  [
                    "2",
                    "with لٰكِنْ"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What does a جُمْلَةٌ اسْتِدْرَاكِيَّةٌ do, precisely — remove a statement or remove a presumption؟",
            "kind": "mcq",
            "options": [
              "It removes a PRESUMPTION arising from the previous sentence (not a stated fact) — exactly like English 'but'",
              "It removes/contradicts a directly stated fact in the previous sentence",
              "It simply repeats the previous sentence for emphasis",
              "It asks a question about the previous sentence"
            ],
            "correct": 0
          }
        },
        {
          "heading": "لٰكِنَّ",
          "lines": [
            {
              "html": "A جُمْلَةٌ اسْتِدْرَاكِيَّةٌ can occur with the حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ of لٰكِنَّ.",
              "list": false
            },
            {
              "html": "صَامَتْ زَيْنَبُ لٰكِنَّ فَاطِمَةَ مَا صَامَتْ — Zainab fasted, but Fatima did not fast.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "لٰكِنَّ فَاطِمَةَ مَا صَامَتْ",
                "translation": "but Fatima did not fast",
                "cells": [
                  "لٰكِنَّ",
                  "فَاطِمَةَ",
                  "مَا صَامَتْ"
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
                        "role": "اِسْمُ لٰكِنَّ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "خَبَرُ لٰكِنَّ"
                      }
                    ]
                  },
                  {
                    "position": "below",
                    "labels": [
                      {
                        "start": 2,
                        "end": 2,
                        "role": "فِعْلٌ وَفَاعِلٌ (هِيَ)"
                      }
                    ]
                  }
                ]
              }
            },
            {
              "html": "لٰكِنَّ is another sister of إِنَّ, so it behaves exactly as إِنَّ and لَعَلَّ do: the noun after it is its مَنْصُوْب اِسْم, and what follows is its خَبَر. Here فَاطِمَةَ carries a single fatḥah because it is مَمْنُوْعٌ مِنَ الصَّرْفِ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does لٰكِنَّ behave grammatically, as one of the 'sisters of إِنَّ'؟",
            "kind": "mcq",
            "options": [
              "The following noun/pronoun is its مَنْصُوْب اِسْم, and what follows that is its خَبَر",
              "It has no grammatical effect on what follows, like a plain حَرْفُ عَطْفٍ",
              "It makes the following verb مَجْزُوْمٌ",
              "It requires the following noun to be مَجْرُوْرٌ"
            ],
            "correct": 0
          }
        },
        {
          "heading": "وَلٰكِنَّ",
          "lines": [
            {
              "html": "The حَرْفُ الْعَطْفِ of وَ can precede لٰكِنَّ.",
              "list": false
            },
            {
              "html": "صَامَتْ زَيْنَبُ وَلٰكِنَّ فَاطِمَةَ مَا صَامَتْ — Zainab fasted, but Fatima did not fast.",
              "list": true,
              "bullet": true
            },
            {
              "html": "The وَ adds nothing to the meaning — both sentences translate identically — and it changes nothing in the grammar. In practice it is the commoner form: every one of the seven sentences in Exercise 1 uses وَلٰكِنَّ rather than لٰكِنَّ on its own.",
              "list": false
            },
            {
              "table": {
                "title": "The sisters of إِنَّ met in Unit 6",
                "headers": [
                  "Particle",
                  "Part",
                  "What it does"
                ],
                "rows": [
                  [
                    "إِنَّ",
                    "Part 2 and Part 5",
                    "emphasises; opens a جُمْلَةٌ تَعْلِيْلِيَّةٌ"
                  ],
                  [
                    "لَعَلَّ",
                    "Part 5",
                    "gives the purpose — 'so that… may'"
                  ],
                  [
                    "لٰكِنَّ",
                    "Part 6",
                    "removes a presumption — 'but', 'however'"
                  ]
                ]
              }
            }
          ],
          "exercise": {
            "prompt": "What changes in meaning or grammar when وَ precedes لٰكِنَّ, as in وَلٰكِنَّ vs لٰكِنَّ alone؟",
            "kind": "mcq",
            "options": [
              "Nothing — the وَ adds nothing to the meaning and changes nothing in the grammar; it is simply the commoner form in practice",
              "The meaning is reversed",
              "لٰكِنَّ loses its اِسْم/خَبَر structure once وَ precedes it",
              "وَلٰكِنَّ can no longer mean 'but'"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "اَلْجُمْلَةُ الِاسْتِدْرَاكِيَّةُ with لٰكِنَّ",
        "rows": [
          {
            "label": "What it does",
            "arabic": "تُزِيْلُ تَوَهُّمًا",
            "meaning": "removes a presumption raised by the last sentence"
          },
          {
            "label": "In English",
            "arabic": "but / however",
            "meaning": "added before the second sentence"
          },
          {
            "label": "Two types",
            "arabic": "لٰكِنَّ وَلٰكِنْ",
            "meaning": "the heavy and the light form"
          },
          {
            "label": "لٰكِنَّ",
            "arabic": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "meaning": "a sister of إِنَّ — an اِسْم and a خَبَر"
          },
          {
            "label": "Example",
            "arabic": "صَامَتْ زَيْنَبُ لٰكِنَّ فَاطِمَةَ مَا صَامَتْ",
            "meaning": "Zainab fasted, but Fatima did not"
          },
          {
            "label": "With a wāw",
            "arabic": "وَلٰكِنَّ",
            "meaning": "the commoner form; the meaning is unchanged"
          }
        ]
      },
      "quiz": [
        {
          "q": "What does a جُمْلَةٌ اسْتِدْرَاكِيَّةٌ do?",
          "options": [
            "It removes a presumption arising from the previous sentence",
            "It gives the reason for the previous sentence",
            "It states a condition",
            "It swears an oath"
          ],
          "correct": 0,
          "explanation": "Hence the name اِسْتِدْرَاك — 'setting straight'."
        },
        {
          "q": "How is it translated?",
          "options": [
            "'because', 'for'",
            "'so that', 'perhaps'",
            "'but', 'however'",
            "'unless', 'lest'"
          ],
          "correct": 2,
          "explanation": "The addition goes before the second sentence."
        },
        {
          "q": "How many types are there?",
          "options": [
            "one",
            "two — with لٰكِنَّ and with لٰكِنْ",
            "three",
            "four"
          ],
          "correct": 1,
          "explanation": "The heavy form and the light form."
        },
        {
          "q": "What kind of word is لٰكِنَّ?",
          "options": [
            "a حَرْفُ عَطْفٍ",
            "a حَرْفُ شَرْطٍ",
            "an اِسْمٌ مَوْصُوْلٌ",
            "a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — a sister of إِنَّ"
          ],
          "correct": 3,
          "explanation": "So it takes an اِسْم and a خَبَر."
        },
        {
          "q": "In لٰكِنَّ فَاطِمَةَ مَا صَامَتْ, what is مَا صَامَتْ?",
          "options": [
            "the اِسْمُ لٰكِنَّ",
            "the خَبَرُ لٰكِنَّ",
            "a نَعْتٌ",
            "a حَالٌ"
          ],
          "correct": 1,
          "explanation": "A negated verbal sentence serving as the خَبَر."
        },
        {
          "q": "What difference does adding a وَ before لٰكِنَّ make?",
          "options": [
            "none in meaning or grammar — but it is the commoner form",
            "it makes the sentence conditional",
            "it makes the اِسْم مَرْفُوْع",
            "it removes the اِسْتِدْرَاك sense"
          ],
          "correct": 0,
          "explanation": "Both versions are translated identically."
        }
      ],
      "bank": [
        {
          "title": "صَامَتْ زَيْنَبُ لٰكِنَّ فَاطِمَةَ مَا صَامَتْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 6, p. 598)",
          "sentence": "صَامَتْ زَيْنَبُ لٰكِنَّ فَاطِمَةَ مَا صَامَتْ",
          "translation": "Zainab fasted, but Fatima did not fast.",
          "cells": [
            "صَامَتْ",
            "زَيْنَبُ",
            "لٰكِنَّ",
            "فَاطِمَةَ",
            "مَا صَامَتْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "اِسْمُ لٰكِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "صَامَتْ زَيْنَبُ وَلٰكِنَّ فَاطِمَةَ مَا صَامَتْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 6, p. 598)",
          "sentence": "صَامَتْ زَيْنَبُ وَلٰكِنَّ فَاطِمَةَ مَا صَامَتْ",
          "translation": "Zainab fasted, but Fatima did not fast.",
          "cells": [
            "صَامَتْ زَيْنَبُ",
            "وَ",
            "لٰكِنَّ",
            "فَاطِمَةَ",
            "مَا صَامَتْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
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
                  "role": "اِسْمُ لٰكِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "هُوَ يَذُمُّكَ وَلٰكِنَّكَ لَا تَذُمُّهُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 6), item 1",
          "sentence": "هُوَ يَذُمُّكَ وَلٰكِنَّكَ لَا تَذُمُّهُ",
          "translation": "He criticises you, but you do not criticise him.",
          "cells": [
            "هُوَ",
            "يَذُمُّكَ",
            "وَ",
            "لٰكِنَّكَ",
            "لَا تَذُمُّهُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (كَ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا تَهْدِي النَّاسَ وَلٰكِنَّ اللهَ يَهْدِيْهِمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 6), item 2",
          "sentence": "لَا تَهْدِي النَّاسَ وَلٰكِنَّ اللهَ يَهْدِيْهِمْ",
          "translation": "You do not guide people, but Allah guides them.",
          "cells": [
            "لَا تَهْدِي",
            "النَّاسَ",
            "وَ",
            "لٰكِنَّ",
            "اللهَ",
            "يَهْدِيْهِمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (أَنْتَ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ لٰكِنَّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "نُعَامِلُهُمْ بِخَيْرٍ وَلٰكِنَّهُمْ يُعَامِلُوْنَنَا بِشَرٍّ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 6), item 3",
          "sentence": "نُعَامِلُهُمْ بِخَيْرٍ وَلٰكِنَّهُمْ يُعَامِلُوْنَنَا بِشَرٍّ",
          "translation": "We treat them well, but they treat us badly.",
          "cells": [
            "نُعَامِلُهُمْ",
            "بِخَيْرٍ",
            "وَ",
            "لٰكِنَّهُمْ",
            "يُعَامِلُوْنَنَا بِشَرٍّ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (نَحْنُ) وَمَفْعُوْلٌ بِهِ (هُمْ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُمْ)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "هِيَ فِتْنَةٌ وَلٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 6), item 4",
          "sentence": "هِيَ فِتْنَةٌ وَلٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُوْنَ",
          "translation": "It is a trial, but most of them do not know.",
          "cells": [
            "هِيَ",
            "فِتْنَةٌ",
            "وَ",
            "لٰكِنَّ",
            "أَكْثَرَهُمْ",
            "لَا يَعْلَمُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "اِسْمُ لٰكِنَّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "إِنَّ وَعْدَ اللهِ حَقٌّ وَلٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُوْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 6), item 5",
          "sentence": "إِنَّ وَعْدَ اللهِ حَقٌّ وَلٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُوْنَ",
          "translation": "The promise of Allah is true, but most of them do not know.",
          "cells": [
            "إِنَّ",
            "وَعْدَ اللهِ",
            "حَقٌّ",
            "وَ",
            "لٰكِنَّ",
            "أَكْثَرَهُمْ لَا يَعْلَمُوْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ ثَانٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "اِسْمُ لٰكِنَّ مَعَ خَبَرِهِ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "إِنْ تَخْدَعِ النَّاسَ يَزِدْ مَالُكَ وَلٰكِنَّ اللهَ لَا يُبَارِكُ لَكَ فِيْهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 6), item 6",
          "sentence": "إِنْ تَخْدَعِ النَّاسَ يَزِدْ مَالُكَ وَلٰكِنَّ اللهَ لَا يُبَارِكُ لَكَ فِيْهِ",
          "translation": "If you deceive people your wealth will increase, but Allah will not bless it for you.",
          "cells": [
            "إِنْ تَخْدَعِ النَّاسَ",
            "يَزِدْ مَالُكَ",
            "وَ",
            "لٰكِنَّ",
            "اللهَ",
            "لَا يُبَارِكُ لَكَ فِيْهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "شَرْطٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "جَوَابُ الشَّرْطِ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
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
                  "role": "اِسْمُ لٰكِنَّ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "رَابِطَةٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "بَعْضُ النَّاسِ يَتَمَنَّوْنَ أَنْ يَدْخُلُوا الْجَنَّةَ وَلٰكِنَّهُمْ لَا يَفْعَلُوْنَ مَا أَمَرَهُمُ اللهُ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 1 (Unit 6, Part 6), item 7",
          "sentence": "بَعْضُ النَّاسِ يَتَمَنَّوْنَ أَنْ يَدْخُلُوا الْجَنَّةَ وَلٰكِنَّهُمْ لَا يَفْعَلُوْنَ مَا أَمَرَهُمُ اللهُ بِهِ",
          "translation": "Some people long to enter Paradise, but they do not do what Allah has commanded them.",
          "cells": [
            "بَعْضُ النَّاسِ",
            "يَتَمَنَّوْنَ",
            "أَنْ يَدْخُلُوا الْجَنَّةَ",
            "وَ",
            "لٰكِنَّهُمْ",
            "لَا يَفْعَلُوْنَ مَا أَمَرَهُمُ اللهُ بِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ وَاسْمُهُ (هُمْ)"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرُ لٰكِنَّ"
                }
              ]
            }
          ],
          "distractors": [
            "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
            "فَاءٌ سَبَبِيَّةٌ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 1",
          "kind": "mcq",
          "prompt": "In هُوَ يَذُمُّكَ وَلٰكِنَّكَ لَا تَذُمُّهُ, what is the كَ attached to لٰكِنَّ?",
          "options": [
            "a مَفْعُوْلٌ بِهِ",
            "the اِسْمُ لٰكِنَّ",
            "the خَبَرُ لٰكِنَّ",
            "a مُضَافٌ إِلَيْهِ"
          ],
          "correct": 1,
          "explanation": "مَنْصُوْبٌ in place, exactly as with إِنَّ."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 2",
          "kind": "mcq",
          "prompt": "In لَا تَهْدِي النَّاسَ وَلٰكِنَّ اللهَ يَهْدِيْهِمْ, what presumption does the second sentence remove?",
          "options": [
            "that people cannot be guided at all",
            "that you guide people",
            "that Allah does not guide",
            "none; it simply adds information"
          ],
          "correct": 0,
          "explanation": "The اِسْتِدْرَاك corrects the impression left by the first half."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 3",
          "kind": "mcq",
          "prompt": "In نُعَامِلُهُمْ بِخَيْرٍ وَلٰكِنَّهُمْ يُعَامِلُوْنَنَا بِشَرٍّ, what is يُعَامِلُوْنَنَا بِشَرٍّ?",
          "options": [
            "the اِسْمُ لٰكِنَّ",
            "a حَالٌ",
            "a نَعْتٌ",
            "the خَبَرُ لٰكِنَّ"
          ],
          "correct": 3,
          "explanation": "A verbal sentence serving as the خَبَر of the particle."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 4",
          "kind": "mcq",
          "prompt": "In ﴿هِيَ فِتْنَةٌ وَلٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُوْنَ﴾, what is أَكْثَرَهُمْ?",
          "options": [
            "the اِسْمُ لٰكِنَّ, itself a مُضَافٌ",
            "the خَبَرُ لٰكِنَّ",
            "a مَفْعُوْلٌ بِهِ",
            "a تَمْيِيْزٌ"
          ],
          "correct": 0,
          "explanation": "هُمْ is its مُضَافٌ إِلَيْهِ; the whole phrase is مَنْصُوْبٌ."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 5",
          "kind": "mcq",
          "prompt": "In ﴿إِنَّ وَعْدَ اللهِ حَقٌّ وَلٰكِنَّ أَكْثَرَهُمْ لَا يَعْلَمُوْنَ﴾, how many sisters of إِنَّ appear?",
          "options": [
            "one",
            "two — إِنَّ and لٰكِنَّ",
            "three",
            "none"
          ],
          "correct": 1,
          "explanation": "Each governs its own sentence."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 6",
          "kind": "mcq",
          "prompt": "In إِنْ تَخْدَعِ النَّاسَ … يَزِدْ مَالُكَ وَلٰكِنَّ اللهَ لَا يُبَارِكُ لَكَ فِيْهِ, what does the اِسْتِدْرَاك correct?",
          "options": [
            "that deceiving increases wealth",
            "the presumption that increased wealth means benefit",
            "that Allah blesses wealth",
            "nothing"
          ],
          "correct": 1,
          "explanation": "The wealth does increase; what it does not carry is barakah."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 7",
          "kind": "mcq",
          "prompt": "In بَعْضُ النَّاسِ يُرِيْدُوْنَ بَلْ يَتَمَنَّوْنَ أَنْ يَدْخُلُوا الْجَنَّةَ …, what does بَلْ do here?",
          "options": [
            "It negates the first verb",
            "It introduces a condition",
            "It replaces the first verb with a stronger one — 'indeed, long for'",
            "It introduces the اِسْتِدْرَاك"
          ],
          "correct": 2,
          "explanation": "A حَرْفُ إِضْرَابٍ used to intensify rather than to cancel."
        },
        {
          "title": "Book Exercise 1 (Unit 6, Part 6), item 7",
          "kind": "mcq",
          "prompt": "In the same sentence, what is أَنْ يَدْخُلُوا الْجَنَّةَ?",
          "options": [
            "an اِسْمٌ مُؤَوَّلٌ — the مَفْعُوْلٌ بِهِ of يَتَمَنَّوْنَ",
            "a حَالٌ",
            "the خَبَرُ لٰكِنَّ",
            "a جَوَابُ شَرْطٍ"
          ],
          "correct": 0,
          "explanation": "أَنْ with a مَنْصُوْب verb, from Unit 5, Section 3."
        },
        {
          "title": "trial, temptation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"trial, temptation\"?",
          "options": [
            "فِتْنَةٌ",
            "شَرٌّ",
            "هَدَى يَهْدِيْ",
            "أَكْذَبَ يُكْذِبُ"
          ],
          "correct": 0
        },
        {
          "title": "trial, temptation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فِتْنَةٌ mean?",
          "options": [
            "trial, temptation",
            "evil",
            "to guide",
            "to call a liar"
          ],
          "correct": 0
        },
        {
          "title": "trial, temptation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فِتْنَةٌ?",
          "options": [
            "فِتَنٌ",
            "شُرُوْرٌ",
            "فَرَائِضُ",
            "وُعُوْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "promise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"promise\"?",
          "options": [
            "وَعْدٌ",
            "ذَمَّ يَذُمُّ",
            "عَامَلَ يُعَامِلُ",
            "تَمَنَّى يَتَمَنَّى"
          ],
          "correct": 0
        },
        {
          "title": "promise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَعْدٌ mean?",
          "options": [
            "promise",
            "to criticise, blame",
            "to treat, deal with",
            "to long for"
          ],
          "correct": 0
        },
        {
          "title": "promise (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of وَعْدٌ?",
          "options": [
            "وُعُوْدٌ",
            "فِتَنٌ",
            "شُرُوْرٌ",
            "فَرَائِضُ"
          ],
          "correct": 0
        },
        {
          "title": "obligation",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"obligation\"?",
          "options": [
            "فَرِيْضَةٌ",
            "هَدَى يَهْدِيْ",
            "أَكْذَبَ يُكْذِبُ",
            "بَارَكَ يُبَارِكُ"
          ],
          "correct": 0
        },
        {
          "title": "obligation",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does فَرِيْضَةٌ mean?",
          "options": [
            "obligation",
            "to guide",
            "to call a liar",
            "to bless"
          ],
          "correct": 0
        },
        {
          "title": "obligation (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of فَرِيْضَةٌ?",
          "options": [
            "فَرَائِضُ",
            "وُعُوْدٌ",
            "فِتَنٌ",
            "شُرُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "evil",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"evil\"?",
          "options": [
            "شَرٌّ",
            "عَامَلَ يُعَامِلُ",
            "تَمَنَّى يَتَمَنَّى",
            "فِتْنَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "evil",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does شَرٌّ mean?",
          "options": [
            "evil",
            "to treat, deal with",
            "to long for",
            "trial, temptation"
          ],
          "correct": 0
        },
        {
          "title": "evil (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَرٌّ?",
          "options": [
            "شُرُوْرٌ",
            "فَرَائِضُ",
            "وُعُوْدٌ",
            "فِتَنٌ"
          ],
          "correct": 0
        },
        {
          "title": "to criticise, blame",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to criticise, blame\"?",
          "options": [
            "ذَمَّ يَذُمُّ",
            "أَكْذَبَ يُكْذِبُ",
            "بَارَكَ يُبَارِكُ",
            "وَعْدٌ"
          ],
          "correct": 0
        },
        {
          "title": "to criticise, blame",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَمَّ يَذُمُّ mean?",
          "options": [
            "to criticise, blame",
            "to call a liar",
            "to bless",
            "promise"
          ],
          "correct": 0
        },
        {
          "title": "to criticise, blame (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَمَّ يَذُمُّ?",
          "options": [
            "ذَمًّا",
            "مُعَامَلَةً",
            "تَمَنِّيًا",
            "هِدَايَةً"
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
            "تَمَنَّى يَتَمَنَّى",
            "فِتْنَةٌ",
            "فَرِيْضَةٌ"
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
            "to long for",
            "trial, temptation",
            "obligation"
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
            "إِكْذَابًا",
            "مُبَارَكَةً",
            "مُعَامَلَةً"
          ],
          "correct": 0
        },
        {
          "title": "to treat, deal with",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to treat, deal with\"?",
          "options": [
            "عَامَلَ يُعَامِلُ",
            "بَارَكَ يُبَارِكُ",
            "وَعْدٌ",
            "شَرٌّ"
          ],
          "correct": 0
        },
        {
          "title": "to treat, deal with",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَامَلَ يُعَامِلُ mean?",
          "options": [
            "to treat, deal with",
            "to bless",
            "promise",
            "evil"
          ],
          "correct": 0
        },
        {
          "title": "to treat, deal with (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَامَلَ يُعَامِلُ?",
          "options": [
            "مُعَامَلَةً",
            "تَمَنِّيًا",
            "ذَمًّا",
            "إِكْذَابًا"
          ],
          "correct": 0
        },
        {
          "title": "to call a liar",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to call a liar\"?",
          "options": [
            "أَكْذَبَ يُكْذِبُ",
            "فِتْنَةٌ",
            "فَرِيْضَةٌ",
            "ذَمَّ يَذُمُّ"
          ],
          "correct": 0
        },
        {
          "title": "to call a liar",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَكْذَبَ يُكْذِبُ mean?",
          "options": [
            "to call a liar",
            "trial, temptation",
            "obligation",
            "to criticise, blame"
          ],
          "correct": 0
        },
        {
          "title": "to call a liar (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَكْذَبَ يُكْذِبُ?",
          "options": [
            "إِكْذَابًا",
            "مُبَارَكَةً",
            "هِدَايَةً",
            "تَمَنِّيًا"
          ],
          "correct": 0
        },
        {
          "title": "to long for",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to long for\"?",
          "options": [
            "تَمَنَّى يَتَمَنَّى",
            "وَعْدٌ",
            "شَرٌّ",
            "هَدَى يَهْدِيْ"
          ],
          "correct": 0
        },
        {
          "title": "to long for",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does تَمَنَّى يَتَمَنَّى mean?",
          "options": [
            "to long for",
            "promise",
            "evil",
            "to guide"
          ],
          "correct": 0
        },
        {
          "title": "to long for (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of تَمَنَّى يَتَمَنَّى?",
          "options": [
            "تَمَنِّيًا",
            "ذَمًّا",
            "مُعَامَلَةً",
            "مُبَارَكَةً"
          ],
          "correct": 0
        },
        {
          "title": "to bless",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bless\"?",
          "options": [
            "بَارَكَ يُبَارِكُ",
            "فَرِيْضَةٌ",
            "ذَمَّ يَذُمُّ",
            "عَامَلَ يُعَامِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to bless",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَارَكَ يُبَارِكُ mean?",
          "options": [
            "to bless",
            "obligation",
            "to criticise, blame",
            "to treat, deal with"
          ],
          "correct": 0
        },
        {
          "title": "to bless (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَارَكَ يُبَارِكُ?",
          "options": [
            "مُبَارَكَةً",
            "هِدَايَةً",
            "إِكْذَابًا",
            "ذَمًّا"
          ],
          "correct": 0
        }
      ]
    },
    {
      "id": "l10",
      "title": "الجملة الاستدراكية بلكنْ",
      "subtitle": "Part 6: جُمْلَةٌ اسْتِدْرَاكِيَّةٌ",
      "concepts": [
        {
          "heading": "لٰكِنْ",
          "lines": [
            {
              "html": "A جُمْلَةٌ اسْتِدْرَاكِيَّةٌ can occur with the حَرْفُ عَطْفٍ of لٰكِنْ, or of وَلٰكِنْ.",
              "list": false
            },
            {
              "html": "صَامَتْ زَيْنَبُ لٰكِنْ مَا صَامَتْ فَاطِمَةُ — Zainab fasted, but Fatima did not fast.",
              "list": true,
              "bullet": true
            },
            {
              "html": "صَامَتْ زَيْنَبُ وَلٰكِنْ مَا صَامَتْ فَاطِمَةُ — Zainab fasted, but Fatima did not fast.",
              "list": true,
              "bullet": true
            },
            {
              "tarkeebDiagram": {
                "sentence": "صَامَتْ زَيْنَبُ لٰكِنْ مَا صَامَتْ فَاطِمَةُ",
                "translation": "Zainab fasted, but Fatima did not fast.",
                "cells": [
                  "صَامَتْ",
                  "زَيْنَبُ",
                  "لٰكِنْ",
                  "مَا صَامَتْ",
                  "فَاطِمَةُ"
                ],
                "rows": [
                  {
                    "position": "above",
                    "labels": [
                      {
                        "start": 0,
                        "end": 1,
                        "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                      },
                      {
                        "start": 2,
                        "end": 2,
                        "role": "حَرْفُ عَطْفٍ"
                      },
                      {
                        "start": 3,
                        "end": 4,
                        "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                      }
                    ]
                  },
                  {
                    "position": "below",
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
                        "start": 3,
                        "end": 3,
                        "role": "فِعْلٌ مَنْفِيٌّ"
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
              "html": "Compare this diagram with the one for لٰكِنَّ in the last lesson and the whole difference stands out. There, فَاطِمَةَ was مَنْصُوْبَة as the اِسْمُ لٰكِنَّ. Here فَاطِمَةُ is مَرْفُوْعَة, because it is simply the فَاعِل of صَامَتْ — لٰكِنْ is a حَرْفُ عَطْفٍ and governs nothing at all.",
              "list": false
            },
            {
              "table": {
                "title": "لٰكِنَّ against لٰكِنْ",
                "headers": [
                  "",
                  "لٰكِنَّ",
                  "لٰكِنْ"
                ],
                "rows": [
                  [
                    "Kind of word",
                    "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
                    "حَرْفُ عَطْفٍ"
                  ],
                  [
                    "What follows",
                    "an اِسْم مَنْصُوْب, then a خَبَر",
                    "an ordinary sentence, unchanged"
                  ],
                  [
                    "Example",
                    "لٰكِنَّ فَاطِمَةَ مَا صَامَتْ",
                    "لٰكِنْ مَا صَامَتْ فَاطِمَةُ"
                  ],
                  [
                    "With a wāw",
                    "وَلٰكِنَّ",
                    "وَلٰكِنْ"
                  ]
                ]
              }
            },
            {
              "html": "In practice the spelling tells you everything: a shaddah on the nūn means a مَنْصُوْب noun must follow; a sukūn means the sentence after it carries on as normal. Both are equally common, and both translate as 'but'.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "How does لٰكِنْ (no shaddah) differ grammatically from لٰكِنَّ (with shaddah)؟",
            "kind": "mcq",
            "options": [
              "لٰكِنْ is a plain حَرْفُ عَطْفٍ governing nothing — the following sentence continues unchanged (its noun stays مَرْفُوْعٌ if it's a فَاعِلٌ); لٰكِنَّ is a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ requiring a مَنْصُوْب اِسْم",
              "They are grammatically identical, differing only in spelling",
              "لٰكِنْ requires a مَنْصُوْب noun, while لٰكِنَّ requires nothing",
              "لٰكِنْ can only be used with negative sentences"
            ],
            "correct": 0
          }
        },
        {
          "heading": "The Part 6 summary",
          "lines": [
            {
              "table": {
                "title": "Joining Sentences Together — جُمْلَةٌ اسْتِدْرَاكِيَّةٌ",
                "headers": [
                  "Particle",
                  "Kind of word"
                ],
                "rows": [
                  [
                    "لٰكِنَّ / وَلٰكِنَّ",
                    "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ"
                  ],
                  [
                    "لٰكِنْ / وَلٰكِنْ",
                    "حَرْفُ عَطْفٍ"
                  ]
                ]
              }
            },
            {
              "html": "That closes Part 6, and with it the six connections between sentences promised in the Introduction: vocative expressions, oaths, conditions and results, sentences after an أَمْر or نَهْي, the جُمْلَةٌ تَعْلِيْلِيَّةٌ and the جُمْلَةٌ اسْتِدْرَاكِيَّةٌ.",
              "list": false
            }
          ],
          "exercise": {
            "prompt": "What single clue on the page tells you whether you're looking at لٰكِنَّ or لٰكِنْ, and what closes with Part 6؟",
            "kind": "mcq",
            "options": [
              "The nūn's vowel/shaddah (shaddah = مَنْصُوْب noun follows; sukūn = ordinary sentence continues) — and Part 6 completes all six connections between sentences promised in the Unit 6 Introduction",
              "The presence of وَ before it — only لٰكِنَّ can follow وَ",
              "The length of the sentence",
              "Whether the sentence is a command"
            ],
            "correct": 0
          }
        }
      ],
      "summary": {
        "title": "لٰكِنْ, and Part 6 gathered",
        "rows": [
          {
            "label": "لٰكِنْ",
            "arabic": "حَرْفُ عَطْفٍ",
            "meaning": "governs nothing; the sentence follows unchanged"
          },
          {
            "label": "Example",
            "arabic": "لٰكِنْ مَا صَامَتْ فَاطِمَةُ",
            "meaning": "فَاطِمَةُ is مَرْفُوْعَة — the فَاعِل"
          },
          {
            "label": "لٰكِنَّ",
            "arabic": "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "meaning": "لٰكِنَّ فَاطِمَةَ مَا صَامَتْ — مَنْصُوْبَة"
          },
          {
            "label": "The clue",
            "arabic": "اَلشَّدَّةُ أَوِ السُّكُوْنُ",
            "meaning": "the nūn's vowel tells you which you have"
          },
          {
            "label": "With a wāw",
            "arabic": "وَلٰكِنْ / وَلٰكِنَّ",
            "meaning": "both forms may take the وَاوُ الْعَطْفِ"
          },
          {
            "label": "Part 6 done",
            "arabic": "سِتُّ رَوَابِطَ",
            "meaning": "the six connections of the Introduction are complete"
          }
        ]
      },
      "quiz": [
        {
          "q": "What kind of word is لٰكِنْ?",
          "options": [
            "a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "a حَرْفُ عَطْفٍ",
            "a حَرْفُ شَرْطٍ",
            "an اِسْمٌ"
          ],
          "correct": 1,
          "explanation": "So it governs nothing in the sentence after it."
        },
        {
          "q": "In لٰكِنْ مَا صَامَتْ فَاطِمَةُ, why is فَاطِمَةُ مَرْفُوْعَة?",
          "options": [
            "Because it is the اِسْمُ لٰكِنْ",
            "Because لٰكِنْ causes rafʿ",
            "Because it is the فَاعِل of صَامَتْ",
            "It should be مَنْصُوْبَة"
          ],
          "correct": 2,
          "explanation": "Nothing has changed in the sentence; لٰكِنْ merely joins it."
        },
        {
          "q": "What is the quickest way to tell لٰكِنَّ from لٰكِنْ?",
          "options": [
            "the vowel on the nūn — a shaddah or a sukūn",
            "the presence of a wāw",
            "the length of the sentence",
            "the meaning; they mean different things"
          ],
          "correct": 0,
          "explanation": "Both translate as 'but'; only the grammar differs."
        },
        {
          "q": "Can both forms take a وَ before them?",
          "options": [
            "only لٰكِنَّ",
            "only لٰكِنْ",
            "neither",
            "both — وَلٰكِنَّ and وَلٰكِنْ"
          ],
          "correct": 3,
          "explanation": "And in the exercises the wāw is present far more often than not."
        },
        {
          "q": "According to the Part 6 summary, what are the two rows?",
          "options": [
            "لٰكِنَّ as a حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ, and لٰكِنْ as a حَرْفُ عَطْفٍ",
            "لٰكِنَّ for the past and لٰكِنْ for the present",
            "one for statements and one for commands",
            "one with a wāw and one without"
          ],
          "correct": 0,
          "explanation": "The distinction is one of word-class, not of meaning."
        },
        {
          "q": "How many connections between sentences has Unit 6 now covered?",
          "options": [
            "four",
            "five",
            "six",
            "three"
          ],
          "correct": 2,
          "explanation": "Vocative expressions, oaths, conditions and results, sentences after an أَمْر or نَهْي, the جُمْلَةٌ تَعْلِيْلِيَّةٌ and the جُمْلَةٌ اسْتِدْرَاكِيَّةٌ — exactly six."
        }
      ],
      "bank": [
        {
          "title": "صَامَتْ زَيْنَبُ لٰكِنْ مَا صَامَتْ فَاطِمَةُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book example (Unit 6, Part 6, p. 600)",
          "sentence": "صَامَتْ زَيْنَبُ لٰكِنْ مَا صَامَتْ فَاطِمَةُ",
          "translation": "Zainab fasted, but Fatima did not fast.",
          "cells": [
            "صَامَتْ",
            "زَيْنَبُ",
            "لٰكِنْ",
            "مَا صَامَتْ",
            "فَاطِمَةُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "حَرْفُ عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ مَنْفِيٌّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فَاعِلٌ ثَانٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "خَبَرُ لٰكِنَّ",
            "حَالٌ"
          ]
        },
        {
          "title": "وَمَا ظَلَمْنَاهُمْ وَلٰكِنْ كَانُوْا هُمُ الظَّالِمِيْنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 1",
          "sentence": "وَمَا ظَلَمْنَاهُمْ وَلٰكِنْ كَانُوْا هُمُ الظَّالِمِيْنَ",
          "translation": "And We did not wrong them, but they were the wrongdoers.",
          "cells": [
            "وَمَا ظَلَمْنَاهُمْ",
            "وَ",
            "لٰكِنْ",
            "كَانُوْا",
            "هُمُ",
            "الظَّالِمِيْنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 3,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 3,
                  "end": 3,
                  "role": "فِعْلٌ نَاقِصٌ وَاسْمُهُ (و)"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "ضَمِيْرُ الْفَصْلِ"
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
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا نُشْرِكُ بِاللهِ مِنْ شَيْءٍ وَلٰكِنْ نُؤْمِنُ بِهِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 2",
          "sentence": "لَا نُشْرِكُ بِاللهِ مِنْ شَيْءٍ وَلٰكِنْ نُؤْمِنُ بِهِ",
          "translation": "We associate nothing with Allah, but we believe in Him.",
          "cells": [
            "لَا نُشْرِكُ",
            "بِاللهِ مِنْ شَيْءٍ",
            "وَ",
            "لٰكِنْ",
            "نُؤْمِنُ بِهِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 1,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 2,
                  "end": 3,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (نَحْنُ)"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "مَفْعُوْلٌ بِهِ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ مَرْفُوْعٌ وَفَاعِلٌ (نَحْنُ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَيْسَ هٰؤُلَاءِ عَلَى هُدًى وَلٰكِنْ هُمْ فِيْ ضَلَالٍ مُبِيْنٍ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 3",
          "sentence": "لَيْسَ هٰؤُلَاءِ عَلَى هُدًى وَلٰكِنْ هُمْ فِيْ ضَلَالٍ مُبِيْنٍ",
          "translation": "These people are not upon guidance, but they are in clear misguidance.",
          "cells": [
            "لَيْسَ",
            "هٰؤُلَاءِ",
            "عَلَى هُدًى",
            "وَلٰكِنْ",
            "هُمْ",
            "فِيْ ضَلَالٍ مُبِيْنٍ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "خَبَرُ لَيْسَ غَيْرُ صَرِيْحٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "مُبْتَدَأٌ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "خَبَرٌ غَيْرُ صَرِيْحٍ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "حَفِظْتُهُ وَلٰكِنْ نَسِيْتُ أَكْثَرَ مَا حَفِظْتُ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 4",
          "sentence": "حَفِظْتُهُ وَلٰكِنْ نَسِيْتُ أَكْثَرَ مَا حَفِظْتُ",
          "translation": "I memorised it, but I forgot most of what I memorised.",
          "cells": [
            "حَفِظْتُهُ",
            "وَلٰكِنْ",
            "نَسِيْتُ",
            "أَكْثَرَ",
            "مَا حَفِظْتُ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 1,
                  "end": 1,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 2,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ وَفَاعِلٌ (تُ) وَمَفْعُوْلٌ بِهِ (هُ)"
                },
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
                  "end": 4,
                  "role": "مُضَافٌ إِلَيْهِ وَاسْمٌ مُؤَوَّلٌ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "لَا يُحَرِّمُ اللهُ الطَّيِّبَاتِ وَلٰكِنْ يُحَرِّمُ الْخَبَائِثَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 5",
          "sentence": "لَا يُحَرِّمُ اللهُ الطَّيِّبَاتِ وَلٰكِنْ يُحَرِّمُ الْخَبَائِثَ",
          "translation": "Allah does not forbid good things, but He forbids impure things.",
          "cells": [
            "لَا يُحَرِّمُ",
            "اللهُ",
            "الطَّيِّبَاتِ",
            "وَلٰكِنْ",
            "يُحَرِّمُ",
            "الْخَبَائِثَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "فِعْلٌ مَنْفِيٌّ"
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
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ)"
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
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "إِنَّ اللهَ لَا يَنْظُرُ إِلَى أَجْسَامِكُمْ وَلٰكِنْ يَنْظُرُ إِلَى قُلُوْبِكُمْ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 7",
          "sentence": "إِنَّ اللهَ لَا يَنْظُرُ إِلَى أَجْسَامِكُمْ وَلٰكِنْ يَنْظُرُ إِلَى قُلُوْبِكُمْ",
          "translation": "Indeed Allah does not look at your bodies, but He looks at your hearts.",
          "cells": [
            "إِنَّ",
            "اللهَ",
            "لَا يَنْظُرُ إِلَى أَجْسَامِكُمْ",
            "وَلٰكِنْ",
            "يَنْظُرُ إِلَى قُلُوْبِكُمْ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
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
                  "role": "اِسْمُ إِنَّ"
                },
                {
                  "start": 2,
                  "end": 2,
                  "role": "خَبَرُ إِنَّ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) مَعَ غَيْرِ الصَّرِيْحِ"
                }
              ]
            }
          ],
          "distractors": [
            "اِسْمُ لٰكِنَّ",
            "خَبَرُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "هٰذَا الشَّابُّ يُصَلِّي الصَّلَوَاتِ الْخَمْسَ كُلَّهَا وَلٰكِنْ يُسْرِعُ فِي الرُّكُوْعِ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 8",
          "sentence": "هٰذَا الشَّابُّ يُصَلِّي الصَّلَوَاتِ الْخَمْسَ كُلَّهَا وَلٰكِنْ يُسْرِعُ فِي الرُّكُوْعِ",
          "translation": "This young man prays all five prayers, but he hurries in the bowing.",
          "cells": [
            "هٰذَا الشَّابُّ",
            "يُصَلِّي",
            "الصَّلَوَاتِ الْخَمْسَ كُلَّهَا",
            "وَلٰكِنْ",
            "يُسْرِعُ فِي الرُّكُوْعِ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 2,
                  "role": "جُمْلَةٌ اسْمِيَّةٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
              "labels": [
                {
                  "start": 0,
                  "end": 0,
                  "role": "مُبْتَدَأٌ مَعَ بَدَلِهِ"
                },
                {
                  "start": 1,
                  "end": 2,
                  "role": "خَبَرٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "فِعْلٌ وَفَاعِلٌ (هُوَ) مَعَ غَيْرِ الصَّرِيْحِ"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "دَعَا النَّبِيَّانِ مُوْسَى وَهَارُوْنُ فِرْعَوْنَ إِلَى اللهِ وَلٰكِنْ مَا آمَنَ",
          "kind": "tarkeeb",
          "instruction": "Label the grammatical role of each part of the sentence.",
          "source": "Book Exercise 2 (Unit 6, Part 6), item 9",
          "sentence": "دَعَا النَّبِيَّانِ مُوْسَى وَهَارُوْنُ فِرْعَوْنَ إِلَى اللهِ وَلٰكِنْ مَا آمَنَ",
          "translation": "The two Prophets Mūsā and Hārūn called Firʿawn to Allah, but he did not believe.",
          "cells": [
            "دَعَا",
            "النَّبِيَّانِ",
            "مُوْسَى وَهَارُوْنُ",
            "فِرْعَوْنَ إِلَى اللهِ",
            "وَلٰكِنْ",
            "مَا آمَنَ"
          ],
          "rows": [
            {
              "position": "above",
              "labels": [
                {
                  "start": 0,
                  "end": 3,
                  "role": "جُمْلَةٌ فِعْلِيَّةٌ"
                },
                {
                  "start": 4,
                  "end": 4,
                  "role": "حَرْفَا عَطْفٍ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ"
                }
              ]
            },
            {
              "position": "below",
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
                  "role": "بَدَلٌ"
                },
                {
                  "start": 3,
                  "end": 3,
                  "role": "مَفْعُوْلٌ بِهِ مَعَ غَيْرِ الصَّرِيْحِ"
                },
                {
                  "start": 5,
                  "end": 5,
                  "role": "فِعْلٌ مَنْفِيٌّ وَفَاعِلٌ (هُوَ)"
                }
              ]
            }
          ],
          "distractors": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
            "اِسْمُ لٰكِنَّ",
            "شَرْطٌ",
            "حَالٌ"
          ]
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 1",
          "kind": "mcq",
          "prompt": "In ﴿وَمَا ظَلَمْنَاهُمْ وَلٰكِنْ كَانُوْا هُمُ الظَّالِمِيْنَ﴾, what is هُمُ?",
          "options": [
            "the اِسْمُ كَانَ",
            "a ضَمِيْرُ الْفَصْلِ",
            "the خَبَرُ كَانَ",
            "a تَأْكِيْدٌ of لٰكِنْ"
          ],
          "correct": 1,
          "explanation": "It separates the اِسْم from the خَبَر and stresses the identification."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 2",
          "kind": "mcq",
          "prompt": "In لَا نُشْرِكُ بِاللهِ مِنْ شَيْءٍ وَلٰكِنْ نُؤْمِنُ بِهِ, what state is نُؤْمِنُ in?",
          "options": [
            "مَنْصُوْبٌ",
            "مَجْزُوْمٌ",
            "مَرْفُوْعٌ — لٰكِنْ changes nothing",
            "مَبْنِيٌّ"
          ],
          "correct": 2,
          "explanation": "A حَرْفُ عَطْفٍ does not govern the verb after it."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 3",
          "kind": "mcq",
          "prompt": "In لَيْسَ هٰؤُلَاءِ عَلَى هُدًى وَلٰكِنْ هُمْ فِيْ ضَلَالٍ مُبِيْنٍ, what is هُمْ?",
          "options": [
            "the اِسْمُ لٰكِنْ",
            "a مُبْتَدَأ, with فِيْ ضَلَالٍ as its خَبَر",
            "a ضَمِيْرُ الْفَصْلِ",
            "the فَاعِل"
          ],
          "correct": 1,
          "explanation": "لٰكِنْ takes no اِسْم, so what follows is a full nominal sentence."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 4",
          "kind": "mcq",
          "prompt": "In أَمَا حَفِظْتَ الدَّرْسَ؟ بَلَى!, what does بَلَى do?",
          "options": [
            "It denies the question",
            "It answers a negative question in the affirmative",
            "It introduces the اِسْتِدْرَاك",
            "It is a حَرْفُ عَطْفٍ"
          ],
          "correct": 1,
          "explanation": "نَعَمْ would confirm the negation; بَلَى overturns it."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 5",
          "kind": "mcq",
          "prompt": "In لَا يُحَرِّمُ اللهُ الطَّيِّبَاتِ وَلٰكِنْ يُحَرِّمُ الْخَبَائِثَ, what presumption is removed?",
          "options": [
            "that Allah forbids nothing at all",
            "that good things are forbidden",
            "that impure things are permitted",
            "none"
          ],
          "correct": 0,
          "explanation": "The first half could suggest there is no prohibition; the second corrects that."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 6",
          "kind": "mcq",
          "prompt": "In إِنَّكَ شَابٌّ قَوِيٌّ … وَلٰكِنْ لَا تَجْتَهِدُ وَذٰلِكَ يَحْزُنُنِيْ, what is ذٰلِكَ?",
          "options": [
            "the مُبْتَدَأ of a third sentence, referring back to the whole situation",
            "the اِسْمُ لٰكِنْ",
            "a مَفْعُوْلٌ بِهِ",
            "a نَعْتٌ"
          ],
          "correct": 0,
          "explanation": "'And that saddens me' — a comment on what has just been said."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 9",
          "kind": "mcq",
          "prompt": "In دَعَا النَّبِيَّانِ مُوْسَى وَهَارُوْنُ فِرْعَوْنَ … وَلٰكِنْ مَا آمَنَ بَلِ اسْتَكْبَرَ, what does بَلْ add?",
          "options": [
            "a condition",
            "a reason",
            "a stronger statement in place of the bare denial",
            "an oath"
          ],
          "correct": 2,
          "explanation": "Not merely 'he did not believe' but 'rather, he was arrogant'."
        },
        {
          "title": "Book Exercise 2 (Unit 6, Part 6), item 10",
          "kind": "mcq",
          "prompt": "In أَعْطَيْنَا الْفَقِيْرَ مَالًا لِيَشْتَرِيَ بِهِ طَعَامًا وَلٰكِنْ أَبَى, what is لِيَشْتَرِيَ?",
          "options": [
            "an اِسْمٌ مُؤَوَّلٌ of purpose — a مَفْعُوْلٌ لَهُ",
            "a جَوَابُ شَرْطٍ",
            "a حَالٌ",
            "the خَبَرُ لٰكِنْ"
          ],
          "correct": 0,
          "explanation": "لِ with a hidden أَنْ, from Unit 5, Section 3, Part 6."
        },
        {
          "title": "misguidance",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"misguidance\"?",
          "options": [
            "ضَلَالٌ",
            "رُكُوْعٌ",
            "قَلْبٌ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "misguidance",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ضَلَالٌ mean?",
          "options": [
            "misguidance",
            "bowing",
            "heart",
            "to be arrogant"
          ],
          "correct": 0
        },
        {
          "title": "impure thing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"impure thing\"?",
          "options": [
            "خَبِيْثَةٌ",
            "سُجُوْدٌ",
            "طَعَامٌ",
            "أَبَى يَأْبَى"
          ],
          "correct": 0
        },
        {
          "title": "impure thing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خَبِيْثَةٌ mean?",
          "options": [
            "impure thing",
            "prostration",
            "food",
            "to refuse"
          ],
          "correct": 0
        },
        {
          "title": "impure thing (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خَبِيْثَةٌ?",
          "options": [
            "خَبَائِثُ",
            "شُبَّانٌ",
            "أَطْعِمَةٌ",
            "قُلُوْبٌ"
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
            "قَلْبٌ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "كَسَبَ يَكْسِبُ"
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
            "heart",
            "to be arrogant",
            "to earn"
          ],
          "correct": 0
        },
        {
          "title": "young man (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of شَابٌّ?",
          "options": [
            "شُبَّانٌ",
            "قُلُوْبٌ",
            "خَبَائِثُ",
            "أَطْعِمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "bowing",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"bowing\"?",
          "options": [
            "رُكُوْعٌ",
            "طَعَامٌ",
            "أَبَى يَأْبَى",
            "أَسْرَعَ يُسْرِعُ"
          ],
          "correct": 0
        },
        {
          "title": "bowing",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does رُكُوْعٌ mean?",
          "options": [
            "bowing",
            "food",
            "to refuse",
            "to hurry"
          ],
          "correct": 0
        },
        {
          "title": "prostration",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"prostration\"?",
          "options": [
            "سُجُوْدٌ",
            "اِسْتَكْبَرَ يَسْتَكْبِرُ",
            "كَسَبَ يَكْسِبُ",
            "اِشْتَرَى يَشْتَرِيْ"
          ],
          "correct": 0
        },
        {
          "title": "prostration",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does سُجُوْدٌ mean?",
          "options": [
            "prostration",
            "to be arrogant",
            "to earn",
            "to buy"
          ],
          "correct": 0
        },
        {
          "title": "heart",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"heart\"?",
          "options": [
            "قَلْبٌ",
            "أَبَى يَأْبَى",
            "أَسْرَعَ يُسْرِعُ",
            "ضَلَالٌ"
          ],
          "correct": 0
        },
        {
          "title": "heart",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does قَلْبٌ mean?",
          "options": [
            "heart",
            "to refuse",
            "to hurry",
            "misguidance"
          ],
          "correct": 0
        },
        {
          "title": "heart (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of قَلْبٌ?",
          "options": [
            "قُلُوْبٌ",
            "شُبَّانٌ",
            "خَبَائِثُ",
            "أَطْعِمَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "food",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"food\"?",
          "options": [
            "طَعَامٌ",
            "كَسَبَ يَكْسِبُ",
            "اِشْتَرَى يَشْتَرِيْ",
            "خَبِيْثَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "food",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does طَعَامٌ mean?",
          "options": [
            "food",
            "to earn",
            "to buy",
            "impure thing"
          ],
          "correct": 0
        },
        {
          "title": "food (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of طَعَامٌ?",
          "options": [
            "أَطْعِمَةٌ",
            "قُلُوْبٌ",
            "شُبَّانٌ",
            "خَبَائِثُ"
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
            "أَسْرَعَ يُسْرِعُ",
            "ضَلَالٌ",
            "شَابٌّ"
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
            "to hurry",
            "misguidance",
            "young man"
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
            "كَسْبًا",
            "اِشْتِرَاءً",
            "إِبَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to refuse",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to refuse\"?",
          "options": [
            "أَبَى يَأْبَى",
            "اِشْتَرَى يَشْتَرِيْ",
            "خَبِيْثَةٌ",
            "رُكُوْعٌ"
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
            "to buy",
            "impure thing",
            "bowing"
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
            "إِسْرَاعًا",
            "اِسْتِكْبَارًا",
            "كَسْبًا"
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
            "ضَلَالٌ",
            "شَابٌّ",
            "سُجُوْدٌ"
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
            "misguidance",
            "young man",
            "prostration"
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
            "اِشْتِرَاءً",
            "إِبَاءً",
            "اِسْتِكْبَارًا"
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
            "خَبِيْثَةٌ",
            "رُكُوْعٌ",
            "قَلْبٌ"
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
            "impure thing",
            "bowing",
            "heart"
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
            "اِسْتِكْبَارًا",
            "كَسْبًا",
            "إِبَاءً"
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
            "شَابٌّ",
            "سُجُوْدٌ",
            "طَعَامٌ"
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
            "young man",
            "prostration",
            "food"
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
            "إِبَاءً",
            "إِسْرَاعًا",
            "اِسْتِكْبَارًا"
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
          "heading": "Unit 6 Summary — Joining Sentences Together",
          "lines": [
            {
              "html": "This is a cumulative review: every key grammar term covered in this Unit, plus the full noun and verb vocabulary from every lesson (including the أَسْمَاءُ الشَّرْطِ and حُرُوْفُ الشَّرْطِ). Nothing here is new — the quiz below draws only on terms already taught, and the practice bank it unlocks is there to keep the vocabulary fresh.",
              "list": false
            }
          ]
        },
        {
          "heading": "The six connections between sentences",
          "lines": [
            {
              "table": {
                "title": "The six connections between sentences",
                "headers": [
                  "Part",
                  "Connection",
                  "Marker"
                ],
                "rows": [
                  [
                    "1",
                    "Vocative Expressions",
                    "يَا ‖ أَيُّهَا ‖ أَيَّتُهَا ‖ اَللّٰهُمَّ"
                  ],
                  [
                    "2",
                    "Oaths",
                    "وَ ‖ بِ ‖ تَ, with a hidden أُقْسِمُ"
                  ],
                  [
                    "3",
                    "Conditions and Results",
                    "9 أَسْمَاءُ شَرْطٍ + إِنْ، لَوْ، لَوْلَا"
                  ],
                  [
                    "4",
                    "Sentences after اَلْأَمْرُ and اَلنَّهْيُ",
                    "jazm, or فَ + naṣb"
                  ],
                  [
                    "5",
                    "جُمْلَةٌ تَعْلِيْلِيَّةٌ",
                    "none ‖ لَعَلَّ ‖ فَ"
                  ],
                  [
                    "6",
                    "جُمْلَةٌ اسْتِدْرَاكِيَّةٌ",
                    "لٰكِنَّ ‖ لٰكِنْ"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "Part 1 — the vocative expression",
          "lines": [
            {
              "table": {
                "title": "Part 1 — the vocative expression",
                "headers": [
                  "Sentence",
                  "Slot",
                  "Ending",
                  "Example"
                ],
                "rows": [
                  [
                    "نِدَاءٌ",
                    "حَرْفُ النِّدَاءِ",
                    "—",
                    "يَا رَجُلُ ‖ أَيُّهَا الرَّجُلُ ‖ اَللّٰهُمَّ"
                  ],
                  [
                    "نِدَاءٌ",
                    "مُنَادًى, not a مُضَافٌ",
                    "one ضَمَّةٌ",
                    "يَا رَجُلُ"
                  ],
                  [
                    "نِدَاءٌ",
                    "مُنَادًى, a مُضَافٌ",
                    "فَتْحَةٌ",
                    "يَا عَبْدَ اللهِ"
                  ],
                  [
                    "جَوَابُ النِّدَاءِ",
                    "—",
                    "—",
                    "يَا عَبْدَ اللهِ، قُمْ"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "Part 2 — جَوَابُ الْقَسَمِ",
          "lines": [
            {
              "table": {
                "title": "Part 2 — جَوَابُ الْقَسَمِ",
                "headers": [
                  "",
                  "جُمْلَةٌ اسْمِيَّةٌ",
                  "Past",
                  "Present",
                  "Future"
                ],
                "rows": [
                  [
                    "مُثْبَتٌ",
                    "وَاللهِ إِنَّهُ لَصَادِقٌ",
                    "وَاللهِ لَقَدْ صَدَقَ",
                    "وَاللهِ لَيَصْدُقُ",
                    "وَاللهِ لَتَصْدُقَنَّ"
                  ],
                  [
                    "مَنْفِيٌّ",
                    "وَاللهِ مَا هُوَ بِكَاذِبٍ",
                    "وَاللهِ مَا كَذَبَ",
                    "وَاللهِ مَا يَكْذِبُ",
                    "وَاللهِ لَنْ أَكْذِبَ"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "Part 3 — the four conditionals",
          "lines": [
            {
              "table": {
                "title": "Part 3 — the four conditionals",
                "headers": [
                  "Type",
                  "شَرْطٌ",
                  "جَوَابُ الشَّرْطِ"
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
                    "you would be successful"
                  ],
                  [
                    "Third (Past, Unchangeable)",
                    "you had worked hard",
                    "you would have been successful"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "Part 4 — جَوَابُ الْأَمْرِ and جَوَابُ النَّهْيِ",
          "lines": [
            {
              "table": {
                "title": "Part 4 — جَوَابُ الْأَمْرِ and جَوَابُ النَّهْيِ",
                "headers": [
                  "Verb in the main sentence",
                  "Meaning of the following sentence",
                  "Iʿrāb",
                  "Example"
                ],
                "rows": [
                  [
                    "اَلْأَمْرُ",
                    "result of adhering",
                    "مَجْزُوْمٌ",
                    "اِجْتَهِدْ تَنْجَحْ"
                  ],
                  [
                    "اَلنَّهْيُ",
                    "result of adhering",
                    "مَجْزُوْمٌ",
                    "لَا تَكْسَلْ تَنْجَحْ"
                  ],
                  [
                    "اَلنَّهْيُ",
                    "result of not adhering",
                    "فَ + مَنْصُوْبٌ",
                    "لَا تَكْسَلْ فَتَنْدَمَ"
                  ]
                ]
              }
            }
          ]
        },
        {
          "heading": "Parts 5 and 6 — the last two connections",
          "lines": [
            {
              "table": {
                "title": "Parts 5 and 6 — the last two connections",
                "headers": [
                  "Type",
                  "Order or word-class",
                  "Example"
                ],
                "rows": [
                  [
                    "تَعْلِيْلِيَّةٌ, no additions",
                    "Action – Reason",
                    "أَحْسِنُوْا إِنَّ اللهَ يُحِبُّ الْمُحْسِنِيْنَ"
                  ],
                  [
                    "تَعْلِيْلِيَّةٌ with لَعَلَّ",
                    "Action – Reason",
                    "اِتَّقُوا اللهَ لَعَلَّكُمْ تُفْلِحُوْنَ"
                  ],
                  [
                    "تَعْلِيْلِيَّةٌ with فَ",
                    "Action – Reason",
                    "أُعْبُدُوا اللهَ فَإِنَّهُ خَلَقَكَ"
                  ],
                  [
                    "تَعْلِيْلِيَّةٌ with فَ",
                    "Reason – Action",
                    "اللهُ رَبِّيْ وَرَبُّكُمْ فَاعْبُدُوْهُ"
                  ],
                  [
                    "اسْتِدْرَاكِيَّةٌ with لٰكِنَّ",
                    "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ",
                    "لٰكِنَّ فَاطِمَةَ مَا صَامَتْ"
                  ],
                  [
                    "اسْتِدْرَاكِيَّةٌ with لٰكِنْ",
                    "حَرْفُ عَطْفٍ",
                    "لٰكِنْ مَا صَامَتْ فَاطِمَةُ"
                  ]
                ]
              }
            }
          ]
        }
      ],
      "quiz": [
        {
          "q": "What does نِدَاءٌ mean?",
          "options": [
            "Vocative Sentence",
            "Oath",
            "Conditional Conjunction",
            "Result Clause"
          ],
          "correct": 0
        },
        {
          "q": "What does جَوَابُ النِّدَاءِ mean?",
          "options": [
            "Sentence After Vocative Sentence",
            "Sentence After Oath",
            "Condition Clause",
            "فَ added to the جَوَابُ الشَّرْطِ"
          ],
          "correct": 0
        },
        {
          "q": "What does حَرْفُ النِّدَاءِ mean?",
          "options": [
            "Particle of Vocation",
            "Conditional Conjunction",
            "Result Clause",
            "لَ added to the جَوَابُ الشَّرْطِ"
          ],
          "correct": 0
        },
        {
          "q": "What does قَسَمٌ mean?",
          "options": [
            "Oath",
            "Condition Clause",
            "فَ added to the جَوَابُ الشَّرْطِ",
            "Sentence After an أَمْرٌ"
          ],
          "correct": 0
        },
        {
          "q": "What does جَوَابُ الْقَسَمِ mean?",
          "options": [
            "Sentence After Oath",
            "Result Clause",
            "لَ added to the جَوَابُ الشَّرْطِ",
            "Sentence After a نَهْيٌ"
          ],
          "correct": 0
        },
        {
          "q": "What does أَدَاةُ الشَّرْطِ mean?",
          "options": [
            "Conditional Conjunction",
            "فَ added to the جَوَابُ الشَّرْطِ",
            "Sentence After an أَمْرٌ",
            "Sentence that shows reason"
          ],
          "correct": 0
        },
        {
          "q": "What does شَرْطٌ mean?",
          "options": [
            "Condition Clause",
            "لَ added to the جَوَابُ الشَّرْطِ",
            "Sentence After a نَهْيٌ",
            "Sentence that removes a presumption"
          ],
          "correct": 0
        },
        {
          "q": "What does جَوَابُ الشَّرْطِ mean?",
          "options": [
            "Result Clause",
            "Sentence After an أَمْرٌ",
            "Sentence that shows reason",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'so that'"
          ],
          "correct": 0
        },
        {
          "q": "What does فَاءٌ رَابِطَةٌ mean?",
          "options": [
            "فَ added to the جَوَابُ الشَّرْطِ",
            "Sentence After a نَهْيٌ",
            "Sentence that removes a presumption",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'however'"
          ],
          "correct": 0
        },
        {
          "q": "What does لَامُ الْجَوَابِ mean?",
          "options": [
            "لَ added to the جَوَابُ الشَّرْطِ",
            "Sentence that shows reason",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'so that'",
            "Vocative Sentence"
          ],
          "correct": 0
        },
        {
          "q": "What does جَوَابُ الْأَمْرِ mean?",
          "options": [
            "Sentence After an أَمْرٌ",
            "Sentence that removes a presumption",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'however'",
            "Sentence After Vocative Sentence"
          ],
          "correct": 0
        },
        {
          "q": "What does جَوَابُ النَّهْيِ mean?",
          "options": [
            "Sentence After a نَهْيٌ",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'so that'",
            "Vocative Sentence",
            "Particle of Vocation"
          ],
          "correct": 0
        },
        {
          "q": "What does جُمْلَةٌ تَعْلِيْلِيَّةٌ mean?",
          "options": [
            "Sentence that shows reason",
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'however'",
            "Sentence After Vocative Sentence",
            "Oath"
          ],
          "correct": 0
        },
        {
          "q": "What does جُمْلَةٌ اسْتِدْرَاكِيَّةٌ mean?",
          "options": [
            "Sentence that removes a presumption",
            "Vocative Sentence",
            "Particle of Vocation",
            "Sentence After Oath"
          ],
          "correct": 0
        },
        {
          "q": "What does لَعَلَّ mean?",
          "options": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'so that'",
            "Sentence After Vocative Sentence",
            "Oath",
            "Conditional Conjunction"
          ],
          "correct": 0
        },
        {
          "q": "What does لٰكِنَّ mean?",
          "options": [
            "حَرْفٌ مُشَبَّهٌ بِالْفِعْلِ — 'however'",
            "Particle of Vocation",
            "Sentence After Oath",
            "Condition Clause"
          ],
          "correct": 0
        }
      ],
      "bank": [
        {
          "title": "footsteps",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"footsteps\"?",
          "options": [
            "خُطْوَةٌ",
            "عَصْرٌ",
            "اِتَّقَى يَتَّقِيْ",
            "أَخْبَرَ يُخْبِرُ"
          ],
          "correct": 0
        },
        {
          "title": "footsteps",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does خُطْوَةٌ mean?",
          "options": [
            "footsteps",
            "time, age",
            "to fear",
            "to inform"
          ],
          "correct": 0
        },
        {
          "title": "footsteps (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of خُطْوَةٌ?",
          "options": [
            "خُطُوَاتٌ",
            "عُصُوْرٌ",
            "صُوَرٌ",
            "أَجْسَامٌ"
          ],
          "correct": 0
        },
        {
          "title": "body",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"body\"?",
          "options": [
            "جِسْمٌ",
            "أَبْغَضَ يُبْغِضُ",
            "أَجَرَ يَأْجُرُ",
            "أَرْضَى يُرْضِيْ"
          ],
          "correct": 0
        },
        {
          "title": "body",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does جِسْمٌ mean?",
          "options": [
            "body",
            "to dislike, hate",
            "to reward",
            "to please"
          ],
          "correct": 0
        },
        {
          "title": "body (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of جِسْمٌ?",
          "options": [
            "أَجْسَامٌ",
            "خُطُوَاتٌ",
            "عُصُوْرٌ",
            "صُوَرٌ"
          ],
          "correct": 0
        },
        {
          "title": "form, picture",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"form, picture\"?",
          "options": [
            "صُوْرَةٌ",
            "اِتَّقَى يَتَّقِيْ",
            "أَخْبَرَ يُخْبِرُ",
            "بَارَكَ يُبَارِكُ"
          ],
          "correct": 0
        },
        {
          "title": "form, picture",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does صُوْرَةٌ mean?",
          "options": [
            "form, picture",
            "to fear",
            "to inform",
            "to bless"
          ],
          "correct": 0
        },
        {
          "title": "form, picture (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of صُوْرَةٌ?",
          "options": [
            "صُوَرٌ",
            "أَجْسَامٌ",
            "خُطُوَاتٌ",
            "عُصُوْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "time, age",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"time, age\"?",
          "options": [
            "عَصْرٌ",
            "أَجَرَ يَأْجُرُ",
            "أَرْضَى يُرْضِيْ",
            "حَزَنَ يَحْزُنُ"
          ],
          "correct": 0
        },
        {
          "title": "time, age",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَصْرٌ mean?",
          "options": [
            "time, age",
            "to reward",
            "to please",
            "to make sad"
          ],
          "correct": 0
        },
        {
          "title": "time, age (جمع)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the plural of عَصْرٌ?",
          "options": [
            "عُصُوْرٌ",
            "صُوَرٌ",
            "أَجْسَامٌ",
            "خُطُوَاتٌ"
          ],
          "correct": 0
        },
        {
          "title": "to dislike, hate",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to dislike, hate\"?",
          "options": [
            "أَبْغَضَ يُبْغِضُ",
            "أَخْبَرَ يُخْبِرُ",
            "بَارَكَ يُبَارِكُ",
            "ذَمَّ يَذُمُّ"
          ],
          "correct": 0
        },
        {
          "title": "to dislike, hate",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَبْغَضَ يُبْغِضُ mean?",
          "options": [
            "to dislike, hate",
            "to inform",
            "to bless",
            "to criticise"
          ],
          "correct": 0
        },
        {
          "title": "to dislike, hate (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَبْغَضَ يُبْغِضُ?",
          "options": [
            "إِبْغَاضًا",
            "ذَمًّا",
            "عَيْشًا",
            "عِصْمَةً"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to fear\"?",
          "options": [
            "اِتَّقَى يَتَّقِيْ",
            "أَرْضَى يُرْضِيْ",
            "حَزَنَ يَحْزُنُ",
            "سَلِمَ يَسْلَمُ"
          ],
          "correct": 0
        },
        {
          "title": "to fear",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does اِتَّقَى يَتَّقِيْ mean?",
          "options": [
            "to fear",
            "to please",
            "to make sad",
            "to be safe"
          ],
          "correct": 0
        },
        {
          "title": "to fear (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of اِتَّقَى يَتَّقِيْ?",
          "options": [
            "اِتِّقَاءً",
            "سَلَامَةً",
            "مُعَامَلَةً",
            "مَدْحًا"
          ],
          "correct": 0
        },
        {
          "title": "to reward",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to reward\"?",
          "options": [
            "أَجَرَ يَأْجُرُ",
            "بَارَكَ يُبَارِكُ",
            "ذَمَّ يَذُمُّ",
            "عَاشَ يَعِيْشُ"
          ],
          "correct": 0
        },
        {
          "title": "to reward",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَجَرَ يَأْجُرُ mean?",
          "options": [
            "to reward",
            "to bless",
            "to criticise",
            "to live"
          ],
          "correct": 0
        },
        {
          "title": "to reward (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَجَرَ يَأْجُرُ?",
          "options": [
            "أَجْرًا",
            "عَيْشًا",
            "عِصْمَةً",
            "وَعْظًا"
          ],
          "correct": 0
        },
        {
          "title": "to inform",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to inform\"?",
          "options": [
            "أَخْبَرَ يُخْبِرُ",
            "حَزَنَ يَحْزُنُ",
            "سَلِمَ يَسْلَمُ",
            "عَامَلَ يُعَامِلُ"
          ],
          "correct": 0
        },
        {
          "title": "to inform",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَخْبَرَ يُخْبِرُ mean?",
          "options": [
            "to inform",
            "to make sad",
            "to be safe",
            "to deal"
          ],
          "correct": 0
        },
        {
          "title": "to inform (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَخْبَرَ يُخْبِرُ?",
          "options": [
            "إِخْبَارًا",
            "مُعَامَلَةً",
            "مَدْحًا",
            "إِبْغَاضًا"
          ],
          "correct": 0
        },
        {
          "title": "to please",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to please\"?",
          "options": [
            "أَرْضَى يُرْضِيْ",
            "ذَمَّ يَذُمُّ",
            "عَاشَ يَعِيْشُ",
            "عَصَمَ يَعْصِمُ"
          ],
          "correct": 0
        },
        {
          "title": "to please",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَرْضَى يُرْضِيْ mean?",
          "options": [
            "to please",
            "to criticise",
            "to live",
            "to protect"
          ],
          "correct": 0
        },
        {
          "title": "to please (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of أَرْضَى يُرْضِيْ?",
          "options": [
            "إِرْضَاءً",
            "عِصْمَةً",
            "وَعْظًا",
            "اِتِّقَاءً"
          ],
          "correct": 0
        },
        {
          "title": "to bless",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to bless\"?",
          "options": [
            "بَارَكَ يُبَارِكُ",
            "سَلِمَ يَسْلَمُ",
            "عَامَلَ يُعَامِلُ",
            "مَدَحَ يَمْدَحُ"
          ],
          "correct": 0
        },
        {
          "title": "to bless",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does بَارَكَ يُبَارِكُ mean?",
          "options": [
            "to bless",
            "to be safe",
            "to deal",
            "to praise"
          ],
          "correct": 0
        },
        {
          "title": "to bless (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of بَارَكَ يُبَارِكُ?",
          "options": [
            "مُبَارَكَةً",
            "مَدْحًا",
            "إِبْغَاضًا",
            "أَجْرًا"
          ],
          "correct": 0
        },
        {
          "title": "to make sad",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to make sad\"?",
          "options": [
            "حَزَنَ يَحْزُنُ",
            "عَاشَ يَعِيْشُ",
            "عَصَمَ يَعْصِمُ",
            "وَعَظَ يَعِظُ"
          ],
          "correct": 0
        },
        {
          "title": "to make sad",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does حَزَنَ يَحْزُنُ mean?",
          "options": [
            "to make sad",
            "to live",
            "to protect",
            "to advise"
          ],
          "correct": 0
        },
        {
          "title": "to make sad (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of حَزَنَ يَحْزُنُ?",
          "options": [
            "حُزْنًا",
            "وَعْظًا",
            "اِتِّقَاءً",
            "إِخْبَارًا"
          ],
          "correct": 0
        },
        {
          "title": "to criticise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to criticise\"?",
          "options": [
            "ذَمَّ يَذُمُّ",
            "عَامَلَ يُعَامِلُ",
            "مَدَحَ يَمْدَحُ",
            "مَنْ"
          ],
          "correct": 0
        },
        {
          "title": "to criticise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does ذَمَّ يَذُمُّ mean?",
          "options": [
            "to criticise",
            "to deal",
            "to praise",
            "whoever"
          ],
          "correct": 0
        },
        {
          "title": "to criticise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of ذَمَّ يَذُمُّ?",
          "options": [
            "ذَمًّا",
            "إِبْغَاضًا",
            "أَجْرًا",
            "إِرْضَاءً"
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
            "عَصَمَ يَعْصِمُ",
            "وَعَظَ يَعِظُ",
            "مَا"
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
            "to protect",
            "to advise",
            "whatever"
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
            "اِتِّقَاءً",
            "إِخْبَارًا",
            "مُبَارَكَةً"
          ],
          "correct": 0
        },
        {
          "title": "to live",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to live\"?",
          "options": [
            "عَاشَ يَعِيْشُ",
            "مَدَحَ يَمْدَحُ",
            "مَنْ",
            "أَيْنَ"
          ],
          "correct": 0
        },
        {
          "title": "to live",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَاشَ يَعِيْشُ mean?",
          "options": [
            "to live",
            "to praise",
            "whoever",
            "wherever"
          ],
          "correct": 0
        },
        {
          "title": "to live (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَاشَ يَعِيْشُ?",
          "options": [
            "عَيْشًا",
            "أَجْرًا",
            "إِرْضَاءً",
            "حُزْنًا"
          ],
          "correct": 0
        },
        {
          "title": "to deal",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to deal\"?",
          "options": [
            "عَامَلَ يُعَامِلُ",
            "وَعَظَ يَعِظُ",
            "مَا",
            "مَتَى"
          ],
          "correct": 0
        },
        {
          "title": "to deal",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَامَلَ يُعَامِلُ mean?",
          "options": [
            "to deal",
            "to advise",
            "whatever",
            "whenever"
          ],
          "correct": 0
        },
        {
          "title": "to deal (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَامَلَ يُعَامِلُ?",
          "options": [
            "مُعَامَلَةً",
            "إِخْبَارًا",
            "مُبَارَكَةً",
            "ذَمًّا"
          ],
          "correct": 0
        },
        {
          "title": "to protect",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to protect\"?",
          "options": [
            "عَصَمَ يَعْصِمُ",
            "مَنْ",
            "أَيْنَ",
            "أَيَّانَ"
          ],
          "correct": 0
        },
        {
          "title": "to protect",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does عَصَمَ يَعْصِمُ mean?",
          "options": [
            "to protect",
            "whoever",
            "wherever",
            "whenever"
          ],
          "correct": 0
        },
        {
          "title": "to protect (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of عَصَمَ يَعْصِمُ?",
          "options": [
            "عِصْمَةً",
            "إِرْضَاءً",
            "حُزْنًا",
            "سَلَامَةً"
          ],
          "correct": 0
        },
        {
          "title": "to praise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to praise\"?",
          "options": [
            "مَدَحَ يَمْدَحُ",
            "مَا",
            "مَتَى",
            "كَيْفَ"
          ],
          "correct": 0
        },
        {
          "title": "to praise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَدَحَ يَمْدَحُ mean?",
          "options": [
            "to praise",
            "whatever",
            "whenever",
            "however"
          ],
          "correct": 0
        },
        {
          "title": "to praise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of مَدَحَ يَمْدَحُ?",
          "options": [
            "مَدْحًا",
            "مُبَارَكَةً",
            "ذَمًّا",
            "عَيْشًا"
          ],
          "correct": 0
        },
        {
          "title": "to advise",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"to advise\"?",
          "options": [
            "وَعَظَ يَعِظُ",
            "أَيْنَ",
            "أَيَّانَ",
            "أَنَّى"
          ],
          "correct": 0
        },
        {
          "title": "to advise",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does وَعَظَ يَعِظُ mean?",
          "options": [
            "to advise",
            "wherever",
            "whenever",
            "from wherever, however"
          ],
          "correct": 0
        },
        {
          "title": "to advise (مصدر)",
          "kind": "vocab",
          "vocabType": "form",
          "prompt": "What is the مصدر of وَعَظَ يَعِظُ?",
          "options": [
            "وَعْظًا",
            "حُزْنًا",
            "سَلَامَةً",
            "مُعَامَلَةً"
          ],
          "correct": 0
        },
        {
          "title": "whoever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"whoever\"?",
          "options": [
            "مَنْ",
            "مَتَى",
            "كَيْفَ",
            "كَمْ"
          ],
          "correct": 0
        },
        {
          "title": "whoever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَنْ mean?",
          "options": [
            "whoever",
            "whenever",
            "however",
            "however many"
          ],
          "correct": 0
        },
        {
          "title": "whatever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"whatever\"?",
          "options": [
            "مَا",
            "أَيَّانَ",
            "أَنَّى",
            "أَيُّ"
          ],
          "correct": 0
        },
        {
          "title": "whatever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَا mean?",
          "options": [
            "whatever",
            "whenever",
            "from wherever, however",
            "whichever"
          ],
          "correct": 0
        },
        {
          "title": "wherever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"wherever\"?",
          "options": [
            "أَيْنَ",
            "كَيْفَ",
            "كَمْ",
            "إِنْ"
          ],
          "correct": 0
        },
        {
          "title": "wherever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيْنَ mean?",
          "options": [
            "wherever",
            "however",
            "however many",
            "if"
          ],
          "correct": 0
        },
        {
          "title": "whenever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"whenever\"?",
          "options": [
            "مَتَى",
            "أَنَّى",
            "أَيُّ",
            "لَوْ"
          ],
          "correct": 0
        },
        {
          "title": "whenever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does مَتَى mean?",
          "options": [
            "whenever",
            "from wherever, however",
            "whichever",
            "if"
          ],
          "correct": 0
        },
        {
          "title": "whenever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"whenever\"?",
          "options": [
            "أَيَّانَ",
            "كَمْ",
            "إِنْ",
            "لَوْلَا"
          ],
          "correct": 0
        },
        {
          "title": "whenever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيَّانَ mean?",
          "options": [
            "whenever",
            "however many",
            "if",
            "if"
          ],
          "correct": 0
        },
        {
          "title": "however",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"however\"?",
          "options": [
            "كَيْفَ",
            "أَيُّ",
            "لَوْ",
            "خُطْوَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "however",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَيْفَ mean?",
          "options": [
            "however",
            "whichever",
            "if",
            "footsteps"
          ],
          "correct": 0
        },
        {
          "title": "from wherever, however",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"from wherever, however\"?",
          "options": [
            "أَنَّى",
            "إِنْ",
            "لَوْلَا",
            "جِسْمٌ"
          ],
          "correct": 0
        },
        {
          "title": "from wherever, however",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَنَّى mean?",
          "options": [
            "from wherever, however",
            "if",
            "if",
            "body"
          ],
          "correct": 0
        },
        {
          "title": "however many",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"however many\"?",
          "options": [
            "كَمْ",
            "لَوْ",
            "خُطْوَةٌ",
            "صُوْرَةٌ"
          ],
          "correct": 0
        },
        {
          "title": "however many",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does كَمْ mean?",
          "options": [
            "however many",
            "if",
            "footsteps",
            "form, picture"
          ],
          "correct": 0
        },
        {
          "title": "whichever",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"whichever\"?",
          "options": [
            "أَيُّ",
            "لَوْلَا",
            "جِسْمٌ",
            "عَصْرٌ"
          ],
          "correct": 0
        },
        {
          "title": "whichever",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does أَيُّ mean?",
          "options": [
            "whichever",
            "if",
            "body",
            "time, age"
          ],
          "correct": 0
        },
        {
          "title": "if",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"if\"?",
          "options": [
            "إِنْ",
            "خُطْوَةٌ",
            "صُوْرَةٌ",
            "أَبْغَضَ يُبْغِضُ"
          ],
          "correct": 0
        },
        {
          "title": "if",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does إِنْ mean?",
          "options": [
            "if",
            "footsteps",
            "form, picture",
            "to dislike, hate"
          ],
          "correct": 0
        },
        {
          "title": "if",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"if\"?",
          "options": [
            "لَوْ",
            "جِسْمٌ",
            "عَصْرٌ",
            "اِتَّقَى يَتَّقِيْ"
          ],
          "correct": 0
        },
        {
          "title": "if",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَوْ mean?",
          "options": [
            "if",
            "body",
            "time, age",
            "to fear"
          ],
          "correct": 0
        },
        {
          "title": "if",
          "kind": "vocab",
          "vocabType": "en-ar",
          "prompt": "What is the Arabic word for \"if\"?",
          "options": [
            "لَوْلَا",
            "صُوْرَةٌ",
            "أَبْغَضَ يُبْغِضُ",
            "أَجَرَ يَأْجُرُ"
          ],
          "correct": 0
        },
        {
          "title": "if",
          "kind": "vocab",
          "vocabType": "ar-en",
          "prompt": "What does لَوْلَا mean?",
          "options": [
            "if",
            "form, picture",
            "to dislike, hate",
            "to reward"
          ],
          "correct": 0
        }
      ]
    }
  ]
};
